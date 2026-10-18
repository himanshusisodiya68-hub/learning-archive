---
title: Load balancing
summary: How millions of people reach one website address and still end up on different machines, without anyone noticing a machine has died.
ncert: []
up_to: SDE-3
builds_on: [Scaling up and scaling out, Caching, DNS and HTTP]
notes_prompt: Explain to a friend how a toll plaza or a railway booking hall decides which counter each person goes to, and what happens when one counter closes.
margin:
  - kind: history
    title: History
    text: 'Early websites spread visitors across servers using DNS alone, handing out a different address each time. Dedicated balancer boxes, and later software ones, took over as sites grew. [Unverified, dates from memory]'
  - kind: tip
    title: Interview favourite
    text: '"Why not just use round robin?" has a standard answer: requests differ in cost and servers differ in speed. Mention least connections, and health checks, and you have covered the basics.'
  - kind: olympiad
    title: Two choices beat one
    text: Pick two servers at random and send the request to the less busy one. Surprisingly, this keeps the heaviest load far lower than picking one at random, with almost no extra work. [Unverified, exact bounds from memory]
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "partitioning and request routing sections [Unverified]" }
  - { title: "A. Xu, System Design Interview", ref: "chapter on consistent hashing [Unverified]" }
  - { title: "Google, Site Reliability Engineering", ref: "chapters on load balancing in the datacenter and at the frontend [Unverified]" }
cards:
  - { front: "What does a load balancer do?", back: "It sits in front of many servers behind one address, picks a healthy server for each request, and sends it there, so the crowd is shared and a dead server is skipped." }
  - { front: "Layer 4 vs layer 7 balancing?", back: "L4 looks only at addresses and ports and forwards connections: very fast, content-blind. L7 reads the request (path, headers, cookies), so it can route by URL, but costs more work." }
  - { front: "Round robin vs least connections?", back: "Round robin gives each server a turn in order: fair only if requests and servers are alike. Least connections sends to the server with the fewest requests in progress, adapting to slow requests." }
  - { front: "Why is hash mod N bad for choosing a server?", back: "When N changes, almost every key maps to a different server (about N/(N+1) of them move), so a cache loses nearly everything. Consistent hashing moves only about 1/(N+1)." }
  - { front: "What is a health check?", back: "The balancer regularly probes each server (a small request) and stops sending traffic to those that fail, then restores them when they recover." }
  - { front: "Why are sticky sessions a trade-off?", back: "They send a user to the same server so server-held state works, but load can become uneven and a server failure loses those sessions. Stateless servers avoid the problem." }
core:
  idea: 'A load balancer is a single front door that shares incoming requests across many servers, using a rule to choose and health checks to avoid broken ones. The rule matters: the best one depends on whether requests are alike, whether servers are alike, and whether the same key must reach the same machine.'
  formulas:
    - tex: '\text{share}_i = \dfrac{w_i}{\sum_j w_j}'
      label: 'Weighted round robin: server i gets its weight over the total'
    - tex: '\dfrac{N}{N+1}'
      label: 'Fraction of keys that move when hash-mod-N grows from N to N+1 servers'
    - tex: '\dfrac{1}{N+1}'
      label: 'Fraction that move on a consistent-hash ring when one server joins'
  conditions:
    - 'Servers are interchangeable (stateless) unless you deliberately route by key'
    - 'Health checks detect failures quickly enough, and retries are limited so they do not pile on'
    - 'The balancer itself is not a single point of failure (there are several, or a standby)'
  sign: 'The balancer is also a machine that can fail or be overloaded. Always ask what happens when it breaks.'
outcomes:
  - 'Explain what a load balancer does and why systems need one in front of a group of servers'
  - 'Choose between round robin, weighted, least connections and random-two-choices for a given workload'
  - 'Explain layer 4 versus layer 7 balancing and give a case needing each'
  - 'Explain health checks, sticky sessions and their trade-offs'
  - 'Build a consistent hash ring and explain why it moves few keys; outline DNS-based global balancing'
