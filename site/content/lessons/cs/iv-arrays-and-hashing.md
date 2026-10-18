---
title: Arrays and hashing patterns
summary: Most "find, count or match" interview questions on a list are one trick in disguise, remembering what you have already seen.
ncert: []
up_to: SDE-2
builds_on: [Arrays and dynamic arrays, Hash tables, Big-O and growth of cost]
notes_prompt: Explain to a friend how remembering what you have already seen turns a slow double loop into a single pass, using the restaurant-bill puzzle.
margin:
  - kind: history
    title: History
    text: 'The "two-sum" question became a famous warm-up because it separates people who loop twice from people who remember. [Unverified] Many interview-prep lists begin with it for that reason.'
  - kind: tip
    title: Interview favourite
    text: 'Say the brute force out loud first, then name the repeated work ("I keep re-checking the same numbers") and ask what a dictionary could remember. Interviewers listen for that sentence.'
  - kind: olympiad
    title: Why it works
    text: 'Every pattern here trades memory for time: one pass plus a table of what you have seen. When memory is also tight, the array itself can be the table (see index tricks below).'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Hash tables chapter [Unverified: Ch. 11]" }
  - { title: "G. Laakmann McDowell, Cracking the Coding Interview", ref: "Arrays and strings; hash tables [Unverified: Ch. 1]" }
cards:
  - { front: "What is the signal for a seen-set or frequency map?", back: "Words like duplicate, first repeat, how many times, anagram, majority. The question depends on what you met earlier in the list." }
  - { front: "Pair with target sum in one pass: what do you store and when?", back: "Store value to index. For each x look up target - x first, then store x. Checking before storing stops an item pairing with itself." }
  - { front: "How do you group items that are the same up to rearrangement?", back: "Compute a canonical key (for words, the sorted letters), then use a dict from key to list of items." }
  - { front: "Prefix sum plus hashmap: why is the key run - k?", back: "A subarray ending here has sum k exactly when some earlier prefix equals run - k. The map counts how many earlier prefixes had each value." }
  - { front: "Why start the prefix map with {0: 1}?", back: "It stands for the empty prefix, so subarrays that begin at index 0 are counted." }
  - { front: "When can the array itself act as the hash table?", back: "When values are known to lie in 1 to n. Put value x in slot x - 1 and the array records which values are present, in O(1) extra space." }
core:
  idea: 'When an answer about a list depends on what you have already seen, keep a table of what you have seen: a set, a count, a value-to-index map, or a map of running totals. One pass with $O(1)$ lookups replaces a double loop.'
  formulas:
    - tex: '\text{need} = \text{target} - x'
      label: 'Pair with target: look up the missing partner'
    - tex: '\text{run} - \text{earlier} = k'
      label: 'Subarray sum k: look up run - k among earlier prefixes'
  conditions:
    - 'Items can be hashed: numbers, strings, tuples (not lists that change)'
    - 'Equality is exact: the question is "same as", not "close to" or "between"'
    - 'Extra memory of order n is acceptable (otherwise use the index tricks)'
    - 'The average-case O(1) lookup of a hash table is trusted'
  sign: 'Check the table before you insert the current item, or an item will match itself. Then ask whether duplicates, negatives and an empty list need special handling.'
outcomes:
  - 'Recognise the clue words that point to a seen-set, frequency map or grouping key'
  - 'Write the one-pass pair-with-target template and explain why it is O(n)'
  - 'Group items by a canonical key'
  - 'Count subarrays with a given sum using prefix sums and a map'
  - 'Use the array as its own hash table when memory is tight'
