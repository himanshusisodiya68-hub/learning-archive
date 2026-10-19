---
title: Relative motion
summary: 'Why the train next to yours seems to roll backwards, and the one subtraction that settles who is moving.'
ncert: ["Class 11 Physics · Ch 3 Motion in a Plane (Examples 3.1 and 3.3: rain and wind, boat and current)", "Class 11 Physics · Ch 2 Motion in a Straight Line (Exercise 2.14: relative velocity in one dimension)"]
up_to: Olympiad
builds_on: [Speed, velocity, acceleration, Vectors in motion, Projectile motion]
notes_prompt: Explain to a friend why a bus that overtakes your car at only 10 km/h more than you looks almost parked, and how you would find the heading a boat must take to cross a river straight.
margin:
  - kind: history
    title: History
    text: In his Dialogue of 1632 Galileo asks you to shut yourself in a cabin below the deck of a ship, with butterflies, a bowl of fish and a dripping bottle. Nothing you see tells you whether the ship is at rest or gliding smoothly. That passage is the first clear statement that uniform motion cannot be felt.
  - kind: tip
    title: Exam habit
    text: "Pick the object that makes the problem simplest, subtract its velocity from everyone's, and then solve as if it stood still. Write the signs only after you have chosen which direction is positive."
  - kind: olympiad
    title: Olympiad link
    text: "Two bodies thrown at the same instant under gravity have zero relative acceleration. In the frame of one, the other moves in a straight line at constant speed. This turns the monkey-and-hunter puzzle, and many collision problems, into a few lines of geometry."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch 4 Motion in Two and Three Dimensions, §4-6 Relative motion in one dimension, §4-7 Relative motion in two dimensions" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch 15 The Special Theory of Relativity (the principle of relativity and Galilean transformation) [Unverified chapter reference]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 3 Kinematics (relative velocity; river-boat; rain problems) [Unverified chapter reference]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 1 · 1.1 Kinematics [Unverified section reference]" }
cards:
  - { front: "Velocity of A as seen by B?", back: "$\\mathbf v_{AB} = \\mathbf v_A - \\mathbf v_B$, both measured from the same ground. Subtract the observer's velocity; and $\\mathbf v_{BA} = -\\mathbf v_{AB}$." }
  - { front: "Chain rule for boat and river?", back: "$\\mathbf v_{\\text{boat,ground}} = \\mathbf v_{\\text{boat,water}} + \\mathbf v_{\\text{water,ground}}$: the inner label cancels, like fractions." }
  - { front: "Cross a river in the least time. How?", back: "Point the boat straight across. Time $= d/u$ ($u$ = boat speed in still water) and the current does not matter; it only decides how far downstream you land." }
  - { front: "Cross straight over, with boat speed u greater than river speed w?", back: "Aim upstream at angle $\\theta$ from the perpendicular with $\\sin\\theta = w/u$. The crossing speed is $\\sqrt{u^2 - w^2}$." }
  - { front: "How do you know two moving bodies will collide?", back: "In the frame of one, the other moves in a straight line. A collision happens exactly when that line passes through the first body: the line of sight keeps a constant direction while the gap shrinks." }
  - { front: "Relative acceleration of two bodies in free fall?", back: "Zero. Both have $\\mathbf g$, so $\\mathbf a_{AB} = \\mathbf g - \\mathbf g = 0$ and their separation changes at a constant rate." }
core:
  idea: 'A velocity is always a velocity compared to something. The velocity of A as seen by B is A''s velocity minus B''s velocity, both measured from one common ground: $\mathbf v_{AB} = \mathbf v_A - \mathbf v_B$. To solve a problem, step into the frame of one object, where it stands still, and subtract its velocity from everything.'
  formulas:
    - tex: '\mathbf v_{AB} = \mathbf v_A - \mathbf v_B,\qquad \mathbf v_{BA} = -\mathbf v_{AB}'
      label: 'Velocity of A relative to B'
    - tex: '\mathbf v_{AC} = \mathbf v_{AB} + \mathbf v_{BC}'
      label: 'Chain rule: add the inner labels away'
    - tex: '\mathbf a_{AB} = \mathbf a_A - \mathbf a_B'
      label: 'Relative acceleration'
  conditions:
    - 'All the velocities on the right are measured from the same common frame before you subtract'
    - 'The two frames move at constant velocity relative to each other, with no rotation'
    - 'Speeds far below the speed of light (above that, the plain subtraction fails)'
  sign: 'Choose one direction as positive first. $\mathbf v_{AB}$ is A minus B, never B minus A: swapping the order reverses the arrow. In a vector triangle, subtracting an arrow means adding its reverse.'
