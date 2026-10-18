---
title: Contest strategy and rating growth
summary: Two hours, six problems, one clock. How to choose what to solve first, when to walk away, and how a rating really grows.
ncert: []
up_to: SDE-2
builds_on: [Reading constraints, Stress testing and edge cases, Expected value]
notes_prompt: Explain to a friend why reading every problem before solving any is not a waste of time, and how you decide when to give up on a problem.
margin:
  - kind: history
    title: Contests are old
    text: 'The ACM programming contests for university teams began in the 1970s, and the scoring idea of "most problems solved, then least time" has barely changed since. [Unverified: exact year.]'
  - kind: tip
    title: The scoreboard is information
    text: 'If many people solved problem D in the first twenty minutes and you have not looked at it, you have just been told it is easier than its letter suggests.'
  - kind: olympiad
    title: Partial credit
    text: 'In IOI-style contests, a problem is split into subtasks with points. A brute force that handles the small subtask is often worth more than a perfect idea that never gets coded.'
books:
  - { title: "A. Ericsson and R. Pool, Peak: Secrets from the New Science of Expertise", ref: "deliberate practice [Unverified: chapter numbers]" }
  - { title: "S. Halim and F. Halim, Competitive Programming", ref: "introductory chapter on contest tips [Unverified]" }
cards:
  - { front: "What should you do in the first ten minutes of a contest?", back: "Read every problem (at least the statements and constraints), mark which look easy, and start with the one you are surest of. You then know the whole map." }
  - { front: "In ICPC-style scoring, how is a team ranked and what is the penalty?", back: "By number of problems solved, then by total penalty time. Penalty is the sum of each solved problem's solve time plus 20 minutes for every earlier wrong submission on it. Unsolved problems add nothing." }
  - { front: "Which order of problems minimises total penalty time?", back: "Shortest solve time first. The same exchange argument as scheduling jobs: a long job placed early delays everything after it." }
  - { front: "What is a time box?", back: "A limit you set before starting, for example 25 minutes of no progress. When it ends you switch problem or approach, whatever the sunk effort." }
  - { front: "What is upsolving?", back: "Solving, after the contest, the problems you could not solve during it, by reading the editorial only after a serious attempt. It is where most of the learning happens." }
  - { front: "Why do ratings move slowly if you only play contests?", back: "A contest gives only a few data points a week. Growth comes from deliberate practice between contests: problems just above your level, then review of every failure." }
core:
  idea: 'A contest is a scheduling problem under uncertainty: spend a fixed number of minutes on problems of unknown difficulty to maximise expected score. Read everything first, solve the surest and shortest first, time-box every attempt, and treat each wrong submission as a real cost.'
  formulas:
    - tex: '\text{penalty} = \sum_{\text{solved}} \bigl(t_i + 20\,w_i\bigr)'
      label: 'ICPC-style penalty: solve time plus 20 minutes per wrong try, for solved problems only'
    - tex: 'P(\text{A beats B}) = \dfrac{1}{1 + 10^{(R_B - R_A)/400}}'
      label: 'Elo-style win chance from the two ratings [Unverified: real sites use variations]'
  conditions:
    - 'The scoring rule is known: always check the format before the contest starts'
    - 'Your time estimates are roughly honest (they are usually too optimistic)'
    - 'Problems are independent, so time spent on one does not change another'
  sign: 'Commonest mistake: sunk-cost thinking, staying on a problem because of the time already spent, not because of the progress still likely.'
outcomes:
  - 'Run a contest in phases: scan, order, solve with time boxes, and clean up'
  - 'Work out a penalty and rank two teams from their solve times and wrong tries'
  - 'Decide when to switch problems using a time box and the scoreboard'
  - 'Tell contest formats apart and adapt the strategy to each'
  - 'Plan practice with virtual contests and upsolving, and diagnose a plateau'
