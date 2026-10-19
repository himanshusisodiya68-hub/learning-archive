---
title: JavaScript in the browser
summary: How one page reacts to taps, fetches data and updates itself without reloading, and why a busy script freezes everything.
ncert: []
up_to: SDE-2
builds_on: [HTML and CSS, Functions, Concurrency and locks]
notes_prompt: Explain to a friend why a web page can freeze even though nothing is "downloading", and what the browser is doing instead.
margin:
  - kind: history
    title: History
    text: Brendan Eich built the first version of JavaScript in about ten days in 1995 at Netscape. It has nothing to do with Java beyond a marketing name. [Unverified details]
  - kind: tip
    title: Interview favourite
    text: '"What prints first?" with setTimeout, a promise and a plain log is asked constantly. The answer is always the same order: plain code, then promise callbacks, then timers.'
  - kind: olympiad
    title: Design link
    text: Node.js runs the same one-thread event loop on servers, which is why it handles many waiting connections cheaply but suffers if one request does heavy computing.
books:
  - { title: "MDN Web Docs, JavaScript guide and Using Promises", ref: "free online" }
  - { title: "Marijn Haverbeke, Eloquent JavaScript", ref: "chapters on the DOM, events and asynchronous programming [Unverified chapter numbers]" }
  - { title: "Philip Roberts, What the heck is the event loop anyway? (conference talk)", ref: "the classic visual explanation" }
cards:
  - { front: "What does an event listener do?", back: "Registers a function that the browser calls when something happens, such as a click or a key press. You describe what to do; the browser decides when." }
  - { front: "What is the event loop in one sentence?", back: "A loop that takes the next waiting job (a click, a timer, a finished fetch) and runs it to completion on the single main thread." }
  - { front: "Why does a long loop freeze the page?", back: "JavaScript runs on one thread that also draws the page and handles taps. While your code runs, nothing else can happen, not even a scroll." }
  - { front: "How long is one frame at 60 frames per second?", back: "1000 / 60, about 16.7 ms. Keep each chunk of work well under that to keep animation smooth." }
  - { front: "What does await do?", back: "Pauses that function until a promise settles, while the rest of the page keeps running. It reads like waiting but never blocks the thread." }
  - { front: "Does fetch fail on a 404?", back: "No. It only rejects on network failure. A 404 or 500 gives a normal response whose ok field is false, so you must check it." }
core:
  idea: 'The browser runs your JavaScript on **one thread**, one job at a time, taking jobs from a queue: clicks, timers, finished downloads. Waiting for the network never blocks it, but any long computation does, and while it runs the page cannot respond.'
  formulas:
    - tex: '\text{frame budget} = \frac{1000\ \text{ms}}{60} \approx 16.7\ \text{ms}'
      label: 'Time per frame at 60 frames per second: your code shares it with drawing'
  conditions:
    - 'One main thread runs your code and also lays out and paints the page'
    - 'Each job runs to completion before the next one starts'
    - 'Waiting (network, timers) is handed to the browser, which queues a job when it is done'
  sign: 'The commonest mistake is believing async code runs in parallel. It does not: it takes turns. Only separate workers run truly at the same time.'
outcomes:
  - 'Change the page from a script using the DOM and respond to events'
  - 'Explain the event loop and predict the print order of mixed sync, timer and promise code'
  - 'Fetch data with promises or async and await, including error handling'
  - 'Diagnose and fix a page that freezes on a long task'
  - 'Run requests in parallel and avoid stale-response bugs'
opener:
  story: |
    You tap the heart under a photo. It turns red at once and the number goes from 41 to 42. The page did not reload, the screen did not flicker, and the server probably has not even replied yet.

    Meanwhile a video plays, an ad slides in and you can scroll. Yet the part of the browser that runs the page's code does only one thing at a time. It is a kitchen with one cook.

    How does a single cook serve a whole restaurant without anyone feeling ignored? And what happens when one dish takes five minutes?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A single cook takes jobs from a queue of tickets"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"><rect x="14" y="40" width="62" height="26" rx="4"/><rect x="14" y="72" width="62" height="26" rx="4"/><rect x="14" y="104" width="62" height="26" rx="4"/><rect x="14" y="136" width="62" height="26" rx="4"/></g><g style="font-size:10px;fill:var(--ink)"><text x="22" y="57">click</text><text x="22" y="89">timer</text><text x="22" y="121">fetch done</text><text x="22" y="153">scroll</text></g><text x="14" y="30" style="font-size:11px;fill:var(--muted)">queue of jobs</text><path d="M80 100 L150 100" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M150 94 L160 100 L150 106 Z" style="fill:var(--c)"/><circle cx="210" cy="100" r="42" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="188" y="96" style="font-size:11px;fill:var(--ink)">main</text><text x="184" y="110" style="font-size:11px;fill:var(--ink)">thread</text><text x="170" y="164" style="font-size:11px;fill:var(--muted)">runs one job at a time,</text><text x="170" y="178" style="font-size:11px;fill:var(--muted)">to the end</text><rect x="14" y="196" width="292" height="26" rx="5" style="fill:none;stroke:var(--bad);stroke-dasharray:5 3"/><text x="24" y="213" style="font-size:11px;fill:var(--bad)">a 5-second job here means a frozen page</text></svg>'
