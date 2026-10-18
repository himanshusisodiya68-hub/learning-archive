---
title: Logs, metrics and traces
summary: How engineers see inside a running system, find why one user's page was slow, and get woken only when it matters.
ncert: []
up_to: SDE-3
builds_on: [Errors and testing, CI/CD and shipping safely, Servers and back ends]
notes_prompt: Explain to a friend why a service whose average response time is fine can still feel slow to many users, and which tools you would use to find the cause.
margin:
  - kind: history
    title: History
    text: "Google's Dapper paper (2010) described tracing a single request across thousands of machines, and inspired open tools such as Zipkin and Jaeger. The OpenTelemetry project later merged the competing standards. [Unverified: dates]"
  - kind: tip
    title: Interview favourite
    text: '"The site is slow, what do you do?" Start with the user-facing signal (latency percentiles, error rate), narrow with a trace to the slow service, then read that service''s logs and resource metrics. Never start by guessing a cause.'
  - kind: olympiad
    title: Design link
    text: Observability costs money. Storing every log line, every trace and every label combination can cost more than the service itself, so real systems sample, aggregate and set retention limits.
books:
  - { title: "Google, Site Reliability Engineering", ref: "Chapters on monitoring distributed systems (the four golden signals), and on service level objectives [Unverified chapter numbers]" }
  - { title: "C. Majors, L. Fong-Jones, G. Miranda, Observability Engineering", ref: "Events, high-cardinality data and debugging in production [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliable, Scalable, Maintainable (describing load and performance, percentiles) [Unverified chapter detail]" }
cards:
  - { front: "Logs, metrics, traces: what does each answer?", back: "Logs: what exactly happened in this one event. Metrics: how much or how often over time, cheap numbers for dashboards and alerts. Traces: the path and timing of one request across many services." }
  - { front: "Why use percentiles instead of the average for latency?", back: "An average hides the slow few. The 99th percentile (p99) is the time that 99% of requests beat; it shows what your unluckiest 1% of users feel." }
  - { front: "What are the four golden signals?", back: "Latency, traffic, errors and saturation (how full the system is). If you can watch only four things, watch these." }
  - { front: "What is a trace and what is a span?", back: "A trace is one request's whole journey. A span is one timed step within it (one service call or database query). Spans nest to form a tree." }
  - { front: "Good alert versus bad alert?", back: "Good: tells a human that users are hurt now and what to do. Bad: fires on a cause that may not matter (a busy CPU), wakes people for nothing and trains them to ignore pages." }
  - { front: "What is cardinality and why can it break metrics?", back: "The number of distinct label combinations. Each combination is its own stored time series, so a label like user_id multiplies storage and cost enormously." }
core:
  idea: 'You cannot fix what you cannot see. Logs record single events, metrics count and time things cheaply, and traces follow one request through many services; together they let you ask new questions of a running system. Judge speed by percentiles, not averages, and alert only on what hurts users.'
  formulas:
    - tex: 'P(\text{at least one slow}) = 1 - (1-p)^n'
      label: 'A page making n calls, each slow with probability p'
    - tex: '\text{error budget} = (1 - \text{SLO}) \times \text{window}'
      label: 'How much failure a promise of reliability allows'
  conditions:
    - 'Every log line and span carries an id (request or trace id) so the pieces can be joined'
    - 'Metrics use few, bounded labels; high-detail data goes in logs and traces'
    - 'Percentiles are computed from the raw values or histograms, never by averaging percentiles'
  sign: 'The commonest mistake is trusting the average: a mean of 200 ms can hide one user in a hundred waiting five seconds.'
outcomes:
  - 'Tell logs, metrics and traces apart and say which to use first for a given question'
  - 'Write a useful structured log line and a sensible metric'
  - 'Compute and explain mean, median and p99, and why the tail dominates what users feel'
  - 'Read a trace to find the slow step in a request that crosses several services'
  - 'Design a few alerts on user pain, using error budgets and burn rate'
