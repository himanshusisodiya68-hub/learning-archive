---
title: Segment trees and Fenwick trees
summary: How a live scoreboard adds up any stretch of a huge list in a blink while the numbers keep changing underneath it.
ncert: []
up_to: SDE-3
builds_on: [Prefix sums and difference arrays, Arrays and dynamic arrays, Trees and binary search trees, Big-O and growth of cost]
notes_prompt: Explain to a friend why adding up a stretch of a list gets slow when the list keeps changing, and how a tree of partial sums fixes it.
margin:
  - kind: history
    title: History
    text: Peter Fenwick described his "binary indexed tree" in a 1994 paper about cumulative frequencies for data compression. Segment trees were popularised in geometry and later in contests. [Unverified]
  - kind: tip
    title: Pick by the question
    text: 'Ask two things: do values change, and is the question a sum or a min, max, gcd? A sum with updates is a Fenwick tree. Anything else with updates is a segment tree. No updates means prefix sums or a sparse table.'
  - kind: olympiad
    title: Think in blocks
    text: 'All these structures answer "sum of any stretch" by gluing a few precomputed blocks. Fenwick uses blocks sized by powers of two; a segment tree uses halves. The skill is choosing blocks so a stretch needs only about log n of them.'
books:
  - { title: "A. Laaksonen, Competitive Programmer's Handbook", ref: "Range queries chapters: static array queries, binary indexed trees, segment trees [Unverified]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Augmenting data structures; chapter number [Unverified]" }
cards:
  - { front: "When do prefix sums stop working?", back: "When values change: each update forces an O(n) rebuild of the running totals. Prefix sums suit static data only." }
  - { front: "Why can a sparse table answer min in O(1) but not sum?", back: "Min is unchanged by overlap: two blocks covering the stretch may overlap and the min is still right. A sum would count the overlap twice." }
  - { front: "What does a Fenwick tree cell store?", back: "The sum of a block ending at that index whose length is the lowest set bit of the index. Query and update each hop through about log n cells." }
  - { front: "What can a segment tree do that a Fenwick tree cannot?", back: "Any associative combine: min, max, gcd, or a custom summary such as best subarray. It also supports range updates via lazy propagation." }
  - { front: "What is the idea of lazy propagation?", back: "To add to a whole range, record the pending add on the covering nodes and push it to the children only when a later query or update has to look inside." }
  - { front: "What is an offline trick?", back: "Read all queries first, then answer them in a convenient order (for example sorted by right end) so that a simple structure suffices." }
core:
  idea: 'Precompute partial answers for blocks of the list, so any stretch is the glue of a few blocks. Prefix sums and the sparse table suit data that never changes; the Fenwick and segment trees keep log n blocks per position so that an update and a query each cost O(log n).'
  formulas:
    - tex: '\text{sum}(l, r) = P_r - P_l'
      label: 'Static sum from prefix totals P (half-open stretch from l up to r)'
    - tex: 'i \leftarrow i + (i \,\&\, -i), \qquad i \leftarrow i - (i \,\&\, -i)'
      label: 'Fenwick hops: climb to update, descend to query'
    - tex: '\text{cost per operation} = O(\log n)'
      label: 'About 17 steps when n is 100,000'
  conditions:
    - 'Prefix sums need the operation to be undoable (subtraction); min and max are not'
    - 'A sparse table needs an operation unchanged by overlap (min, max, gcd) and a list that never changes'
    - 'A segment tree needs an associative combine: grouping can change but order must not'
    - 'Everything here is O(n) to O(n log n) memory, so n up to about 10^6 in Python'
  sign: 'The commonest mistake is mixing half-open and closed ends, or giving a Fenwick tree the new value when it wants the change (new minus old).'
outcomes:
  - 'Decide between prefix sums, sparse table, Fenwick and segment tree from the problem statement'
  - 'Write a Fenwick tree and a bottom-up segment tree from memory'
  - 'Explain why a sparse table can answer min but not sum in O(1)'
  - 'Describe lazy propagation for range updates'
  - 'Use an offline order to answer distinct-count or inversion queries'
