#!/usr/bin/env python3
"""Check that every lesson's `links[].leaf` and `next.leaf` names a real leaf (subj/leaf-id) in tree.yaml."""
import glob, os, re, sys
import yaml

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'content'))
tree = yaml.safe_load(open('tree.yaml'))
subjects = tree['subjects'] if isinstance(tree, dict) and 'subjects' in tree else tree
valid = {f"{s['id']}/{l['id']}" for s in subjects for p in s.get('pillars', [])
         for b in p.get('branches', []) for l in b.get('leaves', [])}

bad = []
for f in sorted(glob.glob('lessons/*/*.md')):
    m = re.match(r'---\n(.*?)\n---', open(f).read(), re.S)
    if not m:
        continue
    try:
        fm = yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError:
        bad.append((f, 'front matter does not parse'))
        continue
    ids = [x.get('leaf') for x in fm.get('links') or [] if isinstance(x, dict)]
    if isinstance(fm.get('next'), dict):
        ids.append(fm['next'].get('leaf'))
    bad += [(f, i) for i in ids if i and i not in valid]

for f, i in bad:
    print(f'{f}: unknown leaf {i}')
print(f'{len(bad)} bad link(s); {len(valid)} leaves in tree')
sys.exit(1 if bad else 0)
