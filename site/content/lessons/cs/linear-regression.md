---
title: Linear regression and gradient descent
summary: How a program draws the best straight line through flat prices, and finds it by taking small steps downhill instead of trying every line.
ncert: []
up_to: SDE-2
builds_on: [What it means for a machine to learn, Straight lines, Derivatives]
notes_prompt: Explain to a friend how a program finds the best line through some dots by walking downhill, and what goes wrong if the steps are too big.
margin:
  - kind: history
    title: History
    text: 'Legendre published the method of least squares in 1805 and Gauss said he had used it earlier, to find the lost asteroid Ceres from a few observations. [Unverified, from memory]'
  - kind: tip
    title: Interview favourite
    text: '"What happens if the learning rate is too high?" The loss bounces and then explodes. Too low: it crawls. Scaling features to similar sizes makes one learning rate work for all of them.'
  - kind: olympiad
    title: Stretch idea
    text: 'For one weight, gradient descent is stable only if the learning rate is below 2 divided by the curvature of the loss. Steeper bowl, smaller steps.'
books:
  - { title: "G. Strang, Introduction to Linear Algebra", ref: "Least squares and projections section [Unverified]" }
  - { title: "A. Géron, Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow", ref: "Ch. 4 Training Models: linear regression, gradient descent [Unverified]" }
cards:
  - { front: "What does linear regression do?", back: "Finds the straight line (slope and intercept) that predicts a number from a feature, by making the average squared error as small as possible." }
  - { front: "Why square the errors?", back: "So that over-predictions and under-predictions do not cancel, big misses cost much more than small ones, and the loss is a smooth bowl that calculus can handle." }
  - { front: "What is gradient descent in one sentence?", back: "Repeatedly nudge the parameters a small step in the direction that lowers the loss fastest, like walking downhill in fog by feeling the slope under your feet." }
  - { front: "What is the learning rate?", back: "The size of each downhill step. Too small and training crawls; too large and it overshoots, bounces and can blow up." }
  - { front: "What is the gradient?", back: "The slope of the loss with respect to each parameter. For one parameter it is just the derivative; the update is parameter minus learning rate times gradient." }
  - { front: "Why scale the features before gradient descent?", back: "If one feature is in thousands and another in tenths, the loss bowl is a long narrow valley and one learning rate cannot suit both." }
core:
  idea: 'Linear regression predicts a number as a straight-line function of a feature, and chooses the slope and intercept that minimise the **average squared error**. Gradient descent finds them by repeatedly stepping against the slope of the loss.'
  formulas:
    - tex: '\hat{y} = w x + b'
      label: 'The model: slope w, intercept b'
    - tex: 'L(w,b) = \dfrac{1}{n}\sum_{i=1}^{n}(w x_i + b - y_i)^2'
      label: 'Mean squared error'
    - tex: 'w \leftarrow w - \eta\,\dfrac{\partial L}{\partial w}'
      label: 'One downhill step (same for b)'
  conditions:
    - 'The true relationship is roughly a straight line over the range of the data'
    - 'Errors are roughly random and not dominated by a few wild outliers'
    - 'Predictions are made inside the range of the training data, not far outside it'
  sign: 'Step against the gradient (minus sign), never along it. And a learning rate that is too large makes the loss grow instead of shrink.'
outcomes:
  - 'Predict a number from a fitted line and read the slope and intercept in real units'
  - 'Compute the mean squared error of a line on a few points'
  - 'Explain gradient descent as walking downhill, and perform one step by hand'
  - 'Diagnose a learning rate that is too small or too large'
  - 'Say when the exact formula is better than gradient descent, and when a line is the wrong model'
