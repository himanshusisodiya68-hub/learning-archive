---
title: Design a data structure
summary: The interview question that hands you a list of operations and a speed limit, then asks you to build the thing. LRU cache and its friends.
ncert: []
up_to: SDE-2
builds_on: [Hash tables, Linked lists, Heaps and priority queues, Stacks and queues]
notes_prompt: Explain to a friend how your phone decides which app to forget first, and which two simple tools it needs to decide in one step.
margin:
  - kind: history
    title: History
    text: 'Caches that throw out the least recently used item go back to the earliest virtual-memory systems of the 1960s [Unverified]. The same idea now lives in your browser, your phone and every large website.'
  - kind: tip
    title: Interview favourite
    text: 'When a problem lists operations with speeds ("get and put in O(1)"), do not hunt for one clever structure. Glue two plain ones together, so that each covers the operation the other is bad at.'
  - kind: olympiad
    title: Stretch
    text: 'An LFU cache with O(1) operations needs a map of lists keyed by use count. Few people produce it from scratch, so practising it is a cheap way to stand out.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 10 Elementary Data Structures; Ch. 11 Hash Tables [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Data structures chapter: choosing a dictionary or priority queue [Unverified]" }
cards:
  - { front: "How do you build an O(1) LRU cache?", back: "A hash map from key to list node, plus a doubly linked list ordered by recency. The map finds the node, the list moves it to the front and drops the tail." }
  - { front: "Why a doubly linked list, not a singly linked one?", back: "To unlink a node you already hold in O(1) you must reach its predecessor. A back pointer gives it without walking from the head." }
  - { front: "How does a min-stack find the minimum in O(1)?", back: "Store with every pushed value the smallest value seen so far at that depth. Popping removes both, so the minimum is always the top's second field." }
  - { front: "How does a randomised set delete in O(1)?", back: "Keep items in an array plus a map from item to index. To delete, swap the item with the last one, update the map and pop the end." }
  - { front: "How does a time-based key-value store answer 'value at time t'?", back: "Keep each key's values in order of time and binary-search for the latest timestamp that is at most t: O(log n)." }
  - { front: "Fixed-window versus token-bucket rate limiter?", back: "A fixed window counts per clock minute and allows a double burst at a boundary. A token bucket refills steadily and allows a controlled burst." }
core:
  idea: 'A "design a data structure" question is a list of operations with required speeds. Choose a plain structure for each operation, then connect them so that one operation updates all of them. Each structure covers what another is bad at.'
  formulas:
    - tex: '\text{hash map} + \text{doubly linked list} \Rightarrow \text{LRU cache with } O(1) \text{ get and put}'
      label: 'The model answer'
  conditions:
    - 'You state the operations and the speed target first, before choosing anything'
    - 'Every operation has a structure that already does it fast; the work is keeping them in step'
    - 'Capacity, time and memory are bounded, so something must be evicted or expired'
    - 'The code is single-threaded; concurrency is a separate, later question'
  sign: 'The commonest bug is updating one structure and forgetting the other: the map says the key exists but the list has dropped it.'
outcomes:
  - 'Turn a question into a table of operations and target speeds'
  - 'Choose a structure for each operation from the catalogue'
  - 'Build an LRU cache, a min-stack, a hit counter and a randomised set'
  - 'Choose between a fixed window and a token bucket for a rate limiter'
  - 'Extend the pattern to LFU and to time-based stores, and name its common bugs'
