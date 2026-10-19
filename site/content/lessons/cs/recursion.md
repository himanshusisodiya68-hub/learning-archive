---
title: Recursion
summary: How a problem made of smaller copies of itself, like folders inside folders, gets solved by a function that calls itself and knows when to stop.
ncert: []
up_to: SDE-2
builds_on: [Functions, Decisions and loops]
notes_prompt: Explain to a friend how you would count all the files in a folder that contains folders inside folders, without knowing how deep they go.
margin:
  - kind: history
    title: History
    text: Recursive definitions are old in mathematics, but programming languages only began to allow functions to call themselves around 1960, with Lisp and ALGOL 60. [Unverified]
  - kind: tip
    title: Interview favourite
    text: 'If you can say "the answer for n is built from the answer for a smaller n", you have a recursion. Trees, nested data, subsets, permutations and divide and conquer are all this pattern.'
  - kind: olympiad
    title: Design link
    text: Recursion is the same idea as mathematical induction, run forwards. Proving a recursive function correct is an induction proof, with the base case as the first step.
books:
  - { title: "H. Abelson and G. Sussman, Structure and Interpretation of Computer Programs", ref: "Ch. 1.2 Procedures and the Processes They Generate [Unverified]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 2 and Ch. 4 on divide and conquer [Unverified]" }
cards:
  - { front: "What two parts does every recursive function need?", back: "A base case that answers the smallest version directly, and a recursive step that reduces the problem and calls itself on the smaller piece." }
  - { front: "What happens if there is no base case, or it is never reached?", back: "The calls never stop. The stack of waiting calls grows until Python raises RecursionError (stack overflow)." }
  - { front: "What is the call stack?", back: "The pile of unfinished calls. Each call gets a frame holding its own variables and where to return. The newest call is on top and finishes first." }
  - { front: "How many calls does naive fib(n) make, roughly?", back: "About 1.6^n: it doubles, roughly, with each step up in n, because it re-solves the same sub-problems again and again." }
  - { front: "What does memoisation do?", back: "Stores each answer the first time it is computed and reuses it. Naive fib then makes only about n+1 distinct calls, so O(n)." }
  - { front: "Does Python optimise tail calls?", back: "No. Very deep recursion, around a thousand levels by default, fails with RecursionError, so use a loop or an explicit stack." }
core:
  idea: 'A recursive function solves a problem by handing a smaller copy of the same problem to itself, and stops at a case so small it can be answered directly. It always needs a base case and always needs the problem to shrink.'
  formulas:
    - tex: 'n! = n \times (n-1)!,\quad 0! = 1'
      label: 'Recursive step and base case together'
    - tex: 'T(n) = T(n-1) + T(n-2) + 1'
      label: 'Calls made by naive Fibonacci: exponential growth'
  conditions:
    - 'There is a base case that is answered without a recursive call'
    - 'Every recursive call moves strictly closer to a base case'
    - 'The depth stays within the language limit (about 1000 in Python by default)'
  sign: 'Commonest mistake: a base case that is never reached, such as recursing on n + 1 when you meant n - 1, or testing n == 0 when n can start negative.'
outcomes:
  - 'Write a recursive function with a correct base case and recursive step'
  - 'Trace a recursive call on the call stack and say what each frame holds'
  - 'Draw a recursion tree and use it to estimate cost'
  - 'Recognise repeated sub-problems and say how memoisation removes them'
  - 'Decide when to turn a recursion into a loop with an explicit stack'
