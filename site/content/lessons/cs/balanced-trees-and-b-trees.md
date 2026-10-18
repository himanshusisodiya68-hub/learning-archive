---
title: Balanced trees and B-trees
summary: How a tree keeps itself short as data pours in, and why a database finds one row among a billion in about four disk reads.
ncert: []
up_to: SDE-3
builds_on: [Trees and binary search trees, Memory hierarchy and caches, Big-O and growth of cost]
notes_prompt: Explain to a friend why a database index is built from wide nodes instead of the two-way branches of a textbook search tree.
margin:
  - kind: history
    title: History
    text: AVL trees (1962) were the first self-balancing search trees, named after the Soviet mathematicians Adelson-Velsky and Landis. B-trees came about a decade later, in 1970, from Bayer and McCreight at Boeing, who were thinking about data on disks [Unverified dates].
  - kind: tip
    title: Interview favourite
    text: Nobody expects you to code a red-black tree on a whiteboard. Be ready to say what balance guarantees (height about log n), what a rotation does, and why databases use B-trees.
  - kind: olympiad
    title: Design link
    text: Choosing between a B-tree, a hash index and an LSM-tree is one of the central decisions in storage design. The deciding facts are how the data is read, how it is written, and what the disk is good at.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 3 Storage and Retrieval: B-trees; comparing B-trees and LSM-trees [Unverified chapter detail]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Red-black trees chapter; B-trees chapter [Unverified chapter numbers]" }
  - { title: "A. Petrov, Database Internals", ref: "B-tree basics and variants [Unverified]" }
cards:
  - { front: "Why does a plain binary search tree degrade?", back: "Its shape depends on insertion order. Sorted input makes it a line, so height becomes n and every operation costs O(n)." }
  - { front: "What does a rotation do?", back: "A small local rearrangement of two or three nodes that changes the shape but keeps the left-to-right sorted order of the keys." }
  - { front: "AVL rule in one line?", back: "At every node the heights of the left and right subtrees differ by at most one; rotations restore this after an insert or delete." }
  - { front: "Red-black idea in one line?", back: "Colour rules guarantee that no path is more than twice as long as any other, so height is at most about 2 log2 n." }
  - { front: "Why B-trees for disks?", back: "A disk is read in whole pages. A B-tree node fills one page with hundreds of keys, so the tree is very wide and only 3 to 4 levels deep, meaning 3 to 4 page reads." }
  - { front: "How does a B-tree stay balanced?", back: "When a node overflows it splits in two and sends its middle key up. The tree grows taller only when the root splits, so all leaves stay at the same depth." }
core:
  idea: 'A search tree is fast only while it is short. Balanced trees repair their own shape after each change, using small local moves, so the height stays about log n. A B-tree goes further for disks: each node is a whole disk page holding hundreds of keys, so even a billion keys need only three or four page reads.'
  formulas:
    - tex: 'h \le 2\log_2(n+1)'
      label: 'Height of a red-black tree with n keys'
    - tex: 'h \approx \lceil \log_b N \rceil'
      label: 'Levels of a B-tree with fan-out b holding N keys'
  conditions:
    - 'Keys have a total order (so that "left" and "right" mean something)'
    - 'For B-trees: reading one page costs about the same as reading a small part of it, so putting many keys in a node is nearly free'
    - 'The tree is updated through its own insert and delete routines, which do the repair'
  sign: 'Balance is not free: each insert may do extra work (rotations or splits). In return, the worst case is O(log n) instead of O(n).'
outcomes:
  - 'Explain why a plain search tree can degrade and what "balanced" guarantees'
  - 'Describe a rotation and why it keeps the keys in order'
  - 'State the AVL and red-black rules and the trade-off between them'
  - 'Explain why disk-based indexes use wide B-trees, and compute their height'
  - 'Trace a B-tree insert with a node split, and explain B+ trees and range scans'
