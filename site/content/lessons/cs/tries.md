---
title: Tries
summary: How a search box shows suggestions after every letter you type, by walking down a tree of letters instead of searching a list.
ncert: []
up_to: SDE-2
builds_on: [Hash tables, Trees and binary search trees, Heaps and priority queues]
notes_prompt: Explain to a friend how a phone can suggest "banana" the moment you type "ban", without reading through every word it knows.
margin:
  - kind: history
    title: History
    text: René de la Briandais described the idea in 1959 and Edward Fredkin named it "trie", from re-trie-val, in 1960 [Unverified dates]. It is usually pronounced "try".
  - kind: tip
    title: Interview favourite
    text: '"Starts with", "longest common prefix", "word dictionary with wildcards" and "maximum XOR of two numbers" are trie problems. The last one uses a trie over the bits of the numbers.'
  - kind: olympiad
    title: Design link
    text: 'Internet routers pick where to send a packet by matching the longest known address prefix: a trie over bits. Search engines also keep word lists in compact trie-like automata [Unverified detail].'
books:
  - { title: "R. Sedgewick and K. Wayne, Algorithms", ref: "Ch. 5.2 Tries [Unverified]" }
  - { title: "D. Gusfield, Algorithms on Strings, Trees, and Sequences", ref: "Suffix trees and tries (for the deeper theory) [Unverified]" }
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Problem on radix trees in the chapter on binary search trees [Unverified]" }
cards:
  - { front: "What is a trie?", back: "A tree where each edge is a letter, so each path from the top spells a prefix. Words that share a beginning share the same path." }
  - { front: "Cost of looking up a word of length m in a trie?", back: "O(m): one step per letter, no matter how many words are stored. It does not depend on n." }
  - { front: "What question is a trie good at that a hash table is not?", back: "'Everything that starts with these letters?' A hash table only answers exact matches; a trie walks to the prefix and reads off what lies below." }
  - { front: "Why does a trie need a 'word ends here' flag?", back: "Because 'ban' is a path inside 'bank'. The flag tells you which stopping points are real words and which are just prefixes." }
  - { front: "Main weakness of a trie?", back: "Memory: every letter can cost a whole node with room for many children. Compressed tries and compact arrays reduce this." }
  - { front: "What is a compressed (radix) trie?", back: "A trie where a chain of nodes with one child each is merged into one edge labelled with a whole string, so the number of nodes is at most about twice the number of words." }
core:
  idea: 'A trie stores words as paths in a tree of letters, so words with the same beginning share the same path. Finding a word, or finding everything that starts with some letters, takes one step per letter, independent of how many words are stored.'
  formulas:
    - tex: 'T_{\text{lookup}} = O(m)'
      label: 'm is the length of the word, not the number of words'
    - tex: '\text{nodes} \le \text{total letters stored} + 1'
      label: 'Memory upper bound (sharing makes it smaller)'
  conditions:
    - 'The keys are strings or sequences (letters, digits, bits) that can be read one symbol at a time'
    - 'Many keys share beginnings, so sharing a path saves space and work'
    - 'Prefix questions matter; for plain exact lookup a hash table is usually simpler'
    - 'There is enough memory for the nodes, or a compressed form is used'
  sign: 'Do not forget the end-of-word flag. Without it you cannot tell that "ban" is a word when "bank" is also stored; the commonest bug is returning true for a mere prefix.'
outcomes:
  - 'Explain why scanning, sorting and hashing each fall short for "starts with" questions'
  - 'Draw a trie for a few words and mark where words end'
  - 'Write insert, search and prefix lookup, and an autocomplete that lists matches'
  - 'Estimate the memory of a trie and explain how compressed tries cut it'
  - 'Recognise trie problems: prefix counting, wildcard search, longest common prefix, maximum XOR'
