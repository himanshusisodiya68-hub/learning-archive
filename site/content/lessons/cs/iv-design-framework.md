---
title: A framework for any design question
summary: How to spend 45 minutes when someone says "design a big system" and gives you nothing else. Seven steps, in order, and what each level must show.
ncert: []
up_to: SDE-3
builds_on: [Scaling up and scaling out, Caching, APIs (REST and beyond), Partitioning and sharding]
notes_prompt: Explain to a friend why a good system designer asks questions for the first five minutes instead of drawing boxes, and what the questions are for.
margin:
  - kind: history
    title: Why it exists
    text: 'Companies ask design questions because the job is rarely "write this function". It is "decide what to build under limits of time, money and people". The round tests that judgement, not memory [Inference: the common reading of interviewers'' goals].'
  - kind: tip
    title: First minute
    text: 'Do not start drawing. Say: "Before I design, let me check what we are building and for whom." Five minutes of questions saves thirty of building the wrong thing.'
  - kind: olympiad
    title: Stretch
    text: 'Practise out loud, with a timer. Most people who fail a design round knew the technology; they ran out of time on one component and never reached trade-offs.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliable, Scalable, and Maintainable Applications (the three goals of any design)" }
  - { title: "A. Xu, System Design Interview", ref: "the framework chapter: a four-step approach [Unverified]" }
cards:
  - { front: "The seven steps of a design round, in order?", back: "Clarify requirements; estimate; API; data model; high-level diagram; deep dives; bottlenecks and trade-offs." }
  - { front: "Functional versus non-functional requirements?", back: "Functional: what the system does (post, follow, search). Non-functional: how well (speed, availability, consistency, scale, cost)." }
  - { front: "Why estimate before drawing?", back: "The numbers decide the design. 12 writes a second fits one database; 120,000 does not. Without numbers you cannot tell whether a box is needed." }
  - { front: "What is the 'boring first' rule?", back: "Start with the simplest design that meets the requirements (clients, a server, one database), then change only what the numbers say will break." }
  - { front: "How should you state a trade-off?", back: "X gives us A, costs us B, and we accept it because the requirement says C." }
  - { front: "How do the levels differ?", back: "SDE-1 builds a working design. SDE-2 drives the conversation and justifies trade-offs. SDE-3 handles ambiguity, failure, cost, evolution and the people who run it." }
core:
  idea: 'A design round is a conversation about trade-offs, not a quiz with one answer. Move through seven steps: clarify, estimate, API, data model, high-level diagram, deep dives, then bottlenecks and trade-offs. Start simple, let the numbers show what breaks, and fix only that.'
  formulas:
    - tex: '\text{requirements} \to \text{numbers} \to \text{simple design} \to \text{find the break} \to \text{trade-off}'
      label: 'The thread through the whole round'
  conditions:
    - 'The problem is deliberately vague: you must create the specification by asking'
    - 'About 45 minutes, so every step has a rough time budget'
    - 'The interviewer wants to hear your reasoning, so think aloud'
    - 'There is no single right answer; there are well-argued and poorly argued ones'
  sign: 'The commonest mistake is jumping to technology ("we will use Kafka and sharded Cassandra") before any requirement or number has been stated.'
outcomes:
  - 'List the seven steps and a time budget for each'
  - 'Turn a vague prompt into functional and non-functional requirements'
  - 'Draft a small API and data model from the requirements'
  - 'Start with a boring design, find the first bottleneck from numbers and fix only that'
  - 'State trade-offs clearly and describe what each level (SDE-1 to SDE-3) is expected to show'
