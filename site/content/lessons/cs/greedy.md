---
title: Greedy algorithms
summary: When grabbing the best-looking option right now is provably the best overall, and the small counter-example that shows when it is not.
ncert: []
up_to: SDE-3
builds_on: [Sorting, Big-O and growth of cost, Divide and conquer]
notes_prompt: Explain to a friend why a shopkeeper's habit of handing back the biggest note first works in India, and why the same habit could fail with other coins.
margin:
  - kind: history
    title: History
    text: 'David Huffman invented his coding method in 1951 as a student, reportedly while looking for a way out of a final exam. [Unverified: from memory]'
  - kind: tip
    title: Interview favourite
    text: 'Phrases like "maximum number of", "minimum number of rooms", "can you reach the end" often have a short greedy answer. Always test it on a small counter-example before trusting it.'
  - kind: olympiad
    title: Proof habit
    text: A greedy answer without an argument is a guess. The standard proof, the exchange argument, shows any better answer can be reshaped, one swap at a time, into the greedy one without getting worse.
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 15 Greedy algorithms, activity selection and Huffman codes [Unverified]" }
  - { title: "J. Kleinberg and E. Tardos, Algorithm Design", ref: "Ch. 4 Greedy algorithms [Unverified]" }
  - { title: "S. Skiena, The Algorithm Design Manual", ref: "Section on scheduling and greedy heuristics [Unverified]" }
cards:
  - { front: "What is a greedy algorithm?", back: "Build the answer one step at a time, always taking the choice that looks best right now, and never undo a choice." }
  - { front: "Name two things that must be true for greedy to be correct.", back: "A best-looking first choice can always be part of some best overall answer (greedy choice), and what is left after the choice is a smaller problem of the same kind (optimal substructure)." }
  - { front: "Which rule solves the one-room meeting problem?", back: "Sort by finish time; take a meeting if it starts at or after the last chosen one ends. Earliest finish leaves the most room for the rest." }
  - { front: "What is an exchange argument?", back: "Take any best answer, swap one of its choices for the greedy choice, and show it is no worse. Repeat until it is the greedy answer." }
  - { front: "Coins 1, 3, 4 and amount 6: greedy or best?", back: "Greedy takes 4+1+1 = 3 coins; the best is 3+3 = 2 coins. Greedy is not always right." }
  - { front: "How does Huffman coding choose codes?", back: "Repeatedly merge the two rarest symbols into one; rare symbols end up deep (long codes) and common symbols near the top (short codes)." }
core:
  idea: 'A greedy algorithm builds an answer step by step, always taking the best-looking choice available now and never going back. It is correct only when such a choice can always be extended to a best overall answer, which you must prove (usually by an exchange argument), not assume.'
  formulas:
    - tex: '\text{take } I \iff \text{start}(I) \ge \text{end of last chosen}'
      label: 'One-room meetings: sort by end time, then take every meeting that fits'
    - tex: '\text{cost} = \sum_i f_i\, d_i'
      label: 'Huffman: frequency times code length, added over all symbols, is what we minimise'
  conditions:
    - 'A locally best choice can always be extended to a globally best answer (greedy choice property)'
    - 'After a choice, the rest is a smaller problem of the same shape (optimal substructure)'
    - 'Choices do not need to be undone, and the list of candidates can be ordered by a single clear rule'
  sign: 'The commonest mistake is trusting a rule because it sounds sensible. "Shortest meeting first" and "biggest coin first" both sound right and both fail somewhere.'
outcomes:
  - 'Explain what makes a choice greedy and give one problem where it works and one where it fails'
  - 'Solve one-room meeting scheduling by sorting on finish time'
  - 'Write an exchange-argument proof sketch for a greedy rule'
  - 'Build a Huffman code for a small set of letter frequencies'
  - 'Test a greedy idea against small counter-examples before using it'