opener:
  story: |
    It is Tuesday evening and a handful of shoppers in Pune complain that the cart page "takes forever". Your dashboard says the average response time is 210 ms, green across the board. Support tickets say otherwise.

    Hundreds of servers, dozens of services, one slow page. A shopper's single click touches the website, a login service, the cart, the stock service and a payment checker. Somewhere, for some people, one of them is dawdling.

    Where do you even begin to look, and why does the average say everything is fine?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A bar chart of response times with a tall cluster of fast requests, a short tail of slow ones, and markers for the average and the 99th percentile"><path d="M24 200 L300 200" style="stroke:var(--ink);stroke-width:1.5;fill:none"/><g style="fill:color-mix(in srgb,var(--c) 30%,var(--surface));stroke:var(--c)"><rect x="34" y="60" width="20" height="140"/><rect x="58" y="40" width="20" height="160"/><rect x="82" y="90" width="20" height="110"/><rect x="106" y="150" width="20" height="50"/><rect x="130" y="184" width="20" height="16"/></g><g style="fill:color-mix(in srgb,var(--bad) 35%,var(--surface));stroke:var(--bad)"><rect x="250" y="190" width="20" height="10"/><rect x="274" y="194" width="20" height="6"/></g><path d="M96 34 L96 200" style="stroke:var(--ink);stroke-width:1.5;stroke-dasharray:4 3;fill:none"/><text x="100" y="30" style="font-size:10px;fill:var(--ink)">average looks fine</text><path d="M250 150 L250 200" style="stroke:var(--bad);stroke-width:1.5;fill:none"/><text x="186" y="144" style="font-size:10px;fill:var(--bad)">p99: the unlucky few</text><text x="24" y="220" style="font-size:10px;fill:var(--muted)">fast</text><text x="262" y="220" style="font-size:10px;fill:var(--muted)">slow</text><text x="120" y="236" style="font-size:10px;fill:var(--muted)">time taken to respond</text></svg>'
life:
  - 'A car dashboard shows a few vital gauges (speed, fuel, temperature) and one warning light; the engine mechanic plugs in a computer to read the detailed logs.'
  - 'When a food-delivery app says "your order is 5 minutes late", it is reading metrics and event logs from the riders and the kitchen.'
  - 'Hospitals chart heart rate (a metric) but also keep the notes of exactly what happened at 3 a.m. (a log).'
  - 'A courier tracking page showing every hand-off of your parcel, with timestamps, is a trace of that parcel.'
  - 'Railway control rooms watch live train positions, but alert only when a train is actually late or off its route.'
models:
  - name: 'Averages hide the people who suffer'
    text: 'A river that is on average one metre deep can still drown you. Whenever an average is reassuring, ask about the worst few and how many people they are.'
  - name: 'Measure first, then guess'
    text: 'Doctors take a temperature before prescribing; mechanics read the fault code before replacing parts. In any problem, spend a little effort on seeing what is happening before choosing a fix.'
  - name: 'Alert on symptoms, not causes'
    text: 'A smoke alarm rings when there is smoke, not when someone lights a candle. Warn people about the harm that matters, and let them look for the cause.'
links:
  - leaf: 'mat/mean-median-mode'
    name: 'Mean, median and mode'
    same: 'Mean, median and percentiles are all summaries of the same list of numbers.'
    differs: 'Here the interesting number is not the centre but the far tail, because that is the experience of the unluckiest users.'
  - leaf: 'mat/misleading-statistics'
    name: 'How statistics mislead'
    same: 'An average of response times is the same trap as an average that hides a skewed income or exam distribution.'
    differs: 'In a service, you can choose the right statistic up front; watching p99 is the cure.'
  - leaf: 'cs/errors-and-testing'
    name: 'Errors and testing'
    same: 'Both try to find what is wrong with a program; both rely on seeing what the program actually did.'
    differs: 'Tests look for problems you can imagine before release; observability helps with the ones you did not, while real users are using it.'
next:
  q: 'A large service produces thousands of metrics and millions of log lines a minute, far more than any person can watch. Could a program learn what "normal" looks like from past data, instead of us hand-writing a threshold for every number? What does it even mean for a machine to learn?'
  leaf: 'cs/what-is-learning'
  name: 'What it means for a machine to learn'
symbols:
  - s: 'p50, p99'
    means: 'percentiles: p99 is the value that 99% of requests are faster than (same unit as the data, e.g. ms)'
  - s: 'SLO'
    means: 'service level objective: a promise such as "99.9% of requests succeed this month" (a fraction)'
  - s: 'n'
    means: 'number of calls a page makes (count)'
  - s: 'p'
    means: 'chance that one call is slow (a fraction between 0 and 1)'
  - s: 'Span'
    means: 'one timed step inside a trace (milliseconds)'
  - s: 'Burn rate'
    means: 'how fast the error budget is being used compared with the allowed pace (1 = exactly on budget)'
---

