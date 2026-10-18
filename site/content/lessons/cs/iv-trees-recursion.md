---
title: Trees and recursion
summary: Almost every tree question is the same move, ask each child, combine the answers, report up, and this lesson is the catalogue of its disguises.
ncert: []
up_to: SDE-2
builds_on: [Trees, Recursion, Stacks and queues]
notes_prompt: Explain to a friend how a computer finds the size of a folder that contains folders inside folders, without ever looking at the whole thing at once.
margin:
  - kind: history
    title: History
    text: 'Recursion as a way to define things by themselves is old mathematics. Programmers met it for real in the late 1950s, when the language LISP made functions that call themselves ordinary. [Unverified]'
  - kind: tip
    title: Interview favourite
    text: 'Before coding, say out loud: "what does my function return for an empty tree, and what do I need from each child?" Interviewers listen for exactly that sentence.'
  - kind: olympiad
    title: Hidden trees
    text: 'A game of chess, a set of nested brackets and a company org chart are all trees. If you can walk a tree with one clean function, you can walk all of them.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Binary search trees and tree walks chapters [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Sections on tree traversal and binary search trees [Unverified]" }
cards:
  - { front: "What are the two parts of every recursive tree function?", back: "A base case (usually an empty tree, answer for nothing) and a step that trusts the same function on the left and right child, then combines." }
  - { front: "Preorder, inorder, postorder: where does the node go?", back: "Preorder: node, left, right. Inorder: left, node, right. Postorder: left, right, node. Inorder on a binary search tree gives sorted order." }
  - { front: "How do you get diameter or max path with one pass?", back: "The helper returns the best path that can continue upward, and updates a separate best answer for the path that bends at this node." }
  - { front: "Why is checking only parent and child not enough for a BST?", back: "Every node must respect all of its ancestors. Pass an open interval (low, high) down and shrink it at each step." }
  - { front: "Level order traversal uses which structure?", back: "A queue. Freeze the queue's length at the start of each round; that many nodes are one level." }
  - { front: "Cost of one full traversal of a tree with n nodes?", back: "O(n) time (each node visited once) and O(h) extra space for the call stack, h being the height." }
core:
  idea: 'To answer a question about a whole tree, answer an empty tree directly, ask the same question of each child, then combine those answers with the current node. Pick what the helper returns so that one trip through the tree (O(n) time) is enough.'
  formulas:
    - tex: 'T(n) = O(n)'
      label: 'One visit per node'
    - tex: '\text{space} = O(h)'
      label: 'Call stack depth equals the tree height h'
    - tex: '\text{height}(v) = 1 + \max(\text{height}(l), \text{height}(r))'
      label: 'The model "return info up" step'
  conditions:
    - 'The tree has no cycles (a graph with cycles needs a visited set)'
    - 'Each node answer depends only on the node and its children (or on a bound passed down)'
    - 'The height is small enough for recursion (about a thousand deep in Python); otherwise use an explicit stack'
  sign: 'The commonest bug is mixing up what the helper returns with what the final answer is: the best path through a node is not what the parent can use.'
outcomes:
  - 'Write preorder, inorder, postorder and level order traversals from memory'
  - 'Recognise a "return info up" problem and choose what the helper returns'
  - 'Validate a binary search tree with bounds, and explain why parent checks fail'
  - 'Find a lowest common ancestor in a plain tree and in a BST'
  - 'Serialise a tree to text and rebuild it'
