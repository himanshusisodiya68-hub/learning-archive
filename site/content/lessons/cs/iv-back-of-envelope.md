---
title: Back-of-the-envelope estimation
summary: How to get from "a hundred million users" to "how many servers" in two minutes, with a few numbers you carry in your head.
ncert: []
up_to: SDE-3
builds_on: [Big-O and growth of cost, Memory hierarchy and caches, A framework for any design question]
notes_prompt: Explain to a friend how you would estimate how many messages per second a chat app with a hundred million users must handle, using only a pen.
margin:
  - kind: history
    title: Latency numbers
    text: 'The list of "latency numbers every programmer should know" was popularised by Jeff Dean in talks around 2009-2010 [Unverified]. The exact values drift as hardware improves, but the ratios between the rungs stay about the same.'
  - kind: tip
    title: Round hard
    text: 'Say a day is about 100,000 seconds (really 86,400) and a year is about 30 million. The answer only needs to be right to within a factor of two or three, and round numbers keep the arithmetic in your head.'
  - kind: olympiad
    title: Physics cousin
    text: 'Physicists call the same habit a Fermi estimate: break the unknown into pieces you can guess, multiply, and trust the answer to the nearest power of ten.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Scalability: describing load and performance (percentiles, load parameters)" }
  - { title: "A. Xu, System Design Interview", ref: "the back-of-the-envelope estimation chapter [Unverified]" }
cards:
  - { front: "How many seconds in a day, for estimating?", back: "86,400, so use about 100,000 (10 to the 5th). Dividing a daily total by 100,000 gives a per-second figure." }
  - { front: "Powers of two for storage?", back: "2^10 is about a thousand (KB), 2^20 a million (MB), 2^30 a billion (GB), 2^40 a trillion (TB), 2^50 a quadrillion (PB)." }
  - { front: "QPS from daily active users?", back: "DAU times actions per user per day, divided by about 100,000. Multiply by 2 to 3 for the peak." }
  - { front: "Storage per year?", back: "Items per day times bytes per item times 365, times the number of copies (often 3)." }
  - { front: "Order of magnitude of memory, SSD, same-data-centre and cross-continent latency?", back: "About 100 nanoseconds, 100 microseconds, 0.5 milliseconds and 150 milliseconds. Each step is far slower than the last." }
  - { front: "Servers needed?", back: "Peak QPS divided by one server's QPS, then divided by a target load such as 0.5 so there is headroom for failure and spikes." }
core:
  idea: 'Estimate by chaining simple multiplications from numbers you can guess: users, actions per user, size per action. Round to powers of ten, keep units, and use the answer only to decide what the design needs. A factor of two does not change the design; a factor of a thousand does.'
  formulas:
    - tex: '\text{QPS} = \dfrac{\text{DAU} \times \text{actions per user}}{86{,}400}'
      label: 'Average requests per second (peak is 2 to 3 times higher)'
    - tex: '\text{storage per year} = \text{items per day} \times \text{bytes per item} \times 365 \times \text{copies}'
      label: 'Disk needed'
    - tex: '\text{servers} = \dfrac{\text{peak QPS}}{\text{QPS per server} \times \text{target load}}'
      label: 'Machines, with headroom'
  conditions:
    - 'Inputs (users, sizes, capacities) are assumptions: state them aloud'
    - 'Traffic is averaged over a day, then scaled by a peak factor'
    - 'Per-server capacities are typical for simple requests and differ by workload'
    - 'The goal is the order of magnitude, so rounding is a feature'
  sign: 'Check units at every step: bytes versus bits, per day versus per second. Mixing them is the commonest way to be wrong by 8 or by 86,400.'
outcomes:
  - 'Use powers of two and ten for sizes and a day as about 100,000 seconds'
  - 'Place memory, SSD, network and disk latencies on a scale and reason about their ratios'
  - 'Compute QPS, storage, bandwidth and server counts from a few assumptions'
  - 'Run a five-estimate table and sanity-check each result'
  - 'Turn numbers into a design decision (one machine or many, cache or not)'
