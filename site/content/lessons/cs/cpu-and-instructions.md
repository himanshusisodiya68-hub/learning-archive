---
title: How a CPU runs a program
summary: A processor can only do tiny steps, billions of times a second. See the loop that turns a list of numbers into an app.
ncert: []
up_to: SDE-2
builds_on: [Logic gates and Boolean algebra, Bits and binary]
notes_prompt: Explain to a friend how a chip that can only add, copy and jump manages to run a video app.
margin:
  - kind: history
    title: History
    text: In 1945 John von Neumann's report on the EDVAC described keeping the program in the same memory as the data, the "stored-program" idea behind nearly every computer since [Unverified date from memory]. Intel's 1971 4004 chip ran at under a megahertz; your phone's cores run thousands of times faster.
  - kind: tip
    title: Interview favourite
    text: '"What happens when you run a program?" and "why is a loop over an array faster than over a linked list?" both start here. Know the fetch-decode-execute loop and that the clock is not the only thing that decides speed.'
  - kind: olympiad
    title: Hardest stretch
    text: Running a clock faster costs power much faster than it gains speed, because a faster clock usually needs a higher voltage too. That limit, not the gates, is why clocks stopped rising around 3 to 5 GHz [Unverified].
books:
  - { title: "D. Patterson and J. Hennessy, Computer Organization and Design", ref: "the chapters on instructions, the processor and pipelining [Unverified chapter numbers]" }
  - { title: "C. Petzold, Code: The Hidden Language of Computer Hardware and Software", ref: "the chapters on assembly language and the control unit [Unverified]" }
cards:
  - { front: "What are the three steps a CPU repeats forever?", back: "Fetch the next instruction from memory, decode it (what operation, on what), execute it. Then move on to the next." }
  - { front: "What is the program counter?", back: "A register holding the address of the next instruction. It normally goes up by one step each time; a jump simply overwrites it." }
  - { front: "What is machine code?", back: "A program as numbers: each instruction is a pattern of bits holding an operation code and its operands, stored in memory like any other data." }
  - { front: "A 3 GHz CPU: how long is one clock cycle?", back: "1 / 3 billion of a second, about 0.33 nanoseconds. Simple instructions finish in about one cycle." }
  - { front: "What does pipelining do?", back: "Overlaps the stages of consecutive instructions, like an assembly line, so about one instruction finishes every cycle even though each takes several." }
  - { front: "What is the CPU performance equation?", back: "Time = instructions × cycles per instruction ÷ clock frequency. Speed depends on all three, not on GHz alone." }
core:
  idea: 'A CPU repeats one loop forever: fetch the next instruction from memory, decode what it asks, execute it. Each instruction is a tiny step (add, copy, compare, jump), and billions of them per second add up to every program you run.'
  formulas:
    - tex: 'T = \dfrac{N \times \text{CPI}}{f}'
      label: 'Run time: instructions times cycles each, over clock rate'
    - tex: '\text{cycles} = k + n - 1'
      label: 'Pipeline with k stages running n instructions'
  conditions:
    - 'The program and its data sit in memory as bit patterns; the CPU only touches the few values held in its registers'
    - 'The clock gives every step a fixed beat, slow enough for signals to settle between ticks'
    - 'For the pipeline formula: no stalls, no wrong branch guesses, one instruction enters per cycle'
  sign: 'More GHz does not always mean faster: a chip doing more per cycle, or one that waits less for memory, can beat a higher clock.'
outcomes:
  - 'Name the parts of a simple CPU (registers, program counter, arithmetic unit, control) and what each does'
  - 'Trace a short program through fetch, decode and execute by hand'
  - 'Explain what machine code is and how a compiler or interpreter relates to it'
  - 'Calculate clock-cycle time and total run time from instructions, cycles each and frequency'
  - 'Explain pipelining, why branches hurt it, and how prediction helps'
