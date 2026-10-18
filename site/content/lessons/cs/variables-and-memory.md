---
title: Variables and memory
summary: Why editing a shared Google Doc changes it for everyone, and what that says about names, objects and copies in a program.
ncert: []
up_to: SDE-2
builds_on: [Values and types, Bits and binary]
notes_prompt: Explain to a friend the difference between sharing a link to a document and emailing a copy, then say how that matches b = a in Python.
margin:
  - kind: history
    title: History
    text: Automatic memory cleanup (garbage collection) was invented for the Lisp language around 1959 [Unverified date]. Before that, programmers had to free every piece of memory by hand, and forgetting to do so was a common source of crashes.
  - kind: tip
    title: Interview favourite
    text: '"What does this print?" with a list passed to a function, or a list of lists made with *, is a favourite. Ask yourself: how many objects exist, and which names point at each?'
  - kind: olympiad
    title: Stretch
    text: In CPython every object carries a counter of how many names point at it. When the counter reaches zero the object is freed at once. Two objects pointing at each other never reach zero, so a second collector hunts for such cycles.
books:
  - { title: "L. Ramalho, Fluent Python", ref: "Ch. 6 Object references, mutability and recycling [Unverified chapter number]" }
  - { title: "R. Arpaci-Dusseau and A. Arpaci-Dusseau, Operating Systems: Three Easy Pieces", ref: "the chapters on address spaces and memory API [Unverified]" }
cards:
  - { front: "What does b = a do in Python?", back: "It attaches a second name b to the same object a points at. Nothing is copied." }
  - { front: "Mutating versus rebinding?", back: "Mutating changes the object itself (a.append(4)), so every name pointing at it sees the change. Rebinding (a = [9]) moves one name to a different object and leaves the others alone." }
  - { front: "Which common types are mutable?", back: "list, dict, set and most objects you define. int, float, str, bool, tuple and None are immutable." }
  - { front: "== versus is?", back: "== asks whether two objects have equal contents. is asks whether they are the very same object." }
  - { front: "Shallow copy versus deep copy?", back: "A shallow copy (list.copy(), a[:]) makes a new outer container but shares the inner objects. copy.deepcopy copies the inner objects too." }
  - { front: "Where do objects live and where do names live?", back: "Objects live in the heap, which is large and long-lived. Names live in the stack frame of the running function, which is created on a call and vanishes on return." }
core:
  idea: 'A variable in Python is a name attached to an object, not a box holding a value. Assignment attaches a name and never copies, so two names can point to one object. Changing a mutable object through one name shows up through every other name.'
  formulas:
    - tex: '\texttt{b = a} \;\Rightarrow\; \text{one object, two names}'
      label: 'Assignment attaches a name; it does not copy'
    - tex: '\texttt{a == b} \;\text{(same contents)} \quad \text{vs} \quad \texttt{a is b} \;\text{(same object)}'
      label: 'Equal is not the same as identical'
  conditions:
    - 'The rule is exact for Python (and Java and JavaScript objects); languages such as C store values directly in the variable'
    - 'Mutation only matters for mutable objects (list, dict, set); immutable ones (int, str, tuple) can only be replaced, never changed in place'
    - 'An object is freed when no name or container points at it any more (reference counting in CPython)'
  sign: 'The commonest mistake is believing that b = a makes a copy of a list. It makes a second name for the same list.'
outcomes:
  - 'Explain a variable as a name pointing at an object'
  - 'Predict the output when a list is shared by two names or passed into a function'
  - 'Tell mutable types from immutable ones and say what each allows'
  - 'Choose between ==, is, a shallow copy and a deep copy'
  - 'Draw the stack and the heap for a small program'
  - 'Explain reference counting, cycles and why += on a list differs from + on an int'