opener:
  story: |
    At a busy toll plaza on a festival weekend there are twelve booths. You see a driver pick the line that looks shortest, and then it stops, because the driver in front is searching for cash. Another line zips along. You wish someone with a helicopter view would wave each car to the booth that will free up first.

    A website has the same problem, only with a million cars. Everyone types the same address, say `ticketsite.example`, but behind it stand hundreds of machines. Somebody has to wave each request to a machine, and if a machine breaks down, wave around it before you notice anything.

    That somebody is the **load balancer**. How should it choose? The obvious answer, take turns, turns out to be wrong in a surprisingly interesting way.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Many clients on the left send requests to a balancer in the middle, which fans them out to four servers, one of them crossed out"><g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--ink);stroke-width:1.5"><circle cx="30" cy="50" r="12"/><circle cx="30" cy="100" r="12"/><circle cx="30" cy="150" r="12"/><circle cx="30" cy="200" r="12"/></g><path d="M42 50 L112 112 M42 100 L112 116 M42 150 L112 122 M42 200 L112 128" style="fill:none;stroke:var(--muted);stroke-width:1.3"/><rect x="114" y="90" width="64" height="60" rx="10" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="122" y="124" style="font-size:11px;fill:var(--surface)">balancer</text><path d="M180 112 L236 50 M180 116 L236 100 M180 124 L236 150 M180 128 L236 200" style="fill:none;stroke:var(--c);stroke-width:2"/><g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="238" y="36" width="64" height="28" rx="5"/><rect x="238" y="86" width="64" height="28" rx="5"/><rect x="238" y="136" width="64" height="28" rx="5"/><rect x="238" y="186" width="64" height="28" rx="5" style="stroke:var(--bad);stroke-dasharray:4 3"/></g><path d="M244 192 L296 208 M296 192 L244 208" style="stroke:var(--bad);stroke-width:2"/><text x="190" y="230" style="font-size:10px;fill:var(--bad)">dead: skipped</text></svg>'
life:
  - 'A railway booking hall or bank with a token system: one queue feeds many counters, and a closed counter is simply not offered.'
  - 'Every large website, from Flipkart to Hotstar, has balancers in front of its servers; so do UPI backends and ISRO''s public sites at busy times. [Inference: details of specific systems are not public]'
  - 'DNS answering "nearest data centre" so that a user in Chennai and a user in Delhi reach different buildings for the same address.'
  - 'A hospital triage nurse: sorts arrivals by need, not by arrival order, which is what "least busy" rules try to do.'
  - 'Cloud services that offer a "load balancer" product you rent by the hour in front of your own servers.'
models:
  - name: 'One queue, many counters'
    text: 'A single shared line feeding several servers is fairer and faster than separate lines, because no one is stuck behind a slow customer while another counter idles. Look for places where you can pool queues: shops, hospitals, support desks.'
  - name: 'Judge by what is happening, not by the schedule'
    text: 'Taking turns ignores the real state. Looking at who is actually free adapts to slow cases. In planning of any kind, a rule that reads the current state beats a fixed rotation.'
  - name: 'The guard is also a risk'
    text: 'Anything that protects or routes everything else is itself critical: a gatekeeper, a single bank, a single supplier. Ask who guards the guard.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Choosing a server by hashing the key is the hash-table idea one level up: the key decides the bucket, and each bucket is a machine.'
    differs: 'Resizing a hash table moves entries in memory in microseconds; adding a server moves data across a network, so how many keys move really matters.'
  - leaf: 'cs/partitioning'
    name: 'Partitioning and sharding'
    same: 'Consistent hashing is used both to route requests to caches and to place data on shards.'
    differs: 'Balancing for stateless servers can send any request anywhere; for shards the same key must reach the machine that owns its data.'
  - leaf: 'cs/dns-and-http'
    name: 'DNS and HTTP'
    same: 'DNS is the first and coarsest balancer: one name, many possible addresses, chosen per reader.'
    differs: 'DNS answers are cached by others for their TTL, so you cannot react to a failure faster than that; a dedicated balancer reacts per request.'
  - leaf: 'mat/expected-value'
    name: 'Expected value and decisions'
    same: 'Random choices even out in the long run, but luck still matters in small samples; choosing two at random and taking the better is a cheap way to improve the odds.'
    differs: 'Expected value is about a single average outcome; balancing cares about the worst-loaded machine, the tail, not the average.'
