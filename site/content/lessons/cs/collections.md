---
title: Lists, dictionaries and sets
summary: Why a cricket scoreboard keeps balls in a list, runs in a dictionary and batters in a set, and how to pick the right container for any job.
ncert: []
up_to: SDE-2
builds_on: [Functions, Variables and memory, Values and types]
notes_prompt: Explain to a friend why a phone's contact list is better stored as a dictionary than as a list, and what you lose in exchange.
margin:
  - kind: history
    title: History
    text: Python dictionaries were made much faster, and since Python 3.7 they keep the order in which keys were added, a promise now part of the language itself.
  - kind: tip
    title: Interview favourite
    text: 'Most "make it faster" answers in interviews are "put the data in a set or a dict". Asking "have I seen this before?" in a loop over a list is the classic O(n²) trap.'
  - kind: olympiad
    title: Design link
    text: Redis, a popular in-memory database, is essentially a server that holds dictionaries, lists and sets, with the same trade-offs you learn here, shared by many programs. [Inference about its internals]
books:
  - { title: "L. Ramalho, Fluent Python", ref: "Part on data structures: sequences, dicts and sets [Unverified]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 10 Elementary Data Structures, Ch. 11 Hash Tables [Unverified]" }
cards:
  - { front: "When do you reach for a list?", back: "When order or position matters and you will go through the items or pick by position: a sequence of balls, a queue of tasks." }
  - { front: "When do you reach for a dict?", back: "When you look things up by a name or key: name to runs, word to count, id to record." }
  - { front: "When do you reach for a set?", back: "When you only need 'is it in here?' and no duplicates: batters who have played, words already seen." }
  - { front: "Cost of x in a list versus x in a set?", back: "A list scans, O(n). A set computes where x would be, O(1) on average." }
  - { front: "What is a tuple, and why use one?", back: "A fixed group of values that cannot be changed, like (over, ball, batter). Because it is fixed, it can be a dict key or set member; a list cannot." }
  - { front: "What does b = a do to a list?", back: "Nothing is copied. Both names point at the same list, so changing it through b changes it through a. Use a.copy() for a separate list." }
core:
  idea: 'Choose a collection by the question you will ask most often. A list answers "what is at position i?", a dict answers "what goes with this key?", a set answers "is this in here?". Each makes its own question fast.'
  formulas:
    - tex: '\text{list: } O(1) \text{ by position},\ O(n) \text{ by value}'
      label: 'List costs'
    - tex: '\text{dict, set: } O(1) \text{ on average by key or member}'
      label: 'Hash-based costs'
  conditions:
    - 'Dict keys and set members are hashable: numbers, strings and tuples of those, not lists or other dicts'
    - 'The hashing works well, so the O(1) average holds (see hash tables)'
    - 'You do not need items sorted or in ranges: those need a sorted list or a tree'
  sign: 'Commonest mistake: testing x in some_list inside a loop. Each test scans the list, so a loop of n tests costs O(n²). Turn the list into a set first.'
outcomes:
  - 'Create and use lists, tuples, dicts and sets, and say what each is for'
  - 'Pick the collection that makes your most frequent question cheap'
  - 'State the cost of common operations on each, and avoid the O(n) traps'
  - 'Explain aliasing and shallow copies, and use dict keys correctly'
  - 'Use Counter, defaultdict, deque and set operations to simplify code'
opener:
  story: |
    During an IPL match you glance at a scoreboard app. In the time it takes to blink, it can tell you the fourth ball of the over, how many runs Kohli has scored so far, and whether Dhoni has batted yet.

    Those are three different kinds of question. One asks "what is at position 4?". One asks "what goes with this name?". One asks "is this person in the group or not?". An app that stored everything in a single long list would have to read through it, ball by ball, to answer two of them.

    So how does one program hold the same match in three shapes at once, and how does it know which shape suits which question?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Three containers: a row of numbered boxes, name and runs pairs, and a bag of names"><text x="14" y="24" style="font-size:11px;fill:var(--muted)">list: by position</text><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c)"><rect x="14" y="32" width="34" height="30"/><rect x="48" y="32" width="34" height="30"/><rect x="82" y="32" width="34" height="30"/><rect x="116" y="32" width="34" height="30" style="fill:var(--c)"/><rect x="150" y="32" width="34" height="30"/><rect x="184" y="32" width="34" height="30"/></g><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="31" y="52">4</text><text x="65" y="52">0</text><text x="99" y="52">1</text><text x="133" y="52" style="fill:var(--surface)">6</text><text x="167" y="52">2</text><text x="201" y="52">0</text></g><text x="14" y="82" style="font-size:10px;fill:var(--muted)">index 0   1   2   3   4   5</text><text x="14" y="116" style="font-size:11px;fill:var(--muted)">dict: by key</text><g style="font-size:12px;fill:var(--ink)"><rect x="14" y="124" width="130" height="24" rx="4" style="fill:none;stroke:var(--c)"/><text x="22" y="141">"Kohli"  →  52</text><rect x="14" y="152" width="130" height="24" rx="4" style="fill:none;stroke:var(--c)"/><text x="22" y="169">"Rohit"  →  31</text></g><text x="14" y="206" style="font-size:11px;fill:var(--muted)">set: is it in?</text><ellipse cx="220" cy="170" rx="80" ry="48" style="fill:color-mix(in srgb,var(--c) 8%,var(--surface));stroke:var(--c);stroke-width:1.5;stroke-dasharray:4 3"/><g style="font-size:12px;fill:var(--ink)"><text x="178" y="162">Kohli</text><text x="224" y="182">Rohit</text><text x="190" y="196" style="fill:var(--muted)">Dhoni ?</text></g></svg>'
