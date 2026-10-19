---
title: How computers store numbers
summary: Why a computer can add a million numbers in a blink, yet says 0.1 plus 0.2 is not quite 0.3.
ncert: []
up_to: SDE-2
builds_on: [Bits and binary]
notes_prompt: Explain to a friend why a counter that only has eight switches goes from 127 to -128, and why 0.1 cannot be stored exactly.
margin:
  - kind: history
    title: History
    text: The first Ariane 5 rocket was lost in 1996 after a 64-bit decimal value was squeezed into a 16-bit whole number that was too small for it, and in 2014 YouTube's view counter hit the 32-bit limit of 2,147,483,647 on one famous video (both [Unverified] from memory).
  - kind: tip
    title: Interview favourite
    text: 'Binary search written as mid = (lo + hi) // 2 can overflow in a language with 32-bit integers when lo and hi are both huge. The safe form is lo + (hi - lo) // 2. Interviewers love asking why.'
  - kind: olympiad
    title: Design link
    text: Never store money as a floating-point number. Store whole paise (or cents) as integers, or use a decimal type, and you remove a whole class of rounding bugs from billing systems.
books:
  - { title: "R. Bryant and D. O'Hallaron, Computer Systems: A Programmer's Perspective", ref: "Ch. 2 Representing and Manipulating Information: integers and floating point [Unverified]" }
  - { title: "D. Goldberg, What Every Computer Scientist Should Know About Floating-Point Arithmetic", ref: "ACM Computing Surveys, 1991 paper (well known; the classic reference on this topic) [Unverified year]" }
  - { title: "C. Petzold, Code: The Hidden Language of Computer Hardware and Software", ref: "chapters on negative numbers and floating point [Unverified]" }
cards:
  - { front: "What range does an n-bit signed (two's complement) integer cover?", back: "From −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1. For 8 bits: −128 to 127. For 32 bits: about ±2.1 billion. There is one more negative number than positive." }
  - { front: "How do you negate a number in two's complement?", back: "Flip every bit, then add 1. For 5 (00000101): flip to 11111010, add 1 to get 11111011, which is −5." }
  - { front: "What is overflow?", back: "A result too big for the fixed number of bits. Most fixed-size integers silently wrap around: 127 + 1 in 8 bits gives −128." }
  - { front: "Why is 0.1 stored inexactly?", back: "In binary, 1/10 is a repeating fraction (0.000110011...), just as 1/3 is 0.333... in decimal. A fixed number of bits must cut it off." }
  - { front: "What are the three parts of a 64-bit float (double)?", back: "1 sign bit, 11 exponent bits and 52 fraction bits: value = ±1.fraction × 2^exponent. Roughly 15 to 16 decimal digits of precision." }
  - { front: "How should you compare two floats for equality?", back: "Never with ==. Check that they are close: abs(a − b) is below a small tolerance (math.isclose in Python), and keep money in integers." }
core:
  idea: 'A computer stores every number in a fixed number of bits, so there are only finitely many numbers it can hold. Whole numbers wrap around when they pass the end (two''s complement makes negatives work), and fractions are rounded to the nearest storable value, which is why 0.1 + 0.2 is not exactly 0.3.'
  formulas:
    - tex: '-2^{\,n-1} \;\le\; x \;\le\; 2^{\,n-1}-1'
      label: 'Range of an n-bit signed whole number'
    - tex: 'x = (-1)^{s}\times 1.f \times 2^{\,e-1023}'
      label: 'A 64-bit float: sign s, fraction f, exponent e'
  conditions:
    - 'Whole-number results stay inside the range; otherwise the stored value wraps around (Python integers are the exception: they grow as needed)'
    - 'Floats are exact only for sums of powers of two, such as 0.5, 0.25 and 0.375; most decimal fractions are rounded'
    - 'Each float operation adds a tiny relative error (about one part in 10¹⁶ for doubles), which can pile up over many operations'
  sign: 'Two''s complement has one more negative number than positive: in 8 bits you can store −128, but not +128. And never test floats with ==.'
outcomes:
  - 'Read and write small numbers in two''s complement, and give the range of an n-bit integer'
  - 'Predict what happens when a fixed-size integer overflows'
  - 'Explain why 0.1 cannot be stored exactly and what 0.1 + 0.2 really computes'
  - 'Choose integers, decimals or floats correctly for money, counters and measurements'
  - 'Describe how the gap between floats grows with size, and avoid the traps that follow (lost small terms, == comparisons, order of addition)'