next:
  q: 'Spreading requests is fine when the user can wait for the answer. But what if the work is slow (sending a million emails) and a spike would overwhelm the servers? Could requests sit in a line and be handled steadily instead?'
  leaf: 'cs/message-queues'
  name: 'Message queues and events'
symbols:
  - s: 'N'
    means: 'number of servers (count)'
  - s: 'w_i'
    means: 'weight of server i: a number saying how much traffic it should get, larger for stronger machines (no unit)'
  - s: '\text{share}_i'
    means: 'fraction of all requests that go to server i (no unit, 0 to 1)'
  - s: 'L4, L7'
    means: 'layer 4 (connections and addresses) and layer 7 (full web requests) of the network stack'
  - s: 'TTL'
    means: 'time to live: how long a DNS answer may be reused before asking again (seconds)'
  - s: 'h(\text{key})'
    means: 'hash function: turns a key or a server name into a big number, used to place it on the ring'
---

:::hook
q: A balancer hands requests to 3 servers in strict rotation: 1, 2, 3, 1, 2, 3 and so on. Most requests take 10 ms, but one in ten takes 2 seconds. What goes wrong?
options: ["Nothing; each server gets the same number of requests, so it is fair", "A server that gets unlucky slow requests piles up a queue while others sit idle", "Only the first server is ever used"]
answer: 1
right: Right. Equal counts do not mean equal work. A server holding several 2-second requests builds a line of waiting requests, while a neighbour is idle. A rule that looks at what each server is doing right now, such as fewest requests in progress, copes much better.
wrong: Rotation counts requests, not their cost. What happens to a server that, by bad luck, receives several slow ones in a row?
:::

## One address, many machines {lvl=1 id=s-door label="Foundations"}

When you type `ticketsite.example`, you want one place to knock. But one machine cannot take a million requests (see the scaling lesson). The answer is a **load balancer**: a machine or program standing at the front door. It takes each incoming request, picks a server from the group behind it, and passes the request on. The reply comes back the same way.

It does three useful things at once:

1. **Shares the load**, so no single server is swamped.
2. **Hides failures**: if a server dies, the balancer stops sending it requests, and users do not notice.
3. **Makes growth easy**: add a server to the group and it starts receiving traffic; remove one and it stops.

This only works smoothly if servers are **interchangeable**, which is why the scaling lesson made them stateless.

:::figure caption="The client sees one address. The balancer chooses a server and skips the one that has failed."
<svg viewBox="0 0 320 120" role="img" aria-label="Client to balancer to three servers with one failed">
<g style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="8" y="44" width="52" height="32" rx="6"/><rect x="100" y="44" width="68" height="32" rx="6"/><rect x="230" y="8" width="70" height="28" rx="5"/><rect x="230" y="46" width="70" height="28" rx="5"/><rect x="230" y="84" width="70" height="28" rx="5" style="stroke:var(--bad);stroke-dasharray:4 3"/></g>
<g style="font-size:10px;fill:var(--ink)"><text x="16" y="64">client</text><text x="108" y="64">balancer</text><text x="244" y="26">server 1</text><text x="244" y="64">server 2</text><text x="244" y="102">server 3 ✗</text></g>
<g class="axis"><line x1="60" y1="60" x2="100" y2="60"/><line x1="168" y1="56" x2="230" y2="24"/><line x1="168" y1="62" x2="230" y2="60"/></g>
<line x1="168" y1="68" x2="230" y2="98" class="faint"/>
</svg>
:::

