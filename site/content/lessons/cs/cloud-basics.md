---
title: The cloud, computers on rent
summary: How a cricket-final crowd can arrive and a service still stays up, because computers are rented by the minute, not bought.
ncert: []
up_to: SDE-3
builds_on: [Servers and back ends, Scaling up and scaling out, File systems]
notes_prompt: Explain to a friend why a start-up would rent computers by the hour instead of buying its own, and what it still has to look after itself.
margin:
  - kind: history
    title: History
    text: "Amazon Web Services began renting storage and computing to outside developers in 2006 (S3 and EC2). Spare capacity built for Amazon's own shopping peaks became a product. [Unverified: exact dates]"
  - kind: tip
    title: Interview favourite
    text: '"What happens if one data centre fails?" The expected answer names zones: run copies in at least two, put a load balancer in front, and say what is lost if a whole region goes.'
  - kind: olympiad
    title: Design link
    text: Two zones that each work 99.9% of the time give about 99.9999% together, but only if they fail independently. A shared database or a shared bad deploy breaks that assumption.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 Reliable, Scalable, Maintainable (faults, hardware failure in cloud systems) [Unverified chapter detail]" }
  - { title: "Google, Site Reliability Engineering (the SRE book)", ref: "Chapters on service level objectives and managing risk [Unverified]" }
  - { title: "Cloud provider documentation (AWS, Google Cloud, Azure)", ref: "Shared responsibility model pages; each provider words it a little differently" }
cards:
  - { front: "IaaS, PaaS, SaaS, serverless: what do you manage in each?", back: "IaaS: you rent raw machines and manage everything above them. PaaS: you hand over code, the platform runs it. SaaS: you only use the finished app. Serverless: you hand over single functions and pay per call." }
  - { front: "What is a region, and what is an availability zone?", back: "A region is a geographic area (like Mumbai). A zone is one or more separate data centres inside it, with their own power and network, close enough to talk fast." }
  - { front: "Object, block and file storage in one line each?", back: "Object: files addressed by name in a flat bucket, cheap and huge. Block: a raw disk attached to one machine, fast. File: a shared folder many machines can open at once." }
  - { front: "Why can the cloud be cheaper, and why can it be dearer?", back: "Cheaper when use is spiky or unknown: you pay only for what you use. Dearer when use is steady and large: renting forever costs more than owning, and data leaving the cloud is charged." }
  - { front: "What does the shared responsibility model say?", back: "The provider secures the building, hardware and the platform. You secure what you put on it: your data, settings, passwords and who may access what." }
  - { front: "Two zones, each up 99.9% of the time, independent. Combined availability?", back: "Both down at once: 0.001 x 0.001 = 0.000001. So available 99.9999%, if failures really are independent." }
core:
  idea: 'The cloud is computing, storage and networking rented by the minute from someone else''s data centres, so you can grow or shrink in minutes and pay only for what you use. The price is that you must design for failures and cost, and you still secure everything you put there.'
  formulas:
    - tex: '\text{cost} = \text{rate} \times \text{amount used}'
      label: 'Pay-per-use: idle machines cost the same as busy ones'
    - tex: 'A = 1 - (1-a)^k'
      label: 'Availability of k independent copies, each up a fraction a of the time'
  conditions:
    - 'Copies must fail independently (different zones, no shared database or shared bad release)'
    - 'Use is uncertain or spiky enough that renting beats owning'
    - 'Your design tolerates a machine, or a whole zone, disappearing'
  sign: 'The commonest mistake is leaving things running (or open to the internet): the bill and the breach both arrive silently.'
outcomes:
  - 'Explain why companies rent computers instead of buying them, and when that stops being cheaper'
  - 'Tell IaaS, PaaS, SaaS and serverless apart by what you manage'
  - 'Choose between object, block and file storage for a job'
  - 'Estimate a monthly bill and compare always-on with pay-per-call'
  - 'Say what you secure and what the provider secures, and design across zones'
