---
title: APIs (REST and beyond)
summary: How an app on your phone asks a faraway server for your order status, and the written-down rules that make that conversation work.
ncert: []
up_to: SDE-2
builds_on: [DNS and HTTP, Functions]
notes_prompt: Explain to a friend why a food-delivery app and a restaurant's kitchen system, built by different companies, can still work together.
margin:
  - kind: history
    title: History
    text: 'Roy Fielding described REST in his 2000 PhD thesis, as a summary of why the web itself had scaled so well. Many "REST" APIs today follow only part of it, and that is fine. [Unverified year]'
  - kind: tip
    title: Interview favourite
    text: '"Is this operation safe to retry?" is the question behind idempotency. Payments, orders and sign-ups are where interviewers ask it.'
  - kind: olympiad
    title: Design link
    text: A public API is a promise to strangers you cannot call. Once someone depends on a field, removing it breaks them, so you version the contract instead of editing it.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 4 Encoding and Evolution: REST, RPC, schema evolution [Unverified]" }
  - { title: "R. Fielding, Architectural Styles and the Design of Network-based Software Architectures (PhD thesis, 2000)", ref: "Ch. 5 Representational State Transfer (REST) [Unverified]" }
cards:
  - { front: "What is an API?", back: "A written contract between two programs: what you may ask for, the exact shape of the request, and the exact shape of the answer." }
  - { front: "In REST, what do the URL and the verb mean?", back: "The URL names a thing (a resource, like /orders/42). The verb says what to do to it: GET read, POST create, PUT replace, PATCH change part, DELETE remove." }
  - { front: "What do status code families 2xx, 4xx and 5xx mean?", back: "2xx: it worked. 4xx: the caller made a mistake (fix the request). 5xx: the server failed (the caller may retry later)." }
  - { front: "What does idempotent mean, and which verbs are?", back: "Doing it twice has the same effect as doing it once. GET, PUT and DELETE are; POST usually is not, so retrying a POST can create duplicates." }
  - { front: "Why use a cursor instead of page numbers?", back: "Page numbers shift when rows are added or removed while you read, so you skip or repeat items. A cursor says 'continue after this item', which stays stable, and is also cheaper for the database." }
  - { front: "Why version an API?", back: "Other programs depend on its exact shape. A new version (/v2/) lets you change things without breaking everyone still using v1." }
core:
  idea: 'An API is a contract between programs: you name a thing with a URL, say what to do with a verb, and get back data (usually JSON) plus a status code that says whether it worked. Because many callers depend on the contract, it must stay stable and be safe to retry.'
  formulas:
    - tex: '\text{verb} + \text{URL} + \text{body} \;\to\; \text{status} + \text{body}'
      label: 'One API call: request in, response out'
  conditions:
    - 'The server keeps no memory of earlier requests; each request carries everything needed (stateless)'
    - 'Verbs are used as their meaning promises: GET never changes anything'
    - 'Retries are expected, because networks drop messages, so unsafe operations need an idempotency key'
    - 'Changes to the contract are additive, or go into a new version'
  sign: 'The commonest mistake is treating every failure the same. A timeout does not tell you whether the server did the work. Retrying a payment without an idempotency key can charge twice.'
outcomes:
  - 'Explain what an API is and why programs need a written contract'
  - 'Design clean REST URLs for a small app and pick the right verb for each action'
  - 'Read and choose HTTP status codes, and write a small JSON endpoint'
  - 'Make a POST safe to retry with an idempotency key'
  - 'Paginate a large list with cursors, and compare REST, GraphQL and gRPC'
