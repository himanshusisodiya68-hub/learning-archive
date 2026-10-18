---
title: Passwords, sessions and OAuth
summary: How a website knows it is you, remembers you between clicks, and lets you in with Google, without ever holding your password.
ncert: []
up_to: SDE-2
builds_on: [Hashing, encryption and signatures, Hash tables]
notes_prompt: Explain to a friend how a website can check your password without actually storing it, and why "login with Google" never shows your password to the other site.
margin:
  - kind: history
    title: History
    text: 'Passwords on shared computers go back to the early 1960s. Early systems stored them in plain text in a file, and one of the first known leaks was exactly that file. [Unverified: from memory]'
  - kind: tip
    title: Interview favourite
    text: '"How would you store passwords?" The expected answer has four parts: never plain text, use a slow salted hash (bcrypt, scrypt or Argon2), compare in constant time, and add a second factor.'
  - kind: olympiad
    title: Counting link
    text: 'An 8-letter lowercase password has 26^8, about 2×10^11, possibilities. A fast hash lets an attacker try them all in seconds; a deliberately slow hash turns seconds into years.'
books:
  - { title: "R. Anderson, Security Engineering", ref: "Chapters on passwords and on access control [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 12 on trust and data systems [Unverified]" }
  - { title: "OAuth 2.0 and OpenID Connect specifications (IETF, OpenID Foundation)", ref: "Authorization code flow, as a reference only" }
cards:
  - { front: "How should a site store passwords?", back: "As a slow, salted hash (bcrypt, scrypt or Argon2). Never plain text, never a fast hash. At login, hash the attempt with the same salt and compare." }
  - { front: "What does a salt do?", back: "A random value stored beside each hash and mixed into it. Two users with the same password get different hashes, and precomputed tables become useless." }
  - { front: "Session vs token login?", back: "Session: server keeps a record, the cookie holds a random id; easy to revoke. Token (JWT): a signed claim the client carries; no lookup, but hard to revoke before it expires." }
  - { front: "Can anyone read the contents of a JWT?", back: "Yes. A normal JWT is signed, not encrypted. The signature stops changes, not reading. Never put secrets in it." }
  - { front: "In OAuth, what does the app receive after you click Allow?", back: "A short-lived code, which it swaps for an access token. It never sees your Google password." }
  - { front: "How does a TOTP code in an authenticator app work?", back: "App and server share a secret once. Each computes a keyed hash of the current 30-second time slot and shows 6 digits, so both agree without talking." }
core:
  idea: 'Authentication proves who you are using something you know, have or are. Sites store only a slow, salted hash of your password, then remember you with a session cookie or a signed token. OAuth lets another site vouch for you without sharing your password.'
  formulas:
    - tex: '\text{stored} = \text{slowHash}(\text{salt} + \text{password})'
      label: 'What the database keeps instead of the password'
    - tex: '\text{code} = \text{trunc}\big(\text{HMAC}(K,\ \lfloor t/30 \rfloor)\big) \bmod 10^6'
      label: 'A time-based one-time code (TOTP)'
  conditions:
    - 'The channel is encrypted (TLS), or passwords and cookies can be copied in transit'
    - 'Passwords are salted and hashed with an algorithm designed to be slow'
    - 'Session ids and tokens are long, random and kept out of reach of page scripts and other sites'
    - 'Each secret (password, token, OTP seed) is used only for what it was issued for'
  sign: 'The commonest mistake is storing a password hash made with a fast function such as plain SHA-256 and no salt: the whole database falls to guessing within hours.'
outcomes:
  - 'Name the three kinds of proof of identity and give an example of each'
  - 'Explain why a site stores a salted slow hash instead of your password, and how login still works'
  - 'Compare sessions with cookies against tokens such as JWT, including logout and revocation'
  - 'Walk through the "login with Google" flow and say what the app does and does not receive'
  - 'Describe how a one-time code and a UPI PIN add a second kind of proof'
