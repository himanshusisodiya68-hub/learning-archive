---
title: Consistency and consensus
summary: Two friends both see "1 seat left" for the IPL final. How do many machines agree on one truth when messages are slow and clocks lie?
ncert: []
up_to: SDE-3
builds_on: [Replication, Partitioning and sharding, Concurrency and locks]
notes_prompt: Explain to a friend why two copies of the same data can disagree, and what a system gives up to make them agree.
margin:
  - kind: history
    title: History
    text: Eric Brewer proposed the CAP idea around 2000, and Gilbert and Lynch proved a precise version a few years later [Unverified dates]. The Raft algorithm was designed in the 2010s by Diego Ongaro and John Ousterhout explicitly so that students could understand consensus [Unverified].
  - kind: tip
    title: Interview favourite
    text: 'When an interviewer says "what happens if two servers both think they are the leader?", the answer they want is "a majority vote, and a term number so an old leader can be recognised and ignored".'
  - kind: olympiad
    title: Physics link
    text: 'Einstein showed that "at the same time" has no absolute meaning for distant places. Distributed systems meet the same wall: two machines cannot agree on "now", so they agree on "before and after" instead.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 5 Replication; Ch. 8 The Trouble with Distributed Systems; Ch. 9 Consistency and Consensus [Unverified chapter numbers]" }
  - { title: "D. Ongaro and J. Ousterhout, In Search of an Understandable Consensus Algorithm (the Raft paper)", ref: "Sections on leader election and log replication [Unverified]" }
cards:
  - { front: "What does linearizability promise?", back: "The system behaves as if there were a single copy of the data. Once any read has returned a new value, every later read returns that value or a newer one." }
  - { front: "What does eventual consistency promise?", back: "If writes stop, all replicas will eventually hold the same value. It says nothing about what you read in the meantime, so you may see old data." }
  - { front: "CAP in plain words?", back: "When the network splits the machines into groups that cannot talk, each side must either refuse to answer (stay consistent) or answer with possibly stale data (stay available). You cannot do both." }
  - { front: "PACELC adds what?", back: "Even when there is no partition (Else), you still trade Latency against Consistency: waiting for far-away replicas is slow, answering locally is fast but may be stale." }
  - { front: "When do a write quorum w and read quorum r always overlap?", back: "When w + r > n (n = number of replicas). Then at least one machine you read from has seen the latest write." }
  - { front: "How does Raft stop two leaders ruling at once?", back: "A candidate needs votes from a majority, each node votes once per term, and any message with an old term number is rejected. Two majorities always share a node, so only one wins a term." }
core:
  idea: 'Copies of data on different machines can disagree because messages are slow and clocks are unreliable. A strong guarantee (linearizability) makes many copies act like one, at the cost of waiting for a majority; a weak one (eventual consistency) answers fast but may show stale data. Consensus algorithms such as Raft get machines to agree on one leader and one order of events by counting majority votes, never by trusting clocks.'
  formulas:
    - tex: 'w + r > n'
      label: 'Quorum overlap: every read meets at least one up-to-date copy'
    - tex: '\text{majority} = \lfloor n/2 \rfloor + 1'
      label: 'Votes needed to decide; the system survives n minus majority failures'
  conditions:
    - 'Machines can crash and messages can be delayed or lost, but machines do not lie (no malicious nodes)'
    - 'A majority of the machines is alive and able to talk to each other'
    - 'Decisions use vote counts and term numbers, not wall-clock timestamps'
    - 'Quorum overlap guarantees freshness only if every write actually reaches w machines before it is acknowledged'
  sign: 'The commonest mistake is trusting timestamps from different machines to say which write came last. Their clocks differ, so "last write wins" can silently throw away the newer write.'
outcomes:
  - 'Explain with an everyday example why replicas can disagree'
  - 'Contrast linearizability with eventual consistency and name what each costs'
  - 'State CAP and PACELC in plain words and apply them to a real choice'
  - 'Compute quorum sizes and decide whether reads and writes overlap'
  - 'Narrate a Raft leader election and say why a split brain is impossible'
