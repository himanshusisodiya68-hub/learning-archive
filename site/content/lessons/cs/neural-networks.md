---
title: Neural networks
summary: How a pile of simple weighted votes, trained by passing blame backwards, learns to recognise a handwritten digit or a cat in a photo.
ncert: []
up_to: SDE-2
builds_on: [Linear regression and gradient descent, Classification and evaluation, Derivatives]
notes_prompt: Explain to a friend how a program that was never given a rule for "cat" learns to spot cats, using the words weight, error and blame.
margin:
  - kind: history
    title: History
    text: 'Frank Rosenblatt built the perceptron, a single trainable neuron, in the late 1950s. Backpropagation became widely known through a 1986 paper by Rumelhart, Hinton and Williams, and deep networks took over image recognition after 2012. [Unverified: dates from memory]'
  - kind: tip
    title: Interview favourite
    text: '"Explain backpropagation in one minute" is a classic. The safe answer: run the input forward to get a guess, measure the error, then walk backwards multiplying how much each step changed the next (the chain rule) to learn how much each weight is to blame.'
  - kind: olympiad
    title: Stretch
    text: 'Why must a network have a nonlinearity between layers? Show that two layers of pure weighted sums are secretly one layer. The XOR problem below is the smallest case where this matters.'
books:
  - { title: "I. Goodfellow, Y. Bengio, A. Courville, Deep Learning", ref: "Part II, feedforward networks and backpropagation [Unverified: chapter numbers]" }
  - { title: "M. Nielsen, Neural Networks and Deep Learning (free online book)", ref: "the chapter on how backpropagation works [Unverified: chapter number]" }
  - { title: "A. Géron, Hands-On Machine Learning", ref: "the neural-network chapters [Unverified]" }
cards:
  - { front: "What does one artificial neuron compute?", back: "A weighted sum of its inputs plus a bias, passed through a nonlinear function: a = f(w·x + b)." }
  - { front: "Why do we need a nonlinear function between layers?", back: "Without it, a stack of layers collapses into one weighted sum; no matter how deep, it could only draw straight-line boundaries." }
  - { front: "What is a loss?", back: "One number that says how wrong the network's guesses are on the training examples. Training means making it small." }
  - { front: "What is backpropagation, in words?", back: "The chain rule applied from the output backwards: it tells every weight how much a small change in it would change the loss, so each can be nudged the right way." }
  - { front: "Why does depth help?", back: "Each layer builds on the one before: pixels to edges, edges to shapes, shapes to objects. Reusing simple parts to make complex ones needs far fewer units than learning every object directly." }
  - { front: "Why does a conv layer need far fewer weights than a dense layer on an image?", back: "It slides the same small filter over every position (weight sharing), instead of giving every pixel its own weights." }
core:
  idea: 'A neural network is many neurons arranged in layers. Each neuron takes a weighted sum of its inputs and squashes it through a nonlinear function. Training adjusts every weight by gradient descent, with backpropagation (the chain rule) supplying how much each weight contributed to the error.'
  formulas:
    - tex: 'a = f(\mathbf{w}\cdot\mathbf{x} + b)'
      label: 'One neuron: weighted sum, then a nonlinearity'
    - tex: 'w \leftarrow w - \eta\,\dfrac{\partial L}{\partial w}'
      label: 'Gradient descent: nudge each weight downhill on the loss'
  conditions:
    - 'There are enough labelled examples, and they resemble the cases the network will meet later'
    - 'The loss is smooth enough that small weight changes change it a little (so gradients mean something)'
    - 'The learning rate is small enough not to overshoot, large enough to make progress'
    - 'The starting weights are random, not all equal (equal weights would stay equal)'
  sign: 'Training only finds weights that work on the examples it saw. A network can score 100% on its training set and still fail on new data; always test on examples it has never seen.'
outcomes:
  - 'Describe a neuron as a weighted vote with a threshold-like squash, and compute one by hand'
  - 'Explain why layers need a nonlinearity and what a hidden layer buys you'
  - 'Explain backpropagation as the chain rule in words and compute a tiny one by hand'
  - 'Read a short numpy network and say what the forward and backward passes do'
  - 'Count the parameters of a dense layer and a convolution layer and say why they differ'
