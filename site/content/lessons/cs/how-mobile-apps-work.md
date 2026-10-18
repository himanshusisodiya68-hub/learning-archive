---
title: How mobile apps work
summary: Why your messages are still there when the train enters a tunnel, and what a phone does to keep an app fast, honest and alive.
ncert: []
up_to: SDE-3
builds_on: [How the internet works, Processes and threads]
notes_prompt: Explain to a friend why a chat app can show your message instantly in a tunnel and still deliver it later, without losing it.
margin:
  - kind: history
    title: History
    text: "The iPhone App Store opened in July 2008 and Google's Android store followed soon after. Before that, phone software mostly came installed by the maker. [Unverified: exact dates]"
  - kind: tip
    title: Interview favourite
    text: '"Design the offline mode of a notes or chat app" is a common mobile round. The answer is almost always the same shape: write locally first, queue the change, sync later.'
  - kind: olympiad
    title: Design link
    text: An app version, once released, lives on millions of phones for years. Your server must keep serving the oldest version still in use, so API changes must be additive.
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 5 Replication: multi-leader and offline clients; Ch. 4 Encoding and Evolution: compatibility [Unverified chapter numbers]" }
  - { title: "Official Android and Apple developer guides", ref: "App lifecycle, background execution and push notification overviews (read online, not copied)" }
cards:
  - { front: "Why must an app never do slow work on the UI thread?", back: "The UI thread draws the screen about 60 times a second, roughly 16 ms per frame. Slow work there makes taps lag and frames drop (jank) or triggers a freeze warning. Do network and disk work on a background thread and hand back the result." }
  - { front: "What are the three broad states of a mobile app?", back: "Foreground (visible and interactive), background (hidden, little time to run), and killed (the OS reclaimed its memory). Any app can be killed in the background without warning, so save state early." }
  - { front: "What does offline-first mean?", back: "The app reads and writes a local database first and syncs with the server when the network allows. The screen never waits on the network to respond to the user." }
  - { front: "How does a push notification reach a phone?", back: "Your server sends the message to the platform push service (Apple's or Google's), which keeps one shared connection open to the phone and delivers it. Your server never connects to the phone directly." }
  - { front: "Why can't you fix a bad app release instantly?", back: "Users update at their own pace and stores review releases, so old versions stay in use for months. Use staged rollouts, server-side feature flags and backward-compatible APIs." }
  - { front: "Native vs web app in one line?", back: "Native uses the platform's own tools: best speed and device access, one codebase per platform. Web runs in a browser: one codebase and instant updates, but less device access." }
core:
  idea: 'A mobile app is a guest on a small, battery-powered computer that the operating system controls: it may pause or kill the app at any moment, so a good app keeps the screen responsive, saves its state, and treats the network as unreliable by design.'
  formulas:
    - tex: '\text{frame budget} = \dfrac{1000\ \text{ms}}{\text{frames per second}}'
      label: 'About 16.7 ms at 60 frames per second'
    - tex: '\text{transfer time} = \dfrac{\text{size in bits}}{\text{speed in bits per second}}'
      label: 'Why big uploads on a weak signal take long'
  conditions:
    - 'The OS, not the app, decides when the app runs, pauses and dies'
    - 'The UI thread stays free: work that can take longer than one frame goes elsewhere'
    - 'The network may be slow, expensive, or gone; the phone may be low on battery'
    - 'Each release stays in the wild for months, so the server supports old versions'
  sign: 'The commonest mistake is assuming the app keeps running in the background and that the network is always there. Neither is promised.'
outcomes:
  - 'Explain why a phone app is different from a program on a laptop'
  - 'Describe the app lifecycle and why state must be saved early'
  - 'Explain the UI thread and what causes jank'
  - 'Sketch an offline-first design with a local database and a sync queue'
  - 'Trace a push notification from server to screen and explain release constraints'
