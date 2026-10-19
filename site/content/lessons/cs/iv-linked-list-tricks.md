---
title: Linked list tricks
summary: A chain of nodes has no index, so a handful of pointer habits do the work that arithmetic does on arrays.
ncert: []
up_to: SDE-2
builds_on: [Linked lists, Stacks and queues, Hash tables, Two pointers and sliding window]
notes_prompt: Explain to a friend how a slow and a fast runner on a circular track prove there is a loop, and how the meeting point leads you to the start of it.
margin:
  - kind: history
    title: History
    text: 'The slow-and-fast-pointer cycle finder is usually credited to Robert Floyd and is called the tortoise and hare algorithm. [Unverified] The date and original source vary between accounts.'
  - kind: tip
    title: Interview favourite
    text: 'Draw the nodes as boxes and arrows before you write a line. Most linked-list bugs are arrows pointed in the wrong order, and the picture shows it.'
  - kind: olympiad
    title: Invariants
    text: 'Every pointer routine has an invariant such as "everything before prev is already reversed". Stating it in one sentence is the fastest way to get the loop right.'
books:
  - { title: "G. Laakmann McDowell, Cracking the Coding Interview", ref: "Linked lists chapter [Unverified: Ch. 2]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Linked lists, in the elementary data structures chapter [Unverified]" }
cards:
  - { front: "What is a dummy head (sentinel) for?", back: "A fake node placed before the real head, so that inserting or deleting at the front is the same code as anywhere else. Return dummy.next at the end." }
  - { front: "How do you find the middle in one pass?", back: "Move slow by one node and fast by two. When fast reaches the end, slow is at the middle (the second middle for even lengths)." }
  - { front: "How do you detect a cycle, and find where it starts?", back: "Fast and slow meet inside the loop if one exists. Then restart one pointer from the head: moving both one step at a time, they meet at the loop start." }
  - { front: "The loop body of reversing a list in place?", back: "Save next, point the current node back at prev, then advance prev and current. Order matters: save before you overwrite." }
  - { front: "How do you remove the n-th node from the end in one pass?", back: "Advance a lead pointer n steps, then move lead and trail together until lead is at the last node. Trail is just before the node to delete." }
  - { front: "What two structures make an LRU cache O(1)?", back: "A hash map from key to node, and a doubly linked list ordered by recent use. The map finds the node, the list moves it to the front and evicts the tail." }
core:
  idea: 'A linked list gives you only "this node and the next one". Five habits cover almost every problem: a dummy head, slow and fast pointers, in-place reversal, merging by splicing, and a hash map beside the list when you need to find a node quickly.'
  formulas:
    - tex: 'a = kc - b'
      label: 'Cycle start: distance to the loop equals whole laps minus the meeting offset'
    - tex: 'v_{\text{fast}} = 2\,v_{\text{slow}}'
      label: 'Fast moves two nodes per slow move: the middle after n/2 steps'
  conditions:
    - 'Nodes are reached only by following next (singly linked), so there is no jumping to an index'
    - 'The list ends in nothing (None), or in a loop back to an earlier node'
    - 'You are allowed to change the links (otherwise copy to an array first)'
    - 'Memory for the answer is O(1) when asked, so use pointers rather than a table'
  sign: 'Save the next pointer before you overwrite it, and test on empty lists, one-node lists and even and odd lengths.'
outcomes:
  - 'Use a dummy head to remove special cases at the front of a list'
  - 'Find the middle, detect a loop and locate its start with slow and fast pointers'
  - 'Reverse a list, or part of it, in place'
  - 'Merge sorted lists and combine reversal with the middle to test palindromes or reorder'
  - 'Build an LRU cache from a hash map and a doubly linked list'