opener:
  story: |
    A shop's database holds a billion orders, and you ask for order number 7,408,213,552. It answers in a few milliseconds. The data sits on disk, and a disk is painfully slow compared with memory: each trip to it is something you count and try to avoid.

    From the last lesson you might expect a binary search tree: about 30 steps for a billion keys. But if each of those 30 steps is a separate trip to the disk, you wait for 30 trips. The database does it in about 4.

    How can a tree be shorter than the "halve it each step" limit? And, before that, a worry from last time: what stops an ordinary search tree from leaning over into a line as orders arrive in order?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A tall thin tree of 30 narrow nodes on the left beside a short wide tree of 4 levels with wide nodes on the right"><g style="fill:none;stroke:var(--ink);stroke-width:1.2"><path d="M40 20 L50 40 L40 60 L50 80 L40 100 L50 120 L40 140 L50 160 L40 180"/></g><g style="stroke:var(--ink);stroke-width:1.2;fill:var(--surface)"><circle cx="40" cy="20" r="6"/><circle cx="50" cy="40" r="6"/><circle cx="40" cy="60" r="6"/><circle cx="50" cy="80" r="6"/><circle cx="40" cy="100" r="6"/><circle cx="50" cy="120" r="6"/><circle cx="40" cy="140" r="6"/><circle cx="50" cy="160" r="6"/><circle cx="40" cy="180" r="6"/></g><text x="12" y="204" style="font-size:11px;fill:var(--muted)">thin: about 30 trips</text><g style="fill:none;stroke:var(--c);stroke-width:1.3"><path d="M236 44 L180 80"/><path d="M236 44 L236 80"/><path d="M236 44 L292 80"/><path d="M180 104 L156 140"/><path d="M180 104 L184 140"/><path d="M180 104 L212 140"/><path d="M236 104 L236 140"/><path d="M292 104 L268 140"/><path d="M292 104 L296 140"/></g><g style="stroke:var(--c);stroke-width:1.5;fill:color-mix(in srgb,var(--c) 14%,var(--surface))"><rect x="206" y="24" width="60" height="20" rx="3"/><rect x="150" y="80" width="60" height="24" rx="3"/><rect x="206" y="80" width="60" height="24" rx="3"/><rect x="262" y="80" width="54" height="24" rx="3"/><rect x="130" y="140" width="52" height="22" rx="3"/><rect x="186" y="140" width="52" height="22" rx="3"/><rect x="242" y="140" width="52" height="22" rx="3"/></g><text x="150" y="204" style="font-size:11px;fill:var(--c)">wide: about 4 trips</text><text x="16" y="228" style="font-size:11px;fill:var(--muted)">one billion keys, either way</text></svg>'
life:
  - 'Every relational database index (the thing that makes "find the row with this id" quick) is usually a B-tree variant, in systems such as PostgreSQL and MySQL.'
  - 'File systems use B-tree-like structures to find a file''s blocks or a folder''s entries quickly [Unverified: depends on the file system].'
  - 'Ordered maps in standard libraries (Java TreeMap, C++ std::map) are commonly red-black trees, and the Linux kernel uses red-black trees in several places [Unverified: from memory].'
  - 'A library with fat catalogue drawers: one drawer holds hundreds of cards, so you open three drawers instead of thirty.'
  - 'A well-run company has few management layers with wide teams, not a chain of hundreds of single-report bosses.'
models:
  - name: 'Match the unit of work to the unit of delivery'
    text: 'A courier charges per trip, not per parcel, so you fill the van. A disk charges per page, so you fill the page. When fetching has a big fixed cost, carry as much as one trip allows.'
  - name: 'Repair locally, keep the global promise'
    text: 'A rotation tidies two or three nodes and the whole tree stays in order. Good systems keep a promise (sorted, balanced, solvent) by small fixes at the point of change instead of a rebuild from scratch.'
  - name: 'Wider is shorter'
    text: 'Flatten a hierarchy and messages travel fewer hops. Managers with 10 reports instead of 2 cut the layers from 20 to 6 for a company of a million people. Branching factor beats depth.'
