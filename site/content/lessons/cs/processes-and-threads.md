---
title: Processes and threads
summary: How one phone plays music, downloads a film and shows your messages all at once, with only a handful of CPU cores.
ncert: []
up_to: SDE-2
builds_on: [How a CPU runs a program, Memory hierarchy and caches, Functions]
notes_prompt: Explain to a friend why a computer with four cores can seem to run a hundred programs at once, and what the operating system does to make that work.
margin:
  - kind: history
    title: History
    text: 'Early computers ran one job at a time and sat idle while it waited for a card reader or tape. Time-sharing systems of the 1960s, such as CTSS and Multics, taught machines to juggle many users at once. Unix (1970s) gave us the fork-and-exec way of starting programs that your laptop still uses. [Unverified: dates and names from memory]'
  - kind: tip
    title: Interview favourite
    text: '"What is the difference between a process and a thread?" is asked in nearly every systems interview. The one-line answer: processes have separate memory, threads of one process share it. Then talk about the trade-off: safety versus cost.'
  - kind: olympiad
    title: Design link
    text: A container (Docker) is not a tiny computer. It is an ordinary process (or group of processes) that the kernel has fenced in, so it sees only its own files, network and a slice of CPU and memory.
books:
  - { title: "R. Arpaci-Dusseau and A. Arpaci-Dusseau, Operating Systems: Three Easy Pieces (OSTEP)", ref: "Part I Virtualization: the process, the process API, limited direct execution [Unverified chapter numbers]" }
  - { title: "A. Silberschatz et al., Operating System Concepts", ref: "Chapters on processes and threads [Unverified chapter numbers]" }
cards:
  - { front: "What is a process?", back: "A running program: its code plus its own memory, open files and CPU state. The same program started twice is two processes." }
  - { front: "What is a thread?", back: "One path of execution inside a process. Threads of the same process share its memory and open files, but each has its own stack and registers." }
  - { front: "What is a context switch?", back: "The OS stops one thread, saves its registers and program counter, and loads another's, so the CPU can switch whom it serves. It costs time and also cools the CPU cache." }
  - { front: "What is a system call?", back: "A request from a program to the kernel for something only the kernel may do: read a file, send data, start a process, allocate memory." }
  - { front: "What do fork() and exec() do?", back: "fork() makes a near-copy of the calling process. exec() replaces the current process's program with a new one. A shell runs a command by doing fork, then exec in the child." }
  - { front: "Process or thread: which is safer, which is cheaper?", back: "Processes are safer (separate memory, one crash does not spread) but costlier to create and to talk between. Threads are cheaper and share data easily, but one bug can corrupt everyone." }
core:
  idea: 'The operating system turns a few real CPU cores into the illusion of many private computers. A **process** is a running program with its own memory; a **thread** is one line of execution inside it, sharing that memory. The OS gives each thread short turns on a core, switching so fast that everything seems to run at once.'
  formulas:
    - tex: '\text{overhead} = \dfrac{t_{\text{switch}}}{t_{\text{slice}} + t_{\text{switch}}}'
      label: 'Share of CPU time lost to switching'
    - tex: '\text{share per thread} = \dfrac{c}{r}'
      label: 'c cores shared fairly by r ready threads (when r > c)'
  conditions:
    - 'At any instant one core runs at most one thread (ignoring hardware tricks such as hyper-threading)'
    - 'Processes cannot read each other''s memory unless the kernel is asked to allow it'
    - 'Threads of one process share its memory, so they must coordinate when they change the same data'
    - 'Programs reach hardware only through system calls to the kernel'
  sign: 'Commonest mistake: thinking "many threads" means "many things happening at once". Real parallelism needs real cores; otherwise the threads take turns.'
outcomes:
  - 'Explain how a few cores can seem to run hundreds of programs'
  - 'Say what a process owns, and how it differs from a program'
  - 'Describe what a context switch does and why it is not free'
  - 'Compare processes and threads and choose between them for a task'
  - 'Trace what happens when a shell runs a command (fork, exec, wait) and what a system call is'
