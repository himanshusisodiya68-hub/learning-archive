---
title: Modular arithmetic, sieves and combinatorics
summary: Why contest answers end with "modulo a billion and seven", and the handful of number tricks that solve a whole family of problems.
ncert: []
up_to: SDE-3
builds_on: [Reading constraints, Big-O and growth of cost, Primes and factorisation, HCF and LCM]
notes_prompt: Explain to a friend why a computer can find the last digit of 7 to the power 2026 without ever writing the number down.
margin:
  - kind: history
    title: History
    text: Euclid described his gcd method around 300 BCE, which makes it one of the oldest algorithms still in daily use. Eratosthenes' sieve is about as old. [Unverified]
  - kind: tip
    title: Why 10^9+7
    text: 'It is a prime below 2^30, so sums fit in a 32-bit integer and every non-zero number has an inverse. Contest setters picked it for those two reasons, and it stuck.'
  - kind: olympiad
    title: Maths link
    text: 'Fermat''s little theorem, the engine behind modular inverses here, is proved in the maths pillar. The same remainder thinking solves many olympiad problems.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 31 Number-Theoretic Algorithms [Unverified]" }
  - { title: "A. Laaksonen, Competitive Programmer's Handbook", ref: "Number theory chapter [Unverified]" }
cards:
  - { front: "Why do contests say 'answer modulo 1000000007'?", back: "The true answer can have thousands of digits. Taking remainders after every add and multiply keeps every number small, and the final remainder is still a well-defined answer." }
  - { front: "Which operations can you do on remainders directly?", back: "Add, subtract and multiply: (a op b) mod m equals ((a mod m) op (b mod m)) mod m. Division is the exception and needs a modular inverse." }
  - { front: "How does Euclid's algorithm find gcd(a, b)?", back: "Replace (a, b) by (b, a mod b) until b is 0. The gcd does not change at each step, and the numbers shrink fast: O(log n) steps." }
  - { front: "How do you compute a to the power e modulo m fast?", back: "Square repeatedly and multiply in the squares that match the 1-bits of e: O(log e) multiplications. In Python, pow(a, e, m)." }
  - { front: "How do you divide modulo a prime p?", back: "Multiply by the inverse: a / b is a times b to the power p minus 2, mod p (Fermat). In Python, pow(b, p - 2, p)." }
  - { front: "How do you get nCr mod p for many queries?", back: "Precompute factorials and inverse factorials up to n once; then each query is three lookups and two multiplications." }
core:
  idea: 'Number problems stay small when you keep only remainders: add, subtract and multiply commute with taking the remainder, division becomes multiplication by an inverse, and a sieve or gcd replaces searching for factors one by one.'
  formulas:
    - tex: '(a \cdot b) \bmod m = \big((a \bmod m)(b \bmod m)\big) \bmod m'
      label: 'Reduce early, reduce often'
    - tex: '\gcd(a, b) = \gcd(b,\; a \bmod b)'
      label: 'Euclid: shrink the pair until one is 0'
    - tex: 'b^{-1} \equiv b^{\,p-2} \pmod p'
      label: 'Inverse modulo a prime p (Fermat)'
  conditions:
    - 'Remainder tricks apply to add, subtract and multiply for any modulus m'
    - 'The Fermat inverse needs p prime and b not a multiple of p'
    - 'A sieve of size n costs memory about n, so it fits only when n is up to about 10^7 in Python'
    - 'The inverse of b exists modulo m exactly when gcd(b, m) = 1'
  sign: 'The commonest bug: a subtraction giving a negative remainder in languages like C++ (Python is safe), and forgetting to reduce after a multiply so a number overflows or crawls.'
outcomes:
  - 'Compute last digits and remainders of enormous numbers without writing them down'
  - 'Write gcd, a sieve and fast power from memory, with their costs'
  - 'Divide under a prime modulus using the inverse, and build an nCr table'
  - 'Count divisors and factorise many numbers with a smallest-prime-factor sieve'
  - 'Recognise when parity or an invariant proves an answer without any computation'
