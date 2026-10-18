---
title: TCP/IP and the layers
summary: How a photo arrives perfect over a train's flaky Wi-Fi, and why a video call deliberately lets pieces go.
ncert: []
up_to: SDE-2
builds_on: [How the internet works, Queues]
notes_prompt: Explain to a friend how two computers can send a perfect file over a network that loses packets, using the idea of numbered postcards and receipts.
margin:
  - kind: history
    title: History
    text: Vint Cerf and Bob Kahn published the design of TCP/IP in 1974, and the ARPANET switched to it on 1 January 1983 [Unverified]. Congestion control was added in the late 1980s after the network repeatedly choked itself [Unverified].
  - kind: tip
    title: Interview favourite
    text: '"TCP vs UDP?" is nearly universal. Strong answer: TCP gives an ordered, reliable byte stream at the cost of setup and waiting; UDP gives bare messages, so use it when late data is useless (calls, games) or when you build your own rules on top (QUIC).'
  - kind: olympiad
    title: Design link
    text: Throughput over one TCP connection is limited to about window ÷ round-trip time. That is why a single download over a long distance is slow even on a fat pipe, and why CDNs bring servers closer.
books:
  - { title: "J. Kurose and K. Ross, Computer Networking: A Top-Down Approach", ref: "Ch. 3 Transport Layer: reliable data transfer, TCP, congestion control [Unverified]" }
  - { title: "A. Tanenbaum and D. Wetherall, Computer Networks", ref: "Ch. 6 The Transport Layer [Unverified]" }
cards:
  - { front: "What does IP promise?", back: "Almost nothing: best effort. A packet may be lost, delayed, duplicated or arrive out of order. Reliability is added by the layer above." }
  - { front: "What are the three steps of the TCP handshake?", back: "SYN (client: let's talk, my numbering starts at x), SYN-ACK (server: agreed, mine starts at y), ACK (client: got it). Data can flow after 1 round trip." }
  - { front: "How does TCP know a segment was lost?", back: "Every byte is numbered and the receiver acknowledges what it has. If an acknowledgement does not come back in time (or the same one repeats three times), the sender sends the segment again." }
  - { front: "What is congestion control?", back: "TCP starts slowly and doubles its sending window each round trip (slow start), then adds one segment per round trip. On loss it halves. This shares the network fairly and avoids collapse." }
  - { front: "Throughput limit of one TCP connection?", back: "At most window size divided by round-trip time. A 64 KB window over 100 ms gives about 5 Mbit/s however fast the link is." }
  - { front: "When is UDP the better choice?", back: "When late data is useless (live calls, games), when messages are tiny (DNS), or when you want to write your own rules on top (QUIC and HTTP/3)." }
core:
  idea: 'IP only delivers packets on a best-effort basis. **TCP** numbers every byte, makes the receiver confirm what arrived and resends what did not, so two programs see a perfect, ordered stream. **UDP** skips all of that and just sends messages.'
  formulas:
    - tex: '\text{throughput} \le \dfrac{W}{\text{RTT}}'
      label: 'One TCP connection: window W per round-trip time'
    - tex: '\text{BDP} = \text{bandwidth} \times \text{RTT}'
      label: 'Bytes in flight needed to keep a link full'
  conditions:
    - 'Both sides keep state for the connection (TCP is connection-oriented; UDP keeps none)'
    - 'Loss is occasional: TCP treats every loss as a sign of congestion and slows down'
    - 'The application can tolerate the delay that waiting for a resend adds'
  sign: 'TCP guarantees order and delivery, not speed or timing. One lost packet makes all later data wait, even when it has already arrived.'
outcomes:
  - 'Say what IP does and does not promise, and why a layer above is needed'
  - 'Walk through the TCP handshake and explain sequence numbers and acknowledgements'
  - 'Explain retransmission, flow control and congestion control in plain words'
  - 'Compute a connection''s throughput limit from window and round-trip time'
  - 'Choose between TCP and UDP for a given application and justify it'
