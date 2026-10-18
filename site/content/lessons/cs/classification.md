---
title: Classification and evaluation
summary: How a program answers yes-or-no questions with a probability, and why "99% accurate" can be a useless claim when fraud is rare.
ncert: []
up_to: SDE-2
builds_on: [Linear regression and gradient descent, Conditional probability and Bayes]
notes_prompt: Explain to a friend why a fraud detector that is 99% accurate may catch no fraud at all, and which two numbers you would ask for instead.
margin:
  - kind: history
    title: History
    text: 'The logistic curve was used by Verhulst in the 1830s to describe how populations level off. Statisticians later reused it for yes-or-no outcomes, and it is still a first choice for them. [Unverified, from memory]'
  - kind: tip
    title: Interview favourite
    text: '"Your classifier is 99% accurate on a dataset where 99% are negatives. Is it good?" Say: no, compare with the always-negative baseline and report precision and recall.'
  - kind: olympiad
    title: Stretch idea
    text: 'If a missed fraud costs 100 times a false alarm, the best cut-off on the probability is about 1/101, not 1/2. Choosing the cut-off is a business decision, not a maths one.'
books:
  - { title: "A. Géron, Hands-On Machine Learning with Scikit-Learn, Keras and TensorFlow", ref: "Ch. 3 Classification; Ch. 4 logistic regression [Unverified]" }
  - { title: "T. Hastie, R. Tibshirani, J. Friedman, The Elements of Statistical Learning", ref: "Ch. 4 Linear Methods for Classification [Unverified]" }
cards:
  - { front: "What does logistic regression output?", back: "A probability between 0 and 1, made by squashing a weighted sum through the sigmoid curve. A cut-off (often 0.5) turns it into a yes or no." }
  - { front: "What is the decision boundary?", back: "The set of inputs where the probability equals the cut-off. For logistic regression at 0.5 it is a straight line (or flat plane): where the weighted sum equals zero." }
  - { front: "Define precision and recall.", back: "Precision = of everything flagged, the share that was truly positive (TP / (TP + FP)). Recall = of everything truly positive, the share that was flagged (TP / (TP + FN))." }
  - { front: "Why is accuracy misleading on imbalanced data?", back: "If only 1% are fraud, answering never fraud is 99% accurate and catches nothing. Look at precision, recall and the confusion matrix." }
  - { front: "What happens to precision and recall when you lower the cut-off?", back: "Recall rises (you catch more positives) and precision usually falls (more false alarms). The cut-off trades one for the other." }
  - { front: "Three ways to handle class imbalance?", back: "Weight the rare class more in the loss, resample (oversample rare or undersample common), and move the cut-off. Always evaluate with precision and recall on untouched data." }
core:
  idea: 'A classifier turns features into a **probability** of belonging to a class, then compares it with a cut-off to say yes or no. Judge it by what kinds of mistakes it makes (the confusion matrix), not by accuracy alone.'
  formulas:
    - tex: 'p = \sigma(w \cdot x + b) = \dfrac{1}{1 + e^{-(w\cdot x + b)}}'
      label: 'Logistic regression: probability of "yes"'
    - tex: '\text{precision} = \dfrac{TP}{TP + FP},\quad \text{recall} = \dfrac{TP}{TP + FN}'
      label: 'The two numbers to ask for'
    - tex: 'L = -\dfrac{1}{n}\sum_i \big[y_i \ln p_i + (1-y_i)\ln(1-p_i)\big]'
      label: 'Log loss: what training lowers'
  conditions:
    - 'The classes can be separated reasonably well by a straight boundary in the features given (otherwise add features or use a richer model)'
    - 'The training data resembles the cases the model will meet'
    - 'The cut-off is chosen from the costs of each kind of mistake'
  sign: 'Positive means the class we are hunting (fraud), whichever it is. Mixing up which cell is a false positive and which a false negative is the commonest error.'
outcomes:
  - 'Explain how logistic regression turns a weighted sum into a probability and a decision'
  - 'Draw the decision boundary for two features and say which side is "yes"'
  - 'Fill in a confusion matrix and compute accuracy, precision and recall'
  - 'Explain why accuracy fails under class imbalance and what to report instead'
  - 'Choose a cut-off from the costs of misses and false alarms'
