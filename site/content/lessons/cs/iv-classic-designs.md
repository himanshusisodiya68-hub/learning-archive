---
title: Classic designs
summary: A dozen famous design questions are really a few shapes in different costumes. Learn the shapes and each new prompt feels familiar.
ncert: []
up_to: SDE-3
builds_on: [A framework for any design question, Back-of-the-envelope estimation, Caching, Message queues and events]
notes_prompt: Pick any app on your phone and explain, in your own words, which classic design prompt it most resembles and what its one hard problem is.
margin:
  - kind: history
    title: Why these prompts
    text: 'Interviewers reuse the same few prompts because each one forces a different hard idea into the open: fan-out, geo-search, idempotency, streaming. [Inference: a pattern seen in public interview-prep material, not a rule.]'
  - kind: tip
    title: One hard problem
    text: 'Every classic prompt has one hard problem hiding behind the easy boxes. Name it in your first five minutes and spend most of your time there.'
  - kind: olympiad
    title: Mix and match
    text: 'At SDE-3 the prompt is often a hybrid ("a chat app with payments"). Decompose it into two classic shapes and solve each, then join them.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "the whole book is the toolbox these designs draw from; Ch. 11 Stream Processing for notifications and queues" }
  - { title: "A. Xu, System Design Interview", ref: "catalogue of worked classic prompts [Unverified: chapter numbers]" }
cards:
  - { front: "What is the hard problem of a URL shortener?", back: "Making a unique short code cheaply at huge read volume. Probed trade-off: counter-based codes (guessable, need coordination) versus hash-based codes (collisions)." }
  - { front: "What is the hard problem of a chat app?", back: "Delivering each message once, in order, to people who may be offline, over long-lived connections. Probed: at-least-once delivery plus deduplication." }
  - { front: "What is the hard problem of a rate limiter?", back: "Counting requests per user across many machines without making every request slow. Probed: accuracy versus speed, and fail open versus fail closed." }
  - { front: "What is the hard problem of a payment system?", back: "Never charging twice and never losing money, even when calls time out. Probed: idempotency keys, a ledger and reconciliation." }
  - { front: "What is the hard problem of ride matching?", back: "Finding nearby drivers fast while their locations change every few seconds. Probed: geo index design and giving one driver to one rider." }
  - { front: "What are the five probes interviewers use after your first design?", back: "Ten times the scale, a failure, a hot key, a consistency edge case, and cost." }
core:
  idea: 'Every classic design prompt is a familiar shape (read-heavy lookup, fan-out, real-time connection, geo-search, big files, counting, money) plus one hard problem. Name the shape, find the hard problem, and spend your time there.'
  formulas:
    - tex: '\text{prompt} = \text{shape} + \text{scale} + \text{one hard problem}'
      label: 'How to decompose any prompt in the first five minutes'
  conditions:
    - 'You have first asked what the system must do and how big it is (the framework lesson)'
    - 'You keep to the shape: do not design features nobody asked for'
    - 'You accept that the interviewer, not the textbook, decides which trade-off to probe'
  sign: 'The commonest mistake is to draw every box in the catalogue with equal care. Name the one hard problem and go deep there.'
outcomes:
  - 'Name the hard problem and the key components of nine classic design prompts'
  - 'Map a new prompt onto a known shape'
  - 'Predict which trade-off the interviewer will probe for each prompt'
  - 'Answer the five standard probes (scale, failure, hot key, consistency, cost)'
  - 'Decompose a hybrid prompt into two classic shapes at senior level'
opener:
  story: |
    The interviewer slides a marker across the table. "Design WhatsApp. You have 45 minutes." Your heart does a small drum solo. Nine apps you use every day have just collapsed into one blank whiteboard.

    Here is the secret that people who do well on this round learn early: there is no list of a thousand questions. There are about a dozen, over and over, in different costumes. "Design Telegram" is a chat app. "Design Zomato delivery tracking" is ride matching wearing a food hat. "Design a coupon system" is a rate limiter and a payment system holding hands.

    So the real skill is not memorising designs. It is looking at the prompt and asking: which shape is this, and what is the one thing about it that is hard?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A whiteboard with nine labelled sticky notes, one of them circled as the hard problem"><rect x="14" y="14" width="292" height="212" rx="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"><rect x="30" y="34" width="76" height="46" rx="4"/><rect x="122" y="34" width="76" height="46" rx="4"/><rect x="214" y="34" width="76" height="46" rx="4"/><rect x="30" y="96" width="76" height="46" rx="4"/><rect x="122" y="96" width="76" height="46" rx="4"/><rect x="214" y="96" width="76" height="46" rx="4"/><rect x="30" y="158" width="76" height="46" rx="4"/><rect x="122" y="158" width="76" height="46" rx="4"/><rect x="214" y="158" width="76" height="46" rx="4"/></g><g style="font-size:10px;fill:var(--ink)"><text x="40" y="61">URL short</text><text x="132" y="61">Chat</text><text x="224" y="61">News feed</text><text x="40" y="123">Ride match</text><text x="132" y="123">Video</text><text x="224" y="123">Rate limit</text><text x="40" y="185">Notify</text><text x="132" y="185">Autocomplete</text><text x="224" y="185">Payments</text></g><ellipse cx="252" cy="180" rx="44" ry="30" style="fill:none;stroke:var(--bad);stroke-width:2.5"/><text x="216" y="222" style="font-size:9px;fill:var(--bad)">never charge twice</text></svg>'
