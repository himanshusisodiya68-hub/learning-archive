# Zeitz, number theory and proof by contradiction: reading notes

For leaves `mat/fundamental-theorem-of-arithmetic` and `mat/irrational-numbers`.

## Source and what was read

- **Paul Zeitz, The Art and Craft of Problem Solving, 2nd edition** (Wiley, copyright 2007), the owner's copy (Drive PDF, text extracted with `pdftotext`).
- Page mapping: pdf page = book page + 17. Page images of the problem pages were checked against the text layer; the problem texts below follow the printed page.
- **Read:** §7.1 Primes and Divisibility (book pp. 222–229, problems 7.1.1–7.1.33); §2.3 Methods of Argument, the argument-by-contradiction part (pp. 39–44, Examples 2.3.1–2.3.4) plus the irrationality exercises 2.3.12–2.3.18 (pp. 50–51). Nothing else.
- Numbering: Zeitz numbers inline facts, examples and exercises in one running sequence per section (7.1.1 to 7.1.33; 7.1.2, 7.1.7 and 7.1.8 are worked examples, the rest facts or exercises). Cite as "Zeitz 7.1.n".

## Order of ideas (§7.1) and key insights

- Divisibility: $b \mid a$ means $a = bm$ for an integer $m$. Prime means only divisors $1$ and itself; 1 is neither prime nor composite.
- Infinitely many primes (Euclid): assume a finite list, form product plus one, find a prime factor that is not on the list. Zeitz flags the gap: "every $n > 1$ has a prime factor" needs proof (7.1.1, strong induction).
- **Existence versus uniqueness.** Factorisation into primes always exists; the Fundamental Theorem of Arithmetic (FTA) says it is unique up to order. Zeitz's point: "obvious" is not a proof. Even uniqueness is used silently in claims like "$5x = 3y$ implies $3 \mid x$".
- **Why FTA has content (Example 7.1.2).** In the even integers $E$, the "primes" are $2, 6, 10, 30, \dots$ and $60 = 2 \cdot 30 = 6 \cdot 10$. So $2x = 10y$ does not force $10 \mid x$. Unique factorisation depends on properties of $\mathbb{Z}$ (the division algorithm), and fails in some systems (see also 7.1.14, $a + b\sqrt{-6}$).
- GCD and LCM: $(a,b)$ and $[a,b]$; coprime means $(a,b) = 1$ (written $a \perp b$). Facts to verify (7.1.3): coprime means no shared prime; GCD takes the minimum exponents and LCM the maximum; $(a,b)[a,b] = ab$; a common divisor divides every integer linear combination $ax + by$; consecutive integers are coprime; $ax + by = 1$ forces $a \perp b$.
- **Division algorithm (7.1.4):** $b = qa + r$ with $0 \le r < a$. Proof by the extreme principle (least non-negative remainder). It fails in $E$, which is the missing ingredient there.
- **GCD is the smallest positive linear combination (7.1.5).** Proof: let $u$ be that smallest value; the division algorithm shows $u$ divides both numbers, so $u \le g$; also $g \mid u$. This computes the GCD without prime factorisation, so FTA is not needed.
- **Euclid's lemma (7.1.6):** if $p$ prime and $p \mid ab$ then $p \mid a$ or $p \mid b$. Proof: if $p \nmid a$, then $px + ay = 1$; multiply by $b$. This is the real key to uniqueness.
- **FTA proof idea:** with Euclid's lemma, no prime outside the factorisation can divide $n$, and equal-prime powers cancel until a prime power equals 1 (shown on $2^3 \cdot 7^6 = 2^8 \cdot 7^3$). Chain of dependence: well-ordering, then division algorithm, then Euclid's lemma, then FTA.
- Euclidean algorithm and linear Diophantine equations are in 7.1.12 and 7.1.13 (run the algorithm backwards to find $x, y$; all solutions differ by multiples of $b/g$ and $a/g$).
- Tactic: "assume the variables are prime or at least coprime; the general case often follows with few technical details".

## Order of ideas (§2.3, proof by contradiction)

- Assume the negation and derive an absurdity. Best for impossibility statements ("cannot happen").
- **Test before using it:** negate the conclusion and ask whether the negation gives something easy to work with ("a glass wall versus footholds").
- Related vocabulary Zeitz sets up: contrapositive (not Q implies not P) is equivalent to the statement; the converse is not. WLOG must really cover the general case.

## Worked examples in the sections read (summarised, not copied)

