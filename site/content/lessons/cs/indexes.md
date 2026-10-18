---
title: "Indexes: hash, B-tree and LSM-tree"
summary: How a database finds one order among a hundred million without reading the rest, and what that shortcut costs you.
ncert: []
up_to: SDE-3
builds_on: [Relational model and SQL, Hash tables, Searching and binary search]
notes_prompt: Explain to a friend why a book's index makes lookup fast, why a database index is like it, and why too many indexes make writing slow.
margin:
  - kind: history
    title: History
    text: "The B-tree was invented in 1970 by Rudolf Bayer and Edward McCreight at Boeing. The LSM-tree idea was published in 1996 by Patrick O'Neil and colleagues. [Unverified: exact years]"
  - kind: tip
    title: Interview favourite
    text: '"This query is slow, what do you do?" The expected first answer is: check the query plan, then add an index on the column in WHERE, and mention the cost to writes. Mention column order for composite indexes.'
  - kind: olympiad
    title: Design link
    text: 'Systems built for heavy writing (logs, messages, metrics) often use LSM-trees; systems built for balanced reads and writes (most business databases) often use B-trees. Know the trade, not just the names.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 3 Storage and Retrieval: hash indexes, SSTables and LSM-trees, B-trees [Unverified]" }
  - { title: "A. Petrov, Database Internals", ref: "B-tree basics and LSM-tree chapters [Unverified]" }
cards:
  - { front: "What is a database index?", back: "A separate, sorted (or hashed) structure that maps a column's values to row locations, so a query can jump to matching rows instead of scanning every row." }
  - { front: "Why is a B-tree so shallow?", back: "Each node is a whole disk page holding hundreds of keys, so the tree branches hundreds of ways per level. 100 million rows need only about 3 levels." }
  - { front: "What can a B-tree answer that a hash index cannot?", back: "Range and order questions (between, greater than, ORDER BY) because the keys are kept sorted. A hash index only answers exact equality." }
  - { front: "What is the leftmost-prefix rule for a composite index on (a, b)?", back: "The index helps queries that filter on a, or on a and b. It does not help a query that filters on b alone." }
  - { front: "What is the cost of an index?", back: "Extra space, and every insert, update or delete must also change each index on that table, so writes get slower." }
  - { front: "How does an LSM-tree make writes fast?", back: "Writes go to an in-memory table and are flushed as sorted files; background compaction merges files. Writes are sequential, never in-place edits." }
core:
  idea: 'An index is a second copy of one column kept in a form that is quick to search (a sorted tree or a hash table) with pointers back to the rows. It turns a scan of every row into a handful of steps, and you pay for it in space and in slower writes.'
  formulas:
    - tex: '\text{levels} \approx \log_{f}(N)'
      label: 'B-tree depth: N rows, f keys per node (the fanout)'
    - tex: '\text{scan} \approx N \qquad \text{B-tree} \approx \log_{f} N'
      label: 'Rows examined: scan versus indexed lookup'
  conditions:
    - 'The index matches the query: the indexed column is the one in WHERE, JOIN or ORDER BY'
    - 'The query is selective: it picks a small fraction of the rows (an index on a yes/no column rarely helps)'
    - 'A hash index needs exact-match questions only; range questions need a sorted index'
    - 'The workload reads more than it writes, or the writes can afford the extra work'
  sign: 'The commonest mistake: indexing every column "just in case". Each index slows every write and uses space; add one for a measured slow query.'
outcomes:
  - 'Explain why a query without an index must scan the whole table'
  - 'Describe how a B-tree finds a key in about three page reads for 100 million rows'
  - 'Choose between a hash index and a B-tree for a given question'
  - 'Pick the column order of a composite index using the leftmost-prefix rule'
  - 'Explain how an LSM-tree trades read cost for fast writes, and when to prefer it'
