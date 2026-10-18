---
title: Backtracking
summary: How a computer solves a sudoku the way you do in pencil, trying a number, getting stuck, erasing, and trying again, without repeating itself.
ncert: []
up_to: SDE-2
builds_on: [Recursion, Trees and recursion, Big-O and growth of cost]
notes_prompt: Explain to a friend how solving a sudoku in pencil is the same as a program that tries, explores and erases, and why stopping early on a bad guess saves so much work.
margin:
  - kind: history
    title: History
    text: 'The word "backtrack" was used by the mathematician D. H. Lehmer in the 1950s, and Robert Floyd and others later wrote the method up as a general recipe for puzzles. [Unverified: from memory]'
  - kind: tip
    title: Interview signal
    text: 'When a question says "return all ways", "list every arrangement" or "is it possible to place", and the input is small (n up to about 10 to 20), the answer is almost always backtracking.'
  - kind: olympiad
    title: Count, don''t list
    text: 'If a question only asks how many solutions there are, or the best one, check for overlapping sub-cases. If the same half-finished state keeps recurring, remember it and you have dynamic programming instead.'
books:
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Backtracking chapter [Unverified: chapter number]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Recursion and exhaustive search appear throughout; the n-queens puzzle is a standard exercise [Unverified]" }
cards:
  - { front: "What are the three steps inside every backtracking loop?", back: "Choose (add one option to the partial answer), explore (recurse on what is left), unchoose (remove the option so the next one starts clean)." }
  - { front: "What is pruning?", back: "Abandoning a partial answer the moment it cannot possibly lead to a valid full answer, so the whole branch below it is never visited." }
  - { front: "How many subsets does a list of n distinct items have, and how many orderings?", back: "Subsets: 2 to the power n (each item is in or out). Orderings (permutations): n factorial." }
  - { front: "Why must you copy the path when saving an answer?", back: "The same list is edited again and again. Saving the list itself saves a reference, and every saved answer ends up empty or identical. Save a copy, for example path[:]." }
  - { front: "How do you avoid duplicate answers when the input has repeated values?", back: "Sort first. At each level, skip a value that equals the one just before it at that same level." }
  - { front: "Does pruning change the worst-case cost?", back: "No. A hard input can still force the whole tree. Pruning shrinks the typical cost, often by orders of magnitude." }
core:
  idea: 'Backtracking builds an answer one choice at a time. After each choice it explores further; if the partial answer cannot work it stops at once, and it always undoes the choice before trying the next. It visits a tree of partial answers, and pruning cuts whole branches off.'
  formulas:
    - tex: 'N \approx b^{\,d}'
      label: 'Size of the search tree: b options per step, d steps deep'
    - tex: '2^{n} \text{ subsets}, \quad n! \text{ orderings}'
      label: 'Leaves of the two commonest trees'
  conditions:
    - 'The answer can be built piece by piece, and a half-built answer can be checked for validity'
    - 'The input is small enough for an exponential tree (n up to about 10 for orderings, about 20 to 25 for subsets)'
    - 'You need the actual answers, or a yes/no that has no simpler structure; if only a count or best value is needed, check for dynamic programming first'
  sign: 'The commonest bug is forgetting to undo a choice (or to save a copy of the path), so the next branch starts from a dirty state.'
outcomes:
  - 'Write the choose, explore, unchoose template from memory'
  - 'Generate subsets, combinations and permutations, with and without duplicates'
  - 'Add pruning so that a search does far less work than brute force'
  - 'Solve constraint puzzles such as n-queens, sudoku and word search with the template'
  - 'State the cost of a search tree and say when dynamic programming should replace it'
