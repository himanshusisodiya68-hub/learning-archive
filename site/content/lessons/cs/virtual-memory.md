---
title: Virtual memory
summary: How your laptop runs more programs than its memory could hold, and why each program believes it has the whole machine to itself.
ncert: []
up_to: SDE-3
builds_on: [Variables and memory, Memory hierarchy and caches, Processes and threads]
notes_prompt: Explain to a friend why two programs can both use "address 4096" at the same time without overwriting each other, and why a laptop with 8 GB of memory can run 12 GB of programs.
margin:
  - kind: history
    title: History
    text: The idea of showing programs a bigger, tidier memory than the machine really has came from the Atlas computer at Manchester around 1960 to 1962 [Unverified]. Every phone and laptop you own now does it in hardware.
  - kind: tip
    title: Interview favourite
    text: '"What happens when a program touches an address that is not in RAM?" is the classic question. Walk through the translation, the page fault, the disk read, and the retry of the same instruction.'
  - kind: olympiad
    title: Design link
    text: Containers and virtual machines add one more layer of translation on top of this one. Memory limits, swap and huge pages are the knobs behind most "why was my server killed?" mysteries.
books:
  - { title: "R. Arpaci-Dusseau and A. Arpaci-Dusseau, Operating Systems: Three Easy Pieces (OSTEP)", ref: "the chapters on address spaces, paging, TLBs, multi-level page tables and swapping [Unverified chapter numbers]" }
  - { title: "A. Silberschatz et al., Operating System Concepts", ref: "the main-memory and virtual-memory chapters [Unverified chapter numbers]" }
  - { title: "R. Bryant and D. O'Hallaron, Computer Systems: A Programmer's Perspective", ref: "the virtual-memory chapter [Unverified chapter number]" }
cards:
  - { front: "What is virtual memory in one sentence?", back: "Every program gets its own private set of addresses, and the OS plus a hardware unit translate each one to a real place in RAM (or on disk) at the moment it is used." }
  - { front: "What are a page, a frame and a page table?", back: "A page is a fixed-size chunk (usually 4 KiB) of a program's addresses. A frame is a chunk of real RAM of the same size. The page table is the per-program map from pages to frames." }
  - { front: "How is a virtual address split?", back: "The low bits (12 for 4 KiB pages) are the offset inside the page and pass through unchanged. The high bits are the page number, which the table translates into a frame number." }
  - { front: "What is the TLB, and why does it exist?", back: "A tiny, very fast cache of recent translations. Without it every memory access would first need several extra memory reads to walk the page table." }
  - { front: "What is a page fault, and is it an error?", back: "The program touched a page that is allowed but not currently in RAM. The OS loads it (from disk or a file) and retries the instruction. Touching a page that is not allowed is a segmentation fault instead." }
  - { front: "What is thrashing?", back: "The busy pages of all programs together do not fit in RAM, so the machine spends its time swapping pages in and out and gets almost no real work done." }
core:
  idea: 'Virtual memory gives every program its own private addresses. Hardware and the operating system translate each address, one fixed-size page at a time, to a real place in RAM or on disk only when it is used. So programs are isolated, laid out the same way, and can together use more memory than the machine has.'
  formulas:
    - tex: '\text{physical address} = \text{frame} \times P + \text{offset}'
      label: 'The translation (P = page size, offset passes through unchanged)'
    - tex: '\text{page} = \lfloor \text{address} / P \rfloor, \quad \text{offset} = \text{address} \bmod P'
      label: 'Splitting a virtual address'
    - tex: '\text{EAT} = h\,(t_{\text{tlb}} + t_{\text{mem}}) + (1-h)\,(t_{\text{tlb}} + k\,t_{\text{mem}} + t_{\text{mem}})'
      label: 'Average access time with a TLB (h = hit rate, k = table levels)'
  conditions:
    - 'Hardware has a memory-management unit that translates every access'
    - 'Pages and frames are the same fixed size, so any page can sit in any frame'
    - 'Programs show locality: at any moment they use a small working set of their pages'
    - 'Disk is far slower than RAM, so page faults must be rare'
  sign: 'A page fault is not a bug, it is the system working: the page is allowed, just not here yet. A segmentation fault is the bug: the address was never yours.'
outcomes:
  - 'Explain why two programs can use the same address without clashing'
  - 'Split a virtual address into page number and offset and translate it with a page table'
  - 'Describe what happens on a TLB miss and on a page fault, step by step'
  - 'Estimate average memory access time from the TLB hit rate and the cost of a fault'
  - 'Diagnose swapping, thrashing and out-of-memory kills on a real server'
