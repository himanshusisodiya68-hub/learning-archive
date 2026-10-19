---
title: Heaps and top-k
summary: How a system keeps the ten biggest from a billion numbers using ten slots, and the family of problems that quietly ask the same thing.
ncert: []
up_to: SDE-2
builds_on: [Heaps, Sorting, Big-O and growth of cost]
notes_prompt: Explain to a friend how you could keep a running "top 10 trending songs" without ever sorting all the plays.
margin:
  - kind: history
    title: History
    text: 'J. W. J. Williams described the heap data structure and heapsort in 1964. [Unverified]'
  - kind: tip
    title: Interview favourite
    text: 'The words "k largest", "k closest", "k most frequent", "merge k lists" or "running median" almost always mean a heap. Say the cost: n log k, not n log n.'
  - kind: olympiad
    title: Contest link
    text: 'Heaps also drive greedy contest solutions: "always take the cheapest available" is a heap with a loop around it. Dijkstra is the best-known example.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Heapsort and priority queues chapter [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Priority queues section [Unverified]" }
cards:
  - { front: "To keep the k largest of a stream, which heap and what size?", back: "A min-heap of size k. The top is the weakest of the current top k; a new value must beat it to get in." }
  - { front: "Cost of top-k with a heap versus sorting?", back: "Heap: O(n log k) time and O(k) memory. Sort: O(n log n) time and O(n) memory. Heap wins when k is much smaller than n." }
  - { front: "How does Python make a max-heap?", back: "heapq is a min-heap only. Store negated numbers, or tuples with a negated key, and negate again when reading." }
  - { front: "How do two heaps give a running median?", back: "A max-heap holds the smaller half and a min-heap the larger half, sizes equal or differing by one. The median sits on top of one or between the two tops." }
  - { front: "Merging k sorted lists: what does the heap hold?", back: "The current front item of each list, with which list it came from. Pop the smallest, then push the next item of that list. O(N log k)." }
  - { front: "When is quickselect better than a heap?", back: "When all the data is in memory and you want one kth value (not the whole top k in order): average O(n)." }
core:
  idea: 'A heap is a box that always hands you its smallest item first, and takes about log n steps to add or remove one. To keep the k best of many, hold only k in a box and let each newcomer challenge the weakest holder. Sorting everything is the wasteful alternative.'
  formulas:
    - tex: 'T = O(n \log k)'
      label: 'Top-k with a size-k heap'
    - tex: 'T = O(N \log k)'
      label: 'Merging k sorted lists holding N items in total'
  conditions:
    - 'Only the best k are needed, not a full ordering of everything (otherwise sort)'
    - 'Python''s heapq is a min-heap; max-heaps need negated keys'
    - 'The comparison key must be consistent: ties need a tiebreaker if items cannot be compared'
  sign: 'Using a max-heap to keep the k largest is the classic mistake: the weakest member, the one you must compare against, must be on top, so keep the k largest in a min-heap.'
outcomes:
  - 'Explain why a size-k min-heap keeps the k largest and what it costs'
  - 'Write top-k, k-way merge and a running median from memory'
  - 'Use a heap for scheduling questions such as rooms needed or cheapest joins'
  - 'Choose between heap, sort, quickselect and counting for a given size of n and k'
  - 'Avoid the common heapq bugs'
