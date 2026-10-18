---
title: Message queues and events
summary: How an app can say "order placed" in a blink while the slow work happens later, and why a queue also survives a sudden rush.
ncert: []
up_to: SDE-3
builds_on: [Stacks and queues, Load balancing, Caching]
notes_prompt: Explain to a friend why a restaurant takes your order on a slip of paper instead of the waiter standing in the kitchen until your food is ready.
margin:
  - kind: history
    title: History
    text: 'Message-oriented middleware goes back to banks and stock exchanges in the 1980s and 1990s. Open protocols such as AMQP, and later log-based systems such as Apache Kafka (open-sourced around 2011), made queues a standard part of web back ends. [Unverified: exact years]'
  - kind: tip
    title: Interview favourite
    text: 'Whenever a design has a slow or unreliable step (sending email, resizing images, charging a card, calling a partner), ask "can this go on a queue?" Then be ready to say what happens when a message is delivered twice.'
  - kind: olympiad
    title: Design link
    text: 'A queue is the same idea as a buffer in an operating system or a pipe in the shell. At scale, the log inside Kafka doubles as a database of "everything that happened", which is the root of event sourcing.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 11 Stream Processing: message brokers, log-based messaging [Unverified chapter number]" }
  - { title: "G. Hohpe and B. Woolf, Enterprise Integration Patterns", ref: "Messaging channels, dead letter channel, idempotent receiver [Unverified]" }
cards:
  - { front: "What is a message queue for?", back: "It sits between a producer and a consumer so they need not run at the same speed or at the same time. The producer drops a message and moves on; consumers take it when ready." }
  - { front: "Work queue vs pub/sub?", back: "Work queue: each message goes to exactly one of many workers (share the load). Pub/sub: each message goes to every subscriber (everyone hears the news)." }
  - { front: "What does at-least-once delivery mean, and what must the consumer do about it?", back: "A message is never lost but may arrive more than once, since an unacknowledged message is resent. The consumer must be idempotent: handling it twice must equal handling it once." }
  - { front: "What is a dead-letter queue?", back: "A side queue where a message goes after failing too many times, so one poisonous message does not block the rest and a human can inspect it later." }
  - { front: "How does a queue absorb a spike?", back: "Arrivals above the workers' speed pile up as backlog instead of crashing the service. Backlog = (arrival rate - service rate) x duration, and it drains once arrivals drop below capacity." }
  - { front: "Kafka vs RabbitMQ in one line?", back: "RabbitMQ is a smart broker that routes messages and deletes them once acknowledged; Kafka is an append-only log that keeps messages for days so many readers can replay them." }
core:
  idea: 'A message queue lets a producer hand work to a consumer without waiting for it: the queue stores the message until a consumer takes it. This decouples the two in time and speed, absorbs spikes as backlog, and lets you add workers to drain it faster, at the cost of delays and of duplicate or out-of-order delivery that the consumer must tolerate.'
  formulas:
    - tex: '\text{backlog} = (\lambda - \mu)\,t'
      label: 'Messages piled up after t seconds of overload'
    - tex: 't_{\text{drain}} = \dfrac{B}{\mu - \lambda_{0}}'
      label: 'Time to clear backlog B once normal load returns'
  conditions:
    - 'The work can be done later (the user does not need the result before the reply)'
    - 'Over the long run the workers are faster than the arrivals, so the backlog drains (mu above lambda)'
    - 'Consumers are idempotent, so a repeated delivery does no harm'
    - 'Order matters only within a key (one user, one order), not across the whole queue'
  sign: 'A queue never creates capacity. If arrivals stay above the service rate forever, the backlog grows without limit and only hides the problem for a while.'
outcomes:
  - 'Explain what a queue decouples and why that makes systems tougher'
  - 'Choose between a work queue and publish/subscribe for a given job'
  - 'Compute how big a backlog gets in a spike and how long it takes to drain'
  - 'Design a consumer that survives duplicates using an idempotency key'
  - 'Explain ordering, retries and dead-letter queues, and compare Kafka with RabbitMQ'