opener:
  story: |
    A cricket captain does not bowl his best bowler for ten straight overs in the first hour. He looks at the pitch, the batters, the light and the scoreboard, and spends his resources over the whole innings.

    A programming contest is the same game. You have two hours and six problems. Some will take you ten minutes and some will take you a night. Two contestants with exactly the same skill can finish three problems apart, because one of them spent seventy minutes on a problem that was never going to fall.

    So here is the real question: with the clock running and the scoreboard moving, how do you know whether to push on or to walk away?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A clock with a timeline of a contest split into scan, solve and cleanup phases, with problems as bars"><circle cx="64" cy="64" r="42" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M64 64 L64 34" style="stroke:var(--ink);stroke-width:2"/><path d="M64 64 L86 76" style="stroke:var(--c);stroke-width:2"/><text x="40" y="124" style="font-size:10px;fill:var(--muted)">2 hours</text><rect x="130" y="30" width="180" height="14" rx="3" style="fill:none;stroke:var(--rule)"/><rect x="130" y="30" width="22" height="14" rx="3" style="fill:var(--c)"/><text x="130" y="24" style="font-size:10px;fill:var(--muted)">scan 10 min</text><rect x="130" y="70" width="40" height="16" rx="3" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--c)"/><text x="316" y="82" text-anchor="end" style="font-size:10px;fill:var(--muted)">A: 10 min</text><rect x="172" y="94" width="70" height="16" rx="3" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--c)"/><text x="316" y="106" text-anchor="end" style="font-size:10px;fill:var(--muted)">B: 25 min</text><rect x="244" y="118" width="64" height="16" rx="3" style="fill:none;stroke:var(--bad);stroke-dasharray:4 3"/><text x="316" y="150" text-anchor="end" style="font-size:10px;fill:var(--bad)">C: stuck, switch</text><path d="M130 190 L310 190" style="stroke:var(--ink);stroke-width:1.5"/><path d="M270 184 L270 196" style="stroke:var(--bad);stroke-width:2"/><text x="130" y="210" style="font-size:10px;fill:var(--muted)">0</text><text x="262" y="210" style="font-size:10px;fill:var(--bad)">last 15</text><text x="300" y="210" style="font-size:10px;fill:var(--muted)">120</text></svg>'
life:
  - 'An exam paper: students who skim all questions first and answer the sure ones first usually score higher than those who start at question 1 and get stuck.'
  - 'A cricket captain rationing overs and a batter choosing which balls to attack are both spending a fixed budget under uncertainty.'
  - 'A kitchen at lunch rush decides the order of dishes so the shortest orders do not wait behind a slow one.'
  - 'A doctor at a casualty ward sorts patients by urgency and time needed (triage) before treating anyone.'
  - 'Planning a day of errands: shortest first clears the list quickly and leaves time to judge the rest.'
models:
  - name: 'Explore before you commit'
    text: 'Look at all the options at low cost before spending the big budget. Reading all the problems costs ten minutes and saves an hour; the same holds when choosing a college, a flat or a project.'
  - name: 'Sunk costs are sunk'
    text: 'The time already spent on a problem is gone whether you continue or not. Only the future matters: how likely is progress, and what else could those minutes buy?'
  - name: 'Deliberate practice'
    text: 'Skill grows from work just beyond current ability, with feedback, and review of every failure. Hours of comfortable repetition add little. This holds for chess, music, cricket and surgery.'
links:
  - leaf: 'cs/cp-greedy-exchange'
    name: 'Greedy and exchange arguments'
    same: 'Ordering problems by shortest solve time to minimise total penalty is a proof by exchange: swapping a longer problem ahead of a shorter one only adds delay.'
    differs: 'The greedy lesson proves optimality on exact data; in a contest your estimates are guesses, so the rule is a guide, not a theorem.'
  - leaf: 'cs/expected-value'
    name: 'Expected value'
    same: 'Choosing which problem to attempt means comparing expected points per minute: chance of success times points, divided by time.'
    differs: 'Textbook expected value uses known probabilities; in a contest the probabilities come from your honest guess and the scoreboard.'
  - leaf: 'cs/scheduling'
    name: 'Scheduling in operating systems'
    same: 'Running the shortest job first minimises average waiting time, for processes and for contest problems alike.'
    differs: 'A processor knows its jobs and runs them without tiring; a contestant tires and may discover a problem is harder than it looked.'
next:
  q: 'You can now run a contest. But the problems ahead are not on a scoreboard; they are on a job interview whiteboard, where the first problem you meet often hides a pattern you have seen before. Which arrays and hash tables trick comes up again and again?'
  leaf: 'cs/iv-arrays-and-hashing'
  name: 'Arrays and hashing'
symbols:
  - s: 't_i'
    means: 'minute at which problem i was accepted (minutes since the start)'
  - s: 'w_i'
    means: 'number of wrong submissions on problem i before it was accepted (count)'
  - s: '20'
    means: 'penalty minutes added per wrong submission in ICPC-style scoring (minutes)'
  - s: 'R_A, R_B'
    means: 'ratings of contestants A and B (points)'
  - s: 'P'
    means: 'chance that A ranks above B (a number between 0 and 1)'
  - s: '\sum'
    means: 'add up the terms for every solved problem'
