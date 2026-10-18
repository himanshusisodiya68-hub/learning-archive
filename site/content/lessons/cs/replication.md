---
title: Replication
summary: How your payment app keeps working when a whole data centre goes dark, by keeping several copies of the data and agreeing on which is current.
ncert: []
up_to: SDE-3
builds_on: [Document, key-value and graph models, Transactions and isolation, Caching]
notes_prompt: Explain to a friend why keeping several copies of a database helps, and what new problems it creates.
margin:
  - kind: history
    title: History
    text: Copying data to a second machine is as old as backups. Running a live copy that takes over automatically became common with relational databases in the 1990s and 2000s, and with the growth of web services it became the default. [Unverified]
  - kind: tip
    title: Interview favourite
    text: 'The standard follow-up to "we added read replicas" is "what happens when a user writes and immediately reads?" Answer with read-your-writes: send that user to the leader for a short while.'
  - kind: olympiad
    title: Design link
    text: The quorum rule w + r > n is a pigeonhole argument. Any set of w nodes and any set of r nodes out of n must share at least one node when w + r > n, and that shared node holds the latest value.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 5 Replication [Unverified]" }
  - { title: "A. S. Tanenbaum and M. van Steen, Distributed Systems", ref: "Consistency and replication [Unverified]" }
cards:
  - { front: "Three reasons to keep copies of data?", back: "Availability (survive a machine or site failing), latency (a copy near the user), and read throughput (many copies share the reading)." }
  - { front: "Leader-follower replication in one sentence?", back: "All writes go to one leader, which sends the changes to followers; reads can be served by followers." }
  - { front: "Synchronous versus asynchronous replication?", back: "Synchronous: the leader waits for a follower before confirming, so no loss but slower and blocked if the follower is down. Asynchronous: confirm at once, faster, but a leader crash can lose the latest writes." }
  - { front: "What is read-your-writes consistency?", back: "After you write something, your own later reads must show it, even if other users briefly see old data. Fix: read your own recent data from the leader." }
  - { front: "The quorum rule?", back: "With n replicas, write to w and read from r. If w + r > n, every read overlaps at least one node holding the latest write." }
  - { front: "Why is last-write-wins dangerous?", back: "When two writes conflict, it keeps the one with the later timestamp and silently throws the other away, and clocks on different machines are never perfectly in step." }
core:
  idea: 'Replication keeps copies of the same data on several machines so the service survives failures, answers from nearby, and shares the reading. The hard part is that copies drift apart: every scheme decides who accepts writes and how fast the others learn of them.'
  formulas:
    - tex: 'A_{\text{system}} = 1 - (1 - a)^{n}'
      label: 'Chance that at least one of n independent copies is up'
    - tex: 'w + r > n'
      label: 'Quorum rule: reads and writes overlap in at least one node'
  conditions:
    - 'Failures of different copies are independent (not the same power supply, rack or software bug)'
    - 'For the quorum rule, all n replicas are real, current members and the same r and w are used by every client'
    - 'Clocks are not trusted to order writes; versions or a single leader decide'
  sign: 'Copies fail together more often than the formula assumes. 1 - (1 - a)^n is an upper limit on what replication can buy.'
outcomes:
  - 'Give three reasons to replicate and compute the availability gain from n copies'
  - 'Describe leader-follower replication and the cost of synchronous versus asynchronous'
  - 'Recognise replication lag anomalies and fix them (read-your-writes, monotonic reads)'
  - 'Explain what goes wrong in failover and in multi-leader conflicts'
  - 'Use the quorum rule w + r > n and say what it does and does not guarantee'