opener:
  story: |
    Open a Python window and type `0.1 + 0.2`. You expect 0.3. It prints **0.30000000000000004**.

    Python is not broken. JavaScript, Java and C give the same answer, because the cause is deeper than any language. And it is not the only strange thing a computer does with numbers: a counter with eight switches can go from 127 straight to −128, and a video's view counter once refused to count past 2,147,483,647.

    Both surprises have one cause: a number lives in a **box with a fixed number of bits**. What exactly happens when a number does not fit?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="An eight-bit counter showing 01111111 which is 127, and after adding one showing 10000000 which is minus 128"><text x="160" y="28" text-anchor="middle" style="font-size:12px;fill:var(--muted)">an 8-bit counter</text><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><rect x="40" y="46" width="30" height="34"/><rect x="72" y="46" width="30" height="34"/><rect x="104" y="46" width="30" height="34"/><rect x="136" y="46" width="30" height="34"/><rect x="168" y="46" width="30" height="34"/><rect x="200" y="46" width="30" height="34"/><rect x="232" y="46" width="30" height="34"/><rect x="264" y="46" width="30" height="34"/></g><g style="font-size:16px;fill:var(--ink)" text-anchor="middle"><text x="55" y="69">0</text><text x="87" y="69">1</text><text x="119" y="69">1</text><text x="151" y="69">1</text><text x="183" y="69">1</text><text x="215" y="69">1</text><text x="247" y="69">1</text><text x="279" y="69">1</text></g><text x="160" y="102" text-anchor="middle" style="font-size:13px;fill:var(--ink)">127</text><path d="M160 112 L160 136" style="stroke:var(--c);stroke-width:2;fill:none"/><path d="M154 130 L160 138 L166 130" style="stroke:var(--c);stroke-width:2;fill:none"/><text x="172" y="130" style="font-size:12px;fill:var(--c)">add 1</text><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="40" y="148" width="30" height="34"/><rect x="72" y="148" width="30" height="34"/><rect x="104" y="148" width="30" height="34"/><rect x="136" y="148" width="30" height="34"/><rect x="168" y="148" width="30" height="34"/><rect x="200" y="148" width="30" height="34"/><rect x="232" y="148" width="30" height="34"/><rect x="264" y="148" width="30" height="34"/></g><g style="font-size:16px;fill:var(--ink)" text-anchor="middle"><text x="55" y="171">1</text><text x="87" y="171">0</text><text x="119" y="171">0</text><text x="151" y="171">0</text><text x="183" y="171">0</text><text x="215" y="171">0</text><text x="247" y="171">0</text><text x="279" y="171">0</text></g><text x="160" y="204" text-anchor="middle" style="font-size:13px;fill:var(--ink)">-128 ?!</text><text x="160" y="226" text-anchor="middle" style="font-size:11px;fill:var(--muted)">the box ran out of room</text></svg>'
life:
  - 'Every spreadsheet, calculator and phone app that shows 0.30000000000000004 or 1.1000000000000001 somewhere is meeting binary fractions.'
  - 'Games and apps keep scores, coins and health as whole numbers in a fixed-size box; "integer overflow" is a famous source of glitches, such as a score that suddenly turns negative.'
  - 'Many computers count time as seconds since 1 January 1970 in a 32-bit signed integer, which runs out on 19 January 2038 (the "Year 2038 problem").'
  - 'Banks and UPI systems store amounts in paise as integers, so that adding two payments never produces a stray fraction of a paisa.'
  - 'GPS, weather and machine-learning software chooses how many bits to spend on each number to balance accuracy against speed and memory.'
models:
  - name: 'Every container has a limit'
    text: 'A glass overflows, a bank account has a limit, a train has a seat count. A number box is the same: before you trust a result, ask "what is the biggest this can get, and what happens past it?"'
  - name: 'Approximation is not error, it is a design choice'
    text: 'A float gives roughly 16 digits of precision, far more than any measurement in the real world. Knowing how much accuracy is enough, and spending no more, is a skill in engineering, budgeting and science.'
  - name: 'Small errors can pile up'
    text: 'One rounding error is harmless; a million of them added up are not. The same holds for a loan interest rate, a clock that gains a second a day, or a small habit repeated every day.'