opener:
  story: |
    Open any contest problem about counting and you will find the same last line: **"print the answer modulo 1000000007"**. Why would a problem setter ask for such a strange thing?

    Because the real answer is often absurd. The number of ways to arrange 100 books on a shelf has 158 digits. No variable holds that, and nobody wants to print it. So the setter asks only for the **remainder** after dividing by a fixed big number, which is always small and still proves you got everything right.

    That one decision opens a small, beautiful toolbox: remainders, gcd, sieves, fast powers, inverses. Try its power on a quick puzzle: what is the last digit of 7 multiplied by itself 2026 times?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Seven numbers on a ring: adding past 6 wraps round to 0"><circle cx="160" cy="105" r="68" style="fill:none;stroke:var(--rule);stroke-dasharray:3 4"/><circle cx="160" cy="37" r="13" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="156" y="41" style="font-size:12px;fill:var(--ink)">0</text><circle cx="213" cy="63" r="13" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="209" y="67" style="font-size:12px;fill:var(--ink)">1</text><circle cx="226" cy="120" r="13" style="fill:var(--c)"/><text x="222" y="124" style="font-size:12px;fill:var(--surface)">2</text><circle cx="190" cy="166" r="13" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="186" y="170" style="font-size:12px;fill:var(--ink)">3</text><circle cx="130" cy="166" r="13" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="126" y="170" style="font-size:12px;fill:var(--ink)">4</text><circle cx="94" cy="120" r="13" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="90" y="124" style="font-size:12px;fill:var(--ink)">5</text><circle cx="107" cy="63" r="13" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="103" y="67" style="font-size:12px;fill:var(--ink)">6</text><text x="126" y="102" style="font-size:12px;fill:var(--ink)">5 + 4 = 9</text><text x="126" y="118" style="font-size:12px;fill:var(--c)">lands on 2</text><text x="76" y="212" style="font-size:11px;fill:var(--muted)">mod 7: walk round the ring, keep the landing spot</text></svg>'
life:
  - 'A clock is arithmetic modulo 12 (or 24): 9 o''clock plus 5 hours is 2 o''clock, not 14.'
  - 'Check digits on ISBN barcodes, bank account numbers and Aadhaar-style ID numbers are remainders, so a mistyped digit is caught.'
  - 'Days of the week repeat every 7: knowing today is Sunday, you find the day 100 days later from 100 mod 7.'
  - 'Cryptography (RSA, the lock behind online payments) is modular arithmetic on enormous numbers, using exactly fast power and gcd.'
  - 'Hash tables fold a big number into a slot with a remainder; round-robin schedules and circular buffers use the same wrap-around.'
models:
  - name: 'Work in a smaller world'
    text: 'If you only care about a coarse property of a result (its last digit, its parity, its remainder), you can do the whole calculation in the coarse world. Ask what part of the answer you truly need before computing all of it.'
  - name: 'Reuse the previous step'
    text: 'Euclid, the sieve and the factorial table all win by never redoing work: each step feeds on the one before. Precompute once, answer many.'
  - name: 'Find the quantity that cannot change'
    text: 'Parity arguments prove impossibility by naming something no allowed move can alter. The same habit finds safety conditions in system design and fairness rules in games.'
links:
  - leaf: 'mat/modular-arithmetic'
    name: 'Modular arithmetic (maths)'
    same: 'The same congruence rules: remainders respect addition and multiplication, and cycles of powers repeat.'
    differs: 'The maths lesson proves why; here you care about doing it in O(log n) steps on numbers with a billion digits.'
  - leaf: 'mat/hcf-and-lcm'
    name: 'HCF and LCM (maths)'
    same: 'gcd is the HCF; lcm(a, b) = a times b divided by the gcd.'
    differs: 'School finds the HCF by prime factorisation; Euclid finds it without factorising, which is far faster for big numbers.'
  - leaf: 'mat/permutations-and-combinations'
    name: 'Permutations and combinations (maths)'
    same: 'nCr is exactly the binomial coefficient counted in the maths lesson.'
    differs: 'Here the numbers are huge, so we compute nCr under a modulus using factorial and inverse tables.'
  - leaf: 'cs/bits-and-binary'
    name: 'Bits and binary'
    same: 'Fast power reads the exponent bit by bit, and parity is the lowest bit.'
    differs: 'Bits lesson is about representation; here the bits steer an algorithm.'
