---
title: Reading constraints
summary: Before you write a single line, the input size already whispers which algorithm will pass and which will time out.
ncert: []
up_to: SDE-2
builds_on: [Big-O and growth of cost, Searching and binary search, A method for any problem]
notes_prompt: Explain to a friend why a program that handles 1,000 numbers in a blink can take hours on 200,000, and how you can tell this before writing it.
margin:
  - kind: history
    title: Why time limits exist
    text: 'Programming contests such as the ACM ICPC (from the 1970s) and the Olympiad in Informatics judge by running your code against hidden tests with a time limit, so the "constraints" section of a statement became part of the puzzle. [Unverified: exact dates]'
  - kind: tip
    title: Interview favourite
    text: 'In an interview nobody prints the constraints, so ask: "How large can n be?" Interviewers love this question. It shows you know that the answer decides the algorithm.'
  - kind: olympiad
    title: Hidden structure
    text: 'A constraint like "a[i] ≤ 100" or "sum of n over all tests ≤ 2·10^5" is rarely there by accident. It is the setter telling you which trick is intended.'
books:
  - { title: "A. Laaksonen, Competitive Programmer's Handbook", ref: "Ch. 1 Introduction and Ch. 2 Time complexity [Unverified chapter numbers]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "the chapter on algorithm analysis, the table of growth rates [Unverified]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "growth of functions chapter [Unverified]" }
cards:
  - { front: "How many simple operations fit in one second (rule of thumb)?", back: "About 10^8 in C++ or Java, about 10^7 in plain Python. Count the work of your idea, compare with this budget." }
  - { front: "n ≤ 10 or so: what is allowed?", back: "O(n!) or O(n!·n): try every ordering (permutations). 10! = 3,628,800." }
  - { front: "n ≤ 20: what is the signature technique?", back: "O(2^n · n): try every subset, usually with a bitmask. 2^20 ≈ 10^6." }
  - { front: "n ≤ 500, n ≤ 5000, n ≤ 10^5: which complexities?", back: "n ≤ 500: O(n³). n ≤ 5000: O(n²). n ≤ 10^5 or 10^6: O(n log n) or O(n)." }
  - { front: "n up to 10^18: what must the solution be?", back: "O(log n), O(1) or O(√n) at most: a formula, repeated halving or number theory. Never a loop over n." }
  - { front: "What does 'sum of n over all test cases ≤ 2·10^5' mean?", back: "The whole input is small, so O(n log n) per test is fine. But never allocate a full-size array per test." }
core:
  idea: 'Count the operations your idea needs as a function of the input size, and compare with the budget of roughly 10^8 simple steps per second (10^7 in Python). The largest allowed n therefore tells you the highest complexity that can pass.'
  formulas:
    - tex: 'n^2 \le 10^8 \Rightarrow n \lesssim 10^4'
      label: 'Quadratic work: the biggest n you can afford'
    - tex: 'n \log_2 n \le 10^8 \Rightarrow n \lesssim 4\times10^6'
      label: 'Sort-like work goes a lot further'
  conditions:
    - 'Time limit about 1 to 2 seconds, one test per run (multi-test inputs share the budget)'
    - 'Each "operation" is a simple step; a heavy step (building a big list, a dict lookup) counts for several'
    - 'Constants matter near the edge: 10^8 passes in C++ and fails in Python'
  sign: 'The constraints give an upper bound on n, not the typical size. Design for the maximum the statement allows, because the hidden tests will contain it.'
outcomes:
  - 'Estimate the number of operations of an idea and compare it with the time budget'
  - 'Map a constraint such as n ≤ 20, 500, 5000 or 10^5 to the family of algorithms intended'
  - 'Adjust the budget for Python and for multi-test inputs'
  - 'Spot hidden structure in small values, special guarantees and product bounds'
  - 'Reject a correct but too slow idea before spending time coding it'
