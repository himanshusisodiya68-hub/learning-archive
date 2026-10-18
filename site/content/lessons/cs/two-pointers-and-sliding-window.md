---
title: Two pointers and sliding window
summary: How to find the busiest hour in a year of traffic logs without re-adding every number, by sliding a window instead.
ncert: []
up_to: SDE-2
builds_on: [Arrays and dynamic arrays, Big-O and growth of cost, Hash tables]
notes_prompt: Explain to a friend how you can find the busiest 60 minutes in a day of traffic numbers by adding one number and removing one number at each step.
margin:
  - kind: history
    title: History
    text: 'The "tortoise and hare" way to catch a loop with a slow and a fast pointer is credited to Robert Floyd, in the 1960s [Unverified: attribution and date from memory].'
  - kind: tip
    title: Interview favourite
    text: 'Any statement with "subarray", "substring" or "contiguous" plus a limit on a sum, a count or distinct items is probably a window. A sorted array and a pair or triple is probably two pointers.'
  - kind: olympiad
    title: Stretch
    text: 'Exactly k distinct items is hard for one window, but "at most k" is easy, and exactly k equals at most k minus at most k minus 1.'
books:
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Sections on sorting and searching tricks, and sequential scans [Unverified: section numbers]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Amortised analysis chapter explains why a pointer that only moves forward costs O(n) in total [Unverified: chapter number]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Stream processing: windows over time (tumbling, hopping, sliding)" }
cards:
  - { front: "What is a fixed sliding window, and why is it fast?", back: "Keep a running total for the last k items. Moving one step adds the new item and subtracts the one that left, 2 operations instead of k." }
  - { front: "Two pointers on a sorted array: how does it find a pair with sum T?", back: "Left at the smallest, right at the largest. If the sum is too small move left up; if too big move right down. Each step discards one element for good: O(n)." }
  - { front: "What are slow and fast pointers good for?", back: "Cycle detection in linked lists, finding the middle, and compacting an array in place. The fast one moves twice as far, or only reads while the slow one writes." }
  - { front: "Why is a variable window O(n) even with a loop inside a loop?", back: "Left and right each only move forward, at most n steps each. Total moves at most 2n, so the inner loop is amortised O(1)." }
  - { front: "When does a sum window fail?", back: "When the array has negative numbers: growing the window no longer always raises the sum, so you cannot tell which end to move. Use prefix sums with a hash map." }
  - { front: "What is the key condition for any two-pointer method?", back: "Moving a pointer must safely rule something out, so a pointer never has to go back. Sorted order or positive numbers usually give that." }
core:
  idea: 'Instead of restarting the work for every position, keep two markers that only move forward and reuse what you already know. Each step throws away part of the search for good, so the whole scan is O(n) instead of O(n²).'
  formulas:
    - tex: '\text{new sum} = \text{old sum} + a_{\text{in}} - a_{\text{out}}'
      label: 'Fixed window: slide by adding the entering item and removing the leaving one'
    - tex: 'n - k + 1'
      label: 'Number of window positions for an array of n items and window size k'
  conditions:
    - 'Pair-sum two pointers: the array is sorted'
    - 'Variable sum window: all numbers are positive (or the growing and shrinking direction is otherwise known)'
    - 'A pointer never moves backwards, so each pointer makes at most n moves'
  sign: 'The commonest bug is an off-by-one at the window edges: be clear whether the window is [left, right] inclusive, and that its length is right - left + 1.'
outcomes:
  - 'Compute any running total over the last k items by sliding instead of re-adding'
  - 'Use two pointers from both ends of a sorted array to find a pair with a target sum'
  - 'Use slow and fast pointers to detect a cycle or compact an array in place'
  - 'Write a variable-size window and explain why it is O(n)'
  - 'Judge when the method works and when to switch to prefix sums or a hash map'