opener:
  story: |
    You order biryani and tap **Track order**. A little scooter on a map crawls toward you, and a line says *Arriving in 12 minutes*.

    Your phone does not know that. The kitchen, the rider's GPS and the payment record all live on computers you will never see, owned by different teams, maybe by different companies. Yet when you tap, the right answer comes back in a blink, in a form your phone can draw.

    How can two programs that have never met agree on how to ask, and how to answer? It is a bit like ordering at a restaurant: you do not walk into the kitchen. You use the menu.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A phone sends a request to a server and gets a JSON reply, like a customer and a waiter with a menu"><rect x="14" y="40" width="84" height="150" rx="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="24" y="62" width="64" height="40" rx="5" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="30" y="78" style="font-size:9px;fill:var(--ink)">Track order</text><text x="30" y="92" style="font-size:9px;fill:var(--muted)">12 min away</text><text x="28" y="130" style="font-size:9px;fill:var(--muted)">the app</text><rect x="226" y="40" width="84" height="150" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><g style="fill:none;stroke:var(--rule)"><rect x="236" y="52" width="64" height="20"/><rect x="236" y="78" width="64" height="20"/><rect x="236" y="104" width="64" height="20"/></g><text x="242" y="142" style="font-size:9px;fill:var(--muted)">kitchen, riders,</text><text x="242" y="154" style="font-size:9px;fill:var(--muted)">payments</text><path d="M100 84 L222 84" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M216 79 L224 84 L216 89" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="108" y="76" style="font-size:9px;fill:var(--c)">GET /orders/42</text><path d="M222 140 L100 140" style="fill:none;stroke:var(--mat);stroke-width:2"/><path d="M106 135 L98 140 L106 145" style="fill:none;stroke:var(--mat);stroke-width:2"/><text x="108" y="132" style="font-size:9px;fill:var(--mat)">200 {"eta": 12}</text><rect x="112" y="162" width="100" height="44" rx="4" style="fill:color-mix(in srgb,var(--c) 8%,var(--surface));stroke:var(--rule)"/><text x="122" y="178" style="font-size:9px;fill:var(--ink)">The contract:</text><text x="122" y="191" style="font-size:9px;fill:var(--muted)">what to ask, what</text><text x="122" y="202" style="font-size:9px;fill:var(--muted)">comes back</text></svg>'
life:
  - 'Tapping Track order in a delivery app, or checking a train''s running status on your phone, is an API call to a server.'
  - 'A UPI payment is your bank app calling APIs that the bank, the payment network and the shop''s system all agreed on.'
  - 'A weather widget on your home screen asks a weather service for today''s forecast through an API, and anyone can build such a widget.'
  - '"Login with Google" on another site is two companies'' programs talking through a published API.'
  - 'Every time you press Refresh and the page does not fully reload, JavaScript has probably called an API and redrawn just the new part.'
models:
  - name: 'The menu is the contract'
    text: 'You and the kitchen can both change everything behind the counter as long as the menu stays true. Look for the menu in any system (a legal contract, a plug socket standard, a train timetable): a small stable promise that lets two sides change independently.'
  - name: 'Assume the message can get lost'
    text: 'You cannot tell a lost request from a lost reply. Design every important action so that doing it twice is harmless, like pressing a lift button again, not like withdrawing cash twice.'
  - name: 'Do not break your users'
    text: 'If a shop changes the price of a printed menu after you ordered, you will argue. Public promises (prices, laws, interfaces) should change by adding a new version, not by quietly rewriting the old one.'
links:
  - leaf: 'cs/dns-and-http'
    name: 'DNS and HTTP'
    same: 'An API call is an HTTP request: the same verbs, status codes and headers that browsers use to fetch pages.'
    differs: 'A browser asks for a page meant for people (HTML); an API call asks for data meant for programs (usually JSON).'
  - leaf: 'cs/functions'
    name: 'Functions'
    same: 'A function has a name, inputs and an output, and callers need not know what is inside. An API endpoint is the same promise across a network.'
    differs: 'A function call cannot get lost or time out halfway; a network call can, so it needs status codes, retries and idempotency.'
  - leaf: 'cs/authentication'
    name: 'Passwords, sessions and OAuth'
    same: 'Most APIs must know who is calling, so every request carries a token that proves it.'
    differs: 'Authentication answers "who are you?". The API still has to decide separately what that caller is allowed to touch.'
next:
  q: 'We have a menu and a waiter. But what actually happens inside the kitchen, in the milliseconds between a request arriving and the answer leaving? Who checks the order, finds the data, and says no to a bad request?'
  leaf: 'cs/backend'
  name: 'Servers and back ends'
symbols:
  - s: 'API'
    means: 'application programming interface: the rules for how one program asks another for something'
  - s: 'REST'
    means: 'a style of API where URLs name things and HTTP verbs say what to do to them'
  - s: 'JSON'
    means: 'a plain-text format for data: curly-brace objects, square-bracket lists, strings, numbers, true, false, null'
  - s: 'GET, POST, PUT, PATCH, DELETE'
    means: 'the HTTP verbs: read, create, replace, change part of, remove'
  - s: '404'
    means: 'a status code: "not found". Codes are three-digit numbers; the first digit gives the family'
  - s: 'idempotent'
    means: 'doing the operation twice has the same effect as doing it once'
