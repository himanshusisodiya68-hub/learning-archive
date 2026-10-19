---
title: Offers and negotiation
summary: An offer is more than one number. Learn to read base, bonus and shares, compare offers fairly, negotiate politely and choose for growth.
ncert: []
up_to: SDE-3
builds_on: [What SDE-1, SDE-2 and SDE-3 are judged on, Compound interest, EMIs and inflation]
notes_prompt: Explain to a friend why an offer with a bigger first-year number may be worth less than one with a smaller number, using shares and vesting as the example.
margin:
  - kind: history
    title: Why shares
    text: 'Companies add shares to pay so that employees share in the growth of the company and have a reason to stay. Listed companies use restricted stock units (RSUs); startups often use stock options. [Inference: a general description]'
  - kind: tip
    title: Ask, politely
    text: 'Most recruiters expect a polite counter-question. Asking "is there flexibility on this?" rarely costs you the offer when it is asked kindly and with reasons. [Inference]'
  - kind: olympiad
    title: Numbers are invented here
    text: 'Every figure in this lesson is made up to show the arithmetic. Real pay depends on company, city, level and year; check current data from several sources. [Unverified]'
books:
  - { title: "H. Cohen, Negotiating at Work (or similar negotiation guides)", ref: "general negotiation principles [Unverified: title and details]" }
  - { title: "R. Fisher and W. Ury, Getting to Yes", ref: "interests versus positions; the idea of a better alternative [Unverified: chapter numbers]" }
cards:
  - { front: "What parts make up total compensation?", back: "Base salary, bonus, equity (such as RSUs), one-time joining or relocation payments, and benefits. Compare the yearly total, not just base." }
  - { front: "What is a vesting cliff?", back: "A waiting period (often one year) before any shares become yours. Leave before it and you get none; at the cliff, a block (often a quarter) vests at once." }
  - { front: "What does 'vesting' mean?", back: "Shares are granted up front but become yours gradually over time, often four years, so that people stay." }
  - { front: "What is your best tool in a negotiation?", back: "A real alternative: a competing offer or a role you are happy to keep. It lets you ask for more without needing the deal." }
  - { front: "How should you ask for more?", back: "Be warm, give a reason (the market, your skills, another offer), name a specific number or item, and stay open to other things such as joining bonus, level or start date." }
  - { front: "What should you weigh besides pay?", back: "Growth: the problems you will own, the people you will learn from, the level, and where this job leaves you in three years." }
core:
  idea: 'Compare offers by the yearly total you can expect (base plus bonus plus the shares that actually vest), adjusted for risk, and then by what you will learn. Negotiate politely with a reason and a real alternative.'
  formulas:
    - tex: '\text{TC}_{\text{year}} = \text{base} + \text{bonus} + \text{vested equity} + \text{one-offs}'
      label: 'Total compensation for one year'
    - tex: '\text{vested} = \text{grant} \times \dfrac{\text{months worked}}{\text{total months}} \quad (\text{after the cliff})'
      label: 'Shares you own after a given time with even monthly vesting'
  conditions:
    - 'Vesting terms (cliff, schedule, what happens if you leave) are written in the offer letter or grant documents, so check them there'
    - 'Share value is a forecast: a listed share can fall, and startup options may end up worthless'
    - 'You compare like with like: the same level, the same city, the same year, and after tax where you can'
  sign: 'The commonest mistake is to compare only the base salary, or to count all four years of shares as if they were paid in year one.'
outcomes:
  - 'Read an offer and name each part of the pay'
  - 'Explain vesting and the cliff, and compute what has vested at a given time'
  - 'Compare two offers on yearly total, with a risk adjustment'
  - 'Negotiate politely with a reason and a competing offer'
  - 'Choose between offers by growth as well as pay'