opener:
  story: |
    Right-click a folder on your laptop and pick **Properties**. A second later it says *4.2 GB*. That folder holds folders, which hold folders, which hold thousands of photos, and no one told the computer how deep it goes.

    Here is the lazy trick it uses. A folder does not count every file in the whole pile. It asks each sub-folder, "how big are you?", adds the sizes it gets back to the files lying directly inside itself, and reports that single number to its own parent.

    Every sub-folder does the same, down to folders with no sub-folders at all. Nobody ever holds the whole picture, yet the answer arrives at the top. The surprise is that this one move solves a long list of famous interview questions.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A tree of folders where each folder sends its total size up to its parent"><g style="fill:none;stroke:var(--rule);stroke-width:2"><path d="M160 54 L96 108"/><path d="M160 54 L224 108"/><path d="M96 126 L56 180"/><path d="M96 126 L136 180"/><path d="M224 126 L184 180"/><path d="M224 126 L264 180"/></g><g style="fill:var(--surface);stroke:var(--c);stroke-width:2"><circle cx="160" cy="40" r="16"/><circle cx="96" cy="118" r="15"/><circle cx="224" cy="118" r="15"/><circle cx="56" cy="190" r="13"/><circle cx="136" cy="190" r="13"/><circle cx="184" cy="190" r="13"/><circle cx="264" cy="190" r="13"/></g><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="160" y="45" style="font-weight:700">18</text><text x="96" y="123">10</text><text x="224" y="123">8</text><text x="56" y="195">4</text><text x="136" y="195">6</text><text x="184" y="195">3</text><text x="264" y="195">5</text></g><g style="fill:none;stroke:var(--c);stroke-width:1.5"><path d="M69 172 L84 138"/><path d="M123 172 L108 138"/><path d="M171 172 L212 138"/><path d="M251 172 L236 138"/><path d="M106 104 L148 56"/><path d="M214 104 L172 56"/></g><text x="160" y="228" style="font-size:10px;fill:var(--muted);text-anchor:middle">each node adds its children, then reports up</text></svg>'
life:
  - 'A file explorer''s folder size, and the "find all files named x" search, are tree walks.'
  - 'A web page is a tree of elements (the DOM); a browser asks each element its height, then stacks them.'
  - 'A company org chart: "how many people report to me, directly or not?" is the folder-size question in disguise.'
  - 'A tournament bracket is a tree: the winner of each match is what a node reports up to the next round.'
models:
  - name: 'Trust the smaller case'
    text: 'You do not need to understand the whole problem, only how to turn the answers of two smaller copies of it into your answer. Managers and project leads work this way: delegate, then combine.'
  - name: 'Report up what the boss can use'
    text: 'What you report to your parent and what you decide for yourself are different things. A good report contains only the facts the next level up needs, nothing more.'
  - name: 'Invariants beat inspection'
    text: 'A search tree is correct because of one rule that holds everywhere, not because someone looked at every node. Find the rule that must hold and check that, in life as in code.'
links:
  - leaf: 'cs/trees'
    name: 'Trees'
    same: 'Same objects: nodes, children, height, binary search tree order.'
    differs: 'The Trees lesson builds and explains them; this lesson is the library of questions asked about them.'
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'The base case plus trust-the-smaller-case recipe is exactly the recursion lesson''s core.'
    differs: 'Here the "smaller cases" are the two subtrees, and the skill is picking what each call returns.'
  - leaf: 'cs/stacks-and-queues'
    name: 'Stacks and queues'
    same: 'The call stack is a stack; level order uses a queue. Depth-first and breadth-first differ only by that choice.'
    differs: 'Recursion hides the stack; level order needs the queue spelled out.'
next:
  q: 'A tree never loops back. What if the links can form cycles, as in a road map, a friend network or a grid of squares? Then walking "children" would run forever. What small change keeps the same walk safe?'
  leaf: 'cs/iv-graphs'
  name: 'Graphs and grids'
symbols:
  - s: 'n'
    means: 'number of nodes in the tree (count)'
  - s: 'h'
    means: 'height of the tree, the longest chain from the root downward (counted in nodes)'
  - s: 'O(n)'
    means: 'linear time: the work grows in step with the number of nodes'
  - s: 'O(h)'
    means: 'extra memory that grows with the height, not with the node count'
  - s: '\max'
    means: 'the larger of the values inside the brackets'
  - s: 'lo, hi'
    means: 'the open range of values a node is allowed to have in a binary search tree'
---

:::hook
q: A folder holds a million files, nested to any depth. What is the simplest rule each folder can follow to report its total size?
options: ["Walk every file myself in one giant loop", "Ask each sub-folder for its total, add my own files, report that number up", "Sort all the files by size first"]
answer: 1
right: Right. Each folder needs only the numbers its children hand back. The same rule works for height, diameter, balance and many more, and it visits each node once.
wrong: That works for one folder but gives no rule a sub-folder can reuse. Think of a rule every folder, big or tiny, can follow using only what its children tell it.
:::

## The signal {lvl=1 id=s-signal label="Foundations"}

A **tree** is a set of **nodes** joined so that one node, the **root**, sits on top and every other node hangs below exactly one parent. A node with nothing below it is a **leaf**. In a **binary tree** each node has at most two children, called left and right.

How do you recognise a tree question? The input is a root node, not a list. The words are "tree", "root", "ancestor", "path", "subtree", "level" or "depth". The constraints say something like "up to 10,000 nodes", which tells you that visiting every node once is fine but visiting every pair is not.