opener:
  story: |
    A bank announces: "Our fraud detector is 99% accurate!" It sounds wonderful. Now picture 10,000 payments on a normal day, of which about 100 are fraudulent, one in a hundred. Suppose I write a program that does no thinking at all and answers "not fraud" for every payment.

    How often is my program right? 9,900 times out of 10,000. That is 99%. And how many frauds did it catch? None. The very same number, 99%, describes a brilliant detector and a useless one.

    So accuracy is the wrong question. What should a bank ask instead, and how does a program even decide, in the first place, that one payment looks more suspicious than another?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Many normal payments on one side of a diagonal line and a few fraud payments on the other side"><line x1="20" y1="200" x2="300" y2="200" style="stroke:var(--ink);stroke-width:1.5"/><line x1="20" y1="200" x2="20" y2="20" style="stroke:var(--ink);stroke-width:1.5"/><g style="fill:var(--c)"><circle cx="46" cy="170" r="5"/><circle cx="70" cy="150" r="5"/><circle cx="60" cy="182" r="5"/><circle cx="90" cy="164" r="5"/><circle cx="106" cy="142" r="5"/><circle cx="84" cy="190" r="5"/><circle cx="120" cy="176" r="5"/><circle cx="130" cy="150" r="5"/><circle cx="150" cy="186" r="5"/><circle cx="52" cy="130" r="5"/><circle cx="110" cy="120" r="5"/><circle cx="168" cy="164" r="5"/></g><g style="fill:var(--bad)"><circle cx="230" cy="60" r="6"/><circle cx="258" cy="90" r="6"/><circle cx="212" cy="86" r="6"/></g><circle cx="150" cy="110" r="6" style="fill:var(--bad)"/><circle cx="204" cy="168" r="5" style="fill:var(--c)"/><line x1="100" y1="30" x2="300" y2="190" style="stroke:var(--ink);stroke-width:2;stroke-dasharray:5 4"/><text x="196" y="40" style="font-size:11px;fill:var(--bad)">flagged as fraud</text><text x="30" y="30" style="font-size:11px;fill:var(--c)">looks normal</text><text x="26" y="222" style="font-size:10px;fill:var(--muted)">Two features per payment (amount, how unusual). Dashed line = decision boundary.</text></svg>'
life:
  - 'Your bank''s app sometimes blocks a payment and asks you to confirm it: a classifier flagged it as possible fraud.'
  - 'Spam filters, "is this photo of a cat", loan-approval screens and medical tests are all yes-or-no classifiers.'
  - 'A cancer screening test faces the same trade-off: catch every case (high recall) and you frighten many healthy people with false alarms (low precision).'
  - 'An airport metal detector is set to a cut-off: lower it and fewer threats get through, but more belts and keys cause beeps.'
  - 'A teacher spotting copied homework balances missing a cheater against accusing an honest student.'
models:
  - name: 'Two kinds of wrong'
    text: 'Every yes-or-no decision can fail by a false alarm or by a miss, and they rarely cost the same. A smoke alarm that never rings and one that rings at toast are both failures; decide which one you can live with.'
  - name: 'Base rates matter'
    text: 'When something is rare, even an accurate test mostly flags innocent cases. If 1 in 100 is guilty, and the test catches every guilty one but also wrongly flags 1 in 100 innocents, about half the flagged people are innocent. Ask "how common is it?" before trusting a result.'
  - name: 'Beat the lazy baseline'
    text: 'Before praising a result, ask what a lazy answer would score. A model that is 99% accurate when 99% are one class has learned nothing.'
links:
  - leaf: 'cs/linear-regression'
    name: 'Linear regression'
    same: 'Both compute a weighted sum of features plus a bias, and both are trained by gradient descent on a loss.'
    differs: 'Regression outputs the sum as a number; logistic regression squeezes it through the sigmoid into a probability and uses log loss instead of squared error.'
  - leaf: 'mat/conditional-probability-and-bayes'
    name: 'Conditional probability and Bayes'
    same: 'Precision is a conditional probability: the chance a payment is fraud given that it was flagged. Rare events and false alarms are Bayes'' rule in action.'
    differs: 'Bayes'' rule needs the probabilities handed to it; the classifier learns to estimate them from examples.'
  - leaf: 'cs/what-is-learning'
    name: 'What it means for a machine to learn'
    same: 'Same loop: choose a model, score its mistakes, adjust the knobs, check on unseen data.'
    differs: 'Now there are two different mistakes to count, and the right balance depends on what each costs.'
