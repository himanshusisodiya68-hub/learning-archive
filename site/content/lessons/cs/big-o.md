---
title: Big-O and growth of cost
summary: Why a program that is fine for 100 users can collapse at a million, and how to predict that by counting steps.
ncert: []
up_to: SDE-2
builds_on: [Decisions and loops, Arrays and dynamic arrays]
notes_prompt: Explain to a friend why doubling the number of users can make one program twice as slow and another program four times as slow.
margin:
  - kind: history
    title: History
    text: The O( ) notation comes from the German mathematician Paul Bachmann (1894) and was popularised by Edmund Landau. Donald Knuth and others brought it into computer science in the 1960s and 70s. [Unverified]
  - kind: tip
    title: Interview favourite
    text: 'Before writing any solution, read the limits in the problem. If n is up to 100,000, an O(n²) idea (10 billion steps) is too slow and you need O(n log n) or better. The limits tell you which idea is allowed.'
  - kind: olympiad
    title: Rule of thumb
    text: A typical machine does about 10⁸ simple steps per second in a fast language, and roughly 10⁷ in plain Python. Divide your step count by that to get seconds.
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 3 Characterizing Running Times [Unverified]" }
  - { title: "J. Bentley, Programming Pearls", ref: "Column 8 Algorithm Design Techniques (a famous O(n³) to O(n) story) [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Ch. 2 Algorithm Analysis [Unverified]" }
cards:
  - { front: "What does Big-O describe?", back: "How the number of steps grows as the input size n grows, keeping only the fastest-growing part and ignoring constant factors." }
  - { front: "Rank from slowest-growing to fastest-growing: n², log n, 2ⁿ, n, n log n.", back: "log n, n, n log n, n², 2ⁿ." }
  - { front: "What happens to an O(n²) program when the input doubles?", back: "It takes about 4 times as long. O(n) takes 2 times, O(log n) takes one extra step." }
  - { front: "Best, worst and average case of linear search?", back: "Best: 1 step (first item). Worst: n steps (last item or absent). Average: about n/2 steps when the item is present. Big-O is usually quoted for the worst case." }
  - { front: "What is amortised cost?", back: "The average cost per operation over a long sequence, even if a few operations are expensive. Appending to a dynamic array is O(1) amortised although a resize costs O(n)." }
  - { front: "Why can an O(n) algorithm lose to an O(n²) one?", back: "Big-O hides constant factors. For small n, 100n steps can be worse than n² steps (n below 100). Big-O tells you who wins as n grows, not for every n." }
core:
  idea: 'Big-O counts how the number of steps grows as the input grows, keeping only the fastest-growing term and dropping constants. It tells you in advance whether a program will still work when the data is a thousand times bigger.'
  formulas:
    - tex: 'T(n) = 3n^2 + 5n + 7 \;\Rightarrow\; T(n) = O(n^2)'
      label: 'Keep the biggest term, drop constants'
    - tex: 'O(1) < O(\log n) < O(n) < O(n\log n) < O(n^2) < O(2^n)'
      label: 'The ladder of growth, slowest to fastest'
  conditions:
    - 'You count a fixed set of basic steps (compare, add, read one array cell), each taking about the same time'
    - 'n is large enough that the biggest term dominates; for tiny n, constants matter'
    - 'You state which case you mean: best, worst or average'
  sign: 'The commonest mistake is reading O(n) as "n steps". It means "grows in step with n": 5n steps is still O(n).'
outcomes:
  - 'Explain why we count steps instead of seconds'
  - 'Place O(1), O(log n), O(n), O(n log n), O(n²) and O(2ⁿ) on a ladder and say which can handle a million items'
  - 'Read the Big-O of a loop, a nested loop and a halving loop straight from the code'
  - 'Predict how running time changes when the input doubles'
  - 'Distinguish best, worst, average and amortised cost, and time from space'