opener:
  story: |
    It is the final of a big cricket tournament. Ten minutes before the toss, a streaming app that normally has a few lakh viewers suddenly has tens of millions pressing play. Nobody can buy that many computers in ten minutes; delivery alone takes weeks.

    Yet the video plays. An hour after the match ends, the crowd is gone, and the extra computers are gone too. Nobody is paying for thousands of idle machines on a Tuesday night.

    So where did the computers come from, and where did they go?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A few servers at rest grow into many during a crowd peak, then shrink again"><text x="16" y="22" style="font-size:11px;fill:var(--muted)">Tuesday night</text><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="16" y="32" width="40" height="14" rx="2"/><rect x="16" y="50" width="40" height="14" rx="2"/></g><path d="M70 48 L112 48" style="fill:none;stroke:var(--muted);stroke-width:1.5"/><path d="M104 43 L112 48 L104 53" style="fill:none;stroke:var(--muted);stroke-width:1.5"/><text x="124" y="22" style="font-size:11px;fill:var(--muted)">Final, toss time</text><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="124" y="32" width="28" height="10" rx="2"/><rect x="156" y="32" width="28" height="10" rx="2"/><rect x="188" y="32" width="28" height="10" rx="2"/><rect x="220" y="32" width="28" height="10" rx="2"/><rect x="252" y="32" width="28" height="10" rx="2"/><rect x="124" y="46" width="28" height="10" rx="2"/><rect x="156" y="46" width="28" height="10" rx="2"/><rect x="188" y="46" width="28" height="10" rx="2"/><rect x="220" y="46" width="28" height="10" rx="2"/><rect x="252" y="46" width="28" height="10" rx="2"/><rect x="124" y="60" width="28" height="10" rx="2"/><rect x="156" y="60" width="28" height="10" rx="2"/><rect x="188" y="60" width="28" height="10" rx="2"/><rect x="220" y="60" width="28" height="10" rx="2"/><rect x="252" y="60" width="28" height="10" rx="2"/></g><path d="M20 210 L20 110" style="stroke:var(--ink);stroke-width:1.5;fill:none"/><path d="M20 210 L300 210" style="stroke:var(--ink);stroke-width:1.5;fill:none"/><path d="M20 196 L90 196 L120 124 L180 124 L215 196 L300 196" style="fill:none;stroke:var(--c);stroke-width:2.5"/><path d="M20 190 L90 190 L120 190 L180 190 L215 190 L300 190" style="fill:none;stroke:var(--bad);stroke-width:1.5;stroke-dasharray:5 4"/><text x="24" y="226" style="font-size:10px;fill:var(--muted)">time</text><text x="26" y="118" style="font-size:10px;fill:var(--c)">computers rented</text><text x="196" y="184" style="font-size:10px;fill:var(--bad)">fixed fleet you own</text></svg>'
life:
  - 'Streaming, ticket-booking and shopping apps add computers for a big match or a sale and release them afterwards.'
  - 'Your phone photos and Google Docs live in someone else''s data centres, not on your device.'
  - 'A start-up can launch to the world from a laptop and a credit card, without buying a single server.'
  - 'UPI apps, banking apps and government portals run partly on cloud regions inside India for speed and for data-residency rules.'
  - 'Gmail, Zoom and Notion are software you rent by the month; you never see the machines at all.'
models:
  - name: 'Rent versus own'
    text: 'Renting wins when you need something briefly or are unsure how much you need (a taxi, a hotel); owning wins when use is constant and heavy (a car you drive daily). Ask how steady your use is before you choose.'
  - name: 'Pay for what you leave switched on'
    text: 'Usage-priced services charge for idleness exactly like for work. A tap left running costs the same whether anyone is washing. Turn off what you are not using.'
  - name: 'Do not put all eggs in one basket'
    text: 'Independent copies fail together far less often than one thing fails alone, but only if one cause cannot break them all. Look for the hidden shared basket: one power line, one supplier, one bad update.'
