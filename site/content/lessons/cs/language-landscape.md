---
title: The language landscape
summary: Why hundreds of programming languages exist when all of them can compute the same things, and how to tell them apart in three questions.
ncert: []
up_to: SDE-2
builds_on: [Values and types, Variables and memory]
notes_prompt: Explain to a friend why a team might write a phone app in one language and the engine under it in another, using the words typing, memory and speed.
margin:
  - kind: history
    title: History
    text: 'C was created at Bell Labs in the early 1970s to rewrite the Unix operating system [Unverified date]. Over fifty years later, the kernels of Linux, Android and macOS are still mostly C and C++.'
  - kind: tip
    title: Interview favourite
    text: 'Interviewers often let you choose any language. Pick the one you can write fastest and bug-free (usually Python, Java or C++). Knowing why a language is slow or fast matters more than which one you pick.'
  - kind: olympiad
    title: Design link
    text: 'Large companies mix languages on purpose: a fast, strict language for the hot inner loop, a flexible one for glue and experiments. The skill is choosing the seam between them.'
books:
  - { title: "Abelson and Sussman, Structure and Interpretation of Computer Programs", ref: "Ch. 1 Building Abstractions with Procedures [Unverified]" }
  - { title: "Klabnik and Nichols, The Rust Programming Language (free online)", ref: "Ch. 4 Understanding Ownership [Unverified]" }
  - { title: "Kernighan and Ritchie, The C Programming Language", ref: "Introduction and Ch. 5 Pointers and Arrays [Unverified]" }
cards:
  - { front: "Why do so many programming languages exist?", back: "Each is a different trade-off between how fast you can write the program, how fast it runs, and how many mistakes it catches for you. No language wins on all three." }
  - { front: "Static vs dynamic typing?", back: "Static: types are checked before the program runs (Java, Go, Rust, C). Dynamic: types are checked while it runs (Python, JavaScript). Static catches typos early; dynamic is quicker to write." }
  - { front: "Three ways a language handles memory?", back: "You free it yourself (C), a garbage collector frees it for you at run time (Python, Java, Go, JavaScript), or the compiler enforces ownership rules so it is freed at the right moment (Rust)." }
  - { front: "What is a paradigm?", back: "A style of organising a program: procedural (steps), object-oriented (objects with behaviour), functional (functions that transform values). Most modern languages mix them." }
  - { front: "Why is Python usually slower than C?", back: "Python checks types and looks things up while running, on every operation, and it is usually interpreted. C is compiled ahead of time to machine code with the types already known." }
  - { front: "Which language for a quick script, a web service, a game engine?", back: "Typically Python for the script, Go or Java or TypeScript for the service, C++ or Rust for the engine. These are common conventions, not rules." }
core:
  idea: 'All general-purpose languages can compute the same things; they differ in three trade-offs: when types are checked, who manages memory, and how the code is turned into running instructions. Choose the language whose trade-offs match the job.'
  formulas:
    - tex: '\text{total cost} = \text{writing time} + \text{running time} + \text{cost of bugs}'
      label: 'What you are really minimising when you choose a language'
  conditions:
    - 'Any two general-purpose languages can express the same programs (they are equally powerful in what they can compute)'
    - 'They differ in cost, not in possibility: speed, safety, size of the community and available libraries'
    - 'The best choice depends on the job, the team and how long the code will live'
  sign: 'The commonest mistake is to call a language "fast" or "slow" as if it were a fixed property. Speed comes from the language, its implementation and your algorithm together; a good algorithm in Python can beat a bad one in C.'
outcomes:
  - 'Explain why more than one programming language exists'
  - 'Place Python, JavaScript/TypeScript, Java, C/C++, Go and Rust on a map of typing and memory management'
  - 'Distinguish static from dynamic typing and manual, garbage-collected and ownership-based memory'
  - 'Name the main paradigms and spot them in code'
  - 'Choose a sensible language for a given job and defend the trade-off'
