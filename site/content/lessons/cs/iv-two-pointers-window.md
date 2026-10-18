---
title: Two pointers and sliding window
summary: Two markers walking along a list, each moving only one way, answer in one pass what a double loop answers in many.
ncert: []
up_to: SDE-2
builds_on: [Arrays and dynamic arrays, Sorting, Big-O and growth of cost, Arrays and hashing patterns]
notes_prompt: Explain to a friend why a fitness app can find your best 7-day step count without re-adding seven numbers for every day.
margin:
  - kind: history
    title: History
    text: 'Sliding windows were not invented for interviews: network protocols such as TCP use a "window" of packets sent but not yet acknowledged, which slides forward as acknowledgements arrive.'
  - kind: tip
    title: Interview favourite
    text: 'Before coding a window, say the rule out loud: "the window is valid when ..., so I grow on the right and shrink on the left." If you cannot finish that sentence, the pattern may not apply.'
  - kind: olympiad
    title: Why moving is safe
    text: 'Each pointer move must be justified: "no answer that I skip can be better than the one I keep." That one-line argument is what a proof of a two-pointer algorithm consists of.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Sorting, and the amortised analysis of aggregate cost [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Sorting and searching: pairs and sweeps [Unverified]" }
cards:
  - { front: "When do you use opposite-end pointers?", back: "On sorted data (or a symmetric shape such as a palindrome). Compare the two ends and move the one whose move can only help." }
  - { front: "Why is two-pointer pair search O(n) and not O(n^2)?", back: "Each step moves a pointer inward and never back. At most n moves in total." }
  - { front: "Fixed window: the update rule?", back: "Add the item entering on the right, subtract the item leaving on the left. O(1) per slide." }
  - { front: "Variable window: what is the loop skeleton?", back: "For each right end: add the new item. While the window is invalid (or, for shortest, while it is valid), shrink from the left. Record the answer." }
  - { front: "How do you count subarrays with exactly k distinct values?", back: "atMost(k) minus atMost(k - 1). Counting 'at most' is easy with a window, 'exactly' is not." }
  - { front: "Why does the window method fail with negative numbers?", back: "Adding an item may lower the total and removing may raise it, so there is no safe rule for moving either end." }
core:
  idea: 'Replace a double loop by two markers that each move in one direction only. Because neither marker ever goes back, the total moves are at most $2n$, so the work is $O(n)$ provided every move is justified by "nothing I skip can be better".'
  formulas:
    - tex: '\text{new sum} = \text{old sum} + a_{\text{in}} - a_{\text{out}}'
      label: 'Fixed window: slide in O(1)'
    - tex: '\text{exactly}(k) = \text{atMost}(k) - \text{atMost}(k-1)'
      label: 'Counting windows with exactly k of something'
  conditions:
    - 'Opposite ends: data sorted, or the answer is symmetric about the middle'
    - 'Variable window: validity is monotone, so growing never helps an invalid window recover in the wrong direction (typically non-negative numbers, or counts of distinct things)'
    - 'Each pointer only moves forward (or inward), never back'
    - 'You need contiguous stretches, not arbitrary subsets'
  sign: 'The commonest mistake is applying a window to data with negative numbers. Check the monotone-validity condition before you write code.'
outcomes:
  - 'Pick between opposite-end, read-and-write, fixed window and variable window from the clue words'
  - 'Write each template and say in one line why its pointer moves are safe'
  - 'Count windows with exactly k of something using at-most-k'
  - 'Recognise when a window fails, such as with negative numbers'
  - 'Map a new problem onto one of thirteen catalogued problem types'