life:
  - 'Liking a post, expanding a menu or typing in a search box that suggests results: each is JavaScript reacting to an event.'
  - 'A page that "hangs" for a second when you open a heavy dashboard is a long task on the main thread.'
  - 'Maps, chat and live cricket scores update without reload because scripts fetch new data in the background and patch the page.'
  - 'Food-delivery and payment pages show a spinner while waiting, which is code deliberately not blocking.'
models:
  - name: 'One cook, many tickets'
    text: 'A single worker can serve many people if tasks mostly wait (for the oven, for a reply). It fails when one task needs the worker the whole time. The same is true of a one-person shop or a single government window.'
  - name: 'Don''t stand and wait'
    text: 'Hand the waiting to someone else and ask to be called back. That is a callback, a promise, or a "we will call you" token at a bank.'
  - name: 'Break big jobs into small ones'
    text: 'Slicing a long task into pieces lets urgent things squeeze in between. A good manager interleaves the long project with the urgent calls.'
links:
  - leaf: 'cs/concurrency'
    name: 'Concurrency and locks'
    same: 'Both are about doing several things in overlapping time and about the order in which steps interleave.'
    differs: 'Threads can interrupt each other in the middle of a step, so they need locks. The event loop never interrupts a running job, so a simple variable update is safe, but the job must be short.'
  - leaf: 'cs/stacks-and-queues'
    name: 'Stacks and queues'
    same: 'The event loop is a queue of jobs (first in, first out) feeding a call stack of the function currently running.'
    differs: 'Promise callbacks sit in a second, higher-priority queue that is emptied before the next ordinary job.'
next:
  q: 'You can now change one box on the page by hand. But a shopping site has a cart badge, a total, a seat map and a button that all depend on one fact. What stops you forgetting to update one of them?'
  leaf: 'cs/frontend-frameworks'
  name: 'Components and frameworks (React)'
symbols:
  - s: 'DOM'
    means: 'the live tree of page elements that scripts can read and change'
  - s: 'event'
    means: 'something that happens, such as a click, key press or finished download'
  - s: 'callback'
    means: 'a function you hand over to be called later, when the event happens'
  - s: 'promise'
    means: 'an object standing for a result that will arrive later (or fail)'
  - s: 'ms'
    means: 'milliseconds, thousandths of a second'
  - s: 'long task'
    means: 'a job that holds the main thread for more than about 50 ms'
---

:::hook
q: Here's the puzzle. The page runs `while (true) {}` for five seconds after a button click, and nothing else is downloading. What can the user do during those five seconds?
options: ["Scroll and click normally, the browser multitasks", "Nothing: the page is frozen until the loop ends", "Everything except typing"]
answer: 1
right: Right. The one main thread is busy running your loop, so it cannot handle taps, scrolls or drawing. The page truly cannot respond until the loop ends.
wrong: There is no second cook. The same thread runs your code, handles input and paints the screen, so while it is stuck in a loop it can do none of the others.
:::

## Changing the page from code {lvl=1 id=s-dom label="Foundations"}

The previous lesson built a tree of elements, the DOM. JavaScript is a language that can **find** elements in that tree and **change** them, and the browser redraws.

```js
const heart = document.querySelector("#heart");   // find one element
const count = document.querySelector("#count");
count.textContent = "42";                         // change its text
heart.classList.add("red");                       // switch a CSS class
const li = document.createElement("li");          // make a new element
li.textContent = "Chai";
document.querySelector("ul").append(li);          // attach it to the tree
```