links:
  - leaf: 'cs/scalability'
    name: 'Scaling up and scaling out'
    same: 'Both are about handling more load; the cloud makes "add more machines" a ten-minute job instead of a purchase order.'
    differs: 'Scalability is the design (spread work over many machines); the cloud is where you rent those machines and the price you pay for them.'
  - leaf: 'cs/load-balancing'
    name: 'Load balancing'
    same: 'Spreading requests over several machines or zones is what turns spare capacity into a service that stays up.'
    differs: 'A load balancer decides where each request goes; the cloud decides how many machines exist to receive them.'
  - leaf: 'mat/exponential-growth'
    name: 'Exponential growth and doubling'
    same: 'Autoscaling reacts to growth that can double quickly, such as a viral link or a sale.'
    differs: 'Real traffic spikes and then falls; real machines take minutes to start, so scaling lags the curve.'
next:
  q: 'Renting machines is fast, but you still push new code onto them many times a day. How can a company ship a change a hundred times a day to millions of users and not break them?'
  leaf: 'cs/ci-cd'
  name: 'CI/CD and deployment'
symbols:
  - s: 'IaaS'
    means: 'Infrastructure as a Service: you rent raw virtual machines, disks and networks'
  - s: 'PaaS'
    means: 'Platform as a Service: you give the platform your code and it runs and scales it'
  - s: 'SaaS'
    means: 'Software as a Service: a finished app you use through a browser or phone'
  - s: 'Region and zone'
    means: 'a geographic area, and one separate data centre (or group) inside it'
  - s: 'a'
    means: 'availability of one copy: the fraction of time it works (0 to 1)'
  - s: 'k'
    means: 'number of independent copies (count)'
  - s: 'A'
    means: 'availability of the whole system (0 to 1)'
  - s: 'Egress'
    means: 'data leaving the provider''s network, usually charged per gigabyte'
---

:::hook
q: Here's the puzzle. A company wants 1,000 extra computers for tonight's match. How long does it take on the cloud?
options: ["About six weeks, for delivery and set-up", "A few minutes", "About one day"]
answer: 1
right: Right. A cloud provider already owns huge numbers of machines and carves them into virtual ones with software, so asking for 1,000 is an API call. They typically start within minutes. (Limits and quotas can still slow a very large request. [Unverified for any one provider])
wrong: That is how long it takes to buy and install real computers. The cloud works differently: the machines already exist, and you are renting a slice of them by the minute.
:::

## Renting instead of owning {lvl=1 id=s-rent label="Foundations"}

Think of a wedding. You could build a banquet hall and keep it forever, or you could book one for a Saturday. If you marry once, booking is obviously better. If you host a wedding every single day, building might win.

A company's computers work the same way. Buying servers means paying up front, waiting weeks, and keeping them switched on for the worst day of the year. **Cloud computing** means renting servers, disks and network from a provider's giant data centres, and paying by the minute or by the amount used.

Two things make this possible. First, the provider owns so many machines that your request is a tiny part of its spare capacity. Second, software slices each real machine into several **virtual machines**, each behaving like a separate computer. When you stop renting one, the slice goes back to the pool.

:::qc lvl=1
q: A shop needs 50 computers for 3 days a year and 2 the rest of the time. Rent or own?
options: ["Own 50, so they are always ready", "Rent: pay for 2 normally and 50 for those 3 days", "Own 2 and tell customers to wait"]
answer: 1
right: Right. Use is very spiky, so paying only for the peak days beats owning 48 machines that sit idle for 362 days.
wrong: Owning 50 means 48 machines idle almost all year. When use is spiky, renting the peak is cheaper.
:::

## Four ways to rent {lvl=1 id=s-four label="Foundations"}

You can rent at different heights. The higher you go, the less you manage and the less you control. It is like food: buy groceries and cook (you do everything), order a meal kit, order a cooked thali, or eat at a restaurant.

