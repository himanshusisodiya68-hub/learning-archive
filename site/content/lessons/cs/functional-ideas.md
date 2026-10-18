---
title: Functional programming ideas
summary: How a hundred machines can add up a season of cricket scores at once. Treating functions as values, never changing data in place, and why that makes work easy to split.
ncert: []
up_to: SDE-2
builds_on: [Functions, Lists dictionaries and sets, Objects and classes]
notes_prompt: Explain to a friend why 100 machines can each add up their own part of a list and then add the subtotals, but cannot do the same trick to find an average.
margin:
  - kind: history
    title: History
    text: 'Lisp, from the late 1950s, was built around functions as values. In 2004 Google engineers described MapReduce, which popularised "map then reduce" for huge data; the idea itself is much older. [Unverified: dates from memory]'
  - kind: tip
    title: Interview favourite
    text: 'When a problem says "for every item compute X, keep those that satisfy Y, then combine", say map, filter, reduce, then write it as one comprehension. It shows you can see the shape of the work.'
  - kind: olympiad
    title: Design link
    text: 'Frameworks such as MapReduce and Spark are this lesson at scale: your map function runs on many machines, and the reduce step needs the combine operation to be associative. [Inference: simplified description]'
books:
  - { title: "H. Abelson and G. Sussman, Structure and Interpretation of Computer Programs", ref: "Ch. 1.3 Higher-order procedures" }
  - { title: "L. Ramalho, Fluent Python", ref: "Part on functions as first-class objects [Unverified: chapter numbers]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 10 Batch Processing: MapReduce [Unverified: chapter number]" }
cards:
  - { front: "What does 'functions are first-class' mean?", back: "A function is a value like a number: you can store it in a variable, pass it to another function and return it from one." }
  - { front: "map, filter, reduce in one line each?", back: "map: apply a function to every item. filter: keep the items a test says yes to. reduce: fold all items into one value by combining them two at a time." }
  - { front: "Comprehension versus map and filter?", back: "[f(x) for x in xs if test(x)] does both in one readable line. In Python it is usually preferred to map with lambda." }
  - { front: "What is a pure function?", back: "Same inputs always give the same output, and it changes nothing outside itself. Easy to test, cache and run in parallel." }
  - { front: "Why does immutability help?", back: "If data cannot change, nobody can change it under your feet: no surprise aliasing bugs, and many workers can share it safely." }
  - { front: "Why must the combine step of a reduce be associative to run in parallel?", back: "Parallel workers combine their pieces in whatever grouping happens to finish first. Associativity, (a+b)+c = a+(b+c), guarantees every grouping gives the same answer." }
core:
  idea: 'Treat a function as a value you can hand around, describe work as "transform each item, keep some, combine the rest", and avoid changing data in place. Code written this way is easy to test and, when the combining step is associative, easy to split across many workers.'
  formulas:
    - tex: '\text{result} = \operatorname{reduce}\big(\oplus,\ \operatorname{map}(g,\ \operatorname{filter}(p,\ xs))\big)'
      label: 'Keep the items passing the test p, transform each by g, combine with ⊕'
    - tex: '(a \oplus b) \oplus c = a \oplus (b \oplus c)'
      label: 'Associativity: any grouping gives the same answer, so work can be split'
  conditions:
    - 'The functions passed in are pure: same input, same output, no changes outside'
    - 'The data is not modified while it is being processed (or is immutable)'
    - 'For parallel reduction, the combine operation is associative and has a neutral starting value (0 for addition, 1 for multiplication)'
  sign: 'Associative does not mean commutative: joining text pieces in a different order changes the answer, but regrouping them does not. Subtraction and plain averaging are not associative at all.'
outcomes:
  - 'Pass functions as arguments, return them and store them, for example sorted with key'
  - 'Rewrite a loop as a comprehension, or as map, filter and reduce'
  - 'Spot the bug that comes from changing a list in place, and fix it with a pure version'
  - 'Explain why associativity lets reduce split across machines, and why averages need extra care'
  - 'Judge when functional style helps readability and when a plain loop is better'