opener:
  story: |
    Open a music app on a Friday and look at **Top 50 in India**. Behind that list sit billions of plays, arriving every second from every phone. Nobody sorts a billion plays each time you open the app, yet the list is fresh.

    Try it with a smaller game. A friend reads you numbers one at a time, thousands of them, and at the end asks for the three biggest. You are not allowed to write them all down. What do you keep?

    You keep three numbers. When a new number arrives, you compare it with the smallest of your three: if it is bigger, it replaces that one. Everything else you can forget forever. The trick is that your three are always "the best so far", and the weakest of them is the gate any newcomer must pass.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A stream of numbers passes a small box that keeps only the three biggest"><g style="font-size:13px;fill:var(--muted)"><text x="14" y="70">7</text><text x="40" y="70">2</text><text x="66" y="70">19</text><text x="98" y="70">4</text><text x="124" y="70">11</text><text x="14" y="130">stream  →</text></g><path d="M156 66 L196 66" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M190 60 L198 66 L190 72" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="204" y="30" width="100" height="160" rx="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="254" y="52" style="font-size:11px;fill:var(--muted);text-anchor:middle">keep 3 (min-heap)</text><g style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="222" y="64" width="64" height="28" rx="6"/><rect x="222" y="98" width="64" height="28" rx="6"/><rect x="222" y="132" width="64" height="28" rx="6" style="fill:var(--c)"/></g><g style="font-size:14px;fill:var(--ink);text-anchor:middle"><text x="254" y="83">19</text><text x="254" y="117">11</text><text x="254" y="151" style="fill:var(--surface);font-weight:700">7</text></g><text x="254" y="173" style="font-size:10px;fill:var(--muted);text-anchor:middle">weakest on top:</text><text x="254" y="185" style="font-size:10px;fill:var(--muted);text-anchor:middle">the gate</text><text x="14" y="220" style="font-size:10px;fill:var(--muted)">A newcomer must beat 7 to get in.</text></svg>'
life:
  - 'Trending lists on music, video and shopping apps keep a small set of the best-scoring items out of a huge stream.'
  - 'A hospital emergency room serves the most urgent patient next, not the one who arrived first: a priority queue.'
  - 'Airline and railway waiting lists, and the operating system''s choice of which task to run next, use priority queues.'
  - 'A search engine returns the 10 best-matching pages out of billions, never sorting all of them.'
models:
  - name: 'Keep a gate, not a library'
    text: 'You rarely need to store everything. A small set plus a clear rule for who gets in (beat the weakest member) answers "best so far" at almost no cost. A short-list of job candidates works the same way.'
  - name: 'Measure what you actually need'
    text: 'Sorting orders everything, but the question asked only for ten items. Paying for work nobody asked for is the most common waste in code and in life.'
  - name: 'Split the middle'
    text: 'Two groups, "low" and "high", with the boundary in between is a way to track a middle without sorting. Think of a see-saw whose pivot you keep watching.'
links:
  - leaf: 'cs/heaps'
    name: 'Heaps'
    same: 'Same structure: a tree stored in an array where each parent is no bigger than its children.'
    differs: 'The Heaps lesson explains how it works inside; this lesson is the set of problems it solves.'
  - leaf: 'cs/sorting'
    name: 'Sorting'
    same: 'Both put the biggest or smallest items where you can find them; heapsort is sorting with a heap.'
    differs: 'Sorting orders all n items for n log n; a size-k heap pays only n log k when k is small.'
  - leaf: 'cs/scheduling'
    name: 'Scheduling'
    same: 'Operating systems keep ready tasks in a priority queue and always run the most urgent first.'
    differs: 'Here we only ask which item is next, not how the CPU switches between them.'
next:
  q: 'A heap always takes the next best item, which is a greedy choice, and it works. But some puzzles need you to try a choice, see that it fails and take it back. How do you explore all arrangements without writing a loop for every possible length?'
  leaf: 'cs/iv-backtracking'
  name: 'Backtracking'
symbols:
  - s: 'n'
    means: 'number of items in the input stream (count)'
  - s: 'k'
    means: 'how many top items you want to keep (count)'
  - s: 'N'
    means: 'total items across all lists being merged (count)'
  - s: 'O(n \log k)'
    means: 'work for n items where each costs about log k steps to place in a box of size k'
  - s: '\log k'
    means: 'how many times k can be halved; a box of 1,024 needs about 10 steps, so it grows very slowly'
---

:::hook
q: A stream has a billion numbers and you want the 10 largest. How much memory do you need to hold while it runs?
options: ["A billion slots, to sort them at the end", "About 10 slots plus a small bookkeeping structure", "A single number"]
answer: 1
right: Right. Keep 10 and let each newcomer challenge the weakest. The cost per item is about log 10, roughly 3 steps, so a billion items cost about 3 billion steps and a few bytes of memory.
wrong: One number cannot hold ten answers, and a billion slots is exactly the waste the problem is built to avoid. How few can you keep while still being sure of the final ten?
:::

## The signal {lvl=1 id=s-signal label="Foundations"}