opener:
  story: |
    You take a photo of your dog and your phone's gallery files it under **Dogs** by itself. Nobody ever typed in the rule for a dog. Nobody could: ears, tails, fur, angles, light, every breed. A rule-by-rule description of "dog" would be longer than a library.

    Yet a program does it in a blink. All it ever got was a very large pile of photos, each labelled "dog" or "not dog", and a way of adjusting its own numbers until its guesses stopped being wrong.

    Those numbers are the whole secret. A typical digit-reading network has about a hundred thousand of them, and nobody sets them by hand. So how can a hundred thousand knobs turn themselves into an eye?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A small network: pixels feed a hidden layer which feeds ten digit outputs"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink);stroke-width:1.5"><circle cx="50" cy="50" r="10"/><circle cx="50" cy="90" r="10"/><circle cx="50" cy="130" r="10"/><circle cx="50" cy="170" r="10"/><circle cx="160" cy="70" r="12"/><circle cx="160" cy="110" r="12"/><circle cx="160" cy="150" r="12"/><circle cx="270" cy="90" r="10"/><circle cx="270" cy="130" r="10"/></g><g style="stroke:var(--rule);stroke-width:1;fill:none"><path d="M60 50 L148 70 M60 50 L148 110 M60 50 L148 150 M60 90 L148 70 M60 90 L148 110 M60 90 L148 150 M60 130 L148 70 M60 130 L148 110 M60 130 L148 150 M60 170 L148 70 M60 170 L148 110 M60 170 L148 150 M172 70 L260 90 M172 70 L260 130 M172 110 L260 90 M172 110 L260 130 M172 150 L260 90 M172 150 L260 130"/></g><path d="M60 50 L148 110" style="stroke:var(--c);stroke-width:3;fill:none"/><text x="24" y="206" style="font-size:11px;fill:var(--muted)">pixels</text><text x="132" y="206" style="font-size:11px;fill:var(--muted)">hidden</text><text x="244" y="206" style="font-size:11px;fill:var(--muted)">digit: 3 or 8?</text><text x="76" y="26" style="font-size:11px;fill:var(--c)">thick line = large weight</text></svg>'
life:
  - 'Your phone unlocks by recognising your face, and the gallery groups photos by person and by object.'
  - 'Voice typing, translation apps and spam filters in your mail all run neural networks.'
  - 'Cars with driver-assist read lane markings and traffic signs with networks trained on millions of road images.'
  - 'Doctors'' tools flag suspicious spots on X-rays and eye scans, as a second pair of eyes rather than a replacement.'
models:
  - name: 'Many small votes beat one big rule'
    text: 'No single neuron knows what a cat is; each casts a small weighted vote. Committees, markets and juries work the same way: good decisions emerge from many simple, imperfect judgements, weighted by how trustworthy each one has been.'
  - name: 'Blame goes backwards'
    text: 'When a project fails, you trace the error back through the chain of decisions and ask how much each one contributed, then adjust the biggest contributors. That is backpropagation; it is also how good post-mortems work.'
  - name: 'Build complex from simple layers'
    text: 'Letters make words make sentences make arguments. Pixels make edges make shapes make faces. Whenever something complex is learnable, look for the layers of simple parts it is built from.'
links:
  - leaf: 'cs/linear-regression'
    name: 'Linear regression and gradient descent'
    same: 'A single neuron with no squash is exactly linear regression, and training uses the same downhill steps on a loss.'
    differs: 'Regression fits one straight relationship; stacking nonlinear layers lets the same machinery bend to fit almost any pattern, at the cost of far more weights and less obvious meaning.'
  - leaf: 'mat/derivatives'
    name: 'Derivatives'
    same: 'The gradient is a derivative: how much does the output change if this one input changes a tiny bit?'
    differs: 'A network has thousands to billions of inputs (the weights), so we need every derivative at once, and backpropagation computes them all in one backward sweep.'
  - leaf: 'bio/neural-control'
    name: 'Neural control and coordination'
    same: 'Both take many incoming signals, add them up, and fire only if the total is strong enough.'
    differs: 'Real neurons are far richer in timing and chemistry; artificial ones are a loose sketch of one idea, not a model of the brain.'
next:
  q: 'A photo has a fixed number of pixels, but a sentence can be any length, and the meaning of "it" depends on a word ten words earlier. How can a network read a sentence and decide which earlier words matter to each word?'
  leaf: 'cs/transformers-and-llms'
  name: 'Transformers and large language models'
symbols:
  - s: '\mathbf{x}'
    means: 'inputs to a neuron: a list of numbers (for example pixel brightnesses)'
  - s: '\mathbf{w}'
    means: 'weights: one number per input, saying how much that input counts (learned)'
  - s: 'b'
    means: 'bias: a learned number added to the sum, shifting how easily the neuron fires'
  - s: 'f'
    means: 'nonlinearity (activation): a fixed squashing function such as max(0, z) applied to the sum'
  - s: 'L'
    means: 'loss: one number measuring how wrong the network is (lower is better)'
  - s: '\eta'
    means: 'learning rate: the size of each downhill step (small positive number)'
  - s: '\partial L/\partial w'
    means: 'how much the loss changes per tiny change in one weight w (the gradient)'
