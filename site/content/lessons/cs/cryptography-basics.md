---
title: Hashing, encryption and signatures
summary: How you and a bank you have never met can whisper a secret across a room full of eavesdroppers.
ncert: []
up_to: SDE-2
builds_on: [Bits and binary, Hash tables, Modular arithmetic]
notes_prompt: Explain to a friend how two strangers can agree on a secret colour while everyone watches, and why that is the heart of the padlock in your browser.
margin:
  - kind: history
    title: History
    text: 'In 1976 Whitfield Diffie and Martin Hellman published the idea of agreeing on a secret in public; Rivest, Shamir and Adleman followed in 1977 with RSA. British intelligence staff are said to have found the same ideas earlier, in secret. [Unverified: dates from memory]'
  - kind: tip
    title: Interview favourite
    text: '"Hashing vs encryption vs signing" is a classic question. One-line answers: a hash cannot be undone, encryption can be undone with a key, a signature proves who wrote it and that it was not changed.'
  - kind: olympiad
    title: Maths link
    text: 'Diffie–Hellman rests on a cliff in arithmetic. Raising a number to a power modulo a prime is quick, but undoing it (the discrete logarithm) is believed to be very slow for big numbers. [Unverified: believed, not proved]'
books:
  - { title: "J. Aumasson, Serious Cryptography", ref: "Hash functions, authenticated encryption, key agreement and TLS chapters [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 12 on end-to-end thinking and trust [Unverified]" }
  - { title: "N. Ferguson, B. Schneier, T. Kohno, Cryptography Engineering", ref: "Why implementation, not maths, is where systems usually break [Unverified]" }
cards:
  - { front: "What are the three jobs cryptography does?", back: "Secrecy (nobody else can read it), integrity (nobody changed it), authenticity (it really came from who it claims)." }
  - { front: "What is a hash, and what is it used for?", back: "A fixed-size fingerprint of any data. Same input gives the same fingerprint, a one-character change gives a totally different one, and you cannot work backwards. Used for integrity checks and password storage." }
  - { front: "Symmetric vs public-key encryption?", back: "Symmetric: one shared secret key locks and unlocks; fast, but you must share the key first. Public-key: a public key locks, a private key unlocks; slower, but solves sharing." }
  - { front: "How does Diffie–Hellman agree on a secret in public?", back: "Each side mixes a private number into a public base and sends the result. Each then mixes their own private number into what they received. Both reach the same value, which an eavesdropper cannot compute." }
  - { front: "How does a digital signature work?", back: "Hash the message, then lock the hash with your private key. Anyone can unlock it with your public key and compare. Only you could have produced it, and any change to the message breaks it." }
  - { front: "Why never roll your own cryptography?", back: "Secure-looking schemes hide subtle flaws that only years of public attack find. Use vetted libraries and standard protocols such as TLS." }
core:
  idea: 'Cryptography gives you three guarantees over a channel anyone can watch: secrecy (encryption), integrity (hashes and message codes) and authenticity (signatures). Public-key tricks let strangers agree on a secret key, and a fast shared key then protects the conversation.'
  formulas:
    - tex: '\text{fingerprint} = H(\text{message})'
      label: 'Hash: fixed-size, one-way, changes completely if the message changes'
    - tex: 'A = g^a \bmod p,\quad B = g^b \bmod p,\quad K = B^a \bmod p = A^b \bmod p'
      label: 'Diffie–Hellman: both sides reach the same secret K'
  conditions:
    - 'The hash is collision-resistant and one-way (use SHA-256 or newer, never MD5 or SHA-1 for security)'
    - 'Private keys and shared keys stay secret, and random numbers are truly unpredictable'
    - 'You can trust that a public key belongs to the party you think it does (certificates)'
    - 'You use vetted libraries and protocols, never your own invention'
  sign: 'The commonest mistake is mixing up the three tools: hashing is not encryption (it cannot be undone), and encryption alone does not prove who sent the message.'
outcomes:
  - 'Name the three guarantees (secrecy, integrity, authenticity) and say which tool gives each'
  - 'Explain what a hash is and why one flipped character changes everything'
  - 'Compare symmetric and public-key encryption, and say why real systems use both'
  - 'Walk through Diffie–Hellman with the paint-mixing picture and with small numbers'
  - 'Describe a digital signature and the main steps of a TLS handshake'