A **heap** (also called a **priority queue**) is a box with two moves: put an item in, and take out the item with the smallest key. It gives you the smallest in one step to look and about $\log n$ steps to add or remove. Python's `heapq` is a **min-heap**: the smallest is always on top.

Clues in a statement:

| Clue | Meaning |
|---|---|
| "k largest / smallest / closest / most frequent" | Top-k, size-k heap |
| "merge k sorted lists/streams" | k-way merge |
| "median of a stream" | Two heaps |
| "next task / event / cheapest available" | Priority queue loop |
| "n is huge but k is small" | Strong hint: n log k beats n log n |

```python
import heapq
h = []
for x in [5, 3, 8, 1]:
    heapq.heappush(h, x)      # about log n steps each
print(h[0])                   # 1: the smallest, one step to look
print(heapq.heappop(h))       # 1: removed, about log n steps
```

## Top-k: the gate trick {lvl=2 id=s-topk label="SDE-1"}

To keep the **k largest**, use a **min-heap of size k**. It sounds backwards, so think of a club with k seats. The club's weakest member is the one a newcomer must beat, and the min-heap puts the weakest on top, exactly where you look.

```python
import heapq

def top_k(stream, k):
    heap = []                           # min-heap of the k largest so far
    for x in stream:
        if len(heap) < k:
            heapq.heappush(heap, x)
        elif x > heap[0]:               # beats the weakest member
            heapq.heapreplace(heap, x)  # pop smallest, push x, in one go
    return sorted(heap, reverse=True)
```

Each item costs at most about $\log k$ steps, so $n$ items cost $O(n \log k)$ time and $O(k)$ memory. Sorting everything costs $O(n \log n)$ time and $O(n)$ memory. For $n = 10^9$ and $k = 10$, the heap does about 3 steps per item against about 30.

For the **k smallest**, flip the comparison, or negate the values to turn Python's min-heap into a max-heap. For the **k most frequent**, count first, then run top-k on the counts:

```python
from collections import Counter

def top_k_frequent(words, k):
    counts = Counter(words)
    return heapq.nlargest(k, counts, key=counts.get)
```

:::qc lvl=2
q: You keep the 3 largest numbers seen so far in a min-heap. The heap holds 7, 11, 19 and 15 arrives. What happens?
options: ["15 is rejected, it is below 19", "7 is removed and 15 enters", "The heap grows to size 4"]
answer: 1
right: Right. 15 beats the weakest (7), so 7 leaves and 15 enters; the club is now 11, 15, 19.
wrong: Compare against the top of a min-heap, which is the smallest, not the largest.
:::

## Merging k sorted lists {lvl=2 id=s-merge label="SDE-1"}

Imagine k queues of already sorted numbers, and you want one sorted line. The smallest overall number must be the front of one of the k queues. So keep the **fronts** in a heap, tagged with where they came from. Pop the smallest, write it down, and push the next item from the same list.

```python
def merge_k(lists):
    heap = [(l[0], i, 0) for i, l in enumerate(lists) if l]
    heapq.heapify(heap)                  # (value, which list, position)
    out = []
    while heap:
        val, i, j = heapq.heappop(heap)
        out.append(val)
        if j + 1 < len(lists[i]):
            heapq.heappush(heap, (lists[i][j + 1], i, j + 1))
    return out
```

The heap never holds more than k items, so $N$ items cost $O(N \log k)$. This is also how big files too large for memory are sorted: sort chunks, then merge the chunks with a heap. Python's `heapq.merge` does exactly this lazily.

## A running median: two heaps {lvl=3 id=s-median label="SDE-2"}

The median is the middle value. To track it as numbers arrive without re-sorting, keep the **smaller half** in a max-heap and the **larger half** in a min-heap, with sizes equal or the low side one bigger. Then the median is the top of the low side (odd count) or the average of the two tops (even count).

```python
class MedianFinder:
    def __init__(self):
        self.lo, self.hi = [], []       # lo: negated values (max-heap)
    def add(self, x):
        heapq.heappush(self.lo, -x)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))   # biggest of lo goes up
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))
    def median(self):
        if len(self.lo) > len(self.hi):
            return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2
```

