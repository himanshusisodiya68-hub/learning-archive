---
title: Performance and accessibility
summary: Why some pages appear instantly while others stay blank, and how to build a page that everyone can use.
ncert: []
up_to: SDE-3
builds_on: [HTML and CSS, JavaScript in the browser, Components and frameworks, Caching]
notes_prompt: Explain to a friend what happens between tapping a link and seeing the page, and why a keyboard-only user still needs to be able to buy something.
margin:
  - kind: history
    title: History
    text: Google began using page speed as a ranking signal for search in 2010 and for mobile in 2018, and introduced the Core Web Vitals in 2020. [Unverified exact years]
  - kind: tip
    title: Interview favourite
    text: '"A page is slow. How do you find out why?" The strong answer measures first (Lighthouse, the network waterfall, field data) and names the biggest cost before fixing anything.'
  - kind: olympiad
    title: Design link
    text: Performance is a budget, like money. Teams set limits on bundle size and load time and block changes that break them, instead of hoping speed stays good.
books:
  - { title: "web.dev, Core Web Vitals and Learn Accessibility (Google)", ref: "free online" }
  - { title: "W3C, Web Content Accessibility Guidelines (WCAG) 2.x", ref: "contrast and keyboard success criteria; exact numbers [Unverified]" }
  - { title: "Ilya Grigorik, High Performance Browser Networking", ref: "chapters on HTTP and the browser pipeline [Unverified chapter numbers]" }
cards:
  - { front: "What is the critical rendering path?", back: "The steps from the first byte of HTML to pixels: build the DOM, fetch and apply CSS, run scripts, lay out, paint. Anything that blocks these steps delays the first view." }
  - { front: "Name the three Core Web Vitals and their good targets.", back: "LCP (when the main content appears) at most 2.5 s; INP (response to taps) at most 200 ms; CLS (jumping layout) at most 0.1." }
  - { front: "Why give images a width and height?", back: "The browser can reserve the space before the image arrives, so the text below does not jump (lower CLS)." }
  - { front: "What does a long cache lifetime on a hashed file name give you?", back: "The file never needs to be downloaded again until its content changes, because a new version gets a new name." }
  - { front: "Minimum text contrast under WCAG AA?", back: "4.5 to 1 for normal text and 3 to 1 for large text." }
  - { front: "First rule of ARIA?", back: "If a native element does the job (button, link, input), use it instead of adding ARIA to a div." }
core:
  idea: 'A page is fast when the **first useful view** arrives soon, stays still, and answers taps quickly; it is accessible when every function works without sight, a mouse or perfect vision. Both come from sending less, sending it in the right order, and using the right elements.'
  formulas:
    - tex: '\text{contrast} = \frac{L_1 + 0.05}{L_2 + 0.05}'
      label: 'Contrast ratio of lighter (L1) to darker (L2) colour; AA needs 4.5 for normal text'
    - tex: '\text{LCP} \le 2.5\ \text{s},\quad \text{INP} \le 200\ \text{ms},\quad \text{CLS} \le 0.1'
      label: 'Good targets for the Core Web Vitals'
  conditions:
    - 'Measured on real, mid-range phones and slow networks, not only on a developer laptop'
    - 'Targets are judged at the 75th percentile of visitors, so slow cases count'
    - 'Accessibility works only if semantics, keyboard and contrast are built in from the start'
  sign: 'The commonest mistake is optimising by guess. Measure first: the biggest cost is usually one large image or one heavy script, not what you suspected.'
outcomes:
  - 'Describe what the browser does between the first byte and the first pixels'
  - 'Read the three Core Web Vitals in plain words and say which fixes help each'
  - 'Choose image sizes and formats, and apply lazy loading in the right places'
  - 'Explain cache lifetimes, hashed file names and code splitting'
  - 'Check a page for keyboard use, screen-reader meaning and contrast, and compute a contrast ratio'
