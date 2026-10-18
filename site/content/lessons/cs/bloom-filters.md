---
title: Bloom filters
summary: A small sheet of switches that says "definitely not here" or "maybe here", so a slow database is asked only when it has to be.
ncert: []
up_to: SDE-3
builds_on: [Hash tables, Big-O and growth of cost]
notes_prompt: Explain to a friend why a guard who sometimes says "maybe" but never wrongly says "no" is still very useful.
margin:
  - kind: history
    title: History
    text: Burton Howard Bloom described the idea in a 1970 paper on "space/time trade-offs in hash coding with allowable errors" [Unverified]. It was a way to save memory when memory was tiny; it is still used because data got bigger as fast as memory did.
  - kind: tip
    title: Interview favourite
    text: '"Is it definitely absent?" with a huge set and a little memory is the signal. Say the one-sided error out loud: no false negatives, a tunable rate of false positives.'
  - kind: olympiad
    title: Design link
    text: Storage engines that keep data in many sorted files can keep one small filter per file, so a lookup for a missing key skips almost every file without reading it.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 3 Storage and Retrieval: Bloom filters in LSM-tree storage [Unverified chapter detail]" }
  - { title: "M. Mitzenmacher and E. Upfal, Probability and Computing", ref: "Bloom filters and their false positive analysis [Unverified chapter number]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Hashing chapter, for the background [Unverified]" }
cards:
  - { front: "What does a Bloom filter answer?", back: "Is this key in the set? Either 'definitely not' or 'probably yes'. It never wrongly says 'definitely not' for something that was added." }
  - { front: "How does adding a key work?", back: "Run the key through k hash functions to get k positions in a bit array of m bits, and switch those bits on." }
  - { front: "How does checking a key work?", back: "Compute the same k positions. If any bit is off, the key was never added. If all are on, it was probably added." }
  - { front: "Why can it give false positives?", back: "Bits are shared. Other keys can switch on, by chance, exactly the k bits your key needs." }
  - { front: "Rule of thumb for sizing?", back: "About 9.6 bits per key and 7 hash functions give a 1% false positive rate; about 14.4 bits per key and 10 hashes give 0.1%." }
  - { front: "What can a plain Bloom filter not do?", back: "Delete a key, list its keys, or grow: you must decide the size for the number of keys in advance." }
core:
  idea: 'A Bloom filter is a row of bits plus a few hash functions. Adding a key switches on a few bits; checking a key asks whether all of its bits are on. A single off bit proves the key was never added, so the answer "no" is always right, while "yes" only means "probably".'
  formulas:
    - tex: 'p \approx \left(1 - e^{-kn/m}\right)^k'
      label: 'False positive rate with n keys, m bits, k hashes'
    - tex: 'k \approx \frac{m}{n}\ln 2'
      label: 'Best number of hash functions'
    - tex: 'm \approx -\frac{n \ln p}{(\ln 2)^2}'
      label: 'Bits needed for a target rate p'
  conditions:
    - 'The hash functions behave like independent, evenly spreading dice'
    - 'The number of keys stays at or below the n the filter was sized for'
    - 'A false positive costs only a little extra work (one more lookup), never a wrong final answer'
    - 'Keys are only added, never removed'
  sign: 'The error is one-sided. Never read "yes" as a fact: it means "go and check properly". Never forget that a filter that is filled beyond its planned size drifts towards answering "yes" to everything.'
outcomes:
  - 'Explain why a cheap "definitely not" answer saves an expensive lookup'
  - 'Add and check keys on a small Bloom filter by hand'
  - 'Say why false negatives are impossible and false positives are not'
  - 'Size a filter for a given number of keys and false positive rate'
  - 'Decide where a Bloom filter helps in a system and where it does not'