opener:
  story: |
    Your laptop has 8 GB of memory. Right now Chrome is using about 6 GB, a game is using 4 GB, your editor is using 2 GB, and a video call is using another 1 GB. Add them up: 13 GB, on a machine with 8.

    And nothing crashed. Stranger still, every one of those programs believes it has a big, empty, private memory all to itself, starting at the same low address. If the game writes to "address 4096" and Chrome writes to "address 4096" a millisecond later, neither one overwrites the other.

    Somebody is lying to these programs, and doing it so well that none of them notices. Who is it, and what is the trick?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two programs each see addresses starting at zero; a translator maps their pieces to different places in one shared memory, and some pieces to disk"><text x="14" y="18" style="font-size:10px;fill:var(--muted)">what programs see</text><rect x="14" y="26" width="64" height="170" rx="4" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--ink);stroke-width:1.5"/><rect x="14" y="26" width="64" height="40" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--ink)"/><rect x="14" y="106" width="64" height="30" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--ink)"/><text x="22" y="210" style="font-size:10px;fill:var(--ink)">Game: 0 ...</text><rect x="100" y="26" width="64" height="170" rx="4" style="fill:color-mix(in srgb,var(--bad) 10%,var(--surface));stroke:var(--ink);stroke-width:1.5"/><rect x="100" y="46" width="64" height="40" style="fill:color-mix(in srgb,var(--bad) 40%,var(--surface));stroke:var(--ink)"/><rect x="100" y="146" width="64" height="30" style="fill:color-mix(in srgb,var(--bad) 40%,var(--surface));stroke:var(--ink)"/><text x="104" y="210" style="font-size:10px;fill:var(--ink)">Chrome: 0 ...</text><text x="196" y="18" style="font-size:10px;fill:var(--muted)">real RAM</text><rect x="196" y="26" width="52" height="170" rx="4" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><rect x="196" y="40" width="52" height="24" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--ink)"/><rect x="196" y="76" width="52" height="24" style="fill:color-mix(in srgb,var(--bad) 40%,var(--surface));stroke:var(--ink)"/><rect x="196" y="112" width="52" height="24" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--ink)"/><rect x="196" y="148" width="52" height="24" style="fill:color-mix(in srgb,var(--bad) 40%,var(--surface));stroke:var(--ink)"/><rect x="266" y="120" width="44" height="76" rx="6" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3"/><text x="272" y="150" style="font-size:10px;fill:var(--muted)">disk</text><path d="M78 46 C140 46 150 52 194 52" style="fill:none;stroke:var(--c);stroke-width:1.5"/><path d="M78 121 C140 121 150 124 194 124" style="fill:none;stroke:var(--c);stroke-width:1.5"/><path d="M164 66 C180 66 180 88 194 88" style="fill:none;stroke:var(--bad);stroke-width:1.5"/><path d="M164 161 C180 161 180 160 194 160" style="fill:none;stroke:var(--bad);stroke-width:1.5"/><path d="M78 126 C150 190 230 190 264 170" style="fill:none;stroke:var(--muted);stroke-width:1.2;stroke-dasharray:4 3"/><text x="110" y="232" style="font-size:10px;fill:var(--muted)">the translator keeps the map</text></svg>'
life:
  - 'Every app on your phone believes it owns the whole memory, yet an app that misbehaves cannot read your banking app''s data.'
  - 'Opening a 2 GB game starts in seconds, because only the pages you actually touch are loaded, not the whole file.'
  - 'Switching back to a tab you left open for hours is sometimes slow: its pages were pushed out to make room, and are being brought back.'
  - 'When a Linux server kills a process with "Out of memory", the promises that virtual memory makes ran into the real RAM limit.'
  - 'Starting a new process on Linux is cheap because the child first shares the parent''s pages and copies a page only when one of them writes to it.'
models:
  - name: 'The address is a name, not a place'
    text: 'A flat number on a letter is not a spot on the map; the post office translates it. Whenever a name is separated from the thing it points to by a lookup, you can move the thing, share it, or hide it without telling the user. Phone numbers, URLs and bank account numbers all work this way.'
  - name: 'Promise more than you hold'
    text: 'Airlines sell more seats than exist, banks lend out more than the deposits on hand, and the OS hands out more memory than the RAM. It works because not everyone claims their share at once. It fails badly when they do (a run on the bank, thrashing).'
  - name: 'Keep the busy few close'
    text: 'Of everything you own, you use a small part daily. A desk holds today''s papers, a cupboard holds last year''s, an archive holds the rest. Put the working set on the fastest layer and the rest on the cheapest.'
