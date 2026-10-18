---
title: Intervals
summary: How a railway station knows how many platforms it needs, and how a calendar app spots a clash, by sorting stretches of time.
ncert: []
up_to: SDE-2
builds_on: [Sorting, Heaps and priority queues, Greedy algorithms]
notes_prompt: Explain to a friend how sorting trains by arrival time lets you count the platforms needed by looking at each train only once.
margin:
  - kind: history
    title: History
    text: 'The sweep-line idea, moving a scanning line across a picture and reacting only at events, comes from computational geometry in the 1970s; it was first used for finding crossing line segments. [Unverified: from memory]'
  - kind: tip
    title: Interview signal
    text: 'Pairs like [start, end], "meetings", "bookings", "ranges", "segments" or "merge overlapping" mean intervals. Your first move is nearly always to sort, by start for merging and by end for choosing the most.'
  - kind: olympiad
    title: Sorting does the thinking
    text: 'In this family the clever step is choosing what to sort by. Merging needs start order; "keep as many as possible" needs end order, because finishing early leaves the most room for the rest.'
books:
  - { title: "J. Kleinberg and E. Tardos, Algorithm Design", ref: "Interval scheduling and interval partitioning are the opening examples of the greedy chapter [Unverified: chapter number]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Activity-selection problem in the greedy algorithms chapter [Unverified]" }
cards:
  - { front: "When do two intervals [a, b) and [c, d) overlap?", back: "When a < d and c < b: each starts before the other ends. If one ends exactly where the other starts, they only touch and do not overlap (half-open reading)." }
  - { front: "What do you sort by to merge overlapping intervals?", back: "By start. Then one pass: if the next start is not past the end of the last merged interval, extend that end to the larger of the two ends; otherwise begin a new interval." }
  - { front: "Two ways to find the most intervals active at once?", back: "Sweep line: turn each interval into a +1 at its start and a -1 at its end, sort, and keep a running total. Or sort by start and keep a min-heap of end times; the heap size is the answer." }
  - { front: "To keep the most non-overlapping intervals, what do you sort by, and why?", back: "By end. Take the interval that finishes earliest, then the next one that starts at or after it. Finishing earliest leaves the most room for later ones." }
  - { front: "Minimum intervals to remove so that none overlap?", back: "Total count minus the most you can keep (the end-sorted greedy)." }
  - { front: "What does sorting cost, and what does the rest of an interval solution cost?", back: "Sorting is O(n log n) and usually dominates; the single pass after it is O(n), a heap pass is O(n log n)." }
core:
  idea: 'An interval is a stretch with a start and an end. Sort the intervals, and each question about clashes, merges, counts and best choices becomes a single pass: sort by start to merge or count overlaps, sort by end to keep as many as possible.'
  formulas:
    - tex: 'a < d \;\text{ and }\; c < b'
      label: 'Intervals [a, b) and [c, d) overlap'
    - tex: 'O(n \log n)'
      label: 'Sorting dominates; the pass after it is O(n)'
  conditions:
    - 'Each item is a start and an end on a line (time, position, a number range)'
    - 'You have agreed whether touching ends count as overlap (the statement or an example decides)'
    - 'Ends are at least starts; an empty or reversed interval needs a decision first'
  sign: 'The commonest mistake is the boundary: using less-than where the statement needs less-or-equal, so touching intervals are merged or counted wrongly. Check with one example where an end equals a start.'
outcomes:
  - 'State the overlap test and settle whether touching intervals overlap'
  - 'Merge overlapping intervals and insert a new interval into a sorted list'
  - 'Find the most intervals overlapping at one time with a sweep line and with a min-heap'
  - 'Choose the most non-overlapping intervals, or the fewest to remove, by sorting on end'
  - 'Recognise ten or more classic problems as one of these variants'