opener:
  story: |
    Open your phone's **recent apps** screen. Use WhatsApp: it jumps to the front. Use Maps: it jumps to the front, and WhatsApp slides back one place. When memory runs low, the app at the very back is closed first.

    There might be a hundred apps in that list, and yet moving one to the front feels instant. Moving an item to the front of an *array* means shifting everything in between by one place. So the phone must be doing something smarter than shuffling.

    If the apps are linked like train coaches, you can unhook one coach and re-couple it at the front by changing only a few couplings. But to *find* the right coach you need something else too. What?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A chain of app boxes with one box lifted out and re-linked at the front, and a lookup table pointing to boxes"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="14" y="100" width="54" height="34" rx="6"/><rect x="92" y="100" width="54" height="34" rx="6"/><rect x="170" y="100" width="54" height="34" rx="6"/><rect x="248" y="100" width="54" height="34" rx="6"/></g><g style="font-size:10px;fill:var(--ink)"><text x="22" y="121">Maps</text><text x="98" y="121">Chat</text><text x="176" y="121">Mail</text><text x="254" y="121">Photos</text></g><g style="fill:none;stroke:var(--ink);stroke-width:1.5"><path d="M68 117 L90 117"/><path d="M146 117 L168 117"/><path d="M224 117 L246 117"/></g><text x="14" y="90" style="font-size:10px;fill:var(--muted)">front: most recent</text><text x="236" y="90" style="font-size:10px;fill:var(--muted)">back: closed first</text><path d="M196 100 C196 50 40 50 40 98" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 3"/><text x="94" y="58" style="font-size:10px;fill:var(--c)">Mail used: re-couple at front</text><rect x="14" y="170" width="150" height="56" rx="6" style="fill:none;stroke:var(--rule)"/><text x="22" y="190" style="font-size:10px;fill:var(--ink)">name to box (lookup table)</text><text x="22" y="208" style="font-size:10px;fill:var(--muted)">Mail to the box, in one step</text></svg>'
life:
  - 'The recent-apps list, a browser''s back-history and a music player''s "play next" queue are chains where items are moved or inserted cheaply.'
  - 'Undo history in an editor and the free blocks tracked by a memory manager are often kept as linked lists.'
  - 'A train is a literal linked list: you reverse it by re-coupling, not by moving every passenger.'
  - 'A caching layer in front of a database evicts the least recently used entry with exactly the list-plus-map design of this lesson [Inference: a common design, not any one company''s documented one].'
models:
  - name: 'Change the connections, not the items'
    text: 'Rearranging who points to whom is cheaper than moving everything. Org charts and supply chains change by re-wiring links; the people and warehouses stay where they are.'
  - name: 'A fast and a slow runner reveal the shape'
    text: 'Two runners at different speeds learn things neither could alone: the track''s midpoint, whether it is a loop. Comparing a quick signal with a slow one is how many diagnostics work.'
  - name: 'A sentinel removes special cases'
    text: 'A dummy first element means the first position behaves like all the others. Laws with a "default rule" and software with a default value use the same trick to avoid exceptions.'
links:
  - leaf: 'cs/linked-lists'
    name: 'Linked lists'
    same: 'Same nodes, same next pointers; this lesson only adds habits for working with them.'
    differs: 'The earlier lesson explains what a list is and its costs; this one is a catalogue of problem families with templates.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'The LRU cache pairs a hash map with the list: the map answers "where is it?", the list answers "how recent is it?".'
    differs: 'A map alone has no order; a list alone has no fast lookup. Each fixes the other''s gap.'
  - leaf: 'cs/two-pointers-and-sliding-window'
    name: 'Two pointers and sliding window'
    same: 'Two pointers at different speeds or gaps do the job of an index.'
    differs: 'Arrays allow opposite ends and jumps; a singly linked list moves one way only, so the pointers start together.'
next:
  q: 'A list has one next arrow. A tree node has two: left and right. Can the same habits (a recursive call at each arrow) solve problems on branching shapes?'
  leaf: 'cs/iv-trees-recursion'
  name: 'Trees and recursion'