opener:
  story: |
    It is the first of the month and half of India is paying rent through UPI. In the middle of this rush, the building holding one of the data centres loses power, and the app on your phone does not so much as hiccup. Your payment goes through.

    No one machine in the world is that reliable. Disks die, cables get cut, and whole buildings go dark. Yet some services seem never to fail. The trick is not a better machine. It is that the data lives in more than one place at the same time.

    That sounds easy until you try it. If your balance is stored in two places and you spend money in one, what stops the other from still showing the old amount?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="One leader database sends changes to two followers; a phone writes to the leader and reads from a follower"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="124" y="20" width="72" height="44" rx="8"/></g><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><rect x="30" y="140" width="72" height="44" rx="8"/><rect x="218" y="140" width="72" height="44" rx="8"/></g><text x="140" y="46" style="font-size:12px;fill:var(--ink)">leader</text><text x="40" y="166" style="font-size:12px;fill:var(--ink)">follower</text><text x="228" y="166" style="font-size:12px;fill:var(--ink)">follower</text><path d="M140 64 L80 140" style="stroke:var(--c);stroke-width:2;fill:none"/><path d="M180 64 L240 140" style="stroke:var(--c);stroke-width:2;fill:none"/><text x="70" y="104" style="font-size:9px;fill:var(--c)">changes</text><text x="220" y="104" style="font-size:9px;fill:var(--c)">changes</text><text x="132" y="12" style="font-size:9px;fill:var(--muted)">writes go here</text><text x="30" y="204" style="font-size:9px;fill:var(--muted)">reads served here</text><text x="218" y="204" style="font-size:9px;fill:var(--muted)">reads served here</text><text x="104" y="228" style="font-size:10px;fill:var(--bad)">a fire in one place: the rest carry on</text></svg>'
symbols:
  - s: 'n'
    means: 'number of copies (replicas) of the data (count)'
  - s: 'a'
    means: 'availability of one copy: the fraction of time it is up (0 to 1)'
  - s: 'w'
    means: 'write quorum: how many replicas must confirm a write (count)'
  - s: 'r'
    means: 'read quorum: how many replicas are asked on a read (count)'
  - s: 'leader'
    means: 'the replica that accepts writes and tells the others'
  - s: 'follower'
    means: 'a replica that applies the leader''s changes and serves reads'
  - s: 'lag'
    means: 'how far a follower is behind the leader, in time or in changes not yet applied'
life:
  - 'UPI, banking and shopping apps keep data in more than one data centre so a power cut or fire does not stop them.'
  - 'A WhatsApp or Instagram photo loads fast because a copy sits in a data centre or cache near your city.'
  - 'A news site on election night survives millions of readers because read replicas share the load.'
  - 'Your phone photos backed up to the cloud are replicated; if your phone falls in a lake, the copies survive.'
  - 'Google Docs shows the same document on your laptop and phone, and merges edits made while you were offline, a multi-leader conflict solved cleverly.'
models:
  - name: 'Redundancy buys availability, but costs agreement'
    text: 'Two pilots, two engines, two kidneys: spare parts keep a system alive. But with two of anything you now need a rule for who decides. Every redundant system pays for safety with coordination.'
  - name: 'Fast, correct, always on: pick your moment'
    text: 'You cannot always have the answer instantly, exactly right and available even when messages are lost. Systems choose when to bend: a bank waits and is exact, a "likes" counter answers instantly and is slightly off.'
  - name: 'One decider avoids arguments'
    text: 'A single captain gives clear orders but a sinking ship if the captain falls. Many captains survive that but may give clashing orders. Leader-based and leaderless replication are the same trade as a monarchy and a committee.'
links:
  - leaf: 'cs/transactions'
    name: 'Transactions and isolation'
    same: 'Both are about keeping data correct when many things happen at once, and both define what a reader may see.'
    differs: 'Transactions govern concurrent actions on one logical copy; replication adds the delay of copying between machines.'
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'A cache is a copy of data placed closer to the reader, and it can go stale in the same way a lagging follower does.'
    differs: 'A cache can be thrown away and rebuilt; a replica is a full member that may become the leader and must never lose data.'
  - leaf: 'mat/classical-probability'
    name: 'Classical probability'
    same: 'The chance that all n independent copies fail is the product of their failure chances, the same multiplication rule you use for coin flips.'
    differs: 'Real failures are rarely independent: one power supply or one bug can take down all copies at once.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Leaderless stores place copies on machines found by hashing the key, so replication reuses the same trick.'
    differs: 'A hash table lives in one memory; a replicated store must handle machines that are slow, down or out of date.'
