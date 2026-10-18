---
title: Bits and binary
summary: Why a phone full of photos, songs and chats is really just billions of tiny switches, and how switches can count.
ncert: []
up_to: SDE-2
builds_on: []
notes_prompt: Explain to a friend who has never programmed why a computer only needs two symbols, and how a row of eight switches can stand for 173.
margin:
  - kind: history
    title: History
    text: Gottfried Leibniz wrote about binary arithmetic around 1703, long before any computer existed. Claude Shannon showed in his 1937 master's thesis that switching circuits can do Boolean logic, and the word "bit" is credited to John Tukey (both [Unverified] from memory).
  - kind: tip
    title: Interview favourite
    text: '"Find the one number that appears once while every other appears twice" is solved in a few lines with XOR. Bit tricks appear in interviews because they test whether you understand how numbers really sit in memory.'
  - kind: olympiad
    title: Design link
    text: One bit per item is the cheapest way to remember yes/no for a huge set. A billion flags fit in 125 MB, which is the idea behind bitmap indexes and Bloom filters.
books:
  - { title: "C. Petzold, Code: The Hidden Language of Computer Hardware and Software", ref: "early chapters on binary and on-off codes [Unverified]" }
  - { title: "R. Bryant and D. O'Hallaron, Computer Systems: A Programmer's Perspective", ref: "Ch. 2 Representing and Manipulating Information [Unverified]" }
  - { title: "H. S. Warren, Hacker's Delight", ref: "chapter on basics of bit manipulation; read it after you are comfortable with the section below [Unverified]" }
cards:
  - { front: "What is a bit, and what is a byte?", back: "A bit is one on/off switch, written 0 or 1. A byte is 8 bits, enough for 256 different patterns." }
  - { front: "How many different patterns can n bits make?", back: "2ⁿ. Every extra bit doubles the count: 8 bits give 256, 10 bits give 1,024, 32 bits give about 4.3 billion." }
  - { front: "How do you read 10101101 as an ordinary number?", back: "Each place is worth double the one to its right: 128, 64, 32, 16, 8, 4, 2, 1. Add the places holding a 1: 128+32+8+4+1 = 173." }
  - { front: "Why are computers built on two states and not ten?", back: "Two voltage levels are far apart, so a bit of electrical noise cannot flip them. Ten levels would be crowded and easy to misread." }
  - { front: "What does XOR do, and why is it special?", back: "Output is 1 when the two inputs differ. x XOR x is 0 and x XOR 0 is x, so XOR-ing the same value twice undoes it." }
  - { front: "What is a hexadecimal digit?", back: "A symbol for 4 bits (0 to 9, then a to f for 10 to 15). Two hex digits are exactly one byte, so ff is 11111111." }
core:
  idea: 'A bit is one switch that is either off (0) or on (1). A row of n bits can show 2ⁿ different patterns, and by agreeing on what each pattern means we can store numbers, letters, colours and sound in nothing but switches.'
  formulas:
    - tex: '\text{patterns} = 2^{n}'
      label: 'What n bits can distinguish'
    - tex: 'b_{n-1}\,b_{n-2}\cdots b_1\,b_0 \;=\; \sum_{i=0}^{n-1} b_i\, 2^{i}'
      label: 'Value of a binary number: each bit counts for the power of two at its place'
  conditions:
    - 'Each switch is read as only 0 or 1, never in between (the hardware keeps signals far from the middle)'
    - 'Both sides agree on what the pattern means: the same bits can be a number, a letter or a colour'
    - 'The number of bits is fixed in advance (8, 32, 64), so the pattern count is fixed too'
  sign: 'The commonest slip is counting n bits as n patterns, or as 2n. It is 2ⁿ: ten switches describe 1,024 states, not 10 or 20.'
outcomes:
  - 'Explain why computers use two states, and what a bit and a byte are'
  - 'Convert small numbers between binary and decimal by hand'
  - 'Work out how many bits are needed to label a given number of things'
  - 'Read hexadecimal and Linux permission codes such as 754 as bit patterns'
  - 'Use AND, OR, XOR and shifts to test, set and flip bits, and spot the classic bit-trick interview questions'
