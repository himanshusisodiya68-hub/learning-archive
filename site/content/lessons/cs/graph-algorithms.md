---
title: Graph algorithms
summary: How a maps app finds your fastest route in a blink without ever listing the routes. Ripples, build orders, shortest paths and cheapest networks.
ncert: []
up_to: SDE-3
builds_on: [Graphs and their representations, Stacks and queues, Heaps and priority queues, Recursion]
notes_prompt: Explain to a friend how a maps app picks the fastest route out of millions of possible roads without trying every route.
margin:
  - kind: history
    title: History
    text: 'Edsger Dijkstra said he worked out his shortest-path method in about twenty minutes, without pencil and paper, while out shopping, and published it in 1959 [Unverified: dates and the anecdote are from memory].'
  - kind: tip
    title: Interview favourite
    text: '"Fewest steps" with equal-cost moves means BFS. "Cheapest" with different costs means Dijkstra. "Do this before that" means topological sort. "Are these connected?" means union-find or DFS.'
  - kind: olympiad
    title: Why it matters
    text: Course schedules, build tools, package managers, spreadsheets recalculating cells and network routers are all graph algorithms underneath.
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Graph chapters: elementary algorithms, minimum spanning trees, single-source shortest paths, disjoint sets [Unverified: chapter numbers vary by edition]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Graph traversal, weighted graph algorithms [Unverified: chapter numbers]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Dependency and workflow graphs appear in the chapters on batch processing" }
cards:
  - { front: "BFS in one sentence, and when to use it?", back: "Visit everything one step away, then two steps, and so on, using a queue. It gives the fewest steps when every step costs the same. Cost O(V + E)." }
  - { front: "DFS in one sentence, and what it is good for?", back: "Go as deep as you can down one path, then back up (recursion or a stack). Good for connectivity, cycles and ordering. Cost O(V + E)." }
  - { front: "What is a topological order, and when does one not exist?", back: "A line-up where every task comes after the tasks it depends on. It exists exactly when there is no cycle of dependencies." }
  - { front: "How does Dijkstra pick the next place to finish?", back: "From a priority queue, always the unfinished place with the smallest known distance. It is correct only when no edge cost is negative." }
  - { front: "What does union-find do?", back: "Keeps groups of connected things. find says which group a thing is in; union merges two groups. With path compression each call is almost constant time." }
  - { front: "How does Kruskal build a cheapest network?", back: "Sort the edges cheapest first; take an edge if it joins two groups that are not yet connected (union-find), skip it if it would make a loop." }
core:
  idea: 'A graph is dots joined by lines. Most graph questions are answered by growing outward from a start in a disciplined order: by number of steps (BFS), by depth (DFS) or by total cost (Dijkstra). Each place is finished once, so we never list the routes.'
  formulas:
    - tex: 'O(V + E)'
      label: 'BFS and DFS: touch each place and each road a constant number of times'
    - tex: 'O\big((V + E)\log V\big)'
      label: 'Dijkstra with a heap: the log V is the heap''s price for choosing the nearest place'
    - tex: 'O(E \log E)'
      label: 'Kruskal''s cheapest network: sorting the roads dominates'
  conditions:
    - 'BFS gives shortest paths only when every edge costs the same'
    - 'Dijkstra needs every edge cost to be zero or more'
    - 'Topological order needs a directed graph with no cycle'
    - 'Kruskal needs an undirected graph, and gives a network only if the graph is connected'
  sign: 'The commonest bug is forgetting to mark a place as visited when it is put in the queue, not when it is taken out. Then the same place is queued many times.'
outcomes:
  - 'Describe a road map or a set of dependencies as a graph and say what V and E are'
  - 'Choose between BFS, DFS, topological sort, Dijkstra and union-find from the wording of a problem'
  - 'Write BFS, DFS and Kahn''s topological sort in about ten lines each'
  - 'Explain why Dijkstra works and why a negative edge breaks it'
  - 'Explain how a minimum spanning tree is built, and sketch why real map services precompute'
