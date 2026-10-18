---
title: Greedy and exchange arguments
summary: How to fit the most meetings into one room, and why one simple habit (sort, then take what fits) solves a whole family of contest problems.
ncert: []
up_to: SDE-2
builds_on: [Greedy algorithms, Sorting, Heaps and priority queues]
notes_prompt: Explain to a friend why picking the meeting that ends earliest is safe, but picking the shortest meeting is not.
margin:
  - kind: history
    title: History
    text: 'David Huffman found his optimal coding tree in 1952 as a student, when he chose to build it from the bottom up instead of the top down. It is a greedy algorithm still used inside file compressors. [Unverified: details from memory]'
  - kind: tip
    title: Contest habit
    text: 'When a greedy idea feels obvious, spend two minutes writing a brute force for tiny inputs and compare. Greedy ideas that are wrong are usually wrong on inputs of size 4 or 5.'
  - kind: olympiad
    title: Proof style
    text: 'Maths olympiads use the same exchange argument: take any best answer, show you can swap one piece for the greedy choice without making it worse, and repeat.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 16 Greedy Algorithms [Unverified]" }
  - { title: "J. Kleinberg and E. Tardos, Algorithm Design", ref: "Ch. 4 Greedy Algorithms: interval scheduling, minimising lateness [Unverified]" }
cards:
  - { front: "What are the two ingredients of a greedy solution?", back: "A sorting rule (or priority queue) that decides which choice looks best, and a scan that takes each choice if it still fits. Never look back." }
  - { front: "Which rule maximises the number of non-overlapping meetings?", back: "Earliest finish time first. Shortest-first and earliest-start-first both have small counterexamples." }
  - { front: "What is an exchange argument?", back: "Take any optimal answer, swap one piece for the greedy choice, show the answer is no worse. So some optimal answer contains the greedy choice; repeat on what is left." }
  - { front: "Jobs with deadlines and profits, one unit each: which structure?", back: "Sort by deadline, push profits on a min-heap, and when the heap holds more jobs than the current deadline allows, pop the smallest profit." }
  - { front: "Coins 1, 3, 4 and target 6: does greedy work?", back: "No. Greedy takes 4+1+1 (3 coins) but 3+3 uses 2. When a choice blocks a better combination later, you need DP." }
  - { front: "How do you test a greedy idea quickly?", back: "Write a brute force that tries everything on inputs of size up to 8, run both on thousands of random small cases, and compare." }
core:
  idea: 'A greedy algorithm sorts the choices by one well-chosen rule and takes each one that still fits, never undoing anything. It is correct exactly when an exchange argument shows the first greedy choice can always be part of some best answer.'
  formulas:
    - tex: 'O(n \log n)'
      label: 'Cost of sort-then-scan: the sort dominates, the scan is O(n)'
    - tex: 's_i \ge f_{\text{last}}'
      label: 'Interval scheduling: take a meeting only if it starts after the last chosen one finishes'
    - tex: 't_i / w_i \text{ smallest first}'
      label: 'Order for minimum weighted completion time (Smith''s rule)'
  conditions:
    - 'A local choice never blocks a better combination later (proved by an exchange argument, not just felt)'
    - 'The rule for "best-looking" is a single number or comparison that sorting or a heap can use'
    - 'After the choice, what is left is the same kind of problem, only smaller'
  sign: 'The commonest mistake is trusting the first rule that sounds right. "Shortest meeting first" sounds right and is wrong.'
outcomes:
  - 'Recognise a greedy problem from its statement and constraints'
  - 'Apply sort-then-scan to interval scheduling, stabbing and covering'
  - 'Use a heap when the best choice changes as time moves on (deadlines, refuelling, joining ropes)'
  - 'Prove a greedy rule with an exchange argument, or break it with a counterexample'
  - 'Tell when greedy fails and the problem needs dynamic programming'
