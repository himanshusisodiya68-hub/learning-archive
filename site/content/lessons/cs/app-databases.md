---
title: Using a database from an app
summary: Why a page that shows 20 posts can secretly ask the database 21 questions, and the everyday tools engineers use to keep that fast.
ncert: []
up_to: SDE-3
builds_on: [Servers and back ends, Relational model and SQL, Hash tables]
notes_prompt: Explain to a friend why asking a database one question 20 times is slower than asking one bigger question once.
margin:
  - kind: history
    title: History
    text: 'Object-relational mappers (ORMs) arose because programmers think in objects while relational databases think in tables. The gap between the two is sometimes called the object-relational impedance mismatch. [Unverified: origin of the term]'
  - kind: tip
    title: Interview favourite
    text: '"The page is slow; the database is fine." Check the number of queries first. An N+1 pattern turns one page view into dozens of round trips, and fixing it is often a one-line change.'
  - kind: olympiad
    title: Design link
    text: 'A cache trades freshness for speed. Every design with a cache must answer: how stale can this data be, and who clears it when the truth changes?'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 2 Data Models and Query Languages; Ch. 3 Storage and Retrieval [Unverified]" }
  - { title: "Redis documentation (online)", ref: "Caching patterns: cache-aside and expiry (TTL)" }
cards:
  - { front: "When might you choose a document or key-value (NoSQL) store over SQL?", back: "When data is naturally one self-contained record read as a whole, access is mostly by key, the shape changes often, or you must spread very large write volumes across many machines. Default to SQL when data has relationships and you need joins and transactions." }
  - { front: "What is the N+1 query problem?", back: "Fetching a list with one query, then running one more query per item to get a related thing: 1 + N queries. Fix: fetch the related data in one query with a join or a batched IN query." }
  - { front: "What is a migration?", back: "A small, versioned script that changes the database structure (add a table or column). Run in order, it makes every environment, from your laptop to production, end up with the same structure." }
  - { front: "Why use a connection pool?", back: "Opening a database connection is slow and databases allow only a limited number. A pool keeps a few connections open and lends them to requests, so no request pays the set-up cost." }
  - { front: "What is the cache-aside pattern?", back: "Look in the cache first. On a miss, read the database, store the result in the cache with an expiry (TTL), and return it. On a write, update the database and delete the cached copy." }
  - { front: "How do you prevent SQL injection?", back: "Never build a query by gluing user text into it. Use parameterised queries (placeholders), so the database treats input strictly as data, never as code." }
core:
  idea: 'An app talks to its database through a small pool of reusable connections, using parameterised queries or an ORM. The cost to watch is the number of round trips: ask for related data in one query, and put a cache such as Redis in front of data that is read often and changes rarely.'
  formulas:
    - tex: 'Q = 1 + N'
      label: 'N+1 trap: one list query plus one query per item'
    - tex: 'c \approx \lambda \times t'
      label: 'Connections needed: arrival rate times time each query holds one'
  conditions:
    - 'The database is the single source of truth; the cache is only a copy that may be stale'
    - 'Queries use placeholders, never text glued together'
    - 'Schema changes are made by ordered, repeatable migrations'
    - 'Each cached value has an expiry and a plan for who clears it on change'
  sign: 'The commonest mistake is trusting the ORM to be efficient. It makes code short, but each innocent-looking line can hide a query, and a loop turns one query into hundreds.'
outcomes:
  - 'Choose between SQL and a NoSQL store for a small app, with reasons'
  - 'Write parameterised queries and explain what an ORM does for you'
  - 'Spot and fix an N+1 query problem'
  - 'Explain migrations and size a connection pool using a simple estimate'
  - 'Use Redis in the cache-aside pattern and describe its invalidation and stampede problems'