links:
  - leaf: 'cs/trees'
    name: 'Trees and binary search trees'
    same: 'These trees keep the same search rule (smaller to the left, larger to the right) and the same cost law: operations cost the height.'
    differs: 'Plain BSTs trust the insertion order. Balanced trees and B-trees enforce a shape, paying a little extra on each update.'
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'The B-tree exists because of the gap between fast memory and slow disk, and because data moves in blocks, not single bytes.'
    differs: 'A cache keeps recently used pieces close; a B-tree decides how the pieces are shaped so that few slow trips are needed.'
  - leaf: 'cs/indexes'
    name: 'Indexes: hash, B-tree and LSM-tree'
    same: 'An index is a second structure that finds rows without scanning the table, and the B-tree is its most common form.'
    differs: 'A B-tree updates pages in place and supports ranges. A hash index is flatter but exact-match only. LSM-trees trade read cost for cheap sequential writes.'
next:
  q: 'A B-tree keeps everything in order so that any item can be found. But an airport only ever wants the single most urgent item: the next flight to board, the next job to run. Do we need to keep everything in order just to get the top one?'
  leaf: 'cs/heaps'
  name: 'Heaps and priority queues'
symbols:
  - s: 'n'
    means: 'number of keys in a tree (count)'
  - s: 'h'
    means: 'height: number of levels from the root to the deepest leaf (count)'
  - s: 'b'
    means: 'fan-out: the number of children a node has, here for B-trees (count)'
  - s: 'N'
    means: 'total number of keys stored in a B-tree (count)'
  - s: '\log_2 n'
    means: 'how many times n can be halved down to 1'
  - s: '\log_b N'
    means: 'how many times N can be divided by b down to 1; the bigger b is, the smaller this gets'
  - s: '\lceil x \rceil'
    means: 'x rounded up to the next whole number'
---

:::hook
q: A balanced binary search tree needs about 30 node visits for a billion keys. A B-tree whose nodes each have around 500 children needs how many levels?
options: ["About 30, trees are trees", "About 4", "Exactly 1"]
answer: 1
right: Right. 500³ is 125 million, which is too few, and 500⁴ is 62.5 billion, which is plenty. So four levels, and the top one or two are usually already in memory. Width is the trick.
wrong: Count the reach of each level. One level reaches 500 keys, two reach about 500 × 500 = 250,000. How many levels until you pass a billion?
:::

## Why trees go wrong {lvl=1 id=s-wrong label="Foundations"}

In the last lesson a binary search tree (BST) promised about $\log_2 n$ steps: 20 for a million keys. But the promise depended on the tree being **bushy**. A BST's shape is decided by the order in which keys arrive, and **orders often arrive in order**: timestamps, ticket numbers, sorted files. Insert 1, 2, 3, ... and every new key goes right of the last one. You get a straight line, height $n$, and every search becomes a scan.

So we want a tree that keeps itself short *whatever* order the data arrives in. We call such a tree **balanced** (or *self-balancing*). The goal is simple to state: **height always about $\log_2 n$**, so every operation costs $O(\log n)$ in the worst case, not just on lucky days.

How can a tree repair itself without being rebuilt from scratch on every insert? With one small move.

## The rotation {lvl=2 id=s-rotation label="SDE-1"}

A **rotation** lifts one node up and lets its parent drop down beside it, like turning a handle. Look at the picture: before the move, $y$ is on top with $x$ as its left child. After a **right rotation**, $x$ is on top and $y$ is its right child.