opener:
  story: |
    You open a shopping app and type **b**. A list drops down: *bag, bottle, bluetooth speaker...* You type **a**, and the list changes to *backpack, badminton racket, banana chips...* After each letter, the suggestions change in the blink of an eye.

    The app knows millions of phrases. It can't read through all of them after each key press, and you aren't typing whole words, so it can't just look up a word either. It is answering a strange question: **which phrases begin with exactly these letters?**

    A hash table is useless here, since "ba" is not a stored word and hashing scatters neighbours far apart. What shape of storage makes "begins with ba" an easy question?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A phone search box showing ba, and a tree of letters leading to suggestions"><rect x="14" y="22" width="110" height="196" rx="16" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="26" y="40" width="86" height="22" rx="11" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="38" y="55" style="font-size:12px;fill:var(--ink)">ba|</text><g style="font-size:11px;fill:var(--ink)"><text x="30" y="86">bag</text><text x="30" y="106">banana</text><text x="30" y="126">bangle</text><text x="30" y="146">bat</text></g><g style="stroke:var(--c);stroke-width:2;fill:none"><line x1="124" y1="52" x2="196" y2="52"/><line x1="214" y1="64" x2="214" y2="92"/><line x1="214" y1="116" x2="188" y2="152"/><line x1="214" y1="116" x2="240" y2="152"/><line x1="214" y1="116" x2="292" y2="152"/></g><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><circle cx="214" cy="52" r="14"/><circle cx="214" cy="104" r="14"/><circle cx="188" cy="164" r="12"/><circle cx="240" cy="164" r="12"/><circle cx="292" cy="164" r="12"/></g><g style="font-size:12px;fill:var(--ink)" text-anchor="middle"><text x="214" y="56">b</text><text x="214" y="108">a</text><text x="188" y="168">g</text><text x="240" y="168">n</text><text x="292" y="168">t</text></g><text x="150" y="214" style="font-size:11px;fill:var(--muted)">two steps, then read below</text></svg>'
life:
  - 'Search-box suggestions in shopping, maps and messaging apps are prefix lookups [Inference: how any one company builds them is not public].'
  - 'A phone''s keyboard predicts the next word and completes the one you are typing from a stored vocabulary.'
  - 'Internet routers match the longest known address prefix to choose the next hop; the lookup is a trie over the address bits.'
  - 'Spell checkers and word-game helpers (Scrabble, Wordle solvers) use word lists stored so that "does any word start like this?" can prune a search early.'
  - 'Phone-number prefixes (country code, then area code) work like a trie: each leading digit narrows where the call goes.'
models:
  - name: 'Share the common part'
    text: 'Words that start the same way share one path, so common beginnings are stored and walked only once. Look for shared prefixes everywhere: file paths, web addresses, phone numbers, street addresses. Storing the common part once is both a saving and a speed-up.'
  - name: 'Narrow down one symbol at a time'
    text: 'Each letter you type throws away every phrase that does not match, like the game of twenty questions. Good interfaces, good interviews and good diagnoses all shrink the possibilities step by step.'
  - name: 'Speed can cost memory'
    text: 'A trie is very fast for prefixes but can use much more space than a sorted list. When something is fast, ask what it is paying for it with; then decide whether you have that resource to spare.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'Both find a word in a number of steps that does not depend on how many words are stored (a trie takes one step per letter).'
    differs: 'A hash table scatters keys, so it answers only exact matches; a trie keeps neighbours with the same beginning together, so prefix questions are easy.'
  - leaf: 'cs/trees'
    name: 'Trees and binary search trees'
    same: 'A trie is a tree: one top node, and every other node reached from exactly one parent.'
    differs: 'A binary search tree compares whole keys and each node has at most two children; a trie spends one letter per level and a node can have as many children as there are letters.'
  - leaf: 'cs/searching-and-binary-search'
    name: 'Searching and binary search'
    same: 'Both avoid reading every item and shrink the possibilities step by step.'
    differs: 'Binary search on a sorted list of n phrases takes about log₂ n comparisons of whole phrases (about 24 for ten million); a trie takes one step per letter typed.'
  - leaf: 'cs/bits-and-binary'
    name: 'Bits and binary'
    same: 'A trie need not use letters: use bits as the symbols and it indexes numbers, which is how routers match address prefixes.'
    differs: 'With only two symbols each node has two children, so the tree is deeper but each node is tiny.'
next:
  q: 'A trie is a tree, where every item has exactly one parent and there are no loops. But a road map, a friendship network or a list of "this needs that first" tasks has things connected in loops and in many directions. What shape of data holds those?'
  leaf: 'cs/graphs'
  name: 'Graphs and their representations'
