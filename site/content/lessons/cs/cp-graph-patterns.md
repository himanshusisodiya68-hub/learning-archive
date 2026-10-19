---
title: Graph patterns
summary: How one search from every fire station at once answers "nearest station" for a whole city, and the dozen graph tools hiding behind grids, words and schedules.
ncert: []
up_to: SDE-3
builds_on: [Graphs and their representations, Graph algorithms, Stacks and queues, Heaps and priority queues]
notes_prompt: Explain to a friend how you can tell that a puzzle about words or locks is really a map of places and roads in disguise.
margin:
  - kind: history
    title: History
    text: 'Edsger Dijkstra designed his shortest-path algorithm in 1956, reportedly in about twenty minutes without pencil and paper, while shopping with his fiancee. [Unverified: from memory]'
  - kind: tip
    title: Interview and contest habit
    text: 'Before coding, say out loud: what is a node, what is an edge, and what does an edge cost? If you can answer all three, the algorithm usually picks itself.'
  - kind: olympiad
    title: Hidden graphs
    text: 'Many hard problems become easy once you build the graph whose nodes are the states of the puzzle. The Rubik''s cube has about 43 quintillion states, far too many to list, but it is still a graph. [Unverified: figure from memory]'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 20-24 on graph search, minimum spanning trees and shortest paths [Unverified]" }
  - { title: "S. Halim and F. Halim, Competitive Programming", ref: "Graph chapters: traversal, shortest paths, union-find, MST [Unverified]" }
cards:
  - { front: "What is the signal for BFS?", back: "Fewest steps, moves or hops when every step costs the same. BFS explores nodes in order of distance from the start, so the first time it reaches a node is the shortest way." }
  - { front: "How do you find the nearest of many sources for every node in one pass?", back: "Multi-source BFS: put every source in the queue at distance 0 before the loop starts." }
  - { front: "When do you use 0-1 BFS, and how does it work?", back: "When every edge costs 0 or 1. Use a deque: push a 0-cost neighbour on the front and a 1-cost neighbour on the back." }
  - { front: "Why does Dijkstra fail with negative edges, and what do you use instead?", back: "It finalises a node when it is popped, assuming no later path can be cheaper; a negative edge breaks that. Use Bellman-Ford, which relaxes every edge up to V-1 times." }
  - { front: "What do topological order and Kahn's algorithm tell you?", back: "An order in which every task comes after its prerequisites. If the algorithm cannot place every node, the graph has a cycle." }
  - { front: "What does union-find do, and what does it cost?", back: "Merges groups and asks whether two items are in the same group. With path compression and union by size each operation costs almost O(1) (inverse Ackermann)." }
core:
  idea: 'A graph is places (nodes) joined by moves (edges). Most graph problems are the same few searches on different maps: BFS for fewest steps, Dijkstra for cheapest cost, topological order for prerequisites, union-find for groups, Kruskal for the cheapest connection. The skill is spotting the map hiding in the statement.'
  formulas:
    - tex: 'O(V + E)'
      label: 'BFS, DFS, topological order: visit each node and edge once'
    - tex: 'O\bigl((V + E)\log V\bigr)'
      label: 'Dijkstra with a heap: the log comes from the priority queue'
    - tex: 'O(E \log E)'
      label: 'Kruskal: sorting the edges dominates; union-find is almost free'
  conditions:
    - 'BFS gives true shortest paths only when every edge costs the same'
    - 'Dijkstra needs every edge cost to be zero or positive'
    - 'Topological order exists only if the graph has no directed cycle'
  sign: 'The commonest mistake is using BFS where edges have different costs, or not noticing that a state needs more than a position (for example, a cell plus the number of walls already broken).'
