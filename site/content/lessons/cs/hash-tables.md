---
title: Hash tables
summary: How a system with billions of usernames tells you "taken" before you finish typing. Turning a name into an address, collisions, load factor and resizing, and how the idea scales across many machines.
ncert: []
up_to: SDE-3
builds_on: [Arrays and dynamic arrays, Big-O and growth of cost]
notes_prompt: Explain to a friend who has never programmed how a hash table finds one name among a billion without looking at the others.
margin:
  - kind: history
    title: History
    text: Hans Peter Luhn at IBM described hashing in an internal memo in 1953. Today hash tables sit inside almost every program you use, from Python dictionaries to database indexes.
  - kind: tip
    title: Interview favourite
    text: '"Have I seen this before?" or "count how many times" in a problem is a hint: reach for a hash set or hash map, and an O(n²) solution often becomes O(n).'
  - kind: olympiad
    title: Design link
    text: Hash a key to pick a machine instead of a slot and you have sharding. Consistent hashing lets you add machines without moving most of the keys.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 3 Storage and Retrieval: hash indexes; Ch. 6 Partitioning: by hash of key" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 11 Hash Tables [Unverified]" }
cards:
  - { front: "What does a hash function do?", back: "Turns a key (like a username) into a number, quickly and always the same number for the same key; that number picks a slot in an array." }
  - { front: "Average cost of lookup in a hash table?", back: "O(1): constant time, independent of how many keys are stored (as long as the load factor is kept bounded)." }
  - { front: "What is a collision, and two ways to handle it?", back: "Two keys landing in the same slot. Chaining (a small list per slot) or open addressing (probe the next free slot)." }
  - { front: "What is the load factor, and what happens when it gets high?", back: "Keys ÷ slots. Above a threshold (often around 0.7) the table doubles its array and re-inserts every key; averaged over all inserts this still costs O(1) each." }
  - { front: "Binary search over 2 billion sorted names needs how many comparisons?", back: "About 31, since 2³¹ ≈ 2.1 billion. A hash table needs about 1." }
core:
  idea: 'A hash table stores each key at an address computed from the key itself, so finding it means recomputing the address and looking in one place, not searching. Lookup, insert and delete take constant time on average, however many keys there are.'
  formulas:
    - tex: '\text{slot} = h(\text{key}) \bmod m'
      label: 'Where a key lives (m slots)'
    - tex: '\alpha = n/m'
      label: 'Load factor: keep it bounded and lookups stay O(1)'
  conditions:
    - 'The hash function spreads keys evenly and costs about the same for every key'
    - 'The load factor is kept below a threshold by resizing'
    - 'Keys are compared for exact equality (no "nearest" or range queries: those need trees)'
  sign: 'O(1) is an average, not a promise: a bad hash function or a deliberate attack that piles keys into one slot degrades it to O(n).'
outcomes:
  - 'Explain why scanning a billion names is too slow and why sorting helps but hashing helps more'
  - 'Describe how a key becomes an array index, and what happens on a collision'
  - 'Reason about load factor, resizing and why the average cost stays O(1)'
  - 'Spot hash-map solutions in interview problems'
  - 'Sketch how a username check could work across many machines'
opener:
  story: |
    You open Instagram, tap **Create account**, and type *himanshu*. Before your thumb even lifts off the screen, a little red line appears: **username taken**.

    Pause on that for a second. Somewhere there is a list of more than two billion names. A computer checked yours against that list in a few hundredths of a second, while millions of other people around the world were typing names too.

    It didn't read the list. It couldn't have; that would take far too long. So what did it do?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A phone checks a username by jumping straight to one slot in a big table"><rect x="16" y="22" width="104" height="196" rx="16" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="30" y="70" width="76" height="22" rx="5" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="36" y="85" style="font-size:11px;fill:var(--ink)">himanshu</text><text x="30" y="108" style="font-size:10px;fill:var(--bad)">✗ username taken</text><text x="30" y="56" style="font-size:10px;fill:var(--muted)">Create account</text><path d="M122 82 C160 82 168 120 196 120" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="128" y="70" style="font-size:10px;fill:var(--c)">h(name) = 17</text><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="200" y="30" width="24" height="24"/><rect x="228" y="30" width="24" height="24"/><rect x="256" y="30" width="24" height="24"/><rect x="284" y="30" width="24" height="24"/><rect x="200" y="58" width="24" height="24"/><rect x="228" y="58" width="24" height="24"/><rect x="256" y="58" width="24" height="24"/><rect x="284" y="58" width="24" height="24"/><rect x="200" y="86" width="24" height="24"/><rect x="228" y="86" width="24" height="24"/><rect x="256" y="86" width="24" height="24"/><rect x="284" y="86" width="24" height="24"/><rect x="228" y="114" width="24" height="24"/><rect x="256" y="114" width="24" height="24"/><rect x="284" y="114" width="24" height="24"/><rect x="200" y="142" width="24" height="24"/><rect x="228" y="142" width="24" height="24"/><rect x="256" y="142" width="24" height="24"/><rect x="284" y="142" width="24" height="24"/></g><rect x="200" y="114" width="24" height="24" style="fill:var(--c)"/><text x="204" y="186" style="font-size:10px;fill:var(--muted)">2 billion names,</text><text x="204" y="200" style="font-size:10px;fill:var(--muted)">one place to look</text></svg>'