opener:
  story: |
    Open your UPI app and scroll back to a payment you made last March. Behind that screen sits a table of billions of payments, and your app finds yours in well under a second. [Inference: the real design is not public.]

    Now think about the simplest way a database could answer "show payments of customer 42". It would read the first row, then the second, then the third, checking whose payment it is, all the way to the end. For a hundred million rows that is a hundred million checks, on every tap, for every user at once.

    Yet it feels instant. A book solves this with an index at the back: look up a word, get the page numbers, flip straight there. What is the database's version of that back-of-the-book index, and why can't we simply have one for everything?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A magnifying glass over a long strip of rows versus a small tree with three steps that points straight at the right row"><g style="fill:color-mix(in srgb,var(--c) 8%,var(--surface));stroke:var(--rule)"><rect x="16" y="150" width="288" height="14"/><rect x="16" y="164" width="288" height="14"/><rect x="16" y="178" width="288" height="14"/><rect x="16" y="192" width="288" height="14"/></g><rect x="16" y="178" width="288" height="14" style="fill:var(--c);opacity:0.6"/><text x="16" y="226" style="font-size:10px;fill:var(--muted)">scan: look at every row, one by one</text><circle cx="160" cy="28" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="90" cy="82" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="230" cy="82" r="14" style="fill:var(--surface);stroke:var(--c);stroke-width:2.5"/><circle cx="196" cy="130" r="9" style="fill:var(--surface);stroke:var(--c);stroke-width:2.5"/><path d="M152 40 L98 70 M168 40 L222 70 M222 94 L200 122" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><path d="M196 139 L196 176" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:4 3"/><text x="16" y="24" style="font-size:11px;fill:var(--ink)">index: 3 hops</text><text x="16" y="40" style="font-size:10px;fill:var(--muted)">then straight to the row</text></svg>'
life:
  - 'The index at the back of a textbook, and the contacts app that jumps to "R" when you tap R, both trade a little extra structure for instant lookup.'
  - 'Every relational database creates an index on the primary key automatically, so "find the row with this id" is fast.'
  - 'Search boxes on shopping and food apps rely on indexes over names, categories and prices [Inference: typical, not public].'
  - 'Phone apps that store messages locally use SQLite, whose indexes are B-trees.'
  - 'Write-heavy systems such as message logs and sensor feeds often use LSM-tree stores such as RocksDB or Cassandra.'
models:
  - name: 'Pay once, search many times'
    text: 'An index is work done in advance so each later question is cheap. A well-sorted kitchen or a cleaned-up inbox is the same bet: pay at storing time, save at finding time.'
  - name: 'Every shortcut has a toll'
    text: 'Extra indexes speed reading and slow writing. Almost every optimisation moves cost from one place to another; ask who pays.'
  - name: 'Think in blocks, not items'
    text: 'Disks and networks move data in chunks, so the winning structure packs hundreds of items per chunk. Buying in bulk instead of one grain at a time is the same instinct.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'A hash index is a hash table stored on disk: compute where the key lives and look once.'
    differs: 'It answers only exact matches; a B-tree keeps keys in order and also answers ranges and sorting.'
  - leaf: 'cs/balanced-trees-and-b-trees'
    name: 'Balanced trees and B-trees'
    same: 'A database B-tree is exactly this structure, where each node is one disk page.'
    differs: 'This lesson is about how a database uses it, including composite keys and the cost of keeping it updated on every write.'
  - leaf: 'cs/bloom-filters'
    name: 'Bloom filters'
    same: 'An LSM-tree uses Bloom filters to skip files that surely do not contain the key.'
    differs: 'A Bloom filter only says "definitely not" or "maybe"; an index returns the actual location.'
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'Upper B-tree levels are small enough to stay in memory, so most lookups touch the slow disk only once or twice.'
    differs: 'The hierarchy is about hardware speed tiers; the index is a data layout that exploits them.'
next:
  q: 'You move 1,000 rupees from your account to a friend''s. The system must subtract here and add there. What if the power fails between the two steps, or two transfers happen at the same moment?'
  leaf: 'cs/transactions'
  name: 'Transactions and isolation'