opener:
  story: |
    Result day. A school builds a tiny website where students type a roll number and see their marks. It was tested on 50 students and answered instantly. Then the board uses the same code for **five lakh** students, and at 10 a.m. the page just spins.

    Nothing was "broken". Every line of code worked exactly as written. The program was simply doing far more work per student than anyone noticed, and with 10,000 times more students it did a million times more work.

    So here is the question every engineer eventually asks: could you have known, **before** launch, that this would happen, without running it on five lakh students?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Growth curves: a flat line, a gentle slope and a curve shooting up as the number of students grows"><path d="M34 206 H300 M34 206 V24" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><path d="M34 190 L300 186" style="fill:none;stroke:var(--muted);stroke-width:2"/><path d="M34 200 L300 110" style="fill:none;stroke:var(--c);stroke-width:2.5"/><path d="M34 204 Q150 190 214 120 T262 26" style="fill:none;stroke:var(--bad);stroke-width:2.5"/><text x="236" y="180" style="font-size:10px;fill:var(--muted)">same work for all</text><text x="196" y="122" style="font-size:10px;fill:var(--c)">grows with students</text><text x="64" y="40" style="font-size:10px;fill:var(--bad)">grows much faster: page spins</text><text x="150" y="228" style="font-size:10px;fill:var(--muted)">number of students →</text><text x="12" y="120" style="font-size:10px;fill:var(--muted)" transform="rotate(-90 12 120)">work →</text><g style="font-size:9px;fill:var(--muted)"><text x="40" y="218">50</text><text x="276" y="218">5 lakh</text></g></svg>'
life:
  - 'A teacher who checks every roll number against a list of 40 by eye is fine; against a list of 4 lakh she needs a sorted register or an index. Same task, a different growth.'
  - 'Routing: Google Maps cannot try every possible route between two cities; it uses methods whose work grows slowly with the size of the map.'
  - 'UPI at festival rush, IRCTC at Tatkal time and exam-result sites all fail the same way: cost per user that grows with the number of users.'
  - 'Planning a wedding seating chart: trying every possible arrangement of 30 guests is 30! options, far more than the age of the universe in seconds.'
models:
  - name: 'Think in growth, not in amounts'
    text: 'Ask "what happens if this doubles?" before "how much is it?". A subscription that rises 5% a month, a queue at a counter and a loan with compound interest all behave very differently from a fixed monthly cost, and the difference only shows at scale.'
  - name: 'Keep the dominant term'
    text: 'In a household budget the rent matters and the chai does not. Big-O is the habit of ignoring what is small and fixed so you can see what will actually hurt as things grow.'
  - name: 'Averages and worst cases are different questions'
    text: 'The average wait for a train says little if the one bad day strands you. Always ask which one you are being promised.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both lessons care about how cost grows with data. A hash table makes lookup O(1) where a scan is O(n).'
    differs: 'Big-O is a way of measuring; a hash table is one concrete structure that earns a good score.'
  - leaf: 'mat/exponential-growth'
    name: 'Exponential growth and doubling'
    same: 'The 2ⁿ rung of the ladder is exactly the doubling story of rice on a chessboard or a virus spreading.'
    differs: 'In maths the doubling is something you observe; in algorithms it is a warning that the approach cannot scale.'
  - leaf: 'cs/arrays'
    name: 'Arrays and dynamic arrays'
    same: 'Reading an array cell is O(1), and appending is O(1) amortised: the two standard examples of cheap steps.'
    differs: 'Inserting at the front of an array is O(n) because everything shifts; Big-O shows this cost before you pay it.'
next:
  q: 'Finding one name in a sorted list of two billion takes only about 31 steps. How do you actually write that search without a single off-by-one slip?'
  leaf: 'cs/searching-and-binary-search'
  name: 'Searching and binary search'
symbols:
  - s: 'n'
    means: 'size of the input, such as the number of students or items (count)'
  - s: 'O(\cdot)'
    means: 'Big-O: an upper bound on how the number of steps grows with n; read "order of"'
  - s: 'T(n)'
    means: 'total number of steps the program takes on an input of size n (steps)'
  - s: '\log_2 n'
    means: 'how many times you can halve n before reaching 1; for n = 1,000,000 it is about 20 (count)'
  - s: 'n^2'
    means: 'n times n; doubling n makes it 4 times bigger'
  - s: '2^n'
    means: 'two multiplied by itself n times; adding 1 to n doubles it'
---

