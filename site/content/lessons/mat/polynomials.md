---
title: Polynomials
summary: "A curve's crossings with the ground are hidden in its coefficients: their sum and product can be read off without solving."
ncert: ["Class 10 Mathematics · Ch 2 Polynomials (§2.2–2.3)"]
up_to: Olympiad
builds_on: [Irrational numbers, Algebraic expressions and identities]
notes_prompt: Explain to a friend, without solving anything, why the two zeroes of x² − 7x + 10 must add up to 7 and multiply to 10.
margin:
  - kind: history
    title: History
    text: "The French lawyer François Viète (Vieta in Latin, about 1540–1603) wrote equations with letters for the known numbers and noticed how roots sit inside coefficients; the formulas carry his name. Much later Abel and Ruffini showed that no formula built from roots (square roots, cube roots and so on) solves every degree-5 equation. [Unverified: dates from memory.]"
  - kind: tip
    title: Exam favourite
    text: "For ax² + bx + c: sum of zeroes −b/a, product c/a. The minus sign sits on the sum. For a cubic the signs go −, +, −."
  - kind: olympiad
    title: Olympiad link
    text: "To know the zeroes is to know the polynomial. When a problem hands you values that are not zeroes, build a new polynomial whose zeroes they are (Zeitz, §5.4)."
books:
  - { title: "NCERT Mathematics Class X (reprint 2026-27)", ref: "Ch 2 Polynomials, §2.2 geometrical meaning of zeroes, §2.3 zeroes and coefficients, Summary" }
  - { title: "Paul Zeitz, The Art and Craft of Problem Solving, 2nd ed. (Wiley, 2007)", ref: "§5.4 Polynomials, pp. 164–173: division and the remainder and factor theorems, Example 5.4.2 (p. 167) on building a polynomial from its zeroes, Example 5.4.3 (pp. 169–170) on zeros and coefficients, Example 5.4.4 (p. 171) on the rational roots theorem, problems 5.4.6–5.4.23 (pp. 172–173)" }
cards:
  - { front: 'What is a zero of a polynomial, in a picture?', back: 'An input $k$ with $p(k) = 0$: the x-coordinate of a point where the graph of $y = p(x)$ meets the x-axis.' }
  - { front: 'Sum and product of the zeroes of $ax^2 + bx + c$?', back: 'Sum $-b/a$, product $c/a$. They come from multiplying out $a(x-\alpha)(x-\beta)$.' }
  - { front: 'Zero relations for $ax^3 + bx^2 + cx + d$?', back: 'Sum $-b/a$; sum of products in pairs $c/a$; product $-d/a$. Signs alternate.' }
  - { front: 'Remainder theorem?', back: 'Dividing $p(x)$ by $x - k$ leaves remainder $p(k)$. So $x - k$ is a factor exactly when $p(k) = 0$.' }
  - { front: 'How many zeroes can a degree-$n$ polynomial have?', back: 'At most $n$: each zero peels off a factor $(x - k)$ and lowers the degree by one.' }
  - { front: 'Rational root theorem?', back: 'If $p/q$ in lowest terms is a zero of an integer polynomial, then $p$ divides the constant term and $q$ divides the leading coefficient.' }
core:
  idea: 'A zero of a polynomial is an input that makes it 0, which is where its graph meets the x-axis. Multiply out $a(x-\alpha)(x-\beta)$ and the zeroes show up in the coefficients: their sum is $-b/a$ and their product is $c/a$.'
  formulas:
    - tex: '\alpha + \beta = -\dfrac{b}{a},\qquad \alpha\beta = \dfrac{c}{a}'
      label: 'Zeroes of ax² + bx + c'
    - tex: '\alpha+\beta+\gamma = -\dfrac{b}{a},\quad \alpha\beta+\beta\gamma+\gamma\alpha = \dfrac{c}{a},\quad \alpha\beta\gamma = -\dfrac{d}{a}'
      label: 'Zeroes of ax³ + bx² + cx + d'
    - tex: 'p(x) = (x-k)\,q(x) + p(k)'
      label: 'Remainder theorem: x − k is a factor exactly when p(k) = 0'
  conditions:
    - 'The leading coefficient a is not zero (otherwise the degree drops)'
    - 'Zeroes are counted with repetition: a point where the graph only touches the axis, like x² at 0, counts twice'
    - 'The relations hold for all the zeroes, real or not; a graph shows only the real ones'
  sign: 'Signs alternate: sum −b/a, pairs +c/a, triple −d/a. The commonest slip is dropping the minus on the sum.'
outcomes:
  - 'Count the zeroes of a polynomial from its graph by finding where it meets the x-axis'
  - 'Read the sum and product of the zeroes of a quadratic from its coefficients, and build a quadratic from them'
  - 'Divide polynomials and use the remainder and factor theorems to find factors and unknown coefficients'
  - 'Use Vieta''s formulas for any degree to evaluate symmetric expressions in the roots without solving'
  - 'Apply the rational root theorem and integer divisibility tricks to olympiad problems'