opener:
  story: |
    You buy something for ₹7 and hand over ₹100. The shopkeeper does not stop to think. He counts back: a ₹50 note, a ₹20, another ₹20, a ₹2 and a ₹1. Biggest note first, every time.

    It feels obvious, but is it obviously right? He never checked whether some other mix of notes would give you fewer pieces. He just grabbed the biggest one that fits, over and over, and it worked. A habit like that is called **greedy**.

    Now imagine a country with coins of 1, 3 and 4 only, and you are owed 6. The shopkeeper's habit is about to hand you something silly. Would you spot it before he does?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two ways to make 6 from coins 1, 3 and 4: greedy uses three coins, the best uses two"><text x="160" y="24" style="font-size:12px;fill:var(--ink);text-anchor:middle">Owed 6. Coins: 1, 3, 4</text><text x="20" y="60" style="font-size:11px;fill:var(--muted)">Greedy (biggest first)</text><g style="stroke:var(--bad);stroke-width:2;fill:color-mix(in srgb,var(--bad) 12%,var(--surface))"><circle cx="50" cy="96" r="22"/><circle cx="110" cy="96" r="14"/><circle cx="150" cy="96" r="14"/></g><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="50" y="100">4</text><text x="110" y="100">1</text><text x="150" y="100">1</text></g><text x="210" y="100" style="font-size:12px;fill:var(--bad)">3 coins</text><text x="20" y="160" style="font-size:11px;fill:var(--muted)">Best</text><g style="stroke:var(--c);stroke-width:2;fill:color-mix(in srgb,var(--c) 12%,var(--surface))"><circle cx="50" cy="196" r="18"/><circle cx="104" cy="196" r="18"/></g><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="50" y="200">3</text><text x="104" y="200">3</text></g><text x="210" y="200" style="font-size:12px;fill:var(--c)">2 coins</text></svg>'
life:
  - 'A shopkeeper returning change with the biggest notes first uses a greedy rule, and it happens to work for the Indian note and coin set.'
  - 'Zip files and many image and music formats use Huffman-style codes, giving common symbols short codes.'
  - 'Booking the most talks into one hall, or the most matches into one stadium on one day, is the meeting-scheduling problem.'
  - 'Loading a truck or filling a suitcase with the most valuable items per kilo first is greedy, which is only exactly right if you can take part of an item.'
  - 'Road navigation and network routing use Dijkstra''s algorithm, which is greedy: settle the closest unvisited place next.'
models:
  - name: 'Keep your options open'
    text: 'The meeting that finishes earliest wins because it leaves the most time free. In life, among choices that look equal, take the one that closes the fewest doors.'
  - name: 'Try to break your own rule'
    text: 'A rule that has never met a counter-example is not yet trusted. Before betting on a simple rule (in investing, hiring, planning), hunt for the smallest case where it goes wrong.'
  - name: 'Local best is not global best'
    text: 'Climbing the nearest slope in fog leads to the nearest hilltop, not the highest. Short-term wins can lock you out of the best long-term outcome, so ask when the local choice is safe.'
links:
  - leaf: 'cs/divide-and-conquer'
    name: 'Divide and conquer'
    same: 'Both break a problem into a smaller one of the same kind and rely on a rule that shrinks it.'
    differs: 'Divide and conquer solves every piece and combines; greedy commits to one choice and never revisits it.'
  - leaf: 'cs/heaps'
    name: 'Heaps and priority queues'
    same: 'Huffman and many greedy methods need "give me the smallest remaining item" over and over, which a heap answers in log n.'
    differs: 'A heap is a tool for picking; whether the pick is the right one is the greedy argument.'
  - leaf: 'mat/induction'
    name: 'Induction'
    same: 'A greedy proof is an induction: the first choice is safe, and the rest is a smaller instance where the same argument applies.'
    differs: 'The exchange argument is the special step that shows the first choice is safe.'
next:
  q: 'Greedy broke on coins 1, 3, 4 because the best first coin is not part of the best answer. What if we simply remember the best answer for every smaller amount and build up from them?'
  leaf: 'cs/dynamic-programming'
  name: 'Dynamic programming'
symbols:
  - s: 'greedy choice'
    means: 'the option that looks best right now, picked by one fixed rule'
  - s: 'start(I), end(I)'
    means: 'the start and finish times of a meeting I (hours)'
  - s: 'f_i'
    means: 'how often symbol i occurs in the text (count)'
  - s: 'd_i'
    means: 'length of the code for symbol i, or its depth in the code tree (bits)'
  - s: 'O(n\log n)'
    means: 'cost dominated by sorting n items; the greedy pass after it costs only about n'
---