opener:
  story: |
    Swipe up on your phone and you see the last few apps you used. Open one more than the phone can keep alive and the one you touched longest ago quietly disappears. You never see the phone searching for it.

    Now imagine the same decision made by a server that keeps a million recent web pages in memory and handles a hundred thousand requests a second. Each request must find the page, and mark it "just used". When memory is full, it must also find the page nobody has touched for the longest time. If either step takes a scan of the million entries, the server melts.

    So how do you keep a million things in order of "last used" and still find any one of them in an instant?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Cards in order of recent use, the oldest falling off the end"><text x="14" y="30" style="font-size:11px;fill:var(--muted)">most recent</text><text x="236" y="30" style="font-size:11px;fill:var(--muted)">oldest</text><g style="stroke:var(--ink);stroke-width:1.5"><rect x="14" y="44" width="52" height="70" rx="8" style="fill:var(--c)"/><rect x="78" y="44" width="52" height="70" rx="8" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface))"/><rect x="142" y="44" width="52" height="70" rx="8" style="fill:color-mix(in srgb,var(--c) 20%,var(--surface))"/><rect x="206" y="44" width="52" height="70" rx="8" style="fill:var(--surface);stroke-dasharray:4 3"/></g><path d="M66 79 L78 79 M130 79 L142 79 M194 79 L206 79" style="stroke:var(--ink);stroke-width:1.5;fill:none"/><path d="M232 124 L232 170" style="stroke:var(--bad);stroke-width:2;fill:none"/><text x="196" y="188" style="font-size:11px;fill:var(--bad)">evicted when full</text><text x="22" y="84" style="font-size:12px;fill:var(--surface)">map</text><text x="86" y="84" style="font-size:12px;fill:var(--ink)">chat</text><text x="150" y="84" style="font-size:12px;fill:var(--ink)">cam</text><text x="214" y="84" style="font-size:12px;fill:var(--muted)">game</text><path d="M20 210 C60 170 60 150 40 118" style="stroke:var(--c);stroke-width:1.5;fill:none"/><text x="14" y="228" style="font-size:11px;fill:var(--c)">use it: jump to the front</text></svg>'
life:
  - 'Your phone''s recent-apps list and your browser''s cache of pages both forget the least recently used item first.'
  - 'A web server limits how many requests one user may send per minute, so one noisy client cannot starve the rest. That is a rate limiter.'
  - 'A "trending now" counter that shows how many people clicked in the last five minutes is a hit counter with a sliding window.'
  - 'A shuffle button that must pick a random song from a playlist where songs are added and removed all the time is a randomised set.'
  - 'Version history ("show me this document as it was last Tuesday") is a time-based key-value store.'
models:
  - name: 'Two tools, two jobs'
    text: 'When one tool is slow at something, add a second tool that is fast at exactly that, and keep them in step. A kitchen has a fridge for storage and a counter for work: neither is good at both.'
  - name: 'Say the speed target first'
    text: 'A vague goal ("make it fast") cannot be designed for. A number ("one lookup in under a millisecond") can. In money, in cooking times and in project plans, naming the target turns a wish into a plan.'
  - name: 'Forgetting is a feature'
    text: 'Anything with a limit (memory, attention, a desk) must decide what to drop. Choosing a rule in advance (oldest, least used, lowest value) beats deciding in a panic.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both answer "where is this key?" in one step, which is the job the map does inside every design here.'
    differs: 'A plain hash table forgets nothing and keeps no order; the designs in this lesson add an order (recency, time, count) on top.'
  - leaf: 'cs/linked-lists'
    name: 'Linked lists'
    same: 'Moving or removing a node you already hold is a few pointer changes, which is what makes "jump to the front" cheap.'
    differs: 'A list alone must be walked to find a node; the hash map supplies the direct handle.'
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'LRU is one of the standard eviction policies of every cache.'
    differs: 'Production caches also handle expiry, size in bytes and many threads; this lesson builds the core and leaves those out.'
  - leaf: 'cs/heaps'
    name: 'Heaps and priority queues'
    same: 'When the rule is "evict the smallest or soonest", a heap is the other structure to consider.'
    differs: 'A heap finds the extreme in O(1) but cannot cheaply reorder an item that has just been used.'
next:
  q: 'You can now build the box. But an interviewer may say "now design the whole product, say Instagram, in 45 minutes". How do you even begin when there are no operations listed?'
  leaf: 'cs/iv-design-framework'
  name: 'A framework for any design question'
symbols:
  - s: 'O(1)'
    means: 'constant time: the work does not grow with the number of items'
  - s: 'O(\log n)'
    means: 'logarithmic time: doubling the items adds one step, as in binary search'
  - s: 'O(n)'
    means: 'linear time: the work grows in step with the number of items'
  - s: 'n'
    means: 'number of items stored (count)'
  - s: 'k'
    means: 'capacity of a cache: the most items it may hold (count)'
---