opener:
  story: |
    You open Google Maps and type *Connaught Place* to *Gurgaon*. In under a second you get three routes, the fastest highlighted, with a time to the minute.

    Think about what that means. Delhi has hundreds of thousands of road segments. Counting routes that never visit the same junction twice, the number of possible ways to get from A to B is beyond counting; if you allow loops it is infinite. Nobody can look at all of them, and the app obviously did not.

    So the map in your hand is not really a picture. It is a list of *this junction connects to that one, and it takes so many minutes*. Once it is that, a neat trick lets the computer find the best route while looking at each junction only once. What is the trick?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A small road network with a highlighted fastest route from A to B"><g style="stroke:var(--rule);stroke-width:2;fill:none"><path d="M40 60 L120 40"/><path d="M40 60 L90 130"/><path d="M120 40 L200 70"/><path d="M90 130 L120 40"/><path d="M90 130 L170 160"/><path d="M200 70 L270 50"/><path d="M200 70 L170 160"/><path d="M170 160 L260 170"/><path d="M270 50 L260 170"/><path d="M90 130 L50 200"/><path d="M50 200 L170 160"/></g><path d="M40 60 L120 40 L200 70 L270 50" style="fill:none;stroke:var(--c);stroke-width:4"/><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><circle cx="40" cy="60" r="9"/><circle cx="120" cy="40" r="7"/><circle cx="200" cy="70" r="7"/><circle cx="90" cy="130" r="7"/><circle cx="170" cy="160" r="7"/><circle cx="260" cy="170" r="7"/><circle cx="50" cy="200" r="7"/><circle cx="270" cy="50" r="9" style="fill:var(--c)"/></g><g style="font-size:12px;fill:var(--ink)"><text x="24" y="48">A</text><text x="278" y="42">B</text></g><g style="font-size:10px;fill:var(--muted)"><text x="70" y="38">4 min</text><text x="150" y="48">6</text><text x="228" y="52">5</text><text x="120" y="225">junctions = dots, roads = lines with a time</text></g></svg>'
life:
  - 'Maps apps find fastest routes; train and flight planners find fewest changes. Both are shortest-path problems.'
  - 'Course timetables, recipe steps and software builds ("compile this first") are ordering problems on dependency graphs.'
  - 'Friend suggestions ("people you may know") look at people two or three steps away from you: a BFS.'
  - 'Laying cable or pipes to join villages at the lowest total cost is a minimum spanning tree.'
  - 'A spreadsheet recalculates cells in an order that respects which cell uses which: a topological sort.'
models:
  - name: 'Finish places in order'
    text: 'Dijkstra works because the nearest unfinished place can never be improved by going through a farther one. Whenever you plan under a cost, ask whether you can settle things from cheapest to dearest so you never revisit a decision.'
  - name: 'Dependencies form a graph'
    text: 'Any plan where some things must wait for others (a wedding, a product launch, a degree) is a graph. If the plan contains a circular wait, no order can ever work, in code or in life.'
  - name: 'Precompute what does not change'
    text: 'Roads change slowly, questions arrive constantly, so pay for thinking once and answer fast many times. The same idea powers indexes, caches and timetables.'
links:
  - leaf: 'cs/graphs'
    name: 'Graphs and their representations'
    same: 'Every algorithm here walks an adjacency list: for each place, the list of places you can go next.'
    differs: 'That lesson stores the map; this one asks questions of it. The storage choice sets the cost of each question.'
  - leaf: 'cs/heaps'
    name: 'Heaps and priority queues'
    same: 'Dijkstra''s "pick the nearest unfinished place" is exactly a priority-queue pop.'
    differs: 'A heap orders any items by a key; here the key is the distance found so far, and it can improve while the item waits.'
  - leaf: 'cs/stacks-and-queues'
    name: 'Stacks and queues'
    same: 'BFS is a queue (first in, first out) and DFS is a stack (last in, first out). The traversal order is the container.'
    differs: 'Swap the container and the same loop becomes the other algorithm.'
  - leaf: 'mat/graph-theory-basics'
    name: 'Graph theory basics'
    same: 'Same objects: vertices, edges, paths, cycles, trees. Proofs there justify why these algorithms are right.'
    differs: 'Maths asks what must be true of every graph; algorithms ask how fast we can find out for this one.'
next:
  q: 'A graph walk, a list scan and a sorted search all move through data one step at a time. Is there a way to scan an array with two markers so that an O(n squared) search becomes O(n)?'
  leaf: 'cs/two-pointers-and-sliding-window'
  name: 'Two pointers and sliding window'
