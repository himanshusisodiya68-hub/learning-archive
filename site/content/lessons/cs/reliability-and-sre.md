---
title: Reliability, failures and on-call
summary: 'Why every machine breaks, and how teams keep a service up anyway: measuring "up", spare parts, safe failure and learning from outages.'
ncert: []
up_to: SDE-3
builds_on: [Scaling up and scaling out, Replication, Caching, Designing a news feed]
notes_prompt: Explain to a friend why a service that is "up 99.9% of the time" can still be down for 43 minutes every month, and how a team decides how much risk it can take.
margin:
  - kind: history
    title: Where SRE came from
    text: 'Site reliability engineering is the name Google gave to running services as a software problem. Its book "Site Reliability Engineering" is free to read online. Netflix made "chaos engineering" famous by releasing a tool that kills servers at random, around 2011 [Unverified date].'
  - kind: tip
    title: Interview favourite
    text: 'When asked "how available should it be?", answer with a number and its cost: "99.9% allows 43 minutes a month; 99.99% allows 4, and costs far more." Interviewers like candidates who price the nines.'
  - kind: olympiad
    title: The surprising symmetry
    text: 'Unavailability is roughly MTTR divided by MTBF. Doubling the time between failures helps exactly as much as halving the time to repair, and repair speed is usually much cheaper to improve.'
books:
  - { title: "B. Beyer et al., Site Reliability Engineering (Google)", ref: "chapters on service level objectives, embracing risk, postmortem culture [Unverified chapter numbers]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliability, Scalability, Maintainability; Ch. 8 The Trouble with Distributed Systems [Unverified chapter numbers]" }
cards:
  - { front: "How much downtime per 30 days do 99%, 99.9%, 99.99% and 99.999% allow?", back: "About 7.2 hours, 43 minutes, 4.3 minutes and 26 seconds. Each extra nine divides the allowed downtime by 10." }
  - { front: "SLI, SLO and error budget?", back: "SLI: a measured quantity (share of requests that succeed). SLO: the target for it (99.9% over 30 days). Error budget: what the target allows to fail, 1 minus the SLO (0.1%)." }
  - { front: "Availability of parts in series, and in parallel?", back: "Series (all must work): multiply the availabilities. Parallel (any one will do): 1 minus the product of the failure chances. Spare copies raise availability only if they fail independently." }
  - { front: "Why add random jitter to retries?", back: "Without it, all clients that failed together retry together and hit the recovering service in waves. Random waits spread them out." }
  - { front: "What is a blameless postmortem?", back: "A written review of an outage that asks how the system and process allowed the mistake, not who made it. People who fear blame hide facts, and the same outage repeats." }
  - { front: "What does a chaos experiment do?", back: "Deliberately breaks something small (kills a server, adds delay) in a controlled way, to check that the system copes, before real failure tests it." }
core:
  idea: 'Everything fails, so reliability is chosen, measured and paid for. Decide how much failure users can accept (an SLO), count the failures you have actually had against that budget, add independent spares and safe fallbacks, and learn from each incident without blame.'
  formulas:
    - tex: 'A = \dfrac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}'
      label: 'Availability from time between failures and time to repair'
    - tex: 'A_{\text{series}} = \prod_i A_i, \qquad A_{\text{parallel}} = 1 - \prod_i (1 - A_i)'
      label: 'Parts all needed (series) or any one enough (parallel)'
    - tex: '\text{error budget} = 1 - \text{SLO}'
      label: 'The share of requests (or time) allowed to fail'
  conditions:
    - 'Failures of spare copies are independent (separate power, racks, software versions, and ideally data centres)'
    - 'The measured SLI reflects what users experience, not what a server thinks about itself'
    - 'Failover and fallbacks are exercised regularly, not only built'
    - 'The team has a rule for what happens when the budget is spent'
  sign: 'The commonest mistake is trusting the parallel formula for spares that share a cause of failure: two replicas running the same buggy release fail together.'
