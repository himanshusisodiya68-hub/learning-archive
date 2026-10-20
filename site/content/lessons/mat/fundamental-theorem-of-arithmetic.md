---
title: Fundamental theorem of arithmetic
summary: Every whole number above 1 is built from primes in exactly one way, and that single fact quietly powers HCF, LCM and much more.
ncert: ["Class 10 Mathematics · Ch 1 Real Numbers (§1.1–1.2)"]
up_to: Olympiad
builds_on: [Primes and factorisation, HCF and LCM, Exponents and powers]
notes_prompt: Explain to a friend why 4 to any power can never end in 0, and why that argument would collapse if a number could be split into primes in two different ways.
margin:
  - kind: history
    title: History
    text: 'Euclid''s Elements (about 300 BC) holds a version of the theorem (Book IX, Proposition 14, as NCERT notes), but the first complete proof is credited to Gauss in his Disquisitiones Arithmeticae of 1801.'
  - kind: tip
    title: Exam favourite
    text: 'HCF × LCM = product works for two numbers only. For three numbers it fails, and board papers love to test exactly that.'
  - kind: olympiad
    title: Olympiad habit
    text: 'Think in exponents. Write v_p(n) for the power of the prime p in n; then multiplying adds exponents, HCF takes minimums and LCM takes maximums, one prime at a time.'
books:
  - { title: 'NCERT Mathematics, Class X (reprint 2026-27)', ref: 'Ch 1 Real Numbers, §1.2 The Fundamental Theorem of Arithmetic, Theorem 1.1 and Examples 1–4' }
  - { title: 'Paul Zeitz, The Art and Craft of Problem Solving, 2nd ed. (Wiley, 2007)', ref: '§7.1 Primes and Divisibility, pp. 222–229: Example 7.1.2 (the even integers, p. 224), the division algorithm, GCD as the least linear combination and Euclid''s lemma (7.1.4–7.1.6), problems 7.1.11–7.1.32' }
  - { title: 'G. H. Hardy and E. M. Wright, An Introduction to the Theory of Numbers', ref: 'Ch 1–2, primes and the fundamental theorem [Unverified]' }
cards:
  - { front: 'State the Fundamental Theorem of Arithmetic.', back: 'Every composite number is a product of primes, and this factorisation is unique apart from the order of the factors.' }
  - { front: 'How do you get HCF and LCM from prime factorisations?', back: 'HCF: each common prime with its smallest power. LCM: every prime that appears, with its greatest power.' }
  - { front: 'Why is 1 not called a prime?', back: 'If it were, 6 = 2 × 3 = 1 × 2 × 3 = 1 × 1 × 2 × 3, and factorisation would no longer be unique.' }
  - { front: 'How many divisors does $2^3 \times 3^2 \times 5$ have?', back: '$(3+1)(2+1)(1+1) = 24$: choose each exponent independently.' }
  - { front: 'What is Euclid''s lemma, and why does it matter?', back: 'If a prime divides a product $ab$, it divides $a$ or $b$. It is the key step in proving that factorisation is unique.' }
  - { front: 'What does Euclid''s algorithm rest on?', back: 'If $a = qb + r$, then $a, b$ and $b, r$ have the same common divisors, so $\mathrm{HCF}(a,b) = \mathrm{HCF}(b,r)$.' }
core:
  idea: 'Every whole number greater than 1 is a product of primes in exactly one way, apart from the order. So a number is fully described by its prime powers, and HCF and LCM are found prime by prime: the smaller power for the HCF, the larger power for the LCM.'
  formulas:
    - tex: 'n = p_1^{a_1}\, p_2^{a_2} \cdots p_k^{a_k}'
      label: 'Prime-power form, unique apart from order'
    - tex: '\mathrm{HCF}:\ \text{smaller power of each prime}, \quad \mathrm{LCM}:\ \text{larger power}'
      label: 'Prime by prime'
    - tex: '\mathrm{HCF}(a,b) \times \mathrm{LCM}(a,b) = a \times b'
      label: 'Two numbers only'
  conditions:
    - 'Whole numbers greater than 1 (1 is neither prime nor composite)'
    - 'The order of the prime factors is ignored'
    - 'Holds in the ordinary integers because division with remainder works there; some other number systems lose uniqueness'
    - 'HCF × LCM = product is true for exactly two numbers, not three or more'
  sign: 'Commonest slip: using HCF × LCM = product for three numbers. Second: counting 1 as a prime.'
outcomes:
  - 'Write any number as a product of prime powers with a factor tree'
  - 'Find the HCF and LCM of several numbers prime by prime, and use HCF × LCM = ab for two numbers'
  - 'Use uniqueness to prove that a number cannot have a certain factor, such as 6^n never ending in 0'
  - 'Run Euclid''s algorithm and write the HCF as a combination ax + by'
  - 'Prove the theorem from Euclid''s lemma and use prime exponents on olympiad problems'