:::hook
q: Here's the puzzle. Your page makes 50 backend calls. Each call is slow (over a second) just 1 time in 100. About what share of page loads contain at least one slow call?
options: ["About 1%", "About 40%", "About 99%"]
answer: 1
right: Right. A page load escapes only if all 50 calls are fast, which happens with probability 0.99^50, about 0.60. So roughly 40% of page loads hit a slow call. A "rare" one-in-a-hundred delay becomes the normal experience. (This assumes the calls are independent. [Inference] Real delays are often correlated.)
wrong: The slow cases do not stay at 1% because the page makes many calls and any one of them can slow it. Work out the chance that all 50 are fast, then subtract from 1.
:::

## Seeing inside a running system {lvl=1 id=s-seeing label="Foundations"}

Your program runs on machines you cannot touch, for users you cannot watch. If a customer says "it was slow", you cannot reproduce it by staring at the code. You need the system to **tell you** what it did. This is **observability**: being able to ask a running system new questions, and get answers, without shipping new code first.

Three kinds of evidence do most of the work. Think of a taxi:

| Evidence | The taxi version | In software | Best for |
|---|---|---|---|
| **Logs** | The driver's notebook: "9:04 picked up Asha at Koregaon Park" | One line per event, with detail | "What exactly happened to this one request?" |
| **Metrics** | The dashboard: speed, fuel, trips per hour | Numbers counted over time | "Is something wrong, and since when?" |
| **Traces** | The route map of one trip with time at each stop | One request's path across services | "Where did the time go?" |

You usually use them in that order of **width**: metrics tell you something is wrong, traces tell you where, logs tell you why.

:::qc lvl=1
q: Users say checkout got slow about 20 minutes ago. Which kind of evidence tells you quickly that "yes, latency rose at 6:40"?
options: ["A log line from one request", "A metric graphed over time", "A single trace"]
answer: 1
right: Right. Metrics are cheap numbers over time, which is exactly what shows when something changed. Logs and traces then explain it.
wrong: You want to see a change over time across all requests. Which evidence is a cheap number counted continuously?
:::

## Logs that help {lvl=2 id=s-logs label="SDE-1"}

A **log** line is a record of an event. Plain-sentence logs ("Error while saving order!") are easy to write and hard to search across a million lines. **Structured logs** put the same facts in fields a machine can filter.

```python
import json, logging, time

def log(level, msg, **fields):
    logging.info(json.dumps({"ts": time.time(), "level": level,
                             "msg": msg, **fields}))

log("error", "payment failed", request_id="r-8812",
    user_id=4471, amount=1299, reason="card_declined", ms=412)
```

Now you can ask "show me every failure with reason `card_declined` for amounts over 1000", or follow `request_id` through every service that touched it. That id, the **request id** or **trace id**, is the single most useful field: it lets you join the scattered lines of one request.

Habits that pay off:

- Use levels sensibly: `error` for something broken, `warn` for something odd, `info` for key events, `debug` only when hunting.
- Never log passwords, card numbers or tokens; logs are copied, stored and read by many people.
- Log decisions and outcomes, not noise. A log that prints every loop iteration costs money and hides the one line you need.

## Metrics and the golden signals {lvl=2 id=s-metrics label="SDE-1"}

A **metric** is a number sampled over time. Three common shapes:

- **Counter**: only goes up (requests served, errors). You look at its rate of change.
- **Gauge**: goes up and down (memory in use, queue length).
- **Histogram**: counts how many values fell in each range (how many requests took 0-50 ms, 50-100 ms and so on), which lets you compute percentiles.

Metrics are cheap, because they are numbers, not stories. That is why they drive dashboards and alerts. If you can watch only four, the Google SRE book recommends the **four golden signals**:

| Signal | Question | Example |
|---|---|---|
| **Latency** | How long do requests take? | p50 and p99 of response time |
| **Traffic** | How much demand is there? | Requests per second |
| **Errors** | How many fail? | Share of responses that are 5xx |
| **Saturation** | How full is the system? | Queue length, disk full, connection pool used |

Metrics have one trap: every distinct set of **labels** (endpoint, region, status) is stored as its own series. 20 endpoints x 5 status codes x 4 regions is 400 series, fine. Add `user_id` as a label with a million users and you have 400 million series, which can crash the metrics system. This count is called **cardinality**. Put high-detail identifiers in logs and traces, not metric labels.

:::qc lvl=2
q: A developer adds the label customer_id (500,000 customers) to a request-count metric that already has 100 label combinations. Roughly how many series result?
options: ["600", "About 50 million", "500,100"]
answer: 1
right: Right. Labels multiply: 100 x 500,000 = 50,000,000 series. That is the cardinality explosion.
wrong: Distinct label values combine with each other, so the counts multiply rather than add.
:::

