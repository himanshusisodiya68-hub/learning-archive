---
title: Compilers and interpreters
summary: How the words you type become electrical activity in a chip, and why the same loop can run a hundred times faster in one language than another.
ncert: []
up_to: SDE-3
builds_on: [The language landscape, How a CPU runs a program]
notes_prompt: Explain to a friend how "x = a + b" typed on a keyboard ends up as something a chip can do, using the words tokens, tree and machine code.
margin:
  - kind: history
    title: History
    text: 'Grace Hopper''s team built one of the first compilers in the early 1950s, and people told her computers could only do arithmetic, not translate English-like words [Unverified details]. The idea that a program can write programs is one of the most productive in computing.'
  - kind: tip
    title: Interview favourite
    text: '"Is Python compiled or interpreted?" The honest answer is both: CPython first compiles your code to bytecode, then a virtual machine interprets that bytecode. Saying so shows you understand the pipeline.'
  - kind: olympiad
    title: Design link
    text: 'Browsers ship a JIT for JavaScript so that a page can start instantly and the hot parts become fast later. Warm-up time versus peak speed is the same trade-off a server faces when it restarts.'
books:
  - { title: "Aho, Lam, Sethi and Ullman, Compilers: Principles, Techniques, and Tools (the Dragon Book)", ref: "Ch. 1 Introduction [Unverified]" }
  - { title: "Nystrom, Crafting Interpreters (free online)", ref: "Part I: a tree-walk interpreter; Part II: a bytecode virtual machine [Unverified]" }
  - { title: "Nisan and Schocken, The Elements of Computing Systems", ref: "Chapters on the virtual machine and the compiler [Unverified]" }
cards:
  - { front: "Stages from source code to running program?", back: "Source text, then tokens (the words), then a syntax tree (the grammar), then bytecode or machine code, then execution." }
  - { front: "Compiler vs interpreter?", back: "A compiler translates the whole program ahead of time into another form (often machine code). An interpreter reads the program and carries it out as it goes, with no separate translated file." }
  - { front: "What is bytecode?", back: "A compact set of instructions for a made-up (virtual) machine. Python and Java compile to bytecode, then a virtual machine runs it." }
  - { front: "What is a JIT compiler?", back: "Just-in-time: while the program runs, it watches which code is hot and compiles that part to machine code on the spot, using what it has learned about the real values." }
  - { front: "Why is plain Python slower than C on a tight loop?", back: "Each step goes through the interpreter, checks types at run time and handles values as heap objects. C does the same step as one or two machine instructions with types fixed in advance." }
  - { front: "How do Python programs get fast anyway?", back: "By calling libraries written in C (such as NumPy) for the heavy work, or by running on an implementation with a JIT. Often by choosing a better algorithm." }
core:
  idea: 'A program in any language must be translated into the small numbered instructions a CPU can execute. A compiler translates ahead of time; an interpreter translates and runs as it goes; most real systems mix both with bytecode and a JIT. The language gets its speed from how much work is done before and during the run.'
  formulas:
    - tex: '\text{source} \to \text{tokens} \to \text{tree} \to \text{bytecode or machine code} \to \text{run}'
      label: 'The pipeline every language implementation follows (some steps are skipped or merged)'
    - tex: '\text{run time} \approx \text{operations} \times \text{cost per operation}'
      label: 'Algorithm reduces the first factor; the implementation reduces the second'
  conditions:
    - 'A language is a specification; "compiled" or "interpreted" describes an implementation of it'
    - 'The same program can run on different implementations (CPython, PyPy) with very different speeds'
    - 'Compilation does not fix a bad algorithm: it lowers the cost per operation, not the number of operations'
  sign: 'Do not say "Python is interpreted, C is compiled" as if it were a law. Python is compiled to bytecode first, and C can be run by an interpreter.'
outcomes:
  - 'Describe the stages from source text to execution'
  - 'Explain the difference between a compiler, an interpreter and a virtual machine'
  - 'Read a simple syntax tree and say why code needs one'
  - 'Explain what bytecode and a JIT are for'
  - 'Give three concrete reasons plain Python is slower than C, and three ways to make it fast anyway'
