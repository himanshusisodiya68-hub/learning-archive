---
title: Prefix sums and difference arrays
summary: Keep a running total once, and any stretch of numbers can be added up in a single subtraction.
ncert: []
up_to: SDE-2
builds_on: [Arrays and dynamic arrays, Hash tables, Reading constraints]
notes_prompt: Explain to a friend how a cricket scoreboard lets you find the runs scored between two overs with one subtraction, and why the same trick speeds up programs.
margin:
  - kind: history
    title: History
    text: 'Running totals are older than computers: ledgers have always kept a "balance" column so that nobody re-adds the whole page. In computing the idea is also called a cumulative sum or scan, and parallel computers use a fast version of it. [Unverified: origins]'
  - kind: tip
    title: Interview favourite
    text: '"Subarray sum equals k" is among the most asked array questions. If a problem says "contiguous", "subarray" or "range", think prefix sums before anything else.'
  - kind: olympiad
    title: Inverse operations
    text: 'The trick works whenever the operation can be undone: plus and minus, xor with itself, multiply and divide. It fails for max and min, which cannot be "subtracted". Those need a different tool (sparse tables or segment trees).'
books:
  - { title: "A. Laaksonen, Competitive Programmer's Handbook", ref: "the section on prefix sum arrays in the chapter on array techniques [Unverified]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "mentioned under dynamic-programming style precomputation [Unverified]" }
cards:
  - { front: "How do you build a prefix sum array?", back: "P[0] = 0 and P[i+1] = P[i] + a[i]. Length n+1, so P[i] is the sum of the first i items." }
  - { front: "Sum of a[l..r] (0-based, inclusive) from P?", back: "P[r+1] - P[l]. One subtraction, O(1), after O(n) building." }
  - { front: "A difference array: what is it for?", back: "Adding v to a[l..r] is just d[l] += v and d[r+1] -= v. After all updates, one prefix sum rebuilds the final array." }
  - { front: "Count subarrays with sum k when numbers can be negative?", back: "Walk with a running sum s and a hash map of counts of earlier prefix sums. Add count[s - k], then record s. Start with count[0] = 1." }
  - { front: "Why does prefix XOR work?", back: "x xor x = 0, so the xor of a[l..r] equals P[r+1] xor P[l]: the common part cancels itself." }
  - { front: "2D prefix sum rectangle formula?", back: "Big corner - strip above - strip left + the doubly-removed corner: P[r2+1][c2+1] - P[r1][c2+1] - P[r2+1][c1] + P[r1][c1]." }
core:
  idea: 'Store the running total P of an array once. Then the sum of any contiguous stretch is the total at its end minus the total just before its start: P[r+1] - P[l], in one step. Reversing the idea (a difference array) makes "add v to a whole stretch" cost one step too.'
  formulas:
    - tex: 'P_{i+1} = P_i + a_i,\quad P_0 = 0'
      label: 'Build once in O(n)'
    - tex: '\sum_{i=l}^{r} a_i = P_{r+1} - P_l'
      label: 'Any range sum in O(1)'
    - tex: 'd_l \mathrel{+}= v,\quad d_{r+1} \mathrel{-}= v'
      label: 'Add v to a[l..r] in O(1); rebuild by prefix sum at the end'
  conditions:
    - 'The operation can be undone (sum, xor, count); it fails for max and min'
    - 'The array does not change between queries (otherwise use a Fenwick tree)'
    - 'For range updates, all updates come first and the queries after (offline)'
  sign: 'The commonest mistake is off by one: the prefix array has n+1 cells and starts with a zero, and the range is [l, r] with r included.'
outcomes:
  - 'Build a prefix sum array and answer range-sum queries in O(1)'
  - 'Use a difference array to apply many range updates in O(1) each'
  - 'Extend to two dimensions with the inclusion-exclusion formula'
  - 'Combine prefix sums with a hash map to count subarrays with a given sum, xor or remainder'
  - 'Recognise the pattern in at least a dozen disguised problems'
opener:
  story: |
    You are watching a cricket match. The scoreboard shows 71 after 10 overs and 142 after 20 overs. Someone asks: "How many runs came in overs 11 to 20?" You do not replay the match over by over. You subtract: 142 - 71 = 71.

    That scoreboard is a **running total**. It was built once, ball by ball, and now it answers questions about *any* stretch of the innings with a single subtraction.

    Now imagine 200,000 numbers and 200,000 questions of the form "what is the sum from position l to position r?". Adding up each stretch separately is far too slow. Could we keep a scoreboard for arrays too?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Bars of runs per over, a running total line, and two marked totals whose difference gives a range sum"><line x1="20" y1="200" x2="304" y2="200" style="stroke:var(--ink);stroke-width:1.5"/><g style="fill:color-mix(in srgb,var(--c) 25%,var(--surface));stroke:var(--c)"><rect x="28" y="176" width="20" height="24"/><rect x="56" y="162" width="20" height="38"/><rect x="84" y="182" width="20" height="18"/><rect x="112" y="150" width="20" height="50"/><rect x="140" y="168" width="20" height="32"/><rect x="168" y="144" width="20" height="56"/><rect x="196" y="170" width="20" height="30"/><rect x="224" y="156" width="20" height="44"/><rect x="252" y="178" width="20" height="22"/></g><path d="M38 170 L66 140 L94 128 L122 100 L150 80 L178 56 L206 44 L234 30 L262 22" style="fill:none;stroke:var(--ink);stroke-width:2"/><g style="fill:var(--surface);stroke:var(--ink);stroke-width:2"><circle cx="94" cy="128" r="4"/><circle cx="234" cy="30" r="4"/></g><line x1="94" y1="128" x2="94" y2="200" style="stroke:var(--muted);stroke-dasharray:3 3"/><line x1="234" y1="30" x2="234" y2="200" style="stroke:var(--muted);stroke-dasharray:3 3"/><text x="52" y="120" style="font-size:10px;fill:var(--ink)">71</text><text x="196" y="22" style="font-size:10px;fill:var(--ink)">142</text><text x="104" y="218" style="font-size:10px;fill:var(--c)">142 - 71 = runs in between</text><text x="22" y="14" style="font-size:10px;fill:var(--muted)">running total</text></svg>'
life:
  - 'A cricket scoreboard, a bank passbook balance and a petrol-pump odometer are all running totals: the difference of two readings is the amount in between.'
  - 'A cumulative rainfall chart answers "how much fell between the 10th and 25th of July?" with two readings.'
  - 'A cyclist''s trip meter: distance from your home to the 40 km mark minus distance to the 25 km mark is the stretch you rode.'
  - 'Spreadsheets with a "cumulative" column, and fitness apps that show the steps from Monday to Wednesday, use the same idea.'
models:
  - name: 'Pay once, ask many times'
    text: 'Spend a little effort now on a structure so that every later question is nearly free. A map is that for a city, and an index is that for a book. Look for this whenever you are about to repeat the same kind of work.'
  - name: 'Differences hide in totals'
    text: 'A total at two moments contains everything between them. Many quantities (distance, savings, population) are easier to track as running totals than as individual changes.'
  - name: 'Work backwards with an inverse'
    text: 'Addition has subtraction as an undo. Whenever an operation can be undone, a total can be "peeled" to expose one piece. Without an undo (like the maximum), this does not work.'
links:
  - leaf: 'cs/arrays'
    name: 'Arrays'
    same: 'The prefix array is just another array, and reaching any cell is instant.'
    differs: 'The original array holds values; the prefix array holds totals, so two cells together describe a whole stretch.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both trade memory for speed: we keep earlier results to avoid redoing work.'
    differs: 'Here the hash map stores earlier prefix sums, so "has some earlier total equal to s - k?" is one lookup.'
  - leaf: 'mat/definite-integrals-and-area'
    name: 'Definite integrals and area'
    same: 'Integration is a running total of a changing quantity, and the area between two points is the difference of the antiderivative at the ends.'
    differs: 'Prefix sums are the discrete version: finite steps, exact whole numbers, no limits.'
next:
  q: 'You cannot try every capacity of a ship or every distance between cows one by one, but the answer is the smallest value that works, and "works" flips from no to yes just once. Can we find that point without trying them all?'
  leaf: 'cs/cp-binary-search-on-answer'
  name: 'Binary search on the answer'
symbols:
  - s: 'a_i'
    means: 'the i-th number of the input array (counting from 0)'
  - s: 'P_i'
    means: 'prefix sum: the total of the first i numbers, with P_0 = 0'
  - s: '[l, r]'
    means: 'the stretch from position l to position r, both included'
  - s: 'd_i'
    means: 'difference array cell: how much the value changes between cell i-1 and cell i'
  - s: '\oplus'
    means: 'xor: combine bits, 1 where the two bits differ; x xor x is 0'
  - s: 'k'
    means: 'the target (a sum, xor or remainder) we are counting'
---

:::hook
q: Overs 1 to 10 gave 71 runs in total, and overs 1 to 20 gave 142. How many runs came in overs 11 to 20, and what did you need to know?
options: ["71, by subtracting the two totals", "142 - 10 = 132", "You must see every over"]
answer: 0
right: Right. 142 - 71 = 71. Two stored totals describe everything between them. That is the whole idea of a prefix sum.
wrong: You do not need each over. The total after over 20 includes the total after over 10, so the difference is exactly what happened in between.
:::

## The running total {lvl=1 id=s-running label="Foundations"}

Take the five numbers `[3, 1, 4, 1, 5]`. Write the running total after each: 3, then 4, then 8, then 9, then 14. Start the list with 0 for "nothing yet": `[0, 3, 4, 8, 9, 14]`. Call this list $P$, the **prefix sums**: $P_i$ is the total of the first $i$ numbers.

To add the 2nd to the 4th number (1, 4, 1, total 6): take the total after four numbers (9) and remove the total after one number (3): $9 - 3 = 6$. In symbols, the sum of the stretch from $l$ to $r$ is

$$P_{r+1} - P_l$$

Read it as: "the total up to and including $r$, minus the total before $l$".

```python
from itertools import accumulate
def build(a):
    return [0] + list(accumulate(a))     # P[i] = sum of first i items
def range_sum(P, l, r):                  # 0-based, r included
    return P[r + 1] - P[l]
P = build([3, 1, 4, 1, 5])
print(range_sum(P, 1, 3))                # 6
```

Building costs one pass, $O(n)$. Every query afterwards costs one subtraction, $O(1)$. With 200,000 queries that is 200,000 steps instead of 40 billion.

:::qc lvl=1
q: For a = [2, 5, 1, 3], the prefix array is [0, 2, 7, 8, 11]. What is the sum of the last two numbers?
options: ["4", "6", "11"]
answer: 0
right: Right. The last two are 1 and 3: P[4] - P[2] = 11 - 7 = 4.
wrong: Use P[4] - P[2], the total at the end minus the total before the stretch.
:::

## Two dimensions and range updates {lvl=2 id=s-grid label="SDE-1"}

**A grid.** In a table of numbers, let $P[i][j]$ be the sum of the rectangle from the top-left corner to just before row $i$ and column $j$. A rectangle in the middle is the big corner rectangle, minus the strip above it, minus the strip to its left, plus the corner that was subtracted twice.

```python
def build2d(g):
    R, C = len(g), len(g[0])
    P = [[0] * (C + 1) for _ in range(R + 1)]
    for i in range(R):
        for j in range(C):
            P[i+1][j+1] = g[i][j] + P[i][j+1] + P[i+1][j] - P[i][j]
    return P
def rect(P, r1, c1, r2, c2):             # inclusive corners, 0-based
    return P[r2+1][c2+1] - P[r1][c2+1] - P[r2+1][c1] + P[r1][c1]
```

Read the last line aloud: "big corner, minus the part above, minus the part on the left, plus the overlap that we removed twice".

:::figure caption="Inclusion and exclusion: the shaded rectangle is big corner - above - left + overlap."
<svg viewBox="0 0 300 150" role="img" aria-label="A grid with a shaded rectangle, a strip above and a strip to the left">
<rect x="20" y="10" width="200" height="120" style="fill:none;stroke:var(--ink)"/>
<rect x="20" y="10" width="200" height="40" style="fill:color-mix(in srgb,var(--phy) 18%,var(--surface));stroke:var(--phy)"/>
<rect x="20" y="10" width="70" height="120" style="fill:color-mix(in srgb,var(--mat) 18%,var(--surface));stroke:var(--mat)"/>
<rect x="90" y="50" width="130" height="80" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--ink);stroke-width:2"/>
<text x="140" y="94" style="font-size:11px;fill:var(--ink)">wanted</text>
<text x="100" y="34" style="font-size:10px;fill:var(--phy)">above</text>
<text x="28" y="94" style="font-size:10px;fill:var(--mat)">left</text>
<text x="26" y="34" style="font-size:9px;fill:var(--muted)">twice</text>
<text x="226" y="132" style="font-size:10px;fill:var(--muted)">big corner</text>
</svg>
:::