opener:
  story: |
    A friend who works at a chat company says: "We have about a hundred million people using the app every day." You ask, half joking, how many servers that needs. He laughs and says it depends, and then, to your surprise, he answers in ten seconds anyway.

    He did not look anything up. He guessed that each person sends about forty messages a day, divided by roughly a hundred thousand seconds in a day, and multiplied by three for the busy hour. That was the whole trick: a few friendly numbers multiplied together.

    How many messages per second do you think that is: thousands, hundreds of thousands, or millions?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="An envelope with a chain of multiplications on it"><rect x="30" y="50" width="260" height="150" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M30 50 L160 140 L290 50" style="fill:none;stroke:var(--ink);stroke-width:2"/><g style="font-size:13px;fill:var(--c)"><text x="72" y="178">100M × 40 ÷ 10⁵</text></g><g style="font-size:11px;fill:var(--muted)"><text x="40" y="222">users × messages ÷ seconds in a day</text></g><text x="120" y="36" style="font-size:12px;fill:var(--ink)">about 40,000 per second</text></svg>'
life:
  - 'Before buying rice for a wedding you guess the number of guests, a plate per guest, grains per plate, then buy by the sack. That is an estimate.'
  - 'A city planning a flyover estimates cars per hour from population and trips per person before choosing the number of lanes.'
  - 'Electricity bills: the lights, fans and AC in watts times hours a day gives units a month, near enough to check the bill.'
  - 'A cricket board estimating stadium demand: fans, matches, price per ticket, to see if a new ground pays for itself.'
  - 'Every cloud bill is an estimate that someone checked in advance: servers times hours times price.'
models:
  - name: 'Chain the guessable'
    text: 'Split a number you cannot know into pieces you can guess (people, times each, size each) and multiply. Errors partly cancel, and you discover which piece matters most. This works for budgets, market sizes and travel time.'
  - name: 'Order of magnitude first'
    text: 'Knowing whether an answer is thousands or millions matters more than the third digit. Decisions usually change only when the answer changes by a factor of ten.'
  - name: 'Check the units'
    text: 'Units are a free error-checker: if a result has the wrong units (bits when you need bytes, per day when you need per second), it is wrong before you look at the digits.'
links:
  - leaf: 'mat/fermi-estimation'
    name: 'Fermi estimation'
    same: 'Both break a number you cannot look up into guessable pieces, multiply them and trust the result to within a power of ten.'
    differs: 'Fermi puzzles (piano tuners in a city) satisfy curiosity; engineering estimates use known unit costs and end in a design decision.'
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'The latency table is the memory hierarchy extended beyond one machine to disks and networks.'
    differs: 'That lesson explains why each level is slower; here we use the ratios to size systems.'
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'Both reason about how cost grows when the input grows, ignoring constants that do not change the answer.'
    differs: 'Big-O describes growth of an algorithm; an estimate gives actual numbers for one system.'
  - leaf: 'cs/scalability'
    name: 'Scaling up and scaling out'
    same: 'Estimates tell you whether one big machine is enough or you must spread out.'
    differs: 'Scalability explains the options; the estimate decides which one this system needs.'
next:
  q: 'With numbers in hand you can size almost any system. But what do the real designs look like: a news feed for 100 million people, a chat app, a ride-hailing service, a store for photos and files?'
  leaf: 'cs/iv-classic-designs'
  name: 'Classic designs: feed, chat, ride-hailing, storage'
symbols:
  - s: 'DAU'
    means: 'daily active users: people who use the product on a given day (count)'
  - s: 'QPS'
    means: 'queries per second: requests per second (count per second)'
  - s: '10^5'
    means: 'ten to the fifth power: 100,000, our rounded count of seconds in a day'
  - s: 'KB, MB, GB, TB, PB'
    means: 'kilobyte, megabyte, gigabyte, terabyte, petabyte: each about a thousand times the previous'
  - s: 'ns, µs, ms'
    means: 'nanosecond, microsecond, millisecond: a billionth, a millionth and a thousandth of a second'