opener:
  story: |
    You type one line into your editor: `total = price * 3 + tax`. You press Run. A moment later, the answer is on your screen.

    But the chip in your laptop knows nothing about the word `price`. It understands only numbered instructions such as "add the contents of these two tiny storage cells". Somewhere between your keyboard and the chip, a translator read your line, figured out that the multiplication happens before the addition, and produced those numbers.

    Who was the translator, and why does it take 0.1 seconds to run a loop in one language and 10 seconds in another when both loops do exactly the same sums?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A line of code passing through a translator box and coming out as a row of ones and zeros going into a chip"><rect x="10" y="90" width="92" height="60" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="18" y="115" style="font-size:10px;fill:var(--ink)">total = price</text><text x="18" y="130" style="font-size:10px;fill:var(--ink)">* 3 + tax</text><path d="M104 120 L128 120" style="stroke:var(--c);stroke-width:2"/><path d="M122 114 L130 120 L122 126" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="132" y="70" width="78" height="100" rx="10" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="171" y="104" style="font-size:11px;fill:var(--ink);text-anchor:middle">translator</text><text x="171" y="122" style="font-size:9px;fill:var(--muted);text-anchor:middle">words → tree</text><text x="171" y="136" style="font-size:9px;fill:var(--muted);text-anchor:middle">tree → numbers</text><path d="M212 120 L236 120" style="stroke:var(--c);stroke-width:2"/><path d="M230 114 L238 120 L230 126" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="240" y="80" width="68" height="80" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="274" y="104" style="font-size:9px;fill:var(--ink);text-anchor:middle">01101011</text><text x="274" y="120" style="font-size:9px;fill:var(--ink);text-anchor:middle">00110100</text><text x="274" y="136" style="font-size:9px;fill:var(--ink);text-anchor:middle">11010010</text><text x="274" y="150" style="font-size:9px;fill:var(--muted);text-anchor:middle">chip</text><text x="160" y="40" style="font-size:12px;fill:var(--ink);text-anchor:middle">Who speaks to the chip for you?</text><text x="160" y="206" style="font-size:10px;fill:var(--muted);text-anchor:middle">human words in, numbered instructions out</text></svg>'
symbols:
  - s: 'token'
    means: 'one word-like piece of the source text: a name, a number, an operator or a bracket'
  - s: 'syntax tree (AST)'
    means: 'a tree that shows how the tokens group together, for example which operation happens first'
  - s: 'bytecode'
    means: 'compact instructions for a virtual (imaginary) machine, not for a real chip'
  - s: 'machine code'
    means: 'the numbered instructions a real CPU executes directly'
  - s: 'virtual machine (VM)'
    means: 'a program that carries out bytecode instructions one by one'
  - s: 'JIT'
    means: 'just-in-time compiler: compiles hot code to machine code while the program runs'
life:
  - 'When you press Run in an online code editor, a server compiles or interprets your code and sends back the output; the stages below run in a fraction of a second.'
  - 'Opening a web page runs JavaScript that your browser has translated with a JIT, which is why a heavy web app can feel almost like a desktop program.'
  - 'Android apps are shipped as bytecode and translated for your particular phone [Inference: the exact scheme has changed across Android versions].'
  - 'Google Translate does the same job for human languages: split into words, work out the grammar, then produce the other language.'
  - 'A recipe in a book (source), a cook who reads it line by line (interpreter) and a factory that has turned it into a fixed production line (compiled) are the same dish made three ways.'
models:
  - name: 'Translate once, or translate every time'
    text: 'An interpreter pays the translation cost on every run; a compiler pays once and reuses. A speech given live, an interpreter at a meeting, and a printed translation are the same trade-off. Ask whether the work will be repeated.'
  - name: 'Layers of translation'
    text: 'Source becomes tokens, then a tree, then bytecode, then machine code. Each layer hides the one below, which is how complex systems stay understandable. Law, money and the internet all work in layers.'
  - name: 'Learn while doing, then specialise'
    text: 'A JIT starts slow, learns which code is hot, then compiles exactly that. A new employee behaves the same way: slow at first, then fast at the tasks that come up daily. Warm-up is a cost you should budget for.'
