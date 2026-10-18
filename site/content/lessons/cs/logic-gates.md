---
title: Logic gates and Boolean algebra
summary: How a heap of tiny on-off switches can add, decide and remember, and why one kind of switch circuit is enough to build every computer.
ncert: []
up_to: SDE-2
builds_on: [Bits and binary]
notes_prompt: Explain to a friend how two switches wired one after the other can behave like the word "and", and how that leads to a circuit that adds.
margin:
  - kind: history
    title: History
    text: George Boole published his algebra of true and false in 1854, and Claude Shannon showed in his 1937 master's thesis that it describes switching circuits exactly [Unverified dates from memory]. That link is the root of every digital computer.
  - kind: tip
    title: Interview favourite
    text: '"Implement XOR, or an adder, using only NAND" is a classic question. The trick is always the same: write the truth table, then look for a pattern you can repeat.'
  - kind: olympiad
    title: Hardest stretch
    text: Some sets of gates cannot build everything. AND and OR together can never make NOT, because they only ever turn more 1s into more 1s. That is why NOT, or a gate containing it, is essential.
books:
  - { title: "C. Petzold, Code: The Hidden Language of Computer Hardware and Software", ref: "the chapters on logic gates and on adders [Unverified chapter numbers]" }
  - { title: "N. Nisan and S. Schocken, The Elements of Computing Systems (nand2tetris)", ref: "Ch. 1 Boolean Logic and Ch. 2 Boolean Arithmetic [Unverified]" }
cards:
  - { front: "What does a logic gate do?", back: "Takes one or two inputs, each 0 or 1, and gives one output, 0 or 1, by a fixed rule. It is a tiny circuit built from switches." }
  - { front: "When are AND, OR, XOR true?", back: "AND: both inputs are 1. OR: at least one is 1. XOR: exactly one is 1 (they differ)." }
  - { front: "Why is NAND called universal?", back: "NOT, AND and OR can each be made from NAND gates alone, so any circuit can. NOT x = NAND(x, x)." }
  - { front: "What does a half adder compute?", back: "The sum bit is A XOR B and the carry bit is A AND B. It adds two single bits, giving a two-bit answer." }
  - { front: "How is a full adder built?", back: "Two half adders plus an OR gate. It adds A, B and the carry from the column to its right." }
  - { front: "How can gates remember something?", back: "Feed a gate's output back into another gate's input. Two cross-coupled NOR gates settle into one of two stable states and hold a bit (a latch)." }
core:
  idea: 'A logic gate turns bits into a bit by a fixed rule, and gates wired together can add, compare, choose and remember. Every computer is a very large pile of them, and a single kind (NAND) is enough to build the whole pile.'
  formulas:
    - tex: '\text{NAND}(A,B)=\lnot(A\land B)'
      label: 'The universal gate: NOT of AND'
    - tex: 'S = A\oplus B,\qquad C = A\land B'
      label: 'Half adder: sum bit and carry bit'
    - tex: '\lnot(A\land B)=(\lnot A)\lor(\lnot B)'
      label: 'De Morgan: swap AND and OR by flipping every input and the output'
  conditions:
    - 'Every signal is read as exactly 0 or 1 (voltage high or low), never in between'
    - 'A gate gives its answer after a tiny delay, so a circuit must wait long enough before reading its output'
    - 'Circuits without feedback compute; circuits with feedback can also remember'
  sign: 'In Boolean algebra OR is written with a plus sign in many textbooks, but 1 OR 1 is 1, not 2. Do not read it as ordinary addition.'
outcomes:
  - 'Describe AND, OR and NOT as switches, and write the truth table of any small gate circuit'
  - 'Build XOR from the basic gates and explain what it means in words'
  - 'Draw a half adder and a full adder and say how they add two binary numbers'
  - 'Show that NAND alone can make NOT, AND and OR'
  - 'Explain how a transistor makes a gate, and why feedback gives memory'
