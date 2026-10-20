---
title: Exponential growth and doubling
summary: Why anything that grows by a percentage of itself looks harmless for ages, then suddenly explodes, and how to see it coming.
ncert: []
up_to: Olympiad
builds_on: ['Compound interest, EMIs and inflation', 'Geometric progressions']
notes_prompt: Explain to a friend why a pond weed that covers the whole pond on day 30 covered only half of it on day 29, and what that teaches about savings, rumours and infections.
margin:
  - kind: history
    title: History
    text: 'The rice-on-a-chessboard story is told in many versions, often about the inventor of chess at an Indian court [Unverified: a legend, not history]. The rule of 72 is usually traced to Luca Pacioli''s arithmetic book of 1494 [Unverified].'
  - kind: tip
    title: Mental maths
    text: 'Doubling time is about 72 divided by the percentage rate. It works backwards too: if something doubles every 6 years, it grows about 72 ÷ 6 = 12% a year.'
  - kind: olympiad
    title: Olympiad link
    text: 'To see which of two sequences wins in the long run, compare their step ratios. n to the power p multiplies by a factor that shrinks towards 1, 2ⁿ always by 2, and n! by n + 1, which keeps growing.'
books:
  - { title: 'Paul Zeitz, The Art and Craft of Problem Solving (2nd ed., Wiley, 2007)', ref: '§2.2 Strategies for getting started, Cautionary tales 2.2.35, p. 39' }
  - { title: 'Paul Zeitz, The Art and Craft of Problem Solving (2nd ed., Wiley, 2007)', ref: '§2.3 Methods of argument: induction, Example 2.3.6, p. 46; Problems 2.3.27 and 2.3.33, p. 51' }
cards:
  - { front: 'What does "grows by a fixed percentage" mean in terms of multiplication?', back: 'Each step multiplies the amount by the same factor, 1 + r. Ten per cent a year means ×1.1 every year.' }
  - { front: 'State the rule of 72.', back: 'Doubling time ≈ 72 ÷ (rate in per cent). At 8% a year money doubles in about 9 years.' }
  - { front: 'Why is the doubling time the same whether you have ₹100 or ₹1 crore?', back: 'Each step multiplies by the same factor whatever the size, so the number of steps needed to multiply by 2 never changes.' }
  - { front: 'A price falls 50% and then rises 50%. Where does it end?', back: 'At 75% of the start, because 0.5 × 1.5 = 0.75. Percentage changes multiply, they do not add.' }
  - { front: 'Continuous growth at rate k: doubling time?', back: '$T_2 = \\ln 2 / k \\approx 0.693/k$. At 5% a year, about 13.9 years.' }
  - { front: 'Why do real growth curves bend into an S?', back: 'Something runs out (food, space, people who have not heard). Logistic growth $kN(1 - N/K)$ is fastest at half the ceiling K and then slows.' }
core:
  idea: 'When something grows by a fixed percentage of itself each step, it is multiplied by the same factor each step, so it doubles at a steady interval of about 72 ÷ (rate in %). Such growth looks slow for a long time and then sudden; decay is the same thing with a factor below 1.'
  formulas:
    - tex: 'N = N_0\,(1+r)^t'
      label: 'Growth by a fixed fraction r per step, after t steps'
    - tex: 'T_2 = \dfrac{\ln 2}{\ln(1+r)} \approx \dfrac{72}{\text{rate in }\%}'
      label: 'Doubling time, and the rule of 72'
    - tex: 'N = N_0\,e^{kt},\qquad T_2 = \dfrac{\ln 2}{k} \approx \dfrac{0.693}{k}'
      label: 'Continuous growth at rate k'
  conditions:
    - 'The percentage rate stays the same from step to step'
    - 'Nothing limits the growth: no ceiling of food, space, money or people'
    - 'The rate and the step use the same time unit (a yearly rate with years)'
    - 'The rule of 72 is a mental shortcut for rates of roughly 2–20% (most accurate near 8%)'
  sign: 'A 30% rise over 10 years is not 3% a year, and a 50% fall followed by a 50% rise leaves you at 75%. Percentage changes multiply; they never simply add.'
outcomes:
  - 'Turn any "grows by x% each step" statement into repeated multiplication and compute the amount after t steps'
  - 'Estimate doubling times and half-lives in your head with the rule of 72, and explain why the doubling time does not depend on the amount'
  - 'Use logarithms to find the time to reach a target or the rate behind two observations, and read a log-scale chart'
  - 'Derive e from more and more frequent compounding, explain why the rule of 72 works, and model a ceiling with logistic growth'
  - 'Rank n to a power, 2ⁿ and n! by long-run growth and prove the order'