opener:
  story: |
    A startup has **one meeting room** and eight teams who each want a time slot today. Two meetings that overlap cannot both happen. The office manager wants to fit in as many meetings as possible, and she has three ideas: take the **shortest** meeting first, take the one that **starts earliest**, or take the one that **ends earliest**.

    All three sound sensible. Each one is a *greedy* rule: pick the best-looking option right now, never reconsider. And on a tiny example, two of them quietly go wrong.

    Contest problems are full of this. A single sort and a single pass solve them in a blink, if you pick the right rule. Pick the wrong one and you fail on test 7 with no idea why. How do you know which rule is safe?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Meeting requests drawn as bars on a timeline; the greedy choice picks the bars that finish earliest and leave room for more"><g style="font-size:10px;fill:var(--muted)"><text x="16" y="24">9</text><text x="86" y="24">11</text><text x="156" y="24">1</text><text x="226" y="24">3</text><text x="296" y="24">5</text></g><path d="M20 30 H300" style="stroke:var(--rule);stroke-width:1.5"/><g style="stroke-width:1.5"><rect x="20" y="44" width="110" height="20" rx="4" style="fill:color-mix(in srgb,var(--c) 70%,var(--surface));stroke:var(--c)"/><rect x="100" y="72" width="50" height="20" rx="4" style="fill:var(--surface);stroke:var(--bad)"/><rect x="140" y="100" width="90" height="20" rx="4" style="fill:color-mix(in srgb,var(--c) 70%,var(--surface));stroke:var(--c)"/><rect x="60" y="128" width="130" height="20" rx="4" style="fill:var(--surface);stroke:var(--rule)"/><rect x="240" y="156" width="60" height="20" rx="4" style="fill:color-mix(in srgb,var(--c) 70%,var(--surface));stroke:var(--c)"/><rect x="200" y="184" width="70" height="20" rx="4" style="fill:var(--surface);stroke:var(--rule)"/></g><g style="font-size:10px;fill:var(--ink)"><text x="26" y="58">A</text><text x="106" y="86">B</text><text x="146" y="114">C</text><text x="66" y="142">D</text><text x="246" y="170">E</text><text x="206" y="198">F</text></g><text x="20" y="226" style="font-size:10px;fill:var(--muted)">Filled bars: earliest-finish picks A, C, E</text></svg>'
life:
  - 'Booking one cricket ground or one exam hall for as many matches or papers as possible.'
  - 'A railway station deciding how many platforms are needed so no two trains clash.'
  - 'Giving change at a shop: take the biggest note that fits (this works for rupee notes, but not for every currency).'
  - 'File compression (ZIP and many image formats use Huffman coding) gives frequent letters short codes using a greedy merge.'
  - 'Planning a long drive with petrol pumps on the way: refuel only when you must, at the best pump you have passed.'
symbols:
  - s: 'n'
    means: 'number of items, such as meetings or jobs (count)'
  - s: 's_i, f_i'
    means: 'start and finish time of meeting i (hours or any time unit)'
  - s: 't_i, w_i'
    means: 'duration and importance weight of job i (time, and a plain number)'
  - s: 'O(n \log n)'
    means: 'cost that grows a little faster than n: what sorting n items takes'
links:
  - leaf: 'cs/greedy'
    name: 'Greedy algorithms'
    same: 'The same idea, taught from scratch with the change-making and scheduling examples.'
    differs: 'That lesson introduces greedy once; this one is the contest catalogue: which rule, which template, and which problems are really the same problem.'
  - leaf: 'cs/heaps'
    name: 'Heaps and priority queues'
    same: 'When the best choice changes as you move along, a heap hands you the current best in O(log n).'
    differs: 'A sort fixes the order once; a heap keeps re-ranking as new candidates arrive.'
  - leaf: 'cs/dynamic-programming'
    name: 'Dynamic programming'
    same: 'Both build an answer from smaller answers of the same problem.'
    differs: 'Greedy commits to one choice and moves on; DP tries every choice and keeps the best, which costs more but is always safe.'
  - leaf: 'mat/induction'
    name: 'Induction (maths)'
    same: 'An exchange argument is an induction: the first step is safe, and what remains is a smaller copy of the problem.'
    differs: 'Induction proves a statement for every n; an exchange argument also tells you which algorithm to run.'
next:
  q: 'Greedy broke on coins 1, 3, 4 because a choice now blocked a better combination later. If we cannot commit, can we try every choice and still be fast, by never solving the same smaller problem twice? What are the shapes that smaller problems take?'
  leaf: 'cs/cp-dp-families'
  name: 'DP families'
