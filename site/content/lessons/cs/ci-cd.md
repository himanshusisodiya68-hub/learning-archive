---
title: CI/CD, shipping safely
summary: How teams change live software many times a day without breaking it, by testing every commit and releasing to a few users first.
ncert: []
up_to: SDE-3
builds_on: [Git and the command line, Errors and testing, The cloud and computers on rent]
notes_prompt: Explain to a friend why releasing small changes many times a day is safer than one big release a month, and how a bad release is undone.
margin:
  - kind: history
    title: History
    text: "The idea of integrating everyone's code several times a day was popularised by Extreme Programming in the late 1990s. The book Continuous Delivery (Humble and Farley, 2010) turned release pipelines into a standard practice. [Unverified: dates]"
  - kind: tip
    title: Interview favourite
    text: '"How would you deploy a risky change?" Answer in layers: automated tests, a canary to 1% of traffic, a feature flag you can switch off, and a rollback you have already rehearsed.'
  - kind: olympiad
    title: Design link
    text: A deploy is a change to a running system, so it is the commonest cause of outages. Everything in this lesson reduces the size of one change and how fast you can undo it.
books:
  - { title: "J. Humble and D. Farley, Continuous Delivery", ref: "Deployment pipeline chapters [Unverified chapter numbers]" }
  - { title: "N. Forsgren, J. Humble, G. Kim, Accelerate", ref: "Delivery metrics from the DORA research: deployment frequency, lead time, change failure rate, time to restore" }
  - { title: "Google, Site Reliability Engineering", ref: "Chapter on release engineering [Unverified]" }
cards:
  - { front: "What is continuous integration?", back: "Every change is merged into the shared code often, and each merge automatically builds and tests the whole project, so a break is found within minutes." }
  - { front: "Continuous delivery versus continuous deployment?", back: "Delivery: every passing change is ready to release at the push of a button. Deployment: every passing change is released automatically, with no human button." }
  - { front: "Blue-green versus canary release?", back: "Blue-green: run old and new versions side by side and switch all traffic at once (and back if needed). Canary: send a small share of traffic to the new version first and widen it only if it looks healthy." }
  - { front: "What is a feature flag?", back: "A switch in the code that turns a feature on or off without a deploy, so releasing code and releasing a feature become separate decisions." }
  - { front: "Why is it safer to ship small changes often?", back: "A small change has few suspects if it breaks, is quick to understand, and is easy to undo. A big release hides the culprit among hundreds of changes." }
  - { front: "Why are database changes hard to roll back?", back: "Code can be swapped instantly, but data written in a new shape stays. So changes are made in compatible steps: add, copy and switch, then remove later (expand and contract)." }
core:
  idea: 'Continuous integration and delivery turn releasing software from a rare, frightening event into a routine, automatic pipeline: every change is built and tested at once, and is released gradually behind switches so that a bad change touches few users and can be undone in seconds.'
  formulas:
    - tex: '\text{risk of a release} \approx \text{size of change} \times \text{share of users exposed}'
      label: 'Small changes and small exposure keep the damage small'
    - tex: '\text{blast radius} = f \times N'
      label: 'f is the canary share of users, N the total users who could be hurt'
  conditions:
    - 'Tests are fast and trustworthy enough that a green build means something'
    - 'Every release is built once and the same artifact is promoted through environments'
    - 'There is a tested way back: a rollback, a flag, or a roll-forward fix'
  sign: 'A green pipeline means the tests pass, not that the change is safe. Tests check what you thought of; the canary checks what you did not.'
outcomes:
  - 'Explain why frequent small releases are safer than rare big ones'
  - 'Describe a pipeline from commit to production and what each stage guards against'
  - 'Choose between rolling, blue-green and canary releases'
  - 'Use feature flags to separate deploying code from releasing a feature'
  - 'Plan a rollback, including the database side, and track delivery health with the four standard metrics'