:::hook
q: Here's the puzzle. A country has coins of 1, 3 and 4 only. The shopkeeper's habit is "biggest coin that fits, every time". You are owed 6. How does his habit do?
options: ["3 coins, though 2 would do", "2 coins, the fewest possible", "3 coins, the fewest possible"]
answer: 0
right: Right. His habit takes 4, then 1, then 1, which is 3 coins. Two 3-coins make 6 with just 2. Greedy fell for the big coin, which was a mistake. The same habit is perfect for notes of 1, 2, 5, 10, 20, 50 and 100, so the lesson is to ask when it works.
wrong: Try it. He takes the biggest coin that fits: 4. That leaves 2, and the only coin that fits is 1, twice. Is there any other way to make 6?
:::

## The coin habit {lvl=1 id=s-coins label="Foundations"}

Take the shopkeeper's rule seriously: **at each step, take the biggest coin that does not overshoot.** For ₹93 in coins and notes of 1, 2, 5, 10, 20 and 50, it goes 50, 20, 20, 2, 1, which is 5 pieces. Nobody can do better with those denominations.

An algorithm that builds its answer one step at a time, always taking the choice that looks best right now and never undoing it, is called **greedy**. It is simple, fast and attractive. The catch is the counter-example: with coins 1, 3 and 4 and an amount of 6, greedy uses three coins and two would do.

So greedy is not a method that always works. It is a method that works **when you can prove that the best-looking choice is safe**. Learning to tell the two cases apart is the lesson.

:::qc lvl=1
q: Coins 1, 5 and 10. You are owed 13. How many coins does the biggest-first habit use?
options: ["4 coins: 10, 1, 1, 1", "3 coins", "2 coins"]
answer: 0
right: Right. 10 leaves 3, and then only 1s fit. No other mix does better here, so greedy is correct on this set.
wrong: Take 10 first. What is left is 3, and which coins fit 3?
:::

## Meetings in one room {lvl=2 id=s-meetings label="SDE-1"}

A harder problem. One hall, many requests, each with a start and an end time. No two chosen events may overlap. **Choose as many as possible.** Which rule picks the winners?

Three sensible-sounding rules:

| Rule | Sounds like | Counter-example |
|---|---|---|
| Earliest start first | Don't waste time waiting | A long event 9 to 17 blocks four short ones inside it |
| Shortest event first | Short ones fit in more easily | A short event at 11 to 13 sits between two events 9 to 12 and 12 to 15, blocking both |
| **Earliest finish first** | Leave the most time free for the rest | None: provably correct |

The winning rule: sort by **finish time**, then walk through the list, taking each meeting that starts at or after the end of the last one you took.

```python
def max_meetings(events):             # events: list of (start, end)
    events.sort(key=lambda e: e[1])   # earliest finish first
    count, free_at = 0, float("-inf")
    for start, end in events:
        if start >= free_at:          # fits after the last chosen
            count += 1
            free_at = end
    return count
```

Sorting costs $O(n\log n)$ and the pass costs $O(n)$, so the whole thing is $O(n\log n)$.

:::figure caption="Six requests, sorted by finish time. Walking down the list and taking each one that fits picks A, C and E (green)."
<svg viewBox="0 0 320 175" role="img" aria-label="Timeline with six meetings from 9 to 17; the earliest-finish rule chooses A, C and E">
<line x1="20" y1="152" x2="300" y2="152" class="axis"/>
<g style="font-size:9px;fill:var(--muted);text-anchor:middle"><text x="20" y="166">9</text><text x="90" y="166">11</text><text x="160" y="166">13</text><text x="230" y="166">15</text><text x="300" y="166">17</text></g>
<g style="stroke-width:1.5;stroke:var(--muted);fill:color-mix(in srgb,var(--muted) 10%,var(--surface))">
<rect x="55" y="34" width="70" height="16" rx="3"/>
<rect x="125" y="82" width="105" height="16" rx="3"/>
<rect x="20" y="130" width="280" height="16" rx="3"/>
</g>
<g style="stroke-width:1.5;stroke:var(--mat);fill:color-mix(in srgb,var(--mat) 20%,var(--surface))">
<rect x="20" y="10" width="70" height="16" rx="3"/>
<rect x="90" y="58" width="70" height="16" rx="3"/>
<rect x="160" y="106" width="105" height="16" rx="3"/>
</g>
<g style="font-size:10px;fill:var(--ink)">
<text x="24" y="22">A 9-11</text><text x="59" y="46">B 10-12 (overlaps A)</text><text x="94" y="70">C 11-13</text>
<text x="129" y="94">D 12-15 (overlaps C)</text><text x="164" y="118">E 13-16</text><text x="24" y="142">F 9-17 (overlaps everything)</text>
</g>
</svg>
:::