---

:::hook
q: Three requests overlap in a messy way. Which rule always fits in the most meetings?
options: ["Shortest meeting first", "Earliest start first", "Earliest finish first"]
answer: 2
right: Right. The meeting that ends earliest leaves the most of the day free for the others. Shortest-first can pick a tiny meeting in the middle that blocks two long ones, and earliest-start can pick one marathon that blocks everything.
wrong: Try a tiny case: A = 0 to 5, B = 4 to 6, C = 5 to 10. A short meeting sitting across the boundary of two others can wreck shortest-first. Which meeting leaves the most room for the rest?
:::

## One room, many requests {lvl=1 id=s-room label="Foundations"}

Each request is a pair: a start time and a finish time. Two requests **clash** if their times overlap. We want the largest set of requests with no clashes.

You could try every subset of requests. With 40 requests that is more than a trillion subsets, so no. A **greedy** method instead decides one request at a time and never goes back. The art is choosing what "best" means.

Test the three rules on a small case with three requests: **A** = 0–5, **B** = 4–6, **C** = 5–10 (times in hours, and a meeting that ends at 5 does not clash with one that starts at 5).

- *Shortest first* takes B (length 2). B clashes with both A and C, so we end with 1 meeting.
- *Earliest finish* takes A (ends at 5), then C (starts at 5, no clash). That is 2 meetings, the best possible.

:::qc lvl=1
q: With the requests A = 0–5, B = 4–6, C = 5–10, which rule gets only one meeting?
options: ["Earliest finish first", "Shortest first", "None, they all get two"]
answer: 1
right: Right. B is the shortest, but it overlaps both A and C.
wrong: Walk through each rule. Which one picks B first, and what does B clash with?
:::

## The signal {lvl=1 id=s-signal label="Foundations"}

Greedy problems announce themselves. Look for these clues in the statement:

- You choose **a subset** or an **order**, and want the most items, the biggest total, or the smallest cost.
- Items conflict only in simple ways (time overlap, a shared limit such as capacity or a deadline).
- The input size is large (up to $2\times10^5$ or $10^6$), so $O(n^2)$ is out and $O(n \log n)$ is allowed. A sort is hiding in the solution.
- "Obviously" the best thing to do first is X. (Be suspicious. This is the clue and the warning at once.)

If the items are tiny in number (say 20) and the conflicts are tangled, think brute force or DP instead.

## The template: sort, then take what fits {lvl=2 id=s-template label="SDE-1"}

Almost every greedy solution is the same two steps. First **sort** by the rule. Then **scan once**, keeping each item that still fits with what you already kept. Here is interval scheduling:

```python
def max_meetings(intervals):
    intervals = sorted(intervals, key=lambda iv: iv[1])   # earliest finish first
    count, last_end = 0, float("-inf")
    for start, end in intervals:
        if start >= last_end:        # fits after the last kept meeting
            count += 1
            last_end = end
    return count
```

Read it as: keep one number, the time the last chosen meeting ends. A new meeting is kept only if it starts at or after that. The sort costs $O(n \log n)$ and the scan $O(n)$.

Notice `>=`: a meeting 9–10 and another 10–11 do not clash if "ends at 10" means "free from 10". Whether touching counts as a clash is a *problem statement* detail. Read it twice.

:::qc lvl=2
q: What does the loop keep track of between meetings?
options: ["The list of all chosen meetings", "Only the end time of the last chosen meeting", "The shortest meeting seen so far"]
answer: 1
right: Right. Because we sorted by finish time, the last chosen meeting always has the latest finish, so that one number is all we need.
wrong: Think about what a new meeting must be compared against. Do we need the whole list, or just one time?
:::

## Why it works: the exchange argument {lvl=2 id=s-exchange label="SDE-1"}

"It looks right" is not a proof. The standard proof is the **exchange argument**, and it has three moves.

1. Take *any* best answer. Call it O.
2. Show that the greedy choice $g$ can be swapped into O without making it worse. So some best answer **contains** $g$.
3. After taking $g$, what is left is the same problem on fewer items. Repeat.