next:
  q: 'A straight boundary cannot separate dots arranged in a ring, or tell a cat from a dog in raw pixels. What if we stack many of these simple weighted-sum-and-squash units, one layer feeding the next?'
  leaf: 'cs/neural-networks'
  name: 'Neural networks'
symbols:
  - s: 'x'
    means: 'the features of one example (here amount and unusualness of a payment, scaled)'
  - s: 'w, b'
    means: 'weights and bias: the knobs training adjusts (no unit)'
  - s: '\sigma(z)'
    means: 'sigmoid: squashes any number z into a value between 0 and 1, equal to 1/(1+e^{-z})'
  - s: 'p'
    means: 'predicted probability of "yes" (fraud), between 0 and 1'
  - s: 'TP, FP, FN, TN'
    means: 'true positives, false positives, false negatives, true negatives (counts of payments)'
  - s: '\ln'
    means: 'natural logarithm; large and negative for tiny numbers, used in the log loss'
---

:::hook
q: One payment in a hundred is fraud. A program answers "not fraud" for every payment without even looking. How accurate is it?
options: ["About 1%", "About 50%", "About 99%"]
answer: 2
right: Right. It is correct on the 99 normal payments out of every 100, so it scores 99% while catching exactly zero frauds. That is why fraud teams talk about precision and recall instead. (The 1-in-100 rate here is made up for teaching; real fraud rates are not given.)
wrong: Count the cases it gets right. 99 of every 100 payments are normal, and it says "not fraud" about each. How many is that?
:::

## Answering yes or no with a score {lvl=1 id=s-yesno label="Foundations"}

Linear regression predicts a number. A fraud detector must answer **fraud** or **not fraud**: a **classification**. The trick is to have the program produce not a bare yes/no but a **probability**, a number from 0 (surely normal) to 1 (surely fraud). Then we pick a **cut-off**: flag the payment if the probability is at least the cut-off, say 0.5.

Why a probability rather than a flat yes/no? Because it shows how sure the model is. A payment at 0.51 and one at 0.99 are both "fraud" at cut-off 0.5, but you may want a human to review the first and block the second. And the cut-off can be changed later without retraining.

## The confusion matrix {lvl=1 id=s-confusion label="Foundations"}

Whatever the model says, each payment ends in one of four boxes. Call fraud "positive":

| | Truly fraud | Truly normal |
|---|---|---|
| **Flagged** | True positive (TP): caught | False positive (FP): false alarm |
| **Not flagged** | False negative (FN): missed fraud | True negative (TN): rightly left alone |

**Accuracy** is the share of correct answers, $(TP + TN)/\text{all}$. In our lazy program, TP = 0, FP = 0, FN = 100, TN = 9,900, so accuracy is 99%, which hides the 100 missed frauds. We need numbers that look only at the frauds and at the flags:

- **Recall**: of the real frauds, how many did we catch? $TP/(TP+FN)$.
- **Precision**: of the payments we flagged, how many were real frauds? $TP/(TP+FP)$.

Suppose a real model flags 140 payments, 80 of them genuinely fraudulent, so TP = 80, FP = 60, FN = 20, TN = 9,840. Accuracy: 99.2%. Recall: $80/100 = 80\%$. Precision: $80/140 \approx 57\%$. Now the picture is honest: it catches four frauds in five, and about 43% of its alarms are false.

:::qc lvl=1
q: A model flags 50 payments; 40 are fraud. In total there were 100 frauds. What are precision and recall?
options: ["Precision 80%, recall 40%", "Precision 40%, recall 80%", "Both 40%"]
answer: 0
right: Right. Precision is 40 correct out of 50 flagged = 80%. Recall is 40 caught out of 100 real frauds = 40%.
wrong: Precision looks at the flagged payments (the 50); recall looks at the real frauds (the 100). TP is 40 in both.
:::

## Logistic regression {lvl=2 id=s-logistic label="SDE-1"}

How does the program produce the probability? Start as in linear regression: compute a weighted sum of the features, $z = w \cdot x + b$. This can be any number, from large negative to large positive. Now squash it into the range 0 to 1 with the **sigmoid** curve:

$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

Read it as: "a big positive $z$ gives nearly 1, a big negative $z$ gives nearly 0, and $z=0$ gives exactly 0.5". For example $\sigma(2) \approx 0.88$. The model's probability is $p = \sigma(w \cdot x + b)$. This is **logistic regression**, and despite the name it is used for classification.

**The decision boundary.** At the cut-off 0.5 the model says "fraud" exactly when $z > 0$. The boundary is where $w \cdot x + b = 0$: a straight line when there are two features, a flat plane for three. Every payment on one side is flagged.

**The loss.** Squared error is a poor fit for probabilities. Instead we use **log loss**: if the true answer is fraud, the cost of predicting probability $p$ is $-\ln p$. Predict 0.9 and the cost is only 0.1; predict 0.01 and it is 4.6. Being confidently wrong is punished heavily. The training loop is the same gradient descent as before, and the gradient turns out to be simply (prediction − truth) times the feature.

Here is a toy fraud world, 980 normal payments and 20 frauds, each with two scaled features, and logistic regression trained by gradient descent:

```python
import numpy as np
rng = np.random.default_rng(1)
X = np.vstack([rng.normal([0, 0], 1, (980, 2)),     # 980 normal payments
               rng.normal([2.5, 2.5], 1, (20, 2))]) # 20 frauds
y = np.r_[np.zeros(980), np.ones(20)]
Z = (X - X.mean(0)) / X.std(0)                      # scale the features
```

```python
sigmoid = lambda z: 1 / (1 + np.exp(-z))
w, b = np.zeros(2), 0.0
for _ in range(3000):
    p = sigmoid(Z @ w + b)                  # predicted probability of fraud
    g = p - y                               # gradient of log loss, per example
    w -= 0.5 * Z.T @ g / len(y)
    b -= 0.5 * g.mean()
```

:::figure caption="Dashed line: the decision boundary where the weighted sum is zero. Everything on the upper-right side is flagged."
<svg viewBox="0 0 320 170" role="img" aria-label="Two groups of dots separated by a diagonal line"><line x1="20" y1="150" x2="300" y2="150" class="axis"/><g style="fill:var(--mat)"><circle cx="50" cy="120" r="5"/><circle cx="76" cy="132" r="5"/><circle cx="100" cy="108" r="5"/><circle cx="130" cy="126" r="5"/><circle cx="64" cy="96" r="5"/><circle cx="150" cy="136" r="5"/></g><g style="fill:var(--bad)"><circle cx="220" cy="46" r="5"/><circle cx="250" cy="72" r="5"/><circle cx="196" cy="62" r="5"/><circle cx="270" cy="40" r="5"/></g><line x1="110" y1="20" x2="290" y2="150" style="stroke:var(--ink);stroke-width:2;stroke-dasharray:5 4"/><text x="160" y="22" style="font-size:10px;fill:var(--muted)">w · x + b = 0</text><text x="228" y="108" style="font-size:10px;fill:var(--bad)">flagged</text></svg>
:::

:::qc lvl=2
q: For a payment the weighted sum z = w · x + b equals 0. What probability does logistic regression give?
options: ["0", "0.5", "1"]
answer: 1
right: Right. The sigmoid of 0 is 1/(1+1) = 0.5, which sits exactly on the decision boundary.
wrong: Put z = 0 into 1/(1+e^(−z)): e^0 is 1, so the result is 1/2.
:::

## Precision against recall {lvl=2 id=s-tradeoff label="SDE-1"}

The cut-off is a dial. Lower it and the model flags more payments, so it misses fewer frauds but raises more false alarms. Using the model just trained (the code below counts the four boxes at three cut-offs):

```python
def report(th):
    pred = p >= th
    tp = np.sum(pred & (y == 1)); fp = np.sum(pred & (y == 0))
    fn = np.sum(~pred & (y == 1)); tn = np.sum(~pred & (y == 0))
    print(th, tp, fp, fn, tn, tp/(tp+fp), tp/(tp+fn))
for th in (0.5, 0.2, 0.1): report(th)
```

On this run (computed with the code above, on the training data):