outcomes:
  - 'Choose BFS, 0-1 BFS, Dijkstra, Bellman-Ford or Floyd-Warshall from the edge costs and the size'
  - 'Write BFS on a grid, multi-source BFS, Dijkstra, Kahn topological order, union-find and Kruskal'
  - 'Detect a cycle, check if a graph is two-colourable, and count connected groups'
  - 'Spot a hidden graph: a puzzle, a word list or a state with extra information'
  - 'Combine tools: DP on a DAG, state-expanded graphs, minimax paths via union-find'
opener:
  story: |
    A city has **two fire stations** on a grid of streets. The control room wants a map showing, for every single block, how many steps it is to the *nearest* station. A junior engineer starts one search from every block, looking outwards for a station. For a city of a million blocks, that is a million searches.

    A senior engineer looks at the problem for ten seconds and says: "Run one search. Start it at **both stations at once**, and let it spread like a ripple. The first ripple to reach a block is the nearest station."

    One search, a million answers. That is the kind of idea this lesson collects. Mazes, schedules, friend circles and word puzzles are all maps of places and moves in disguise. Learn about a dozen tools, and you can read the disguise.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A city grid with two fire stations; each cell shows its distance to the nearest station, found by one search that starts at both stations at once"><rect x="40" y="20" width="40" height="40" style="fill:var(--c);stroke:var(--rule)"/><text x="60" y="45" text-anchor="middle" style="font-size:13px;fill:var(--surface)">0</text><rect x="80" y="20" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 56%,var(--surface));stroke:var(--rule)"/><text x="100" y="45" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><rect x="120" y="20" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 42%,var(--surface));stroke:var(--rule)"/><text x="140" y="45" text-anchor="middle" style="font-size:13px;fill:var(--ink)">2</text><rect x="160" y="20" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--rule)"/><text x="180" y="45" text-anchor="middle" style="font-size:13px;fill:var(--ink)">3</text><rect x="200" y="20" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"/><text x="220" y="45" text-anchor="middle" style="font-size:13px;fill:var(--ink)">4</text><rect x="240" y="20" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--rule)"/><text x="260" y="45" text-anchor="middle" style="font-size:13px;fill:var(--ink)">3</text><rect x="40" y="60" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 56%,var(--surface));stroke:var(--rule)"/><text x="60" y="85" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><rect x="80" y="60" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 42%,var(--surface));stroke:var(--rule)"/><text x="100" y="85" text-anchor="middle" style="font-size:13px;fill:var(--ink)">2</text><rect x="120" y="60" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--rule)"/><text x="140" y="85" text-anchor="middle" style="font-size:13px;fill:var(--ink)">3</text><rect x="160" y="60" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"/><text x="180" y="85" text-anchor="middle" style="font-size:13px;fill:var(--ink)">4</text><rect x="200" y="60" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--rule)"/><text x="220" y="85" text-anchor="middle" style="font-size:13px;fill:var(--ink)">3</text><rect x="240" y="60" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 42%,var(--surface));stroke:var(--rule)"/><text x="260" y="85" text-anchor="middle" style="font-size:13px;fill:var(--ink)">2</text><rect x="40" y="100" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 42%,var(--surface));stroke:var(--rule)"/><text x="60" y="125" text-anchor="middle" style="font-size:13px;fill:var(--ink)">2</text><rect x="80" y="100" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--rule)"/><text x="100" y="125" text-anchor="middle" style="font-size:13px;fill:var(--ink)">3</text><rect x="120" y="100" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"/><text x="140" y="125" text-anchor="middle" style="font-size:13px;fill:var(--ink)">4</text><rect x="160" y="100" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--rule)"/><text x="180" y="125" text-anchor="middle" style="font-size:13px;fill:var(--ink)">3</text><rect x="200" y="100" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 42%,var(--surface));stroke:var(--rule)"/><text x="220" y="125" text-anchor="middle" style="font-size:13px;fill:var(--ink)">2</text><rect x="240" y="100" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 56%,var(--surface));stroke:var(--rule)"/><text x="260" y="125" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><rect x="40" y="140" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--rule)"/><text x="60" y="165" text-anchor="middle" style="font-size:13px;fill:var(--ink)">3</text><rect x="80" y="140" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"/><text x="100" y="165" text-anchor="middle" style="font-size:13px;fill:var(--ink)">4</text><rect x="120" y="140" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface));stroke:var(--rule)"/><text x="140" y="165" text-anchor="middle" style="font-size:13px;fill:var(--ink)">3</text><rect x="160" y="140" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 42%,var(--surface));stroke:var(--rule)"/><text x="180" y="165" text-anchor="middle" style="font-size:13px;fill:var(--ink)">2</text><rect x="200" y="140" width="40" height="40" style="fill:color-mix(in srgb,var(--c) 56%,var(--surface));stroke:var(--rule)"/><text x="220" y="165" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><rect x="240" y="140" width="40" height="40" style="fill:var(--c);stroke:var(--rule)"/><text x="260" y="165" text-anchor="middle" style="font-size:13px;fill:var(--surface)">0</text><text x="40" y="206" style="font-size:10px;fill:var(--muted)">0 = fire station. Number = steps to the nearest one.</text><text x="40" y="222" style="font-size:10px;fill:var(--muted)">One search, started at both stations together.</text></svg>'