next:
  q: 'You can now reduce any counting answer to a small remainder. But a string of ten million letters is a different beast: how do you test "does this word appear inside that text" without comparing letter by letter at every position?'
  leaf: 'cs/cp-strings'
  name: 'String hashing, KMP and Z'
symbols:
  - s: 'a \bmod m'
    means: 'remainder when a is divided by m, always between 0 and m - 1'
  - s: 'a \equiv b \pmod m'
    means: 'a and b leave the same remainder when divided by m'
  - s: '\gcd(a,b)'
    means: 'greatest common divisor: the largest whole number dividing both a and b'
  - s: 'p'
    means: 'a prime modulus such as 10^9 + 7 (count, no unit)'
  - s: 'b^{-1}'
    means: 'the inverse of b: the number that gives remainder 1 when multiplied by b, modulo m'
  - s: '\binom{n}{r}'
    means: 'nCr: the number of ways to choose r items from n, order ignored'
  - s: 'O(\log n)'
    means: 'cost grows with the number of digits of n, not with n itself'
---

:::hook
q: Here is the puzzle. What is the last digit of 7 multiplied by itself 2026 times (7 to the power 2026)?
options: ["1", "7", "9"]
answer: 2
right: Right, 9. The last digit of powers of 7 runs 7, 9, 3, 1, 7, 9, 3, 1 and repeats every 4 steps. Since 2026 leaves remainder 2 when divided by 4, you land on the second entry, 9. You never wrote the huge number down.
wrong: Write the first few powers of 7 and look only at their last digits: 7, 49, 343, 2401... The last digits form a short cycle. Where in the cycle does step 2026 fall?
:::

## Why remainders save you {lvl=1 id=s-remainders label="Foundations"}

Think of an odometer that shows only the last three digits. Add 700 km to a reading of 500 and it shows 200, because the thousands vanish. Yet the last three digits of the true total are exactly what the odometer shows. Dropping the thousands at every step never spoils the final last three digits. That is the whole idea of **modular arithmetic**: "$a \bmod m$" means the remainder of $a$ when divided by $m$, a number from $0$ to $m-1$.

The rule that makes it useful:

$$(a \cdot b) \bmod m = \big((a \bmod m)(b \bmod m)\big) \bmod m$$

Read it as: multiply the small remainders instead of the big numbers, then take the remainder once more. The same holds for adding and subtracting. So a loop that multiplies a hundred numbers never has to hold a number bigger than $m^2$.

```python
MOD = 10**9 + 7
ways = 1
for i in range(1, 101):        # 100! modulo MOD
    ways = ways * i % MOD      # reduce after every multiply
print(ways)
```

For the hook: the last digit of a number is its remainder mod 10. Powers of 7 mod 10 cycle through 7, 9, 3, 1, so the exponent only matters mod 4.

:::qc lvl=1
q: What is (38 + 49) mod 10, found using the remainders 8 and 9 only?
options: ["7", "17", "87"]
answer: 0
right: Right. 8 + 9 = 17, and 17 mod 10 = 7. A remainder is always smaller than the modulus.
wrong: Add the remainders 8 and 9, then take the remainder again.
:::

:::figure caption="Which operations survive taking remainders"
<svg viewBox="0 0 320 120" role="img" aria-label="Add, subtract and multiply are safe on remainders; division needs an inverse">
<g style="font-size:12px;fill:var(--ink)">
<rect x="8" y="14" width="96" height="40" rx="6" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="22" y="38">a + b  safe</text>
<rect x="112" y="14" width="96" height="40" rx="6" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="126" y="38">a − b  safe</text>
<rect x="216" y="14" width="96" height="40" rx="6" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="230" y="38">a × b  safe</text>
<rect x="60" y="68" width="200" height="40" rx="6" style="fill:none;stroke:var(--bad);stroke-dasharray:4 3"/><text x="74" y="92">a ÷ b  needs an inverse</text>
</g></svg>
:::

## gcd and lcm {lvl=1 id=s-gcd label="Foundations"}

How do you cut a 1071 cm by 462 cm floor into the biggest possible square tiles with no waste? The tile side is the **greatest common divisor**, gcd. Euclid's trick avoids factorising: any common divisor of $a$ and $b$ also divides $a \bmod b$, so