:::qc lvl=2
q: Events (9,10), (9.5,11), (10,12). Earliest finish first picks which?
options: ["(9,10) then (10,12)", "(9,10) then (9.5,11)", "Only (9.5,11)"]
answer: 0
right: Right. Sorted by finish: (9,10), (9.5,11), (10,12). Take (9,10); (9.5,11) starts before 10 so skip; (10,12) starts at 10, so take it. Two meetings.
wrong: Sort by end time, take (9,10), and set the free time to 10. Which of the other two start at 10 or later?
:::

## Why it works: the exchange argument {lvl=3 id=s-exchange label="SDE-2"}

Seeing a rule succeed on examples is not a proof. The standard tool is the **exchange argument**, in three moves:

1. Take **any** best schedule. Call it $S$. Suppose its first meeting is $X$, while greedy's first meeting is $G$, the one that finishes earliest.
2. **Swap** $X$ for $G$ in $S$. Because $G$ ends no later than $X$ does, $G$ cannot collide with the second meeting of $S$ either. So the new schedule is still valid and has the same number of meetings.
3. So some best schedule starts with $G$. What is left is the same problem on the meetings after $G$ ends, and the same argument applies again.

Read it as: no choice made by a clever planner can beat greedy, because each of their choices can be swapped for greedy's without losing anything.

This proof pattern works for many greedy problems, each time with a different "swap". If you cannot find a swap, treat that as a warning.

## Greedy needs proof: the knapsack pair {lvl=3 id=s-knap label="SDE-2"}

A thief has a bag that holds 50 kg and three items: A (10 kg, worth 60), B (20 kg, worth 100), C (30 kg, worth 120). The sensible rule is **most value per kilo first**: A is 6 per kg, B is 5, C is 4.

- If the thief can take **part** of an item (gold dust), greedy takes A, B and two thirds of C: $60 + 100 + 80 = 240$. This is optimal.
- If items are **all or nothing** (televisions), greedy takes A and B for 160 and has 20 kg left, which fits nothing. But B and C together weigh 50 and are worth 220. Greedy loses.

Same rule, same numbers, two different problems, two different verdicts. The difference is in the choice: when pieces can be cut, a bad fit never wastes space; when they cannot, it does. The all-or-nothing version needs the next lesson.

| Problem | Greedy rule | Proof idea |
|---|---|---|
| One-room meetings | earliest finish first | exchange: swap in the earliest finisher |
| Minimum rooms for all meetings | sort by start, reuse a room when one frees up (a heap of end times) | a new room is added only when all are busy |
| Minimum spanning tree (Kruskal) | cheapest edge that does not make a loop | exchange: swap an edge in a cheaper cycle |
| Shortest path, no negative roads (Dijkstra) | settle the nearest unvisited place | nearer places cannot be improved by detours |
| Fractional knapsack | best value per kilo first | exchange: swap in more of the better item |
| Fewest coins | biggest coin first, **only for some coin sets** | proof depends on the coin set |

:::qc lvl=3
q: All-or-nothing knapsack, capacity 50: A (10 kg, 60), B (20 kg, 100), C (30 kg, 120). Which is optimal?
options: ["B and C: 220", "A and B: 160", "A and C: 180"]
answer: 0
right: Right. B and C weigh exactly 50 kg and are worth 220. The A and C pair is 40 kg and 180, the A and B pair is 30 kg and 160, and all three weigh 60 kg, too heavy.
wrong: List the pairs that fit in 50 kg: A+B = 30 kg, A+C = 40 kg, B+C = 50 kg. Which is worth most?
:::

## Huffman coding {lvl=3 id=s-huffman label="SDE-2"}

Computers store letters as fixed-length codes, say 3 bits each for up to 8 letters. But in real text some letters are common. Give common letters **short** codes and rare ones **long** codes, and the file shrinks. The catch is that no code may be the start of another, or we could not tell where one letter ends.

