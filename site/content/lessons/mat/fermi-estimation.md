---
title: Fermi estimation
summary: How to guess almost any number, from barbers in Mumbai to your electricity bill, and land within a factor of three.
ncert: []
up_to: Olympiad
builds_on: [Multiplication and powers of ten, Ratio and proportion, Logarithms (for depth 3 and 4)]
notes_prompt: Explain to a friend why multiplying five rough guesses usually gives a better answer than they would expect, not a worse one.
margin:
  - kind: history
    title: History
    text: "Enrico Fermi is said to have estimated the energy of the first atomic test in 1945 by dropping scraps of paper and watching how far the blast carried them. His figure is usually quoted as within about a factor of two of the measured value. [Unverified details]"
  - kind: tip
    title: Quick habit
    text: "When you can only say 'more than this, less than that', take the geometric mean of the two bounds: multiply them and take the square root. For 10 and 1000 it is 100, not 505."
  - kind: olympiad
    title: Olympiad link
    text: "Errors in a product add in log space like steps of a random walk, so n factors each off by ×2 give a typical error of about ×2^√n, not ×2^n. The same √n governs diffusion and the spread of coin tosses."
books:
  - { title: "Paul Zeitz, The Art and Craft of Problem Solving (2nd ed., Wiley, 2007)", ref: "§2.1 Make it easier (p. 16); §2.4 Change your point of view (p. 58)" }
  - { title: "Sanjoy Mahajan, Street-Fighting Mathematics (MIT Press, 2010)", ref: "Ch. 1 Dimensions; Ch. 3 Lumping [Unverified]" }
  - { title: "L. Weinstein and J. A. Adam, Guesstimation (Princeton, 2008)", ref: "Ch. 1 How to solve estimation problems [Unverified]" }
  - { title: "J. B. S. Haldane, On Being the Right Size (essay, 1926)", ref: "the square-cube law in animals [Unverified]" }
cards:
  - { front: "What is the Fermi move in one sentence?", back: "Break the unknown number into factors you can guess, round each, and multiply." }
  - { front: "You are sure a number is above 20 and below 2000. Best single guess?", back: "The geometric mean, √(20 × 2000) = 200. It is ×10 from each bound." }
  - { front: "Is 400 nearer to 100 or to 1000, as a factor?", back: "To 1000: it is ×2.5 below 1000 but ×4 above 100. On a log scale the halfway point between 1 and 10 is √10 ≈ 3.16." }
  - { front: "Why do errors in a product partly cancel?", back: "The log of a product is the sum of the logs, so each factor's error is a step up or down in log space; independent steps partly cancel, like a random walk." }
  - { front: "Nine factors, each off by ×2 at random. Typical error of the product?", back: "About ×2^√9 = ×8, not ×2^9 = ×512." }
  - { front: "A cube's side doubles. Surface and volume?", back: "Surface ×4, volume ×8, so volume per unit surface doubles. Big pots cool slowly; small animals lose heat fast." }
core:
  idea: 'Split a number you cannot look up into factors you can guess, round each to a power of ten (or 3), and multiply. Errors in a product partly cancel because their logarithms add, so the answer usually lands within a factor of a few of the truth.'
  formulas:
    - tex: 'Q = f_1 \times f_2 \times \cdots \times f_n'
      label: 'Break the unknown into guessable factors'
    - tex: 'E = \sqrt{L\,U}'
      label: 'Best single guess between a lower bound L and an upper bound U (geometric mean)'
    - tex: '\text{typical error} \approx k^{\sqrt{n}}'
      label: 'n independent factors, each off by about a factor k'
  conditions:
    - 'Each factor is guessed independently, so its error is not tied to the others'
    - 'Each guess is as likely to be too high as too low by the same factor (no shared bias)'
    - 'No factor is missing, and the units multiply out to the unit you want'
  sign: 'Average uncertain guesses by multiplying and taking a root (geometric mean), never by adding and halving.'
outcomes:
  - 'Break any "how many" question into a chain of factors you can guess, and state each assumption'
  - 'Work in powers of ten and use the geometric mean of a lower and an upper bound'
  - 'Check an estimate by a second, independent route and with units'
  - 'Explain with logarithms why errors in a product partly cancel, and find the typical error of n factors'
  - 'Use dimensional analysis and scaling laws (square-cube, diffusion) to estimate without data'
opener:
  story: |
    You are at an interview for a summer internship, feeling ready. Then the interviewer smiles and asks: "How many barbers are there in Mumbai?" No phone. No internet. Just you, a pen and a silence that is getting longer.

    Your first thought is "How could I possibly know that?" But wait. You do know some things. Mumbai has something like two crore people, so roughly one crore men. A man gets a haircut about once a month. A barber can do one cut in about forty minutes. Each of those is shaky, but none of them is a wild guess.

    Here is the puzzle. Each guess could easily be off by a factor of two, too big or too small. Chain four such guesses together and surely the errors pile up into nonsense? Yet answers built this way usually land within a factor of two or three of the truth. **Why does multiplying rough guesses give a surprisingly good answer?**
  art: '<svg viewBox="0 0 320 220" role="img" aria-label="A city skyline, a pair of scissors, and a chain of rough numbers multiplied to estimate the number of barbers"><text x="160" y="24" text-anchor="middle" style="font-size:11px;fill:var(--muted)">how many barbers in this city?</text><rect x="20" y="90" width="34" height="80" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:1.5"/><rect x="60" y="60" width="40" height="110" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:1.5"/><rect x="106" y="100" width="30" height="70" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:1.5"/><rect x="142" y="45" width="44" height="125" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:1.5"/><rect x="192" y="80" width="36" height="90" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:1.5"/><rect x="234" y="65" width="30" height="105" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:1.5"/><rect x="270" y="95" width="34" height="75" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:1.5"/><line x1="10" y1="170" x2="310" y2="170" style="stroke:var(--ink);stroke-width:2"/><circle cx="26" cy="192" r="6" style="fill:none;stroke:var(--ink);stroke-width:2"/><circle cx="26" cy="212" r="6" style="fill:none;stroke:var(--ink);stroke-width:2"/><line x1="31" y1="195" x2="70" y2="208" style="stroke:var(--ink);stroke-width:2"/><line x1="31" y1="209" x2="70" y2="196" style="stroke:var(--ink);stroke-width:2"/><text x="90" y="206" style="font-size:11px;fill:var(--ink)">1 crore × 1 ÷ 30 ÷ 15 ≈ 22,000</text></svg>'
