---
title: Compound interest, EMIs and inflation
summary: Why a 9% home loan can make you repay more than double, and how one geometric series decides every EMI.
ncert: []
up_to: Olympiad
builds_on: [Percentages in life, Geometric progressions]
notes_prompt: Explain to a friend who is about to take a loan why the first EMIs barely reduce the debt, using no formula at all.
margin:
  - kind: history
    title: History
    text: 'Jacob Bernoulli met the number e in 1683 while asking what happens to a loan if interest is added more and more often. [Unverified: date from memory]'
  - kind: tip
    title: Exam favourite
    text: 'For 2 years the gap between compound and simple interest is exactly P r². For 3 years it is P r²(3 + r).'
  - kind: olympiad
    title: Olympiad link
    text: 'Every loan question is a geometric series. The continuous version is the differential equation dB/dt = rB − p, the same one that charges a capacitor.'
books:
  - { title: "Paul Zeitz, The Art and Craft of Problem Solving (2nd ed.)", ref: "§2.2 Strategies for getting started: Get your hands dirty (p. 26), Penultimate step (p. 27); Problems 2.3.28 and 2.3.33 (p. 51)" }
  - { title: "NCERT Class 11 Mathematics", ref: "Sequences and Series (geometric progressions) [Unverified: chapter number not checked]" }
  - { title: "NCERT Class 8 Mathematics", ref: "Comparing Quantities (compound interest) [Unverified: chapter not checked]" }
cards:
  - { front: "Simple versus compound interest in one line?", back: "Simple: interest only on the original sum, so the money grows by the same amount each year. Compound: interest on interest, so it grows by the same factor each year." }
  - { front: "12% a year charged 1% a month: what is the effective annual rate?", back: "$1.01^{12} - 1 \\approx 12.68\\%$." }
  - { front: "Real return when the deposit pays 7% and prices rise 5%?", back: "$1.07/1.05 - 1 \\approx 1.90\\%$. Divide growth factors; do not subtract rates." }
  - { front: "The EMI formula and where it comes from?", back: "$E = \\dfrac{P r (1+r)^n}{(1+r)^n - 1}$: the loan equals the present value of the $n$ instalments, a geometric series." }
  - { front: "Interest part of the k-th EMI?", back: "$E\\,[1 - (1+r)^{-(n-k+1)}]$. Early EMIs are mostly interest; the principal part grows by the factor $1+r$ each month." }
  - { front: "What does a very long tenure do to the EMI?", back: "It falls only towards $P r$, the interest-only floor, while total interest keeps climbing." }
core:
  idea: 'Interest added to the balance earns interest itself, so money grows by the same factor every period. An EMI is that idea run backwards: the loan must equal the worth today of all the instalments, and each instalment first pays the month''s interest, only the rest cutting the debt.'
  formulas:
    - tex: 'A = P\,(1+r)^n'
      label: 'Compound growth: n periods at rate r per period'
    - tex: 'E = \dfrac{P\,r\,(1+r)^n}{(1+r)^n - 1}'
      label: 'EMI on a loan P repaid in n equal instalments'
    - tex: '1 + \text{real rate} = \dfrac{1 + r}{1 + i}'
      label: 'Real return after inflation i'
  conditions:
    - 'The rate per period stays fixed for the whole term'
    - 'Interest is added at the end of each period on the balance at that moment (reducing balance)'
    - 'Equal instalments, the first one period after the loan, with no fees or prepayments'
    - 'All rates are written as decimals per period: 9% a year charged monthly means r = 0.0075'
  sign: 'Always use the rate per period and the number of periods. Putting 9 (or 0.09) where the monthly 0.0075 belongs is the commonest slip.'
outcomes:
  - 'Tell simple from compound interest and compute either in your head for small cases'
  - 'Convert a quoted rate into its effective annual rate and its real (after-inflation) return'
  - 'Derive the EMI formula from the present value of the instalments, a geometric series'
  - 'Split any EMI into interest and principal and explain why early EMIs barely cut the debt'
  - 'Use continuous compounding and sensitivity to judge how rate and tenure change a loan'