---

:::hook
q: In a 2-hour contest you spend the first 10 minutes only reading, not typing, while others are already coding. What happens on average?
options: ["You fall behind and lose", "You do about as well, since you will solve fewer problems", "You usually do better, since you start with the problem you are surest of"]
answer: 2
right: Right. Ten minutes of reading is a small price. You find the easy problems, spot traps, and avoid sinking an hour into the hardest one. Most strong contestants scan first. [Inference: based on common advice, not a measured study.]
wrong: Think about what happens if the first problem you open is the hardest one and you do not know it. What does reading first protect you from?
:::

## Know the game {lvl=1 id=s-game label="Foundations"}

Every contest has two things: a **scoring rule** and a **clock**. Strategy is the art of getting the most score out of the clock.

In the most common team format, **ICPC-style**, you are ranked first by **how many problems you solved**, and ties are broken by **penalty time**. Each solved problem adds the minute you solved it. Each wrong submission on that problem, before it was accepted, adds 20 more minutes. Problems you never solved add nothing, not even their wrong tries.

Take a contest where you solved A at minute 10, B at minute 35 (after 2 wrong tries) and C at minute 70.

$$\text{penalty} = 10 + (35 + 20\cdot 2) + 70 = 155$$

Read it as: add the solve times, and add 20 minutes for each wrong try on a problem you did solve. Notice two things. A wrong try is expensive, since 2 of them cost as much as a whole problem's minutes. And because only solved problems count, a wrong try on a problem you never solve costs nothing in ICPC scoring, though it does cost time and morale.

:::qc lvl=1
q: You solve one problem at minute 40 after 3 wrong tries. Under ICPC-style scoring, what is your penalty?
options: ["40", "100", "60"]
answer: 1
right: Right. 40 minutes plus 3 times 20 is 100.
wrong: Add the solve time, then 20 for each of the three wrong tries.
:::

## The contest loop {lvl=1 id=s-loop label="Foundations"}

The template for a whole contest has five phases:

1. **Scan (first 5 to 10 minutes).** Read every statement and its constraints. Mark each problem *easy*, *maybe* or *hard*. Open the scoreboard to see what others solved.
2. **Order.** Take the problem you are surest of, and among those, the one that takes the least time.
3. **Solve with a time box.** Before starting, decide how many minutes you will give it. At the limit, ask the switching questions below.
4. **Switch rule.** If you have no new idea after the time box, leave a note on what you tried and move on. Return later with fresh eyes.
5. **Cleanup (last 15 minutes).** Do not start a new hard problem. Re-check edge cases of what you have, and attempt only things that are almost done.

Why shortest first? Suppose three problems take 10, 20 and 50 minutes with no mistakes. The order 10, 20, 50 gives solve times 10, 30, 80 and penalty 120. The order 50, 20, 10 gives 50, 70, 80 and penalty 200. The long job placed first delays everything after it. This is the same exchange argument as in the greedy lesson.

:::figure caption="Same three problems, two orders. Shortest first finishes the cheap ones early and cuts total penalty from 200 to 120."
<svg viewBox="0 0 320 130" role="img" aria-label="Two timelines of the same three problems in different orders">
<text x="8" y="22" style="font-size:10px;fill:var(--muted)">short first</text>
<rect x="70" y="10" width="18" height="16" class="pen"/><rect x="88" y="10" width="36" height="16" class="pen"/><rect x="124" y="10" width="90" height="16" class="pen"/>
<text x="74" y="22" style="font-size:9px;fill:var(--ink)">10</text><text x="98" y="22" style="font-size:9px;fill:var(--ink)">20</text><text x="160" y="22" style="font-size:9px;fill:var(--ink)">50</text>
<text x="8" y="62" style="font-size:10px;fill:var(--muted)">long first</text>
<rect x="70" y="50" width="90" height="16" class="pen"/><rect x="160" y="50" width="36" height="16" class="pen"/><rect x="196" y="50" width="18" height="16" class="pen"/>
<text x="110" y="62" style="font-size:9px;fill:var(--ink)">50</text><text x="172" y="62" style="font-size:9px;fill:var(--ink)">20</text><text x="200" y="62" style="font-size:9px;fill:var(--ink)">10</text>
<text x="70" y="104" style="font-size:10px;fill:var(--muted)">solve times: 10, 30, 80 (penalty 120) versus 50, 70, 80 (penalty 200)</text>
</svg>
:::

