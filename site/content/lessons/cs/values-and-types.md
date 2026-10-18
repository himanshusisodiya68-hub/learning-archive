---
title: Values and types
summary: Why your phone's calculator can say 0.1 + 0.2 is not 0.3, and what that teaches about numbers, text and truth.
ncert: []
up_to: SDE-2
builds_on: [Bits and binary, How computers store numbers]
notes_prompt: Explain to a friend why the same pattern of bits can be a number, a letter or a yes/no, and why a payment app stores money as whole paise.
margin:
  - kind: history
    title: History
    text: The IEEE 754 standard for floating-point numbers was first published in 1985 [Unverified date], so that a calculation gives the same answer on different machines. Almost every language you will use follows it.
  - kind: tip
    title: Interview favourite
    text: '"Why is 0.1 + 0.2 != 0.3?" is a classic screening question. The strong answer is one sentence about binary fractions plus what you would do instead: integers for money, a tolerance for science.'
  - kind: olympiad
    title: Stretch
    text: A float has about 53 binary digits of precision. Past 2^53, whole numbers can no longer all be stored exactly, so adding 1 can do nothing at all.
books:
  - { title: "A. Downey, Think Python", ref: "Ch. 2 Variables, expressions and statements [Unverified chapter]" }
  - { title: "D. Goldberg, What Every Computer Scientist Should Know About Floating-Point Arithmetic", ref: "the 1991 paper, section on rounding error [Unverified]" }
cards:
  - { front: "What does a type decide?", back: "How the bits of a value are read and which operations make sense. 3 + 4 is 7 for numbers, but '3' + '4' is '34' for text." }
  - { front: "Why is 0.1 + 0.2 not exactly 0.3 in Python?", back: "0.1 and 0.2 have no exact binary form (like 1/3 has no exact decimal form), so each is stored as a nearby value and the small errors show in the sum." }
  - { front: "How should a payment app store money?", back: "As a whole number of the smallest unit (paise), or with the Decimal type. Never as a binary float." }
  - { front: "Which values count as false in Python?", back: "0, 0.0, '' (empty text), empty list, dict and set, and None. Almost everything else counts as true, including the text '0' and 'False'." }
  - { front: "What does -7 // 2 give, and why?", back: "-4. Floor division rounds down toward minus infinity (not toward zero), so -3.5 becomes -4." }
  - { front: "Is Python text a list of bytes?", back: "No. It is a sequence of Unicode code points. len('नमस्ते') is 6, but it takes 18 bytes in UTF-8." }
core:
  idea: 'Every value in a program is some bits plus a type, and the type says how to read those bits and what you may do with them. Whole numbers are exact, decimal fractions in binary are only close, and text is a sequence of characters, not of bytes.'
  formulas:
    - tex: '0.1 + 0.2 \neq 0.3'
      label: 'In binary floats the sum is only close to 0.3 (it prints 0.30000000000000004)'
    - tex: '\text{amount in paise} = \text{rupees} \times 100'
      label: 'Store money as a whole number of the smallest unit'
  conditions:
    - 'Whole numbers (int) in Python are exact at any size, limited only by memory'
    - 'Floats are exact only for sums of powers of two such as 0.5, 0.25 and 0.75; most decimal fractions are approximate'
    - 'Operations only make sense between compatible types (number with number, text with text) unless you convert on purpose'
  sign: 'The commonest mistake is comparing floats with ==. Compare with a tolerance (math.isclose), or avoid floats by using whole numbers.'
outcomes:
  - 'Name the basic Python types and say what each is for'
  - 'Predict what an expression such as "3" + "4", 7 // 2 or -7 % 2 gives'
  - 'Explain why 0.1 + 0.2 is not 0.3 and choose a safe way to handle money'
  - 'Use truthiness and type conversion without surprises'
  - 'Explain why len of a string can differ from its size in bytes'