opener:
  story: |
    A payments app has a small bug: for people with a name longer than 30 characters, the pay button does nothing. A developer fixes it with a two-line change on a Friday evening and pushes it live by hand, as the team always did.

    At 2 a.m. the phones start ringing. The two-line fix had an unrelated side effect, and nobody can pay at all. The team spends four hours working out which of the 300 changes in that release was the culprit.

    Now think of a big shopping festival, with new code going out every few minutes and almost nobody noticing. How is that even possible?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A conveyor of commits passing through test gates, with a small share of users receiving the new version first"><g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:1.5"><rect x="14" y="40" width="54" height="34" rx="6"/><rect x="92" y="40" width="54" height="34" rx="6"/><rect x="170" y="40" width="54" height="34" rx="6"/><rect x="248" y="40" width="54" height="34" rx="6"/></g><g style="font-size:11px;fill:var(--ink)"><text x="26" y="62">Build</text><text x="106" y="62">Test</text><text x="180" y="62">Stage</text><text x="256" y="62">Live</text></g><g style="fill:none;stroke:var(--muted);stroke-width:1.5"><path d="M70 57 L90 57"/><path d="M148 57 L168 57"/><path d="M226 57 L246 57"/></g><text x="14" y="26" style="font-size:11px;fill:var(--muted)">every commit, automatically</text><text x="14" y="124" style="font-size:11px;fill:var(--muted)">then to users, a few at a time</text><g style="fill:var(--c)"><circle cx="40" cy="150" r="5"/></g><g style="fill:var(--muted);opacity:.5"><circle cx="64" cy="150" r="5"/><circle cx="88" cy="150" r="5"/><circle cx="112" cy="150" r="5"/><circle cx="136" cy="150" r="5"/><circle cx="160" cy="150" r="5"/><circle cx="184" cy="150" r="5"/><circle cx="208" cy="150" r="5"/><circle cx="232" cy="150" r="5"/><circle cx="256" cy="150" r="5"/><circle cx="280" cy="150" r="5"/></g><text x="14" y="176" style="font-size:10px;fill:var(--muted)">1 in 100 first, watching errors</text><path d="M30 214 L290 214" style="stroke:var(--bad);stroke-width:2;stroke-dasharray:6 4;fill:none"/><path d="M40 208 L30 214 L40 220" style="stroke:var(--bad);stroke-width:2;fill:none"/><text x="60" y="206" style="font-size:10px;fill:var(--bad)">one switch to roll back</text></svg>'
life:
  - 'Apps on your phone update quietly every week; behind each update is a pipeline that built, tested and staged it.'
  - 'A new feature that appears for your friend but not for you is usually a canary or a feature flag, not a different app.'
  - 'Big sales and match-day services freeze risky changes, but still ship small fixes through the same pipeline.'
  - 'A manufacturing line runs the same way: inspect at each station and stop the line when something is wrong, instead of finding the defect at the customer.'
models:
  - name: 'Small batches'
    text: 'Moving 10 boxes ten times is safer than moving 100 once: easier to see what dropped. Whenever a change is risky, cut it into smaller steps you can check one by one.'
  - name: 'Test a little before you bet it all'
    text: 'A pilot, a trial run or a taste before ordering the whole dish limits the cost of being wrong. Expose a few people first, watch, then widen.'
  - name: 'Make undo cheap'
    text: 'Decisions you can reverse cheaply can be made fast. Before taking a step, ask how you would undo it, and make that path easy.'
links:
  - leaf: 'cs/errors-and-testing'
    name: 'Errors and testing'
    same: 'The pipeline is where tests run automatically for every change, so the habit of writing tests pays off on each commit.'
    differs: 'Testing asks "does the code do what we expect?" before release; canaries and monitoring ask "does it behave in the real world?" after release.'
  - leaf: 'cs/git-and-the-command-line'
    name: 'Git and the command line'
    same: 'A pipeline starts from a git push or a merged pull request, and each build is tied to one commit.'
    differs: 'Git records history; the pipeline decides which history reaches users.'
  - leaf: 'cs/load-balancing'
    name: 'Load balancing'
    same: 'Blue-green and canary releases work by changing how a load balancer splits traffic between old and new versions.'
    differs: 'Usual load balancing spreads load fairly; a canary spreads it unevenly on purpose.'
next:
  q: 'You released to 1% of users and the canary "looks healthy". How do you actually know? What numbers do you watch, and why does an average hide the very users who are hurting?'
  leaf: 'cs/observability'
  name: 'Logs, metrics and tracing'