`querySelector` takes the same selectors as CSS. The pattern is always find, then change text, a class or the tree itself. Changing a **class** is usually best: JavaScript flips a label and the CSS decides what it looks like.

## Events: tell me when {lvl=1 id=s-events label="Foundations"}

The script cannot sit watching for taps. Instead you register a **callback**: a function you give to the browser to call when something happens.

```js
heart.addEventListener("click", function () {
  count.textContent = Number(count.textContent) + 1;
  heart.classList.toggle("red");
});
```

Read it as: "when this element is clicked, run this function". You describe what to do and the browser decides when. This inversion, *don't call us, we'll call you*, is the heart of every user interface.

:::qc lvl=1
q: What does addEventListener("click", f) do?
options: ["Runs f right now", "Asks the browser to run f each time the element is clicked", "Waits in a loop until a click happens"]
answer: 1
right: Right. It only registers f. Nothing runs until a click happens, and no loop of yours waits for it.
wrong: Think about who does the waiting. The script hands f to the browser and moves on.
:::

## One thread and the event loop {lvl=2 id=s-loop label="SDE-1"}

Here is the truth behind the opener. JavaScript has **one main thread**. It executes the current function to the end (the **call stack**), then asks "what is the next job?". Jobs wait in queues: a click puts a job in the **task queue**, so does an expired timer, so does a finished download. This endless "run a job, pick the next" cycle is the **event loop**.

There is a second, more urgent queue for **promise callbacks** (called the microtask queue). After each job the loop empties it completely before moving on to the next ordinary task.

```js
console.log("A");
setTimeout(() => console.log("B"), 0);       // task queue
Promise.resolve().then(() => console.log("C")); // microtask queue
console.log("D");
// prints: A D C B
```

Why `A D C B`? A and D are plain code on the current job. When it ends, the loop drains the microtasks (C) and only then takes the timer task (B), even though the timer was set to 0 ms.

:::figure caption="The event loop: tasks wait in queues, the main thread runs one job to completion, urgent promise callbacks go first."
<svg viewBox="0 0 320 158" role="img" aria-label="Task queue and microtask queue feed the call stack on the main thread">
<g style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--rule)"><rect x="10" y="14" width="96" height="30" rx="4"/><rect x="10" y="60" width="96" height="30" rx="4"/><rect x="210" y="26" width="100" height="70" rx="6"/></g>
<g style="font-size:11px;fill:var(--ink)"><text x="18" y="33">task queue</text><text x="18" y="79">microtasks</text><text x="226" y="50">main thread</text><text x="226" y="66">runs one job</text><text x="226" y="82">to the end</text></g>
<g style="fill:none;stroke:var(--mat);stroke-width:2"><path d="M108 29 L206 52"/><path d="M108 75 L206 70"/></g>
<text x="8" y="118" style="font-size:11px;fill:var(--muted)">after every job, microtasks are emptied first</text>
<text x="8" y="134" style="font-size:11px;fill:var(--muted)">then the next task is taken;</text><text x="8" y="150" style="font-size:11px;fill:var(--muted)">between tasks the page may paint</text>
</svg>
:::

:::qc lvl=2
q: What does this print? console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);
options: ["1 2 3 4", "1 4 3 2", "1 4 2 3"]
answer: 1
right: Right. 1 and 4 run now, then the promise callback 3, then the timer task 2.
wrong: Plain code first, then promise callbacks (microtasks), then timers (tasks).
:::

## Why the page freezes {lvl=2 id=s-freeze label="SDE-1"}

The main thread also **draws** the page. A screen at 60 frames per second needs a new frame every $1000/60 \approx 16.7$ ms, read as "a thousand milliseconds divided by sixty frames". Your code, layout and painting must all fit in that slot. If a single job runs for 300 ms, about 18 frames are missed and taps wait. Browsers call any job over roughly 50 ms a **long task**.

Typical causes: a loop over a huge list, a heavy calculation, or building thousands of DOM elements at once. Three ways out, from cheapest to most work:

1. **Do less**: show 50 rows, not 50,000; compute only what is visible.
2. **Chunk it**: process 500 items, then yield with `setTimeout` so the browser can paint and handle taps.
3. **Move it**: a **Web Worker** is a second thread with no access to the DOM; send it data, get a result back as an event.