opener:
  story: |
    During a big online sale, a dashboard shows **total sales between 2 pm and 5 pm**. Every second thousands of new orders arrive, and the manager keeps dragging the time slider, asking for new stretches. The answers must appear instantly.

    The slow way is to add up every minute in the stretch, again, each time the slider moves. For a day of seconds that is 86,400 additions per question, and a thousand managers asking at once. Prefix totals would make each question instant, but they break the moment a new order changes a number: everything after it must be rewritten.

    So we need something between two extremes: not rebuilding everything on every change, not re-adding everything on every question. How about an answer that costs about 17 steps for both, even for 100,000 numbers?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A bar chart with a bracket over four bars asking for their sum, and one bar changing"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"><rect x="24" y="150" width="28" height="40"/><rect x="60" y="120" width="28" height="70"/><rect x="96" y="135" width="28" height="55"/><rect x="132" y="100" width="28" height="90"/><rect x="168" y="160" width="28" height="30"/><rect x="204" y="125" width="28" height="65"/><rect x="240" y="110" width="28" height="80" style="fill:var(--c)"/><rect x="276" y="145" width="28" height="45"/></g><path d="M96 90 V82 H196 V90" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="112" y="72" style="font-size:12px;fill:var(--ink)">sum of these?</text><text x="206" y="100" style="font-size:12px;fill:var(--ink)">changes!</text><path d="M254 104 L254 94" style="stroke:var(--c);stroke-width:2"/><line x1="16" y1="190" x2="310" y2="190" style="stroke:var(--rule)"/><text x="24" y="214" style="font-size:12px;fill:var(--muted)">naive: re-add the stretch at every question</text><text x="24" y="230" style="font-size:12px;fill:var(--c)">tree of blocks: about log n steps either way</text></svg>'
life:
  - 'Cricket and sales dashboards: running totals over any window of overs or minutes, while new data streams in.'
  - 'Stock apps: the highest price between two dates, with today''s price still moving.'
  - 'Leaderboards in games: how many players score below you, updated after every match.'
  - 'Databases keep partial aggregates in tree-shaped indexes so sums and counts over ranges do not scan every row. [Inference: described in general terms]'
  - 'Image processing: the sum of pixels in a rectangle (a summed-area table) is the two-dimensional cousin of prefix sums.'
models:
  - name: 'Precompute the pieces, glue on demand'
    text: 'Keep partial answers for blocks of different sizes; any question is a short glue of blocks. This is how a map app mixes city-level and street-level tiles, and how a budget keeps monthly and yearly totals.'
  - name: 'Balance the cost of reading and writing'
    text: 'Prefix sums make reading free and writing expensive; the raw list makes writing free and reading expensive. The tree splits the cost evenly. Whenever a system is read-heavy or write-heavy, ask which side should pay.'
  - name: 'Defer work until it is needed'
    text: 'Lazy propagation notes "add 5 to everything in this branch" and only does it when someone looks inside. Procrastination, done on purpose with a note-to-self, is an optimisation, as in lazy loading of images and just-in-time purchasing.'
links:
  - leaf: 'cs/cp-prefix-sums'
    name: 'Prefix sums and difference arrays'
    same: 'A static range sum is two prefix totals subtracted, the base of everything here.'
    differs: 'Prefix sums break on updates; the trees are what you reach for when values change.'
  - leaf: 'cs/trees'
    name: 'Trees and binary search trees'
    same: 'A segment tree is a balanced binary tree of height about log n, searched from the top.'
    differs: 'A search tree orders keys for lookup; a segment tree has fixed shape over positions and stores a summary at each node.'
  - leaf: 'cs/bits-and-binary'
    name: 'Bits and binary'
    same: 'The Fenwick tree is driven entirely by the lowest set bit of an index.'
    differs: 'Bits lesson is about representing numbers; here the bit pattern decides which blocks to touch.'
  - leaf: 'cs/cp-reading-constraints'
    name: 'Reading constraints'
    same: 'n and q both near 10^5 rules out O(n) per query; this lesson is the O(log n) answer.'
    differs: 'The constraints lesson names the budget; this one supplies the structure that fits it.'
next:
  q: 'Your clever solution passes the samples and then fails on the judge, or runs for three seconds when the limit is one. How do you find the failing case without seeing it, and how do you stop writing these bugs in the first place?'
  leaf: 'cs/cp-stress-testing'
  name: 'Stress testing and edge cases'
