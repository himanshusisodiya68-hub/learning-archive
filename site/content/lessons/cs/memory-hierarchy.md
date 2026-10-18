---
title: Memory hierarchy and caches
summary: Why a computer keeps its data in several layers, from a few instant bytes to a slow giant disk, and how that shapes fast code.
ncert: []
up_to: SDE-2
builds_on: [How a CPU runs a program, Arrays and dynamic arrays]
notes_prompt: Explain to a friend, using a desk, a bookshelf and a library, why a computer has several kinds of memory instead of one big fast one.
margin:
  - kind: history
    title: History
    text: Early machines kept all data on slow storage such as drums or tapes, and the idea of a small fast memory in front of a big slow one was proposed in the 1960s [Unverified dates from memory]. Today every processor, phone and server uses caches in layers.
  - kind: tip
    title: Interview favourite
    text: '"Why is iterating a 2D array row by row faster than column by column?" and "array or linked list?" are both memory-hierarchy questions. The answer is locality: neighbours in memory arrive together.'
  - kind: olympiad
    title: Hardest stretch
    text: Two threads that update different variables sitting on the same cache line can slow each other down badly, because the line bounces between cores. This is called false sharing.
books:
  - { title: "D. Patterson and J. Hennessy, Computer Organization and Design", ref: "the chapter on the memory hierarchy [Unverified chapter number]" }
  - { title: "R. Arpaci-Dusseau and A. Arpaci-Dusseau, Operating Systems: Three Easy Pieces (OSTEP)", ref: "the chapters on caching in the memory and persistence parts [Unverified]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 3 Storage and Retrieval, for how databases cope with slow disks [Unverified chapter]" }
cards:
  - { front: "Why does a computer have several kinds of memory?", back: "Fast memory is small and expensive; big memory is slow and cheap. Layers give the speed of the top and the size of the bottom, if the right data sits at the top." }
  - { front: "Rough latency of L1, RAM and SSD?", back: "About 1 ns, 100 ns and 100 microseconds: each step is roughly 100 times slower. A hard disk is about 10 milliseconds. (Orders of magnitude only.)" }
  - { front: "What are the two kinds of locality?", back: "Temporal: data used lately is likely to be used again soon. Spatial: data next to what you just used is likely to be used soon." }
  - { front: "What is a cache hit and a cache miss?", back: "A hit: the wanted data is already in the cache. A miss: it is not, so it is fetched from the slower level below, and a whole line of neighbours comes with it." }
  - { front: "Average memory access time formula?", back: "AMAT = hit time + miss rate × miss penalty. Dropping the miss rate helps far more than shaving the hit time." }
  - { front: "Which memory loses its data when power goes off?", back: "RAM and the caches (volatile). SSDs and hard disks keep data without power (persistent)." }
core:
  idea: 'Fast memory is small and slow memory is big, so computers stack them in layers and keep recently used data (and its neighbours) in the fast ones. Programs that reuse data and touch nearby addresses run far faster because most accesses hit the top layers.'
  formulas:
    - tex: '\text{AMAT}=t_{\text{hit}}+m\times t_{\text{miss}}'
      label: 'Average time per memory access'
    - tex: 'm_{\text{scan}}=s/L'
      label: 'Miss rate of a sequential scan: element size over cache-line size'
  conditions:
    - 'Programs show locality: they reuse data, and they use data near other data'
    - 'Each layer is smaller and faster than the one below, and holds a copy of part of it'
    - 'For the scan formula: elements are packed side by side, as in an array, and the line is fetched whole'
  sign: 'The latency numbers are orders of magnitude, not exact: they differ by chip and year. Trust the ratios (about 100 times per step), not the digits.'
outcomes:
  - 'Name the layers from registers to disk and give each one a rough speed and size'
  - 'Explain why we cannot just build everything from the fastest memory'
  - 'Define a cache hit, a miss, temporal and spatial locality, and a cache line'
  - 'Use the AMAT formula to estimate average access time'
  - 'Predict which loop or data structure is cache-friendly, and describe cache coherence and false sharing'
