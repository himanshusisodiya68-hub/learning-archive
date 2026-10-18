---
title: Graphs and their representations
summary: Maps, friendships and "do this first" lists are all dots joined by lines. See how to store them so a million dots fit in memory.
ncert: []
up_to: SDE-2
builds_on: [Arrays and dynamic arrays, Hash tables, Trees and binary search trees]
notes_prompt: Explain to a friend how a map app stores a city of a million junctions, and why it does not use a giant table of every junction against every other.
margin:
  - kind: history
    title: History
    text: Leonhard Euler studied the bridges of Königsberg in 1736 and showed that only the pattern of connections mattered, not the shapes of the land. This is often called the birth of graph theory [Unverified details].
  - kind: tip
    title: Interview favourite
    text: 'Many problems are graphs in disguise: a grid maze, a word that changes one letter at a time, a puzzle''s moves, "what must be done before what". First ask what the dots are and what the lines are.'
  - kind: olympiad
    title: Design link
    text: 'Real graphs are lumpy: most people have a few hundred friends, a few accounts have tens of millions. Systems must be designed around those hubs, not around the average.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 20 Elementary Graph Algorithms: representations [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Graph data structures section [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 2 Data Models and Query Languages: graph-like data models" }
cards:
  - { front: "What is a graph?", back: "A set of nodes (dots) and edges (lines) that join pairs of nodes. It records what is connected to what, and nothing about where things are drawn." }
  - { front: "Directed versus undirected edge?", back: "Undirected: the link works both ways (mutual friends, a two-way road). Directed: it has a direction (follows, one-way road, 'needs first')." }
  - { front: "What does a weight on an edge mean?", back: "A number attached to the link: distance, travel time, cost. Shortest-path questions use the weights." }
  - { front: "Adjacency list: what and what space?", back: "For each node, a list of its neighbours. Space O(V + E): proportional to the nodes plus the edges." }
  - { front: "Adjacency matrix: what and what space?", back: "A V by V table where cell (u, v) says whether there is an edge from u to v. Space O(V²), even if there are few edges." }
  - { front: "When is a matrix a good choice?", back: "When the graph is small or dense (nearly every pair connected), and you need to check 'is there an edge from u to v?' in one step." }
core:
  idea: 'A graph is a collection of nodes joined by edges. It captures what is connected to what: roads, friendships, dependencies. We store it either as a list of neighbours per node (small when edges are few) or as a table of every pair (fast to check, but huge).'
  formulas:
    - tex: 'S_{\text{list}} = O(V+E)'
      label: 'Adjacency list: space grows with nodes plus edges'
    - tex: 'S_{\text{matrix}} = O(V^2)'
      label: 'Adjacency matrix: a cell for every pair of nodes'
    - tex: 'E_{\max} = V(V-1)/2'
      label: 'Most edges an undirected graph can have (no repeats, no self-loops)'
  conditions:
    - 'Each edge joins exactly two nodes (a pair); edges between three or more things need extra modelling'
    - 'The picture does not matter, only the connections: stretching or moving the dots changes nothing'
    - 'Real networks (roads, friendships, web links) are sparse: far fewer edges than the V² a matrix has room for'
    - 'Repeated edges and self-loops are either ruled out or handled deliberately'
  sign: 'Count edges carefully. In an undirected graph, one friendship is one edge but appears twice in an adjacency list (once at each person); forgetting this doubles or halves your answers.'
outcomes:
  - 'Spot the nodes and edges in a map, a social network and a list of dependencies'
  - 'Tell directed from undirected and weighted from unweighted graphs, with a real example of each'
  - 'Build an adjacency list and an adjacency matrix in Python'
  - 'Estimate the memory of each for a given V and E, and choose between them'
  - 'Model a grid or a puzzle as a graph without ever building it'