opener:
  story: |
    Four friends finish dinner and the bill app says the **budget is exactly ₹800**. The menu lists 40 dishes with prices. Your friend says: "Let's see if two dishes add up to ₹800." She picks a dish, then scans the whole menu for a partner. Then the next dish, and the next.

    That works for 40 dishes. But now picture a delivery app with a million items and a coupon that must match an exact total. Pairing every item with every other is about **half a trillion** checks.

    Notice what your friend keeps doing: she re-reads the same prices again and again. What if, as she read each price, she jotted it on a sticky note, and for every new price asked one question: "Is the price that completes me already on my notes?"
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A menu with prices, a notes pad, and two dishes joined to make the exact bill"><rect x="14" y="22" width="130" height="196" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="26" y="44" style="font-size:12px;fill:var(--ink);font-weight:700">Menu</text><g style="font-size:11px;fill:var(--ink)"><text x="26" y="68">Paneer 350</text><text x="26" y="90">Dal 220</text><text x="26" y="112">Naan 60</text><text x="26" y="134">Biryani 450</text><text x="26" y="156">Lassi 90</text><text x="26" y="178">Kheer 150</text></g><rect x="22" y="56" width="116" height="16" rx="3" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="22" y="122" width="116" height="16" rx="3" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M142 64 C176 64 176 130 142 130" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="170" y="52" style="font-size:11px;fill:var(--c)">350 + 450</text><text x="170" y="68" style="font-size:11px;fill:var(--c)">= 800</text><rect x="196" y="100" width="108" height="118" rx="6" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"/><text x="206" y="120" style="font-size:11px;fill:var(--ink);font-weight:700">Notes so far</text><g style="font-size:11px;fill:var(--ink)"><text x="206" y="142">350 seen</text><text x="206" y="162">220 seen</text><text x="206" y="182">60 seen</text></g><text x="204" y="206" style="font-size:10px;fill:var(--muted)">450: is 350 here? yes</text></svg>'
life:
  - 'A payments app flags a repeat transaction ID by checking whether it has already been seen today.'
  - 'A spell-checker counts how often each word appears to find the most common typos.'
  - 'A photo app groups pictures that are rearrangements of one another, such as burst shots, by a shared signature.'
  - 'A fitness app answers "on how many days did I walk exactly 8,000 more steps than on some earlier day?" with running totals.'
models:
  - name: 'Do not redo work you have already done'
    text: 'Brute force repeats the same comparisons. Whenever you notice the repetition, a notebook of past results removes it. This is the idea behind caching, budgeting spreadsheets and keeping a to-do list.'
  - name: 'Ask what would complete me'
    text: 'Instead of searching for a match, compute the one thing that would complete the current item and check for it. Hiring works this way too: write down the missing skill, then look for it.'
  - name: 'Cumulative totals hide differences'
    text: 'A running balance tells you any stretch''s total by subtraction. Bank statements, odometers and cricket scorecards use the same trick: the runs in overs 10 to 20 are the score at 20 minus the score at 10.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Every pattern here is a hash table doing what it does best, answering "have I seen this exact key?" in about one step.'
    differs: 'The hash-tables lesson explains how the table works inside; this lesson is about spotting which questions it solves.'
  - leaf: 'cs/arrays'
    name: 'Arrays'
    same: 'When values are small whole numbers, an array indexed by value is itself a hash table with no collisions.'
    differs: 'A real hash table accepts any key (strings, tuples) but pays for hashing and spare slots; the array version needs a known small range.'
  - leaf: 'cs/cp-prefix-sums'
    name: 'Prefix sums and difference arrays'
    same: 'Both rest on "range total = prefix at the end minus prefix at the start".'
    differs: 'Plain prefix sums answer a query for a chosen range; adding a map lets you search for any range that has a given total.'
next:
  q: 'Pairs and subarrays are about two positions. In a sorted list, can two fingers walking inward from both ends find the pair with no table at all, using no extra memory?'
  leaf: 'cs/iv-two-pointers-window'
  name: 'Two pointers and sliding window'
symbols:
  - s: 'n'
    means: 'number of items in the list (count)'
  - s: 'k'
    means: 'the target total, or the group size, depending on the problem (same unit as the list items)'
  - s: 'x'
    means: 'the item currently being looked at'
  - s: 'O(n)'
    means: 'work grows in step with the list length: one pass'
  - s: 'O(n^2)'
    means: 'work grows with the square of the length: a loop inside a loop'
  - s: '\text{run}'
    means: 'running total of the list so far (prefix sum, same unit as the items)'
---

:::hook
q: A list has 1,000,000 prices. Roughly how many checks does the "pair every item with every other" method need to look for two that sum to a target?
options: ["About a million", "About half a trillion", "About a thousand"]
answer: 1
right: Right. A million times a million, halved because each pair is counted once, is about 500 billion checks. One pass with a table of what you have seen does about a million.
wrong: Every item is paired with every other, so the work grows as the square of the list length. A million items is a million times a million, then halved. Try it again.
:::