outcomes:
  - 'Say what a frame of reference is, and find the velocity of one body as seen from another in one dimension'
  - 'Subtract velocity vectors to handle rain and umbrella, boat and river, and aeroplane and wind problems'
  - 'Cross a river in the least time, by the shortest path, and with the least drift, even when the swimmer is slower than the current'
  - 'Find the closest approach of two moving bodies and decide when they will collide'
  - 'Use relative acceleration, solve interception problems, and say why uniformly moving observers agree on accelerations'
opener:
  story: |
    You are sitting in a train at the station. Out of your window, the train on the next track starts to slide backwards. For one second your stomach drops: you are moving! Then you notice the platform pillars, standing perfectly still, and you realise the *other* train was the one that left. Your body had no way to tell which of the two trains was moving.

    Now zoom out. The platform you call "still" sits on a planet that spins you round at about 465 m/s if you live near the equator, swings you round the Sun at about 30 km/s, and carries you round the galaxy at hundreds of km/s. So how fast are you moving right now?

    The honest answer is a question: **compared to what?** A speed is never a fact about one thing; it is a fact about two things. And once you accept that, you get one of the most useful tricks in all of physics: you are allowed to choose who stands still.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A bus overtaking a car on a road, with their speeds"><rect x="0" y="70" width="320" height="110" style="fill:color-mix(in srgb,var(--muted) 14%,var(--surface))"/><line x1="0" y1="125" x2="320" y2="125" style="stroke:var(--muted);stroke-width:2;stroke-dasharray:12 10"/><rect x="130" y="82" width="112" height="36" rx="6" style="fill:var(--c)"/><rect x="140" y="88" width="20" height="14" rx="2" style="fill:var(--surface)"/><rect x="168" y="88" width="20" height="14" rx="2" style="fill:var(--surface)"/><rect x="196" y="88" width="20" height="14" rx="2" style="fill:var(--surface)"/><circle cx="158" cy="120" r="7" style="fill:var(--ink)"/><circle cx="218" cy="120" r="7" style="fill:var(--ink)"/><rect x="96" y="144" width="64" height="26" rx="8" style="fill:var(--chem)"/><rect x="118" y="148" width="22" height="12" rx="3" style="fill:var(--surface)"/><circle cx="116" cy="172" r="6" style="fill:var(--ink)"/><circle cx="146" cy="172" r="6" style="fill:var(--ink)"/><path d="M248 100 L296 100" style="stroke:var(--ink);stroke-width:3;fill:none"/><path d="M296 100 L288 95 M296 100 L288 105" style="stroke:var(--ink);stroke-width:3;fill:none"/><path d="M166 157 L206 157" style="stroke:var(--ink);stroke-width:3;fill:none"/><path d="M206 157 L198 152 M206 157 L198 162" style="stroke:var(--ink);stroke-width:3;fill:none"/><text x="250" y="86" style="font-size:11px;fill:var(--muted)">bus 70 km/h</text><text x="168" y="190" style="font-size:11px;fill:var(--muted)">you 60 km/h</text><text x="20" y="40" style="font-size:12px;fill:var(--ink)">From your seat the bus creeps</text><text x="20" y="58" style="font-size:12px;fill:var(--ink)">past at only 10 km/h</text><text x="20" y="224" style="font-size:11px;fill:var(--muted)">both speeds measured from the road</text></svg>'
symbols:
  - s: '\mathbf v_A'
    means: 'velocity of A measured from the ground (m/s)'
  - s: '\mathbf v_B'
    means: 'velocity of B measured from the ground (m/s)'
  - s: '\mathbf v_{AB}'
    means: 'velocity of A as seen by B, "A relative to B" (m/s)'
  - s: 'u'
    means: 'speed of a boat or swimmer relative to the water (m/s)'
  - s: 'w'
    means: 'speed of the river water relative to the ground (m/s)'
  - s: 'd'
    means: 'width of the river, or the distance between two bodies (m)'
  - s: '\theta'
    means: 'angle of the heading from the line straight across (degrees)'
  - s: '\mathbf a_{AB}'
    means: 'acceleration of A as seen by B (m/s^2)'
  - s: 'g'
    means: 'acceleration of free fall, 9.8 m/s^2'
life:
  - 'On a highway, overtaking a truck that does 80 km/h when you do 90 takes forever: you close the gap at only 10 km/h, so it feels like a slow-motion crawl.'
  - 'Raindrops fall straight down, yet on a moving bus window the streaks slant backwards, and the faster the bus, the flatter the streaks.'
  - 'Jet streams are fast winds high up. A flight with the jet stream behind it can land an hour sooner than the return flight, because ground speed is airspeed plus wind.'
  - 'Two spacecraft docking at the International Space Station both move at about 7.7 km/s, but they meet at a few centimetres per second, because only the relative velocity matters.'
  - 'Sailors judge a collision by watching a ship''s bearing: if the other ship stays in the same direction in your view while getting bigger, you are on a collision course.'