---

:::hook
q: Here's the puzzle. A network that reads handwritten digits (28 by 28 pixels, hidden layer of 128 neurons, 10 outputs) has how many adjustable numbers?
options: ["About 100", "About 100,000", "About 100 million"]
answer: 1
right: Right. 784 × 128 + 128 for the hidden layer, plus 128 × 10 + 10 for the outputs, is 101,770. Small by today's standards; the large language models in the next lesson have billions.
wrong: Count the wires. Every one of the 784 pixels connects to every one of the 128 hidden neurons, and each wire has its own weight. What is 784 × 128?
:::

## A neuron is a weighted vote {lvl=1 id=s-neuron label="Foundations"}

Suppose you are deciding whether to go out tonight. Three things matter: is it raining (a lot), is a friend coming (a fair bit), is there an exam tomorrow (a lot, against). You do not give them equal say. Rain counts heavily, the friend lightly, the exam heavily the other way. You add up the pushes, and if the total clears some bar, you go.

That is a **neuron**. It takes some numbers in (the **inputs**), multiplies each by a number saying how much it matters (its **weight**), adds a fixed nudge called the **bias**, and then squashes the total through a simple function to decide how strongly to fire.

$$a = f(\mathbf{w}\cdot\mathbf{x} + b)$$

Read it as: "multiply each input by its weight, add them up, add the bias, then pass the total through the squashing function $f$". The squash used most today is **ReLU**: if the total is negative, output 0; otherwise, pass it through unchanged.

A worked number: inputs $(2, 1, 3)$, weights $(0.5, -1, 0.4)$, bias $-0.2$. The sum is $1 - 1 + 1.2 - 0.2 = 1.0$. ReLU leaves it at 1.0, so the neuron fires with strength 1.0.

```python
import numpy as np
x = np.array([2.0, 1.0, 3.0])
w = np.array([0.5, -1.0, 0.4])
b = -0.2
z = w @ x + b            # weighted sum plus bias: 1.0
a = max(0.0, z)          # ReLU
```

:::qc lvl=1
q: Same weights and bias, but the inputs are now (0, 1, 0). What does the neuron output?
options: ["0, because the sum is negative and ReLU clips it", "-1.2", "1"]
answer: 0
right: Right. The sum is 0 - 1 + 0 - 0.2 = -1.2, and ReLU turns any negative total into 0: the neuron stays silent.
wrong: Compute the weighted sum first, then apply ReLU, which replaces every negative number by 0.
:::

## Layers, and how a network sees {lvl=1 id=s-layers label="Foundations"}

One neuron draws only a single straight cut through the world. So we use many, side by side, and then feed their outputs into another row of neurons. A row is a **layer**. The first layer sees raw numbers (pixels), the last gives the answer (ten outputs, one per digit), and the layers in between are **hidden** because nobody tells them what to look for.

:::figure caption="What the layers of an image network tend to pick up, from pixels toward the answer"
<svg viewBox="0 0 560 120" role="img" aria-label="Four stages: pixels, edges, shapes, object"><g style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="10" y="30" width="110" height="60" rx="8"/><rect x="155" y="30" width="110" height="60" rx="8"/><rect x="300" y="30" width="110" height="60" rx="8"/><rect x="445" y="30" width="105" height="60" rx="8"/></g><g style="stroke:var(--mat);stroke-width:2;fill:none" class="axis"><path d="M122 60 L153 60 M267 60 L298 60 M412 60 L443 60"/></g><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="65" y="56">pixels</text><text x="65" y="74" style="fill:var(--muted)">brightness</text><text x="210" y="56">edges</text><text x="210" y="74" style="fill:var(--muted)">light to dark</text><text x="355" y="56">parts</text><text x="355" y="74" style="fill:var(--muted)">loops, corners</text><text x="497" y="56">answer</text><text x="497" y="74" style="fill:var(--muted)">"8"</text></g></svg>
:::

Trained image networks seem to build up in just this way: early layers react to edges, middle ones to loops and corners, late ones to whole objects. Each layer reuses the one before. [Inference: this tidy picture comes from inspecting trained networks and is an illustration, not a rule every network follows.]

## A layer in numpy, and why bend {lvl=2 id=s-numpy label="SDE-1"}

A whole layer is just many neurons sharing the same inputs. Stack their weight lists as the columns of a grid (a **matrix**, written `W`), and one multiplication computes every neuron at once.

