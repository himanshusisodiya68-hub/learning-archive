---
title: Binary search on the answer
summary: When you cannot find the best value directly, guess it, test the guess, and let a yes-or-no test halve the search.
ncert: []
up_to: SDE-2
builds_on: [Searching and binary search, Reading constraints, Greedy algorithms]
notes_prompt: Explain to a friend how you can find the smallest truck that delivers all parcels in 5 days without ever planning a delivery schedule from scratch.
margin:
  - kind: history
    title: History
    text: 'Bisection to find where a function crosses zero is one of the oldest numerical methods; mathematicians used it long before computers. Contest programmers noticed that the same halving works whenever a yes-or-no answer flips once, and gave it the name "binary search on the answer". [Unverified: origins]'
  - kind: tip
    title: Interview favourite
    text: 'Phrases like "minimise the maximum", "maximise the minimum", "smallest capacity such that" or "k-th smallest" in an interview problem almost always mean this pattern.'
  - kind: olympiad
    title: Hard to find, easy to check
    text: 'The pattern lives where finding the best answer is hard but checking a proposed answer is easy. Many optimisation problems have this shape, which is why the idea comes up so often.'
books:
  - { title: "A. Laaksonen, Competitive Programmer's Handbook", ref: "the section on binary search, finding the smallest solution [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "the chapter on binary search and bisection, with applications [Unverified]" }
cards:
  - { front: "What must be true for binary search on the answer?", back: "A yes-or-no test ok(x) that is monotone: all No on one side, all Yes on the other, flipping exactly once." }
  - { front: "Template for the smallest x with ok(x) true?", back: "lo, hi = bounds; while lo < hi: mid = (lo+hi)//2; if ok(mid): hi = mid else: lo = mid+1; return lo." }
  - { front: "Template for the largest x with ok(x) true, and the key detail?", back: "mid = (lo+hi+1)//2 (round up); if ok(mid): lo = mid else: hi = mid-1. Rounding down would loop forever." }
  - { front: "Cost of the whole method?", back: "log2(range) tests, each costing one check: usually O(n log range)." }
  - { front: "How to find the k-th smallest without listing everything?", back: "Binary search on the value x; ok(x) = the count of items that are <= x is at least k." }
  - { front: "Real-valued answer: how do you stop?", back: "Do a fixed number of halvings (about 100), not while lo != hi, because floating-point numbers never reach equality safely." }
core:
  idea: 'If a yes-or-no test "is x big enough?" flips only once as x grows, you can find the exact switching point by halving the range: test the middle, keep the half that contains the switch. To solve an optimisation problem, turn it into that test and search the answer instead of building it.'
  formulas:
    - tex: '\text{tests} = \lceil \log_2 (hi - lo + 1) \rceil'
      label: 'How many tests the search needs'
    - tex: '\text{cost} = O(\text{check} \times \log(\text{range}))'
      label: 'Total running time'
  conditions:
    - 'The test is monotone: once true it stays true as x grows (or the reverse)'
    - 'The answer lies in a known range [lo, hi] and the test can be computed quickly'
    - 'For real-valued answers, a small tolerance is acceptable'
  sign: 'The commonest mistake is a test that is not monotone, or mid rounded the wrong way so that the loop never ends. Check both before running.'
outcomes:
  - 'Recognise "minimise the maximum" and "maximise the minimum" as the signal for this pattern'
  - 'Write the two templates (first true, last true) without infinite loops'
  - 'Design a greedy check function for a family of problems'
  - 'Find the k-th smallest by counting how many items are at most x'
  - 'Adapt the template to real-valued answers'
opener:
  story: |
    A courier company has 10 parcels weighing 1 kg, 2 kg, up to 10 kg, which must go in this order, and the truck makes only 5 trips. What is the smallest truck capacity that gets everything delivered?

    Planning the best loading directly feels hard: where do you split the parcels? But here is a twist. If I *tell* you a capacity, say 15 kg, you can check it in seconds: load parcels in order, start a new trip when the next parcel would overflow, count the trips.

    So guessing is cheap. And if 15 kg works, then 16 kg works too, and 14 kg might fail. The answers go No, No, No, Yes, Yes, Yes. How many guesses do you need to find the exact switch?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A row of tests: no, no, no, then yes, yes, yes, with the switch point found by halving"><g style="font-size:10px;text-anchor:middle"><rect x="20" y="40" width="40" height="30" style="fill:color-mix(in srgb,var(--bad) 18%,var(--surface));stroke:var(--bad)"/><rect x="60" y="40" width="40" height="30" style="fill:color-mix(in srgb,var(--bad) 18%,var(--surface));stroke:var(--bad)"/><rect x="100" y="40" width="40" height="30" style="fill:color-mix(in srgb,var(--bad) 18%,var(--surface));stroke:var(--bad)"/><rect x="140" y="40" width="40" height="30" style="fill:color-mix(in srgb,var(--bad) 18%,var(--surface));stroke:var(--bad)"/><rect x="180" y="40" width="40" height="30" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--c)"/><rect x="220" y="40" width="40" height="30" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--c)"/><rect x="260" y="40" width="40" height="30" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--c)"/><text x="40" y="60" style="fill:var(--ink)">No</text><text x="80" y="60" style="fill:var(--ink)">No</text><text x="120" y="60" style="fill:var(--ink)">No</text><text x="160" y="60" style="fill:var(--ink)">No</text><text x="200" y="60" style="fill:var(--ink)">Yes</text><text x="240" y="60" style="fill:var(--ink)">Yes</text><text x="280" y="60" style="fill:var(--ink)">Yes</text></g><path d="M180 78 L180 120" style="stroke:var(--ink);stroke-width:2"/><text x="180" y="136" style="font-size:11px;text-anchor:middle;fill:var(--ink)">the switch</text><g style="font-size:10px;fill:var(--muted)"><text x="20" y="170">test the middle:</text><text x="20" y="188">Yes? then the answer is here or left.</text><text x="20" y="204">No? then the answer is to the right.</text><text x="20" y="224">Each test halves what remains.</text></g></svg>'
