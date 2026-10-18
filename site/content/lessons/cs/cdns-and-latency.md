---
title: CDNs and latency
summary: Why a website's distance matters more than your internet plan, and how big sites keep a copy near you.
ncert: []
up_to: SDE-3
builds_on: [DNS and HTTP, TCP/IP and the layers, Caching]
notes_prompt: Explain to a friend why a faster internet plan does not make a faraway website open instantly, and how a copy of the site kept in their city fixes it.
margin:
  - kind: history
    title: History
    text: Content delivery networks began in the late 1990s, when web pioneers saw that popular sites crashed under crowds and that distance slowed everyone far away [Unverified]. Akamai was one of the first companies to sell the idea [Unverified].
  - kind: tip
    title: Interview favourite
    text: 'For "make this page load faster for global users" the standard answer: cut round trips, cache static content on a CDN, put dynamic servers in more regions, and measure the 95th and 99th percentile, not just the average.'
  - kind: olympiad
    title: Physics link
    text: Light in glass fibre travels at about two thirds of its speed in empty space, because the glass slows it down. No engineering can beat that, so the only way to cut latency is to shorten the distance.
books:
  - { title: "I. Grigorik, High Performance Browser Networking", ref: "Ch. 1 Primer on Latency and Bandwidth [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliable, Scalable and Maintainable Applications: describing performance (percentiles)" }
  - { title: "J. Kurose and K. Ross, Computer Networking: A Top-Down Approach", ref: "Ch. 2 Application Layer: Web caching and content distribution [Unverified]" }
cards:
  - { front: "Why can't latency go below a certain value?", back: "Signals cannot travel faster than light, and in fibre they travel at about 200,000 km/s. A 13,000 km path costs at least 65 ms one way, 130 ms round trip." }
  - { front: "Bandwidth vs latency: the highway picture.", back: "Bandwidth is the number of lanes (how much per second); latency is the length of the road (how long one car takes). Many lanes do not shorten the road." }
  - { front: "Time to download a file, as a formula?", back: "Roughly setup round trips × RTT + size ÷ bandwidth. Small files are dominated by latency; huge files by bandwidth." }
  - { front: "What is a CDN?", back: "A content delivery network: many servers in many cities that keep copies of popular content so users are served from a nearby one, not from the distant origin." }
  - { front: "Cache hit vs miss at the edge?", back: "Hit: the edge already has the file and answers at once. Miss: it fetches from the origin, passes it on and keeps a copy for the next visitor." }
  - { front: "Why use the 99th percentile as well as the average?", back: "A few slow requests hurt real users and add up: a page making 30 calls hits at least one slow one about 26% of the time if each has a 1% chance." }
core:
  idea: 'Delay has two parts: **latency** (how long one trip takes, set by distance and the speed of light) and **bandwidth** (how much flows per second). Most page loads are limited by latency, so sites keep **copies of content near users** on a CDN and cut the number of round trips.'
  formulas:
    - tex: '\text{RTT}_{\min} = \dfrac{2d}{v}'
      label: 'Best possible round trip over distance d at signal speed v'
    - tex: 'T \approx n \times \text{RTT} + \dfrac{S}{B}'
      label: 'Download time: n round trips, S bytes, bandwidth B'
    - tex: 'L_{\text{avg}} = h\,L_{\text{edge}} + (1-h)\,L_{\text{origin}}'
      label: 'Average latency with hit ratio h'
  conditions:
    - 'Signals in fibre travel at about 2×10⁵ km/s (two thirds of the speed of light in vacuum); real cable routes are longer than the straight line'
    - 'Content is cacheable: the same bytes can be served to many users for a while'
    - 'Hit ratio is high enough that most requests never reach the origin'
  sign: 'Buying more bandwidth never reduces latency. A tiny request across an ocean takes the same time on a 10 Mbit/s plan and a 1 Gbit/s plan.'
outcomes:
  - 'Compute the minimum possible round-trip time for a given distance'
  - 'Explain the difference between latency and bandwidth with an everyday picture'
  - 'Estimate download time as round trips plus size over bandwidth'
  - 'Describe how a CDN''s edge cache works, including hits, misses, TTLs and purging'
  - 'Explain tail latency and why a percentile matters more than an average at scale'