**Many range updates.** Suppose we must add $v$ to every cell from $l$ to $r$, and there are 100,000 such updates. Doing each update cell by cell is too slow. Instead keep the **difference array** $d$: it records *where the level changes*. Adding $v$ to $[l, r]$ means "from $l$ the level rises by $v$" and "after $r$ it falls back by $v$": two writes. At the end, a prefix sum of $d$ rebuilds the actual values.

```python
def apply_updates(n, updates):           # updates: (l, r, v), r included
    d = [0] * (n + 1)
    for l, r, v in updates:
        d[l] += v
        d[r + 1] -= v
    return list(accumulate(d[:n]))
print(apply_updates(8, [(2, 5, 5), (4, 7, 3)]))   # [0, 0, 5, 5, 8, 8, 3, 3]
```

The difference array and the prefix array are inverses: taking a prefix sum "integrates", taking differences "differentiates".

:::qc lvl=2
q: n = 6. We add 4 to [1, 3] and add 2 to [3, 5]. What is the final value at position 3?
options: ["6", "4", "2"]
answer: 0
right: Right. Position 3 lies inside both stretches, so it receives 4 + 2 = 6.
wrong: Check which updates cover position 3. Both of them do.
:::

## Prefix sums with a hash map {lvl=3 id=s-hash label="SDE-2"}

