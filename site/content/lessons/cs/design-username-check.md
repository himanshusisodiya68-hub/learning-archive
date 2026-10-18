---
title: Checking a username among a billion
summary: 'How a sign-up page answers "taken?" instantly among two billion names, and stops two people winning the same name.'
ncert: []
up_to: SDE-3
builds_on: [Hash tables, Bloom filters, Partitioning (sharding), Caching]
notes_prompt: Explain to a friend why the instant "username taken" message is only a hint, and what actually guarantees that two people never get the same name.
margin:
  - kind: history
    title: Check, then act
    text: 'The bug where two programs both check that something is free and then both take it is so old it has a name: a race condition of the "time of check to time of use" kind. It appears in file systems, ticket booking and bank transfers as well as usernames.'
  - kind: tip
    title: Interview favourite
    text: 'In a design interview, say out loud which answers may be stale (the hint) and which must be exact (the claim). Separating the two is the single move that makes this question easy.'
  - kind: olympiad
    title: Design link
    text: 'Uniqueness across several data centres is a consensus problem in disguise: either one place owns each name, or the places must agree before anyone is told "yours".'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 6 Partitioning; Ch. 7 Transactions (write skew, phantoms); Ch. 9 Consistency and Consensus (uniqueness constraints) [Unverified chapter numbers]" }
  - { title: "A. Xu, System Design Interview", ref: "chapters on back-of-the-envelope estimation and on designing key-value stores [Unverified]" }
cards:
  - { front: "Why can a username check be answered from a cache or filter, but the sign-up claim cannot?", back: "The check is advisory: a slightly stale answer costs only a retry. The claim is authoritative: it must be decided by one place using a unique constraint, because a wrong answer gives one name to two people." }
  - { front: "What does a Bloom filter say, and which answer can you trust fully?", back: "'Definitely not present' is always right; 'maybe present' can be wrong. So a miss lets you skip the database; a hit still needs confirmation." }
  - { front: "Which is safer to cache for a username: 'taken' or 'available'?", back: "'Taken'. Names are rarely released, so it stays true. 'Available' goes stale the moment someone claims the name." }
  - { front: "What is the check-then-act race?", back: "Two requests both read 'free', both write 'mine'. Fix: let the database refuse the second write with a unique constraint, or use an atomic insert-if-absent." }
  - { front: "How do you spread 2 billion names over machines without moving most of them when you add one?", back: "Hash the normalised name into many fixed logical shards (say 4,096), and map shards to machines. Adding a machine moves whole shards, not individual names." }
  - { front: "Why normalise a username before hashing?", back: "'Asha', 'asha' and 'ASHA' must land on the same shard and count as one name, or the same person-visible name could be claimed twice." }
core:
  idea: 'Split the job into a fast, possibly stale hint (cache, then Bloom filter, then a read of the right shard) and one exact claim (an atomic insert-if-absent on the single shard that owns the name). The hint makes the page feel instant; the claim makes the name unique.'
  formulas:
    - tex: 'N_{\text{shards}} = \lceil n / c \rceil'
      label: 'Shards needed for n names at c names per shard'
    - tex: 'm = -\dfrac{n \ln p}{(\ln 2)^2}'
      label: 'Bloom filter bits for n names at false-positive rate p'
  conditions:
    - 'Names are normalised (case, spaces, look-alike characters) before they are checked, hashed or stored'
    - 'Exactly one machine owns each name, and only that machine decides the claim'
    - 'The hint may be stale in the "available" direction, never trusted as the final word'
    - 'Names are rarely released, so "taken" answers can be cached safely'
  sign: 'The commonest mistake is to treat the instant "available" message as a promise. It only means "nobody had it a moment ago".'
outcomes:
  - 'Estimate the storage and request rate of a username check with back-of-the-envelope arithmetic'
  - 'Layer a cache, a Bloom filter and a sharded store, and say what each layer saves'
  - 'Explain why "available" must not be cached but "taken" can be'
  - 'Describe the check-then-act race and fix it with a unique constraint'
  - 'Design name claiming across shards and regions, including orphaned claims'