opener:
  story: |
    A cricket stats site has the scorecards of 1,000 IPL matches, spread over 100 machines, ten matches each. The boss asks for one number: the total runs scored in all matches. One machine reading everything would take hours.

    So you ask each machine to add up its own ten matches and send back one subtotal. Then you add the 100 subtotals. No machine waits for another, and no machine ever changes the scorecards it reads. The numbers arrive in whatever order the machines finish.

    It feels obvious that this gives the right total. But try the same trick to find the average runs per match by averaging each machine's average, and you will get a wrong answer. What is it about adding that lets you split the work, and what is missing from averaging?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Four machines each add their own scores, then the subtotals are added together"><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="12" y="20" width="62" height="40" rx="6"/><rect x="86" y="20" width="62" height="40" rx="6"/><rect x="160" y="20" width="62" height="40" rx="6"/><rect x="234" y="20" width="62" height="40" rx="6"/></g><g style="font-size:10px;fill:var(--ink)"><text x="22" y="44">12+7=19</text><text x="96" y="44">9+5=14</text><text x="170" y="44">8+6=14</text><text x="244" y="44">4+11=15</text></g><g style="stroke:var(--c);stroke-width:1.5;fill:none"><path d="M43 62 L100 112"/><path d="M117 62 L110 112"/><path d="M191 62 L200 112"/><path d="M265 62 L210 112"/></g><rect x="84" y="112" width="148" height="40" rx="6" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="96" y="137" style="font-size:11px;fill:var(--ink)">19+14+14+15 = 62</text><text x="12" y="190" style="font-size:10px;fill:var(--muted)">Each machine works alone and never edits the data;</text><text x="12" y="206" style="font-size:10px;fill:var(--muted)">one cheap step combines the answers.</text></svg>'
life:
  - 'Spreadsheet formulas such as SUM and FILTER describe what you want from a column; the sheet decides how to compute it, and your original cells stay unchanged.'
  - 'Search and analytics systems over huge logs run "map then reduce" across many machines; your phone''s photo app uses the same idea to find all pictures of a place. [Inference]'
  - 'Python''s own sorted, max and min take a key function; "sort by length" or "sort by price" is one small function handed in.'
  - 'A cricket scorecard is a fold: start at 0, add each ball''s runs, and the total is the reduce of the whole innings.'
models:
  - name: 'Describe what, not how'
    text: 'Saying "tea for four, no sugar" lets the kitchen decide how. In life and code, specify the result you want and leave the steps to a specialist; it keeps your request short and lets the worker improve their method.'
  - name: 'Do not edit the original, make a new copy'
    text: 'Editors keep tracked changes and banks keep a ledger of entries rather than overwriting balances. A history you only add to is easy to audit, undo and share without conflict.'
  - name: 'Check that pieces combine before you divide the work'
    text: 'You can split a long report among writers only if the sections can be joined in any grouping. Before splitting any job among people or machines, ask whether the partial results can be merged correctly.'
links:
  - leaf: 'cs/functions'
    name: 'Functions'
    same: 'Everything here is built from functions: inputs in, output out.'
    differs: 'Plain functions are called by name; here functions themselves travel as arguments and results, so behaviour becomes something you can pass around.'
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'Reduce is a loop in disguise and recursion is another: all three combine a list one item at a time.'
    differs: 'Recursion defines the answer for a list through the answer for a smaller list; reduce is the ready-made version for the common "fold into one value" case.'
  - leaf: 'cs/objects-and-classes'
    name: 'Objects and classes'
    same: 'Both try to keep programs from changing data in surprising ways.'
    differs: 'Objects guard changing state with rules; the functional style avoids changing state at all and builds new values instead.'
  - leaf: 'mat/induction'
    name: 'Induction'
    same: 'Proving a fact about a whole sum by assuming it for fewer terms is the same shape as folding a list one item at a time.'
    differs: 'Induction proves that something is true for all sizes; reduce computes it for one particular list.'
next:
  q: 'We have used one language, Python, for everything. But Instagram, Android apps, trading systems and your browser are written in other languages. Do they all think the same way, and how do you pick one?'
  leaf: 'cs/language-landscape'
  name: 'The language landscape'
symbols:
  - s: '\operatorname{map}(g, xs)'
    means: 'apply the function g to every item of the list xs and collect the results'
  - s: '\operatorname{filter}(p, xs)'
    means: 'keep only the items of xs for which the test p says yes'
  - s: '\operatorname{reduce}(\oplus, xs)'
    means: 'combine all items of xs into one value, two at a time, using the operation ⊕'
  - s: '\oplus'
    means: 'any combine operation, such as add, multiply, max or join (a stand-in symbol)'
  - s: '\texttt{lambda}'
    means: 'a tiny unnamed function written in one line, e.g. lambda x: x * 2'
---

:::hook
q: Here is the puzzle. 100 machines each add up their own ten matches, then you add the 100 subtotals. Compared with one machine adding every match in order, the total is...
options: ["Always the same, whichever order the subtotals arrive in", "Sometimes different, so machines must take turns", "Different unless the machines add the matches in sorted order"]
answer: 0
right: Right. Addition can be regrouped freely, (a + b) + c = a + (b + c), so any split and any order of combining gives the same total. Not every operation allows that; the average will be the counter-example.
wrong: Try it with four numbers: (12 + 7) + (9 + 5) and 12 + (7 + (9 + 5)). Does regrouping change a sum?
:::

