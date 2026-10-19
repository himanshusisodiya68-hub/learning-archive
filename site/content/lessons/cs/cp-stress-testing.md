---
title: Stress testing and edge cases
summary: Your solution passes the samples but the judge says wrong answer on a test you cannot see. Build a slow twin and let a random machine find the failure.
ncert: []
up_to: SDE-2
builds_on: [Reading constraints, Big-O and growth of cost, Errors and testing]
notes_prompt: Explain to a friend how a slow, obviously correct program can catch the bugs of a fast, clever one, and why small random tests are enough.
margin:
  - kind: history
    title: Idea with many names
    text: 'Feeding random inputs to a program and watching for disagreement is called fuzzing or randomised differential testing. Fuzzers run on browsers and operating systems today. [Unverified: the first use dates from the late 1980s.]'
  - kind: tip
    title: Small beats big
    text: 'Most bugs show up on inputs of size 1 to 8 with values in a tiny range. Test thousands of tiny cases, not three huge ones.'
  - kind: olympiad
    title: Hacks
    text: 'In some contests you earn points by finding an input that breaks another contestant''s code. The people good at it are the people who stress test their own.'
books:
  - { title: "S. Halim and F. Halim, Competitive Programming", ref: "chapters on problem solving paradigms and debugging tips [Unverified]" }
  - { title: "A. Engineer et al., The Art of Software Testing (general testing background)", ref: "chapter on test-case design [Unverified]" }
cards:
  - { front: "What are the three parts of a stress test?", back: "A brute-force solution that is slow but obviously correct, a random generator of small inputs, and a loop that runs both and stops at the first disagreement." }
  - { front: "Why must the brute force be simple, not clever?", back: "It is the oracle (the source of truth). If it can be wrong too, a disagreement tells you nothing. Try everything, the dumbest way that is certainly right." }
  - { front: "What is shrinking?", back: "Taking a failing input and removing elements or reducing values while it still fails, until you reach a case small enough to trace by hand." }
  - { front: "Name six edge cases to try on any array problem.", back: "Empty, one element, all elements equal, maximum size, all negative numbers, and values at the limits that could overflow." }
  - { front: "What is the fastest way to read input in Python?", back: "Read everything at once with sys.stdin.buffer.read().split(), convert with int, and print once with a joined string." }
  - { front: "Seed the generator: why?", back: "A seed makes each random test reproducible. When test 2917 fails you can rerun exactly that case instead of hoping to see it again." }
core:
  idea: 'To find a bug you cannot see, write a slow solution that is obviously correct, generate thousands of small random inputs, and run both until their answers differ. Then shrink the failing input until you can trace it by hand.'
  formulas:
    - tex: 'P(\text{catch}) = 1 - (1-p)^{T}'
      label: 'Chance that T random tests catch a bug that one test triggers with probability p'
    - tex: 'T \approx \dfrac{\ln(1-P)}{\ln(1-p)}'
      label: 'Tests needed to reach confidence P'
  conditions:
    - 'The brute force is correct, even if it is far too slow for the real limits'
    - 'The bug can be triggered by a small input (true for the great majority of bugs)'
    - 'The generator can actually produce the troublesome shape: duplicates, negatives, ties, empty'
    - 'The answer is unique, or you compare with a checker that accepts any valid answer'
  sign: 'Commonest mistake: a generator whose values are so spread out that ties and duplicates never occur, so the bug is never triggered.'
outcomes:
  - 'Write a brute force, generator and compare loop for a problem in under ten minutes'
  - 'Shrink a failing test to a minimal case you can trace by hand'
  - 'Run through an edge-case checklist before submitting'
  - 'Choose generator parameters so rare cases appear often'
  - 'Read input fast in Python and know when Python recursion or speed becomes the problem'