opener:
  story: |
    A site you use gets hacked, and its whole user table is dumped on the internet. The company's email says: "Do not worry, your password was not exposed." Yet every time you log in, it clearly checks whether your password is right.

    That sounds like a magic trick. To check something you must know it, and if the company knew it, the hackers would know it too. And what about the next click? You typed your password once this morning, yet you tap through a dozen pages and the site still knows it is you.

    How can a computer verify a password it does not keep, and remember you without asking again?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A login form on the left, a database of scrambled hashes on the right, and a cookie ticket in between"><rect x="14" y="40" width="110" height="140" rx="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="26" y="64" style="font-size:11px;fill:var(--ink)">Log in</text><rect x="26" y="74" width="86" height="20" rx="4" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="32" y="88" style="font-size:10px;fill:var(--muted)">himanshu</text><rect x="26" y="102" width="86" height="20" rx="4" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="32" y="116" style="font-size:12px;fill:var(--ink)">••••••••</text><rect x="26" y="136" width="86" height="22" rx="11" style="fill:var(--c)"/><path d="M126 110 L184 110" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 4"/><rect x="190" y="40" width="116" height="140" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="200" y="60" style="font-size:10px;fill:var(--muted)">users table</text><text x="200" y="82" style="font-size:9px;fill:var(--ink)">himanshu  $2b$12$q9Kx…</text><text x="200" y="100" style="font-size:9px;fill:var(--ink)">asha      $2b$12$7Tz1…</text><text x="200" y="118" style="font-size:9px;fill:var(--ink)">ravi      $2b$12$Lm0e…</text><text x="200" y="146" style="font-size:10px;fill:var(--bad)">no password anywhere</text><rect x="120" y="196" width="80" height="28" rx="6" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"/><text x="128" y="214" style="font-size:10px;fill:var(--ink)">cookie: id=a8f3…</text></svg>'
life:
  - 'Every login box you have used: Gmail, Instagram, your college portal, your bank.'
  - 'Staying logged in to YouTube for months is a session or token living in your browser.'
  - '"Continue with Google" or "Sign in with Apple" on a food-delivery or shopping app is OAuth at work.'
  - 'The six-digit code from Google Authenticator or an SMS after your password is a second factor.'
  - 'Entering your UPI PIN to approve a payment is a "something you know" check that the merchant never sees.'
models:
  - name: 'Prove it without handing it over'
    text: 'You can show you hold a secret without giving it away: a bouncer checks your age without keeping your birth certificate. Look for ways to verify while holding the least possible.'
  - name: 'The valet key'
    text: 'A valet key starts the car but does not open the boot or glovebox. Give others narrowly limited, expiring access instead of your master key. The same thinking applies to a spare house key, a power of attorney or a staff pass.'
  - name: 'Stateless trades lookup for control'
    text: 'A sealed ticket needs no central register to check, but you cannot cancel it once handed out. A numbered register lets you cancel any ticket but must be consulted every time. Many designs choose between these two.'
links:
  - leaf: 'cs/cryptography-basics'
    name: 'Hashing, encryption and signatures'
    same: 'Password storage uses hashing, tokens use signatures, OTPs use keyed hashes, and every step travels over TLS.'
    differs: 'Cryptography answers "can this message be trusted?"; authentication adds "which person or device is behind it, and for how long?"'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both turn a value into a fixed-size number with a one-way-looking function.'
    differs: 'A table hash is fast so lookups are fast; a password hash is slow on purpose so guessing is slow.'
  - leaf: 'mat/classical-probability'
    name: 'Classical probability'
    same: 'Guessing resistance is counting: the number of possible passwords, PINs or codes decides the odds of a lucky guess.'
    differs: 'People do not pick uniformly at random, so real guessing odds are far better for attackers than the pure count.'
next:
  q: 'Now the site knows who you are. But an attacker does not need to steal your password if they can trick your browser into sending your session cookie to the wrong place, or slip a command into a form. What are the classic ways in, and how do we shut each door?'
  leaf: 'cs/web-security'
  name: 'Common attacks and defences'
symbols:
  - s: 'salt'
    means: 'a random value stored beside each password hash, so equal passwords give different hashes'
  - s: 'K'
    means: 'a secret key shared between app and server (bytes)'
  - s: '\text{HMAC}'
    means: 'a keyed hash: a fingerprint that only someone holding the key can make'
  - s: 't'
    means: 'the current time in seconds since 1 January 1970'
  - s: '\lfloor \cdot \rfloor'
    means: 'round down, so t / 30 becomes the number of the current 30-second slot'
  - s: '\bmod\ 10^6'
    means: 'keep the last six digits, giving a code from 000000 to 999999'
