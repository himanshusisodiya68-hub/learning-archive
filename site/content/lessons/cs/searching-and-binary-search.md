---
title: Searching and binary search
summary: How to find one thing among a million by asking about 20 yes-or-no questions, and how to write that search without a single off-by-one slip.
ncert: []
up_to: SDE-2
builds_on: [Big-O and growth of cost, Arrays and dynamic arrays, Decisions and loops]
notes_prompt: Explain to a friend how you could find any name in a phone book of a million names with only about 20 peeks, and why the book must be in order.
margin:
  - kind: history
    title: History
    text: Binary search was described in the 1940s and 50s, but a fully correct version took years to appear in print; Donald Knuth notes the first bug-free published code came in 1962. [Unverified]
  - kind: tip
    title: Interview favourite
    text: 'Whenever a problem says "sorted", "smallest value such that...", "largest value such that..." or hides a yes/no test that flips from no to yes exactly once, think binary search. It also works on answers, not only on arrays.'
  - kind: olympiad
    title: The famous bug
    text: In 2006 Joshua Bloch reported that the standard mid = (lo + hi) / 2 can overflow in languages with fixed-size integers when lo + hi is huge, and the bug had lived in widely used library code for years. Python integers do not overflow, but the safe habit is mid = lo + (hi - lo) // 2. [Unverified]
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Binary search appears in Ch. 2 (exercises) and as a tool throughout [Unverified]" }
  - { title: "J. Bentley, Programming Pearls", ref: "Column 4 Writing Correct Programs (binary search and invariants) [Unverified]" }
  - { title: "D. E. Knuth, The Art of Computer Programming, Vol. 3", ref: "Sorting and Searching: section on binary search [Unverified]" }
cards:
  - { front: "What does binary search need before it can work?", back: "Items in sorted order, and the ability to jump to the middle of the remaining range in one step (like an array index)." }
  - { front: "How many steps does binary search take on n sorted items?", back: "About log₂ n: each look throws away half of what is left. For a million items, about 20; for a billion, about 30." }
  - { front: "What is an invariant, and which one does lower-bound binary search keep?", back: "A statement true before and after every loop round. Here: everything before lo is smaller than x, everything from hi onward is at least x." }
  - { front: "What do bisect_left and bisect_right return?", back: "bisect_left: the first index where x could be inserted (first item >= x). bisect_right: the index after the last x (first item > x). Their difference is how many times x appears." }
  - { front: "What is 'binary search on the answer'?", back: "When a yes/no test flips from no to yes exactly once as a value grows, search the range of values for the flip point instead of searching an array." }
  - { front: "When is plain linear search the better choice?", back: "Unsorted data searched once (sorting costs more than scanning), very small lists, or data you can only read in order, such as a linked list or a file stream." }
core:
  idea: 'Looking at the middle of a sorted range tells you which half the target is in, so each look throws half of the remaining items away. Searching n sorted items therefore takes about log₂ n looks instead of n.'
  formulas:
    - tex: '\text{looks} = \lceil \log_2 n \rceil'
      label: 'Looks needed for n sorted items'
    - tex: '\text{mid} = lo + \lfloor (hi - lo)/2 \rfloor'
      label: 'The middle, written so it cannot overflow'
  conditions:
    - 'The data is sorted (or the yes/no test is monotone: no, no, no, yes, yes, yes)'
    - 'You can reach any position in one step, as in an array (not a linked list)'
    - 'Comparisons are consistent: if a is below b and b is below c, then a is below c'
  sign: 'Most bugs are off-by-one: decide first whether your range includes its right end, and keep that same meaning in the loop condition and in both updates.'
outcomes:
  - 'Explain why halving needs only about 20 looks for a million sorted items'
  - 'Write binary search from an invariant instead of from memory, without off-by-one bugs'
  - 'Use lower bound and upper bound to find the first, last and count of a value'
  - 'Use Python bisect to insert into and search sorted lists'
  - 'Apply binary search to a yes/no test over a range of answers'
