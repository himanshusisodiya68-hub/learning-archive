---
title: CPU scheduling
summary: Who gets the processor next, and why a phone can crunch a download and still answer your tap instantly.
ncert: []
up_to: SDE-3
builds_on: [Processes and threads, Stacks and queues, Heaps and priority queues]
notes_prompt: Explain to a friend why running the shortest job first makes people wait less on average, and why a real computer cannot always do that.
margin:
  - kind: history
    title: History
    text: 'Round-robin time sharing dates to the 1960s time-sharing systems. Linux''s default scheduler, the Completely Fair Scheduler, arrived around 2007 [Unverified], and newer kernels have moved on to a refinement of the same idea.'
  - kind: tip
    title: Interview favourite
    text: 'Be ready to compute average waiting time for FIFO, shortest-job-first and round robin on a small table of jobs, and to say which one starves long jobs. Drawing the Gantt chart first avoids slips.'
  - kind: olympiad
    title: Design link
    text: 'The same trade-offs shape every queue: supermarket checkouts, hospital triage, cloud request queues. "Express lane for few items" is shortest-job-first with a rule you can see.'
books:
  - { title: "R. Arpaci-Dusseau and A. Arpaci-Dusseau, Operating Systems: Three Easy Pieces (OSTEP)", ref: "Scheduling: introduction, multi-level feedback queue, proportional share [Unverified chapter numbers]" }
  - { title: "A. Silberschatz et al., Operating System Concepts", ref: "CPU scheduling chapter [Unverified chapter number]" }
cards:
  - { front: "Name the three goals a scheduler juggles.", back: "Throughput (jobs finished per second), latency or response time (how soon a job first gets the CPU), and fairness (no job starves). Improving one often hurts another." }
  - { front: "What is the convoy effect in FIFO?", back: "One long job at the front makes many short jobs wait behind it, like a trolley of 100 items in front of people holding one item." }
  - { front: "Which policy minimises average waiting time, and what is the catch?", back: "Shortest job first. The catch: the OS does not know how long a job will run, and long jobs can starve." }
  - { front: "How does the time quantum affect round robin?", back: "Too small: lots of context-switch overhead. Too large: it behaves like FIFO and responsiveness suffers." }
  - { front: "What is starvation, and the usual cure?", back: "A ready job that never gets the CPU because others keep jumping ahead. Aging: raise a job's priority the longer it waits." }
  - { front: "Why does a phone stay responsive during a big download?", back: "A thread that sleeps often (waiting for taps or the network) is treated as interactive and runs promptly when it wakes. CPU-hungry threads absorb the remaining time." }
core:
  idea: 'A scheduler picks which ready thread runs next. No policy wins on every measure: shortest-first gives the lowest average wait, round robin gives quick first responses, and priorities protect important work. Real systems blend them so that threads that wake after waiting run first.'
  formulas:
    - tex: 'W_i = C_i - B_i'
      label: 'Waiting time = completion time minus burst time (all jobs arrive at time 0)'
    - tex: '\bar{W} = \dfrac{1}{n}\sum_{i=1}^{n} W_i'
      label: 'Average waiting time over n jobs'
  conditions:
    - 'The formula W = C - B counts all time spent ready but not running, and assumes every job arrives at time 0 with no I/O'
    - 'Shortest-job-first is optimal for average wait only when job lengths are known in advance'
    - 'Round robin assumes a fixed quantum and a negligible switch cost'
    - 'Fairness is about long-run share, not exact equality at every instant'
  sign: 'Commonest mistake: mixing up waiting time (time spent ready but not running), response time (time until the first run) and turnaround time (arrival to finish). Define which one you are computing.'
outcomes:
  - 'Name the goals of scheduling and explain why they conflict'
  - 'Compute average waiting time for FIFO, shortest-job-first and round robin on a small example'
  - 'Explain the effect of the time quantum, and spot starvation'
  - 'Describe how priorities, aging and multi-level feedback keep interactive work responsive'
  - 'Discuss priority inversion, and multi-core and container CPU limits, as design trade-offs'