opener:
  story: |
    You type **7 + 5** into your phone's calculator and it answers **12** before you can blink. But the chip inside contains no numbers and no arithmetic. All it has is a huge number of tiny switches that are either on or off.

    So here is the real puzzle. A light switch can turn a lamp on. Two switches in a row can make the lamp need **both** to be on. Could a pile of such switches, with no thinking at all, add two numbers? And if it can, how many *different* kinds of switch arrangement would you need to build everything a computer does?

    The answer is much smaller than you would guess, and by the end of this lesson you will have built an adder from nothing.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two switches in a row feeding a lamp, then a box labelled adder"><rect x="12" y="52" width="296" height="64" rx="10" style="fill:none;stroke:var(--rule);stroke-width:1.5"/><circle cx="30" cy="84" r="4" style="fill:var(--ink)"/><line x1="34" y1="84" x2="62" y2="84" style="stroke:var(--ink);stroke-width:2"/><line x1="62" y1="84" x2="94" y2="68" style="stroke:var(--c);stroke-width:3"/><line x1="98" y1="84" x2="136" y2="84" style="stroke:var(--ink);stroke-width:2"/><line x1="136" y1="84" x2="168" y2="84" style="stroke:var(--c);stroke-width:3"/><line x1="172" y1="84" x2="210" y2="84" style="stroke:var(--ink);stroke-width:2"/><circle cx="244" cy="84" r="18" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink);stroke-width:2"/><path d="M232 72 L256 96 M256 72 L232 96" style="stroke:var(--ink);stroke-width:1.5"/><line x1="262" y1="84" x2="294" y2="84" style="stroke:var(--ink);stroke-width:2"/><text x="56" y="46" style="font-size:10px;fill:var(--muted)">switch A</text><text x="128" y="46" style="font-size:10px;fill:var(--muted)">switch B</text><text x="222" y="46" style="font-size:10px;fill:var(--muted)">lamp</text><text x="20" y="134" style="font-size:10px;fill:var(--c)">both on = lamp on = AND</text><rect x="20" y="152" width="70" height="30" rx="6" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="30" y="172" style="font-size:11px;fill:var(--ink)">0 1 1 0 1</text><path d="M94 167 L128 167" style="stroke:var(--c);stroke-width:2"/><rect x="132" y="146" width="84" height="42" rx="8" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="146" y="172" style="font-size:12px;fill:var(--ink)">? adder ?</text><path d="M220 167 L254 167" style="stroke:var(--c);stroke-width:2"/><rect x="258" y="152" width="46" height="30" rx="6" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="268" y="172" style="font-size:11px;fill:var(--ink)">1100</text><text x="20" y="214" style="font-size:10px;fill:var(--muted)">7 + 5 = 12, from switches alone</text></svg>'
life:
  - 'A hallway light with a switch at each end is XOR: flip either switch and the light changes; flip both and it changes back.'
  - 'A car that starts only if the key is turned AND the brake is pressed uses an AND gate; a house alarm that rings if the door OR the window opens uses an OR gate.'
  - 'Every phone, laptop, ATM and UPI server is built from billions of transistors acting as gates; a flagship chip holds tens of billions [Unverified count].'
  - 'A wall switch that stays where you leave it is a one-bit memory; a chip remembers a bit with a latch, and billions of them hold your open tabs.'
models:
  - name: 'Few primitives, endless structures'
    text: 'Three small operations, or even one, can build everything a computer does. Look for the smallest set of building blocks in any field (letters, coins, atoms, a few verbs) and ask how the variety arises from combining them.'
  - name: 'Decompose until it is trivial'
    text: 'Adding two 32-bit numbers sounds hard. Adding two single bits is easy. Solve the smallest case, then repeat it along a chain. Most big jobs, from a wedding to a codebase, yield to this.'
  - name: 'Feedback creates memory'
    text: 'A circuit that only flows forward forgets. Loop the output back to the input and it can hold a state. Thermostats, savings accounts and habits all remember because the present feeds back on itself.'
links:
  - leaf: 'cs/bits-and-binary'
    name: 'Bits and binary'
    same: 'Both rest on two states, 0 and 1. Gates are the machines that act on the bits that binary describes.'
    differs: 'Binary is about how to write information; gates are about how to compute with it.'
  - leaf: 'phy/semiconductors-and-diodes'
    name: 'Semiconductors and diodes'
    same: 'The transistor that makes every gate is a semiconductor device whose conduction is switched by a voltage.'
    differs: 'Physics asks how the material conducts at all; this lesson treats the transistor as a perfect on-off switch and ignores the physics.'
  - leaf: 'phy/ohms-law'
    name: 'Ohm''s law'
    same: 'Both involve current through a circuit being switched or limited, and a gate output is just a voltage pushing current.'
    differs: 'Ohm''s law gives a smooth relation between voltage and current; a gate deliberately uses only two extreme voltages.'
next:
  q: 'We can now add two numbers and hold a bit. But what turns a pile of adders and memories into a machine that runs any program you hand it, one step after another?'
  leaf: 'cs/cpu-and-instructions'
  name: 'How a CPU runs a program'
