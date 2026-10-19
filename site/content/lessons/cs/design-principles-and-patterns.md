---
title: Design principles and patterns
summary: Why adding a new payment method takes a day in one app and months in another, and the design habits behind the difference.
ncert: []
up_to: SDE-3
builds_on: [Clean code and abstraction, Objects and classes, Functions]
notes_prompt: Explain to a friend why a program built from pieces that know little about each other is easier to change, using an everyday example such as a phone charger or a school timetable.
margin:
  - kind: history
    title: History
    text: 'The book Design Patterns by Gamma, Helm, Johnson and Vlissides (the "Gang of Four", 1994) catalogued 23 recurring solutions, borrowing the idea from the architect Christopher Alexander. [Unverified: year and count from memory.] The SOLID acronym was popularised by Robert C. Martin in the early 2000s. [Unverified]'
  - kind: tip
    title: Interview favourite
    text: '"Design a parking lot" or "design a notification system" asks for classes with clear jobs and a way to add new kinds without editing old code. Say "strategy" or "observer" only if it fits, then explain why in plain words.'
  - kind: olympiad
    title: Design link
    text: 'Conway''s law says a system''s structure tends to copy its organisation''s communication lines. [Unverified: attributed to Melvin Conway, late 1960s.] Decide module boundaries and team boundaries together.'
books:
  - { title: "E. Gamma et al., Design Patterns", ref: "Strategy, Observer, Adapter, Factory Method chapters [Unverified]" }
  - { title: "R. C. Martin, Clean Architecture", ref: "SOLID principles part [Unverified]" }
  - { title: "J. Ousterhout, A Philosophy of Software Design", ref: "deep modules; complexity [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 4 Encoding and Evolution: evolvability of interfaces [Unverified]" }
cards:
  - { front: "What is coupling, and is more or less better?", back: "How much one piece of code knows about or depends on another. Less is better: a change in one place then ripples to fewer others." }
  - { front: "What is cohesion, and is more or less better?", back: "How closely the parts inside one module belong together. More is better: everything in the module serves one purpose." }
  - { front: "SOLID in five phrases", back: "One reason to change; extend without editing; subtypes keep their promises; small focused interfaces; depend on abstractions, not details." }
  - { front: "What does the strategy pattern do?", back: "Packs interchangeable ways of doing one job (UPI, card, wallet) behind one shape, so the caller picks one without if-else chains." }
  - { front: "What does the observer pattern do?", back: "Lets something announce an event ('order placed') to anyone who subscribed, without knowing who they are." }
  - { front: "When do patterns hurt?", back: "When used before there is a real need: extra layers, names and files that hide simple code. Patterns solve a problem; no problem, no pattern." }
core:
  idea: 'Good design keeps the blast radius of a change small: pieces that change together live together (high cohesion), and pieces that change separately know little about each other (low coupling). SOLID and the classic patterns are named ways to achieve that, and are worth using only when the problem they solve is real.'
  formulas:
    - tex: '\text{blast radius} = \text{number of places that depend on what you change}'
      label: 'Design aims to keep this small and known'
  conditions:
    - 'The code will keep changing, so cheap change is worth some upfront structure'
    - 'You can name the kind of change you expect (a new payment method, a new alert type)'
    - 'Interfaces between pieces are kept small and stable'
    - 'The structure is no more elaborate than the problem needs'
  sign: 'The commonest mistake is applying a pattern because it exists, not because a problem called for it. Three clear lines beat a factory of factories.'
outcomes:
  - 'Describe coupling and cohesion and spot both in a messy design'
  - 'Explain each SOLID principle in a sentence with an example'
  - 'Recognise when strategy, observer, adapter or factory fits, and write a small version'
  - 'Judge when a pattern adds layers without value'
  - 'Outline a short design document that states goals, alternatives and trade-offs'
