---
title: Scaling up and scaling out
summary: Why a website that works for a hundred people can collapse at a million, and the few ideas engineers use to stop that.
ncert: []
up_to: SDE-3
builds_on: [Big-O and growth of cost, Processes and threads]
notes_prompt: Explain to a friend why hiring ten ordinary cooks is not always better than buying one huge stove, and what decides it.
margin:
  - kind: history
    title: History
    text: 'In the early 2000s, big web companies found that racks of cheap ordinary computers beat a few giant expensive ones, because cheap machines can simply be replaced when they fail. [Unverified, dates and details from memory]'
  - kind: tip
    title: Interview favourite
    text: Every system design round starts with numbers. Say "assume 10 million daily users, 20 requests each" out loud, divide by 86,400 seconds, and you have a request rate to design for.
  - kind: olympiad
    title: Hidden limit
    text: Amdahl's observation says the part of a job that cannot be shared caps the gain from extra workers. With 5% serial work, a million servers give at most a 20 times speed-up.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliable, Scalable, Maintainable: describing load and performance [Unverified]" }
  - { title: "A. Xu, System Design Interview", ref: "Scale from zero to millions of users; back-of-the-envelope estimation [Unverified]" }
  - { title: "Google, Site Reliability Engineering", ref: "chapters on load and capacity [Unverified]" }
cards:
  - { front: "Vertical scaling vs horizontal scaling?", back: "Vertical (scale up): a bigger machine. Horizontal (scale out): more machines sharing the work. Vertical is simple but has a ceiling and one point of failure; horizontal has no ceiling but needs the work to be splittable." }
  - { front: "What makes a service stateless?", back: "It keeps nothing about a user between requests; any needed memory lives in a shared store. So any server can handle any request, and servers can be added or removed freely." }
  - { front: "Requests per second from daily users?", back: "daily users × requests per user ÷ 86,400 gives the average; multiply by a peak factor (often 2 to 5) to get what you must survive." }
  - { front: "Amdahl's law in one line?", back: "If a fraction p of the work can be shared among n workers, speed-up = 1 / ((1 - p) + p / n). The serial part (1 - p) caps it at 1 / (1 - p)." }
  - { front: "Why does latency explode near full utilisation?", back: "Queues build up. For a simple single-queue model, waiting grows like 1 / (1 - utilisation): 5 times service time at 80 percent, 10 times at 90, 20 times at 95." }
  - { front: "What is a bottleneck?", back: "The one resource (CPU, database, network link, a lock) that runs out first. Adding capacity anywhere else changes nothing until the bottleneck is fixed." }
core:
  idea: 'To serve more people you either make one machine bigger or share the work across many machines. Sharing only works if the work can be split, so the real limit is whichever part cannot be split or shared: the bottleneck.'
  formulas:
    - tex: '\text{requests/s} = \dfrac{U \times r}{86{,}400}'
      label: 'Average load from U daily users, r requests each'
    - tex: 'S(n) = \dfrac{1}{(1-p) + p/n}'
      label: 'Amdahl speed-up with n workers, fraction p shareable'
    - tex: 'T = \dfrac{s}{1-\rho}'
      label: 'Response time at utilisation ρ for service time s (one-queue model)'
  conditions:
    - 'Requests are independent, so any server can handle any one of them (stateless)'
    - 'Work divides cleanly; a shared database or lock is not hiding behind the servers'
    - 'Arrivals are random and the queue model is the simple one-line kind (real systems are messier)'
  sign: 'Do not scale the part that is not slow. Measure, find the bottleneck, fix that, then measure again.'
outcomes:
  - 'Explain the difference between scaling up and scaling out, and when each is the right first move'
  - 'Turn a user count into requests per second and storage per year in under a minute'
  - 'Explain why stateless servers are easy to multiply and what goes wrong when state lives on the server'
  - 'Find the bottleneck in a simple system and say what adding servers will and will not fix'
  - 'Use Amdahl and queueing arguments to explain why doubling machines rarely doubles speed, and why headroom matters'
