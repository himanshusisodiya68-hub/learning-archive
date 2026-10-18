---
title: Transformers and large language models
summary: How a program that only guesses the next small piece of text can write essays, answer questions and sometimes confidently make things up.
ncert: []
up_to: SDE-3
builds_on: [Neural networks, Linear regression and gradient descent]
notes_prompt: Explain to a friend why an AI chatbot can write a fluent paragraph and still invent a fact, using the words next-token prediction and attention.
margin:
  - kind: history
    title: History
    text: 'The transformer design was introduced in the 2017 paper "Attention Is All You Need" by researchers at Google. Within a few years it replaced older designs for language, and then spread to images, audio and protein structures. [Unverified: details from memory]'
  - kind: tip
    title: Interview favourite
    text: 'Be ready to write attention from memory: scores = Q Kᵀ / √d, softmax each row, multiply by V. Then say why the √d is there (keeps the scores from growing with dimension and making softmax too sharp) and why cost is quadratic in length.'
  - kind: olympiad
    title: Design link
    text: 'Long conversations are expensive because every new token must look back at every earlier one. The memory kept for that (the KV cache) often limits how many users one machine can serve at once. Context length is a cost decision, not just a feature.'
books:
  - { title: "A. Vaswani et al., Attention Is All You Need (2017 paper)", ref: "the whole paper; the model description is short" }
  - { title: "J. Jurafsky and J. Martin, Speech and Language Processing", ref: "chapters on transformers and large language models [Unverified: chapter numbers]" }
  - { title: "C. Huyen, AI Engineering", ref: "the chapters on foundation models and evaluation [Unverified: chapter numbers]" }
cards:
  - { front: "What is the one job an LLM is trained to do?", back: "Given the text so far, produce a probability for every possible next token, then pick one. Everything else (answers, code, summaries) comes from repeating this." }
  - { front: "What is a token?", back: "A small piece of text, often a short word or part of a word. In English roughly 3 to 4 characters, or about three-quarters of a word, on average. [Rule of thumb]" }
  - { front: "What is an embedding?", back: "A list of numbers standing for a token. Learned so that tokens used in similar ways point in similar directions: meaning as direction." }
  - { front: "What does attention compute?", back: "For each token, a weighted average of information from other tokens, where the weights say which ones matter to this one: softmax(Q Kᵀ / √d) V." }
  - { front: "Pretraining versus fine-tuning?", back: "Pretraining: learn to predict the next token on a huge pile of text. Fine-tuning: continue training on a smaller, targeted set (such as good instruction-following answers) to shape behaviour." }
  - { front: "Why do language models hallucinate?", back: "They are trained to produce plausible text, not to check truth. When the facts are rare or missing, the most plausible-sounding continuation is still a fluent, confident one." }
core:
  idea: 'A large language model reads text as tokens, turns each into a list of numbers that carries meaning, and uses attention to let every token gather information from the tokens that matter to it. It is trained on one task, predicting the next token, and generates text by repeating that guess.'
  formulas:
    - tex: '\mathrm{softmax}(z)_i = \dfrac{e^{z_i}}{\sum_j e^{z_j}}'
      label: 'Turns any list of scores into probabilities that add to 1'
    - tex: '\mathrm{Attention}(Q,K,V) = \mathrm{softmax}\!\left(\dfrac{QK^{\top}}{\sqrt{d_k}}\right)V'
      label: 'Each token takes a weighted blend of the values of the tokens it attends to'
  conditions:
    - 'The text is split into tokens from a fixed vocabulary, and the model sees only a limited window of them (the context window)'
    - 'Training text is large and varied; what the model knows is what that text made likely'
    - 'The model has no built-in way to look things up or check them unless it is given tools or retrieved documents'
    - 'Output is sampled from probabilities, so the same prompt can give different answers'
  sign: 'Fluent is not the same as true. The model''s confidence in its tone tells you nothing about whether the content is right; verify anything that matters.'
outcomes:
  - 'Explain next-token prediction and how a paragraph is produced one piece at a time'
  - 'Describe tokens and embeddings, and compute the similarity of two embeddings'
  - 'Explain attention as "which words matter to this word" and compute a tiny example'
  - 'Describe a transformer block, the cost of attention, and the pretraining versus fine-tuning split'
  - 'Explain why hallucinations happen and choose a mitigation (retrieval, tools, verification)'
