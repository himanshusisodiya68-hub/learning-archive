---
title: DP families
summary: Why a phone can plan the best route through twelve stops in a blink, and the nine shapes that nearly every dynamic programming problem takes.
ncert: []
up_to: SDE-3
builds_on: [Dynamic programming, Recursion, Greedy and exchange arguments]
notes_prompt: Explain to a friend what a "state" is in dynamic programming, using the delivery-stops example, and why remembering states saves so much work.
margin:
  - kind: history
    title: History
    text: 'Richard Bellman coined "dynamic programming" in the 1950s. He later wrote that he chose the word partly because it sounded impressive and could not be used in a bad sense. [Unverified: from memory]'
  - kind: tip
    title: Read the constraint first
    text: 'n up to 20 hints at bitmask DP. n and a capacity up to a few thousand hints at knapsack. A number with up to 18 digits hints at digit DP. The input size often names the family before you read the story.'
  - kind: olympiad
    title: Held-Karp
    text: 'The bitmask solution for visiting every stop once is the Held-Karp algorithm, from 1962. It is still the textbook way to solve small travelling-salesman instances exactly. [Unverified: date from memory]'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 14 Dynamic Programming: rod cutting, matrix-chain, LCS [Unverified]" }
  - { title: "S. Halim and F. Halim, Competitive Programming", ref: "Dynamic programming section: classical problems [Unverified]" }
cards:
  - { front: "What are the four questions for any DP problem?", back: "What is the state (what must I remember)? What is the transition (how do states connect)? What is the base case? In what order do I fill the states?" }
  - { front: "How do you estimate the cost of a DP?", back: "Number of states times the work per state. For LCS that is n*m states with O(1) work; for bitmask TSP it is 2^n * n states with O(n) work." }
  - { front: "0/1 knapsack with a 1-D array: which direction does the inner loop run, and why?", back: "Downwards from the capacity. That way an item is added to smaller totals that have not yet used it, so each item is used at most once. Going upwards allows reuse (unbounded knapsack)." }
  - { front: "State and transition for the longest common subsequence?", back: "dp[i][j] is the best for the first i letters of A and first j of B. If the letters match, dp[i-1][j-1] + 1; otherwise the larger of dp[i-1][j] and dp[i][j-1]." }
  - { front: "Why does a bitmask DP over n stops cost far less than n! orders?", back: "It only remembers which stops are done (2^n subsets) and where you stand (n), not the order you used. Many different orders reach the same state, so the work is shared." }
  - { front: "What does the 'tight' flag mean in digit DP?", back: "Whether the digits chosen so far equal the prefix of the limit N. While tight, the next digit cannot exceed N's digit; once it drops below, the rest are free (0 to 9)." }
core:
  idea: 'Dynamic programming solves a problem by naming a small set of states (what the future needs to know about the past), writing how each state is built from smaller ones, and computing every state once. Nearly all contest DP problems are one of a few families that differ only in what the state is.'
  formulas:
    - tex: '\text{cost} = (\text{number of states}) \times (\text{work per state})'
      label: 'How to judge a DP before you code it'
    - tex: 'dp[i] = \max\bigl(dp[i-1],\; dp[i-2] + a_i\bigr)'
      label: 'A linear DP: skip item i, or take it and skip its neighbour'
    - tex: 'n! \;\longrightarrow\; 2^n \cdot n^2'
      label: 'Orders to try versus bitmask DP steps for n stops'
  conditions:
    - 'The same smaller question comes up many times (overlapping subproblems)'
    - 'The best answer for a state can be built from best answers of smaller states (optimal substructure)'
    - 'The state holds everything the future needs, and nothing else; the number of states fits in memory and time'
  sign: 'The commonest mistake is a state that forgets something the future needs (so answers are wrong), or remembers too much (so there are too many states).'
outcomes:
  - 'Name the state, transition, base case and fill order for a new problem'
  - 'Recognise the nine DP families from the statement and the constraints'
  - 'Write knapsack, LIS, LCS, edit distance, interval, bitmask, digit and tree DP from the template'
  - 'Estimate time and memory from the number of states'
  - 'Optimise: rolling arrays, reconstructing the answer, bitsets, the O(n log n) LIS'