opener:
  story: |
    There is an old story, told in many versions, about the man who invented chess. The delighted king offers him any reward. He asks for rice: one grain on the first square of the board, two on the second, four on the third, and so on, doubling every square up to the 64th. The king laughs. It sounds like a bowl of rice.

    For a while the king looks right. The whole first row of eight squares holds 255 grains, a pinch. By the end of the second row, square 16 holds 32,768 grains, under a kilogram. Even the halfway square, number 32, holds about 2 billion grains: suppose a grain weighs 25 mg, and that is about 54 tonnes, a few lorry loads. Expensive, but a king can pay that.

    Now keep going. Square 33 doubles the 54 tonnes, square 34 doubles it again, and there are 32 doublings still to come. **How much rice ends up on the last square alone?** And why does nearly all of it pile up at the very end?
  art: '<svg viewBox="0 0 320 214" role="img" aria-label="A chessboard with one, two, four and eight grains on the first squares, and a huge heap of rice beside it marked square 64"><text x="16" y="34" style="font-size:11px;fill:var(--muted)">1, 2, 4, 8, ...</text><rect x="16" y="48" width="128" height="128" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><path d="M32 48h16v16h-16zM64 48h16v16h-16zM96 48h16v16h-16zM128 48h16v16h-16zM16 64h16v16h-16zM48 64h16v16h-16zM80 64h16v16h-16zM112 64h16v16h-16zM32 80h16v16h-16zM64 80h16v16h-16zM96 80h16v16h-16zM128 80h16v16h-16zM16 96h16v16h-16zM48 96h16v16h-16zM80 96h16v16h-16zM112 96h16v16h-16zM32 112h16v16h-16zM64 112h16v16h-16zM96 112h16v16h-16zM128 112h16v16h-16zM16 128h16v16h-16zM48 128h16v16h-16zM80 128h16v16h-16zM112 128h16v16h-16zM32 144h16v16h-16zM64 144h16v16h-16zM96 144h16v16h-16zM128 144h16v16h-16zM16 160h16v16h-16zM48 160h16v16h-16zM80 160h16v16h-16zM112 160h16v16h-16z" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface))"/><g style="fill:var(--ink)"><circle cx="24" cy="56" r="1.6"/><circle cx="37" cy="56" r="1.6"/><circle cx="43" cy="56" r="1.6"/><circle cx="52" cy="52" r="1.6"/><circle cx="60" cy="52" r="1.6"/><circle cx="52" cy="60" r="1.6"/><circle cx="60" cy="60" r="1.6"/><circle cx="68" cy="52" r="1.4"/><circle cx="72" cy="52" r="1.4"/><circle cx="76" cy="52" r="1.4"/><circle cx="68" cy="56" r="1.4"/><circle cx="76" cy="56" r="1.4"/><circle cx="68" cy="60" r="1.4"/><circle cx="72" cy="60" r="1.4"/><circle cx="76" cy="60" r="1.4"/></g><path d="M166 200 Q240 70 314 200Z" style="fill:color-mix(in srgb,var(--c) 30%,var(--surface));stroke:var(--c);stroke-width:2"/><path d="M160 200 H318" style="stroke:var(--ink);stroke-width:1.5"/><text x="200" y="122" style="font-size:11px;fill:var(--ink)">square 64: ?</text><text x="16" y="196" style="font-size:11px;fill:var(--muted)">64 squares</text></svg>'
symbols:
  - s: 'N'
    means: 'the amount at a given time: rupees, people, bacteria, grams (same unit as N₀)'
  - s: 'N_0'
    means: 'the starting amount, at time zero (same unit as N)'
  - s: 'r'
    means: 'growth per step as a decimal fraction: 10% is r = 0.1 (no unit); negative for decay'
  - s: 't'
    means: 'number of steps, or time measured in steps (years, hours, days)'
  - s: 'T_2'
    means: 'doubling time: steps needed for the amount to double (same unit as t)'
  - s: 'T_{1/2}'
    means: 'half-life: time for a decaying amount to halve (same unit as t)'
  - s: 'e'
    means: 'Euler''s number, 2.71828…, the limit of continuous compounding (no unit)'
  - s: 'k'
    means: 'continuous growth rate: fraction per unit time, compounded every instant (per year, per hour)'
  - s: '\ln x'
    means: 'natural logarithm: the power to which e must be raised to give x (no unit); ln 2 ≈ 0.693'
  - s: 'K'
    means: 'carrying capacity: the ceiling a logistic growth levels off at (same unit as N)'
  - s: 'p'
    means: 'a fixed power, as in n to the power p (no unit)'
  - s: 'n'
    means: 'a whole number: the step number, or the number of compoundings per year'
  - s: 'n!'
    means: 'n factorial: 1 × 2 × 3 × … × n'
life:
  - 'Inflation: suppose prices rise 6% a year. Then they double in about 12 years, so a ₹200 grocery bag costs about ₹400 then and ₹800 in 24 years.'
  - 'Medicine timing: a dose fades from the blood by half every few hours, which is why tablets come with instructions like "every 8 hours".'
  - 'A forwarded message, a viral video or an infection: each person passes it to a few more, and it looks like nothing for days before it is everywhere.'
  - 'An unpaid credit card balance: suppose the charge is 3% a month. That is over 40% a year once compounded, and the debt doubles in about two years.'
  - 'Curd setting overnight: the bacteria multiply exponentially at first, then slow and stop as the milk turns sour, a real S-shaped curve in your kitchen.'
models:
  - name: 'Ask "multiply or add?"'
    text: 'Before predicting anything that grows (a salary, a fee, a population, a habit), ask whether each step adds a fixed amount or multiplies by a fixed factor. Adding gives a straight line; multiplying gives a curve that will eventually dwarf any straight line, however steep.'
  - name: 'The last doubling is the big one'
    text: 'With doubling, the newest step is larger than all earlier steps put together. So "only 3% full" can mean "five doublings from full". When something is growing exponentially, act early, while it still looks small: debt, an outbreak, a leak.'
  - name: 'Every exponential has a ceiling'
    text: 'Nothing real doubles forever: food, space, money or customers run out, and the curve bends into an S. When someone projects a trend forward for decades, ask what the ceiling is and how close we already are.'
