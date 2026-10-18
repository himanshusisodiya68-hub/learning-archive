---
title: Stacks and queues
summary: How Ctrl+Z knows what to undo first, how a ticket line stays fair, and two simple rules that power browsers, compilers and search.
ncert: []
up_to: SDE-2
builds_on: [Arrays and dynamic arrays, Linked lists]
notes_prompt: Explain to a friend the difference between a stack of plates and a queue at a ticket window, and name one thing on a computer that works like each.
margin:
  - kind: history
    title: History
    text: 'Stacks were used in early computer design to evaluate expressions and manage subroutine calls; "last in, first out" was a standard idea by the 1960s. [Unverified: exact attribution and dates]'
  - kind: tip
    title: Interview favourite
    text: 'Matching brackets, "next greater element", evaluating expressions and DFS without recursion are all stack problems. Level-by-level traversal and shortest steps in a maze are queue problems.'
  - kind: olympiad
    title: Design link
    text: 'A message queue between two services is a queue with a name and a disk behind it. When the producer is faster than the consumer, the queue grows: the design question is what to do about it (backpressure).'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 10 Elementary Data Structures: stacks and queues [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 11 Stream Processing: message brokers and queues [Unverified]" }
  - { title: "R. Arpaci-Dusseau and A. Arpaci-Dusseau, Operating Systems: Three Easy Pieces", ref: "Chapters on address spaces, where the call stack lives [Unverified]" }
cards:
  - { front: "What is a stack and its two main operations?", back: "A pile where only the top is touched. Push puts an item on top; pop takes the top item off. Last in, first out (LIFO)." }
  - { front: "What is a queue and its two main operations?", back: "A line. Enqueue adds at the back; dequeue removes from the front. First in, first out (FIFO)." }
  - { front: "Where does a computer use a stack to run your program?", back: "The call stack: each function call pushes a frame (its local variables and where to return), and finishing the call pops it. Recursion that never stops overflows it." }
  - { front: "Why use collections.deque instead of a list for a queue in Python?", back: "list.pop(0) shifts every remaining item, O(n). A deque removes from the front in O(1)." }
  - { front: "How does a ring buffer work?", back: "A fixed array with a head index and a size. The next free slot is (head + size) mod capacity, so indexes wrap around and nothing ever shifts." }
  - { front: "Which search uses a queue and which uses a stack?", back: "Breadth-first search (BFS) uses a queue and explores in rings of distance; depth-first search (DFS) uses a stack, explicitly or through recursion, and dives deep first." }
core:
  idea: 'A stack lets you touch only its top, so the last item in is the first out (LIFO); a queue adds at the back and removes from the front, so the first item in is the first out (FIFO). Each operation costs O(1) when built on a linked list, a deque or a ring buffer.'
  formulas:
    - tex: '\text{stack: } \text{push},\ \text{pop} \text{ at the same end}'
      label: 'LIFO: last in, first out'
    - tex: '\text{queue: } \text{enqueue at the back},\ \text{dequeue at the front}'
      label: 'FIFO: first in, first out'
    - tex: '\text{tail} = (\text{head} + \text{size}) \bmod m'
      label: 'Ring buffer: next free slot (m slots)'
  conditions:
    - 'You only ever need the most recent item (stack) or the oldest waiting item (queue)'
    - 'Each operation is implemented so it never shifts the other items (deque, linked list or ring buffer)'
    - 'For a ring buffer: a fixed capacity, and a rule for what happens when it is full'
  sign: 'In Python, list.pop() from the end is O(1) but list.pop(0) from the front is O(n): never use a plain list as a queue for large data.'
outcomes:
  - 'Say which of stack or queue fits a situation, from the order items must come out'
  - 'Explain how undo, browser Back and the call stack work'
  - 'Use a stack to check brackets and a queue to explore a maze by rings'
  - 'Build a queue efficiently with a deque, two stacks or a ring buffer'
  - 'Recognise the monotonic stack and sliding-window deque patterns'
opener:
  story: |
    You type a sentence, delete a word, paste a paragraph. Now press **Ctrl+Z**. The paste vanishes. Press it again and the deleted word returns. Press it once more and your sentence is back the way it was before you did anything. The editor undid your actions in exact reverse order, newest first.

    Compare that with the line at a railway ticket window. The person who arrived first is served first, and no one jumps ahead, however recently they arrived. Both are just lists of things waiting. The only difference is which end you take from.

    That one choice, newest first or oldest first, turns out to power a huge part of computing. What is it, and where is it hiding inside your programs?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A stack of plates with arrows going in and out of the top, and a line of people moving left to right through a window"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="30" y="150" width="80" height="14" rx="4"/><rect x="30" y="134" width="80" height="14" rx="4"/><rect x="30" y="118" width="80" height="14" rx="4"/><rect x="30" y="102" width="80" height="14" rx="4" style="fill:var(--c)"/></g><path d="M70 56 L70 94" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M64 86 L70 96 L76 86" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="70" y="48" style="font-size:11px;fill:var(--c);text-anchor:middle">push / pop here</text><text x="70" y="188" style="font-size:11px;fill:var(--ink);text-anchor:middle">stack: last in, first out</text><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink);stroke-width:1.5"><circle cx="150" cy="140" r="9"/><circle cx="178" cy="140" r="9"/><circle cx="206" cy="140" r="9"/><circle cx="234" cy="140" r="9" style="fill:var(--c)"/></g><rect x="262" y="118" width="12" height="44" style="fill:var(--ink)"/><path d="M122 140 L146 140" style="fill:none;stroke:var(--muted);stroke-width:1.6"/><path d="M142 135 L148 140 L142 145" style="fill:none;stroke:var(--muted);stroke-width:1.6"/><text x="150" y="110" style="font-size:10px;fill:var(--muted)">join here</text><text x="226" y="110" style="font-size:10px;fill:var(--c)">served here</text><text x="214" y="188" style="font-size:11px;fill:var(--ink);text-anchor:middle">queue: first in, first out</text><text x="160" y="224" style="font-size:10px;fill:var(--muted);text-anchor:middle">same items, a different end to take from</text></svg>'