opener:
  story: |
    Your fitness app shows a banner: **"Your best 7-day streak: 71,420 steps."** You have three years of daily step counts, about 1,100 numbers. How did it find the best week?

    The slow way: for every starting day, add up seven numbers. That is 7 additions for each of about 1,100 days. Fine for a phone. But a smartwatch company running this for every user, for every possible window length, would drown in additions.

    Look at two neighbouring weeks, Monday to Sunday and Tuesday to Monday. Six of the seven days are the same! Only one day leaves and one enters. So why re-add the six?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A row of step-count bars with a bracket covering seven days sliding one day to the right"><g style="fill:color-mix(in srgb,var(--c) 30%,var(--surface));stroke:var(--c)"><rect x="20" y="130" width="22" height="50"/><rect x="46" y="100" width="22" height="80"/><rect x="72" y="140" width="22" height="40"/><rect x="98" y="90" width="22" height="90"/><rect x="124" y="110" width="22" height="70"/><rect x="150" y="80" width="22" height="100"/><rect x="176" y="120" width="22" height="60"/><rect x="202" y="95" width="22" height="85"/><rect x="228" y="135" width="22" height="45"/><rect x="254" y="105" width="22" height="75"/></g><line x1="14" y1="180" x2="290" y2="180" class="axis" style="stroke:var(--ink)"/><path d="M46 70 L46 62 L176 62 L176 70" style="fill:none;stroke:var(--c);stroke-width:2.5"/><text x="60" y="52" style="font-size:11px;fill:var(--c)">window of 7 days</text><path d="M72 208 L72 216 L202 216 L202 208" style="fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:5 3"/><text x="86" y="232" style="font-size:11px;fill:var(--muted)">slide one day: one out, one in</text><text x="14" y="198" style="font-size:10px;fill:var(--muted)">out</text><text x="46" y="198" style="font-size:10px;fill:var(--muted)">...</text></svg>'
life:
  - 'A weather app finds the hottest stretch of five consecutive days by sliding along the forecast.'
  - 'TCP, which carries web pages to your phone, keeps a window of packets "in flight" and slides it as acknowledgements arrive.'
  - 'A cricket scoreboard''s "best partnership" or "runs in the last 5 overs" is a window over the ball-by-ball list.'
  - 'A spell-check tool compares a word read from the left end with the same word read from the right end to test for palindromes.'
models:
  - name: 'Update, do not recompute'
    text: 'When the situation changes by a little, change your answer by a little. A shopkeeper updates the till total with each sale rather than re-adding the day''s bills.'
  - name: 'Squeeze from both ends'
    text: 'When you know how the answer behaves at the extremes (too low, too high), compare the ends and throw away the side that cannot contain the answer. Negotiations and number-guessing games both work this way.'
  - name: 'Prove before you discard'
    text: 'Skipping options is only safe when you can argue that nothing you skip is better. Good decisions in life and money have the same shape: say why the discarded options lose.'
links:
  - leaf: 'cs/two-pointers-and-sliding-window'
    name: 'Two pointers and sliding window (competitive programming)'
    same: 'The same two pointers on the same lists; the algorithm is identical.'
    differs: 'This lesson is a pattern catalogue for interviews, with clue words, bug lists and problem families; the other builds the technique from first principles.'
  - leaf: 'cs/iv-arrays-and-hashing'
    name: 'Arrays and hashing patterns'
    same: 'Both turn a double loop into one pass.'
    differs: 'Hashing remembers the past in a table and costs memory; pointers remember it in two positions and use almost none, but need order or monotone validity.'
  - leaf: 'cs/sorting'
    name: 'Sorting'
    same: 'Opposite-end pointers need the data sorted, so sorting is often the first step.'
    differs: 'Sorting costs O(n log n) and may lose the original positions, which matters if the answer asks for indices.'
next:
  q: 'A singly linked list has no index, so you cannot jump to the middle or look at both ends. Can a slow and a fast pointer find the middle, or discover a loop, in one pass?'
  leaf: 'cs/iv-linked-list-tricks'
  name: 'Linked list tricks'
