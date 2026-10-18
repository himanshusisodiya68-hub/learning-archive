---
title: Functions
summary: How one small rule, written once, can serve crores of orders. Inputs, outputs, private workspaces and the difference between a function that computes and one that changes things.
ncert: []
up_to: SDE-2
builds_on: [Values and types, Variables and memory, Decisions and loops]
notes_prompt: Explain to a friend who has never programmed what a function is, using a vending machine or a recipe, and why we bother writing one.
margin:
  - kind: history
    title: History
    text: Subroutines, the early name for functions, were in the first stored-program computers of the late 1940s, and Maurice Wilkes' team at Cambridge wrote about libraries of them. [Unverified]
  - kind: tip
    title: Interview favourite
    text: 'Many bugs come from a function that quietly changes its input, or a default argument like <code>bag=[]</code>. Interviewers ask about both because they reveal whether you know how Python passes values.'
  - kind: olympiad
    title: Design link
    text: A payment service that retries after a timeout is safe only if repeating the call has no extra effect. That property, called idempotence, is the same idea as a pure function, one level up.
books:
  - { title: "H. Abelson and G. Sussman, Structure and Interpretation of Computer Programs", ref: "Ch. 1 Building Abstractions with Procedures [Unverified]" }
  - { title: "A. Downey, Think Python", ref: "Chapters on functions and fruitful functions [Unverified]" }
cards:
  - { front: "What is a function?", back: "A named, reusable recipe: it takes inputs (parameters), does some work, and hands back a result with return." }
  - { front: "Parameter versus argument?", back: "A parameter is the name in the definition (km). An argument is the actual value you pass in the call (5)." }
  - { front: "What does a Python function return if it has no return statement?", back: "None. Printing something on screen is not the same as returning it." }
  - { front: "What is a pure function?", back: "One whose result depends only on its inputs and which changes nothing outside itself. Same input, same output, every time." }
  - { front: "Why is def add(x, bag=[]) a bug waiting to happen?", back: "The default list is created once, when the function is defined, and shared by every call that does not pass its own." }
  - { front: "Where can a variable made inside a function be seen?", back: "Only inside that call. It is local and disappears when the call ends." }
core:
  idea: 'A function packages a rule under a name so it can be written once, tested once and used anywhere. Callers need to know only what goes in and what comes out, not how it works inside.'
  formulas:
    - tex: 'y = f(x)'
      label: 'Input x goes in, one result y comes out'
    - tex: '\text{same } x \Rightarrow \text{ same } y,\ \text{nothing else changed}'
      label: 'A pure function'
  conditions:
    - 'The function does one clear job that its name can state'
    - 'Everything it needs arrives as a parameter, and everything it produces leaves through return'
    - 'It does not secretly change its inputs or global variables (or, if it must, its name and docs say so)'
  sign: 'Commonest mistake: using print where you meant return. The screen shows the value, but the caller gets None and cannot use it.'
outcomes:
  - 'Write a function with parameters, default values and a return value'
  - 'Explain what local scope means and predict what a function can and cannot see'
  - 'Tell a pure function from one with side effects, and say why it matters'
  - 'Avoid the mutable-default and changed-input bugs'
  - 'Use small single-purpose functions and pass functions as values to build flexible code'
