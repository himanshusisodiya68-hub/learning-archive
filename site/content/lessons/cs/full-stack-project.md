---
title: Building a full-stack app end to end
summary: Build a small shared-expense app from idea to a live, monitored product, and learn the checklist every real app needs.
ncert: []
up_to: SDE-3
builds_on: [APIs (REST and beyond), Servers and back ends, Using a database from an app, Components and frameworks (React), Passwords, sessions and OAuth]
notes_prompt: Explain to a friend the journey of one tap on "Add expense", from the screen to the database and back, step by step.
margin:
  - kind: history
    title: History
    text: "Splitwise, launched in 2011, made shared expenses a mainstream app. The idea is old, though; friends have kept a notebook of who owes whom for as long as friends have shared meals. [Unverified: launch year]"
  - kind: tip
    title: Interview favourite
    text: '"Walk me through a project you built end to end" is asked at almost every level. Interviewers listen for decisions and trade-offs (why this database, how you handled failure), not for the list of tools.'
  - kind: olympiad
    title: Design link
    text: Everything in this lesson has a bigger sibling in system design. A single server and database carry you far; the next lesson is about what to do when they stop being enough.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliable, Scalable, Maintainable; Ch. 7 Transactions [Unverified chapter numbers]" }
  - { title: "Official docs for your chosen stack (React, Node.js, PostgreSQL)", ref: "Getting-started guides (read online, not copied)" }
cards:
  - { front: "What are the main steps to build a full-stack app?", back: "Requirements, data model, API, back end, front end, authentication and authorisation, testing, deployment, monitoring. Do them in thin slices, one feature working end to end at a time." }
  - { front: "Why store money as integers (paise), not decimals?", back: "Floating-point numbers cannot represent most decimals exactly (0.1 + 0.2 is not exactly 0.3). Whole paise are exact; divide only for display." }
  - { front: "Authentication vs authorisation?", back: "Authentication asks who you are (login). Authorisation asks what you may do (only members of a group can see its expenses). Both are checked on the server, never only in the front end." }
  - { front: "What does idempotent mean for an API request?", back: "Repeating the same request has the same effect as sending it once. An idempotency key stops a double-tap or a retry from adding an expense twice." }
  - { front: "What does a deploy checklist include?", back: "Tests pass, configuration and secrets set outside the code, database migrations, HTTPS, backups, a way to roll back, and health checks and alerts." }
  - { front: "How do you minimise the payments needed to settle up?", back: "Compute each person's net balance (paid minus share), then repeatedly let the biggest debtor pay the biggest creditor. At most n - 1 payments for n people." }
core:
  idea: 'A full-stack app is a loop from the screen to the server to the database and back. Build it as thin vertical slices, so one feature works end to end before the next begins, and treat each layer''s failures (bad input, repeated requests, outages) as part of the design.'
  formulas:
    - tex: '\text{balance}_i = \text{paid}_i - \text{share}_i'
      label: 'Net balance of person i: positive means they are owed money'
    - tex: '\sum_i \text{balance}_i = 0'
      label: 'Money is conserved: what some are owed, others owe'
  conditions:
    - 'Requirements are written down first, including what you will not build yet'
    - 'Money is stored in whole paise, as integers'
    - 'Every request is authenticated and checked for permission on the server'
    - 'Retries are safe, because networks fail and users double-tap'
  sign: 'The mistake is to build all of one layer before touching the next. A slice that works from tap to database teaches you more than a perfect screen over a missing server.'
outcomes:
  - 'Turn an idea into written requirements and a data model'
  - 'Design a small REST API and trace one request from screen to database and back'
  - 'Apply authentication, permission checks and safe handling of money'
  - 'Deploy a small app and set up monitoring and backups'
  - 'Use the checklist to review any project, and plan for the first scaling limits'
