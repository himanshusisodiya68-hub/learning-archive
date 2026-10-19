---
title: Common attacks and defences
summary: How typing the wrong kind of text into a box can take over a website, and the few habits that stop it.
ncert: []
up_to: SDE-3
builds_on: [Passwords, sessions and OAuth, Hashing, encryption and signatures]
notes_prompt: Explain to a friend why a website that mixes your typed words into its own commands can be tricked, and name one habit that fixes it.
margin:
  - kind: history
    title: History
    text: 'SQL injection was publicly described in the late 1990s and, decades later, still appears in breach reports. The OWASP project publishes a regularly updated "Top 10" list of web risks. [Unverified: dates and list contents from memory]'
  - kind: tip
    title: Interview favourite
    text: '"What is the difference between XSS and CSRF?" XSS runs the attacker''s code inside your site. CSRF makes the victim''s browser send a request the victim never meant to send. Different problems, different defences.'
  - kind: olympiad
    title: Counting link
    text: 'A defence that relies on a guessable value is only as strong as the count of possibilities. A 32-bit anti-forgery token has about 4.3 billion values, which sounds big until an attacker can make a thousand guesses a second.'
books:
  - { title: "OWASP Top 10 and the OWASP Cheat Sheet Series", ref: "Injection, cross-site scripting, broken access control and CSRF pages (online reference)" }
  - { title: "D. Stuttard and M. Pinto, The Web Application Hacker's Handbook", ref: "Chapters on injection, XSS, CSRF and access controls [Unverified]" }
  - { title: "R. Anderson, Security Engineering", ref: "Chapters on defence in depth and on access control [Unverified]" }
cards:
  - { front: "What is the root cause of injection attacks?", back: "Untrusted input is mixed into text that is later read as instructions (SQL, shell, HTML). Fix: keep data and instructions apart, for example with parameterised queries." }
  - { front: "How does a parameterised query stop SQL injection?", back: "The query shape is sent first with placeholders, and the values arrive separately. The database never treats a value as part of the command." }
  - { front: "What is XSS and the main defence?", back: "Cross-site scripting: attacker-supplied text runs as script in other users' browsers. Defence: escape output for where it lands, add a Content Security Policy, mark session cookies HttpOnly." }
  - { front: "What is an origin, and what does the same-origin policy do?", back: "Origin = scheme + host + port. The browser stops a page from one origin reading data from another origin. It does not stop the request being sent." }
  - { front: "How does CSRF work and how do you stop it?", back: "A malicious page makes the victim's browser send a request that carries the victim's cookies. Stop it with SameSite cookies, anti-forgery tokens and Origin checks." }
  - { front: "What is broken access control?", back: "A user can do or see something they should not (change an id in the address and read someone else's record). Check authorisation on the server for every request, deny by default." }
core:
  idea: 'Most web attacks make a site treat data as instructions, or treat a request as intended when it was not. Keep data apart from commands, check who may do what on the server every time, use the browser''s origin rules, and stack several defences so one failure is not fatal.'
  formulas:
    - tex: '\text{origin} = (\text{scheme},\ \text{host},\ \text{port})'
      label: 'Two pages are the same origin only if all three match'
    - tex: 'P(\text{lucky guess}) = \dfrac{\text{guesses}}{2^{b}}'
      label: 'Guess odds against a random b-bit secret (token, id, key)'
  conditions:
    - 'Every input is untrusted until proven otherwise: forms, URLs, headers, cookies, uploaded files'
    - 'Checks run on the server; the browser can be modified by the user'
    - 'Secrets and tokens are long and random, never guessable or sequential'
    - 'Layered defences: no single control is trusted to hold alone'
  sign: 'The commonest mistake is hiding a button or a link and assuming that stops access. The server must refuse the request itself.'
outcomes:
  - 'Explain the common root cause of injection and XSS: data treated as instructions'
  - 'Fix a SQL injection with a parameterised query and describe escaping for XSS'
  - 'Decide whether two URLs share an origin and say what the policy does and does not block'
  - 'Describe CSRF and choose defences; spot a broken access control (IDOR) bug'
  - 'Lay out a defence-in-depth checklist for a small web service'