life:
  - 'Google Maps and ride-hailing apps compute shortest routes with Dijkstra-like searches on a road graph (the exact methods are more advanced, [Inference]).'
  - 'A university timetable or a build system (such as `make`) orders tasks so that prerequisites come first: a topological order.'
  - 'Social networks ask "are these two people connected?" and "how many friend circles are there?", which union-find answers.'
  - 'Laying cable or pipes to connect every village at least cost is the minimum spanning tree problem.'
  - 'Deciding whether a set of exam clashes can be split into two sittings is a two-colouring (bipartite) check.'
symbols:
  - s: 'V'
    means: 'number of nodes (places) in the graph (count)'
  - s: 'E'
    means: 'number of edges (roads or moves) in the graph (count)'
  - s: 'w'
    means: 'weight of an edge: its cost, such as distance or time (any unit)'
  - s: 'dist[v]'
    means: 'best known cost to reach node v from the start (same unit as w)'
  - s: 'O(V + E)'
    means: 'work that grows with the number of nodes plus edges'
  - s: '\log V'
    means: 'roughly the number of times V can be halved; the cost of one heap operation'
links:
  - leaf: 'cs/graphs'
    name: 'Graphs and their representations'
    same: 'Nodes, edges and adjacency lists: the vocabulary used throughout this lesson.'
    differs: 'That lesson defines the structure; this one is the catalogue of searches that run on it.'
  - leaf: 'cs/graph-algorithms'
    name: 'Graph algorithms: BFS, DFS, shortest paths'
    same: 'The same BFS and Dijkstra, first met there from scratch.'
    differs: 'Here the focus is the contest variants: grids, multiple sources, 0-1 weights, expanded states and hidden graphs.'
  - leaf: 'cs/cp-dp-families'
    name: 'DP families'
    same: 'DP on a DAG is a graph problem: a topological order is exactly a valid fill order for the table.'
    differs: 'DP states usually form a graph you never draw; here the graph is given or built on purpose.'
  - leaf: 'mat/graph-theory-basics'
    name: 'Graph theory basics (maths)'
    same: 'Paths, cycles, trees and bipartite graphs are the same objects.'
    differs: 'Maths proves what must be true of any graph; here we also care how fast the answer can be computed.'
next:
  q: 'Graphs gave us paths and groups. But a huge amount of contest work is about whole numbers: remainders of enormous results, which numbers are prime up to ten million, and counting ways to choose without listing them. How do you do arithmetic on numbers too big to hold?'
  leaf: 'cs/cp-number-theory'
  name: 'Modular arithmetic, sieves and combinatorics'
---

