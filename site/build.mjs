// Builds the static site into dist/.
// content/tree.yaml            knowledge tree (subjects > pillars > branches > leaves) with first-principles text
// content/lessons/<subj>/<leaf>.md   one lesson per leaf: YAML front matter, ## sections, ::: blocks, $LaTeX$
// content/problems/<leaf>.yaml  problems for a leaf, NCERT questions word for word plus higher levels
// content/ncert/*.yaml          NCERT books: chapters in order, which leaves each chapter covers
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
const safeLoad = (txt, file) => { try { return yaml.load(txt); } catch (e) { console.error(`YAML error in ${file}: ${e.reason} (line ${e.mark && e.mark.line + 1})`); process.exit(1); } };
import katex from 'katex';
import { marked } from 'marked';
const escHtml = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const C = p => path.join(ROOT, 'content', p);
const DIST = process.env.DIST_DIR ? path.resolve(process.env.DIST_DIR) : path.join(ROOT, 'dist');
const readYaml = f => safeLoad(fs.readFileSync(f, 'utf8'), f);
const LEVEL_LABEL = { 1: 'Class 10', 2: 'Class 12', 3: 'JEE Advanced', 4: 'Olympiad' };

marked.use({ gfm: true, breaks: false });

/* ---------- maths: protect $..$ and $$..$$ from markdown, render with KaTeX ---------- */
function renderMath(src, store) {
  const put = html => { store.push(html); return `@@M${store.length - 1}@@`; };
  src = src.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => put(`<div class="eq">${katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false, strict: 'ignore' })}</div>`));
  src = src.replace(/(^|[^\\$])\$([^\s$](?:[^$\n]*?[^\s$])?)\$/g, (_, pre, tex) => pre + put(katex.renderToString(tex, { throwOnError: false, strict: 'ignore' })));
  return src.replace(/\\\$/g, '$');
}
function md(src, { inline = false } = {}) {
  if (src == null) return '';
  const store = [];
  let s = renderMath(String(src), store);
  let html = inline ? marked.parseInline(s) : marked.parse(s);
  html = html.replace(/@@M(\d+)@@/g, (_, i) => store[+i]);
  // "{lvl=N}" at the end of a list item limits it to that depth
  html = html.replace(/<li>([\s\S]*?)\s*\{lvl=(\d)\}\s*<\/li>/g, '<li data-lvl="$2">$1</li>');
  return html;
}
const mdi = s => md(s, { inline: true });
const attrsOf = s => { const a = {}; (s || '').replace(/(\w+)=("([^"]*)"|\S+)/g, (_, k, v, q) => { a[k] = q ?? v; }); return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const stripTags = s => String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/* ---------- ::: blocks ---------- */
// hook/qc bodies: one "key: value" per line (values may contain colons); options is a JSON array
function parseChoice(body) {
  const o = {};
  for (const line of body.split('\n')) { const m = line.match(/^(\w+):\s?(.*)$/); if (m) o[m[1]] = m[2].trim(); }
  o.options = JSON.parse(o.options); o.answer = +o.answer;
  return o;
}
function choiceBlock(cls, y, a) {
  const lvl = a.lvl ? ` data-lvl="${a.lvl}"` : '';
  const opts = y.options.map((o, i) => `<button class="${cls === 'hook' ? 'opt' : ''}" data-qa="${i === y.answer ? 1 : 0}">${mdi(o)}</button>`).join('');
  if (cls === 'hook') return `<div class="hook"${lvl}><div class="eyebrow">Try this before reading</div><div class="q">${mdi(y.q)}</div><div class="opts ${y.options.length === 3 ? 'three' : ''}">${opts}</div><div class="fb qf" hidden data-ok="${esc(mdi(y.right))}" data-no="${esc(mdi(y.wrong))}"></div></div>`;
  return `<div class="qc"${lvl}><span class="qh"><span data-icon="question"></span>Quick check</span><p class="q">${mdi(y.q)}</p><div class="qo">${opts}</div><p class="qf" hidden data-ok="${esc(mdi(y.right))}" data-no="${esc(mdi(y.wrong))}"></p></div>`;
}
function block(kind, attrStr, body) {
  const a = attrsOf(attrStr), lvl = a.lvl ? ` data-lvl="${a.lvl}"` : '';
  switch (kind) {
    case 'hook': case 'qc': return choiceBlock(kind, parseChoice(body), a);
    case 'worked': return `<div class="worked"${lvl}>${a.title ? `<div class="wt">${mdi(a.title)}</div>` : ''}${md(body)}</div>`;
    case 'law': return `<div class="law"${lvl}>${md(body)}${a.caption ? `<small>${mdi(a.caption)}</small>` : ''}</div>`;
    case 'eq': return `<div class="eqbox"${lvl}>${md(body)}${a.caption ? `<small>${mdi(a.caption)}</small>` : ''}</div>`;
    case 'figure': return `<figure class="fig"${lvl}>${body.trim()}${a.caption ? `<figcaption>${mdi(a.caption)}</figcaption>` : ''}</figure>`;
    case 'figrow': return `<div class="fig-row"${lvl}>${body.trim()}</div>`;
    case 'see': return `<div class="see"${lvl}>${body.trim()}</div>`;
    case 'keys': return `<div class="keys"${lvl}>${md(body)}<button class="btn quiet" data-add-keys>Add these to my review cards</button></div>`;
    case 'traps': return `<div class="traps"${lvl}>${md(body)}</div>`;
    case 'note': return `<div class="note-box ${a.tone || ''}"${lvl}>${a.title ? `<b>${mdi(a.title)}</b>` : ''}${md(body)}</div>`;
    case 'widget': return `<div class="widget" data-widget="${esc(a.name)}" data-opts="${esc(JSON.stringify(a))}"${lvl}></div>`;
    case 'html': return body;
    default: throw new Error(`Unknown block ::: ${kind}`);
  }
}
function renderBody(src) {
  const parts = []; let rest = src;
  const re = /^:::(\w+)([^\n]*)\n([\s\S]*?)^:::\s*$/m;
  let m;
  while ((m = re.exec(rest))) {
    parts.push(md(rest.slice(0, m.index)));
    parts.push(block(m[1], m[2], m[3]));
    rest = rest.slice(m.index + m[0].length);
  }
  parts.push(md(rest));
  return parts.join('\n');
}

/* ---------- lessons ---------- */
function parseLesson(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) throw new Error(`${file}: missing front matter`);
  const meta = safeLoad(fm[1], file);
  const body = raw.slice(fm[0].length);
  const chunks = body.split(/^## /m);
  const intro = renderBody(chunks.shift());
  const sections = chunks.map(ch => {
    const nl = ch.indexOf('\n');
    let head = ch.slice(0, nl).trim(); const text = ch.slice(nl + 1);
    const am = head.match(/\{([^}]*)\}\s*$/); const a = am ? attrsOf(am[1]) : {};
    if (am) head = head.slice(0, am.index).trim();
    const id = a.id || 's-' + head.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const lvl = +(a.lvl || 1);
    const html = renderBody(text);
    return { id, lvl, title: head, titleHtml: mdi(head), label: a.label || LEVEL_LABEL[lvl], html, text: stripTags(html).slice(0, 4000) };
  });
  const co = meta.core;
  const core = co ? {
    ideaHtml: mdi(co.idea || ''),
    formulas: (co.formulas || []).map(f => ({ html: katex.renderToString(String(f.tex), { displayMode: true, throwOnError: false, strict: 'ignore' }), label: f.label ? mdi(f.label) : '' })),
    patterns: (co.patterns || []).map(x => ({ text: escHtml(String(x.text)), label: x.label ? mdi(x.label) : '' })),
    conditions: (co.conditions || []).map(c => mdi(c)),
    signHtml: co.sign ? mdi(co.sign) : ''
  } : null;
  const life = (meta.life || []).map(x => mdi(x));
  const models = (meta.models || []).map(x => ({ name: mdi(x.name || ''), html: mdi(x.text || '') }));
  const links = (meta.links || []).map(x => ({ leaf: x.leaf || '', name: x.name || '', same: mdi(x.same || ''), differs: mdi(x.differs || '') }));
  const next = meta.next ? { q: mdi(meta.next.q || ''), leaf: meta.next.leaf || '', name: meta.next.name || '' } : null;
  const hm = body.match(/^:::hook[^\n]*\n([\s\S]*?)\n:::/m), hookQ = hm ? mdi(parseChoice(hm[1]).q || '') : '';
  const opener = meta.opener ? { story: md(meta.opener.story || ''), art: meta.opener.art || '' } : null;
  const symbols = (meta.symbols || []).map(x => ({ s: katex.renderToString(String(x.s), { throwOnError: false, strict: 'ignore' }), m: mdi(String(x.means || '')) }));
  return { ...meta, symbols, hookQ, opener, life, models, links, next, core, outcomes: (meta.outcomes || []).map(o => mdi(o)), introHtml: intro, sections, margin: (meta.margin || []).map(n => ({ ...n, html: mdi(n.text) })),
    cards: (meta.cards || []).map(c => ({ front: mdi(c.front), back: md(c.back) })) };
}

