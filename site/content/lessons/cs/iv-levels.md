---
title: What SDE-1, SDE-2 and SDE-3 are judged on
summary: Levels are about how big and how vague a problem you can own, not how clever your code is. Learn the ladder and how interviews test each rung.
ncert: []
up_to: SDE-3
builds_on: [Telling your stories (STAR), A framework for any design question]
notes_prompt: Explain to a friend why a senior engineer is not just a faster junior engineer, using one example of a problem of each size.
margin:
  - kind: history
    title: Titles differ
    text: 'The label "SDE-1, SDE-2, SDE-3" is common at some large companies; others say Engineer, Senior, Staff, or use numbers. The same title can mean different things at different firms. [Inference]'
  - kind: tip
    title: Aim one level up
    text: 'People are usually promoted for work they already do at the next level. Look at what the level above you owns, and start doing a small piece of it.'
  - kind: olympiad
    title: Interview level equals offer level
    text: 'If you perform at SDE-2 in the loop but your stories show SDE-1 scope, you may get the lower level. Prepare stories to match the level you apply for. [Inference]'
books:
  - { title: "T. Reilly, The Staff Engineer's Path", ref: "levels, scope and influence beyond a single team [Unverified: chapter numbers]" }
  - { title: "W. Larson, Staff Engineer", ref: "the paths and archetypes of senior engineers [Unverified: details]" }
cards:
  - { front: "What mainly separates SDE-1 from SDE-2?", back: "Ownership. An SDE-1 finishes well-defined tasks with some guidance; an SDE-2 owns a feature or service end to end and works through vague requirements." }
  - { front: "What mainly separates SDE-2 from SDE-3?", back: "Scope and influence. An SDE-3 shapes decisions across teams, leads design of larger systems, and raises the engineers around them." }
  - { front: "What four things does a level measure?", back: "Scope (how big), ambiguity (how vague), influence (whose work you shape) and design ownership (who decides how it is built)." }
  - { front: "How does a design round change with level?", back: "SDE-1 may get a small design or none; SDE-2 designs a service with trade-offs; SDE-3 designs systems at scale, handles failure and leads the conversation. [Inference]" }
  - { front: "What is promotion evidence?", back: "A record that you already operate at the next level, for example a project you led across teams, not a list of tasks you completed." }
  - { front: "Is a senior engineer just a faster coder?", back: "No. Speed helps, but the larger gains come from choosing the right problem, reducing risk early and making others effective." }
core:
  idea: 'Engineering levels measure how much uncertainty and how many people you can carry: scope, ambiguity, influence and design ownership grow with each level. Interviews are built to show which rung you already stand on.'
  formulas:
    - tex: '\text{level} \sim \text{scope} + \text{ambiguity} + \text{influence}'
      label: 'A mental model, not arithmetic: all three grow as you move up'
  conditions:
    - 'Companies define levels differently, so treat the ladder as a rough map, not a rulebook'
    - 'Level reflects the problems you own, not your years of experience'
    - 'Performance is judged over time, not in one project'
  sign: 'The commonest mistake is to think seniority means writing harder code. At each step up the problem gets vaguer and wider, and the code often matters less.'
outcomes:
  - 'Describe what SDE-1, SDE-2, SDE-3 and staff are each expected to own'
  - 'Explain how scope, ambiguity, influence and design ownership grow with level'
  - 'Predict how a loop differs between levels'
  - 'Choose stories and design examples that match the level you apply for'
  - 'Describe promotion as evidence of operating at the next level'