life:
  - 'Your phone''s contacts: a dictionary from name to number. The order you scroll in is just a sorted view of it.'
  - 'A shopping list is a list: order and repeats are allowed. The set of items already in the trolley is a set.'
  - 'An exam seating chart maps roll number to seat (dict); the attendance sheet of who is present is a set.'
  - 'Train tickets: the waiting list is a list (first come, first served), and the PNR lookup is a dict.'
  - 'WhatsApp groups remove duplicates from a message-forward chain by remembering ids already seen, a set.'
models:
  - name: 'Match the container to the question'
    text: 'Before collecting anything, ask what you will want to find out later. A kitchen with spices in labelled jars (lookup by name) is arranged for a different question than a pantry arranged by expiry date.'
  - name: 'Fast lookup costs space and order'
    text: 'Dicts and sets are quick because they spread items out by key, giving up simple ordering and using extra memory. Shortcuts almost always have a price, so name it.'
  - name: 'Same name, same thing'
    text: 'Two names for one list mean one list. Sharing a spreadsheet link versus emailing a copy is exactly the difference between aliasing and copying: know which one you are doing.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Python dict and set are hash tables, so their O(1) average lookups come from computing a slot from the key.'
    differs: 'The hash table lesson shows how it works inside; this lesson is about choosing and using one.'
  - leaf: 'cs/arrays'
    name: 'Arrays and dynamic arrays'
    same: 'A Python list is a dynamic array: instant by position, growing by doubling.'
    differs: 'A list of Python objects stores references, so it can hold mixed types, unlike a compact array of raw numbers.'
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'Choosing between a list scan and a set lookup is a Big-O decision.'
    differs: 'Big-O hides constants: for ten items a list can be just as quick.'
next:
  q: 'A scoreboard needs a Batter with a name, runs, balls faced and a way to add a boundary, all bundled together. A tuple can group the values but cannot carry behaviour. How do programs bundle data with the actions that belong to it?'
  leaf: 'cs/objects-and-classes'
  name: 'Objects and classes'
symbols:
  - s: '[\ ]'
    means: 'square brackets: a list, such as [4, 0, 1]'
  - s: '\{\ \}'
    means: 'curly braces: a dict of key: value pairs, or a set of values'
  - s: '(\ )'
    means: 'round brackets: a tuple, a fixed group such as (3, 4)'
  - s: 'n'
    means: 'number of items in the collection (count)'
  - s: 'O(1)'
    means: 'constant time: the work does not grow with n'
  - s: 'O(n)'
    means: 'linear time: the work grows in step with n'
  - s: 'O(n^2)'
    means: 'quadratic time: doubling n makes the work about four times larger'
---

:::hook
q: Here's the puzzle. The match has been going for 100,000 events. Which of these three questions could the app answer without reading through them all, if the data is stored the right way?
options: ["Only the fourth ball of the over", "The fourth ball and Kohli's runs", "All three, with each kept in its own shape"]
answer: 2
right: Right. A list jumps to a position, a dict jumps to a name, a set jumps to a member. Each answer is one step, however big the match. (How any real scoreboard app is built is not public. This is the general idea. [Inference])
wrong: One long list would force a scan for two of the three. But a different container makes each question one step. Which container helps which question?
:::

## Three questions, three shapes {lvl=1 id=s-three label="Foundations"}

Here is the match, kept in three shapes at once.