$$\gcd(a, b) = \gcd(b,\; a \bmod b)$$

Read it as: replace the pair by (smaller, remainder) and repeat until the remainder is 0; the last non-zero number is the answer. The numbers shrink fast, so the cost is $O(\log n)$ steps.

```python
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return a // gcd(a, b) * b      # divide first to avoid a huge product
```

For 1071 and 462: (1071, 462), (462, 147), (147, 21), (21, 0), so the gcd is 21. Python has `math.gcd` and `math.lcm` built in. The gcd of a whole list is a running gcd, and the lcm is the same with `lcm`.

:::qc lvl=1
q: A cyclist laps in 12 min and another in 18 min. They start together. After how many minutes do they next meet at the start?
options: ["6", "36", "216"]
answer: 1
right: Right. lcm(12, 18) = 12 times 18 divided by gcd 6 = 36.
wrong: They meet again at the first time that is a multiple of both lap times: the lcm, not the gcd.
:::

## Sieve of Eratosthenes {lvl=2 id=s-sieve label="SDE-1"}

To list all primes up to $n$, do not test each number. Cross out multiples instead. Start at 2: it survives, so cross out 4, 6, 8... The next survivor, 3, is prime: cross out 6, 9, 12... Any number still standing when you reach $\sqrt n$ is prime. The cost is about $n \log\log n$, nearly linear.

```python
from math import isqrt
def sieve(n):
    is_p = bytearray([1]) * (n + 1)
    is_p[0:2] = b"\x00\x00"
    for i in range(2, isqrt(n) + 1):
        if is_p[i]:
            is_p[i*i::i] = bytearray(len(range(i*i, n + 1, i)))
    return [i for i in range(n + 1) if is_p[i]]
```

Start crossing at $i^2$, because smaller multiples of $i$ were already crossed by smaller primes. There are 25 primes up to 100.

To **factorise many numbers**, store for each number its smallest prime factor (spf). Then repeated lookups split any $x$ up to $n$ in $O(\log x)$.

```python
def spf_sieve(n):
    spf = list(range(n + 1))
    for i in range(2, isqrt(n) + 1):
        if spf[i] == i:                      # i is prime
            for j in range(i*i, n + 1, i):
                if spf[j] == j: spf[j] = i
    return spf

def factor(x, spf):
    f = {}
    while x > 1:
        f[spf[x]] = f.get(spf[x], 0) + 1; x //= spf[x]
    return f
```

:::qc lvl=2
q: You must factorise 200,000 different numbers, each up to 10^6. Which is better?
options: ["Trial division for each number", "One spf sieve up to 10^6, then lookups", "Check each number against all primes below it"]
answer: 1
right: Right. Trial division costs up to 1,000 steps each (200 million total); the sieve costs one pass then about 20 steps per number.
wrong: Look for a method that does shared work once and then answers each query quickly.
:::

## Fast power and the inverse {lvl=2 id=s-power label="SDE-1"}

Computing $a^e$ by multiplying $e$ times is hopeless when $e$ is $10^{18}$. But $a^{10} = (a^5)^2$ and $a^5 = a \cdot (a^2)^2$: square to halve the exponent, multiply in a spare $a$ when the exponent is odd. About $\log_2 e$ steps (60 for $10^{18}$).

```python
def power(a, e, m):
    r, a = 1, a % m
    while e:
        if e & 1:            # this bit of e is 1
            r = r * a % m
        a = a * a % m        # a, a^2, a^4, a^8, ...
        e >>= 1
    return r
```

Python's own `pow(a, e, m)` does the same, faster. Now division. You cannot divide remainders. But $b^{-1}$, the **inverse**, is the number with $b \cdot b^{-1} \equiv 1 \pmod m$, and dividing by $b$ means multiplying by it. When $m = p$ is prime, **Fermat's little theorem** says $b^{p-1} \equiv 1$, so

$$b^{-1} \equiv b^{\,p-2} \pmod p$$

Read it as: the inverse of $b$ is $b$ raised to the power $p-2$. So "$a/b$ mod $p$" is `a * pow(b, p-2, p) % p`. In Python 3.8+, `pow(b, -1, m)` works for any modulus where the inverse exists.