opener:
  story: |
    A delivery rider has **12 stops** and wants the shortest loop that visits all of them and returns to the shop. How many different orders are there? Twelve times eleven times ten, and so on down to one: **479,001,600**. Even at a million orders a second, a phone would be busy for eight minutes.

    Yet a phone finds the best loop for 12 stops in a fraction of a second. It does not try every order. It notices that many different orders end up in the **same situation**: "these six stops are done, and I am standing at stop 4". What happens next does not care which of the many orders got you there.

    So the phone solves each situation once, writes the answer down, and reuses it. That is dynamic programming. The craft of it is knowing *which* situations to write down. It turns out there are only a handful of kinds.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Twelve delivery stops with a route loop, beside the counts of orders and of remembered situations"><g style="fill:var(--surface);stroke:var(--c);stroke-width:1.5"><circle cx="60" cy="50" r="7"/><circle cx="120" cy="36" r="7"/><circle cx="180" cy="62" r="7"/><circle cx="130" cy="100" r="7"/><circle cx="60" cy="110" r="7"/><circle cx="210" cy="120" r="7"/></g><path d="M60 50 L120 36 L180 62 L210 120 L130 100 L60 110 Z" style="fill:none;stroke:var(--c);stroke-width:1.5;stroke-dasharray:4 3"/><circle cx="60" cy="50" r="7" style="fill:var(--c)"/><text x="72" y="54" style="font-size:10px;fill:var(--ink)">shop</text><rect x="20" y="150" width="130" height="62" rx="8" style="fill:var(--surface);stroke:var(--bad)"/><text x="30" y="172" style="font-size:10px;fill:var(--muted)">steps trying every order</text><text x="30" y="196" style="font-size:15px;fill:var(--bad)">479,001,600</text><rect x="170" y="150" width="130" height="62" rx="8" style="fill:var(--surface);stroke:var(--c)"/><text x="180" y="172" style="font-size:10px;fill:var(--muted)">steps when remembering</text><text x="180" y="196" style="font-size:15px;fill:var(--c)">about 590,000</text></svg>'
life:
  - 'Your phone''s map app and delivery apps plan routes by reusing partial answers instead of trying every ordering.'
  - 'The "diff" in Git and the "compare versions" in a document editor use the longest common subsequence idea to show what changed.'
  - 'Spell-checkers and search bars ("did you mean...") rank suggestions by edit distance.'
  - 'Packing a suitcase or a cargo plane with weight limits is a knapsack problem.'
  - 'The typesetting system TeX picks line breaks for a paragraph with a DP: each state is "the best layout of the words so far". [Unverified: from memory]'
symbols:
  - s: 'dp[i]'
    means: 'the best answer for the first i items, a table entry (same unit as the answer)'
  - s: 'n, m'
    means: 'sizes of the inputs, such as the number of items or the length of a word (count)'
  - s: 'W'
    means: 'capacity of the bag (weight units)'
  - s: 'n!'
    means: 'n factorial: n times n-1 times ... times 1, the number of orders of n things'
  - s: '2^n'
    means: 'the number of subsets of n things (count)'
  - s: 'O(\cdot)'
    means: 'how the work grows with the input size'
links:
  - leaf: 'cs/dynamic-programming'
    name: 'Dynamic programming'
    same: 'The same method taught from first principles: overlapping subproblems and memory.'
    differs: 'That lesson teaches the idea; this one is the catalogue of shapes the state takes, so a new problem looks familiar.'
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'A top-down DP is a recursive function with a notebook (a cache) attached.'
    differs: 'Plain recursion forgets; DP remembers each answer and so turns an exponential tree into a table.'
  - leaf: 'cs/cp-greedy-exchange'
    name: 'Greedy and exchange arguments'
    same: 'Both break a big problem into smaller copies of itself.'
    differs: 'Greedy commits to one choice per step; DP tries all choices and keeps the best, so it stays correct where greedy fails.'
  - leaf: 'mat/permutations-and-combinations'
    name: 'Counting and combinatorics'
    same: 'Counting subsets (2^n) versus orders (n!) is exactly the saving that bitmask DP uses.'
    differs: 'Combinatorics counts the objects; DP walks over them smartly without listing them.'
