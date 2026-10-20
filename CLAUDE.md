# Learning Archive: instructions for Claude

A private website that preserves the owner's school learning: NCERT Classes 6–12, then JEE and Olympiad. It has two views:
- **class-wise**: NCERT books and chapters;
- **subject-wise**: a knowledge tree, subject → pillar → branch → leaf, built from first principles.

Phase 1 is Science and Maths. Maths and Physics go to Olympiad level; Chemistry to JEE; Biology is NCERT only.
Later phases: English (Wren & Martin, literature), a programming/AI foundation, then Instrumentation & Control Engineering.

## Owner's standing requirements

- **Every NCERT question word for word**, with a full solution. That means in-text questions, examples and exercises, taken from the current reprint.
- **Key problems from higher levels**: board, JEE Main, JEE Advanced, Olympiad.
- **First-principles explanation at every tree level.** Explain why a subject has these pillars and why a pillar splits this way before any specific concept.
- **Theory deep enough for Irodov or Olympiad problems**, layered so Class 10 readers can stop early.
- **Classic-book problems** (Irodov, H. C. Verma, Resnick, etc.) are copied word for word **only from PDFs the owner uploads**. They will be in a Google Drive folder. Never reproduce book problems from memory; write original problems instead and label them as original.
- **Restored chapters** (removed in the rationalised NCERT edition) go in their original logical place in the class view, never at the end.
- **Reality filter.** Never present inferred or unverified content as fact; label it [Inference], [Unverified] or [Speculation]. Examples: data missing from a reprinted question, figure values worked backwards from the answer key, discrepancies between question and answer key. State these in the solution.
- **Share once a pillar is complete**: republish the site and send the link with a short summary of what changed and anything unverified.

## Working together (two contributors)

The owner (`himanshusisodiya68-hub`) and a collaborator build this together. Each runs Claude on their own account and token budget. Sessions share nothing except this repo, so everything another session needs must be committed. The guide for humans is `docs/collaboration.md`.

- **Claim before you start.** Every piece of work (a chapter, a branch of leaves, an app fix) is a GitHub issue assigned to one person. Before starting, check the open issues (`gh issue list` or the GitHub page) and leave alone any leaf claimed by the other person. If the user names no issue, ask which one, or offer to open one.
- **Split by leaf, never by file type.** For the life of the issue, one person owns every file of a leaf: its problems, its lesson and its tree entry.
- **Shared hotspot files**: `content/tree.yaml`, `content/ncert/*.yaml`, `site/app/*`, `site/*.mjs` and "Build order and status" below. Pull `main` just before editing them, keep each edit small, and list them in the PR.
- **The owner's standing requirements bind both contributors.** Put questions for the owner in the issue or PR, not in a guess.
- **Never leave work only inside a session.** Before a session ends or runs into a usage limit, commit and push, even half-finished drafts (open a draft PR). Then comment on the issue with what is done and what comes next, so either person can continue from the branch.
- **Status lives in two places**: issues say who is doing what now; "Build order and status" says what is finished. Update that section in the PR that finishes the work.

## Content principles (mandatory)

**Read `docs/content-principles.md` before writing or revising any lesson.** In short: life first; Feynman style (real-life puzzle, plain words before notation, first principles); every lesson has an illustrated opener card, core idea, In real life, depth sections, Think with it (mental models, same idea elsewhere), wrap-up and a closing question that leads to the next lesson. CS levels follow the career ladder (Foundations, SDE-1, SDE-2, SDE-3). Notation rules (words before symbols, one new symbol per paragraph, every equation read aloud, a Symbols card) are in §2a. Reference books: catalogue and token-free download method in `docs/refs/books.md`; save reading notes in `docs/refs/` so books are read once.

## Keeping cost down

Each contributor pays for their own tokens. Work lean.

