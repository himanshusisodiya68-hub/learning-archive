---
title: HTML and CSS
summary: How a web page is a tree of labelled boxes, and how a few rules fit one page to any screen.
ncert: []
up_to: SDE-2
builds_on: [Trees, Text, images and sound]
notes_prompt: Explain to a friend why one web page can look right on a phone and on a huge monitor without being written twice.
margin:
  - kind: history
    title: History
    text: Tim Berners-Lee wrote the first web page format, HTML, at CERN around 1990. CSS arrived in the mid-1990s so that content and looks could be kept apart. [Unverified exact years]
  - kind: tip
    title: Interview favourite
    text: '"Centre a div" is a classic. Today the answer is two lines of flexbox or grid, and knowing why shows you understand layout, not just recipes.'
  - kind: olympiad
    title: Think about it
    text: A browser has to place thousands of boxes whose sizes depend on each other and on the screen. Layout engines are small constraint solvers, and a bad rule can force them to redo the whole page.
books:
  - { title: "MDN Web Docs, Learn web development (HTML and CSS guides)", ref: "free online; the box model and flexbox pages" }
  - { title: "Jon Duckett, HTML and CSS: Design and Build Websites", ref: "a beginner-friendly illustrated book [Unverified edition]" }
cards:
  - { front: "What is the DOM?", back: "The browser's live tree of every element on the page. HTML text is just the recipe; the DOM is the thing built from it." }
  - { front: "Why use <nav>, <main> and <button> instead of <div> everywhere?", back: "They say what the thing is. Browsers, search engines and screen readers rely on that, and you get keyboard behaviour for free." }
  - { front: "Name the four layers of the box model, inside to outside.", back: "Content, padding, border, margin. Padding is inside the border, margin is outside it." }
  - { front: "Flexbox or grid?", back: "Flexbox lays items out along one line (row or column). Grid lays out rows and columns together." }
  - { front: "What does a media query do?", back: "Applies a block of CSS only when a condition holds, for example the screen is at least 600 pixels wide. It is how one page adapts to many screens." }
  - { front: "Which wins when two CSS rules clash?", back: "The more specific selector (id beats class beats tag); if equal, the one written later wins." }
core:
  idea: 'A web page is a **tree of boxes**. HTML says what each box is (heading, link, button); CSS says how it looks and where it sits. Because CSS is a set of rules rather than fixed positions, the same page can rearrange itself for any screen.'
  formulas:
    - tex: '\text{space taken} = \text{content} + 2(\text{padding}) + 2(\text{border}) + 2(\text{margin})'
      label: 'Width of a box with the default box sizing'
  conditions:
    - 'Every element becomes a rectangular box, even if it looks round or inline'
    - 'Children are laid out inside their parent, so the tree shape decides the layout'
    - 'Rules cascade: inherited and specific rules combine, and the winner is decided by a fixed order'
  sign: 'The classic mistake is thinking width means the whole box. By default it means only the content, so padding and border make the box wider than you wrote.'
outcomes:
  - 'Draw the tree a small piece of HTML turns into'
  - 'Choose semantic tags so the page makes sense without its looks'
  - 'Compute the real size of a box from content, padding, border and margin'
  - 'Lay out a row or a grid with flexbox or grid and make it respond to screen width'
  - 'Predict which of two clashing CSS rules wins'
opener:
  story: |
    Open any news site on your laptop. Three columns: headlines, a big story, a sidebar of ads. Now open the same address on your phone. The columns have stacked into one tall strip, the menu has shrunk into a little button, the text is still easy to read.

    Did the developers write two websites? Mostly not. There is one page, and the same few hundred lines of instructions run on both. Your browser reads them fresh on every screen.

    How can one set of instructions give two different layouts, and what are those instructions even made of?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="One page: three columns on a monitor, stacked on a phone"><rect x="12" y="30" width="190" height="130" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="20" y="38" width="174" height="14" style="fill:var(--c)"/><rect x="20" y="58" width="48" height="94" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--rule)"/><rect x="74" y="58" width="72" height="94" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--rule)"/><rect x="152" y="58" width="42" height="94" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--rule)"/><rect x="92" y="160" width="26" height="10" style="fill:var(--ink)"/><rect x="76" y="170" width="58" height="4" rx="2" style="fill:var(--ink)"/><rect x="232" y="20" width="64" height="130" rx="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="238" y="30" width="52" height="10" style="fill:var(--c)"/><rect x="238" y="44" width="52" height="30" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--rule)"/><rect x="238" y="78" width="52" height="20" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--rule)"/><rect x="238" y="102" width="52" height="20" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--rule)"/><text x="12" y="200" style="font-size:11px;fill:var(--muted)">same HTML, same CSS</text><text x="12" y="216" style="font-size:11px;fill:var(--muted)">different rules fire at different widths</text></svg>'