next:
  q: 'A road map is not a line, a grid or a tree. It is a web of places and roads. Shortest paths, connected regions and ordering tasks all live there. How do you spot a graph hiding inside a problem about grids, words or dependencies?'
  leaf: 'cs/cp-graph-patterns'
  name: 'Graph patterns'
---

:::hook
q: There are 479 million orders for 12 stops. Roughly how many steps does a route planner need if it remembers each situation it has solved?
options: ["479 million, one per order", "About 590 thousand", "Only 12"]
answer: 1
right: Right. A situation is "which stops are done" (4,096 subsets of 12 stops) times "where I am standing now" (12), and each is extended 12 ways: about 4,096 × 12 × 12 ≈ 590,000 steps. Different orders that reach the same situation share the work.
wrong: A situation does not record the order of the stops, only which are done and where you stand. How many ways are there to choose a done-set from 12 stops, and how many places to stand?
:::

## Remember instead of recompute {lvl=1 id=s-remember label="Foundations"}

You can climb a staircase one or two steps at a time. How many different ways are there to climb 10 stairs? To reach step 10 you must have come from step 9 (a one-step) or step 8 (a two-step). So

ways to reach step 10 = ways to reach step 9 + ways to reach step 8.

And the same rule works for step 9 and step 8. Written naively, this recomputes the same small answers thousands of times. Written with a notebook, each step is worked out once: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89. There are **89** ways.

That notebook is the whole idea. A **state** is the small piece of information that tells you everything you need to continue (here, "which step am I on"). Each state's answer is computed once from smaller states' answers.

:::qc lvl=1
q: Climbing stairs, the number of ways to reach step 5 is 8 and to reach step 6 is 13. How many ways reach step 7?
options: ["13", "21", "26"]
answer: 1
right: Right. Step 7 comes from step 6 or step 5: 13 + 8 = 21.
wrong: To stand on step 7 you came from step 6 (one-step) or step 5 (two-step). Add those two counts.
:::

## The four questions {lvl=1 id=s-four label="Foundations"}

Every DP problem is solved by answering four questions, in this order:

1. **State**: what do I need to know about the past to decide the future? (the step number, the items used so far, the stops visited)
2. **Transition**: how is this state's answer built from the answers of smaller states?
3. **Base case**: which states have an obvious answer? (step 0 has one way: do nothing)
4. **Order**: in which order should the states be filled so that the smaller ones are ready first?

Then the cost is easy to estimate: **number of states × work per state**. A state space of 10 million with $O(1)$ work is fine. A state space of $10^{10}$ is not, and you must find a smaller state.

## The template {lvl=2 id=s-template label="SDE-1"}

The quickest way to write a DP is top-down: write the recursion, then add a cache. Take "pick numbers from a row for the largest total, but never two neighbours":

```python
from functools import lru_cache

def best_no_neighbours(a):
    @lru_cache(None)
    def f(i):                       # best total using items i, i+1, ...
        if i >= len(a): return 0    # base case: nothing left
        return max(f(i + 1), a[i] + f(i + 2))   # skip it, or take it and jump
    return f(0)
```

Read it as: either skip item `i` and solve from `i+1`, or take it and solve from `i+2`. For (2, 7, 9, 3, 1) the answer is 12 (take 2, 9 and 1). The cache makes each `f(i)` run once.

Python's default recursion depth is about 1,000. For states deeper than that, write the same thing **bottom-up** (a loop that fills the table from the base case upwards), or raise the limit with `sys.setrecursionlimit`.

## Linear and knapsack families {lvl=2 id=s-knapsack label="SDE-1"}

**Linear DP**: the state is one index $i$, as above. **Knapsack**: the state is "which items have I considered, and how much capacity is used". With a 1-D array it looks like this for 0/1 knapsack (each item once):

```python
def knapsack(items, W):             # items: (weight, value)
    dp = [0] * (W + 1)              # dp[w] = best value with capacity w
    for wt, val in items:
        for w in range(W, wt - 1, -1):          # downwards: each item used once
            dp[w] = max(dp[w], dp[w - wt] + val)
    return dp[W]
```

The downward loop matters. Going downwards, `dp[w - wt]` still holds the value from *before* this item, so the item is not counted twice. For **unbounded** knapsack (unlimited copies) go **upwards**.