links:
  - leaf: 'cs/cpu-and-instructions'
    name: 'How a CPU runs a program'
    same: 'The end of every pipeline is the CPU''s own instruction set: load, add, compare, jump.'
    differs: 'A CPU runs one fixed instruction set; a virtual machine runs a made-up one that is easier to move between chips.'
  - leaf: 'cs/trees'
    name: 'Trees and binary search trees'
    same: 'A syntax tree is a tree: each node has children, and you process it by visiting them in a chosen order.'
    differs: 'A search tree is kept sorted for lookup; a syntax tree is shaped by grammar, and its order carries meaning.'
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'Both ask how much time a program takes.'
    differs: 'Big-O counts how the number of operations grows with input size; compilers only change the cost of each operation. A better algorithm beats a faster language.'
  - leaf: 'cs/language-landscape'
    name: 'The language landscape'
    same: 'Language choices (typing, memory) decide what a compiler can know in advance.'
    differs: 'The landscape lesson sorts languages; this one explains what the implementation does with them.'
next:
  q: 'You wrote a program, and then changed it a hundred times: ten versions of the same file, half of them broken. How do real teams keep every version, let ten people edit at once, and still get one working program?'
  leaf: 'cs/git-and-the-command-line'
  name: 'Git and the command line'
---

:::hook
q: Add the numbers 1 to 100 million in a plain loop. An optimised C program takes about a tenth of a second. About how long does the same loop take in standard Python?
options: ["About the same", "Two to three times longer", "Thirty to a hundred times longer"]
answer: 2
right: Right. On a typical laptop, plain Python takes several seconds. Each loop step passes through an interpreter that checks types and looks things up every time. (Exact figures depend on the machine and version. [Inference])
wrong: It is a lot slower than that. Think of how many steps the interpreter does per addition, versus a chip that does one add instruction.
:::

## From text to action {lvl=1 id=s-pipeline label="Foundations"}

Your source code is just text, the same kind of thing as an email. To run it, something has to do four jobs.

**Job 1: cut the text into words.** The line `total = price * 3 + tax` becomes seven pieces, called **tokens**: `total`, `=`, `price`, `*`, `3`, `+`, `tax`. This step also throws away spaces and comments.

**Job 2: find the grammar.** Words alone do not tell you what to do first. Everyone knows multiplication goes before addition, so the program must group `price * 3` first. The result is a **syntax tree** (a tree, because the groups sit inside bigger groups).

**Job 3: turn the tree into instructions.** Walk the tree and write a list of small, simple steps.

**Job 4: run the instructions.** Either a real chip does it, or a program pretending to be a chip.

:::figure caption="The tree for price * 3 + tax. The multiplication sits lower, so it is worked out first; the addition then combines its result with tax."
<svg viewBox="0 0 360 190" role="img" aria-label="A tree with plus at the top, a times node and tax below it, and price and 3 below the times node">
<g class="pen" style="stroke:var(--ink);stroke-width:1.5;fill:none">
<line x1="180" y1="40" x2="110" y2="95"/><line x1="180" y1="40" x2="250" y2="95"/>
<line x1="110" y1="115" x2="65" y2="160"/><line x1="110" y1="115" x2="155" y2="160"/>
</g>
<g style="font-size:14px;fill:var(--ink);text-anchor:middle">
<circle cx="180" cy="30" r="16" style="fill:color-mix(in srgb,var(--mat) 18%,var(--surface));stroke:var(--mat)"/><text x="180" y="35">+</text>
<circle cx="110" cy="105" r="16" style="fill:color-mix(in srgb,var(--mat) 18%,var(--surface));stroke:var(--mat)"/><text x="110" y="110">*</text>
<circle cx="250" cy="105" r="16" style="fill:var(--surface);stroke:var(--ink)"/><text x="250" y="110" style="font-size:11px">tax</text>
<circle cx="65" cy="165" r="16" style="fill:var(--surface);stroke:var(--ink)"/><text x="65" y="170" style="font-size:11px">price</text>
<circle cx="155" cy="165" r="16" style="fill:var(--surface);stroke:var(--ink)"/><text x="155" y="170" style="font-size:11px">3</text>
</g>
<text x="352" y="170" style="font-size:10px;fill:var(--muted);text-anchor:end">leaves: values</text>
</svg>
:::