opener:
  story: |
    You write a plan in Google Docs and send your friend the **link**. She adds a line. When you look, your document has the line too. Now suppose you had emailed her a **copy** instead: she could scribble all over it and yours would stay clean.

    Both cases are "my friend has my document", but they behave very differently. In the first there is one document and two ways of reaching it. In the second there are two documents.

    Programs have the same split, and mixing it up is one of the most common ways to produce a bug that "just changes by itself". Which one does a line like `b = a` give you?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two people with arrows pointing at one shared document, and a second pair pointing at separate copies"><rect x="116" y="26" width="88" height="62" rx="6" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><text x="132" y="52" style="font-size:11px;fill:var(--ink)">one doc</text><text x="130" y="70" style="font-size:9px;fill:var(--muted)">shared link</text><circle cx="40" cy="40" r="14" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="34" y="45" style="font-size:12px;fill:var(--ink)">a</text><circle cx="40" cy="80" r="14" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="34" y="85" style="font-size:12px;fill:var(--ink)">b</text><path d="M56 42 L114 48 M56 80 L114 68" style="stroke:var(--c);stroke-width:2;fill:none"/><path d="M20 118 L300 118" style="stroke:var(--rule);stroke-width:1;fill:none"/><rect x="116" y="150" width="40" height="46" rx="4" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.5"/><rect x="164" y="150" width="40" height="46" rx="4" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.5"/><text x="122" y="178" style="font-size:9px;fill:var(--muted)">copy 1</text><text x="170" y="178" style="font-size:9px;fill:var(--muted)">copy 2</text><circle cx="40" cy="160" r="14" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="34" y="165" style="font-size:12px;fill:var(--ink)">a</text><circle cx="40" cy="204" r="14" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="34" y="209" style="font-size:12px;fill:var(--ink)">b</text><path d="M56 162 L114 168 M56 204 L162 190" style="stroke:var(--muted);stroke-width:1.5;fill:none"/><text x="230" y="58" style="font-size:10px;fill:var(--c)">b = a</text><text x="214" y="176" style="font-size:10px;fill:var(--muted)">b = a.copy()</text></svg>'
life:
  - 'A shared Google Doc or Sheet is one object with many names (links); an emailed attachment is a copy.'
  - 'A WhatsApp group name is a label: you can rename the group, or two different groups can have the same name. The group and its name are different things.'
  - 'When a function receives a list from the caller, it can edit the caller''s list. That is how a "sort in place" or "add to cart" call works.'
  - 'Your phone''s Gallery shows one photo in several albums without storing it several times: each album holds a pointer to the photo.'
  - 'A video that "stays in memory" after you close its tab is a leak: something still points at it, so it cannot be freed.'
models:
  - name: 'Name versus thing'
    text: 'The label is not the thing it labels. A person is not their nickname; a company can change its brand name. Whenever two descriptions seem to conflict, ask whether they name the same thing or different things.'
  - name: 'Shared versus copied'
    text: 'Before changing something, ask who else is looking at it. A shared spreadsheet, a joint bank account and a shared lease are all one object with several holders, so one person''s edit is everybody''s edit. A copy is safe but can go out of date.'
  - name: 'Reclaim when nobody points at it'
    text: 'Things should be cleaned up exactly when nobody needs them any more. A library book is shelved again once all borrowers return it. Waste appears when something is kept alive by a forgotten holder.'
links:
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'Both are about where data actually sits; a name in a program ends as an address in memory.'
    differs: 'That lesson is about the speed of different kinds of memory (cache, RAM, disk); this one is about how a program names and shares objects once they are in memory.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'A Python namespace is itself a hash table from names to objects; looking up a name is a dict lookup.'
    differs: 'A dict key must be hashable (stable), which is why a list cannot be a key: a mutable object can change after it is stored.'
  - leaf: 'cs/arrays'
    name: 'Arrays and dynamic arrays'
    same: 'A Python list stores references to objects, not the objects themselves, so a list of lists is a list of pointers.'
    differs: 'A low-level array of numbers stores the values side by side; a Python list stores pointers, which is flexible but takes more memory.'
next:
  q: 'You now know how a program stores things. But how does it decide what to do, and how does it repeat the same step a million times without a million lines of code?'
  leaf: 'cs/control-flow'
  name: 'Decisions and loops'