opener:
  story: |
    It is a Saturday contest. You read the problem, think for twenty minutes, write forty clean lines, and the three samples pass. You submit. The judge replies: **Wrong answer on test 7**.

    You cannot see test 7. Nobody will show it to you. You re-read your code three times and it looks right. You change a `<` to `<=`, resubmit, and get wrong answer on test 4. Now you are worse off than before, and the clock is still running.

    Here is a better way to spend those minutes: build a second program that is stupid but certainly right, and a machine that throws random tiny inputs at both. How many tries before the machine finds your bug?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A random generator feeds a slow brute force and a fast solution, and a comparator flags the first disagreement"><rect x="12" y="92" width="62" height="56" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="22" y="116" style="font-size:11px;fill:var(--ink)">random</text><text x="22" y="131" style="font-size:11px;fill:var(--ink)">input</text><path d="M74 108 C100 108 100 52 126 52" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M74 132 C100 132 100 188 126 188" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="126" y="28" width="78" height="48" rx="8" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="138" y="50" style="font-size:11px;fill:var(--ink)">brute</text><text x="138" y="65" style="font-size:10px;fill:var(--muted)">slow, right</text><rect x="126" y="164" width="78" height="48" rx="8" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="138" y="186" style="font-size:11px;fill:var(--ink)">fast</text><text x="138" y="201" style="font-size:10px;fill:var(--muted)">yours</text><path d="M204 52 C232 52 232 108 252 108" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M204 188 C232 188 232 132 252 132" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="252" y="92" width="58" height="56" rx="28" style="fill:var(--surface);stroke:var(--bad);stroke-width:2"/><text x="266" y="116" style="font-size:16px;fill:var(--bad)">≠</text><text x="262" y="134" style="font-size:10px;fill:var(--bad)">stop!</text><text x="12" y="30" style="font-size:10px;fill:var(--muted)">seed 2917</text><text x="12" y="226" style="font-size:10px;fill:var(--muted)">repeat thousands of times</text></svg>'
life:
  - 'Aircraft software and phone chips are checked against slow, simple reference models running the same random inputs.'
  - 'A chef tastes a new recipe against the familiar family version before serving it to guests: the old one is the oracle.'
  - 'Banks reconcile a fast new system against the old ledger for weeks, and investigate every difference.'
  - 'Teachers check a clever shortcut for a sum by trying it on small numbers by hand first.'
  - 'Browsers and operating systems are fuzzed with random inputs, and many security bugs are found this way.'
models:
  - name: 'A trusted slow twin'
    text: 'When you cannot verify a clever result directly, compute it again the plain way and compare. Auditors, double-entry bookkeeping and proofreading all work by comparing two independent routes to one answer.'
  - name: 'Small cases reveal big truths'
    text: 'If a rule is wrong, it is usually wrong already for tiny examples. Test the rule on three people before launching it to three million.'
  - name: 'Make failure cheap and visible'
    text: 'A reproducible failure with a seed is worth ten vague hunches. Systems that turn a mystery into a replayable case are the ones that get fixed.'
links:
  - leaf: 'cs/errors-and-testing'
    name: 'Errors and testing'
    same: 'Both check code by running it on chosen inputs and comparing with what you expect.'
    differs: 'Ordinary unit tests have expected answers written by hand; a stress test gets its expected answers from a second program, so thousands of cases cost nothing.'
  - leaf: 'cs/cp-reading-constraints'
    name: 'Reading constraints'
    same: 'Constraints tell you which solution is fast enough; the same limits tell you what size the brute force may be (tiny).'
    differs: 'Reading constraints chooses the algorithm before you code; stress testing checks the algorithm after you code.'
  - leaf: 'mat/classical-probability'
    name: 'Classical probability'
    same: 'Counting how likely a random test is to hit a rare case is a probability question: favourable inputs over all inputs.'
    differs: 'Here the outcome space is a generator you design, so you can raise the probability of the interesting cases on purpose.'
next:
  q: 'You can now find your own bugs. But a contest is two hours, not a quiet evening: how do you decide which problem to read first, when to stop stressing and move on, and what each wrong submission really costs?'
  leaf: 'cs/cp-contest-strategy'
  name: 'Contest strategy and rating growth'
symbols:
  - s: 'n'
    means: 'number of elements in the input (count)'
  - s: 'T'
    means: 'number of random tests run (count)'
  - s: 'p'
    means: 'chance that one random test triggers the bug (a number between 0 and 1)'
  - s: 'P'
    means: 'confidence: the chance that at least one of the T tests triggers the bug (0 to 1)'
  - s: '\ln'
    means: 'natural logarithm, the inverse of the exponential; a calculator button'
  - s: 'O(n^2)'
    means: 'quadratic time: the work grows with the square of n, typical for a brute force'
---

:::hook
q: Your fast solution has exactly one bug, which appears on about 1 random small test in 100. You run 300 random tests. About how likely are you to catch it?
options: ["About 3 in 100", "About 50 percent", "About 95 percent"]
answer: 2
right: Right. Each test misses with chance 0.99, and 300 misses in a row has chance 0.99³⁰⁰ ≈ 0.05. So you catch the bug about 95 times in 100, and 300 tiny tests run in a blink.
wrong: Chances add up faster than they seem. The chance of missing every time is 0.99 multiplied by itself 300 times. How small does that get?
:::