opener:
  story: |
    Two friends, Asha and Dev, get offers in the same week. Asha's says a base of 20 in some currency unit, and Dev's says 26. Dev smiles. Asha does not argue. But Asha's offer also lists 40 units of company shares over four years and a 10 percent bonus, and Dev's has neither.

    A year later the shares of Asha's company have doubled, and Dev's company has had a layoff round. Or the other way round: Asha's shares halved, and Dev's job turned out to be dull and went nowhere. Which of them chose well?

    The honest answer is: it depends on how you read the offer, how much risk you can bear, and what you wanted to learn. This lesson gives you the tools to read an offer instead of just a headline number.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two stacked bars comparing total pay: one made of base, bonus and shares, the other of base only"><g style="stroke:var(--ink);stroke-width:1.5"><rect x="70" y="150" width="70" height="60" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface))"/><rect x="70" y="138" width="70" height="12" style="fill:color-mix(in srgb,var(--c) 35%,var(--surface))"/><rect x="70" y="78" width="70" height="60" style="fill:none;stroke-dasharray:4 3"/><rect x="190" y="130" width="70" height="80" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface))"/></g><g style="font-size:10px;fill:var(--ink)"><text x="82" y="185">base</text><text x="82" y="147" style="font-size:9px">bonus</text><text x="78" y="112" style="font-size:9px;fill:var(--muted)">shares?</text><text x="212" y="175">base</text><text x="80" y="228">Offer A</text><text x="200" y="228">Offer B</text></g><text x="50" y="40" style="font-size:11px;fill:var(--ink)">Which bar is taller depends on the dashed part</text></svg>'
life:
  - 'A shop that offers a lower price with a free service plan may cost less in total than a cheaper shop that charges for repairs, which is the same as comparing total pay, not one number.'
  - 'A loan with a low interest rate and a large processing fee has to be compared by its total cost, the same discipline as comparing offers.'
  - 'A mobile plan with a "free" phone and a two-year contract is vesting in disguise: you get the benefit only if you stay.'
  - 'Buying a house in instalments teaches that a value promised over years has to be discounted for time and risk.'
  - 'When a friend asks a shopkeeper for a discount politely, with a reason, they are using the same skill as in a salary conversation.'
models:
  - name: 'Total cost, not sticker price'
    text: 'Always add everything that changes your wealth or your time over the whole period. This applies to phones, loans, cars and jobs alike.'
  - name: 'Your best alternative sets your power'
    text: 'In any negotiation the person with a good alternative can afford to say no, and so can ask for more. Build alternatives before you need them: other offers, savings, skills. [Inference: the central idea of many negotiation books]'
  - name: 'Pay for growth now, earn it back later'
    text: 'Like a student loan or a degree, a smaller salary at a place where you learn faster can earn more over ten years. Judge the path, not the first step.'
links:
  - leaf: 'mat/compound-interest-and-emis'
    name: 'Compound interest, EMIs and inflation'
    same: 'Both ask what a future amount is worth today, and how time changes value.'
    differs: 'Loans have a contract you can compute exactly; shares have a price you can only forecast.'
  - leaf: 'mat/expected-value'
    name: 'Expected value and decisions'
    same: 'Valuing shares means weighing outcomes by their chances, as expected value does.'
    differs: 'You only get to live one outcome, so risk tolerance matters as well as the average.'
  - leaf: 'cs/iv-levels'
    name: 'What SDE-1, SDE-2 and SDE-3 are judged on'
    same: 'The level you are hired at sets the pay band and the scope you will own for years.'
    differs: 'A higher level at the same pay can be worth more than the same level at a higher pay, because the next promotion starts from it.'
next:
  q: 'You have prepared for patterns, designs, stories, levels and offers. But all of it rests on one skill that never stops mattering: facing a problem you have never seen and working through it step by step. What does that method look like, and how do you keep practising it?'
  leaf: 'cs/problem-solving-method'
  name: 'A method for any problem'
symbols:
  - s: 'base'
    means: 'fixed salary paid every month, before tax'
  - s: 'bonus'
    means: 'extra pay, often a percentage of base, paid yearly if targets are met'
  - s: 'RSU'
    means: 'restricted stock unit: a promise of shares that you receive as they vest'
  - s: 'vesting'
    means: 'the gradual process by which granted shares become yours'
  - s: 'cliff'
    means: 'the waiting period before any shares vest'
  - s: '\text{TC}'
    means: 'total compensation: all pay for a year added together, in your currency'
---

:::hook
q: An offer lists a base of 20, a bonus of 2 and shares worth 40 over four years with a one-year cliff. If you resign after 10 months, how much of the shares do you own?
options: ["A quarter, 10", "10 months' worth, about 8", "None"]
answer: 2
right: Right. With a one-year cliff nothing vests before the first anniversary. Always read the cliff, because leaving a month early can cost you a quarter of the grant. (Terms differ between companies; check yours. [Inference])
wrong: Shares usually vest only after the cliff. Before it, the count is zero, however many months you have worked.
:::

## What is in an offer {lvl=1 id=s-parts label="Foundations"}

An offer letter has several parts, and only the first is certain.