opener:
  story: |
    You join a supermarket queue with a single item, a bottle of water. In front of you, a man is unloading a trolley with a hundred things. Behind you, three more people, each with one item. The cashier is the CPU. The customers are jobs.

    The cashier can work in the order people arrived. That feels fair, yet you will stand there for ten minutes to pay for a bottle of water. Or the cashier could serve the smallest baskets first, and everyone with a few items would be gone in a minute while the trolley waits a little longer.

    Your phone faces exactly this every millisecond. A video call, a game, a download and a keyboard are all queuing for the same cores. Which order should the cashier use?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A cashier serving a queue where one customer has a huge trolley and others have a single item"><rect x="224" y="150" width="76" height="24" rx="4" style="fill:var(--c);stroke:var(--ink);stroke-width:1.5"/><text x="262" y="166" style="font-size:11px;fill:var(--surface);text-anchor:middle">CPU</text><g style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="150" y="104" width="60" height="44" rx="5"/><rect x="108" y="124" width="20" height="24" rx="3"/><rect x="74" y="124" width="20" height="24" rx="3"/><rect x="40" y="124" width="20" height="24" rx="3"/></g><g style="fill:var(--ink)"><circle cx="180" cy="86" r="12" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><circle cx="118" cy="104" r="9" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><circle cx="84" cy="104" r="9" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><circle cx="50" cy="104" r="9" style="fill:none;stroke:var(--ink);stroke-width:1.5"/></g><g style="font-size:10px;fill:var(--muted);text-anchor:middle"><text x="180" y="166">100 items</text><text x="118" y="166">1</text><text x="84" y="166">1</text><text x="50" y="166">1</text></g><text x="16" y="210" style="font-size:11px;fill:var(--muted)">Who should the cashier serve first?</text></svg>'
life:
  - 'The express checkout ("10 items or fewer") is shortest-job-first, made visible so that customers can sort themselves.'
  - 'A hospital emergency room uses priorities: a heart attack goes ahead of a sprained ankle, and long waits are watched so nobody is forgotten (aging).'
  - 'Your phone: the keyboard and touch handling run promptly while a download or photo backup quietly uses spare time.'
  - 'Cloud servers share CPUs between customers by quota; a service that exceeds its allowance is paused for the rest of the accounting period (throttled). [Inference: details vary by platform]'
  - 'Traffic lights are round robin with long slices: each road gets a green turn, and the cycle length trades fairness against wasted switching time.'
models:
  - name: 'Average versus worst case'
    text: 'Shortest-job-first minimises the average wait but can leave one job waiting forever. Whenever you optimise an average (income, delivery time, exam score), ask who gets sacrificed.'
  - name: 'Small slices, small waits'
    text: 'Dividing time into small turns makes everyone''s first wait short, at the cost of constant handover. Meetings, study sessions and chores follow the same pattern: switching too often wastes more than it gives.'
  - name: 'Reward the one who waits'
    text: 'Aging (raising priority with waiting time) is a general fairness rule: anyone left waiting long enough should eventually get served. It stops a system from being captured by whoever shouts loudest.'
links:
  - leaf: 'cs/processes-and-threads'
    name: 'Processes and threads'
    same: 'Scheduling is the decision that fills the time slices and triggers the context switches of that lesson.'
    differs: 'That lesson says how a switch happens; this one asks which thread to switch to.'
  - leaf: 'cs/heaps'
    name: 'Heaps and priority queues'
    same: 'A priority scheduler must always find the highest-priority ready job: a priority queue.'
    differs: 'A heap gives the smallest key in O(log n); real kernels often use simpler structures or per-priority lists for speed.'
  - leaf: 'cs/stacks-and-queues'
    name: 'Stacks and queues'
    same: 'FIFO scheduling and round robin are plain queues: take from the front, and (for round robin) put an unfinished job at the back.'
    differs: 'A scheduler''s queue is also reordered by priorities and by how often threads wake, not only by arrival.'
next:
  q: 'Two threads share one counter and are scheduled onto cores at unpredictable moments. What goes wrong if both add 1 to it in the same instant?'
  leaf: 'cs/concurrency'
  name: 'Concurrency and locks'