opener:
  story: |
    Your team ships an app update every few days. On Monday, the login screen works. On Friday, after 1,024 changes by a dozen people, it is broken. Somewhere in those 1,024 changes is the one that did it. Reading all of them would take days.

    Engineers don't read them. They use a tool called `git bisect`: it picks one change from the middle, you test the app at that point, say "works" or "broken", and it jumps to the middle of the half that is left. After about ten rounds it says: "this is the one".

    Ten rounds for 1,024 changes. A thousand more changes would cost just one more round. How can the cost almost not grow?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A row of 16 boxes with the middle tested each round, discarding half"><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="12" y="30" width="16" height="22"/><rect x="30" y="30" width="16" height="22"/><rect x="48" y="30" width="16" height="22"/><rect x="66" y="30" width="16" height="22"/><rect x="84" y="30" width="16" height="22"/><rect x="102" y="30" width="16" height="22"/><rect x="120" y="30" width="16" height="22"/><rect x="138" y="30" width="16" height="22"/><rect x="156" y="30" width="16" height="22"/><rect x="174" y="30" width="16" height="22"/><rect x="192" y="30" width="16" height="22"/><rect x="210" y="30" width="16" height="22"/><rect x="228" y="30" width="16" height="22"/><rect x="246" y="30" width="16" height="22"/><rect x="264" y="30" width="16" height="22"/><rect x="282" y="30" width="16" height="22"/></g><rect x="138" y="30" width="16" height="22" style="fill:var(--c)"/><text x="12" y="22" style="font-size:10px;fill:var(--muted)">1,024 changes (shown as 16)</text><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="156" y="90" width="16" height="22"/><rect x="174" y="90" width="16" height="22"/><rect x="192" y="90" width="16" height="22"/><rect x="210" y="90" width="16" height="22"/><rect x="228" y="90" width="16" height="22"/><rect x="246" y="90" width="16" height="22"/><rect x="264" y="90" width="16" height="22"/><rect x="282" y="90" width="16" height="22"/></g><rect x="210" y="90" width="16" height="22" style="fill:var(--c)"/><text x="12" y="106" style="font-size:10px;fill:var(--ink)">round 2: half left</text><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="156" y="150" width="16" height="22"/><rect x="174" y="150" width="16" height="22"/><rect x="192" y="150" width="16" height="22"/><rect x="210" y="150" width="16" height="22"/></g><rect x="174" y="150" width="16" height="22" style="fill:var(--c)"/><text x="12" y="166" style="font-size:10px;fill:var(--ink)">round 3: quarter left</text><rect x="156" y="200" width="16" height="22" style="fill:none;stroke:var(--bad);stroke-width:2"/><text x="12" y="216" style="font-size:10px;fill:var(--bad)">found it</text><text x="312" y="236" style="font-size:10px;fill:var(--muted);text-anchor:end">each test halves the suspects</text></svg>'
life:
  - 'Looking up a word in a paper dictionary or a name in a printed phone directory: you open near the middle, then flip left or right.'
  - 'git bisect finds the commit that broke a program among thousands in about a dozen tests.'
  - 'Guessing a number between 1 and 100 with "higher" or "lower" hints: 7 guesses always win.'
  - 'Debugging by halving: comment out half the code and see whether the bug remains; a technician finds a faulty bulb in a long string of lights by testing the middle.'
  - 'Python bisect and database indexes use the same halving idea to keep sorted data searchable.'
models:
  - name: 'Ask the question that cuts the problem in half'
    text: 'The best question removes half the possibilities, whatever the answer. Doctors, detectives and quiz players all use it: twenty good yes/no questions can pinpoint one thing among a million.'
  - name: 'State what is always true'
    text: 'An invariant is a promise you keep through every step. In a budget, "rent is always set aside first"; in a loop, "the answer is always still inside my range". Keep the promise and you cannot go wrong.'
  - name: 'Order is stored work'
    text: 'Sorting costs effort once, and every later search is cheap. A well-labelled cupboard takes time to set up and saves time every day after. Ask whether you will search often enough to repay the tidying.'
links:
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'Binary search is the standard example of O(log n): the cost grows by one step each time the data doubles.'
    differs: 'Big-O measures; binary search is a method. The gain only exists because the data is sorted.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both avoid reading every item, so both beat a linear scan on big data.'
    differs: 'Binary search takes about log₂ n steps but also answers "nearest" and "how many between" questions; a hash table takes about 1 step but only exact matches.'
  - leaf: 'mat/invariants'
    name: 'Invariants'
    same: 'The loop invariant of binary search is the same proof tool as in olympiad maths: something that stays true at every step.'
    differs: 'In maths an invariant proves something is impossible; here it proves the loop is correct.'
next:
  q: 'Binary search only works on sorted data. How do you put a million items in order in the first place, and can anyone do it faster than about n log n comparisons?'
  leaf: 'cs/sorting'
  name: 'Sorting'
symbols:
  - s: 'n'
    means: 'number of items in the sorted list (count)'
  - s: '\log_2 n'
    means: 'how many times you can halve n before reaching 1 (count); about 20 for a million'
  - s: '\lceil x \rceil'
    means: 'round x up to the next whole number, since you cannot do half a look'
  - s: 'lo,\ hi'
    means: 'the two ends of the range still being searched (positions in the list)'
  - s: 'mid'
    means: 'the position in the middle of lo and hi (position)'
  - s: 'O(\log n)'
    means: 'cost grows by one step each time the data doubles'