For meetings: let $g$ be the one that ends earliest, and let $o$ be the first meeting in O. Since $g$ ends no later than $o$, replacing $o$ by $g$ cannot create a clash with the second meeting of O (it started after $o$ ended, which is not earlier than $g$ ends). Same size, still valid. So the greedy first choice is safe, and the rest follows the same way.

:::figure caption="Exchange argument: the optimal answer's first meeting (top, hollow) is swapped for the greedy one (filled), which finishes earlier. Nothing after it can clash, and the count is unchanged."
<svg viewBox="0 0 320 130" role="img" aria-label="Two timelines: an optimal schedule with a long first meeting, and the same schedule with a shorter-finishing greedy meeting swapped in">
<g style="font-size:10px;fill:var(--muted)"><text x="10" y="14">optimal O</text><text x="10" y="84">after swap</text></g>
<g style="stroke-width:1.5">
<rect x="20" y="22" width="100" height="22" rx="4" style="fill:var(--surface);stroke:var(--ink)"/>
<rect x="130" y="22" width="70" height="22" rx="4" style="fill:var(--surface);stroke:var(--ink)"/>
<rect x="215" y="22" width="80" height="22" rx="4" style="fill:var(--surface);stroke:var(--ink)"/>
<rect x="20" y="92" width="70" height="22" rx="4" style="fill:color-mix(in srgb,var(--c) 70%,var(--surface));stroke:var(--c)"/>
<rect x="130" y="92" width="70" height="22" rx="4" style="fill:var(--surface);stroke:var(--ink)"/>
<rect x="215" y="92" width="80" height="22" rx="4" style="fill:var(--surface);stroke:var(--ink)"/>
</g>
<path d="M90 28 V10 M120 28 V10" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<text x="24" y="38" style="font-size:10px;fill:var(--ink)">o</text><text x="24" y="108" style="font-size:10px;fill:var(--ink)">g</text>
<text x="136" y="64" style="font-size:10px;fill:var(--muted)">g ends here, before o does</text>
</svg>
:::

This proof also tells you what to try when a rule fails: look for the swap that *does* make the answer worse. That swap is your counterexample.

:::qc lvl=2
q: In the exchange argument, what are we showing about the greedy choice?
options: ["That it is the only possible first choice", "That some best answer contains it", "That it is the shortest item"]
answer: 1
right: Right. Other best answers may exist; we only need that at least one of them starts with the greedy choice.
wrong: The greedy choice does not have to be unique. What is the weakest claim that still lets us take it safely?
:::

## The variants table {lvl=2 id=s-variants label="SDE-1"}

Most problems in this family are one of the following. The template barely changes.

| Variant | Signal | Change to the template |
|---|---|---|
| Max non-overlapping intervals | "most meetings", "fewest removals to avoid overlap" | Sort by **end**, keep if start $\ge$ last end |
| Stabbing points | "fewest arrows / pins touching every interval" | Sort by **end**, place a point at the end of the first uncovered interval |
| Cover a segment | "fewest intervals covering $[0, L]$" | Sort by **start**, extend to the farthest reach |
| Rooms needed | "how many halls so no two clash" | Min-heap of end times, or a sweep over events |
| Deadlines and profit | "each job takes 1 unit, must finish by $d$" | Sort by deadline, min-heap of profits |
| Minimise lateness | "all jobs must run, minimise the worst delay" | Sort by **deadline** (earliest deadline first) |
| Weighted completion | "minimise the sum of weight $\times$ finish time" | Sort by $t_i / w_i$ ascending |
| Merge cheapest first | "join pieces, cost is the sum of sizes" | Min-heap, pop two, push their sum |

## Stabbing and covering {lvl=2 id=s-cover label="SDE-1"}

**Stabbing**: pins must touch every interval. Sort by end. The first interval must be pinned somewhere, and the best place is its **right end**, which also catches the most later intervals.

```python
def min_points(intervals):
    intervals = sorted(intervals, key=lambda iv: iv[1])
    points, last = 0, float("-inf")
    for s, e in intervals:
        if s > last:                 # not touched by the last pin
            points += 1
            last = e                 # pin at this interval's right end
    return points
```

On (1,4), (2,6), (5,8), (7,9), (10,12) this returns 3: pins at 4, 8 and 12.