outcomes:
  - 'Convert nines of availability into minutes of downtime, and back'
  - 'Define an SLI, an SLO and an error budget, and use the budget to make decisions'
  - 'Compute the availability of a system built from parts in series and in parallel'
  - 'Design timeouts, retries with backoff and jitter, and graceful degradation'
  - 'Run an incident and write a blameless postmortem; plan a chaos experiment'
opener:
  story: |
    You are at a tea stall in Pune, phone in hand, and the UPI payment fails. "Server down," says the stall owner, who has heard this many times. You wait ten seconds and try again. It works. Nobody remembers it an hour later.

    But behind that ten seconds there is a team that was awake at 3 a.m., a graph that went red, and a number somebody argued about for a week: how often is this allowed to happen? Zero is not on the menu. Zero would cost more than the whole company is worth.

    So how do you decide how much failure is acceptable, and how do you build a system that stays up while its own parts keep breaking?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A row of five boxes with one crossed out, and a spare box taking over beside it"><g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c);stroke-width:2"><rect x="14" y="40" width="50" height="40" rx="6"/><rect x="78" y="40" width="50" height="40" rx="6"/><rect x="206" y="40" width="50" height="40" rx="6"/><rect x="270" y="40" width="40" height="40" rx="6"/></g><rect x="142" y="40" width="50" height="40" rx="6" style="fill:color-mix(in srgb,var(--bad) 15%,var(--surface));stroke:var(--bad);stroke-width:2"/><path d="M148 46 L186 74 M186 46 L148 74" style="stroke:var(--bad);stroke-width:2.5;fill:none"/><rect x="142" y="120" width="50" height="40" rx="6" style="fill:color-mix(in srgb,var(--ok) 15%,var(--surface));stroke:var(--ok);stroke-width:2;stroke-dasharray:5 3"/><text x="150" y="144" style="font-size:10px;fill:var(--ink)">spare</text><path d="M167 82 V118" style="stroke:var(--ok);stroke-width:2;fill:none"/><text x="14" y="104" style="font-size:10px;fill:var(--muted)">one part always fails somewhere</text><text x="14" y="190" style="font-size:12px;fill:var(--ink)">99.9% up = 43 min down a month</text><text x="14" y="210" style="font-size:10px;fill:var(--muted)">99.99% = 4 min.  Each nine costs 10× more.</text></svg>'
life:
  - 'Power cuts: hospitals keep a generator and a battery for exactly the minutes the main supply fails (redundancy).'
  - 'Indian Railways keeps a spare engine and crew on standby at major stations, and signals fail safe to red (graceful failure).'
  - 'Airlines publish on-time rates and cabin crews drill emergencies on a schedule, the same way services run game days.'
  - 'Aviation accident investigations ask what in the system let a mistake happen, and publish what they learn: the model for blameless postmortems.'
  - 'UPI and card apps retry failed payments in the background; a good one never charges you twice (retry with idempotency).'
models:
  - name: 'Spend a budget, not a wish'
    text: 'Perfection has an infinite price, so state how much failure you can accept and track it like money. A household budget, a sleep budget and an error budget are the same tool: you may spend it, you may not overspend it.'
  - name: 'Independence is the real spare'
    text: 'A spare helps only if it will not fail for the same reason. Two keys kept in one pocket are one key. Look for the hidden shared cause: one power line, one supplier, one boss.'
  - name: 'Fix the system, not the person'
    text: 'When a competent person makes a mistake, the process allowed it. Asking "what made this easy to do?" improves outcomes more than asking "who did it?", in schools, hospitals and teams of every kind.'
