---
title: Graphs and grids
summary: Pixels, courses, friends and city streets are all one thing, dots joined by lines, and a handful of walks answers most questions about them.
ncert: []
up_to: SDE-2
builds_on: [Graphs, Graph algorithms, Stacks and queues, Trees and recursion]
notes_prompt: Explain to a friend how a paint-bucket tool knows which pixels to fill, and why it never fills the same pixel twice.
margin:
  - kind: history
    title: History
    text: 'Leonhard Euler turned the bridges of Konigsberg into dots and lines in 1736, and that is usually named as the start of graph theory. [Unverified]'
  - kind: tip
    title: Interview favourite
    text: 'If the statement shows a grid of 0s and 1s, a list of "A needs B" pairs, or words that differ by one letter, say "this is a graph" out loud. Half the work is seeing it.'
  - kind: olympiad
    title: Contest link
    text: 'Contest problems hide graphs even better: states of a puzzle, positions of a robot, remainders modulo a number. The nodes are whatever you decide is a situation.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Graph chapters: elementary graph algorithms, shortest paths [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Graph traversal and weighted graph chapters [Unverified]" }
cards:
  - { front: "What turns a tree walk into a safe graph walk?", back: "A visited set. Mark a node the moment you put it in the stack or queue, and never put a marked node in again." }
  - { front: "Which walk gives the fewest steps in an unweighted graph?", back: "Breadth-first search (a queue). It visits everything one step away, then two steps away, and so on." }
  - { front: "When is topological sort possible?", back: "Only when the directed graph has no cycle. Repeatedly take a node with no unmet prerequisites; if you get stuck before finishing, there is a cycle." }
  - { front: "What are the two operations of union-find?", back: "find(x) names the group x belongs to; union(a, b) merges two groups. With path compression both are nearly constant time." }
  - { front: "When must you leave BFS and use Dijkstra?", back: "When edges have different non-negative costs. Always expand the cheapest known node next, using a heap." }
  - { front: "How do you visit the four neighbours in a grid?", back: "Loop over the offsets (1,0), (-1,0), (0,1), (0,-1) and skip any cell outside the grid." }
core:
  idea: 'A graph is dots joined by lines. To explore it, keep a to-do list and a record of what you have already seen: a stack gives depth-first, a queue gives breadth-first and the fewest steps. Most questions are a walk plus one small change: count the walks, track the distance, or order the dependencies.'
  formulas:
    - tex: 'T = O(V + E)'
      label: 'A walk touches each node and each link a constant number of times'
    - tex: 'T = O((V + E)\log V)'
      label: 'Dijkstra with a heap'
  conditions:
    - 'Nodes are marked seen when they are added to the to-do list, not when removed'
    - 'BFS gives shortest paths only when every step costs the same'
    - 'Dijkstra needs every edge cost to be zero or more'
    - 'Topological order exists only for graphs with no directed cycle'
  sign: 'The commonest mistake is marking a node seen too late (when popped), so it enters the queue many times and the walk becomes slow or loops.'
outcomes:
  - 'Recognise a graph hidden in a grid, a dependency list or a puzzle'
  - 'Count islands and fill regions with a walk over a grid'
  - 'Find the fewest steps with BFS and order dependencies with a topological sort'
  - 'Use union-find to count groups and spot a redundant link'
  - 'Pick between BFS and Dijkstra and clone a graph safely'