opener:
  story: |
    A cartoon once showed a mother naming her son "Robert'); DROP TABLE Students;--" and a school computer losing its entire student list. It sounds like a joke, but it is a real kind of attack. Somewhere, a program built a command by gluing together its own words and the name a stranger typed.

    Think about what that means. A search box, a login form, a comment field: they all let strangers type. If the website treats what they typed as part of its own commands, a stranger can steer the website. Not by breaking cryptography, but just by typing carefully.

    How can a few typed characters take over a database, and what single habit shuts this door for good?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A form where typed text slips into a command and reaches a database, with a shield that keeps data and command apart"><rect x="14" y="30" width="110" height="70" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="24" y="52" style="font-size:10px;fill:var(--muted)">Search</text><rect x="24" y="60" width="90" height="22" rx="4" style="fill:none;stroke:var(--bad);stroke-width:1.5"/><text x="28" y="75" style="font-size:9px;fill:var(--bad)">x'' OR 1=1 --</text><path d="M126 66 L176 66" style="fill:none;stroke:var(--bad);stroke-width:2;stroke-dasharray:5 4"/><rect x="180" y="30" width="126" height="70" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="188" y="52" style="font-size:9px;fill:var(--ink)">SELECT * FROM users</text><text x="188" y="66" style="font-size:9px;fill:var(--ink)">WHERE name = ''x'' OR 1=1</text><text x="188" y="80" style="font-size:9px;fill:var(--bad)">→ returns everyone</text><path d="M243 100 L243 138" style="fill:none;stroke:var(--ink);stroke-width:2"/><rect x="190" y="140" width="106" height="60" rx="6" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="208" y="176" style="font-size:11px;fill:var(--ink)">database</text><path d="M60 140 L60 196 Q60 214 40 218 Q20 214 20 196 L20 140 Q40 150 60 140 Z" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="72" y="164" style="font-size:10px;fill:var(--c)">keep data and</text><text x="72" y="178" style="font-size:10px;fill:var(--c)">commands apart</text></svg>'
life:
  - 'Any login box, search bar or comment section on the internet is a doorway where strangers type text into someone''s program.'
  - 'Data-breach news (leaked emails, passwords, ID numbers) usually traces back to injection, broken access checks or stolen sessions rather than broken encryption.'
  - 'A message that says "click to claim your refund" can quietly send a request to your bank in a tab where you are already logged in: that is CSRF.'
  - 'Changing the number in a web address from invoice 1042 to 1043 and seeing a stranger''s bill is the textbook broken access control bug.'
  - 'Your browser''s padlock, cookie settings and "this site wants to access..." prompts are defences you meet daily.'
models:
  - name: 'Keep the question apart from the answer'
    text: 'A form letter with blanks is safe because the blanks cannot rewrite the letter. Keeping the template fixed and filling in the values is a pattern for contracts, forms and code alike. Trouble starts when the filled-in part can change the template.'
  - name: 'Never trust the client'
    text: 'Everything that arrives from outside might be forged. A cheque is verified by the bank, not by the person presenting it. Put the checks where the attacker cannot reach them.'
  - name: 'Swiss cheese'
    text: 'Every layer of defence has holes. Several layers with holes in different places stop almost everything, the way aviation, hospitals and fire safety are designed. Never rely on a single guard.'
links:
  - leaf: 'cs/authentication'
    name: 'Passwords, sessions and OAuth'
    same: 'A stolen session cookie is a stolen identity, and XSS and CSRF are the two main ways a session gets abused without anyone cracking a password.'
    differs: 'Authentication asks who you are; web security asks what an attacker can make the site or browser do once you are known.'
  - leaf: 'cs/cryptography-basics'
    name: 'Hashing, encryption and signatures'
    same: 'Anti-forgery tokens are random secrets; TLS protects the request in flight; both rely on unguessable values.'
    differs: 'Encryption protects data while it travels; it does nothing if the site itself is tricked into sending data to an attacker.'
  - leaf: 'mat/classical-probability'
    name: 'Classical probability'
    same: 'How hard a token is to guess is a counting question: guesses divided by possible values.'
    differs: 'An attacker can make guesses in bulk and in parallel, so the count has to be large enough for the attacker''s speed, not a human''s.'
next:
  q: 'Every defence here relies on databases: parameterised queries, access checks on each row, unique ids. But what exactly is a database table, and what language do all these queries speak?'
  leaf: 'cs/relational-model-and-sql'
  name: 'Relational model and SQL'
symbols:
  - s: 'origin'
    means: 'the triple of scheme (http or https), host name and port that identifies where a page came from'
  - s: 'b'
    means: 'number of random bits in a secret (bits)'
  - s: '2^{b}'
    means: 'number of different values a b-bit secret can take'
  - s: 'P'
    means: 'probability that an attacker guesses the secret (a number from 0 to 1)'
---

