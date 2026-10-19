---
title: Partitioning and sharding
summary: What to do when your data is too big for any one machine, and how to split it so no machine is overloaded and nothing gets lost.
ncert: []
up_to: SDE-3
builds_on: [Hash tables, Indexes, Replication, Load balancing]
notes_prompt: Explain to a friend how a library with a billion books could be split across many buildings, and how you would find a book without asking every building.
margin:
  - kind: history
    title: History
    text: Splitting a database by hand across servers (sharding) was a common web-company fix in the 2000s. Systems that do it automatically, such as Google's Bigtable and Amazon's Dynamo, were described in widely read papers in the mid-2000s. [Unverified]
  - kind: tip
    title: Interview favourite
    text: 'Say the partition key first, then what it makes cheap and what it makes costly. "Shard by user id" means a user''s data is on one machine, but "all posts across users" now touches every shard.'
  - kind: olympiad
    title: Design link
    text: Hashing by "key mod N" moves almost every key when N changes. Consistent hashing is a neat fix, found by mapping both machines and keys onto a circle so only a neighbour's keys move.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 6 Partitioning [Unverified]" }
  - { title: "D. Karger et al., Consistent Hashing and Random Trees (paper, 1997)", ref: "Origin of consistent hashing [Unverified]" }
cards:
  - { front: "Partitioning versus replication?", back: "Replication keeps full copies of the same data on several machines. Partitioning splits the data so each machine holds only a part. Real systems do both: each partition is replicated." }
  - { front: "Key-range partitioning: strength and weakness?", back: "Keys stay sorted, so range queries are cheap. But if keys are sequential (like timestamps) all new writes hit one partition, a hot spot." }
  - { front: "Hash partitioning: strength and weakness?", back: "Hashing the key spreads data evenly. But neighbouring keys scatter, so range queries must ask every partition." }
  - { front: "Why is hash(key) mod N a bad way to assign machines?", back: "When N changes, almost every key maps to a different machine (about N/(N+1) of them), so nearly all data must move." }
  - { front: "How does consistent hashing limit movement?", back: "Machines and keys are placed on a circle and each key belongs to the next machine clockwise. Adding a machine takes over only the keys just before it, about 1/N of the data." }
  - { front: "What is a hot spot and one way to fix it?", back: "One partition receiving far more traffic than the others (a celebrity's posts). Split the hot key by adding a small random suffix so its load spreads, at the price of reading all the pieces." }
core:
  idea: 'Partitioning splits data by key across many machines so each holds and serves only a part. A good scheme gives every machine a similar load, lets any request find its machine without asking all of them, and moves little data when machines are added or removed.'
  formulas:
    - tex: '\text{partition} = h(\text{key}) \bmod N'
      label: 'Simple hash partitioning over N machines (moves almost everything when N changes)'
    - tex: '\text{keys moved} \approx \frac{1}{N+1}\ \text{(consistent hashing)}\ \text{vs}\ \frac{N}{N+1}\ \text{(mod } N\text{)}'
      label: 'Fraction of keys that move when one machine is added'
  conditions:
    - 'The partition key spreads load evenly: no single key or key range receives most of the traffic'
    - 'The hash function is well mixed (neighbouring keys land far apart)'
    - 'Most queries name the partition key, so they can go to one partition instead of all'
  sign: 'Even data does not mean even load. A perfect hash still sends all of one celebrity''s traffic to one partition, because the traffic is tied to one key.'
outcomes:
  - 'Explain why data is split, and tell partitioning from replication'
  - 'Compare key-range and hash partitioning and say which queries each makes cheap or costly'
  - 'Recognise hot spots and name two ways to reduce them'
  - 'Explain why mod N breaks and how fixed partitions or consistent hashing fix it'
  - 'Describe how a request finds the right partition, and the cost of secondary indexes'