opener:
  story: |
    You sit down. The interviewer smiles and says: "Design a photo-sharing app. You have forty-five minutes." And then goes quiet.

    There is no list of operations here, no input and output, no tests. You could build almost anything: a tiny app for a school, or something for a billion people. Whiteboards fill up fast when you start drawing boxes, and you can fill one with boxes that answer a question nobody asked.

    So what is the very first thing a good designer does, before drawing a single box?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A blank whiteboard with a question mark, and a person asking questions"><rect x="20" y="24" width="190" height="130" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="94" y="104" style="font-size:44px;fill:var(--c)">?</text><text x="38" y="52" style="font-size:11px;fill:var(--muted)">Design a photo app</text><circle cx="262" cy="70" r="16" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M262 86 L262 130 M262 100 L242 120 M262 100 L284 118" style="fill:none;stroke:var(--ink);stroke-width:2"/><rect x="226" y="30" width="86" height="22" rx="10" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface));stroke:var(--c)"/><text x="236" y="45" style="font-size:10px;fill:var(--ink)">How many users?</text><g style="font-size:10px;fill:var(--muted)"><text x="20" y="184">1 clarify  2 estimate  3 API  4 data</text><text x="20" y="200">5 diagram  6 deep dives  7 trade-offs</text></g></svg>'
life:
  - 'Planning a wedding for 50 or for 5,000: the questions you ask first (guests, budget, date) decide everything that follows.'
  - 'An architect asks about the family, the plot and the budget before sketching a house; the sketch comes second.'
  - 'A doctor takes a history before ordering tests. The questions are the method.'
  - 'When a city plans a metro line, planners estimate riders per hour before choosing how many coaches and how often.'
  - 'Every product meeting at work, where "build X" arrives without a spec, is a design round with a shorter clock.'
models:
  - name: 'Ask, then answer'
    text: 'Most failures come from solving the wrong problem well. Spend the first minutes on what the problem is. In a negotiation, a budget or a diagnosis, the right question beats a fast answer.'
  - name: 'Simplest thing that could work'
    text: 'Begin with the plain option and add complexity only when evidence demands it. Complexity has running costs (people, bugs, money) that appear long after the diagram is drawn.'
  - name: 'Everything is a trade-off'
    text: 'A choice that is better on one axis is usually worse on another: speed versus cost, freshness versus load. Naming both sides is a sign of understanding, in engineering and in public policy alike.'
links:
  - leaf: 'cs/iv-design-data-structure'
    name: 'Design a data structure'
    same: 'Both start by writing down the operations and the speed target, then choose structures that meet it.'
    differs: 'There the operations were given; here you must discover them by asking, and the structures are whole services.'
  - leaf: 'cs/scalability'
    name: 'Scaling up and scaling out'
    same: 'The deep dives apply scaling ideas: bigger machine first, then more machines.'
    differs: 'A scalability lesson teaches the tools; the design round tests when to use each, and how to say why.'
  - leaf: 'cs/design-url-shortener'
    name: 'Designing a URL shortener'
    same: 'It is the framework applied end to end to one problem.'
    differs: 'One problem fully worked; the framework is the reusable skeleton under all such problems.'
  - leaf: 'mat/fermi-estimation'
    name: 'Fermi estimation'
    same: 'Step 2 is Fermi estimation: break an unknown into pieces you can guess and multiply.'
    differs: 'A design estimate has a purpose: to decide whether a component is needed, not to be exactly right.'
next:
  q: 'Step two says "estimate", but how do you get from "ten million users" to "how many servers" in your head, in two minutes, without a calculator?'
  leaf: 'cs/iv-back-of-envelope'
  name: 'Back-of-the-envelope estimation'
symbols:
  - s: 'DAU'
    means: 'daily active users: people who use the product on a given day (count)'
  - s: 'QPS'
    means: 'queries per second: requests the system must serve each second (count per second)'
  - s: 'API'
    means: 'application programming interface: the list of requests a system accepts'
  - s: 'SLA'
    means: 'service-level agreement: the promised level of service, such as 99.9% uptime'
  - s: 'trade-off'
    means: 'a choice where gaining one quality costs another'
---

:::hook
q: The prompt is "Design a photo-sharing app". What is the best first move?
options: ["Draw the database and the servers", "Ask what we are building, for whom, and at what size", "Choose the technology stack"]
answer: 1
right: Yes. The prompt is vague on purpose. Questions turn it into a specification, and every later choice (database, cache, partitioning) depends on the answers. Interviewers watch for exactly this.
wrong: Boxes and technologies are answers. You do not yet know the question: how many users, which features, how fast, how reliable? Ask first.
:::

## Why a framework {lvl=1 id=s-why label="Foundations"}