symbols:
  - s: 'B_i'
    means: 'burst time of job i: how long it needs the CPU in total (milliseconds, ms)'
  - s: 'C_i'
    means: 'completion time of job i: the clock reading when it finishes (ms)'
  - s: 'W_i'
    means: 'waiting time of job i: time spent ready but not running (ms)'
  - s: '\bar{W}'
    means: 'average waiting time over all jobs (ms)'
  - s: 'n'
    means: 'number of jobs (count)'
  - s: 'q'
    means: 'time quantum: the longest a job runs before round robin moves on (ms)'
---

:::hook
q: Here's the puzzle. Four jobs need 10, 5, 2 and 1 minutes and all arrive together. Which order makes the average waiting time smallest?
options: ["Longest first: 10, 5, 2, 1", "Arrival order, whichever it happens to be", "Shortest first: 1, 2, 5, 10"]
answer: 2
right: Right. Serving the shortest first gives waits of 0, 1, 3 and 8 minutes, an average of 3. Longest first gives 0, 10, 15 and 17, an average of 10.5. Short jobs stop being delayed by long ones.
wrong: Count how many people each long job delays. If the 10-minute job goes first, all three others wait ten minutes. What if the small ones go first?
:::

## The scheduler's job {lvl=1 id=s-job label="Foundations"}

At any moment many threads are **ready**: they want a core and are only waiting for a turn. The **scheduler** is the part of the OS that picks which ready thread runs next, and for how long. That is all it does, and yet it decides how fast your computer feels.

Three goals pull against each other:

- **Throughput**: how many jobs get finished per second. A busy CPU with few switches maximises it.
- **Latency** (response time): how soon a job gets its first turn. A keystroke that waits 300 ms feels broken.
- **Fairness**: every job gets a decent share, and nobody waits forever.

Three words to keep apart. **Burst time** is how long a job needs the CPU. **Waiting time** is the time it spends ready but not running. **Turnaround time** is from arrival until it finishes: waiting plus burst.

## FIFO and shortest-first {lvl=1 id=s-fifo label="Foundations"}

The simplest policy is **FIFO** (first in, first out), also called first-come first-served: run each job to the end, in order of arrival. Take jobs of 10, 5, 2 and 1 minutes, all arriving at time 0, in that order:

| Job (burst) | Starts | Waits | Finishes |
|---|---|---|---|
| A (10) | 0 | 0 | 10 |
| B (5) | 10 | 10 | 15 |
| C (2) | 15 | 15 | 17 |
| D (1) | 17 | 17 | 18 |

The average wait is $(0+10+15+17)/4 = 10.5$ minutes. The short jobs sat behind a long one. This is the **convoy effect**, the one-item customer behind the trolley.

Now serve **shortest job first** (SJF): D, C, B, A. The waits are 0, 1, 3 and 8, so the average is $(0+1+3+8)/4 = 3$ minutes. The same work, done in a smarter order, cut the average wait by more than two thirds. In symbols, a job's wait is its completion time minus its own burst time:

$$W_i = C_i - B_i$$

Read it as: the time a job waited equals the time it finished minus the time it actually spent running.

The catch is that SJF needs to know the future. The OS does not know how long a program will run. It can guess from history (a job that used 2 ms bursts so far will probably want about 2 ms next), but guesses go wrong. And SJF can **starve** long jobs: if short jobs keep arriving, the trolley never reaches the till.

:::qc lvl=1
q: Jobs of 6, 3 and 1 minutes arrive together, in that order, under FIFO. What is the average wait?
options: ["About 5 minutes", "About 3 minutes", "About 1 minute"]
answer: 0
right: Right. Waits are 0, 6 and 9, which sum to 15, and 15 / 3 = 5.
wrong: The first job waits 0, the second waits for the first (6), the third waits for both (6 + 3 = 9). Add them and divide by 3.
:::

## Round robin {lvl=2 id=s-rr label="SDE-1"}

FIFO and SJF run each job to completion. **Round robin** (RR) instead gives every ready job a short turn called the **quantum** $q$. If the job is not done when its time is up, it goes to the back of the queue and the next job runs. Everyone is served within a few turns, so the response time is short and no one starves.