opener:
  story: |
    You send a thumbs-up on WhatsApp. It goes from your phone to a tower, across cables under the sea if your friend is far away, and appears on their screen in under a second.

    Open the phone up and you will not find a thumb, a letter or a photo anywhere inside. A phone holds billions of microscopic switches, each one either **off** or **on**. That is all there is. Your 128 GB of photos, songs and chats are a very long list of offs and ons.

    So how can a switch that only knows two things hold a photograph of your family? Start with a smaller question: how much can a handful of switches tell you?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Eight lamps in a row, some lit, with place values 128 down to 1 under them adding up to 173"><text x="160" y="40" text-anchor="middle" style="font-size:12px;fill:var(--muted)">eight switches, on or off</text><circle cx="28" cy="90" r="15" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="28" y="128" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><text x="28" y="150" text-anchor="middle" style="font-size:10px;fill:var(--muted)">128</text><circle cx="66" cy="90" r="15" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="66" y="128" text-anchor="middle" style="font-size:13px;fill:var(--muted)">0</text><text x="66" y="150" text-anchor="middle" style="font-size:10px;fill:var(--muted)">64</text><circle cx="104" cy="90" r="15" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="104" y="128" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><text x="104" y="150" text-anchor="middle" style="font-size:10px;fill:var(--muted)">32</text><circle cx="142" cy="90" r="15" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="142" y="128" text-anchor="middle" style="font-size:13px;fill:var(--muted)">0</text><text x="142" y="150" text-anchor="middle" style="font-size:10px;fill:var(--muted)">16</text><circle cx="180" cy="90" r="15" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="180" y="128" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><text x="180" y="150" text-anchor="middle" style="font-size:10px;fill:var(--muted)">8</text><circle cx="218" cy="90" r="15" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="218" y="128" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><text x="218" y="150" text-anchor="middle" style="font-size:10px;fill:var(--muted)">4</text><circle cx="256" cy="90" r="15" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="256" y="128" text-anchor="middle" style="font-size:13px;fill:var(--muted)">0</text><text x="256" y="150" text-anchor="middle" style="font-size:10px;fill:var(--muted)">2</text><circle cx="294" cy="90" r="15" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="294" y="128" text-anchor="middle" style="font-size:13px;fill:var(--ink)">1</text><text x="294" y="150" text-anchor="middle" style="font-size:10px;fill:var(--muted)">1</text><text x="160" y="196" text-anchor="middle" style="font-size:13px;fill:var(--ink)">128 + 32 + 8 + 4 + 1</text><text x="160" y="220" text-anchor="middle" style="font-size:15px;fill:var(--c)">= 173</text></svg>'
life:
  - 'The Linux command chmod 754 file sets read, write and execute rights for the owner, group and everyone else with just nine bits.'
  - 'An IPv4 address such as 192.168.1.10 is 32 bits written as four bytes, and a network mask says which of those bits name the network.'
  - 'A colour on your screen such as #FF9933 (saffron) is three bytes, one each for red, green and blue.'
  - 'Phone settings (Wi-Fi on, Bluetooth off, silent mode on) and the permissions an app asks for are stored as flags, one bit each.'
  - 'Storage is sold in bytes: a 128 GB phone holds about 1,024 billion bits.'
models:
  - name: 'Agree on a code'
    text: 'A bit has no meaning by itself; meaning comes from an agreement about what the pattern stands for. Money, language, traffic lights and flags all work this way. When two systems disagree on the code, you get confusion, not wrong physics.'
  - name: 'Few simple parts, many combinations'
    text: 'Two states are almost nothing, yet a row of 300 bits has more patterns than there are atoms in the visible universe. Rich systems often come from a tiny alphabet combined many times, like letters making every book.'
  - name: 'Robust beats clever'
    text: 'Computers pick two states because they are easy to tell apart even when the signal is noisy. When you design a process (a form, a checklist, a handover), prefer choices that are hard to confuse over choices that carry more detail.'
links:
  - leaf: 'cs/logic-gates'
    name: 'Logic gates'
    same: 'AND, OR and XOR on bits are exactly what physical gates do to voltages; a bitwise operator is a row of gates working side by side.'
    differs: 'A gate is a physical circuit that acts in a few billionths of a second; a bitwise operator is a single instruction that tells the CPU to use those gates.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Many tables keep their slot count a power of two so that "hash mod m" becomes a fast bit mask (hash AND m-1).'
    differs: 'Bits here only choose the slot; a hash table also needs collision handling and resizing, which bits alone do not provide.'
  - leaf: 'mat/exponents-and-powers'
    name: 'Exponents and powers'
    same: 'Every place in a binary number is a power of two, and adding one bit doubles the number of patterns.'
    differs: 'In maths the base can be anything; binary fixes it at 2 because a switch has two states.'
next:
  q: 'Eight switches have no room for a minus sign, and no switch for a decimal point. So how does a computer store -5 or 3.14, and why does Python say that 0.1 + 0.2 is not quite 0.3?'
  leaf: 'cs/numbers-in-a-computer'
  name: 'How computers store numbers'
