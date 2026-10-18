---
title: Sorting
summary: How a shopping site puts ten lakh products in price order in a fraction of a second, and why that cannot be done much faster.
ncert: []
up_to: SDE-2
builds_on: [Big-O and growth of cost, Searching and binary search, Recursion, Arrays and dynamic arrays]
notes_prompt: Explain to a friend why sorting a deck of cards in your hand is slow for a million cards, and how splitting the pile in two makes it fast.
margin:
  - kind: history
    title: History
    text: Herman Hollerith's punched-card machines sorted census cards by digit, one column at a time, in the 1890s; that is radix sort, older than electronic computers. Tony Hoare invented quicksort in 1959-60, and Tim Peters wrote Timsort for Python in 2002. [Unverified]
  - kind: tip
    title: Interview favourite
    text: 'In an interview, rarely write a sort from scratch; say "sort first" and call the library. What matters is knowing that sorting costs O(n log n), that it turns many O(n²) problems into O(n log n), and what stable means.'
  - kind: olympiad
    title: Sort, then think
    text: 'Many hard-looking problems (closest pair, overlapping meetings, merging intervals, two numbers that sum to a target) become easy after sorting. When stuck, ask: what would this look like if the data were in order?'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Part II Sorting and Order Statistics: insertion sort, merge sort, quicksort, lower bound, counting and radix sort [Unverified]" }
  - { title: "D. E. Knuth, The Art of Computer Programming, Vol. 3", ref: "Sorting and Searching (the classic reference on sorting) [Unverified]" }
  - { title: "Python documentation, Sorting HOW TO", ref: "key functions, stability, and sorting by several keys" }
cards:
  - { front: "Insertion sort in one sentence, and its cost?", back: "Take items one at a time and slide each into its place among the ones already sorted, like cards in your hand. O(n²) worst case, but O(n) if the data is already nearly sorted." }
  - { front: "How does merge sort work and what is its cost?", back: "Split in half, sort each half, then merge two sorted halves by repeatedly taking the smaller front item. log₂ n levels, each costing about n: O(n log n) always." }
  - { front: "Quicksort's average and worst case?", back: "Pick a pivot, put smaller items on one side and larger on the other, recurse. Average O(n log n); worst case O(n²) when pivots are always extreme (for example, first item on already-sorted data). A random pivot makes the worst case very unlikely." }
  - { front: "Why can no comparison sort beat about n log₂ n comparisons?", back: "There are n! possible orderings. Each comparison has two outcomes, so k comparisons can tell apart at most 2^k orderings. We need 2^k ≥ n!, so k ≥ log₂(n!), which is about n log₂ n." }
  - { front: "What does 'stable sort' mean, and why care?", back: "Items that compare equal keep their original order. It lets you sort by several keys in turn: sort by the less important key first, then the main key." }
  - { front: "How does Python's built-in sort (Timsort) work, in short?", back: "It finds runs that are already in order, extends short runs with insertion sort, and merges runs. Stable, O(n log n) worst case, and close to O(n) on data that is already mostly sorted." }
core:
  idea: 'Putting n items in order by comparing them takes about n log₂ n comparisons, and no comparison-based method can do fundamentally better. Good sorts get there by splitting the problem in two, sorting the halves and combining them.'
  formulas:
    - tex: 'T(n) \approx n \log_2 n'
      label: 'Cost of merge sort (and average quicksort)'
    - tex: '\text{comparisons} \ge \log_2 (n!) \approx n\log_2 n'
      label: 'The floor for any comparison sort'
  conditions:
    - 'You only learn about items by comparing two at a time (otherwise counting and radix sort can beat the n log n floor)'
    - 'The comparison is consistent: it defines a proper order, with no cycles'
    - 'For the n log n guarantee, use merge sort, heap sort or Timsort; plain quicksort only has it on average'
  sign: 'O(n log n) is the price of arbitrary comparisons, not a limit of computers: sorting whole numbers in a known range can take O(n).'
outcomes:
  - 'Sort by hand-style insertion and say why it costs O(n²)'
  - 'Describe merge sort and quicksort and compute their cost from the number of levels'
  - 'Explain with a decision tree why comparison sorting needs at least about n log₂ n comparisons'
  - 'Use stability and sort keys in Python to sort by several fields'
  - 'Say how Timsort exploits existing order, and when counting or radix sort beats comparison sorts'
