---
title: Distance and displacement
summary: Why "how far did you go?" has two honest answers, and the one that cares only about where you ended up.
ncert: ["Class 6 Science (Curiosity) · Ch 5 Measurement of Length and Motion (§5.1–5.7)", "Class 9 Science (Exploration) · Ch 4 Describing Motion Around Us (§4.1.1–4.1.2)", "Class 11 Physics · Ch 2 Motion in a Straight Line (§2.1–2.2)"]
up_to: Olympiad
builds_on: [Units and dimensions]
notes_prompt: Explain to a friend why a runner who finishes a full lap of the track has run 400 m but has zero displacement, and when a person's distance and displacement would be equal.
margin:
  - kind: history
    title: History
    text: "Before standard units, lengths came from the body: the finger-width (angula), the cubit, the foot. Different bodies gave different lengths, which is why trade pushed countries towards one system. The metre was first defined in 1790s France as one ten-millionth of the distance from the North Pole to the equator."
  - kind: tip
    title: Exam favourite
    text: "Distance is never negative and never decreases. Displacement can be negative or zero. If a body never turns back, the distance equals the size of the displacement. A round trip always gives zero displacement."
  - kind: olympiad
    title: Olympiad link
    text: "Take N random steps of one metre each, forwards or backwards. The distance walked is N metres, but the typical displacement is only the square root of N metres. Diffusion of smell, heat and ink all follow this root law."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 8 Motion (feynmanlectures.caltech.edu)" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 2 Motion Along a Straight Line, position and displacement [Unverified chapter number]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 3 Rest and Motion: Kinematics [Unverified]" }
cards:
  - { front: "Distance versus displacement in one line each?", back: "Distance is the length of the path actually travelled (a plain amount, never negative). Displacement is the straight arrow from the start to the finish: a size and a direction." }
  - { front: "Formula for displacement along a line?", back: "$\\Delta x = x_f - x_i$: final position minus initial position. It does not care what happened in between." }
  - { front: "When is distance equal to the size of displacement?", back: "Only when the body moves along a straight line without ever turning back. Otherwise distance is larger." }
  - { front: "What is the displacement after a full lap or any round trip?", back: "Zero, because the final position equals the initial position. The distance is the full length of the lap." }
  - { front: "How do you find the distance when a body turns back?", back: "Find the turning points (where the velocity is zero), then add up the sizes of the separate one-way stretches." }
  - { front: "Why must you name a reference point?", back: "A position is only a number measured from somewhere. Change the origin and every position changes, but every displacement stays the same." }
core:
  idea: 'Distance is the length of the path you actually walked, an amount that only grows. Displacement is the straight arrow from where you started to where you finished: it has a size and a direction, and it can shrink, change sign, or be zero.'
  formulas:
    - tex: '\Delta x = x_f - x_i'
      label: 'Displacement along a line (final minus initial position)'
    - tex: '\text{distance} \;\ge\; |\Delta x|'
      label: 'Path length is never less than the size of the displacement'
  conditions:
    - 'Positions are measured from one fixed reference point (the origin), with one direction chosen as positive'
    - 'The moving body is small enough to be treated as a single point'
    - 'Distance equals the size of the displacement only if the body never reverses direction'
  sign: 'Displacement depends only on the start and the finish, never on the route. Distance depends on the whole route. Adding a path stretch always adds to distance, but can subtract from displacement.'
outcomes:
  - 'Say where something is by naming a reference point, a distance and a direction'
  - 'Tell distance from displacement and find both for a path with a turn in it'
  - 'Compute displacement as final position minus initial position, with the correct sign'
  - 'Find the distance for a motion given by a formula, by locating its turning points'
  - 'Explain why a random walker drifts away only as the square root of the steps taken'
