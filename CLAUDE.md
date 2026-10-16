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
  fix-yaml.py             quotes YAML values containing ": " or " #"; run before every build
  app/shell.html, app.css, app.js   the single-page app (vanilla JS, inline in index.html)
  content/
    tree.yaml             the knowledge tree; every leaf has id, name, from (C6..C12, JEE, OLY)
    ncert/classNN-<subject>.yaml    book index: chapters, pdf code, leaves covering each chapter
    lessons/<subj>/<leaf-id>.md     one lesson per leaf (a leaf is live once this file exists)
    problems/<subj>/<leaf-id>.yaml  problems for that leaf
  dist/                   build output (git-ignored)
```

Subject ids: `phy`, `mat`, `chem`, `bio` (and `eng` later).

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

**Body:**
- **Sections:** `## Heading {lvl=N id=s-xxx label="Class 12"}`. Depth levels: 1 = Class 10, 2 = Class 12, 3 = JEE, 4 = Olympiad. Order sections from shallow to deep. Always end with `## Key ideas to remember {lvl=1 id=s-keys}` (a `:::keys` list) and `## Toolkit and traps {lvl=1 id=s-traps}` (a `:::traps` list). Tag each list item ` {lvl=N}`.
- **Blocks** are `:::kind attrs` … `:::`:
  - `hook` (opening question), with `q:`, `options: [...]` (a JSON array), `answer:` (index), `right:`, `wrong:`. `qc` (quick check) uses the same fields.
  - `worked title="..."`, `law caption=`, `eq caption=`, `note title= tone=`.
  - `figure caption="..."` containing inline `<svg>`, with classes `ray`, `faint`, `obj`, `pen`, `axis` and colour vars `--phy --chem --bio --mat --eng --ink --muted`.
  - `figrow`, `see`, `html`.
  - `widget name=...` with attrs passed as options.
- **Widgets in `app.js`:** `refraction-sim`, `optics-bench types=... u= f=`, `prism-sim`, `fringes [mode=single] [lambda=]`, `polarisers`. A new widget goes in the `WIDGETS` map in `app.js`; reuse the `.bench`, `.controls` and `.readout` classes.
- **Math:** `$...$` and `$$...$$` (KaTeX).
- **Style:** short paragraphs and concrete numbers. Explain *why* before formulas. One idea per section.

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

**Vercel (mobile/standalone copy).** `vercel.json` at the repo root builds `site/` and serves `site/dist`, with `/` rewritten to `standalone.html` (a full HTML document with viewport, theme colour, manifest and icons; `index.html` is only the artifact fragment and must not be served directly on a plain host). The app falls back to `localStorage` when the artifact runtime is absent, so progress is per device there. The Vercel site is public by default unless deployment protection is on; the content includes NCERT text, so keep it protected or private.

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

**Next, in order:**
1. Next pillar (owner to choose): candidates are Thermal physics, Modern physics (photoelectric effect, atoms, nuclei, semiconductors; the EM-waves lesson points forward to it) or Mechanics revision. Class 10 Science Ch 13 and the restored Sources of Energy chapter still need the owner's PDF.
2. Class 10 Maths, chapter by chapter (Constructions is restored after Circles).
3. Class 10 Chemistry and Biology chapters.
4. Lower classes (6–9) fill in under the same leaves as their topics come up.

Update this section when a chapter or pillar is finished.