opener:
  story: |
    You open a shopping app, search for "headphones", and tap **Price: low to high**. Ten lakh matching products rearrange themselves in well under a second.

    Now try it yourself with cards. Sorting a hand of 13 is easy. A full deck of 52 is already a chore. A thousand cards would take you an afternoon, and ten lakh would outlast you. Yet the computer did ten lakh in a blink, and it is not much faster than you per card. It is just using a smarter way to cut the work.

    How do you put a million things in order without comparing every item with every other?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two sorted piles being merged into one sorted pile, taking the smaller front card each time"><g style="font-size:11px;fill:var(--ink)" text-anchor="middle"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink)"><rect x="20" y="30" width="30" height="40" rx="4"/><rect x="56" y="30" width="30" height="40" rx="4"/><rect x="92" y="30" width="30" height="40" rx="4"/><rect x="198" y="30" width="30" height="40" rx="4"/><rect x="234" y="30" width="30" height="40" rx="4"/><rect x="270" y="30" width="30" height="40" rx="4"/></g><text x="35" y="56">2</text><text x="71" y="56">5</text><text x="107" y="56">9</text><text x="213" y="56">1</text><text x="249" y="56">4</text><text x="285" y="56">8</text><text x="70" y="22" style="fill:var(--muted)">sorted pile A</text><text x="248" y="22" style="fill:var(--muted)">sorted pile B</text></g><path d="M35 78 L90 130 M213 78 L150 130" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="160" y="116" text-anchor="middle" style="font-size:10px;fill:var(--c)">take the smaller front card</text><g style="font-size:11px;fill:var(--ink)" text-anchor="middle"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink)"><rect x="14" y="140" width="30" height="40" rx="4"/><rect x="62" y="140" width="30" height="40" rx="4"/><rect x="110" y="140" width="30" height="40" rx="4"/><rect x="158" y="140" width="30" height="40" rx="4"/><rect x="206" y="140" width="30" height="40" rx="4"/><rect x="254" y="140" width="30" height="40" rx="4"/></g><text x="29" y="166">1</text><text x="77" y="166">2</text><text x="125" y="166">4</text><text x="173" y="166">5</text><text x="221" y="166">8</text><text x="269" y="166">9</text></g><text x="160" y="212" text-anchor="middle" style="font-size:10px;fill:var(--muted)">two sorted piles merge in one pass: n steps</text></svg>'
life:
  - 'Every "sort by price", "sort by date" or "sort by rating" button on a shopping, music or email app.'
  - 'A teacher arranging 40 answer sheets by roll number; a library arranging books by call number.'
  - 'An exam board producing a rank list of lakhs of students; a league table such as the IPL points table (points first, then net run rate to break ties).'
  - 'Contacts on your phone, files in a folder by name or size, and the order of search results all come from sorting.'
  - 'Databases sort rows to build indexes and to join tables; maps sort points to find the nearest ones.'
models:
  - name: 'Divide, solve, combine'
    text: 'Big jobs shrink when you split them: a school sorts a whole year’s papers by letting each class sort its own, then merging. Look for a way to cut a problem in half so that the pieces are independent and recombining is cheap.'
  - name: 'Tidy once, benefit many times'
    text: 'Sorting is an investment. It costs effort up front and pays back on every search, comparison or lookup afterwards. Alphabetising your spice rack, or keeping accounts in date order, works on the same trade.'
  - name: 'Know the floor'
    text: 'Some costs have a hard minimum: you cannot learn which of n! orderings is correct without roughly n log n yes/no answers. Knowing the floor tells you when to stop polishing an approach and change the problem instead.'
links:
  - leaf: 'cs/searching-and-binary-search'
    name: 'Searching and binary search'
    same: 'Both halve a problem at every step and cost log n per halving chain; sorted order is what makes binary search possible.'
    differs: 'Searching one item takes log n; ordering all n items takes n log n. You pay once to sort, then search cheaply many times.'
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'Merge sort and quicksort are recursive: a function that solves a small version of its own problem.'
    differs: 'Plain recursion may split into one smaller case; these sorts split into two halves, so the work forms a tree of log n levels.'
  - leaf: 'mat/permutations-and-combinations'
    name: 'Permutations and combinations'
    same: 'The n! orderings of n items are exactly the permutations; the lower bound counts them.'
    differs: 'In maths you count the arrangements; here the count tells you how many yes/no questions are needed to pick the right one.'
next:
  q: 'Merge sort and quicksort both solved a big problem by splitting it into smaller copies of itself. Is that a trick for sorting alone, or a general way of thinking that also gives fast multiplication, closest pair and more?'
  leaf: 'cs/divide-and-conquer'
  name: 'Divide and conquer'