opener:
  story: |
    Your cousin is buying a flat. The broker glances at the building and says, "75 square metres here goes for about ₹60 lakh." Ask him how he knows and he shrugs: "I've seen a lot of flats." What he has really done is draw a line in his head through every flat he has seen, area along the bottom and price up the side.

    Let's make a computer do the same. We give it six flats from one neighbourhood: their areas and their prices. It must come back with a rule, "price = something × area + something", that predicts the price of a flat it has never seen.

    There are infinitely many lines. A steep one, a flat one, a high one, a low one. The program cannot try them all. So how does it find the best one, and how does it know what "best" means?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Six flats plotted as dots of price against area with a best straight line through them"><line x1="20" y1="150" x2="300" y2="150" style="stroke:var(--ink);stroke-width:1.5"/><line x1="20" y1="150" x2="20" y2="20" style="stroke:var(--ink);stroke-width:1.5"/><line x1="20" y1="111" x2="292" y2="31" style="stroke:var(--c);stroke-width:2.5"/><g style="fill:var(--c)"><circle cx="52" cy="102" r="6"/><circle cx="132" cy="86" r="6"/><circle cx="148" cy="84" r="6"/><circle cx="196" cy="68" r="6"/><circle cx="244" cy="56" r="6"/><circle cx="276" cy="34" r="6"/></g><g style="stroke:var(--bad);stroke-width:1.5;stroke-dasharray:3 2"><line x1="52" y1="102" x2="52" y2="98"/><line x1="132" y1="86" x2="132" y2="82"/><line x1="276" y1="34" x2="276" y2="38"/></g><text x="220" y="170" style="font-size:11px;fill:var(--muted)">area of flat (m²)</text><text x="26" y="16" style="font-size:11px;fill:var(--muted)">price (₹ lakh)</text><text x="38" y="196" style="font-size:11px;fill:var(--ink)">New flat: read the price off the line.</text><text x="38" y="214" style="font-size:10px;fill:var(--muted)">Best line = smallest gaps (dashed) overall.</text></svg>'
life:
  - 'Property portals estimate a flat''s price from area, location and age, and the simplest version of that estimate is a regression line.'
  - 'A taxi app predicts the fare from distance, and a delivery app predicts time from distance.'
  - 'Economists draw lines through scatter plots of income against spending, or rainfall against crop yield.'
  - 'A cricket analyst fits a line of runs against balls faced to see how much faster a batter scores as the innings goes on.'
  - 'Every time a graph in a school lab was "line of best fit" through experiment points, that was regression done by eye.'
models:
  - name: 'Walk downhill in the fog'
    text: 'You cannot see the valley, but you can feel the slope under your feet; step the way it falls. Much of optimisation, and many life decisions, work like this: small steps that reduce today''s problem, repeated.'
  - name: 'Squares punish big misses'
    text: 'Being off by 10 costs 100, four times the cost of being off by 5 (25), not twice. Squared penalties make a system avoid catastrophic errors, which is why engineers and insurers like them.'
  - name: 'Do not extrapolate far'
    text: 'A line fitted to flats from 40 to 110 m² says nothing reliable about a 400 m² villa. A trend is trustworthy inside the range you have seen, and a guess outside it.'
links:
  - leaf: 'mat/straight-lines'
    name: 'Straight lines'
    same: 'The model is exactly the line y = mx + c of school maths: slope times x plus intercept.'
    differs: 'In school you are given two points and find the line; here the points do not lie on one line, so we choose the line that misses them least.'
  - leaf: 'mat/derivatives'
    name: 'Derivatives'
    same: 'The gradient is a derivative: the slope of the loss as one parameter changes. Zero slope means the bottom of the bowl.'
    differs: 'The loss has several parameters, so we take the derivative with respect to each one in turn (a partial derivative).'
  - leaf: 'mat/applications-of-derivatives'
    name: 'Applications of derivatives'
    same: 'Finding the minimum of the loss is the same job as finding where a function is smallest by setting its slope to zero.'
    differs: 'For huge models there is no formula for where the slope is zero, so we creep towards it with repeated steps.'
next:
  q: 'A line predicts a number. But many questions are yes-or-no: is this payment fraud, is this email spam? If we just draw a line through zeros and ones the answers go below 0 and above 1. What should we draw instead?'
  leaf: 'cs/classification'
  name: 'Classification and evaluation'
symbols:
  - s: 'x'
    means: 'the feature: area of the flat (hundreds of square metres in the code)'
  - s: 'y'
    means: 'the true answer: price of the flat (₹ lakh)'
  - s: '\hat{y}'
    means: 'the predicted price (₹ lakh)'
  - s: 'w'
    means: 'weight, the slope: extra price per extra unit of area (₹ lakh per 100 m²)'
  - s: 'b'
    means: 'bias, the intercept: the price the line gives at zero area (₹ lakh)'
  - s: 'L'
    means: 'the loss: mean squared error (₹ lakh squared)'
  - s: '\eta'
    means: 'learning rate, the size of each downhill step (no unit)'
  - s: '\partial L/\partial w'
    means: 'gradient: how fast the loss rises as w rises, other things held fixed'