```js
function processChunk(items, start) {
  const end = Math.min(start + 500, items.length);
  for (let i = start; i < end; i++) heavy(items[i]);
  if (end < items.length) setTimeout(() => processChunk(items, end), 0);
}
```

Each chunk is a short job, so clicks and drawing fit in between.

:::qc lvl=2
q: A script blocks the main thread for 160 ms. About how many 60 fps frames are lost?
options: ["About 1", "About 10", "About 100"]
answer: 1
right: Right. 160 / 16.7 is about 9.6, so roughly 10 frames are skipped.
wrong: Divide the blocked time by the length of one frame, 16.7 ms.
:::

## Waiting for the network: fetch and promises {lvl=2 id=s-fetch label="SDE-1"}

A request to a server may take 200 ms or 20 seconds. The thread must not wait. `fetch` starts the request, returns at once with a **promise** (a placeholder for a result that will arrive later) and the browser queues a job when the answer comes.

```js
fetch("/api/likes/42")
  .then(res => res.json())
  .then(data => { count.textContent = data.likes; })
  .catch(err => showError(err));
```

`async` and `await` read the same logic top to bottom:

```js
async function loadLikes() {
  const res = await fetch("/api/likes/42");
  if (!res.ok) throw new Error("Server said " + res.status);
  const data = await res.json();
  count.textContent = data.likes;
}
```

`await` pauses only this function; the thread goes off to run other jobs and comes back when the promise settles. One trap: `fetch` rejects only when the network itself fails. A 404 or 500 arrives as a normal response, so always check `res.ok`.

Notice the like button from the opener: it updates the number first and talks to the server afterwards. That trick, called an **optimistic update**, makes the app feel instant, and you undo the change if the request fails.

## Parallel requests and stale answers {lvl=3 id=s-practice label="SDE-2"}

Awaiting one call after another adds the delays. If three independent calls take 200, 150 and 250 ms, awaiting them in turn costs 600 ms. Starting them together costs only the slowest, 250 ms:

```ts
const [user, posts, ads] = await Promise.all([
  getJson<User>("/api/user"),
  getJson<Post[]>("/api/posts"),
  getJson<Ad[]>("/api/ads"),
]);
```

The `<User>` parts are TypeScript, JavaScript with types the compiler checks before the code runs. They tell the editor what shape the data has and catch typos early.

The other classic bug is the **stale response**. In a search box, the user types "ca", then "cat". Two requests fly. If the one for "ca" arrives last, it overwrites the right results. Fixes: cancel the old request with an `AbortController`, or tag each request with a number and ignore answers that are not the latest. Also **debounce** typing: wait about 300 ms of silence before sending, so you fire one request instead of one per key.

```ts
let ctrl: AbortController | undefined;
async function search(q: string) {
  ctrl?.abort();                       // cancel the previous request
  ctrl = new AbortController();
  const res = await fetch("/api/s?q=" + encodeURIComponent(q), { signal: ctrl.signal });
  render(await res.json());
}
```

(An aborted fetch rejects with an abort error, which the caller should ignore. [Inference: exact error handling depends on your code structure].)

:::qc lvl=3
q: Three independent requests take 100, 300 and 200 ms. How long does Promise.all take?
options: ["600 ms", "300 ms", "100 ms"]
answer: 1
right: Right. They run together, so the total is the slowest one.
wrong: Promise.all finishes when the last of them finishes.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. JavaScript finds elements in the DOM and changes their text, classes or children; the browser redraws. {lvl=1}
2. You register callbacks for events; the browser calls them when something happens. {lvl=1}
3. One main thread runs one job at a time, taken from queues: the event loop. {lvl=2}
4. Order is plain code, then promise callbacks, then timers and other tasks. {lvl=2}
5. A long task freezes the page because the same thread draws and handles input; frame budget is about 16.7 ms. {lvl=2}
6. `fetch` returns a promise; use `await`, and check `res.ok`. {lvl=2}
7. Run independent requests together, cancel or ignore stale ones, debounce typing. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Async is not parallel: it takes turns on one thread. Only workers run at the same time. {lvl=2}
- Treating a 404 as success because `fetch` did not throw. {lvl=2}
- Doing heavy loops in a click handler and wondering why the page freezes. {lvl=2}
- `await` in a loop for independent calls, which adds up the delays. {lvl=3}
- Search boxes without cancelling or ignoring old responses show wrong results. {lvl=3}
- Updating the page for every single key press or scroll event; debounce or throttle. {lvl=3}
:::