---

:::hook
q: A chat app has 100 million daily users, each sending about 40 messages a day. Roughly how many messages per second on average?
options: ["About 2,000", "About 40,000 to 50,000", "About 4 million"]
answer: 1
right: Yes. 100 million times 40 is 4 billion a day. A day has about 100,000 seconds, so 4 billion divided by 100,000 is 40,000 a second (46,000 with 86,400). In the busy hour, double or triple it.
wrong: Do the chain: 100 million times 40 is 4 billion messages a day. Now divide by the seconds in a day, about 100,000.
:::

## Round numbers on purpose {lvl=1 id=s-round label="Foundations"}

A design decision usually does not depend on the third digit. One server, ten servers, a thousand servers: those are different designs, but 46,000 versus 50,000 requests a second is the same design. So we **round hard** and spend our care on getting the power of ten right.

Two facts to carry:

- A day has 86,400 seconds, which we round to **about 100,000** ($10^5$). To turn a per-day count into a per-second count, divide by $10^5$.
- Memory is counted in powers of two, and each ten steps is about a thousand times more:

| Power | Exact | Name | About |
|---|---|---|---|
| $2^{10}$ | 1,024 | kilobyte (KB) | a thousand bytes: a paragraph of text |
| $2^{20}$ | 1,048,576 | megabyte (MB) | a million: one photo |
| $2^{30}$ | 1,073,741,824 | gigabyte (GB) | a billion: a film in low quality |
| $2^{40}$ | about $1.1\times10^{12}$ | terabyte (TB) | a trillion: a big disk |
| $2^{50}$ | about $1.1\times10^{15}$ | petabyte (PB) | a quadrillion: a data centre |

:::qc lvl=1
q: A service handles 8,640,000 requests a day. About how many per second on average?
options: ["About 10", "About 100", "About 1,000"]
answer: 1
right: Yes. 8,640,000 divided by 86,400 is exactly 100 a second.
wrong: Divide by the seconds in a day. Using 100,000 as the round figure, 8.6 million divided by 100,000 is about 86, which is near 100.
:::

## Latency numbers {lvl=2 id=s-latency label="SDE-1"}

Latency is how long one operation takes. Five rungs, each far slower than the one before. The values are rough, they change with hardware, and only the ratios matter. [Unverified: approximate orders of magnitude.]

| Operation | Time | If 1 ns were 1 second |
|---|---|---|
| Read from the processor's cache | about 1 ns | 1 second |
| Read from main memory | about 100 ns | under 2 minutes |
| Random read from an SSD | about 100 µs | about 28 hours |
| Round trip inside one data centre | about 0.5 ms | about 6 days |
| Seek on a spinning hard disk | about 10 ms | about 4 months |
| Round trip across continents | about 150 ms | about 5 years |

:::figure caption="Latency on a log scale: each gridline is ten times more. The bars run from a nanosecond to a trip across the ocean."
<svg viewBox="0 0 340 170" role="img" aria-label="Log-scale bars of latency from cache to cross-continent"><g style="font-size:10px;fill:var(--ink)"><text x="4" y="22">CPU cache</text><text x="4" y="48">Memory</text><text x="4" y="74">SSD read</text><text x="4" y="100">Same data centre</text><text x="4" y="126">Hard disk seek</text><text x="4" y="152">Across continents</text></g><g style="fill:var(--c)"><rect x="100" y="12" width="3" height="14"/><rect x="100" y="38" width="60" height="14"/><rect x="100" y="64" width="150" height="14"/><rect x="100" y="90" width="171" height="14"/><rect x="100" y="116" width="210" height="14"/><rect x="100" y="142" width="240" height="14" style="opacity:.75"/></g><g style="stroke:var(--rule);stroke-width:.5"><path d="M100 4 L100 160 M130 4 L130 160 M160 4 L160 160 M190 4 L190 160 M220 4 L220 160 M250 4 L250 160 M280 4 L280 160 M310 4 L310 160"/></g></svg>
:::

