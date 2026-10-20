# Brief: one Biology leaf

You write ONE leaf of the Learning Archive: its lesson and its problems file. Other writers work on other leaves at the same time, so touch only your two files. Repo: `/Users/Himanshu/Developer/learning-archive` (use absolute paths).

Scope (owner's choice): **Biology is NCERT only**, Classes 9–12, with NEET-style practice on top. There are no JEE or Olympiad levels.

## Read first (once)
1. `CLAUDE.md`, the sections "Owner's standing requirements", "Lesson format" and "Problem format".
2. `docs/content-principles.md`.
3. The style sample `site/content/lessons/phy/universal-law-of-gravitation.md`, which shows the science lesson format, plus the first 40 lines of any `site/content/problems/phy/*.yaml` for the NCERT item format.
4. Your leaf's entry in the tree: `grep -n -A8 'id: <leaf>$' site/content/tree.yaml`.
5. **The NCERT text files named in your prompt.** Read only what you need: the exercise section (`grep -n -i 'exercise'`, then read from there to the end), the in-text questions (Class 9 and 10 books), and the passages your lesson needs. Never read a whole book. Do not open other lessons, and do not read any other book.

## Problems file `site/content/problems/bio/<leaf>.yaml`
- **First-line comment:** name the sources (e.g. `# Respiration in plants. NCERT questions copied word for word from NCERT Biology Class XI (reprint 2026-27) Ch 12 and Science Class X Ch 5. No NCERT answer key exists for Biology: all answers are model answers written for this archive. Found, board and main problems are original.`).
- **Every NCERT question for this leaf, word for word.** That means all end-of-chapter exercises of the Class 11/12 chapter, plus the Class 9/10 questions (in-text "Questions" boxes and exercises) that are about THIS leaf. When a Class 9/10 chapter is shared with other leaves (your prompt lists them), take only the questions about your topic. A question that spans several topics goes to the leaf it fits best.
  - ids: `ncert11-ex-C-n`, `ncert12-ex-C-n`, `ncert10-ex-C-n`, `ncert10-it-C-n` (in-text), `ncert9-ex-C-n`. `lvl: ncert-ex` or `ncert-intext`.
  - `num` like `"XI 12 · Q3"`, `"X 5 · p.95 Q2"` (in-text, with page if known) or `"IX 3 · Q4"`. `source` like `NCERT XI Biology · Ch 12 · Exercise Q3`.
  - `kind: text` (model answer in `sol`) or `mcq` (`opts` + `ans` index); `check: none`. A numeric question (e.g. ATP yield, Mendelian ratios, population growth) may be `kind: num` with a correct `verify` and `check: code`.
  - Questions that depend on a figure: copy the words, describe what the figure shows from the chapter text, and label the answer [Unverified] if the figure itself is not in the text layer.
- **Original problems** after the NCERT ones: 3–4 each at `found` (check the idea), `board` (CBSE Class 12 style: 2-, 3- and 5-mark answers with the points an examiner looks for) and `main` (shown as **NEET** in the app: single-correct MCQs, assertion–reason, match-the-column, statement-based). ids `f1…`, `b1…`, `m1…`. Do not write `adv` or `oly` problems.

## Lesson `site/content/lessons/bio/<leaf>.md` (write it in one go)
- Full front matter as in "Lesson format": `title`, `summary`, `ncert` (every chapter used, with § numbers), `up_to: "Class 12"`, `builds_on`, `notes_prompt`, `margin`, `books` (NCERT only, plus well-known textbooks such as Campbell *Biology* only if you are sure of them; otherwise label them [Unverified]), `cards`, `core` (for biology, `formulas` may hold key equations such as photosynthesis or Hardy–Weinberg, or be left out; use `conditions` for when the idea holds), `outcomes`, `opener` {story, art}, `symbols` (for biology: key terms and symbols, e.g. `{s: 'ATP', means: "adenosine triphosphate, the cell's energy currency"}`), `life` (Indian contexts welcome: monsoon crops, dal and rice, dengue, Bt cotton, Project Tiger), `models`, `links` (`subj/leaf` ids only, from the tree), and `next` (given in your prompt; write `leaf` as `bio/<id>`).
- **Depth levels for biology:** `lvl=1 label="Class 9–10"`, `lvl=2 label="Class 11–12"`, `lvl=3 label="NEET · beyond"` (use 3 for only one or two sections at most). Every NCERT section of the Class 11/12 chapter is covered at lvl 2, in NCERT's order. Section titles are short, in sentence case.
- **Biology lives in pictures:** at least two inline SVG figures (`:::figure caption="..."`) of the real structures or cycles (the nephron, the Calvin cycle, the menstrual cycle, a pedigree). Use colour vars such as `--bio`, `--ink` and `--muted` and the classes listed in CLAUDE.md. Label the parts clearly.
- A `qc` quick check after each major idea; tables for comparisons (C3 vs C4, mitosis vs meiosis); mnemonics where students really use them.
- End with `## Key ideas to remember {lvl=1 id=s-keys}` (`:::keys`) and `## Toolkit and traps {lvl=1 id=s-traps}` (`:::traps`).
- **Reality filter:** label figures from memory, dates, discoverers and anything not in NCERT [Unverified]. Never invent statistics.
- **Removed chapters:** if your prompt says the topic's Class 11 chapter was removed in the rationalised edition, write that content from your own knowledge at lvl 2 and say so in a `margin` note. There are no NCERT exercises for it.

## Check (only your files; never run `node build.mjs` or a bare `fix-yaml.py`)
```
cd /Users/Himanshu/Developer/learning-archive/site && node lint-lesson.mjs content/lessons/bio/<leaf>.md && python3 fix-yaml.py content/problems/bio/<leaf>.yaml && node check-answers.mjs
```
Fix everything the linter reports and every checker message naming your file. Do not commit, and do not take screenshots.

## Reply
At most 4 lines: files written, section and figure counts, problem counts (NCERT by class / original), anything unverified.