opener:
  story: |
    A contest problem says: given $n$ numbers, find two that add up to a target. Your friend writes two loops, checks every pair, runs it on the sample, and gets the right answer in a blink. Then she submits and the judge says **Time limit exceeded**.

    The only thing she never looked at was one short line: $n \le 200\,000$. Two loops over 200,000 numbers means about 40 billion pair checks, and a computer does roughly a hundred million simple steps a second. That is more than six minutes against a limit of two seconds.

    That one line was not decoration. It is the setter whispering which algorithms are allowed. How much can you learn from it before writing any code?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A ladder: bigger input sizes allow only slower-growing algorithms"><g style="font-size:10px;fill:var(--ink)"><text x="14" y="28">n ≤ 10</text><text x="14" y="62">n ≤ 20</text><text x="14" y="96">n ≤ 500</text><text x="14" y="130">n ≤ 5,000</text><text x="14" y="164">n ≤ 10^6</text><text x="14" y="198">n ≤ 10^18</text></g><g style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="80" y="14" width="226" height="20" rx="4"/><rect x="80" y="48" width="190" height="20" rx="4"/><rect x="80" y="82" width="150" height="20" rx="4"/><rect x="80" y="116" width="110" height="20" rx="4"/><rect x="80" y="150" width="70" height="20" rx="4"/><rect x="80" y="184" width="30" height="20" rx="4"/></g><g style="font-size:10px;fill:var(--ink)"><text x="86" y="28">n! all orders</text><text x="86" y="62">2^n all subsets</text><text x="86" y="96">n³ triple loop</text><text x="86" y="130">n² double loop</text><text x="86" y="164">n log n sort</text><text x="86" y="198">log n</text></g><text x="14" y="228" style="font-size:10px;fill:var(--muted)">bigger input, shorter bar: less work allowed</text></svg>'
life:
  - 'A cashier counting a till of 100 notes can recount it; counting the notes of a whole bank by hand is impossible: the method has to change with the size.'
  - 'Sorting a classroom register by hand is fine; sorting every Aadhaar record needs a method that does much less work per record.'
  - 'Route planners on a phone cannot try every road combination between two cities: millions of roads force a smarter algorithm.'
  - 'An exam paper with 10 questions allows trying every order of attempting them; with 1,000 questions you must follow a rule instead.'
models:
  - name: 'Budget before plan'
    text: 'Know how much you can spend before you shop. Good engineers, cooks and travellers estimate the cost of an idea first and only then decide whether to pursue it.'
  - name: 'Reading the question setter'
    text: 'Every number in a problem was chosen for a reason. When a number looks odd (small values, a special guarantee), ask what it makes possible. The same habit helps with contracts and exam questions.'
  - name: 'Back-of-the-envelope first'
    text: 'A thirty-second estimate that rules out an idea is worth more than ten minutes of careful work on the wrong idea.'
links:
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'Both ask how the work grows as the input grows, ignoring small constants.'
    differs: 'Big-O is the language of growth; reading constraints turns it into a decision by plugging in the real maximum n and a real time budget.'
  - leaf: 'cs/searching-and-binary-search'
    name: 'Searching and binary search'
    same: 'Both avoid touching every item: 31 looks instead of 2 billion is the same trade as O(log n) instead of O(n).'
    differs: 'Binary search is one technique; the constraint table tells you whether you even need such a technique.'
  - leaf: 'cs/problem-solving-method'
    name: 'A method for any problem'
    same: 'Both begin by understanding the problem fully before choosing a plan.'
    differs: 'This lesson adds a concrete first step: read the limits and decide what complexity is allowed.'
next:
  q: 'If n is 200,000 and you must answer 200,000 questions of the form "what is the sum of the numbers from position l to r?", even O(n) per question is too slow. Is there a way to answer each in a single step?'
  leaf: 'cs/cp-prefix-sums'
  name: 'Prefix sums and difference arrays'
