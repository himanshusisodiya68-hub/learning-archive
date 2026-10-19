---
title: Monoliths and microservices
summary: Why many successful companies start with one big program, when splitting it into small services pays off, and the new ways a split system can fail.
ncert: []
up_to: SDE-3
builds_on: [Message queues and events, Load balancing, APIs (REST and beyond), Design principles and patterns]
notes_prompt: Explain to a friend why splitting a company into many small teams helps with speed but adds meetings, and how that compares with splitting a program into many small services.
margin:
  - kind: history
    title: History
    text: 'In 1967 Melvin Conway observed that organisations design systems that mirror their own communication structure, now called Conway''s law. Amazon and Netflix are often cited as early adopters of many small services in the 2000s and early 2010s. [Unverified: details and dates]'
  - kind: tip
    title: Interview favourite
    text: 'When asked "monolith or microservices?", the strong answer is "it depends on team size and pain". Start with a well-organised monolith, split a piece only when a clear problem (scaling, deployment, ownership) demands it.'
  - kind: olympiad
    title: Design link
    text: 'Every extra network call multiplies the ways a request can fail. Availability of a chain is the product of the parts, so ten services at 99.9% each give about 99.0% together.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 4 Encoding and Evolution (services and RPC); Ch. 8 The Trouble with Distributed Systems [Unverified chapter numbers]" }
  - { title: "S. Newman, Building Microservices", ref: "service boundaries, resilience, migration [Unverified]" }
  - { title: "M. Nygard, Release It!", ref: "stability patterns: timeouts, circuit breakers, bulkheads [Unverified]" }
cards:
  - { front: "Monolith vs microservices?", back: "A monolith is one program deployed as a unit. Microservices are many small programs, each owning one job and its data, deployed independently and talking over the network." }
  - { front: "Why 'monolith first'?", back: "Early on you do not know where the real boundaries are, a small team gains little from splitting, and every split adds network failures and operational work. Split when a measured pain appears." }
  - { front: "What makes a good service boundary?", back: "It follows one business capability (payments, search, inventory), owns its own data, and changes for its own reasons, so most changes touch one service only." }
  - { front: "Three defences against a failing dependency?", back: "A timeout (do not wait forever), retries with backoff and jitter (for brief faults), and a circuit breaker (stop calling a service that is clearly down, then probe again)." }
  - { front: "Availability of a chain of n services each with availability A?", back: "A to the power n. Ten services at 99.9% give 0.999^10, about 99.0%, which is roughly 3.6 days of downtime a year instead of 8.8 hours." }
  - { front: "What does distributed tracing do?", back: "It gives each request an id that follows it through every service, and records how long each hop took, so you can see where a slow or failed request spent its time." }
core:
  idea: 'Splitting one program into small services buys independent deployment, scaling and ownership, and costs you the network: calls become slow, can fail halfway and can be repeated, and data no longer sits in one transaction. Split only where the benefit clearly beats that cost, along business boundaries, and defend every call with timeouts, retries and circuit breakers.'
  formulas:
    - tex: 'A_{\text{chain}} = A_1 \times A_2 \times \cdots \times A_n'
      label: 'Availability of services that must all work for one request'
    - tex: 'P(\text{at least one slow}) = 1 - (1-p)^n'
      label: 'Tail latency: n calls, each slow with probability p'
  conditions:
    - 'Teams are large enough that one shared codebase and release cause waiting and conflicts'
    - 'Boundaries follow business capabilities, and each service owns its data'
    - 'The organisation can run many deployments, monitoring and on-call'
    - 'Every call to another service has a timeout and a plan for failure'
  sign: 'The commonest mistake is splitting too early or along technical layers (a "database service", a "validation service"). That produces a distributed monolith: all the pain of the network, none of the independence.'
outcomes:
  - 'Describe the trade-off between a monolith and microservices and argue for monolith-first'
  - 'Pick service boundaries by business capability and data ownership'
  - 'Explain why network calls fail differently from function calls'
  - 'Apply timeouts, retries with backoff, and circuit breakers, and compute chain availability'
  - 'Explain tracing, sagas and the real cost of running many services'
