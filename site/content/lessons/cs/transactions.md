---
title: Transactions and isolation
summary: How a bank moves your money in two steps without ever losing it, even when the power fails or a thousand people pay at once.
ncert: []
up_to: SDE-3
builds_on: [Relational model and SQL, Indexes, Processes and threads]
notes_prompt: Explain to a friend what "all or nothing" means for a money transfer, and describe one thing that can go wrong when two people use the same account at once.
margin:
  - kind: history
    title: History
    text: "Jim Gray at IBM and later Tandem shaped the idea of transactions and the ACID properties in the 1970s and 80s; the acronym ACID was coined in 1983 by Theo Haerder and Andreas Reuter. [Unverified: names and dates from memory]"
  - kind: tip
    title: Interview favourite
    text: '"Two users book the last seat at the same moment, what happens?" Say: check and write must happen in one transaction with a lock, a unique constraint or serializable isolation; otherwise both succeed. Name the anomaly (write skew or lost update).'
  - kind: olympiad
    title: Design link
    text: 'A transaction inside one database is easy to promise. Across two services or banks it needs two-phase commit or a saga, and each has a cost. Knowing when to avoid a distributed transaction is a senior skill.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 7 Transactions: ACID, weak isolation levels, serializability [Unverified]" }
  - { title: "J. Gray and A. Reuter, Transaction Processing: Concepts and Techniques", ref: "Classic reference on transactions and locking [Unverified: chapters]" }
cards:
  - { front: "What does ACID stand for?", back: "Atomicity (all or nothing), Consistency (rules stay true), Isolation (concurrent transactions do not trip each other), Durability (committed data survives a crash)." }
  - { front: "What is atomicity?", back: "A transaction's steps either all take effect or none do. If the transfer fails halfway, the debit is undone." }
  - { front: "What is a lost update?", back: "Two transactions read the same value, both change it, and one write overwrites the other, so one change vanishes." }
  - { front: "What is a dirty read?", back: "Reading data another transaction has written but not yet committed, which may later be rolled back." }
  - { front: "Locks versus MVCC?", back: "Locks make others wait for the thing you are using. MVCC keeps old versions so readers see a consistent snapshot and do not block writers." }
  - { front: "Which isolation level is the strongest, and what is its cost?", back: "Serializable: the result is as if transactions ran one at a time. It costs more waiting or more aborted-and-retried transactions." }
core:
  idea: 'A transaction groups several database steps into one unit that either happens entirely or not at all, and that behaves as if it ran alone even when others run at the same time. The guarantees are summed up as ACID, and isolation levels choose how strongly "as if alone" is enforced.'
  formulas:
    - tex: '\text{BEGIN} \to \text{steps} \to \text{COMMIT}\ \text{or}\ \text{ROLLBACK}'
      label: 'A transaction ends in exactly one of two ways'
    - tex: '\text{total before} = \text{total after}'
      label: 'The consistency rule for a transfer: money is moved, never created or lost'
  conditions:
    - 'All the steps touch data in one database that supports transactions'
    - 'Durability assumes the committed log reached stable storage (a disk or flash that survives power loss)'
    - 'Isolation guarantees depend on the level chosen; the default is usually weaker than serializable'
    - 'Across several databases or services a plain transaction does not apply; extra protocols are needed'
  sign: 'The commonest mistake: assuming the default isolation level makes concurrent code safe. Many real bugs (double bookings, lost updates, overdrafts) survive at the default level.'
outcomes:
  - 'Explain the bank-transfer problem and why a transaction solves it'
  - 'State the four ACID properties in plain words'
  - 'Run a transaction from Python with commit and rollback'
  - 'Name the main anomalies (dirty read, lost update, write skew) and the isolation level that prevents each'
  - 'Compare locks with MVCC, and say when a distributed transaction should be avoided'