symbols:
  - s: 'n'
    means: 'the size of the input, such as the number of items (count)'
  - s: 'O(\cdot)'
    means: 'how the work grows with the input, ignoring constant factors'
  - s: 'n!'
    means: 'n factorial: the number of orderings of n items, n × (n-1) × ... × 1'
  - s: '2^n'
    means: 'the number of subsets of n items: each item is in or out'
  - s: '\log_2 n'
    means: 'how many times n can be halved before reaching 1 (about 20 for a million)'
  - s: '10^8'
    means: 'one hundred million, the rough number of simple steps a fast language does per second'
---

:::hook
q: A judge allows 2 seconds. Your idea checks every pair among n = 200,000 numbers. Roughly how long would it take at 100 million steps a second?
options: ["About 0.4 seconds", "About 6 minutes", "About 3 days"]
answer: 1
right: Right. There are about n²/2 = 2×10^10 pairs, which at 10^8 steps a second is 200 seconds, a few minutes. The idea is correct but needs roughly 100 times a smarter method.
wrong: Count the pairs first. For n = 200,000 that is about 2×10^10, and 10^8 steps a second means 200 seconds. Compare that with the 2 seconds allowed.
:::

## The budget {lvl=1 id=s-budget label="Foundations"}

Think of the judge as a cashier with a fixed amount of time. Every simple step (add two numbers, compare, read one array cell) costs one coin. A fast language like C++ spends about 100 million coins a second; plain Python manages around 10 million [Inference: a typical rule of thumb; real speed varies with the machine and the operation].

So the first question for any idea is not "is it correct?" but **"how many coins does it spend at the largest allowed input?"**. If the answer is more than the budget, the idea is dead, however clever.

A worked estimate. Two loops over $n = 2000$ numbers do $2000 \times 2000 = 4$ million steps: fine. The same two loops over $n = 200\,000$ do 40 billion: hopeless. The code did not change, only $n$ did. This is why the statement's limits are part of the problem.

:::qc lvl=1
q: An idea does n × n steps. With n = 10,000 and a budget of 10^8 steps, does it fit?
options: ["Yes, exactly 10^8 steps", "No, 10^10 steps", "No, 10^6 steps"]
answer: 0
right: Right. 10^4 × 10^4 = 10^8: right on the edge, fine in C++ and risky in Python.
wrong: Multiply 10^4 by 10^4. That is 10^8, equal to the budget.
:::

## The constraint table {lvl=2 id=s-table label="SDE-1"}

Turn the budget around: given the largest $n$, which growth rates fit? Here is the table that experienced contestants carry in their heads.

| Largest n | Work that fits | Typical technique |
|---|---|---|
| 8 to 11 | $n!$ or $n! \cdot n$ | try every ordering (permutations), backtracking |
| 15 to 22 | $2^n \cdot n$ | try every subset with a bitmask, bitmask DP |
| 30 to 40 | $2^{n/2}$ | meet in the middle: split in two halves |
| up to 500 | $n^3$ | triple loops: Floyd–Warshall, interval DP |
| up to 5,000 | $n^2$ | pairs, a 2D DP table, simple double loop |
| $10^5$ to $10^6$ | $n \log n$ | sort, heap, binary search, segment tree, divide and conquer |
| up to $10^7$ | $n$ | one pass, sieve, hash map, two pointers |
| up to $10^{18}$ | $\log n$ or $\sqrt n$ | maths, fast exponentiation, binary search on the answer |

```python
import math
def fits(ops, budget=10**7):           # budget 10^7 for Python
    return ops <= budget
n = 200_000
print(fits(n * n))                      # False: quadratic is far too slow
print(fits(n * math.log2(n)))           # True: about 3.5 million
```

A few extra signals sit between the rows. $n \le 20$ with a *second* small number (for example $k \le 10$) often means a bitmask over $k$, not over $n$. A grid with $n \cdot m \le 10^6$ is a "linear in cells" problem. A modulus such as 998244353 in the statement says "count something and report the answer mod p".

