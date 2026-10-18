---
title: String hashing, KMP and Z
summary: How Ctrl+F finds a word in a million-word document without re-reading it at every position, and the five tools behind most string problems.
ncert: []
up_to: SDE-3
builds_on: [Hash tables, Tries, Two pointers and sliding window, Modular arithmetic and sieves]
notes_prompt: Explain to a friend how a program can compare two long pieces of text by comparing just two numbers, and what can go wrong.
margin:
  - kind: history
    title: History
    text: Knuth, Morris and Pratt published their linear-time search in 1977, and Rabin and Karp their hashing method around 1987. Both were answers to the same slowness you will see in the hook. [Unverified]
  - kind: tip
    title: Contest favourite
    text: 'If a statement says "prefix that is also a suffix", "period of a string" or "how many times does each prefix occur", reach for the prefix function. If it says "compare many substrings", reach for hashing.'
  - kind: olympiad
    title: Biology link
    text: 'Searching a genome of three billion letters for a short sequence is this problem with a four-letter alphabet. Real tools build suffix indexes so that each search is fast.'
books:
  - { title: "T. H. Cormen et al., Introduction to Algorithms", ref: "Ch. 32 String Matching [Unverified]" }
  - { title: "A. Laaksonen, Competitive Programmer's Handbook", ref: "String algorithms chapters [Unverified]" }
cards:
  - { front: "Why is naive substring search slow?", back: "At each of n starting positions it may compare up to m letters, so O(n times m), and it throws away what each failed attempt just learned." }
  - { front: "What does a rolling hash let you do?", back: "Compare any two substrings of a text in O(1) after O(n) preprocessing, by comparing two numbers. A match might be a rare false alarm, so choose a big modulus and a random base." }
  - { front: "What is the prefix function value pi[i]?", back: "The length of the longest proper prefix of s[0..i] that is also a suffix of it. It lets a failed match fall back without re-reading text." }
  - { front: "How do you get the smallest period of a string of length n?", back: "n minus pi[n-1]. The string is made of whole repeats of that unit exactly when the period divides n." }
  - { front: "What does z[i] mean?", back: "The length of the longest common prefix of the whole string and the suffix starting at i. A pattern matches at position i of text when the Z-value of pattern + separator + text there equals the pattern length." }
  - { front: "When do you reach for a trie?", back: "When the question is about prefixes: how many words start with this, autocomplete, or longest shared prefix. Cost is O(length of the word), independent of the dictionary size." }
core:
  idea: 'String problems become linear when you never re-read letters: a prefix function or Z array turns a failed match into a jump, a rolling hash turns a substring into one number you can compare in O(1), and a trie shares common prefixes.'
  formulas:
    - tex: '\text{hash}(s[l:r]) = \big(h_r - h_l \cdot B^{\,r-l}\big) \bmod M'
      label: 'Hash of any slice from prefix hashes (base B, modulus M)'
    - tex: '\text{period} = n - \pi[n-1]'
      label: 'Smallest repeating unit from the prefix function'
    - tex: 'z[i] = \text{length of longest common prefix of } s \text{ and } s[i:]'
      label: 'Z-function: how far the string matches itself, shifted by i'
  conditions:
    - 'Hashing is probabilistic: use a large modulus (such as 2^61 - 1) and a random base, otherwise a crafted input breaks it'
    - 'KMP and Z are exact and take O(n + m); they need no randomness'
    - 'A separator character not in the alphabet keeps pattern and text from merging when you concatenate them'
    - 'Tries use memory proportional to the total letters stored, which can be large'
  sign: 'The commonest mistake is an off-by-one in slice boundaries (half-open or closed) when using prefix hashes; decide once and write it in a comment.'
outcomes:
  - 'Use frequency counts and two pointers to solve anagram and window problems in one pass'
  - 'Compare any two substrings in O(1) with a rolling hash, and explain the collision risk'
  - 'Write the prefix function and use it for search, borders and periods'
  - 'Write the Z-function and know when it replaces the prefix function'
  - 'Choose between hashing, KMP, Z, Manacher and a trie from the wording of a problem'