---

:::hook
q: The company really does verify your password at every login. What do you think its database holds for your account?
options: ["Your password, encrypted with a company key", "A scrambled one-way fingerprint plus a random salt", "A hint that lets staff recover it if you forget"]
answer: 1
right: Right. A well-built site keeps only a slow, salted fingerprint. At login it fingerprints what you typed the same way and compares. If the database leaks, the attacker must guess one password at a time, slowly. (Real breaches show many sites do worse; this is the correct design.)
wrong: If the company can get your password back, so can anyone who steals the key or the database. Good sites cannot read your password at all. What one-way tool did the previous lesson introduce?
:::

## Three ways to prove who you are {lvl=1 id=s-factors label="Foundations"}

**Authentication** means proving you are who you claim. There are only three kinds of evidence, called **factors**:

| Factor | Meaning | Example |
|---|---|---|
| **Know** | a secret in your head | password, PIN |
| **Have** | an object only you hold | phone, SIM, bank card, security key |
| **Are** | a body feature | fingerprint, face |

Each kind alone can fail. A secret can be guessed or stolen, a phone can be lost, a fingerprint cannot be changed once copied. Two different kinds together, such as a PIN and your phone, are far harder to beat. That is **two-factor authentication** (2FA). Note that "authentication" asks *who are you?*; the separate question *what are you allowed to do?* is **authorisation**, and the next lesson shows how often they get confused.

:::qc lvl=1
q: A site asks for your password and then a code from an app on your phone. How many factors is that?
options: ["One, both are secrets", "Two: something you know and something you have", "Three"]
answer: 1
right: Right. The password is what you know; the app on your phone is what you have. Two different kinds, so two factors.
wrong: A code that only your phone can produce is not a thing in your head. Which two of the three kinds are present?
:::

## Storing passwords: salt and slow {lvl=2 id=s-store label="SDE-1"}

Plain storage is a disaster: one leak exposes everybody, and many people reuse passwords elsewhere. So we store a **hash** (the one-way fingerprint from the last lesson). At login we hash what you typed and compare. Two problems remain.

**Problem 1: same password, same hash.** If a million users hold the password `iloveyou`, an attacker can hash a list of common passwords once, and match the whole table at a stroke. The cure is a **salt**: a random value, different for every user, stored next to the hash and mixed in before hashing. Now `iloveyou` produces a different fingerprint for every user, so the attacker must grind through guesses user by user.

**Problem 2: fast hashes help attackers.** SHA-256 is built to be fast; a graphics card can try billions of guesses a second. So password schemes (**bcrypt, scrypt, Argon2**) are built to be slow and memory-hungry, with a dial for how slow. A login that takes 0.1 second is unnoticeable to you but makes mass guessing painful.

| Scheme | Guesses/second (rough, one attacker) | Time to try all 8-letter lowercase passwords |
|---|---|---|
| Plain SHA-256 | $10^{10}$ | about 21 seconds |
| Slow hash | $10^3$ | about 6.6 years |

(There are $26^8 \approx 2 \times 10^{11}$ such passwords. The speeds are illustrative [Inference].)

```python
import hashlib, os, hmac
def make(pw):
    salt = os.urandom(16)
    return salt, hashlib.scrypt(pw.encode(), salt=salt, n=2**14, r=8, p=1)
def check(pw, salt, stored):
    new = hashlib.scrypt(pw.encode(), salt=salt, n=2**14, r=8, p=1)
    return hmac.compare_digest(new, stored)   # constant-time compare
```

:::qc lvl=2
q: What does adding a unique salt to each password hash defeat?
options: ["Precomputed tables, and attacking all users at once", "The need to use TLS", "Weak passwords themselves"]
answer: 0
right: Right. With a unique salt every account must be attacked separately. It does not rescue a very weak password, but it removes the shortcut of cracking many accounts with one effort.
wrong: Salt changes the stored fingerprint, not how guessable the password is. What shortcut does it remove for an attacker with a million stolen hashes?
:::

## Staying logged in: sessions {lvl=2 id=s-session label="SDE-1"}

