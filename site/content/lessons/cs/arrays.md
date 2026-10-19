---
title: Arrays and dynamic arrays
summary: How a music app jumps to song number 9,999 instantly, why adding at the front is slow, and how lists grow without ever running out of room.
ncert: []
up_to: SDE-2
builds_on: [Variables and memory, Memory hierarchy and caches]
notes_prompt: Explain to a friend why a computer can jump to the 5,000th item of a list instantly, but needs time to squeeze a new item in at the front.
margin:
  - kind: history
    title: History
    text: 'Arrays are as old as computers themselves; the first high-level language, Fortran (late 1950s), was built around numeric arrays. [Unverified: exact dates]'
  - kind: tip
    title: Interview favourite
    text: 'Whenever a problem says "in place", "without extra memory" or "sorted array", think arrays: two pointers, a write index, swapping and reversing are the whole toolbox.'
  - kind: olympiad
    title: Hidden cost
    text: 'A list.append that "costs O(1)" sometimes copies the entire list. It is cheap on average and expensive once in a while: that is the idea of amortised cost, and it appears all over system design.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 17 Amortized Analysis: dynamic tables [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Section on contiguously-allocated structures [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 3 Storage and Retrieval: why sequential layout is fast" }
cards:
  - { front: "What is an array?", back: "A row of equal-sized boxes side by side in memory. Item number i lives at (start address) + i × (box size), so jumping to any item is one calculation." }
  - { front: "Why is indexing an array O(1)?", back: "The address is computed by arithmetic, not found by searching. Item 5 and item 5,000,000 cost the same." }
  - { front: "Cost of inserting at the front of an array of n items?", back: "O(n): every existing item must shift one box to the right to make room." }
  - { front: "How does a dynamic array grow?", back: "When full, it allocates a new array about twice as big, copies everything over and carries on. Occasional O(n) copy, but O(1) per append averaged over many appends." }
  - { front: "What does amortised O(1) mean?", back: "Over any long run of operations, the total cost divided by the number of operations is a constant, even though a single operation may be expensive." }
  - { front: "Why are arrays fast in practice, beyond Big-O?", back: "Neighbouring items sit together in memory, so one trip to RAM brings several items into the cache. Walking an array is the pattern hardware likes best." }
core:
  idea: 'An array stores items in equal-sized boxes one after another, so the address of item i is computed, not searched for: reading or writing any item takes constant time. The price is that inserting or deleting in the middle shifts everything after it, and a fixed array cannot grow, so dynamic arrays double their size when full.'
  formulas:
    - tex: '\text{address}(i) = \text{start} + i \times s'
      label: 'Where item i lives (s bytes per item)'
    - tex: '1 + 2 + 4 + \dots + \tfrac{n}{2} < n'
      label: 'All the copying done by doubling adds up to less than n'
  conditions:
    - 'All items have the same size (or are stored as same-sized references)'
    - 'Items sit in one unbroken block of memory'
    - 'Counting starts at 0, so the last of n items is item n - 1'
    - 'For dynamic arrays: the capacity grows by a constant factor (such as 2), not by a fixed amount'
  sign: 'Off-by-one errors are the commonest array bug: n items have indexes 0 to n - 1, and index n is one past the end.'
outcomes:
  - 'Explain why reading item i of an array takes the same time for any i'
  - 'Say which array operations are fast and which are slow, and why'
  - 'Describe how a list grows by doubling and why append is O(1) amortised'
  - 'Use two pointers and in-place tricks on an array'
  - 'Compare doubling with growing by a fixed amount, and say why one is quadratic'