opener:
  story: |
    A friend is building a small shop app. A mug costs ₹0.10 in a test and a pen costs ₹0.20, so the bill should be ₹0.30. She writes the check "total equals 0.30" and the app says **no**.

    She prints the total and sees `0.30000000000000004`. Nothing is broken. The computer did exactly what it was told, and it is not bad at sums. It is a hint that a number inside a computer is not quite the number you picture.

    So what is a "number" inside a program, and why does the same sum come out clean in some cases and strange in others?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A calculator screen showing 0.1 + 0.2 and the answer 0.30000000000000004 beside a coin"><rect x="24" y="20" width="150" height="200" rx="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="38" y="36" width="122" height="44" rx="6" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="44" y="54" style="font-size:11px;fill:var(--muted)">0.1 + 0.2</text><text x="44" y="72" style="font-size:9px;fill:var(--bad)">0.30000000000000004</text><g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--rule)"><rect x="38" y="96" width="34" height="26" rx="4"/><rect x="78" y="96" width="34" height="26" rx="4"/><rect x="118" y="96" width="34" height="26" rx="4"/><rect x="38" y="130" width="34" height="26" rx="4"/><rect x="78" y="130" width="34" height="26" rx="4"/><rect x="118" y="130" width="34" height="26" rx="4"/><rect x="38" y="164" width="34" height="26" rx="4"/><rect x="78" y="164" width="34" height="26" rx="4"/><rect x="118" y="164" width="34" height="26" rx="4"/></g><circle cx="244" cy="76" r="30" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="232" y="82" style="font-size:16px;fill:var(--c)">0.30</text><text x="196" y="132" style="font-size:11px;fill:var(--muted)">what you mean</text><path d="M244 140 L244 168" style="stroke:var(--muted);stroke-width:1.5;fill:none"/><text x="202" y="186" style="font-size:11px;fill:var(--ink)">what is stored</text><text x="196" y="202" style="font-size:9px;fill:var(--bad)">0.3000000000000000444...</text></svg>'
life:
  - 'UPI and card apps keep amounts as whole paise, not as decimal rupees, so a bill never loses a paisa to rounding.'
  - 'A phone number such as 0987654321 is text, not a number: leading zeros matter and you never add two phone numbers.'
  - 'Spreadsheets sometimes turn a long ID into a scientific-notation number and silently chop its last digits, which is a float losing precision.'
  - 'A form that says "age: abc" is rejected because the program cannot turn that text into an int.'
  - 'A GPS app compares distances with a small tolerance, because two float results that should be equal rarely are.'
models:
  - name: 'Representation is a choice'
    text: 'Any information has to be stored in some form, and every form is good at some things and poor at others. Roman numerals add badly; decimals struggle with thirds. Ask "what is this stored as?" before trusting an answer, in money, maps or statistics.'
  - name: 'Types are promises'
    text: 'Saying "this is a number" or "this is a name" tells everyone what they can do with it. A cheque, a ticket and a coin are all paper or metal, but their type decides what they are good for. Mixing types by accident is the root of many bugs.'
  - name: 'Close is not equal'
    text: 'Two measurements, two prices or two survey results are rarely identical. Decide how close counts as the same (a tolerance) before you compare, instead of demanding perfection.'
links:
  - leaf: 'cs/numbers-in-a-computer'
    name: 'How computers store numbers'
    same: 'Both explain that a number in memory is a fixed pattern of bits, so only finitely many values can be stored.'
    differs: 'That lesson shows the bit layout of integers and floats; this one shows what the layout means for the programmer and the common surprises.'
  - leaf: 'cs/text-images-sound'
    name: 'Text, images and sound as bits'
    same: 'The same bits can be read as text, a picture or a number; the reading rule (the type) is what turns bits into meaning.'
    differs: 'Here we stay with the basic Python types; there the same idea scales up to files and media formats.'
  - leaf: 'cs/bits-and-binary'
    name: 'Bits and binary'
    same: 'A fraction like 1/3 cannot be written exactly in decimal; 0.1 cannot be written exactly in binary. Both are the same problem in different bases.'
    differs: 'In decimal the troublesome fractions are thirds, sevenths and so on; in binary even tenths misbehave.'
next:
  q: 'You wrote price = 20 and then total = price. If you change price later, does total change too? Where do these names actually point, and what is a name anyway?'
  leaf: 'cs/variables-and-memory'
  name: 'Variables and memory'
