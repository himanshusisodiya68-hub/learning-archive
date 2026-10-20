---
title: Expected value and decisions
summary: Why the mela stall always wins, why insurance and lottery tickets can both be sensible, and when the average is the wrong guide.
ncert: []
up_to: Olympiad
builds_on: [Classical probability, Fractions and percentages, Geometric series (for depth 3–4)]
notes_prompt: Explain to a friend why an insurance company and its customer can both be making a sensible choice, even though only one of them comes out ahead on average.
margin:
  - kind: history
    title: History
    text: 'Pascal and Fermat''s letters of 1654 on how to split the stakes of an unfinished game are usually taken as the birth of expected value. Daniel Bernoulli''s 1738 paper on the St Petersburg game introduced utility. [Unverified: dates from memory]'
  - kind: tip
    title: Negative marking
    text: 'Suppose a test gives +4 for a right answer and −1 for a wrong one, with four options. A blind guess has expected score 4(1/4) − 1(3/4) = +0.25. Rule out one option and it rises to about +0.67; rule out two and it is +1.5. (Check your own exam''s scheme.)'
  - kind: olympiad
    title: Olympiad link
    text: 'Asked for an expected count? Write the count as a sum of 0-or-1 indicators and add their probabilities. Linearity needs no independence, so dependent events cause no trouble at all.'
books:
  - { title: 'Paul Zeitz, The Art and Craft of Problem Solving (2nd ed.)', ref: '§2.2 Get your hands dirty (p. 26); §2.4 Change your point of view (p. 58); Problem 2.1.27(c) (p. 25)' }
  - { title: 'J. K. Blitzstein and J. Hwang, Introduction to Probability', ref: 'Ch 4 Expectation (linearity, indicators, geometric distribution) [Unverified]' }
  - { title: 'W. Feller, An Introduction to Probability Theory and Its Applications, Vol. 1', ref: 'Ch X (the St Petersburg game) [Unverified]' }
cards:
  - { front: 'What is the expected value of a chancy amount?', back: 'Its long-run average per play: each outcome times its probability, added up. It need not be a possible outcome (a die averages 3.5).' }
  - { front: 'What is the fair price of a game?', back: 'Its expected payout. Charge more and the excess is the house edge, the organiser''s long-run income per play.' }
  - { front: 'Why can buying insurance be rational though it loses on average?', back: 'A large loss hurts more than many small ones of the same total; you pay a little above the expected loss to remove a frightening outcome. The insurer, averaging over thousands, faces almost no risk.' }
  - { front: 'Variance in one line?', back: '$\mathrm{Var}(X) = E[X^2] - (E[X])^2$, the average squared distance from the mean; its square root is the standard deviation, a typical miss.' }
  - { front: 'Expected wait for an event of probability $p$ per try?', back: '$1/p$ tries (geometric distribution). A die needs 6 rolls on average for a six, and having missed ten times changes nothing.' }
  - { front: 'When is expected value the wrong guide?', back: 'When one outcome ruins you, when you play only once with big stakes, and when stakes compound (judge the typical path, not the average).' }
core:
  idea: 'The expected value of a chancy choice is its long-run average per play: each outcome times its probability, added up. Use it to price games and compare choices, but also check the spread, because one ruinous outcome can matter more than any average.'
  formulas:
    - tex: 'E[X] = \sum_i x_i\,p_i'
      label: 'Expected value: outcomes weighted by their probabilities'
    - tex: '\mathrm{Var}(X) = E[X^2] - \big(E[X]\big)^2'
      label: 'Variance: how far outcomes stray from the average'
    - tex: 'E[X+Y] = E[X] + E[Y]'
      label: 'Linearity: true always, even when X and Y depend on each other'
  conditions:
    - 'The choice is repeated many times, independently (or you face many similar independent choices)'
    - 'The probabilities are known and honest'
    - 'Each stake is small compared with what you have, and no outcome takes you out of the game'
    - 'Every rupee is worth the same to you over the range of outcomes (no strong risk aversion)'
  sign: 'Losses enter with a minus sign, and the stake is part of what you lose. An expected value need not be an outcome you can ever see.'
outcomes:
  - 'Compute the expected value of a game, a scratch card or a prize draw'
  - 'Find the fair price and the house edge of a game, and spot a misleading pitch'
  - 'Explain why insurance and lottery tickets can each be rational, and when they are not'
  - 'Measure risk with variance and recognise ruin, one-shot and compounding traps'
  - 'Use linearity with indicators, expected waiting times and utility to solve Olympiad-style problems, including the St Petersburg paradox'
