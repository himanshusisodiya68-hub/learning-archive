---
title: Designing a URL shortener
summary: A complete system design from a blank page, turning a long web address into a short link that works for millions of clicks a day.
ncert: []
up_to: SDE-3
builds_on: [Message queues and events, Monoliths and microservices, Caching, Hash tables, Partitioning and sharding]
notes_prompt: Explain to a friend how a short link like bit.ly/abc123 finds the long address, and why the short code is only about six or seven characters.
margin:
  - kind: history
    title: History
    text: 'Short links took off with Twitter''s early character limit, and services such as TinyURL (2002) and bit.ly (2008) are the best known. Today they also power QR codes, SMS marketing and campaign tracking. [Unverified: dates]'
  - kind: tip
    title: Interview favourite
    text: 'This is the classic first system-design question. A strong answer follows a fixed path: requirements, numbers, API, ID generation, storage, caching, then bottlenecks. Say your assumptions aloud and label every number as an assumption.'
  - kind: olympiad
    title: Design link
    text: 'The read path is the hot path: about a hundred reads for each write. Designs that are lopsided like this lean on caches and replicas for reads and keep the write path simple.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliable, Scalable, Maintainable; Ch. 5-6 Replication and Partitioning [Unverified chapter numbers]" }
  - { title: "A. Xu, System Design Interview", ref: "a chapter on designing a URL shortener [Unverified]" }
cards:
  - { front: "Steps of a system design answer?", back: "Clarify requirements, estimate the numbers (traffic, storage), define the API, choose the data model and ID scheme, add caching and scaling, then discuss failures and trade-offs." }
  - { front: "How many short codes do k base62 characters give?", back: "62 to the power k. Six characters give about 56.8 billion, seven give about 3.5 trillion." }
  - { front: "Counter vs hash for the short code?", back: "A counter never collides but is guessable and needs coordination (hand out ranges to servers). A hash needs collision checks and retries but needs no shared counter. A random code with a uniqueness check is a common middle road." }
  - { front: "301 vs 302 redirect?", back: "301 is permanent: browsers cache it, so later clicks skip your server (cheap, but no click counts and you cannot change the target). 302 is temporary: every click reaches you (analytics, edits and expiry work)." }
  - { front: "Why log clicks through a queue?", back: "The redirect must be fast. Writing a click record straight to a database slows it down and couples it to the analytics system. Drop an event on a queue and aggregate it later." }
  - { front: "Read-heavy design in one line?", back: "Cache the hot codes in memory, replicate the database for reads, keep writes simple, and shard by short code when one machine can no longer hold the data." }
core:
  idea: 'A URL shortener is a giant key-value store: a short code is the key and the long URL is the value. Design it by fixing requirements, estimating traffic and storage, generating unique codes, caching the hot read path, sending analytics through a queue, and scaling by partitioning on the code.'
  formulas:
    - tex: '\text{QPS} = \dfrac{\text{requests per day}}{86{,}400}'
      label: 'Average requests per second'
    - tex: 'N_{\text{codes}} = 62^{k}'
      label: 'Number of distinct codes with k base62 characters'
  conditions:
    - 'The numbers (traffic, storage) are stated assumptions that you check with the interviewer'
    - 'Each short code maps to exactly one long URL and is never reused while live'
    - 'Reads far outnumber writes, so the read path is optimised first'
    - 'A short delay in analytics is acceptable, but a slow or failed redirect is not'
  sign: 'Do not jump to technology (Kafka, Redis, Cassandra) before the numbers. The numbers say whether you need them at all: 40 writes a second fits on one ordinary database.'
outcomes:
  - 'State functional and non-functional requirements for a URL shortener'
  - 'Do a back-of-envelope estimate of requests per second and storage'
  - 'Generate short codes in base62 and compare counters, hashes and random codes'
  - 'Explain the read path with a cache, and choose between 301 and 302'
  - 'Scale the design with replication, sharding, queues for analytics and abuse controls'