opener:
  story: |
    You are on a train, sending a 5 MB photo on WhatsApp over Wi-Fi that drops in and out at every tunnel. The photo arrives. Not a blurry one, not one with a stripe missing, but byte for byte the same photo you sent.

    Yet you now know that the network under it does nothing to guarantee delivery. Packets get thrown away when a router is busy. Some arrive twice. Some come in the wrong order. The network does not even tell you that anything went wrong.

    So who made the photo perfect, and what would your video call feel like if the same careful rule applied to it?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Sender sends numbered segments, one is lost, receiver acknowledges, sender resends"><text x="30" y="26" style="font-size:11px;fill:var(--ink)">sender</text><text x="236" y="26" style="font-size:11px;fill:var(--ink)">receiver</text><path d="M50 36 L50 220" style="stroke:var(--muted);stroke-width:1.4;fill:none"/><path d="M270 36 L270 220" style="stroke:var(--muted);stroke-width:1.4;fill:none"/><g style="fill:none;stroke:var(--c);stroke-width:2"><path d="M50 50 L268 74"/><path d="M50 74 L160 86"/></g><text x="150" y="58" style="font-size:10px;fill:var(--c)">1</text><text x="150" y="88" style="font-size:10px;fill:var(--bad)">2 lost ✗</text><path d="M50 98 L268 122" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="150" y="108" style="font-size:10px;fill:var(--c)">3</text><g style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3"><path d="M268 80 L52 104"/><path d="M268 128 L52 152"/></g><text x="100" y="124" style="font-size:9px;fill:var(--muted)">ack: got 1, want 2</text><text x="100" y="168" style="font-size:9px;fill:var(--muted)">still want 2</text><path d="M50 170 L268 194" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="150" y="190" style="font-size:10px;fill:var(--c)">2 again</text><text x="60" y="226" style="font-size:10px;fill:var(--muted)">numbered pieces, receipts, resend</text></svg>'
life:
  - 'Downloading an app update or sending a document over WhatsApp: TCP guarantees every byte arrives, in order.'
  - 'A live video call that freezes for a moment and then jumps ahead rather than replaying what you missed: that is UDP-style delivery.'
  - 'Online games send your position many times a second over UDP; an old position is worthless, so nobody waits for it.'
  - 'A slow download that speeds up after the first few seconds is TCP slow start probing the network.'
  - 'Two people on one Wi-Fi each get roughly half the speed when both download: congestion control sharing the link.'
models:
  - name: 'Receipts make unreliable channels reliable'
    text: 'Number what you send, ask for a receipt, resend what has no receipt. Couriers, bank transfers and email read-receipts all turn an untrustworthy path into a dependable one this way.'
  - name: 'Start gently, then probe'
    text: 'When you do not know how much capacity is available, begin small and grow fast while things go well, back off sharply at the first sign of trouble. Traffic on a new road, a new investor or a new employee all benefit.'
  - name: 'Reliability has a price'
    text: 'Guaranteeing delivery costs setup time and waiting. Ask whether the thing being sent is still useful when late; if not, do not pay for the guarantee.'
links:
  - leaf: 'cs/how-the-internet-works'
    name: 'How the internet works'
    same: 'TCP and UDP sit one layer above IP and ride on the same packets, ports included.'
    differs: 'IP cares about reaching a machine; TCP cares about a conversation between two programs on those machines.'
  - leaf: 'cs/stacks-and-queues'
    name: 'Queues'
    same: 'The receiver keeps out-of-order segments in a buffer and delivers them in order, a queue with a gap-filling rule.'
    differs: 'A TCP buffer is bounded; the receiver advertises its free space so the sender never overflows it.'
  - leaf: 'cs/processes-and-threads'
    name: 'Processes and threads'
    same: 'Each connection is a small state machine kept by the operating system, one more thing a server must manage in memory.'
    differs: 'A thread runs code; a connection only holds numbers and buffers and does nothing until packets arrive.'
next:
  q: 'You type a name like www.example.com, but TCP needs a number to connect to. Who knows the number, and what exactly does the browser say once connected?'
  leaf: 'cs/dns-and-http'
  name: 'DNS and HTTP'
