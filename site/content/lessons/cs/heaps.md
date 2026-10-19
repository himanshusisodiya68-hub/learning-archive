---
title: Heaps and priority queues
summary: How a hospital, a phone's task scheduler or a delivery app always picks the most urgent item next, even as new ones keep arriving.
ncert: []
up_to: SDE-2
builds_on: [Arrays and dynamic arrays, Trees and binary search trees, Big-O and growth of cost]
notes_prompt: Explain to a friend why an emergency room does not sort all patients every time one walks in, and how a heap gets "most urgent first" cheaply.
margin:
  - kind: history
    title: History
    text: J. W. J. Williams described the binary heap in 1964 as the engine of heapsort [Unverified date]. The same structure now sits inside schedulers, simulators and route finders.
  - kind: tip
    title: Interview favourite
    text: '"Top k", "k-th largest", "merge k sorted lists" and "running median" are heap problems. If you only ever need the best item, not a full sorted order, think heap.'
  - kind: olympiad
    title: Design link
    text: 'A job scheduler that must run millions of timers ("run this at 9:00:05") is a priority queue keyed by time. Heaps are one answer; timer wheels are another.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 6 Heapsort (heaps, priority queues) [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Priority queues section [Unverified]" }
  - { title: "R. Sedgewick and K. Wayne, Algorithms", ref: "Ch. 2.4 Priority Queues [Unverified]" }
cards:
  - { front: "What does a priority queue promise?", back: "Add any item with a priority, and always be able to take out the most urgent one next. It does not promise a fully sorted order of the rest." }
  - { front: "What is the heap rule (min-heap)?", back: "Every parent is smaller than or equal to both its children, so the smallest item is always at the top." }
  - { front: "How is a binary heap stored in an array?", back: "Level by level, left to right. For the item at index i, the children are at 2i + 1 and 2i + 2, and the parent is at (i - 1) // 2." }
  - { front: "Cost of push, pop and peek in a binary heap?", back: "Push and pop are O(log n): an item moves at most the height of the tree. Peek (look at the top) is O(1)." }
  - { front: "How do you keep the k largest of a huge stream?", back: "Keep a min-heap of size k. For each new number, if it beats the heap's smallest, swap them. Cost O(n log k), memory O(k)." }
  - { front: "Why does Python's heapq only give a min-heap?", back: "It is the one simple primitive. For a max-heap, push the negated values (or tuples with a negated key) and negate back on the way out." }
core:
  idea: 'A heap keeps items in a tree where every parent beats its children, so the most urgent item is always at the top. Looking at it is instant, and taking it out or adding a new one costs only the height of the tree: about log n steps.'
  formulas:
    - tex: '\text{children of } i:\ 2i+1,\ 2i+2 \qquad \text{parent of } i:\ \lfloor (i-1)/2 \rfloor'
      label: 'Where things live in the array'
    - tex: '\text{height} = \lfloor \log_2 n \rfloor'
      label: 'Why push and pop cost O(log n)'
  conditions:
    - 'You only need the best item next, not the whole list in sorted order'
    - 'Items may arrive at any time, between the removals'
    - 'Priorities can be compared with one another (numbers, times, tuples)'
    - 'Finding an arbitrary item (by name) is not needed: that is slow in a heap'
  sign: 'A heap is not sorted. The second smallest item is one of the top two children, but the rest of the array can look scrambled; never read it as a sorted list.'
outcomes:
  - 'Explain why a plain list or a sorted list is a poor priority queue'
  - 'Draw a binary heap and read it as an array, using the index formulas'
  - 'Trace a push and a pop, and say why each costs O(log n)'
  - 'Use heapq for top-k, k-way merge and scheduling problems'
  - 'Choose a heap, a sorted structure or a hash table for a given question'