life:
  - 'Finding the right oven temperature or the right amount of salt: too little fails, enough works and everything above also works, so you narrow in from both sides.'
  - 'The number guessing game, "higher or lower": every answer halves the possibilities.'
  - 'Setting a budget: the smallest monthly amount that still lets you reach a goal in 12 months is found by trying amounts and checking.'
  - 'A tailor adjusting a trouser length: each trial fitting is a yes-or-no test that tells you which way to move.'
models:
  - name: 'Easy to check, hard to find'
    text: 'Many problems are hard to solve directly but easy to verify. When checking is cheap, searching over answers can beat constructing one. This works in life too, from choosing a route to choosing a price.'
  - name: 'A switch only flips once'
    text: 'If a thing goes from "not enough" to "enough" and never back, you can find the threshold with very few trials. Look for monotone thresholds in budgets, dosages and deadlines.'
  - name: 'Halve the doubt'
    text: 'Every good question removes half of what you do not know. The best experiment, or the best interview question, splits the possibilities evenly.'
links:
  - leaf: 'cs/searching-and-binary-search'
    name: 'Searching and binary search'
    same: 'Both repeatedly halve the range using one comparison, so a range of a billion takes 30 steps.'
    differs: 'Plain binary search looks through a stored sorted list; here nothing is stored, and a check function plays the role of the sorted data.'
  - leaf: 'cs/greedy'
    name: 'Greedy algorithms'
    same: 'The check function is almost always a greedy walk: pack as much as you can, start a new group when it no longer fits.'
    differs: 'Greedy alone makes choices to build the answer; here greedy only checks one proposed answer and binary search finds the best.'
  - leaf: 'cs/cp-prefix-sums'
    name: 'Prefix sums'
    same: 'Prefix sums can make the check function O(n), for example when asking whether a subarray average at least x exists.'
    differs: 'Prefix sums answer questions about a fixed array; here the question changes with every guess.'
next:
  q: 'In the parcels problem, the check was greedy: pack as much as you can before starting the next trip. Why is that safe? When is a locally best choice also globally best, and how do you prove it?'
  leaf: 'cs/cp-greedy-exchange'
  name: 'Greedy and exchange arguments'