symbols:
  - s: 'n'
    means: 'number of items in the list (count)'
  - s: 'q'
    means: 'number of queries or operations (count)'
  - s: 'P_i'
    means: 'prefix total: the sum of the first i items'
  - s: 'i \,\&\, -i'
    means: 'the lowest set bit of i: the largest power of two that divides i'
  - s: 'O(\log n)'
    means: 'cost grows with the number of times n can be halved, about 17 for 100,000'
---

:::hook
q: Here is the puzzle. A list has 100,000 numbers. You get 100,000 operations, mixed: some change one number, some ask for the sum of a stretch. Adding up the stretch each time costs about how many steps in the worst case?
options: ["About a million", "About ten billion", "About a hundred thousand"]
answer: 1
right: Right. Each question may scan almost the whole list (100,000 steps), and there are 100,000 of them: ten billion steps, which takes minutes. A tree of blocks answers each in about 17 steps, so under two million steps in all.
wrong: One question can touch up to 100,000 numbers. Multiply by the number of questions.
:::

## Choosing the structure {lvl=1 id=s-choose label="Foundations"}

Before any code, ask the two questions that decide everything. **Do the numbers change between questions?** And **what is the question**: a sum, or a smallest, largest, gcd? The table is the whole lesson in one place:

| Structure | Build | Query | Update | Works for | Not for |
|---|---|---|---|---|---|
| Prefix sums | O(n) | O(1) | rebuild, O(n) | sums, counts, XOR on unchanging data | min and max, any changes |
| Sparse table | O(n log n) | O(1) | none | min, max, gcd on unchanging data | sums in O(1), any changes |
| Fenwick tree | O(n) | O(log n) | O(log n) | sums and counts with changes | min and max |
| Segment tree | O(n) | O(log n) | O(log n) | any associative combine, with changes; lazy for range updates | beginners in a hurry: more code |

Reading the table: "no changes" means the first two rows. Only sums with changes? Fenwick, the shortest code. Anything else with changes, or a range update: segment tree.

For the prefix-sum row: with $P_i$ the sum of the first $i$ items, the sum of a stretch from position $l$ up to (not including) $r$ is $P_r - P_l$. Read it as: the total up to the end of the stretch, minus the total before it.

```python
from itertools import accumulate
a = [3, 1, 4, 1, 5, 9, 2, 6]
P = [0] + list(accumulate(a))
print(P[6] - P[2])                # sum of a[2:6] = 4 + 1 + 5 + 9 = 19
```

:::qc lvl=1
q: A fixed list of a million numbers, and a million questions "what is the sum from position l to r". Which structure?
options: ["Prefix sums", "Segment tree", "Rescan each time"]
answer: 0
right: Right. Nothing changes, so prefix sums answer each question in one subtraction. A segment tree also works but is more code for no benefit.
wrong: The list never changes. Which structure gives each answer in one step?
:::

## Sparse table: min without changes {lvl=2 id=s-sparse label="SDE-1"}

Subtraction cannot undo a minimum, so prefix tricks fail. The **sparse table** instead stores the min of every block whose length is a power of two. Level $k$ holds the min of each block of $2^k$ items. Build each level from the previous one by combining two neighbours. A query covers its stretch with two blocks of the same size that **overlap**. For a min, overlap is harmless: counting some item twice cannot change the smallest.

```python
class Sparse:
    def __init__(self, a):
        self.t = [a[:]]
        j = 1
        while 2 * j <= len(a):
            p = self.t[-1]
            self.t.append([min(p[i], p[i + j]) for i in range(len(a) - 2*j + 1)])
            j *= 2
    def query(self, l, r):                 # min of a[l:r]
        k = (r - l).bit_length() - 1       # biggest power of two that fits
        return min(self.t[k][l], self.t[k][r - (1 << k)])
```

Memory is $n \lfloor\log_2 n\rfloor + n$ cells, about 1.7 million for $n = 100{,}000$. The same trick works for max and gcd. It does not work for sums, because overlap would be counted twice.

## Fenwick tree: sums that change {lvl=2 id=s-fenwick label="SDE-1"}