:::qc lvl=1
q: A server behind a balancer crashes at midnight. What should users notice?
options: ["Nothing, if health checks remove it and others have spare capacity", "That the site is down until someone restarts it", "That every request is slower forever"]
answer: 0
right: Right. The balancer notices the failure and sends requests elsewhere. Spare capacity matters: the survivors must be able to absorb the extra load.
wrong: The point of having several servers and a balancer is that one failure should not be visible. What does the balancer do once it knows the server is dead?
:::

## Choosing a server {lvl=2 id=s-choose label="SDE-1"}

The balancer's rule for choosing is its **algorithm**. The common ones:

| Rule | How it picks | Good when | Weak when |
|---|---|---|---|
| **Round robin** | Each server in turn | Requests are alike, servers are alike | Requests differ in cost |
| **Weighted round robin** | In turn, but stronger servers get more turns | Servers differ in power | Requests differ in cost |
| **Least connections** | The server with the fewest requests in progress | Request lengths vary (downloads, long queries) | Needs the balancer to track each server's count |
| **Random** | Pick any server at random | Simple, many requests | Short-term clumping |
| **Power of two choices** | Pick two at random, send to the less busy | Many balancers with only approximate knowledge | Slightly more complex |

For weighted round robin, a server's share is its weight divided by the sum of all weights:

$$\text{share}_i = \frac{w_i}{\sum_j w_j}$$

Read it as: with weights 5, 3 and 2, the first server gets $5/10$ of the requests, the second $3/10$, the third $2/10$.

```python
servers = ["a", "b", "c"]
active = {"a": 0, "b": 0, "c": 0}     # requests in progress

def pick_least_connections():
    s = min(servers, key=lambda x: active[x])
    active[s] += 1                    # decrement when the request ends
    return s
```

:::qc lvl=2
q: Servers are weighted 5, 3 and 2. Out of 1,000 requests, how many should the weight-3 server get?
options: ["300", "333", "500"]
answer: 0
right: Right. Its share is 3 ÷ (5 + 3 + 2) = 0.3, so 300 requests.
wrong: Share is weight divided by the total of all weights. Add 5, 3 and 2 first.
:::

## Layer 4 and layer 7 {lvl=2 id=s-layers label="SDE-1"}

A balancer can look at a request at different depths.

- **Layer 4 (L4)** balancing works with connections. It sees only addresses and port numbers, not the web request inside. It forwards the connection to a server, very fast, with little work per request. It cannot know whether a request is for a picture or a payment.
- **Layer 7 (L7)** balancing reads the actual web request: the URL path, headers, cookies. So it can send `/images` to image servers, `/api` to application servers, and route a beta tester's cookie to a test group. It can also end the secure connection (TLS) for the servers and add compression. The cost is more work per request.

| | L4 | L7 |
|---|---|---|
| Sees | Addresses, ports | Full request: path, headers, cookies |
| Speed | Fastest | Slower, more CPU |
| Can route by URL | No | Yes |
| Typical use | Huge raw traffic, non-web protocols | Web and API routing, rollouts |

Many companies use both: an L4 layer for raw volume in front of an L7 layer for smart routing. [Inference: a common pattern, not universal.]

## Health checks {lvl=2 id=s-health label="SDE-1"}

A balancer must not send customers to a dead server. It checks health in two ways:

- **Active checks**: every few seconds it sends a small request (for instance `GET /health`) to each server. If several checks in a row fail, the server is marked unhealthy and removed; when checks succeed again, it returns.
- **Passive checks**: it watches real traffic. If a server returns many errors or timeouts, it is pulled out.

Both have costs. Suppose it probes every 5 seconds and needs 3 failures to be sure: a server may be dead for up to 15 seconds while still receiving traffic. With 4 servers and 2,000 requests per second, a quarter of requests, 500 per second, go to the dead one: about 7,500 failed requests in that window. Faster checks shorten the damage but risk **false alarms**, where a briefly slow server is removed and the remaining ones are overloaded.

