---
title: Concurrency and locks
summary: What goes wrong when two things touch the same data at once, and the tools that keep the answer right.
ncert: []
up_to: SDE-3
builds_on: [Processes and threads, CPU scheduling, Variables and memory]
notes_prompt: Explain to a friend, using two people and one bank balance, why a program can lose an update, and how a lock prevents it.
margin:
  - kind: history
    title: History
    text: 'Edsger Dijkstra posed the dining philosophers puzzle in the 1960s to show how easily processes can deadlock, and introduced semaphores, an early tool for coordinating them. [Unverified: dates and details from memory]'
  - kind: tip
    title: Interview favourite
    text: 'Expect "what is a race condition?", "how do you avoid deadlock?" and "threads or async for this job?". A crisp answer to the deadlock one: always take locks in the same global order.'
  - kind: olympiad
    title: Design link
    text: 'The same bug appears across machines: two servers each read a seat as free and each sell it. Databases fight it with transactions, and no amount of locking inside one process can help.'
books:
  - { title: "R. Arpaci-Dusseau and A. Arpaci-Dusseau, Operating Systems: Three Easy Pieces (OSTEP)", ref: "Part II Concurrency: locks, lock-based data structures, common concurrency bugs [Unverified chapter numbers]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 7 Transactions: race conditions and isolation [Unverified chapter number]" }
  - { title: "B. Goetz et al., Java Concurrency in Practice", ref: "Visibility, atomicity and lock ordering (concepts apply beyond Java) [Unverified chapter numbers]" }
cards:
  - { front: "What is a race condition?", back: "A bug where the result depends on the exact timing of two or more threads touching the same data. It may work a thousand times and fail on the next run." }
  - { front: "Why can count += 1 lose an update?", back: "It is three steps: read the value, add one, write it back. Two threads can read the same old value and both write the same new one, so one increment vanishes." }
  - { front: "What does a lock (mutex) do, and what is its price?", back: "It lets only one thread at a time enter a critical section. The price: others wait, so long critical sections slow everything, and careless locking can deadlock." }
  - { front: "What is a deadlock, and the simplest cure?", back: "Threads each hold something the other needs and wait forever. Cure: every thread takes locks in the same agreed order (also: timeouts, or holding only one lock)." }
  - { front: "Does Python's GIL make your threaded code safe?", back: "No. The GIL lets only one thread run Python bytecode at a time (so threads do not speed up CPU work), but it can switch between the steps of count += 1, so races still occur." }
  - { front: "Async, threads or processes for 1,000 slow web calls? For image resizing?", back: "Web calls: mostly waiting, so async (or threads). Image resizing: CPU-heavy, so processes (or native code that runs in parallel)." }
core:
  idea: 'When several threads read and change the same data, the result can depend on timing. A **race condition** loses updates because read-modify-write is not one step. A **lock** makes a critical section run one thread at a time, at the cost of waiting and the risk of **deadlock**. Choose the model that fits the work: async or threads for waiting, processes for computing.'
  formulas:
    - tex: 'S = \dfrac{1}{(1-p) + p/k}'
      label: 'Amdahl: speedup S when a share p of the work is parallel across k workers'
    - tex: '\text{throughput}_{\max} = \dfrac{1}{t_{\text{lock}}}'
      label: 'A lock held t seconds per job allows at most 1/t jobs per second, whatever the core count'
  conditions:
    - 'The data is shared and at least one thread changes it (many readers and no writer is safe)'
    - 'A critical section must contain the whole read-modify-write, not just part of it'
    - 'Deadlock needs all four: exclusive access, holding while waiting, no forced release, a circular wait'
    - 'Amdahl''s law assumes the serial share does not shrink and the parallel share splits evenly with no overhead'
  sign: 'Commonest mistake: protecting the write but not the read, or checking a condition and acting on it in two separate steps ("check-then-act").'
outcomes:
  - 'Show with a timeline how two threads can lose an update'
  - 'Use a lock correctly, and say what a critical section is'
  - 'Explain deadlock, its four conditions and how lock ordering prevents it'
  - 'Explain what Python''s GIL does and does not protect'
  - 'Choose between threads, processes and async for a given job, and describe designs that avoid sharing'
