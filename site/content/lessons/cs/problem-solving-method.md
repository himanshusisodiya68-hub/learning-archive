---
title: A method for any problem
summary: What to do in the first ten minutes of a problem you have never seen, and how the size of the input tells you which idea can work.
ncert: []
up_to: SDE-2
builds_on: [Big-O and growth of cost, Hash tables, Graph algorithms, Two pointers and sliding window]
notes_prompt: Explain to a friend the steps you follow when you meet a problem you have never seen, and how you use the input size to choose a method.
margin:
  - kind: history
    title: History
    text: 'George Polya set out the steps "understand the problem, devise a plan, carry it out, look back" in his 1945 book How to Solve It [Unverified: year from memory]. Programmers still use them.'
  - kind: tip
    title: Interview favourite
    text: 'Interviewers grade how you think as much as the answer. Say the brute force first, name its cost, find the slow part, then improve. Silence is the one thing that scores badly.'
  - kind: olympiad
    title: Contest habit
    text: 'In contests, read the limits before the story. The number after "n ≤" often tells you the intended complexity, and so the family of solutions.'
books:
  - { title: "G. Polya, How to Solve It", ref: "The four-step plan and the list of questions to ask yourself [Unverified: exact wording of the list]" }
  - { title: "Z. Zeitz, The Art and Craft of Problem Solving", ref: "Strategies: draw a picture, solve a smaller problem, work backwards" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "The war stories chapter on modelling a problem and the checklist for design [Unverified: chapter numbers]" }
cards:
  - { front: "The steps of the method, in order?", back: "Understand (restate it), try small examples, write the brute force, find the bottleneck, pick a pattern, code it, test it." }
  - { front: "Why write the brute force first?", back: "It is correct (a reference for testing), it shows what work is repeated, and it is a safe answer if you run out of time." }
  - { front: "What does n up to 100,000 tell you?", back: "About 10^8 steps is the budget, so O(n²) = 10^10 is too slow; you need about O(n log n) or O(n)." }
  - { front: "What does n up to 20 tell you?", back: "2^20 is about a million, so trying every subset is fine: backtracking or bitmasks are the intended idea." }
  - { front: "What is a stress test?", back: "Run your fast solution and a slow, obviously correct one on thousands of small random inputs and stop at the first difference." }
  - { front: "Stuck: name three moves to get unstuck.", back: "Solve a smaller or simpler version; draw it; work backwards from the answer; ask what the brute force repeats." }
core:
  idea: 'Most problems are old problems in new clothes. Understand the question, write a slow correct method, find what it repeats, and match that to a known pattern; the size of the input tells you how fast the method must be.'
  formulas:
    - tex: '\text{steps} \approx f(n) \quad\text{must stay under about } 10^{8}'
      label: 'Budget: a computer does roughly 10^8 simple steps per second'
    - tex: '\text{time} \approx \dfrac{f(n)}{\text{steps per second}}'
      label: 'Estimate the running time before writing any code'
  conditions:
    - 'The step rate is a rule of thumb: about 10^8 per second in compiled languages and about 10^7 in Python'
    - 'f(n) counts the main loop work and ignores small constants'
    - 'Hidden costs (sorting, slicing, string joins) count too'
  sign: 'The commonest mistake is coding straight away. Ten minutes on examples and the brute force saves an hour of the wrong fast solution.'
outcomes:
  - 'Restate a problem and test your understanding with small examples'
  - 'Write the brute force and say its running time'
  - 'Use the input limits to decide how fast the solution has to be'
  - 'Match a problem to a pattern from its wording and its bottleneck'
  - 'Test a solution against edge cases and a brute-force reference'
