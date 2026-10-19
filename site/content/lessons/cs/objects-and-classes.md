---
title: Objects and classes
summary: How a cricket scoreboard keeps every batter's numbers consistent. Bundling data with the code that changes it, hiding the insides, and building big things from small parts.
ncert: []
up_to: SDE-2
builds_on: [Functions, Lists dictionaries and sets]
notes_prompt: Explain to a friend why a program is safer when a bank balance can only be changed by "deposit" and "withdraw", never by writing a number straight into it.
margin:
  - kind: history
    title: History
    text: 'Simula, a language from Norway in the 1960s, introduced classes and objects to simulate things like ships in a harbour. Smalltalk and later C++ and Java made the idea mainstream. [Unverified: exact dates]'
  - kind: tip
    title: Interview favourite
    text: '"Design a parking lot" or "design a library" rounds are really asking: which things exist, what does each one know, and what can each one do? Start by listing nouns (classes) and verbs (methods).'
  - kind: olympiad
    title: Design link
    text: 'The same idea one level up is a microservice: it owns its data, hides it behind an API, and everyone else asks it to act instead of reaching in.'
books:
  - { title: "E. Gamma et al., Design Patterns", ref: "Introduction: 'favor object composition over class inheritance' [Unverified: page]" }
  - { title: "H. Abelson and G. Sussman, Structure and Interpretation of Computer Programs", ref: "Ch. 3.1 Assignment and local state" }
  - { title: "L. Ramalho, Fluent Python", ref: "Part on object-oriented idioms and data classes [Unverified: chapter numbers]" }
cards:
  - { front: "What is an object?", back: "A bundle of state (the data it remembers) and behaviour (the methods that read or change that data). A class is the blueprint; each object is one made from it." }
  - { front: "What is encapsulation?", back: "Keeping an object's data private and letting the outside change it only through methods, so the object can protect its own rules (its invariants)." }
  - { front: "What is an invariant?", back: "A fact that must always be true of an object, such as 'balance is never negative'. Methods preserve it; direct writes to the data can break it." }
  - { front: "Is-a versus has-a?", back: "Inheritance says a Dog IS an Animal. Composition says a Car HAS an Engine. Prefer has-a: it is easier to change and combine." }
  - { front: "What is duck typing?", back: "If an object has the methods you call, it works, whatever its class. 'If it quacks like a duck.' Code depends on behaviour, not on family tree." }
  - { front: "Why does self appear in every method?", back: "It is the object the method was called on. account.deposit(50) runs deposit with self set to account, so each object works on its own data." }
core:
  idea: 'An object bundles the data it remembers (state) with the actions that read or change it (behaviour), and guards its own rules by letting outsiders go through those actions only. Build large things by letting objects hold other objects (composition), not by stacking families of subclasses.'
  formulas:
    - tex: '\text{object} = \text{state} + \text{behaviour}'
      label: 'What a class bundles together'
    - tex: '\text{variants} = a \times b \ \text{(inheritance)} \quad\text{vs}\quad a + b \ \text{(composition)}'
      label: 'Why composition scales: parts you can swap'
  conditions:
    - 'Every change to the state goes through the object''s own methods, so its invariants are checked in one place'
    - 'Inheritance is used only when a subclass truly behaves like its parent everywhere the parent is used'
    - 'Objects talk through a small, stable set of methods, not by poking at each other''s data'
  sign: 'Python does not enforce privacy: a leading underscore is a polite request, not a lock. The discipline is yours and your team''s.'
outcomes:
  - 'Explain why bundling data with its methods beats loose variables and parallel lists'
  - 'Write a Python class with __init__, methods and a readable repr'
  - 'Use encapsulation to protect an invariant such as "balance is never negative"'
  - 'Choose between inheritance and composition, and say why'
  - 'Break a vague "design X" prompt into objects, their state and their methods'
