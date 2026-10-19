---
title: Clean code and abstraction
summary: Why the same one-line change takes ten minutes in one codebase and a week in another, and the habits that make the first kind.
ncert: []
up_to: SDE-2
builds_on: [Functions, Errors and testing, Git and the command line]
notes_prompt: Explain to a friend who has never programmed why "code that works" is not the same as "code that is good", and give two habits that make code easier to change.
margin:
  - kind: history
    title: History
    text: 'Martin Fowler''s book Refactoring (1999) gave the habit its name and a catalogue of small, safe moves. [Unverified: year from memory.] Google and many other companies now require a second person to read every change before it ships.'
  - kind: tip
    title: Interview favourite
    text: '"Walk me through how you would improve this messy function" is a common question. A strong answer says "first I would pin down what it does with a test", and only then renames, splits and simplifies.'
  - kind: olympiad
    title: Design link
    text: 'Abstraction is the same trick that lets you drive without knowing the engine: a good name hides the how and keeps the what. Every large system, from operating systems to UPI, is a tower of such hidden details.'
books:
  - { title: "R. C. Martin, Clean Code", ref: "Ch. 2 Meaningful Names; Ch. 3 Functions; Ch. 4 Comments [Unverified]" }
  - { title: "M. Fowler, Refactoring (2nd ed.)", ref: "Ch. 1 worked example; Ch. 2 Principles [Unverified]" }
  - { title: "J. Ousterhout, A Philosophy of Software Design", ref: "deep modules and complexity chapters [Unverified]" }
cards:
  - { front: "Why does readability matter more than cleverness?", back: "Code is read far more often than it is written, and every change begins with understanding. Time spent reading is the real cost of a change." }
  - { front: "What makes a good name?", back: "It says what the thing is or does in the reader's vocabulary, so the reader needs no comment or guess. Longer and clear beats short and cryptic." }
  - { front: "What does 'one job per function' mean?", back: "You can describe the function in one sentence without the word 'and'. If you cannot, split it." }
  - { front: "What should a comment explain?", back: "Why: the reason, the trade-off or the trap. The code already says what; a comment that repeats it goes stale." }
  - { front: "What is refactoring, and what makes it safe?", back: "Changing the structure of code without changing what it does. Tests that pass before and after, and small steps, make it safe." }
  - { front: "Name one rule of a kind code review.", back: "Comment on the code, not the person; ask a question or give a reason; separate must-fix from taste." }
core:
  idea: 'Code is written once and read many times, so its main job is to be understood by the next person. Clear names, small single-purpose functions and comments that explain why keep the cost of every future change low, and tests let you tidy without fear.'
  formulas:
    - tex: '\text{cost of a change} = \text{time to understand} + \text{time to alter} + \text{time to verify}'
      label: 'Understanding usually dominates'
  conditions:
    - 'Other people (or you in six months) will have to read and change the code'
    - 'There are tests, or you add them first, so behaviour can be checked after tidying'
    - 'Tidying is done in small steps, separate from adding features'
    - 'The team shares conventions, so names and layout look the same everywhere'
  sign: 'Clean does not mean clever or short. The commonest mistake is over-abstracting too early, which hides the code behind layers nobody asked for.'
outcomes:
  - 'Rename a confusing variable or function so its purpose is obvious without a comment'
  - 'Split a long function into small ones that each do one job'
  - 'Write comments that explain why, and delete the ones that only repeat the code'
  - 'Refactor a messy function safely, using a test as a safety net'
  - 'Give and receive code review comments that are useful and kind'
opener:
  story: |
    Your first week at a food-delivery company. It is Diwali, and your lead says: "Easy one. Free delivery should start at ₹299 instead of ₹399. One-line change."

    You open the file. The function is called `proc2`. It has 400 lines, variables named `d`, `f` and `tmp`, and a comment that says `# fix later` dated three years ago. The number 399 appears nowhere. Somewhere, a value `x > 39.9e1` might be it. Or it might not.

    The change itself would take ten seconds. Finding it, and being sure you have not broken payments, will take all day. Why is the same change quick in one codebase and a nightmare in another?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A tangled knot of lines on the left becomes three tidy labelled boxes on the right"><path d="M24 70 C70 20 110 150 60 120 C20 96 90 40 120 90 C140 130 40 170 80 190 C120 210 130 120 90 150" style="fill:none;stroke:var(--bad);stroke-width:2"/><path d="M30 190 C60 140 120 200 110 60" style="fill:none;stroke:var(--bad);stroke-width:2"/><text x="26" y="224" style="font-size:11px;fill:var(--bad)">proc2(d, f)  400 lines</text><path d="M140 120 L172 120" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M166 114 L174 120 L166 126" style="fill:none;stroke:var(--c);stroke-width:2"/><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="182" y="40" width="124" height="38" rx="6"/><rect x="182" y="100" width="124" height="38" rx="6"/><rect x="182" y="160" width="124" height="38" rx="6"/></g><text x="192" y="64" style="font-size:11px;fill:var(--ink)">delivery_fee()</text><text x="192" y="124" style="font-size:11px;fill:var(--ink)">apply_coupon()</text><text x="192" y="184" style="font-size:11px;fill:var(--ink)">total_with_tax()</text><text x="182" y="224" style="font-size:11px;fill:var(--c)">each does one job</text></svg>'