For the code in this lesson, a node is this:

```python
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left      # another Node, or None
        self.right = right
```

## The template: ask, combine, report {lvl=1 id=s-template label="Foundations"}

Every recursive tree function has the same three lines. First the **base case**: what is the answer for an empty tree? Then ask the left and right children the same question and *trust* the answers. Finally combine them with the current node.

```python
def solve(node):
    if node is None:              # answer for "nothing here"
        return BASE
    left = solve(node.left)       # trust: this is right for the left subtree
    right = solve(node.right)
    return combine(node.val, left, right)
```

A concrete first case, the **height** (number of nodes on the longest chain from here down):

```python
def height(node):
    if node is None:
        return 0
    return 1 + max(height(node.left), height(node.right))
```

Read it as: the height of a tree is one more than the taller of its two subtrees. An empty tree has height 0. Agree with the interviewer on whether height counts nodes or edges; they differ by one.

:::qc lvl=1
q: A tree is just one node with no children. What does height return, counting nodes?
options: ["0", "1", "2"]
answer: 1
right: Right. Both children are empty and give 0, so the answer is 1 + max(0, 0) = 1.
wrong: Trace it: the two empty children return 0, then the node adds itself.
:::

## Four ways to walk a tree {lvl=2 id=s-walks label="SDE-1"}

A **traversal** visits every node once. The only choice is *when* you handle the current node, relative to its two subtrees:

| Walk | Order | Use it when |
|---|---|---|
| Preorder | node, left, right | copying or saving a tree (parents come before children) |
| Inorder | left, node, right | reading a binary search tree in sorted order |
| Postorder | left, right, node | the answer needs the children first (size, height, delete) |
| Level order | one level at a time, using a queue | "by level", "shortest depth", "right side view" |

The first three are one function with the line that records the node moved up or down. Level order is different: it needs a **queue**, and the trick is to freeze the queue's length at the start of each round, because that many nodes make up one level.

```python
from collections import deque

def level_order(root):
    out, q = [], deque([root] if root else [])
    while q:
        out.append([])
        for _ in range(len(q)):          # exactly one level
            node = q.popleft()
            out[-1].append(node.val)
            q.extend(c for c in (node.left, node.right) if c)
    return out
```

When recursion is risky (a tree 100,000 deep), the same inorder walk can use your own stack:

```python
def inorder(root):
    out, stack, cur = [], [], root
    while cur or stack:
        while cur:                 # go left as far as possible
            stack.append(cur)
            cur = cur.left
        cur = stack.pop()          # nothing more on the left: visit
        out.append(cur.val)
        cur = cur.right
    return out
```

:::figure caption="Same tree, three walks. The only difference is when the node itself is written down."
<svg viewBox="0 0 320 120" role="img" aria-label="A three node tree with the orders of preorder, inorder and postorder"><g style="fill:none;stroke:var(--rule);stroke-width:2"><path d="M70 36 L40 76"/><path d="M70 36 L100 76"/></g><g style="fill:var(--surface);stroke:var(--c);stroke-width:2"><circle cx="70" cy="28" r="14"/><circle cx="40" cy="88" r="14"/><circle cx="100" cy="88" r="14"/></g><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="70" y="33">B</text><text x="40" y="93">A</text><text x="100" y="93">C</text></g><g style="font-size:12px;fill:var(--ink)"><text x="150" y="34">Preorder: B A C</text><text x="150" y="62">Inorder: A B C</text><text x="150" y="90">Postorder: A C B</text></g><text x="150" y="112" style="font-size:10px;fill:var(--muted)">B is written first, in the middle, last.</text></svg>
:::

:::qc lvl=2
q: Which walk lists the keys of a binary search tree from smallest to largest?
options: ["Preorder", "Inorder", "Level order"]
answer: 1
right: Right. Everything on the left is smaller and everything on the right is larger, so left, node, right comes out sorted.
wrong: Smaller keys live on the left. Which order visits the left side before the node?
:::

## Return info up {lvl=2 id=s-return label="SDE-1"}

Now the idea that earns its place in the catalogue. Many questions ask for something that depends on *two* children at once, for example the longest path between any two nodes. The trick: make the helper return **the one thing the parent needs**, and let the helper quietly record the answer to the real question on the side.

**Diameter** (longest path between two nodes, counted in edges). The best path *bending* at a node uses the depth of both children. But the parent can only extend one of them, so the helper returns the longer one plus one.