symbols:
  - s: '\text{bit}'
    means: 'one switch, either 0 (off) or 1 (on)'
  - s: '\text{byte}'
    means: 'a group of 8 bits (256 patterns)'
  - s: '2^{n}'
    means: 'two multiplied by itself n times; the number of patterns n bits can make (count)'
  - s: 'n'
    means: 'how many bits there are (count)'
  - s: 'b_i'
    means: 'the bit at place i, either 0 or 1; place 0 is the rightmost'
  - s: '0x'
    means: 'prefix meaning the digits that follow are hexadecimal (base 16)'
  - s: '\&'
    means: 'AND: 1 only where both bits are 1 (Python writes &)'
  - s: '\oplus'
    means: 'XOR: 1 only where the bits differ (Python writes ^)'
  - s: '\ll,\ \gg'
    means: 'shift left or right by some places (Python writes << and >>); one place left doubles the number'
---

:::hook
q: Here's the puzzle. A control panel has just ten on/off switches. How many different situations can it tell apart?
options: ["10", "100", "1,024"]
answer: 2
right: Right. Each switch doubles the count: 2 × 2 × ... ten times is 1,024. That is why a handful of switches goes so far.
wrong: Count it step by step. One switch gives 2 states. Add a second and each of those 2 can be paired with on or off, giving 4. What does the third switch do to 4?
:::

## Why only two states {lvl=1 id=s-two label="Foundations"}

A computer is built from **transistors**, tiny electronic switches that let current through or block it. Imagine a wire carrying either about 0 volts or about 1 volt. If we call "near 0" a **0** and "near 1" a **1**, then a little electrical noise (a nearby motor, a hot day) moves the voltage a bit, but it is still obviously near one end.

Now suppose we tried ten levels, 0.0 V, 0.1 V, 0.2 V and so on. A small wobble of 0.05 V would turn a 3 into a 2 or a 4. Two levels are far apart, so the machine rarely misreads them, and it can run billions of switches a second. That is the whole reason: two states are **cheap to build and hard to confuse**.

One switch is a **bit**, short for "binary digit". Eight of them make a **byte**, the unit in which files and memory are measured.

## Counting with two symbols {lvl=1 id=s-count label="Foundations"}

We count in tens because we have ten fingers: the number 345 means 3 hundreds, 4 tens and 5 ones, and each place is worth ten times the one on its right. With only two symbols, each place is worth **two** times the one on its right: 1, 2, 4, 8, 16, 32, 64, 128.

So the pattern 10101101 means: one 128, no 64, one 32, no 16, one 8, one 4, no 2, one 1. Add the places holding a 1:

$$128 + 32 + 8 + 4 + 1 = 173$$

Read it as: "the places that are switched on, added up, give the number."

:::figure caption="Eight switches, each worth double the one to its right. The pattern 10101101 adds up to 173."
<svg viewBox="0 0 320 120" role="img" aria-label="Eight boxes with bits 1 0 1 0 1 1 0 1 and place values 128 down to 1">
<g style="stroke:var(--ink);stroke-width:1.5">
<rect x="10" y="20" width="32" height="32" style="fill:var(--mat)"/><rect x="48" y="20" width="32" height="32" style="fill:none"/><rect x="86" y="20" width="32" height="32" style="fill:var(--mat)"/><rect x="124" y="20" width="32" height="32" style="fill:none"/><rect x="162" y="20" width="32" height="32" style="fill:var(--mat)"/><rect x="200" y="20" width="32" height="32" style="fill:var(--mat)"/><rect x="238" y="20" width="32" height="32" style="fill:none"/><rect x="276" y="20" width="32" height="32" style="fill:var(--mat)"/>
</g>
<g style="font-size:14px;fill:var(--ink)" text-anchor="middle"><text x="26" y="42">1</text><text x="64" y="42">0</text><text x="102" y="42">1</text><text x="140" y="42">0</text><text x="178" y="42">1</text><text x="216" y="42">1</text><text x="254" y="42">0</text><text x="292" y="42">1</text></g>
<g style="font-size:11px;fill:var(--muted)" text-anchor="middle"><text x="26" y="72">128</text><text x="64" y="72">64</text><text x="102" y="72">32</text><text x="140" y="72">16</text><text x="178" y="72">8</text><text x="216" y="72">4</text><text x="254" y="72">2</text><text x="292" y="72">1</text></g>
<text x="160" y="104" text-anchor="middle" style="font-size:12px;fill:var(--ink)">128 + 32 + 8 + 4 + 1 = 173</text>
</svg>
:::