links:
  - leaf: 'mat/compound-interest-and-emis'
    name: 'Compound interest, EMIs and inflation'
    same: 'Compound interest is exactly this lesson applied to money: the balance is multiplied by (1 + r) each period, and the rule of 72 tells you how fast it doubles.'
    differs: 'Loans and EMIs add or subtract fixed payments every month on top of the multiplication, so the balance is no longer a pure exponential.'
  - leaf: 'mat/geometric-progressions'
    name: 'Geometric progressions'
    same: 'The amounts N₀, N₀(1 + r), N₀(1 + r)², … form a geometric progression, and the "last step beats all the rest" fact is the GP sum formula.'
    differs: 'A GP is a list indexed by whole numbers; exponential growth also makes sense between steps (2.5 half-lives) and in continuous time, with e.'
  - leaf: 'phy/radioactivity'
    name: 'Radioactivity'
    same: 'Radioactive decay is the textbook exponential decay: N = N₀e^(−λt), with a half-life that does not depend on how much is left.'
    differs: 'Each nucleus decays at random; the smooth exponential law appears only because a sample has enormous numbers of nuclei, and λ is fixed by nature, not by a bank.'
  - leaf: 'cs/big-o'
    name: 'Big-O notation'
    same: 'The ladder n, n², 2ⁿ, n! in Big-O is the growth race of this lesson; a 2ⁿ algorithm is the chessboard again.'
    differs: 'In algorithms the exponential is a cost you try to avoid by a better method; in nature or money it is a process you observe or exploit.'
  - leaf: 'cs/scalability'
    name: 'Scalability'
    same: 'A product whose users double every few months doubles the load on every server, so capacity must be planned for the doubling time, not today''s numbers.'
    differs: 'User growth always meets a ceiling (the logistic bend); engineering is about making cost grow more slowly than users.'
next:
  q: 'Growth tells you what happens if things go as planned. But a bet, a warranty or an insurance policy pays off only sometimes: how do you put a single fair number on a chancy choice?'
  leaf: 'mat/expected-value'
  name: 'Expected value and decisions'
---

:::hook
q: Guess first. The rice on the 64th square alone would be about...
options: ["A few hundred lorry loads", "One year of India's whole rice harvest", "Hundreds of years of the whole world's rice harvest"]
answer: 2
right: Yes. Square 64 holds 2⁶³ ≈ 9.2 × 10¹⁸ grains. At 25 mg a grain that is about 2.3 × 10¹¹ tonnes. Suppose the world grows roughly 50 crore tonnes of rice a year [Unverified: a rough round figure]; then the last square needs over 400 years of the world's harvest. And it holds more than all 63 squares before it put together.
wrong: Square 64 is the halfway square doubled 32 more times. 2³² is about 4.3 billion, so it holds 54 tonnes × 4.3 billion ≈ 2.3 × 10¹¹ tonnes, hundreds of years of the world's rice harvest [Unverified: rough round figure for world production]. Doubling looks small for a long time, then overwhelms everything.
:::

## Growing by a slice of itself {lvl=1 id=s-multiply label="Class 10"}

Here are two ways to grow ₹10,000. Plan A adds ₹1,000 every year. Plan B adds 10% every year, but 10% of whatever is there at the time.

After one year both hold ₹11,000. After two years Plan A has ₹12,000, and Plan B has ₹12,100, because its second 10% was taken of ₹11,000. A difference of ₹100: hardly worth noticing. Now watch the table.

| Years | Plan A (add ₹1,000) | Plan B (add 10% of itself) |
|---|---|---|
| 0 | 10,000 | 10,000 |
| 1 | 11,000 | 11,000 |
| 2 | 12,000 | 12,100 |
| 5 | 15,000 | 16,105 |
| 10 | 20,000 | 25,937 |
| 20 | 30,000 | 67,275 |
| 30 | 40,000 | 1,74,494 |

After 30 years Plan B holds more than four times as much. Nothing dramatic happened in any single year. The difference is in what each plan does with its own growth: Plan B's additions are themselves added to and grow in turn.

Here is the key step. Adding 10% of an amount to itself is the same as **multiplying it by 1.1**. So "grows by a fixed percentage each step" means "is multiplied by the same factor each step". After 2 years Plan B holds $10000 \times 1.1 \times 1.1$; after 30 years, 1.1 multiplied in 30 times.

Write the starting amount as $N_0$ (read "N nought", the amount at time zero).

Write the growth per step as a decimal, $r$: 10% is $r = 0.1$, so each step multiplies by $1 + r$.

Then after $t$ steps the amount is

$$N = N_0\,(1+r)^t.$$

Read it as: start with $N_0$ and multiply by the growth factor $t$ times. The number of steps sits up in the exponent, which is why this is called **exponential growth**. Plan A, which adds the same amount every step, is **linear growth**: its graph is a straight line.

:::qc lvl=1
q: Which of these grows exponentially?
options: ["A salary that rises by ₹2,000 every year", "A phone that loses ₹1,500 of its value every year", "A town whose population grows by 3% every year"]
answer: 2
right: Right. 3% of a growing population is a growing number of people; each year multiplies by 1.03. The other two add or subtract a fixed amount, which is linear.
wrong: Ask "add or multiply?" A fixed ₹2,000 or ₹1,500 each year is adding a constant: a straight line. Only the 3% rule multiplies.
:::

## Slow, then sudden {lvl=1 id=s-sudden label="Class 10"}

Race the two kinds head to head. One quantity adds 80 each step. The other starts at 1 and doubles each step. Who is ahead?

For a long time the adder wins easily. After 5 steps it has 400 and the doubler has 32. After 8 steps it has 640 and the doubler 256. Then the doubler goes 512, 1024, 2048, and the race is over for good.