| Style | You bring | Provider manages | Example |
|---|---|---|---|
| **IaaS** (raw machines) | Operating system, runtime, app, data | Building, hardware, virtualisation | A rented virtual machine |
| **PaaS** (platform) | App code and data | Everything below: OS, runtime, scaling | A service that runs your web app from a git push |
| **SaaS** (software) | Your own content and settings | Everything | Gmail, Zoom |
| **Serverless** (functions) | A single function | Servers, scaling, even start-up | Code that runs only when a request arrives |

**Serverless** is a misleading name: servers exist, you just never see them. You write a function, upload it, and are billed per call and per fraction of a second it runs. If nobody calls it, it costs nothing.

```python
def handler(event):          # the whole "server" is this function
    name = event.get("name", "friend")
    return {"status": 200, "body": f"Hello, {name}"}
```

The catch: a function that has not run for a while must be started first (a **cold start**, often tens to hundreds of milliseconds [Unverified, varies widely]), and long-running or steady work is usually cheaper on a plain machine.

:::qc lvl=1
q: You upload only your code and the provider handles the operating system, patching and scaling. Which style is this?
options: ["IaaS", "PaaS", "SaaS"]
answer: 1
right: Right. You hand over the app; the platform runs it. With IaaS you would still patch the operating system yourself.
wrong: Look at who patches the operating system. In IaaS you do; in SaaS you do not even own the code.
:::

## Regions and zones {lvl=2 id=s-regions label="SDE-1"}

A provider divides the world into **regions**, such as Mumbai or Frankfurt, each holding several **availability zones**: separate data centres with their own power, cooling and network, a few to tens of kilometres apart [Unverified: exact distances vary]. A fire or power cut in one zone should not touch the others.

:::figure caption="One region, three zones. Copies in different zones survive a zone failure; a region failure needs copies in another region."
<svg viewBox="0 0 320 170" role="img" aria-label="A region box containing three zone boxes each with a server, and a load balancer above">
<rect x="10" y="30" width="300" height="130" rx="10" style="fill:none;stroke:var(--muted);stroke-dasharray:5 4"/>
<text x="18" y="46" style="font-size:11px;fill:var(--muted)">Region: Mumbai</text>
<rect x="24" y="62" width="84" height="84" rx="8" style="fill:color-mix(in srgb,var(--mat) 10%,var(--surface));stroke:var(--mat)"/>
<rect x="118" y="62" width="84" height="84" rx="8" style="fill:color-mix(in srgb,var(--mat) 10%,var(--surface));stroke:var(--mat)"/>
<rect x="212" y="62" width="84" height="84" rx="8" style="fill:color-mix(in srgb,var(--bad) 10%,var(--surface));stroke:var(--bad)"/>
<text x="40" y="80" style="font-size:10px;fill:var(--ink)">Zone A</text><text x="134" y="80" style="font-size:10px;fill:var(--ink)">Zone B</text><text x="228" y="80" style="font-size:10px;fill:var(--ink)">Zone C (down)</text>
<rect x="44" y="96" width="44" height="30" rx="4" style="fill:var(--mat)"/><rect x="138" y="96" width="44" height="30" rx="4" style="fill:var(--mat)"/><rect x="232" y="96" width="44" height="30" rx="4" style="fill:var(--muted)"/>
<text x="150" y="20" style="font-size:11px;fill:var(--ink)">Load balancer</text>
<path d="M160 24 L66 94 M160 24 L160 94" style="stroke:var(--ink);stroke-width:1.3;fill:none"/><path d="M160 24 L254 94" style="stroke:var(--bad);stroke-width:1.3;fill:none;stroke-dasharray:4 4"/>
</svg>
:::

Why more than one region?