links:
  - leaf: 'cs/replication'
    name: 'Replication'
    same: 'Spare copies of data on different machines are the main tool for staying up.'
    differs: 'Replication keeps copies of data in step; reliability asks the wider question of how the whole service behaves when any copy, network or release fails.'
  - leaf: 'cs/observability'
    name: 'Observability'
    same: 'You cannot meet an SLO you do not measure; metrics, logs and traces are how you see the SLI and find the cause.'
    differs: 'Observability is the instrument; reliability is the decision of what to measure against and what to do about it.'
  - leaf: 'cs/design-news-feed'
    name: 'Designing a news feed'
    same: 'The feed example showed graceful degradation: a plainer list rather than an error.'
    differs: 'There it was one design choice; here it becomes a team habit with timeouts, budgets and tested fallbacks.'
  - leaf: 'cs/consistency-and-consensus'
    name: 'Consistency and consensus'
    same: 'Both accept that machines fail and messages are lost, and design for it.'
    differs: 'Consensus is about agreeing despite failures; reliability engineering is about how much failure is tolerable and how fast you recover.'
next:
  q: 'At 3 a.m. the pager rings and you must look inside a machine that is misbehaving. There is no mouse and no picture, only a blinking cursor. What do you type to see what is eating the disk, what the logs say, and which program is stuck?'
  leaf: 'cs/linux-and-shell'
  name: 'Linux and the shell'
symbols:
  - s: 'A'
    means: 'availability: the fraction of time (or requests) that the service works (no unit; 0.999 means 99.9%)'
  - s: '\text{MTBF}'
    means: 'mean time between failures: average running time between one failure and the next (hours)'
  - s: '\text{MTTR}'
    means: 'mean time to repair: average time from failure to recovery (hours)'
  - s: '\prod_i'
    means: 'multiply all the terms, one for each part i'
  - s: '\text{SLI}'
    means: 'service level indicator: a measured number that reflects user experience, such as the share of requests that succeed (percent)'
  - s: '\text{SLO}'
    means: 'service level objective: the target for an SLI over a period, such as 99.9% over 30 days (percent)'
  - s: 'burn rate'
    means: 'how many times faster than "exactly on budget" the error budget is being spent (a ratio, 1 means on budget)'
---