opener:
  story: |
    It's Diwali, and the mela is loud and bright. One stall has a crowd around it. The game costs ₹10. You pick a number from 1 to 6, and the stall-keeper rolls three dice. If your number shows on one die, you get your ₹10 back and ₹10 more. On two dice, ₹20 more. On all three, ₹30 more. If it doesn't show at all, he keeps your ₹10.

    His pitch is simple: "Three dice, six numbers, so half the time your number comes up! And sometimes you win double or triple!" It sounds fair, even generous. People play all evening. Some walk away grinning. And yet the stall-keeper comes back every year, and he never seems to go home poorer.

    So who really wins in the long run, and by how much per game? And here's a second puzzle for later: the same arithmetic that tells you to walk past this stall says that insurance also loses you money on average. So why do sensible people buy it?
  art: '<svg viewBox="0 0 320 224" role="img" aria-label="A mela stall with three dice on the table and a sign saying ten rupees a go"><rect x="40" y="20" width="30" height="26" style="fill:var(--c)"/><rect x="70" y="20" width="30" height="26" style="fill:var(--surface)"/><rect x="100" y="20" width="30" height="26" style="fill:var(--c)"/><rect x="130" y="20" width="30" height="26" style="fill:var(--surface)"/><rect x="160" y="20" width="30" height="26" style="fill:var(--c)"/><rect x="190" y="20" width="30" height="26" style="fill:var(--surface)"/><rect x="220" y="20" width="30" height="26" style="fill:var(--c)"/><rect x="250" y="20" width="30" height="26" style="fill:var(--surface)"/><rect x="40" y="20" width="240" height="26" style="fill:none;stroke:var(--c);stroke-width:2"/><line x1="50" y1="46" x2="50" y2="196" style="stroke:var(--ink);stroke-width:2"/><line x1="270" y1="46" x2="270" y2="196" style="stroke:var(--ink);stroke-width:2"/><rect x="190" y="60" width="70" height="24" rx="3" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface));stroke:var(--c)"/><text x="225" y="76" text-anchor="middle" style="font-size:11px;fill:var(--ink)">₹10 a go</text><rect x="60" y="148" width="200" height="10" style="fill:var(--muted)"/><line x1="76" y1="158" x2="76" y2="196" style="stroke:var(--muted);stroke-width:3"/><line x1="244" y1="158" x2="244" y2="196" style="stroke:var(--muted);stroke-width:3"/><rect x="90" y="110" width="36" height="36" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="99" cy="119" r="3.5" style="fill:var(--ink)"/><circle cx="117" cy="119" r="3.5" style="fill:var(--ink)"/><circle cx="108" cy="128" r="3.5" style="fill:var(--ink)"/><circle cx="99" cy="137" r="3.5" style="fill:var(--ink)"/><circle cx="117" cy="137" r="3.5" style="fill:var(--ink)"/><rect x="142" y="110" width="36" height="36" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="151" cy="119" r="3.5" style="fill:var(--ink)"/><circle cx="169" cy="137" r="3.5" style="fill:var(--ink)"/><rect x="194" y="110" width="36" height="36" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="203" cy="119" r="3.5" style="fill:var(--ink)"/><circle cx="203" cy="128" r="3.5" style="fill:var(--ink)"/><circle cx="203" cy="137" r="3.5" style="fill:var(--ink)"/><circle cx="221" cy="119" r="3.5" style="fill:var(--ink)"/><circle cx="221" cy="128" r="3.5" style="fill:var(--ink)"/><circle cx="221" cy="137" r="3.5" style="fill:var(--ink)"/><text x="160" y="216" text-anchor="middle" style="font-size:11px;fill:var(--muted)">"half the time you win!"</text></svg>'
symbols:
  - s: 'X'
    means: 'a random variable: an amount decided by chance, such as the rupees won in one game (₹)'
  - s: 'x_i,\ p_i'
    means: 'the possible outcomes and their probabilities (the probabilities add to 1)'
  - s: 'E[X]'
    means: 'expected value of X, its long-run average per play (same unit as X)'
  - s: '\mu'
    means: 'mu, short for the mean E[X] (same unit as X)'
  - s: '\mathrm{Var}(X)'
    means: 'variance, the average squared distance of X from its mean (unit squared, e.g. ₹²)'
  - s: '\sigma'
    means: 'standard deviation, the square root of the variance: a typical miss (same unit as X)'
  - s: 'I_A'
    means: 'indicator of event A: 1 if A happens, 0 if not (no unit)'
  - s: 'H_n'
    means: 'harmonic number 1 + 1/2 + ... + 1/n (no unit)'
  - s: 'u(W)'
    means: 'utility: the satisfaction a person gets from total wealth W (arbitrary units)'
  - s: 'f'
    means: 'fraction of your wealth staked on one round of a repeated bet (no unit)'
life:
  - 'Mela stalls, casinos and online betting apps all price their games above the expected payout; that margin, the house edge, is their business model.'
  - 'Insurance premiums for a phone, a scooter or health are set a little above the expected claim; you pay the gap to remove a loss you could not absorb.'
  - 'A lottery ticket returns, on average, far less than it costs; what it sells is a tiny chance at a life-changing sum.'
  - 'Negative marking in entrance exams turns every doubtful question into an expected-value decision: guess, eliminate first, or skip.'
  - 'Cashback scratch cards in payment apps say "win up to ₹1,000"; the expected reward per card is usually a few rupees.'
models:
  - name: 'Price the average, then check the tail'
    text: 'For any repeated choice (a business deal, a warranty, a contest strategy), first ask what it is worth on average. Then ask what the worst outcome does to you. If you can survive the worst case many times over, follow the average; if not, the tail decides.'
  - name: 'Pool what you cannot average'
    text: 'One person cannot average out a rare disaster; a million people can. Insurance, joint families, cooperative banks and government disaster funds all move risk from those who cannot average it to a pool that can. They fail when disasters strike everyone at once.'
  - name: 'Your life is a time average'
    text: 'An average over many people in parallel can look rosy while the typical person, living one path through time, does badly. When gains and losses compound (investments, health, reputation), judge by what happens to the typical path, and never risk being knocked out.'
links:
  - leaf: 'phy/centre-of-mass'
    name: 'Centre of mass'
    same: 'Both are weighted averages: $\sum x_i p_i$ with probabilities as weights, $\sum x_i m_i / \sum m_i$ with masses as weights. Each is the point where a number line loaded with the weights balances.'
    differs: 'Probabilities always add to 1, so no division is needed; masses add to anything. And a centre of mass is a real place, while an expected value may be an outcome that can never happen.'
  - leaf: 'cs/load-balancing'
    name: 'Load balancing'
    same: 'Random assignment spreads load evenly on average, exactly as expected value predicts; linearity gives the expected load on each server at once.'
    differs: 'A balancer cares about the worst-loaded server, the tail, not the average, which is the same lesson as ruin: the extreme outcome is what hurts.'
  - leaf: 'cs/cp-contest-strategy'
    name: 'Contest strategy'
    same: 'Choosing which problem to attempt is comparing expected points per minute: chance of solving times points, divided by time.'
    differs: 'Textbook probabilities are known exactly; in a contest they are your honest guesses, revised as the scoreboard fills.'
next:
  q: 'Expected value is only as honest as the numbers fed into it. What happens when an average, a percentage or a graph has been chosen to fool you?'
  leaf: 'mat/misleading-statistics'
  name: 'How statistics mislead'
---