next:
  q: 'Every replica holds all of the data. What do you do when the data no longer fits on one machine at all, say a billion posts, and how do you decide which machine holds which post?'
  leaf: 'cs/partitioning'
  name: 'Partitioning and sharding'
---

:::hook
q: Here's the puzzle. Each of your three data copies is up 99% of the time, and they fail independently. How often is at least one copy available?
options: ["About 99%, the same as one copy", "About 99.9999%", "About 97%"]
answer: 1
right: Right. All three would have to be down together, which has probability 0.01 × 0.01 × 0.01 = one in a million. So at least one is up 99.9999% of the time, under the big assumption that they fail independently. (Real failures are often correlated, so reality is lower. [Inference])
wrong: Each extra independent copy makes "everything is down" much rarer. What is the chance that all three fail at the same moment?
:::

## Why keep copies {lvl=1 id=s-why label="Foundations"}

One machine holding your data is a **single point of failure**: if it dies, everything stops. Keeping copies on several machines, called **replicas**, fixes this and gives two more gifts:

- **Availability.** If one replica is down, another answers.
- **Latency.** A replica in Mumbai answers a Mumbai user faster than one in Virginia, simply because light takes time to travel.
- **Read throughput.** If one machine can answer 5,000 reads a second, five copies can answer 25,000.

Let one copy be up a fraction $a$ of the time. If all $n$ copies fail independently, everything is down only when all of them are, so

$$A_{\text{system}} = 1 - (1 - a)^{n}$$

Read it as: one minus the chance that every single copy is down. With $a = 0.99$ and $n = 3$, that is $1 - 0.01^3 = 0.999999$, six nines, from three ordinary machines.

:::qc lvl=1
q: A copy is up 90% of the time and copies fail independently. How often is at least one of two copies up?
options: ["90%", "99%", "81%"]
answer: 1
right: Right. Both are down with probability 0.1 × 0.1 = 0.01, so at least one is up 99% of the time.
wrong: Work out the chance that both copies are down at once, then subtract it from one.
:::

Copies solve the failure problem and create a new one: when you change the data, every copy must hear about it. Replication is all about that conversation.

## Leader and followers {lvl=2 id=s-leader label="SDE-1"}

The simplest plan is to choose one replica as the **leader**. All writes go to the leader, which records each change in a log and sends it to the others, the **followers**. Followers apply the changes in the same order, so they end up identical. Reads can go to any replica.

:::figure caption="A write goes to the leader, then travels to the followers. Until it arrives, a follower still shows the old value."
<svg viewBox="0 0 480 170" role="img" aria-label="Timeline: the leader confirms a write at once while followers receive it a moment later">
<line class="axis" x1="60" y1="130" x2="450" y2="130"/>
<text x="60" y="150" style="font-size:11px;fill:var(--muted)">time</text>
<text x="8" y="40" style="font-size:11px;fill:var(--ink)">leader</text>
<text x="8" y="80" style="font-size:11px;fill:var(--ink)">follower A</text>
<text x="8" y="115" style="font-size:11px;fill:var(--ink)">follower B</text>
<line class="faint" x1="70" y1="36" x2="450" y2="36"/>
<line class="faint" x1="70" y1="76" x2="450" y2="76"/>
<line class="faint" x1="70" y1="111" x2="450" y2="111"/>
<circle cx="130" cy="36" r="6" style="fill:var(--mat)"/>
<text x="112" y="22" style="font-size:10px;fill:var(--ink)">x = 7 written</text>
<path class="ray" d="M130 36 L190 76"/>
<path class="ray" d="M130 36 L300 111"/>
<circle cx="190" cy="76" r="6" style="fill:var(--mat)"/>
<circle cx="300" cy="111" r="6" style="fill:var(--mat)"/>
<text x="205" y="68" style="font-size:10px;fill:var(--muted)">sees x = 7</text>
<text x="310" y="104" style="font-size:10px;fill:var(--muted)">sees x = 7</text>
<text x="135" y="102" style="font-size:10px;fill:var(--bad)">B still shows the old x</text>
</svg>
:::