opener:
  story: |
    You are on a train. Music is playing, a film is downloading in the background, WhatsApp is buzzing, and you are scrolling a map. Four things, one phone, and nothing stutters.

    But look at the chip inside. A phone might have 8 cores, and a core can do exactly one thing at a time: run one instruction, then the next. Meanwhile the phone has hundreds of programs and services alive at once, most of them quietly waiting.

    So who decides which program gets the chip, for how long, and how does each one stay convinced it has the whole phone to itself?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Four app icons queue for one CPU core, the operating system hands out short turns"><g style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="16" y="26" width="64" height="30" rx="6"/><rect x="16" y="68" width="64" height="30" rx="6"/><rect x="16" y="110" width="64" height="30" rx="6"/><rect x="16" y="152" width="64" height="30" rx="6"/></g><g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="48" y="45">Music</text><text x="48" y="87">Download</text><text x="48" y="129">Chat</text><text x="48" y="171">Map</text></g><g style="fill:none;stroke:var(--c);stroke-width:1.5"><path d="M80 41 C130 41 130 104 176 104"/><path d="M80 83 C130 83 130 104 176 104"/><path d="M80 125 C130 125 130 104 176 104"/><path d="M80 167 C130 167 130 104 176 104"/></g><rect x="176" y="74" width="60" height="60" rx="8" style="fill:var(--c);stroke:var(--ink);stroke-width:2"/><text x="206" y="109" style="font-size:12px;fill:var(--surface);text-anchor:middle">1 core</text><rect x="252" y="58" width="56" height="92" rx="8" style="fill:none;stroke:var(--muted);stroke-dasharray:4 3"/><text x="280" y="98" style="font-size:10px;fill:var(--muted);text-anchor:middle">the OS</text><text x="280" y="112" style="font-size:10px;fill:var(--muted);text-anchor:middle">hands out</text><text x="280" y="126" style="font-size:10px;fill:var(--muted);text-anchor:middle">turns</text><text x="16" y="214" style="font-size:11px;fill:var(--muted)">Turns last a few milliseconds each</text></svg>'
life:
  - 'Every app on your phone is at least one process. Swiping it away asks the OS to end it and free its memory.'
  - 'Task Manager (Windows), Activity Monitor (macOS) and the `top` command (Linux) are lists of processes with their CPU and memory use.'
  - 'A browser keeps each tab (or group of tabs) in a separate process, so one crashed page does not take down the rest. [Inference: the exact arrangement differs by browser and version]'
  - 'When you type a command in a terminal, a shell process starts a new process for it. That is why one runaway command can be killed without closing the terminal.'
  - 'A web server handling thousands of visitors usually serves them with a pool of threads or processes, not one per visitor.'
models:
  - name: 'The illusion of ownership'
    text: 'The OS gives every program the feeling of a private machine, while really sharing one. Landlords, airlines and cloud providers do the same: many tenants, each convinced the space is theirs. Ask what the illusion costs and who enforces the walls.'
  - name: 'Share a little, often'
    text: 'Time slicing works because turns are short compared with what humans notice. One teacher helping thirty students feels attentive if each wait is brief. Fairness and responsiveness come from small slices, but every handover has a price.'
  - name: 'Walls versus doors'
    text: 'Separate processes have walls (safe, slow to communicate); threads share a room (fast, but one can wreck it). Every organisation faces this: independent teams or one close team. Choose the wall when failure is costly.'
links:
  - leaf: 'cs/cpu-and-instructions'
    name: 'How a CPU runs a program'
    same: 'The CPU only ever runs one instruction stream per core. A context switch saves and restores exactly the state that lesson describes: registers and the program counter.'
    differs: 'The CPU lesson is about one program running; this one is about the OS swapping many programs on and off a core.'
  - leaf: 'cs/memory-hierarchy'
    name: 'Memory hierarchy and caches'
    same: 'A context switch hurts partly because the new thread''s data is not in the cache, so it starts with a run of slow memory accesses.'
    differs: 'Caches hold copies of memory for speed; a process''s address space is about isolation and privacy, not speed.'
  - leaf: 'cs/variables-and-memory'
    name: 'Variables and memory'
    same: 'Each process sees its own memory the way a program sees its variables: names and addresses that belong to it alone.'
    differs: 'Variables live inside one program; the OS decides which memory each whole process may touch.'