opener:
  story: |
    It is the night before the IPL final. You and your friend, in different cities, both open the booking app. Both see **1 seat left**. You both tap **Book** at the same moment.

    Only one of you can get that seat. Yet the app runs on many servers, spread over several data centres, each holding its own copy of "seats left". Your tap reached a server in Mumbai; your friend's reached one in Hyderabad. Neither server has heard about the other tap yet, because a message between them takes a few milliseconds, and a few milliseconds is a very long time for a computer.

    Both servers could say "yes, booked". Somebody will turn up at the stadium with a useless ticket. How can many machines that cannot see each other's clocks, and cannot be sure a message arrived, still agree on a single answer?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two servers both selling the last seat because their message to each other is delayed"><rect x="20" y="40" width="96" height="60" rx="10" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="32" y="64" style="font-size:11px;fill:var(--ink)">Server A</text><text x="32" y="82" style="font-size:10px;fill:var(--muted)">seats left: 1</text><rect x="204" y="40" width="96" height="60" rx="10" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="216" y="64" style="font-size:11px;fill:var(--ink)">Server B</text><text x="216" y="82" style="font-size:10px;fill:var(--muted)">seats left: 1</text><path d="M118 62 L202 62" style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:5 4"/><path d="M202 82 L118 82" style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:5 4"/><text x="128" y="54" style="font-size:9px;fill:var(--muted)">slow message</text><circle cx="68" cy="150" r="14" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="50" y="186" style="font-size:10px;fill:var(--ink)">You: Book!</text><circle cx="252" cy="150" r="14" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="226" y="186" style="font-size:10px;fill:var(--ink)">Friend: Book!</text><path d="M68 134 L68 102" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M252 134 L252 102" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="96" y="222" style="font-size:11px;fill:var(--bad)">one seat, two tickets?</text></svg>'
symbols:
  - s: 'n'
    means: 'number of replicas (copies of the data), a count'
  - s: 'w'
    means: 'write quorum: how many replicas must confirm a write before it counts as done (count)'
  - s: 'r'
    means: 'read quorum: how many replicas you ask when reading (count)'
  - s: '\lfloor x \rfloor'
    means: 'round x down to a whole number, so 5/2 = 2.5 becomes 2'
  - s: '\text{majority}'
    means: 'more than half of the n machines, the smallest group that two separate groups can never both form (count)'
  - s: '\text{term}'
    means: 'Raft''s election number: a counter that goes up each time a new election starts (whole number, no unit)'
  - s: 'ms'
    means: 'millisecond, one thousandth of a second (time)'
life:
  - 'Booking the last IRCTC Tatkal berth or BookMyShow seat: the system must sell it exactly once, even with thousands tapping at once.'
  - 'A UPI payment: your bank balance must never show money that was already sent, but a "like" count on a video can safely lag by a few seconds.'
  - 'WhatsApp messages sometimes arrive late or out of order across your phone and laptop: that is eventual consistency doing its work.'
  - 'Tools like etcd and Consul (which hold the settings that keep Kubernetes and other systems running) use Raft to elect one leader and keep one agreed copy of the truth.'
models:
  - name: 'Agree on order, not on time'
    text: 'Distant parties can rarely agree on "when", but they can agree on "which came first". A court that numbers its cases, a bank that numbers cheques and a queue token do exactly this. When time is unreliable, use a counter.'
  - name: 'Majorities overlap'
    text: 'Any two groups that each contain more than half of the people must share at least one person. That one shared person carries the memory from one decision to the next. Elections, juries and committees all lean on this.'
  - name: 'Pay for certainty with waiting'
    text: 'Being sure costs a round of asking around. A manager who signs only after checking with everybody is safe but slow; one who decides alone is fast but sometimes wrong. Choose per decision, not once for everything.'
links:
  - leaf: 'cs/replication'
    name: 'Replication'
    same: 'Both are about keeping several copies of data on different machines so one failure does not lose it.'
    differs: 'Replication is the mechanism of copying; this lesson is about what promise you can make about the copies, and how they agree when machines fail.'
  - leaf: 'cs/concurrency'
    name: 'Concurrency and locks'
    same: 'Two threads grabbing the same seat is the same race as two servers grabbing it; a lock and a leader both ensure one winner.'
    differs: 'Threads share memory and one clock, so a lock is cheap. Servers share nothing but slow, lossy messages, so agreement needs votes.'
  - leaf: 'cs/transactions'
    name: 'Transactions and isolation'
    same: 'Both give an illusion of order: transactions make concurrent work look one-at-a-time, linearizability makes many copies look like one.'
    differs: 'Isolation is about several operations grouped together; linearizability is about single reads and writes on one value across replicas.'
next:
  q: 'Raft gives us one ordered log that every machine agrees on. Where do such logs actually flow at scale, and how do you turn a never-ending stream of events, like live IPL scores, into answers while a match is still being played?'
  leaf: 'cs/batch-and-stream'
  name: 'Batch and stream processing'
---