opener:
  story: |
    Six friends return from a Goa trip. Someone paid for the hotel, someone for the scooters, someone for the fish thali that cost far more than anyone expected. A week later, a group chat is still arguing about who owes whom, with screenshots of bills and three different calculators.

    So you decide to build an app that settles it. It sounds small: add an expense, see the balances. But the moment you start, the questions pile up. Where do the numbers live? What if two friends add the same bill at once? Who may see the group? What happens when the server is down at the exact moment of payment?

    Every real product, from a payments app to a food-delivery app, is this same small app with more of everything. Let us build it properly, from the first sentence to a live system.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Six layers of an expense app from screen to database, with a request going down and a response coming back"><rect x="30" y="20" width="260" height="34" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"/><text x="40" y="42" style="font-size:11px;fill:var(--ink)">Screen: Add expense, balances</text><rect x="30" y="66" width="260" height="34" rx="6" style="fill:var(--surface);stroke:var(--rule)"/><text x="40" y="88" style="font-size:11px;fill:var(--ink)">API: POST /groups/7/expenses</text><rect x="30" y="112" width="260" height="34" rx="6" style="fill:var(--surface);stroke:var(--rule)"/><text x="40" y="134" style="font-size:11px;fill:var(--ink)">Server: login check, rules, splits</text><rect x="30" y="158" width="260" height="34" rx="6" style="fill:var(--surface);stroke:var(--rule)"/><text x="40" y="180" style="font-size:11px;fill:var(--ink)">Database: users, groups, expenses</text><rect x="30" y="204" width="260" height="26" rx="6" style="fill:none;stroke:var(--muted);stroke-dasharray:4 3"/><text x="40" y="221" style="font-size:10px;fill:var(--muted)">Deploy, logs, alerts, backups</text><path d="M300 36 L300 175" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M308 175 L308 36" style="fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:4 3"/></svg>'
life:
  - 'Splitwise, Google Pay''s group split and the shared tabs at a restaurant all run on this same data model.'
  - 'Every food-delivery or taxi app is a bigger expense splitter: users, orders, payments, notifications, with the same layers.'
  - 'The login, permissions and error screens in any app you use are the same checklist: who are you, what may you do, what if it fails.'
  - 'Your bank''s "payment pending" state exists because networks fail and money must never be counted twice.'
models:
  - name: 'Thin slices beat big layers'
    text: 'Deliver something that works from start to finish, however small, then widen it. A road open from town to town is more useful than a perfect half a highway.'
  - name: 'Write it down before you build it'
    text: 'A page of requirements, including "not now", stops the project from growing without limit. The same habit works for a trip, a wedding or a household budget.'
  - name: 'Plan for the retry'
    text: 'Anything that can fail will be tried again, often by the user in a hurry. Design actions so that doing them twice is harmless, as with a lift button that you pressed three times.'
links:
  - leaf: 'cs/apis'
    name: 'APIs (REST and beyond)'
    same: 'The contract between screen and server is the API, designed around nouns such as groups and expenses.'
    differs: 'Here you also decide errors, pagination and versioning for a real product, not for a single example.'
  - leaf: 'cs/authentication'
    name: 'Passwords, sessions and OAuth'
    same: 'Login and sessions protect the group''s data in exactly the way the lesson describes.'
    differs: 'In a project, you must also decide who may do what (authorisation), which login never answers by itself.'
  - leaf: 'cs/greedy'
    name: 'Greedy algorithms'
    same: 'Settling up by repeatedly pairing the biggest debtor with the biggest creditor is a greedy method.'
    differs: 'It gives few payments, at most n - 1, but finding the true minimum is a harder problem; a good product accepts "few" here.'
next:
  q: 'Your expense app now has 20 users and runs on one small server. What if it has 20 million, with everyone settling up on the first of the month? What breaks first, and what do you add?'
  leaf: 'cs/scalability'
  name: 'Scaling up and scaling out'
symbols:
  - s: '\text{paid}_i'
    means: 'total paise that person i actually paid (paise)'
  - s: '\text{share}_i'
    means: 'total paise that person i owes for the expenses they took part in (paise)'
  - s: '\text{balance}_i'
    means: 'paid minus share: positive means they are owed, negative means they owe (paise)'
  - s: 'n'
    means: 'number of people in the group (count)'
  - s: 'API'
    means: 'the requests a screen can send to the server'
  - s: 'paise'
    means: 'one hundredth of a rupee; store money as whole paise'