opener:
  story: |
    A roller-coaster designer sketches a track that swoops up, dives underground into a tunnel, and climbs out again. Its height above the ground at distance $x$ along the park follows a rule like $y = x^3 - 6x^2 + 11x - 6$. The builders need one thing from her: **where does the track meet ground level?** That is where the tunnel mouths go.

    She tries numbers. At $x = 1$: $1 - 6 + 11 - 6 = 0$. Ground level. At $x = 2$: $8 - 24 + 22 - 6 = 0$. Ground again. At $x = 3$: $27 - 54 + 33 - 6 = 0$. Three crossings: 1, 2 and 3.

    Then she notices something odd. $1 + 2 + 3 = 6$, the number in front of $x^2$. And $1 \times 2 \times 3 = 6$, the number at the end. The crossing points seem to be **written inside the rule itself**, if only you know where to look. Coincidence?
  art: '<svg viewBox="0 0 320 210" role="img" aria-label="A roller-coaster track that meets ground level at three points"><line x1="6" y1="120" x2="314" y2="120" style="stroke:var(--ink);stroke-width:1.5"/><path d="M40.0 200.6L44.2 187.5L48.4 175.5L52.6 164.4L56.8 154.4L61.0 145.3L65.2 137.1L69.4 129.8L73.6 123.3L77.8 117.7L82.0 112.8L86.2 108.6L90.4 105.2L94.6 102.4L98.8 100.2L103.0 98.6L107.2 97.5L111.4 97.0L115.6 96.9L119.8 97.3L124.0 98.1L128.2 99.2L132.4 100.7L136.6 102.5L140.8 104.5L145.0 106.8L149.2 109.2L153.4 111.8L157.6 114.4L161.8 117.2L166.0 120.0L170.2 122.8L174.4 125.6L178.6 128.2L182.8 130.8L187.0 133.2L191.2 135.5L195.4 137.5L199.6 139.3L203.8 140.8L208.0 141.9L212.2 142.7L216.4 143.1L220.6 143.0L224.8 142.5L229.0 141.4L233.2 139.8L237.4 137.6L241.6 134.8L245.8 131.4L250.0 127.2L254.2 122.3L258.4 116.7L262.6 110.2L266.8 102.9L271.0 94.7L275.2 85.6L279.4 75.6L283.6 64.5L287.8 52.5L292.0 39.4" style="fill:none;stroke:var(--c);stroke-width:3"/><rect x="104" y="83" width="22" height="11" rx="3" style="fill:var(--chem)"/><circle cx="109" cy="95" r="2.5" style="fill:var(--ink)"/><circle cx="121" cy="95" r="2.5" style="fill:var(--ink)"/><circle cx="76" cy="120" r="4.5" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="166" cy="120" r="4.5" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="256" cy="120" r="4.5" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="82" y="138" style="font-size:11px;fill:var(--muted)">1</text><text x="148" y="138" style="font-size:11px;fill:var(--muted)">2</text><text x="262" y="138" style="font-size:11px;fill:var(--muted)">3</text><text x="8" y="112" style="font-size:11px;fill:var(--muted)">ground</text><text x="186" y="162" style="font-size:11px;fill:var(--muted)">tunnel</text><text x="100" y="24" style="font-size:11px;fill:var(--muted)">y = x³ − 6x² + 11x − 6</text></svg>'
symbols:
  - s: 'p(x)'
    means: 'a polynomial in x: a rule that turns each input x into a number using only adding and multiplying (a pure number, no unit)'
  - s: 'x'
    means: 'the input, also called the variable'
  - s: 'n'
    means: 'the degree, the highest power of x that appears'
  - s: 'a,\ b,\ c,\ d'
    means: 'the coefficients, the fixed numbers in front of the powers of x; a is the leading coefficient and is never 0'
  - s: 'k'
    means: 'a particular number put in for x; p(k) is the value of the polynomial there'
  - s: '\alpha,\ \beta,\ \gamma'
    means: 'the zeroes (also called roots): the inputs that make the polynomial equal 0'
  - s: 'q(x),\ r(x)'
    means: 'the quotient and the remainder when one polynomial is divided by another'
  - s: 'e_k'
    means: 'the sum of all products of k different roots (e₁ is the sum of the roots, eₙ their product)'
life:
  - 'A cricket ball''s height along its path is a downward parabola; its two zeroes are where it leaves the bat and where it lands.'
  - 'The letters of the fonts on your phone, and the curves of car bodies, are drawn as short polynomial curves (Bézier curves) joined end to end.'
  - 'Profit plotted against price often rises and then falls; the zeroes of that curve are the break-even prices a shopkeeper must stay between.'
  - 'Many calculators and computer maths libraries compute sin, cos and log by evaluating carefully chosen polynomials, because adding and multiplying is what a chip does fastest.'
  - 'QR codes and CDs use Reed–Solomon codes, which store data as values of a polynomial; a few extra values let a scratched or smudged code be rebuilt.'
models:
  - name: 'Know the answers, write the question'
    text: 'If you know the zeroes, you know the polynomial: it is just (x − α)(x − β)… times a constant. Many problems become easy when you build the object from the answers you want, instead of hunting for answers inside a given object.'
  - name: 'Don''t compute what you don''t need'
    text: 'A symmetric question (sum, product, sum of squares of the roots) has an answer you can get without finding the roots, just as a class''s total marks can be known without anyone''s individual marks. Before solving, ask what the question really needs.'
  - name: 'Test at a convenient point'
    text: 'The remainder theorem works by putting in the one value that makes everything else vanish. In debugging, auditing or checking a bill, a well-chosen test case (zero, one, the extreme) reveals the hidden structure fastest.'
links:
  - leaf: 'mat/quadratic-equations'
    name: 'Quadratic equations'
    same: 'The zeroes of ax² + bx + c are exactly the solutions of ax² + bx + c = 0, and the quadratic formula''s two roots add to −b/a and multiply to c/a.'
    differs: 'There the job is to find the roots themselves; here we learn what can be known about the roots without finding them.'
  - leaf: 'mat/irrational-numbers'
    name: 'Irrational numbers'
    same: 'The rational root theorem proves √2 irrational in one line: x² − 2 has no rational zero, because its only candidates ±1 and ±2 fail.'
    differs: 'That lesson proves irrationality number by number with divisibility; the polynomial view proves it for whole families at once (√3, ∛5, √2 + √3).'
  - leaf: 'mat/expressions-and-identities'
    name: 'Algebraic expressions and identities'
    same: 'Expanding brackets such as (x − α)(x − β) is the whole derivation of Vieta''s formulas; an identity is a polynomial equation true for every x.'
    differs: 'Identities are equal for every input; a polynomial equation p(x) = 0 holds only at its zeroes.'
  - leaf: 'phy/projectile-motion'
    name: 'Projectile motion'
    same: 'A ball''s height is a quadratic in the horizontal distance; its zeroes are the launch point and the landing point, and their difference is the range.'
    differs: 'In physics the coefficients carry units and meaning (speed, angle, g); in maths they are just numbers.'
next:
  q: 'We can read the sum and product of the zeroes of x² − 4x + 1 at a glance: 4 and 1. But what are the zeroes themselves, when no two nice numbers multiply to 1 and add to 4?'
  leaf: 'mat/quadratic-equations'
  name: 'Quadratic equations'
---