opener:
  story: |
    You are choosing a username. You type *himanshu*, and a red "taken" appears before you finish the last letter. You try *himanshu68*. Taken. You try *himanshu_68_real* and a green tick appears. You feel clever. You tap **Sign up**.

    And the page says: "Sorry, that username was just taken." How? A second ago it was free. Between your green tick and your tap, someone on the other side of the planet tapped **Sign up** with the same name, and they were faster.

    So two things are happening here, and they are not the same thing. One is a very fast guess. The other is a final decision. Which of them is allowed to be wrong?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two phones both see the name as free, but only one claim reaches the single owner machine first"><rect x="14" y="30" width="70" height="110" rx="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="22" y="56" style="font-size:10px;fill:var(--ok)">✓ free</text><text x="22" y="76" style="font-size:10px;fill:var(--ink)">asha_r</text><rect x="236" y="30" width="70" height="110" rx="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="244" y="56" style="font-size:10px;fill:var(--ok)">✓ free</text><text x="244" y="76" style="font-size:10px;fill:var(--ink)">asha_r</text><path d="M84 100 C110 100 120 170 138 176" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M236 100 C210 100 200 170 182 176" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 4"/><rect x="120" y="164" width="80" height="44" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="132" y="183" style="font-size:10px;fill:var(--ink)">owner shard</text><text x="132" y="198" style="font-size:9px;fill:var(--muted)">first wins</text><text x="18" y="160" style="font-size:9px;fill:var(--ok)">claim: won</text><text x="236" y="160" style="font-size:9px;fill:var(--bad)">claim: lost</text><text x="112" y="40" style="font-size:10px;fill:var(--muted)">same instant</text></svg>'
life:
  - 'Booking the last seat on a train in IRCTC: the seat map shows it free, but only the booking step decides who gets it.'
  - 'Choosing a UPI handle, an email address or a domain name: all are unique names, claimed first come, first served.'
  - 'Flash sales: the page shows "1 left" to thousands of people, and the order system sells it once.'
  - 'A cricket stadium turnstile and a printed ticket: the ticket number is the claim; the crowd outside "seeing" a free seat is only a hint.'
models:
  - name: 'Hint versus decision'
    text: 'Split any process into a cheap, fast, forgiving preview and a slow, exact commitment. Elections have opinion polls and a count; shopping has a cart and a payment. Make the preview fast and let the commitment be right.'
  - name: 'Cache the stable answer'
    text: 'Remember the answers that stay true (a name is taken) and re-ask the ones that age quickly (a name is free). Before saving a fact for later, ask how fast it expires.'
  - name: 'One owner per thing'
    text: 'Disputes vanish when exactly one party has the authority to decide. A land registry, a single referee, a single till for the last item: give every contested object one owner.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both turn a name into an address so you look in one place, not in two billion.'
    differs: 'A hash table is one machine and one memory; here the "address" first picks a machine, and the check must also survive failures and races.'
  - leaf: 'cs/bloom-filters'
    name: 'Bloom filters'
    same: 'The filter is the cheap first layer that answers "definitely not present" without touching the store.'
    differs: 'Alone it cannot delete a name or give a certain "taken"; here it only saves reads, and the database stays the truth.'
  - leaf: 'cs/partitioning'
    name: 'Partitioning'
    same: 'Names are spread over machines by hashing the key, with each name owned by exactly one shard.'
    differs: 'Here the shard key is chosen to make the uniqueness check local to one machine, which is the whole reason it works.'
  - leaf: 'cs/transactions'
    name: 'Transactions'
    same: 'A unique constraint is a tiny transaction: check and write happen as one indivisible step.'
    differs: 'The username claim and the account row may live on different shards, so a single transaction cannot cover both.'
