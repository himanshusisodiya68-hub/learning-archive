---
title: Components and frameworks
summary: Why modern pages describe what the screen should look like for the current data, and let a library do the updating.
ncert: []
up_to: SDE-2
builds_on: [JavaScript in the browser, Functions, Trees]
notes_prompt: Explain to a friend why describing the page as a function of the data is easier than updating each part by hand.
margin:
  - kind: history
    title: History
    text: React was created at Facebook and released as open source in 2013, built to tame a news-feed and chat interface where many parts depend on the same data. [Unverified details]
  - kind: tip
    title: Interview favourite
    text: '"Why do lists need keys?" and "what is wrong with mutating state?" are standard React questions. Both come down to how the library compares the old and new description.'
  - kind: olympiad
    title: Design link
    text: 'Frameworks differ in how they find what changed. React re-runs components and diffs the result; others such as Svelte and Solid track which values each part reads. [Inference: a simplified comparison]'
books:
  - { title: "React documentation, react.dev (Learn React)", ref: "free online; Thinking in React, State as a Snapshot, Keeping Components Pure" }
  - { title: "Robin Wieruch, The Road to React", ref: "a beginner-friendly book [Unverified edition]" }
cards:
  - { front: "What does UI = f(state) mean?", back: "The screen is the output of a function whose input is the current data (state). Change the data and the screen follows; you never edit the page by hand." }
  - { front: "What are props?", back: "The inputs a parent passes to a child component, like function arguments. They flow down the tree; the child must not change them." }
  - { front: "What does useState give you?", back: "A remembered value plus a function to change it. Calling the function schedules a re-render with the new value." }
  - { front: "What is the virtual DOM idea?", back: "Build a cheap description of the new UI, compare it with the old one, and touch the real DOM only where they differ." }
  - { front: "Why do list items need stable keys?", back: "Keys tell the library which item is which across renders, so it moves and reuses the right ones instead of mixing up their state." }
  - { front: "When is plain JavaScript enough?", back: "When the page is mostly static, has a few independent interactions, and little shared state. A framework costs bundle size, a build step and upgrade work." }
core:
  idea: 'Instead of telling the browser **how** to change the page step by step, you write a function that says **what** the page should look like for the current data (the state). When the state changes, the library calls the function again, compares the result with the old one, and makes only the needed edits.'
  formulas:
    - tex: '\text{UI} = f(\text{state})'
      label: 'The screen is a function of the data'
    - tex: '\text{new state} \to \text{render} \to \text{diff} \to \text{DOM edits}'
      label: 'What happens after every change'
  conditions:
    - 'Rendering a component is a plain function of its props and state, with no hidden side effects'
    - 'State is never changed in place; a new value is given so the change is noticed'
    - 'Data flows down the tree as props and changes flow up as callbacks'
  sign: 'The commonest mistake is changing state directly (pushing onto an array in state) and expecting the screen to update. The library only notices when it is handed a new value.'
outcomes:
  - 'Explain the bookkeeping problem that frameworks solve'
  - 'Split a screen into components, props and state'
  - 'Write a small React component with useState and an effect, and avoid the infinite-loop trap'
  - 'Describe how the virtual DOM and keys make updates cheap and correct'
  - 'Decide whether a project needs a framework, and where state should live'