opener:
  story: |
    You open a photo app. Twenty posts load, each with the poster's name and a small avatar. On your phone it feels slow, about three seconds, though the whole page is only a few kilobytes. The engineer looks at the database and sees something odd: it is almost idle, and still the page makes **twenty-one** trips to it.

    Each trip is quick, a millisecond or two of work. But each also has to travel there and back, wait its turn, and return an answer. Twenty-one small trips can cost far more than one slightly larger one, like walking to the shop twenty-one times for one ingredient each.

    How did the code end up asking twenty-one questions when it needed one? And what do engineers do to make the database feel instant?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Left, a server makes 21 trips to a database. Right, it makes one trip and a cache answers repeats"><rect x="10" y="30" width="60" height="40" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="20" y="54" style="font-size:9px;fill:var(--ink)">server</text><rect x="240" y="30" width="70" height="40" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="250" y="54" style="font-size:9px;fill:var(--ink)">database</text><g style="fill:none;stroke:var(--bad);stroke-width:1"><path d="M72 36 L238 36"/><path d="M72 40 L238 40"/><path d="M72 44 L238 44"/><path d="M72 48 L238 48"/><path d="M72 52 L238 52"/><path d="M72 56 L238 56"/><path d="M72 60 L238 60"/><path d="M72 64 L238 64"/></g><text x="86" y="24" style="font-size:9px;fill:var(--bad)">1 + 20 trips, one after another</text><rect x="10" y="140" width="60" height="40" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="20" y="164" style="font-size:9px;fill:var(--ink)">server</text><rect x="120" y="150" width="60" height="30" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="132" y="169" style="font-size:9px;fill:var(--ink)">cache</text><rect x="240" y="140" width="70" height="40" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="250" y="164" style="font-size:9px;fill:var(--ink)">database</text><path d="M72 160 L118 160" style="fill:none;stroke:var(--mat);stroke-width:2"/><path d="M182 160 L238 160" style="fill:none;stroke:var(--mat);stroke-width:2"/><text x="86" y="132" style="font-size:9px;fill:var(--mat)">1 trip, answers kept nearby</text><text x="14" y="214" style="font-size:9px;fill:var(--muted)">fewer trips, and remember what you just asked</text></svg>'
life:
  - 'Opening your feed, an online shop''s product list or a train-booking search runs database queries behind the scenes, and a few well-chosen ones keep it quick.'
  - 'The product page you see during a big sale is mostly served from a cache, not freshly computed, so thousands of people can look at once.'
  - 'When an app updates itself and adds a field (say a profile photo) without wiping your data, a database migration has altered the structure safely.'
  - 'Search suggestions that appear as you type are often answered from a memory cache for the common words.'
  - 'A sign-in page that says "too many users, try again" can be a connection pool running out of connections.'
models:
  - name: 'Trips cost more than loads'
    text: 'Fetching 20 items in one go beats 20 separate fetches, as a single bulk grocery trip beats twenty visits. Whenever each step has a fixed overhead, batch the work.'
  - name: 'Remember what you just looked up'
    text: 'You keep your phone number in your head instead of looking it up each time. A cache is that memory: fast and nearby, but possibly out of date. Decide how stale you can tolerate.'
  - name: 'Change in small, ordered steps'
    text: 'A road repaired lane by lane keeps traffic moving. Migrations change a live system in small, reversible, ordered steps rather than one big rebuild.'
links:
  - leaf: 'cs/relational-model-and-sql'
    name: 'Relational model and SQL'
    same: 'An ORM is a layer that writes SQL for you, so everything there (tables, joins, keys) still applies underneath.'
    differs: 'SQL is the language you speak to the database. An ORM is a convenience in your own language, and it can hide how many queries it sends.'
  - leaf: 'cs/indexes'
    name: 'Indexes: hash, B-tree and LSM-tree'
    same: 'A cache and an index both exist to avoid doing the full, slow work again: one remembers answers, the other keeps data organised for lookup.'
    differs: 'An index lives inside the database and is always consistent with the data. A cache lives outside and can be stale.'
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'Redis in front of a database is one concrete case of the general idea: keep a fast copy of slow data near where it is used.'
    differs: 'The general lesson covers cache levels, eviction and CDNs. This lesson only covers the app-to-database pattern.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Redis is, at heart, a big in-memory hash table over the network: you give it a key and it hands back the value in about one step.'
    differs: 'A hash table lives inside one program. Redis is a separate server that many app servers share.'
next:
  q: 'So far every user sat at a keyboard or browser. What changes when the client is a phone app that may be offline for hours, installed in many old versions, and cannot be fixed by just refreshing the page?'
  leaf: 'cs/how-mobile-apps-work'
  name: 'How mobile apps work'