models:
  - name: 'Choose who stands still'
    text: 'When a problem has too many moving parts, step into the frame of one of them. The same trick helps outside physics: judge your salary after subtracting inflation, or your growth against the market''s growth, and the confusing number becomes simple.'
  - name: 'Ask "compared to what?"'
    text: 'A speed, a salary, a temperature or a marks list means nothing without its reference. A 10% rise in a rising market may be a loss. Always name the frame before you quote the number.'
  - name: 'Constant bearing, closing range'
    text: 'Something that stays in the same direction in your view while getting nearer is going to hit you. The warning sign of a collision, or of a deadline, is the thing that is coming at you without appearing to move sideways.'
links:
  - leaf: 'phy/special-relativity'
    name: 'Special relativity'
    same: 'The starting point is the same: uniform motion cannot be felt, and two observers in uniform relative motion see the same laws. Galileo''s cabin is the seed of Einstein''s relativity principle.'
    differs: 'Here velocities simply subtract. Near the speed of light they do not: for light itself, every observer measures the same speed whatever their motion, and the plain subtraction has to be replaced.'
  - leaf: 'phy/doppler-effect'
    name: 'Doppler effect'
    same: 'What you measure depends on the relative motion of source and observer, not on either alone. The pitch of a passing siren is a relative-velocity fact.'
    differs: 'Sound travels in air, so the air is a special frame and it matters whether the source or the listener moves. For plain velocities, any uniformly moving frame is as good as any other.'
next:
  q: 'A cyclist in a velodrome rides at a steady 40 km/h, yet the coach says she is accelerating the whole lap. How can speed stay fixed while velocity keeps changing, and which way does that acceleration point?'
  leaf: 'phy/circular-motion'
  name: 'Circular motion'
---

:::hook
q: So what's your guess? You drive at 60 km/h and a bus overtakes you in the next lane at 70 km/h. How fast does the bus seem to move past you?
options: ["130 km/h, the two speeds added", "10 km/h, the difference", "70 km/h, its own speed"]
answer: 1
right: Right. From your seat you are standing still, so the bus has only the extra 10 km/h left over. That is why overtaking feels slow, and why the train next to yours seems to creep when both run nearly together.
wrong: Speeds measured from the road do not simply carry over to your seat. You share 60 km/h with the car, so you must take your own 60 off the bus's 70. What is left is 10 km/h.
:::

## Compared to what? {lvl=1 id=s-compared label="Class 9"}

Back to the train. From the platform, the other train rolls backwards at 5 m/s and yours stands still. From the other train, it is you who roll forward at 5 m/s. Neither account is wrong. Each one is a **frame of reference**: the viewpoint you measure from, a choice of who counts as standing still. The platform, a car seat and the Sun are all frames.

When someone says "the train goes at 60 km/h", they quietly add "compared to the ground". Unless said otherwise, every speed in this lesson is measured from the ground.

Now a number. Two trains run on parallel tracks, yours at 60 km/h to the east and the other at 40 km/h to the west. Every hour the gap between you shrinks by 60 + 40 = 100 km, so the other train seems to rush past at 100 km/h. If it travelled east instead, the gap would shrink by only 60 − 40 = 20 km each hour.

Both answers come from one sentence: **the velocity of A as seen by B is A's velocity minus B's velocity.** In symbols, with a small letter for each body,

$$\mathbf v_{AB} = \mathbf v_A - \mathbf v_B.$$

Read it as: "take A's velocity from the ground, take off B's, and what is left is what B sees." The bold letters remind us that velocities have a direction; in one dimension, just pick east as positive and keep the signs.

:::worked title="Two trains, one subtraction"
East is positive. Your train is B with $v_B = +60$ km/h; the other train is A with $v_A = -40$ km/h (westwards).

$v_{AB} = v_A - v_B = (-40) - (+60) = -100$ km/h: it rushes past westwards at 100 km/h. If A also ran east at 40 km/h: $v_{AB} = 40 - 60 = -20$ km/h, so it falls behind you at 20 km/h.
:::