:::hook
q: Over a long evening of play, who comes out ahead at this stall?
options: ["You do, by about ₹1 a game", "Nobody: it is a fair game", "The stall, by about 80 paise a game", "The stall, by about ₹5 a game"]
answer: 2
right: Right. Per ₹10 game the stall keeps about 79 paise on average, nearly 8% of every stake. Section 2 does the count, and section 6 shows exactly where the "half the time" pitch cheats.
wrong: Look again at the pitch. Three dice give, on average, half a match per game, but that is not the same as winning half the time; the chance that your number shows at all is only about 42%. Section 2 does the full count; the stall keeps about 79 paise per game.
:::

## The long-run average {lvl=1 id=s-average label="Class 10"}

A friend offers you a deal: roll an ordinary die, and she pays you as many rupees as the number on top. How much is one roll worth?

You can't know what one roll will give. But you can say what many rolls give. Roll 600 times. Each face turns up about 100 times, so you collect about

$$100 \times (1 + 2 + 3 + 4 + 5 + 6) = 100 \times 21 = 2100$$

rupees. That is ₹3.50 per roll.

The 600 didn't matter. Dividing by 600 turns "about 100 times" into "a sixth of the time", which is a probability. So the average per roll is each outcome times its probability, added up:

$$1\cdot\tfrac16 + 2\cdot\tfrac16 + 3\cdot\tfrac16 + 4\cdot\tfrac16 + 5\cdot\tfrac16 + 6\cdot\tfrac16 = 3.5.$$

Read it as: one rupee a sixth of the time, plus two rupees a sixth of the time, and so on up to six.

This long-run average per play is called the **expected value**. An amount decided by chance, like the rupees from one roll, is called a random variable; call it $X$. Its expected value is written $E[X]$. If the possible outcomes are $x_1, x_2, \dots$ with probabilities $p_1, p_2, \dots$, then

$$E[X] = x_1p_1 + x_2p_2 + \cdots = \sum_i x_i\,p_i.$$

Read it as: each outcome, weighted by how often it happens, all added up.

Two things to notice. First, "expected" is a slippery word: you can never roll 3.5. The expected value is not what you expect on one roll; it is the average you approach over many. Second, rare outcomes count for less, and that is the whole point of the weights.

:::worked title="An 'up to ₹500' scratch card"
Suppose a payment app's scratch cards work like this: 1 card in 100 pays ₹500, 1 in 10 pays ₹20, and the rest pay nothing.

$E = 500 \times 0.01 + 20 \times 0.1 + 0 \times 0.89 = 5 + 2 = 7$ rupees.

The headline says "up to ₹500". The honest number is ₹7 a card. A headline quotes the best outcome; expected value quotes the average.
:::

Here is a picture worth keeping. Put each outcome on a number line and stack a weight on it in proportion to its probability. The expected value is the point where the line balances, like a seesaw (the next section draws one). If you have met the centre of mass in physics, this is the same thing, with probabilities playing the part of masses.

:::qc lvl=1
q: A box holds 10 tickets. One is worth ₹50, three are worth ₹10 each, and six are worth nothing. You draw one ticket at random. What is it worth on average?
options: ["₹6", "₹8", "₹20", "₹60"]
answer: 1
right: Right. 50 × 0.1 + 10 × 0.3 = 5 + 3 = ₹8. Or, quicker, the box holds ₹80 in total, shared over 10 tickets.
wrong: Weight each prize by its chance: ₹50 a tenth of the time, ₹10 three-tenths of the time. Or share the box's total of ₹80 over its 10 tickets.
:::

## The fair price of a game {lvl=1 id=s-fair label="Class 10"}

Back to the mela stall. You stake ₹10 on a number and three dice roll. Each die can land 6 ways, so the three dice together land in $6 \times 6 \times 6 = 216$ equally likely ways. Count how many of them show your number:

- **on no die:** each die must show one of the other 5 faces, so $5 \times 5 \times 5 = 125$ ways;
- **on exactly one die:** pick which die matches (3 choices), the other two miss: $3 \times 5 \times 5 = 75$ ways;
- **on exactly two dice:** pick which die is the odd one out (3 choices), and it shows one of 5 other faces: $15$ ways;
- **on all three:** just $1$ way.

Check: $125 + 75 + 15 + 1 = 216$.

| your number shows on | ways (out of 216) | your gain |
|---|---|---|
| no die | 125 | −₹10 |
| one die | 75 | +₹10 |
| two dice | 15 | +₹20 |
| all three | 1 | +₹30 |

Now weight each gain by its share of the 216 ways:

$$E = \frac{(-10)(125) + 10(75) + 20(15) + 30(1)}{216} = \frac{-1250 + 750 + 300 + 30}{216} = \frac{-170}{216} \approx -0.79.$$

Read it as: every ₹10 game costs the player 79 paise on average. Over 1,000 games in an evening the stall keeps about ₹790, whatever happens to any one player.

:::figure caption="The stall game as a seesaw. Each bar is the chance of one gain; the line balances at −₹0.79, the expected gain per game. The tall bar at −₹10 outweighs the shorter bars on the right."
<svg viewBox="0 0 360 205" role="img" aria-label="Bar chart of the four possible gains with a fulcrum at minus 0.79 rupees">
<line class="ln" x1="20" y1="150" x2="340" y2="150"/>
<rect x="27" y="52" width="26" height="98" style="fill:color-mix(in srgb,var(--chem) 35%,var(--surface));stroke:var(--chem)"/>
<rect x="167" y="91" width="26" height="59" style="fill:color-mix(in srgb,var(--mat) 35%,var(--surface));stroke:var(--mat)"/>
<rect x="237" y="138" width="26" height="12" style="fill:color-mix(in srgb,var(--mat) 35%,var(--surface));stroke:var(--mat)"/>
<rect x="307" y="147" width="26" height="3" style="fill:color-mix(in srgb,var(--mat) 35%,var(--surface));stroke:var(--mat)"/>
<text x="40" y="46" text-anchor="middle">58%</text>
<text x="180" y="85" text-anchor="middle">35%</text>
<text x="250" y="132" text-anchor="middle">7%</text>
<text x="320" y="140" text-anchor="middle">0.5%</text>
<path d="M104.5 150 L96 164 L113 164 Z" style="fill:var(--mat)"/>
<text x="40" y="180" text-anchor="middle">−10</text>
<text x="110" y="180" text-anchor="middle">0</text>
<text x="180" y="180" text-anchor="middle">+10</text>
<text x="250" y="180" text-anchor="middle">+20</text>
<text x="320" y="180" text-anchor="middle">+30</text>
<text class="k" x="104" y="198" text-anchor="middle">balance at −0.79</text>
<text x="340" y="28" text-anchor="end">chance of each gain (₹)</text>
</svg>
:::