Followers can apply changes in one of two ways, and the choice matters:

| Mode | Leader confirms when | Good | Bad |
|---|---|---|---|
| Synchronous | A follower has also stored it | No loss if the leader dies | A slow or dead follower blocks writes |
| Asynchronous | The leader alone has stored it | Fast, and writes never wait | A leader crash loses the latest writes |
| Semi-synchronous | One follower has stored it, the rest lag | A balance of both | Still some waiting |

Most systems use asynchronous or semi-synchronous replication, because waiting for every copy makes the whole service as slow as its slowest member. [Inference: the usual practice; individual products differ.]

:::qc lvl=2
q: A leader confirms a write to you and then crashes before any follower has received it. Under which mode was your write confirmed?
options: ["Synchronous", "Asynchronous", "Either, nothing is ever lost"]
answer: 1
right: Right. Asynchronous confirms before the followers know, so that write can be lost if the leader dies at that moment.
wrong: Which mode waits for a follower before telling you the write succeeded? The other one confirms earlier.
:::

## Replication lag {lvl=2 id=s-lag label="SDE-1"}

With asynchronous followers, a follower can be a little behind. That delay is **replication lag**, usually milliseconds but sometimes seconds or more when the network or the follower is busy. During the lag a user can see odd things:

- **Read-your-writes broken.** You post a comment; the page reloads from a follower that has not yet heard; your comment is gone and you post it again. Fix: after a user writes, serve that user's reads from the leader for a short time, or remember the time of their last write and only read from a follower that has caught up to it.
- **Going back in time.** Your first refresh hits a fresh follower and shows the new reply; your second hits a stale one and the reply vanishes. Fix: **monotonic reads**, meaning each user always reads from the same replica.
- **Out-of-order effects.** A reply appears before the question it answers, because the two are stored on different replicas that lag differently. Fix: keep related data in one place or order it by cause (the partitioning and consistency lessons return to this).

These guarantees are all variants of one promise: the system's behaviour should make sense to the person using it. The word for the weak version, where copies agree only after a pause, is **eventual consistency**.

```python
def read(user, key):
    if time.time() - last_write_time[user] < 5:   # wrote in last 5 s
        return leader.get(key)                    # read your writes
    return pick_follower(user).get(key)           # same follower each time
```

## When the leader dies {lvl=3 id=s-failover label="SDE-2"}

If the leader fails, a follower must be promoted: **failover**. It is easy to describe and full of traps:

1. **Detect.** Followers cannot tell a dead leader from a slow one, so they use a timeout. Too short, and a brief network hiccup triggers a needless failover; too long, and the service is down while waiting.
2. **Choose.** Usually the follower with the most recent data wins.
3. **Lost writes.** With asynchronous replication the new leader may lack the old leader's last few writes. If the old leader returns, those writes conflict with the new history and are usually discarded, which is bad when other systems have already acted on them.
4. **Split brain.** If the old leader comes back and still believes it is leader, two machines accept writes and the data diverges. Systems prevent this by making the old leader step down (fencing), but getting this right is one of the hardest parts of distributed systems and leads straight to the consensus lesson.

:::qc lvl=3
q: What is split brain?
options: ["Two machines both believing they are the leader and accepting conflicting writes", "A table split across two disks", "A follower that is far behind"]
answer: 0
right: Right. With two leaders, the data diverges and someone's writes must be thrown away.
wrong: Think of a failover where the old leader comes back after a new one was chosen. What does each one believe about itself?
:::

## More than one leader {lvl=3 id=s-multi label="SDE-2"}

A single leader is a bottleneck, and if it sits in one city it is far from users elsewhere. In **multi-leader** replication, each data centre has its own leader that accepts writes locally and sends them to the other leaders. Offline apps are the same in miniature: your phone is a leader for your edits until it syncs.