:::qc lvl=2
q: Compute 3 divided by 2 modulo 7.
options: ["5", "1.5", "4"]
answer: 0
right: Right. The inverse of 2 mod 7 is 4 (since 2 times 4 = 8, which is 1 mod 7), and 3 times 4 = 12, which is 5 mod 7. Check: 5 times 2 = 10, which is 3 mod 7.
wrong: Find the number x with 2x leaving remainder 1 mod 7, then multiply 3 by x.
:::

## Divisors {lvl=2 id=s-divisors label="SDE-1"}

Divisors come in pairs ($d$ and $n/d$), so one of them is at most $\sqrt n$. Loop $i$ up to $\sqrt n$ and collect both. From the prime factorisation $n = p_1^{e_1} p_2^{e_2}\cdots$, the number of divisors is $(e_1+1)(e_2+1)\cdots$, because each prime's exponent can be chosen from 0 to $e_i$ independently. For $720720 = 2^4 \cdot 3^2 \cdot 5 \cdot 7 \cdot 11 \cdot 13$ that is $5\cdot3\cdot2\cdot2\cdot2\cdot2 = 240$.

To get the divisor lists of **all** numbers up to $n$, flip the loop: for each $d$, append it to every multiple of $d$. The work is $n/1 + n/2 + n/3 + \dots \approx n \ln n$, which is fine up to about $10^6$.

## Counting under a modulus: nCr {lvl=3 id=s-ncr label="SDE-2"}

The count of ways to choose $r$ of $n$ is $\binom{n}{r} = \frac{n!}{r!\,(n-r)!}$. Read it as: arrange all $n$, then ignore the order inside the chosen and unchosen groups. The factorials are astronomically large, but we only want the answer modulo $p$, and the division becomes inverses. Precompute once:

```python
N, MOD = 10**6, 10**9 + 7
fact = [1] * (N + 1)
for i in range(1, N + 1):
    fact[i] = fact[i-1] * i % MOD
inv = [1] * (N + 1)
inv[N] = pow(fact[N], MOD - 2, MOD)        # one expensive inverse
for i in range(N, 0, -1):
    inv[i-1] = inv[i] * i % MOD            # then walk down cheaply

def ncr(n, r):
    return 0 if r < 0 or r > n else fact[n] * inv[r] % MOD * inv[n-r] % MOD
```

Only one modular power is needed, because $(i-1)!^{-1} = i!^{-1} \cdot i$. After that, each query is $O(1)$. This requires $n < p$; if $n$ can reach $p$, see the SDE-3 section.

## Parity and invariants {lvl=3 id=s-parity label="SDE-2"}

Some problems have no algorithm, just a reason. If every allowed move leaves some quantity unchanged mod 2 (or mod anything), then any target with a different value is **impossible**. Typical shapes: "can we reach this state?", "can the last number be zero?", a chessboard colouring, or a swap game. The XOR of a list is the parity trick for bits: pairs cancel, so the lone unpaired number remains.

```python
def lone(nums):          # every number appears twice except one
    x = 0
    for v in nums: x ^= v
    return x
```

## Variants: one table {lvl=3 id=s-variants label="SDE-2"}

| Variant | Signal in the statement | Change to the template |
|---|---|---|
| Last digits, huge power | "power", "last k digits", exponent up to 10^18 | `pow(a, e, 10**k)`; or find the cycle |
| Count under a modulus | "modulo 1000000007", counts that explode | Reduce after every `*` and `+` |
| Divide under a modulus | a fraction in a formula, "probability as p/q" | Multiply by `pow(q, MOD-2, MOD)` |
| Many nCr queries | n up to 10^6, q up to 10^5 | Factorial and inverse-factorial tables |
| Many factorisations | many numbers up to 10^6 or 10^7 | spf sieve once |
| All primes up to n | n up to 10^7 | Plain sieve, start crossing at i squared |
| gcd or lcm of a list | "common divisor", "meet again", "tile" | Running gcd; lcm as a divided by gcd times b |
| Divisor counts or sums | "number of divisors", all numbers up to n | Exponent product, or the n ln n multiples loop |
| Impossible by parity | "can we reach", "can it be zero" | Find the invariant, no code needed |