life:
  - 'Ctrl+Z (undo) and the browser Back button: each action or page you visit goes on a stack; Back and undo pop the latest one.'
  - 'A stack of plates at a dhaba, a pile of unwashed vessels, or a pile of books on a desk: you take the top one.'
  - 'A ticket window, a printer''s job list, a call-centre line: first come, first served.'
  - 'Your phone''s keyboard buffer, a video player''s buffered seconds and a router''s packet buffers all hold waiting items in a queue or ring buffer.'
  - 'Every function call in a program uses the call stack; a crash with "stack overflow" means that stack ran out of room.'
models:
  - name: 'Newest first or oldest first'
    text: 'When many things wait, the rule for which goes next decides the character of the system. Oldest first is fair; newest first is the right order for undoing, backtracking and finishing the latest interruption before returning to the earlier task. Name the rule before designing the process.'
  - name: 'Nested interruptions'
    text: 'You are cooking, the phone rings, then someone knocks. You deal with the door first, then the phone, then go back to cooking. Life interrupts like a stack: the last thing started is the first to finish.'
  - name: 'Buffers smooth bursts'
    text: 'A queue between a fast sender and a slow receiver absorbs short bursts, like the waiting hall at a station. But if arrivals stay faster than service, the queue only grows; it hides the mismatch, it does not fix it.'
links:
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'Recursion runs on the call stack: each call pushes a frame, each return pops one. Any recursion can be rewritten with an explicit stack.'
    differs: 'The call stack is managed for you and has a fixed size; your own stack lives in ordinary memory and can grow much larger.'
  - leaf: 'cs/graph-algorithms'
    name: 'BFS and DFS'
    same: 'The only difference between the two searches is the container: a queue gives breadth-first, a stack gives depth-first.'
    differs: 'The queue explores in rings, finding shortest paths in unweighted graphs; the stack dives and backs up, which suits exploring every possibility.'
  - leaf: 'cs/message-queues'
    name: 'Message queues and events'
    same: 'A message queue is a FIFO line between programs: producers add messages, consumers take them in order.'
    differs: 'It lives across machines, stores messages on disk, and must handle failures, retries and duplicates.'
