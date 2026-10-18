---
title: How the internet works
summary: How a cricket score from the other side of the world reaches your phone in a blink, travelling as numbered postcards.
ncert: []
up_to: SDE-2
builds_on: [Bits and binary, Text, images and sound as bits]
notes_prompt: Explain to a friend who has never used a computer science word how a photo you send reaches their phone, using only the idea of a post office.
margin:
  - kind: history
    title: History
    text: The ancestor of the internet, ARPANET, sent its first message between two US universities in 1969 [Unverified]. Its big idea, chopping messages into small packets, came from the 1960s work of Paul Baran and Donald Davies [Unverified].
  - kind: tip
    title: Interview favourite
    text: '"What happens when you type a URL and press Enter?" is among the most asked interview questions. This lesson gives you the skeleton of the answer; the next three lessons fill in the details.'
  - kind: olympiad
    title: Try this
    text: Run `traceroute` (or `tracert` on Windows) to any website. Each line is one router, one sorting office, on the path your packets take. Read the times and spot where the delay jumps.
books:
  - { title: "J. Kurose and K. Ross, Computer Networking: A Top-Down Approach", ref: "Ch. 1 Computer Networks and the Internet [Unverified]" }
  - { title: "A. Tanenbaum and D. Wetherall, Computer Networks", ref: "Ch. 1 Introduction [Unverified]" }
cards:
  - { front: "What is a packet?", back: "A small chunk of a message with a header on the front (who it is from, who it is for, which piece it is). Big things travel as many packets." }
  - { front: "What does a router do?", back: "Reads the destination address on each packet and forwards it to the next router that is closer. It keeps no memory of the conversation." }
  - { front: "What is an IP address?", back: "The number that names a machine on the network, like a postal address. IPv4 has 4 numbers (32 bits); IPv6 has 128 bits." }
  - { front: "Name the four layers of the internet model, bottom to top.", back: "Link (one hop), Internet/IP (hop by hop across networks), Transport (TCP or UDP, between programs), Application (HTTP, DNS and so on)." }
  - { front: "Why split messages into packets instead of reserving a wire?", back: "Packets from many people share the same wires, so links stay busy, and if a link fails the packets simply take another route." }
  - { front: "What does a port number add to an IP address?", back: "The IP address picks the machine; the port picks the program on it (like a flat number inside a building)." }
core:
  idea: 'The internet is a network of networks that moves data as small numbered **packets**. Each packet carries the destination **IP address**, and each **router** on the way forwards it one step closer, with no router knowing the whole path.'
  formulas:
    - tex: '2^{32} \approx 4.3\times10^{9}'
      label: 'Number of IPv4 addresses (32 bits)'
    - tex: '\text{packets} = \lceil \text{message size} / \text{payload per packet} \rceil'
      label: 'How many packets a message needs'
  conditions:
    - 'Every machine has an address that routers can reach (private networks reuse addresses behind one public one)'
    - 'The network is best effort: packets may be late, lost, duplicated or arrive out of order'
    - 'Each layer talks only to the layer directly above and below it'
  sign: 'The internet is not a cloud and not wireless magic: your page travels mostly as light in glass fibre, passing through many routers owned by many different companies.'
outcomes:
  - 'Explain why messages travel as packets rather than over a dedicated wire'
  - 'Describe what an IP address and a router do, using the postal analogy'
  - 'Name the four layers and say what each one is responsible for'
  - 'Walk through the big picture of what happens when you open a web page'
  - 'Read a traceroute and explain why a bigger network is made of many independently run networks'