symbols:
  - s: 'n'
    means: 'number of items in the list (count)'
  - s: 'k'
    means: 'a limit such as the window length or the allowed number of distinct values (count)'
  - s: 'a_{\text{in}}'
    means: 'the item entering the window on the right (same unit as the list)'
  - s: 'a_{\text{out}}'
    means: 'the item leaving the window on the left (same unit as the list)'
  - s: 'O(n)'
    means: 'work grows in step with the list length: one pass'
---

:::hook
q: You slide a 7-day window along 1,100 days of data. Re-adding all seven numbers each time costs about 7,700 additions. How many additions does the slide-and-update method need after the first week?
options: ["About 1,100 (one add, one subtract per slide)", "About 7,700", "About 1,100 squared"]
answer: 0
right: Right. After the first week, each slide adds the day that enters and subtracts the day that leaves, a constant amount of work. The window length does not matter any more.
wrong: Think about what changes between neighbouring weeks: six of seven days are shared. How much new work does that leave?
:::

## The signal {lvl=1 id=s-signal label="Foundations"}

Look for these clues.

- *sorted array* and *pair, triple, or two ends*: opposite-end pointers.
- *in place*, *remove duplicates*, *move all zeros*: a reader pointer and a writer pointer.
- *every window of length $k$*, *best $k$ in a row*: a fixed window.
- *longest or shortest stretch such that ...*, *at most $k$ different*: a variable window.
- *count the stretches with exactly $k$ ...*: at-most-$k$ twice.

All of them say **contiguous** or **neighbouring**. Subsets that skip items need other tools.

The brute force checks every pair of positions: $O(n^2)$. The key fact behind the speed-up is that each pointer only moves forward, so over the whole run the pointers move at most $2n$ steps.

## Opposite ends {lvl=1 id=s-opposite label="Foundations"}

In a sorted list, put one marker at the smallest item and one at the largest. If their sum is too small, the left marker is stuck with a value too small to pair with anything now, so move it right. If the sum is too big, the right marker is too large for everything left, so move it left. Each step discards one item for good.

```python
def pair_sorted(a, target):
    lo, hi = 0, len(a) - 1
    while lo < hi:
        s = a[lo] + a[hi]
        if s == target:
            return lo, hi
        if s < target:
            lo += 1
        else:
            hi -= 1
    return None
```

Read it as: "if the pair is too small, make it bigger by moving the small end up; if too big, bring the big end down." Time $O(n)$, extra memory $O(1)$. This is the answer to the question the last lesson left open.

The same two ends can check symmetry: a palindrome (a phrase reading the same both ways) is tested by comparing the left and right ends and moving inward, skipping punctuation.

```python
def is_palindrome(s):
    lo, hi = 0, len(s) - 1
    while lo < hi:
        while lo < hi and not s[lo].isalnum(): lo += 1
        while lo < hi and not s[hi].isalnum(): hi -= 1
        if s[lo].lower() != s[hi].lower(): return False
        lo += 1; hi -= 1
    return True
```

:::qc lvl=1
q: In pair_sorted on [1, 3, 4, 6, 9] with target 7, the first sum is 1 + 9 = 10. Which pointer moves?
options: ["lo moves right", "hi moves left", "Both move"]
answer: 1
right: Right. The sum is too big, and 9 is too large to pair with 1 or anything bigger than 1, so 9 can be dropped. Next the sum is 1 + 6 = 7.
wrong: Is 10 more or less than 7? Which end holds the item that is too big?
:::

## Reader and writer, and three-way splits {lvl=2 id=s-fastslow label="SDE-1"}

To edit a list in place, use two pointers moving the same way: a **reader** that looks at every item and a **writer** that marks where the next kept item goes. The writer never passes the reader, so nothing is overwritten before it is read.

```python
def dedupe_sorted(a):
    w = 0
    for r in range(len(a)):
        if w == 0 or a[r] != a[w - 1]:
            a[w] = a[r]
            w += 1
    return w            # a[:w] now holds the distinct values
```