## The signal {lvl=1 id=s-signal label="Foundations"}

Interview problems on lists come in families. The first family is recognised by the **clue words**:

- *duplicate*, *first repeated*, *have I seen this*: the answer depends on the past.
- *how many times*, *most common*, *anagram*, *majority*: you need a count per item.
- *two items that add up to*, *pair with difference*: for each item there is exactly one partner that would complete it.
- *group the ones that are the same under...*: items share a hidden label.
- *subarray with sum*: a stretch of the list whose total must match.

The cure for all of them is the same. Walk the list once. Keep a table of what you have met. For each item ask the table one question.

The brute force for "any duplicate?" compares every pair, which is $O(n^2)$. The pattern below is $O(n)$.

```python
def has_duplicate(nums):
    seen = set()
    for x in nums:
        if x in seen:        # one question to the table
            return True
        seen.add(x)          # then remember
    return False
```

:::qc lvl=1
q: Which clue most strongly suggests a frequency map?
options: ["Find the middle of the list", "Report the most common word", "Reverse the list"]
answer: 1
right: Right. "Most common" means a count per word, and a dict from word to count is exactly that.
wrong: Which of these needs a number remembered for every distinct item?
:::

## The core templates {lvl=2 id=s-templates label="SDE-1"}

There are three one-pass shapes. Learn them until you can write them without thinking.

**Frequency map.** Count how often each item occurs. Python's `Counter` is a dict from item to count. Two strings are rearrangements of each other exactly when their counters are equal.

```python
from collections import Counter

def is_anagram(a, b):
    return Counter(a) == Counter(b)
```

**Complement lookup (pair with target).** For each item $x$, the partner that completes it is $\text{target} - x$. Keep a map from each value to its index. Look first, store second.

```python
def pair_with_target(nums, target):
    seen = {}                       # value -> index
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return seen[need], i
        seen[x] = i                 # store AFTER checking
    return None
```

Read it as: "for each number, ask whether the number that completes it has already been seen". It is $O(n)$ time and $O(n)$ memory, against $O(n^2)$ time for the double loop.

:::figure caption="Complement lookup on [2, 11, 7, 15] with target 9: each step asks one question of the table."
<svg viewBox="0 0 320 130" role="img" aria-label="Three steps of pair with target: 2 stored, 11 has no partner, 7 finds 2">
<g style="font-size:11px;fill:var(--ink)">
<text x="10" y="20">step</text><text x="60" y="20">x</text><text x="100" y="20">need</text><text x="150" y="20">table</text><text x="250" y="20">result</text>
<line x1="10" y1="26" x2="310" y2="26" class="axis"/>
<text x="10" y="46">1</text><text x="60" y="46">2</text><text x="100" y="46">7</text><text x="150" y="46">{ }</text><text x="250" y="46">store 2</text>
<text x="10" y="70">2</text><text x="60" y="70">11</text><text x="100" y="70">-2</text><text x="150" y="70">{2}</text><text x="250" y="70">store 11</text>
<text x="10" y="94">3</text><text x="60" y="94">7</text><text x="100" y="94">2</text><text x="150" y="94">{2, 11}</text>
<text x="250" y="94" style="fill:var(--mat);font-weight:700">found!</text>
</g>
<rect x="244" y="80" width="62" height="20" rx="4" class="faint" style="fill:none;stroke:var(--mat)"/>
</svg>
:::

:::qc lvl=2
q: In pair_with_target, what goes wrong if you store x before you check for need, with nums = [5] and target = 10?
options: ["Nothing, it still returns None", "It wrongly pairs the 5 with itself", "It crashes"]
answer: 1
right: Right. Storing first puts 5 in the table, then need = 5 is found, so one item is used twice. Check first, store second.
wrong: Trace it: x = 5, need = 5. Is 5 in the table at the moment you ask?
:::

## Grouping by a key {lvl=2 id=s-group label="SDE-1"}