opener:
  story: |
    A busy railway station has five trains coming in this morning. Express A pulls in at 9:00 and leaves at 9:40. Express B arrives at 9:10 and leaves at 9:50. Express C arrives at 9:30 and leaves at 10:00. Later, two more trains use the station between 11:00 and 11:40. Each train needs its own platform while it stands there, and not a minute longer.

    The station master has to decide how many platforms to build. Add up the trains and you get five, which is far too many. Count only the trains that never meet and you get one, which is far too few.

    So what exactly should be counted? And is there a way to find out by walking through the timetable once, instead of comparing every pair of trains?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Five train stays drawn as bars on a timeline, three of them overlapping"><path d="M30 190H300" style="stroke:var(--ink);stroke-width:1.5"/><g style="font-size:10px;fill:var(--muted);text-anchor:middle"><text x="50" y="206">9:00</text><text x="130" y="206">10:00</text><text x="210" y="206">11:00</text><text x="290" y="206">12:00</text></g><g style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="50" y="40" width="53" height="22" rx="5"/><rect x="63" y="70" width="53" height="22" rx="5"/><rect x="90" y="100" width="40" height="22" rx="5"/><rect x="210" y="40" width="40" height="22" rx="5"/><rect x="223" y="70" width="27" height="22" rx="5"/></g><path d="M96 30V185" style="stroke:var(--bad);stroke-width:1.5;stroke-dasharray:4 3"/><text x="102" y="150" style="font-size:11px;fill:var(--bad)">3 trains here</text><g style="font-size:11px;fill:var(--ink)"><text x="56" y="55">A</text><text x="69" y="85">B</text><text x="96" y="115">C</text></g><text x="30" y="226" style="font-size:11px;fill:var(--muted)">Busiest moment decides the platforms</text></svg>'
life:
  - 'A calendar app warns that two meetings clash, and a booking site hides rooms that are already taken for your dates.'
  - 'A railway station or an airport allots platforms and gates by looking at the busiest moment of the day.'
  - 'A video editor merges overlapping clips on a timeline into one continuous block.'
  - 'A hospital or exam hall schedules rooms and invigilators so no one is in two places at once.'
  - 'A data-centre or phone network counts how many calls or jobs are running at the same time to decide how much capacity to buy.'
models:
  - name: 'Capacity is set by the peak'
    text: 'You do not need as many resources as there are tasks, only as many as there are tasks at the busiest moment. This holds for platforms, checkout counters, kitchen burners and bandwidth.'
  - name: 'Sort first, then one pass'
    text: 'Putting items in a sensible order often turns a tangle of pairwise comparisons into a simple walk. Sort the exam papers by roll number and every later check becomes easy.'
  - name: 'Finish early to leave room'
    text: 'If you want to fit in as much as possible, pick the job that ends soonest. A person who finishes tasks early has more time left for the next one, and the same reasoning guides packing a day.'
links:
  - leaf: 'cs/sorting'
    name: 'Sorting'
    same: 'Interval solutions are sorting plus one pass; the sort carries most of the work.'
    differs: 'Plain sorting orders single numbers; here you choose the key (start or end) so that one pass suffices.'
  - leaf: 'cs/heaps'
    name: 'Heaps and priority queues'
    same: 'The min-heap of end times always gives the room that frees up first, in O(log n).'
    differs: 'A heap answers "which ends soonest" only; the sweep line answers the same question with a sorted event list and no heap.'
  - leaf: 'cs/greedy'
    name: 'Greedy algorithms'
    same: 'Picking the interval that ends earliest is a greedy choice backed by an exchange argument.'
    differs: 'Merging is not a choice problem at all; it is a straight sweep with no alternatives to weigh.'
next:
  q: 'You are climbing a staircase and can take one or two steps at a time. How many different ways are there to reach the top, and why does remembering small answers beat trying every route?'
  leaf: 'cs/iv-dynamic-programming'
  name: 'Dynamic programming patterns'
symbols:
  - s: '[a, b)'
    means: 'interval from start a up to but not including end b, so touching ends do not overlap (times, positions, or plain numbers)'
  - s: 'n'
    means: 'number of intervals (count)'
  - s: '+1,\; -1'
    means: 'sweep-line events: one more interval becomes active at a start, one fewer at an end'
  - s: 'O(n \log n)'
    means: 'cost of sorting n items; roughly n times the number of times n can be halved'
---

:::hook
q: Here are the five trains again. Three of them (A, B and C) are in the station together between 9:30 and 9:40; the other two share part of 11:00 to 11:40. How many platforms are enough?
options: ["Five, one per train", "Three, the most trains present at once", "One, since trains leave quickly"]
answer: 1
right: Right. Platforms are needed for the busiest moment. At 9:30 to 9:40 three trains are present; later never more than two. Three platforms serve all five trains, and the platforms are reused for the late trains.
wrong: One platform fails the moment B arrives while A is still standing. Five is more than needed, because the 11:00 trains can use platforms the morning trains left. What matters is how many are in the station at the same moment.
:::

## Stretches on a line {lvl=1 id=s-line label="Foundations"}