next:
  q: 'Four ready threads, one core, and a few milliseconds each. Who goes first, who waits, and how can the OS keep both a video call smooth and a huge download moving?'
  leaf: 'cs/scheduling'
  name: 'CPU scheduling'
symbols:
  - s: '\text{process}'
    means: 'a running program with its own memory, files and state'
  - s: '\text{thread}'
    means: 'one line of execution inside a process; threads of a process share its memory'
  - s: '\text{kernel}'
    means: 'the core of the operating system, the only code allowed to touch hardware directly'
  - s: 't_{\text{slice}}'
    means: 'the time slice: how long a thread may run before the OS may switch it out (milliseconds, ms)'
  - s: 't_{\text{switch}}'
    means: 'time one context switch takes (microseconds, µs)'
  - s: 'c'
    means: 'number of CPU cores (count)'
  - s: 'r'
    means: 'number of threads ready to run (count)'
---

:::hook
q: Here's the puzzle. A phone has 4 cores and 100 programs are alive. At one exact instant, how many of them can actually be executing?
options: ["All 100, they are independent", "At most 4, one per core", "Only 1, the OS is single-minded"]
answer: 1
right: Right. A core runs one instruction stream at a time. The rest are paused, waiting their turn. The OS swaps them on and off cores every few milliseconds, so fast that you cannot see the pauses.
wrong: A core cannot run two programs in the same instant. So how do the other programs make progress? Think of one cook and many pans.
:::

## What the OS is for {lvl=1 id=s-os label="Foundations"}

Imagine a kitchen with one stove and ten cooks, each wanting to cook their own dish. Without a manager, they would knock each other's pots over. With a manager, each cook gets the stove in turns and a private shelf for their ingredients. The manager is the **operating system** (OS).

The OS does three jobs. It **shares** the processor, so every program gets turns. It **protects**: one program cannot read or overwrite another's data. And it **simplifies**: you write `print("hi")` and never think about the screen hardware.

The program is the recipe. The **process** is a cook actually cooking it, with their own shelf of ingredients (memory), open cupboards (open files) and a finger on the recipe line (where they are in the code). Start the same program twice and you get two processes, like two cooks following one recipe.

| A process owns | Example |
|---|---|
| Memory (its own address space) | its variables, its code, its call stack |
| Open files and network connections | a log file, a socket to a server |
| CPU state while it runs | registers and the program counter |
| An ID and a status | process ID (PID), running or waiting |

:::qc lvl=1
q: You open the same calculator app twice. How many processes is that?
options: ["One, because there is one program", "Two, because each running copy is its own process", "Zero, apps are not processes"]
answer: 1
right: Right. One program, two running copies, so two processes, each with its own memory.
wrong: The program is the recipe on disk. Each time you start it, the OS creates a new running instance with its own memory.
:::

## Taking turns: time slicing {lvl=1 id=s-slices label="Foundations"}

If cooks outnumber stoves, the manager gives each cook a short turn, say 10 milliseconds (a hundredth of a second), then calls "next!". This is **time slicing**. A human blinks in about 100 to 400 ms, so a 10 ms turn is invisible, and with a hundred processes each still gets many turns a second.

Moving the CPU from one process to the next is a **context switch**. The OS must save everything the old process was in the middle of (its registers and its place in the code), then load the same for the new one, like bookmarking one book and opening another to exactly where you stopped.

A switch is not free. The OS runs its own code, and the new process finds the CPU cache full of someone else's data, so its first memory accesses are slow. With a switch costing about 20 microseconds (a rough figure [Unverified]; it varies by machine) and slices of 10 ms:

$$\text{overhead} = \frac{t_{\text{switch}}}{t_{\text{slice}} + t_{\text{switch}}} = \frac{0.02\text{ ms}}{10\text{ ms} + 0.02\text{ ms}} \approx 0.2\%$$

Read it as: the share of time lost to switching is the switch time divided by the whole round (a slice plus one switch). Shorter slices feel more responsive but waste more time on switching.