opener:
  story: |
    Your cousin has just bought a flat. The bank lent ₹30 lakh at 9% a year, to be repaid over 20 years in equal monthly instalments, the famous **EMI**. The bank's sheet says the EMI is about ₹27,000. That sounds manageable. It is roughly a good monthly salary's worth of rent.

    Then you do the multiplication. 240 months times ₹27,000 is about ₹65 lakh. For a ₹30 lakh loan. At 9%. Your cousin's face goes through three expressions in five seconds.

    Here is the puzzle. If 9% a year sounds small, how does it turn ₹30 lakh into ₹65 lakh? And yet, if you charged 9% on the full ₹30 lakh for all 20 years, you would get even more: ₹84 lakh. So the true answer sits between "9% is tiny" and "9% for 20 years is huge". Where exactly, and why?
  art: '<svg viewBox="0 0 320 200" role="img" aria-label="A house bought with a loan, and a grid of 240 monthly instalments"><path d="M40 92 L100 46 L160 92Z" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><rect x="56" y="92" width="88" height="66" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><rect x="90" y="122" width="20" height="36" style="fill:var(--muted)"/><rect x="66" y="104" width="16" height="14" style="fill:none;stroke:var(--ink)"/><rect x="118" y="104" width="16" height="14" style="fill:none;stroke:var(--ink)"/><text x="100" y="180" text-anchor="middle" style="font-size:11px;fill:var(--muted)">borrow ₹30 lakh</text><path d="M160 112 L178 112" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><path d="M174 108 L180 112 L174 116" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><g style="fill:var(--c)"><circle cx="190" cy="40" r="3.5"/><circle cx="200" cy="40" r="3.5"/><circle cx="210" cy="40" r="3.5"/><circle cx="220" cy="40" r="3.5"/><circle cx="230" cy="40" r="3.5"/><circle cx="240" cy="40" r="3.5"/><circle cx="250" cy="40" r="3.5"/><circle cx="260" cy="40" r="3.5"/><circle cx="270" cy="40" r="3.5"/><circle cx="280" cy="40" r="3.5"/><circle cx="290" cy="40" r="3.5"/><circle cx="300" cy="40" r="3.5"/><circle cx="190" cy="52" r="3.5"/><circle cx="200" cy="52" r="3.5"/><circle cx="210" cy="52" r="3.5"/><circle cx="220" cy="52" r="3.5"/><circle cx="230" cy="52" r="3.5"/><circle cx="240" cy="52" r="3.5"/><circle cx="250" cy="52" r="3.5"/><circle cx="260" cy="52" r="3.5"/><circle cx="270" cy="52" r="3.5"/><circle cx="280" cy="52" r="3.5"/><circle cx="290" cy="52" r="3.5"/><circle cx="300" cy="52" r="3.5"/><circle cx="190" cy="64" r="3.5"/><circle cx="200" cy="64" r="3.5"/><circle cx="210" cy="64" r="3.5"/><circle cx="220" cy="64" r="3.5"/><circle cx="230" cy="64" r="3.5"/><circle cx="240" cy="64" r="3.5"/><circle cx="250" cy="64" r="3.5"/><circle cx="260" cy="64" r="3.5"/><circle cx="270" cy="64" r="3.5"/><circle cx="280" cy="64" r="3.5"/><circle cx="290" cy="64" r="3.5"/><circle cx="300" cy="64" r="3.5"/><circle cx="190" cy="76" r="3.5"/><circle cx="200" cy="76" r="3.5"/><circle cx="210" cy="76" r="3.5"/><circle cx="220" cy="76" r="3.5"/><circle cx="230" cy="76" r="3.5"/><circle cx="240" cy="76" r="3.5"/><circle cx="250" cy="76" r="3.5"/><circle cx="260" cy="76" r="3.5"/><circle cx="270" cy="76" r="3.5"/><circle cx="280" cy="76" r="3.5"/><circle cx="290" cy="76" r="3.5"/><circle cx="300" cy="76" r="3.5"/><circle cx="190" cy="88" r="3.5"/><circle cx="200" cy="88" r="3.5"/><circle cx="210" cy="88" r="3.5"/><circle cx="220" cy="88" r="3.5"/><circle cx="230" cy="88" r="3.5"/><circle cx="240" cy="88" r="3.5"/><circle cx="250" cy="88" r="3.5"/><circle cx="260" cy="88" r="3.5"/><circle cx="270" cy="88" r="3.5"/><circle cx="280" cy="88" r="3.5"/><circle cx="290" cy="88" r="3.5"/><circle cx="300" cy="88" r="3.5"/><circle cx="190" cy="100" r="3.5"/><circle cx="200" cy="100" r="3.5"/><circle cx="210" cy="100" r="3.5"/><circle cx="220" cy="100" r="3.5"/><circle cx="230" cy="100" r="3.5"/><circle cx="240" cy="100" r="3.5"/><circle cx="250" cy="100" r="3.5"/><circle cx="260" cy="100" r="3.5"/><circle cx="270" cy="100" r="3.5"/><circle cx="280" cy="100" r="3.5"/><circle cx="290" cy="100" r="3.5"/><circle cx="300" cy="100" r="3.5"/><circle cx="190" cy="112" r="3.5"/><circle cx="200" cy="112" r="3.5"/><circle cx="210" cy="112" r="3.5"/><circle cx="220" cy="112" r="3.5"/><circle cx="230" cy="112" r="3.5"/><circle cx="240" cy="112" r="3.5"/><circle cx="250" cy="112" r="3.5"/><circle cx="260" cy="112" r="3.5"/><circle cx="270" cy="112" r="3.5"/><circle cx="280" cy="112" r="3.5"/><circle cx="290" cy="112" r="3.5"/><circle cx="300" cy="112" r="3.5"/><circle cx="190" cy="124" r="3.5"/><circle cx="200" cy="124" r="3.5"/><circle cx="210" cy="124" r="3.5"/><circle cx="220" cy="124" r="3.5"/><circle cx="230" cy="124" r="3.5"/><circle cx="240" cy="124" r="3.5"/><circle cx="250" cy="124" r="3.5"/><circle cx="260" cy="124" r="3.5"/><circle cx="270" cy="124" r="3.5"/><circle cx="280" cy="124" r="3.5"/><circle cx="290" cy="124" r="3.5"/><circle cx="300" cy="124" r="3.5"/></g><text x="245" y="20" text-anchor="middle" style="font-size:11px;fill:var(--muted)">20 years at 9%</text><text x="245" y="152" text-anchor="middle" style="font-size:11px;fill:var(--muted)">240 EMIs of ₹27,000</text><text x="245" y="180" text-anchor="middle" style="font-size:11px;fill:var(--ink)">repay ₹ ? lakh</text></svg>'
symbols:
  - s: 'P'
    means: 'principal: the amount deposited or borrowed (₹)'
  - s: 'r'
    means: 'interest rate per period, as a decimal (9% a year charged monthly gives r = 0.0075)'
  - s: 'n'
    means: 'number of periods (years, or months for a loan)'
  - s: 'A'
    means: 'amount after n periods, principal plus interest (₹)'
  - s: 'R'
    means: 'nominal (quoted) annual rate, as a decimal'
  - s: 'm'
    means: 'number of times interest is added per year'
  - s: 'i'
    means: 'inflation rate per year: how fast prices rise, as a decimal'
  - s: 'E'
    means: 'EMI, the equal monthly instalment (₹)'
  - s: 'B_k'
    means: 'balance (loan still owed) just after the k-th instalment (₹)'
  - s: 'e'
    means: 'the number 2.71828…, the limit of (1 + 1/n)^n'
  - s: 'p'
    means: 'payment rate in the continuous model (₹ per year)'
life:
  - 'A fixed deposit or recurring deposit at a bank compounds every quarter or so, which is why its yearly yield is quoted above its rate.'
  - 'A home, car or education loan is repaid in EMIs; the bank''s repayment schedule is the amortisation table of this lesson.'
  - 'A credit-card statement shows a small "minimum amount due"; paying only that keeps the debt alive for years.'
  - 'Prices of milk, petrol and school fees rise every year, so a salary or a deposit has to grow faster just to stand still.'
  - '"No-cost EMI" offers on phones and laptops hide the interest in the price or in a discount you give up.'
models:
  - name: 'Same factor, not same amount'
    text: 'Anything that grows by a percentage of itself (savings, debt, prices, followers, a habit) multiplies by the same factor each step. Ask "by what factor per year?" rather than "by how much per year?".'
  - name: 'A rupee later is worth less than a rupee now'
    text: 'Money you receive later could have been earning interest meanwhile, so future amounts must be divided by (1 + r) for each period of waiting before they are compared. This is how to compare a salary offer, a lump sum versus instalments, or a public project that pays off in thirty years.'
  - name: 'The front-loaded cost'
    text: 'In any loan the early payments are mostly interest. So extra payments made early save the most, and switching or refinancing late saves the least. The same shape appears in any process where a cost is charged on what is left.'