HTTP has no memory: each request arrives as a stranger. After a successful login, the server creates a **session**: it makes a long random **session id**, saves "id a8f3… means user 42" in its own table, and sends the id back in a **cookie**, a small note the browser attaches to every later request to that site. The server looks the id up and knows who you are. Logging out deletes the table entry.

:::figure caption="The cookie is like a cloakroom ticket: the number means nothing alone, but the server has the coat it matches."
<svg viewBox="0 0 320 170" role="img" aria-label="Browser logs in, server stores a session and returns a cookie, browser sends the cookie on the next request">
<g style="stroke:var(--ink);stroke-width:1.5"><path d="M50 18 L50 160"/><path d="M270 18 L270 160"/></g>
<g style="font-size:11px;fill:var(--ink)"><text x="22" y="12">Browser</text><text x="242" y="12">Server</text></g>
<g style="fill:none;stroke:var(--c);stroke-width:1.6"><path d="M52 40 L266 46"/><path d="M268 80 L54 86"/><path d="M52 124 L266 130"/></g>
<g style="font-size:9.5px;fill:var(--muted)">
<text x="76" y="34">1 username + password (over TLS)</text>
<text x="62" y="70">2 checks hash; stores id→user 42; sets cookie</text>
<text x="66" y="118">3 any page + cookie id=a8f3… → "user 42"</text>
</g>
</svg>
:::

The id is a bearer ticket: whoever holds it **is** you. So it must be long and random (guessing must be impossible), travel only over TLS, and be marked `HttpOnly` (page scripts cannot read it) and `Secure`. The next lesson shows why these flags matter.

## Tokens and JWT {lvl=3 id=s-token label="SDE-2"}

With many servers behind a load balancer, each must look up the session table, which becomes a shared bottleneck. A **token** avoids the lookup. After login the server hands you a small signed note, for example "user 42, valid until 18:00", signed with its secret key. A **JWT** (JSON Web Token) is the common format: a header, a payload of claims, and a signature. Any server holding the key checks the signature and trusts the note with no database visit.

Two surprises:

- **A JWT is signed, not hidden.** Anyone can read the payload; the signature only stops changes. Put nothing secret in it.
- **You cannot easily take one back.** The ticket is valid until it expires, even after logout or a stolen phone. The usual compromise is a **short-lived access token** (minutes) plus a longer-lived **refresh token** that the server can revoke.

| | Server session | Signed token (JWT) |
|---|---|---|
| Server remembers | each session | nothing |
| Logout / revoke | delete the row | wait for expiry, or keep a deny-list |
| Scaling | shared store needed | any server can check |
| Typical risk | stolen cookie | stolen token, long expiry, wrong checks |

Check the algorithm and expiry yourself, and fix the allowed algorithm on the server: some libraries once accepted tokens that claimed "no signature needed". [Unverified: historical library bugs from memory]

:::qc lvl=3
q: A user clicks "Log out of all devices" after losing a phone. Which design handles this most directly?
options: ["Server-side sessions: delete that user's rows", "Long-lived JWTs: nothing needs doing", "Hash the token again"]
answer: 0
right: Right. With a session table you simply delete the entries. With pure long-lived tokens the server has no list to delete from, so you need short expiries or a deny-list.
wrong: A signed ticket with no register cannot be cancelled by the issuer. Which design keeps a register the server can edit?
:::

## "Login with Google": OAuth {lvl=3 id=s-oauth label="SDE-2"}

You tap **Continue with Google** on a shopping app. The app never sees your Google password, yet it learns who you are. This is **OAuth** (with **OpenID Connect** on top for the identity part). Think of the valet key: you give the app a narrow, expiring pass rather than your master key.