:::figure caption="One core, three processes. The core runs each in turn; the grey slivers are context switches. At any instant only one process is running."
<svg viewBox="0 0 360 120" role="img" aria-label="A timeline where processes A, B and C each run for a slice with small gaps for context switches between them">
<g style="stroke:var(--ink);stroke-width:1.2">
<rect x="20" y="30" width="60" height="30" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/>
<rect x="80" y="30" width="6" height="30" style="fill:var(--muted)"/>
<rect x="86" y="30" width="60" height="30" style="fill:color-mix(in srgb,var(--c) 25%,var(--surface))"/>
<rect x="146" y="30" width="6" height="30" style="fill:var(--muted)"/>
<rect x="152" y="30" width="60" height="30" style="fill:color-mix(in srgb,var(--c) 65%,var(--surface))"/>
<rect x="212" y="30" width="6" height="30" style="fill:var(--muted)"/>
<rect x="218" y="30" width="60" height="30" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/>
<rect x="278" y="30" width="6" height="30" style="fill:var(--muted)"/>
</g>
<g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="50" y="50">A</text><text x="116" y="50">B</text><text x="182" y="50">C</text><text x="248" y="50">A</text></g>
<path d="M20 78 H300" style="stroke:var(--ink);stroke-width:1.2;fill:none"/>
<text x="304" y="82" style="font-size:11px;fill:var(--muted)">time</text>
<text x="20" y="104" style="font-size:11px;fill:var(--muted)">grey = context switch (save one, load next)</text>
</svg>
:::

:::qc lvl=1
q: A switch costs 0.1 ms and slices are 1 ms long. Roughly what share of time goes to switching?
options: ["About 0.1%", "About 9%", "About 50%"]
answer: 1
right: Right. 0.1 / (1 + 0.1) is about 0.09, so roughly 9%. Short slices make the system feel quick but spend a noticeable share on switching.
wrong: Divide the switch time by slice plus switch: 0.1 / 1.1. That is about one in eleven.
:::

## Threads: many workers in one room {lvl=2 id=s-threads label="SDE-1"}

Sometimes one program wants to do two things at once: a browser fetches an image while you scroll, an editor saves while you type. It could start two processes, but they would each have their own memory, so sharing the page you are editing would be awkward.

A **thread** is a separate line of execution inside one process. Threads of one process share its memory and open files (the same room), but each has its own **stack** (where it keeps the calls it is in the middle of) and its own registers. The OS schedules threads, not processes: a process is a room, threads are the people in it.

```python
import threading

def download(name):
    print("downloading", name)     # imagine a slow network call

t1 = threading.Thread(target=download, args=("a.jpg",))
t2 = threading.Thread(target=download, args=("b.jpg",))
t1.start(); t2.start()             # both now run, interleaved
t1.join(); t2.join()               # wait until both have finished
```

| | Process | Thread |
|---|---|---|
| Memory | Own, private | Shared with its siblings |
| Create / switch cost | Higher (new address space) | Lower |
| Talking to each other | Needs a kernel-assisted channel (pipe, socket, shared memory) | Just read and write shared variables |
| If one crashes | Others usually survive | The whole process usually dies |
| Danger | Few | Two threads changing the same data at once (next-but-one lesson) |

:::qc lvl=2
q: A browser wants a crashing page to leave other tabs alone. Which design suits that best?
options: ["One thread per tab, all in one process", "One process per tab", "No tabs at all"]
answer: 1
right: Right. Separate processes have separate memory, so a crash or corrupted data stays inside the tab that caused it. The price is more memory and slower sharing.
wrong: Threads share memory, so one bad tab could corrupt or kill everything. Which design puts a wall between tabs?
:::

## System calls: asking the kernel {lvl=2 id=s-syscalls label="SDE-1"}

If any program could write to the disk or screen directly, one buggy app could wipe your files. So the CPU runs code in two **modes**. In **user mode** a program can compute but cannot touch hardware. In **kernel mode** the OS can do anything.

When a program needs something privileged (read a file, send a network packet, start a process, get more memory), it makes a **system call** (syscall): a controlled doorway that switches to kernel mode, runs the kernel's code for that request, checks it is allowed, and returns. Python's `open()`, `print()` and `socket.send()` all end in syscalls.

```python
import os

fd = os.open("notes.txt", os.O_RDONLY)  # syscall: open
data = os.read(fd, 100)                 # syscall: read up to 100 bytes
os.close(fd)                            # syscall: close
print(os.getpid())                      # syscall: who am I?
```