opener:
  story: |
    You get a WhatsApp message: **sho.rt/aB3x9Qz**. You tap it and land on a page with a 200-character address that nobody could ever type. Somewhere a machine looked up those seven characters and sent you to the right place before you noticed any pause.

    Now imagine you are asked to build that service. On day one it is easy: a table with two columns. But a big marketing campaign goes out, a celebrity tweets one of your links and **fifty thousand people click in a minute**. Meanwhile some people try to guess codes to find private links.

    Where would you begin? And how would you know when the design is good enough?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A long web address on the left is squeezed into a short code on the right, with a lookup table in the middle"><rect x="12" y="40" width="108" height="30" rx="5" style="fill:none;stroke:var(--ink);stroke-width:1.6"/><text x="18" y="59" style="font-size:9px;fill:var(--ink)">shop.com/p/9923?ref=ad&amp;...</text><text x="14" y="32" style="font-size:10px;fill:var(--muted)">long address</text><path d="M122 55 L150 55" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="150" y="28" width="88" height="110" rx="6" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.6"/><g style="stroke:var(--rule)"><path d="M150 52 L238 52 M150 76 L238 76 M150 100 L238 100 M150 124 L238 124"/></g><g style="font-size:9px;fill:var(--ink)"><text x="156" y="45">aB3x9Qz</text><text x="156" y="69">Zk81mPe</text><text x="156" y="93">Qw7rT2c</text><text x="156" y="117">pL0vNd4</text></g><text x="150" y="154" style="font-size:10px;fill:var(--muted)">code to address table</text><path d="M240 55 L268 55" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="268" y="40" width="44" height="30" rx="5" style="fill:var(--c)"/><text x="273" y="59" style="font-size:9px;fill:var(--surface)">aB3x9Qz</text><text x="268" y="32" style="font-size:10px;fill:var(--muted)">short link</text><g style="fill:var(--muted);font-size:10px"><text x="12" y="196">One lookup per click,</text><text x="12" y="212">thousands of clicks a second.</text></g></svg>'
symbols:
  - s: 'k'
    means: 'number of characters in the short code (count)'
  - s: '62'
    means: 'size of the base62 alphabet: 26 lowercase + 26 uppercase letters + 10 digits (count)'
  - s: '62^{k}'
    means: 'number of different codes of length k (count)'
  - s: '\text{QPS}'
    means: 'queries per second: requests handled each second (requests/s)'
  - s: '86{,}400'
    means: 'seconds in one day (s)'
  - s: '\lceil x \rceil'
    means: 'round x up to the next whole number'
life:
  - 'bit.ly-style links in WhatsApp forwards, SMS from banks and delivery apps, and printed QR codes all stand for a short code that expands to a long address.'
  - 'Campaign links count clicks per city or device, which is why marketing teams like short links that pass through a server.'
  - 'Railway PNR numbers, Aadhaar-style reference ids and courier tracking codes use the same idea: a short id that maps to a record.'
  - 'Phone-number-to-contact lookup on your phone: a small key that finds a big record in one step.'
models:
  - name: 'Numbers before choices'
    text: 'Estimate the size of the problem before choosing tools. A shop that sells ten items a day needs a notebook, not a warehouse system. Many costly mistakes come from solving a scale problem you do not have.'
  - name: 'Optimise the common path'
    text: 'When one action happens a hundred times more often than another, make that one as short and cheap as possible, even if the rare one gets a little slower. A railway station puts many ticket windows for travel and one for refunds.'
  - name: 'Separate the fast lane from the slow lane'
    text: 'The user-facing step does only the essential work; record-keeping happens behind it. A toll plaza lets the car through and sends the bill later.'