symbols:
  - s: '\texttt{=}'
    means: 'assignment: attach the name on the left to the object on the right (it is not the equals of mathematics)'
  - s: '\texttt{==}'
    means: 'equality test: do the two objects have the same contents? Gives True or False'
  - s: '\texttt{is}'
    means: 'identity test: are the two names pointing at the very same object? Gives True or False'
  - s: '\texttt{id(x)}'
    means: 'a number that identifies the object x points at while it lives (like a house number)'
  - s: '\texttt{+=}'
    means: 'update in place: for a list it extends the same object, for an int it rebinds the name'
---

:::hook
q: Here is the puzzle. You run `a = [1, 2, 3]`, then `b = a`, then `b.append(4)`, then print `a`. What do you see?
options: ["[1, 2, 3], because we only changed b", "[1, 2, 3, 4], because a and b are the same list", "An error, because a name cannot be used twice"]
answer: 1
right: Right. b = a did not copy the list; it attached a second name to it. Both names reach the same list, so the 4 appears through either. By the end you will be able to draw exactly why.
wrong: Picture the shared Google Doc. Did `b = a` make a second list, or a second way of reaching the first?
:::

## A name is a label {lvl=1 id=s-name label="Foundations"}

Many people picture a variable as a box with a value inside. In Python that picture is wrong in a way that causes real bugs. A better picture: the **object** (the list, the number, the text) sits somewhere in memory, and a **name** is a sticky note stuck on it.

```python
price = 20       # make the number 20, stick the note "price" on it
total = price    # stick a second note, "total", on the same 20
price = 25       # move the "price" note to a new object, 25
print(total)     # 20: the "total" note never moved
```

The word to remember is **bind**. `=` binds a name to an object. It never copies anything. So `total = price` does not link the two names for ever; it just puts a second note on whatever `price` pointed at that moment. When `price = 25` moves one note, the other stays put.

That answers the closing question of the last lesson: changing `price` does not change `total`.

:::qc lvl=1
q: After `x = 5`, `y = x`, `x = 9`, what is `y`?
options: ["9", "5", "14"]
answer: 1
right: Right. y stayed on the object 5. Moving x to 9 moved only the x note.
wrong: y was attached to the same object as x at that moment, and then x moved. Did y move?
:::

## Changing an object versus moving a name {lvl=1 id=s-mutate label="Foundations"}

There are two quite different things you can do:

1. **Rebinding**: move a name to another object (`a = [9]`). Other names are unaffected.
2. **Mutating**: change the object itself in place (`a.append(4)`). Every name on that object sees it.

Some objects can be changed in place and some cannot. A **mutable** object can change after it is made: a list, a dictionary, a set. An **immutable** object never changes: a number, a piece of text, a tuple. To "change" an immutable one you build a new object and move the name.

```python
a = [1, 2, 3]
b = a            # same list
b.append(4)      # mutate it
print(a)         # [1, 2, 3, 4]

s = "ab"
t = s
t += "c"         # builds a NEW string, moves t
print(s, t)      # ab abc
```

This is the Google Doc story in code. A list is the shared document. Text is a printed page: to change it you print a new page.

:::figure caption="After b = a, one list in the heap and two names pointing at it. b.append(4) edits that one list, so a sees the 4."
<svg viewBox="0 0 320 150" role="img" aria-label="Names a and b both pointing to one list holding 1 2 3 4 in the heap">
<text x="30" y="16" style="font-size:11px;fill:var(--muted)">names (stack)</text>
<text x="190" y="16" style="font-size:11px;fill:var(--muted)">objects (heap)</text>
<rect x="30" y="30" width="60" height="30" rx="4" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="56" y="50" style="font-size:13px;fill:var(--ink)">a</text>
<rect x="30" y="86" width="60" height="30" rx="4" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="56" y="106" style="font-size:13px;fill:var(--ink)">b</text>
<g style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat);stroke-width:1.5"><rect x="180" y="52" width="30" height="40"/><rect x="210" y="52" width="30" height="40"/><rect x="240" y="52" width="30" height="40"/><rect x="270" y="52" width="30" height="40"/></g>
<g style="font-size:14px;fill:var(--ink)"><text x="190" y="78">1</text><text x="220" y="78">2</text><text x="250" y="78">3</text><text x="280" y="78">4</text></g>
<path d="M90 45 L178 62 M90 101 L178 84" style="stroke:var(--mat);stroke-width:2;fill:none"/>
</svg>
:::