opener:
  story: |
    You open a playlist with 10,000 songs and drag the scrollbar all the way to the end. Song number 9,999 appears at once. The app did not scroll through nine thousand songs to get there; it simply knew where song 9,999 was.

    Now do the opposite. Add a new song at the very top. On a long playlist, some apps pause for a heartbeat while they do it. Adding at the end is instant, jumping anywhere is instant, but squeezing a song in at the front is not.

    Why would "go to the end" and "go to the front" feel so different, when both are just one song? The answer is how the songs sit in memory.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A row of numbered boxes in memory with an arrow jumping straight to box 9"><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="12" y="120" width="28" height="36"/><rect x="40" y="120" width="28" height="36"/><rect x="68" y="120" width="28" height="36"/><rect x="96" y="120" width="28" height="36"/><rect x="124" y="120" width="28" height="36"/><rect x="152" y="120" width="28" height="36"/><rect x="180" y="120" width="28" height="36"/><rect x="208" y="120" width="28" height="36"/><rect x="236" y="120" width="28" height="36"/><rect x="264" y="120" width="28" height="36" style="fill:var(--c)"/></g><g style="font-size:10px;fill:var(--muted);text-anchor:middle"><text x="26" y="172">0</text><text x="54" y="172">1</text><text x="82" y="172">2</text><text x="110" y="172">3</text><text x="138" y="172">4</text><text x="166" y="172">5</text><text x="194" y="172">6</text><text x="222" y="172">7</text><text x="250" y="172">8</text><text x="278" y="172">9</text></g><path d="M26 100 C26 50 278 50 278 112" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M272 104 L278 114 L284 104" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="160" y="46" style="font-size:11px;fill:var(--c);text-anchor:middle">start + 9 × size: one jump</text><text x="12" y="204" style="font-size:10px;fill:var(--muted)">boxes side by side, all the same size</text><text x="12" y="220" style="font-size:10px;fill:var(--muted)">no searching, just arithmetic</text></svg>'
life:
  - 'A train coach with numbered berths: the TC walks straight to berth 47 without counting from berth 1. That is indexing.'
  - 'A spreadsheet column, a photo (a grid of pixel values) and a song (a long run of sound samples) are all arrays.'
  - 'Every Python list, JavaScript array and Java ArrayList is a dynamic array underneath.'
  - 'A cricket scoreboard with ten batting slots; replacing the batter in slot 4 touches one slot, but inserting a new batter at position 1 means everyone shuffles down.'
models:
  - name: 'Address by arithmetic'
    text: 'If every house in a lane is the same width, house number 40 is exactly 40 widths from the gate: no knocking on doors. Whenever things are regular, a position can be calculated instead of searched for.'
  - name: 'Pay in advance, in bulk'
    text: 'Buying a monthly pass is dearer on the first day but cheaper per ride over the month. Doubling an array is the same trade: one big payment now makes the next many appends free.'
  - name: 'Slack is not waste'
    text: 'A dynamic array keeps empty room on purpose, like a cupboard with spare shelves or a bank with a cash buffer. Planned slack turns a frequent expensive event into a rare one.'
links:
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'Both rely on memory being laid out in order: an array walks neighbouring addresses, and a cache loads whole neighbouring chunks at once.'
    differs: 'The array is a way to organise data; the cache is hardware that quietly speeds up the access pattern the array creates.'
  - leaf: 'mat/geometric-progressions'
    name: 'Geometric progressions'
    same: 'The copying cost of doubling is 1 + 2 + 4 + ... : a geometric series whose total is about twice its last term.'
    differs: 'In maths the series is a thing to sum; in an array it is a hidden bill that tells you the growth rule is safe.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'A hash table is an array underneath, and resizes by doubling just like a dynamic array.'
    differs: 'An array needs you to know the index; a hash table computes the index from a key.'
next:
  q: 'An array needs one big unbroken block of memory, and inserting at the front moves everything. Is there a way to keep items in order so that adding in the middle moves nothing at all?'
  leaf: 'cs/linked-lists'
  name: 'Linked lists'
symbols:
  - s: 'i'
    means: 'index: the position of an item, counting from 0 (a whole number)'
  - s: 'n'
    means: 'number of items stored (count)'
  - s: 's'
    means: 'size of one item (bytes)'
  - s: 'O(1)'
    means: 'constant time: the work does not grow as the array grows'
  - s: 'O(n)'
    means: 'linear time: the work grows in step with the number of items'
  - s: '\text{capacity}'
    means: 'how many items the allocated block can hold before it is full (count)'