opener:
  story: |
    You are in a busy café, paying a bill through your bank's app on the free Wi-Fi. Everything your phone sends flies through the air, and anyone in the café with a laptop can catch it. The cashier, the waiter, the person who looks like they are reading the news: all of them could be listening.

    Yet your PIN arrives safely, and the app is sure it is talking to the real bank and not a copycat. Here is the strange part. You and the bank have never met. You have never swapped a password or a secret code. Your phone just opened the app and, within a blink, a private line existed.

    How can two strangers build a secret while everyone listens to every word they say?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A phone and a bank exchange locked messages while an eavesdropper sees only scrambled data"><rect x="14" y="70" width="70" height="110" rx="12" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="24" y="86" width="50" height="62" rx="4" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="30" y="122" style="font-size:11px;fill:var(--ink)">PIN ••••</text><rect x="236" y="70" width="70" height="110" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M246 96 L271 80 L296 96 Z" style="fill:var(--c)"/><rect x="250" y="100" width="6" height="36" style="fill:var(--ink)"/><rect x="264" y="100" width="6" height="36" style="fill:var(--ink)"/><rect x="278" y="100" width="6" height="36" style="fill:var(--ink)"/><path d="M88 125 L232 125" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 4"/><rect x="132" y="108" width="56" height="34" rx="6" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><path d="M150 108 v-8 a10 10 0 0 1 20 0 v8" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="144" y="130" style="font-size:10px;fill:var(--ink)">x7#Qk9</text><circle cx="160" cy="42" r="14" style="fill:none;stroke:var(--bad);stroke-width:2"/><path d="M154 40 q6 -6 12 0 M155 46 q5 4 10 0" style="fill:none;stroke:var(--bad);stroke-width:1.5"/><text x="116" y="72" style="font-size:10px;fill:var(--bad)">eavesdropper sees:</text><text x="112" y="88" style="font-size:10px;fill:var(--muted)">only scrambled noise</text><text x="18" y="200" style="font-size:10px;fill:var(--muted)">you</text><text x="248" y="200" style="font-size:10px;fill:var(--muted)">the bank</text></svg>'
life:
  - 'The padlock in your browser''s address bar means a TLS handshake like the one in this lesson just happened.'
  - 'WhatsApp''s "end-to-end encrypted" notice means only the two phones hold the keys; the servers in the middle carry scrambled data.'
  - 'Download pages often print a SHA-256 checksum so you can confirm the file was not tampered with on the way.'
  - 'Every app update on your phone is digitally signed, so your phone can refuse an update that did not come from the real developer.'
  - 'UPI payments, bank apps and Aadhaar-based services all lean on these same tools underneath.'
models:
  - name: 'Easy one way, hard the other'
    text: 'Mixing paint, breaking an egg or multiplying two big primes is easy; unmixing, unbreaking or factoring is not. Whenever an asymmetry like this exists, you can build a lock on it. Look for such asymmetries in contracts, reputation and trust too.'
  - name: 'Trust has to start somewhere'
    text: 'Every secure system rests on something trusted without proof (here, a short list of certificate authorities built into your device). Ask of any system: what is the root of trust, and what happens if it fails?'
  - name: 'Do not invent your own lock'
    text: 'Anyone can design a lock they themselves cannot pick. Real confidence comes from a design that thousands of experts have attacked in public for years. Prefer well-tested standards over cleverness in anything safety-critical.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both use a function that turns any input into a fixed-size number, the same way every time.'
    differs: 'A table hash only needs to spread keys evenly and be fast. A cryptographic hash must also be impossible to reverse and almost impossible to collide on purpose, so it is slower and bigger.'
  - leaf: 'mat/modular-arithmetic'
    name: 'Modular arithmetic'
    same: 'Diffie–Hellman and RSA are built from remainders: powers computed modulo a number, where the answers wrap around like a clock.'
    differs: 'In school, remainders are a puzzle with small numbers. Here the numbers have hundreds of digits, so going backwards from the answer is the hard part.'
  - leaf: 'cs/bits-and-binary'
    name: 'Bits and binary'
    same: 'A hash, a key and an encrypted message are all just strings of bits.'
    differs: 'Ordinary encodings are meant to be read back by anyone; cryptography deliberately makes the bits unreadable without a key.'
next:
  q: 'Now your phone knows it is really talking to the bank. But how does the bank know it is really you, and how can it remember you tapped Pay a second ago without asking for your password on every single request?'
  leaf: 'cs/authentication'
  name: 'Passwords, sessions and OAuth'