opener:
  story: |
    When a famous cricketer posts a photo, tens of millions of people open it within minutes. At the same moment, millions of other people are posting holiday pictures and replying to friends, and none of them should notice a thing.

    A billion posts will not fit on one machine, so they are spread over many. But how? If the posts are shared out evenly, so that each machine holds the same number, all those fans still ask for one post, which sits on one machine. That machine melts while its neighbours sit idle.

    So what does "spread evenly" even mean, when some pieces of data are a million times more popular than others?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Five database machines in a row; four have small load bars, one has a tall red bar for a celebrity post"><g style="fill:none;stroke:var(--rule)"><line x1="20" y1="190" x2="300" y2="190"/></g><g style="fill:color-mix(in srgb,var(--c) 30%,var(--surface));stroke:var(--c)"><rect x="30" y="160" width="36" height="30"/><rect x="88" y="150" width="36" height="40"/><rect x="146" y="165" width="36" height="25"/><rect x="262" y="155" width="36" height="35"/></g><rect x="204" y="40" width="36" height="150" style="fill:var(--bad);stroke:var(--ink)"/><g style="font-size:10px;fill:var(--muted)"><text x="30" y="206">M1</text><text x="88" y="206">M2</text><text x="146" y="206">M3</text><text x="204" y="206">M4</text><text x="262" y="206">M5</text></g><text x="168" y="30" style="font-size:10px;fill:var(--bad)">one celebrity post</text><path d="M205 34 L205 34" style="stroke:var(--bad)"/><text x="30" y="228" style="font-size:10px;fill:var(--ink)">same data on each machine, very different load</text><text x="30" y="120" style="font-size:10px;fill:var(--muted)">idle</text></svg>'
symbols:
  - s: 'N'
    means: 'number of machines (or partitions) the data is spread over (count)'
  - s: 'h(\text{key})'
    means: 'hash function: turns a key into a large whole number'
  - s: '\bmod'
    means: 'remainder after division, used to fold a hash into the range 0 to N - 1'
  - s: 'partition key'
    means: 'the field whose value decides which partition a record goes to (such as user id)'
  - s: 'shard'
    means: 'one partition of the data, usually living on its own machine (or its own group of replicas)'
  - s: 'hot spot'
    means: 'a partition receiving far more traffic than the others'
life:
  - 'Your phone contacts are split alphabetically across a physical address book, with tabs A to Z: key-range partitioning.'
  - 'India Post sorts letters by PIN code first, so each regional office only handles its own area.'
  - 'A social app keeps each user''s data on one machine, found by hashing the user id.'
  - 'A cricket-final ticket site sees one match page hit by millions while other pages are quiet: a hot spot.'
  - 'Telecom and bank customer records are often split by region or by account-number ranges.'
models:
  - name: 'Divide so that each part is independent'
    text: 'A good split makes most work stay inside one part, like a school split into classes: a teacher rarely needs another class to do a day''s teaching. Where work keeps crossing the boundary, the split is wrong.'
  - name: 'Even size is not even load'
    text: 'Equal-sized queues at a bank do not mean equal waiting if one queue holds the person with a hundred forms. Measure the work arriving, not the quantity stored.'
  - name: 'Make change cheap'
    text: 'A plan that is perfect today but forces a full reshuffle whenever anything changes is brittle. Design the way things grow: add a room to a house without rebuilding the walls.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Hash partitioning is the same trick as a hash table: hash the key and go straight to a place. The place is now a machine instead of a slot.'
    differs: 'A slot count rarely changes, but machines come and go, so a plain mod N breaks and consistent hashing is needed.'
  - leaf: 'cs/replication'
    name: 'Replication'
    same: 'Both spread data over machines to improve scale and survive failures, and real systems combine them.'
    differs: 'Replication copies everything for safety and read capacity; partitioning splits for storage and write capacity.'
  - leaf: 'cs/load-balancing'
    name: 'Load balancing'
    same: 'Both aim to share work evenly across machines.'
    differs: 'A load balancer can send any request to any identical server; a partitioned store must send each request to the one machine that holds its data.'
  - leaf: 'mat/modular-arithmetic'
    name: 'Modular arithmetic'
    same: 'The remainder operation that folds a big number into 0 to N - 1 is exactly the mod of number theory.'
    differs: 'In maths N is fixed; in a growing cluster N changes, and that changes every answer.'
next:
  q: 'Your data is now split and copied across dozens of machines, and two people tap "book" on the last seat at the same instant, on two different machines. Who gets it, and how can the machines ever agree?'
  leaf: 'cs/consistency-and-consensus'
  name: 'Consistency and consensus'