/* ---------- problems ---------- */
function renderProblem(p, leafId) {
  const out = { ...p, leaf: leafId,
    q: md(p.q), sol: md(p.sol), hints: (p.hints || []).map(h => md(h)),
    opts: p.opts ? p.opts.map(o => mdi(o)) : undefined,
    answer_key: p.answer_key ? mdi(p.answer_key) : undefined };
  out.plain = stripTags(out.q).slice(0, 300);
  if (p.kind === 'num' && (typeof p.ans !== 'number' || typeof p.tol !== 'number')) throw new Error(`${leafId}/${p.id}: numeric problem needs ans and tol`);
  if (p.kind === 'mcq' && typeof p.ans !== 'number') throw new Error(`${leafId}/${p.id}: mcq needs ans index`);
  return out;
}

/* ---------- build ---------- */
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'data', 'lessons'), { recursive: true });
fs.mkdirSync(path.join(DIST, 'data', 'problems'), { recursive: true });
const write = (rel, obj) => fs.writeFileSync(path.join(DIST, rel), JSON.stringify(obj));

const tree = readYaml(C('tree.yaml'));
const search = [];
const leafIndex = {};
let liveCount = 0, problemCount = 0;

const lifeIcons = fs.existsSync(C('life-icons.yaml')) ? readYaml(C('life-icons.yaml')) || {} : {};
for (const s of tree.subjects) {
  s.whatHtml = md(s.what); s.linksHtml = mdi(s.links || '');
  search.push({ g: 'Topics', c: s.id, title: s.name, path: 'Subject', text: stripTags(s.whatHtml), go: { subj: s.id } });
  (s.pillars || []).forEach((p, pi) => {
    p.whatHtml = md(p.what);
    search.push({ g: 'Topics', c: s.id, icon: p.id, title: p.name, path: `${s.name} · pillar`, text: (p.tag || '') + ' ' + stripTags(p.whatHtml), go: { subj: s.id, pillar: pi } });
    p.branches.forEach((b, bi) => {
      b.whatHtml = md(b.what);
      search.push({ g: 'Topics', c: s.id, icon: p.id, title: b.name, path: `${s.name} › ${p.name} · branch`, text: (b.tag || '') + ' ' + stripTags(b.whatHtml), go: { subj: s.id, pillar: pi, branch: bi } });
      b.leaves.forEach((l, li) => {
        const key = `${s.id}/${l.id}`;
        const lf = C(`lessons/${s.id}/${l.id}.md`), pf = C(`problems/${s.id}/${l.id}.yaml`);
        leafIndex[key] = { subj: s.id, pillar: pi, branch: bi, leaf: li, name: l.name };
        let probs = [];
        if (fs.existsSync(pf)) {
          probs = (readYaml(pf) || []).map(p => renderProblem(p, key));
          write(`data/problems/${s.id}--${l.id}.json`, probs);
          l.problems = probs.length; problemCount += probs.length;
          l.levels = [...new Set(probs.map(p => p.lvl))];
          probs.forEach((p, i) => search.push({ g: 'Problems', c: s.id, icon: 'pen', title: p.plain.slice(0, 140), path: `${p.source || p.lvl} · ${l.name}`, text: '', go: { problem: key, index: i } }));
        }
        if (fs.existsSync(lf)) {
          const lesson = parseLesson(lf);
          lesson.key = key; lesson.problems = probs.length;
          lesson.lifeIcons = lifeIcons[key] || [];
          if (lesson.life.length && lesson.lifeIcons.length !== lesson.life.length) console.warn(`life-icons.yaml: ${key} has ${lesson.lifeIcons.length} icons for ${lesson.life.length} items`);
          write(`data/lessons/${s.id}--${l.id}.json`, lesson);
          l.live = true; liveCount++; l.summary = lesson.summary || ''; l.sections = lesson.sections.length; l.ask = lesson.hookQ || ''; l.can = (lesson.outcomes || []).slice(0, 2); l.nextq = lesson.next && lesson.next.leaf ? { q: lesson.next.q, leaf: lesson.next.leaf } : null;
          l.sparks = [...(lesson.margin || []).filter(m => m.kind !== 'tip').map(m => ({ t: m.title || m.kind, h: m.html })), ...(lesson.models || []).map(m => ({ t: 'Mental model: ' + stripTags(m.name), h: m.html }))];
          search.push({ g: 'Lessons', c: s.id, icon: 'lesson', title: l.name, path: `${s.name} › ${p.name} › ${b.name}`, text: lesson.summary || '', go: { lesson: key } });
          lesson.sections.forEach(sec => search.push({ g: 'Lessons', c: s.id, icon: 'lesson', title: sec.title, path: `${l.name} · section`, text: sec.text, go: { lesson: key, section: sec.id } }));
        } else {
          search.push({ g: 'Topics', c: s.id, icon: p.id, title: l.name, path: `${s.name} › ${p.name} › ${b.name} · lesson not written yet`, text: '', go: { subj: s.id, pillar: pi, branch: bi, leaf: li } });
        }
      });
    });
  });
}