life:
  - 'Every WhatsApp message you send, and the double blue tick that follows, is the chat design at work.'
  - 'When you book an Ola, Uber or Rapido and a driver appears within seconds, ride matching is finding drivers near you.'
  - 'A UPI payment that fails halfway and then either goes through once or is refunded is the payment design protecting your money.'
  - 'The search box on a shopping app that suggests words as you type is search autocomplete.'
  - 'An app that says "too many attempts, try again in 30 seconds" is a rate limiter.'
models:
  - name: 'Shape plus twist'
    text: 'New problems are rarely new. Experts see the shape (a lookup, a queue, a counter) and then ask what is special here. Doctors, mechanics and chess players all work this way.'
  - name: 'Find the bottleneck first'
    text: 'In any system, one step limits the whole. Name it early and every later decision gets easier. Factories call this the constraint; traffic engineers call it the choke point.'
  - name: 'Say the trade-off aloud'
    text: 'No design is free. "I chose X over Y because Z, and it costs us W" is the sentence that separates a senior answer from a junior one, in design and in life decisions.'
links:
  - leaf: 'cs/iv-design-framework'
    name: 'A framework for any design question'
    same: 'The framework gives the order of steps (requirements, numbers, design, deep dive); this lesson gives the content to fill them.'
    differs: 'The framework is the same for every prompt; the catalogue changes with each prompt.'
  - leaf: 'cs/design-news-feed'
    name: 'Designing a news feed'
    same: 'It is one full row of the catalogue worked out in depth.'
    differs: 'The catalogue stays at one row per prompt so you can see all nine shapes side by side.'
  - leaf: 'cs/design-url-shortener'
    name: 'Designing a URL shortener'
    same: 'Another row worked out in depth: code generation, storage and redirects.'
    differs: 'The full lesson has the numbers and code; the row only holds the idea you must say aloud.'
next:
  q: 'You know the shapes and the order of a design answer. The other half of the loop is a conversation about you. How do you turn messy real work, with arguments and failures, into a clear story of about two minutes?'
  leaf: 'cs/iv-star-stories'
  name: 'Telling your stories (STAR)'
symbols:
  - s: 'QPS'
    means: 'queries per second: how many requests arrive each second (count per second)'
  - s: 'fan-out'
    means: 'one event causing many writes or messages, such as one post reaching a million followers'
  - s: 'hot key'
    means: 'one key (a celebrity, a viral link) receiving far more traffic than the rest'
  - s: 'idempotent'
    means: 'doing the operation twice has the same effect as doing it once'
  - s: 'SLA'
    means: 'service level agreement: the promised availability or speed, such as 99.9 percent uptime'
---

:::hook
q: How many completely different design prompts do you think you need to prepare for a typical loop?
options: ["About a hundred", "About a dozen shapes", "Just one, the framework"]
answer: 1
right: Right. A dozen or so shapes cover most prompts; the framework tells you how to talk about them. (The exact spread varies by company and is not public. [Inference])
wrong: A hundred is too many and one is too few. Prompts repeat in families, so a handful of shapes plus a method is the efficient path.
:::

## Why the prompts repeat {lvl=1 id=s-repeat label="Foundations"}

Think of cooking. There are thousands of dishes, but a cook who knows how to fry, boil, bake and grill can handle nearly any recipe. System design has the same few "cooking methods". Each prompt asks you to combine them in a particular way.

The forces that shape a system are few:

| Force | The question it asks | Typical answer |
|---|---|---|
| Reads far outnumber writes | Can we store the answer ready-made? | Cache, precompute |
| One event reaches many people | Who does the work, and when? | Fan-out on write or on read |
| Connections stay open | How do we push, not poll? | Persistent connections, queues |
| Data has a place | How do we find "nearby"? | Geo index |
| Files are huge | How do we move them cheaply? | Chunks, CDN |
| Something must be counted exactly | Where does the counter live? | Shared store with atomic update |
| Money is involved | What if a call is repeated or lost? | Idempotency, ledger |