next:
  q: 'A stack and a queue both give you the next item in a fixed order, but neither can answer "is Asha in this line?" without looking at every person. Is there a structure that answers "is this key here?" in about one step, however many keys there are?'
  leaf: 'cs/hash-tables'
  name: 'Hash tables'
symbols:
  - s: 'push, pop'
    means: 'push puts an item on top of a stack; pop removes and returns the top item'
  - s: 'enqueue, dequeue'
    means: 'enqueue adds an item at the back of a queue; dequeue removes the one at the front'
  - s: 'LIFO, FIFO'
    means: 'last in first out (a stack); first in first out (a queue)'
  - s: 'm'
    means: 'number of slots in a ring buffer (count)'
  - s: '\text{head}'
    means: 'index of the oldest item in a ring buffer (a whole number from 0 to m - 1)'
  - s: '\bmod'
    means: 'remainder after division; it wraps an index back to 0 after the last slot'
  - s: 'O(1)'
    means: 'constant time: the work does not grow with the number of items'
---

:::hook
q: Here's the puzzle. In the order A, B, C you push three plates on a pile, and then take two off. Which plates do you have, and which one is left?
options: ["A and B taken, C left", "C and B taken, A left", "A and C taken, B left"]
answer: 1
right: Right. The last plate placed (C) is the first one lifted, then B. Only A remains. A queue would have served A first: same items, opposite rule.
wrong: Think of a pile of plates: you can only lift the top one. Which plate was put there last?
:::

## Two rules for taking things out {lvl=1 id=s-rules label="Foundations"}

Imagine a pile of plates. You can only add a plate on top and only take the top plate off. The plate placed last comes off first: this is **last in, first out**, **LIFO**, and the structure is a **stack**. Adding is **push**, removing is **pop**.

Now imagine a line at a ticket window. People join at the back and are served from the front: **first in, first out**, **FIFO**, a **queue**. Adding is **enqueue**, removing is **dequeue**.

```python
stack = []
stack.append("A"); stack.append("B"); stack.append("C")   # push
stack.pop()        # "C", the newest comes out first

from collections import deque
line = deque(["A", "B", "C"])    # A joined first
line.popleft()     # "A", the oldest comes out first
```

Both take O(1) per operation. A Python list works well as a stack because adding and removing at the **end** never shifts anything. As a queue it fails: `pop(0)` shifts everything behind it, O(n), as the arrays lesson showed. `deque` is built for removing at either end in O(1).

:::qc lvl=1
q: A stack starts empty. You push 1, push 2, pop, push 3, pop. What is on the stack now?
options: ["1", "2", "3"]
answer: 0
right: Right. After the pops, 2 and then 3 have gone, leaving 1.
wrong: Trace it: [1], [1,2], pop removes 2 giving [1], push 3 gives [1,3], pop removes 3. What remains?
:::

## Where stacks hide {lvl=1 id=s-stacks label="Foundations"}

**Undo.** Each action is pushed onto a stack. Undo pops the top action and reverses it. Redo is a second stack that receives what you undo. **Browser Back** works the same way: the pages you visited are a stack.

**The call stack.** When your program calls a function, the computer must remember where to return. It pushes a **frame** holding the function's local variables and the return point; when the function ends the frame is popped. Function A calls B calls C: the frames sit A, B, C with C on top, and C must finish first. That is exactly LIFO. If a function keeps calling itself without ending, frames pile up until memory for the stack runs out: a **stack overflow**. (The recursion lesson builds on this.)