Here is a small simulator. A queue of (name, time left); run the front for at most $q$; if unfinished, put it at the back.

```python
from collections import deque

def round_robin(jobs, q):
    ready = deque(jobs.items())          # (name, time left)
    clock, done = 0, {}
    while ready:
        name, left = ready.popleft()
        run = min(q, left)
        clock += run
        if left > run: ready.append((name, left - run))
        else: done[name] = clock         # finish time
    return done

print(round_robin({"A": 5, "B": 3, "C": 1}, 2))   # {'C': 5, 'B': 8, 'A': 9}
```

:::figure caption="Round robin with quantum 2 for jobs A (5), B (3) and C (1). Each turn is at most 2 units; unfinished jobs rejoin the back. C finishes at 5, B at 8, A at 9."
<svg viewBox="0 0 360 110" role="img" aria-label="A timeline from 0 to 9: A runs 0 to 2, B 2 to 4, C 4 to 5, A 5 to 7, B 7 to 8, A 8 to 9">
<g style="stroke:var(--ink);stroke-width:1.2">
<rect x="18" y="26" width="72" height="30" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/>
<rect x="90" y="26" width="72" height="30" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface))"/>
<rect x="162" y="26" width="36" height="30" style="fill:color-mix(in srgb,var(--c) 65%,var(--surface))"/>
<rect x="198" y="26" width="72" height="30" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/>
<rect x="270" y="26" width="36" height="30" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface))"/>
<rect x="306" y="26" width="36" height="30" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/>
</g>
<g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="54" y="46">A</text><text x="126" y="46">B</text><text x="180" y="46">C</text><text x="234" y="46">A</text><text x="288" y="46">B</text><text x="324" y="46">A</text></g>
<g style="font-size:10px;fill:var(--muted);text-anchor:middle"><text x="18" y="74">0</text><text x="90" y="74">2</text><text x="162" y="74">4</text><text x="198" y="74">5</text><text x="270" y="74">7</text><text x="306" y="74">8</text><text x="342" y="74">9</text></g>
</svg>
:::

How big should $q$ be? Too small, and the context-switch overhead from the last lesson eats the CPU. Too large, and RR degenerates into FIFO. Typical quanta are a few to tens of milliseconds [Unverified]. Here is the four-job example under the three policies:

| Policy (jobs 10, 5, 2, 1; all at time 0) | Average wait | Average response (time to first run) |
|---|---|---|
| FIFO (10, 5, 2, 1) | 10.5 | 10.5 |
| Shortest job first | 3 | 3 |
| Round robin, $q = 1$ | 6 | 1.5 |

Read the table: SJF wins on waiting, RR wins on response, FIFO wins on nothing but simplicity. That is the trade-off in numbers.

:::qc lvl=2
q: Which policy gives the best response time (shortest wait for a first turn) when many jobs arrive together?
options: ["FIFO", "Round robin with a small quantum", "Shortest job first with long jobs last"]
answer: 1
right: Right. In round robin every job gets onto the CPU within one lap of the queue, so first-turn waits are tiny.
wrong: Under FIFO the last job waits for everyone's whole run. Which policy hands out a short turn to each job before anyone finishes?
:::

## Priorities and starvation {lvl=2 id=s-priority label="SDE-1"}

Not all work is equal: the sound driver matters more than a backup. The OS gives each thread a **priority** and always runs the highest ready one. The risk is **starvation**: low-priority jobs that never run because higher ones keep coming. The standard cure is **aging**: the longer a job has waited, the more its priority creeps up, until it gets a turn.

Another trap is **priority inversion**. A low-priority task holds a lock that a high-priority task needs. A medium-priority task, which does not need the lock, keeps running and prevents the low one from finishing, so the high-priority task is stuck behind the medium one. The fix is **priority inheritance**: the lock holder temporarily borrows the waiting task's priority. A famous case is the Mars Pathfinder lander (1997), which kept resetting until the fix was applied. [Unverified: details from memory]

## Why your phone stays responsive {lvl=3 id=s-feedback label="SDE-2"}