opener:
  story: |
    You ask your phone for the way from home to the railway station. A second later a blue line appears. But think about what the phone had to know: a city of around a million junctions, with roads linking them, each road with a length and a speed.

    You could try to write it as a giant table: one row and one column for every junction, a tick where a road joins a pair. That is a million rows times a million columns, and almost every box would be empty, because any junction meets only a handful of roads.

    There must be a smarter way to write down "what is connected to what". And the same way should work for friendships, web links and "finish this before that" lists. What would you write down?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A small map drawn as dots joined by lines, with a route from Home to Station highlighted"><g style="stroke:var(--rule);stroke-width:2;fill:none"><line x1="50" y1="70" x2="130" y2="40"/><line x1="130" y1="40" x2="220" y2="60"/><line x1="50" y1="70" x2="110" y2="130"/><line x1="130" y1="40" x2="110" y2="130"/><line x1="110" y1="130" x2="210" y2="150"/><line x1="220" y1="60" x2="270" y2="110"/><line x1="210" y1="150" x2="270" y2="110"/><line x1="50" y1="70" x2="40" y2="160"/><line x1="40" y1="160" x2="110" y2="130"/><line x1="210" y1="150" x2="250" y2="205"/></g><path d="M50 70 L110 130 L210 150 L270 110" style="fill:none;stroke:var(--c);stroke-width:4"/><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><circle cx="50" cy="70" r="9"/><circle cx="130" cy="40" r="9"/><circle cx="220" cy="60" r="9"/><circle cx="110" cy="130" r="9"/><circle cx="210" cy="150" r="9"/><circle cx="270" cy="110" r="9"/><circle cx="40" cy="160" r="9"/><circle cx="250" cy="205" r="9"/></g><g style="font-size:11px;fill:var(--ink)"><text x="22" y="56">Home</text><text x="240" y="98">Station</text></g><text x="20" y="228" style="font-size:11px;fill:var(--muted)">dots joined by lines</text></svg>'
life:
  - 'Google Maps and similar apps treat junctions as nodes and roads as edges with travel times as weights [Inference: internals are not fully public].'
  - 'A social network is a graph of people; "people you may know" often means friends of your friends who are not yet your friends.'
  - 'Web links form a directed graph of pages, and search engines were built on analysing it.'
  - 'Course prerequisites, software packages that need other packages, and the order in which to cook a meal are all "needs first" graphs.'
  - 'The Delhi Metro map, an airline route map and the internet itself (routers joined by cables) are graphs.'
models:
  - name: 'Strip away the picture'
    text: 'A graph keeps only what is connected to what and throws away where things are drawn. A subway map does exactly this: it is useless as a scale map but perfect for choosing trains. When a problem feels messy, ask which details really matter and which are decoration.'
  - name: 'Relationships are data too'
    text: 'Often the connections are more valuable than the things connected: who you know matters as much as who you are. Organisations, supply chains and ecosystems are understood by mapping the links.'
  - name: 'Plan for the hubs, not the average'
    text: 'In real networks a few nodes have enormous numbers of links (airports, celebrities, banks). Averages hide them. Systems, budgets and risk plans fail at the hubs first.'
links:
  - leaf: 'cs/trees'
    name: 'Trees and binary search trees'
    same: 'A tree is a graph: nodes and edges, with a parent for each node.'
    differs: 'A tree has exactly one top, no loops and exactly one path between any two nodes; a general graph may have loops, several routes and a node with several parents.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'A graph is usually stored as a dictionary from node name to its neighbours, which is a hash table of lists or sets.'
    differs: 'A hash table stores unrelated key-value pairs; a graph is about the relationships between its keys.'
  - leaf: 'cs/graph-algorithms'
    name: 'Graph algorithms: BFS, DFS, shortest paths'
    same: 'Every graph algorithm starts from one of the two representations here and walks along edges.'
    differs: 'This lesson is about how to store a graph; the algorithms lesson is about what to do with it (explore, find shortest routes).'
  - leaf: 'mat/graph-theory-basics'
    name: 'Graph theory basics'
    same: 'Same objects: nodes, edges, paths, cycles, degrees.'
    differs: 'The maths lesson proves properties (such as counting edges by degrees); this one cares about memory and speed in a program.'
next:
  q: 'A table of every pair of a million junctions needs a trillion cells; a list of neighbours needs a few million entries. A trillion versus a few million: how can we talk about such differences in cost precisely, and compare any two methods fairly?'
  leaf: 'cs/big-o'
  name: 'Big-O and growth of cost'
symbols:
  - s: 'V'
    means: 'number of nodes (also called vertices): count'
  - s: 'E'
    means: 'number of edges: count'
  - s: 'O(V+E)'
    means: 'cost grows with the number of nodes plus the number of edges'
  - s: 'O(V^2)'
    means: 'cost grows with the square of the number of nodes (a cell for every pair)'
  - s: '\deg(v)'
    means: 'degree of node v: how many edges touch it (count)'
  - s: 'w'
    means: 'weight of an edge: a number such as distance (km) or time (minutes)'