opener:
  story: |
    You are on the train from Pune to Mumbai, on a patchy 4G signal, trying to book a cab. The app page stays blank for six seconds, then the button you were about to press jumps down the screen and you tap an advert instead.

    In the next seat, someone who cannot see the screen is using the same site with a screen reader that reads the page aloud. For them, six unlabelled buttons all sound like "button".

    Neither problem is about clever algorithms. Both are about what the page sends, in what order, and what it says about itself. What decides them?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A timeline of a page loading with a blank gap, plus a screen reader icon"><text x="14" y="26" style="font-size:11px;fill:var(--muted)">time since tap</text><path d="M14 40 L306 40" style="stroke:var(--ink);stroke-width:2"/><g style="fill:none;stroke:var(--rule)"><path d="M14 36 L14 44"/><path d="M110 36 L110 44"/><path d="M206 36 L206 44"/><path d="M302 36 L302 44"/></g><g style="font-size:10px;fill:var(--muted)"><text x="10" y="58">0 s</text><text x="104" y="58">2 s</text><text x="200" y="58">4 s</text><text x="296" y="58">6 s</text></g><rect x="14" y="76" width="150" height="22" style="fill:color-mix(in srgb,var(--bad) 18%,var(--surface));stroke:var(--bad)"/><text x="20" y="91" style="font-size:11px;fill:var(--ink)">blank screen</text><rect x="164" y="76" width="70" height="22" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c)"/><text x="170" y="91" style="font-size:11px;fill:var(--ink)">main content</text><rect x="234" y="76" width="72" height="22" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"/><text x="240" y="91" style="font-size:11px;fill:var(--ink)">extras</text><rect x="14" y="130" width="130" height="90" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><g style="fill:var(--c)"><rect x="26" y="146" width="106" height="14" rx="3"/><rect x="26" y="168" width="48" height="14" rx="3"/><rect x="82" y="168" width="50" height="14" rx="3"/></g><text x="26" y="204" style="font-size:10px;fill:var(--muted)">buttons with no names</text><path d="M170 176 C190 160 190 192 210 176" style="fill:none;stroke:var(--ink);stroke-width:2"/><text x="170" y="204" style="font-size:11px;fill:var(--ink)">"button, button..."</text></svg>'
life:
  - 'A shopping or ticket site that loads in two seconds on a cheap phone keeps customers who would have left at five.'
  - 'Jumpy pages, where an advert pushes the button you were about to tap, are layout shift in action.'
  - 'Captions on videos, text that resizes, and sites usable with only a keyboard help blind, deaf, elderly and one-handed users, and anyone squinting in sunlight.'
  - 'Government and bank sites in many countries are legally required to meet accessibility standards such as WCAG. [Unverified: varies by country]'
models:
  - name: 'Show something useful first'
    text: 'People judge speed by when they can start, not when everything finishes. A restaurant that brings water and bread at once feels faster than one that serves the whole meal together.'
  - name: 'The fastest request is the one never made'
    text: 'Reuse what you already have (cache), do not fetch what is not needed yet (lazy load), and send less (compress). This applies to errands, meetings and emails as much as web requests.'
  - name: 'Design for the edges and everyone benefits'
    text: 'Kerb cuts made for wheelchairs help prams and suitcases. Captions made for deaf viewers help people on a noisy train. Building for the hardest case improves the average case.'
links:
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'Browser caches, CDNs and server caches all keep a copy close to the user to avoid repeating work.'
    differs: 'On the web you also control freshness with headers and file names, since you cannot tell a visitor''s browser to forget a file.'
  - leaf: 'cs/html-css'
    name: 'HTML and CSS'
    same: 'Semantic HTML (the headings, buttons and labels you chose there) is what screen readers and keyboards rely on.'
    differs: 'There the aim was structure and looks; here the same tags are checked for meaning, focus order and contrast.'
next:
  q: 'A page is fast and usable, but where does its data come from? When you tap "book", what does the page actually ask a server, and in what language do they talk?'
  leaf: 'cs/apis'
  name: 'APIs (REST and beyond)'
symbols:
  - s: 'LCP'
    means: 'Largest Contentful Paint: time until the biggest visible piece of content appears (seconds)'
  - s: 'INP'
    means: 'Interaction to Next Paint: how long the page takes to visibly respond to a tap or key (milliseconds)'
  - s: 'CLS'
    means: 'Cumulative Layout Shift: how much visible content jumps around (a score with no unit)'
  - s: 'L_1, L_2'
    means: 'relative luminance of the lighter and darker colour, from 0 (black) to 1 (white)'
  - s: 'WCAG'
    means: 'Web Content Accessibility Guidelines: the standard for accessible web content'
  - s: 'CDN'
    means: 'content delivery network: servers around the world holding copies of your files'