## Functions are values {lvl=1 id=s-values label="Foundations"}

You already know a number can sit in a variable, be handed to a function and be returned from one. In Python, a **function is a value too**. This is called being **first-class**. A function can be stored, passed in and returned, just like `7` or `"hello"`.

Why bother? Because it lets you say *what to do* separately from *when and to what*. Sorting is the standard example: the sorting machinery is fixed, and you hand it a small function that says what to sort by.

```python
words = ["banana", "fig", "cherry", "kiwi"]

sorted(words)                    # alphabetical
sorted(words, key=len)           # by length: fig, kiwi, banana, cherry
sorted(words, key=lambda w: w[-1])   # by last letter
```

`key=len` hands over the function `len` itself (no brackets: we are not calling it). `lambda` makes a tiny nameless function on the spot. Note that `sorted` gives back a new list and leaves `words` alone.

## Map, filter and reduce {lvl=1 id=s-mfr label="Foundations"}

Most list work has one of three shapes. Take prices in rupees: `prices = [120, 80, 450, 60]`.

- **Map**: do the same thing to every item. "Apply a 10% discount to each."
- **Filter**: keep only the items that pass a test. "Only prices above 100."
- **Reduce** (also called fold): combine all items into one value. "The total."

```python
from functools import reduce

discounted = list(map(lambda p: p * 0.9, prices))     # [108, 72, 405, 54]
big = list(filter(lambda p: p > 100, prices))         # [120, 450]
total = reduce(lambda a, b: a + b, prices, 0)         # 710
```

`reduce` starts with `0`, adds the first price, then adds the second to that, and so on. Read it as: "fold the list into one number, starting from zero".

Python has a tidier way to write map and filter, the **comprehension**:

```python
discounted = [p * 0.9 for p in prices]
big_discounted = [p * 0.9 for p in prices if p > 100]   # filter, then map
total = sum(prices)       # reduce for adding is built in
```

Read the second line as: "the discounted price, for each price in prices, if the price is over 100". One line says what you want; no counter and no empty list to fill.

:::qc lvl=1
q: What does [p for p in [5, 12, 7, 20] if p > 6] give?
options: ["[12, 7, 20]", "[5]", "[12, 20]"]
answer: 0
right: Right. The if part is a filter: it keeps every item greater than 6, in the original order.
wrong: The if clause keeps the items for which the test is true. Which items are greater than 6?
:::

## Do not change things in place {lvl=2 id=s-pure label="SDE-1"}

A **pure function** gives the same output for the same input and changes nothing outside itself. Compare:

```python
def sort_scores(scores):
    scores.sort()            # edits the caller's list
    return scores

a = [3, 1, 2]
b = sort_scores(a)           # a is now [1, 2, 3] too
```

The caller never asked for `a` to change. If another part of the program held `a` expecting the original order, it now has a mystery bug, because `a` and `b` are **two names for one list**. The pure version is one line: `return sorted(scores)`, which builds a new list.

The more general idea is **immutability**: some values cannot change after creation. Python's numbers, strings, `tuple` and `frozenset` are immutable; lists, dicts and sets are not. To "change" an immutable value you make a new one:

```python
point = (3, 4)               # a tuple
moved = (point[0] + 1, point[1])   # new tuple (4, 4); point is untouched
```

Pure functions on immutable data are easy to test (no setup), easy to cache (same input, same answer) and safe to share among workers. Even better, as in the opening, they are easy to run in parallel, since nobody can step on anyone else's data.

:::qc lvl=2
q: A function takes a list and returns it sorted, using list.sort() on the argument. What is wrong with it?
options: ["Nothing, it is efficient", "It changes the caller's list as a side effect", "list.sort cannot sort numbers"]
answer: 1
right: Right. A hidden side effect on the caller's data is the classic source of aliasing bugs. sorted(scores) returns a new list instead.
wrong: Efficiency is not the issue here. Who else holds a reference to that same list?
:::

## Why this shape splits across machines {lvl=3 id=s-split label="SDE-2"}

Back to the 100 machines. Each does a **map** (turn a match into its runs) and a partial **reduce** (add its ten). Then one more reduce adds the subtotals. This works because adding is **associative**: regrouping never changes the answer, so any tree of additions gives the same total.