| Cut-off | TP | FP | FN | TN | Precision | Recall | Accuracy |
|---|---|---|---|---|---|---|---|
| 0.5 | 14 | 2 | 6 | 978 | 87.5% | 70% | 99.2% |
| 0.2 | 18 | 7 | 2 | 973 | 72% | 90% | 99.1% |
| 0.1 | 20 | 16 | 0 | 964 | 56% | 100% | 98.4% |

Notice that accuracy barely moves (it is dominated by the 980 normal payments) while precision and recall swing widely. Lowering the cut-off buys recall with precision. There is no free setting: you choose by what each mistake costs. A single number that balances them is the **F1 score**, the harmonic mean $2PR/(P+R)$ of precision $P$ and recall $R$; at cut-off 0.5 it is about 0.78.

:::qc lvl=2
q: A hospital screening test must not miss sick patients, since follow-up tests are cheap. Which way should it move the cut-off?
options: ["Lower it, to raise recall", "Raise it, to raise precision", "Leave it at 0.5 always"]
answer: 0
right: Right. Missing a sick patient is the costly error, so we accept more false alarms (lower precision) to catch nearly all of them.
wrong: Which mistake is worse here, a false alarm or a miss? Move the cut-off to avoid the worse one.
:::

## Imbalance, costs and calibration {lvl=3 id=s-imbalance label="SDE-2"}

Fraud, disease and equipment failure are all rare, so classes are **imbalanced**. The loss is mostly made of the easy normal cases, so a model can do well on average while barely trying on the rare class. Remedies, and their catches:

- **Class weights**: count each fraud example, say, 50 times in the loss. Cheap and effective; shifts probabilities upward, so re-pick the cut-off.
- **Resampling**: duplicate the rare class or drop some of the common one. Only resample the *training* data; evaluate on untouched data with the real mix, or the scores lie.
- **Move the cut-off** using costs. If a missed fraud costs ₹5,000 and a false alarm ₹50, flag a payment when $p \times 5000 > (1-p) \times 50$, which is $p > 50/5050 \approx 0.01$. Flag at 1% probability, not 50%.
- **Pick metrics that respect imbalance**: precision, recall, and the precision-recall curve (precision against recall over all cut-offs). The popular ROC curve can look excellent even when precision is poor, because it divides false alarms by the huge normal count.

A sobering calculation. Take a million payments, 100 of them fraud. A model with 100% recall and a 1% false-alarm rate (rightly called good) raises about 9,999 false alarms, so only $100/(100+9999) \approx 1\%$ of its flags are real fraud. Rare events make precision low even for strong models, which is why flagged payments usually go to a second, cheaper check.

Finally **calibration**: if the model says 0.3, do 30% of such payments truly turn out fraudulent? Some models rank well but give badly scaled probabilities; check calibration if the number will be used in a calculation, not only a ranking. And evaluate on a held-out test set, as in the first lesson of this pillar.

:::qc lvl=3
q: Your fraud model has precision 0.30 and recall 0.90. The operations team is drowning in false alarms. What is the first thing to try?
options: ["Raise the cut-off, accepting lower recall", "Lower the cut-off", "Train on the test set"]
answer: 0
right: Right. A higher cut-off flags fewer payments: precision rises and recall falls. Whether that is acceptable depends on the cost of a miss.
wrong: Flagging fewer payments reduces false alarms. Which direction does the cut-off move to flag fewer?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A classifier outputs a probability; a cut-off turns it into yes or no. {lvl=1}
2. The confusion matrix counts true and false positives and negatives; accuracy alone hides the rare class. {lvl=1}
3. Precision = TP/(TP+FP); recall = TP/(TP+FN). {lvl=1}
4. Logistic regression: sigmoid of a weighted sum, trained with log loss by gradient descent; the boundary is a line or plane. {lvl=2}
5. Lowering the cut-off trades precision for recall; choose it from the costs of each mistake. {lvl=2}
6. With imbalanced data use class weights or resampling (training only), report precision and recall, and check calibration. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never judge a rare-event model by accuracy; compare against the "always no" baseline. {lvl=1}
- Know which class is "positive" before reading precision and recall. {lvl=1}
- Do not resample the test set; the test set must keep the real class mix. {lvl=3}
- The cut-off 0.5 is a default, not a law; set it from the costs. {lvl=2}
- Scale features before gradient descent, just as for regression. {lvl=2}
:::