Two good habits. **Drain** a server before removing it on purpose: stop new requests, let current ones finish. And limit **retries**: if a request fails and the client or balancer retries on every failure, a struggling system gets more load exactly when it can least cope (a retry storm).

:::qc lvl=2
q: A balancer probes every 4 seconds and removes a server after 3 failed probes in a row. About how long might a dead server still receive traffic?
options: ["4 seconds", "Up to about 12 seconds", "Up to a minute"]
answer: 1
right: Right. Three probes at 4 seconds apart is about 12 seconds, so a request may keep reaching the dead server for that long.
wrong: Count how many probes must fail, and multiply by the gap between probes.
:::

## Sticky sessions {lvl=3 id=s-sticky label="SDE-2"}

Sometimes a user must reach the same server again, for instance because the server keeps their shopping cart in its own memory. **Sticky sessions** (session affinity) make the balancer remember: for example by a cookie it sets, or by hashing the user's address, it sends repeat requests to the same server.

It works, but with costs. Load becomes uneven (a few heavy users pin one server). If that server fails, its users lose their carts. Scaling in is awkward, as removing a server breaks the sessions on it.

The better design, from the scaling lesson, is to keep sessions in a shared store so the servers stay stateless and stickiness is unnecessary. Stickiness is still sensible for a performance reason: a server that has a user's data in a warm local cache will answer faster.

## Consistent hashing {lvl=3 id=s-ring label="SDE-2"}

Sometimes you want the same key always to go to the same server, because that server holds the key's cached data or owns its data. A simple method is hashing: `server = hash(key) mod N`, where $N$ is the number of servers. It works until $N$ changes. When you go from 4 to 5 servers, a key stays put only if its hash gives the same remainder both times, which is true for about one key in five. So about four in five keys, $N/(N+1)$, move. For a cache, that means nearly everything misses at once, a stampede on the database.

**Consistent hashing** fixes this. Imagine a circle (a ring) of numbers. Hash each server's name to a point on the ring. Hash each key to a point too, then walk clockwise from the key until you meet a server: that server owns the key. When a new server is added, it takes over only the keys between itself and its anticlockwise neighbour, about $1/(N+1)$ of all keys. Everything else stays.

```python
import bisect, hashlib
def h(s): return int(hashlib.md5(s.encode()).hexdigest(), 16)

class Ring:
    def __init__(self, servers, vnodes=100):
        pts = [(h(f"{s}#{i}"), s) for s in servers for i in range(vnodes)]
        self.pts = sorted(pts)
        self.keys = [p for p, _ in self.pts]
    def lookup(self, key):
        i = bisect.bisect(self.keys, h(key)) % len(self.pts)
        return self.pts[i][1]
```

The `vnodes` (virtual nodes) are the trick that keeps the load even: each server appears at many points on the ring, so no server gets one unlucky big arc. A more powerful server can be given more points. When a server dies, its many small arcs are spread among all the survivors, not dumped on a single neighbour.

:::figure caption="Keys and servers share one circle. A key belongs to the first server clockwise from it."
<svg viewBox="0 0 320 200" role="img" aria-label="A ring with three servers and some keys; each key points clockwise to the next server">
<circle cx="160" cy="100" r="70" style="fill:none;stroke:var(--muted);stroke-width:2"/>
<g style="fill:var(--mat);stroke:var(--ink);stroke-width:1.5"><circle cx="160" cy="30" r="9"/><circle cx="221" cy="135" r="9"/><circle cx="99" cy="135" r="9"/></g>
<g style="font-size:10px;fill:var(--ink)"><text x="152" y="20">S1</text><text x="232" y="150">S2</text><text x="76" y="152">S3</text></g>
<g style="fill:var(--ink)"><circle cx="209" cy="48" r="4"/><circle cx="224" cy="95" r="4"/><circle cx="160" cy="170" r="4"/><circle cx="108" cy="52" r="4"/></g>
<text x="238" y="60" style="font-size:10px;fill:var(--muted)">key, goes to S2</text>
<text x="10" y="190" style="font-size:10px;fill:var(--muted)">add a server: only the keys just before it change owner</text>
</svg>
:::