Moving all zeros to the end is the same loop with a different keep rule (keep when the item is not zero), then fill the rest with zeros.

Sorting a list that holds only the values 0, 1 and 2 in one pass uses **three** pointers: `lo` (end of the zeros), `mid` (the reader) and `hi` (start of the twos).

```python
def sort_colours(a):
    lo, mid, hi = 0, 0, len(a) - 1
    while mid <= hi:
        if a[mid] == 0:
            a[lo], a[mid] = a[mid], a[lo]; lo += 1; mid += 1
        elif a[mid] == 1:
            mid += 1
        else:
            a[mid], a[hi] = a[hi], a[mid]; hi -= 1
```

Notice that after swapping with `hi` the reader does not move: the item brought in from the right has not been looked at yet.

A slow-and-fast pair that moves at different *speeds* is the star of the next lesson (linked lists), where it finds the middle and detects loops.

## Fixed windows {lvl=2 id=s-fixed label="SDE-1"}

A **window** is a block of neighbouring items. For a fixed length $k$, compute the first window's total, then slide: add the item entering, subtract the item leaving.

```python
def best_window(a, k):
    cur = sum(a[:k])
    best = cur
    for i in range(k, len(a)):
        cur += a[i] - a[i - k]
        best = max(best, cur)
    return best
```

Read it as: "new total = old total plus the item that came in minus the item that went out". Each slide costs one addition and one subtraction, so the whole scan is $O(n)$ whatever $k$ is.

The same shape tracks anything you can update by adding and removing one item: a count of vowels, the number of distinct values (with a dict), a product (careful with zeros).

## Variable windows {lvl=2 id=s-variable label="SDE-1"}

When the length is part of the question, grow on the right and shrink on the left. Let `right` visit every position once. After adding the new item, shrink the left end for as long as the window is in the wrong state.

**Longest valid stretch.** Shrink while the window is *invalid*. Example: the longest stretch of letters with no repeat. Remember the last position of each letter; when a letter repeats, jump the left end just past its previous position.

```python
def longest_no_repeat(s):
    last, left, best = {}, 0, 0
    for right, ch in enumerate(s):
        if ch in last and last[ch] >= left:
            left = last[ch] + 1
        last[ch] = right
        best = max(best, right - left + 1)
    return best
```

**Shortest valid stretch.** Shrink while the window is *valid*, recording the length each time. Example: the shortest stretch of positive numbers with total at least a target.

```python
def shortest_with_sum(a, target):      # positive numbers only
    left = total = 0
    best = float("inf")
    for right, x in enumerate(a):
        total += x
        while total >= target:
            best = min(best, right - left + 1)
            total -= a[left]
            left += 1
    return 0 if best == float("inf") else best
```

Why is $O(n)$ true with a `while` inside a `for`? The left pointer only ever moves right and ends at most at $n$, so over the whole run it moves at most $n$ times. This is **amortised** analysis: some steps are slow, but the total is small.

Why is shrinking safe? With positive numbers, once the window $[\text{left}, \text{right}]$ reaches the target, any window starting at the same left but ending later is longer and so no better. We can drop left for good. That is **monotone validity**.

:::figure caption="A variable window: grow right (solid), shrink left (dashed). Both ends only move forward."
<svg viewBox="0 0 320 120" role="img" aria-label="Two stages of a window over a row of cells, the right edge moving first then the left edge">
<g style="fill:none;stroke:var(--ink)">
<rect x="20" y="40" width="26" height="26"/><rect x="46" y="40" width="26" height="26"/><rect x="72" y="40" width="26" height="26"/><rect x="98" y="40" width="26" height="26"/><rect x="124" y="40" width="26" height="26"/><rect x="150" y="40" width="26" height="26"/><rect x="176" y="40" width="26" height="26"/><rect x="202" y="40" width="26" height="26"/><rect x="228" y="40" width="26" height="26"/><rect x="254" y="40" width="26" height="26"/>
</g>
<rect x="46" y="38" width="104" height="30" rx="3" style="fill:none;stroke:var(--mat);stroke-width:3"/>
<text x="20" y="30" style="font-size:11px;fill:var(--mat)">step 1: grow right</text>
<path d="M150 80 L180 80" style="stroke:var(--mat);stroke-width:2"/>
<rect x="72" y="86" width="104" height="26" rx="3" style="fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:5 3"/>
<text x="190" y="104" style="font-size:11px;fill:var(--muted)">step 2: shrink left</text>
</svg>
:::