opener:
  story: |
    In parts of the eastern United States, once every 17 years, billions of cicadas crawl out of the ground on the same few nights. They sing for a few weeks, lay eggs and die. Their young burrow down and vanish for exactly 17 years. Another set of broods runs on a 13-year clock. Not 12, not 15, not 16.

    Both 13 and 17 are prime. Coincidence? One popular hypothesis (not proven) says no. Suppose a predator has a boom year every 4 years. Cicadas on a 12-year clock would surface in a boom year every single time. Cicadas on a 13-year clock would meet a boom only once in 52 years.

    Behind that guess sits one of the oldest facts in mathematics: every whole number is built from primes in **exactly one way**. Which cycles line up, and how often, depends only on the primes they share. Let's test your instinct first.
  art: '<svg viewBox="0 0 320 200" role="img" aria-label="Timelines over 52 years: a predator peaks every 4 years; 12-year cicadas meet it every time, 13-year cicadas only at year 52"><line x1="30" y1="50" x2="290" y2="50" style="stroke:var(--muted);stroke-width:1"/><line x1="30" y1="110" x2="290" y2="110" style="stroke:var(--muted);stroke-width:1"/><line x1="30" y1="170" x2="290" y2="170" style="stroke:var(--muted);stroke-width:1"/><g style="fill:var(--muted)"><circle cx="30" cy="50" r="3"/><circle cx="50" cy="50" r="3"/><circle cx="70" cy="50" r="3"/><circle cx="90" cy="50" r="3"/><circle cx="110" cy="50" r="3"/><circle cx="130" cy="50" r="3"/><circle cx="150" cy="50" r="3"/><circle cx="170" cy="50" r="3"/><circle cx="190" cy="50" r="3"/><circle cx="210" cy="50" r="3"/><circle cx="230" cy="50" r="3"/><circle cx="250" cy="50" r="3"/><circle cx="270" cy="50" r="3"/><circle cx="290" cy="50" r="3"/></g><g style="fill:var(--c);stroke:var(--c);stroke-width:2"><circle cx="30" cy="110" r="6"/><circle cx="90" cy="110" r="6"/><circle cx="150" cy="110" r="6"/><circle cx="210" cy="110" r="6"/><circle cx="270" cy="110" r="6"/><circle cx="30" cy="170" r="6"/><circle cx="290" cy="170" r="6"/></g><g style="fill:var(--surface);stroke:var(--c);stroke-width:2"><circle cx="95" cy="170" r="6"/><circle cx="160" cy="170" r="6"/><circle cx="225" cy="170" r="6"/></g><text x="20" y="32" style="font-size:11px;fill:var(--muted)">predator boom: every 4 years</text><text x="20" y="92" style="font-size:11px;fill:var(--muted)">12-year cicadas: meet it every time</text><text x="20" y="152" style="font-size:11px;fill:var(--muted)">13-year cicadas: meet it at year 52</text><text x="20" y="194" style="font-size:11px;fill:var(--muted)">year 0</text><text x="300" y="194" text-anchor="end" style="font-size:11px;fill:var(--muted)">year 52</text></svg>'
symbols:
  - s: 'n'
    means: 'the whole number being split into primes (pure number, no unit)'
  - s: 'p'
    means: 'a prime: a whole number above 1 whose only divisors are 1 and itself'
  - s: 'a_i'
    means: 'exponent: how many times the prime p_i occurs in n'
  - s: '\mathrm{HCF}(a,b)'
    means: 'highest common factor of a and b, also written gcd(a, b)'
  - s: '\mathrm{LCM}(a,b)'
    means: 'lowest common multiple of a and b'
  - s: 'a \mid b'
    means: 'a divides b: b is a whole-number multiple of a'
  - s: 'q,\ r'
    means: 'quotient and remainder when one number is divided by another, with 0 ≤ r < divisor'
  - s: 'v_p(n)'
    means: 'the exponent of the prime p in n (olympiad notation)'
  - s: 'n!'
    means: 'n factorial, the product 1 × 2 × 3 × ... × n'
  - s: 'N(\alpha)'
    means: 'norm of a + b√−6, equal to a² + 6b² (olympiad section only)'
life:
  - 'Periodical cicadas surface every 13 or 17 years; one hypothesis is that prime cycles rarely line up with predator cycles.'
  - 'The RSA system behind much internet encryption relies on this: multiplying two huge primes takes a moment, but recovering them from the product is impossibly slow.'
  - 'Gear makers often choose tooth counts that share no prime (say 13 and 40), so every tooth meets every other tooth and wear spreads evenly.'
  - 'If one bus leaves every 12 minutes and another every 18, they leave together every LCM(12, 18) = 36 minutes.'
  - 'The largest square tile that exactly covers a 360 cm by 240 cm floor has side HCF(360, 240) = 120 cm.'
models:
  - name: 'Break it into atoms'
    text: 'Understand a complicated thing by splitting it into parts that cannot be split further, and recording how many of each. Chemists do it with elements, accountants with line items, biologists with the four letters of DNA. Once the recipe is known, comparisons become easy.'
  - name: 'Existence is not uniqueness'
    text: '"There is a way" and "there is only one way" are different claims. The second is far more powerful: a unique ID (a fingerprint, an Aadhaar number, a prime recipe) lets you identify, compare and rule things out. Always ask which of the two you actually know.'
  - name: 'Common ground and the smallest shared plan'
    text: 'The HCF is what every party already has in common; the LCM is the smallest plan that satisfies everyone''s needs at once. In a negotiation, start from the first and aim for the second.'
links:
  - leaf: 'mat/hcf-and-lcm'
    name: 'HCF and LCM'
    same: 'The same two numbers: the biggest shared divisor and the smallest shared multiple, used for tiles, bunches and timetables.'
    differs: 'There they are found by listing or repeated division. Here the prime recipe explains why the smallest-power and largest-power rules work, and why HCF × LCM = ab.'
  - leaf: 'mat/primes-and-factorisation'
    name: 'Primes and factorisation'
    same: 'Factor trees and the idea of primes as building blocks.'
    differs: 'That lesson shows a factorisation exists. This one proves it is unique, and uniqueness is what lets you conclude that a factor is impossible.'
  - leaf: 'mat/irrational-numbers'
    name: 'Irrational numbers'
    same: 'Uniqueness of the prime recipe is the whole engine of the proof that $\sqrt 2$ is not a fraction.'
    differs: 'There it is used to show that an equation like $a^2 = 2b^2$ cannot hold, by comparing how many 2s each side has.'
  - leaf: 'mat/modular-arithmetic'
    name: 'Modular arithmetic'
    same: 'Euclid''s algorithm and Bézout''s identity, $ax + by = \mathrm{HCF}(a,b)$, carry over directly.'
    differs: 'Modular arithmetic works with remainders instead of factors; Bézout becomes the tool for dividing modulo a prime.'
  - leaf: 'cs/cryptography-basics'
    name: 'Hashing, encryption and signatures'
    same: 'RSA keys are products of two large primes; their security rests on the gap between easy multiplying and hard factorising, while Euclid''s algorithm builds the keys.'
    differs: 'Cryptography cares about running time on 600-digit numbers; the theorem only says the factorisation exists and is unique, not how to find it fast.'