:::figure caption="The authorisation-code flow, simplified. Your password goes only to Google."
<svg viewBox="0 0 320 190" role="img" aria-label="Sequence between browser, app and Google: redirect, login and consent, code returned, code swapped for a token">
<g style="stroke:var(--ink);stroke-width:1.5"><path d="M40 20 L40 180"/><path d="M160 20 L160 180"/><path d="M280 20 L280 180"/></g>
<g style="font-size:11px;fill:var(--ink)"><text x="14" y="14">You</text><text x="136" y="14">App</text><text x="250" y="14">Google</text></g>
<g style="fill:none;stroke:var(--c);stroke-width:1.5"><path d="M42 40 L156 44"/><path d="M42 70 L276 76"/><path d="M278 102 L44 108"/><path d="M42 132 L156 136"/><path d="M158 160 L278 164"/></g>
<g style="font-size:9px;fill:var(--muted)">
<text x="48" y="36">1 tap Continue with Google</text>
<text x="96" y="66">2 redirect: log in, tap Allow</text>
<text x="100" y="98">3 sends you back with a one-time code</text>
<text x="48" y="128">4 you hand the code to the app</text>
<text x="168" y="156">5 app swaps code for a token</text>
</g>
</svg>
:::

The one-time **code** in step 3 travels through your browser; the **token** in step 5 goes server to server, together with a secret only the app knows. That is why a snooper who sees the redirect cannot use the code alone. The app asks for narrow **scopes** ("see my name and email" and no more), and you can revoke access later in your Google settings.

:::qc lvl=3
q: After "Continue with Google", what does the shopping app receive?
options: ["Your Google password, hashed", "A token for the narrow scopes you approved", "Full control of your Google account"]
answer: 1
right: Right. A limited, expiring token. Your password never leaves Google's own page.
wrong: The whole point is that the app never holds your master key. What does it hold instead?
:::

## One-time codes and the UPI PIN {lvl=3 id=s-otp label="SDE-2"}

**TOTP** codes (Google Authenticator and similar) work without any network. When you scan the QR code, the app and the server share a secret key once. After that, each independently computes a keyed hash of the current **30-second slot** and keeps six digits. The same inputs give the same code, so they agree. The code goes stale in 30 seconds, so a stolen one is nearly useless.

```python
import hmac, struct, time, base64
def totp(secret_b32, step=30, now=None):
    key = base64.b32decode(secret_b32)
    slot = int((now or time.time()) // step)
    mac = hmac.new(key, struct.pack(">Q", slot), "sha1").digest()
    o = mac[-1] & 15
    num = struct.unpack(">I", mac[o:o+4])[0] & 0x7fffffff
    return f"{num % 10**6:06d}"
```

SMS codes are weaker: someone who moves your number to their SIM (a **SIM swap**) receives them. **Passkeys** go further: the phone signs a challenge with a private key and nothing reusable crosses the network, so there is nothing to phish.

**UPI intuition.** Paying with UPI feels like magic, but the layers are the ones above. Your app is bound to your phone and SIM (a "have"), and each payment needs your PIN (a "know"), so it is two factors. The PIN is entered into a secure screen and sent encrypted towards your bank, not to the shop; the merchant sees only the success message. [Inference: details of NPCI's and banks' internals are not public in full; this is the general design pattern.] A **PIN is short**, only a million possibilities for six digits, so its safety comes from limits (a few wrong tries and the account locks), not from secrecy of the algorithm.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Identity is proved by something you know, have or are; combining two kinds is much stronger. {lvl=1}
2. Store only a slow, salted hash of a password; check by hashing the attempt the same way. {lvl=2}
3. Salt kills shared tables; slowness makes each guess expensive. {lvl=2}
4. A session is a server-side record plus a random cookie id; logout and revoke are easy. {lvl=2}
5. A JWT is a signed, readable token: no lookup needed, but hard to cancel before it expires. {lvl=3}
6. OAuth hands an app a narrow, expiring token so it never sees your password. {lvl=3}
7. TOTP combines a shared secret with the clock; short PINs rely on lockout limits. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never store passwords in plain text, with reversible encryption, or with a fast hash. {lvl=1}
- Never write your own password scheme; use bcrypt, scrypt or Argon2 from a library. {lvl=2}
- A session id or token is a bearer ticket: if it leaks, so does your identity. Keep it in `HttpOnly`, `Secure` cookies and send it only over TLS. {lvl=2}
- A JWT payload is readable by anyone; do not store secrets in it, and always verify signature, expiry and algorithm. {lvl=3}
- Rate-limit logins and lock after repeated failures; attackers replay passwords leaked from other sites (**credential stuffing**). {lvl=3}
- In interviews, separate **authentication** (who) from **authorisation** (what you may do), and say where each is checked. {lvl=2}
:::