```python
balls = [4, 0, 1, 6, 2, 0]                # list: order matters
runs = {"Kohli": 52, "Rohit": 31}         # dict: name -> runs
batted = {"Kohli", "Rohit"}               # set: have they batted?

print(balls[3])            # 6
print(runs["Kohli"])       # 52
print("Dhoni" in batted)   # False
```

- A **list** is an ordered row of items, numbered from 0. It can hold repeats.
- A **dictionary** (dict) is a set of pairs: a **key** (the name you look up by) and its **value** (what goes with it). Keys are unique.
- A **set** is a bag of unique items with no order. You can only ask whether something is in it.

:::figure caption="The same match in three shapes. Each is built to make one kind of question quick."
<svg viewBox="0 0 320 100" role="img" aria-label="Three questions matched to list, dict and set">
<g style="font-size:11px;fill:var(--ink)">
<rect x="8" y="14" width="96" height="70" rx="8" style="fill:none;stroke:var(--mat);stroke-width:1.8"/>
<text x="20" y="36">list</text><text x="20" y="54" style="fill:var(--muted)">where is it?</text><text x="20" y="72" style="fill:var(--muted)">balls[3]</text>
<rect x="112" y="14" width="96" height="70" rx="8" style="fill:none;stroke:var(--mat);stroke-width:1.8"/>
<text x="124" y="36">dict</text><text x="124" y="54" style="fill:var(--muted)">what goes with?</text><text x="124" y="72" style="fill:var(--muted)">runs["Kohli"]</text>
<rect x="216" y="14" width="96" height="70" rx="8" style="fill:none;stroke:var(--mat);stroke-width:1.8"/>
<text x="228" y="36">set</text><text x="228" y="54" style="fill:var(--muted)">is it in here?</text><text x="228" y="72" style="fill:var(--muted)">x in batted</text>
</g>
</svg>
:::

:::qc lvl=1
q: You want to store each student's marks and look them up by name. Which container?
options: ["A list of marks", "A dict from name to marks", "A set of names"]
answer: 1
right: Right. You are asking "what goes with this name?", which is exactly a dict.
wrong: Which container pairs a lookup name with a value?
:::

## Using them: lists, tuples, dicts, sets {lvl=1 id=s-use label="Foundations"}

**Lists** can be changed. You add to the end with `append`, read by position (and `-1` is the last item), and cut out a piece with a slice like `balls[1:4]`, which gives `[0, 1, 6]`.

**Tuples** look like lists with round brackets but cannot be changed once made. They are ideal for a small fixed record, such as `ball = (14, 3, "Kohli")` for over 14, ball 3, batter Kohli. Because they cannot change, they are safe to use as dict keys.

**Dicts** are changed by key. `runs.get("Dhoni", 0)` returns 0 instead of an error when the key is missing, and `runs["Kohli"] += 4` adds a boundary.

```python
runs["Kohli"] += 4
for name, r in runs.items():        # go through all pairs
    print(name, r)
batted.add("Dhoni")                 # sets: add, remove, test
print(len(batted), "Dhoni" in batted)   # 3 True
```

**Sets** automatically ignore repeats: `set([1, 2, 2, 3])` is `{1, 2, 3}`. Since Python 3.7 a dict remembers the order its keys were added; a set promises no order.

A handy shortcut for counting is `Counter`:

```python
from collections import Counter
print(Counter(["4", "1", "W", "1", "4", "4"]))
# Counter({'4': 3, '1': 2, 'W': 1})
```

## What each operation costs {lvl=2 id=s-cost label="SDE-1"}

Why does the choice matter? Because the cost per operation differs. A list is an array underneath; dicts and sets are hash tables (see the hash tables lesson). Costs are for $n$ items.

| Operation | list | dict | set |
|---|---|---|---|
| Get by position | $O(1)$ | n/a | n/a |
| Get by key / test membership | $O(n)$ (scan) | $O(1)$ avg | $O(1)$ avg |
| Add at the end / add item | $O(1)$ amortised | $O(1)$ avg | $O(1)$ avg |
| Insert or remove at the front | $O(n)$ (shifts all) | n/a | n/a |
| Remove a given value | $O(n)$ | $O(1)$ avg | $O(1)$ avg |
| Go through everything | $O(n)$ | $O(n)$ | $O(n)$ |
| Sort | $O(n \log n)$ | n/a | n/a |

The most expensive habit is a membership test on a list inside a loop. Compare:

```python
seen = []                       # slow: each "in" scans the list
for x in data:
    if x in seen: print("dup", x)
    seen.append(x)              # O(n) per step, O(n^2) overall

seen = set()                    # fast: each test is one step
```