A classic question: **how many contiguous stretches add up to exactly $k$?** Numbers may be negative, so two pointers do not work.

Fix the right end $r$. The stretch $[l, r]$ has sum $k$ exactly when $P_{r+1} - P_l = k$, that is, when some *earlier* prefix sum equals $P_{r+1} - k$. So as we walk, we need to know **how many earlier prefix sums have a given value**: a job for a hash map.

```python
from collections import defaultdict
def count_sum_k(a, k):
    seen = defaultdict(int)
    seen[0] = 1                          # the empty prefix
    s = ans = 0
    for x in a:
        s += x
        ans += seen[s - k]               # earlier totals that complete a stretch
        seen[s] += 1                     # record AFTER counting
    return ans
print(count_sum_k([3, 4, 7, 2, -3, 1, 4, 2], 7))   # 4
```

Two details cause most bugs: start with `seen[0] = 1` (a stretch that starts at the very beginning), and record the current total *after* using it (otherwise a stretch of length zero is counted when $k = 0$). Total cost: $O(n)$.

The same skeleton gives other families by changing what the "prefix value" is:

- **Prefix XOR**: use `s ^= x` and look up `seen[s ^ k]`. It works because $x \oplus x = 0$, so the xor of a stretch is $P_{r+1} \oplus P_l$.
- **Divisible by $k$**: keep `s = (s + x) % k`. Two prefixes with the same remainder enclose a stretch whose sum is a multiple of $k$. Count pairs among equal remainders.
- **Equal numbers of 0s and 1s**: replace each 0 by $-1$ and ask for stretches with sum 0.
- **Longest** such stretch: store only the *first* index at which each prefix value appeared, and take the largest gap.