:::qc lvl=1
q: Which of these can be changed in place after it is made?
options: ["The text \"hello\"", "The list [1, 2, 3]", "The number 7"]
answer: 1
right: Right. Lists are mutable. Text and numbers are immutable, so any change makes a new object.
wrong: Try writing s[0] = "j" on text, and see what Python says. Which of the three accepts item changes?
:::

## Equal or the same? {lvl=2 id=s-equal label="SDE-1"}

Two questions sound alike but differ:

- `a == b`: do the two objects **look the same** (equal contents)?
- `a is b`: are they **the very same object**?

```python
a = [1, 2, 3]
b = [1, 2, 3]       # built separately
c = a               # a second name for a
a == b              # True: same contents
a is b              # False: two lists
a is c              # True: one list
```

Use `==` to compare values. Use `is` only for singletons such as `x is None`. [Inference] Python may reuse small whole numbers and short strings behind the scenes, so `is` between numbers can print True or False depending on the implementation; never rely on it.

## Copies: shallow and deep {lvl=2 id=s-copy label="SDE-1"}

To get a real second list, ask for one: `b = a.copy()` or `b = a[:]` or `b = list(a)`. But what if the list holds other lists? A **shallow copy** makes a new outer list while the inner lists are shared:

```python
import copy
x = [1, [2, 3]]
y = x.copy()           # shallow: inner list shared
y[1].append(9)
print(x)               # [1, [2, 3, 9]]  (x changed too)
z = copy.deepcopy(x)   # deep: inner list copied
z[1].append(7)
print(x)               # [1, [2, 3, 9]]  (unchanged)
```

A famous trap is building a grid with multiplication:

```python
bad  = [[0] * 2] * 3                  # three names for ONE row
bad[0][0] = 1                         # [[1, 0], [1, 0], [1, 0]]
good = [[0] * 2 for _ in range(3)]    # three separate rows
good[0][0] = 1                        # [[1, 0], [0, 0], [0, 0]]
```

`[row] * 3` repeats the pointer, not the row. The comprehension builds a new row each time round.

:::qc lvl=2
q: `grid = [[0] * 3] * 2` then `grid[0][0] = 5`. What is `grid`?
options: ["[[5, 0, 0], [0, 0, 0]]", "[[5, 0, 0], [5, 0, 0]]", "[[5, 5, 5], [0, 0, 0]]"]
answer: 1
right: Right. The outer list holds two pointers to the same inner list, so the 5 shows in both rows.
wrong: How many inner lists are there, one or two? What does * 2 repeat?
:::

## Stack and heap {lvl=2 id=s-stack label="SDE-1"}

Where do names and objects live? A running program uses two regions of memory.

- The **stack** holds the notes for each running function call. Calling a function adds a **frame** with its names; returning removes the frame. It is small, tidy and fast, like a pile of trays in a canteen: last on, first off.
- The **heap** is the large open area where objects live. Objects stay there as long as something points at them, even after the function that made them has returned.

In Python, names live in frames, and **every object lives in the heap**, so a function can hand back a list it built, and the list outlives the frame:

```python
def make():
    items = [1, 2, 3]    # name in make's frame, list in the heap
    return items         # frame vanishes, the list survives

box = make()             # a new name, same list
```

Passing an argument works the same way. A function receives a **new name for the same object**, so `def add(lst): lst.append(1)` changes the caller's list, while `def bump(n): n += 1` cannot change the caller's number (numbers are immutable, so `n += 1` rebinds `n`).

