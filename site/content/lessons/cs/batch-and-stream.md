---
title: Batch and stream processing
summary: The live IPL score reaches your phone within a second, yet "best strike rate of the season" updates once a night. Why two different machines?
ncert: []
up_to: SDE-3
builds_on: [Hash tables, Partitioning and sharding, Replication, Consistency and consensus]
notes_prompt: Explain to a friend the difference between a machine that answers after collecting everything and one that keeps a running tally, using cricket as the example.
margin:
  - kind: history
    title: History
    text: Google's MapReduce paper (published in the mid-2000s [Unverified]) showed that a huge computation could be split into simple "map" and "reduce" steps spread over cheap machines. Open-source Hadoop copied the idea, and later systems such as Kafka and Flink moved the same thinking to never-ending streams.
  - kind: tip
    title: Interview favourite
    text: '"Design a system that shows live counts" almost always means: events go into a partitioned log, a stream job keeps the running count, and a slower batch job recomputes the exact numbers to fix mistakes.'
  - kind: olympiad
    title: Maths link
    text: 'A running total is a fold: start with 0 and add each new event. Folds are why a stream can keep up forever, since each event is handled once and then forgotten.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Part III Derived Data: Ch. 10 Batch Processing, Ch. 11 Stream Processing [Unverified chapter numbers]" }
  - { title: "J. Kreps, The Log: What every software engineer should know about real-time data's unifying abstraction (essay)", ref: "[Unverified: recalled from memory]" }
cards:
  - { front: "Batch vs stream in one line each?", back: "Batch: collect a big, fixed pile of data, then process it all and produce an answer. Stream: process each event as it arrives and keep the answer up to date." }
  - { front: "What are the three steps of MapReduce?", back: "Map (turn each record into key-value pairs), shuffle (bring all pairs with the same key to one machine), reduce (combine the values for each key into one result)." }
  - { front: "Why is a log the 'source of truth'?", back: "It is an append-only, ordered record of everything that happened. Any current state (a score, a cache, a search index) can be rebuilt by replaying it from the start." }
  - { front: "What are a topic, a partition and an offset in a Kafka-style system?", back: "A topic is a named stream. It is split into partitions, each an ordered log. An offset is an event's position number in its partition; a consumer remembers its offset to know where to resume." }
  - { front: "Where is order guaranteed in a partitioned stream?", back: "Only within one partition. Events with the same key go to the same partition (by hashing the key), so per-key order is kept, but there is no global order." }
  - { front: "How do you get 'exactly-once' effects?", back: "You cannot stop messages being redelivered after a crash, so deliver at-least-once and make the handling idempotent (safe to repeat), for example by recording processed event ids." }
core:
  idea: 'A batch job reads a large fixed pile of data and produces an exact answer later; a stream job handles each event as it arrives and keeps an answer fresh now. Both can be built on one idea: an append-only log of events, from which any current state is rebuilt by replaying the events in order.'
  formulas:
    - tex: 's_k = f(s_{k-1},\, e_k)'
      label: 'A stream keeps state s by folding in each new event e'
    - tex: '\text{backlog} = (r_{in} - r_{out}) \times t'
      label: 'When events arrive faster than they are processed, the waiting pile grows'
  conditions:
    - 'Events are recorded in an append-only log and are never edited in place'
    - 'The processing function f is deterministic, so replaying the same log gives the same state'
    - 'Order matters only per key, and events with the same key go to the same partition'
    - 'Handlers are idempotent, so a replay or redelivery after a crash does no harm'
  sign: 'Exactly-once delivery across a network is not achievable in general. What you can build is at-least-once delivery plus idempotent handling, which has the same visible effect.'
outcomes:
  - 'Choose between batch and stream for a given question and say what it costs'
  - 'Explain MapReduce with a worked example (map, shuffle, reduce)'
  - 'Describe why a log is a good source of truth and how derived views come from it'
  - 'Explain topics, partitions, offsets and consumer groups, and where ordering holds'
  - 'Reason about late events, windows, at-least-once delivery and idempotent handlers'