:::qc lvl=2
q: Which statement about the shortest-with-sum window is correct?
options: ["It needs the numbers to be positive", "It works unchanged with negative numbers", "It needs the list to be sorted"]
answer: 0
right: Right. Positivity makes a longer window never smaller in total, which is what justifies moving the left end.
wrong: What property of the numbers lets us say that dropping the left end can only lower the total?
:::

## The at-most-k trick {lvl=3 id=s-atmost label="SDE-2"}

Counting windows with *exactly* $k$ distinct values is awkward, because a window with $k$ distinct values can become invalid (too many) or stay valid when it shrinks (fewer than $k$). But counting windows with **at most** $k$ is easy: growing can only break the rule, shrinking can only repair it.

For each right end, the number of valid windows ending there is the window's length, since every start from `left` to `right` works. Adding those up gives the count.

```python
def at_most_k_distinct(a, k):
    if k < 0:
        return 0
    cnt, left, res = {}, 0, 0
    for right, x in enumerate(a):
        cnt[x] = cnt.get(x, 0) + 1
        while len(cnt) > k:
            cnt[a[left]] -= 1
            if cnt[a[left]] == 0:
                del cnt[a[left]]
            left += 1
        res += right - left + 1
    return res
```

Then $\text{exactly}(k) = \text{atMost}(k) - \text{atMost}(k-1)$. Read it as: "windows with at most $k$, minus those with fewer than $k$, leaves exactly $k$." The same recipe counts stretches with exactly $k$ odd numbers (count odds instead of distinct values).

**Smallest stretch containing everything needed.** This variable window needs two counters: how many of each needed letter are still missing, and a total `missing`. Shrink while the window already covers the need.

```python
from collections import Counter

def min_window(s, t):
    need, missing = Counter(t), len(t)
    left, best = 0, (0, -1)
    for right, ch in enumerate(s):
        if need[ch] > 0: missing -= 1
        need[ch] -= 1
        if missing == 0:
            while need[s[left]] < 0:
                need[s[left]] += 1; left += 1
            if best[1] < 0 or right - left < best[1] - best[0]: best = (left, right)
            need[s[left]] += 1; missing += 1; left += 1
    return s[best[0]:best[1] + 1]
```

## When it fails {lvl=3 id=s-fails label="SDE-2"}

- **Negative numbers.** Adding an item can lower the total, so a window that is too small might become valid by growing, and a window that is large enough might lose validity by shrinking. Use prefix sums with a map (previous lesson) or a monotonic deque for window maxima.
- **Non-contiguous questions.** Subsets with gaps need sorting plus opposite ends, or a table.
- **Unsorted data for opposite ends.** The "discard one side" argument needs order.

For the **maximum of every window of length $k$**, a plain window is not enough, since the maximum is not updatable by subtraction. Keep a deque of candidate indices in decreasing order of value; drop smaller values from the back as larger ones arrive, and drop the front when it leaves the window. Each index enters and leaves once, so $O(n)$.

## The catalogue {lvl=3 id=s-catalogue label="SDE-2"}