:::figure caption="Adding 80 a step against doubling a step. For eight steps the doubling curve hugs the floor; then it overtakes in a single step and never looks back."
<svg viewBox="0 0 360 220" role="img" aria-label="A straight line rising steadily and a doubling curve that stays flat and then shoots up past it near step 10">
<g class="axis" style="stroke:var(--ink);stroke-width:1.5;fill:none"><path d="M40 190 H340 M40 190 V16"/></g>
<path d="M40 190 L320 57.2" style="fill:none;stroke:var(--ink);stroke-width:2;stroke-dasharray:6 4"/>
<path d="M40.0 189.8 L68.0 189.7 L96.0 189.3 L124.0 188.7 L152.0 187.3 L166.0 186.2 L180.0 184.7 L194.0 182.5 L208.0 179.4 L222.0 175.0 L236.0 168.8 L250.0 159.9 L264.0 147.5 L271.0 139.5 L278.0 129.9 L285.0 118.5 L292.0 105.0 L299.0 88.9 L306.0 69.8 L313.0 47.0 L320.0 20.0" style="fill:none;stroke:var(--mat);stroke-width:2.5"/>
<circle cx="308" cy="63" r="4" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<path d="M50 30 H70" style="stroke:var(--ink);stroke-width:2;stroke-dasharray:6 4"/>
<path d="M50 48 H70" style="stroke:var(--mat);stroke-width:2.5"/>
<text x="76" y="34" style="fill:var(--ink)">adds 80 each step</text>
<text x="76" y="52" style="fill:var(--mat)">doubles each step</text>
<text x="200" y="46" style="fill:var(--muted)">overtakes here</text>
<text x="36" y="206" style="fill:var(--muted)">0</text>
<text x="177" y="206" style="fill:var(--muted)">5</text>
<text x="313" y="206" style="fill:var(--muted)">10</text>
<text x="230" y="206" style="fill:var(--muted)">steps</text>
</svg>
:::

Why does it fool us so badly? Our instinct predicts the future by drawing a straight line through the recent past. For a doubling quantity the recent past is always tiny compared with what comes next.

There is an exact fact behind this. Add up all the doublings before step $n$: $1 + 2 + 4 + \dots + 2^{n-1} = 2^n - 1$ (the sum of a geometric progression). So **the newest step is bigger than all the earlier steps put together**. A pond weed that doubles daily and covers the pond on day 30 was half-covered on day 29, a quarter-covered on day 28, and on day 25 covered only $1/32$ of the pond, about 3%. Five days before the pond is lost, it looks almost clear.

:::qc lvl=1
q: A weed doubles its area every day and covers a lake on day 20. On which day was a quarter of the lake covered?
options: ["Day 5", "Day 10", "Day 18"]
answer: 2
right: Right. Go backwards: half on day 19, a quarter on day 18. Doubling twice turns a quarter into the whole.
wrong: A quarter is half of a half. Run the clock back one day for each halving from day 20.
:::

## Doubling time and the rule of 72 {lvl=1 id=s-rule72 label="Class 10"}

At 10% a year, when does ₹10,000 become ₹20,000? Multiply by 1.1 again and again: $1.1^7 \approx 1.95$ and $1.1^8 \approx 2.14$. So it doubles in a little over 7 years (7.27 years, to be precise).

Now the surprising part. How long does ₹20,000 take to become ₹40,000? Exactly the same 7.27 years. Each year multiplies by 1.1 whatever the amount, so the number of years needed to multiply by 2 never changes. The **doubling time** depends only on the rate, not on how much you have: ₹100 and ₹1 crore double equally fast.

Write the doubling time as $T_2$ (same unit as the steps: years, hours, days). There is a beautiful shortcut for it, the **rule of 72**:

$$T_2 \approx \frac{72}{\text{rate in }\%}.$$

Read it as: divide 72 by the percentage rate to get the doubling time. Here is how good it is.

| Rate per year | Exact doubling time | 72 ÷ rate |
|---|---|---|
| 2% | 35.0 years | 36 |
| 4% | 17.7 | 18 |
| 6% | 11.9 | 12 |
| 8% | 9.01 | 9 |
| 10% | 7.27 | 7.2 |
| 12% | 6.12 | 6 |
| 18% | 4.19 | 4 |

The rule turns hard questions into easy ones.

- **Inflation.** Suppose prices rise 6% a year. They double in about 12 years, so over a 36-year working life they double three times: everything costs 8 times as much.
- **Small rates, big gaps.** Suppose one fund grows 6% a year and another 12%. Over 30 years the first doubles about 2.5 times (×5.7); the second doubles 5 times (×30). Doubling the rate made the result five times larger, not twice.
- **Backwards.** If a city's population doubles every 24 years, it is growing about $72/24 = 3\%$ a year.

Why 72, of all numbers? The exact answer for growth compounded every instant is $69.3 \div$ rate. People use 72 because it divides evenly by 2, 3, 4, 6, 8, 9 and 12, and because it happens to correct for yearly compounding at everyday rates. The JEE section below shows exactly where 69.3 comes from and why 72 fits best near 8%.

:::qc lvl=1
q: Suppose prices rise 4% a year. Roughly how long until they double?
options: ["About 8 years", "About 18 years", "About 25 years"]
answer: 1
right: Right. 72 ÷ 4 = 18 years (the exact answer is 17.7).
wrong: Use the rule of 72: divide 72 by the rate in per cent.
:::

## Shrinking by a slice: half-life {lvl=1 id=s-halflife label="Class 10"}

Run the same idea with a factor smaller than 1. Suppose a 400 mg dose of a medicine leaves the blood so that half of what is there remains every 6 hours. Then the amount goes 400, 200, 100, 50, 25 mg at 0, 6, 12, 18, 24 hours.

Equal times take away equal *fractions*, not equal amounts. The first 6 hours remove 200 mg, the next only 100, then 50. That is **exponential decay**: each step multiplies by the same factor below 1. In this model the amount never quite reaches zero; it just keeps halving.