opener:
  story: |
    It is the last over of the IPL final. Every ball, your phone buzzes with the new score within a second, for tens of millions of people watching at once. Fours, sixes and wickets appear almost as the bat meets the ball.

    Now open the stats page the next morning. "Best strike rate of the season" is perfect and complete, but it was clearly computed overnight, because during the match it did not change at all. Same cricket, same data, two very different ways of working.

    One of them keeps a running tally and updates it ball by ball. The other waits, gathers the entire pile and works through it in one go. Why would anyone choose the slow way, and how can both be built from the same record of what happened on the field?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Ball events flow along a belt; one machine keeps a running tally, another waits for the whole pile"><rect x="14" y="96" width="292" height="26" rx="13" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><g style="fill:var(--c)"><circle cx="40" cy="109" r="7"/><circle cx="76" cy="109" r="7"/><circle cx="112" cy="109" r="7"/><circle cx="148" cy="109" r="7"/><circle cx="184" cy="109" r="7"/><circle cx="220" cy="109" r="7"/><circle cx="256" cy="109" r="7"/></g><text x="16" y="88" style="font-size:10px;fill:var(--muted)">ball-by-ball events, in order</text><path d="M184 124 L184 160" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="132" y="162" width="104" height="52" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="142" y="182" style="font-size:11px;fill:var(--ink)">Stream: 156/4</text><text x="142" y="198" style="font-size:9px;fill:var(--muted)">updates every ball</text><path d="M60 124 L60 160" style="fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:4 3"/><rect x="16" y="162" width="104" height="52" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="26" y="182" style="font-size:11px;fill:var(--ink)">Batch: season</text><text x="26" y="198" style="font-size:9px;fill:var(--muted)">runs once a night</text><text x="16" y="40" style="font-size:12px;fill:var(--ink)">One record, two speeds</text></svg>'
symbols:
  - s: 'e_k'
    means: 'the k-th event in the log, for example the k-th ball of the match (an event)'
  - s: 's_k'
    means: 'the state after folding in the first k events, for example the score after k balls'
  - s: 'f'
    means: 'the rule that combines the old state and a new event into the new state'
  - s: 'r_{in}'
    means: 'rate at which events arrive (events per second)'
  - s: 'r_{out}'
    means: 'rate at which a consumer processes events (events per second)'
  - s: 't'
    means: 'time over which the rates differ (seconds)'
  - s: '\text{offset}'
    means: 'an event''s position number inside one partition of a log (whole number)'
life:
  - 'Live cricket scores, Swiggy order tracking and Uber ride locations are streams: each event updates what you see within a second or two.'
  - 'Your electricity bill, a bank statement and Aadhaar-linked reports are batch: collect a period of data, then compute once.'
  - 'UPI apps flag a suspicious payment within moments (stream), then a nightly job reconciles every transaction with the banks (batch).'
  - 'YouTube and Netflix show "trending now" from a stream of views, and rebuild their recommendation models in large batch jobs.'
models:
  - name: 'Running tally vs year-end audit'
    text: 'A shopkeeper keeps a running cash total through the day for speed, and does a full count at closing to catch errors. Fast-and-approximate plus slow-and-exact together beat either alone.'
  - name: 'Keep the diary, derive the rest'
    text: 'If you keep a faithful diary of what happened, you can rebuild your accounts, your schedule or your memories from it later. Recording events is more durable than recording conclusions.'
  - name: 'Queues absorb bursts'
    text: 'A water tank between a pump and a tap lets the pump run steadily while taps open and close. A buffer between producer and consumer turns spikes into a steady flow, until the tank overflows.'
links:
  - leaf: 'cs/message-queues'
    name: 'Message queues and events'
    same: 'Both move events from producers to consumers without them waiting on each other.'
    differs: 'A classic queue deletes a message once consumed; a log keeps events for days, so many consumers can read and replay them independently.'
  - leaf: 'cs/partitioning'
    name: 'Partitioning and sharding'
    same: 'A stream is split into partitions by hashing a key, exactly as a database is split into shards.'
    differs: 'A stream partition holds an ordered sequence of events over time, while a database shard holds current rows.'
  - leaf: 'cs/consistency-and-consensus'
    name: 'Consistency and consensus'
    same: 'A replicated log is what consensus algorithms such as Raft agree on, one ordered list of events.'
    differs: 'Raft decides the order inside one small group; a stream platform spreads many logs over many machines and relaxes cross-partition order.'
next:
  q: 'We can now collect and process a mountain of events. But the code that does it will be read, changed and fixed by dozens of engineers for years. What makes code that others can understand and change safely, instead of a tangle nobody dares touch?'
  leaf: 'cs/clean-code'
  name: 'Clean code and abstraction'
