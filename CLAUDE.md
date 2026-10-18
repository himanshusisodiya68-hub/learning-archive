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

## Content principles (mandatory)

**Read `docs/content-principles.md` before writing or revising any lesson.** In short: life first; Feynman style (real-life puzzle, plain words before notation, first principles); every lesson has an illustrated opener card, core idea, In real life, depth sections, Think with it (mental models, same idea elsewhere), wrap-up and a closing question that leads to the next lesson. CS levels follow the career ladder (Foundations, SDE-1, SDE-2, SDE-3). Notation rules (words before symbols, one new symbol per paragraph, every equation read aloud, a Symbols card) are in §2a. Reference books: catalogue and token-free download method in `docs/refs/books.md`; save reading notes in `docs/refs/` so books are read once.

## Keeping cost down

The owner pays per token. Work lean.

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
docs/reference-books.md   books the owner will upload (★ = phase 1)
design/                   mockups (reference only)
site/
  package.json            npm run build | npm run check
  build.mjs               content → dist/ (index.html + data/*.json); KaTeX pre-renders all math
  check-answers.mjs       recomputes every numeric answer from its `verify` expression
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
5. `cd site && python3 fix-yaml.py && node check-answers.mjs && node build.mjs`. Fix every reported problem, from the checker or the lint; the checker has caught real arithmetic slips.
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
  - `figure caption="..."` containing inline `<svg>`, with classes `ray`, `faint`, `obj`, `pen`, `axis` and colour vars `--phy --chem --bio --mat --eng --ink --muted`.
  - `figrow`, `see`, `html`.
  - `widget name=...` with attrs passed as options.
- **Widgets in `app.js`:** `refraction-sim`, `optics-bench types=... u= f=`, `prism-sim`, `fringes [mode=single] [lambda=]`, `polarisers`, `projectile [u= angle= g=]` (trajectory, range, height, time of flight, complementary-angle ghost), `motion-graphs [u= a=]` (linked x–t, v–t, a–t graphs with areas). A new widget goes in the `WIDGETS` map in `app.js`; reuse the `.bench`, `.controls` and `.readout` classes.
- **Math:** `$...$` and `$$...$$` (KaTeX).
- **Style:** short paragraphs and concrete numbers. Explain *why* before formulas. One idea per section. Bold only key terms: the app renders bold as a highlighter mark.
- **How the app presents a lesson (one column):** opener card (story, art, hook) → core idea → Symbols → In real life → a collapsed "What's inside" (outcomes, map) and the depth bar → each `##` section as a numbered card, with a band where each new depth begins → Think with it (models, links) → wrap-up (key ideas, traps) → the question that leads on. Keep section titles short and sections ordered by depth.

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

- **Home:** search, continue card, review and daily set, stats, subject cards, pillars ready to study.
- **Learn:** two levels, `#learn~<subj>` (pillar cards) and `#learn~<subj>~<pillar>` (each branch once, as a numbered learning path of its leaves). The class view (NCERT books) is the second mode.
- **Lesson:** `#lesson~<subj>~<leaf>`.

## Running a local preview (only when `site/app/*` changes)

```
cd site/dist && npx -y http-server -p 8765 -s &
# open http://localhost:8765/preview.html#lesson~phy~<leaf>
```

Playwright: `import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs'`. Chromium is preinstalled; never run `playwright install`.

## Git

The repo is `himanshusisodiya68-hub/learning-archive`, branch `main`. Commit with:

```
git -c user.email=himanshusisodiya68@gmail.com -c user.name=himanshusisodiya68-hub commit -m "..."
git push -u origin main
```

Never put model names in commits or code.

## Publishing the site

The live private site is a multi-file Artifact: **https://claude.ai/artifact/YTDZjDN5obmJ7uxKbyS56s**.

From a new session:
1. `Artifact action=read url=<that url>` (required before updating).
2. Publish with:
   - `file_path`: `site/dist/index.html`
   - `url`: the URL above
   - `root`: `site/dist`
   - `files`: every `data/**/*.json` (list them with `find data -name '*.json'` inside `site/dist`)

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

**Map of everything (Oct 2026):** all six subject trees exist (Physics 118 leaves, Maths 59, Chemistry 53, Biology 33, English 51, Computer Science 80) and the class view lists every NCERT book for Classes 6–12 (Science/Physics, Maths, Chemistry, Biology, English Class 10). Chapters of Class 11/12 Chemistry and Biology are already mapped to leaves.

**In progress: Mechanics branches 1–3 (Kinematics, Newton's laws, Work–energy–power).** Interrupted by usage limits.
- Done: problems for vectors-in-motion, projectile-motion, relative-motion, circular-motion (committed); lessons for vectors-in-motion and circular-motion.
- Drafts in `site/drafts/problems/` (15 files, possibly incomplete or invalid YAML): finish each, validate (`python3 fix-yaml.py <file> && node check-answers.mjs`), then move into `content/problems/phy/`.
- Still to write: lessons for every other leaf of the three branches (theory-writer), in the new Feynman style with `life`, `models`, `links`, `next`.
- NCERT sources: Class 6 Ch 5 (fecu105), Class 7 Ch 8 (gecu108), Class 8 Ch 5 (hecu105), Class 9 new book Ch 4, 6, 7 (iesc104, iesc106, iesc107), Class 11 Ch 2–5 (keph102–105, answers keph1an).

**Owner's direction (Oct 2026):** build Physics and Maths fully first (see `docs/content-principles.md` §0); CS gains Competitive programming and Interviews pillars as pattern catalogues.

**Next, in order:**
1. Finish Mechanics 1–3, then the owner chooses: candidates are Thermal physics, Modern physics (photoelectric effect, atoms, nuclei, semiconductors; the EM-waves lesson points forward to it) or Mechanics revision. Class 10 Science Ch 13 and the restored Sources of Energy chapter still need the owner's PDF.
2. Class 10 Maths, chapter by chapter (Constructions is restored after Circles).
3. Class 10 Chemistry and Biology chapters.
4. Lower classes (6–9) fill in under the same leaves as their topics come up.

Update this section when a chapter or pillar is finished.