opener:
  story: |
    On your phone keyboard, type "I am going to the" and three little suggestions appear: *market*, *gym*, *airport*. That is a program guessing what comes next, and it is right often enough to be useful.
    
    Now imagine the same guessing game played by something that has seen a vast amount of text, can look at your whole conversation rather than the last two words, and makes each guess with billions of learned numbers. Ask it to explain tides, and it writes the first small piece of an answer. Then it treats what it just wrote as part of the text, and guesses the next piece. And the next.
    
    That is all it does, over and over. So how can guessing the next word produce an explanation, a poem, a working program, and sometimes a very confident lie?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="The word it points back strongly to animal and weakly to street"><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="46" y="190">animal</text><text x="150" y="190">street</text><text x="270" y="190">it</text></g><g style="fill:none;stroke-linecap:round"><path d="M270 172 C270 60 46 60 46 172" style="stroke:var(--c);stroke-width:4"/><path d="M270 172 C270 110 150 110 150 172" style="stroke:var(--muted);stroke-width:1.2;opacity:0.7"/></g><text x="160" y="40" style="font-size:11px;fill:var(--c);text-anchor:middle">"The animal did not cross the street</text><text x="160" y="56" style="font-size:11px;fill:var(--c);text-anchor:middle">because it was too tired": who is it?</text><text x="160" y="226" style="font-size:10px;fill:var(--muted);text-anchor:middle">line thickness = attention weight (illustrative)</text></svg>'
life:
  - 'Chat assistants, writing helpers and code autocomplete in editors are all next-token predictors with extra training on top.'
  - 'Your phone keyboard''s word suggestions are the small ancestor of the same idea.'
  - 'Search engines and email apps use language models to summarise results and suggest replies.'
  - 'Translation, captions on videos and voice assistants rely on transformer-style models, often trained on far more than text.'
models:
  - name: 'Prediction can look like understanding'
    text: 'To guess the next word well across all of human writing, a model has to absorb a lot of grammar, facts and patterns of reasoning. But predicting well is not the same as knowing. A skilled mimic and an expert can sound alike until a surprising question separates them.'
  - name: 'Ask "which of these matters to this?"'
    text: 'Attention is a general move: do not give every input equal weight; weigh each by relevance to the question at hand. A good editor, a good doctor reading a long file, and a good search engine all do this.'
  - name: 'Plausible is not the same as true'
    text: 'Anything optimised for sounding right will, at the edges of what it knows, produce things that sound right. Confident tone in a salesperson, a pundit or a chatbot is not evidence. Ask what would check the claim.'
links:
  - leaf: 'cs/neural-networks'
    name: 'Neural networks'
    same: 'A transformer is built from the same ingredients: weighted sums, nonlinearities, layers, and training by backpropagation and gradient descent on a loss.'
    differs: 'A plain network takes a fixed-size input; attention lets the model weigh any earlier token against any other, so it handles text of any length up to its window.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Attention is a soft lookup: a query is compared with keys to fetch values, just as a hash table uses a key to fetch a value.'
    differs: 'A hash table returns exactly one value for an exact key match; attention returns a weighted blend of all values, with weights that are learned.'
  - leaf: 'mat/conditional-probability-and-bayes'
    name: 'Conditional probability'
    same: 'The model outputs the probability of the next token given everything before it: a conditional probability.'
    differs: 'The probabilities come from a learned function with billions of numbers, not from counting events or applying a formula you can write down.'
next:
  q: 'The model sounds sure and is sometimes wrong. If you are going to rely on it for homework, code or decisions, how do you work with a helper that is fast, tireless, well read and overconfident?'
  leaf: 'cs/using-ai-well'
  name: 'Using AI tools well'
symbols:
  - s: 'Q,\;K,\;V'
    means: 'query, key, value: three lists of numbers made from each token; a token''s query is compared with other tokens'' keys, and the matching values are blended'
  - s: 'd_k'
    means: 'length of a key (count of numbers); the square root keeps scores from growing with it'
  - s: '\mathrm{softmax}'
    means: 'function that turns scores into positive weights adding to 1; bigger score, bigger weight'
  - s: 'z_i'
    means: 'score for option i before softmax (no unit)'
  - s: 'n'
    means: 'number of tokens in the context window (count)'
  - s: 'd'
    means: 'width of the model: how many numbers represent one token (count)'
  - s: 'T'
    means: 'temperature: divide the scores by T before softmax; low T is cautious, high T is adventurous'