opener:
  story: |
    A 3 GHz processor is advertised on every laptop box. "3 GHz" means its clock ticks three billion times a second. But **a tick of what?** The chip cannot play a video, search the web or run a game. All it knows how to do is things like *add these two numbers*, *copy that value*, *jump to a different step*.

    So how does something that dull run everything you use? One line of your Python, such as `total = a + b`, may turn into several of these tiny steps, and an app is millions of such lines.

    A blink takes about a tenth of a second. Before you guess how many steps the chip takes in that blink, remember that all it does is the same small loop, again and again.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A loop of three steps, fetch, decode and execute, with a memory strip of instructions beside it"><rect x="14" y="30" width="86" height="180" rx="8" style="fill:none;stroke:var(--ink);stroke-width:1.6"/><text x="30" y="22" style="font-size:11px;fill:var(--muted)">memory</text><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="22" y="40" width="70" height="22"/><rect x="22" y="66" width="70" height="22"/><rect x="22" y="92" width="70" height="22"/><rect x="22" y="118" width="70" height="22"/><rect x="22" y="144" width="70" height="22"/><rect x="22" y="170" width="70" height="22"/></g><rect x="22" y="92" width="70" height="22" style="fill:var(--c);fill-opacity:0.35;stroke:var(--c);stroke-width:2"/><text x="30" y="107" style="font-size:10px;fill:var(--ink)">ADD r0, r1</text><text x="30" y="54" style="font-size:10px;fill:var(--muted)">LOAD r0</text><text x="30" y="80" style="font-size:10px;fill:var(--muted)">LOAD r1</text><path d="M96 103 C128 103 134 70 160 70" style="fill:none;stroke:var(--c);stroke-width:2"/><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"><rect x="160" y="50" width="70" height="30" rx="8"/><rect x="236" y="104" width="70" height="30" rx="8"/><rect x="160" y="158" width="70" height="30" rx="8"/></g><g style="fill:var(--ink);font-size:11px"><text x="174" y="70">fetch</text><text x="250" y="124">decode</text><text x="170" y="178">execute</text></g><g style="fill:none;stroke:var(--c);stroke-width:2"><path d="M230 66 C262 66 268 90 270 104"/><path d="M270 134 C268 158 250 174 230 174"/><path d="M160 174 C130 174 124 124 128 118"/></g><text x="150" y="214" style="font-size:10px;fill:var(--muted)">3 billion times a second</text></svg>'
life:
  - 'Every app, game and website runs as a stream of instructions through this loop on a processor; even the chip in a washing machine does the same, only slower.'
  - 'A recipe card is a program: a cook who follows one line at a time, never looking ahead, is the fetch-decode-execute loop.'
  - 'Your phone listing "8 cores" means eight of these loops running side by side, each on its own list of instructions.'
  - 'When a phone gets hot or the battery drains quickly, it is because billions of switching steps per second turn electricity into heat.'
models:
  - name: 'Simple steps, fast repetition'
    text: 'Enormous capability can come from a tiny repertoire repeated very fast. A cricket innings is just one ball at a time; a city is just people doing small jobs. Ask what the repeated small step is.'
  - name: 'The assembly line'
    text: 'Overlapping the stages of different jobs does not make one job faster, but it raises how many finish per hour. Kitchens, factories and exam-paper marking all gain throughput this way.'
  - name: 'The slowest part sets the pace'
    text: 'A pipeline, a convoy and a project all move at the speed of their slowest stage. Before speeding up anything, find the stage everything else is waiting on.'
links:
  - leaf: 'cs/logic-gates'
    name: 'Logic gates'
    same: 'The CPU''s arithmetic unit is a bank of the adders and gates from that lesson, and its registers are rows of latches.'
    differs: 'Gates alone compute one answer from the current inputs; a CPU adds a program counter and memory so it can run a different sequence of steps.'
  - leaf: 'cs/compilers-and-interpreters'
    name: 'Compilers and interpreters'
    same: 'Both exist to turn a human-friendly language into the instructions this lesson describes.'
    differs: 'A compiler translates the whole program to machine code ahead of time; an interpreter reads and carries out your code step by step as it runs.'
  - leaf: 'cs/processes-and-threads'
    name: 'Processes and threads'
    same: 'Each running program is a stream of instructions through this loop.'
    differs: 'The operating system shares one CPU among many streams by switching fast between them; this lesson follows just one stream.'
next:
  q: 'A 3 GHz CPU can finish a step every third of a nanosecond, yet fetching a value from main memory takes roughly a hundred nanoseconds. Why doesn''t the CPU spend nearly all its life waiting?'
  leaf: 'cs/memory-hierarchy'
  name: 'Memory hierarchy and caches'
symbols:
  - s: 'f'
    means: 'clock frequency: ticks per second (hertz, Hz; 1 GHz is a billion ticks per second)'
  - s: 'N'
    means: 'number of instructions the program executes (count)'
  - s: '\text{CPI}'
    means: 'cycles per instruction: average clock ticks one instruction takes (cycles)'
  - s: 'T'
    means: 'total run time (seconds)'
  - s: 'k'
    means: 'number of stages in a pipeline (count)'
  - s: 'n'
    means: 'number of instructions flowing through the pipeline (count)'
  - s: 'PC'
    means: 'program counter: a register holding the address of the next instruction'