opener:
  story: |
    You are building a cricket scoreboard. For each batter you want the name, runs, balls faced and the strike rate. So you make a list of names, a list of runs and a list of balls. The 7th name goes with the 7th run count and the 7th ball count. Simple enough.

    Then a wicket falls and the batters swap their places in the list of names, but your teammate forgets to swap the other two lists. Suddenly Kohli's 82 is credited to a tail-ender, and nothing crashes. The screen just shows a quietly wrong number to ten million viewers.

    The bug was not in any single line. It was in the design: facts that belong together were stored apart, and anyone could change one without the others. What would a design look like in which that mistake is impossible?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Three loose lists on the left versus one batter object holding name, runs and balls behind a wall on the right"><g style="font-size:10px;fill:var(--muted)"><text x="14" y="26">Loose lists: easy to drift apart</text></g><g style="fill:none;stroke:var(--rule);stroke-width:1.5"><rect x="14" y="40" width="26" height="130"/><rect x="48" y="40" width="26" height="130"/><rect x="82" y="40" width="26" height="130"/></g><g style="stroke:var(--bad);stroke-width:1.5;fill:none"><path d="M27 72 L95 128"/><path d="M61 72 L61 128" style="stroke:var(--rule)"/></g><g style="font-size:9px;fill:var(--ink)"><text x="16" y="186">name</text><text x="49" y="186">runs</text><text x="84" y="186">balls</text></g><text x="14" y="214" style="font-size:10px;fill:var(--bad)">swap one, forget two</text><rect x="150" y="30" width="156" height="150" rx="10" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="162" y="52" style="font-size:11px;fill:var(--c);font-weight:600">Batter</text><g style="font-size:10px;fill:var(--ink)"><text x="162" y="76">name: "Asha"</text><text x="162" y="94">runs: 82</text><text x="162" y="112">balls: 61</text></g><line x1="162" y1="124" x2="294" y2="124" style="stroke:var(--rule)"/><g style="font-size:10px;fill:var(--ink)"><text x="162" y="144">score_runs(n)</text><text x="162" y="162">strike_rate()</text></g><text x="150" y="214" style="font-size:10px;fill:var(--c)">one thing, one set of rules</text></svg>'
life:
  - 'A UPI app has an Account object: balance and history are state, send and receive are behaviour, and nothing outside may set the balance directly.'
  - 'A video game character holds health, position and inventory, and knows how to move, attack and pick things up.'
  - 'In Python itself everything is an object: a list remembers its items and knows how to append, sort and pop.'
  - 'A TV remote is encapsulation in your hand: you press buttons (methods) and never touch the circuit board (state).'
models:
  - name: 'Keep facts that change together, together'
    text: 'If two pieces of information must always agree, store them in one place with one owner. Your bank statement and your passbook disagree for exactly this reason when someone keeps two copies by hand.'
  - name: 'Ask, don''t reach in'
    text: 'A waiter takes your order; you do not walk into the kitchen and cook. Letting a specialist guard its own work means its rules are applied every time, by the one party who knows them.'
  - name: 'Parts beat families'
    text: 'You can swap a phone''s battery, case and charger independently, because the phone has them instead of being a special kind of battery. Systems made of replaceable parts survive change better than systems made of rigid hierarchies.'
links:
  - leaf: 'cs/functions'
    name: 'Functions'
    same: 'A method is a function that comes with an object: it takes inputs, does work and may return a value.'
    differs: 'A plain function only sees what you hand it; a method also sees the object''s remembered state through self, so the same call can give different answers over time.'
  - leaf: 'cs/collections'
    name: 'Lists, dictionaries and sets'
    same: 'Both group several values under one name so you can treat them as one thing.'
    differs: 'A dictionary just stores values; an object also carries rules and actions for them, and can refuse a change that would break those rules.'
  - leaf: 'cs/design-principles-and-patterns'
    name: 'Design principles and patterns'
    same: 'Classic patterns are named ways of arranging objects: who holds what, who asks whom.'
    differs: 'This lesson gives the raw material (state, behaviour, composition); patterns are the recipes built from it at larger scale.'
next:
  q: 'Our Account refuses a withdrawal larger than the balance, but how should it refuse? By crashing? Returning a code nobody checks? And how do we prove, before release, that it really refuses?'
  leaf: 'cs/errors-and-testing'
  name: 'Errors and testing'
symbols:
  - s: '\texttt{class}'
    means: 'a blueprint that says what state and methods every object of that kind has (a Python keyword)'
  - s: '\texttt{self}'
    means: 'inside a method, the particular object the method was called on'
  - s: '\texttt{\_\_init\_\_}'
    means: 'the method that runs when an object is created; it sets up the starting state'
  - s: '\texttt{\_name}'
    means: 'a leading underscore: a convention meaning "internal, please do not touch from outside"'
  - s: 'a \times b'
    means: 'count of classes needed if every pairing of a kinds of one thing with b kinds of another needs its own subclass (count)'
  - s: 'a + b'
    means: 'count of classes needed if the two kinds are separate parts that are combined at run time (count)'
---

:::hook
q: Here is the puzzle. Which design makes "Kohli's runs credited to the wrong person" impossible to write by accident?
options: ["Three lists, with a comment saying 'always update together'", "One Batter object per player that owns its own name, runs and balls", "A bigger list that holds everything in a fixed order"]
answer: 1
right: Right. When the facts live inside one object, there is nothing to forget to update, and the object's own methods are the only way to change them. The rule is written once, in one place.
wrong: A comment is a promise that only a careful human keeps, and a bigger list still lets anyone change any slot. What if the data and the rules for changing it lived in the same place?
:::