symbols:
  - s: 'CI'
    means: 'continuous integration: merge often, build and test every change automatically'
  - s: 'CD'
    means: 'continuous delivery (always releasable) or continuous deployment (released automatically)'
  - s: 'Pipeline'
    means: 'the automatic chain of steps from commit to production'
  - s: 'Artifact'
    means: 'the built, versioned package (for example a container image) that gets released'
  - s: 'f'
    means: 'share of users who see the canary (a fraction between 0 and 1)'
  - s: 'N'
    means: 'total number of users (count)'
---

:::hook
q: Here's the puzzle. Which is safer for users: one release a month with 600 changes, or 50 releases a day with a handful of changes each?
options: ["One big monthly release: it is tested thoroughly in one go", "Fifty small releases a day", "They are equally risky"]
answer: 1
right: Right, surprising as it feels. A small change has few suspects, is easy to understand, and is quick to undo. Research by the DORA group found that teams that deploy more often tend to have fewer failures and faster recovery, not more. [Unverified, findings recalled from memory]
wrong: Testing everything in one go sounds careful, but when the monthly release breaks, the culprit hides among 600 changes and the fix takes hours. Small, frequent releases shrink every one of those problems.
:::

## Why shipping hurts {lvl=1 id=s-pain label="Foundations"}

Picture ten people writing chapters of one book, each on their own copy, and meeting after a month to combine them. Chapter 3 refers to a character that chapter 7 renamed. The pages do not fit. The meeting takes days. Software teams call this **integration hell**.

The old cure was to be careful and slow: a release manager, a checklist, a night-time release by hand. It did not work well. Manual steps get skipped, and the larger the release, the more can go wrong at once.

The modern cure is the opposite: do it **often and automatically**, until it is boring. Two ideas carry it:

- **Continuous integration (CI):** everyone merges small changes into the shared code many times a day, and a machine builds and tests the whole project after every merge.
- **Continuous delivery (CD):** once the tests pass, the change is always ready to go live, and getting it there is one automatic, repeatable action.

:::qc lvl=1
q: Why does a bug found five minutes after a commit cost less than one found a month later?
options: ["Because it is a smaller bug", "Because only that one recent change could have caused it, and you remember it", "Because testers work faster in the morning"]
answer: 1
right: Right. The cost of a bug is mostly the time to find its cause. With a fresh, small change, the suspect list has one entry.
wrong: The bug itself is the same size. What changes is how many places you must look and how well you remember the code.
:::

## The pipeline {lvl=2 id=s-pipeline label="SDE-1"}

A **pipeline** is a fixed series of automatic steps. If a step fails, the pipeline stops and tells the author, and nothing after it runs.

:::figure caption="A typical pipeline. Cheap, fast checks come first so that a failure is reported in minutes."
<svg viewBox="0 0 320 124" role="img" aria-label="Stages: build, unit tests, integration tests, deploy to staging, deploy to production, with a red stop at any failure">
<g style="fill:color-mix(in srgb,var(--mat) 12%,var(--surface));stroke:var(--mat);stroke-width:1.4"><rect x="6" y="30" width="54" height="40" rx="6"/><rect x="70" y="30" width="54" height="40" rx="6"/><rect x="134" y="30" width="54" height="40" rx="6"/><rect x="198" y="30" width="54" height="40" rx="6"/><rect x="262" y="30" width="52" height="40" rx="6"/></g>
<g style="font-size:10px;fill:var(--ink)"><text x="18" y="54">Build</text><text x="80" y="48">Unit</text><text x="82" y="60">tests</text><text x="140" y="48">Integ.</text><text x="142" y="60">tests</text><text x="205" y="48">Staging</text><text x="272" y="48">Prod</text></g>
<g style="stroke:var(--muted);stroke-width:1.4;fill:none"><path d="M60 50 L70 50"/><path d="M124 50 L134 50"/><path d="M188 50 L198 50"/><path d="M252 50 L262 50"/></g>
<text x="6" y="100" style="font-size:10px;fill:var(--muted)">seconds</text><text x="76" y="100" style="font-size:10px;fill:var(--muted)">minutes</text><text x="136" y="100" style="font-size:10px;fill:var(--muted)">minutes+</text><text x="202" y="100" style="font-size:10px;fill:var(--bad)">any red step</text><text x="202" y="112" style="font-size:10px;fill:var(--bad)">stops it</text>
</svg>
:::