---

:::hook
q: Here's the puzzle. On a playlist of a million songs, which of these takes about the same time as on a playlist of ten songs?
options: ["Jump to song number 500,000", "Insert a new song at the very top", "Find the song called 'Kesariya' by checking each one"]
answer: 0
right: Right. Songs sit in a row of equal-sized boxes, so song 500,000 is found by arithmetic, in one step. The other two grow with the length of the playlist: shifting everything, or looking at everything.
wrong: Inserting at the top means every song moves down one place, and searching by name means looking at songs one by one. Only one of the three can be calculated instead of searched for.
:::

## One box after another {lvl=1 id=s-boxes label="Foundations"}

Computer memory is a huge street of numbered houses; each house holds one byte and has an **address**. An **array** is the simplest way to use that street: reserve a block of houses side by side and put one item in each equal-sized box, one after another.

Say each song record takes 8 houses (8 bytes) and the block starts at address 1000. Song 0 lives at 1000, song 1 at 1008, song 2 at 1016. Song 5? Do the sum: $1000 + 5 \times 8 = 1040$. No search, no asking neighbours.

$$\text{address}(i) = \text{start} + i \times s$$

Read it as: "start at the beginning, then jump $i$ boxes of size $s$". The number $i$ is the **index**, and programmers count from 0 because the first box is zero jumps from the start.

```python
songs = ["Kesariya", "Tum Hi Ho", "Naatu Naatu"]
songs[2]          # "Naatu Naatu", one jump
songs[0] = "Apna Bana Le"   # replace in place, one jump
len(songs)        # 3; the last index is len(songs) - 1
```

Reading or replacing item $i$ is the same cost for any $i$: **O(1)**, constant time. The last valid index of $n$ items is $n-1$; asking for index $n$ walks off the end of the row.

:::qc lvl=1
q: An array of 4-byte numbers starts at address 2000. At what address is item 10?
options: ["2010", "2040", "2400"]
answer: 1
right: Right. 2000 + 10 × 4 = 2040. Each jump is 4 houses, not 1.
wrong: Each item takes 4 houses, so ten jumps cover 40 houses, not 10.
:::

## What is slow {lvl=1 id=s-slow label="Foundations"}

Boxes side by side have a cost: there is no gap anywhere. To insert a song at position 0, every song must first move one box to the right, last one first so nothing is overwritten. For $n$ songs that is $n$ moves: **O(n)**. Deleting from the front is the same in reverse.

Adding at the **end** is different: if there is a free box right after the last song, just drop the song in. And searching by name in an unsorted array means checking boxes one at a time, also O(n).

| Operation | Cost | Why |
|---|---|---|
| Read or write item $i$ | O(1) | address by arithmetic |
| Add at the end (room left) | O(1) | next box is free |
| Insert or delete at the front or middle | O(n) | items after it shift |
| Find a value (unsorted) | O(n) | look box by box |