:::hook
q: Your cache holds a million pages. You need "find a page" and "find the least recently used page" both in one step. Which pair of tools do you pick?
options: ["A sorted array", "A hash map and a doubly linked list", "Just a hash map, and scan it when full"]
answer: 1
right: Yes. The map finds any page at once. The list keeps pages in order of use, so the oldest sits at the tail, and a page you hold can be unlinked and moved to the front in a few pointer changes.
wrong: A sorted array makes inserting and moving items cost O(n). A map alone cannot say which entry is oldest without a scan. Each tool is missing exactly what the other has.
:::

## The question in disguise {lvl=1 id=s-disguise label="Foundations"}

The question sounds like "design an LRU cache" or "design a hit counter". Hidden inside it is something simpler: a **list of operations, each with a speed target**. Everything else is choosing tools.

Take your phone's recent apps. Operations: *open an app* (find it, mark it newest) and *make room* (find the oldest). If the list holds five apps, scanning is fine. If it holds a million, scanning ten thousand times a second is not. The size of the data and the speed target decide the design.

So the first move, always, is to **write the operations down** before drawing anything:

| Operation | Needs to be |
|---|---|
| `get(key)`: return the value, mark it newest | $O(1)$ |
| `put(key, value)`: store it, mark it newest | $O(1)$ |
| evict: drop the oldest when full | $O(1)$ |

:::qc lvl=1
q: Why write down the operations and target speeds before choosing a structure?
options: ["It looks professional", "The right structure depends on which operations must be fast", "Interviewers dislike code"]
answer: 1
right: Yes. A structure is good or bad only relative to the operations you need.
wrong: Think about why a sorted array is great for searching and poor for inserting. Different operations, different best tool.
:::

## Pick structures by the operations you need {lvl=2 id=s-catalogue label="SDE-1"}

Each plain structure is fast at a few things. Match the operations to the tools:

| If you need... | Reach for | Cost |
|---|---|---|
| Is this key here? Value for a key? | hash map or set | $O(1)$ |
| Newest or oldest item, add and remove at the ends | deque (double-ended queue) | $O(1)$ |
| Move or remove an item you already hold | doubly linked list | $O(1)$ |
| Smallest or largest item now | heap | $O(1)$ to peek, $O(\log n)$ to change |
| Items in sorted order, nearest key, ranges | sorted array with binary search, or a balanced tree | $O(\log n)$ |
| A random item, uniformly | array (index at random) | $O(1)$ |
| Minimum so far, as items come and go in stack order | stack carrying the running minimum | $O(1)$ |
| Sum or count over a range of positions | prefix sums, Fenwick tree | $O(1)$ or $O(\log n)$ |

When one structure covers some operations and fails others, **combine two** and keep them consistent. Every design in this lesson is that move.

## LRU cache {lvl=2 id=s-lru label="SDE-1"}

An **LRU cache** (least recently used) holds at most $k$ items. Reading or writing an item makes it the newest. Adding a new item to a full cache evicts the oldest.

The map gives the node for any key. The doubly linked list keeps nodes from newest (front) to oldest (tail). Both point at the same nodes, so using a key means: find the node via the map, unlink it, relink it at the front.

:::figure caption="Map entries point into the list; the list holds the order. Use a key and its node jumps to the front; the tail is evicted."
<svg viewBox="0 0 340 170" role="img" aria-label="Hash map pointing into a doubly linked list"><g style="stroke:var(--ink);stroke-width:1.2"><rect x="10" y="20" width="60" height="22" style="fill:var(--surface)"/><rect x="10" y="48" width="60" height="22" style="fill:var(--surface)"/><rect x="10" y="76" width="60" height="22" style="fill:var(--surface)"/><rect x="100" y="110" width="50" height="34" rx="6" style="fill:var(--c)"/><rect x="170" y="110" width="50" height="34" rx="6" style="fill:var(--surface)"/><rect x="240" y="110" width="50" height="34" rx="6" style="fill:var(--surface)"/></g><text x="18" y="35" style="font-size:11px;fill:var(--ink)">a</text><text x="18" y="63" style="font-size:11px;fill:var(--ink)">b</text><text x="18" y="91" style="font-size:11px;fill:var(--ink)">c</text><text x="112" y="131" style="font-size:12px;fill:var(--ink)">c</text><text x="182" y="131" style="font-size:12px;fill:var(--ink)">a</text><text x="252" y="131" style="font-size:12px;fill:var(--ink)">b</text><path d="M70 87 C95 90 100 100 112 110 M70 31 C130 40 190 60 195 110 M70 59 C140 70 250 70 265 110" style="stroke:var(--muted);fill:none"/><path d="M150 122 L170 122 M220 122 L240 122 M170 134 L150 134 M240 134 L220 134" style="stroke:var(--ink);fill:none"/><text x="100" y="102" style="font-size:10px;fill:var(--c)">newest</text><text x="246" y="162" style="font-size:10px;fill:var(--bad)">oldest: evict</text><text x="10" y="14" style="font-size:10px;fill:var(--muted)">map: key to node</text></svg>
:::