The time for the amount to halve is the **half-life**, written $T_{1/2}$. Like the doubling time, it does not depend on how much is left: 400 mg halves in 6 hours, and so does 25 mg. After $t$ hours,

$$N = N_0\left(\tfrac12\right)^{t/T_{1/2}}.$$

Read it as: count how many half-lives fit into the time, and halve that many times. The count need not be whole: 9 hours is 1.5 half-lives, leaving $400 \times 0.5^{1.5} \approx 141$ mg.

The same law governs radioactive atoms, the charge on a capacitor draining through a resistor, the fizz going out of a cold drink and the value of a car. Suppose a car loses 15% of its value each year: each year multiplies by 0.85, and the value halves in about 4.3 years. (The rule of 72 runs a little long for losses. It says 4.8 years here; the JEE section gives the correction.)

:::note title="The percentage trap" tone=warn
A share price falls 50%, then rises 50%. Are you back where you started? No: $0.5 \times 1.5 = 0.75$, so you are at 75%. After a 50% fall you need a 100% rise to recover. Percentage changes multiply; they never simply add or cancel.
:::

:::qc lvl=1
q: A substance has a half-life of 3 days. What fraction of it is left after 12 days?
options: ["1/4", "1/12", "1/16"]
answer: 2
right: Right. 12 days is 4 half-lives, so ½ × ½ × ½ × ½ = 1/16.
wrong: Count half-lives first: 12 ÷ 3 = 4. Then halve four times.
:::

## Logarithms count the doublings {lvl=2 id=s-logs label="Class 12"}

Some questions run the formula backwards. Suppose money grows 8% a year: how long until it is ten times bigger? You need the $t$ that solves $1.08^t = 10$. Trying numbers works, but slowly.

A **logarithm** answers exactly this kind of question: how many times must I multiply by one number to reach another? Take logs of both sides and the exponent comes down:

$$t = \frac{\log 10}{\log 1.08} = \frac{1}{0.0334} \approx 29.9 \text{ years}.$$

Read it as: the number of steps is the log of the total factor divided by the log of the step factor. Any base of logarithm gives the same answer, because the base cancels in the ratio.

The same tool finds the rate hidden in two observations. Suppose an app's users grew from 2 lakh to 50 lakh in 4 years at a steady percentage. The total factor is 25, so each year multiplied by $25^{1/4} = \sqrt 5 \approx 2.24$: growth of about 124% a year. Investors call this the compound annual growth rate. Dividing 2,400% by 4 would give 600% a year, which is badly wrong.

### Seeing exponentials: the log scale

On an ordinary graph an exponential is useless to look at: it hugs the floor, then climbs the wall, and every early detail is squashed flat. A **log scale** fixes this. It spaces the gridlines by *factors*, so 1, 10, 100, 1000 (or 1, 2, 4, 8) sit at equal distances.

:::figure caption="The same doubling drawn twice. On an ordinary scale (left) the early steps vanish. On a log scale (right) every doubling is one equal step up, so steady exponential growth is a straight line."
<svg viewBox="0 0 360 200" role="img" aria-label="Left: a curve flat along the bottom that shoots up at the end. Right: the same data as a straight rising line on a logarithmic axis">
<g class="axis" style="stroke:var(--ink);stroke-width:1.5;fill:none"><path d="M30 170 H164 M30 170 V22 M210 170 H344 M210 170 V22"/></g>
<path d="M30.0 169.9 L43.0 169.7 L56.0 169.5 L69.0 168.9 L82.0 167.8 L95.0 165.6 L101.5 163.8 L108.0 161.3 L114.5 157.6 L121.0 152.5 L127.5 145.3 L134.0 135.0 L140.5 120.5 L147.0 100.0 L150.3 86.8 L153.5 71.0 L156.8 52.3 L160.0 30.0" style="fill:none;stroke:var(--mat);stroke-width:2.5"/>
<path d="M210 170 L340 30" style="fill:none;stroke:var(--mat);stroke-width:2.5"/>
<g class="faint" style="stroke:var(--muted);stroke-width:0.8;stroke-dasharray:2 3"><path d="M210 100 H340 M210 30 H340 M30 30 H160"/></g>
<text x="40" y="16" style="fill:var(--ink)">ordinary scale</text>
<text x="230" y="16" style="fill:var(--ink)">log scale</text>
<text x="2" y="34" style="fill:var(--muted)">1024</text>
<text x="20" y="184" style="fill:var(--muted)">0</text>
<text x="180" y="34" style="fill:var(--muted)">1024</text>
<text x="193" y="104" style="fill:var(--muted)">32</text>
<text x="199" y="174" style="fill:var(--muted)">1</text>
<text x="170" y="194" style="fill:var(--muted)">equal steps = equal factors</text>
</svg>
:::

This is why epidemic charts, stock-market indices over a century and the brightness of stars are drawn on log scales, and why the Richter scale and decibels are logarithmic. Two habits follow:

- A **straight line on a log chart means steady exponential growth**, and its slope is the rate: one gridline (×10) every 25 years means $10^{1/25} \approx 1.096$, about 10% a year.
- A line on a log chart that **bends downwards** means growth is slowing, even if the ordinary chart still looks frightening.

:::note title="Problem-solving move: conjecture, then test, then prove" tone=tip
Experiments suggest a pattern; a pattern is not yet a proof. Zeitz's warning example: put $n$ points on a circle, join every pair, and count the most regions you can get. For $n = 1, 2, 3, 4, 5$ you find 1, 2, 4, 8, 16. Doubling is "practically inescapable", yet $n = 6$ gives 31. Before calling something exponential, ask for the *mechanism*: does each unit really produce a fixed fraction of new units each step? Bacteria splitting and interest on interest pass this test; the circle regions do not. (Zeitz, *The Art and Craft of Problem Solving*, §2.2, Cautionary tales 2.2.35, p. 39. The full problem is in the Olympiad set below.)
:::