opener:
  story: |
    Four engineers sit in the same meeting. A manager says, "Checkout is slow." The first engineer asks, "Which ticket should I fix?" The second says, "Give me a day to find out why, then I will fix it." The third says, "Before I fix anything, I want to know what slow costs us, and whether the cause is in our code or in a partner's." The fourth says, "I have seen this in two other teams. Let me write down one shared fix and ask them to join."

    Same problem, same salary band to the untrained eye, very different jobs. Nobody here is faster than the others at typing. What changed is how big a piece of the world each one is willing to take responsibility for.

    That is what a level is. And once you see it, interviews stop being a mystery: each question is a small test of how big a problem you can carry.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A ladder of four steps, each wider circle showing greater scope"><g style="stroke:var(--ink);stroke-width:2;fill:none"><line x1="60" y1="210" x2="260" y2="210"/><line x1="60" y1="210" x2="60" y2="30"/></g><g style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--ink);stroke-width:1.5"><rect x="70" y="170" width="40" height="40"/><rect x="120" y="130" width="40" height="80"/><rect x="170" y="90" width="40" height="120"/><rect x="220" y="50" width="40" height="160"/></g><g style="fill:none;stroke:var(--c);stroke-width:1.5"><circle cx="90" cy="150" r="8"/><circle cx="140" cy="112" r="16"/><circle cx="190" cy="68" r="26"/><circle cx="240" cy="28" r="36" style="stroke-dasharray:3 3"/></g><g style="font-size:10px;fill:var(--ink)"><text x="76" y="228">SDE-1</text><text x="126" y="228">SDE-2</text><text x="176" y="228">SDE-3</text><text x="224" y="228">Staff</text></g><text x="68" y="20" style="font-size:9px;fill:var(--muted)">circle = size of problem you own</text></svg>'
life:
  - 'A junior doctor treats the patient in front of them; a senior doctor runs the ward and decides how the whole team works.'
  - 'In a cricket team, a player knows his own role, a vice-captain covers the plan for a session, and the captain carries the whole match and the dressing room.'
  - 'In a restaurant, a cook follows the recipe, a sous-chef plans the line for the evening, and the head chef designs the menu and trains the others.'
  - 'A new graduate at a company is given a task; a few years later they are given a goal; later still they are asked what the goals should be.'
  - 'Every family has someone who is asked "what should we do?", not "how do I do this?". That is the same shift.'
models:
  - name: 'Scope grows by widening the problem, not by running faster'
    text: 'A runner covers more distance by running faster; a manager covers more by changing the system others run in. As you move up, leverage matters more than speed. Compare a good teacher with a good textbook.'
  - name: 'Ambiguity is the real currency'
    text: 'Anyone can do a well-specified job. The scarce skill is turning a fuzzy goal ("make checkout better") into clear next steps. Politicians, founders and parents are all paid in this currency.'
  - name: 'Evidence before title'
    text: 'Act at the level you want, in small ways, before you have the title. Organisations tend to promote what they have already seen work, not what they hope will work. [Inference]'
links:
  - leaf: 'cs/iv-star-stories'
    name: 'Telling your stories (STAR)'
    same: 'The stories you tell should show the scope of your level, so the two lessons plan together.'
    differs: 'STAR is the format of a story; levels decide which stories are worth telling.'
  - leaf: 'cs/iv-design-framework'
    name: 'A framework for any design question'
    same: 'The depth you show in a design round is a main signal of your level.'
    differs: 'The framework is the same for all levels; what changes is how deep and how self-directed your answer is.'
  - leaf: 'cs/design-principles-and-patterns'
    name: 'Design principles and patterns'
    same: 'Design ownership at SDE-2 and above rests on judgement about these principles.'
    differs: 'The lesson teaches the principles; levels describe when you are trusted to apply them without a review.'
next:
  q: 'You know what level you are aiming for and how to show it. Then the offer arrives. Base, bonus, shares that vest over four years: how do you compare two offers, and what do you say when it is time to negotiate?'
  leaf: 'cs/iv-offers'
  name: 'Offers and negotiation'
symbols:
  - s: 'SDE-1'
    means: 'software development engineer, first level: a junior or early-career engineer'
  - s: 'SDE-2'
    means: 'second level: an engineer who owns features or services end to end'
  - s: 'SDE-3'
    means: 'third level: a senior engineer who leads design and influences several teams'
  - s: 'staff'
    means: 'a level above senior, with scope across an organisation (titles vary)'
  - s: 'scope'
    means: 'how large the area is that you are responsible for'
  - s: 'ambiguity'
    means: 'how vague or undefined the goal and the path are'