symbols:
  - s: 'Q'
    means: 'the quantity you want to estimate (any unit)'
  - s: 'f_1, f_2, \dots, f_n'
    means: 'the guessable factors whose product is Q'
  - s: 'n'
    means: 'number of factors in the chain (a pure number)'
  - s: 'L,\ U'
    means: 'a lower bound and an upper bound you are sure of (same unit as Q)'
  - s: 'E'
    means: 'your single best estimate (same unit as Q)'
  - s: 'k'
    means: 'how far off one factor typically is, as a multiplying factor (for example 2)'
  - s: '\sigma'
    means: 'typical size of one factor''s error measured in logs (pure number)'
  - s: '\ell'
    means: 'length of a swing or pendulum (m)'
  - s: 'g'
    means: 'acceleration of free fall, about 9.8 m/s²'
  - s: 'T'
    means: 'time for one full swing, the period (s)'
life:
  - 'Checking an electricity bill: watts of each appliance times hours a day times 30 days gives the units you should expect.'
  - 'Budgeting a wedding or a party: guests times plates times rupees per plate, before you ever call a caterer.'
  - 'Planning the monthly kirana order: kilograms of rice, dal and oil per person per day, times people, times days.'
  - 'Judging a start-up pitch or a news claim: "every Indian will buy one" quickly turns into a number you can test.'
  - 'Planning a train or road trip: distance divided by average speed, plus stops, tells you whether the plan is sane.'
models:
  - name: 'Midpoint on a log scale'
    text: 'When a quantity is uncertain by a large factor (a salary range, a project timeline, a market size), the sensible middle is the geometric mean of the extremes. Halfway between 1 lakh and 1 crore is 10 lakh, not 50 lakh.'
  - name: 'Fix the worst factor first'
    text: 'Independent uncertainties combine like the sides of a right triangle: the biggest one dominates. Before polishing a plan, find its least-known factor; improving the others barely moves the total.'
  - name: 'Two routes or it did not happen'
    text: 'An estimate (or an account, a news claim, an exam answer) earns trust when a second, independent route lands near it. When the routes disagree, one hidden assumption is wrong, and finding it is where the learning is.'
links:
  - leaf: 'cs/iv-back-of-envelope'
    name: 'Back-of-the-envelope estimation'
    same: 'The same chain of guessable factors, rounded to powers of ten, with a sanity check at the end.'
    differs: 'Engineering estimates use known unit costs (latency, bytes, server prices) and end in a design decision; Fermi puzzles often start from nothing but everyday experience.'
  - leaf: 'phy/units-and-dimensions'
    name: 'Units and dimensions'
    same: 'Both treat units as algebra: they must multiply out to the unit of the answer, and dimensional analysis can predict how a quantity depends on its causes.'
    differs: 'Physics uses dimensions to check and derive exact laws; here they are a guessing aid, and the missing number (like 2π) is accepted as unknown.'
  - leaf: 'phy/errors-and-significant-figures'
    name: 'Errors and significant figures'
    same: 'Independent errors combine in quadrature: relative errors of a product add as squares, which is the small-error form of adding log-errors.'
    differs: 'Laboratory errors are a few per cent, so the linear rule works; Fermi errors are factors of two or ten, so you must work with logs.'
next:
  q: 'Fermi chains multiply a few different factors. What happens when the same factor multiplies again and again, like money at a fixed rate or a rumour passed on by each listener? Why does such growth look slow for years and then suddenly explode?'
  leaf: 'mat/exponential-growth'
  name: 'Exponential growth and doubling'
---

:::hook
q: So what's your guess? You multiply four guesses, each of which might be off by a factor of 2 either way. How far off is the final answer, typically?
options: ["About ×16, because 2 × 2 × 2 × 2 = 16", "About ×4: the errors partly cancel", "Exactly right: the errors always cancel", "Off by ×100 or more"]
answer: 1
right: Right. Some guesses are too high and some too low, so they partly cancel. With four factors the typical error is about ×4 (2 raised to the power √4), and ×16 happens only if every guess errs the same way, which is rare.
wrong: Being off by ×16 needs all four guesses to err in the same direction, like four coins all landing heads. Usually some are high and some are low, and they partly cancel. The typical error turns out to be about ×4. The lesson shows why.
:::

## Break it into guessable pieces {lvl=1 id=s-pieces label="Class 10"}

Back to the barbers. You cannot guess the answer in one go, and you should not try. Instead, ask: **what would I need to know to work it out?**

The number of barbers depends on how many haircuts the city needs each day, and how many haircuts one barber can do in a day. Each of those splits again, until every piece is something you have a feel for from your own life:

- Men in Mumbai: suppose the city has about 2 crore people, so about **1 crore men**.
- Haircuts per man: about **one a month**.
- Days in a month: **30**. So the city needs about $10^7 / 30 \approx 3.3$ lakh men's haircuts a day.
- One barber's day: suppose **10 working hours**, and **40 minutes** per cut once you include waiting and chatting. That is $600 / 40 = 15$ cuts a day.

Now divide: $3.3 \text{ lakh} / 15 \approx 22{,}000$ barbers.

:::figure caption="The Fermi tree for barbers in Mumbai. Each box is a guess you can defend from daily life; the answer at the top is just their product. Every number here is an assumption, not a looked-up fact."
<svg viewBox="0 0 520 190" role="img" aria-label="A tree of boxes: the number of barbers at the top, split into haircuts per day and cuts per barber per day, each split again into everyday guesses">
<line x1="230" y1="40" x2="135" y2="80" style="stroke:var(--muted);stroke-width:1.5"/>
<line x1="290" y1="40" x2="395" y2="80" style="stroke:var(--muted);stroke-width:1.5"/>
<line x1="110" y1="110" x2="46" y2="150" style="stroke:var(--muted);stroke-width:1.5"/>
<line x1="135" y1="110" x2="144" y2="150" style="stroke:var(--muted);stroke-width:1.5"/>
<line x1="160" y1="110" x2="238" y2="150" style="stroke:var(--muted);stroke-width:1.5"/>
<line x1="380" y1="110" x2="343" y2="150" style="stroke:var(--muted);stroke-width:1.5"/>
<line x1="410" y1="110" x2="449" y2="150" style="stroke:var(--muted);stroke-width:1.5"/>
<rect x="185" y="10" width="150" height="30" rx="6" style="fill:color-mix(in srgb,var(--mat) 18%,var(--surface));stroke:var(--mat);stroke-width:1.5"/>
<text x="260" y="30" text-anchor="middle" style="fill:var(--ink)">barbers ≈ 22,000</text>
<rect x="40" y="80" width="190" height="30" rx="6" style="fill:var(--surface);stroke:var(--mat);stroke-width:1.5"/>
<text x="135" y="100" text-anchor="middle" style="fill:var(--ink)">haircuts/day ≈ 3.3 lakh</text>
<text x="265" y="100" text-anchor="middle" style="fill:var(--mat)">÷</text>
<rect x="300" y="80" width="190" height="30" rx="6" style="fill:var(--surface);stroke:var(--mat);stroke-width:1.5"/>
<text x="395" y="100" text-anchor="middle" style="fill:var(--ink)">cuts/barber/day ≈ 15</text>
<rect x="4" y="150" width="84" height="30" rx="6" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.2"/>
<text x="46" y="170" text-anchor="middle" style="fill:var(--ink)">1 crore men</text>
<rect x="94" y="150" width="100" height="30" rx="6" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.2"/>
<text x="144" y="170" text-anchor="middle" style="fill:var(--ink)">× 1 cut/month</text>
<rect x="200" y="150" width="76" height="30" rx="6" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.2"/>
<text x="238" y="170" text-anchor="middle" style="fill:var(--ink)">÷ 30 days</text>
<rect x="300" y="150" width="86" height="30" rx="6" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.2"/>
<text x="343" y="170" text-anchor="middle" style="fill:var(--ink)">10 h/day</text>
<rect x="394" y="150" width="110" height="30" rx="6" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.2"/>
<text x="449" y="170" text-anchor="middle" style="fill:var(--ink)">÷ 40 min/cut</text>
</svg>
:::

Three habits make this work. First, **choose factors you have lived with**: you have seen a barber shop and you know how often you get a haircut. Second, **say every assumption out loud**, so anyone (including you, later) can see which one to change. Third, **don't fuss over digits**. Whether it is 22,000 or 25,000 does not matter; whether it is thousands or lakhs does.

This style of estimate is named after the physicist **Enrico Fermi**, who loved asking his students such questions. A **Fermi estimate** is any answer built by multiplying rough, defensible factors.

:::qc lvl=1
q: You want the litres of milk a hostel of 400 students drinks each day. Which split is the best start?
options: ["students × glasses per student per day × litres per glass", "total milk sold in India ÷ number of hostels in India", "milk per cow × number of cows in the state"]
answer: 0
right: Right. Each factor is something you can picture: 400 students, maybe 1 glass each, about 0.2 L a glass, so about 80 L a day.
wrong: The other splits need numbers you know even less well than the answer. Good factors are closer to your own experience than the thing you want.
:::

## Think in powers of ten {lvl=1 id=s-orders label="Class 10"}

A Fermi answer is judged by its **order of magnitude**: the power of ten it sits nearest to. Hundreds, thousands, lakhs: that is the question an estimate answers. A decision rarely changes if the number moves from 22,000 to 30,000; it does change if it moves from 2,000 to 2,00,000.

So write numbers as a digit times a power of ten. One lakh is $10^5$, one crore is $10^7$. Then multiplying becomes adding exponents: $10^7 \times 10^{-2} = 10^5$. Read it as: seven zeros, take away two, leaves five.

**Round each factor to 1 or 3 times a power of ten.** Why 3? Because $3 \times 3 \approx 10$, so 3 sits halfway between 1 and 10 when you think in factors. The exact halfway point is $\sqrt{10} \approx 3.16$. This gives a surprising rule: 400 is "nearer" to 1000 than to 100, because it is only 2.5 times smaller than 1000 but 4 times bigger than 100.

:::worked title="Seconds in a lifetime, in your head"
A day is $24 \times 3600 = 86{,}400$ s, about $9 \times 10^4$. A year is about $3.65 \times 10^2$ days, so $3.65 \times 10^2 \times 9 \times 10^4 \approx 3 \times 10^7$ s (close to $\pi \times 10^7$). Seventy years is about $7 \times 10^1 \times 3 \times 10^7 = 2.1 \times 10^9$ s. Two billion seconds: you can now say that at a dinner table without a calculator.
:::