:::hook
q: Here's the puzzle. A service promises "99.9% available". Roughly how long may it be down in a 30-day month and still keep its promise?
options: ["About 7 seconds", "About 43 minutes", "About 7 hours"]
answer: 1
right: Right. A month has 43,200 minutes, and 0.1% of that is 43.2 minutes. Each extra nine divides it by ten: 99.99% allows 4.3 minutes, 99.999% about 26 seconds. (Real services' actual targets are mostly not public. [Inference])
wrong: Work it out. A 30-day month has 30 x 24 x 60 = 43,200 minutes. What is 0.1% of that?
:::

## Everything fails {lvl=1 id=s-fails label="Foundations"}

A single disk may run for years. But a company with 100,000 disks will see one die almost every day, simply because there are so many of them. The same is true of machines, cables, power supplies, software releases and people. At large scale **something is always broken**, and the question is not "how do we prevent failure?" but "how do we keep working while parts fail?".

That ability is called **reliability**. Its simplest measure is **availability**: the fraction of time the service works for its users. We say it in **nines**:

| Availability | Down per 30 days | Down per year |
|---|---|---|
| 99% (two nines) | 7.2 hours | 3.65 days |
| 99.9% (three) | 43 minutes | 8.8 hours |
| 99.99% (four) | 4.3 minutes | 53 minutes |
| 99.999% (five) | 26 seconds | 5.3 minutes |

Each extra nine cuts the allowed downtime by ten, and roughly multiplies the effort and cost by a large factor. Five nines is less than a minute of trouble a month, which leaves no time for a human to even wake up. So it takes automatic recovery, not heroic engineers.

:::qc lvl=1
q: How many minutes of downtime per 30 days does 99.99% allow?
options: ["About 4.3 minutes", "About 43 minutes", "About 26 seconds"]
answer: 0
right: Right. 0.01% of 43,200 minutes is 4.32 minutes.
wrong: 99.9% allows 43 minutes. One more nine divides that by what?
:::

## Measuring: SLI, SLO, budget {lvl=2 id=s-slo label="SDE-1"}

"Up" sounds simple until you ask: up for whom? A server can be running while every request fails. So we measure what users feel.

- **SLI** (service level indicator): a number measured from real traffic, such as "the share of requests that returned a correct answer in under 300 ms".
- **SLO** (service level objective): the target for the SLI over a window, such as "99.9% over 30 days".
- **Error budget**: what the target allows to fail, $1 - \text{SLO}$. For 99.9% it is 0.1%.

With 10 million requests in the month, the budget is 10,000 failed requests. Every failure spends from it, and **the budget is something you are allowed to spend**: on risky releases, experiments, planned maintenance. If it is nearly empty, you slow down and stabilise. If it is full, you may move faster.

```python
def budget_left(slo, total, failed):
    allowed = (1 - slo) * total        # failures we may afford
    return allowed - failed            # negative: SLO missed

budget_left(0.999, 10_000_000, 7_200)  # 2800 failures of room left
```

Why not aim for 100%? Users' own phones and networks fail far more than 99.999% of the time, so extra nines cannot even be noticed, while their cost rises steeply. A target is a **business decision**, not a technical boast. [Inference: typical reasoning described in public SRE writing.]

:::qc lvl=2
q: An SLO is 99.9% over 30 days and the service handled 20 million requests. How many failed requests are allowed?
options: ["2,000", "20,000", "200,000"]
answer: 1
right: Right. 0.1% of 20,000,000 is 20,000.
wrong: The budget is 1 minus the SLO, here 0.001, times the number of requests.
:::

## Timeouts and retries {lvl=2 id=s-retry label="SDE-1"}

Most failures are brief: a lost packet, a busy server. The first defence is to **try again**, but carefully.

Always set a **timeout**. Without one, a request to a stuck service waits forever and ties up your own resources, and failure spreads backwards. Then retry, but wait a bit longer each time (**exponential backoff**) and add randomness (**jitter**), so that thousands of clients that failed together do not all return at the same moment.

```python
import random, time

def call_with_retry(fn, tries=4, base=0.1, cap=2.0):
    for i in range(tries):
        try:
            return fn()
        except TimeoutError:
            if i == tries - 1:
                raise
            time.sleep(random.uniform(0, min(cap, base * 2 ** i)))
```

Retrying is only safe if repeating the action does no harm: reading is fine; charging a card is not, unless each request carries a unique id so the server can recognise a repeat (**idempotency**).

## Parts in series and in parallel {lvl=3 id=s-math label="SDE-2"}

A request often passes through several services. If *all* are needed, they are **in series**, and their availabilities multiply:

$$A_{\text{series}} = \prod_i A_i$$

Read it as: multiply the chances that each part works. Ten services at 99.9% each give $0.999^{10} \approx 0.990$, only 99.0%. Every extra dependency lowers your number, and a system is rarely better than its weakest part.

Spare copies work the other way. If *any one* copy is enough (**in parallel**), the system fails only when all copies fail together:

$$A_{\text{parallel}} = 1 - \prod_i (1 - A_i)$$

Two copies at 99% each fail together with probability $0.01 \times 0.01 = 0.0001$, giving 99.99%. Two cheap spares turned two nines into four.

The catch is in the word **independent**. The product only holds if the copies fail for different reasons. Two replicas in one rack share a power cable; two replicas running the same new release share its bug; two data centres share a misconfigured deploy tool. This is **correlated failure**, and it is how real systems end up far below the textbook number.

:::figure caption="Series: all boxes needed, so availabilities multiply. Parallel: either copy will do, so only the chance that both fail matters."
<svg viewBox="0 0 480 170" role="img" aria-label="Three boxes in a row for series, and two boxes stacked for parallel">
<g style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--mat);stroke-width:1.8">
<rect x="14" y="40" width="60" height="36" rx="6"/><rect x="94" y="40" width="60" height="36" rx="6"/><rect x="174" y="40" width="60" height="36" rx="6"/>
<rect x="300" y="20" width="70" height="36" rx="6"/><rect x="300" y="86" width="70" height="36" rx="6"/>
</g>
<g style="fill:none;stroke:var(--ink);stroke-width:1.5">
<path d="M74 58 H94"/><path d="M154 58 H174"/><path d="M270 71 H300"/><path d="M270 71 V38 H300"/><path d="M270 71 V104 H300"/><path d="M370 38 H400 V71 H420"/><path d="M370 104 H400 V71"/>
</g>
<g style="fill:var(--ink);font-size:11px">
<text x="26" y="62">99.9%</text><text x="106" y="62">99.9%</text><text x="186" y="62">99.9%</text><text x="314" y="42">99%</text><text x="314" y="108">99%</text>
</g>
<g style="fill:var(--muted);font-size:11px">
<text x="14" y="105">Series: 0.999 × 0.999 × 0.999 ≈ 99.7%</text>
<text x="240" y="150" style="font-size:10px">Parallel: 1 − 0.01 × 0.01 = 99.99%</text>
</g>
</svg>
:::