life:
  - 'Every website and web app you have used, from IRCTC to a school portal, is HTML structure plus CSS styling.'
  - 'The same site fitting a phone, a tablet and a TV browser comes from responsive CSS, not separate sites.'
  - 'A screen reader reading a page aloud to a blind person follows the HTML tags, not the colours.'
  - 'HTML emails, e-book readers and many mobile app screens reuse the same boxes-and-rules idea.'
models:
  - name: 'Say what it is, not how it looks'
    text: 'Label things by their meaning (a navigation, a button) and decorate separately. Good filing systems, laws and org charts work the same way: roles first, appearance later.'
  - name: 'Rules beat positions'
    text: 'Instead of saying "put this at 240 pixels", say "share the row equally". Rules survive change in a way coordinates never do, whether you are laying out a page or a seating plan for a wedding.'
  - name: 'Nesting gives structure'
    text: 'A box inside a box inside a box is how a page, a company and a country are all organised. Ask "what is the parent?" and half the confusion goes away.'
links:
  - leaf: 'cs/trees'
    name: 'Trees'
    same: 'The DOM is a tree: one root, each element has one parent and any number of children, and you can walk it up and down.'
    differs: 'DOM nodes carry meaning and layout, and the browser re-draws when the tree changes; a plain tree in an algorithms class is just data.'
  - leaf: 'cs/text-images-sound'
    name: 'Text, images and sound'
    same: 'A page is text and files turned into pixels; colours are numbers (red, green, blue) exactly as in that lesson.'
    differs: 'Here the numbers are named rules (like "color") and the browser decides the final pixels for each screen.'
next:
  q: 'So far the page just sits there. When you tap a button and the heart turns red without the page reloading, who changed the tree, and how does the browser know you tapped?'
  leaf: 'cs/javascript-in-the-browser'
  name: 'JavaScript in the browser'
symbols:
  - s: 'tag'
    means: 'a label in angle brackets such as <h1> that says what an element is'
  - s: 'element'
    means: 'a tag with its content; one node (box) of the page tree'
  - s: 'DOM'
    means: 'Document Object Model: the browser''s live tree of elements'
  - s: 'selector'
    means: 'the part of a CSS rule that picks elements, such as .card or #menu'
  - s: 'px'
    means: 'pixel, one dot of the screen (a CSS unit of length)'
  - s: 'fr'
    means: 'fraction, a grid unit meaning a share of the leftover space'
---

:::hook
q: Here's the puzzle. A designer wants the page to look good on a 27-inch monitor and on a phone. How many separate versions of the page does she need to write?
options: ["Two: desktop and mobile", "One page with rules that adapt", "One for every phone model"]
answer: 1
right: Right. One page, plus rules like "when the screen is narrower than 600 pixels, stack the columns". The browser checks the rules on every screen, so nobody maintains two sites.
wrong: Separate sites do exist in old projects, and they are painful to keep in sync. There is a far cheaper approach: write rules that depend on the screen's width and let the browser pick.
:::

## The page is a tree {lvl=1 id=s-tree label="Foundations"}

Think of a family tree: grandparent, parents, children. A web page is the same. **HTML** is text in which pieces are wrapped in **tags**, and tags can sit inside other tags.

```html
<body>
  <h1>My trip</h1>
  <p>I saw the <a href="/fort">fort</a>.</p>
  <ul><li>Tea</li><li>Samosa</li></ul>
</body>
```

The browser reads that text and builds a tree of **elements** in memory, called the **DOM** (Document Object Model). The `<body>` is the parent; `<h1>`, `<p>` and `<ul>` are its children; the link `<a>` is a child of the paragraph. Everything later in this pillar, the styling, the scripts and the frameworks, works by reading or changing this tree.

:::figure caption="The HTML above as a tree. The browser draws a box for every node."
<svg viewBox="0 0 320 170" role="img" aria-label="Tree: body has h1, p and ul; p has a; ul has two li">
<g style="stroke:var(--rule);stroke-width:1.5;fill:none"><path d="M160 28 L60 66"/><path d="M160 28 L160 66"/><path d="M160 28 L262 66"/><path d="M160 90 L120 128"/><path d="M262 90 L222 128"/><path d="M262 90 L302 128"/></g>
<g style="fill:var(--surface);stroke:var(--mat);stroke-width:2"><rect x="130" y="10" width="60" height="22" rx="5"/><rect x="36" y="66" width="48" height="22" rx="5"/><rect x="140" y="66" width="40" height="22" rx="5"/><rect x="242" y="66" width="40" height="22" rx="5"/><rect x="100" y="128" width="40" height="22" rx="5"/><rect x="202" y="128" width="40" height="22" rx="5"/><rect x="282" y="128" width="36" height="22" rx="5"/></g>
<g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="160" y="25">body</text><text x="60" y="81">h1</text><text x="160" y="81">p</text><text x="262" y="81">ul</text><text x="120" y="143">a</text><text x="222" y="143">li</text><text x="300" y="143">li</text></g>
</svg>
:::