:::note title="Problem-solving move: Make it easier" tone=tip
**The strategy:** if a problem is too hard, solve an easier one first (smaller numbers, a special case), then return.

**Here:** ugly numbers like 1.37 crore or 43 minutes are the hard part, and they hide the structure. Rounding every factor to 1 or 3 times a power of ten makes the arithmetic trivial, so all your attention goes to the assumptions, which is where the real errors live.

Source: Zeitz, *The Art and Craft of Problem Solving*, §2.1 (p. 16).
:::

:::qc lvl=1
q: You estimate a quantity as 600. To one order of magnitude, which power of ten is it?
options: ["10² (hundreds)", "10³ (thousands)", "It is exactly halfway"]
answer: 1
right: Right. 600 is only about 1.7 times below 1000 but 6 times above 100. The halfway point in factors is about 316.
wrong: Compare factors, not differences. 1000 ÷ 600 ≈ 1.7, while 600 ÷ 100 = 6. The halfway point between 100 and 1000 is about 316.
:::

## Guess with bounds {lvl=1 id=s-bounds label="Class 10"}

Sometimes a factor feels impossible to guess. How many mangoes are on a big tree? You have no idea... or do you? Surely **more than 100**: you have seen trees heavy with fruit. Surely **fewer than 10,000**: that would be a mango for every leaf cluster. You know more than you thought.

Now pick one number between the bounds. The tempting choice is the ordinary average: $(100 + 10{,}000)/2 \approx 5{,}000$. But look how lopsided that is. It is only 2 times below the upper bound and 50 times above the lower bound.

The fair middle, when you think in factors, is the number that is **the same factor away from both bounds**. Call the lower bound $L$ and the upper bound $U$. The middle number $E$ must satisfy $E / L = U / E$, which gives

$$E = \sqrt{L \times U}.$$

Read it as: multiply the two bounds, then take the square root. This is the **geometric mean**. For the mangoes, $\sqrt{100 \times 10{,}000} = \sqrt{10^6} = 1000$, which is ×10 from each bound.

:::figure caption="On a log scale, 10, 100 and 1000 are equally spaced. The geometric mean of the bounds 10 and 1000 is 100, the same factor (×10) from each. The ordinary average, 505, crowds against the upper bound: only ×2 from 1000 but ×50 from 10."
<svg viewBox="0 0 520 140" role="img" aria-label="A logarithmic number line from 10 to 1000 with the geometric mean 100 in the middle and the arithmetic mean 505 near the right end">
<line class="axis" x1="30" y1="70" x2="490" y2="70"/>
<line x1="40" y1="63" x2="40" y2="77" style="stroke:var(--ink);stroke-width:1.5"/>
<line x1="260" y1="63" x2="260" y2="77" style="stroke:var(--ink);stroke-width:1.5"/>
<line x1="480" y1="63" x2="480" y2="77" style="stroke:var(--ink);stroke-width:1.5"/>
<line x1="260" y1="45" x2="260" y2="62" style="stroke:var(--mat);stroke-width:1.5"/>
<line x1="415" y1="29" x2="415" y2="62" style="stroke:var(--chem);stroke-width:1.5"/>
<circle cx="260" cy="70" r="5" style="fill:var(--mat)"/>
<circle cx="415" cy="70" r="5" style="fill:var(--chem)"/>
<text x="260" y="40" text-anchor="middle" style="fill:var(--mat)">geometric mean 100</text>
<text x="415" y="24" text-anchor="middle" style="fill:var(--chem)">arithmetic mean 505</text>
<text x="40" y="92" text-anchor="middle" style="fill:var(--ink)">10</text>
<text x="260" y="92" text-anchor="middle" style="fill:var(--ink)">100</text>
<text x="480" y="92" text-anchor="middle" style="fill:var(--ink)">1000</text>
<text x="30" y="108" style="fill:var(--muted)">lower bound</text>
<text x="490" y="108" text-anchor="end" style="fill:var(--muted)">upper bound</text>
<text x="150" y="128" text-anchor="middle" style="fill:var(--muted)">×10</text>
<text x="370" y="128" text-anchor="middle" style="fill:var(--muted)">×10</text>
</svg>
:::

A shortcut for powers of ten: **average the exponents**. Between $10^2$ and $10^6$ the geometric mean is $10^4$. Between 30 and 3000, it is $\sqrt{90{,}000} = 300$.

:::qc lvl=1
q: You are sure the number of autorickshaws at a big railway station's stand is more than 20 and fewer than 2,000. What single estimate treats both bounds fairly?
options: ["about 1,000", "about 200", "about 500"]
answer: 1
right: Right. √(20 × 2000) = √40,000 = 200, which is ×10 from each bound.
wrong: The ordinary average (about 1,000) is ×2 from 2,000 but ×50 from 20. Multiply the bounds and take the square root: √40,000 = 200.
:::

## Check by a second route {lvl=2 id=s-routes label="Class 12"}

One chain of guesses can hide one bad assumption. The cure is to reach the same number by a **second route that uses different assumptions**. If two independent routes agree within a factor of 2 or 3, you can trust the order of magnitude. If they disagree by a factor of 10, one assumption is badly wrong, and finding it teaches you something.

For the barbers, Route A counted from the **demand side** (haircuts needed). Route B counts from the **supply side** (shops you can see). Walk down a busy street in your own town. Suppose you pass about one barber shop with 2 chairs for every 1,000 people living nearby. Then