**Model split.**
- The main session runs on **Sonnet**: `.claude/settings.json` sets `"model": "sonnet"`; also pick Sonnet when starting a session if the UI asks. It does the routine work:
  - downloading and extracting NCERT;
  - updating `tree.yaml` and `ncert/*.yaml`;
  - copying NCERT questions word for word, with their solutions;
  - `found`, `board` and `main` problems;
  - checks, builds, git and publishing.
- **Opus writes the deep content** through the `theory-writer` subagent (`.claude/agents/theory-writer.md`, `model: opus`): the lesson file for each leaf, plus its `adv` and `oly` problems. Call it once per leaf, after the problems file holds the NCERT and lower-level problems. Pass it the leaf id, the NCERT section numbers and the problems-file path. Run independent leaves in parallel. Don't write lesson theory in the main session.

**No browser by default.**
- `node build.mjs` lints the output without a browser: KaTeX errors, unknown widget names, unclosed `:::` blocks. Together with `node check-answers.mjs`, that is the whole test for content changes.
- Run Playwright or take screenshots **only when `site/app/*` changes** (a new or changed widget, a UI fix). Even then, screenshot only the changed widget.

**Other habits.**
- One chapter (or a few leaves) per session. Don't reread finished lessons; open one existing lesson only as a style reference if needed.
- Read only what you need from NCERT PDFs: the exercise and example sections, via `pdftotext` and `grep -n`. Render a page image (`pdftoppm -r 80 -f N -l N -png`) only when a question depends on a figure.
- Write each file in one go; avoid many small edits.
- No workflows or fan-out agents beyond `theory-writer` unless the owner asks.

## Repository layout

```
CLAUDE.md                 this file
docs/collaboration.md     how the two contributors split, hand off and review work
.github/                  CI (check.yml), PR template, "Claim work" issue template
docs/reference-books.md   books the owner will upload (★ = phase 1)
design/                   mockups (reference only)
site/
  package.json            npm run build | npm run check
  build.mjs               content → dist/ (index.html + data/*.json); maths ships as TeX (<span class="tx">) and KaTeX draws it in the browser (katex.min.js, loaded once); the build still renders every formula once so a TeX error fails the lint
  check-answers.mjs       recomputes every numeric answer from its `verify` expression
  check-figures.mjs       renders every figure in Chromium and reports clipped, spilling, overlapping or crossed-out labels
  lint-lesson.mjs         checks single lesson files (front matter, core, KaTeX, blocks, widgets) without a build; safe in parallel
  fix-yaml.py             quotes YAML values containing ": " or " #"; run before every build
  app/shell.html, app.css, app.js   the single-page app (vanilla JS, inline in index.html)
  content/
    tree.yaml             the knowledge tree; every leaf has id, name, from (C6..C12, JEE, OLY)
    ncert/classNN-<subject>.yaml    book index: chapters, pdf code, leaves covering each chapter
    lessons/<subj>/<leaf-id>.md     one lesson per leaf (a leaf is live once this file exists)
    problems/<subj>/<leaf-id>.yaml  problems for that leaf
  dist/                   build output (git-ignored)
```

Subject ids: `phy`, `mat`, `chem`, `bio`, `eng`, `cs`. Leaf `from` tags: `C6`–`C12`, `JEE`, `OLY`, and for CS/life topics `BEG`, `INT`, `ADV`, `SDE`, `LIFE`.

## Workflow for a new chapter

1. Download the NCERT chapter and its answer key into the scratchpad (not the repo): `curl -sO https://ncert.nic.in/textbook/pdf/<code>.pdf`, then `pdftotext -layout`. Verified codes:
   - Class 10 Science `jesc101`–`jesc113`, answers `jesc1an`;
   - Class 10 Maths `jemh101`–`jemh114`, answers `jemh1an`;
   - Class 12 Physics Part 2 `leph201`–`leph206` (Chs 9–14), answers `leph2an`;
   - Class 7 Curiosity Ch 11 `gecu111`; Class 8 Ch 10 `hecu110`.

   Find other codes from ncert.nic.in/textbook.php.