opener:
  story: |
    You pay a friend on a UPI app. The screen that slides up, the button you tap and the tick mark that appears were probably written in one language. The servers that check your balance may be in a second. The phone's operating system underneath is in a third. The data analysts who study fraud patterns use a fourth, in a notebook.

    Every one of those languages can, in principle, do every other one's job. A computer science result from the 1930s says so. So why would a sensible company use four?

    It is the same reason a kitchen has a chef's knife, a bread knife and scissors. All of them cut. Each one cuts something better, and misuse is how you lose a finger. Let's find out what each language is a knife for.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Four tools on a bench, labelled Python, Go, Java and C, placed along a line from easy to write to close to the machine"><line x1="30" y1="150" x2="290" y2="150" style="stroke:var(--ink);stroke-width:2"/><path d="M283 144 L291 150 L283 156" style="fill:none;stroke:var(--ink);stroke-width:2"/><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.6"><rect x="32" y="96" width="52" height="38" rx="6"/><rect x="98" y="96" width="52" height="38" rx="6"/><rect x="164" y="96" width="52" height="38" rx="6"/><rect x="230" y="96" width="52" height="38" rx="6"/></g><g style="font-size:12px;fill:var(--ink);text-anchor:middle"><text x="58" y="120">Python</text><text x="124" y="120">Java</text><text x="190" y="120">Go</text><text x="256" y="120">C</text></g><text x="30" y="176" style="font-size:10px;fill:var(--muted)">quick to write</text><text x="290" y="176" style="font-size:10px;fill:var(--muted);text-anchor:end">close to the machine</text><text x="160" y="54" style="font-size:13px;fill:var(--ink);text-anchor:middle">One job, many knives</text><text x="160" y="76" style="font-size:10px;fill:var(--muted);text-anchor:middle">same results possible, different trade-offs</text><path d="M58 200 C110 222 210 222 256 200" style="fill:none;stroke:var(--c);stroke-width:1.5;stroke-dasharray:4 3"/><text x="160" y="232" style="font-size:10px;fill:var(--c);text-anchor:middle">slower to run  →  faster to run</text></svg>'
symbols:
  - s: 'static typing'
    means: 'types are checked before the program runs, by the compiler'
  - s: 'dynamic typing'
    means: 'types are checked while the program runs'
  - s: 'garbage collector (GC)'
    means: 'a part of the runtime that finds memory nobody uses any more and frees it'
  - s: 'ownership'
    means: 'a rule set (used by Rust) that makes each value have exactly one owner, so the compiler knows when to free it'
  - s: 'paradigm'
    means: 'a style of organising code: procedural, object-oriented or functional'
  - s: 'runtime'
    means: 'the support code that runs alongside your program (memory manager, type checks, scheduler)'
life:
  - 'A web page you open runs JavaScript in your browser, and TypeScript is a stricter dress for the same language that many teams write instead.'
  - 'The Android apps on your phone are mostly written in Kotlin or Java; the iPhone''s in Swift. Under both is an operating system largely in C and C++.'
  - 'Machine-learning notebooks are written in Python, but the heavy number-crunching inside them is done by libraries written in C and C++ (a deliberate seam).'
  - 'Cloud tools such as Docker and Kubernetes are written in Go; browsers and game engines are written mostly in C++, with Rust growing in both [Inference: based on public project histories].'
  - 'A bank''s oldest systems may still run COBOL, because rewriting something that works and handles money is risky.'
models:
  - name: 'Every tool is a trade-off'
    text: 'There is no best knife, vehicle or language, only a best fit for a job. When someone says "X is better", ask "better at what, and what did it cost?" The same question sorts out phones, schools and economic policies.'
  - name: 'Pay now or pay later'
    text: 'Static typing makes you declare things up front (pay now) and spares you surprise crashes (pay later). Dynamic typing reverses the bill. Many life choices, from saving to exam preparation, have the same shape.'
  - name: 'Put the seam in the right place'
    text: 'Use a flexible tool for the parts that change often and a precise tool for the parts that must be fast or safe. A film crew improvises on set but locks the final edit; software teams do the same with Python and C++.'