opener:
  story: |
    You are booking a train seat. Tick seat 14: the seat turns green, the price at the bottom goes up, the little cart badge shows "1", the Pay button wakes up, and the summary on the right lists "Seat 14". One tap, five places to change.

    Now add "untick", "clear all" and "apply coupon". Every action must remember to update all five places. Forget one, and the screen lies: a price that doesn't match the seats, a button that stays dead.

    Big sites have hundreds of such links. Is there a way to stop remembering?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="One piece of data feeds five parts of the screen"><rect x="110" y="18" width="100" height="36" rx="8" style="fill:var(--c)"/><text x="130" y="41" style="font-size:12px;fill:var(--surface)">state: seat 14</text><g style="fill:none;stroke:var(--c);stroke-width:1.5"><path d="M130 54 L50 120"/><path d="M145 54 L120 120"/><path d="M160 54 L160 120"/><path d="M175 54 L200 120"/><path d="M190 54 L270 120"/></g><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--rule)"><rect x="14" y="120" width="72" height="34" rx="5"/><rect x="92" y="120" width="56" height="34" rx="5"/><rect x="132" y="120" width="56" height="0"/><rect x="152" y="120" width="56" height="34" rx="5"/><rect x="214" y="120" width="40" height="34" rx="5"/><rect x="260" y="120" width="52" height="34" rx="5"/></g><g style="font-size:10px;fill:var(--ink)"><text x="22" y="141">seat map</text><text x="100" y="141">price</text><text x="160" y="141">badge</text><text x="220" y="141">Pay</text><text x="266" y="141">summary</text></g><text x="14" y="190" style="font-size:11px;fill:var(--muted)">change the data once;</text><text x="14" y="206" style="font-size:11px;fill:var(--muted)">the five parts follow</text></svg>'
life:
  - 'Facebook, Instagram web, Netflix and Airbnb have used React-style components for their interfaces. [Inference: from public engineering talks, not verified here]'
  - 'A shopping cart whose badge, total and checkout button always agree is state flowing to many components.'
  - 'Gmail-style inboxes that update without reloading keep a list in state and render it.'
  - 'The back button working correctly in a single-page app is client-side routing treating the URL as state.'
models:
  - name: 'Describe the goal, not the steps'
    text: 'Say what the result should look like and let a system work out the edits. A thermostat set to 24 degrees, or a map app asked for "Pune", works this way, not by listing each turn.'
  - name: 'One source of truth'
    text: 'Keep each fact in exactly one place and derive everything else from it. Two copies will drift apart, in a spreadsheet, a bank ledger or a budget.'
  - name: 'Data down, events up'
    text: 'Information flows from managers to teams, and requests flow back up as reports. Clear directions keep large organisations (and apps) predictable.'
links:
  - leaf: 'cs/trees'
    name: 'Trees'
    same: 'Components nest into a tree, and the virtual DOM is a tree compared node by node with the previous one.'
    differs: 'A general tree diff is expensive, so React assumes two things: same type at the same place means same node, and keys identify list items. That makes it fast and slightly opinionated.'
  - leaf: 'cs/functions'
    name: 'Functions'
    same: 'A component is a function: inputs (props, state) in, a description of the UI out. The same inputs should give the same output.'
    differs: 'The library decides when to call it, possibly many times, so it must not have side effects while rendering.'
next:
  q: 'A well-built page can still be slow to appear on a train connection and unusable for someone with a screen reader. What makes a page fast, and what makes it usable by everyone?'
  leaf: 'cs/web-performance-and-accessibility'
  name: 'Performance and accessibility'
symbols:
  - s: 'state'
    means: 'the data that can change over time and decides what the screen shows'
  - s: 'props'
    means: 'inputs a parent passes down to a child component (read only)'
  - s: 'component'
    means: 'a function that returns a piece of UI; pages are trees of components'
  - s: 'hook'
    means: 'a special function such as useState that lets a component remember values or run effects'
  - s: 'render'
    means: 'calling a component to get its description of the UI'
  - s: 'JSX / TSX'
    means: 'HTML-like syntax inside JavaScript or TypeScript that the build tool turns into function calls'
---

:::hook
q: Here's the puzzle. Five parts of the screen depend on one fact (the selected seats). Which approach breaks less as the app grows?
options: ["Each action updates the five parts by hand", "Describe the screen for the current data and let a library update it", "Reload the whole page after each action"]
answer: 1
right: Right. Describe once, derive everywhere. Reloading also works but loses scroll position, typed text and feels slow, which is why single-page apps exist.
wrong: By hand, every new feature must remember every dependent part, and forgetting one gives a screen that contradicts itself. There is a way to write the logic once.
:::

## The bookkeeping problem {lvl=1 id=s-problem label="Foundations"}

In plain JavaScript, a seat tap looks like this:

```js
function selectSeat(n) {
  selected.push(n);
  seatEl(n).classList.add("green");
  priceEl.textContent = selected.length * 750;
  badgeEl.textContent = selected.length;
  payBtn.disabled = false;
  summaryEl.append(makeRow(n));
}
```

