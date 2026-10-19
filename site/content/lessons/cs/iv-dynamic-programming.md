---
title: Dynamic programming patterns
summary: How to count the ways up a 40-step staircase in an instant, and the half-dozen shapes that cover most dynamic programming questions.
ncert: []
up_to: SDE-2
builds_on: [Dynamic programming, Recursion, Backtracking, Arrays]
notes_prompt: Explain to a friend, using the staircase, how knowing the answer for two smaller staircases gives the answer for a bigger one, and what a state is.
margin:
  - kind: history
    title: History
    text: 'Dynamic programming was named by Richard Bellman in the 1950s. The "programming" means planning, as in a schedule, not writing code. [Unverified: from memory]'
  - kind: tip
    title: Interview signal
    text: 'Phrases like "how many ways", "minimum cost", "longest", "can it be done", with a sequence, a grid, two strings or a target amount, point to dynamic programming. If brute force would repeat the same sub-case, remember it.'
  - kind: olympiad
    title: The state is the whole problem
    text: 'Almost all the difficulty is choosing the state: what information about the past is enough to decide the future? Once the state is right, the transition and the code are routine.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Dynamic programming chapter (rod cutting, longest common subsequence) [Unverified: chapter number]" }
  - { title: "J. Kleinberg and E. Tardos, Algorithm Design", ref: "Dynamic programming chapters: weighted scheduling, knapsack, sequence alignment [Unverified]" }
cards:
  - { front: "What are the five things to say aloud when solving a dynamic programming question?", back: "State (what f(i) means), base cases, transition (how f(i) comes from smaller states), order of filling, and the answer with its cost." }
  - { front: "Recurrence for the number of ways to climb n steps, taking 1 or 2 at a time?", back: "f(n) = f(n-1) + f(n-2), with f(0) = 1 and f(1) = 1. The last move was either 1 step from n-1 or 2 steps from n-2." }
  - { front: "Coin change: why does a greedy choice of the largest coin fail?", back: "With coins 1, 3, 4 and amount 6, greedy gives 4+1+1 (three coins) but 3+3 uses two. Check every coin at each amount instead." }
  - { front: "In 0/1 knapsack with a single array, why loop the capacity backwards?", back: "Going backwards means best[w - weight] still belongs to the previous item, so each item is used at most once. Going forwards would let an item be reused." }
  - { front: "State of longest common subsequence and edit distance?", back: "dp[i][j] for the first i characters of one string and the first j of the other. Match: diagonal. Otherwise combine the neighbours above and to the left." }
  - { front: "How do you turn a memoised recursion into a table?", back: "Same state and transition, but fill the states from the smallest to the largest in an order where every dependency is already done." }
core:
  idea: 'Dynamic programming solves a big question by solving smaller versions of it once and reusing them. Name the state (what the sub-question is), write how a state follows from smaller ones, fill in the base cases, and compute in an order where every needed answer already exists.'
  formulas:
    - tex: 'f(n) = f(n-1) + f(n-2)'
      label: 'Staircase and the linear family: a state from the last one or two'
    - tex: '\text{time} = (\text{number of states}) \times (\text{work per state})'
      label: 'How to quote the cost of any dynamic programming solution'
  conditions:
    - 'The same smaller sub-questions appear again and again (overlapping sub-problems)'
    - 'The best or total answer for a state depends only on smaller states (optimal substructure), not on how you reached it'
    - 'The number of distinct states is small enough to store, for example a few million'
  sign: 'The commonest mistake is a state that forgets something the future needs (for example, whether the previous house was robbed). Add that information to the state.'
outcomes:
  - 'Say state, base case, transition, order and cost aloud for any dynamic programming question'
  - 'Solve linear, coin-change, subsequence, two-string, grid, knapsack and word-break questions'
  - 'Convert between top-down memoisation and a bottom-up table, and shrink the memory'
  - 'Tell counting ways from taking the best, and order loops correctly for combinations'
  - 'Recognise at least a dozen classic questions as one of these shapes'