:::hook
q: Here is the puzzle. Two servers each hold a copy of "1 seat left", and the link between them is down for 200 ms. Which is the best way to avoid selling the seat twice?
options: ["Let both sell and apologise later", "Make every sale ask a majority of servers first", "Compare the two servers' clocks and keep the earlier tap"]
answer: 1
right: Right. A majority vote means two separate groups can never both say yes, because any two majorities share a member. It costs a short wait, which is the price of certainty. (Big booking sites do something like this for the final seat; exact designs are not public [Inference].)
wrong: Apologising later is fine for a "like" but not for a seat. Clocks are tempting but different machines disagree about the time by milliseconds or more, so "earlier" may be wrong. What could both servers rely on that does not depend on clocks?
:::

## Two copies, two stories {lvl=1 id=s-copies label="Foundations"}

Why keep several copies of the data at all? Two reasons. If one machine dies, another still has the data. And a copy in Mumbai answers a Mumbai user faster than a copy in Frankfurt.

But copies can drift apart. Think of a family group chat where your mother updates the plan to "dinner at 8" while your uncle, who has not seen it yet, still tells everyone "dinner at 7". Both are looking at an honest copy of the plan. They differ only because news takes time to travel.

Computers have the same problem, with one cruel twist: a message can be slow, or lost, or the other side can simply be dead, and **you cannot tell which**. Silence from a server could mean "crashed" or "very slow". This one fact causes almost everything in this lesson.

## What should a reader see? {lvl=1 id=s-promise label="Foundations"}

A **consistency guarantee** is a promise about what a reader may see after a write. Two ends of the range:

- **Eventual consistency**: "if nobody writes for a while, every copy will end up the same". In the meantime you might read old data. Fast and always available, like a news app that shows yesterday's headline for a few seconds.
- **Linearizability** (the strongest common promise): the system acts as if there were **one single copy**. The moment one person has seen the new value, nobody anywhere can later see the old one.

For a seat count, a bank balance or a unique username you want the second. For a view counter or a "likes" number the first is fine, and much cheaper.

:::qc lvl=1
q: Which data can safely be eventually consistent?
options: ["Your account balance", "The number of views on a video", "Whether a seat is already sold"]
answer: 1
right: Right. Being off by a few views for a few seconds harms nobody, while a wrong balance or a double-sold seat does.
wrong: Think about which mistake costs somebody money or trust. Only one of these can be briefly wrong with no harm.
:::

## Seeing the difference {lvl=2 id=s-see label="SDE-1"}

Picture one value, `seats = 1`, stored on three replicas. You write `seats = 0` and the write has reached only replica A so far. Your friend reads from replica C, which still says 1.

- Under **eventual consistency** that is allowed. C will catch up soon.
- Under **linearizability** it is not allowed once your write has been confirmed to you: the system must either make C catch up first or refuse to answer from C.

:::figure caption="One write reaches only replica A. A read from C returns the old value: fine for eventual consistency, forbidden by linearizability once the write is confirmed."
<svg viewBox="0 0 320 170" role="img" aria-label="Three replicas, only the first has the new value">
<rect x="20" y="30" width="80" height="44" rx="8" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/>
<text x="34" y="50" style="font-size:11px;fill:var(--ink)">A: seats 0</text>
<text x="34" y="65" style="font-size:9px;fill:var(--muted)">new value</text>
<rect x="120" y="30" width="80" height="44" rx="8" style="fill:var(--surface);stroke:var(--rule);stroke-width:2"/>
<text x="134" y="50" style="font-size:11px;fill:var(--ink)">B: seats 1</text>
<text x="134" y="65" style="font-size:9px;fill:var(--muted)">not yet</text>
<rect x="220" y="30" width="80" height="44" rx="8" style="fill:var(--surface);stroke:var(--rule);stroke-width:2"/>
<text x="234" y="50" style="font-size:11px;fill:var(--ink)">C: seats 1</text>
<text x="234" y="65" style="font-size:9px;fill:var(--muted)">not yet</text>
<path d="M60 130 L60 76" style="fill:none;stroke:var(--c);stroke-width:2"/>
<text x="20" y="148" style="font-size:10px;fill:var(--ink)">write seats = 0</text>
<path d="M260 130 L260 76" style="fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:4 3"/>
<text x="214" y="148" style="font-size:10px;fill:var(--ink)">read returns 1</text>
</svg>
:::

## CAP in plain words {lvl=2 id=s-cap label="SDE-1"}

Sometimes the network breaks and the machines split into two groups that cannot talk. This is a **partition**. Now a request arrives at one group. It has exactly two honest options:

1. **Refuse** (or wait) until it can check with the other group. The answer is never wrong, but the service is **unavailable** to that user.
2. **Answer** from what it has. The service stays **available**, but the answer may be **stale**.

That is the **CAP** idea: during a partition you choose consistency or availability, not both. It is a rule about the bad moments only. A common misreading is "pick two of three, forever". Partitions are not optional (cables get cut, switches fail), so the real choice is what to do *when* one happens.

**PACELC** finishes the picture. It says: if there is a **P**artition, choose **A**vailability or **C**onsistency; **E**lse (normal days), choose **L**atency or **C**onsistency. Even on a good day, checking with a distant replica takes time, so strong consistency costs speed everywhere, not only during failures.

:::qc lvl=2
q: A bank app cannot reach its far data centre. It shows "balance unavailable, try again" instead of an old number. Which side of CAP did it pick?
options: ["Availability", "Consistency", "Neither: CAP does not apply"]
answer: 1
right: Right. It refused to answer rather than risk a stale balance.
wrong: It gave up answering (availability) to avoid showing a wrong value. Which letter protects correct values?
:::

## Quorums: voting with copies {lvl=2 id=s-quorum label="SDE-1"}

How can a system with $n$ replicas stay correct while some are slow or dead? Instead of needing all of them, it needs only **enough**: a write must be confirmed by **$w$** replicas, and a read asks **$r$** replicas and takes the newest answer.

If the two groups are forced to overlap, a reader always meets someone who saw the latest write:

$$w + r > n$$

Read it as: "the number who confirmed the write plus the number I ask must add up to more than the total, so the two groups must share at least one machine".

Example with $n = 3$: write to $w = 2$, read from $r = 2$. Any 2 machines and any other 2 machines out of 3 must share one. If one machine is down, both reads and writes still work. Setting $w = 3, r = 1$ makes reads fast and writes fragile; $w = 1, r = 3$ is the opposite.

```python
def read(replicas, r):
    answers = [rep.get() for rep in replicas[:r]]   # (version, value)
    return max(answers)[1]                          # newest version wins

def write(replicas, w, version, value):
    acks = sum(rep.put(version, value) for rep in replicas)
    return acks >= w                                # done only if w confirmed
```

The code uses a **version number**, not a clock, to find the newest answer. [Inference: a simplified toy; real systems add repair of stale copies and handling of concurrent writers.]

## Clocks are unreliable {lvl=3 id=s-clocks label="SDE-2"}

It is tempting to stamp every write with the time and keep the latest one ("last write wins"). It fails because each machine has its own clock, and clocks drift. Machines keep their clocks roughly right by asking a time server (the NTP service), but accuracy is typically milliseconds and sometimes much worse [Unverified figures]. Suppose server A's clock runs 50 ms fast:

| Real order | Write | Stamped time (A is +50 ms) | Survives? |
|---|---|---|---|
| first | A writes `x = 1` at real time 100 ms | 150 ms | no, it looks newer |
| second | B writes `x = 2` at real time 120 ms | 120 ms | yes, but loses |