| Variant | Signal | Change to the template |
|---|---|---|
| Opposite ends | sorted, pair or symmetry | move the end whose move can only help |
| Fix one, then opposite ends | triple, quadruple sums | sort, loop on one, two pointers on the rest; skip repeats |
| Reader and writer | in place, remove, move | writer marks the next keep position |
| Three-way partition | values from a tiny set | lo, mid, hi pointers; do not advance mid after a swap with hi |
| Fixed window | every block of length k | add the entering item, subtract the leaving one |
| Variable, longest | longest stretch such that | shrink while invalid |
| Variable, shortest | shortest stretch such that | shrink while valid, record each time |
| At-most-k count | exactly k, count the stretches | atMost(k) minus atMost(k - 1) |

The **problem types** below are described in our own words; the names are families.

1. **Pair in sorted data with a target total.** Opposite ends.
2. **Triples summing to zero.** Sort, fix one, opposite ends on the rest, skip repeated values.
3. **Palindrome test ignoring punctuation.** Opposite ends moving inward.
4. **Two vertical walls holding the most water.** Opposite ends; always move the shorter wall, since moving the taller one can only shrink the width and the height stays capped by the short wall.
5. **Trapped rain between bars.** Opposite ends with the best height seen from each side; process the side with the lower best.
6. **Remove repeats or zeros in place.** Reader and writer.
7. **Sort three kinds of item in one pass.** Three-way partition.
8. **Best total of a fixed number of days.** Fixed window.
9. **Longest stretch without a repeated letter.** Variable window, longest.
10. **Shortest stretch with total at least a target.** Variable window, shortest (positives).
11. **Longest stretch with at most $k$ distinct values.** Variable window, longest.
12. **Smallest stretch containing all the needed letters.** Variable window with missing counter.
13. **Longest run of 1s if you may flip at most $k$ zeros.** Variable window, longest, counting zeros.
14. **Count stretches with exactly $k$ distinct values or odd numbers.** At-most-$k$ twice.

:::qc lvl=3
q: You must count stretches containing exactly 3 odd numbers. Which approach?
options: ["atMost(3) minus atMost(2)", "A fixed window of length 3", "Sort, then opposite ends"]
answer: 0
right: Right. Counting "at most" is easy with a window; subtracting the "at most 2" count leaves exactly 3.
wrong: The window length is not fixed and the order must be kept. Which trick turns "exactly" into two easy "at most" counts?
:::

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- **Using a window with negative numbers.** Check monotone validity first.
- **Off-by-one in the length.** The length of the window from `left` to `right` is `right - left + 1`.
- **Shrinking with `if` instead of `while`.** One item may not be enough to restore validity.
- **Not recording the answer inside the shrink loop** for the shortest-window variant. The best moment is just before the window stops being valid.
- **Moving `mid` after the swap with `hi`.** The new item has not been inspected.
- **Forgetting to skip repeats** in triple-sum, which duplicates answers.
- **Using `lo <= hi` for a pair.** The same item would pair with itself; use `lo < hi`.
- **Deleting a zero-count key** from a distinct-count dict: without it, `len(cnt)` stays too large.
- **Sorting when positions are asked for.** Keep original indices alongside the values.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Two pointers that each move one way turn O(n squared) into O(n). {lvl=1}
2. Sorted data and a pair: compare the ends and move the one that can only help. {lvl=1}
3. Reader and writer pointers edit a list in place. {lvl=2}
4. Fixed window: add the entering item, subtract the leaving one. {lvl=2}
5. Variable window: grow right, shrink left while invalid (longest) or valid (shortest). {lvl=2}
6. Exactly k equals at most k minus at most k - 1. {lvl=3}
7. Negative numbers break window methods; use prefix sums with a map. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Say the rule that makes each pointer move safe: "nothing I skip can be better". {lvl=2}
- Use `while`, not `if`, to shrink. {lvl=2}
- Window length is `right - left + 1`. {lvl=1}
- Windows need monotone validity; with negative numbers, switch to prefix sums and a map. {lvl=3}
- For the maximum of every window, use a deque of candidates, not a plain sum. {lvl=3}
- Sorting destroys positions; if the question asks for indices, store them first. {lvl=2}
:::