Why **doubly** linked? To unlink a node you must reach the node before it. A back pointer gives that in one step; a singly linked list would have to walk from the head. Two **sentinel** nodes (dummy head and tail) remove the special cases for empty and one-item lists.

```python
class Node:
    def __init__(self, k=0, v=0):
        self.k, self.v = k, v
        self.prev = self.next = None

class LRU:
    def __init__(self, cap):
        self.cap, self.map = cap, {}
        self.head, self.tail = Node(), Node()      # sentinels
        self.head.next, self.tail.prev = self.tail, self.head
```

Two small helpers do all the pointer work; `get` and `put` only call them:

```python
    def _remove(self, n):
        n.prev.next, n.next.prev = n.next, n.prev
    def _push_front(self, n):
        n.prev, n.next = self.head, self.head.next
        self.head.next.prev = n
        self.head.next = n
    def get(self, k):
        if k not in self.map: return -1
        n = self.map[k]; self._remove(n); self._push_front(n)
        return n.v
    def put(self, k, v):
        if k in self.map: self._remove(self.map[k])
        n = self.map[k] = Node(k, v); self._push_front(n)
        if len(self.map) > self.cap:
            old = self.tail.prev; self._remove(old); del self.map[old.k]
```

Read it as: *find, unlink, relink at the front; if over capacity, unlink the tail and delete it from the map too.* The node stores its own key so that the map entry can be removed on eviction. In Python you can also use `collections.OrderedDict` with `move_to_end`, but interviewers usually want the long version.

:::qc lvl=2
q: A cache of capacity 3 receives put 1, put 2, put 3, get 1, put 4. Which key is evicted?
options: ["1", "2", "3"]
answer: 1
right: Yes. After get 1 the order, newest first, is 1, 3, 2. Key 2 is the oldest, so adding 4 evicts it.
wrong: Write the order after each step, newest first. Reading key 1 moved it to the front.
:::

## Min-stack and hit counter {lvl=2 id=s-small label="SDE-1"}

**Min-stack**: a stack with `push`, `pop`, `top` and `get_min`, all $O(1)$. A plain stack finds the minimum only by scanning. The trick: with every value, also store the **smallest value at or below it** in the stack. Popping removes both, so the previous minimum is already waiting underneath.

```python
class MinStack:
    def __init__(self):
        self.s = []                       # pairs: (value, minimum so far)
    def push(self, x):
        m = min(x, self.s[-1][1]) if self.s else x
        self.s.append((x, m))
    def pop(self):
        return self.s.pop()[0]
    def get_min(self):
        return self.s[-1][1]
```

**Hit counter**: record hits and answer "how many hits in the last 300 seconds?". Time only moves forward, so the old hits are always at the front of a queue. Add new hits at the back; before counting, drop from the front everything older than the window.

```python
from collections import deque
class HitCounter:
    def __init__(self, window=300):
        self.q, self.w = deque(), window
    def hit(self, t):
        self.q.append(t)
    def count(self, t):
        while self.q and self.q[0] <= t - self.w:
            self.q.popleft()
        return len(self.q)
```

Each hit enters and leaves once, so the cost per call is $O(1)$ **amortised**. If a million hits arrive in one second, store `(second, count)` pairs instead, so memory depends on the window, not on traffic.

## Randomised set {lvl=3 id=s-random label="SDE-2"}

Needed: `add(x)`, `remove(x)` and `pick()` returning a uniformly random item, all $O(1)$. An array gives the random pick (choose an index). A map gives "is it here, and where?". The only trouble is deleting from the middle of an array, which shifts everything. The trick: **swap the doomed item with the last item, then pop the end**.