opener:
  story: |
    A hospital emergency room has forty people waiting. A man with a sprained ankle has been there two hours. Then an ambulance arrives with a child who cannot breathe. The child goes in **first**, even though they arrived last.

    Notice what the nurse did *not* do. She did not line everyone up in order of urgency and re-sort the whole line. She just kept a sense of who is most urgent right now, and every time a doctor was free, she sent that person in. New people came and went all night.

    Computers face this all the time: your phone choosing which app to run next, a delivery app choosing which rider gets the next order. How do you keep "most urgent first" cheap when a million things are waiting and more keep arriving?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Waiting patients with urgency numbers; the most urgent is lifted to the front"><rect x="16" y="20" width="288" height="200" rx="14" style="fill:var(--surface);stroke:var(--rule)"/><text x="30" y="44" style="font-size:12px;fill:var(--muted)">Emergency room, waiting</text><g style="stroke:var(--ink);stroke-width:1.5"><circle cx="52" cy="98" r="16" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface))"/><circle cx="108" cy="98" r="16" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface))"/><circle cx="164" cy="98" r="16" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface))"/><circle cx="220" cy="98" r="16" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface))"/><circle cx="276" cy="98" r="16" style="fill:var(--c)"/></g><g style="font-size:13px;fill:var(--ink)" text-anchor="middle"><text x="52" y="103">4</text><text x="108" y="103">7</text><text x="164" y="103">5</text><text x="220" y="103">9</text><text x="276" y="103" style="fill:var(--surface)">1</text></g><text x="30" y="144" style="font-size:11px;fill:var(--muted)">1 = needs a doctor right now</text><path d="M276 118 C276 160 200 150 150 176" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M150 176 l10 -2 l-4 9 z" style="fill:var(--c)"/><rect x="60" y="170" width="86" height="34" rx="8" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="72" y="191" style="font-size:12px;fill:var(--ink)">doctor: next!</text></svg>'
life:
  - 'An operating system picks the next program to run by priority; many schedulers use a priority queue inside [Inference].'
  - 'A cab or food-delivery app matches the nearest or most urgent request first, and new requests keep arriving [Inference: how any one company does it is not public].'
  - 'A video game or traffic simulator keeps "events" ordered by the time they will happen and always processes the earliest one next.'
  - 'A map app searching for the fastest route keeps the most promising junction to explore next in a priority queue (Dijkstra''s algorithm, in the graph-algorithms lesson).'
  - 'Your phone''s alarms and reminders: the system only has to know which one rings next.'
models:
  - name: 'Only pay for what you need'
    text: 'Sorting the whole line gives you far more than the nurse needs; she needs just the first person. A structure that keeps only the best item cheap is faster than one that keeps everything ordered. Ask what you really need before paying for a full order.'
  - name: 'Local rules, global guarantee'
    text: 'Each parent only checks its own two children, yet the best item ends up on top of everything. Organisations work this way too: if every manager is at least as good as their reports on some measure, the top person is the best overall.'
  - name: 'Triage'
    text: 'When resources are scarce, deciding what comes next matters more than deciding the full order. Budgets, to-do lists and revision plans all improve when you only commit to the next most important thing.'
links:
  - leaf: 'cs/trees'
    name: 'Trees and binary search trees'
    same: 'Both are trees with a rule between each parent and its children, and both have height about log n when balanced.'
    differs: 'A search tree keeps a left-right order so it can find any key; a heap only keeps the parent-beats-child rule, so it finds the best fast but any other key slowly.'
  - leaf: 'cs/sorting'
    name: 'Sorting'
    same: 'Take out the smallest n times from a heap and you have sorted the items (heapsort), at O(n log n) in total.'
    differs: 'Sorting wants every item in order at once; a priority queue wants the next best, one at a time, while new items keep arriving.'
  - leaf: 'cs/graph-algorithms'
    name: 'Graph algorithms'
    same: 'Dijkstra''s shortest-path algorithm is a loop that repeatedly takes the closest unvisited junction out of a priority queue.'
    differs: 'A heap is a general tool for "next best"; the graph lesson adds the rule for what to put in and how distances update.'
  - leaf: 'cs/arrays'
    name: 'Arrays'
    same: 'A binary heap is stored in a plain array: no pointers, and the tree shape comes from index arithmetic.'
    differs: 'A plain array is sorted or searched by position; a heap array is read by following parent and child formulas.'