life:
  - 'A recipe that says "add the masala" is easier to follow than one that says "add 3 tsp of the thing in the second jar". Clear names are for the reader, not the cook.'
  - 'Every app update that "fixes a bug" without breaking something else depends on code that the team could read and test.'
  - 'Indian Railways timetables, GST rules and UPI apps all change often; software that can change cheaply is the only kind that keeps up.'
  - 'A road with signboards, lane markings and numbered exits is clean code for travellers: you do not need to know the city to use it.'
models:
  - name: 'Optimise for the reader'
    text: 'Most things (emails, contracts, policies, code) are written once and read often. Spend the extra minute when writing so that many readers save a minute each.'
  - name: 'Leave it tidier than you found it'
    text: 'Small, steady tidying beats a huge clean-up that never happens. Like washing a plate right after dinner, it keeps the mess from becoming a mountain.'
  - name: 'Make the change easy, then make the easy change'
    text: 'When a task is hard, first reshape the ground (safely, with a safety net) so that the real change becomes simple. This works for house moves and tax filing as much as for code.'
links:
  - leaf: 'cs/functions'
    name: 'Functions'
    same: 'A function is the basic unit of abstraction: a name wrapped around steps, so the caller thinks about what, not how.'
    differs: 'Functions teach you how to write one; clean code asks how big it should be, what to call it and how many jobs it may do.'
  - leaf: 'cs/errors-and-testing'
    name: 'Errors and testing'
    same: 'Tests state what the code must do, which is exactly what refactoring must preserve.'
    differs: 'Testing is about finding bugs; here tests are a safety net that lets you change structure without fear.'
  - leaf: 'cs/git-and-the-command-line'
    name: 'Git and the command line'
    same: 'Small commits and clear messages are clean code applied to history, which code review reads.'
    differs: 'Git records what changed; clean code decides what is worth changing and how to explain it.'
next:
  q: 'Clean functions are only the start. When a program has hundreds of them, what keeps changing one from breaking ten others, and how do you decide which pieces should know about which?'
  leaf: 'cs/design-principles-and-patterns'
  name: 'Design principles and patterns'
symbols:
  - s: 'refactoring'
    means: 'changing how code is organised without changing what it does'
  - s: 'abstraction'
    means: 'hiding the details behind a name, so users of the code think about what it does, not how'
  - s: 'code smell'
    means: 'a surface sign (long function, repeated code, vague name) that something deeper may be wrong'
  - s: 'code review'
    means: 'a teammate reads your change and comments before it is merged'
  - s: 'complexity count'
    means: 'decision points in a function (each if, loop, and, or) plus 1: a rough measure of how many paths to test'
  - s: 'technical debt'
    means: 'the extra cost of future changes caused by quick, messy choices made today'
---

:::hook
q: Here's the puzzle. Across a working week, what do professional programmers spend most of their coding time doing?
options: ["Typing new code", "Reading existing code", "Waiting for builds"]
answer: 1
right: Right. A commonly quoted rule of thumb is that reading outweighs writing roughly ten to one [Unverified: the figure is folklore, not a measured law]. Nearly every change starts with understanding what is already there, so readable code is a time machine for your team.
wrong: Typing new code is the part that feels like work, but it is the smaller part. Before a single line is typed, someone has to read and understand what is already there. That is why readability pays.
:::

## Why readable beats clever {lvl=1 id=s-why label="Foundations"}

Think of a shared kitchen where every jar is labelled "stuff". Cooking would still be possible, but every meal would start with sniffing jars. Code without clear names is that kitchen.

A program has two audiences: the computer, which does not care how it looks, and the next human, who cares a great deal. That human is often **you, six months later**, having forgotten everything.

Every change has three costs: understanding what is there, altering it, and checking nothing else broke. For messy code, the first and third dominate.