opener:
  story: |
    You order biryani on Swiggy during the IPL final. You tap **Place order**, and half a second later the app says *Order placed!* with a happy tick.

    But look at what has to happen: the restaurant must be told, a delivery partner must be found, your card must be charged, an invoice must be emailed, an SMS sent. Some of these take seconds, and one of them (the SMS provider) is having a bad night. Yet the tick appeared in half a second, and ten times more people than usual are tapping at the same moment.

    The app clearly did not do all that work before answering you. So what did it do instead, and where did the rest of the work go? [Inference: Swiggy's internals are not public; this is how such an app is typically built.]
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Many phones drop order slips into one tray, and a few workers take slips from the other end"><g style="fill:none;stroke:var(--ink);stroke-width:1.6"><rect x="12" y="40" width="40" height="64" rx="7"/><rect x="12" y="120" width="40" height="64" rx="7"/></g><text x="12" y="30" style="font-size:10px;fill:var(--muted)">Orders arrive</text><path d="M54 72 L108 108 M54 152 L108 128" style="fill:none;stroke:var(--c);stroke-width:1.6"/><rect x="108" y="92" width="110" height="52" rx="6" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.6"/><g style="fill:var(--c)"><rect x="116" y="102" width="14" height="32"/><rect x="134" y="102" width="14" height="32"/><rect x="152" y="102" width="14" height="32"/><rect x="170" y="102" width="14" height="32"/></g><text x="118" y="160" style="font-size:10px;fill:var(--ink)">the queue</text><text x="118" y="174" style="font-size:10px;fill:var(--muted)">slips wait here</text><path d="M220 118 L262 76 M220 118 L262 118 M220 118 L262 160" style="fill:none;stroke:var(--c);stroke-width:1.6"/><g style="fill:none;stroke:var(--ink);stroke-width:1.6"><circle cx="276" cy="72" r="10"/><circle cx="276" cy="118" r="10"/><circle cx="276" cy="160" r="10"/></g><text x="238" y="200" style="font-size:10px;fill:var(--muted)">workers take</text><text x="238" y="214" style="font-size:10px;fill:var(--muted)">one slip each</text></svg>'
symbols:
  - s: '\lambda'
    means: 'arrival rate: messages arriving per second (messages/s)'
  - s: '\mu'
    means: 'service rate: messages the workers can finish per second, all workers together (messages/s)'
  - s: 't'
    means: 'how long the overload lasts (seconds, s)'
  - s: 'B'
    means: 'backlog: messages waiting in the queue (count)'
  - s: '\lambda_0'
    means: 'normal arrival rate after the spike is over (messages/s)'
  - s: 'DLQ'
    means: 'dead-letter queue: where messages go after failing too many times'
life:
  - 'Swiggy, Zomato and Uber hand "find a delivery partner" or "find a driver" to background workers while the app shows you a tick.'
  - 'A UPI payment gets a quick "processing" screen, and the bank confirmations and SMS arrive moments later from queued work.'
  - 'IRCTC-style booking rushes: a front desk takes your request quickly while seat allocation runs behind it at its own pace. [Inference]'
  - 'Email and notification systems: your newsletter to a million people is a million queued messages, sent as fast as the provider allows.'
  - 'A restaurant kitchen: order slips hang on a rail, and each cook takes the next one.'
models:
  - name: 'Decouple by time'
    text: 'Two parties who must act at the same moment are fragile. A letterbox, a voicemail or a to-do list lets one side act now and the other later. When two things keep breaking together, put a buffer between them.'
  - name: 'Absorb the spike'
    text: 'A reservoir does not make rain, it evens out supply. Savings, a spare tyre and a queue all protect you from bursts, but only if the average inflow is below the average outflow.'
  - name: 'Assume it will happen twice'
    text: 'If a message can be lost, you resend it, and then it can arrive twice. In any unreliable system (post, payments, group chats), design so that doing the same thing twice is safe.'
links:
  - leaf: 'cs/stacks-and-queues'
    name: 'Stacks and queues'
    same: 'First in, first out: the message that arrived earliest is handled earliest.'
    differs: 'A queue in a program lives in one machine''s memory and vanishes if it crashes. A message queue is its own service, stored on disk and shared by many programs on many machines.'
  - leaf: 'cs/load-balancing'
    name: 'Load balancing'
    same: 'Both spread work over several machines so that no single one is overwhelmed.'
    differs: 'A load balancer pushes each request to a server right now and the caller waits for the reply. A queue holds the work until a worker pulls it, so nobody waits.'
  - leaf: 'mat/fermi-estimation'
    name: 'Fermi estimation'
    same: 'Sizing a backlog and the number of workers is a rough multiplication: rate times time, then divide by the speed of one worker.'
    differs: 'In system design the rates are measured from real traffic, and the estimate decides how many machines to run.'
next:
  q: 'Once you split your app into pieces that talk through queues and network calls, each piece becomes its own small program owned by its own team. When is that a good idea, and what new ways does it have to fail?'
  leaf: 'cs/microservices'
  name: 'Monoliths and microservices'
---

:::hook
q: The final starts, and orders jump from 2,000 to 5,000 a second. Your workers can finish 2,000 a second. What is the best way to keep the app responsive?
options: ["Make the user wait until their order is fully processed", "Accept each order onto a queue at once and let workers drain it, adding workers if the backlog grows", "Reject every order above 2,000 a second"]
answer: 1
right: Right. Accepting is cheap and fast; the real work runs behind the queue. The backlog grows during the rush and drains afterwards, and extra workers drain it sooner. (Real apps combine this with limits, so the queue cannot grow without bound.)
wrong: Making users wait turns a rush into timeouts, and rejecting orders loses money. The trick is to separate "we got your order" from "we finished the work".
:::

## The problem: waiting for slow work {lvl=1 id=s-problem label="Foundations"}

Picture a small restaurant where the waiter takes your order, walks into the kitchen and **stands there until your food is ready**, then brings it. While he waits, nobody else is served. If three tables arrive together, two of them sit idle.

Real restaurants do something smarter. The waiter writes a slip, clips it to the rail and goes back to the floor. The cooks take slips from the rail when they are free. The waiter and the cooks never need to be ready at the same moment, and a rush simply makes the rail fuller for a while.

That rail is a **message queue**. The waiter is the **producer** (whoever creates work). The cook is the **consumer** (whoever does it). Each slip is a **message**. The queue is a separate service that keeps messages safely until a consumer takes one.

:::figure caption="Producers drop messages on the queue and return at once. Workers pull messages when they have room. Neither side waits for the other."
<svg viewBox="0 0 320 130" role="img" aria-label="Three producers feed a queue of messages and two consumers take from it">
<g style="stroke:var(--ink);stroke-width:1.2;fill:none"><rect x="8" y="14" width="46" height="24" rx="4"/><rect x="8" y="52" width="46" height="24" rx="4"/><rect x="8" y="90" width="46" height="24" rx="4"/></g>
<g style="font-size:10px;fill:var(--ink)"><text x="14" y="30">App A</text><text x="14" y="68">App B</text><text x="14" y="106">App C</text></g>
<path d="M56 26 L110 60 M56 64 L110 64 M56 102 L110 68" class="faint" style="stroke:var(--muted);fill:none"/>
<rect x="110" y="48" width="108" height="32" rx="4" style="fill:none;stroke:var(--mat);stroke-width:2"/>
<g style="fill:var(--mat)"><rect x="118" y="54" width="12" height="20"/><rect x="134" y="54" width="12" height="20"/><rect x="150" y="54" width="12" height="20"/><rect x="166" y="54" width="12" height="20"/></g>
<text x="130" y="98" style="font-size:10px;fill:var(--muted)">messages wait</text>
<path d="M220 64 L262 36 M220 64 L262 92" class="faint" style="stroke:var(--muted);fill:none"/>
<g style="stroke:var(--ink);stroke-width:1.2;fill:none"><rect x="262" y="22" width="50" height="26" rx="4"/><rect x="262" y="78" width="50" height="26" rx="4"/></g>
<g style="font-size:10px;fill:var(--ink)"><text x="268" y="39">Worker 1</text><text x="268" y="95">Worker 2</text></g>
</svg>
:::

Three gifts come with this design:

- **Decoupling.** If the SMS service is down, order-taking still works. Messages wait until it returns.
- **Buffering.** A spike makes the queue longer, not the service slower.
- **Scaling.** Add more consumers and the same queue drains faster.

:::qc lvl=1
q: Which of these is NOT a benefit of putting a queue between two services?
options: ["The producer can carry on if the consumer is briefly down", "A spike in arrivals is absorbed as a longer queue", "The work is always finished instantly"]
answer: 2
right: Right. A queue makes the work asynchronous, so it finishes later, never sooner.
wrong: Think about what happens to a message while it waits. Waiting takes time, so the work completes later.
:::

## Spikes, backlog and how long to drain {lvl=1 id=s-backlog label="Foundations"}

Let the producers send **$\lambda$** messages a second and let the workers together finish **$\mu$** a second. Take $\lambda = 5{,}000$ and $\mu = 2{,}000$ for one minute. Every second, 3,000 messages are left over. After 60 seconds that is 180,000 waiting.

$$\text{backlog} = (\lambda - \mu)\,t$$

Read it as: the leftover per second, times the number of seconds. After the final's rush, say arrivals fall to a normal $\lambda_0 = 1{,}000$ a second. The workers now clear $2{,}000 - 1{,}000 = 1{,}000$ extra messages a second, so 180,000 messages take 180 seconds to drain. Three minutes of delay after one minute of spike.

The user feels this as "my SMS came three minutes late", not as an error. That is a good trade for non-urgent work, and a bad one for work the user is staring at (a payment confirmation). Choose what goes on a queue by how long the user can wait.

## Two shapes: work queue and pub/sub {lvl=2 id=s-shapes label="SDE-1"}

There are two common ways to hand out messages.

- **Work queue** (also called a task queue). Many workers read from one queue and each message goes to **exactly one** of them. Use it to share a load: resize this image, send this email.
- **Publish/subscribe** (pub/sub). A producer publishes to a **topic**, and every subscriber gets its own copy. Use it for news that several parts of the system care about: "order 812 was paid" matters to billing, to the kitchen and to analytics.

Often both appear together: a topic fans a message out to three queues, and each queue is a work queue for its own team of workers.

A worker should tell the queue when it is done. This is an **acknowledgement** (ack). Until the ack arrives, the queue keeps the message and hides it from other workers for a while. A tiny sketch of a worker:

```python
def worker(queue):
    while True:
        msg = queue.get()          # waits for a message
        try:
            handle(msg.body)       # do the real work
            queue.ack(msg)         # tell the queue we are done
        except Exception:
            queue.nack(msg)        # put it back for a retry
```

(`queue` here stands for any broker's client library; the idea is the same everywhere.)

:::qc lvl=2
q: An order-paid event must reach billing, the kitchen and analytics, each doing different work. Which shape fits?
options: ["One work queue shared by all three", "Publish/subscribe: each team gets its own copy", "Three producers, no queue"]
answer: 1
right: Right. In a work queue a message goes to only one worker, so two of the three teams would miss it. Pub/sub copies it to every subscriber.
wrong: In a work queue each message is taken by only one consumer. Who would the other two teams hear it from?
:::

## At-least-once delivery and idempotency {lvl=3 id=s-delivery label="SDE-2"}

What if the worker finishes the job but crashes before sending the ack? The queue sees no ack, assumes the work was lost and delivers the message again. So a safe queue promises **at-least-once delivery**: never lost, but possibly **repeated**. The network can fail at any point, so no one can tell the difference between "the worker never got it" and "the worker did it but the reply was lost".

(The other choices are **at-most-once**, which may lose messages, and **exactly-once**, which is only possible within narrow limits. In practice you build exactly-once effects out of at-least-once delivery plus a safe consumer.)

The fix is to make the consumer **idempotent**: doing it twice has the same result as doing it once. "Set the balance to 500" is idempotent; "add 100 to the balance" is not. A common recipe is an **idempotency key**, a unique id on every message, and a record of ids already handled:

```python
def handle_payment(msg):
    if db.exists("done", msg.id):      # seen before?
        return                         # then do nothing
    with db.transaction():
        charge_card(msg.user, msg.amount)
        db.insert("done", msg.id)      # same transaction as the charge
```

Saving the id **in the same transaction** as the effect matters: if they could be saved separately, a crash between them would bring the double charge back. (See the transactions lesson.)

:::qc lvl=3
q: A consumer processes "send welcome email" messages and a crash causes one to be redelivered. What is the simplest safe design?
options: ["Hope crashes are rare", "Record each message id once the email is sent and skip ids already recorded", "Switch to at-most-once and accept lost emails"]
answer: 1
right: Right. An idempotency key makes the repeat harmless. (Even then the gap between sending the email and recording the id leaves a rare double send, which is acceptable for emails but not for money.)
wrong: At-least-once delivery means repeats are normal, not rare. The consumer, not the queue, has to make them harmless.
:::

## Ordering, retries and dead letters {lvl=3 id=s-order label="SDE-2"}

**Ordering.** One queue read by one worker keeps order. With many workers the order is lost: worker 2 may finish message 5 before worker 1 finishes message 4. Usually you do not need global order, only order **per key**: all events of one order, one user or one account. The standard fix is to route by key (hash the key, as in the partitioning lesson) so that every message for "order 812" always goes to the same worker or partition.

**Retries.** A failure may be temporary (a database blip) or permanent (a malformed message). Retry with **exponential backoff**: wait 1 s, then 2 s, 4 s, 8 s, so that a struggling service is not hammered. Add a little randomness (**jitter**) so that thousands of consumers do not all retry at the same instant.

**Dead-letter queue (DLQ).** After a set number of failures, move the message to a side queue. A **poison message** that always crashes its worker would otherwise be retried forever and block everything behind it. The DLQ keeps it for a person to inspect and, once the bug is fixed, replay. Watch the DLQ size: it should be near zero.

**Backpressure.** An unbounded queue is a hidden risk: memory fills, delays grow to hours, and users give up on work that is still queued. Set a maximum length or maximum age, and when it is reached either slow the producers down or drop the least important messages.

:::qc lvl=3
q: Which message should land in the dead-letter queue?
options: ["One that failed once because the database was busy", "One that has failed 5 times in a row with a parse error", "Every message older than a minute"]
answer: 1
right: Right. Repeated failure with the same error suggests the message itself is bad, so park it for a human instead of blocking everyone.
wrong: A single failure may be temporary and deserves a retry. Dead letters are for messages that keep failing.
:::

## Kafka vs RabbitMQ: queue or log {lvl=4 id=s-brokers label="SDE-3"}

Two designs dominate, and the difference is a good interview topic.

| | RabbitMQ (a traditional broker) | Apache Kafka (a distributed log) |
|---|---|---|
| Mental picture | A post office that routes letters to mailboxes | A ledger that everyone reads at their own page |
| After a message is consumed | Deleted once acknowledged | Stays for a set time (days or weeks); reading does not remove it |
| Who tracks progress | The broker tracks acks per message | Each consumer group tracks its own offset (its page number) |
| Ordering | Per queue (lost with competing workers) | Per partition, which you choose with a key |
| Replay old messages | Not normally possible | Easy: reset the offset |
| Routing | Rich: exchanges, topics, headers | Simple: topics and partitions |
| Throughput | Good; thousands to tens of thousands a second per node | Very high; designed for hundreds of thousands a second per cluster and more [Unverified: figures depend on hardware] |
| Best for | Task queues, per-message routing, retries with delays | Event streams, analytics, many independent readers, rebuilding state |

The deepest idea: a **log** turns "work to hand out" into "history to keep". Many readers can follow the same log at different speeds, and a new reader can start from the beginning. This is how streams feed search indexes, caches and analytics from one source of truth (see the batch-and-stream lesson).

Two patterns to know at this level:

- **Outbox pattern.** To change the database and publish an event without losing either, write the event into an "outbox" table in the **same transaction** as the change, and have a separate process publish rows from it. This avoids the trap of "saved to the database, crashed before publishing".
- **Consumer lag.** The gap between the newest message and a consumer's position. It is the number to put on a dashboard and an alarm: rising lag means the consumers are slower than the arrivals ($\mu < \lambda$).

Honest limits: **exactly-once** is a marketing phrase unless it names its boundary. Some systems offer it inside one system (for example, within Kafka's own read-process-write cycle), but the moment the effect leaves (an email, a card charge) you are back to at-least-once plus idempotency. [Unverified: product details change between versions.]

:::qc lvl=4
q: You must rebuild a search index from three months of past events and also feed live events to a second team. Which fits better?
options: ["A queue that deletes messages after they are acknowledged", "A log that retains messages and lets each reader keep its own position", "Direct calls between services"]
answer: 1
right: Right. Replay and independent readers are exactly what a retained log offers.
wrong: Once a message is deleted it cannot be replayed. Which design keeps history and lets readers move independently?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A queue lets the producer hand work off and return at once, decoupling producers and consumers in time and speed. {lvl=1}
2. A spike becomes backlog, (arrival rate minus service rate) times time, and it drains once arrivals fall below capacity. {lvl=1}
3. Work queue: each message goes to one worker. Pub/sub: each message goes to every subscriber. {lvl=2}
4. Delivery is at-least-once, so messages can repeat; consumers must be idempotent, for example with an idempotency key. {lvl=3}
5. Keep order per key, retry with backoff and jitter, and park repeatedly failing messages in a dead-letter queue. {lvl=3}
6. A broker such as RabbitMQ deletes after acknowledgement; a log such as Kafka retains messages so readers can replay. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A queue does not add capacity. If arrivals exceed the service rate for long enough, the backlog grows without limit. {lvl=1}
- Do not put work the user is waiting on behind a long queue; a payment result needs a fast path. {lvl=2}
- Assuming exactly-once delivery leads to double charges. Assume at-least-once and make the consumer idempotent. {lvl=3}
- Retrying without backoff and jitter can turn a small outage into a self-inflicted flood. {lvl=3}
- Global ordering across many workers is expensive; ask whether per-key ordering is enough. {lvl=3}
- An ignored dead-letter queue is a silent data-loss bin: alert on its size. {lvl=4}
:::