links:
  - leaf: 'mat/modular-arithmetic'
    name: 'Modular arithmetic'
    same: 'Wrapping around is arithmetic modulo 2ⁿ: in 8 bits, 200 + 100 = 300 becomes 300 − 256 = 44, exactly like a clock going past 12.'
    differs: 'In maths the modulus is a choice you make on purpose; in a computer it is a side effect of the box size, and may be a bug.'
  - leaf: 'phy/errors-and-significant-figures'
    name: 'Errors and significant figures'
    same: 'A measurement and a float both carry a limited number of reliable digits, and quoting more digits than you have is false precision.'
    differs: 'A measurement''s error comes from the instrument and is unknown; a float''s rounding error follows fixed rules and can be bounded exactly.'
  - leaf: 'cs/values-and-types'
    name: 'Values and types'
    same: 'Choosing int, float or decimal in a program is choosing how the bits will be read, which decides range and accuracy.'
    differs: 'Python hides the box size for integers but not for floats; other languages show you the box size in the type name (int32, int64).'
next:
  q: 'You now know numbers are patterns of bits. But a letter, a photograph and a song are not numbers at all. How does the same machine hold the word नमस्ते, a photo of the Taj Mahal and a song, all as bits?'
  leaf: 'cs/text-images-sound'
  name: 'Text, images and sound as bits'
symbols:
  - s: 'n'
    means: 'number of bits in the box (count)'
  - s: '2^{n-1}'
    means: 'half the number of patterns: how far a signed number reaches in each direction (count)'
  - s: 'x'
    means: 'the number being stored'
  - s: 's'
    means: 'the sign bit of a float: 0 for plus, 1 for minus'
  - s: 'e'
    means: 'the exponent field of a float, stored with an offset of 1023 (whole number)'
  - s: 'f'
    means: 'the fraction field of a float: the digits after the leading 1 (binary digits)'
  - s: '\varepsilon'
    means: 'machine epsilon: the gap between 1 and the next float, about 2.2 × 10⁻¹⁶ for a double (no unit)'
  - s: '\bmod'
    means: 'remainder after division; wrapping in n bits is "mod 2ⁿ"'
---

:::hook
q: Here's the puzzle. In Python, what does the line `0.1 + 0.2 == 0.3` print?
options: ["True", "False", "An error message"]
answer: 1
right: Right: False. The computer stores 0.1 and 0.2 as the nearest numbers it can, and their sum lands one tiny step away from the number it stores for 0.3.
wrong: Try it if you can. The two sides look equal on paper, but the computer cannot store 0.1 exactly. What do you think happens to the rounding errors?
:::

## Whole numbers in a fixed box {lvl=1 id=s-box label="Foundations"}

Think of a car's old mechanical odometer with three wheels. It shows 000 to 999. At 999 the next kilometre does not show 1000; the wheels all roll over to 000. The odometer has a **fixed number of places**, and it wraps.

A computer's whole numbers are the same, but with bits. A box of $n$ bits holds $2^n$ patterns, so as a plain (unsigned) whole number it can show 0 up to $2^n - 1$. For 8 bits that is 0 to 255; for 32 bits, 0 to 4,294,967,295. Add 1 to 255 in an 8-bit box and the counter rolls over to 0, just like the odometer.

## Negative numbers: two's complement {lvl=1 id=s-twos label="Foundations"}

How do we squeeze minus signs into a row of bits? Ride the odometer backwards. In an 8-bit box, 00000000 is 0, and one step back from it is 11111111. It is the most natural thing to *call* that pattern **−1**. Two steps back, 11111110, is −2, and so on.

In this scheme, called **two's complement**, half the patterns are used for negatives. Take 3 bits for a small picture:

:::figure caption="The 3-bit ring. Going one step forward adds 1, going one step back subtracts 1, and the pattern 111 is one step back from 000, so it is -1."
<svg viewBox="0 -12 320 212" role="img" aria-label="Eight 3-bit patterns around a ring with their signed values: 000 is 0, 001 is 1, 010 is 2, 011 is 3, 100 is -4, 101 is -3, 110 is -2, 111 is -1">
<circle cx="160" cy="95" r="58" style="fill:none;stroke:var(--muted);stroke-width:1.5" class="faint"/>
<circle cx="160.0" cy="37.0" r="5" style="fill:var(--ink)"/>
<text x="160.0" y="7.0" text-anchor="middle" style="font-size:12px;fill:var(--muted)">000</text>
<text x="160.0" y="68.0" text-anchor="middle" style="font-size:14px;fill:var(--ink)">0</text>
<circle cx="201.0" cy="54.0" r="5" style="fill:var(--ink)"/>
<text x="225.1" y="33.9" text-anchor="middle" style="font-size:12px;fill:var(--muted)">001</text>
<text x="182.6" y="77.4" text-anchor="middle" style="font-size:14px;fill:var(--ink)">1</text>
<circle cx="218.0" cy="95.0" r="5" style="fill:var(--ink)"/>
<text x="252.0" y="99.0" text-anchor="middle" style="font-size:12px;fill:var(--muted)">010</text>
<text x="192.0" y="100.0" text-anchor="middle" style="font-size:14px;fill:var(--ink)">2</text>
<circle cx="201.0" cy="136.0" r="5" style="fill:var(--ink)"/>
<text x="225.1" y="164.1" text-anchor="middle" style="font-size:12px;fill:var(--muted)">011</text>
<text x="182.6" y="122.6" text-anchor="middle" style="font-size:14px;fill:var(--ink)">3</text>
<circle cx="160.0" cy="153.0" r="5" style="fill:var(--c)"/>
<text x="160.0" y="191.0" text-anchor="middle" style="font-size:12px;fill:var(--muted)">100</text>
<text x="160.0" y="132.0" text-anchor="middle" style="font-size:14px;fill:var(--c)">-4</text>
<circle cx="119.0" cy="136.0" r="5" style="fill:var(--c)"/>
<text x="94.9" y="164.1" text-anchor="middle" style="font-size:12px;fill:var(--muted)">101</text>
<text x="137.4" y="122.6" text-anchor="middle" style="font-size:14px;fill:var(--c)">-3</text>
<circle cx="102.0" cy="95.0" r="5" style="fill:var(--c)"/>
<text x="68.0" y="99.0" text-anchor="middle" style="font-size:12px;fill:var(--muted)">110</text>
<text x="128.0" y="100.0" text-anchor="middle" style="font-size:14px;fill:var(--c)">-2</text>
<circle cx="119.0" cy="54.0" r="5" style="fill:var(--c)"/>
<text x="94.9" y="33.9" text-anchor="middle" style="font-size:12px;fill:var(--muted)">111</text>
<text x="137.4" y="77.4" text-anchor="middle" style="font-size:14px;fill:var(--c)">-1</text>
<text x="160" y="93" text-anchor="middle" style="font-size:10px;fill:var(--muted)">+1</text><text x="160" y="105" text-anchor="middle" style="font-size:10px;fill:var(--muted)">clockwise</text></svg>
:::

The first bit now tells you the sign: 1 means negative. In an $n$-bit box the numbers run from $-2^{n-1}$ to $2^{n-1}-1$. For 8 bits that is **−128 to 127**, and for 32 bits about ±2.1 billion. There is one more negative number than positive, because zero uses up one of the non-negative patterns.

To read a pattern, give the top bit a *negative* worth. In 8 bits the places are −128, 64, 32, 16, 8, 4, 2, 1, so

$$11111011 = -128 + 64 + 32 + 16 + 8 + 2 + 1 = -5$$

Read it as: "the top place counts as minus 128; add the other places as usual."

**To negate a number, flip every bit and add 1.** Why does that work? A number plus its bit-flipped copy is all ones (11111111), which is −1. So flip(x) = −1 − x, and therefore −x = flip(x) + 1. For 5 (00000101): flip to 11111010, add 1 to get 11111011, which is −5 as above.

This design is popular because the same adding circuit works for positive and negative numbers; the hardware does not need to know which is which.

```python
(-5) & 0xFF            # 251, the 8-bit pattern of -5
bin((-5) & 0xFF)       # '0b11111011'
```

:::qc lvl=1
q: In 8-bit two's complement, what does the pattern 11111111 mean?
options: ["255", "-1", "-127"]
answer: 1
right: Right. One step back from 00000000 is 11111111, and with the top place worth -128 it adds up to -128 + 127 = -1.
wrong: Give the first bit the value -128 and the other seven the usual 64, 32, ..., 1. What do they add up to?
:::