With a million items the first form does hundreds of billions of comparisons in the worst case; the second does about a million steps. The change is one word.

:::qc lvl=2
q: A list has 100,000 items. You must insert 100,000 new items at the front, one by one. What is the cost?
options: ["About O(n), as each insert is quick", "O(n²) overall, since every insert shifts all existing items", "O(1) each, overall O(1)"]
answer: 1
right: Right. Each insert moves every item already there, so the total is about n²/2 moves. A deque, or inserting at the end and reversing, avoids that.
wrong: Inserting at position 0 forces every other item to shift one place. How many items shift on average?
:::

## Choosing, and the traps in sharing {lvl=2 id=s-choose label="SDE-1"}

A short decision guide:

- Order or repeats matter, or you go through all items in turn: **list**.
- A fixed little record, or a composite dict key: **tuple**.
- Look up a value from a name, id or word: **dict**.
- Only "have I seen this?" or removing duplicates: **set**.

**Hashable keys.** Dict keys and set members must be hashable: the thing cannot change after it is stored, or its slot would be wrong. Numbers, strings and tuples of those qualify. A list does not: `{[1, 2]: "x"}` raises `TypeError: unhashable type: 'list'`. To key by a pair like (row, column), use a tuple.

**Aliasing.** Assigning a list does not copy it.

```python
a = [1, 2, 3]
b = a              # same list, two names
b.append(4)
print(a)           # [1, 2, 3, 4]
c = a.copy()       # a new list: changes to c leave a alone
```

A copy made this way is **shallow**: it copies the outer list, but any inner lists are still shared. This catches many people building a grid:

```python
grid = [[0] * 3] * 3       # three names for ONE inner row
grid[0][0] = 1
print(grid)                # [[1, 0, 0], [1, 0, 0], [1, 0, 0]]
grid = [[0] * 3 for _ in range(3)]    # three separate rows
```

## Choosing under constraints {lvl=3 id=s-constraints label="SDE-2"}

At mid level you choose by the full list of operations, not by one.

- **Queue (first in, first out).** `list.pop(0)` is $O(n)$. Use `collections.deque`, which adds and removes at both ends in $O(1)$.
- **Sorted order or ranges.** Dicts and sets cannot answer "everything between 40 and 60". Keep a sorted list and use the `bisect` module to find positions in $O(\log n)$ (an insert still costs $O(n)$), or a tree-based structure when updates are frequent.
- **Remove duplicates, keep order.** `list(dict.fromkeys(xs))` does it in $O(n)$, because dict keys remember insertion order.
- **Sets as algebra.** `a & b` (both), `a | b` (either), `a - b` (in a but not b) answer "who attended both days?" in one line and in $O(n)$.
- **Default values.** `defaultdict(list)` creates an empty list when a missing key is first used, which makes grouping short: `groups[key].append(item)`.
- **Memory.** Dicts and sets hold empty slots on purpose and so use noticeably more memory per item than a list. [Unverified: the exact ratio depends on the Python version.] For millions of small records, that gap matters.
- **Changing while looping.** Adding or removing keys from a dict while iterating over it raises `RuntimeError`. Loop over a copy (`list(d)`) or build a new dict.

The interview pattern hiding here: "find two numbers that add to a target" walks the list once, asking a set "have I seen target - x?". One pass and one set turn $O(n^2)$ into $O(n)$.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A list is ordered and indexed; a dict maps keys to values; a set holds unique items and answers "is it in here?". {lvl=1}
2. Pick the container by the question you ask most often. {lvl=1}
3. A tuple is a fixed record; being unchangeable lets it be a dict key. {lvl=1}
4. By position, a list is O(1). By value, a list is O(n), while a dict or set is O(1) on average. {lvl=2}
5. b = a copies nothing; use .copy(), and remember copies are shallow. {lvl=2}
6. Dict keys and set members must be hashable; lists are not. {lvl=2}
7. Use deque for queues, bisect for sorted ranges, Counter and defaultdict for counting and grouping. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Writing x in my_list inside a loop turns O(n) work into O(n²); use a set. {lvl=1}
- Using a mutable list as a dict key raises TypeError; use a tuple. {lvl=2}
- [[0] * 3] * 3 builds three names for one row; use a comprehension. {lvl=2}
- list.pop(0) and list.insert(0, x) shift every item; use deque. {lvl=2}
- Do not rely on set order. Dict order is guaranteed to be insertion order, set order is not. {lvl=2}
- Changing a dict's size while looping over it raises RuntimeError. {lvl=3}
- In interviews, say which question you will ask most often before choosing a container. {lvl=2}
:::