Huffman found the best such code with a greedy rule: **repeatedly merge the two rarest items into one combined item whose frequency is the sum**. Items merged first end up deepest in the tree, which means longest codes.

Take five letters with frequencies per 100 letters: A 40, B 30, C 15, D 10, E 5.

1. Merge E (5) and D (10) into a node of 15.
2. Merge C (15) and the DE node (15) into 30.
3. Merge B (30) and the CDE node (30) into 60.
4. Merge A (40) and the 60 node into 100.

Depths in the tree: A has 1, B 2, C 3, D 4 and E 4. The cost is $\sum f_i d_i$:

$$40\cdot 1 + 30\cdot 2 + 15\cdot 3 + 10\cdot 4 + 5\cdot 4 = 205 \text{ bits}$$

per 100 letters, against 300 for a plain 3-bit code. Read it as: each letter's frequency times the length of its code, added up.

```python
import heapq
def huffman_cost(freqs):
    heap = list(freqs)
    heapq.heapify(heap)
    total = 0
    while len(heap) > 1:
        a = heapq.heappop(heap)       # the two rarest
        b = heapq.heappop(heap)
        total += a + b                # each merge adds a level to everything under it
        heapq.heappush(heap, a + b)
    return total
```

The total here equals $\sum f_i d_i$ because each merge adds one bit of depth to every letter beneath it, and that adds the merged frequency to the cost. The heap gives each "two smallest" in $O(\log n)$, so the whole method is $O(n\log n)$. (ZIP-style tools combine Huffman-style coding with other steps; the exact formats differ. [Inference])

## When greedy is not exact, and why it still matters {lvl=4 id=s-limits label="SDE-3"}

**Matroids**: for a family of problems that includes minimum spanning trees, there is a theory, called matroid theory, that says exactly when greedy is optimal. You rarely need its details, but it explains why greedy is guaranteed for some structures and hopeless for others. [Unverified: stated from memory]

**Greedy as an approximation.** For many hard problems, no fast exact method is known, but greedy gives an answer provably not too far from the best. Choosing the fewest locations to cover all customers (set cover) is the classic example: greedy picks the location covering the most still-uncovered customers and is guaranteed to use at most about $\ln n$ times more locations than needed. [Unverified: bound from memory]

**Greedy in systems.** Load balancers that send a request to the least-loaded server, caches that evict the least recently used item, and schedulers that run the shortest job first are greedy rules. They are chosen because they are cheap and reasonable under uncertainty about the future, not because they are proven optimal. In design reviews, say which: "exact", "provably within a factor", or "a heuristic that works in practice".

**Online versus offline.** The exchange argument assumes you can see all meetings up front. When requests arrive one at a time and you must decide at once, greedy rules lose their guarantees and you compare against the best you could have done in hindsight. That is a different question, and the answer is usually a worse guarantee.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A greedy algorithm takes the best-looking choice now and never undoes it. {lvl=1}
2. Greedy can fail: coins 1, 3, 4 and amount 6 give 3 coins when 2 would do. {lvl=1}
3. One-room meetings: sort by finish time, take every meeting that fits. {lvl=2}
4. Sensible rules like "shortest first" and "earliest start" fail on small counter-examples. {lvl=2}
5. The exchange argument proves greedy: swap the greedy choice into any best answer without loss. {lvl=3}
6. Fractional knapsack is greedy; all-or-nothing knapsack is not. {lvl=3}
7. Huffman coding merges the two rarest items repeatedly, giving short codes to common letters. {lvl=3}
8. Where greedy is not exact it can still be a useful approximation or heuristic. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A rule that sounds right is not a proof. Always try small counter-examples, such as 3 or 4 items. {lvl=1}
- Greedy for coins depends on the coin set. It is right for many real currencies and wrong for 1, 3, 4. {lvl=1}
- Sort first. Almost every greedy method is "sort by the right key, then one pass". Choosing the key is the whole problem. {lvl=2}
- Ties need care. With the finish-time rule, a meeting that starts exactly when another ends is allowed, so use `>=`. {lvl=2}
- All-or-nothing items (0/1 knapsack, partition) are usually not greedy. Reach for dynamic programming. {lvl=3}
- In interviews, say your rule, test it on a counter-example and sketch the exchange argument. {lvl=3}
:::