links:
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'A short list of very popular items serves most requests, so keeping them in fast memory removes most database reads.'
    differs: 'A redirect table is almost never updated, so a stale entry is rare and the cache needs few invalidations compared with, say, a news feed.'
  - leaf: 'cs/partitioning'
    name: 'Partitioning and sharding'
    same: 'Hashing the key (the short code) chooses the machine, as in a hash table that spans many computers.'
    differs: 'Here every lookup is by exact code, so hash partitioning is perfect; range queries ("all links created this week") would need another index.'
  - leaf: 'mat/fermi-estimation'
    name: 'Fermi estimation'
    same: 'Rough, round-number multiplication tells you the order of magnitude of requests and storage before any design.'
    differs: 'The aim is the decision (one machine or a hundred), not the exact figure; a factor of two seldom changes the design.'
next:
  q: 'A related puzzle: when someone signs up they type a username and instantly see "taken" or "available". There are a billion existing names and many typists. Which parts of today''s design carry over, and what extra trick saves most of the lookups?'
  leaf: 'cs/design-username-check'
  name: 'Checking a username among a billion'
---

:::hook
q: Suppose the service stores 6 billion links over five years. About how many characters of letters (a-z, A-Z) and digits (0-9) does each short code need?
options: ["About 4", "About 6", "About 12"]
answer: 1
right: Right. There are 62 symbols, so 6 characters give $62^6 \approx 56.8$ billion codes, comfortably more than 6 billion. Four characters would give only about 14.8 million.
wrong: Each extra character multiplies the number of codes by 62, which grows very fast. Try $62^4$, $62^6$ and see which first passes 6 billion.
:::

## What are we building {lvl=1 id=s-req label="Foundations"}

Every design starts with questions, not boxes. A short list for our service:

**What it must do (functional requirements)**
- Given a long URL, create a short link and return it.
- Given a short link, send the visitor to the long URL (a **redirect**).
- Optional: count clicks, let links expire, allow a custom name.

**How well it must do it (non-functional requirements)**
- **Fast redirects.** The click should feel instant, say under 100 ms on the server side.
- **Highly available.** If the service is down, every link ever shared is broken. Redirects matter more than creating links.
- **Links never change meaning.** The same code must always lead to the same place until it expires.
- **Hard to guess.** Codes should not let people list everyone's links.

Notice the shape: the **read** (redirect) happens far more often than the **write** (create). We will assume 100 clicks for every link created. That single assumption steers the whole design.

:::figure caption="The whole service in one picture: a create path (rare) and a redirect path (very frequent) that hits the cache first."
<svg viewBox="0 0 320 170" role="img" aria-label="Browser to load balancer to app servers, then cache then database, with a queue to analytics">
<g style="stroke:var(--ink);stroke-width:1.2;fill:none"><rect x="6" y="64" width="44" height="32" rx="4"/><rect x="72" y="64" width="50" height="32" rx="4"/><rect x="144" y="64" width="50" height="32" rx="4"/><rect x="216" y="24" width="48" height="30" rx="4"/><rect x="216" y="108" width="48" height="30" rx="4"/><rect x="274" y="108" width="40" height="30" rx="4"/></g>
<g style="font-size:9px;fill:var(--ink)"><text x="12" y="84">User</text><text x="78" y="84">Balancer</text><text x="152" y="84">App</text><text x="224" y="43">Cache</text><text x="222" y="127">Queue</text><text x="278" y="127">Stats</text></g>
<path d="M50 80 L72 80 M122 80 L144 80 M194 72 L216 44 M194 88 L216 120 M264 123 L274 123" class="faint" style="stroke:var(--muted);fill:none"/>
<rect x="216" y="64" width="48" height="30" rx="4" style="fill:none;stroke:var(--mat);stroke-width:2"/><text x="224" y="83" style="font-size:9px;fill:var(--ink)">Database</text>
<path d="M194 80 L216 80" class="faint" style="stroke:var(--muted);fill:none"/>
<text x="6" y="160" style="font-size:9px;fill:var(--muted)">read: App asks Cache, falls back to Database. click events go to the Queue.</text>
</svg>
:::