Each `add` is $O(\log n)$ and `median` is $O(1)$. The sequence of moves (push to low, move low's top to high, rebalance) makes sure every number in the low half is at most every number in the high half.

:::figure caption="Two heaps hold the two halves. The median lives where they meet."
<svg viewBox="0 0 320 120" role="img" aria-label="Two heaps side by side with tops meeting at the median"><rect x="30" y="30" width="110" height="60" rx="8" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"/><rect x="180" y="30" width="110" height="60" rx="8" style="fill:var(--surface);stroke:var(--ink)"/><g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="85" y="52">smaller half</text><text x="85" y="70">max-heap, top = 4</text><text x="235" y="52">larger half</text><text x="235" y="70">min-heap, top = 8</text></g><text x="160" y="64" style="font-size:18px;fill:var(--ink);text-anchor:middle">|</text><text x="160" y="108" style="font-size:11px;fill:var(--muted);text-anchor:middle">median = (4 + 8) / 2 = 6</text></svg>
:::

## Scheduling with a heap {lvl=3 id=s-scheduling label="SDE-2"}

Many greedy problems are: "among the things available now, always pick the best one", with a heap holding what is available.

**Rooms needed for meetings.** Sort meetings by start. Keep a heap of the end times of rooms in use. If the earliest-ending room has finished before the new meeting starts, reuse it, otherwise open a new room. The heap size at the end is the answer.

```python
def rooms_needed(meetings):             # list of (start, end)
    ends = []                           # min-heap of end times in use
    for s, e in sorted(meetings):
        if ends and ends[0] <= s:       # earliest room is free
            heapq.heapreplace(ends, e)
        else:
            heapq.heappush(ends, e)
    return len(ends)
```

**Joining at the least cost.** Suppose joining two ropes costs the sum of their lengths and you want to join all of them cheaply. Always join the two shortest, then put the result back (the same idea as Huffman coding):

```python
def min_cost_to_join(sizes):
    heapq.heapify(sizes)
    total = 0
    while len(sizes) > 1:
        a, b = heapq.heappop(sizes), heapq.heappop(sizes)
        total += a + b
        heapq.heappush(sizes, a + b)
    return total
```

## Heap, sort, or something else? {lvl=3 id=s-choose label="SDE-2"}

A heap is not always the answer. Choose by what is being asked and how big things are.

| Situation | Best tool | Cost |
|---|---|---|
| Top-k of a stream, k small, n huge | Size-k heap | O(n log k), O(k) memory |
| Top-k, k close to n, or you need all of it sorted | Sort | O(n log n) |
| One kth value, all data in memory | Quickselect | O(n) average |
| Keys are small whole numbers (ages, scores 0 to 100) | Counting array | O(n + range) |
| Items arrive and "next best" is asked repeatedly | Heap | O(log n) each |
| Median of a stream | Two heaps | O(log n) per add |

**Quickselect** works like quicksort but follows only the side that holds the position you want:

```python
import random

def kth_smallest(a, k):                 # k = 0 for the smallest
    pivot = random.choice(a)
    lo = [x for x in a if x < pivot]
    eq = [x for x in a if x == pivot]
    if k < len(lo): return kth_smallest(lo, k)
    if k < len(lo) + len(eq): return pivot
    hi = [x for x in a if x > pivot]
    return kth_smallest(hi, k - len(lo) - len(eq))
```

On average the list shrinks to about half each time, so the work adds up to about $2n$. Its weak spots: it needs all data in memory, and a bad run of pivots is slow (worst case $O(n^2)$, very unlikely with a random pivot). For data split across many machines, each machine computes its own top-k, and one machine merges the results; the true top-k is always among them.

:::qc lvl=3
q: You need only the median of an array of a million numbers already in memory, once. Which is the best fit?
options: ["Two heaps", "Quickselect, about O(n) on average", "A size-k heap with k = 500,000"]
answer: 1
right: Right. For a one-off kth value on in-memory data, quickselect avoids building a heap or sorting. Two heaps shine when numbers keep arriving.
wrong: Which tool answers a single position question without ordering the whole thing?
:::

## Catalogue: one family, many questions {lvl=3 id=s-catalogue label="SDE-2"}

Problem types in my own words, each mapped to a variant.

| # | Problem type (own words) | Variant |
|---|---|---|
| 1 | The k biggest numbers in an array or stream | Size-k min-heap |
| 2 | The k-th largest number | Size-k min-heap (answer is the top) or quickselect |
| 3 | The k words that appear most often | Count, then top-k on counts |
| 4 | The k points nearest the origin | Top-k with key = distance squared (negated for a max-heap) |
| 5 | Merge several sorted lists into one | k-way merge |
| 6 | Smallest range covering one number from each list | k-way merge, track the current max |
| 7 | Running median of arriving numbers | Two heaps |
| 8 | Minimum number of rooms for overlapping meetings | Heap of end times |
| 9 | Cheapest way to join many pieces | Repeated two-smallest |
| 10 | Task scheduling with cool-down between equal tasks | Max-heap of remaining counts plus a waiting queue |
| 11 | Rearrange a string so equal letters are not adjacent | Max-heap of letter counts |
| 12 | Stone-smashing game: repeatedly take the two heaviest | Max-heap loop |
| 13 | Find the k-th smallest in a sorted grid | k-way merge across rows |
| 14 | Sort a nearly sorted array, each item at most k from its place | Sliding heap of size k + 1 |
| 15 | Cheapest path with different costs | Dijkstra's heap loop |

## Variants table {lvl=3 id=s-variants label="SDE-2"}

| Variant | Signal | Change to the template |
|---|---|---|
| Size-k min-heap | "k largest", n large | Push if size < k, else `heapreplace` when better than `heap[0]` |
| Max-heap of k | "k smallest" | Store negated values; compare against `-heap[0]` |
| Count then top-k | "most frequent" | `Counter`, then heap on (count, item) |
| k-way merge | "k sorted inputs" | Heap of (value, source, position) |
| Two heaps | "median", "middle", "balance two halves" | Max-heap low, min-heap high, rebalance |
| Heap of end times | "rooms", "machines", "servers needed" | Sort by start; reuse the earliest-finishing |
| Greedy loop | "always take the best available" | Pop, act, maybe push a new item |
| Quickselect | one kth value, in-memory | Partition around a random pivot, follow one side |

## Common bugs {lvl=2 id=s-bugs label="SDE-1"}

- **Wrong heap direction**: for k largest use a min-heap, not a max-heap.
- **Forgetting Python has only a min-heap**: negate values, then negate back when reading.
- **Pushing without a limit**: a heap that grows to n loses the whole point; cap it at k.
- **Ties that cannot be compared**: `(score, item)` fails when two scores tie and items are objects; add a counter as the second element.
- **Reading `heap[0]` of an empty heap** raises an error; check first.
- **Treating the list as sorted**: only `heap[0]` is guaranteed smallest; the rest of the list is in heap order, not sorted order.
- **Editing an item inside the heap**: this breaks the order. Push a new entry and skip stale ones when popped ("lazy deletion").
- **Off-by-one on the kth**: decide whether k starts at 1 or 0.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A heap hands you the smallest item in one step and costs about log n to add or remove. {lvl=1}
2. To keep the k largest, use a size-k min-heap: the weakest member sits on top as the gate. {lvl=2}
3. Top-k costs O(n log k) time and O(k) memory, against O(n log n) and O(n) for sorting. {lvl=2}
4. k-way merge keeps each list's front in a heap; it costs O(N log k). {lvl=2}
5. A running median uses a max-heap of the smaller half and a min-heap of the larger half. {lvl=3}
6. "Always take the best available" greedy loops (rooms, joining, scheduling) use a heap. {lvl=3}
7. If k is close to n, sort; for one kth value in memory, quickselect; for small integer keys, count. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Say "n log k" aloud when proposing a heap; interviewers want the cost and the reason. {lvl=2}
- Python's heapq is a min-heap; negate for max, and negate back before returning. {lvl=1}
- Add a tiebreaker counter when pushing tuples with objects. {lvl=2}
- Ask whether the data is a stream (one pass, little memory) or sits in memory; the best tool changes. {lvl=3}
- Do not sort when only the best few are asked for, and do not use a heap when everything must be ordered anyway. {lvl=3}
:::