---

:::hook
q: Here is the puzzle. Your phone taps "Place order" but the signal drops, and you never see a reply. You tap again. What do you hope happens?
options: ["Two biryanis arrive and you pay twice", "One biryani arrives and you pay once", "An error that tells you to start over"]
answer: 1
right: Yes, and it takes real design to make it true. The app sends a unique code with each order. If the server sees the same code again, it returns the original order instead of making a new one. That trick is called an idempotency key, and we build it below. (How any given company implements it is not public. [Inference])
wrong: That is exactly what a careless design does. The network cannot tell the app whether the first request arrived, so a good API lets the app safely repeat the request. Read on to see how.
:::

## What an API is {lvl=1 id=s-what label="Foundations"}

Think of a restaurant. You do not walk into the kitchen, open the fridge and cook. You read a **menu**, tell the waiter what you want in the words on the menu, and a plate comes back. The kitchen can change its stove, its chefs, even its suppliers, and you never notice, as long as the menu stays true.

An **API** (application programming interface) is that menu, for programs. It says: here are the things you may ask for, here is exactly how to ask, and here is exactly what the answer will look like. The program that asks is the **client** (your phone). The program that answers is the **server**.

Because both sides follow the written contract, they can be built by different people in different languages on different continents. That is the whole point.

## Resources and verbs {lvl=1 id=s-rest label="Foundations"}

Most web APIs follow a style called **REST**. Its big idea is simple: name the *things*, then use a small set of *verbs*.

- A **resource** is a thing the app cares about: an order, a user, a restaurant. Each gets a **URL**, like `/orders/42`, meaning "order number 42".
- A **verb** says what to do with it. The web already has them.

| Verb | Meaning | Example | Changes data? |
|---|---|---|---|
| GET | read | `GET /orders/42` | no |
| POST | create a new one | `POST /orders` | yes |
| PUT | replace the whole thing | `PUT /users/7` | yes |
| PATCH | change part of it | `PATCH /users/7` | yes |
| DELETE | remove it | `DELETE /orders/42` | yes |

Notice the URLs are *nouns* (`/orders`), and the verbs carry the action. You do not write `/getOrder` or `/deleteOrder`; the verb already says it. A list lives at `/orders`; one item at `/orders/42`; the items inside it at `/orders/42/items`.

## JSON, the shared language {lvl=1 id=s-json label="Foundations"}

The client and server must also agree on how to write the data. Today the usual choice is **JSON**, plain text that both people and programs can read:

```javascript
{
  "id": 42,
  "status": "on_the_way",
  "eta_minutes": 12,
  "items": [{ "name": "Chicken biryani", "qty": 1 }]
}
```

Curly braces hold named fields, square brackets hold lists, and values are strings, numbers, `true`, `false` or `null`. Every language can turn this text into its own dictionaries and lists, and back. That is why JSON became the common tongue of the web.

:::qc lvl=1
q: Which request is the cleanest REST way to read the items in order 42?
options: ["GET /orders/42/items", "POST /getOrderItems?id=42", "GET /getItems"]
answer: 0
right: Right. The URL is a noun path to the thing, and GET says "read it".
wrong: Put the thing in the URL as a noun, and let the verb say the action. A read is GET.
:::

## Status codes {lvl=2 id=s-status label="SDE-1"}

Every response starts with a three-digit **status code**, so a program can react without reading the body. The first digit is the family:

| Family | Meaning | Common ones |
|---|---|---|
| 2xx | it worked | 200 OK, 201 Created, 204 No Content |
| 3xx | look elsewhere | 301 Moved, 304 Not Modified |
| 4xx | **you** made a mistake | 400 Bad Request, 401 Not logged in, 403 Not allowed, 404 Not Found, 409 Conflict, 429 Too Many Requests |
| 5xx | **we** failed | 500 Server Error, 503 Unavailable |

The 4xx versus 5xx split matters. A 400 means "fix your request; sending it again will fail again". A 503 means "not your fault, try again soon". Clients retry the second kind and not the first. Here is a small endpoint in Node with Express that uses them:

```javascript
app.get("/orders/:id", async (req, res) => {
  const order = await db.findOrder(req.params.id);
  if (!order) return res.status(404).json({ error: "order not found" });
  res.json(order);                     // 200 by default
});

app.post("/orders", async (req, res) => {
  const order = await db.createOrder(req.body);
  res.status(201).json(order);         // 201 = created
});
```