opener:
  story: |
    A hill temple has 40 steps. You are tired, so each time you may climb either one step or two. A friend asks, "In how many different ways can you reach the top?" Climbing 1,1,2 and 2,1,1 count as different ways.

    You start listing them and soon lose track. For 3 steps there are 3 ways. For 4 steps there are 5. For 5 steps there are 8. Do you see what is happening? Each answer is the sum of the two before it.

    That small observation is the whole subject. The answer for 40 steps is built from the answers for 39 and 38, which are built from smaller ones, down to the first steps. A computer that writes each small answer down once can finish in 40 additions instead of trying hundreds of millions of routes.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A staircase with the number of ways to reach each step written on it"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="20" y="170" width="40" height="30"/><rect x="60" y="150" width="40" height="50"/><rect x="100" y="130" width="40" height="70"/><rect x="140" y="110" width="40" height="90"/><rect x="180" y="90" width="40" height="110"/><rect x="220" y="70" width="40" height="130"/><rect x="260" y="50" width="40" height="150"/></g><g style="font-size:14px;fill:var(--ink);text-anchor:middle"><text x="40" y="190">1</text><text x="80" y="170">1</text><text x="120" y="150">2</text><text x="160" y="130">3</text><text x="200" y="110">5</text><text x="240" y="90">8</text><text x="280" y="70">13</text></g><path d="M200 84C212 62 228 62 240 80" style="fill:none;stroke:var(--c);stroke-width:1.5"/><path d="M160 104C190 50 250 50 280 64" style="fill:none;stroke:var(--c);stroke-width:1.5;stroke-dasharray:4 3"/><text x="20" y="224" style="font-size:11px;fill:var(--muted)">each step = the two before it added</text></svg>'
life:
  - 'A spell-checker or a search box that suggests the nearest word works by measuring edit distance with a table of smaller comparisons.'
  - 'A shopkeeper giving change with the fewest notes and coins, or a cashier machine, uses the same table as coin change.'
  - 'Version-control tools such as a file comparison (diff) find the longest common part of two files and show only the changes.'
  - 'Route planners and delivery apps break a long trip into small legs whose best costs are combined and reused.'
  - 'Packing a bag or a budget under a limit (weight, rupees, hours) so as to carry the most value is knapsack.'
models:
  - name: 'Do not redo what you have done'
    text: 'Write down results you will need again. A student who keeps a formula sheet, a cook who prepares the stock once for many dishes: saving the small answer turns repeated effort into a lookup.'
  - name: 'Define the state before the move'
    text: 'Before deciding what to do, say exactly what you know about where you are. Many bad decisions in life, like in code, come from forgetting a fact that mattered (what you already spent, what you already promised).'
  - name: 'Big goals from small, finished steps'
    text: 'Any large project is a chain where each stage depends on earlier finished stages. Plan the order so that every stage has what it needs before it starts.'
links:
  - leaf: 'cs/dynamic-programming'
    name: 'Dynamic programming'
    same: 'This lesson applies the same idea of states and remembered answers; the earlier lesson teaches why it works.'
    differs: 'The earlier lesson builds the idea from first principles; this one is a catalogue of the shapes that interview questions take.'
  - leaf: 'cs/iv-backtracking'
    name: 'Backtracking'
    same: 'Both explore choices step by step; a memoised backtracking search is a top-down dynamic programming solution.'
    differs: 'Backtracking lists every answer and never stores sub-results; dynamic programming stores them and answers count or best-value questions.'
  - leaf: 'mat/induction'
    name: 'Mathematical induction'
    same: 'Each value is justified from smaller values already known, with a base case to start.'
    differs: 'Induction proves a statement; dynamic programming computes a value along the same chain.'
next:
  q: 'Could you build a cache that evicts the item unused for the longest time, with every lookup and every update done in one step regardless of size? Which two structures must you glue together?'
  leaf: 'cs/iv-design-data-structure'
  name: 'Design a data structure (LRU cache and friends)'
symbols:
  - s: 'f(i)'
    means: 'the answer to the sub-question of size i (a count or a best value)'
  - s: 'n'
    means: 'size of the input, such as number of steps or length of a list (count)'
  - s: 'dp[i][j]'
    means: 'table entry for the first i items of one input and the first j of another'
  - s: 'O(\cdot)'
    means: 'how the work grows with the input; the number of states times the work per state'
---

:::hook
q: Climb 40 steps taking one or two at a time. About how many different ways are there to reach the top?
options: ["About 80", "About 1,600", "About 165 million"]
answer: 2
right: Right. The answers grow like 1, 1, 2, 3, 5, 8, 13, and so on (each is the sum of the previous two), and by 40 steps the count is 165,580,141. A table finds it in 40 additions, even though listing the routes one by one would take far too long.
wrong: Each extra step roughly multiplies the number of ways by about 1.6, so growth is exponential, not linear. Try 5 steps (8 ways) and 6 steps (13 ways) and keep going.
:::