links:
  - leaf: 'cs/values-and-types'
    name: 'Values and types'
    same: 'Every language has types: kinds of value such as numbers, text and truth values, each with its own allowed operations.'
    differs: 'Languages differ in when the type is checked (before running or during) and how strict they are about mixing types.'
  - leaf: 'cs/variables-and-memory'
    name: 'Variables and memory'
    same: 'A variable is a name attached to a place in memory in every language.'
    differs: 'Who gives that memory back when you are done is exactly what separates C, Python and Rust.'
  - leaf: 'cs/objects-and-classes'
    name: 'Objects and classes'
    same: 'Object-oriented design is one paradigm that Python, Java, C++ and JavaScript all support.'
    differs: 'Go and Rust have no classes in the Java sense, and Java insists that everything lives inside one.'
  - leaf: 'cs/functional-ideas'
    name: 'Functional programming ideas'
    same: 'Functions as values you can pass around are now in almost every mainstream language.'
    differs: 'Some languages (Haskell, for example) make this style the default; others add it as an option.'
next:
  q: 'You write a line in Python or C and the computer, which only understands numbers, does exactly what it says. What happens in between, and why does the same loop run so much faster in one language than another?'
  leaf: 'cs/compilers-and-interpreters'
  name: 'Compilers and interpreters'
---

:::hook
q: Every general-purpose language can compute the same things. So why do hundreds of them exist?
options: ["Programmers could not agree on a standard", "Each makes a different trade-off between speed, safety and ease of writing", "Older languages stop working after a while"]
answer: 1
right: Right. A language is a bundle of choices. Make writing easy and the program tends to run slower; make it fast and safe and you have more to say up front. Different jobs weigh these differently.
wrong: Preferences play a part, and old languages do keep working (people still run decades-old code). The deeper reason is that no language can be easiest to write, fastest to run and safest all at once.
:::

## Three questions that sort languages {lvl=1 id=s-three label="Foundations"}

A programming language is a way of writing instructions that a human can read and a machine can eventually follow. Hundreds exist. Learning each one separately would be hopeless, but you do not have to, because almost all of the differences come from **three questions**:

1. **When are the types checked?** Before the program runs, or while it runs?
2. **Who cleans up memory?** You, a helper that runs alongside the program, or rules the compiler enforces?
3. **How does the code become action?** Translated ahead of time to machine instructions, or read and carried out line by line? (The next lesson answers this one in detail.)

Ask these three about any language you meet and you can place it on a map within a minute.

Why do the answers differ? Because each answer buys something and costs something. Checking types early catches typos but means more typing for you. A helper that cleans memory saves you from a whole class of bugs but takes a bit of the computer's time. Compiling ahead of time makes the program faster but slows down the write-run-fix cycle.

:::qc lvl=1
q: You are asked to write a one-off script that renames 500 photos, and you will never run it again. Which trade-off matters most?
options: ["Speed of the running program", "Speed of writing the program", "Control over memory"]
answer: 1
right: Right. It will run for a second, once. Your own time is the expensive part, which is why a quick, flexible language such as Python is the usual choice.
wrong: The script runs for seconds, once. Which cost is bigger: the machine time, or the hour you spend writing it?
:::

## A map of six languages {lvl=1 id=s-map label="Foundations"}

Here is the map. Its two directions are the first two questions. Left to right: types checked while running versus before running. Top to bottom: the runtime handles memory versus you or the compiler's rules do.

:::figure caption="Six common languages placed by typing (left to right) and memory management (top to bottom). Positions are approximate and simplified."
<svg viewBox="0 0 360 250" role="img" aria-label="A map placing Python and JavaScript top left, TypeScript, Java and Go top right, C and C++ bottom right, Rust bottom right edge">
<line x1="40" y1="215" x2="345" y2="215" class="axis"/>
<line x1="40" y1="215" x2="40" y2="20" class="axis"/>
<text x="190" y="240" style="font-size:10px;fill:var(--muted);text-anchor:middle">types checked while running  →  types checked before running</text>
<text x="14" y="120" transform="rotate(-90 14 120)" style="font-size:10px;fill:var(--muted);text-anchor:middle">runtime frees memory  ↑  you / rules  ↓</text>
<g style="font-size:12px;fill:var(--ink)">
<circle cx="80" cy="55" r="5" style="fill:var(--mat)"/><text x="90" y="59">Python</text>
<circle cx="80" cy="95" r="5" style="fill:var(--mat)"/><text x="90" y="99">JavaScript</text>
<circle cx="210" cy="75" r="5" style="fill:var(--phy)"/><text x="220" y="79">TypeScript</text>
<circle cx="255" cy="45" r="5" style="fill:var(--phy)"/><text x="265" y="49">Java</text>
<circle cx="280" cy="105" r="5" style="fill:var(--phy)"/><text x="290" y="109">Go</text>
<circle cx="250" cy="160" r="5" style="fill:var(--ink)"/><text x="260" y="164">C, C++</text>
<circle cx="300" cy="190" r="5" style="fill:var(--ink)"/><text x="260" y="194" style="text-anchor:end">Rust</text>
</g>
</svg>
:::