---

:::hook
q: Here is the puzzle. How many clock ticks does a 3 GHz CPU make in the 0.1 seconds of a quick blink?
options: ["About 300 thousand", "About 300 million", "About 300 billion"]
answer: 1
right: Right. Three billion ticks a second for a tenth of a second is 300 million. Simple instructions take about one tick each, so a few hundred million tiny steps happen in one blink.
wrong: Multiply: 3,000,000,000 ticks per second times 0.1 second. Count the zeros carefully.
:::

## A very obedient worker {lvl=1 id=s-worker label="Foundations"}

Picture a clerk in a small room with a notebook of numbered steps and a few sticky notes on the desk. The clerk reads step 1, does it, reads step 2, does it, and never asks why. Each step is tiny: "write 5 on sticky note A", "add note B to note A", "if note A is not zero, go back to step 3".

That clerk is a **CPU** (central processing unit). The notebook is **memory**, holding the program. The sticky notes are **registers**, a handful of very fast storage slots right inside the CPU. And each numbered step is an **instruction**.

There are only a few kinds: copy a value, do arithmetic, compare, and **jump** (continue from a different step instead of the next). That is the entire vocabulary. Everything else comes from combining them.

:::qc lvl=1
q: Which of these is a single CPU instruction?
options: ["Play this video", "Add two numbers", "Search the internet"]
answer: 1
right: Right. A CPU's own instructions are tiny: add, copy, compare, jump. Playing a video is millions of them.
wrong: Think of the clerk with sticky notes. Which of these could be done in one small step?
:::

## Fetch, decode, execute {lvl=1 id=s-loop label="Foundations"}

The clerk needs to remember where they are in the notebook. A special sticky note called the **program counter** (PC) holds the number of the next step. Every instruction then goes through the same three beats:

1. **Fetch**: read the step the PC points to, and add 1 to the PC.
2. **Decode**: work out what it asks (which operation, on which registers).
3. **Execute**: do it, for example send two registers through the adder from the previous lesson and store the answer.

Then back to step 1, forever. A jump instruction just writes a new number into the PC, which is all a loop or an `if` really is at this level.

:::figure caption="The loop a CPU repeats billions of times a second. The program counter picks the highlighted instruction; a jump changes the program counter."
<svg viewBox="0 0 360 170" role="img" aria-label="Memory of instructions on the left, the CPU loop of fetch, decode and execute in the middle, registers and arithmetic unit on the right">
<rect x="14" y="14" width="96" height="142" rx="8" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="22" y="24" width="80" height="22"/><rect x="22" y="50" width="80" height="22"/><rect x="22" y="76" width="80" height="22"/><rect x="22" y="102" width="80" height="22"/><rect x="22" y="128" width="80" height="22"/></g>
<rect x="22" y="76" width="80" height="22" style="fill:var(--c);fill-opacity:0.35;stroke:var(--c);stroke-width:2"/>
<g style="fill:var(--ink);font-size:10px"><text x="28" y="40">LOAD r0, 5</text><text x="28" y="66">LOAD r1, 3</text><text x="28" y="92">ADD r0, r1</text><text x="28" y="118">STORE r0</text><text x="28" y="144">HALT</text></g>
<text x="46" y="170" style="font-size:10px;fill:var(--muted)">memory</text>
<path d="M104 87 L140 87" style="stroke:var(--c);stroke-width:2;fill:none"/>
<text x="106" y="80" style="font-size:9px;fill:var(--c)">PC = 2</text>
<g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.8"><rect x="140" y="26" width="70" height="28" rx="7"/><rect x="140" y="70" width="70" height="28" rx="7"/><rect x="140" y="114" width="70" height="28" rx="7"/></g>
<g style="fill:var(--ink);font-size:11px;text-anchor:middle"><text x="175" y="44">fetch</text><text x="175" y="88">decode</text><text x="175" y="132">execute</text></g>
<g style="stroke:var(--c);stroke-width:1.6;fill:none"><path d="M175 54 L175 70"/><path d="M175 98 L175 114"/></g>
<rect x="240" y="26" width="108" height="64" rx="8" style="fill:none;stroke:var(--ink);stroke-width:1.4"/>
<g style="fill:var(--ink);font-size:10px"><text x="248" y="44">registers</text><text x="248" y="60">r0 = 5   r1 = 3</text><text x="248" y="78">r0 = 8 after ADD</text></g>
<rect x="240" y="106" width="108" height="36" rx="8" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.8"/>
<text x="266" y="128" style="font-size:11px;fill:var(--ink)">adder (ALU)</text>
<path d="M210 128 L240 124" style="stroke:var(--c);stroke-width:1.6;fill:none"/>
<path d="M294 106 L294 90" style="stroke:var(--c);stroke-width:1.6;fill:none"/>
</svg>
:::

