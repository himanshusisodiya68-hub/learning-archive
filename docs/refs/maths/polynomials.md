# Zeitz, polynomials: reading notes

For leaf `mat/polynomials`.

## Source and what was read

- **Paul Zeitz, The Art and Craft of Problem Solving, 2nd edition** (Wiley, copyright 2007), the owner's copy (Drive PDF, text extracted with `pdftotext`).
- Page mapping: pdf page = book page + 17. The problem pages (pp. 172–173) were checked against page images.
- **Read:** §5.4 Polynomials, book pp. 164–173 (text pp. 164–172, problems 5.4.6–5.4.23 on pp. 172–173). Nothing else from Chapter 5.
- Numbering: Zeitz numbers examples and exercises in one running sequence (5.4.1 to 5.4.5 are worked examples, 5.4.6 to 5.4.23 are exercises). Cite as "Zeitz 5.4.n".

## Order of ideas and key insights

- **Notation first:** $A[x]$ is the set of polynomials with coefficients in $A$ (usually $\mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$, sometimes $\mathbb{Z}_n$). Label the coefficient of $x^i$ as $a_i$ always; degree, leading coefficient, monic, constant term. Consistent notation avoids errors in heavy manipulation.
- **Multiplication:** the coefficient of $x^j$ in $A(x)B(x)$ is $\sum_{s+t=j} a_s b_t$.
- **Division algorithm for polynomials:** $f = Qg + R$ with $\deg R < \deg g$. Over $\mathbb{Z}$ the quotient stays in $\mathbb{Z}[x]$ when $g$ is monic. It is the exact analogue of integer division (compare number-theory.md).
- **Remainder theorem:** the remainder on dividing $P(x)$ by $x - a$ is $P(a)$. Proof idea: $P(x) = Q(x)(x-a) + r$ is an identity, so substitute the convenient value $x = a$. Zeitz names this tool "substitute convenient values".
- **Factor theorem:** if $P(a) = 0$ then $x - a$ divides $P$ (immediate from the remainder theorem).
- **Fundamental Theorem of Algebra:** every polynomial in $\mathbb{C}[x]$ has a complex zero (proof not given, "quite deep"). With 5.4.6 (at most $n$ zeros) it gives $P(x) = a_n (x - r_1) \cdots (x - r_n)$, with multiplicities counted (example: an 8th-degree polynomial with only five distinct zeros).
- **"To know the zeros of a polynomial is to know the polynomial."** Problem-solving move: if the data are not zeros, build a new polynomial whose zeros are the data (Example 5.4.2: use $(x+1)P(x) - x$), then fix the constant by a convenient substitution.
- **Zeros and coefficients (Vieta):** multiply out $(x - r_1) \cdots (x - r_n)$ and choose "$x$ or $-r_i$" from each bracket. Then for monic $P$, $a_{n-k} = (-1)^k \times$ (sum of all products of $k$ different zeros). Zeitz derives quadratic, cubic and quartic cases by counting choices (the binomial coefficient counts the terms), and says to memorise the pattern, including the role of $(-1)^k$.
- **Strategy lesson (Example 5.4.3):** do not solve for the zeros if the question asks only for a symmetric combination; group the pairs ($ac + ad + bc + bd = (a+b)(c+d)$) and solve for sums of pairs.
- **Rational roots theorem:** if integer polynomial $P$ has rational zero $a/b$ in lowest terms, then $b$ divides the leading coefficient and $a$ divides the constant term. Built on the factor theorem plus **Gauss's lemma** (a factorisation over $\mathbb{Q}$ gives one over $\mathbb{Z}$ with primitive factors; proof hints at Zeitz 7.1.30). Use it also to prove zeros irrational.
- **Monic polynomials:** every rational zero is an integer. So a non-integer zero of a monic integer polynomial is irrational. This is the "irrationality criterion" tool (compare Zeitz 7.1.7 in number-theory.md).

## Worked examples in the section (summarised, not copied)

- **Zeitz 5.4.1** (AIME 1986, p. 165): largest integer $n$ with $n + 10 \mid n^3 + 100$. Divide: the remainder is $-900$, so $n + 10 \mid 900$, giving $n = 890$.
- **Zeitz 5.4.2** (USAMO 1975, p. 167): degree-$n$ polynomial with $P(k) = k/(k+1)$ for $k = 0, \dots, n$; find $P(n+1)$. Define $Q(x) = (x+1)P(x) - x$ with known zeros $0, \dots, n$; find the constant by $x = -1$; the result is $\frac{n + 1 + (-1)^{n+1}}{n+2}$.
- **Zeitz 5.4.3** (USAMO 1984, pp. 169–170): quartic $x^4 - 18x^3 + kx^2 + 200x - 1984$, two zeros with product $-32$, find $k$. Vieta for all four symmetric functions, then group $a+b$ and $c+d$ and solve a 2-by-2 system; $k = 86$.
- **Zeitz 5.4.4** (p. 171): rational roots theorem gives that $x^2 - 2$ has no rational zero, hence $\sqrt{2}$ is irrational.
- **Zeitz 5.4.5** (p. 171–172): $\sqrt{1001^2 + 1} + \dots + \sqrt{2000^2 + 1}$ is irrational. Squeeze the sum between two consecutive integers to show it is not an integer, then show by induction that a sum of square roots of non-squares is a zero of a monic integer polynomial (move one radical to one side, square).
- Also shown in the text: completing the square for the quadratic formula (derive it, do not just memorise), and a division example $x^3 + x^2 + 7 = (x^2 + 3)(x + 1) + (-3x + 4)$.