:::figure caption="Inserting at index 1: everything to the right of the gap moves one box over. The further left you insert, the more items move."
<svg viewBox="0 0 390 120" role="img" aria-label="Boxes A B C D with a new box X inserted at position 1, B C D shifting right">
<g style="font-size:12px;text-anchor:middle">
<g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.3"><rect x="20" y="14" width="40" height="32"/><rect x="60" y="14" width="40" height="32"/><rect x="100" y="14" width="40" height="32"/><rect x="140" y="14" width="40" height="32"/><rect x="180" y="14" width="40" height="32" style="fill:var(--surface);stroke-dasharray:4 3"/></g>
<g style="fill:var(--ink)"><text x="40" y="35">A</text><text x="80" y="35">B</text><text x="120" y="35">C</text><text x="160" y="35">D</text></g>
<g style="font-size:10px;fill:var(--muted)"><text x="40" y="60">0</text><text x="80" y="60">1</text><text x="120" y="60">2</text><text x="160" y="60">3</text><text x="200" y="60">4</text></g>
<g style="fill:none;stroke:var(--c);stroke-width:1.6"><path d="M80 66 C80 80 100 80 100 70"/><path d="M120 66 C120 80 140 80 140 70"/><path d="M160 66 C160 80 180 80 180 70"/></g>
<g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.3"><rect x="20" y="86" width="40" height="28"/><rect x="60" y="86" width="40" height="28" style="fill:var(--c)"/><rect x="100" y="86" width="40" height="28"/><rect x="140" y="86" width="40" height="28"/><rect x="180" y="86" width="40" height="28"/></g>
<g style="fill:var(--ink)"><text x="40" y="105">A</text><text x="80" y="105" style="fill:var(--surface)">X</text><text x="120" y="105">B</text><text x="160" y="105">C</text><text x="200" y="105">D</text></g>
<text x="240" y="56" style="font-size:10px;fill:var(--muted);text-anchor:start">B, C, D each move</text>
<text x="240" y="70" style="font-size:10px;fill:var(--muted);text-anchor:start">one box right: 3 moves</text>
</g>
</svg>
:::

:::qc lvl=1
q: A playlist of 1,000 songs gets a new song at the very top. About how many songs must shift?
options: ["1", "About 1,000", "About a million"]
answer: 1
right: Right. Every existing song moves one place down, so the work grows with the length of the list.
wrong: The new song takes position 0, so every song that was already there has to make room. How many is that?
:::

## Growing without running out {lvl=2 id=s-grow label="SDE-1"}

A plain array has a fixed size: the block you reserved is all you have, because the houses after it may belong to someone else. Yet Python lists and JavaScript arrays seem to grow forever. The trick is the **dynamic array**.

It keeps two numbers: **length** (items stored) and **capacity** (boxes reserved). Append puts the item in the next free box. When length equals capacity the array is full, so it does three things: reserve a new block **twice as large**, copy every item across, and release the old block.

```python
class DynArray:
    def __init__(self):
        self.cap, self.n, self.data = 1, 0, [None]
    def append(self, x):
        if self.n == self.cap:           # full: double
            new = [None] * (2 * self.cap)
            for i in range(self.n):
                new[i] = self.data[i]    # copy n items
            self.data, self.cap = new, 2 * self.cap
        self.data[self.n] = x
        self.n += 1
```

That copy is O(n), so one append can be slow. But look at how rarely: after doubling from 8 to 16 you get 8 free appends before the next copy.

:::qc lvl=2
q: A dynamic array has capacity 8 and holds 8 items. You append one more. What happens?
options: ["It writes past the end, overwriting memory", "It allocates capacity 16, copies the 8 items, then stores the new one", "It refuses and raises an error"]
answer: 1
right: Right. Growth is hidden from you: one slow append, then room for 7 more cheap ones.
wrong: Python and JavaScript never let you overwrite memory this way. The array quietly makes a bigger home first.
:::

## Why append is O(1) on average {lvl=2 id=s-amortised label="SDE-1"}

Start with capacity 1 and append 1,000 items. Copies happen when the array is full at sizes 1, 2, 4, 8, ..., 512, so the total number of items copied is

$$1 + 2 + 4 + \dots + 512 = 1023$$

Read it as: "all the copying ever done adds up to just under twice the final size". Add the 1,000 plain stores and the total work is about 2,000 steps for 1,000 appends: about 2 steps per append. That is **amortised O(1)**: expensive moves are rare enough that the average stays flat.

Each double sums to less than the next one (the sum of all powers of two below $N$ is $N - 1$), which is why the series is safe. If the array grew by a **fixed amount**, say 10 boxes each time, the copies would be $10 + 20 + 30 + \dots$, which adds up to something proportional to $n^2$. Over a million appends that is billions of copies, so growth must be by a **factor**.

