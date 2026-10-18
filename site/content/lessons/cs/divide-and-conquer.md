---
title: Divide and conquer
summary: How a phone sorts a million photos in a blink by cutting the pile in half again and again, and why that trick keeps turning up.
ncert: []
up_to: SDE-3
builds_on: [Recursion, Sorting, Big-O and growth of cost]
notes_prompt: Explain to a friend why cutting a huge pile in half over and over makes sorting it cheap, without using the word "algorithm".
margin:
  - kind: history
    title: History
    text: 'John von Neumann is usually credited with merge sort in 1945, and Anatoly Karatsuba found a faster way to multiply big numbers in 1960. [Unverified: dates from memory]'
  - kind: tip
    title: Interview favourite
    text: 'When a problem says "sort", "count pairs out of order" or "find the best split point", ask whether solving two halves and combining them is easy. It often turns O(n²) into O(n log n).'
  - kind: olympiad
    title: Design link
    text: Sorting a dataset too big for one machine is divide and conquer at cluster scale. Each machine sorts its own slice and a final merge stitches the sorted slices together.
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 2 merge sort and Ch. 4 divide-and-conquer, including the master theorem [Unverified]" }
  - { title: "S. Dasgupta, C. Papadimitriou, U. Vazirani, Algorithms", ref: "Ch. 2 Divide-and-conquer algorithms [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Divide and conquer section [Unverified]" }
cards:
  - { front: "What are the three steps of divide and conquer?", back: "Divide the problem into smaller copies of itself, conquer each (recursively, with a tiny base case), then combine the answers." }
  - { front: "Why is merging two sorted lists cheap?", back: "Only the front item of each list can be the smallest left, so one pass with two fingers does it: about n steps for n items." }
  - { front: "Why does merge sort cost n log₂ n?", back: "Halving a pile of n gives about log₂ n levels, and each level does about n work in total, so n times log₂ n." }
  - { front: "How does fast power beat repeated multiplication?", back: "x^n = (x^(n/2))², so one squaring halves the exponent: about log₂ n multiplications instead of n - 1." }
  - { front: "Three cases of the master theorem, in words?", back: "Compare the work at the bottom (many tiny jobs) with the work at the top (the combine step). Bottom wins: bottom cost. Top wins: top cost. Tie: top cost times log n." }
  - { front: "When does divide and conquer NOT help?", back: "When the halves overlap and the same sub-question is asked many times (like Fibonacci). Remember the answers instead: dynamic programming." }
core:
  idea: 'Divide and conquer splits a problem into smaller copies of itself, solves each copy the same way, and combines the answers. It pays off when splitting and combining are cheap compared with the size of the pieces: sorting n items drops from about n² steps to about n log₂ n.'
  formulas:
    - tex: 'T(n) = a\,T(n/b) + f(n)'
      label: 'Cost of a problem of size n: a sub-problems, each 1/b the size, plus f(n) to split and combine'
    - tex: 'T(n) = 2\,T(n/2) + n \;\Rightarrow\; T(n) \approx n\log_2 n'
      label: 'Merge sort: two halves plus one merge pass'
  conditions:
    - 'The sub-problems are smaller copies of the same problem and do not overlap'
    - 'Splitting and combining cost little compared with solving the pieces'
    - 'There is a base case small enough to answer directly'
  sign: 'Cutting the problem is easy; the skill is the combine step. If you cannot combine two half-answers cheaply, halving gains you nothing.'
outcomes:
  - 'Describe the split, solve and combine steps and spot them in a new problem'
  - 'Explain why merging two sorted lists is cheap and write merge sort'
  - 'Use repeated halving to compute powers in about log₂ n steps'
  - 'Read a recurrence and say which of its three cases it is, in words'
  - 'Recognise when divide and conquer fails because sub-problems overlap'