symbols:
  - s: 'H(m)'
    means: 'hash of message m: a fixed-size fingerprint (256 bits for SHA-256)'
  - s: 'p'
    means: 'a large public prime number used as the modulus (no unit)'
  - s: 'g'
    means: 'a public base number agreed in the open (no unit)'
  - s: 'a, b'
    means: 'each side''s private number, never sent (no unit)'
  - s: 'A, B'
    means: 'the public values each side sends: g to the power a (or b), modulo p'
  - s: 'K'
    means: 'the shared secret key both sides end up with (no unit)'
  - s: '\bmod'
    means: 'remainder after division, so numbers wrap around like a clock'
---

:::hook
q: Picture the café again. An eavesdropper records every single byte your phone and the bank exchange, from the very first hello. Can they work out the secret key you two end up using?
options: ["Yes, they have seen everything that was said", "No, even though they heard everything", "Only if they have a very fast computer for a day"]
answer: 1
right: Right. The messages sent in the open are built so that the secret is never among them. Each side combines something private with something public, and only the two of them can finish the calculation. The next sections show how, first with paint and then with numbers.
wrong: It feels impossible to keep a secret you negotiated out loud, but that is exactly the trick that was discovered in the 1970s. The secret itself is never sent; each side builds it privately from public pieces. Paint will make it clear.
:::

## Three jobs, one picture {lvl=1 id=s-jobs label="Foundations"}

Start with the threat. A message crossing the internet hops through many machines owned by strangers. Any of them (or the café Wi-Fi) can do three bad things. Each bad thing has a matching defence.

| The attacker can... | We need... | The tool |
|---|---|---|
| **Read** the message | **Secrecy** (confidentiality) | Encryption |
| **Change** the message on the way | **Integrity** | Hashes and message codes |
| **Pretend** to be the sender | **Authenticity** | Digital signatures and certificates |

Notice that these are separate problems. A locked envelope stops reading, but a clever attacker can still swap your envelope for another one. Real systems combine all three.

:::qc lvl=1
q: A message is encrypted so nobody can read it, but an attacker flips some bits in the encrypted data before it arrives. Which guarantee has failed?
options: ["Secrecy", "Integrity", "Neither, encryption covers everything"]
answer: 1
right: Right. Nobody read it, but it was changed, and the receiver may not notice. Good systems add an integrity check on top of encryption.
wrong: Secrecy is about reading. Here the attacker did not need to read anything to cause damage. Which of the three jobs is about changes?
:::

## Hashing: a fingerprint for data {lvl=1 id=s-hash label="Foundations"}

Think of a **fingerprint**. A person is far bigger than their fingerprint, yet the print is nearly unique and you cannot rebuild the person from it. A **hash function** does this for data: feed in a word, a photo or a 4 GB film, and out comes a short, fixed-size string.

Four properties make it useful:

- **Deterministic**: the same input always gives the same fingerprint.
- **Fixed size**: SHA-256 always gives 256 bits, whatever the input.
- **One-way**: from the fingerprint you cannot work back to the input.
- **Avalanche**: change one character and the fingerprint changes completely, with about half its bits flipped.

```python
import hashlib
def h(text):
    return hashlib.sha256(text.encode()).hexdigest()[:16]

print(h("Pay Asha 500 rupees"))   # one fingerprint
print(h("Pay Asha 900 rupees"))   # looks totally unrelated
```

This is **integrity** in action. If a website prints the fingerprint of a download, you can hash your copy and compare. If even one bit was altered, the two do not match. It is the same idea as the hash tables you met earlier, but built to be one-way and very hard to fool on purpose.

A hash is **not encryption**: there is no key and no way back. That is exactly why it suits storing passwords, as the next lesson shows.

:::qc lvl=1
q: You hash the word "mango" and get a 64-character string. You then hash the whole text of a long novel. How long is the result?
options: ["Much longer, since the input is longer", "The same 64 characters", "Depends on the language of the novel"]
answer: 1
right: Right. SHA-256 always gives 256 bits, which is 64 hexadecimal characters, for any input.
wrong: A fingerprint does not grow with the person. What property says the output size is fixed?
:::

## Secret keys, and the problem they leave {lvl=1 id=s-symmetric label="Foundations"}

The oldest idea in secrecy is a **shared key**: you and a friend hold identical keys to one lockbox. Whoever has the key can lock or unlock. This is **symmetric encryption**, and the modern standard is **AES**. It is extremely fast: your laptop can encrypt gigabytes per second.

So why not stop there? Because of the **key problem**. Before you can talk secretly you must hand over the key, and if you have to send the key across the café, the eavesdropper copies it too. You need a secret channel to create a secret channel.