opener:
  story: |
    You press **Ctrl+F** in a thousand-page PDF, type a word, and the first match lights up before you finish blinking. Every pass of the text looks at roughly a million words. Yet it feels instant.

    Now think about how *you* would do it by hand. Slide the word along the text one letter at a time, and at each position compare letter by letter. Usually you fail on the first letter and move on. But there is a nasty case: a text that is all **a**s, searching for "aaaaab". At every position you match five letters and fail on the last.

    Spoiler: a clever program does not step back at all. When a match fails, it already knows what the last few letters were, and uses that to jump forward. Before we see how, how bad can the naive way get?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A pattern slides along a row of letters; the naive method restarts after each failure, a smarter one keeps what it learned"><g style="font-size:13px;fill:var(--ink)"><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"><rect x="20" y="40" width="28" height="28"/><rect x="48" y="40" width="28" height="28"/><rect x="76" y="40" width="28" height="28"/><rect x="104" y="40" width="28" height="28"/><rect x="132" y="40" width="28" height="28"/><rect x="160" y="40" width="28" height="28"/><rect x="188" y="40" width="28" height="28"/><rect x="216" y="40" width="28" height="28"/><rect x="244" y="40" width="28" height="28"/></g><text x="30" y="60">a</text><text x="58" y="60">a</text><text x="86" y="60">a</text><text x="114" y="60">a</text><text x="142" y="60">a</text><text x="170" y="60">a</text><text x="198" y="60">a</text><text x="226" y="60">a</text><text x="254" y="60">a</text><text x="20" y="30" style="font-size:11px;fill:var(--muted)">text</text><g style="fill:none;stroke:var(--c);stroke-width:1.5"><rect x="20" y="96" width="28" height="28"/><rect x="48" y="96" width="28" height="28"/><rect x="76" y="96" width="28" height="28"/><rect x="104" y="96" width="28" height="28" style="stroke:var(--bad)"/></g><text x="30" y="116">a</text><text x="58" y="116">a</text><text x="86" y="116">a</text><text x="114" y="116" style="fill:var(--bad)">b</text><text x="140" y="116" style="font-size:11px;fill:var(--muted)">fail on the last letter</text><g style="fill:none;stroke:var(--c);stroke-width:1.5;stroke-dasharray:3 3"><rect x="48" y="140" width="28" height="28"/><rect x="76" y="140" width="28" height="28"/><rect x="104" y="140" width="28" height="28"/><rect x="132" y="140" width="28" height="28" style="stroke:var(--bad)"/></g><text x="58" y="160">a</text><text x="86" y="160">a</text><text x="114" y="160">a</text><text x="142" y="160" style="fill:var(--bad)">b</text><text x="170" y="160" style="font-size:11px;fill:var(--muted)">slide by one, start over</text><text x="20" y="206" style="font-size:12px;fill:var(--c)">text n letters, pattern m letters</text><text x="20" y="224" style="font-size:12px;fill:var(--c)">naive cost: about n times m</text></g></svg>'
life:
  - 'Ctrl+F in a browser, editor or PDF reader, and the grep command on a server log.'
  - 'Plagiarism checkers compare hashes of many short chunks of two documents to spot copied passages.'
  - 'Autocomplete and spell-check on your phone keyboard walk a trie of words one letter at a time.'
  - 'DNA search in biology: finding a short gene sequence among billions of letters.'
  - 'File-sync tools (and Git) tell whether a file changed by comparing a hash, not the whole content.'
models:
  - name: 'Do not forget what you just learned'
    text: 'A failed match is information. KMP and Z both turn it into a jump. In studying, in debugging, in negotiation: when an attempt fails, ask what it just revealed, so the next attempt starts further ahead.'
  - name: 'Fingerprint instead of full comparison'
    text: 'You can tell two huge things apart by comparing small fingerprints, accepting a tiny chance of error. Checksums, signatures and passport photos all rely on this. Make the error chance small enough to ignore, and add a second check when stakes are high.'
  - name: 'Share the common start'
    text: 'A trie stores "car", "card" and "care" with one path for "car". Sharing common beginnings saves space and answers prefix questions at once, the way a library groups all books of one subject on one shelf.'