:::qc lvl=2
q: An array grows by 10 boxes each time it fills (instead of doubling). Appending n items costs about
options: ["n steps in total", "n² / 20 steps in total", "log n steps in total"]
answer: 1
right: Right. There are n/10 resizes, and the k-th one copies about 10k items. Summing gives about n²/20, so each append costs O(n) on average.
wrong: With a fixed step, resizes become more and more frequent compared with the size, and each copy is bigger than the last. The copying cost adds up quickly.
:::

## Working in place {lvl=2 id=s-inplace label="SDE-1"}

Because indexing is cheap, arrays reward tricks that use no extra memory. The most useful is **two pointers**: one index reads, another writes. To remove all zeros from a list while keeping the order:

```python
def remove_zeros(a):
    w = 0                    # next place to write
    for r in range(len(a)):  # r reads every item
        if a[r] != 0:
            a[w] = a[r]
            w += 1
    return w                 # first w items are the answer
```

One pass, O(n) time, no new list. The same read-pointer and write-pointer pattern solves "remove duplicates from a sorted array", "move zeros to the end" and many interview staples. Reversing is another: swap `a[0]` with `a[n-1]`, then `a[1]` with `a[n-2]`, working inwards.

## Why arrays are faster than Big-O says {lvl=3 id=s-cache label="SDE-2"}

Two structures with the same Big-O can differ tenfold in practice. Memory is slow compared with the CPU, so hardware fetches a whole **cache line** (commonly 64 bytes) at a time. Walk an array and the next several items are already in the fast cache after the first fetch. A row of equal boxes is the pattern hardware predicts best. (The memory-hierarchy lesson explains the layers.)

There are also trade-offs in the growth rule:

- **Factor 2** wastes up to half the space and copies less often; a smaller factor such as 1.5 wastes less and lets freed old blocks be reused. Real implementations choose factors near this range; CPython over-allocates by a smaller proportion than 2. [Unverified: exact factors vary by language and version.]
- **Shrinking:** if you halve capacity as soon as the array is half empty, alternating append and remove at the boundary copies every time. The usual rule is to shrink only when it is a **quarter** full, so there is a gap that needs many operations to cross.
- **Pre-sizing:** if you know you will store a million items, reserve them up front and skip every resize.

Finally, remember what "amortised" hides: one append in a million is slow. A latency-sensitive service (a trading engine, a game frame) may care about that single slow append more than the average, and pre-sizes for that reason.

:::qc lvl=3
q: Why shrink a dynamic array when it is a quarter full rather than half full?
options: ["Quarter-full arrays use more memory", "It stops repeated grow-shrink copying when the size hovers around one value", "Halving is not possible on real hardware"]
answer: 1
right: Right. After a shrink at one quarter the array is half full, so you need many more operations to trigger the next resize in either direction.
wrong: If you shrank at one half and then doubled on the next append, a tiny back-and-forth would copy the whole array each time.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. An array is a row of equal boxes in one block; item $i$ is at start + $i \times s$, so reading or writing it is O(1). {lvl=1}
2. Insert or delete in the front or middle shifts everything after it: O(n). {lvl=1}
3. A dynamic array doubles its capacity when full and copies once; append is O(1) amortised. {lvl=2}
4. Doubling the size keeps the total copying under $2n$; growing by a fixed amount costs about $n^2$. {lvl=2}
5. Two pointers (read and write) do in-place work in one pass. {lvl=2}
6. Contiguous memory is cache-friendly; pre-sizing and shrinking rules avoid hidden slow spikes. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Indexes run from 0 to $n-1$; index $n$ is out of range. Off-by-one is the top array bug. {lvl=1}
- `insert(0, x)` and `pop(0)` on a Python list are O(n); use a deque for queue-like work. {lvl=2}
- Removing items from a list while looping over it skips elements; build a new list or use a write pointer. {lvl=2}
- Amortised O(1) is an average: a single append can still be slow, which matters when every response must be fast. {lvl=3}
- Searching an unsorted array is O(n); if you search often, keep it sorted or use a hash table. {lvl=2}
:::
