---
title: Telling your stories (STAR)
summary: Interviewers learn how you work from true stories about the past. Learn to shape messy work into clear two-minute stories.
ncert: []
up_to: SDE-3
builds_on: [A method for any problem]
notes_prompt: Tell a friend one true story about a time something at work or college went wrong, in four sentences, using the order situation, task, action, result.
margin:
  - kind: history
    title: Where it comes from
    text: 'Behavioural interviewing rests on the idea that past behaviour is the best predictor of future behaviour. The STAR shorthand is widely taught in career guides; who coined it is not clear. [Unverified]'
  - kind: tip
    title: Say "I"
    text: 'The interviewer cannot hire your team. Say "I" for what you did, and "we" only for what the group did, so your own part stays visible.'
  - kind: olympiad
    title: Eight stories, forty questions
    text: 'A small bank of eight good stories can be bent to answer most behavioural questions. Prepare the bank once; adapt the opening and the ending to each question.'
books:
  - { title: "G. Laakmann McDowell, Cracking the Coding Interview", ref: "behavioural preparation section [Unverified: chapter number]" }
  - { title: "Amazon's published Leadership Principles", ref: "a public list often used as a behavioural question themes guide; check the current wording yourself" }
cards:
  - { front: "What do the four letters of STAR stand for?", back: "Situation (the setting), Task (your job in it), Action (what you did), Result (what happened, with a number if possible)." }
  - { front: "Where should most of the story's time go?", back: "On the Action, about half to two thirds. Situation and Task should be short; the interviewer wants to hear what you did." }
  - { front: "Why avoid saying 'we' all the time?", back: "The interviewer is judging you. 'We' hides your part. Say 'I' for your decisions and actions, and name teammates for theirs." }
  - { front: "What are the five common story themes?", back: "Conflict, failure, ownership, ambiguity and influence." }
  - { front: "How do you quantify a result when you have no hard numbers?", back: "Use an honest estimate with its basis ('about 30 minutes per developer per week, from asking five teammates') or a before-and-after you can describe. Never invent a number." }
  - { front: "What should the last sentence of a failure story be?", back: "What you changed afterwards, ideally with evidence that the change worked the next time." }
core:
  idea: 'A behavioural answer is a short true story in four beats: the situation, your task, the actions you took, and the result. Keep it to about two minutes, make your own part clear, and give the result a number or a concrete outcome.'
  formulas:
    - tex: '\text{STAR} = \text{Situation} \to \text{Task} \to \text{Action} \to \text{Result}'
      label: 'The four beats, in order'
    - tex: '\text{time} \approx 15\% + 10\% + 60\% + 15\%'
      label: 'A rough time split for the four beats (a guideline, not a rule)'
  conditions:
    - 'The story is true and you can answer follow-up questions about any detail'
    - 'You were personally involved; you can say what you decided and did'
    - 'It fits the question asked, not just a story you like to tell'
  sign: 'The commonest mistake is a long background and a thin action. The interviewer should finish knowing exactly what you did, in your own words.'
outcomes:
  - 'Tell a true story in situation, task, action, result order in about two minutes'
  - 'Build a bank of 6 to 8 stories that cover the common themes'
  - 'Turn a vague result into a concrete, honest one with a number or evidence'
  - 'Answer follow-up probes without contradicting yourself'
  - 'Choose stories that show the scope expected at SDE-2 and SDE-3'
opener:
  story: |
    Picture two candidates asked the same question: "Tell me about a time you disagreed with a teammate." The first says, "Oh, we disagreed sometimes. We talked it out and it was fine." The second says, "Our API had two designs, I preferred the simpler one, and I built a one-day prototype so we could compare real numbers. We chose it, and it saved a week."

    Both may be nice people. Only one has given the interviewer something to hold on to. A story has a place, a problem, a person doing something, and an ending. That is exactly why we remember stories and forget summaries.

    So the puzzle is practical: you have a hundred hours of messy real work behind you. How do you pick the right moments, and say them in two minutes, so the listener can see what you are like to work with?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Four cards in a row labelled S, T, A, R, with the Action card drawn largest"><rect x="14" y="14" width="292" height="212" rx="10" style="fill:var(--surface);stroke:var(--rule)"/><g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="26" y="70" width="48" height="90" rx="6"/><rect x="82" y="70" width="38" height="90" rx="6"/><rect x="128" y="50" width="104" height="130" rx="6" style="fill:color-mix(in srgb,var(--c) 30%,var(--surface))"/><rect x="240" y="70" width="48" height="90" rx="6"/></g><g style="font-size:20px;fill:var(--ink);font-weight:700"><text x="44" y="122">S</text><text x="94" y="122">T</text><text x="172" y="122">A</text><text x="258" y="122">R</text></g><g style="font-size:9px;fill:var(--muted)"><text x="26" y="178">setting</text><text x="82" y="178">your job</text><text x="150" y="198">what YOU did</text><text x="240" y="178">outcome</text></g><text x="26" y="40" style="font-size:11px;fill:var(--ink)">Two minutes, most of it on the Action</text></svg>'