Coin problems are knapsacks too. **Fewest coins** for a target $T$:

```python
def min_coins(coins, T):
    INF = float("inf")
    dp = [0] + [INF] * T
    for t in range(1, T + 1):
        for c in coins:
            if c <= t:
                dp[t] = min(dp[t], dp[t - c] + 1)
    return dp[T] if dp[T] < INF else -1
```

For coins 1, 5, 6, 9 and target 11 this finds 2 (5 + 6), where greedy would take 9 + 1 + 1. To **count ways** (combinations, order ignored), loop over coins on the outside and amounts on the inside: `for c in coins: for t in range(c, T+1): dp[t] += dp[t-c]`. Swap the loops and you count *orders* instead.

:::qc lvl=2
q: In the 1-D 0/1 knapsack, what goes wrong if the inner loop runs upwards from `wt` to `W`?
options: ["Nothing, it is faster", "An item can be used more than once", "The table is filled with zeros"]
answer: 1
right: Right. Going upwards, `dp[w - wt]` may already include this item, so it can be added again. That is the unbounded knapsack.
wrong: Think about which entries have already been updated for the current item when you read `dp[w - wt]`.
:::

## Sequence families: LIS, LCS, edit distance {lvl=2 id=s-sequence label="SDE-1"}

**Longest increasing subsequence (LIS).** State: `dp[i]` = longest increasing run that *ends* at position $i$. Transition: the best `dp[j] + 1` over earlier $j$ with a smaller value. That is $O(n^2)$. A faster way keeps `tails[k]`, the smallest possible last value of an increasing run of length `k+1`; it stays sorted, so we can binary-search it:

```python
from bisect import bisect_left

def lis(a):
    tails = []
    for x in a:
        i = bisect_left(tails, x)       # first run whose tail is >= x
        if i == len(tails): tails.append(x)
        else: tails[i] = x              # a smaller tail is always better
    return len(tails)
```

For (4, 10, 4, 3, 8, 9, 2, 12, 7, 15) the length is 5 (for example 4, 8, 9, 12, 15). Use `bisect_right` if equal values are allowed in the run.

**Longest common subsequence (LCS)** of two words. State: `dp[i][j]` = best for the first $i$ letters of one word and the first $j$ of the other.

```python
def lcs(a, b):
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1           # match: extend the diagonal
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])  # skip a letter from one side
    return dp[-1][-1]
```

**Edit distance** has the same shape, but each cell is the *fewest edits* (insert, delete, replace one letter) to turn the first $i$ letters of one word into the first $j$ of the other:

```python
def edit(a, b):
    prev = list(range(len(b) + 1))                  # row for the empty prefix of a
    for i in range(1, len(a) + 1):
        cur = [i] + [0] * len(b)
        for j in range(1, len(b) + 1):
            cur[j] = min(prev[j] + 1, cur[j-1] + 1,
                         prev[j-1] + (a[i-1] != b[j-1]))
        prev = cur
    return prev[-1]
```

Only the previous row is kept, so memory is $O(m)$ instead of $O(nm)$. Edit distance from "garden" to "danger" is 4.

:::figure caption="The LCS table for two short words. Each cell looks only at the cell above, the cell on the left, and the cell diagonally up-left, so the table is filled row by row."
<svg viewBox="0 0 320 150" role="img" aria-label="A grid of cells with arrows from the left, above and diagonal neighbours into one cell">
<g style="stroke:var(--rule);fill:var(--surface);stroke-width:1">
<rect x="60" y="20" width="48" height="36"/><rect x="108" y="20" width="48" height="36"/><rect x="156" y="20" width="48" height="36"/>
<rect x="60" y="56" width="48" height="36"/><rect x="108" y="56" width="48" height="36"/><rect x="156" y="56" width="48" height="36" style="fill:color-mix(in srgb,var(--c) 25%,var(--surface));stroke:var(--c)"/>
<rect x="60" y="92" width="48" height="36"/><rect x="108" y="92" width="48" height="36"/><rect x="156" y="92" width="48" height="36"/>
</g>
<g style="stroke:var(--c);stroke-width:1.5;fill:none"><path d="M132 40 L168 68"/><path d="M180 38 V58"/><path d="M130 76 H158"/></g>
<g style="font-size:10px;fill:var(--ink)" text-anchor="middle"><text x="84" y="42">diag</text><text x="132" y="42">diag</text><text x="180" y="42">above</text><text x="84" y="78">...</text><text x="132" y="78">left</text><text x="180" y="78">dp[i][j]</text></g>
<text x="220" y="78" style="font-size:10px;fill:var(--muted)">needs 3 neighbours,</text><text x="220" y="92" style="font-size:10px;fill:var(--muted)">so O(1) work per cell</text>
</svg>
:::