opener:
  story: |
    You send Ravi 1,000 rupees on a UPI app. Behind the scenes it is two steps: take 1,000 from your account, then add 1,000 to his. Two small changes, no more.

    Now picture the power failing between them. Your balance is down by 1,000, and Ravi has received nothing. The money has vanished into thin air. Or picture the opposite order failing: Ravi is richer, you are not, and the bank has created money from nothing. (How real payment systems are built is not public; this is the textbook problem. [Inference])

    A bank handles millions of such transfers a day, with crashes, retries and people tapping at the same instant, and still the books balance to the rupee. What keeps a two-step change from ever being seen, or surviving, half done?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two accounts with an arrow carrying 1000 rupees, and a box around the two steps labelled all or nothing"><rect x="20" y="70" width="90" height="60" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="36" y="96" style="font-size:12px;fill:var(--ink)">Asha</text><text x="36" y="116" style="font-size:12px;fill:var(--muted)">5000</text><rect x="210" y="70" width="90" height="60" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="228" y="96" style="font-size:12px;fill:var(--ink)">Ravi</text><text x="228" y="116" style="font-size:12px;fill:var(--muted)">1000</text><path d="M112 100 L206 100" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M198 94 L208 100 L198 106" style="fill:none;stroke:var(--c);stroke-width:3"/><text x="132" y="92" style="font-size:11px;fill:var(--c)">1000</text><rect x="8" y="44" width="304" height="108" rx="12" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:6 4"/><text x="86" y="38" style="font-size:11px;fill:var(--c)">all or nothing</text><text x="20" y="180" style="font-size:10px;fill:var(--bad)">power cut between the steps?</text><text x="20" y="196" style="font-size:10px;fill:var(--muted)">undo the first step, as if it never ran</text></svg>'
life:
  - 'Every UPI, card or net-banking transfer is a debit and a credit that must succeed or fail together [Inference: typical design].'
  - 'Booking the last train berth or cinema seat: two people click at the same moment and exactly one must win.'
  - 'Placing a food order records the order, the payment and the stock change as one unit, so you are never charged for an order that was not created.'
  - 'Editing a shared document or spreadsheet row at the same time as a colleague is an isolation problem in everyday clothes.'
  - 'A shop till and the stock register: selling an item and reducing stock must both happen, or neither.'
models:
  - name: 'All or nothing'
    text: 'Group steps that only make sense together and give them a single commit point. Signing a contract works this way: either everyone signs and it is binding, or no one is bound.'
  - name: 'Pretend you are alone'
    text: 'The simplest mental model of concurrency is that each task runs by itself. The hard engineering is making that illusion cheap. Queues at a counter, one customer at a time, are the same illusion made real.'
  - name: 'Strong guarantees cost speed'
    text: 'Stronger isolation means more waiting or more retries. Every safety rule (a double-check at a bank, a second signature) trades speed for safety; choose it where mistakes are expensive.'
links:
  - leaf: 'cs/concurrency'
    name: 'Concurrency and locks'
    same: 'Database locks and in-program locks solve the same problem: two actors touching shared data at once.'
    differs: 'A transaction also gives undo (rollback) and crash safety (durability), which a plain lock does not.'
  - leaf: 'cs/indexes'
    name: 'Indexes'
    same: 'Both are paid for on every write: a transaction must also update every index, and all of it commits or none of it does.'
    differs: 'Indexes decide how fast you find data; transactions decide how safely you change it.'
  - leaf: 'cs/relational-model-and-sql'
    name: 'Relational model and SQL'
    same: 'Rules such as keys and CHECK constraints are the consistency half of ACID; the transaction keeps them true across several steps.'
    differs: 'A constraint guards one row at a time; a transaction guards a whole group of changes.'
next:
  q: 'Transactions are powerful but rigid: fixed tables, strict rules, one machine''s worth of guarantees. What if your data is a social network, a shopping cart or a stream of sensor readings that does not fit tidy rows, or must spread over hundreds of machines?'
  leaf: 'cs/nosql-and-data-models'
  name: 'Document, key-value and graph models'
symbols:
  - s: 'transaction'
    means: 'a group of database steps treated as one unit'
  - s: 'commit'
    means: 'make all the steps permanent'
  - s: 'rollback'
    means: 'undo all the steps, as if none had run'
  - s: 'isolation level'
    means: 'a setting for how much concurrent transactions are shielded from each other'
  - s: 'anomaly'
    means: 'a wrong-looking result that concurrency can cause (for example a lost update)'
  - s: 'MVCC'
    means: 'multi-version concurrency control: keep old versions of rows so readers see a snapshot'
---

:::hook
q: Here's the puzzle. Asha's balance is 1,000. Two UPI payments arrive at the same instant, a credit of 200 and a credit of 300. Each reads 1,000, adds its amount, and writes back. What can the final balance be?
options: ["Only 1,500", "1,200, 1,300 or 1,500", "Always 1,300"]
answer: 1
right: Right. If both read 1,000 before either writes, the second write overwrites the first: you end with 1,200 or 1,300, and one credit has vanished. Only 1,500 is correct. This is a lost update, and avoiding it is the job of isolation.
wrong: Think about the order of reads and writes. If both read the balance before either one writes, each starts from 1,000. What does the last writer leave behind?
:::

## The bank-transfer problem {lvl=1 id=s-transfer label="Foundations"}