symbols:
  - s: '\texttt{int}'
    means: 'whole number, positive, negative or zero; exact and as big as memory allows (no unit)'
  - s: '\texttt{float}'
    means: 'number with a fractional part, stored in binary with about 16 decimal digits of precision (no unit)'
  - s: '\texttt{str}'
    means: 'text: a sequence of characters (no unit)'
  - s: '\texttt{bool}'
    means: 'a truth value, either True or False (no unit)'
  - s: '\texttt{None}'
    means: 'the value that means "nothing here" (no unit)'
  - s: '\texttt{//}'
    means: 'floor division: divide, then round down to a whole number'
  - s: '\%'
    means: 'remainder after floor division (Python writes it %)'
---

:::hook
q: Here is the puzzle. In Python, what does `0.1 + 0.2 == 0.3` give?
options: ["True, because the sum is 0.3", "False, even though it looks right", "An error, because decimals are not allowed"]
answer: 1
right: Right. It gives False. The computer stores 0.1 and 0.2 as nearby binary values, and their sum lands a hair away from the stored 0.3. By the end of this lesson you will know why, and what real systems do about it.
wrong: Python happily accepts decimals, and the sum looks like 0.3. Look at what actually gets printed for 0.1 + 0.2 before you decide.
:::

## A value is bits plus a type {lvl=1 id=s-value label="Foundations"}

Inside the computer there are only bits. The pattern `01000001` is not a number or a letter by itself. It becomes the number 65 if you read it as a whole number, and the letter `A` if you read it as text. The **type** is the rule that says which reading to use.

A **value** is a piece of data the program works with, such as `65`, `"A"` or `True`. Every value has a type, and you can ask for it:

```python
type(65)        # <class 'int'>
type(2.5)       # <class 'float'>
type("A")       # <class 'str'>
type(True)      # <class 'bool'>
type(None)      # <class 'NoneType'>
```

These five are enough for most beginner programs:

| Type | Plain meaning | Example |
|---|---|---|
| `int` | whole number | `7`, `-3`, `0` |
| `float` | number with a fractional part | `2.5`, `1e-3` |
| `str` | text, in quotes | `"Asha"`, `'7'` |
| `bool` | yes or no | `True`, `False` |
| `None` | nothing here | `None` |

:::figure caption="The same eight bits, read three ways. The type is the reading rule."
<svg viewBox="0 0 320 170" role="img" aria-label="Eight bits 01000001 read as the integer 65, the letter A and a dark grey pixel">
<g style="fill:none;stroke:var(--ink);stroke-width:1.5">
<rect x="40" y="20" width="30" height="30"/><rect x="70" y="20" width="30" height="30"/><rect x="100" y="20" width="30" height="30"/><rect x="130" y="20" width="30" height="30"/><rect x="160" y="20" width="30" height="30"/><rect x="190" y="20" width="30" height="30"/><rect x="220" y="20" width="30" height="30"/><rect x="250" y="20" width="30" height="30"/>
</g>
<g style="font-size:16px;fill:var(--ink)"><text x="50" y="42">0</text><text x="80" y="42">1</text><text x="110" y="42">0</text><text x="140" y="42">0</text><text x="170" y="42">0</text><text x="200" y="42">0</text><text x="230" y="42">0</text><text x="260" y="42">1</text></g>
<path d="M160 52 L70 100 M160 52 L160 100 M160 52 L250 100" style="stroke:var(--mat);stroke-width:1.5;fill:none"/>
<text x="30" y="118" style="font-size:12px;fill:var(--mat)">read as int</text><text x="48" y="138" style="font-size:16px;fill:var(--ink)">65</text>
<text x="118" y="118" style="font-size:12px;fill:var(--mat)">read as text</text><text x="150" y="138" style="font-size:16px;fill:var(--ink)">A</text>
<text x="212" y="118" style="font-size:12px;fill:var(--mat)">read as a pixel</text><text x="198" y="138" style="font-size:11px;fill:var(--muted)">dark grey, 65/255</text>
</svg>
:::

The type also decides what operations make sense. Adding two numbers adds them. Adding two pieces of text glues them together:

```python
3 + 4          # 7
"3" + "4"      # '34'
"ab" * 3       # 'ababab'
3 + "4"        # TypeError: can't add a number and text
```

The last line fails on purpose. Python refuses to guess whether you meant 7 or `'34'`.

:::qc lvl=1
q: What does `"5" + "5"` give in Python?
options: ["10", "'55'", "An error"]
answer: 1
right: Right. Both are text, so + glues them: '55'. To get 10 you would convert first, with int("5") + int("5").
wrong: The quotes make these text, not numbers. What does + do for text?
:::