Consequences you can use:

- Memory is about a thousand times faster than an SSD: **a cache pays for itself**.
- A network call inside a data centre costs about as much as 5,000 memory reads: **do not make one per item in a loop**.
- A trip across an ocean costs 150 ms every time: **put copies of data near users** (CDNs), and avoid chains of cross-ocean calls.

## Five formulas {lvl=2 id=s-formulas label="SDE-1"}

1. **Average QPS** = DAU × actions per user per day ÷ 86,400. Read it as: total actions in a day spread over every second.
2. **Peak QPS** = average × 2 to 3. People are not evenly spread over the day; the busy hour is much busier than the mean.
3. **Storage per year** = items per day × bytes per item × 365 × copies. Data is usually stored three times for safety.
4. **Bandwidth** = QPS × bytes per request. Multiply by 8 to turn bytes a second into bits a second, which is how networks are rated.
5. **Servers** = peak QPS ÷ (QPS one server handles × target load). Aim for a load of about 0.5, so a failed machine or a spike does not topple the rest.

Typical single-machine capacities, to be used as starting guesses [Inference]: a web server handles roughly 1,000 to 10,000 simple requests a second; a database a few thousand simple queries a second; a network card 10 gigabits a second (about 1.25 GB a second); a server holds tens of terabytes on disk.

```python
def qps(dau, per_user, peak=3):
    avg = dau * per_user / 86_400
    return avg, avg * peak

def storage_tb_per_year(per_day, size_bytes, copies=3):
    return per_day * size_bytes * 365 * copies / 1e12

print(qps(100e6, 40))                     # about 46,000 and 139,000 a second
print(storage_tb_per_year(4e9, 100, 1))   # 146 TB for one copy
```

:::qc lvl=2
q: A photo is 2 MB. A service receives 100 uploads a second. What incoming bandwidth, in bytes a second?
options: ["About 200 KB a second", "About 200 MB a second", "About 200 GB a second"]
answer: 1
right: Yes. 100 times 2 MB is 200 MB a second, about 1.6 gigabits a second.
wrong: Multiply the rate by the size: 100 times 2 megabytes.
:::

## Five worked estimates {lvl=3 id=s-table label="SDE-2"}

Assumptions are ours, stated up front. Divide by 86,400 for exactness; rounding to $10^5$ would give about 15% lower numbers, which does not matter here.

| # | Question | Chain | Answer |
|---|---|---|---|
| 1 | Chat messages per second (100M DAU, 40 messages each) | $100\text{M}\times40 = 4\text{B}$ a day; $\div 86{,}400$; peak $\times 3$ | about 46,000 a second on average, 139,000 at peak |
| 2 | Chat storage per year (100 bytes a message) | $4\text{B}\times100\text{ B} = 400\text{ GB}$ a day; $\times365$; $\times3$ copies | 146 TB a year, 438 TB with three copies |
| 3 | Photo uploads (10M a day, 2 MB each) | $10\text{M}\div86{,}400 = 116$ a second; $\times2\text{ MB}$ | 116 uploads and about 230 MB a second in, about 1.9 Gbit a second; 20 TB a day, 7.3 PB a year |
| 4 | Live video: 10M viewers at 3 Mbit a second | $10^7\times3\times10^6$ bits a second | 30 Tbit a second, about 3.75 TB a second: far beyond one site, so a CDN is essential |
| 5 | Servers for estimate 1 (5,000 requests a second each, target load 0.5) | $139{,}000\div5{,}000 = 28$; $\div0.5$ | about 56 servers |

Look at what the table tells the designer: estimate 2 says a year of chat text (146 TB) is only a few big disks, so storing it is not the hard part. Estimate 4 shows that streaming cannot be served from one place at all. Estimate 3 says photo storage grows by petabytes a year: object storage, with old photos moved to cheaper disks. **The numbers decide where the difficulty is.**

## Habits that keep estimates honest {lvl=3 id=s-habits label="SDE-2"}