Prefix sums fail when one number changes, because all the totals after it are wrong. The **Fenwick tree** (binary indexed tree) keeps partial totals so that a change touches only about $\log n$ of them. Number the items from 1. Cell $i$ stores the sum of the block of items that **ends at $i$** and whose length is the lowest set bit of $i$ (the largest power of two dividing $i$): cell 6 covers 2 items (5 and 6), cell 8 covers all eight.

:::figure caption="Fenwick cells for n = 8: each bar is the block of items its cell sums"
<svg viewBox="0 0 320 172" role="img" aria-label="Eight rows showing which items each Fenwick cell covers">
<g style="font-size:11px;fill:var(--muted)">
<text x="12" y="25">t[1]</text><text x="12" y="42">t[2]</text><text x="12" y="59">t[3]</text><text x="12" y="76">t[4]</text><text x="12" y="93">t[5]</text><text x="12" y="110">t[6]</text><text x="12" y="127">t[7]</text><text x="12" y="144">t[8]</text>
</g>
<g style="fill:color-mix(in srgb,var(--mat) 18%,var(--surface));stroke:var(--mat)">
<rect x="44" y="14" width="29" height="13"/><rect x="44" y="31" width="61" height="13"/><rect x="108" y="48" width="29" height="13"/><rect x="44" y="65" width="125" height="13"/><rect x="172" y="82" width="29" height="13"/><rect x="172" y="99" width="61" height="13"/><rect x="236" y="116" width="29" height="13"/><rect x="44" y="133" width="253" height="13"/>
</g>
<g style="font-size:11px;fill:var(--ink)">
<text x="55" y="162">1</text><text x="87" y="162">2</text><text x="119" y="162">3</text><text x="151" y="162">4</text><text x="183" y="162">5</text><text x="215" y="162">6</text><text x="247" y="162">7</text><text x="279" y="162">8</text>
</g></svg>
:::

To **query** the sum of the first $i$ items, add cell $i$, then jump to $i - (i \,\&\, -i)$ (strip the lowest set bit), and repeat until you reach 0. To **update** item $i$, add the change to cell $i$, then jump to $i + (i \,\&\, -i)$ (the next cell whose block contains $i$), until you pass $n$. Read both as: each hop clears or adds the lowest set bit, so there are at most $\log_2 n$ hops.

```python
class Fenwick:
    def __init__(self, n):
        self.n = n; self.t = [0] * (n + 1)
    def add(self, i, v):                   # item i (0-based) changes by v
        i += 1
        while i <= self.n:
            self.t[i] += v
            i += i & -i
    def prefix(self, i):                   # sum of the first i items
        s = 0
        while i > 0:
            s += self.t[i]
            i -= i & -i
        return s
```

A stretch sum is `prefix(r) - prefix(l)`. For $n = 100{,}000$ each call is at most 17 hops. Note that `add` takes the **change**: to set item $i$ to a new value, add `new - old`.

:::qc lvl=2
q: In a Fenwick tree with n = 16 (cells 1 to 16), which cells are updated when item 5 changes?
options: ["5, 6, 8, 16", "5, 6, 7, 8", "1, 2, 4, 8"]
answer: 0
right: Right. From 5 add the lowest set bit (1) to get 6, then 2 to get 8, then 8 to get 16. Four cells, and each hop at least doubles the lowest set bit, so there are never more than about log n of them.
wrong: Start at 5 and repeatedly add the lowest set bit: 5 plus 1, then that result plus its lowest set bit, until you pass 16.
:::

## Segment tree: any combine {lvl=3 id=s-segment label="SDE-2"}

A Fenwick tree only knows sums. To support min, max, gcd, or anything you can invent, keep a **segment tree**: a binary tree where each leaf is one item and each inner node stores the answer for the whole range its two children cover. The root covers everything. A query takes the few nodes that exactly tile the stretch and combines them; an update changes a leaf and recomputes the answers on its path to the root, $O(\log n)$.

The compact version stores the tree in an array of size $2n$ with leaves at positions $n$ to $2n-1$, and parents at half the index. It works for any $n$:

```python
class SegTree:
    def __init__(self, a, op=max, e=-10**18):
        self.n, self.op, self.e = len(a), op, e
        self.t = [e] * self.n + a[:]
        for i in range(self.n - 1, 0, -1):
            self.t[i] = op(self.t[2*i], self.t[2*i + 1])
    def update(self, i, v):                  # set item i to v
        i += self.n; self.t[i] = v
        while i > 1:
            i >>= 1
            self.t[i] = self.op(self.t[2*i], self.t[2*i + 1])
```

```python
    def query(self, l, r):                   # combine items l..r-1
        left = right = self.e
        l += self.n; r += self.n
        while l < r:
            if l & 1: left = self.op(left, self.t[l]); l += 1
            if r & 1: r -= 1; right = self.op(self.t[r], right)
            l >>= 1; r >>= 1
        return self.op(left, right)
```

`e` is the **identity** of the operation: the value that changes nothing (minus infinity for max, plus infinity for min, 0 for sum, 0 for gcd). Keep the left result and right result separate so the order of items is preserved, which matters when the combine is not commutative.

A node can store a whole summary. For "the best sum of a contiguous piece" store four numbers per node, (total, best prefix, best suffix, best), and combine two nodes as: total = $s_1 + s_2$; best prefix = max($p_1$, $s_1 + p_2$); best suffix = max($q_2$, $s_2 + q_1$); best = max($b_1$, $b_2$, $q_1 + p_2$). Order matters: the left child's suffix meets the right child's prefix.

:::qc lvl=3
q: You build a segment tree for range maximum. What should the identity element be, for a stretch that is empty on one side?
options: ["0", "Minus infinity (a value below every item)", "The first item"]
answer: 1
right: Right. The identity must leave any max unchanged: max(x, minus infinity) = x. With 0 it would fail on lists of negative numbers.
wrong: The identity combined with any value must return that value. What is less than every possible item?
:::

## Variants: one table {lvl=3 id=s-variants label="SDE-2"}

| Variant | Signal in the statement | Change to the template |
|---|---|---|
| Static range sum | "sum of l to r", no changes | Prefix sums |
| Static range min, max or gcd | many queries, no changes | Sparse table |
| Point update, range sum | "change one value, then ask a sum" | Fenwick tree |
| Point update, range min, max, gcd | same, but not a sum | Segment tree with that op and identity |
| Range add, point query | "add x to a range, ask one value" | Fenwick over the difference array |
| Range add, range sum | "add to a range, ask a range total" | Lazy segment tree, or two Fenwick trees |
| Count smaller before each | "pairs out of order", "how many earlier are smaller" | Fenwick over value ranks, scan left to right |
| Distinct values in a range | "how many different values in l to r", offline | Sort queries by right end, Fenwick over last occurrences |
| k-th smallest of a changing set | "k-th smallest", inserts and deletes | Fenwick or segment tree over values, descend by counts |
| Non-commutative merge | "best stretch", "longest run" with updates | Segment tree storing a tuple, preserving order |

## Catalogue: twelve problem types {lvl=3 id=s-catalogue label="SDE-2"}

In our own words, each mapped to a variant.

1. Total sales between two dates on a closed record: prefix sums.
2. Coldest day in any week-range of a fixed log: sparse table.
3. Live leaderboard: one score changes, total of ranks a to b is asked: Fenwick.
4. Hottest reading in a stretch while readings are corrected: segment tree with max.
5. Add a bonus to students l to r, then ask one student's mark: Fenwick on differences.
6. Add a bonus to students l to r, then ask the class total of a stretch: lazy tree or two Fenwicks.
7. How many pairs of a list are in the wrong order (inversions): Fenwick over ranks.
8. For each person in a queue, how many people ahead are shorter: Fenwick over height ranks.
9. How many different colours appear in a stretch, many queries given up front: offline sort and Fenwick.
10. The k-th smallest number among those inserted so far: Fenwick descent.
11. Best contiguous profit in a range, with prices edited: segment tree with a four-number node.
12. Many queries on a fixed list about the most frequent value in a range: Mo's algorithm (see below).

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- Mixing half-open `[l, r)` and closed `[l, r]` ends: pick one convention and write it as a comment.
- A Fenwick tree started at index 0: `i & -i` is 0 and the loop never advances. Shift to 1-based.
- Giving `add` the new value instead of the change.
- Using a sparse table for sums, so overlapping blocks double count.
- Wrong identity in a segment tree (0 for max of negatives, 0 for min).
- Non-commutative combine with the left and right results swapped.
- Recursive lazy trees sized `n` instead of `4n`: some nodes then have no slot and the program crashes with an index error.
- Forgetting to update the parent after changing a child in a lazy tree.