opener:
  story: |
    You tap **Sort by date** on a gallery with a million photos, and the phone shows them in order before you have finished blinking.

    Think about doing it by hand. You pick the oldest photo from a million, then the oldest of the rest, and so on. Each pick means looking at nearly everything, so the work is about a million times a million: a trillion looks. Even at a billion looks a second, that is minutes of waiting, with a hot phone.

    Now try this instead: cut the pile in half, hand each half to a friend, and tell them to do the same. Nobody ever sorts anything big. What would the very last step, the one that turns two tidy half-piles into one tidy pile, even look like?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A pile is split into halves again and again, then merged back in order"><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="100" y="14" width="120" height="26" rx="4"/><rect x="40" y="62" width="100" height="26" rx="4"/><rect x="180" y="62" width="100" height="26" rx="4"/><rect x="16" y="110" width="52" height="26" rx="4"/><rect x="82" y="110" width="52" height="26" rx="4"/><rect x="186" y="110" width="52" height="26" rx="4"/><rect x="252" y="110" width="52" height="26" rx="4"/></g><g style="fill:none;stroke:var(--muted);stroke-width:1.3"><path d="M150 40 L100 62 M170 40 L230 62 M90 88 L42 110 M90 88 L108 110 M230 88 L212 110 M230 88 L278 110"/></g><g style="font-size:10px;fill:var(--ink);text-anchor:middle"><text x="160" y="31">8 3 5 1 7 2 6 4</text><text x="90" y="79">8 3 5 1</text><text x="230" y="79">7 2 6 4</text><text x="42" y="127">8 3</text><text x="108" y="127">5 1</text><text x="212" y="127">7 2</text><text x="278" y="127">6 4</text></g><g style="font-size:10px;fill:var(--c);text-anchor:middle"><text x="42" y="156">3 8</text><text x="108" y="156">1 5</text><text x="212" y="156">2 7</text><text x="278" y="156">4 6</text><text x="90" y="186">1 3 5 8</text><text x="230" y="186">2 4 6 7</text><text x="160" y="216" style="font-weight:600">1 2 3 4 5 6 7 8</text></g><text x="160" y="236" style="font-size:9px;fill:var(--muted);text-anchor:middle">split down, merge up</text></svg>'
life:
  - 'Your phone sorts photos, contacts and files by name or date with a method of this kind. Most language libraries use merge-sort-based sorting by default (Python''s sort is a descendant called Timsort).'
  - 'Looking up a word in a paper dictionary: open in the middle, keep the half that must hold it, repeat. That is divide and conquer with only one half to conquer.'
  - 'A cricket league sorts 64 teams into a champion by knockout rounds: halve the field each round, so 6 rounds are enough for 64 teams.'
  - 'Splitting a big job among helpers (counting votes by booth, then adding the booth totals) is divide, conquer, combine.'
  - 'Computing 2 to the power 1000 inside encryption on your phone uses repeated halving of the exponent, so it takes about 10 squarings, not 999 multiplications.'
models:
  - name: 'Make it smaller, trust the rest'
    text: 'Instead of solving the whole mountain, solve a slightly smaller mountain and say how the answer grows. This works for planning a trip, cleaning a house, or running an organisation: delegate a half, then merge the results.'
  - name: 'The combine step is the real work'
    text: 'Splitting is usually free; joining the pieces is where the cost hides. In a company, dividing a project is easy and integration is hard. Judge a split by the price of putting it back together.'
  - name: 'Count the levels'
    text: 'Halving gets from a billion down to one in about 30 steps. Anything that shrinks by a fixed fraction each round (a rumour spreading, a tournament, a loan being repaid) finishes in a number of rounds that grows very slowly.'