---

:::hook
q: Here is the puzzle. A paid 3,000 rupees for dinner shared equally by four friends (A, B, C, D). Then B paid 1,000 rupees for snacks, also shared equally by the four. What is the smallest number of payments that settles everything?
options: ["Four, everybody pays everybody", "Two", "Three"]
answer: 1
right: Right. Total spend is 4,000, so each share is 1,000. A paid 3,000 (is owed 2,000), B paid 1,000 (owes nothing), C and D paid nothing (owe 1,000 each). So C pays A 1,000 and D pays A 1,000: two payments. The trick is to compute net balances, not to replay every bill.
wrong: Do not replay every bill. Work out each person's total paid and total share first. Who is owed, and who owes?
:::

## Start with words, not code {lvl=1 id=s-words label="Foundations"}

Before any code, write the **requirements** in plain sentences. For our app:

- People sign up and log in.
- A person creates a **group** and adds friends.
- Anyone in the group adds an **expense**: who paid, how much, who shares it, split equally to begin with.
- The app shows each person's **balance** and the shortest list of payments to settle up.
- Not now: multiple currencies, receipts, chats, payments inside the app. Writing "not now" is as useful as writing the features.

Then split the work into the **layers** you already know: a screen (what the user sees), a server (the rules), and a database (what is remembered). The whole journey of one tap is: the screen sends a request, the server checks who you are and what you may do, applies the rules, stores the result, and sends back an answer that the screen shows.

The best way to build it is in **thin slices**. First slice: log in and see an empty group. Second: add one expense and see it in a list. Third: balances. Each slice runs from screen to database, so a real problem shows up early.

:::qc lvl=1
q: Which is the better first slice?
options: ["Finish the whole database design, then the server, then the screens", "A tiny feature that works from the screen to the database", "Choose the colours and logo"]
answer: 1
right: Right. A working end-to-end slice reveals the real problems early, while they are cheap.
wrong: Which choice gives you something that actually runs in the first week?
:::

## The data model and the API {lvl=2 id=s-model label="SDE-1"}

What must the app remember? Four things: **users**, **groups**, which users belong to which group (**memberships**), and **expenses**, each split among people. In a relational database (the usual start; see the databases pillar), that is a few tables:

| Table | Key columns |
|---|---|
| `users` | id, name, email, password hash |
| `groups` | id, name, created by |
| `memberships` | group id, user id |
| `expenses` | id, group id, paid by, amount in paise, note, created at |
| `splits` | expense id, user id, share in paise |

Two decisions matter. **Money is stored as whole paise**, as integers, never as decimals: computers cannot hold 0.1 exactly, and errors in money are not acceptable. And **balances are computed** from expenses, not stored separately, so there is one source of truth that cannot drift out of step.

The **API** is the list of requests the screen can make, named after the nouns:

```ts
// POST /groups/7/expenses   (needs login; body below)
{ "paidBy": 3, "amountPaise": 300000, "note": "Dinner",
  "splitAmong": [3, 4, 5, 6], "requestId": "9f1c-..." }
// -> 201 Created, the expense
// GET /groups/7/balances  -> [{ "user": 3, "balancePaise": 200000 }, ...]
```

Read it as: "in group 7, user 3 paid 3,000 rupees for dinner shared by four people". The `requestId` is an idempotency key: the server keeps it, so if the screen retries the same request, it is not stored twice.