A game is **fair** when its expected gain is zero. Put another way, the **fair price** of a game is its expected payout: the stake at which neither side wins on average. Whatever is charged above that is the **house edge**, the organiser's long-run income per play. Here the edge is 79 paise on every ₹10, nearly 8%.

So why did the pitch sound right? "Three dice, each with a one-in-six chance, so half the time." Those halves are real, but they are halves of a *match*, not halves of a *win*. Sometimes two or three dice match in the same game, and that game uses up several of the "chances" at once. The chance that your number shows at all is only $91/216$, about 42%. Section 6 comes back to this with a sharper tool.

:::qc lvl=1
q: A game costs ₹5. You roll one die and win ₹24 if a six shows, nothing otherwise. What is your expected gain per game?
options: ["+₹1", "₹0, it is fair", "−₹1", "−₹4"]
answer: 2
right: Right. Expected prize = 24 × 1/6 = ₹4, so the expected gain is 4 − 5 = −₹1. The fair price would be ₹4.
wrong: First find the expected prize, 24 × 1/6, then subtract the ₹5 you pay to play.
:::

## Lotteries and insurance {lvl=1 id=s-insure label="Class 10"}

Here is the second puzzle from the opener. Suppose your scooter is worth ₹60,000, and in any year there is a 2% chance it is stolen. Your expected loss in a year is

$$0.02 \times 60000 = 1200 \text{ rupees}.$$

Suppose an insurer charges ₹1,800 a year to cover theft in full. By pure expected value, insuring costs you ₹600 a year on average. The insurer collects ₹1,800 from each of thousands of customers and pays out close to ₹1,200 per customer on average; the ₹600 gap covers its staff, its costs and its profit. You are playing the stall-keeper's game, from the losing side.

So why do sensible people insure? Because **a rupee is not always worth a rupee**. Paying ₹1,800 a year is an annoyance. Losing ₹60,000 at once could mean borrowing at a high rate, or no way to get to work. One big loss hurts far more than 33 small losses adding up to the same total. You pay ₹600 a year to turn a frightening spread of outcomes into one small, certain cost.

The lottery is the same logic run backwards. Suppose a ticket costs ₹100 and half of all ticket money comes back as prizes; the expected loss is ₹50 a ticket. But ₹100 hardly changes your life, while a ₹1 crore prize would. The ticket buys a tiny chance at a life-changing sum, plus a week of daydreaming. Bought for fun with money you won't miss, that can be a reasonable trade. Bought as a plan to get rich, it is a steady leak.

The rule of thumb that falls out:

- **Insure what you could not survive losing:** health, the family shop, the vehicle you earn with.
- **Self-insure the small stuff** (just pay for it yourself when it breaks). Extended warranties on cheap gadgets are the classic bad buy: the loss is small, and you pay the seller's edge every time.

Section 9 turns "a rupee is not always worth a rupee" into mathematics.

:::qc lvl=1
q: By the rule of thumb, which purchase is hardest to justify?
options: ["Fire insurance for a family shop", "Health insurance for a family with little savings", "A ₹300 extended warranty on an ₹800 kettle", "Insurance on a delivery rider's only motorbike"]
answer: 2
right: Right. Losing an ₹800 kettle is easily absorbed, and a ₹300 warranty on it almost certainly costs far more than the expected repair. The other three protect against losses a family could not easily survive.
wrong: Ask of each: could the buyer absorb the loss without real harm? If yes, paying the seller's edge for cover is poor value.
:::

## Spread: variance and risk {lvl=2 id=s-variance label="Class 12"}

Three offers, each worth ₹100 on average:

- **A:** ₹100, guaranteed.
- **B:** toss a coin: ₹200 or nothing.
- **C:** a 1% chance of ₹10,000, otherwise nothing.

Check C: $10000 \times 0.01 = 100$. Same expected value, yet they feel completely different. We need a second number that measures how far the outcomes stray from the average.

First try: average the misses, outcome minus mean. That fails, and always gives zero, because the mean is the balance point: the misses on the left exactly cancel those on the right. The fix is to square each miss, which makes every miss positive and makes big misses count heavily, and then average. That is the **variance**. Write $\mu$ (the Greek letter mu) for the mean $E[X]$:

$$\mathrm{Var}(X) = E\big[(X - \mu)^2\big].$$

Read it as: the average squared distance from the average. Its unit is rupees squared, which means nothing to anyone, so we take its square root, the **standard deviation** $\sigma$ (sigma). That is back in rupees: think of it as a typical miss.

For the three offers:

- **A:** never misses, so variance 0.
- **B:** always misses by ₹100, so variance $100^2 = 10000$ and $\sigma = ₹100$.
- **C:** misses by ₹9,900 with probability 0.01 and by ₹100 with probability 0.99: variance $0.01 \times 9900^2 + 0.99 \times 100^2 = 980100 + 9900 = 990000$, so $\sigma \approx ₹995$.

There is a quicker route. Expanding the square gives

$$\mathrm{Var}(X) = E[X^2] - \mu^2.$$

Read it as: the average of the squares minus the square of the average. For C: $E[X^2] = 0.01 \times 10000^2 = 1000000$, minus $100^2$, gives $990000$ again.

**The insurer's secret.** Return to the scooter. The loss is ₹60,000 with probability 0.02, so $\mu = 1200$ and $E[X^2] = 0.02 \times 60000^2 = 72000000$. Then $\mathrm{Var} = 72000000 - 1440000 = 70560000$, and $\sigma = ₹8{,}400$. For one owner the loss is wild: a typical miss seven times the average.

Now take an insurer with 10,000 such customers. When independent amounts are added, their variances add, so the total of $n$ of them has variance $n\sigma^2$ and standard deviation $\sqrt n\,\sigma$. Dividing by $n$ to get the average per customer leaves