## The slow twin {lvl=1 id=s-twin label="Foundations"}

Suppose the task is: given a list of numbers, find the largest sum of a run of **consecutive** numbers (at least one). A clever solution does it in one pass. But how do you know it is right?

Write a second solution that is deliberately dumb. Try every start, try every end, add up, keep the best. It is far too slow for a big input (it does about $n^2$ steps), but for 6 numbers it is instant and almost impossible to get wrong. That is the **brute force**, and in a stress test it plays the role of the **oracle**: the source of truth.

```python
def brute(a):
    best = a[0]
    for i in range(len(a)):
        s = 0
        for j in range(i, len(a)):
            s += a[j]
            best = max(best, s)
    return best
```

Read it aloud: for every start $i$, extend the end $j$ one step at a time, keep a running sum, remember the biggest. Nothing clever to break.

Now the fast version, with a hidden bug that you have not noticed yet:

```python
def fast(a):
    best, cur = 0, 0
    for x in a:
        cur = max(x, cur + x)
        best = max(best, cur)
    return best
```

It passes every sample with a positive answer. Where would it fail?

:::qc lvl=1
q: Which input does fast(a) get wrong, given that the true answer must use at least one number?
options: ["[3, -1, 4]", "[-3, -1, -2]", "[5]"]
answer: 1
right: Right. The best run is [-1], so the answer is -1, but fast starts best at 0 and never goes below it, so it prints 0. All-negative input is a classic edge case.
wrong: Work out the right answer for each by hand, then follow fast. Which input has a best run that is negative?
:::

## The signal {lvl=1 id=s-signal label="Foundations"}

How do you know it is time to stress test? Three clues in the situation:

- The samples pass, and the verdict is **wrong answer on test k** (or you simply do not trust the solution).
- The solution is a **greedy or formula** idea you believe but have not proved.
- The statement has a small version you can solve by trying everything (for example, n up to 8 is enough to expose most bugs, even if the real limit is 200,000).

If the verdict is time limit exceeded or runtime error, stress testing for correctness helps less; use a maximum-size worst-case test instead (see the checker section).

## The loop {lvl=2 id=s-loop label="SDE-1"}

Now the machine. A **generator** produces a small random input. A **loop** gives it to both programs and stops the moment the answers differ. Use a **seed** so every test can be replayed: test number 2917 will always be the same input.

```python
import random

def gen(rng):
    n = rng.randint(1, 6)                      # tiny sizes
    return [rng.randint(-5, 5) for _ in range(n)]   # tiny values

for seed in range(10000):
    a = gen(random.Random(seed))
    if brute(a) != fast(a):
        print("FAIL seed", seed, a, brute(a), fast(a))
        break
else:
    print("all 10000 passed")
```

On the programs above this prints `FAIL seed 2 [-4] -4 0` in a fraction of a second. You found in one second what three resubmissions never would.

Two design choices matter. First, **small sizes and small values**: with values from -5 to 5, ties, zeros and duplicates are common, which is where bugs live. With values up to a billion they would almost never repeat. Second, the **loop is dumb on purpose**: it only compares. All intelligence lives in the generator's shape.

:::figure caption="The three parts of a stress test. The oracle must be trusted; the generator must reach the bad case."
<svg viewBox="0 0 320 120" role="img" aria-label="Table of the three parts: oracle, generator, comparator">
<rect x="6" y="14" width="100" height="92" rx="8" class="pen"/><text x="14" y="40" style="font-size:12px;fill:var(--ink)">Oracle</text><text x="14" y="60" style="font-size:10px;fill:var(--muted)">slow, simple,</text><text x="14" y="74" style="font-size:10px;fill:var(--muted)">obviously right</text>
<rect x="110" y="14" width="100" height="92" rx="8" class="pen"/><text x="118" y="40" style="font-size:12px;fill:var(--ink)">Generator</text><text x="118" y="60" style="font-size:10px;fill:var(--muted)">tiny, seeded,</text><text x="118" y="74" style="font-size:10px;fill:var(--muted)">shaped for ties</text>
<rect x="214" y="14" width="100" height="92" rx="8" class="pen"/><text x="222" y="40" style="font-size:12px;fill:var(--ink)">Comparator</text><text x="222" y="60" style="font-size:10px;fill:var(--muted)">stop at first</text><text x="222" y="74" style="font-size:10px;fill:var(--muted)">difference,</text><text x="222" y="88" style="font-size:10px;fill:var(--muted)">print the seed</text>
</svg>
:::