opener:
  story: |
    Your phone has a step counter. Suppose it says you walked 6 km today, to the market, to a friend's place, to the tea stall and back home again. Now picture yourself in bed tonight. How far are you from where you woke up this morning?

    Not 6 km. Not even 1 km. You are exactly where you started. So did you travel 6 km or 0 km?

    Here is a question to ask at the next dinner table: **a cricketer runs a full lap of the ground and says he ran 400 metres. How far is he from where he began?** You will watch smart people go quiet. By the end of this lesson you will see why both answers are correct, and why physics needs both.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A winding walking path from home to school and the straight arrow between them"><path d="M50 170 C 80 80, 120 220, 160 150 S 230 60, 262 90" style="fill:none;stroke:var(--chem);stroke-width:3;stroke-dasharray:6 5"/><line x1="50" y1="170" x2="262" y2="90" style="stroke:var(--c);stroke-width:3"/><path d="M262 90 L248 88 L254 99Z" style="fill:var(--c)"/><rect x="34" y="170" width="22" height="18" rx="2" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M31 171 L45 158 L59 171Z" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="262" y="76" width="26" height="20" rx="2" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M259 77 L275 63 L291 77Z" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="30" y="206" style="font-size:11px;fill:var(--muted)">home</text><text x="262" y="112" style="font-size:11px;fill:var(--muted)">school</text><text x="92" y="56" style="font-size:11px;fill:var(--chem)">distance: the path you walked</text><text x="116" y="226" style="font-size:11px;fill:var(--c)">displacement: the straight arrow</text></svg>'
life:
  - 'A taxi meter charges for distance (the winding road); the "as the crow flies" line on a map app shows the displacement.'
  - 'A marathon runner finishing a loop course has run 42 km but may end only a few metres from the start.'
  - 'Pilots and ship captains care about both: fuel is burned along the path, but the destination is a straight-line bearing away.'
  - 'Your phone GPS logs the route you walked (distance) and also the straight-line gap between two points in a trip.'
  - 'A drunkard wandering round a lamp-post covers a lot of ground and goes almost nowhere.'
models:
  - name: 'Path versus net change'
    text: 'Total money you spent in a month is like distance; your change in bank balance is like displacement. A busy month can leave the balance unchanged. Whenever you see a long, active process, ask both questions: how much happened, and what is the net result?'
  - name: 'Always name the origin'
    text: '"It is 3 km away" is meaningless until you say away from what. Heights, temperatures, scores and political positions are all numbers measured from a chosen zero. Changing the zero changes the numbers but not the differences between them.'
  - name: 'Start and finish are enough'
    text: 'Displacement forgets the route and remembers only the ends. Several important quantities in physics behave like this, and each makes problems far easier because you can ignore the messy middle.'
links:
  - leaf: 'phy/vectors-in-motion'
    name: 'Vectors in motion'
    same: 'Displacement is the first vector you meet. Everything there (adding arrows, components, resultants) is the same idea of "net change" extended from a line to a plane.'
    differs: 'On a line a displacement needs only a plus or minus sign. In a plane you need two components or a size and an angle.'
  - leaf: 'phy/conservative-forces'
    name: 'Conservative forces'
    same: 'For gravity, the work depends only on where you start and stop, not on the route, just as displacement ignores the route.'
    differs: 'Displacement ignores the route for every motion. The work done by friction does depend on the route, so friction is not conservative.'
next:
  q: 'You know how far someone has gone and how long it took. Is that enough to say how fast they were moving at every moment? And what if they turn round half way?'
  leaf: 'phy/speed-velocity-acceleration'
  name: 'Speed, velocity, acceleration'
symbols:
  - s: 'x'
    means: 'position: how far from the origin, with a plus or minus sign for direction (metres, m)'
  - s: 'x_i'
    means: 'initial position, where the motion starts (m)'
  - s: 'x_f'
    means: 'final position, where the motion ends (m)'
  - s: '\Delta x'
    means: 'displacement, the change in position, final minus initial (m)'
  - s: 'd'
    means: 'distance, the total length of path travelled (m)'
  - s: 'R'
    means: 'radius of a circular track (m)'
  - s: 'N'
    means: 'number of steps in a random walk (no unit)'