opener:
  story: |
    You open a big app for the first time after a restart and it takes several seconds. You close it and open it again, and it appears at once. You did not buy faster hardware in between. What changed?

    Here is a stranger version. A program adds up a million numbers stored in a list, and a second program adds the same million numbers stored in a linked chain. Both do exactly a million additions, yet one can be several times slower.

    The CPU did the same *work*. What differed was how long it spent **waiting for the data to arrive**, and that is what this lesson is about.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A stack of boxes, small and fast at the top, large and slow at the bottom, with a stopwatch beside it"><g style="stroke:var(--ink);stroke-width:1.5"><rect x="130" y="24" width="60" height="26" rx="4" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface))"/><rect x="104" y="58" width="112" height="30" rx="4" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface))"/><rect x="72" y="96" width="176" height="34" rx="4" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface))"/><rect x="36" y="138" width="248" height="38" rx="4" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface))"/><rect x="12" y="184" width="296" height="44" rx="4" style="fill:var(--surface)"/></g><g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="160" y="42">cache</text><text x="160" y="77">more cache</text><text x="160" y="117">RAM</text><text x="160" y="161">SSD</text><text x="160" y="210">hard disk</text></g><g style="font-size:9px;fill:var(--muted)"><text x="196" y="42">1 ns</text><text x="222" y="77">4 ns</text><text x="254" y="117">100 ns</text><text x="288" y="161" style="text-anchor:end">100 us</text></g><text x="20" y="18" style="font-size:10px;fill:var(--c)">small + fast</text><text x="20" y="238" style="font-size:10px;fill:var(--muted)">big + slow</text></svg>'
life:
  - 'A desk, a bookshelf and a library: the things you use all day are on the desk, and the rest is further away and slower to fetch. Computers do the same with data.'
  - 'A phone app opens instantly the second time because its code and data are now in RAM, a fast layer, instead of in flash storage.'
  - 'Websites load faster when your browser or a nearby server (CDN) keeps a copy of the images: the same idea one level out.'
  - 'A cashier keeps small change in the till and bundles of notes in the safe: frequent needs go within arm''s reach, the rest further back.'
models:
  - name: 'Fast and big do not come together'
    text: 'Everywhere you look, closer is smaller: your pocket, your bag, your cupboard, your warehouse. The sensible answer is layers, with the most-used things nearest. Design any storage or workflow that way.'
  - name: 'Locality: the past predicts the near future'
    text: 'What you used a moment ago, and what sits next to it, is what you will probably want next. Libraries, supermarkets (milk at the back, snacks near the till) and cricket field placements are built on this.'
  - name: 'Average cost beats best case'
    text: 'A rare slow event can dominate. If 5 in 100 trips cost 100 times as much, they matter more than the other 95. Measure the average and the tail before you optimise.'
links:
  - leaf: 'cs/arrays'
    name: 'Arrays'
    same: 'An array stores elements side by side, which is exactly what makes cache lines useful.'
    differs: 'Arrays are an abstract data structure; this lesson explains the hardware reason they are usually faster than they look on paper.'
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'Application caches (Redis, a browser cache) use the same bet: keep copies of recently used data in a faster, smaller place.'
    differs: 'Software caches must decide what to store and when copies go stale; a CPU cache does this in hardware, automatically, with fixed rules.'
  - leaf: 'cs/virtual-memory'
    name: 'Virtual memory'
    same: 'RAM acts as a cache for the disk: pages in use stay in RAM, and the rest are kept on disk.'
    differs: 'Virtual memory is managed by the operating system in pages of a few kilobytes; CPU caches are managed by hardware in lines of tens of bytes.'
next:
  q: 'All of this machinery moves patterns of bits around. But a pattern like 01000001 can mean the number 65, the letter A, or part of a colour. What decides which one it is?'
  leaf: 'cs/values-and-types'
  name: 'Values and types'
symbols:
  - s: '\text{AMAT}'
    means: 'average memory access time: the average wait per memory access (nanoseconds, ns)'
  - s: 't_{\text{hit}}'
    means: 'time for an access that finds its data in the cache (ns)'
  - s: 't_{\text{miss}}'
    means: 'extra time paid when the data is not in the cache and must come from the layer below (ns)'
  - s: 'm'
    means: 'miss rate: fraction of accesses that miss (a number from 0 to 1)'
  - s: 's'
    means: 'size of one array element (bytes)'
  - s: 'L'
    means: 'cache line size: the block fetched on a miss (bytes, commonly 64)'
  - s: '\text{ns},\ \mu\text{s},\ \text{ms}'
    means: 'nanosecond, microsecond, millisecond: a billionth, a millionth and a thousandth of a second'
