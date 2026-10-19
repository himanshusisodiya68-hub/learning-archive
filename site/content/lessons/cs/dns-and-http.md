---
title: DNS and HTTP
summary: How a name like zomato.com becomes a number, and how a browser and a server then talk in plain text.
ncert: []
up_to: SDE-2
builds_on: [How the internet works, TCP/IP and the layers]
notes_prompt: Explain to a friend what happens between typing a website name and seeing the page, using the idea of a phone book and a waiter taking an order.
margin:
  - kind: history
    title: History
    text: Before DNS, one file called HOSTS.TXT listed every machine on the network and was copied around by hand. Paul Mockapetris designed DNS in 1983 to replace it [Unverified]. Your own computer still has a hosts file that is checked first.
  - kind: tip
    title: Interview favourite
    text: 'Know the status code families by heart (2xx fine, 3xx go elsewhere, 4xx your mistake, 5xx the server''s mistake) and the difference between GET (safe to repeat) and POST (may change things).'
  - kind: olympiad
    title: Try this
    text: Open your browser's developer tools, go to the Network tab and reload a page. Each row is one HTTP request; click one to read the headers and the status code you have just learned.
books:
  - { title: "J. Kurose and K. Ross, Computer Networking: A Top-Down Approach", ref: "Ch. 2 Application Layer: the Web and HTTP, DNS [Unverified]" }
  - { title: "I. Grigorik, High Performance Browser Networking", ref: "HTTP/1.1, HTTP/2, TLS chapters [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 4 Encoding and Evolution: dataflow through services (REST)" }
cards:
  - { front: "What does DNS do?", back: "Turns a human-friendly name (www.example.com) into the IP address a computer needs. It is a worldwide, hierarchical, cached phone book." }
  - { front: "Who is asked, in order, in a full DNS lookup?", back: "Your resolver (usually your ISP's or a public one), then a root server (points to .com), then the .com server (points to the domain's own server), then the domain's authoritative server (gives the address)." }
  - { front: "What is a TTL in DNS?", back: "Time to live: how many seconds a cached answer may be reused. Short TTL means changes spread fast but more lookups; long TTL means fewer lookups but slow changes." }
  - { front: "Name the common HTTP methods and what they mean.", back: "GET read, POST create or submit, PUT replace, PATCH change part, DELETE remove. GET, PUT and DELETE are meant to be safe to repeat (idempotent); POST is not." }
  - { front: "What do 200, 301, 304, 404, 500 mean?", back: "200 OK; 301 moved permanently; 304 not modified (use your cached copy); 404 not found; 500 the server failed." }
  - { front: "What does HTTPS add to HTTP?", back: "Encryption and proof of identity (TLS): nobody on the path can read or change the traffic, and the certificate shows you reached the real site." }
core:
  idea: '**DNS** is a cached, worldwide directory that turns a name into an IP address. **HTTP** is a simple request-and-response conversation on top of TCP: the client sends a method, a path and headers, and the server answers with a status code, headers and a body.'
  formulas:
    - tex: '\text{time to first byte} \approx t_{\text{DNS}} + 1\,\text{RTT}_{\text{TCP}} + 1\,\text{RTT}_{\text{TLS}} + 1\,\text{RTT}_{\text{request}}'
      label: 'A fresh HTTPS visit (TLS 1.3), ignoring server work'
  conditions:
    - 'HTTP is stateless: each request stands alone, so a server remembers you only through things like cookies'
    - 'Cached DNS answers are trusted until their TTL expires, so changes are not instant'
    - 'HTTPS needs a certificate that the browser trusts and that matches the site name'
  sign: 'A 404 is the client''s problem (wrong address) and a 500 is the server''s; mixing them up wastes hours of debugging.'
outcomes:
  - 'Walk through a DNS lookup from your device to the authoritative server, and say where caching happens'
  - 'Read an HTTP request and response: method, path, headers, status code, body'
  - 'Choose the right method and status code for a simple action'
  - 'Explain what HTTPS adds and what it costs in round trips'
  - 'Describe in a picture how HTTP/2 and HTTP/3 are faster than HTTP/1.1'