:::qc lvl=2
q: `def bump(n): n += 1` then `x = 5; bump(x)`. What is x afterwards?
options: ["6", "5", "An error"]
answer: 1
right: Right. Inside bump, n was a second name for the object 5. n += 1 built a new object 6 and moved n; x stayed on 5.
wrong: Is a number mutable? What does += then have to do to n?
:::

## How memory is cleaned up {lvl=3 id=s-gc label="SDE-2"}

Who frees the objects when no one needs them? In CPython, every object keeps a **reference count**, the number of names and containers pointing at it. When the count drops to zero the memory is released immediately. `del x` removes a name; it does not itself delete the object unless that was the last one.

Counting has a hole: **cycles**. If object A points at B and B points at A, each keeps the other's count at one even when the program can no longer reach either. A second mechanism, the **cyclic garbage collector** (`gc` module), finds such unreachable groups and frees them from time to time.

```python
import gc, weakref
class Node: pass
x, y = Node(), Node()
x.other, y.other = y, x       # a cycle
ref = weakref.ref(x)          # a pointer that does not count
del x, y                      # names gone, cycle remains
gc.collect()                  # the collector frees it
print(ref() is None)          # True
```

A **weak reference** points at an object without keeping it alive; caches use them so that an unused entry can disappear. Memory "leaks" in managed languages are almost always objects that something still points at, such as a cache that only grows or a long-lived list that keeps every old item.

## Subtle corners {lvl=3 id=s-corners label="SDE-2"}

- **`+=` on a list mutates; `+` on a list builds a new list.** With `b = a`, `a += [2]` also changes `b`, but `a = a + [2]` leaves `b` alone. For numbers there is no such split because they are immutable.
- **Immutable does not mean unchanging all the way down.** A tuple cannot swap its items, but `t = ([1],)` allows `t[0].append(2)` since the list inside is mutable.
- **Closures capture names, not values.** `fs = [lambda: i for i in range(3)]` then `[f() for f in fs]` gives `[2, 2, 2]`, since every lambda looks up the same `i` when called. Pin the value with a default: `lambda i=i: i` gives `[0, 1, 2]`.
- **Dict keys must be hashable**, which in practice means immutable (see hash tables). `{[1]: 2}` raises `TypeError` because a list could change after being stored and its slot would then be wrong.
- **Default arguments are made once.** `def f(l=[])` creates the list when `def` runs, so it is shared by every call. Use `None` and make a fresh list inside. The next lessons return to this.

:::qc lvl=3
q: `a = [1]`, `b = a`, `a += [2]`. What is `b`?
options: ["[1]", "[1, 2]", "[2]"]
answer: 1
right: Right. += on a list extends the existing list in place, and b points at that same list.
wrong: Is += for a list a new list, or a change to the same one?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A variable is a name stuck on an object; = binds, never copies. {lvl=1}
2. Rebinding moves one name; mutating changes the object everyone shares. {lvl=1}
3. Lists, dicts and sets are mutable; numbers, text and tuples are not. {lvl=1}
4. == compares contents, is compares identity; use is only for None. {lvl=2}
5. Shallow copies share inner objects; deep copies do not; [row] * n repeats the pointer. {lvl=2}
6. Names live in stack frames, objects in the heap; a function gets a new name for the caller's object. {lvl=2}
7. CPython frees an object when its reference count reaches zero and uses a collector for cycles. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- `b = a` does not copy a list; use `a.copy()`, `a[:]` or `copy.deepcopy(a)`. {lvl=1}
- Never build a grid with `[[0] * c] * r`; use a comprehension. {lvl=2}
- A function that edits a list argument changes the caller's list; copy first if you must not. {lvl=2}
- Do not use `is` to compare numbers or text; use `==`. {lvl=2}
- `def f(items=[])` shares one list across all calls; default to `None`. {lvl=3}
- A cache or global list that only grows is a memory leak even in a language with garbage collection. {lvl=3}
:::