$$\sigma_{\text{average}} = \frac{\sigma}{\sqrt n}.$$

Read it as: average $n$ independent copies and the typical miss shrinks by $\sqrt n$. With $n = 10000$, $\sqrt n = 100$, so the insurer's payout per customer typically misses ₹1,200 by only ₹84, against a ₹600 margin. The owner faces a gamble; the insurer faces near certainty. **Insurance moves risk from someone who cannot average it to someone who can.** It also shows what insurers fear: a flood or an epidemic that hits thousands at once, because then the losses are not independent and the $\sqrt n$ shrinking fails.

:::qc lvl=2
q: Which has the larger standard deviation? Game P: win ₹50 or lose ₹50 on a coin toss. Game Q: win ₹1,000 with probability 1/100, otherwise nothing.
options: ["Game P", "Game Q", "They are equal"]
answer: 1
right: Right. P misses its mean of 0 by 50 every time, so σ = 50. Q has mean 10 and E[X²] = 10,000, so the variance is 9,900 and σ ≈ 99.5. Rare big prizes make a large spread.
wrong: Use Var = E[X²] − μ² for Q: μ = 10, E[X²] = 1,000² × 0.01 = 10,000. Compare its square root with P's σ of 50.
:::

## When the average lies {lvl=2 id=s-ruin label="Class 12"}

Here is a game with a positive expected value that you should still refuse. Each round you stake all your savings on a coin. Heads, your money is multiplied by 1.5; tails, it is multiplied by 0.6. The expected multiple per round is

$$0.5 \times 1.5 + 0.5 \times 0.6 = 1.05,$$

a 5% gain per round on average. Play 100 rounds and the expected multiple is $1.05^{100} \approx 131$. Start with ₹1,000 and the average player ends with about ₹1.3 lakh.

Now follow a typical player instead: about 50 heads and 50 tails. Each head–tail pair multiplies the money by $1.5 \times 0.6 = 0.9$, so after 50 pairs the multiple is $0.9^{50} \approx 0.005$. The typical player turns ₹1,000 into about ₹5.

Both numbers are true. The average is carried by a handful of astronomically lucky players with long runs of heads; the typical player, the one you will almost certainly be, is wiped out.

:::note title="Problem-solving move: Get your hands dirty" tone=tip
Zeitz's advice: when a formula feels too clean, plug in small cases and tabulate until you see what is going on. Here, two rounds give four equally likely paths: HH multiplies by 2.25, HT and TH by 0.9 each, TT by 0.36. The average is $(2.25 + 0.9 + 0.9 + 0.36)/4 = 1.1025 = 1.05^2$, exactly as the formula says, yet three players out of four have lost money. A four-line table exposes what the formula hides. (Zeitz, *The Art and Craft of Problem Solving*, §2.2, p. 26.)
:::

:::figure caption="Four rounds of the ×1.5 or ×0.6 game, for 16 equally likely players. The average multiple is 1.05⁴ ≈ 1.22, but 11 of the 16 players end with less than they started; the average is pulled up by the one lucky player at ×5.06."
<svg viewBox="0 0 360 200" role="img" aria-label="Bar chart of final multiples after four rounds, with losers on the left of a dashed line">
<line class="ln" x1="30" y1="160" x2="340" y2="160"/>
<rect x="52" y="144" width="36" height="16" style="fill:color-mix(in srgb,var(--chem) 35%,var(--surface));stroke:var(--chem)"/>
<rect x="112" y="96" width="36" height="64" style="fill:color-mix(in srgb,var(--chem) 35%,var(--surface));stroke:var(--chem)"/>
<rect x="172" y="64" width="36" height="96" style="fill:color-mix(in srgb,var(--chem) 35%,var(--surface));stroke:var(--chem)"/>
<rect x="232" y="96" width="36" height="64" style="fill:color-mix(in srgb,var(--mat) 35%,var(--surface));stroke:var(--mat)"/>
<rect x="292" y="144" width="36" height="16" style="fill:color-mix(in srgb,var(--mat) 35%,var(--surface));stroke:var(--mat)"/>
<text x="70" y="138" text-anchor="middle">1/16</text>
<text x="130" y="90" text-anchor="middle">4/16</text>
<text x="190" y="58" text-anchor="middle">6/16</text>
<text x="250" y="90" text-anchor="middle">4/16</text>
<text x="310" y="138" text-anchor="middle">1/16</text>
<text class="k" x="70" y="176" text-anchor="middle">×0.13</text>
<text class="k" x="130" y="176" text-anchor="middle">×0.32</text>
<text class="k" x="190" y="176" text-anchor="middle">×0.81</text>
<text class="k" x="250" y="176" text-anchor="middle">×2.03</text>
<text class="k" x="310" y="176" text-anchor="middle">×5.06</text>
<text x="70" y="192" text-anchor="middle">0 heads</text>
<text x="130" y="192" text-anchor="middle">1 head</text>
<text x="190" y="192" text-anchor="middle">2 heads</text>
<text x="250" y="192" text-anchor="middle">3 heads</text>
<text x="310" y="192" text-anchor="middle">4 heads</text>
<line class="faint" x1="220" y1="32" x2="220" y2="160"/>
<text x="120" y="24" text-anchor="middle">lost money: 11/16</text>
<text x="285" y="24" text-anchor="middle">gained: 5/16</text>
</svg>
:::

The deeper reason: you play the rounds one after another with the same money, so what matters is the **product** of the multiples, not their sum. Expected value averages across many players in parallel. Your life averages across time, along one path. When those two averages disagree, the time average is the one you live.

Three warning signs that expected value is the wrong guide:

1. **Ruin.** If one outcome takes you out of the game (bankruptcy, a serious injury, a ban), no later average can bring you back. A habit with a 1% chance of disaster each year, kept up for 50 years, ends in disaster with probability $1 - 0.99^{50} \approx 39\%$.
2. **One shot, big stakes.** Offered ₹10 lakh for certain or a coin toss for ₹25 lakh, expected value favours the toss (₹12.5 lakh). But you get one draw, and the first ₹10 lakh changes your life far more than the next ₹15 lakh would. Taking the sure money is sensible.
3. **Stakes that compound.** When winnings are reinvested, as in the game above, judge by the typical path (multiply the factors), not by the average.