symbols:
  - s: 'A,\ B'
    means: 'input bits to a gate, each 0 or 1'
  - s: '\land'
    means: 'AND: 1 only when both inputs are 1'
  - s: '\lor'
    means: 'OR: 1 when at least one input is 1'
  - s: '\lnot'
    means: 'NOT: flips 0 to 1 and 1 to 0'
  - s: '\oplus'
    means: 'XOR: 1 when exactly one input is 1'
  - s: 'S'
    means: 'sum bit of an adder'
  - s: 'C'
    means: 'carry bit of an adder (the 1 you carry to the next column)'
---

:::hook
q: Here is the puzzle. What is the smallest number of different gate types needed to build a complete computer?
options: ["Hundreds, one per operation", "Three: AND, OR and NOT", "Just one"]
answer: 2
right: Right. A single gate called NAND is enough, because it can imitate NOT, AND and OR, and those three can build anything. (Real chips use several gate shapes for speed and size, but one is enough in principle.)
wrong: Three is the usual textbook set, and it does work, but you can go lower. Try a gate that is "AND, then flip the answer" and see what you get when you tie its two inputs together.
:::

## Switches that think {lvl=1 id=s-switches label="Foundations"}

Forget computers for a moment. A **switch** is either open (no current) or closed (current flows). Call open 0 and closed 1, the same two digits as binary.

Wire two switches **in a row** (in series) with a lamp. Current reaches the lamp only if the first switch is closed **and** the second is closed. That is an **AND gate**: output 1 only when both inputs are 1.

Wire them **side by side** (in parallel). Now current reaches the lamp if the first **or** the second is closed. That is an **OR gate**.

One more: a switch that works backwards, closed when you press nothing and open when you press. That is **NOT**, which flips its input.

A **truth table** lists the output for every possible input. With two inputs there are four rows ($2 \times 2$):

| A | B | AND | OR |
|---|---|-----|----|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 |

Read it as: AND is 1 only in the last row; OR is 0 only in the first row.

```python
def AND(a, b): return a & b   # 1 only if both are 1
def OR(a, b):  return a | b   # 1 if either is 1
def NOT(a):    return 1 - a   # flips 0 and 1
print(AND(1, 1), OR(0, 1), NOT(1))   # 1 1 0
```

:::qc lvl=1
q: A car's engine starts only if the key is turned and the brake is pressed. Which gate is that?
options: ["OR", "AND", "NOT"]
answer: 1
right: Right. Both conditions must hold, like two switches in a row.
wrong: Think of the switches in a row. Does current pass if only one of them is closed?
:::

## XOR and the first adder {lvl=1 id=s-xor label="Foundations"}

Add two single bits by hand. $0+0=0$, $0+1=1$, $1+0=1$, and $1+1=10$ in binary (two, written as a 1 and a 0). So the answer needs two output bits: a **sum** bit (the right digit) and a **carry** bit (the left digit).

Look at the sum column: it is 1 when the inputs **differ**. That is a new gate, **XOR** (exclusive or): 1 when exactly one input is 1. The carry column is 1 only when both inputs are 1, which is plain AND.

| A | B | Sum (XOR) | Carry (AND) |
|---|---|-----------|-------------|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

So one XOR gate and one AND gate, fed the same two inputs, add two bits. This pair is the **half adder**. In symbols, $S = A \oplus B$ and $C = A \land B$. Read it as: the sum is "A and B differ", the carry is "A and B are both one".

```python
def half_adder(a, b):
    return a ^ b, a & b        # (sum, carry)
print(half_adder(1, 1))        # (0, 1): one plus one is "10"
```

:::qc lvl=1
q: What does a half adder output for A = 1 and B = 1?
options: ["Sum 1, carry 0", "Sum 0, carry 1", "Sum 1, carry 1"]
answer: 1
right: Right. One plus one is two, which is written 10 in binary: sum bit 0 and carry bit 1.
wrong: Add by hand in binary. One plus one is two, and two is written 10. Which digit is the sum and which is the carry?
:::

## Full adders and a ladder of columns {lvl=2 id=s-full label="SDE-1"}

To add whole numbers you add column by column from the right, and each column also receives a **carry in** from the column before it. A half adder takes only two inputs, so a column needs a **full adder**: three inputs (A, B and the carry in), two outputs (sum and carry out).

Build it from parts you already have. First half adder adds A and B. A second half adder adds that sum and the carry in. If either half adder produced a carry, the column carries, so join those two carries with an OR.

