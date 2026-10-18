---
title: Work done by a force
summary: Why holding a heavy bucket still counts as zero work in physics, and the one rule that tells you when a force really does something.
ncert: ["Class 9 Science · Ch 7 Work, Energy, and Simple Machines (§7.1)", "Class 11 Physics · Ch 5 Work, Energy and Power (§5.1–5.3, §5.5)"]
up_to: Olympiad
builds_on: [Momentum and the second law, Vectors in motion, Motion graphs]
notes_prompt: Explain to a friend why a weightlifter holding a barbell steady does no work on it, yet is exhausted, and why a force at right angles to the motion does no work either.
margin:
  - kind: history
    title: History
    text: The unit is named after James Prescott Joule, who showed in the 1840s that a falling weight stirring water warms it by a fixed amount per joule of work. The word "work" itself is usually credited to the French engineer Gaspard-Gustave Coriolis around 1829 [Unverified].
  - kind: tip
    title: Exam favourite
    text: "Before computing, ask the three-way question: does the force help the motion, fight it, or ignore it (right angles)? That fixes the sign, and the sign is where most marks are lost. Work is a scalar, so signed works just add."
  - kind: olympiad
    title: Olympiad link
    text: "Work is force times the displacement of the point where the force acts. The two forces of a third-law pair are equal and opposite, but their works add up to force times the relative displacement of the two bodies. That sum is zero for bodies that move together and negative, the heat produced, when they slip."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics (10th ed.)", ref: "Ch 7 Kinetic Energy and Work: §7-2 Work and kinetic energy, §7-5 Work done by a general variable force" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch 13 Work and Potential Energy (A) [Unverified chapter number]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 8 Work and Energy [Unverified]" }
cards:
  - { front: "When does a force do work on an object?", back: "Only when the object moves and the force has a part along the motion. Work = (part of the force along the motion) × (distance moved)." }
  - { front: "Write work for a constant force at an angle.", back: 'W = F d cos θ, where θ is the angle between the force and the displacement. It is a dot product, W = F·d.' }
  - { front: "Sign of the work when the force and the motion point opposite ways?", back: "Negative (θ = 180°, cos θ = −1). Friction on a sliding body, and gravity on a rising one, do negative work." }
  - { front: "Work done by a force perpendicular to the motion?", back: "Zero, because cos 90° = 0. Examples: the string tension on a whirled stone, the normal force on a block sliding along a fixed table." }
  - { front: "How do you find work when the force changes with position?", back: 'Area under the force–position graph, W = ∫ F dx (area below the axis counts negative).' }
  - { front: "What is 1 joule?", back: "The work done by a force of 1 N moving its object 1 m along the force. Lifting an apple (about 100 g) by 1 m takes about 1 J." }
core:
  idea: 'A force does work only on an object that moves, and only through the part of the force that points along the motion. Work is that part multiplied by the distance moved. It is positive if the force helps the motion, negative if it fights it, and zero if it is at right angles.'
  formulas:
    - tex: 'W = F\,d\cos\theta = \vec F\cdot\vec d'
      label: 'Work done by a constant force'
    - tex: 'W = \int_{x_1}^{x_2} F\,dx'
      label: 'Work done by a force that changes along a line (area under the F–x graph)'
    - tex: 'W_{\text{net}} = W_1 + W_2 + W_3 + \cdots'
      label: 'Works of different forces add as plain numbers'
  conditions:
    - 'Constant force for the first formula; for a changing force, add up small steps (the integral)'
    - 'd is the displacement of the point where the force acts, measured in one chosen frame; work is not the same in every frame'
    - 'Work is a scalar: it has a size and a sign but no direction'
  sign: 'Positive when F has a component along the motion (θ < 90°), negative when against it (θ > 90°), zero at right angles (θ = 90°) or when nothing moves.'
outcomes:
  - 'Say whether a force does positive, negative or zero work, and why holding a load still does none'
  - 'Compute work for a constant force at any angle, including the vector form'
  - 'Find work from the area under a force–position graph, and from an integral'
  - 'Add the works of several forces on one body, and use that to check a steady-speed motion'
  - 'Explain why third-law partners do not do cancelling work, and why work depends on the watcher'