:::qc lvl=3
q: Two replicas of a database run the same release and both crash on the same bad query. Is the parallel formula still valid?
options: ["Yes, two copies always multiply the failure chance", "No, the failures are correlated, so they are not independent", "Yes, but only for three or more copies"]
answer: 1
right: Right. The formula needs independent failures. A shared bug makes the two copies fail together.
wrong: What does the formula assume about why each copy fails? Is that true here?
:::

## Failing gracefully {lvl=3 id=s-degrade label="SDE-2"}

Spares are one tool. Another is deciding **how** to fail.

- **Degrade**: when a part fails, offer a simpler service. The news feed lesson showed this: show newest-first posts if the ranker is down. A shopping site may hide recommendations but still take orders.
- **Circuit breaker**: after repeated failures calling a service, stop calling it for a few seconds and fail fast. This gives the sick service room to recover and stops your own requests piling up.
- **Load shedding**: when overloaded, refuse some work (perhaps the least important) cleanly, rather than serving everything slowly and badly. A bouncer at a full club, not a stampede at the door.
- **Bulkheads**: separate resource pools, so that one misbehaving customer or feature cannot use up everything. Ships have watertight compartments for the same reason.

**Retry storms** show how good intentions go wrong. If three layers of services each retry 3 times on failure, one failing call at the bottom can become $4 \times 4 \times 4 = 64$ calls. An overloaded service gets even *more* traffic exactly when it is weakest. Limit retries to one layer, keep a **retry budget** (for example, at most 10% extra requests), and always use backoff with jitter.

**Repair speed matters too.** The formula $A = \text{MTBF}/(\text{MTBF}+\text{MTTR})$ says availability depends on both how often things break and how fast you fix them. Since unavailability is about $\text{MTTR}/\text{MTBF}$, halving repair time helps as much as doubling the time between failures, and is usually far cheaper: better alerts, a one-click rollback, a clear runbook.

:::qc lvl=3
q: Which move improves availability most cheaply: doubling MTBF or halving MTTR?
options: ["Doubling MTBF, because failures matter most", "They are equal in effect; halving MTTR is usually cheaper", "Halving MTTR is useless"]
answer: 1
right: Right. Unavailability is roughly MTTR divided by MTBF, so each change halves it. Faster repair (rollback, alerts) is usually the cheaper lever.
wrong: Write unavailability as about MTTR divided by MTBF. What happens to the fraction in each case?
:::

## Alerting on the budget {lvl=4 id=s-alert label="SDE-3"}

A good alert fires when users are being hurt *enough to matter*, not when a graph twitches. Use the budget. The **burn rate** is how fast you are spending it compared with "exactly on budget" (1.0):

- Error rate 0.1% with an SLO of 99.9%: burn rate 1. The budget lasts exactly 30 days.
- Error rate 1%: burn rate 10. The monthly budget is gone in 3 days.
- Burn rate 14.4 for one hour spends $14.4/720 = 2\%$ of a 30-day budget.