---

:::hook
q: Here's the puzzle. Posts are spread over 100 machines with a perfect hash, so each machine holds 1% of them. One celebrity post gets 40% of all reads. What share of all reads does the busiest machine get?
options: ["About 1%, the hash spread everything evenly", "About 40% or a little more", "About 20%"]
answer: 1
right: Right. A hash spreads different keys evenly, but all reads of one post go to the one machine holding that post. That machine takes about 40% plus its share of everything else. Even storage does not give even load. (How a real app handles this is not public. [Inference])
wrong: The hash decides where each post lives, and a post lives in exactly one place. Where do all the reads of the celebrity post go?
:::

## Why split the data {lvl=1 id=s-why label="Foundations"}

Replication gave every machine the whole data set. That does not help when the data is **too big for one machine**: a billion posts, a hundred terabytes, or more writes per second than any one disk can take.

The remedy is **partitioning** (also called **sharding**, and each piece is a **shard**): cut the data into pieces and give each machine a piece. A request for one record goes to one machine, so with 20 machines you can hold 20 times as much and answer about 20 times as many requests. Picture a library too big for one building: split the books across 20 buildings, with a sign at the gate that tells you which building has the book you want.

Two questions decide everything that follows:

1. **How do we choose which piece a record goes to?** (the splitting rule)
2. **How does a request find the right machine?** (routing)

Partitioning and replication work together: each partition is itself replicated, so the system is both split and copied.

:::qc lvl=1
q: Which problem does partitioning solve that replication alone does not?
options: ["Data too big, or too many writes, for one machine", "A machine failing", "Users being far from the data"]
answer: 0
right: Right. Replication copies the whole thing; partitioning splits it so each machine holds only a part.
wrong: Replication already handles failures and nearby copies. What happens when the data is larger than one disk?
:::

## Two ways to split: by range or by hash {lvl=2 id=s-split label="SDE-1"}

**By key range.** Give each machine a stretch of the alphabet or of the numbers: A to F on machine 1, G to M on machine 2, and so on, as in a paper encyclopedia whose volumes are labelled by letters. Keys stay **sorted**, so "all users with names from Asha to Ashok" is one short read from one machine.

The danger is that sorted keys can be unevenly used. If the key is a timestamp, every new write has the newest time, so every write goes to the last partition while the others sit idle. The cure is to put something in front of the timestamp, such as the sensor name, so writes spread.

**By hash of the key.** Compute $h(\text{key})$, and let each machine own a stretch of hash values. Different keys get scattered almost uniformly, so storage is even and sequential keys no longer pile up.

The price: neighbours in key order are scattered, so a **range query** ("all orders from 1 to 7 October") can no longer go to one machine; it must ask all of them, a **scatter-gather**.

| | Key range | Hash |
|---|---|---|
| Even spread of data | Only if you choose boundaries well | Yes, automatically |
| Range query | Cheap, often one partition | Expensive, asks every partition |
| Sequential keys | Create a hot spot | Spread out |
| Typical use | Ordered data, time series with a good key | Lookups by id |

```python
import hashlib

def partition_for(key, n):
    digest = hashlib.md5(key.encode()).digest()   # stable, well mixed
    return int.from_bytes(digest[:8], "big") % n  # 0 .. n-1
```