symbols:
  - s: 'n'
    means: 'number of items to sort (count)'
  - s: 'n \log_2 n'
    means: 'n times log base two of n; about 20 million for n = a million (steps)'
  - s: 'n!'
    means: 'n factorial: 1 × 2 × ... × n, the number of ways to order n items'
  - s: 'O(n^2)'
    means: 'quadratic: doubling n makes the work 4 times bigger'
  - s: 'O(n \log n)'
    means: 'doubling n makes the work a bit more than double'
  - s: 'k'
    means: 'number of different possible values (count), used in counting sort'
---

:::hook
q: Sorting 1,000,000 items with a method whose cost grows like n² takes about 3 hours (at 10⁸ steps a second). Roughly how long does a method that grows like n log n take?
options: ["About 2 minutes", "About 0.2 seconds", "About 3 seconds"]
answer: 1
right: Right. n log₂ n is about 20 million steps for a million items, which is 0.2 seconds at 10⁸ steps a second. Same job, 50,000 times faster, only because of a better method.
wrong: Count the steps. n² is 10¹². n log₂ n is about 10⁶ × 20. Divide each by 10⁸ steps a second.
:::

## Cards in your hand {lvl=1 id=s-insertion label="Foundations"}

How do you sort a hand of cards? Pick up one card at a time and slide it into the right place among the ones already in your hand. That is **insertion sort**, and it is the way most people sort without thinking.

```python
def insertion_sort(a):
    for i in range(1, len(a)):
        card = a[i]                    # the next card to place
        j = i - 1
        while j >= 0 and a[j] > card:
            a[j + 1] = a[j]            # shift bigger cards right
            j -= 1
        a[j + 1] = card                # drop it in the gap
```

Cost: the first card needs 0 shifts, the second up to 1, the third up to 2, and so on. In the worst case (cards in reverse order) the total is $1 + 2 + \dots + (n-1) = n(n-1)/2$ shifts, so insertion sort is $O(n^2)$. Double the cards and the work quadruples. Measured in plain Python on random numbers: 4,000 items took about 0.28 s, so a million items (250 times more, so 62,500 times more work) would take about five hours.

But there is a silver lining. If the cards are *already* nearly in order, the inner loop barely runs. On an already-sorted list of 4,000 items the same code took 0.0004 s, because each card stays where it is: the cost is O(n). That fact matters later, because real data is often almost sorted.

:::qc lvl=1
q: Insertion sort takes 1 second on 10,000 items. About how long on 20,000 random items?
options: ["About 2 seconds", "About 4 seconds", "About 1 second"]
answer: 1
right: Right. Its cost grows like n², so twice the data means four times the work.
wrong: Insertion sort costs about n² steps in the worst case. What does doubling n do to n²?
:::

## Split in half, sort, merge {lvl=1 id=s-merge label="Foundations"}

Here is the idea that beats n². Imagine two friends each sort half the cards. Now you hold two sorted piles. Merging them into one sorted pile is easy: look at the top card of each pile, take the smaller, repeat. One pass, about $n$ steps, no searching.

The halves can be sorted the same way: split again. Keep splitting until a pile has one card (a pile of one is already sorted), then merge back upwards. This is **merge sort**.

```python
def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left, right = merge_sort(a[:mid]), merge_sort(a[mid:])
    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:        # <= keeps equal items in order
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]
```

Why is it fast? Count the levels. Splitting 1,000,000 cards in half repeatedly reaches single cards after $\log_2 10^6 \approx 20$ levels. At **every** level the merging touches each card once, about $n$ steps. Total: levels times work per level, $n \log_2 n$. Read it as: "n steps, repeated 20 times".

:::figure caption="Merge sort on eight cards: three levels of splitting (log₂ 8 = 3), and at each level every card is touched once, so the work is 8 × 3."
<svg viewBox="0 0 320 170" role="img" aria-label="A tree splitting eight numbers into halves down to single numbers, with three levels">
<g style="font-size:10px;fill:var(--ink)" text-anchor="middle">
<text x="160" y="16">5 2 9 1 8 4 7 3</text>
<text x="80" y="62">5 2 9 1</text><text x="240" y="62">8 4 7 3</text>
<text x="40" y="108">5 2</text><text x="120" y="108">9 1</text><text x="200" y="108">8 4</text><text x="280" y="108">7 3</text>
<text x="20" y="154">5</text><text x="60" y="154">2</text><text x="100" y="154">9</text><text x="140" y="154">1</text><text x="180" y="154">8</text><text x="220" y="154">4</text><text x="260" y="154">7</text><text x="300" y="154">3</text>
</g>
<g class="pen" style="stroke:var(--mat);stroke-width:1.4;fill:none">
<path d="M150 20 L90 48 M170 20 L230 48 M70 66 L45 94 M90 66 L115 94 M230 66 L205 94 M250 66 L275 94"/>
<path d="M36 112 L22 140 M44 112 L58 140 M116 112 L102 140 M124 112 L138 140 M196 112 L182 140 M204 112 L218 140 M276 112 L262 140 M284 112 L298 140"/>
</g>
<g style="font-size:9px;fill:var(--muted)"><text x="4" y="40">level 1</text><text x="4" y="86">level 2</text><text x="4" y="132">level 3</text></g>
</svg>
:::