next:
  q: 'A search box must show every saved phrase that starts with the letters you have typed so far, from millions of phrases, after every keystroke. A heap gives only the single best item and a hash table needs the exact word. What shape of structure answers "starts with"?'
  leaf: 'cs/tries'
  name: 'Tries'
---

:::hook
q: A million tasks are waiting and a scheduler must hand out the most urgent one, then repair its bookkeeping, again and again. Using a heap, about how many steps does one "take out the most urgent" cost?
options: ["About a million, it looks at everything", "About 20", "Exactly 1"]
answer: 1
right: Right. A million items fit in a tree about 20 levels tall ($2^{20} \approx 1.05$ million), and fixing the heap after a removal walks down just one path of that tree. Peeking at the top is the "exactly 1" part, but removal costs about 20.
wrong: Looking at all of them is the slow way, and 1 step is only enough for peeking, not removing. The trick is a tree whose height is about log₂ of a million.
:::

## The problem {lvl=1 id=s-problem label="Foundations"}

Let's try the obvious ways to keep "most urgent first" and see where they hurt.

**Way 1: an unsorted list.** Adding a new item is instant (put it on the end). But finding the most urgent means looking at every item. With a million waiting, that is a million looks per patient.

**Way 2: a sorted list.** Finding the most urgent is instant: it is at the front. But adding a newcomer means finding its place and shifting everyone behind it along, about a million moves in the worst case.

Either way, one of the two jobs costs about $n$ steps, where $n$ is the number waiting. We want both jobs to be cheap. The structure that does that is the **priority queue**: a collection where you can *add* an item with a priority and *take out* the most urgent one. A **heap** is the usual way to build one.

:::qc lvl=1
q: An emergency room uses a sorted list. A new patient arrives with middling urgency. What is the slow part?
options: ["Finding who is first", "Finding the right place for the newcomer and shifting people", "Calling the doctor"]
answer: 1
right: Right. A sorted list makes taking from the front instant but makes every insertion cost about n moves.
wrong: Who is first is instant in a sorted list. Think about what must happen to the people already waiting when someone new is slotted in.
:::

## A tree where parents win {lvl=1 id=s-tree label="Foundations"}

Picture a family tree upside down: one person at the top, each person having up to two children below. Now add one rule: **every parent is more urgent than both their children**. (Smaller number means more urgent here, so this is a **min-heap**.)

What follows from this one rule? The top person beats their children, who beat *their* children, and so on down, so the top beats everyone. The most urgent item is always at the top, with no searching.

The rule does *not* say which child is more urgent, or compare cousins. That is on purpose: it asks for much less than a full sort, which is why it is cheap to keep.

