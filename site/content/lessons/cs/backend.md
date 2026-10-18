---
title: Servers and back ends
summary: What a server actually does in the few milliseconds between your tap and its answer, and why good ones forget you between requests.
ncert: []
up_to: SDE-2
builds_on: [APIs (REST and beyond), DNS and HTTP, Functions]
notes_prompt: Explain to a friend what happens inside a server, step by step, when you press Pay in an app.
margin:
  - kind: history
    title: History
    text: 'Early web servers mostly handed out files that already existed on disk. Programs that build each page or answer on the fly, called dynamic back ends, arrived in the mid-1990s. [Unverified: dates]'
  - kind: tip
    title: Interview favourite
    text: 'Why is the server stateless? is a standard question. The answer: so any of ten identical servers can handle any request, which lets you add machines to cope with load.'
  - kind: olympiad
    title: Design link
    text: 'A stateless web tier in front of one shared database is the default shape of most products. Scaling then becomes a question about the database, not the web servers.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliable, Scalable, Maintainable Applications; Ch. 11 Stream Processing (job queues) [Unverified]" }
  - { title: "A. Wiggins, The Twelve-Factor App (web essay)", ref: "Factors III Config and VI Processes (stateless processes)" }
cards:
  - { front: "What are the steps a back end takes for one request?", back: "Route it to the right handler, validate the input, check who is calling and whether they may do this, run the business logic, talk to the database, then send the response." }
  - { front: "What does stateless mean for a server?", back: "It keeps no memory of you between requests. Everything needed arrives with each request (such as a token), and anything that must last goes in a shared database." }
  - { front: "Why does statelessness help scaling?", back: "Any copy of the server can answer any request, so you can put a load balancer in front of many identical copies and add more when traffic grows." }
  - { front: "What is the difference between authentication and authorisation?", back: "Authentication: who are you? Authorisation: are you allowed to do this specific thing? A valid login does not mean permission for every action." }
  - { front: "What belongs in a background job instead of the request?", back: "Slow work the user need not wait for: sending email, resizing images, generating reports. The request puts a job on a queue and replies at once; a worker does the job later." }
  - { front: "Where should secrets and settings live?", back: "In environment variables or a secrets manager, never in the code or in git. The same code then runs in development and production with different settings." }
core:
  idea: 'A back end is a program that waits for requests and, for each one, routes it, validates it, checks who is calling, runs the rules of the business, reads or writes the database and sends a response. Good servers are stateless, so many identical copies can share the work.'
  formulas:
    - tex: '\text{route} \to \text{validate} \to \text{authenticate} \to \text{logic} \to \text{database} \to \text{response}'
      label: 'The path of one request'
  conditions:
    - 'Each request is handled on its own and carries all the information the server needs'
    - 'Shared state (users, orders, sessions) lives in a database or cache, not in server memory'
    - 'Slow work that the user need not wait for runs outside the request'
    - 'Settings and secrets come from the environment, not from the code'
  sign: 'The commonest mistake is trusting the client. Anything arriving from outside (a field, a header, an ID in the URL) must be validated and checked against what the caller may do.'
outcomes:
  - 'Describe what a back end does for a single request, step by step'
  - 'Write a small route handler with validation and the right status codes'
  - 'Tell authentication from authorisation and explain why both are needed'
  - 'Explain why servers are stateless and how that lets you scale out'
  - 'Move slow work into a background job and keep secrets out of code'
opener:
  story: |
    You open a ticket-booking app on a Friday night and tap **Pay ₹850**. Two seconds later you see *Booking confirmed*, and an email lands in your inbox a minute after that.

    Between your tap and that screen, a computer you have never seen did a surprising amount of work. It had to understand what you asked for, make sure you really were you, check that the seats were still free, take the money, write down the booking, and answer. And while it did that for you, it was doing the same for thousands of other people.

    What exactly is that computer doing, step by step? And why does it conveniently forget you the moment it replies?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A request enters a server and passes through a row of checkpoints before the answer returns"><rect x="10" y="96" width="46" height="48" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="17" y="124" style="font-size:9px;fill:var(--ink)">phone</text><path d="M58 120 L84 120" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="84" y="40" width="150" height="160" rx="8" style="fill:color-mix(in srgb,var(--c) 6%,var(--surface));stroke:var(--ink);stroke-width:2"/><text x="94" y="56" style="font-size:9px;fill:var(--muted)">the server</text><g style="fill:var(--surface);stroke:var(--c)"><rect x="96" y="64" width="126" height="20" rx="4"/><rect x="96" y="90" width="126" height="20" rx="4"/><rect x="96" y="116" width="126" height="20" rx="4"/><rect x="96" y="142" width="126" height="20" rx="4"/><rect x="96" y="168" width="126" height="20" rx="4"/></g><g style="font-size:9px;fill:var(--ink)"><text x="104" y="78">1 route: which handler?</text><text x="104" y="104">2 validate: is it sane?</text><text x="104" y="130">3 auth: who, allowed?</text><text x="104" y="156">4 logic: seats free?</text><text x="104" y="182">5 database: save it</text></g><rect x="260" y="96" width="50" height="48" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="268" y="124" style="font-size:9px;fill:var(--ink)">database</text><path d="M236 176 L258 134" style="fill:none;stroke:var(--mat);stroke-width:2"/><text x="14" y="190" style="font-size:9px;fill:var(--mat)">then: 201 Created</text><text x="14" y="204" style="font-size:9px;fill:var(--muted)">and forget you</text></svg>'