opener:
  story: |
    You are on a Mumbai local, and the train slides into a tunnel. You open WhatsApp, read yesterday's chats, and type a reply. A small clock appears next to it. Two minutes later the train comes out into daylight, and the clock quietly turns into a tick.

    Pause there. You had no internet, yet the app showed your old messages, accepted your new one, and did not lose it. When you switched to the maps app and back, your half-typed message was still there too.

    A laptop program would just say "no connection". Why does a phone app behave so differently, and what rules is it secretly following?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A phone saves a message locally with a clock, then sends it to the cloud when the signal returns"><rect x="20" y="24" width="92" height="188" rx="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="32" y="60" width="68" height="20" rx="5" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"/><text x="38" y="74" style="font-size:10px;fill:var(--ink)">on my way</text><circle cx="90" cy="70" r="5" style="fill:none;stroke:var(--muted);stroke-width:1.5"/><text x="30" y="46" style="font-size:9px;fill:var(--muted)">Chat</text><rect x="30" y="156" width="72" height="40" rx="5" style="fill:none;stroke:var(--rule)"/><text x="36" y="172" style="font-size:9px;fill:var(--ink)">local database</text><text x="36" y="186" style="font-size:9px;fill:var(--muted)">saved first</text><path d="M114 100 L196 100" style="fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:5 4"/><text x="128" y="92" style="font-size:9px;fill:var(--bad)">tunnel: no signal</text><path d="M114 150 C150 150 170 130 214 130" style="fill:none;stroke:var(--c);stroke-width:2"/><text x="132" y="170" style="font-size:9px;fill:var(--c)">later: sync</text><path d="M214 78 a14 14 0 0 1 0 -20 a20 20 0 0 1 38 -8 a16 16 0 0 1 22 14 a14 14 0 0 1 -6 14 z" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:1.5"/><text x="226" y="70" style="font-size:10px;fill:var(--ink)">server</text><rect x="204" y="110" width="80" height="48" rx="6" style="fill:var(--surface);stroke:var(--ink)"/><text x="212" y="130" style="font-size:9px;fill:var(--ink)">queue: 1 message</text><text x="212" y="146" style="font-size:9px;fill:var(--muted)">tick when sent</text></svg>'
life:
  - 'WhatsApp and Telegram show your old chats and queue new messages when you have no signal.'
  - 'UPI apps such as PhonePe and Google Pay stay responsive on a weak network and show "pending" instead of freezing.'
  - 'Maps downloaded for offline use, and music downloaded to play on a flight, are offline-first in action.'
  - 'Delivery apps push "your order is arriving" even when the app is closed.'
  - 'Your phone gets warm and the battery drains when an app wakes up too often in the background.'
models:
  - name: 'Local first, sync later'
    text: 'Do the thing you can do right now, record it, and reconcile with the outside world when it becomes possible. A shopkeeper who writes a credit entry in a notebook and settles the account at month end works the same way.'
  - name: 'You are a guest, not the owner'
    text: 'Whenever you depend on a platform (an OS, a marketplace, a landlord), your plans must survive its rules and its sudden changes. Design for being interrupted.'
  - name: 'Plan for the oldest version in the field'
    text: 'Anything you ship cannot be recalled instantly: books, bridges, apps. Make changes that old copies can still live with.'
links:
  - leaf: 'cs/how-the-internet-works'
    name: 'How the internet works'
    same: 'Every app request still travels through the same layers: DNS, TCP, HTTP, a server and back.'
    differs: 'A phone moves between networks, loses signal and pays per byte, so the app must expect failures that a desktop on fibre rarely sees.'
  - leaf: 'cs/processes-and-threads'
    name: 'Processes and threads'
    same: 'The UI thread is one thread among several; slow work goes to others so the screen keeps running.'
    differs: 'On a phone the OS may also freeze or kill the whole process in the background to save memory and battery.'
  - leaf: 'phy/heating-effect-and-power'
    name: 'Heating effect and power'
    same: 'Battery drain is energy used per second, power; radios, screens and processors all turn battery charge into heat.'
    differs: 'On a phone, the cost depends on how often the radio wakes up, not only how much data moves.'
next:
  q: 'You have just built the same app twice, once for Android in Kotlin and once for iPhone in Swift, and your team is half the size it needs to be. Could one codebase serve both, and what would you give up?'
  leaf: 'cs/cross-platform-apps'
  name: 'Native vs cross-platform apps'