:::qc lvl=2
q: LCS fills a table of n × m cells with O(1) work each. What is the total cost?
options: ["O(n + m)", "O(n × m)", "O(2^n)"]
answer: 1
right: Right. Number of states (n × m) times work per state (constant).
wrong: Use the rule: cost is the number of states times the work per state.
:::

## Grid paths {lvl=2 id=s-grid label="SDE-1"}

A walker moves only right or down across a grid of costs and wants the cheapest route to the far corner. State: the cell. A cell can only be entered from above or from the left, so its best cost is its own cost plus the smaller of those two neighbours.

```python
def min_path(g):
    R, C = len(g), len(g[0])
    for r in range(R):
        for c in range(C):
            if r == c == 0: continue
            up = g[r-1][c] if r else float("inf")
            left = g[r][c-1] if c else float("inf")
            g[r][c] += min(up, left)
    return g[-1][-1]
```

To count paths, replace `min` by a sum, and set blocked cells to 0 ways. If moves in four directions are allowed and costs are all positive, the cells form a graph, and you want Dijkstra (next lesson), not this DP.

## Interval DP {lvl=3 id=s-interval label="SDE-2"}

Some problems are about a *stretch* of a row: merge neighbouring stones, burst balloons, split a stick. The state is the interval $[i, j]$, and the transition tries every **last** (or first) split point $k$ inside it. Fill the intervals from short to long.

Example: a stick of length 7 must be cut at positions 1, 3, 4, 5. Each cut costs the length of the piece being cut. Choose the order that costs least.

```python
def cut_cost(length, cuts):
    p = [0] + sorted(cuts) + [length]
    n = len(p)
    dp = [[0] * n for _ in range(n)]        # dp[i][j]: cheapest to finish p[i]..p[j]
    for gap in range(2, n):                 # shorter ranges first
        for i in range(n - gap):
            j = i + gap
            dp[i][j] = p[j] - p[i] + min(dp[i][k] + dp[k][j] for k in range(i + 1, j))
    return dp[0][-1]
```

The answer is 16. The trick is to think about the **first** cut of a piece: whichever cut you make first splits the piece into two independent smaller pieces. States are $O(n^2)$ and each tries $O(n)$ splits, so the cost is $O(n^3)$, fine for $n$ up to a few hundred.

## Bitmask DP {lvl=3 id=s-bitmask label="SDE-2"}

When $n \le 20$ and the problem is about *subsets* or *orders*, the state can be the set of things already done, stored as a number whose bits mark the members. For the delivery rider: state = (set of visited stops, current stop).

```python
def tsp(d):                                  # d[i][j]: distance between stops
    n = len(d); INF = float("inf")
    dp = [[INF] * n for _ in range(1 << n)]  # dp[mask][i]: visited mask, now at i
    dp[1][0] = 0                             # start at the shop (stop 0)
    for mask in range(1 << n):
        for i in range(n):
            if dp[mask][i] == INF: continue
            for j in range(n):
                if not mask >> j & 1:        # j not visited yet
                    nm = mask | 1 << j
                    dp[nm][j] = min(dp[nm][j], dp[mask][i] + d[i][j])
    return min(dp[-1][i] + d[i][0] for i in range(n))
```

There are $2^n \cdot n$ states with $O(n)$ work each: $2^n n^2$. For $n = 20$ that is about $4 \times 10^8$ steps: heavy in Python, comfortable in C++. The same shape solves "assign $n$ workers to $n$ tasks" and "partition people into groups".