links:
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'A rolling hash turns a piece of text into a number, exactly as a table hashes a key to a slot.'
    differs: 'A table hash only needs to spread keys evenly; a rolling hash must also update in O(1) when the window slides, which forces the polynomial form.'
  - leaf: 'cs/tries'
    name: 'Tries'
    same: 'The trie here is the same structure, used for prefix counts.'
    differs: 'The tries lesson builds the idea from autocomplete; here it joins a toolbox with KMP and hashing.'
  - leaf: 'cs/two-pointers-and-sliding-window'
    name: 'Two pointers and sliding window'
    same: 'Windows over a string use the same grow-and-shrink pointers, with letter counts as the state.'
    differs: 'Pattern search needs pointers that never move back, which KMP achieves by a precomputed jump table.'
  - leaf: 'cs/cp-number-theory'
    name: 'Modular arithmetic and sieves'
    same: 'A rolling hash is arithmetic modulo a big prime, with the same reduce-after-every-step habit.'
    differs: 'Here the modulus protects against collisions, not overflow alone.'
next:
  q: 'A text of a million letters is now easy. But what about a list of a million numbers where values keep changing and you must answer "what is the sum from position 300 to 70000" a million times? Rescanning each time is far too slow.'
  leaf: 'cs/cp-range-queries'
  name: 'Segment trees and Fenwick trees'
symbols:
  - s: 'n'
    means: 'length of the text (count of letters)'
  - s: 'm'
    means: 'length of the pattern (count of letters)'
  - s: 's[l:r]'
    means: 'the slice from position l up to but not including r (Python style)'
  - s: 'B'
    means: 'hash base: a number chosen at random, so crafted inputs cannot break the hash'
  - s: 'M'
    means: 'hash modulus: a big prime such as 2^61 - 1'
  - s: '\pi[i]'
    means: 'prefix function at i: length of the longest proper prefix of s[0..i] that is also its suffix'
  - s: 'z[i]'
    means: 'Z value at i: how many letters from i match the beginning of the string'
---

:::hook
q: Here is the puzzle. The text is a million letters, all "a". The pattern is a thousand "a"s followed by one "b". Roughly how many letter comparisons does the naive sliding method make?
options: ["About a million", "About a billion", "About a thousand"]
answer: 1
right: Right. There are about a million starting positions, and at each one it compares about a thousand letters before failing on the "b". That is a million times a thousand, a billion comparisons, for a job a linear method does in about a million steps.
wrong: Count the starting positions (about a million) and how many letters are compared at each (about a thousand). The two multiply.
:::

## Counting letters {lvl=1 id=s-count label="Foundations"}

Are "listen" and "silent" anagrams? Sorting both works, but a faster way is to **count** each letter. Two words are anagrams exactly when every letter occurs the same number of times. Store the counts in a small table, one cell per letter, and compare the tables. This "frequency count" is the simplest string tool and the first one to try whenever order does not matter.

```python
from collections import Counter

def is_anagram(a, b):
    return Counter(a) == Counter(b)       # O(n), no sorting

print(is_anagram("listen", "silent"))     # True
```

With 26 lower-case letters a plain list of 26 integers is faster than a `Counter`; the idea is the same.

:::qc lvl=1
q: You want to know whether a word can be built from the letters of a magazine headline. Which tool fits?
options: ["Frequency counts of both, check every letter's count is at least as large", "Sorting the headline", "Trying all rearrangements"]
answer: 0
right: Right. Rearranging is free, so only the counts matter.
wrong: Order does not matter here, only how many of each letter. What stores that?
:::

## Two pointers on a string {lvl=2 id=s-pointers label="SDE-1"}

**Two pointers** means keeping a left and a right position that only move forward, so the total work is $O(n)$ even though they cover many windows. Two shapes recur on strings:

- **Window**: grow the right end; when the window breaks a rule (a repeated letter), shrink from the left until it is valid again. For "the longest stretch with no repeated letter" keep the last position of each letter:

```python
def longest_distinct(s):
    last, left, best = {}, 0, 0
    for right, ch in enumerate(s):
        if ch in last and last[ch] >= left:
            left = last[ch] + 1          # jump past the repeat
        last[ch] = right
        best = max(best, right - left + 1)
    return best
```

- **Inward**: one pointer at each end, moving towards each other, such as testing a palindrome: compare `s[i]` with `s[j]`, then `i += 1; j -= 1`.

## Rolling hash {lvl=2 id=s-hash label="SDE-1"}