```python
def full_adder(a, b, cin):
    s1, c1 = half_adder(a, b)
    s2, c2 = half_adder(s1, cin)
    return s2, c1 | c2          # (sum, carry out)
print(full_adder(1, 1, 1))      # (1, 1): 1+1+1 = 3 = "11"
```

Chain several full adders, each passing its carry out into the next one's carry in, and you have a **ripple-carry adder**: a ladder of columns that adds numbers of any width.

:::figure caption="A 4-bit ripple-carry adder. Each box is a full adder; the carry ripples from right to left, just as you carry a 1 when adding by hand."
<svg viewBox="0 0 360 150" role="img" aria-label="Four full adders in a row, carry passing from the right box to the left box">
<g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--ink);stroke-width:1.4"><rect x="20" y="50" width="60" height="44" rx="6"/><rect x="100" y="50" width="60" height="44" rx="6"/><rect x="180" y="50" width="60" height="44" rx="6"/><rect x="260" y="50" width="60" height="44" rx="6"/></g>
<g style="fill:var(--ink);font-size:11px;text-anchor:middle"><text x="50" y="76">FA 3</text><text x="130" y="76">FA 2</text><text x="210" y="76">FA 1</text><text x="290" y="76">FA 0</text></g>
<g style="stroke:var(--c);stroke-width:2;fill:none"><path d="M260 72 L240 72"/><path d="M180 72 L160 72"/><path d="M100 72 L80 72"/><path d="M20 72 L8 72"/><path d="M332 72 L320 72"/></g>
<g style="fill:var(--muted);font-size:10px;text-anchor:middle"><text x="50" y="22">A3 B3</text><text x="130" y="22">A2 B2</text><text x="210" y="22">A1 B1</text><text x="290" y="22">A0 B0</text><text x="50" y="124">S3</text><text x="130" y="124">S2</text><text x="210" y="124">S1</text><text x="290" y="124">S0</text><text x="250" y="64">carry</text><text x="342" y="64">0</text></g>
<g style="stroke:var(--muted);stroke-width:1.2"><path d="M50 28 L50 50"/><path d="M130 28 L130 50"/><path d="M210 28 L210 50"/><path d="M290 28 L290 50"/><path d="M50 94 L50 110"/><path d="M130 94 L130 110"/><path d="M210 94 L210 110"/><path d="M290 94 L290 110"/></g>
</svg>
:::

Now you can see where the answer to the opening puzzle comes from: **7 + 5** is `0111 + 0101`. The rightmost box adds 1+1 and carries; the carry ripples left; four boxes later the sum bits read `1100`, which is 12.

:::qc lvl=2
q: How many full adders does a ripple-carry adder for two 8-bit numbers need?
options: ["1", "8", "16"]
answer: 1
right: Right. One full adder per bit column, eight in a row.
wrong: There is one full adder for each column of the sum. How many columns do 8-bit numbers have?
:::

## One gate to build them all {lvl=2 id=s-nand label="SDE-1"}

The **NAND** gate is AND followed by NOT: it outputs 0 only when both inputs are 1, and 1 otherwise. It looks like a minor variation, but it is **universal**: any circuit can be built from NAND gates alone.

| Want | Built from NAND | Gates |
|---|---|---|
| NOT x | NAND(x, x) | 1 |
| A AND B | NOT(NAND(A, B)) | 2 |
| A OR B | NAND(NOT A, NOT B) | 3 |

Why do these work? Tie both inputs of a NAND together and "both are 1" just means "x is 1", so it flips x: that is NOT. AND is "not NAND" by definition. For OR, the key is **De Morgan's law**: $\lnot(A \land B) = (\lnot A) \lor (\lnot B)$. Read it as: "not both" means "at least one is missing". Apply it to NAND(NOT A, NOT B) and you get $A \lor B$.

```python
def NAND(a, b): return 1 - (a & b)
def NOT(a):     return NAND(a, a)
def AND(a, b):  return NOT(NAND(a, b))
def OR(a, b):   return NAND(NOT(a), NOT(b))
print(OR(0, 0), OR(1, 0), AND(1, 1))   # 0 1 1
```

XOR also fits. With $n = \text{NAND}(A, B)$, the output is $\text{NAND}\big(\text{NAND}(A, n),\ \text{NAND}(B, n)\big)$, four NAND gates in all. That means a half adder is five NAND gates (the AND for the carry is $\lnot n$, which reuses $n$), and a full adder is nine [Inference: derived here by chaining two half adders; I have not checked that nine is the minimum].