opener:
  story: |
    You type zomato.com and press Enter. Two things must happen before a single pixel of the page appears. Your phone knows only the name, but the network can only deliver to numbers, so someone has to say which number belongs to that name.

    Then your browser has to ask for the page in words the server understands. It is not magic: it is a short, polite message very much like ordering at a restaurant, and the server's answer is just as plain, down to a three-digit number that says "here it is" or "sorry, we don't have that".

    Who keeps the world's address book, and what exactly do the browser and the server say to each other?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A browser asks a name server for an address, then sends a request to the web server and gets a response"><rect x="12" y="90" width="64" height="56" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="22" y="122" style="font-size:11px;fill:var(--ink)">browser</text><rect x="224" y="20" width="84" height="48" rx="6" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c);stroke-width:1.8"/><text x="238" y="40" style="font-size:11px;fill:var(--ink)">DNS</text><text x="232" y="56" style="font-size:9px;fill:var(--muted)">name to number</text><rect x="224" y="170" width="84" height="48" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="236" y="190" style="font-size:11px;fill:var(--ink)">web server</text><text x="232" y="206" style="font-size:9px;fill:var(--muted)">203.0.113.7</text><g style="fill:none;stroke:var(--c);stroke-width:2"><path d="M76 100 C130 60 170 40 220 42"/><path d="M76 138 C130 180 170 196 220 194"/></g><text x="86" y="34" style="font-size:10px;fill:var(--c)">1  where is zomato.com?</text><text x="96" y="212" style="font-size:10px;fill:var(--c)">2  GET / ... 200 OK</text><text x="14" y="228" style="font-size:10px;fill:var(--muted)">first a number, then a conversation</text></svg>'
life:
  - 'Changing a website''s hosting: owners lower the DNS TTL a day before, so visitors move to the new machine quickly.'
  - 'Your browser''s padlock icon shows HTTPS: the certificate matched the site and the connection is encrypted, which is why UPI and banking pages use it.'
  - 'Seeing "404 Page not found" when a link is broken, or "502 Bad Gateway" when a site behind a front server has crashed.'
  - 'Reloading a page and seeing it appear instantly because the browser got a "304 Not Modified" and reused its saved copy.'
  - 'A public DNS service such as 8.8.8.8 or 1.1.1.1 can load sites faster or bypass a blocked name, because you are choosing whom to ask.'
models:
  - name: 'Indirection solves change'
    text: 'Use a name that stays fixed and a lookup that can change. DNS lets a company move a service to a new machine without telling anyone. Phone contacts, bank nicknames and web links all work this way.'
  - name: 'Ask the nearest cache first'
    text: 'Most questions have been asked before. Remembering answers for a limited time makes a system fast, at the price of being briefly out of date. Decide how stale an answer may be.'
  - name: 'Stateless messages scale'
    text: 'If each request carries everything needed to answer it, any server can handle it, and nothing has to be remembered between calls. Like a form that is complete on its own, it is easy to pass to any clerk.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'DNS is a giant key-to-value lookup (name to address), and a resolver''s cache is literally a hash map with expiry times.'
    differs: 'A hash table lives in one memory; DNS is split across millions of servers with a hierarchy that says whom to ask next.'
  - leaf: 'cs/tcp-ip'
    name: 'TCP/IP and the layers'
    same: 'HTTP/1.1 and HTTP/2 run on a TCP connection, so every fresh connection pays the handshake round trip.'
    differs: 'HTTP/3 replaces TCP with QUIC on UDP, so a lost packet no longer stalls every request on the connection.'
  - leaf: 'cs/apis'
    name: 'APIs (REST and beyond)'
    same: 'A REST API is just HTTP used on purpose: methods say what to do, paths name things, status codes say what happened.'
    differs: 'A web page is returned to be shown to a person; an API returns data meant for another program.'
next:
  q: 'You are in India and the website''s server is in Virginia, 13,000 km away. Even at the speed of light the round trips add up. Can the site feel fast anyway, and how do big sites do it?'
  leaf: 'cs/cdns-and-latency'
  name: 'CDNs and latency'
symbols:
  - s: 'DNS'
    means: 'Domain Name System: the worldwide directory that maps names to IP addresses'
  - s: 'TTL'
    means: 'time to live: seconds a cached answer may be reused (seconds)'
  - s: 'GET, POST'
    means: 'HTTP methods: ask for something, or send something to be acted on'
  - s: '404, 500'
    means: 'status codes: three-digit numbers in a response saying what happened'
  - s: 'header'
    means: 'a "name: value" line of extra information on a request or response'
  - s: '\text{RTT}'
    means: 'round-trip time: how long a message takes to go and the reply to return (seconds)'
  - s: 'HTTPS, TLS'
    means: 'HTTP over TLS, the protocol that encrypts and authenticates the connection'