It also scales badly. If every pair among $n$ people needs its own key, you need $n(n-1)/2$ keys. For 50 people that is 1,225 keys; for a million Indian bank customers each talking to a bank, the bank would have to pre-arrange a million secrets in person. No chance.

:::qc lvl=1
q: What is the main weakness of symmetric encryption by itself?
options: ["It is too slow for big files", "Both sides must already share the secret key", "It cannot hide the message"]
answer: 1
right: Right. The encryption itself is fast and strong; getting the key to the other side safely is the hard part.
wrong: AES is fast and does hide data. Think about what must happen before the first message is sent.
:::

## The paint-mixing trick {lvl=2 id=s-dh label="SDE-1"}

Here is the discovery that solved the key problem. Imagine you and the bank, in public view, each want to end with the same secret colour.

1. You both openly agree on a common base: **yellow** paint. Everyone sees this.
2. You each pick a **private colour** (you pick red, the bank picks blue) and never show it.
3. You each mix your private colour into the yellow and send over the mixture. The eavesdropper sees both mixtures (orange and green) but not the private colours.
4. Each of you now mixes **your own private colour** into the mixture you **received**.

You added red + blue + yellow in a different order, and the order does not matter, so you both have the same muddy brown. The eavesdropper has orange and green and the yellow, but **cannot unmix paint** to get the private colours, so they cannot make the brown.

:::figure caption="Public values travel in the open (top). Each private colour never leaves its owner. Both end with the same final mix."
<svg viewBox="0 0 320 210" role="img" aria-label="Paint mixing: both sides mix a private colour with shared yellow, swap, then add their own colour to reach the same brown">
<g style="stroke:var(--ink);stroke-width:1.2">
<circle cx="160" cy="22" r="14" style="fill:#e6c53c"/>
<circle cx="50" cy="90" r="14" style="fill:#d94b3d"/>
<circle cx="270" cy="90" r="14" style="fill:#3d6fd9"/>
<circle cx="110" cy="90" r="14" style="fill:#e08a3c"/>
<circle cx="210" cy="90" r="14" style="fill:#4aa383"/>
<circle cx="50" cy="175" r="16" style="fill:#7a5a3c"/>
<circle cx="270" cy="175" r="16" style="fill:#7a5a3c"/>
</g>
<g style="fill:none;stroke:var(--muted);stroke-width:1.2">
<path d="M64 90 L96 90"/><path d="M256 90 L224 90"/>
<path d="M120 105 L200 105 M200 105 l-6 -4 M200 105 l0 0"/>
<path d="M200 76 L120 76 M120 76 l6 -4"/>
<path d="M50 106 L50 158"/><path d="M270 106 L270 158"/>
</g>
<g style="font-size:9.5px;fill:var(--muted)">
<text x="184" y="26">shared yellow (public)</text>
<text x="8" y="68">your private</text><text x="8" y="79">red (secret)</text>
<text x="226" y="68">bank private</text><text x="232" y="79">blue (secret)</text>
<text x="118" y="128">swap mixtures in the open</text>
<text x="8" y="202">same secret brown</text><text x="214" y="202">same secret brown</text>
</g>
</svg>
:::

Real **Diffie–Hellman** replaces paint with arithmetic that is easy forwards and hopeless backwards. "Mixing" is raising a number to a power, modulo a prime (remainders, as on a clock). Here is a small example you can follow by hand, using the public base $g = 5$ and modulus $p = 23$.

```python
p, g = 23, 5                 # public
a, b = 6, 15                 # private: yours, the bank's
A = pow(g, a, p)             # you send   5**6  mod 23 = 8
B = pow(g, b, p)             # bank sends 5**15 mod 23 = 19
print(pow(B, a, p), pow(A, b, p))   # both print 2
```

Read it as: each side sends $g$ to the power of their private number, remainder $p$; each then raises what they received to their own private number. Both reach $g^{ab} \bmod p$, which is 2 here. An eavesdropper knows $g$, $p$, 8 and 19, but to find 2 they must discover $a$ or $b$ (the **discrete logarithm** problem). With 23 you can just try them all. With a prime of 600+ digits, nobody can. [Unverified: believed hard, not proved]

:::qc lvl=2
q: In the paint story, which items does the eavesdropper see?
options: ["The yellow and both private colours", "The yellow and both mixtures, but no private colour", "Only the final brown"]
answer: 1
right: Right. Everything sent over the café is public. The secrets (private colours, final brown) are never transmitted.
wrong: If the eavesdropper saw a private colour they could repeat your mixing. Which things actually travel between you and the bank?
:::