## Converting and truth {lvl=1 id=s-convert label="Foundations"}

Sometimes you do want to change the type. Text from a form is always text, even if it looks like a number. Conversion functions are named after the type they produce:

```python
int("42")      # 42
float("4.5")   # 4.5
str(42)        # '42'
int(4.9)       # 4  (cuts off the fraction, does not round)
int("4.5")     # ValueError: text is not a whole number
```

A failed conversion raises an **error** (an exception). That is good: the program stops loudly instead of carrying a wrong value forward.

Decisions need a yes or no. The `bool` type holds exactly that, and comparisons produce it: `5 > 3` is `True`. Python also lets any value stand in for a yes or no, called **truthiness**. The empty or zero values count as no; the rest count as yes:

```python
bool(0), bool(0.0), bool(""), bool([]), bool(None)   # all False
bool(7), bool("hi"), bool([0]), bool("0")            # all True
```

Notice `bool("0")` is `True`: the text `"0"` is not empty.

:::qc lvl=1
q: What does `bool("False")` give?
options: ["False, since the word says False", "True, since the text is not empty", "An error"]
answer: 1
right: Right. Truthiness looks at emptiness, not at the meaning of the words. Any non-empty text is True.
wrong: Python does not read the word. It only asks whether the text is empty.
:::

## Whole numbers and division {lvl=2 id=s-int label="SDE-1"}

Python's `int` never overflows. `2**100` is `1267650600228229401496703205376`, exact, and the number can keep growing until memory runs out. Many other languages (C, Java) use a fixed size such as 32 or 64 bits, and a sum that passes the limit wraps around or fails. Python is gentler, and a little slower for it.

Division has three faces. They matter in loops, indexes and clock arithmetic:

```python
10 / 4      # 2.5   true division, always a float
10 // 4     # 2     floor division: round down
10 % 4      # 2     remainder
-7 // 2     # -4    rounds down, toward minus infinity
-7 % 2      # 1     the remainder keeps the sign of the divisor
```

The rule tying them together is: `a == (a // b) * b + a % b`. Read it as: the quotient times the divisor, plus the remainder, rebuilds the number. Because Python floors, `-7 % 2` is 1, which is what you want when you wrap an index round a circle or a clock (`(hour + 5) % 12`).

[Inference] Other languages such as C and Java truncate toward zero, so `-7 % 2` is `-1` there. If you move code between languages, test negative numbers first.

:::qc lvl=2
q: What does `-7 // 2` give in Python?
options: ["-3", "-4", "3.5"]
answer: 1
right: Right. -3.5 rounded down (toward minus infinity) is -4.
wrong: // always rounds down. On the number line, which whole number lies just below -3.5?
:::

## Why 0.1 + 0.2 is not 0.3 {lvl=2 id=s-float label="SDE-1"}

You know that 1/3 in decimal is 0.3333... and never ends. Any fixed number of digits is only close. Binary has the same trouble with different fractions. A binary fraction is a sum of halves, quarters, eighths and so on. 0.5 is one half, 0.75 is a half plus a quarter, so both are exact. But 0.1 would need infinitely many binary digits, like 0.0001100110011...

A `float` has room for about 53 binary digits, so it stores the nearest value it can. Each of 0.1 and 0.2 is a tiny bit off. Add them and the errors do not cancel:

```python
0.1 + 0.2             # 0.30000000000000004
0.1 + 0.2 == 0.3      # False
0.5 + 0.25 == 0.75    # True, all powers of two
```

Read the output as: the nearest stored value to the true sum is not the nearest stored value to 0.3. They are neighbours, one step apart.

What to do instead:

```python
import math
from decimal import Decimal
math.isclose(0.1 + 0.2, 0.3)                  # True: compare with tolerance
Decimal("0.1") + Decimal("0.2")               # Decimal('0.3'): exact decimal
19.99 * 100                                   # 1998.9999999999998, not 1999
```

For money, the strongest habit is to store a whole number of the smallest unit (paise) and convert only when displaying. Whole numbers are exact. Use `Decimal` when you need decimal fractions with rules for rounding. Use `math.isclose` when you compare measurements.

