---
title: Relational model and SQL
summary: How a ticket-booking site keeps one copy of every fact, yet can still answer "show all my bookings" in a blink.
ncert: []
up_to: SDE-2
builds_on: [Lists, dictionaries and sets, Functions]
notes_prompt: Explain to a friend why a shop keeps customers and orders in two separate tables, and how a join puts them back together.
margin:
  - kind: history
    title: History
    text: "Edgar F. Codd, a researcher at IBM, proposed the relational model in a 1970 paper. SQL grew out of IBM's System R project in the 1970s. [Unverified: exact years]"
  - kind: tip
    title: Interview favourite
    text: '"Top customer per city", "users with no orders", "second highest salary": almost every SQL interview question is a join plus a GROUP BY plus a filter. Say each step aloud before writing it.'
  - kind: olympiad
    title: Design link
    text: When one machine can no longer hold the tables, joins get expensive because the rows live on different machines. That is why large systems sometimes copy data on purpose, trading tidiness for speed.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 2 Data Models and Query Languages: relational model, declarative queries [Unverified]" }
  - { title: "A. Silberschatz et al., Database System Concepts", ref: "Relational model, SQL and normalisation chapters [Unverified]" }
cards:
  - { front: "What is a primary key?", back: "A column (or set of columns) whose value is different in every row, so it names exactly one row. Example: a passenger's id number." }
  - { front: "What is a foreign key?", back: "A column in one table holding the primary key of a row in another table, so the rows are linked without copying data." }
  - { front: "What does a JOIN do?", back: "Pairs up rows from two tables wherever a condition holds, usually foreign key = primary key, giving one wide table of answers." }
  - { front: "WHERE versus HAVING?", back: "WHERE filters individual rows before grouping; HAVING filters the groups after GROUP BY (for example, groups whose total exceeds 500)." }
  - { front: "Why split data into several tables (normalise)?", back: "So each fact is stored once. Change it in one place and it is right everywhere; no copies can disagree." }
  - { front: "What does a LEFT JOIN keep that a plain JOIN drops?", back: "Rows from the left table that have no match on the right (a customer with no orders), with NULL in the right-hand columns." }
core:
  idea: 'A relational database stores each kind of thing in its own table of rows and columns, stores each fact once, and links rows by keys. SQL lets you describe the answer you want (filter, join, group) and leaves the how to the database.'
  formulas:
    - tex: '\text{SELECT } columns \text{ FROM } table \text{ WHERE } condition'
      label: 'The basic question: which columns, from which table, for which rows'
    - tex: '\text{orders.customer\_id} \;\longrightarrow\; \text{customers.id}'
      label: 'A foreign key points at a primary key; a JOIN follows the arrow'
  conditions:
    - 'Data fits tables with a fixed set of columns (each row has the same fields)'
    - 'Every table has a primary key that never repeats and never changes meaning'
    - 'A foreign key value either matches an existing row or is empty, never a dangling id'
    - 'Each fact lives in one table only (normalised); copies are made deliberately, not by accident'
  sign: 'The commonest bug: a join on the wrong columns. Every row of one table pairs with every row of the other (a cross product), and the answer silently explodes.'
outcomes:
  - 'Describe a table, a row, a column, a primary key and a foreign key in plain words'
  - 'Write SELECT queries with WHERE, ORDER BY and GROUP BY'
  - 'Join two tables and predict how many rows come back'
  - 'Explain why data is split across tables, and when copying it back is wise'
  - 'Run SQL from Python with the built-in sqlite3 module'