## Remember the small answers {lvl=1 id=s-remember label="Foundations"}

Let $f(i)$ stand for the number of ways to climb $i$ steps. How could you have arrived at step $i$? Either you were on step $i-1$ and took one step, or on step $i-2$ and took two. Those two cases cover everything and never overlap, so

$$f(i) = f(i-1) + f(i-2)$$

in words: "ways to reach step $i$ equals ways to reach the step just below plus ways to reach the step two below". Add base cases: there is one way to be at the bottom ($f(0) = 1$, doing nothing) and one way to reach step 1 ($f(1) = 1$).

:::figure caption="The staircase table. Each box is one remembered answer; step 5 is the sum of the boxes for steps 4 and 3."
<svg viewBox="0 0 440 130" role="img" aria-label="Boxes for steps 0 to 6 with values 1, 1, 2, 3, 5, 8, 13 and arrows into step 5"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="10" y="60" width="52" height="36" rx="6"/><rect x="72" y="60" width="52" height="36" rx="6"/><rect x="134" y="60" width="52" height="36" rx="6"/><rect x="196" y="60" width="52" height="36" rx="6"/><rect x="258" y="60" width="52" height="36" rx="6"/><rect x="320" y="60" width="52" height="36" rx="6"/><rect x="382" y="60" width="52" height="36" rx="6"/></g><rect x="320" y="60" width="52" height="36" rx="6" style="fill:var(--c);fill-opacity:0.25;stroke:var(--c);stroke-width:2"/><g style="font-size:15px;fill:var(--ink);text-anchor:middle"><text x="36" y="84">1</text><text x="98" y="84">1</text><text x="160" y="84">2</text><text x="222" y="84">3</text><text x="284" y="84">5</text><text x="346" y="84">8</text><text x="408" y="84">13</text></g><g style="font-size:11px;fill:var(--muted);text-anchor:middle"><text x="36" y="112">f(0)</text><text x="98" y="112">f(1)</text><text x="160" y="112">f(2)</text><text x="222" y="112">f(3)</text><text x="284" y="112">f(4)</text><text x="346" y="112">f(5)</text><text x="408" y="112">f(6)</text></g><path d="M284 56C290 28 330 28 340 54M222 56C240 10 330 10 352 54" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="20" y="30" style="font-size:11px;fill:var(--muted)">f(5) = f(4) + f(3)</text></svg>
:::

Without remembering, the plain recursion recomputes $f(3)$ many times and its cost grows like $1.6^n$. With remembering, each of the $n$ answers is computed once.

```python
from functools import lru_cache
def ways(n):
    @lru_cache(None)
    def f(i):
        if i <= 1: return 1            # base: one way to be at step 0 or 1
        return f(i - 1) + f(i - 2)     # last move was 1 step or 2 steps
    return f(n)
```

:::qc lvl=1
q: How many ways are there to climb 6 steps, one or two at a time?
options: ["8", "13", "21"]
answer: 1
right: Right. f(4) = 5 and f(5) = 8, so f(6) = 5 + 8 = 13.
wrong: Continue the table: 1, 1, 2, 3, 5, 8, and then the sum of the last two.
:::

## Say it aloud: the five-step script {lvl=2 id=s-script label="SDE-1"}

Interviewers watch how you think as well as what you write. Use the same five lines every time.

1. **State.** "Let $f(i)$ be ..." (the answer for the first $i$ items, or for amount $i$, or for the cell at row $i$, column $j$). This is the most important line.
2. **Base cases.** "The smallest cases are ..." (empty input, amount 0, first cell).
3. **Transition.** "To get $f(i)$, look at the last decision. It was either A, giving ..., or B, giving ..." Combine with a sum (counting ways) or with `min`/`max` (best value).
4. **Order.** "Each state needs only smaller ones, so I fill from small to large" (or: "I will recurse and cache").
5. **Answer and cost.** "The answer is $f(n)$. There are this many states, each costing this much, so the time is their product, and the memory is ... which I can shrink because only the last few rows are used."

Then run your recurrence on a tiny example by hand. It catches almost every off-by-one.

Top-down (recursion with a cache) and bottom-up (a loop over a table) are two ways of writing the same states and transitions. Top-down is quicker to write and computes only the states it needs; bottom-up avoids recursion limits and makes it easy to keep only the last few rows.