:::qc lvl=3
q: Why must the hash map start with {0: 1}?
options: ["It counts stretches that begin at the very start of the array", "It speeds up the hash map", "It avoids negative numbers"]
answer: 0
right: Right. A stretch starting at position 0 has sum P[r+1] - 0, so we need the empty prefix (total 0) to be recorded once.
wrong: Think about stretches that start at the first number: what earlier prefix do they subtract?
:::

## The catalogue: problem types {lvl=3 id=s-catalogue label="SDE-2"}

Each is described in our own words and mapped to a variant.

1. **Many range-sum questions on a fixed list.** Plain 1D prefix sums.
2. **A balance point: an index where the sum on its left equals the sum on its right.** $P_i$ against total minus $P_{i+1}$.
3. **For each position, the product of all the others** (without division). Prefix products from the left times suffix products from the right.
4. **How many stretches have sum exactly $k$** (negatives allowed). Prefix sum plus hash map of counts.
5. **Longest stretch with sum exactly $k$.** Same, but keep the first index of each prefix value.
6. **How many stretches have a sum divisible by $k$.** Prefix remainders; count equal pairs.
7. **Longest stretch with as many 0s as 1s.** Map 0 to -1; longest sum-0 stretch.
8. **How many stretches have xor equal to $k$.** Prefix xor plus hash map.
9. **Seat bookings: many "add $v$ to seats $l$ to $r$" requests, then report final seats.** Difference array.
10. **The busiest moment: many meetings with start and end times, what is the most that overlap?** Difference array over time (or sort start/end events), then take the maximum of the running total.
11. **Sum inside many sub-rectangles of a grid.** 2D prefix sums.
12. **Count sub-rectangles whose sum is $k$.** Fix a top row and a bottom row, squash the columns into a 1D array, then run problem 4: $O(R^2 C)$.
13. **Maximum sum stretch.** Best end value $P_{r+1}$ minus the smallest earlier $P_l$ (an alternative to Kadane's algorithm).
14. **How many times does a letter appear between positions $l$ and $r$** of a string, for many questions. One prefix array per letter, or one count per letter per position.

## Variants and bugs {lvl=3 id=s-bugs label="SDE-2"}

| Variant | Signal | Change to the template |
|---|---|---|
| 1D range sum | many queries, no changes | $P$ with leading 0, answer $P_{r+1} - P_l$ |
| Range updates | "add to every cell from l to r" | difference array, rebuild once |
| 2D range sum | grid, rectangle queries | inclusion-exclusion with $P[i][j]$ |
| Count stretches with property | "how many subarrays..." | add a hash map of earlier prefix values |
| Longest stretch | "longest subarray with..." | store the first index of each prefix value |
| Xor or remainder | xor, divisible, parity | change what the running value is, keep the skeleton |
| Online updates | updates and queries interleaved | prefix sums break; use a Fenwick tree |

**Common bugs**
- A prefix array of length $n$ instead of $n+1$, or no leading zero: queries starting at 0 fail.
- Off by one: using $P_r - P_l$ when $r$ is included.
- Forgetting `seen[0] = 1`, or writing `seen[s] += 1` before counting.
- Difference array of size $n$: the write at $r+1$ goes out of range when $r = n-1$.
- Forgetting the plus-corner in the 2D formula.
- In languages with fixed-size integers, sums of $10^5$ values up to $10^9$ overflow 32 bits; Python does not, but note it for C++ and Java.
- Trying prefix tricks on max or min, which cannot be undone.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A running total P (with a leading 0) answers any range sum as P[r+1] - P[l], after O(n) building. {lvl=1}
2. 2D: add the big corner, remove the strip above and the strip left, add back the overlap. {lvl=2}
3. A difference array turns "add v to a range" into two writes; a prefix sum at the end restores the array. {lvl=2}
4. Count stretches with sum k by keeping a hash map of earlier prefix sums, starting with {0: 1}. {lvl=3}
5. XOR, remainders and 0/1 balance reuse the same skeleton with a different running value. {lvl=3}
6. The trick needs an undo operation and an array that does not change between queries. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Build P with length n+1 and a leading zero; decide once whether r is included. {lvl=1}
- Difference arrays need n+1 cells so that d[r+1] is valid. {lvl=2}
- Start the hash map with {0: 1}; count before you record. {lvl=3}
- Prefix tricks do not work for max, min or gcd of a stretch (no undo). {lvl=3}
- If values change between queries, use a Fenwick or segment tree instead. {lvl=3}
:::