---

:::hook
q: Six flats are used to fit a line, and it comes out at about ₹79,000 more for every extra square metre, plus a small fixed amount. What would you expect it to predict for a 100 m² flat?
options: ["About ₹79 lakh", "About ₹100 lakh", "About ₹60 lakh"]
answer: 0
right: Right. 100 m² × ₹0.79 lakh per m² is about ₹79 lakh (the fitted line gives 79.3). The slope has real units: rupees per square metre. (These six flats are invented for teaching, not real market data.)
wrong: Multiply the extra price per square metre by the area. Each square metre adds about 0.79 lakh, so 100 of them add about 79 lakh.
:::

## Drawing a line through dots {lvl=1 id=s-line label="Foundations"}

Here are our six flats. Area in square metres, price in lakh rupees (invented numbers for teaching):

| Area (m²) | 40 | 55 | 60 | 75 | 90 | 110 |
|---|---|---|---|---|---|---|
| Price (₹ lakh) | 32 | 45 | 47 | 60 | 70 | 88 |

A straight line needs two numbers. The **slope** says how much the price rises for each extra unit of area. The **intercept** says where the line starts. Call the slope $w$ (for "weight") and the intercept $b$ (for "bias"). The prediction for area $x$ is

$$\hat{y} = w x + b$$

Read it as: "multiply the area by the slope and add the intercept". The little hat on $\hat{y}$ means "predicted", to tell it apart from the real price $y$.

Training means choosing $w$ and $b$. Fitted to our six flats, the best line has $w \approx 0.787$ lakh per m² and $b \approx 0.59$ lakh. So a 80 m² flat is predicted at $0.787 \times 80 + 0.59 \approx 63.6$ lakh.

:::qc lvl=1
q: A fitted line says price (lakh) = 0.8 × area (m²) + 1. What does it predict for 50 m²?
options: ["41 lakh", "40 lakh", "51 lakh"]
answer: 0
right: Right. 0.8 × 50 = 40, plus 1 is 41.
wrong: Multiply first, then add the intercept: 0.8 × 50 = 40, then + 1.
:::

## What counts as a good line {lvl=1 id=s-error label="Foundations"}

Every flat's dot sits a little above or below the line. That gap is the **error**: predicted price minus real price. A good line has small gaps overall. But we need a single score, so how do we combine the gaps?

Adding them fails, because a flat that is 5 lakh too high and another 5 lakh too low would cancel and look perfect. Instead **square** each gap, then average. Squares are never negative, and a gap of 10 counts for 100 while a gap of 5 counts for 25, so one big miss hurts a lot. This is the **mean squared error**:

$$L(w,b) = \frac{1}{n}\sum_{i=1}^{n}\left(w x_i + b - y_i\right)^2$$

Read it as: "for each of the $n$ flats, take predicted minus real, square it, add them all up and divide by $n$". Training is the search for the $w$ and $b$ that make $L$ smallest.

Quick example: with the line $\hat{y} = 0.8x$, the flats of 40, 60 and 90 m² (prices 32, 47, 70) get predictions 32, 48, 72. The errors are 0, 1, 2; the squares 0, 1, 4; the mean $5/3 \approx 1.67$.

:::qc lvl=1
q: Two errors are +5 and -5. What is wrong with simply adding the errors as the score?
options: ["They cancel to zero, hiding the mistakes", "The total is always negative", "It makes big errors count too much"]
answer: 0
right: Right. Squaring (or taking absolute values) stops positive and negative misses from cancelling.
wrong: Add +5 and -5. What do you get, and would a score of 0 tell you the line is good?
:::

## Gradient descent: walking downhill {lvl=2 id=s-gd label="SDE-1"}