How can you compare two long substrings without reading them? Turn each into a number, a **fingerprint**, and compare numbers. Treat the text as digits in a big base $B$: the fingerprint of "abc" is $a\cdot B^2 + b\cdot B + c$, taken modulo a big prime $M$. Build **prefix hashes** $h_0, h_1, \dots$ where each is the previous times $B$ plus the new letter. Then the hash of any slice follows from two of them:

$$\text{hash}(s[l:r]) = \big(h_r - h_l \cdot B^{\,r-l}\big) \bmod M$$

Read it as: take the hash up to $r$, remove the part that came from the first $l$ letters (shifted left by $r-l$ places), and keep the rest.

```python
import random
MOD = (1 << 61) - 1
BASE = random.randrange(10**6, MOD - 1)

def build(s):
    h, pw = [0], [1]
    for ch in s:
        h.append((h[-1] * BASE + ord(ch)) % MOD)
        pw.append(pw[-1] * BASE % MOD)
    return h, pw

def get(h, pw, l, r):                 # hash of s[l:r]
    return (h[r] - h[l] * pw[r - l]) % MOD
```

Equal substrings always give equal hashes. Different substrings *usually* differ, but may collide. With a 61-bit modulus and a random base, one comparison fails with probability about $n/2^{61}$, far below any realistic risk. [Inference: the bound is the standard polynomial-hash argument, quoted from memory.] Never use a small fixed modulus and a fixed base on a site that accepts adversarial input: crafted strings can collide on purpose.

:::qc lvl=2
q: You hash 100,000 different substrings into numbers below 10^9+7 with random-like values. Roughly how many pairs share a hash?
options: ["About 0.001", "About 5", "About 100,000"]
answer: 1
right: Right. This is the birthday effect: n squared over 2M is 10^10 divided by 2 times 10^9, about 5. With one million substrings it would be hundreds, which is why contest solutions use a 61-bit modulus or two moduli.
wrong: Count pairs: about n squared divided by 2, then multiply by the chance 1 over M that a pair matches.
:::

## The prefix function and KMP {lvl=3 id=s-kmp label="SDE-2"}

Return to the all-"a" nightmare. When "aaab" fails on the "b", we already know the last three letters were "aaa". There is no point checking the pattern one slot to the right from scratch. The **prefix function** records exactly this: $\pi[i]$ is the length of the longest proper prefix of $s[0..i]$ that is also a suffix of it. For "abacaba" it is 0, 0, 1, 0, 1, 2, 3.

:::figure caption="Prefix function of abacaba: after 'abacab' the last 2 letters ('ab') equal the first 2, so the value is 2"
<svg viewBox="0 0 320 110" role="img" aria-label="The string abacaba with prefix function values 0 0 1 0 1 2 3">
<g style="font-size:14px;fill:var(--ink)">
<g style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--mat)"><rect x="20" y="24" width="38" height="32"/><rect x="58" y="24" width="38" height="32"/><rect x="96" y="24" width="38" height="32"/><rect x="134" y="24" width="38" height="32"/><rect x="172" y="24" width="38" height="32"/><rect x="210" y="24" width="38" height="32"/><rect x="248" y="24" width="38" height="32"/></g>
<text x="34" y="46">a</text><text x="72" y="46">b</text><text x="110" y="46">a</text><text x="148" y="46">c</text><text x="186" y="46">a</text><text x="224" y="46">b</text><text x="262" y="46">a</text>
<text x="34" y="82" style="fill:var(--c)">0</text><text x="72" y="82" style="fill:var(--c)">0</text><text x="110" y="82" style="fill:var(--c)">1</text><text x="148" y="82" style="fill:var(--c)">0</text><text x="186" y="82" style="fill:var(--c)">1</text><text x="224" y="82" style="fill:var(--c)">2</text><text x="262" y="82" style="fill:var(--c)">3</text>
</g><text x="20" y="104" style="font-size:11px;fill:var(--muted)">letter row above, pi value below each letter</text></svg>
:::

To compute it, extend the previous border by one letter when it matches; if not, fall back to the next shorter border, which is already stored in $\pi$:

```python
def prefix_function(s):
    pi = [0] * len(s)
    for i in range(1, len(s)):
        k = pi[i - 1]
        while k and s[i] != s[k]:
            k = pi[k - 1]            # fall back to a shorter border
        if s[i] == s[k]:
            k += 1
        pi[i] = k
    return pi
```

Although there is a loop inside the loop, $k$ goes up by at most 1 per step and every fall-back lowers it, so the total work is $O(n)$.

**Searching**: build $\pi$ for `pattern + "\x00" + text` (a separator not in either). Wherever $\pi[i]$ equals the pattern length $m$, the pattern ends there. Total cost is $O(n+m)$, never re-reading a letter.

```python
def kmp_find(text, pat):
    s = pat + "\x00" + text
    pi = prefix_function(s)
    return [i - 2 * len(pat) for i in range(len(s)) if pi[i] == len(pat)]

print(kmp_find("abracadabra", "abra"))    # [0, 7]
```

Two corollaries: the **smallest period** of a string of length $n$ is $n - \pi[n-1]$ (for "abcabcabcab" it is $11 - 8 = 3$), and the string is a whole number of repeats if that period divides $n$.

:::qc lvl=3
q: What is the prefix function of "aabaaab" at its last position?
options: ["1", "2", "3"]
answer: 2
right: Right. The whole string ends in "aab", which equals the first three letters "aab". No longer prefix matches, so the value is 3.
wrong: Find the longest proper prefix of the whole string that is also its ending. Compare "aab" with the last three letters.
:::

## The Z-function {lvl=3 id=s-z label="SDE-2"}

$z[i]$ answers a more direct question: starting at position $i$, how many letters agree with the *beginning* of the string? For "aabxaab" the values are 7, 1, 0, 0, 3, 1, 0. The code keeps a window $[l, r)$ of the rightmost match found so far, and reuses it to start each new comparison partway in:

```python
def z_function(s):
    n = len(s); z = [0] * n; l = r = 0
    for i in range(1, n):
        if i < r:
            z[i] = min(r - i, z[i - l])      # reuse the mirror
        while i + z[i] < n and s[z[i]] == s[i + z[i]]:
            z[i] += 1
        if i + z[i] > r:
            l, r = i, i + z[i]
    z[0] = n
    return z
```

Searching works as with KMP: Z of `pattern + separator + text`, and a value equal to $m$ marks a match. Z and the prefix function carry the same information, and each can be turned into the other. Choose whichever you can write without a bug: Z is easier to reason about for "how far does this match the start", the prefix function for "borders and periods".

## Palindromes and tries {lvl=3 id=s-pal label="SDE-2"}

A **palindrome** reads the same both ways. The simple method: every palindrome has a centre, so try each of the $2n-1$ centres and expand outwards while the two ends match. That is $O(n^2)$ in the worst case, fine for $n$ up to a few thousand. With prefix hashes of the string and of its reverse you can test any slice in $O(1)$, and binary search on the radius gives $O(n \log n)$.

A **trie** (prefix tree) stores words letter by letter along a path, so words sharing a start share the path. Store a count at each node and "how many words start with this prefix" becomes a walk of length equal to the prefix.

```python
def build(words):
    root = {}
    for w in words:
        node = root
        for ch in w:
            node = node.setdefault(ch, {})
            node["cnt"] = node.get("cnt", 0) + 1
    return root

def count_prefix(root, p):
    for ch in p:
        if ch not in root: return 0
        root = root[ch]
    return root["cnt"]
```

## Variants: one table {lvl=3 id=s-variants label="SDE-2"}

| Variant | Signal in the statement | Change to the template |
|---|---|---|
| Frequency count | "anagram", "rearrange", order does not matter | Counter or a 26-cell list |
| Window | "longest or shortest substring such that..." | Two pointers with counts as state |
| Compare many substrings | "are these two slices equal", repeated queries | Prefix hashes; get(l, r) in O(1) |
| Longest repeated or common substring | "longest substring that appears twice" | Binary search on length, hash set of that length |
| Search one pattern | "find all occurrences" | KMP or Z on pattern, separator, text |
| Border or period | "prefix that is also a suffix", "made of repeats" | pi[n-1], and n minus pi[n-1] |
| Rotation | "is t a cyclic shift of s" | Search t in s + s |
| Palindromes | "longest or count of palindromic substrings" | Expand around centres, or Manacher |
| Prefix families | "how many words start with", autocomplete | Trie with counts |