:::hook
q: Another track follows y = x³ − 9x² + 23x − 15 and also meets the ground three times. Without finding the crossings, what do the three crossing points add up to?
options: ["9", "15", "23", "You can't tell without solving"]
answer: 0
right: Yes. The crossings are 1, 3 and 5, and 1 + 3 + 5 = 9, the number in front of x² with its sign flipped. Their product, 15, is the last number. This lesson shows why it always works.
wrong: Look back at the first track, where the crossings 1, 2, 3 added to 6, the number in front of x² (with the sign flipped). Try the same move here. The crossings are 1, 3 and 5.
:::

## What a polynomial is {lvl=1 id=s-what label="Class 10"}

Why do mathematicians love polynomials so much? Because they are the rules you can compute **with nothing but adding and multiplying**. Take a number, multiply it by itself a few times, scale the pieces, add them up. A pocket calculator from 1975 could do it; so can you, by hand.

Here is one: take a number, square it, subtract three times the number, subtract 4. Written short, that rule is $x^2 - 3x - 4$. Call the rule $p(x)$, "p of x", where $x$ stands for whatever number you feed in.

The highest power of $x$ that appears is the **degree**. Degree 1 rules like $2x + 3$ are called linear, degree 2 rules like $x^2 - 3x - 4$ quadratic, and degree 3 rules cubic. Things like $\frac{1}{x}$ or $\sqrt{x}$ are not polynomials: they divide by $x$ or take a root of it, which adding and multiplying cannot do.

Feeding in a number gives the **value** at that number. For $p(x) = x^2 - 3x - 4$, putting in $2$ gives $p(2) = 4 - 6 - 4 = -6$. Putting in $4$ gives $p(4) = 16 - 12 - 4 = 0$.

That last one is special. An input that makes the value exactly $0$ is a **zero** of the polynomial. Here $4$ is a zero, and so is $-1$, since $p(-1) = 1 + 3 - 4 = 0$. Zeroes are where things balance: where profit is nil, where a ball is at ground level, where a track meets the ground.

:::qc lvl=1
q: Which number is a zero of p(x) = x³ − 1?
options: ["0", "1", "−1"]
answer: 1
right: Right. p(1) = 1 − 1 = 0. (p(0) = −1 and p(−1) = −2.)
wrong: A zero makes the value exactly 0. Try each: p(0) = −1, p(1) = 0, p(−1) = −2.
:::

## Zeroes are crossings {lvl=1 id=s-graph label="Class 10"}

Draw the graph of $y = p(x)$: for every input $x$, plot a point at height $p(x)$. Now ask: what does a zero look like on this picture?

If $k$ is a zero, then $p(k) = 0$, so the point $(k, 0)$ is on the graph. That point has height zero, so it sits on the x-axis. **The zeroes are the x-coordinates of the points where the graph meets the x-axis.** Counting zeroes becomes counting crossings.

A **linear** polynomial $ax + b$ has a straight-line graph. A slanted line meets the x-axis exactly once, at $x = -\frac{b}{a}$. For $2x + 3$ that is $x = -\frac32$. One zero, always.

A **quadratic** $ax^2 + bx + c$ has a U-shaped graph called a **parabola**. It opens upwards when $a > 0$ and downwards, like an arch, when $a < 0$. Slide the U up and down and three things can happen:

:::figure caption="The parabola y = x² + c slid to three heights. It can cut the x-axis twice, touch it once, or miss it. So a quadratic has two, one or no real zeroes."
<svg viewBox="0 0 600 195" role="img" aria-label="Three parabolas: one crossing the x-axis twice, one touching it, one missing it"><line class="axis" x1="5" y1="120" x2="195" y2="120"/><line class="axis" x1="205" y1="120" x2="395" y2="120"/><line class="axis" x1="405" y1="120" x2="595" y2="120"/><line class="faint" x1="100" y1="32" x2="100" y2="160"/><line class="faint" x1="300" y1="32" x2="300" y2="160"/><line class="faint" x1="500" y1="32" x2="500" y2="160"/><path d="M12.0 68.9L14.9 74.6L17.9 80.1L20.8 85.4L23.7 90.6L26.7 95.5L29.6 100.2L32.5 104.8L35.5 109.1L38.4 113.3L41.3 117.3L44.3 121.1L47.2 124.6L50.1 128.0L53.1 131.2L56.0 134.2L58.9 137.0L61.9 139.6L64.8 142.1L67.7 144.3L70.7 146.3L73.6 148.2L76.5 149.8L79.5 151.3L82.4 152.5L85.3 153.6L88.3 154.5L91.2 155.1L94.1 155.6L97.1 155.9L100.0 156.0L102.9 155.9L105.9 155.6L108.8 155.1L111.7 154.5L114.7 153.6L117.6 152.5L120.5 151.3L123.5 149.8L126.4 148.2L129.3 146.3L132.3 144.3L135.2 142.1L138.1 139.6L141.1 137.0L144.0 134.2L146.9 131.2L149.9 128.0L152.8 124.6L155.7 121.1L158.7 117.3L161.6 113.3L164.5 109.1L167.5 104.8L170.4 100.2L173.3 95.5L176.3 90.6L179.2 85.4L182.1 80.1L185.1 74.6L188.0 68.9" style="fill:none;stroke:var(--mat);stroke-width:2.4"/><path d="M212.0 32.9L214.9 38.6L217.9 44.1L220.8 49.4L223.7 54.6L226.7 59.5L229.6 64.2L232.5 68.8L235.5 73.1L238.4 77.3L241.3 81.3L244.3 85.1L247.2 88.6L250.1 92.0L253.1 95.2L256.0 98.2L258.9 101.0L261.9 103.6L264.8 106.1L267.7 108.3L270.7 110.3L273.6 112.2L276.5 113.8L279.5 115.3L282.4 116.5L285.3 117.6L288.3 118.5L291.2 119.1L294.1 119.6L297.1 119.9L300.0 120.0L302.9 119.9L305.9 119.6L308.8 119.1L311.7 118.5L314.7 117.6L317.6 116.5L320.5 115.3L323.5 113.8L326.4 112.2L329.3 110.3L332.3 108.3L335.2 106.1L338.1 103.6L341.1 101.0L344.0 98.2L346.9 95.2L349.9 92.0L352.8 88.6L355.7 85.1L358.7 81.3L361.6 77.3L364.5 73.1L367.5 68.8L370.4 64.2L373.3 59.5L376.3 54.6L379.2 49.4L382.1 44.1L385.1 38.6L388.0 32.9" style="fill:none;stroke:var(--mat);stroke-width:2.4"/><path d="M412.0 14.9L414.9 20.6L417.9 26.1L420.8 31.4L423.7 36.6L426.7 41.5L429.6 46.2L432.5 50.8L435.5 55.1L438.4 59.3L441.3 63.3L444.3 67.1L447.2 70.6L450.1 74.0L453.1 77.2L456.0 80.2L458.9 83.0L461.9 85.6L464.8 88.1L467.7 90.3L470.7 92.3L473.6 94.2L476.5 95.8L479.5 97.3L482.4 98.5L485.3 99.6L488.3 100.5L491.2 101.1L494.1 101.6L497.1 101.9L500.0 102.0L502.9 101.9L505.9 101.6L508.8 101.1L511.7 100.5L514.7 99.6L517.6 98.5L520.5 97.3L523.5 95.8L526.4 94.2L529.3 92.3L532.3 90.3L535.2 88.1L538.1 85.6L541.1 83.0L544.0 80.2L546.9 77.2L549.9 74.0L552.8 70.6L555.7 67.1L558.7 63.3L561.6 59.3L564.5 55.1L567.5 50.8L570.4 46.2L573.3 41.5L576.3 36.6L579.2 31.4L582.1 26.1L585.1 20.6L588.0 14.9" style="fill:none;stroke:var(--mat);stroke-width:2.4"/><circle cx="43.4" cy="120" r="4" style="fill:var(--chem)"/><circle cx="156.6" cy="120" r="4" style="fill:var(--chem)"/><circle cx="300" cy="120" r="4" style="fill:var(--chem)"/><text x="100" y="20" text-anchor="middle">y = x² − 2</text><text x="300" y="20" text-anchor="middle">y = x²</text><text x="500" y="20" text-anchor="middle">y = x² + 1</text><text x="100" y="186" text-anchor="middle">two zeroes</text><text x="300" y="186" text-anchor="middle">one zero (touch)</text><text x="500" y="186" text-anchor="middle">no real zero</text></svg>
:::