:::hook
q: A city of a million blocks has two fire stations. How many searches do you need to find, for every block, the distance to its nearest station?
options: ["A million, one from each block", "Two, one from each station", "One, started at both stations together"]
answer: 2
right: Right. Put both stations in the queue at distance 0 and let the search spread. Every block is reached first by the ripple from its nearest station. The cost is one pass over the map.
wrong: Two searches would give you two maps, and you would still have to compare them cell by cell. Is there a way to start a single search from several places at once?
:::

## Places and moves {lvl=1 id=s-places label="Foundations"}

A **graph** is a set of places, called **nodes**, and a set of moves between them, called **edges**. A road map is a graph: junctions are nodes, roads are edges. A maze is a graph: open cells are nodes, a step between neighbours is an edge. Even friendship is a graph: people are nodes, friendships are edges.

The question in nearly every graph problem is one of five:

1. How few steps from here to there? (fewest-steps)
2. What is the cheapest way from here to there? (cheapest route)
3. In what order must tasks happen? (prerequisites)
4. Are these two connected, and how many groups are there? (groups)
5. What is the cheapest way to connect everyone? (spanning tree)

Each has a standard tool. This lesson walks through them in order of difficulty.

## BFS on grids {lvl=1 id=s-bfs label="Foundations"}

**BFS** (breadth-first search) is a ripple. Start at one cell. All cells one step away get distance 1, then all cells two steps away get distance 2, and so on. A queue keeps the order: first in, first out. The first time a cell is reached is by a shortest route, because nothing farther was processed before it.

```python
from collections import deque

def grid_bfs(grid, sr, sc):                 # '#' is a wall
    R, C = len(grid), len(grid[0])
    dist = [[-1] * C for _ in range(R)]     # -1 means not reached yet
    dist[sr][sc] = 0
    q = deque([(sr, sc)])
    while q:
        r, c = q.popleft()
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] != '#' and dist[nr][nc] < 0:
                dist[nr][nc] = dist[r][c] + 1
                q.append((nr, nc))
    return dist
```

Read it as: pull a cell out of the queue, look at its four neighbours, and give any new open one a distance one larger. Each cell enters the queue once, so the cost is $O(V + E)$, here $O(RC)$.

**Multi-source BFS** is the fire-station idea: before the loop, set `dist = 0` for *every* source and put them all in the queue. Nothing else changes. It answers "distance to the nearest X" for all cells in one pass, and "how long until the fire has reached every cell".

:::qc lvl=1
q: In BFS on a grid, why can we mark a cell as visited the moment we first put it in the queue?
options: ["Because the first arrival is by a shortest route", "Because the queue is sorted", "Because walls are marked as visited"]
answer: 0
right: Right. BFS processes cells in order of distance, so the first route to reach a cell cannot be beaten. Marking it early also stops the same cell being queued twice.
wrong: Think about the order in which BFS discovers cells. Could a later discovery of the same cell be shorter?
:::

## The signal: is this a graph? {lvl=1 id=s-signal label="Foundations"}

Graph problems often do not say "graph". Listen for these clues:

- "Minimum number of moves, steps, flips, turns or operations" to get from one situation to another. The **situations are nodes**, the **moves are edges**.
- "Can you get from A to B?" or "Are they connected?"
- "Courses with prerequisites", "tasks that depend on others", "build order".
- "Groups", "clusters", "islands", "merge these sets".
- "Split into two teams so that no conflicting pair is together."
- "Cheapest way to connect all of...".

The hidden graph can be enormous without being stored. A four-digit combination lock has 10,000 states, each with 8 neighbours (turn one wheel up or down). A word puzzle ("change one letter at a time from COLD to WARM, using only real words") has the words as nodes and "differ in one letter" as edges. You never draw the whole graph; BFS creates neighbours on the fly.

## Variants table {lvl=2 id=s-variants label="SDE-1"}