Each classic prompt is mainly one row of this table. The rest is plumbing you already know.

:::qc lvl=1
q: "Design a system that shows the live position of a delivery rider on a map" mostly belongs to which force?
options: ["Files are huge", "Data has a place and keeps moving", "Something must be counted exactly"]
answer: 1
right: Right. Positions change every few seconds and must be found by place. That is the same shape as ride matching.
wrong: Think about what is special here: the rider's location changes and the customer needs the latest one.
:::

## The catalogue {lvl=2 id=s-catalogue label="SDE-1"}

One row per prompt. Read the columns left to right: what is hard, what you draw, and what the interviewer will poke. The full lessons are linked where they exist.

| Prompt | Core challenge | Key components | Trade-off they probe |
|---|---|---|---|
| URL shortener (lesson: Designing a URL shortener) | Unique short codes at a very high read-to-write ratio | Code generator, key-value store, cache, redirect service | Counter codes (guessable, need coordination) versus hashed codes (collisions); 301 (cached) versus 302 (countable) redirects |
| Chat app | Deliver once, in order, even to offline users, over open connections | Connection gateways, message store, per-chat sequence numbers, push service, presence | At-least-once delivery plus deduplication; group chat fan-out; ordering per chat, not global |
| News feed (lesson: Designing a news feed) | One post must reach many followers | Post store, timeline cache, fan-out workers, ranking | Fan-out on write versus on read; celebrities need a hybrid |
| Ride matching | Nearby drivers whose positions change every few seconds | Location ingest, geo index (grid cells or geohash), matcher, trip state machine | Match quality versus latency; one driver must go to one rider (a lease or lock) |
| Video streaming | Huge files and uneven demand | Upload service, transcoding pipeline, chunked storage, CDN, adaptive bitrate player | Storage and bandwidth cost versus quality; which videos to pre-warm on edge servers |
| Rate limiter | Count requests per user across many machines without slowing each one | Token bucket or sliding window, shared fast store, rules config | Accuracy versus speed; fail open (allow) or fail closed (block) when the store is down |
| Notification system | Send millions of messages through unreliable third parties | Event queue, per-channel workers (push, email, SMS), templates, user preferences, retries | Duplicates versus lost messages; priority lanes; staying within the provider's own limits |
| Search autocomplete | Suggest completions in about 100 ms for each keystroke | Prefix index (trie), precomputed top suggestions per prefix, periodic rebuild | Freshness versus latency and cost; personalised versus global suggestions |
| Payment system | Never charge twice, never lose money, despite timeouts | Idempotency keys, double-entry ledger, state machine, reconciliation job | Consistency over availability; retries must be safe; exactly-once is built from at-least-once plus idempotency |

A cached lesson sits behind many rows. The **username check** lesson shows how a hash table, a Bloom filter and a sharded database combine. The **tries** lesson is the data structure inside autocomplete. The **message queues** lesson underlies chat, notifications and payments.

:::qc lvl=2
q: A candidate designs a notification system and sends each event straight to an email provider with no queue. What is the biggest risk?
options: ["Emails will be too long", "A traffic spike or provider slowdown loses or blocks messages", "The database will be too small"]
answer: 1
right: Right. A queue absorbs spikes, lets workers retry, and keeps a slow provider from stalling the rest of the system.
wrong: Think about what happens when a million events arrive in one minute, or the email provider is slow for ten minutes.
:::

## Read a row like an interviewer {lvl=2 id=s-read label="SDE-1"}

The last column is the part that matters. Interviewers rarely want your boxes; they want to hear how you reason when two good options pull apart.

Take the rate limiter row. The simplest answer is a **token bucket**: each user has a bucket that refills at a steady rate, and every request takes one token.

```python
import time
def allow(bucket, rate=5, cap=10):
    now = time.time()
    bucket["tokens"] = min(cap, bucket["tokens"] + (now - bucket["t"]) * rate)
    bucket["t"] = now
    if bucket["tokens"] >= 1:
        bucket["tokens"] -= 1
        return True
    return False
```

Read it as: top up the bucket for the time that passed, then spend one token if there is one. Bursts up to `cap` are allowed; the long-run rate is `rate` per second. That is the whole algorithm. The interview is about what comes next: where does `bucket` live when you have 50 servers?

Say that sentence out loud: "On one machine this works. Across machines, the bucket must live in a shared fast store, and the take-a-token step must be atomic, or two servers can both spend the last token."

## The five probes {lvl=3 id=s-probes label="SDE-2"}

After your first design, an interviewer usually pushes with one of five questions. Prepare an answer for each, for every row you study.