:::figure caption="The call stack while function C runs, called by B, called by A. Frames are pushed on a call and popped on return, so the newest call always finishes first."
<svg viewBox="0 0 340 170" role="img" aria-label="Three stacked frames labelled A, B and C with C on top, and arrows for call and return">
<g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--ink);stroke-width:1.3"><rect x="110" y="120" width="120" height="30"/><rect x="110" y="88" width="120" height="30"/><rect x="110" y="56" width="120" height="30" style="fill:var(--c)"/></g>
<g style="font-size:12px;text-anchor:middle"><text x="170" y="140" style="fill:var(--ink)">frame of A</text><text x="170" y="108" style="fill:var(--ink)">frame of B</text><text x="170" y="76" style="fill:var(--surface)">frame of C (running)</text></g>
<g style="fill:none;stroke:var(--muted);stroke-width:1.6"><path d="M70 120 L70 60"/><path d="M64 68 L70 58 L76 68"/><path d="M270 60 L270 120"/><path d="M264 112 L270 122 L276 112"/></g>
<g style="font-size:10px;fill:var(--muted)"><text x="20" y="96">call: push</text><text x="240" y="150">return: pop</text></g>
</svg>
:::

**Matching brackets.** Is `{[()]}` well formed, and `([)]` not? Scan left to right. Push every opening bracket. For a closing bracket, pop the top and check it is the matching opener. The most recent unclosed opener must be the one that closes first: stack.

```python
def balanced(s):
    pairs = {")": "(", "]": "[", "}": "{"}
    st = []
    for ch in s:
        if ch in "([{":
            st.append(ch)
        elif ch in pairs:
            if not st or st.pop() != pairs[ch]:
                return False
    return not st      # nothing left unclosed
```

:::qc lvl=1
q: A browser visits pages P1, P2, P3, then you press Back once. Which page do you see?
options: ["P1", "P2", "P3"]
answer: 1
right: Right. P3 is popped off the history stack, so the top is now P2.
wrong: Back undoes the most recent visit. After leaving P3, which page is on top?
:::

## Where queues hide {lvl=2 id=s-queues label="SDE-1"}

**Fair waiting.** A print server, a customer-support system and a food-delivery dispatcher keep requests in FIFO order, so the one waiting longest is served first.

**Breadth-first search (BFS).** To find the fewest steps from a start cell to a target in a maze, explore the start's neighbours (distance 1), then their unvisited neighbours (distance 2), and so on, in rings. A queue produces rings naturally: neighbours are added at the back, and the front is always the oldest, nearest cell.

```python
from collections import deque
def steps(grid, start, goal):          # grid: set of open cells (r, c)
    q, dist = deque([start]), {start: 0}
    while q:
        r, c = q.popleft()
        if (r, c) == goal:
            return dist[(r, c)]
        for nb in ((r+1,c), (r-1,c), (r,c+1), (r,c-1)):
            if nb in grid and nb not in dist:
                dist[nb] = dist[(r, c)] + 1
                q.append(nb)
    return -1
```

Swap `popleft` for `pop()` (take the newest) and the same code becomes depth-first search: it dives down one corridor before trying others. The graph-algorithms lesson takes this much further.

:::qc lvl=2
q: What single change turns the queue-based BFS above into a depth-first search?
options: ["Take from the back (use a stack) instead of the front", "Sort the neighbours first", "Use a set instead of a dictionary"]
answer: 0
right: Right. Taking the newest item instead of the oldest makes the search dive deep along one path.
wrong: BFS and DFS differ in only one thing: which waiting cell is taken next, oldest or newest.
:::

## Building them well {lvl=2 id=s-build label="SDE-1"}

Three ways to make a fast queue (or stack):

- **Linked list with head and tail pointers:** enqueue at the tail, dequeue at the head, each O(1) (the linked-lists lesson).
- **Deque** (double-ended queue): add and remove at both ends in O(1). Python's `deque` and the standard libraries of most languages provide one.
- **Two stacks:** a queue from two LIFO stacks. Push new items onto stack `inbox`. To dequeue, if `outbox` is empty, pour all of `inbox` into it (reversing the order), then pop from `outbox`. Each item is moved at most twice in its life, so dequeue is O(1) amortised.

```python
class Queue:
    def __init__(self):
        self.inbox, self.outbox = [], []
    def enqueue(self, x):
        self.inbox.append(x)
    def dequeue(self):
        if not self.outbox:
            while self.inbox:
                self.outbox.append(self.inbox.pop())
        return self.outbox.pop()      # assumes the queue is not empty
```

