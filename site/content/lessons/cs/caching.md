---
title: Caching
summary: Why the second time you ask is faster, and how big systems remember answers without ever showing you stale ones for long.
ncert: []
up_to: SDE-3
builds_on: [Hash tables, Memory hierarchy and caches, Scaling up and scaling out]
notes_prompt: Explain to a friend why a shopkeeper keeps the fast-selling items on the counter and the rest in the godown, and what goes wrong when prices change.
margin:
  - kind: history
    title: History
    text: 'Computer caches were first built into hardware in the 1960s, because processors had become far faster than memory. The web later copied the idea at every level, from your browser to servers on every continent. [Unverified, dates from memory]'
  - kind: tip
    title: Interview favourite
    text: '"Design an LRU cache" is among the most common coding rounds. The trick is a hash map for finding entries plus a list for ordering them, so both lookup and eviction are O(1).'
  - kind: olympiad
    title: Hit ratio is not linear
    text: Going from a 90 percent to a 99 percent hit ratio cuts misses tenfold, so it can matter more than going from 0 to 90. Small gains near the top move the average a lot.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "caching appears throughout; see the chapters on storage and on derived data [Unverified]" }
  - { title: "J. Hennessy and D. Patterson, Computer Architecture: A Quantitative Approach", ref: "memory hierarchy and cache chapters [Unverified]" }
  - { title: "A. Xu, System Design Interview", ref: "chapter on caching and key-value stores [Unverified]" }
cards:
  - { front: "What are a cache hit and a cache miss?", back: "Hit: the answer is already in the cache, so it is returned fast. Miss: it is not, so the slow source is asked and the answer is stored for next time." }
  - { front: "Average access time with hit ratio h?", back: "h × t_cache + (1 − h) × t_slow. Misses are rare but expensive, so a few points of hit ratio can change the average a lot." }
  - { front: "Name the two classic eviction rules.", back: "LRU (least recently used) drops what has not been touched for longest. LFU (least frequently used) drops what has been used least often." }
  - { front: "Why is invalidation hard?", back: "The cache holds a copy; when the original changes, every copy must be updated or dropped, across many machines, without a moment where readers see old data and trust it." }
  - { front: "What is a cache stampede?", back: "A popular entry expires and thousands of requests miss at once, all hitting the slow source to recompute the same answer. Fix with coalescing, jittered expiry, or serving stale while refreshing." }
  - { front: "Write-through, write-back, write-around?", back: "Through: write to cache and database together. Back: write to cache, database later. Around: write to database, skip the cache and let a later read fill it." }
core:
  idea: 'A cache is a small, fast copy of answers that are slow to get. It works because requests repeat: a few items are asked for again and again. The price is that copies can go out of date, so every cache needs a rule for when to throw things away and when to refresh them.'
  formulas:
    - tex: 'T_{avg} = h\,t_c + (1-h)\,t_s'
      label: 'Average time with hit ratio h, cache time t_c, slow source time t_s'
    - tex: 'h = \dfrac{\text{hits}}{\text{hits}+\text{misses}}'
      label: 'Hit ratio: the share of requests answered from the cache'
  conditions:
    - 'Requests repeat: a small set of items accounts for most traffic (locality)'
    - 'The cache is much faster than the source, and an answer stays valid for a while'
    - 'A stale answer is acceptable for a bounded time, or you have a way to invalidate it'
  sign: 'There are only two hard problems: knowing when a copy is out of date, and naming things. Always ask how an old copy will be noticed and replaced.'
outcomes:
  - 'Explain what a cache is, with the hit and miss paths, and name where caches sit between a phone and a database'
  - 'Compute average latency from the hit ratio and see why 99 percent beats 90 percent by a wide margin'
  - 'Run an LRU cache on paper and write one in Python'
  - 'Choose between TTL, explicit invalidation and write policies for a given workload'
  - 'Diagnose a cache stampede or hot key and name two fixes'