symbols:
  - s: 'ok(x)'
    means: 'the yes-or-no test for a proposed answer x (true or false)'
  - s: 'lo,\ hi'
    means: 'the smallest and largest values still possible for the answer'
  - s: 'mid'
    means: 'the middle of the remaining range, the next value to test'
  - s: '\log_2'
    means: 'how many times a range can be halved: about 30 for a billion'
  - s: 'O(\cdot)'
    means: 'how the work grows with the input, ignoring constants'
  - s: 'k'
    means: 'a count: days, pieces, or the rank we want (k-th smallest)'
---

:::hook
q: The parcels weigh 1, 2, ..., 10 kg and you may make 5 trips. A truck of capacity 15 kg is found to work, and 14 kg is found to fail. What can you say about 16 kg and 13 kg without testing them?
options: ["16 works and 13 fails", "Both must be tested", "16 might fail"]
answer: 0
right: Right. A bigger truck can always do whatever a smaller truck could, so Yes stays Yes above the switch and No stays No below it. That is the monotone property that makes halving possible.
wrong: Think about what a bigger truck can do. It can copy any plan of a smaller truck, so it can never do worse.
:::

## Guess, test, halve {lvl=1 id=s-halve label="Foundations"}

You know the number guessing game: I think of a number from 1 to 100 and you guess; I say "higher" or "lower". The best first guess is 50, because either answer rules out half of the numbers. Seven guesses are enough for 100 numbers, thirty for a billion.

That game works because there is a question whose answers go *Lower, Lower, ..., Lower, then done, then Higher, Higher...*. Now notice that you can use the same trick on many problems where the "number" is the answer to an optimisation puzzle. All you need is a **yes-or-no test** with a switch:

- Proposal too small: **No**, everywhere below the answer.
- Proposal big enough: **Yes**, and Yes again for anything larger.

The answer is the exact place where No turns into Yes. Halving finds it. The test is called a **predicate**, and one that flips only once is **monotone**.

:::qc lvl=1
q: How many yes-or-no tests are needed, at most, to find the switch among 1,000,000,000 possible values?
options: ["30", "500", "1,000,000"]
answer: 0
right: Right. Each test halves the range and 2^30 is about 1.07 billion.
wrong: Count the halvings: 10^9 → 5×10^8 → ... You need about log base 2 of a billion, which is 30.
:::

## The template {lvl=2 id=s-template label="SDE-1"}

Keep two bounds: `lo` (the smallest value still possible) and `hi` (one that surely works). Test the middle. If it works, the answer is at `mid` or lower, so `hi = mid`. If not, the answer is above, so `lo = mid + 1`. Stop when the bounds meet.

```python
def first_true(lo, hi, ok):      # smallest x in [lo, hi] with ok(x); ok(hi) is True
    while lo < hi:
        mid = (lo + hi) // 2
        if ok(mid): hi = mid
        else:       lo = mid + 1
    return lo
```

Now the parcels. The check walks through the parcels in order, starting a new trip when the next parcel would overflow. The capacity must be at least the heaviest parcel (`lo`) and at most the total weight (`hi`, one trip).

```python
def min_capacity(w, days):
    def ok(cap):
        trips, load = 1, 0
        for x in w:
            if load + x > cap: trips, load = trips + 1, 0
            load += x
        return trips <= days
    return first_true(max(w), sum(w), ok)
print(min_capacity(list(range(1, 11)), 5))    # 15
```

The cost is one pass per test and about $\log_2(\text{sum})$ tests: $O(n \log(\text{sum}))$. Compare that with a dynamic programme over all ways to split the parcels, which costs far more.

Two things make this reliable. The check does **not** search for a plan, it only verifies a proposed capacity greedily. And the test is monotone: more capacity never needs more trips.

:::figure caption="Each test halves the range. The switch is the smallest capacity that works."
<svg viewBox="0 0 360 100" role="img" aria-label="A number line from 10 to 55 with test points showing the range shrinking toward the switch at 15">
<line class="axis" x1="20" y1="60" x2="340" y2="60"/>
<rect x="20" y="30" width="320" height="14" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/>
<rect x="20" y="46" width="160" height="10" style="fill:color-mix(in srgb,var(--phy) 14%,var(--surface));stroke:var(--phy)"/>
<rect x="20" y="72" width="80" height="8" style="fill:color-mix(in srgb,var(--phy) 24%,var(--surface));stroke:var(--phy)"/>
<text x="24" y="26" style="font-size:9px;fill:var(--muted)">start: 10 to 55</text>
<text x="184" y="54" style="font-size:9px;fill:var(--muted)">after test 1</text>
<text x="104" y="79" style="font-size:9px;fill:var(--muted)">after test 2 ... until one value remains</text>
</svg>
:::