---

:::hook
q: A friend secretly picks a whole number from 1 to 1,000,000 and answers only "higher" or "lower" to each guess. What is the most guesses you could ever need, if you play cleverly?
options: ["About 1,000", "About 20", "About 500,000"]
answer: 1
right: Right. Always guess the middle of what is left. Each answer halves the possibilities: 1,000,000 → 500,000 → 250,000 → ... → 1 in 20 steps, because 2²⁰ is just over a million.
wrong: Think about guessing the middle each time. After one answer, how many numbers are left? Keep halving and count the rounds.
:::

## Looking at every item {lvl=1 id=s-linear label="Foundations"}

The plainest way to find something in a list is **linear search**: start at the first item and check one by one until you find it or run out. If the list holds $n$ items, the worst case is $n$ checks, so the cost is O(n).

```python
def linear_search(items, target):
    for i, value in enumerate(items):
        if value == target:
            return i
    return -1          # -1 means "not found"
```

This needs nothing from the data: no order, no tricks. It works on a shuffled list, a file read line by line, or a linked list. For a few dozen items it is perfectly fine, and it is the right choice when you search an unsorted list just once.

But for a million items, checking all of them for every search is wasteful, especially if the list is already in order. A dictionary is in order, and nobody reads it from page one.

## The halving game {lvl=1 id=s-halving label="Foundations"}

Take the guessing game from the hook, with numbers from 1 to 100. The secret is 37.

| Guess | Answer | Numbers left |
|---|---|---|
| 50 | lower | 1 to 49 (49 numbers) |
| 25 | higher | 26 to 49 (24) |
| 37 | correct | done in 3 guesses |

Always guessing the middle means each answer removes **half** of what remains. So the number of guesses is how many times you can halve $n$ before hitting 1. Call it $\log_2 n$ (read "log base two of n"): for 100 numbers it is under 7, for a million it is 20, for a billion only 30.

A sorted list works exactly the same way. Look at the middle item. If it is bigger than your target, the target can only be in the left half; if smaller, in the right half. This is **binary search**.

:::figure caption="Binary search for 37 in a sorted list of 15 numbers. The shaded part is what each look rules out."
<svg viewBox="0 0 320 130" role="img" aria-label="Three rows of a sorted list showing the search range shrinking around 37">
<g style="font-size:10px;fill:var(--ink)" text-anchor="middle">
<g style="fill:none;stroke:var(--ink);stroke-width:1">
<rect x="10" y="12" width="20" height="20"/><rect x="30" y="12" width="20" height="20"/><rect x="50" y="12" width="20" height="20"/><rect x="70" y="12" width="20" height="20"/><rect x="90" y="12" width="20" height="20"/><rect x="110" y="12" width="20" height="20"/><rect x="130" y="12" width="20" height="20"/><rect x="150" y="12" width="20" height="20"/><rect x="170" y="12" width="20" height="20"/><rect x="190" y="12" width="20" height="20"/><rect x="210" y="12" width="20" height="20"/><rect x="230" y="12" width="20" height="20"/><rect x="250" y="12" width="20" height="20"/><rect x="270" y="12" width="20" height="20"/><rect x="290" y="12" width="20" height="20"/>
</g>
<text x="20" y="26">3</text><text x="40" y="26">9</text><text x="60" y="26">14</text><text x="80" y="26">21</text><text x="100" y="26">25</text><text x="120" y="26">30</text><text x="140" y="26">34</text><text x="160" y="26">37</text><text x="180" y="26">41</text><text x="200" y="26">48</text><text x="220" y="26">52</text><text x="240" y="26">60</text><text x="260" y="26">66</text><text x="280" y="26">71</text><text x="300" y="26">80</text>
<rect x="150" y="12" width="20" height="20" style="fill:none;stroke:var(--mat);stroke-width:2.5"/>
<text x="160" y="46" style="fill:var(--mat)">look 1: mid is 37</text>
</g>
<text x="10" y="58" style="font-size:10px;fill:var(--muted)">Searching for 48 instead: look 1</text><text x="10" y="69" style="font-size:10px;fill:var(--muted)">at 37 says "too small", so the</text><text x="10" y="80" style="font-size:10px;fill:var(--muted)">left half and 37 itself are out.</text>
<g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"><rect x="170" y="86" width="20" height="20"/><rect x="190" y="86" width="20" height="20"/><rect x="210" y="86" width="20" height="20"/><rect x="230" y="86" width="20" height="20"/><rect x="250" y="86" width="20" height="20"/><rect x="270" y="86" width="20" height="20"/><rect x="290" y="86" width="20" height="20"/></g>
<text x="10" y="100" style="font-size:10px;fill:var(--ink)">7 numbers left</text>
<text x="10" y="122" style="font-size:10px;fill:var(--muted)">then 3, then 1: at most 4 looks for 15 numbers</text>
</svg>
:::