:::figure caption="Entities and how they connect: a group has many members and many expenses; each expense has many splits."
<svg viewBox="0 0 320 120" role="img" aria-label="Boxes for users, groups, expenses and splits with connecting lines"><rect x="10" y="10" width="70" height="30" rx="6" class="pen"/><text x="28" y="30" style="font-size:11px;fill:var(--ink)">users</text><rect x="125" y="10" width="70" height="30" rx="6" class="pen"/><text x="140" y="30" style="font-size:11px;fill:var(--ink)">groups</text><rect x="240" y="10" width="70" height="30" rx="6" class="pen"/><text x="250" y="30" style="font-size:11px;fill:var(--ink)">expenses</text><rect x="240" y="80" width="70" height="30" rx="6" class="pen"/><text x="258" y="100" style="font-size:11px;fill:var(--ink)">splits</text><rect x="10" y="80" width="90" height="30" rx="6" class="faint"/><text x="18" y="100" style="font-size:10px;fill:var(--ink)">memberships</text><path d="M80 25 L125 25 M195 25 L240 25 M275 40 L275 80 M45 40 L45 80 M100 95 L125 40" class="ray"/><path d="M240 95 L80 30" class="faint"/></svg>
:::

:::qc lvl=2
q: Why is each person's balance computed from the expenses instead of being stored in its own column?
options: ["To save disk space only", "So there is one source of truth that cannot disagree with itself", "Because databases cannot store numbers"]
answer: 1
right: Right. A stored balance could drift from the expenses after a bug or an edit; a computed one cannot.
wrong: What happens to a stored balance if an expense is edited or deleted and the update to the balance is forgotten?
:::

## Login, permissions and safe handling {lvl=2 id=s-safe label="SDE-1"}

**Authentication** asks "who are you?". Use a proven method: a password stored only as a slow salted hash, a session cookie or token after login, and HTTPS everywhere (see the authentication lesson). Do not invent your own.

**Authorisation** asks "what may you do?". Every request that touches a group must check on the server that the logged-in user belongs to it. A common bug is checking only that the user is logged in, so changing `/groups/7` to `/groups/8` in the address shows a stranger's group. The front end hiding a button is not security, because anyone can send requests by hand.

Next, **validate all input**: the amount must be a positive whole number, the people must be members of the group, the splits must add up to the amount. When an amount does not divide evenly (10,001 paise among 3 people), give the leftover paise out one by one: 3,334, 3,334 and 3,333. Money is never lost to rounding.

Finally, **make repeats safe**. A double-tap or a retry after a timeout must not add the expense twice: store the `requestId` with a unique constraint, and return the original result if it comes again. Put the expense and its splits in one **transaction**, so either both are saved or neither is.

```ts
await db.tx(async (t) => {
  const e = await t.insertExpense({ groupId, paidBy, amountPaise, requestId });
  await t.insertSplits(e.id, splitShares(amountPaise, people)); // sums exactly
});
```

Read it as: "do both inserts together; if the second fails, undo the first".

:::qc lvl=2
q: A user changes the group number in the address bar and sees another group's expenses. Which check was missing?
options: ["Authentication", "Authorisation (membership check on the server)", "Spell checking"]
answer: 1
right: Right. The user was logged in, but the server never checked that they belong to that group.
wrong: The user was who they said they were. The question was whether they were allowed to see this group.
:::

## The front end and the settle-up rule {lvl=3 id=s-front label="SDE-2"}

The screen has three views: group list, group detail (expenses and a form), and balances. Keep it simple with a framework such as React: the server's data is fetched by the screen, shown in components, and the form posts a new expense. After posting, show the new expense at once (**optimistic update**) and roll it back if the server refuses. Show loading, empty and error states for every view, since networks fail; these three states are where users judge an app.

Now the algorithm that makes the app useful. From the expenses compute each person's balance, with $\text{balance}_i = \text{paid}_i - \text{share}_i$ in paise. Read it as: "what I put in, minus what I used". The balances add up to zero, because every rupee paid was shared by someone.

To settle: repeatedly take the person who owes the most and the person who is owed the most; the first pays the second the smaller of the two amounts; at least one of them reaches zero. With $n$ people this ends in at most $n-1$ payments. It is a **greedy** method.

```ts
function settle(bal: Map<string, number>) {
  const pays: [string, string, number][] = [];
  while (true) {
    const [d, c] = [minEntry(bal), maxEntry(bal)];   // biggest debtor, creditor
    if (bal.get(c)! === 0) return pays;
    const x = Math.min(-bal.get(d)!, bal.get(c)!);
    pays.push([d, c, x]); bal.set(d, bal.get(d)! + x); bal.set(c, bal.get(c)! - x);
  }
}
```