links:
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'Both rely on locality: programs reuse a small set of data, so a small fast layer in front of a big slow layer feels almost as fast as the fast one.'
    differs: 'Caches are managed by hardware, in 64-byte lines, to hide latency. Virtual memory is managed by the OS, in 4 KiB pages, and also gives isolation and a private address space.'
  - leaf: 'cs/processes-and-threads'
    name: 'Processes and threads'
    same: 'A process is largely its address space; creating a process means building a new page table.'
    differs: 'Threads of one process share one address space and one page table, which is why they can touch each other''s data and processes cannot.'
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'The TLB is a cache of translations and RAM is a cache of disk, with the same questions of hit rate and what to evict.'
    differs: 'A software cache can return stale data and is your design choice; the TLB and the page cache must always agree with the page table, so the OS invalidates entries when mappings change.'
  - leaf: 'mat/modular-arithmetic'
    name: 'Modular arithmetic'
    same: 'The offset inside a page is the address mod the page size, the same remainder idea as a clock or a hash slot.'
    differs: 'Page sizes are powers of two, so the "mod" is free: just keep the low bits and no division happens.'
next:
  q: 'RAM forgets everything when the power goes off, and a page that is swapped out has to live somewhere. Where do your photos stay after you shut down, and how does the computer find "holiday.jpg" among millions of blocks on a disk?'
  leaf: 'cs/file-systems'
  name: 'File systems'
symbols:
  - s: 'P'
    means: 'page size, the chunk the OS moves and maps at a time (usually 4096 bytes, written 4 KiB)'
  - s: '\text{offset}'
    means: 'position of a byte inside its page, from 0 to P - 1 (bytes)'
  - s: '\text{frame}'
    means: 'the number of a real RAM chunk the same size as a page (count)'
  - s: '\text{EAT}'
    means: 'effective access time: the average time for one memory access (nanoseconds, ns)'
  - s: 'h'
    means: 'TLB hit rate: the fraction of accesses whose translation is found in the TLB (0 to 1)'
  - s: 't_{\text{mem}}'
    means: 'time for one read of RAM (about 100 ns)'
  - s: 'k'
    means: 'number of page-table levels walked on a TLB miss (4 on a typical 64-bit PC)'
  - s: '\lfloor x \rfloor'
    means: 'x rounded down to a whole number'
---

:::hook
q: Here's the puzzle. Chrome, a game, an editor and a call want 13 GB between them on an 8 GB laptop. How is that possible?
options: ["Each program secretly compresses itself to fit", "Programs rarely touch all their memory at once, so the OS keeps only the busy pieces in RAM and parks or delays the rest", "The computer refuses to run the last program"]
answer: 1
right: Right. The numbers programs report are mostly promises. The OS gives each program a private map of addresses, fills in real RAM only for the pieces actually in use, and keeps the rest on disk or never loads it. (Real laptops add compression and other tricks too.)
wrong: Programs are not compressed and the computer does not refuse. Think about how much of a game's memory it touches in one second, and about a library that keeps only the books people are reading on the front desk.
:::

## The problem: one memory, many programs {lvl=1 id=s-problem label="Foundations"}

Picture a hotel with 100 rooms and 30 guests. If every guest were told "your room is number 47", there would be fights. So reception does something clever: each guest is told "you have rooms 1, 2, 3...", and reception keeps a private table: guest A's room 1 is really room 62, guest B's room 1 is really room 17. Guests never learn the real numbers, and cannot even ask for another guest's room, because their own list does not contain it.

That is **virtual memory**. The numbers a program uses are **virtual addresses**: names in the program's private list. The numbers of the real memory chips are **physical addresses**. The OS and a piece of hardware inside the CPU, the **memory-management unit (MMU)**, translate virtual to physical on **every** memory access.

Why go to this trouble? Three gifts come with it:

- **Isolation.** A program can only name its own memory. A buggy game cannot scribble over your browser, and malware cannot simply read another app's data.
- **Convenience.** Every program can be laid out the same way (code here, stack there) without asking where free memory happens to be.
- **Room to stretch.** The map can say "this room does not exist yet" or "this room is in the cupboard (disk)". So the total can exceed real RAM.