symbols:
  - s: 'm'
    means: 'length of the word or prefix you are looking up (number of letters)'
  - s: 'n'
    means: 'number of words stored (count)'
  - s: 'O(m)'
    means: 'cost grows with the length of the word, not with how many words are stored'
  - s: 'node'
    means: 'one box in the tree; it stands for a prefix, and has up to one child per possible next letter'
  - s: 'end flag'
    means: 'a yes/no mark on a node meaning "a stored word ends exactly here"'
  - s: 'prefix'
    means: 'the first few letters of a word, like "ban" in "bank"'
---

:::hook
q: A shopping app has ten million saved phrases and you have typed "ban". With a trie, about how many steps does it take to reach the place where all matching phrases begin?
options: ["About 10 million, it checks every phrase", "About 24, like binary search", "3, one step for each letter typed"]
answer: 2
right: Right. A trie follows one branch per letter, so "ban" takes three steps whether there are ten thousand phrases or ten million. Then it reads off the matches below. (How a real shop builds its suggestions is not public. [Inference])
wrong: Checking everything is far too slow. Binary search on a sorted list is better (about 24 comparisons of whole phrases), but a trie does even less: it only reads the letters you typed.
:::

## The problem {lvl=1 id=s-problem label="Foundations"}

You have a list of ten million phrases and you want all that **start with** "ban". What can we do with the tools we know?

- **Scan the list:** check each phrase's beginning. Ten million checks per key press. Too slow.
- **Hash table:** it turns a *whole* word into an address. "ban" is not a stored word, and "bank" and "banana" land in unrelated slots. A hash table cannot tell you about "starts with".
- **Sorted list and binary search:** this does work. Phrases starting with "ban" sit next to each other, so you find the first one in about 24 comparisons ($2^{24} \approx 16.8$ million) and walk forward. It is decent, but each comparison reads parts of whole phrases.

Can we do something simpler, where the question "what starts with ban?" is answered just by *following the letters*?

## A tree of letters {lvl=1 id=s-tree label="Foundations"}

Think of a signpost that asks one question at a time: "first letter?", then "second letter?", and so on. Each answer sends you down one branch. After you have answered "b", "a", "n", you stand at a spot that stands for **ban**, and every phrase that begins with ban hangs below you.

That is a **trie** (say "try"). It is a tree where each branch is labelled with a letter, and following branches from the top spells a **prefix**: the first few letters of a word. Words that begin the same way **share** the same path.

:::figure caption="A trie holding ban, bank, bat and cat. Filled circles mark where a word ends. 'ban' and 'bank' share the whole path b-a-n; 'bat' branches off after b-a."
<svg viewBox="0 0 320 230" role="img" aria-label="A tree with a top node, branches b and c, then a under each, then n and t under the first a and t under the second, then k under n">
<g class="pen" style="stroke:var(--ink);stroke-width:1.5;fill:none">
<line x1="160" y1="34" x2="95" y2="72"/><line x1="160" y1="34" x2="235" y2="72"/>
<line x1="95" y1="90" x2="95" y2="120"/><line x1="235" y1="90" x2="235" y2="120"/>
<line x1="95" y1="138" x2="55" y2="170"/><line x1="95" y1="138" x2="135" y2="170"/>
<line x1="235" y1="138" x2="235" y2="170"/>
<line x1="55" y1="188" x2="55" y2="208"/>
</g>
<g style="font-size:13px;fill:var(--ink);text-anchor:middle">
<circle cx="160" cy="26" r="9" style="fill:var(--surface);stroke:var(--ink)"/>
<circle cx="95" cy="80" r="14" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="95" y="85">b</text>
<circle cx="235" cy="80" r="14" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="235" y="85">c</text>
<circle cx="95" cy="130" r="14" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="95" y="135">a</text>
<circle cx="235" cy="130" r="14" style="fill:color-mix(in srgb,var(--mat) 14%,var(--surface));stroke:var(--mat)"/><text x="235" y="135">a</text>
<circle cx="55" cy="180" r="14" style="fill:var(--mat);stroke:var(--ink)"/><text x="55" y="185" style="fill:var(--surface)">n</text>
<circle cx="135" cy="180" r="14" style="fill:var(--mat);stroke:var(--ink)"/><text x="135" y="185" style="fill:var(--surface)">t</text>
<circle cx="235" cy="180" r="14" style="fill:var(--mat);stroke:var(--ink)"/><text x="235" y="185" style="fill:var(--surface)">t</text>
<circle cx="55" cy="218" r="9" style="fill:var(--mat);stroke:var(--ink)"/>
</g>
<g style="font-size:11px;fill:var(--muted)"><text x="70" y="222">k</text><text x="262" y="184">cat</text></g>
</svg>
:::

