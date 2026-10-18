---
title: Document, key-value and graph models
summary: Why one shop's phone listing and another's shirt listing don't fit the same table, and how to choose a database by the questions you ask.
ncert: []
up_to: SDE-2
builds_on: [Relational model and SQL, Hash tables, Indexes]
notes_prompt: Explain to a friend why a shopping app might store a product as one flexible document while a bank keeps balances in tidy tables.
margin:
  - kind: history
    title: History
    text: The word NoSQL was popularised around 2009 by a meetup of engineers who were tired of squeezing huge web workloads into one relational server. Today it means "not only SQL", and many "NoSQL" systems now speak SQL too. [Unverified]
  - kind: tip
    title: Interview favourite
    text: When a system design question says "billions of small reads by id", think key-value. "Friends of friends" or "who is connected to whom" means graph. "Products with different attributes" means document.
  - kind: olympiad
    title: Design link
    text: A data model is a promise about which questions are cheap. Pick the model whose cheap questions are your common questions, and the expensive ones your rare ones.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 2 Data Models and Query Languages [Unverified]; Ch. 3 Storage and Retrieval: column-oriented storage [Unverified]" }
  - { title: "P. J. Sadalage and M. Fowler, NoSQL Distilled", ref: "Aggregate-oriented data models [Unverified]" }
cards:
  - { front: "What does a relational database store, and what is a join?", back: "Rows in tables with a fixed set of columns. A join combines rows of two tables by matching a shared value, such as a user id." }
  - { front: "What is a document database good at?", back: "Storing a self-contained record (like one product or one profile) as a single flexible blob of nested fields, so one read returns everything about it." }
  - { front: "What is a key-value store, and what can't it do well?", back: "A giant hash table across machines: get(key) and put(key, value). It is very fast for lookups by key, but poor at queries like 'all values where age > 30'." }
  - { front: "Schema-on-write versus schema-on-read?", back: "Schema-on-write: the database checks structure when you save (relational). Schema-on-read: anything can be saved, and the reading code decides what the structure means (document)." }
  - { front: "When is a graph database the right choice?", back: "When the questions are about connections and paths: friends of friends, shortest route, fraud rings. Joins across many hops are slow in tables and natural in a graph." }
  - { front: "How do you pick a data model?", back: "List the most frequent and most important queries (the access patterns), then choose the model that answers them with the fewest places to visit." }
core:
  idea: 'There is no best database model, only a best match to the questions you ask most. Relational tables suit many-to-many facts and flexible queries; documents suit self-contained records read whole; key-value suits lookups by id at huge scale; wide-column suits huge write streams read by key and range; graphs suit questions about connections.'
  formulas:
    - tex: '\text{cost of a question} \approx \text{number of places it must visit}'
      label: 'The rule behind every model choice'
  conditions:
    - 'You can list your main access patterns before choosing (they change later, and then the choice is revisited)'
    - 'One model rarely fits everything: real systems often keep several databases side by side'
    - 'The relationships in the data are known: one-to-many favours documents, many-to-many favours tables or graphs'
  sign: 'The commonest mistake is picking a model for its fashion or its scale story, not for the queries. A schema is not removed by "schemaless"; it just moves into your code.'
outcomes:
  - 'Describe the relational, document, key-value, wide-column and graph models in one sentence each'
  - 'Explain schema-on-write and schema-on-read, and who enforces structure in each'
  - 'Match an access pattern (by id, by range, by connection, by arbitrary filter) to a model'
  - 'Explain why joins are cheap in one machine and costly across many'
  - 'Argue a trade-off for a given product and name what you give up'