:::qc lvl=1
q: Which requirement matters MOST for the redirect path of a link shortener?
options: ["Very low latency and high availability", "Strong ordering of all clicks worldwide", "Support for editing the long URL after each click"]
answer: 0
right: Right. The redirect is the product. If it is slow or down, every shared link is broken.
wrong: Think about what a person tapping a link wants, and what happens to all old links if the service fails.
:::

## Back-of-envelope numbers {lvl=2 id=s-numbers label="SDE-1"}

Assume (and confirm with the interviewer) that **100 million new links a month**, and **100 reads per write**.

- **Writes per second.** A month is $30 \times 86{,}400 \approx 2.6$ million seconds. So $100{,}000{,}000 / 2.6\text{M} \approx 39$ writes a second. Call it 40.
- **Reads per second.** 100 times that: about 3,900 a second on average. Traffic peaks, so plan for 10 times: about 40,000 a second.
- **Storage.** In five years: $100\text{M} \times 12 \times 5 = 6$ billion links. If a row (code, long URL, dates, owner) takes about 500 bytes, then $6 \times 10^{9} \times 500 = 3 \times 10^{12}$ bytes, about **3 terabytes**.
- **Memory for a cache.** A day has about $3{,}900 \times 86{,}400 \approx 330$ million reads. If the hottest 20 percent of them are worth caching at 500 bytes each, that is about $0.2 \times 330\text{M} \times 500 \approx 33$ GB. [Inference: the 80/20 rule is a rule of thumb, not a measurement]

What do these numbers tell us? Forty writes a second is tiny: one database could take it. Forty thousand reads a second at peak is not trivial for one database, but a cache absorbs most of it. And 3 TB fits on a few machines, but not comfortably on one, so we should be ready to **shard**.

```python
writes_per_day = 100_000_000 / 30
write_qps = writes_per_day / 86_400        # about 39
read_qps = write_qps * 100                  # about 3,900
storage_tb = 6e9 * 500 / 1e12               # about 3
```

:::qc lvl=2
q: With 100 million new links per month, about how many writes per second is that on average?
options: ["About 4", "About 40", "About 4,000"]
answer: 1
right: Right. A month is about 2.6 million seconds, and 100 million divided by 2.6 million is about 39.
wrong: Divide 100 million by the number of seconds in a month (about 2.6 million).
:::

## Making the short code {lvl=2 id=s-code label="SDE-1"}

Letters and digits give 62 symbols, called **base62**. A code of length $k$ has $62^k$ possibilities, so:

$$N_{\text{codes}} = 62^{k}$$

Read it as: each added character multiplies the number of codes by 62. $62^6 \approx 5.7 \times 10^{10}$ and $62^7 \approx 3.5 \times 10^{12}$. Seven characters are plenty for 6 billion links, with room to spare.

One way to produce a code is to take a whole-number id (1, 2, 3, ...) and write it in base 62, like writing a number in decimal but with 62 digits:

```python
ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

def to_base62(n):
    if n == 0:
        return ALPHABET[0]
    out = []
    while n > 0:
        n, r = divmod(n, 62)       # peel off the last base-62 digit
        out.append(ALPHABET[r])
    return "".join(reversed(out))

to_base62(125)    # '21' because 125 = 2*62 + 1
```

Read the last line aloud: 125 is two sixty-twos plus one, so the digits are 2 and 1.

## Counters, hashes or random codes {lvl=3 id=s-ids label="SDE-2"}

Where does the number come from? Three common choices:

| Approach | How | Good | Bad |
|---|---|---|---|
| **Counter** | A global counter, one more each time | No collisions ever; short codes at first | Guessable (aB3x9Qz is followed by aB3x9Qy); one counter is a bottleneck and single point of failure |
| **Hash of the long URL** | Hash it (MD5, SHA-256, or any good hash), keep the first 7 base62 characters | No coordination; the same URL gives the same code (free dedupe) | Collisions are possible and must be detected; the same URL always shares one link, so per-user stats mix |
| **Random code** | Draw 7 random base62 characters, insert if unused, retry if taken | Not guessable; no coordination | A tiny chance of retry that grows as the table fills |

How big is the collision risk? With $62^7 \approx 3.5 \times 10^{12}$ codes and $n$ already used, a new random code hits an existing one with probability $n / 62^7$. At 1 million links that is about $3 \times 10^{-7}$; at 6 billion it is about 0.17 percent, so roughly 1 insert in 600 needs a second try. That is cheap, provided the database has a **unique constraint** on the code, so a rare collision is *caught* rather than overwriting a link.

For the counter route at scale, avoid one global counter: a small coordination service hands each app server a **range** (say 1,000,000 numbers at a time). The server uses its range locally and asks for another only when it runs out. To stop guessing, run the number through a reversible scramble (a permutation) before encoding. A lost range after a crash only wastes numbers, which is harmless.

A good answer to give: random 7-character code + unique constraint + retry on conflict. Say why: no hot spot, not guessable, and the collision cost is negligible. Mention counters-with-ranges as the alternative.

:::qc lvl=3
q: Two app servers both generate the random code "Ab3dE9x" at the same moment for different URLs. What protects us?
options: ["Nothing; one link silently overwrites the other", "A unique constraint on the code makes the second insert fail, so it retries with a new code", "Using a longer URL"]
answer: 1
right: Right. Let the database enforce uniqueness, and retry on a conflict.
wrong: Detecting a duplicate is exactly what a unique index is for. What does the second insert do when it is violated?
:::

## Storing, caching and redirecting {lvl=3 id=s-path label="SDE-2"}

**Storage.** The data is a plain key-value lookup: `code -> long_url` plus a few fields (created, expires, owner). No joins are needed, so either a relational table with the code as primary key or a key-value or wide-column store fits. Start with a relational database: it is simple and handles 40 writes a second easily. Store replicas for read capacity and for failover (see the replication lesson).

**Read path with a cache.** On a click, the app server:
1. looks up the code in an in-memory **cache**;
2. on a miss, reads the database, stores the result in the cache (with a time-to-live, and evicting the least recently used) and returns it;
3. replies with a redirect.

A small share of links get most of the clicks, so a cache that holds about a fifth of a day's popular links can serve most requests from memory. Links rarely change, so stale entries are rare; when a link is deleted or edited, remove its cache entry.

**Bad codes.** Many requests will be for codes that do not exist (typos, scanners). Each would miss the cache and hit the database. Two cheap guards: cache the "not found" answer for a short time, and put a **Bloom filter** of all real codes in front of the database (see the Bloom filters lesson) so that a definite "no" never touches it.

**301 or 302?** Both redirect; they differ in what the browser remembers.

| | 301 Moved Permanently | 302 Found (temporary) |
|---|---|---|
| Browser behaviour | Caches the target, so later clicks may skip your server | Asks your server every time |
| Server load | Lower | Higher |
| Click analytics | Undercounted after the first click | Every click is seen |
| Edit or expire a link | Hard: browsers may keep the old target | Easy |

If you sell analytics or need to expire links, use **302** (or 307). If you only want the cheapest possible permanent mapping, use 301. This is a classic trade-off worth stating out loud. [Unverified: how long particular browsers keep a 301 varies.]

:::qc lvl=3
q: A marketing team wants to count every click on its links. Which redirect fits?
options: ["301, so browsers cache it", "302, so every click passes through the server", "No redirect; copy the page content"]
answer: 1
right: Right. With 301, a browser may jump straight to the target without telling you, hiding later clicks.
wrong: To count a click, the request must reach your server. Which redirect makes the browser ask every time?
:::

## Analytics without slowing the click {lvl=4 id=s-analytics label="SDE-3"}