:::qc lvl=1
q: A sorted list has 1,000,000,000 (a billion) items. About how many looks does binary search need in the worst case?
options: ["About 30", "About 1,000", "About 500 million"]
answer: 0
right: Right. 2³⁰ is a little over a billion, so 30 halvings are enough. A thousand times more data than a million items costs only 10 more looks.
wrong: Count the halvings: how many times can you halve a billion before reaching 1? Remember 2¹⁰ is about a thousand.
:::

## Writing it correctly {lvl=2 id=s-code label="SDE-1"}

The idea takes a minute; getting the code right is famously hard. Almost every bug is an **off-by-one**: a range that is one item too long or too short, or a loop that never ends. The cure is to decide, in words, what stays true.

Choose this promise, called the **invariant**: *if the target is in the list, it is somewhere in positions `lo` up to but not including `hi`.* (Half-open range: `lo` is in, `hi` is out.) Start with the whole list, `lo = 0`, `hi = len(items)`. Each round, look at the middle; whichever half cannot hold the target, cut away, keeping the promise.

```python
def binary_search(items, target):
    lo, hi = 0, len(items)          # target is in [lo, hi) if present
    while lo < hi:                  # range not empty
        mid = lo + (hi - lo) // 2
        if items[mid] == target:
            return mid
        if items[mid] < target:
            lo = mid + 1            # mid itself is ruled out
        else:
            hi = mid                # hi is excluded already
    return -1
```

Check the three edges. `lo = mid + 1` skips `mid`, which we just tested and which is too small; `hi = mid` also skips `mid`, because `hi` itself is outside the range. Both updates shrink the range, so the loop always ends. And when the range is empty (`lo == hi`), the invariant says the target is not there.

:::qc lvl=2
q: In the code above, what goes wrong if you write lo = mid instead of lo = mid + 1?
options: ["Nothing: it is equivalent", "It can loop forever, since mid may equal lo and the range never shrinks", "It returns the wrong answer but always stops"]
answer: 1
right: Right. With lo = 2 and hi = 3, mid is 2; setting lo = mid leaves lo = 2 and the range unchanged. The update must always shrink the range.
wrong: Try a tiny case: lo = 2, hi = 3. What is mid, and does lo change if you set lo = mid?
:::

## First, last, and how many {lvl=2 id=s-bounds label="SDE-1"}

Real lists have repeats: [2, 4, 4, 4, 7, 9]. "Find 4" is vague. Which 4? A cleaner tool answers a better question: **where is the first position whose value is at least x?** That is the **lower bound**.

```python
def lower_bound(a, x):
    lo, hi = 0, len(a)              # answer is in [lo, hi]; hi means "none"
    while lo < hi:
        mid = lo + (hi - lo) // 2
        if a[mid] < x:
            lo = mid + 1            # all of a[..mid] are too small
        else:
            hi = mid                # a[mid] might be the answer
    return lo
```

Invariant: everything before `lo` is smaller than `x`; everything from `hi` onward is at least `x`. When they meet, `lo` is the first item that is at least `x`. Is `x` present? Check `lo < len(a) and a[lo] == x`.

Change `<` to `<=` and you get the **upper bound**: the first position whose value is *greater than* x. Then:

- first 4: `lower_bound(a, 4)`, which is 1;
- one past the last 4: `upper_bound(a, 4)`, which is 4;
- how many 4s: `upper_bound - lower_bound`, which is 3.

Python ships both in the `bisect` module: `bisect_left` is the lower bound and `bisect_right` the upper bound. `bisect.insort(a, x)` inserts in the right place to keep the list sorted. [Inference: finding the place is O(log n), but inserting into a Python list still shifts items, so `insort` is O(n) overall.]

```python
import bisect
a = [2, 4, 4, 4, 7, 9]
bisect.bisect_left(a, 4)    # 1
bisect.bisect_right(a, 4)   # 4
bisect.bisect_left(a, 5)    # 4: where 5 would go
```