Measured: 10,000 random numbers took 0.017 s with the code above and 100,000 took 0.22 s, a factor of about 12.5, which matches the $n\log n$ prediction of about 13 for ten times more data, far below the factor of 100 that $n^2$ would give.

:::qc lvl=1
q: Merge sort on 1,024 items: how many levels of splitting until every pile has one item?
options: ["10", "32", "1,024"]
answer: 0
right: Right. 1,024 = 2¹⁰, so ten halvings reach single items, and the whole sort costs about 1,024 × 10 steps.
wrong: Each split halves the piles. How many times can you halve 1,024 before reaching 1?
:::

## Quicksort {lvl=2 id=s-quick label="SDE-1"}

Merge sort splits blindly and does the hard work when merging. **Quicksort** does the hard work when splitting. Pick one item, the **pivot**. Move everything smaller to its left and everything larger to its right. Now the pivot is in its final place, and the two sides can be sorted separately, each by the same method.

```python
import random
def quicksort(a):
    if len(a) <= 1:
        return a
    pivot = random.choice(a)
    small = [x for x in a if x < pivot]
    equal = [x for x in a if x == pivot]
    big   = [x for x in a if x > pivot]
    return quicksort(small) + equal + quicksort(big)
```

If the pivot lands near the middle each time, the picture is merge sort's: about $\log_2 n$ levels with $n$ work per level. But if the pivot is always the smallest or largest item (say, you always pick the first item and the list is already sorted), one side is empty and the other has $n-1$ items: $n$ levels, cost $O(n^2)$. A **random pivot** makes that very unlikely: the expected cost is $O(n \log n)$. Real in-place versions avoid the extra lists and are fast in practice, since they run in cache-friendly loops. [Inference: the speed advantage of in-place quicksort over merge sort varies by language and data.]

| | Insertion | Merge | Quick |
|---|---|---|---|
| Worst case | O(n²) | O(n log n) | O(n²) |
| Average | O(n²) | O(n log n) | O(n log n) |
| Extra memory | none | O(n) | small (stack) |
| Sorted input | O(n), best | O(n log n) | depends on pivot |

:::qc lvl=2
q: Quicksort always picks the first item as pivot. On which input is it slowest?
options: ["A list that is already sorted", "A random list", "A list where all items are equal and the code uses 3-way split as above"]
answer: 0
right: Right. On a sorted list the first item is always the smallest, so every split peels off just one item: n levels of n work, O(n²). Random pivots avoid this.
wrong: Think about what a first-item pivot does on an already sorted list: how many items fall on each side?
:::

## Why n log n is the floor {lvl=3 id=s-floor label="SDE-2"}

Can a cleverer method do better than $n\log n$? Not if all you can do is compare two items at a time. The argument is a game of twenty questions.

Start with 3 items, $a$, $b$, $c$. There are $3! = 6$ possible orderings. Each comparison ("is $a$ smaller than $b$?") has two answers, so after one comparison you can rule out at best half of the six possibilities. After two you have at best 6/4 left, so still more than one. After three comparisons you can distinguish up to $2^3 = 8 \ge 6$ cases. So **3 comparisons are needed** for 3 items, no matter how clever you are.

In general, $k$ comparisons can tell apart at most $2^k$ orderings, and there are $n!$ orderings, so $2^k \ge n!$, i.e.

$$k \ge \log_2(n!) \approx n \log_2 n - 1.44\,n$$

Read it as: "you need at least as many yes/no answers as there are digits in the binary code for the right ordering". For 10 items that is $\log_2 (10!) \approx 21.8$, so at least 22 comparisons. For a million items, at least about 18.5 million. Merge sort uses about 19 to 20 million, so it is within about 10 percent of the best any comparison sort can possibly do.

A real check: Python's sort, with each comparison counted, used about 1,532,000 comparisons on 100,000 random items; the floor is about 1,517,000 (computed from the formula above). [Inference: one run on one machine; the floor is exact maths, the count varies slightly with the data.]

