// Recomputes every numeric answer from its `verify` expression and checks problem fields.
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
const safeLoad = (txt, file) => { try { return yaml.load(txt); } catch (e) { console.error(`YAML error in ${file}: ${e.reason} (line ${e.mark && e.mark.line + 1})`); process.exit(1); } };
const dir = path.join(path.dirname(new URL(import.meta.url).pathname), 'content/problems');
const deg = r => r * 180 / Math.PI, rad = d => d * Math.PI / 180;
let bad = 0, n = 0, verified = 0;
for (const subj of fs.readdirSync(dir)) for (const f of fs.readdirSync(path.join(dir, subj))) {
  const list = safeLoad(fs.readFileSync(path.join(dir, subj, f), 'utf8'), f) || [];
  const ids = new Set();
  for (const p of list) {
    n++;
    const where = `${subj}/${f} ${p.id}`;
    if (ids.has(p.id)) { console.log('DUPLICATE id', where); bad++; } ids.add(p.id);
    if (!p.q || !p.sol || !p.lvl || !p.kind) { console.log('MISSING field', where); bad++; }
    if (p.kind === 'num') {
      if (!p.verify) { console.log('NO verify', where); bad++; continue; }
      const got = Function('deg', 'rad', `with (Math) { return (${p.verify}); }`)(deg, rad);
      if (!(Math.abs(got - p.ans) <= p.tol)) { console.log(`MISMATCH ${where}: verify=${got} ans=${p.ans} tol=${p.tol}`); bad++; } else verified++;
      if (!['code', 'both'].includes(p.check)) { console.log(`CHECK flag should be code/both: ${where}`); bad++; }
    }
    if (p.kind === 'mcq' && !(p.ans >= 0 && p.ans < p.opts.length)) { console.log('BAD mcq ans', where); bad++; }
  }
}
console.log(`${n} problems, ${verified} numeric answers recomputed, ${bad} problems found`);
process.exit(bad ? 1 : 0);