:::qc lvl=2
q: On a log-scale chart, a quantity rises in a straight line, climbing one gridline (×10) every 25 years. Roughly what is its yearly growth rate?
options: ["About 4%", "About 10%", "About 40%"]
answer: 1
right: Right. ×10 is about 3.3 doublings, so it doubles every 25 ÷ 3.3 ≈ 7.5 years, and 72 ÷ 7.5 ≈ 10%. Exactly, 10^(1/25) ≈ 1.096.
wrong: Ten-fold growth in 25 years is not 10 ÷ 25 = 0.4 per year. Find the per-year factor: 10^(1/25), or count doublings (×10 is about 3.3 doublings) and use the rule of 72.
:::

## Compounding faster: the number e {lvl=3 id=s-e label="JEE"}

Imagine a generous bank that pays 100% interest a year. Put in ₹1, and after a year you have ₹2. Now ask for the interest half-yearly instead: 50% after six months, then 50% on the new balance, giving $1.5^2 = 2.25$. Quarterly gives $1.25^4 \approx 2.44$. Is there any limit to this?

| Compounding | Formula | ₹1 becomes |
|---|---|---|
| yearly | $(1+1)^1$ | 2 |
| half-yearly | $(1+\tfrac12)^2$ | 2.25 |
| quarterly | $(1+\tfrac14)^4$ | 2.4414 |
| monthly | $(1+\tfrac1{12})^{12}$ | 2.6130 |
| daily | $(1+\tfrac1{365})^{365}$ | 2.7146 |
| every instant | limit | 2.71828… |

Each extra slice of compounding helps less, and the totals close in on a fixed number. That number is **e** $= 2.71828\ldots$:

$$e = \lim_{n\to\infty}\left(1 + \frac1n\right)^n.$$

Read it as: compound 100% growth over $n$ tiny periods, and let the periods shrink without end.

For a different rate $k$ per year (as a decimal), compounding $n$ times a year for $t$ years gives $(1 + k/n)^{nt}$. Write $m = n/k$: this is $\left[(1 + 1/m)^m\right]^{kt}$, and as $m \to \infty$ the bracket becomes $e$. So **continuous growth** at rate $k$ gives

$$N = N_0\,e^{kt}.$$

Read it as: $e^k$ is the true yearly factor when growth is compounded every instant. At $k = 0.12$, $e^{0.12} = 1.1275$, so "12% continuously" is the same as 12.75% compounded yearly.

Why is $e$ the natural base? Because continuous growth means the **rate of growth is proportional to the amount**: $\dfrac{dN}{dt} = kN$. Read it as: the bigger it is, the faster it grows, in strict proportion. And $e^{kt}$ is exactly the function whose slope is $k$ times itself. Bacteria, unchecked populations, interest on interest and radioactive nuclei all obey this one equation (with $k < 0$ for decay).

### Where 0.693 and 72 come from

The natural logarithm $\ln x$ is the log with base $e$. Doubling under continuous growth needs $e^{kT_2} = 2$, so

$$T_2 = \frac{\ln 2}{k} \approx \frac{0.693}{k}.$$

Read it as: the doubling time is 0.693 divided by the continuous rate; with the rate in per cent, $69.3 \div$ rate. That is the honest "rule of 69.3".

You can get $\ln 2$ by hand. A series gives $\ln\dfrac{1+x}{1-x} = 2\left(x + \dfrac{x^3}{3} + \dfrac{x^5}{5} + \cdots\right)$, and $x = \tfrac13$ makes the left side $\ln 2$:

$$\ln 2 = 2\left(\frac13 + \frac1{81} + \frac1{1215} + \frac1{15309} + \cdots\right) = 0.6931\ldots$$

Now yearly compounding at rate $r$: $T_2 = \ln 2 / \ln(1+r)$. For small $r$, $\ln(1+r) = r - \dfrac{r^2}{2} + \cdots \approx r\left(1 - \dfrac r2\right)$, so

$$T_2 \approx \frac{0.693}{r}\left(1 + \frac r2\right) = \frac{0.693}{r} + 0.35.$$

With the rate in per cent: $T_2 \approx 69.3/\text{rate} + 0.35$. At 8% this gives $8.66 + 0.35 = 9.01$ years, against the exact 9.006. The rule of 72 agrees with this whenever $72/\text{rate} = 69.3/\text{rate} + 0.35$, that is near 8%. So 72 is 69.3 nudged up to fit yearly compounding at everyday rates, and chosen for its many divisors.

For a loss of $r$ per step, $-\ln(1 - r) = r + r^2/2 + \cdots$, and the correction flips sign: $T_{1/2} \approx 69.3/\text{rate} - 0.35$. At a 15% loss that is $4.62 - 0.35 = 4.27$ years, matching the car example. This is why the rule of 72 runs long for losses.

:::worked title="Continuous decay and half-life"
A radioactive sample decays continuously, $N = N_0 e^{-\lambda t}$, where the decay constant $\lambda$ is the fraction lost per unit time. Setting $N = N_0/2$ gives $T_{1/2} = \ln 2/\lambda$. If $\lambda = 0.0231$ per day, $T_{1/2} = 0.693/0.0231 = 30$ days. After 75 days the fraction left is $e^{-0.0231 \times 75} = e^{-1.733} \approx 0.177$, the same as $(1/2)^{2.5} = 0.177$. The two forms are one law.
:::