:::qc lvl=1
q: A police van moving at 30 km/h fires a bullet forward with a muzzle speed of 150 m/s. The thief's car ahead moves away at 192 km/h. With what speed does the bullet hit the car, relative to the car?
options: ["105 m/s", "150 m/s", "195 m/s", "62 m/s"]
answer: 0
right: Right. In m/s: van 8.3, car 53.3. The bullet leaves at 150 + 8.3 = 158.3 m/s from the ground, and relative to the car it arrives at 158.3 − 53.3 = 105 m/s.
wrong: Muzzle speed is measured from the gun, which already moves with the van. From the ground the bullet does 150 + 8.3 m/s; take away the car's 53.3 m/s to get what the car feels.
:::

## Rain on a runner {lvl=2 id=s-vector label="Class 11"}

Rain falls straight down at 8 m/s. You run at 6 m/s along a straight road. The rain does not fall straight onto you; it comes slanting into your face. In your frame you are standing still, and the *rain* has acquired a sideways velocity of 6 m/s backwards, because everything else is running past you.

This is the same rule, now with arrows. The rain as seen by you is $\mathbf v_r - \mathbf v_b$, where $\mathbf v_r$ is the rain's velocity and $\mathbf v_b$ is yours. Subtracting an arrow means adding its reverse: draw the rain's arrow, then your arrow reversed, head to tail.

:::figure caption="Rain seen by a runner. Draw the rain arrow (down, 8) and then the runner's arrow reversed (backwards, 6). The arrow from the start to the end is the rain as the runner sees it: 10 m/s, tilted 37° from the vertical."
<svg viewBox="0 0 340 200" role="img" aria-label="Velocity triangle: rain 8 down, runner reversed 6 backwards, resultant 10">
<defs><marker id="rma1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="rma2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="rma3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker></defs>
<circle class="obj" cx="190" cy="30" r="4"/>
<line class="ray" x1="190" y1="30" x2="190" y2="164" marker-end="url(#rma1)"/>
<line class="wf" x1="190" y1="164" x2="90" y2="164" marker-end="url(#rma2)"/>
<line x1="190" y1="30" x2="94" y2="162" style="stroke:var(--chem);stroke-width:2.5;fill:none" marker-end="url(#rma3)"/>
<path class="faint" d="M190 66 A36 36 0 0 0 169 59"/>
<text class="k" x="196" y="104">rain, 8 m/s (down)</text>
<text class="k" x="108" y="184">runner reversed, 6 m/s</text>
<text class="k" x="36" y="92">rain as the</text><text class="k" x="36" y="106">runner sees it,</text><text class="k" x="36" y="120">10 m/s</text>
<text x="196" y="52">37°</text>
</svg>
:::

The speed of the rain relative to you is $\sqrt{8^2 + 6^2} = 10$ m/s, and the slant from the vertical has $\tan\theta = 6/8$, so $\theta = 37^\circ$. Tilt your umbrella 37° forward, into the oncoming rain. Run faster and the slant grows: at 12 m/s it is $\tan^{-1}(12/8) = 56^\circ$, which is why a fast bus makes the streaks on its window almost flat.

The same picture solves NCERT's Example 3.1: rain at 35 m/s and a wind of 12 m/s give a slant of $\tan^{-1}(12/35) = 19^\circ$.

:::note title="Resultant is not relative" tone=info
Two different questions use two different arrows. If a body takes part in two motions at once (a boat in a current), you **add** the velocities to get the resultant. If you want what one body looks like from another, you **subtract**. Both velocities must be measured from the same ground first.
:::

:::qc lvl=2
q: Rain falls vertically at 10 m/s. A cyclist rides at 10 m/s. At what angle to the vertical should she tilt her umbrella?
options: ["0°", "30°", "45°", "90°"]
answer: 2
right: Right. Relative to her the rain has equal sideways and downward parts, 10 m/s each, so the slant is tan⁻¹(10/10) = 45°.
wrong: Her own speed adds a sideways part to the rain's velocity in her frame. With 10 sideways and 10 downward, the tangent of the slant is 1.
:::

## Boats, rivers and wind {lvl=2 id=s-river label="Class 11"}

A river flows east at $w$ metres per second. A boat that can do $u$ metres per second in still water is steered across it. The water carries the boat along, so the boat moves relative to the ground as the sum of two things: its velocity relative to the water and the water's velocity relative to the ground. Write it as

$$\mathbf v_{\text{boat, ground}} = \mathbf v_{\text{boat, water}} + \mathbf v_{\text{water, ground}}.$$

Read it as: "boat from the ground equals boat from the water plus water from the ground". The middle label, water, appears once on each side of the plus sign and cancels, like the middle term in a chain of fractions. This chain rule works for any number of frames, for example a passenger walking along a train that runs along the ground.

There are two classic questions, and they have different answers. Take a river 200 m wide, $w = 3$ m/s, and a boat with $u = 5$ m/s.