| Variant | Signal | Algorithm | Cost |
|---|---|---|---|
| Fewest steps, equal cost | "minimum moves" | BFS | $O(V+E)$ |
| Nearest of many sources | "distance to the closest..." | Multi-source BFS | $O(V+E)$ |
| Edge costs 0 or 1 | "free moves and paid moves" | 0-1 BFS (deque) | $O(V+E)$ |
| Positive costs | "cheapest route" | Dijkstra (heap) | $O((V+E)\log V)$ |
| Negative costs or a cycle check on cost | "refunds", "gain", "arbitrage" | Bellman-Ford | $O(VE)$ |
| All pairs, $V \le 400$ | "distance between every pair" | Floyd-Warshall | $O(V^3)$ |
| Prerequisites | "order", "can all be finished?" | Topological sort (Kahn) | $O(V+E)$ |
| Groups, merging | "same group?", "how many groups" | Union-find | almost $O(1)$ each |
| Two teams | "no conflicting pair together" | Bipartite check (2-colouring) | $O(V+E)$ |
| Cheapest connection | "connect everything at least cost" | Kruskal (sort + union-find) | $O(E\log E)$ |

## 0-1 BFS and Dijkstra {lvl=2 id=s-dijkstra label="SDE-1"}

When edges cost different amounts, plain BFS is wrong: the fewest *edges* is not the least *cost*. If every cost is **0 or 1**, use a deque. Free moves go to the front of the line, paid moves to the back, so the deque stays sorted by distance.

```python
def zero_one_bfs(n, adj, src):              # adj[u]: list of (v, w) with w in {0, 1}
    dist = [float("inf")] * n
    dist[src] = 0
    dq = deque([src])
    while dq:
        u = dq.popleft()
        for v, w in adj[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                dq.appendleft(v) if w == 0 else dq.append(v)
    return dist
```

For general positive costs, use **Dijkstra**. Keep a min-heap of `(distance, node)`. Always pull the nearest unfinished node; once pulled, its distance is final, because every other route would have to pass through a node at least as far away, and costs never go negative.

```python
import heapq

def dijkstra(n, adj, src):
    dist = [float("inf")] * n
    dist[src] = 0
    pq = [(0, src)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue            # stale entry: a better one was pushed
        for v, w in adj[u]:
            if d + w < dist[v]:
                dist[v] = d + w
                heapq.heappush(pq, (dist[v], v))
    return dist
```

The `if d > dist[u]` line skips outdated heap entries; leaving it out is correct but slow. Cost: $O((V + E)\log V)$.

:::qc lvl=2
q: Edges cost 1, 1, 5 and 2 in various places. A friend says "use BFS, it finds the shortest path". What is wrong?
options: ["Nothing, BFS always finds the cheapest path", "BFS finds the fewest edges, which may cost more than a path with more but cheaper edges", "BFS cannot handle more than 100 nodes"]
answer: 1
right: Right. BFS counts steps, not costs. A route of three cheap edges can beat a single expensive one.
wrong: Compare one edge of cost 5 against three edges of cost 1. Which route does BFS prefer, and which is cheaper?
:::

:::figure caption="Dijkstra from node A. The expensive direct road A to C costs 12, but going through B costs 4 + 3 = 7 in total. BFS would choose the direct road because it has fewer edges."
<svg viewBox="0 0 320 150" role="img" aria-label="Three towns A, B and C with a direct road from A to C costing 12 and a two-road route through B costing 4 and 3">
<g style="stroke:var(--ink);stroke-width:1.5;fill:none"><path d="M60 100 L160 40"/><path d="M160 40 L260 100"/><path d="M60 100 L260 100" style="stroke:var(--bad)"/></g>
<g style="fill:var(--surface);stroke:var(--c);stroke-width:1.5"><circle cx="60" cy="100" r="16"/><circle cx="160" cy="40" r="16"/><circle cx="260" cy="100" r="16"/></g>
<g style="font-size:11px;fill:var(--ink)" text-anchor="middle"><text x="60" y="104">A</text><text x="160" y="44">B</text><text x="260" y="104">C</text><text x="98" y="62">4</text><text x="224" y="62">3</text><text x="160" y="120" style="fill:var(--bad)">12</text></g>
<text x="160" y="142" text-anchor="middle" style="font-size:10px;fill:var(--muted)">cheapest A to C = 7, through B</text>
</svg>
:::