:::figure caption="A min-heap of seven items. Every parent is smaller than its children. The array underneath lists the tree level by level, left to right."
<svg viewBox="0 0 320 210" role="img" aria-label="A binary tree with 1 at the top, 3 and 2 below, then 9, 6, 4, 8, and the same values in an array strip">
<g class="pen" style="stroke:var(--ink);stroke-width:1.5;fill:none">
<line x1="146.5" y1="40.4" x2="108.5" y2="69.6"/><line x1="173.5" y1="40.4" x2="211.5" y2="69.6"/>
<line x1="84.7" y1="93.5" x2="70.3" y2="112.5"/><line x1="105.3" y1="93.5" x2="119.7" y2="112.5"/>
<line x1="214.7" y1="93.5" x2="200.3" y2="112.5"/><line x1="235.3" y1="93.5" x2="249.7" y2="112.5"/>
</g>
<g style="font-size:14px;fill:var(--ink);text-anchor:middle">
<circle cx="160" cy="30" r="17" style="fill:var(--mat);stroke:var(--ink)"/><text x="160" y="35" style="fill:var(--surface)">1</text>
<circle cx="95" cy="80" r="17" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="95" y="85">3</text>
<circle cx="225" cy="80" r="17" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="225" y="85">2</text>
<circle cx="60" cy="126" r="17" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="60" y="131">9</text>
<circle cx="130" cy="126" r="17" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="130" y="131">6</text>
<circle cx="190" cy="126" r="17" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="190" y="131">4</text>
<circle cx="260" cy="126" r="17" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="260" y="131">8</text>
</g>
<g style="stroke:var(--ink);stroke-width:1.2;fill:none"><rect x="30" y="160" width="36" height="28"/><rect x="66" y="160" width="36" height="28"/><rect x="102" y="160" width="36" height="28"/><rect x="138" y="160" width="36" height="28"/><rect x="174" y="160" width="36" height="28"/><rect x="210" y="160" width="36" height="28"/><rect x="246" y="160" width="36" height="28"/></g>
<g style="font-size:14px;fill:var(--ink);text-anchor:middle"><text x="48" y="179">1</text><text x="84" y="179">3</text><text x="120" y="179">2</text><text x="156" y="179">9</text><text x="192" y="179">6</text><text x="228" y="179">4</text><text x="264" y="179">8</text></g>
<g style="font-size:10px;fill:var(--muted);text-anchor:middle"><text x="48" y="202">0</text><text x="84" y="202">1</text><text x="120" y="202">2</text><text x="156" y="202">3</text><text x="192" y="202">4</text><text x="228" y="202">5</text><text x="264" y="202">6</text></g>
</svg>
:::

:::qc lvl=1
q: In a min-heap, where is the most urgent item, and is the second most urgent item always the next one in the array?
options: ["At the top; yes, the array is sorted", "At the top; no, the array is not fully sorted", "At the bottom; no"]
answer: 1
right: Right. The top is the smallest, but only parent-versus-child order is kept. In the figure, 2 is second smallest and sits at index 2, but 3 sits before it.
wrong: The parent-beats-child rule puts the best at the top. Does it say anything about siblings or cousins?
:::

## The tree lives in an array {lvl=2 id=s-array label="SDE-1"}