---

:::hook
q: Here is the puzzle. Imagine the CPU's fastest cache takes 1 second to answer. How long, on the same scale, does a trip to main memory (RAM) take?
options: ["A few seconds", "A couple of minutes", "A few hours"]
answer: 1
right: Right. Cache takes about 1 ns and RAM about 100 ns, so on a scale where 1 ns is 1 second, RAM costs about 100 seconds, nearly 2 minutes. A fast SSD would be about a day, and a spinning hard disk months. [Numbers are rough orders of magnitude and vary by hardware.]
wrong: Remember that RAM feels instant to you, but the CPU counts in fractions of a nanosecond. RAM is roughly a hundred times slower than the fastest cache. Scale 100 ns to seconds.
:::

## Why not one big fast memory? {lvl=1 id=s-why label="Foundations"}

Imagine your study desk. The page you are reading lies in front of you and reaching it takes no time. The books you need today are on a shelf behind you, a short walk away. All the other books are in the library across town. You could not fit the library on your desk, and you would not want to walk to town for every sentence.

Computers face the same problem, for two reasons. **Fast memory is small**: it sits right next to the CPU, and there is only so much room there. **Fast memory is expensive**: a gigabyte of the fastest kind costs far more than a gigabyte of disk. So computers use **layers**, each one bigger, slower and cheaper than the one above.

| Layer | Typical size | Rough latency | If 1 ns = 1 second |
|---|---|---|---|
| Registers | a few hundred bytes | under 1 ns | instant |
| L1 cache | 32 to 64 KB per core | 1 ns | 1 second |
| L2 cache | 256 KB to a few MB | 4 ns | 4 seconds |
| L3 cache | several to tens of MB, shared | 10 to 40 ns | about half a minute |
| RAM | 8 to 64 GB | 100 ns | nearly 2 minutes |
| SSD | 256 GB to a few TB | 100 microseconds | about a day |
| Hard disk | 1 to 20 TB | 10 ms | about 4 months |

(Orders of magnitude only [Unverified]; they differ by chip and year.) Notice the pattern: each step down is roughly 100 times slower and holds much more.

:::figure caption="The memory hierarchy as a pyramid: the top is tiny and quick, the bottom is vast and slow. Each layer holds copies of the part of the layer below that is in use."
<svg viewBox="0 0 360 190" role="img" aria-label="A pyramid of memory layers from registers at the top to hard disk at the bottom with sizes and latencies">
<g style="stroke:var(--ink);stroke-width:1.3">
<polygon points="180,10 210,34 150,34" style="fill:color-mix(in srgb,var(--c) 50%,var(--surface))"/>
<polygon points="150,34 210,34 232,58 128,58" style="fill:color-mix(in srgb,var(--c) 38%,var(--surface))"/>
<polygon points="128,58 232,58 254,82 106,82" style="fill:color-mix(in srgb,var(--c) 28%,var(--surface))"/>
<polygon points="106,82 254,82 276,106 84,106" style="fill:color-mix(in srgb,var(--c) 20%,var(--surface))"/>
<polygon points="84,106 276,106 298,130 62,130" style="fill:color-mix(in srgb,var(--c) 13%,var(--surface))"/>
<polygon points="62,130 298,130 320,154 40,154" style="fill:color-mix(in srgb,var(--c) 7%,var(--surface))"/>
<polygon points="40,154 320,154 342,180 18,180" style="fill:var(--surface)"/>
</g>
<g style="fill:var(--ink);font-size:10px;text-anchor:middle"><text x="180" y="29">reg</text><text x="180" y="51">L1</text><text x="180" y="75">L2 / L3</text><text x="180" y="99">RAM</text><text x="180" y="123">SSD</text><text x="180" y="147">hard disk</text></g>
<g style="fill:var(--muted);font-size:9px"><text x="228" y="51">1 ns</text><text x="250" y="75">4 to 40 ns</text><text x="272" y="99">100 ns</text><text x="294" y="123">100 us</text><text x="316" y="147">10 ms</text><text x="26" y="40">smaller</text><text x="26" y="52">faster</text><text x="296" y="172">bigger, slower</text></g>
</svg>
:::

