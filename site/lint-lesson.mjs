// Checks individual lesson files without a full build (safe to run while other writers work):
// front matter parses and has core + outcomes, every $…$ / $$…$$ renders in KaTeX, ::: blocks balance, widgets exist.
// Usage: node lint-lesson.mjs content/lessons/phy/<leaf>.md [...]
import fs from 'fs';
import yaml from 'js-yaml';
import katex from 'katex';

const js = fs.readFileSync(new URL('./app/app.js', import.meta.url), 'utf8');
const widgets = new Set([...js.matchAll(/^    '([a-z-]+)'\(el/gm)].map(m => m[1]));
let bad = 0;
const fail = (f, msg) => { console.log(`${f}: ${msg}`); bad++; };
const tex = (f, src, display) => { try { katex.renderToString(src, { displayMode: display, throwOnError: true, strict: 'ignore' }); } catch (e) { fail(f, `KaTeX: ${e.message.split('\n')[0]} in "${src.slice(0, 60)}"`); } };

for (const f of process.argv.slice(2)) {
  const raw = fs.readFileSync(f, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) { fail(f, 'missing front matter'); continue; }
  let meta;
  try { meta = yaml.load(fm[1]); } catch (e) { fail(f, `YAML: ${e.reason} (line ${e.mark && e.mark.line + 1})`); continue; }
  for (const k of ['title', 'summary', 'up_to', 'cards', 'margin']) if (!meta[k]) fail(f, `front matter lacks ${k}`);
  if (!meta.core || !meta.core.idea) fail(f, 'front matter lacks core.idea');
  if (!Array.isArray(meta.outcomes) || meta.outcomes.length < 3) fail(f, 'front matter needs 3-5 outcomes');
  (meta.core && meta.core.formulas || []).forEach(x => tex(f, String(x.tex), true));
  const body = raw.slice(fm[0].length);
  for (const m of body.matchAll(/\$\$([\s\S]+?)\$\$/g)) tex(f, m[1].trim(), true);
  const inline = body.replace(/\$\$[\s\S]+?\$\$/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '');
  for (const m of inline.matchAll(/(^|[^\\$])\$([^\s$](?:[^$\n]*?[^\s$])?)\$/g)) tex(f, m[2], false);
  let open = 0;
  for (const line of body.split('\n')) {
    const t = line.trim();
    if (/^:::[a-z]/.test(t)) { if (open) fail(f, `block opened inside another: ${t}`); open++; const w = t.match(/^:::widget\s+name=([a-z-]+)/); if (w && !widgets.has(w[1])) fail(f, `unknown widget ${w[1]}`); }
    else if (t === ':::') { if (!open) fail(f, 'stray :::'); open = Math.max(0, open - 1); }
  }
  if (open) fail(f, 'unclosed ::: block');
  for (const id of ['s-keys', 's-traps']) if (!body.includes(`id=${id}`)) fail(f, `missing section ${id}`);
}
console.log(bad ? `${bad} problem(s)` : `ok: ${process.argv.length - 2} lesson file(s)`);
process.exitCode = bad ? 1 : 0;