opener:
  story: |
    A shopping app is a single program. One day a developer on the "product reviews" team ships a small change to how review photos are resized. It has a memory leak. An hour later the whole app is down, including checkout, because everything runs inside one process.

    The fix sounds obvious: put reviews, checkout, search and payments into **separate programs**, so a leak in one cannot sink the others. Many large companies did exactly that.

    But ask the people who run those systems and a surprising number will say: *"Don't do it until you have to."* So when is it a brilliant move, and when is it an expensive mistake?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="One big box splits into several small boxes joined by arrows"><rect x="16" y="70" width="104" height="100" rx="8" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.8"/><g style="font-size:10px;fill:var(--ink)"><text x="30" y="96">checkout</text><text x="30" y="116">search</text><text x="30" y="136">reviews</text><text x="30" y="156">payments</text></g><text x="30" y="188" style="font-size:10px;fill:var(--muted)">one program</text><path d="M126 120 L170 120" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M164 114 L172 120 L164 126" style="fill:none;stroke:var(--c);stroke-width:2"/><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.6"><rect x="184" y="34" width="50" height="34" rx="6"/><rect x="250" y="34" width="50" height="34" rx="6"/><rect x="184" y="150" width="50" height="34" rx="6"/><rect x="250" y="150" width="50" height="34" rx="6"/></g><g style="font-size:9px;fill:var(--ink)"><text x="190" y="55">checkout</text><text x="260" y="55">search</text><text x="190" y="171">reviews</text><text x="254" y="171">payments</text></g><path d="M209 70 L209 148 M275 70 L275 148 M236 51 L248 51 M236 167 L248 167 M234 62 L254 158" style="fill:none;stroke:var(--muted);stroke-width:1.2;stroke-dasharray:3 3"/><text x="184" y="208" style="font-size:10px;fill:var(--muted)">many programs, many calls</text></svg>'
symbols:
  - s: 'A'
    means: 'availability: the fraction of time a service works, for example 0.999 for 99.9% (no unit)'
  - s: 'n'
    means: 'number of services or calls in the chain (count)'
  - s: 'p'
    means: 'probability that one call is slow or fails (no unit, between 0 and 1)'
  - s: 'A_{\text{chain}}'
    means: 'availability of the whole chain when every service must work (no unit)'
  - s: 'RPC'
    means: 'remote procedure call: calling a function that runs on another machine over the network'
life:
  - 'Online shopping apps (Flipkart, Amazon) keep search, cart, payments and recommendations as separate parts that different teams own. [Inference]'
  - 'Streaming services run hundreds of small services, so a failure in "recommendations" can be handled by showing a generic list instead of failing the whole page. [Inference]'
  - 'UPI apps call bank services over the network, and a slow bank must not freeze the whole app, so every call has a timeout.'
  - 'A food-court: separate stalls own their own cooking and cash, so one stall closing does not close the court. But finding a combo across stalls needs more walking and talking.'
models:
  - name: 'Every boundary has a toll'
    text: 'Dividing anything (a company, a family budget, a program) into parts creates coordination costs at each seam. Divide only when the savings inside the parts beat the tolls between them.'
  - name: 'Chains are weaker than their links'
    text: 'If every step must succeed, the reliability of the whole is the product of the parts. A ten-step process at 99% per step succeeds only about 90% of the time: this is why shorter supply chains and fewer hand-offs are more dependable.'
  - name: 'Structure follows people'
    text: 'Conway''s law: a system tends to copy the communication lines of the organisation that builds it. If you want a different structure, you may first need a different team layout.'
links:
  - leaf: 'cs/message-queues'
    name: 'Message queues and events'
    same: 'Both loosen the coupling between parts so that they can fail, scale and change separately.'
    differs: 'Queues are one tool for talking between services without waiting. Microservices are the larger decision to split the program at all.'
  - leaf: 'cs/design-principles-and-patterns'
    name: 'Design principles and patterns'
    same: 'Single responsibility and low coupling at the level of classes become single responsibility and low coupling at the level of whole services.'
    differs: 'Inside a program, calls are cheap and reliable and refactoring is easy. Between services every call crosses a network and changing an interface needs coordination.'
  - leaf: 'cs/observability'
    name: 'Logs, metrics and tracing'
    same: 'Both are about seeing what a running system is actually doing.'
    differs: 'With one process you can read one log. With many services you need request ids and tracing to follow a single request across all of them.'