## Problems to use (copied word for word)

Text copied from the printed pages (symbols retyped in TeX). Difficulty is my own rating, 1 (Class 10/11 can try) to 5 (hard olympiad). Solutions are not copied.

1. **Zeitz 5.4.6**, p. 172. "Prove that a polynomial of degree $n$ can have at most $n$ distinct zeros."
   Note: factor theorem plus induction; the basis for the identity principle (5.4.7). Difficulty 2.
2. **Zeitz 5.4.8**, p. 172. "Prove that if a polynomial has real coefficients, then its zeros come in complex conjugate pairs; i.e., if $a + bi$ is a zero, then $a - bi$ is also a zero."
   Note: conjugation respects sums and products, so $P(\bar z) = \overline{P(z)}$. Difficulty 2.
3. **Zeitz 5.4.9**, p. 173. "Find the remainder when you divide $x^{81} + x^{49} + x^{25} + x^9 + x$ by $x^3 - x$."
   Note: remainder has degree at most 2; use zeros $0, 1, -1$ of the divisor and the remainder theorem. Difficulty 2.
4. **Zeitz 5.4.10**, p. 173. "Let $p(x) = x^6 + x^5 + \dots + 1$. Find the remainder when $p(x^7)$ is divided by $p(x)$."
   Note: roots of $p$ are the nontrivial 7th roots of unity (or multiply by $x - 1$). Difficulty 3.
5. **Zeitz 5.4.12**, p. 173. "Find a polynomial with integral coefficients whose zeros include $\sqrt{2} + \sqrt{5}$."
   Note: squaring twice, or the conjugate-product idea; a first step towards "algebraic numbers". Difficulty 2. (Also in number-theory.md.)
6. **Zeitz 5.4.14**, p. 173. "Let $p(x)$ be a polynomial with integer coefficients satisfying $p(0) = p(1) = 1999$. Show that $p$ has no integer zeros."
   Note: $m - n \mid p(m) - p(n)$ for integer polynomials; parity argument on $p(k)$. Difficulty 3.
7. **Zeitz 5.4.16**, p. 173 (Hungary 1899). "Let $r$ and $s$ be the roots of $x^2 - (a + d)x + (ad - bc) = 0$. Prove that $r^3$ and $s^3$ are the roots of $y^2 - (a^3 + d^3 + 3abc + 3bcd)y + (ad - bc)^3 = 0$."
   Note: Vieta in both directions plus $r^3 + s^3 = (r+s)^3 - 3rs(r+s)$; also reads as eigenvalues of a 2-by-2 matrix cubed. Difficulty 3.
8. **Zeitz 5.4.20**, p. 173 (USAMO 1977). "If $a$ and $b$ are two roots of $x^4 + x^3 - 1 = 0$, prove that $ab$ is a root of $x^6 + x^4 + x^3 - x^2 - 1 = 0$."
   Note: Vieta on the quartic with $c, d$ the other two roots; express $(ab)$ powers through $s = a + b$ and $p = ab$. Difficulty 4.
9. **Zeitz 5.4.21**, p. 173 (Canada 1970). "Let $P(x) = x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ be a polynomial with integral coefficients. Suppose that there exist four distinct integers $a, b, c, d$ with $P(a) = P(b) = P(c) = P(d) = 5$. Prove that there is no integer $k$ with $P(k) = 8$."
   Note: write $P(x) - 5 = (x-a)(x-b)(x-c)(x-d)Q(x)$ and compare with $3$; four distinct integer factors cannot multiply to $3$. Difficulty 3.
10. **Zeitz 5.4.22**, p. 173 (USAMO 1984). "$P(x)$ is a polynomial of degree $3n$ such that $P(0) = P(3) = \cdots = P(3n) = 2$, $P(1) = P(4) = \cdots = P(3n-2) = 1$, $P(2) = P(5) = \cdots = P(3n-1) = 0$, and $P(3n+1) = 730$. Determine $n$."
    Note: take differences or Lagrange interpolation, then evaluate at $3n + 1$ to get a binomial identity; Difficulty 4.

Not copied but worth a look from the same section: 5.4.7 (identity principle), 5.4.13 (monic rational zero, in number-theory.md), 5.4.15 (irreducibility from $\pm 1$ values), 5.4.17 (when $(x-a)(x-b)(x-c) - 1$ factors), 5.4.18 (integer values of integer-valued polynomials), 5.4.19 (IMO 1993, irreducibility of $x^n + 5x^{n-1} + 3$).