Sometimes the "seen" item is not the value itself but a **canonical key**: a label that is identical for everything you consider "the same". For words that are rearrangements of each other, the sorted letters work: "eat", "tea" and "ate" all become "aet".

```python
from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for w in words:
        groups["".join(sorted(w))].append(w)
    return list(groups.values())
```

Choosing the key is the whole problem. Other keys you will meet: a tuple of letter counts (faster than sorting for long words), the difference between neighbouring numbers (to group sequences that are shifts of each other), or a fraction reduced to lowest terms. A list is not hashable, so convert it to a tuple first.

Another useful shape is the **longest run of consecutive numbers**. Put everything in a set. Only start counting from a number whose predecessor is missing, so each run is walked once.

```python
def longest_run(nums):
    s, best = set(nums), 0
    for x in s:
        if x - 1 not in s:           # x begins a run
            y = x
            while y + 1 in s:
                y += 1
            best = max(best, y - x + 1)
    return best
```

The `while` loop is inside a `for`, yet the total is $O(n)$: each number is walked over by the `while` only when it belongs to a run that started at its own run-start.

## Prefix sums plus a map {lvl=3 id=s-prefix label="SDE-2"}

How many stretches of the list have total exactly $k$? A **stretch** (subarray) is a block of neighbouring items. Name the running total after each item the **prefix sum**. A stretch ending now with total $k$ exists exactly when an earlier prefix equals $\text{run} - k$, because subtracting the two prefixes leaves the stretch between them.

So keep a map from prefix value to how many times it has occurred. Seed it with `{0: 1}`, the empty prefix, so stretches starting at the very beginning count.

```python
def count_subarrays_sum_k(nums, k):
    count_of = {0: 1}
    run = total = 0
    for x in nums:
        run += x
        total += count_of.get(run - k, 0)
        count_of[run] = count_of.get(run, 0) + 1
    return total
```

Read it as: "how many earlier moments had a running total exactly k below the one now?" It works with negative numbers, unlike the window method of the next lesson.

Small changes give a family:

- **Longest stretch with equal 0s and 1s**: replace each 0 by -1, then the longest stretch with total 0. Store the *first* index at which each prefix appeared, not a count.
- **Stretches whose total is divisible by $k$**: key the map by `run % k`. Two prefixes with the same remainder differ by a multiple of $k$.

```python
def longest_balanced(bits):          # equal numbers of 0s and 1s
    first, bal, best = {0: -1}, 0, 0
    for i, b in enumerate(bits):
        bal += 1 if b == 1 else -1
        if bal in first:
            best = max(best, i - first[bal])
        else:
            first[bal] = i
    return best
```

:::qc lvl=3
q: For nums = [1, 2, 3] and k = 3, the prefix sums are 1, 3, 6. How many subarrays sum to 3?
options: ["1", "2", "3"]
answer: 1
right: Right. [1, 2] and [3]. At run = 3 the empty prefix 0 matches (run - k = 0), and at run = 6 the prefix 3 matches (run - k = 3).
wrong: Check each prefix. At run = 3 look for 0; at run = 6 look for 3. Which of those are in the map?
:::

## The array as its own table {lvl=3 id=s-index label="SDE-2"}

If the values are known to be whole numbers from 1 to $n$ in a list of length $n$, you do not need a dictionary at all. Slot $x - 1$ of the array can record that $x$ is present. This is the "index trick", and it gives $O(1)$ extra memory.

The classic use is the **smallest missing positive number**. Move each value $x$ in range to position $x - 1$ by swapping. When nothing more can move, the first slot holding the wrong value reveals the answer.

```python
def first_missing_positive(nums):
    n = len(nums)
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
            j = nums[i] - 1
            nums[i], nums[j] = nums[j], nums[i]
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    return n + 1
```

The inner `while` looks quadratic, but every swap puts one value into its final home, and a value is placed at most once, so the total is $O(n)$. Compute `j` first: writing `nums[nums[i]-1]` inside the swap line is a famous bug, because `nums[i]` changes mid-assignment.

Another index trick is **prefix times suffix**: the product of everything except $x$ is the product of everything before it times everything after it, built in two passes with no division.

## The catalogue {lvl=3 id=s-catalogue label="SDE-2"}