next:
  q: 'When you open the app, you see a list of posts from hundreds of people you follow, newest and most interesting first, in under a second. Does the system build your list when you open the app, or when your friends post?'
  leaf: 'cs/design-news-feed'
  name: 'Designing a news feed'
symbols:
  - s: 'n'
    means: 'number of usernames stored (count), about 2 billion here'
  - s: 'c'
    means: 'names one shard comfortably holds (count)'
  - s: 'p'
    means: 'false-positive rate of a Bloom filter: the fraction of free names wrongly reported as "maybe present" (no unit, 0.01 means 1%)'
  - s: 'm'
    means: 'number of bits in the Bloom filter (bits)'
  - s: '\ln'
    means: 'natural logarithm; the formula for m is just a ready-made result of the Bloom filter lesson'
  - s: '\lceil x \rceil'
    means: 'x rounded up to the next whole number'
  - s: 'QPS'
    means: 'queries per second: how many checks arrive each second'
---

:::hook
q: Here's the puzzle. You see a green tick for "asha_r" and tap Sign up, but two people do this at the same instant. Which part of the system decides who gets the name?
options: ["The green tick: whoever saw it first", "The fast cache that answered the check", "One database machine that accepts only the first claim"]
answer: 2
right: Right. The tick is only a hint from a cache or a filter. The decision is made by the one machine that owns that name, which accepts the first claim and refuses the second. (How Instagram does this internally is not public; this is how such a system is typically built. [Inference])
wrong: The tick can be seen by a thousand people at once, so it cannot be the decision. Something must be able to say "you were first, you were second". What has to be true of that something?
:::

## Two jobs, not one {lvl=1 id=s-jobs label="Foundations"}

Start with what the page really needs. While you type, it needs a **quick hint**: "looks free" or "taken". When you tap Sign up, it needs a **claim**: "this name is now yours, and nobody else's".

The hint can be a little out of date. If it says "free" and the name was taken half a second ago, you lose a few seconds and try again. The claim cannot be wrong, ever, because a wrong claim gives one name to two people. Fast-and-forgiving for the hint, slow-and-exact for the claim.

Almost every design choice below follows from this split. It also tells you where to spend effort: keep the hint cheap and let the claim be careful.

:::qc lvl=1
q: Which of these may be a little out of date?
options: ["The 'looks free' hint while typing", "The final claim when you tap Sign up", "Both, they are the same thing"]
answer: 0
right: Right. A stale hint costs one retry. A stale claim means two owners of one name.
wrong: Think about what each mistake costs. Which one can be fixed by trying again?
:::

## How big is the problem? {lvl=1 id=s-numbers label="Foundations"}

Engineers start by estimating on the back of an envelope. The numbers are **assumptions**, chosen to be plausible, not Instagram's real ones. [Inference]

| Quantity | Assumption | Result |
|---|---|---|
| Names stored | 2 billion | 2,000,000,000 |
| Bytes per name (about 20) | 20 B | 40 GB of raw text |
| Sign-up attempts per day | 50 million | |
| Checks per attempt (typing, retries) | 10 | 500 million checks a day |
| Average rate | 500 million ÷ 86,400 s | about 5,800 per second |
| Peak (evening, about 3× average) | 3 × 5,800 | about 17,000 per second |

Two surprises here. First, 40 GB of names *does* fit in the memory of one large server, so the problem is not "too big to store". Second, 17,000 checks a second is a lot for one machine to answer while also handling failures, which is why we replicate and spread the work. Real records carry more than the name (an account id, a creation time), so the full table is larger than 40 GB. The point of the estimate is to know which problems are real and which are not.

## From a hash set to layers {lvl=1 id=s-layers label="Foundations"}

The simplest design is a hash set in memory: `name in taken`. You met it in the hash tables lesson, and it answers in about one step. Why isn't it enough? Because one machine can crash and lose its memory, one machine has a ceiling on requests per second, and the claim must also be written somewhere permanent.

So we add layers, each one saving the next from work:

1. **Normalise** the name: lowercase, trim spaces, fold look-alike characters.
2. **Cache** of recent answers (fast memory).
3. **Bloom filter** that says "definitely free" for most free names.
4. **The shard** that owns the name, holding the permanent record.

:::figure caption="A check flows downward and stops at the first layer that can answer. Only the uncertain cases reach the owner shard."
<svg viewBox="0 0 480 230" role="img" aria-label="Four boxes in a row: normalise, cache, Bloom filter, owner shard, with arrows showing early exits">
<g style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--mat);stroke-width:1.8">
<rect x="10" y="40" width="96" height="50" rx="8"/><rect x="132" y="40" width="96" height="50" rx="8"/><rect x="254" y="40" width="96" height="50" rx="8"/><rect x="376" y="40" width="96" height="50" rx="8"/>
</g>
<g style="fill:var(--ink);font-size:12px">
<text x="26" y="62">Normalise</text><text x="154" y="62">Cache</text><text x="268" y="62">Bloom filter</text><text x="394" y="62">Owner shard</text>
</g>
<g style="fill:var(--muted);font-size:10px">
<text x="22" y="78">asha_R → asha_r</text><text x="146" y="78">"taken" seen?</text><text x="262" y="78">"definitely free"?</text><text x="388" y="78">exact answer</text>
</g>
<g style="fill:none;stroke:var(--ink);stroke-width:1.5">
<path d="M106 65 H132"/><path d="M228 65 H254"/><path d="M350 65 H376"/>
</g>
<g style="fill:none;stroke:var(--ok);stroke-width:1.5;stroke-dasharray:4 3">
<path d="M180 90 V150"/><path d="M302 90 V150"/>
</g>
<g style="fill:var(--ok);font-size:10px">
<text x="132" y="168">answer: taken</text><text x="254" y="168">answer: free (hint)</text>
</g>
<text x="20" y="205" style="font-size:10px;fill:var(--muted)">Most checks leave early. Only maybe-taken names that missed the cache reach the shard.</text>
</svg>
:::

## The Bloom filter layer {lvl=2 id=s-bloom label="SDE-1"}

A Bloom filter holds a bit array and several hash functions. Add a name by switching on a few bits; to test a name, check those same bits. If any bit is off, the name was **definitely never added**. If all are on, it is **maybe there**. It never gives a false "free" for a name that was added, but it sometimes says "maybe there" for a name that was not.

How much memory? The formula in the core card gives the bits $m$ for $n$ names and a false-positive rate $p$. For $n = 2\times10^9$ and $p = 0.01$:

$$m = -\frac{n\ln p}{(\ln 2)^2} \approx 9.6 \times n \approx 1.9\times10^{10} \text{ bits} \approx 2.4 \text{ GB}$$

Read it as: about 9.6 bits per name for a 1% error rate. That is 2.4 GB, about 6% of the 40 GB of raw names, small enough to keep in memory on every front-end server.

What does it buy us? A *free* name misses the filter (some bit is off), so the page can show "looks free" without ever calling the database. A *taken* name hits the filter, but 1 in 100 free names also hits, so a "maybe there" must be confirmed. That confirmation is a read from the owner shard (or a cache of it).

```python
import hashlib

def bits_for(name, m, k=7):
    h = hashlib.sha256(name.encode()).digest()
    a = int.from_bytes(h[:8], "big")
    b = int.from_bytes(h[8:16], "big") | 1
    return [(a + i * b) % m for i in range(k)]   # k positions
```

This trick of deriving $k$ positions from two hashes is a standard shortcut. A filter cannot **delete** a name, so when a name is released the filter stays "maybe there" until it is rebuilt (nightly, say) or replaced by a counting variant.