links:
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'Both solve a problem by calling themselves on a smaller version, with a base case that stops the calls.'
    differs: 'Recursion may shrink the problem by just one step (factorial); divide and conquer cuts it by a fraction, which is why the depth is only about log n.'
  - leaf: 'cs/searching-and-binary-search'
    name: 'Binary search'
    same: 'Binary search is the simplest divide and conquer: split in half and keep only one half.'
    differs: 'Binary search throws one half away, so it costs log n; merge sort must solve both halves and merge, so it costs n log n.'
  - leaf: 'mat/induction'
    name: 'Induction'
    same: 'To trust that a recursive method is right, assume it works on smaller pieces and show it works for the bigger one, which is exactly an induction proof.'
    differs: 'Induction proves a statement for every n; the algorithm also has to do the work and be fast.'
next:
  q: 'Merge sort always looks at everything and splits blindly. For some problems, such as picking the most meetings you can attend in one room, can you just keep taking the best-looking choice right now and never look back?'
  leaf: 'cs/greedy'
  name: 'Greedy algorithms'
symbols:
  - s: 'n'
    means: 'size of the problem, for example the number of items to sort (count)'
  - s: 'T(n)'
    means: 'the time an algorithm takes on a problem of size n, counted in basic steps'
  - s: 'a'
    means: 'how many smaller copies of the problem we solve (count)'
  - s: 'b'
    means: 'the factor by which each copy is smaller: size n/b (no unit)'
  - s: 'f(n)'
    means: 'the work to split the problem and to combine the answers, for example one merge pass (steps)'
  - s: '\log_2 n'
    means: 'how many times n can be halved before reaching 1; for a million it is about 20'
  - s: 'O(n\log n)'
    means: 'cost that grows a little faster than n, roughly n times the number of halvings'
---

:::hook
q: Here's the puzzle. A million photos are cut in half, then each half is cut in half, and so on until every pile holds one photo. About how many rounds of cutting is that?
options: ["About 20", "About 1,000", "About 500,000"]
answer: 0
right: Right. Each round halves the pile, and $2^{20}$ is about a million, so 20 rounds reach single photos. Merging back up is 20 rounds too, and each round touches every photo once, so sorting costs about 20 million steps instead of a trillion.
wrong: Think of halving 1,000,000: 500,000, 250,000, 125,000... The number drops very fast. How many halvings does it take to reach 1?
:::

## The problem {lvl=1 id=s-problem label="Foundations"}

Sorting by picking the smallest item again and again is slow because every pick re-reads nearly the whole pile. For $n$ items that is about $n \times n$ looks. At a million photos that is a trillion, and at a billion it is a quintillion. We need a method whose cost grows far more gently.

Here is the fact that unlocks it. Suppose someone hands you **two piles that are already sorted**. Merging them into one sorted pile is easy. The smallest photo overall must be on top of one of the two piles, so compare the two top photos, take the older, and repeat. You never search; you only compare two fronts. Merging piles of total size $n$ takes about $n$ steps.

So if only the halves were sorted, we would be nearly done. And a half is just a smaller sorting problem, so we hand it the same trick.

## Split, solve, combine {lvl=1 id=s-three label="Foundations"}

That is the whole idea, in three verbs:

1. **Divide**: cut the problem into smaller copies of itself.
2. **Conquer**: solve each copy the same way. When a copy is so small that the answer is obvious (a pile of one photo is already sorted), stop. That is the **base case**.
3. **Combine**: turn the answers to the copies into the answer to the whole.

The name **divide and conquer** is this recipe. The part that changes from problem to problem is the combine step. For sorting it is the merge.