**Fastest crossing.** Only the part of the boat's velocity across the river carries it across; the current has no part in that direction. So aim straight across: the crossing takes $d/u = 200/5 = 40$ s, whatever the current. The current only decides where you land: it sweeps you $3 \times 40 = 120$ m downstream.

**Straight across.** To land exactly opposite, cancel the current by aiming upstream. The upstream part of the boat's velocity must equal 3 m/s: $5\sin\theta = 3$, so $\sin\theta = 0.6$, $\theta = 37^\circ$ upstream of the straight-across line. The speed across is $5\cos\theta = 4$ m/s, so the crossing takes $200/4 = 50$ s: ten seconds longer.

:::figure caption="Two ways to cross the same river. Left: heading straight across, the ground velocity (dashed) leans downstream. Right: heading upstream at 37°, the ground velocity points straight across but is shorter."
<svg viewBox="0 0 360 220" role="img" aria-label="Two velocity triangles for a boat crossing a river">
<defs><marker id="rmb1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="rmb2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="rmb3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker></defs>
<line class="faint" x1="30" y1="40" x2="150" y2="40"/><line class="faint" x1="30" y1="200" x2="150" y2="200"/>
<circle class="obj" cx="50" cy="190" r="4"/>
<line class="ray" x1="50" y1="190" x2="50" y2="122" marker-end="url(#rmb1)"/>
<line class="wf" x1="50" y1="120" x2="92" y2="120" marker-end="url(#rmb2)"/>
<line x1="50" y1="190" x2="92" y2="122" style="stroke:var(--chem);stroke-width:2.5;stroke-dasharray:6 4;fill:none" marker-end="url(#rmb3)"/>
<text class="k" x="4" y="160">boat 5</text><text class="k" x="56" y="112">river 3</text><text class="k" x="86" y="164">ground</text>
<text x="40" y="214">straight across: 40 s</text>
<line class="faint" x1="200" y1="40" x2="340" y2="40"/><line class="faint" x1="200" y1="200" x2="340" y2="200"/>
<circle class="obj" cx="270" cy="190" r="4"/>
<line class="ray" x1="270" y1="190" x2="228" y2="134" marker-end="url(#rmb1)"/>
<line class="wf" x1="228" y1="134" x2="268" y2="134" marker-end="url(#rmb2)"/>
<line x1="270" y1="190" x2="270" y2="138" style="stroke:var(--chem);stroke-width:2.5;stroke-dasharray:6 4;fill:none" marker-end="url(#rmb3)"/>
<text class="k" x="204" y="176">boat 5</text><text class="k" x="236" y="126">river 3</text><text class="k" x="276" y="168">ground 4</text>
<text x="212" y="214">aimed upstream: 50 s</text>
</svg>
:::

Aeroplanes in wind are the same problem with air in place of water. A plane with an airspeed of 200 km/h heading north in a 50 km/h wind from the west has a ground speed of $\sqrt{200^2 + 50^2} = 206$ km/h, and drifts 14° east of north. The pilot who wants to fly due north must point the nose about 14° west of north.

:::qc lvl=2
q: The river speeds up. A boat is steered straight across it, with the same boat speed in still water. What happens to the crossing time and to the point where it lands?
options: ["Time is the same; it lands farther downstream", "Time is shorter; it lands farther downstream", "Time is the same; it lands at the same spot", "Time is longer; it lands farther downstream"]
answer: 0
right: Right. The time depends only on the width and the speed across, and the current has no part in that direction. A faster current only sweeps the boat farther along the bank.
wrong: Cross-river motion and along-river motion are independent. The width and the boat's own speed alone fix the crossing time; the current changes only the downstream drift.
:::

## When the swimmer is slower than the river {lvl=3 id=s-swim label="JEE"}

Suppose a swimmer does $u = 3$ m/s in a river that flows at $w = 5$ m/s and is $d = 60$ m wide. Now she cannot hold her ground, so a straight crossing is impossible. She will be swept downstream, but how little can she make it?

Draw the water's arrow, 5 units. Whichever way she points, her own 3-unit arrow is added at its tip. So the tip of her ground velocity can land anywhere on a circle of radius 3 centred on the water arrow's tip. The least drift belongs to the ground velocity pointing most nearly straight across, which is the **tangent** from the start to that circle.