---

:::hook
q: Here's the puzzle. A mobile page weighs 2 MB, and most of it is one of these. Which?
options: ["JavaScript", "Images", "CSS"]
answer: 1
right: Right, in many pages images are the largest part by bytes. (Typical figures vary by year and site, so treat any percentage as approximate. [Unverified]) Note that JavaScript is often worse per byte, because the phone must also parse and run it.
wrong: By bytes, images usually dominate, since a single unoptimised photo can weigh more than all the code on the page. Though JavaScript costs more per byte, as it must also be run.
:::

## From tap to pixels {lvl=1 id=s-path label="Foundations"}

When you open a page, the browser asks a server for the HTML and starts reading it **as it arrives**. In order, it:

1. builds the DOM from the HTML;
2. finds the CSS, images and scripts mentioned in it and requests them;
3. builds the style rules, works out the size and place of every box (**layout**), then draws (**paint**).

Two kinds of files **block** this: CSS (the browser will not paint unstyled content) and ordinary scripts (they might change the page, so the browser stops reading until they have run). This sequence is the **critical rendering path**, and speeding up a page mostly means shortening it.

:::figure caption="A waterfall: each bar is a download. The blocking script delays everything after it."
<svg viewBox="0 0 320 150" role="img" aria-label="Waterfall of requests: HTML, CSS, blocking script, image, then first paint">
<g style="font-size:10px;fill:var(--ink)"><text x="8" y="26">index.html</text><text x="8" y="50">style.css</text><text x="8" y="74">app.js</text><text x="8" y="98">hero.jpg</text></g>
<g style="fill:color-mix(in srgb,var(--mat) 35%,var(--surface));stroke:var(--mat)"><rect x="80" y="16" width="40" height="14"/><rect x="124" y="40" width="50" height="14"/><rect x="124" y="64" width="110" height="14"/><rect x="124" y="88" width="90" height="14"/></g>
<path d="M240 10 L240 112" style="stroke:var(--bad);stroke-width:2;stroke-dasharray:4 3"/>
<text x="196" y="126" style="font-size:10px;fill:var(--bad)">first useful paint</text>
<text x="8" y="144" style="font-size:10px;fill:var(--muted)">the script finishes last, so the paint waits for it</text>
</svg>
:::

The cheapest fix is to tell the browser which scripts can wait:

```html
<link rel="stylesheet" href="/style.css">      <!-- needed to paint: keep, keep small -->
<script src="/app.js" defer></script>          <!-- download now, run after HTML is parsed -->
<script src="/ads.js" async></script>          <!-- run whenever ready; for independent code -->
```

:::qc lvl=1
q: Which attribute lets a script download while the HTML is still being read, and run only after parsing ends?
options: ["defer", "block", "sync"]
answer: 0
right: Right. `defer` does not hold up the page and keeps scripts in order.
wrong: One attribute downloads in the background and waits for the parse to finish before running.
:::

## Measuring what the user feels: Core Web Vitals {lvl=2 id=s-vitals label="SDE-1"}

"Load time" is a poor measure: a page can finish downloading and still look blank, or look ready and ignore your taps. Google's **Core Web Vitals** measure three things users notice, in plain words:

| Vital | Plain question | Good target |
|---|---|---|
| **LCP** (Largest Contentful Paint) | When did the main thing (hero image, headline) appear? | at most 2.5 s |
| **INP** (Interaction to Next Paint) | When I tap, how long until the screen visibly reacts? | at most 200 ms |
| **CLS** (Cumulative Layout Shift) | Did things jump around under my finger? | at most 0.1 |

Targets are judged on the 75th percentile of real visitors, so the slower quarter of users counts. INP replaced an older measure called FID in 2024 [Unverified date]. What helps each: **LCP**, fewer blocking files, a smaller hero image, a nearby server; **INP**, short tasks on the main thread (the previous lesson); **CLS**, reserving space for images, ads and late-loading fonts.