A tree usually needs pointers from parents to children. A heap can skip them. Number the positions 0, 1, 2, ... level by level, left to right (the figure's strip). For the item at index $i$:

$$\text{left child} = 2i+1, \qquad \text{right child} = 2i+2, \qquad \text{parent} = \lfloor (i-1)/2 \rfloor$$

Read it as: "double your position and step one or two; to go back up, step back one and halve, rounding down." Check with the figure: index 1 (the 3) has children at 3 and 4 (the 9 and the 6), and the parent of index 6 is $\lfloor 5/2 \rfloor = 2$ (the 2).

This works because we always fill levels completely before starting a new one, so the tree has **no gaps**. With no gaps, the array is packed with no wasted space and neighbouring items sit close in memory, which is quick on real hardware (see the memory-hierarchy lesson).

## Push and pop {lvl=2 id=s-ops label="SDE-1"}

**Push (add).** Put the new item in the first free spot, at the end of the array. That may break the rule with its parent, so while it beats its parent, swap them. This is called **sifting up**. It climbs at most one level per step.

**Pop (take out the top).** Move the *last* item into the top spot (this keeps the tree gap-free). Now the top may be too weak, so while it loses to its better child, swap it with that child: **sifting down**.

```python
def push(h, x):
    h.append(x)
    i = len(h) - 1
    while i > 0 and h[i] < h[(i - 1) // 2]:
        p = (i - 1) // 2
        h[i], h[p] = h[p], h[i]
        i = p
```

The item moves up one level per swap and there are about $\log_2 n$ levels, so a push costs $O(\log n)$. A pop also walks one path, this time downwards, so $O(\log n)$. Peeking at `h[0]` costs $O(1)$.

```python
def pop(h):
    top, last = h[0], h.pop()
    if h:
        h[0], i = last, 0
        while True:
            c = 2 * i + 1
            if c + 1 < len(h) and h[c + 1] < h[c]: c += 1
            if c >= len(h) or h[i] <= h[c]: break
            h[i], h[c] = h[c], h[i]
            i = c
    return top
```

In words: pick the smaller child `c`; if the item is already no bigger, stop; otherwise swap and keep going down.

:::qc lvl=2
q: A heap holds 1,000,000 items. Roughly how many swaps does one pop need at most?
options: ["About 20", "About 1,000", "About 1,000,000"]
answer: 0
right: Right. The tree is about $\log_2 10^6 \approx 20$ levels tall, and the item moves down at most one level per swap.
wrong: A pop follows a single path from the top towards the bottom. How long is that path in a tree that doubles at every level?
:::

## Python's heapq {lvl=2 id=s-heapq label="SDE-1"}

You rarely write the above yourself. Python's `heapq` module works on an ordinary list.

```python
import heapq
h = []
for x in [5, 1, 8, 3]:
    heapq.heappush(h, x)
heapq.heappop(h)      # 1, the smallest
h[0]                  # 3, peek without removing
heapq.heapify([9, 4, 7, 1])  # list into a heap in O(n)
```

Two habits to learn now:

- **Max-heap:** `heapq` is min-only, so push the negative (`-x`) and negate again when popping.
- **Items with payloads:** push tuples like `(priority, name)`. Tuples compare by the first element, then the next. If two priorities tie and the second elements cannot be compared (say, custom objects), add a counter as the middle item: `(priority, count, item)`.

## Top k from a huge stream {lvl=2 id=s-topk label="SDE-1"}

Suppose you must report the 3 highest scores from a stream of a billion, without storing them. Sorting needs all the memory. A heap needs only $k$ items.

Keep a **min-heap of size $k$**. Its top is the *weakest* of the current best $k$. When a new score arrives, compare it with that top. If it is no better, ignore it. If it is better, replace the top with it. Every item costs one comparison plus at most one $O(\log k)$ fix.

```python
import heapq
def top_k(stream, k):
    h = []
    for x in stream:
        if len(h) < k:
            heapq.heappush(h, x)
        elif x > h[0]:
            heapq.heapreplace(h, x)   # pop smallest, push x
    return sorted(h, reverse=True)
```

Total cost: $O(n \log k)$ time and $O(k)$ memory. When $k$ is tiny compared with $n$, this beats sorting at $O(n \log n)$ and fits in memory. (The surprise: to get the **largest** $k$ you keep a **min**-heap, because the thing you must be able to throw away fast is the weakest of your best.)

:::qc lvl=2
q: To keep the 10 highest scores seen so far in a stream, which heap do you use?
options: ["A max-heap of size 10", "A min-heap of size 10", "A min-heap holding every score"]
answer: 1
right: Right. The top of a min-heap is the weakest of the current best 10, which is exactly the one a better newcomer replaces.
wrong: You need quick access to the item that gets kicked out. Which of your 10 gets kicked out first?
:::

## The patterns heaps solve {lvl=3 id=s-patterns label="SDE-2"}

Most heap problems are one of a handful of shapes. Spot the shape and the template follows.

| Shape | Signal in the problem | How the heap is used |
|---|---|---|
| Top k / k-th largest | "the k biggest", "k-th most frequent" | Min-heap of size k |
| Merge k sorted lists | "k sorted streams, produce one sorted stream" | Heap holds the current head of each list: pop the smallest, push that list's next item. Cost $O(N \log k)$ |
| Running median | "median after each new number" | Max-heap for the lower half, min-heap for the upper half, kept within one item in size |
| Scheduling by time | "next event / next free machine / meeting rooms" | Heap keyed by finish or event time |
| Shortest path with weights | "cheapest route" | Heap of (distance so far, junction): Dijkstra |

Two things to know at this level:

1. **Heapify is $O(n)$, not $O(n \log n)$.** Building a heap from $n$ items by sifting down from the middle backwards is cheaper than $n$ pushes. Half of the items are leaves and need no work; a quarter move at most one level; an eighth at most two. The total is $n\left(\tfrac{1}{4}\cdot 1 + \tfrac{1}{8}\cdot 2 + \tfrac{1}{16}\cdot 3 + \dots\right) \le n$ swaps.
2. **A heap cannot remove an arbitrary item cheaply.** Finding it is $O(n)$. The standard workaround is **lazy deletion**: leave the stale entry in the heap and skip it when it reaches the top (check a "still valid?" flag). This is how most Dijkstra implementations "update a distance".

:::qc lvl=3
q: You must merge 100 sorted files of a billion lines each into one sorted output, keeping memory small. What goes into the heap?
options: ["Every line from every file", "One line from each file: its current front", "Only the first line of the first file"]
answer: 1
right: Right. The heap holds 100 items, one per file. Pop the smallest, write it out, and push the next line from the same file. Memory stays tiny, and each line costs $O(\log 100)$.
wrong: Loading everything defeats the point. What is the least information you need to know which line comes next overall?
:::

## Choosing the right tool {lvl=3 id=s-choose label="SDE-2"}

| You need | Use | Why |
|---|---|---|
| The best item next, with insertions | Heap | Cheap push and pop, $O(\log n)$ |
| The whole thing in sorted order, once | Sort | One $O(n \log n)$ pass; no heap needed |
| Best item *and* delete or update arbitrary items | Balanced tree or indexed heap | A plain heap cannot find items by name |
| Exact lookup by key | Hash table | $O(1)$ average |
| Nearest or range queries | Search tree | Heaps do not keep left-right order |

A note on **ties**. Heaps are not **stable**: two equal priorities may come out in either order. If first-come, first-served matters (a fair queue), add an arrival counter as a tie-breaker.

Last, the **shape of the tree** is a choice. A binary heap has two children per parent. A heap with more children (a $d$-ary heap, say $d = 4$) is shorter and sifts up faster, and its children sit together in memory, so some real systems prefer it [Unverified: gains depend on the workload and hardware]. Fancier heaps (Fibonacci heaps) have better theoretical bounds for "decrease priority" but are rarely faster in practice.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A priority queue lets you add items and always take out the most urgent one; unsorted and sorted lists each make one of those two jobs cost about n steps. {lvl=1}
2. A heap is a tree where every parent beats its children, so the best item is on top; the rest is only partly ordered. {lvl=1}
3. A binary heap lives in an array: children of i are 2i + 1 and 2i + 2, the parent is (i - 1) // 2. {lvl=2}
4. Push sifts up, pop sifts down; both cost O(log n), and peek is O(1). {lvl=2}
5. For the k largest of a stream, keep a min-heap of size k: O(n log k) time, O(k) memory. {lvl=2}
6. Merge k sorted lists, running median, scheduling and Dijkstra are all "next best" problems. {lvl=3}
7. Heapify is O(n); arbitrary removal needs lazy deletion; ties need a counter. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A heap is not a sorted array. Printing it does not give sorted output, and `h[1]` is not the second smallest. {lvl=1}
- `heapq` is a min-heap. For max-heap behaviour negate the keys. {lvl=2}
- Looking for a given item in a heap is O(n). If you need that, you want a different structure or lazy deletion. {lvl=2}
- Tuples with equal first elements fall back to comparing the next one, which may fail or be unfair: add a counter. {lvl=3}
- For the k largest, use a min-heap of size k, not a max-heap of everything. {lvl=2}
- Python's `heapq.nlargest(k, data)` exists and is fine for quick work; know the heap behind it for interviews. {lvl=2}
:::