:::hook
q: A program takes 1 second for 1,000 records. Another takes 1 second too, but its cost grows like n². With 100,000 records (100 times more), roughly how long will the n² program take?
options: ["About 100 seconds", "About 3 hours", "About 10 seconds"]
answer: 1
right: Right. A hundred times more data means 100 × 100 = 10,000 times more work, so 10,000 seconds, about 2.8 hours. A program that grows only with n would take 100 seconds. That gap is what Big-O predicts.
wrong: Careful: for a cost that grows like n², multiplying the data by 100 multiplies the work by 100 × 100. Do that multiplication and convert the seconds to hours.
:::

## Count steps, not seconds {lvl=1 id=s-count label="Foundations"}

Why not just time the program with a stopwatch? Because a stopwatch measures your laptop, today, with these 50 test records. Your friend's phone gives another answer, and neither tells you what happens with five lakh.

So we count something that does not depend on the machine: **steps**. A step is one small thing: compare two numbers, add two numbers, read one item from a list. Then we ask how the count grows as the input grows. Call the input size $n$ (the number of records).

Take the school page. Suppose it finds a student by starting at the top of the list and reading roll numbers one by one until it hits yours.

```python
def find(marks, roll):
    for i in range(len(marks)):
        if marks[i][0] == roll:
            return marks[i][1]
    return None
```

In the worst case the roll number is at the very end, so the loop does $n$ comparisons. Double the students, double the work. We say this is **O(n)**, read "order n" or "linear". It grows in step with $n$.

:::qc lvl=1
q: A loop does 5 comparisons for every record. Which is the better description of its growth?
options: ["O(5n), which is different from O(n)", "O(n): five times n still grows in step with n", "O(5)"]
answer: 1
right: Right. Constants like 5 do not change the shape of the growth: double the records and the work doubles either way.
wrong: Big-O ignores constant multipliers. Ask yourself what happens to the work when n doubles.
:::

## The ladder of growth {lvl=1 id=s-ladder label="Foundations"}

Most programs fall on a short ladder. Here is what each rung does at three sizes, and how long it would take at 100 million steps a second (a fast language on a modern machine).

| Growth | Everyday picture | n = 10 | n = 1,000 | n = 1,000,000 |
|---|---|---|---|---|
| O(1) | open a page by number | 1 step | 1 | 1 |
| O(log n) | find a word by halving a dictionary | 3 | 10 | 20 |
| O(n) | read every page | 10 | 1,000 | 1 million: 0.01 s |
| O(n log n) | sort a pile of papers well | 33 | 10,000 | 20 million: 0.2 s |
| O(n²) | compare every pair of people | 100 | 1 million | 10¹² steps: about 2.8 hours |
| O(2ⁿ) | try every yes/no combination | 1,024 | more than the atoms in the universe | impossible |

The table is the whole story of why engineers care. At a million items, the first four rungs finish before you blink. The fifth takes an afternoon. The sixth never finishes: even at $n = 50$ it needs $2^{50} \approx 10^{15}$ steps, about 130 days.

:::figure caption="Same ladder, drawn as work against n. Everything up to n log n hugs the floor; n² climbs the wall; 2ⁿ leaves the page."
<svg viewBox="0 0 320 200" role="img" aria-label="Curves for log n, n, n squared and 2 to the n against n, the last two shooting up steeply">
<g class="axis" style="stroke:var(--ink);stroke-width:1.5;fill:none"><path d="M30 170 H304 M30 170 V14"/></g>
<g class="pen" style="fill:none;stroke-width:2.2">
<path d="M30 168 Q60 150 300 138" style="stroke:var(--muted)"/>
<path d="M30 168 L300 96" style="stroke:var(--mat)"/>
<path d="M30 168 Q200 150 260 20" style="stroke:var(--ink)"/>
<path d="M30 168 Q150 160 190 20" style="stroke:var(--bad)"/>
</g>
<g style="font-size:10px;fill:var(--ink)">
<text x="210" y="134" style="fill:var(--muted)">log n</text>
<text x="240" y="84" style="fill:var(--mat)">n</text>
<text x="262" y="36">n²</text>
<text x="150" y="30" style="fill:var(--bad)">2ⁿ</text>
<text x="150" y="190" style="fill:var(--muted)">n (size of input) →</text>
</g>
</svg>
:::