2. Map the chapter to leaves in `tree.yaml`. Add leaves if needed, each with a first-principles `what`; branches and pillars also carry `split` and `links`. Add `leaves: [subj/leaf-id, ...]` to the chapter in `content/ncert/...yaml`.
3. Write `problems/<subj>/<leaf>.yaml` with every NCERT item word for word (with its solution), plus `found`, `board` and `main` problems (format below).
4. For each leaf, call the `theory-writer` subagent (Opus). It writes `lessons/<subj>/<leaf>.md` and appends the `adv` and `oly` problems.
5. `cd site && python3 fix-yaml.py && node check-answers.mjs && python3 check-links.py && node build.mjs && node check-figures.mjs <subj>/<leaf>`. Fix every reported problem, from the checker or the lint; the checker has caught real arithmetic slips. `check-figures.mjs` renders each figure in headless Chromium and reports labels that spill out of boxes, run past the figure edge, overlap, or are crossed by a line; SVGs are written blind, so this is the only way to catch those (it needs no screenshots).
6. Commit and push (see Git below). When a pillar is complete, republish the site (see Publishing).

## Lesson format (`content/lessons/<subj>/<leaf>.md`)

**Front matter (YAML).** Quote any value that contains ": ".

| Field | Contents |
|---|---|
| `title`, `summary` | lesson title; one-line summary |
| `ncert` | list such as `["Class 12 Physics · Ch 10 Wave Optics (§10.4–10.5)"]`; `[]` if not in NCERT |
| `up_to` | `Class 10` / `JEE` / `Olympiad` |
| `builds_on` | list of prerequisite topic names |
| `notes_prompt` | one "explain in your own words" prompt |
| `margin` | 3 items, `{kind: history\|tip\|olympiad, title, text}` |
| `books` | `{title, ref}` with chapter or section references |
| `cards` | 5–6 `{front, back}` review cards; backslashes doubled inside quotes |
| `core` | **Required.** The one idea to memorise, shown boxed at the top of the lesson: `idea` (1–2 sentences, exam-ready, may use `$…$`), `formulas` (1–3 items of `{tex, label}`, KaTeX without `$$`; English uses `patterns` of `{text, label}` instead), `conditions` (2–4 ideal conditions or assumptions under which it holds exactly; for English, when to use the form), optional `sign` (the sign convention or the commonest mistake). Use single-quoted YAML strings. |
| `outcomes` | **Required.** 3–5 verb-first "after this lesson you can" items, ordered basic to advanced. |
| `opener` | **Required for new lessons.** `{story, art}`: conversational 3-paragraph puzzle (markdown) and an inline SVG illustration; shown as the top card with the `:::hook` question. |
| `symbols` | **Required for new lessons.** `{s, means}` per symbol (KaTeX, meaning + unit); shown as the Symbols card. |
| `life` | **Required for new lessons.** 3–5 places the reader meets this idea in daily life. |
| `models` | **Required for new lessons.** 2–3 `{name, text}` mental models that transfer beyond the subject. |
| `links` | Same idea elsewhere: `{leaf: subj/id, name, same, differs}`. |
| `next` | **Required for new lessons.** `{q, leaf, name}`: the question this lesson leaves open, answered by the next lesson. |