:::qc lvl=2
q: Which of the five lines do most people skip, even though it is the one that decides whether the solution is right?
options: ["State: saying exactly what f(i) means", "Cost", "Base cases"]
answer: 0
right: Right. If you can say in one plain sentence what f(i) means, the base cases and transition usually follow. A vague state leads to a wrong or missing transition.
wrong: Base cases and cost matter, but they follow from the meaning of the state. Which line makes the others possible?
:::

## Linear: one or two steps back {lvl=2 id=s-linear label="SDE-1"}

Here each state depends on the last one or two. Climbing is the pure form; only two variables are needed.

```python
def ways(n):
    a, b = 1, 1                  # ways for 0 steps and 1 step
    for _ in range(n - 1):
        a, b = b, a + b
    return b
```

**House robber** (take the most money from a row of houses, never two neighbours). Say the state: "best money from the houses seen so far, split by whether I took the last house". The transition: taking a house requires that the previous was skipped; skipping lets the previous be either.

```python
def rob(nums):
    take, skip = 0, 0            # best so far, last house taken / not taken
    for x in nums:
        take, skip = skip + x, max(take, skip)
    return max(take, skip)
```

For `[2, 7, 9, 3, 1]` this gives 12 (houses 2, 9 and 1). Notice how the state needed two numbers; a single "best so far" would not know whether the last house was taken.

## Coin change: each amount from smaller amounts {lvl=2 id=s-coins label="SDE-1"}

Let `best[a]` be the fewest coins for amount $a$. The last coin must be one of the coins, say $c$, leaving amount $a - c$. So try every coin and keep the smallest.

```python
def min_coins(coins, amount):
    INF = float('inf')
    best = [0] + [INF] * amount          # best[a]: fewest coins for amount a
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a and best[a - c] + 1 < best[a]:
                best[a] = best[a - c] + 1
    return best[amount] if best[amount] < INF else -1
```

Why not just take the biggest coin each time? With coins 1, 3, 4 and amount 6, greedy picks 4+1+1 (3 coins) but 3+3 needs 2. Dynamic programming checks all coins at every amount.

To **count ways** instead, loop over the coins on the outside. Each coin is then "decided" once, so 1+2 and 2+1 are the same combination and are counted once.

```python
def count_ways(coins, amount):
    ways = [1] + [0] * amount            # one way to make 0: take nothing
    for c in coins:                      # coin outer: combinations
        for a in range(c, amount + 1):
            ways[a] += ways[a - c]
    return ways[amount]
```

Swap the two loops (amount outer, coin inner) and the same code counts **orderings** of coins instead. For coins 1, 2, 5 and amount 5, the first version gives 4 and the swapped gives 9.

:::qc lvl=2
q: Coins are 1, 2 and 5. How many different combinations make 5 (order does not matter)?
options: ["3", "4", "9"]
answer: 1
right: Right: 5; 2+2+1; 2+1+1+1; 1+1+1+1+1. If order mattered, there would be 9.
wrong: List by the number of 5-coins used and then by 2-coins. Combinations treat 2+1 and 1+2 as one.
:::

## Longest increasing run {lvl=3 id=s-lis label="SDE-2"}

Pick numbers from a list, keeping their order, so that they rise strictly, and make the run as long as possible. State: `best[i]` is the longest rising run that **ends at** position $i$. The transition looks back at every earlier smaller value.

```python
def lis_n2(nums):
    best = [1] * len(nums)               # each number alone is a run of 1
    for i in range(len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                best[i] = max(best[i], best[j] + 1)
    return max(best, default=0)
```

Time is $O(n^2)$ (about $n^2/2$ pairs). A faster way keeps `tails[k]`, the smallest possible last value of any rising run of length $k+1$. This list stays sorted, so for each new number binary search finds the first tail that is not smaller, and replaces it (or appends if none). The list length is the answer.

```python
from bisect import bisect_left
def lis(nums):
    tails = []
    for x in nums:
        i = bisect_left(tails, x)        # first tail >= x
        if i == len(tails): tails.append(x)
        else: tails[i] = x
    return len(tails)
```

Time $O(n \log n)$. Caution: `tails` is not itself the run, only its length is meaningful.

## Two strings: subsequence and edit distance {lvl=3 id=s-strings label="SDE-2"}