:::figure caption="A right rotation. Subtrees A, B and C each keep their internal order. Only the links around x and y change, and the left-to-right order A, x, B, y, C is the same before and after."
<svg viewBox="0 0 320 150" role="img" aria-label="Before: y on top, x as left child with subtrees A and B, and C under y. After: x on top, A on the left, y on the right with B and C below it">
<g style="fill:none;stroke:var(--ink);stroke-width:1.4"><path d="M80 24 L50 60"/><path d="M80 24 L112 70"/><path d="M50 60 L28 104"/><path d="M50 60 L72 104"/>
<path d="M240 24 L212 70"/><path d="M240 24 L270 60"/><path d="M270 60 L248 104"/><path d="M270 60 L292 104"/></g>
<g style="stroke:var(--mat);stroke-width:1.6;fill:color-mix(in srgb,var(--mat) 12%,var(--surface))"><circle cx="80" cy="24" r="13"/><circle cx="50" cy="60" r="13"/><circle cx="240" cy="24" r="13"/><circle cx="270" cy="60" r="13"/></g>
<g style="stroke:var(--muted);stroke-width:1.2;fill:var(--surface)"><path d="M28 104 L18 130 L38 130 Z"/><path d="M72 104 L62 130 L82 130 Z"/><path d="M112 70 L102 96 L122 96 Z"/><path d="M212 70 L202 96 L222 96 Z"/><path d="M248 104 L238 130 L258 130 Z"/><path d="M292 104 L282 130 L302 130 Z"/></g>
<g style="font-size:11px;fill:var(--ink)" text-anchor="middle"><text x="80" y="28">y</text><text x="50" y="64">x</text><text x="240" y="28">x</text><text x="270" y="64">y</text><text x="28" y="126">A</text><text x="72" y="126">B</text><text x="112" y="92">C</text><text x="212" y="92">A</text><text x="248" y="126">B</text><text x="292" y="126">C</text><text x="160" y="70" style="fill:var(--muted)">→</text></g>
</svg>
:::

Why is the order untouched? Everything in B lies between $x$ and $y$ (bigger than $x$, since B was $x$'s right side; smaller than $y$, since all of $x$'s subtree was). After the move, B hangs on the left of $y$, exactly where "bigger than $x$ and smaller than $y$" belongs.

```python
def rotate_right(y):
    x = y.left           # x will become the top
    y.left = x.right     # B moves across to y's left
    x.right = y          # y drops to x's right
    return x             # the caller links x where y used to hang
```

Four lines, no loops: a rotation costs $O(1)$. It makes the left side shorter and the right side taller. A **left rotation** is the mirror image. To fix a lopsided node, you spot which side is too tall and rotate toward the other.

:::qc lvl=2
q: What is guaranteed to be the same before and after a rotation?
options: ["The left-to-right order of all the keys", "The height of the tree", "Which key is the root"]
answer: 0
right: Right. A rotation reshapes the tree but never changes the sorted order, so the tree stays a valid search tree. The height and the root, by contrast, are exactly what it changes.
wrong: A rotation is used to change the shape. What must not change, or the search rule would break?
:::

## AVL and red-black trees in one picture {lvl=3 id=s-avl label="SDE-2"}

A rotation is a tool. A balanced tree is a **rule that says when to use it**. The two famous rules:

:::figure caption="Two rules, one goal. AVL keeps the two sides of every node within one level of each other. Red-black allows more slack, but the colour rules still stop any path being more than twice as long as another."
<svg viewBox="0 0 320 120" role="img" aria-label="Left: AVL tree with balance numbers. Right: red-black tree with red and black nodes">
<g style="fill:none;stroke:var(--ink);stroke-width:1.3"><path d="M80 22 L48 56"/><path d="M80 22 L112 56"/><path d="M48 56 L32 92"/><path d="M112 56 L128 92"/><path d="M240 22 L208 56"/><path d="M240 22 L272 56"/><path d="M208 56 L192 92"/><path d="M272 56 L288 92"/></g>
<g style="stroke:var(--mat);stroke-width:1.5;fill:color-mix(in srgb,var(--mat) 12%,var(--surface))"><circle cx="80" cy="22" r="12"/><circle cx="48" cy="56" r="12"/><circle cx="112" cy="56" r="12"/><circle cx="32" cy="92" r="12"/><circle cx="128" cy="92" r="12"/></g>
<g style="stroke:var(--ink);stroke-width:1.5"><circle cx="240" cy="22" r="12" style="fill:var(--ink)"/><circle cx="208" cy="56" r="12" style="fill:var(--bad)"/><circle cx="272" cy="56" r="12" style="fill:var(--bad)"/><circle cx="192" cy="92" r="12" style="fill:var(--ink)"/><circle cx="288" cy="92" r="12" style="fill:var(--ink)"/></g>
<g style="font-size:10px;fill:var(--ink)" text-anchor="middle"><text x="80" y="26">0</text><text x="48" y="60">0</text><text x="112" y="60">0</text><text x="32" y="96">0</text><text x="128" y="96">0</text></g>
<g style="font-size:10px;fill:var(--muted)"><text x="10" y="116">AVL: left height − right height ∈ {−1, 0, 1}</text><text x="180" y="116">red-black: no red under red</text></g>
</svg>
:::