opener:
  story: |
    In a drawing app you pick the paint bucket and click inside a circle. The whole inside turns red and the colour stops dead at the outline. The picture is a million pixels, and the app was never told where the circle ends.

    Here is what it does. It colours the pixel you clicked, then looks at that pixel's four neighbours. Any neighbour that has the old colour gets painted and joins a list of pixels whose neighbours still need a look. It stops when the list is empty. A pixel that is already painted is never visited again.

    Notice that there is no map of the picture, only "who touches whom". That is a graph, and the same recipe finds the shortest route in a metro, orders your college courses, and counts islands on a satellite photo.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A grid of squares where a clicked square spreads colour to neighbours and stops at a wall"><g style="fill:var(--surface);stroke:var(--rule)"><rect x="40" y="30" width="30" height="30"/><rect x="70" y="30" width="30" height="30"/><rect x="100" y="30" width="30" height="30"/><rect x="130" y="30" width="30" height="30"/><rect x="160" y="30" width="30" height="30"/><rect x="190" y="30" width="30" height="30"/><rect x="220" y="30" width="30" height="30"/><rect x="40" y="60" width="30" height="30"/><rect x="70" y="60" width="30" height="30"/><rect x="100" y="60" width="30" height="30"/><rect x="130" y="60" width="30" height="30"/><rect x="160" y="60" width="30" height="30"/><rect x="190" y="60" width="30" height="30"/><rect x="220" y="60" width="30" height="30"/><rect x="40" y="90" width="30" height="30"/><rect x="70" y="90" width="30" height="30"/><rect x="100" y="90" width="30" height="30"/><rect x="130" y="90" width="30" height="30"/><rect x="160" y="90" width="30" height="30"/><rect x="190" y="90" width="30" height="30"/><rect x="220" y="90" width="30" height="30"/><rect x="40" y="120" width="30" height="30"/><rect x="70" y="120" width="30" height="30"/><rect x="100" y="120" width="30" height="30"/><rect x="130" y="120" width="30" height="30"/><rect x="160" y="120" width="30" height="30"/><rect x="190" y="120" width="30" height="30"/><rect x="220" y="120" width="30" height="30"/><rect x="40" y="150" width="30" height="30"/><rect x="70" y="150" width="30" height="30"/><rect x="100" y="150" width="30" height="30"/><rect x="130" y="150" width="30" height="30"/><rect x="160" y="150" width="30" height="30"/><rect x="190" y="150" width="30" height="30"/><rect x="220" y="150" width="30" height="30"/></g><g style="fill:color-mix(in srgb,var(--c) 35%,var(--surface));stroke:var(--rule)"><rect x="40" y="30" width="30" height="30"/><rect x="70" y="30" width="30" height="30"/><rect x="40" y="60" width="30" height="30"/><rect x="70" y="60" width="30" height="30"/><rect x="100" y="60" width="30" height="30"/><rect x="40" y="90" width="30" height="30"/><rect x="70" y="90" width="30" height="30"/><rect x="40" y="120" width="30" height="30"/></g><g style="fill:var(--ink)"><rect x="100" y="30" width="30" height="30"/><rect x="130" y="60" width="30" height="30"/><rect x="100" y="90" width="30" height="30"/><rect x="70" y="120" width="30" height="30"/><rect x="40" y="150" width="30" height="30"/></g><rect x="70" y="90" width="30" height="30" style="fill:var(--c)"/><text x="40" y="206" style="font-size:10px;fill:var(--muted)">click (strong colour): colour spreads to touching</text><text x="40" y="220" style="font-size:10px;fill:var(--muted)">squares and stops at the black wall</text></svg>'
life:
  - 'Maps apps find the fewest metro stops or the quickest drive: BFS for equal steps, Dijkstra when each road has its own time.'
  - 'A college timetable ("Maths 2 needs Maths 1") is a dependency graph; the course order comes from a topological sort.'
  - 'Social apps ask "are these two people connected through friends?", which union-find or a walk answers.'
  - 'Build tools such as the one compiling a big app order the files so each is built after the files it needs.'
models:
  - name: 'Find the hidden graph'
    text: 'Before solving, ask what the "situations" are and which one situation leads to which. A puzzle, a road trip and a to-do list with dependencies all become easier once you draw dots and arrows.'
  - name: 'Mark it when you promise to visit'
    text: 'If you put a task on your list, tick it as "planned" at once. People who wait until they do it often plan the same task five times. Cheap bookkeeping at the right moment saves huge repeated work.'
  - name: 'Fewest steps means widen first'
    text: 'To find the nearest thing, search in rings outward from yourself, not down one long path. The same is true of looking for a lost key, a job, or a coffee shop.'