A syscall is far cheaper than a full context switch but still costs more than an ordinary function call, because of the mode switch and the checks. That is why programs read files in large chunks, not one byte at a time.

## How a shell starts a program: fork and exec {lvl=3 id=s-fork label="SDE-2"}

Unix-style systems start processes with two small steps, and the split is a clever design.

1. **fork** makes a near-copy of the calling process. Now there are two, the parent and the child, both about to run the next line.
2. **exec** swaps the child's code for a different program, keeping its PID. The copy becomes `ls`.
3. The parent calls **wait** to pause until the child finishes.

```python
import os

pid = os.fork()                 # after this line, two processes run
if pid == 0:                    # fork returns 0 in the child...
    os.execvp("ls", ["ls", "-l"])   # ...which turns into the ls program
else:                           # ...and the child's PID in the parent
    os.waitpid(pid, 0)          # parent waits for it
    print("child finished")
```

Why two steps? Between fork and exec the child can rearrange its own plumbing (redirect output into a file, set up a pipe) before becoming the new program. That is how `ls > out.txt` and `a | b` work in a shell. [Inference: a description of the usual design, not of every OS]

Copying all of a big process's memory would be slow, so modern systems use **copy-on-write**: parent and child initially share the same memory pages, marked read-only, and only a page that someone writes to is actually copied.

A process is always in one of a few **states**: *running*, *ready* (wants a core, waiting its turn), or *blocked* (waiting for something slow such as a disk or network reply). A child that has finished but whose parent has not yet called wait lingers as a **zombie**: only its exit code remains, but it still occupies a process-table entry.

:::qc lvl=3
q: After one successful call to os.fork() in a Python program, how many processes run the lines that follow?
options: ["One", "Two, the parent and the child", "It depends on the program size"]
answer: 1
right: Right. fork returns twice, once in each process. The if/else on its return value is how each side learns which one it is.
wrong: fork copies the calling process. After the call, both the original and the copy continue from the same line.
:::

## Choosing, and the cost of too many {lvl=3 id=s-cost label="SDE-2"}

Threads and processes are cheap but not free. Each thread needs a stack (often reserved at about 1 to 8 MB of address space [Unverified: depends on OS and settings]), a kernel record, and a share of the scheduler's attention. A server that starts one thread for each of 10,000 simultaneous connections may spend its memory and its time switching rather than working.

Common remedies, each trading something:

- **Thread pool**: a fixed set of worker threads takes jobs from a queue. Bounded cost; jobs wait when all workers are busy.
- **Event loop (async)**: one thread handles many connections by never waiting idle (concurrency lesson).
- **Process pool**: separate processes for CPU-heavy work that needs real parallelism or isolation.

A **container** is a process the kernel has given a restricted view (its own file tree, network and process list, plus limits on CPU and memory). Containers start in milliseconds because they are processes, not whole booted machines.

A rule of thumb: pick **processes** for isolation and CPU-bound parallel work, **threads** for tasks that share data and mostly wait, and measure before assuming either is the bottleneck.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The OS shares the CPU, protects programs from each other, and hides hardware details. {lvl=1}
2. A process is a running program with its own memory; the same program run twice is two processes. {lvl=1}
3. One core runs one thread at a time; the OS time-slices and switches so quickly that it looks simultaneous. {lvl=1}
4. A context switch saves one thread's state and loads another's; it costs time and cools the cache. {lvl=1}
5. Threads share a process's memory (cheap, risky); processes have separate memory (safer, heavier). {lvl=2}
6. Programs reach the hardware only through system calls into the kernel. {lvl=2}
7. fork copies a process, exec replaces its program, wait collects the result; copy-on-write keeps fork cheap. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- More threads is not more speed: with c cores, at most c threads run at once. Extra threads help only when they spend time waiting. {lvl=1}
- Do not mix up "program" (a file) and "process" (a running instance). {lvl=1}
- Never share a mutable variable between threads without a plan for coordination; the bug appears rarely and is hard to reproduce. {lvl=2}
- A tiny time slice looks responsive but burns time in switches; a huge one makes the system sluggish. {lvl=2}
- A forgotten wait() leaves zombie processes behind in long-running programs. {lvl=3}
- "Starting a thread per request" works in a demo and fails under load: bound it with a pool. {lvl=3}
:::