First the variants: one template, different adjustments.

| Variant | Signal | Change to the template |
|---|---|---|
| Seen-set | duplicate, first repeat | set; check, then add |
| Frequency map | how many, anagram, majority | Counter; compare or take the max |
| Complement lookup | pair with target or difference | map value to index; look up target - x |
| Group by key | same under rearrangement or shift | defaultdict of lists; design the key |
| Set of run-starts | longest consecutive run | start counting only where x - 1 is absent |
| Prefix plus map | subarray with sum, balance, divisible | map prefix to count (or first index) |
| Array as table | values in 1 to n, O(1) space | swap each value to slot x - 1 |
| Bucket by count | top k most frequent | list of lists indexed by count |

Now the **problem types** that fall into these variants. Each is described in our own words; the names are families, not titles.

1. **Any repeats?** Does some value occur twice? Seen-set.
2. **Pair with a target total.** Return the two positions. Complement lookup.
3. **Pair with a given difference**, or count such pairs. Complement lookup with `x + d` and `x - d`; use counts.
4. **Rearrangement test.** Are two words made of the same letters? Frequency map.
5. **Group the rearrangements.** Collect words that share letters. Group by key.
6. **Most common items.** Return the $k$ most frequent values. Count, then bucket by count to avoid sorting.
7. **Longest consecutive run.** Longest chain of values that follow each other, in any order in the list. Set of run-starts.
8. **Stretches with a given total.** Count or find subarrays summing to $k$. Prefix plus map.
9. **Balanced 0s and 1s.** Longest stretch with equal numbers. Prefix plus map, first index.
10. **Total divisible by $k$.** Count stretches. Prefix plus map keyed by remainder.
11. **Smallest missing positive.** Array as table.
12. **Product of the others.** Output at each position the product of all other items, without dividing. Prefix times suffix.
13. **Same shape.** Do two words follow the same pattern of repeated letters? Two maps, one in each direction, so the mapping is one-to-one.

:::qc lvl=3
q: A list of ages must be split into groups where two people are in the same group if their ages have the same remainder mod 7. Which variant?
options: ["Seen-set", "Group by key", "Array as table"]
answer: 1
right: Right. The key is age % 7. Everyone with the same key goes in one list.
wrong: There is a label (the remainder) that makes items "the same". Which variant builds lists per label?
:::

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- **Store before check.** An item pairs with itself. Fix: look up first.
- **Forgetting duplicates.** In `[3, 3]` with target 6, a value-to-index map overwrites the first 3, but because you check before storing it still works. Counting pairs, however, needs counts, not a set.
- **No empty prefix.** Without `{0: 1}`, stretches that start at index 0 are missed.
- **Mutable keys.** A list cannot be a dict key; use a tuple.
- **Mutating while iterating** a dict or set raises an error. Build a new one or iterate over a copy.
- **Assuming the window works.** With negatives, "grow and shrink" fails; use prefix plus map.
- **Confusing count and first index.** Counting subarrays needs counts; longest stretch needs the first index.
- **Off by one in the swap trick.** Value $x$ belongs in slot $x - 1$.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. If the answer depends on what you have already seen, keep a table of it: set, counter or map. {lvl=1}
2. Pair with target: look up target - x first, then store x. One pass, O(n). {lvl=2}
3. Group by a canonical key; the key design is the problem. {lvl=2}
4. Prefix sum minus an earlier prefix gives a subarray total, so store prefixes in a map seeded with {0: 1}. {lvl=3}
5. Values in 1 to n let the array be its own table, in O(1) extra space. {lvl=3}
6. The catalogue: seen-set, frequency map, complement, grouping, run-starts, prefix plus map, array table, bucket by count. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Say the brute force first, then the repeated work, then the table. That is the interview sentence. {lvl=1}
- Check before you insert, or an element matches itself. {lvl=2}
- Seed prefix maps with the empty prefix. {lvl=3}
- Hash tables need exact equality: "nearest" or "in a range" questions need sorting or a tree. {lvl=2}
- Hash-table O(1) is an average; with adversarial keys it can degrade. Mention it if asked. {lvl=3}
- Negative numbers break window methods but not prefix plus map. {lvl=3}
:::