---

:::hook
q: A city has one million junctions. You write the road map as a table with a row and a column for every junction, ticking the box where a road joins a pair. How many boxes is that?
options: ["About a million", "About a billion", "About a trillion"]
answer: 2
right: Right. A million rows times a million columns is $10^6 \times 10^6 = 10^{12}$, a trillion boxes, and nearly all would be empty since a junction meets only a few roads. Writing down just each junction's neighbours takes only a few million entries.
wrong: Remember the table has a row and a column for every junction: that is a million times a million, not a million plus a million.
:::

## Dots and lines {lvl=1 id=s-dots label="Foundations"}

Take any map of a metro system. It shows stations and the tracks between them, but not how far apart they really are on the ground. Yet it is enough to plan any journey. That bare picture, **things and the links between them**, is a **graph**.

The things are called **nodes** (or *vertices*): junctions, people, web pages. The links are called **edges**: roads, friendships, hyperlinks. Two nodes joined by an edge are **neighbours**.

Here are the same idea in three very different places:

| Situation | Nodes | Edges |
|---|---|---|
| A road map | Junctions | Roads |
| A social network | People | Friendships (or follows) |
| A course plan | Subjects | "must be done before" |

Once you see a problem as a graph, tools made for one graph work on all of them.

## A few words you will need {lvl=1 id=s-words label="Foundations"}

Four short ideas are enough for now.

- **Path:** a trip along edges from one node to another, like Home to Market to Station.
- **Connected:** you can get from any node to any other along some path. A road map with an island that has no bridge is not connected.
- **Cycle:** a path that comes back to where it started without reusing an edge, like a ring road.
- **Degree:** how many edges touch a node. A junction where three roads meet has degree 3.

Next, two ways the edges can differ.

**Direction.** A friendship on many apps works both ways, so the edge is **undirected**. On an app where you can follow someone without them following back, the edge has a direction: it is **directed**, drawn as an arrow. One-way roads, web links and "do this first" lists are directed too.

**Weight.** An edge may carry a number: kilometres, minutes, rupees. Then the graph is **weighted**. A road map with travel times is weighted; a friendship graph usually is not.

:::figure caption="A small weighted, undirected map. Numbers are distances in km. Home to Station via School is 3 + 2 = 5 km, shorter than via Market (2 + 4 = 6 km)."
<svg viewBox="0 0 320 220" role="img" aria-label="Five places joined by roads with distances: Home, Market, School, Station, Park">
<g class="pen" style="stroke:var(--ink);stroke-width:1.5;fill:none">
<line x1="50" y1="100" x2="160" y2="40"/><line x1="50" y1="100" x2="170" y2="130"/>
<line x1="160" y1="40" x2="280" y2="90"/><line x1="170" y1="130" x2="280" y2="90"/>
<line x1="50" y1="100" x2="80" y2="185"/><line x1="80" y1="185" x2="170" y2="130"/>
</g>
<g style="font-size:12px;fill:var(--muted);text-anchor:middle">
<text x="95" y="62">2</text><text x="104" y="124">3</text><text x="228" y="56">4</text><text x="232" y="122">2</text><text x="52" y="148">1</text><text x="116" y="170">2</text>
</g>
<g style="font-size:12px;fill:var(--ink);text-anchor:middle">
<circle cx="50" cy="100" r="16" style="fill:color-mix(in srgb,var(--mat) 16%,var(--surface));stroke:var(--mat)"/><text x="50" y="104">Home</text>
<circle cx="160" cy="40" r="16" style="fill:color-mix(in srgb,var(--mat) 16%,var(--surface));stroke:var(--mat)"/><text x="160" y="44">Mkt</text>
<circle cx="170" cy="130" r="16" style="fill:color-mix(in srgb,var(--mat) 16%,var(--surface));stroke:var(--mat)"/><text x="170" y="134">Sch</text>
<circle cx="280" cy="90" r="16" style="fill:color-mix(in srgb,var(--mat) 16%,var(--surface));stroke:var(--mat)"/><text x="280" y="94" style="font-size:10px">Stn</text>
<circle cx="80" cy="185" r="16" style="fill:color-mix(in srgb,var(--mat) 16%,var(--surface));stroke:var(--mat)"/><text x="80" y="189">Park</text>
</g>
</svg>
:::