Counting clicks tempts you to run `UPDATE links SET clicks = clicks + 1` on every redirect. At 40,000 requests a second that creates a hot row, locks and slow redirects, and ties your most important path to your least important feature.

Instead, **fire and forget**: the app server drops a small click event (code, time, country, device) onto a **message queue** and replies to the user at once. A separate consumer reads events, aggregates them (clicks per code per hour) and writes the totals to an analytics store. If analytics breaks, redirects keep working and the queue buffers events until it recovers. Counts may be a few seconds late and, with at-least-once delivery, may occasionally double count unless events carry ids (see the message queues lesson).

## Scaling, failure and abuse {lvl=4 id=s-scale label="SDE-3"}

**Scaling reads.** App servers are stateless, so add more behind the load balancer. Add cache nodes, spread over them with consistent hashing on the code. Add read replicas for the database. Serve from several regions, with a cache near the users (a CDN can even cache 301 responses at the edge).

**Scaling storage.** When 3 TB outgrows a machine, **shard by short code**: hash the code to pick the shard (see the partitioning lesson). Every lookup is by exact code, so one shard answers each click. Pick a generous number of virtual shards up front so that adding machines moves little data.

**Failure.** Run the database with a leader and replicas, and fail over automatically. Run the cache in several nodes: if one dies, its keys fall back to the database, and the database must be sized to survive a cold-cache moment (a **thundering herd**). Keep a copy in another data centre for disasters. Because writes are rare, the write path can fail briefly ("try again") while redirects keep working from replicas and caches.

**Abuse.** Rate-limit creation per user and IP; check long URLs against lists of malware and phishing sites; reserve words (`admin`, `login`); let links expire; and make codes unguessable. Short links hide the destination, which makes them popular with scammers, so a "preview" page for flagged links is common.

**How to present it.** Say the order out loud: requirements, numbers, API, data model, ID scheme, read path with cache, analytics, scaling, failures, abuse. Then ask which part to go deeper on. [Inference: a common interview approach, not a rule]

:::qc lvl=4
q: One celebrity link receives 100,000 clicks a second, far above one cache node's capacity. What is a sensible fix?
options: ["Nothing; one node always copes", "Keep a short-lived copy of that hot key in memory on every app server, or replicate the key across cache nodes", "Move to 301 for every link"]
answer: 1
right: Right. A **hot key** defeats sharding, since all requests land on one node. Local in-process caching or replicating the hot key spreads the load. (A 301 for that single link would also help, at the cost of analytics.)
wrong: Sharding by key sends every request for one key to the same place. How could you spread the work of serving one key?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Start with requirements, then numbers; the numbers (about 40 writes and 4,000 to 40,000 reads a second, about 3 TB) decide the design. {lvl=1}
2. A shortener is a key-value store from short code to long URL, with reads about 100 times more common than writes. {lvl=1}
3. $k$ base62 characters give $62^k$ codes; seven characters give about 3.5 trillion. {lvl=2}
4. Random code plus a unique constraint and retry is simple and safe; counters need ranges and scrambling; hashes need collision handling. {lvl=3}
5. Serve redirects from a cache, guard the database against missing codes, and pick 302 when you need analytics or edits. {lvl=3}
6. Send clicks through a queue, shard by code, replicate for failure, and add abuse controls. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Choosing tools before doing the arithmetic: 40 writes a second does not need a huge cluster. {lvl=2}
- Predictable sequential codes let anyone enumerate links; scramble or randomise. {lvl=3}
- Letting two links share a code because uniqueness was only checked in application code, not enforced by the database. {lvl=3}
- Using 301 and then wondering why analytics undercount or edits never reach users. {lvl=3}
- Updating a click counter inside the redirect request; use a queue. {lvl=4}
- Forgetting the thundering herd after a cache restart, and the hot key that overloads one cache node. {lvl=4}
:::