:::qc lvl=1
q: In the HTML above, which element is the parent of the link <a>?
options: ["body", "p", "ul"]
answer: 1
right: Right. The link sits inside the paragraph, so the paragraph is its parent and body is its grandparent.
wrong: Look at which tag the link is written inside. The nearest enclosing tag is the parent.
:::

## Say what it is: semantic HTML {lvl=1 id=s-semantic label="Foundations"}

You could build every page from the all-purpose `<div>` box. It would look identical once styled. But a `<div>` says nothing, while these say a lot:

| Tag | Meaning | What you get for free |
|---|---|---|
| `<nav>` | main navigation links | screen readers can jump straight to it |
| `<main>` | the page's central content | "skip to content" works |
| `<article>` | a self-contained item, such as a post | search engines understand units |
| `<button>` | something to press | focus with Tab, press with Enter or Space |
| `<h1>`..`<h6>` | headings, in order | a blind user can scan the outline |

A `<div onclick=...>` that looks like a button is not reachable by keyboard and is invisible to assistive tools. Use the real element and all of that comes with it. This is the first step of accessibility, which a later lesson in this pillar picks up.

## Everything is a box {lvl=1 id=s-box label="Foundations"}

**CSS** is a list of rules: a **selector** that picks elements, then properties to set. The browser turns every element into a rectangular box with four layers, from inside out:

1. **content**: the text or image itself;
2. **padding**: breathing room inside the border;
3. **border**: the visible edge;
4. **margin**: empty space pushing neighbours away.

Worked number: a card has content 200 px wide, 20 px padding, a 2 px border and a 10 px margin. Each side adds, so it occupies $200 + 2(20) + 2(2) + 2(10) = 264$ px of the row. The visible box, margin excluded, is 244 px: wider than the 200 you wrote. Read the formula as: content plus padding on both sides plus border on both sides plus margin on both sides.

```css
* { box-sizing: border-box; }   /* width now includes padding and border */
.card {
  width: 200px;
  padding: 20px;
  border: 2px solid #888;
  margin: 10px;
}
```

With `border-box` the visible box is exactly the 200 px you asked for and the content shrinks to 156. Almost every modern stylesheet starts with that first line because it matches how people think.

:::figure caption="The four layers of the box model, drawn from the outside in."
<svg viewBox="0 0 320 170" role="img" aria-label="Nested rectangles labelled margin, border, padding, content">
<rect x="40" y="10" width="240" height="150" style="fill:none;stroke:var(--muted);stroke-dasharray:5 4"/>
<rect x="64" y="32" width="192" height="106" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--ink);stroke-width:3"/>
<rect x="88" y="54" width="144" height="62" style="fill:color-mix(in srgb,var(--mat) 30%,var(--surface));stroke:var(--rule)"/>
<rect x="116" y="70" width="88" height="30" style="fill:var(--surface);stroke:var(--mat);stroke-width:2"/>
<g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="160" y="24">margin</text><text x="160" y="47">border</text><text x="160" y="67">padding</text><text x="160" y="89">content</text></g>
</svg>
:::

:::qc lvl=1
q: With the default box sizing, a box has width 100 px and padding 10 px on every side (no border). How wide is it on the page?
options: ["100 px", "110 px", "120 px"]
answer: 2
right: Right. Padding adds 10 px on the left and 10 px on the right, so 100 + 20 = 120.
wrong: Width names only the content. Padding is added on both sides of it.
:::

## Flexbox: items along a line {lvl=2 id=s-flex label="SDE-1"}

Before flexbox, lining things up was a pile of hacks. Flexbox starts from a simple picture: a container holds items along one **main axis** (a row or a column), and CSS says how to share space and align them.

```css
.toolbar {
  display: flex;            /* children become flex items */
  justify-content: space-between;  /* spread along the row */
  align-items: center;      /* centre across the row */
  gap: 12px;
}
.search { flex: 1; }        /* take all leftover space */
```

`flex: 1` means "grow to fill what is left". If two items have `flex: 1` and `flex: 2`, the leftover space is split 1 to 2. To centre one thing in both directions, `display:flex; justify-content:center; align-items:center;` on its parent does it, answering the famous interview question.

## Grid: rows and columns together {lvl=2 id=s-grid label="SDE-1"}