symbols:
  - s: 'n'
    means: 'number of nodes in the list (count)'
  - s: 'a'
    means: 'steps from the head to the start of the loop (count)'
  - s: 'b'
    means: 'steps from the loop start to where the two pointers meet (count)'
  - s: 'c'
    means: 'number of nodes in the loop (count)'
  - s: 'k'
    means: 'a whole number of laps, or the group size in the group-reversal problem'
  - s: 'O(1)'
    means: 'constant extra memory or time: does not grow with the list'
---

:::hook
q: You have 100 apps in a recents list. To move one to the front of an array you shift everything in between. With a linked list plus a lookup table, about how many link changes does a move need?
options: ["About 100", "A handful, a few pointer changes whatever the length", "About 100 squared"]
answer: 1
right: Right. Unhook the node (two pointer changes) and re-hook it at the front (a few more). The lookup table finds the node, so there is no scanning. That is the idea behind an LRU cache.
wrong: Think of train coaches: to move one coach to the front you change only the couplings at its old and new place. How many couplings is that, whatever the train length?
:::

## The signal {lvl=1 id=s-signal label="Foundations"}

The clue words:

- *linked list*, *in place*, *constant extra memory*: use pointer tricks, not an array copy.
- *middle*, *every other node*, *loop*, *the n-th from the end*: slow and fast pointers, or a lead and a trail.
- *reverse*, *palindrome*, *reorder*: in-place reversal, usually after finding the middle.
- *merge*, *sort*: splice nodes without copying.
- *most recently used*, *evict*: list plus hash map.

A node is just a value and a pointer to the next node.

```python
class Node:
    def __init__(self, val, nxt=None):
        self.val, self.next = val, nxt
```

Because there is no index, "the 5th item" costs 5 steps, not 1. Everything below works around that.

## The dummy head {lvl=2 id=s-dummy label="SDE-1"}

Deleting a node needs the node *before* it. For the first node there is no node before it, so you write a special case, and special cases are where bugs live. The fix is a **dummy head** (also called a sentinel): a fake node placed in front of the real head. Now every real node, including the first, has a predecessor.

```python
def remove_all(head, x):
    dummy = Node(0, head)
    cur = dummy
    while cur.next:
        if cur.next.val == x:
            cur.next = cur.next.next      # skip it
        else:
            cur = cur.next
    return dummy.next
```

Read it as: "look one ahead; if the next node must go, link around it; otherwise step forward". Note that after a deletion `cur` does *not* move, since the new next node has not been inspected yet. Always return `dummy.next`, because the real head may have been deleted.

The same dummy helps when building a new list (it is the "tail" you append to) and in merging.

## Slow and fast pointers {lvl=2 id=s-fastslow label="SDE-1"}

Two runners start at the head. The slow one moves one node per step and the fast one moves two. When the fast runner reaches the end, the slow one has covered exactly half the distance, so it stands at the middle.

```python
def middle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    return slow            # the second middle if the length is even
```

Read it as: "fast moves twice as far, so when fast finishes, slow is half way". It is one pass and $O(1)$ memory.

**Detecting a loop.** If the list loops back on itself, the end never comes. The fast runner laps the slow one inside the loop, as on a circular track, and they meet. If there is no loop, fast just falls off the end.

**Finding where the loop starts.** Let $a$ be the steps from the head to the loop start, $c$ the loop length and $b$ the steps from the loop start to the meeting point. Slow has walked $a + b$. Fast has walked twice that, and also $a + b$ plus some whole number $k$ of extra laps:

$$2(a+b) = (a+b) + kc \quad\Rightarrow\quad a = kc - b$$

Read it as: "the distance from the head to the loop start equals some whole laps minus the offset $b$". Starting from the meeting point, $kc - b$ further steps bring you around to the loop start. So restart one pointer at the head, move both one step at a time, and they meet exactly at the loop start.

```python
def cycle_start(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow is fast:
            p = head
            while p is not slow:
                p, slow = p.next, slow.next
            return p
    return None
```

**The n-th node from the end.** Move a `lead` pointer $n$ steps ahead, then move `lead` and `trail` together. When `lead` stands on the last node, `trail` stands just before the node to delete. Use a dummy head so that deleting the first node works.