## Overflow {lvl=1 id=s-overflow label="Foundations"}

When a result is too big for the box, the extra bits fall off the end and the number **wraps around**. In an 8-bit signed box, 127 + 1 gives −128, and −128 − 1 gives 127. Wrapping is just arithmetic modulo $2^n$, shifted so the range is centred on zero:

```python
def wrap8(x):
    return (x + 128) % 256 - 128

wrap8(127 + 1)     # -128
wrap8(100 + 100)   # -56
wrap8(-128 - 1)    # 127
```

Python's own integers do not behave like this: they grow as large as memory allows, so you never overflow by accident. Many other tools do wrap, silently: C, Java, Go, Rust in release builds, NumPy arrays, and database columns of type INT. [Unverified: details differ by language and build mode.]

Some well-known overflows (all from memory, so [Unverified]): a 32-bit signed count of seconds since 1970 reaches its maximum on 19 January 2038; the first Ariane 5 flight in 1996 failed after a value too large for a 16-bit integer was converted; a hugely popular video's view counter passed 2,147,483,647 in 2014.

A typical bug is the **midpoint in binary search**. With 32-bit integers, `(lo + hi) // 2` can overflow when both are near two billion. The safe form never builds a large sum:

```python
mid = lo + (hi - lo) // 2     # same value, no overflow
```

:::qc lvl=1
q: A signed 8-bit number holds 100. You add 50. What does the box now show, assuming it wraps?
options: ["150", "-106", "50"]
answer: 1
right: Right. 150 is past 127, so it wraps: 150 - 256 = -106.
wrong: The largest 8-bit signed value is 127, so 150 cannot be stored. Wrapping subtracts the full size of the box, 256.
:::

## Fractions in binary {lvl=2 id=s-fractions label="SDE-1"}

In decimal, places to the right of the point are tenths, hundredths, thousandths. In binary they are **halves, quarters, eighths**. So 0.5 is 0.1 in binary, 0.25 is 0.01, and 0.375 is 0.011 (a quarter plus an eighth).

Now try one tenth. Repeatedly double it and record the whole part: 0.1 → 0.2 (0), 0.4 (0), 0.8 (0), 1.6 (1), then continue with 0.6 → 1.2 (1), 0.2 → 0.4 (0), and we are back at 0.2, so the digits repeat for ever:

$$0.1 = 0.0001100110011\ldots_2$$

Read it as: "one tenth in binary never ends; the block 0011 repeats." It is the same story as one third in decimal, 0.3333..., which never ends either. A fraction ends in binary only if its bottom number (in lowest terms) is a power of two: halves, quarters, eighths, yes; tenths, fifths, no.

## Floating point {lvl=2 id=s-float label="SDE-1"}

Scientists write the number of atoms in 12 grams of carbon as about $6.02 \times 10^{23}$: a few digits and a power of ten. A computer does the same in binary. A **float** stores a **sign**, a **fraction** (the digits after a leading 1) and an **exponent**. The standard 64-bit "double" uses 1 bit for the sign, 11 for the exponent and 52 for the fraction:

$$x = (-1)^{s} \times 1.f \times 2^{\,e-1023}$$

Read it as: "plus or minus, one-point-something, times a power of two." Fifty-two fraction bits give about 15 to 16 decimal digits.

Now the puzzle resolves. The nearest double to 0.1 is slightly **above** 0.1, and the nearest to 0.2 is also slightly above. Their sum, correctly rounded, lands on a double that is *not* the one nearest 0.3. Print it with enough digits and the truth appears:

```python
from decimal import Decimal
Decimal(0.1)   # 0.1000000000000000055511151231257827021181583404541015625
0.1 + 0.2      # 0.30000000000000004
0.1 + 0.2 == 0.3   # False
```

The stored pattern of 0.1 is the hex `3fb999999999999a`: the repeating 9s are the 0011 block, and the final `a` is the rounding at the cut-off.

**What to do about it:**
- To compare floats, ask "are they close?", for example `math.isclose(a, b)`, never `==`.
- For money, store whole paise as integers, or use Python's `decimal` module, which works in base 10.
- For measurements, floats are fine: no instrument is accurate to 16 digits anyway.