opener:
  story: |
    You are building a shopping app. A phone has RAM, battery and screen size. A shirt has size, fabric and colour. A mattress has firmness and a warranty. A book has an author and a page count.

    In a classic table, every product must have the same columns. Do you make one table with 200 columns, most of them empty for any given product? Or one table per kind of product, and a tangle of joins every time you show a search page?

    Big shops face exactly this. So what could you store instead, so that one read of "product 4812" returns everything about it, even though no two kinds of product look alike?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Rows of identical table columns on the left, and three differently shaped product cards on the right"><g style="fill:none;stroke:var(--rule)"><rect x="14" y="30" width="108" height="150" rx="6"/><line x1="14" y1="54" x2="122" y2="54"/><line x1="50" y1="30" x2="50" y2="180"/><line x1="86" y1="30" x2="86" y2="180"/><line x1="14" y1="84" x2="122" y2="84"/><line x1="14" y1="114" x2="122" y2="114"/><line x1="14" y1="144" x2="122" y2="144"/></g><text x="18" y="46" style="font-size:9px;fill:var(--muted)">id</text><text x="54" y="46" style="font-size:9px;fill:var(--muted)">ram</text><text x="90" y="46" style="font-size:9px;fill:var(--muted)">size</text><text x="58" y="104" style="font-size:9px;fill:var(--bad)">empty</text><text x="94" y="74" style="font-size:9px;fill:var(--bad)">empty</text><text x="20" y="200" style="font-size:10px;fill:var(--muted)">one shape for all</text><path d="M128 100 L160 100" style="stroke:var(--c);stroke-width:2;fill:none"/><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c)"><rect x="168" y="22" width="132" height="52" rx="8"/><rect x="176" y="86" width="124" height="64" rx="8"/><rect x="168" y="162" width="132" height="44" rx="8"/></g><text x="176" y="42" style="font-size:10px;fill:var(--ink)">phone: ram, battery,</text><text x="176" y="56" style="font-size:10px;fill:var(--ink)">screen, 5G</text><text x="184" y="106" style="font-size:10px;fill:var(--ink)">shirt: size, fabric,</text><text x="184" y="120" style="font-size:10px;fill:var(--ink)">colour, fit, sleeve</text><text x="176" y="182" style="font-size:10px;fill:var(--ink)">book: author, pages</text><text x="176" y="226" style="font-size:10px;fill:var(--muted)">one shape per item</text></svg>'
symbols:
  - s: 'document'
    means: 'a self-contained record of nested fields, often written as JSON; read and written as one unit'
  - s: 'key'
    means: 'the unique name you use to find a value (a user id, an order number)'
  - s: 'join'
    means: 'combining rows from two tables by matching a shared value'
  - s: 'schema'
    means: 'the agreed structure of the data: which fields exist and what type each has'
  - s: 'edge'
    means: 'in a graph, a link between two things (node), such as "follows" or "paid"'
  - s: 'access pattern'
    means: 'a question your application asks again and again, such as "all orders of user 7, newest first"'
life:
  - 'A shopping app stores each product as a document so a phone and a shirt can have different fields.'
  - 'A session store keeps "login token → user" as key-value pairs because every request looks up exactly one token.'
  - 'Social apps suggest "people you may know" by walking friend-of-friend connections, a graph question.'
  - 'Sensor and log systems write millions of timestamped rows a second, read back by device and time range, the home ground of wide-column stores.'
  - 'Your bank keeps balances in relational tables, where strict structure and exact consistency matter more than flexibility.'
models:
  - name: 'Choose the container by the question'
    text: 'A suitcase suits a trip, a toolbox suits repairs. No container is best; it is best for a use. Ask "what will I take out, and how often?" before choosing a shelf, a folder system or a database.'
  - name: 'Where does the rule live?'
    text: 'A rule can be enforced by the system (a form that refuses blanks) or by each person who reads it (everyone checks for themselves). Schema-on-write versus schema-on-read is the same choice. Central rules are safe and rigid; local rules are flexible and easy to forget.'
  - name: 'Copying versus linking'
    text: 'A recipe can say "see page 40" or repeat the instructions. Linking saves space and stays in sync; copying is faster to read but can go stale. Every data model decides what to copy and what to link.'
links:
  - leaf: 'cs/relational-model-and-sql'
    name: 'Relational model and SQL'
    same: 'Both store facts and let you ask questions about them; both can have indexes and unique ids.'
    differs: 'Tables fix the structure up front and make ad-hoc questions and joins cheap; documents trade that for flexible records read in one go.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'A key-value store is a hash table spread over many machines: hash the key, go straight to its place.'
    differs: 'A store must survive crashes and spread across machines, so it adds disks, copies and routing on top of the hash.'
  - leaf: 'cs/graphs'
    name: 'Graphs and their representations'
    same: 'A graph database stores exactly the nodes and edges of the graph you study in algorithms.'
    differs: 'A database must keep them on disk, answer queries in a query language and stay correct under many writers.'
  - leaf: 'cs/indexes'
    name: 'Indexes'
    same: 'Every model uses indexes to avoid scanning; the model decides which indexes are natural.'
    differs: 'Relational and document stores index fields inside records; a pure key-value store indexes only the key.'
next:
  q: 'A single database machine holds your data. What happens to your shop the day that machine catches fire, or the day a million people open the app in the same minute?'
  leaf: 'cs/replication'
  name: 'Replication'
---

:::hook
q: Here's the puzzle. A shop sells phones, shirts and books. One table with a column for every possible detail needs about 200 columns. What is a better plan for the product page?
options: ["Keep adding columns; empty ones cost nothing", "Store each product as its own flexible record with only its own fields", "Store every detail in a separate file on disk"]
answer: 1
right: Right. A document per product keeps all of a product's details together, so one read shows the whole page and a phone and a shirt need not share a shape. The price is that cross-product questions, such as the average battery size of all phones, are now your code's job. (How a particular shop does this is not public. [Inference])
wrong: Empty columns do cost something, and 200 of them make the table hard to understand and change. What if each product carried only the fields that belong to it?
:::