opener:
  story: |
    You are building the sign-up page. Every time someone types a username, your server asks the main database: "is this taken?" Each question crosses a network, waits for a disk, and costs a little money. With millions of people typing and retyping, those little costs add up to a bill and a slow page.

    Now notice something about the question. For a huge number of the names people try, the honest answer is a flat **no, nobody has that**. If only you could answer those cases yourself, instantly, without bothering the database, most of the load would vanish.

    But you cannot keep two billion names in memory just to do that. So here is a strange bargain to consider: what if your guard were allowed to be wrong sometimes, as long as it is wrong in a safe direction?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A row of switches. Two names switch on some of them; a third name finds one switch off and is declared definitely absent"><text x="16" y="24" style="font-size:11px;fill:var(--muted)">a sheet of 16 switches</text><g style="stroke:var(--ink);stroke-width:1.2"><rect x="16" y="40" width="16" height="20" style="fill:var(--surface)"/><rect x="36" y="40" width="16" height="20" style="fill:var(--c)"/><rect x="56" y="40" width="16" height="20" style="fill:var(--surface)"/><rect x="76" y="40" width="16" height="20" style="fill:var(--c)"/><rect x="96" y="40" width="16" height="20" style="fill:var(--surface)"/><rect x="116" y="40" width="16" height="20" style="fill:var(--c)"/><rect x="136" y="40" width="16" height="20" style="fill:var(--surface)"/><rect x="156" y="40" width="16" height="20" style="fill:var(--surface)"/><rect x="176" y="40" width="16" height="20" style="fill:var(--c)"/><rect x="196" y="40" width="16" height="20" style="fill:var(--surface)"/><rect x="216" y="40" width="16" height="20" style="fill:var(--c)"/><rect x="236" y="40" width="16" height="20" style="fill:var(--surface)"/><rect x="256" y="40" width="16" height="20" style="fill:var(--surface)"/><rect x="276" y="40" width="16" height="20" style="fill:var(--c)"/><rect x="296" y="40" width="16" height="20" style="fill:var(--surface)"/></g><g style="fill:none;stroke:var(--c);stroke-width:1.3"><path d="M44 78 L44 64"/><path d="M84 78 L84 64"/><path d="M124 78 L124 64"/></g><text x="16" y="96" style="font-size:11px;fill:var(--ink)">asha added: 3 switches on</text><g style="fill:none;stroke:var(--c);stroke-width:1.3"><path d="M184 150 L184 64"/><path d="M224 150 L224 64"/><path d="M284 150 L284 64"/></g><text x="180" y="168" style="font-size:11px;fill:var(--ink)">ravi added</text><g style="fill:none;stroke:var(--bad);stroke-width:1.3;stroke-dasharray:4 3"><path d="M104 206 L104 64"/><path d="M124 206 L124 64"/><path d="M144 206 L144 64"/></g><text x="16" y="222" style="font-size:11px;fill:var(--bad)">zoya? one switch is off,</text><text x="16" y="236" style="font-size:11px;fill:var(--bad)">so: definitely not added</text></svg>'
life:
  - 'Sign-up forms and games can answer "definitely available" from memory and ask the database only about the rest.'
  - 'Databases that keep data in many sorted files keep a small filter per file, so a read for a missing key skips nearly all of them without touching the disk.'
  - 'Browsers and security tools have used compact filters to pre-check URLs against huge lists of known bad sites before doing a slower exact check [Unverified: details differ by product and version].'
  - 'Content delivery networks can use a filter to remember "have I seen this file before?" so they only store files that were requested twice [Inference: a published technique, not verified for any one company].'
  - 'A shop assistant who says "we definitely don''t stock that" or "I think we do, let me look" is a Bloom filter with a good memory.'