## Catalogue: twelve problem types {lvl=3 id=s-catalogue label="SDE-2"}

In our own words, each mapped to a variant.

1. Decide whether two words use exactly the same letters: frequency count.
2. Find the longest stretch of a string with no letter repeated: window.
3. Find the longest stretch containing at most k different letters: window with counts.
4. Report every position where a short word occurs in a long text: KMP or Z.
5. Find the shortest unit that, repeated, builds a given string: n minus pi[n-1].
6. Find the longest piece that is both a start and an end of a string: pi[n-1].
7. Decide whether one string is a rotated copy of another: search in s + s.
8. For each start of a string, count how many times that start appears as a piece of the string: counting through pi.
9. Find the longest piece that occurs at least twice: hashing plus binary search on the length.
10. Count or find palindromic pieces: centre expansion for small n, Manacher for large n.
11. Fewest letters to add at the front to make a string a palindrome: pi of s + separator + reverse of s.
12. Many words, many prefix queries, or the pair with the largest XOR: trie (a binary trie for XOR).

## Common bugs {lvl=3 id=s-bugs label="SDE-2"}

- No separator in `pattern + text`: a border can straddle the join and give a phantom match.
- Hash slice boundaries off by one: write `get(l, r)` as half-open `[l, r)` everywhere.
- Hash subtraction not reduced: in languages with signed remainders add the modulus after subtracting.
- Using a fixed small modulus or base: fine on practice sets, hacked in contests with open testing.
- Letter value 0 (mapping 'a' to 0) makes "a" and "aa" hash the same; map letters to 1 or more.
- Prefix function: forgetting `while` and using `if`, so only one fall-back step is taken.
- Counting palindromes of even length with only odd centres.

## Linear-time palindromes and more {lvl=4 id=s-advanced label="SDE-3"}

- **Manacher's algorithm** finds the palindrome radius at every centre in $O(n)$, by reusing the mirror image across the rightmost palindrome, like the Z-function does for matches. Insert a separator between letters so odd and even palindromes are handled together:

```python
def manacher(s):
    t = "#" + "#".join(s) + "#"
    n = len(t); p = [0] * n; c = r = 0
    for i in range(n):
        if i < r: p[i] = min(r - i, p[2 * c - i])
        while i - p[i] - 1 >= 0 and i + p[i] + 1 < n and t[i-p[i]-1] == t[i+p[i]+1]:
            p[i] += 1
        if i + p[i] > r: c, r = i, i + p[i]
    return p      # longest palindrome = max(p); total palindromes = sum((x+1)//2)
```

- **Aho–Corasick** extends the trie with KMP-style fall-back links so a whole dictionary of patterns is searched in one pass over the text.
- **Suffix arrays and suffix automata** answer "number of distinct substrings", "longest common substring of two strings" and similar in $O(n \log n)$ or $O(n)$; they are heavy to write, so check whether hashing is enough first.
- **Double hashing** (two moduli, or one big one) and a random base protect against crafted collisions. Judge-hacking is a real concern in rated contests. [Inference]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. When order does not matter, count letters; compare the counts. {lvl=1}
2. Two pointers that only move forward keep window problems at O(n). {lvl=2}
3. A rolling hash compares any two substrings in O(1); use a big modulus and a random base. {lvl=2}
4. The prefix function stores the longest border at each position; KMP and periods follow from it. {lvl=3}
5. The Z-function stores how far each suffix matches the start; it solves search the same way. {lvl=3}
6. A trie shares common prefixes and answers prefix counts; centre expansion finds palindromes. {lvl=3}
7. Manacher, Aho–Corasick and suffix structures are the heavy tools for large inputs. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Always put a separator between pattern and text before running pi or Z on the join. {lvl=3}
- Hashing is probabilistic: if exactness matters and n is moderate, prefer KMP or Z. {lvl=2}
- Python string slicing copies: slicing inside a loop turns O(n) into O(n squared). Pass indices instead. {lvl=2}
- Count by letter only when the alphabet is small; for large alphabets use a dict. {lvl=1}
- Test with tiny strings against brute force; most string bugs appear on strings of length 1 or 2. {lvl=2}
:::
