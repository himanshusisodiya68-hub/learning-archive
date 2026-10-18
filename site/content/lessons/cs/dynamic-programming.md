---
title: Dynamic programming
summary: How your phone knows that "recieve" is one swap from "receive", by remembering small answers instead of solving them over and over.
ncert: []
up_to: SDE-3
builds_on: [Recursion, Divide and conquer, Greedy algorithms]
notes_prompt: Explain to a friend how writing down the answer to each small question first lets you answer a huge question without repeating yourself.
margin:
  - kind: history
    title: History
    text: 'Richard Bellman named the method in the 1950s; "programming" there means planning, not code, and the name was reportedly chosen partly to sound impressive. [Unverified: from memory]'
  - kind: tip
    title: Interview favourite
    text: 'Words like "how many ways", "minimum cost", "longest", or "is it possible" on a problem with choices at every step usually signal dynamic programming. Start by writing the brute-force recursion.'
  - kind: olympiad
    title: Design link
    text: 'Tools that compare two files (diff) and programs that align DNA sequences fill in a table like the one in this lesson. The cost is states times work per state, which is why alignment gets expensive on very long sequences.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 14 Dynamic programming [Unverified]" }
  - { title: "J. Kleinberg and E. Tardos, Algorithm Design", ref: "Ch. 6 Dynamic programming [Unverified]" }
  - { title: "S. Dasgupta, C. Papadimitriou, U. Vazirani, Algorithms", ref: "Ch. 6 Dynamic programming [Unverified]" }
cards:
  - { front: "What does dynamic programming add to plain recursion?", back: "It remembers the answer to each distinct sub-problem, so every sub-problem is solved once, not again and again." }
  - { front: "Two conditions that make dynamic programming work?", back: "Overlapping sub-problems (the same smaller question appears many times) and optimal substructure (the best answer is built from best answers to smaller questions)." }
  - { front: "Memoisation versus tabulation?", back: "Memoisation is top-down: recurse and cache answers. Tabulation is bottom-up: fill a table from the smallest case up. Same answers, different order of work." }
  - { front: "How do you estimate the cost of a DP?", back: "Number of distinct states times the work per state. Edit distance on lengths m and n has about m × n states with constant work each." }
  - { front: "Recurrence for the edit distance of two words?", back: "d[i][j] = the smallest of: delete (d[i-1][j] + 1), insert (d[i][j-1] + 1), or match or replace (d[i-1][j-1] + 0 if the letters are equal, else 1)." }
  - { front: "Why is 0/1 knapsack's O(n × W) called pseudo-polynomial?", back: "W is a number whose size in bits is log W. The cost n × W grows exponentially in the bits needed to write W down." }
core:
  idea: 'When a problem breaks into smaller versions of itself that repeat, solve each distinct version once, write the answer down, and build bigger answers from the stored ones. The cost is the number of distinct sub-problems times the work to combine each.'
  formulas:
    - tex: '\text{time} = (\text{number of states}) \times (\text{work per state})'
      label: 'How to estimate the cost of any dynamic programme'
    - tex: 'd[i][j] = \min\bigl(d[i-1][j]+1,\; d[i][j-1]+1,\; d[i-1][j-1]+c\bigr)'
      label: 'Edit distance: c is 0 if the two letters match, else 1'
  conditions:
    - 'Overlapping sub-problems: the same smaller question is asked many times'
    - 'Optimal substructure: a best answer is made of best answers to smaller questions'
    - 'The state, meaning what you must remember to continue, is small enough to store'
  sign: 'The art is choosing the state. Too little in it and the answers are wrong; too much and the table is too big to fill.'
outcomes:
  - 'Explain why naive recursion repeats work and how remembering answers removes it'
  - 'Write the same solution top-down with a cache and bottom-up with a table'
  - 'Design a state, a transition and a base case for a new problem'
  - 'Solve coin change, 0/1 knapsack, longest common subsequence and edit distance'
  - 'Estimate the time and memory of a solution as states times work per state'