opener:
  story: |
    You tap a link for a live cricket score. A third of a second later the number appears on your phone. The computer that holds the score may be in another country, thousands of kilometres of cable away.

    Nobody ran a private wire from that computer to your phone. Millions of other people were using the same cables in the same moment: watching videos, paying through UPI, sending photos. And somehow your little answer found you among all of them.

    Who carried it, and how did each stop on the way know where to send it next?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A phone sends numbered packets through a chain of routers to a server far away"><rect x="10" y="90" width="44" height="70" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="16" y="82" style="font-size:10px;fill:var(--muted)">your phone</text><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.8"><circle cx="100" cy="70" r="14"/><circle cx="150" cy="150" r="14"/><circle cx="200" cy="80" r="14"/><circle cx="250" cy="150" r="14"/></g><g style="font-size:9px;fill:var(--ink);text-anchor:middle"><text x="100" y="73">R</text><text x="150" y="153">R</text><text x="200" y="83">R</text><text x="250" y="153">R</text></g><g style="fill:none;stroke:var(--muted);stroke-width:1.2"><path d="M54 115 L88 76"/><path d="M54 130 L137 148"/><path d="M114 72 L186 79"/><path d="M164 150 L236 150"/><path d="M212 86 L240 138"/><path d="M110 82 L142 138"/></g><g style="fill:none;stroke:var(--c);stroke-width:2.4;stroke-dasharray:5 4"><path d="M54 115 L88 76"/><path d="M114 72 L186 79"/><path d="M212 86 L240 138"/></g><rect x="268" y="110" width="44" height="64" rx="4" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="270" y="102" style="font-size:10px;fill:var(--muted)">server</text><g style="fill:var(--c);font-size:9px"><rect x="74" y="92" width="16" height="12" rx="2"/><rect x="130" y="64" width="16" height="12" rx="2"/><rect x="214" y="104" width="16" height="12" rx="2"/></g><g style="font-size:8px;fill:var(--surface);text-anchor:middle"><text x="82" y="101">1</text><text x="138" y="73">2</text><text x="222" y="113">3</text></g><text x="16" y="206" style="font-size:10px;fill:var(--muted)">numbered packets, each routed on its own</text></svg>'
life:
  - 'Opening a video call: your voice and face are chopped into thousands of packets a second, and the receiver reassembles them in order.'
  - 'A UPI payment from a village: the request hops through your telecom provider, the internet backbone and the bank within a second.'
  - 'A cable cut under the sea slows some websites for a day, then traffic reroutes through other cables.'
  - 'Your home Wi-Fi router gives every phone and laptop a private address, while the outside world sees just one.'
  - 'Sending the same photo twice over WhatsApp may take two completely different routes.'
models:
  - name: 'Small pieces share better'
    text: 'Cutting a large job into small standard pieces lets many users share one scarce resource, as containers share ships and trains. Look for this wherever a big thing must pass through a narrow shared channel.'
  - name: 'Local decisions, global result'
    text: 'No router knows the whole path; each only asks "which neighbour is closer?" Large systems such as markets and cities also work because every part decides locally by simple rules.'
  - name: 'Layers hide complexity'
    text: 'You write a letter without knowing how trucks or aeroplanes work. Each layer offers a simple promise to the one above, so people can improve one layer without breaking the others.'
links:
  - leaf: 'cs/bits-and-binary'
    name: 'Bits and binary'
    same: 'Everything on the network, a photo, a song, a page, is only a stream of bits, and an address is just a number in binary.'
    differs: 'Bits in memory sit still and are reached instantly; bits on the network take time to travel and may be lost on the way.'
  - leaf: 'cs/stacks-and-queues'
    name: 'Queues'
    same: 'A router holds waiting packets in a queue and sends them first in, first out when the outgoing link is busy.'
    differs: 'A program queue never loses items; a router with a full queue simply drops the newest packets.'
  - leaf: 'phy/electromagnetic-waves'
    name: 'Electromagnetic waves'
    same: 'Light in fibre and radio in Wi-Fi are both electromagnetic waves carrying the bits.'
    differs: 'Fibre guides light inside glass with little loss; Wi-Fi spreads in all directions and fades quickly.'