links:
  - leaf: 'cs/graphs'
    name: 'Graphs'
    same: 'Same objects: nodes, edges, adjacency lists, directed and undirected.'
    differs: 'The Graphs lesson explains what they are; this one is the set of recipes for questions asked about them.'
  - leaf: 'cs/graph-algorithms'
    name: 'Graph algorithms'
    same: 'BFS, DFS, topological sort and Dijkstra are the same algorithms.'
    differs: 'There they are explained step by step; here the point is recognising a problem as one of them.'
  - leaf: 'cs/iv-trees-recursion'
    name: 'Trees and recursion'
    same: 'A tree is a graph with no cycles; the same ask-and-combine walk applies.'
    differs: 'A graph walk needs a visited record, because a node can be reached by more than one road.'
next:
  q: 'Dijkstra kept asking "which node is cheapest right now?" and a heap answered instantly. Could the same trick find the 10 biggest numbers in a stream of a billion without sorting them all?'
  leaf: 'cs/iv-heaps-top-k'
  name: 'Heaps and top-k'
symbols:
  - s: 'V'
    means: 'number of nodes (vertices) in the graph (count)'
  - s: 'E'
    means: 'number of links (edges) in the graph (count)'
  - s: 'O(V + E)'
    means: 'work proportional to the nodes plus the links, so each is touched about once'
  - s: '\log V'
    means: 'the cost of one heap operation: how many times V can be halved'
  - s: 'R, C'
    means: 'rows and columns of a grid (count); the grid has R times C nodes'
---

:::hook
q: You click the paint bucket inside a circle in a 1,000 by 1,000 picture (a million pixels). Roughly how many pixels does the app have to look at?
options: ["All million, every time", "The pixels inside the circle plus the ones along its outline", "Just the one you clicked"]
answer: 1
right: Right. It spreads outward and only ever looks at the region and its border. Cost grows with the size of the region, not the picture. That is the idea behind every graph walk.
wrong: Looking at all a million would be slow for a tiny circle, and one pixel could not colour the circle. What does it examine as it spreads?
:::

## The signal: dots and lines {lvl=1 id=s-signal label="Foundations"}

A **graph** is a set of **nodes** (dots) and **edges** (lines joining two of them). Edges can be **directed** (one-way, like "A needs B") or **undirected** (two-way, like friendship). When each edge carries a number, such as minutes or rupees, the graph is **weighted**.

Many statements do not say "graph". These clues do:

| Clue in the statement | Hidden graph |
|---|---|
| A grid of cells, "adjacent", "region", "island" | Nodes are cells; edges join neighbours |
| "A must come before B", "prerequisite", "order the tasks" | Directed edges A to B |
| "Fewest moves", "minimum steps", "shortest transformation" | Nodes are situations; edges are single moves |
| "Are these connected?", "how many groups?" | Undirected graph, count the groups |
| "Cheapest route", "least time", costs on the links | Weighted graph |

How a graph is stored: usually an **adjacency list**, a map from each node to the list of its neighbours. For a grid you do not store anything; you compute the neighbours on demand.

```python
DIRS = ((1, 0), (-1, 0), (0, 1), (0, -1))

def neighbours(r, c, R, C):
    for dr, dc in DIRS:
        nr, nc = r + dr, c + dc
        if 0 <= nr < R and 0 <= nc < C:      # stay inside the grid
            yield nr, nc
```

## One walk, two flavours {lvl=2 id=s-walk label="SDE-1"}

A walk keeps a **to-do list** of nodes and a **seen** set. Take a node from the list, add its unseen neighbours to the list, mark them seen. Repeat until the list is empty.

- If the list is a **stack** (last in, first out) you dive deep first: **depth-first search** (DFS).
- If it is a **queue** (first in, first out) you spread in rings: **breadth-first search** (BFS).

Both touch each node and edge about once, so the cost is $O(V + E)$. Read that as: the work grows with the number of nodes plus links, no more.

The rule that matters most: **mark a node seen when you add it, not when you take it out.** Otherwise a node can be added many times before its first visit.

:::qc lvl=2
q: A cell is marked seen only when popped from the queue. What goes wrong?
options: ["Nothing, it is the same", "The same cell can be queued many times, wasting time and sometimes memory", "BFS stops finding shortest paths because the queue is empty"]
answer: 1
right: Right. Four neighbours may each add the same cell before it is ever popped. Marking at the moment of adding keeps one copy.
wrong: Think about a cell with several neighbours that are all on the queue before it is visited.
:::