:::qc lvl=3
q: A cache cluster of 9 servers uses hash(key) mod 9. You add a 10th. About what fraction of keys move?
options: ["About 10 percent", "About 90 percent", "About 50 percent"]
answer: 1
right: Right. Only about 1 key in 10 keeps its server, so roughly 9/10 move. On a consistent-hash ring only about 1/10 would move.
wrong: A key stays only if its remainder is unchanged. That is true for about one in ten. What fraction does that leave moving?
:::

## Balancing the whole planet {lvl=4 id=s-global label="SDE-3"}

A company with data centres in Mumbai, Frankfurt and Virginia faces a bigger question: which **region** should a user reach? The usual first tool is **DNS-based global balancing**. When your browser asks DNS for `ticketsite.example`, the answer depends on who is asking: a user in Chennai receives the address of Mumbai, a user in Berlin the address of Frankfurt. The DNS service can also drop a region from its answers if health checks show it is down.

The weakness is caching. Resolvers and browsers keep a DNS answer for its **TTL**. If the TTL is 5 minutes, a failed region may still be handed to some users for up to 5 minutes after you notice. A short TTL (30 to 60 seconds) reacts faster but means more DNS lookups. Another approach is **anycast**, where several locations announce the same IP address and the internet's routing sends each user to a nearby one [Unverified: details of how providers combine these vary].

At this scale the design questions are:

- **Failover without a stampede.** If Mumbai fails and all its users switch to Frankfurt at once, Frankfurt may be overloaded. Plan spare capacity (each region able to absorb a share of a failed neighbour), shed low-priority traffic, and move users gradually.
- **The balancer is a single point of failure.** Run several balancers behind a shared address or routing arrangement, so losing one is invisible. [Inference: usual practice; specific products differ.]
- **Spillover rules.** Prefer the nearest region, but overflow to the next nearest when it is above, say, 70 percent utilisation (the headroom idea from the scaling lesson).
- **Data follows users.** Balancing requests across regions only helps if the data is available there, which brings in replication and consistency, the later lessons of this pillar.

:::qc lvl=4
q: Why can DNS-based failover be slow, even when your health checks react in 5 seconds?
options: ["DNS cannot detect failures", "Resolvers and browsers keep old answers until the TTL expires", "DNS only works for one region"]
answer: 1
right: Right. You can change the answer instantly, but others reuse their saved copy for the TTL. This is why failover plans combine short TTLs with other mechanisms.
wrong: Who has saved the old DNS answer, and for how long are they allowed to reuse it?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A load balancer is one front door that shares requests across many servers and hides failed ones. {lvl=1}
2. Round robin takes turns; weights handle unequal servers; least connections handles unequal requests. {lvl=2}
3. L4 forwards connections quickly without reading them; L7 reads the request and can route by path, header or cookie. {lvl=2}
4. Health checks remove dead servers, but detection takes time; drain before removal and limit retries. {lvl=2}
5. Sticky sessions are a workaround for server-held state; stateless servers are the better fix. {lvl=3}
6. Hash mod N moves about N/(N+1) of keys when N changes; a consistent hash ring moves about 1/(N+1). {lvl=3}
7. Global balancing uses DNS or anycast to pick a region; DNS caching and failover load are the hard parts. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Assuming equal request counts mean equal load; slow requests make rotation unfair. {lvl=2}
- Forgetting the balancer is itself a single point of failure unless it is duplicated. {lvl=2}
- Removing a server without draining it, which cuts off requests in progress. {lvl=2}
- Retrying every failed request at once, turning a small problem into a retry storm. {lvl=3}
- Using hash mod N for a cache cluster; adding a server then empties the cache. Use consistent hashing. {lvl=3}
- Depending on DNS for fast failover without checking the TTL. {lvl=4}
:::