next:
  q: 'Suppose you must design a real small service from scratch, one that turns a long web address into a short link and redirects millions of clicks a day. What would you decide first, and what would each choice cost?'
  leaf: 'cs/design-url-shortener'
  name: 'Designing a URL shortener'
---

:::hook
q: A five-person startup is about to build its first product. Which architecture is usually the best starting point?
options: ["A well-organised monolith, split later if pain appears", "Twenty microservices from day one, so it scales when it becomes famous", "One microservice per developer"]
answer: 0
right: Right. With five people and an unproven product, a single deployable is faster to build, test and debug. Splitting costs real effort and you do not yet know the right boundaries. (Many well-known companies reportedly began as monoliths. [Unverified])
wrong: Microservices solve problems of size: many teams, very different scaling needs. A tiny team has none of those yet but would pay all of the costs.
:::

## One program or many {lvl=1 id=s-two label="Foundations"}

A **monolith** is one program that holds everything: login, search, cart, payments. You build it, test it and ship it as one unit. A **microservice** design splits it into many small programs, each handling one job (payments, say), each running on its own machines and each talking to the others over the network.

Think of a single kitchen versus a food court. In the single kitchen, the chef grabs salt from the next shelf in a second. In a food court, every stall has its own cooks and cash register, so a fire at one stall does not close the rest; but now getting ingredients from another stall means walking out and asking, and sometimes the other stall is closed.

:::figure caption="In a monolith a call is a jump inside one program. Between services it is a trip over the network, which can be slow, lost or answered twice."
<svg viewBox="0 0 320 140" role="img" aria-label="Left: one box with arrows inside. Right: separate boxes with arrows crossing gaps">
<rect x="10" y="30" width="120" height="80" rx="6" style="fill:none;stroke:var(--mat);stroke-width:2"/>
<g style="stroke:var(--ink);stroke-width:1" class="pen"><rect x="20" y="44" width="40" height="20" rx="3" style="fill:none"/><rect x="78" y="44" width="40" height="20" rx="3" style="fill:none"/><rect x="48" y="78" width="40" height="20" rx="3" style="fill:none"/></g>
<path d="M60 54 L78 54 M98 64 L80 78 M62 78 L48 66" style="stroke:var(--ink);fill:none"/>
<text x="10" y="12" style="font-size:10px;fill:var(--muted)">Monolith: calls</text><text x="10" y="24" style="font-size:10px;fill:var(--muted)">inside one process</text>
<g style="stroke:var(--mat);stroke-width:2;fill:none"><rect x="170" y="44" width="40" height="26" rx="4"/><rect x="262" y="44" width="40" height="26" rx="4"/><rect x="216" y="92" width="40" height="26" rx="4"/></g>
<path d="M212 57 L260 57 M266 72 L250 92 M222 92 L196 72" style="stroke:var(--muted);stroke-dasharray:4 3;fill:none"/>
<text x="170" y="12" style="font-size:10px;fill:var(--muted)">Services: calls</text><text x="170" y="24" style="font-size:10px;fill:var(--muted)">over the network</text>
<text x="218" y="52" style="font-size:9px;fill:var(--ink)">slow?</text>
</svg>
:::

The big promise of microservices is **independence**: one team can change, deploy and scale its service without asking everyone else. The big price is that a function call becomes a **network call**.

:::qc lvl=1
q: Which is a genuine benefit of splitting a monolith into services?
options: ["Calls between parts become faster", "Teams can deploy and scale their own part independently", "There is less to monitor"]
answer: 1
right: Right. Independence is the point. Calls get slower, not faster, and there is more to monitor.
wrong: Replacing an in-process call with a network call makes it slower and less reliable. The benefit lies elsewhere.
:::

## Monolith first, and when to split {lvl=2 id=s-split label="SDE-1"}