:::qc lvl=2
q: Your generator picks values between 1 and 10^9. The bug needs two equal elements. What is wrong?
options: ["Nothing, big values are tougher", "Equal elements will almost never appear, so the bug stays hidden", "The brute force will be too slow"]
answer: 1
right: Right. With a billion possible values, a pair of equal ones in a small array has chance near zero. Shrink the value range so ties are common.
wrong: Think about how often two random picks from a billion numbers coincide. What range makes it happen often?
:::

## Shrinking the failure {lvl=2 id=s-shrink label="SDE-1"}

A random failing input is often long and noisy. Before debugging, **shrink** it: remove one element at a time, and keep any removal after which the programs still disagree; then halve values the same way. When nothing more can go, the case is minimal.

```python
def shrink(a, bad):
    again = True
    while again:
        again = False
        for i in range(len(a)):
            b = a[:i] + a[i+1:]
            if b and bad(b):
                a, again = b, True
                break
    return a

bad = lambda a: brute(a) != fast(a)
```

A failure with 6 numbers shrinks to `[-1]`: one number, traceable on paper. You immediately see that `best` should start from the first element, not from 0.

## The edge-case checklist {lvl=2 id=s-edges label="SDE-1"}

Before you submit, and when you design a generator, run through this list. Each row is a family of bugs seen again and again.

| Edge case | What it breaks | Example |
|---|---|---|
| Empty or one element | loops that assume at least two, indexing `a[0]` or `a[1]` | n = 1 |
| All elements equal | strict versus non-strict comparison, ties in sorting | `[7, 7, 7]` |
| Already sorted, or reverse sorted | greedy and sorting assumptions, worst-case depth | `1..n` and `n..1` |
| Maximum size | slow code, memory, recursion depth | n = 2 × 10^5 |
| All negative, or zero | initialising a maximum with 0 | `[-3, -1]` |
| Values at the limits | overflow in other languages, off-by-one at 10^9 | 10^9 and 10^9 |
| Two answers possible | comparing output as text when many answers are valid | any valid path |

Python integers never overflow, which hides one bug family: if the same algorithm is later written in C++ or Java, a sum of 2 × 10^5 values near 10^9 reaches about 2 × 10^14, far above the 32-bit limit near 2.1 × 10^9. Know the size of your biggest sum even in Python.

:::qc lvl=2
q: Which pair of tests is the most useful extra check for a sorting-based solution?
options: ["Two random arrays of size 100", "An array with every element equal, and a reverse-sorted array", "The sample, run twice"]
answer: 1
right: Right. Ties and reverse order are the cases where sorting and comparison logic go wrong, and random arrays rarely produce them at size 100.
wrong: Which inputs does a random array almost never look like?
:::

## Many correct answers, and big inputs {lvl=3 id=s-checker label="SDE-2"}

When a problem accepts **any valid answer** (any shortest path, any valid ordering), comparing outputs as text will report false failures. Write a **checker** instead: a function that takes the input and one output and verifies the answer is valid and optimal, using the brute force only for the optimal value.

```python
def check(a, out):
    return valid(a, out) and value(out) == brute_value(a)
```