opener:
  story: |
    During an IPL final, the live score page is opened by perhaps five lakh people every minute. The score itself changes once every few seconds, at most. Yet if each of those five lakh visits made the database add up the runs, count the wickets and format a page, the database would melt before the first over ended.

    So the site cheats, honestly. It works out the page once, keeps the finished page nearby, and hands the same copy to everyone. A few seconds later it works it out again. Millions of people see the score; the database does the work a handful of times.

    That trick is the **cache**, and it is behind almost every fast thing you use. But a copy can be wrong: what if the batter was out one second ago and you still see him at the crease? When is it safe to trust a copy? (How any real sports site builds its page is not public; this is the shape of the idea. [Inference])
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Many phones ask a small fast cache; only a few requests go on to the slow database"><g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="14" y="30" width="30" height="48" rx="5"/><rect x="14" y="92" width="30" height="48" rx="5"/><rect x="14" y="154" width="30" height="48" rx="5"/></g><path d="M46 54 L110 110 M46 116 L110 116 M46 178 L110 122" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="112" y="92" width="76" height="48" rx="8" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="128" y="120" style="font-size:12px;fill:var(--surface)">cache</text><path d="M190 116 L226 116" style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3"/><text x="190" y="106" style="font-size:9px;fill:var(--bad)">miss</text><ellipse cx="266" cy="104" rx="34" ry="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><path d="M232 104 L232 138 A34 10 0 0 0 300 138 L300 104" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="246" y="160" style="font-size:11px;fill:var(--muted)">database</text><text x="112" y="82" style="font-size:10px;fill:var(--c)">hit: answered here</text><text x="14" y="226" style="font-size:10px;fill:var(--muted)">thousands of askers, a handful of slow trips</text></svg>'
life:
  - 'Your browser keeps images and scripts from sites you visited so a repeat visit loads in a blink; "clear cache" empties it.'
  - 'Hotstar and YouTube serve video chunks from servers close to your city, copies of the same chunk that millions watch.'
  - 'Google Maps keeps recent map tiles and your recent searches on the phone, so your area appears even on a weak signal.'
  - 'A kirana shop keeps sugar and tea at the counter and rare items in the back room: a cache by hand.'
  - 'Your phone''s processor keeps recently used data in a tiny fast memory so it need not wait for the main memory each time.'
models:
  - name: 'Keep near what you use often'
    text: 'Put the things you reach for daily within arm''s reach: a desk, a kitchen, a toolbox. The cost of fetching from far away is paid once, then saved a hundred times.'
  - name: 'Every copy can go stale'
    text: 'A saved news headline, a price on a screenshot, a rumour repeated twice: copies drift from the original. Ask how old your information is and who would tell you if it changed.'
  - name: 'Small hot set, long cold tail'
    text: 'Most use comes from a few items (top songs, popular products, a few customers). Find the hot few and treat them specially; this is the same shape as the 80/20 rule.'
links:
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'The same idea at the smallest scale: a fast, small store in front of a slow, large one, with hit ratios and eviction rules.'
    differs: 'A CPU cache is managed by hardware in nanoseconds; an application cache is managed by your code, across machines, and can be wrong in ways hardware caches are built never to be.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Almost every cache is a hash table underneath: a key finds its value in one step.'
    differs: 'A plain hash table keeps everything forever; a cache has a size limit and must decide what to throw out.'
  - leaf: 'cs/cdns-and-latency'
    name: 'CDNs and latency'
    same: 'A CDN is a cache spread across the world, close to readers, serving copies of your files.'
    differs: 'A CDN reduces distance and load on your origin; an application cache mainly reduces work on your database.'
  - leaf: 'cs/iv-design-data-structure'
    name: 'Design a data structure (LRU cache and friends)'
    same: 'The interview version of this lesson: build an LRU cache with O(1) get and put.'
    differs: 'The interview cares about data structures inside one process; this lesson also covers where caches live and how they stay correct across machines.'
next:
  q: 'A cache can answer a million requests a second, but one machine still cannot receive them all. When many servers sit behind one address, who decides which server gets each request?'
  leaf: 'cs/load-balancing'
  name: 'Load balancing'