opener:
  story: |
    Hold a full bucket of water out at arm's length for a minute. By the end your arm is shaking and you are properly tired. Now picture a friend giving a stalled scooter a hard shove for ten metres. Who did more work?

    Ask a physicist and you get a surprising answer. Your friend did a lot of work. You, holding the bucket, did exactly **zero**. It does not matter how much your arm burns.

    That sounds like cheating, so the word "work" must mean something different in physics than it does in the office. What does it mean? And why would anyone want a word under which the exhausted bucket-holder has done nothing?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Left: a held block that does not move, zero work. Right: a pushed block that moves a distance d, work is force times distance"><line x1="160" y1="26" x2="160" y2="222" style="stroke:var(--muted);stroke-dasharray:4 5"/><rect x="50" y="86" width="50" height="40" rx="3" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><line x1="75" y1="84" x2="75" y2="46" style="stroke:var(--chem);stroke-width:3"/><path d="M69 54 L75 42 L81 54Z" style="fill:var(--chem)"/><line x1="75" y1="128" x2="75" y2="164" style="stroke:var(--ink);stroke-width:2"/><path d="M70 158 L75 170 L80 158Z" style="fill:var(--ink)"/><text x="86" y="62" style="font-size:12px;fill:var(--ink)">force</text><text x="86" y="156" style="font-size:12px;fill:var(--muted)">weight</text><text x="30" y="198" style="font-size:12px;fill:var(--muted)">held still, no motion</text><text x="52" y="220" style="font-size:14px;font-weight:600;fill:var(--ink)">W = 0</text><line x1="170" y1="160" x2="312" y2="160" style="stroke:var(--ink);stroke-width:2"/><rect x="182" y="120" width="50" height="40" rx="3" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><line x1="234" y1="140" x2="288" y2="140" style="stroke:var(--chem);stroke-width:3"/><path d="M280 134 L294 140 L280 146Z" style="fill:var(--chem)"/><text x="248" y="130" style="font-size:12px;fill:var(--ink)">force</text><line x1="182" y1="182" x2="294" y2="182" style="stroke:var(--muted)"/><line x1="182" y1="176" x2="182" y2="188" style="stroke:var(--muted)"/><line x1="294" y1="176" x2="294" y2="188" style="stroke:var(--muted)"/><text x="232" y="199" style="font-size:12px;fill:var(--muted)">d</text><text x="198" y="220" style="font-size:14px;font-weight:600;fill:var(--ink)">W = F d</text></svg>'
life:
  - 'A porter walking along a level platform with a suitcase on his head does no work on the suitcase, yet he is tired: his muscles burn fuel just to keep pushing up.'
  - 'Pulling a wheeled suitcase by its long handle works better than by a short one: more of your pull points along the floor.'
  - 'The brakes of a bicycle do negative work on it, and the rim and pads get warm: that is where the lost motion goes.'
  - 'A satellite in a circular orbit is pulled by gravity all the time, yet gravity does no work on it, because the pull is always at right angles to its motion.'
  - 'Your electricity bill counts kilowatt-hours; one kilowatt-hour is 3.6 million joules, the work a 1 kW heater delivers in an hour.'
models:
  - name: 'Effort is not progress'
    text: 'Physics separates how hard you push from how far it gets you. Holding still is tiring and delivers nothing; a gentle push over a long distance delivers a lot. In any project, ask what actually moved, not how busy it felt.'
  - name: 'Only the aligned part counts'
    text: 'A slanted push is worth its component along the direction you want to go. Aim your effort: the part at right angles is wasted, and the part against you is cost.'
  - name: 'Area under the rate gives the total'
    text: 'The area under a force-versus-distance graph is work, as the area under a speed-versus-time graph is distance. When a quantity changes along the way, the total is the sum of tiny rectangles.'