Moving 1,000 rupees from Asha to Ravi takes two steps:

1. Subtract 1,000 from Asha.
2. Add 1,000 to Ravi.

Each step is easy. The danger is **between** them. A crash after step 1 and before step 2 loses 1,000 rupees. A second customer who reads the totals in the gap sees a bank that is 1,000 short. We want the pair to behave like **one indivisible act**.

A database offers exactly that: a **transaction**. You say "begin", do your steps, then either **commit** (make everything permanent) or **roll back** (undo everything). The user never sees, and the disk never keeps, a half-done transfer.

The database makes this work by writing intended changes to a **log** on disk first, then applying them. After a crash it reads the log: finished transactions are replayed, unfinished ones are thrown away.

:::qc lvl=1
q: The power fails after the debit but before the credit, in a database with proper transactions. What is the state after restart?
options: ["Asha is 1,000 down, Ravi unchanged", "Neither account has changed", "Ravi has 1,000 extra"]
answer: 1
right: Right. The transaction never committed, so on restart the database discards its partial work.
wrong: Without a commit, the transaction is not complete. What does the database do with an incomplete transaction when it recovers?
:::

## ACID in plain words {lvl=2 id=s-acid label="SDE-1"}

The guarantees come as four named promises.

- **Atomicity**: all the steps happen, or none do. (A for all-or-nothing.)
- **Consistency**: your rules stay true after the transaction. For a transfer: total money is unchanged, balances never go below zero. The database enforces the rules you declare (keys, CHECK constraints); the rest is your code's duty.
- **Isolation**: transactions that run at the same time do not tangle. Each should behave as if it ran alone.
- **Durability**: once the database says "committed", the data survives a crash or power cut, because it reached the log on disk.

In Python with SQLite, the `with db:` block is one transaction: it commits if the block ends normally and rolls back on an error.

```python
def transfer(db, src, dst, amt):
    with db:    # BEGIN ... COMMIT, or ROLLBACK on exception
        db.execute("UPDATE accounts SET balance = balance - ? WHERE name = ?", (amt, src))
        db.execute("UPDATE accounts SET balance = balance + ? WHERE name = ?", (amt, dst))
# The table was created with: balance INT CHECK (balance >= 0)
```

If Asha has 5,000 and sends 1,000, both rows change. If she tries to send 99,999, the first UPDATE breaks the CHECK rule, an error is raised, and the block rolls back: nothing changes. (I ran this in SQLite to confirm: 4000 and 2000 after the good transfer, unchanged after the bad one.)

:::qc lvl=2
q: Which ACID letter is responsible for "after COMMIT is reported, a crash cannot erase the data"?
options: ["Atomicity", "Isolation", "Durability"]
answer: 2
right: Right. Durability: committed data was written to stable storage, usually through the log.
wrong: Atomicity is about all-or-nothing, and isolation is about concurrent users. Which letter is about surviving a crash?
:::

## When transactions overlap {lvl=3 id=s-anomalies label="SDE-2"}

Isolation matters when many transactions run at once, which is the normal case. Without it, odd things happen. Here are the main **anomalies**, each in plain words.

- **Dirty read**: you read a change another transaction has made but not committed. It may be rolled back, so you acted on something that never existed.
- **Non-repeatable read**: you read the same row twice in one transaction and get different values, because someone committed a change in between.
- **Lost update**: two transactions read a value, both change it, and one write overwrites the other (the hook).
- **Phantom**: you run the same search twice and the second time new rows match, because someone inserted them.
- **Write skew**: two transactions each check a rule, then write different rows, and together break the rule. Example: a hospital needs at least one doctor on call; two doctors each check "someone else is on call" and both go off duty. Each check passed; together they emptied the rota. A train example: two people check "is berth 12 free?", both see yes, both insert a booking for it.

The database lets you choose an **isolation level**. A common ladder, weakest to strongest (names and exact behaviour differ between databases [Unverified]):

| Level | Prevents | Still allowed (typically) |
|---|---|---|
| Read committed | dirty reads | non-repeatable reads, lost update, phantoms, write skew |
| Repeatable read / snapshot | the above plus non-repeatable reads, often lost updates | write skew, sometimes phantoms |
| Serializable | all of them | nothing, as if run one at a time |

Stronger is safer but slower or more retry-prone. Many databases default to read committed; that default does not stop the lost update above unless you write the update as one atomic statement, as in `SET balance = balance + 200`.