links:
  - leaf: 'mat/geometric-progressions'
    name: 'Geometric progressions'
    same: 'The amounts P, P(1+r), P(1+r)², … form a GP, and the EMI formula is the sum of a finite GP.'
    differs: 'A GP is pure algebra; a loan adds a story (who owes what, when) and rounding to the rupee.'
  - leaf: 'mat/exponential-growth'
    name: 'Exponential growth and doubling'
    same: 'Compound interest is exponential growth with a fixed rate; continuous compounding is literally $Pe^{Rt}$.'
    differs: 'Money is added in steps at known dates; populations and epidemics grow continuously and their rate itself changes.'
  - leaf: 'phy/capacitors'
    name: 'Capacitors (RC charging)'
    same: 'The continuous loan obeys $dB/dt = RB - p$, the same first-order linear equation as a charging capacitor, so both have an exponential solution approaching a steady value.'
    differs: 'A capacitor''s exponential decays towards equilibrium; a loan''s balance grows exponentially away from it unless the payment beats the interest.'
  - leaf: 'cs/iv-offers'
    name: 'Offers and negotiation'
    same: 'Comparing a joining bonus with shares that vest over four years is a present-value question, exactly like valuing EMIs.'
    differs: 'A loan''s cash flows are fixed by contract; shares and bonuses depend on uncertain future prices.'
  - leaf: 'cs/numbers-in-a-computer'
    name: 'How computers store numbers'
    same: 'A bank''s software must round every EMI and interest charge to the paisa, and it stores money as whole paise so that the rounding never drifts.'
    differs: 'Here the maths is exact; there the issue is that 0.1 has no exact binary form, so floating point is the wrong tool for money.'
next:
  q: 'At 9% a year money roughly doubles in 8 years, and at 6% in 12. Why does 72 divided by the rate give the doubling time so well, and why does the same rule tell you how fast a rumour, a virus or a city grows?'
  leaf: 'mat/exponential-growth'
  name: 'Exponential growth and doubling'
---

:::hook
q: So what's your guess? A ₹30 lakh loan at 9% a year, repaid in equal monthly EMIs over 20 years. Roughly how much do you repay in total?
options: ["About ₹33 lakh: 9% is small", "About ₹65 lakh", "About ₹84 lakh: 9% for 20 years", "About ₹1.7 crore: compound interest for 20 years"]
answer: 1
right: Right. The EMI is about ₹26,992, so 240 of them come to about ₹64.8 lakh. That is less than ₹84 lakh because every EMI repays a little of the loan, so interest is charged on a shrinking balance. It is far more than ₹33 lakh because for many years most of the balance is still owed.
wrong: Each answer is a different mistake. ₹33 lakh charges interest for only one year. ₹84 lakh charges 9% on the full ₹30 lakh for all 20 years, but you repay part of it every month. ₹1.7 crore lets the whole loan compound untouched for 20 years. The truth, about ₹65 lakh, is in between; this lesson shows exactly why.
:::

## Interest on interest {lvl=1 id=s-compound label="Class 10"}

Put ₹1,00,000 in a bank that pays 10% a year. After one year you have ₹1,10,000. Now comes the fork in the road.

Under **simple interest**, the bank keeps paying 10% of the original ₹1,00,000 only, so you earn ₹10,000 every year. After 3 years you have ₹1,30,000. In symbols, with the rate $r$ written as a decimal (10% is 0.10) and $t$ the number of years,
$$\text{simple interest} = P \times r \times t.$$
Read it as: the principal, times the rate, times the years. Every year adds the same amount.

Under **compound interest**, the interest is added to your balance, and next year's 10% is worked out on the new, bigger balance. Year 2 gives 10% of ₹1,10,000, which is ₹11,000. Year 3 gives 10% of ₹1,21,000, which is ₹12,100. After 3 years you have ₹1,33,100.

| Year | Simple (₹) | Compound (₹) |
|---|---|---|
| 1 | 1,10,000 | 1,10,000 |
| 2 | 1,20,000 | 1,21,000 |
| 3 | 1,30,000 | 1,33,100 |
| 10 | 2,00,000 | 2,59,374 |
| 30 | 4,00,000 | 17,44,940 |

The gap is tiny at first and then enormous. The reason is a single habit: adding 10% to something means multiplying it by 1.1. Do that every year and the money is multiplied by 1.1 again and again. After $n$ years,
$$A = P(1+r)^n.$$
Read it as: the amount is the principal times the growth factor, multiplied by itself once for every year.

:::figure caption="₹1 lakh at 10% a year for 30 years. Simple interest adds the same ₹10,000 every year (a straight line). Compound interest multiplies by 1.1 every year (a curve that bends ever more steeply)."
<svg viewBox="0 0 360 214" role="img" aria-label="Simple interest grows in a straight line, compound interest curves upward"><line class="axis" x1="40" y1="190" x2="336" y2="190"/><line class="axis" x1="40" y1="190" x2="40" y2="14"/><text x="34" y="146.8" text-anchor="end">5</text><line class="faint" x1="40" y1="142.8" x2="336" y2="142.8"/><text x="34" y="99.6" text-anchor="end">10</text><line class="faint" x1="40" y1="95.6" x2="336" y2="95.6"/><text x="34" y="52.3" text-anchor="end">15</text><line class="faint" x1="40" y1="48.3" x2="336" y2="48.3"/><text x="4" y="12">₹ lakh</text><text x="40" y="205" text-anchor="middle">0</text><text x="136.7" y="205" text-anchor="middle">10</text><text x="233.3" y="205" text-anchor="middle">20</text><text x="330.0" y="205" text-anchor="end">30 years</text><line class="ray" x1="40.0" y1="180.6" x2="330.0" y2="152.2" style="stroke:var(--muted)"/><polyline points="40.0,180.6 49.7,179.6 59.3,178.6 69.0,177.4 78.7,176.2 88.3,174.8 98.0,173.3 107.7,171.6 117.3,169.8 127.0,167.7 136.7,165.5 146.3,163.1 156.0,160.4 165.7,157.4 175.3,154.1 185.0,150.5 194.7,146.6 204.3,142.3 214.0,137.5 223.7,132.2 233.3,126.5 243.0,120.1 252.7,113.1 262.3,105.4 272.0,97.0 281.7,87.7 291.3,77.4 301.0,66.2 310.7,53.8 320.3,40.2 330.0,25.2" style="fill:none;stroke:var(--mat);stroke-width:2.5"/><text x="322" y="22" text-anchor="end" style="fill:var(--mat)">compound: ₹17.4 lakh</text><text x="330" y="176" text-anchor="end">simple: ₹4 lakh</text></svg>
:::