The price is **write conflicts**. Two people edit the same document in two places; neither leader knew of the other's edit. Ways to settle it:

- **Last write wins.** Keep the edit with the later timestamp. Simple, but one edit is silently lost, and timestamps from different clocks are unreliable.
- **Merge.** Combine both edits (as shared-document editors do with special data structures that merge automatically).
- **Ask the application.** Keep both versions and let the code, or the user, choose.

Multi-leader setups are best avoided unless you need local writes in several regions, because conflicts are subtle to test.

## Leaderless and quorums {lvl=3 id=s-quorum label="SDE-2"}

A third family drops the leader. The client sends each write to several replicas at once and reads from several, taking the **newest** value it finds. This is the style popularised by Amazon's Dynamo paper and used by Cassandra-like stores. [Unverified detail: product specifics]

With $n$ replicas, a write must be confirmed by $w$ of them and a read asks $r$ of them. If

$$w + r > n$$

then any group of $w$ and any group of $r$ must share at least one replica, so a read always meets at least one replica with the latest write. Read it as: the readers and the writers together are more people than there are seats, so someone sits in both groups.

With $n = 5$: $w = 3, r = 3$ (since 6 > 5) tolerates two replicas down for both reads and writes. $w = 5, r = 1$ makes reads fast and writes fragile; $w = 1, r = 5$ the opposite.

If a replica missed a write while it was down, it is fixed by **read repair** (the reader notices the stale copy and writes the new value to it) and by a background process that compares replicas. Versions are compared with counters called **version vectors** that detect when two writes were concurrent, rather than trusting clocks.

```python
def quorum_read(replicas, r):
    answers = [rep.get(key) for rep in pick(replicas, r)]
    newest = max(answers, key=lambda a: a.version)
    for rep in replicas_with_older(answers, newest):
        rep.put(key, newest)              # read repair
    return newest.value
```

## What replication does not promise {lvl=4 id=s-limits label="SDE-3"}

Quorums sound like strong guarantees but have gaps. Even with $w + r > n$, a read can still return stale data if a write is in progress and only some replicas have it, if a node holding a new value fails and is restored from an old one, or if "sloppy quorums" temporarily write to substitute nodes during a failure. So quorums give high probability of fresh reads, not the strict ordering of one-copy behaviour. [Inference: a summary of commonly discussed caveats.]

Questions to ask in a design review:

- What is the worst lag we have seen, and which features break when it spikes?
- When a leader fails, how many seconds of writes can we lose, and is that acceptable for this data?
- Are replicas in separate failure zones (power, network, building)? Three copies on one rack are one copy.
- How do we test a failover before it happens for real?

For data where order and exactness matter (a bank balance, a unique username), a single leader plus a consensus protocol is the answer, and the next-but-one lesson explains why. For data that tolerates delay (view counts), cheaper eventual consistency is a good bargain.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Copies buy availability, lower latency and more read capacity; with independent failures, A = 1 - (1 - a)^n. {lvl=1}
2. Leader-follower: writes to the leader, changes streamed to followers, reads from either. {lvl=2}
3. Synchronous is safe but slow; asynchronous is fast but can lose the latest writes and causes lag. {lvl=2}
4. Lag causes anomalies; read-your-writes and monotonic reads are the standard fixes. {lvl=2}
5. Failover is hard: detecting death, lost writes, and split brain. {lvl=3}
6. Multi-leader needs conflict handling; leaderless uses quorums with w + r > n, which help but do not give strict guarantees. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Replicas are not backups: a bad delete or a bug is faithfully copied to every replica in seconds. Keep separate backups. {lvl=1}
- Copies in the same rack or building fail together, so the independence in the availability formula is optimistic. {lvl=2}
- Reading from a follower right after writing to the leader can show old data; plan for it. {lvl=2}
- Last-write-wins silently discards data and relies on clocks that disagree. {lvl=3}
- w + r > n narrows the chance of stale reads but does not make the store behave like one machine. {lvl=4}
:::