Return a clear, consistent error body too, such as `{"error": "...", "code": "..."}`, so the caller can show a good message.

## Doing it in Python {lvl=2 id=s-python label="SDE-1"}

The idea is the same in any language. In Python with FastAPI, the type hints double as the contract: a request that does not match is rejected with a 422 before your code runs.

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()
orders = {42: {"id": 42, "status": "on_the_way"}}

class NewOrder(BaseModel):
    item: str
    qty: int

@app.get("/orders/{order_id}")
def get_order(order_id: int):
    if order_id not in orders:
        raise HTTPException(status_code=404, detail="order not found")
    return orders[order_id]
```

:::qc lvl=2
q: A client sends a POST with a missing required field. Which status fits best?
options: ["200 OK", "400 Bad Request (or 422)", "500 Server Error"]
answer: 1
right: Right. The mistake is the caller's, so it is a 4xx. A 500 would wrongly tell the caller to retry.
wrong: Whose fault is it? If the caller sent a bad request, it is in the 4xx family.
:::

## Retries and idempotency {lvl=3 id=s-idem label="SDE-2"}

Networks drop messages. When your request times out, you cannot know whether the server never got it or did the work and the *reply* was lost. The safe move is to retry, but only if repeating is harmless.

An operation is **idempotent** if doing it twice has the same effect as once. `GET` is (it changes nothing). `PUT /users/7` with the same body is (it replaces to the same state). `DELETE /orders/42` is (it ends deleted either way). But `POST /orders` is **not**: two posts make two orders.

The fix is an **idempotency key**: the client invents a unique code per intended action and sends it in a header. The server remembers the key and its result.

```python
saved = {}   # key -> response (a real system uses a database)

@app.post("/orders", status_code=201)
def create_order(o: NewOrder, idempotency_key: str = Header()):
    if idempotency_key in saved:
        return saved[idempotency_key]   # same answer, no new order
    order = make_order(o)
    saved[idempotency_key] = order
    return order