next:
  q: 'Packets can be lost, duplicated or arrive in the wrong order, yet a downloaded file is always perfect. Who puts the pieces back together and asks for the missing ones?'
  leaf: 'cs/tcp-ip'
  name: 'TCP/IP and the layers'
symbols:
  - s: 'packet'
    means: 'a small chunk of data with a header saying where it is from and where it is going'
  - s: 'IP address'
    means: 'the number that names a machine on the network, for example 142.250.77.14'
  - s: 'router'
    means: 'a machine that forwards packets toward their destination'
  - s: 'port'
    means: 'a number from 0 to 65535 that picks one program on a machine'
  - s: 'hop'
    means: 'one step from a router to the next'
  - s: '2^{32}'
    means: 'the count of different 32-bit numbers, so the count of IPv4 addresses (about 4.3 billion)'
---

:::hook
q: You send a 5 MB photo to a friend. How does the network carry it?
options: ["One continuous stream down a dedicated wire", "As thousands of small packets, each finding its own way", "It is copied onto a drive and posted"]
answer: 1
right: Right. The photo is cut into thousands of numbered packets. Each is passed from router to router and the friend's phone puts them back in order. Different packets can even take different routes.
wrong: A dedicated wire per conversation would need billions of wires. The trick is much cheaper: cut the photo into small labelled pieces and let everyone's pieces share the same cables.
:::

## The postal idea {lvl=1 id=s-postal label="Foundations"}

Think of how you would mail a long book to a friend if the post office only accepted postcards. You would copy a few lines onto each postcard, write **page numbers** in the corner, write your friend's **address** on every card, and drop them all in a postbox. Cards may travel by different trucks. Some arrive late. Your friend sorts them by number and reads the book.

The internet does exactly this. A large message is cut into **packets**. Each packet has a small **header** on the front, like the writing on a postcard: where it is from, where it is going and which piece it is. The rest of the packet, the **payload**, is the actual data. A typical packet carries about 1,500 bytes in total, so a 5 MB photo becomes a few thousand packets.

Why not just reserve a wire for the whole conversation, as old telephone exchanges did? Because most of the time a conversation is silent, and the reserved wire would sit idle while others wait. Packets let thousands of conversations take turns on the same cable, and if one cable breaks, the next packets simply go another way.

:::qc lvl=1
q: A message is cut into packets that are sent on different routes. What is on every packet so the receiver can rebuild the message?
options: ["A copy of the whole message", "Where it is from, where it is going and which piece it is", "A password"]
answer: 1
right: Right. The header is the postcard writing, and the piece number lets the receiver put them back in order.
wrong: A copy of the whole message on every packet would defeat the purpose. Think of what you write on each postcard.
:::

## Addresses and routers {lvl=1 id=s-routers label="Foundations"}

Every machine on the internet gets an **IP address**, a number that works like a postal address. The classic form (IPv4) is four numbers from 0 to 255 joined by dots, such as `142.250.77.14`. Four numbers of 8 bits each make 32 bits, so there are $2^{32}$ addresses, about 4.3 billion.

Read it as: two multiplied by itself thirty-two times is roughly four and a third billion. That sounds like a lot, but there are more phones and computers than that, which is why a newer form, IPv6, uses 128 bits.

In between sit **routers**, the sorting offices. A router has several wires coming in and out. When a packet arrives, the router reads the destination address, looks it up in its table ("addresses starting with this go out that wire") and pushes the packet onward. It does not remember your conversation, does not know the full route and does not care what is in the payload. Each step from one router to the next is a **hop**, and a packet to the other side of the world usually makes 10 to 20 hops.