symbols:
  - s: 'N'
    means: 'number of rows in the table (count)'
  - s: 'f'
    means: 'fanout: how many keys or children one B-tree node holds (count, often hundreds)'
  - s: '\log_{f} N'
    means: 'how many times you must divide N by f to reach 1: the number of tree levels'
  - s: 'scan'
    means: 'reading every row in turn to find matches'
  - s: 'page'
    means: 'the chunk a disk reads or writes at once, often 8 KB'
  - s: 'compaction'
    means: 'background merging of sorted files into fewer, bigger ones'
---

:::hook
q: Here's the puzzle. A table has 100 million rows and a B-tree index with about 500 keys in every node. Roughly how many page reads does it take to find one row by that key?
options: ["About 3", "About 27", "About 500"]
answer: 0
right: Right. Each level multiplies reach by 500, and 500 × 500 × 500 = 125 million, so three levels cover 100 million rows. Often the top two levels sit in memory, so the disk is touched only about once.
wrong: Binary search would need about 27 steps (since 2^27 is about 134 million), but a B-tree node holds hundreds of keys, not two. How many times must you multiply 500 by itself to pass 100 million?
:::

## The problem: scanning {lvl=1 id=s-scan label="Foundations"}

Take a table of orders with 1 million rows and ask: "give me the orders of customer 42". With nothing else in place the database has one choice: read every row, check the customer, keep the matches. This is a **scan**. The work grows in step with the table: ten times the rows, ten times the time.

You can see it yourself. In a quick test on one machine with SQLite and a million rows, the unindexed query took about 30 milliseconds and the indexed one about 0.06 milliseconds, roughly 500 times faster. (Your numbers will differ; the gap grows with the table.) At 100 million rows the scan becomes seconds, and for a busy site that is fatal.

So the database keeps an **index**: a separate structure that maps a column's values to the rows holding them, exactly like the index at the back of a book maps a word to page numbers.

```python
import sqlite3
db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE orders (id INTEGER PRIMARY KEY, customer_id INT, amount INT)")
db.execute("CREATE INDEX idx_cust ON orders(customer_id)")
plan = db.execute("EXPLAIN QUERY PLAN SELECT * FROM orders WHERE customer_id = 42")
print(plan.fetchall())   # SEARCH orders USING INDEX idx_cust (customer_id=?)
```

Without the `CREATE INDEX` line the plan says `SCAN orders`. `EXPLAIN QUERY PLAN` (other databases say `EXPLAIN`) is the way to check which one you got.

:::qc lvl=1
q: A table doubles from 1 million to 2 million rows. About how does a full scan's time change?
options: ["About the same", "About double", "About four times"]
answer: 1
right: Right. A scan reads every row, so the work grows in step with the number of rows.
wrong: A scan checks each row once. If there are twice as many rows, what happens to the number of checks?
:::

## Two ways to build one: hash and B-tree {lvl=2 id=s-two label="SDE-1"}

Two structures cover most uses.

A **hash index** is the hash table from the earlier lesson, kept in the database: hash the key, jump to the slot, read the row pointer. One step, whatever the size. The catch is that hashing scatters neighbours, so it answers only **exact** questions ("customer 42"), never "customers 40 to 50" or "sorted by name".

A **B-tree** keeps keys in sorted order inside a tree. Binary search on 100 million sorted keys takes about 27 steps, and every step could be a separate slow disk read. The B-tree improves this with one idea: **disks read a whole page at a time (often 8 KB), so make each node a whole page and pack it with hundreds of keys**.