models:
  - name: 'One-sided mistakes are cheap'
    text: 'Design checks so that the mistake they can make is the harmless one. A smoke alarm that sometimes rings for toast is a fine alarm; one that sometimes stays silent in a fire is not. Ask which error costs more and make the cheap one the only one possible.'
  - name: 'A cheap test before an expensive one'
    text: 'Doctors screen before they operate, banks flag before they investigate, and recruiters shortlist before they interview. A fast test that is allowed to be rough saves the expensive test for the cases that need it.'
  - name: 'Overlap is both the saving and the risk'
    text: 'Sharing bits between keys is exactly why the filter is tiny, and exactly why it sometimes confuses two keys. Shared roads, shared servers and shared flats work the same way: sharing makes things cheaper until it fills up.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both turn a key into positions in an array using a hash function, and both answer in about one step regardless of how many keys exist.'
    differs: 'A hash table stores the keys themselves and always answers exactly. A Bloom filter stores only switches, which is why it is far smaller, and why it can say "probably".'
  - leaf: 'mat/classical-probability'
    name: 'Classical probability'
    same: 'The false positive rate is a probability computed by counting how likely it is that other keys have switched on all of your key''s bits.'
    differs: 'Here the probabilities multiply across k hash functions and are tuned by design, rather than found by listing outcomes.'
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'Both put a small fast thing in front of a big slow thing to avoid trips to the slow one.'
    differs: 'A cache stores copies of the answers. A Bloom filter stores no answers at all, only a guarantee about absence.'
next:
  q: 'A Bloom filter cannot list its keys, cannot say what comes next in alphabetical order, and cannot answer "all names between asha and ravi". How do we keep data in order, and as a hierarchy, so that such questions are quick?'
  leaf: 'cs/trees'
  name: 'Trees and binary search trees'
symbols:
  - s: 'n'
    means: 'number of keys added to the filter (count)'
  - s: 'm'
    means: 'number of bits (switches) in the filter (count)'
  - s: 'k'
    means: 'number of hash functions, so also the number of switches each key touches (count)'
  - s: 'p'
    means: 'false positive rate: the chance that a key never added is reported as "maybe here" (a fraction between 0 and 1)'
  - s: '\ln'
    means: 'natural logarithm, the "how many times must e grow" button on a calculator; \ln 2 is about 0.693'
  - s: 'e^{-x}'
    means: 'a number that shrinks smoothly towards zero as x grows; e is about 2.718'
---

:::hook
q: Your guard keeps a sheet of switches and may sometimes be wrong. Which mistake should we allow it to make?
options: ["Say 'not here' about a name that is actually taken", "Say 'maybe here' about a name that is actually free", "Either mistake, we can't choose"]
answer: 1
right: Right. A "maybe" only costs one extra database check, which then gives the true answer. A wrong "not here" would let two people claim the same name. A Bloom filter is built so that the first mistake is impossible and the second is rare and tunable.
wrong: Think about what each mistake leads to. One causes a wasted lookup; the other causes two people to share a username. We get to choose the harmless one, and the design makes sure only that one can happen.
:::

## Why not just keep the names? {lvl=1 id=s-why label="Foundations"}

Suppose each username is about 16 bytes of text. Two billion of them is already 32 GB, and a real in-memory set adds overhead on top of that. That is a lot of memory to buy only to answer one question.

Look at what we actually need. Not "where is the record?" but only **"is this name possibly taken?"** A yes/no. Yes/no answers need far less room than the names themselves, if we accept one thing: the answer "yes" may sometimes be a bit too eager.

Why is that acceptable? Because of the two possible mistakes, one is cheap. If the filter says "maybe taken" for a free name, we ask the database and get the true answer: a small waste. If it said "free" for a taken name, we would hand out a duplicate: a real bug. So the filter must be built so that "free" is **always** trustworthy.

## Switches and fingerprints {lvl=1 id=s-switches label="Foundations"}

Picture a long panel of light switches, all off to start. Call the number of switches $m$ (for a real filter, millions or billions).

Each name gets a few **fingerprints**: positions on the panel worked out from the name by a fixed recipe (a hash function, as in the last lesson). Say each name gets $k$ fingerprints, so $k = 3$ means three positions.

- **Adding** a name: switch **on** its three positions. Leave anything already on as it is.
- **Checking** a name: work out its three positions and look. If **any** switch is off, the name was never added: nobody could have switched that one on. If **all** three are on, the name was *probably* added.