:::qc lvl=2
q: The Bloom filter says "maybe there" for "zoya_k". What should the system do?
options: ["Show 'taken' immediately", "Confirm with the cache or the owner shard", "Show 'free', since Bloom filters err in that direction"]
answer: 1
right: Right. About 1% of free names also get "maybe there", so a hit is only a hint to go and check.
wrong: A false positive means a free name gets reported as maybe-present. Telling the user "taken" would turn a free name away. What is the cheapest way to be sure?
:::

## Caching and the asymmetry {lvl=2 id=s-cache label="SDE-1"}

A **cache** keeps recent answers in fast memory. Which answers are safe to keep?

- **"Taken"** is almost permanent. A name rarely returns to the pool, so a cached "taken" is nearly always still true. Cache it for hours.
- **"Free"** goes wrong the instant someone claims it. Cache it for a few seconds at most, or not at all.

This is a general rule: cache what stays true, not what changes fast. A cache that holds "taken" answers also protects the database from **hot names**. A few thousand names ("admin", "john", "support") are asked about constantly, and the cache serves them without any load on the shard.

A related trick is a **reserved-names list** (brand names, system words) checked first, in plain memory. It needs no database at all.

## Sharding by name {lvl=3 id=s-shard label="SDE-2"}

The records must be spread across machines (sharding). Which key do we shard by? The **normalised username itself**. Then the question "does this name exist?" is answered by exactly one shard, and that is the one place that can answer it exactly. If we had sharded by account id, the check would have to ask every shard.

A common refinement: hash the name into a fixed, large number of **logical shards**, say 4,096, and keep a small table that maps logical shards to physical machines. With 2 billion names:

$$N_{\text{shards}} = \lceil n/c \rceil \quad\Rightarrow\quad \frac{2\times10^9}{4096} \approx 488{,}000 \text{ names per logical shard}$$

Adding a machine means moving some whole logical shards over, instead of re-hashing every name. This is the idea behind consistent hashing, in a simpler form. Replicas of each shard serve reads, and the leader accepts claims.

**Normalisation is a correctness issue, not polish.** If "Asha" and "asha" hash to different shards, both can be claimed. The rule must be one function, used everywhere, before hashing: Unicode normalisation, lowercase, trim, and a restricted alphabet so that look-alike letters (Cyrillic "а" and Latin "a") cannot sneak in. [Inference: which exact rules Instagram applies is not public.]

:::qc lvl=3
q: Why shard the username table by the username, not by account id?
options: ["It looks neater", "So the existence check and the claim both go to exactly one shard", "Account ids cannot be hashed"]
answer: 1
right: Right. The shard key is chosen so that the question you must answer exactly lives on one machine.
wrong: If the table were sharded by account id, which shard would hold "asha_r"? How many would you have to ask?
:::

## The sign-up race {lvl=3 id=s-race label="SDE-2"}

Here is the bug that the hint-and-claim split is meant to prevent. A naive sign-up does this:

```python
def sign_up(name):
    if db.exists(name):          # step 1: check
        return "taken"
    db.insert(name, user_id)     # step 2: act
    return "ok"
```

Two requests can both run step 1 before either runs step 2. Both see "free", both insert. This is the **check-then-act race**, and no amount of speed fixes it, because the gap between the two steps is the problem.

The fix is to make the database do check and write as one indivisible step. Put a **unique constraint** on the normalised name, and let the insert itself decide:

```python
import sqlite3
db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE names (name TEXT PRIMARY KEY, uid INT)")

def claim(name, uid):
    try:
        db.execute("INSERT INTO names VALUES (?, ?)", (name, uid))
        return True                      # we won
    except sqlite3.IntegrityError:
        return False                     # someone was first
```

The database serialises the two inserts on the same key: one succeeds, the other raises an error. The hint can stay sloppy because the constraint is the real guard. Never rely on application-level checks (a lock in one app server, a flag in memory) as the only guard: several app servers run at once, and each has its own memory.

