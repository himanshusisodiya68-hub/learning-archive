---
title: Decisions and loops
summary: How an ATM decides about your PIN and repeats until you are in or locked out, and why those two moves are enough for any program.
ncert: []
up_to: SDE-2
builds_on: [Values and types, Variables and memory]
notes_prompt: Explain to a friend how an ATM decides whether to let you in and when to give up, using only the ideas "if" and "repeat".
margin:
  - kind: history
    title: History
    text: In 1966 Corrado Böhm and Giuseppe Jacopini showed that sequence, choice and repetition are enough to express any computation [Unverified date]. Soon after, Dijkstra argued that jumping around with goto made programs hard to follow, and structured programming became the norm.
  - kind: tip
    title: Interview favourite
    text: 'Off-by-one errors (does the loop run n or n+1 times? is the last index n or n-1?) sink more solutions than hard algorithms do. State your loop invariant in one line before you code and most of them disappear.'
  - kind: olympiad
    title: Stretch
    text: To prove a loop correct you show that something stays true on every pass (the invariant) and that something else shrinks to a stopping point (the variant). This is mathematical induction wearing a programmer's coat.
books:
  - { title: "A. Downey, Think Python", ref: "chapters on conditionals and iteration [Unverified chapter numbers]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "loop invariants, introduced with insertion sort in the early chapters [Unverified]" }
cards:
  - { front: "What are the three building blocks of any program?", back: "Sequence (do steps in order), choice (if/elif/else) and repetition (for and while loops)." }
  - { front: "When do you use for and when while?", back: "for when you know what to walk through (the items of a list, a range of numbers). while when you repeat until a condition changes and cannot say how many times in advance." }
  - { front: "What does range(5) give?", back: "0, 1, 2, 3, 4: it starts at 0 and stops before 5, so it has exactly 5 numbers." }
  - { front: "What is a loop invariant?", back: "A statement that is true before the loop, stays true after every pass, and so is true when the loop ends. It is how you reason about why a loop works." }
  - { front: "What makes a while loop stop?", back: "Something that moves towards the stop condition on every pass (a counter growing, a range shrinking). If nothing does, the loop runs for ever." }
  - { front: "How many times does a loop inside a loop run if both go up to n?", back: "About n times n, so n squared. Nested loops multiply, they do not add." }
core:
  idea: 'Any program is built from three moves: do steps in order, choose between paths with a condition, and repeat steps while a condition holds. A loop is correct when something stays true on every pass (the invariant) and something else shrinks towards the stop (the variant).'
  formulas:
    - tex: '\text{invariant } P:\quad P \text{ true before},\;\; P \text{ true before pass } k \Rightarrow P \text{ true after it}'
      label: 'Same shape as mathematical induction; P is true when the loop ends'
    - tex: '\text{cost of nested loops} \approx n \times m'
      label: 'A loop inside a loop multiplies the work'
  conditions:
    - 'Conditions give True or False; Python treats empty and zero values as False'
    - 'The loop condition is checked before each pass (while) or the items run out (for)'
    - 'To terminate, some quantity must move towards the stopping point on every pass'
  sign: 'The commonest mistake is an off-by-one error: range(n) stops at n-1, and lo <= hi versus lo < hi in a search changes whether the last item is checked.'
outcomes:
  - 'Write if/elif/else and for and while loops that do what you mean'
  - 'Predict exactly how many times a loop body runs, including range(a, b, step)'
  - 'Use break, continue and the loop else clause and know what each does'
  - 'State a loop invariant and use it to see why a loop is right'
  - 'Spot infinite loops, off-by-one errors and the bug of editing a list while looping over it'
  - 'Estimate the cost of nested loops'
opener:
  story: |
    You walk up to an ATM, type your PIN, and get it wrong. The machine says "try again". You get it wrong a second time, a third time, and the card is **blocked**. No person watched you. Something inside simply knew when to let you in and when to give up.

    Strip the ATM down to its bones and there are really two ideas at work. One is a **decision**: is this PIN the right one? The other is **repetition**: ask again, but only three times.

    Here is the puzzle. Besides doing steps one after another, how many other ideas does a program need before it can express every computation there is?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="An ATM screen with a PIN prompt, a diamond for the decision and an arrow looping back for another try"><rect x="20" y="24" width="120" height="190" rx="12" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="34" y="40" width="92" height="50" rx="5" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="42" y="60" style="font-size:10px;fill:var(--muted)">Enter PIN</text><text x="42" y="78" style="font-size:14px;fill:var(--ink)">* * * *</text><rect x="44" y="106" width="72" height="14" rx="3" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"/><rect x="44" y="130" width="72" height="14" rx="3" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"/><rect x="44" y="154" width="72" height="14" rx="3" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"/><path d="M208 38 L252 78 L208 118 L164 78 Z" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="188" y="76" style="font-size:10px;fill:var(--ink)">right</text><text x="192" y="88" style="font-size:10px;fill:var(--ink)">PIN?</text><path d="M252 78 L296 78" style="stroke:var(--c);stroke-width:1.5;fill:none"/><text x="258" y="70" style="font-size:10px;fill:var(--c)">yes: cash</text><path d="M208 118 L208 150 L170 150 L170 78" style="stroke:var(--muted);stroke-width:1.5;fill:none;stroke-dasharray:4 3"/><text x="214" y="146" style="font-size:10px;fill:var(--muted)">no: ask again</text><text x="164" y="186" style="font-size:10px;fill:var(--bad)">3 wrong: card blocked</text></svg>'
life:
  - 'An ATM or phone lock counts wrong tries and locks you out after a few: a loop with a counter and an if.'
  - 'A traffic signal is a loop that never ends: it waits, switches, waits again, with a decision on a sensor for the pedestrian button.'
  - 'A cricket scoreboard repeats "ball bowled, update runs, check for wicket" until the overs end or the team is all out.'
  - 'Your phone alarm checks the clock again and again; the moment the time reaches the set value, the decision fires.'
  - 'A recipe says "stir until it thickens": a while loop whose condition is judged by you, with a built-in stop.'
models:
  - name: 'Decide, then repeat'
    text: 'Most routines in life are a decision plus a repeat: keep studying until you can solve it, keep walking until you reach the station. Naming the stopping condition up front tells you whether a plan can ever finish.'
  - name: 'Invariants: what stays true'
    text: 'When a process is long, find the thing you can keep true at every step. A shopkeeper keeps "cash + stock value = capital" true after each sale. If it stays true and you know it at the end, you can trust the end.'
  - name: 'Something must shrink'
    text: 'A process terminates only if some measure moves closer to done each time: pages left, money owed, distance to the destination. If nothing shrinks, you are going in circles, whether in code, a meeting or a debt.'
links:
  - leaf: 'mat/induction'
    name: 'Induction'
    same: 'An invariant is proved exactly like induction: it holds at the start (base case), and if it holds before a pass it holds after it (inductive step).'
    differs: 'Induction proves a statement for every whole number; a loop invariant proves a statement at a point of one particular program run.'
  - leaf: 'mat/invariants'
    name: 'Invariants'
    same: 'Olympiad invariants (a quantity that never changes under a move) are the same idea as loop invariants: find what stays fixed to understand what is possible.'
    differs: 'In puzzles the invariant shows something is impossible; in code it shows the loop is correct.'
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'Cost comes from how many times loops run; a loop inside a loop multiplies the count.'
    differs: 'Big-O describes how that count grows with input size; here we only count passes for one input.'
next:
  q: 'Your ATM code is 40 lines long. Where does the part that checks a PIN end and the part that dispenses cash begin? How do you name a chunk of steps so that you can reuse it, test it and trust it?'
  leaf: 'cs/functions'
  name: 'Functions'
symbols:
  - s: '\texttt{if / elif / else}'
    means: 'choose one path: the first condition that is True wins; else is the fallback'
  - s: '\texttt{for}'
    means: 'repeat once for each item in a collection or range'
  - s: '\texttt{while}'
    means: 'repeat as long as a condition stays True'
  - s: '\texttt{range(a, b, s)}'
    means: 'whole numbers from a up to but not including b, stepping by s (default a = 0, s = 1)'
  - s: '\texttt{break / continue}'
    means: 'break leaves the loop at once; continue skips to the next pass'
  - s: 'P'
    means: 'the loop invariant: a statement that stays true on every pass'
  - s: 'n'
    means: 'how many items or passes (count)'
---

:::hook
q: Here is the puzzle. Besides doing steps in order, how many more ideas does a program need to express any computation?
options: ["Hundreds, one for each kind of task", "Two: choosing and repeating", "None, order alone is enough"]
answer: 1
right: Right. Sequence plus choice plus repetition is enough. Every other fancy feature (functions, objects, callbacks) is a convenience built on top. (This is the structured program theorem; the history date is in the margin note.)
wrong: Without a way to choose you could never react to input, and without a way to repeat you would need a million lines to do a million steps. How many extra ideas does that leave?
:::

## Choosing: if, elif, else {lvl=1 id=s-if label="Foundations"}

A program that does the same thing every time is a recipe card. To react to the world it must **choose**. The tool is `if`, followed by a condition that comes out `True` or `False` (from the last lesson, comparisons such as `age >= 18` give exactly that).

```python
marks = 72
if marks >= 90:
    grade = "A"
elif marks >= 60:
    grade = "B"
else:
    grade = "C"
print(grade)     # B
```

Python reads the conditions top to bottom and takes the **first** one that is `True`. Even though 72 is also at least 0, `elif marks >= 60` is hit before `else`. The indented lines under each condition are its **block**: indentation is how Python knows which lines belong together.

Conditions can be joined with `and`, `or` and `not`. `and` needs both sides true; `or` needs at least one. Python stops as soon as the answer is known (**short-circuit**): in `False and f()`, the call to `f` never happens.

:::qc lvl=1
q: With `x = 5`, what does this print? `if x > 3: print("a")` then `elif x > 1: print("b")`.
options: ["a", "b", "a and then b"]
answer: 0
right: Right. Only the first true branch runs. Once x > 3 matches, the elif is skipped even though it is also true.
wrong: elif is checked only if every earlier condition was False.
:::

## Repeating: for and while {lvl=1 id=s-loops label="Foundations"}

To repeat steps there are two loops.

A **for** loop says "do this once for each item". A **while** loop says "keep doing this as long as a condition is true". The ATM story needs the second kind, because we cannot say in advance how many wrong tries the user will make:

```python
correct, tries = "4321", 0
while tries < 3:
    guess = input("PIN: ")
    if guess == correct:
        print("welcome")
        break              # leave the loop at once
    tries += 1
else:
    print("card blocked")  # runs only if we never hit break
```

Read it as: while we have used fewer than three tries, ask; if right, welcome and stop; otherwise count one more try. The odd-looking `else` after a loop runs when the loop ended **normally**, without `break`.

For walking through items or numbers, `for` is shorter and safer:

```python
for k in range(1, 5):   # 1, 2, 3, 4
    print(k)
```

`range(a, b)` starts at `a` and stops **before** `b`, so `range(5)` is `0, 1, 2, 3, 4`: five numbers, not six. `range(2, 10, 3)` gives `2, 5, 8` (step 3), and `range(5, 0, -2)` gives `5, 3, 1`. `continue` skips the rest of the current pass and goes on to the next one.

:::figure caption="A while loop as a flow chart: test the condition, run the body, come back. The invariant is true every time we arrive at the test."
<svg viewBox="0 0 320 170" role="img" aria-label="Flow chart of a while loop: condition test, body, back to the test, exit when false">
<rect x="20" y="62" width="70" height="34" rx="4" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="36" y="84" style="font-size:12px;fill:var(--ink)">set up</text>
<path d="M90 79 L120 79" style="stroke:var(--ink);stroke-width:1.5;fill:none"/>
<path d="M165 54 L210 79 L165 104 L120 79 Z" style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--mat);stroke-width:1.5"/><text x="148" y="83" style="font-size:11px;fill:var(--ink)">still true?</text>
<path d="M165 104 L165 128" style="stroke:var(--mat);stroke-width:1.5;fill:none"/><text x="170" y="120" style="font-size:10px;fill:var(--mat)">yes</text>
<rect x="125" y="128" width="80" height="30" rx="4" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="148" y="147" style="font-size:12px;fill:var(--ink)">body</text>
<path d="M125 143 L100 143 L100 79 L120 79" style="stroke:var(--muted);stroke-width:1.5;fill:none;stroke-dasharray:4 3"/>
<path d="M210 79 L262 79" style="stroke:var(--mat);stroke-width:1.5;fill:none"/><text x="222" y="72" style="font-size:10px;fill:var(--mat)">no</text>
<rect x="262" y="62" width="44" height="34" rx="4" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="272" y="83" style="font-size:12px;fill:var(--ink)">done</text>
</svg>
:::