:::qc lvl=2
q: ok(x) is true for x ≥ 17 and false below. With lo = 1, hi = 100, the first test is mid = 50. What happens?
options: ["ok(50) is true, so hi becomes 50", "ok(50) is true, so lo becomes 51", "ok(50) is false, so hi becomes 50"]
answer: 0
right: Right. A Yes means the answer is at 50 or lower, so we keep [1, 50]. The loop continues until lo = hi = 17.
wrong: A Yes at 50 means 50 works, so the smallest working value is 50 or smaller.
:::

## Maximise the minimum {lvl=2 id=s-max label="SDE-1"}

The mirror image is **maximise the minimum**. Classic setting: place $k$ cows in stalls along a line so that the smallest gap between any two cows is as large as possible. A gap of $d$ is *possible* if we can place $k$ cows at least $d$ apart: greedily put the first cow at the left end, and each next cow at the first stall at least $d$ away. Now the test goes Yes, Yes, ..., Yes, then No, No (a larger gap is harder), so we want the **last** Yes.

The trap lies in the middle: if `lo = mid` after a Yes and `mid` rounds down, then `lo` can stay unchanged and the loop never ends. Round **up** for the last-true version.

```python
def last_true(lo, hi, ok):       # largest x in [lo, hi] with ok(x); ok(lo) is True
    while lo < hi:
        mid = (lo + hi + 1) // 2           # round UP
        if ok(mid): lo = mid
        else:       hi = mid - 1
    return lo

def max_min_gap(pos, k):
    pos = sorted(pos)
    def ok(d):
        cnt, last = 1, pos[0]
        for p in pos[1:]:
            if p - last >= d: cnt, last = cnt + 1, p
        return cnt >= k
    return last_true(0, pos[-1] - pos[0], ok)
print(max_min_gap([1, 2, 4, 8, 9], 3))     # 3
```

Read the rule as: "with $d$ as the gap, see whether $k$ cows fit". For gap 3 the cows go to stalls 1, 4 and 8, so it works. For gap 4 the greedy walk picks stalls 1 and 8, and no stall lies 4 or more beyond 8, so only 2 cows fit and it fails.

## Counting and real numbers {lvl=3 id=s-count label="SDE-2"}

**The k-th smallest without listing.** Suppose a multiplication table of $n$ rows and $m$ columns holds all products $i \times j$. Listing them all is too much when $n$ and $m$ are huge. Instead ask: for a value $x$, how many entries are at most $x$? Row $i$ contributes $\min(m, \lfloor x / i \rfloor)$. The test "at least $k$ entries are $\le x$" is monotone in $x$; the smallest $x$ that passes is exactly the $k$-th smallest entry.

```python
def kth_in_table(n, m, k):
    def ok(x):
        return sum(min(m, x // i) for i in range(1, n + 1)) >= k
    return first_true(1, n * m, ok)
print(kth_in_table(4, 5, 10))               # 6
```

The same idea finds the k-th smallest *distance* between pairs of numbers: sort, then count pairs with distance $\le x$ using two pointers.

**Real-valued answers.** Sometimes the answer is a decimal: the smallest speed, the longest rope piece. Integers cannot be halved to equality, so run a fixed number of halvings.

```python
def bisect_real(lo, hi, ok, iters=100):      # smallest x with ok(x), ok monotone
    for _ in range(iters):
        mid = (lo + hi) / 2
        if ok(mid): hi = mid
        else:       lo = mid
    return hi
print(bisect_real(0, 2, lambda x: x * x >= 2))   # 1.4142135623...
```

A hundred halvings shrink the range by $2^{100}$, far beyond double precision. Don't write `while lo != hi` for floats. A typical use: "find the largest average of any stretch of length at least $k$": guess an average $x$, subtract it from every number, and ask with prefix sums whether some stretch of length $\ge k$ has a non-negative total.