opener:
  story: |
    A food-delivery app has 10,000 orders waiting and 10,000 riders free. It wants to pair every order with a rider so the total waiting time is smallest. A junior engineer writes the obvious thing: try every possible pairing and keep the best.

    How many pairings is that? The first order can go to any of 10,000 riders, the second to any of the remaining 9,999, and so on. The count is 10,000 × 9,999 × 9,998 × ... × 1, written 10,000! and it is a number with more than 35,000 digits. The number of atoms in the observable universe is a number with only about 80 digits.

    The code is correct and it will never finish. This is the most common way a program fails: not a bug, but a method that cannot scale. How do you notice that *before* writing the code?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Ten orders on the left, ten riders on the right with a tangle of lines, and a growth curve beside"><g style="fill:var(--c)"><circle cx="40" cy="40" r="6"/><circle cx="40" cy="70" r="6"/><circle cx="40" cy="100" r="6"/><circle cx="40" cy="130" r="6"/><circle cx="40" cy="160" r="6"/></g><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><circle cx="150" cy="40" r="6"/><circle cx="150" cy="70" r="6"/><circle cx="150" cy="100" r="6"/><circle cx="150" cy="130" r="6"/><circle cx="150" cy="160" r="6"/></g><g style="stroke:var(--rule);stroke-width:1;fill:none"><path d="M40 40L150 40M40 40L150 70M40 40L150 100M40 40L150 130M40 40L150 160M40 70L150 40M40 70L150 70M40 70L150 100M40 70L150 130M40 70L150 160M40 100L150 40M40 100L150 70M40 100L150 100M40 100L150 130M40 100L150 160M40 130L150 40M40 130L150 70M40 130L150 100M40 130L150 130M40 130L150 160M40 160L150 40M40 160L150 70M40 160L150 100M40 160L150 130M40 160L150 160"/></g><path d="M40 70 L150 130" style="stroke:var(--c);stroke-width:3;fill:none"/><g style="font-size:10px;fill:var(--muted)"><text x="22" y="186">orders</text><text x="130" y="186">riders</text></g><path d="M200 200 L200 30 M200 200 L312 200" style="stroke:var(--ink);stroke-width:1.5;fill:none"/><path d="M204 196 C240 190 262 170 276 120 C284 90 290 60 296 30" style="stroke:var(--bad);stroke-width:2.5;fill:none"/><text x="206" y="22" style="font-size:10px;fill:var(--ink)">tries</text><text x="268" y="216" style="font-size:10px;fill:var(--ink)">orders</text><text x="20" y="226" style="font-size:11px;fill:var(--ink)">5 orders: 120 pairings. 10: 3.6 million.</text></svg>'
life:
  - 'A doctor does not start with surgery: they ask, examine, try the simple test, then escalate. The method is the same.'
  - 'A mechanic who hears a noise lists simple causes first (loose cover) before the engine rebuild.'
  - 'A shopkeeper planning a festival stock list estimates quantities roughly first to see if the plan is feasible at all.'
  - 'A UPI or ride app load-tests with an estimate: millions of requests times the cost of each tells whether one machine is enough.'
  - 'A student attacking an exam question writes what is given and what is asked before choosing a formula.'
models:
  - name: 'Do the estimate before the work'
    text: 'A two-minute calculation of cost (steps, rupees, hours) tells you whether a plan can possibly work. Applies to budgets, trips and projects: multiply the quantities before you commit.'
  - name: 'Slow and right, then fast'
    text: 'Get a correct answer first, however slow. It is your reference, your fallback and a map of what to improve. Premature cleverness is how mistakes hide.'
  - name: 'Same shape, different costume'
    text: 'Experts are not smarter, they have seen more shapes. When stuck on anything, ask what known problem this resembles and what is different.'
links:
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'The constraints table is Big-O turned into a decision: which growth rate fits in the time budget.'
    differs: 'Big-O describes how cost grows; this lesson uses it with a concrete n and a clock to pick a method.'
  - leaf: 'cs/graph-algorithms'
    name: 'Graph algorithms'
    same: 'Step 5 (match a pattern) often means "this is secretly a graph": fewest steps, dependencies, connections.'
    differs: 'The graph lesson teaches the tools; this lesson teaches how to notice which tool is needed.'
  - leaf: 'cs/two-pointers-and-sliding-window'
    name: 'Two pointers and sliding window'
    same: 'Step 4 (find the bottleneck) is exactly where it shines: the brute force restarts work that neighbouring positions share.'
    differs: 'One pattern among many; here we choose between patterns.'
  - leaf: 'mat/induction'
    name: 'Induction'
    same: 'Solving the small case and building up (Polya''s "smaller problem") is the idea behind both recursion and induction.'
    differs: 'Induction proves a statement for all n; the method here uses small cases to find the idea and then check it.'
next:
  q: 'Your program is correct and fast, but it runs as one process doing one thing at a time. How does the computer run a hundred programs at once, and what goes wrong when two of them touch the same data?'
  leaf: 'cs/processes-and-threads'
  name: 'Processes and threads'
symbols:
  - s: 'n'
    means: 'size of the input, such as the number of items (count)'
  - s: 'n!'
    means: 'n factorial: n × (n−1) × ... × 1, the number of ways to arrange n things (count)'
  - s: '2^n'
    means: 'two multiplied by itself n times: the number of subsets of n items (count)'
  - s: 'O(f(n))'
    means: 'cost grows roughly like f(n) as n grows'
  - s: '10^8'
    means: 'one hundred million: a rough count of simple steps a computer does per second'
---

:::hook
q: If a computer checks a billion pairings every second, roughly how long would 10,000! pairings take?
options: ["A few hours", "A few years", "Longer than the age of the universe, by a margin too big to write down"]
answer: 2
right: Right. A number with 35,000 digits divided by a billion is still a number with about 35,000 digits. The age of the universe is only about 4 × 10^17 seconds. (Delivery apps do not publish how they assign riders; they certainly do not try every pairing. [Inference])
wrong: Try it: a billion per second for a year is about 3 × 10^16 pairings. We have 10^35,000. No hardware closes that gap.
:::