- **Base salary.** Fixed, paid every month. The only part you can plan rent around.
- **Bonus.** A yearly payment, usually a percentage of base. It may be fixed or depend on performance and company results.
- **Equity.** A promise of company shares. In a listed company, usually **RSUs**; in a startup, often **stock options**, which let you buy shares at a set price later.
- **One-offs.** A joining bonus, relocation help, sometimes repaid if you leave early.
- **Benefits.** Health insurance, leave, learning budget, remote work. Hard to price, but real.

Add what you will actually receive in a year and you have **total compensation**, or TC. This is the number to compare, with a note on how uncertain each part is.

## Vesting and the cliff {lvl=1 id=s-vest label="Foundations"}

Shares are usually **granted** on day one but become yours slowly, to give you a reason to stay. That slow handover is **vesting**.

A common shape (not universal) is four years with a one-year **cliff**: nothing vests for twelve months; then a quarter vests at once; after that the rest vests in small steps (monthly or quarterly) until the fourth anniversary. Leave in month 11 and you own nothing; leave in month 13 and you own a little over a quarter.

:::figure caption="A four-year grant with a one-year cliff: nothing until month 12, then a jump to a quarter, then a steady climb."
<svg viewBox="0 0 320 170" role="img" aria-label="A step line: zero until month 12, jump to 25 percent, then a steady rise to 100 percent at month 48"><g style="stroke:var(--ink);stroke-width:1.5;fill:none"><line x1="40" y1="140" x2="300" y2="140"/><line x1="40" y1="140" x2="40" y2="20"/></g><polyline points="40,140 100,140 100,110 280,30" style="fill:none;stroke:var(--mat);stroke-width:2.5"/><g style="fill:var(--muted)"><text x="92" y="153" style="font-size:9px">12</text><text x="274" y="153" style="font-size:9px">48</text><text x="130" y="168" style="font-size:9px">months worked</text><text x="6" y="112" style="font-size:9px">25%</text><text x="6" y="34" style="font-size:9px">100%</text><text x="108" y="130" style="font-size:9px">cliff: a quarter at once</text></g></svg>
:::

```python
def vested(grant, months, total=48, cliff=12):
    if months < cliff:
        return 0
    return grant * min(months, total) / total
print(vested(48, 10), vested(48, 13), vested(48, 30))
# 0, 13.0, 30.0
```

Read it as: before the cliff, zero; after it, the share of the grant equal to the months worked out of 48.

:::qc lvl=1
q: A grant of 48 units vests monthly over 48 months with a 12-month cliff. How many units have vested after 24 months?
options: ["12", "24", "0"]
answer: 1
right: Right. 24 of 48 months is half, so 24 units. The cliff only delays the start; it does not change the total.
wrong: By month 24 the cliff has passed. Half the schedule has run, so half the grant has vested.
:::

## Comparing two offers {lvl=2 id=s-compare label="SDE-1"}

Put each offer's year-by-year pay in a small table. With invented numbers (units are arbitrary):

| | Offer A | Offer B |
|---|---|---|
| Base | 20 | 26 |
| Bonus | 10 percent of base = 2 | 5 percent of base = 1.3 |
| Shares | 40 over 4 years, 10 per year | none |
| Year-one TC | 20 + 2 + 10 = 32 (if the shares keep their value) | 26 + 1.3 = 27.3 |

A looks better by 4.7. But the shares are not cash. If A's share price halves, the yearly equity falls to 5 and A's TC is 27, a little below B's. If it doubles, the equity is 20 and A is 42. B is steadier; A is a bet with a good expected return.

This is a place for **expected value** and for your own situation. If you have a loan to repay and no savings, steady cash is worth more to you than the same average in shares. If you have savings, you can afford more risk. [Inference]

Also note: if a listed company's shares can be sold when they vest, the equity is close to cash after vesting. If a startup's options cannot be sold, they may be worth nothing, so many people count them as a lottery ticket, not income. [Inference: a common view]

:::qc lvl=2
q: An offer includes startup options that cannot be sold until the company is bought or listed. How should you treat them in a comparison?
options: ["As cash equal to the headline value", "As uncertain, probably worth less, possibly nothing", "Ignore benefits entirely"]
answer: 1
right: Right. Count the cash as cash, and treat unsellable options as a possible bonus rather than income you can plan around.
wrong: A headline value on paper is not money in hand. Weigh its chance of paying out.
:::

## Negotiation basics {lvl=3 id=s-negotiate label="SDE-2"}

Negotiating is a normal, polite conversation, not a fight. A calm approach, in order:

1. **Do your research.** Look at pay ranges for your level and city from several sources (public data, peers, recruiters). Treat any single figure as rough. [Unverified]
2. **Let them name a number first when you can.** When asked about expectations early, you can say "I would like to understand the level and scope first; I am confident we will find a fair number." Say it politely.
3. **Respond to the offer with thanks and enthusiasm,** then ask for time: "Thank you, I am excited about this. May I have until Friday to review the details?"
4. **Ask with a reason and a number.** "Based on the scope and the market for this level, I was hoping for a base nearer 24. Is there flexibility?" A specific number is easier to say yes to than a vague "more".
5. **Consider the whole package.** If base is fixed, ask about joining bonus, shares, level, review date, start date or a learning budget.
6. **Get it in writing** before you resign from your current job.

A few points of etiquette: be honest (never invent an offer), keep a warm tone, do not give ultimatums, and thank everyone you speak to. If you say you will accept at a number, mean it. A reputation for integrity travels in small industries.

## Competing offers {lvl=3 id=s-compete label="SDE-2"}

A real alternative is your strongest point. If you hold another offer, you can say, truthfully: "I have another offer with a base of 26 and I would prefer to join you. Can you come closer?" You do not need to show the letter, and you should not exaggerate it.

Timing helps: recruiters often move faster when deadlines align. Ask for a short extension on one offer so that you can hear back from another, and tell the second company honestly that you hold an offer with a deadline. [Inference: common practice]

Be careful with two traps. One is bluffing: if you claim an offer you do not hold, you may be asked to prove it, and the damage lasts. The other is using an offer you would not take as a lever: you may end up committed to a job you do not want.

:::qc lvl=3
q: You hold a real offer with a base of 26 and prefer a different company that offered 22. What is the best approach?
options: ["Say the other company offered 40", "Say you hold another offer, name its base, say you prefer them and ask whether they can come closer", "Accept the 22 immediately"]
answer: 1
right: Right. Truthful, specific, warm and clear about your preference. Invented numbers risk your credibility; accepting at once leaves the question unasked.
wrong: Exaggeration can be checked and costs trust. Silence leaves money and options on the table. A polite true counter is the standard approach.
:::

## Choosing by growth {lvl=4 id=s-growth label="SDE-3"}

Pay matters, but for most careers the larger effect comes from what you learn and the level you reach, because those set your pay for the next ten years. When two offers are close in money, ask:

- **Scope.** What will I own in the first year, and is it larger than what I own now?
- **People.** Who will I learn from, and who will review my work?
- **Level.** What level is the offer, and what do I need to show for the next one?
- **Trajectory.** Where do people who joined this team two years ago stand now? Ask them.
- **Stability and risk.** Can I afford the risk of this company failing, and does the shares part make sense for my savings?
- **Life.** City, hours, manager, and the energy I will have outside work.

A simple discipline is to write the three-year picture for each offer: what I will be able to do then that I cannot do now, and what it will have paid in total. A lower-paying role that makes you SDE-3 sooner can be worth far more than a higher-paying role that stalls you at SDE-2.

Finally, think of a job as an investment of time with a payoff in skills, relationships and money, and keep doing the work of the previous lesson: stay interview-ready, keep your story bank updated, and practise problem-solving even after you land, because your best alternative is built over years. [Inference: opinion]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. An offer has base, bonus, equity, one-offs and benefits; compare total compensation for a year. {lvl=1}
2. Vesting makes shares yours gradually; a cliff means nothing vests until it passes. {lvl=1}
3. Treat shares as uncertain; count listed shares near cash after vesting and unsellable options as a possible bonus. {lvl=2}
4. Negotiate politely, with a reason, a number and thanks; ask about the whole package. {lvl=3}
5. A real alternative is your best tool; never bluff. {lvl=3}
6. Weigh growth (scope, people, level, trajectory) alongside pay. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Do not compare base salaries alone; add bonus, vested equity and one-offs. {lvl=1}
- Do not count all four years of shares in year one. {lvl=1}
- Do not resign before the offer is in writing and its vesting terms are read. {lvl=2}
- Do not accept on the call; thank them and take a day to review. {lvl=2}
- Do not bluff about other offers; it can be checked and it costs trust. {lvl=3}
- Do not choose only the highest number; a job that stalls your growth is expensive over ten years. {lvl=4}
- Real pay figures change quickly and vary by source, so treat any quoted range as a rough guide. {lvl=3}
:::