life:
  - 'Booking a train ticket: a server checks your login, whether seats are free, takes payment and writes the booking, all in one request.'
  - 'Every UPI payment passes through back-end servers that check your PIN, your balance and the receiver, then record the transfer.'
  - 'The confirmation email or SMS that arrives a little after you pay is a background job, sent after the request already finished.'
  - 'During a big sale, shops add more identical servers in the evening and remove them at night; this works because the servers are stateless.'
  - 'Your phone stays logged in to an app for weeks because it keeps a token and shows it with every request; the server does not remember you.'
models:
  - name: 'Never trust the input'
    text: 'A bank teller checks your ID and your signature, even if you look familiar. Anything that comes from outside the system, whether a form, a URL or a phone call claiming to be your bank, must be verified before you act on it.'
  - name: 'Keep the staff interchangeable'
    text: 'A call centre can add agents on busy days because every agent works from the same shared records, not from memory. Whenever you want to scale, keep the state in one shared place and make the workers identical.'
  - name: 'Do the urgent part now, the rest later'
    text: 'A restaurant hands you a token and a receipt at the counter, then cooks. Split what the person must wait for from what can happen afterwards, and the waiting gets short.'
links:
  - leaf: 'cs/apis'
    name: 'APIs (REST and beyond)'
    same: 'The API is the menu; the back end is the kitchen that makes each dish. Every route in the back end is one entry on the menu.'
    differs: 'An API describes the promise to the outside. A back end is the code and machinery that keeps it, and it may change freely behind the contract.'
  - leaf: 'cs/authentication'
    name: 'Passwords, sessions and OAuth'
    same: 'The auth step in the request path is where those ideas run: reading the token, checking it and deciding who is calling.'
    differs: 'The lesson on authentication covers how identity is proven. Here we only place that check in the request''s path.'
  - leaf: 'cs/message-queues'
    name: 'Message queues and events'
    same: 'A background job is a message on a queue: a note to a worker saying "do this later".'
    differs: 'Queues at scale bring new problems (ordering, delivery guarantees, retries) which that lesson covers; here a queue is just a to-do list.'
next:
  q: 'Our server forgets everything between requests. So where does the truth about users, orders and seats live, and how does a server talk to it without becoming slow or confusing?'
  leaf: 'cs/app-databases'
  name: 'Using a database from an app'
symbols:
  - s: 'request'
    means: 'a message from a client asking the server to do something: a verb, a URL, headers and sometimes a body'
  - s: 'route'
    means: 'a rule matching a verb and URL pattern to the function (handler) that deals with it'
  - s: 'handler'
    means: 'the function that runs for a matching route and returns a response'
  - s: 'middleware'
    means: 'a step that runs before the handler on many routes, such as logging or checking a token'
  - s: 'stateless'
    means: 'keeping no memory of earlier requests; everything needed arrives with each one'
  - s: 'environment variable'
    means: 'a named setting given to a program from outside, such as DATABASE_URL'
---

:::hook
q: Here is the puzzle. A site runs on 10 identical servers. You log in on one, and your next click is answered by a different one. What lets it still know you are logged in?
options: ["The servers whisper to each other after every click", "You carry proof with every request", "It does not; you are logged out every time"]
answer: 1
right: Yes. Your app sends a token with every request, and whichever server receives it checks the token. Nothing about you is kept in one server's memory, so any server will do. That is what stateless means. (How a given site stores sessions varies. [Inference])
wrong: Servers could do that, but it would be slow and fragile. The usual trick is simpler: the client carries the proof, and each server checks it from scratch.
:::

## What a server is {lvl=1 id=s-what label="Foundations"}

A **server** is just a program that sits waiting. A request arrives over the network, the program does something, and it sends back a response. Then it waits for the next request. The machine it runs on is usually a computer in a data centre with no screen.