A real system takes teams months to build, so nobody expects you to finish one in 45 minutes. What the interviewer can see is **how you think under uncertainty**: do you pin down the problem, use numbers, start simple, and explain your choices?

A **framework** is just a fixed order of questions that keeps you from forgetting the important ones when nerves hit. It works the way a pilot's checklist works: boring, and very hard to fail with.

There is no single right answer. Two excellent designs for the same prompt can look quite different, because they assumed different requirements. What matters is that each choice is **tied to a requirement or a number**.

## The seven steps {lvl=2 id=s-steps label="SDE-1"}

| # | Step | Minutes | What you produce |
|---|---|---|---|
| 1 | Clarify requirements | 5 | Features in scope; targets for speed, uptime, scale |
| 2 | Estimate | 5 | Requests per second, storage, bandwidth |
| 3 | API | 4 | The few calls clients make |
| 4 | Data model | 5 | The main records and how they are stored |
| 5 | High-level diagram | 10 | Boxes and arrows for the simple design |
| 6 | Deep dives | 11 | Two or three components in detail |
| 7 | Bottlenecks and trade-offs | 5 | What breaks first, what you chose and why |

:::figure caption="45 minutes: each segment is one step, numbered as in the table. The deep dives take the largest share."
<svg viewBox="0 0 320 70" role="img" aria-label="A bar divided into seven steps"><g style="stroke:var(--surface);stroke-width:2"><rect x="10" y="14" width="33" height="26" style="fill:color-mix(in srgb,var(--c) 30%,var(--surface))"/><rect x="43" y="14" width="33" height="26" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/><rect x="76" y="14" width="27" height="26" style="fill:color-mix(in srgb,var(--c) 30%,var(--surface))"/><rect x="103" y="14" width="33" height="26" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/><rect x="136" y="14" width="67" height="26" style="fill:color-mix(in srgb,var(--c) 60%,var(--surface))"/><rect x="203" y="14" width="73" height="26" style="fill:var(--c)"/><rect x="276" y="14" width="33" height="26" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/></g><g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="26" y="31">1</text><text x="59" y="31">2</text><text x="89" y="31">3</text><text x="119" y="31">4</text><text x="169" y="31">5</text><text x="239" y="31" style="fill:var(--surface)">6</text><text x="292" y="31">7</text></g><g style="font-size:9px;fill:var(--muted);text-anchor:middle"><text x="26" y="56">5</text><text x="59" y="56">5</text><text x="89" y="56">4</text><text x="119" y="56">5</text><text x="169" y="56">10</text><text x="239" y="56">11</text><text x="292" y="56">5</text></g></svg>
:::

Keep an eye on the clock. If you are still at step 4 at minute 25, move on: a rough data model and a full diagram beat a perfect data model and no diagram.

## Step 1: clarify requirements {lvl=2 id=s-clarify label="SDE-1"}

Ask two kinds of questions.

**Functional**: what the system does. For a photo app: can users upload, follow, comment, search? Videos too? Only the main two or three features go in scope; say out loud what you are leaving out.

**Non-functional**: how well it must do it.
- *Scale*: how many users, how many per day?
- *Speed*: how fast must a feed load, 200 ms or 2 s?
- *Availability*: may it be down for a minute? (Usually no, for reads.)
- *Consistency*: if I post, must my friend see it instantly, or is a few seconds fine?
- *Durability*: may a photo ever be lost? (No.)

If the interviewer says "you decide", pick sensible numbers and write them on the board. Their approval is not needed, but visibility is.

:::qc lvl=2
q: Which is a non-functional requirement for a photo app?
options: ["Users can follow each other", "A feed loads in under 300 ms for 99% of requests", "Users can comment on photos"]
answer: 1
right: Yes. It says how well, not what. Speed, uptime, scale, consistency and cost are all non-functional.
wrong: The other two are features: they say what the system does. Which option is a number about quality?
:::

## Steps 3 and 4: API and data model {lvl=2 id=s-api label="SDE-1"}

The **API** is the handful of calls the outside world makes. Writing it forces you to settle what the system actually does, and it hides internal details.