opener:
  story: |
    Right-click a folder on your computer, choose **Properties**, and it tells you the total size: say 4.2 GB. That folder has files in it, but also folders, and those folders have more folders, and who knows how deep it goes.

    Yet the computer does not give up and says "too many levels". Think about how you would write the rule. "Add up the sizes of the files, then do the same for each folder inside" works for a folder with one level of folders. But how many levels do you plan for? Ten? A thousand?

    The trick is to notice that the rule for a folder uses the rule for a folder. What would it mean to write a rule that uses itself?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Nested folders, each holding a smaller folder, like Russian dolls"><rect x="14" y="20" width="292" height="200" rx="12" style="fill:color-mix(in srgb,var(--c) 6%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="26" y="42" style="font-size:12px;fill:var(--ink)">Photos</text><rect x="44" y="56" width="232" height="152" rx="10" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="56" y="76" style="font-size:12px;fill:var(--ink)">2025</text><rect x="74" y="90" width="172" height="106" rx="8" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="86" y="110" style="font-size:12px;fill:var(--ink)">Goa trip</text><rect x="104" y="124" width="112" height="60" rx="6" style="fill:color-mix(in srgb,var(--c) 20%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="116" y="144" style="font-size:12px;fill:var(--ink)">Beach</text><text x="116" y="164" style="font-size:10px;fill:var(--muted)">a.jpg  b.jpg</text></svg>'
life:
  - 'Your computer''s folder size, search and copy-folder all walk folders inside folders by recursion.'
  - 'A web page is boxes inside boxes (the DOM); the browser draws it by drawing each box, then the boxes inside it.'
  - 'A family tree or a company org chart: "count everyone under this person" is the same question asked of each child.'
  - 'Two mirrors facing each other, or the picture on a cow-brand packet that holds a smaller picture of itself, show the self-similar shape recursion describes.'
  - 'Python itself reads your nested lists, JSON data and arithmetic like (2 + (3 * 4)) with recursive rules.'
models:
  - name: 'Trust the smaller case'
    text: 'To solve a big problem, assume you already can solve the slightly smaller one, then explain only the one extra step. Delegation works like this: a manager hands on a smaller task and trusts it will come back done.'
  - name: 'Always know where you stop'
    text: 'Any process that repeats needs a stopping rule that it is guaranteed to reach. Plans, negotiations and loops in your own life that have no end condition run forever.'
  - name: 'Do not redo work you already did'
    text: 'Naive recursion solves the same small problem many times over. Writing down an answer the first time is the idea behind notes, caches and savings alike.'
links:
  - leaf: 'mat/induction'
    name: 'Induction'
    same: 'Both are a base case plus a step that leans on the smaller case. A recursive function is an induction proof you can run.'
    differs: 'Induction proves a statement is true for all n; recursion computes an answer for one n.'
  - leaf: 'cs/divide-and-conquer'
    name: 'Divide and conquer'
    same: 'Merge sort and binary search split a problem into smaller copies of itself and solve them recursively.'
    differs: 'Divide and conquer deliberately splits into pieces of about equal size, which keeps the depth small.'
  - leaf: 'cs/dynamic-programming'
    name: 'Dynamic programming'
    same: 'Starts from a recursion whose sub-problems overlap, such as Fibonacci.'
    differs: 'Stores the answers (memoisation) or fills them in from the bottom up, so each sub-problem is solved only once.'
next:
  q: 'The fast Fibonacci remembers each answer so it never recomputes it. A remembered answer needs a place to live and a way to be found again by n. What are the everyday containers a program uses to hold many values, and how do you choose among them?'
  leaf: 'cs/collections'
  name: 'Lists, dictionaries and sets'
symbols:
  - s: 'n'
    means: 'the size of the problem, such as the number we are asking about (count)'
  - s: 'n!'
    means: 'n factorial: the product n × (n-1) × ... × 1; read it "n factorial"'
  - s: 'T(n)'
    means: 'number of calls (or steps) needed for a problem of size n'
  - s: '\text{base case}'
    means: 'the smallest version of the problem, answered directly with no further call'
  - s: '\text{frame}'
    means: 'the workspace for one call on the call stack: its variables and where to return to'
  - s: 'O(n)'
    means: 'cost that grows in step with n'
  - s: 'O(2^n)'
    means: 'cost that doubles each time n goes up by one: exponential'
---

:::hook
q: Here's the puzzle. A folder can hold folders to any depth. What kind of rule can add up its size without knowing how deep it goes?
options: ["A separate loop for each level of depth", "One rule that calls itself on every folder inside", "It cannot be done in general"]
answer: 1
right: Right. The size of a folder is its files plus the size of each folder inside it, and each of those is found by the very same rule. Folders nest, so the rule can too. (How any particular operating system does this is not stated here. [Inference])
wrong: Writing one loop per level would need to know the depth in advance. Can the rule for a folder refer to the rule for a smaller folder?
:::

## A rule that uses itself {lvl=1 id=s-idea label="Foundations"}

Think of Russian dolls. To know how many dolls are in the set, you can say: "open the biggest, count it as one, then count the dolls in the set inside it." The set inside is the same problem, only smaller. Eventually you reach a doll with nothing inside, and the counting stops.

That is **recursion**: solving a problem by solving a smaller copy of the same problem. Here is a countdown that does it.

```python
def countdown(n):
    if n == 0:
        print("liftoff")
        return
    print(n)
    countdown(n - 1)

countdown(3)     # prints 3, 2, 1, liftoff
```

Read it aloud: "to count down from n: if n is 0, say liftoff and stop; otherwise say n, then count down from n minus 1." The function calls itself, and each call has a smaller number.

## Base case and recursive step {lvl=1 id=s-two label="Foundations"}

Every recursion needs exactly two ingredients.

- A **base case**: a version so small the answer is known without any more calls. In `countdown`, that is `n == 0`.
- A **recursive step**: reduce the problem and call yourself on the smaller one, trusting that call to work.

Here is the **factorial**, the product of the whole numbers from n down to 1 (so $4! = 4 \times 3 \times 2 \times 1 = 24$). Notice $4! = 4 \times 3!$, so the step is "n times the factorial of n minus 1".

```python
def factorial(n):
    if n <= 1:
        return 1               # base case
    return n * factorial(n - 1)    # recursive step

print(factorial(4))            # 24
```

Read the formula aloud: "n factorial is n times (n minus 1) factorial, and zero factorial is one." If you forget the base case, or never reach it, the calls pile up without end and Python stops you with a `RecursionError`.

:::qc lvl=1
q: What happens if factorial has no base case?
options: ["It returns 1 anyway", "It keeps calling itself until Python raises RecursionError", "It returns 0"]
answer: 1
right: Right. With nothing to stop it, each call makes another, and the pile of waiting calls grows until Python gives up.
wrong: Which line is supposed to make the calls stop?
:::

## The call stack {lvl=2 id=s-stack label="SDE-1"}

When factorial(3) calls factorial(2), the first call is not finished: it is waiting for an answer to multiply by 3. The computer must remember where it was. It does so on the **call stack**, a pile of **frames**, one per unfinished call, each holding that call's own variables. The newest call sits on top, and only the top one is running.

:::figure caption="factorial(3) at its deepest. Frames pile up on the way down, then finish from the top on the way back."
<svg viewBox="0 0 400 170" role="img" aria-label="Three stacked frames: factorial(3) waits, factorial(2) waits, factorial(1) returns 1">
<rect x="10" y="16" width="210" height="38" rx="6" style="fill:none;stroke:var(--mat);stroke-width:2"/>
<text x="20" y="40" style="font-size:11px;fill:var(--ink)">factorial(1): n=1 → return 1</text>
<rect x="10" y="58" width="210" height="38" rx="6" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
<text x="20" y="82" style="font-size:11px;fill:var(--ink)">factorial(2): waits, n=2</text>
<rect x="10" y="100" width="210" height="38" rx="6" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
<text x="20" y="124" style="font-size:11px;fill:var(--ink)">factorial(3): waits, n=3</text>
<path d="M240 130 L240 28" class="pen"/>
<text x="248" y="30" style="font-size:10px;fill:var(--muted)">top: running</text>
<text x="248" y="128" style="font-size:10px;fill:var(--muted)">bottom: first call</text>
<text x="10" y="160" style="font-size:10px;fill:var(--muted)">unwind: 1, then 2×1 = 2, then 3×2 = 6</text>
</svg>
:::

Each frame costs memory, so a recursion that goes $n$ deep uses $O(n)$ space, even if it does little else. Python allows about 1000 frames by default (`sys.getrecursionlimit()`), so counting down from a million recursively fails with a stack overflow. This is why a recursion needs depth you can bound, and why a loop is sometimes the better tool.

:::qc lvl=2
q: In factorial(3), which call finishes first?
options: ["factorial(3), because it started first", "factorial(1), the top of the stack", "All together"]
answer: 1
right: Right. The newest call is on top. It returns 1, which lets factorial(2) finish, which lets factorial(3) finish. Last in, first out.
wrong: Which call is not waiting for any other call?
:::

## Recursion trees {lvl=2 id=s-tree label="SDE-1"}

When a function makes **one** call, the calls form a line. When it makes **two**, they form a tree, and the shape of the tree tells you the cost. The famous example is the Fibonacci numbers, where each number is the sum of the two before it (0, 1, 1, 2, 3, 5, 8, ...):

```python
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
```

Here is the tree of calls for `fib(4)`. Each box is one call; count them.

:::figure caption="Calls made by fib(4): nine in all. fib(2) is computed twice, fib(1) three times."
<svg viewBox="0 0 320 180" role="img" aria-label="Recursion tree of fib(4) with nine nodes">
<g style="fill:none;stroke:var(--muted);stroke-width:1.4">
<path d="M144.9 29.8 L105.1 50.2 M175.1 29.8 L214.9 50.2 M78.6 70.6 L61.4 89.4 M101.4 70.6 L118.6 89.4 M220.4 72.0 L209.6 88.0 M239.6 72.0 L250.4 88.0 M41.6 116.8 L33.4 131.2 M58.4 116.8 L66.6 131.2"/>
</g>
<g style="font-size:10px;fill:var(--ink);text-anchor:middle">
<circle cx="160" cy="22" r="15" style="fill:var(--surface);stroke:var(--ink)"/><text x="160" y="26">f(4)</text>
<circle cx="90" cy="58" r="15" style="fill:var(--surface);stroke:var(--ink)"/><text x="90" y="62">f(3)</text>
<circle cx="230" cy="58" r="15" style="fill:var(--surface);stroke:var(--mat);stroke-width:2"/><text x="230" y="62">f(2)</text>
<circle cx="50" cy="102" r="15" style="fill:var(--surface);stroke:var(--mat);stroke-width:2"/><text x="50" y="106">f(2)</text>
<circle cx="130" cy="102" r="15" style="fill:var(--surface);stroke:var(--ink)"/><text x="130" y="106">f(1)</text>
<circle cx="200" cy="102" r="15" style="fill:var(--surface);stroke:var(--ink)"/><text x="200" y="106">f(1)</text>
<circle cx="260" cy="102" r="15" style="fill:var(--surface);stroke:var(--ink)"/><text x="260" y="106">f(0)</text>
<circle cx="25" cy="146" r="15" style="fill:var(--surface);stroke:var(--ink)"/><text x="25" y="150">f(1)</text>
<circle cx="75" cy="146" r="15" style="fill:var(--surface);stroke:var(--ink)"/><text x="75" y="150">f(0)</text>
</g>
</svg>
:::

Let $T(n)$ be the number of calls. The root is one call, plus the calls of its two children, so $T(n) = 1 + T(n-1) + T(n-2)$. Read it as: "the calls for n are one, plus those for n minus 1, plus those for n minus 2." This gives 9 calls for n = 4, 15 for n = 5, 25 for n = 6, and about 2.7 million for `fib(30)`. Each step up in n multiplies the work by about 1.6, so the cost is exponential, close to $O(2^n)$.

A tree's shape is a quick way to estimate the cost of any recursion:

| Shape of the calls | Example | Cost |
|---|---|---|
| One call on n - 1 | factorial, countdown | $O(n)$ |
| One call on n / 2 | binary search | $O(\log n)$ |
| Two calls on n - 1 or n - 2 | naive Fibonacci | exponential |
| Two calls on n / 2, plus $O(n)$ work to combine | merge sort | $O(n \log n)$ |

:::qc lvl=2
q: Why is naive fib(30) so slow, when fib(30) only involves 30 different inputs?
options: ["Python is slow at addition", "It solves the same sub-problems over and over, millions of calls in all", "It uses too much memory per frame"]
answer: 1
right: Right. fib(2), fib(3) and the others are recomputed in many branches of the tree. There are only 31 different questions, but millions of calls.
wrong: Look at the tree. Do any boxes show the same call more than once?
:::

## Remembering answers: a teaser {lvl=3 id=s-memo label="SDE-2"}

The waste is visible in the tree: the same boxes appear again and again. The cure is **memoisation**: write each answer on a sticky note the first time you compute it, and look at the notes before computing anything. Python gives you one in a line.

```python
from functools import cache

@cache
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(80))     # 23416728348467685, instant
```

The line `@cache` wraps the function so that it keeps a table from argument to result. Now only n + 1 distinct calls ever do real work, so the cost falls from exponential to $O(n)$. This is the doorway to **dynamic programming** (see the link below). It also hints at the next lesson: the sticky notes need a container that can find an answer by its key.

## Recursion on shapes you cannot loop over {lvl=3 id=s-shapes label="SDE-2"}

Recursion earns its keep when the data is nested and its depth is unknown, as with the folder at the start. Here the folder is a dictionary, where a number is a file's size and another dictionary is a subfolder.

```python
def folder_size(folder):
    total = 0
    for name, item in folder.items():
        if isinstance(item, int):
            total += item                  # a file
        else:
            total += folder_size(item)     # a folder: same rule, smaller
    return total
```

For `{"a.txt": 5, "pics": {"x": 20, "y": 30}, "docs": {"cv": 10, "old": {"n": 1}}}` the answer is 66. The base case is hidden in the loop: a folder with no subfolders makes no recursive call.

The same pattern generates choices. All the subsets of a list are the subsets without the first item, plus those same subsets with the first item added:

```python
def subsets(items):
    if not items:
        return [[]]
    rest = subsets(items[1:])
    return rest + [[items[0]] + s for s in rest]

print(subsets([1, 2]))     # [[], [2], [1], [1, 2]]
```

A list of n items has $2^n$ subsets, so this is exponential by nature: no cleverness avoids producing them all.

**Loop or recursion?** Any recursion can be rewritten as a loop with your own stack (a list) standing in for the call stack. Do it when the depth could pass about a thousand, or when speed matters, since Python does not remove tail calls [Unverified for every version]. Keep recursion when it makes the code match the shape of the problem, as in trees and subsets.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Recursion solves a problem by solving a smaller copy of itself. {lvl=1}
2. Every recursion needs a base case and a step that moves toward it. {lvl=1}
3. The call stack holds one frame per unfinished call; the newest finishes first. {lvl=2}
4. A recursion tree shows the calls; its shape gives the cost: a line is O(n), halving is O(log n), two branches on n - 1 is exponential. {lvl=2}
5. Naive Fibonacci repeats sub-problems; memoisation stores answers and cuts the cost to O(n). {lvl=3}
6. Use recursion for nested data and choices; switch to a loop or explicit stack when the depth may exceed the limit. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A missing or unreachable base case gives RecursionError. Check that the argument really shrinks. {lvl=1}
- Base case tested with == can be jumped over: use n <= 1, not n == 1, if n may start below 1. {lvl=1}
- Python's default limit is about 1000 frames; deep recursion on long lists fails. {lvl=2}
- Two recursive calls on n - 1 usually mean an exponential cost unless answers are remembered. {lvl=2}
- Slicing a list in each call (items[1:]) copies it every time, so such recursions cost more than they look. {lvl=3}
- In interviews, state the base case and what the call returns before writing the code. {lvl=2}
:::