next:
  q: 'If every number has one prime recipe, what about $\sqrt 2$? Could some fraction $a/b$, squared, give exactly 2, or does the recipe forbid it?'
  leaf: 'mat/irrational-numbers'
  name: 'Irrational numbers'
---

:::hook
q: A predator has a boom year every 6 years. Which cicada cycle would meet a boom year least often?
options: ["12 years", "15 years", "17 years", "18 years"]
answer: 2
right: Yes. 17 shares no prime with 6 = 2 × 3, so the first common year is 6 × 17 = 102. A 12- or 18-year cycle contains the whole of 6 and meets a boom every time; 15 = 3 × 5 shares the 3 and meets one every 30 years.
wrong: List the years. 12 and 18 are multiples of 6, so those cicadas meet a boom every time they surface. 15 meets one at 30. 17 shares no prime with 6, so the first meeting is at 6 × 17 = 102 years.
:::

## Primes are the atoms {lvl=1 id=s-atoms label="Class 10"}

Take 360 and start breaking it. 360 = 36 × 10. Then 36 = 6 × 6, each 6 = 2 × 3, and 10 = 2 × 5. Now nothing will break further: 2, 3 and 5 can only be written as 1 times themselves.

Numbers like that are called **primes**: whole numbers above 1 whose only divisors are 1 and the number itself. The first few are 2, 3, 5, 7, 11, 13. A number above 1 that is not prime is **composite**, because it can be composed from smaller pieces. The number 1 is neither.

So 360 = 2 × 2 × 2 × 3 × 3 × 5. Group the repeats with powers and you get

$$360 = 2^3 \times 3^2 \times 5.$$

Read it as: three 2s, two 3s and one 5. This is the **prime factorisation** of 360, its recipe in the smallest possible ingredients.

Why must the breaking always stop? Each split gives two pieces bigger than 1, so each piece is smaller than the number it came from. Whole numbers cannot keep shrinking for ever, so after a finite number of splits every piece is prime. That is the *existence* half of the story: every number above 1 has at least one prime recipe.

NCERT tries some bigger ones: $32760 = 2^3 \times 3^2 \times 5 \times 7 \times 13$, and $123456789 = 3^2 \times 3803 \times 3607$.

:::figure caption="Two people factorise 360 in different ways. One starts with 36 × 10, the other with 8 × 45. The trees look nothing alike, but the primes at the ends (circled) are the same: three 2s, two 3s and one 5."
<svg viewBox="0 0 520 240" role="img" aria-label="Two different factor trees of 360 ending in the same primes">
<line class="faint" x1="260" y1="10" x2="260" y2="190" style="stroke-dasharray:4 4"/>
<g class="pen">
<line x1="125" y1="36" x2="80" y2="66"/><line x1="135" y1="36" x2="185" y2="66"/>
<line x1="70" y1="86" x2="48" y2="114"/><line x1="80" y1="86" x2="102" y2="114"/>
<line x1="185" y1="86" x2="172" y2="114"/><line x1="195" y1="86" x2="208" y2="114"/>
<line x1="42" y1="136" x2="32" y2="164"/><line x1="48" y1="136" x2="58" y2="164"/>
<line x1="102" y1="136" x2="92" y2="164"/><line x1="108" y1="136" x2="118" y2="164"/>
<line x1="385" y1="36" x2="340" y2="66"/><line x1="395" y1="36" x2="445" y2="66"/>
<line x1="330" y1="86" x2="312" y2="114"/><line x1="340" y1="86" x2="358" y2="114"/>
<line x1="355" y1="136" x2="347" y2="164"/><line x1="365" y1="136" x2="373" y2="164"/>
<line x1="445" y1="86" x2="432" y2="114"/><line x1="455" y1="86" x2="478" y2="114"/>
<line x1="425" y1="136" x2="417" y2="164"/><line x1="435" y1="136" x2="443" y2="164"/>
</g>
<g style="fill:color-mix(in srgb,var(--mat) 22%,transparent);stroke:var(--mat);stroke-width:1.5">
<circle cx="172" cy="126" r="11"/><circle cx="208" cy="126" r="11"/>
<circle cx="30" cy="176" r="11"/><circle cx="60" cy="176" r="11"/><circle cx="90" cy="176" r="11"/><circle cx="120" cy="176" r="11"/>
<circle cx="310" cy="126" r="11"/><circle cx="480" cy="126" r="11"/>
<circle cx="345" cy="176" r="11"/><circle cx="375" cy="176" r="11"/><circle cx="415" cy="176" r="11"/><circle cx="445" cy="176" r="11"/>
</g>
<g text-anchor="middle">
<text x="130" y="30">360</text><text x="75" y="80">36</text><text x="190" y="80">10</text>
<text x="45" y="130">6</text><text x="105" y="130">6</text><text x="172" y="130">2</text><text x="208" y="130">5</text>
<text x="30" y="180">2</text><text x="60" y="180">3</text><text x="90" y="180">2</text><text x="120" y="180">3</text>
<text x="390" y="30">360</text><text x="335" y="80">8</text><text x="450" y="80">45</text>
<text x="310" y="130">2</text><text x="360" y="130">4</text><text x="430" y="130">9</text><text x="480" y="130">5</text>
<text x="345" y="180">2</text><text x="375" y="180">2</text><text x="415" y="180">3</text><text x="445" y="180">3</text>
<text x="130" y="212">360 = 2³ × 3² × 5</text><text x="390" y="212">360 = 2³ × 3² × 5</text>
<text x="130" y="232" style="fill:var(--muted)">first split 36 × 10</text><text x="390" y="232" style="fill:var(--muted)">first split 8 × 45</text>
</g>
</svg>
:::