```python
import numpy as np
def layer(x, W, b):
    return np.maximum(0, x @ W + b)     # all neurons of the layer at once

rng = np.random.default_rng(0)
x = rng.random(784)                     # one flattened 28x28 image
h = layer(x, rng.normal(0, 0.05, (784, 128)), np.zeros(128))
y = h @ rng.normal(0, 0.05, (128, 10))  # ten scores, one per digit
```

Why bother with the ReLU squash? Because without it, two layers are secretly one. Multiplying by one matrix and then another is the same as multiplying by a single combined matrix. A hundred layers of pure weighted sums could still only draw straight cuts. The bend between layers is what lets depth add power.

:::qc lvl=2
q: You remove the ReLU from every layer of a 50-layer network. What can the network represent now?
options: ["The same as before", "Only what one weighted-sum layer can: a single straight-line rule", "Nothing at all"]
answer: 1
right: Right. A product of matrices is a single matrix, so the 50 layers collapse into one. The nonlinearity is what makes depth worth having.
wrong: Multiply two weighted-sum layers together on paper: you get one weighted sum with different weights. What does that do to fifty layers?
:::

## Learning: loss, downhill, and blame {lvl=2 id=s-learning label="SDE-1"}

The network starts with random weights, so its first guesses are nonsense. We need a way to say how bad, and a way to improve.

**Loss.** For each training example, compare the guess with the right label and get a number: zero if perfect, bigger if worse. Average over the examples and you have one number $L$, the **loss**. Training means making $L$ small.

**Downhill.** Imagine $L$ as the height of a landscape, with every weight a direction you can walk. If you knew how the height changes when you nudge one weight, you could step the other way. That slope is $\partial L/\partial w$, and the step rule is:

$$w \leftarrow w - \eta\,\frac{\partial L}{\partial w}$$

Read it as: "the new weight is the old weight, minus a small step ($\eta$, the learning rate) times the slope". If raising the weight raises the loss, the slope is positive and the weight goes down. This is the same gradient descent as in linear regression.

**Blame.** The hard part is the slope for a weight buried deep inside. The weight affects a neuron, which affects the next layer, which affects the output, which affects the loss. **Backpropagation** uses the **chain rule**: the effect of the weight on the loss is the effect on the neuron, times the effect of that neuron on the next, times... all the way to the loss. Like a row of gears, if gear 1 turns gear 2 by 3 teeth per turn, and gear 2 turns gear 3 by 2, then gear 1 turns gear 3 by $3 \times 2 = 6$.

A tiny chain: $a = w_1 x$, then $\hat y = w_2 a$, loss $L = (\hat y - y)^2$. With $x=1$, $w_1=2$, $w_2=3$, target $y=5$: $a=2$, $\hat y=6$, $L=1$. Then $\partial L/\partial w_2 = 2(\hat y - y)\cdot a = 4$ and $\partial L/\partial w_1 = 2(\hat y - y)\cdot w_2 \cdot x = 6$. The error is computed once at the end, then **passed backwards**, picking up one multiplier at each step.

:::qc lvl=2
q: In that chain, w₁ is changed by +0.01. Roughly how does the loss change?
options: ["Up by about 0.06, since the slope is 6", "Down by 0.06", "It does not change"]
answer: 0
right: Right. Slope 6 means a tiny increase of 0.01 in w₁ raises the loss by about 6 × 0.01 = 0.06. Gradient descent would therefore lower w₁ instead.
wrong: The slope tells you the change in loss per unit change in the weight. Multiply it by the size of the nudge, and note its sign.
:::

## Training a network, end to end {lvl=3 id=s-train label="SDE-2"}

Here is a complete network that learns XOR (output 1 when exactly one of two inputs is 1). It is the classic case no single neuron can solve. The comments mark the forward pass (guess) and the backward pass (blame).

```python
import numpy as np
X = np.array([[0,0],[0,1],[1,0],[1,1]], float)
y = np.array([[0],[1],[1],[0]], float)          # XOR
rng = np.random.default_rng(1)
W1, b1 = rng.normal(0, 1, (2, 4)), np.zeros(4)
W2, b2 = rng.normal(0, 1, (4, 1)), np.zeros(1)
for step in range(5000):
    h = np.tanh(X @ W1 + b1)                     # forward: hidden layer
    p = 1 / (1 + np.exp(-(h @ W2 + b2)))         # forward: probability
    d2 = p - y                                   # backward: blame at output
    d1 = (d2 @ W2.T) * (1 - h**2)                # pass blame back through W2 and tanh
    W2 -= 0.1 * h.T @ d2;  b2 -= 0.1 * d2.sum(0)
    W1 -= 0.1 * X.T @ d1;  b1 -= 0.1 * d1.sum(0)
print(p.round(2).ravel())                        # about [0. 1. 1. 0.]
```