opener:
  story: |
    You have a 500 Mbit/s fibre plan, and a small website in the US still takes a moment to wake up, while a giant site like YouTube, Hotstar or Amazon loads almost instantly on the same line. Speed tests say your connection is great.

    Here is a hint. On Hotstar during a cricket final, millions of Indians stream video at the same time and it does not break. It almost certainly does not fetch the video from a server in California for every viewer [Inference]. If it did, the Pacific Ocean cable alone would burst.

    So what is actually slow when a site is far away, and where is the copy of the video you are watching right now?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A user in India reaches a nearby edge server in Mumbai quickly, or a far origin server in the US slowly"><rect x="10" y="20" width="300" height="190" rx="10" style="fill:none;stroke:var(--rule);stroke-dasharray:3 3"/><circle cx="60" cy="120" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="40" y="150" style="font-size:10px;fill:var(--ink)">you, Delhi</text><rect x="116" y="104" width="36" height="32" rx="5" style="fill:var(--c);stroke:var(--c)"/><text x="104" y="98" style="font-size:10px;fill:var(--c)">edge, Mumbai</text><rect x="262" y="40" width="40" height="40" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="244" y="100" style="font-size:10px;fill:var(--ink)">origin, USA</text><path d="M76 120 L114 120" style="fill:none;stroke:var(--c);stroke-width:3"/><text x="78" y="112" style="font-size:9px;fill:var(--c)">~12 ms</text><path d="M154 120 C190 120 210 70 260 62" style="fill:none;stroke:var(--muted);stroke-width:1.6;stroke-dasharray:6 4"/><text x="176" y="160" style="font-size:9px;fill:var(--muted)">~200 ms, only</text><text x="176" y="172" style="font-size:9px;fill:var(--muted)">on a cache miss</text><text x="22" y="200" style="font-size:10px;fill:var(--muted)">a copy close by beats a faster wire</text></svg>'
life:
  - 'Live cricket on streaming apps: the video segments are typically served from servers inside or near Indian cities, not from abroad. [Inference: the providers do not publish their layouts.]'
  - 'A shopping app''s product images appear instantly because they come from an edge server, while the "place order" step takes longer because it must reach the real database.'
  - 'A video call to Canada has a small but noticeable delay even on the best connection; physics, not your plan.'
  - 'Software and game updates download quickly on release day because millions of copies are stored in servers near users.'
  - 'Online gamers care about "ping", which is the round-trip time to the game server, more than their plan''s megabits.'
models:
  - name: 'Move the thing, not the people'
    text: 'When many people want the same item, ship copies close to them once rather than make each one travel. Libraries with branches, warehouses near cities and local kitchens all do this.'
  - name: 'Latency and throughput are different currencies'
    text: 'A cargo ship has huge capacity and slow delivery; a courier on a bike is quick with tiny capacity. Before improving a system, ask which one is the bottleneck.'
  - name: 'Averages hide the tail'
    text: 'If a task needs many parts, its speed is set by the slowest part. Judge a restaurant by how long the slowest order takes, not the average one.'
links:
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'A CDN is a cache: small, fast and near, backed by large, slow and far. Hit ratio decides the average cost in both places.'
    differs: 'A CPU cache holds copies for nanoseconds; an edge cache holds them for minutes or days, and must worry about stale copies.'
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'Edge caching uses the same rules of keys, TTLs, eviction and invalidation as any cache.'
    differs: 'The edge cache is spread over hundreds of cities, so purging a file means telling all of them.'
  - leaf: 'phy/total-internal-reflection'
    name: 'Total internal reflection'
    same: 'Light is trapped inside glass fibre by total internal reflection, and the glass slows it to about two thirds of its vacuum speed.'
    differs: 'Physics gives the floor for latency; software can only add to it.'
next:
  q: 'Every hop between you and the server can read or change what passes through it, including a CDN in between. How can two strangers who have never met agree on a secret code over a wire that everyone can see?'
  leaf: 'cs/cryptography-basics'
  name: 'Hashing, encryption and signatures'
symbols:
  - s: 'd'
    means: 'distance the signal travels, one way (kilometres)'
  - s: 'v'
    means: 'speed of the signal in the cable, about 200,000 km/s in glass fibre (km/s)'
  - s: '\text{RTT}'
    means: 'round-trip time: there and back (seconds or milliseconds)'
  - s: 'B'
    means: 'bandwidth: how many bits per second the link can carry (bit/s)'
  - s: 'S'
    means: 'size of the data to transfer (bits, or bytes times 8)'
  - s: 'h'
    means: 'hit ratio: fraction of requests answered from the cache (0 to 1)'
  - s: 'p99'
    means: '99th percentile: the time that 99 out of 100 requests beat (milliseconds)'
---