---

:::hook
q: Here's the puzzle. When an AI assistant writes you a 300-word answer, what is it actually doing, step by step?
options: ["Looking up the stored answer to your question", "Guessing one small piece of text at a time, over and over, each guess using everything before it", "Searching the web and pasting the best page"]
answer: 1
right: Right. The core is repeated next-token prediction. (Products may add extras, like web search or tools, around this core; how any specific product does so is not public in detail. [Inference])
wrong: There is no stored answer sheet for your question; nobody wrote it in advance. What simple, repeatable step could build a paragraph from nothing?
:::

## One trick: guess the next piece {lvl=1 id=s-next label="Foundations"}

A **language model** takes the text so far and answers one question: what comes next? Not with one word, but with a probability for every possible next piece. After "The capital of France is", a good model puts most of the probability on " Paris". Then the program picks a piece (usually a likely one, with some randomness), adds it to the text, and asks again.

| Next piece after "The capital of France is" | Probability (illustrative) |
|---|---|
| Paris | 0.92 |
| a | 0.03 |
| located | 0.02 |
| everything else, thousands of pieces | 0.03 |

These numbers are made up for illustration, but the shape is real: a long list of options with most of the weight on a few. The model never "decides to answer". It keeps continuing the text so that it looks like text that would plausibly come next.

The pieces are called **tokens**: short words, parts of long words, punctuation. In English, a token is roughly three-quarters of a word on average. [Rule of thumb; it varies by language and by tokeniser.] So 300 words is about 400 tokens, and 400 small guesses.

:::qc lvl=1
q: Why can the same question get different answers on two tries?
options: ["The next piece is chosen with some randomness from the probabilities, and early differences compound", "The model forgets between tries", "The internet changed in between"]
answer: 0
right: Right. Picking among likely options is partly random, and each early choice changes everything that follows.
wrong: If the model always picked the single most likely piece, answers would repeat. What does it do instead?
:::

## Meaning as direction {lvl=1 id=s-embed label="Foundations"}

A computer cannot work with the word "cat"; it needs numbers. The trick is to give every token a list of numbers, called an **embedding**, chosen by training so that tokens used in similar ways get similar lists. Think of each list as an arrow pointing somewhere in a space with hundreds or thousands of directions. "Cat" and "dog" turn up in similar sentences, so their arrows point almost the same way. "Car" points elsewhere. Meaning becomes **direction**.

To measure "pointing the same way" we use the **cosine similarity**: 1 means same direction, 0 means unrelated (at right angles). Real embeddings are learned, not typed in; these three-number ones are made up to show the idea.

```python
import numpy as np
def cos(a, b):
    return a @ b / (np.linalg.norm(a) * np.linalg.norm(b))

cat = np.array([0.9, 0.8, 0.1])
dog = np.array([0.85, 0.75, 0.2])
car = np.array([0.1, 0.2, 0.95])
print(cos(cat, dog), cos(cat, car))   # about 0.996 and 0.293
```

Read the code as: multiply the two arrows' matching numbers and add them (the dot product), then divide by both lengths, so only direction is compared. Famous early experiments with word embeddings found that directions even carry relations, like "king minus man plus woman lands near queen". [Unverified: result recalled from memory, and it works only roughly.]

:::qc lvl=1
q: Two tokens have cosine similarity near 0. What does that suggest?
options: ["They are used in unrelated ways", "They are the same word", "They always appear together"]
answer: 0
right: Right. Near 0 means the arrows are roughly at right angles: no shared direction, so little shared usage.
wrong: Similarity near 1 means same direction. Near 0 means nothing in common. What kind of words would that be?
:::

## Attention: which words matter to this word {lvl=2 id=s-attn label="SDE-1"}

Read: "The animal did not cross the street because it was too tired." What does "it" mean? The animal, not the street. You answered by looking back and weighing the earlier words, giving "animal" a lot of attention and "street" very little. A model needs the same skill for every word.

**Attention** does it with three lists of numbers per token, made from its embedding. Think of a library. Each book has a **key** (its title). You bring a **query** (what you are looking for). Compare your query with every key to get a **score**, turn the scores into weights that sum to 1 (softmax), and take a weighted blend of what the books actually contain, their **values**.