opener:
  story: |
    A shopping app launches with two ways to pay: cards and UPI. A year later the business wants to add wallets. It takes one developer a day. Another year, buy-now-pay-later is added, and this time it takes six months, because the word "card" appears in 140 files.

    Same company, same team, same programming language. In the first change, a developer added one new piece and wired it in. In the second, every file that had assumed "payment means card or UPI" had to be found and edited, and each edit could break something far away.

    So what was different about the way the code was put together, and can you decide it before the first line is written?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A hub-shaped design with a new box plugging in, versus a web of lines where changing one box affects every other"><g style="fill:none;stroke:var(--bad);stroke-width:1.2"><path d="M60 40 L30 100 L90 100 Z M60 40 L90 100 M60 40 L30 100"/><path d="M30 100 L60 160 L90 100 M60 160 L60 40 M30 100 L90 100 L60 160"/></g><g style="fill:color-mix(in srgb,var(--bad) 12%,var(--surface));stroke:var(--bad)"><circle cx="60" cy="40" r="9"/><circle cx="30" cy="100" r="9"/><circle cx="90" cy="100" r="9"/><circle cx="60" cy="160" r="9"/></g><text x="22" y="198" style="font-size:11px;fill:var(--bad)">change one,</text><text x="22" y="212" style="font-size:11px;fill:var(--bad)">break many</text><g style="fill:none;stroke:var(--c);stroke-width:1.5"><path d="M240 46 L240 88 M208 100 L214 100 M272 100 L266 100 M240 112 L240 158"/></g><rect x="214" y="88" width="52" height="24" rx="5" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"/><text x="223" y="104" style="font-size:10px;fill:var(--ink)">Payment</text><g style="fill:var(--surface);stroke:var(--c)"><rect x="224" y="26" width="32" height="20" rx="4"/><rect x="176" y="90" width="32" height="20" rx="4"/><rect x="272" y="90" width="32" height="20" rx="4"/><rect x="224" y="158" width="32" height="20" rx="4" style="stroke-dasharray:3 2"/></g><text x="228" y="40" style="font-size:9px;fill:var(--ink)">UPI</text><text x="182" y="104" style="font-size:9px;fill:var(--ink)">Card</text><text x="276" y="104" style="font-size:9px;fill:var(--ink)">Wallet</text><text x="228" y="172" style="font-size:9px;fill:var(--ink)">new</text><text x="190" y="198" style="font-size:11px;fill:var(--c)">add a box,</text><text x="190" y="212" style="font-size:11px;fill:var(--c)">touch nothing</text></svg>'
life:
  - 'A phone charger works with any socket and any phone of the right type: the plug is a small, agreed shape (an interface), so neither side knows the other''s insides.'
  - 'A school timetable keeps each subject in its own period, so changing maths does not move games. That is cohesion and low coupling.'
  - 'UPI itself: one shared interface lets any app talk to any bank, and a new bank joins without every app being rewritten.'
  - 'WhatsApp group notifications: the group announces a message, and each member''s phone decides how to react. That is the observer idea.'
models:
  - name: 'Small, stable interfaces'
    text: 'Standard shapes (a plug, a shipping container, a PDF) let many parties cooperate without knowing each other. When you design anything shared, keep the shared part small and unchanging, and let the insides vary.'
  - name: 'Separate what changes from what stays'
    text: 'Find the part that varies (payment methods, tax rules, a ceremony menu) and fence it off from the part that does not. Then change touches only the fence.'
  - name: 'Solve the problem you have'
    text: 'Structure is a cost you pay now for flexibility you might never need. Add it when a real second case appears, and keep decisions you can undo cheap. It is good advice for money, hiring and houses, too.'
links:
  - leaf: 'cs/clean-code'
    name: 'Clean code and abstraction'
    same: 'Both reduce the cost of future change: clean code at the level of lines and functions, design at the level of whole modules.'
    differs: 'Clean code asks "can I read this?"; design asks "what else breaks when I change this?"'
  - leaf: 'cs/objects-and-classes'
    name: 'Objects and classes'
    same: 'SOLID and patterns are usually shown with classes, because a class bundles data with the behaviour that belongs to it.'
    differs: 'Classes are the tool; principles tell you where to cut. A bad design can be made of perfectly valid classes.'
  - leaf: 'cs/apis'
    name: 'APIs (REST and beyond)'
    same: 'An API is an interface between teams or companies: the same low-coupling idea, but with real users who cannot be edited.'
    differs: 'Inside one program you can change both sides at once; a public API must stay compatible for years.'
  - leaf: 'cs/functional-ideas'
    name: 'Functional programming ideas'
    same: 'In Python, a strategy is often just a function passed as an argument: the same idea with no class needed.'
    differs: 'Patterns grew up in class-heavy languages; functional style often gets the same flexibility with less ceremony.'