You can look at a real tree in Python. The `ast` module parses a line and prints the tree as nested names such as `BinOp` (an operation with a left side, an operator and a right side):

```python
import ast
tree = ast.parse("total = price * 3 + tax")
print(ast.dump(tree.body[0].value, indent=1))
# prints the nested structure: an Add whose left part is a Mult
# of price and 3, and whose right part is tax
```

:::qc lvl=1
q: In what order do the stages run?
options: ["Tree, tokens, run, bytecode", "Tokens, tree, instructions, run", "Run, tokens, tree, instructions"]
answer: 1
right: Right. Words first, then grammar, then instructions, then execution.
wrong: Think about what you need before you can do each step: you cannot find the grammar before you have the words.
:::

## Compiler or interpreter {lvl=1 id=s-two label="Foundations"}

The big difference is **when** job 3 and job 4 happen.

- A **compiler** does jobs 1 to 3 once, before you run anything, and saves the result as a new file (for C, machine code you can run directly). Running is then just job 4. Like printing a translated book: slow to prepare, quick to read, reusable.
- An **interpreter** does all four jobs while the program runs, working through the program as it goes. Like a live interpreter at a meeting: no preparation, but the work is repeated every time.

Neither is "better". Compiling gives speed, and spends your waiting time before the first run. Interpreting gives a short edit-and-run cycle, which is why it suits learning and scripts. And compilers have a bonus: because they see the whole program, they can **check and improve it** before it runs, for example reporting a type mistake or noticing that a calculation is never used.

## Bytecode and virtual machines {lvl=2 id=s-bytecode label="SDE-1"}

Real languages mostly split the difference. Python and Java compile source to **bytecode**: a compact list of simple steps for an imaginary machine. A **virtual machine (VM)** then loops over those steps and does what each one says. Why an imaginary machine? Because bytecode runs unchanged on any chip that has the VM, so you compile once and run anywhere.

Python lets you see its bytecode. The output below is simplified, and the exact instruction names change between Python versions:

```python
import dis
def add(a, b):
    return a + b
dis.dis(add)
# load a, load b, add them, return the result
```

The VM's inner loop is, in essence, "fetch the next step, work out which kind it is, do it, repeat". That fetch-and-decide overhead is paid on **every** step, and it is the first reason plain Python is slower than C, where a step is a single machine instruction.

## Why Python is slower than C {lvl=2 id=s-slow label="SDE-1"}

Take the loop `total += i`. In C the compiler knows `total` and `i` are 32-bit integers, so it emits one add instruction, and the numbers stay in the CPU's registers. In CPython the same line has to:

1. Fetch each instruction through the VM loop.
2. Find out at run time what type `total` and `i` currently are, since in a dynamic language they could be anything.
3. Treat each number as a full **object** on the heap (with a type tag and a reference count), so adding two integers can mean creating a new one.
4. Look the variables up by name in a table.

| Cost per step | C | Plain Python |
|---|---|---|
| Fetch next step | none (CPU does it) | VM loop |
| Type known | at compile time | checked at run time |
| Integer stored as | raw bits in a register | heap object |
| Typical result [Inference] | 1 to 2 machine instructions | dozens to hundreds |

Hence 30 to 100 times for tight loops. Notice what this does **not** mean: nothing in Python makes a good algorithm slow. A $O(n \log n)$ sort in Python beats an $O(n^2)$ one in C once $n$ is large.

Python programmers get speed in three ways:

```python
# 1. Hand the loop to a library written in C
import numpy as np
total = np.arange(1, 100_000_001).sum()   # the loop runs in C

# 2. Use an implementation with a JIT (such as PyPy), or
# 3. Compile the hot function (Cython, Numba).
```