$$\mathrm{Attention}(Q,K,V) = \mathrm{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}}\right)V$$

Read it as: "score every query against every key, shrink the scores a little, turn each row into weights that add to 1, then blend the values using those weights." The shrinking by $\sqrt{d_k}$ stops large vectors from producing huge scores that would make softmax pick one winner too sharply.

```python
import numpy as np
def attention(Q, K, V):
    s = Q @ K.T / np.sqrt(K.shape[1])            # scores: query vs each key
    w = np.exp(s - s.max(-1, keepdims=True))     # softmax (shifted for safety)
    w /= w.sum(-1, keepdims=True)
    return w @ V, w

Q = np.array([[1.0, 0.0]])
K = np.array([[1.0, 0.0], [0.0, 1.0], [1.0, 1.0]])
V = np.array([[10.0, 0], [0, 10.0], [5.0, 5.0]])
out, w = attention(Q, K, V)    # w ~ [0.40, 0.20, 0.40]; out ~ [6.02, 3.98]
```

The query matches keys 1 and 3 well and key 2 poorly, so the weights are about 0.40, 0.20, 0.40, and the output is a blend dominated by values 1 and 3. In a real model the queries, keys and values are produced by learned matrices, so the model learns *what to look for*.

:::qc lvl=2
q: Attention weights for one token come out as 0.40, 0.20, 0.40. What must be true of them?
options: ["They add up to 1, because softmax makes them a set of shares", "They must be all different", "They are the token's embedding"]
answer: 0
right: Right. Softmax outputs are positive and sum to 1, so they work as shares of attention to split among the other tokens.
wrong: Look at the three numbers. What do they add up to, and what part of the formula forces that?
:::

## The transformer block, and the cost of looking back {lvl=3 id=s-block label="SDE-2"}

A **transformer** stacks the same block many times. One block does two things to every token's list of numbers:

1. **Attention**: gather information from other tokens (many separate attention "heads" in parallel, each free to look for something different).
2. **A small neural network** applied to each token on its own: process what was gathered.

Around both are **residual connections** (add the input back to the output, so signals and blame have shortcuts, as in the neural-networks lesson) and **normalisation** (keep numbers in a steady range). Because attention itself ignores word order, position information is added to the embeddings. For generating text, a **causal mask** forbids a token from attending to later tokens: while predicting, it may only look back.

Two numbers describe the size. If each token is $d$ numbers wide and there are $L$ blocks, a common estimate is about $12\,d^2 L$ weights in the blocks (4d² for attention, 8d² for the small network), ignoring the embedding table. [Unverified: standard back-of-envelope figure; real designs vary.] For $d = 4096$ and $L = 32$ that is about 6.4 billion.

The **cost of attention** is the catch. Every token is scored against every earlier token, so $n$ tokens need about $n^2$ scores. Ten times the context is a hundred times the scores.

```python
def n_scores(n):
    return n * n          # every token against every token (before masking)

n_scores(2_000), n_scores(8_000)      # 4,000,000 and 64,000,000: 16 times more
```

:::qc lvl=3
q: You quadruple the context length. About how much more attention computation per layer?
options: ["4 times", "16 times", "64 times"]
answer: 1
right: Right. Cost grows with n squared, and 4 squared is 16.
wrong: Every token looks at every other. If n goes up by 4, what happens to n × n?
:::

## Pretraining, fine-tuning, and what each gives you {lvl=3 id=s-train label="SDE-2"}

**Pretraining.** Show the model an enormous amount of text, hide the next token, make it guess, measure the loss (how much probability it gave the true token), and adjust all the weights by gradient descent. After this, the model is a very good text continuer, but it just continues: ask a question and it may continue with *more questions*, as web pages often do.

**Fine-tuning.** Continue training on a smaller, targeted set: examples of helpful answers to instructions, for instance. Some systems also use **human feedback**: people rank candidate answers, and the model is nudged toward the ones people prefer. This shapes behaviour (helpful, polite, declines some requests) far more than it adds knowledge. What data, how much, and what exact methods any particular commercial assistant uses is not fully public. [Inference: the general recipe above is widely described; specifics for any one product are unverified.]

| Stage | Data | Teaches | Rough cost |
|---|---|---|---|
| Pretraining | huge, mostly unlabelled text | language, facts, patterns | by far the largest |
| Fine-tuning | small, curated examples | style, following instructions | much smaller |
| Prompting | the text you write at use time | the task of the moment | nearly free |