opener:
  story: |
    You are doing the newspaper sudoku in pencil on a train. You write a 4 in a box, then a 7 two rows down, and a few boxes later you notice that no digit fits one cell. Something earlier was wrong. So you rub out the last number and try the next one. If that fails too, you rub out one step further back.

    You never start the whole grid again, and you never test a number that already breaks a rule. That habit, **try, look ahead, erase when stuck**, is the whole idea of backtracking.

    A computer can do exactly this, millions of times a second. And the same habit lists every seating plan, every combination lock code, every valid placement of eight queens on a chessboard.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A small grid being filled in, with one number crossed out and rubbed out"><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><rect x="40" y="30" width="120" height="120"/></g><g style="stroke:var(--rule);stroke-width:1"><path d="M80 30V150M120 30V150M40 70H160M40 110H160"/></g><g style="font-size:20px;fill:var(--ink)"><text x="52" y="58">4</text><text x="92" y="58">1</text><text x="132" y="98">3</text><text x="52" y="138">2</text></g><text x="92" y="98" style="font-size:20px;fill:var(--bad)">4</text><path d="M86 74L114 106" style="stroke:var(--bad);stroke-width:2"/><text x="90" y="138" style="font-size:20px;fill:var(--c)">?</text><path d="M180 90C210 90 214 130 240 130" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="216" y="116" width="72" height="28" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"/><text x="228" y="135" style="font-size:12px;fill:var(--ink)">erase, retry</text><text x="40" y="180" style="font-size:11px;fill:var(--muted)">Try a number. If a later cell</text><text x="40" y="196" style="font-size:11px;fill:var(--muted)">has no legal digit, undo and</text><text x="40" y="212" style="font-size:11px;fill:var(--muted)">try the next one.</text></svg>'
life:
  - 'Solving a sudoku, a crossword or a jigsaw: place a piece, look ahead, and take it back when something no longer fits.'
  - 'A GPS or a maze-solving robot that reaches a dead end and returns to the last junction to take the other road.'
  - 'Timetable and exam-hall seating software that must satisfy many rules at once and fall back when a rule is broken.'
  - 'Regular-expression matchers and package installers that try one option, find a conflict and step back to try another.'
  - 'A chess engine considering a move, then the replies, then taking the move back to consider another.'
models:
  - name: 'Fail early'
    text: 'A rule you can check on half a plan is worth far more than one you can only check at the end. In life, test the cheap assumption first, such as checking that your passport is valid before planning the rest of the holiday.'
  - name: 'Leave no mess behind'
    text: 'Every experiment must be undone before the next one starts. A scientist cleans the glassware, a cook wipes the board; code that forgets to undo gives wrong answers that look random.'
  - name: 'Decisions form a tree'
    text: 'Any plan made of sequential choices (routes, careers, menus) is a tree of possibilities. Counting the branches tells you whether you can afford to try them all.'
links:
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'Backtracking is recursion where each call makes one choice and the call stack remembers where you were.'
    differs: 'Plain recursion usually follows one path to one answer; backtracking explores many paths and must undo each choice on the way back.'
  - leaf: 'cs/dynamic-programming'
    name: 'Dynamic programming'
    same: 'Both explore a tree of choices built from smaller cases.'
    differs: 'Dynamic programming remembers repeated sub-cases and only answers count or best-value questions; backtracking lists the actual answers and never remembers.'
  - leaf: 'mat/permutations-and-combinations'
    name: 'Permutations and combinations'
    same: 'The formulas n factorial and n choose k count exactly the leaves the template visits.'
    differs: 'The formula tells you how many; the template produces each one.'
next:
  q: 'You have a list of meetings with start and end times. Which ones clash, how many rooms do you need, and can sorting alone answer all of this without any trying and undoing?'
  leaf: 'cs/iv-intervals'
  name: 'Intervals'
symbols:
  - s: 'n'
    means: 'number of items in the input (count)'
  - s: 'k'
    means: 'how many items to pick, in combination problems (count)'
  - s: 'b'
    means: 'branching factor: how many options each step has (count)'
  - s: 'd'
    means: 'depth: how many steps in a complete answer (count)'
  - s: 'n!'
    means: 'n factorial: n times (n minus 1) times ... times 1, the number of orderings of n items'
  - s: 'O(\cdot)'
    means: 'how the work grows with the input size; the main term only'
---

:::hook
q: You must place 8 queens on a chessboard so that no two attack each other. There are about 4.4 billion ways to pick 8 squares out of 64. Roughly how many half-filled boards does a smart search look at before it has found all 92 solutions?
options: ["About 4 billion", "About 16 million", "About two thousand"]
answer: 2
right: Right. Placing one queen per row and abandoning a board the moment two queens clash, the search looks at only 2,057 partial boards in total (we count them by running the template, below). Stopping early is the entire trick.
wrong: Those are the sizes of the brute-force searches (4.4 billion square choices, or 16.7 million with one queen per row). A search that gives up on a bad board straight away skips almost all of them.
:::