## Catalogue: twelve problem types {lvl=3 id=s-catalogue label="SDE-2"}

Described in our own words, each mapped to a variant.

1. A power of a number, last digit asked: cycle or `pow` mod 10.
2. The count of arrangements of up to a million items, modulo a prime: factorial table.
3. Probability of an event as a fraction, printed as one residue: inverse of the denominator.
4. Many "how many ways to pick r from n" queries: nCr tables.
5. How many numbers up to a million share no factor with a given number: inclusion–exclusion over its primes, or gcd count.
6. Split a rectangle into the fewest equal squares: gcd of the sides.
7. Several events with different periods, when do they coincide: lcm of the periods.
8. Is a given number prime (small and many queries): sieve lookup.
9. Smallest number with exactly k divisors: exponent product, choose small primes with large exponents first.
10. Sum of gcd(i, n) over i: group by divisors of n, phi values.
11. A sequence game with swaps or pair removals, can the end state be reached: parity invariant.
12. Which number is unpaired in a list of pairs: XOR.

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- Computing `a * b` in a language with 64-bit integers without reducing first: overflow. (Python never overflows but gets slow on giant integers.)
- Writing `(a - b) % m` in C++ or Java: can be negative. Use `((a - b) % m + m) % m`.
- Using `pow(b, MOD-2, MOD)` when `b` is 0 mod `MOD`: no inverse exists.
- `lcm = a * b // gcd` can overflow before dividing: divide first.
- A sieve that allocates `n + 1` entries but indexes `n + 2`: off by one.
- Using Fermat's inverse with a non-prime modulus: silently wrong.
- Forgetting that factorial tables must reach the largest `n` in any query.

## When the modulus is awkward {lvl=4 id=s-awkward label="SDE-3"}

- **Modulus not prime**: Fermat fails. The inverse of $b$ exists only if $\gcd(b, m) = 1$ and comes from the **extended Euclid** algorithm, which also returns $x, y$ with $bx + my = \gcd$. Python's `pow(b, -1, m)` does it and raises an error if there is no inverse.
- **n at least p** in nCr: factorials contain a multiple of $p$ and are 0. **Lucas' theorem** writes $n$ and $r$ in base $p$ and multiplies the nCr of matching digits.
- **Combining moduli**: the Chinese remainder theorem merges answers mod $m_1$ and mod $m_2$ (coprime) into one mod $m_1 m_2$.
- **Primality of one huge number**: the Miller–Rabin test, repeated with a few bases, is the standard fast check; deterministic base sets exist for 64-bit inputs [Unverified: exact sets].
- **Euler's phi** (count of numbers up to $n$ coprime to $n$) is computed from the factorisation, or for all $n$ by a sieve; $a^{\varphi(m)} \equiv 1 \pmod m$ generalises Fermat.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Add, subtract and multiply commute with taking remainders; reduce after every step so numbers stay small. {lvl=1}
2. Euclid's gcd shrinks (a, b) to (b, a mod b) and takes O(log n) steps; lcm is a divided by gcd, times b. {lvl=1}
3. A sieve crosses out multiples instead of testing divisors; an spf sieve factorises fast. {lvl=2}
4. Fast power squares the base and halves the exponent: O(log e). {lvl=2}
5. Division modulo a prime is multiplication by b to the power p minus 2. {lvl=2}
6. nCr mod p: factorial and inverse-factorial tables, then O(1) per query. {lvl=3}
7. Parity and invariants prove impossibility with no search. {lvl=3}
8. Composite moduli need extended Euclid; n at least p needs Lucas. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never divide a remainder: multiply by an inverse, and check the modulus is prime or gcd is 1. {lvl=2}
- Reduce after every multiply; in fixed-width languages a single missing `% MOD` overflows. {lvl=2}
- Test small cases against brute force; number-theory bugs hide in edge values like 0, 1 and p. {lvl=2}
- A sieve beyond about 10^7 in Python is too slow or too large; use `bytearray` and slice assignment. {lvl=3}
- Symmetric problems ("pairs", "swaps", "colourings") often hide an invariant: look for it before coding. {lvl=3}
:::