:::figure caption="Each row of the table is a wall: past it, the same idea stops fitting."
<svg viewBox="0 0 360 120" role="img" aria-label="Work done by n squared and n log n as n grows, with a budget line">
<line class="axis" x1="30" y1="100" x2="340" y2="100"/><line class="axis" x1="30" y1="100" x2="30" y2="10"/>
<line class="faint" x1="30" y1="40" x2="340" y2="40"/>
<text x="296" y="36" style="font-size:9px;fill:var(--muted)">budget</text>
<path class="pen" d="M30 100 C 150 98 230 80 262 40 C 276 24 284 14 290 6" style="stroke:var(--mat);fill:none"/>
<path class="pen" d="M30 100 C 150 96 250 90 335 70" style="stroke:var(--phy);fill:none"/>
<text x="232" y="20" style="font-size:9px;fill:var(--mat)">n²</text>
<text x="300" y="66" style="font-size:9px;fill:var(--phy)">n log n</text>
<text x="150" y="114" style="font-size:9px;fill:var(--muted)">input size n</text>
</svg>
:::

:::qc lvl=2
q: A statement says n ≤ 18 and asks for the best way to split n items into two groups. Which approach is intended?
options: ["Try all 2^n subsets", "Sort and take every other one", "Binary search on n"]
answer: 0
right: Right. 2^18 is about 260,000 subsets, each checked in O(n), well within the budget.
wrong: n ≤ 18 is the tell-tale size for trying every subset: 2^18 ≈ 260,000.
:::

## Python and multi-test inputs {lvl=2 id=s-python label="SDE-1"}

**Python is about ten times slower** than C++ per step, so shift every row of the table one step down: $n \le 5000$ with an $O(n^2)$ loop is roughly 25 million steps and takes a few seconds in plain Python. Three habits help: read input in one go, use built-in functions (`sum`, `sorted`, `max`) which run in C, and think twice before writing a triple loop.

```python
import sys
def main():
    data = sys.stdin.buffer.read().split()   # read everything at once
    n = int(data[0])
    a = list(map(int, data[1:1 + n]))
    print(sum(a))
main()
```

Many problems have **many test cases** in one file. The statement then usually promises *"the sum of n over all test cases does not exceed $2 \cdot 10^5$"*. That means the whole file is small, so an $O(n \log n)$ solution per test is fine. The trap: allocating an array of the *maximum* size for every test. With $t = 10^4$ tests, that is $10^4 \times 10^5 = 10^9$ steps wasted. Allocate per test, sized by that test's own $n$.

## Reading the statement for hidden structure {lvl=3 id=s-hidden label="SDE-2"}

The constraint table is the first filter. The second is to read every other number and promise in the statement as a **hint**:

- **Small values** ($a_i \le 100$, or a grid of colours): count how many of each value and work over *values* instead of positions. That can turn $n^2$ into $100^2$.
- **A product bound** ($n \cdot m \le 10^6$, or $n \cdot k \le 10^7$): a loop over both is allowed even though each alone could be large.
- **"A permutation" or "a tree"**: the data is already structured. A permutation has no duplicates and has cycles; a tree with $n$ nodes has exactly $n - 1$ edges.
- **Guarantees** ("the answer always exists", "all values are distinct"): they let you skip edge cases and sometimes make a greedy or binary search valid.
- **Time limit changes**: a limit of 4 or 5 seconds with a medium $n$ hints at $O(n\sqrt n)$ or heavy $O(n \log^2 n)$.
- **Samples**: a sample with a tiny answer for a huge allowed range often hides a formula.

The danger is *wishful reading*: assuming a guarantee the statement did not give. Re-read the exact wording before relying on a hint.

## The catalogue: problem types and what n says {lvl=3 id=s-catalogue label="SDE-2"}

Described in our own words; each maps to a row of the table.