:::qc lvl=3
q: What is the smallest number of comparisons that can always sort 4 items?
options: ["3", "5", "6"]
answer: 1
right: Right. There are 4! = 24 orderings, and 2⁴ = 16 is too few while 2⁵ = 32 is enough, so at least 5 comparisons are needed. (5 are also enough, using a careful method.)
wrong: There are 4! = 24 orderings. A comparison has two outcomes, so k comparisons separate up to 2^k cases. Find the smallest k with 2^k at least 24.
:::

## Stability and Timsort {lvl=3 id=s-stable label="SDE-2"}

Suppose two students both score 85. After sorting by marks, which one comes first? A **stable** sort keeps equal items in their original order; an unstable one may swap them. Stability lets you sort by several keys: sort by the less important key first (name), then by the main key (marks), and ties stay alphabetical.

```python
students.sort(key=lambda s: s.name)                  # tie-breaker first
students.sort(key=lambda s: s.marks, reverse=True)   # main key last
# equal marks stay in name order, because Python's sort is stable
```

Python's built-in `sorted` and `list.sort` use **Timsort**. It does not start from scratch: it scans for **runs**, stretches of the data already ascending (or strictly descending, which it reverses). It extends short runs to a minimum length with insertion sort (which is fast on small, nearly sorted pieces) and then merges the runs. The merges follow stack rules that keep run sizes balanced. Timsort is stable, $O(n \log n)$ in the worst case, and close to $O(n)$ when the data is mostly sorted. [Unverified: details of the exact merge rules and the minimum run length vary between Python versions.]

Measured on a million floats: random order 0.22 s, but already-sorted 0.022 s (ten times faster), and reverse-sorted 0.035 s. On an already-sorted list of 100,000 items Timsort made 99,999 comparisons: one pass to notice that everything is in order. Real data (logs by time, appended records) is often like this, which is why the standard library does not use a plain quicksort.

**Beating the floor.** The n log n floor assumes you only compare. If the items are whole numbers in a small known range $0$ to $k-1$, **counting sort** simply counts how many times each value appears, then writes them out: $O(n + k)$.

```python
def counting_sort(a, k):            # values are whole numbers in 0..k-1
    count = [0] * k
    for x in a:
        count[x] += 1
    out = []
    for v in range(k):
        out += [v] * count[v]
    return out
```

**Radix sort** sorts big numbers digit by digit, last digit first, using a stable counting pass for each digit: $d$ passes cost $O(d(n+k))$. This is how the old punched-card sorters worked, and it is used to sort integers and fixed-length strings fast. The price is that it only works on data with digits, not arbitrary comparisons.

:::qc lvl=3
q: You sort a list of orders by city, then re-sort by date, using a stable sort. What order do orders from the same date appear in?
options: ["Sorted by city", "In their original order before the first sort", "Random"]
answer: 0
right: Right. The second sort keeps the order of equal dates exactly as the first sort left them, which was by city. That is why you sort by the minor key first and the major key last.
wrong: A stable sort keeps equal items in the order they had when it started. What order did the first sort leave them in?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Insertion sort (cards in hand) costs O(n²) in general but O(n) on nearly sorted data. {lvl=1}
2. Merge sort splits into halves, sorts them, and merges: log₂ n levels with n work each, O(n log n) always. {lvl=1}
3. Quicksort partitions around a pivot: average O(n log n), worst case O(n²), which a random pivot makes very unlikely. {lvl=2}
4. Comparison sorting cannot beat about log₂(n!) ≈ n log₂ n comparisons: each comparison halves the possible orderings at best. {lvl=3}
5. A stable sort keeps equal items in their original order, so you can sort by several keys: minor key first, main key last. {lvl=3}
6. Python's Timsort is stable and adaptive: O(n log n) worst case, near O(n) on mostly sorted data. Counting and radix sort avoid comparisons and can be O(n) for integers in a small range. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Writing your own sort in production code. Use `sorted(...)` or `.sort(key=...)`; it is fast and tested. {lvl=1}
- Quicksort with a fixed pivot (first or last item) on sorted or nearly sorted input degrades to O(n²). Use a random pivot or the median of three. {lvl=2}
- `list.sort()` sorts in place and returns `None`; `sorted(x)` returns a new list. Writing `a = a.sort()` loses your list. {lvl=1}
- Using a comparison that is not consistent (for example, comparing with `<=` in a custom key) can give wrong orders or crash. {lvl=3}
- Expecting stability from every sort: the classic in-place quicksort and heap sort are not stable. Check before relying on it. {lvl=3}
- Sorting just to find the smallest or the top 3 items: that costs n log n, while a single pass or a heap costs O(n) or O(n log k). {lvl=3}
:::