:::qc lvl=2
q: In the two-stack queue, items 1, 2, 3 are enqueued, then one dequeue happens. Which item comes out, and why?
options: ["3, because it is on top of inbox", "1, because pouring reverses the order so the oldest ends up on top of outbox", "2, the middle one"]
answer: 1
right: Right. Pouring inbox [1,2,3] into outbox reverses it to [3,2,1] with 1 on top, so the first one in is the first one out.
wrong: Pouring from one stack into another reverses the order. Which item ends up on top of outbox?
:::

## Ring buffers {lvl=3 id=s-ring label="SDE-2"}

Sometimes you need a queue of **fixed size** and no allocation at all: audio samples from a microphone, keystrokes, network packets, a log of the last 1,000 events. A **ring buffer** uses a plain array of $m$ slots, an index `head` of the oldest item and a count `size`.

$$\text{tail} = (\text{head} + \text{size}) \bmod m$$

Read it as: "the next free slot is `size` steps after the head, wrapping round to 0 after the last slot". Enqueue writes at `tail` and increases `size`; dequeue reads at `head`, moves `head` to `(head + 1) mod m` and decreases `size`. Nothing ever shifts. With 8 slots, head = 6 and size = 5, the next free slot is $(6+5) \bmod 8 = 3$: the buffer has wrapped.

When the buffer is full you must choose: refuse the new item, block the writer until there is room, or overwrite the oldest item. Streams of sensor readings often overwrite; a payment system must not. The choice is a design decision, not a detail.

## Patterns for interviews {lvl=3 id=s-patterns label="SDE-2"}

**Monotonic stack.** For each number in a list, find the next larger number to its right. Walk the list while keeping a stack of values still waiting for a larger one. For each new number $x$, pop every waiting value smaller than $x$ (they have found their answer), then push $x$. Each number is pushed once and popped once, so the whole thing is O(n) although it contains a loop inside a loop. Variants solve "days until a warmer temperature" and "largest rectangle in a histogram".

**Sliding-window deque.** The maximum of every window of $k$ consecutive numbers can be kept with a deque of indexes whose values decrease from front to back: drop from the back anything smaller than the new item, drop from the front anything outside the window, and the front is the maximum. O(n) overall instead of O(nk).

**Producer and consumer.** A fast producer and slow consumer joined by a queue need a **bound** on the queue's size and a policy when it is full (block, drop or push back on the sender). An unbounded queue just moves the failure to the day memory runs out.

:::qc lvl=3
q: The monotonic-stack solution has a while loop inside a for loop. Why is it still O(n) overall?
options: ["Each element is pushed once and popped at most once, so total pops are at most n", "The inner loop never runs", "Python optimises it"]
answer: 0
right: Right. Count the total work, not the loop shape: n pushes and at most n pops in the whole run.
wrong: Add up how many times any single element can be popped over the whole run, not per outer iteration.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A stack is last in, first out (push and pop at the top); a queue is first in, first out (enqueue at the back, dequeue at the front). {lvl=1}
2. Undo, browser Back and the call stack are stacks; ticket lines and print queues are queues. {lvl=1}
3. Brackets match with a stack; BFS explores by rings with a queue; swapping the queue for a stack gives DFS. {lvl=2}
4. Use a deque, linked list or ring buffer so every end operation is O(1); a list's pop(0) is O(n). {lvl=2}
5. Two stacks make a queue with O(1) amortised dequeue; a ring buffer uses (head + size) mod m. {lvl=3}
6. Monotonic stacks and sliding-window deques give O(n) solutions; every queue between systems needs a bound and a full-queue policy. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never use `list.pop(0)` as a queue operation on large data; use `collections.deque`. {lvl=2}
- Popping from an empty stack or queue is an error: check `if stack:` first. {lvl=1}
- Closing brackets with an empty stack, or leftover openers at the end, both mean "not balanced". {lvl=2}
- A ring buffer has an off-by-one trap: full and empty both look like head equal to tail unless you also track the size. {lvl=3}
- An unbounded queue hides overload until memory runs out; always decide what happens when it is full. {lvl=3}
:::