---

:::hook
q: Hardeep walks 300 m east from his house to the shop, then 100 m back west towards home, and stops. What are his distance travelled and his displacement from the house?
options: ["Distance 400 m, displacement 200 m east", "Distance 200 m, displacement 400 m east", "Distance 400 m, displacement 400 m east", "Distance 200 m, displacement 200 m east"]
answer: 0
right: Right. He walked 300 m and then 100 m more, so the distance is 400 m. But he finished 200 m east of the house, so the displacement is 200 m east. The two answers answer two different questions.
wrong: Distance counts every step, forward or back: 300 + 100 = 400 m. Displacement only asks where he ends up compared with where he began: 300 − 100 = 200 m east of the house.
:::

## Where is it? {lvl=1 id=s-position label="Class 6"}

Before asking how far something has gone, ask a simpler question: where is it? Say a bus stand, a school and a garden stand in a row. Deepa says the garden is close, Anish says it is far. Both can be right, because Deepa lives next to the garden and Anish lives next to the bus stand. Each one is measuring from a different place.

So to say where something is, you must first pick a **reference point**, a place that everyone agrees to measure from. Then you give the distance and the direction from it: "200 m east of the bus stand". Without a reference point, "200 m" says nothing.

The reference point also decides whether something is moving. Inside a bus, the passengers sit still compared with you, but they rush past the trees outside. An object is in **motion** when its position, measured from a chosen reference point, changes with time. If it does not, it is at rest. Neither word means anything until you say compared with what.

When the motion is along a straight line, there are only two directions, so a plus or minus sign is enough. Mark the reference point as zero, call one side positive and the other negative. This marked line is the **position axis**, and the number on it is the **position**, written $x$ for short.

:::qc lvl=1
q: A passenger sits still in a moving train. Which statement is correct?
options: ["She is at rest compared with the train and in motion compared with the platform", "She is at rest compared with everything", "She is in motion compared with everything", "Rest and motion cannot depend on the observer"]
answer: 0
right: Right. Rest and motion are always compared with a reference point. Her position changes with respect to the platform but not with respect to the train.
wrong: Her seat does not move relative to the train, but the platform slides past. Rest and motion depend on the reference point you choose.
:::

## Two ways to say how far {lvl=1 id=s-two label="Class 9"}

An athlete starts at the zero mark of a straight 100 m track. She runs to the 100 m mark, then turns and runs back to the 40 m mark. How far did she go?

Count the metres under her feet: 100 m forward, then 60 m back. That is 160 m. This is the **distance travelled**, the total length of the path she actually followed. It does not care about direction, so it is just a number with a unit.

Now ask a different question: how far is she from where she started? She is standing on the 40 m mark, so she is 40 m from the start. And she is on the forward side of it. This arrow from the start to the finish is her **displacement**: 40 m in the forward direction. Displacement needs both a size and a direction.

:::figure caption="The athlete's route: 100 m out, 60 m back. The path (orange) is 160 m long, but the displacement (blue arrow) is only 40 m from start to finish."
<svg viewBox="0 0 360 150" role="img" aria-label="Number line from 0 to 100 m with the athlete going out to 100 and back to 40, and the displacement arrow from 0 to 40">
<defs><marker id="dd1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="dd2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<line class="ln" x1="30" y1="100" x2="330" y2="100"/>
<line class="ln" x1="30" y1="95" x2="30" y2="105"/><line class="ln" x1="150" y1="95" x2="150" y2="105"/><line class="ln" x1="330" y1="95" x2="330" y2="105"/>
<text class="k" x="24" y="120">0</text><text class="k" x="140" y="120">40 m</text><text class="k" x="312" y="120">100 m</text>
<path class="wf" d="M30 56 L330 56" marker-end="url(#dd1)"/>
<path class="wf" d="M330 70 L150 70" marker-end="url(#dd1)"/>
<text x="150" y="46">out: 100 m</text><text x="214" y="86">back: 60 m</text>
<path class="ray" d="M30 134 L150 134" marker-end="url(#dd2)"/>
<text x="46" y="148">displacement: 40 m forward</text>
<circle class="obj" cx="150" cy="100" r="5"/>
</svg>
:::