```python
def remove_nth_from_end(head, n):
    dummy = Node(0, head)
    lead = trail = dummy
    for _ in range(n):
        lead = lead.next
    while lead.next:
        lead, trail = lead.next, trail.next
    trail.next = trail.next.next
    return dummy.next
```

:::qc lvl=2
q: Which node does middle() return for the list 1, 2, 3, 4, 5, 6?
options: ["The node with value 3", "The node with value 4", "The node with value 6"]
answer: 1
right: Right. Slow moves 1, 2, 3 steps while fast moves 2, 4, then reaches the end after the third round, so slow stands on the fourth node: value 4 (the second middle).
wrong: Trace both pointers round by round. Fast stops when it has no next node. How far has slow gone then?
:::

## Reversal in place {lvl=2 id=s-reverse label="SDE-1"}

To reverse a chain, turn every arrow around. At each node you need three things: the node itself, the node already reversed behind it (`prev`), and the next node you are about to lose, which you must save *before* you overwrite the arrow.

```python
def reverse(head):
    prev = None
    while head:
        nxt = head.next        # save
        head.next = prev       # turn the arrow
        prev, head = head, nxt # step
    return prev
```

Read it as: "peel the first node off the old list and push it on the front of the new one". The invariant: everything before `head` is already reversed and starts at `prev`. It is $O(n)$ time, $O(1)$ memory.

To reverse only positions $m$ to $n$, walk to the node before position $m$, then repeatedly take the node after the segment's first node and move it to just after the "before" node.

```python
def reverse_between(head, m, n):
    dummy = Node(0, head)
    before = dummy
    for _ in range(m - 1):
        before = before.next
    cur = before.next
    for _ in range(n - m):
        mover = cur.next
        cur.next = mover.next
        mover.next = before.next
        before.next = mover
    return dummy.next
```

:::figure caption="Reversal in place: three steps for one node. Save next, turn the arrow back, then advance both markers."
<svg viewBox="0 0 320 130" role="img" aria-label="Before and after turning one arrow: the node now points back to prev">
<g style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)">
<rect x="20" y="20" width="44" height="26" rx="5"/><rect x="100" y="20" width="44" height="26" rx="5"/><rect x="180" y="20" width="44" height="26" rx="5"/>
<rect x="20" y="84" width="44" height="26" rx="5"/><rect x="100" y="84" width="44" height="26" rx="5"/><rect x="180" y="84" width="44" height="26" rx="5"/>
</g>
<g style="font-size:11px;fill:var(--ink)"><text x="30" y="37">prev</text><text x="110" y="37">head</text><text x="190" y="37">nxt</text><text x="30" y="101">prev</text><text x="110" y="101">head</text><text x="190" y="101">nxt</text><text x="240" y="37" style="fill:var(--muted)">before</text><text x="240" y="101" style="fill:var(--muted)">after</text></g>
<g style="stroke:var(--ink);stroke-width:1.5;fill:none"><path d="M64 33 L98 33"/><path d="M144 33 L178 33"/><path d="M98 97 L64 97" style="stroke:var(--mat);stroke-width:2.5"/><path d="M144 97 L178 97"/></g>
</svg>
:::

## Merging {lvl=2 id=s-merge label="SDE-1"}

Two sorted lists become one by always taking the smaller front node. Use a dummy node as the tail you append to, and splice the existing nodes; no copying.

```python
def merge(a, b):
    dummy = tail = Node(0)
    while a and b:
        if a.val <= b.val:
            tail.next, a = a, a.next
        else:
            tail.next, b = b, b.next
        tail = tail.next
    tail.next = a or b          # attach whichever list is left
    return dummy.next
```

Read it as: "the smaller front goes next; when one list runs out, attach the rest of the other whole". The cost is $O(n + m)$ time and $O(1)$ extra memory.