[Inference: this gives few payments, not always the fewest possible; finding the true minimum is a harder problem.]

## Deploy, monitor, recover {lvl=3 id=s-deploy label="SDE-2"}

An app is not finished when it works on your laptop. A small, solid setup:

1. **Environments**: keep a local, a staging and a production copy. Secrets (database password, keys) live in environment variables, never in the code.
2. **Database changes** go through numbered **migration** files, run automatically on deploy, so every environment has the same shape.
3. **CI/CD**: on each push, run tests and build; if they pass, deploy (see the CI/CD lesson). Keep the last version ready to roll back.
4. **Hosting**: one small server or a managed platform, behind HTTPS, with the database on a managed service that takes **backups**. Test a restore once; a backup you never tried to restore is a hope, not a backup.
5. **Monitoring**: write logs with a request id, track a few numbers (requests per minute, error rate, slowest requests), and set an **alert** that wakes someone when errors cross a limit. A health-check address (`/health`) lets the platform restart a stuck server.

:::qc lvl=3
q: You deployed a change and the error rate jumped. What is the first thing a good setup lets you do?
options: ["Roll back to the last working version", "Rewrite the app", "Wait to see if it stops"]
answer: 0
right: Right. Rolling back restores service at once; then you investigate calmly.
wrong: First restore service. Which action does that fastest?
:::

## The project checklist {lvl=3 id=s-check label="SDE-2"}

| Area | Question to ask before launch |
|---|---|
| Requirements | Written, with "not now"? |
| Data | Money in integers? One source of truth? Indexes on the columns you search? |
| API | Validated input, clear errors, idempotency keys for create actions? |
| Security | Hashed passwords, HTTPS, membership checks on every request, no secrets in code? |
| Front end | Loading, empty and error states? Works on a slow phone? |
| Testing | Tests for splitting and settle-up, the places where bugs cost money? |
| Deploy | Migrations, rollback, backups tested? |
| Monitoring | Logs, error alert, health check? |

## What breaks first {lvl=4 id=s-scale label="SDE-3"}

The single server and database carry most apps a long way. When growth comes, [Inference: the usual order] the first limit is the **database**: add **indexes**, cache the heavy balance query for a short time, and add a **read replica** for reads. Next, run several copies of the server behind a **load balancer**, which needs sessions and files kept outside any one server. Later, slow work such as notifications and exports moves to a **queue** with background workers. The month-start spike (everyone settles up on the first) is handled by capacity planned for peaks, and by keeping writes short.

At this level, you also decide with measurements: load-test the real flows, watch the slow-query list, and set a target (for example, 99.9% of requests under half a second) before buying anything. Each of these steps is its own lesson in the next pillar, system design, and a good project record names the one you will reach for first and why.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Write requirements first, including what you will not build; then build in thin end-to-end slices. {lvl=1}
2. Data model: users, groups, memberships, expenses and splits; money in whole paise; balances computed, not stored. {lvl=2}
3. The API is the contract between screen and server; add idempotency keys so retries are safe. {lvl=2}
4. Authenticate (who) and authorise (may they) on the server for every request; validate all input. {lvl=2}
5. Settle up with net balances and a greedy pairing: at most n - 1 payments. {lvl=3}
6. Deploy with migrations, CI/CD, rollback, backups and monitoring; alert on errors. {lvl=3}
7. Scale by measuring: indexes, cache, replicas, several servers, queues, in that usual order. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Building one whole layer before touching the next, so integration surprises arrive late. {lvl=1}
- Storing money as a decimal or float; use whole paise. {lvl=2}
- Checking only that the user is logged in, not that they may see this group. {lvl=2}
- Letting a retry or double-tap create a second expense. {lvl=2}
- Hiding a button in the front end and calling it security. {lvl=2}
- Secrets in the repository, or a backup that was never restored in a test. {lvl=3}
- Optimising for millions of users before measuring the first real bottleneck. {lvl=4}
:::