**AVL tree.** Give every node a **balance number**: the height of its left side minus the height of its right side. The rule is that this number is always $-1$, $0$ or $1$. After an insert, walk back up toward the root. If some node reaches $\pm 2$, one of four cases applies, and a rotation fixes it:

| Insert went into | Fix |
|---|---|
| left child's left side | one right rotation |
| right child's right side | one left rotation |
| left child's right side | left rotation on the child, then right rotation |
| right child's left side | right rotation on the child, then left rotation |

An insert needs at most one such fix (one single or double rotation); a delete may need fixes all the way up. Strict balance gives height at most about $1.44\log_2 n$ [Unverified constant, standard result], so lookups are fast.

**Red-black tree.** Each node is coloured red or black, with these rules: the root is black; a red node never has a red child; and every path from a node down to an empty spot passes through the **same number of black nodes**. The last two together mean no path can be more than twice as long as another (the shortest has only black nodes, the longest alternates red and black). So

$$h \le 2\log_2(n+1)$$

Read it as: "the tree is never taller than twice the ideal height." For a million keys, at most about 40 levels, instead of 20.

**Which?** AVL is stricter, so lookups are slightly faster; red-black does fewer rotations on updates, so writes are slightly cheaper. Libraries commonly choose red-black trees [Unverified: for example Java's TreeMap, C++'s std::map in common implementations]. In an interview you rarely code either; you state the guarantee ($O(\log n)$ worst case for search, insert and delete) and what a rotation does.

:::qc lvl=3
q: A red-black tree has one million keys. Roughly how tall can it be at most?
options: ["20", "40", "1,000,000"]
answer: 1
right: Right. The bound is 2 log₂(n+1), about 2 × 20 = 40. It can be up to twice the ideal height, but never worse.
wrong: Use the bound h ≤ 2 log₂(n+1). What is log₂ of a million, and what do you get doubling it?
:::

## A different problem: disks {lvl=3 id=s-disks label="SDE-2"}

So far, "cost" meant the number of nodes visited. For data held **in memory**, that is the right measure. For data on a **disk**, it is not: you pay for each **trip**, and a trip brings back a whole **page** (often 4 KB to 16 KB), not one number. Rough figures: reading from memory takes about 100 nanoseconds; a random read from an SSD about 100 microseconds; from a spinning disk about 10 milliseconds [Unverified: orders of magnitude only, varying by hardware]. A trip to the disk is a thousand times (or a hundred thousand times) more costly than a memory access.

Now a balanced binary tree with 30 levels, stored on disk, makes up to 30 trips per lookup, **each fetching a whole page of which we use a single key**. That is a waste. Read a whole page and you may as well use all of it.

The idea: **make each node one whole page, holding hundreds of keys.** A node with 500 keys has 501 children. This is a **B-tree**.

