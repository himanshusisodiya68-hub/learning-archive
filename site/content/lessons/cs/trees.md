---
title: Trees and binary search trees
summary: How a million files, a family or a sorted list of names can be arranged so that any one is found in about twenty steps.
ncert: []
up_to: SDE-2
builds_on: [Recursion, Searching and binary search, Hash tables]
notes_prompt: Explain to a friend how you could find one name among a million using only "go left" or "go right" decisions, and why the answer depends on the shape of the tree.
margin:
  - kind: history
    title: History
    text: Family trees are thousands of years old; the idea of the tree as a data structure took shape in the 1950s and 60s, and search trees were a standard topic by the time Knuth wrote his volumes on sorting and searching [Unverified dates].
  - kind: tip
    title: Interview favourite
    text: 'Almost every tree question is recursion in disguise: solve it for the left child, solve it for the right child, combine. Decide what each call returns before writing code.'
  - kind: olympiad
    title: Design link
    text: Your file system, the page you are reading (the HTML document tree), a company chart and the way a compiler reads an expression are all trees. Spotting the tree is half the design.
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Binary search trees chapter; elementary data structures: rooted trees [Unverified chapter numbers]" }
  - { title: "D. E. Knuth, The Art of Computer Programming, Vol. 1 and 3", ref: "Trees (Vol. 1, Sec. 2.3); searching (Vol. 3, Sec. 6.2.2) [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Dictionaries and search trees [Unverified]" }
cards:
  - { front: "What is a tree, in data-structure terms?", back: "A set of nodes joined by edges with one root at the top. Every other node has exactly one parent, and there are no loops." }
  - { front: "What is a binary tree?", back: "A tree where every node has at most two children, called left and right." }
  - { front: "What is the rule of a binary search tree (BST)?", back: "For every node, all keys in its left subtree are smaller and all keys in its right subtree are larger." }
  - { front: "Which traversal of a BST visits keys in sorted order?", back: "Inorder: left subtree, then the node, then the right subtree." }
  - { front: "How long does BST search take?", back: "O(h), where h is the height of the tree: about log2 n when it is balanced, but n when it has leaned into a line." }
  - { front: "What are the three cases of deleting a node from a BST?", back: "No children: remove it. One child: replace it with that child. Two children: replace its key with the next larger key (smallest in the right subtree) and delete that one." }
core:
  idea: 'A tree arranges items as a root with children, each of which is a smaller tree. In a binary search tree every key sits to the right of smaller keys and to the left of larger ones, so each comparison throws away one whole side. Search, insert and delete cost about the height of the tree.'
  formulas:
    - tex: 'n_{\max} = 2^h - 1'
      label: 'A full binary tree with h levels holds at most this many nodes'
    - tex: 'h_{\min} = \lceil \log_2 (n+1) \rceil'
      label: 'Fewest levels needed for n nodes'
  conditions:
    - 'Keys can be compared (one is smaller, equal or larger)'
    - 'For fast search the tree must stay roughly balanced; a plain BST does not promise that'
    - 'Keys are distinct (or a clear rule handles duplicates)'
  sign: 'The cost is the height, not the number of nodes. Keys inserted in sorted order into a plain BST give a tree that is a straight line, and search becomes O(n).'
outcomes:
  - 'Name the parts of a tree and recognise trees in everyday systems'
  - 'Write a node and traverse a binary tree in preorder, inorder, postorder and level order'
  - 'Search, insert and delete in a binary search tree'
  - 'Explain why the cost depends on the height and when the height goes bad'
  - 'Solve common tree interview problems with recursion over the two children'