```python
# POST /photos           body: image, caption          -> 201 {photo_id}
# GET  /feed?cursor=...  header: user token            -> 200 [photos], next cursor
# POST /follow/{user_id}                               -> 204
def upload_photo(user_id: int, image: bytes, caption: str) -> int: ...
def get_feed(user_id: int, cursor: str | None, limit: int = 20): ...
```

The **data model** lists the main records, their fields and **where each lives**. Big, rarely changed blobs (images) go in object storage; small, structured, queried records (users, follows, photo metadata) go in a database.

```python
from dataclasses import dataclass
@dataclass
class Photo:
    id: int            # primary key
    owner_id: int      # who uploaded it (indexed: "all photos by user")
    created_at: int    # for ordering feeds
    blob_key: str      # where the image bytes are stored
    caption: str
```

Say which queries the model must serve ("photos of a user, newest first") and index for them. A model is good only relative to its queries, as with any data structure.

## Step 5: the boring design first {lvl=3 id=s-boring label="SDE-2"}

Draw the simplest thing that meets the stated requirements, and no more. Most designs are built from the same few boxes:

| Box | Job | Add it when... |
|---|---|---|
| Client | Phone or browser | always |
| Load balancer | Spreads requests across servers | more than one server |
| App servers | Run the logic; keep no user data inside, so any can serve any request | always |
| Database | The durable truth | always |
| Cache | Keep hot answers in memory | reads far outnumber writes, or the database is slow |
| Object storage and CDN | Cheap storage for big files; copies near users | images or video |
| Queue | Do slow work later (resize image, send notification) | work can wait, or spikes must be smoothed |
| Search index | Text search and filters | search is in scope |

Start from "client, one app server, one database". Then ask of every extra box: **which number or requirement demands it?** A box with no reason is a cost. Interviewers often ask "why do we need this?" about exactly such boxes.

## Step 6: deep dives and bottlenecks {lvl=3 id=s-deep label="SDE-2"}

Pick two or three components worth detail. Choose by **where the numbers say it will hurt**: the heaviest read path, the hottest write path, the part with the hardest correctness rule. If the interviewer points at one, follow them.