A **cubic** can wiggle: up, down, up again. NCERT's example $x^3 - 4x$ crosses the axis at $-2$, $0$ and $2$, and you can check each: $(-2)^3 - 4(-2) = -8 + 8 = 0$. A cubic always crosses at least once (it heads to $-\infty$ at one end and $+\infty$ at the other) and at most three times.

The pattern generalises: **a polynomial of degree $n$ has at most $n$ zeroes.** A straight line can't cross twice; a U can't cross three times. You will see the real reason, the factor theorem, in a later section.

Here is a quadratic you can play with. A ball's height above the ground is a quadratic in the distance it has travelled sideways. Its two zeroes are the point where it is thrown (distance 0) and the point where it lands (the range $R$). Change the angle and watch the second zero move.

:::widget name=projectile u=20 angle=40 g=9.8
:::

:::qc lvl=1
q: The graph of a polynomial meets the x-axis at exactly four points. What is the smallest degree it can have?
options: ["2", "3", "4", "5"]
answer: 2
right: Right. Four zeroes need degree at least 4, since a degree-n polynomial has at most n zeroes.
wrong: Each crossing is a zero, and a polynomial of degree n has at most n zeroes. How many crossings must the degree allow?
:::

## Sum and product of zeroes {lvl=1 id=s-pair label="Class 10"}

Take $x^2 - 7x + 10$. It factorises as $(x - 2)(x - 5)$, so its zeroes are $2$ and $5$: a product is zero only when one of its factors is zero. Now look: $2 + 5 = 7$ and $2 \times 5 = 10$. Both numbers are sitting in the polynomial. Why?

Run it backwards. Suppose a quadratic has zeroes $\alpha$ and $\beta$ (Greek alpha and beta; just names for two numbers). Then it must be a multiple of $(x - \alpha)(x - \beta)$, because that product is zero exactly at those two inputs. Multiply it out:

$$(x - \alpha)(x - \beta) = x^2 - (\alpha + \beta)\,x + \alpha\beta.$$

Read it as: the middle number is minus the sum of the zeroes, and the last number is their product. That is the whole secret of the opener.

A general quadratic $ax^2 + bx + c$ has an extra factor $a$ in front. Divide it out: $x^2 + \frac{b}{a}x + \frac{c}{a}$. Match the two forms piece by piece:

$$\alpha + \beta = -\frac{b}{a}, \qquad \alpha\beta = \frac{c}{a}.$$

Read it as: the sum of the zeroes is minus $b$ over $a$; the product is $c$ over $a$.

:::worked title="Reading and writing quadratics"
**Reading.** For $2x^2 - 8x + 6$: sum $= -(-8)/2 = 4$, product $= 6/2 = 3$. Two numbers adding to 4 and multiplying to 3 are 1 and 3. Check: $2 - 8 + 6 = 0$ and $18 - 24 + 6 = 0$.

**Writing.** Find a quadratic whose zeroes add to $3$ and multiply to $-10$. Use $x^2 - (\text{sum})x + (\text{product})$: $x^2 - 3x - 10$. It factorises as $(x - 5)(x + 2)$, zeroes $5$ and $-2$. Any multiple, like $4x^2 - 12x - 40$, has the same zeroes.
:::

The relations hold even when the zeroes are not nice numbers. For $x^2 - 3$ the zeroes are $\sqrt3$ and $-\sqrt3$: their sum is $0 = -0/1$ and their product is $-3 = -3/1$. They even hold when the parabola misses the axis and the zeroes are not real at all; you will meet those numbers later.

:::qc lvl=1
q: What is the sum of the zeroes of 3x² + 6x − 9?
options: ["2", "−2", "−3"]
answer: 1
right: Right. Sum = −b/a = −6/3 = −2. (The zeroes are 1 and −3.)
wrong: Use sum = −b/a with a = 3 and b = 6. Don't forget the minus sign.
:::

## Three zeroes of a cubic {lvl=1 id=s-cubic label="Class 10"}

The same trick works one degree up. A cubic with zeroes $\alpha$, $\beta$ and $\gamma$ (gamma, a third name) is a multiple of $(x - \alpha)(x - \beta)(x - \gamma)$. Multiply the first two brackets as before, then the third:

$$\bigl(x^2 - (\alpha+\beta)x + \alpha\beta\bigr)(x - \gamma) = x^3 - (\alpha+\beta+\gamma)\,x^2 + (\alpha\beta + \beta\gamma + \gamma\alpha)\,x - \alpha\beta\gamma.$$

Read it as: minus the sum, plus the sum of products in pairs, minus the product of all three. Compare with $ax^3 + bx^2 + cx + d$ after dividing by $a$:

$$\alpha+\beta+\gamma = -\frac{b}{a},\qquad \alpha\beta+\beta\gamma+\gamma\alpha = \frac{c}{a},\qquad \alpha\beta\gamma = -\frac{d}{a}.$$

The signs alternate: minus, plus, minus. That pattern, not the letters, is what to remember.

:::worked title="Checking NCERT's cubic"
$2x^3 - 5x^2 - 14x + 8$ has zeroes $4$, $-2$ and $\frac12$ (try them: $128 - 80 - 56 + 8 = 0$, and so on). Here $a = 2$, $b = -5$, $c = -14$, $d = 8$.

- Sum: $4 - 2 + \frac12 = \frac52$, and $-b/a = 5/2$.
- Pairs: $4(-2) + (-2)\frac12 + \frac12(4) = -8 - 1 + 2 = -7$, and $c/a = -14/2 = -7$.
- Product: $4 \times (-2) \times \frac12 = -4$, and $-d/a = -8/2 = -4$.
:::

The opener's track $x^3 - 6x^2 + 11x - 6$ fits too: sum $1 + 2 + 3 = 6$, pairs $2 + 6 + 3 = 11$, product $6$.

:::qc lvl=1
q: What is the product of the zeroes of x³ − 6x² + 11x − 6?
options: ["6", "−6", "11"]
answer: 0
right: Right. Product = −d/a = −(−6)/1 = 6, which is 1 × 2 × 3.
wrong: For a cubic the product is −d/a. Here d = −6 and a = 1.
:::

## Dividing one polynomial by another {lvl=2 id=s-divide label="Class 11"}

Divide 17 by 5 and you get 3, remainder 2. Written as one line, $17 = 5 \times 3 + 2$, with the remainder smaller than the divisor. Polynomials divide the same way, except that "smaller" means **lower degree**.

Take $x^3 - 2x^2 - 5x + 6$ divided by $x - 2$. At each step, kill the highest power:

| Step | What to multiply $x - 2$ by | Subtract | What is left |
|---|---|---|---|
| 1 | $x^2$ (since $x^3 \div x = x^2$) | $x^3 - 2x^2$ | $-5x + 6$ |
| 2 | $-5$ (since $-5x \div x = -5$) | $-5x + 10$ | $-4$ |

What is left, $-4$, has degree 0, lower than the divisor's degree 1, so we stop:

$$x^3 - 2x^2 - 5x + 6 = (x - 2)(x^2 - 5) + (-4).$$

Read it as: the **quotient** is $x^2 - 5$ and the **remainder** is $-4$. Multiply back to check: $(x - 2)(x^2 - 5) = x^3 - 2x^2 - 5x + 10$, and adding $-4$ gives the original.

In general, dividing $p(x)$ by a non-zero $g(x)$ gives a quotient $q(x)$ and a remainder $r(x)$ with

$$p(x) = g(x)\,q(x) + r(x), \qquad r = 0 \ \text{or}\ \deg r < \deg g.$$

This is the **division algorithm**. It is the polynomial twin of $17 = 5 \times 3 + 2$, and it works for the same reason: as long as the leftover has degree at least that of $g$, you can subtract another multiple of $g$ to knock its top term off.

A second example: $x^4 + 1$ divided by $x^2 + 1$ gives $x^4 + 1 = (x^2 + 1)(x^2 - 1) + 2$.

:::qc lvl=2
q: A degree-5 polynomial is divided by a cubic. What is the highest degree the remainder can have?
options: ["2", "3", "5"]
answer: 0
right: Right. The remainder's degree must be less than the divisor's, so at most 2.
wrong: The division stops as soon as the leftover has lower degree than the divisor, which has degree 3.
:::

## Remainder and factor theorems {lvl=2 id=s-factor label="Class 11"}

In the division above the remainder was $-4$. Now just evaluate the polynomial at $2$: $p(2) = 8 - 8 - 10 + 6 = -4$. The same number. Is that luck?

No. Dividing by $x - k$ leaves a remainder of degree less than 1, so a plain number $r$:

$$p(x) = (x - k)\,q(x) + r.$$

This is an identity: it holds for every $x$. So put in the most convenient value, $x = k$, which makes the bracket vanish: $p(k) = 0 \cdot q(k) + r = r$. That is the **remainder theorem**:

$$\text{remainder of } p(x) \div (x - k) = p(k).$$

Read it as: to find the remainder on dividing by $x - k$, don't divide; just put in $k$. Zeitz calls this move "substitute convenient values", and it solves a surprising number of olympiad problems.