symbols:
  - s: 'h'
    means: 'hit ratio: fraction of requests answered from the cache (no unit, 0 to 1)'
  - s: 't_c'
    means: 'time to answer from the cache (milliseconds)'
  - s: 't_s'
    means: 'time to answer from the slow source, such as a database (milliseconds)'
  - s: 'T_{avg}'
    means: 'average time per request (milliseconds)'
  - s: 'TTL'
    means: 'time to live: how long an entry may be used before it expires (seconds)'
  - s: 'O(1)'
    means: 'constant time: the work does not grow as the cache grows'
---

:::hook
q: A live-score page is opened 500,000 times a minute. The score changes about every 5 seconds. Roughly how many times a minute must the database really compute the page, if a cache keeps each answer for 5 seconds?
options: ["500,000, once per visitor", "About 12", "About 1,000"]
answer: 1
right: Right. One computation per 5-second window is 60 ÷ 5 = 12 a minute, however many people look. The other 499,988 visits are served from the copy. (Your own system will have its own numbers; the pattern is what matters. [Inference])
wrong: If each answer is reused for 5 seconds, how many separate 5-second windows fit in a minute? Visitors do not change that count.
:::

## Remember the answer {lvl=1 id=s-idea label="Foundations"}

Suppose a friend asks you the capital of Australia, and you have to look it up in a heavy atlas each time. After the tenth time you stop looking and just remember "Canberra". You have built a **cache**: a small, fast place to keep answers you have already paid to find.

Every cache has two outcomes. A **hit** means the answer is already there: fast. A **miss** means it is not, so you go to the slow place (the atlas, the database), then keep the answer for next time.

```python
cache = {}
def get_profile(user_id):
    if user_id in cache:            # hit: instant
        return cache[user_id]
    row = database.read(user_id)    # miss: slow
    cache[user_id] = row            # remember it
    return row
```

This pattern, check the cache, otherwise ask the source and store, is called **cache-aside**, and it is the one you will meet most often. It works only because people ask for the same things again and again.

:::qc lvl=1
q: A cache holds 1,000 popular songs. Which request is most likely to be a hit?
options: ["A song nobody has played this month", "The song at the top of today's charts", "A song just uploaded a second ago"]
answer: 1
right: Right. A cache pays off for items asked for repeatedly. Popular items are asked repeatedly, so they are in the cache.
wrong: A cache only holds what was requested before. Which of these has certainly been requested many times already?
:::

## Where caches live {lvl=1 id=s-where label="Foundations"}

A request from your phone passes through several places, and each can keep a copy. Closer to you means faster, but each copy is a smaller and more private pool.

| Layer | What it keeps | Rough speed [Inference: typical figures] | Who shares it |
|---|---|---|---|
| Browser | Images, scripts, pages | Instant, no network | Only you |
| CDN (servers near you) | Files, video chunks, popular pages | Tens of milliseconds | Everyone in your region |
| Application cache (like Redis or Memcached) | Computed results, profiles, sessions | About 1 millisecond | All of one company's servers |
| Database's own memory | Recently read pages of data | Sub-millisecond to milliseconds | The database |
| CPU cache | Recent memory contents | Nanoseconds | One processor |

:::figure caption="A request travels inwards until some layer has the answer. Each layer that answers saves every trip beyond it."
<svg viewBox="0 0 320 130" role="img" aria-label="Request passes browser, CDN, app cache, database in a row">
<g style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="8" y="40" width="58" height="40" rx="6"/><rect x="88" y="40" width="58" height="40" rx="6"/><rect x="168" y="40" width="58" height="40" rx="6"/><rect x="248" y="40" width="58" height="40" rx="6"/></g>
<g style="font-size:10px;fill:var(--ink)"><text x="16" y="64">browser</text><text x="107" y="64">CDN</text><text x="176" y="58">app</text><text x="176" y="70">cache</text><text x="277" y="64" text-anchor="middle" style="font-size:9px">database</text></g>
<g class="axis"><line x1="66" y1="60" x2="88" y2="60"/><line x1="146" y1="60" x2="168" y2="60"/><line x1="226" y1="60" x2="248" y2="60"/></g>
<text x="8" y="106" style="font-size:10px;fill:var(--muted)">fast, private</text>
<text x="226" y="106" style="font-size:10px;fill:var(--muted)">slow, the truth</text>
</svg>
:::

## Hit ratio: the number that matters {lvl=2 id=s-hit label="SDE-1"}