## Understand before you code {lvl=1 id=s-understand label="Foundations"}

George Polya, a mathematician who spent his life teaching problem solving, boiled it to four moves: *understand the problem, make a plan, carry it out, look back.* For programs, the method below fills in the details:

1. **Understand.** Restate the problem in your own words. What goes in? What must come out? What are the limits on the input?
2. **Examples.** Work two or three tiny cases by hand, including a boring one (empty input) and a tricky one (all the same). Often the pattern appears here.
3. **Brute force.** Write the simplest correct method, however slow, and work out its cost.
4. **Bottleneck.** Find what the slow method repeats or wastes.
5. **Pattern.** Match the bottleneck and the input limits to a known idea.
6. **Test.** Run the examples and edge cases, and compare with the brute force.

Try it. *Given a playlist of song lengths in minutes, is there a pair that adds to exactly 30?*

- **Understand:** input is a list of numbers and a target; output is yes or no.
- **Example:** [10, 25, 5, 20] and 30 gives yes, 10 + 20. [10, 25] gives no.
- **Brute force:** check every pair, $O(n^2)$.
- **Bottleneck:** for each song we search the entire list for a partner, and we ask "is 30 − x in the list?" again and again.
- **Pattern:** "have I seen it before?" is a hash set; "sorted pair with a target" is two pointers. Either gives $O(n)$ or $O(n \log n)$.

:::qc lvl=1
q: What is the right moment to write the brute-force version?
options: ["After the fast solution is finished", "Before the fast solution: it is correct, and shows what to improve"]
answer: 1
right: Right. It gives you a correct reference and shows what repeated work to remove.
wrong: What would you compare a clever solution against if it gave strange output?
:::

## Let the limits choose the method {lvl=2 id=s-limits label="SDE-1"}

Before you pick an idea, **do the arithmetic**. A computer does about $10^8$ simple steps a second in a compiled language (roughly $10^7$ in Python) [Inference: rule of thumb, not exact]. If the time limit is about a second, your method may use about that many steps. Put in the size of the input $n$:

| If n is up to | Steps you can afford | Methods that fit |
|---|---|---|
| 10 | $n! \approx 3.6\times10^6$ | try all orderings (permutations) |
| 20 | $2^n \approx 10^6$ | try all subsets (backtracking, bitmasks) |
| 500 | $n^3 \approx 1.25\times10^8$ | three nested loops, some dynamic programming |
| 5,000 | $n^2 = 2.5\times10^7$ | two nested loops, simple dynamic programming |
| 100,000 to 1,000,000 | $n\log n \approx 2\times10^7$ | sorting, heaps, binary search, windows |
| 10,000,000 | $n$ | one pass, hash map, prefix sums |
| $10^9$ or more | $\log n$ or a formula | binary search on the answer, mathematics |

```python
n = 200_000
steps = n * n                      # an O(n^2) method
print(steps / 1e8, "seconds")      # 400.0 seconds: far too slow
```

Read it as: two hundred thousand items, every pair checked, 40 billion steps, at 100 million a second that is 400 seconds. The calculation took ten seconds and just saved you from writing the wrong program. Note it also works backwards: if the limits say $n \le 20$, do not hunt for a clever $O(n)$ idea; the author expects you to try everything.

:::figure caption="How fast different methods grow. The dashed line is the budget of about 10^8 steps. A method above the line at your n is too slow."
<svg viewBox="0 0 320 170" role="img" aria-label="Growth curves for n, n log n, n squared and 2 to the n against a budget line">
<path class="axis" d="M30 140 L30 14 M30 140 L304 140" style="stroke:var(--ink);stroke-width:1.5;fill:none"/>
<line x1="30" y1="52" x2="304" y2="52" style="stroke:var(--muted);stroke-width:1.5;stroke-dasharray:6 4"/>
<text x="112" y="46" style="font-size:10px;fill:var(--muted)">budget about 10^8</text>
<path d="M30 140 L304 112" style="fill:none;stroke:var(--mat);stroke-width:2"/>
<path d="M30 140 C120 130 220 100 304 90" style="fill:none;stroke:var(--phy);stroke-width:2"/>
<path d="M30 140 C150 138 230 100 270 14" style="fill:none;stroke:var(--bad);stroke-width:2"/>
<path d="M30 140 C70 138 90 110 100 14" style="fill:none;stroke:var(--ink);stroke-width:2"/>
<g style="font-size:10px;fill:var(--ink)"><text x="270" y="108" style="fill:var(--mat)">n</text><text x="262" y="84" style="fill:var(--phy)">n log n</text><text x="276" y="24" style="fill:var(--bad)">n²</text><text x="106" y="28">2ⁿ</text><text x="270" y="160" style="fill:var(--muted)">n →</text></g>
</svg>
:::