opener:
  story: |
    Open the folder called **Downloads** on your laptop. Inside it is **School**, and inside that **Physics**, and inside that a file called *notes.pdf*. Your computer may hold a million files, yet it opens that one instantly. It did not scan a million names; it went down three steps.

    Now a different puzzle. Take a million names kept **in alphabetical order**, and let people add new names all day. A hash table finds one name fast, but cannot say "which names come between *asha* and *ravi*". A sorted list can, but adding a name in the middle means shuffling half a million names along.

    Both puzzles have the same answer: stop thinking of a long line, and think of a shape that branches. Each step down it throws away a huge piece of the problem. How many steps does it take to find one name among a million if every step throws away half of the rest?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A folder tree: Downloads contains School and Music; School contains Physics and Maths; Physics contains notes.pdf"><g style="fill:none;stroke:var(--ink);stroke-width:1.5"><path d="M160 46 L84 96"/><path d="M160 46 L236 96"/><path d="M84 116 L44 164"/><path d="M84 116 L124 164"/><path d="M44 184 L44 204"/></g><g style="stroke:var(--c);stroke-width:1.8;fill:color-mix(in srgb,var(--c) 14%,var(--surface))"><rect x="118" y="22" width="84" height="26" rx="6"/><rect x="48" y="94" width="72" height="24" rx="6"/><rect x="204" y="94" width="64" height="24" rx="6"/><rect x="14" y="162" width="64" height="24" rx="6"/><rect x="92" y="162" width="64" height="24" rx="6"/></g><rect x="8" y="204" width="76" height="24" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.3"/><g style="font-size:11px;fill:var(--ink)" text-anchor="middle"><text x="160" y="39">Downloads</text><text x="84" y="110">School</text><text x="236" y="110">Music</text><text x="46" y="178">Physics</text><text x="124" y="178">Maths</text><text x="46" y="220">notes.pdf</text></g><text x="176" y="170" style="font-size:11px;fill:var(--muted)">3 steps down,</text><text x="176" y="186" style="font-size:11px;fill:var(--muted)">not a million looks</text></svg>'
life:
  - 'Your file system is a tree: folders inside folders, with files as the tips of the branches.'
  - 'A web page is a tree of elements (the page, then sections, then paragraphs); browsers walk it constantly.'
  - 'A cricket tournament bracket, a company org chart and a family tree are all trees.'
  - 'Ordered maps and sets in many languages (Java TreeMap, C++ std::map) are search trees, used when you need keys in order.'
  - 'A "20 questions" game is a search tree: each answer halves what is left.'
models:
  - name: 'Each step throws away a big piece'
    text: 'A good first question removes half the possibilities, as in 20 questions or a doctor''s triage. Count how fast a plan shrinks the problem, not how many options it has.'
  - name: 'The problem inside the problem'
    text: 'Every branch of a tree is itself a tree. A manager''s team has the same shape as the whole company. Whenever a task contains smaller copies of itself, handle one copy and trust the rest to follow.'
  - name: 'Shape decides speed'
    text: 'The same items arranged differently can be quick or hopeless. A queue split across ten counters moves fast; one long line does not. Ask what shape a system has before blaming its size.'
links:
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'A tree is defined in terms of smaller trees, and the natural code for it is a function that calls itself on each child.'
    differs: 'Recursion is a way of writing a solution; a tree is a way of arranging data. They meet because a tree''s shape matches the shape of the recursive calls.'
  - leaf: 'cs/searching-and-binary-search'
    name: 'Binary search'
    same: 'Each comparison halves what remains, so both take about log2 n steps. Binary search is exactly what a perfectly balanced BST does.'
    differs: 'Binary search needs a sorted array, where inserting costs O(n) shifting. A tree makes inserting cheap while keeping the order.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both find a key without scanning everything.'
    differs: 'A hash table is faster for exact matches but scatters keys. A BST keeps them in order, so it can answer "next", "smallest" and "between A and B".'
next:
  q: 'Insert the numbers 1, 2, 3, 4, ... one after another into a binary search tree. What shape do you get, and what happens to the promise of twenty steps for a million names? Can a tree repair itself?'
  leaf: 'cs/balanced-trees-and-b-trees'
  name: 'Balanced trees and B-trees'
symbols:
  - s: 'n'
    means: 'number of nodes (count)'
  - s: 'h'
    means: 'height: the number of levels from the root down to the deepest node (count)'
  - s: '\log_2 n'
    means: 'how many times n can be halved before reaching 1; for a million, about 20'
  - s: '2^h'
    means: 'two multiplied by itself h times: how the number of nodes per level doubles'
  - s: 'O(h)'
    means: 'cost grows in step with the height of the tree'
  - s: '\lceil x \rceil'
    means: 'x rounded up to the next whole number'
---

:::hook
q: Every step down a balanced tree throws away half of what remains. About how many steps to find one name among a million?
options: ["About 20", "About 1,000", "About 500,000"]
answer: 0
right: Right. Halving a million 20 times leaves 1, since 2²⁰ is 1,048,576. Even a billion names need only about 30 steps. That is the superpower of a well-shaped tree.
wrong: Try halving. A million, then 500,000, 250,000, 125,000 and so on. How many halvings until one is left? It is far fewer than most people guess.
:::