---

:::hook
q: When you load a site you visited an hour ago, how many times does your device ask the global DNS system for its address?
options: ["Every single time, from the root servers down", "Probably not at all, a nearby cache already knows", "Once per image on the page"]
answer: 1
right: Right. Answers are cached on your device, in your browser, and in your resolver for the TTL (often minutes to hours), so the full lookup is rare. That cache is why DNS survives billions of lookups a day.
wrong: If every lookup went all the way to the top, the root servers would melt. What would you do if you had asked the same question an hour ago?
:::

## The phone book problem {lvl=1 id=s-phonebook label="Foundations"}

People remember **names** (`example.com`); machines need **numbers** (`93.184.216.34`). The **Domain Name System**, or DNS, is the service that looks one up for you. You can think of it as a phone book, but with two twists.

First, no single book could hold every name, so the book is split in a **hierarchy** and read right to left. In `www.example.com`, the last part, `com`, is the top-level domain; `example` is a name registered under it; `www` is a machine the owner has named. Each level only knows who is in charge of the next one down.

Second, nobody wants to walk to the library for every call, so answers are **cached**: remembered for a while. Your phone remembers, your browser remembers and your internet provider's helper remembers.

:::qc lvl=1
q: What does DNS give your browser?
options: ["The web page", "The IP address for a name", "A password for the site"]
answer: 1
right: Right. DNS only answers "which number belongs to this name?" The page itself comes afterwards from that number.
wrong: DNS is the phone book, not the shop. What does a phone book give you?
:::

## Following one lookup {lvl=2 id=s-lookup label="SDE-1"}

Say your device has never heard of `www.example.com`. It asks a **resolver**, a helper run by your provider or a public service. The resolver does the legwork:

1. Ask a **root server**: "who knows `.com`?" The root replies with the addresses of the `.com` servers.
2. Ask a **.com server**: "who knows `example.com`?" It replies with the addresses of that company's own servers.
3. Ask the company's **authoritative server**: "what is `www.example.com`?" It gives the final IP address.

The resolver passes the answer to you and also keeps it for the **TTL** (time to live) the owner chose, say 300 seconds. Anyone who asks in the next five minutes gets it straight from the cache. It also remembers the root and `.com` answers, which is why the root servers see so little traffic.

:::figure caption="A cold DNS lookup. After it, each answer sits in the resolver's cache until its TTL runs out."
<svg viewBox="0 0 360 170" role="img" aria-label="Device asks resolver, which asks root, then com, then authoritative server">
<g style="font-size:11px;text-anchor:middle">
<g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"><rect x="8" y="62" width="62" height="40" rx="6"/><rect x="108" y="62" width="62" height="40" rx="6" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface))"/><rect x="236" y="8" width="84" height="32" rx="6"/><rect x="236" y="68" width="84" height="32" rx="6"/><rect x="236" y="128" width="84" height="32" rx="6"/></g>
<g style="fill:var(--ink)"><text x="39" y="86">device</text><text x="139" y="86">resolver</text><text x="278" y="28">root</text><text x="278" y="88">.com</text><text x="278" y="148">example.com</text></g>
<g style="fill:none;stroke:var(--c);stroke-width:1.8"><path d="M70 82 L108 82"/><path d="M170 72 L236 26"/><path d="M170 82 L236 84"/><path d="M170 94 L236 142"/></g>
<g style="font-size:9px;fill:var(--muted)"><text x="204" y="44">1</text><text x="204" y="78">2</text><text x="204" y="126">3</text><text x="90" y="74">ask</text></g>
</g>
</svg>
:::

Names that stand for others use a **CNAME** record ("`www.shop.in` is another name for `shop.cdn.net`"), and email uses **MX** records. The common record types: A (name to IPv4 address), AAAA (name to IPv6), CNAME (alias), MX (mail), TXT (free text, often used to prove ownership).

```python
import socket
# Ask the OS resolver, which checks its cache before asking the network.
print(socket.gethostbyname("example.com"))   # an IPv4 address
# getaddrinfo returns every address (IPv4 and IPv6) for a name and port.
for family, *_, addr in socket.getaddrinfo("example.com", 443)[:2]:
    print(family.name, addr[0])
```