Six lines for one action, and "untick" must undo each carefully. The code cares about **transitions** (what to change when X happens) when what you really care about is the **result** (what the screen should show). With $k$ actions and $m$ dependent parts, you must get $k \times m$ places right. Bugs here are not crashes; they are pages that quietly show wrong things.

## The big idea: the page is a function of state {lvl=1 id=s-idea label="Foundations"}

Flip it round. Keep one list, `selected`, called the **state**: the data that can change. Write one function that, given the state, returns what the whole screen looks like. Read the formula as "the screen equals a function of the state":

$$\text{UI} = f(\text{state})$$

Now "tick" only changes `selected`. A library (**React** is the best known) calls $f$ again, compares the new description with the old one and edits the browser accordingly. The five places can no longer disagree, because they are all computed from the same list.

```tsx
function Summary({ selected }: { selected: number[] }) {
  return (
    <div>
      <p>{selected.length} seat(s): {selected.join(", ")}</p>
      <button disabled={selected.length === 0}>Pay {selected.length * 750}</button>
    </div>
  );
}
```

The HTML-like syntax is **JSX** (TSX with TypeScript). A build tool turns each tag into a function call. Curly braces drop in a JavaScript value. Note there is no "find the element and change its text": you just describe it.

:::qc lvl=1
q: In UI = f(state), what do you change to make the screen show something new?
options: ["The DOM elements directly", "The state", "The function f at run time"]
answer: 1
right: Right. You change the state and the function produces the new description.
wrong: Editing elements by hand is exactly what this approach avoids. The input to the function is what changes.
:::

## Components, props and state {lvl=2 id=s-components label="SDE-1"}

A big screen is built as a tree of small functions called **components**, such as `SeatMap`, `Cart`, `PayButton`. Each takes inputs called **props** (like function arguments) and returns UI. A parent passes props down; a child must not change them.

:::figure caption="Data flows down as props; changes flow up as callbacks. State lives in the lowest component that all users of it share."
<svg viewBox="0 0 320 170" role="img" aria-label="App holds state; SeatMap and Cart receive props; a click calls a callback upward">
<g style="fill:var(--surface);stroke:var(--mat);stroke-width:2"><rect x="115" y="10" width="90" height="30" rx="5"/><rect x="30" y="100" width="90" height="30" rx="5"/><rect x="200" y="100" width="90" height="30" rx="5"/></g>
<g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="160" y="29">App: state</text><text x="75" y="119">SeatMap</text><text x="245" y="119">Cart</text></g>
<g style="fill:none;stroke:var(--mat);stroke-width:2"><path d="M140 40 L85 98"/><path d="M180 40 L235 98"/></g>
<g style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3"><path d="M56 98 L110 42"/></g>
<g style="font-size:10px;fill:var(--muted)"><text x="10" y="70">props down</text><text x="226" y="70">props down</text><text x="14" y="158">click: onSelect(14) goes up, state changes, everything re-renders</text></g>
</svg>
:::

Where does the state live? In a **hook** called `useState`:

```tsx
function App() {
  const [selected, setSelected] = useState<number[]>([]);
  const toggle = (n: number) =>
    setSelected(s => s.includes(n) ? s.filter(x => x !== n) : [...s, n]);
  return <SeatMap selected={selected} onPick={toggle} />;
}
```

`useState` returns the current value and a setter. Calling the setter schedules a **re-render** with the new value. Note the setter gets a **new array** (`filter` or the `[...s, n]` copy), never `s.push(n)`. The library detects change by checking whether the value is a different object; mutating in place keeps the same object and the screen may not update.

A second hook, `useEffect`, runs code **after** rendering to sync with the outside world: fetching data, starting a timer, setting the page title.

```tsx
useEffect(() => {
  fetch("/api/seats").then(r => r.json()).then(setSeats);
}, []);   // [] = run once, after the first render
```

The list at the end says when to run again. Leave it out and the effect runs after **every** render; if the effect sets state, that triggers another render, another fetch, and so on forever. This is the most common first bug.