:::qc lvl=1
q: Which of these can still finish in under a second when n = 1,000,000 (about 10⁸ steps per second)?
options: ["O(n²)", "O(n log n)", "O(2ⁿ)"]
answer: 1
right: Right. n log n is about 20 million steps, roughly 0.2 seconds. n² would need a trillion steps.
wrong: Work out the steps for each rung: n² is 10¹², far too many for one second at 10⁸ steps a second.
:::

## Reading Big-O off the code {lvl=2 id=s-reading label="SDE-1"}

You rarely need a formula. Look at the loops.

- **One statement, no loop:** O(1).
- **A loop over $n$ items:** O(n).
- **A loop inside a loop, both over $n$:** about $n \times n$ steps, O(n²).
- **A loop that halves the problem each time** (`while n > 1: n //= 2`): it stops after about $\log_2 n$ rounds, O(log n).
- **Loops one after another:** add them, and keep the larger. O(n) followed by O(n²) is O(n²).

When you add things up, **drop constants and lower terms**. If counting gives $T(n) = 3n^2 + 5n + 7$ steps, at $n = 1000$ the $n^2$ part is 3,000,000 and the rest is 5,007. The small terms fade as $n$ grows, so $T(n) = O(n^2)$. Read it as: "for big n, this grows like n squared".

```python
def has_duplicate(a):
    for i in range(len(a)):          # n times
        for j in range(i + 1, len(a)):   # up to n times
            if a[i] == a[j]:
                return True
    return False
```

This compares every pair: about $n(n-1)/2$ checks, which is O(n²). With a hash set (see hash tables) you can do it in O(n), one pass, one lookup each.

:::qc lvl=2
q: What is the Big-O of this code?  for i in range(n): j = 1; while j < n: j *= 2
options: ["O(n)", "O(n log n)", "O(n²)"]
answer: 1
right: Right. The outer loop runs n times; each time the inner loop doubles j until it reaches n, which takes about log₂ n rounds. Multiply: n log n.
wrong: The inner loop does not run n times: j doubles, so it finishes in about log₂ n rounds. Multiply that by the n rounds of the outer loop.
:::

## Check it with a clock {lvl=2 id=s-clock label="SDE-1"}

The doubling test is the honest way to confirm your reading: time the code at $n$, $2n$ and $4n$, and watch the ratio. These are real timings from one machine running plain Python. Yours will differ in size, but the ratios should look the same. [Inference: the exact figures depend on the machine; the ratios are the lesson.]

| Code | Size | Time | What the ratio shows |
|---|---|---|---|
| Pair check (n²) | 1,000 → 2,000 → 4,000 | 0.025 s, 0.10 s, 0.40 s | each doubling is 4 times slower |
| Linear search, absent item | 1,000 → 1,000,000 | 0.000023 s → 0.021 s | 1000 times more data, about 1000 times slower |
| Binary search (`bisect`) | 1,000 → 1,000,000 | 0.00000015 s → 0.00000032 s | 1000 times more data, about 2 times slower |
| Sort (`sorted`) | 100,000 → 1,000,000 | 0.016 s → 0.24 s | 10 times more data, about 15 times slower (n log n predicts about 12) |
| Naive `fib(n)` (2ⁿ-like) | 25 → 30 → 32 | 0.009 s, 0.093 s, 0.25 s | every +1 multiplies time by about 1.6 |

Look at the last row. Going from 30 to 32 added two to $n$ and made it 2.7 times slower. Keep adding and no computer in the world can keep up. A naive recursive Fibonacci recomputes the same smaller values again and again, which is what makes it exponential (recursion and, later, dynamic programming fix this).

```python
import time
def timeit(f, *args):
    start = time.perf_counter()
    f(*args)
    return time.perf_counter() - start
```

## Best, worst and average {lvl=2 id=s-cases label="SDE-1"}

Linear search for a roll number can end at the first row (best case, 1 step), at the last row or when the number is absent (worst case, $n$ steps), or somewhere in the middle (average case, about $n/2$ steps when the roll number is present). All three are honest answers to different questions.

Unless told otherwise, Big-O means the **worst case**, because that is the promise: "it will never be slower than this". Averages need an assumption about the inputs, and an adversary or a bad day can break that assumption. Hash tables are O(1) on average and O(n) in the worst case; quicksort (coming soon) is O(n log n) on average and O(n²) in the worst case.