```python
def diameter(root):
    best = 0
    def depth(node):
        nonlocal best
        if node is None:
            return 0
        l, r = depth(node.left), depth(node.right)
        best = max(best, l + r)       # path that bends here
        return 1 + max(l, r)          # what the parent can extend
    depth(root)
    return best
```

**Balanced** (every node's two subtrees differ in height by at most 1). Return the height, or a flag value such as -1 once any subtree fails. The flag travels up and stops all work early.

```python
def balanced(root):
    def h(node):
        if node is None:
            return 0
        l = h(node.left)
        if l < 0: return -1
        r = h(node.right)
        if r < 0 or abs(l - r) > 1: return -1
        return 1 + max(l, r)
    return h(root) >= 0
```

The slow version calls height at every node, which makes it $O(n^2)$ on a lopsided tree. Returning height *and* the verdict in one value brings it to $O(n)$. This "do not compute the same thing twice" step is the whole upgrade from SDE-1 to SDE-2 on tree problems.

:::qc lvl=2
q: In diameter, why does the helper return 1 + max(l, r) and not 1 + l + r?
options: ["A path that bends at a node cannot also continue upward through it", "It is faster", "The tree is always balanced"]
answer: 0
right: Right. A path goes through a node once. The bending path is recorded in best; the upward answer can only follow one child.
wrong: Picture the path. Once it uses both children of a node, can it also go up to that node's parent?
:::

## Binary search trees: one rule everywhere {lvl=2 id=s-bst label="SDE-1"}

A **binary search tree** (BST) obeys one rule: for every node, all keys in its left subtree are smaller and all in its right subtree are larger. A beginner checks only "left child smaller, right child larger". That misses a tree like this: root 10, left child 5, right child 15, and 15 has a left child 6. Each parent-child pair looks fine, but 6 sits in the right side of 10 and is smaller than 10.

The fix is to pass down the **range** a node is allowed to be in, and tighten it at each step:

```python
def is_bst(node, lo=float('-inf'), hi=float('inf')):
    if node is None:
        return True
    if not (lo < node.val < hi):
        return False
    return (is_bst(node.left, lo, node.val) and
            is_bst(node.right, node.val, hi))
```

This is the flip side of "return info up": information flows **down** as arguments. Decide per problem which direction the facts travel. Kth smallest in a BST is the inorder walk, stopped after k nodes. Whether duplicates are allowed, and on which side, is a question to ask before you code.

## Lowest common ancestor {lvl=3 id=s-lca label="SDE-2"}

The **lowest common ancestor** (LCA) of two nodes is the deepest node that has both of them in its subtree (a node counts as its own descendant). Think of two cousins looking for the nearest shared grandparent.

In a plain binary tree, ask each child "do you contain p or q?" The node where *both* children answer yes is the LCA. If only one side answers, pass that answer up.

```python
def lca(node, p, q):
    if node is None or node is p or node is q:
        return node                      # found one, or ran out
    l = lca(node.left, p, q)
    r = lca(node.right, p, q)
    return node if l and r else (l or r)
```

In a BST you do not need to ask both sides. If both keys are smaller than the node, go left; if both are larger, go right; otherwise this node splits them, and it is the answer. That is $O(h)$ with a plain loop.

```python
def lca_bst(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root
```

## Saving a tree as text {lvl=3 id=s-serialise label="SDE-2"}

To send a tree across a network you need a string that can rebuild the same tree. A plain list of values is ambiguous: many trees share the same values. The fix is to also write down the **empty spots**, using a marker such as `#`. Preorder with markers is enough, because each marker closes a branch and tells the reader where the next sibling starts.

```python
def serialise(root):
    out = []
    def go(n):
        if n is None:
            out.append('#'); return
        out.append(str(n.val))
        go(n.left); go(n.right)
    go(root)
    return ','.join(out)
```

Rebuilding reads the tokens in the same order with an iterator, so each call consumes exactly its own part:

```python
def deserialise(s):
    it = iter(s.split(','))
    def build():
        t = next(it)
        if t == '#':
            return None
        node = Node(int(t))
        node.left = build()
        node.right = build()
        return node
    return build()
```

A tree with $n$ nodes always produces $2n + 1$ tokens: $n$ values and $n + 1$ empty spots. [Inference: a counting argument you can check on small trees.]

## Catalogue: one template, many questions {lvl=3 id=s-catalogue label="SDE-2"}

The problem *types* below are described in my own words. Learn the family, then map any new statement to a row.

| # | Problem type (own words) | Variant |
|---|---|---|
| 1 | Count the nodes, sum the values, find the maximum | Postorder combine |
| 2 | Longest chain from the root down | Return info up (height) |
| 3 | Longest chain between any two nodes | Return info up plus side answer |
| 4 | Is the tree shaped evenly (balanced)? | Return info up with a flag |
| 5 | Is the tree a mirror of itself? | Walk two nodes at once |
| 6 | Do two trees look identical? | Walk two nodes at once |
| 7 | Is this a valid search tree? | Bounds passed down |
| 8 | The k-th smallest key in a search tree | Inorder, stop early |
| 9 | Nearest shared ancestor of two nodes | LCA (plain or BST) |
| 10 | Print the tree level by level, or its right edge | Level order |
| 11 | Is there a root-to-leaf path with a given sum? | Pass the remaining sum down |
| 12 | Best path sum with possibly negative values | Return info up plus side answer |
| 13 | Turn a tree into text and back | Preorder with markers |
| 14 | Rebuild a tree from two of its walks | Split by the root's position |
| 15 | Largest sub-tree that is itself a search tree | Return a tuple up |

## Variants table {lvl=3 id=s-variants label="SDE-2"}

| Variant | Signal in the statement | Change to the template |
|---|---|---|
| Postorder combine | "total", "count", "max over the tree" | `return combine(val, left, right)` |
| Return info up | "longest", "best", "any two nodes" | Helper returns what the parent can extend; update a `nonlocal best` for the bend |
| Flag up | "check that every node ..." | Return a sentinel (such as -1) on failure and stop early |
| Pass down | "within range", "remaining sum", "depth so far" | Extra parameters in the helper |
| Two nodes at once | "same", "mirror", "symmetric" | `solve(a, b)` with two nodes; compare, then recurse on matching children |
| Level order | "by level", "nearest to the root", "side view" | Queue and a frozen length per round |
| Tuple up | several facts needed from a subtree | Return `(size, low, high, ok)` and combine all of them |

:::qc lvl=3
q: A statement asks for the largest subtree that is a valid search tree. Which variant fits?
options: ["Level order", "Tuple up: return size, smallest, largest and a validity flag from each child", "Preorder with markers"]
answer: 1
right: Right. The parent must know whether the child tree is valid, how big it is, and its min and max, so each call returns all of that at once.
wrong: What does a parent need to know about each child to decide about itself? More than one number.
:::

## Common bugs {lvl=2 id=s-bugs label="SDE-1"}

- **Forgetting the empty tree.** Calling `node.left` on `None` crashes. Put the base case first.
- **Returning the wrong thing.** In diameter, returning the bending path to the parent overcounts.
- **Parent-only BST check.** Always pass a range.
- **Mutating shared state without resetting it.** A global `best` that is not reset between test cases keeps the old answer.
- **Height off by one.** Decide nodes versus edges at the start.
- **Deep recursion.** Python stops at about 1000 frames by default. For a possibly skewed tree, use the explicit stack or a loop.
- **Comparing nodes by value.** `p.val == q.val` is not "same node" when values repeat. Use `is`.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Every tree function is: base case, ask both children, combine, report up. {lvl=1}
2. Preorder, inorder, postorder differ only in when the node is handled; level order needs a queue. {lvl=2}
3. For "longest" or "best" questions, return what the parent can extend and record the real answer on the side. {lvl=2}
4. A BST is valid only if every node fits the range set by all its ancestors; pass `(lo, hi)` down. {lvl=2}
5. LCA: the node where both children report yes; in a BST, the first node that splits the two keys. {lvl=3}
6. Serialise with preorder plus markers for empty spots; n nodes give 2n + 1 tokens. {lvl=3}
7. A traversal costs O(n) time and O(h) stack; use an explicit stack when the tree can be very deep. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Say what the helper returns before writing any code; most failed answers confuse the helper's return with the final answer. {lvl=2}
- Check the empty tree and the single-node tree on paper first. {lvl=1}
- Compare nodes with `is`, not by value, unless the statement says keys are distinct. {lvl=3}
- Repeated height calls inside a recursion turn O(n) into O(n²); return the extra fact instead. {lvl=3}
- Do not rely on recursion for a tree that could be a straight line of 100,000 nodes in Python. {lvl=3}
:::