:::qc lvl=3
q: Something grows continuously at 5% a year (k = 0.05). What is its doubling time?
options: ["13.9 years", "14.4 years", "20 years"]
answer: 0
right: Right. T₂ = ln 2 / k = 0.693 / 0.05 = 13.86 years. The rule of 72 would say 14.4; for continuous growth 69.3 is exact.
wrong: For continuous growth T₂ = ln 2 / k = 0.693 / 0.05. 20 years is what you get by dividing 1 by 0.05, which is not a doubling time.
:::

## Why real growth bends {lvl=3 id=s-logistic label="JEE"}

Suppose the bacteria in setting curd doubled every half hour. In 24 hours that is 48 doublings, a factor of $2^{48} \approx 2.8 \times 10^{14}$. A spoonful of starter would become billions of tonnes of curd by morning. It does not, of course: the milk runs out of sugar, the acid the bacteria make slows them down, and growth stops. In any finite space with finite food, doubling must end.

The simplest model of a ceiling is **logistic growth**. Let $K$ be the **carrying capacity**, the most the surroundings can support (the size of the colony a rumour spreads in, the number of customers who could ever buy a phone). Then

$$\frac{dN}{dt} = kN\left(1 - \frac NK\right).$$

Read it as: growth is proportional to how many there are *and* to the fraction of room still left. When $N$ is small the bracket is nearly 1 and growth is exponential. When $N$ nears $K$ the bracket nears 0 and growth stalls. The product $N(K - N)$ is largest when $N = K/2$, so **growth is fastest at half the ceiling**, the steep middle of the S.

The solution (solve the equation by separating variables and partial fractions) is

$$N(t) = \frac{K}{1 + A\,e^{-kt}}, \qquad A = \frac{K - N_0}{N_0}.$$

Read it as: the ceiling, divided by a correction that dies away exponentially. Half the ceiling is reached when $A e^{-kt} = 1$, at $t = \ln A / k$.

:::figure caption="Exponential and logistic growth start out the same. The exponential leaves the chart; the logistic curve bends at half the ceiling and levels off at K."
<svg viewBox="0 0 360 214" role="img" aria-label="Two curves from the same start: a dashed exponential shooting up, and an S-shaped logistic curve levelling off under a dashed ceiling line">
<g class="axis" style="stroke:var(--ink);stroke-width:1.5;fill:none"><path d="M40 180 H344 M40 180 V14"/></g>
<path d="M40 40 H340" style="fill:none;stroke:var(--muted);stroke-width:1.2;stroke-dasharray:4 4"/>
<path d="M40.0 178.6 L52.5 177.9 L65.0 176.9 L77.5 175.4 L90.0 173.1 L102.5 169.7 L115.0 164.6 L121.3 161.2 L127.5 157.0 L133.8 151.9 L140.0 145.7 L146.3 138.1 L152.5 128.8 L158.8 117.4 L165.0 103.6 L171.3 86.6 L177.5 66.0 L183.8 40.7 L188.0 20.0" style="fill:none;stroke:var(--ink);stroke-width:2;stroke-dasharray:6 4"/>
<path d="M40.0 178.6 L52.5 177.9 L65.0 176.9 L77.5 175.5 L90.0 173.3 L102.5 170.3 L115.0 166.0 L127.5 160.1 L140.0 152.2 L152.5 142.2 L165.0 130.2 L177.5 116.8 L183.8 109.8 L190.0 102.9 L202.5 89.5 L215.0 77.5 L227.5 67.6 L240.0 59.8 L252.5 53.9 L265.0 49.6 L277.5 46.6 L290.0 44.5 L302.5 43.0 L315.0 42.1 L327.5 41.4 L340.0 40.9" style="fill:none;stroke:var(--mat);stroke-width:2.5"/>
<circle cx="183.6" cy="110" r="3.5" style="fill:var(--mat)"/>
<text x="104" y="30" style="fill:var(--ink)">exponential</text>
<text x="276" y="32" style="fill:var(--muted)">ceiling K</text>
<text x="230" y="86" style="fill:var(--mat)">S-curve levels off</text>
<text x="200" y="128" style="fill:var(--muted)">fastest at K/2</text>
<text x="300" y="198" style="fill:var(--muted)">time</text>
</svg>
:::

The figure holds the lesson's most practical warning. **Early on, the two curves are indistinguishable.** Fit an exponential to the first weeks of a new app or an outbreak and it predicts doom; the bend only shows once you are near the middle. The steepest moment is the halfway point, so the day growth is fastest is also the day it starts to slow.

:::worked title="A rumour in a colony"
Suppose a colony has 5,000 people, 50 know a rumour, and it spreads logistically with $k = 0.5$ per day. Then $A = (5000 - 50)/50 = 99$. Half the colony knows it at $t = \ln 99 / 0.5 \approx 9.2$ days, and that is when it spreads fastest: $kK/4 = 0.5 \times 5000/4 = 625$ new people a day. A purely exponential model would have predicted $50e^{0.5 \times 18.4} \approx 5 \times 10^5$ people after 18.4 days, a hundred times the colony.
:::

:::qc lvl=3
q: In logistic growth with ceiling K, when are the most new cases added per day?
options: ["At the very start, when growth is purely exponential", "When N = K/2", "Just before N reaches K"]
answer: 1
right: Right. The growth rate kN(1 − N/K) is a downward parabola in N, highest at N = K/2. That is the inflection point of the S.
wrong: At the start N is tiny, so kN is small; near K the bracket (1 − N/K) is tiny. The product kN(1 − N/K) peaks in between, at N = K/2.
:::

## The growth race: powers, 2ⁿ and n! {lvl=4 id=s-race label="Olympiad"}

Which is bigger in the long run, $n^{10}$ or $2^n$? At $n = 10$ it is no contest: $10^{10}$ against $1024$. Yet the exponential wins eventually, and the reason is the same step-by-step thinking as the whole lesson.

