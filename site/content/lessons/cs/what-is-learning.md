---
title: What it means for a machine to learn
summary: How a spam filter works out its own rules from examples, and why a program that memorises its examples can still fail on new ones.
ncert: []
up_to: SDE-2
builds_on: [Functions, Lists dictionaries and sets]
notes_prompt: Explain to a friend why a spam filter that scored 100% on the emails it was trained on can still be bad, and what you would do to find out.
margin:
  - kind: history
    title: History
    text: 'Arthur Samuel, an IBM researcher, wrote a checkers program in the 1950s that improved by playing itself, and is often credited with the phrase "machine learning". [Unverified, from memory]'
  - kind: tip
    title: Interview favourite
    text: '"Why did your model do great in testing and badly in production?" Answer in three parts: overfitting, leakage (test data seen during training) and drift (the world changed after training).'
  - kind: olympiad
    title: Stretch idea
    text: 'With 10 noisy points, a degree-9 curve can pass through every one exactly. Zero training error, yet a wild curve between the points. More freedom than data always invites memorising.'
books:
  - { title: "A. Géron, Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow", ref: "Ch. 1 The Machine Learning Landscape; Ch. 2 end-to-end project [Unverified]" }
  - { title: "T. Hastie, R. Tibshirani, J. Friedman, The Elements of Statistical Learning", ref: "Ch. 7 Model Assessment and Selection [Unverified]" }
cards:
  - { front: "What is the difference between a rule-based program and a learning program?", back: "A person writes the rules in the first; in the second the program finds its own settings (numbers) from labelled examples." }
  - { front: "What are features and labels?", back: "Features are the measurements the model sees about each example (such as the count of scary words); the label is the right answer we want it to predict (spam or not spam)." }
  - { front: "What is a loss?", back: "A single score for how wrong the model is on the training examples. Learning means changing the model's settings to make that score smaller." }
  - { front: "Why keep a test set aside?", back: "To measure the model on examples it has never seen. Training score shows how well it memorised; test score shows how well it learned." }
  - { front: "What is overfitting?", back: "Fitting the quirks and noise of the training examples so closely that the model does worse on new ones: training error low, test error high." }
  - { front: "Name two causes of a model that works in testing but fails in real use.", back: "Data leakage (test information slipped into training) and distribution shift (real inputs differ from the training data)." }
core:
  idea: 'Machine learning means choosing a model''s settings so that its mistakes on example data are as small as possible, then trusting it only as far as it does well on **new** examples it never trained on.'
  formulas:
    - tex: 'L = \dfrac{1}{n}\sum_{i=1}^{n} \text{mistake}(\hat{y}_i, y_i)'
      label: 'Loss: the average mistake over n training examples'
    - tex: '\text{test loss} \gg \text{train loss} \Rightarrow \text{overfitting}'
      label: 'The warning sign'
  conditions:
    - 'Examples are labelled correctly most of the time'
    - 'The new examples come from the same kind of world as the training ones'
    - 'The test examples were never used to choose or tune the model'
  sign: 'A low training loss proves nothing by itself: a lookup table of the training examples has zero training loss and no understanding.'
outcomes:
  - 'Explain the difference between writing rules and learning them from examples'
  - 'Name the features, label and loss in a small problem such as spam detection'
  - 'Split data into training and test sets and say why the split matters'
  - 'Recognise overfitting from training and test scores'
  - 'List the usual reasons a model fails after deployment'