:::figure caption="Asha and Ravi were added, each switching on three positions. Zoya's positions include one that is still off, so Zoya was certainly never added."
<svg viewBox="0 0 320 150" role="img" aria-label="A row of 16 switches with names pointing to three positions each">
<g style="stroke:var(--ink);stroke-width:1.2">
<rect x="10" y="50" width="16" height="22" style="fill:var(--surface)"/><rect x="28" y="50" width="16" height="22" style="fill:var(--mat)"/><rect x="46" y="50" width="16" height="22" style="fill:var(--surface)"/><rect x="64" y="50" width="16" height="22" style="fill:var(--mat)"/><rect x="82" y="50" width="16" height="22" style="fill:var(--surface)"/><rect x="100" y="50" width="16" height="22" style="fill:var(--mat)"/><rect x="118" y="50" width="16" height="22" style="fill:var(--surface)"/><rect x="136" y="50" width="16" height="22" style="fill:var(--surface)"/>
<rect x="154" y="50" width="16" height="22" style="fill:var(--mat)"/><rect x="172" y="50" width="16" height="22" style="fill:var(--surface)"/><rect x="190" y="50" width="16" height="22" style="fill:var(--mat)"/><rect x="208" y="50" width="16" height="22" style="fill:var(--surface)"/><rect x="226" y="50" width="16" height="22" style="fill:var(--surface)"/><rect x="244" y="50" width="16" height="22" style="fill:var(--mat)"/><rect x="262" y="50" width="16" height="22" style="fill:var(--surface)"/><rect x="280" y="50" width="16" height="22" style="fill:var(--surface)"/>
</g>
<g style="font-size:10px;fill:var(--muted)" text-anchor="middle"><text x="18" y="86">0</text><text x="36" y="86">1</text><text x="54" y="86">2</text><text x="72" y="86">3</text><text x="90" y="86">4</text><text x="108" y="86">5</text><text x="126" y="86">6</text><text x="144" y="86">7</text><text x="162" y="86">8</text><text x="180" y="86">9</text><text x="198" y="86">10</text><text x="216" y="86">11</text><text x="234" y="86">12</text><text x="252" y="86">13</text><text x="270" y="86">14</text><text x="288" y="86">15</text></g>
<g style="font-size:11px;fill:var(--ink)"><text x="10" y="20">Asha: 1, 3, 5 (on)</text><text x="170" y="20">Ravi: 8, 10, 13 (on)</text><text x="10" y="120" style="fill:var(--bad)">Zoya: 5, 6, 10, so 6 is off: not added</text></g>
<g style="fill:none;stroke:var(--muted);stroke-width:1"><path d="M60 26 L36 48"/><path d="M60 26 L72 48"/><path d="M60 26 L108 48"/></g>
</svg>
:::

```python
bits = [0] * 16            # all switches off

def add(positions):
    for p in positions:
        bits[p] = 1

def maybe_has(positions):
    return all(bits[p] for p in positions)
```

Here `positions` is the list of fingerprints of one name, say `[1, 3, 5]` for Asha. Everything else in a real filter is this loop, with a hash function producing the positions.

:::qc lvl=1
q: A check finds two of a name's three switches on and one off. What do we know?
options: ["The name was never added", "The name was probably added", "The name was added, but one switch broke"]
answer: 0
right: Right. Adding a name switches on all three of its switches, and switches are never turned off. One off switch proves the name was never added.
wrong: When a name is added, all of its switches go on, and nothing turns them off again. So what must be true of any name that has an off switch?
:::

## Why "no" is always right, and "yes" is not {lvl=2 id=s-errors label="SDE-1"}

**No false negatives.** Every key that was added switched on all of its positions, and switches only ever go from off to on. So an added key finds all its switches on, every time. A key with an off switch therefore cannot be in the set.

**False positives happen.** Positions are shared. A name nobody added may find, by bad luck, that Asha, Ravi and others between them switched on its exact three positions. The filter says "maybe", though the name was never added. That is a **false positive**.

Real numbers help. Take $m = 1000$ switches, $n = 100$ names added, $k = 3$ fingerprints each. That is 300 switch-flips, and some land on the same switch, so a bit under 300 are on. A name never added must find all three of its (random) positions on. The fraction of switches on is about 26%, and $0.26^3 \approx 0.017$. So **about 1.7% of free names would get a "maybe"**, and the other 98.3% get a firm "no" without bothering the database.