opener:
  story: |
    You type **recieve** and your phone quietly offers **receive**. Behind that nudge is a question: how many small edits (insert a letter, delete one, or change one) turn one word into the other?

    Trying every possible sequence of edits is hopeless, because the options multiply at every step. Yet you do not need to. To turn "recie" into "recei", you may already know the answer from an earlier, smaller question. Each prefix of one word against each prefix of the other is a tiny question, and many longer questions share the same tiny ones.

    So here is the plan: ask every tiny question exactly once, write the answers in a grid, and let the big answer fall out of the grid. How big does the grid get for two words of ten letters?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A grid of small answers whose bottom-right cell gives the edit distance between two words"><g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="64" y="40">p</text><text x="104" y="40">l</text><text x="144" y="40">a</text><text x="184" y="40">n</text><text x="30" y="68">l</text><text x="30" y="108">a</text><text x="30" y="148">n</text><text x="30" y="188">e</text></g><g style="fill:color-mix(in srgb,var(--c) 8%,var(--surface));stroke:var(--rule)"><rect x="44" y="50" width="40" height="30"/><rect x="84" y="50" width="40" height="30"/><rect x="124" y="50" width="40" height="30"/><rect x="164" y="50" width="40" height="30"/><rect x="44" y="90" width="40" height="30"/><rect x="84" y="90" width="40" height="30"/><rect x="124" y="90" width="40" height="30"/><rect x="164" y="90" width="40" height="30"/><rect x="44" y="130" width="40" height="30"/><rect x="84" y="130" width="40" height="30"/><rect x="124" y="130" width="40" height="30"/><rect x="164" y="130" width="40" height="30"/><rect x="44" y="170" width="40" height="30"/><rect x="84" y="170" width="40" height="30"/><rect x="124" y="170" width="40" height="30"/></g><rect x="164" y="170" width="40" height="30" style="fill:var(--c);stroke:var(--c)"/><text x="184" y="190" style="font-size:12px;fill:var(--surface);text-anchor:middle">2</text><path d="M232 100 C250 120 240 170 210 186" style="fill:none;stroke:var(--c);stroke-width:1.8"/><text x="236" y="96" style="font-size:10px;fill:var(--c)">the answer</text><text x="160" y="224" style="font-size:10px;fill:var(--muted);text-anchor:middle">each cell: one small question, answered once</text></svg>'
life:
  - 'Spell-check and autocorrect on your phone measure how close your typing is to dictionary words using edit distance.'
  - 'The diff tool in version control, and the "changes" view when two people edit a document, finds the longest common run of lines and shows what differs.'
  - 'Comparing DNA of two species or two patients lines up long sequences using a table very like the one in this lesson.'
  - 'Planning with a budget, such as picking the best set of items to buy for fixed money or filling a bag within a weight limit, is the knapsack problem.'
  - 'Routing and speech recognition on phones use the same "best path built from best shorter paths" idea in a dynamic programme (the Viterbi method). [Inference: general description, details vary by product]'
models:
  - name: 'Write it down once'
    text: 'Repeating the same hard thinking is waste. A checklist, a recipe, a saved calculation or a notebook of results turns a repeated problem into a lookup. Ask: have I solved this before?'
  - name: 'Small answers first'
    text: 'You do not climb a mountain by one giant leap. You walk a ladder of small, safe steps where each rung rests on the last. Plan big goals as chains of small, checkable results.'
  - name: 'What do I need to remember?'
    text: 'The state is the smallest summary of the past that still lets you decide the future. In a project, a budget, or a game of chess, success often depends on choosing what to keep track of and what to forget.'
links:
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'A dynamic programme is a recursion on smaller versions of the problem, with a base case and a rule to combine.'
    differs: 'Plain recursion may solve the same sub-problem again and again; dynamic programming stores each answer so it is computed only once.'
  - leaf: 'cs/greedy'
    name: 'Greedy algorithms'
    same: 'Both build a best answer from best answers to smaller problems.'
    differs: 'Greedy commits to one choice and never looks back; dynamic programming tries every choice for a sub-problem and keeps the best. It is slower but works where greedy fails, like coins 1, 3, 4.'
  - leaf: 'cs/divide-and-conquer'
    name: 'Divide and conquer'
    same: 'Both split a problem into smaller copies of itself and combine their answers.'
    differs: 'Divide and conquer assumes the pieces are independent; dynamic programming is for pieces that overlap.'
next:
  q: 'A table works when the sub-problems form a neat grid. But a map of cities and roads has no rows or columns. How does a phone find the shortest route when the places are connected in a tangle?'
  leaf: 'cs/graph-algorithms'
  name: 'Graph algorithms: BFS, DFS, shortest paths'
symbols:
  - s: 'F(n)'
    means: 'the n-th Fibonacci number: 0, 1, 1, 2, 3, 5, 8, ... each is the sum of the two before it'
  - s: 'd[i][j]'
    means: 'edit distance between the first i letters of one word and the first j letters of the other (edits)'
  - s: 'c'
    means: 'cost of the last step in the edit table: 0 if the two letters match, else 1'
  - s: 'W'
    means: 'capacity of the knapsack, the most weight it can hold (kg)'
  - s: 'O(m\cdot n)'
    means: 'cost proportional to the table size: m rows times n columns'