Each stage guards against a different failure:

| Stage | What it does | Catches |
|---|---|---|
| Build | Compiles code, installs dependencies, makes the **artifact** | Syntax errors, missing packages |
| Unit tests | Tests small pieces in isolation | Logic mistakes |
| Integration tests | Tests pieces working together, with a real test database | Wrong assumptions between parts |
| Staging | Runs the artifact in a copy of production | Configuration and environment surprises |
| Production | Releases gradually (next sections) | What no test could predict |

Pipelines are usually described in a short file stored with the code. A sketch in the style of common CI tools:

```yaml
on: push
jobs:
  test:
    steps:
      - run: pip install -r requirements.txt
      - run: pytest
  deploy:
    needs: test           # runs only if tests pass
    steps:
      - run: ./deploy.sh staging
```

Two rules matter most. **Build once**: make the artifact a single time and promote that same file through staging to production, so that what you tested is exactly what you ship. And **keep it fast**: a pipeline that takes an hour gets bypassed. Slow or **flaky** tests (that pass and fail at random) teach people to ignore red, which is worse than no tests.

:::qc lvl=2
q: A test fails at random about one run in ten, and the team just reruns the pipeline. What is the real damage?
options: ["None, reruns are free", "People stop trusting red builds, so real failures get ignored", "The artifact is rebuilt each time, so it differs"]
answer: 1
right: Right. A pipeline is useful only while a red result means "something is truly wrong". Fix or quarantine flaky tests.
wrong: The cost is not machine time but trust. Think about what a developer does the day a genuine failure looks like another flake.
:::

## Releasing gently {lvl=3 id=s-release label="SDE-2"}

Passing tests is not the same as safe in production. So the last step is a careful release, not a leap. Three common ways:

| Strategy | How it works | Good for | Cost |
|---|---|---|---|
| **Rolling** | Replace machines a few at a time | Everyday releases | Two versions run side by side briefly |
| **Blue-green** | Keep the old fleet (blue) running, start the new one (green), then switch all traffic; switch back to undo | Fast, clean rollback | Pay for two full fleets during the switch |
| **Canary** | Send a small share of real users to the new version, watch, then widen: 1%, 5%, 25%, 100% | Risky changes | More steps; needs good monitoring |

A **canary** is named after the bird once taken into mines to warn of bad air. The idea is that if the new version is bad, only a few users find out. The harm in the worst case is the blast radius $f \times N$: with a million users and a 1% canary, 10,000 people are exposed rather than a million.

But a canary only helps if something is **comparing it with the old version**. You watch error rate, response time and business numbers (orders, payments) for the canary against the rest, and the pipeline automatically stops and rolls back if the canary is clearly worse. Which numbers to trust is the next lesson.

:::qc lvl=3
q: A change touches the payment path for a million users. Which release style limits the harm best?
options: ["Rolling over all machines in one go", "Canary to 1% with automatic rollback", "Deploy at night when fewer people are online"]
answer: 1
right: Right. A 1% canary exposes about 10,000 users instead of a million, and automatic comparison stops it quickly. Night-time only lowers traffic; it does not limit who is hurt.
wrong: The goal is to limit how many users can be affected before you notice. Which option exposes the fewest at first?
:::

## Feature flags: deploy is not release {lvl=3 id=s-flags label="SDE-2"}

A **feature flag** is an if-statement whose answer can be changed while the program is running, without a new deploy.

```python
def checkout(user, cart):
    if flags.is_on("new_payment_flow", user):   # looked up from a config service
        return new_payment_flow(user, cart)
    return old_payment_flow(user, cart)
```

This separates two decisions that used to be one. **Deploy** puts code on the servers (dormant behind the flag). **Release** turns the feature on for people. You can deploy on a quiet Tuesday and release to 1% on Wednesday, to your own staff first, to one city, then to everyone. If it goes wrong, switching the flag off takes seconds, much faster than a rollback.