Here is the trick behind the opening question. Threads come in two kinds. **CPU-bound** ones (compressing a video) use their whole slice. **I/O-bound** or interactive ones (waiting for a tap, a network reply) run for a moment and then sleep. When the tap arrives the thread wakes, and a good scheduler runs it immediately, because it has barely used any CPU lately.

The classic design is the **multi-level feedback queue** (MLFQ). There are several queues, from high to low priority. A new job starts at the top. If it uses its whole slice, it drops a level (it looks CPU-bound). If it gives up the CPU early to wait for I/O, it stays high. Every so often, all jobs are boosted back to the top, which stops starvation and lets a job whose behaviour has changed be re-judged.

Linux's long-standing default, the Completely Fair Scheduler, takes a different route: it tracks for each thread how much CPU time it has had (scaled by priority) and always picks the thread that has had the least. A thread that slept has fallen behind and so is picked as soon as it wakes. [Unverified: the implementation has been revised in recent kernels; the principle of picking the most under-served thread remains.] Both designs answer the same question: how do you favour interactive work without knowing in advance which jobs are interactive? By watching what each thread did recently.

:::qc lvl=3
q: Why does a scheduler favour a thread that has just woken after waiting for the network?
options: ["It is always more important than other threads", "It has used little CPU recently, and delaying it would make the app feel slow", "Network threads cannot be paused"]
answer: 1
right: Right. A thread that mostly sleeps uses little CPU, so running it at once costs the others very little and helps the user a lot.
wrong: Think about cost and benefit: how much CPU does an interactive thread actually need, and what does the user notice if it waits?
:::

## Many cores, and limits in the cloud {lvl=4 id=s-scale label="SDE-3"}

With many cores the scheduler needs more than a single queue. A shared queue becomes a bottleneck (every core must lock it), so systems typically keep a **run queue per core** and occasionally move threads between cores to balance load. Moving a thread throws away its warm cache, so schedulers prefer to keep a thread on the same core (**affinity**) unless the imbalance is large. [Inference: a general design; details differ between kernels]

On servers, many tenants share a machine, and the platform limits CPU per container. A **CPU quota** such as "0.5 cores" is usually enforced by letting the container run for a number of milliseconds in each accounting period and pausing it once the quota is used (**throttling**). A multi-threaded service can burn its quota within a few milliseconds of the period and then stall for the rest of it, causing latency spikes even though average CPU use looks low. [Inference: behaviour of common Linux cgroup quotas; check your platform's documentation] When you design for latency, look at throttling counts, not only average CPU.

For hard real-time systems (flight control, anti-lock brakes) the question changes: not "what is fair" but "will every job meet its deadline?" Policies such as **earliest deadline first** are chosen and checked mathematically. [Unverified: standard result that EDF is optimal for a single processor with preemption and independent tasks]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A scheduler picks the next ready thread; it balances throughput, response time and fairness. {lvl=1}
2. FIFO is simple but suffers the convoy effect; shortest job first minimises average waiting time but needs the future. {lvl=1}
3. Waiting time is completion time minus burst time: $W_i = C_i - B_i$. {lvl=1}
4. Round robin gives each job a quantum; small gives quick response but more switching, large behaves like FIFO. {lvl=2}
5. Priorities protect important work but risk starvation; aging fixes it. Priority inversion needs priority inheritance. {lvl=2}
6. Feedback queues and fairness-based schedulers favour threads that sleep and wake, so interactive apps feel instant. {lvl=3}
7. At scale: per-core queues, cache affinity, CPU quotas that throttle, and deadlines for real-time work. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Compare policies on the same measure: waiting time, response time and turnaround time differ. {lvl=1}
- SJF looks optimal on paper but depends on knowing job lengths; real systems estimate from the past. {lvl=1}
- A very small quantum makes the system feel quick but wastes time on switches. {lvl=2}
- High priority alone is not a safe design: always ask what starves, and how aging or boosting prevents it. {lvl=2}
- Low CPU use does not mean no CPU trouble: throttling can produce delays in bursts. {lvl=4}
- In exam problems, state the assumption (all arrive at 0? ties broken how?) before computing. {lvl=2}
:::