:::figure caption="Each router forwards the packet to the neighbour that is closer to the destination. Two packets of the same message can take different routes."
<svg viewBox="0 0 360 150" role="img" aria-label="Phone, four routers and a server; two different routes shown">
<g style="font-size:11px;text-anchor:middle">
<rect x="10" y="55" width="50" height="40" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="35" y="79" style="fill:var(--ink)">phone</text>
<rect x="300" y="55" width="50" height="40" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text x="325" y="79" style="fill:var(--ink)">server</text>
<g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--ink);stroke-width:1.3"><circle cx="120" cy="35" r="16"/><circle cx="120" cy="115" r="16"/><circle cx="220" cy="35" r="16"/><circle cx="220" cy="115" r="16"/></g>
<g style="fill:var(--ink)"><text x="120" y="39">A</text><text x="120" y="119">B</text><text x="220" y="39">C</text><text x="220" y="119">D</text></g>
<g style="fill:none;stroke:var(--muted);stroke-width:1.2"><path d="M60 68 L106 42"/><path d="M60 82 L106 108"/><path d="M136 35 L204 35"/><path d="M136 115 L204 115"/><path d="M232 46 L232 104"/><path d="M234 45 L300 66"/><path d="M234 105 L300 84"/></g>
<g style="fill:none;stroke:var(--c);stroke-width:2.6"><path d="M60 68 L106 42"/><path d="M136 35 L204 35"/><path d="M234 45 L300 66"/></g>
<g style="fill:none;stroke:var(--c);stroke-width:2.6;stroke-dasharray:5 4"><path d="M60 82 L106 108"/><path d="M136 115 L204 115"/><path d="M234 105 L300 84"/></g>
<text x="180" y="20" style="font-size:10px;fill:var(--muted)">packet 1 (solid)</text>
<text x="180" y="142" style="font-size:10px;fill:var(--muted)">packet 2 (dashed)</text>
</g>
</svg>
:::

:::qc lvl=1
q: A packet goes from your phone through 3 routers to a server. How many hops (wire segments between neighbours) is that?
options: ["3", "4", "5"]
answer: 1
right: Right. Phone to router 1, router 1 to 2, router 2 to 3, router 3 to the server: 4 hops.
wrong: Draw it as phone, router, router, router, server and count the wires between neighbours, not the routers.
:::

## Layers: one job at a time {lvl=2 id=s-layers label="SDE-1"}

Sending a letter involves you writing, the post office sorting, trucks driving and planes flying. Nobody does all of it. The internet is organised the same way, in four **layers**, and each layer does one job and trusts the one below.

| Layer | Its job | Examples |
|---|---|---|
| Application | What the programs say to each other | HTTP (web), DNS (names), SMTP (email) |
| Transport | Delivery between two programs, with or without guarantees | TCP, UDP |
| Internet | Getting a packet across many networks to the right machine | IP |
| Link | One hop over one wire or radio link | Ethernet, Wi-Fi, 4G/5G |

As data goes down, each layer **wraps** it in its own header, like putting a letter in an envelope, then that envelope in a mailbag. This is called **encapsulation**. The browser's request gets a transport header (ports), then an IP header (addresses), then a link header (the next device on this wire). Routers on the way unwrap only to the IP layer, read the address and rewrap for the next link.

Notice the **port**. An IP address picks the machine, like a building's street address. A port number picks the program, like a flat number inside. Web servers listen on port 80 (plain) or 443 (secure); that is why the browser knows where to knock.

```python
import socket
# Ask the OS for a packet-level connection to a web server:
# the IP address picks the machine, port 443 picks the program.
s = socket.create_connection(("example.com", 443), timeout=5)
print(s.getpeername())   # ('93.184.x.x', 443), IP address and port
s.close()
```

:::qc lvl=2
q: Which layer decides which program on a machine receives the data?
options: ["Link", "Internet (IP)", "Transport (via the port)"]
answer: 2
right: Right. IP gets the packet to the machine; the transport layer's port number hands it to the right program.
wrong: The IP address names a machine, not a program on it. Which layer carries the port number?
:::

## What happens when you open a page {lvl=2 id=s-page label="SDE-1"}

Here is the whole journey at bird's-eye height. Each step gets its own lesson later.