life:
  - 'A cover letter, a college application essay and a wedding toast all work better as one specific story than as a list of adjectives.'
  - 'When a friend asks "how was your trip?", the answer people remember is the story of the missed train, not "it was good".'
  - 'Good managers write performance reviews as short stories with a result, because they must defend them to others.'
  - 'Doctors present a patient case as a story: what came in, what was done, what happened.'
  - 'Pitching a startup idea to a family member or an investor is a Situation, Task, Action, Result in disguise.'
models:
  - name: 'Specific beats general'
    text: 'One concrete example convinces more than ten claims. "I am a good communicator" is a claim; the day you calmed an angry customer is evidence. This works in essays, dating profiles and negotiations alike.'
  - name: 'Show the decision, not the outcome alone'
    text: 'Anyone can be lucky. What the listener trusts is the reasoning at the moment of choice. Teachers, investors and judges all ask "why did you do that?" for this reason.'
  - name: 'Own your part'
    text: 'Taking clear credit for what you did, and clear responsibility for what you got wrong, builds trust faster than polish. Teams and families both run better on honest ownership.'
links:
  - leaf: 'cs/problem-solving-method'
    name: 'A method for any problem'
    same: 'Both give a repeatable order of steps so that you do not freeze or ramble under pressure.'
    differs: 'The method solves a new problem live; a STAR story retells a problem you already solved, so the order is about the past.'
  - leaf: 'cs/iv-design-framework'
    name: 'A framework for any design question'
    same: 'A framework for talking: each step tells the listener where you are and what comes next.'
    differs: 'A design answer reasons about the future of a system; a story reports real actions that already happened, so it must be true and checkable.'
  - leaf: 'mat/expected-value'
    name: 'Expected value and decisions'
    same: 'A good failure story shows that you weigh the odds and learn from the outcome of a decision.'
    differs: 'Expected value is a calculation made beforehand; a story shows how you reasoned when the numbers were uncertain.'
next:
  q: 'Your stories show what you did. But a story that is a great answer for a new graduate may be a weak answer for a senior engineer. What exactly separates an SDE-1 from an SDE-2, an SDE-3 and beyond, and how do interviewers judge it?'
  leaf: 'cs/iv-levels'
  name: 'What SDE-1, SDE-2 and SDE-3 are judged on'
symbols:
  - s: 'S'
    means: 'Situation: the setting and the problem, in one or two sentences'
  - s: 'T'
    means: 'Task: your specific responsibility in that situation'
  - s: 'A'
    means: 'Action: the steps you personally took and why you chose them'
  - s: 'R'
    means: 'Result: what happened, with a number or evidence, and what you learned'
  - s: 'story bank'
    means: 'your prepared set of 6 to 8 true stories, each tagged with the themes it can answer'
---

:::hook
q: An interviewer asks, "Tell me about a time you failed." Which opening is strongest?
options: ["\"I can't think of a real failure, I always try to succeed.\"", "\"In my second year I shipped a change without a test and it broke checkout for 20 minutes. Here is what I did.\"", "\"We once missed a deadline but it was mostly the client's fault.\""]
answer: 1
right: Right. It is specific, it owns the mistake, and it promises an action and an ending. Honest failure with a lesson is a strength; it is how interviewers see maturity.
wrong: Claiming no failures sounds unreal, and blaming others hides your part. Both make the interviewer doubt what you will do when something goes wrong.
:::

## Why stories work {lvl=1 id=s-why label="Foundations"}

An interviewer has about an hour with you and must predict how you will behave over years. They cannot watch you work, so they ask about the past. The belief behind it is simple: **how you acted before is the best clue to how you will act next**.

A story is also easier to judge than a claim. If you say "I handle conflict well", the interviewer has nothing to check. If you describe two people, a disagreement, and what you did, they can see your judgement, your tone and your honesty. They can also ask a follow-up, and a true story survives follow-ups where an invented one cracks.

Two rules follow. **Be specific**, because details are what make a story believable. **Be true**, because details you invented are the first thing a follow-up question will break.

## The four beats {lvl=1 id=s-star label="Foundations"}

STAR is a box for your story. It has four beats, in this order.