:::figure caption="One B-tree node: keys in order, with a child pointer between and beside them. Everything under the pointer between 20 and 40 lies between 20 and 40. The whole node is read in one trip."
<svg viewBox="0 0 320 150" role="img" aria-label="A node with keys 20, 40, 60 and four child pointers going to four child nodes">
<g style="stroke:var(--c);stroke-width:1.6;fill:color-mix(in srgb,var(--c) 14%,var(--surface))"><rect x="80" y="14" width="160" height="30" rx="4"/></g>
<g style="stroke:var(--c);stroke-width:1.2"><path d="M120 14 L120 44"/><path d="M160 14 L160 44"/><path d="M200 14 L200 44"/></g>
<g style="font-size:12px;fill:var(--ink)" text-anchor="middle"><text x="100" y="34">20</text><text x="140" y="34">40</text><text x="180" y="34">60</text><text x="220" y="34">…</text></g>
<g style="fill:none;stroke:var(--ink);stroke-width:1.2"><path d="M84 44 L40 92"/><path d="M120 44 L120 92"/><path d="M160 44 L200 92"/><path d="M200 44 L280 92"/></g>
<g style="stroke:var(--muted);stroke-width:1.2;fill:var(--surface)"><rect x="10" y="92" width="60" height="24" rx="3"/><rect x="90" y="92" width="60" height="24" rx="3"/><rect x="170" y="92" width="60" height="24" rx="3"/><rect x="250" y="92" width="60" height="24" rx="3"/></g>
<g style="font-size:10px;fill:var(--muted)" text-anchor="middle"><text x="40" y="108">&lt; 20</text><text x="120" y="108">20 to 40</text><text x="200" y="108">40 to 60</text><text x="280" y="108">&gt; 60</text></g>
</svg>
:::

**Searching** a node is just the BST idea inside a page: find the gap your key falls into (a binary search among the keys in memory, since the page is already fetched), then follow that pointer down. One page read per level.

How tall is it? With fan-out $b$ (children per node), each level multiplies the reach by about $b$, so

$$h \approx \lceil \log_b N \rceil$$

Read it as: "how many times can you divide $N$ by the fan-out before one is left?"

A page of 8 KB holding entries of about 16 bytes (an 8-byte key and an 8-byte pointer) has room for about 500 entries [Inference: sizes vary]. Then:

| Levels | Keys reachable (about) |
|---|---|
| 1 | 500 |
| 2 | 250,000 |
| 3 | 125 million |
| 4 | 62.5 billion |

A billion keys fit in **4 levels**. The root and probably the next level stay in memory, so a lookup is usually 2 to 3 real disk reads [Inference: depends on cache size]. The same lookup in a binary tree: 30 trips.

```python
from math import ceil, log

def levels(n_keys, fanout):
    return ceil(log(n_keys, fanout))

print(levels(1_000_000_000, 500))   # 4
```

:::qc lvl=3
q: Why is a B-tree node made as big as a disk page?
options: ["Pages are small, so nodes must be small too", "Reading a page costs the same whether you use one key or all of them, so fill it with keys to make the tree shorter", "Bigger nodes make rotations cheaper"]
answer: 1
right: Right. The cost is the trip, not the amount. Using the whole page cuts the height from 30 to about 4.
wrong: Think about what you pay for on a disk. If a trip returns a whole page regardless, what is the best use of that page?
:::

## Insert and split {lvl=3 id=s-split label="SDE-2"}

A B-tree stays balanced in a different way: it never needs rotations. Instead, **nodes split**. Suppose each node may hold at most 3 keys (tiny, to see what happens):

| Step | Result |
|---|---|
| insert 10, 20, 30 | one node: [10 20 30] |
| insert 40 | too full: [10 20 30 40]. Split in the middle: 30 moves up, giving a new root [30] with children [10 20] and [40] |
| insert 50, 60 | the right leaf grows to [40 50 60] |
| insert 70 | right leaf overflows: [40 50 60 70] splits, 60 moves up. Root: [30 60], leaves [10 20], [40 50], [70] |