A good **modular monolith** has clean internal parts with clear interfaces, all in one codebase and one deployment. It is easy to run (one thing), easy to debug (one log), and a database transaction can span the whole operation. For a small team, that is a huge speed advantage.

You do not know the right boundaries on day one. Wrong service boundaries are far harder to fix than wrong module boundaries, because moving code across a network interface means changing two programs and their deployment.

Real signs that it is time to split a piece out:

- **Team size and friction.** Dozens of developers wait on one release train or step on each other's changes.
- **Different scaling needs.** Search needs 50 machines, settings needs one. Scaling the whole monolith wastes money.
- **Different reliability needs.** Payments must stay up even when recommendations misbehave.
- **Different technology or release speed.** One part needs a different language or ships ten times a day.

A rule of thumb [Inference, not a law]: split because of a **measured pain**, not because of fashion. Extract one service, learn from it, then decide on the next.

## Service boundaries {lvl=2 id=s-bounds label="SDE-1"}

Where to cut? Cut along **business capabilities**: payments, inventory, search, notifications. Each such part:

- changes for its own reasons (a new payment method does not touch search);
- has its own **data**, which only it reads and writes directly;
- exposes a small, stable **API** to everyone else.

The rule about data is the strongest. If two services share one database, a change to a table can break both, and you have lost your independence. This is the "distributed monolith" trap. Cutting by **technical layer** ("a validation service", "a database service") is a classic bad boundary, since every feature needs all of them together.

A quick test: when a feature changes, how many services must change and deploy together? If the answer is usually "several", the boundaries are wrong.

:::qc lvl=2
q: Which split is most likely a good service boundary?
options: ["A 'validation service' that every other service calls for input checks", "A 'payments service' that owns payment records and exposes a payments API", "Two services that read and write the same order tables"]
answer: 1
right: Right. A business capability that owns its data can change on its own. The other two make services change and fail together.
wrong: Look for the option where one team could change its internals and deploy without asking anyone, and no other service reads its tables.
:::

## The network fails in new ways {lvl=3 id=s-network label="SDE-2"}

A function call either returns or raises an error. A network call has a third outcome: **you do not know**. The request may have been lost, or processed but its reply lost, or the other side may be slow. You waited, and silence tells you nothing.

Three habits tame this.

**1. Timeouts.** Never wait forever. Pick a limit based on how long the call normally takes (for example a little above its 99th-percentile time). Without it, one slow service ties up threads in every service waiting on it, and the slowness spreads backwards.

**2. Retries with backoff and jitter.** Brief faults often pass in a moment. But retries multiply load: if each of 3 layers tries a failing call up to 3 times, the bottom service sees up to $3 \times 3 \times 3 = 27$ attempts for one user click. Retry only **idempotent** calls (see the queues lesson), cap attempts, and add backoff and jitter.

**3. Circuit breakers.** If a service keeps failing, stop calling it for a while, fail fast and give it room to recover. After a pause let one trial call through; if it works, resume. Like the fuse in your home that trips instead of letting wires burn.

```python
class Breaker:
    def __init__(self, limit=5, pause=30):
        self.fails, self.limit, self.pause, self.opened = 0, limit, pause, None
    def call(self, fn):
        if self.opened and time.time() - self.opened < self.pause:
            raise RuntimeError("open: failing fast")   # do not even try
        try:
            result = fn()
            self.fails, self.opened = 0, None          # success: close it
            return result
        except Exception:
            self.fails += 1
            if self.fails >= self.limit:
                self.opened = time.time()              # trip the breaker
            raise
```

Also plan a **fallback**: if recommendations are down, show popular items instead of an error page.

The arithmetic of chains is sobering. If a request needs all $n$ services and each is up with availability $A$, the whole is up with $A^n$:

$$A_{\text{chain}} = A_1 \times A_2 \times \cdots \times A_n$$

Read it as: multiply the individual availabilities. With ten services at 99.9%, $0.999^{10} \approx 0.990$, so about 99.0%. That is roughly 3.6 days of downtime a year, against about 8.8 hours for a single 99.9% service. The same logic hits speed: if one call in 100 is slow ($p = 0.01$) and a page makes 20 such calls, the chance that **at least one** is slow is $1 - 0.99^{20} \approx 18\%$.