opener:
  story: |
    Your payments app logs how many transactions happened in each minute of the day: 1,440 numbers. The on-call engineer asks one question: *which 60 consecutive minutes were the busiest?* It decides how many servers to keep ready next Diwali.

    The obvious way is to take minutes 0 to 59 and add them, then minutes 1 to 60 and add those, and so on. That works for one day. Now do it for a whole year of numbers recorded every second, with a window of one hour. You would add 3,600 numbers about 31 million times.

    But look at two neighbouring windows. They share all but two minutes: one has just left, one has just arrived. Why throw away the 59 minutes you already added?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A row of bars with a window frame sliding right, one bar leaving and one bar entering"><g style="fill:color-mix(in srgb,var(--c) 35%,var(--surface));stroke:var(--c)"><rect x="20" y="150" width="26" height="40"/><rect x="50" y="120" width="26" height="70"/><rect x="80" y="90" width="26" height="100"/><rect x="110" y="70" width="26" height="120"/><rect x="140" y="100" width="26" height="90"/><rect x="170" y="60" width="26" height="130"/><rect x="200" y="110" width="26" height="80"/><rect x="230" y="140" width="26" height="50"/><rect x="260" y="130" width="26" height="60"/></g><rect x="76" y="50" width="124" height="150" rx="8" style="fill:none;stroke:var(--ink);stroke-width:2.5"/><rect x="112" y="46" width="124" height="158" rx="8" style="fill:none;stroke:var(--c);stroke-width:2.5;stroke-dasharray:6 4"/><g style="font-size:11px;fill:var(--ink)"><text x="62" y="222">out</text><text x="206" y="222">in</text></g><path d="M80 214 L68 214" style="stroke:var(--bad);stroke-width:2;fill:none"/><path d="M222 214 L234 214" style="stroke:var(--c);stroke-width:2;fill:none"/><text x="20" y="30" style="font-size:12px;fill:var(--ink)">minutes of traffic: slide the frame</text><text x="20" y="44" style="font-size:10px;fill:var(--muted)">add the new bar, drop the old one</text></svg>'
life:
  - 'A cricket scoreboard shows "runs in the last 5 overs": the number slides, it is not recomputed from the start.'
  - 'Rate limiters on APIs and UPI apps count requests in the last minute or hour per user.'
  - 'Moving averages on a stock chart or a fitness band (steps in the last 7 days) are fixed windows.'
  - 'Finding two items that exactly fill a gift budget from a price-sorted list is two pointers from both ends.'
  - 'Spell-checkers and text editors compact text in place when deleting duplicates, with a read marker running ahead of a write marker.'
models:
  - name: 'Reuse, do not restart'
    text: 'When the next question overlaps the last one, update the answer by the difference. A shopkeeper updating the day''s total as each sale happens beats re-adding the whole bill book each time.'
  - name: 'Each move must rule something out'
    text: 'A search is fast when every step eliminates options for good. Binary search halves the space; two pointers remove one candidate at a time. If a step rules nothing out, you are brute-forcing.'
  - name: 'Moving averages smooth noise'
    text: 'One day''s number jumps around, a 7-day window shows the trend. In news, markets and your own habits, look at the window, not the single point.'
links:
  - leaf: 'cs/searching-and-binary-search'
    name: 'Searching and binary search'
    same: 'Both need sorted order to throw away part of the search each step.'
    differs: 'Binary search halves the range per step, O(log n), to find one item; two pointers walk inward in O(n) to find a pair, a question binary search alone cannot answer in one pass.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both turn "find a pair" from O(n²) into O(n).'
    differs: 'A hash set uses extra memory and needs no sort; two pointers use O(1) extra memory but need sorted order (or a sort first, O(n log n)).'
  - leaf: 'cs/linked-lists'
    name: 'Linked lists'
    same: 'Slow and fast pointers walk a linked list to find its middle or a loop without storing visited nodes.'
    differs: 'Arrays allow jumping to any index; lists force you to walk, so pointer tricks matter more.'
next:
  q: 'You now have graph walks, hash maps, windows and pointers. When a brand-new problem lands on your desk, how do you decide which of these to reach for, and in what order do you think?'
  leaf: 'cs/problem-solving-method'
  name: 'A method for any problem'
symbols:
  - s: 'n'
    means: 'number of items in the array (count)'
  - s: 'k'
    means: 'size of a fixed window (count)'
  - s: 'a_i'
    means: 'the item at position i (same unit as the data)'
  - s: 'O(n)'
    means: 'work grows in step with n: one pass'
  - s: 'O(n^2)'
    means: 'work grows with n times n: every pair checked'
  - s: 'left, right'
    means: 'the two pointers: positions in the array (plain words, not symbols)'
---

:::hook
q: A year of per-second numbers, a window of one hour. About how many operations per step does the sliding method need?
options: ["About 3,600, one per second in the window", "About 2: add the new number, subtract the old one", "About 31 million"]
answer: 1
right: Right. Adding the entering number and subtracting the leaving one takes two operations whatever the window size. The whole year costs about 62 million operations instead of over 100 billion.
wrong: That is the restart-every-time method. Two neighbouring windows share almost everything, so only the difference needs work.
:::

## Slide, don't restart {lvl=1 id=s-slide label="Foundations"}

Write the traffic counts as a row: 4, 7, 2, 9, 5, 1, 8. Take a window of 3 items. The first window 4, 7, 2 adds to 13. The next window is 7, 2, 9. Instead of adding 7 + 2 + 9 again, notice we lost the 4 and gained a 9: $13 - 4 + 9 = 18$.

In words: *new total = old total + the number that entered − the number that left*. Do that all the way along and note the biggest total.