**Body:**
- **Sections:** `## Heading {lvl=N id=s-xxx label="Class 12"}`. Depth levels: 1 = Class 10, 2 = Class 12, 3 = JEE, 4 = Olympiad. Order sections from shallow to deep. Always end with `## Key ideas to remember {lvl=1 id=s-keys}` (a `:::keys` list) and `## Toolkit and traps {lvl=1 id=s-traps}` (a `:::traps` list). Tag each list item ` {lvl=N}`.
- **Blocks** are `:::kind attrs` … `:::`:
  - `hook` (opening question), with `q:`, `options: [...]` (a JSON array), `answer:` (index), `right:`, `wrong:`. `qc` (quick check) uses the same fields.
  - `worked title="..."`, `law caption=`, `eq caption=`, `note title= tone=`.
  - `figure caption="..."` containing inline `<svg>`, with classes `ray`, `faint`, `obj`, `pen`, `axis` and colour vars `--phy --chem --bio --mat --eng --ink --muted`. The app CSS sets figure labels to 11 px mono (about 6.6 viewBox units per character) and overrides any `font-size` on a parent `<g>` or `<svg>`: put a smaller size on the `<text>` itself, and size boxes for the real width. Then run `check-figures.mjs`.
  - `figrow`, `see`, `html`.
  - `widget name=...` with attrs passed as options.