:::qc lvl=1
q: Which of these is naturally a directed graph?
options: ["Facebook-style mutual friendships", "Who follows whom on an app where following is one-way", "Two-way roads between towns"]
answer: 1
right: Right. If I follow you, it does not mean you follow me, so each edge needs a direction.
wrong: A directed edge means the link can exist one way without the other. Which of these allows that?
:::

## Writing a graph down {lvl=2 id=s-store label="SDE-1"}

The computer has to store this. There are two classic ways.

**Adjacency list.** For each node, keep the list of its neighbours. For the figure: Home: Market, School, Park; Market: Home, Station; and so on. This is just a dictionary from node to a list, and it is the usual choice.

```python
from collections import defaultdict

roads = [("Home", "Mkt", 2), ("Home", "Sch", 3), ("Mkt", "Stn", 4),
         ("Sch", "Stn", 2), ("Home", "Park", 1), ("Park", "Sch", 2)]
graph = defaultdict(list)
for a, b, km in roads:
    graph[a].append((b, km))   # edge a to b
    graph[b].append((a, km))   # undirected: also b to a
```

Each road is stored **twice**, once at each end, because "from Home I can reach Market" and "from Market I can reach Home" are separate facts. For a directed graph you would write only the first line.

**Adjacency matrix.** A square table with one row and one column per node. Cell (row $u$, column $v$) holds the weight of the edge from $u$ to $v$, or a marker such as 0 or "none" when there is no edge.

```python
names = ["Home", "Mkt", "Sch", "Stn", "Park"]
pos = {n: i for i, n in enumerate(names)}
V = len(names)
matrix = [[0] * V for _ in range(V)]   # 0 means no road
for a, b, km in roads:
    matrix[pos[a]][pos[b]] = km
    matrix[pos[b]][pos[a]] = km
```

In words: make a $V$ by $V$ grid of zeros, then fill the two symmetric cells for every road.

| | Adjacency list | Adjacency matrix |
|---|---|---|
| Space | $O(V+E)$ | $O(V^2)$ |
| Is there an edge from u to v? | $O(\deg(u))$ (scan its list); $O(1)$ if neighbours are kept in a set | $O(1)$ |
| List all neighbours of u | $O(\deg(u))$, exactly the neighbours | $O(V)$, scan a whole row |
| Add an edge | $O(1)$ | $O(1)$ |

:::qc lvl=2
q: A graph has 1,000 nodes and 3,000 edges, and your main job is "list the neighbours of a node". Which representation fits?
options: ["Adjacency list", "Adjacency matrix"]
answer: 0
right: Right. The list gives exactly the neighbours at once; a matrix row has 1,000 cells to scan, mostly empty.
wrong: With only 3,000 edges among about a million possible pairs, which structure wastes less and gives the neighbours directly?
:::

## Real networks are sparse {lvl=2 id=s-sparse label="SDE-1"}

Let's put numbers on that. A graph with $V$ nodes can have at most $V(V-1)/2$ undirected edges (every pair joined). Real graphs have a tiny fraction of that; we call them **sparse**.

- **City roads.** One million junctions, each meeting about three roads [Unverified, rough]: about 1.5 million roads. A matrix has $10^{12}$ cells; even one byte per cell is 1 terabyte (1,000 GB). An adjacency list holds about $2 \times 1.5$ million = 3 million entries, a few tens of megabytes.
- **A huge social network (illustrative numbers).** One billion people with 200 friends each: the list has about $2 \times 10^{11}$ entries (one edge twice). A matrix would need $10^{18}$ cells, even as single bits about 125 petabytes, far beyond any machine.

So for real data the **adjacency list** wins. The matrix remains good for **small or dense** graphs (say a few hundred nodes, or one where most pairs are linked), and when you must test an edge in one step, as in some dynamic-programming problems and in route tables for a few dozen cities.

The best of both for large sparse graphs: a **dictionary from each node to a set of its neighbours**. Memory stays $O(V+E)$, listing neighbours is direct, and "is there an edge?" becomes $O(1)$ on average.

:::qc lvl=2
q: A graph has 500 nodes and almost every pair of nodes has an edge. Which representation is reasonable?
options: ["Only an adjacency list", "An adjacency matrix: 250,000 cells is small, and the graph is dense", "Neither works"]
answer: 1
right: Right. Dense means the matrix is not wasteful, and a quarter-million cells is tiny. Edge checks cost one step.
wrong: When nearly every cell would be filled anyway, the matrix wastes little. How big is 500 times 500?
:::

## Things that need other things {lvl=2 id=s-deps label="SDE-1"}