:::qc lvl=3
q: A page calls 5 services in series, each 99.9% available and each needed. Roughly what is the page's availability?
options: ["99.9%", "About 99.5%", "About 95%"]
answer: 1
right: Right. $0.999^5 \approx 0.995$. Each required service chips a little off the total.
wrong: Availabilities multiply when all must work. Compute 0.999 five times over.
:::

## Data and failures across services {lvl=4 id=s-data label="SDE-3"}

**One transaction no more.** When an order touches inventory, payments and shipping, each in its own database, no single transaction can cover them (see the transactions lesson). A common answer is a **saga**: a sequence of local steps, each with a **compensating action** that undoes it. If payment fails after stock was reserved, the saga runs "release the stock". Sagas give eventual consistency, so users may briefly see in-between states, and each step must be idempotent. Events through a queue often drive the steps (see the queues lesson).

**Distributed tracing.** One user click may touch twenty services. Give each request a **trace id** at the edge, pass it in every call and log line, and have each service record a **span** (start time and duration of its part). A tracing tool assembles the spans into a timeline, showing at a glance that, say, 600 ms of a 700 ms request went into one slow database call. Tools such as OpenTelemetry standardise this (see the observability lesson).

**The real cost.** Each service brings its own deployment pipeline, monitoring, on-call, security, versioning of its API and test environment. Plan for it honestly:

| Concern | Monolith | Microservices |
|---|---|---|
| Deploy | One unit, simple | Many pipelines, version compatibility between them |
| Debugging | One log, one stack trace | Trace across services, partial failures |
| Transactions | One database transaction | Sagas, eventual consistency |
| Scaling | Whole app together | Each part separately, so cheaper at large scale |
| Team autonomy | Shared release, merge conflicts | Own release, clear ownership |
| Testing | Easier end to end | Contract tests, many environments |
| Latency | Function calls in nanoseconds | Network calls in milliseconds each |

**Migrating safely.** The **strangler** approach: put a router in front of the monolith, build the new service for one capability, send that traffic to it, then remove the old code. Repeat only if the pain remains. Version APIs so old callers keep working, and prefer adding fields to changing them.

**Leading the decision.** At this level the question is not "which is better" but: which concrete pain are we solving, how will we measure it, and do we have the people to run what we create? A team of 8 running 30 services is usually a warning sign. [Inference: a heuristic, not a measured rule]

:::qc lvl=4
q: Payment succeeded but the shipping service then fails permanently. What does a saga do?
options: ["Roll back all databases in one distributed transaction", "Run a compensating action such as refunding the payment", "Ignore it and hope the customer does not notice"]
answer: 1
right: Right. A saga undoes completed steps with compensating actions, since a single transaction cannot span the services.
wrong: The services have separate databases, so a single rollback is not available. What can each step offer instead?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A monolith is one deployable program; microservices are many small ones that own their data and talk over the network. {lvl=1}
2. Start with a well-organised monolith; split when a measured pain (team friction, scaling, reliability) appears. {lvl=2}
3. Cut along business capabilities, each owning its data; avoid shared databases and technical-layer splits. {lvl=2}
4. A network call can fail in a way you cannot see: use timeouts, retries with backoff and jitter on idempotent calls, and circuit breakers. {lvl=3}
5. Chain availability is the product of the parts, so many required services lower the whole. {lvl=3}
6. Cross-service work needs sagas, and debugging needs trace ids; the operating cost of many services is real. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Splitting before you know the boundaries gives a distributed monolith: network pain without independence. {lvl=2}
- Two services sharing one database are not independent. {lvl=2}
- A call with no timeout can freeze a whole chain of services. {lvl=3}
- Retrying non-idempotent calls (like charging a card) creates duplicates; retrying at every layer multiplies load. {lvl=3}
- Interview answer: state the trade-off and the trigger for splitting, not a slogan. {lvl=2}
- Do not forget the cost side: pipelines, monitoring, on-call and tracing for every extra service. {lvl=4}
:::