The **hit ratio** is the share of requests answered from the cache. If $h$ is the hit ratio, $t_c$ the cache time and $t_s$ the time at the slow source, the average time is

$$T_{avg} = h\,t_c + (1-h)\,t_s$$

Read it as: the hits pay the cheap price, the misses pay the expensive one, and each is weighted by how often it happens. Take $t_c = 1$ ms and $t_s = 100$ ms:

| Hit ratio | Average time | Load on the database |
|---|---|---|
| 0% | 100 ms | 100% |
| 50% | 50.5 ms | 50% |
| 90% | 10.9 ms | 10% |
| 99% | 1.99 ms | 1% |

From 90% to 99% the average falls from about 10.9 to 2 ms, and, more important, the database sees one tenth as many requests. The misses are rare but they dominate the cost, so engineers watch the **miss** ratio. A cache that is too small, or a workload with little repetition (everyone asks for something different), has a low hit ratio and does little.

:::qc lvl=2
q: A cache takes 2 ms, the database 52 ms, and the hit ratio is 80 percent. Average time per request?
options: ["12 ms", "42 ms", "20 ms"]
answer: 0
right: Right. 0.8 × 2 + 0.2 × 52 = 1.6 + 10.4 = 12 ms.
wrong: Weight each time by how often it happens. Hits (80 percent) cost 2 ms, misses (20 percent) cost 52 ms.
:::

## Eviction: what to throw away {lvl=2 id=s-evict label="SDE-1"}

A cache is small, so when it is full and a new item arrives, something must go. The rule for choosing is the **eviction policy**:

- **LRU** (least recently used): drop the item untouched for the longest time. The bet is that what you used lately you will use again soon. This is the common default.
- **LFU** (least frequently used): drop the item used the fewest times. It protects long-time favourites, but can keep an old favourite forever after it has stopped being popular.
- **FIFO** (first in, first out): drop the oldest arrival, regardless of use. Simple, often worse.
- **TTL** (time to live): drop an item after a fixed time, whatever its popularity. Used together with the above, and the main tool for freshness.

An LRU cache needs two things at once: find an item quickly (a hash map) and know which is oldest (an ordering). Python's `OrderedDict` gives both.

```python
from collections import OrderedDict

class LRU:
    def __init__(self, cap):
        self.cap, self.d = cap, OrderedDict()
    def get(self, k):
        if k not in self.d: return None
        self.d.move_to_end(k)           # mark as most recent
        return self.d[k]
    def put(self, k, v):
        self.d[k] = v; self.d.move_to_end(k)
        if len(self.d) > self.cap:
            self.d.popitem(last=False)  # drop the oldest
```

Both `get` and `put` take $O(1)$ time. (Inside, it is the hash map plus a doubly linked list that interviewers ask you to build by hand.)

:::qc lvl=2
q: An LRU cache of size 3 holds A, B, C, with A used longest ago. You read B, then add D. What is evicted?
options: ["A", "B", "C"]
answer: 0
right: Right. Reading B made it recent. The least recently used is still A, so A goes when D arrives.
wrong: Order by last use, oldest first. Reading B moved it to the recent end. Who is now at the old end?
:::

## Staying correct: invalidation {lvl=3 id=s-invalid label="SDE-2"}

A cache copy is right only until the original changes. Three ways to cope:

1. **Expire by time (TTL).** Each entry lives for, say, 60 seconds. Simple and robust; the price is up to 60 seconds of possible staleness. Fine for a product description; not for a bank balance.
2. **Invalidate on write.** When the application changes the data, it deletes (or updates) the cache entry in the same operation. Fresh, but easy to get wrong: if the delete is missed, a stale entry may live until it expires.
3. **Versioned keys.** Put a version in the key (`profile:42:v7`). A change creates `v8`, and old entries are simply never read again and fade away by eviction. Common for files that never change under the same name (`app.3f9c.js`).

Even careful cache-aside has a race. Reader A misses and reads the old value from the database. Meanwhile a writer updates the database and deletes the cache. Then A stores the **old** value into the cache. The cache is now stale, possibly until its TTL expires. This is why a TTL is a good safety net even when you also invalidate explicitly.