:::figure caption="Merge sort on 8 numbers. The pile is halved until single items remain, then merged back up. Every level of merging touches all 8 numbers once."
<svg viewBox="0 0 320 180" role="img" aria-label="Four levels of a halving tree, each level labelled with the total work of about n">
<g style="fill:color-mix(in srgb,var(--mat) 10%,var(--surface));stroke:var(--mat);stroke-width:1.5">
<rect x="20" y="10" width="280" height="24" rx="4"/>
<rect x="20" y="42" width="137" height="24" rx="4"/><rect x="163" y="42" width="137" height="24" rx="4"/>
<rect x="20" y="74" width="65" height="24" rx="4"/><rect x="91" y="74" width="65" height="24" rx="4"/><rect x="162" y="74" width="65" height="24" rx="4"/><rect x="233" y="74" width="65" height="24" rx="4"/>
<rect x="20" y="106" width="29" height="24" rx="4"/><rect x="55" y="106" width="29" height="24" rx="4"/><rect x="90" y="106" width="29" height="24" rx="4"/><rect x="125" y="106" width="29" height="24" rx="4"/><rect x="160" y="106" width="29" height="24" rx="4"/><rect x="195" y="106" width="29" height="24" rx="4"/><rect x="230" y="106" width="29" height="24" rx="4"/><rect x="265" y="106" width="29" height="24" rx="4"/>
</g>
<g style="font-size:10px;fill:var(--ink);text-anchor:middle">
<text x="160" y="26">1 pile of n</text><text x="88" y="58">2 piles of n/2</text><text x="231" y="58">2 piles of n/2</text>
<text x="52" y="90">n/4</text><text x="123" y="90">n/4</text><text x="194" y="90">n/4</text><text x="265" y="90">n/4</text>
<text x="160" y="122">8 piles of 1: already sorted</text>
</g>
<text x="160" y="152" style="font-size:11px;fill:var(--ink);text-anchor:middle">levels: log₂ n (3 here, 20 for a million)</text>
<text x="160" y="170" style="font-size:11px;fill:var(--mat);text-anchor:middle">work per level: about n  →  total about n × log₂ n</text>
</svg>
:::

:::qc lvl=1
q: You have two sorted piles of 500 photos each. About how many comparisons does merging them into one sorted pile need?
options: ["About 1,000", "About 500 × 500", "About 10"]
answer: 0
right: Right. Each comparison places one photo, so about one step per photo: roughly the total size.
wrong: Each comparison puts one photo in its final place. How many photos are there to place in total?
:::

## Merge sort in code {lvl=2 id=s-merge label="SDE-1"}

The merge uses two **fingers**, `i` and `j`, one on each sorted list. Each time, take the smaller of the two fingers' items and move that finger forward. When one list runs out, the rest of the other is already in order and is copied over.

```python
def merge(a, b):
    out, i, j = [], 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            out.append(a[i]); i += 1
        else:
            out.append(b[j]); j += 1
    return out + a[i:] + b[j:]
```

The sort itself is the three verbs. Split at the middle, sort each side by calling ourselves, merge:

```python
def merge_sort(xs):
    if len(xs) <= 1:          # base case: nothing to do
        return xs
    mid = len(xs) // 2
    left = merge_sort(xs[:mid])
    right = merge_sort(xs[mid:])
    return merge(left, right)
```

Why does it cost about $n \log_2 n$? There are about $\log_2 n$ levels of halving (the figure above). On each level, the merges together touch every item once, so about $n$ steps. Levels times work per level gives $n\log_2 n$. For a million items that is about $10^6 \times 20 = 2\times 10^7$ steps, against $10^{12}$ for picking the smallest each time.

Merge sort has a price: the merge builds a new list, so it needs about $n$ extra memory. It is also **stable**: equal items keep their original order, which matters when you sort by date and then by name. (`<=` in the merge is what keeps it stable.)

:::qc lvl=2
q: In merge_sort, what would go wrong if the base case were `len(xs) == 0` instead of `<= 1`?
options: ["A list of one item would be split into an empty list and itself forever", "Nothing, it only changes speed", "Sorted lists would come out reversed"]
answer: 0
right: Right. A list of length 1 splits into lengths 0 and 1, and the length-1 piece splits the same way again. The recursion never shrinks, so Python would run out of stack. Always check that every split makes progress.
wrong: Follow a list of length 1 through the split: mid is 0, so left is empty and right is the same single item. Does the problem get smaller?
:::