Two things to notice. First, the **top node** stands for "nothing typed yet". Second, a word ending is not the same as the branch ending: "ban" is a word *and* a stepping stone to "bank". So each node carries an **end flag**, a yes/no mark meaning "a stored word finishes here".

:::qc lvl=1
q: Using the figure, which phrases begin with "ba"?
options: ["ban, bank, bat", "bat and cat", "ban only"]
answer: 0
right: Right. Walk b then a, and everything hanging below that node starts with "ba": ban, bank and bat.
wrong: Follow the branches b, then a. Everything that hangs below that point shares those two letters.
:::

## Insert, search, prefix {lvl=2 id=s-code label="SDE-1"}

A node needs just two things: its children (a dictionary from letter to child node) and the end flag.

```python
class Node:
    def __init__(self):
        self.kids = {}     # letter -> Node
        self.end = False   # does a word finish here?

def insert(root, word):
    node = root
    for ch in word:
        node = node.kids.setdefault(ch, Node())
    node.end = True
```

To insert, walk down; wherever a branch is missing, create it; mark the last node. A word of length $m$ costs $O(m)$.

Lookup uses one helper that walks the letters and gives back the node you land on, or nothing.

```python
def walk(root, text):
    node = root
    for ch in text:
        node = node.kids.get(ch)
        if node is None:
            return None
    return node

def has_word(root, w):
    node = walk(root, w)
    return node is not None and node.end

def has_prefix(root, p):
    return walk(root, p) is not None
```

The only difference between "is it a word?" and "does anything start like this?" is the end flag. Both are $O(m)$: one step per letter, and the number of stored words never enters.

:::qc lvl=2
q: A trie holds the single word "bank". What do has_word("ban") and has_prefix("ban") return?
options: ["False and True", "True and True", "False and False"]
answer: 0
right: Right. The path b-a-n exists, so it is a prefix, but no word ends at n, so it is not a stored word.
wrong: Does the node for "ban" have its end flag set? And does the path to it exist?
:::

## Autocomplete {lvl=2 id=s-auto label="SDE-1"}

To list the suggestions for a prefix: walk to the prefix's node (cost $O(m)$), then visit everything below it and collect each node whose end flag is set.

```python
def complete(root, prefix, limit=5):
    start, out = walk(root, prefix), []
    def visit(node, path):
        if len(out) >= limit:
            return
        if node.end:
            out.append(path)
        for ch in sorted(node.kids):
            visit(node.kids[ch], path + ch)
    if start:
        visit(start, prefix)
    return out
```

This gives matches in alphabetical order. A real search box wants the **most popular** ones first. A simple way is to store a count at each word's end, and at each node keep the top few counts of its subtree, updated on insert. Then the suggestions are ready the moment you arrive at the node: no walk below it. This is a trade of extra memory for speed, the same trade as in a hash table. (Heaps from the previous lesson help when you must choose the best $k$ of many candidates.)

Counting is also easy: keep in each node the number of words that pass through it, and "how many words start with ban?" is a single lookup at the node.

:::qc lvl=2
q: You keep, at every node, a count of how many stored words pass through it. How do you answer "how many words start with 'ban'" fast?
options: ["Walk to the node for 'ban' and read its count", "Walk to every word and test its beginning", "Sort all the words first"]
answer: 0
right: Right. The count stored at the 'ban' node already summarises everything below it, so the answer costs O(m) with m = 3.
wrong: What would a node's count already tell you about everything hanging beneath it?
:::

## What a trie costs in memory {lvl=3 id=s-memory label="SDE-2"}

A trie is quick, but how big is it? In the worst case no two words share anything, so there is one node per letter: at most the total number of letters stored, plus the top node. Sharing makes it smaller, but only when words really overlap.