:::figure caption="Four numbers reduced as a tree. Any grouping of the adds reaches 33, which is why the pieces can be done on different machines in any order."
<svg viewBox="0 0 560 190" role="img" aria-label="A tree that adds 12 and 7, 9 and 5, then the two partial sums">
<g style="font-size:13px;fill:var(--ink);text-anchor:middle">
<text x="110" y="150">12</text><text x="190" y="150">7</text><text x="270" y="150">9</text><text x="350" y="150">5</text>
<text x="150" y="92" style="fill:var(--mat)">19</text><text x="310" y="92" style="fill:var(--mat)">14</text>
<text x="230" y="34" style="fill:var(--mat);font-weight:600">33</text>
</g>
<g class="pen" style="stroke:var(--muted);stroke-width:1.5;fill:none">
<path d="M110 136 L145 100"/><path d="M190 136 L155 100"/>
<path d="M270 136 L305 100"/><path d="M350 136 L315 100"/>
<path d="M150 78 L225 42"/><path d="M310 78 L235 42"/>
</g>
<text x="400" y="70" style="font-size:11px;fill:var(--muted)">machine A: 12 + 7</text>
<text x="400" y="90" style="font-size:11px;fill:var(--muted)">machine B: 9 + 5</text>
<text x="400" y="110" style="font-size:11px;fill:var(--muted)">last step: 19 + 14</text>
</svg>
:::

Not every combine operation qualifies. Here is a table to keep in mind:

| Operation | Associative? | Safe to split? | Note |
|---|---|---|---|
| Add, multiply | Yes | Yes | Neutral starting values 0 and 1 |
| max, min | Yes | Yes | Neutral value: negative or positive infinity |
| Joining text pieces | Yes | Yes, if pieces stay in order | Associative, not commutative |
| Subtract | No | No | (10 - 4) - 3 = 3 but 10 - (4 - 3) = 9 |
| Average of averages | No | No | See below |

The average fails because a machine with 2 matches averaging 10 and a machine with 8 matches averaging 20 should not count equally. The fix is to **carry richer partial results**: each machine sends the pair (sum, count). Pairs combine associatively by adding each part, and you divide only at the very end.

```python
def combine(a, b):                    # a, b are (sum, count)
    return (a[0] + b[0], a[1] + b[1])

parts = [(20, 2), (160, 8)]
total, count = reduce(combine, parts, (0, 0))
average = total / count               # 180 / 10 = 18.0
```

Averaging the averages would give $(10 + 20)/2 = 15$, which is wrong; the correct answer is 18.

## Closures, laziness and honest limits {lvl=3 id=s-limits label="SDE-2"}

Two more tools you will meet. A **closure** is a function that remembers values from where it was made, so you can build specialised functions on demand:

```python
def make_multiplier(k):
    return lambda x: x * k

double = make_multiplier(2)
double(21)                    # 42
```

A **generator expression**, `(p * 0.9 for p in prices)`, is **lazy**: it produces one item at a time and never builds the whole list, so it can process a file bigger than memory: `sum(len(line) for line in open("big.txt"))`.

Functional style is a tool, not a religion. In Python, a comprehension is usually clearer than `map` with `lambda`; `reduce` is rarely clearer than `sum`, `max` or a plain loop; and Python does not optimise deep recursion, so a loop beats clever recursion for long lists. Use the style where it helps: transformations of data, clean tests and anything you may later spread across machines.

:::qc lvl=3
q: Which of these can safely be split across machines, with each machine reducing its own part and a final step combining the results?
options: ["Subtracting every value from a running total", "Finding the largest score", "Averaging each machine's own average"]
answer: 1
right: Right. max is associative, so each machine can find its own maximum and a final step takes the maximum of those. Subtraction and averaged averages break under regrouping.
wrong: Test each operation by regrouping three numbers. Only one of these gives the same answer however you group.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Functions are values: store them, pass them in, return them (as in sorted with key). {lvl=1}
2. Most list work is map (transform each), filter (keep some) or reduce (combine into one). {lvl=1}
3. A comprehension says map and filter in one readable line; sum, max and min are ready-made reductions. {lvl=1}
4. Pure functions on data that does not change are easy to test, cache and share. {lvl=2}
5. Changing a list in place can surprise every other holder of the same list; return a new one instead. {lvl=2}
6. An associative combine can be regrouped, so reduce can be split across machines. {lvl=3}
7. An average is not associative; carry (sum, count) and divide at the end. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- In Python 3, map and filter return lazy iterators; wrap them in list() to see the items, and note they can only be read once. {lvl=2}
- A function with a default argument like items=[] shares one list between every call; use None. {lvl=2}
- list.sort() returns None and changes the list; sorted() returns a new list. {lvl=1}
- Forgetting the starting value in reduce makes an empty list raise an error. {lvl=2}
- Averaging averages, or subtracting in a parallel reduce, silently gives wrong answers. {lvl=3}
- Do not force functional style where a simple loop is clearer; readability wins. {lvl=3}
:::