$$\text{cost of a change} = \text{time to understand} + \text{time to alter} + \text{time to verify}$$

Read it as: "most of what a change costs is the time spent understanding and checking, not typing". Clean code attacks the first and third terms.

:::qc lvl=1
q: A programmer replaces a clear 5-line loop with one dense line that nobody on the team can read quickly. What has probably gone up?
options: ["Time to type", "Time to understand", "Nothing; shorter is always better"]
answer: 1
right: Right. Short is not the same as clear. The saving of four lines is paid back every time someone has to decode the dense one.
wrong: Look at the three costs of a change. Which one grows when the code is harder to read?
:::

## Names that explain {lvl=1 id=s-names label="Foundations"}

A name is the cheapest documentation there is. The rule: a reader should know **what a thing is or does** without opening it.

```python
def calc(d, r):
    return d - d * r
```

What are `d` and `r`? Compare:

```python
def price_after_discount(price, discount_rate):
    return price - price * discount_rate
```

Same behaviour, but now the call `price_after_discount(500, 0.1)` reads like a sentence. Some habits:

| Instead of | Prefer | Why |
|---|---|---|
| `d`, `tmp`, `data2` | `delivery_fee`, `unpaid_orders` | says what it holds |
| `process()` | `send_receipt_email()` | says what it does |
| `flag` | `is_first_order` | a yes/no name reads like a question |
| `399` | `FREE_DELIVERY_ABOVE = 399` | a named constant has one place to change |

That last row solves the Diwali puzzle: if the threshold is a named constant, the "one-line change" really is one line.

## Small functions, one job {lvl=2 id=s-small label="SDE-1"}

A good test for a function: can you describe it in one sentence **without the word "and"**? "It checks the cart, charges the card, and sends the email" is three functions pretending to be one.

Here is the shape to avoid, and the shape to prefer. First, the tangle (shortened):

```python
def place_order(cart, card):
    total = 0
    for item in cart:
        total += item.price * item.qty
    if total < 399:
        total += 40
    charge(card, total)
    send_email(card.owner, total)
```

Now the same steps, with the decisions given names:

```python
def place_order(cart, card):
    total = total_with_delivery(cart)
    charge(card, total)
    send_receipt(card.owner, total)
```

The top function now reads like a table of contents. Each helper is short enough to test alone: `total_with_delivery` can be checked with a plain list and no card at all.

:::figure caption="A function that reads like a table of contents: one level of detail at a time."
<svg viewBox="0 0 410 150" role="img" aria-label="place_order calls three smaller functions">
<rect x="150" y="10" width="120" height="32" rx="6" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat);stroke-width:1.5"/>
<text x="163" y="31" style="font-size:12px;fill:var(--ink)">place_order()</text>
<path d="M180 42 L88 94 M210 42 L210 94 M240 42 L335 94" class="pen" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
<rect x="8" y="96" width="160" height="32" rx="6" style="fill:none;stroke:var(--mat);stroke-width:1.5"/>
<text x="18" y="117" style="font-size:11px;fill:var(--ink)">total_with_delivery()</text>
<rect x="176" y="96" width="70" height="32" rx="6" style="fill:none;stroke:var(--mat);stroke-width:1.5"/>
<text x="186" y="117" style="font-size:11px;fill:var(--ink)">charge()</text>
<rect x="254" y="96" width="148" height="32" rx="6" style="fill:none;stroke:var(--mat);stroke-width:1.5"/>
<text x="264" y="117" style="font-size:11px;fill:var(--ink)">send_receipt()</text>
</svg>
:::

:::qc lvl=2
q: Which function description suggests it should be split?
options: ["Returns the total of a cart", "Validates the address, saves the order and emails the customer", "Converts rupees to paise"]
answer: 1
right: Right. Three verbs joined by "and" means three jobs. Each can then be named, tested and changed on its own.
wrong: Count the verbs in each description. One job should need one verb.
:::

## Comments: say why, not what {lvl=2 id=s-comments label="SDE-1"}

A comment that repeats the code is noise, and worse, it goes stale when the code changes and the comment does not.

```python
# add 1 to count
count += 1                      # useless: the code already says it

# GST on food is billed per item, not on the bill total,
# otherwise rounding differs from the restaurant's invoice.
tax = sum(round(i.price * 0.05, 2) for i in cart)
```

The second comment gives a **reason** the code cannot show. Good comments explain **why**: a surprising choice, a trade-off, a trap, a link to the rule or bug number. If you feel the urge to write a "what" comment, first try a better name or a small function. (The 5% rate here is only an example.)