## Prerequisites: topological order and DAG DP {lvl=2 id=s-topo label="SDE-1"}

Courses have prerequisites. Can you finish them all, and what is the fewest number of terms? Draw an arrow from each prerequisite to the course that needs it. If there is a **cycle** (A needs B, B needs C, C needs A) the plan is impossible. If not, the graph is a **DAG** (directed acyclic graph), and it has a **topological order**: a list in which every arrow points forwards.

**Kahn's algorithm** builds it. Count each node's incoming arrows (its *in-degree*). Nodes with zero are ready, so queue them. Take one, remove its arrows, and any neighbour whose count drops to zero becomes ready.

```python
def topo_longest(n, edges):                 # edges: (u, v) means u comes before v
    adj = [[] for _ in range(n)]
    indeg = [0] * n
    for u, v in edges:
        adj[u].append(v); indeg[v] += 1
    q = deque(i for i in range(n) if indeg[i] == 0)
    best, seen = [1] * n, 0                 # best[v]: longest chain ending at v
    while q:
        u = q.popleft(); seen += 1
        for v in adj[u]:
            best[v] = max(best[v], best[u] + 1)
            indeg[v] -= 1
            if indeg[v] == 0: q.append(v)
    return max(best) if seen == n else -1   # -1: a cycle blocked some nodes
```

Two uses in one function. If `seen < n`, a **cycle** exists. Otherwise `best` is a **DP over the DAG**: the longest chain ending at each node, computed in an order where every predecessor is already finished. For seven courses with prerequisites 0 before 1 and 2, 1 and 2 before 3, and so on, the longest chain gives the minimum number of terms.

## Groups: union-find {lvl=2 id=s-dsu label="SDE-1"}

**Union-find** (also called a disjoint-set union, DSU) keeps people in groups and supports two operations: *find* which group someone is in, and *union* two groups into one. Each group is a tree of "my parent is..." pointers; the root names the group.

```python
class DSU:
    def __init__(self, n):
        self.p, self.sz = list(range(n)), [1] * n
    def find(self, x):
        while self.p[x] != x:
            self.p[x] = self.p[self.p[x]]   # path halving: shorten the chain
            x = self.p[x]
        return x
    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a == b: return False             # already together: this edge closes a cycle
        if self.sz[a] < self.sz[b]: a, b = b, a
        self.p[b] = a; self.sz[a] += self.sz[b]
        return True
```

Two tricks keep it fast: **path halving** flattens chains as you walk them, and **union by size** hangs the smaller tree under the larger one. Together each operation is almost constant time.

Reading the result: the number of groups is $n$ minus the number of successful unions. `union` returning `False` tells you the edge **closes a cycle** in an undirected graph, which is also how you find the redundant edge in a network.

## Two teams and cycles {lvl=2 id=s-bipartite label="SDE-1"}

Can the people be split into two teams so that nobody shares a team with someone they have a conflict with? Colour a person red, colour all their conflicts blue, colour *their* conflicts red, and so on, by BFS. If you ever find two joined people with the same colour, it cannot be done.

```python
def is_bipartite(n, adj):
    color = [-1] * n
    for s in range(n):                      # the graph may have several pieces
        if color[s] != -1: continue
        color[s] = 0
        q = deque([s])
        while q:
            u = q.popleft()
            for v in adj[u]:
                if color[v] == -1:
                    color[v] = color[u] ^ 1; q.append(v)
                elif color[v] == color[u]:
                    return False
    return True
```