:::hook
q: You upgrade from a 50 Mbit/s plan to a 500 Mbit/s plan. How much faster does a tiny chat message reach a server 13,000 km away?
options: ["10 times faster", "About twice as fast", "Practically no change"]
answer: 2
right: Right. A tiny message is limited by the round trip over the distance, which depends on the speed of light in the cable. Bandwidth only helps when there is a lot of data to move.
wrong: Bandwidth is how much fits through per second. For a tiny message, the wait is the travel time. What sets that?
:::

## Two kinds of slow {lvl=1 id=s-two label="Foundations"}

Imagine a road between two cities. Two numbers describe it. The **length** of the road decides how long one car takes to get through. The **number of lanes** decides how many cars arrive per hour. These are independent: adding lanes never shortens the road, and a short road with one lane still carries few cars.

In networks the length of the road is **latency**, the time for one message to get from A to B (and, for a conversation, there and back: the **round-trip time**, or RTT). The number of lanes is **bandwidth**, how many bits flow per second, which is what your internet plan sells.

A small web request is a lone car: it cares about the road's length, not the lanes. A full-HD film is a convoy of millions of cars: once it is moving, the lanes matter most. A web page is mostly many small cars, which is why latency, not the plan you pay for, so often decides how fast it feels.

:::qc lvl=1
q: Which improves the delay of a tiny request to a far server: more bandwidth, or a server closer to you?
options: ["More bandwidth", "A closer server", "Both equally"]
answer: 1
right: Right. A tiny request is limited by the length of the road. A closer server shortens it.
wrong: Which of the two changes the length of the road, and which only changes the number of lanes?
:::

## The speed-of-light floor {lvl=1 id=s-light label="Foundations"}

Nothing travels faster than light, and inside a glass fibre light goes slower than in empty space, at about **200,000 km per second**, two thirds of the vacuum speed, because the glass slows it. (This is the same effect that bends light in a lens; the beam is kept inside the fibre by total internal reflection.) So the best-case time over a distance $d$ is $d/v$ one way, and the round trip is

$$\text{RTT}_{\min} = \frac{2d}{v}$$

Read it as: twice the distance, divided by the signal speed. From Delhi to Mumbai, about 1,150 km in a straight line, one way takes $1150/200000 = 0.00575$ s, nearly 6 ms, so the round trip is about 11.5 ms. To a server 13,000 km away it is $2 \times 13000 / 200000 = 0.13$ s, **130 ms**, and that is the floor: real cables follow sea beds and coastlines, so they are longer, and every router adds a little queueing. A measured 200 ms is normal. [Unverified: distances are approximate great-circle figures from memory.]

Now the cost adds up, because a page is a conversation, not one message. DNS, TCP, TLS and the request each need a round trip (see the previous lesson), so four round trips at 130 ms is over half a second before the first byte, and no bandwidth will fix it.

:::qc lvl=1
q: A server is 6,000 km away by cable and signals move at 200,000 km/s. What is the minimum round-trip time?
options: ["30 ms", "60 ms", "120 ms"]
answer: 1
right: Right. 2 × 6000 / 200,000 = 0.06 s = 60 ms.
wrong: Round trip means twice the distance. Divide 12,000 km by 200,000 km/s.
:::

## Time to download {lvl=2 id=s-download label="SDE-1"}

Put the two together. To fetch something you pay for $n$ round trips of setup and request, then for the data itself at the bandwidth $B$:

$$T \approx n \times \text{RTT} + \frac{S}{B}$$

Read it as: the waiting for conversation, plus the pouring of the data. Try a 5 MB file ($S = 40$ megabits) on a 40 Mbit/s plan with a 150 ms RTT and three round trips of setup: $T = 3 \times 0.15 + 40/40 = 0.45 + 1.0 = 1.45$ s. Now move to a 400 Mbit/s plan: $0.45 + 0.1 = 0.55$ s. Ten times the plan, under three times faster, since the 0.45 s of waiting did not shrink. And for a tiny file ($S$ near zero), the time is only $n \times$ RTT.

So there are two levers. For big downloads, raise bandwidth. For everything else, **cut round trips** (reuse connections, HTTP/2 and 3, fewer requests) or **cut RTT** by moving the data closer. The second is what a CDN is for.

```python
def download_time(size_mb, plan_mbit, rtt_ms, setup_trips=3):
    wait = setup_trips * rtt_ms / 1000          # conversation
    pour = size_mb * 8 / plan_mbit              # megabits / (megabit/s)
    return wait + pour

print(download_time(5, 40, 150))    # 1.45 s
print(download_time(5, 400, 150))   # 0.55 s: 10x plan, 2.6x faster
```