:::qc lvl=3
q: Why can the bitmask DP ignore the order in which the stops were visited?
options: ["Because the order never matters in real life", "Because the future cost depends only on which stops remain and where you stand", "Because it tries all orders anyway"]
answer: 1
right: Right. That is exactly what a good state is: all the future needs. Every order reaching the same (set, position) shares one entry.
wrong: Ask what the remaining trip depends on. Does it depend on how you got here, or only on what is left and where you are?
:::

## Digit DP {lvl=3 id=s-digit label="SDE-2"}

"How many numbers up to $N$ have a property of their digits?" with $N$ as large as $10^{18}$. You cannot loop over $N$, but there are only 18 digits. Build the number digit by digit from the left. The state: position, whatever the property needs to remember (here, the sum still needed), and a **tight** flag saying whether you are still hugging $N$'s own digits.

```python
from functools import lru_cache

def count_digit_sum(N, S):                  # numbers 0..N with digit sum S
    digs = list(map(int, str(N)))
    @lru_cache(None)
    def go(pos, left, tight):
        if left < 0: return 0
        if pos == len(digs): return 1 if left == 0 else 0
        top = digs[pos] if tight else 9     # tight: cannot exceed N's digit
        return sum(go(pos + 1, left - d, tight and d == top) for d in range(top + 1))
    return go(0, S, True)
```

`count_digit_sum(500, 10)` is 43. For a range $[A, B]$, compute the count up to $B$ minus the count up to $A-1$. Leading zeros usually need no special care for a digit-sum, but for properties such as "no two equal neighbours" add a flag "started yet".

## DP on trees {lvl=3 id=s-tree label="SDE-2"}

On a tree, the state is "this node, and some choice about it". Children are independent subproblems. Take a tree where each node has a weight and you pick a set of nodes with no two joined by an edge (an *independent set*), maximising the total weight.

```python
def best_independent(adj, a):               # adj: lists of neighbours, a: weights
    def dfs(v, parent):
        take, skip = a[v], 0                # best in v's subtree: v taken / v skipped
        for u in adj[v]:
            if u != parent:
                t, s = dfs(u, v)
                take += s                   # v taken: children must be skipped
                skip += max(t, s)           # v skipped: each child is free
        return take, skip
    return max(dfs(0, -1))
```

Each node is visited once, so the cost is $O(n)$. For very deep trees (a chain of $10^5$ nodes) replace the recursion with an explicit stack or raise the recursion limit.

## DP families at a glance {lvl=3 id=s-table label="SDE-2"}

| Family | Signal | State | Transition | Cost |
|---|---|---|---|---|
| Linear | "best over a row", choices depend on the last one or two items | index $i$ | combine $i-1$, $i-2$ | $O(n)$ |
| 0/1 knapsack | pick each item once under a limit | (item, capacity used) | skip, or take and subtract | $O(nW)$ |
| Unbounded / coins | unlimited copies, exact total, fewest or number of ways | amount | try each coin | $O(nT)$ |
| LIS | longest ordered chain in a sequence | end position | best earlier smaller item $+1$ | $O(n^2)$ or $O(n\log n)$ |
| LCS, edit distance | two strings or sequences compared | (prefix of A, prefix of B) | match / skip / edit | $O(nm)$ |
| Grid paths | walk right and down over a grid | cell | from above or left | $O(RC)$ |
| Interval | best way to process a stretch, split points | $[i, j]$ | try every split $k$ | $O(n^3)$ |
| Bitmask | $n \le 20$, subsets, orders, assignment | (set done, last) | add one more element | $O(2^n n^2)$ |
| Digit | count numbers up to $N$ by digit property | (position, memory, tight) | try each next digit | $O(\text{digits} \times \text{states} \times 10)$ |
| Tree | optimum over a tree, choices on nodes | (node, choice) | combine children | $O(n)$ |

## Tuning and reconstruction {lvl=4 id=s-tuning label="SDE-3"}

**Rolling arrays.** If row $i$ only needs row $i-1$, keep two rows (or one), as the edit distance code did. Memory drops from $O(nm)$ to $O(m)$. You lose the ability to walk back through the table, so only do it when you need the *value*, not the choices.

**Reconstructing the answer.** To print *which* items were chosen, keep the full table (or a parent pointer per state), then walk backwards from the final state: at each step ask which transition produced the stored value, record it, and move to that earlier state.