:::qc lvl=1
q: What is the prime factorisation of 1176?
options: ["2³ × 3 × 7²", "2² × 3 × 7²", "2³ × 3² × 7", "2⁴ × 7²"]
answer: 0
right: Right. 1176 = 2 × 588 = 2² × 294 = 2³ × 147, and 147 = 3 × 49 = 3 × 7². Check: 8 × 3 × 49 = 1176.
wrong: Halve as long as you can: 1176 → 588 → 294 → 147, so three 2s. Then 147 = 3 × 49 = 3 × 7 × 7.
:::

:::note title="How many atoms are there?"
Euclid answered this around 300 BC. Suppose the primes stopped somewhere, so that 2, 3, 5, ..., P were all of them. Multiply them all together and add 1. Dividing this new number by any prime on the list leaves remainder 1, so none of them divides it. But it is bigger than 1, so it has some prime factor, and that prime is not on the list. So no finite list can hold every prime: there are infinitely many.

Careful: the new number need not itself be prime. $2 \times 3 \times 5 \times 7 \times 11 \times 13 + 1 = 30031 = 59 \times 509$. It is the primes 59 and 509, missing from the list, that break the assumption.
:::

## One number, one recipe {lvl=1 id=s-unique label="Class 10"}

Look at the two trees again. Different first splits, completely different branches, and yet the same six primes at the bottom. Try any number, split it any way you like, and the same thing happens. NCERT states it like this:

:::law caption="Theorem 1.1 (Fundamental Theorem of Arithmetic), NCERT Class 10"
Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.
:::

"Unique apart from the order" means that $2 \times 3 \times 5$ and $5 \times 2 \times 3$ count as the same recipe. If we agree to write the primes in increasing order, every number gets exactly one recipe, like a fingerprint.

This is also why 1 is not a prime. If it were, 6 could be written as $2 \times 3$, or $1 \times 2 \times 3$, or $1 \times 1 \times 2 \times 3$, and "unique" would be false. Mathematicians leave 1 out so the theorem stays clean.

The real power is in what uniqueness lets you *rule out*. Existence only says "there is a recipe". Uniqueness says "and there is no other", so a prime that is missing from the recipe can never turn up.

:::worked title="Can 4ⁿ ever end in the digit 0? (NCERT Example 1)"
A number ends in 0 exactly when it is divisible by 10 = 2 × 5. So its recipe must contain the prime 5.

Now $4^n = (2^2)^n = 2^{2n}$: the recipe is nothing but 2s. Because the recipe is unique, there is no second way of factorising $4^n$ that might sneak in a 5.

So $4^n$ is never divisible by 5, and never ends in 0. (Indeed 4, 16, 64, 256, 1024, ... end in 4 or 6.)
:::

Notice which half did the work. Existence alone would allow a second, different factorisation containing a 5. Uniqueness forbids it.

:::qc lvl=1
q: Can 15ⁿ end in the digit 0 for some natural number n?
options: ["No, never", "Yes, when n is even", "Yes, when n is a multiple of 5"]
answer: 0
right: Right. 15ⁿ = 3ⁿ × 5ⁿ has 5s but no 2, and ending in 0 needs both. In fact 15ⁿ always ends in 5.
wrong: Ending in 0 needs the primes 2 and 5. The recipe of 15ⁿ is 3ⁿ × 5ⁿ, which has no 2, and uniqueness says no other recipe exists.
:::

## HCF and LCM, prime by prime {lvl=1 id=s-hcf-lcm label="Class 10"}

You want to cover a 72 cm by 120 cm floor with identical square tiles, without cutting any. The tile side must divide both 72 and 120, and you want the biggest such side. That is the **highest common factor** (HCF) of 72 and 120.

The recipes are $72 = 2^3 \times 3^2$ and $120 = 2^3 \times 3 \times 5$. Because recipes are unique, the divisors of 72 are exactly the numbers you can build using *no more* of each prime than 72 has: at most three 2s, at most two 3s, no 5s. A common divisor must obey both limits, so for each prime it can use only the **smaller** of the two powers:

$$\mathrm{HCF}(72, 120) = 2^3 \times 3^1 = 24.$$

Now flip the question. One timetable repeats every 72 minutes and another every 120; when do they next coincide? You need a number that is a multiple of both. Such a number must contain each whole recipe, so for each prime it needs the **larger** of the two powers. That gives the **lowest common multiple** (LCM):

$$\mathrm{LCM}(72, 120) = 2^3 \times 3^2 \times 5 = 360.$$

:::figure caption="The primes of 72 and 120 as two overlapping sets. The overlap (what both share) multiplies to the HCF, 24. Everything, counted once, multiplies to the LCM, 360."
<svg viewBox="0 0 520 236" role="img" aria-label="Venn diagram of the prime factors of 72 and 120">
<circle cx="205" cy="105" r="85" style="fill:color-mix(in srgb,var(--mat) 12%,transparent);stroke:var(--mat);stroke-width:2"/>
<circle cx="315" cy="105" r="85" style="fill:color-mix(in srgb,var(--phy) 12%,transparent);stroke:var(--phy);stroke-width:2"/>
<g text-anchor="middle">
<text x="150" y="14">72 = 2³ × 3²</text><text x="370" y="14">120 = 2³ × 3 × 5</text>
<text x="160" y="110">3</text>
<text x="260" y="70">2</text><text x="260" y="93">2</text><text x="260" y="116">2</text><text x="260" y="139">3</text>
<text x="360" y="110">5</text>
<text x="260" y="210">overlap: HCF = 2³ × 3 = 24</text>
<text x="260" y="228" style="fill:var(--muted)">all, once each: LCM = 2³ × 3² × 5 = 360</text>
</g>
</svg>
:::

Here is a neat consequence. For every prime, the smaller power plus the larger power equals the two powers added together (for the prime 3 above: 1 + 2 = 2 + 1). So multiplying the HCF by the LCM uses up every prime of both numbers exactly once:

$$\mathrm{HCF}(a,b) \times \mathrm{LCM}(a,b) = a \times b.$$