## The pencil and the eraser {lvl=1 id=s-pencil label="Foundations"}

Think of a combination lock with three dials, 0 to 9 each. If you had forgotten the code, you could try 000, 001, 002 and so on. That is a **tree of choices**: pick the first digit (10 branches), then the second (10 more under each), then the third. A thousand leaves, and one of them opens the lock.

Now change the rules. Suppose the code is known to have no repeated digit. After you choose 4 for the first dial, there is no point trying 4 on the second. You cut that whole branch away before looking inside it. This is **pruning**, and it is what turns hopeless searches into quick ones.

The figure shows a tiny case. We may pick from the numbers 3, 5 and 4 (left branch means take, right means skip), and the total must not pass 7. The branch that takes 3 and then 5 is already at 8, so nothing below it is explored.

:::figure caption="A choice tree. Each level decides one number. Red nodes break the limit and are cut off, so their children are never visited."
<svg viewBox="0 0 480 215" role="img" aria-label="Decision tree for choosing from 3, 5 and 4 with a total limit of 7, one branch cut off"><g style="stroke:var(--muted);stroke-width:1.5;fill:none"><path d="M240 28L140 72M240 28L340 72M140 72L80 120M140 72L190 120M340 72L290 120M340 72L400 120M190 120L160 170M190 120L220 170M290 120L260 170M290 120L320 170M400 120L380 170M400 120L440 170"/></g><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><circle cx="240" cy="28" r="14"/><circle cx="140" cy="72" r="14"/><circle cx="340" cy="72" r="14"/><circle cx="190" cy="120" r="14"/><circle cx="290" cy="120" r="14"/><circle cx="400" cy="120" r="14"/><circle cx="160" cy="170" r="14"/><circle cx="220" cy="170" r="14"/><circle cx="320" cy="170" r="14"/><circle cx="380" cy="170" r="14"/><circle cx="440" cy="170" r="14"/></g><g style="fill:var(--surface);stroke:var(--bad);stroke-width:2"><circle cx="80" cy="120" r="14"/><circle cx="260" cy="170" r="14"/></g><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="240" y="32">0</text><text x="140" y="76">3</text><text x="340" y="76">0</text><text x="190" y="124">3</text><text x="290" y="124">5</text><text x="400" y="124">0</text><text x="160" y="174">7</text><text x="220" y="174">3</text><text x="320" y="174">5</text><text x="380" y="174">4</text><text x="440" y="174">0</text></g><g style="font-size:12px;fill:var(--bad);text-anchor:middle"><text x="80" y="124">8</text><text x="260" y="174">9</text></g><g style="font-size:10px;fill:var(--muted)"><text x="20" y="32">decide 3</text><text x="20" y="76">decide 5</text><text x="20" y="124">decide 4</text><text x="20" y="196">left = take, right = skip</text></g></svg>
:::

:::qc lvl=1
q: In the figure, the node showing 8 is cut off. How many nodes below it did we avoid visiting?
options: ["None, it has no children", "Two (take 4 or skip 4)", "Four"]
answer: 1
right: Right. Below the 8 sit two more choices (take 4, skip 4). Cutting here saves them; in a deeper tree the saving is exponential.
wrong: Every node that is not at the last level has two children, the choices for the next number. Count what hangs below the red 8.
:::

## The template {lvl=2 id=s-template label="SDE-1"}

Every backtracking solution is the same loop. We keep a **path**, the choices made so far. If the path is a complete answer, save a copy. Otherwise, for each option we may still take: **choose** it (add to the path), **explore** (recurse), then **unchoose** (remove it).

```python
def solve(path):
    if is_complete(path):
        answers.append(path[:])     # a copy, not the live list
        return
    for option in options(path):
        if not allowed(path, option):
            continue                # prune: skip a bad option
        path.append(option)         # choose
        solve(path)                 # explore
        path.pop()                  # unchoose
```

Read it as: "try each legal option; for each, go deeper, then take it back". The `pop` is what makes the next option start from the same state the loop began with.

Three questions fill in the blanks: what is one *choice*? when is the path *complete*? what makes an option *illegal*? Say these aloud first in an interview, and the code follows.