:::qc lvl=2
q: A page of small files takes 2 s on a 100 Mbit/s plan and is limited by latency. Roughly how long on a 1 Gbit/s plan, with the same RTT?
options: ["0.2 s", "About 2 s, nearly unchanged", "20 s"]
answer: 1
right: Right. If latency dominates, bandwidth barely helps. You would need fewer round trips or a nearer server.
wrong: What part of the time did the extra lanes change? Look at which term in the formula dominates.
:::

## CDNs: a copy near you {lvl=2 id=s-cdn label="SDE-1"}

If the road cannot be shortened, move the destination. A **content delivery network** (CDN) is a company's fleet of servers in hundreds of cities, called **edge** servers or points of presence. They keep copies of popular content, so most users are served from a server a few milliseconds away. The company's own server, where the original lives, is the **origin**.

Here is the life of one request:

1. Your DNS lookup for `images.shop.in` is answered with the address of a **nearby edge server**, not the origin. (Providers choose using your resolver's location or by announcing the same address from many places, called anycast.) [Inference: the exact method varies by provider.]
2. If the edge **has** the file (a **cache hit**), it replies at once.
3. If it does not (a **miss**), it fetches the file from the origin, passes it on, and **keeps a copy** for the next person.

The origin sees a small fraction of the traffic, and users see short round trips. Content that is the same for everyone (images, video, scripts, stylesheets) caches best. A personal page, such as your bank balance, cannot be shared and usually goes to the origin.

**Why do users in India often reach Mumbai?** Because that is where the edge servers, and many undersea cables, are. Big providers place servers in Mumbai, Delhi, Chennai and other cities, as well as in large data-centre hubs, so a Delhi user is typically served from the nearest of those. [Inference: provider layouts are not all public, and the nearest city depends on the network path, not just the map.]

:::figure caption="Cache hit and miss. A hit stays near you; a miss pays for the long trip to the origin once, then the copy serves everyone after."
<svg viewBox="0 0 360 160" role="img" aria-label="User, edge server and origin; hit path short, miss path long">
<g style="font-size:11px;text-anchor:middle">
<g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"><rect x="8" y="60" width="56" height="40" rx="6"/><rect x="152" y="60" width="64" height="40" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface))"/><rect x="296" y="60" width="56" height="40" rx="6"/></g>
<g style="fill:var(--ink)"><text x="36" y="84">user</text><text x="184" y="84">edge</text><text x="324" y="84">origin</text></g>
<path d="M64 74 L152 74" style="fill:none;stroke:var(--c);stroke-width:2.6"/>
<path d="M216 74 L296 74" style="fill:none;stroke:var(--muted);stroke-width:1.6;stroke-dasharray:6 4"/>
<g style="font-size:10px;fill:var(--muted)"><text x="108" y="64" style="fill:var(--c)">hit: ~10 ms</text><text x="256" y="64">miss: +150 ms</text><text x="184" y="124">keeps a copy for next time</text></g>
</g>
</svg>
:::

:::qc lvl=2
q: What happens on a cache miss at an edge server?
options: ["The user gets an error", "The edge fetches from the origin, replies, and keeps a copy", "The edge deletes its cache"]
answer: 1
right: Right. The first visitor pays the long trip; later visitors get the stored copy.
wrong: The user should still get the page. Where does the edge get the file from when it has none?
:::

## Hit ratio, TTL and purging {lvl=3 id=s-hit label="SDE-2"}

How good a CDN is depends on its **hit ratio** $h$, the fraction of requests it can answer itself. The average latency is

$$L_{\text{avg}} = h\,L_{\text{edge}} + (1-h)\,L_{\text{origin}}$$

Read it as: hits cost the short time, misses the long time, weighted by how often each happens. With 20 ms at the edge, 220 ms via the origin and $h = 0.95$: $0.95 \times 20 + 0.05 \times 220 = 30$ ms. If $h$ falls to 0.7 the average is $0.7 \times 20 + 0.3 \times 220 = 80$ ms. Each point of hit ratio matters.

What raises it? Long **TTLs** (the `Cache-Control: max-age` header tells the edge how long a copy is good), an **origin shield** (one middle cache so that a miss at fifty edges becomes one request to the origin), and **cache keys** that ignore noise (so `?utm_source=...` does not make each link a new item).

What is the cost? **Staleness**. If you change a price while the edge holds the old page for an hour, some users see the old price. Three fixes:

- **Purge**: ask the CDN to delete a file everywhere now (fast, but a command to hundreds of cities, so it takes seconds).
- **Versioned file names**: `app.8f3a2c.js` changes name when content changes, so old copies are never reused and can be cached for a year. This is the standard approach for scripts and images.
- **Short TTL for pages that change often**, or `stale-while-revalidate`: serve the old copy while fetching a new one in the background.

```python
# A tiny edge cache with a TTL (the idea, not a real CDN).
import time
cache = {}                                  # url -> (body, expires_at)
def get(url, fetch_origin, ttl=300):
    hit = cache.get(url)
    if hit and hit[1] > time.time():
        return hit[0]                       # hit: no trip to the origin
    body = fetch_origin(url)                # miss: long trip
    cache[url] = (body, time.time() + ttl)
    return body
```

:::qc lvl=3
q: A CDN has hit ratio 0.9, edge latency 20 ms and origin latency 220 ms. What is the average latency?
options: ["40 ms", "110 ms", "200 ms"]
answer: 0
right: Right. 0.9 × 20 + 0.1 × 220 = 18 + 22 = 40 ms.
wrong: Weight each latency by how often it happens: 90% at 20 ms, 10% at 220 ms.
:::

## The tail: why the average lies {lvl=4 id=s-tail label="SDE-3"}

Averages hide a problem. A **percentile** is the time that a given share of requests beat: the 99th percentile (**p99**) is the time that 99 out of 100 requests are faster than. The unlucky 1% is the **tail**, and at scale it matters far more than it sounds, for two reasons.

First, a busy site has many users, so 1% is a crowd. Second, one page view often triggers many calls (to a feed, ads, profile, search), and the page is as slow as the **slowest** one. If each of 30 backend calls has a 1% chance of being slow, the chance that a page hits at least one slow call is $1 - 0.99^{30} \approx 26\%$. A "rare" slowness hits a quarter of page views. This is the central point of the "tail at scale" argument made by Google engineers [Unverified: authors and year].

What do designers do?

- **Measure percentiles, not means**, and set targets such as "p99 under 300 ms". (*Designing Data-Intensive Applications*, Chapter 1, discusses this under describing performance.)
- **Hedge**: if a call has not answered in, say, the p95 time, send a second copy to another replica and use whichever answers first.
- **Go multi-region**: run copies of the application near each user region, so that dynamic requests also have short round trips. The price is the hard problem of keeping the copies consistent (see the data systems pillar).
- **Cut the number of calls** in the critical path, or run them in parallel.

A design question you can now reason about: "Users in India report slow checkout." Check the p99 per region; find which step needs the long trip (usually a database in another region); then either move that data nearer, replicate it for reading, or answer from a cache.

:::qc lvl=4
q: A page makes 10 independent calls, each with a 5% chance of being slow. About what fraction of page views contain at least one slow call?
options: ["5%", "About 40%", "50%"]
answer: 1
right: Right. 1 − 0.95¹⁰ ≈ 0.40, so about 40% of page views are affected, though each call is slow only 5% of the time.
wrong: Compute the chance that all 10 calls are fast, 0.95¹⁰, and subtract from 1.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Latency (the length of the road) and bandwidth (the number of lanes) are different; a small request cares about latency. {lvl=1}
2. Light in fibre travels about 200,000 km/s, so the round trip over distance d is at least 2d/v; 13,000 km costs at least 130 ms. {lvl=1}
3. Download time is about (round trips × RTT) + (size ÷ bandwidth). {lvl=2}
4. A CDN keeps copies at edge servers near users; a hit is answered locally, a miss fetches from the origin and keeps a copy. {lvl=2}
5. Average latency = h × edge + (1 − h) × origin; keep hit ratio high with TTLs, shields and clean cache keys; fix staleness with versioned names or purges. {lvl=3}
6. At scale judge p99, not the average: many parallel calls make rare slowness common. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Do not assume a faster plan fixes a slow site: first find out whether the delay is round trips, server work or data volume. {lvl=1}
- Straight-line distance is only a lower bound: cables follow detours and routers queue packets, so real RTT is higher. {lvl=2}
- Do not cache personal or secret pages at a shared edge without care: a private page cached for everyone leaks it. {lvl=3}
- Purging is not instant everywhere; prefer versioned file names for static files. {lvl=3}
- An average of 50 ms can hide a p99 of 2 seconds: always look at the tail. {lvl=4}
- Debug with `ping` for RTT, `traceroute` for where the delay jumps, and the browser's Network tab for a per-request timeline. {lvl=2}
:::