:::note title="Problem-solving move: Get your hands dirty" tone=tip
When a formula feels slippery, run the process by hand for a few small steps and tabulate. That is exactly what the table above does: three rows of ₹1,00,000 → ₹1,10,000 → ₹1,21,000 make it obvious that each year multiplies, and the formula $P(1+r)^n$ is then just a summary of the table. It also shows where the gap comes from: in year 2 the extra ₹1,000 is 10% of the first year's ₹10,000 of interest. Zeitz, *The Art and Craft of Problem Solving*, §2.2 (p. 26).
:::

:::qc lvl=1
q: ₹10,000 is left for 2 years at 10% a year. How much more does compound interest (added yearly) give than simple interest?
options: ["₹0", "₹100", "₹1,000", "₹2,100"]
answer: 1
right: Right. Simple gives ₹2,000; compound gives ₹2,100. The extra ₹100 is 10% of the first year's ₹1,000 of interest, which is P r² in general.
wrong: Work it out: simple interest is 2 × ₹1,000. Compound: ₹10,000 → ₹11,000 → ₹12,100, so ₹2,100. The difference is the interest earned on the first year's interest.
:::

## More often, a little more {lvl=1 id=s-periods label="Class 10"}

Banks rarely add interest once a year. A deposit may be credited every quarter; a credit card charges every month. What happens to a quoted "12% a year" then?

The quoted figure is called the **nominal rate**; call it $R$. If interest is added $m$ times a year, each time the bank adds $R/m$: 12% a year charged monthly means 1% each month. Twelve months later your money has been multiplied by 1.01 twelve times:
$$1.01^{12} \approx 1.1268.$$
Read it as: one point zero one, multiplied by itself twelve times, is about one point one two seven.

So the money actually grows by about 12.68% in the year. That honest yearly figure is the **effective annual rate**:
$$1 + \text{EAR} = \left(1 + \frac{R}{m}\right)^m.$$
Read it as: one plus the effective rate equals one plus the rate per period, raised to the number of periods in a year.

| Interest added | Each time | Effective annual rate |
|---|---|---|
| once a year | 12% | 12.00% |
| twice a year | 6% | 12.36% |
| every quarter | 3% | 12.55% |
| every month | 1% | 12.68% |
| every day | 12%/365 | 12.75% |

Adding interest more often always helps the saver (and hurts the borrower), but the gains shrink fast. Going from monthly to daily adds only 0.07 percentage points. Hold that thought: at depth 3 we will see that the column stops at a definite ceiling, 12.75%, and that the ceiling involves the number $e$.

:::qc lvl=1
q: A deposit quotes 8% a year, credited every quarter. Which is closest to its effective annual rate?
options: ["8.00%", "8.24%", "8.33%", "32%"]
answer: 1
right: Right. Each quarter adds 2%, and 1.02⁴ ≈ 1.0824.
wrong: The rate per quarter is 8%/4 = 2%. Four quarters multiply by 1.02 four times: 1.02⁴ ≈ 1.0824.
:::

## Inflation: running to stand still {lvl=1 id=s-inflation label="Class 10"}

Suppose your fixed deposit pays 7% a year, and over the same year prices rise 5%. Prices rising is **inflation**; call its yearly rate $i$. Are you 7% richer?

Think in groceries, not rupees. ₹100 bought one basket at the start of the year. At the end you have ₹107, but a basket now costs ₹105. You can buy $107/105 \approx 1.019$ baskets. In what money can actually buy, you grew by about 1.9%. That is your **real return**:
$$1 + \text{real rate} = \frac{1+r}{1+i}.$$
Read it as: divide the money's growth factor by the price growth factor.

The shortcut "7 minus 5 is 2" is close, and fine for small rates, but growth factors divide; they do not subtract. The shortcut fails badly when rates are large: at 50% interest and 40% inflation the real return is $1.5/1.4 - 1 \approx 7.1\%$, not 10%.

Two facts are worth carrying around. If inflation beats your interest rate, your real return is negative: the passbook number goes up while your buying power goes down. And cash under the mattress has $r = 0$, so its real return is $1/(1+i) - 1$; at 6% inflation it loses about 5.7% of its buying power every year, which halves it in about 12 years.

:::qc lvl=1
q: Suppose a savings account pays 6% a year and inflation is 6.5%. What is the real return?
options: ["About +0.5%", "Exactly 0%", "About −0.47%", "About −6%"]
answer: 2
right: Right. 1.06/1.065 ≈ 0.9953, so you lose about 0.47% of buying power a year even though the balance grows.
wrong: Divide the factors: 1.06/1.065 ≈ 0.9953. The money grows, but prices grow faster, so buying power falls by about 0.47%.
:::

## A rupee later is worth less {lvl=2 id=s-present label="Class 12"}

Would you rather have ₹1,000 today or ₹1,000 a year from now? Today, obviously: you could deposit it and have more than ₹1,000 in a year. Turn that around and you get the single most useful idea in money maths.

At 10% a year, ₹909.09 today grows to exactly ₹1,000 in a year. So ₹1,000 promised a year from now is worth ₹909.09 today. ₹1,000 promised in two years is worth about ₹826.45 today. This worth-today is called the **present value**: to bring an amount back by one period, divide by $1+r$; by $k$ periods, divide by $(1+r)^k$.

Present values let you compare payments made at different times, because once each is converted to "rupees today", they can simply be added. That is the whole secret of the EMI.

## The EMI formula {lvl=2 id=s-emi label="Class 12"}

A bank lends you $P$ today. You promise to pay the same amount $E$ at the end of every month for $n$ months. What must $E$ be?

**The fair-deal principle.** The bank is happy exactly when your promised payments are worth, today, what it hands you today. Each EMI is paid at a different time, so convert each to its present value and add:

:::figure caption="The loan today must equal the sum of the present values of all n EMIs. Each later EMI is divided by one more factor of (1 + r)."
<svg viewBox="0 0 360 166" role="img" aria-label="A timeline of EMIs, each discounted back to today"><line class="axis" x1="34" y1="70" x2="344" y2="70"/><text x="40" y="26" text-anchor="middle">now</text><circle cx="40" cy="70" r="4" style="fill:var(--mat)"/><text x="110" y="26" text-anchor="middle">month 1</text><text x="180" y="26" text-anchor="middle">month 2</text><text x="250" y="26" text-anchor="middle">month 3</text><text x="320" y="26" text-anchor="middle">month n</text><rect x="94" y="38" width="32" height="20" rx="3" style="fill:none;stroke:var(--mat)"/><text x="110" y="52" text-anchor="middle">E</text><rect x="164" y="38" width="32" height="20" rx="3" style="fill:none;stroke:var(--mat)"/><text x="180" y="52" text-anchor="middle">E</text><rect x="234" y="38" width="32" height="20" rx="3" style="fill:none;stroke:var(--mat)"/><text x="250" y="52" text-anchor="middle">E</text><rect x="304" y="38" width="32" height="20" rx="3" style="fill:none;stroke:var(--mat)"/><text x="320" y="52" text-anchor="middle">E</text><text x="285" y="52" text-anchor="middle">…</text><line class="pen" x1="110" y1="66" x2="110" y2="74"/><line class="pen" x1="180" y1="66" x2="180" y2="74"/><line class="pen" x1="250" y1="66" x2="250" y2="74"/><line class="pen" x1="320" y1="66" x2="320" y2="74"/><text x="4" y="100">worth now:</text><text x="110" y="118" text-anchor="middle">E/(1+r)</text><text x="180" y="118" text-anchor="middle">E/(1+r)²</text><text x="250" y="118" text-anchor="middle">E/(1+r)³</text><text x="320" y="118" text-anchor="middle">E/(1+r)ⁿ</text><text x="180" y="154" text-anchor="middle" style="fill:var(--mat)">loan P = sum of this row</text></svg>
:::

$$P = \frac{E}{1+r} + \frac{E}{(1+r)^2} + \cdots + \frac{E}{(1+r)^n}.$$
Read it as: the loan equals the first EMI brought back one month, plus the second brought back two months, and so on to the last.

**Sum the series.** The bracket is a geometric progression: each term is the previous one divided by $1+r$. Write $v = 1/(1+r)$ for the one-month discount factor. The sum $v + v^2 + \cdots + v^n$ of a GP with first term $v$ and ratio $v$ is $\dfrac{v(1-v^n)}{1-v}$, and since $1 - v = \dfrac{r}{1+r}$, this simplifies to $\dfrac{1 - (1+r)^{-n}}{r}$. So
$$P = E \cdot \frac{1-(1+r)^{-n}}{r}, \qquad\text{that is}\qquad E = \frac{P\,r\,(1+r)^n}{(1+r)^n - 1}.$$
Read it as: the EMI is one month's interest on the loan, $Pr$, scaled up by the factor $\dfrac{(1+r)^n}{(1+r)^n-1}$, which is a little more than 1 for a long loan and much more than 1 for a short one.

:::worked title="A car loan"
Suppose you borrow ₹5,00,000 at 9% a year for 5 years, with interest charged monthly on the balance.

Rate per month $r = 0.09/12 = 0.0075$; number of months $n = 60$; $(1.0075)^{60} \approx 1.56568$.

$$E = \frac{500000 \times 0.0075 \times 1.56568}{0.56568} \approx 10{,}379.$$

So the EMI is about ₹10,379.

Total paid is about $60 \times 10379$, which is ₹6,22,751, so total interest is about ₹1,22,751. Compare "9% a year for 5 years on ₹5 lakh", which is ₹2,25,000: the true cost is little more than half that, because the balance falls every month.
:::

:::note title="Problem-solving move: Penultimate step" tone=tip
Ask "what single fact would finish the problem?" For a loan it is: **the balance right after the last EMI is zero.** Track the balance month by month: it grows by the factor $1+r$, then drops by $E$, so $B_1 = P(1+r) - E$, $B_2 = B_1(1+r) - E$, and after $n$ months
$$B_n = P(1+r)^n - E\left[(1+r)^{n-1} + \cdots + (1+r) + 1\right] = P(1+r)^n - E\,\frac{(1+r)^n - 1}{r}.$$
Setting $B_n = 0$ gives the same EMI formula from the other end. Zeitz, *The Art and Craft of Problem Solving*, §2.2 (p. 27).
:::

Two quick sanity checks every formula should pass. If the rate were zero, the EMI should be $P/n$: and indeed, as $r \to 0$ the formula tends to $P/n$. If the loan lasted for ever, you could only ever pay the interest: and as $n \to \infty$ the formula tends to $Pr$.

:::qc lvl=2
q: Suppose a loan has a monthly rate of 1% and the EMI is ₹900 on a ₹1,00,000 loan. What happens?
options: ["The loan is repaid in about 10 years", "The loan is repaid in about 20 years", "The loan is never repaid: the balance grows", "The loan is repaid in exactly 111 months"]
answer: 2
right: Right. The first month's interest is ₹1,000, more than the EMI, so the balance rises each month. An EMI must beat Pr = ₹1,000 just to stand still.
wrong: Compute the first month: interest is 1% of ₹1,00,000 = ₹1,000, but only ₹900 is paid. The balance grows by ₹100, and next month by a bit more. The EMI must exceed Pr for the loan ever to end.
:::

## Where each EMI goes {lvl=2 id=s-amortise label="Class 12"}

Every EMI does two jobs. First it pays this month's interest on whatever is still owed. Whatever is left over cuts the loan. The schedule that lists this split for every month is called an **amortisation table**.

Go back to your cousin's ₹30 lakh at 9% for 20 years. The EMI is ₹26,992 and the monthly rate is 0.75%. In month 1 the interest is $0.0075 \times 30{,}00{,}000 = 22{,}500$ rupees. So only ₹4,492 of the first EMI repays the loan: 83% of the payment is interest.

There is a neat formula for the split. Just before EMI number $k$, the balance owed is the present value of the $n-k+1$ EMIs still to come (by the same fair-deal argument). One month's interest on that balance is
$$\text{interest part of EMI } k = E\left[1 - (1+r)^{-(n-k+1)}\right],\qquad \text{principal part} = \frac{E}{(1+r)^{\,n-k+1}}.$$
Read it as: the principal part of an EMI is that EMI's own value discounted from the end of the loan, so it grows by the factor $1+r$ every month, while the interest part shrinks.