const ncert = fs.readdirSync(C('ncert')).filter(f => f.endsWith('.yaml')).map(f => readYaml(C('ncert/' + f)));
for (const book of ncert) for (const ch of book.chapters) {
  ch.leaves = (ch.leaves || []).filter(k => leafIndex[k]);
  ch.live = ch.leaves.some(k => { const L = leafIndex[k]; return tree.subjects.find(s => s.id === L.subj).pillars[L.pillar].branches[L.branch].leaves[L.leaf].live; });
  search.push({ g: 'NCERT chapters', c: book.subject, icon: 'chapter', title: ch.title, path: `Class ${book.class} ${book.name}${ch.restored ? ' · restored chapter' : ''}`, text: '', go: { ncert: `${book.class}`, lesson: ch.live ? ch.leaves[0] : undefined } });
}

write('data/tree.json', tree);
write('data/ncert.json', ncert);
write('data/search.json', search);

/* ---------- page: inline CSS (app + KaTeX with fonts as data URIs) and JS ---------- */
const kdir = path.join(ROOT, 'node_modules/katex/dist');
let kcss = fs.readFileSync(path.join(kdir, 'katex.min.css'), 'utf8');
kcss = kcss.replace(/@font-face\{[^}]*\}/g, face => {
  const m = face.match(/url\((fonts\/[^)]+\.woff2)\)/);
  if (!m) return '';
  const b64 = fs.readFileSync(path.join(kdir, m[1])).toString('base64');
  return face.replace(/src:[^;}]+/, `src:url(data:font/woff2;base64,${b64}) format("woff2")`);
});
const shell = fs.readFileSync(path.join(ROOT, 'app/shell.html'), 'utf8');
const css = fs.readFileSync(path.join(ROOT, 'app/app.css'), 'utf8');
const js = fs.readFileSync(path.join(ROOT, 'app/app.js'), 'utf8');
const page = shell.replace('/*CSS*/', () => css + '\n' + kcss).replace('/*JS*/', () => js.replace(/<\/script/g, '<\\/script'));
fs.writeFileSync(path.join(DIST, 'index.html'), page);
// Standalone document (Vercel / phone): the artifact host adds its own skeleton, a plain host does not.
const standalone = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#F7F7FB" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#0B0D1A" media="(prefers-color-scheme: dark)"><meta name="color-scheme" content="light dark"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Polymath"><meta name="apple-mobile-web-app-status-bar-style" content="default"><link rel="manifest" href="manifest.webmanifest"><link rel="icon" href="icons/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="icons/apple-touch-icon.png"><style>[hidden]{display:none!important}html{-webkit-text-size-adjust:100%;text-size-adjust:100%}body{margin:0}</style></head><body>${page}</body></html>`;
fs.writeFileSync(path.join(DIST, 'standalone.html'), standalone);
// On a plain host (Vercel sets VERCEL=1) the root file must be the full document, because an existing index.html wins over any rewrite.
if (process.env.VERCEL) fs.writeFileSync(path.join(DIST, 'index.html'), standalone);
fs.writeFileSync(path.join(DIST, 'preview.html'), standalone);
fs.mkdirSync(path.join(DIST, 'icons'), { recursive: true });
for (const f of fs.readdirSync(path.join(ROOT, 'app/icons'))) fs.copyFileSync(path.join(ROOT, 'app/icons', f), path.join(DIST, 'icons', f));
fs.writeFileSync(path.join(DIST, 'manifest.webmanifest'), JSON.stringify({ name: 'Polymath', short_name: 'Polymath', start_url: './standalone.html', scope: './', display: 'standalone', background_color: '#F7F7FB', theme_color: '#5B3DF5', icons: [{ src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' }, { src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml' }] }));
console.log(`built: ${liveCount} lessons, ${problemCount} problems, ${search.length} search entries, page ${(page.length / 1024).toFixed(0)} KB`);