## Fast power: halving the exponent {lvl=2 id=s-power label="SDE-1"}

Divide and conquer is not only for lists. To compute $x^{1000}$, multiplying $x$ by itself 999 times is slow. But $x^{1000} = (x^{500})^2$, and $x^{500} = (x^{250})^2$, and so on. Each squaring halves the exponent. When the exponent is odd, one extra multiplication fixes it, like $x^7 = (x^3)^2 \cdot x$.

```python
def power(x, n):
    if n == 0:
        return 1
    half = power(x, n // 2)       # solve one half
    if n % 2 == 0:
        return half * half        # combine
    return half * half * x
```

Here there is only **one** smaller problem, not two, and the combine step is a single multiplication, so the cost is about $\log_2 n$ steps. For $n = 1000$ that is about 10 squarings plus a few extra multiplies, against 999. This is how encryption raises numbers to enormous powers (always with a remainder taken at each step to keep numbers small).

| Problem | Pieces | Combine step | Cost |
|---|---|---|---|
| Binary search | 1 half | none | $\log n$ |
| Fast power | 1 half | one multiplication | $\log n$ |
| Merge sort | 2 halves | merge, about $n$ | $n \log n$ |
| Count pairs out of order | 2 halves | count while merging | $n \log n$ |

## Recurrences and the master theorem {lvl=3 id=s-recurrence label="SDE-2"}

To predict the cost of any divide and conquer method, write it as a sentence about itself. Let $T(n)$ be the time on size $n$. A method that solves $a$ copies of size $n/b$ and spends $f(n)$ on splitting and combining satisfies

$$T(n) = a\,T(n/b) + f(n)$$

Read it as: the cost of the whole is the cost of $a$ smaller jobs plus the cost of gluing. Merge sort has $a=2$, $b=2$, $f(n)=n$. Binary search has $a=1$, $b=2$, $f(n)=1$.

You do not need to solve this exactly. Draw the tree of calls and ask where the work **piles up**: at the top (the combine at the root), at the bottom (the huge number of tiny jobs), or evenly on every level. This is the idea behind the **master theorem**, which gives three cases.

| Where the work piles up | Meaning | Total cost | Example |
|---|---|---|---|
| The bottom (leaves) | So many tiny jobs that their total beats the gluing | the leaf count, $n^{\log_b a}$ | Karatsuba, $T=3T(n/2)+n$: about $n^{1.58}$ |
| Every level equally | Each level costs the same, so cost is that times the number of levels | $f(n)\log n$ | Merge sort, $T=2T(n/2)+n$: $n\log n$ |
| The top (root) | The gluing step dominates; the lower levels are cheap by comparison | $f(n)$ | $T=2T(n/2)+n^2$: about $n^2$ |

Karatsuba's trick for multiplying two $n$-digit numbers is worth a story: the school method needs about $n^2$ digit multiplications. Splitting each number in half naively gives 4 half-size multiplications, which is $T = 4T(n/2) + n$, still $n^2$. Karatsuba found a way to get by with **3**, trading one multiplication for a few additions, which brings the cost to about $n^{1.58}$. Fewer sub-problems at the same split size is how many speed-ups of this family work. [Unverified: the exact exponent and history from memory; it is $\log_2 3 \approx 1.585$.]

:::qc lvl=3
q: A method splits a problem in 2 halves and spends n² steps combining. Which case is it, and what is the total cost?
options: ["Root heavy, about n²", "Every level equal, about n² log n", "Leaves heavy, about n"]
answer: 0
right: Right. The root alone costs n². The next level costs 2 × (n/2)² = n²/2, then n²/4, and so on. This shrinking series adds to about 2n², so the root dominates.
wrong: Compare levels. The top level costs n². The next has two jobs of size n/2, each costing (n/2)². Is that more or less than n²?
:::

## When divide and conquer fails {lvl=3 id=s-fails label="SDE-2"}