- **Situation.** Where and when, and what was going on. One or two sentences. "Last winter, at my internship, our checkout page was slow on mobile."
- **Task.** Your own job in it. "I was asked to find out why and fix it within two weeks."
- **Action.** What *you* did, step by step, and why you chose that way. This is the heart of the story.
- **Result.** What happened, in a number or a concrete outcome, and what you learned.

The time split is roughly one sixth of the time on the situation, a tenth on the task, about three fifths on the action, and the rest on the result. A two-minute story is about 300 spoken words.

:::figure caption="Where the two minutes go. The Action is the longest bar; if yours is not, trim the background."
<svg viewBox="0 0 320 90" role="img" aria-label="A bar split into Situation 15 percent, Task 10 percent, Action 60 percent, Result 15 percent"><g style="stroke:var(--ink);stroke-width:1.2"><rect x="10" y="20" width="43" height="34" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface))"/><rect x="53" y="20" width="29" height="34" style="fill:color-mix(in srgb,var(--mat) 24%,var(--surface))"/><rect x="82" y="20" width="173" height="34" style="fill:color-mix(in srgb,var(--mat) 50%,var(--surface))"/><rect x="255" y="20" width="43" height="34" style="fill:color-mix(in srgb,var(--mat) 24%,var(--surface))"/></g><g style="font-size:10px;fill:var(--ink)"><text x="20" y="41">S</text><text x="64" y="41">T</text><text x="160" y="41">A</text><text x="270" y="41">R</text></g><g style="font-size:8px;fill:var(--muted)"><text x="14" y="70">15%</text><text x="56" y="70">10%</text><text x="150" y="70">60%</text><text x="262" y="70">15%</text></g></svg>
:::

:::qc lvl=1
q: A candidate spends 80 seconds of a two-minute answer describing the company and the project. What should they change?
options: ["Add more background so the story makes sense", "Cut the background to a couple of sentences and spend the time on what they did", "Skip the result"]
answer: 1
right: Right. The listener needs just enough setting to follow; what they came to hear is your action and result.
wrong: Background is the easiest part to talk about and the least informative. The decision and the actions are the evidence.
:::

## Build a story bank {lvl=2 id=s-bank label="SDE-1"}

Do not prepare a new story for each question. Prepare **six to eight true stories** once, and tag each with the themes it can answer. Most questions fall into a few themes.

| Theme | Typical question | What the interviewer looks for |
|---|---|---|
| Conflict | "A time you disagreed with someone" | Listening, using evidence, staying respectful, an outcome both can accept |
| Failure | "A time you got something wrong" | Honest ownership, a fix, a lasting change |
| Ownership | "A time you went beyond your job" | You noticed a problem nobody owned and carried it through |
| Ambiguity | "A time the goal was unclear" | You asked questions, made a plan, chose a first step, adjusted |
| Influence | "A time you convinced others without authority" | Understanding their concerns, evidence, patience |
| Deadline or trade-off | "A time you had to cut scope" | Clear priorities, communication, what you protected |
| Helping others | "A time you taught or supported someone" | Patience, results for them, not just for you |
| Pride | "Your proudest project" | What you care about and how you describe real work |

A good bank has stories from different parts of your life (a project, a job or internship, a college team), so you do not repeat yourself in a loop of five interviews. Write each story in five or six bullet points, not as a script: scripts sound stiff and collapse if you forget a line.

:::qc lvl=2
q: A single story about a messy launch can answer which themes?
options: ["Only failure", "Failure, ownership and deadline trade-off, depending on the angle you take", "None, because stories can be used only once"]
answer: 1
right: Right. One rich story has several angles. The same launch can show how you owned the fix, how you cut scope, or what you got wrong. Keep the facts the same and change the emphasis.
wrong: A good story is rich enough to be told from more than one angle. That is what makes a small bank enough.
:::

## "I", not "we", and numbers {lvl=2 id=s-i label="SDE-1"}

Most real work is team work, so the habit of saying "we" is natural, and it costs you. After your answer, the interviewer must decide what *you* can do. If every verb is "we", they learn about your team.

The fix: say "we" for the setting ("our team owned the payments page") and "I" for your actions ("I wrote the script that compared the two timings"). Give teammates credit by name for what they did ("Priya reviewed the design"). That sounds honest, not boastful.

Next, make the result concrete. Compare:

> "It got a lot faster and people were happy."
>
> "Page load fell from about 4 seconds to about 2, measured on my test phone, and the support tickets about slowness stopped for the next month."

If you have no hard numbers, give an honest estimate with its basis ("I asked five teammates; they thought it saved about half an hour a week each"), or a before and after you can describe. Never invent a figure. Interviewers often ask "how did you measure that?", and an honest answer such as "I estimated it" is fine; a made-up one is not.