A stay at a platform, a meeting, a hotel booking: each is an **interval**, a start and an end on a line. We write it as $[a, b)$, meaning "from $a$ up to, but not including, $b$". Not including matters: a meeting 9 to 10 and another 10 to 11 can share a room, because the first is over when the second begins.

Two intervals **overlap** when each starts before the other ends. Say them aloud: "$[a,b)$ and $[c,d)$ overlap if $a < d$ and $c < b$". If one of those fails, one interval is wholly before the other. So there are only three relations to care about: wholly before, wholly after, or overlapping.

Some problems say that touching counts as overlap (for example two ranges that share the number 5). Then use less-than-or-equal. Read the statement, then test with one pair that touches.

:::qc lvl=1
q: Meeting P is [2, 5) and meeting Q is [5, 7). Do they overlap?
options: ["Yes, they share the number 5", "No, P ends exactly when Q starts", "Only if they use different rooms"]
answer: 1
right: Right. With half-open intervals, P finishes at 5 and Q starts at 5, so one room is enough. Always confirm this convention with the interviewer.
wrong: Apply the test: P overlaps Q if 2 is below 7 and 5 is below 5. Is the second part true?
:::

## Sort by start, then merge {lvl=2 id=s-merge label="SDE-1"}

To merge overlapping intervals into the smallest list of separate blocks, **sort by start**. Then any interval that overlaps the last block must start inside it or right at its end. One pass is enough: if the next interval starts no later than the current block ends, stretch the block's end to the larger of the two ends; otherwise close the block and begin a new one.

:::figure caption="Four intervals on the line from 0 to 20 merge into three blocks. The first two overlap, so the block runs from 1 to 6."
<svg viewBox="0 0 440 150" role="img" aria-label="Four intervals above, three merged blocks below"><path d="M30 130H420" style="stroke:var(--ink);stroke-width:1.5"/><g style="font-size:10px;fill:var(--muted);text-anchor:middle"><text x="50" y="145">1</text><text x="150" y="145">6</text><text x="190" y="145">8</text><text x="230" y="145">10</text><text x="330" y="145">15</text><text x="390" y="145">18</text></g><g style="fill:color-mix(in srgb,var(--c) 20%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="50" y="14" width="40" height="18" rx="4"/><rect x="70" y="38" width="80" height="18" rx="4"/><rect x="190" y="14" width="40" height="18" rx="4"/><rect x="330" y="14" width="60" height="18" rx="4"/></g><g style="fill:var(--c);stroke:none"><rect x="50" y="84" width="100" height="18" rx="4"/><rect x="190" y="84" width="40" height="18" rx="4"/><rect x="330" y="84" width="60" height="18" rx="4"/></g><g style="font-size:10px;fill:var(--muted)"><text x="250" y="48">input (sorted by start)</text><text x="250" y="96">merged</text></g><path d="M200 66V76M110 66V76M360 66V76" style="stroke:var(--muted);stroke-width:1.5"/></svg>
:::

```python
def merge(intervals):
    if not intervals: return []
    intervals.sort(key=lambda x: x[0])
    out = [intervals[0][:]]
    for s, e in intervals[1:]:
        if s <= out[-1][1]:                      # overlaps or touches
            out[-1][1] = max(out[-1][1], e)      # stretch the block
        else:
            out.append([s, e])                   # a new block
    return out
```

Read it as: "walk in start order; extend the last block while the next interval begins inside it". Note `max`: a long interval can swallow a shorter one that starts inside it. Here `<=` merges touching intervals; use `<` if touching intervals must stay apart. Sorting costs $O(n \log n)$ and the pass costs $O(n)$.

**Inserting into a sorted, non-overlapping list** needs no sort: copy everything wholly before the new interval, absorb everything that overlaps it, then copy everything wholly after. Three phases, one pass.

```python
def insert(intervals, new):
    out, i, n = [], 0, len(intervals)
    while i < n and intervals[i][1] < new[0]:     # wholly before
        out.append(intervals[i]); i += 1
    while i < n and intervals[i][0] <= new[1]:    # overlaps: absorb
        new = [min(new[0], intervals[i][0]), max(new[1], intervals[i][1])]; i += 1
    out.append(new)
    out.extend(intervals[i:])                     # wholly after
    return out
```

:::qc lvl=2
q: What does merge return for [[1, 4], [2, 3]]?
options: ["[[1, 4], [2, 3]]", "[[1, 4]]", "[[1, 3]]"]
answer: 1
right: Right. The second interval starts inside the first and ends before it, so the block's end stays at max(4, 3) = 4. Forgetting max would shrink the block to 3.
wrong: After sorting, 2 is not past the end 4, so they merge. What should the new end be, the larger of the two ends or the later one in the list?
:::