:::qc lvl=2
q: A site owner sets a TTL of 86,400 seconds (one day) and then moves to a new server. Roughly how long might some visitors still reach the old server?
options: ["A few seconds", "Up to a day", "A year"]
answer: 1
right: Right. Resolvers may keep the old answer until its TTL expires. That is why owners lower the TTL before a move.
wrong: A cached answer is trusted until its time to live runs out. How long is that here?
:::

## Talking HTTP {lvl=1 id=s-http label="Foundations"}

Once the browser has the number, it opens a TCP connection and speaks **HTTP** (HyperText Transfer Protocol). It is plain text, a request and a response, like ordering at a restaurant. A request looks like this:

```
GET /menu.html HTTP/1.1
Host: www.example.com
Accept: text/html
```

The first line has three parts: the **method** (what to do), the **path** (which thing) and the version. The following lines are **headers**: `name: value` extras such as who you are asking (`Host`) and what you can read (`Accept`). The server's reply is just as plain:

```
HTTP/1.1 200 OK
Content-Type: text/html
Cache-Control: max-age=3600

<html>... the page ...</html>
```

A **status code** in the first line says how it went, then headers, then a blank line, then the **body** (the page, image or data). Because each request is complete on its own and the server keeps no memory between them, HTTP is called **stateless**.

:::qc lvl=1
q: A server's reply starts with "HTTP/1.1 404". What does that tell you?
options: ["The page was found", "The server crashed", "The server is fine but has nothing at that address"]
answer: 2
right: Right. 404 is "not found": the server worked, but the path asks for something it does not have.
wrong: 404 is a 4xx code, which puts the problem on the request side. What is wrong with the request?
:::

## Methods, status codes and headers {lvl=2 id=s-methods label="SDE-1"}

**Methods** say what you want done:

| Method | Meaning | Safe to repeat? |
|---|---|---|
| GET | read a thing | yes (and changes nothing) |
| POST | create or submit something | no: sending twice may create two |
| PUT | replace a thing with this | yes |
| PATCH | change part of a thing | usually not guaranteed |
| DELETE | remove a thing | yes |

"Safe to repeat" is called **idempotent**: doing it twice leaves the same result as once. It matters because networks fail; if your payment request times out, you can retry a GET or PUT freely, but a POST needs care (a retry key) or you pay twice.

**Status codes** come in families:

| Family | Meaning | Examples |
|---|---|---|
| 2xx | success | 200 OK, 201 Created |
| 3xx | go elsewhere or reuse | 301 moved permanently, 304 not modified |
| 4xx | your request is wrong | 400 bad request, 401 not logged in, 403 forbidden, 404 not found, 429 too many requests |
| 5xx | the server failed | 500 internal error, 502 bad gateway, 503 unavailable |

**Headers** carry the rest of the story: `Content-Type` (what the body is), `Cookie` and `Set-Cookie` (a small token the server hands out and the browser returns, which is how a stateless protocol remembers you are logged in), `Cache-Control` (how long the answer may be reused), `ETag` (a fingerprint; the browser later asks "still this version?" and gets a tiny 304 if so).

```python
import socket
# HTTP is just text over a TCP socket.
s = socket.create_connection(("example.com", 80), timeout=5)
s.sendall(b"GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n")
reply = s.recv(4096).decode(errors="replace")
print(reply.split("\r\n")[0])    # e.g. HTTP/1.1 200 OK
s.close()
```

:::qc lvl=2
q: You click "Pay" and the page hangs. Which request type is the dangerous one to resend blindly?
options: ["GET", "POST", "DELETE"]
answer: 1
right: Right. A POST that creates a payment can run twice. Real systems attach an idempotency key so a retry does not double-charge.
wrong: Which method is not safe to repeat? Think of what "create" does when sent twice.
:::

## HTTPS and the cost of a first visit {lvl=3 id=s-https label="SDE-2"}

Plain HTTP travels as readable text through every router and Wi-Fi hotspot on the way. **HTTPS** wraps it in **TLS**, which does two jobs: it **encrypts** the traffic, and it **authenticates** the server with a **certificate** signed by an authority your browser trusts, so you know `bank.com` is really the bank. (How keys and signatures work is the topic of the cryptography lessons.)