To see why we need both numbers, think about a taxi and a drone. The taxi driver bills you for the winding road, which is distance. The drone pilot, flying straight, cares only about the arrow from here to there, which is displacement.

:::qc lvl=1
q: A student walks 3 m north, then 3 m south, then 3 m north again. What are her distance and the size of her displacement?
options: ["Distance 9 m, displacement 3 m", "Distance 3 m, displacement 9 m", "Distance 9 m, displacement 9 m", "Distance 3 m, displacement 3 m"]
answer: 0
right: Right. Every step counts for distance: 3 + 3 + 3 = 9 m. But she finishes only 3 m north of where she began.
wrong: Distance adds the lengths of all three stretches, 9 m. Displacement compares only the ends: she started at 0 and ended 3 m north.
:::

## Displacement is a subtraction {lvl=2 id=s-subtract label="Class 11"}

The athlete's story can be turned into one tidy rule. Let the position at the start be $x_i$ (i for initial) and at the end $x_f$ (f for final). The change in position, written $\Delta x$ and read "delta x", is

$$\Delta x = x_f - x_i.$$

Read it as: displacement is where you finished minus where you began. The Greek letter $\Delta$ simply means "the change in". For the athlete, $x_i = 0$ and $x_f = +40$ m, so $\Delta x = +40$ m.

Now try it on a runner who starts at the 30 m mark and ends at the 10 m mark. Then $\Delta x = 10 - 30 = -20$ m. The minus sign is not a mistake. It says "20 m in the negative direction", the direction we agreed is backwards.

Here is something worth noticing. Suppose you move the origin, so that every position is measured from the 20 m mark instead. The runner's positions become $+10$ and $-10$. But $\Delta x = -10 - (+10) = -20$ m, the same as before. **Positions depend on the origin; displacements do not.** The origin cancels in the subtraction.

For distance there is no such formula, because it depends on the route. You must split the journey wherever the body turns round and add the lengths of the one-way stretches, each taken as positive.

:::worked title="A walk with a turn"
A bus conductor walks from the front of a 12 m bus to the back, then goes 5 m forward again. Take "towards the back" as positive and the front as origin. So $x_i = 0$, the turning point is $+12$ m, and $x_f = 12 - 5 = +7$ m.

Distance $= 12 + 5 = 17$ m. Displacement $= x_f - x_i = 7 - 0 = +7$ m, that is 7 m towards the back.
:::

This also gives us the rule in the margin: **distance is never less than the size of the displacement**. The straight line is the shortest path between two points. The two are equal only when the body never turns back.

:::qc lvl=2
q: A man standing at x = +8 m walks to x = −2 m and then to x = +3 m. What is his displacement?
options: ["−5 m", "+5 m", "−15 m", "+15 m"]
answer: 0
right: Right. Only the ends matter: 3 − 8 = −5 m, that is 5 m in the negative direction. (His distance would be 10 + 5 = 15 m.)
wrong: Ignore the stop at −2 m. Final position 3 minus initial position 8 gives −5 m. The 15 m is the distance, not the displacement.
:::

## Round trips and circles {lvl=2 id=s-round label="Class 11"}

If you end where you began, then $x_f = x_i$ and $\Delta x = 0$, however far you went. A full lap of a 400 m track has distance 400 m and displacement zero. That is the answer to the dinner-table puzzle.

On a circle, you can ask for the displacement at any stage. Run half a lap of a circular track of radius $R$. The distance is half the circumference, $\pi R$. But the finishing point is at the opposite end of a diameter, so the displacement has size $2R$. For $R = 35$ m, the distance is $\pi\times 35 = 110$ m and the displacement is 70 m.