## How many at once? Sweep line and heap {lvl=2 id=s-count label="SDE-1"}

The platform question asks for the **maximum overlap**. Two clean methods.

**Sweep line.** Turn every interval into two events: a $+1$ at its start and a $-1$ at its end. Sort all events by time and walk through them with a running total; the largest total seen is the answer. When an end and a start have the same time, process the end first, so touching intervals do not count as overlapping. Sorting pairs `(time, delta)` does this automatically, since $-1$ sorts before $+1$.

```python
def max_overlap(intervals):
    events = []
    for s, e in intervals:
        events.append((s, 1))
        events.append((e, -1))
    events.sort()                      # at equal time, -1 comes first
    cur = best = 0
    for _, delta in events:
        cur += delta
        best = max(best, cur)
    return best
```

**Min-heap of ends.** Sort by start. Keep a heap of the end times of rooms in use. For each new interval, look at the earliest end. If that room has been freed by the time this one starts, reuse it; otherwise open a new one. The heap's size at the end is the number of rooms.

```python
import heapq
def min_rooms(intervals):
    intervals.sort()
    ends = []                          # min-heap of end times in use
    for s, e in intervals:
        if ends and ends[0] <= s:      # earliest room is free
            heapq.heapreplace(ends, e)
        else:
            heapq.heappush(ends, e)    # need one more room
    return len(ends)
```

Both cost $O(n \log n)$. The sweep line is shorter and extends to "how many at each moment" or "when is it busiest"; the heap version also tells you *which* room each meeting uses. Checking only whether a person can attend **all** meetings is simpler: sort by start and test that every end is at most the next start.

:::qc lvl=2
q: Intervals [1, 4), [4, 6), [6, 9) are run through the sweep line. What is the maximum overlap?
options: ["1", "2", "3"]
answer: 0
right: Right. Each ends exactly when the next begins, and ends are processed first, so the running total never exceeds 1.
wrong: With ends processed before starts at the same time, the total goes up to 1, down to 0, up to 1 again. Does it ever reach 2?
:::

## Choosing the most: sort by end {lvl=3 id=s-choose label="SDE-2"}

Now the question changes: you cannot attend everything, so **keep as many non-overlapping intervals as possible**. Sorting by start does not work (one very long interval that starts first can block many short ones). Sorting by length does not either. The rule that works: **sort by end, take the interval that ends first, then repeatedly take the next one whose start is at or after the end of the last one taken**.

Why? Take any best answer. Its first interval ends no earlier than the one that ends first overall. Swap them: the swapped interval ends earlier, so it leaves at least as much room for the rest, and the answer is no worse. This **exchange argument** repeats for each following interval, so the greedy choice is always safe.

```python
def max_non_overlapping(intervals):
    intervals.sort(key=lambda x: x[1])          # by END
    count, last_end = 0, float('-inf')
    for s, e in intervals:
        if s >= last_end:                       # fits after the last one taken
            count += 1
            last_end = e
    return count
```

The fewest intervals to **remove** so that none overlap is simply `len(intervals) - max_non_overlapping(intervals)`.

A neighbour of this problem is **covering**: given a target span such as $[0, T]$, use as few intervals as possible to cover all of it. Sort by start; from the current reach, among all intervals that start at or before that reach pick the one that goes farthest; repeat. If none goes farther, covering is impossible.

**Intersecting two sorted lists** of disjoint intervals uses two pointers. Take the overlap `[max(starts), min(ends)]` if it is not empty, then advance the pointer whose interval ends first, because that interval cannot meet anything later in the other list.

```python
def intersect(A, B):
    i = j = 0; out = []
    while i < len(A) and j < len(B):
        lo = max(A[i][0], B[j][0]); hi = min(A[i][1], B[j][1])
        if lo <= hi: out.append([lo, hi])
        if A[i][1] < B[j][1]: i += 1
        else: j += 1
    return out
```

:::qc lvl=3
q: Intervals [0, 10), [1, 2), [3, 4), [5, 6). What is the most you can keep without overlap?
options: ["1", "3", "4"]
answer: 1
right: Right. Sorted by end: [1,2), [3,4), [5,6), [0,10). Take the first three; the long one overlaps them all. Sorting by start would have taken the long one first and kept only 1.
wrong: Sort by end and walk: after taking [1, 2), the next interval starting at or after 2 is [3, 4), and so on.
:::