:::figure caption="The remainder on dividing p(x) = x³ − 2x² − 5x + 6 by x − k is the height of the graph above k. At x = 2 the height is −4. At the zeroes −2, 1 and 3 the height is 0, so x + 2, x − 1 and x − 3 divide p(x) exactly."
<svg viewBox="0 0 420 215" role="img" aria-label="Graph of a cubic with the height at x equals 2 marked as the remainder"><line class="axis" x1="20" y1="110" x2="400" y2="110"/><line class="faint" x1="165" y1="30" x2="165" y2="205"/><path d="M40.0 196.6L45.1 175.8L50.2 156.6L55.2 139.1L60.3 123.2L65.4 108.9L70.5 96.0L75.6 84.6L80.7 74.5L85.8 65.7L90.8 58.2L95.9 51.9L101.0 46.8L106.1 42.7L111.2 39.6L116.2 37.6L121.3 36.4L126.4 36.1L131.5 36.6L136.6 37.9L141.7 39.8L146.8 42.4L151.8 45.6L156.9 49.2L162.0 53.4L167.1 57.9L172.2 62.8L177.2 68.0L182.3 73.4L187.4 79.0L192.5 84.7L197.6 90.5L202.7 96.3L207.7 102.0L212.8 107.6L217.9 113.1L223.0 118.4L228.1 123.4L233.2 128.0L238.2 132.3L243.3 136.1L248.4 139.4L253.5 142.1L258.6 144.3L263.7 145.7L268.8 146.5L273.8 146.4L278.9 145.5L284.0 143.7L289.1 141.0L294.2 137.2L299.2 132.4L304.3 126.4L309.4 119.3L314.5 110.9L319.6 101.2L324.7 90.2L329.8 77.7L334.8 63.8L339.9 48.4L345.0 31.4" style="fill:none;stroke:var(--mat);stroke-width:2.4"/><line x1="265" y1="110" x2="265" y2="146" style="stroke:var(--chem);stroke-width:2;stroke-dasharray:4 3"/><circle cx="265" cy="146" r="4" style="fill:var(--chem)"/><circle cx="65" cy="110" r="4" style="fill:var(--ink)"/><circle cx="215" cy="110" r="4" style="fill:var(--ink)"/><circle cx="315" cy="110" r="4" style="fill:var(--ink)"/><text x="72" y="127">−2</text><text x="222" y="100">p(1) = 0</text><text x="321" y="127">3</text><text x="261" y="102">2</text><text x="232" y="174">remainder p(2) = −4</text><text x="404" y="114">x</text><text x="176" y="20">p(x) = x³ − 2x² − 5x + 6</text></svg>
:::

The special case $p(k) = 0$ gives the **factor theorem**: $x - k$ divides $p(x)$ exactly when $k$ is a zero. Zeroes and factors are the same information.

Two quick checks fall out at once. $p(1)$ is just the sum of the coefficients, so **$x - 1$ is a factor when the coefficients add to 0**: $1 - 6 + 11 - 6 = 0$, so $x - 1$ divides the opener's cubic. And $p(-1)$ is the alternating sum, which tests $x + 1$.

:::worked title="Finding a coefficient, then all the zeroes"
For which $k$ is $x - 1$ a factor of $2x^3 + kx^2 - 5x + 1$? Set $p(1) = 2 + k - 5 + 1 = 0$, so $k = 2$.

Divide out the factor: $2x^3 + 2x^2 - 5x + 1 = (x - 1)(2x^2 + 4x - 1)$. The quadratic's zeroes are $\frac{-4 \pm \sqrt{16 + 8}}{4} = \frac{-2 \pm \sqrt6}{2}$, which are irrational. One lucky rational zero opened up the other two.
:::

**Why at most $n$ zeroes.** Suppose $p$ has degree $n$ and distinct zeroes $k_1, k_2, \dots$. The factor theorem peels off $p(x) = (x - k_1)\,q_1(x)$, with $q_1$ of degree $n - 1$. Put in $k_2$: $0 = (k_2 - k_1)\,q_1(k_2)$, and $k_2 - k_1 \neq 0$, so $q_1(k_2) = 0$ and we peel again. Each peel lowers the degree by one, and a non-zero constant has no zeroes. So there are at most $n$ zeroes.

A useful corollary: **two polynomials of degree at most $n$ that agree at $n + 1$ points are identical**, because their difference has degree at most $n$ and too many zeroes. This is why "comparing coefficients" is allowed.

:::qc lvl=2
q: What is the remainder when x¹⁰⁰ + 1 is divided by x + 1?
options: ["0", "2", "101"]
answer: 1
right: Right. x + 1 = x − (−1), so the remainder is p(−1) = (−1)¹⁰⁰ + 1 = 2.
wrong: Write x + 1 as x − (−1) and put x = −1 into x¹⁰⁰ + 1.
:::

## Factor theorem tricks {lvl=3 id=s-tricks label="JEE"}

The remainder theorem is a tool kit, not one fact. Four moves cover most exam problems.

**1. Dividing by a quadratic.** The remainder on dividing by $(x - u)(x - v)$ has degree at most 1, so it is $Ax + B$. Write $p(x) = (x - u)(x - v)\,q(x) + Ax + B$ and put in $x = u$ and $x = v$. For $p(x) = x^5 + 2$ divided by $(x - 1)(x - 2)$: $A + B = p(1) = 3$ and $2A + B = p(2) = 34$, so $A = 31$, $B = -28$. The remainder is $31x - 28$, found without any long division.