- **Zeitz 7.1.7** (p. 226): a monic integer polynomial with a rational zero $u/v$ in lowest terms has $v = \pm 1$, because $u^n$ is then a multiple of $v$ while $u$ and $v$ share no factor.
- **Zeitz 7.1.8** (AIME 1985, p. 227): $\gcd(100 + n^2, 100 + (n+1)^2)$ is at most $401$. The GCD divides a linear combination of the two terms that eliminates $n$, giving $4u + 1$; it is attained at $n = 200$ (from the earlier sequence $a_{2u}, a_{2u+1}$).
- **Zeitz 2.3.1** (pp. 41–42): $b^2 + b + 1 = a^2$ has no positive integer solutions; by contradiction, factor $a^2 - b^2 = b + 1$ and compare sizes. Alternative: $b^2 < b^2 + b + 1 < (b+1)^2$.
- **Zeitz 2.3.2** (p. 42): $\sqrt{2}$ is irrational. Take $\sqrt{2} = a/b$ with $b$ as small as possible (extreme principle), then $a^2 = 2b^2$ makes $a$ even, then $b$ even, contradicting minimality. The "lowest terms" step is justified by minimality, not assumed.
- **Zeitz 2.3.3** (Greece 1995, pp. 42–43): contradiction used on a "positive" claim; assume $Q(x) = ax^4 + bx^3 + cx^2 + dx + e > 0$ for all $x$, use identity $Q(x) = P(x^2) + (x-1)(bx^2 + d)$ at $x = \pm\sqrt{y}$.
- **Zeitz 2.3.4** (p. 44): nonzero residues mod prime $p$ have unique inverses; if $ux \equiv vx$ then $p \mid (u-v)x$, impossible for a prime.
- **Zeitz 5.4.4 and 5.4.5** (p. 171, from the polynomial section): rational-root theorem gives another proof that $\sqrt{2}$ is irrational (rational zeros of $x^2 - 2$ would have to be $\pm 1, \pm 2$). A monic integer polynomial's rational zero must be an integer, so a non-integer zero of a monic polynomial is irrational (used for a sum of square roots, 5.4.5).

## Problems to use (copied word for word)

Text copied from the printed pages (symbols retyped in TeX). Difficulty is my own rating, 1 (Class 10 can try) to 5 (hard olympiad). Solutions are not copied.

### Leaf mat/fundamental-theorem-of-arithmetic

1. **Zeitz 7.1.1**, p. 223. "There is a tiny gap in our proof above. We made the blithe statement that $Q$ had to have at least one prime factor. Why is this true? More generally, prove that every natural number greater than 1 can be factored completely into primes. For example, $360 = 2^3 \cdot 3^2 \cdot 5$. Suggestion: use strong induction, if you want to be formal."
   Note: existence half of FTA, strong induction. Difficulty 1–2.
2. **Zeitz 7.1.11**, p. 228. "Prove that the fraction $(n^3 + 2n)/(n^4 + 3n^2 + 1)$ is in lowest terms for every positive integer $n$."
   Note: show a common divisor divides 1 by building a linear combination (7.1.3(d)). Difficulty 2.
3. **Zeitz 7.1.14**, pp. 228–229. "Consider the set $F := \{a + b\sqrt{-6},\ a, b \in \mathbb{Z}\}$. Define the **norm** function $N$ by $N(a + b\sqrt{-6}) = a^2 + 6b^2$. This is a "natural" definition; it is just the square of the magnitude of the complex number $a + bi\sqrt{6}$, and it is a useful thing to play around with, because its values are integers. (a) Show that the "norm of the product is equal to the product of the norms"; i.e., if $\alpha, \beta \in F$, then $N(\alpha\beta) = N(\alpha)N(\beta)$. (b) Observe that if $\alpha \in F$ is not an integer (i.e., if it has a non-zero imaginary part), then $N(\alpha) \ge 6$. (c) An $F$-prime is an element of $F$ that has no factors in $F$ other than 1 and itself. Show that 2 and 5 are $F$-primes. (d) Show that 7 and 31 are not $F$-primes. (e) Likewise, show that $2 - \sqrt{-6}$ and $2 + \sqrt{-6}$ are $F$-primes. (f) Conclude that $F$ does not possess unique factorization."
   Note: shows a system where $10 = 2 \cdot 5 = (2 - \sqrt{-6})(2 + \sqrt{-6})$; the norm is the tool. Needs complex numbers. Difficulty 3.
4. **Zeitz 7.1.15**, p. 229. "Prove that consecutive Fibonacci numbers are always relatively prime."
   Note: induction plus gcd of $F_{n+1} = F_n + F_{n-1}$. Difficulty 2.