### Write policies

When data is written, the cache and the database can be updated in different orders:

| Policy | What happens on a write | Good for | Risk |
|---|---|---|---|
| **Write-through** | Write to cache and database together, return when both are done | Data read soon after writing; strong freshness | Slower writes |
| **Write-back** (write-behind) | Write to cache, return at once, flush to database later | Heavy writes; absorbing bursts | Data in the cache is lost if it crashes before flushing |
| **Write-around** | Write only to database; cache is filled when someone reads | Data written once and rarely read (logs, uploads) | First read is a miss |
| **Cache-aside** (read path) | The application reads the cache, on miss reads the database and fills the cache | General use | Race above; first read is a miss |

## Stampedes and hot keys {lvl=4 id=s-stampede label="SDE-3"}

A cache protects the database by absorbing most requests. When it suddenly stops absorbing, the database is hit with the full crowd. Three cases to know:

- **Stampede (thundering herd).** A very popular entry expires. In the 200 ms it takes to recompute, 10,000 requests per second each find a miss and each start the same recomputation: 2,000 identical database queries at once. Fixes: **coalesce** requests so that one recomputes while the others wait for its answer ("single flight"); **refresh early** just before expiry; **serve stale** while one request refreshes in the background; **add jitter** (a random few seconds) to TTLs so a million entries do not all expire at the same instant.
- **Cold start.** After a restart or a new cache node, everything misses. Warm the cache before sending real traffic, or ramp traffic up slowly.
- **Hot key.** One item (a celebrity's profile) is so popular that the single cache machine holding it is overloaded. Fixes: keep a short-lived copy in each application server's own memory, or store several copies of that key under different names and pick one at random.

Also guard against **penetration**: repeated requests for things that do not exist (a bad ID that always misses and always hits the database). Cache the "not found" answer briefly, or put a Bloom filter in front, as in the earlier lesson.

```python
import random
def ttl_with_jitter(base=300):
    return base + random.randint(0, 60)   # spreads expiries over a minute
```

At scale, a cache is spread across many machines by hashing the key to choose the machine; the next lesson shows how consistent hashing keeps most keys in place when a machine is added or fails. [Inference: how any particular company configures this is usually not public.] Designing Data-Intensive Applications discusses the deeper questions of keeping derived copies consistent with the source.

:::qc lvl=4
q: 10,000 requests per second ask for one entry. It expires, and recomputing takes 0.2 seconds. With no protection, about how many recomputations start?
options: ["1", "About 2,000", "About 10,000 a minute"]
answer: 1
right: Right. For 0.2 seconds every arriving request misses: 10,000 × 0.2 = 2,000 identical queries, which may be enough to knock over the database.
wrong: Until the first recomputation finishes, nothing is in the cache. Count the requests that arrive in those 0.2 seconds.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A cache is a small, fast copy of slow-to-get answers; it works because requests repeat. {lvl=1}
2. Caches sit at many layers: browser, CDN, application, database, CPU. Closer means faster and more private. {lvl=1}
3. Average time = hits × cache time + misses × slow time, so a high hit ratio gives big savings and protects the database. {lvl=2}
4. When full, evict by a rule: LRU is the usual default, LFU keeps favourites, TTL keeps freshness. {lvl=2}
5. Keep copies correct with TTL, invalidation on write, or versioned keys; use a TTL as a safety net. {lvl=3}
6. Write-through is fresh and slower, write-back is fast and risky, write-around skips the cache for write-once data. {lvl=3}
7. Guard against stampedes, cold starts, hot keys and requests for missing items. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Caching data that is rarely asked for twice wastes memory and gains nothing; check the hit ratio. {lvl=1}
- Forgetting that a cache can serve old data: decide how stale is acceptable before choosing a TTL. {lvl=2}
- Caching per-user answers under a shared key, so one user sees another's data. Include the user in the key. {lvl=2}
- Setting the same TTL on everything, so a million entries expire together and cause a stampede. {lvl=3}
- Treating a write-back cache as durable: if it crashes before flushing, writes are lost. {lvl=3}
- Letting the cache become a hidden dependency: if the system only works with a warm cache, a restart takes you down. {lvl=4}
:::