:::figure caption="Your cousin's ₹30 lakh loan at 9% over 20 years: the share of each year's EMIs that goes to interest (grey) and to the loan itself (colour). The split crosses half-and-half only in year 13."
<svg viewBox="0 0 360 224" role="img" aria-label="Interest and principal share of the EMIs in each year of a 20-year loan"><rect x="40" y="8" width="10" height="10" style="fill:var(--muted);opacity:.55"/><text x="54" y="17">interest</text><rect x="130" y="8" width="10" height="10" style="fill:var(--mat)"/><text x="144" y="17">principal (cuts the loan)</text><rect x="41.5" y="30" width="12" height="124.5" style="fill:var(--muted);opacity:.55"/><rect x="41.5" y="154.5" width="12" height="25.5" style="fill:var(--mat)"/><rect x="56.5" y="30" width="12" height="121.5" style="fill:var(--muted);opacity:.55"/><rect x="56.5" y="151.5" width="12" height="28.5" style="fill:var(--mat)"/><rect x="71.5" y="30" width="12" height="118.5" style="fill:var(--muted);opacity:.55"/><rect x="71.5" y="148.5" width="12" height="31.5" style="fill:var(--mat)"/><rect x="86.5" y="30" width="12" height="115.5" style="fill:var(--muted);opacity:.55"/><rect x="86.5" y="145.5" width="12" height="34.5" style="fill:var(--mat)"/><rect x="101.5" y="30" width="12" height="112.5" style="fill:var(--muted);opacity:.55"/><rect x="101.5" y="142.5" width="12" height="37.5" style="fill:var(--mat)"/><rect x="116.5" y="30" width="12" height="109.5" style="fill:var(--muted);opacity:.55"/><rect x="116.5" y="139.5" width="12" height="40.5" style="fill:var(--mat)"/><rect x="131.5" y="30" width="12" height="105.0" style="fill:var(--muted);opacity:.55"/><rect x="131.5" y="135.0" width="12" height="45" style="fill:var(--mat)"/><rect x="146.5" y="30" width="12" height="102.0" style="fill:var(--muted);opacity:.55"/><rect x="146.5" y="132.0" width="12" height="48" style="fill:var(--mat)"/><rect x="161.5" y="30" width="12" height="96.0" style="fill:var(--muted);opacity:.55"/><rect x="161.5" y="126.0" width="12" height="54" style="fill:var(--mat)"/><rect x="176.5" y="30" width="12" height="91.5" style="fill:var(--muted);opacity:.55"/><rect x="176.5" y="121.5" width="12" height="58.5" style="fill:var(--mat)"/><rect x="191.5" y="30" width="12" height="85.5" style="fill:var(--muted);opacity:.55"/><rect x="191.5" y="115.5" width="12" height="64.5" style="fill:var(--mat)"/><rect x="206.5" y="30" width="12" height="79.5" style="fill:var(--muted);opacity:.55"/><rect x="206.5" y="109.5" width="12" height="70.5" style="fill:var(--mat)"/><rect x="221.5" y="30" width="12" height="73.5" style="fill:var(--muted);opacity:.55"/><rect x="221.5" y="103.5" width="12" height="76.5" style="fill:var(--mat)"/><rect x="236.5" y="30" width="12" height="66.0" style="fill:var(--muted);opacity:.55"/><rect x="236.5" y="96.0" width="12" height="84" style="fill:var(--mat)"/><rect x="251.5" y="30" width="12" height="58.5" style="fill:var(--muted);opacity:.55"/><rect x="251.5" y="88.5" width="12" height="91.5" style="fill:var(--mat)"/><rect x="266.5" y="30" width="12" height="49.5" style="fill:var(--muted);opacity:.55"/><rect x="266.5" y="79.5" width="12" height="100.5" style="fill:var(--mat)"/><rect x="281.5" y="30" width="12" height="40.5" style="fill:var(--muted);opacity:.55"/><rect x="281.5" y="70.5" width="12" height="109.5" style="fill:var(--mat)"/><rect x="296.5" y="30" width="12" height="30.0" style="fill:var(--muted);opacity:.55"/><rect x="296.5" y="60.0" width="12" height="120" style="fill:var(--mat)"/><rect x="311.5" y="30" width="12" height="19.5" style="fill:var(--muted);opacity:.55"/><rect x="311.5" y="49.5" width="12" height="130.5" style="fill:var(--mat)"/><rect x="326.5" y="30" width="12" height="7.5" style="fill:var(--muted);opacity:.55"/><rect x="326.5" y="37.5" width="12" height="142.5" style="fill:var(--mat)"/><line class="pen" x1="38" y1="105" x2="342" y2="105" style="stroke-dasharray:4 3"/><text x="6" y="109">50%</text><line class="axis" x1="38" y1="180" x2="342" y2="180"/><text x="40" y="196">year 1</text><text x="340" y="196" text-anchor="end">year 20</text><text x="190" y="216" text-anchor="middle">each bar: one year of EMIs</text></svg>
:::

Some facts that follow, all from the formula above:

- After 5 years (60 EMIs, about ₹16.2 lakh paid) the balance is still about ₹26.6 lakh. Only ₹3.4 lakh of the loan is gone.
- The principal part first exceeds the interest part at EMI number 149, a little over 12 years in. That happens when $(1+r)^{n-k+1}$ falls below 2, which does not depend on the loan amount at all.
- So a lump-sum prepayment in the early years is powerful. Paying an extra ₹5 lakh after year 5 while keeping the EMI unchanged ends the loan about 57 months early, saving roughly ₹10 lakh of interest.

:::note title="Flat rate is not the same as reducing rate" tone=warn
Some lenders quote a **flat rate**: interest on the full original amount for the whole term, even though you repay as you go. "Flat 10%" on ₹1,00,000 for a year means ₹10,000 of interest and an EMI of ₹9,167. The reducing-balance rate that gives the same EMI is about 18% a year. Always ask which kind of rate is quoted. The figures are our own calculation for a made-up loan.
:::

:::qc lvl=2
q: On a 20-year loan, which EMI cuts the loan the most?
options: ["The first", "The middle one", "The last", "They all cut it equally"]
answer: 2
right: Right. The last EMI has almost no interest left to pay, so nearly all of it cuts the loan. The principal part grows by the factor (1 + r) every month.
wrong: Every EMI is the same size, but the interest part is charged on what is still owed. That is largest at the start and smallest at the end, so the last EMI is almost pure principal.
:::

## Credit cards and the minimum due {lvl=2 id=s-cards label="Class 12"}