**Sorting a list** in $O(n \log n)$ uses merge sort: find the middle with slow and fast, cut the list in two, sort each half recursively, merge. Merge sort fits lists because merging needs no random access, and the recursion costs only $O(\log n)$ stack. (A heap holds the fronts when merging many lists: next lesson but one.)

## Combinations {lvl=3 id=s-combo label="SDE-2"}

Most medium problems are two of the habits glued together.

- **Palindrome list.** Find the middle, reverse the second half, compare the halves node by node. Optionally reverse it back to restore the list.
- **Reorder** $L_0, L_1, \dots, L_n$ into $L_0, L_n, L_1, L_{n-1}, \dots$: middle, reverse the second half, then interleave the two halves.
- **Add two numbers** stored one digit per node: walk both lists with a dummy tail and a carry.
- **Where two lists meet** (they share a tail): walk pointer $p$ along list A then, on reaching its end, along list B; walk $q$ along B then A. Both travel the same total $|A| + |B|$ steps, so they arrive at the shared node together (or both at the end, if there is none).

**Reversing in groups of $k$.** Reverse each block of $k$ nodes, leave a short last block alone, and re-link the blocks. The trick is to find the $k$-th node first (so you know whether a full block exists), reverse between `group_prev` and `group_next`, then move `group_prev` to the old first node of the block.

```python
def reverse_k_group(head, k):
    dummy = Node(0, head)
    group_prev = dummy
    while True:
        kth = group_prev
        for _ in range(k):
            kth = kth.next
            if not kth:
                return dummy.next
        group_next = kth.next
        prev, cur = group_next, group_prev.next
        while cur is not group_next:
            cur.next, prev, cur = prev, cur, cur.next
        first = group_prev.next
        group_prev.next = kth
        group_prev = first
```

Read it as: "if a full block of $k$ exists, reverse it so that it ends by pointing at what follows, then hook the block in". The reversed block starts at `kth`, and the old first node `first` becomes the new predecessor of the next block.

:::qc lvl=3
q: In the shared-tail trick, list A has 5 nodes before the shared part, list B has 3, and the shared part has 4 nodes. How many steps does each pointer take before they meet at the shared node?
options: ["8", "9", "12"]
answer: 0
right: Right. Pointer p walks A's 5 unshared nodes, then all of B's 3 unshared nodes: 8 steps and it is at the first shared node. Pointer q walks B's 3, then A's 5: also 8. They meet.
wrong: Count only the unshared nodes. p walks all of A's unshared nodes then all of B's unshared nodes; q walks them in the other order. How many in total?
:::

## List plus map: the LRU cache {lvl=3 id=s-lru label="SDE-2"}

A **least recently used (LRU) cache** keeps the $c$ most recently used items; when it is full, the one unused for longest is evicted. Both `get` and `put` must be $O(1)$.

Two jobs, two structures. A **hash map** from key to node answers "where is it?" in one step. A **doubly linked list** (each node has `prev` and `next`) answers "which is oldest?": new and used items go to the front, so the tail is the eviction candidate. A doubly linked list lets you unhook a node knowing only the node, with no scan for its predecessor. Two sentinel nodes, head and tail, remove the edge cases.

```python
class DNode:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRU:
    def __init__(self, cap):
        self.cap, self.map = cap, {}
        self.head, self.tail = DNode(), DNode()      # sentinels
        self.head.next, self.tail.prev = self.tail, self.head
```

The two small list moves:

```python
    def _unlink(self, n):
        n.prev.next, n.next.prev = n.next, n.prev

    def _push_front(self, n):
        n.next, n.prev = self.head.next, self.head
        self.head.next.prev = n
        self.head.next = n
```

Then the two public operations:

```python
    def get(self, key):
        if key not in self.map:
            return -1
        n = self.map[key]
        self._unlink(n); self._push_front(n)
        return n.val

    def put(self, key, val):
        if key in self.map:
            n = self.map[key]; n.val = val
            self._unlink(n); self._push_front(n)
            return
        if len(self.map) == self.cap:
            old = self.tail.prev
            self._unlink(old); del self.map[old.key]
        n = DNode(key, val)
        self.map[key] = n; self._push_front(n)
```