## Public-key encryption and signatures {lvl=2 id=s-pub label="SDE-1"}

A cousin of the same idea is **public-key cryptography**: each person has a **key pair**. The **public key** is shared with the world; the **private key** never leaves its owner. Think of a post box: anyone can drop a letter through the slot (encrypt with the public key), but only the owner with the key can open the box (decrypt with the private key). **RSA** is the best-known scheme, based on how hard it is to split a huge number into its two prime factors.

Run it **backwards** and you get a **digital signature**. To sign a document:

1. Hash the document into a short fingerprint.
2. Lock that fingerprint with your **private** key. The result is the signature.

To verify, anyone unlocks the signature with your **public** key and compares it with their own hash of the document. A match proves two things at once: only the private-key holder could have signed, and not one bit has changed since. Your phone does exactly this check for every app update.

Public-key maths is slow compared with AES, so real systems use it only to **agree on a key**, then switch to fast symmetric encryption for the actual conversation. This blend is called **hybrid encryption**.

:::qc lvl=2
q: Asha wants to prove a message came from her. Which key does she use to sign it?
options: ["Her public key", "Her private key", "The receiver's public key"]
answer: 1
right: Right. Only Asha holds her private key, so only she can produce a signature that her public key verifies.
wrong: If she signed with a key everyone has, anyone could forge it. Which key is secret?
:::

## But whose public key is it? {lvl=3 id=s-cert label="SDE-2"}

A gap remains. Suppose someone in the café says "I am the bank, here is the bank's public key." You must be sure the key really belongs to the bank, or you are securely talking to a thief. This is the **man-in-the-middle** attack: the thief talks to you as the bank and to the bank as you, passing messages along while reading them.

The fix is a **certificate**: a small file saying "this public key belongs to *yourbank.example*", **signed** by a **certificate authority** (CA) that your device already trusts. Your phone and browser ship with a list of trusted CAs. It checks the signature on the certificate; if it holds, the key belongs to the bank. Trust has to start somewhere, and here it starts in that built-in list. [Inference: the exact set of trusted roots differs by operating system and browser]

## The TLS handshake in a picture {lvl=3 id=s-tls label="SDE-2"}

**TLS** is the protocol behind the padlock and `https`. Its handshake uses every idea above, in about one round trip in the modern version (TLS 1.3). [Unverified: version details from memory]

:::figure caption="A simplified TLS 1.3 handshake. Everything after the keys are agreed is encrypted with the fast shared key."
<svg viewBox="0 0 320 230" role="img" aria-label="Sequence diagram of a TLS handshake between a browser and a server">
<g style="stroke:var(--ink);stroke-width:1.5"><path d="M60 20 L60 215"/><path d="M260 20 L260 215"/></g>
<g style="font-size:11px;fill:var(--ink)"><text x="32" y="14">Browser</text><text x="232" y="14">Server</text></g>
<g style="fill:none;stroke:var(--c);stroke-width:1.6">
<path d="M62 48 L256 58"/><path d="M256 98 L64 108"/><path d="M62 148 L256 158"/><path d="M256 188 L64 198"/>
</g>
<g style="font-size:9.5px;fill:var(--muted)">
<text x="70" y="40">1 hello + my Diffie–Hellman value</text>
<text x="82" y="82">2 server hello + its DH value,</text>
<text x="82" y="94">certificate and signature</text>
<text x="70" y="130">3 browser checks the certificate,</text>
<text x="70" y="141">both compute the shared key</text>
<text x="70" y="175">4 "finished" (encrypted)</text>
<text x="82" y="213">5 app data, encrypted with the key</text>
</g>
</svg>
:::

In words: (1) the browser sends a Diffie–Hellman value; (2) the server answers with its own value, its certificate, and a signature proving it holds the private key; (3) the browser checks the certificate chain against its trusted CAs and verifies the signature, and both sides compute the same key; (4) a short "finished" message confirms nothing was tampered with; (5) from then on, all traffic uses fast symmetric encryption.

New values are made for **every** connection, so even if the server's long-term key is stolen next year, an attacker who recorded today's traffic still cannot read it. This property is called **forward secrecy**.

```python
import ssl, socket
ctx = ssl.create_default_context()          # trusted CAs built in
with socket.create_connection(("example.com", 443)) as s:
    with ctx.wrap_socket(s, server_hostname="example.com") as t:
        print(t.version(), t.getpeercert()["subject"])
```