## The question comes first {lvl=1 id=s-first label="Foundations"}

Before any technology, ask what you will do with the data. Three common questions look similar but need different shelves:

- **"Give me everything about product 4812."** One thing, found by its id, read whole.
- **"Which users have bought both a phone and a case?"** Many things, filtered and combined.
- **"Who are the friends of my friends?"** Things connected to things, followed hop by hop.

A **data model** is the shape in which you keep the data, and every shape makes some questions cheap and others slow. The rest of this lesson is a tour of the shapes and the questions each one likes.

| Model | Shape | Cheap question | Costly question |
|---|---|---|---|
| Relational | Rows in tables | Any filter or join you can write in SQL | A record spread across ten tables |
| Document | Nested record | "Give me this whole thing by id" | Joins across documents |
| Key-value | Key to value | "get(key)" | Anything not by key |
| Wide-column | Rows with sparse columns, sorted by key | Huge writes, scan a key range | Joins, ad-hoc filters |
| Graph | Nodes and edges | Paths and neighbours | Plain bulk reports |

:::qc lvl=1
q: You need to look up a login session by its random token, millions of times a second, never any other way. Which model fits most naturally?
options: ["Graph", "Key-value", "Relational with five joins"]
answer: 1
right: Right. Every request is exactly "get this key", which is what a key-value store does best.
wrong: Look at the question being asked. Is there any filtering, joining or path following, or only a lookup by one name?
:::

## Tables and documents {lvl=2 id=s-tables label="SDE-1"}

In the **relational model** the data is cut into tables of rows with fixed columns. A customer is one row; each of their orders is a row in another table that holds the customer's id. To show "Asha's orders" you **join** the two tables on that id. Because nothing is repeated, a change to Asha's address happens in one place.

In the **document model** you store the customer and their orders together, as one nested record:

```python
order = {
    "id": 4812, "customer": "Asha",
    "items": [{"sku": "phone-x", "qty": 1},
              {"sku": "case-y", "qty": 2}],
    "address": {"city": "Pune", "pin": "411001"},
}
```

One read returns the whole order, which is ideal when you always show it whole. The idea is that the data you read together should live together. This is also called **locality**: one trip to the disk instead of three.

The cost shows up in relationships. If a product's name is copied into a million orders, renaming it means updating a million documents, or accepting stale copies. Documents fit **one-to-many** shapes, where each order belongs to one customer. They strain on **many-to-many** shapes, such as students and courses, where tables and joins are more natural.

## Schema-on-write and schema-on-read {lvl=2 id=s-schema label="SDE-1"}

A **schema** is the agreement about which fields exist and what type each has. The two models enforce it at different moments:

- **Schema-on-write** (relational): the database checks every row when it is saved and rejects a bad one. Changing the shape needs a migration, an explicit step that rewrites the table.
- **Schema-on-read** (document): the database accepts any record, and the code that reads it decides what the fields mean. Old and new shapes can live side by side.

The second is much like a language where variables have no declared type: flexible, and the check is done when the value is used. A common pattern when a document's shape changes is to write new records in the new shape, and let the reading code handle both until old ones are rewritten.

Schema-on-read does not mean no structure. Your code still assumes `order["address"]["pin"]` exists. The structure has moved from the database into every program that reads it, which is fine for one team and risky for fifty.

:::qc lvl=2
q: A team renames a field in a document store and some old records still have the old name. Which statement is correct?
options: ["The database will refuse to read the old records", "Reading code must handle both names until the old records are rewritten", "The old records are rewritten automatically"]
answer: 1
right: Right. With schema-on-read the database does not enforce shape, so the reader has to cope with every shape that exists.
wrong: A schema-on-read store checks nothing when reading or writing. Who then has to handle two different shapes?
:::

## Key-value and wide-column stores {lvl=3 id=s-kv label="SDE-2"}

A **key-value store** gives you two moves, `put(key, value)` and `get(key)`. The value is opaque: the store does not look inside. Because the only question is by key, the store can **hash the key to pick a machine** (the next lessons explain how), and it scales almost without limit. Caches and session stores are the classic uses.

A **wide-column store** keeps rows sorted by a key, and each row can hold a different, huge set of columns. Think of a huge spreadsheet where the rows are sorted and most cells are empty. Because rows are sorted, a **range** of keys (say all readings of sensor 7 from 2 pm to 3 pm) sits together on disk and can be read in one sweep. These stores are typically built on an append-friendly structure (the LSM-tree of the indexes lesson), so they absorb very high write rates. [Inference: the usual design; details vary by product.]