:::qc lvl=2
q: For a = [1, 3, 3, 3, 8], what do bisect_left(a, 3) and bisect_right(a, 3) return?
options: ["1 and 4", "1 and 3", "0 and 5"]
answer: 0
right: Right. The first 3 is at index 1; the first item greater than 3 is at index 4. Their difference, 3, is how many 3s there are.
wrong: bisect_left is the first position holding a value of at least 3. bisect_right is the first position holding a value greater than 3. Count indices from 0.
:::

## Searching on answers {lvl=3 id=s-answers label="SDE-2"}

Binary search does not need a list at all. It needs a **monotone test**: a yes/no question about a number $v$ that is "no" for small values and flips to "yes" for large ones, and never flips back: no, no, no, yes, yes, yes. The first yes is the answer, and you find it by halving the range of values.

Example: a courier must ship parcels in the given order within D days, loading a truck of capacity $c$ each day. What is the smallest capacity that works? Test "can we finish in D days with capacity $c$?" It is a simple pass over the parcels. And it is monotone: a bigger truck never hurts. So search $c$ between the heaviest parcel and the total weight.

```python
def smallest_ok(lo, hi, ok):        # ok(v): no,no,...,yes,yes
    while lo < hi:
        mid = lo + (hi - lo) // 2
        if ok(mid):
            hi = mid                # mid works; maybe something smaller
        else:
            lo = mid + 1            # mid fails; need more
    return lo
```

That is the same code as the lower bound. The cost is $O(\text{pass} \times \log(\text{range}))$: for a range of a billion values and a pass over 100,000 parcels, about $30 \times 10^5$ steps instead of $10^9 \times 10^5$. The same trick finds a square root to 9 decimal places by halving an interval of real numbers (about 30 rounds), the minimum speed to eat all the bananas in time, and the dose at which a drug first works.

The same pattern also explains `git bisect`: "is the bug present at commit $k$?" is a monotone test (works, works, broken, broken).

## When not to binary-search {lvl=3 id=s-limits label="SDE-2"}

Binary search has two prices. The data must be **sorted**, and you must be able to **jump** to the middle. A linked list cannot jump (reaching the middle takes O(n)), so binary search on it loses its advantage.

Sorting costs about $n \log n$ steps. If you search once, scanning (n steps) is cheaper than sorting then searching. If you search many times, sorting once pays for itself after roughly $\log n$ searches. When you also add and delete items constantly, keeping a plain array sorted costs O(n) per insert, and a balanced tree or a hash table is better. For exact-match only, a hash table (one step) beats binary search (log n steps) but cannot answer "the nearest value below x" or "how many between a and b".

[Inference: in practice, for lists under a few dozen items a plain scan is often as fast as binary search, because the loop is simpler and memory is read in order; the exact crossover depends on the machine.]

:::qc lvl=3
q: You will search an unsorted list of 10,000 items exactly once. What is the cheapest approach?
options: ["Sort, then binary search", "Linear search", "Build a hash table, then look up"]
answer: 1
right: Right. A single scan costs 10,000 steps. Sorting alone costs about 130,000 steps; building a hash table costs 10,000 and then you still have to look up. Preparation only pays off if you search many times.
wrong: Compare the preparation cost with the saving. Sorting 10,000 items costs more than one scan of them. How many searches would it take to pay it back?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Linear search checks items one by one: O(n), works on any data. {lvl=1}
2. Binary search halves a sorted range at every look, so it needs about log₂ n looks: 20 for a million, 30 for a billion. {lvl=1}
3. It works only when the data is sorted and you can jump straight to the middle. {lvl=1}
4. Write it from an invariant: "the answer lies in [lo, hi)"; every update must shrink the range. {lvl=2}
5. Lower bound is the first item that is at least x, upper bound the first item greater than x; their difference counts the copies. Python bisect_left and bisect_right do this. {lvl=2}
6. Binary search works on any yes/no test that flips once from no to yes, so it can search a range of answers, not only a list. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Running binary search on unsorted data returns nonsense without any error message. Sort first or do not use it. {lvl=1}
- Mixing conventions: using hi = len(a) - 1 in one place and hi = len(a) in another is the classic off-by-one. Pick one meaning and write it in a comment. {lvl=2}
- Setting lo = mid or hi = mid - 1 inconsistently can leave the range unchanged and loop forever. {lvl=2}
- In fixed-size integer languages, (lo + hi) / 2 can overflow; use lo + (hi - lo) / 2. {lvl=3}
- Forgetting the "not found" case: lower_bound can return len(a), so check the index before reading a[i]. {lvl=2}
- Binary search on the answer fails if the test is not monotone. Prove that a bigger value never makes things worse before searching. {lvl=3}
:::