opener:
  story: |
    It is 10:00 am and Tatkal booking opens. One seat is left on the Rajdhani. You and a stranger in another city both tap **Pay** at the same instant. Somebody will be disappointed, but the railway must never sell that seat twice.

    Now imagine the booking program on one server. Two threads each check "is the seat free?", both see yes, and both mark it sold. Neither made a mistake step by step. The mistake is in the gap between checking and marking, when the other thread slipped in.

    That gap is the heart of concurrency: when two things share data, tiny timing differences decide the answer. How do we close the gap?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two hands reach for one seat marked as free at the same time, a lock stands between them"><rect x="120" y="150" width="80" height="50" rx="8" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface));stroke:var(--ink);stroke-width:2"/><text x="160" y="180" style="font-size:12px;fill:var(--ink);text-anchor:middle">Seat 42</text><g style="fill:none;stroke:var(--ink);stroke-width:2"><circle cx="50" cy="60" r="18"/><circle cx="270" cy="60" r="18"/></g><g style="font-size:11px;fill:var(--ink);text-anchor:middle"><text x="50" y="64">You</text><text x="270" y="64">Them</text></g><path d="M64 74 C90 110 110 130 132 148" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M256 74 C230 110 210 130 188 148" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="146" y="86" width="28" height="22" rx="4" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><path d="M152 86 V78 a8 8 0 0 1 16 0 V86" style="fill:none;stroke:var(--ink);stroke-width:2"/><text x="160" y="126" style="font-size:10px;fill:var(--muted);text-anchor:middle">one at a time</text><text x="16" y="224" style="font-size:11px;fill:var(--muted)">Pay pressed at the same instant</text></svg>'
life:
  - 'Ticket booking, UPI payments and shopping carts all have the "two people, one last item" problem. The system must make sure only one wins.'
  - 'A shared Google Doc handles two people typing at once; it must merge edits without losing either.'
  - 'A bathroom with a lock on the door is a mutex: one person inside, others wait outside. Two doors to two rooms that each need the other''s key is a deadlock.'
  - 'A web server that talks to a database for each request spends most of its time waiting. That waiting is why async and threads help it so much.'
  - 'Four-way junctions with no rule ("whoever is first goes") can end in gridlock: four cars each waiting for the one on their right.'
models:
  - name: 'Check-then-act is a trap'
    text: 'Any "look, then decide, then change" sequence has a gap in which the world can move. Booking the last seat, withdrawing cash, reserving a restaurant table: close the gap by making the look and the change one indivisible step.'
  - name: 'Consistent order prevents gridlock'
    text: 'Deadlock needs a cycle of waiting. If everyone grabs resources in the same order (alphabetical, smallest number first), a cycle cannot form. Rules of the road and conference-room booking policies work the same way.'
  - name: 'Do not share what you can own'
    text: 'The best lock is none. Give each worker its own data and combine results at the end, or pass messages instead of sharing variables. Teams with clear ownership argue less than teams editing one shared spreadsheet.'
links:
  - leaf: 'cs/scheduling'
    name: 'CPU scheduling'
    same: 'The scheduler can pause a thread at any moment, including between the read and the write of a counter, which is exactly what makes races possible.'
    differs: 'Scheduling decides who runs; concurrency control decides what is safe whenever the scheduler switches.'
  - leaf: 'cs/transactions'
    name: 'Transactions and isolation'
    same: 'A database transaction is a lock-like promise that a read-modify-write on rows behaves as if it ran alone. Isolation levels name which races are still allowed.'
    differs: 'Locks inside one program protect memory; transactions protect stored data, also across crashes and machines.'
  - leaf: 'cs/message-queues'
    name: 'Message queues and events'
    same: 'Instead of many workers touching shared state, workers receive messages one at a time: the queue serialises access, much as a lock does.'
    differs: 'A queue adds delay and complexity (retries, duplicates) but removes shared memory and scales across machines.'
next:
  q: 'Every thread in a process thinks it owns one big, private block of memory, yet the machine has far less RAM than all those blocks added together. How does the OS pull off that illusion?'
  leaf: 'cs/virtual-memory'
  name: 'Virtual memory'