:::qc lvl=1
q: Two programs both write to virtual address 4096. What happens?
options: ["The second overwrites the first", "Each write lands in a different real location, because each program has its own map", "The OS refuses the second write"]
answer: 1
right: Right. The same virtual address means different things in different programs; the translation sends them to different physical places.
wrong: A virtual address is a name in a private list, not a spot on the chip. Whose list is it looked up in?
:::

## Pages and page tables {lvl=2 id=s-pages label="SDE-1"}

Keeping a table entry for every single byte would need more memory than the data. So the OS cuts memory into equal chunks called **pages** (usually 4096 bytes, 4 KiB). Real RAM is cut into chunks of the same size called **frames**. The **page table** lists, for each page of a program, which frame holds it.

A virtual address then has two parts. The low 12 bits (since $2^{12} = 4096$) say where inside the page, the **offset**. The rest say which page. Only the page number is translated; the offset is copied straight across.

Worked number. A program uses virtual address 20000 and its page table says "page 4 is in frame 9".

- Page number: $\lfloor 20000 / 4096 \rfloor = 4$ (since $4 \times 4096 = 16384$).
- Offset: $20000 - 16384 = 3616$.
- Physical address: $9 \times 4096 + 3616 = 40480$.

$$\text{physical address} = \text{frame} \times P + \text{offset}$$

Read it as: "start of the frame, plus how far into the page you are".

```python
P = 4096
page_table = {4: 9, 5: 2}            # page -> frame

def translate(vaddr):
    page, offset = divmod(vaddr, P)  # split the address
    if page not in page_table:
        raise MemoryError("page fault")
    return page_table[page] * P + offset

print(translate(20000))              # 40480
```

:::figure caption="Translation: the page number goes through the page table, the offset passes straight through. Each program has its own table."
<svg viewBox="0 0 440 170" role="img" aria-label="A virtual address split into page number and offset; the page number is looked up in the page table to give a frame number; frame and offset form the physical address">
<g style="stroke:var(--ink);stroke-width:1.3">
<rect x="14" y="20" width="110" height="30" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/>
<rect x="14" y="20" width="70" height="30" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface))"/>
<rect x="296" y="120" width="110" height="30" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/>
<rect x="296" y="120" width="70" height="30" style="fill:color-mix(in srgb,var(--bad) 40%,var(--surface))"/>
<rect x="170" y="60" width="90" height="70" style="fill:var(--surface)"/>
</g>
<text x="20" y="40" style="font-size:11px;fill:var(--ink)">page 4</text>
<text x="88" y="40" style="font-size:11px;fill:var(--ink)">3616</text>
<text x="14" y="14" style="font-size:10px;fill:var(--muted)">virtual address 20000</text>
<text x="302" y="140" style="font-size:11px;fill:var(--ink)">frame 9</text>
<text x="370" y="140" style="font-size:11px;fill:var(--ink)">3616</text>
<text x="296" y="114" style="font-size:10px;fill:var(--muted)">physical address 40480</text>
<text x="182" y="76" style="font-size:10px;fill:var(--muted)">page table</text>
<text x="182" y="94" style="font-size:11px;fill:var(--ink)">... 3 -> 7</text>
<text x="182" y="110" style="font-size:11px;fill:var(--c)">4 -> 9</text>
<text x="182" y="124" style="font-size:11px;fill:var(--ink)">5 -> 2 ...</text>
<path d="M50 50 C50 80 120 90 168 100" style="fill:none;stroke:var(--c);stroke-width:1.5"/>
<path d="M262 104 C280 110 290 130 294 135" style="fill:none;stroke:var(--bad);stroke-width:1.5"/>
<path d="M104 50 C104 160 330 170 350 152" style="fill:none;stroke:var(--muted);stroke-width:1.2;stroke-dasharray:4 3"/>
</svg>
:::

Because page size is a power of two, the split is free: the hardware just cuts the bits, with no division. (That is the same remainder idea as in modular arithmetic.)

:::qc lvl=2
q: With 4 KiB pages, what are the page number and offset of virtual address 10000?
options: ["Page 2, offset 1808", "Page 1, offset 5904", "Page 2, offset 10000"]
answer: 0
right: Right. $2 \times 4096 = 8192$, and $10000 - 8192 = 1808$.
wrong: Divide by 4096 and round down for the page; the remainder is the offset.
:::

## Page faults and swapping {lvl=2 id=s-faults label="SDE-1"}

Each page-table entry also carries flags: **present** (is it in RAM right now?), **writable**, and **user** (may a normal program touch it?). If the program touches a page whose present flag is off, the hardware stops the instruction and calls the OS. This is a **page fault**. The OS then decides:

1. **The page is allowed but not loaded yet.** Maybe it is part of the program file, or memory that was never touched, or something pushed out earlier. The OS finds a free frame, reads the data in (from a file or a **swap** area on disk), updates the table, and **retries the same instruction**. The program never knows.
2. **The address was never valid.** The OS ends the program: a **segmentation fault**.

This lazy loading is called **demand paging**, and it is why a huge game starts quickly. When RAM is full, the OS picks a **victim** page that has not been used lately, writes it to swap if it was changed, and reuses its frame. That is **swapping** (paging out).

The price is steep. A RAM access takes about 100 ns; a fault that reads from a spinning disk takes about 8 ms, which is 80,000 times longer. (An SSD is faster, around 100 microseconds, still roughly 1,000 times.) So faults must be rare.

A taste of the real thing on Linux:

```bash
free -h                  # RAM and swap in use
ps -o pid,vsz,rss,cmd -C python3   # vsz = promised, rss = really in RAM
```

`vsz` is the size of the map (the promise); `rss` is how much is actually sitting in RAM.

:::qc lvl=2
q: After a page fault is handled, what does the CPU do?
options: ["Skips the instruction", "Retries the same instruction, which now succeeds", "Restarts the whole program"]
answer: 1
right: Right. The fault is invisible to the program: the OS fixes the map, and the instruction is run again.
wrong: Nothing was wrong with the program. The page just was not there yet. What would let the instruction finish?
:::

## The TLB and multi-level tables {lvl=3 id=s-tlb label="SDE-2"}

There is a catch. The page table itself lives in RAM, so a naive translation costs an extra memory read for every access: the machine would run at half speed. Worse, a flat table is huge. With 32-bit addresses and 4 KiB pages there are $2^{20}$ pages; at 4 bytes per entry that is 4 MiB **per process**. With 48-bit addresses it would be $2^{36}$ entries of 8 bytes, 512 GiB per process, which is absurd.

Two fixes, both common ideas:

- **Multi-level tables.** Cut the page number into pieces and use a tree. On a typical 64-bit PC, 9 bits pick an entry in the top table, 9 more in the next, and so on for 4 levels: $4 \times 9 + 12 = 48$ bits. Each table has 512 entries of 8 bytes, exactly one page. Tables for unused regions are never created, so a small program needs only a few.
- **The TLB** (translation lookaside buffer). A tiny cache inside the CPU that remembers recent page-to-frame translations. A hit costs about a nanosecond. A miss means walking all $k$ levels, each a memory read.

$$\text{EAT} = h\,(t_{\text{tlb}} + t_{\text{mem}}) + (1-h)\,(t_{\text{tlb}} + k\,t_{\text{mem}} + t_{\text{mem}})$$

Read it as: "when the translation is cached, pay the lookup and one memory read; otherwise pay the lookup, $k$ reads to walk the tree, and the final read".

With $h = 0.99$, $t_{\text{tlb}} = 1$ ns, $t_{\text{mem}} = 100$ ns, $k = 4$: $0.99 \times 101 + 0.01 \times 501 = 105$ ns. Only 5% slower than raw memory, because locality keeps the hit rate high.

When RAM is full the OS must choose victims. The ideal is the page that will be needed furthest in the future, but nobody can see the future, so real systems approximate **least recently used** with hardware "accessed" bits and a clock-hand sweep. Each program's **working set** is the pages it uses in a recent window. If the working sets of all running programs together exceed RAM, pages are evicted just before they are needed again, and the machine does nothing but swap: **thrashing**.

Switching to another process swaps in a different page table, so cached translations of the old process must be ignored or flushed. Modern CPUs tag TLB entries with a process id to avoid flushing everything [Unverified: details vary by CPU].

:::qc lvl=3
q: The TLB hit rate falls from 99% to 90%. What happens to average access time (same numbers as above)?
options: ["It barely changes", "It rises from 105 ns to about 140 ns", "It doubles to about 210 ns"]
answer: 1
right: Right. $0.9 \times 101 + 0.1 \times 501 = 141$ ns, about a third worse, from a drop of only nine points in hit rate.
wrong: Recompute with $h = 0.9$. A miss costs about five times a hit, so ten percent misses add up quickly.
:::

## Sharing, copy-on-write and overcommit {lvl=3 id=s-share label="SDE-2"}

Because the map is separate from the memory, the OS can point **two page tables at the same frame**. Uses:

- **Shared libraries.** One copy of the C library in RAM, mapped into every program.
- **Memory-mapped files** (`mmap`). A file's pages appear as memory; reading them triggers faults that load them. The OS keeps recently read file pages in RAM as the **page cache**, which is why a file is faster the second time.
- **Copy-on-write.** When a process forks, the child's table points at the parent's frames, marked read-only. Only when one of them writes does the OS copy that single page. Starting a process becomes cheap, and a server that forks to take a snapshot of a large dataset costs extra memory only for pages changed meanwhile.

**Overcommit.** The OS may allow programs to ask for more total memory than RAM plus swap, betting that most of it will never be touched. When the bet fails, Linux's **OOM killer** chooses a process and kills it. Behaviour is configurable [Unverified: defaults differ by system and version], and it is why a program can allocate 64 GB successfully on a 16 GB machine and die later when it actually fills it.

:::qc lvl=3
q: A 10 GB process forks, and the child changes 100 MB before exiting. Roughly how much extra RAM did the fork cost?
options: ["10 GB", "About 100 MB", "Nothing at all"]
answer: 1
right: Right. Copy-on-write copies only the pages that are written, so the cost is about the 100 MB the child changed.
wrong: Before any write, parent and child share every frame. What is copied, and when?
:::

## Virtual memory in production {lvl=4 id=s-prod label="SDE-3"}

At scale the same machinery explains many outages and design choices.

- **Memory numbers lie in different ways.** Virtual size, resident size and the shared part all differ, and a container's limit is usually on the pages really in RAM (plus the page cache). A JVM or Python service that sets a "heap size" can still exceed its limit through thread stacks, mapped files and allocator slack. Alert on resident size, not virtual size.
- **Swap on servers.** A latency-sensitive service that starts swapping turns microsecond accesses into millisecond ones, so p99 latency collapses. Many teams disable swap or keep it tiny and prefer a fast, clean failure that the orchestrator restarts. Others keep a little to push out truly cold pages. It is a judgement call, not a rule.
- **Huge pages.** Using 2 MiB pages instead of 4 KiB makes one TLB entry cover 512 times more memory, which helps databases and big in-memory caches. The cost is coarser granularity and trouble finding contiguous memory.
- **Databases and mmap.** Some storage engines map the data file and let the OS page it. It is simple, but the database loses control of which page is evicted and when it reaches disk, which matters for crash safety. Many engines manage their own buffer pool instead. A known critique appeared in a 2022 database-conference paper [Unverified: title and authors from memory].
- **Virtual machines add a second map.** The guest OS maps its virtual to its "physical", and the hypervisor maps that to real memory. Hardware support walks both tables, so a TLB miss can be many times costlier. [Inference: roughly the product of the two walk lengths in the worst case.]
- **Isolation is hardware-deep.** In 2018 the Meltdown and Spectre attacks showed that speculative execution could leak data across the isolation that page tables promise. The fixes (such as keeping kernel pages unmapped while in user mode) cost some speed [Unverified: exact figures vary].

Design questions to practise: how many servers does a cache of 300 GB need if each has 64 GB and you must leave 25% for the OS and slack? What do you alert on to catch thrashing before users do?

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Programs use virtual addresses, private to each program; hardware and the OS translate them to physical addresses on every access. {lvl=1}
2. This gives isolation, a uniform layout and room to exceed real RAM. {lvl=1}
3. Memory is cut into pages (4 KiB) and frames; the page table maps page to frame, and the offset passes through unchanged. {lvl=2}
4. A page fault means "allowed but not here yet": the OS loads the page and retries. An invalid address gives a segmentation fault. {lvl=2}
5. The TLB caches translations; multi-level tables keep the tables small. Average access time stays near RAM speed while the hit rate is high. {lvl=3}
6. Sharing, copy-on-write and memory-mapped files all come from pointing two maps at one frame. {lvl=3}
7. Thrashing, overcommit and OOM kills happen when the promises meet real RAM; alert on resident memory and swap activity. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A program's reported memory (virtual size) is not RAM in use; look at resident size. {lvl=1}
- A page fault is normal and usually harmless; only a flood of faults that read from disk (major faults) hurts. {lvl=2}
- Successful allocation does not mean memory is yours: with overcommit, the failure can come later, as a kill. {lvl=3}
- A larger TLB or bigger pages helps only if access has locality; random jumps over a huge array miss the TLB every time. {lvl=3}
- Never judge a server by free memory alone: the page cache fills spare RAM on purpose and gives it back when needed. {lvl=3}
- A pointer value printed by a program is a virtual address; it means nothing in another process. {lvl=2}
:::