---

:::hook
q: Here is the puzzle. The IPL app must show the live score within a second and also publish exact season statistics. How many separate copies of the ball-by-ball record would a good design keep?
options: ["Two: one for the live score and one for the season stats", "One shared, ordered log that both are built from", "None: store only the final totals"]
answer: 1
right: Right. Keep one ordered record of every ball and derive both views from it. The live view reads it as it grows; the nightly job re-reads all of it. If the live view makes a mistake, replay the log and it is fixed. (How any real broadcaster does this is not public [Inference].)
wrong: Two separate copies can drift apart, and storing only totals loses the ability to fix a mistake or answer a new question later. What single thing could feed both?
:::

## Two ways to answer {lvl=1 id=s-two label="Foundations"}

Suppose the question is "how many runs has Kohli scored this season?".

You could wait until the season ends, gather every scorecard, and add them all up. That is **batch** processing: a big, fixed pile of data, processed in one go, with an exact answer at the end. Think of a teacher marking all papers on Sunday.

Or you could keep a running total in a notebook, and add to it after every ball. That is **stream** processing: events arrive one at a time and the answer is always up to date. Think of a scoreboard operator.

| | Batch | Stream |
|---|---|---|
| Input | a finished, fixed pile | a never-ending flow |
| Answer arrives | after minutes or hours | within seconds |
| Strength | exact, easy to redo, handles huge history | fresh, reacts quickly |
| Weakness | stale between runs | harder to get exactly right |
| Example | monthly bill, season stats | live score, fraud alert |

Neither is better. You choose by asking how fresh the answer must be and how costly a mistake is.

:::qc lvl=1
q: Which question suits a stream rather than a batch?
options: ["Total tax paid by all users last year", "Is this card payment, right now, likely fraud?", "Rebuild next month's recommendation model"]
answer: 1
right: Right. Waiting until tomorrow would be too late for a payment that is happening now.
wrong: Ask which answer loses its value if it arrives hours late. Only one of these does.
:::

## MapReduce: batch with simple steps {lvl=2 id=s-mapreduce label="SDE-1"}

How does a batch job handle a pile too big for one machine? **MapReduce** says: split the work into steps so simple that thousands of machines can do them in parallel.

Suppose a million scorecard lines, each like `Kohli 4` (one ball, 4 runs). We want runs per batsman.

1. **Map**: every machine reads its own slice and turns each line into a pair: (batsman, runs).
2. **Shuffle**: the system sends all pairs with the **same key** (the same batsman) to the same machine. This uses the hash idea from the hash-tables lesson.
3. **Reduce**: each machine adds up the runs for the batsmen it received.

:::figure caption="Map, shuffle, reduce: the shuffle gathers every pair with the same key onto one machine."
<svg viewBox="0 0 320 170" role="img" aria-label="Three map machines send pairs through a shuffle to two reduce machines">
<rect x="14" y="20" width="74" height="30" rx="6" style="fill:var(--surface);stroke:var(--c);stroke-width:1.5"/>
<text x="22" y="39" style="font-size:10px;fill:var(--ink)">map: Kohli 4</text>
<rect x="14" y="68" width="74" height="30" rx="6" style="fill:var(--surface);stroke:var(--c);stroke-width:1.5"/>
<text x="22" y="87" style="font-size:10px;fill:var(--ink)">map: Rohit 6</text>
<rect x="14" y="116" width="74" height="30" rx="6" style="fill:var(--surface);stroke:var(--c);stroke-width:1.5"/>
<text x="22" y="135" style="font-size:10px;fill:var(--ink)">map: Kohli 1</text>
<rect x="228" y="34" width="78" height="38" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"/>
<text x="236" y="50" style="font-size:10px;fill:var(--ink)">reduce Kohli</text>
<text x="236" y="64" style="font-size:10px;fill:var(--ink)">4 + 1 = 5</text>
<rect x="228" y="102" width="78" height="38" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"/>
<text x="236" y="118" style="font-size:10px;fill:var(--ink)">reduce Rohit</text>
<text x="236" y="132" style="font-size:10px;fill:var(--ink)">total 6</text>
<path d="M90 35 L226 52" style="fill:none;stroke:var(--muted);stroke-width:1.2"/>
<path d="M90 131 L226 58" style="fill:none;stroke:var(--muted);stroke-width:1.2"/>
<path d="M90 83 L226 120" style="fill:none;stroke:var(--muted);stroke-width:1.2"/>
<text x="130" y="165" style="font-size:10px;fill:var(--muted)">shuffle by key</text>
</svg>
:::