**Bitsets for reachability.** "Can some subset of these numbers sum to $S$?" needs only a yes or no per sum. Store the yes/no for all sums in one big integer, one bit per sum:

```python
def reachable_sums(nums):
    bits = 1                      # bit k set means sum k can be made; start: sum 0
    for x in nums:
        bits |= bits << x         # every old sum k also gives k + x
    return bits                   # check sum S with (bits >> S) & 1
```

One shift handles every sum at once. In C++ a `std::bitset` packs 64 sums into each machine word, so it does about 64 times fewer steps than a plain table.

**Cutting states.** If the state space is too large, ask which part of the state is **redundant** (it can be derived from the others) or **monotone** (only the best value matters, so keep one number instead of a list). The $O(n \log n)$ LIS is that move: keep only the smallest tail per length.

## The catalogue of problem types {lvl=3 id=s-catalogue label="SDE-2"}

Each type in our own words, with its family.

| # | The story | Family |
|---|---|---|
| 1 | Ways to climb stairs taking one or two steps | Linear |
| 2 | Rob houses along a street, never two neighbours | Linear |
| 3 | Fewest coins to make an amount | Unbounded knapsack |
| 4 | Number of ways to make an amount from coins | Unbounded knapsack, coins outer |
| 5 | Split numbers into two groups of equal sum | 0/1 knapsack, sum $= \tfrac12$ total |
| 6 | Pack the most valuable load under a weight limit | 0/1 knapsack |
| 7 | Longest strictly rising run in a sequence | LIS |
| 8 | Most nested boxes or envelopes | LIS after sorting one dimension |
| 9 | Longest letters two words share in order | LCS |
| 10 | Fewest changes to turn one word into another | Edit distance |
| 11 | Longest palindrome hidden inside a word | LCS of the word and its reverse |
| 12 | Cheapest route across a cost grid | Grid paths |
| 13 | Cheapest order to cut a stick or merge stones | Interval |
| 14 | Visit every city once at least cost ($n \le 20$) | Bitmask |
| 15 | Count numbers up to $N$ with a digit property | Digit |
| 16 | Largest total of non-adjacent tree nodes | Tree |

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- Choosing a state that forgets something (for example, ignoring "was the previous item taken?"). Test on a tiny input by hand.
- Wrong loop direction in knapsack (down for 0/1, up for unbounded).
- Wrong loop nesting in coin counting (combinations versus orders).
- Using `float("inf")` as a value and then adding to it. Check before you add.
- Forgetting the base case, or an off-by-one between "first $i$ items" and "index $i$".
- Recursion depth limit on long chains.
- Not recognising a graph: if you can go in all four directions, it is a shortest-path problem, not a DP over rows.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. DP is a recursion with a notebook: solve each situation once and reuse it. {lvl=1}
2. Ask four questions: state, transition, base case, fill order. {lvl=1}
3. Estimate cost as the number of states times the work per state. {lvl=2}
4. 0/1 knapsack loops downwards over capacity, unbounded loops upwards. {lvl=2}
5. LIS, LCS and edit distance differ only in what the state means; LIS has an $O(n \log n)$ version. {lvl=2}
6. Interval DP tries every split point, filling short intervals first. {lvl=3}
7. Bitmask DP remembers which things are done, not the order: $n!$ becomes $2^n n^2$. {lvl=3}
8. Digit DP walks the digits with a tight flag; tree DP combines independent children. {lvl=3}
9. Rolling arrays save memory; keep the table or parent pointers to reconstruct the answer. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- If you cannot say what the state means in one sentence, the DP is not ready to code. {lvl=1}
- Greedy and DP look alike. If a locally best choice can block a better later one (coins 1, 3, 4), use DP. {lvl=2}
- `lru_cache` needs hashable arguments: pass tuples, not lists. {lvl=2}
- A table of $10^4 \times 10^4$ numbers is $10^8$ entries, far too big in Python. Check memory before you commit. {lvl=3}
- In digit DP the tight flag is easy to forget; test with $N$ = 0, 9, 10 and a power of ten. {lvl=3}
- Bitmask DP at $n = 20$ is slow in Python. Use a faster language or cut the state. {lvl=4}
:::