The part of a product that lives on those servers, out of sight, is called the **back end**. The part you see and tap is the front end. Anything that must be the same for everyone, or must be kept safe, lives in the back end: who you are, what you ordered, how much money is in the account.

Why not do it all in the app on your phone? Because your phone is not trusted (you could change the code on it), is not shared (your friend's phone cannot see your booking) and is switched off half the time. The back end is the one place everyone agrees on.

## The path of one request {lvl=1 id=s-path label="Foundations"}

Every request, whether it books a ticket or loads a profile, passes through much the same stages:

:::figure caption="The same six stages for almost every request. A problem at any stage ends the journey early with an error response."
<svg viewBox="0 0 320 130" role="img" aria-label="A row of six boxes from route to response, with early exit arrows for errors">
<g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.2">
<rect x="6" y="40" width="46" height="34" rx="4"/><rect x="58" y="40" width="46" height="34" rx="4"/><rect x="110" y="40" width="46" height="34" rx="4"/><rect x="162" y="40" width="46" height="34" rx="4"/><rect x="214" y="40" width="46" height="34" rx="4"/><rect x="266" y="40" width="48" height="34" rx="4"/>
</g>
<g style="font-size:9px;fill:var(--ink)" text-anchor="middle"><text x="29" y="61">route</text><text x="81" y="61">validate</text><text x="133" y="61">auth</text><text x="185" y="61">logic</text><text x="237" y="61">database</text><text x="290" y="61">response</text></g>
<g style="fill:none;stroke:var(--c);stroke-width:1.5"><path d="M52 57 L58 57"/><path d="M104 57 L110 57"/><path d="M156 57 L162 57"/><path d="M208 57 L214 57"/><path d="M260 57 L266 57"/></g>
<g style="font-size:9px;fill:var(--muted)" text-anchor="middle"><text x="29" y="96">404</text><text x="81" y="96">400</text><text x="133" y="96">401 / 403</text><text x="185" y="96">409</text><text x="237" y="96">500</text></g>
<g style="stroke:var(--muted);stroke-dasharray:3 3;fill:none"><path d="M29 74 L29 86"/><path d="M81 74 L81 86"/><path d="M133 74 L133 86"/><path d="M185 74 L185 86"/><path d="M237 74 L237 86"/></g>
<text x="6" y="22" style="font-size:10px;fill:var(--muted)">Each stage can stop early with an error code</text>
</svg>
:::

1. **Route.** Which function handles `POST /bookings`? No match: 404.
2. **Validate.** Is the body well-formed, are required fields present, is the seat number a number? Bad input: 400.
3. **Authenticate and authorise.** Who is calling, and may they do this? Unknown: 401. Known but not allowed: 403.
4. **Business logic.** The rules: are those seats still free? Does the coupon apply? A rule fails: often 409 (conflict) or 422.
5. **Database.** Read the data, and write the booking.
6. **Response.** Build the JSON and a status code, and send it.

## A handler in code {lvl=2 id=s-code label="SDE-1"}

A framework such as Express (Node) or FastAPI (Python) does stage 1 for you and calls your **handler** for each match. Here the stages are marked in an Express handler:

```javascript
app.post("/bookings", requireLogin, async (req, res) => {   // 1 route, 3 auth
  const { showId, seats } = req.body;
  if (!Number.isInteger(showId) || !Array.isArray(seats) || seats.length === 0)
    return res.status(400).json({ error: "showId and seats required" });  // 2

  const free = await db.seatsFree(showId, seats);            // 4 logic
  if (!free) return res.status(409).json({ error: "seats taken" });

  const booking = await db.createBooking(req.user.id, showId, seats);  // 5
  res.status(201).json(booking);                             // 6
});
```

Note `req.user.id` comes from the **verified token**, never from the request body. If the client could say "I am user 5", anyone could book as anyone.

## Validation and authorisation {lvl=2 id=s-valid label="SDE-1"}

**Validation** protects the server from nonsense: wrong types, missing fields, absurd sizes. Do it at the edge, before any logic runs, and say clearly what was wrong. Frameworks help: FastAPI rejects a body that does not match its declared type.

```python
class Booking(BaseModel):
    show_id: int
    seats: list[str] = Field(min_length=1, max_length=10)

@app.post("/bookings", status_code=201)
def book(b: Booking, user=Depends(current_user)):
    return create_booking(user.id, b.show_id, b.seats)
```

Then two separate questions, often confused:

| Question | Name | Failure code | Example |
|---|---|---|---|
| Who are you? | **Authentication** | 401 | The token is missing or expired |
| Are you allowed to do this? | **Authorisation** | 403 | A valid user tries to cancel *someone else's* booking |

The second is where real bugs hide. `DELETE /bookings/88` must check that booking 88 belongs to the caller. Skipping it lets anyone delete any booking by guessing numbers.

:::qc lvl=2
q: A logged-in user sends DELETE /bookings/88, but booking 88 belongs to another user. Which status should the server return?
options: ["401 Unauthorized", "403 Forbidden", "201 Created"]
answer: 1
right: Right. The server knows who the caller is, so authentication passed; the caller just is not allowed to touch this booking.
wrong: Ask which question failed: "who are you?" or "are you allowed?". The caller was identified.
:::

## Stateless servers {lvl=3 id=s-stateless label="SDE-2"}

A **stateless** server remembers nothing about you between requests. Each request arrives with everything needed: a token, the data to act on. Anything that must last (your bookings, your cart) goes into a shared database.

Why bother? Imagine the server kept your login in its own memory. The next request might go to a different copy of the server, which has never heard of you. You would be "logged out" at random. Stateless servers avoid this, and give a bonus:

- **Scale out.** Put a **load balancer** in front of N identical copies. Any copy can serve any request. More traffic? Add copies. A copy crashes? The others carry on and nothing is lost.
- **Easy deploys.** Replace copies one at a time, with no user state to migrate.

Sessions can still exist. The state just moves out of the server: either into the **token** itself (a signed note the client carries, so the server only checks the signature) or into a shared store such as a database or Redis, looked up with an ID the client sends. [Inference: which of these a given company uses is mostly not public.]

:::qc lvl=3
q: Why does keeping a shopping cart in one server's memory break when you add a second server?
options: ["The second server might receive the next request and not have the cart", "Servers cannot store memory", "The cart gets bigger"]
answer: 0
right: Right. The cart must live somewhere every copy can reach, such as a database or Redis.
wrong: Think about which server handles your next click when a load balancer is spreading requests around.
:::

## Background jobs {lvl=3 id=s-jobs label="SDE-2"}

Some work is slow and the user does not need to wait for it: sending a confirmation email, resizing a photo, building a PDF invoice. If you do it inside the request, the user stares at a spinner, and if it fails the whole request fails.

Instead, the handler **puts a job on a queue** and replies at once. A separate **worker** program takes jobs off the queue and does them.

```python
@app.post("/bookings", status_code=201)
def book(b: Booking, user=Depends(current_user)):
    booking = create_booking(user.id, b.show_id, b.seats)
    queue.enqueue("send_confirmation", booking.id)   # returns instantly
    return booking                                   # user sees success now
```

Two cautions. Jobs can run twice (a worker crashes after sending but before marking it done), so make jobs **idempotent**: sending the same confirmation twice should be harmless or detectable. And jobs fail, so retry with a delay, and park jobs that keep failing somewhere you can inspect.

## Config and secrets {lvl=3 id=s-config label="SDE-2"}

Your code needs settings: the database address, an API key for the payment company, a flag for turning a feature on. These differ between your laptop, a test server and production. So they must not be written into the code.

- Read them from **environment variables** (or a secrets manager) at start-up: `process.env.DATABASE_URL`, or `os.environ["DATABASE_URL"]` in Python.
- **Never commit secrets to git.** Even if you delete the file later, the history keeps it, and bots scan public repositories for keys within minutes. [Unverified: exact timing]
- Fail fast: if a required setting is missing, crash at start-up with a clear message instead of failing on the first request.

```javascript
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error("DATABASE_URL is not set");
```

The payoff is that the same code runs everywhere, and rotating a leaked key means changing a setting, not rewriting software.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The back end is the shared, trusted part of a product: it holds the truth and enforces the rules. {lvl=1}
2. Every request passes through: route, validate, authenticate and authorise, logic, database, response. {lvl=1}
3. Never trust input from outside; validate it, and take the user's identity from the verified token, not from the body. {lvl=2}
4. Authentication asks who you are (401); authorisation asks whether you may do this (403). {lvl=2}
5. Stateless servers let you run many identical copies behind a load balancer; shared state lives in a database or cache. {lvl=3}
6. Put slow, non-urgent work on a queue for a worker, and make jobs safe to run twice. {lvl=3}
7. Keep settings and secrets in the environment, not in code or git. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Taking the user ID from the request body or URL instead of the verified token lets anyone act as anyone. {lvl=2}
- Checking login but not ownership (authorisation) is one of the most common real-world security bugs. {lvl=2}
- Storing a session or cart in server memory breaks as soon as there are two servers or a restart. {lvl=3}
- Doing email, image work or reports inside the request makes users wait and ties success to a slow step. {lvl=3}
- Background jobs run at least once, not exactly once: design for duplicates. {lvl=3}
- Never commit keys or passwords; a deleted secret still lives in git history. {lvl=3}
:::