:::figure caption="A B-tree. Each node holds many keys and sends you down one branch. With 500 keys per node, three levels reach 125 million rows."
<svg viewBox="0 0 560 220" role="img" aria-label="Root node with keys 100 and 200 pointing to three child nodes, each pointing to leaf pages with row pointers">
<g class="faint"><rect x="215" y="14" width="130" height="30" fill="none" stroke="currentColor"/></g>
<text x="232" y="34" style="font-size:12px;fill:var(--ink)">&lt;100 | 100-200 | &gt;200</text>
<g class="faint"><rect x="40" y="90" width="130" height="30" fill="none" stroke="currentColor"/><rect x="215" y="90" width="130" height="30" fill="none" stroke="currentColor"/><rect x="390" y="90" width="130" height="30" fill="none" stroke="currentColor"/></g>
<text x="58" y="110" style="font-size:11px;fill:var(--muted)">30 | 60 | 90</text><text x="232" y="110" style="font-size:11px;fill:var(--mat)">120 | 150 | 180</text><text x="408" y="110" style="font-size:11px;fill:var(--muted)">220 | 250 | 280</text>
<g class="faint"><rect x="130" y="170" width="70" height="26" fill="none" stroke="currentColor"/><rect x="215" y="170" width="70" height="26" fill="none" stroke="var(--mat)"/><rect x="300" y="170" width="70" height="26" fill="none" stroke="currentColor"/></g>
<text x="140" y="187" style="font-size:11px;fill:var(--muted)">120..139</text><text x="225" y="187" style="font-size:11px;fill:var(--mat)">140..159</text><text x="310" y="187" style="font-size:11px;fill:var(--muted)">160..179</text>
<path class="pen" d="M280 44 L280 90 M280 120 L250 170" fill="none" stroke="var(--mat)" stroke-width="2"/>
<path class="faint" d="M270 44 L105 90 M290 44 L455 90 M250 120 L165 170 M280 120 L335 170" fill="none" stroke="currentColor"/>
<text x="20" y="214" style="font-size:11px;fill:var(--muted)">Looking for 150: root says "100-200", next node says "150 is in the middle", leaf page holds the row pointer.</text>
</svg>
:::

Because the leaves are sorted, a B-tree handles ranges for free: find the first key of the range, then walk along the leaves. That is why most databases use B-trees as the default index.

:::qc lvl=2
q: Which question can a hash index NOT answer well?
options: ["Orders of customer 42", "Orders with amount between 500 and 900", "Whether customer 42 exists"]
answer: 1
right: Right. Hashing scatters neighbouring values, so ranges need a sorted structure such as a B-tree.
wrong: Equality means "exactly this value". Which option asks about a whole stretch of values?
:::

## Composite indexes and the cost of writing {lvl=2 id=s-composite label="SDE-1"}

An index can cover several columns. An index on `(city, amount)` sorts rows first by city, then by amount within each city, like a phone book sorted by last name, then first name. This gives the **leftmost-prefix rule**:

- `WHERE city = 'Pune' AND amount = 500` uses it fully.
- `WHERE city = 'Pune'` uses it (the first column alone).
- `WHERE amount = 500` cannot use it well: the amounts are scattered across all the cities, like looking for everyone named "Asha" in a phone book sorted by surname.

(I checked all three in SQLite: the first two print `SEARCH ... USING INDEX`, the third prints `SCAN`.) Put the column you filter on by equality first.

Now the toll. An index is a second structure that must stay in step with the table. Every insert adds an entry to the table **and** to each index; every update to an indexed column moves entries. A table with 10 indexes does about 11 writes per insert. Indexes also take space, sometimes as much as the table. So index the columns in your slow, frequent queries, and no more.

```python
db.execute("CREATE INDEX idx_city_amt ON orders(city, amount)")
# helps: WHERE city=? AND amount=?   and   WHERE city=?
# does not help: WHERE amount=?
```

:::qc lvl=2
q: A table has an index on (last_name, first_name). Which query can use it well?
options: ["WHERE first_name = 'Asha'", "WHERE last_name = 'Rao'", "WHERE first_name LIKE '%sha'"]
answer: 1
right: Right. The index starts with last_name, so filtering on it (the leftmost column) lets the database jump in.
wrong: The index is sorted by last name first. Which filter starts with the first sorted column?
:::

## LSM-trees: a different bargain {lvl=3 id=s-lsm label="SDE-2"}

