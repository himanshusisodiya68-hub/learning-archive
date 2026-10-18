# Cheap retrofit pass: brief for one batch of lessons

Goal: bring an older lesson up to `docs/content-principles.md` by editing **front matter and the `:::hook` block only**. Do not touch the section bodies.

## Before you start
1. Read `docs/content-principles.md` (all of it).
2. Read the front matter of the gold-standard sample `site/content/lessons/phy/universal-law-of-gravitation.md` (lines 1–90) to see the exact format of `opener`, `life`, `models`, `links`, `next`.
3. For each assigned lesson, read the whole file once (you need its content to write good models and real-life links).

## What to change in each lesson
1. **`summary`**: replace with ONE plain-English sentence of at most 22 words: a promise or a teaser, never a list of syllabus topics. No jargon the reader does not know yet.
   - Bad: "Why physics replaces action at a distance with a field, the field as force per unit charge, superposition, field lines, the electric dipole (axial, ...)."
   - Good: "How a charge pushes another without touching it, and the invisible map of pushes it spreads through space."
2. **`opener`** (new): `story` = 3 short conversational paragraphs, second person, that set up a real, surprising puzzle the reader can see or try; `art` = one inline SVG (viewBox 0 0 320 240) drawing that scene.
   - **The party test**: would a friend at a party say "wait, really? why?" Start from something visible, a paradox, or an astonishing number. Never start like a textbook ("A thin ring of radius R…").
   - Good openers: balloon rubbed on hair bends a thin stream of tap water without touching it; a diamond sparkles while glass of the same cut looks dull; a soap bubble turns rainbow-coloured though soap is colourless, then black just before it pops; the Sun you see at sunset has already set.
   - Each lesson's art must show its OWN scene (never reuse a neighbouring lesson's picture).
   - SVG rules: use `style` colours `var(--c)` (subject colour), `var(--ink)`, `var(--muted)`, `var(--surface)`, `var(--chem)`, `var(--bad)`; labels `font-size:11px`; keep it simple and clear (10–25 shapes). The whole SVG is one YAML single-quoted string: use double quotes inside the SVG and double any apostrophe.
3. **`:::hook` block**: rewrite `q` to follow on from the story conversationally ("So what's your guess…?"); keep 3 options, short and tempting; keep the physics correct and update `answer` if the order changes; `right`/`wrong` in a warm, surprising tone that pays off the story.
4. **`life`** (new): 3–5 concrete places the idea works in daily life (Indian contexts welcome).
5. **`models`** (new): 2–3 `{name, text}` mental models that transfer beyond physics (to life, money, economy, polity, decisions).
6. **`links`** (new): 1–2 `{leaf, name, same, differs}` where the same underlying idea appears elsewhere in the tree. `leaf` must be an existing leaf id (`grep -n "id: <id>" site/content/tree.yaml`).
7. **`symbols`** (new): every symbol the lesson uses, as `{s, means}`: `s` is KaTeX without dollars (e.g. 'E', '\varepsilon_0', '\vec{p}'), `means` is plain words plus the unit, e.g. 'electric field: force per coulomb on a test charge (N/C)'. Order them as they appear. 4–12 items.
8. **`next`** (new): `{q, leaf, name}`, a genuine open question this lesson leaves, answered by the leaf named in your assignment.

Use YAML single-quoted strings for one-line values; use `|` block scalars for `story`. Keep `core`, `outcomes`, `cards`, `margin`, `books` unchanged.

## Check (parallel-safe; do NOT run node build.mjs)
`cd site && node lint-lesson.mjs content/lessons/phy/<leaf>.md` for each file, until it prints ok. Do not commit.

## Reply
At most 6 lines: lessons done, and anything unverified.