Read it as: highest common factor times lowest common multiple equals the product of the two numbers. Check: $24 \times 360 = 8640 = 72 \times 120$.

It fails for three numbers. With three powers of a prime, the smallest plus the largest misses the middle one. NCERT's Example 4 shows it: for 6, 72 and 120, HCF = 6 and LCM = 360, so HCF × LCM = 2160, but $6 \times 72 \times 120 = 51840$.

:::qc lvl=1
q: Find the HCF and LCM of 84 and 90.
options: ["6 and 1260", "6 and 7560", "12 and 630"]
answer: 0
right: Right. 84 = 2² × 3 × 7 and 90 = 2 × 3² × 5. HCF takes 2¹ × 3¹ = 6; LCM takes 2² × 3² × 5 × 7 = 1260. And 6 × 1260 = 7560 = 84 × 90.
wrong: Factorise: 84 = 2² × 3 × 7, 90 = 2 × 3² × 5. HCF: smaller power of each common prime. LCM: larger power of every prime. Then check HCF × LCM = 84 × 90.
:::

## Counting divisors, spotting squares {lvl=2 id=s-divisors label="Class 12"}

The recipe works like a menu. Every divisor of $360 = 2^3 \times 3^2 \times 5$ is made by choosing how many 2s (0, 1, 2 or 3), how many 3s (0, 1 or 2) and how many 5s (0 or 1). Different choices give different divisors, again because recipes are unique. So 360 has

$$4 \times 3 \times 2 = 24 \text{ divisors}.$$

In general, if $n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$, the number of divisors is $(a_1 + 1)(a_2 + 1)\cdots(a_k + 1)$. Read it as: one more than each exponent, all multiplied. The "+1" is the choice of using none of that prime.

Squares have a clean signature. Squaring a number doubles every exponent in its recipe. So a number is a **perfect square exactly when every exponent is even**. 360 has exponents 3, 2, 1, so it is not a square; multiply by $2 \times 5 = 10$ to make all exponents even, and $3600 = 60^2$.

:::note title="A puzzle to ask people"
A corridor has 100 closed lockers. Student 1 opens every locker. Student 2 toggles every 2nd locker, student 3 every 3rd, and so on up to student 100. Which lockers end up open?

Locker $n$ is toggled once for each divisor of $n$. Divisors usually pair up ($d$ with $n/d$), giving an even count. The pairing fails only when $d = n/d$, that is, when $n$ is a perfect square, which then has an odd number of divisors. So exactly the squares stay open: 1, 4, 9, ..., 100. Ten lockers.
:::

The even-exponent test is also the seed of the next lesson. If $a^2 = 2b^2$, the left side has an even number of 2s and the right side an odd number. One recipe cannot be both.

:::qc lvl=2
q: How many positive divisors does 144 = 2⁴ × 3² have?
options: ["8", "15", "6"]
answer: 1
right: Right: (4 + 1)(2 + 1) = 15. An odd count, as it must be for a perfect square (144 = 12²).
wrong: Add 1 to each exponent and multiply: (4 + 1)(2 + 1).
:::

## Euclid's algorithm {lvl=2 id=s-euclid label="Class 12"}

Factorising a big number is slow. For a number with hundreds of digits nobody on Earth knows how to do it in reasonable time, which is exactly what keeps RSA encryption safe. Yet a computer finds the HCF of two such numbers in a blink. How, without factorising?