## Grids and islands {lvl=2 id=s-islands label="SDE-1"}

**Counting islands**: a grid has land (`1`) and water (`0`). An island is a group of land cells joined up, down, left or right. Scan every cell; whenever you meet unseen land, you have found a new island, so add one to the count and walk the whole island, marking its cells seen so you never count it again. Flood fill (the paint bucket) is the same walk that changes colours instead of counting.

```python
def count_islands(grid):
    R, C = len(grid), len(grid[0])
    seen, islands = set(), 0
    for r in range(R):
        for c in range(C):
            if grid[r][c] == '1' and (r, c) not in seen:
                islands += 1
                seen.add((r, c)); stack = [(r, c)]
                while stack:
                    y, x = stack.pop()
                    for ny, nx in neighbours(y, x, R, C):
                        if grid[ny][nx] == '1' and (ny, nx) not in seen:
                            seen.add((ny, nx)); stack.append((ny, nx))
    return islands
```

Variants only change one line: the condition for a cell being "allowed" (land, same colour, not a wall), or the directions (add the four diagonals for 8-way neighbours).

## Fewest steps: BFS {lvl=2 id=s-bfs label="SDE-1"}

Because BFS finishes every cell one step away before any cell two steps away, **the first time it reaches a cell is by the shortest route**. Store the distance when you add a node.

```python
from collections import deque

def shortest(grid, start, goal):
    R, C = len(grid), len(grid[0])
    dist = {start: 0}
    q = deque([start])
    while q:
        cur = q.popleft()
        if cur == goal:
            return dist[cur]
        for nxt in neighbours(*cur, R, C):
            if grid[nxt[0]][nxt[1]] == '.' and nxt not in dist:
                dist[nxt] = dist[cur] + 1
                q.append(nxt)
    return -1                      # goal unreachable
```

Two useful twists. **Multi-source BFS**: put *all* the starting cells in the queue at distance 0 (for example, every rotten fruit, every exit door); the rings then grow from all sources at once. **Implicit graphs**: the nodes can be words or puzzle states; a function that lists the legal next states plays the role of `neighbours`.

:::figure caption="BFS spreads in rings. The number in each cell is its fewest steps from the start S."
<svg viewBox="0 0 320 138" role="img" aria-label="A small grid showing breadth-first distances from a start cell"><g style="fill:var(--surface);stroke:var(--rule)"><rect x="60" y="20" width="40" height="40"/><rect x="100" y="20" width="40" height="40"/><rect x="140" y="20" width="40" height="40"/><rect x="180" y="20" width="40" height="40"/><rect x="60" y="60" width="40" height="40"/><rect x="100" y="60" width="40" height="40"/><rect x="140" y="60" width="40" height="40"/><rect x="180" y="60" width="40" height="40"/></g><rect x="60" y="20" width="40" height="40" style="fill:var(--c)"/><g style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--rule)"><rect x="100" y="20" width="40" height="40"/><rect x="60" y="60" width="40" height="40"/></g><g style="fill:color-mix(in srgb,var(--c) 8%,var(--surface));stroke:var(--rule)"><rect x="140" y="20" width="40" height="40"/><rect x="100" y="60" width="40" height="40"/></g><g style="font-size:14px;fill:var(--ink);text-anchor:middle"><text x="80" y="45" style="fill:var(--surface);font-weight:700">S</text><text x="120" y="45">1</text><text x="160" y="45">2</text><text x="200" y="45">3</text><text x="80" y="85">1</text><text x="120" y="85">2</text><text x="160" y="85">3</text><text x="200" y="85">4</text></g><text x="60" y="116" style="font-size:10px;fill:var(--muted)">first arrival = shortest route</text><text x="60" y="130" style="font-size:10px;fill:var(--muted)">(equal steps)</text></svg>
:::

:::qc lvl=2
q: Why does BFS find the shortest path when every step costs the same?
options: ["It tries all paths", "It reaches all cells at distance d before any cell at distance d + 1, so the first arrival is the closest", "It uses recursion"]
answer: 1
right: Right. The queue holds one ring at a time, in order, so no longer route can arrive before a shorter one.
wrong: What does the queue guarantee about the order in which cells are taken out?
:::