:::qc lvl=1
q: How many times does the body of `for k in range(3, 8):` run?
options: ["4", "5", "6"]
answer: 1
right: Right. It runs for 3, 4, 5, 6 and 7. The stop value 8 is not included, and the count is stop minus start, 8 - 3 = 5.
wrong: range stops before its second number. List the values it produces and count them.
:::

## Loops that go wrong {lvl=2 id=s-bugs label="SDE-1"}

Three bugs account for most loop trouble.

**The infinite loop.** A `while` whose condition never becomes false:

```python
i = 0
while i < 10:
    print(i)       # forgot to change i: runs for ever
```

A loop stops only if each pass moves something towards the exit. Here nothing does. Fix: `i += 1`. Always ask: what changes on every pass, and in which direction?

**The off-by-one error.** Counting one too many or too few. The usual causes are `range(n)` versus `range(1, n + 1)`, and `<` versus `<=`. A tiny test, with n of 0, 1 and 2, exposes it.

**Editing a list while looping over it.** Python walks by position, so removing an item makes the next item slide into the gap and get skipped:

```python
xs = [2, 4, 6, 8]
for x in xs:
    if x % 2 == 0:
        xs.remove(x)
print(xs)          # [4, 8]: the evens were not all removed
```

Build a new list instead: `xs = [x for x in xs if x % 2 != 0]`, or loop over a copy (`for x in xs[:]`).