For the loss used here (cross-entropy, which punishes confident wrong answers heavily), the blame at the output works out to simply "prediction minus target", which is why `d2 = p - y` is so short. The line for `d1` is the chain rule in code: multiply the blame by the weights it flows back through, then by the slope of the squash ($1 - h^2$ for tanh).

Honest warning: this is not guaranteed to work. With the starting seed 0 instead of 1, this same code can get stuck, answering 0.5 for two of the four cases. Random starting points matter, and training can land in a poor spot. Real systems add tricks (careful initialisation, adaptive step sizes, many examples at a time called **mini-batches**), but the loop is the same: guess, measure, blame, nudge.

:::qc lvl=3
q: Why are the starting weights random rather than all zero?
options: ["Zero weights make every hidden neuron identical, so they receive identical blame and never become different", "Random numbers are faster to compute", "Zero would make the loss infinite"]
answer: 0
right: Right. If all neurons start identical they get identical updates and stay identical, so the layer behaves like one neuron. Randomness breaks the symmetry.
wrong: Think about two hidden neurons with exactly the same weights. Would the blame sent to them ever differ?
:::

## Why depth helps, and what goes wrong {lvl=3 id=s-depth label="SDE-2"}

Why use many layers rather than one enormous one? A single wide layer can, in principle, approximate nearly any smooth function, but it may need an astronomical number of neurons. Depth lets later layers **reuse** what earlier ones found: the "wheel" detector used for cars, bicycles and carts is learned once and shared. Compare writing a program with functions to writing it as one giant list of instructions. [Inference: this is the standard intuition; precise theory exists for special cases only.]

Depth has costs. **Vanishing gradients**: when the blame is multiplied by many numbers smaller than 1 on its way back, it fades to almost nothing by the early layers, which then barely learn. Modern fixes include ReLU (slope 1 when active) and **residual connections**, which add a layer's input to its output, so blame has a direct shortcut back.

The other big failure is **overfitting**: the network memorises the training examples, noise included, and does poorly on new ones. The defence is the same as in classification: hold out a test set, watch the loss on it, and stop when it starts rising.

## Seeing with fewer weights: convolution {lvl=3 id=s-conv label="SDE-2"}

Back to the hook. A dense layer from a $28\times28$ image to 128 neurons gives every pixel its own weight to every neuron: $784\times128 + 128 = 100{,}480$ weights. A colour photo of $1000\times1000$ pixels has three million inputs, and the same layer would have hundreds of millions of weights.

But an edge is an edge wherever it appears. A **convolution** layer slides one small grid of weights (a **filter**, say 3 by 3 pixels) across every position of the image, using the *same* weights each time. A filter over 3 colour channels has $3\times3\times3 = 27$ weights plus a bias, and 32 filters give $(27+1)\times32 = 896$ weights in total, whatever the image size.

Weight sharing is a built-in assumption: what you look for does not depend on where it is. It is a good assumption for photos, and the reason convolutional networks led image recognition for about a decade. [Inference: later vision systems often use the attention mechanism from the next lesson instead; the details vary by system.]

| Layer type | Weights for a 28×28 grey input | Assumes |
|---|---|---|
| Dense, 128 neurons | 100,480 | nothing about the input's shape |
| Conv, 16 filters of 3×3 | (9+1)×16 = 160 | patterns look the same everywhere |

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A neuron is a weighted sum of inputs plus a bias, squashed by a nonlinear function. {lvl=1}
2. Layers stack neurons; early layers find simple parts, later ones combine them. {lvl=1}
3. Without a nonlinearity between layers, any depth collapses into one layer. {lvl=2}
4. Learning means lowering a loss by gradient descent: nudge each weight against its slope. {lvl=2}
5. Backpropagation is the chain rule from the output backwards: blame is computed once and multiplied along the way. {lvl=2}
6. Training can stall or overfit; random starts, held-out test data and tricks like residual connections help. {lvl=3}
7. Convolution shares one small filter across the image, cutting weights dramatically. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A network is only as good as its training examples: biased or mislabelled data gives a biased or confused network. {lvl=1}
- High accuracy on training data proves nothing; always measure on data the network has not seen. {lvl=2}
- Forgetting the nonlinearity between layers silently turns your deep network into a single layer. {lvl=2}
- A learning rate that is too big makes the loss bounce or blow up; too small and nothing seems to happen. {lvl=2}
- Weights are numbers, not explanations: a network can be right without being able to say why, so check it on surprising cases. {lvl=3}
:::