## Things inside things {lvl=1 id=s-shape label="Foundations"}

A **tree** is the shape you get when everything has exactly one boss. There is one item at the top, the **root**. Each item may have items under it, its **children**; each child has one **parent**. An item with no children is a **leaf**. Between two items there is a line, an **edge**. There are never loops: from the root there is exactly one way down to any item.

Two measures you will use all the time. The **depth** of an item is how many edges lie between it and the root (the root has depth 0). The **height** of the tree is the depth of its deepest item, plus one if you count levels instead of edges. In this lesson, "levels" means the number of rows.

:::figure caption="A folder tree. Downloads is the root; notes.pdf is a leaf. Every item except the root has exactly one parent."
<svg viewBox="0 0 320 170" role="img" aria-label="A tree with Downloads at the top, School and Music below it, and Physics and Maths below School">
<g style="fill:none;stroke:var(--ink);stroke-width:1.5"><path d="M160 36 L90 70"/><path d="M160 36 L230 70"/><path d="M90 94 L50 130"/><path d="M90 94 L130 130"/></g>
<g style="stroke:var(--mat);stroke-width:1.6;fill:color-mix(in srgb,var(--mat) 12%,var(--surface))"><rect x="122" y="14" width="76" height="24" rx="6"/><rect x="58" y="70" width="64" height="24" rx="6"/><rect x="198" y="70" width="64" height="24" rx="6"/><rect x="18" y="130" width="64" height="24" rx="6"/><rect x="98" y="130" width="64" height="24" rx="6"/></g>
<g style="font-size:11px;fill:var(--ink)" text-anchor="middle"><text x="160" y="30">Downloads</text><text x="90" y="86">School</text><text x="230" y="86">Music</text><text x="50" y="146">Physics</text><text x="130" y="146">Maths</text></g>
<g style="font-size:10px;fill:var(--muted)"><text x="204" y="26">root (depth 0)</text><text x="270" y="86">child of the root</text><text x="170" y="146">leaves</text></g>
</svg>
:::

## Binary trees {lvl=1 id=s-binary label="Foundations"}

The most useful kind limits every item to **at most two children**, called **left** and **right**. This is a **binary tree**. Each level can hold twice as many items as the one above it: 1, 2, 4, 8, 16... So a tree with $h$ levels can hold up to $2^h - 1$ items. Read it as: "double the room with each new level". With 20 levels that is over a million items.

Turn it around and you see the superpower: **a million items fit in only 20 levels**, so no item is more than about 20 steps from the root, if the tree is well shaped.

```python
class Node:
    def __init__(self, key):
        self.key = key        # what this node stores
        self.left = None      # left child, or None
        self.right = None     # right child, or None
```

A tree is just a pointer to its root node. `None` stands for "nothing here".

:::qc lvl=1
q: A binary tree has 4 full levels. What is the largest number of nodes it can hold?
options: ["8", "15", "16"]
answer: 1
right: Right. 1 + 2 + 4 + 8 = 15, which is 2⁴ − 1.
wrong: Add up the levels: the first has 1 node, the second up to 2, the third up to 4. What does the fourth have, and what is the total?
:::

## Visiting every node: traversals {lvl=2 id=s-traversals label="SDE-1"}

Sometimes you need to walk the whole tree, to print it, count it or copy it. There are four classic orders. Three go deep first and differ only in **when the node itself is handled** compared with its two sides; the fourth goes level by level.

- **Preorder**: node, then left, then right. (Good for copying a tree: parents before children.)
- **Inorder**: left, then node, then right. (For a search tree, this gives sorted order.)
- **Postorder**: left, then right, then node. (Good for deleting a tree or adding up sizes: children before parents.)
- **Level order**: row by row, left to right.

Take the tree whose root is 4, with children 2 and 6, and grandchildren 1, 3, 5, 7:

| Order | Visits |
|---|---|
| Preorder | 4 2 1 3 6 5 7 |
| Inorder | 1 2 3 4 5 6 7 |
| Postorder | 1 3 2 5 7 6 4 |
| Level order | 4 2 6 1 3 5 7 |

The three deep orders are three lines of recursion, with the middle line moving:

```python
def inorder(node):
    if node is None:
        return []
    return inorder(node.left) + [node.key] + inorder(node.right)
```

Move `[node.key]` to the front for preorder, to the end for postorder. Level order needs a **queue** (first in, first out) instead of the call stack:

```python
from collections import deque

def level_order(root):
    out, queue = [], deque([root])
    while queue:
        node = queue.popleft()
        if node:
            out.append(node.key)
            queue.extend([node.left, node.right])
    return out
```

:::qc lvl=2
q: Which traversal would you use to delete a whole tree safely, freeing children before their parent?
options: ["Preorder", "Inorder", "Postorder"]
answer: 2
right: Right. Postorder handles both children before the node itself.
wrong: You want the node handled last, after both of its sides. Which order puts the node in last place?
:::

## The binary search tree {lvl=2 id=s-bst label="SDE-1"}

Now add one rule. In a **binary search tree** (BST), for every node, **everything in its left subtree is smaller, and everything in its right subtree is larger.**

That one rule is binary search turned into a shape. To find 5 in the tree above: compare with the root 4; 5 is larger, so go right; compare with 6; 5 is smaller, so go left; found. Each comparison discarded a whole side.

```python
def search(node, key):
    while node and node.key != key:
        node = node.left if key < node.key else node.right
    return node       # the node, or None if absent
```

**Insert** follows the same path, and attaches a new node where the search falls off the end:

```python
def insert(node, key):
    if node is None:
        return Node(key)
    if key < node.key:
        node.left = insert(node.left, key)
    elif key > node.key:
        node.right = insert(node.right, key)
    return node
```

Because the order is built into the shape, **inorder traversal gives the keys sorted**. And "all keys between 3 and 6" means walking only the part of the tree that could contain them:

```python
def in_range(node, lo, hi):
    if node is None:
        return []
    out = []
    if lo < node.key:
        out += in_range(node.left, lo, hi)
    if lo <= node.key <= hi:
        out.append(node.key)
    if node.key < hi:
        out += in_range(node.right, lo, hi)
    return out
```

This is the question a hash table could not answer.

:::qc lvl=2
q: You inspect a BST and the inorder traversal comes out as 3, 9, 7, 12. What does that tell you?
options: ["Nothing is wrong", "The tree is not a valid BST", "The tree is unbalanced"]
answer: 1
right: Right. Inorder on a valid BST is always increasing. 9 followed by 7 breaks the rule.
wrong: What does inorder produce for a correct search tree? Compare that with 3, 9, 7, 12.
:::

## Deleting a key {lvl=2 id=s-delete label="SDE-1"}

Deleting needs care because the rule must still hold afterwards. There are three cases:

1. **A leaf:** just cut it off.
2. **One child:** that child takes the node's place.
3. **Two children:** you cannot give both away. Instead, find the **successor**, the next larger key, which is the smallest key in the right subtree (go right once, then left as far as you can). Copy its key into the node, then delete the successor from the right subtree, where it has at most one child.

```python
def delete(node, key):
    if node is None:
        return None
    if key < node.key:
        node.left = delete(node.left, key)
    elif key > node.key:
        node.right = delete(node.right, key)
    else:
        if node.left is None:
            return node.right
        if node.right is None:
            return node.left
        succ = node.right
        while succ.left:
            succ = succ.left
        node.key = succ.key
        node.right = delete(node.right, succ.key)
    return node
```

## Cost is the height {lvl=3 id=s-height label="SDE-2"}

Search, insert and delete each walk one path from the root, so they cost $O(h)$, the height. For a well-shaped tree, $h \approx \log_2 n$, about 20 for a million.

But the BST rule says nothing about shape. Insert 1, 2, 3, 4, 5 in that order and each new key is larger than everything, so it always goes right: you get a straight line, $h = n$. Searching it is a linear scan, and the first $n$ inserts cost $1 + 2 + \dots + n \approx n^2/2$ comparisons in total. Sorted or nearly sorted input, which is common in real data (timestamps, ids), is the worst case.

For random insertion order the tree is, on average, reasonably balanced, with height around $2\ln n$ or about $1.4\log_2 n$ [Unverified: a standard textbook result]. Real systems cannot rely on lucky orders, which is the subject of the next lesson.