**Cost.** A loop inside a loop runs the inner body (outer passes) times (inner passes). Two loops over $n$ items each give about $n \times n$ passes. Checking every pair among 1,000 items is about a million steps; among a million items, a trillion.

:::qc lvl=2
q: What does `for i in range(1, 8): for j in range(1, 8): if i < j: count += 1` count, starting from 0?
options: ["21", "28", "49"]
answer: 0
right: Right. For i = 1 there are 6 values of j above it, then 5, 4, 3, 2, 1: 6+5+4+3+2+1 = 21, which is the number of pairs among 7 items.
wrong: Count pairs where j is bigger than i. For each i, how many j are larger?
:::

## Invariants: why a loop works {lvl=2 id=s-invariant label="SDE-1"}

How do you know a loop is right, without running it on every input? Find something that is **true every time you reach the top of the loop**. Take summing a list:

```python
def total(xs):
    s = 0
    for x in xs:
        s += x          # invariant: s = sum of items seen so far
    return s
```

The **invariant** is: "`s` equals the sum of the items looked at so far". Check three things:

1. **Start.** Before the first pass, no items are seen and `s = 0`. True.
2. **Keep.** If it is true before a pass, adding the next item keeps it true after the pass.
3. **End.** When the items run out, "the items seen so far" means all of them, so `s` is the whole sum.