:::qc lvl=2
q: n is up to 100,000 and the time limit is 1 second. Which cost can you afford?
options: ["O(n²), 10 billion steps", "O(n log n), under 2 million steps"]
answer: 1
right: Right. n² = 10^10 would take about 100 seconds at 10^8 per second; n log n is about 1.7 × 10^6.
wrong: Work out n × n for 100,000 and compare with 100 million steps.
:::

## From the clue to the pattern {lvl=2 id=s-pattern label="SDE-1"}

Experts differ from beginners mostly in how many problem families they have already met. After the bottleneck, ask: **what does the problem sound like?**

| Clue in the statement | Pattern | Lesson |
|---|---|---|
| "Seen before?", "count each", "pair with sum" | Hash set or map | Hash tables |
| Sorted input, pair or triple | Two pointers | Two pointers and window |
| Contiguous stretch with a limit | Sliding window or prefix sums | Two pointers and window |
| Fewest steps, equal costs | BFS | Graph algorithms |
| Cheapest route, varied costs | Dijkstra | Graph algorithms |
| "Before/after" dependencies | Topological sort | Graph algorithms |
| "Largest k", "next smallest" | Heap | Heaps and priority queues |
| Each step halves the possibilities, sorted or monotonic | Binary search (also on the answer) | Searching |
| Choices with overlapping sub-problems | Dynamic programming | Dynamic programming |
| Try all combinations, n ≤ 20 | Backtracking | Recursion |

If nothing matches, use the **unstick moves**: solve a smaller version; draw the problem; work backwards from the answer; change the question (what if there is only one query? what if the data were sorted?); look at what the brute force repeats.

```python
# Brute force: count pairs summing to target. O(n^2).
def pairs_slow(a, t):
    return sum(1 for i in range(len(a)) for j in range(i + 1, len(a))
               if a[i] + a[j] == t)
```

The bottleneck is the inner loop searching for the partner $t - a[i]$. Replace that search with a hash map of counts and the method drops to $O(n)$.

## Test like you mean it {lvl=3 id=s-test label="SDE-2"}

A solution that passes the examples in the statement is not tested; the authors chose those to be friendly. Build a test list **before** you code:

- **Smallest:** empty input, one item, two items.
- **Boundaries:** the largest allowed $n$ (does it finish in time?), the largest values (does the number overflow, in languages with fixed-size integers?).
- **Awkward:** all items equal, already sorted, reverse sorted, negative numbers, duplicates.

Best of all is a **stress test**: keep the slow, obviously correct brute force and compare it against the fast solution on thousands of tiny random inputs.

```python
import random

def stress(fast, slow, trials=2000):
    for _ in range(trials):
        a = [random.randint(-5, 5) for _ in range(random.randint(0, 8))]
        t = random.randint(-8, 8)
        if fast(a, t) != slow(a, t):
            print("differs on", a, t)
            return
    print("all agree")
```

Tiny inputs make a failing case easy to read by hand, which turns "wrong somewhere" into a fault you can see. This is why step 3 matters: the brute force becomes your test oracle.

**Communicate as you go.** In an interview or a team, narrate: *Here is the brute force and its cost. The repeated work is the partner search. A hash set removes it. Trade-off: extra memory. Let me test on empty and duplicate inputs.* The same four sentences work in a design review. [Inference: common interview advice, not a company rule.]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Understand first: restate the problem, then work tiny examples by hand. {lvl=1}
2. Write the brute force, say its cost, and find what it repeats; that repeated work is the bottleneck. {lvl=1}
3. Use the limits: about 10^8 steps a second, so n up to 20 means subsets, 5,000 means n², 100,000 means n log n, 10 million means a single pass. {lvl=2}
4. Match the clue to a known pattern; most problems are old shapes in new clothes. {lvl=2}
5. Test small, awkward and large inputs; stress-test the fast solution against the brute force. {lvl=3}
6. Narrate your reasoning: brute force, bottleneck, idea, trade-off, tests. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Coding before understanding is the most expensive habit; spend the first minutes on examples. {lvl=1}
- The step rate is a rule of thumb, and hidden costs count: slicing a list or joining strings inside a loop can add a whole factor of n. {lvl=2}
- Do not stop at "it passes the sample"; samples are chosen to be easy. {lvl=2}
- A lower Big-O is not always faster on small inputs: a clever method with large constants may lose to a simple one when n is tiny. {lvl=3}
- If you change the approach midway, rewrite your examples; old assumptions leak into the new code. {lvl=3}
:::