A useful loop for each deep dive:
1. Re-state the **load** on this component, from your estimates.
2. Say **what breaks first** (disk, memory, one machine's network, a hot key).
3. Offer **two fixes**, pick one, and say what it costs.

For example, a feed read that joins several tables will slow down as follows grow. Fixes: pre-compute each user's feed when someone posts ("fan-out on write", fast reads, costly writes for celebrities) or build it when asked ("fan-out on read", cheap writes, slow reads). Which one you choose depends on the read to write ratio from step 2.

## Trade-offs, in words {lvl=3 id=s-tradeoffs label="SDE-2"}

State each choice as: **"X gives us A, costs us B, and we accept it because of requirement C."** Learn the common pairs:

| Choice | Gains | Costs |
|---|---|---|
| Add a cache | Fast reads, less database load | Stale data; invalidation is hard; extra machines |
| Replicas | More read capacity, survives a machine failure | Replicas lag, so a read may be slightly old |
| Partition (shard) the data | Beyond one machine's size and write rate | Cross-shard queries and transactions get hard; hot shards |
| Queue and process later | Absorbs spikes; user does not wait | Result is delayed; need retries and duplicate handling |
| Strong consistency | Everyone sees the latest write | Slower, less available when machines cannot talk |
| Eventual consistency | Fast and available | Users may briefly see old data |
| Denormalise (store copies) | Faster reads | More writes; copies can disagree |

## Worked example: a snippet-sharing site {lvl=3 id=s-worked label="SDE-2"}

Prompt: "Design a site where people paste text and share a link." Here is the round compressed.

| Step | What you say |
|---|---|
| 1 Clarify | Create a snippet, read it by link; optional expiry; no accounts, no search, no editing. Reads should take under 200 ms; a snippet must never be lost before it expires. Say 1 million new snippets a day, read 10 times as often, 10 KB each. |
| 2 Estimate | See the code below: about 12 writes and 120 reads a second, 10 GB a day, about 3.7 TB a year. |
| 3 API | `POST /snippets` returns an id; `GET /snippets/{id}` returns the text or 404. |
| 4 Data | Record: id (short random string), created_at, expires_at, blob_key. Text goes in object storage; metadata in a database keyed by id. |
| 5 Diagram | Client, load balancer, two app servers, database, object storage. No cache yet. |
| 6 Deep dives | Id generation (random 8 characters, check for collision, or pre-generated ids from a counter); expiry (a daily job deletes rows and blobs past their date). |
| 7 Trade-offs | 120 reads a second is tiny: one database handles it, so no sharding. A cache for popular snippets is cheap and cuts latency, at the price of stale data after deletion. |

```python
writes = 1_000_000 / 86_400                      # about 12 per second
reads = writes * 10                              # about 116 per second
year_tb = 1_000_000 * 10_000 * 365 / 1e12        # about 3.65 TB
print(round(writes), round(reads), year_tb)
```

The most valuable sentence in the whole round is step 7's first one: **the numbers say we do not need sharding**. Knowing what *not* to build is the sign of experience.

:::qc lvl=3
q: Your estimate shows 120 reads and 12 writes a second. What is the best response about sharding the database?
options: ["Shard it now, for the future", "A single database is enough; say so and note when it would change", "Use a different database for every user"]
answer: 1
right: Yes. The load is far inside one machine's capacity. Design for the requirement you stated; say what number would make you revisit it.
wrong: Every extra moving part costs money and bugs. Which answer ties the choice to the numbers?
:::

## What each level should show {lvl=4 id=s-levels label="SDE-3"}

Companies differ, so this is a typical pattern, not a rule. [Inference]

| Level | Typically expected |
|---|---|
| SDE-1 | Often a smaller design problem, or help from the interviewer. A working design that meets the stated requirements; a correct API and data model; knows the standard boxes (load balancer, cache, database) and what they are for. |
| SDE-2 | Drives the conversation without prompting. Does the estimates and uses them. Identifies the bottleneck themselves, offers alternatives, and states trade-offs with reasons. Handles failure of a machine. |
| SDE-3 | Handles ambiguity and pushes back on the requirements ("do we need real-time for this?"). Considers failure modes (a region down, a bad deploy, overload), cost, security and privacy, migration from the current system, how the team will operate and monitor it, and what to build first versus later. Argues for the simple option when it suffices. |

At SDE-3 the interviewer also listens for **scope control** and **sequencing**: what ships in month one, and what you will deliberately not build. [Inference]

## Common mistakes {lvl=2 id=s-mistakes label="SDE-1"}

- Starting to draw without asking a single question.
- Naming technologies instead of reasons ("Kafka, Cassandra, Redis") with no requirement attached.
- Skipping the estimates, then adding sharding to a system that serves 12 writes a second.
- Spending thirty minutes on one component and never reaching trade-offs.
- Staying silent while thinking. Interviewers can only credit what they hear.
- Treating the first design as final. Strong candidates say what they would change as load grows.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A design round tests how you think under uncertainty; there is no single right answer. {lvl=1}
2. Seven steps: clarify, estimate, API, data model, diagram, deep dives, bottlenecks and trade-offs. {lvl=2}
3. Requirements are functional (what) and non-functional (how well: scale, speed, uptime, consistency). {lvl=2}
4. Start with the boring design; every extra box must be justified by a number or requirement. {lvl=3}
5. Deep dive where the numbers say it hurts: load, what breaks first, two fixes, one choice. {lvl=3}
6. Say trade-offs as "X gives A, costs B, accepted because C". {lvl=3}
7. SDE-3 adds ambiguity, failure, cost, migration, operations and scope control. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Keep time. Write the minute budget at the corner of the board and glance at it. {lvl=1}
- Always say what you are leaving out of scope, and why. {lvl=2}
- Do not shard, cache or add queues "because big companies do". Tie each to a number. {lvl=3}
- If the interviewer changes a requirement, re-do the affected estimate aloud; do not defend the old design. {lvl=3}
- Name what would make you revisit a decision ("above about 5,000 writes a second we would partition"). {lvl=4}
:::