symbols:
  - s: 'V'
    means: 'number of vertices: places, junctions, people (count)'
  - s: 'E'
    means: 'number of edges: roads, links, friendships (count)'
  - s: 'w'
    means: 'weight of an edge: the cost of one road, such as minutes (a number, often with a unit)'
  - s: 'O(V + E)'
    means: 'work grows in step with the places plus the roads'
  - s: '\log V'
    means: 'about how many times V can be halved; for a million places it is about 20'
  - s: 'dist'
    means: 'best known cost from the start to a place (same unit as w)'
---

:::hook
q: How many different routes do you think the app compared before showing you the fastest?
options: ["All of them, on a huge computer", "Millions, then it picked the best", "Far fewer than that: it never lists routes at all"]
answer: 2
right: Right. It grows outward from your start and settles one junction at a time, always the nearest unsettled one. Each junction is settled once, so the work is about the size of the map, not the number of routes. (Real services add more tricks; their internals are not public. [Inference])
wrong: Even a million routes per second would not cover a city, since the count of routes is astronomical. The trick is to never build a route until it is already known to be best.
:::

## Maps are graphs {lvl=1 id=s-graph label="Foundations"}

Take the road map and keep only two things: the junctions (dots) and the roads between them (lines, each with a travel time). Everything else, the colours and street names, is not needed for the question *how do I get there fastest?* That stripped-down picture is a **graph**. Call the number of dots $V$ (vertices) and the number of lines $E$ (edges).

Now the question becomes: starting from one dot, which dots can I reach, how fast, and in what order? That small family of questions covers an astonishing number of real problems. The rest of this lesson is five ways of walking a graph, each with a job.

```python
graph = {
    "A": ["B", "C"],     # from A you can go to B or C
    "B": ["D"],
    "C": ["D"],
    "D": [],
}
```

This is an **adjacency list**: for each place, the places you can reach in one step.

## BFS: ripples in a pond {lvl=2 id=s-bfs label="SDE-1"}

Drop a stone in a pond. The ripple reaches everything one metre away, then everything two metres away, and so on. **Breadth-first search** (BFS) does the same on a graph: visit all places one step away, then all two steps away. The first time the ripple touches a place is by the fewest steps, so BFS gives shortest paths when every step costs the same.

To keep the order we need a line where whoever arrived first is served first, a **queue**.

```python
from collections import deque

def bfs(graph, start):
    dist = {start: 0}
    q = deque([start])
    while q:
        u = q.popleft()
        for v in graph[u]:
            if v not in dist:          # first visit = shortest
                dist[v] = dist[u] + 1
                q.append(v)
    return dist
```

Read it as: take the place that has waited longest, and for every neighbour not seen before, record "one step further than me" and join the queue. The `dist` dictionary doubles as the visited set, which is why a place can never be queued twice.

:::figure caption="BFS from S. Places are finished in rings: first the places one step away, then two, then three. Each place is queued once."
<svg viewBox="0 0 320 130" role="img" aria-label="A graph from S with rings labelled 0, 1 and 2 steps">
<g class="pen" style="stroke:var(--ink);stroke-width:1.5;fill:none"><line x1="40" y1="65" x2="120" y2="30"/><line x1="40" y1="65" x2="120" y2="100"/><line x1="120" y1="30" x2="210" y2="30"/><line x1="120" y1="100" x2="210" y2="100"/><line x1="120" y1="30" x2="210" y2="100"/><line x1="210" y1="30" x2="285" y2="65"/><line x1="210" y1="100" x2="285" y2="65"/></g>
<g style="font-size:13px;fill:var(--ink);text-anchor:middle">
<circle cx="40" cy="65" r="15" style="fill:var(--mat)"/><text x="40" y="70" style="fill:var(--surface)">S</text>
<circle cx="120" cy="30" r="15" style="fill:color-mix(in srgb,var(--mat) 30%,var(--surface));stroke:var(--mat)"/><text x="120" y="35">1</text>
<circle cx="120" cy="100" r="15" style="fill:color-mix(in srgb,var(--mat) 30%,var(--surface));stroke:var(--mat)"/><text x="120" y="105">1</text>
<circle cx="210" cy="30" r="15" style="fill:color-mix(in srgb,var(--mat) 15%,var(--surface));stroke:var(--mat)"/><text x="210" y="35">2</text>
<circle cx="210" cy="100" r="15" style="fill:color-mix(in srgb,var(--mat) 15%,var(--surface));stroke:var(--mat)"/><text x="210" y="105">2</text>
<circle cx="285" cy="65" r="15" style="fill:var(--surface);stroke:var(--mat)"/><text x="285" y="70">3</text>
</g>
</svg>
:::