To test **speed**, change the generator, not the loop: produce the worst shape at maximum size and time the fast program alone (the brute force is too slow here). Worst shapes: sorted input for naive quicksort, a path-shaped tree for recursion depth (Python's default limit is about 1000 frames), all equal values for hash-collision-like patterns.

For **fast input and output** in Python, read everything at once and print once. Calling `input()` for each of 10^6 numbers is several times slower.

```python
import sys
data = sys.stdin.buffer.read().split()
n = int(data[0])
a = list(map(int, data[1:1 + n]))
out = []
# ... fill out with answers (as strings) ...
sys.stdout.write("\n".join(out) + "\n")
```

To stress test full programs that read standard input, run them from the loop with `subprocess.run([sys.executable, "sol.py"], input=text, capture_output=True, text=True)` and compare `.stdout.split()`. It is slower per test (a process each) but tests exactly what the judge runs.

## Variants of the template {lvl=3 id=s-variants label="SDE-2"}

The loop never changes. Only the oracle, the generator and the comparison do.

| Variant | Signal | Change to the template |
|---|---|---|
| Plain compare | one correct answer per input | compare outputs with `!=` |
| Checker | many valid answers (any path, any order) | replace `!=` with a function that validates the output and its quality |
| Tolerance compare | real-number answers | compare with `abs(x - y) <= 1e-6` |
| Multi-case file | the input holds many cases, state may leak | generate 5 to 20 tiny cases per file |
| Worst-case timing | correct but too slow | generator makes maximum-size sorted, equal or path-shaped input; time only the fast solution |
| Biased generator | the bug needs a rare shape | shrink value range, force duplicates, force sorted or all-equal with some probability |
| Two brute forces | brute and fast disagree and both look right | write a second oracle a different way and vote |

## Catalogue: problem types and the variant that fits {lvl=3 id=s-catalogue label="SDE-2"}

These are described in my own words. Each is a type of problem where stress testing earns its keep.

| Problem type | Why it breaks | Variant |
|---|---|---|
| Largest sum of a consecutive run | start value, all-negative input | Plain compare with negative values |
| A greedy pick for the most tasks that fit | greedy fails on a small clever case | Plain compare, brute over all subsets, n at most 8 |
| Counting pairs with a given sum | duplicates counted twice, same element used twice | Plain compare, tiny value range |
| Merge or cover intervals | touching intervals, one inside another | Plain compare, tiny coordinates |
| Shortest path on a small graph | disconnected vertices, ties, self-loops | Checker for the path, brute via all orders |
| Any valid arrangement under rules | many answers | Checker |
| Minimum cost to split a list into groups | off-by-one in the cut positions | Plain compare, brute over all cuts |
| Searching on a sorted list for the first position that works | wrong boundary, infinite loop | Plain compare over all lengths 1 to 10 |
| Average or geometry with decimals | rounding | Tolerance compare |
| Many queries on one array | stale state between queries | Multi-case file, brute recomputes per query |
| Dynamic programming over a grid | wrong base row or column | Plain compare on grids up to 3 by 3, brute recursion |
| String matching or counting substrings | empty string, repeated letters | Biased generator with alphabet size 2 |
| A solution with deep recursion | crash on a long chain | Worst-case timing with a path-shaped input |

## When brute and fast disagree and you cannot tell who is right {lvl=4 id=s-trust label="SDE-3"}

Sometimes the brute force is the one with the bug. Shrink the case first. Then compute the answer **by hand** from the statement, not from either program. If both look wrong, write a second brute force a different way (for the array problem: try all subsets for a version that checks contiguity separately). Add **assertions** of invariants (the answer is at least the maximum element; the answer is at most the sum of positives) that trap impossible values before they reach the comparator.

Stress testing also scales to harder objects: for a graph problem, generate random graphs and compare with a brute force over all vertex orderings; shrink by deleting a vertex or an edge and relabelling. For randomised solutions, fix the random seed inside the solution so that failures replay.

:::qc lvl=4
q: A statement asks for the length of the longest strictly increasing run. On [2, 2] brute prints 2 and fast prints 1. Who is wrong?
options: ["Fast, the answer is 2", "Brute, the answer is 1 since 2 is not less than 2", "Neither, the statement is unclear"]
answer: 1
right: Right. A strictly increasing run in [2, 2] has length 1. The brute force used a non-strict comparison. Always compute the shrunk case by hand from the statement; the oracle can be the buggy one.
wrong: Compute the true answer by hand from the statement before blaming either program. Is 2 strictly less than 2?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Write a slow, obviously correct brute force; it is the oracle. {lvl=1}
2. Generate thousands of tiny seeded random inputs and stop at the first disagreement. {lvl=2}
3. Keep value ranges tiny so ties, zeros and negatives are common. {lvl=2}
4. Shrink the failing case until you can trace it by hand. {lvl=2}
5. Run the edge-case checklist: empty, one, equal, sorted, maximum, negative, limits. {lvl=2}
6. Use a checker when many answers are valid; stress speed with a worst-case generator. {lvl=3}
7. If brute and fast disagree, trust neither until you hand-compute the small case. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A brute force that is clever is a second place for bugs to hide: keep it dull. {lvl=1}
- A generator with huge value ranges never produces ties; the bug stays hidden. {lvl=2}
- Resubmitting after a guess-fix, without reproducing the failure, usually makes things worse and costs penalty time. {lvl=2}
- Comparing outputs as text when several answers are valid reports false alarms. {lvl=3}
- Forgetting to reset global state between test cases passes single-case samples and fails real files. {lvl=3}
- Python never overflows, so a port to C++ or Java can fail where Python passed. {lvl=3}
- Stress testing proves nothing about speed: time the fast solution on a maximum-size worst case separately. {lvl=2}
:::
