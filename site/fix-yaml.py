# Rewrites "  key: value" lines whose plain value contains ": " or " #" as block scalars, so YAML parses them.
import re, sys, glob
for f in sys.argv[1:] or glob.glob('content/problems/*/*.yaml'):
    out = []
    for line in open(f).read().split('\n'):
        m = re.match(r'^(\s{2,4})(q|sol|ask|source|answer_key):\s(.+)$', line)
        if m and not m.group(3).startswith(('|', '>', '"', "'")) and (': ' in m.group(3) or ' #' in m.group(3)):
            line = f'{m.group(1)}{m.group(2)}: |\n{m.group(1)}  {m.group(3)}'
        out.append(line)
    open(f, 'w').write('\n'.join(out))