A one-line character sketch of each (these are common impressions, not laws):

| Language | Typing | Memory | Usually run as | Known for |
|---|---|---|---|---|
| Python | dynamic | garbage collected | interpreted | readability, data science, scripting |
| JavaScript | dynamic | garbage collected | interpreted + JIT | the language of the browser |
| TypeScript | static (checked, then turned into JavaScript) | garbage collected | via JavaScript | large web code bases |
| Java | static | garbage collected | bytecode + JIT | big back-end systems, Android (with Kotlin) |
| C / C++ | static | manual (C++ adds helpers) | compiled to machine code | operating systems, games, speed |
| Go | static | garbage collected | compiled | simple servers, cloud tools |
| Rust | static | ownership rules | compiled | speed with safety |

History, labelled: Python and Java appeared in the early 1990s, JavaScript in 1995, Go in 2009, Rust's first stable release in 2015 [Unverified dates].

## Typing: when a mistake is caught {lvl=2 id=s-typing label="SDE-1"}

A **type** says what kind of thing a value is, and so which operations make sense. Adding two numbers is fine; adding a number to a name is probably a bug. The question is when the language notices.

With **dynamic typing**, a value carries its type and the check happens at the moment of the operation:

```python
def total(a, b):
    return a + b

total(2, 3)        # 5
total("2", 3)      # TypeError, but only when this line runs
```

With **static typing**, you declare (or the compiler works out) the types, and the compiler rejects the bad call before the program ever starts. Python lets you write the declaration as a hint that tools such as `mypy` check, though Python itself ignores it:

```python
def total(a: int, b: int) -> int:
    return a + b

total("2", 3)      # a checker flags this before running
```

A separate question is **strength**: does the language quietly convert between types? Python refuses `"2" + 3`. JavaScript answers `"23"`, which is more convenient and the source of famous surprises. In a one-evening script that does not matter; in a payment system touched by fifty engineers over ten years, catching the slip at compile time is worth the extra words.

:::qc lvl=2
q: A Python function crashes in production because someone passed a string where a number was expected. Which tool could have caught it before release?
options: ["A faster computer", "Type hints plus a static checker, or tests that call it with that input", "A garbage collector"]
answer: 1
right: Right. Either move the check earlier (types) or exercise the code earlier (tests). Dynamic languages lean on tests.
wrong: Speed of the machine and memory cleanup are unrelated to a wrong-type argument. What would check types without running the code?
:::

## Memory: who gives it back {lvl=2 id=s-memory label="SDE-1"}

Every running program asks for memory (to hold a list, a text, a record) and must hand it back, or the machine fills up. There are three schools.

**Manual (C).** You ask for a block and you free it. The program is fast and exact, but a mistake is costly: forget to free and memory leaks; free twice or use after freeing and the program can crash or be exploited. A large share of serious security bugs in big C and C++ programs come from this [Inference: widely reported by Microsoft and Google about their own code, exact shares vary].

**Garbage collection (Python, Java, Go, JavaScript).** The runtime periodically finds values that nothing refers to any more and frees them. You cannot forget. The price is some extra work and, in some designs, short pauses while it runs.

**Ownership (Rust).** Each value has exactly one owner; when the owner goes out of scope, the compiler inserts the cleanup. If you try to use a value after giving it away, the program does not compile. You get C-like speed without a collector, and the price is a steeper learning curve at the start.

A picture of the choice:

:::figure caption="Same job, three ways. The arrows say who decides when memory is freed."
<svg viewBox="0 0 360 150" role="img" aria-label="Three rows: C where the programmer frees, Java or Python where a collector frees, Rust where the compiler inserts the free">
<g style="font-size:11px;fill:var(--ink)">
<text x="12" y="30">C</text><rect x="40" y="14" width="90" height="24" rx="5" class="obj" style="fill:none;stroke:var(--ink)"/><text x="48" y="30">you call free()</text>
<text x="12" y="80">Python, Java, Go</text><rect x="110" y="64" width="130" height="24" rx="5" style="fill:none;stroke:var(--mat);stroke-width:1.5"/><text x="118" y="80">collector sweeps it later</text>
<text x="12" y="130">Rust</text><rect x="48" y="114" width="160" height="24" rx="5" style="fill:none;stroke:var(--phy);stroke-width:1.5"/><text x="56" y="130">compiler adds it at scope end</text>
</g>
<text x="300" y="30" style="font-size:10px;fill:var(--muted)">fast, risky</text>
<text x="270" y="80" style="font-size:10px;fill:var(--muted)">safe, some cost</text>
<text x="226" y="130" style="font-size:10px;fill:var(--muted)">fast, safe, stricter</text>
</svg>
:::

## Paradigms: styles of thinking {lvl=2 id=s-paradigms label="SDE-1"}

A **paradigm** is a style of organising a program. Three matter in practice, and the same small task can be written in each:

```python
# procedural: do these steps in order
total = 0
for x in [1, 2, 3, 4]:
    if x % 2 == 0:
        total += x * x

# functional: describe the result as transformations
total = sum(x * x for x in [1, 2, 3, 4] if x % 2 == 0)
```

Object-oriented style would wrap data and the operations on it into one unit, such as a `ShoppingCart` object with an `add` method. Most modern languages allow all three, and good programmers move between them: objects for modelling things, functions for transforming data, plain steps for the rest.

## Choosing a language for a job {lvl=3 id=s-choose label="SDE-2"}

Think in terms of the cost formula: writing time, running time and cost of bugs. Then ask four practical questions.

1. **How long will the code live, and how many people will touch it?** Long life and large teams favour static types and conventions that the tools enforce.
2. **Where is the speed needed?** Usually in a small hot spot. Write everything in a convenient language and move only that hot spot to a faster one, as Python's number libraries do with C.
3. **What already exists?** Libraries, frameworks and hiring pools matter more than elegance. A language with a library for your problem saves months.
4. **What does a failure cost?** A crashed script costs an annoyed afternoon; a crashed brake controller costs far more. High-stakes code is written in languages and styles that remove whole classes of error.

Concurrency, doing many things at once, is another dividing line. Go builds light "goroutines" into the language; Java and C++ use threads; JavaScript uses an event loop with one main thread; CPython (the usual Python) has a lock that lets only one thread run Python code at a time, though recent versions have an optional build without it [Unverified: version details]. The processes and threads lesson explains why this matters.

:::qc lvl=3
q: Your team's web service is slow in one function that crunches numbers, and fast everywhere else. A sensible first move is to
options: ["Rewrite the whole service in C", "Profile it, then speed up or move just that function", "Switch the team to a new language"]
answer: 1
right: Right. Measure first, then fix the hot spot. Most of a program's time is spent in a tiny fraction of its code.
wrong: Rewriting everything is expensive and risky when only one function is slow. What should you do before deciding anything?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. All general-purpose languages can compute the same things; they differ in cost: writing time, running time and bug cost. {lvl=1}
2. Three questions place any language: when are types checked, who manages memory, how does the code run. {lvl=1}
3. Static typing catches mistakes before running; dynamic typing is quicker to write. {lvl=2}
4. Memory is freed by you (C), by a garbage collector (Python, Java, Go, JavaScript) or by compiler-enforced ownership (Rust). {lvl=2}
5. Paradigms (procedural, object-oriented, functional) are styles, and most languages mix them. {lvl=2}
6. Choose by the job: lifetime, where speed matters, existing libraries and the cost of failure. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Python is slow, C is fast" is half the story: the algorithm usually matters more than the language. {lvl=1}
- A language is not "compiled" or "interpreted" by nature; implementations vary. Python can be compiled and C can be interpreted. {lvl=2}
- Dynamic does not mean untyped: values still have types, they are just checked later. {lvl=2}
- Garbage collection prevents leaks and use-after-free but does not prevent every memory waste, such as holding on to a huge list you no longer need. {lvl=3}
- In interviews, state the language you will use up front and know its costs (for example, what its list append and string concatenation cost). {lvl=2}
:::