The fact behind it: a graph can be two-coloured **exactly when it has no cycle of odd length**. A triangle of three mutual conflicts can never be split into two teams.

Cycle detection summary: in an **undirected** graph, a cycle appears when a union-find `union` returns `False`. In a **directed** graph, a cycle exists when Kahn's algorithm cannot place every node.

## Cheapest connection: minimum spanning tree {lvl=3 id=s-mst label="SDE-2"}

Connect every village with cable at the least total length. A cheapest connected network never needs a cycle (dropping any edge of a cycle keeps it connected and saves cost), so the answer is a tree on all $V$ nodes: a **minimum spanning tree**.

**Kruskal's algorithm**: sort the edges from cheapest, take an edge if it joins two different groups (union-find says so), skip it otherwise. It is greedy (see the greedy lesson) and the exchange argument proves it.

```python
def kruskal(n, edges):                      # edges: (w, u, v)
    dsu, total, used = DSU(n), 0, 0
    for w, u, v in sorted(edges):
        if dsu.union(u, v):
            total += w; used += 1
    return total if used == n - 1 else -1   # -1: the graph is not connected
```

**Minimax paths** come free. "Find the route whose single worst (largest) edge is as small as possible" is answered by Kruskal's sorted loop: it is the weight of the edge at which the start and the end first fall in the same group.

## Shortest-path variants {lvl=3 id=s-variants2 label="SDE-2"}

- **Count the shortest paths.** In BFS, keep `ways[v]`. When you reach a node at distance $d+1$ from a node $u$ at distance $d$, do `ways[v] += ways[u]`. (Dijkstra works the same way with strictly equal sums.)
- **Extra information in the state.** "Shortest path if you may break at most $k$ walls", "with at most $k$ stops", "with a fuel tank". The node is no longer just the cell: it is `(cell, walls used)`. Run BFS or Dijkstra on that **expanded graph**. It has $V \times (k+1)$ nodes, so check the size.
- **Negative edges.** Dijkstra is wrong. Relax every edge $V-1$ times (**Bellman-Ford**, $O(VE)$). A further improvement after $V-1$ rounds means a negative cycle.
- **Every pair, small graph.** For $V$ up to a few hundred, **Floyd-Warshall**:

```python
for k in range(n):                          # allowed middle stop: nodes 0..k
    for i in range(n):
        for j in range(n):
            d[i][j] = min(d[i][j], d[i][k] + d[k][j])
```

- **Edge weights only 1 or 2.** Cut each weight-2 edge in two with a new middle node, and plain BFS works.
- **Backwards search.** To find the nearest source for *every* node, reverse the edges and search from the sources (multi-source), as with the fire stations.

:::qc lvl=3
q: You may break at most 1 wall in a maze. What are the nodes of the graph you search?
options: ["Just the cells", "Pairs (cell, walls broken so far)", "Only the walls"]
answer: 1
right: Right. Two visits to the same cell are different situations if one has used the wall-break and the other has not.
wrong: Standing in the same cell with a break left and with no break left are very different. What must the node remember?
:::

## SDE-3: choosing at scale {lvl=4 id=s-scale label="SDE-3"}

At real scale the choices are about **size and shape**:

- A $10^6$-cell grid is $10^6$ nodes: BFS is fine, but recursion for DFS will overflow Python's stack, so use an explicit stack.
- A graph with $V = 10^5$ and $E = 2\times10^5$ is easy for Dijkstra. A graph with $V = 10^5$ and dense $E \approx V^2/2$ is not even storable; the problem must give you structure.
- Storing the graph: adjacency lists cost $O(V + E)$ memory; a matrix costs $O(V^2)$, fine only below a few thousand nodes.
- **Dijkstra's bound** can be improved to near $O(E + V\log V)$ with a Fibonacci heap, but in practice a binary heap with lazy deletion (as above) is faster. [Unverified: from memory]
- For a **grid with huge size** but few interesting points, compress coordinates and run the search on the compressed graph.
- **Bidirectional BFS**: search from both ends and stop when they meet. In a graph where each node has $b$ neighbours and the answer is $d$ steps away, you explore about $2b^{d/2}$ nodes instead of $b^d$.

