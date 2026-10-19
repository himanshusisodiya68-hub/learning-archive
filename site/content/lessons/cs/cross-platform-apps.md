---
title: Native vs cross-platform apps
summary: Two phones, one team, one deadline. How React Native, Flutter and web apps let one codebase serve both, and what you pay for it.
ncert: []
up_to: SDE-3
builds_on: [How mobile apps work, Components and frameworks (React), JavaScript in the browser]
notes_prompt: Explain to a friend why one codebase for two phone platforms saves money, and name one thing it can cost.
margin:
  - kind: history
    title: History
    text: "Facebook announced React Native in 2015 and Google released Flutter publicly in 2017-2018. Before them, apps built on web views inside a native shell (Cordova, PhoneGap) were the popular shortcut. [Unverified: exact years]"
  - kind: tip
    title: Interview favourite
    text: '"Would you build this app native or cross-platform?" is a judgement question. A strong answer names the product (camera, maps, games, forms), the team and the timeline, then picks and states what is being given up.'
  - kind: olympiad
    title: Design link
    text: Cross-platform tools add a layer between your code and the OS. Every layer is a trade, hiding detail in return for a cost; this shows up again in compilers, virtual machines and cloud platforms.
books:
  - { title: "Official React Native, Flutter and web.dev (PWA) documentation", ref: "Architecture overviews (read online, not copied)" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 4 Encoding and Evolution: compatibility between versions [Unverified chapter number]" }
cards:
  - { front: "What does cross-platform mean?", back: "One codebase that runs on more than one platform (Android, iOS, sometimes web and desktop), instead of one separate app per platform." }
  - { front: "How does React Native draw the screen?", back: "You write components in JavaScript or TypeScript; the framework maps them to the platform's real native views (buttons, lists), so it looks and scrolls like a native app." }
  - { front: "How does Flutter draw the screen?", back: "Flutter (language: Dart) draws every pixel itself with its own engine instead of using the platform's views. The look is identical on every device, but it is not the system's own look." }
  - { front: "What is a PWA?", back: "A progressive web app: a website that can be installed to the home screen, work offline through a service worker, and send notifications. No store needed, but fewer device features." }
  - { front: "When is native worth it?", back: "When the product is demanding of the hardware or the newest platform features: heavy camera or AR, games, tight battery or background work, or the very smoothest animations." }
  - { front: "Biggest hidden cost of cross-platform?", back: "Platform differences leak through: you still need native knowledge for plugins, new OS features, bugs and store rules, and you depend on the framework's updates." }
core:
  idea: 'Cross-platform tools trade some platform depth for one shared codebase and a smaller team. The right choice depends on how much the product needs the hardware and the latest platform features, versus how much speed of delivery and consistency matter.'
  formulas:
    - tex: '\text{cost}_{\text{native}} \approx n \times \text{one app}'
      label: 'One app per platform: n platforms cost about n times the work'
    - tex: '\text{cost}_{\text{shared}} \approx \text{one app} + \text{glue}'
      label: 'Shared codebase: one app plus the platform-specific glue'
  conditions:
    - 'The app is mostly screens, lists, forms and network calls (the sweet spot for shared code)'
    - 'The team can afford the learning curve of one framework and its ecosystem'
    - 'The framework supports the platform features you need now, or can be extended with native code'
    - 'You accept depending on the framework''s roadmap'
  sign: 'The mistake is to choose for the demo, not the second year: the cost of a missing feature or a framework upgrade arrives after launch.'
outcomes:
  - 'Explain what native, web and cross-platform apps are, and why teams choose each'
  - 'Describe how React Native and Flutter differ in drawing the screen'
  - 'Explain what a PWA can and cannot do'
  - 'Fill in a trade-off table for a given product and choose with reasons'
  - 'Plan escape routes: native modules, shared logic and a migration path'
opener:
  story: |
    A small team in Pune has built a food-ordering app for Android. It is a hit. Now half the customers ask: "Where is the iPhone version?" Building it again, in Swift, means another team, another year of bugs, and every new feature built twice.

    So the founder asks a fair question: "Can't we write it once?" Some of the apps on your own phone are written exactly that way, and you probably could not tell which ones. Others are written twice, once for each platform, by large teams.

    What does "write it once" really mean, and what is the catch? If there were no catch, nobody would write apps twice.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="One shared codebase feeding an Android phone and an iPhone, with a thin layer of platform-specific code"><rect x="100" y="24" width="120" height="52" rx="8" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="124" y="46" style="font-size:12px;fill:var(--ink)">One codebase</text><text x="116" y="64" style="font-size:10px;fill:var(--muted)">screens, rules, data</text><rect x="90" y="104" width="140" height="26" rx="6" style="fill:var(--surface);stroke:var(--rule)"/><text x="104" y="121" style="font-size:10px;fill:var(--ink)">thin native glue layer</text><path d="M130 76 L130 104 M190 76 L190 104" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M120 130 L70 160 M200 130 L250 160" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="30" y="160" width="76" height="54" rx="12" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="44" y="190" style="font-size:11px;fill:var(--ink)">Android</text><rect x="214" y="160" width="76" height="54" rx="12" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="238" y="190" style="font-size:11px;fill:var(--ink)">iPhone</text><text x="112" y="228" style="font-size:10px;fill:var(--muted)">what do we give up?</text></svg>'
life:
  - 'Many shopping, banking and food apps in India ship Android and iPhone versions from one shared codebase. [Inference: companies rarely publish this.]'
  - 'Some popular apps are installable websites (PWAs) that you add to the home screen, such as lighter versions of big social apps.'
  - 'Games and camera filters are usually native or use a game engine, because they need every bit of speed.'
  - 'Desktop apps like VS Code are web technology packaged as an app, the same idea on a laptop.'
models:
  - name: 'Every layer is a loan'
    text: 'A layer between you and the machine saves work now and charges interest later: the abstraction hides details until the day you need one. Ask what you will do when the layer cannot do what you need.'
  - name: 'Optimise the scarcest resource'
    text: 'Small teams are short of people and time; big companies are short of polish. Choose the option that spends the resource you have most of, as in any budget.'
  - name: 'Keep an exit'
    text: 'Pick a path you can leave. Keep business rules separate from the screen code so a later rewrite of the front only touches the front.'
links:
  - leaf: 'cs/how-mobile-apps-work'
    name: 'How mobile apps work'
    same: 'Cross-platform apps obey the same lifecycle, UI-thread, offline and push rules; the framework only changes how you write the screens.'
    differs: 'You must also learn how the framework handles those rules, and sometimes reach below it to the platform itself.'
  - leaf: 'cs/frontend-frameworks'
    name: 'Components and frameworks (React)'
    same: 'React Native uses the same component and state ideas as React for the web, so web developers can move across.'
    differs: 'React Native components are native views, not HTML, and there is no browser or CSS cascade.'
  - leaf: 'cs/compilers-and-interpreters'
    name: 'Compilers and interpreters'
    same: 'Both bridge your code to a machine that does not speak your language, hiding details behind a layer.'
    differs: 'A compiler translates once, ahead of time; frameworks like React Native also run a runtime alongside your app that costs startup time and memory.'
next:
  q: 'You have just chosen your tools and built a real screen. A real product needs more: users, data, a server, a login, deployment. What does it take to build the whole thing, front to back, and keep it running?'
  leaf: 'cs/full-stack-project'
  name: 'Building a full-stack app end to end'
symbols:
  - s: 'native'
    means: 'built with the platform''s own language and tools (Kotlin or Java for Android, Swift for iPhone)'
  - s: 'cross-platform'
    means: 'one codebase that runs on several platforms'
  - s: 'PWA'
    means: 'progressive web app: an installable website with offline support'
  - s: 'bridge'
    means: 'the layer through which framework code and platform code talk (no unit)'
  - s: 'n'
    means: 'number of platforms you must support (count)'
---

:::hook
q: Here is the puzzle. A user taps a button in a Flutter app on an iPhone. Who drew that button?
options: ["The iPhone's own button, like in Swift apps", "Flutter's own engine, pixel by pixel", "A web browser hidden inside the app"]
answer: 1
right: Right. Flutter draws everything itself, so the button looks the same on Android and iPhone. React Native does the opposite: it asks the platform for a real native button. (Details of both are in public documentation and can change between versions. [Unverified for current versions])
wrong: Think about the two ideas: ask the platform to draw, or draw it yourself. Which one gives a pixel-identical look on every phone?
:::

## One app or two {lvl=1 id=s-two label="Foundations"}

An iPhone and an Android phone do the same job, but they speak different software languages and have different building blocks. An app built the **native** way is written twice: Kotlin for Android, Swift for iPhone. You get the best speed, the newest features first, and the exact look people expect. You also pay for two teams and two sets of bugs.

The alternative is **cross-platform**: write most of the app once and run it on both. If $n$ platforms each need a full app, native costs about $n$ times the work, while a shared codebase costs about one app plus some **glue**: code that talks to each platform for the few things that differ.

There are three popular ways to do it, and they differ in *who draws the screen*:

- **Web app or PWA**: a website, drawn by the browser.
- **React Native**: you write in JavaScript or TypeScript, and the framework asks the platform to draw real native views.
- **Flutter**: you write in Dart, and the framework draws every pixel itself.

:::qc lvl=1
q: A team has 4 engineers and must ship on Android and iPhone in three months. Which approach most directly reduces the work?
options: ["Two native apps by two sub-teams", "One shared codebase", "Skip testing"]
answer: 1
right: Right. A shared codebase builds the common 90% of screens and rules once, and leaves a small piece for each platform.
wrong: With the same number of engineers, which choice avoids doing the same work twice?
:::

## The three routes {lvl=2 id=s-routes label="SDE-1"}

**Web app and PWA.** A website made to feel like an app. A **service worker** (a small script the browser runs in the background) caches pages so it works offline, and a manifest file lets users install it to the home screen. No store review and updates reach everyone instantly. The limit is device access: some features (Bluetooth, background tasks, some notifications) are weaker or missing, and support differs between iPhone and Android. [Inference: the gaps change over time; check current browser support.]

**React Native.** You write components, as in React, and a bridge in the framework turns them into real native views. Your app inherits the platform's look, scrolling feel and accessibility. Native code is available for anything the framework lacks. A small taste in TypeScript:

```ts
import { Pressable, Text } from 'react-native';

export const OrderButton = ({ onPress }: { onPress: () => void }) => (
  <Pressable onPress={onPress}>
    <Text>Place order</Text>
  </Pressable>
);
```

Read it as: "a tappable area containing the words Place order". It becomes a real native control on each phone.

**Flutter.** It ships its own drawing engine, and screens are built from nested **widgets** in the Dart language. Since nothing depends on the platform's own controls, it looks identical everywhere and animates smoothly, but it does not automatically look like each platform's native style, and the app carries the engine, which adds to the download size.

:::figure caption="Who draws the screen? The further right, the more the framework takes over from the platform."
<svg viewBox="0 0 320 120" role="img" aria-label="Spectrum from native to React Native to Flutter to web, showing how much the framework draws"><path d="M20 60 L300 60" class="axis"/><circle cx="40" cy="60" r="6" class="obj"/><circle cx="130" cy="60" r="6" class="obj"/><circle cx="220" cy="60" r="6" class="obj"/><circle cx="290" cy="60" r="6" class="obj"/><text x="16" y="44" style="font-size:11px;fill:var(--ink)">Native</text><text x="100" y="44" style="font-size:11px;fill:var(--ink)">React Native</text><text x="200" y="44" style="font-size:11px;fill:var(--ink)">Flutter</text><text x="270" y="44" style="font-size:11px;fill:var(--ink)">Web</text><text x="8" y="86" style="font-size:9px;fill:var(--muted)">platform draws</text><text x="100" y="86" style="font-size:9px;fill:var(--muted)">platform draws,</text><text x="100" y="98" style="font-size:9px;fill:var(--muted)">you describe</text><text x="196" y="86" style="font-size:9px;fill:var(--muted)">framework</text><text x="196" y="98" style="font-size:9px;fill:var(--muted)">draws</text><text x="268" y="86" style="font-size:9px;fill:var(--muted)">browser</text><text x="268" y="98" style="font-size:9px;fill:var(--muted)">draws</text></svg>
:::

:::qc lvl=2
q: Which approach draws every pixel with its own engine instead of using the platform's controls?
options: ["React Native", "Flutter", "A PWA"]
answer: 1
right: Right. Flutter's engine draws the whole screen, which gives a consistent look across devices.
wrong: One of these asks the platform for real buttons, one asks the browser, and one does the drawing itself. Which?
:::

## The trade-off table {lvl=3 id=s-table label="SDE-2"}

| | Native | React Native | Flutter | PWA |
|---|---|---|---|---|
| Codebases | One per platform | One shared | One shared | One shared |
| Language | Kotlin, Swift | JavaScript / TypeScript | Dart | JavaScript / TypeScript |
| Look and feel | Exactly the platform's | Platform's own controls | Same everywhere, own style | Web look, adapts |
| Speed on heavy screens | Best | Good, bridge cost on heavy work | Very good | Good for most screens |
| Newest platform features | First, the same day | After a plugin or native module | After a plugin or channel | Often missing or partial |
| Device access | Full | Wide, with plugins | Wide, with plugins | Partial |
| Release | Store review | Store review (plus some over-the-air updates) | Store review | Instant, no store |
| Hiring | Two skill sets | Web developers can move across | Smaller pool | Web developers |
| Main risk | Cost and duplicated bugs | Plugin quality, framework upgrades | Larger app size, Dart ecosystem | Weaker device access |

The table is a general summary of widely stated differences, not a benchmark. [Inference: rankings depend on the app and the framework version; measure your own screens.]

**When is native worth it?** When the product lives on the hardware: heavy camera work, augmented reality, real-time audio, games, tight background and battery control, or when you must use a new platform feature the day it launches. Also when the app is large and mature enough that the company can afford two specialist teams.

**When is shared code the better bet?** For apps mostly made of lists, forms, maps and network calls, with a small team: a marketplace, a booking tool, an internal company app.

:::qc lvl=3
q: A startup is building a form-and-list app for field agents, with 3 engineers and a six-month runway. Which choice is the most sensible default?
options: ["Two native apps", "A cross-platform app, with native code only where needed", "A game engine"]
answer: 1
right: Right. The screens are standard, the team is small, and speed of delivery matters most. Add native modules only for gaps.
wrong: Match the product (forms, lists) and the resources (three people) to the options.
:::

## Escape routes and hidden costs {lvl=3 id=s-hidden label="SDE-2"}

Cross-platform does not remove platform knowledge, it postpones it. Expect these:

- **Plugins**: a third-party plugin for the camera or payments may be unmaintained or buggy on one platform. You may end up writing a **native module**, a small piece of Kotlin or Swift exposed to your shared code.
- **Upgrades**: when a new OS version breaks something, you wait for the framework to fix it, or fix it yourself.
- **Platform rules**: stores, permission prompts and notification behaviour still follow the platform, and the user still expects platform conventions such as the back gesture.
- **Debugging**: a bug can be in your code, the framework or the platform, which is harder to locate.

Plan an exit from the start. Keep **business logic** (prices, rules, data models) apart from **screen code**, and call the network and database through a thin interface. Then a later move, from web app to React Native, or from the framework to native on one hard screen, rewrites screens, not the product.

## Deciding as a team lead {lvl=4 id=s-lead label="SDE-3"}

At SDE-3 level, the question is not "which is best?" but "which risk can we afford?". A short checklist:

1. **Product**: which five features are hardest on the hardware? Prototype those first on the candidate tool.
2. **Team**: who can maintain this in two years? A hiring plan counts as much as a benchmark.
3. **Reversibility**: how costly is leaving? Estimate the rewrite cost, as a fraction of the whole app, if it fails.
4. **Dependencies**: how many plugins carry critical paths such as payments or login?
5. **Release speed**: can bug fixes go out without a store review (web, some over-the-air updates)? Note that store rules limit what may be updated this way. [Unverified: check current store policy]
6. **Measure**: set budgets (startup time, frame rate on a low-end phone) and test on the cheapest phones your users actually carry, not on a flagship.

A **hybrid** is also common: a native shell for the hard screens (camera, scanner), and shared code for the rest. Decisions at this level are written down with the reasons, so the next team understands them, a habit that the interviews pillar returns to.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Native means one app per platform; cross-platform shares most code across platforms at some cost. {lvl=1}
2. The routes differ in who draws the screen: the platform (native, React Native), the framework (Flutter) or the browser (web). {lvl=2}
3. A PWA is an installable website with offline support; no store, but fewer device features. {lvl=2}
4. Use the trade-off table: codebase, look, speed, newest features, device access, release, hiring, risk. {lvl=3}
5. Native is worth it when the product needs the hardware or the newest features on day one. {lvl=3}
6. Keep business logic apart from screen code, and be ready to write a native module. {lvl=3}
7. Decide by risk and reversibility, prototype the hardest screens, test on cheap phones. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Choosing a tool because it is trendy, without prototyping the hardest screen. {lvl=1}
- Assuming "write once" means "no platform knowledge needed". {lvl=2}
- Testing only on a flagship phone, while users hold cheap ones with less memory. {lvl=2}
- Relying on one unmaintained plugin for payments or login. {lvl=3}
- Mixing business logic into screen code, which makes any later change a rewrite. {lvl=3}
- Treating a framework benchmark as a promise for your own app. {lvl=4}
:::