**Covering** a segment $[0, L]$ is the mirror image. You stand at `reach`, look at every interval that starts at or before `reach`, and jump to the farthest end among them.

```python
def min_cover(intervals, L):
    intervals.sort()                  # by start
    i, reach, used = 0, 0, 0
    while reach < L:
        best = reach
        while i < len(intervals) and intervals[i][0] <= reach:
            best = max(best, intervals[i][1]); i += 1
        if best == reach: return -1   # a gap nobody covers
        reach, used = best, used + 1
    return used
```

:::qc lvl=2
q: In interval covering, why is it safe to jump to the farthest end among intervals that start at or before the current reach?
options: ["Because longer intervals are cheaper", "Because any other choice reaches no further, so it can only leave more to cover", "Because the input is sorted by end"]
answer: 1
right: Right. All candidates cost one interval; the farthest one leaves the least remaining. That is the exchange argument again.
wrong: Every candidate costs one interval. Which one leaves the smallest uncovered part?
:::

## When the best choice keeps changing: heaps {lvl=3 id=s-heap label="SDE-2"}

Sometimes "best so far" changes as you move forward, so a plain sort is not enough. You keep the candidates in a **heap** and pull out the best when you need it.

**Deadlines and profits.** Each job takes one unit of time and pays a profit if finished by its deadline. Sort by deadline. Keep a min-heap of profits of the jobs you are *currently planning to do*. If the heap holds more jobs than the current deadline allows, throw out the **least profitable** one.

```python
import heapq

def max_profit(jobs):                  # jobs: (deadline, profit)
    jobs.sort()
    heap = []
    for deadline, profit in jobs:
        heapq.heappush(heap, profit)
        if len(heap) > deadline:       # too many jobs for this much time
            heapq.heappop(heap)        # drop the smallest profit
    return sum(heap)
```

For jobs (2,100), (1,19), (2,27), (1,25), (3,15) the answer is 142: jobs with profits 100, 27 and 15.

**Joining ropes.** Joining two ropes costs their total length, and you want to join all of them for the least total cost. Always join the two **shortest**. A min-heap gives them in $O(\log n)$.

```python
def join_ropes(lengths):
    heapq.heapify(lengths)
    cost = 0
    while len(lengths) > 1:
        a, b = heapq.heappop(lengths), heapq.heappop(lengths)
        cost += a + b
        heapq.heappush(lengths, a + b)
    return cost
```

Lengths 4, 3, 2, 6 cost $5 + 9 + 15 = 29$. The idea behind it is the same Huffman idea used in compression.

**Refuelling.** You have fuel to reach some distance. Every pump you pass goes into a max-heap. When you run out, "retroactively" refuel at the biggest pump you drove past, and count one stop. The heap holds the choices you postponed.

## Custom orders {lvl=3 id=s-orders label="SDE-2"}

Sometimes the sorting key is not a single number but a **comparison** found by the exchange argument itself. Take two neighbours and ask which order is better.

**Biggest number from pieces.** Given 3, 30, 34, 5, 9, join them to make the largest number. Compare two pieces $a$ and $b$ by which of $ab$ and $ba$ is bigger: put $a$ first if "a then b" beats "b then a". Sorting with that rule gives 9534330.

```python
from functools import cmp_to_key

def biggest(nums):
    strs = [str(x) for x in nums]
    strs.sort(key=cmp_to_key(lambda a, b: -1 if a + b > b + a else 1))
    return "".join(strs)
```

**Weighted completion time.** Jobs have duration $t_i$ and weight $w_i$; the cost is the sum of weight times finish time. Swapping two neighbouring jobs $i, j$ changes the cost by $w_j t_i - w_i t_j$, so $i$ should go first when $t_i / w_i < t_j / w_j$. Read it as: do first the jobs that are short and important. This is the problem's own exchange argument turned into a sort key.

## When greedy fails {lvl=3 id=s-fails label="SDE-2"}

Coins 1, 3, 4 and a target of 6. Greedy takes 4, then 1, then 1: three coins. But 3 + 3 is two. The big coin blocked the better pair. The exchange argument breaks: you cannot swap the 4 for anything without making things worse.