## Loose facts drift apart {lvl=1 id=s-drift label="Foundations"}

Take a batter's name, runs and balls faced. With **parallel lists**, the idea "this batter" exists only in your head: it is the same position in three lists. Move one list's items and the link breaks silently.

You could use a dictionary per batter, which is better: `{"name": "Asha", "runs": 82, "balls": 61}` keeps the three facts together. But anyone can still write `batter["runs"] = -5`, or forget to update `balls` when they add runs. The dictionary holds the facts; it does not defend them.

## An object bundles state and behaviour {lvl=1 id=s-bundle label="Foundations"}

An **object** is a thing that remembers facts (its **state**) and knows how to act on them (its **behaviour**). A **class** is the blueprint; each object is made from it. Think of a cookie cutter and the cookies.

```python
class Batter:
    def __init__(self, name):
        self.name = name
        self.runs = 0
        self.balls = 0

    def score(self, runs):
        self.runs += runs
        self.balls += 1
```

`__init__` runs when you make a batter and sets the starting state. `self` means "the batter this call is about". Each object gets its own copy of the state:

```python
asha = Batter("Asha")
ravi = Batter("Ravi")
asha.score(4)
asha.score(6)
print(asha.runs, ravi.runs)   # 10 0
```

Calling `score` always bumps runs and balls together, so they cannot drift apart. We also want a readable printout and the strike rate (runs per 100 balls):

```python
    def strike_rate(self):
        return 100 * self.runs / self.balls if self.balls else 0.0

    def __repr__(self):
        return f"Batter({self.name!r}, {self.runs} off {self.balls})"
```

:::figure caption="One object, two halves: remembered facts and the actions that change them. The class is the blueprint; asha and ravi are two objects with separate state."
<svg viewBox="0 0 580 170" role="img" aria-label="A class blueprint and two objects made from it">
<rect x="10" y="20" width="190" height="110" rx="8" style="fill:none;stroke:var(--muted);stroke-dasharray:5 4"/>
<text x="24" y="42" style="font-size:12px;fill:var(--muted)">class Batter</text>
<text x="24" y="64" style="font-size:11px;fill:var(--ink)">state: name, runs, balls</text>
<text x="24" y="84" style="font-size:11px;fill:var(--ink)">score(), strike_rate()</text>
<text x="24" y="116" style="font-size:11px;fill:var(--muted)">the blueprint</text>
<path d="M202 60 L290 40" class="pen"/><path d="M202 90 L290 112" class="pen"/>
<rect x="292" y="14" width="140" height="62" rx="8" style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--mat);stroke-width:1.5"/>
<text x="304" y="36" style="font-size:12px;fill:var(--ink)">asha</text>
<text x="304" y="56" style="font-size:11px;fill:var(--ink)">runs 10, balls 2</text>
<rect x="292" y="90" width="140" height="62" rx="8" style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--mat);stroke-width:1.5"/>
<text x="304" y="112" style="font-size:12px;fill:var(--ink)">ravi</text>
<text x="304" y="132" style="font-size:11px;fill:var(--ink)">runs 0, balls 0</text>
<text x="450" y="46" style="font-size:11px;fill:var(--muted)">each object,</text><text x="450" y="60" style="font-size:11px;fill:var(--muted)">its own state</text>
<text x="450" y="122" style="font-size:11px;fill:var(--muted)">same methods,</text><text x="450" y="136" style="font-size:11px;fill:var(--muted)">shared blueprint</text>
</svg>
:::

:::qc lvl=1
q: asha and ravi are both Batter objects. After asha.score(4), what is ravi.runs?
options: ["4, because they share a class", "0, because each object has its own state", "An error"]
answer: 1
right: Right. The class is shared; the state is not. That is why one blueprint can make eleven different batters.
wrong: The methods come from the shared class, but self.runs belongs to the particular object. Whose runs did score change?
:::

## Guarding the insides {lvl=2 id=s-encap label="SDE-1"}

Now a bank account, where a rule matters: **the balance must never go negative**. A fact that must always be true of an object is an **invariant**. If the balance is a plain public attribute, any code can write `acct.balance = -500` and break it.

**Encapsulation** means hiding the state and letting the outside change it only through methods. Those methods check the rule, so it lives in one place.

```python
class Account:
    def __init__(self, opening=0):
        self._balance = opening          # underscore: internal

    @property
    def balance(self):                   # read-only from outside
        return self._balance

    def withdraw(self, amount):
        if amount > self._balance:
            raise ValueError("insufficient funds")
        self._balance -= amount
```

`@property` lets callers write `acct.balance` as if it were a plain attribute, but there is no setter, so `acct.balance = 5` raises an error. The only way to reduce money is `withdraw`, which checks first. Python cannot truly lock `_balance`, so the underscore is a convention your team keeps. (The `raise` is explained in the next lesson.)