**Compare step ratios.** Going from $n$ to $n + 1$, the power $n^p$ (for a fixed power $p$) is multiplied by $\left(1 + \tfrac1n\right)^p$, a factor that sinks towards 1 as $n$ grows. The exponential $2^n$ is always multiplied by 2. Once $\left(1 + \tfrac1n\right)^{10} < 2$, which holds for every $n \ge 14$, the exponential gains ground every single step. It starts hopelessly behind, so the catching up takes a while: $2^n$ passes $n^{10}$ for good only at $n = 59$ ($2^{59} \approx 5.8 \times 10^{17}$ against $59^{10} \approx 5.1 \times 10^{17}$).

**A proof with no limits.** For $a = 1 + h$ with $h > 0$, the binomial theorem gives $(1 + h)^n \ge \binom{n}{p+1}h^{p+1}$, a polynomial of degree $p + 1$ in $n$. Divided by $n^p$ it still grows like $n$, so $a^n / n^p \to \infty$. **Every exponential with base above 1 beats every power**, even $1.001^n$ against $n^{1000}$.

**Factorials beat exponentials.** Each step multiplies $n!$ by $n + 1$, a factor that keeps growing. Once $n + 1 > a$, the factorial gains on $a^n$ at every step, so $n!$ wins against any fixed base: $n! > 10^n$ from $n = 25$ on. And $n^n$ beats $n!$, because $n^n / n! = \tfrac{n}{1}\cdot\tfrac{n}{2}\cdots\tfrac{n}{n}$, a product of factors that are all at least 1.

**The log view** ranks everything at once. Taking logs, $\ln n^p = p\ln n$, $\ln a^n = n\ln a$, and Stirling's formula $n! \approx \sqrt{2\pi n}\,(n/e)^n$ gives $\ln n! \approx n\ln n - n$. Since $\ln n \ll n \ll n\ln n$, the hierarchy is

$$\log n \;\ll\; n^p \;\ll\; a^n \;\ll\; n! \;\ll\; n^n.$$

Read it as: each one eventually leaves everything to its left behind, by any fixed factor you like. This is the ladder of Big-O in computing: trying all subsets of $n$ items costs $2^n$, trying all orderings costs $n!$, and no faster computer can rescue either for large $n$.

:::note title="Problem-solving move: mathematical induction" tone=tip
To prove a statement for every whole number from some point on, show it for the first case and show that each case pushes over the next, like dominoes. Zeitz's Example 2.3.6 is exactly our race: $n! > 2^n$ for $n \ge 4$. Base: $4! = 24 > 16$. Step: if $n! > 2^n$, then $(n+1)! = (n+1)\,n! > (n+1)\,2^n > 2 \cdot 2^n = 2^{n+1}$. The step-ratio argument above is induction in disguise: the factorial's step factor $n + 1$ beats the exponential's 2. (Zeitz, *The Art and Craft of Problem Solving*, §2.3, p. 46.)
:::

:::qc lvl=4
q: For very large n, which of these is biggest?
options: ["n^100", "1.01^n", "n! / n^50"]
answer: 2
right: Right. Dividing a factorial by a power cannot stop it: ln(n!/n^50) ≈ n ln n − n − 50 ln n, which outruns n ln 1.01 and 100 ln n.
wrong: Order the families: any power ≪ any exponential (so 1.01ⁿ beats n¹⁰⁰ eventually) ≪ factorial. Dividing n! by n⁵⁰ only knocks off a power, which cannot pull it below an exponential.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Growing by a fixed percentage means multiplying by the same factor each step: $N = N_0(1 + r)^t$. Adding a fixed amount is linear; multiplying is exponential. {lvl=1}
2. Exponential growth looks slow, then sudden: with doubling, the newest step outweighs all earlier steps combined. {lvl=1}
3. Doubling time depends only on the rate, never on the amount; it is about 72 ÷ (rate in %). {lvl=1}
4. Decay is the same law with a factor below 1; the half-life is the same for any amount left. {lvl=1}
5. Logarithms give the time to reach a target or the rate behind two readings; on a log scale steady exponential growth is a straight line. {lvl=2}
6. Continuous compounding gives $e$ and $N = N_0e^{kt}$; $T_2 = \ln 2/k \approx 0.693/k$, and 72 is 69.3 adjusted for yearly compounding near 8%. {lvl=3}
7. Real growth meets a ceiling: logistic growth is fastest at $K/2$, then levels off at $K$. {lvl=3}
8. In the long run $\log n \ll n^p \ll a^n \ll n! \ll n^n$; compare step ratios to see why. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A 30% rise over 10 years is not 3% a year: take the 10th root of 1.3 (about 2.66% a year). {lvl=1}
- A 50% fall and a 50% rise leave you at 75%; percentages multiply. {lvl=1}
- Do not extrapolate a doubling quantity with a straight line through the last few points; it will be far bigger than you think. {lvl=1}
- The rule of 72 is an approximation for everyday rates; for losses it runs long, and at very high rates it breaks down. {lvl=1}
- Match the rate to the step: a 3% monthly rate over a year is $1.03^{12} \approx 1.43$, not 36%. {lvl=2}
- A few doublings in a row are not proof of exponential growth; check the mechanism (Zeitz's circle regions go 1, 2, 4, 8, 16, 31). {lvl=2}
- Early data cannot tell exponential from logistic growth; any forecast far beyond the data is a guess about the ceiling. {lvl=3}
- "n¹⁰ is huge" is true only for small n; any exponential with base above 1 eventually wins, and n! beats every exponential. {lvl=4}
:::