The same happens with a **0/1 knapsack**. Items (weight, value) = (10, 60), (20, 100), (30, 120), capacity 50. By value per weight, greedy takes the first two for 160, but the last two give 220. (If you may take *fractions* of an item, the ratio rule is exactly right: 240.)

Rule of thumb: if an item is **all-or-nothing** and sizes interact (capacity, exact sums, counts), suspect DP. If the pieces can be cut or the conflicts are only time overlaps and deadlines, greedy often works.

Before you commit to a greedy idea, **stress it** against brute force on tiny inputs:

```python
import random

def brute(iv):                          # try every subset
    best = 0
    for mask in range(1 << len(iv)):
        ch = sorted(iv[i] for i in range(len(iv)) if mask >> i & 1)
        if all(a[1] <= b[0] for a, b in zip(ch, ch[1:])):
            best = max(best, len(ch))
    return best
# loop: random intervals, assert max_meetings(iv) == brute(iv)
```

## The catalogue of problem types {lvl=3 id=s-catalogue label="SDE-2"}

Described in our own words; each is a variant above.

| # | The story | Variant |
|---|---|---|
| 1 | Most talks that fit in one hall | Max non-overlapping, sort by end |
| 2 | Remove the fewest bookings so the rest never clash | Same: $n$ minus the answer of 1 |
| 3 | Fewest arrows to burst all balloons laid along a line | Stabbing |
| 4 | Fewest sprinklers to water a whole lawn | Cover a segment |
| 5 | Minimum platforms for a timetable of trains | Rooms needed, heap of end times |
| 6 | Pick jobs with deadlines to earn the most | Deadlines and profit, heap |
| 7 | Order tasks to minimise the biggest lateness | Earliest deadline first |
| 8 | Order jobs to minimise total weighted waiting | Sort by $t/w$ |
| 9 | Fill a bag with powders that can be split | Fractional knapsack, sort by ratio |
| 10 | Join ropes or merge files at least cost | Min-heap, pop two |
| 11 | Arrange numbers to form the largest or smallest number | Comparator from the exchange argument |
| 12 | Reach a destination with fewest petrol stops | Heap of postponed pumps |
| 13 | Delete $k$ digits to leave the smallest number | Monotonic stack: drop a larger digit when a smaller one arrives |
| 14 | Hand out candies so higher-rated children get more | Two passes, left to right then right to left |

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- Sorting by the wrong key: **end** for scheduling and stabbing, **start** for covering. Write the key in a comment.
- Touching intervals: `>=` or `>`? Decide from the statement, then test 9–10 and 10–11.
- Sorting in place when the caller needs the original order. Use `sorted(...)` or keep indices.
- Ties: if two items share the key, does the order matter? Add a second key and test.
- Skipping the stress test. A wrong greedy passes every example you drew by hand.
- Forgetting that greedy cannot handle "exactly" or "all-or-nothing with capacity". Reach for DP.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Greedy means sort by one rule and take what fits, never undoing a choice. {lvl=1}
2. For interval scheduling, sort by finish time, not length or start time. {lvl=1}
3. The template is sort then scan: $O(n \log n)$ in total. {lvl=2}
4. Prove a rule with an exchange argument: some best answer contains the greedy choice. {lvl=2}
5. Stabbing sorts by end; covering sorts by start and jumps to the farthest reach. {lvl=2}
6. When the best candidate changes over time, keep a heap. {lvl=3}
7. Find a custom order by asking which of two neighbours should go first. {lvl=3}
8. All-or-nothing items with capacity (coins 1, 3, 4; 0/1 knapsack) break greedy: use DP. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A greedy rule that "feels obvious" is a hypothesis, not a solution. Stress-test it against brute force. {lvl=1}
- Shortest-first is the classic wrong rule for scheduling. {lvl=1}
- Decide whether touching intervals clash before writing `>` or `>=`. {lvl=2}
- Python's `heapq` is a min-heap; for a max-heap, push negated values. {lvl=2}
- Use `sorted` when you must preserve the input order; `.sort()` changes the list. {lvl=2}
- Coin systems such as 1, 3, 4 defeat greedy; the Indian currency denominations happen to be safe. [Inference] {lvl=3}
:::