Two more tools you will see everywhere:

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Point:
    x: float
    y: float
```

A **dataclass** writes `__init__`, `__repr__` and `==` for you when an object is mostly data; `frozen=True` makes it unchangeable after creation, a form of encapsulation by immutability.

:::qc lvl=2
q: Which statement best describes why Account hides _balance?
options: ["To save memory", "So the withdraw rule is enforced every time, in one place", "Because Python requires it"]
answer: 1
right: Right. Hiding is not secrecy for its own sake; it forces every change through code that checks the invariant.
wrong: Python does not force you to hide anything. Think about what could go wrong if outside code could write any number into the balance.
:::

## Inheritance, and why it bites {lvl=3 id=s-inherit label="SDE-2"}

**Inheritance** lets a class start as a copy of another and add or change things: `class Dog(Animal)` says a Dog **is an** Animal. It is tempting, and it works for small, stable families. The trouble starts when you model variety by subclassing.

Suppose a delivery app has 3 kinds of vehicle (bike, auto, van) and 4 kinds of billing rule (flat, per-km, surge, free-delivery). If each pairing is a subclass, you write $3 \times 4 = 12$ classes, and a fifth rule adds three more. Worse, a subclass is welded to its parent: change `Vehicle` and every descendant may break.

**Composition** says a delivery **has a** vehicle and **has a** billing rule, each a separate small object that you hand in:

```python
class Delivery:
    def __init__(self, vehicle, billing):
        self.vehicle = vehicle
        self.billing = billing

    def cost(self, km):
        return self.billing.price(km, self.vehicle.rate)
```

Now there are $3 + 4 = 7$ small classes, and any combination is one line at the call site. This is the meaning of the advice **prefer composition over inheritance**, from the book *Design Patterns*.

| Question | Inheritance (is-a) | Composition (has-a) |
|---|---|---|
| How are variants combined? | One subclass per combination | Pick one part from each group |
| Can behaviour change at run time? | No, the class is fixed | Yes, swap the part |
| How tightly coupled? | Child depends on parent internals | Only on the part's methods |
| When is it right? | A true "is-a" that never surprises | Almost everything else |

A test for honest inheritance, the **Liskov substitution principle**: anywhere you use the parent, a child must work without surprise. A `Square` that inherits from `Rectangle` but breaks "set width and height independently" fails it.

## Depend on behaviour, not on class {lvl=3 id=s-duck label="SDE-2"}

In Python you rarely need a shared parent. If `billing` has a `price(km, rate)` method, `Delivery` works with it. This is **duck typing**: judge an object by what it can do. For documented contracts, `typing.Protocol` lets you name the required methods without forcing inheritance.

```python
class FlatBilling:
    def price(self, km, rate):
        return 40

class PerKmBilling:
    def price(self, km, rate):
        return km * rate
```

Neither class inherits from anything, yet both plug into `Delivery`. In a design round, this is how you answer "how would you add a new pricing rule?": write one new small class, change nothing else.

:::qc lvl=3
q: A fifth billing rule appears. With composition, how many existing classes must you change?
options: ["All three vehicle classes", "None; you add one new billing class", "The Delivery class and every vehicle"]
answer: 1
right: Right. Adding a part leaves everything else untouched. With one subclass per combination you would be adding three new classes instead.
wrong: Billing is a separate part that Delivery merely holds. What does adding a new part require of the parts that already exist?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. An object bundles state (what it remembers) with behaviour (what it can do); a class is the blueprint. {lvl=1}
2. Facts that must change together belong inside one object, changed by one method. {lvl=1}
3. self is the object a method was called on; each object keeps its own state. {lvl=1}
4. Encapsulation routes every change through methods, so an invariant is enforced in one place. {lvl=2}
5. A dataclass gives you init, repr and equality for free; frozen makes it immutable. {lvl=2}
6. Inheritance means is-a, composition means has-a; prefer composition, because variants add (a + b) instead of multiply (a times b). {lvl=3}
7. Duck typing: depend on the methods an object has, not on its class. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A leading underscore does not stop anyone; privacy in Python is a team agreement. {lvl=2}
- Forgetting self in a method definition or call is the commonest beginner error. {lvl=1}
- A mutable default argument such as def __init__(self, items=[]) is shared by every object; use None and create the list inside. {lvl=2}
- Do not subclass just to reuse code; if you cannot say "X is a Y" and mean it everywhere, hold a Y instead. {lvl=3}
- Deep inheritance chains (four or five levels) are a smell: every change needs reading the whole ladder. {lvl=3}
- In design rounds, list nouns (classes), their state and their verbs (methods) before drawing any diagram. {lvl=2}
:::