The later write is silently thrown away. Fixes: use **logical clocks** (a counter that goes up with every event and travels with messages, so that "A saw B's write before writing" is recorded), keep **version vectors** to detect truly concurrent writes and keep both, or use hardware-assisted clocks that report a time *range* and wait out the uncertainty (Google's Spanner does this; the design is public [Unverified details]).

Related trap: a process can pause (a long garbage-collection pause, say) and wake up still believing it holds a lock that expired. The standard defence is a **fencing token**: the lock service hands out an ever-increasing number, and the storage rejects any write carrying an older one.

:::qc lvl=3
q: Two writes come from servers whose clocks differ by 80 ms. Why can "keep the one with the later timestamp" lose the newer write?
options: ["Timestamps are always rounded", "The slower server's real-newer write can carry an earlier stamp", "Clocks only differ for old writes"]
answer: 1
right: Right. The stamps measure each machine's own belief about the time, which is not the real order of events.
wrong: Look at the table above: whose clock is ahead decides who "wins", not who actually wrote last.
:::

## Consensus and Raft {lvl=3 id=s-raft label="SDE-2"}

**Consensus** means getting several machines to agree on one value (such as "who is the leader" or "what is the next entry in the log") even if some crash. It is the machinery behind a linearizable system. **Raft** is a widely taught algorithm for it. Here is the story.

**Cast.** Each machine is a *follower*, a *candidate* or the *leader*. There is a counter called the **term**, like the number of a parliament session.

**1. Quiet times.** The leader sends a heartbeat ("I am here") every few tens of milliseconds [Unverified figure]. Followers reset their timers on each one.

**2. The leader vanishes.** A follower whose timer runs out (the timers are *randomised*, say 150 to 300 ms, so that not everybody wakes at once) thinks "no leader". It raises the term by one, votes for itself and asks the others, "vote for me in term 7?"

**3. Votes.** Each machine gives **one vote per term**, and only to a candidate whose log is at least as up to date as its own. A candidate that collects a **majority** becomes leader. For $n$ machines:

$$\text{majority} = \lfloor n/2 \rfloor + 1$$

Read it as: "half, rounded down, plus one". With 5 machines that is 3. Two different candidates can never both reach 3 of 5, because two groups of 3 would need 6 machines. That is why **a split brain cannot happen**.

**4. Writing.** Clients talk only to the leader. It appends the entry to its log, copies it to followers, and counts it **committed** once a majority hold it. Then it answers the client. A new leader is guaranteed to have every committed entry, because the majority that committed it and the majority that elected the new leader overlap.

**5. A split vote.** If two candidates split the votes, nobody wins; timers expire again, randomly, and one usually gets ahead next time.

**6. The old leader returns.** It sends a message tagged term 6. Everyone is on term 7 and rejects it, and it steps down to follower. The term number is the fencing token of Raft.

```python
import random
def election_timeout():
    return random.uniform(0.150, 0.300)   # seconds; differs per node

def wins(votes, n):
    return votes >= n // 2 + 1            # majority
```

The cost is plain: with 5 machines, 2 can fail and the system still works; with 3 failing it halts (it chooses consistency over availability, in CAP terms). Every write waits for one round trip to a majority.

:::qc lvl=3
q: A Raft cluster has 5 machines. 3 are cut off from the other 2. Which side can elect a leader and accept writes?
options: ["The side with 3", "The side with 2", "Both sides, they just disagree"]
answer: 0
right: Right. Only the 3-machine side can reach a majority of 3. The 2-machine side keeps waiting.
wrong: Count votes against the majority of 5. Which group can reach it?
:::

## Choosing a level per operation {lvl=4 id=s-choose label="SDE-3"}

Strong consistency everywhere is expensive and fragile; weak consistency everywhere is cheap and dangerous. Mature designs **choose per operation**, and keep the strong part small.

- **Seat sale, payment, unique username**: linearizable write path through a single leader or consensus group for that item; the cost is one cross-region round trip, about 100 to 200 ms between continents [Unverified figure].
- **Browsing, search, recommendations, like counts**: read local replicas, accept staleness, repair in the background.
- **Read-your-writes** (after I post, I must see my own post) and **monotonic reads** (time never goes backwards on my screen) are cheap middle levels: route a user's reads to the same replica or the same version.
- **Shard the problem**: each shard has its own small Raft group (as many databases do), so consensus does not become one global bottleneck [Inference: a common pattern, details vary by product].

Decision questions to ask in a design round: what is the cost of a stale read here? What is the cost of unavailability? How far apart are the replicas? Which operations can be made **idempotent** (safe to repeat) or **commutative** (order does not matter, like adding to a counter), so they need no agreement at all?

Raft handles crashes but not **liars**. Systems where nodes may be malicious (blockchains) need Byzantine fault tolerance, which costs more machines and more messages.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Copies drift because messages are slow and you cannot tell "dead" from "slow". {lvl=1}
2. Linearizability makes many copies act as one; eventual consistency only promises agreement later. {lvl=1}
3. CAP: during a partition choose consistency or availability. PACELC: otherwise choose latency or consistency. {lvl=2}
4. Quorums: when $w + r > n$, a read always meets a copy that saw the latest write. {lvl=2}
5. Never trust timestamps from different machines for ordering; use counters, version numbers or fencing tokens. {lvl=3}
6. Raft elects a leader with a majority vote per term, so two leaders cannot coexist; every write is committed by a majority. {lvl=3}
7. Pick the consistency level per operation and keep the strongly consistent part small. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "CAP means pick any two forever" is wrong: partitions will happen, so the choice is what you do during one. {lvl=2}
- An even number of machines buys nothing: 6 need a majority of 4 and tolerate 2 failures, the same as 5. {lvl=3}
- $w + r > n$ alone is not full linearizability: concurrent writers, sloppy quorums and failed writes still leave gaps. {lvl=3}
- Last-write-wins with wall-clock time can silently delete the newer write. {lvl=3}
- Never leave a timeout-based lock without a fencing token; a paused process can wake and corrupt data. {lvl=4}
- Stronger is not always better: a global consensus round for every "like" would make the app slow for no benefit. {lvl=4}
:::