Expected value is the right guide when the choice is repeated many times independently, each stake is small compared with what you have, and no outcome ends the game. Section 9 shows how to bet sensibly when stakes compound.

:::qc lvl=2
q: In the two-round version of the ×1.5 or ×0.6 game, what fraction of players end with less than they started, even though the average multiple is 1.1025?
options: ["1/4", "1/2", "3/4", "None"]
answer: 2
right: Right. Only HH (×2.25) gains; HT and TH give ×0.9 and TT gives ×0.36. Three out of four lose.
wrong: List the four paths and multiply: HH, HT, TH, TT. Which multiples are above 1?
:::

## Linearity: add the pieces {lvl=3 id=s-linear label="JEE"}

At a busy temple, 50 visitors leave their shoes at a stand, and a careless attendant hands the pairs back completely at random. On average, how many visitors get their own shoes back?

Counting the arrangements in which exactly 3, or exactly 17, people get their own pair is a hard problem. There is a way that takes one line, and it rests on one fact:

$$E[X + Y] = E[X] + E[Y].$$

Read it as: the average of a total is the total of the averages. This holds **always**, even when $X$ and $Y$ depend on each other. Why? Picture the long record of many plays, one row per play, with columns for $X$, for $Y$ and for $X + Y$. The $X + Y$ column total is just the $X$ column total plus the $Y$ column total; divide everything by the number of rows. Nowhere did we need $X$ and $Y$ to be independent. (Contrast: $E[XY] = E[X]\,E[Y]$ does need independence.) Scaling works too: $E[cX] = c\,E[X]$.

The second ingredient is the **indicator**: a quantity that is 1 if some event happens and 0 if it doesn't. Write $I_A$ for the indicator of event $A$. Its expected value is

$$E[I_A] = 1 \cdot P(A) + 0 \cdot \big(1 - P(A)\big) = P(A).$$

Read it as: the average of a 0-or-1 score is just the probability of scoring 1.

Now any count is a sum of indicators. Let $I_k$ be 1 if visitor $k$ gets their own pair. The number of happy visitors is $I_1 + I_2 + \cdots + I_{50}$. Each visitor gets their own pair with probability $1/50$, so

$$E[\text{happy visitors}] = 50 \times \frac{1}{50} = 1.$$

For 5 visitors or 5 crore, the answer is 1. The indicators depend on each other strongly (if 49 visitors have their own shoes, so does the 50th), and linearity doesn't care.

:::note title="Problem-solving move: Change your point of view" tone=tip
Zeitz's strategy: move the observer to wherever the problem looks simple. Here, stop tracking the whole tangled arrangement and stand next to one visitor (one die, one pair of people) and ask only how likely that single thing is. Then add up. The hard global count becomes a sum of easy local probabilities. (Zeitz, *The Art and Craft of Problem Solving*, §2.4, p. 58.)
:::

**The stall, unmasked.** Let $M$ be the number of dice showing your number: $M = I_1 + I_2 + I_3$, one indicator per die. So $E[M] = 3 \times \tfrac16 = \tfrac12$. That is the stall-keeper's "half": half a match on average, not half a chance of winning. Your gain is $10M$ when $M \ge 1$ and $-10$ when $M = 0$. Let $J$ be the indicator of "no match"; then the gain is $10M - 10J$ in every case (check: when $M = 0$ it gives $-10$). So

$$E[\text{gain}] = 10 \times \tfrac12 - 10 \times \tfrac{125}{216} = 5 - 5.79 = -0.79,$$

the same answer as the full table, with no table.

**Shared birthdays.** In a class of 30, how many pairs share a birthday, on average? Assume 365 equally likely birthdays and ignore leap years. There are $\binom{30}{2} = 435$ pairs, each sharing with probability $1/365$, so the expected number of shared pairs is $435/365 \approx 1.19$. More than one! That is why "two people in this room share a birthday" is a safe bet in any class.

:::qc lvl=3
q: A coin is tossed 20 times. On average, how many times does a head come immediately after a head? (In HHH, count two.)
options: ["4.75", "5", "10", "2.5"]
answer: 0
right: Right. There are 19 neighbouring pairs of tosses, each HH with probability 1/4, so 19 × 1/4 = 4.75. Neighbouring pairs overlap and depend on each other, and linearity still works.
wrong: Put an indicator on each pair of neighbouring tosses. How many such pairs are there in 20 tosses, and how likely is each to be HH?
:::

## How long until it happens? {lvl=3 id=s-waiting label="JEE"}

How many rolls, on average, until a die shows its first six? Most people guess 6, and they are right. Here is a neat way to prove it.

Call the expected number of rolls $W$. The first roll always counts as one. With probability $\tfrac16$ it is a six and you are done. With probability $\tfrac56$ it isn't, and you are back exactly where you started, since the die has no memory, still facing $W$ more rolls on average. So

$$W = 1 + \tfrac56\,W \quad\Longrightarrow\quad \tfrac16\,W = 1 \quad\Longrightarrow\quad W = 6.$$

Read it as: one roll now, plus, five times out of six, the whole wait again. The same argument with success probability $p$ per try gives $W = 1 + (1-p)W$, so

$$W = \frac{1}{p}.$$

This trick, conditioning on the first step, is called **first-step analysis**. You can also check it the long way. The first success comes on try $k$ if the first $k - 1$ tries fail and the $k$th succeeds; writing $q = 1 - p$, that has probability $q^{k-1}p$. This pattern is the **geometric distribution**. Its mean is $\sum_k k\,q^{k-1}p$. Differentiating the geometric series $\sum_k q^k = \dfrac{1}{1-q}$ gives $\sum_k k\,q^{k-1} = \dfrac{1}{(1-q)^2} = \dfrac{1}{p^2}$, and multiplying by $p$ gives $1/p$ again.

**No memory.** After ten rolls without a six, the expected further wait is still 6. A six is never "due": believing it is the gambler's fallacy. (Real things that wear out, like bulbs or tyres, are not memoryless. The geometric model fits fresh, independent tries.)