:::qc lvl=2
q: On an unweighted graph you run BFS and a place gets distance 4. Could there be a route to it with only 3 steps?
options: ["Yes, BFS only finds some route", "No, rings are finished in order, so 3 steps would have given it distance 3"]
answer: 1
right: Right. Everything at distance 3 is finished before anything at distance 4, so a 3-step route would have reached it first.
wrong: Think about the ripple. It reaches distance 3 before it reaches distance 4.
:::

## DFS: follow one corridor to its end {lvl=2 id=s-dfs label="SDE-1"}

Explore a maze by a different rule: keep walking forward, and only when stuck, back up to the last fork and try another turn. That is **depth-first search** (DFS). It needs to remember the way back, which recursion gives for free (the call stack is the memory), or you can use an explicit stack.

```python
def dfs(graph, u, seen):
    seen.add(u)
    for v in graph[u]:
        if v not in seen:
            dfs(graph, v, seen)

def count_groups(graph):
    seen, groups = set(), 0
    for u in graph:
        if u not in seen:
            dfs(graph, u, seen)
            groups += 1
    return groups
```

DFS does not give shortest paths, but it is the right tool for **connected groups** (how many separate friend circles?), finding **cycles**, and anything where you must fully explore one branch before the next. Both BFS and DFS cost $O(V+E)$: each place is entered once and each road looked at once or twice.

## Topological sort: who goes first {lvl=2 id=s-topo label="SDE-1"}

Your degree has courses with prerequisites: Maths 1 before Maths 2, both before Machine Learning. Draw an arrow from each prerequisite to the course it unlocks. A **topological order** is a line-up of all courses where every arrow points forward.

Idea in words: a course with no unmet prerequisites can be taken now. Take it, and cross it off everyone's list. Repeat. This is **Kahn's algorithm**, and the count of unmet prerequisites of a course is its **in-degree**.

```python
def topo(graph):
    indeg = {u: 0 for u in graph}
    for u in graph:
        for v in graph[u]:
            indeg[v] += 1
    q = deque(u for u in graph if indeg[u] == 0)
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in graph[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)
    return order if len(order) == len(graph) else None
```

If some courses are never freed, they wait on each other in a circle, and the function returns `None`. So this one routine also **detects cycles** in dependencies. Cost: $O(V+E)$.

:::qc lvl=2
q: Course A needs B, B needs C, C needs A. What does Kahn's algorithm return?
options: ["An order starting from A", "None: nothing ever reaches in-degree 0, because of the circular wait"]
answer: 1
right: Right. Every course in the circle waits for another in the circle, so none is ever ready.
wrong: Which course has zero unmet prerequisites at the start?
:::

## Dijkstra: when roads differ {lvl=3 id=s-dijkstra label="SDE-2"}

Real roads take different times, so fewest junctions is not fastest. We need the cheapest total. Keep a best-known cost `dist` for every place (start at 0, others unknown). Then repeat: **finish the unfinished place with the smallest known cost**, and use it to improve its neighbours.

Why is finishing the nearest safe? Any other route to that place must pass through some unfinished place, which is already at least as far, and adding road time (never negative) cannot make it shorter. So its cost is final. A **priority queue** (heap) hands us the nearest place quickly.

```python
import heapq

def dijkstra(graph, src):      # graph[u] = [(v, minutes), ...]
    dist = {src: 0}
    pq = [(0, src)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue           # stale entry: a better one was already used
        for v, w in graph[u]:
            nd = d + w
            if nd < dist.get(v, float("inf")):
                dist[v] = nd
                heapq.heappush(pq, (nd, v))
    return dist
```

Each road can push one entry, and each push or pop on a heap of at most $E$ entries costs $\log E \le 2\log V$, so the total is $O\big((V+E)\log V\big)$. Notice that BFS is Dijkstra with every cost equal to 1: the queue becomes a plain line.

**Negative costs break it.** The safety argument above fails if a later road can *subtract* time. For graphs with negative edges, use Bellman-Ford (slower, about $O(VE)$).

:::qc lvl=3
q: Dijkstra has just finished place X with cost 7. A road later offers a route to X of cost 9. What happens?
options: ["X is updated to 9", "Nothing: 9 is not better than 7, and X is already final"]
answer: 1
right: Right. We only update when we find something cheaper, and a finished place cannot be beaten (given no negative edges).
wrong: Do we ever replace a cost with a larger one?
:::