---

:::hook
q: Here's the puzzle. To compare two words of ten letters each, we keep one answer for every pair of beginnings (including the empty beginning). How many answers is that?
options: ["121", "About 10 million", "About 10 billion"]
answer: 0
right: Right. Each word has 11 beginnings (0 to 10 letters), so there are 11 × 11 = 121 small questions. Counting every possible sequence of edits would run to millions; the grid avoids it.
wrong: Count the beginnings of one word, including the empty one: 0 letters, 1 letter, up to 10 letters. Then pair them up with the beginnings of the other word.
:::

## Repeated work {lvl=1 id=s-repeat label="Foundations"}

Start with Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, ... Each is the sum of the two before it. In words, to get the 30th number, add the 29th and the 28th. A function that calls itself in exactly that way looks natural:

```python
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
```

It is correct, and horribly slow. To get `fib(30)` it asks for `fib(29)` and `fib(28)`; but `fib(29)` also asks for `fib(28)`. The same question is answered again and again, and the repeats multiply. In all, `fib(30)` makes about 2.7 million calls, to produce a number that needs only 30 additions.

The cure is as old as a school notebook: **write the answer down the first time, and look it up afterwards.**

```python
from functools import lru_cache

@lru_cache(None)           # remembers every answer it has computed
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)
```

Now each `fib(k)` is worked out once, so `fib(30)` costs about 30 steps. This is **dynamic programming**: recursion plus memory of answers.

:::figure caption="Each Fibonacci number needs only two earlier numbers, and they are already in the table. Fill left to right."
<svg viewBox="0 0 320 130" role="img" aria-label="A row of Fibonacci numbers with arcs showing that F(7) uses F(6) and F(5)">
<g style="fill:color-mix(in srgb,var(--mat) 10%,var(--surface));stroke:var(--mat);stroke-width:1.5">
<rect x="16" y="70" width="32" height="30" rx="3"/><rect x="52" y="70" width="32" height="30" rx="3"/><rect x="88" y="70" width="32" height="30" rx="3"/><rect x="124" y="70" width="32" height="30" rx="3"/><rect x="160" y="70" width="32" height="30" rx="3"/><rect x="196" y="70" width="32" height="30" rx="3"/><rect x="232" y="70" width="32" height="30" rx="3"/>
</g>
<rect x="268" y="70" width="32" height="30" rx="3" style="fill:var(--mat);stroke:var(--mat)"/>
<g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="32" y="90">0</text><text x="68" y="90">1</text><text x="104" y="90">1</text><text x="140" y="90">2</text><text x="176" y="90">3</text><text x="212" y="90">5</text><text x="248" y="90">8</text></g>
<text x="284" y="90" style="font-size:12px;fill:var(--surface);text-anchor:middle">13</text>
<g style="font-size:9px;fill:var(--muted);text-anchor:middle"><text x="32" y="114">F0</text><text x="68" y="114">F1</text><text x="104" y="114">F2</text><text x="140" y="114">F3</text><text x="176" y="114">F4</text><text x="212" y="114">F5</text><text x="248" y="114">F6</text><text x="284" y="114">F7</text></g>
<path d="M284 70 Q266 36 248 70 M284 70 Q248 20 212 70" style="fill:none;stroke:var(--mat);stroke-width:1.5"/>
<text x="160" y="16" style="font-size:11px;fill:var(--ink);text-anchor:middle">F7 = F6 + F5, both already written down</text>
</svg>
:::

:::qc lvl=1
q: Naive fib(30) makes about 2.7 million calls, but with a cache it does only about 30 steps. Why?
options: ["Each value is computed once, then looked up", "The cache makes each call faster", "The cache skips the base case"]
answer: 0
right: Right. The calls themselves are no faster. There are just far fewer of them, because every repeated question is answered from memory.
wrong: Think about how often fib(28) is worked out in each version. How many times in the naive one, and how many with the cache?
:::

## Two ways to remember {lvl=2 id=s-ways label="SDE-1"}

There are two styles, with the same answers:

| | Memoisation (top-down) | Tabulation (bottom-up) |
|---|---|---|
| Start from | the big question | the smallest cases |
| How | recurse, caching each answer | fill a table in a fixed order |
| Good for | few of the states actually needed | every state needed; easy to cut memory |
| Watch for | deep recursion (stack limits) | getting the fill order right |

The bottom-up Fibonacci needs only the last two values, so it keeps two numbers instead of a table:

```python
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

This is the pattern for most dynamic programmes: the table first, then a check of which old cells are still needed and a trim of the memory.

## Coin change {lvl=2 id=s-coins label="SDE-1"}

Last lesson, biggest-coin-first failed for coins 1, 3, 4 and amount 6. Dynamic programming fixes it by being less hasty: for each amount $a$ from 0 up, work out the fewest coins, trying **every** coin as the last one.

- To make $a$ with last coin $c$, you need the best way to make $a - c$, plus one coin.
- Take the smallest over all coins.

```python
def min_coins(coins, amount):
    INF = float("inf")
    best = [0] + [INF] * amount          # best[a]: fewest coins for amount a
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                best[a] = min(best[a], best[a - c] + 1)
    return best[amount]
```

For coins 1, 3, 4: `best` is 0, 1, 2, 1, 1, 2, 2 for amounts 0 to 6, so `best[6] = 2` (from `best[3] + 1`). The cost is states times work per state: $\text{amount} \times \text{number of coins}$.

## Designing the state {lvl=2 id=s-state label="SDE-1"}

Four questions turn a problem into a dynamic programme:

1. **State**: what is the smallest description of a sub-problem? (Coin change: the amount left.)
2. **Transition**: how is a state's answer built from smaller states? (Try each last coin.)
3. **Base case**: which states have an obvious answer? (Amount 0 needs 0 coins.)
4. **Order and answer**: which states must come first, and which cell holds the final answer?

Example: the **0/1 knapsack**. A bag holds at most $W$ kg and each item can be taken once or not at all. The state is "best value using the items so far with $c$ kg of room". For each item, either skip it, or take it and look up the value with its weight removed from the room. Looping $c$ **downwards** ensures each item is used only once.

```python
def knapsack(items, cap):                # items: list of (weight, value)
    best = [0] * (cap + 1)               # best[c]: best value with room c
    for w, v in items:
        for c in range(cap, w - 1, -1):  # downwards: each item used once
            best[c] = max(best[c], best[c - w] + v)
    return best[cap]
```

With items (10 kg, 60), (20 kg, 100), (30 kg, 120) and capacity 50, this returns 220, the answer that greedy missed.

:::qc lvl=2
q: In the knapsack code, what would go wrong if the inner loop ran upwards (c from w to cap)?
options: ["An item could be used more than once", "The code would crash", "Nothing, the answer is the same"]
answer: 0
right: Right. Going upwards, best[c - w] may already include the current item, so the item can be counted again and again. That solves the version where items can be repeated (unbounded knapsack).
wrong: Going upwards, best[c - w] has already been updated in this same round. What does that mean for the current item?
:::

## Edit distance and common subsequences {lvl=3 id=s-edit label="SDE-2"}

Back to **recieve** versus **receive**. Define $d[i][j]$ as the fewest edits to turn the first $i$ letters of one word into the first $j$ letters of the other. Look at the last letters:

- delete the last letter of the first prefix: $d[i-1][j] + 1$;
- insert the last letter of the second prefix: $d[i][j-1] + 1$;
- keep or replace: $d[i-1][j-1] + c$, where $c$ is 0 if the letters are equal and 1 if not.

$$d[i][j] = \min\bigl(d[i-1][j]+1,\; d[i][j-1]+1,\; d[i-1][j-1]+c\bigr)$$

Read it as: the cheapest of the three last moves, each added to the already-known answer for a smaller pair of beginnings. A small example, turning **plan** into **lane**:

| | "" | l | a | n | e |
|---|---|---|---|---|---|
| "" | 0 | 1 | 2 | 3 | 4 |
| p | 1 | 1 | 2 | 3 | 4 |
| l | 2 | 1 | 2 | 3 | 4 |
| a | 3 | 2 | 1 | 2 | 3 |
| n | 4 | 3 | 2 | 1 | 2 |

The bottom-right cell says 2: delete **p** and insert **e**. Every cell took constant work, so the cost is $O(m\cdot n)$ for words of lengths $m$ and $n$.

```python
def edit_distance(a, b):
    d = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(len(a) + 1): d[i][0] = i
    for j in range(len(b) + 1): d[0][j] = j
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            c = 0 if a[i - 1] == b[j - 1] else 1
            d[i][j] = min(d[i-1][j] + 1, d[i][j-1] + 1,
                          d[i-1][j-1] + c)
    return d[len(a)][len(b)]
```

The **longest common subsequence** (the idea behind file `diff`) uses the same grid. If the last letters match, add 1 to the diagonal cell; otherwise take the larger of the cell above and the cell to the left.

```python
def lcs(a, b):
    d = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i - 1] == b[j - 1]:
                d[i][j] = d[i - 1][j - 1] + 1
            else:
                d[i][j] = max(d[i - 1][j], d[i][j - 1])
    return d[-1][-1]