```python
from collections import defaultdict

def map_line(line):                 # "Kohli 4" -> ("Kohli", 4)
    name, runs = line.split()
    return name, int(runs)

def reduce_runs(pairs):             # all pairs for one key arrive together
    totals = defaultdict(int)
    for name, runs in pairs:
        totals[name] += runs
    return dict(totals)
```

If a machine dies midway, the framework simply reruns its slice, since the input never changes. That **replayability** is the great strength of batch.

## The log: a diary of what happened {lvl=2 id=s-log label="SDE-1"}

Where does the input come from? The cleanest answer is a **log**: an append-only list of events in order, never edited, only added to. For the match: `ball 1: Kohli 4`, `ball 2: Kohli 0`, `ball 3: wicket`...

The current score is not stored on its own. It is computed by folding the events in order:

$$s_k = f(s_{k-1},\, e_k)$$

Read it as: "the state after event $k$ is the old state combined with event $k$ by the rule $f$". For the score, $f$ simply adds the runs, so $s_k$ is the running total.

Why is this powerful?
- **Rebuild anything**: lose the scoreboard? Replay the log and you get it back.
- **Many views from one source**: a live score, a season leaderboard, a search index, a fraud model; each reads the same log and builds its own **derived view**.
- **Fix mistakes**: if the scorer entered a wrong event, correct the code or add a correcting event, then replay.
- **Replication is a log too**: a database ships its changes to replicas as a log of writes, as in the replication lesson.

:::qc lvl=2
q: The live score shows a wrong total because of a bug in the code. What does keeping the event log let you do?
options: ["Nothing; the score is lost", "Fix the code and replay the events to recompute the right score", "Ask the viewers to correct it"]
answer: 1
right: Right. State is derived from events, so a fixed rule applied to the same events gives the right state.
wrong: If only the final total had been saved, a wrong total would be stuck. What does the log keep that the total does not?
:::

## Kafka-style event streams {lvl=3 id=s-kafka label="SDE-2"}

Systems like Apache Kafka (the best-known example) are built around this log. The vocabulary:

- A **topic** is a named stream, such as `ball-events`.
- A topic is split into **partitions**. Each partition is one ordered log, and can live on a different machine. This is partitioning, as in the sharding lesson.
- A **producer** appends events; the partition is chosen by hashing the **key** (say, the match id). Same key, same partition, so the events of one match stay in order.
- Each event gets an **offset**: its position in the partition.
- A **consumer group** is a team of consumers sharing the topic: each partition is read by exactly one member of the team, so adding members spreads the work. Each consumer remembers its offset, and after a crash resumes from the last saved one.
- Events are **retained** for hours or days, even after being read. Two different teams, the live score and the nightly stats, can read the same topic at their own pace.

```python
partitions = 12

def partition_for(match_id):
    return hash(match_id) % partitions   # same match, same partition, in order
```

**Order is guaranteed only inside one partition.** Events for different matches may interleave arbitrarily, and that is fine because they are independent. If you need global order, you need a single partition, which limits speed to one machine.

When the consumers are slower than the producers, a pile builds up. Its size, called **lag**, grows like this:

$$\text{backlog} = (r_{in} - r_{out}) \times t$$

Read it as: "the difference between the arrival rate and the processing rate, multiplied by the time it lasts". If 1,200 events a second arrive and consumers handle 1,000, the pile grows by 200 every second.

## Time and windows {lvl=3 id=s-windows label="SDE-2"}

"Runs in the last over" needs a notion of time, and there are two. **Event time** is when the ball was actually bowled; **processing time** is when our machine saw the event. A network hiccup can deliver ball 14 after ball 15, and a phone that was offline sends its events minutes late.

A stream job therefore groups events into **windows** (for instance, "each over", or "each 5-minute slice") by **event time**, and uses a **watermark**: a promise "I do not expect any more events older than this". Once the watermark passes the end of a window, the window is closed and its result published. Very late events either update the result as a correction or are sent to a side list. [Inference: this describes the common model used by engines such as Flink; details vary by product.]