## Dependencies: topological sort {lvl=3 id=s-topo label="SDE-2"}

You have courses and pairs "b before a". An order that respects every pair is a **topological order**. Idea in plain words: count, for each course, how many prerequisites are still unmet. Courses with count 0 can be taken now. Taking one reduces the count of every course that needed it. If you finish with courses left over that never reach 0, they sit on a **cycle** (A needs B, B needs C, C needs A), and no order exists.

```python
from collections import deque

def course_order(n, prereqs):          # (a, b): b comes before a
    after = [[] for _ in range(n)]
    indeg = [0] * n
    for a, b in prereqs:
        after[b].append(a); indeg[a] += 1
    ready = deque(i for i in range(n) if indeg[i] == 0)
    order = []
    while ready:
        u = ready.popleft(); order.append(u)
        for v in after[u]:
            indeg[v] -= 1
            if indeg[v] == 0: ready.append(v)
    return order if len(order) == n else []      # [] means a cycle
```

One walk answers two questions: "give me an order" and "is it possible at all?". Cost $O(V + E)$.

## Groups: union-find {lvl=3 id=s-dsu label="SDE-2"}

For "how many groups?" or "does this new link join two people already connected?" a walk works but is wasteful when links arrive one at a time. **Union-find** keeps a label for each node: its group's leader. `find(x)` follows labels up to the leader; `union(a, b)` makes one leader point at the other. Shortcutting the chain as you climb (**path compression**) makes both nearly constant time.

```python
class DSU:
    def __init__(self, n):
        self.p = list(range(n))        # everyone leads themselves
    def find(self, x):
        while self.p[x] != x:
            self.p[x] = self.p[self.p[x]]   # shortcut one level
            x = self.p[x]
        return x
    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb: return False      # already connected: redundant link
        self.p[ra] = rb; return True
```

Start with $n$ groups; every successful union reduces the count by one. The first link whose `union` returns False is the one that closes a cycle.

## Copying a graph {lvl=3 id=s-clone label="SDE-2"}

To make a deep copy of a graph where nodes point at neighbours (possibly in cycles), keep a **map from old node to its new copy**. The map doubles as the seen set: a node already in the map is not copied again, but you still wire the new edge to its copy.

```python
def clone(node):                       # node has .val and .neighbors
    if not node: return None
    copy = {node: Node(node.val)}
    stack = [node]
    while stack:
        cur = stack.pop()
        for nb in cur.neighbors:
            if nb not in copy:
                copy[nb] = Node(nb.val); stack.append(nb)
            copy[cur].neighbors.append(copy[nb])
    return copy[node]
```

## When costs appear: Dijkstra {lvl=3 id=s-dijkstra label="SDE-2"}

BFS counts steps, so it fails when roads take different times. **Dijkstra** keeps a heap of (cost so far, node) and always expands the cheapest one next. The first time a node is taken out, its cost is final, as long as no edge is negative. (Heaps get their own lesson next; for now `heapq` is a box whose smallest item comes out first.)

```python
import heapq

def dijkstra(adj, src):                # adj[u] = [(v, weight), ...]
    dist = {src: 0}
    heap = [(0, src)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist.get(u, float('inf')): continue    # stale entry
        for v, w in adj[u]:
            if d + w < dist.get(v, float('inf')):
                dist[v] = d + w
                heapq.heappush(heap, (d + w, v))
    return dist
```

A negative edge breaks the "first time is final" promise. Then the interviewer wants Bellman-Ford, which relaxes every edge $V - 1$ times. [Inference: usual interview expectation, not a rule.]

## Catalogue: one family, many questions {lvl=3 id=s-catalogue label="SDE-2"}

Problem types in my own words; each maps to a variant of the table below.