$$\frac{2 \times 10^7 \text{ people}}{1000 \text{ people per shop}} \times 2 \text{ barbers per shop} = 4 \times 10^4 \text{ barbers}.$$

Route A gave $2.2 \times 10^4$; Route B gives $4 \times 10^4$. They agree within a factor of 2. That is a good result, and the gap even hints at what Route A left out: women's and children's haircuts, shaves and beard trims, all of which keep barbers busy.

:::note title="Problem-solving move: Change your point of view" tone=tip
**The strategy:** move to the viewpoint from which the problem looks simple (Zeitz's example puts the observer on a floating hat, so the river seems still).

**Here:** the same quantity can be seen from the customer's chair (how many haircuts does the city need?) or from the street (how many shops do I pass?). Each viewpoint uses different guesses, so their errors are independent, and agreement between them is real evidence. [Inference] Applying this strategy to estimation is our mapping, not the book's example.

Source: Zeitz, *The Art and Craft of Problem Solving*, §2.4 (p. 58).
:::

Other natural pairs of routes: **per person versus per shop** (chai cups drunk versus cups sold), **per household versus per city** (water used versus water supplied), **from the top versus from the bottom** (a company's total sales versus customers times orders times value).

:::qc lvl=2
q: Route A estimates a town's daily chai consumption as 10 lakh cups; Route B, from counting stalls, gives 50,000 cups. What should you conclude?
options: ["Average them: about 5 lakh cups", "One assumption is badly wrong (or Route B missed tea made at home); find it before trusting either", "Route B is right because counting is more reliable than guessing"]
answer: 1
right: Right. A factor of 20 is far beyond normal Fermi error. Most likely Route B counted only stalls and forgot the chai made at home and in offices. The disagreement is the useful part.
wrong: A factor of 20 means the routes are not measuring the same thing, or one guess is far off. Averaging hides the mistake. Look for the missing piece: here, chai made at home.
:::

## Units keep you honest {lvl=2 id=s-units label="Class 12"}

Every factor in a Fermi chain carries a **unit**: men, cuts per month, minutes per cut. Treat units like algebra symbols that multiply and cancel. If the units of your chain do not cancel down to the unit you want, the chain is wrong before you look at a single digit.

:::worked title="Is this electricity bill reasonable?"
Suppose an air conditioner draws 1.5 kW and runs 8 hours a day in summer, and suppose electricity costs ₹7 a unit (a unit is one kilowatt-hour, kWh).

$$1.5\ \text{kW} \times 8\ \frac{\text{h}}{\text{day}} \times 30\ \frac{\text{day}}{\text{month}} = 360\ \frac{\text{kWh}}{\text{month}}.$$

Read it as: kilowatts times hours gives kilowatt-hours, and "day" cancels top and bottom. Then 360 kWh at ₹7 per kWh comes to about ₹2,500 a month for the AC alone. If the bill says ₹25,000, either the tariff assumption or the bill needs a second look.
:::

A unit conversion is just **multiplying by 1** in disguise. Since 1 km = 1000 m and 1 h = 3600 s, the fraction $\dfrac{1000\ \text{m}}{1\ \text{km}}$ equals 1. So

$$72\ \frac{\text{km}}{\text{h}} \times \frac{1000\ \text{m}}{1\ \text{km}} \times \frac{1\ \text{h}}{3600\ \text{s}} = 20\ \frac{\text{m}}{\text{s}}.$$

Read it as: kilometres cancel kilometres, hours cancel hours, and a train at 72 km/h covers 20 m every second.

:::qc lvl=2
q: Which chain gives an answer in litres?
options: ["people × (litres per person per day) × days", "people × (days per litre)", "(litres per day) ÷ people ÷ days"]
answer: 0
right: Right. People cancel "per person", days cancel "per day", and litres are left.
wrong: Write the units of each factor and cancel. Only the first chain leaves litres alone; the second leaves person-days per litre, the third litres per person per day per day.
:::

## Why the errors partly cancel {lvl=3 id=s-cancel label="JEE"}

Now the opener's puzzle. Suppose each of four factors is off by a factor of 2, but you do not know which way: each is equally likely to be **twice too big or half too small**. How far off is the product?

Think in **steps of ×2**. An overestimate by ×2 is one step up; an underestimate by ÷2 is one step down. The product's error is the total number of steps: up-steps and down-steps cancel. That is exactly what a logarithm does. The log of a product is the sum of the logs:

$$\log(f_1 f_2 f_3 f_4) = \log f_1 + \log f_2 + \log f_3 + \log f_4.$$

Read it as: multiplying numbers is adding their logs, so multiplying errors is adding their log-errors. Each log-error here is $+1$ or $-1$ step (measured in base-2 logs), like a coin toss.

Four coin tosses have $2^4 = 16$ equally likely outcomes. Count the net steps:

- all four up (net +4, error ×16): 1 way;
- three up, one down (net +2, error ×4): 4 ways;
- two up, two down (net 0, exactly right): 6 ways;
- one up, three down (net −2, error ÷4): 4 ways;
- all four down (net −4, error ÷16): 1 way.

:::figure caption="Four factors, each randomly ×2 or ÷2. Of the 16 equally likely cases, 6 give exactly the right answer and 14 land within a factor of 4. Only 2 of 16 reach the worst case of ×16 or ÷16."
<svg viewBox="0 0 520 210" role="img" aria-label="Bar chart of the error of a product of four factors: counts 1, 4, 6, 4, 1 for errors divided by 16, divided by 4, exact, times 4, times 16">
<line class="axis" x1="50" y1="170" x2="470" y2="170"/>
<rect x="72" y="148" width="56" height="22" style="fill:color-mix(in srgb,var(--muted) 30%,var(--surface));stroke:var(--muted)"/>
<rect x="152" y="82" width="56" height="88" style="fill:color-mix(in srgb,var(--mat) 45%,var(--surface));stroke:var(--mat)"/>
<rect x="232" y="38" width="56" height="132" style="fill:color-mix(in srgb,var(--mat) 45%,var(--surface));stroke:var(--mat)"/>
<rect x="312" y="82" width="56" height="88" style="fill:color-mix(in srgb,var(--mat) 45%,var(--surface));stroke:var(--mat)"/>
<rect x="392" y="148" width="56" height="22" style="fill:color-mix(in srgb,var(--muted) 30%,var(--surface));stroke:var(--muted)"/>
<text x="100" y="142" text-anchor="middle" style="fill:var(--ink)">1</text>
<text x="180" y="76" text-anchor="middle" style="fill:var(--ink)">4</text>
<text x="260" y="32" text-anchor="middle" style="fill:var(--ink)">6</text>
<text x="340" y="76" text-anchor="middle" style="fill:var(--ink)">4</text>
<text x="420" y="142" text-anchor="middle" style="fill:var(--ink)">1</text>
<text x="100" y="188" text-anchor="middle" style="fill:var(--ink)">÷16</text>
<text x="180" y="188" text-anchor="middle" style="fill:var(--ink)">÷4</text>
<text x="260" y="188" text-anchor="middle" style="fill:var(--ink)">exact</text>
<text x="340" y="188" text-anchor="middle" style="fill:var(--ink)">×4</text>
<text x="420" y="188" text-anchor="middle" style="fill:var(--ink)">×16</text>
<text x="20" y="16" style="fill:var(--muted)">ways (out of 16)</text>
<text x="260" y="205" text-anchor="middle" style="fill:var(--mat)">within ×4: 14 of 16</text>
</svg>
:::

So the worst case, ×16, needs every guess to err the same way, and that happens only 2 times in 16. Typically the product is off by about ×4, the same as two factors' worth of error, not four.

How big is "typical" in general? The net number of steps after $n$ coin tosses has a spread (root-mean-square size) of $\sqrt{n}$ steps. You will see why at depth 4. So with $n$ factors each off by ×2, the typical error is about

$$2^{\sqrt{n}}.$$

Read it as: the errors grow with the square root of the number of factors, not with the number itself. For 9 factors that is $2^3 = 8$, against a worst case of $2^9 = 512$. That is the secret of Fermi estimation: **more factors make each guess easier, and the errors grow only slowly.**

:::qc lvl=3
q: An estimate uses 16 independent factors, each randomly ×2 or ÷2. What is the typical error of the product?
options: ["about ×16 (2⁴)", "about ×65,000 (2¹⁶)", "about ×2"]
answer: 0
right: Right. The typical net number of steps is √16 = 4, so the error is about 2⁴ = 16. The worst case, 2¹⁶, almost never happens.
wrong: Errors add in log space like coin tosses; the typical net count is √n steps. With n = 16 that is 4 steps of ×2, about ×16.
:::

## Dimensional analysis: guessing a formula {lvl=3 id=s-dims label="JEE"}

Units can do more than catch mistakes. Sometimes they tell you the answer's shape before you know any physics.

How long does a swing (a jhula) take to go to and fro? It could depend on the rope's length $\ell$ (in metres), on the pull of gravity $g$ (in metres per second squared) and perhaps on the child's mass $m$ (in kilograms). The answer, a time $T$, must come out in seconds.

Try $T = \ell^a g^b m^c$. Kilograms appear only in $m$, so $c = 0$: the mass cannot matter. Metres must cancel, so $a + b = 0$. Seconds come only from $g$, which carries $\text{s}^{-2}$, so $-2b = 1$. Hence $b = -\tfrac12$, $a = \tfrac12$, and

$$T \propto \sqrt{\frac{\ell}{g}}.$$

Read it as: four times the rope length, twice the swing time; the child's weight makes no difference. The full theory gives $T = 2\pi\sqrt{\ell/g}$.

:::worked title="A 2.5 m jhula"
$\sqrt{\ell/g} = \sqrt{2.5/9.8} \approx 0.5$ s. The true period is $2\pi \times 0.5 \approx 3.2$ s. Dimensional analysis got the shape exactly and the size wrong by a factor of $2\pi \approx 6$.
:::

That is the honest limit: dimensions cannot see pure numbers like $2\pi$ or $\sqrt2$. Usually such numbers are "of order one" (between about 0.3 and 3), and the method lands within the right power of ten. For a stone dropped from a height $h$, dimensions give $t \sim \sqrt{h/g}$ and the truth is $\sqrt{2h/g}$: off by only $\sqrt 2$. But a $2\pi$ or a $4\pi$ can hide in a formula, so a factor of 6 or 12 is possible.

:::qc lvl=3
q: The speed v of water squirting from a hole at the bottom of a tank depends only on the depth h of water above it and on g. If the depth is made 4 times larger, the speed becomes
options: ["4 times larger", "2 times larger", "16 times larger"]
answer: 1
right: Right. Metres per second from metres and metres per second squared forces v ∝ √(gh), so 4 times the depth gives 2 times the speed.
wrong: Try v = h^a g^b. Seconds: −2b = −1 gives b = 1/2; metres: a + b = 1 gives a = 1/2. So v ∝ √(gh), and ×4 in h gives ×2 in v.
:::

## Error propagation in log space {lvl=4 id=s-logspace label="Olympiad"}

Let us make the coin-toss picture exact. Write the true value as $Q = f_1 f_2 \cdots f_n$ and your estimate as $\hat Q = \hat f_1 \hat f_2 \cdots \hat f_n$. The error of factor $i$ is the ratio $\hat f_i / f_i$; its log is the **log-error**

$$\varepsilon_i = \ln \hat f_i - \ln f_i.$$

Read it as: how many "natural-log units" factor $i$ is too high (negative means too low). Because logs turn products into sums, the log-error of the whole estimate is simply

$$\varepsilon = \varepsilon_1 + \varepsilon_2 + \cdots + \varepsilon_n.$$

Now assume the three conditions in the core box: the $\varepsilon_i$ are **independent**, each has **mean zero** (no bias), and each has a typical size (standard deviation) $\sigma_i$. Variances of independent quantities add, because the cross terms $\mathbb{E}[\varepsilon_i \varepsilon_j]$ vanish when $i \ne j$:

$$\sigma^2 = \sigma_1^2 + \sigma_2^2 + \cdots + \sigma_n^2.$$

Read it as: the typical log-errors combine like the sides of a right triangle, not like a pile of bricks. If every factor has the same $\sigma_i = \ln k$ (each off by "about ×k"), then $\sigma = \sqrt n \ln k$, and the typical error factor is

$$e^{\sigma} = e^{\sqrt n \ln k} = k^{\sqrt n}.$$

That is the $2^{\sqrt n}$ rule of depth 3, now for any $k$ and any shape of error distribution.

**Unequal factors: one bad guess dominates.** Suppose three factors are uncertain by ×2, ×2 and ×10. In base-10 logs (decades), $\sigma_i = 0.30,\ 0.30,\ 1$. Then $\sigma = \sqrt{0.09 + 0.09 + 1} \approx 1.09$ decades, an error of about $10^{1.09} \approx \times 12$. The ×10 factor alone would give ×10, so the two ×2 factors barely matter. Moral: spend your effort on the worst factor. Halving the uncertainty of a ×2 factor changes almost nothing; turning the ×10 guess into a ×3 guess transforms the estimate.

**Small errors: the laboratory rule.** When every error is small, $\ln(1 + \delta) \approx \delta$, so the log-error is just the relative error. The same formula becomes the rule taught in physics practicals: relative errors of a product combine as $\left(\dfrac{\Delta Q}{Q}\right)^2 = \sum \left(\dfrac{\Delta f_i}{f_i}\right)^2$. Fermi estimation is that rule, extended to errors so large that only logs make sense.

**The shape of the answer.** A sum of many independent log-errors is close to a bell curve (the central limit theorem). So the estimate's error factor follows a **lognormal** distribution: symmetric when plotted against $\log$, lopsided on an ordinary scale. Two consequences:

- The median of a lognormal is $e^{\mu}$, the geometric mean of the distribution. That is why the geometric mean of the bounds is the natural single guess.
- Its ordinary mean is larger, $e^{\mu + \sigma^2/2}$. With $\sigma = \ln 10$ (uncertain by ×10) the mean is about 14 times the median. The rare huge values pull the average up. This matters whenever money depends on the average, not the typical case (see expected value).

**Where the rule breaks.** Three things are not random and do not cancel:

- **Shared bias.** If an optimistic mood pushes every factor up, the errors add in a straight line: $n\sigma$, not $\sqrt n\,\sigma$.
- **A missing factor.** Forgetting that only men were counted is not an error of size ×2 at random; it is a definite factor you left out.
- **A unit slip.** Minutes for hours is a fixed ×60, and no amount of cancelling will fix it. That is why the units check of depth 2 comes before any trust in the √n rule.

:::qc lvl=4
q: An estimate has four independent factors with log₁₀-uncertainties 0.1, 0.1, 0.1 and 0.6 decades. To improve it most, what should you do?
options: ["Halve all three small uncertainties", "Halve the 0.6 uncertainty", "Add more factors"]
answer: 1
right: Right. Now σ = √(0.03 + 0.36) ≈ 0.62. Halving the 0.6 gives √(0.03 + 0.09) ≈ 0.35, while halving the three small ones gives √(0.0075 + 0.36) ≈ 0.61, almost no change.
wrong: Uncertainties add as squares. 0.6² = 0.36 dwarfs 3 × 0.1² = 0.03, so only the large one matters. Halving it brings σ from about 0.62 to about 0.35 decades.
:::

## Scaling laws {lvl=4 id=s-scaling label="Olympiad"}

A last tool lets you estimate with almost no data: knowing **how a quantity changes with size**. Blow every length of an object up by a factor $s$, keeping its shape. Every area grows by $s^2$, and every volume (and so the mass) grows by $s^3$. This is the **square-cube law**.

:::figure caption="Cubes of side 1, 2 and 3. Surface grows as the square of the side, volume as the cube, so the ratio of volume to surface grows in proportion to the side: 1/6, 2/6, 3/6."
<svg viewBox="0 0 520 175" role="img" aria-label="Three cubes of side 1, 2 and 3 with their surface areas 6, 24, 54 and volumes 1, 8, 27">
<polygon points="55,100 65,90 95,90 85,100" style="fill:color-mix(in srgb,var(--mat) 30%,var(--surface));stroke:var(--mat)"/>
<polygon points="85,100 95,90 95,120 85,130" style="fill:color-mix(in srgb,var(--mat) 45%,var(--surface));stroke:var(--mat)"/>
<rect x="55" y="100" width="30" height="30" style="fill:color-mix(in srgb,var(--mat) 15%,var(--surface));stroke:var(--mat)"/>
<polygon points="190,70 210,50 270,50 250,70" style="fill:color-mix(in srgb,var(--mat) 30%,var(--surface));stroke:var(--mat)"/>
<polygon points="250,70 270,50 270,110 250,130" style="fill:color-mix(in srgb,var(--mat) 45%,var(--surface));stroke:var(--mat)"/>
<rect x="190" y="70" width="60" height="60" style="fill:color-mix(in srgb,var(--mat) 15%,var(--surface));stroke:var(--mat)"/>
<polygon points="365,40 395,10 485,10 455,40" style="fill:color-mix(in srgb,var(--mat) 30%,var(--surface));stroke:var(--mat)"/>
<polygon points="455,40 485,10 485,100 455,130" style="fill:color-mix(in srgb,var(--mat) 45%,var(--surface));stroke:var(--mat)"/>
<rect x="365" y="40" width="90" height="90" style="fill:color-mix(in srgb,var(--mat) 15%,var(--surface));stroke:var(--mat)"/>
<text x="70" y="152" text-anchor="middle" style="fill:var(--ink)">side 1</text>
<text x="70" y="168" text-anchor="middle" style="fill:var(--muted)">surface 6, vol 1</text>
<text x="220" y="152" text-anchor="middle" style="fill:var(--ink)">side 2</text>
<text x="220" y="168" text-anchor="middle" style="fill:var(--muted)">surface 24, vol 8</text>
<text x="410" y="152" text-anchor="middle" style="fill:var(--ink)">side 3</text>
<text x="410" y="168" text-anchor="middle" style="fill:var(--muted)">surface 54, vol 27</text>
</svg>
:::

Many everyday puzzles fall out of this one line:

- **Why a big pot of dal stays hot for hours.** Heat is stored in proportion to volume ($s^3$) but leaks out through the surface ($s^2$). The rate at which the temperature falls goes as surface over volume, $s^2/s^3 = 1/s$. A pot twice as wide cools about half as fast. [Inference: simple model, heat loss proportional to surface area.]
- **Why an ant can carry many times its weight and an elephant cannot.** Muscle strength depends on a muscle's cross-section ($s^2$); weight goes as $s^3$. Strength per unit weight goes as $1/s$, so smaller animals are relatively stronger.
- **Why a flea and a person jump to similar heights.** Jump energy comes from muscle mass ($s^3$), and lifting the body by a height $h$ costs energy in proportion to mass times $h$ ($s^3 h$). The $s^3$ cancels, so $h$ does not depend on size, to a first rough approximation. [Inference: ignores air resistance and leg mechanics.]

**Diffusion: the √n again.** How long does masala take to soak into a piece of paneer? Flavour molecules wander randomly. After $N$ random steps a molecule has typically moved only $\sqrt N$ steps from its start, the very same random-walk law as the Fermi errors. To get a distance $d$ you need about $d^2$ steps, so the soaking time grows as $d^2$: a piece twice as thick takes about four times as long. [Inference: ideal diffusion model.]

**Power laws on log-log paper.** Every scaling law has the form $y = c\,x^p$. Take logs: $\log y = \log c + p\log x$. On axes marked in powers of ten, it is a straight line whose slope is the exponent $p$. Biologists who plotted the energy use of animals against their mass found a slope close to $\tfrac34$ (Kleiber's law) over a huge range of sizes [Unverified: exact exponent from memory]. A scaling law turns one known case into many estimates: know one point and the slope, and you can read off the rest.

:::qc lvl=4
q: A halwai makes a giant laddoo 3 times the diameter of an ordinary one (same recipe). Compared with an ordinary laddoo, it needs how much more mixture, and how much more of the sugar coating spread on its surface?
options: ["3 times the mixture, 3 times the coating", "27 times the mixture, 9 times the coating", "9 times the mixture, 27 times the coating"]
answer: 1
right: Right. Volume goes as 3³ = 27, surface as 3² = 9. Per gram, the giant laddoo has only a third as much coating.
wrong: Lengths ×3 means areas ×3² = 9 and volumes ×3³ = 27. Mixture fills the volume; the coating covers the surface.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Break the unknown into factors you can picture from daily life, state each assumption, and multiply. {lvl=1}
2. An estimate aims at the right power of ten; round factors to 1 or 3 times a power of ten (3 is halfway in factors). {lvl=1}
3. Between a lower bound L and an upper bound U, the fair guess is the geometric mean √(LU). {lvl=1}
4. Trust an estimate when a second, independent route lands within a factor of 2 or 3; units must cancel to the answer's unit. {lvl=2}
5. Logs turn products into sums, so log-errors add like coin tosses: n factors each off by ×k give a typical error of about k^√n. {lvl=3}
6. Dimensional analysis gives a formula's shape; it misses pure numbers like 2π. {lvl=3}
7. Independent uncertainties add as squares, so the worst factor dominates; shared bias, missing factors and unit slips never cancel. {lvl=4}
8. Square-cube law: areas go as s², volumes as s³; diffusion time goes as distance squared. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Do not average a lower and an upper bound by adding and halving; use the geometric mean. {lvl=1}
- Keep two significant figures at most. "22,374 barbers" claims a precision your guesses do not have. {lvl=1}
- Watch the lakh/crore and million/billion conversions: 1 crore = 10⁷ = 10 million. {lvl=1}
- Write the unit beside every factor; minutes mixed with hours is a silent ×60 error. {lvl=2}
- Two routes are only a check if they use different assumptions; recomputing the same chain twice proves nothing. {lvl=2}
- The k^√n rule needs independent, unbiased factors; if every guess leans the same way, errors pile up as kⁿ. {lvl=3}
- In a scaled-up object, strength and heat loss go with area, weight and heat stored go with volume; do not scale everything by the same factor. {lvl=4}
:::