```python
def busiest(a, k):
    total = sum(a[:k])          # first window, added the slow way once
    best = total
    for i in range(k, len(a)):
        total += a[i] - a[i - k]    # one enters, one leaves
        best = max(best, total)
    return best
```

For $n$ items and window size $k$ there are $n-k+1$ positions. The slow method costs about $k$ per position; sliding costs 2. When $k$ is 3,600 that is a factor of nearly 2,000.

:::figure caption="A window of size 3 over seven numbers. Each step the frame moves one place: add the new bar, drop the old one."
<svg viewBox="0 0 320 120" role="img" aria-label="Seven numbers with a frame around three, and an arrow showing the frame shift right by one">
<g style="font-size:14px;fill:var(--ink);text-anchor:middle"><rect x="14" y="30" width="40" height="34" style="fill:none;stroke:var(--rule)"/><text x="34" y="53">4</text><rect x="54" y="30" width="40" height="34" style="fill:none;stroke:var(--rule)"/><text x="74" y="53">7</text><rect x="94" y="30" width="40" height="34" style="fill:none;stroke:var(--rule)"/><text x="114" y="53">2</text><rect x="134" y="30" width="40" height="34" style="fill:none;stroke:var(--rule)"/><text x="154" y="53">9</text><rect x="174" y="30" width="40" height="34" style="fill:none;stroke:var(--rule)"/><text x="194" y="53">5</text><rect x="214" y="30" width="40" height="34" style="fill:none;stroke:var(--rule)"/><text x="234" y="53">1</text><rect x="254" y="30" width="40" height="34" style="fill:none;stroke:var(--rule)"/><text x="274" y="53">8</text></g>
<rect x="12" y="26" width="124" height="42" rx="6" style="fill:none;stroke:var(--mat);stroke-width:2.5"/>
<rect x="52" y="22" width="124" height="50" rx="6" style="fill:none;stroke:var(--mat);stroke-width:2;stroke-dasharray:5 4"/>
<text x="160" y="98" text-anchor="middle" style="font-size:12px;fill:var(--ink)">13 - 4 + 9 = 18</text>
</svg>
:::

:::qc lvl=1
q: An array has 10 items and the window size is 4. How many window positions are there?
options: ["6", "7", "10"]
answer: 1
right: Right. n − k + 1 = 10 − 4 + 1 = 7.
wrong: The first window starts at position 0 and the last must still fit, so count the starting positions that leave room for 4 items.
:::

## Two pointers from both ends {lvl=2 id=s-ends label="SDE-1"}

New puzzle: a gift shop lists prices **in sorted order**: 100, 150, 250, 400, 650, 900. Find two gifts costing exactly 1,050 together. Checking every pair is $O(n^2)$.

Put one finger on the cheapest and one on the dearest. Add them. If the total is **too small**, the cheapest item can never be part of the answer (even the dearest partner is not enough), so move the left finger up. If **too big**, the dearest item can never work (even the cheapest partner is too much), so move the right finger down. Each step discards one item for good.

```python
def pair_sum(a, target):        # a is sorted
    i, j = 0, len(a) - 1
    while i < j:
        s = a[i] + a[j]
        if s == target:
            return i, j
        if s < target:
            i += 1
        else:
            j -= 1
    return None
```

The fingers meet after at most $n-1$ moves, so this is $O(n)$ with no extra memory. If the array is not sorted, sorting first costs $O(n\log n)$ and is often still a win; a hash set (see the link below) needs no sorting.

**Triples** reduce to pairs: fix one item, then run pair-sum on the rest. That is $O(n^2)$ overall instead of $O(n^3)$.

:::qc lvl=2
q: Sorted prices 100, 150, 250, 400, 650, 900 and target 1,050. The fingers are on 100 and 900, total 1,000. Which finger moves?
options: ["Right one down, the total is too big", "Left one up, the total is too small"]
answer: 1
right: Right. 1,000 is below 1,050, so 100 can never work (900 is already the best partner it could have). Move the left finger up, to 150 + 900 = 1,050.
wrong: Compare 1,000 with the target 1,050. Is the total too big or too small?
:::

## Slow and fast pointers {lvl=2 id=s-fast label="SDE-1"}

Two runners on a track: if the track is a loop the faster one eventually laps the slower one. On a straight track it just reaches the end. That is how you detect a loop in a linked list without remembering the nodes you passed: **slow** moves one step, **fast** moves two, and if they ever stand on the same node there is a cycle.

```python
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False
```

The same two-speed idea finds the **middle** of a list in one pass (when fast reaches the end, slow is at the middle). A second flavour uses a reader and a writer on an array: the reader scans every item and the writer only advances when an item is worth keeping. That removes duplicates from a sorted array **in place**:

```python
def dedupe(a):                  # a is sorted; returns new length
    w = 0
    for r in range(len(a)):
        if w == 0 or a[r] != a[w - 1]:
            a[w] = a[r]
            w += 1
    return w
```

## Variable windows {lvl=2 id=s-variable label="SDE-1"}

Sometimes the window size is not fixed. *Find the shortest stretch of days with at least 20 sales in total, where each day has a positive number of sales.* Grow the window on the right until it has enough; then shrink from the left as long as it still has enough, noting the length each time.

```python
def shortest(a, target):        # all numbers positive
    best, total, left = float("inf"), 0, 0
    for right, x in enumerate(a):
        total += x
        while total >= target:
            best = min(best, right - left + 1)
            total -= a[left]
            left += 1
    return 0 if best == float("inf") else best
```

There is a loop inside a loop, yet this is $O(n)$. Both `left` and `right` only move forward, and each makes at most $n$ moves, so the `while` loop runs at most $n$ times **in total**, not per step. Spreading the cost like this is **amortised** analysis, the same reasoning that makes dynamic-array append cheap.

The same shape handles **text**. *Longest piece of a string with no repeated letter*: keep a map from letter to its last position; when a repeat appears inside the window, jump `left` past the old copy.

```python
def longest_unique(s):
    last, left, best = {}, 0, 0
    for right, ch in enumerate(s):
        if ch in last and last[ch] >= left:
            left = last[ch] + 1
        last[ch] = right
        best = max(best, right - left + 1)
    return best
```

For "abcabcbb" the answer is 3 ("abc"). Notice that a hash map and a window work together.

:::qc lvl=2
q: In the variable-window code, why is the total work O(n) even though `while` sits inside `for`?
options: ["Python optimises nested loops", "left only moves forward, so across the whole run it moves at most n times"]
answer: 1
right: Right. The `while` body runs once for every step of `left`, and `left` never exceeds n, so all the `while` iterations together are at most n.
wrong: Count how many times left can ever move in the entire run, not per right.
:::

## When it works, and when it does not {lvl=3 id=s-when label="SDE-2"}

The method depends on one promise: **moving a pointer rules something out, so it never has to go back.**

| Variant | Signal | What guarantees the move is safe |
|---|---|---|
| Fixed window | "last k items", "every block of k" | Window size never changes |
| Pair from both ends | sorted array, pair or triple with a target | Sorted order: small + large tells which end to move |
| Reader and writer | in-place removal, partition | Writer never passes reader |
| Slow and fast | linked list loop or middle | Speed difference means a loop forces a meeting |
| Variable window, sum | contiguous, at least or at most a sum | All numbers positive: adding grows, removing shrinks |
| Variable window, distinct | contiguous, at most k different items | Adding can only raise the count, removing only lower it |

**Where it breaks:** with negative numbers, adding an item might lower the sum and removing one might raise it, so you can no longer tell which pointer to move. *Count the stretches that add up to exactly k, where numbers can be negative.* Use **prefix sums**: let $P_j$ be the total of the first $j$ items; a stretch from $i$ to $j$ sums to $P_j - P_i$. For each $j$, count earlier prefixes equal to $P_j - k$ in a hash map. That is again $O(n)$.

A neat extension: *exactly k different letters* is awkward for one window, but "at most k" is easy. Then exactly $k$ = at most $k$ minus at most $k-1$.

A real-world cousin: a **rate limiter** allowing 100 requests per rolling minute keeps a queue of recent request times, drops those older than 60 seconds from the front, and rejects a request if 100 remain. That is a sliding window over time. A cheaper fixed-minute counter lets a user send 100 requests at 0:59 and 100 more at 1:01, 200 in two seconds, which is the boundary flaw sliding windows avoid. [Inference: common design, not any particular company's.]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Neighbouring windows share almost everything: add the entering item, subtract the leaving one. {lvl=1}
2. On a sorted array, two pointers from both ends find a pair in O(n): too small moves left up, too big moves right down. {lvl=2}
3. Slow and fast pointers find loops and middles in linked lists; reader and writer pointers edit arrays in place. {lvl=2}
4. A variable window is O(n) because each pointer only moves forward: amortised cost. {lvl=2}
5. The method needs a monotonic rule (sorted order or positive numbers); with negatives use prefix sums and a hash map. {lvl=3}
6. Exactly k is often at most k minus at most k minus 1. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Check whether the window is inclusive: its length is right − left + 1, not right − left. {lvl=1}
- Pair-sum two pointers silently gives wrong answers on unsorted input: sort first or use a hash set. {lvl=2}
- A positive-numbers window fails on negatives; do not reuse it blindly. {lvl=3}
- Update the best answer inside the shrink loop for "shortest" problems, and after growing for "longest" problems. {lvl=2}
- Empty input and window larger than the array need their own check. {lvl=1}
:::