For two strings, the state is a pair: `dp[i][j]` concerns the first $i$ characters of `a` and the first $j$ of `b`.

**Longest common subsequence** (letters in order, gaps allowed). If the last characters match, they extend the best answer for both shorter strings; if not, drop the last character of one string or the other.

```python
def lcs(a, b):
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i-1] == b[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]
```

**Edit distance** (fewest single-letter inserts, deletes and replacements to turn `a` into `b`). The last step is a match or replace (diagonal), a delete (up) or an insert (left). The first row and column are the cost of building from or down to nothing.

```python
def edit(a, b):
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i          # delete all i letters
    for j in range(n + 1): dp[0][j] = j          # insert all j letters
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            diag = dp[i-1][j-1] + (a[i-1] != b[j-1])
            dp[i][j] = min(diag, dp[i-1][j] + 1, dp[i][j-1] + 1)
    return dp[m][n]
```

Both cost $O(mn)$ time. Each row needs only the row above, so memory can shrink to $O(\min(m, n))$ if you only need the number and not the actual subsequence or edit steps.

:::qc lvl=3
q: Edit distance from "flaw" to "lawn" is 2. Which two operations?
options: ["Replace f with l, and then replace w with n", "Delete f, and insert n at the end", "Insert l, and delete w"]
answer: 1
right: Right. Delete f gives "law"; add n at the end gives "lawn". Two steps.
wrong: Try deleting the first letter of flaw. What is left, and how does it differ from lawn?
:::

## Grid paths {lvl=3 id=s-grid label="SDE-2"}

On a grid where you may only move right or down, the number of ways to reach a cell is the ways to reach the cell above plus the cell to the left. A blocked cell has zero ways.

```python
def grid_paths(grid):                         # 1 marks a blocked cell
    R, C = len(grid), len(grid[0])
    dp = [[0] * C for _ in range(R)]
    for r in range(R):
        for c in range(C):
            if grid[r][c] == 1: continue
            if r == 0 and c == 0: dp[r][c] = 1
            else:
                dp[r][c] = (dp[r-1][c] if r else 0) + (dp[r][c-1] if c else 0)
    return dp[R-1][C-1]
```

Replace the sum by `min` and add a cost per cell and you get the cheapest path; replace it by `max` and you get the richest. The shape of the table is the same.

## Knapsack and subset sum {lvl=3 id=s-knapsack label="SDE-2"}

Items have a weight and a value, and a bag has a capacity. State: `best[w]` is the top value achievable within total weight $w$. For each item, either leave it (no change) or take it (value plus `best[w - weight]`). Loop the capacity **backwards** so `best[w - weight]` still describes the situation before this item; going forwards would let one item be used many times (the unlimited version, like coin change).

```python
def knapsack(weights, values, cap):
    best = [0] * (cap + 1)
    for wt, val in zip(weights, values):
        for w in range(cap, wt - 1, -1):       # backwards: each item once
            best[w] = max(best[w], best[w - wt] + val)
    return best[cap]
```

Time $O(n \cdot \text{cap})$, memory $O(\text{cap})$. This is "pseudo-polynomial": it depends on the size of the capacity number, not just on how many items there are.

**Partition into two equal halves** is knapsack with yes/no states: can a subset reach exactly half the total? Python's integers make a compact version: bit $s$ of `bits` is set when sum $s$ is reachable.

```python
def can_split(nums):
    total = sum(nums)
    if total % 2: return False
    bits = 1                                   # sum 0 is reachable
    for x in nums:
        bits |= bits << x                      # add x to every reachable sum
    return bool(bits >> (total // 2) & 1)
```

## Word break {lvl=3 id=s-wordbreak label="SDE-2"}

Can a string be cut into words from a dictionary? State: `ok[i]` is true if the first $i$ letters can be split. It is true when some earlier cut $j$ has `ok[j]` true and the piece from $j$ to $i$ is a word.

```python
def word_break(s, words):
    words = set(words)
    ok = [True] + [False] * len(s)             # ok[i]: first i letters split
    for i in range(1, len(s) + 1):
        for j in range(i):
            if ok[j] and s[j:i] in words:
                ok[i] = True
                break
    return ok[len(s)]
```

Time is about $O(n^2)$ pieces times the cost of slicing and hashing a piece (up to $n$), so $O(n^3)$ in the worst case; limiting $j$ to the longest word length reduces it.

