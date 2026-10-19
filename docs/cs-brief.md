# Brief: writing Computer Science lessons (repo /home/user/learning-archive)

The owner pays per token: work lean. **Do not read books, PDFs or web pages.** Write from your own knowledge. Cite books (DDIA, CLRS, OSTEP, etc.) only by title, and label any chapter number [Unverified].

## Read first (only these)
1. `docs/content-principles.md`: the mandatory rules (§2 the Feynman way, §2a notation, §3 lesson anatomy, §6 habits, §7 Computer Science).
2. `site/content/lessons/cs/hash-tables.md`: the gold-standard CS lesson. Copy its structure, front matter fields and tone exactly.
3. `CLAUDE.md`, the "Lesson format" section only.

Don't read other lessons.

## For each leaf assigned to you

### Lesson file
Write `site/content/lessons/cs/<leaf>.md` in one go, about 200–260 lines.

**Opener**
- Start from a real system or everyday puzzle (for example, "How does Instagram check a username among two billion?").
- The story is conversational, 3 short paragraphs.
- `art` is its own inline SVG, 320×240; don't reuse another lesson's.
- Add a `:::hook` with a party-worthy question.

**Front matter**
- Include all of: title, summary (one plain sentence, ≤22 words, no jargon), `ncert: []`, up_to, builds_on, notes_prompt, margin (3), books, cards (5–6), core, outcomes (3–5), opener, symbols, life (3–5), models (2–3, portable beyond CS), links, next.
- `up_to` is the deepest level the lesson reaches: `Foundations`, `SDE-1`, `SDE-2` or `SDE-3`.
- `symbols` holds the notation used (for example $O(n)$, $n$, $\log_2$). If the lesson uses no symbols, list key terms instead, with $s$ as plain text.
- `links` connect to other leaves (CS, maths, physics, life) using real leaf ids from `site/content/tree.yaml`. Use grep to check an id; don't read the whole file.

**Sections**
- Headings look like `## Title {lvl=N id=s-xxx label="Foundations"}`. Levels: 1 = Foundations (anyone), 2 = SDE-1, 3 = SDE-2, 4 = SDE-3.
- Order sections from shallow to deep, and stop at the leaf's natural ceiling. Don't invent SDE-3 depth for a beginner topic.
- Put a `:::qc` after each major idea.
- Include at least one `:::figure` (inline SVG; classes `ray faint obj pen axis`; colour vars `--mat --phy --ink --muted`) or a table.
- **No widgets.**

**Code**
- Python in fenced blocks (` ```python `). Use JavaScript/TypeScript only in the web-and-apps pillar, and a shell for git, Linux and DevOps.
- Keep each block ≤15 lines. Explain the idea in words first, then the code.

**Ending**
- End with `## Key ideas to remember {lvl=1 id=s-keys}` (a `:::keys` list) and `## Toolkit and traps {lvl=1 id=s-traps}` (a `:::traps` list). Tag each item ` {lvl=N}`.

**Reality filter**
- Facts about real companies' internals: label [Inference] unless they are public.
- History dates from memory: [Unverified].

### Problems file
Write `site/content/problems/cs/<leaf>.yaml`.

- **First line:** `# <Leaf name>. All problems are original.`
- **8 problems:** 2 `found` (warm-up), 2 `board` (practice), 2 `main` (interview level), 1 `adv`, 1 `oly`. The app labels `oly` "System design (SDE-3)"; for a beginner leaf, make `oly` the hardest stretch question instead.
- **Ids:** f1, f2, b1, b2, m1, m2, a1, o1.
- **`kind: mcq`:** `opts` (a JSON array) and `ans` (an index).
- **`kind: num`:** `ask`, `unit`, `ans`, `tol` and a JS `verify` expression (Math functions are available directly). Use `check: code`.
- **`kind: text`:** a model answer in `sol`.
- **Every problem:** a full `sol`. Non-numeric problems use `check: none`.
- **YAML:** quote any value that contains `: ` or ` #`.

## Pattern-catalogue pillars (`competitive-programming`, `interviews`)
Each lesson is a catalogue of one pattern, so that the same underlying idea solves every problem of that family:
- the signal (how to recognise the pattern from the statement and constraints);
- the core template (code);
- a variants table (variant, signal, change to the template);
- 10–15 classic problem *types*, described in your own words (never copy LeetCode or Codeforces statements), each mapped to its variant;
- common bugs.

Problems: 10–12 (more `main` and `adv`).

The `design-rounds` and `behavioural` leaves are frameworks with worked examples.

## Checks (parallel-safe)
Run these from `site/`:
```
python3 fix-yaml.py content/problems/cs/<leaf>.yaml
node lint-lesson.mjs content/lessons/cs/<leaf>.md
node check-answers.mjs
```

Then check your figures, building into your own folder: `DIST_DIR=/tmp/<leaf>-dist node build.mjs >/dev/null && DIST_DIR=/tmp/<leaf>-dist node check-figures.mjs <subj>/<leaf>`. Fix every label it reports (spilling out of a box, past the edge, overlapping, or crossed by a line).

Fix everything reported. Never run plain `node build.mjs` (always with your own `DIST_DIR`). Never commit.

**Common slips:**
- Single-quote every front-matter string that contains `: `, especially margin `text`.
- Never leave a bare `$` in prose: a shell variable such as `$HOME` must sit in backticks, or KaTeX will try to read it as maths.

## Report
Keep it to a few lines: the files written, the check results, and anything labelled [Unverified] or [Inference].