:::qc lvl=2
q: A student writes answers.append(path) instead of answers.append(path[:]). What do the saved answers look like at the end?
options: ["They are all correct", "They are all the same list, which ends up empty", "The program crashes"]
answer: 1
right: Right. Each saved entry points to the one live list. By the end every choice has been popped, so every entry shows the empty path.
wrong: Appending a list stores a reference, not a snapshot. What does that list contain after the last pop?
:::

## Subsets, orderings, selections {lvl=2 id=s-shapes label="SDE-1"}

Three shapes cover most problems. For **subsets** each item is decided as in or out, so there are $2^n$ leaves.

```python
def subsets(nums):
    out, path = [], []
    def go(i):
        if i == len(nums):
            out.append(path[:]); return
        go(i + 1)                # skip nums[i]
        path.append(nums[i])     # take it
        go(i + 1)
        path.pop()
    go(0)
    return out
```

For **orderings** (permutations) every position takes any item not yet used, so there are $n!$ leaves. A `used` flag array records what is taken.

```python
def permutations(nums):
    out, path, used = [], [], [False] * len(nums)
    def go():
        if len(path) == len(nums):
            out.append(path[:]); return
        for i, x in enumerate(nums):
            if used[i]: continue
            used[i] = True; path.append(x)
            go()
            path.pop(); used[i] = False
    go()
    return out
```

For **selections** (combinations: $k$ items from $n$, order does not matter) pass a `start` index so you only look forward. Picking 2 then 3 is the same as 3 then 2, and moving forward only counts it once.

```python
def combine(n, k):
    out, path = [], []
    def go(start):
        if len(path) == k:
            out.append(path[:]); return
        for x in range(start, n + 1):
            path.append(x); go(x + 1); path.pop()
    go(1)
    return out
```

| Variant | Signal in the statement | Change to the template |
|---|---|---|
| All subsets | "every possible group", "power set" | take-or-skip per item, or loop from `start` and record at every node |
| All orderings | "every arrangement", "all sequences" | loop over all items with a `used` array |
| k from n | "choose k", "groups of size k" | loop from `start`; stop when `len(path) == k` |
| Reuse allowed | "any number of times" | recurse with `go(i)` instead of `go(i + 1)` |
| Duplicates in input | "may contain repeats", "unique answers only" | sort; skip `nums[i] == nums[i-1]` at the same level |
| Target sum | "adds up to", "total of" | track the remaining amount; prune when it goes negative |
| Grid path | "find a word in a grid", "path through cells" | choose a neighbour; mark visited; unmark on return |
| Place under rules | "no two may attack", "fill so rules hold" | check legality before choosing; undo the placement |

:::qc lvl=2
q: How many leaves does the permutations tree have for 5 distinct items?
options: ["25", "32", "120"]
answer: 2
right: Right. 5 choices for the first spot, 4 for the next, and so on: 5 times 4 times 3 times 2 times 1 equals 120.
wrong: The first position has 5 options, the next 4, and so on down to 1. Multiply them.
:::

## Pruning and duplicates {lvl=3 id=s-pruning label="SDE-2"}

Pruning means adding a check that stops a branch early. Two kinds appear in nearly every problem.

**Bound pruning.** In a target-sum problem sort the numbers; once one number is bigger than what is left, every later number is too, so `break` the loop rather than `continue`.

```python
def combo_sum(nums, target):
    nums.sort()
    out, path = [], []
    def go(start, left):
        if left == 0:
            out.append(path[:]); return
        for i in range(start, len(nums)):
            if nums[i] > left: break         # all later ones are bigger too
            path.append(nums[i]); go(i, left - nums[i]); path.pop()
    go(0, target)
    return out
```

Here `go(i, ...)` lets the same number be used again. For `[2, 3, 6, 7]` and target 7 it returns `[[2, 2, 3], [7]]`.

**Duplicate pruning.** If the input is `[1, 2, 2]`, choosing the first 2 then the second 2 gives the same subsets as the other order. Sort, and inside the loop skip a value equal to the previous one *at the same level*: `if i > start and nums[i] == nums[i-1]: continue`. The condition `i > start` matters. It allows the second 2 to be used after the first has been chosen (a deeper level), but not as a rival first choice (the same level).