**Collecting the set.** A biscuit brand hides one of 6 cricketer cards in each packet, all equally likely. How many packets, on average, to collect all six? Break the wait into stages. When you already have $j$ different cards, a packet is new with probability $\frac{6 - j}{6}$, so that stage takes $\frac{6}{6-j}$ packets on average. Linearity adds the stages:

$$\frac66 + \frac65 + \frac64 + \frac63 + \frac62 + \frac61 = 6\left(1 + \tfrac12 + \tfrac13 + \tfrac14 + \tfrac15 + \tfrac16\right) = 14.7.$$

The first card takes 1 packet; the last one alone takes 6 on average. For $n$ cards the answer is $n H_n$, where the **harmonic number** $H_n = 1 + \frac12 + \cdots + \frac1n$ grows like $\ln n$. With 100 cards you need about 519 packets, more than five per card.

:::qc lvl=3
q: Each time you dial a busy helpline, you get through with probability 0.2, independently. On average, how many dials until you get through?
options: ["2", "4", "5", "20"]
answer: 2
right: Right. Expected wait = 1/p = 1/0.2 = 5 dials.
wrong: The expected number of tries until a success of probability p is 1/p.
:::

## The St Petersburg paradox {lvl=4 id=s-stpete label="Olympiad"}

A casino offers this game. A fair coin is tossed until it first shows heads. If that happens on toss $k$, you are paid $2^k$ rupees: ₹2 if the first toss is heads, ₹4 if the second, ₹8 if the third, and so on. What is the most you would pay to play?

Expected value says:

$$E = \tfrac12 \cdot 2 + \tfrac14 \cdot 4 + \tfrac18 \cdot 8 + \cdots = 1 + 1 + 1 + \cdots = \infty.$$

Read it as: each possible length of run contributes exactly one rupee, and there are infinitely many lengths. By expected value you should pay any price at all, your house included. Yet hardly anyone would pay ₹50. Half the time you get ₹2; seven times in eight you get ₹8 or less. The infinite average is built entirely from ever-rarer, ever-larger prizes.

**Fix 1: no casino has infinite money.** Suppose the casino can pay at most $2^{30}$ rupees (about ₹107 crore), and any longer run pays only that. Runs of length 1 to 30 contribute ₹1 each. All longer runs together have probability $2^{-30}$ and pay $2^{30}$, contributing ₹1 more. So

$$E = 30 + 2^{30} \cdot 2^{-30} = 31 \text{ rupees}.$$

A bank of ₹107 crore makes the game worth ₹31, and doubling the bank adds just ₹1. Most of the paradox lives in prizes no one could ever pay.

**Fix 2: utility.** Daniel Bernoulli's answer was that money is not worth its face value: each extra rupee adds less satisfaction the richer you already are. He proposed that satisfaction, or **utility**, grows like the logarithm of wealth, so that every doubling adds the same amount of happiness. The expected utility of the prize is then

$$\sum_{k \ge 1} \frac{1}{2^k} \ln 2^k = \ln 2 \sum_{k\ge1} \frac{k}{2^k} = 2\ln 2 = \ln 4,$$

using $\sum k/2^k = 2$ (put $q = \frac12$ in $\sum k q^{k} = q/(1-q)^2$). The sure amount with the same utility, the **certainty equivalent**, is $e^{\ln 4} = ₹4$. That treats the prize as the player's whole wealth. A log-utility player who already has ₹1,00,000 would pay about ₹18, and one with ₹1 crore about ₹24 (found numerically): finite, modest prices, close to what people actually offer.

**Honest limits.** Log utility does not close every door: make the prizes grow fast enough (say $e^{2^k}$ rupees) and the expected log is infinite again. Only a utility with a ceiling, or a finite bank, ends the paradox for good, and economists still argue about which fix is the "right" one. Real people also simply struggle to weigh tiny probabilities.

:::qc lvl=4
q: In the capped game above, the casino doubles its bank from 2³⁰ to 2³¹ rupees. By how much does the fair price rise?
options: ["By ₹1", "It doubles", "By ₹31", "It becomes infinite"]
answer: 0
right: Right. A cap of 2ⁿ gives a fair price of n + 1 rupees, so going from 2³⁰ to 2³¹ moves it from ₹31 to ₹32.
wrong: Each run length up to the cap adds ₹1, and the runs beyond the cap add ₹1 in total. How many run lengths does one doubling of the cap add?
:::

## Utility, insurance and the Kelly bet {lvl=4 id=s-utility label="Olympiad"}

Write $u(W)$ for the satisfaction you get from total wealth $W$. If each extra rupee adds a little less than the one before, the graph of $u$ bends downward; such a curve is called **concave**. Now face a gamble between a bad outcome and a good one, equally likely.

:::figure caption="A concave utility curve. The average of the two outcomes' utilities lies on the straight chord, below the curve's value at the average wealth. The sure amount you would accept instead, the certainty equivalent, is less than the average wealth."
<svg viewBox="0 0 360 205" role="img" aria-label="Concave utility curve with a chord between a bad and a good outcome">
<line class="ln" x1="40" y1="180" x2="345" y2="180"/>
<line class="ln" x1="40" y1="180" x2="40" y2="12"/>
<polyline class="ray" points="40,180 42.9,166 51.6,152 66.1,138 86.4,124 112.5,110 144.4,96 182.1,82 225.6,68 274.9,54 330,40"/>
<line class="faint" x1="51.6" y1="152" x2="330" y2="40"/>
<line class="faint" x1="190.8" y1="180" x2="190.8" y2="79"/>
<line class="faint" x1="144.4" y1="96" x2="190.8" y2="96"/>
<line class="faint" x1="144.4" y1="96" x2="144.4" y2="180"/>
<circle class="obj" cx="51.6" cy="152" r="4"/>
<circle class="obj" cx="330" cy="40" r="4"/>
<circle class="obj" cx="190.8" cy="96" r="3.5"/>
<circle class="obj" cx="190.8" cy="79" r="3.5"/>
<text x="46" y="22">utility</text>
<text x="345" y="196" text-anchor="end">wealth</text>
<text x="58" y="172">bad outcome</text>
<text x="326" y="28" text-anchor="end">good outcome</text>
<text class="k" x="184" y="70" text-anchor="end">u(average)</text>
<text class="k" x="198" y="114">average of u</text>
<text x="150" y="196" text-anchor="end">sure-thing value</text>
<text x="196" y="196">average</text>
</svg>
:::