// Lint the output without a browser: KaTeX errors, unknown widgets, unbalanced ::: blocks, empty solutions.
{
  const widgets = new Set([...js.matchAll(/^    '([a-z-]+)'\(el/gm)].map(m => m[1]));
  const issues = [];
  for (const dir of ['lessons', 'problems']) for (const f of fs.readdirSync(path.join(DIST, 'data', dir))) {
    const txt = fs.readFileSync(path.join(DIST, 'data', dir, f), 'utf8');
    const kerr = (txt.match(/katex-error/g) || []).length;
    if (kerr) issues.push(`${dir}/${f}: ${kerr} KaTeX error(s), e.g. ${(txt.match(/katex-error[^>]*title=\\"([^\\]*)/) || [])[1] || ''}`);
    for (const m of txt.matchAll(/data-widget=\\"([^\\]+)\\"/g)) if (!widgets.has(m[1])) issues.push(`${dir}/${f}: unknown widget "${m[1]}"`);
    if (dir === 'lessons' && (/"core":null/.test(txt) || /"outcomes":\[\]/.test(txt))) issues.push(`${dir}/${f}: missing core idea or outcomes in front matter`);
    if (/(^|[^\w]):::/.test(txt.replace(/<code>[^<]*<\/code>/g, ''))) issues.push(`${dir}/${f}: stray ":::" (unclosed or misspelt block)`);
  }
  if (issues.length) { console.log('LINT:\n  ' + issues.join('\n  ')); process.exitCode = 1; } else console.log('lint: no KaTeX errors, unknown widgets or stray blocks');
}
