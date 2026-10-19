---
title: Errors and testing
summary: What a payment app should do when the network drops mid-transfer, and how teams prove their code works before millions of people use it.
ncert: []
up_to: SDE-2
builds_on: [Functions, Objects and classes]
notes_prompt: Explain to a friend the difference between a program crashing on purpose with a clear message and a program failing silently, and why the first is better.
margin:
  - kind: history
    title: History
    text: 'In 1996 the first Ariane 5 rocket was lost about 37 seconds after launch when a number conversion overflowed and the error handling shut down the guidance computer. A famous case for "what should software do when something goes wrong?" [Unverified: details from memory]'
  - kind: tip
    title: Interview favourite
    text: 'After you write a solution, say "let me test it": an empty input, one item, the largest allowed input, duplicates, negatives. Naming edge cases aloud is a strong signal at every level.'
  - kind: olympiad
    title: Design link
    text: 'At scale, failure is normal, not exceptional: disks die, networks stall. Retries, timeouts and idempotent operations are error handling spread across machines.'
books:
  - { title: "H. Percival, Test-Driven Development with Python", ref: "Part 1: the TDD cycle [Unverified: chapter numbers]" }
  - { title: "K. Beck, Test-Driven Development: By Example", ref: "Part I: the money example" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 8 The Trouble with Distributed Systems [Unverified: chapter number]" }
cards:
  - { front: "What does raise do?", back: "Signals that something went wrong by throwing an exception. The current function stops at once and Python looks up the call chain for an except block that handles it." }
  - { front: "try, except, else, finally: what is each for?", back: "try: the risky code. except: what to do if it fails. else: runs only if try succeeded. finally: runs always, success or failure, for cleanup." }
  - { front: "Assert or raise?", back: "assert states something that must be true unless the program has a bug (and can be switched off). raise handles bad input or a bad world, which can happen in a correct program." }
  - { front: "What is a unit test?", back: "A tiny automated check that calls one piece of code with chosen input and asserts the result. Fast, repeatable, and run on every change." }
  - { front: "Arrange, act, assert?", back: "The shape of a good test: set up the situation, do the one thing under test, check the outcome." }
  - { front: "What is test-driven development?", back: "Write a failing test first (red), write the least code to pass it (green), then tidy up (refactor), and repeat in small steps." }
core:
  idea: 'When something goes wrong, a program should stop that path loudly with a clear exception, and only code that knows how to recover should catch it. Automated tests state in code what correct behaviour is, so any change that breaks it is caught within seconds, before users see it.'
  formulas:
    - tex: '\text{arrange} \to \text{act} \to \text{assert}'
      label: 'The shape of one test'
    - tex: '\text{red} \to \text{green} \to \text{refactor}'
      label: 'The test-driven cycle'
  conditions:
    - 'Catch an exception only where you can do something useful about it (retry, fall back, report); otherwise let it travel upward'
    - 'Each test checks one behaviour, runs fast and gives the same result every time'
    - 'Tests cover the edges (empty, one, largest, invalid), not only the comfortable middle'
  sign: 'The worst bug is the swallowed one: except: pass hides the failure and the program carries on with wrong data. A crash with a message is a gift by comparison.'
outcomes:
  - 'Read and write try, except, else, finally and raise, and explain what happens as an exception travels up the call chain'
  - 'Choose between an exception, an assertion and a return value for a given failure'
  - 'Write a custom exception and use a with block for cleanup'
  - 'Write unit tests with pytest, including edge cases, parametrised cases and expected errors'
  - 'Use the red-green-refactor cycle and replace a slow or flaky dependency with a fake'
opener:
  story: |
    You tap **Pay ₹500** on a payments app. Behind the screen, your bank is asked to take the money, and then the shop is told it has been paid. Halfway between those two steps, your phone loses signal for two seconds.

    What should the app do? Pretend nothing happened and show a green tick? Freeze forever? Charge you twice when you tap again? Every one of those has happened to a real app. Software meets surprises all day: files that are missing, servers that do not answer, users who type "abc" where a number belongs.

    The question is not whether things will go wrong, but what code should do when they do, and how the team knows before release that it does the right thing. Could you prove that, without tapping the button a thousand times yourself?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A payment flow with a break in the middle and a test checking each step"><g style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="14" y="40" width="80" height="44" rx="8"/><rect x="226" y="40" width="80" height="44" rx="8"/></g><g style="font-size:11px;fill:var(--ink)"><text x="30" y="66">Your bank</text><text x="244" y="66">The shop</text></g><path d="M96 62 L146 62" style="stroke:var(--c);stroke-width:2;fill:none"/><path d="M174 62 L224 62" style="stroke:var(--c);stroke-width:2;fill:none"/><g style="stroke:var(--bad);stroke-width:3"><path d="M150 48 L170 76"/><path d="M170 48 L150 76"/></g><text x="104" y="40" style="font-size:10px;fill:var(--bad)">signal lost!</text><g style="fill:none;stroke:var(--rule);stroke-width:1.5"><rect x="14" y="124" width="292" height="96" rx="8"/></g><text x="26" y="146" style="font-size:11px;fill:var(--muted)">Tests run every night:</text><g style="font-size:11px;fill:var(--ink)"><text x="26" y="168">&#10003; refund of a failed payment returns the money</text><text x="26" y="186">&#10003; paying twice is charged once</text><text x="26" y="204" style="fill:var(--bad)">&#10007; empty amount should be rejected</text></g></svg>'
life:
  - 'A UPI payment that fails shows "payment failed, money will be refunded if debited": the app caught an error and chose a safe next step.'
  - 'Your phone''s autocorrect, camera and maps are tested by automated suites on every code change before an update reaches you.'
  - 'Python itself tells you "ZeroDivisionError" or "FileNotFoundError" with a line number: errors are messages, not mysteries.'
  - 'A lift''s overload sensor and a cooker''s safety valve are assertions in hardware: if an impossible condition appears, stop rather than carry on.'
models:
  - name: 'Fail loudly, early and close to the cause'
    text: 'A smoke alarm that goes off at the first wisp is better than one that stays silent until the building is ablaze. Problems hidden for later cost far more, in code, in finances and in relationships.'
  - name: 'Catch only what you can fix'
    text: 'A receptionist who cannot solve your problem should pass it up, not pretend. In any organisation, handle an issue at the level that has the authority to resolve it, and escalate the rest with a clear message.'
  - name: 'Write down what "done" means before you start'
    text: 'A test is a written promise. Deciding the finish line first (a recipe''s expected taste, a project''s acceptance criteria) keeps you honest about when you are actually finished.'
links:
  - leaf: 'cs/objects-and-classes'
    name: 'Objects and classes'
    same: 'A class protects its invariants; exceptions are how a method says "I refuse, this would break the rule".'
    differs: 'Encapsulation decides what is allowed; error handling decides how a refusal travels and who deals with it.'
  - leaf: 'cs/recursion'
    name: 'Recursion'
    same: 'Both depend on the call stack: an exception unwinds the same stack of calls that recursion builds up.'
    differs: 'Recursion goes deeper on purpose; an exception climbs out, skipping the rest of each function it passes.'
  - leaf: 'cs/reliability-and-sre'
    name: 'Reliability, failures and on-call'
    same: 'Both start from the assumption that failures are normal and plan for them in advance.'
    differs: 'Here one program handles one failure; in reliability engineering a whole fleet of machines does, with retries, timeouts and alerts.'
  - leaf: 'cs/cp-stress-testing'
    name: 'Stress testing and edge cases'
    same: 'Both hunt for the input that breaks your code before anyone else finds it.'
    differs: 'Unit tests check inputs you chose by hand; stress testing generates thousands of random inputs and compares against a trusted slow solution.'
next:
  q: 'Our tests pass, and the code runs. But look at how we wrote the loops: five lines to double each price in a list. Is there a way to describe "do this to every item" that is shorter, safer and easier to run on many machines at once?'
  leaf: 'cs/functional-ideas'
  name: 'Functional programming ideas'
symbols:
  - s: '\texttt{raise}'
    means: 'throw an exception: stop here and signal that something went wrong'
  - s: '\texttt{try / except}'
    means: 'run risky code, and say what to do if an exception comes out of it'
  - s: '\texttt{finally}'
    means: 'a block that always runs afterwards, used for cleanup'
  - s: '\texttt{assert}'
    means: 'a check that something is true; if not, stop with an AssertionError (a bug alarm)'
  - s: '\text{red}, \text{green}'
    means: 'the test fails (red), then passes (green); the colours of a test runner''s output'
---

:::hook
q: Here is the puzzle. Your function reads a number the user typed, and the user typed "abc". Which response is best for the user and for the next programmer?
options: ["Quietly use 0 and carry on", "Stop with a clear error saying what was wrong, and let the code that knows what to do about it decide", "Print the word error and keep going"]
answer: 1
right: Right. A silent default turns a typing slip into a wrong answer nobody notices. A clear exception stops the bad path, says what happened and lets the right layer choose: ask again, show a message, or give up.
wrong: Carrying on with made-up data hides the problem until it has done damage somewhere else. What if the program stopped right there, said why, and left the decision to the code that understands the situation?
:::

## What happens when code fails {lvl=1 id=s-fail label="Foundations"}

When Python cannot do what you asked, such as `int("abc")` or `10 / 0`, it does not guess. It **raises an exception**: a message-carrying object that stops the current line and begins climbing back up the chain of function calls, looking for code that says "I can handle this".

```python
def read_age(text):
    return int(text)             # raises ValueError for "abc"

try:
    age = read_age("abc")
except ValueError:
    age = None                   # we know what to do here
```

If nothing on the way catches it, the program ends and prints a **traceback**: the list of calls it climbed through, which is a map to the bug.

:::figure caption="An exception unwinds the call stack: each function it passes is abandoned until some caller has an except block for it."
<svg viewBox="0 0 560 190" role="img" aria-label="Three nested calls; an exception rises from the innermost to the handler in the outermost">
<g style="fill:color-mix(in srgb,var(--mat) 10%,var(--surface));stroke:var(--mat);stroke-width:1.5">
<rect x="20" y="20" width="270" height="150" rx="8"/>
<rect x="44" y="52" width="222" height="104" rx="8"/>
<rect x="68" y="84" width="174" height="58" rx="8"/>
</g>
<g style="font-size:11px;fill:var(--ink)">
<text x="32" y="40">main(): try ... except ValueError</text>
<text x="56" y="72">load_user(): no handler</text>
<text x="80" y="104">read_age():</text>
<text x="80" y="118">int("abc") fails</text>
</g>
<path d="M176 130 C176 130 320 130 340 100 C355 76 330 40 296 36" class="pen" style="fill:none;stroke:var(--bad);stroke-width:2"/>
<text x="352" y="62" style="font-size:11px;fill:var(--bad)">ValueError climbs up,</text>
<text x="352" y="80" style="font-size:11px;fill:var(--bad)">skipping the rest of</text>
<text x="352" y="98" style="font-size:11px;fill:var(--bad)">load_user and read_age,</text>
<text x="352" y="116" style="font-size:11px;fill:var(--bad)">until main() catches it</text>
</svg>
:::

The full shape has four parts:

```python
try:
    f = open("scores.txt")
except FileNotFoundError:
    print("no scores yet")
else:
    print(f.read())      # only if open() worked
finally:
    print("done")        # always runs
```

You signal your own problems with `raise`: `raise ValueError("age must be positive")`.

:::qc lvl=1
q: In the code above, if scores.txt exists, which parts run?
options: ["try, else and finally", "try and except only", "Only finally"]
answer: 0
right: Right. Without an exception, except is skipped, else runs, and finally always runs.
wrong: except runs only when the try block raised the exception it names. What happens to else when nothing went wrong?
:::

## Doing it well {lvl=2 id=s-well label="SDE-1"}

Three habits separate tidy error handling from the kind that causes outages.

**Catch the specific thing.** `except ValueError` is a claim: "I know what this means and how to fix it". A bare `except:` or `except Exception:` also swallows typos and bugs. Never write `except: pass`.

**Add meaning when you pass it on.** Create your own exception so callers can tell your failures apart, and chain the original so the clue is not lost:

```python
class PaymentFailed(Exception):
    pass

def pay(amount):
    try:
        bank.debit(amount)
    except TimeoutError as e:
        raise PaymentFailed("bank timed out") from e
```

**Clean up no matter what.** Files, locks and connections must be released even on failure. A `with` block does this: `with open("f.txt") as f:` closes the file whether the body succeeds or raises.

**Assertion or exception?** An `assert` states something that can only be false if the program itself is wrong: `assert len(items) > 0` after you have already checked. Bad user input, a missing file or a dead server can happen in a perfectly correct program, so use `raise`. Python can switch assertions off (`python -O`), so never use `assert` to check input.

| Situation | Tool | Why |
|---|---|---|
| User typed an invalid age | raise ValueError | The world can be wrong in a correct program |
| "This list cannot be empty here" (internal) | assert | Only a bug can make it false |
| Opening a file | with + except FileNotFoundError | Clean up and handle the expected failure |
| Lookup that often finds nothing | return None or a default | Not exceptional; a normal answer |

## Tests: a promise in code {lvl=2 id=s-tests label="SDE-1"}

How do you know `clean_amount` works? You could try three inputs by hand today. Next month somebody edits it, and who tries them again? A **unit test** writes your tries down as code that a machine runs in a blink, every time anyone changes anything.

Here is a function and its tests, using **pytest**, Python's most popular test tool. A test is a function whose name starts with `test_`, and a failed `assert` marks it red.

```python
def clean_amount(text):
    value = float(text.replace("₹", "").replace(",", ""))
    if value <= 0:
        raise ValueError("amount must be positive")
    return value
```

```python
import pytest

def test_strips_symbol_and_commas():
    assert clean_amount("₹1,250") == 1250.0

def test_rejects_zero():
    with pytest.raises(ValueError):
        clean_amount("0")
```

Each test has one shape: **arrange** the input, **act** by calling the code, **assert** the outcome. `pytest.raises` asserts that the right error *is* raised, because refusing bad input is behaviour too.

To try many cases without copying the test, **parametrise** it:

```python
@pytest.mark.parametrize("text, expected", [
    ("100", 100.0), ("₹5", 5.0), ("1,00,000", 100000.0),
])
def test_valid(text, expected):
    assert clean_amount(text) == expected
```

Choose cases from the **edges**, where bugs live: empty, one item, the biggest allowed, zero, negative, duplicates, extra spaces.

:::qc lvl=2
q: Which test is most valuable to add next for clean_amount?
options: ["Another ordinary number like 200", "An empty string and a negative number", "The same test with a different name"]
answer: 1
right: Right. Ordinary inputs mostly pass anyway; the edges (empty, negative) are where the code can surprise you. Here an empty string would raise ValueError from float, which you can now decide is acceptable or not.
wrong: A fourth ordinary case tells you little you did not already know. Where do functions usually break?
:::

## Thinking test-first {lvl=3 id=s-tdd label="SDE-2"}

**Test-driven development** (TDD) turns the order around: 1. **Red**: write a test for behaviour that does not exist yet and watch it fail. 2. **Green**: write the least code that makes it pass. 3. **Refactor**: tidy the code while the tests keep you safe. Repeat in small steps.

The point is not the ritual; it is that writing the test first forces you to decide what the code should do, and that a test you never saw fail might not test anything.

Real code touches slow or unreliable things: a bank, a clock, the network. Tests must be fast and repeatable, so you replace such a dependency with a **fake** (also called a stub or mock) that returns what you choose:

```python
class FakeBank:
    def debit(self, amount):
        raise TimeoutError()

def test_timeout_becomes_payment_failed():
    with pytest.raises(PaymentFailed):
        pay(100, bank=FakeBank())
```

This is how you test the two-second signal drop from the opening, without a real network. It works only if `pay` receives its bank as a parameter instead of reaching for a global one, which is one more reason objects hold their parts (the composition idea of the last lesson).

What to watch for at this level:

- **Flaky tests** pass and fail at random (real clocks, random numbers, shared state). A flaky test teaches the team to ignore red, so fix or delete it.
- **Test behaviour, not wiring.** If renaming a private helper breaks twenty tests, they check how the code works rather than what it does.
- **Tests in a pipeline.** Teams run the suite on every push (continuous integration), so a broken change is stopped before it merges.
- **Retries need care.** Retrying a failed payment can charge twice unless the operation is **idempotent** (doing it twice has the same effect as once), usually by sending a unique request id. [Inference: typical practice for payment systems; specifics vary by provider.]

:::qc lvl=3
q: Why does the test for pay pass a FakeBank instead of the real bank?
options: ["Fake banks are faster to write than real ones", "The test must be fast, repeatable and able to force a failure on demand", "Real banks cannot be used from Python"]
answer: 1
right: Right. You cannot make a real bank time out on cue, and a test that depends on the network is slow and flaky. A fake gives you control.
wrong: Speed matters, but there is a bigger reason. Could a real bank be made to fail exactly when your test needs it to?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. An exception stops the current path and climbs the call chain until some except block handles it. {lvl=1}
2. try runs risky code, except handles the failure, else runs on success, finally always runs. {lvl=1}
3. Catch specific exceptions, never swallow them, and add meaning with your own types and from. {lvl=2}
4. Use raise for a bad world (input, files, networks) and assert for impossible-unless-buggy states. {lvl=2}
5. A unit test is arrange, act, assert; test the edges and the expected errors too. {lvl=2}
6. Red, green, refactor: the failing test comes first so you know it tests something. {lvl=3}
7. Replace slow or unreliable dependencies with fakes, and design code so they can be passed in. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- except: pass hides every bug in the try block; at minimum log the error. {lvl=1}
- Do not use assert to validate user input: assertions can be switched off. {lvl=2}
- Catching Exception too early means the code that could really fix the problem never hears of it. {lvl=2}
- A test that cannot fail is worthless; watch it go red once. {lvl=3}
- Tests that depend on real time, randomness or the network are flaky; control them with fakes. {lvl=3}
- Retrying a non-idempotent action, such as a payment, can do it twice. {lvl=3}
:::