## Percentiles, not averages {lvl=3 id=s-percentiles label="SDE-2"}

Take 100 requests. 98 take 100 ms. Two get stuck and take 5,000 ms each.

- **Mean** (average): $(98 \times 100 + 2 \times 5000)/100 = 198$ ms. Looks fine.
- **Median** (p50): 100 ms. Looks even better.
- **p99**: sort the times; the 99th of 100 is 5,000 ms. That is what one in a hundred users feels.

:::figure caption="The same 100 requests. The mean (198 ms) and median (100 ms) hide the two 5,000 ms requests that p99 reveals."
<svg viewBox="0 0 320 130" role="img" aria-label="A horizontal axis from 0 to 5000 ms with a big pile of dots at 100 ms and two dots at 5000 ms, with markers for the median, mean and p99">
<path d="M20 90 L300 90" style="stroke:var(--ink);stroke-width:1.5;fill:none"/>
<g style="fill:var(--mat)"><circle cx="30" cy="80" r="4"/><circle cx="30" cy="70" r="4"/><circle cx="30" cy="60" r="4"/><circle cx="30" cy="50" r="4"/><circle cx="30" cy="40" r="4"/><circle cx="30" cy="30" r="4"/></g>
<g style="fill:var(--bad)"><circle cx="290" cy="80" r="4"/><circle cx="290" cy="70" r="4"/></g>
<path d="M30 96 L30 106" style="stroke:var(--ink);stroke-width:1.5"/><text x="12" y="120" style="font-size:10px;fill:var(--ink)">median 100</text>
<path d="M42 96 L42 106" style="stroke:var(--muted);stroke-width:1.5"/><text x="48" y="106" style="font-size:10px;fill:var(--muted)">mean 198</text>
<path d="M290 96 L290 106" style="stroke:var(--bad);stroke-width:1.5"/><text x="236" y="120" style="font-size:10px;fill:var(--bad)">p99 5000 ms</text>
<text x="96" y="52" style="font-size:10px;fill:var(--muted)">98 requests near 100 ms</text>
</svg>
:::

Why the tail matters more than it seems:

- **Fan-out.** The hook's arithmetic: with $n$ calls per page, each slow with chance $p$, the page is slow with chance $1-(1-p)^n$. With $p = 0.01$ and $n = 50$ that is $1 - 0.99^{50} \approx 0.395$. Read it as: the more things a request touches, the more often it meets someone's bad moment. Big services care about p99 and p99.9 for this reason.
- **Your best customers.** Heavy users make more requests, so they hit the tail more often.

Two rules for working with percentiles:

1. **Never average percentiles.** If server A has p99 = 100 ms on 900 requests and server B has p99 = 1,000 ms on 100 requests, the p99 of the combined traffic is not 550 ms. You must merge the underlying values or the **histograms** and recompute.
2. **Choose histogram buckets to match your promise.** If your goal is "99% under 300 ms", you need buckets around 300 ms, or the computed percentile will be a rough guess.

:::qc lvl=3
q: 200 requests: 190 take 50 ms and 10 take 2,000 ms. What is the p95 (the 190th value when sorted)?
options: ["50 ms", "About 150 ms", "2,000 ms"]
answer: 0
right: Right. The 190th sorted value is the last of the fast ones, so p95 is 50 ms. But p96 and above jump to 2,000 ms, and the mean is 147.5 ms, so each number tells a different story. Look at several.
wrong: Sort mentally: the first 190 values are all 50 ms. Which value is in position 190?
:::

## Traces: following one request {lvl=3 id=s-traces label="SDE-2"}

A request that crosses services leaves tracks in each service's logs, with different clocks and no obvious link. A **trace** stitches them together. When a request enters the system it gets a **trace id**; each service passes it on (usually in an HTTP header) and records a **span**: its name, start time and duration, and who called it. Spans form a tree.

**Debugging the slow cart, end to end.** The tracing tool shows one slow checkout request of 1,200 ms:

| Span | Time |
|---|---|
| gateway (routing) | 20 ms |
| auth service | 30 ms |
| cart service | 60 ms |
| **stock service** | **900 ms** |
| payment pre-check | 190 ms |
| **Total** | **1,200 ms** |

(20 + 30 + 60 + 900 + 190 = 1,200, since they ran one after another.) The stock service owns 75% of the time, so we stop looking anywhere else. Opening its child spans shows 40 database queries of about 22 ms each, one after another: $40 \times 22 = 880$ ms. That is a classic **N+1 query** bug: the code asked the database one question per item instead of one question for all items. The fix is a single batched query. The log lines carrying the same trace id confirm the cart had 40 items, which explains why only some shoppers are slow: the ones with big carts.