:::figure caption="The velocity circle. The swimmer's own arrow (radius 3, orange) can point anywhere, so her ground velocity ends somewhere on the circle. The tangent from the start (O) is the best: it is at right angles to her own arrow, forming a 3-4-5 triangle."
<svg viewBox="0 0 340 212" role="img" aria-label="Circle of possible ground velocities, with the tangent as best choice">
<defs><marker id="rmc1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="rmc2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="rmc3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker></defs>
<path class="faint" d="M96 170 A84 84 0 0 1 264 170"/>
<circle class="obj" cx="40" cy="170" r="4"/>
<line class="ray" x1="40" y1="170" x2="178" y2="170" marker-end="url(#rmc1)"/>
<line class="wf" x1="180" y1="170" x2="132" y2="104" marker-end="url(#rmc2)"/>
<line x1="40" y1="170" x2="128" y2="106" style="stroke:var(--chem);stroke-width:2.5;fill:none" marker-end="url(#rmc3)"/>
<path class="ln" d="M122 110 L128 116 L134 110"/>
<text class="k" x="86" y="188">water 5</text><text class="k" x="188" y="152">her own, 3</text><text class="k" x="30" y="122">ground 4</text>
<text x="148" y="190">bank direction:</text><text x="148" y="203">the current flows this way</text>
</svg>
:::

At the tangent, her own arrow is at right angles to her ground velocity, so the triangle has sides 3, 4, 5. Her ground speed is $\sqrt{5^2 - 3^2} = 4$ m/s, at an angle $\beta$ to the bank where $\sin\beta = 3/5$. The part of it across the river is $4 \times 0.6 = 2.4$ m/s, so the crossing takes $60/2.4 = 25$ s. The part along the bank is $4 \times 0.8 = 3.2$ m/s, so she drifts $3.2 \times 25 = 80$ m. In general,

$$\text{minimum drift} = \frac{d\sqrt{w^2 - u^2}}{u}.$$

Read it as: "the narrower the margin by which the current wins, the less she drifts". Check: put in 60, 5 and 3 and you get 80 m. She should swim upstream, at an angle with $\cos\alpha = u/w = 0.6$ to the bank, that is 53° from the upstream bank.

:::qc lvl=3
q: A swimmer with u = 4 m/s swims in a river of w = 5 m/s that is 60 m wide. What is the least drift she can have?
options: ["45 m", "60 m", "80 m", "0 m"]
answer: 0
right: Right. Drift = d√(w² − u²)/u = 60 × √9 / 4 = 60 × 3 / 4 = 45 m.
wrong: Use drift = d√(w² − u²)/u with d = 60, w = 5, u = 4. The root is √9 = 3.
:::

## Will they collide? {lvl=3 id=s-closest label="JEE"}

Two ships, A and B. Ship A sails due east at 15 km/h. At this moment ship B is 40 km due north of A and sails due south at 20 km/h. How near will they come?

Step into A's frame, where A stands still at the origin. B's velocity as seen by A is $\mathbf v_{BA} = \mathbf v_B - \mathbf v_A = (0, -20) - (15, 0) = (-15, -20)$ km/h, a speed of 25 km/h. Both ships move at constant velocity, so B simply moves along a **straight line** in this frame, starting 40 km north of A.