1. **A pair that adds to a target, $n = 2\cdot10^5$.** Quadratic is dead; use a hash set in one pass or sort and two pointers. Row: $n$ or $n\log n$.
2. **Count out-of-order pairs, $n = 2\cdot10^5$.** Again no pairs; use a merge sort or a Fenwick tree. Row: $n \log n$.
3. **Choose items to fill a bag exactly, $n \le 20$.** Try all subsets with a bitmask. Row: $2^n$.
4. **Same task but $n = 40$.** $2^{40}$ is a trillion; split into two halves of 20, list the sums of each and match them. Row: meet in the middle.
5. **Shortest tour through all of 9 cities.** Try all $9! = 362{,}880$ orders. Row: $n!$.
6. **Shortest path between every pair of 400 towns.** Floyd–Warshall, three loops. Row: $n^3$.
7. **Longest repeated pattern in a string of 5,000 letters.** A 2D table of pairs of positions. Row: $n^2$.
8. **Edit distance between two words of 3,000 letters.** The classic 2D table. Row: $n^2$.
9. **List all primes up to $10^7$.** A sieve, nearly linear. Row: $n$.
10. **How many numbers up to $10^{18}$ have digit sum 20?** Loop over digits (18 of them), not numbers. Row: $\log n$.
11. **Raise something to a power $10^{18}$ mod a prime.** Repeated squaring. Row: $\log n$.
12. **Values up to $10^9$ but only $10^5$ of them, count how many distinct.** Sort, or use a set. Row: $n \log n$.
13. **Count how many students scored each mark, marks 0 to 100.** An array of 101 counters. Row: hidden small values.
14. **Grid of $1000 \times 1000$, shortest path.** BFS over $10^6$ cells. Row: $n$ (in cells).

:::qc lvl=3
q: A problem has n ≤ 10^5 and every a[i] is between 1 and 50. Which observation helps most?
options: ["Values are tiny, so count each value and work over 50 buckets", "Use recursion", "Use floating-point numbers"]
answer: 0
right: Right. A small value range is a classic hidden structure: counting arrays and DP over values.
wrong: Look at which number in the statement is unusually small. It is the value range.
:::

## Variants and bugs {lvl=3 id=s-bugs label="SDE-2"}

| Variant | Signal | Change to the template |
|---|---|---|
| Extra small parameter | $n$ big, $k \le 10$ or 20 | The exponent or table is over $k$, not $n$ |
| Many tests | "sum of $n$ over tests" | Per-test allocation, shared total budget |
| Product bound | $n \cdot m \le 10^6$ | One loop over all $n\cdot m$ cells |
| Queries | $q$ large too | Per-query cost must be $O(\log n)$ or $O(1)$: precompute |
| Modular answer | "mod $10^9+7$" | Counting or DP; reduce after each multiplication |
| Python | any constraint near the edge | Move one row down; use built-ins and fast input |

**Common bugs**
- Estimating with the *typical* $n$ instead of the maximum.
- Forgetting the second dimension: $n$ items and $q$ queries of cost $O(n)$ each is $n \cdot q$.
- Ignoring hidden constants: sorting a list of lists, string slicing in a loop (each slice costs its length) and `x in some_list` (a scan) look cheap and are not.
- Using $n^2$ memory at $n = 5000$: 25 million cells is heavy in Python; keep two rows instead.
- Reading input line by line with `input()` for $10^6$ numbers.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A judge gives you a budget: about 10^8 simple steps a second in C++, about 10^7 in Python. {lvl=1}
2. Estimate the steps of an idea at the largest n before coding it. {lvl=1}
3. n ≤ 10 means orderings, ≤ 20 subsets, ≤ 500 cubic, ≤ 5000 quadratic, ≥ 10^5 near-linear, 10^18 logarithmic. {lvl=2}
4. Python is about ten times slower: shift down a row and read input fast. {lvl=2}
5. In multi-test inputs the sum of n is bounded; allocate per test, not at maximum size. {lvl=2}
6. Small values, product bounds and guarantees are hints toward the intended trick. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A correct idea that is too slow scores zero: check complexity before coding. {lvl=1}
- Do not trust the samples for speed: they are tiny on purpose. {lvl=1}
- `x in list`, string concatenation in a loop and slicing hide extra factors of $n$. {lvl=2}
- Allocating a maximum-size array for each of $10^4$ tests turns a small input into a billion steps. {lvl=2}
- Do not assume a guarantee that the statement did not give. {lvl=3}
:::