The key choice is then the whole design. A key such as `sensor7#2026-10-18T14:00` makes "readings of sensor 7 in an hour" one range scan. A key that starts with the timestamp would pile every new write onto one machine, a trap the partitioning lesson returns to.

```python
# Key design is the query design
def key(sensor, ts):
    return f"{sensor}#{ts}"      # sorted by sensor, then time

# range scan: all keys from "sensor7#14:00" to "sensor7#15:00"
```

:::qc lvl=3
q: Why does the choice of key matter so much in a wide-column store?
options: ["It decides which questions are a single range read and which need a full scan", "It decides the colour of the rows", "Keys are only labels and can be anything"]
answer: 0
right: Right. Rows are stored sorted by key, so the key defines what sits together and therefore which queries are cheap.
wrong: Think about what "sorted by key" means for data that is read together. What does a good key put side by side?
:::

## Graphs {lvl=3 id=s-graph label="SDE-2"}

Some data is mainly about relationships: people follow people, accounts send money to accounts, one road meets another. In a **graph database** the things are **nodes** and the connections are **edges**, and an edge can carry a label and details ("follows", "since 2024").

The strength is following connections. "Friends of friends" in tables means joining the follows table to itself, and each extra hop is another join, costing more each time as the data grows. In a graph, each node knows its neighbours, so a hop is a short walk from where you are. The same idea gives shortest paths, recommendations ("people who bought this also bought") and fraud rings in payments, where one phone number links many accounts.

```python
follows = {"asha": {"ravi", "meena"}, "ravi": {"kabir"}, "meena": {"kabir", "dev"}}
def friends_of_friends(u):
    out = set()
    for f in follows.get(u, ()):
        out |= follows.get(f, set())
    return out - follows[u] - {u}
```

Read it as: for each person I follow, collect who they follow, then drop people I already follow and myself. For `asha` this gives `{kabir, dev}`.

## Choosing, and mixing {lvl=3 id=s-choose label="SDE-2"}

A practical method:

1. **List the access patterns** with rough frequency: "show order by id: 5,000 per second; orders by user: 200 per second; monthly revenue report: once a day".
2. **Mark each as lookup, range, filter or path.** Lookups point to key-value or document, ranges to wide-column or an ordered index, filters and joins to relational, paths to graph.
3. **Decide what must be exact.** Money and stock counts need strong guarantees; a "likes" counter can be approximate.
4. **Accept several databases.** A common design [Inference: typical, not any one company's]: a relational database as the source of truth, a cache of hot items in a key-value store, and a search index for text queries. Each answers the question it is best at, and copies are kept in step by events.

Two trends blur the lines. Relational databases now often store JSON documents in a column, and many document databases now offer joins and transactions. So do not choose by label; ask what the database does cheaply for your queries, then test it with your own data.

## Where it is heading {lvl=4 id=s-limits label="SDE-3"}

At scale, the model choice has consequences that surface in the next lessons:

- **Joins cost more across machines.** On one machine a join is a few memory reads. When the two tables live on different machines, it becomes network traffic. Denormalising (copying data so one document holds it all) avoids that, at the price of keeping the copies correct.
- **Transactions get harder.** Many early NoSQL stores promised atomic updates only inside one record, so the data model had to keep things that change together inside one record. This is a design force: the boundary of the record is the boundary of the guarantee.
- **Evolving shapes.** Whatever the model, plan for the shape to change: version your records, keep readers tolerant, and migrate gradually.

A good SDE-3 question is not "which database?" but "which operations must be atomic, which can lag, and what is the cheapest model that gives me exactly that?"

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A data model makes some questions cheap and others costly; choose it by your access patterns, not by fashion. {lvl=1}
2. Relational means tables, a fixed schema checked on write, and joins; documents keep what is read together stored together. {lvl=2}
3. Schema-on-read gives flexibility but moves the schema into your code. {lvl=2}
4. Key-value stores answer get-by-key at huge scale; wide-column stores add sorted ranges and heavy writes, so key design is query design. {lvl=3}
5. Graph stores make multi-hop connection questions cheap. {lvl=3}
6. Real systems mix several stores, and the unit of a record often becomes the unit of a transaction. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Schemaless" is a myth: the structure still exists, only in the code that reads the data. {lvl=2}
- Copying data into documents for speed means you must update every copy; if you cannot, you will serve stale data. {lvl=2}
- A key-value store cannot answer "all values where field > x" without scanning everything. {lvl=2}
- A timestamp-first key sends every new write to one machine and creates a hot spot. {lvl=3}
- In interviews, state the access patterns first, then the model, then what you give up; that order shows judgement. {lvl=3}
:::