To go the other way, subtract the biggest place that fits. For 37: 32 fits (left 5), 16 and 8 do not, 4 fits (left 1), 2 does not, 1 fits. So 37 is 100101. Python checks it for you:

```python
bin(37)            # '0b100101'
int("100101", 2)   # 37
0b10101101         # 173, binary written directly in code
```

:::qc lvl=1
q: What is the binary number 1011 in ordinary decimal?
options: ["9", "11", "13"]
answer: 1
right: Right. The places are 8, 4, 2, 1, and 1011 switches on 8, 2 and 1: 8 + 2 + 1 = 11.
wrong: Write the place values under the bits, 8 4 2 1, and add the ones that sit under a 1.
:::

## How many patterns {lvl=1 id=s-patterns label="Foundations"}

Back to the control panel. One switch has 2 states. A second switch can be on or off for each of those, so 4. A third doubles it again to 8. Every added bit **doubles** the count, so $n$ bits give

$$2^{n}$$

patterns. Read it as: "two, multiplied by itself once for each bit."

| Bits | Patterns | Where you meet it |
|---|---|---|
| 1 | 2 | a light switch |
| 8 | 256 | one byte; values 0 to 255 |
| 10 | 1,024 | the "kilo" of computing |
| 16 | 65,536 | CD audio levels, old games |
| 32 | about 4.3 billion | IPv4 addresses |
| 64 | about 1.8 × 10¹⁹ | modern CPUs' whole-number size |

This also answers the reverse question: **how many bits do I need to label N things?** The smallest $n$ with $2^n \ge N$. A million items need 20 bits, because $2^{19} = 524{,}288$ is too few and $2^{20} = 1{,}048{,}576$ is enough.

:::note title="Kilo, but which kilo?" tone=tip
Storage makers use 1 KB = 1,000 bytes; software often means 1,024. To avoid confusion the names KiB, MiB and GiB are used for powers of 1,024. This is why a "128 GB" phone shows a little less than 128 in settings.
:::

:::qc lvl=1
q: A school has 1,500 students. What is the fewest bits that give every student a different ID?
options: ["10", "11", "15"]
answer: 1
right: Right. 10 bits give only 1,024 IDs, which is too few; 11 bits give 2,048.
wrong: Find the smallest n with 2 to the power n at least 1,500. Try n = 10 first and see whether 1,024 is enough.
:::

## Hexadecimal: bits in shorthand {lvl=2 id=s-hex label="SDE-1"}

Long rows of bits are hard to read: 1111111100000000 is easy to miscopy. Programmers group them four at a time, and four bits make 16 patterns, so each group gets one symbol from a 16-symbol alphabet: 0 to 9, then a to f for ten to fifteen. This is **hexadecimal**, or hex, written with the prefix `0x`.

| Bits | Hex | Bits | Hex | Bits | Hex | Bits | Hex |
|---|---|---|---|---|---|---|---|
| 0000 | 0 | 0100 | 4 | 1000 | 8 | 1100 | c |
| 0001 | 1 | 0101 | 5 | 1001 | 9 | 1101 | d |
| 0010 | 2 | 0110 | 6 | 1010 | a | 1110 | e |
| 0011 | 3 | 0111 | 7 | 1011 | b | 1111 | f |

So one byte is exactly two hex digits: `11111111` is `0xff`, and `10101101` is `0xad` (that is 1010 then 1101, or a then d). Memory addresses, colours (`#FF9933`) and file signatures are written in hex for this reason.

## Bitwise operations {lvl=2 id=s-bitwise label="SDE-1"}

Because a number is a row of bits, a program can work on the bits directly. The basic moves each take two numbers and treat each place on its own:

- **AND** (`&`): 1 only where both bits are 1. Use it to *test* or *keep* bits.
- **OR** (`|`): 1 where at least one bit is 1. Use it to *set* bits.
- **XOR** (`^`): 1 where the bits differ. Use it to *flip* bits.
- **NOT** (`~`): flips every bit.
- **Shift** (`<<`, `>>`): slide all bits left or right. One place left doubles a number, one place right halves it (dropping the remainder).

An example with 12 (1100) and 10 (1010):

| Operation | Bits | Result |
|---|---|---|
| 12 AND 10 | 1000 | 8 |
| 12 OR 10 | 1110 | 14 |
| 12 XOR 10 | 0110 | 6 |
| 1 shifted left 3 | 1000 | 8 |
| 40 shifted right 2 | 1010 | 10 |