A credit card works like a loan with a high monthly rate and no fixed EMI. Suppose the card charges 3% a month on what is unpaid, and the "minimum amount due" is 5% of the balance. (Rules differ between cards; these figures are made up.) A 3% monthly rate compounds to $1.03^{12} - 1 \approx 42.6\%$ a year.

Say you owe ₹30,000, spend nothing more, and pay only the minimum. Each month you pay 5% and the remaining 95% grows by 3%. So the balance is multiplied every month by
$$0.95 \times 1.03 = 0.9785.$$
Read it as: the debt shrinks by only about 2% a month.

The first month you pay ₹1,500, but the debt falls by only ₹645. To get the balance below ₹1,000 takes about 156 months, which is 13 years, and if the shrinking minimum were paid for ever the total paid would be about ₹69,800 for a ₹30,000 debt. (Real cards usually set a rupee floor on the minimum, which ends the tail sooner; the early years look like this. [Inference])

Now pay a fixed ₹1,500 every month instead. The loan-tenure formula, which comes from solving $P = E\,[1 - (1+r)^{-n}]/r$ for $n$,
$$n = \frac{-\ln\!\left(1 - \dfrac{Pr}{E}\right)}{\ln(1+r)},$$
gives $n = \ln 2.5/\ln 1.03 \approx 31$ months and a total of about ₹46,500. Read the formula as: the fraction $Pr/E$ says how much of each payment the interest swallows at first; the closer it is to 1, the longer the loan, and at 1 it never ends.

:::qc lvl=2
q: A card charges 2% a month. Which minimum-payment rule (a percentage of the balance, paid before interest is charged) keeps the debt from shrinking at all?
options: ["5% of the balance", "3% of the balance", "About 1.96% of the balance or less", "Any minimum payment shrinks the debt"]
answer: 2
right: Right. The balance is multiplied by (1 − m)(1.02) each month; that is 1 or more when m ≤ 0.02/1.02 ≈ 1.96%.
wrong: Each month the balance is multiplied by (1 − m) × 1.02. Set this equal to 1: m = 0.02/1.02 ≈ 1.96%. Any smaller minimum lets the debt grow.
:::

## Continuous compounding and e {lvl=3 id=s-e label="JEE"}

Back to the table of compounding periods, which seemed to stop growing. Push it to the limit: what if interest were added every second, or every instant?

Take the simplest case, 100% a year. Adding it in $m$ pieces gives the factor $(1 + 1/m)^m$:

| $m$ | 1 | 2 | 12 | 365 | 1,000,000 |
|---|---|---|---|---|---|
| $(1+1/m)^m$ | 2 | 2.25 | 2.613 | 2.7146 | 2.71828 |

The numbers climb and settle at a definite limit, $e = 2.71828\ldots$ The same happens for any rate. Take logarithms: $\ln\left(1 + \frac{R}{m}\right)^m = m\ln\left(1 + \frac{R}{m}\right)$. For small $x$, $\ln(1+x) = x - \frac{x^2}{2} + \cdots$, so this is $R - \frac{R^2}{2m} + \cdots$, which tends to $R$. Hence
$$\lim_{m\to\infty}\left(1 + \frac{R}{m}\right)^{m} = e^{R}, \qquad A = P\,e^{Rt}.$$
Read it as: compounding without pause multiplies money by $e$ to the power rate times time.

So 12% compounded continuously gives an effective rate of $e^{0.12} - 1 \approx 12.75\%$, the ceiling of the earlier table. The correction term $R^2/(2m)$ also tells you how far a finite $m$ falls short: at 12% compounded monthly, the effective rate is short of the ceiling by only about 0.07 points, which matches the table.

Continuous rates have one beautiful property: **logs turn division into subtraction.** If money grows as $e^{Rt}$ and prices as $e^{it}$, buying power grows as $e^{(R-i)t}$. With continuously compounded rates, "rate minus inflation" is exact, not an approximation. That is why economists like to work with logarithms of prices.

Doubling time follows at once. $e^{RT} = 2$ gives $T = \ln 2 / R \approx 0.693/R$. At 9%, money doubles in about 7.7 years with continuous compounding (and about 8.04 years with yearly compounding). That is the famous rule of 70 or 72, which the next lesson takes apart.

:::qc lvl=3
q: Which is the effective annual rate of 10% a year compounded continuously?
options: ["10.00%", "10.47%", "10.52%", "11.00%"]
answer: 2
right: Right. e^0.1 ≈ 1.10517, so about 10.52%.
wrong: Continuous compounding gives the factor e^R. With R = 0.1, e^0.1 ≈ 1.10517, an effective rate of about 10.52%.
:::

## How the EMI responds to rate and tenure {lvl=3 id=s-sensitivity label="JEE"}

Borrowers face two dials: the rate and the tenure. Which dial matters more? Turn each in turn on the ₹30 lakh loan.

| Tenure at 9% | EMI (₹) | Total paid (₹ lakh) |
|---|---|---|
| 10 years | 38,003 | 45.6 |
| 20 years | 26,992 | 64.8 |
| 30 years | 24,139 | 86.9 |

Going from 20 to 30 years cuts the EMI by only ₹2,853 (about 11%) but adds about ₹22 lakh of interest. The EMI cannot fall below the interest-only floor $Pr$, which is ₹22,500, however long the loan; past a point, extra years buy almost no relief.

| Rate for 20 years | 8% | 9% | 10% |
|---|---|---|---|
| EMI (₹) | 25,093 | 26,992 | 28,951 |

The rate dial, measured properly, is the percentage change in EMI per percentage change in rate. This ratio is called the **elasticity**. Take logs of $E = Pr/(1 - v^n)$ with $v = (1+r)^{-1}$ and differentiate with respect to $\ln r$:
$$\frac{d\ln E}{d\ln r} = 1 - \frac{n\,r\,v^{n}}{(1+r)(1-v^{n})}.$$
Read it as: a 1% rise in the rate raises the EMI by this many per cent.

- For a **long** loan, $v^n \to 0$ and the elasticity tends to 1: the EMI is almost pure interest, so it is nearly proportional to the rate.
- For a **short** loan, $nr$ is small and the elasticity is about $(n+1)r/2$, close to 0: the EMI is mostly principal, so the rate hardly matters. For a 12-month loan at 1% a month it is about 0.06.
- For the 20-year loan at 9% it is about 0.64. Going from 9% to 10% is an 11.1% rise in the rate, and the EMI rises by $0.64 \times 11.1\% \approx 7.1\%$ (the exact figure is 7.3%).