```

In a real service the key and the new order must be saved in **one transaction**, so a crash cannot leave one without the other. [Unverified: how particular payment companies expire keys.]

## Pagination {lvl=3 id=s-page label="SDE-2"}

`GET /orders` for a user with 50,000 orders must not return them all at once. **Pagination** returns a slice at a time. Two styles:

| Style | Request | Good | Bad |
|---|---|---|---|
| Page number or offset | `?page=3&size=20` | easy, can jump to page 50 | rows added meanwhile shift pages (repeats, skips); a large offset makes the database count past all skipped rows |
| Cursor | `?after=ord_9187&size=20` | stable under inserts; fast, because the database seeks straight to the cursor | cannot jump to "page 50"; the cursor must be opaque and sorted on a stable key |

A cursor response looks like `{"items": [...], "next_cursor": "ord_9167"}`; when `next_cursor` is `null`, you have reached the end. Feeds that scroll forever (Instagram, Twitter) fit cursors naturally.

:::figure caption="Offset paging reads past every skipped row. A cursor lands directly on the next row, so cost stays flat however deep you go."
<svg viewBox="0 0 320 150" role="img" aria-label="Two rows of boxes: offset paging scans from the start, cursor paging jumps to the place">
<g style="stroke:var(--ink);stroke-width:1">
<rect x="10" y="30" width="20" height="20" style="fill:var(--mat)"/><rect x="32" y="30" width="20" height="20" style="fill:var(--mat)"/><rect x="54" y="30" width="20" height="20" style="fill:var(--mat)"/><rect x="76" y="30" width="20" height="20" style="fill:var(--mat)"/><rect x="98" y="30" width="20" height="20" style="fill:var(--mat)"/><rect x="120" y="30" width="20" height="20" style="fill:var(--mat)"/><rect x="142" y="30" width="20" height="20" style="fill:var(--phy)"/><rect x="164" y="30" width="20" height="20" style="fill:var(--phy)"/><rect x="186" y="30" width="20" height="20" style="fill:var(--surface)"/><rect x="208" y="30" width="20" height="20" style="fill:var(--surface)"/>
<rect x="10" y="100" width="20" height="20" style="fill:var(--surface)"/><rect x="32" y="100" width="20" height="20" style="fill:var(--surface)"/><rect x="54" y="100" width="20" height="20" style="fill:var(--surface)"/><rect x="76" y="100" width="20" height="20" style="fill:var(--surface)"/><rect x="98" y="100" width="20" height="20" style="fill:var(--surface)"/><rect x="120" y="100" width="20" height="20" style="fill:var(--surface)"/><rect x="142" y="100" width="20" height="20" style="fill:var(--phy)"/><rect x="164" y="100" width="20" height="20" style="fill:var(--phy)"/><rect x="186" y="100" width="20" height="20" style="fill:var(--surface)"/><rect x="208" y="100" width="20" height="20" style="fill:var(--surface)"/>
</g>
<g style="font-size:10px;fill:var(--muted)"><text x="10" y="22">Offset: count past 6 rows, then read 2</text><text x="10" y="92">Cursor: jump straight to "after row 6"</text></g>
<path d="M148 128 L148 138" style="stroke:var(--ink);fill:none"/><text x="156" y="140" style="font-size:10px;fill:var(--ink)">start here</text>
</svg>
:::

## Versioning and evolving the contract {lvl=3 id=s-version label="SDE-2"}

Once other programs depend on your API, changing it is dangerous. An old phone app, still installed on a million devices, expects `eta_minutes`. Rename it and those apps break.

Rules of thumb:
- **Adding** a field or an endpoint is safe: old clients ignore what they do not know.
- **Removing, renaming or changing the meaning** of a field is a **breaking change**.
- For breaking changes, publish a new **version** (`/v2/orders`, or a header) and keep `/v1/` alive until usage dies down. Announce a deadline.

Good APIs also give callers a **rate limit** (for example, 100 requests a minute, then 429 Too Many Requests) so one buggy client cannot swamp the server.

## REST, GraphQL and gRPC {lvl=3 id=s-beyond label="SDE-2"}

REST is not the only style. Two others solve real problems REST has:

| | REST | GraphQL | gRPC |
|---|---|---|---|
| Shape | many URLs, one per resource | one URL, client writes a query naming the fields it wants | named functions you call (`GetOrder`) |
| Data format | JSON (text) | JSON (text) | Protocol Buffers (compact binary) |
| Strong at | simple, cacheable, understood everywhere | mobile apps that need exactly the fields on one screen, in one round trip | fast calls between a company's own servers |
| Weak at | over-fetching (extra fields), many round trips for one screen | caching is harder; one expensive query can hurt the server | not browser-friendly; hard to poke by hand |
| Typical use | public APIs | app front ends | internal microservices |

[Inference: which companies use which is partly public and partly not; treat the "typical use" row as a common pattern, not a rule.] None is best. Start with REST, and reach for the others when you can name the problem they fix.

:::qc lvl=3
q: A mobile screen needs the order, the restaurant name and the rider's photo. With REST it makes three calls and downloads fields it never shows. Which style is designed to fix exactly this?
options: ["GraphQL", "Idempotency keys", "A cursor"]
answer: 0
right: Right. The client names the fields it wants, across related things, in one request.
wrong: Think about which style lets the client choose the fields and combine several resources in a single call.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. An API is a written contract between programs: what to ask, and what comes back. {lvl=1}
2. REST names things with URLs (nouns) and acts on them with verbs: GET, POST, PUT, PATCH, DELETE. {lvl=1}
3. JSON is the common text format for the data in requests and responses. {lvl=1}
4. Status codes tell the caller what happened: 2xx worked, 4xx you erred, 5xx we failed. {lvl=2}
5. Networks lose messages, so unsafe operations (POST) need an idempotency key to be retried safely. {lvl=3}
6. Paginate big lists; cursors stay stable and fast where page numbers drift and slow down. {lvl=3}
7. Never break callers: add freely, and version breaking changes. REST, GraphQL and gRPC each fix a different problem. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- GET must never change data: browsers, crawlers and caches call GET freely and repeat it. {lvl=1}
- Do not return 200 with an error inside the body; use the right status code so clients and tools can react. {lvl=2}
- A timeout does not mean failure: the server may have done the work. Retry only idempotent calls or with a key. {lvl=3}
- Never put secrets (tokens, passwords) in the URL; URLs are logged. Use headers. {lvl=2}
- Offset pagination on a busy list repeats or skips items; use a cursor. {lvl=3}
- "Add a field" is safe, "rename a field" is breaking. Version before you break. {lvl=3}
:::