opener:
  story: |
    Open your email and look in the spam folder. There might be a message promising a free phone, another from a "prince" with a business offer, a third about your parcel being stuck. Nobody at the mail company read them. And nobody wrote a rule for each of those particular scams, because scammers invent a new one every week.

    Try writing the rules yourself. "If it says *free*, it's spam"... but then your friend's "free this Saturday?" is lost. "If it says *prize* and *click*"... the scammer writes *pr1ze* tomorrow. Every rule you add has exceptions, and the exceptions have exceptions.

    So here is the odd idea behind modern AI. Instead of writing the rules, you hand the program thousands of emails already marked spam or not spam, and ask it to **find the rules itself**. How can a program "find" anything?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Spam and normal emails placed along a line by how many scary words they contain, with a learned cut-off between them"><text x="16" y="28" style="font-size:11px;fill:var(--muted)">Each dot is one email</text><line x1="24" y1="150" x2="296" y2="150" style="stroke:var(--ink);stroke-width:1.5"/><g style="fill:var(--c)"><circle cx="40" cy="132" r="7"/><circle cx="64" cy="132" r="7"/><circle cx="64" cy="116" r="7"/><circle cx="88" cy="132" r="7"/><circle cx="112" cy="132" r="7"/><circle cx="136" cy="132" r="7"/></g><g style="fill:var(--bad)"><circle cx="184" cy="132" r="7"/><circle cx="208" cy="132" r="7"/><circle cx="232" cy="132" r="7"/><circle cx="256" cy="132" r="7"/></g><line x1="160" y1="70" x2="160" y2="160" style="stroke:var(--ink);stroke-width:2;stroke-dasharray:5 4"/><text x="124" y="62" style="font-size:11px;fill:var(--ink)">learned cut-off</text><text x="24" y="176" style="font-size:10px;fill:var(--muted)">0 scary words</text><text x="212" y="176" style="font-size:10px;fill:var(--muted)">many scary words</text><text x="40" y="206" style="font-size:11px;fill:var(--c)">● normal</text><text x="130" y="206" style="font-size:11px;fill:var(--bad)">● spam</text><text x="24" y="224" style="font-size:10px;fill:var(--muted)">The program slides the line until</text><text x="24" y="236" style="font-size:10px;fill:var(--muted)">the fewest dots fall on the wrong side.</text></svg>'
life:
  - 'Your mail app filters spam by learning from the messages people mark as junk.'
  - 'Streaming apps suggest what to watch next by learning from what millions of viewers finished or abandoned.'
  - 'Your phone keyboard predicts the next word, and your camera finds faces, both learned from huge piles of examples.'
  - 'UPI apps and banks flag unusual payments by learning what normal spending looks like.'
  - 'Maps estimate your arrival time from how traffic on that road behaved on past evenings.'
models:
  - name: 'Examples beat instructions'
    text: 'When a task is too fuzzy to write down (what makes a face a face?), showing many cases works better than describing the rule. A cook learns a dish by tasting; a child learns "dog" by meeting dogs.'
  - name: 'Score it, then improve it'
    text: 'Anything you can measure with one number you can improve by trial: a cricket coach counts dropped catches, a shop counts unsold stock. Learning needs a score to push against.'
  - name: 'Memorising is not understanding'
    text: 'A student who memorised last year''s paper scores 100 on it and fails the new one. Always judge on questions the learner has not seen.'
links:
  - leaf: 'cs/functions'
    name: 'Functions'
    same: 'A trained model is a function: features go in, an answer comes out, the same input giving the same output.'
    differs: 'You write an ordinary function line by line; a model''s inner numbers are found by an automatic search over examples.'
  - leaf: 'mat/mean-median-mode'
    name: 'Mean, median, mode'
    same: 'The loss is an average (a mean) of the mistakes, and the mean is itself the single number that is closest to all the data in the squared-error sense.'
    differs: 'A mean summarises data; a learned model uses data to predict a new case.'
  - leaf: 'mat/conditional-probability-and-bayes'
    name: 'Conditional probability and Bayes'
    same: 'A spam filter asks "given these words, how likely is spam?", which is a conditional probability updated by evidence.'
    differs: 'Bayes'' rule is exact arithmetic on known probabilities; learning must first estimate those probabilities from examples.'