symbols:
  - s: '\text{critical section}'
    means: 'the stretch of code that touches shared data and must run one thread at a time'
  - s: '\text{lock (mutex)}'
    means: 'a token only one thread can hold; others wait until it is released'
  - s: 'p'
    means: 'fraction of a job that can run in parallel (a number from 0 to 1)'
  - s: 'k'
    means: 'number of workers or cores sharing the parallel part (count)'
  - s: 'S'
    means: 'speedup: how many times faster the job runs than on one worker (no unit)'
  - s: 't_{\text{lock}}'
    means: 'time a lock is held for each job (seconds, s)'
---

:::hook
q: Here's the puzzle. Two threads each run "add 1 to a shared counter" 100,000 times, with no protection. What is the final value?
options: ["Always exactly 200,000", "Often less than 200,000, and different on each run", "Always exactly 100,000"]
answer: 1
right: Right. Adding 1 is really read, add, write. When both threads read the same old value, one increment is lost. The total can be anything up to 200,000, and it changes from run to run. (How often you see this depends on the Python version, but the bug is always there. [Unverified])
wrong: It is tempting to say 200,000, since each thread does its own 100,000 adds. But what exactly happens inside "count += 1" if the threads interleave?
:::

## Why shared data is dangerous {lvl=1 id=s-race label="Foundations"}

Picture a joint bank balance of ₹800. You and your sibling each try to withdraw ₹500 at the same moment from different phones. Each app does three steps: **read** the balance, **check** it is enough, **write** the new balance. If both read 800 before either writes, both pass the check, and the bank pays ₹1,000 from ₹800.

The same thing happens inside a program. The innocent line `count += 1` is really three steps, and a thread can be paused between any two of them:

| Step | Thread A | Thread B | count in memory |
|---|---|---|---|
| 1 | reads 0 | | 0 |
| 2 | | reads 0 | 0 |
| 3 | adds 1, writes 1 | | 1 |
| 4 | | adds 1, writes 1 | 1 |

Two increments, but the counter says 1. One update was **lost**. A bug whose result depends on the timing of threads is a **race condition**. It is the nastiest kind of bug because it appears rarely, vanishes when you add a print statement, and passes your tests.

```python
import threading

count = 0
def work():
    global count
    for _ in range(100_000):
        count += 1

ts = [threading.Thread(target=work) for _ in range(2)]
for t in ts: t.start()
for t in ts: t.join()
print(count)    # can be less than 200000
```

:::qc lvl=1
q: In the table above, what would the counter hold if Thread B had read after Thread A had written?
options: ["1", "2", "0"]
answer: 1
right: Right. B would read 1 and write 2. The loss happens only when the two reads come before either write.
wrong: If B reads after A wrote, B sees A's result. Only when both read the old value does one update vanish.
:::

## Locks and critical sections {lvl=2 id=s-lock label="SDE-1"}

The cure is to make the whole read-add-write one **critical section**: a stretch of code only one thread may run at a time. The tool is a **lock** (also called a **mutex**, short for mutual exclusion). A thread **acquires** the lock before entering and **releases** it on leaving. Others who arrive meanwhile wait.

```python
lock = threading.Lock()

def work():
    global count
    for _ in range(100_000):
        with lock:            # acquire; release automatically on exit
            count += 1
```

Now the result is always 200,000. The price is that threads queue up at the lock. If each job holds the lock for $t_{\text{lock}}$ seconds, at most $1/t_{\text{lock}}$ jobs per second can get through, however many cores you own. A lock held for 2 ms caps you at 500 jobs per second.

$$\text{throughput}_{\max} = \frac{1}{t_{\text{lock}}}$$

Read it as: if each job needs the door for two thousandths of a second, only five hundred jobs fit through it in a second.

Rules that keep locking healthy: keep critical sections **short** (do slow work, such as a network call, outside the lock), lock **all** access to the shared data (not just writes), and always release (the `with` statement does it even when an error is raised).

:::qc lvl=2
q: A thread does a 50 ms network call while holding a lock that other threads need. What is the problem?
options: ["Nothing, locks are free", "Every other thread waits 50 ms for the lock, wasting the waiting time", "The network call will fail"]
answer: 1
right: Right. A lock should protect only the quick change to shared data. Do the slow call first, then lock briefly to store its result.
wrong: While the lock is held, nobody else can enter the critical section. How long are they stuck?
:::