1. **Name to number.** The browser has `www.example.com` but needs an IP address. It asks a name service (DNS). See the *DNS and HTTP* lesson.
2. **Open a connection.** It sets up a reliable conversation with that machine. See *TCP/IP and the layers*.
3. **Secure it.** For `https`, both sides agree on secret keys so nobody on the path can read or change the data.
4. **Ask.** The browser sends a request: "GET me the page."
5. **Answer.** The server replies with the page; the browser finds more files it needs (pictures, scripts) and repeats from step 4, often from a nearby copy kept by a CDN.
6. **Show.** The browser draws the page.

Every step costs at least a trip across the network and back, and distance is paid for in time. That is why the last lesson of this pillar is about latency.

:::qc lvl=2
q: Which comes first when you type a new web address: opening a connection to the server, or finding the server's IP address?
options: ["Opening the connection", "Finding the IP address", "Asking for the page"]
answer: 1
right: Right. You cannot connect to a machine until you know its number, so the name lookup comes first.
wrong: To connect you must say where. What do we have at the start, a name or a number?
:::

## A network of networks {lvl=3 id=s-networks label="SDE-2"}

There is no single internet company. Your phone talks to your telecom provider's network. That connects to bigger networks, which connect to others. Each independently run network is an **autonomous system**, and together there are tens of thousands. [Unverified: the exact count changes every year.] Routers at the edges of these networks exchange "I can reach these addresses" announcements using a protocol called **BGP**, and that is how a router in Delhi learns which way to send a packet for Tokyo. Because BGP works on trust between operators, a mistaken announcement can send traffic to the wrong place; such leaks have caused real outages, though I cannot cite specific dates from memory.

**Addresses are scarce.** 4.3 billion IPv4 addresses ran out for new allocations years ago [Unverified: dates vary by region]. Two fixes are used together:

- **NAT** (network address translation): your home router has one public address and hands private addresses (like `192.168.1.x`) to your devices. It rewrites packets as they pass and remembers which device asked for what.
- **IPv6**: 128 bits, enough for more addresses than there are grains of sand on Earth by a huge margin.

A block of addresses is written in **CIDR** form, like `10.0.0.0/22`: the first 22 bits are fixed (the "network part") and the remaining $32 - 22 = 10$ bits vary, giving $2^{10} = 1024$ addresses. Routers match on the fixed prefix, so one table line can cover thousands of machines.

:::qc lvl=3
q: A block is written 192.168.0.0/24. How many addresses does it contain?
options: ["24", "256", "65,536"]
answer: 1
right: Right. 32 - 24 = 8 free bits and 2⁸ = 256 addresses.
wrong: The number after the slash counts the fixed bits. How many bits are left free out of 32, and how many numbers do those bits make?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Messages travel as small numbered packets, each with a header (from, to, which piece). {lvl=1}
2. Routers forward each packet to a closer neighbour; none knows the whole route. {lvl=1}
3. An IP address names a machine (IPv4 is 32 bits, about 4.3 billion addresses); a port names a program. {lvl=1}
4. Four layers (link, internet, transport, application) each do one job and wrap data in their own header. {lvl=2}
5. Opening a page means: name lookup, connection, security, request, answer, draw. {lvl=2}
6. The internet is many autonomous networks joined by BGP; NAT and IPv6 handle the shortage of addresses. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The internet does not promise delivery: packets are lost and reordered all the time, and something above IP has to fix it. {lvl=1}
- Do not confuse the web with the internet: the web (pages over HTTP) is one application among many on the network. {lvl=1}
- An IP address is not a person or a place: it can change, be shared (NAT) or move with a phone. {lvl=2}
- A router forwards by destination address only; it does not choose the "best" route for your application. {lvl=3}
- Debug with `ping` (is it reachable, how long?) and `traceroute` (which routers, where does the delay jump?). {lvl=2}
:::