:::qc lvl=2
q: Which of these can a binary float store exactly?
options: ["0.1", "0.375", "0.6"]
answer: 1
right: Right. 0.375 = 3/8 = a quarter plus an eighth. Only fractions whose bottom number is a power of two end in binary.
wrong: A fraction ends in binary only if it is a sum of halves, quarters, eighths and so on. Which of these is made of such pieces?
:::

## The gap between floats {lvl=3 id=s-gap label="SDE-2"}

A double has the same 52 fraction bits however big the number is, so the **gap between neighbouring floats grows with the size of the number**. Near 1 the gap is about $2.2 \times 10^{-16}$ (machine epsilon, $\varepsilon = 2^{-52}$). Near $2^{53}$ (about $9 \times 10^{15}$) the gap is already 2, so whole numbers above that are not all storable:

```python
2.0**53 + 1 == 2.0**53          # True: the +1 is lost
(1e16 + 1) - 1e16               # 0.0, not 1.0
```

That is the root of three traps.

**Small terms get swallowed.** Adding a tiny number to a huge one may change nothing. Summing a million copies of 0.1 in a loop gives 100000.00000133288, not 100000. Better tools: `math.fsum`, or **Kahan summation**, which keeps a running correction for the lost low-order bits.

**Order matters.** Floating-point addition is not associative: `(0.1 + 0.2) + 0.3` is 0.6000000000000001 but `0.1 + (0.2 + 0.3)` is 0.6. Two correct programs can differ in the last digit if they add in a different order, which is why parallel programs sometimes give slightly different answers from run to run.

**Subtracting nearly equal numbers destroys digits** (**cancellation**). The leading digits cancel and what remains is mostly rounding noise. Rewrite the formula to avoid the subtraction when you can.

There are also special values: `inf` (overflow in a float gives infinity rather than wrapping), `nan` ("not a number", from 0/0 or inf − inf, and `nan != nan` is True), and a negative zero that compares equal to 0.0.

Machine learning uses smaller floats (16 bits or fewer) to save memory and time, accepting less precision. [Inference: a general industry trend; exact formats vary by chip.] The Patriot missile timing error of 1991 is the textbook case of tiny errors piling up: a clock counted in tenths of a second, 0.1 stored inexactly, a drift of about a third of a second after 100 hours. [Unverified: details from memory.]

:::qc lvl=3
q: A program adds up a million small payments as floats and compares the total to 100000 with ==. What is the best fix?
options: ["Use a bigger loop", "Keep amounts in integer paise (or use Decimal) and compare integers", "Round every payment to one decimal place"]
answer: 1
right: Right. Integers in the smallest unit add exactly, so the total is exact, and equality means what you expect.
wrong: Any scheme that still stores money as binary fractions will carry rounding noise. What would let each payment be stored exactly?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A number lives in a box of fixed size, so only finitely many numbers exist for the computer; past the edge, whole numbers wrap around. {lvl=1}
2. Two's complement runs −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1: the top bit is worth a negative amount, and negating means flip the bits and add 1. {lvl=1}
3. 127 + 1 in 8 bits is −128: overflow is arithmetic modulo 2ⁿ, silent in most languages (not in Python integers). {lvl=1}
4. One tenth is a repeating fraction in binary, so 0.1 is stored as the nearest double, and 0.1 + 0.2 ≠ 0.3. {lvl=2}
5. A double is sign, exponent and fraction (1, 11 and 52 bits), giving 15 to 16 digits; compare with a tolerance and keep money in integers. {lvl=2}
6. The gap between floats grows with the size of the number, so small terms get lost, addition order matters and subtracting near-equals is dangerous. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never test floats with ==; test that they are close, and know what tolerance suits the problem. {lvl=2}
- Never store money in floats; use integer paise or a decimal type. {lvl=2}
- Two's complement has one extra negative number: negating −128 in 8 bits gives −128 again. {lvl=3}
- Python integers never overflow, but other languages, NumPy and databases do, silently; check the type's range when you port code. {lvl=2}
- When adding many numbers, rounding errors depend on order; use fsum or integers where exactness matters. {lvl=3}
- Compute the midpoint as lo + (hi - lo) // 2, not (lo + hi) // 2, if the values might be large. {lvl=2}
:::