:::figure caption="Half a lap on a circular track: the distance is the curved path, πR; the displacement is the straight diameter, 2R."
<svg viewBox="0 0 360 190" role="img" aria-label="Circle with a semicircular path and a diameter as displacement">
<defs><marker id="dd3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<circle class="faint" cx="180" cy="95" r="70"/>
<path class="wf" d="M110 95 A70 70 0 0 1 250 95"/>
<line class="ray" x1="110" y1="95" x2="244" y2="95" marker-end="url(#dd3)"/>
<circle class="obj" cx="110" cy="95" r="5"/><circle class="obj" cx="250" cy="95" r="5"/>
<text class="k" x="96" y="116">start</text><text class="k" x="240" y="116">finish</text>
<text x="136" y="40">distance = πR (curved)</text><text x="116" y="140">displacement = 2R (straight)</text>
</svg>
:::

The ratio distance : displacement is therefore $\pi R : 2R = \pi/2 \approx 1.57$ for half a lap. For one full lap the ratio is infinite, because the displacement is zero.

:::qc lvl=2
q: A cyclist rides once round a circular park of radius 100 m and stops where she began. What are her distance and displacement?
options: ["About 628 m and 0", "About 628 m and 200 m", "0 and 628 m", "About 314 m and 0"]
answer: 0
right: Right. The distance is the whole circumference, 2π × 100 ≈ 628 m. She is back at the start, so the displacement is zero.
wrong: The circumference is 2πR, about 628 m, so that is the distance. Final position equals initial position, so the displacement is zero.
:::

## Finding the turning points {lvl=3 id=s-turning label="JEE"}

In JEE problems the motion is often given as a formula, for example $x = t^2 - 4t$ (with $x$ in metres and $t$ in seconds), and you are asked for the distance in some time. The trap is to put the end times into the formula and subtract. That gives the displacement only.

To get the distance, ask: where does the body turn? A body turns round exactly when it stops for an instant, so its velocity is zero there. The velocity is the rate of change of position, found by differentiating, $v = dx/dt$. (If you have not met derivatives yet, think of $v$ as "how fast $x$ is changing".) Here $v = 2t - 4$, which is zero at $t = 2$ s.

:::worked title="Distance from t = 0 to t = 5 s for x = t² − 4t"
Positions: $x(0) = 0$, the turning point $x(2) = 4 - 8 = -4$ m, and $x(5) = 25 - 20 = +5$ m.

First stretch, 0 to 2 s: $0 \to -4$, a length of 4 m. Second stretch, 2 to 5 s: $-4 \to +5$, a length of 9 m. Distance $= 4 + 9 = 13$ m.

Displacement $= x(5) - x(0) = +5$ m. The body travelled 13 m yet ended only 5 m from the start.
:::

The recipe is always the same: (1) find where $v = 0$ inside the time window, (2) compute the positions at the start, at each turning point and at the end, (3) add up the sizes of the gaps between neighbouring positions. In calculus language, displacement is $\int v\,dt$ and distance is $\int |v|\,dt$: the bars throw away the minus signs.

:::qc lvl=3
q: For x = t² − 4t, what is the distance travelled from t = 0 to t = 2 s only?
options: ["4 m", "0 m", "5 m", "13 m"]
answer: 0
right: Right. In this window the body goes from 0 to −4 m and has not yet turned. Distance and displacement size are both 4 m.
wrong: Up to t = 2 s the velocity 2t − 4 stays negative, so there is no turn yet. The body simply moves from x = 0 to x = −4, a distance of 4 m.
:::

## Arrows in a plane {lvl=3 id=s-plane label="JEE"}