## A worked story: weak and strong {lvl=3 id=s-worked label="SDE-2"}

The question: "Tell me about a time you improved something nobody asked you to." The invented example below is for practice only.

**Weak.** "Our tests were flaky. We spent some time fixing them and things got better. It was a good team effort."

**Strong.**

- *Situation.* "On my team, about one in five continuous-integration runs failed for no clear reason, so people re-ran them and lost time."
- *Task.* "Nobody owned it. I decided to find the causes in my spare time and told my lead what I was doing."
- *Action.* "I logged each failure for two weeks and found that most came from three tests sharing one database table. I rewrote them to use their own data, added a retry only where a network call was truly external, and wrote a short guide so new tests would not repeat the mistake. I asked Priya to review each change."
- *Result.* "Failures dropped from about one in five runs to about one in fifty, and by my estimate the team saved around half an hour per person per week. We later adopted the guide for new services."

What made it strong: a measured problem, a clear personal action, honest credit, a number with its basis, and a lasting result. It takes about two minutes.

## Follow-ups and failure stories {lvl=3 id=s-follow label="SDE-2"}

After the story, expect probes. Prepare for these five:

1. "What would you do differently?" Have a real answer. A story with nothing to improve sounds rehearsed.
2. "What did the other person think?" Show you understood their view, not that you won.
3. "How did you know it worked?" Point to a measure.
4. "What was your exact role?" Be precise about what you did and what others did.
5. "What was the hardest part?" Name the human or technical difficulty, not "the deadline".

**Failure stories** are the hardest to choose. Pick a real mistake that cost something small to medium (not a catastrophe, not a trivial slip), where your own action was the cause. The shape is: what happened, how you noticed and told others early, how you fixed it, what you changed so it cannot happen the same way again. End on that last part. A failure story that ends with "and I learned to be careful" is weak; one that ends with "and I added a check that caught the same mistake twice later" is strong.

:::qc lvl=3
q: Which ending makes a failure story strongest?
options: ["\"It was a good lesson for me.\"", "\"I added an automatic check to our pipeline, and it caught the same kind of error twice the next quarter.\"", "\"It was not really my fault.\""]
answer: 1
right: Right. A change with evidence shows that you turned a mistake into something lasting.
wrong: A vague lesson and blaming others leave the interviewer with nothing to trust. A concrete change you made is evidence of growth.
:::

## Stories at senior level {lvl=4 id=s-senior label="SDE-3"}

The same STAR frame is used at every level, but the stories change in size. A senior interviewer listens for **scope**: how far beyond your own code the effect reached.

- At SDE-1, a good story is about finishing a well-defined task well, asking for help at the right time and learning from a mistake.
- At SDE-2, it is about owning a feature end to end, handling disagreement within the team, and choosing between options.
- At SDE-3 and above, it is about problems with no clear owner: setting direction across teams, persuading people who do not report to you, making a decision with incomplete information and living with the result, and growing other engineers.

A strong senior story names the **people whose minds had to change**, the evidence you used, what you gave up, and the result for the organisation, not just your own code. It also has an honest "what I would do differently". [Inference: these expectations vary by company and are not published as rules.]

A common weakness at this level is a story that is really a technical project description. Pull it back to decisions and people: why this approach, who disagreed, how you moved them.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Interviewers use the past to predict the future; a specific true story is evidence, a claim is not. {lvl=1}
2. STAR: situation, task, action, result. Spend most of the time on the action. {lvl=1}
3. Build a bank of 6 to 8 stories tagged by theme: conflict, failure, ownership, ambiguity, influence and more. {lvl=2}
4. Say "I" for your actions and "we" for the setting; give teammates credit by name. {lvl=2}
5. Make results concrete with an honest number and say how you measured it. {lvl=2}
6. Prepare for follow-ups; end failure stories with a lasting change. {lvl=3}
7. At senior level, show scope: people persuaded, trade-offs, organisation-wide results. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never invent or inflate a story; follow-up questions find the join. If it is not yours, do not tell it. {lvl=1}
- Do not spend the first minute on background; start the action within 30 seconds. {lvl=1}
- Do not hide behind "we"; the interviewer must see your part. {lvl=2}
- Do not blame others in a conflict or failure story; describe what you could control. {lvl=2}
- Do not memorise a script; keep bullets and tell it naturally, or it sounds rehearsed. {lvl=2}
- Do not give a number you cannot explain; "I estimated it from..." is fine. {lvl=3}
- Do not tell the same story in every interview of the same loop; spread your bank across rounds. {lvl=3}
:::