opener:
  story: |
    It is 10:00 a.m. and you are on the IRCTC site, trying to book a Tatkal ticket. The clock turns, and a few hundred thousand people press the same button in the same second. For a minute the page crawls, or fails, and then, mostly, it works.

    On an ordinary Tuesday the same site is quiet. A shop that plans for Tuesday dies at 10:00; a shop that plans for 10:00 wastes money all day. And if the site does need more power, what do you actually do? Buy one monster computer? Rent a hundred small ones?

    This is the oldest question in running big systems: when the crowd grows, how do you grow with it, and what quietly stops you? (IRCTC's real architecture is not something we know; the story is only a picture of the problem. [Inference])
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Left: one tall server. Right: a row of many small servers sharing a crowd"><text x="14" y="22" style="font-size:11px;fill:var(--muted)">Scale up</text><rect x="30" y="40" width="56" height="150" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><rect x="40" y="52" width="36" height="8" style="fill:var(--c)"/><rect x="40" y="68" width="36" height="8" style="fill:var(--c)"/><rect x="40" y="84" width="36" height="8" style="fill:var(--c)"/><text x="22" y="212" style="font-size:10px;fill:var(--muted)">one big box</text><path d="M96 80 L106 80 M96 110 L106 110" style="stroke:var(--muted);stroke-width:1.5;fill:none"/><line x1="124" y1="30" x2="124" y2="220" style="stroke:var(--rule);stroke-dasharray:4 4"/><text x="142" y="22" style="font-size:11px;fill:var(--muted)">Scale out</text><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="140" y="60" width="32" height="42" rx="4"/><rect x="180" y="60" width="32" height="42" rx="4"/><rect x="220" y="60" width="32" height="42" rx="4"/><rect x="260" y="60" width="32" height="42" rx="4"/><rect x="140" y="120" width="32" height="42" rx="4"/><rect x="180" y="120" width="32" height="42" rx="4"/><rect x="220" y="120" width="32" height="42" rx="4"/><rect x="260" y="120" width="32" height="42" rx="4"/></g><text x="150" y="190" style="font-size:10px;fill:var(--muted)">many small boxes</text><text x="150" y="205" style="font-size:10px;fill:var(--bad)">…all hitting one database?</text><rect x="206" y="214" width="40" height="14" rx="3" style="fill:none;stroke:var(--bad);stroke-width:1.5"/></svg>'
life:
  - 'A Tatkal rush, a Flipkart Big Billion Days sale, or the last over of an IPL final on Hotstar: the crowd arrives all at once, not evenly through the day.'
  - 'A restaurant kitchen: a bigger stove helps up to a point, then you need more cooks, and then the single pass where plates go out becomes the limit.'
  - 'Toll plazas open extra lanes at festival time, but if every lane merges into one bridge, the bridge decides the speed.'
  - 'Exam result day: a board website that is idle 364 days a year is flooded for an hour, which is why such sites often add temporary capacity.'
models:
  - name: 'The slowest part rules'
    text: 'A chain moves at the speed of its slowest link. In a job, a household budget or a supply chain, find the bottleneck before spending effort anywhere else.'
  - name: 'Headroom is not waste'
    text: 'A road at 95 percent capacity is not efficient, it is a jam waiting for one slow truck. Spare capacity is what absorbs surprises. The same holds for calendars, hospital beds and bank reserves.'
  - name: 'Estimate first, then refine'
    text: 'A rough answer within a factor of two, reached in a minute, beats a precise answer that arrives next week. Decide with orders of magnitude, then measure the real thing.'
links:
  - leaf: 'mat/fermi-estimation'
    name: 'Fermi estimation'
    same: 'Both build an answer from a few round numbers and simple multiplication, and both care about the order of magnitude rather than the last digit.'
    differs: 'Fermi problems ask about the world (how many tennis balls fit in a bus); capacity estimates ask about your own system and feed straight into a purchase or design decision.'
  - leaf: 'mat/exponential-growth'
    name: 'Exponential growth and doubling'
    same: 'A product that doubles its users every few months doubles the load on every part of the system, so capacity must be planned ahead of the curve, not at it.'
    differs: 'Growth in users is a curve you hope for; growth in cost per request is something you control by design.'
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'Both ask what happens to cost as the size of the problem grows, not what it costs today.'
    differs: 'Big-O counts steps inside one program; scalability counts machines, network trips and queues across many programs.'
  - leaf: 'cs/processes-and-threads'
    name: 'Processes and threads'
    same: 'Using several cores on one machine is a small scale-out, and it has the same sharing limits as using several machines.'
    differs: 'Threads share memory cheaply; machines can only share by sending messages, which is slower and can fail.'
next:
  q: 'Most requests ask for the same few things: the cricket score, the homepage, a celebrity profile. Why redo that work a million times when you could remember the answer?'
  leaf: 'cs/caching'
  name: 'Caching'
symbols:
  - s: 'U'
    means: 'number of users in a day (count)'
  - s: 'r'
    means: 'requests one user makes in a day (count)'
  - s: '86{,}400'
    means: 'seconds in a day, 24 × 60 × 60'
  - s: 'p'
    means: 'fraction of the work that can be shared across workers (no unit, between 0 and 1)'
  - s: 'n'
    means: 'number of workers or servers (count)'
  - s: 'S(n)'
    means: 'speed-up with n workers compared with one (no unit)'
  - s: '\rho'
    means: 'utilisation: the share of its capacity a machine is using (no unit, 0 to 1)'
  - s: 's'
    means: 'service time: how long one request takes when nobody is waiting (milliseconds)'
  - s: 'T'
    means: 'response time: waiting plus service (milliseconds)'
---

:::hook
q: Your site is slow with 10 servers, all busy. You add 10 more. Pick the most likely result.
options: ["Twice as fast, since you doubled the machines", "Faster, but the gain may stall if they all share one database", "Slower, since more machines means more confusion"]
answer: 1
right: Right. More servers only help if the thing that was slow was the servers. If all 20 queue for one database, that database is the new limit, and the extra machines mostly wait with it.
wrong: Adding machines multiplies only the capacity of the part you multiplied. What do the machines share that you did not multiply?
:::

## One shop, one counter {lvl=1 id=s-problem label="Foundations"}

Picture a small tea stall with one owner. Ten customers an hour is calm. A hundred an hour and a queue forms; the owner is the **bottleneck**, the one thing everything waits for.

There are only two ways out. Make the owner faster (a better stove, a quicker hand), or hire more people. In computing the first is **scaling up** (also called vertical scaling): buy a machine with a faster processor and more memory. The second is **scaling out** (horizontal scaling): add more machines and share the crowd between them.

| | Scale up (bigger machine) | Scale out (more machines) |
|---|---|---|
| Effort | Almost none: same program, bigger box | Real design work: work must be split |
| Ceiling | Yes, the biggest machine you can buy | Practically none |
| Cost curve | Gets steep at the top end | Roughly linear |
| If it breaks | Everything stops | Others carry on |
| Best first move for | A small system, or a database | A web tier with many independent requests |

Start with the simple option, and move to the harder one only when the numbers say so.

:::figure caption="Response time against how busy a server is. It climbs gently, then bends sharply upward."
<svg viewBox="0 0 320 230" role="img" aria-label="Curve of response time rising steeply as utilisation approaches 100 percent">
<line x1="40" y1="200" x2="305" y2="200" class="axis"/>
<line x1="40" y1="200" x2="40" y2="16" class="axis"/>
<polyline points="40,200 105,197 170,191 222,179 248,164 274,119 287,30" style="fill:none;stroke:var(--mat);stroke-width:2.5"/>
<line x1="248" y1="200" x2="248" y2="164" class="faint"/>
<line x1="274" y1="200" x2="274" y2="119" class="faint"/>
<text x="238" y="216" style="font-size:10px;fill:var(--muted)">80%</text>
<text x="264" y="216" style="font-size:10px;fill:var(--muted)">90%</text>
<text x="122" y="228" style="font-size:10px;fill:var(--muted)">how busy the server is</text>
<text x="44" y="30" style="font-size:10px;fill:var(--muted)">wait</text>
<text x="170" y="158" style="font-size:10px;fill:var(--ink)">5× at 80%</text>
<text x="200" y="104" style="font-size:10px;fill:var(--ink)">10× at 90%</text>
</svg>
:::

:::qc lvl=1
q: A tea stall serves a customer in 2 minutes and a customer arrives every 2 minutes, exactly on time. Is that a comfortable stall?
options: ["Yes, it keeps up exactly", "No, with any bit of randomness the queue grows and grows", "Yes, because the owner never rests"]
answer: 1
right: Right. Real arrivals bunch up. At 100 percent busy, any burst creates a queue that never fully clears. Healthy systems run well below full.
wrong: Customers do not arrive on a perfect schedule. What happens when two show up together and there is no spare time to catch up?
:::

## Turn people into numbers {lvl=2 id=s-numbers label="SDE-1"}

Before you choose anything, convert "a lot of users" into numbers. This is **back-of-the-envelope estimation**: round figures, quick multiplication, answers good to within a factor of two.

Say an app has 10 million users who open it on a given day, and each makes about 20 requests (loading a feed, liking, scrolling). A day has 86,400 seconds, and we round to about 100,000 for speed.

$$\text{requests/s} = \frac{U \times r}{86{,}400} = \frac{10^7 \times 20}{86{,}400} \approx 2{,}300$$

Read it as: total requests in a day, spread evenly over the seconds in a day. That is the **average**. Traffic is not even; evenings and events spike it, so design for a **peak**, commonly 2 to 5 times the average. With a peak factor of 4, that is about 9,000 requests per second.

Now servers. If one server can handle about 500 requests per second (you find this by testing, not guessing), you need 9,000 ÷ 500 = 18 servers at peak, and a few extra so one failure does not hurt. Storage works the same way: users × items per user × size per item × days.

| Quantity | Estimate |
|---|---|
| 10 M users × 20 requests ÷ 86,400 | about 2,300 requests/s average |
| Peak at 4× | about 9,000 requests/s |
| 500 requests/s per server | 18 servers, plus spares |
| 10 M users × 1 photo/day × 2 MB × 365 | about 7 petabytes a year |

:::qc lvl=2
q: 50 million daily users make 10 requests each. About how many requests per second on average?
options: ["About 580", "About 5,800", "About 58,000"]
answer: 1
right: Right. 500 million requests ÷ 86,400 is about 5,800.
wrong: Multiply first (50 million × 10 = 500 million), then divide by about 86,400. That is close to five and a half thousand.
:::

## Stateless servers {lvl=2 id=s-stateless label="SDE-1"}

Scaling out needs one property above all: **any server can handle any request**. Suppose server A remembers that you are logged in, in its own memory. Your next request lands on server B, which has never heard of you. You are logged out.

The fix is to make web servers **stateless**: they keep nothing about you between requests. The memory of who is logged in, what is in your cart, lives outside, in a shared store, and every server looks it up.

```python
# Stateful: breaks the moment a second server exists
sessions = {}                       # lives in this server's memory
def handle(req):
    return sessions[req.token]

# Stateless: any server can run this
def handle(req):
    return shared_store.get(req.token)   # e.g. a fast shared key-value store
```

Now servers are interchangeable, like taxis. Add ten during a sale, remove them afterwards, replace a crashed one without telling anyone. The state did not vanish; it moved into the **data tier** (databases and stores), which is why the data tier becomes the next problem.

:::qc lvl=2
q: Which design makes it easiest to add servers during a sale?
options: ["Each server keeps its users' shopping carts in its own memory", "Carts are stored in a shared database and servers hold nothing", "Each user is told to always use the same server by hand"]
answer: 1
right: Right. When servers hold nothing, a new one can start serving immediately and a dead one costs nothing.
wrong: If a cart exists only inside one server, what happens to it when that server is removed or fails?
:::

## Find the bottleneck {lvl=2 id=s-bottleneck label="SDE-1"}

A request touches many parts: the network, the web servers, maybe a cache, a database, a disk. Each can handle only so much per second. The system as a whole is capped by the smallest of them.

A simple routine:

1. **Measure** how busy each part is (CPU, memory, disk, network, database connections).
2. Find the one nearest 100 percent. That is the bottleneck.
3. Fix that part: make it faster, or share its work.
4. **Measure again.** A new bottleneck has appeared somewhere else. Repeat.

In the opener picture, the web servers scale out easily, but all of them ask one database. Doubling servers doubles the questions that database must answer. Typical remedies come in a ladder, each the subject of a later lesson: remember answers in a **cache** so fewer questions arrive; add **read replicas** (copies of the database that answer questions); and finally **partition** the data across several databases (sharding).

## Headroom: why 90 percent busy is not fine {lvl=3 id=s-headroom label="SDE-2"}

Why not run every server at 95 percent and save money? Because arrivals are random. A simple model of one server with random arrivals and a single queue gives:

$$T = \frac{s}{1-\rho}$$

where $s$ is how long one request takes alone (service time) and $\rho$ is how busy the server is, from 0 to 1. Read it as: the busier you are, the more the wait is multiplied. At 50 percent busy, a 20 ms request takes about 40 ms; at 80 percent, 100 ms; at 90 percent, 200 ms; at 95 percent, 400 ms. The curve in the figure above is exactly this.

Two lessons follow. First, plan to run at roughly 50 to 70 percent at peak [Inference: a common rule of thumb, not a law], so a burst or a failed server does not push you onto the steep part. Second, if you have 10 servers at 80 percent busy and one dies, the other nine must now run at about 89 percent, and latency jumps. Capacity planning must survive the loss of a machine (often called $N+1$, one spare).

Related is **tail latency**: the slowest 1 percent of requests. If one page needs 100 internal calls and each is slow 1 percent of the time, then about 63 percent of page loads hit at least one slow call ($1 - 0.99^{100}$). Averages hide the pain; engineers watch the 99th percentile.

:::qc lvl=3
q: Ten servers each at 80 percent busy. One fails and its load spreads evenly over the other nine. About how busy is each now?
options: ["About 80 percent", "About 89 percent", "About 100 percent"]
answer: 1
right: Right. Total load is 10 × 80 = 800 units; nine servers share it, so 800 ÷ 9 is about 89 percent. On the steep part of the curve, that is a large jump in wait.
wrong: Total work stays the same but is shared by one fewer machine. Compute 10 × 80 and divide by 9.
:::

## Amdahl's intuition {lvl=3 id=s-amdahl label="SDE-2"}

Another reason more machines do not give proportionally more speed: some part of any job cannot be shared. Think of a wedding feast. Ten cooks can chop vegetables ten times faster, but one person must still taste the final pot, and that step takes the same time however many cooks you hire.

Let $p$ be the fraction of the job that can be shared among $n$ workers; the remaining $1-p$ is serial. The new time, compared with the old, is the serial part plus the shared part divided by $n$:

$$S(n) = \frac{1}{(1-p) + p/n}$$

Read it as: the speed-up is one over the new fraction of the original time. With $p = 0.95$ and $n = 10$, $S = 1/(0.05 + 0.095) \approx 6.9$. With $n = 100$, $S \approx 16.8$. With a million workers, $S$ approaches $1/0.05 = 20$ and no more.

```python
def speedup(p, n):
    return 1 / ((1 - p) + p / n)

speedup(0.95, 10)      # about 6.9
speedup(0.95, 10**6)   # about 20: the serial 5% is a wall
```

In a web system, the "serial part" is anything every request must pass through one at a time: a lock on a counter, a single leader database, one message that must be processed in order. Real systems are often worse than Amdahl predicts because machines also spend time coordinating with each other; one model of this is Gunther's Universal Scalability Law [Unverified: name and exact form from memory], where adding too many workers can even make things slower.

## Reading the data tier {lvl=4 id=s-data label="SDE-3"}

At the leadership level, "scale it" means a sequence of choices, each with a price. A common ladder [Inference: typical, not the only way]:

1. **One box**: app and database together. Simple; fine for small products.
2. **Separate the tiers**, make web servers stateless, put several behind a load balancer.
3. **Cache** the hot reads so the database sees a fraction of the load.
4. **Read replicas** for read-heavy traffic; accept that replicas can lag behind the leader (see the replication lesson).
5. **Partition (shard)** the data when one leader cannot take the writes, and accept that cross-shard queries and transactions get harder.
6. **Asynchronous work** through queues for anything the user need not wait for (sending email, resizing images).
7. **Multiple regions** for latency and survival, which brings consistency trade-offs (see the consistency lesson).

Each step trades simplicity for capacity. A senior engineer's job is to take the next step only when measurements show the current one is running out, and to know what the step will cost in complexity, money and failure modes. Designing Data-Intensive Applications gives the vocabulary for load and performance, and for the trade-offs in steps 4 to 7.

:::qc lvl=4
q: A team has an overloaded single database. Everyone wants to shard it now. What is the better first question?
options: ["Which sharding key is best?", "Would caching or read replicas remove most of the load first?", "Which cloud provider is cheapest?"]
answer: 1
right: Right. Sharding is the heaviest step on the ladder. If most of the load is repeated reads, a cache or replicas may postpone it for years at much lower cost.
wrong: Sharding is hard to undo and complicates every later feature. What cheaper steps could remove load first?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Scale up means a bigger machine; scale out means more machines. Start simple, and move to scale out when the numbers demand it. {lvl=1}
2. A system is capped by its bottleneck: measure, fix the slowest part, measure again. {lvl=1}
3. Requests per second is users × requests per user ÷ 86,400, multiplied by a peak factor of 2 to 5. {lvl=2}
4. Stateless servers can be added, removed and replaced freely; the state moves to a shared store. {lvl=2}
5. Waiting grows like 1 ÷ (1 − utilisation), so keep headroom and survive the loss of a machine. {lvl=3}
6. Amdahl: the unshareable fraction of the job caps the speed-up at 1 ÷ (1 − p). {lvl=3}
7. The usual ladder is cache, then replicas, then sharding, then queues; each step costs complexity. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Adding servers in front of a single shared database moves the bottleneck, not the limit. {lvl=1}
- Using the daily average instead of the peak: the crowd at 10:00 a.m. is what breaks the site. {lvl=2}
- Keeping sessions or files on one server's own disk or memory silently makes scaling out impossible. {lvl=2}
- Planning for 100 percent utilisation: latency explodes long before that, and one failure tips you over. {lvl=3}
- Averages hide the slow tail; check the 99th percentile, not just the mean. {lvl=3}
- Scaling out before measuring: complexity is a cost, and a bigger single machine is sometimes the cheaper answer. {lvl=4}
:::