The classic use is **flags**: many yes/no facts packed into one number. Linux file permissions give read the value 4, write 2 and execute 1, so `7` is all three (111), `5` is read and execute (101), and `4` is read only (100). The code `chmod 754` therefore means: owner can read, write, execute; group can read and execute; everyone else can only read.

```python
READ, WRITE, EXEC = 4, 2, 1
perm = READ | WRITE            # set two flags    -> 6
(perm & WRITE) != 0            # test a flag      -> True
perm = perm ^ WRITE            # flip a flag      -> 4
perm = perm & ~READ            # clear a flag     -> 0
```

Python's `&` binds tighter than `!=`, but in C and Java it does not, so always add the brackets.

:::qc lvl=2
q: A byte holds flags, and bit 3 (value 8) means "dark mode". Which expression turns dark mode on without changing the other bits?
options: ["flags & 8", "flags | 8", "flags ^ 8"]
answer: 1
right: Right. OR with the mask sets that bit to 1 whatever it was, and leaves the others alone. XOR would also work only if it was off before; it would turn it off if it was on.
wrong: AND with a mask keeps only that bit and wipes the rest. You want a move that forces one bit to 1 and touches nothing else.
:::

## Bit tricks worth knowing {lvl=3 id=s-tricks label="SDE-2"}

A few small identities turn up again and again, in interviews and in real code.

**XOR cancels itself.** $x \oplus x = 0$ and $x \oplus 0 = x$, and the order does not matter. So if every number in a list appears twice except one, XOR-ing the whole list leaves the odd one out, using one pass and no extra memory.

```python
def lonely(nums):
    out = 0
    for x in nums:
        out ^= x          # pairs cancel, the single survives
    return out
```

**Removing the lowest 1.** Subtracting 1 from a number flips its lowest 1 to 0 and the zeros below it to 1s, so `n & (n - 1)` erases the lowest set bit. Two uses follow. A positive number is a power of two exactly when it has a single 1, that is, when `n & (n - 1) == 0`. And counting the 1s (the "popcount") takes one loop turn per 1 bit.

```python
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

def count_ones(n):
    c = 0
    while n:
        n &= n - 1        # drop the lowest 1
        c += 1
    return c
```

**Sets as numbers.** For a small collection of $n$ items, one integer can be a subset: bit $i$ set means "item $i$ is in". Counting from 0 to $2^n - 1$ then visits every subset exactly once, and set union, intersection and difference are OR, AND and AND-NOT.

```python
items = ["a", "b", "c"]
for mask in range(1 << len(items)):
    print([items[i] for i in range(len(items)) if (mask >> i) & 1])
```

**Memory.** One bit per item is the leanest way to remember yes/no for a big set. One billion flags need 125 MB as a bitset, where a plain Python list of booleans uses 8 bytes per slot for the pointers alone, about 8 GB. [Inference: exact sizes vary by Python build.]

:::qc lvl=3
q: Which of these numbers makes `n & (n - 1) == 0` true?
options: ["12", "16", "18"]
answer: 1
right: Right. 16 is 10000, one set bit. 15 is 01111, so 16 AND 15 is 0. 12 (1100) gives 8, and 18 (10010) gives 16.
wrong: Write each number in binary. The test is true only for a number with exactly one 1 bit.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A bit is one switch that is off or on; a byte is 8 bits. Computers use two states because they are cheap to build and hard to misread. {lvl=1}
2. In binary each place is worth double the one on its right, so 10101101 is 128 + 32 + 8 + 4 + 1 = 173. {lvl=1}
3. n bits give 2ⁿ patterns; every extra bit doubles the count, and N things need the smallest n with 2ⁿ at least N. {lvl=1}
4. Hex writes four bits per symbol, so one byte is two hex digits. {lvl=2}
5. AND tests or keeps bits, OR sets them, XOR flips them, and shifts multiply or divide by powers of two; permissions and settings are flags built this way. {lvl=2}
6. XOR cancels pairs, and n AND (n - 1) removes the lowest 1: together they solve many interview puzzles. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- n bits give 2ⁿ patterns, not n or 2n; ten switches describe 1,024 states. {lvl=1}
- Bits mean nothing without an agreed code: the same eight bits can be 173, a letter or a pixel. {lvl=1}
- Place values run right to left: the rightmost bit is worth 1, not the leftmost. {lvl=1}
- In C and Java, `flags & 8 != 0` is read as `flags & (8 != 0)`; always bracket the AND. {lvl=2}
- Shifting left can push bits off the end of a fixed-size number; the next lesson shows what happens then. {lvl=3}
- A bit trick is only worth using when it is clearer or much faster; otherwise write the plain version. {lvl=3}
:::