Picture the loss as a landscape. Each point on the ground is a choice of $(w, b)$, and the height is the loss there. For a squared-error loss, this landscape is a smooth **bowl**. The best line is the bottom of the bowl. We are standing somewhere on the rim, in fog, and cannot see the bottom. But we can feel which way the ground tilts under our feet, and we can step the other way. Repeat, and we walk down.

The tilt of the ground is a **slope**, and the slope of the loss with respect to $w$ is its derivative. Writing it for the squared error (the chain rule gives the 2):

$$\frac{\partial L}{\partial w} = \frac{2}{n}\sum_i \left(w x_i + b - y_i\right)x_i,\qquad \frac{\partial L}{\partial b} = \frac{2}{n}\sum_i \left(w x_i + b - y_i\right)$$

Read them as: "how fast the loss rises if I increase $w$ (or $b$) a tiny bit". The round-d symbol $\partial$ just means "the others held still". Then the step:

$$w \leftarrow w - \eta \frac{\partial L}{\partial w}$$

Read it as: "new $w$ is old $w$ minus a small step size $\eta$ times the slope". If the slope is positive (loss rises with $w$) we decrease $w$; if negative, we increase it. The minus sign always points downhill. $\eta$ is the **learning rate**.

:::figure caption="Gradient descent on a one-parameter bowl: each step is smaller than the last, because the slope flattens near the bottom."
<svg viewBox="0 0 320 170" role="img" aria-label="A bowl-shaped loss curve with four points stepping down towards the bottom"><path d="M40 20 Q160 220 280 20" class="pen" style="fill:none;stroke:var(--mat);stroke-width:2.5"/><g style="fill:var(--ink)"><circle cx="64" cy="56" r="5"/><circle cx="100" cy="95" r="5"/><circle cx="136" cy="116" r="5"/><circle cx="153" cy="120" r="5"/></g><g style="stroke:var(--muted);stroke-width:1.2;stroke-dasharray:3 2;fill:none"><path d="M70 60 L94 92"/><path d="M106 99 L130 113"/><path d="M142 118 L148 119"/></g><line x1="20" y1="150" x2="300" y2="150" class="axis"/><text x="150" y="166" style="font-size:10px;fill:var(--muted)">w</text><text x="24" y="16" style="font-size:10px;fill:var(--muted)">loss</text><text x="196" y="130" style="font-size:11px;fill:var(--ink)">bottom = best w</text></svg>
:::

Here is the whole thing in code. Areas are scaled to hundreds of m² so numbers stay small (a point we return to):

```python
import numpy as np
area  = np.array([40, 55, 60, 75, 90, 110]) / 100   # hundreds of m²
price = np.array([32, 45, 47, 60, 70, 88.])         # ₹ lakh
def fit(lr, steps):
    w, b = 0.0, 0.0                                  # start anywhere
    for _ in range(steps):
        err = w * area + b - price
        w -= lr * 2 * np.mean(err * area)            # slope of loss in w
        b -= lr * 2 * np.mean(err)                   # slope of loss in b
    return w, b, np.mean((w * area + b - price) ** 2)
print(fit(0.1, 2000))     # (78.71, 0.59, 0.80)
```

The result: $w \approx 78.7$ lakh per 100 m² (that is 0.787 lakh per m²), $b \approx 0.59$, and the mean squared error has dropped from 3,584 (the line $\hat{y}=0$) to 0.80.

:::qc lvl=2
q: At some w the slope of the loss is +6. With learning rate 0.1, what does one step do to w?
options: ["Decreases w by 0.6", "Increases w by 0.6", "Leaves w alone"]
answer: 0
right: Right. The update is w minus 0.1 × 6 = w − 0.6. A positive slope means the loss rises as w rises, so we move w down.
wrong: The rule is new w = old w − learning rate × slope. Work out 0.1 × 6 and apply the minus.
:::

## The learning rate {lvl=2 id=s-lr label="SDE-1"}

The learning rate $\eta$ decides how big each step is, and there is a Goldilocks zone. Using the same `fit` function on the flat data:

| Learning rate | Steps | Result |
|---|---|---|
| 0.001 (too small) | 2000 | Still crawling: loss about 106, line not yet fitted |
| 0.1 (good) | 2000 | Loss 0.80, the best line |
| 1.0 (too big) | 50 | Overshoots the bottom each time and **explodes** (loss around $10^{35}$) |