This is **induction**: a base case and a step. The loop does the stepping; the invariant carries the truth from one pass to the next. You can say the same for finding the biggest item: "`best` is the largest of the items seen so far".

Choosing the invariant first also tells you how to write the loop. If you say "the target, if present, lies between positions `lo` and `hi`", the loop body writes itself:

```python
def search(xs, t):          # xs sorted
    lo, hi = 0, len(xs) - 1  # target, if present, is in xs[lo..hi]
    while lo <= hi:
        mid = (lo + hi) // 2
        if xs[mid] == t: return mid
        if xs[mid] < t: lo = mid + 1   # the left part is ruled out
        else: hi = mid - 1             # the right part is ruled out
    return -1                          # range empty, so absent
```

The **variant** is `hi - lo`, which gets strictly smaller on every pass, so the loop must stop. The invariant says that if the target is anywhere, it is still inside `lo..hi`. When the range is empty and the loop exits, the invariant says the target is nowhere. (More on this in the searching lesson.)

:::qc lvl=2
q: In the `total` loop, what is true about `s` just after the loop has processed the first 3 items?
options: ["s is the sum of the first 3 items", "s is the sum of all items", "s is 0"]
answer: 0
right: Right. The invariant says s is the sum of the items seen so far, and 3 have been seen.
wrong: The invariant is about how much has been processed so far, not about the whole list.
:::