```python
def penalty(solved):                 # solved: list of (minute, wrong_tries)
    return sum(t + 20 * w for t, w in solved)

print(penalty([(10, 0), (35, 2), (70, 0)]))   # 155
```

:::qc lvl=1
q: After scanning, you rate A as 10 minutes, B as 30 and C as 90. What is the best order under ICPC-style scoring?
options: ["C, B, A", "A, B, C", "B, A, C"]
answer: 1
right: Right. Shortest first: the long problem does not delay the others.
wrong: Which order makes the shortest problems finish earliest?
:::

## When to switch {lvl=2 id=s-switch label="SDE-1"}

Switching is the hardest skill, because the problem you are on feels close. Use a few concrete tests:

- **Time box expired.** 20 to 30 minutes with no new idea, on a problem you estimated at 15.
- **The scoreboard disagrees with you.** Many people solved a problem you skipped; few solved the one you are fighting. Go to the one others solved.
- **You are rewriting, not thinking.** Changing signs and constants without a reason means you need a stress test (see the previous lesson) or a break, not a resubmission.
- **Expected points per minute.** Compare chance of success times points, divided by minutes needed. A 30-minute problem at 90 percent beats a 60-minute problem at 50 percent for the same points.

Before resubmitting after a wrong answer, check the edge-case checklist and run a stress test for two minutes. A wrong submission costs 20 penalty minutes in ICPC and also shows the judge less than you think: the verdict "wrong answer on test 7" tells you nothing about test 7.

:::qc lvl=2
q: A (30 min, 90 percent success, 500 points) versus B (60 min, 50 percent, 800 points). Which has more expected points per minute?
options: ["A: 15 versus about 6.7", "B: 800 is bigger than 500", "They tie"]
answer: 0
right: Right. A is 0.9 times 500 divided by 30, which is 15. B is 0.5 times 800 divided by 60, about 6.7.
wrong: Compute chance times points, then divide by minutes, for each.
:::

## Contest formats {lvl=2 id=s-formats label="SDE-1"}

Know the format before the clock starts. Details change over the years, so check the contest page. [Unverified: figures below are typical, not guaranteed.]

| Format | Ranking idea | What to do differently |
|---|---|---|
| ICPC-style (teams, one computer) | problems solved, then penalty with 20 minutes per wrong try | Plan who types and who thinks; never leave the keyboard idle; be careful before each submission |
| Codeforces rounds (individual) | points per problem decay with time; wrong tries cost a little; hacks can add points | Speed on the first problems matters; double-check, since a failed system test removes points |
| Educational-style rounds | solved count with penalty; a hacking phase after the contest | Solve carefully, then spend spare time reading others' code for bugs |
| AtCoder-style | fixed points per problem, small penalty per wrong try, no hacks | The score favours a surer, harder problem over many rushed ones |
| Weekly platform contests (4 problems, about 90 minutes) | points for each, penalty minutes for wrong tries | Do the easy two quickly and cleanly; a single mistake shows in the penalty |
| IOI-style (subtasks) | partial points for each subtask | Grab the easy subtasks of every problem first; brute force is worth points |
| Team rounds of many problems, such as university contests | solved count first | Split problems by strength; use the shortest-first rule across the team |

## Practice that grows a rating {lvl=3 id=s-growth label="SDE-2"}

A rating is an estimate of strength, updated after each contest. The Elo idea gives the chance that A beats B:

$$P = \frac{1}{1 + 10^{(R_B - R_A)/400}}$$

Read it as: the bigger the gap in favour of A, the closer to 1 the chance gets. At equal ratings it is exactly one half. At a 400-point gap in favour of A, $P = 1/(1 + 0.1) \approx 0.91$.

Because a contest gives few data points a week, the rating only reveals your level; growth happens in between, by **deliberate practice**:

1. **Pick problems just above your level**: about 100 to 200 rating points higher than you comfortably solve. Too easy teaches nothing; too hard teaches only frustration.
2. **Virtual contests.** Take a past contest and run it with the real clock and the real scoring, with no editorial and no pauses. This trains the contest loop itself, not only the algorithms.
3. **Upsolve.** Solve the problems you missed after the contest. Attempt seriously for a fixed time, then read the editorial, close it, and write the solution from memory the next day.
4. **Review failures.** For every problem you lost, record the *cause*: misread, no idea, slow implementation, bug, wrong complexity. Count them monthly.
5. **Build a pattern bank.** Use this pillar's catalogue: when you see a new problem, ask which family it belongs to.