Too small wastes time; too big leaps across the bowl and lands higher on the other side, each jump bigger than the last. A practical habit: print the loss every few hundred steps. It should fall smoothly. If it rises, cut $\eta$ by ten.

**Why we scaled the area.** In square metres the feature runs 40 to 110, and its slope reacts violently to tiny changes, while the intercept hardly reacts at all. The bowl becomes a long thin valley, and no single learning rate suits both directions. Scaling features to similar sizes (for example dividing by 100, or subtracting the mean and dividing by the spread) turns it back into a round bowl.

:::qc lvl=2
q: During training the printed loss goes 10, 40, 160, 640. What do you do first?
options: ["Raise the learning rate", "Lower the learning rate", "Train for more steps"]
answer: 1
right: Right. A loss that grows each step means the steps overshoot. Cut the learning rate (say, by ten) and try again.
wrong: The loss is going up, which means each step lands further up the other side of the bowl. Should the steps be larger or smaller?
:::

## Exact answer, many features, and limits {lvl=3 id=s-limits label="SDE-2"}

For a straight line there is no need to walk at all: setting both slopes to zero and solving gives the answer directly. For one feature, the best slope is how much $x$ and $y$ vary together divided by how much $x$ varies on its own. With many features (area, age, floor, distance to metro) it becomes the **normal equation**, solved by linear algebra:

```python
X = np.column_stack([area, np.ones(len(area))])     # a column of 1s for b
w, b = np.linalg.lstsq(X, price, rcond=None)[0]     # exact least squares
print(w, b)                                          # 78.71, 0.59
```

It gives the same numbers as the long walk. So why learn the walk? The exact method costs work that grows quickly with the number of features, and it exists only for simple models. Neural networks have no such formula, and gradient descent (usually in small random batches, called stochastic gradient descent) is how every one of them is trained. Linear regression is the clean place to learn it.

Limits to remember:

- **Outliers.** Squaring lets one absurd listing (a typo of ₹6 crore for a 60 m² flat) drag the whole line. Check the data, or use a loss that punishes big gaps less.
- **Extrapolation.** The line was fitted on 40 to 110 m². Asking about 400 m² uses the line outside the data; the answer (about 315 lakh) is a guess, since big flats follow other pricing.
- **Redundant features.** Giving the model area in m² and in square feet together means infinitely many equally good weight pairs; the exact formula breaks and gradient descent just lands on one of them.
- **Not a line.** If price curves upward with area, add a feature such as area squared, or choose a different model. A tell-tale sign is errors that are all positive in the middle and negative at the ends.
- **Overfitting returns.** With many features and few flats, hold out a test set (see the previous lesson) and consider regularisation.

:::qc lvl=3
q: You train a regression where one feature is in rupees (up to 50,00,000) and another is in years (up to 30). Gradient descent is erratic. What is the standard fix?
options: ["Scale both features to similar ranges", "Delete the years feature", "Use the test set to tune the learning rate"]
answer: 0
right: Right. Standardising features makes the loss landscape rounder, so one learning rate works for all weights.
wrong: Nothing is wrong with a feature just because its numbers are small. The trouble is the very different sizes; how can you bring them to a common scale?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A line has a slope and an intercept; regression chooses them so predictions match the data. {lvl=1}
2. The score is the mean squared error: square each gap so it cannot cancel and so big misses cost more. {lvl=1}
3. Gradient descent steps each parameter against the slope of the loss: new = old minus learning rate times slope. {lvl=2}
4. Too small a learning rate crawls, too large explodes; scale features so one rate fits all. {lvl=2}
5. For a line (and other simple models) an exact formula exists; gradient descent is the method that scales to neural networks. {lvl=3}
6. Distrust outliers and extrapolation, and always check on held-out data. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Minus sign: you step against the gradient. Stepping along it climbs the hill. {lvl=2}
- Watch the loss while training; a loss that rises means the learning rate is too high. {lvl=2}
- Scale features before gradient descent. {lvl=2}
- A fitted line is only trustworthy inside the range of the training data. {lvl=1}
- A small error on training flats says nothing about new ones until you test it. {lvl=3}
:::