The practical upshot: for a home loan, haggle over the rate; for a phone on EMI, the rate barely moves the instalment, so the processing fee and the price matter more. And when rates rise mid-loan, a lender may keep the EMI fixed and lengthen the tenure instead. If the new monthly interest exceeds the EMI, the balance grows: this is called **negative amortisation**.

:::qc lvl=3
q: Suppose a lender offers the same loan at 9% for 20 years or 9.5% for 15 years. Without computing, which statement is surely true?
options: ["The 15-year loan has the smaller total interest", "The 15-year loan has the smaller EMI", "Both have the same total interest", "The 20-year loan has the smaller total interest"]
answer: 0
right: Right. The shorter loan keeps the balance outstanding for far fewer months, which outweighs the half-point higher rate. (Its EMI is higher, about ₹31,300 against ₹27,000 on ₹30 lakh.)
wrong: Total interest is the rate charged on rupee-months of balance. Five fewer years removes the most interest-heavy tail of the debt, and a half-point rate rise cannot make up for it. The EMI, though, is higher on the shorter loan.
:::

## The continuous loan {lvl=4 id=s-continuous label="Olympiad"}

Let the payments themselves flow continuously, at a steady $p$ rupees per year, while interest accrues at rate $R$ on the balance $B(t)$. In a tiny time $dt$ the balance gains $RB\,dt$ of interest and loses $p\,dt$ of payment:
$$\frac{dB}{dt} = RB - p, \qquad B(0) = P.$$
Read it as: the debt grows by its own interest and shrinks by the payment.

This is a first-order linear equation with the steady value $B^* = p/R$, at which interest exactly equals payment. Measured from that value, the balance grows exponentially: $B(t) - p/R = (P - p/R)\,e^{Rt}$. If $p < RP$ the debt runs away (negative amortisation); if $p > RP$ it falls ever faster and hits zero. Setting $B(T) = 0$:
$$p = \frac{RP}{1 - e^{-RT}}, \qquad \frac{\text{total paid}}{P} = \frac{pT}{P} = \frac{x}{1 - e^{-x}}, \quad x = RT.$$
Read it as: the ratio of total repaid to amount borrowed depends on one number only, the rate times the term.

| $x = RT$ | continuous $x/(1-e^{-x})$ | exact monthly EMI (9%, ₹30 lakh) |
|---|---|---|
| 0.9 (10 years) | 1.517 | 1.520 |
| 1.8 (20 years) | 2.156 | 2.159 |
| 2.7 (30 years) | 2.895 | 2.897 |

This is dimensional analysis at work: a rate has units of 1/time, so the only pure number one can build from $R$ and $T$ is $RT$, and every dimensionless answer must be a function of it. Two loans with the same $RT$ (6% for 30 years, 9% for 20, 18% for 10) repay nearly the same multiple of what was borrowed. The two ends make sense too. For small $x$, $x/(1-e^{-x}) \approx 1 + x/2$: you owe on average about half the loan over the whole term. For large $x$ it tends to $x$: you are basically paying interest on the full loan for ever.

The same equation, with different letters, charges a capacitor through a resistor and cools a cup of tea. The **perpetuity** is its steady state: a payment of $E$ every period for ever has present value $\sum_{k\ge1} E v^k = E/r$. So ₹22,500 a month for ever is worth exactly ₹30 lakh at 0.75% a month, which is why the EMI can never fall below $Pr$.

Finally, why does compound interest always beat simple interest? Because $(1+r)^n > 1 + nr$ for $r > 0$ and $n \ge 2$, which is **Bernoulli's inequality**. It follows by induction: if $(1+r)^n > 1 + nr$, multiply by $1 + r$ to get $(1+r)^{n+1} > 1 + (n+1)r + nr^2 > 1 + (n+1)r$. The leftover $nr^2$ is the interest on interest, made visible.

:::qc lvl=4
q: Suppose loan A is at 6% for 30 years and loan B at 12% for 15 years, same amount, both repaid continuously. Compare the total repaid.
options: ["A repays about twice as much", "About the same", "B repays about twice as much", "Cannot tell without the amount"]
answer: 1
right: Right. Both have RT = 1.8, so both repay about 2.16 times the loan. Only the product of rate and term matters.
wrong: The total repaid per rupee is x/(1 − e^(−x)) with x = RT. Here 0.06 × 30 = 0.12 × 15 = 1.8, so the totals are the same.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Simple interest adds the same amount each year; compound interest multiplies by the same factor, $A = P(1+r)^n$. {lvl=1}
2. Quoted rate $R$ added $m$ times a year gives the effective rate $(1 + R/m)^m - 1$; more frequent compounding helps savers and costs borrowers. {lvl=1}
3. Real return: divide growth factors, $(1+r)/(1+i) - 1$; if inflation beats the rate, buying power falls. {lvl=1}
4. Money later is worth less now: divide by $(1+r)$ for each period of waiting. {lvl=2}
5. Loan = present value of the EMIs, a geometric series, which gives $E = Pr(1+r)^n/[(1+r)^n - 1]$. {lvl=2}
6. Each EMI pays interest first; the principal part grows by $1+r$ every month, so early EMIs are mostly interest and early prepayment saves most. {lvl=2}
7. $(1 + R/m)^m \to e^R$; with continuous rates, real = nominal − inflation exactly. {lvl=3}
8. Longer tenure lowers the EMI only towards the floor $Pr$, while total interest keeps rising; the EMI's sensitivity to rate grows with tenure. {lvl=3}
9. In the continuous loan, total repaid per rupee is $x/(1-e^{-x})$ with $x = RT$: one dimensionless number decides it. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Use the rate **per period** and the number of **periods**: 9% a year paid monthly means $r = 0.0075$ and $n = 12 \times$ years. {lvl=1}
- Percent versus decimal: 8% is 0.08 in $(1+r)^n$, never 8. {lvl=1}
- Real return is not rate minus inflation except roughly, for small rates. {lvl=1}
- "Flat rate" and "reducing-balance rate" are different: a flat 10% loan costs about 18% on the reducing balance. {lvl=2}
- An EMI smaller than one period's interest $Pr$ never repays the loan. {lvl=2}
- The minimum due on a card keeps the account in good standing; it does not clear the debt. {lvl=2}
- Halfway through the tenure, far more than half the loan is still owed. {lvl=2}
- Doubling the tenure does not halve the EMI; it may cut it by only a quarter or less. {lvl=3}
:::