:::qc lvl=2
q: A component stores a list in state and calls list.push(x) then setList(list). Why might the screen not update?
options: ["push is not allowed in JavaScript", "The same array object is passed, so the library sees no change", "setList only works with numbers"]
answer: 1
right: Right. The library compares by identity. Pass a new array such as [...list, x].
wrong: Think about how cheaply the library can check for change. It compares the old and new value by identity.
:::

## Routing: the URL is state too {lvl=2 id=s-routing label="SDE-1"}

A **single-page app** loads once and then swaps components without asking the server for a new page. A **router** connects the address bar to components: `/seats` shows `SeatMap`, `/pay` shows `Payment`. Clicking a link changes the URL with the browser's history interface and re-renders, with no reload, so the Back button and shareable links still work.

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/seats/:trainId" element={<SeatMap />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

(The shape follows React Router; exact names change between versions. [Unverified])

Put things people want to share or bookmark (a search term, a filter, the selected train) in the URL, not hidden state.

## How updates stay cheap: the virtual DOM {lvl=3 id=s-vdom label="SDE-2"}

Re-running $f$ for every change sounds wasteful. It is made cheap in two steps. Calling components produces a plain object tree (the **virtual DOM**), which costs little to build. Then the library **diffs** it against the previous tree and applies only the differences, because touching the real DOM (layout, painting) is the costly part.

To diff fast, two assumptions: a node of a different type means a different subtree, and in lists **keys** say which item is which. With `key={seat.id}`, deleting item 1 removes that row and leaves the rest alone. With `key={index}`, deleting the first row makes every later row shift one place, so a text box typed into row 2 now appears under row 1's data. Use a stable id, never the index, for lists that change.

The virtual DOM is a technique, not the only one. Some frameworks compile away the diff or track which values each part reads. [Inference: a simplification; each has trade-offs.]

## Where state lives, and whether to use a framework {lvl=3 id=s-decide label="SDE-2"}

**Rule of thumb for state:** keep it as local as possible; **lift it up** to the nearest common parent when two siblings need it. Use **context** for rarely changing values everyone reads (theme, logged-in user). Data fetched from a server (**server state**) has its own life: caching, refresh, loading and error states. Dedicated libraries handle that, and it is a mistake to copy it into a global store by default.

| Situation | Reasonable choice |
|---|---|
| Mostly static page, a menu toggle, one form | Plain HTML, CSS and a few lines of JavaScript |
| Content site that must load fast and be found by search | Server-rendered pages with light scripts |
| App with many screens and lots of shared, changing data | A component framework |

A framework adds a build step, a larger download, upgrades and things to learn. It earns its cost when updating many parts from shared data is your main problem. For a contact form and an image slider, it usually does not.

:::qc lvl=3
q: A list of editable rows uses the array index as the key. The user deletes the first row. What bug can appear?
options: ["The remaining rows keep the wrong typed text", "The page crashes", "Nothing, index keys are always fine"]
answer: 0
right: Right. Rows shift positions, so the library reuses row 1's state for what was row 2's data.
wrong: The key is the item's identity. If it is just the position, identities change when the list shifts.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Updating many dependent parts by hand multiplies chances of mistakes. {lvl=1}
2. UI = f(state): change the state, and the library re-renders and updates the page. {lvl=1}
3. Components are functions; props flow down, callbacks flow up. {lvl=2}
4. `useState` remembers values; give it a new value, never mutate in place; `useEffect` syncs with the outside world. {lvl=2}
5. Routing ties the URL to components without reloading. {lvl=2}
6. The virtual DOM diffs old and new trees; keys must be stable ids. {lvl=3}
7. Keep state local, lift it up when shared; plain JavaScript is enough for simple pages. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Mutating state (push, direct assignment) instead of giving a new value. {lvl=2}
- `useEffect` without a dependency list that sets state: infinite loop. {lvl=2}
- Array index as a list key in lists that reorder, insert or delete. {lvl=3}
- Copying the same fact into two state variables so they drift apart. {lvl=2}
- Putting everything in global state, or reaching for a framework for a static page. {lvl=3}
- Doing work with side effects during rendering instead of in an effect or an event handler. {lvl=3}
:::