The utility of the average wealth sits on the curve; the average of the two utilities sits on the straight chord, which lies below a concave curve. In symbols, for concave $u$,

$$E\big[u(W)\big] \le u\big(E[W]\big).$$

Read it as: a gamble is worth less to you than its average paid for sure. This is **Jensen's inequality**, and it is risk aversion in one line. The sure amount that gives the same utility as the gamble is its **certainty equivalent**; the gap between the average and the certainty equivalent is the most you would pay to get rid of the risk.

**Why insurance exists.** Suppose you have ₹1,00,000, there is a 5% chance of losing ₹60,000, and your utility is $\ln W$. The expected loss is ₹3,000. Without insurance your expected utility is $0.95\ln 100000 + 0.05 \ln 40000 = \ln 100000 + 0.05 \ln 0.4$, so the certainty equivalent is

$$100000 \times 0.4^{0.05} \approx 95522 \text{ rupees}.$$

So you would pay up to $100000 - 95522 = ₹4{,}478$ for full cover against an expected loss of ₹3,000. The insurer, large and diversified (section 4), is almost indifferent to risk and is happy with any premium above ₹3,000 plus its costs. Any premium between those two numbers leaves **both** sides better off. Insurance is not a trick played on the customer; it is a trade.

Lotteries are harder for this theory: a concave utility rejects every fair or unfair gamble. Real buyers seem to overweight tiny probabilities, a pattern that Kahneman and Tversky's prospect theory (1979) builds in [Unverified: date from memory]. Risk aversion explains insurance; lottery buying needs a taste for the dream, or a misreading of tiny odds.

**The Kelly bet.** Back to the ×1.5 or ×0.6 game, which has a real edge but ruins anyone who stakes everything. Suppose instead you stake a fraction $f$ of your money each round. Heads multiplies your wealth by $1 + 0.5f$; tails by $1 - 0.4f$. Over many rounds you see about equal numbers of each, so the typical growth per round is the geometric mean of the two factors. Taking logs, the growth rate is

$$g(f) = \tfrac12 \ln(1 + 0.5f) + \tfrac12 \ln(1 - 0.4f).$$

Read it as: the average of the logs of the two factors. This is exactly the expected log of wealth, so log utility appears here not as a matter of taste but as the arithmetic of compounding. Set the derivative to zero:

$$\frac{0.25}{1 + 0.5f} = \frac{0.2}{1 - 0.4f} \quad\Longrightarrow\quad 0.25 - 0.1f = 0.2 + 0.1f \quad\Longrightarrow\quad f = \tfrac14.$$

At $f = \frac14$, $g = \tfrac12\ln 1.125 + \tfrac12 \ln 0.9 \approx +0.0062$: a steady gain of about 0.62% per round. Staking everything gives $g(1) = \tfrac12 \ln 0.9 \approx -0.053$, a 5% loss per round. Betting a quarter turns a ruinous game into a slow, sure winner.

For an even-money bet that you win with probability $p$, the same calculation with $g = p\ln(1+f) + (1-p)\ln(1-f)$ gives $p(1-f) = (1-p)(1+f)$, so

$$f^{*} = 2p - 1.$$

This is the **Kelly criterion** (J. L. Kelly, 1956 [Unverified: date from memory]). With a 60% chance of winning, stake 20% of your money; with 50% or less, stake nothing. Practitioners often stake less than this, because their estimate of $p$ is uncertain and betting too much hurts far more than betting too little [Unverified].

:::qc lvl=4
q: You can repeatedly make an even-money bet that you win with probability 0.6. By the Kelly rule, what fraction of your money should you stake each time?
options: ["6%", "20%", "60%", "100%"]
answer: 1
right: Right. f* = 2p − 1 = 2(0.6) − 1 = 0.2, so 20% of your money each time.
wrong: For an even-money bet the Kelly fraction is 2p − 1. Put p = 0.6.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Expected value is the long-run average per play: each outcome times its probability, added up. It need not be a possible outcome. {lvl=1}
2. The fair price of a game is its expected payout; anything charged above it is the house edge. {lvl=1}
3. Insurance and lottery tickets both lose money on average for the buyer; insurance makes sense against losses you could not absorb, a lottery only with money you won't miss. {lvl=1}
4. Variance $E[X^2] - \mu^2$ measures spread; averaging $n$ independent copies shrinks the standard deviation by $\sqrt n$, which is why an insurer is safe while each customer is not. {lvl=2}
5. Expected value misleads when an outcome can ruin you, when you play once for big stakes, and when stakes compound; then judge the typical path. {lvl=2}
6. Linearity $E[X+Y] = E[X] + E[Y]$ always holds; write any count as a sum of indicators and add their probabilities. {lvl=3}
7. The expected wait for an event of probability $p$ per try is $1/p$; collecting all $n$ items takes $nH_n \approx n\ln n$ tries. {lvl=3}
8. Concave utility explains risk aversion and insurance (Jensen); maximising expected log wealth gives the Kelly fraction, $2p - 1$ for an even-money bet. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Count the stake as a loss: "win ₹30 or lose your ₹10" means gains of +30 and −10, not +30 and 0. {lvl=1}
- An "up to" prize is the best case, not the average. Always weight every prize by its chance. {lvl=1}
- "Each of three dice has a 1/6 chance" gives half a match on average, not a 1/2 chance of at least one match (that is 91/216). {lvl=1}
- Same expected value does not mean same risk; compare standard deviations too. {lvl=2}
- Averages of multiplying factors mislead: for repeated reinvestment, multiply the factors along a typical path. {lvl=2}
- Linearity needs no independence, but $E[XY] = E[X]E[Y]$ does. {lvl=3}
- Dice and coins have no memory: after many misses the expected further wait is unchanged. {lvl=3}
- An infinite expected value (St Petersburg) is a warning that the model ignores finite banks or diminishing value of money, not an instruction to pay any price. {lvl=4}
:::