:::qc lvl=1
q: Why not build all of a computer's memory from the fastest kind?
options: ["It is too small and too costly at that scale", "It would be too slow", "It would lose data"]
answer: 0
right: Right. The fastest memory is expensive and must sit close to the CPU, so there is room for only a little of it.
wrong: Think of the desk. What limits how much you can keep within arm's reach?
:::

## Caches: keep what you will want again {lvl=1 id=s-cache label="Foundations"}

A **cache** is a small fast layer holding copies of data from a bigger, slower one. When the CPU wants a value it checks the cache first. If the value is there, that is a **hit** and the answer comes back fast. If not, it is a **miss**: the CPU goes down to the next layer, and a copy lands in the cache on its way back.

The bet is that the cache will usually have what you want. That works because programs are not random: they reuse things and they use things near each other, which is called **locality**. Without locality, caches would be useless.

:::qc lvl=1
q: A program asks for a value and the cache has it. What is that called?
options: ["A miss", "A hit", "A flush"]
answer: 1
right: Right. A hit means the data was already in the cache.
wrong: Which word means the cache had the answer?
:::

## Two kinds of locality {lvl=2 id=s-locality label="SDE-1"}

**Temporal locality**: if you used something just now, you will probably use it again soon. A loop counter or a variable in a loop is read thousands of times.

**Spatial locality**: if you used something, you will probably use its **neighbours** soon. Walking through an array reads element 0, then 1, then 2.

Hardware exploits spatial locality by fetching a whole **cache line** at a time, commonly 64 bytes [Unverified for any given chip], not a single byte. A miss on element 0 of an array of 8-byte numbers brings elements 0 to 7 into the cache together, so the next seven accesses are hits. The miss rate of a sequential scan is then the element size over the line size:

$$m_{\text{scan}} = \frac{s}{L} = \frac{8}{64} = 12.5\%$$

Read it as: one access in eight has to wait for memory; the other seven are free rides.

Compare an array to a linked list. The array's elements are packed in one block, so a scan is nearly all hits. The nodes of a linked list may be scattered all over RAM, so each step may be a miss. Both do the same number of additions, but the chain can wait up to eight times as long, and often it does [Inference: depends on how the nodes were allocated].

The same idea decides how to loop over a table. In memory the table is stored row after row, so going along a row visits neighbours, while going down a column jumps a full row each time:

```python
import numpy as np
grid = np.zeros((4000, 4000))           # stored row after row
by_rows = sum(grid[i, :].sum() for i in range(4000))   # neighbours: fast
by_cols = sum(grid[:, j].sum() for j in range(4000))   # big jumps: slower
```

With NumPy arrays the column version is typically noticeably slower [Inference: effect size depends on the machine]. With plain Python lists the effect is muddied, because list items are pointers to objects scattered in memory.

:::qc lvl=2
q: A scan of an array of 4-byte integers uses 64-byte cache lines. What fraction of accesses miss?
options: ["1 in 4", "1 in 16", "1 in 64"]
answer: 1
right: Right. A line holds 64 / 4 = 16 integers, so one miss brings the next 15 for free.
wrong: How many integers fit in one 64-byte line? One miss per line.
:::

## Average access time {lvl=2 id=s-amat label="SDE-1"}

How much does a cache help overall? Every access pays the **hit time**, and the fraction $m$ that miss also pay the **miss penalty**. The **average memory access time** is

$$\text{AMAT} = t_{\text{hit}} + m \times t_{\text{miss}}$$

Read it as: the basic cost, plus how often you miss times how much a miss costs. With a 1 ns hit time, a 5% miss rate and a 100 ns penalty, $\text{AMAT} = 1 + 0.05 \times 100 = 6$ ns. Even a small miss rate makes the average six times worse than a hit, because a miss is a hundred times as slow.

Levels chain. If L1 misses it asks L2, which may also miss and ask RAM. With L1 hit 1 ns and 10% misses, L2 hit 5 ns and 20% of those missing, and RAM 100 ns:

$$\text{AMAT} = 1 + 0.1 \times (5 + 0.2 \times 100) = 3.5 \text{ ns}$$