symbols:
  - s: 'SYN, ACK'
    means: 'flags in a TCP header: SYN opens a connection (synchronise numbers), ACK confirms receipt'
  - s: '\text{seq}'
    means: 'sequence number: the position of a segment''s first byte in the stream (count of bytes)'
  - s: 'W'
    means: 'window: bytes the sender may have in flight without having heard an acknowledgement (bytes)'
  - s: '\text{RTT}'
    means: 'round-trip time: how long a packet takes to go to the other side and the reply to come back (seconds)'
  - s: '\text{cwnd}'
    means: 'congestion window: the sender''s own limit on bytes in flight, adjusted to the network (bytes or segments)'
  - s: '\text{BDP}'
    means: 'bandwidth-delay product: bandwidth times RTT, the data "in the pipe" at once (bits or bytes)'
---

:::hook
q: On a lossy Wi-Fi link, 1 packet in 20 is thrown away. What happens to your downloaded file?
options: ["It has a missing 5% and shows a glitch", "It is perfect, just a bit slower", "The download fails and you must start over"]
answer: 1
right: Right. TCP notices the missing pieces from the receipts that never came back and sends exactly those again. The price is time, not correctness.
wrong: Files do not usually arrive with holes, and TCP rarely gives up after one loss. What mechanism could notice a missing piece and ask for it again?
:::

## IP is best effort {lvl=1 id=s-ip label="Foundations"}

Imagine the post office is overloaded one day. The sorting machine throws some postcards in a bin, a few postcards get copied by mistake and two travel on different trucks so the later one arrives first. The post office does not tell you. That is IP, the internet layer, and its honest name for this is **best effort**: it tries, but promises nothing.

Why would anyone build it so carelessly? Because keeping every promise would make every router slow and expensive. If routers stay simple, the network is cheap and fast, and the few programs that need a guarantee add it themselves at the two ends. This idea is called the **end-to-end principle**: put the smart parts at the edges.

Two ends, then, must do three jobs for a perfect delivery: notice what is missing, ask for it again and put the pieces back in order. That is what **TCP** (Transmission Control Protocol) does.

:::qc lvl=1
q: Why does the internet layer not guarantee delivery?
options: ["It is a bug that nobody has fixed", "Keeping routers simple makes the network fast and cheap, and the ends add reliability when needed", "Routers do not know where packets are going"]
answer: 1
right: Right. This is a deliberate design choice, the end-to-end principle.
wrong: Routers do know the destination, and this is not a bug. Think about what guarantees would cost every router.
:::

## Numbers and receipts {lvl=1 id=s-numbers label="Foundations"}

TCP's trick is the one you would use with numbered postcards. The sender numbers every byte it sends. The receiver replies with a short note, an **acknowledgement** (ACK), saying "I have everything up to number 1,499; send me 1,500 next." If the sender does not hear back in time, it assumes the piece was lost and sends it again, which is called **retransmission**.

Because pieces are numbered, the receiver can also fix the other two problems. A duplicate has a number it already holds, so it is thrown away. A piece that arrives early is parked until the earlier ones turn up, so the program above always reads bytes in the right order.

:::figure caption="Numbered segments and acknowledgements. Segment 2 is lost, so the receiver keeps asking for byte 2; the sender sends it again and the stream is complete."
<svg viewBox="0 0 360 170" role="img" aria-label="Timeline of segments 1, 2 (lost), 3, then repeated acks and a resend of 2">
<g style="font-size:11px;text-anchor:middle">
<text x="50" y="16" style="fill:var(--ink)">sender</text><text x="310" y="16" style="fill:var(--ink)">receiver</text>
<path d="M50 24 L50 160" style="stroke:var(--muted);fill:none;stroke-width:1.3"/><path d="M310 24 L310 160" style="stroke:var(--muted);fill:none;stroke-width:1.3"/>
<g style="fill:none;stroke:var(--c);stroke-width:1.8"><path d="M50 34 L308 50"/><path d="M50 58 L180 66"/><path d="M50 82 L308 98"/><path d="M50 128 L308 144"/></g>
<g style="fill:none;stroke:var(--muted);stroke-width:1.4;stroke-dasharray:4 3"><path d="M308 54 L52 70"/><path d="M308 102 L52 118"/></g>
<g style="font-size:10px;fill:var(--ink)"><text x="130" y="38">seg 1</text><text x="130" y="76" style="fill:var(--bad)">seg 2 lost ✗</text><text x="130" y="94">seg 3</text><text x="130" y="140">seg 2 again</text></g>
<g style="font-size:9px;fill:var(--muted)"><text x="230" y="60">ack: next is 2</text><text x="230" y="112">ack: next is 2</text></g>
</g>
</svg>
:::