:::qc lvl=2
q: A Python script processes a million numbers in a for loop and takes 4 seconds. Which change is most likely to make it dramatically faster?
options: ["Rename the variables", "Do the arithmetic with a library such as NumPy that runs the loop in C", "Remove the comments"]
answer: 1
right: Right. The per-step overhead is inside the interpreter; moving the whole loop into compiled code removes it. Comments and names are discarded at the first stage and cost nothing at run time.
wrong: Names and comments are thrown away at the tokens stage. The slowness lives in how each step is executed.
:::

## JIT: compiling while running {lvl=3 id=s-jit label="SDE-2"}

A **just-in-time compiler** tries to have it both ways. It starts by interpreting, and counts which pieces of code run again and again (the **hot** code). Those pieces it compiles to machine code on the spot. Java's VM and every browser's JavaScript engine do this.

A JIT has an advantage that an ahead-of-time compiler lacks: it has seen the **real values**. If a function has been called ten thousand times and `a` was an integer every time, the JIT compiles a fast version that assumes integers, with a quick guard that checks the assumption. If the guard ever fails (a string arrives), the code falls back to the slow path. This betting and falling back is called **deoptimisation**.

The costs are real: the program is slower during **warm-up**, the JIT uses memory and CPU of its own, and timing can vary between runs. That is why short command-line tools often prefer ahead-of-time compilation (Go and Rust compile before running and start instantly), while long-running servers happily pay for warm-up.

## What compilers improve {lvl=4 id=s-opt label="SDE-3"}

A good optimising compiler rewrites your program into a faster one that does the same thing. Common transformations:

- **Constant folding**: `60 * 60 * 24` is computed once, at compile time.
- **Inlining**: replace a call to a tiny function with its body, removing call overhead.
- **Dead-code removal**: drop calculations whose results are never used. This is why a benchmark loop that sums to a number you never print can run in no time at all in C, and why careless benchmarks mislead.
- **Loop transformations**: reorder or unroll loops to suit the CPU and its caches.

Dynamic languages find all of these harder, because anything can change at run time (even what `+` means for a class), which is the technical reason for the guards in a JIT. And there is a design question for a team: would you give up some speed for a language whose tooling catches more mistakes before release? Many teams say yes; competitive programmers, where each second counts and the code lives an hour, often say no.

:::qc lvl=4
q: Why can a JIT sometimes generate faster code than a compiler that runs before the program starts?
options: ["It has more memory", "It has observed the real values and types the program uses and can specialise for them", "It skips the grammar check"]
answer: 1
right: Right. Knowing what actually happens at run time lets it make bets that a compiler working from the source alone cannot safely make, with a fallback for when a bet fails.
wrong: Memory is not the point. What does a program that is already running reveal that source text cannot?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Source text is turned into tokens, then a syntax tree, then instructions, then executed. {lvl=1}
2. A compiler translates ahead of time; an interpreter translates as it runs. Real systems mix them. {lvl=1}
3. Python and Java compile to bytecode, which a virtual machine runs; Python's VM adds run-time type checks on every step. {lvl=2}
4. Plain Python is much slower than C on tight loops because of per-step overhead, run-time typing and objects on the heap. {lvl=2}
5. A JIT compiles hot code while running, using observed types, and falls back when a bet fails. {lvl=3}
6. Optimisers fold constants, inline calls and remove dead code, but cannot rescue a poor algorithm. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Compiled" and "interpreted" describe an implementation, not a language: both can be done to the same language. {lvl=1}
- A faster language does not fix a slow algorithm: first reduce the number of operations, then the cost of each. {lvl=2}
- Micro-benchmarks lie: a compiler may delete the work you meant to measure, and a JIT needs warm-up before the numbers settle. {lvl=3}
- Bytecode is not machine code: it needs a virtual machine, and Python's `.pyc` files are cached bytecode, not executables. {lvl=2}
- Use the standard tools to look inside: `ast` for trees and `dis` for Python bytecode. {lvl=2}
:::