- **State every assumption aloud** ("assume 40 messages a user a day"). The interviewer may correct it; that is fine.
- **Keep units on every line**, and write bits and bytes differently (Mbit versus MB).
- **Separate reads and writes.** Most products read 10 to 100 times as often as they write; the two need different designs.
- **Sanity-check against something you know.** Does 146 TB a year sound like a large company? It is small; a data centre holds petabytes. Does one machine do 139,000 requests a second? No.
- **Use the 80/20 rule for caches**: about 20% of items often get about 80% of reads, so a cache holding 20% of the data may catch most traffic. [Inference: a rule of thumb that depends on the workload.]
- **Round, then multiply, then round again.** Do not carry five digits.

## From numbers to decisions {lvl=4 id=s-decisions label="SDE-3"}

An estimate is useful only when it moves a decision. A few thresholds, again rough [Inference]:

| If the estimate says... | The decision it suggests |
|---|---|
| Under a few thousand writes a second, under a few TB | One well-run database, with a replica for safety |
| Data of tens of TB, or writes in the tens of thousands a second | Partition across machines |
| Reads far larger than writes, and hot items repeat | Cache in memory in front of the store |
| Bytes in the PB range, mostly large files | Object storage, with a CDN for popular items |
| Users spread across continents, with 150 ms per round trip | Regional copies; avoid chains of cross-ocean calls |
| Peak at 3 times the average, for short bursts | Queues and autoscaling to absorb it instead of provisioning for the peak all year |

**Cost** is the last number. 56 servers at a few thousand rupees a month each is a different business from 5,600. At SDE-3, you are expected to ask what the design costs and whether a simpler option halves it.

A last stress test is **dependent latency**: if one page view needs 8 calls in sequence and each crosses an ocean, that is $8\times150 = 1{,}200$ ms before any work happens. The estimate alone shows the design is wrong, before anything is built.

:::qc lvl=4
q: A page view needs 8 sequential calls to a data centre on another continent (150 ms round trip each). Roughly how long does the page wait on the network?
options: ["About 150 ms", "About 1.2 seconds", "About 12 seconds"]
answer: 1
right: Yes. Sequential calls add up: 8 times 150 ms is 1,200 ms. Fix it by batching the calls, running them in parallel, or moving data closer.
wrong: The calls happen one after another, so their times add rather than overlap.
:::

## Common slips {lvl=2 id=s-slips label="SDE-1"}

- Confusing bits and bytes: a 3 Mbit stream is 0.375 MB a second.
- Using the daily average for capacity and forgetting the peak.
- Forgetting copies: three replicas triple the disk.
- Forgetting that DAU is not users in total, and not users at the same instant.
- Treating a rule-of-thumb per-server capacity as a promise: measure for the real workload.
- Spending a minute on the last digit when the interviewer wants the order of magnitude.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Round hard: a day is about $10^5$ seconds; each ten steps of powers of two is a thousand times more. {lvl=1}
2. Latency rungs: memory about 100 ns, SSD about 100 µs, same data centre about 0.5 ms, across continents about 150 ms. {lvl=2}
3. QPS = DAU times actions per user, divided by 86,400; peak is 2 to 3 times the average. {lvl=2}
4. Storage per year = items per day times size times 365 times copies; bandwidth = QPS times size. {lvl=2}
5. Servers = peak QPS divided by per-server capacity and a target load of about 0.5. {lvl=3}
6. State assumptions, keep units, separate reads from writes and sanity-check. {lvl=3}
7. Use the numbers to decide: one machine or many, cache or not, regional copies, and cost. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Always write units next to numbers. Bits versus bytes and per day versus per second are the classic errors. {lvl=1}
- A rough number with a stated assumption beats a precise number with a hidden one. {lvl=2}
- Capacity numbers per server are guesses until measured on your own workload. {lvl=3}
- A cache can only help if the hot data fits in memory: estimate its size before promising it. {lvl=3}
- Sum sequential latencies; do not average them. {lvl=4}
:::