```python
# Receiver idea: remember what arrived, always ask for the first gap.
got, want = {}, 1                 # got: seq -> data, want: next needed seq
def on_segment(seq, data):
    global want
    got[seq] = data
    while want in got:            # deliver in order
        deliver(got[want]); want += 1
    return want                   # this is the ACK: "send me this next"
```

:::qc lvl=1
q: The receiver has segments 1, 2 and 4. What does its acknowledgement say?
options: ["Send me 3 next", "Send me 5 next", "Everything is fine"]
answer: 0
right: Right. It asks for the first gap, number 3. Segment 4 waits in the buffer until 3 arrives.
wrong: The acknowledgement names the first byte or segment the receiver still needs, not the highest one it has seen.
:::

## The handshake, in detail {lvl=2 id=s-handshake label="SDE-1"}

Before sending data, both ends must agree on where numbering starts, because each side numbers its own stream. This takes three short messages, the **three-way handshake**:

1. **SYN**: the client says "let's talk, my numbering starts at $x$" (a random-looking number).
2. **SYN-ACK**: the server says "agreed; I got your $x$, and my numbering starts at $y$."
3. **ACK**: the client says "I got your $y$." It may attach its first data to this message.

Read it as: three small messages, a round trip and a half, and then both sides are ready. If the round-trip time is 80 ms, the first data reaches the server about 120 ms after the client started: 40 ms for the SYN, 40 ms for the SYN-ACK to return, then 40 ms for the ACK with data. That is why opening many short-lived connections is costly, and why browsers and servers reuse them (**keep-alive**).

Closing is done with FIN messages, one per direction.

**How does the sender decide a segment is lost?** Two signals. A **timeout**: no ACK came back within a timer set from the measured RTT. Or **three duplicate ACKs**: the receiver keeps repeating "send me 2" because later segments keep arriving, so the sender resends 2 without waiting for the timer (**fast retransmit**).

:::qc lvl=2
q: A client sends SYN at time 0. RTT is 100 ms. At about what time does its first data byte (sent with the final ACK) reach the server?
options: ["50 ms", "100 ms", "150 ms"]
answer: 2
right: Right. SYN takes 50 ms to arrive, the SYN-ACK 50 ms to return (that is one full RTT), then the data takes another 50 ms: 150 ms in total, 1.5 RTT.
wrong: Count three one-way trips: SYN to server, SYN-ACK back, ACK with data to server. Each is half the RTT.
:::

## UDP: when not to wait {lvl=2 id=s-udp label="SDE-1"}

**UDP** (User Datagram Protocol) is TCP with almost everything removed. It adds only port numbers and a check for corruption. There is no handshake, no numbering, no resend, no ordering. You hand it a message and it goes.

That sounds worse, but think about a live video call. If a packet with 20 ms of your friend's voice is lost, resending it would deliver it half a second later, when it is useless and when it would hold up everything after it. It is better to skip the gap and play the next piece. For the same reason online games and live streams choose UDP.

UDP also wins when the message is tiny and the conversation short. A **DNS** lookup is one small question and one small answer; a three-message handshake would triple the cost. And modern protocols such as **QUIC** (under HTTP/3) use UDP as a blank canvas on which they build their own improved reliability.

| Need | TCP | UDP |
|---|---|---|
| Every byte, in order | yes | no |
| Setup cost | 1 round trip before data | none |
| Late data still useful | good fit | poor fit |
| Live, loss-tolerant (calls, games) | poor fit | good fit |
| Typical users | web, email, file transfer | DNS, calls, games, QUIC |

:::qc lvl=2
q: Which of these should you send over UDP rather than TCP?
options: ["A bank transfer request", "A frame of a live video call", "A software update"]
answer: 1
right: Right. A late video frame is worthless, so waiting for a resend is a mistake. The other two must arrive exactly.
wrong: Ask whether the data is still useful if it arrives half a second late.
:::

## Windows: how fast can one connection go {lvl=3 id=s-windows label="SDE-2"}