Note that the node stores its own `key`, so that when the tail node is evicted we know which map entry to delete. Python's `OrderedDict` offers `move_to_end` and `popitem(last=False)`, which is the same design in a library; interviewers usually want to see the nodes. The full "design a data structure" treatment is in a later lesson of this pillar.

## The catalogue {lvl=3 id=s-catalogue label="SDE-2"}

| Variant | Signal | Change to the template |
|---|---|---|
| Dummy head | delete or insert at the front | fake node before head; return dummy.next |
| Slow and fast | middle, loop | fast moves two; test fast and fast.next |
| Lead and trail | n-th from the end | lead n steps ahead; trail stops just before the target |
| In-place reversal | reverse, palindrome, reorder | save next, turn arrow, advance |
| Splice merge | merge, sort | dummy tail; attach the leftover list |
| Reversal in blocks | groups of k | find the k-th first; keep group_prev |
| List plus map | recency, eviction, O(1) find | map key to node; doubly linked list |

The **problem types**, each described in our own words:

1. **Remove every node holding a value.** Dummy head.
2. **Delete the $n$-th node from the end.** Lead and trail with a dummy head.
3. **Find the middle node.** Slow and fast.
4. **Does the list loop?** Slow and fast meeting.
5. **Where does the loop begin?** Restart one pointer at the head after the meeting.
6. **Reverse the whole list.** In-place reversal.
7. **Reverse only a section.** Walk to the node before it, then move nodes to the front of the section.
8. **Merge two sorted lists.** Splice merge.
9. **Sort a list in $O(n \log n)$.** Split at the middle, sort halves, merge.
10. **Is the list a palindrome?** Middle, reverse the second half, compare.
11. **Interleave from both ends** (first, last, second, second last, ...). Middle, reverse, interleave.
12. **Reverse in groups of $k$.** Reversal in blocks.
13. **Add two numbers held digit by digit.** Dummy tail and a carry.
14. **Where do two lists join?** Swap-heads walk, or lead-and-trail on the length difference.
15. **Least-recently-used cache.** List plus map.

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- **Overwriting `next` before saving it.** The rest of the list is lost.
- **Forgetting the dummy head,** then crashing when the first node is deleted or returning a stale head.
- **Moving `cur` after a deletion.** The new next node has not been checked; keep `cur` where it is.
- **Testing `fast.next` without testing `fast`.** The loop condition must be `fast and fast.next`.
- **Not handling empty and one-node lists.** Test them first.
- **Not cutting the list in two** before sorting or comparing halves, which leaves a loop or a duplicate tail.
- **Comparing nodes by value instead of identity** when asking "is this the same node?" Use `is`.
- **Missing the key in the LRU node,** so eviction cannot delete from the map.
- **Order of pointer updates** in a doubly linked list insertion: update the neighbours' pointers while you can still read the old ones.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A linked list has no index; costs are counted in steps along the arrows. {lvl=1}
2. A dummy head makes the first node behave like every other. {lvl=2}
3. Slow and fast pointers find the middle and detect a loop in one pass and O(1) memory. {lvl=2}
4. After the pointers meet, restarting one at the head leads both to the loop start: a = kc - b. {lvl=3}
5. Reversal: save next, turn the arrow, advance. Merge: dummy tail, take the smaller front. {lvl=2}
6. Hard problems combine two habits: middle plus reversal, or reversal inside blocks. {lvl=3}
7. LRU cache = hash map + doubly linked list, O(1) for get and put. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Draw boxes and arrows first, then write the code. {lvl=1}
- Always save next before turning an arrow. {lvl=2}
- Loop condition for fast: `fast and fast.next`. {lvl=2}
- Use a dummy head whenever the head may change. {lvl=2}
- Test empty, one-node, two-node, even and odd lengths. {lvl=2}
- A doubly linked list needs the node to store its key if a map points to it. {lvl=3}
:::