:::figure caption="Ship B in ship A's frame. B moves along a straight line (orange); the closest approach is the perpendicular distance from A to that line, 24 km. If the line passed through A, they would collide."
<svg viewBox="0 0 360 220" role="img" aria-label="Straight-line path of B past A with the perpendicular closest distance">
<defs><marker id="rmd1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="wf" x1="180" y1="30" x2="82" y2="161" marker-end="url(#rmd1)"/>
<line class="faint" x1="180" y1="30" x2="60" y2="190"/>
<circle class="obj" cx="180" cy="190" r="5"/>
<circle cx="180" cy="30" r="5" style="fill:var(--phy)"/>
<line class="ln" x1="180" y1="190" x2="103" y2="132"/>
<path class="ln" d="M114 141 L108 148 L101 142"/>
<circle cx="103" cy="132" r="3" style="fill:var(--ink)"/>
<text class="k" x="190" y="196">A (the origin)</text>
<text class="k" x="190" y="34">B starts 40 km north</text>
<text class="k" x="190" y="174">closest: 24 km</text>
<text x="12" y="84">B moves 25 km/h</text><text x="12" y="98">along this line</text>
</svg>
:::

The closest approach is the perpendicular distance from A to that line. For a line through B's starting position $\mathbf r$ with direction $\mathbf v_{BA}$, that distance is the cross product of the two divided by the speed: $d_{\min} = \dfrac{|0\cdot(-20) - 40\cdot(-15)|}{25} = \dfrac{600}{25} = 24$ km. It happens after $t = 1.28$ h. By then A has sailed 19.2 km east and B has come down to 14.4 km north of A's original line of travel, and the distance between them is $\sqrt{19.2^2 + 14.4^2} = 24$ km. Check.

**The collision rule.** The ships collide exactly when B's straight line goes through A. That happens when B's velocity as seen by A points straight at A, that is, when the line joining them holds the same direction while the gap shrinks. This is the sailor's rule of constant bearing: if you see another ship in a fixed direction and it grows larger, steer away.

:::qc lvl=3
q: From a lighthouse you watch a ship approach. Over several minutes its compass bearing from you stays exactly the same while it gets closer. What will happen if neither of you changes course?
options: ["It will pass in front of you", "It will collide with you", "It will pass behind you", "It will circle you"]
answer: 1
right: Right. A constant bearing means that in your frame the ship moves straight along the line towards you. Straight at you means a collision.
wrong: If the bearing never changes, the ship is moving straight along the line of sight. In your frame it is coming directly at you.
:::

## Relative acceleration {lvl=3 id=s-accel label="JEE"}

The rule has a twin for accelerations. If A accelerates at $\mathbf a_A$ and B at $\mathbf a_B$, then A as seen by B accelerates at $\mathbf a_{AB} = \mathbf a_A - \mathbf a_B$. Read it as: "the acceleration you see is the difference of the two accelerations".

Start with something easy. A lift speeds up at 2.2 m/s². A bolt drops from the ceiling, 1.5 m above the floor. The floor accelerates upward at 2.2 m/s² and the bolt downward at 9.8 m/s², so the floor and the bolt approach each other at $9.8 + 2.2 = 12$ m/s². Starting with no relative velocity, $1.5 = \tfrac12 \times 12 \times t^2$ gives $t = 0.5$ s.

Now a surprise. Two stones are thrown at the same instant from the edge of a 100 m cliff, one at 12 m/s due east and the other at 16 m/s due north, both horizontally. Both fall with acceleration $g$, so $\mathbf a_{AB} = \mathbf g - \mathbf g = 0$: **the relative acceleration is zero.** In each stone's frame the other moves in a straight line at constant velocity $\sqrt{12^2 + 16^2} = 20$ m/s. After 3 s they are exactly 60 m apart, and the curve of each path has dropped out of the problem. The only thing gravity did was drop them both by the same 44 m.

:::qc lvl=3
q: A hunter aims directly at a monkey hanging from a branch and fires. At the instant the gun goes off, the monkey lets go and falls. What happens to the bullet?
options: ["It passes above the monkey", "It hits the monkey", "It passes below the monkey", "It depends on the bullet speed"]
answer: 1
right: Right (as long as the monkey has not reached the ground before the bullet arrives). Both bullet and monkey fall with g, so in the monkey's frame the bullet moves straight along the line of sight, and runs into it. Gravity cancels from the problem.
wrong: Gravity pulls the bullet and the monkey down by the same amount in the same time. In the monkey's falling frame there is no gravity, and the bullet goes in a straight line to where the monkey was, which is where it still is.
:::

## Leading the target {lvl=4 id=s-intercept label="Olympiad"}

How does a quarterback throw to a running receiver, or a coastguard boat reach a runaway ship? Not by aiming at where the target is now. It has to aim at where the target will be, and relative velocity tells how.

Let the target start at position $\mathbf r_0$ from you and move with the constant velocity $\mathbf u$. You move with velocity $\mathbf w$, which you can choose in direction but whose speed is fixed. You meet after a time $t$ if your displacement $\mathbf w t$ equals $\mathbf r_0 + \mathbf u t$. Read it as: "you and the target must be at the same spot at the same time". Rearranged,

$$\mathbf w = \frac{\mathbf r_0}{t} + \mathbf u.$$

Take the length of both sides: your speed $|\mathbf w|$ is known, so this is an equation for $t$.

:::worked title="A patrol boat leads a ship"
A target ship starts 40 km due east of a patrol boat and sails due north at 9 km/h. The boat can do 15 km/h. With $\mathbf r_0 = (40, 0)$ and $\mathbf u = (0, 9)$, the dot product $\mathbf r_0 \cdot \mathbf u$ is zero, so $\left(40/t\right)^2 + 9^2 = 15^2$, giving $40/t = 12$ and $t = 3.33$ h.

The boat's velocity is $\mathbf w = (12, 9)$ km/h: a 3-4-5 triangle, with its heading 36.9° north of east. It sails east at 12 km/h, which closes the 40 km gap, and north at 9 km/h, which exactly matches the target's drift. In the target's frame the boat sails straight at it, which is the constant-bearing rule again.
:::

This is the secret of every interception: **match the target's sideways drift, and use whatever speed is left to close the gap.** If the target is faster than you and sailing away, there is no solution at all, and the equation tells you so: it has no positive real root for $t$.

:::qc lvl=4
q: A patrol boat that does 20 km/h wants to intercept a ship that sails at 10 km/h. For the earliest interception, how should it steer?
options: ["Straight at the ship's current position", "So that its velocity component across the ship's line of travel equals the ship's own drift", "Parallel to the ship's course", "Always towards the ship, adjusting continuously"]
answer: 1
right: Right. The boat cancels the target's sideways drift with part of its own velocity and uses the rest to close in. Pointing at the ship's present position wastes time: the ship has moved by the time you arrive.
wrong: The ship will not be where it is now. The boat must match the ship's motion across their line of sight, so that in the ship's frame the boat sails straight at it.
:::

## Frames that move steadily {lvl=4 id=s-galileo label="Olympiad"}

Let a frame move with the constant velocity $\mathbf V$ with respect to the ground. A point at position $\mathbf r$ on the ground has position $\mathbf r' = \mathbf r - \mathbf V t$ in the moving frame. Differentiate once and you get $\mathbf v' = \mathbf v - \mathbf V$: that is the whole lesson. Differentiate again and, since $\mathbf V$ is constant,

$$\mathbf a' = \mathbf a.$$

Read it as: "every observer in steady motion measures the same accelerations". That is the deep reason Galileo's cabin hides the ship's motion. Forces make accelerations, so every steadily moving observer finds the same forces and the same laws. Velocities change from frame to frame; accelerations do not.

Two warnings. If the frame itself accelerates with $\mathbf A$, then $\mathbf a' = \mathbf a - \mathbf A$, and you see accelerations that nothing caused: the lurch in a braking bus. Frames like that are not equal to the steady ones, and the next lesson sorts out which frames the laws of motion work in. And at speeds near that of light the plain subtraction $\mathbf v - \mathbf V$ fails: no observer can ever get a light beam to look slower than $c$.

:::qc lvl=4
q: Two observers move at constant velocity relative to each other and watch the same falling apple. Which quantity do they agree on?
options: ["Its velocity", "Its acceleration", "Its kinetic energy", "Its path"]
answer: 1
right: Right. Velocities differ by the relative velocity of the frames, and so do kinetic energies and paths. But the frames' relative velocity is constant, so it drops out when you differentiate: the acceleration is the same.
wrong: Velocity changes with the frame by the frame's own velocity, and the path and kinetic energy change with it. A constant frame velocity vanishes on differentiating once more, so only acceleration is shared.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Motion is always measured against something: a frame of reference. Speeds quoted without a frame mean "from the ground". {lvl=1}
2. The velocity of A as seen by B is A's velocity minus B's: $\mathbf v_{AB} = \mathbf v_A - \mathbf v_B$. {lvl=1}
3. In a vector triangle, subtracting means adding the reverse arrow; rain on a runner slants at $\tan\theta = \text{runner speed}/\text{rain speed}$. {lvl=2}
4. Boat and river: ground velocity = velocity in water + velocity of the water. Aim straight across for the least time; aim upstream with $\sin\theta = w/u$ to land opposite. {lvl=2}
5. Closest approach: step into one body's frame, where the other moves in a straight line, and drop a perpendicular. A constant bearing with a shrinking gap is a collision. {lvl=3}
6. A swimmer slower than the current gets the least drift on the tangent to the velocity circle: drift = $d\sqrt{w^2 - u^2}/u$. {lvl=3}
7. $\mathbf a_{AB} = \mathbf a_A - \mathbf a_B$: bodies in free fall have zero relative acceleration, so gravity cancels from their relative motion. {lvl=3}
8. To intercept, match the target's sideways drift and use the rest of your speed to close the gap. {lvl=4}
9. Frames in steady relative motion agree on accelerations, hence on forces and laws; accelerating frames do not. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Subtract the observer's velocity, not the object's: $\mathbf v_{AB} = \mathbf v_A - \mathbf v_B$ is the opposite of $\mathbf v_{BA}$. {lvl=1}
- Choose the positive direction first, then put in the signs: a train coming towards you has a negative sign. {lvl=1}
- Add velocities for a body in two motions at once (resultant); subtract them for one body seen from another. Do not mix the two. {lvl=2}
- Muzzle speed and boat speed are measured from the gun and the water, not from the ground. {lvl=2}
- Fastest crossing is not straight-across landing: aiming straight across takes the least time but lands downstream. {lvl=2}
- A swimmer slower than the current can never land opposite; do not set $\sin\theta = w/u$ if $w > u$. {lvl=3}
- Closest approach is the perpendicular distance in the relative frame, not the distance at the instant when one of them passes the other's position. {lvl=3}
:::
