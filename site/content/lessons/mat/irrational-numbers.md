---
title: Irrational numbers
summary: The diagonal of a square tile cannot be written as any fraction, and a few lines of reasoning prove it beyond doubt.
ncert: ["Class 10 Mathematics · Ch 1 Real Numbers (§1.3 Revisiting irrational numbers)"]
up_to: Olympiad
builds_on: [Fundamental theorem of arithmetic, Rational numbers and decimals, Pythagoras' theorem]
notes_prompt: Explain to a friend, without symbols, why no fraction can square to exactly 2, and why the same argument fails for 49.
margin:
  - kind: history
    title: History
    text: "Legend says the Pythagoreans were so shaken by the irrational diagonal that they drowned Hippasus for revealing it; the story is a legend, not history [Unverified]. In India the Baudhayana Sulba Sutra gives the diagonal of a square as 577/408 of its side, correct to five decimals [Unverified dating]."
  - kind: tip
    title: Exam favourite
    text: "Board answers lose marks for skipping the line 'a and b are coprime'. Say it right after assuming √p = a/b, and say which theorem gives p | a."
  - kind: olympiad
    title: Olympiad link
    text: "Rational root test: a zero of a monic polynomial with integer coefficients is either an integer or irrational. One line then settles √2, ∛5 or √2 + √3."
books:
  - { title: "Paul Zeitz, The Art and Craft of Problem Solving (2nd ed., Wiley 2007)", ref: "§2.3 Methods of argument, proof by contradiction, Example 2.3.2 (√2 with the extreme principle), pp. 39–44; exercises 2.3.12–2.3.18, pp. 50–51; §5.4 rational roots, 5.4.4–5.4.5, p. 171; §7.1 Example 7.1.7 (rational zero of a monic polynomial), p. 226" }
  - { title: "NCERT Mathematics Class X (reprint 2026-27)", ref: "Ch 1 Real Numbers, §1.3, Theorems 1.2–1.3, Examples 5–7, Exercise 1.2; Appendix 1 (proofs in mathematics)" }
  - { title: "G. H. Hardy, A Mathematician's Apology", ref: "the irrationality of √2 and Euclid's infinitude of primes as model proofs [Unverified section]" }
cards:
  - { front: 'What does "irrational" mean?', back: 'A real number that cannot be written as $a/b$ with integers $a, b$ and $b \ne 0$.' }
  - { front: 'Theorem 1.2 in one line?', back: 'If a prime $p$ divides $a^2$, then $p$ divides $a$. It needs $p$ prime: 4 divides 36 but not 6.' }
  - { front: 'Skeleton of the proof that √2 is irrational?', back: 'Assume $\sqrt2 = a/b$ in lowest terms; then $2b^2 = a^2$, so $2 \mid a$; put $a = 2c$, get $b^2 = 2c^2$, so $2 \mid b$; a common factor 2, contradiction.' }
  - { front: 'When is √n rational, for a whole number n?', back: 'Exactly when $n$ is a perfect square: every prime must appear an even number of times in $n$.' }
  - { front: 'Rational + irrational? Irrational + irrational?', back: 'Rational + irrational is always irrational. Two irrationals can give anything: $\sqrt2 + (-\sqrt2) = 0$.' }
  - { front: 'Rational root test?', back: 'If $u/v$ in lowest terms solves $a_n x^n + \dots + a_0 = 0$ (integer coefficients), then $u \mid a_0$ and $v \mid a_n$.' }
core:
  idea: 'A number is irrational when no fraction of whole numbers equals it. To prove it, assume it is a fraction in lowest terms and let unique prime factorisation force a contradiction: for every prime $p$, $\sqrt{p}$ is irrational.'
  formulas:
    - tex: 'p \text{ prime},\ p \mid a^2 \;\Longrightarrow\; p \mid a'
      label: 'Theorem 1.2: a prime that divides a square divides the number'
    - tex: '\sqrt{n} \in \mathbb{Q} \iff n \text{ is a perfect square}'
      label: 'Which square roots of whole numbers are rational'
    - tex: 'r \in \mathbb{Q},\ x \notin \mathbb{Q} \;\Longrightarrow\; r + x \notin \mathbb{Q},\ \ r x \notin \mathbb{Q}\ (r \ne 0)'
      label: 'Rational plus irrational, and non-zero rational times irrational, are irrational'
  conditions:
    - 'p is prime; for a composite number, dividing the square need not mean dividing the number (4 divides 36, not 6)'
    - 'a and b are integers, b is not 0, and the fraction has been cancelled to lowest terms'
    - 'The sum and product rules need one rational and one irrational number; two irrationals can give a rational'
  sign: 'Commonest mistake: "irrational + irrational is irrational". It is false: √2 + (−√2) = 0 and √2 × √2 = 2.'
outcomes:
  - 'Decide whether a square root, cube root or decimal is rational, and say why'
  - 'Prove that √p is irrational for any prime p, by contradiction, citing Theorem 1.2'
  - 'Show that numbers like 3 + 2√5 or (2 + √3)/5 are irrational by isolating the root'
  - 'Use the rational root test and the uniqueness of a + b√2 in JEE-style problems'
  - 'Run a descent argument and bound how closely fractions can approach √2'
opener:
  story: |
    Your cousin is laying square floor tiles, each exactly one foot on a side. One tile has to be cut corner to corner to fill a gap, and he asks you something simple: how long is that cut, exactly, as a fraction of a foot?

    You try. By Pythagoras, the cut squared must be exactly 2. Try 7/5: its square is 49/25 = 1.96, a little short. Try 17/12: its square is 289/144, about 2.007, a little long. Try 41/29: its square is 1681/841, about 1.9988, short again but closer. Every fraction you try undershoots or overshoots, by less and less.

    So is it only a matter of patience? Somewhere out there, with a big enough denominator, is there a fraction whose square is **exactly** 2? Or can you be sure, without trying them all, that no fraction ever will?
  art: '<svg viewBox="0 0 320 200" role="img" aria-label="A square tile with its diagonal marked by a question mark, and a list of fractions whose squares come close to 2"><rect x="50" y="40" width="120" height="120" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><line x1="50" y1="160" x2="170" y2="40" style="stroke:var(--ink);stroke-width:2;stroke-dasharray:6 4"/><text x="96" y="92" style="font-size:11px;fill:var(--ink)">?</text><text x="110" y="178" text-anchor="middle" style="font-size:11px;fill:var(--muted)">1 ft</text><text x="44" y="104" text-anchor="end" style="font-size:11px;fill:var(--muted)">1 ft</text><text x="190" y="40" style="font-size:11px;fill:var(--muted)">squared:</text><text x="190" y="64" style="font-size:11px;fill:var(--ink)">7/5 → 1.96</text><text x="190" y="86" style="font-size:11px;fill:var(--ink)">17/12 → 2.007</text><text x="190" y="108" style="font-size:11px;fill:var(--ink)">41/29 → 1.9988</text><text x="190" y="140" style="font-size:11px;fill:var(--c)">?/? → 2 exactly</text></svg>'
symbols:
  - s: '\mathbb{Q}'
    means: 'the rational numbers: all fractions a/b of integers with b not 0 (pure numbers, no unit)'
  - s: 'a,\ b,\ c'
    means: 'integers used as numerator and denominator in a proof (b is not 0)'
  - s: 'p'
    means: 'a prime number: its only positive divisors are 1 and itself'
  - s: 'p \mid a'
    means: 'p divides a: a is p times a whole number (read "p divides a")'
  - s: 'p \nmid a'
    means: 'p does not divide a'
  - s: '\sqrt{n}'
    means: 'the positive number whose square is n'
  - s: 'a_n,\ a_0'
    means: 'leading coefficient and constant term of a polynomial with integer coefficients'
  - s: 'u/v'
    means: 'a candidate rational zero of a polynomial, in lowest terms'
life:
  - 'A square tile 30 cm on a side has a diagonal of 30√2 ≈ 42.43 cm. Any tape measure reads a fraction close to it, never the exact length.'
  - 'A4 paper has sides in the ratio √2 : 1, so folding it in half gives A5 of exactly the same shape. No ratio of whole numbers can do that.'
  - 'On a piano tuned in equal temperament each semitone multiplies the pitch by the twelfth root of 2, an irrational number, so every interval except the octave is a slight compromise.'
  - 'A calculator stores only fractions with power-of-two denominators, so its √2 is a rational stand-in: in many programming languages √2 × √2 prints 2.0000000000000004.'
models:
  - name: 'Assume the opposite and follow it'
    text: 'To show something cannot happen, suppose it does and reason carefully until something impossible appears. Detectives use it for alibis, engineers for "this bug cannot be in module A", and you can use it to test any plan: "suppose this works; what else would have to be true?"'
  - name: 'Find the quantity that cannot change'
    text: 'A square always has an even number of each prime; twice a square has an odd number of 2s. That count settles the question without trying a single fraction. Whenever a search looks endless, look for a property (an invariant) that the goal has and the starting point lacks.'
  - name: 'Close is not equal'
    text: '1.41421356 is excellent for building a house and still not √2. Measurements, models and forecasts approximate reality; knowing exactly where "good enough" ends is a skill in engineering, finance and science.'
links:
  - leaf: 'mat/fundamental-theorem-of-arithmetic'
    name: 'Fundamental theorem of arithmetic'
    same: 'Unique prime factorisation is the engine of every proof here: Theorem 1.2, "count the 2s" and the perfect-square test all compare prime exponents on two sides of an equation.'
    differs: 'That lesson studies whole numbers and their recipes; this one uses those recipes to show that some lengths are not ratios of whole numbers at all.'
  - leaf: 'mat/polynomials'
    name: 'Polynomials (rational root test)'
    same: '√2 is a zero of x² − 2. The rational root test turns "is this number rational?" into "can this polynomial have a fractional zero?", and its proof is the same divisibility argument.'
    differs: 'Polynomials ask about all zeros and how they relate to the coefficients; here we only need to rule out the rational ones.'
next:
  q: 'The rational root test says a fraction that solves an equation with integer coefficients must have its top dividing the constant term and its bottom dividing the leading coefficient. Why are the zeros of a polynomial tied to its coefficients at all, and what else can the coefficients reveal without solving?'
  leaf: 'mat/polynomials'
  name: 'Polynomials'
---

:::hook
q: What's your guess? Is there a fraction whose square is exactly 2?
options: ["Yes, with a big enough denominator", "No, and it can be proved for every fraction at once", "Nobody can know without checking every fraction"]
answer: 1
right: Right. About 2,500 years ago the Greeks proved it, and the proof fits on a postcard. Suppose some fraction worked; then it contradicts itself. That argument is the heart of this lesson.
wrong: Infinitely many fractions can never be checked one by one. Yet one argument handles them all at once. Suppose some fraction worked, and watch it contradict itself. You will see it in section 3.
:::

## A length no fraction can name {lvl=1 id=s-diagonal label="Class 10"}

Draw a square whose sides are 1 unit long. Pythagoras says the diagonal squared is $1^2 + 1^2 = 2$. So the diagonal is the number whose square is 2, written $\sqrt{2}$. You can draw it with a ruler and swing it onto the number line with a compass. It is a perfectly real point, a little past 1.41.

:::figure caption="Swing the diagonal of the unit square down onto the number line with a compass. It lands at √2, between 1.41 and 1.42. The point is real; the question is whether any fraction names it exactly."
<svg viewBox="0 0 480 200" role="img" aria-label="A unit square on the number line with its diagonal swung down by an arc to the point root 2">
<line class="axis" x1="30" y1="150" x2="340" y2="150"/>
<rect x="70" y="40" width="110" height="110" style="fill:var(--mat);fill-opacity:.12;stroke:var(--mat);stroke-width:1.5"/>
<line x1="70" y1="150" x2="180" y2="40" style="stroke:var(--mat);stroke-width:2"/>
<path class="faint" d="M180 40 A155.6 155.6 0 0 1 225.6 150" style="fill:none;stroke-dasharray:4 4"/>
<circle cx="225.6" cy="150" r="3.5" style="fill:var(--mat)"/>
<line class="axis" x1="70" y1="145" x2="70" y2="155"/><line class="axis" x1="180" y1="145" x2="180" y2="155"/><line class="axis" x1="290" y1="145" x2="290" y2="155"/>
<text x="70" y="170" text-anchor="middle">0</text><text x="180" y="170" text-anchor="middle">1</text><text x="290" y="170" text-anchor="middle">2</text>
<text x="228" y="170" text-anchor="middle" style="fill:var(--mat)">√2</text>
<text x="58" y="100" text-anchor="end">1</text>
<text x="104" y="92">√2</text>
<text x="250" y="60">the arc lands on a point</text>
<text x="250" y="78">that no fraction names</text>
<text x="250" y="190">1.41 &lt; √2 &lt; 1.42</text>
</svg>
:::

A **rational number** is one you can write as a fraction of two whole numbers, $\frac{a}{b}$, with $a$ and $b$ integers and $b \ne 0$. So $\frac{7}{5}$, $-3 = \frac{-3}{1}$ and $0.25 = \frac{1}{4}$ all qualify. The set of all of them is called $\mathbb{Q}$, for "quotient".

An **irrational number** is a real number that is not rational: no fraction, however large its top and bottom, equals it exactly. In Class 9 you were told that $\sqrt{2}$, $\sqrt{3}$, $\pi$ and $0.10110111011110\ldots$ are irrational, but you were not shown why. This lesson fills that gap.

Why care, when 1.41421356 is good enough for any carpenter? Two reasons. "Good enough" and "exact" are different questions, and mathematics is the subject that can answer the second one. And the method of the proof, assuming the opposite and watching it collapse, is one of the most useful tools of thought you will ever pick up.

:::qc lvl=1
q: Which of these numbers is rational?
options: ["√(16/9)", "√8", "π", "0.1010010001… (one more 0 each time)"]
answer: 0
right: Right. √(16/9) = 4/3, a fraction. √8 = 2√2 is irrational, π is irrational, and that decimal never repeats.
wrong: Look for the one that simplifies to a fraction. What is √16? What is √9?
:::

## Primes that divide a square {lvl=1 id=s-prime label="Class 10"}

Start with a puzzle about whole numbers. 3 divides 36. Does 3 divide 6? Yes. Now 4 divides 36. Does 4 divide 6? No. So "divides the square" does not always mean "divides the number". What is special about 3?

Look at the prime recipes, which the fundamental theorem of arithmetic says are unique. $6 = 2 \times 3$, so $36 = 2 \times 2 \times 3 \times 3$. Squaring a number just doubles every prime in its recipe. **No new prime can appear.** So the only primes that divide 36 are 2 and 3, the primes of 6, and each of them divides 6.

The number 4 fails because it is not a prime. It needs two 2s. The square 36 has two 2s, but 6 has only one.

From here on, write $p \mid a$ (read "$p$ divides $a$") to mean that $a$ is $p$ times a whole number. Then the fact is:

:::law caption="NCERT Theorem 1.2. Here p is a prime and a is a positive integer."
$$p \mid a^2 \;\Longrightarrow\; p \mid a$$
:::

Read it as: if a prime divides the square of a whole number, it divides the number itself.

The proof is the 36 story told for every number. Write $a = p_1 p_2 \cdots p_n$ as a product of primes (repeats allowed). Then $a^2 = p_1^2 p_2^2 \cdots p_n^2$, and by uniqueness these are the only primes in $a^2$. If $p$ divides $a^2$, then $p$ is one of the primes of $a^2$, so it is one of $p_1, \dots, p_n$, so it divides $a$.

:::qc lvl=1
q: Which statement is true for every positive integer a?
options: ["If 9 divides a², then 9 divides a", "If 7 divides a², then 7 divides a", "If 8 divides a², then 8 divides a"]
answer: 1
right: Right. 7 is prime, so Theorem 1.2 applies. The others fail at a = 3 (9 divides 9 but not 3) and a = 4 (8 divides 16 but not 4).
wrong: Theorem 1.2 needs a prime. Try a = 3 for the first option and a = 4 for the third.
:::

## Why √2 is not a fraction {lvl=1 id=s-root2 label="Class 10"}

A detective who wants to show a suspect was not at the scene might argue: "Suppose he was there. Then the gate camera would have filmed him. It did not. So he was not there." That is **proof by contradiction**: assume the opposite of what you want, reason correctly, and arrive at something impossible. The reasoning was sound, so the only weak link is the assumption. It must be false.

Here is NCERT's Theorem 1.3, $\sqrt{2}$ is irrational, step by step.

1. Suppose $\sqrt{2}$ is rational, so $\sqrt{2} = \frac{a}{b}$ for integers $a, b$ with $b \ne 0$. Cancel every common factor, so that $a$ and $b$ are **coprime** (their only common factor is 1).
2. Multiply by $b$ and square: $2b^2 = a^2$. Read it as: twice one square equals another square.
3. So 2 divides $a^2$, and by Theorem 1.2, 2 divides $a$. Write $a = 2c$.
4. Substitute: $2b^2 = 4c^2$, so $b^2 = 2c^2$. Now 2 divides $b^2$, so 2 divides $b$.
5. So 2 divides both $a$ and $b$. But we cancelled every common factor in step 1. Contradiction.

So no fraction equals $\sqrt{2}$. Notice what just happened: the proof never tested a single fraction. It dealt with all infinitely many of them at once.

There is a second way to see it, by **counting 2s**. Squaring doubles every prime, so in any square $a^2$ the prime 2 appears an even number of times (possibly zero). In $2b^2$ it appears an even number of times from $b^2$, plus one more: an odd number. By uniqueness of prime factorisation, one number cannot have both an even and an odd count of 2s. So $a^2 = 2b^2$ has no solution in positive integers, and this version does not even need the "lowest terms" step.

:::figure caption="Count the 2s. With a = 12 and b = 6: a² = 144 has four 2s (pairs), while 2b² = 72 has three (the pairs from b², plus one lone 2). A square always has an even count and twice a square an odd count, so a² = 2b² can never hold."
<svg viewBox="0 0 480 170" role="img" aria-label="Circles marked 2: in a squared they come in pairs, in two b squared one is left over">
<text x="20" y="59">a²</text>
<circle cx="70" cy="55" r="12" style="fill:var(--mat);fill-opacity:.15;stroke:var(--mat)"/><text x="70" y="59" text-anchor="middle">2</text>
<circle cx="98" cy="55" r="12" style="fill:var(--mat);fill-opacity:.15;stroke:var(--mat)"/><text x="98" y="59" text-anchor="middle">2</text>
<circle cx="140" cy="55" r="12" style="fill:var(--mat);fill-opacity:.15;stroke:var(--mat)"/><text x="140" y="59" text-anchor="middle">2</text>
<circle cx="168" cy="55" r="12" style="fill:var(--mat);fill-opacity:.15;stroke:var(--mat)"/><text x="168" y="59" text-anchor="middle">2</text>
<text x="200" y="59">× 3 × 3</text>
<text x="290" y="59">even count of 2s</text>
<text x="20" y="124">2b²</text>
<circle cx="70" cy="120" r="12" style="fill:var(--mat);fill-opacity:.45;stroke:var(--mat);stroke-width:2"/><text x="70" y="124" text-anchor="middle">2</text>
<circle cx="140" cy="120" r="12" style="fill:var(--mat);fill-opacity:.15;stroke:var(--mat)"/><text x="140" y="124" text-anchor="middle">2</text>
<circle cx="168" cy="120" r="12" style="fill:var(--mat);fill-opacity:.15;stroke:var(--mat)"/><text x="168" y="124" text-anchor="middle">2</text>
<text x="200" y="124">× 3 × 3</text>
<text x="290" y="124">odd count of 2s</text>
<text x="52" y="152">lone 2</text>
</svg>
:::

:::qc lvl=1
q: In NCERT's proof, which step uses the fact that a and b are coprime?
options: ["Squaring both sides", "Applying Theorem 1.2", "The final contradiction"]
answer: 2
right: Right. Finding 2 as a common factor is only absurd because we cancelled all common factors at the start.
wrong: Squaring and Theorem 1.2 work for any integers. Where does "no common factor" actually get contradicted?
:::

## Other roots, and where it fails {lvl=1 id=s-other label="Class 10"}

Replace 2 by any prime $p$ and the same five steps go through: $pb^2 = a^2$, so $p \mid a$; write $a = pc$, get $b^2 = pc^2$, so $p \mid b$; a common factor, contradiction. So $\sqrt{3}$, $\sqrt{5}$, $\sqrt{7}$, $\sqrt{11}$ and every $\sqrt{p}$ are irrational. That is NCERT's Example 5 and Exercise 1.2 Q1.

What about $\sqrt{6}$? Six is not prime, but the prime 2 still works. From $6b^2 = a^2$, 2 divides $a$; write $a = 2c$, so $6b^2 = 4c^2$, that is $3b^2 = 2c^2$. Now 2 divides $3b^2$, and 2 does not divide 3, so (by uniqueness again) 2 divides $b^2$, hence $b$. Contradiction.

A good proof must also fail where the claim is false, and $\sqrt{49} = 7$ is rational. Run the argument: $49b^2 = a^2$, so $7 \mid a$; write $a = 7c$; then $49b^2 = 49c^2$, so $b^2 = c^2$. Stuck. Nothing forces 7 to divide $b$, and no contradiction comes. (Zeitz sets exactly this as an exercise, Problem 2.3.12(c).) The argument bites only when some prime appears in the number an **odd** number of times.

:::qc lvl=1
q: For which number does the contradiction argument go through, proving its square root irrational?
options: ["√36", "√12", "√(9/4)"]
answer: 1
right: Right. 12 = 2² × 3 has the prime 3 an odd number of times, so √12 = 2√3 is irrational. √36 = 6 and √(9/4) = 3/2.
wrong: Write each number as a product of primes and look for a prime with an odd exponent.
:::

## Making new irrationals {lvl=1 id=s-combine label="Class 10"}

Once you know $\sqrt{3}$ is irrational, you get infinitely many more for free.

**Rational plus irrational is irrational.** Suppose $r$ is rational, $x$ is irrational, and $r + x$ were a rational $q$. Then $x = q - r$, a difference of two fractions, which is a fraction. But $x$ is irrational. Contradiction.

**Non-zero rational times irrational is irrational.** Suppose $rx = q$ with $r \ne 0$. Then $x = q/r$ is a fraction. Contradiction. The "non-zero" matters: $0 \times \sqrt{2} = 0$.

NCERT's Examples 6 and 7 use one template: assume the number equals $\frac{a}{b}$, **isolate the root**, and see that the root equals a fraction.

:::worked title="Show that (2 + √3)/5 is irrational"
Suppose $\dfrac{2 + \sqrt{3}}{5} = \dfrac{a}{b}$ with integers $a, b$ and $b \ne 0$.

Multiply by 5: $2 + \sqrt{3} = \dfrac{5a}{b}$. Subtract 2: $\sqrt{3} = \dfrac{5a - 2b}{b}$.

The right side is a ratio of integers with a non-zero bottom, so $\sqrt{3}$ would be rational. That contradicts Example 5. So $\dfrac{2 + \sqrt{3}}{5}$ is irrational.
:::

Two irrationals together can do anything. $\sqrt{2} + (-\sqrt{2}) = 0$, $\sqrt{2} \times \sqrt{2} = 2$ and $(2 + \sqrt{3}) + (2 - \sqrt{3}) = 4$ are rational, while $\sqrt{2} \times \sqrt{3} = \sqrt{6}$ is not. There is no rule for that case, only case-by-case work.

:::qc lvl=1
q: Which of these must be irrational?
options: ["The sum of two irrational numbers", "The product of two irrational numbers", "5 + √11", "√2 × √18"]
answer: 2
right: Right. 5 is rational and √11 is irrational (11 is prime), so the sum is irrational. √2 × √18 = √36 = 6.
wrong: Only one option has a rational number combined with an irrational one. The other rules need case-by-case checks.
:::

## Which square roots are rational {lvl=2 id=s-general label="Class 12"}

Counting primes settles every square root of a whole number at once. Suppose $\sqrt{n} = \frac{a}{b}$, so $nb^2 = a^2$. Pick any prime. It appears an even number of times in $a^2$ and in $b^2$. Comparing counts on both sides, (count in $n$) + even = even, so it appears an even number of times in $n$. That holds for every prime, so $n$ is a perfect square.

:::law caption="For a positive integer n. The same counting works for fractions in lowest terms: √(m/n) is rational only when m and n are both perfect squares."
$$\sqrt{n} \in \mathbb{Q} \iff n \text{ is a perfect square}$$
:::

Read it as: the square root of a whole number is a fraction only when it is actually a whole number. So among $\sqrt{1}, \dots, \sqrt{30}$ only the roots of 1, 4, 9, 16 and 25 are rational; the other 25 are irrational.

Cube roots work the same way with "even" replaced by "a multiple of 3". If $\sqrt[3]{n} = \frac{a}{b}$ then $nb^3 = a^3$, and every prime count in $a^3$ and $b^3$ is a multiple of 3. So $\sqrt[3]{n}$ is rational only when $n$ is a perfect cube: $\sqrt[3]{2}$, $\sqrt[3]{4}$ and $\sqrt[3]{9}$ are irrational. The same exponent-counting trick shows that numbers such as $\log_{10} 2$ are irrational; try it in the problems.

:::qc lvl=2
q: Is the cube root of 54 rational?
options: ["Yes, 54 is a perfect cube", "No: 54 = 2 × 3³ has a single 2", "It cannot be decided"]
answer: 1
right: Right. The prime 2 appears once, not a multiple of 3 times, so ∛54 = 3∛2 is irrational.
wrong: Factorise 54 and check whether every prime exponent is a multiple of 3.
:::

## Decimals that never repeat {lvl=2 id=s-decimals label="Class 12"}

Divide 1 by 7 by long division. The remainders go 1, 3, 2, 6, 4, 5, and then 1 again, so the digits repeat: $\frac{1}{7} = 0.142857\,142857\ldots$ This is no accident. When you divide by 7 a remainder can only be 0 to 6. After at most 7 steps some remainder comes back, and from then on the division repeats itself exactly. If the remainder 0 appears, the decimal stops. So **every fraction has a decimal that terminates or repeats.**

The converse holds too. Take $x = 0.272727\ldots$ Then $100x = 27.2727\ldots$, and subtracting, $99x = 27$, so $x = \frac{27}{99} = \frac{3}{11}$. Any repeating block can be peeled off this way.

So a number is irrational exactly when its decimal **never terminates and never repeats**, like $0.10110111011110\ldots$ where the runs of 1s keep growing. One warning: finitely many digits prove nothing. The first million digits of $\pi$ show no repeating block, but that is evidence, not proof. The proof that $\pi$ is irrational came from Lambert in the 1760s [Unverified date] and is much harder than the one for $\sqrt{2}$.

:::qc lvl=2
q: Write x = 0.454545… as a fraction.
options: ["5/11", "45/100", "9/20"]
answer: 0
right: Right. 100x − x = 45, so x = 45/99 = 5/11.
wrong: Multiply by 100 to shift one repeating block, then subtract x.
:::

## The rational root test {lvl=3 id=s-rrt label="JEE"}

Here is another angle. $\sqrt{2}$ is a zero of the polynomial $x^2 - 2$. So ask a bigger question: which fractions can be zeros of a polynomial with integer coefficients?

Take $a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0 = 0$, with integer coefficients, leading coefficient $a_n$ and constant term $a_0$. Suppose the fraction $\frac{u}{v}$, in lowest terms, is a solution. Substitute and multiply through by $v^n$:

$$a_n u^n + a_{n-1}u^{n-1}v + \dots + a_1 u v^{n-1} + a_0 v^n = 0.$$

Read it as: a sum of integer terms that adds to zero. Every term except the last contains $u$, so $u$ divides $a_0 v^n$. But $u$ and $v$ share no prime, so every prime of $u$ (with its multiplicity) must sit inside $a_0$. Hence $u \mid a_0$. In the same way every term except the first contains $v$, so $v \mid a_n u^n$, and $v \mid a_n$.

:::law caption="Rational root test. u/v in lowest terms, all coefficients integers."
$$\tfrac{u}{v} \text{ is a zero} \;\Longrightarrow\; u \mid a_0 \ \text{ and } \ v \mid a_n$$
:::

Read it as: the top of the fraction divides the constant term, and the bottom divides the leading coefficient.

When the leading coefficient is 1 (a **monic** polynomial), $v$ must be $\pm 1$, so any rational zero is an integer (Zeitz, Example 7.1.7). Turn that round: **a zero of a monic integer polynomial is either an integer or irrational.** Now $\sqrt{2}$ takes one line: it is a zero of the monic $x^2 - 2$ and lies strictly between 1 and 2, so it is not an integer, so it is irrational. Zeitz gives this as a second proof (§5.4, p. 171). The same line handles $\sqrt{n}$ for any non-square $n$, and $\sqrt[3]{5}$ via $x^3 - 5$.

:::worked title="√2 + √3 is irrational, by the rational root test"
Let $x = \sqrt{2} + \sqrt{3}$. Square: $x^2 = 5 + 2\sqrt{6}$, so $x^2 - 5 = 2\sqrt{6}$.

Square again to remove the last root: $x^4 - 10x^2 + 25 = 24$, that is
$$x^4 - 10x^2 + 1 = 0.$$
This polynomial is monic with integer coefficients, so a rational zero would be an integer dividing 1, namely $\pm 1$. But $1 - 10 + 1 = -8 \ne 0$. So $x$ is not rational. (Or: $x \approx 3.146$ lies between 3 and 4, so it is not an integer.)
:::

:::qc lvl=3
q: Which list contains every possible rational zero of 2x³ − x + 3?
options: ["±1, ±3, ±1/2, ±3/2", "±1/3, ±2/3", "±1, ±2, ±3"]
answer: 0
right: Right. The top divides 3 (±1, ±3) and the bottom divides 2 (1 or 2). The test lists candidates; it does not promise any of them works.
wrong: The top must divide the constant term 3, and the bottom must divide the leading coefficient 2.
:::

## Comparing parts: a + b√2 {lvl=3 id=s-surds label="JEE"}

Because $\sqrt{2}$ is irrational, a number of the form $a + b\sqrt{2}$ with $a, b$ rational can be written that way in **only one way**. Think of a two-column ledger: a rational part and a $\sqrt{2}$ part. If $a + b\sqrt{2} = c + d\sqrt{2}$ and $b \ne d$, then $\sqrt{2} = \frac{a - c}{d - b}$ would be rational. So $b = d$, and then $a = c$.

This lets you solve equations by comparing parts. To simplify $\sqrt{3 + 2\sqrt{2}}$, guess it equals $x + y\sqrt{2}$ with $x, y$ rational. Squaring gives $x^2 + 2y^2 + 2xy\sqrt{2} = 3 + 2\sqrt{2}$. Compare parts: $x^2 + 2y^2 = 3$ and $xy = 1$, which gives $x = y = 1$. Check: $(1 + \sqrt{2})^2 = 3 + 2\sqrt{2}$. So $\sqrt{3 + 2\sqrt{2}} = 1 + \sqrt{2}$.

The second tool is the **conjugate**. The product $(a + b\sqrt{2})(a - b\sqrt{2}) = a^2 - 2b^2$ is rational, and it is zero only when $a = b = 0$ (otherwise $\sqrt{2} = |a/b|$ would be rational). So you may always divide:

$$\frac{1}{a + b\sqrt{2}} = \frac{a - b\sqrt{2}}{a^2 - 2b^2}.$$

Read it as: multiply top and bottom by the conjugate, and the bottom becomes rational. So numbers $a + b\sqrt{2}$ can be added, subtracted, multiplied and divided without leaving their own little world. Mathematicians call such a world a field. The quantity $a^2 - 2b^2$ returns as the hero of the last section.

:::qc lvl=3
q: If p + q√3 = 7 − 2√3 and p, q are rational, what is q?
options: ["−2", "7", "It cannot be determined"]
answer: 0
right: Right. √3 is irrational, so the √3 parts must match. Without "p, q rational" the answer could not be determined.
wrong: Compare the parts that multiply √3. This works only because p and q are rational and √3 is not.
:::

## Contradiction as a strategy {lvl=4 id=s-descent label="Olympiad"}

Zeitz (§2.3) gives a test for when to reach for contradiction: negate the claim and ask whether the negation hands you something to grab. "$\sqrt{2}$ is irrational" says what a number is *not*, a glass wall with nothing to hold. Its negation, "$\sqrt{2} = a/b$", hands you two integers and an equation: footholds. Impossibility statements ("no fraction", "no largest prime", "no integer solution") are where contradiction shines.

Zeitz also tidies the start (Example 2.3.2). Instead of "cancel common factors", choose the fraction for $\sqrt{2}$ with the **smallest possible** positive denominator; any non-empty set of positive integers has a least member. The goal then becomes: produce a fraction for $\sqrt{2}$ with a smaller denominator.

That can be done with no primes at all. Suppose $a^2 = 2b^2$ with $b$ as small as possible. Since $1 < \sqrt{2} < 2$, we have $b < a < 2b$. Expand, using $a^2 = 2b^2$:

$$(2b - a)^2 = 6b^2 - 4ab = 2(a - b)^2.$$

Read it as: the pair $(2b - a,\ a - b)$ is another solution. Its denominator satisfies $0 < a - b < b$, so it is smaller. Contradiction with minimality. If an exact solution existed, this map would produce smaller and smaller positive solutions for ever, and positive integers cannot keep shrinking. Fermat called this **infinite descent**. The figure shows it as a picture.

:::figure caption="Descent as a picture. If a² = 2b², two squares of side b exactly fill the area of the square of side a. Placed in opposite corners, they overlap in a square of side 2b − a (counted twice) and miss two corner squares of side a − b. So (2b − a)² = 2(a − b)²: a smaller solution."
<svg viewBox="0 0 480 230" role="img" aria-label="Two overlapping squares of side b inside a square of side a, with the overlap and the two uncovered corners marked">
<rect x="30" y="30" width="170" height="170" style="fill:none;stroke:var(--ink);stroke-width:2"/>
<rect x="30" y="80" width="120" height="120" style="fill:var(--mat);fill-opacity:.18;stroke:var(--mat);stroke-width:1.5"/>
<rect x="80" y="30" width="120" height="120" style="fill:var(--mat);fill-opacity:.18;stroke:var(--mat);stroke-width:1.5"/>
<rect x="30" y="30" width="50" height="50" style="fill:none;stroke:var(--muted);stroke-dasharray:4 3"/>
<rect x="150" y="150" width="50" height="50" style="fill:none;stroke:var(--muted);stroke-dasharray:4 3"/>
<text x="115" y="119" text-anchor="middle">2b−a</text>
<text x="55" y="59" text-anchor="middle">a−b</text>
<text x="175" y="179" text-anchor="middle">a−b</text>
<text x="20" y="119" text-anchor="end">a</text>
<text x="90" y="216" text-anchor="middle">b</text>
<text x="140" y="22" text-anchor="middle">b</text>
<text x="226" y="60">two b-squares fill the a-square</text>
<text x="226" y="84">area: a² = 2b²</text>
<text x="226" y="108">overlap counted twice = two gaps</text>
<text x="226" y="132">(2b−a)² = 2(a−b)²</text>
<text x="226" y="156">a smaller solution, again</text>
<text x="226" y="180">and again: impossible</text>
</svg>
:::

You can watch the map work on near misses. $\frac{99}{70}$ almost works: $99^2 = 9801$ and $2 \times 70^2 = 9800$. The map sends it to $\frac{140 - 99}{99 - 70} = \frac{41}{29}$, and $41^2 = 1681$ against $2 \times 29^2 = 1682$: still off by one, smaller. The near misses never become exact, which is the whole point.

Notice the two different engines. NCERT's proof runs on unique factorisation; the descent runs only on size. Olympiad problems often need you to pick the engine that fits.

:::qc lvl=4
q: Apply the descent map (2b − a)/(a − b) to the near miss 17/12 (17² = 289, 2 × 12² = 288). What do you get?
options: ["7/5", "5/7", "24/17"]
answer: 0
right: Right. (24 − 17)/(17 − 12) = 7/5, and 49 is again one away from 2 × 25 = 50.
wrong: Here a = 17 and b = 12. Compute 2b − a and a − b.
:::

## Fractions that come close {lvl=4 id=s-approx label="Olympiad"}

No fraction hits $\sqrt{2}$, but how close can one come? Irrationality gives a precise answer. For positive integers $p, q$, the number $p^2 - 2q^2$ is an integer, and it is never 0 (that would make $\sqrt{2} = p/q$). So $|p^2 - 2q^2| \ge 1$. Factor it as $(p - q\sqrt{2})(p + q\sqrt{2})$ and divide by $q(p + q\sqrt{2})$:

$$\left|\frac{p}{q} - \sqrt{2}\right| = \frac{|p^2 - 2q^2|}{q\,(p + q\sqrt{2})} \;\ge\; \frac{1}{q\,(p + q\sqrt{2})} \approx \frac{1}{2\sqrt{2}\,q^2}.$$

Read it as: a fraction with denominator $q$ misses $\sqrt{2}$ by at least about $1/(2.83\,q^2)$. "Not a fraction" has become "not even close to a fraction with a small denominator".

The champions are the fractions with $p^2 - 2q^2 = \pm 1$: $\frac11, \frac32, \frac75, \frac{17}{12}, \frac{41}{29}, \frac{99}{70}, \frac{239}{169}, \frac{577}{408}, \dots$ Each comes from the last by the rule $\frac{p}{q} \to \frac{p + 2q}{p + q}$. Why it works: $(p + 2q)^2 - 2(p + q)^2 = -(p^2 - 2q^2)$, so the miss keeps size 1 and flips sign. That is why the opener's squares went short, long, short.

The Baudhayana Sulba Sutra gives the diagonal of a square as $1 + \frac13 + \frac{1}{3 \cdot 4} - \frac{1}{3 \cdot 4 \cdot 34}$ times the side [Unverified wording and dating]. Add it up: $\frac{408 + 136 + 34 - 1}{408} = \frac{577}{408} \approx 1.4142157$, right to five decimal places and one of the champions. Equations like $p^2 - 2q^2 = 1$ are called Pell equations; Brahmagupta and Bhaskara II solved such equations in general by the chakravala method [Unverified details].

:::qc lvl=4
q: Which champion fraction comes right after 99/70?
options: ["239/169", "140/99", "198/140"]
answer: 0
right: Right. (99 + 140)/(99 + 70) = 239/169, and 239² − 2 × 169² = 57121 − 57122 = −1.
wrong: Use p/q → (p + 2q)/(p + q) with p = 99 and q = 70.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Irrational means no fraction $a/b$ of integers equals the number; the diagonal of a unit square, $\sqrt{2}$, is the first example. {lvl=1}
2. If a prime divides $a^2$ it divides $a$ (Theorem 1.2), because squaring adds no new primes. {lvl=1}
3. Proof by contradiction: assume $\sqrt{p} = a/b$ in lowest terms, show $p$ divides both $a$ and $b$, contradiction. {lvl=1}
4. Rational + irrational, and non-zero rational × irrational, are irrational; isolate the root to prove it. {lvl=1}
5. $\sqrt{n}$ is rational only for perfect squares $n$; $\sqrt[3]{n}$ only for perfect cubes. Irrational decimals never terminate or repeat. {lvl=2}
6. Rational root test: a rational zero $u/v$ has $u \mid a_0$, $v \mid a_n$; a zero of a monic integer polynomial is an integer or irrational. {lvl=3}
7. $a + b\sqrt{2}$ (rational $a, b$) has unique parts, so you can compare parts. {lvl=3}
8. Descent and the bound $|p/q - \sqrt{2}| \ge 1/(q(p + q\sqrt{2}))$ both grow out of $p^2 - 2q^2 \ne 0$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- State "$a$ and $b$ are coprime" right after assuming $\sqrt{p} = a/b$; the contradiction depends on it. {lvl=1}
- Theorem 1.2 needs a prime: 4 divides 36 but not 6. {lvl=1}
- Irrational + irrational can be rational ($\sqrt{2} + (-\sqrt{2}) = 0$); the sum rule needs one rational. {lvl=1}
- $22/7$ and $3.14$ are rational approximations of $\pi$, not $\pi$. {lvl=1}
- Simplify first: $\sqrt{12} = 2\sqrt{3}$ is irrational, $\sqrt{9/4} = 3/2$ is not. {lvl=2}
- Comparing parts in $p + q\sqrt{3} = 7 - 2\sqrt{3}$ is valid only when $p$ and $q$ are known to be rational. {lvl=3}
- The rational root test lists candidates; you still have to test them. {lvl=3}
:::