symbols:
  - s: 'N'
    means: 'the number of items in a list, such as the posts on one page (count)'
  - s: 'Q'
    means: 'the number of queries a page makes (count)'
  - s: '\lambda'
    means: 'the arrival rate: queries starting per second (per second)'
  - s: 't'
    means: 'how long one query holds its connection (seconds)'
  - s: 'c'
    means: 'the number of connections in use at once, on average (count)'
  - s: 'TTL'
    means: 'time to live: how long a cached value may be used before it expires (seconds)'
---

:::hook
q: Here is the puzzle. A page lists 20 posts with each author's name. The code fetches the posts, then loops and fetches each author. How many database queries does one page view make?
options: ["1", "2", "21"]
answer: 2
right: Yes, 21: one for the list plus one for each of the 20 authors. That is the N+1 problem. One query with a join, or a second query for all the authors at once (2 in total), does the same job with far fewer round trips. (This is a common pattern in real apps; any specific company's code is not public. [Inference])
wrong: Count it as the loop runs: one query for the posts, then one more inside the loop for each author. That adds up, and it grows with every extra post.
:::

## Why an app needs a database {lvl=1 id=s-why label="Foundations"}

In the last lesson the server forgot everything between requests. So where does your data live? In a **database**: a separate program whose job is to keep data safe on disk, let many servers read and write it at once, and answer questions about it quickly.

The server never keeps the truth; it keeps a connection to the database and asks. Think of the server as a shop assistant and the database as the stockroom: the assistant is replaceable, and the stockroom is where everything is actually kept.

## SQL or NoSQL? {lvl=1 id=s-choose label="Foundations"}

Two broad families exist (the earlier lessons on relational and non-relational models go deeper):

| | SQL (relational) | NoSQL (document, key-value, and others) |
|---|---|---|
| Data shape | tables with rows and columns; relations between tables | one self-contained record (a document) per key, or just a value per key |
| Strong at | joins across tables, strict structure, **transactions** (all-or-nothing changes) | very fast lookup by key, flexible shape, spreading huge volumes across machines |
| Examples | PostgreSQL, MySQL, SQLite | MongoDB (document), Redis (key-value) |
| Pick it when | data has relationships (users, orders, items), money or correctness matters, you are not sure what you will ask later | the record is read and written whole, access is by key, the shape varies a lot |

For most apps, **start with a SQL database**. Relationships appear sooner than you expect, and joins and transactions save you from writing them yourself. Reach for NoSQL when you can name the specific problem it solves. [Inference: this is a widely held rule of thumb, not a law.]

## Talking to it safely {lvl=2 id=s-query label="SDE-1"}

Your code sends the database a query as text. The danger: if you glue a user's input into that text, they can smuggle in their own SQL. This is **SQL injection**. Typing `'; DROP TABLE users; --` into a name field is the classic example.

The fix is **parameterised queries**: write the query with placeholders and pass the values separately. The database treats values only as data, never as code.

```python
# DANGEROUS: user text becomes part of the SQL
db.execute(f"SELECT * FROM users WHERE name = '{name}'")

# SAFE: the value travels separately from the query
db.execute("SELECT * FROM users WHERE name = %s", (name,))
```

An **ORM** (object-relational mapper, such as SQLAlchemy, Django ORM, Prisma or Sequelize) goes one step further. You write `User.query.filter_by(name=name).first()` in your own language and the ORM writes the safe SQL, then turns rows into objects. It saves time and avoids injection, but it hides the queries, which leads to our next trap.

:::qc lvl=2
q: Which line is safe from SQL injection?
options: ["db.execute(\"SELECT * FROM t WHERE id = \" + user_id)", "db.execute(\"SELECT * FROM t WHERE id = %s\", (user_id,))", "db.execute(f\"SELECT * FROM t WHERE id = {user_id}\")"]
answer: 1
right: Right. The placeholder keeps the value apart from the SQL text, so it can never be run as SQL.
wrong: Look for the version where the value is passed separately from the query string, not glued into it.
:::

## The N+1 trap {lvl=2 id=s-n1 label="SDE-1"}

Here is how 21 queries sneak in. With an ORM the code looks innocent:

```python
posts = Post.query.limit(20).all()          # 1 query
for p in posts:
    print(p.title, p.author.name)           # p.author hides 1 query each: +20
```

Reading `p.author` makes the ORM quietly run `SELECT * FROM users WHERE id = ...` for every post. In total $Q = 1 + N$ queries. Each trip has fixed overhead (network, parsing, queueing), so 21 trips cost much more than 21 times the data.

The fix is to ask for the related data **up front**, in one or two queries:

```python
posts = Post.query.options(joinedload(Post.author)).limit(20).all()
# one SQL query with a JOIN: 1 trip, not 21
```

Other ORMs have the same switch under other names (`include` in Prisma, `prefetch_related` in Django). A raw alternative is a second query that fetches all authors with `WHERE id IN (...)`, giving $Q = 2$.

:::figure caption="Same page, same data. Left: one query for the list, then one per author. Right: one joined query."
<svg viewBox="0 0 320 130" role="img" aria-label="Two bar rows: 21 small bars versus one bar, showing the round trips">
<text x="8" y="16" style="font-size:10px;fill:var(--muted)">N+1: 21 round trips</text>
<g style="fill:var(--bad)"><rect x="8" y="24" width="10" height="22"/><rect x="22" y="24" width="10" height="22"/><rect x="36" y="24" width="10" height="22"/><rect x="50" y="24" width="10" height="22"/><rect x="64" y="24" width="10" height="22"/><rect x="78" y="24" width="10" height="22"/><rect x="92" y="24" width="10" height="22"/><rect x="106" y="24" width="10" height="22"/><rect x="120" y="24" width="10" height="22"/><rect x="134" y="24" width="10" height="22"/><rect x="148" y="24" width="10" height="22"/><rect x="162" y="24" width="10" height="22"/><rect x="176" y="24" width="10" height="22"/><rect x="190" y="24" width="10" height="22"/><rect x="204" y="24" width="10" height="22"/><rect x="218" y="24" width="10" height="22"/><rect x="232" y="24" width="10" height="22"/><rect x="246" y="24" width="10" height="22"/><rect x="260" y="24" width="10" height="22"/><rect x="274" y="24" width="10" height="22"/><rect x="288" y="24" width="10" height="22"/></g>
<text x="8" y="76" style="font-size:10px;fill:var(--muted)">Join: 1 round trip</text>
<rect x="8" y="84" width="40" height="22" style="fill:var(--mat)"/>
<text x="8" y="124" style="font-size:9px;fill:var(--muted)">Each bar is one trip (network wait included), not the amount of data.</text>
</svg>
:::

:::qc lvl=2
q: Your page lists 50 orders and shows each one's customer name, using an ORM that loads the customer lazily inside a loop. How many queries run?
options: ["1", "2", "51"]
answer: 2
right: Right. One for the orders and one per order for its customer: 1 + 50 = 51.
wrong: Lazy loading means each customer is fetched at the moment you use it. Count the loop.
:::

## Migrations {lvl=3 id=s-migrate label="SDE-2"}

Your database has a structure (tables and columns), and the structure changes as the product grows: a new column, a new table. How do you make that change on your laptop, on a teammate's, on test and on production, in the same way?

With **migrations**: small numbered scripts, each describing one change, kept in git next to the code. A tool (Alembic, Django migrations, Prisma Migrate, Flyway) remembers which have run and applies the rest, in order.

```python
# migration 0007_add_phone.py
def upgrade():
    op.add_column("users", sa.Column("phone", sa.String(15), nullable=True))

def downgrade():
    op.drop_column("users", "phone")
```

Habits worth having: never edit a migration that has already run elsewhere (write a new one); add new columns as **nullable** or with a default so old code keeps working during a rolling deploy; and test the migration on a copy of real data, because a change that is instant on 100 rows can lock a table with 100 million. [Unverified: exact locking behaviour varies by database and version.]

## Connection pools {lvl=3 id=s-pool label="SDE-2"}

To talk to the database, a server opens a **connection**. Opening one is slow (network handshake, login, setup) and the database only allows a limited number at a time, often some hundreds. If every request opened its own, you would spend more time connecting than querying, and a traffic spike would hit the limit.

A **connection pool** opens a fixed number of connections once and lends them out. A request borrows one, runs its queries, and returns it.

How big should the pool be? A rough estimate: if $\lambda$ queries start each second and each holds a connection for $t$ seconds, then on average

$$c \approx \lambda \times t$$

connections are busy. Read it as: arrivals per second times seconds held. For example, 500 queries a second that each take 20 ms (0.02 s) keep about $500 \times 0.02 = 10$ connections busy. Add headroom for spikes, but remember that all your server copies share the database's limit: 20 servers with pools of 20 is 400 connections. When the pool is empty, new requests wait in line, which shows up as a sudden slowness. A bigger pool is not always better, since a database does best with a modest number of active queries. [Inference: typical advice; the right size depends on the database and the hardware.]

:::qc lvl=3
q: 1,000 queries start each second and each holds a connection for 30 ms. About how many connections are busy on average?
options: ["About 3", "About 30", "About 300"]
answer: 1
right: Right. 1000 × 0.03 = 30. Plan the pool a little above this, to cover bursts.
wrong: Multiply the arrivals per second by the seconds each one holds a connection. Convert 30 ms to seconds first.
:::

## Caching with Redis {lvl=3 id=s-cache label="SDE-2"}

Some questions are asked again and again with the same answer: the front-page product list, a user's profile. Recomputing them from the database every time wastes effort. **Redis** is an in-memory key-value store: a very fast hash table that all your servers can share. Reading from memory takes microseconds to a millisecond; a database query often takes much longer.

The standard recipe is **cache-aside**:

```python
def get_profile(user_id):
    key = f"profile:{user_id}"
    cached = redis.get(key)
    if cached:
        return json.loads(cached)               # hit: no database trip
    row = db.fetch_profile(user_id)             # miss: ask the database
    redis.set(key, json.dumps(row), ex=300)     # keep for 300 s (the TTL)
    return row
```

On a **write**, update the database first, then **delete** the cached key, so the next read refetches fresh data. The **TTL** (time to live) is a safety net: even if you forget to clear a key, it expires on its own.

The famous line (usually credited to Phil Karlton) is that cache invalidation is one of the two hard problems in computer science. The cache is a copy, so it can be wrong. Decide how stale each kind of data may be: a product description can lag for minutes; an account balance should not be cached at all.

## When the cache goes wrong {lvl=4 id=s-stampede label="SDE-3"}

Three failure patterns every senior engineer knows:

| Problem | What happens | Common remedy |
|---|---|---|
| **Stampede** | A hot key expires; 5,000 requests all miss at once and hit the database together | Let one request rebuild it while the others wait or use the old value; add a random jitter to TTLs so keys do not expire together |
| **Stale write race** | Reader A misses and reads the old row; a writer updates the database and clears the cache; A then stores the old row in the cache | Short TTLs, versioned keys, or deleting the key again shortly after the write |
| **Cache penetration** | Requests for ids that do not exist always miss, so every one reaches the database | Cache the "not found" answer briefly, or use a Bloom filter in front |

Also remember that a cache that holds everything up must be treated as a dependency: if Redis goes down and the database cannot take the load, a cache failure becomes an outage. Test what happens when the cache is empty, because a restart starts you there. [Inference: what real companies do is mostly not public; these are widely described patterns.]

:::qc lvl=4
q: A very popular key expires and thousands of requests hit the database at the same moment. What is this called?
options: ["A cache stampede", "A migration", "An N+1 query"]
answer: 0
right: Right. Spreading expiry with random jitter, and letting only one request rebuild the value, are the usual fixes.
wrong: Think of many requests rushing the database together because the cached copy vanished at once.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The server is replaceable; the database holds the truth. {lvl=1}
2. Start with SQL for most apps; choose NoSQL when you can name the problem it solves. {lvl=1}
3. Use parameterised queries, never glued strings, to prevent SQL injection. {lvl=2}
4. An ORM writes the SQL for you, but a loop can hide N+1: one list query plus N more. Fetch related data up front. {lvl=2}
5. Migrations are ordered, versioned scripts that change the database structure the same way everywhere. {lvl=3}
6. A connection pool reuses a few open connections; busy connections are roughly arrivals per second times seconds held. {lvl=3}
7. Cache-aside with a TTL speeds up reads; clear the key on writes, and plan for stampedes. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never build SQL by joining strings with user input. Use placeholders. {lvl=2}
- A fast-looking ORM loop can hide hundreds of queries; log the query count during development. {lvl=2}
- Never edit a migration that has already run in another environment; write a new one. {lvl=3}
- Count the database's total connection limit across all server copies, not just one pool. {lvl=3}
- A cache is a copy and can be stale. Do not cache data that must be exact, such as balances. {lvl=3}
- If the cache empties (restart, mass expiry), can the database survive the rush? Test that. {lvl=4}
:::