:::hook
q: A site's search box builds its database command by gluing the user's typed text into a sentence of its own. A stranger types a few clever characters. What is the worst that can happen?
options: ["Nothing, the box only searches", "They can change the meaning of the command, and read or even delete data", "Only their own screen is affected"]
answer: 1
right: Right. If typed text is pasted into the command, the stranger can end the site's sentence and start one of their own. The fix is not to filter harder but to never paste input into commands at all.
wrong: The box is a doorway into a command, not just a search. If the typed text is treated as part of the command, who is really writing it?
:::

## One root cause, many attacks {lvl=1 id=s-root label="Foundations"}

Most web attacks come down to two confusions: **data treated as instructions**, and **a request treated as meant when it was not**. The industry keeps a regularly updated list of the biggest risks, the OWASP Top 10. [Unverified: category names and order change between editions.] Four of its recurring items are the heart of this lesson.

| Attack | The confusion | The one-line fix |
|---|---|---|
| **Injection** (SQL, shell) | Typed text becomes part of a command | Parameterised queries; never build commands from text |
| **XSS** (cross-site scripting) | Typed text becomes script in other users' browsers | Escape output; Content Security Policy |
| **CSRF** (cross-site request forgery) | A forged request rides on the victim's login | SameSite cookies; anti-forgery token |
| **Broken access control** | A user reaches what they should not | Check permission on the server, every request |

The whole lesson is about learning to see these patterns. Notice that none of them breaks any encryption. They all trick a correct program into doing something it should not.

:::qc lvl=1
q: A site uses perfect encryption (TLS) everywhere, and still gets hacked through its search box. Is that possible?
options: ["No, encryption blocks all attacks", "Yes, encryption protects data in transit, not the site's own logic", "Only if the hacker has a very fast computer"]
answer: 1
right: Right. TLS stops eavesdroppers on the wire. A flaw in the site's own code, such as pasting input into commands, works even over a perfectly encrypted link.
wrong: Encryption protects the road, not what the destination does with a parcel. Which of the two is the search-box problem?
:::

## Injection {lvl=2 id=s-inject label="SDE-1"}

Imagine a login that builds its database command like this. The command is a sentence in **SQL**, the language databases speak (a later lesson covers it).

```python
name = request.form["name"]
q = "SELECT * FROM users WHERE name = '" + name + "'"   # BAD
db.execute(q)
```

If you type `asha` the command is `... WHERE name = 'asha'`. If a stranger types `x' OR '1'='1`, the command becomes `... WHERE name = 'x' OR '1'='1'`, and since `'1'='1'` is always true it returns **every user**. The apostrophe let the typed text escape from being data and become part of the instructions. Worse versions can read other tables or delete data.

The fix is the **parameterised query**: send the command with a blank, and send the value separately. The database receives the shape first, so no value can ever change it.

```python
q = "SELECT * FROM users WHERE name = ?"      # shape with a blank
db.execute(q, (name,))                        # value travels apart
```

Now `x' OR '1'='1` is just a strange username that matches nobody. The same lesson applies to **shell commands** (do not build a command line from text; pass arguments as a list) and to any "template" mixed with untrusted text. Filtering out apostrophes is the wrong fix: attackers find other tricks. Separation is the right one.

:::qc lvl=2
q: Which change actually removes the SQL injection hole?
options: ["Delete the apostrophes from the typed text", "Use a parameterised query with a placeholder", "Make the box accept only 20 characters"]
answer: 1
right: Right. A placeholder keeps the value out of the command altogether. Removing characters or limiting length are patches that attackers walk around.
wrong: Cleaning the text tries to out-guess every trick. What approach makes tricks irrelevant, because the value is never part of the command?
:::

## XSS: your text, someone else's browser {lvl=2 id=s-xss label="SDE-1"}

A **comment section** shows what users wrote. Suppose the site pastes a comment into the page exactly as typed. A stranger posts a comment containing a script tag, like `<script>` followed by a few lines of code. Every visitor's browser, seeing that in the page, **runs it as if the site had written it**. That is **cross-site scripting (XSS)**. The script runs with the site's full powers: it can read what the page shows, act as the logged-in user, or send data to the attacker's server.

The fix mirrors injection: treat the comment as **text**, not as page code. **Escape** it, turning `<` into `&lt;` so the browser draws the character instead of obeying it.

```python
from html import escape
comment = "<script>steal()</script>"
safe = escape(comment)         # '&lt;script&gt;steal()&lt;/script&gt;'
page = "<p>" + safe + "</p>"   # shown as harmless text
```