Splits always **push a key up**. If the parent overflows, it splits too, and so on up the tree. Only when the **root** splits does the tree grow taller, by one level, **at the top**. So all leaves remain at exactly the same depth, which is the balance guarantee. Each split leaves two half-full nodes, so nodes are always at least about half full, and the height stays at most $\log_{b/2}N$ or so.

Delete does the reverse: if a node becomes too empty, it borrows a key from a neighbour or merges with it, and a parent that becomes too empty does the same.

:::qc lvl=3
q: In a B-tree, when does the tree grow one level taller?
options: ["Every time a leaf splits", "When the root splits", "Whenever a new key is larger than all others"]
answer: 1
right: Right. Growth happens at the top, so every leaf stays at the same depth.
wrong: Where does a split push the middle key? What happens when there is no parent left to take it?
:::

## B+ trees and real database indexes {lvl=4 id=s-bplus label="SDE-3"}

Most database indexes use a refinement, the **B+ tree** [Unverified: stated from general knowledge of PostgreSQL and MySQL InnoDB]:

- **Data only in the leaves.** Inner nodes keep only signposts (keys and pointers), so they pack in more children: higher fan-out, shorter tree.
- **Leaves linked in a chain**, in key order. A query such as "orders between 100 and 200" descends once to the first leaf, then **walks along the chain**, reading pages one after another. This is why `BETWEEN`, `ORDER BY` and "next 20 rows" are fast on a B-tree index, and impossible for a hash index.

Real engines add more machinery. Each change is first written to a **write-ahead log**, so a crash in the middle of a split can be repaired. Many readers and writers use the tree at once, so pages are protected by short-lived locks. Pages are cached in memory by a buffer pool. [Unverified: general description; details vary by engine.]

**Trade-offs worth stating in a design discussion.**

- **Writes are in place.** An update finds its page and changes it, often a random page on disk. That is excellent for reads and fine for moderate writes. For heavy write loads, **LSM-trees** (covered in **Indexes**) turn writes into sequential appends and pay more on reads. A Bloom filter, from two lessons back, is how they skip files that cannot hold a key.
- **Key choice matters.** Sequential keys (1, 2, 3...) always append to the rightmost leaf, which is cache-friendly; random keys (such as random identifiers) land on random pages and cause many splits and cache misses [Inference: widely reported in practice, size of the effect varies].
- **An index costs space and write time.** Every extra index must be updated on every insert. Add one for the queries you really run.
- **Choosing.** Exact-match only and in memory: a hash table. Ordered, range queries, read-heavy and on disk: a B-tree. Very heavy writes: an LSM-tree.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A plain search tree's height depends on insertion order, and sorted input makes it a line with $O(n)$ operations. {lvl=1}
2. A rotation is a local $O(1)$ rearrangement that changes shape but not the sorted order. {lvl=2}
3. AVL trees keep sibling heights within one (strict, faster lookups); red-black trees keep path lengths within a factor of 2 (cheaper updates). Both give $O(\log n)$ worst case. {lvl=3}
4. On disk, cost is the number of page trips, so a B-tree node is a whole page with hundreds of keys. {lvl=3}
5. A billion keys fit in about 4 levels with a fan-out of 500; the tree stays balanced by splitting nodes and growing at the root. {lvl=3}
6. B+ trees keep data in linked leaves, so range scans are fast; choose B-tree, hash or LSM by how the data is read and written. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never assume a plain BST is balanced. Ask what order the data arrives in. {lvl=1}
- A rotation must keep the in-order sequence of keys; if your rotation changes it, it is wrong. {lvl=2}
- O(log n) for AVL and red-black is a worst-case promise, but constants matter: a B-tree beats both once data lives on disk. {lvl=3}
- Fan-out, not just height, is the lever: widen nodes to make the tree shorter. {lvl=3}
- Do not add an index for every column. Each one slows every write. {lvl=4}
- In interviews: say what balance guarantees, what a rotation does, and why databases use B-trees. You will rarely be asked to code one. {lvl=2}
:::