Another bound for selections: if you still need $r$ items and fewer than $r$ remain, stop. For `combine`, loop to `n - (k - len(path)) + 1` instead of `n`.

:::qc lvl=3
q: After sorting [1, 2, 2], the loop at the top level sees index 1 (value 2) and index 2 (value 2). Which one is skipped by "if i > start and nums[i] == nums[i-1]"?
options: ["Index 1", "Index 2", "Neither"]
answer: 1
right: Right. Index 1 is the first 2 (it equals nothing before it at this level). Index 2 repeats it as a rival at the same level, so it is skipped. Taking both 2s in one answer still works through the deeper call.
wrong: Compare each index with the one before it, but only inside the same loop (i greater than start).
:::

## Constraint puzzles {lvl=3 id=s-puzzles label="SDE-2"}

In a puzzle the choice is "put this thing here" and the pruning is the puzzle's own rules, checked before placing.

**N-queens.** Place one queen per row, so a row never clashes. For each column ask if it is free of an earlier queen's column and diagonals. Two sets plus a column set make every check $O(1)$: cells on one diagonal share $r - c$, cells on the other share $r + c$.

```python
def queens(n):
    cols, d1, d2, out, path = set(), set(), set(), [], []
    def go(r):
        if r == n:
            out.append(path[:]); return
        for c in range(n):
            if c in cols or r - c in d1 or r + c in d2: continue
            cols.add(c); d1.add(r - c); d2.add(r + c); path.append(c)
            go(r + 1)
            cols.remove(c); d1.remove(r - c); d2.remove(r + c); path.pop()
    go(0)
    return out
```

Counting every call of `go` for $n = 8$ gives 2,057, and 92 of them are full solutions. Brute force over 64 squares would be 4.4 billion.

**Sudoku.** Find the first empty cell. Try each digit that no row, column or box already has; recurse; if the recursion fails, erase and try the next digit. If no digit fits, return failure so the caller backtracks.

```python
def solve(board):
    for r in range(9):
        for c in range(9):
            if board[r][c] != '.': continue
            for d in '123456789':
                if fits(board, r, c, d):       # row, column, box check
                    board[r][c] = d
                    if solve(board): return True
                    board[r][c] = '.'          # unchoose
            return False                       # dead end
    return True                                # no empty cell: solved
```

**Word search.** Starting from each cell, follow neighbours that spell the word. A cell must not be used twice in one path, so mark it as visited when choosing and restore it when leaving.

```python
def exists(grid, word):
    R, C = len(grid), len(grid[0])
    def go(r, c, i):
        if i == len(word): return True
        if not (0 <= r < R and 0 <= c < C) or grid[r][c] != word[i]: return False
        keep, grid[r][c] = grid[r][c], '#'          # choose: mark visited
        hit = any(go(r + dr, c + dc, i + 1) for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)))
        grid[r][c] = keep                           # unchoose
        return hit
    return any(go(r, c, 0) for r in range(R) for c in range(C))
```

:::qc lvl=3
q: In n-queens with one queen per row, why do we not need to check rows?
options: ["Rows never matter in chess", "The loop places exactly one queen per row, so two can never share a row", "Rows are checked by the diagonals"]
answer: 1
right: Right. Building the answer row by row removes one whole kind of clash by construction. Choosing a smart way to build the answer is itself a form of pruning.
wrong: Think about how the recursion advances: it moves to row r + 1 after each placement.
:::

## What the tree costs {lvl=3 id=s-cost label="SDE-2"}

The work is about the number of nodes visited times the work per node. For a tree with $b$ options per step and $d$ steps, the leaves number $b^d$.

| Problem | Leaves | Work per leaf | Total, order of |
|---|---|---|---|
| Subsets of $n$ items | $2^n$ | copy a path, up to $n$ | $n \cdot 2^n$ |
| Orderings of $n$ items | $n!$ | copy a path, $n$ | $n \cdot n!$ |
| $k$ of $n$ | $\binom{n}{k}$ | $k$ | $k \binom{n}{k}$ |
| Word search, word length $L$ | up to $4 \cdot 3^{L-1}$ per start cell | 1 | exponential in $L$ |