Modern template systems escape by default; the bugs come when a developer turns it off for convenience. Where the text lands matters (inside HTML, inside an attribute, inside a web address), and each place needs the right kind of escaping. Two backup layers help: a **Content Security Policy** (a header that tells the browser which scripts it may run) and marking session cookies `HttpOnly` so scripts cannot read them.

:::qc lvl=2
q: A comment is stored in the database and shown to every visitor. The site does not escape it. What is the main danger?
options: ["Only the commenter is affected", "Script in the comment runs in every visitor's browser", "The database gets deleted"]
answer: 1
right: Right. This is stored XSS, and it is worse than injection into your own screen because it hits everyone who views the page.
wrong: Think about who loads the page after the comment is saved. Whose browser runs the content?
:::

## The same-origin policy {lvl=2 id=s-sop label="SDE-1"}

Your browser holds many open tabs, maybe your bank in one and a random site in another. Why can't the random site read your bank's page? Because of the **same-origin policy**: a page may freely read only data from its own **origin**, which is the triple (scheme, host, port). Compare each address below with `https://shop.in/cart`.

| Address | Same origin? | Why |
|---|---|---|
| `https://shop.in/orders` | Yes | Same scheme, host and port; only the path differs |
| `http://shop.in/cart` | No | Scheme differs (http vs https) |
| `https://api.shop.in/cart` | No | Host differs (a subdomain counts) |
| `https://shop.in:8443/cart` | No | Port differs |

Two things to remember. First, the policy blocks **reading** responses across origins, but it does **not** stop a page from **sending** a request to another origin. That gap is the root of CSRF. Second, sites can deliberately open specific doors using **CORS** headers (`Access-Control-Allow-Origin`). Opening them for everyone (`*`) on an API that uses login cookies can undo the protection. [Inference: exact browser behaviour varies by case and version.]

:::qc lvl=2
q: Does the same-origin policy stop evil.example from making your browser send a request to your bank?
options: ["Yes, it blocks all cross-site requests", "No, it blocks reading the reply, not sending the request", "Only if HTTPS is used"]
answer: 1
right: Right. The request can still go out, carrying your bank cookies. The attacker cannot read the reply, but the action may already have happened.
wrong: The policy is about reading data across origins. Which half of "send" and "read" does it actually block?
:::

## CSRF: a forged request on your login {lvl=3 id=s-csrf label="SDE-2"}

Browsers attach your site's cookies **automatically** to any request to that site, even one started by another page. So suppose you are logged in at your bank and you open a malicious page. That page contains a hidden form pointing at `https://bank.example/transfer`. Your browser sends the request with your bank cookie, and the bank sees what looks like you asking for a transfer. That is **cross-site request forgery (CSRF)**.

:::figure caption="The attacker never sees the reply and never needs your password. The browser adds the cookie, and the bank cannot tell the request was not meant."
<svg viewBox="0 0 320 170" role="img" aria-label="Victim logged in to the bank opens an evil page, which makes the browser send a transfer request with the bank cookie">
<g style="stroke:var(--ink);stroke-width:1.5"><path d="M40 20 L40 160"/><path d="M160 20 L160 160"/><path d="M280 20 L280 160"/></g>
<g style="font-size:11px;fill:var(--ink)"><text x="8" y="14">Evil page</text><text x="118" y="14">Your browser</text><text x="250" y="14">Bank</text></g>
<g style="fill:none;stroke:var(--c);stroke-width:1.6"><path d="M42 52 L156 56"/><path d="M162 100 L276 106"/><path d="M278 136 L164 142" style="stroke:var(--muted);stroke-dasharray:4 4"/></g>
<g style="font-size:9px;fill:var(--muted)">
<text x="100" y="35" text-anchor="middle" style="font-size:9px">1 hidden form:</text><text x="100" y="46" text-anchor="middle" style="font-size:9px">send transfer</text>
<text x="220" y="80" text-anchor="middle" style="font-size:9px">2 POST /transfer</text><text x="220" y="91" text-anchor="middle" style="font-size:9px">+ bank cookie</text>
<text x="170" y="132">3 money moves</text>
</g>
</svg>
:::

Three defences, best used together:

- **SameSite cookies**: tell the browser not to attach the cookie on requests started by other sites. Modern browsers default to a cautious setting for many cases. [Unverified: defaults vary by browser and version.]
- **Anti-forgery token**: put a secret random value in each form and check it on submit. An attacker's page cannot read it (same-origin policy!), so it cannot include it.
- **Check the Origin header** on state-changing requests, and use POST (never GET) for actions that change things.