## The variants {lvl=3 id=s-variants label="SDE-2"}

| Variant | Signal in the statement | Change to the template |
|---|---|---|
| Merge | "combine overlapping", "smallest set of blocks" | sort by start; extend last block's end with `max` |
| Insert | "add one range to a sorted list" | three phases: before, absorb, after; no sort needed |
| Max overlap | "most at once", "rooms/platforms needed" | sweep line, or min-heap of end times |
| Can attend all | "any clash?" | sort by start; check each end against the next start |
| Max kept | "most you can do", "schedule as many" | sort by end; take if start is at or after last end |
| Min removals | "fewest to cancel so none clash" | total minus max kept |
| Cover a span | "fewest ranges to cover", "stitch" | sort by start; jump to the farthest end reachable |
| Intersect lists | "where do two schedules both have time" | two pointers; advance the earlier end |
| Gaps | "free time", "uncovered parts" | merge first; the gaps are between blocks |
| Point queries | "how many ranges contain x" | sorted starts and sorted ends with binary search (offline), or a sweep |

## Classic problem types {lvl=3 id=s-catalogue label="SDE-2"}

Described in our own words; the family is what to recognise.

| Problem type | Variant |
|---|---|
| Combine a list of overlapping ranges into disjoint ones | Merge |
| Add a new range into a sorted list of disjoint ranges | Insert |
| Decide whether one person can attend every meeting | Can attend all |
| Count the rooms needed for a list of meetings | Max overlap (heap or sweep) |
| Assign each meeting a specific room | Min-heap of ends; remember which room freed |
| Fewest intervals to delete so the rest do not overlap | Min removals |
| Most activities one person can do | Max kept |
| Fewest arrows to burst balloons that are horizontal spans | Max kept in disguise: one arrow per end-sorted group |
| Fewest clips to cover a whole video | Cover a span |
| Common free time of all employees, given each person's busy times | Merge all, then gaps |
| Overlap of two people's availability lists | Intersect lists |
| Day with the most guests in a hotel, given arrival and departure days | Sweep line |
| Maximum number of cars on a road at once, given entry and exit times | Sweep line |
| Booking calendar that rejects a clash when you try to book | Insert with check; binary search for the neighbours |
| Number of ranges that contain each query number | Point queries |

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

1. **Wrong sort key.** Start for merging and counting; end for choosing the most.
2. **Boundary slips.** `<` against `<=` decides whether touching intervals merge or overlap. Test one touching example.
3. **Forgetting `max` when extending**, so a short interval inside a long one shrinks the block.
4. **Same-time events in the wrong order** in a sweep line; process ends before starts (half-open), or the opposite if both ends count.
5. **Editing the caller's list** (`out = [intervals[0]]` shares the inner list); copy with `[:]` if the input must not change.
6. **Empty input.** Both `intervals[0]` and a heap peek fail on an empty list.
7. **Forgetting the last block.** In some merge loops written with a separate `current` variable, the final block is never appended.
8. **Using a time array for huge values.** If times go up to a billion, use events and sorting, not an array indexed by time.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. An interval is a start and an end; two overlap when each starts before the other ends. Touching ends need a decision. {lvl=1}
2. Sort by start and merge in one pass, extending the last block's end with max. {lvl=2}
3. Maximum overlap by a sweep line (+1 at starts, -1 at ends, ends first at ties) or by a min-heap of end times. {lvl=2}
4. Inserting into a sorted list is three phases: copy the earlier ones, absorb the overlapping ones, copy the later ones. {lvl=2}
5. To keep the most intervals, sort by end and greedily take any that start at or after the last end; the exchange argument proves it. {lvl=3}
6. Fewest removals equals total minus the most kept; covering a span jumps to the farthest reachable end. {lvl=3}
7. Cost is $O(n \log n)$ for the sort, then $O(n)$ for the pass. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Ask first: do touching intervals overlap? Then use `<` or `<=` to match. {lvl=2}
- Decide the sort key from the question: merging and counting use start; maximum selection uses end. {lvl=2}
- When extending a block, use max of the two ends, never just the new end. {lvl=2}
- A sweep line must process an end before a start at the same time unless touching counts as overlap. {lvl=3}
- Quote the cost: sort $O(n \log n)$ plus a linear pass, or a heap pass of $O(n \log n)$. {lvl=3}
:::