- **Widgets in `app.js`:** `refraction-sim`, `optics-bench types=... u= f=`, `prism-sim`, `fringes [mode=single] [lambda=]`, `polarisers`, `projectile [u= angle= g=]` (trajectory, range, height, time of flight, complementary-angle ghost), `motion-graphs [u= a=]` (linked x–t, v–t, a–t graphs with areas). A new widget goes in the `WIDGETS` map in `app.js`; reuse the `.bench`, `.controls` and `.readout` classes.
- **Math:** `$...$` and `$$...$$` (KaTeX).
- **Style:** short paragraphs and concrete numbers. Explain *why* before formulas. One idea per section. Bold only key terms: the app renders bold as a highlighter mark.
- **How the app presents a lesson (three stages):** **1 Warm-up**: opener card (story, art, hook), then In real life cards. **2 The lesson**: a dark "The lesson begins here" banner (title, core idea, depth chooser, Symbols and What's inside toggles, Start section 1), then each `##` section as a numbered card, with a band where each new depth begins. **3 Wrap-up**: Think with it (models, links), key ideas, traps, and the question that leads on. On desktop a side tracker shows the stage and section. Keep section titles short and sections ordered by depth.
- **In real life icons:** `content/life-icons.yaml` gives one icon name per `life` item, in order (names from `LIFE_ICONS` in `app.js`; unknown or missing names show a map pin, and the build warns when a lesson's count does not match). Add a line there for every new lesson.

## Problem format (`content/problems/<subj>/<leaf>.yaml`)

The first line is a comment naming the source, e.g. `# ... NCERT questions copied word for word from NCERT Physics Class XII (reprint 2026-27), Ch 10.`

```yaml
- id: ncert12-ex-10-4          # ncertNN-ex-C-Q, ncertNN-eg-C-Q (examples), ncertNN-it-... (in-text); originals f1, b1, m1, a1, o1
  lvl: ncert-ex                # ncert-intext | ncert-ex | found | board | main | adv | oly
  num: "XII 10.4"              # NCERT number shown in the UI (NCERT items only)
  source: NCERT XII Physics · Ch 10 · Exercise 10.4
  kind: num                    # num | mcq (opts + ans index) | text | proof (hints list)
  q: <exact NCERT wording>
  ask: Wavelength              # num: what the answer box asks for
  unit: nm
  ans: 600
  tol: 0.5
  verify: (1.2e-2/4)*0.28e-3/1.4*1e9   # JS expression; Math functions available directly, plus deg(), rad()
  sol: |
    Full worked solution with $math$.
  answer_key: <NCERT answer-key text, when it exists>
  check: both                  # num needs code|both; others ncert-key|none
```

Aim for every NCERT item, then about 2–4 problems at each level: found, board, main, adv, oly.

## App structure (site/app)

- **Search palette (everywhere):** Ctrl/⌘ K, `/`, the rail's Search button (desktop), the top bar's Search button (phone) or the home search box open one palette. It searches lessons, sections, topics, NCERT chapters and problems with typo-tolerant fuzzy matching, and lists pages and subjects to jump to. `data/search.json` loads in the background after the first paint.
- **Theme:** a light/dark toggle sits at the foot of the desktop rail and in the phone top bar; it follows the device until the reader picks one, then remembers it (`localStorage` key `pm-theme`, applied by an inline script before the page paints).
- **Home:** continue card, review and daily set, habits, subject cards.
- **Learn:** two levels, `#learn~<subj>` (pillar cards) and `#learn~<subj>~<pillar>` (each branch once, as a numbered learning path of its leaves). The class view (NCERT books) is the second mode.
- **Lesson:** `#lesson~<subj>~<leaf>`.

## Running a local preview (only when `site/app/*` changes)

```
cd site/dist && npx -y http-server -p 8765 -s &
# open http://localhost:8765/preview.html#lesson~phy~<leaf>
```

Playwright: `import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs'`. Chromium is preinstalled; never run `playwright install`.

## Git

The repo is `himanshusisodiya68-hub/learning-archive`. Two people push to it, so **never commit to `main` directly**.

1. Start from an up-to-date `main` on a new branch: `git switch main && git pull && git switch -c <area>/<short-name>`, for example `content/phy-kinematics`, `app/fix-search` or `docs/status`. A cloud session that made its own `claude/...` branch keeps that branch.
2. Commit under your own git identity, the one `git config user.name` and `user.email` already give. Never pass someone else's name or email with `-c`.
3. Run the checks (step 5 of the workflow above), then push the branch (`git push -u origin HEAD`). Open a pull request into `main`, fill in the template and add `Closes #<issue>`.
4. The other person reviews and squash-merges. CI (`.github/workflows/check.yml`) must pass first.
5. If `main` moved in the meantime, merge it into your branch (`git pull origin main`) and resolve conflicts before asking for review.

Never put model names in commits or code.

## Publishing the site

The live private site is a multi-file Artifact: **https://claude.ai/artifact/YTDZjDN5obmJ7uxKbyS56s**.

It lives on the **collaborator's** claude.ai account (not the repo owner's), so only sessions signed in to that account can publish. Always publish from an up-to-date `main` after a merge. On any other account, `Artifact action=read` answers "artifact not found": skip publishing, say in the PR that it is ready to publish, and leave the rest to the collaborator.

From a new session:
1. `Artifact action=read url=<that url>` (required before updating).
2. Publish with:
   - `file_path`: `site/dist/index.html`
   - `url`: the URL above
   - `root`: `site/dist`
   - `files`: `katex.min.js`, every `data/**/*.json` and `fonts/*.woff2` (list them with `find data fonts katex.min.js -type f` inside `site/dist`). KaTeX fonts are separate files, not inlined, so the page stays small; `data/extras.json` holds the home-page sparks, loaded after the first paint.
   - Each lesson file `data/lessons/<subj>--<leaf>.json` also holds that leaf's problems (`probs`), so the build has about 280 files (one per leaf, plus `tree`, `ncert`, `search`, `extras` and 20 fonts; about 70 MB). One publish takes at most 255 files and 64 MB, and one version holds at most 511 files, so publish in two batches to the same `url`: each later publish adds to the files already there. Keep the file count low: never add one file per problem or per section.

Omit `capabilities` (it keeps the stored `db` + `user`; progress is saved per user). Never publish a new artifact for the site.

**Vercel (mobile/standalone copy).** `vercel.json` at the repo root builds `site/` and serves `site/dist`, and `build.mjs` writes the full mobile-ready document (viewport, theme colour, manifest, icons) as `standalone.html`, and also as `index.html` when `VERCEL=1` (an existing `index.html` beats any rewrite). Locally `index.html` stays the artifact fragment for publishing. The app falls back to `localStorage` when the artifact runtime is absent, so progress is per device there. The Vercel site is public by default unless deployment protection is on; the content includes NCERT text, so keep it protected or private.

## English (subject id `eng`)

Scope for now: NCERT Class 10 (First Flight and Footprints Without Feet, prose chapters only; poems were not found at any NCERT code, so they are not covered) plus a Class 6–9 grammar foundation. Wren & Martin and other books only if the owner uploads PDFs.

- **Writer:** Sonnet subagents (`general-purpose` with `model: "sonnet"`, a fresh small context), not `theory-writer` (Opus, science-specific). One subagent per leaf or per small group of leaves. Give it the leaf id, the source text path and this section; it writes the lesson and the problems file, runs `python3 fix-yaml.py && node build.mjs`, and does not commit.
- **Copyright:** the stories, plays and poems are third-party text. Never reproduce passages: summarise in your own words, quote at most a short phrase (under 15 words) with a note on where it comes from. NCERT's own questions and activity instructions are copied word for word, as for science.
- **No NCERT answer key exists for English.** Every answer is a *model answer* written by us; say so in the problems file's first-line comment. Where a question is open-ended (opinion, discussion), give a model answer and label it as one possible answer.
- **Lessons:** same front matter and block format as science, with depth levels `lvl=1` Foundation (Class 6–8), `lvl=2` Class 10 board, `lvl=3` Beyond the board (style and nuance); `up_to: Class 10`. Use tables instead of SVG figures unless a diagram truly helps. No widgets. (The app shows English depth labels: Foundation, Class 10 board, Beyond the board.)
- **Chapter lessons (literature):** summary in own words, characters, setting, theme, author's craft, key vocabulary with meanings, then the exercises. **Grammar lessons:** the rule from first principles (why the form exists), examples, common mistakes, then original exercises with answers. **Writing lessons:** what the reader expects, a layout table, a model sample, a marking checklist.
- **Problems:** `kind: text` (model answer in `sol`) or `mcq`; `check: none`; `lvl: ncert-ex` for NCERT questions (ids `ncert10-ff-C-n`, `ncert10-fp-C-n`), and `found`/`board`/`main` for originals as in science.

## Build order and status

**Done: Physics › Optics pillar.**
- **Ray optics leaves:** rectilinear propagation, laws of reflection, spherical mirrors, refraction and Snell's law, total internal reflection, lenses, prism and dispersion, the human eye, atmospheric refraction and scattering, optical instruments.
- **Wave optics leaves:** Huygens' principle, interference and Young's experiment, diffraction, polarisation, thin films.
- **NCERT covered:** Class 7 Ch 11; Class 8 Ch 10; Class 10 Ch 9–10; Class 12 Ch 9–10.

**Done: Physics › Electricity and magnetism pillar (33 leaves, all with lessons).** Published to the site artifact after completion.
- **Current electricity (8 leaves):** electric current and potential difference, Ohm's law, resistance and resistivity, resistors in series and parallel, heating effect and power, domestic electric circuits, Kirchhoff's rules, Wheatstone bridge.
- **Electrostatics (6 leaves):** electric charge, Coulomb's law, electric field (with the dipole), Gauss's law, potential, capacitors.
- **Magnetism (9 leaves):** field lines and compasses, force on a current, Lorentz force and circular motion, Biot–Savart law, Ampère's law (id `amp-res-law`), forces between parallel currents, current loop and galvanometer, magnetic dipole and bar magnet, magnetic materials.
- **Induction and AC (10 leaves):** electromagnetic induction, Lenz's law, motional emf, self and mutual inductance, alternating current, AC through R, L and C, LCR circuit and resonance, transformers, displacement current, electromagnetic waves.
- **NCERT covered:** Class 10 Ch 11 and Ch 12 (except the restored Sources of Energy); Class 12 Physics Ch 1–8 (all examples and exercises in the 2026-27 reprint). The in-text questions of Class 10 are included.
- **Known gaps:**
  - *Sources of Energy* (restored Class 10 chapter) is not in the current reprint, so there is no PDF at the usual code; it needs the owner to upload the older edition.
  - No Class 8 chapter is mapped to `electric-charge` (tree says `from: C8`).
  - Figure-based items (Class 12 Ex 6.4/6.5, Exercises 6.1/6.2) use the answer key's lettered directions, which are not independently verified.
  - The printed answer key has errors flagged in the solutions: Class 12 Ex 1.17/1.18 (swapped), 1.22, 1.23; Exercise 7.8 gives ω₀ for a frequency; Class 12 Exercise 4.11 prints e = 1.5×10⁻¹⁹ C.
  - Book chapter references (H. C. Verma, Irodov, Purcell) in lessons come from memory and are labelled [Unverified]; no classic-book problems were copied.

**Retrofit status:** Optics and Electricity and magnetism have had the cheap pass (opener, hook, symbols, life, models, links, next); see `docs/retrofit.md`. Deep passes not started.

**Done: Maths › Maths in life, 4 leaves (issue #7).** Published to the site artifact (version 28).
- **Leaves:** `compound-interest-and-emis` (money), `fermi-estimation` and `exponential-growth` (estimation), `expected-value` (decisions); each has a lesson from Class 10 to Olympiad and 19–20 original problems (no NCERT chapter is mapped). The CS lessons that already linked to these leaves now lead to live lessons.
- **Art of Problem Solving thread:** `docs/refs/maths/strategies.md` holds notes on Zeitz Ch 2–3 strategies (reusable). Every lesson has one or two `Problem-solving move` note boxes naming the strategy and section; 5 adv/oly problems are Zeitz Ch 2 problems copied word for word, with our own solutions.
- **Still to write in this pillar:** `percentages-in-life`, `misleading-statistics` (expected value's `next` points to it).

**Map of everything (Oct 2026):** all six subject trees exist (Physics 118 leaves, Maths 59, Chemistry 53, Biology 33, English 51, Computer Science 117) and the class view lists every NCERT book for Classes 6–12 (Science/Physics, Maths, Chemistry, Biology, English Class 10). Chapters of Class 11/12 Chemistry and Biology are already mapped to leaves.

**Done: Physics › Mechanics pillar (37 leaves, all with lessons).** Published to the site artifact (version 15).
- **Branches:** kinematics (8), Newton's laws (8), work–energy–power (7, ends with collisions, as in NCERT Class 11 Ch 5), rotation (5), gravitation (4), properties of matter (5).
- **NCERT covered:** Class 6 Ch 5; Class 7 Ch 8; Class 8 Ch 5–6; Class 9 (new book) Ch 4, 6, 7; Class 11 Ch 2–9 (all examples and exercises).
- **Writing:** lessons were written by Sonnet subagents (to save cost), not the Opus theory-writer; an Opus deep pass can come later.
- **Known gaps:**
  - The Class 11 Part 2 answer key (`keph2an`, Ch 8–9) was downloaded but not compared; those solutions are ours.
  - The last lessons were written without rereading NCERT, so some `ncert` fields give chapter and topic but no § numbers.
  - Book references and from-memory constants are labelled [Unverified].
  - The 2026-27 reprint lists §2.5 Relative velocity, but its text was not found in keph102.

**Owner's rule (Oct 2026): no more reading of PDFs or books to save tokens.** Write Computer Science (and later English) from training knowledge; the CS books in Drive are not to be read.

**Done: Computer Science (117 leaves, all with lessons and problems).** Published to the site artifact (version 18).
- **Pillars:** How computers work, Programming, Data structures, Algorithms, Operating systems, Networks, Data systems, Software engineering, Web and apps, System design, Cloud and DevOps, AI, Competitive programming (pattern catalogues), Interviews (pattern catalogues, design rounds, behavioural).
- **Writing:** Sonnet subagents with `docs/cs-brief.md`, from training knowledge (no books read). Problems are original: 8 per leaf, 10–12 for pattern-catalogue leaves. Code in lessons was run where the writer could.
- **Reality filter:** book chapter numbers, history dates and from-memory figures are labelled [Unverified]; claims about real companies' internals are [Inference].
- **Known weak spots:** `web-security` problem f2 has a trivial `verify`; the Kubernetes rolling-update rounding rule (problem m1) is [Unverified].
- `next` chain runs through every pillar in order; the last leaf (`iv-offers`) loops back to `problem-solving-method`.
- `python3 site/check-links.py` validates every `links`/`next` leaf id; run it with the other checks.

**Done: English (51 leaves, all with lessons and problems).** Published to the site artifact (version 28).
- **Pillars:** Grammar (16, done earlier), Vocabulary (9), Writing (5), Reading (2), Literature (literary devices, plus First Flight Ch 1–9 and Footprints Without Feet Ch 1–9: every prose chapter).
- **Writing:** Sonnet subagents, one per leaf, from training knowledge. Literature chapters read only the NCERT 2026-27 PDFs (`jeff1xx`, `jefp1xx`) to copy every exercise question word for word; poems sharing a PDF are skipped (out of scope). Non-literature problems are original (about 15 per leaf).
- **Reality filter:** there is no NCERT answer key for English, so every answer is a model answer. Author biographies, etymologies and the CBSE paper format and marks are labelled [Unverified].
- **Known gaps:** the PDF text layer has no section headings, so labels in `num` (OC, TT, TL, SP, WR, RF, TA) are inferred. Some printed NCERT slips are copied as printed and flagged in the answer: Glimpses OC2 Q1 mismatched pairs, Midnight Visitor "Ausable" for Max. The italics that some Thinking about language items depend on (Mijbil TL II/III) are missing from the text layer. The 17 older lessons (16 grammar leaves and A Letter to God) still lack the opener, symbols and life fields and need the cheap retrofit pass (`docs/retrofit.md`).

**Done: Maths › Class 10 Ch 1 Real Numbers and Ch 2 Polynomials (3 leaves, issue #5).** Published to the site artifact (version 28).
- **Leaves:** `fundamental-theorem-of-arithmetic` and `irrational-numbers` (Ch 1), `polynomials` (Ch 2); each has a lesson from Class 10 to Olympiad and 25–28 problems.
- **NCERT covered:** every example and exercise question of the 2026-27 reprint of Ch 1 (Ex 1.1–1.2, Examples 1–7, Theorems 1.2–1.3) and Ch 2 (Ex 2.1–2.2, Examples 1–5). The reprint has no Euclid's division algorithm or polynomial division sections (both promised in its introductions); the lessons teach them at depth 2–3.
- **Olympiad material:** Paul Zeitz, *The Art and Craft of Problem Solving* (owner's Drive copy), §7.1, §2.3 and §5.4. Notes and the problems copied word for word are in `docs/refs/maths/`; adv/oly problems quote them with `source: Zeitz … Problem N.N.N`, with our own solutions.
- **Known gaps:** the answer key has no entries for Ex 1.1 Q5–6 and Ex 1.2, so those solutions are ours; Ex 2.1 graph descriptions are ours (labelled); history dates and the Hardy & Wright reference are [Unverified].

**Owner's direction (Oct 2026):** build Physics and Maths fully first (see `docs/content-principles.md` §0); CS gains Competitive programming and Interviews pillars as pattern catalogues.

**Next, in order:**
1. The owner chooses what comes next (Computer Science and English are done). Candidates: candidates are Thermal physics, Modern physics (photoelectric effect, atoms, nuclei, semiconductors; the EM-waves lesson points forward to it) or Mechanics revision. Class 10 Science Ch 13 and the restored Sources of Energy chapter still need the owner's PDF.
2. Class 10 Maths, chapter by chapter, from Ch 3 Pair of Linear Equations (Ch 1–2 done; Constructions is restored after Circles).
3. Class 10 Chemistry and Biology chapters.
4. Lower classes (6–9) fill in under the same leaves as their topics come up.

Update this section when a chapter or pillar is finished.