:::qc lvl=3
q: Two customers both check that berth 12 is free, then each inserts a booking for berth 12. Which anomaly is this?
options: ["Dirty read", "Write skew (check-then-write)", "Durability failure"]
answer: 1
right: Right. Each transaction's check was valid when made; together the writes broke the rule. A unique constraint on the berth, a row lock, or serializable isolation stops it.
wrong: Neither read uncommitted data nor lost a crash. Each acted on a check that was true when made, but became false because of the other. What is that called?
:::

## Locks and MVCC {lvl=3 id=s-locks label="SDE-2"}

Two main ways deliver isolation.

**Locks.** A transaction locks what it touches. Others wanting the same row **wait** until the first commits. This is simple and strong, but waiting piles up: a long report that locks many rows can stall sales. Two transactions can also wait for each other, a **deadlock**; the database spots it and cancels one so you can retry.

**MVCC** (multi-version concurrency control). A write does not overwrite the old row. It creates a **new version**. Each transaction reads from a consistent **snapshot** taken when it started, so **readers do not block writers and writers do not block readers**. A report started at 10:00 sees the data as of 10:00 while sales carry on. PostgreSQL and many other databases work this way [Inference: details vary by database].

MVCC alone gives snapshot isolation, which still allows write skew. To stop it, add checks or locks on the data you read, or pick serializable.

```python
# Lock the rows you check, so a second booking must wait (PostgreSQL syntax)
# SELECT * FROM berths WHERE id = 12 FOR UPDATE;
# INSERT INTO bookings ...;   -- the second customer now sees the first booking
```

Another fix is to let the database refuse the second write: a unique constraint on `(train, berth)` makes the second insert fail, and your code reports "sorry, taken".

## Serializable and beyond one machine {lvl=4 id=s-scale label="SDE-3"}

**Serializable** means the outcome matches *some* one-at-a-time order of the transactions. Three real approaches (Designing Data-Intensive Applications, Chapter 7 [Unverified]):

1. **Actually run them one at a time** on one thread. Works when transactions are short and data fits in memory.
2. **Two-phase locking (2PL)**: lock everything you read or write, hold the locks until commit. Correct, but readers and writers block each other, and deadlocks are common.
3. **Serializable snapshot isolation**: run on snapshots, detect conflicts as they happen, abort one of the conflicting transactions. Optimistic: cheap when conflicts are rare, retries when not.

Whichever you pick, **code must be ready to retry** an aborted transaction.

**Distributed transactions.** A transfer between two banks touches two databases. No single log can commit both. **Two-phase commit** asks every participant "can you commit?", and if all say yes, tells them all to commit. It is correct, but if the coordinator crashes after the yes votes, participants are stuck holding locks until it returns. Many systems avoid it with a **saga**: a chain of local transactions with a compensating step that reverses each one if a later step fails (credit, then if shipping fails, refund). Sagas are not isolated, so intermediate states are visible, and the application must tolerate them.

Retries create a new danger, doing the work twice. Give each operation an **idempotency key**: a unique id that the server remembers, so a repeated request returns the first result instead of a second debit. Payment APIs rely on this idea [Inference: widely used pattern].

**Hot rows.** If every transaction updates one row (a popular seller's balance) and each holds the lock for 20 ms, that row caps at 50 transactions per second no matter how many machines you have. Fixes: shorter transactions, splitting the counter into several rows and summing them, or queueing the updates.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A transaction groups steps so they commit together or roll back together; a crash never leaves half a transfer. {lvl=1}
2. ACID: atomicity, consistency, isolation, durability; the log on disk provides the all-or-nothing and crash safety. {lvl=2}
3. Lost update, dirty read, phantom and write skew are the classic anomalies of concurrent transactions. {lvl=3}
4. Isolation levels trade safety for speed; the default is often weaker than you think. {lvl=3}
5. Locks make others wait; MVCC lets readers use a snapshot so they do not block. {lvl=3}
6. Serializable is "as if one at a time"; code must be ready to retry aborted transactions. {lvl=4}
7. Across services use sagas and idempotency keys instead of one big transaction when you can. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Read, compute in code, write back" is a lost update waiting to happen; use one atomic statement like `balance = balance + ?`, or lock the row. {lvl=2}
- Check-then-insert is a race: enforce the rule with a unique constraint, a lock, or serializable isolation. {lvl=3}
- Do not hold a transaction open while waiting for a human or a slow network call; locks and old versions pile up. {lvl=3}
- Assume any transaction can be aborted (deadlock, conflict) and retry it. {lvl=3}
- A retried request without an idempotency key can charge twice. {lvl=4}
- Do not claim "serializable" about a database's default level without checking its documentation; names differ between systems. {lvl=3}
:::