```

To recover the actual edits (not just the count), walk back from the bottom-right cell, each time stepping to the neighbour that produced the value. Each row depends only on the one above, so for the count alone two rows of memory suffice.

## Recognising a dynamic programme {lvl=3 id=s-spot label="SDE-2"}

The signal in the statement is a **choice at every step** plus a request for the **best, the count, or whether it is possible**. The catalogue of shapes:

| Shape | State | Example |
|---|---|---|
| Line | position $i$ | stairs with 1 or 2 steps; robbing houses on a street with no two adjacent |
| Grid | row and column | number of paths from corner to corner; cheapest route through a cost grid |
| Two sequences | prefix of each | edit distance, longest common subsequence |
| Budget | item index and money or room left | knapsack, subset sum, coin change |
| Interval | left and right ends | best order to multiply a chain of matrices |
| Subset | which items are used (a bitmask) | travelling salesman for about 20 places |

Counting example: with 1-step or 2-step moves, the number of ways to climb $n$ stairs is the Fibonacci pattern again, because the last move was either a 1 or a 2.

:::qc lvl=3
q: A DP has a table with 1,000 rows and 2,000 columns, and each cell takes constant work. About how many steps?
options: ["2 million", "3,000", "2 billion"]
answer: 0
right: Right. States times work per state: 1,000 × 2,000 = 2,000,000 cells at constant work each.
wrong: Multiply the number of states by the work per state: the table has rows times columns cells.
:::

## Dynamic programming in the real world {lvl=4 id=s-world label="SDE-3"}

**Pseudo-polynomial.** The knapsack programme takes $O(n \cdot W)$. That looks small, yet knapsack is a famous hard problem. The catch: $W$ is a number, and writing it down needs only about $\log_2 W$ bits. A capacity of $2^{40}$ takes 40 bits to state but needs a table of a trillion cells. The cost is polynomial in the *value* of $W$ but exponential in its *length*. This is what **pseudo-polynomial** means, and it shows up whenever a DP indexes by a number. [Unverified: standard terminology, stated from memory]

**Memory is the usual wall.** Edit distance on two genomes of 3 billion letters has about $10^{19}$ cells, impossible to store or fill. Real aligners restrict the grid to a narrow band around the diagonal, or use clever divide and conquer to save memory (Hirschberg's method) [Unverified], or compute in chunks. Before writing any DP at scale, estimate states × bytes.

**State explosion.** Adding one more thing to remember multiplies the table size. The subset DP for travelling salesman has $2^k \cdot k$ states for $k$ places, fine for 20, impossible for 60. When the state becomes too large, you switch from exact answers to heuristics or approximations, or restructure the state.

**DP versus greedy versus search.** If you can prove a greedy rule, use it: it is much cheaper. If sub-problems overlap and the state is small, use DP. If the state is huge, you are into search with pruning or approximation. In design discussions, name the state and its size first; that sentence tells everyone whether the idea is feasible.

**In production**, caching answers to repeated requests (a memo table across requests, with expiry) is the same principle in a distributed setting. The difference is that cached answers can go stale, so the cache needs an invalidation policy. [Inference: general engineering practice]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Naive recursion can repeat the same sub-problem millions of times; remembering answers removes the repeats. {lvl=1}
2. Memoisation is top-down with a cache; tabulation is bottom-up with a table. {lvl=2}
3. Design in four steps: state, transition, base case, order and answer. {lvl=2}
4. Coin change and 0/1 knapsack are the standard budget-shaped DPs; greedy fails where DP succeeds. {lvl=2}
5. Edit distance and longest common subsequence fill a grid, one cell per pair of beginnings. {lvl=3}
6. Cost is the number of states times the work per state. {lvl=3}
7. Pseudo-polynomial time is polynomial in the number's value, not in its length in bits. {lvl=4}
8. Memory and state size, not cleverness, usually decide whether a DP is feasible. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Write the plain recursion first, find the repeated calls, then add the memory. Do not start from the table. {lvl=1}
- Off-by-one in the table: use size length + 1 so the empty prefix has a row and a column. {lvl=2}
- Loop direction matters. Downwards for each-item-once, upwards if items may repeat. {lvl=2}
- Choose a state that is complete: every fact needed later must be in it, or the answers are wrong. {lvl=3}
- Python recursion has a depth limit (about 1,000 by default); for deep memoisation switch to a table. {lvl=2}
- A DP that is too slow usually has too many states; look for something you can drop from the state. {lvl=3}
:::