Measure two ways: **lab tests** (Lighthouse, run on your machine, repeatable, good for debugging) and **field data** (real users' devices, the truth, shows the slow tail).

## Images: the heavy part {lvl=2 id=s-images label="SDE-1"}

A phone photo is 4000 by 3000 pixels. Shown 400 CSS pixels wide on a screen that packs two device pixels per CSS pixel, the page needs only 800 by 600. Sending the full photo wastes $(4000 \times 3000)/(800 \times 600) = 25$ times the pixels. Read it as: the full image has 25 times as many pixels as the screen can show.

Four habits fix most image problems:

1. **Right size.** Offer several widths and let the browser choose with `srcset`.
2. **Modern formats** (WebP, AVIF) are smaller than JPEG for similar quality.
3. **Reserve space** with `width` and `height`, so nothing jumps when it arrives.
4. **Lazy-load** images below the fold, but never the main (LCP) image.

```html
<img src="hero-800.jpg"
     srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1600.jpg 1600w"
     sizes="(min-width: 700px) 50vw, 100vw"
     width="800" height="600" alt="Marine Drive at dusk" fetchpriority="high">
<img src="gallery-1.jpg" loading="lazy" width="400" height="300" alt="Street food stall">
```

The first image is the hero, so it is prioritised; the second is far down, so it loads only when the user scrolls near it. Note the `alt` text, which matters for accessibility too (see below).

## Caching: the fastest request is none {lvl=2 id=s-cache label="SDE-1"}

A returning visitor should not re-download your logo. The server tells the browser how long a file stays valid using a **header**:

| File | Header | Why |
|---|---|---|
| `app.3f9c1.js` (name contains a hash of its content) | `Cache-Control: max-age=31536000, immutable` | the name changes when the content does, so it can be kept for a year |
| `index.html` | `Cache-Control: no-cache` (check with the server each time) | it must point to the newest hashed files |

If the file has not changed, the server answers "304 Not Modified" with no body, which is tiny. A **CDN** keeps copies in servers near the user, cutting the distance (the lesson on caching covers the general idea).

:::qc lvl=2
q: Why can a file named app.3f9c1.js be cached for a year, while index.html cannot?
options: ["The hashed name changes when the content changes, so stale copies are never reused", "JavaScript never changes", "HTML files cannot be cached"]
answer: 0
right: Right. A new build gives a new name, so the old cached name is simply never asked for again.
wrong: Think about what happens to the file's name when you release a new version.
:::

## Sending less code {lvl=3 id=s-split label="SDE-2"}

JavaScript costs three times: download, **parse and compile**, then run. On a cheap phone the last two can cost more than the download. So the fastest bundle is the smallest one that does the job.

- **Code splitting** loads the code for a screen only when it is needed. A chart library need not load on the login page.
- **Tree shaking** drops code you never use; check what a library really adds to your bundle before importing it.
- **Compression** (gzip or Brotli) shrinks text files greatly before sending.

```ts
button.addEventListener("click", async () => {
  const { drawChart } = await import("./chart");   // downloaded only now
  drawChart(data);
});
```

In React the same idea is `lazy(() => import("./Chart"))`. The trade-off is a small delay on first use, hidden with a spinner or a hint that preloads the code when the user hovers.

## Accessibility: a page for everyone {lvl=2 id=s-a11y label="SDE-1"}

Roughly one in six people worldwide lives with a significant disability, according to the World Health Organization [Unverified exact figure]. Add the temporary (a broken arm) and the situational (bright sun, a noisy bus) and almost everyone needs an accessible page at some point. **Accessibility** means every feature works without sight, hearing, a mouse or fine motor control.

Four practical checks:

1. **Semantics.** Real headings, buttons, links and lists (from the HTML lesson). Screen readers announce them and let users jump by heading. `<div onclick>` is invisible to them.
2. **Keyboard.** Everything reachable with Tab and operated with Enter or Space, in a sensible order, with a **visible focus outline**. Never remove the outline without a replacement.
3. **Names.** Every image has `alt` text saying what it shows (empty `alt=""` for purely decorative ones); every form field has a `<label>`.
4. **Contrast and zoom.** Text must stay readable at 200% zoom and meet contrast limits.

```html
<label for="phone">Mobile number</label>
<input id="phone" type="tel" autocomplete="tel">
<button type="submit">Book cab</button>
<img src="logo.svg" alt="CabGo">
```

**ARIA** attributes add extra meaning when no native element exists, but the first rule of ARIA is: if a native element does the job, use it. A wrong ARIA label is worse than none.

## Contrast: a number you can compute {lvl=3 id=s-contrast label="SDE-2"}

The standard (WCAG AA) asks for a contrast ratio of at least 4.5 for normal text and 3 for large text. Each colour has a **relative luminance** $L$ from 0 (black) to 1 (white), a measure of how bright it appears, and the ratio is

$$\text{contrast} = \frac{L_1 + 0.05}{L_2 + 0.05}$$

Read it as: the lighter colour's brightness over the darker one's, each nudged up by 0.05 so black does not divide by zero. Black on white gives $(1+0.05)/(0+0.05) = 21$, the maximum. A mid-grey with $L = 0.18$ on white gives $1.05/0.23 \approx 4.57$, just passing. A well-known pass is #767676 grey on white, close to 4.5. [Unverified exact value]

Never convey meaning by colour alone: a red border on a bad field also needs an icon or a message, for the 1 in 12 men with some colour-vision difference [Unverified figure]. Automated tools catch only part of the problems, so also try the page with the keyboard and with a screen reader yourself.

:::qc lvl=3
q: Light grey text with luminance 0.5 sits on a white background. What is its contrast ratio, and does it pass AA for normal text?
options: ["About 1.9, fails", "About 4.7, passes", "About 21, passes"]
answer: 0
right: Right. (1 + 0.05) / (0.5 + 0.05) is about 1.9, far below 4.5.
wrong: Put white's luminance 1 on top and the grey's 0.5 on the bottom, each plus 0.05.
:::

## Performance as a system {lvl=4 id=s-system label="SDE-3"}

At scale, speed and accessibility decay unless a team defends them.

- **Budgets.** Agree limits such as "main bundle at most 170 KB compressed" or "LCP at most 2.5 s on a mid-range phone" and **fail the build** that breaks them (for instance with Lighthouse in the automated pipeline).
- **Field data beats lab data.** Collect real-user timings (RUM) and watch the slow quarter by device, country and page. A change that helps the median can hurt the tail.
- **Third parties.** Adverts, chat widgets and analytics often cost more than your own code. Load them late, and measure each.
- **Architecture choices.** Render the first view on the server so content appears before scripts run, then add interactivity. Choose based on measurement, not fashion. [Inference: a common pattern; the right split depends on the product.]
- **Accessibility in the process.** Component libraries with accessible defaults, automated checks in review, and regular manual tests with real assistive technology.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The critical path runs from HTML to DOM, CSS, scripts, layout and paint; CSS and plain scripts block it. {lvl=1}
2. Core Web Vitals: LCP (main content in 2.5 s), INP (reacts in 200 ms), CLS (stays still, 0.1). {lvl=2}
3. Send images at the size the screen needs, in modern formats, with reserved space, lazy-loaded except the hero. {lvl=2}
4. Hash file names, cache them for a year, and revalidate the HTML. {lvl=2}
5. JavaScript costs download, parse and run; split code and load the rest on demand. {lvl=3}
6. Accessibility means semantics, keyboard use, names and labels, and enough contrast. {lvl=2}
7. Contrast is (L1 + 0.05) / (L2 + 0.05), at least 4.5 for normal text. {lvl=3}
8. At scale, defend both with budgets, field data and checks in the pipeline. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Optimising without measuring; fix the biggest cost first. {lvl=2}
- Lazy-loading the hero image, which delays LCP. {lvl=2}
- Images without width and height, so the layout jumps. {lvl=2}
- Testing only on a fast laptop and fast Wi-Fi. {lvl=2}
- Removing the focus outline or using colour alone to signal an error. {lvl=2}
- Adding ARIA to a div instead of using a real button or link. {lvl=3}
- Caching `index.html` for a year, so users never see new releases. {lvl=3}
:::