5. **Zeitz 7.1.19**, p. 229. "Is it possible for four consecutive integers to be composite? How about five? More than five? Arbitrarily many?"
   Note: factorial trick $(n+1)! + k$; Class 10 can do it. Difficulty 1–2.
6. **Zeitz 7.1.20**, p. 229. "Show that $1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n}$ can never be an integer."
   Note: look at the highest power of 2 at most $n$, which divides exactly one denominator. Classic. Difficulty 3.
7. **Zeitz 7.1.22**, p. 229. "Show that 1000! ends with 249 zeros. Generalize!"
   Note: count the prime 5 (and 2) in the prime-power factorisation. Difficulty 1–2.
8. **Zeitz 7.1.26**, p. 229. "Prove that there are infinitely many primes of the form $6n - 1$."
   Note: Euclid's argument with $Q = 6p_1 p_2 \cdots p_N - 1$; a number $\equiv 5 \pmod 6$ cannot have all its prime factors $\equiv 1 \pmod 6$ (and none is 2 or 3). Difficulty 3.
9. **Zeitz 7.1.28**, p. 229 (Bay Area Mathematical Olympiad 2000). "Prove that any integer greater than or equal to 7 can be written as a sum of two relatively prime integers, both greater than 1. For example, 22 and 15 are relatively prime, and thus $37 = 22 + 15$ represents the number 37 in the desired way."
   Note: split by $n$ odd, $n \equiv 2$ or $0 \pmod 4$ using $(a, a+1)$ coprime and $(a, n-a)$ gcd divides $n$. Difficulty 2–3.
10. **Zeitz 7.1.32**, p. 229 (Russia 1995). "The sequence $a_1, a_2, \dots$ of natural numbers satisfies $\mathrm{GCD}(a_i, a_j) = \mathrm{GCD}(i, j)$ for all $i \ne j$. Prove that $a_i = i$ for all $i$."
    Note: show $i \mid a_i$ and $a_i \mid i$ by comparing gcds with several $j$. Difficulty 4.

### Leaf mat/irrational-numbers

1. **Zeitz 2.3.12**, pp. 50–51. "Make sure you understand Example 2.3.2 perfectly by doing the following exercises. (a) Prove that $\sqrt{3}$ is irrational. (b) Prove that $\sqrt{6}$ is irrational. (c) If you attempt to prove $\sqrt{49}$ is irrational by using the same argument as before, where does the argument break down?"
   Note: exactly Class 10 NCERT level, with (c) forcing the role of primality (Euclid's lemma). Difficulty 1.
2. **Zeitz 2.3.14**, p. 50. "Prove that $\log_{10} 2$ is irrational."
   Note: $10^{a/b} = 2$ gives $10^a = 2^b$, so $2^a 5^a = 2^b$; FTA (a 5 cannot appear). Difficulty 2.
3. **Zeitz 2.3.15**, p. 50. "Prove that $\sqrt{2} + \sqrt{3}$ is irrational."
   Note: assume rational, square and isolate a radical. Difficulty 2.
4. **Zeitz 2.3.17**, p. 51. "Prove that if $a$ is rational and $b$ is irrational, then $a + b$ is irrational."
   Note: one-line contradiction. Difficulty 1.
5. **Zeitz 2.3.18**, p. 51. "True or false and why: If $a$ and $b$ are irrational, then $a^b$ is irrational."
   Note: the famous $\sqrt{2}^{\sqrt{2}}$ non-constructive argument. Difficulty 3 (a Class 10 reader can follow the answer).
6. **Zeitz 5.4.12**, p. 173. "Find a polynomial with integral coefficients whose zeros include $\sqrt{2} + \sqrt{5}$."
   Note: build a monic polynomial by squaring twice; compare with irrationality via monic zeros. Difficulty 2. (Also listed in polynomials.md.)
7. **Zeitz 5.4.13**, p. 173. "Prove that if a monic polynomial has a rational zero, then this zero must in fact be an integer."
   Note: the rational-root idea behind irrationality tests; same proof as Zeitz 7.1.7 (Euclid's lemma on $u^n$ and $v$). Difficulty 3. (Also listed in polynomials.md.)
8. **Zeitz 7.1.33**, p. 229 (USAMO 1973). "Show that the cube roots of three distinct prime numbers cannot be three terms (not necessarily consecutive) of an arithmetic progression."
   Note: write the AP condition, cube and use irrationality and unique factorisation. Difficulty 5.

Not copied but worth a look from the same section: 7.1.17 (USAMO 1972, gcd/lcm inequality), 7.1.25 (primes $4k + 3$), 7.1.29 (BAMO 2006, sums of consecutive odd integers), 7.1.31 (products of consecutive integers and perfect squares).