## The catalogue of problem types {lvl=3 id=s-catalogue label="SDE-2"}

In our own words, with the tool for each.

| # | The story | Tool |
|---|---|---|
| 1 | Fewest steps through a maze | Grid BFS |
| 2 | Minutes until a fire or rot has spread to every cell | Multi-source BFS |
| 3 | For each cell, the distance to the nearest water | Multi-source BFS |
| 4 | Shortest route where some moves are free and others cost 1 | 0-1 BFS |
| 5 | Cheapest flight route between two cities | Dijkstra |
| 6 | Route whose steepest climb is as small as possible | Minimax: Kruskal + union-find, or Dijkstra with max |
| 7 | Can all courses be finished? | Topological order, cycle check |
| 8 | Fewest terms to finish all courses | DAG DP (longest chain) |
| 9 | Count friend circles or islands | Union-find or flood fill |
| 10 | Which cable is redundant in a network? | Union-find (the edge that returns False) |
| 11 | Split people into two teams without conflicts | Bipartite check |
| 12 | Connect all cities at least cost | Kruskal MST |
| 13 | Word ladder: fewest one-letter changes | BFS on a hidden graph |
| 14 | Open a lock with the fewest wheel turns, avoiding forbidden codes | BFS on a hidden graph |
| 15 | Shortest path allowed to break $k$ walls | BFS on the expanded graph |
| 16 | In how many ways can you go by a shortest route? | BFS or Dijkstra with counts |

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- Using BFS on weighted edges, or Dijkstra on negative edges.
- Marking visited when you pop instead of when you push in BFS: the same cell queues many times and the run blows up.
- Forgetting that a graph can have several separate pieces: loop over every start node, as in the bipartite check.
- Treating a grid as `grid[x][y]` in one place and `grid[y][x]` in another. Use `r, c` for row and column everywhere.
- Recursion depth: a DFS on a long chain crashes Python at about 1,000 levels. Use an explicit stack.
- Directed versus undirected: add each undirected edge in **both** directions.
- Expanded state forgotten: the answer is the best over all values of the extra component at the goal cell.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A graph is places and moves; the first job is to say what a node, an edge and an edge cost are. {lvl=1}
2. BFS gives fewest steps; start it from all sources at once for "nearest of many". {lvl=1}
3. Hidden graphs: states of a puzzle, words, locks. You build neighbours on the fly. {lvl=1}
4. Costs 0 or 1 use a deque; positive costs use Dijkstra with a heap; negative costs need Bellman-Ford. {lvl=2}
5. Kahn's algorithm gives a topological order and detects directed cycles; use it for DP on a DAG. {lvl=2}
6. Union-find counts groups and spots the edge that closes a cycle in almost constant time. {lvl=2}
7. A graph is two-colourable exactly when it has no odd cycle. {lvl=2}
8. Kruskal builds a minimum spanning tree (and answers minimax path questions) with sort plus union-find. {lvl=3}
9. If a state needs extra information, make it part of the node and search the expanded graph. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Equal costs mean BFS; different costs mean Dijkstra. Ask which one the statement describes. {lvl=1}
- Do not redo a BFS from every node when one multi-source BFS will do. {lvl=2}
- Mark nodes visited when you push them to the queue, not when you pop them. {lvl=2}
- Dijkstra: skip stale heap entries with `if d > dist[u]: continue`. {lvl=2}
- Undirected edges need both directions in the adjacency list. {lvl=2}
- A grid with a hidden extra variable (keys, breaks, fuel) is a graph on (cell, variable). Count the states first. {lvl=3}
:::