| # | Problem type (own words) | Variant |
|---|---|---|
| 1 | Count the separate land masses on a map grid | Grid flood fill, count starts |
| 2 | Paint a region with a new colour | Grid flood fill |
| 3 | Largest land mass by area | Flood fill returning size |
| 4 | Fewest moves through a maze | BFS on a grid |
| 5 | Fruit rotting outward from several cells, how long until all gone | Multi-source BFS |
| 6 | Fewest single-letter changes to turn one word into another | BFS on implicit graph |
| 7 | Can all courses be finished, and in what order? | Topological sort |
| 8 | Which cells can drain to both oceans? | Walk from the borders inward |
| 9 | Number of friend groups | Union-find or flood fill |
| 10 | Which link in a list first creates a loop? | Union-find, first failed union |
| 11 | Is a set of links a valid tree? | n - 1 links and one group |
| 12 | Make a deep copy of a connected structure | Clone with an old-to-new map |
| 13 | Cheapest flight with costs on routes | Dijkstra |
| 14 | Recover a letter order from words sorted in an unknown alphabet | Build edges, then topological sort |
| 15 | Can the people be split into two teams with no feuds inside a team? | BFS two-colouring |

## Variants table {lvl=3 id=s-variants label="SDE-2"}

| Variant | Signal | Change to the template |
|---|---|---|
| Flood fill / islands | "region", "connected cells", "count groups in a grid" | DFS or BFS from each unseen cell; count the starts |
| BFS shortest path | "fewest steps/moves", equal cost | Queue plus `dist`; stop at goal |
| Multi-source BFS | several starts, "time until everything" | Put every source in the queue first at distance 0 |
| Implicit graph | "transform", "puzzle states" | A function generating next states instead of `neighbours` |
| Topological sort | "before/after", "prerequisite", "order" | Count unmet prerequisites; queue the zeros |
| Union-find | "groups", "connected", links arriving one by one | `find`/`union`; a failed union means a cycle |
| Clone | "deep copy" | Map old to new, wire edges from the map |
| Dijkstra | costs differ, none negative | Heap keyed by cost so far |
| Two-colouring | "split into two sets with no conflict" | BFS alternating colours; a clash means impossible |

:::qc lvl=3
q: Fewest flights from city A to city B is wanted, and each flight counts the same. Which walk fits?
options: ["Dijkstra with a heap", "BFS", "Topological sort"]
answer: 1
right: Right. Equal-cost steps need only BFS; Dijkstra is for when edges carry different costs.
wrong: Are the edge costs different here? If every step counts one, the simpler tool is enough.
:::

## Common bugs {lvl=2 id=s-bugs label="SDE-1"}

- **Marking seen too late**: the same node is queued repeatedly; use mark-on-add.
- **Forgetting the grid edges**: row -1 wraps around in Python instead of raising an error. Always test `0 <= r < R` first.
- **Row and column mixed up**: be consistent with `(row, col)` throughout.
- **Several components**: a single walk from one node does not reach all groups; loop over every node as a possible start.
- **Directed versus undirected**: for an undirected link, add the edge in both directions.
- **Recursive DFS on a big grid**: a 1,000 by 1,000 grid can recurse a million deep and crash; use an explicit stack.
- **Dijkstra with negative edges**: silently gives wrong answers.
- **Not checking for cycles in topological sort**: if the result is shorter than n, say so.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A graph is dots and lines; many problems hide one in a grid, a dependency list or a set of puzzle states. {lvl=1}
2. A walk is a to-do list plus a seen set; stack gives DFS, queue gives BFS, cost O(V + E). {lvl=2}
3. Mark nodes seen when you add them to the list. {lvl=2}
4. Counting islands and flood fill are the same walk; count the starts. {lvl=2}
5. BFS gives the fewest steps for equal-cost moves; start from all sources at once for "time until everything". {lvl=2}
6. Topological sort: repeatedly take what has no unmet prerequisites; leftovers mean a cycle. {lvl=3}
7. Union-find counts groups and exposes the link that closes a cycle. {lvl=3}
8. When edge costs differ (and are not negative), use Dijkstra with a heap. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Say "this is a graph where nodes are ... and edges are ..." before writing any code. {lvl=1}
- Test the grid code on a 1 by 1 grid and on a grid with no land. {lvl=2}
- BFS is only the shortest path when each step costs the same; ask about costs. {lvl=2}
- A walk from one start misses other components. {lvl=2}
- A topological order is not unique; many answers can be correct, so graders usually check the rule, not the exact list. {lvl=3}
- Dijkstra needs non-negative costs. {lvl=3}
:::