The security is not free in time. Counting round trips for a first visit to an HTTPS site, with one RTT of 100 ms:

| Step | Round trips | Running total |
|---|---|---|
| DNS lookup (cold) | about 1 | 100 ms |
| TCP handshake | 1 | 200 ms |
| TLS 1.3 handshake | 1 | 300 ms |
| HTTP request and first byte | 1 | 400 ms |

Older TLS 1.2 needs two round trips instead of one. Warm caches, reused connections and nearby servers all remove steps, which is why the order of the day is "avoid round trips".

**HTTP/1.1** sends one request at a time per connection, so browsers open about six parallel connections and still queue a page of 60 files in waves. **HTTP/2** sends many requests at once over one connection, **multiplexing** them as interleaved streams, and compresses the repeated headers. But over TCP, one lost packet still stalls every stream behind it. **HTTP/3** moves to **QUIC**, built on UDP with TLS included: setup takes one round trip (zero when resuming a known server), and a loss stalls only its own stream.

:::figure caption="Loading three files. HTTP/1.1 waits for each reply; HTTP/2 and HTTP/3 send all three requests at once on one connection."
<svg viewBox="0 0 360 150" role="img" aria-label="Three requests one after another versus three together">
<g style="font-size:10px">
<text x="8" y="22" style="fill:var(--ink)">one at a time</text>
<g style="fill:color-mix(in srgb,var(--c) 20%,var(--surface));stroke:var(--c);stroke-width:1.3"><rect x="100" y="10" width="60" height="16"/><rect x="164" y="10" width="60" height="16"/><rect x="228" y="10" width="60" height="16"/></g>
<text x="108" y="22" style="fill:var(--ink)">file 1</text><text x="172" y="22" style="fill:var(--ink)">file 2</text><text x="236" y="22" style="fill:var(--ink)">file 3</text>
<text x="8" y="92" style="fill:var(--ink)">all at once</text>
<g style="fill:color-mix(in srgb,var(--c) 20%,var(--surface));stroke:var(--c);stroke-width:1.3"><rect x="100" y="64" width="60" height="16"/><rect x="100" y="84" width="60" height="16"/><rect x="100" y="104" width="60" height="16"/></g>
<text x="108" y="76" style="fill:var(--ink)">file 1</text><text x="108" y="96" style="fill:var(--ink)">file 2</text><text x="108" y="116" style="fill:var(--ink)">file 3</text>
<path d="M100 140 L290 140" style="stroke:var(--muted);fill:none"/><text x="296" y="143" style="fill:var(--muted)">time</text>
</g>
</svg>
:::

:::qc lvl=3
q: A fresh HTTPS visit with TLS 1.3 and a cold DNS cache costs how many round trips before the first byte of the page arrives (counting DNS as one)?
options: ["2", "4", "7"]
answer: 1
right: Right. DNS (1) + TCP (1) + TLS 1.3 (1) + the request (1) = 4. HTTP/3 can reduce this by combining transport and security setup.
wrong: Add them: name lookup, TCP handshake, TLS handshake, then the request and the answer.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. DNS is a hierarchical, cached directory that turns a name into an IP address. {lvl=1}
2. HTTP is plain text: a request (method, path, headers) and a response (status code, headers, body). {lvl=1}
3. A lookup asks resolver, root, TLD, authoritative server; caches keep answers for the TTL. {lvl=2}
4. 2xx works, 3xx redirects or reuses, 4xx is the client's fault, 5xx is the server's. {lvl=2}
5. GET, PUT and DELETE are safe to repeat; POST is not, so retries need an idempotency key. {lvl=2}
6. HTTPS adds encryption and identity at the cost of a round trip; HTTP/2 multiplexes, HTTP/3 uses QUIC to avoid stalls. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- DNS changes are not instant: old answers live in caches until the TTL runs out, so lower the TTL before a move. {lvl=2}
- Do not put secrets in a URL: URLs are logged by servers and browsers. Use headers or the body, over HTTPS. {lvl=2}
- Do not use GET for actions that change data: crawlers and prefetchers will trigger them. {lvl=2}
- Return the right status code: a 200 with an error message inside breaks caches, monitors and clients. {lvl=2}
- Debug with the browser's Network tab and `curl -v` (shell); check the DNS answer before blaming the server. {lvl=2}
:::