:::qc lvl=2
q: Which is the best way to store a bill of ₹499.50 in a payment system?
options: ["The float 499.5", "The whole number 49950 (paise)", "The text '499.50'"]
answer: 1
right: Right. Whole paise add exactly, compare exactly and never gain or lose a paisa. 499.5 happens to be exact in binary, but 499.10 is not, so floats are unsafe as a rule.
wrong: Think about adding thousands of bills. Which representation never drifts?
:::

## Text is characters, not bytes {lvl=2 id=s-text label="SDE-1"}

A Python `str` is a sequence of **characters**. Computers store each character as a number called a **code point** in the Unicode table, and then store those numbers as bytes in some encoding (usually UTF-8). Characters and bytes are different things:

```python
s = "नमस्ते"
len(s)                  # 6 characters (code points)
len(s.encode("utf-8"))  # 18 bytes, 3 per character here
s[0]                    # 'न'
s[0] = "x"              # TypeError: strings cannot be changed
```

Strings are **immutable**: you build a new one instead of changing the old. This is the first hint of a bigger idea, taken up in the next lesson. Also, a "character" a person sees can be more than one code point (here the vowel mark े is its own code point), so `len` counts code points, not letters on screen. [Unverified] details of how each script combines code points; the principle is what matters here.

Encoding matters whenever text crosses a boundary: a file, a network, a database. Reading UTF-8 bytes as another encoding gives gibberish.

## Corners that bite {lvl=3 id=s-corners label="SDE-2"}

Three traps that senior engineers still check for:

- **Floats have holes.** Past $2^{53}$ (about $9 \times 10^{15}$) not every whole number is representable, so `float(2**53) + 1 == float(2**53)` is `True`. IDs and counts must be `int`, never `float`.
- **`nan` is never equal to itself.** `float("nan") != float("nan")` is `True`. To test for it, use `math.isnan`.
- **`bool` is an `int` in disguise.** `True + True` is `2`, and `sum([True, False, True])` counts the trues. Handy, but it also means `isinstance(True, int)` is `True`, which can slip through a check for numbers.

Rounding is a policy, not a fact. Python's `round` sends exact halves to the nearest even number (`round(2.5)` is `2`, `round(3.5)` is `4`), which avoids a steady upward bias across many values. Accounting rules may demand another policy, which is why `Decimal` lets you choose one.

Finally, Python is **dynamically typed**: names have no fixed type, values do. That is flexible, but a type mismatch only shows up when the line runs. **Type hints** (`def f(x: int) -> int`) let tools such as mypy catch mismatches before running. [Unverified] how widely each team enforces them.

:::qc lvl=3
q: What does `float(2**53) + 1 == float(2**53)` give?
options: ["False, since adding 1 changes a number", "True, since the float cannot hold the next whole number", "An error"]
answer: 1
right: Right. Beyond 2^53 neighbouring floats are 2 apart, so adding 1 rounds back to the same float.
wrong: Floats have limited precision. What happens when the gap between neighbouring floats exceeds 1?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A value is bits plus a type; the type says how to read the bits and which operations make sense. {lvl=1}
2. The core types are int, float, str, bool and None; convert on purpose with int(), float(), str(). {lvl=1}
3. Empty and zero values are false, everything else is true; the text "False" is true. {lvl=1}
4. Python ints are exact at any size; // rounds down and % keeps the divisor's sign. {lvl=2}
5. Floats are close, not exact; store money as whole paise or Decimal, compare floats with a tolerance. {lvl=2}
6. A str is a sequence of characters, immutable, and its length is not its byte size. {lvl=2}
7. Floats lose whole numbers past 2^53, nan is never equal to itself, and bool is an int. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never compare floats with `==`; use `math.isclose` or work in whole units. {lvl=2}
- Text from a user or a file is text until you convert it; `"5" + "5"` is `'55'`. {lvl=1}
- `int(4.9)` cuts to 4 and does not round; use `round` if you mean to round. {lvl=1}
- `bool("0")` and `bool("False")` are `True`: truthiness checks emptiness, not meaning. {lvl=1}
- Do not store IDs, phone numbers or PIN codes as numbers; leading zeros are lost and you never add them. {lvl=2}
- Percentages, rates and prices: decide the unit (paise or rupees) once and say it in the variable name. {lvl=2}
:::