A common pattern is two or more alerts. A **fast** one pages a human at a high burn rate over a short window (it is serious right now). A **slow** one opens a ticket at a low burn rate over days (a leak, not a flood). Windows and thresholds are tuning choices, taught in Google's SRE books and workbook [Unverified exact figures]. Every page must be urgent, real and actionable; otherwise people stop trusting the pager (**alert fatigue**).

**An error-budget policy** is a written rule agreed *before* trouble: "If the budget for the month is spent, we freeze feature releases and work on reliability until it recovers." It turns an argument ("ship now!" against "wait!") into a number both sides agreed to.

## When it breaks: incidents {lvl=4 id=s-incident label="SDE-3"}

An **incident** is a problem that threatens the SLO and needs a coordinated response. A calm structure beats clever improvisation:

1. **Detect**: an alert, a customer report or a dashboard.
2. **Declare**: someone says "this is an incident" and names an **incident commander**, who coordinates and does not debug.
3. **Mitigate first**: stop the pain before finding the cause. Roll back the last release, shift traffic away from the bad region, turn off the new feature. Diagnosis can wait for the postmortem.
4. **Communicate**: one person updates users and teammates at regular times, even to say "no news".
5. **Resolve and record**: keep a timeline as you go; it is gold afterwards.

Real outages usually have several causes: a change, a latent bug, a missing alert, a slow rollback. Be suspicious of any story with a single villain.

## Learning from failure {lvl=4 id=s-learn label="SDE-3"}

A **postmortem** is a written review done after the incident. A good one has a timeline, the impact (how much budget it spent), what went well, what went badly, where we got lucky, and **action items** with owners and dates. It is **blameless**: it assumes people acted sensibly with what they knew, and asks "what about our tools and process made this mistake easy?" People who fear punishment hide details, and then the same failure returns.

**Chaos engineering** goes looking for weaknesses before real failures do. State a steady-state measure (error rate, latency), then deliberately break something small (kill a server, add 200 ms of delay to one dependency, take down a replica) and check that the measure holds. Start small, in a test setting or with a tiny share of traffic, and stop at once if users are hurt. A **game day** is the same idea for people: rehearse the incident, including the 3 a.m. phone call. Untested failover is a hope, not a plan.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. At scale something is always failing, so design to keep working while parts break. {lvl=1}
2. Nines are minutes: 99.9% is about 43 minutes a month, and each extra nine divides it by ten. {lvl=1}
3. Measure what users feel (SLI), set a target (SLO), and treat the rest as a budget (error budget). {lvl=2}
4. Time out, retry with exponential backoff and jitter, and only retry actions that are safe to repeat. {lvl=2}
5. Series multiplies availabilities (lower); independent parallel copies multiply the failure chances (higher); shared causes break the maths. {lvl=3}
6. Degrade gracefully with fallbacks, circuit breakers, load shedding and bulkheads; beware retry storms. {lvl=3}
7. Repair speed counts as much as failure rate: unavailability is about MTTR over MTBF. {lvl=3}
8. Alert on budget burn rate, mitigate before diagnosing, run blameless postmortems, and test failure on purpose. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Chasing 100%, or a number nobody has priced. Each nine costs much more than the last. {lvl=1}
- Counting "server is up" instead of "users succeed". {lvl=2}
- Retrying without timeouts, backoff, jitter or idempotency. {lvl=2}
- Calling two replicas independent when they share a release, rack, power or configuration. {lvl=3}
- Letting a long chain of dependencies quietly lower your availability: ten parts at 99.9% give 99.0%. {lvl=3}
- Fallbacks that were never exercised, so they fail on the day they are needed. {lvl=3}
- Paging on every blip, until alert fatigue makes people ignore real pages. {lvl=4}
- Searching for the root cause before stopping the damage, or blaming a person instead of the process. {lvl=4}
:::