links:
  - leaf: 'phy/motion-graphs'
    name: 'Motion graphs'
    same: 'Area under a graph gives a total: under the velocity–time graph it is displacement, under the force–position graph it is work. Both come from adding thin strips.'
    differs: 'On a velocity–time graph the horizontal axis is time; here it is distance, so the area is energy transferred, not distance travelled.'
  - leaf: 'phy/potential'
    name: 'Electric potential'
    same: 'Electric potential difference is work per unit charge: the work done moving a charge across a gap is the charge times the potential difference. The same definition of work applies.'
    differs: 'Here the force can be anything; in the electric case it is the electric force only, which is a special (conservative) kind of force.'
next:
  q: 'You shove a trolley and do 100 J of work on it. The trolley now moves faster. Where did the 100 J go: is it stored in the trolley, and can you get it back?'
  leaf: 'phy/kinetic-and-potential-energy'
  name: 'Kinetic and potential energy'
symbols:
  - s: 'W'
    means: 'work done by a force (joule, J)'
  - s: 'F'
    means: 'the force (newton, N)'
  - s: 'd'
    means: 'displacement, the distance moved by the object (metre, m)'
  - s: '\theta'
    means: 'angle between the force and the displacement (degrees or radians)'
  - s: 'x'
    means: 'position along a straight line (m)'
  - s: 'k'
    means: 'spring constant, how many newtons per metre of stretch (N/m)'
  - s: 'J'
    means: 'joule, the unit of work and energy: 1 J = 1 N m'
  - s: '\vec F\cdot\vec d'
    means: 'dot product: F d cos θ, or F_x d_x + F_y d_y + F_z d_z (J)'
---

:::hook
q: A porter carries a 20 kg suitcase along a level platform at a steady walking pace. How much work does his upward holding force do on the suitcase?
options: ["A lot, the suitcase is heavy", "None at all", "It depends on how long the platform is"]
answer: 1
right: Right. His force points up, the suitcase moves sideways, and a force at right angles to the motion does no work however big it is. His muscles tire for a different reason, which you will see below.
wrong: Ask which way the force points and which way the suitcase moves. He pushes up; the suitcase moves along the platform. A force that points one way cannot add energy to something moving at right angles to it.
:::

## Work is effort that gets somewhere {lvl=1 id=s-def label="Class 9"}

Physics keeps the everyday word "work" but gives it a strict meaning. A force does work on an object only if the object **moves in the direction the force pushes**. The harder the push and the farther it goes, the more work.

Take the stalled scooter. Your friend pushes with 100 N (about the weight of a 10 kg bag) and the scooter rolls 10 m. The work is 100 N times 10 m, which is 1000 units of work. The unit is called the **joule**, J, so that is 1000 J. In letters,

$$W = F\,d.$$

Read it as: work is force times the distance moved along the force. Here $W$ is the work in joules, $F$ the force in newtons and $d$ the distance in metres. One joule is a force of 1 N moving its object 1 m.

How big is a joule? Lifting an apple of 100 g by 1 m takes about $0.1 \times 9.8 \times 1 \approx 1$ J. Lifting a 20 kg water can onto a shelf 1.5 m up takes about 300 J.

So why is the bucket-holder's work zero? The bucket does not move, so $d = 0$ and $W = F \times 0 = 0$. The arm still gets tired, because muscle fibres cannot "just hold": they keep twitching and burning fuel to keep pushing. The body spends energy; the bucket receives none.

:::qc lvl=1
q: A force of 50 N pushes a box 4 m along the floor, in the direction of the push. How much work is done?
options: ["12.5 J", "54 J", "200 J"]
answer: 2
right: Right. Force times distance along the force, 50 × 4 = 200 J.
wrong: Work is force times distance, so multiply the two numbers: 50 N × 4 m.
:::

## Plus, minus, zero {lvl=1 id=s-sign label="Class 9"}

A force can help the motion, fight it, or ignore it. That gives three cases.

- **Help** (force and motion in the same direction): positive work. The object gains energy.
- **Fight** (force opposite to the motion): negative work. The object loses energy.
- **Ignore** (force at right angles to the motion, or no motion): zero work.