Read it as: the inner bracket is the average cost of an L1 miss, and only 10% of accesses pay it.

:::qc lvl=2
q: Hit time 1 ns, miss rate 2%, miss penalty 100 ns. What is the AMAT?
options: ["2 ns", "3 ns", "102 ns"]
answer: 1
right: Right. 1 + 0.02 × 100 = 3 ns.
wrong: Add the hit time to (miss rate times penalty). What is 0.02 times 100?
:::

## Lower layers: RAM, SSD and disk {lvl=2 id=s-lower label="SDE-1"}

**RAM** is volatile: it forgets everything when the power goes off. So are the caches. **SSDs** (flash chips, no moving parts) and **hard disks** (a spinning platter with a moving read head) are persistent: they keep data without power.

The big gap is between RAM and storage. A hard disk must physically move its head and wait for the platter to turn, which is why one random access takes about 10 ms. An SSD has no moving parts and answers in about 100 microseconds, roughly 100 times faster, and still about 1,000 times slower than RAM [Unverified: typical orders of magnitude].

There is one more trick. Reading a long sequence in a row is much cheaper per byte than random reads, since the device streams it. That is why databases and file systems try to keep related data together and read it in big blocks.

:::qc lvl=2
q: Which of these keeps its data when the computer is switched off?
options: ["RAM", "L1 cache", "An SSD"]
answer: 2
right: Right. Flash storage is persistent. RAM and caches are volatile.
wrong: Which one is used to store your photos and files for years?
:::

## Inside a real cache {lvl=3 id=s-inside label="SDE-2"}

A cache cannot keep every line in one pile and search it: that would be too slow. A real cache splits lines into **sets** by part of the address, and each address may sit only in its set, in one of a few slots (**associativity**, typically a few to a few dozen ways [Unverified]). When a set is full, a **replacement policy** evicts a line, often something close to **least recently used** (LRU), the same rule many software caches use.

**Writes** need a rule too. With **write-through** every write also goes to the level below, which is simple and slow. With **write-back** the cache marks the line dirty and writes it down only when it is evicted, which is faster but needs care.

With several cores, each with its own L1 and L2, the same line can sit in two caches, and one core could update its copy while the other reads a stale one. Hardware **cache coherence** protocols keep copies consistent, passing ownership of a line between cores. That is invisible to correct code but costs time. When two threads write different variables that happen to share a line, the line bounces between the cores on every write, a slowdown called **false sharing**. The usual fix is padding, so each thread's hot variable has a line to itself. [Inference: details vary by processor family.]

:::qc lvl=3
q: Two threads, on different cores, each increment their own counter, but both counters sit in the same cache line. What happens?
options: ["Nothing, they are separate variables", "The line bounces between cores and both slow down", "The program crashes"]
answer: 1
right: Right. Each write invalidates the other core's copy of the line, so ownership ping-pongs. The program stays correct but slow, which is false sharing.
wrong: Caches deal in whole lines, not single variables. What must happen to the other core's copy when one core writes to the line?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Fast memory is small and costly, so computers stack layers: registers, caches, RAM, SSD, disk; each step is roughly 100 times slower. {lvl=1}
2. A cache keeps copies of recently used data; a hit is fast, a miss goes down a layer. {lvl=1}
3. Caches work because of locality: reuse (temporal) and neighbours (spatial). {lvl=2}
4. Hardware fetches a whole cache line (about 64 bytes), so an array scan misses only about once per line. {lvl=2}
5. AMAT = hit time + miss rate × miss penalty; a small miss rate still matters because misses are so slow. {lvl=2}
6. Real caches use sets, replacement policies, write-back and coherence between cores; false sharing is the costly trap. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The latency numbers are orders of magnitude, not exact. Remember the ratios, not the digits. {lvl=1}
- Same operation count does not mean same speed: access pattern matters as much as the number of steps. {lvl=2}
- Prefer arrays and contiguous data for hot loops; linked structures scatter data and cause misses. {lvl=2}
- Walk multi-dimensional arrays in the order they are stored in memory. {lvl=2}
- Sequential access is far cheaper than random on every layer, from RAM to disk. {lvl=2}
- Do not put hot variables for different threads on the same cache line. {lvl=3}
:::