:::note title="Which side is the guarantee on?" tone=tip
"No" is a guarantee. "Yes" is a hint. Whenever the filter says yes, you must do the real check (the database, the disk, the exact set) before believing it.
:::

## A real one in Python {lvl=2 id=s-code label="SDE-1"}

The fingerprints must be the same every time for the same name and spread out evenly. A common shortcut is to compute one big hash and cut it into two numbers, `a` and `b`, then use `a + i·b` as the $i$-th fingerprint.

```python
import hashlib

def positions(key, m, k):
    d = hashlib.sha256(key.encode()).digest()
    a = int.from_bytes(d[:8], "big")
    b = int.from_bytes(d[8:16], "big") | 1
    return [(a + i * b) % m for i in range(k)]
```

The `% m` folds each number into the range `0 .. m-1`, as in the last lesson. The `| 1` just makes `b` odd, which keeps the positions from repeating too soon. Now the filter itself:

```python
class Bloom:
    def __init__(self, m, k):
        self.m, self.k = m, k
        self.bits = bytearray(m // 8 + 1)    # 8 switches per byte

    def add(self, key):
        for p in positions(key, self.m, self.k):
            self.bits[p // 8] |= 1 << (p % 8)

    def might_contain(self, key):
        return all(self.bits[p // 8] >> (p % 8) & 1
                   for p in positions(key, self.m, self.k))
```

Storing eight switches in each byte is why the filter is small. The method is named `might_contain` on purpose: the name reminds every reader that "True" is not a fact.

:::qc lvl=2
q: You add 5 names to a freshly made filter, then call might_contain on one of those 5. What can it return?
options: ["Only True", "True or False, depending on luck", "Only False"]
answer: 0
right: Right. An added name always finds all its switches on, so there are no false negatives. Only names you did not add can get a surprising True.
wrong: Switches are never turned off after being switched on. What does that say about names that were added?
:::

## Sizing the filter {lvl=3 id=s-sizing label="SDE-2"}

How big must the panel be? Three things pull against each other: more switches $m$ means fewer collisions; more keys $n$ means more switches get turned on; and more fingerprints $k$ make a "maybe" harder to get by luck, but also switch on more bits per key.

The false positive rate $p$ works out, for random hashing, as

$$p \approx \left(1 - e^{-kn/m}\right)^k$$

Read it as: "$kn/m$ is how many flips each switch expects; $e^{-kn/m}$ is the chance a given switch is still off; one minus that is the chance it is on; and a free name needs all $k$ of its switches on, so we raise to the power $k$."

Too few fingerprints let in too much chance; too many fill the panel. The best choice is where about **half** the switches end up on, which gives

$$k \approx \frac{m}{n}\ln 2$$

Read it as: "use about 0.69 fingerprints for every switch you have per key". With that $k$, the number of bits needed for a target rate $p$ is

$$m \approx -\frac{n \ln p}{(\ln 2)^2}$$

Read it as: "bits per key grow with how many digits of certainty you want, about 1.44 bits for each time you halve $p$".

| Target $p$ | Bits per key | Fingerprints $k$ |
|---|---|---|
| 10% | 4.8 | 3 |
| 1% | 9.6 | 7 |
| 0.1% | 14.4 | 10 |
| 0.0001% | 28.8 | 20 |

Each tenfold improvement costs only about 4.8 more bits per key. For 1 billion names at 1%, that is $9.6 \times 10^9$ bits, about **1.2 GB**. (It is not "a few megabytes": that would be too optimistic by a factor of a hundred.) It is still roughly ten times smaller than storing the names, and it lives happily in memory, split across several machines if needed.

```python
from math import log, ceil

def size(n, p):
    m = ceil(-n * log(p) / log(2) ** 2)
    k = round(m / n * log(2))
    return m, k

print(size(1_000_000, 0.01))   # (9585059, 7)
```