| Situation | Force on the object | Work |
|---|---|---|
| You lift a bucket from a well | your pull, upward | positive |
| Same lift, gravity | gravity, downward, while the bucket rises | negative |
| A box slides to a stop | friction, backward | negative |
| An apple falls | gravity, downward, while the apple falls | positive |
| Porter on a level platform | support force, upward, motion sideways | zero |
| Barbell held still | her lift, upward, no motion | zero |
| Stone whirled on a string | tension, inward, motion along the circle | zero |

Negative work is not a punishment; it is a **withdrawal**. A goalkeeper catching a ball pushes against its motion with 200 N while her hand gives way 15 cm: she does $200 \times (-0.15) = -30$ J on the ball. The ball has lost 30 J, and that is what "stopping it" means.

:::note title="Equal forces, unequal work" tone=info
By Newton's third law, a cyclist skidding to a stop pushes on the road with the same 200 N that the road pushes on the cyclist. But the road does not move, so the work the cyclist does on the road is zero, while the road does $-2000$ J on a cyclist who skids 10 m. Forces come in equal and opposite pairs; works need not.
:::

:::qc lvl=1
q: You lower a bucket into a well at a steady speed, holding the rope. What is the sign of the work your pull does on the bucket?
options: ["Positive", "Negative", "Zero"]
answer: 1
right: Right. Your pull is upward, the bucket moves downward, so you fight the motion: negative work. Gravity does the positive work, and the two cancel because the bucket does not speed up.
wrong: Which way does your pull point, and which way does the bucket move? Opposite ways means you fight the motion.
:::

## When the push is slanted {lvl=2 id=s-angle label="Class 11"}

Pulling a sled with a rope that points upward at an angle is the normal case. Suppose the pull is 100 N at $60^\circ$ above the ground and the sled moves 10 m along the ground. Not all 100 N helps: part of it lifts the rope, not the sled forward. The forward part is $100 \times \cos 60^\circ = 50$ N, so the work is $50 \times 10 = 500$ J, not 1000 J. Half of the effort counted.

:::figure caption="A slanted pull splits into a part along the motion (F cos θ, which does the work) and a part across it (F sin θ, which does none)."
<svg viewBox="0 0 360 200" role="img" aria-label="A sled pulled by a rope at angle theta; the force splits into a horizontal and a vertical part">
<defs><marker id="wdf1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="wdf2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--muted)"/></marker></defs>
<line class="ln" x1="20" y1="150" x2="340" y2="150"/>
<rect class="m2" x="60" y="120" width="60" height="30" style="stroke:var(--ink);stroke-width:1.4"/>
<line class="ray" x1="120" y1="130" x2="224" y2="70" marker-end="url(#wdf1)"/>
<line class="faint" x1="224" y1="130" x2="224" y2="70"/>
<line class="faint" x1="120" y1="130" x2="224" y2="130"/>
<path class="ln" d="M150 130 A30 30 0 0 0 146 115"/>
<text class="k" x="156" y="126">θ</text>
<text class="k" x="168" y="94">F</text>
<text x="232" y="104">F sin θ: no work</text>
<text x="124" y="168">F cos θ: the useful part</text>
<line x1="60" y1="188" x2="160" y2="188" style="stroke:var(--muted);stroke-width:1.5" marker-end="url(#wdf2)"/>
<text x="168" y="192">the sled moves this way, d</text>
</svg>
:::

In general, with $\theta$ the angle between the force and the direction of motion,

$$W = F\,d\cos\theta.$$

Read it as: the work is the force, times the distance, times how much of the force lines up with the motion. At $\theta = 0^\circ$ it is $Fd$ (all of the force helps); at $90^\circ$ it is zero; at $180^\circ$ it is $-Fd$ (all of it fights).

There is a tidy way to write this when forces and displacements are given by components. The **dot product** of two vectors multiplies their matching components and adds:

$$W = \vec F\cdot\vec d = F_x d_x + F_y d_y + F_z d_z.$$

Read it as: east part times east distance, plus north part times north distance, plus up part times up distance. For $\vec F = (3, 4)$ N and $\vec d = (2, 1)$ m, the work is $3\times2 + 4\times1 = 10$ J, with no angle needed. This is the same dot product met in the vectors lesson.