## Deadlock {lvl=2 id=s-deadlock label="SDE-1"}

Locks create a new danger. Thread 1 holds lock A and wants lock B. Thread 2 holds lock B and wants lock A. Each waits for the other forever. That is a **deadlock**: the program freezes, using no CPU.

:::figure caption="A deadlock cycle. Each thread holds one lock (solid) and waits for the lock the other holds (dashed). A cycle of waiting never resolves."
<svg viewBox="0 0 360 150" role="img" aria-label="Thread 1 holds lock A and waits for lock B; thread 2 holds lock B and waits for lock A">
<g style="stroke:var(--ink);stroke-width:1.4;fill:color-mix(in srgb,var(--c) 14%,var(--surface))"><circle cx="60" cy="40" r="22"/><circle cx="60" cy="110" r="22"/><rect x="250" y="20" width="60" height="40"/><rect x="250" y="90" width="60" height="40"/></g>
<g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="60" y="44">T1</text><text x="60" y="114">T2</text><text x="280" y="44">Lock A</text><text x="280" y="114">Lock B</text></g>
<path d="M82 40 H250" style="stroke:var(--ink);stroke-width:2;fill:none"/>
<path d="M82 118 C150 125 210 118 250 112" style="stroke:var(--c);stroke-width:2;fill:none"/>
<path d="M80 54 C130 70 200 100 252 100" style="stroke:var(--bad);stroke-width:1.6;stroke-dasharray:5 4;fill:none"/>
<path d="M80 100 C130 84 200 52 252 52" style="stroke:var(--bad);stroke-width:1.6;stroke-dasharray:5 4;fill:none"/>
<g style="font-size:10px;fill:var(--muted)"><text x="150" y="34">T1 holds A</text><text x="150" y="140">T2 holds B</text><text x="196" y="82">both want the other</text></g>
</svg>
:::

```python
def worker1():
    with lock_a:
        with lock_b:     # needs B while holding A
            ...

def worker2():
    with lock_b:
        with lock_a:     # needs A while holding B: can deadlock
            ...
```

A deadlock needs four things together: only one holder at a time (**mutual exclusion**), holding one while waiting for another (**hold and wait**), no way to take a lock away (**no preemption**), and a **circular wait**. [Unverified: these are usually credited to Coffman and colleagues, 1971] Break any one and deadlock cannot happen. The easiest to break is the circle: make every thread take locks in the **same global order**. If both workers above lock A first, then B, one simply waits for the other. Other cures: take only one lock at a time, or use a timeout and retry.

:::qc lvl=2
q: Which change removes the deadlock in the code above?
options: ["Make worker2 also take lock_a first, then lock_b", "Add more threads", "Make the locks bigger"]
answer: 0
right: Right. With a fixed order there can be no circle of waiting, since whoever gets lock A first goes on to lock B uncontested.
wrong: The problem is two threads waiting in a circle. What rule would make the circle impossible?
:::

## Atomics and what Python's GIL really does {lvl=3 id=s-gil label="SDE-2"}

Locks are heavy when all you want is a counter. Most CPUs offer **atomic** operations: a single indivisible instruction such as fetch-and-add, or **compare-and-swap** ("set this to new only if it still equals old, and tell me if it worked"). Languages such as Java, C++, Go and Rust expose them, and counters or flags built on them need no lock. Retry loops built on compare-and-swap are the basis of many lock-free structures, which are famously hard to get right.

**Python's GIL.** In the standard CPython build, a **Global Interpreter Lock** lets only one thread run Python bytecode at a time. Two consequences:

- CPU-heavy Python code does **not** run faster on several threads, since only one runs at a time.
- The GIL **does not** make your code thread-safe. The interpreter may switch threads between the bytecode steps of `count += 1`, so the lost update is still possible. A check-then-act such as `if k not in d: d[k] = 1` is a race too.

The GIL is released while a thread waits for I/O (network, disk, sleep), so threads still help programs that mostly wait. Recent Python versions add an experimental build without the GIL. [Unverified: details and status vary by version; check the release notes]

## Async, threads or processes {lvl=3 id=s-models label="SDE-2"}

Three ways to do many things at once, each fitting a different job:

| Model | How it works | Best for | Watch out for |
|---|---|---|---|
| Threads | Several threads in one process, scheduled by the OS | Waiting on I/O, with some shared data | Races and locks; in Python, no CPU speedup |
| Async (event loop) | One thread; tasks pause at `await` and let others run | Thousands of connections, mostly waiting | One blocking or CPU-heavy call freezes everything |
| Processes | Separate processes with separate memory | CPU-heavy parallel work, isolation | Memory cost; data must be sent between processes |

Async tasks switch **cooperatively**, only at `await`, so no one can interrupt a task in the middle of `count += 1`. That removes many races, though not all (a task can still be interrupted between two awaits).

```python
import asyncio

async def fetch(name, delay):
    await asyncio.sleep(delay)        # stands in for a network wait
    return name

async def main():
    out = await asyncio.gather(fetch("a", 1), fetch("b", 1), fetch("c", 1))
    print(out)                        # about 1 second in total, not 3

asyncio.run(main())
```

Rule of thumb: if the job is **waiting** (network, disk), use async or threads; if it is **computing** (resizing images, maths), use processes, or libraries whose native code runs in parallel.

:::qc lvl=3
q: You must resize 500 large photos using a pure-Python loop. Which model speeds it up on an 8-core machine?
options: ["Async, with one task per photo", "Threads, in standard CPython", "A pool of 8 processes"]
answer: 2
right: Right. Resizing is CPU work. Async and threads in standard CPython run only one thread of Python code at a time, while separate processes use all cores.
wrong: This job computes rather than waits. Which option runs Python code on several cores at once?
:::

## Designing so you rarely need locks {lvl=4 id=s-design label="SDE-3"}

The best defence is to avoid sharing mutable data at all. Four patterns, in rough order of preference:

1. **Immutability**: data that never changes can be read by any number of threads. Build a new value rather than altering the old.
2. **Ownership and message passing**: one thread owns each piece of data; others send it requests through a queue. ("Share memory by communicating", as the Go proverb has it.)
3. **Sharding the work**: give each worker its own counter or buffer, then combine at the end. A counter split into one slot per thread avoids the contention of one hot lock. [Inference: a common technique; benefit depends on the workload]
4. **Locks, finely scoped**: lock small pieces of data (one account, not the whole bank), keep sections short and order the locks.

At system scale, in-process locks do not reach across machines. Two servers can both sell the last seat. The usual answers: let the **database** enforce it (a unique constraint, or a transaction with a locking read), use **optimistic concurrency** (store a version number; an update succeeds only if the version is unchanged, otherwise retry), and make operations **idempotent** (safe to repeat) so retries cannot double-charge. A distributed lock needs care: a holder can pause, lose the lock and still act. See the transactions and consensus lessons. [Inference: general design guidance]

Debugging aids: stress tests with many threads, thread-sanitiser tools, and logging lock acquisition order. A race that you cannot reproduce is still a bug.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A race condition is a bug whose outcome depends on the timing of threads touching shared data. {lvl=1}
2. `count += 1` is read, add, write; interleaving threads lose updates. {lvl=1}
3. A lock makes a critical section run one thread at a time; keep sections short. {lvl=2}
4. Deadlock needs a circle of waiting; a global lock order breaks the circle. {lvl=2}
5. Atomic operations such as compare-and-swap make small updates safe without a lock. {lvl=3}
6. Python's GIL stops CPU parallelism in threads but does not stop races. {lvl=3}
7. Use async or threads for waiting, processes for computing. {lvl=3}
8. Prefer immutability, ownership and message passing; across machines, rely on database transactions and idempotence. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Check-then-act (`if free: take`) is a race unless the check and the act sit in one critical section. {lvl=1}
- Locking the writes but not the reads still allows torn or stale values. {lvl=2}
- Never hold a lock while doing slow I/O or calling unknown code. {lvl=2}
- Two locks taken in different orders in different places is a deadlock waiting for a busy day. {lvl=2}
- "The GIL makes it thread-safe" is false: it only protects the interpreter's own internals. {lvl=3}
- Amdahl's law: if 20% of the work is serial, even infinite cores give at most 5 times speedup. {lvl=3}
- A blocking call inside an async task freezes the whole event loop. {lvl=3}
- Tests passing does not prove a race is absent; stress it and review the design. {lvl=4}
:::