next:
  q: 'The simplest thing to predict is a number, like the price of a flat from its area. If we draw one straight line through the dots, how does the program decide which line is best, and how does it find it without trying them all?'
  leaf: 'cs/linear-regression'
  name: 'Linear regression and gradient descent'
symbols:
  - s: 'x'
    means: 'the features of one example, what the model sees (here, count of scary words)'
  - s: 'y'
    means: 'the true label of that example (here 1 for spam, 0 for not spam)'
  - s: '\hat{y}'
    means: 'the model''s prediction, read "y hat" (same kind of value as y)'
  - s: 'n'
    means: 'number of training examples (count)'
  - s: 'L'
    means: 'the loss: average mistake over the training examples (smaller is better)'
  - s: '\sum'
    means: 'add up the terms for every example from 1 to n'
---

:::hook
q: Nobody at the mail company typed "if the email says prize, it is spam". So where did the filter's rules come from?
options: ["An engineer wrote each one by hand", "The program found them by studying emails already labelled spam or not spam", "It guesses at random and gets lucky"]
answer: 1
right: Right. The company supplies labelled examples and a way of scoring mistakes; the program adjusts its own settings until the score is good. (Real filters combine many methods and signals; how any particular company does it is not public. [Inference])
wrong: Hand-written rules cannot keep up with scammers who change wording weekly, and random guessing would be right only half the time. There is a third way: let the examples teach the rule.
:::

## Rules versus learning {lvl=1 id=s-rules label="Foundations"}

A normal program is a recipe you write: *if this, then that*. You decide the rules, the computer follows them. That works wonderfully when you know the rule (add GST to a bill) and fails when you cannot say the rule (is this photo a cat?).

A **learning program** flips the arrangement. You supply:

1. **Examples**, each with the right answer attached (an email, marked "spam").
2. **A model**, a recipe with adjustable knobs, such as "count the scary words and call it spam if the count is at least $t$".
3. **A score** that says how badly the current knobs do on the examples.

The program turns the knobs, keeps whatever lowers the score, and stops when it cannot improve. The knobs are called **parameters**, and the whole process is called **training**.

| | Rules written by a person | Learned from examples |
|---|---|---|
| Who sets the knobs | The programmer | The training process |
| Needs | Someone who knows the rule | Many labelled examples |
| When the world changes | Edit the rules | Retrain on fresh examples |
| Weakness | Cannot cover every case | Only as good as its examples |

:::qc lvl=1
q: Which task is a better fit for learning from examples than for hand-written rules?
options: ["Adding 18% GST to a bill", "Deciding whether a handwritten digit is a 3 or an 8", "Sorting names alphabetically"]
answer: 1
right: Right. Nobody can state exactly how a 3 differs from an 8 in every handwriting, but thousands of labelled digits can teach it. The other two have exact rules.
wrong: Those have exact, short rules, so writing them is easier and always correct. Which task is too fuzzy to write down?
:::

## Features, labels and the loss {lvl=1 id=s-loss label="Foundations"}

A computer cannot read an email the way you do; it needs numbers. A **feature** is one such number measured about each example: how many scary words, how many links, whether the sender is in your contacts. The **label** is the right answer we want it to predict.

Take ten tiny emails. For each we count the scary words (*free*, *prize*, *urgent*) and write down whether it was spam.

| Scary words | 0 | 1 | 0 | 2 | 5 | 7 | 3 | 8 | 6 | 1 |
|---|---|---|---|---|---|---|---|---|---|---|
| Spam? (1 = yes) | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |

Our model has one knob, the cut-off $t$: say "spam" when the count is at least $t$. How good is a given $t$? Count the mistakes. That number is our **loss**: a single score, where lower is better. Averaged over the $n$ examples:

$$L = \frac{1}{n}\sum_{i=1}^{n} \text{mistake}(\hat{y}_i, y_i)$$