:::qc lvl=2
q: A stone is whirled round a horizontal circle at a steady speed. How much work does the string tension do in one full turn?
options: ["Tension × circumference", "Zero", "Negative, since it pulls inward"]
answer: 1
right: Right. At every instant the tension points to the centre while the stone moves along the tangent, a right angle, so cos 90° = 0 at every step. This is why the speed never changes.
wrong: At each instant, compare the direction of the tension (towards the centre) with the direction of the stone's motion (along the tangent). What angle is that?
:::

## When the force keeps changing {lvl=2 id=s-area label="Class 11"}

Pushing a heavy trunk across a platform, you start strong and then tire. The force falls as the trunk moves, so "force times distance" has no single force to use. The fix: cut the trip into tiny steps. On each step the force hardly changes, so its work is that step's force times that step's length. On a graph of force against position this is the area of a thin strip. Add all the strips and you get the **area under the graph**.

:::figure caption="A force of 40 N for the first 6 m, then falling steadily to 10 N at 14 m. The work is the area: a rectangle (240 J) plus a trapezium (200 J) = 440 J."
<svg viewBox="0 0 360 200" role="img" aria-label="Force against position graph: constant then falling, area shaded">
<line class="ln" x1="40" y1="160" x2="340" y2="160"/>
<line class="ln" x1="40" y1="160" x2="40" y2="20"/>
<polygon class="m2" points="40,160 40,40 100,40 180,130 180,160" style="stroke:var(--phy);stroke-width:2"/>
<line class="faint" x1="100" y1="40" x2="100" y2="160"/>
<text x="46" y="106" class="k">240 J</text>
<text x="112" y="124" class="k">200 J</text>
<text x="8" y="44">40 N</text>
<text x="8" y="134">10 N</text>
<text x="92" y="176">6 m</text>
<text x="170" y="176">14 m</text>
<text x="46" y="30">F (N)</text>
<text x="300" y="176">x (m)</text>
</svg>
:::

So the 40 N push for 6 m gives $40\times6 = 240$ J, and the falling part gives a trapezium of width 8 m with heights 40 N and 10 N: $\tfrac12(40+10)\times8 = 200$ J. The total is 440 J. A force pulling against the motion makes an area **below** the axis, which counts negative.

When the force has a formula, the "add the strips" step is what the integral does:

$$W = \int_{x_1}^{x_2} F\,dx.$$

Read it as: add up force times a tiny step, from the start position to the end position. For $F = 2x + 4$ newtons from $x = 0$ to $x = 3$ m, the graph is a trapezium with heights 4 N and 10 N, so the area is $\tfrac12(4+10)\times3 = 21$ J. The integral agrees: $\left[x^2 + 4x\right]_0^3 = 9 + 12 = 21$ J.

A spring is the classic changing force. Stretching it by $x$ takes a pull that grows steadily from 0 to $kx$, where $k$ is the spring constant (how many newtons for each metre of stretch). The graph is a triangle, so the work is $\tfrac12\,(kx)\,x = \tfrac12 kx^2$. For $k = 200$ N/m and a stretch of 0.1 m the pull ends at 20 N and the work is $\tfrac12\times20\times0.1 = 1$ J.

:::qc lvl=2
q: A force pulls a cart in a straight line. It rises steadily from 0 to 8 N over the first 3 m. How much work does it do?
options: ["24 J", "12 J", "8 J"]
answer: 1
right: Right. The graph is a triangle with base 3 m and height 8 N, so the area is ½ × 3 × 8 = 12 J. Using the final force 8 N for the whole distance would double-count.
wrong: The force is not constant, so do not multiply by 8 N. The graph is a triangle: area = ½ × base × height.
:::

## Every force keeps its own account {lvl=3 id=s-net label="JEE"}

A body usually feels several forces at once: a pull, gravity, friction, a normal force. Each does its own work, with its own sign, and since work is a scalar the **net work** is just the sum of the separate works:

$$W_{\text{net}} = W_1 + W_2 + W_3 + \cdots$$

Read it as: add the signed works of all the forces. It equals the work of the single net force, so you may use either route.