If the sender waited for an ACK after every segment, a link with a 100 ms round trip would carry one segment per 100 ms, about 117 kbit/s for 1,460-byte segments, however fast the link. So TCP keeps many segments **in flight** at once. The amount allowed is the **window** $W$ in bytes, and per round trip it can send at most $W$ bytes:

$$\text{throughput} \le \frac{W}{\text{RTT}}$$

Read it as: bigger window or shorter round trip, more speed. With $W$ = 64 KB and RTT = 0.1 s, the limit is $65536 \times 8 / 0.1 \approx 5.2$ Mbit/s, even on a gigabit link. To fill a link you need a window of at least the **bandwidth-delay product**, bandwidth times RTT: for 100 Mbit/s and 200 ms that is $100\times10^{6} \times 0.2 / 8 = 2.5$ MB in flight.

Two different limits set the window. **Flow control**: the receiver advertises how much buffer it has free, so a slow phone is not drowned by a fast server. **Congestion control**: the sender limits itself to the **congestion window** (cwnd) that it thinks the network can take. The actual window is the smaller of the two.

:::qc lvl=3
q: A link has bandwidth 200 Mbit/s and RTT 50 ms. How many bytes must be in flight to keep it full?
options: ["1.25 MB", "10 MB", "12.5 MB"]
answer: 0
right: Right. 200×10⁶ × 0.05 = 10⁷ bits = 1.25 MB.
wrong: Multiply bandwidth by RTT, then divide by 8 to turn bits into bytes: 200e6 × 0.05 / 8.
:::

## Congestion control {lvl=3 id=s-congestion label="SDE-2"}

How big may cwnd be? Nobody tells the sender how busy the network is. TCP finds out by experiment, using loss as the signal, and the rules are simple.

1. **Slow start.** Begin small (about 10 segments) and **double** cwnd every round trip. After $k$ round trips the window is $10 \times 2^k$ segments, so it climbs quickly despite the name.
2. **Congestion avoidance.** After a threshold, or the first loss, grow by only **one** segment per round trip.
3. **On loss, halve.** Cut cwnd to half, then resume slowly growing.

This "add a little, cut by half" rule (**AIMD**: additive increase, multiplicative decrease) draws a sawtooth. Its great merit is fairness: two connections on one link both back off sharply when it overflows and creep up together, so each ends up with about half. Newer algorithms (for instance BBR, from Google) estimate bandwidth and delay instead of reacting to loss alone. [Unverified: details of deployments.]

A consequence you can feel: on a link that loses 1 packet in 1,000, TCP often cannot fill a fast, long link, because it keeps halving. Rough rule, due to Mathis et al.: throughput is about $1.22 \times \text{MSS} / (\text{RTT}\sqrt{p})$ for loss rate $p$. [Unverified: constant quoted from memory.]

:::qc lvl=3
q: TCP starts with a window of 10 segments and doubles it every round trip during slow start. How big is it after 4 round trips?
options: ["40", "80", "160"]
answer: 2
right: Right. 10 × 2⁴ = 160 segments.
wrong: Doubling four times: 10 → 20 → 40 → 80 → 160.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. IP is best effort: packets may be lost, duplicated or reordered, by design. {lvl=1}
2. TCP numbers bytes, uses acknowledgements and retransmission to give a reliable, ordered stream. {lvl=1}
3. The three-way handshake (SYN, SYN-ACK, ACK) costs one round trip before data flows. {lvl=2}
4. UDP adds only ports: pick it when late data is useless or messages are tiny; QUIC builds on it. {lvl=2}
5. A connection's speed is at most window ÷ RTT; to fill a link you need a window of bandwidth × RTT. {lvl=3}
6. Slow start doubles cwnd per round trip, then AIMD adds one and halves on loss, sharing links fairly. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Reliable" means every byte arrives in order, not that it arrives quickly: a lost packet stalls everything behind it (head-of-line blocking). {lvl=2}
- Do not use TCP for live media or games when a dropped packet is better than a delayed one. {lvl=2}
- A fast link does not make one download fast over long distance: window and RTT set the cap, so use bigger windows, several connections or a nearer server. {lvl=3}
- Opening a connection per request wastes 1 round trip each: reuse connections (keep-alive, pools). {lvl=2}
- UDP is not "broken TCP": applications that use it often add their own light reliability (sequence numbers, retries). {lvl=3}
:::