:::qc lvl=2
q: In a sorted list of 1,000 items, you linear-search for the very first item. Which case is this, and how many steps?
options: ["Best case, 1 step", "Worst case, 1,000 steps", "Average case, 500 steps"]
answer: 0
right: Right. The first item is found at once. Big-O quotes the worst case, but the best case is real and can be very different.
wrong: The item sits first in the list. Which case does that describe?
:::

## Space, amortised cost and the fine print {lvl=3 id=s-space label="SDE-2"}

Time is not the only thing that grows. **Space** is the extra memory the program needs. Creating a hash set of $n$ items to avoid an O(n²) loop costs O(n) space: you traded memory for time. Every algorithm choice is a trade like this, and the right trade depends on which resource you are short of.

**Amortised cost** is the average over a long run of operations. A dynamic array doubles when full, copying everything; one such copy is O(n). But after doubling, $n$ more appends are cheap before the next copy, so across all $n$ appends the total copying is under $2n$, i.e. O(1) per append on average. The cost is smooth on average but spiky in a single operation, and the spike matters in latency-sensitive systems (a request that hits the resize is slow).

```python
total = 0
size = 1
for k in range(1, 1 << 20):        # appending ~1 million items
    if k > size:                   # array full: copy everything
        total += size
        size *= 2
print(total / k)                   # about 1 copy per append
```

**The fine print.** Formally, $T(n) = O(g(n))$ means: there are constants $c$ and $n_0$ such that $T(n) \le c \cdot g(n)$ for every $n \ge n_0$. Read it as: "beyond some point, $T$ never beats a fixed multiple of $g$". Its siblings are $\Omega$ (a lower bound, "at least this") and $\Theta$ (both: "exactly this growth"). Interviews usually say O when they mean $\Theta$.

Two honest limits. First, **constants matter when n is small**: an O(n log n) sort with a heavy setup can lose to an O(n²) insertion sort on 20 items, which is why real libraries switch strategies for small inputs. Second, **the machine matters**: an O(n) pass over memory that fits in cache can be several times faster than the "same" O(n) pass that jumps around main memory (see the memory hierarchy lesson). Big-O tells you what wins as $n$ grows, not who wins on Tuesday.

:::qc lvl=3
q: A dynamic array doubles when full. Appending n items does about how many element copies in total?
options: ["About n²", "Under 2n, so O(1) per append on average", "About n log n"]
answer: 1
right: Right. The copies are 1 + 2 + 4 + ... + n/2, which adds up to less than n, so each append costs a constant amount on average.
wrong: Add up the copies at each doubling: 1, 2, 4, 8, ... up to n/2. That doubling series sums to less than n.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Count steps, not seconds; Big-O describes how the step count grows with the input size n. {lvl=1}
2. The ladder from slow growth to fast: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ). Up to n log n scales to millions; 2ⁿ does not scale past about 40. {lvl=1}
3. Doubling the input multiplies O(n) work by 2, O(n²) work by 4, and adds just one step to O(log n). {lvl=1}
4. Read Big-O from the loops: sequence adds, nesting multiplies, halving gives log n; drop constants and lower terms. {lvl=2}
5. Confirm with the doubling test; the ratio between timings shows the growth. {lvl=2}
6. Big-O usually means worst case; also ask about best, average and amortised, and about space as well as time. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- O(n) does not mean "n steps": 100n and n are both O(n), and 100n can be slower than n² for small n. {lvl=1}
- Nested loops are not always n²: check what each loop actually runs over, since an inner loop that halves gives n log n. {lvl=2}
- Hidden costs: `x in some_list`, slicing, `list.insert(0, x)` and string `+=` inside a loop are each O(n), so a loop around them is O(n²). {lvl=2}
- Quoting an average as if it were a guarantee. Ask "worst case?" when failure is expensive. {lvl=3}
- Reading n as a single number when there are two inputs: matching a list of m items against n items is O(m·n), not O(n). {lvl=3}
- In interviews, state your assumptions: "n is the length of the list; the work is O(n log n) time and O(n) extra space." {lvl=2}
:::