```python
import random
class RandomSet:
    def __init__(self):
        self.a, self.pos = [], {}         # items, and item -> index
    def add(self, x):
        if x in self.pos: return False
        self.pos[x] = len(self.a); self.a.append(x); return True
    def remove(self, x):
        if x not in self.pos: return False
        i, last = self.pos.pop(x), self.a.pop()
        if i < len(self.a):               # x was not the last item
            self.a[i] = last; self.pos[last] = i
        return True
    def pick(self):
        return random.choice(self.a)
```

Order does not matter in a set, so moving the last item into the gap is harmless. The map must be updated for the moved item: forgetting that line is the classic bug.

## Time-based key-value store {lvl=3 id=s-time label="SDE-2"}

`set(key, value, time)` and `get(key, time)` returning the value stored at the latest time that is **at most** `time`. Think of document history. If writes arrive in increasing time order, each key's history is a **sorted** list, and "latest at or before $t$" is a binary search.

```python
import bisect
class TimeMap:
    def __init__(self):
        self.d = {}                       # key -> (times, values)
    def set(self, k, v, t):
        ts, vs = self.d.setdefault(k, ([], []))
        ts.append(t); vs.append(v)
    def get(self, k, t):
        ts, vs = self.d.get(k, ([], []))
        i = bisect.bisect_right(ts, t)    # items with time <= t
        return vs[i - 1] if i else ""
```

`set` is $O(1)$ and `get` is $O(\log n)$ in that key's history. If writes can arrive out of order, use `bisect.insort` ($O(n)$ because of the shift) or a balanced tree. State that assumption aloud.

## Rate limiters {lvl=3 id=s-rate label="SDE-2"}

A **rate limiter** says "allowed" or "blocked" so that a user makes at most some number of requests per time. Three common designs:

| Design | Idea | Weakness |
|---|---|---|
| Fixed window | One counter per clock minute, reset at each minute | A user can send a full quota at 0:59 and another at 1:00: double the limit in two seconds |
| Sliding-window log | Keep a queue of recent timestamps (the hit counter!) | Memory grows with the limit |
| Token bucket | A bucket refills at a steady rate; each request takes a token | Needs a little arithmetic; the burst size is a parameter |

The **token bucket** is the usual answer. Tokens arrive at `rate` per second up to a cap, and a request spends one. Instead of a timer, compute the refill when the request arrives.

```python
import time
class TokenBucket:
    def __init__(self, rate, burst):
        self.rate, self.cap = rate, burst
        self.tokens, self.last = burst, time.monotonic()
    def allow(self):
        now = time.monotonic()
        self.tokens = min(self.cap, self.tokens + (now - self.last) * self.rate)
        self.last = now
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
```

One bucket per user sits in a hash map. For many servers the buckets move to a shared store such as Redis [Inference: a common choice, not the only one], and the check-and-update must be a single atomic step, or two servers will both spend the last token.

:::qc lvl=3
q: A fixed-window limiter allows 100 requests per minute. What is the most a user can send in 2 seconds that straddle a window boundary?
options: ["100", "200", "50"]
answer: 1
right: Yes. 100 in the last second of one window and 100 in the first second of the next. A token bucket avoids this.
wrong: The counter resets at the boundary. What does the user do just before and just after it?
:::

## LFU cache {lvl=4 id=s-lfu label="SDE-2+"}

**LFU** evicts the **least frequently** used item, breaking ties by oldest use. A heap would give $O(\log n)$. For $O(1)$, keep one ordered list of keys **per use-count**, plus the smallest count currently present. Using a key moves it from bucket $f$ to bucket $f+1$.

```python
from collections import defaultdict, OrderedDict
class LFU:
    def __init__(self, cap):
        self.cap, self.minf = cap, 0
        self.kv = {}                              # key -> (value, count)
        self.buckets = defaultdict(OrderedDict)   # count -> keys, oldest first
    def _touch(self, k):
        v, f = self.kv[k]
        del self.buckets[f][k]
        if not self.buckets[f] and self.minf == f: self.minf += 1
        self.kv[k] = (v, f + 1); self.buckets[f + 1][k] = None
    def get(self, k):
        if k not in self.kv: return -1
        self._touch(k); return self.kv[k][0]
```