- **Speed.** Light in fibre travels about 200,000 km/s. Mumbai to the US east coast is roughly 13,000 km, so even a perfect cable needs about 65 ms one way and 130 ms for a round trip. Putting servers near users is the only way to beat that. (See CDNs and latency.)
- **Law.** Some data must stay inside a country.
- **Disasters.** A whole region can fail from a bad software update or a power-grid event.

The price of using more places: copies must be kept in step (see Replication), and data crossing zones or regions is often billed.

:::qc lvl=2
q: Your service runs three copies, all in one zone. What does this protect you from?
options: ["A whole zone going down", "One machine failing", "A region-wide outage"]
answer: 1
right: Right. Three copies cover single-machine failures only. For a zone failure, spread them over zones; for a region failure, spread over regions.
wrong: All three share the same zone's power and network, so a zone failure takes all of them down together.
:::

## Three kinds of storage {lvl=2 id=s-storage label="SDE-1"}

"Where do I keep data?" has three answers, because the jobs differ.

| Kind | Looks like | Strong at | Weak at | Typical use |
|---|---|---|---|---|
| **Object** | A bucket of named blobs, fetched over HTTP | Huge, cheap, very durable | Editing part of a file; low latency | Photos, videos, backups, logs |
| **Block** | A raw disk attached to one machine | Speed; databases need it | Sharing; it lives with one machine | Database disks, boot drives |
| **File** | A shared folder many machines mount | Many machines reading the same tree | Cost and scale limits | Shared documents, content management |

Providers advertise **durability** of "eleven nines" for object storage, meaning 99.999999999% [a public marketing claim]. Read it as: store ten million objects and expect to lose about one every 10,000 years, because $10^7 \times 10^{-11} = 10^{-4}$ per year. The trick is simply many copies in several places.

```bash
aws s3 cp photo.jpg s3://my-bucket/2026/photo.jpg   # upload one object
```

Object storage has no folders; `2026/photo.jpg` is just a long name. That flat design is what lets it grow without limit.

:::qc lvl=2
q: A database server needs a fast disk that only it uses. Which storage?
options: ["Object", "Block", "File"]
answer: 1
right: Right. Block storage behaves like a local disk. Object storage is too slow per read, and a shared file system is unnecessary for one machine.
wrong: Databases do many small reads and writes with low delay, and have one owner. Which kind behaves like a plain disk?
:::

## Thinking in pay-per-use {lvl=3 id=s-cost label="SDE-2"}

On the cloud, a design decision is also a purchase decision. The bill is rate times use, summed over everything. All prices below are **illustrative round numbers**, not any provider's real prices.

**Worked example.** A small machine costs 0.10 dollars per hour. A month has about 730 hours.

- Always on: $0.10 \times 730 = 73$ dollars.
- Needed only 8 hours a day, switched off otherwise: $0.10 \times 8 \times 30 = 24$ dollars.
- A serverless function at 0.20 dollars per million calls plus compute: for a few thousand calls a day it costs cents; for 500 calls a second all month it can cost far more than one machine. The break-even point is where steady use makes renting by the call dearer than a machine you keep busy.

Real bills also include things beginners forget:

- **Egress**: data leaving the cloud is charged per gigabyte, while data coming in is usually free. A video service can pay more for bandwidth than for machines.
- **Idle resources**: forgotten test machines, unattached disks, old snapshots.
- **Purchase options**: on-demand (flexible, dearest), reserved or committed (promise one to three years, large discount), and spot (spare capacity at a deep discount that can be taken away at short notice) [Unverified: discount sizes vary].

A practical habit: tag every resource with team and purpose, set a budget alert, and review the top three line items each month.

:::qc lvl=3
q: A machine costs 0.10 dollars per hour. It is needed 10 hours a day, 30 days a month. If you switch it off the rest of the time, the monthly cost is closest to:
options: ["30 dollars", "73 dollars", "300 dollars"]
answer: 0
right: Right. 0.10 x 10 x 30 = 30 dollars, against 73 if left on all month.
wrong: Multiply rate x hours used: 0.10 x (10 hours x 30 days).
:::