:::qc lvl=1
q: What does a jump instruction change?
options: ["The program counter", "The clock speed", "The contents of memory only"]
answer: 0
right: Right. Writing a new number into the program counter makes the CPU continue from a different step, which is how loops and decisions work.
wrong: What tells the CPU which step to fetch next?
:::

## Machine code and a toy CPU {lvl=2 id=s-machine label="SDE-1"}

An instruction in memory is just a pattern of bits. A real instruction packs an **opcode** (which operation) and **operands** (which registers or what number) into those bits. A made-up 8-bit example: the first 4 bits mean ADD, the next 2 pick the first register, the last 2 the second. `0001 00 01` then means "add register 1 into register 0". Real encodings are longer and messier, but the idea is the same. The list of such patterns is **machine code**, and the human-readable spelling of it (`ADD r0, r1`) is **assembly**.

Because program and data are both just numbers in memory (the **stored-program** idea), a CPU can load any program, and a compiler is just a program whose output is another program. Python's interpreter is itself machine code, which reads your Python and acts on it.

Here is a toy CPU in Python that sums 5+4+3+2+1 with a loop. Each instruction is `(operation, a, b)`:

```python
def run(prog):
    reg, pc = [0, 0, 0, 0], 0          # registers and program counter
    while True:
        op, a, b = prog[pc]            # fetch
        pc += 1
        if   op == "LOAD": reg[a] = b          # decode, then execute
        elif op == "ADD":  reg[a] += reg[b]
        elif op == "SUBI": reg[a] -= b
        elif op == "JNZ":  pc = b if reg[a] else pc   # jump if not zero
        elif op == "HALT": return reg
prog = [("LOAD",0,0), ("LOAD",1,5), ("ADD",0,1),
        ("SUBI",1,1), ("JNZ",1,2), ("HALT",0,0)]
print(run(prog)[0])    # 15
```

Steps 2 to 4 form a loop: add the counter to the total, count down, and jump back to step 2 while the counter is not zero. The `if` and `while` of high-level code become exactly this pattern of compare and jump.

:::qc lvl=2
q: In the toy program, which instruction makes the loop repeat?
options: ["ADD", "SUBI", "JNZ"]
answer: 2
right: Right. JNZ ("jump if not zero") rewrites the program counter back to step 2 until the counter reaches zero.
wrong: Look for the instruction that changes the program counter instead of letting it move to the next step.
:::

## The clock {lvl=2 id=s-clock label="SDE-1"}

A CPU does not run continuously: a **clock** sends out a steady beat, and at each tick the circuits move to the next state. Between ticks the signals ripple through the gates and settle. The clock must be slow enough for the slowest path to finish, which is why gate delays (previous lesson) set the speed limit.

A 3 GHz clock ticks $3 \times 10^9$ times a second, so one tick lasts $1/(3\times10^9) \approx 0.33$ ns. In that time light in a vacuum travels only about 10 cm, and signals in a chip's wires travel slower than light [Unverified fraction]. That is one reason chips are small.

Simple instructions can finish in about one tick, but some (a division, or a fetch from far-away memory) take many. The average is the **cycles per instruction (CPI)**, and total run time is then

$$T = \frac{N \times \text{CPI}}{f}$$

Read it as: the work (instructions times cycles each) divided by how fast the ticks come. A program of 3 billion instructions at 1 CPI on a 3 GHz chip takes 1 second. Halve the CPI and you gain as much as doubling the frequency.

| Lever | How it speeds the program | Cost |
|---|---|---|
| Fewer instructions (N) | Better algorithm or compiler | Developer effort |
| Fewer cycles each (CPI) | Pipelining, caches, smarter hardware | More transistors |
| Faster clock (f) | More ticks per second | Heat and power |