opener:
  story: |
    You book a train ticket on IRCTC. A few weeks later you book another, and another. Open "My bookings" and all of them are there, each showing your name and your phone number.

    Here is the puzzle. Suppose the site had saved your phone number inside every single ticket. You change your number. Now thousands of tickets across years must all be fixed, and if the site misses one, two tickets disagree about who you are. So the number must live in one place only.

    But then how does "My bookings" put your name next to each ticket? It has to stitch the pieces together in the blink of an eye. How? (IRCTC's real design is not public; this is the textbook way to build it. [Inference])
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A passengers table and a tickets table linked by an arrow from the passenger id in each ticket"><text x="16" y="22" style="font-size:11px;fill:var(--muted)">passengers</text><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="16" y="30" width="88" height="24"/><rect x="16" y="54" width="88" height="24"/><rect x="16" y="78" width="88" height="24"/></g><rect x="16" y="30" width="88" height="24" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="22" y="46" style="font-size:10px;fill:var(--ink)">1  Asha  98xx</text><text x="22" y="70" style="font-size:10px;fill:var(--ink)">2  Ravi  97xx</text><text x="22" y="94" style="font-size:10px;fill:var(--ink)">3  Meera 99xx</text><text x="176" y="22" style="font-size:11px;fill:var(--muted)">tickets</text><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="176" y="30" width="128" height="24"/><rect x="176" y="54" width="128" height="24"/><rect x="176" y="78" width="128" height="24"/><rect x="176" y="102" width="128" height="24"/></g><text x="182" y="46" style="font-size:10px;fill:var(--ink)">T1  Pune-Delhi  who: 1</text><text x="182" y="70" style="font-size:10px;fill:var(--ink)">T2  Delhi-Agra  who: 3</text><text x="182" y="94" style="font-size:10px;fill:var(--ink)">T3  Pune-Goa    who: 1</text><text x="182" y="118" style="font-size:10px;fill:var(--ink)">T4  Agra-Pune   who: 2</text><path d="M296 42 C296 6 120 6 104 42" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M296 90 C296 150 120 150 104 66" style="fill:none;stroke:var(--c);stroke-width:1.5;stroke-dasharray:4 3"/><text x="16" y="190" style="font-size:11px;fill:var(--ink)">Phone number stored once.</text><text x="16" y="208" style="font-size:11px;fill:var(--c)">Each ticket just points to its owner.</text></svg>'
life:
  - 'IRCTC, UPI apps, Swiggy and Flipkart keep customers, orders, payments and products as separate related tables [Inference: typical design, details not public].'
  - 'Your phone stores contacts, messages and photos metadata in small SQLite databases, right on the device.'
  - 'A school keeps students, subjects and marks in separate registers and looks up a report card by joining them on the roll number.'
  - 'Any spreadsheet pivot table is a GROUP BY in disguise: group rows by a column, then add up another.'
models:
  - name: 'One fact, one place'
    text: 'Where a fact is copied, copies drift apart. Keep a single source of truth and point to it. The same rule keeps a household budget, a legal register or a team wiki trustworthy.'
  - name: 'Say what, not how'
    text: 'SQL describes the answer; the database picks the plan. Good delegation works the same way: state the result and the constraints, and let the expert choose the method.'
  - name: 'Link by name, not by copy'
    text: 'A ticket stores your id, not your whole profile. A citation points to a paper instead of pasting it. References keep things small and let the original be corrected once.'
links:
  - leaf: 'cs/collections'
    name: 'Lists, dictionaries and sets'
    same: 'A table is a list of rows, and looking up a row by its primary key is exactly a dictionary lookup.'
    differs: 'A dictionary has one key and a free-form value; a table has many typed columns and can be queried by any of them, joined and grouped.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both answer "find the thing with this key". A primary key lookup is typically served by a hash or tree index.'
    differs: 'SQL also asks questions a hash table cannot: all rows where amount > 500, or totals per city.'
  - leaf: 'cs/big-o'
    name: 'Big-O and growth of cost'
    same: 'A join without help compares every row of one table with every row of the other, a product of sizes, the same growth as nested loops.'
    differs: 'The database can often avoid that product with an index, which is the next lesson.'
next:
  q: 'A table of 100 million orders, and you ask for one customer''s orders. Must the database read all 100 million rows every time? What do you think it keeps on the side?'
  leaf: 'cs/indexes'
  name: 'Indexes: hash, B-tree and LSM-tree'
symbols:
  - s: 'table'
    means: 'a grid of data: one kind of thing, such as customers (a name for the whole grid)'
  - s: 'row'
    means: 'one record in a table, for example one customer'
  - s: 'column'
    means: 'one named field that every row has, such as city'
  - s: 'primary key'
    means: 'the column whose value is unique per row, such as id'
  - s: 'foreign key'
    means: 'a column holding another table''s primary key, such as customer_id'
  - s: 'NULL'
    means: 'a marker meaning "no value here" (not zero and not an empty string)'
---

:::hook
q: Here's the puzzle. A customers table has 4 rows and an orders table has 6 rows. You write a join but forget the condition that matches customer to order. How many rows come back?
options: ["6", "10", "24"]
answer: 2
right: Right. With no matching condition, every customer pairs with every order: 4 × 6 = 24 rows, most of them nonsense. Imagine this with 1 million customers and 10 million orders.
wrong: Without a condition saying which order belongs to which customer, nothing is filtered out. Each of the 4 customers pairs with each of the 6 orders. Count the pairs.
:::

## The problem with one big sheet {lvl=1 id=s-problem label="Foundations"}

The first thing anyone tries is a single spreadsheet: one row per order, with the customer's name, city and phone typed into every row. It works for a week. Then three things go wrong.

- **Update trouble.** Asha moves from Pune to Delhi. Her city is written in 40 rows. Fix 39 and the sheet now says she lives in two cities.
- **Insert trouble.** A new customer has not ordered yet. There is no row to put her in, because rows are orders.
- **Delete trouble.** Delete Karan's only order and you also erase the fact that Karan exists.

The cure is to give every kind of thing its own **table** (a grid of rows and columns) and to store each fact once. Customers go in one table, orders in another. This design is the **relational model**, and databases built on it (PostgreSQL, MySQL, SQLite, Oracle) are called relational databases.

## Tables and keys {lvl=1 id=s-keys-tables label="Foundations"}

Our tiny shop has two tables.

:::figure caption="Two tables linked by a key. Each order points at its customer; the customer's details are stored once."
<svg viewBox="0 0 620 190" role="img" aria-label="customers table with columns id, name, city; orders table with columns id, customer_id, amount; arrow from customer_id to id">
<g class="faint"><rect x="20" y="40" width="210" height="110" fill="none" stroke="currentColor"/><rect x="300" y="40" width="300" height="110" fill="none" stroke="currentColor"/></g>
<text x="20" y="28" style="font-size:13px;fill:var(--ink)">customers</text>
<text x="300" y="28" style="font-size:13px;fill:var(--ink)">orders</text>
<g style="font-size:12px;fill:var(--ink)">
<text x="30" y="62" style="fill:var(--mat);font-weight:bold">id (primary key)</text><text x="140" y="62" style="font-weight:bold">name</text><text x="190" y="62" style="font-weight:bold">city</text>
<text x="30" y="86">1</text><text x="140" y="86">Asha</text><text x="190" y="86">Pune</text>
<text x="30" y="106">2</text><text x="140" y="106">Ravi</text><text x="190" y="106">Delhi</text>
<text x="30" y="126">3</text><text x="140" y="126">Meera</text><text x="190" y="126">Pune</text>
<text x="30" y="146">4</text><text x="140" y="146">Karan</text><text x="190" y="146">Delhi</text>
<text x="310" y="62" style="font-weight:bold">id</text><text x="350" y="62" style="fill:var(--mat);font-weight:bold">customer_id (foreign key)</text><text x="545" y="62" style="font-weight:bold">amount</text>
<text x="310" y="86">10</text><text x="380" y="86">1</text><text x="555" y="86">500</text>
<text x="310" y="106">11</text><text x="380" y="106">1</text><text x="555" y="106">250</text>
<text x="310" y="126">12</text><text x="380" y="126">2</text><text x="555" y="126">900</text>
<text x="310" y="146">13</text><text x="380" y="146">3</text><text x="555" y="146">120</text>
</g>
<path class="pen" d="M375 90 C340 175 120 175 40 90" fill="none" stroke="var(--mat)" stroke-width="2"/>
</svg>
:::

Each **row** is one record, each **column** is one named field. Two kinds of column matter most:

- A **primary key** is a column whose value is different in every row, so it names exactly one row. `customers.id` is one. Think of an Aadhaar number: no two people share it.
- A **foreign key** is a column that holds another table's primary key. `orders.customer_id` is one. The value `1` means "the customer whose id is 1". The order stores a pointer, not a copy.

Now Asha's city is stored once. Move her, and every order she ever made is automatically correct.

:::qc lvl=1
q: In the figure, which column is the foreign key?
options: ["customers.id", "orders.customer_id", "orders.amount"]
answer: 1
right: Right. It holds values from customers.id, so it links each order to its customer.
wrong: A foreign key is a column whose values are another table's primary key. Which column holds customer ids but lives in the orders table?
:::

## Asking questions with SQL {lvl=2 id=s-select label="SDE-1"}

**SQL** (Structured Query Language) is how you talk to a relational database. You describe the rows you want. The simplest question has three parts: which columns, from which table, for which rows.

```sql
SELECT name FROM customers WHERE city = 'Pune';
-- Asha, Meera
```

Read it aloud: "give me the name, from the customers table, where the city is Pune." Add `ORDER BY amount DESC` to sort, or `LIMIT 3` to keep the first three rows.

To count and add up, use **GROUP BY**: gather rows that share a value into groups, then summarise each group.

```sql
SELECT city, COUNT(*) FROM customers GROUP BY city;
-- Delhi 2, Pune 2
```

The database makes one group per city and counts the rows in each. `SUM`, `AVG`, `MIN` and `MAX` work the same way. Filtering has two stages: `WHERE` removes **rows** before grouping; `HAVING` removes **groups** after it.

:::qc lvl=2
q: You want only the cities with more than 100 customers. Which clause filters on COUNT(*)?
options: ["WHERE", "HAVING", "ORDER BY"]
answer: 1
right: Right. The count exists only after grouping, so the filter on it must come after: HAVING.
wrong: WHERE runs before the groups are made, when no count exists yet. Which clause runs after GROUP BY?
:::

## Joins: stitching tables back together {lvl=2 id=s-joins label="SDE-1"}

Splitting data was the easy half. The question "what did Asha spend?" needs both tables. A **JOIN** pairs each order with its customer wherever the foreign key matches the primary key.

```sql
SELECT c.name, o.amount
FROM customers c JOIN orders o ON o.customer_id = c.id;
-- Asha 500, Asha 250, Ravi 900, Meera 120, Meera 80, Meera 300
```

Here `c` and `o` are short nicknames for the tables, and `ON` states the matching rule. Notice Karan is missing: he has no orders, so nothing matched. A **LEFT JOIN** keeps every row from the left table and fills the gaps with NULL:

```sql
SELECT c.name, COUNT(o.id)
FROM customers c LEFT JOIN orders o ON o.customer_id = c.id
GROUP BY c.name;   -- Asha 2, Ravi 1, Meera 3, Karan 0
```

Joins and grouping combine: total spent per customer is a join, then `GROUP BY c.name` with `SUM(o.amount)`. Asha's total is 750, Ravi's 900, Meera's 500.

Forget the `ON` rule and you get the **cross product**: every row paired with every row, 4 × 6 = 24 here. This is the most common beginner bug, and in production it can bring a server down.

:::qc lvl=2
q: A customers table has 1,000 rows and an orders table has 5,000 rows, each order with a valid customer. How many rows does the correct inner JOIN return?
options: ["1,000", "5,000", "5,000,000"]
answer: 1
right: Right. Each order matches exactly one customer, so you get one row per order.
wrong: Each order belongs to exactly one customer. The join produces one result row for each matching pair. How many pairs are there?
:::

## Running SQL from Python {lvl=2 id=s-python label="SDE-1"}

Python ships with `sqlite3`, a complete SQL database in one file. It is the quickest way to practise.

```python
import sqlite3
db = sqlite3.connect(":memory:")          # a throw-away database
db.execute("CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, city TEXT)")
db.execute("INSERT INTO customers VALUES (1, 'Asha', 'Pune')")
rows = db.execute("SELECT name FROM customers WHERE city = ?", ("Pune",)).fetchall()
print(rows)                               # [('Asha',)]
```

Notice the `?`. Never paste user input into the query string with an f-string. A name such as `x'; DROP TABLE customers; --` would then be run as SQL, an attack called **SQL injection**. With `?` the database treats the value strictly as data.

## Normalisation: how to split well {lvl=3 id=s-normal label="SDE-2"}

**Normalisation** is the habit of splitting tables until each fact lives once. You do not need the formal names. Two questions are enough:

1. *Does every column describe the whole key of its row?* In an order row, `amount` describes the order, but `city` describes the customer. City does not belong there.
2. *Does a non-key column depend on another non-key column?* If `pincode` decides `city`, then storing both in the customers table repeats the pair across many rows. Move the pair to its own table.

When both answers are clean, the update, insert and delete troubles from the start disappear. (These ideas are called the first three normal forms. [Unverified: the textbooks' exact wording differs.])

The real world pushes back. A report that joins six tables for every page view is slow. So big systems sometimes **denormalise**: store a copy (say, the customer's name inside the order) to skip the join. The price is that the copy can go stale, so you now must update both places, and accept the risk. Normalise first; denormalise only when you have measured a slow query.

## Declarative queries and the planner {lvl=3 id=s-planner label="SDE-2"}

SQL says *what*, not *how*. To answer one query the database may scan a table, look in an index, or join in different orders. A component called the **query planner** estimates the cost of each plan and picks one. You can ask to see its choice with `EXPLAIN` (the output format differs between databases).

Because you only described the answer, the database can get faster without your query changing: a new index, better statistics or a smarter engine. Designing Data-Intensive Applications contrasts this with imperative code, where you spell out every step (Chapter 2 [Unverified]).

A good rule: join on **keys**, filter early, and select only the columns you need. Without an index on `orders.customer_id`, the database may have to look through all orders for each customer. That is the cost the next lesson removes.

:::qc lvl=3
q: A report is slow because it joins six normalised tables on every page view. What is a reasonable fix?
options: ["Delete the foreign keys", "Store a deliberate copy of the needed columns (denormalise) and keep it updated", "Remove WHERE clauses"]
answer: 1
right: Right. Measure first, then trade tidiness for speed on that one path, and accept the duty of keeping copies in sync.
wrong: Foreign keys protect correctness and WHERE clauses reduce work. The standard trade is to keep a controlled copy so the join is not needed on the hot path.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. One big sheet breeds update, insert and delete trouble; store each fact once in its own table. {lvl=1}
2. A primary key names one row; a foreign key in another table points at it. {lvl=1}
3. SELECT picks columns, WHERE picks rows, GROUP BY summarises groups, HAVING filters groups. {lvl=2}
4. A JOIN pairs rows by matching keys; a LEFT JOIN keeps the unmatched left rows; a missing condition gives a cross product. {lvl=2}
5. Pass values to SQL with placeholders (`?`), never by gluing strings. {lvl=2}
6. Normalise to avoid anomalies; denormalise deliberately, after measuring. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A join with a missing or wrong `ON` condition returns the cross product, rows multiplied by rows. {lvl=2}
- `NULL` is not equal to anything, not even to another `NULL`: write `IS NULL`, not `= NULL`. {lvl=2}
- A plain JOIN silently drops rows with no match (customers with no orders); use LEFT JOIN when "none" is an answer. {lvl=2}
- Every column in SELECT must be either in GROUP BY or inside an aggregate such as SUM; otherwise the question is ambiguous. {lvl=2}
- Building SQL by pasting user text invites SQL injection; use placeholders. {lvl=2}
- Copies made for speed (denormalised data) can go stale; decide who keeps them correct. {lvl=3}
:::