---

:::hook
q: Two engineers each fix 20 bugs in a quarter. One is a promotion candidate and the other is not. What is the most likely difference?
options: ["One types faster", "One fixed bugs that others assigned; the other found the cause that created many of them and removed it", "One works longer hours"]
answer: 1
right: Right. Scope and initiative decide the level, not the count. Removing the cause of a class of bugs, and bringing others along, is operating a level up. (Real promotion criteria differ by company. [Inference])
wrong: Speed and hours help a little. The big step up comes from choosing which problem is worth solving and affecting more than your own tasks.
:::

## What a level is {lvl=1 id=s-what label="Foundations"}

A level is a **label for the size of problem a company trusts you to own**. It is not a measure of intelligence, and it is not simply years of experience. Someone with three years of experience may own bigger problems than someone with seven.

Four things grow as you move up:

- **Scope**: how big an area you are responsible for (a task, a feature, a service, a group of services, an organisation).
- **Ambiguity**: how unclear the problem is when you receive it. A ticket is clear; "improve reliability" is not.
- **Influence**: whose work you shape, from your own to your team's, to several teams', to engineers you never directly meet.
- **Design ownership**: who decides *how* it is built, and who answers if it goes wrong.

Because companies use different names and bars, treat all the descriptions below as a rough map. [Inference]

## The ladder at a glance {lvl=2 id=s-ladder label="SDE-1"}

| Level | Typical owns | Ambiguity | Influence | Design |
|---|---|---|---|---|
| SDE-1 | A well-defined task or small feature | Low: the goal is clear, the path may need help | Your own work | Follows team patterns; designs small pieces with review |
| SDE-2 | A feature or service, end to end | Medium: you turn a vague request into a plan | Your team; you review others' work | Designs a service and explains trade-offs |
| SDE-3 | A system spanning teams, or a large risky project | High: you decide what the right problem is | Several teams; you mentor and set standards | Leads design at scale; chooses between architectures |
| Staff and above | An area across an organisation | Very high: the problem itself must be found | The organisation; you shape strategy | Sets technical direction and avoids repeated mistakes |

This is a model, and real roles blend. Many people are SDE-2 on one skill and SDE-3 on another. [Inference]

:::qc lvl=2
q: A request arrives: "Customers say the app feels slow." Which engineer's response shows the highest ambiguity handling?
options: ["Asks which screen to optimise and by how much", "Collects timings, finds that three screens cause 80 percent of complaints, proposes a plan with milestones, and tells the product manager", "Waits for a ticket"]
answer: 1
right: Right. The second engineer turned a vague complaint into a measured problem and a plan, and kept others informed. That is the central senior skill.
wrong: Asking clarifying questions is good, but the stronger answer goes further and creates the clarity itself.
:::

## How interview loops change {lvl=3 id=s-loops label="SDE-2"}

A loop is the set of interviews for one job. It usually contains coding rounds, a design round, and a behavioural round. What changes with level is the **weight and depth** of each. [Inference: public prep material and experience reports; each company differs.]

| Round | SDE-1 | SDE-2 | SDE-3 and above |
|---|---|---|---|
| Coding | Heavy weight; correct, clean solutions to standard problems | Strong; faster, with trade-offs and edge cases discussed | Still there, but a pass is expected, rarely the deciding signal |
| Design | A small design or object-oriented design, often with hints | A full service design with trade-offs | System design at scale; you drive the discussion, choose the deep dive, discuss failure and cost |
| Behavioural | Learning, teamwork, handling mistakes | Ownership, conflict, delivering a project | Influence, ambiguity, mentoring, decisions with incomplete information |

Notice what is not in the table: a level at which coding stops mattering. Weak coding at any level is a risk, but strong design and stories decide the level you are offered.