Flexbox thinks in one dimension. When a page needs rows and columns that line up, use **grid**.

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* three equal shares */
  gap: 16px;
}
.hero { grid-column: 1 / -1; }  /* span the full width */
```

Here `1fr` is one fraction of the free space, so three columns of `1fr` each take a third. Rule of thumb: **flexbox for a row of things (a toolbar, a card's insides), grid for the page's overall frame or a gallery**. They nest happily: a grid of cards, each card flexbox inside.

:::qc lvl=2
q: A row of three flex items has flex values 1, 2 and 3 and no other sizing. What share of the row does the item with value 3 get?
options: ["One third", "Half", "One sixth"]
answer: 1
right: Right. The shares are 1 + 2 + 3 = 6 parts, and 3 of 6 is a half.
wrong: Add the three numbers to get the total parts, then take 3 out of that total.
:::

## One page, every screen {lvl=2 id=s-responsive label="SDE-1"}

Three ingredients make a page responsive:

1. **The viewport tag.** Without `<meta name="viewport" content="width=device-width, initial-scale=1">` in the head, phones pretend to be a wide desktop and shrink everything.
2. **Flexible sizes.** Prefer percentages, `fr`, `rem` (relative to the base font size) and `max-width` over fixed pixel widths.
3. **Media queries**: rules applied only when a condition holds.

```css
.layout { display: grid; gap: 16px; }          /* phone: one column */
@media (min-width: 700px) {
  .layout { grid-template-columns: 1fr 3fr; }  /* wider: sidebar + main */
}
img { max-width: 100%; height: auto; }         /* never overflow the screen */
```

The order matters: write the **phone layout first** and add rules as the screen grows ("mobile first"). The base layout is simplest, and small phones load less CSS they do not need. The breakpoints (700 px here) should come from where your content starts to look bad, not from device names.

## Who wins: the cascade {lvl=3 id=s-cascade label="SDE-2"}

Many rules can target the same element. "Cascading" is the fixed procedure for picking the winner:

1. **Importance** (`!important` beats normal, and is best avoided);
2. **Specificity**: more specific selectors beat less specific ones;
3. **Order**: if still tied, the rule written last wins.

Specificity is counted as three numbers (ids, classes, tags):

| Selector | ids | classes | tags | Reading |
|---|---|---|---|---|
| `p` | 0 | 0 | 1 | weak |
| `.note` | 0 | 1 | 0 | beats any number of tags |
| `nav .link a` | 0 | 1 | 2 | class beats tags |
| `#menu a` | 1 | 0 | 1 | one id beats any number of classes |

Compare left to right: ids first, then classes, then tags. So `#menu a` (1,0,1) beats `.a.b.c.d` (0,4,0). Some properties, such as colour and font, are **inherited** from the parent when no rule sets them, while others, like margin and border, are not.

Big stylesheets turn into specificity wars when people add `!important` to win. The cure is low-specificity, class-based selectors with consistent naming, so order and not force settles ties. [Inference: this is a common team practice, not a rule of the language.]

Performance footnote: changing a property that affects size or position (width, margin) makes the browser recompute layout, which is costlier than changing colour. Later lessons return to this.

:::qc lvl=3
q: Two rules target the same link. Rule A is `.menu a` and rule B is `a:hover`. Which is more specific?
options: ["A: (0,1,1) beats B: (0,1,1) only by order", "They tie, since :hover is a class-like pseudo-class and both are (0,1,1)", "B always wins since hover is dynamic"]
answer: 1
right: Right. A pseudo-class like :hover counts as a class, so both are (0,1,1) and the later one in the file wins.
wrong: Count each selector's ids, classes (pseudo-classes count here) and tags. Then compare the three numbers.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. HTML gives structure; the browser builds a tree of elements called the DOM. {lvl=1}
2. Use semantic tags (nav, main, button, headings) because meaning gives accessibility for free. {lvl=1}
3. Every element is a box: content, padding, border, margin; `box-sizing: border-box` makes width mean what you expect. {lvl=1}
4. Flexbox arranges items in one line; grid arranges rows and columns; they nest. {lvl=2}
5. Responsive means a viewport tag, flexible units and media queries, written mobile first. {lvl=2}
6. The cascade decides clashes: importance, then specificity (ids, classes, tags), then order. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Using `<div>` for buttons and links: they lose keyboard and screen-reader support. {lvl=1}
- Forgetting `box-sizing: border-box` and wondering why boxes overflow their parents. {lvl=1}
- Missing the viewport meta tag, so the phone shows a shrunken desktop page. {lvl=2}
- Fixed pixel widths that cause sideways scrolling on small screens. {lvl=2}
- Fighting specificity with `!important` instead of simplifying selectors. {lvl=3}
- Reaching for a framework to centre a box: two lines of flexbox do it. {lvl=2}
:::