Dependencies are a favourite example of a **directed** graph. Say each subject points at the subjects it needs first.

```python
needs = {
    "physics": ["calculus"],
    "calculus": ["algebra"],
    "algebra": [],
}
# Who can I study right now? Those that need nothing.
ready = [s for s, pre in needs.items() if not pre]   # ["algebra"]
```

A valid study plan puts every subject after the ones it needs. That is possible only if the graph has **no cycle**: if "A needs B" and "B needs A", nobody can start. A graph with directed edges and no cycles is a **DAG** (directed acyclic graph). Builders of software (which library to compile first), spreadsheets (which cell to compute first) and project plans all rely on this. Finding an order is the job of **topological sorting**, in the graph-algorithms lesson.

To also answer "who is waiting for algebra?", store the **reverse** graph too (edges pointing the other way): two dictionaries, same data.

## Graphs you never build {lvl=3 id=s-implicit label="SDE-2"}

Many problems are graphs but come with no list of edges. A **grid maze** is the classic case: each open cell is a node, and its edges go to the open cells above, below, left and right. You do not store the edges; you *compute* a cell's neighbours when needed.

```python
def neighbours(r, c, grid):
    for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nr, nc = r + dr, c + dc
        if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]) and grid[nr][nc] == ".":
            yield nr, nc
```

The same trick models **puzzles** (a node is a board position, an edge is a legal move), **word ladders** (a node is a word, an edge joins words that differ by one letter) and **scheduling states**. This is called an **implicit graph**: the nodes may be far too many to list, but a function can produce the neighbours of any node on demand. It is how many interview problems are solved: say "this is a graph where nodes are..., edges are..." and the algorithms of the next lessons apply directly.

## Choosing and scaling {lvl=3 id=s-choose label="SDE-2"}

| Situation | Representation |
|---|---|
| Sparse, large, walk along edges (the usual case) | Adjacency list (dictionary of lists, or sets if you need fast edge checks) |
| Small or dense, many edge checks | Adjacency matrix |
| Just a bag of edges, to sort or group them (for example, cheapest-edge methods) | Edge list: a plain list of (u, v, w) |
| Huge static graph, speed and memory matter | Compact arrays (two flat arrays: offsets and neighbours), as many graph libraries use [Unverified] |
| Grid, puzzle, or state space | Implicit: compute neighbours on demand |

Two real-world cautions:

1. **Hubs.** Real graphs are very uneven. If one account has 50 million followers, its list is huge and an operation such as "show me mutual followers" must avoid scanning it blindly. Systems store such hubs differently (for example, splitting or caching their lists). [Inference: how any one company does this is not public.]
2. **Size.** Graphs with billions of edges do not fit on one machine, so they are **partitioned**: nodes are split across machines. Edges that cross between machines are expensive to follow, so a good split keeps tightly linked nodes together. This is the same problem as sharding a hash table, but harder, because connected things are not independent.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A graph is nodes joined by edges: it records what is connected to what, not where things are drawn. {lvl=1}
2. Edges can be directed (follows, one-way, "needs first") and weighted (distance, time, cost). {lvl=1}
3. Path, connected, cycle and degree are the four words for talking about graphs. {lvl=1}
4. An adjacency list stores each node's neighbours: O(V + E) space. An adjacency matrix stores a V by V table: O(V²). {lvl=2}
5. Real networks are sparse, so lists win; matrices suit small or dense graphs and one-step edge checks. {lvl=2}
6. A directed graph with no cycle (a DAG) models dependencies, and has an order that respects them. {lvl=2}
7. Grids, puzzles and word ladders are implicit graphs: compute neighbours instead of storing edges. {lvl=3}
8. At scale, hubs and partitioning shape the design. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Writing an undirected edge in only one direction of the adjacency list, so half the neighbours are missing. {lvl=1}
- Using a V by V matrix for a large sparse graph: for a million nodes that is a trillion cells. {lvl=2}
- Confusing "edge exists" (matrix: one lookup; list: scan) with "list neighbours" (the reverse). {lvl=2}
- Forgetting isolated nodes: a node with no edges has an entry in the list (an empty one), or is lost from your count. {lvl=2}
- Mixing 0 as "no edge" with 0 as a real weight in a matrix: use None or infinity for "no edge" if zero weights are possible. {lvl=3}
- Assuming the graph is connected or has no cycles when the problem never said so. {lvl=3}
:::