## Who secures what {lvl=3 id=s-shared label="SDE-2"}

The **shared responsibility model** splits security like a rented flat. The landlord looks after the building, the wiring and the main gate. You look after your own door key and who you let in. Move up the IaaS-to-SaaS ladder and the landlord does more, but some duties never leave you.

| | IaaS | PaaS | SaaS |
|---|---|---|---|
| Physical data centre, hardware | Provider | Provider | Provider |
| Operating system patches | **You** | Provider | Provider |
| Your code and its bugs | **You** | **You** | Provider |
| Your data, who may open it | **You** | **You** | **You** |
| Passwords, keys, access rules | **You** | **You** | **You** |

Many cloud breaches are not exotic hacks: a storage bucket set to "public", a password pasted into a public code repository, or an account with far more permissions than its job needs [Inference: commonly reported pattern, no figure claimed]. The defences are plain: **least privilege** (give each person and program only the access its job needs), multi-factor login, no secrets in code, and encryption of stored data. See Common attacks and defences.

## Designing for failure {lvl=4 id=s-design label="SDE-3"}

The cloud's promise is not that machines never fail. Hardware fails constantly at scale; the promise is that you can build so that failures do not matter.

**Availability by copies.** If one copy is up a fraction $a$ of the time, $k$ independent copies are all down at once with probability $(1-a)^k$, so the system is up with

$$A = 1 - (1-a)^k$$

Read it as: the chance everything is broken at the same moment shrinks by a factor $(1-a)$ for each extra copy. With $a = 0.999$ ("three nines", about 8.8 hours of downtime a year) and $k = 2$: $A = 1 - 10^{-6} = 0.999999$, about 32 seconds a year.

That arithmetic assumes **independence**, and real systems break it: a shared database, a shared configuration push, one expired certificate, or one human typing the wrong command can down every zone together. A good design asks, for each component, "what else fails when this does?" and limits the **blast radius**: how much a single mistake can touch.

Other SDE-3 decisions:

- **Active-active versus active-passive.** All regions serving traffic (fast failover, hard data consistency) versus a standby region (simple, slower to take over).
- **Autoscaling.** Add machines when load or queue depth crosses a threshold. Machines take minutes to start, so scale before the peak when you can predict it (a sale, a match) and keep a floor.
- **Unit economics.** Track cost per order or per active user, not just the total, so that growth cannot hide waste.
- **Lock-in.** Managed services save engineering time and tie you to one provider; open standards (containers, standard databases) keep a way out. Neither is free. [Inference: trade-off, no universal answer]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The cloud is rented computing, storage and networking, billed by use, with machines available in minutes. {lvl=1}
2. IaaS, PaaS, SaaS and serverless differ in how much you manage; higher means less work and less control. {lvl=1}
3. A region is a place; zones are separate data centres inside it. Spread copies across zones to survive a data-centre failure. {lvl=2}
4. Object storage is cheap and vast, block is a fast private disk, file is a shared folder. {lvl=2}
5. Cost is rate times use; idle resources and egress are the usual surprises. {lvl=3}
6. The provider secures the platform; you always secure your data and access. {lvl=3}
7. $k$ independent copies give $A = 1-(1-a)^k$, but only if one cause cannot break them all. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Serverless" still runs on servers; cold starts and per-call pricing make it wrong for steady heavy work. {lvl=1}
- Several copies in one zone only protect against a single-machine failure. {lvl=2}
- Forgotten machines, disks and snapshots bill silently; tag everything and set a budget alert. {lvl=3}
- A public bucket or a leaked key is your responsibility, not the provider's. {lvl=3}
- Availability maths assumes independent failures; look for the shared dependency that breaks the assumption. {lvl=4}
- All prices in this lesson are illustrative; check the provider's current price list before deciding. {lvl=3}
:::