(Python's built-in `hash()` for strings is randomised per run, so it must not be used for placement.)

:::qc lvl=2
q: A table of orders keyed by order date is split by key range, one partition per month. What happens to writes during October?
options: ["They spread across all partitions", "They all go to the October partition, a hot spot", "They go to the January partition"]
answer: 1
right: Right. Today's orders all have today's date, so they all fall in one range, and one machine does all the writing.
wrong: Which month does every new order belong to at this moment, and so which partition?
:::

## Hot spots {lvl=2 id=s-hot label="SDE-1"}

A **hot spot** is a partition that receives far more traffic than the rest. Hashing cannot cure it when the cause is **one popular key**: a celebrity account, a viral post, a product on sale, the cricket final's match page. All traffic for that key goes to one partition no matter how well the others are spread.

Remedies, from cheap to costly:

- **Cache the hot items.** Reads of a viral post go to a cache in front of the database, so the shard sees one read per few seconds.
- **Split the hot key.** Append a small random number to the key (`post42#0` to `post42#9`), so the writes spread over ten partitions. The cost is that reading `post42` now means reading all ten and combining them.
- **Treat hot keys specially.** Detect them and give them their own bigger or dedicated partitions. The application must know which keys are hot, because the database usually does not. [Inference: a common practice.]

The key insight is that the load you must spread is the work arriving, not the data stored.

## When machines come and go {lvl=3 id=s-mod label="SDE-2"}

Suppose we send each key to machine $h(\text{key}) \bmod N$. It looks neat until $N$ changes. Going from 10 machines to 11, a key stays in place only if $h \bmod 10 = h \bmod 11$, true for about 1 key in 11. So about **10 out of every 11 keys move**, almost everything. Moving terabytes whenever you add a machine is slow and risky.

Two fixes keep movement small.

**Fixed partitions.** Create many more partitions than machines at the start, say 1,000 partitions on 10 machines (100 each). Keys map to partitions by hash and never change partition. A machine is added by taking some whole partitions from the others (about 1000/11, roughly 91, partitions come over). Only those move, and no key changes partition. The number of partitions is fixed, so it must be chosen generously at the start. Many systems work this way. [Unverified: product details.]

**Consistent hashing.** Place the machines on a circle by hashing their names. Hash each key onto the same circle; a key belongs to the **next machine clockwise**. Add a machine, and it takes over only the keys between it and the machine before it, about $1/(N+1)$ of the data. To keep the shares even, each real machine is given many points on the circle (**virtual nodes**), which also lets bigger machines take more points.

:::figure caption="Consistent hashing. Keys (dots) belong to the next machine clockwise. Adding machine D takes over only the keys between C and D."
<svg viewBox="0 0 480 240" role="img" aria-label="A circle with machines A, B, C and a new machine D, and keys that belong to the next machine clockwise">
<circle cx="170" cy="120" r="90" style="fill:none;stroke:var(--rule);stroke-width:2"/>
<g style="fill:var(--mat);stroke:var(--ink)"><circle cx="170" cy="30" r="9"/><circle cx="248" cy="165" r="9"/><circle cx="92" cy="165" r="9"/></g>
<circle cx="260" cy="75" r="9" style="fill:var(--surface);stroke:var(--bad);stroke-width:2;stroke-dasharray:3 2"/>
<g style="font-size:12px;fill:var(--ink)"><text x="166" y="20">A</text><text x="262" y="180">B</text><text x="80" y="182">C</text><text x="272" y="72" style="fill:var(--bad)">D (new)</text></g>
<g style="fill:var(--ink)"><circle cx="228" cy="48" r="3"/><circle cx="250" cy="104" r="3"/><circle cx="215" cy="205" r="3"/><circle cx="106" cy="196" r="3"/><circle cx="82" cy="95" r="3"/><circle cx="120" cy="45" r="3"/></g>
<text x="296" y="104" style="font-size:10px;fill:var(--ink)">Before D joins, the keys</text>
<text x="296" y="118" style="font-size:10px;fill:var(--ink)">between A and B all</text>
<text x="296" y="132" style="font-size:10px;fill:var(--ink)">went to B.</text>
<text x="296" y="158" style="font-size:10px;fill:var(--ink)">After, those just before D</text>
<text x="296" y="172" style="font-size:10px;fill:var(--ink)">move to D. Nothing else</text>
<text x="296" y="186" style="font-size:10px;fill:var(--ink)">moves.</text>
</svg>
:::

```python
import bisect

def owner(ring_points, ring_names, key_hash):
    i = bisect.bisect(ring_points, key_hash) % len(ring_points)
    return ring_names[i]          # next point clockwise
```

Read it as: find the first machine point above the key's hash, wrapping round to the start if there is none.

:::qc lvl=3
q: A cluster using hash mod N grows from 20 to 21 machines. Roughly what fraction of keys move?
options: ["About 5%", "About 50%", "About 95%"]
answer: 2
right: Right. A key stays only if h mod 20 equals h mod 21, about 1 in 21 keys, so about 20/21, roughly 95%, move. Consistent hashing would move about 5%.
wrong: A key stays only when both remainders agree. How often does that happen for two different moduli?
:::

## Finding the right partition {lvl=3 id=s-route label="SDE-2"}

A request knows its key and needs the machine. There are three common arrangements:

1. **Ask any node.** The node forwards the request to the right one. Simple, with an extra hop.
2. **A routing layer.** A front-end router holds the partition-to-machine map and forwards requests.
3. **A smart client.** The client library knows the map and talks to the right machine directly.

In all three, the map changes whenever partitions move, so something must keep it correct. Many systems use a small, highly reliable coordination service that stores the map and tells everyone when it changes; others have the nodes gossip the changes among themselves. That "everyone must agree on the map" problem is precisely a consensus problem, the topic of the next lesson. [Inference: common designs, not any one product's.]

## Questions that cross partitions {lvl=3 id=s-secondary label="SDE-2"}

Partitioning by user id makes "this user's posts" one-machine work. But what about "all posts containing the word *monsoon*"? The data is partitioned by user, not by word. Two designs for a **secondary index**:

- **Local index.** Each partition indexes only its own data. A query must ask every partition and merge the answers (scatter-gather). Writes stay cheap, since only one partition is touched, but reads are costly and as slow as the slowest partition.
- **Global index.** One index covering all data, itself partitioned by the indexed term (all "monsoon" entries together). Reads go to one partition, but one write may update several index partitions on different machines, so writes are costlier, and the index may lag behind the data.

The same problem hits **transactions that touch two partitions**, such as moving money between accounts on different shards. They need a protocol to commit on both or neither, which is slower and more fragile than a single-machine transaction, so designs try hard to keep what changes together inside one partition. [Inference: standard advice.]

## Choosing a partition key {lvl=4 id=s-key label="SDE-3"}

The choice of key is a design decision, not a detail. A checklist:

- **What does the common query name?** Pick the key so the common query hits one partition (shard a chat app by conversation, a bank by account, a shop by seller or customer, depending on the main query).
- **Will it spread load?** Look for sequential keys, low-cardinality keys (a "country" key with a handful of values makes a handful of partitions) and a few huge users.
- **Will it grow?** A key that works for a million users may not for a billion. Plan for splitting a partition that gets too large and merging ones that shrink.
- **What crosses partitions?** List the queries and transactions that will touch several partitions, estimate how often, and decide whether denormalising (copying data into each place that needs it) is worth the extra writes.
- **Can we move data safely?** Rebalancing makes heavy network and disk load, so do it gradually, throttled, and with the old location serving until the new one is ready.

A short example at SDE-3 level: for a ride-hailing app, partitioning by city gives locality for nearby-driver queries but creates big-city hot spots, whereas partitioning by a fine grid of map cells (finer in busy areas) spreads load while keeping "drivers near me" to a few neighbouring cells. [Inference: an illustrative design, not any company's documented one.]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Partitioning splits data by key so each machine holds and serves a part; replication copies it. Real systems use both. {lvl=1}
2. Key-range partitioning keeps keys sorted (cheap ranges) but can create hot spots with sequential keys. {lvl=2}
3. Hash partitioning spreads evenly but makes range queries ask every partition. {lvl=2}
4. A single popular key is a hot spot that hashing cannot fix; cache it or split it. {lvl=2}
5. hash mod N moves about N/(N+1) of keys when N changes; fixed partitions or consistent hashing move only about 1/(N+1). {lvl=3}
6. Secondary indexes and cross-partition transactions are the cost of partitioning: pick the key so the common query stays in one partition. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Equal data per machine is not equal load: measure requests, not rows. {lvl=2}
- Never use a language's built-in randomised `hash()` for placement; use a stable hash. {lvl=2}
- Starting with too few partitions in a fixed-partition design makes later growth painful; start with many. {lvl=3}
- A low-cardinality key (country, status) cannot spread over more partitions than it has distinct values. {lvl=3}
- Split a hot key and every read must gather all the pieces; make sure that trade is worth it. {lvl=3}
- In interviews, name the partition key, what it makes cheap, what it makes costly, and how you rebalance. {lvl=4}
:::