:::qc lvl=3
q: You have room for 10 bits per key. About how many fingerprints per key should you use?
options: ["1", "7", "40"]
answer: 1
right: Right. $k \approx 10 \times 0.693 \approx 7$, which gives a false positive rate of about 0.8%.
wrong: Use the rule $k \approx (m/n)\ln 2$ with $m/n = 10$ bits per key. Too few fingerprints let luck through; too many fill the panel.
:::

## What a Bloom filter cannot do {lvl=3 id=s-limits label="SDE-2"}

- **No deletion.** Switching off a name's bits could also switch off bits that other names rely on, creating false negatives, the one thing we promised never to do. A **counting Bloom filter** keeps a small counter per position instead of a bit, so it can add and subtract, at about four times the memory [Unverified: counter width varies].
- **No growth.** The false positive rate is set by how full the panel gets. Add far more than $n$ keys and $p$ climbs towards 1, until every answer is "maybe". The usual fix is to build a bigger filter and refill it from the real data, or to chain filters (a "scalable" Bloom filter).
- **No listing and no order.** Only switches are stored, never the names. You cannot ask for names that start with "as" or the next name alphabetically.
- **Merging is easy.** Two filters of the same size and recipe combine by OR-ing their bits, which is the filter of the union of both sets.
- **Alternatives exist.** Cuckoo filters and similar structures support deletion and can be smaller at low error rates [Unverified: trade-offs depend on the implementation].

## Where it earns its place in a system {lvl=4 id=s-systems label="SDE-3"}

A filter pays for itself when three things hold: the expensive lookup is really expensive (network, disk), a large share of queries are for keys that are **absent**, and a small rate of wasted lookups is acceptable.

Work out the saving. Say 70% of queries are for absent keys, and the filter's rate is 1%. Of 1,000 queries, 700 are absent; the filter correctly blocks about 693 of them. Only 7 absent keys leak through, plus the 300 present ones: 307 lookups instead of 1,000. If almost every query is for a **present** key, the same filter blocks nothing and is wasted memory.

A sketch of a username check at scale [Inference: a typical design, not any company's documented one]:

1. The filter, held in memory and replicated across the web servers, answers "definitely free" for most free names.
2. A "maybe" goes to the sharded database, which gives the true answer.
3. When someone finally claims a name, the database enforces uniqueness (the filter never decides that), and the name is added to the filter. The filter is only an optimisation in front of the source of truth.

Storage engines that keep data in many immutable sorted files (the LSM-tree design, covered later in **Indexes**) are the classic use. A read looks in the newest file first, then the next, and so on. Without help, a missing key costs a disk read per file. With a small filter per file, nearly all of those reads are skipped. Cassandra and RocksDB are commonly described as doing this [Unverified: from memory].

The operational questions are the ones in the sizing table: how many keys will arrive (so $m$ is right), what $p$ is tolerable, how to rebuild the filter when it fills, and how to ship the bit array to many machines.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A Bloom filter answers "definitely not here" or "probably here", using far less memory than the keys themselves. {lvl=1}
2. Add: switch on $k$ positions. Check: are all $k$ on? One off switch proves the key was never added. {lvl=1}
3. There are no false negatives. False positives happen because bits are shared between keys. {lvl=2}
4. With about 9.6 bits and 7 hashes per key, the false positive rate is about 1%; each extra 4.8 bits per key divides it by ten. {lvl=3}
5. Plain filters cannot delete, list or grow; counting filters delete, and growth means rebuilding. {lvl=3}
6. A filter helps when lookups are expensive and most queries are for absent keys; the source of truth still decides every "maybe". {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never treat "yes" as certain. It means "go and check". {lvl=1}
- Do not clear a bit to "delete" a key: you will create false negatives for other keys. {lvl=2}
- Size for the number of keys you will really have. Overfilled, the filter says "maybe" to almost everything. {lvl=3}
- Do not use a filter where most queries are for keys that exist: it saves nothing. {lvl=4}
- Pick $k$ from the formula; more fingerprints is not always better. {lvl=3}
- In interviews: "huge set, little memory, no false negatives allowed, a few false positives fine" points to a Bloom filter. {lvl=2}
:::