## The shapes {lvl=3 id=s-variants label="SDE-2"}

| Family | Signal in the statement | State | Transition |
|---|---|---|---|
| Linear | "ways to reach step n", "no two adjacent" | $f(i)$ over a sequence | from $i-1$, $i-2$ (plus a flag if needed) |
| Coin / unbounded | "fewest coins", "ways to make an amount" | $f(a)$ for amount $a$ | try each item; loops decide combinations or orderings |
| Subsequence | "longest increasing", "longest chain" | $f(i)$ ending at $i$ | look back at every earlier $j$ that fits |
| Two strings | "shared", "convert one into the other" | $dp[i][j]$ prefixes | match: diagonal; else neighbours |
| Grid | "paths", "cheapest route" in a grid | $dp[r][c]$ | from above and from the left |
| 0/1 knapsack | "pick items under a limit" | $best[w]$ | take or leave; capacity backwards |
| Subset sum / partition | "can some subset make X" | reachable sums | add the item to every reachable sum |
| Segmentation | "split a string or array into parts" | $ok[i]$ or $f(i)$ for the first $i$ | try each last cut $j$ |

## Classic problem types {lvl=3 id=s-catalogue label="SDE-2"}

Described in our own words; match the family.

| Problem type | Family |
|---|---|
| Count ways to climb stairs with steps of size 1 and 2 (or other sizes) | Linear |
| Largest total from a row of houses when neighbours cannot both be taken | Linear (two flags) |
| Fewest coins for an amount | Coin |
| Number of coin combinations for an amount | Coin, coin loop outside |
| Longest strictly rising selection from a list | Subsequence |
| Longest chain of envelopes or boxes nested inside each other | Subsequence after sorting |
| Longest shared selection of letters of two strings | Two strings (LCS) |
| Fewest edits between two words | Two strings (edit distance) |
| Number of paths across a grid, with some cells blocked | Grid |
| Cheapest path from top to bottom of a triangle of numbers | Grid, min |
| Maximum value that fits in a bag | Knapsack |
| Can a list be split into two groups of equal sum | Subset sum |
| Smallest possible difference between two groups' sums | Subset sum, then nearest to half |
| Can a string be cut into dictionary words | Segmentation |
| Fewest cuts so that every piece of a string is a palindrome | Segmentation |
| Maximum sum of a contiguous stretch of a list | Linear, "best ending here" |

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

1. **Weak state.** Not recording something the future needs; fix by adding it to the state (a flag, a remaining budget).
2. **Wrong base case.** Remember empty input and amount 0; for edit distance, the first row and column.
3. **Loop order in coin problems.** Coins outer for combinations, amount outer for orderings.
4. **Knapsack direction.** Forwards reuses items; backwards uses each once.
5. **Infinity arithmetic.** Adding 1 to "unreachable" and treating it as a real value; test for it, or keep it as `float('inf')`.
6. **Off-by-one between index and length.** In two-string tables, `dp[i][j]` uses `a[i-1]` and `b[j-1]`.
7. **Sharing rows.** `[[0] * n] * m` makes all rows the same list; use a comprehension.
8. **Recursion limit.** Top-down on large $n$ in Python may overflow; use the table form.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Dynamic programming stores answers to small sub-questions so each is solved once; the staircase count is the sum of the two before it. {lvl=1}
2. Say it aloud in five lines: state, base cases, transition, order, answer and cost. {lvl=2}
3. Cost equals the number of states times the work per state. {lvl=2}
4. Linear and coin families depend on the last one or two states or on every coin; loop order decides combinations versus orderings. {lvl=2}
5. Subsequence: best ending at $i$, looking back ($O(n^2)$), or tails with binary search ($O(n \log n)$). {lvl=3}
6. Two strings use a table of prefixes; grids use the cell above and to the left; knapsack loops capacity backwards. {lvl=3}
7. Subset sum and segmentation are yes/no versions of the same tables. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never start coding before you can say what the state means in one plain sentence. {lvl=2}
- Run the recurrence on a tiny example by hand; check the base cases and the first row and column. {lvl=2}
- Greedy often looks right and fails (coin change with 1, 3, 4); use the table when in doubt. {lvl=2}
- State the complexity as states times work per state, and mention how you can shrink the memory. {lvl=3}
- If the question asks for the actual answer (the subsequence, the path, the cuts) and not just its length, store a parent pointer or walk the table backwards. {lvl=3}
:::