life:
  - 'Every Python dict and set, JavaScript object and Map, and Java HashMap is a hash table.'
  - 'Your phone''s contacts search, a browser''s cache of visited pages and a compiler''s table of variable names all use hashing.'
  - 'Databases keep hash indexes so that "find the row with this key" is one disk read.'
  - 'Passwords are stored as hashes (with a different, deliberately slow kind of hash function) so a leaked database does not reveal them.'
models:
  - name: 'Compute, don''t search'
    text: 'The fastest way to find something is to know where it must be. A library that shelves books by a rule you can recompute (say, the first letter of the title) never needs a search. Look for rules that turn "where is it?" into arithmetic.'
  - name: 'Trade memory for time'
    text: 'A hash table keeps empty slots on purpose to stay fast. Many good designs spend a resource you have plenty of (memory, storage, precomputation) to save one you lack (time).'
  - name: 'Averages hide spikes'
    text: 'Resizing is slow once in a while but cheap averaged over all operations. When judging any system (a budget, a commute, a server), look at both the average and the worst case.'
links:
  - leaf: 'cs/arrays'
    name: 'Arrays'
    same: 'A hash table is an array underneath: the hash just tells you which index to use, and reaching an index is instant in both.'
    differs: 'An array needs you to know the index; a hash table computes it from a key such as a name, at the price of collisions and empty slots.'
  - leaf: 'cs/searching-and-binary-search'
    name: 'Binary search'
    same: 'Both avoid looking at every item, so both crush a linear scan on large data.'
    differs: 'Binary search needs sorted data and takes about log₂ n steps (31 for 2 billion) but supports "nearest" and range queries; hashing takes about 1 step but only answers exact matches.'
next:
  q: 'Most usernames people type are already taken. Could the system answer "definitely available" or "probably taken" without even touching the database, using just a few megabytes of memory per billion names?'
  leaf: 'cs/bloom-filters'
  name: 'Bloom filters'
---

:::hook
q: Here's the puzzle. How many stored names do you think it compared yours with?
options: ["All two billion, very fast", "About 31", "One or two"]
answer: 2
right: Right. With hashing, it computes where your name would be stored and looks there. One or two comparisons, whether there are a thousand names or a billion. (Instagram's actual internals are not public; this is how such a check is typically built. [Inference])
wrong: Checking every name one by one, even at a billion comparisons a second, takes about a second per keystroke for every user typing at once. There is a much better trick: work out where the name must be.
:::

## The problem {lvl=1 id=s-problem label="Foundations"}

Imagine the usernames are written in a giant notebook, one per line, in the order people signed up. To check "himanshu", you read line 1, line 2, line 3... With 2 billion lines, a check takes up to 2 billion comparisons. A fast computer does maybe a few hundred million simple comparisons a second, so each keystroke would cost seconds, and millions of people are typing at once. Hopeless.

Better: keep the notebook **sorted**, like a dictionary. Open it in the middle; your name is either in the first half or the second. Halve again, and again. Each look throws away half of what is left, so 2 billion names need only about 31 looks ($2^{31} \approx 2.1$ billion). That is **binary search**, and it is a huge improvement.

But can we do better than 31? What if we could look **once**?

## The trick: compute where it lives {lvl=1 id=s-trick label="Foundations"}

Think of a cloakroom with 1,000 numbered hooks. You do not hang coats in arrival order. Instead you take the visitor's name, apply a fixed recipe that turns it into a number between 0 and 999 (say, add up the letters' codes and keep the last three digits), and hang the coat on that hook. When the visitor comes back, you apply the same recipe to their name and walk straight to the hook. You never search.

That recipe is a **hash function**, the row of hooks is an **array**, and together they make a **hash table**:

$$\text{slot} = h(\text{key}) \bmod m$$