## Union-find and the cheapest network {lvl=3 id=s-mst label="SDE-2"}

Six villages need to be joined by roads at the lowest total cost, with every village reachable. The cheapest such set of roads has no loops (a loop wastes a road) and is called a **minimum spanning tree**. **Kruskal's method**: sort all possible roads cheapest first; build a road if it joins two villages not yet connected, skip it if they already are.

The only hard part is asking fast "are these two already connected?" **Union-find** keeps each group as a tree whose root names the group. `find` walks up to the root; `union` hangs one root under the other. Shortening the walk as you go (**path compression**) makes later calls almost instant.

```python
parent = list(range(n))

def find(x):
    while parent[x] != x:
        parent[x] = parent[parent[x]]   # shortcut towards the root
        x = parent[x]
    return x

def union(a, b):
    ra, rb = find(a), find(b)
    if ra == rb:
        return False                    # already connected: would make a loop
    parent[ra] = rb
    return True
```

```python
def kruskal(edges):                     # edges = [(cost, u, v), ...]
    total = 0
    for cost, u, v in sorted(edges):
        if union(u, v):
            total += cost
    return total
```

Sorting costs $O(E\log E)$ and dominates. Joining the smaller group under the larger as well (**union by size**) makes each union-find call nearly constant time, the "inverse Ackermann" growth in textbooks.

| Question | Tool | Cost |
|---|---|---|
| Fewest steps, equal costs | BFS | O(V + E) |
| Are these connected? How many groups? | DFS or union-find | O(V + E) or near-linear |
| Order tasks by dependency, find a cycle | Kahn's topological sort | O(V + E) |
| Cheapest path, costs of 0 or more | Dijkstra | O((V + E) log V) |
| Cheapest path, negative costs | Bellman-Ford | about O(VE) |
| Cheapest network joining everything | Kruskal + union-find | O(E log E) |

## Why Maps does not just run Dijkstra {lvl=4 id=s-scale label="SDE-3"}

Plain Dijkstra explores a growing blob around your start until it hits the destination. For a long trip across a country with tens of millions of junctions, that blob is huge, and a service answering thousands of queries a second cannot afford it. Public research (not necessarily what any company ships [Inference]) points at three ideas:

1. **Aim it.** A\* adds to each place a guess of the remaining distance (straight-line distance divided by top speed never overestimates), so the search leans towards the goal instead of spreading in a circle.
2. **Search from both ends.** Two small blobs, one from the start and one from the goal, that meet in the middle, cover far fewer places than one big blob.
3. **Precompute shortcuts.** Roads change slowly, so preprocess the map once: rank junctions by importance (a motorway interchange matters more than a lane) and add shortcut edges that skip unimportant stretches. A query then climbs up to the important roads and back down, touching a few hundred places. Methods in this family are called *contraction hierarchies* in the literature [Unverified: name and details from memory].

Live traffic makes edge costs change by the minute, which is why it is hard to precompute everything. Trade-offs between precomputation, memory and freshness are the real design problem.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A map becomes a graph of V places and E roads; the algorithms never list routes, they settle places one at a time. {lvl=1}
2. BFS (a queue) finds fewest steps in O(V + E); DFS (a stack or recursion) explores deeply and finds groups and cycles. {lvl=2}
3. Topological sort orders tasks by dependency and doubles as a cycle detector. {lvl=2}
4. Dijkstra settles the nearest unfinished place using a heap: O((V + E) log V), valid only for non-negative costs. {lvl=3}
5. Union-find plus sorted edges (Kruskal) builds the cheapest network; union-find answers "connected?" in near-constant time. {lvl=3}
6. Large map services layer aiming, two-sided search and precomputed shortcuts on top of these ideas. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Mark a place visited when you queue it, not when you pop it, or BFS may queue it many times. {lvl=2}
- BFS gives shortest paths only if all steps cost the same; with different costs it can be wrong. {lvl=2}
- Recursive DFS on a very long path can overflow Python's call stack (the default limit is about a thousand calls); use an explicit stack. {lvl=3}
- Dijkstra with a negative edge silently returns wrong answers; check the costs first. {lvl=3}
- Directed or undirected? An undirected road is two directed edges, so add both. {lvl=2}
- The graph may not be connected: loop over every start place, as `count_groups` does. {lvl=2}
:::