Read it as: "add up the mistakes on every example, then divide by how many examples there are". Here a mistake is 1 if the prediction $\hat{y}$ differs from the true label $y$, otherwise 0.

```python
import numpy as np
cnt = np.array([0, 1, 0, 2, 5, 7, 3, 8, 6, 1])
y   = np.array([0, 0, 0, 0, 1, 1, 0, 1, 1, 0])
def mistakes(t):
    return np.sum((cnt >= t) != y)       # predict spam when count >= t
best = min(range(10), key=mistakes)      # try every cut-off, keep the best
print(best, mistakes(best))              # 4 0
```

The program has "learned" that a cut-off of 4 sorts these ten emails perfectly. Nobody told it 4; the examples did.

:::figure caption="Mistakes made by each cut-off on the ten examples. The learner picks the lowest bar (t = 4; t = 5 ties)."
<svg viewBox="0 0 320 158" role="img" aria-label="Bar chart of mistakes for cut-offs 0 to 9: 6, 4, 2, 1, 0, 0, 1, 2, 3, 4"><line x1="20" y1="120" x2="300" y2="120" class="axis"/><g style="fill:var(--mat)"><rect x="26" y="36" width="20" height="84"/><rect x="54" y="64" width="20" height="56"/><rect x="82" y="92" width="20" height="28"/><rect x="110" y="106" width="20" height="14"/><rect x="138" y="118" width="20" height="2"/><rect x="166" y="118" width="20" height="2"/><rect x="194" y="106" width="20" height="14"/><rect x="222" y="92" width="20" height="28"/><rect x="250" y="78" width="20" height="42"/><rect x="278" y="64" width="20" height="56"/></g><g style="font-size:10px;fill:var(--muted)"><text x="32" y="136">0</text><text x="60" y="136">1</text><text x="88" y="136">2</text><text x="116" y="136">3</text><text x="144" y="136">4</text><text x="172" y="136">5</text><text x="200" y="136">6</text><text x="228" y="136">7</text><text x="256" y="136">8</text><text x="284" y="136">9</text><text x="120" y="150">cut-off t</text><text x="26" y="28">mistakes</text></g></svg>
:::

:::qc lvl=1
q: With the cut-off t = 8, how many of the ten emails are misclassified?
options: ["0", "3", "6"]
answer: 1
right: Right. Only the email with 8 scary words is called spam; the spam emails with counts 5, 7 and 6 are missed, so 3 mistakes (matches the bar for t = 8).
wrong: Apply the rule "count at least 8 means spam" to each email and compare with its true label. The spam emails with 5, 7 and 6 words get through.
:::

## Training and test {lvl=1 id=s-split label="Foundations"}

Perfect on ten emails is not impressive. The real question is how it does on the **next** email. So before training, lock some examples away. The learner trains on the **training set** only; afterwards we score it on the **test set**, which it has never seen.

Suppose five new emails arrive with counts 3, 6, 1, 5, 2 and labels 1, 1, 0, 1, 0. Our cut-off of 4 gets the first one wrong (3 scary words, but it was spam): 1 mistake in 5. The training score was perfect, the test score is 80%. The test score is the honest one, because it is the one that predicts how the filter behaves in the real world.

:::qc lvl=1
q: A model scores 99% on its training emails and 70% on fresh ones. Which number tells you how it will do in real use?
options: ["99%, it is the higher one", "70%, fresh data is the honest test", "The average, 84.5%"]
answer: 1
right: Right. Real use means unseen emails, which is exactly what the test set imitates.
wrong: The model has already seen the training emails, so a good score on them is partly memory. Which score comes from emails it has never seen?
:::

## Overfitting: memorising instead of learning {lvl=2 id=s-overfit label="SDE-1"}

Give the model more knobs and it can fit anything, including the noise. Here we take a hidden truth, a straight line, add some noise, and fit a gentle curve (degree 1) and a very flexible curve (degree 9) to ten noisy points.