Interviewers also watch **how** you work in the room. An SDE-1 asks clarifying questions when stuck. An SDE-2 states assumptions and proceeds. An SDE-3 questions the problem itself ("what are we optimising?"), brings up risks before being asked, and accepts that parts of the answer are uncertain.

## Same problem, four answers {lvl=3 id=s-same label="SDE-2"}

Problem: "The payment service sometimes charges twice." Here is how a response differs by level. (An illustration, not a script.)

- **SDE-1.** Reproduces the bug in a test, finds the missing check, adds it, and writes a regression test. The fix is correct and small.
- **SDE-2.** Finds the cause (retries without an idempotency key), fixes the service end to end, adds monitoring for duplicate charges, and documents the change for the team.
- **SDE-3.** Notices three services retry in different ways, writes a short design proposal for one shared approach, gets the teams to agree, and sets a review checklist for money-moving code.
- **Staff.** Asks why the organisation keeps producing this class of bug, and sponsors a platform fix and a way to catch it in design review for all future services.

In an interview, the same story told at different heights lands at different levels. That is why one story rarely fits every loop: choose the version that shows the scope you want to be hired for.

:::qc lvl=3
q: You have one strong story: you fixed a double-charge bug. You are interviewing for SDE-3. Which version helps most?
options: ["Describe the code change in detail", "Describe how you found the pattern across teams, got agreement, and what changed afterwards for the organisation", "Say you worked hard"]
answer: 1
right: Right. For a senior level, show the wider scope and the people you moved, and give the code only a supporting role.
wrong: Code detail shows you can fix the bug, which is expected. The higher level asks what else you changed beyond your own code.
:::

## Promotion as evidence {lvl=4 id=s-promo label="SDE-3"}

Most companies promote people who have **already been doing the next level's work** for some time, reliably, and can show it. It is rarely a reward for finishing tasks at the current level, however well. [Inference: widely stated in engineering career writing; each company differs.]

What counts as evidence:

1. **A project you led**, with a clear goal, the decisions you made, and the result.
2. **Other people's work improved by yours**: a design review that prevented an outage, a mentee who grew.
3. **A decision under uncertainty**, written down, with the reasoning and what happened.
4. **Sustained**, not one heroic burst: usually across more than one project or half-year.

A practical habit: keep a **brag document**, a private list updated monthly, of what you did, whom it affected and any number you can honestly give. It feeds your promotion case, your performance review and your next interview's story bank.

Sponsors help too. A senior person who has seen your work and can vouch for it matters, but they need material: show your work to people beyond your team.

Finally, a caution about speed. Rushing a level you are not ready for can hurt: you are judged against a harder bar, and the stress may cost you the joy of the craft. Seniority is a means to more interesting problems, not a prize. [Inference: opinion.]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A level is the size of problem you are trusted to own: scope, ambiguity, influence and design ownership. {lvl=1}
2. SDE-1 does defined tasks; SDE-2 owns features end to end; SDE-3 leads across teams; staff shapes an organisation. {lvl=2}
3. Titles and bars differ between companies; treat the ladder as a map, not a rulebook. {lvl=2}
4. Loops weigh coding, design and behaviour differently by level; design and stories grow in weight. {lvl=3}
5. Tell your stories at the height of the level you want. {lvl=3}
6. Promotion rewards evidence that you already work at the next level, sustained over time. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Do not treat years of experience as a level; scope and impact decide. {lvl=1}
- Do not tell small-scope stories for a senior role; either choose a bigger story or tell the same one at a wider height. {lvl=2}
- Do not assume a company's titles match another's; ask about expectations for the level during the process. {lvl=2}
- Do not skip coding preparation at senior level because design matters more; a weak coding round can still sink the loop. {lvl=3}
- Do not wait to be given bigger problems; find one small piece of the next level and start. {lvl=4}
- Do not chase titles at the cost of learning; a smaller title at a place where you grow can be the better trade (see the offers lesson). {lvl=4}
:::