:::figure caption="The same five keys. Inserted as 3, 1, 4, 2, 5 the tree is bushy and finding 5 takes three steps. Inserted as 1, 2, 3, 4, 5 it is a line and finding 5 takes five."
<svg viewBox="0 0 320 150" role="img" aria-label="A bushy tree with root 3 beside a straight line tree 1 2 3 4 5 leaning right">
<g style="fill:none;stroke:var(--ink);stroke-width:1.4"><path d="M80 28 L50 62"/><path d="M80 28 L112 62"/><path d="M50 62 L64 98"/><path d="M112 62 L126 98"/>
<path d="M200 22 L222 52"/><path d="M222 52 L244 76"/><path d="M244 76 L266 100"/><path d="M266 100 L288 124"/></g>
<g style="stroke:var(--mat);stroke-width:1.6;fill:color-mix(in srgb,var(--mat) 12%,var(--surface))"><circle cx="80" cy="28" r="12"/><circle cx="50" cy="62" r="12"/><circle cx="112" cy="62" r="12"/><circle cx="64" cy="98" r="12"/><circle cx="126" cy="98" r="12"/><circle cx="200" cy="22" r="12"/><circle cx="222" cy="52" r="12"/><circle cx="244" cy="76" r="12"/><circle cx="266" cy="100" r="12"/><circle cx="288" cy="124" r="12"/></g>
<g style="font-size:11px;fill:var(--ink)" text-anchor="middle"><text x="80" y="32">3</text><text x="50" y="66">1</text><text x="112" y="66">4</text><text x="64" y="102">2</text><text x="126" y="102">5</text><text x="200" y="26">1</text><text x="222" y="56">2</text><text x="244" y="80">3</text><text x="266" y="104">4</text><text x="288" y="128">5</text></g>
</svg>
:::

:::qc lvl=3
q: You insert the keys 1, 2, 3, ..., 1000 in order into a plain BST. About how many steps does one final search take?
options: ["About 10", "About 1,000", "About 1,000,000"]
answer: 1
right: Right. Each key went to the right of the previous one, so the tree is a line of 1,000 nodes.
wrong: Follow the rule: each new key is larger than all earlier ones. Where does it attach every time?
:::

## Tree problems in interviews {lvl=3 id=s-interview label="SDE-2"}

Nearly every tree question is the same recipe: **decide what a call returns for one node, assuming it already works for the children, then combine.** A few classics:

| Problem family | What each call returns | Order |
|---|---|---|
| Height or depth of a tree | 1 + the larger of the two children's heights | postorder |
| Is the tree balanced, or its diameter | height, while updating a running answer | postorder |
| Level by level lists | the queue, one row at a time | BFS |
| Validate a BST | whether the node fits inside bounds `(lo, hi)` | preorder with bounds |
| Kth smallest in a BST | stop the inorder walk at the kth key | inorder |
| Lowest common ancestor in a BST | walk down: both smaller go left, both larger go right, else stop | iterative |

**The classic bug:** validating a BST by checking only that each node is between its **parent** and children. A 5 hidden deep in the left subtree of 3 passes every local test but violates the root. You must pass the bounds down:

```python
def valid(node, lo=float("-inf"), hi=float("inf")):
    if node is None:
        return True
    if not lo < node.key < hi:
        return False
    return valid(node.left, lo, node.key) and valid(node.right, node.key, hi)
```

Other things an SDE-2 should keep in mind: recursion depth (Python stops at about 1000 nested calls, so a line-shaped tree needs an explicit stack), and that serialising a tree needs markers for missing children, otherwise preorder alone is ambiguous.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A tree is a root with children, each child being a smaller tree. Files, web pages, org charts and families are trees. {lvl=1}
2. A binary tree has at most two children per node; $h$ levels hold up to $2^h - 1$ nodes, so a million fits in 20 levels. {lvl=1}
3. Preorder, inorder and postorder differ only in when the node is handled; level order uses a queue. {lvl=2}
4. BST rule: left smaller, right larger. Search and insert follow one path; inorder gives sorted order; range queries are cheap. {lvl=2}
5. Deleting with two children: copy in the successor, then delete the successor. {lvl=2}
6. Cost is $O(h)$. Sorted inserts make a line, so $h = n$. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A tree has no loops and one parent per node. If a node can be reached two ways, it is a graph. {lvl=1}
- A BST is fast only while it is bushy. Sorted input makes it a linked list. {lvl=3}
- Validate a BST with bounds passed down, not by comparing with the parent only. {lvl=3}
- Python's recursion limit is about 1000; a deep tree needs a loop and a stack. {lvl=3}
- Need exact matches only? A hash table is simpler. Need order, ranges or "next"? Use a tree. {lvl=2}
- In interviews: state what each recursive call returns, and say its cost in terms of $h$. {lvl=2}
:::