```python
    def put(self, k, v):
        if self.cap == 0: return
        if k in self.kv:
            self.kv[k] = (v, self.kv[k][1]); self._touch(k); return
        if len(self.kv) >= self.cap:
            old, _ = self.buckets[self.minf].popitem(last=False)
            del self.kv[old]
        self.kv[k] = (v, 1); self.buckets[1][k] = None; self.minf = 1
```

A new key always has count 1, so `minf` resets to 1. This is the part to say aloud in an interview.

## The variants table {lvl=3 id=s-variants label="SDE-2"}

| Variant | Signal in the statement | Structures |
|---|---|---|
| LRU cache | "evict the least recently used", $O(1)$ | hash map + doubly linked list |
| LFU cache | "least frequently used, ties by recency" | map + buckets of ordered keys |
| Min or max stack | "get the minimum in $O(1)$" with push and pop | stack of pairs (value, running minimum) |
| Hit counter | "count events in the last $T$ seconds" | queue of timestamps (or per-second counts) |
| Rate limiter | "allow at most $N$ per period" | counters, timestamp queue or token bucket |
| Randomised set | "insert, delete, random pick, all $O(1)$" | array + map from item to index |
| Time-based store | "value at or before time $t$" | per-key sorted history + binary search |
| Running median | "median of a stream" | two heaps, a max-heap and a min-heap |
| Queue by two stacks | "implement a queue using stacks" | in-stack and out-stack, refilled when empty |
| Snapshot or versioned array | "read as it was at version $v$" | per-index history, binary search by version |

## Classic problem types {lvl=3 id=s-types label="SDE-2"}

Described in our own words; each maps to one variant above.

| Problem type | Variant |
|---|---|
| Keep the $k$ most recently read pages of a website in memory | LRU |
| Keep the $k$ most popular items, not the most recent | LFU |
| A stack that also reports its smallest element instantly | Min-stack |
| Count the clicks in the past five minutes, live | Hit counter |
| Block a client that sends more than 10 requests a second | Token bucket |
| Allow only 5 login attempts per hour per account | Sliding-window log |
| Play a random song from a playlist that changes | Randomised set |
| Draw random winners without repeating, deleting each | Randomised set |
| Show a configuration as it was at 3 p.m. yesterday | Time-based store |
| Report the middle value of a stream of readings | Two heaps |
| Build a queue when only stacks are available | Two stacks |
| Browser back and forward buttons | Two stacks (or a list with a cursor) |
| Autocomplete the most used completions for a prefix | Trie with counts (see Tries) |

## Common bugs {lvl=2 id=s-bugs label="SDE-1"}

- Updating the list but not the map (or the other way round), so one says "present" and the other "gone".
- Forgetting that `put` on an **existing** key must also refresh its recency.
- Evicting but not deleting the key from the map: the node needs to remember its key.
- Skipping sentinels, then special-casing the empty and one-item lists and getting them wrong.
- Fixed-window limiters and timestamp queues with an off-by-one at the window edge: decide "older than $T$" or "at least $T$ old" and test it.
- Assuming one thread. A real cache needs a lock or sharded locks; say so, and move on unless asked.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A design-a-structure question is a table of operations with speed targets. Write it first. {lvl=1}
2. Match each operation to a plain structure, then combine two and keep them consistent. {lvl=2}
3. LRU is a hash map plus a doubly linked list: find, unlink, relink at the front, evict the tail. {lvl=2}
4. Min-stack stores the running minimum with every value; the hit counter is a queue that drops old timestamps. {lvl=2}
5. Randomised set: array plus index map, deleting by swapping with the last item. {lvl=3}
6. Time-based store: sorted history per key and binary search; rate limiter: token bucket beats a fixed window. {lvl=3}
7. LFU in $O(1)$ needs buckets of ordered keys per count and a tracked minimum count. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- State assumptions: single thread, increasing timestamps, capacity at least 1. Interviewers mark silence on assumptions as a gap. {lvl=2}
- Do not reach for a heap when items are reordered after creation; a heap cannot cheaply move an item. {lvl=3}
- "Amortised O(1)" is fine for queues of timestamps, but say why: each item enters and leaves once. {lvl=2}
- In a distributed setting a local cache or counter is no longer the truth; check-and-update must be atomic. {lvl=4}
- Test with a capacity of 1, an empty structure, a repeated key and a key evicted then added again. {lvl=1}
:::