in words: "turn the key into a big number, then take the remainder after dividing by the number of slots $m$". The remainder is always between 0 and $m-1$, a valid index into the array.

```python
taken = set()            # Python's set is a hash table
taken.add("himanshu")
"himanshu" in taken      # True, in about one step
"himanshu_68" in taken   # False, also about one step
```

:::qc lvl=1
q: A hash table holds 1,000 names and lookup takes about 1 step. Roughly how many steps for 1 billion names?
options: ["About 1", "About 30", "About a million"]
answer: 0
right: Right. The cost does not grow with the number of names; that is what O(1) means.
wrong: Recomputing the slot does not depend on how many names are stored. What changes as the table grows?
:::

## Collisions {lvl=2 id=s-collisions label="SDE-1"}

There are more possible names than hooks, so two names will sometimes land on the same slot: a **collision**. It is unavoidable (more pigeons than holes). Two standard fixes:

- **Chaining**: each slot holds a short list. On a collision, add to the list; on lookup, check the few names in that list.
- **Open addressing**: if the slot is full, try the next one (or jump by a fixed pattern) until you find the key or an empty slot. Python's dict works this way.

Either way, lookups stay fast **as long as each slot holds only a few keys on average**.

## Load factor and resizing {lvl=2 id=s-load label="SDE-1"}

The **load factor** $\alpha = n/m$ is keys per slot. With a good hash function the expected work per lookup grows with $\alpha$, not with $n$. So keep $\alpha$ bounded: when it passes a threshold (often about 0.7), allocate an array twice as large and re-insert every key.

A resize is slow, $O(n)$, but it happens rarely: after doubling, you can insert as many keys again before the next one. Spread over all inserts, each costs $O(1)$ on average. This is called **amortised** cost, and it is the same reason a dynamic array's append is $O(1)$.

## What makes a good hash function {lvl=3 id=s-good label="SDE-2"}

A good hash for a table must be **fast**, **deterministic** (same key, same number, every time) and **spread keys evenly**, so that similar keys ("anna1", "anna2") land far apart. Summing letter codes is a poor choice: "listen" and "silent" collide. Real tables use functions that mix every bit of the key.

There is a security twist. If an attacker knows your hash function, they can send keys that all collide, turning every lookup into a long scan and slowing your server to a crawl. Languages such as Python therefore randomise their string hashing per process. [Unverified detail: the exact algorithm varies by version.]

Hashes for **passwords** are a different family on purpose: slow and salted, so guessing is expensive. Never use a fast table hash to store passwords.

## A billion names on many machines {lvl=4 id=s-scale label="SDE-3"}

Two billion usernames with their account records will not fit on one machine, so the data is **partitioned**: the same trick, one level up. Hash the username to choose a **machine** (a shard), then that machine's own index finds the record. Every request for "himanshu" goes straight to the one shard that could hold it.

A sketch of a username check at this scale [Inference: a typical design, not Instagram's documented one]:

1. A **cache** in memory answers the most common checks ("john" is always taken).
2. A **Bloom filter** (next lesson) answers "definitely available" instantly for most free names.
3. Only uncertain cases reach the **sharded database**, where hash-partitioning sends the query to a single machine.
4. Uniqueness at sign-up time is enforced by that machine with a unique index, so two people cannot grab the same name in the same millisecond.

Plain `hash mod number_of_machines` has a flaw: add one machine and almost every key moves. **Consistent hashing** places machines and keys on a circle so that adding a machine moves only about $1/N$ of the keys. Designing Data-Intensive Applications, Chapter 6, compares these partitioning schemes.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Scanning is O(n); binary search on sorted data is O(log n), about 31 steps for 2 billion. {lvl=1}
2. A hash table computes where a key lives, so a lookup is about one step: O(1) on average. {lvl=1}
3. Collisions are unavoidable; chaining or open addressing handles them. {lvl=2}
4. Keep the load factor bounded by doubling the array; resizing is O(1) amortised. {lvl=2}
5. Good table hashes are fast and spread keys evenly; password hashes are slow on purpose. {lvl=3}
6. Hashing a key to pick a machine is sharding; consistent hashing limits data movement. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Hash tables answer "is this exact key here?", not "what is the nearest key?" or "all keys between A and B": use a tree for those. {lvl=1}
- O(1) is average-case; adversarial or badly distributed keys can make it O(n). {lvl=3}
- Never use a mutable object as a key: if it changes, its hash changes and the entry is lost. {lvl=2}
- In interviews, "seen before?", "count occurrences" and "find a pair that sums to X" all suggest a hash map. {lvl=2}
:::