| Probe | What they ask | How to answer |
|---|---|---|
| Scale | "Now it is ten times bigger." | Find the first part that breaks (usually a database or one hot machine); split it by key (partition) or add a cache |
| Failure | "That machine just died." | Replicas, retries with limits, and what the user sees during recovery |
| Hot key | "One link, one user, one video gets all the traffic." | Cache it, replicate it, or split the key into pieces |
| Consistency | "Two people do this at the same moment." | Name the rule: unique constraint, lease, compare-and-set, or accept a short delay |
| Cost | "Can it be cheaper?" | Tiered storage, caching, batching, dropping rarely used data |

A worked example with the **chat** row and the consistency probe. Two phones send a message in the same group at the same instant. Which one appears first? Answer: ordering only needs to agree inside each chat, so the chat's home server stamps each message with the next number in that chat's own sequence. Every device shows messages sorted by that number. No global clock is required. [Inference: a common design, not WhatsApp's documented one.]

:::qc lvl=3
q: Which probe is "a celebrity's video goes viral and one cache machine melts"?
options: ["Scale", "Hot key", "Cost"]
answer: 1
right: Right. A single key dominating traffic is a hot key. Fixes include replicating that entry across several cache machines or caching it on the edge.
wrong: The total traffic may be fine; the trouble is that it all lands on one key and so one machine.
:::

## Payments: where "mostly right" is wrong {lvl=3 id=s-pay label="SDE-2"}

The payment row is the one where the trade-off is not negotiable. You may lose a like and nobody cries; you may not lose a rupee.

The danger is a **timeout**. The app asks the bank to charge 500, the network drops the reply, and the app does not know whether the charge happened. If it retries, the customer may pay twice.

The fix is an **idempotency key**: the app creates a unique id for this one purchase and sends it with every attempt. The server remembers keys it has seen. A repeat returns the first result instead of charging again.

```python
def charge(key, user, amount, db):
    if key in db.results:               # already handled
        return db.results[key]
    result = bank.debit(user, amount)   # may fail or time out
    db.results[key] = result            # save before replying
    return result
```

In a real system the key check and the save must happen in one transaction, or two simultaneous retries can both slip through. Money movements are also written to a **ledger** as pairs (money out of one account, the same amount into another), and a **reconciliation** job compares your ledger with the bank's statement every night to catch differences. [Inference: standard practice described in public engineering writing.]

## Senior moves {lvl=4 id=s-senior label="SDE-3"}

At SDE-3 the prompt is bigger and vaguer, and the interviewer is judging how you lead.

1. **Decompose hybrids.** "Design a food delivery app" is ride matching (riders and restaurants), notifications (order updates), payments (checkout), a feed (restaurant discovery), and search autocomplete. Say so, rank them by risk, and pick the riskiest to go deep on.
2. **Spend depth where the risk is.** Give two minutes to the easy boxes and ten to the hard problem.
3. **Say what you would measure.** "I would watch the p99 latency of the match call and the share of retries" shows you think about running it, not just drawing it.
4. **Know your regrets.** "This design is simple but one region only; if we need two regions, I would revisit the payment ledger first." Naming the weak spot is a strength.
5. **Plan for evolution.** Start with the simplest design that meets today's numbers and say what would trigger the next step.

:::qc lvl=4
q: You are asked to design a food delivery app in 45 minutes. What is the best use of time?
options: ["Draw every component with equal detail", "Decompose into classic shapes, rank by risk, go deep on one or two", "Skip requirements to save time"]
answer: 1
right: Right. Breadth to show you see the whole, depth where the risk is, and clear reasons for the choices.
wrong: Equal detail everywhere leaves no time for the part the interviewer will probe. Skipping requirements risks solving the wrong problem.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Classic prompts are a few shapes (lookup, fan-out, real-time, geo, big files, counting, money) in different costumes. {lvl=1}
2. Every prompt has one hard problem; name it early and spend your time there. {lvl=2}
3. Each row has a trade-off the interviewer will probe: say both sides and your choice. {lvl=2}
4. The five probes are scale, failure, hot key, consistency and cost. {lvl=3}
5. Payments need idempotency keys, a ledger and reconciliation, because timeouts are ambiguous. {lvl=3}
6. At senior level, decompose hybrid prompts into shapes and go deep where the risk is. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Do not memorise a design as a script. Interviewers vary the twist; understand why each box exists. {lvl=1}
- Do not draw every box with equal care; the hard problem deserves most of your time. {lvl=2}
- Do not name a technology as the answer. "Use Kafka" without saying what it solves earns little; say the property you need (ordered, replayable log) and then the tool. {lvl=3}
- Company internals quoted in prep material are mostly guesses; present your own design as "a typical approach". {lvl=2}
- Do not forget failure: every design has a timeout somewhere, and the interviewer will find it. {lvl=3}
:::