symbols:
  - s: 'UI thread'
    means: 'the one thread that draws the screen and handles taps (no unit)'
  - s: 'ms'
    means: 'millisecond, one thousandth of a second'
  - s: 'fps'
    means: 'frames per second: how many times the screen is redrawn each second'
  - s: 'Mbps'
    means: 'megabits per second: network speed (8 bits make 1 byte)'
  - s: 'API'
    means: 'the set of requests an app can send to the server (a contract)'
  - s: 'sync'
    means: 'bringing the local copy and the server copy to agree'
---

:::hook
q: Here is the puzzle. In the tunnel, where did your unsent message live?
options: ["Nowhere: it waited in the text box", "On your phone, saved and queued for later", "On the server, because the app sent it before the signal dropped"]
answer: 1
right: Right. The app wrote it to a small database on the phone, marked it "not sent yet", and a background job sent it when the network returned. The clock became a tick when the server confirmed it. (WhatsApp's exact internals are not public; this is the standard pattern. [Inference])
wrong: With no signal, nothing can reach the server, and a text box does not survive the app being closed. The message has to be written somewhere that survives. Where does a phone keep things safely?
:::

## A guest on a small computer {lvl=1 id=s-guest label="Foundations"}

A phone is a real computer, but a very short-tempered one. It runs on a battery that must last a day, it has far less memory than a laptop, and it is the one device that moves: from home Wi-Fi to a crowded 4G tower to a tunnel with nothing.

So the operating system (Android or iOS) acts like a strict landlord. Only one app is in front of you at a time. The OS decides how much memory an app gets, when it may use the radio, and when to throw it out to make room. An app is a **guest**, and a good guest travels light and leaves its things in order.

There are two ways to build an app. A **native** app is written with the platform's own tools (Kotlin for Android, Swift for iPhone), installed from a store, and can use everything the phone offers: camera, sensors, notifications, the fastest drawing. A **web app** is a website that runs in the browser: one codebase, no store, instant updates, but less access to the device and usually a little less smooth. Most of this lesson is about what every app, however built, must respect.

:::qc lvl=1
q: Why does the operating system close apps you are not looking at?
options: ["To make the phone look tidy", "To free memory and battery for the app you are using", "Because apps are only allowed to run for one hour"]
answer: 1
right: Right. Memory and battery are scarce, so the OS reclaims them from apps you are not using.
wrong: Think about what a small phone has least of while many apps are installed.
:::

## The lifecycle: foreground, background, killed {lvl=2 id=s-lifecycle label="SDE-1"}

An app is always in one of three broad states:

| State | What it means | What the app may do |
|---|---|---|
| **Foreground** | Visible, you are using it | Run freely, draw, use the network |
| **Background** | Hidden behind another app | Very little time; short tasks only |
| **Killed** | The OS reclaimed its memory | Nothing; it starts fresh next time |

The trap is that the move from background to killed comes **with no warning**. The OS may do it at any time, because it needs memory for the app now in front. So an app saves what matters (a half-written message, the scroll position, a form) as soon as the user leaves, not "when it closes", because there may be no close.

Both platforms give you a hook for this moment. On Android it is `onStop`, on iOS the scene moving to the background. A tiny sketch in Kotlin:

```kotlin
override fun onStop() {
    super.onStop()
    draftDao.save(messageBox.text.toString())   // survive being killed
}
```

Read it as: "when the screen is no longer visible, write the draft to the local database". When the user returns, the app restores it, and nobody can tell that the process was killed in between.

:::figure caption="The three states. Arrows into 'killed' can happen at any moment while in the background."
<svg viewBox="0 0 320 130" role="img" aria-label="App states: foreground to background to killed, and back"><rect x="10" y="40" width="80" height="40" rx="8" class="pen"/><text x="22" y="64" style="font-size:12px;fill:var(--ink)">Foreground</text><rect x="120" y="40" width="80" height="40" rx="8" class="pen"/><text x="130" y="64" style="font-size:12px;fill:var(--ink)">Background</text><rect x="230" y="40" width="80" height="40" rx="8" class="pen"/><text x="252" y="64" style="font-size:12px;fill:var(--ink)">Killed</text><path d="M90 52 L120 52" class="ray"/><path d="M200 52 L230 52" class="ray"/><path d="M120 72 L90 72" class="faint"/><path d="M270 80 C270 112 50 112 50 80" class="faint"/><text x="100" y="30" style="font-size:10px;fill:var(--muted)">user leaves</text><text x="196" y="30" style="font-size:10px;fill:var(--muted)">OS needs memory</text><text x="110" y="124" style="font-size:10px;fill:var(--muted)">user comes back: restore saved state</text></svg>
:::

:::qc lvl=2
q: When is the safest time to save a user's half-written draft?
options: ["When the app closes", "As soon as the app goes to the background", "Only when the user taps Save"]
answer: 1
right: Right. The app may be killed straight from the background with no close event, so save before that point.
wrong: Is there always a "close" event for an app that the OS can silently remove?
:::

## The UI thread and the 16-millisecond rule {lvl=2 id=s-ui label="SDE-1"}

The screen is redrawn about 60 times a second. One second is 1000 milliseconds, so each frame has roughly $1000 / 60 \approx 16.7$ ms to be prepared. Read it as: if preparing the next picture takes longer than about 17 thousandths of a second, a frame is missed and you see a stutter, called **jank**. Many new phones draw 120 times a second, leaving about 8 ms.

All the drawing and tap handling happens on one thread, the **UI thread** (also called the main thread). So the rule is simple: **never do slow work on it**. A network call that takes 300 ms would freeze the screen for 18 frames; a long disk read does the same. Both platforms may even stop your app and show "not responding" if the UI thread is blocked for a few seconds.

The pattern is always: start the slow work on another thread, return to the UI thread only to show the result.

```ts
// the same shape in React Native / JavaScript
async function loadChats() {
  setLoading(true);                 // UI thread: show a spinner at once
  const chats = await fetchChats(); // network waits off the UI thread
  setChats(chats);                  // back to UI: draw the result
}
```

Read it as: "show a spinner now, wait for the data without freezing, then draw it". Most long lists are also **recycled**: only the dozen rows on screen exist as views, and they are refilled as you scroll, so ten thousand rows cost the same as twelve.

:::qc lvl=2
q: A screen runs at 120 frames per second. About how long does the app have to prepare each frame?
options: ["About 8 ms", "About 17 ms", "About 120 ms"]
answer: 0
right: Right. 1000 ms divided by 120 is about 8.3 ms.
wrong: Divide one second (1000 ms) by the number of frames drawn in it.
:::

## Offline-first: the network is a bonus {lvl=2 id=s-offline label="SDE-1"}

Back in the tunnel. The reason the message did not vanish is a design choice called **offline-first**: the screen talks to a **local database** on the phone, never straight to the network. The network is a helper that keeps the local copy in step with the server.

- **Reading:** show what is in the local database immediately, then refresh it in the background and update the screen if something changed.
- **Writing:** save the change locally with a status such as `pending`, show it at once (the clock), and add it to a queue. A background job sends the queue when a connection exists and marks each item `sent` (the tick) when the server confirms.

The result feels instant, because the user never waits for the network, and it survives bad signal, which in India or on a train is the normal case rather than the exception. Phones ship with a small database built in (SQLite on both platforms) for exactly this.

One detail matters a lot: a retry must not send the same payment or message twice. The app gives each action a unique id, and the server remembers ids it has already seen, so a repeated request is harmless. That property is called **idempotency**, and every payment app relies on it.

:::qc lvl=2
q: In an offline-first app, what does the screen read from?
options: ["Directly from the server", "The local database", "A file the user picks"]
answer: 1
right: Right. The local database is the single source for the screen; sync keeps it up to date.
wrong: If the screen read from the server, what would it show in the tunnel?
:::

## Push, stores, battery and networks {lvl=3 id=s-push label="SDE-2"}

**Push notifications.** How does "your order has arrived" reach a phone whose app is closed? Not by your server calling the phone: phones sit behind changing networks and cannot be dialled. Instead, the OS keeps **one** shared connection open to the platform's push service (Apple's or Google's). Your server sends a message to that service addressed to a device **token**, and the service pushes it down the existing connection. This is why one connection per phone serves all apps, and saves battery. A push is a hint, not a guarantee: it may be delayed, dropped or collapsed, so important state should also be fetched when the app opens.

**App stores.** A store reviews and signs your app, then delivers it. This gives users trust, but also means a release takes hours to days to approve, you cannot force everyone to update, and a bug lives on for as long as people keep the old version. Hence **staged rollout** (release to 1%, watch crash reports, then widen), **feature flags** (switch features on or off from the server), and a **minimum supported version** that the server can enforce.

**Battery.** The biggest drains are the screen, the processor, and above all the **radio**. Waking the radio costs a burst of energy that lingers after the data is sent, so ten tiny requests spread over ten minutes cost far more than one request carrying ten items. Good apps **batch** work and let the OS schedule it, instead of polling the server every few seconds.

**Network.** Treat the network as slow, costly and breakable: send small, compressed responses, load images at the size the screen needs, cache what you have already fetched, retry with growing waits, and show progress. A 5 MB photo is 40 million bits; at 2 Mbps that takes $40/2 = 20$ seconds, longer than most users will wait.

:::qc lvl=3
q: Why is one push connection shared by all apps on the phone?
options: ["It saves battery, since only one radio connection is kept alive", "Apps are not allowed to use the internet", "It makes messages arrive in order"]
answer: 0
right: Right. Keeping many idle connections alive would drain the battery; the OS keeps one and delivers for everyone.
wrong: Think about the cost of the radio staying busy for twenty apps at once.
:::

## Native or web: how to choose {lvl=3 id=s-choose label="SDE-2"}

| | Native (Kotlin, Swift) | Web or installable web app |
|---|---|---|
| Speed and smoothness | Best | Good for most screens |
| Device features (camera, Bluetooth, background work) | Full | Partial, varies by browser |
| Release | Store review, user must update | Instant, everyone at once |
| Teams and code | One per platform | One shared |

Choose by what the product needs: a camera-heavy or game-like app wants native; a form-and-list app often does well on the web. The next lesson looks at the middle path.

## Sync, conflicts and shipping safely {lvl=4 id=s-sync label="SDE-3"}

Offline-first brings a hard question: you edit a note on the phone in a tunnel while your tablet edits the same note. When both sync, whose version wins? The standard options, from simplest to richest:

1. **Last write wins**, using timestamps. Easy, but silently drops one edit, and phone clocks can be wrong.
2. **Field-level merge**: if you changed the title and the tablet changed the body, keep both.
3. **Keep both and ask**, as a version-control tool does with a merge conflict.
4. **Conflict-free data types (CRDTs)**: data structures designed so that edits made in any order always merge to the same result. Used for shared text editing; the cost is complexity and extra stored history.

Choose based on what a lost edit costs. A like count can lose an update; a bank balance cannot, so money stays on the server and the phone only asks it for changes.

**Shipping safely.** Because old app versions never disappear, API changes must be **additive**: add fields, never rename or remove them. Pair this with a server-enforced minimum version for emergencies, remote feature flags to turn a faulty feature off without a release, and crash reporting watched during every staged rollout. [Inference: this is common industry practice, summarised from general knowledge, not from any one company.]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A phone app is a guest: the OS controls memory, battery and when the app runs, pauses or dies. {lvl=1}
2. An app can be killed from the background with no warning, so save state as soon as the user leaves. {lvl=2}
3. The UI thread gets about 16.7 ms per frame at 60 fps; slow work goes to another thread. {lvl=2}
4. Offline-first: the screen reads the local database; a queue syncs changes when the network allows. {lvl=2}
5. Push uses one OS-wide connection to Apple's or Google's service; it is a hint, not a guarantee. {lvl=3}
6. Releases cannot be recalled, so use staged rollouts, flags and additive API changes. {lvl=3}
7. Conflicts between offline edits need a deliberate rule, from last-write-wins up to CRDTs. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Assuming the app keeps running in the background, or that the network is always on. Neither is promised. {lvl=1}
- Doing a network or disk call on the UI thread; the screen freezes. {lvl=2}
- Saving only "on close": there may be no close event. {lvl=2}
- Retrying a request with no unique id, so a payment or message is sent twice. {lvl=3}
- Polling the server every few seconds; it drains the battery. Batch, or use push. {lvl=3}
- Renaming or removing an API field: every old app version breaks. {lvl=3}
- Relying on timestamps from phone clocks to decide whose edit is newer. {lvl=4}
:::