:::qc lvl=3
q: Why does "at least k entries are ≤ x" lead to the k-th smallest?
options: ["Because the smallest x where the count first reaches k is the k-th entry in sorted order", "Because the count is always k", "Because the table is sorted"]
answer: 0
right: Right. The count of entries up to x jumps at actual values and first reaches k exactly at the k-th smallest.
wrong: Picture the sorted list. The count of entries up to x grows as x grows; where does it first reach k?
:::

## The catalogue: problem types {lvl=3 id=s-catalogue label="SDE-2"}

Each is in our own words and mapped to a variant.

1. **Ship parcels in order within $D$ days, smallest truck.** Min-max; first true; check = greedy trip count.
2. **Cut an array into $m$ consecutive parts so the biggest part-sum is as small as possible.** Same as 1.
3. **Assign planks in order to $k$ painters, minimise the time of the slowest.** Same as 1.
4. **Eating bananas: piles are eaten at speed $s$ per hour (one pile per hour), finish within $h$ hours, smallest $s$.** First true; check = sum of $\lceil a_i / s \rceil$.
5. **Cows in stalls: maximise the smallest gap.** Max-min; last true.
6. **Cut ropes into equal pieces: longest piece length giving at least $k$ pieces.** Last true (integer) or real-valued bisection.
7. **k-th smallest in a multiplication table.** Counting variant.
8. **k-th smallest distance among all pairs of numbers.** Counting variant, check by two pointers.
9. **Fewest days until you can make $m$ bouquets from flowers that bloom on given days.** First true over days; check = scan for runs of bloomed flowers.
10. **Smallest divisor so that the sum of $\lceil a_i / d \rceil$ stays within a limit.** First true.
11. **Machines with different speeds, minimum time to finish $T$ jobs.** First true over time; check = $\sum \lfloor t / s_i \rfloor \ge T$.
12. **Heaters on a line: smallest radius that warms every house.** First true; check = greedy sweep.
13. **Integer square root or $n$-th root.** First true on $x^2 \ge N$ (or last true on $x^2 \le N$).
14. **Largest average of a stretch of length at least $k$.** Real-valued bisection, check by prefix sums.

## Variants and bugs {lvl=3 id=s-bugs label="SDE-2"}

| Variant | Signal | Change to the template |
|---|---|---|
| Minimise the maximum | "smallest capacity / time / speed such that" | `first_true`, check = greedy packing |
| Maximise the minimum | "largest smallest gap / length" | `last_true`, mid rounded up |
| k-th smallest | "k-th smallest value / distance" | check = count of items $\le x$ is $\ge k$ |
| Real-valued answer | decimal answer, tolerance given | fixed 100 halvings on floats |
| Smallest day / time | "earliest moment when" | search over time, check by simulation |
| Hidden predicate | answer not obviously searchable | ask: "if x works, does x+1 work?" |

**Common bugs**
- A non-monotone check (for example, "is x a divisor"): test it on small cases by hand.
- `mid = (lo + hi) // 2` with `lo = mid`: infinite loop; use the round-up form.
- Wrong bounds: `lo` below the true answer is fine, but `hi` must be a value that works (or you return garbage).
- A check function with the wrong comparison (`>` instead of `>=`) shifts the answer by one.
- Real numbers: using `while hi - lo > 1e-9` without enough range, or relying on `==`.
- A check that costs $O(n^2)$ instead of $O(n)$: the log factor multiplies it.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. If a yes-or-no test flips only once, halving finds the switch in about log2 of the range steps. {lvl=1}
2. Turn "find the best x" into "is x good enough?" and search over x. {lvl=2}
3. Smallest working x: first_true with mid rounded down. Largest working x: last_true with mid rounded up. {lvl=2}
4. The check is usually a greedy walk over the input, costing O(n); total O(n log range). {lvl=2}
5. The k-th smallest is the smallest x whose count of items at most x reaches k. {lvl=3}
6. For decimals use a fixed number of halvings, not an equality test. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Always ask: "if x works, does x+1 work?" If not, this pattern does not apply. {lvl=1}
- Round mid up when the update is `lo = mid`. {lvl=2}
- Set `lo` and `hi` so that `hi` surely works (total sum, maximum value) and `lo` cannot be too big. {lvl=2}
- The check must be fast: the total cost is the check cost times the number of halvings. {lvl=2}
- For floats, count iterations; never test two floats for equality. {lvl=3}
:::