A B-tree edits pages in place. That means random writes, slow on disks and wearing on flash. The **LSM-tree** (log-structured merge-tree) turns every write into an append.

1. A new write goes to a small sorted table in **memory** (the memtable), and also to a log on disk for safety.
2. When the memtable is full, it is written to disk as one sorted, never-edited file (an **SSTable**).
3. In the background, **compaction** merges sorted files into bigger sorted files, discarding old versions and deleted keys.
4. A read checks the memtable, then the files from newest to oldest. To avoid opening files that cannot contain the key, each file has a **Bloom filter** (from the earlier lesson).

Writes are fast and sequential, but a read may check several files, and compaction rewrites data again and again in the background. The same byte is written more than once: this is **write amplification**. Designing Data-Intensive Applications compares the two designs side by side (Chapter 3 [Unverified]).

| | B-tree | LSM-tree |
|---|---|---|
| Write | edit a page in place (random) | append, merge later (sequential) |
| Read | about 3 page reads, predictable | may check several files, helped by Bloom filters |
| Strength | balanced reads and writes, ranges | very high write rates |
| Cost | page rewrites, space left empty in pages | compaction work, read cost varies |
| Typical use | most business databases | logs, metrics, messaging, write-heavy stores [Inference: typical, not universal] |

:::qc lvl=3
q: Why does an LSM-tree keep a Bloom filter for each file?
options: ["To sort the file", "To skip files that definitely do not contain the key", "To compress the data"]
answer: 1
right: Right. A read would otherwise open many files; the filter says "definitely not here" for most of them, cheaply.
wrong: A Bloom filter never stores the data. What single yes-or-no answer can it give about a key?
:::

## Choosing indexes for a workload {lvl=4 id=s-choose label="SDE-3"}

Real choices come from the **workload**: which queries run, how often, and how selective they are.

- **Selectivity.** An index on `is_active` (two values) returns half the table, so scanning is as cheap. An index on `email` (nearly unique) is a perfect fit. Prefer indexing columns that narrow the result a lot.
- **Covering index.** If the index contains every column the query needs, the database never opens the table. `(customer_id, amount)` answers "sum of amounts per customer" from the index alone.
- **Sorting.** `ORDER BY created_at DESC LIMIT 20` is nearly free with an index on `created_at`: read the last 20 leaf entries. Without it, the database sorts everything.
- **Read, write and space amplification.** Any design pays on at least one of three: how much you read per lookup, how much you write per change, and how much extra space you hold. You cannot minimise all three, so you pick the pain your workload tolerates best.
- **Evidence beats guessing.** Read the query plan, test with realistic data volumes, and drop indexes no query uses.

At very large scale one machine's index is not enough, and the table is split across machines. Each machine then keeps its own indexes over its share, a theme the distributed-data lessons return to.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Without an index a query scans every row, so cost grows with the table. {lvl=1}
2. An index is a second, searchable structure pointing back to the rows, like a book's index. {lvl=1}
3. A hash index answers exact matches in one step; a B-tree also answers ranges and order. {lvl=2}
4. A B-tree node is a whole page with hundreds of keys, so 100 million rows need only about 3 levels. {lvl=2}
5. Composite indexes follow the leftmost-prefix rule; every index slows writes and costs space. {lvl=2}
6. LSM-trees turn writes into appends and merge later: faster writes, costlier reads and write amplification. {lvl=3}
7. Choose indexes from the workload: selective columns, covering indexes, and the query plan. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Indexing every column "just in case" makes every insert and update slower and wastes space. {lvl=2}
- A composite index on (a, b) does not help a query that filters only on b. {lvl=2}
- Wrapping an indexed column in a function (`WHERE lower(email) = ...`) usually stops the index being used unless the index is built on that expression. {lvl=3}
- An index on a column with very few distinct values rarely helps; the planner may ignore it. {lvl=3}
- A hash index cannot do ranges or sorting. {lvl=2}
- Always check with `EXPLAIN`; do not assume the database chose your index. {lvl=2}
:::