:::qc lvl=2
q: Which single NAND gate behaves like NOT?
options: ["NAND(x, 0)", "NAND(x, x)", "NAND(0, 0)"]
answer: 1
right: Right. With both inputs tied together, the output is 1 unless x is 1, which flips x. NAND(x, 0) is always 1 whatever x is.
wrong: Try both inputs equal to x. When x is 1, NAND outputs 0; when x is 0, it outputs 1.
:::

## From switches to transistors {lvl=3 id=s-transistor label="SDE-2"}

Real gates use **transistors**, tiny switches that a voltage on one wire (the gate terminal) opens or closes, with no moving parts. Because the control is itself a voltage, one gate's output can drive the next gate's input, which is why gates chain by the billion.

Modern chips use **CMOS**, which pairs two kinds of transistor. In a CMOS NAND, two transistors in series pull the output down to 0 when both inputs are 1, and two in parallel pull it up to 1 otherwise. A NAND needs four transistors, an AND needs six (NAND plus an inverter), so NAND-style gates are the cheapest [Unverified: standard textbook counts]. That is why the "universal" gate is also the natural one in silicon.

A gate does not answer instantly. A signal takes a tiny time, roughly a few picoseconds to tens of picoseconds in a modern process [Unverified], to pass each gate. This is the **gate delay**. In a ripple-carry adder the last carry must wait for every column in turn, so a 32-bit adder has a carry chain about 32 steps long. Faster adders such as **carry-lookahead** compute carries for groups of columns in parallel, spending more gates to save time, which is the usual speed against area trade-off.

:::qc lvl=3
q: A ripple-carry adder for 64-bit numbers is roughly how many times slower than one for 32-bit numbers?
options: ["The same", "About twice", "About four times"]
answer: 1
right: Right. The carry must pass through every column, so double the columns means roughly double the wait.
wrong: The slowest path is the carry rippling through every column in turn. How does that path's length change with width?
:::

## Gates that remember {lvl=3 id=s-memory label="SDE-2"}

So far every output depends only on the current inputs. To hold a bit you need **feedback**: route an output back into an input.

Take two NOR gates (OR followed by NOT) and cross-connect them: each one's output feeds the other's input. The pair settles into one of two stable states, and a brief pulse on one input (**set**) or the other (**reset**) flips it. When both inputs are 0 it keeps its state. That is an **SR latch**, one stored bit.

```python
def sr_latch(s, r, q):
    # a crude one-step model of two cross-coupled NOR gates
    if s and not r: return 1
    if r and not s: return 0
    return q                    # s = r = 0: hold; s = r = 1 is forbidden
print(sr_latch(1, 0, 0), sr_latch(0, 0, 1))   # 1 1
```

Add a clock so it changes only at chosen moments and you have a **flip-flop**; a row of them is a **register**; billions are your computer's fast memory. Adders and registers are the two ingredients the next lesson wires into a CPU. [Inference: the exact latch and flip-flop circuits used in a given chip differ; this is the textbook form.]

:::qc lvl=3
q: What does an SR latch do when both set and reset are 0?
options: ["Outputs 0", "Outputs 1", "Keeps its previous state"]
answer: 2
right: Right. With no pulse, the cross-coupled feedback holds whatever bit was stored.
wrong: The whole point of the feedback loop is that the circuit is not forced to a new value. What happens when nothing pushes it?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A gate turns input bits into an output bit by a fixed rule; AND needs both, OR needs either, NOT flips. {lvl=1}
2. XOR is 1 when inputs differ; a half adder is XOR for the sum and AND for the carry. {lvl=1}
3. A full adder (two half adders and an OR) handles a column with a carry in; a row of them is a ripple-carry adder. {lvl=2}
4. NAND alone builds NOT, AND, OR, XOR and so every circuit; De Morgan's law is the key. {lvl=2}
5. Transistors are voltage-controlled switches; CMOS builds a NAND from four of them, and each gate adds a small delay. {lvl=3}
6. Feedback gives memory: cross-coupled gates hold a bit, and adders plus registers are the CPU's raw material. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Always write the truth table first; most wrong circuits fail on one row you did not try. {lvl=1}
- OR is inclusive: 1 OR 1 is 1. The everyday "or" (soup or salad) is closer to XOR. {lvl=1}
- Boolean "+" is OR and "·" is AND, not ordinary arithmetic; 1 + 1 = 1 in that algebra. {lvl=2}
- In a ripple-carry adder, the carry out of the top column is a real bit; ignoring it is the cause of overflow bugs. {lvl=2}
- Do not read a latch's output the instant its inputs change; a circuit needs time to settle (this is why clocks exist). {lvl=3}
:::