The trick is about 2300 years old. When you divide $a$ by $b$ you get a quotient and a remainder: $a = qb + r$, with the remainder $r$ smaller than $b$. This always works and is called the **division algorithm** (older NCERT editions called it Euclid's division lemma).

Now the key observation, in words first. Anything that divides both $a$ and $b$ also divides $a - qb$, which is $r$. And anything that divides both $b$ and $r$ also divides $qb + r$, which is $a$. So the pair $(a, b)$ and the pair $(b, r)$ have *exactly the same* common divisors, and therefore the same highest one:

$$\mathrm{HCF}(a, b) = \mathrm{HCF}(b, r).$$

Read it as: the HCF does not change when you replace the bigger number by its remainder. Repeat until the remainder is 0; the last nonzero remainder is the HCF.

:::figure caption="Euclid's algorithm as a picture. Cut the largest possible squares from a 26 by 10 rectangle, then from what is left, and so on. The last square size that fits exactly, 2, is HCF(26, 10)."
<svg viewBox="0 0 520 232" role="img" aria-label="A 26 by 10 rectangle cut into squares of side 10, 10, 6, 4, 2 and 2">
<rect x="52" y="16" width="160" height="160" style="fill:color-mix(in srgb,var(--mat) 14%,transparent);stroke:var(--ink);stroke-width:1.5"/>
<rect x="212" y="16" width="160" height="160" style="fill:color-mix(in srgb,var(--mat) 14%,transparent);stroke:var(--ink);stroke-width:1.5"/>
<rect x="372" y="16" width="96" height="96" style="fill:color-mix(in srgb,var(--mat) 28%,transparent);stroke:var(--ink);stroke-width:1.5"/>
<rect x="372" y="112" width="64" height="64" style="fill:color-mix(in srgb,var(--mat) 42%,transparent);stroke:var(--ink);stroke-width:1.5"/>
<rect x="436" y="112" width="32" height="32" style="fill:color-mix(in srgb,var(--mat) 60%,transparent);stroke:var(--ink);stroke-width:1.5"/>
<rect x="436" y="144" width="32" height="32" style="fill:color-mix(in srgb,var(--mat) 60%,transparent);stroke:var(--ink);stroke-width:1.5"/>
<g text-anchor="middle">
<text x="132" y="100">10</text><text x="292" y="100">10</text><text x="420" y="68">6</text><text x="404" y="148">4</text><text x="452" y="132">2</text><text x="452" y="164">2</text>
<text x="260" y="11" style="fill:var(--muted)">26</text>
<text x="95" y="200">26 = 2×10 + 6</text><text x="215" y="200">10 = 1×6 + 4</text><text x="335" y="200">6 = 1×4 + 2</text><text x="455" y="200">4 = 2×2 + 0</text>
<text x="260" y="224" style="fill:var(--mat)">last nonzero remainder: HCF = 2</text>
</g>
<text x="44" y="100" text-anchor="end" style="fill:var(--muted)">10</text>
</svg>
:::

:::worked title="HCF of 1071 and 462 by Euclid's algorithm"
$1071 = 2 \times 462 + 147$

$462 = 3 \times 147 + 21$

$147 = 7 \times 21 + 0$

The last nonzero remainder is 21, so HCF(1071, 462) = 21. Check with recipes: $1071 = 3^2 \times 7 \times 17$ and $462 = 2 \times 3 \times 7 \times 11$, sharing $3 \times 7 = 21$. Three divisions instead of two factorisations.
:::

Why is it so fast? Every two steps, the remainder at least halves. (If the next remainder is already at most half, fine; if it is more than half, the one after it is the difference, which is less than half.) So two numbers with 300 digits need at most about 2000 steps, nothing for a computer.

:::qc lvl=2
q: Use Euclid's algorithm to find HCF(391, 299).
options: ["13", "17", "23", "1"]
answer: 2
right: Right. 391 = 1 × 299 + 92, 299 = 3 × 92 + 23, 92 = 4 × 23 + 0. Indeed 391 = 17 × 23 and 299 = 13 × 23.
wrong: Divide and keep the remainders: 391 = 1 × 299 + 92, then 299 = 3 × 92 + 23, then 92 = 4 × 23 + 0. The last nonzero remainder is the HCF.
:::

## Why uniqueness needs a proof {lvl=3 id=s-even-world label="JEE"}

Uniqueness feels obvious. Zeitz (§7.1, Example 7.1.2) shows why it is not, with a thought experiment: imagine a world that contains only the **even** numbers 2, 4, 6, 8, ...

In that world, call a number "prime" if it is not a product of two numbers of the world. Since 4 = 2 × 2 and 8 = 2 × 4, those are out. But 2, 6, 10, 14, 18, 30 cannot be split into two even numbers, so they are the primes of this world (they are exactly the numbers of the form 2 × odd). Now look at 60:

$$60 = 2 \times 30 = 6 \times 10.$$

Two different factorisations into "primes". Existence still holds (every even number breaks down eventually), but uniqueness is gone. So uniqueness is not plain logic; it is a special property of the ordinary integers, and it needs a reason.

What exactly went wrong? The "prime" 6 divides $60 = 2 \times 30$, yet it divides neither 2 nor 30 inside this world ($30 = 6 \times 5$, and 5 does not live there). The property that fails is: *if a prime divides a product, it divides one of the factors.* In the ordinary integers that property is true, it is called **Euclid's lemma**, and it is the heart of the proof. The division algorithm also fails in the even world, and Zeitz pins the blame there: it is the ingredient that makes Euclid's lemma work.

:::qc lvl=3
q: Take the world of numbers 1, 5, 9, 13, 17, 21, ... (one more than a multiple of 4). A product of two such numbers stays in the world. Which fact shows that factorisation there is not unique?
options: ["441 = 9 × 49 = 21 × 21, and 9, 21, 49 cannot be split inside the world", "45 = 5 × 9 in only one way", "25 = 5 × 5 in only one way"]
answer: 0
right: Right. 3 and 7 are not in this world, so 9, 21 and 49 have no factors there; they are its primes. Yet 441 has two different factorisations into them.
wrong: Check 441 = 9 × 49 = 21 × 21. In this world 3 and 7 do not exist, so 9, 21 and 49 cannot be split: they are "primes", and 441 has two recipes.
:::

## The HCF as a combination {lvl=3 id=s-bezout label="JEE"}

Run Euclid's algorithm backwards and something surprising appears. For 26 and 10 the steps were $26 = 2 \times 10 + 6$, $10 = 6 + 4$, $6 = 4 + 2$. Rewrite each step as "remainder = ..." and substitute upwards:

$$2 = 6 - 4 = 6 - (10 - 6) = 2 \times 6 - 10 = 2(26 - 2 \times 10) - 10 = 2 \times 26 - 5 \times 10.$$

So the HCF, 2, is a combination of 26 and 10 with whole-number multipliers (one of them negative). This always works, and it is called **Bézout's identity**: for any whole numbers $a$ and $b$ there are integers $x$ and $y$ with

$$ax + by = \mathrm{HCF}(a, b).$$

Read it as: some multiple of $a$ plus some multiple of $b$ lands exactly on their HCF. Zeitz (Fact 7.1.5) states it sharply: the HCF is the **smallest positive** number of the form $ax + by$. Every such number is a multiple of the HCF (because the HCF divides $a$ and $b$), and Euclid's algorithm shows the HCF itself is reached.

A real-life version: with a 3-litre jug and a 5-litre jug and a tap, you can measure exactly 1 litre ($2 \times 3 - 5$), and so any whole number of litres. With a 4-litre and a 6-litre jug you can never measure an odd amount, because every combination is a multiple of HCF(4, 6) = 2.

Now Euclid's lemma drops out in three lines. Suppose a prime $p$ divides a product $ab$, but does not divide $a$. The only divisors of $p$ are 1 and $p$, so HCF($p$, $a$) = 1, and Bézout gives $px + ay = 1$. Multiply by $b$:

$$pbx + aby = b.$$

Both terms on the left are multiples of $p$ (the second because $p$ divides $ab$), so $p$ divides $b$.

:::worked title="Write 21 = HCF(1071, 462) as a combination"
From the steps above: $21 = 462 - 3 \times 147$ and $147 = 1071 - 2 \times 462$. Substitute:
$$21 = 462 - 3(1071 - 2 \times 462) = 7 \times 462 - 3 \times 1071.$$
Check: $3234 - 3213 = 21$. The multipliers are not unique: adding $462/21 = 22$ to the multiplier of 1071 and subtracting $1071/21 = 51$ from that of 462 gives another pair.
:::

A consequence used constantly: the equation $ax + by = c$ has whole-number solutions exactly when HCF($a$, $b$) divides $c$.

:::qc lvl=3
q: Does 6x + 15y = 7 have a solution in integers x, y?
options: ["Yes", "No, because HCF(6, 15) = 3 does not divide 7", "Only if x = y"]
answer: 1
right: Right. Every value of 6x + 15y is a multiple of 3, and 7 is not.
wrong: 3 divides both 6 and 15, so it divides 6x + 15y for every choice of x and y. Can that ever be 7?
:::

## Proving the theorem {lvl=3 id=s-proof label="JEE"}

We now have every brick. The proof has two halves.

**Existence.** Suppose some numbers above 1 had no prime factorisation, and let $N$ be the smallest of them. $N$ is not prime (a prime is its own factorisation), so $N = ab$ with both $a$ and $b$ between 1 and $N$. Being smaller than $N$, both $a$ and $b$ do have factorisations; put them side by side and you have one for $N$. Contradiction, so there is no such $N$. (This "smallest counterexample" argument is strong induction in disguise, Zeitz 7.1.1.)

**Uniqueness.** Suppose $p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s$, with all the $p$'s and $q$'s prime. The prime $p_1$ divides the right side, so by Euclid's lemma (used again and again) it divides some $q_j$. But $q_j$ is prime, so $p_1 = q_j$. Cancel it from both sides and repeat. Each round removes one prime from each side. If one side ran out first, it would equal 1 while the other is still a product of primes, bigger than 1. So both sides run out together, and the two lists are the same up to order.

Zeitz shows the cancelling on a tiny case: could $2^3 \times 7^6 = 2^8 \times 7^3$? Cancel $2^3$ and $7^3$ to get $7^3 = 2^5$. Now 7 divides the left side but, by Euclid's lemma, cannot divide a product of 2s. Impossible.

:::figure caption="The chain of ideas behind the theorem. Each link is proved from the one before it, starting from the fact that any set of whole numbers has a least element."
<svg viewBox="0 0 600 96" role="img" aria-label="Chain: well-ordering, division algorithm, Bezout identity, Euclid's lemma, unique factorisation">
<defs><marker id="ftaarr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--mat)"/></marker></defs>
<g style="fill:color-mix(in srgb,var(--mat) 12%,transparent);stroke:var(--mat);stroke-width:1.5">
<rect x="12" y="20" width="96" height="56" rx="6"/><rect x="132" y="20" width="96" height="56" rx="6"/><rect x="252" y="20" width="96" height="56" rx="6"/><rect x="372" y="20" width="96" height="56" rx="6"/><rect x="492" y="20" width="96" height="56" rx="6"/>
</g>
<g style="stroke:var(--mat);stroke-width:1.5">
<line x1="110" y1="48" x2="129" y2="48" marker-end="url(#ftaarr)"/><line x1="230" y1="48" x2="249" y2="48" marker-end="url(#ftaarr)"/><line x1="350" y1="48" x2="369" y2="48" marker-end="url(#ftaarr)"/><line x1="470" y1="48" x2="489" y2="48" marker-end="url(#ftaarr)"/>
</g>
<g text-anchor="middle">
<text x="60" y="45">well-ordering</text><text x="60" y="63" style="fill:var(--muted)">least case</text>
<text x="180" y="45">division</text><text x="180" y="63" style="fill:var(--muted)">algorithm</text>
<text x="300" y="45">Bézout</text><text x="300" y="63" style="fill:var(--muted)">ax + by = g</text>
<text x="420" y="45">Euclid's</text><text x="420" y="63" style="fill:var(--muted)">lemma</text>
<text x="540" y="45">unique</text><text x="540" y="63" style="fill:var(--muted)">factors</text>
</g>
</svg>
:::

:::qc lvl=3
q: In the world of even numbers, where 60 = 2 × 30 = 6 × 10, which link of the chain breaks?
options: ["Existence of a factorisation", "Euclid's lemma (a prime dividing a product divides a factor)", "Cancelling equal primes"]
answer: 1
right: Right. The "prime" 6 divides 2 × 30 but neither 2 nor 30, so the uniqueness argument cannot get started. Existence and cancelling still work there.
wrong: Every even number still breaks into even "primes", so existence is fine. What fails is that 6 divides 2 × 30 without dividing 2 or 30.
:::

## Thinking in exponents {lvl=4 id=s-vp label="Olympiad"}

The theorem says a number is completely described by one list: how many 2s, how many 3s, how many 5s, and so on. Give that count a name. For a prime $p$, let $v_p(n)$ be **the exponent of $p$ in the recipe of $n$**; so $v_2(360) = 3$, $v_3(360) = 2$, $v_7(360) = 0$.

Olympiad number theory runs on four rules, each just the theorem in disguise:

- Multiplying adds exponents: $v_p(ab) = v_p(a) + v_p(b)$, much like a logarithm.
- Divisibility compares exponents: $a \mid b$ exactly when $v_p(a) \le v_p(b)$ for every prime $p$.
- HCF and LCM: $v_p(\mathrm{HCF}) = \min(v_p(a), v_p(b))$ and $v_p(\mathrm{LCM}) = \max(v_p(a), v_p(b))$.
- A perfect $k$-th power is a number whose every exponent is a multiple of $k$.

**Primes in a factorial.** How many 2s are in $10! = 1 \times 2 \times \cdots \times 10$? Every even number gives one 2: that is $\lfloor 10/2 \rfloor = 5$. Multiples of 4 give a second: $\lfloor 10/4 \rfloor = 2$. Multiples of 8 give a third: 1. Total $5 + 2 + 1 = 8$. (Here $\lfloor x \rfloor$ means $x$ rounded down.) In general this is **Legendre's formula**:

$$v_p(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^2} \right\rfloor + \left\lfloor \frac{n}{p^3} \right\rfloor + \cdots$$

Read it as: count the multiples of $p$, then the multiples of $p^2$ again, and so on. Check: $10! = 3628800 = 2^8 \times 14175$.

**Coprime pieces of a square.** If $ab$ is a perfect square and HCF($a$, $b$) = 1, then $a$ and $b$ are both squares. Reason: each prime lives entirely in $a$ or entirely in $b$, and its total exponent is even. This settles, for instance, that $n(n+1)$ is never a perfect square for $n \ge 1$: consecutive numbers share no prime, so both would be squares, and no two positive squares differ by 1.

:::worked title="IMO 1959, Problem 1: (21n + 4)/(14n + 3) is always in lowest terms"
Let $d$ divide both $21n + 4$ and $14n + 3$. Choose multipliers that kill $n$:
$$3(14n + 3) - 2(21n + 4) = 42n + 9 - 42n - 8 = 1.$$
So $d$ divides 1, and the fraction cannot be cancelled for any natural number $n$. This "eliminate the variable" move is Euclid's algorithm applied to expressions, the same idea as Zeitz Example 7.1.8.
:::

:::qc lvl=4
q: What is v₃(30!), the exponent of 3 in 30!?
options: ["10", "13", "14"]
answer: 2
right: Right: ⌊30/3⌋ + ⌊30/9⌋ + ⌊30/27⌋ = 10 + 3 + 1 = 14. The 27 term is the one people forget.
wrong: Use Legendre: ⌊30/3⌋ + ⌊30/9⌋ + ⌊30/27⌋. Don't stop at 9; 27 is less than 30.
:::

## Where uniqueness breaks {lvl=4 id=s-fails label="Olympiad"}

The even-number world was a toy. Here is a serious number system where uniqueness fails, from Zeitz problem 7.1.14. Take all numbers $a + b\sqrt{-6}$ with $a$ and $b$ whole numbers. They add and multiply among themselves. In this system

$$10 = 2 \times 5 = (2 + \sqrt{-6})(2 - \sqrt{-6}),$$

since $(2 + \sqrt{-6})(2 - \sqrt{-6}) = 4 - (-6) = 10$.

To prove these are genuinely different, we need a way to measure size. Define the **norm** $N(a + b\sqrt{-6}) = a^2 + 6b^2$, which is a whole number (it is the squared distance from 0 of the complex number $a + b\sqrt{6}\,i$). The norm of a product is the product of the norms.

Now $N(2) = 4$, $N(5) = 25$ and $N(2 \pm \sqrt{-6}) = 10$. To split any of them into two smaller pieces, you would need a piece of norm 2 or 5. But $a^2 + 6b^2 = 2$ or $5$ is impossible: $b$ must be 0, and then $a^2 = 2$ or $5$ has no whole-number solution. So all four numbers are "primes" of this system, and 10 has two different recipes. Euclid's lemma fails too: 2 divides the product $(2 + \sqrt{-6})(2 - \sqrt{-6})$, but $(2 + \sqrt{-6})/2 = 1 + \tfrac12\sqrt{-6}$ is not in the system.

This is not a curiosity. In 1847 Gabriel Lamé announced a proof of Fermat's Last Theorem that silently assumed unique factorisation in a number system of this kind; Ernst Kummer had found that it can fail, and invented "ideal numbers" to restore a form of uniqueness [Unverified: dates and details from memory]. Much of modern algebraic number theory grew out of that repair.

:::qc lvl=4
q: In the numbers a + b√−6, what is the norm of 1 + √−6, and what does it tell you about 7?
options: ["N = 7, and 7 = (1 + √−6)(1 − √−6), so 7 is not a prime there", "N = 5, so 1 + √−6 divides 5", "N = 7, but 7 still cannot be split"]
answer: 0
right: Right. N = 1 + 6 = 7, and (1 + √−6)(1 − √−6) = 1 + 6 = 7. A prime of the ordinary integers can split in a bigger system.
wrong: N(a + b√−6) = a² + 6b², so N(1 + √−6) = 7. Multiply (1 + √−6)(1 − √−6) and see what you get.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Every number above 1 is a product of primes, in exactly one way apart from order. Primes are the atoms; 1 is not a prime. {lvl=1}
2. Uniqueness lets you rule things out: a prime missing from the recipe can never divide the number ($4^n$ never ends in 0). {lvl=1}
3. HCF: smaller power of each common prime. LCM: larger power of every prime. For two numbers only, HCF × LCM = product. {lvl=1}
4. Divisors of $p_1^{a_1}\cdots p_k^{a_k}$ number $(a_1+1)\cdots(a_k+1)$; a perfect square has all exponents even. {lvl=2}
5. Euclid's algorithm: HCF($a$, $b$) = HCF($b$, $r$); the last nonzero remainder is the HCF, found without factorising. {lvl=2}
6. Bézout: HCF($a$, $b$) = $ax + by$ for some integers; from it comes Euclid's lemma, and from that uniqueness. {lvl=3}
7. Think in exponents $v_p$: multiply means add, divide means compare, HCF/LCM mean min/max; Legendre counts primes in $n!$. {lvl=4}
8. Unique factorisation is a theorem about the integers, not logic: it fails for even numbers and for $a + b\sqrt{-6}$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- HCF × LCM = product holds for two numbers only; for three, compute HCF and LCM separately. {lvl=1}
- The HCF uses only primes common to *all* the numbers; a prime missing from one of them is left out. {lvl=1}
- "Ends in 0" needs both 2 and 5 in the recipe. $4^n$ and $6^n$ have 2s but no 5. {lvl=1}
- Factorise fully: 7429 looks prime but is 17 × 19 × 23. Test primes up to the square root before declaring a number prime. {lvl=1}
- The divisor count multiplies exponents plus one, not the exponents themselves. {lvl=2}
- In Euclid's algorithm the HCF is the last nonzero remainder, not the last quotient. {lvl=2}
- Bézout multipliers are not unique; one of them is usually negative. {lvl=3}
- In Legendre's formula keep adding $\lfloor n/p^k \rfloor$ until $p^k > n$; the higher powers are easy to forget. {lvl=4}
:::