:::qc lvl=3
q: A ball event from 8:00:10 reaches the stream job at 8:03:00 because the scorer's phone lost signal. Which time should decide its window?
options: ["Processing time, 8:03:00", "Event time, 8:00:10", "Either, it makes no difference"]
answer: 1
right: Right. The ball was bowled at 8:00:10, so it belongs to that window. The watermark decides how long to wait for stragglers.
wrong: Processing time depends on network luck, so results would change with delays. Which time describes what actually happened?
:::

## Exactly-once: what is possible {lvl=4 id=s-once label="SDE-3"}

Consider a consumer that reads an event, sends an SMS "Wicket!" to fans, and then saves its offset. If it crashes between the SMS and the save, it restarts from the old offset and sends the SMS again. Three possible promises:

| Guarantee | How | Risk |
|---|---|---|
| At-most-once | save offset first, then act | a crash loses the event |
| At-least-once | act first, then save offset | a crash repeats the event |
| Exactly-once *effect* | at-least-once plus idempotent handling | needs care |

Nobody can make a message cross an unreliable network exactly once, for the same reason as in the consensus lesson: after a timeout you cannot tell "lost" from "slow". What you can build is **at-least-once delivery with an idempotent handler**, meaning one that does no extra harm when run twice:

```python
processed = set()          # in real life: a durable table

def handle(event):
    if event["id"] in processed:
        return             # duplicate: ignore
    apply_to_score(event)
    processed.add(event["id"])   # must be saved atomically with the score
```

Notes and caveats:
- Setting a score to 156 is idempotent; adding 4 to it is not. Prefer designs that **set** rather than **add**, or dedupe by event id.
- Kafka offers transactions that make "read, process, write to another topic, commit offset" atomic **inside Kafka**. The promise stops at its edge: an SMS, an email or a payment to an outside service can still happen twice unless that service accepts an idempotency key [Unverified: details differ by version].
- Dedupe tables need atomicity with the state change; otherwise a crash between the two lines above brings the problem back.

## Designing the IPL live score {lvl=4 id=s-design label="SDE-3"}

A sketch of a typical design [Inference: not any broadcaster's documented system]:

1. **Ingest**: the official scorer's app emits an event per ball with a unique id and a sequence number, into a topic keyed by match id.
2. **Stream job**: one consumer per partition folds events into the match state (score, overs, batsmen), ordering by sequence number and ignoring duplicates.
3. **Serving**: the latest state is written to a fast in-memory store and a cache; a push service sends changes to millions of phones. Phones that reconnect read the latest state instead of replaying every event.
4. **Corrections**: umpire reviews and scorer mistakes arrive as correcting events; the state is a fold, so a correction just changes later states.
5. **Batch path**: overnight, a batch job reads the **whole log** and recomputes every statistic exactly, so any slip made by the live path is repaired by morning.

Trade-offs to discuss: how many partitions (more means more parallelism but more overhead); what to do when the consumers lag (scale out, or serve a slightly stale score and say so); retention length (long retention allows replays but costs storage); and the cost of keeping two paths (stream and batch) that must produce the same answers, so many teams try to run one engine for both.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Batch processes a fixed pile for an exact answer later; stream processes events as they arrive for a fresh answer now. {lvl=1}
2. MapReduce is map (make key-value pairs), shuffle (group by key), reduce (combine); a failed piece is simply rerun. {lvl=2}
3. An append-only log is a good source of truth: any state is a fold of the events, and any view can be rebuilt by replay. {lvl=2}
4. A Kafka-style topic has partitions, offsets and consumer groups; order holds only inside one partition, and the key decides the partition. {lvl=3}
5. Group events by event time and use watermarks to decide when a window is complete. {lvl=3}
6. Exactly-once effect means at-least-once delivery plus idempotent handling; the guarantee ends at the system's edge. {lvl=4}
7. Use a stream for freshness and a batch recompute for exactness, both reading the same log. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Fast and exact are different goals: a live number may be corrected later by a batch job, so say which one you show. {lvl=1}
- Do not assume global order in a partitioned stream; choose the key so that the events that must stay ordered share it. {lvl=3}
- One hot key (a viral match) sends all its traffic to one partition and overloads one machine. {lvl=3}
- "Exactly-once" in marketing often means inside one system only; check what happens to emails, payments and other outside effects. {lvl=4}
- Adding to a counter is not idempotent; setting a value or deduplicating by event id is. {lvl=3}
- Watch the lag: if consumers are slower than producers for long, the backlog grows without limit. {lvl=2}
:::