## Why models make things up {lvl=3 id=s-hallu label="SDE-2"}

A **hallucination** is fluent output that is false: a made-up quote, an invented book, a plausible but wrong date. It is not a rare glitch; it follows from how the model is built.

1. **The training goal is plausibility, not truth.** The loss rewards putting probability on text that looks like the training text. A true sentence and a convincing false one can score alike.
2. **Rare facts leave a faint trace.** Facts seen thousands of times are well learned. A fact seen once, or never, is a weak signal, and the model fills the gap with the most typical-looking thing.
3. **There is no built-in "I don't know".** Pieces must be produced; admitting ignorance is just one more continuation, and the training text rarely contains it where it should.
4. **Fluency hides it.** The same smooth tone covers right and wrong content, so you cannot spot errors by style.

What reduces it: giving the model the facts in the prompt (**retrieval**: fetch relevant documents first and put them in the context), letting it call tools (a calculator, a search, a database), asking for sources and then opening them, and independent verification of anything that matters. None removes the problem completely.

:::qc lvl=3
q: A model gives a perfect-looking citation for a paper. What is the right first step?
options: ["Trust it because the format is perfect", "Look the paper up in a library or search engine", "Ask the model whether it is sure"]
answer: 1
right: Right. Check against an independent source. Asking the model whether it is sure just produces another fluent continuation, which is no evidence either way.
wrong: A perfect format is exactly what plausible-text prediction is good at. What would be independent evidence the paper exists?
:::

## Serving it at scale: memory, cost and design choices {lvl=4 id=s-scale label="SDE-3"}

When generating, the model must not recompute attention for old tokens on every step. It saves each past token's keys and values in a **KV cache**. The memory per token is about $2\,(\text{keys and values}) \times d \times L \times \text{bytes per number}$. For $d=4096$, $L=32$ and 2 bytes per number, that is $2\times4096\times32\times2 = 524{,}288$ bytes, about half a megabyte per token. A single conversation of 100,000 tokens would then hold about 52 GB. [Inference: assumes plain multi-head attention; many real systems shrink this by sharing keys and values across heads, and no particular product's numbers are implied.]

That is why serving is a trade-off between context length, number of simultaneous users and hardware cost. The knobs an engineer actually has:

- **Sampling temperature $T$**: divide the scores by $T$ before softmax. Low $T$ (say 0.5) concentrates probability on the top choice; high $T$ spreads it. For scores $(2, 1, 0)$, the top token gets 0.67 at $T=1$, 0.87 at $T=0.5$ and 0.51 at $T=2$.
- **Prompt, retrieve, or fine-tune?** Put facts into the prompt or retrieve them when knowledge changes or must be traceable; fine-tune when you need a consistent style or format; do not fine-tune merely to "add facts", which it does unreliably. [Inference: common engineering guidance, not a theorem.]
- **Evaluation**: build a fixed test set of realistic inputs and track pass rate whenever you change the model, prompt or retrieval. Without it you are guessing.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A language model predicts a probability for the next token and generates text by repeating the guess. {lvl=1}
2. Tokens become embeddings: lists of numbers where similar use means similar direction. {lvl=1}
3. Attention lets each token blend information from other tokens by relevance: softmax(QKᵀ/√d)V. {lvl=2}
4. A transformer stacks blocks of attention plus a small network, with residual connections; attention cost grows as n². {lvl=3}
5. Pretraining teaches language and facts on huge text; fine-tuning shapes behaviour; prompting steers the moment. {lvl=3}
6. Hallucination follows from training for plausibility; reduce it with retrieval, tools and verification. {lvl=3}
7. Serving is a memory and cost trade-off (KV cache, context length, temperature, evaluation). {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A confident tone is not evidence. The model sounds the same when right and wrong. {lvl=1}
- Asking the model "are you sure?" is not verification; it just produces more fluent text. {lvl=2}
- Models do not browse the web or remember you unless the product adds those features around them. {lvl=2}
- A token is not a word: counts, costs and limits are in tokens, and non-English text can use more tokens per word. {lvl=2}
- Quadratic attention means doubling a long prompt can far more than double the cost. {lvl=3}
- Do not claim how a specific commercial model works inside unless its makers have published it; most details are not public. {lvl=3}
:::
