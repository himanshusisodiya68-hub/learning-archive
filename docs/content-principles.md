# Content principles (mandatory for every lesson, new or revised)

Owner's brief, October 2026. Read this before writing or editing any lesson. When a rule here conflicts with older lessons, this file wins.

## 1. Who we write for, and why
- **Life first, academic second.** The goal is understanding the world and daily life clearly; NCERT, JEE and Olympiad coverage stay, but they sit on top of real understanding, never instead of it.
- **The reader is a curious novice** who will drop out the moment a sentence assumes something unexplained. If a complete beginner cannot follow the core, the lesson has failed.
- **The reader should become the most interesting person in the room**: able to explain how things work, spot the same pattern in different places, and start conversations.

## 2. The Feynman way (what to imitate, and why it works)
Sources: *Six Easy Pieces* and the Feynman Lectures (read chapters online at feynmanlectures.caltech.edu; cheaper than PDFs).
- **Start from something you can see or have wondered about**, not from a definition. The idea arrives as the answer to a question the reader already cares about.
- **Plain words first, notation last.** A symbol is shorthand for a sentence the reader already understands. Every symbol and term is introduced in words at first use. Notation must never be a barrier.
- **Build in small steps from first principles**: what do we know, what can we deduce, what must we assume? Say the assumptions out loud.
- **Use vivid images and thought experiments** (Newton's cannon, the cloakroom of hooks). One good picture beats a page of algebra.
- **Be honest about limits**: where the idea stops working, what is still unknown.
- **The test**: could you explain it to a freshman, or a twelve-year-old? If not, it is not yet understood. The notes tab asks the reader to do exactly this.

## 3. Lesson anatomy (front matter fields in brackets)
1. **Opener card** (`opener.story`, `opener.art`, then the `:::hook`): conversational, second person, 3 short paragraphs that build a puzzle, an illustration (inline SVG, using `var(--c)` colours), then a guess-first question. It must make the reader want the answer.
2. **Core idea** (`core`): the one statement to memorise, its 1–3 formulas or patterns, and the ideal conditions under which it holds exactly.
3. **After this lesson you can** (`outcomes`).
4. **In real life** (`life`): 3–5 concrete places the idea is at work around the reader (Indian contexts welcome: trains, cricket, monsoon, UPI, ISRO).
5. **Sections by depth** (Class 10 → 12 → JEE → Olympiad; for CS Foundations → SDE-1 → SDE-2 → SDE-3). Short titles, one idea each, a quick check after each major idea, at least one figure or widget.
6. **Think with it**: mental models (`models`, 2–3, each transferable to life, money, economy or polity) and same-idea-elsewhere comparisons (`links`: what is common, what is different).
7. **Wrap-up**: key ideas to memorise, traps.
8. **The question that leads on** (`next`): a genuine open question the next lesson answers. This forms the chain that lights up the knowledge tree.

## 4. Language
- Conversational, warm, second person ("you"). Short sentences. Concrete numbers.
- No term before the reader needs it; define each term in passing the first time.
- Prefer a story or a surprising fact over a summary. Never open a section with a definition.
- Bold only the key terms (the app renders bold as a highlighter mark).

## 5. Interlinking and mental models
- Always ask: where else does this same structure appear? (gravitation ↔ electrostatics; hash table ↔ library index; exponential decay ↔ capacitor discharge ↔ drug half-life). Record it in `links` with **common** and **different**.
- Mental models must be portable: someone who never studies physics again should still use them.

## 6. Habit and motivation (how the app and the content work together)
Use psychology, not guilt. Avoid streak pressure and vanity counters.
- **Curiosity gap / open loops** (Zeigarnik effect): every lesson ends on an unanswered question; the home page shows the questions the reader has left open.
- **Generation effect**: make the reader guess before revealing (hooks, quick checks).
- **Retrieval and spacing**: review cards return just before forgetting.
- **Variable reward**: a daily "spark" (a surprising fact or mental model from the archive).
- **Social currency**: "Ask someone today" questions the reader can use in conversation.
- **Identity**: "You can now explain…" collects what the reader can teach others, the real measure of progress.
- **Visible growth**: the knowledge tree lights up branch by branch.

## 7. Subject notes
- **Physics**: Feynman Lectures and Six Easy Pieces for style and order of ideas; NCERT for coverage; widgets wherever motion or fields can be played with.
- **Maths**: real-life problems first ("where do I use this?"), love of problem solving (Zeitz, *The Art and Craft of Problem Solving*; Engel, *Problem-Solving Strategies*; both in the owner's Drive), foundations for programming (logic, functions, induction, counting, probability), and fun puzzles to ask people.
- **Computer Science**: start every lesson from a real system problem ("How does Instagram check a username among two billion?"). Levels follow the career ladder: Foundations (anyone), SDE-1 (junior engineer), SDE-2 (mid-level trade-offs), SDE-3 (design at scale, leading decisions). Python to learn; JavaScript/TypeScript for the web. Key reference: *Designing Data-Intensive Applications*.
- **English**: vocabulary (synonyms, antonyms, idioms, phrasal verbs, one-word substitution, collocations) is its own pillar; grammar rules are explained by why the form exists.

## 8. References and the reality filter
- Use the owner's reference books (Google Drive folder https://drive.google.com/drive/folders/1acWIOWLTCwTVJsaBmTg9ElI6NJRPjX5X) and the Feynman Lectures website. Copy problems word for word only from these or NCERT.
- To save tokens, read a reference once per chapter and save short notes (page/section pointers, key examples, order of ideas) in `docs/refs/<subject>/<branch>.md`; later sessions read the notes, not the book.
- Anything from memory (book chapter numbers, historical details) is labelled [Unverified]. Inferences are labelled [Inference].

## 9. Retrofitting older lessons
Older lessons (Optics, Electricity and magnetism, English grammar) predate these rules. Bring each up to standard in this order:
1. **Cheap pass (Sonnet, front matter only)**: add `opener` (story + art), rewrite the `:::hook` question conversationally, add `life`, `models`, `links`, `next`. No body changes.
2. **Deep pass (Opus, selected lessons)**: rewrite section openings so each starts from a question or picture, remove notation-first passages, add figures.
Track progress in `docs/retrofit.md` (one line per lesson: cheap pass done / deep pass done).

## 10. Samples to copy
`site/content/lessons/phy/universal-law-of-gravitation.md` and `site/content/lessons/cs/hash-tables.md`.