Flags have a cost. Every flag doubles the paths to test, and **stale flags** left in code for months become confusing bugs. Treat each release flag as temporary: give it an owner and a removal date, and delete it once the feature is at 100%.

## Rollbacks and the database {lvl=3 id=s-rollback label="SDE-2"}

Code can be swapped back in seconds: redeploy the previous artifact, or flip a flag. Data cannot. If version 2 renamed a database column and wrote new rows, the old code no longer understands them, and going back may lose or corrupt data.

The standard solution is **expand and contract**, which spreads a risky change over several safe releases:

1. **Expand:** add the new column alongside the old one. Both versions of the code still work.
2. **Migrate:** the new code writes both columns; copy old data across.
3. **Switch:** read from the new column. If wrong, roll back freely, since the old column is still current.
4. **Contract:** after a safe period, remove the old column.

Another habit: sometimes **rolling forward** (shipping a quick fix) is faster than rolling back, but only if your pipeline is fast enough to make that safe. Decide the rule before the outage, not during it.

:::qc lvl=3
q: A release renames a database column and the new code is bad. Why can you not simply redeploy the old code?
options: ["Old code cannot be stored", "Rows written in the new shape, or the missing old column, break the old code", "Pipelines never allow rollbacks"]
answer: 1
right: Right. Code is replaceable; data is not. Expand and contract keeps both shapes working until you are sure.
wrong: Think about what the old code expects to find in the database after the change has already run.
:::

## Measuring delivery, and the pipeline as a target {lvl=4 id=s-lead label="SDE-3"}

How do you know whether a team's delivery is healthy? The DORA research proposed four measures [Unverified: details from memory]:

| Measure | Question it answers |
|---|---|
| **Deployment frequency** | How often do we release? |
| **Lead time for changes** | How long from commit to production? |
| **Change failure rate** | What share of releases cause a problem? |
| **Time to restore** | How fast do we recover when one does? |

The first two measure speed, the last two measure stability. The research claims they tend to move together, so speed need not cost safety. [Inference: a correlation, not a guarantee for any one team.] Use them to find bottlenecks, not to rank people: a team judged on deployment count will split changes into pointless pieces.

At scale, leading a pipeline means thinking about it as a **system under attack**, because it can write to production:

- **Secrets** (keys, passwords) must come from a secrets store, never from the repository, and each stage should hold only the access it needs.
- **Supply chain:** your build pulls in other people's code. Pin versions, scan dependencies, and sign artifacts so that production runs only what your pipeline built.
- **Trunk-based development:** short-lived branches merged to one main line, with flags hiding unfinished work, rather than long-lived branches that bring back integration hell.
- **Automated canary analysis:** statistical comparison of canary and baseline, with automatic abort, so judgement does not depend on someone staring at a dashboard.
- **Release freezes and error budgets:** if a service has used up its allowed unreliability (see Reliability, failures and on-call), slow risky releases until it recovers.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Merge small changes often and test each one automatically; problems found early are cheap. {lvl=1}
2. A pipeline runs build, tests, staging and production in order and stops at the first red step. {lvl=2}
3. Build the artifact once and promote that same file; keep the pipeline fast and tests trustworthy. {lvl=2}
4. Blue-green flips all traffic and flips back; a canary exposes a few users first; rolling replaces gradually. {lvl=3}
5. Feature flags separate deploying code from releasing a feature and give a seconds-fast off switch. {lvl=3}
6. Code rolls back easily, data does not: use expand and contract for database changes. {lvl=3}
7. Track deployment frequency, lead time, change failure rate and time to restore; secure the pipeline itself. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A green build means the tests you wrote passed, not that the release is safe: still release gradually. {lvl=1}
- Reruns hide flaky tests; fix or quarantine them, or nobody believes red any more. {lvl=2}
- Rebuilding for each environment means production runs something that was never tested. {lvl=2}
- Flags left in code become dead paths and surprise bugs; give each one an owner and an expiry. {lvl=3}
- A rollback plan that ignores database changes is not a plan. {lvl=3}
- Never rank people by release counts or lines changed; the metric will be gamed. {lvl=4}
:::