Read the first row aloud: "two choices for each of $n$ items, and each answer costs up to $n$ to copy". The output itself is that large, so no method can do better when you must list everything.

Pruning does not change these worst cases, because an adversarial input may allow every branch. It changes the typical cost, often by a huge factor. Always state both: "worst case exponential, but pruning makes it fast on typical inputs".

**When to switch.** If the question asks only *how many* ways or the *best* value, and the same half-finished state can be reached by different paths (for example "remaining amount 3, at item 5"), save the answer for that state. That is memoisation, and it turns the tree into a table: dynamic programming, the next-but-one lesson.

## Classic problem types {lvl=3 id=s-catalogue label="SDE-2"}

Each row describes a family in our own words, mapped to a variant above. Practise recognising the family from the statement.

| Problem type | Variant |
|---|---|
| List every group that can be formed from distinct items | All subsets |
| List every group, but the input has repeated values and answers must be unique | Duplicates: sort and skip |
| List every way to order a set of items | All orderings |
| List every ordering of items where some are identical | Orderings with duplicates: sort, skip an equal item whose twin is unused |
| List all groups of exactly $k$ numbers from $1$ to $n$ | k from n |
| Find all groups of numbers that add to a target, numbers reusable | Target sum with reuse |
| Same, but each number usable once and the list has repeats | Target sum, once each, duplicates skipped |
| Build every balanced string of $n$ bracket pairs | Placement with counters: open count, close count |
| Split a string into pieces so that every piece is a palindrome | Choose where to cut; check the piece before going on |
| Turn a digit string such as a phone keypad entry into every letter combination | One loop per position over that digit's letters |
| Place $n$ queens so none attack | Place under rules |
| Fill a partly completed sudoku | Place under rules, with failure return |
| Find whether a word can be traced through neighbouring grid cells | Grid path |
| Break a string into dictionary words, listing all breakups | Choose the next word; prune with a prefix check |
| Split numbers into groups with equal totals | Assign each number to a group; prune on totals |

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

1. **Forgetting the copy.** Saving `path` instead of `path[:]`.
2. **Forgetting to unchoose.** A missing `pop`, a missing `used[i] = False`, a grid cell left as `#`.
3. **Using `continue` where `break` was possible**, or the reverse: `break` is only right when the list is sorted and every later option is worse.
4. **Duplicate check at the wrong level.** Using `i > 0` instead of `i > start`, which wrongly forbids using equal values at deeper levels.
5. **Starting at the wrong index.** `go(i)` allows reuse; `go(i + 1)` forbids it; `go(0)` after each choice generates orderings instead of selections.
6. **Checking validity too late.** Testing only at the leaf works but does not prune; move the test before the choice.
7. **Mutating the input while iterating**, or sorting a list the caller still needs.
8. **Recursion depth.** Python's default limit is about 1000 frames; a path longer than that needs an iterative approach or a raised limit.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Backtracking explores a tree of partial answers, one choice per level, and undoes each choice before trying the next. {lvl=1}
2. Pruning abandons a branch as soon as it cannot lead to a valid answer. {lvl=1}
3. Template: if complete, save a copy; else for each legal option, choose, recurse, unchoose. {lvl=2}
4. Subsets give $2^n$ leaves, orderings $n!$, selections $\binom{n}{k}$; use a start index for selections and a used array for orderings. {lvl=2}
5. Sort, then skip an equal neighbour at the same level to avoid duplicate answers; sorted bounds allow a `break`. {lvl=3}
6. Choose a build order that rules out clashes by construction (one queen per row), and use sets for $O(1)$ checks. {lvl=3}
7. Pruning cuts typical cost, not the worst case; if only a count or best value is wanted and states repeat, use dynamic programming. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Say the three blanks aloud first: what is one choice, when is the path complete, what makes an option illegal. {lvl=2}
- Always save a copy of the path, and always undo every change you made, including marks on a grid. {lvl=2}
- A duplicate check with the wrong condition either keeps duplicates or loses valid answers; test it on `[1, 2, 2]`. {lvl=3}
- Quote the cost as output size times work per answer, such as $n \cdot 2^n$, and note that pruning does not improve the worst case. {lvl=3}
- If the statement asks "how many" or "minimum", suspect dynamic programming before writing exponential code. {lvl=3}
:::