```python
# a failure log: count the causes to see where to practise next
from collections import Counter
log = ["misread", "no idea", "bug", "bug", "slow impl", "bug"]
print(Counter(log).most_common())   # [('bug', 3), ...]  -> stress test more
```

## Catalogue: common contest situations and the move that fits {lvl=3 id=s-catalogue label="SDE-2"}

Each situation below is described in my own words; every one maps to the template's phase or switching rule.

| Situation | Phase or rule | Move |
|---|---|---|
| First problem looks easy but you see a catch | Scan | Re-read the statement once more; trivial-looking problems often hide a trap |
| Three people solved D within 15 minutes | Scan / scoreboard | D is easier than its letter; move it up in your order |
| 25 minutes with no new idea | Switch rule | Write down what you tried, switch to the next sure problem |
| Wrong answer on a test, you re-read the code and see nothing | Stress test | Write brute force and generator, do not guess-edit |
| Time limit exceeded | Complexity check | Re-read the constraints, count steps, look for the right pattern |
| Samples pass, you feel unsure | Before submit | Test empty, one element, all equal, maximum; then submit |
| Runtime error on big input | Recursion or memory | Check recursion depth, switch to an iterative form |
| Idea comes at minute 100 of 120 for a long problem | Cleanup phase | Finish only if short; otherwise polish a nearly-done one |
| Behind on a team contest | Team plan | One person on the computer, the others write the next solution on paper |
| Fear after a wrong submission | Emotional control | Take a one-minute breath; each submission is just data |
| Partial-score format | Subtasks | Submit brute force for the first subtask, then improve |
| Two ideas for one problem | Choice | Pick the one that is simpler to code; speed and correctness beat elegance |
| Last 10 minutes, two unsolved | Cleanup | Resubmit nothing without a test; use time to check edge cases |
| Rating drops after a bad contest | Rating growth | Log the cause, do 5 problems on that cause this week |

## Plateaus and the pressure of the clock {lvl=4 id=s-plateau label="SDE-3"}

Ratings tend to plateau when practice becomes comfortable. Diagnose with your failure log, not your feelings. If **misreads** dominate, slow the scan. If **no idea** dominates, you lack patterns; study the catalogues and upsolve more. If **bugs** dominate, practise stress testing and writing smaller functions. If **slow implementation** dominates, retype solved problems from memory to build fluency.

Under pressure, people also change behaviour: they submit too soon, or hold back out of fear of the 20-minute penalty. A useful rule is to set a **personal submit check**: three edge cases tried, complexity counted, samples passed. If all three are done, submit without further delay; if not, do them first. A checklist replaces mood with procedure.

:::qc lvl=4
q: Your log over 10 lost problems shows 6 bugs, 2 misreads, 2 no-idea. What should this week's practice emphasise?
options: ["Learning new algorithms", "Writing stress tests and a pre-submit checklist", "Reading more editorials"]
answer: 1
right: Right. The log says most losses are bugs, so the cheapest gain is catching them before submitting.
wrong: Which cause appears most often in the log? Practise against that one first.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A contest is a time budget: read all problems first, then spend the budget on the surest, shortest ones. {lvl=1}
2. ICPC penalty is solve time plus 20 minutes per wrong try on solved problems; shortest first minimises it. {lvl=1}
3. Set a time box before starting a problem and switch when it expires. {lvl=2}
4. Compare problems by expected points per minute, and use the scoreboard as evidence. {lvl=2}
5. Know the format (ICPC, Codeforces-style, AtCoder-style, subtasks) before you start. {lvl=2}
6. Ratings grow by deliberate practice: problems just above your level, virtual contests, upsolving and a failure log. {lvl=3}
7. Plateaus have causes; the log tells you which one to fix. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Starting to code the first problem without reading the others can trap you on the hardest. {lvl=1}
- Sunk-cost thinking: the minutes already spent do not make the next minutes more productive. {lvl=2}
- Resubmitting after a guess-edit, without reproducing the failure, usually costs 20 minutes and teaches nothing. {lvl=2}
- Starting a new hard problem in the last 15 minutes; finish or polish instead. {lvl=2}
- Reading the editorial immediately: without a serious attempt you learn the answer, not the skill. {lvl=3}
- Doing only contests and no review: the learning is in the failure log and upsolving. {lvl=3}
- Believing a rating is a measure of worth: it is an estimate of today's speed on one kind of problem. {lvl=4}
:::