Notice the sequence: a metric (p99 latency up) told us something was wrong, a trace told us where, and logs confirmed why. No guessing needed.

## Dashboards and alerts that matter {lvl=3 id=s-alerts label="SDE-2"}

A dashboard is for **understanding**; an alert is for **action**. Keep them distinct.

- A good dashboard has a handful of graphs that answer "are users happy?" (the golden signals) at the top, and the detail needed to explore beneath.
- A good **alert** is urgent, important and actionable: it fires when users are being hurt or soon will be, and says what to look at first.
- **Alert on symptoms, not causes.** "Error rate above 2% for 5 minutes" is a symptom. "CPU above 80%" is a possible cause that may harm nobody. Cause-based alerts wake people for nothing, which breeds **alert fatigue**: pages get ignored and the real one is missed.
- Every alert needs an owner, a short runbook (what to check, how to stop the bleeding), and a periodic review: delete alerts nobody acts on.

:::qc lvl=3
q: Which alert is better?
options: ["Server CPU is above 80%", "Over 2% of checkout requests have failed for 5 minutes", "Disk read speed dropped 10%"]
answer: 1
right: Right. It describes user pain directly and is worth waking someone for. The others may be harmless, and if not, the symptom alert will fire anyway.
wrong: Ask which one is certain to mean that real users are being hurt right now.
:::

## Promises, budgets and the cost of seeing {lvl=4 id=s-slo label="SDE-3"}

How reliable should a service be? 100% is impossible and absurdly expensive. So teams state a **service level objective (SLO)**, for example "99.9% of requests succeed over 30 days". What is left over is the **error budget**:

$$\text{error budget} = (1 - \text{SLO}) \times \text{window}$$

Read it as: the allowed failure is whatever the promise does not cover. For 99.9% over 30 days (43,200 minutes) that is $0.001 \times 43{,}200 = 43.2$ minutes of full outage, or the equivalent in partly failed requests.

The budget turns arguments into arithmetic. If the budget is healthy, ship faster. If it is nearly spent, slow down and fix reliability (see Reliability, failures and on-call, and CI/CD). To alert on it sensibly, use the **burn rate**: how fast you are using budget compared with an even spend. A burn rate of 1 uses exactly the whole budget in 30 days. A burn rate of 14.4 for one hour uses 2% of the month's budget, since $14.4 \times 1/720 = 0.02$, which is worth a page now; a slow burn of 1 to 3 over days deserves a ticket, not a 3 a.m. call. [Unverified: these thresholds follow the Google SRE workbook from memory.]

At scale, the question becomes the cost of seeing:

- **Sampling.** Storing every trace of billions of requests is too costly. **Head sampling** decides at the start (keep 1%); **tail sampling** decides after the request finishes, keeping all slow or failed ones, which is smarter but needs buffering.
- **Retention and tiers.** Keep detailed data for days, aggregates for months.
- **One standard.** OpenTelemetry offers a common way to produce logs, metrics and traces, so you can change tools without rewriting every service.
- **Observability in culture.** After each incident, ask "what would have let us see this sooner?" and add exactly that signal.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Logs tell what happened in one event, metrics show how much over time, traces show where one request spent its time. {lvl=1}
2. Use structured logs with a request or trace id so one request's lines can be joined. {lvl=2}
3. Watch the four golden signals: latency, traffic, errors, saturation; keep metric labels few and bounded. {lvl=2}
4. Judge latency by percentiles; the mean hides the tail, and fan-out makes the tail common. {lvl=3}
5. Never average percentiles; merge the histograms and recompute. {lvl=3}
6. A trace of spans shows the slow step; metric, then trace, then log is the usual path. {lvl=3}
7. Alert on user-facing symptoms, and use SLOs, error budgets and burn rate to decide how loud. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A reassuring average can hide a miserable tail; always look at p99 as well. {lvl=1}
- A user_id or request id as a metric label creates millions of series; keep such ids in logs. {lvl=2}
- Never log passwords, tokens or card numbers. {lvl=2}
- The p99 of a combined group is not the average of the groups' p99s. {lvl=3}
- Alerts on causes (busy CPU) cause fatigue; alert on symptoms users feel. {lvl=3}
- Without a propagated trace id, a trace breaks at the first service that forgets to pass it on. {lvl=4}
:::
