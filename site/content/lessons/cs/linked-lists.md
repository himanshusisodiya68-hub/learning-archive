---
title: Linked lists
summary: A treasure hunt where every clue points to the next, and why that makes squeezing something into the middle effortless but jumping to the end slow.
ncert: []
up_to: SDE-2
builds_on: [Arrays and dynamic arrays, Variables and memory]
notes_prompt: Explain to a friend how a treasure hunt, where each clue only says where the next one is hidden, is a data structure, and what it is good and bad at.
margin:
  - kind: history
    title: History
    text: 'Linked lists were central to early AI programs: Newell, Shaw and Simon''s Logic Theorist (mid-1950s) used list processing, and Lisp, whose name means "list processor", followed soon after. [Unverified: exact dates]'
  - kind: tip
    title: Interview favourite
    text: 'Two pointers moving at different speeds (slow and fast) find the middle of a list and detect a loop in one pass with no extra memory. Reversing a list in place is asked constantly.'
  - kind: olympiad
    title: Real-world use
    text: 'The Linux kernel has a ready-made circular doubly linked list used all over its code, because inserting and removing a known node never moves anything else. [Inference: from public kernel source, not re-checked here]'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 10 Elementary Data Structures: linked lists [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Section on linked data structures [Unverified]" }
  - { title: "R. Bryant and D. O'Hallaron, Computer Systems: A Programmer's Perspective", ref: "Chapters on memory and the cache [Unverified]" }
cards:
  - { front: "What is a linked list node?", back: "A small box holding a value and a pointer (an address) to the next node. The list is just a chain of these boxes; the last one points to nothing (None)." }
  - { front: "Cost of inserting after a node you already hold?", back: "O(1): create the new node, point it at the old next, then point the held node at it. Nothing else moves." }
  - { front: "Cost of reaching the k-th node?", back: "O(k): there are no addresses to calculate, you must follow the pointers from the head one by one." }
  - { front: "Array or linked list: which is better for walking through all items on a real machine?", back: "Usually the array: its items are side by side, so the cache brings several at once. Linked nodes can be scattered across memory, so each hop may be a slow trip to RAM." }
  - { front: "How do slow and fast pointers detect a cycle?", back: "Move one pointer 1 step and the other 2 steps at a time. If there is a loop they must eventually land on the same node; if not, the fast one reaches None." }
  - { front: "Why does a doubly linked list help when deleting?", back: "Each node knows its previous and next, so a node can be removed knowing only itself, in O(1). With a singly linked list you also need the node before it." }
core:
  idea: 'A linked list stores each item in its own node together with a pointer to the next node, so the order lives in the pointers, not in the memory layout. Inserting or deleting at a node you already hold changes two pointers and costs O(1), but reaching the k-th item means following k pointers.'
  formulas:
    - tex: '\text{new.next} \leftarrow \text{node.next};\; \text{node.next} \leftarrow \text{new}'
      label: 'Insert after a node (order matters)'
    - tex: '\text{node.next} \leftarrow \text{node.next.next}'
      label: 'Delete the node after a given node'
  conditions:
    - 'You already hold a pointer to the node next to the spot you are changing'
    - 'The two pointer updates are done in the right order, or the rest of the list is lost'
    - 'The list ends with an empty pointer (None) so a walk knows when to stop'
  sign: 'Insert O(1) means once you are at the spot. Getting to the spot is usually the O(n) part, so a linked list is not automatically faster than an array.'
outcomes:
  - 'Describe a node, a pointer and a chain, and draw a list with insertion and deletion'
  - 'Write insert-after, delete-after and traversal for a singly linked list'
  - 'Compare linked lists and arrays honestly, including cache behaviour'
  - 'Reverse a list and detect a cycle with slow and fast pointers'
  - 'Explain why an LRU cache pairs a hash map with a doubly linked list'
opener:
  story: |
    A treasure hunt has ten clues, and every clue has only one job: tell you where the next clue is hidden. The first is under the clock, the second behind the almirah in the next room, the third inside a shoe in the verandah. The clues are scattered all over the house, and nobody needs a map of the whole hunt.

    Now the organiser wants a new clue between clue 4 and clue 5. With a row of numbered boxes, that would mean renumbering and moving everything after it. With the treasure hunt it is almost nothing: hide the new clue anywhere, write its note to point to clue 5, and change clue 4's note to point to the new one. Done, two notes touched.

    But try the opposite: "take me to clue 9". Nobody can; you must start at clue 1 and follow the notes. Why is one of these so easy and the other so slow?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Four clue boxes joined by arrows, with a new clue being slipped in between the second and third"><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="10" y="40" width="58" height="34" rx="6"/><rect x="92" y="40" width="58" height="34" rx="6"/><rect x="200" y="40" width="58" height="34" rx="6"/></g><g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="39" y="61">clue 1</text><text x="121" y="61">clue 2</text><text x="229" y="61">clue 3</text></g><g style="fill:none;stroke:var(--muted);stroke-width:1.8"><path d="M68 57 L88 57"/><path d="M150 57 L196 57" style="stroke-dasharray:4 4"/></g><rect x="130" y="130" width="58" height="34" rx="6" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="159" y="151" style="font-size:11px;fill:var(--surface);text-anchor:middle">new clue</text><g style="fill:none;stroke:var(--c);stroke-width:2"><path d="M121 76 C121 100 150 104 155 126"/><path d="M170 128 C190 108 220 104 229 78"/></g><text x="12" y="104" style="font-size:10px;fill:var(--muted)">1. new clue points to clue 3</text><text x="12" y="118" style="font-size:10px;fill:var(--muted)">2. clue 2 points to new clue</text><text x="12" y="200" style="font-size:10px;fill:var(--muted)">two notes changed, nothing moved</text><text x="12" y="216" style="font-size:10px;fill:var(--muted)">but clue 9 means following 8 notes</text></svg>'
life:
  - 'A train: every coach is coupled to the next. Adding a coach in the middle means uncoupling one joint and coupling two, with no coach having to move to a new "position number".'
  - 'A music app''s "play next" queue and a browser''s tab history are naturally chains where you step to the next or previous item.'
  - 'Your phone''s memory allocator and operating systems keep lists of free blocks of memory, linked together.'
  - 'A chain of WhatsApp forwards or a relay race baton: each person only knows the next person.'
models:
  - name: 'Order lives in the links'
    text: 'In a scavenger hunt, the sequence is not a property of where the clues are; it is a property of who points to whom. Many real structures (org charts, supply chains, family trees) are defined by their links, not their positions.'
  - name: 'Cheap edit versus cheap access'
    text: 'No structure is best at everything. A filing cabinet with numbered drawers makes lookup instant but adding a drawer in the middle painful; a chain of notes makes insertion easy but lookup slow. Ask which action happens most before choosing.'
  - name: 'Do the order of steps carefully'
    text: 'If you cut a rope before tying the new knot, you lose the other end. Pointer updates must happen in the right order, like any step-by-step process where an earlier action destroys information a later one needs.'
links:
  - leaf: 'cs/arrays'
    name: 'Arrays and dynamic arrays'
    same: 'Both hold an ordered collection and let you walk it from first to last.'
    differs: 'An array places items side by side and reaches any item by arithmetic (fast access, slow insert); a linked list places items anywhere and joins them by pointers (fast insert at a known spot, slow access).'
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'Both explain speed: the cache loves neighbours, so walking a scattered chain of nodes can waste the cache.'
    differs: 'Big-O counts steps; the cache decides how long each step takes, and for linked lists that second factor can dominate.'
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'A linked list is itself recursive: a list is either empty, or a value followed by a smaller list.'
    differs: 'A loop is usually safer than recursion on long lists, because every recursive call uses stack space.'
next:
  q: 'A linked list can add and remove only at its ends very cheaply, if you remember both ends. Two simple rules about which end you use give two of the most important structures in computing: one that undoes your typing and one that keeps a fair line. What are they?'
  leaf: 'cs/stacks-and-queues'
  name: 'Stacks and queues'
symbols:
  - s: 'node'
    means: 'one box in the chain, holding a value and a pointer'
  - s: 'pointer'
    means: 'an address that tells you where another node lives (in code, the name next)'
  - s: 'head'
    means: 'the first node; the only one you can reach without following a pointer'
  - s: 'None'
    means: 'the empty pointer at the end of the list (Python''s "nothing")'
  - s: 'O(1)'
    means: 'constant time: the work does not grow with the length of the list'
  - s: 'O(n)'
    means: 'linear time: the work grows in step with the number of nodes'
---

:::hook
q: Here's the puzzle. A chain of one million nodes, and you are holding a pointer to node number 500,000. How much work to insert a new node right after it?
options: ["About 500,000 steps, to shift everything", "About 2 steps: change two pointers", "About a million steps, to find the end first"]
answer: 1
right: Right. You are already standing there, so you change two pointers and nothing else moves. (The catch, which this lesson is about, is how you got to node 500,000.)
wrong: Nothing needs to shift, because order is stored in the pointers, not in the memory positions. And you are already at the spot, so there is nothing to find.
:::

## Boxes with a note inside {lvl=1 id=s-node label="Foundations"}

In an array, order comes from position: the boxes sit side by side. A **linked list** gets order a different way. Each item lives in its own small box, called a **node**, and each node carries a note, the **pointer**, saying where the next node is. The last note says "nothing" (None). To use the list you only need to remember the first node, the **head**.

```python
class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next       # the pointer

head = Node("Kesariya", Node("Tum Hi Ho", Node("Naatu Naatu")))
```

To read the whole list, start at the head and follow the notes until you hit None:

```python
node = head
while node is not None:
    print(node.value)
    node = node.next
```

Reaching the $k$-th node means $k$ hops, so it costs **O(k)**; there is no way to jump. That is the price of having no fixed layout.

:::qc lvl=1
q: To read the 8th node of a linked list you must
options: ["Calculate its address from the head", "Follow 7 pointers from the head", "Start from the last node"]
answer: 1
right: Right. Nodes are scattered, so the only way to find the 8th is to hop through the first seven.
wrong: Addresses are not regular in a linked list, so arithmetic will not work. The head is the only node you are given.
:::

## Squeezing in and cutting out {lvl=1 id=s-edit label="Foundations"}

Here is the payoff. To insert a new node after a node you already hold, do two things: point the new node at what comes next, then point your node at the new node.

```python
def insert_after(node, value):
    node.next = Node(value, node.next)   # new node takes over node's old next

def delete_after(node):
    node.next = node.next.next           # skip over the next node
```

Read the first as: "the new node points to the old next, and my node points to the new node". Both cost a couple of steps, however long the list is: **O(1)**. Nothing else moves.

:::figure caption="Insert after node B. Step 1 (dashed): the new node X points to C. Step 2: B points to X. Do them in the other order and C is lost."
<svg viewBox="0 0 360 130" role="img" aria-label="Nodes A B C in a chain with a new node X inserted between B and C by two pointer changes">
<g style="font-size:12px;text-anchor:middle">
<g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.3"><rect x="14" y="20" width="56" height="30" rx="5"/><rect x="104" y="20" width="56" height="30" rx="5"/><rect x="250" y="20" width="56" height="30" rx="5"/></g>
<rect x="150" y="84" width="56" height="30" rx="5" style="fill:var(--c);stroke:var(--ink);stroke-width:1.3"/>
<g style="fill:var(--ink)"><text x="42" y="40">A</text><text x="132" y="40">B</text><text x="278" y="40">C</text></g>
<text x="178" y="104" style="fill:var(--surface)">X</text>
<path d="M70 35 L102 35" style="fill:none;stroke:var(--muted);stroke-width:1.6"/>
<path d="M160 35 L248 35" style="fill:none;stroke:var(--muted);stroke-width:1.6;stroke-dasharray:3 4"/>
<path d="M190 82 C230 70 255 60 270 52" style="fill:none;stroke:var(--c);stroke-width:1.8;stroke-dasharray:5 3"/>
<path d="M140 52 C145 70 160 78 170 82" style="fill:none;stroke:var(--c);stroke-width:1.8"/>
<g style="font-size:10px;fill:var(--muted);text-anchor:start"><text x="220" y="100">1. X.next = C (dashed)</text><text x="220" y="114">2. B.next = X (solid)</text></g>
</g>
</svg>
:::

The same idea works for deleting. To delete the node after B, make B point to the node after that. The skipped node is now unreachable, and the system's memory manager reclaims it.

:::qc lvl=1
q: You write `node.next = new` and then `new.next = node.next`. What goes wrong?
options: ["Nothing, the order does not matter", "The new node ends up pointing at itself and the rest of the list is lost", "The list becomes twice as long"]
answer: 1
right: Right. After the first line, node.next is already new, so the second line makes new point to itself. Always give the new node its destination first.
wrong: Trace it: after the first line, what does node.next hold? Use that value in the second line.
:::

## Linked list or array? {lvl=2 id=s-compare label="SDE-1"}

| Operation | Array | Linked list |
|---|---|---|
| Read item $i$ | O(1) | O(i), walk from head |
| Insert or delete at a node you hold | O(n), shift items | O(1) |
| Add at the front | O(n) | O(1) |
| Add at the end | O(1) amortised | O(1) if you keep a tail pointer, else O(n) |
| Find a value | O(n) | O(n) |
| Extra memory per item | none | one pointer (8 bytes on a 64-bit machine) |

Be careful with "O(1) insert": it only counts the pointer changes, **after** you are standing at the node. If you had to walk 500,000 hops to get there, the total is O(n), no better than shifting an array. Linked lists shine when you keep hold of the nodes you will edit (as in the cache design below), or when work happens only at the front.

Memory also counts. For 1,000,000 small numbers, a linked list stores one extra 8-byte pointer per node, around 8 MB more than an array, plus bookkeeping the memory manager adds per node.

A **doubly linked list** adds a `prev` pointer to each node. Now a node can be unlinked knowing only itself (no need for its predecessor) and the list can be walked backwards, at the price of one more pointer per node and four pointer changes per insert instead of two.

## Two classic puzzles {lvl=2 id=s-puzzles label="SDE-1"}

**Reverse a list in place.** Walk once, and flip each pointer to point backwards. Keep three names: the previous node, the current node and the saved next (saved before you overwrite it).

```python
def reverse(head):
    prev = None
    while head is not None:
        nxt = head.next      # save the road ahead
        head.next = prev     # flip this pointer
        prev, head = head, nxt
    return prev              # new head
```

O(n) time, O(1) extra memory. The ordering rule from earlier appears again: save `next` before you overwrite it.

**Detect a loop** (a bad list whose last node points back into the middle). Send two runners: one steps 1 node at a time, the other 2. If there is no loop the fast one reaches None. If there is a loop, both end up circling it, and the fast one gains one step per round, so it must land on the slow one.

```python
def has_cycle(head):
    slow = fast = head
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False
```

The same two-speed trick finds the middle: when the fast runner reaches the end, the slow one is halfway.

:::qc lvl=2
q: In the slow and fast pointer method, where is the slow pointer when the fast one reaches the end of a list of 9 nodes?
options: ["Node 3", "Node 5, the middle", "Node 9"]
answer: 1
right: Right. The fast pointer covers 8 hops in 4 rounds, while the slow one covers 4 hops, landing on node 5.
wrong: The fast pointer moves twice as fast, so the slow one has covered half of the distance.
:::

## The cache problem {lvl=3 id=s-cache label="SDE-2"}

On paper arrays and linked lists tie when walking all items: both O(n). On a real machine the array usually wins by a large factor. Memory is slow, so the CPU fetches a whole cache line at a time. In an array the next several items arrive for free. A linked list's nodes were created at different moments and can sit far apart, so each hop may be a fresh slow trip to RAM, and the hardware cannot guess where the next node lives. (The memory-hierarchy lesson explains why.)

That is why many experienced engineers say "use an array by default". A linked list earns its place when you need cheap edits at **known** nodes, stable pointers to items (an array's items move when it resizes), or a structure that never has to copy.

## Hash map plus doubly linked list: an LRU cache {lvl=3 id=s-lru label="SDE-2"}

A cache keeps the most recently used items and throws away the **least recently used** one when full. We need both: find an item by key fast, and move it to "most recent" fast. A hash table finds by key in O(1) but has no order. A doubly linked list keeps order and can unlink any node in O(1), but cannot find one quickly. Together:

- the **hash map** goes from key to the list node;
- the **doubly linked list** keeps nodes from most to least recently used;
- on every get or put, the map finds the node, you unlink it and re-link it at the front, all O(1);
- when over capacity, remove the node at the back and delete its key from the map.

This is the standard answer to "design an LRU cache", and a good example of why you combine two structures, each covering the other's weakness. (The interviews pillar revisits it.) Production systems add locks, expiry and more, which this sketch leaves out.

:::qc lvl=3
q: Why does an LRU cache use a doubly linked list rather than a singly linked one?
options: ["To unlink a node it found in the map in O(1), without walking to find the node before it", "To store values twice for safety", "Because singly linked lists cannot be reversed"]
answer: 0
right: Right. To unlink a node you must repoint its predecessor. Doubly linked nodes know their predecessor, so no walk is needed.
wrong: The map hands you the node directly. What do you still need in order to remove it from the chain?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A linked list is a chain of nodes, each holding a value and a pointer to the next; the head is the only entry point. {lvl=1}
2. Reaching the k-th node costs k hops: O(k). There is no jumping. {lvl=1}
3. Insert after, or delete after, a node you hold changes two pointers: O(1). Order of the updates matters. {lvl=1}
4. An array wins on reading by index and on cache behaviour; a linked list wins on edits at known nodes and at the front. {lvl=2}
5. Slow and fast pointers find the middle and detect loops in O(n) time and O(1) memory; reversing needs three names. {lvl=2}
6. Cache-friendliness often beats Big-O ties, and an LRU cache combines a hash map with a doubly linked list. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "O(1) insertion" counts only the pointer changes. Finding the spot is O(n) unless you already hold the node. {lvl=1}
- Overwriting a pointer before saving it loses the rest of the list; save `next` first. {lvl=2}
- Forgetting the empty list and one-node cases (head is None) causes most linked-list bugs; a dummy head node before the real head removes many special cases. {lvl=2}
- Recursing over a very long list can overflow the call stack; prefer a loop. {lvl=3}
- Without a tail pointer, adding at the end is O(n) because you must walk to the last node. {lvl=2}
:::
