// Renders every figure (inline <svg>) of every built lesson in headless Chromium with the app's CSS and fonts,
// then measures each <text> label and reports:
//   edge     text runs past the edge of the figure (clipped)
//   box      text starts inside a box, circle or ellipse but spills out of it
//   overlap  two labels overlap each other
//   line     a line, arrow or curve runs through the middle of a label
// Figures are numbered from 1 within their section (or the opener art).
// DIST_DIR=<dir> reads a build made with the same variable (lets parallel sessions build separately).
// Run after `node build.mjs`:  node check-figures.mjs [lesson-key-substring] [--json out.json]
// Needs Playwright with Chromium (preinstalled in the cloud container; not run in CI).
import fs from 'fs';
import path from 'path';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const DIST = process.env.DIST_DIR ? path.resolve(process.env.DIST_DIR) : path.join(path.dirname(new URL(import.meta.url).pathname), 'dist');
const args = process.argv.slice(2), ji = args.indexOf('--json');
const jsonOut = ji >= 0 ? args.splice(ji, 2)[1] : null, only = args[0] || '';
const index = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const css = (index.match(/<style>([\s\S]*?)<\/style>/) || [, ''])[1];
const fontLink = (index.match(/<link rel="stylesheet" href="https:\/\/fonts[^>]*>/) || [''])[0];
const files = fs.readdirSync(path.join(DIST, 'data/lessons')).filter(f => f.endsWith('.json') && f.includes(only.replace('/', '--'))).sort();

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
await page.setContent(`<!doctype html><html><head>${fontLink}<style>${css}</style></head><body><div class="lpane s-phy" style="width:720px;padding:20px"><div class="prose" id="root"></div></div></body></html>`);
await page.evaluate(() => document.fonts.ready);

const issues = [];
for (const f of files) {
  const L = JSON.parse(fs.readFileSync(path.join(DIST, 'data/lessons', f), 'utf8'));
  const key = L.key || f.replace('--', '/').replace(/\.json$/, '');
  const parts = [L.opener && L.opener.art ? `<div class="op-art" data-where="opener art">${L.opener.art}</div>` : '',
    L.introHtml ? `<div data-where="intro">${L.introHtml}</div>` : '',
    ...(L.sections || []).map(s => `<section class="sec" data-where="${s.id}">${s.html}</section>`)].join('');
  if (!parts.includes('<svg')) continue;
  const found = await page.evaluate(async html => {
    const root = document.getElementById('root'); root.innerHTML = html;
    await document.fonts.ready; await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    const out = [], T = 1.5;
    const inside = (p, r) => p.x >= r.left && p.x <= r.right && p.y >= r.top && p.y <= r.bottom;
    const area = r => Math.max(0, r.right - r.left) * Math.max(0, r.bottom - r.top);
    const inter = (a, b) => ({ left: Math.max(a.left, b.left), right: Math.min(a.right, b.right), top: Math.max(a.top, b.top), bottom: Math.min(a.bottom, b.bottom) });
    root.querySelectorAll('svg').forEach(svg => {
      if (svg.closest('.katex') || svg.parentElement.closest('svg')) return;
      const box = svg.closest('[data-where]'), where = box ? box.dataset.where : '';
      const si = box ? [...box.querySelectorAll('svg')].filter(x => !x.closest('.katex') && !x.parentElement.closest('svg')).indexOf(svg) + 1 : 0;
      const S = svg.getBoundingClientRect(); if (S.width < 40) return;
      const shapes = [...svg.querySelectorAll('rect, circle, ellipse')].map(e => e.getBoundingClientRect())
        .filter(r => r.width > 4 && r.height > 4 && !(r.width > S.width * .9 && r.height > S.height * .9));
      const texts = [...svg.querySelectorAll('text')].filter(t => t.textContent.trim()).map(t => ({ t: t.textContent.trim().slice(0, 60), r: t.getBoundingClientRect() }))
        .filter(x => x.r.width > 0);
      texts.forEach(x => {
        const r = x.r, c = { x: (r.left + r.right) / 2, y: (r.top + r.bottom) / 2 };
        if (r.left < S.left - T || r.right > S.right + T || r.top < S.top - T || r.bottom > S.bottom + T) out.push({ fig: si, where, kind: 'edge', text: x.t });
        else for (const b of shapes) {
          if (!inside(c, b)) continue;
          const over = Math.max(b.left - r.left, r.right - b.right);
          if (over > T + 1 && area(inter(r, b)) < area(r) - 1) { out.push({ fig: si, where, kind: 'box', text: x.t, by: Math.round(over) }); break; }
        }
      });
      const pts = [];
      svg.querySelectorAll('line, polyline, path').forEach(e => { if (e.closest('marker, defs, text')) return;
        let len = 0; try { len = e.getTotalLength(); } catch { return; } const m = e.getScreenCTM(); if (!len || !m || len > 5000) return;
        for (let d = 0; d <= len; d += 2) { const q = e.getPointAtLength(d); pts.push(new DOMPoint(q.x, q.y).matrixTransform(m)); } });
      texts.forEach(x => { const r = x.r, h = r.height * .3, w = Math.min(4, r.width * .2), inner = { left: r.left + w, right: r.right - w, top: r.top + h, bottom: r.bottom - h };
        const hits = pts.filter(q => inside(q, inner)).length; if (hits >= 3) out.push({ fig: si, where, kind: 'line', text: x.t }); });
      for (let i = 0; i < texts.length; i++) for (let j = i + 1; j < texts.length; j++) {
        const a = texts[i].r, b = texts[j].r, ov = area(inter(a, b));
        if (ov > .25 * Math.min(area(a), area(b))) out.push({ fig: si, where, kind: 'overlap', text: `${texts[i].t} ⟂ ${texts[j].t}` });
      }
    });
    return out;
  }, parts);
  found.forEach(x => issues.push({ lesson: key, ...x }));
}
await browser.close();

const by = {}; issues.forEach(x => (by[x.lesson] = by[x.lesson] || []).push(x));
for (const [k, xs] of Object.entries(by)) {
  console.log(k);
  xs.forEach(x => console.log(`  [${x.kind}] ${x.where} fig ${x.fig}: ${x.text}${x.by ? ` (out by ${x.by}px)` : ''}`));
}
const n = k => issues.filter(x => x.kind === k).length;
console.log(`\nfigures: ${issues.length} label problem(s) in ${Object.keys(by).length} lesson(s): ${n('edge')} edge, ${n('box')} box, ${n('overlap')} overlap, ${n('line')} line`);
if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify(issues, null, 1));
process.exitCode = issues.length ? 1 : 0;