## Lazy propagation: range updates {lvl=4 id=s-lazy label="SDE-3"}

To add $v$ to every item in a range, doing it item by item costs $O(n)$. **Lazy propagation** writes the add on the few nodes that exactly tile the range, as a note "pending add $v$ to everything below you", and fixes the node's own sum at once (sum += v times the length). The note is **pushed** to the two children only when a later operation needs to go below that node.

```python
class Lazy:
    def __init__(self, n):
        self.n = n; self.s = [0] * (4 * n); self.lz = [0] * (4 * n)
    def push(self, o, lo, hi):
        if self.lz[o]:
            mid = (lo + hi) // 2
            for c, a, b in ((2*o, lo, mid), (2*o+1, mid+1, hi)):
                self.s[c] += self.lz[o] * (b - a + 1)
                self.lz[c] += self.lz[o]
            self.lz[o] = 0
```

```python
    def add(self, l, r, v, o=1, lo=0, hi=None):   # items l..r inclusive
        hi = self.n - 1 if hi is None else hi
        if r < lo or hi < l: return                # no overlap
        if l <= lo and hi <= r:                    # fully covered: leave a note
            self.s[o] += v * (hi - lo + 1); self.lz[o] += v; return
        self.push(o, lo, hi); mid = (lo + hi) // 2
        self.add(l, r, v, 2*o, lo, mid); self.add(l, r, v, 2*o+1, mid+1, hi)
        self.s[o] = self.s[2*o] + self.s[2*o+1]
```

The sum query has the same shape: no overlap returns 0, full cover returns `self.s[o]`, otherwise push and add the two halves. Both operations cost $O(\log n)$. Range assignment and range min work with a different note (assign, or add that min shifts by).

## Offline tricks {lvl=4 id=s-offline label="SDE-3"}

If all questions are known in advance, answer them in a better order than they were asked.

- **Distinct values in a stretch.** Sort the queries by right end. Sweep a pointer right; at item $j$ put a 1 at position $j$ in a Fenwick tree and remove the 1 from the previous occurrence of the same value. A query $(l, r)$ is then the sum from $l$ to $r$: each value counted once, at its last occurrence so far.
- **Counting inversions.** Replace values by their ranks (coordinate compression). Scan left to right; before inserting item $x$, ask the Fenwick tree how many inserted items are larger.
- **Mo's algorithm.** Sort queries by (block of $l$, $r$) with block size about $\sqrt n$, then slide one window by single steps from query to query, keeping a running statistic. Total pointer moves are about $n\sqrt q$, roughly 32 million for $n = q = 10^5$. It handles statistics that no tree merges easily, such as the mode.
- **Coordinate compression and dynamic trees.** For values up to $10^9$, rank the values that actually occur, or create tree nodes only when touched.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Ask whether values change and what the question is; the table picks the structure. {lvl=1}
2. Static sums: prefix totals; a stretch is one subtraction. {lvl=1}
3. Static min, max, gcd: a sparse table, with overlapping blocks. {lvl=2}
4. Changing sums: a Fenwick tree with hops by the lowest set bit, O(log n). {lvl=2}
5. Any combine with changes: a segment tree, keeping the identity and the order. {lvl=3}
6. Range updates: lazy propagation, notes pushed down only when needed. {lvl=4}
7. Known queries: answer them offline, sorted so a simple structure suffices. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Use iterative Fenwick and bottom-up segment trees in Python: recursion and class overhead cost real time at 10^5 operations. {lvl=2}
- A Fenwick tree is 1-based internally; convert at the boundary and nowhere else. {lvl=2}
- Test every structure against a brute-force list on small random inputs before trusting it. {lvl=2}
- Choose half-open ranges `[l, r)` everywhere; it makes lengths `r - l` and empty ranges natural. {lvl=2}
- Reach for the simplest structure that fits the table: more power means more places to be wrong. {lvl=3}
:::