The library does the entire handshake, checks the certificate and checks the hostname for you. Switching off those checks (it is a one-line flag in many libraries) removes the guarantee.

:::qc lvl=3
q: Why does the browser check the server's certificate and signature, and not just trust the Diffie–Hellman value?
options: ["To make encryption faster", "To be sure it is the real server and not a man in the middle", "Because Diffie–Hellman is insecure"]
answer: 1
right: Right. Diffie–Hellman makes a secret with whoever is on the line, but says nothing about who that is. The certificate and signature answer "who".
wrong: Agreeing a key with a thief is easy and gives you a secure line to the thief. What extra piece proves identity?
:::

## Never roll your own {lvl=3 id=s-own label="SDE-2"}

The maths in this lesson is one part; the engineering is the larger and riskier part. The usual failures are not broken algorithms but misuse of good ones.

- **Encryption without integrity**: use **authenticated encryption** (for example AES-GCM) so that tampering is detected, not just hidden.
- **Reusing a nonce** (a number that must be used once): reusing it with the same key in many modes can leak the plaintext.
- **Weak randomness**: keys made from a predictable generator (the clock, a simple counter) are guessable. Use the operating system's secure random source.
- **Fast hashes for secrets**: SHA-256 is fast, which helps an attacker guess. For passwords use a slow, salted scheme (next lesson).
- **Message codes**: to check integrity with a shared key, use **HMAC**, not "hash of key plus message", which has known pitfalls.
- **Timing leaks**: comparing secrets with a normal `==` can reveal how many leading characters matched. Use a constant-time comparison.

```python
import hmac, hashlib, secrets
key = secrets.token_bytes(32)                 # secure random key
tag = hmac.new(key, b"Pay Asha 500", hashlib.sha256).digest()
ok  = hmac.compare_digest(tag, hmac.new(key, b"Pay Asha 500", hashlib.sha256).digest())
```

Looking ahead, a large quantum computer would break today's Diffie–Hellman and RSA (via Shor's algorithm), while symmetric keys and hashes only need to be longer. Standards bodies have been choosing replacement "post-quantum" schemes. [Unverified: standardisation dates and schemes from memory]

:::qc lvl=3
q: A teammate proposes inventing a "simple" scramble of their own to protect user data because it is "too obscure to crack". What is the best response?
options: ["Fine, obscurity is a good defence", "Use a standard, well-reviewed library and protocol instead", "Combine it with MD5 for extra safety"]
answer: 1
right: Right. Secrecy should rest on the key alone, not on hiding the design. Public designs survive years of expert attack; private ones usually fall to the first expert who looks.
wrong: Security that depends on nobody understanding your method is fragile. What do the experts recommend instead?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The three jobs are secrecy (encryption), integrity (hashes, message codes) and authenticity (signatures); each needs its own tool. {lvl=1}
2. A hash is a fixed-size, one-way fingerprint; changing one character changes it completely. It is not encryption. {lvl=1}
3. Symmetric encryption (AES) is fast but needs a shared key; the key-sharing problem is what public-key ideas solve. {lvl=1}
4. Diffie–Hellman lets two parties build a shared secret in public, because mixing is easy and unmixing is hard. {lvl=2}
5. A signature is a hash locked with a private key: it proves who signed and that nothing changed. {lvl=2}
6. Certificates and certificate authorities answer "whose public key is this?", defeating man-in-the-middle attacks. {lvl=3}
7. TLS agrees a key with Diffie–Hellman, proves identity with a certificate, then switches to fast symmetric encryption, with forward secrecy. {lvl=3}
8. Use vetted libraries and standard protocols; most real breaks come from misuse, not broken maths. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Hashing is not encryption: you cannot "decrypt" a hash, and a hash alone proves nothing about who made the data. {lvl=1}
- Encryption alone does not give integrity; use authenticated encryption. {lvl=2}
- Never use MD5 or SHA-1 where security matters, and never a fast hash for passwords. {lvl=2}
- A public key is only trustworthy once you know it belongs to the right person; that is what certificates are for. {lvl=2}
- Turning off certificate or hostname checks "to make it work" silently removes the protection. {lvl=3}
- Keys from the clock, a counter or a basic random function are guessable; use the OS secure random source. {lvl=3}
- Never invent your own algorithm or protocol. In interviews, say "I would use TLS and a standard library". {lvl=3}
:::