:::qc lvl=3
q: Two sign-ups for "asha_r" reach the owner shard at the same instant. The table has a unique constraint. What happens?
options: ["Both succeed and the data is corrupt", "One succeeds, the other gets a uniqueness error", "Both fail"]
answer: 1
right: Right. The database orders the two writes; the second finds the key present and is refused. The app turns that refusal into "that username was just taken".
wrong: A unique constraint exists exactly to stop this. What must the database do with the second insert of the same key?
:::

## Claims that span shards and regions {lvl=4 id=s-scale label="SDE-3"}

Real sign-ups write more than one thing: a username claim (on the username's shard) and an account row (on the account-id's shard). A single transaction cannot span both for free. A standard pattern is **claim first, then create**:

1. Insert the claim `name → pending id` on the owner shard. If that fails, stop: name taken.
2. Create the account row on its own shard.
3. Mark the claim as confirmed.

If the app crashes between steps 1 and 3, a name stays claimed by an account that never existed: an **orphan claim**. Give pending claims an expiry (say 10 minutes) and run a background **reaper** that releases the unconfirmed ones. Make every step **idempotent**, so a retry after a timeout does not claim twice: use a request id so the same sign-up arriving twice returns the same result. This is a small **saga**: a chain of steps with an undo for each.

**Many regions.** With data centres in Mumbai, Frankfurt and Virginia, who decides the claim? If each region accepts claims independently, "asha_r" can be won in two regions and discovered later. Two honest options:

- **One home per name**: the hash picks a home region, and a claim from anywhere is routed there. The cost is some extra latency for the user in the far region, only on the claim, which is rare.
- **Consensus across regions**: replicas agree before answering. It works, but every claim pays a round trip between continents. The consistency lesson discusses the trade-off.

Because the claim happens once per account and checks happen ten times per attempt, paying a slow, exact path for the claim is cheap. The hint stays fast and local. [Inference: a typical design, not Instagram's documented one.]

**Abuse and privacy.** An "is this taken?" endpoint also tells strangers which accounts exist. Attackers can scan millions of names. Rate-limit by IP and device, add a short random delay, and require a challenge after many checks. Names that were released should enter a cooling-off period, so nobody can seize an abandoned name of a well-known person within seconds.

:::qc lvl=4
q: An app crashes after claiming "asha_r" but before creating the account. What prevents the name being locked forever?
options: ["Nothing, it stays claimed", "A claim expiry plus a reaper that frees unconfirmed claims", "Another unique constraint"]
answer: 1
right: Right. Pending claims have a lifetime, and a background job releases the ones nobody confirmed.
wrong: The crash left a half-finished sign-up. What kind of rule would clean up work that never completed?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A username check is two jobs: a fast, possibly stale hint, and one exact claim. {lvl=1}
2. Estimate first: 40 GB of names fits on one big server, but about 17,000 checks a second at peak does not stay simple. {lvl=1}
3. Layers save work: normalise, cache, Bloom filter, owner shard. {lvl=2}
4. A Bloom filter at 1% error costs about 9.6 bits per name (2.4 GB for 2 billion) and lets free names skip the database. {lvl=2}
5. Cache "taken" (stays true); do not cache "available" (goes stale). {lvl=2}
6. Shard by the normalised name so the existence check lives on exactly one shard. {lvl=3}
7. Check-then-act races are fixed by a unique constraint, not by checking faster. {lvl=3}
8. Claims across shards need claim-then-create with expiry, idempotency and a reaper; across regions, give each name one home. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Treating the instant "available" tick as a guarantee. Only the claim guarantees. {lvl=1}
- Checking existence in application code and then inserting, with no unique constraint. {lvl=3}
- Caching "available" answers for long, which sends users to errors at sign-up. {lvl=2}
- Hashing the raw text. Different casing or look-alike characters then land on different shards. {lvl=3}
- Using a Bloom filter as the source of truth. It cannot delete and it gives false "maybe" answers. {lvl=2}
- Forgetting orphan claims, so half-finished sign-ups lock names forever. {lvl=4}
- Exposing an unlimited check endpoint, which lets attackers list your users. {lvl=4}
:::