## Refactoring with a safety net {lvl=3 id=s-refactor label="SDE-2"}

**Refactoring** means changing how code is organised without changing what it does. The danger is obvious: how do you know you did not change what it does? Answer: **tests**, and small steps.

Suppose you inherit an untested function. Do not tidy yet. First, write a **characterisation test**: run the function with a few inputs and record what it *actually* returns, even if you think a result is odd.

```python
def test_delivery_fee_today():
    assert delivery_fee(398) == 40
    assert delivery_fee(399) == 0    # boundary: is it > or >=?
    assert delivery_fee(0) == 40
```

Now the recipe:

1. Run the tests: green.
2. Make **one** small move (rename, extract a function, replace a magic number).
3. Run the tests: still green? Commit. If red, undo and try a smaller move.
4. Repeat. Never mix refactoring and new features in one commit; a reviewer cannot tell which change caused which behaviour.

Common moves from Fowler's catalogue: rename, extract function, inline a pointless function, replace a flag argument with two functions, remove duplicated code. A function that takes a boolean `send_email=True` usually hides two functions inside one.

:::qc lvl=3
q: You must change a messy, untested function. What is the best first step?
options: ["Rewrite it from scratch", "Write tests that capture what it does today", "Add a comment saying it is messy"]
answer: 1
right: Right. Tests that pin down current behaviour are your safety net; without them you cannot tell a refactor from a bug.
wrong: How would you know a rewrite behaves like the original? Something has to check it.
:::

## Abstraction without regret {lvl=3 id=s-abstraction label="SDE-2"}

**Abstraction** hides detail behind a name, so a caller thinks about *what*, not *how*. `send_receipt(person, total)` hides templates, servers and retries. This is what makes big programs possible: nobody holds all of it in their head.

But abstraction has a cost. A badly chosen one is worse than copy-paste:

- **The rule of three**: tolerate a bit of duplication the first and second time. On the third, you know what really varies, so you can abstract correctly.
- **Wrong abstraction**: two pieces of code look alike today but change for different reasons. Merging them forces every change to carry flags (`if is_vip:`) and the shared function becomes a knot. Duplication is cheaper than the wrong abstraction.
- **Deep versus shallow**: a good abstraction hides a lot behind a small, simple interface (Ousterhout's "deep module"). A function that merely renames another one adds a hop and hides nothing.

Test any abstraction by asking: *can a caller use it without reading its insides?*

## Code review etiquette {lvl=3 id=s-review label="SDE-2"}

In **code review**, a teammate reads your change before it merges. It catches bugs, spreads knowledge and keeps the style shared. It also touches feelings, so manners matter.

As **author**:
- Keep changes small (a few hundred lines at most). Big changes get skimmed.
- Explain *why* in the description; link the task. Say how you tested.
- Read your own diff first. Reviewers should not find what a quick look would.
- Treat comments as help for the code, not as judgement of you. Say thanks, then fix or explain.

As **reviewer**:
- Comment on the code, never the person: "this loop is hard to follow" not "you write confusing code".
- Give a reason or ask a question: "What happens if `cart` is empty?" invites a talk; "wrong" ends it.
- Mark the weight: **must fix** (bug, security) versus **nit** (taste). Do not block a merge on taste.
- Praise good things too. Respond within a day: a waiting review stalls a teammate.
- Let machines argue about spacing: formatters and linters should handle style so humans discuss design.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Code is read far more often than written; optimise for the next reader, who may be you. {lvl=1}
2. A good name says what a thing is or does; replace magic numbers with named constants. {lvl=1}
3. One job per function: describe it without "and"; the top function reads like a table of contents. {lvl=2}
4. Comments explain why (reasons, traps), not what the code already says. {lvl=2}
5. Refactor in small steps with tests green before and after; keep refactors apart from features. {lvl=3}
6. Abstract on the third repetition, and prefer a little duplication to the wrong abstraction. {lvl=3}
7. Review the code, not the person: small changes, reasons, must-fix versus nit. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Clean" is not "clever" or "short": if a teammate needs a minute to decode a line, it is too dense. {lvl=1}
- Names that lie are worse than vague names: a function called `get_user` that also deletes a session is a trap. {lvl=2}
- Comments rot: if the code changes, update or delete the comment. {lvl=2}
- Refactoring without tests is gambling; refactoring mixed with new features hides bugs. {lvl=3}
- Over-abstraction (layers, interfaces and helpers nobody asked for) is as costly as a mess. {lvl=3}
- A review that only nitpicks style while missing a missing-check bug has failed; look at behaviour first. {lvl=3}
:::