The bigger worry is **how much each node costs**. If a node holds an array with a slot for each of 26 letters, each slot a pointer of 8 bytes, that is $26 \times 8 = 208$ bytes per node, mostly empty slots. A million nodes already cost about 208 MB. A Python object with a dictionary per node costs even more (the exact amount depends on the Python version [Unverified]).

So there is a trade-off in how a node stores its children:

| Child storage | Memory | Speed to pick a child | When |
|---|---|---|---|
| Array of 26 slots | Large (208 bytes per node) | Fastest: index by letter | Small alphabet, dense nodes |
| Dictionary per node | Medium to large | Fast, average $O(1)$ | General, easy to write |
| Sorted list of (letter, child) | Small | Binary search over a few items | Sparse nodes, many near the bottom |

Most nodes deep in a trie have a single child. We can exploit that.

## Compressed tries {lvl=3 id=s-compressed label="SDE-2"}

If a node has only one child and is not a word end, it adds nothing except a hop. A **compressed trie** (also called a **radix tree** or Patricia trie) merges such a chain into **one edge labelled with a whole string**. For the words *romane, romanus, romulus* the long shared stem "rom" becomes a single edge, instead of three nodes.

Now every internal node has at least two children (or marks a word end), which gives a clean bound: for $n$ words the tree has at most about $2n$ nodes, **independent of how long the words are**. The edge labels can be stored as (start, end) positions into the original strings, so no letters are copied. Lookups still cost $O(m)$ letter comparisons, but with far fewer pointer hops and far less memory.

Going further, **word lists can be stored as automata** that share *endings* as well as beginnings, shrinking a dictionary to a small fraction of its trie size. Search libraries do this for term lists [Unverified detail]. The principle is the same: share whatever repeats.

## Where the idea shows up {lvl=3 id=s-patterns label="SDE-2"}

A trie is a good answer when the **signal** is a prefix, or a sequence you can read one symbol at a time.

| Variant | Signal in the problem | Change to the template |
|---|---|---|
| Prefix count / existence | "how many words start with...", "does any word start with..." | Store a pass-through count at each node |
| Wildcard search | a dot or star stands for any one letter | At a wildcard, try every child (recursion), otherwise follow one |
| Longest common prefix | "common beginning of all words" | Walk down while the node has exactly one child and no word ends |
| Word break or word search on a grid | "can this path of letters form a dictionary word?" | Walk the trie along with the search and stop as soon as no child matches |
| Binary trie (XOR) | "maximum XOR of two numbers", "address matching" | Symbols are bits; to maximise XOR, at each bit prefer the child with the opposite bit |

For the XOR family, each number is inserted as 32 bits from the top bit down. To find the partner giving the largest XOR with $x$, at each bit you try to take the branch whose bit differs from $x$'s bit. That costs 32 steps per number, so $O(32 n)$ overall instead of comparing all pairs at $O(n^2)$.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A trie stores words as paths in a tree of letters; words with a common beginning share a path. {lvl=1}
2. Lookup, insert and prefix search cost O(m), one step per letter, whatever the number of words. {lvl=1}
3. A node needs an end flag, because a word can be a prefix of another word ("ban" in "bank"). {lvl=2}
4. Autocomplete is: walk to the prefix node, then collect the words below it; counts stored at nodes give the most popular ones fast. {lvl=2}
5. The cost is memory: a 26-slot array per node is 208 bytes; choose children storage to match the data. {lvl=3}
6. A compressed (radix) trie merges single-child chains and has at most about 2n nodes. {lvl=3}
7. Binary tries over the bits of numbers solve maximum-XOR and prefix-routing problems. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Forgetting the end flag, and so treating every prefix as a stored word (or the other way round). {lvl=1}
- A trie is overkill for plain "is this exact word stored?"; a hash set is simpler and often smaller. {lvl=2}
- Sorting is not free: the suggestions come out in alphabetical order unless you store popularity. {lvl=2}
- Estimating memory by the number of words instead of the number of nodes. Many short or unrelated words give nearly one node per letter. {lvl=3}
- In wildcard search, a dot makes you try every child: the cost can grow with the size of the trie, not just with m. {lvl=3}
- Deleting a word: remove the end flag, then prune nodes that are left with no children and no flag, walking back up. {lvl=3}
:::