## Loops done carefully {lvl=3 id=s-careful label="SDE-2"}

Habits that senior engineers use to keep loops boring:

- **Write the invariant as a comment** before the loop, and check that every branch of the body keeps it. This is the cheapest way to catch off-by-one errors.
- **Choose the loop shape by what you know.** Know the collection: `for`. Know only the stop condition: `while`. Use `while True` with a `break` for "read until a signal arrives".
- **Prefer iteration helpers.** `for i, x in enumerate(xs)` gives position and item; `for a, b in zip(xs, ys)` walks two lists together; both avoid error-prone index arithmetic.
- **Keep conditions side-effect free.** A condition that changes state (`while pop() != 0`) hides bugs. Short-circuiting means the right side may never run, so keep important actions out of it.
- **Check the boundaries.** An empty input, one item, two items, and the largest allowed input are the four tests that expose most mistakes.
- **Trust but verify termination.** For every `while`, name the variant, the quantity that moves towards the stop. If you cannot name one, rewrite the loop or add a bounded retry counter, as the ATM does.

Cost is also a design choice. A loop inside a loop is $n^2$ passes: fine for 1,000 items, hopeless for a million. The next steps are usually a smarter way to avoid inner loops, such as a hash set to check "seen before?" in one step (see hash tables).

:::qc lvl=3
q: A `while` loop is meant to stop when `lo > hi`. You change the update from `lo = mid + 1` to `lo = mid`. What can go wrong?
options: ["Nothing, the loop still shrinks", "It may never terminate, since lo may stay equal to mid", "It will crash immediately"]
answer: 1
right: Right. When lo and hi are adjacent, mid equals lo, so lo = mid changes nothing and the range stops shrinking. The variant must strictly decrease on every pass.
wrong: Check what mid equals when the range has only two items. Does hi - lo get smaller?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Every program is built from sequence, choice (if) and repetition (loops). {lvl=1}
2. if/elif/else takes the first true branch; indentation marks the block. {lvl=1}
3. for walks over items; while repeats until a condition fails; range(a, b) stops before b. {lvl=1}
4. A loop stops only if something moves towards the exit on each pass. {lvl=2}
5. Nested loops multiply: n passes inside n passes is n squared. {lvl=2}
6. A loop invariant is true before, stays true each pass, and gives the answer at the end; it is induction. {lvl=2}
7. Name the invariant and the variant before you code a hard loop; test empty, one and two items. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- `range(n)` ends at n - 1; `range(1, n + 1)` is for 1 to n. {lvl=1}
- Forgetting to update the loop variable in a `while` makes an infinite loop. {lvl=1}
- Never remove from or insert into a list while looping over it; build a new list. {lvl=2}
- `if x = 3` is an error and `if x == 3` is the test; one equals sign binds a name. {lvl=1}
- Nested loops multiply the cost; look for a smarter way when n is large. {lvl=2}
- Setting `lo = mid` instead of `lo = mid + 1` in a search can freeze the loop. {lvl=3}
- The `else` after a loop runs only when no `break` happened. {lvl=2}
:::