**2. Divisibility of whole numbers.** For which whole numbers $n$ does $n + 5$ divide $n^3 + 40$? Divide as polynomials: $n^3 + 125 = (n + 5)(n^2 - 5n + 25)$, so
$$n^3 + 40 = (n + 5)(n^2 - 5n + 25) - 85.$$
So $n + 5$ divides $n^3 + 40$ exactly when it divides $85$. The largest such $n$ is $80$. (Zeitz's Example 5.4.1 uses the same idea with other numbers.)

**3. Integer polynomials respect differences.** If $p$ has integer coefficients and $m$, $n$ are integers, then $m - n$ divides $p(m) - p(n)$. The reason: each $m^j - n^j = (m - n)(m^{j-1} + m^{j-2}n + \dots + n^{j-1})$. So $p(5) - p(1)$ is always a multiple of 4. This kills many "show there is no integer solution" problems.

**4. Repeated zeroes.** $(x - k)^2$ divides $p$ when $k$ is a zero of both $p$ and the quotient $q$. With calculus this reads: $p(k) = 0$ and $p'(k) = 0$. On the graph, the curve touches the axis instead of crossing it, as $x^2$ does at 0.

:::qc lvl=3
q: For which positive integers n does n − 1 divide n² + 3?
options: ["n = 2, 3, 5", "n = 2 only", "Every n"]
answer: 0
right: Right. n² + 3 = (n − 1)(n + 1) + 4, so n − 1 must divide 4: n − 1 = 1, 2 or 4.
wrong: Divide as polynomials: n² + 3 = (n − 1)(n + 1) + 4. Which values of n − 1 divide 4?
:::

## Vieta for any degree {lvl=3 id=s-vieta label="JEE"}

Why does the sign keep flipping? Look at how a product of brackets is multiplied out. To expand $(x - r_1)(x - r_2)(x - r_3)$, you pick **one term from each bracket**, either the $x$ or the $-r$, multiply your picks, and add over all ways of picking.

| Brackets giving $-r$ | Term produced | Total |
|---|---|---|
| none | $x \cdot x \cdot x$ | $x^3$ |
| exactly one (3 ways) | $-r_1x^2$, $-r_2x^2$, $-r_3x^2$ | $-(r_1 + r_2 + r_3)\,x^2$ |
| exactly two (3 ways) | $r_1r_2x$, $r_1r_3x$, $r_2r_3x$ | $+(r_1r_2 + r_1r_3 + r_2r_3)\,x$ |
| all three | $-r_1r_2r_3$ | $-r_1r_2r_3$ |

Each picked root brings a minus sign, so picking $k$ roots gives $(-1)^k$. Now name the sums. Let $e_k$ be the sum of all products of $k$ different roots: $e_1$ is the sum of the roots, $e_2$ the sum of products in pairs, and so on to $e_n$, the product of all of them. Then for a polynomial $a_nx^n + a_{n-1}x^{n-1} + \dots + a_0$ with roots $r_1, \dots, r_n$,

$$e_k = (-1)^k\,\frac{a_{n-k}}{a_n}.$$

Read it as: the $k$-th symmetric sum of the roots is the coefficient $k$ places below the top, divided by the top one, with sign $+$ for even $k$ and $-$ for odd $k$. These are **Vieta's formulas**. There are $\binom{n}{k}$ products in $e_k$, one for each way of choosing $k$ brackets.

For a quartic with roots $1, 2, 3, 4$: $e_1 = 10$, $e_2 = 2 + 3 + 4 + 6 + 8 + 12 = 35$, $e_3 = 6 + 8 + 12 + 24 = 50$, $e_4 = 24$. So the polynomial is $x^4 - 10x^3 + 35x^2 - 50x + 24$, signs alternating.

**Do roots always exist?** Over the real numbers, no: $x^2 + 1$ has none. But the **fundamental theorem of algebra** says every non-constant polynomial has a zero among the complex numbers. Peeling factors then gives exactly $n$ roots, counted with repetition, so Vieta's formulas always apply. Zeitz notes the proof is deep and skips it; so do we.

:::qc lvl=3
q: For x⁴ + 3x³ − 7x + 2, what is the sum of the products of the roots taken two at a time?
options: ["0", "−7", "3"]
answer: 0
right: Right. e₂ = +a₂/a₄, and there is no x² term, so a₂ = 0.
wrong: e₂ uses the coefficient two places below the top, the x² term. Is there one?
:::

## Symmetric expressions without solving {lvl=3 id=s-symmetric label="JEE"}

An expression in the roots is **symmetric** if swapping any two roots leaves it unchanged, like $\alpha^2 + \beta^2$ or $\frac1\alpha + \frac1\beta$. A theorem (stated here without proof) says every symmetric polynomial in the roots can be written in terms of $e_1, e_2, \dots$, which Vieta hands you for free. So **you never need the roots to evaluate a symmetric expression.**

The everyday identities, for two roots with sum $s$ and product $P$:

- $\alpha^2 + \beta^2 = s^2 - 2P$
- $\alpha^3 + \beta^3 = s^3 - 3Ps$
- $\frac1\alpha + \frac1\beta = \frac{s}{P}$
- $(\alpha - \beta)^2 = s^2 - 4P$, which is the discriminant divided by $a^2$

For three roots: $\alpha^2 + \beta^2 + \gamma^2 = e_1^2 - 2e_2$ and $\alpha^3 + \beta^3 + \gamma^3 = e_1^3 - 3e_1e_2 + 3e_3$.

:::worked title="A sum of squares that is negative"
Let $\alpha, \beta, \gamma$ be the roots of $x^3 - 2x^2 + 3x - 4$. Then $e_1 = 2$ and $e_2 = 3$, so
$$\alpha^2 + \beta^2 + \gamma^2 = 4 - 6 = -2.$$
Squares of real numbers can't add to a negative number. So **not all three roots are real**, a fact found without solving anything.
:::

**Power sums by recursion.** Each root of $x^2 - sx + P$ satisfies $\alpha^2 = s\alpha - P$. Multiply by $\alpha^{k-2}$ and add the same for $\beta$: the power sums $p_k = \alpha^k + \beta^k$ obey

$$p_k = s\,p_{k-1} - P\,p_{k-2}.$$

For $x^2 - x - 1$ (whose roots are the golden ratio and its partner), $s = 1$, $P = -1$, and starting from $p_0 = 2$, $p_1 = 1$ you get $3, 4, 7, 11, 18, \dots$ So $\alpha^5 + \beta^5 = 11$, and these are the Lucas numbers. This is the start of **Newton's identities**.

**New roots from old.** To get a polynomial whose roots are $\alpha^2$ and $\beta^2$, use sum $s^2 - 2P$ and product $P^2$. For roots $\frac1\alpha, \frac1\beta$, reverse the coefficients: $ax^2 + bx + c$ becomes $cx^2 + bx + a$.

**Zeitz's grouping strategy.** When a problem mentions only some of the roots, say "two roots whose product is 6", don't solve. Give names to the pair's sum and product and to the other pair's, write every Vieta equation in those names, and solve the small system. Zeitz's Example 5.4.3 (pp. 169–170) does exactly this for a quartic.

:::qc lvl=3
q: If α and β are the zeroes of x² − 5x + 3, what is (α − β)²?
options: ["13", "19", "22"]
answer: 0
right: Right. (α − β)² = (α + β)² − 4αβ = 25 − 12 = 13.
wrong: Use (α − β)² = (α + β)² − 4αβ with sum 5 and product 3.
:::

## Rational roots {lvl=4 id=s-rational label="Olympiad"}

How do you find a first zero when nothing is given? For integer coefficients there is a short list of the only rational candidates.

Suppose $\frac{p}{q}$, in lowest terms, is a zero of $a_nx^n + \dots + a_1x + a_0$ with integer coefficients. Put it in and multiply through by $q^n$:

$$a_np^n + a_{n-1}p^{n-1}q + \dots + a_1pq^{n-1} + a_0q^n = 0.$$

Every term except the last contains $p$, so $p$ divides $a_0q^n$. Since $p$ and $q$ share no factor, **$p$ divides $a_0$**. In the same way every term except the first contains $q$, so **$q$ divides $a_n$**. That is the **rational root theorem**.

For $2x^3 + x^2 - 7x - 6$ the candidates are $\pm1, \pm2, \pm3, \pm6, \pm\frac12, \pm\frac32$. Trying them, $x = 2$ works ($16 + 4 - 14 - 6 = 0$), and dividing out gives $(x - 2)(2x + 3)(x + 1)$.

Two consequences carry much of olympiad algebra:

- **Monic means integer.** If the leading coefficient is 1, then $q = 1$, so every rational zero is an integer. A zero of a monic integer polynomial that is not an integer must be irrational.
- **Irrationality for free.** $x^2 - 2$ has candidates $\pm1, \pm2$; none works, so $\sqrt2$ is irrational (Zeitz Example 5.4.4, p. 171). Likewise $\sqrt2 + \sqrt3$ is a root of $x^4 - 10x^2 + 1$ (square, isolate, square again), whose only candidates $\pm1$ fail.

A companion fact: if the coefficients are real, a non-real root $u + vi$ comes with its partner $u - vi$, because taking conjugates of $p(z) = 0$ gives $p(\bar z) = 0$.

:::qc lvl=4
q: Which number is on the rational root theorem's candidate list for 3x³ − 5x + 2?
options: ["2/3", "3/2", "5"]
answer: 0
right: Right. The top must divide 2 and the bottom must divide 3, so 2/3 is a candidate. (Being a candidate does not make it a root; here 1 is the one that works.)
wrong: The numerator must divide the constant term 2, and the denominator must divide the leading coefficient 3.
:::

## Know the zeroes, know the polynomial {lvl=4 id=s-build label="Olympiad"}

Zeitz's slogan for this section is that to know the zeroes of a polynomial is to know the polynomial: $p(x) = a(x - r_1)\cdots(x - r_n)$. The olympiad move is to **manufacture zeroes** when a problem gives you something else.

:::worked title="Values that are not zeroes"
A cubic with leading coefficient 1 has $P(1) = 1$, $P(2) = 4$, $P(3) = 9$. Find $P(4)$.

The values are not zeroes, but they look like squares. So $Q(x) = P(x) - x^2$ is zero at $1, 2, 3$, and it is a cubic with leading coefficient 1. Hence $Q(x) = (x - 1)(x - 2)(x - 3)$ and
$$P(4) = 16 + 3 \cdot 2 \cdot 1 = 22.$$
:::

When the leading coefficient is unknown, fix it with one more convenient value.

:::worked title="A quadratic that mimics 1/x"
A quadratic $P$ has $P(1) = 1$, $P(2) = \frac12$, $P(3) = \frac13$. Find $P(4)$.

Clear the fractions: $Q(x) = xP(x) - 1$ has degree 3 and zeroes $1, 2, 3$. So $Q(x) = c(x - 1)(x - 2)(x - 3)$. Now use $x = 0$, where $xP(x)$ vanishes: $Q(0) = -1 = c(-6)$, so $c = \frac16$. Then
$$4P(4) - 1 = \tfrac16 \cdot 3 \cdot 2 \cdot 1 = 1, \qquad P(4) = \tfrac12,$$
not the $\frac14$ you might guess. Zeitz's Example 5.4.2 (p. 167) runs the same idea for any degree.
:::

This is also why a polynomial of degree at most $n$ is fixed by $n + 1$ of its values (the identity principle from the factor theorem section). Store $n + 1$ values and you can rebuild the whole polynomial; store a few more and you can survive losing some. That is the idea behind the Reed–Solomon codes that let a scratched QR code still scan.

:::qc lvl=4
q: A polynomial of degree at most 3 takes the value 7 at x = 1, 2, 3, 4 and 5. What is it?
options: ["The constant 7", "It can't be determined", "7x"]
answer: 0
right: Right. P(x) − 7 has degree at most 3 but five zeroes, so it is the zero polynomial.
wrong: Look at P(x) − 7: degree at most 3, yet zero at five points. What must it be?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A zero of $p(x)$ is an input $k$ with $p(k) = 0$: a point where the graph meets the x-axis. {lvl=1}
2. A polynomial of degree $n$ has at most $n$ zeroes; a quadratic has two, one or none that are real. {lvl=1}
3. For $ax^2 + bx + c$: sum of zeroes $-b/a$, product $c/a$; a quadratic with sum $S$ and product $P$ is $k(x^2 - Sx + P)$. {lvl=1}
4. For $ax^3 + bx^2 + cx + d$: sum $-b/a$, pairs $c/a$, product $-d/a$. {lvl=1}
5. Division algorithm $p = gq + r$ with $\deg r < \deg g$; the remainder on dividing by $x - k$ is $p(k)$, so $x - k$ is a factor exactly when $p(k) = 0$. {lvl=2}
6. Vieta: $e_k = (-1)^k a_{n-k}/a_n$, and any symmetric expression in the roots follows from these without solving. {lvl=3}
7. Rational zeroes $p/q$ of an integer polynomial have $p \mid a_0$ and $q \mid a_n$; monic integer polynomials have only integer rational zeroes. {lvl=4}
8. Know the zeroes, know the polynomial: build a new polynomial whose zeroes are the data. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The sum of zeroes is $-b/a$, not $b/a$. Check with a quick example such as $(x - 1)(x - 2) = x^2 - 3x + 2$. {lvl=1}
- Write the polynomial in standard order before reading coefficients: in $6x^2 - 3 - 7x$, $b = -7$ and $c = -3$. {lvl=1}
- A touching point is still a zero (and counts twice); a graph that misses the axis has no real zeroes, though Vieta still holds for the complex ones. {lvl=1}
- A sum and product fix the quadratic only up to a non-zero multiple $k$. {lvl=1}
- For $x + 3$ the test value is $-3$, not $3$: the remainder on dividing by $x + 3$ is $p(-3)$. {lvl=2}
- The remainder has lower degree than the divisor; dividing by a quadratic leaves $Ax + B$, not a single number. {lvl=3}
- In a cubic the product of the roots is $-d/a$, but in a quartic it is $+e/a$: the sign is $(-1)^n$. {lvl=3}
- The rational root theorem gives candidates, not roots; each must still be tested. {lvl=4}
:::