:::qc lvl=2
q: A chip runs 6 billion instructions at 2 CPI on a 4 GHz clock. How long does it take?
options: ["1.5 seconds", "3 seconds", "12 seconds"]
answer: 1
right: Right. 6 billion times 2 is 12 billion cycles, and 4 billion cycles a second gives 3 seconds.
wrong: Total cycles are N times CPI. Divide that by cycles per second.
:::

## Pipelining {lvl=3 id=s-pipeline label="SDE-2"}

Doing laundry, you do not wait for load 1 to be washed, dried and folded before putting load 2 into the washer. While load 1 dries, load 2 washes. A CPU does the same: split each instruction into stages (say fetch, decode, execute, write result) and start a new instruction every tick, so four instructions are in flight at once.

| Cycle | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Instr 1 | Fetch | Decode | Execute | Write | | | |
| Instr 2 | | Fetch | Decode | Execute | Write | | |
| Instr 3 | | | Fetch | Decode | Execute | Write | |
| Instr 4 | | | | Fetch | Decode | Execute | Write |

With $k$ stages and $n$ instructions the pipeline needs $k + n - 1$ cycles, against $k \times n$ without overlap. Read it as: fill the line once, then one instruction completes per tick. For 4 stages and 4 instructions that is 7 cycles instead of 16; for a thousand instructions it is 1,003 instead of 4,000, nearly 4 times faster. Each instruction still takes $k$ cycles, so **latency** is unchanged; **throughput** is what rises.

The catch is **hazards**. If instruction 2 needs the result of instruction 1, it must wait. Worse is a **branch**: the CPU must fetch the next instruction before it knows whether the jump will be taken. Real CPUs guess with a **branch predictor**, and carry on fetching down the guessed path. A right guess costs nothing; a wrong one throws away the work in flight, which takes tens of cycles on deep pipelines [Unverified]. Suppose one instruction in five is a branch, the predictor is wrong on one branch in ten, and a wrong guess wastes 15 cycles. Then the average CPI is $1 + 0.2 \times 0.1 \times 15 = 1.3$.

:::qc lvl=3
q: A 5-stage pipeline runs 100 instructions with no stalls. How many cycles?
options: ["104", "105", "500"]
answer: 0
right: Right. k + n − 1 = 5 + 100 − 1 = 104: five cycles to fill the line, then one more finishes each cycle.
wrong: Use k + n − 1. Without overlap it would be 500, but overlap is the point.
:::

## Doing more per tick {lvl=3 id=s-more label="SDE-2"}

Modern cores go further. A **superscalar** core starts several instructions per tick, and an **out-of-order** core runs a later instruction while an earlier one waits for data, as long as the answers stay as if each had run in order. **Multiple cores** run several instruction streams in parallel, but a single program only benefits if it is written to split its work (see the lessons on concurrency).

All this fancy machinery serves one goal: keep the CPU busy. And the commonest cause of idleness is the CPU waiting for data from memory, which is hundreds of times slower than a tick. That is the subject of the next lesson. [Inference: the exact designs of commercial cores are mostly not public; this is the textbook picture.]

:::qc lvl=3
q: What does pipelining improve?
options: ["How long one instruction takes", "How many instructions finish per second", "The number of registers"]
answer: 1
right: Right. One instruction still takes all its stages; the gain is that a new one finishes every tick. Throughput rises while latency does not.
wrong: In the laundry picture, does any single load get done sooner, or do more loads get done per hour?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A CPU does only tiny steps (copy, add, compare, jump); programs are millions of them. {lvl=1}
2. It repeats fetch, decode, execute forever; the program counter says which instruction is next, and a jump rewrites it. {lvl=1}
3. Machine code is instructions as bit patterns in memory; assembly is its readable spelling, and compilers translate into it. {lvl=2}
4. The clock sets the beat: 3 GHz is about 0.33 ns a tick, and run time is instructions times CPI over frequency. {lvl=2}
5. Pipelining overlaps stages to finish about one instruction per tick; the cost is hazards, especially wrong branch guesses. {lvl=3}
6. Higher clock is not the only lever; waiting for memory is the usual bottleneck. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- GHz is not speed by itself. Compare time, which depends on instructions, CPI and frequency together. {lvl=1}
- A CPU instruction is not a line of Python; one line can become dozens of instructions. {lvl=2}
- Pipelining does not shorten one instruction's time; it raises throughput. {lvl=2}
- To estimate run time, count cycles, not just instructions: a division or a memory miss can cost far more than an add. {lvl=3}
- Branches in tight loops can slow a program if they are hard to predict, as with random data. {lvl=3}
:::