:::worked title="A block dragged up a rough slope at steady speed"
A 5 kg block is pulled 4 m up a $30^\circ$ slope by a force along the slope, at steady speed. The slope is rough with $\mu = 0.2$. Take $g = 9.8$ m/s².

Gravity along the slope is $mg\sin30^\circ = 24.5$ N and the normal force is $mg\cos30^\circ = 42.4$ N, so friction is $0.2\times42.4 = 8.5$ N. At steady speed the pull balances both: $24.5 + 8.5 = 33.0$ N.

| Force | Work over 4 m |
|---|---|
| Pull (along the motion) | $+33.0 \times 4 = +131.9$ J |
| Gravity (component down the slope) | $-24.5\times4 = -98.0$ J |
| Friction (down the slope) | $-8.5\times4 = -33.9$ J |
| Normal force (at right angles) | $0$ |
| **Sum** | **0** |

The net work is zero exactly because the speed does not change. The next lesson says why.
:::

The ledger habit pays off in every problem: list the forces, give each its sign, add. Zero net work does not mean "no forces". It means the gains and the withdrawals cancel.

## Work comes in pairs, and depends on the watcher {lvl=4 id=s-pairs label="Olympiad"}

Two subtle facts about work are favourites with problem setters.

**First: the work of a third-law pair.** If body A pushes B with force $\vec F$, B pushes A with $-\vec F$. The work done on B is $\vec F\cdot\vec d_B$ and on A is $-\vec F\cdot\vec d_A$, so the total is $\vec F\cdot(\vec d_B - \vec d_A)$: the force times the **relative** displacement. If the two surfaces move together (a rigid contact, a rolling wheel), the total is zero and nothing is lost. If they slip, the total is negative, and the loss is the heat produced. For the skidding cyclist the road does not move and the tyre slips 10 m, so the total is $-200\times10 = -2000$ J: exactly what we found earlier.

**Second: work depends on who is watching.** The force on an object is the same for every observer who moves at steady velocity, but the displacement is not. A parcel on the floor of an accelerating lorry has friction pushing it forward. For an observer on the road the parcel moves forward, so friction does positive work on it. For an observer sitting in the lorry the parcel does not move at all, so the same force does zero work. Work is therefore always "work in a stated frame". The problems for this lesson make you compute both views.

:::qc lvl=4
q: A crate sits on the floor of a lorry that speeds up smoothly. The crate does not slip. As seen from the road, the friction on the crate does
options: ["positive work", "negative work", "zero work"]
answer: 0
right: Right. Static friction is the only horizontal force on the crate and it points forward, along the crate's motion as the road sees it. So friction can do positive work; it is not always a "loss".
wrong: Friction is the only horizontal force, and the crate speeds up, so the force must point forward. Which way does the crate move, as seen from the road?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A force does work only when its object moves; work is the part of the force along the motion times the distance, measured in joules. {lvl=1}
2. Help the motion: positive. Fight it: negative. At right angles, or no motion: zero. {lvl=1}
3. $W = Fd\cos\theta = \vec F\cdot\vec d$; only the component along the displacement counts. {lvl=2}
4. For a changing force, work is the area under the force–position graph, $W = \int F\,dx$; a spring stretched by $x$ takes $\tfrac12kx^2$. {lvl=2}
5. Work is a scalar: the net work is the signed sum of each force's work. {lvl=3}
6. Third-law partners do work that sums to force times relative displacement; work depends on the frame. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Tired" does not mean "worked on the object". A held load gets zero work however sore your arm is. {lvl=1}
- Do not use the force's full size on a slanted pull; use $F\cos\theta$, and check whether $\theta$ is measured from the motion. {lvl=2}
- A force at right angles to the motion (tension on a whirled stone, normal force on a fixed table) does no work and cannot change speed. {lvl=2}
- Friction does not always do negative work; on a crate carried along by an accelerating lorry it does positive work. {lvl=2}
- For a graph that dips below the axis, the area below counts negative. {lvl=2}
- Equal and opposite forces do not give equal and opposite works unless the two bodies move together. {lvl=4}
:::