```python
rng = np.random.default_rng(0)
x  = np.linspace(0, 1, 10);     y  = 2*x + 1 + rng.normal(0, 0.2, 10)
xt = np.linspace(0.05, 0.95, 10); yt = 2*xt + 1 + rng.normal(0, 0.2, 10)
for degree in (1, 9):
    c = np.polyfit(x, y, degree)                 # train: find the knobs
    train = np.mean((np.polyval(c, x) - y) ** 2)
    test  = np.mean((np.polyval(c, xt) - yt) ** 2)
    print(degree, round(train, 3), round(test, 3))
```

On one run (seed 0) this prints roughly `1 0.021 0.049` and `9 0.000 0.102`. The degree-9 curve passes through every training point, a perfect training score, but it wiggles wildly between them, so on new points its error is about double. It **memorised** the noise. The simple curve has a worse training score and a better test score.

:::qc lvl=2
q: Training error is near zero, test error is large. What is the diagnosis?
options: ["Underfitting: the model is too simple", "Overfitting: the model memorised its training data", "The test set is too small to say anything, always"]
answer: 1
right: Right. A big gap between training and test error is the signature of overfitting.
wrong: Too-simple models are bad on both sets. Here the training score is excellent and only the unseen data suffers. What is that called?
:::

How to fight it: get more data, use a simpler model, or **regularise** (penalise large knob values, so wild curves cost extra). To choose between models, do not peek at the test set. Carve a third piece, a **validation set**, for tuning, and open the test set once, at the very end.

## Why models fail after launch {lvl=3 id=s-fail label="SDE-2"}

A model that did well on the test set can still fail in production. The usual culprits:

- **Data leakage**: information about the answer slipped into the features, such as a "refund issued" column when predicting fraud. Test scores look superb; real use collapses. Also happens when near-duplicate rows land on both sides of the split.
- **Distribution shift**: the world after launch differs from the training data. A festive-season shopping model meets a quiet February; scammers change their wording the moment filters catch on.
- **Label noise and bias**: if humans labelled "spam" inconsistently, or the examples under-represent some users, the model copies those flaws faithfully.
- **Wrong score**: optimising the loss is not the same as achieving the real goal. A recommender that minimises "skipped videos" may learn to show whatever is most addictive.

A common design for the Netflix-style "what should I watch" problem has no hand-made labels at all: the data is the past behaviour of millions of viewers, and the model learns which titles tend to be watched by people with similar histories. [Inference: a typical approach; the company's real system is not public.] Time-ordered splitting (train on the past, test on the future) is the safest way to measure such a system honestly.

:::qc lvl=3
q: You are predicting next month's sales. You shuffle all 3 years of data randomly into train and test. What is wrong?
options: ["Nothing, shuffling is always best", "Test rows from the middle of the data have neighbours in training, so the model peeks at the future", "The test set will be too small"]
answer: 1
right: Right. For time-based problems, train on earlier dates and test on later ones, as in real use.
wrong: Random shuffling lets the model train on days right after a test day, which real forecasting never allows. How should the split respect time?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A learning program finds its own settings from labelled examples instead of following hand-written rules. {lvl=1}
2. Features are the numbers the model sees; the label is the answer to predict. {lvl=1}
3. The loss is one score for how wrong the model is; training lowers it. {lvl=1}
4. Always measure on a test set the model never trained on. {lvl=1}
5. Overfitting is memorising: low training error, high test error. {lvl=2}
6. Models fail in the wild from leakage, distribution shift, noisy labels or a badly chosen score. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never report the training score as the model's quality. {lvl=1}
- Do not tune the model against the test set; use a validation set and touch the test set once. {lvl=2}
- Check that no feature contains the answer in disguise (leakage). {lvl=3}
- Split by time when the future must be predicted from the past. {lvl=3}
- More flexible is not better: if you have more knobs than examples, expect memorising. {lvl=2}
:::