:::qc lvl=3
q: Why does an anti-forgery token stop CSRF?
options: ["It encrypts the cookie", "The attacker's page cannot read it, so it cannot include a valid one", "It slows down the request"]
answer: 1
right: Right. The token is a secret only the real page can see. A forged request lacks it, so the server rejects it. This is the same-origin policy doing useful work.
wrong: The forged request carries the cookie automatically. What extra piece must the real form carry that the attacker cannot copy?
:::

## Broken access control {lvl=3 id=s-access label="SDE-2"}

The most common serious bug needs no clever input. You open `https://shop.in/invoice/1042` and see your bill. Out of curiosity you change it to `1043`, and see **someone else's**. The site checked that you were logged in (**authentication**) but never checked that invoice 1043 belonged to you (**authorisation**). This is an **insecure direct object reference (IDOR)**, one form of broken access control.

```python
def get_invoice(user, invoice_id):
    inv = db.find_invoice(invoice_id)
    if inv is None or inv.owner_id != user.id:   # check ownership
        abort(404)                               # same reply either way
    return inv
```

Rules that prevent this class of bug: check permission **on the server for every request**, deny by default, scope every query by the logged-in user, and treat hiding a link or a button as decoration, never as protection. Random, unguessable ids make guessing harder, but they are a second layer, not a substitute for the check.

:::qc lvl=3
q: A page shows the "Delete user" button only to admins, but the server's delete endpoint never checks the role. What is the flaw?
options: ["None, normal users cannot see the button", "Anyone who sends the request directly can delete users", "The button should be bigger"]
answer: 1
right: Right. Hiding a button only hides the button. An attacker sends the request without ever loading the page, so the server must check the role itself.
wrong: Attackers do not click buttons; they craft requests. If the server does no check, what stops the crafted request?
:::

## Defence in depth {lvl=4 id=s-depth label="SDE-3"}

No single control is perfect, so serious systems stack **layers**, each covering the holes of the others, the Swiss cheese idea. A design review for a small web service might walk down this list:

| Layer | Example controls | Stops or limits |
|---|---|---|
| Input and commands | Parameterised queries; avoid shells | Injection |
| Output | Auto-escaping templates; Content Security Policy | XSS |
| Session | `HttpOnly`, `Secure`, `SameSite` cookies; anti-forgery tokens | Session theft, CSRF |
| Authorisation | Server-side checks; deny by default; scope queries by user | Broken access control |
| Least privilege | App database user cannot drop tables; narrow API keys | Damage after a bug |
| Secrets | Not in code or logs; rotated; held in a secrets manager | Leaked keys |
| Dependencies | Regular updates; scanning known vulnerabilities | Known holes in libraries |
| Detection | Logs, rate limits and alerts | Slow attacks, stuffing, probing |

Two habits distinguish senior engineers. **Least privilege**: assume a bug will happen, and ask how much damage it can do (an account that can only read one table limits an injection to that table). **Threat modelling**: before building, ask "who might attack this, what do they want, which door would they try first?" and write down the answers; a structured way of doing this is STRIDE. [Unverified: from memory.] Finally, plan for failure: logs that let you see what happened, backups, and a rehearsed way to rotate every key.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Most web attacks make a correct program treat data as instructions or a forged request as genuine. {lvl=1}
2. Injection is fixed by keeping data apart from commands: parameterised queries, not filtering. {lvl=2}
3. XSS is fixed by escaping output for where it lands, backed by a Content Security Policy and `HttpOnly` cookies. {lvl=2}
4. Origin is (scheme, host, port); the same-origin policy blocks reading across origins but not sending. {lvl=2}
5. CSRF rides on automatic cookies; stop it with SameSite, anti-forgery tokens and Origin checks. {lvl=3}
6. Broken access control: authorise every request on the server, deny by default. {lvl=3}
7. Defence in depth: stack layers and limit the damage of any single bug with least privilege. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Filtering or "sanitising" input is not the fix for injection; separating data from commands is. {lvl=2}
- Hiding a button, link or field is not access control; the server must check. {lvl=1}
- XSS defeats most other protections, because the attacker's script runs inside your origin. Treat it as the top priority. {lvl=3}
- Sequential ids (1042, 1043) invite guessing; check ownership regardless, and prefer random ids as an extra layer. {lvl=3}
- Never build shell commands or SQL by concatenating strings; use argument lists and placeholders. {lvl=2}
- In interviews, name the root cause, the fix and a second layer for each attack, and mention least privilege. {lvl=4}
:::