next:
  q: 'You now know how to shape code so it can change. But what does the user actually see and tap? How does a few lines of structure turn into a page in a browser, and what are the first building blocks of every website?'
  leaf: 'cs/html-css'
  name: 'HTML and CSS: structure and style'
symbols:
  - s: 'coupling'
    means: 'how much one piece of code depends on or knows about another (less is better)'
  - s: 'cohesion'
    means: 'how strongly the parts inside one module belong together (more is better)'
  - s: 'interface'
    means: 'the small, agreed shape through which other code uses a module, with its insides hidden'
  - s: 'SOLID'
    means: 'five design principles: single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion'
  - s: 'design pattern'
    means: 'a named, reusable solution to a problem that keeps coming up (strategy, observer, adapter, factory)'
  - s: 'n(n-1)'
    means: 'number of one-way dependencies if each of n modules may depend on every other (count)'
---

:::hook
q: Here's the puzzle. A shopping app must add a brand-new payment method. In a well-designed app, how many existing files should need editing?
options: ["Every file that mentions payment", "About ten, the central ones", "Ideally none: you add one new piece and register it"]
answer: 2
right: Right. That is the aim of the **open/closed** idea: open to extension, closed to editing. Real systems rarely reach zero, but the closer you get, the safer every change is. (How a given company's code actually looks is usually not public. [Inference])
wrong: If the answer is "every file", the next payment method will be as slow and risky as the last. A good design pushes the differences between methods into one place, so a new one is mostly new code.
:::

## Coupling and cohesion {lvl=1 id=s-coupling label="Foundations"}

Think of two kinds of kitchen. In the first, every cook uses everyone's tools, borrows from every shelf, and rearranging one shelf upsets all of them. In the second, each station (chopping, frying, plating) has its own tools and passes plates through a hatch.

Two words describe the difference:

- **Coupling**: how much one piece of code depends on another. Tight coupling means a change in one forces changes in others. **Less is better.**
- **Cohesion**: how well the things inside one module belong together. A module called `utils` with email code, date code and tax code has low cohesion. **More is better.**

Count the cost. If each of $n$ modules may depend on every other, there are $n(n-1)$ one-way links to keep in step:

$$\text{links} = n(n-1)$$

Read it as: "each module may lean on all the others, so with 10 modules you have 90 links". Route everything through one small interface and the number drops to about $n$.

:::figure caption="Left: every module knows every other, 20 links for 5 modules. Right: each knows only the shared interface, 5 links."
<svg viewBox="0 0 360 150" role="img" aria-label="Five modules fully connected versus five modules connected to one hub">
<path class="faint" d="M80 24 L127 59 M80 24 L109 116 M80 24 L51 116 M80 24 L33 59 M127 59 L109 116 M127 59 L51 116 M127 59 L33 59 M109 116 L51 116 M109 116 L33 59 M51 116 L33 59" style="fill:none;stroke:var(--muted);stroke-width:1"/>
<g class="obj" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><circle cx="80" cy="24" r="8"/><circle cx="127" cy="59" r="8"/><circle cx="109" cy="116" r="8"/><circle cx="51" cy="116" r="8"/><circle cx="33" cy="59" r="8"/></g>
<path class="pen" d="M260 24 L260 70 M307 59 L260 70 M289 116 L260 70 M231 116 L260 70 M213 59 L260 70" style="fill:none;stroke:var(--mat);stroke-width:1.5"/>
<rect x="244" y="60" width="32" height="20" rx="5" style="fill:color-mix(in srgb,var(--mat) 16%,var(--surface));stroke:var(--mat)"/>
<g class="obj" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><circle cx="260" cy="24" r="8"/><circle cx="307" cy="59" r="8"/><circle cx="289" cy="116" r="8"/><circle cx="231" cy="116" r="8"/><circle cx="213" cy="59" r="8"/></g>
<text x="236" y="144" style="font-size:10px;fill:var(--muted)">interface</text>
<text x="30" y="144" style="font-size:10px;fill:var(--muted)">web of links</text>
</svg>
:::

:::qc lvl=1
q: A module called `helpers` holds email sending, date formatting and tax calculation. What is its main problem?
options: ["Too much coupling to the outside", "Low cohesion: unrelated things live together", "It is too short"]
answer: 1
right: Right. Things that change for different reasons share one home, so any change to one risks the others, and nobody knows where to look.
wrong: Ask whether email, dates and tax belong together. They change for different reasons.
:::

## SOLID in plain words {lvl=2 id=s-solid label="SDE-1"}

Five habits, each a way of lowering coupling or raising cohesion. You do not need to memorise the names; the sentences matter.

| Letter | Plain words | Smell when broken |
|---|---|---|
| **S**ingle responsibility | A module has one reason to change | A class that formats reports *and* sends emails *and* talks to the database |
| **O**pen/closed | Add behaviour by adding code, not by editing old code | A long `if method == "upi" ... elif ...` that grows with every new case |
| **L**iskov substitution | Anything that stands in for something else must keep its promises | A `ReadOnlyFile` subclass whose `write()` raises an error |
| **I**nterface segregation | Many small interfaces beat one big one | A class forced to implement ten methods, using two |
| **D**ependency inversion | Depend on the shape of a thing, not on a particular one; hand it in from outside | A function that creates its own database connection, so you cannot test it |

The last one is the secret of testable code. Compare:

```python
def send_alert(msg):
    gateway = RealSmsGateway()      # hard-wired
    gateway.send("+91...", msg)

def send_alert(msg, gateway):       # handed in
    gateway.send("+91...", msg)
```

In the second, a test can pass a fake gateway that records the message and sends nothing. Production passes the real one. The function knows only that something with a `send` method exists.

:::qc lvl=2
q: A class has a method `area()` that works with an `if shape == "circle" ... elif shape == "square" ...` chain. Adding triangles means editing it. Which principle does this break?
options: ["Open/closed", "Interface segregation", "Single responsibility only"]
answer: 0
right: Right. New shapes should be new pieces, each knowing its own area, so the old code stays closed to editing and open to extension.
wrong: The trouble is that every new case forces an edit to code that already works. Which principle is about that?
:::

## Four patterns that matter {lvl=2 id=s-patterns label="SDE-1"}

A **design pattern** is a named solution to a problem that keeps coming up. The name is useful mainly as a shared word: "use a strategy here" tells a teammate a whole idea. Four are worth knowing well.

**Strategy: interchangeable ways to do one job.** The problem is the growing `if` chain over payment methods. Put each method behind the same shape and choose by name. In Python, a function is enough:

```python
def pay_upi(amount):  ...
def pay_card(amount): ...

PAYMENTS = {"upi": pay_upi, "card": pay_card}

def checkout(amount, method):
    return PAYMENTS[method](amount)
```

A new method means one new function and one dictionary entry; `checkout` is never edited. (This is open/closed in action.)

**Observer: announce, don't call.** When an order is placed, we must send an email, update stock and add loyalty points. If `place_order` calls all three, it knows too much. Instead it announces the event, and each interested party subscribes:

```python
class Order:
    def __init__(self):
        self.listeners = []
    def subscribe(self, fn):
        self.listeners.append(fn)
    def place(self):
        for fn in self.listeners:
            fn(self)
```

Adding loyalty points is a new `subscribe` call elsewhere; `Order` does not change.

**Adapter: make a stranger fit your plug.** A new SMS vendor offers `push_text(to, body)` but your code expects `send(phone, message)`. Wrap it once and the rest of your code never learns the vendor's name:

```python
class SmsAdapter:
    def __init__(self, vendor):
        self.vendor = vendor
    def send(self, phone, message):
        self.vendor.push_text(phone, message)
```

Changing vendors later means writing one new adapter.

**Factory: one place that decides which one to build.** Callers ask for "a notifier for this user" without knowing the concrete kind:

```python
def make_notifier(kind):
    if kind == "sms":
        return SmsNotifier()
    if kind == "email":
        return EmailNotifier()
    raise ValueError(f"unknown notifier {kind}")
```

The `if` has not vanished, but it now lives in one place instead of being scattered.

:::qc lvl=2
q: Your code must call a third-party maps service that names its methods differently from your own interface. Which pattern fits?
options: ["Observer", "Adapter", "Strategy"]
answer: 1
right: Right. An adapter wraps the stranger once so the rest of the code sees your familiar shape.
wrong: Which pattern is about making one interface look like another?
:::

## When patterns hurt {lvl=3 id=s-hurt label="SDE-2"}

Patterns are cures. Taking medicine with no illness only gives side effects. Common ways they hurt:

- **Speculative generality**: building a factory, an interface and three layers for a single payment method "in case we add more". When a second one finally comes, it often differs from your guess, and you must undo the layers.
- **Indirection tax**: every layer is one more file to open and one more name to learn. A simple three-line function turned into five classes is a loss, not a gain.
- **Name worship**: citing "the strategy pattern" instead of showing why this code needs it. Judge by what the code does for readers.
- **Observer surprises**: when many listeners react to one event, order, failures and hidden dependencies become hard to trace. A listener that is never unsubscribed can also keep objects alive and leak memory.

A working rule: **start simple, and refactor toward a pattern when the second or third real case arrives.** The rule of three from clean code applies here too. Python makes many patterns small (functions as strategies, modules as singletons), so check whether plain language features already do the job.

A quick test before adding structure: *which specific change am I making cheaper, and how likely is it?* If you cannot name it, skip the pattern.

## Design-doc thinking {lvl=4 id=s-doc label="SDE-3"}

At SDE-3 level the hard part is rarely the class diagram. It is deciding *what to build, for whom, and what to give up*, and getting a team to agree before months of work. The usual tool is a **design document**: a short text, written before the code, that others can criticise cheaply.

A solid design doc answers, in order:

1. **Context and problem.** What is wrong today, with numbers if you have them (for example, "adding a payment method takes 6 weeks").
2. **Goals and non-goals.** What success looks like, and what you are deliberately not doing. Non-goals stop scope creep.
3. **Proposal.** The design in plain words, with one or two diagrams: the pieces, who calls whom, the interfaces.
4. **Alternatives considered.** At least two, including "do nothing", and why each was rejected. This is the part that shows your thinking.
5. **Trade-offs and risks.** What gets harder (more indirection? a migration?) and what could fail.
6. **Rollout and rollback.** How to move over in small steps, and how to undo.
7. **Open questions.** What you do not know yet. [Inference: layouts vary by company, but most follow this shape.]

Three habits separate senior design thinking from pattern-spotting:

- **Spend care where change is expensive.** Interfaces between teams, public APIs and data formats are costly to change later; the code behind them is cheap. Some decisions are one-way doors (hard to reverse), others two-way doors. [Unverified: a phrase attributed to Amazon.] Slow down on the first kind, move fast on the second.
- **Draw boundaries along change and ownership.** Modules that different teams own, or that change at different speeds, should be separated by a stable interface. Conway's law warns that your structure will copy your organisation anyway, so choose it on purpose.
- **Write down the cost of the pattern.** "We add an adapter layer: +1 hop, +1 file per vendor, in return for switching vendors in a day." If you cannot state the trade, you do not yet understand the design.

:::qc lvl=4
q: In a design doc for introducing a plug-in system for payments, which section most clearly shows senior-level thinking?
options: ["The class diagram", "Alternatives considered, with reasons for rejecting each", "The list of file names"]
answer: 1
right: Right. Anyone can propose a design; weighing it against real alternatives, including doing nothing, is what lets a team trust a decision.
wrong: Diagrams show the chosen design only. What shows that you compared it with other options?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Good design keeps the blast radius of a change small: high cohesion inside modules, low coupling between them. {lvl=1}
2. Links grow like n(n-1) when everything may know everything; a small shared interface cuts them to about n. {lvl=1}
3. SOLID in a line each: one reason to change; extend without editing; subtypes keep promises; small interfaces; depend on shapes, not details. {lvl=2}
4. Strategy swaps ways of doing a job, observer announces events, adapter fits a stranger to your shape, factory centralises creation. {lvl=2}
5. A pattern is a cure for a real problem; add it when the second or third case arrives, not before. {lvl=3}
6. A design doc states goals, non-goals, proposal, alternatives, trade-offs, rollout and open questions. {lvl=4}
7. Spend design effort on interfaces and decisions that are costly to reverse. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Passing a thing in from outside (dependency inversion) is what makes code testable; creating it inside makes tests slow and fragile. {lvl=2}
- A giant `utils` or `manager` module is a sign of low cohesion: break it by reason to change. {lvl=1}
- Patterns are not goals: "I used five patterns" is not a measure of quality. {lvl=3}
- Inheritance for reuse alone tends to tangle; prefer small pieces combined together (composition) when in doubt. {lvl=3}
- Observers can hide control flow: log events and keep listeners few and independent. {lvl=3}
- Design docs that skip alternatives and trade-offs read as advertisements; reviewers will not trust them. {lvl=4}
:::