The method assumes the pieces are **independent**. Fibonacci numbers satisfy $F(n) = F(n-1) + F(n-2)$, which looks like a split, but the two pieces share almost all their work: $F(n-2)$ is computed once for $F(n)$ and again inside $F(n-1)$. The tree explodes: $F(30)$ makes over two million calls. When sub-problems repeat, solve each once and remember it. That is **dynamic programming**, two lessons ahead.

Three more practical traps:

- **Slicing copies**: `xs[:mid]` copies the list. It adds a hidden $O(n)$ per call, which is the same order as the merge, so merge sort stays $n\log n$, but pass indexes instead of slices to save memory.
- **Tiny pieces are wasteful**: calling a function for a single item has overhead. Real libraries switch to a simple method (insertion sort) below roughly 10 to 50 items. [Inference: typical practice; the cut-off varies by library.]
- **An unlucky split ruins the guarantee**: if the pieces are lopsided (one of size $n-1$) the tree has $n$ levels and the cost goes back to $n^2$. Quicksort risks this; merge sort never does because it always cuts exactly at the middle.

## Closest pair and divide and conquer at scale {lvl=4 id=s-scale label="SDE-3"}

**A teaser: the closest pair.** Given $n$ points on a map, find the two nearest to each other. Checking all pairs costs $n^2$. Divide and conquer: sort by x-coordinate, split into a left half and a right half, find the closest pair inside each, and let $d$ be the smaller distance found. The only pair we could still be missing has one point on each side, and both points must lie within $d$ of the dividing line, a thin **strip**. The surprising fact is that, in the strip sorted by y, each point only needs to be compared with the next handful of points (a classic packing argument says about 7). So the combine step costs about $n$, the recurrence is $T = 2T(n/2) + n$, and the total is $n\log n$. [Unverified: the constant 7 is the textbook version; sharper bounds exist.]

**At cluster scale.** The same split-solve-combine shape works across machines:

1. Cut a huge dataset into slices, one per machine.
2. Each machine sorts its slice (the conquer step, done in parallel).
3. Merge the sorted slices, often as a final multi-way merge (the combine step).

When the data does not fit in memory, **external merge sort** writes sorted chunks ("runs") to disk and merges them in passes, a design that databases and big-data systems use in some form. [Inference: the general design is standard; the exact implementation varies by system.] Independence of the pieces is what lets the conquer step run on thousands of machines at once, and the combine step is then the bottleneck, which is the same lesson as the one-machine case.

When to reach for it: the work splits into independent halves, and joining the answers is cheaper than the problem itself. When not to: halves overlap (use dynamic programming), or one pass would do (a hash map, a running maximum).

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Divide and conquer: split into smaller copies, solve each the same way, combine the answers. {lvl=1}
2. Merging two sorted lists takes about one step per item, which is what makes merge sort work. {lvl=1}
3. Halving gives about log₂ n levels, and each level does about n work: merge sort costs n log₂ n. {lvl=2}
4. Fast power halves the exponent each time: about log₂ n multiplications instead of n. {lvl=2}
5. T(n) = a T(n/b) + f(n): compare work at the bottom, at every level, or at the top to predict the cost. {lvl=3}
6. If sub-problems overlap, divide and conquer repeats work; remember answers instead. {lvl=3}
7. The same shape scales to many machines, and the combine step becomes the bottleneck. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Every split must make the problem strictly smaller, and the base case must be reachable. {lvl=1}
- Count the combine step. A cheap split with an expensive combine can cost as much as no split at all. {lvl=2}
- Lopsided splits turn log n levels into n levels. Cut at the middle, or choose the split point carefully. {lvl=3}
- Slicing lists copies data; pass index ranges when memory matters. {lvl=2}
- Overlapping sub-problems (Fibonacci-style) call for memoisation, not plain recursion. {lvl=3}
- In interviews, "sort", "count inversions" and "max over a range with a crossing case" suggest merging two halves. {lvl=2}
:::