On a flat field the direction is not just plus or minus. A displacement is now an arrow on the plane, and you find its size with Pythagoras. A cyclist goes 6 km east then 8 km north. The distance is 14 km, but the displacement is the diagonal, $\sqrt{6^2 + 8^2} = 10$ km, in a direction about $53^\circ$ north of east.

For several legs, add the east-west numbers together (east positive) and the north-south numbers together (north positive) and take the diagonal of the two totals. Distance, as before, adds the sizes of all legs.

:::qc lvl=3
q: Starting at the origin you walk 4 m east, 3 m north, then 4 m west. What is the size of your displacement?
options: ["3 m", "5 m", "11 m", "7 m"]
answer: 0
right: Right. East-west: 4 − 4 = 0. North-south: 3. So you end 3 m north of the start. (The distance walked is 11 m.)
wrong: Add the components. East: +4 and −4 cancel to 0. North: +3. The displacement is 3 m north; 11 m is the distance.
:::

## Lost in a crowd: the random walk {lvl=4 id=s-random label="Olympiad"}

Here is a party fact that surprises almost everyone. A very drunk man leaves a lamp-post and takes $N$ steps, each of length 1 m, each one forwards or backwards on a straight lane at random. The distance he walks is exactly $N$ metres. How far from the lamp-post will he typically be?

Not $N$. Call his position after $n$ steps $x_n$. A new step either adds 1 or subtracts 1, so $x_{n+1} = x_n \pm 1$. Square it: $x_{n+1}^2 = x_n^2 \pm 2x_n + 1$. The $\pm$ is plus or minus with equal chance, so on average the middle term cancels and the average of $x_{n+1}^2$ is the average of $x_n^2$ plus 1. Each step adds exactly 1 to the average squared position, so after $N$ steps

$$\langle x^2\rangle = N, \qquad x_{\text{rms}} = \sqrt N.$$

Read it as: the typical distance from the start grows only as the square root of the number of steps. To get 1 km away with half-metre steps the drunkard needs about $(1000/0.5)^2 = 4$ million steps. That is why smell takes minutes to cross a room, and why light made in the Sun's core is believed to take a very long time, many thousands of years [Unverified: estimates vary widely], to random-walk out, although the straight trip from the Sun to us takes only about eight minutes.

[Inference] The reasoning above assumes steps are independent and equally likely each way; real diffusion in air or in the Sun's interior has varying step lengths, which changes the constants but not the square-root pattern.

:::qc lvl=4
q: A random walker needs about 100 steps to be typically 10 steps from the start. About how many steps does he need to be typically 30 steps away?
options: ["900", "300", "3000", "90"]
answer: 0
right: Right. Typical displacement goes as the square root of N, so N goes as the square of the displacement: 30² = 900 steps.
wrong: Because x_rms = √N, we have N = x_rms². For x_rms = 30, N = 900. Distance walked grows linearly; typical displacement only as the root.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A position needs a reference point; rest and motion are only meaningful compared with one. {lvl=1}
2. Distance is the length of the path travelled; displacement is the straight arrow from start to finish. {lvl=1}
3. $\Delta x = x_f - x_i$: displacement can be positive, negative or zero; distance is never negative. {lvl=2}
4. Distance is at least as large as the size of the displacement; a round trip has zero displacement. {lvl=2}
5. For motion given by a formula, find the turning points (where $v = 0$) and add the one-way stretches to get distance. {lvl=3}
6. A random walker's typical displacement grows as $\sqrt N$ while the distance grows as $N$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Writing "distance = final minus initial": that is the displacement. Distance needs the whole route. {lvl=1}
- Dropping the sign. A displacement of −20 m is a perfectly good answer: it means 20 m in the negative direction. {lvl=2}
- Forgetting the turning point when a formula for $x(t)$ is given: always check whether $v = 0$ occurs inside the time window. {lvl=3}
- Quoting only a size for a displacement in a plane: the direction is part of the answer. {lvl=3}
- Assuming a typical random walker is $N$ steps away. It is only about $\sqrt N$. {lvl=4}
:::