opener:
  story: |
    You order biryani on Swiggy from 1 km away, and the app says **delivery: free**. Your friend orders from 5 km away and sees **₹39**. Someone in another city, in the rain, sees a bit more still.

    Every one of those prices came out of the same rule: some distance in, some money out. Crores of orders a month, yet nobody at the company writes the rule crore times. (Swiggy's real pricing is not public, and the numbers in this lesson are made up. [Inference])

    So where does the rule live, and how can the same few lines serve every order without anyone copying them?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Distances go into one box labelled delivery_fee and prices come out"><g style="font-size:11px;fill:var(--ink)"><rect x="14" y="30" width="62" height="26" rx="6" style="fill:none;stroke:var(--muted)"/><text x="24" y="47">1 km</text><rect x="14" y="107" width="62" height="26" rx="6" style="fill:none;stroke:var(--muted)"/><text x="24" y="124">5 km</text><rect x="14" y="184" width="62" height="26" rx="6" style="fill:none;stroke:var(--muted)"/><text x="24" y="201">9 km</text></g><path d="M78 43 L116 105 M78 120 L116 120 M78 197 L116 135" style="fill:none;stroke:var(--c);stroke-width:1.6"/><rect x="118" y="82" width="86" height="76" rx="10" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="126" y="116" style="font-size:12px;fill:var(--ink)">delivery_fee</text><text x="134" y="134" style="font-size:10px;fill:var(--muted)">one rule</text><path d="M206 105 L244 43 M206 120 L244 120 M206 135 L244 197" style="fill:none;stroke:var(--c);stroke-width:1.6"/><g style="font-size:11px;fill:var(--ink)"><rect x="246" y="30" width="60" height="26" rx="6" style="fill:none;stroke:var(--muted)"/><text x="262" y="47">₹0</text><rect x="246" y="107" width="60" height="26" rx="6" style="fill:none;stroke:var(--muted)"/><text x="258" y="124">₹39</text><rect x="246" y="184" width="60" height="26" rx="6" style="fill:none;stroke:var(--muted)"/><text x="254" y="201">₹71</text></g></svg>'
life:
  - 'The Pay button in a UPI app calls the same payment function whether you send ₹10 or ₹10,000.'
  - 'A calculator button, such as square root, is a function: number in, number out, no need to know the method.'
  - 'A recipe is a function: ingredients in, dish out. Others can use it without having watched you cook.'
  - 'Excel formulas like SUM and AVERAGE are functions someone wrote once for everyone.'
  - 'Python itself ships with functions like len, max and sorted that you call every day.'
models:
  - name: 'Hide the how, show the what'
    text: 'You use a car by its pedals and wheel, not its engine. Good functions, good APIs and good organisations let others rely on what a part does without knowing how. This is abstraction.'
  - name: 'Write once, fix once'
    text: 'When a rule lives in one place, a change or a bug fix happens in one place. Copying the same logic everywhere is like a tax rule printed on a thousand forms: change it and you must find them all.'
  - name: 'Honest contracts'
    text: 'A function that says it computes a price but also quietly charges a card is lying. Systems of any kind, from code to teams, stay safe when each part does what its name promises and nothing more.'
links:
  - leaf: 'cs/variables-and-memory'
    name: 'Variables and memory'
    same: 'Inside a function, parameters are just names pointing at values, exactly like variables elsewhere.'
    differs: 'Each call gets its own private set of names (its scope), which vanish when the call ends.'
  - leaf: 'cs/functional-ideas'
    name: 'Functional programming ideas'
    same: 'Pure functions, and functions passed around like values, are the foundation of the functional style.'
    differs: 'Functional programming makes purity the rule; ordinary Python lets you mix pure and impure code freely.'
  - leaf: 'cs/errors-and-testing'
    name: 'Errors and testing'
    same: 'A small function with clear inputs and outputs is the easiest unit to test.'
    differs: 'Testing also checks the cases the function was never meant to see, such as bad input.'
next:
  q: 'What happens if a function, in the middle of its work, calls itself on a smaller version of the problem? Could that ever stop, and what keeps track of all those half-finished calls?'
  leaf: 'cs/recursion'
  name: 'Recursion'
symbols:
  - s: '\texttt{def}'
    means: 'keyword that starts a function definition: "here is a recipe, and its name is..."'
  - s: '\texttt{return}'
    means: 'hands a value back to whoever called the function, and ends the call'
  - s: 'x'
    means: 'a parameter: the name for an input inside the function (units depend on the input)'
  - s: 'f(x)'
    means: 'calling the function f with the argument x; the call evaluates to the returned value'
  - s: '\texttt{None}'
    means: 'Python''s "nothing here" value, returned when a function has no return'
  - s: '\text{scope}'
    means: 'the region of the program where a name can be seen; names made inside a function are local to it'
---

:::hook
q: Here's the puzzle. The delivery rule is used for crores of orders. How many times do you think it has to be written down in the code?
options: ["Once per order, since every order is different", "Once per city", "Once in total, and every order calls it"]
answer: 2
right: Right. Write the rule once, give it a name, and every order calls it with its own distance. That is a function. (How Swiggy structures its code is not public. This is the general idea. [Inference])
wrong: Copying the rule for each order or city would mean a million copies to fix the day the pricing changes. There is a way to write it once and reuse it everywhere.
:::

## The rule with a name {lvl=1 id=s-name label="Foundations"}

Suppose delivery is free within 2 km and, beyond that, costs ₹15 plus ₹8 for each extra km. (Made-up numbers.) You could work this out by hand for every order. Or you could write the rule once and give it a name.

A **function** is that: a named recipe. You describe the steps one time with `def`, and afterwards you just use the name.

```python
def delivery_fee(distance_km):
    if distance_km <= 2:
        return 0
    return 15 + 8 * (distance_km - 2)

print(delivery_fee(1))    # 0
print(delivery_fee(5))    # 39
```

Read it aloud: "to compute a delivery fee, given a distance in km: if the distance is 2 or less, hand back 0; otherwise hand back 15 plus 8 times the extra km." The name in the brackets, `distance_km`, is a **parameter**: a blank to be filled in. The value you put in at the call, like `5`, is the **argument**. And `return` is how the answer leaves the function.

:::figure caption="A function is a box: inputs in, one result out. Callers see only the box."
<svg viewBox="0 0 320 110" role="img" aria-label="Argument 5 enters the box delivery_fee and 39 leaves">
<text x="10" y="58" style="font-size:12px;fill:var(--ink)">5</text>
<path d="M28 54 L90 54" class="pen"/>
<rect x="92" y="22" width="130" height="64" rx="10" style="fill:none;stroke:var(--mat);stroke-width:2"/>
<text x="106" y="48" style="font-size:12px;fill:var(--ink)">delivery_fee</text>
<text x="106" y="68" style="font-size:10px;fill:var(--muted)">distance_km = 5</text>
<path d="M224 54 L286 54" class="pen"/>
<text x="292" y="58" style="font-size:12px;fill:var(--ink)">39</text>
</svg>
:::

:::qc lvl=1
q: A function has no return statement, only print(x * 2) inside it. What does a caller get if it writes y = f(4)?
options: ["8", "None", "An error"]
answer: 1
right: Right. The screen shows 8, but the call itself evaluates to None. print displays; return delivers.
wrong: The function never hands anything back, so what value does Python use for "nothing"?
:::

## Parameters and defaults {lvl=1 id=s-params label="Foundations"}

Real rules have knobs. Surge pricing in the rain multiplies the fee; the free distance differs by plan. A function can take several parameters, and give some of them **default values** so callers can leave them out.

```python
def fee(distance_km, surge=1.0, free_within=2):
    if distance_km <= free_within:
        return 0.0
    return (15 + 8 * (distance_km - free_within)) * surge

print(fee(5))                 # 39.0
print(fee(5, surge=1.5))      # 58.5
print(fee(distance_km=1))     # 0.0
```

Passing `surge=1.5` by name is a **keyword argument**. It is clearer than a bare `1.5` and lets you skip parameters in the middle. A function can return any value: a number, text, a list, even several things together as a pair.

## Private workspaces: scope {lvl=2 id=s-scope label="SDE-1"}

Each call gets a fresh, private workspace. Names created inside, including the parameters, are **local**: they exist while the call runs and vanish when it ends. This is called **scope**, the region of the program where a name can be seen.

```python
rate = 8                       # global: visible everywhere

def fee(km):
    extra = km - 2             # local: exists only during this call
    return 15 + rate * extra

print(fee(5))                  # 39
print(extra)                   # NameError: no such name out here
```

Why this design? So that two functions can both use a helper named `total` without trampling each other, and so that you can understand a function by reading only the function. Inside `fee`, reading the global `rate` works. But assigning to a name inside a function makes it local, even if a global of the same name exists, which catches many people out:

```python
count = 0
def bump():
    count = count + 1   # UnboundLocalError: count is local here
```

The cure is nearly always not to touch globals: pass values in as arguments and return the new value.

:::qc lvl=2
q: x = 10 is set outside. Inside def f(), you write x = 5 and return x. After calling f(), what does print(x) show outside?
options: ["5", "10", "An error"]
answer: 1
right: Right. The x inside f is a separate local name. The outside x was never touched.
wrong: Assigning inside a function creates a new local name. Does that change the one outside?
:::

## Pure functions and side effects {lvl=2 id=s-pure label="SDE-1"}

Two functions can look alike and behave very differently.

```python
def with_tax(prices):                      # pure
    return [p * 1.18 for p in prices]

def add_tax_in_place(prices):              # side effect
    for i in range(len(prices)):
        prices[i] = prices[i] * 1.18
```

The first builds a **new** list and leaves the caller's list alone. The second changes the caller's list: a **side effect**, anything a function does besides returning a value (changing an input, a global, a file, a database, the screen).

| Pure function | Function with side effects |
|---|---|
| Result depends only on the inputs | Result may depend on hidden state |
| Same input, same output, always | Same input can give different results |
| Easy to test and to reuse | Needs set-up and clean-up in tests |
| Safe to repeat or run in parallel | Repeating may repeat the effect (a second charge) |

Why does the second one reach the caller's list at all? Python passes **references**: the parameter `prices` is another name for the very same list object, not a copy. Changing the object through either name is visible through both. Numbers and strings cannot be changed in place, so they never surprise you this way.

Side effects are not evil. Saving a file or sending a message is the whole point. The skill is to keep the computing part pure and push the effects to a thin outer layer.

## Two classic traps {lvl=2 id=s-traps2 label="SDE-1"}

**The shared default.** Defaults are evaluated once, when `def` runs, not at each call:

```python
def add_item(item, bag=[]):
    bag.append(item)
    return bag

print(add_item("a"))   # ['a']
print(add_item("b"))   # ['a', 'b']  surprise!
```

Both calls used the same default list. The standard fix is to use `None` as a signal and build the list inside:

```python
def add_item(item, bag=None):
    if bag is None:
        bag = []
    bag.append(item)
    return bag
```

**The surprise edit** is the in-place change shown earlier. If a function should not change its input, either build a new list or take a copy at the top (`items = list(items)`).

:::qc lvl=2
q: Why does the shared-default bug appear with a list but not with a default of 0?
options: ["Zero is faster", "A number cannot be changed in place, so nothing is shared", "Python treats lists as global"]
answer: 1
right: Right. append changes the one list object that every call shares. A number is replaced, never edited, so each call is independent.
wrong: Think about what append does to the default object, and whether anything like it exists for a number.
:::

## Designing good functions {lvl=3 id=s-design label="SDE-2"}

Beyond making code work, functions are how you manage complexity.

- **One job, stated by the name.** If you need "and" to describe it, split it. `parse_order`, `price_order` and `save_order` are three functions, not one `handle_order`.
- **A contract.** Say what goes in and what comes out in a short docstring, and check assumptions early (`assert distance_km >= 0`). Callers rely on the contract, never on the insides, so you can rewrite the insides later.
- **Few parameters.** Beyond about four, callers get the order wrong; group related values or use keyword arguments.
- **Functions are values.** You can pass one into another or return one. A function that builds a function is called a **closure**: the inner function remembers the values around it.

```python
def make_fee(rate):
    def fee(km):
        return 15 + rate * max(km - 2, 0)
    return fee

city_fee = make_fee(8)
print(city_fee(5))     # 39
print(sorted([3, 1, 2], key=lambda n: -n))   # [3, 2, 1]
```

Here `make_fee(8)` returns a ready-made fee rule for one city, and `key=` hands `sorted` your own rule for ordering.

**In larger systems.** A call that may be retried, such as "charge this order" after a timeout, must be safe to repeat. Designers make such operations **idempotent**: doing them twice has the same effect as once, for example by attaching a unique order id so the second charge is recognised and ignored. It is the pure-function idea applied to a network. [Inference: typical design, not any named company's]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A function is a named rule: write it once, call it many times with different inputs. {lvl=1}
2. Parameters are the blanks in the definition; arguments are the values you pass. return hands back the result. {lvl=1}
3. print shows a value; return delivers it. Without return, the result is None. {lvl=1}
4. Names made inside a function are local to that call; prefer passing values in over using globals. {lvl=2}
5. A pure function depends only on its inputs and changes nothing. Side effects are anything else it does. {lvl=2}
6. Python passes references, so editing a list parameter edits the caller's list. {lvl=2}
7. Keep functions small and single-purpose, with a clear contract; make operations that may be retried idempotent. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Writing print where you meant return, then wondering why the result is None. {lvl=1}
- Assigning to a global name inside a function creates a local one and can raise UnboundLocalError. {lvl=2}
- Never use a mutable default like bag=[]; use None and create the object inside. {lvl=2}
- Modifying an argument in place surprises the caller; copy it or return a new object. {lvl=2}
- A function that does three things cannot be reused or tested for any one of them. {lvl=3}
- In interviews, say out loud what your function takes, returns and promises not to change before writing its body. {lvl=2}
:::
