---
title: Equations of motion
summary: How far does a car need to stop, and why does doubling your speed quadruple the distance? Three equations answer it.
ncert: ["Class 9 Science (Exploration) · Ch 4 Describing Motion Around Us (§4.3 Kinematic equations for motion in a straight line with constant acceleration)", "Class 11 Physics · Ch 2 Motion in a Straight Line (§2.4 Kinematic equations for uniformly accelerated motion)"]
up_to: Olympiad
builds_on: [Speed, velocity, acceleration, Distance and displacement]
notes_prompt: Explain to a friend why a car going twice as fast needs four times the distance to stop, and which of the three equations of motion you would pick if you were not told the time.
margin:
  - kind: history
    title: History
    text: "Galileo rolled balls down gently sloped planks around 1600 and found that the distances covered in successive equal times were in the ratio 1 : 3 : 5 : 7. That was the first experimental proof that a falling body gains speed steadily, and it let him slow gravity down enough to time it with a water clock [Unverified: details of his apparatus are debated]."
  - kind: tip
    title: Exam favourite
    text: "Write the five letters u, v, a, s, t, tick the three you know and the one you want, and pick the equation that leaves out the fifth. Before using v = u + at for braking, check the body has not already stopped."
  - kind: olympiad
    title: Olympiad link
    text: "Two bodies in free fall have the same acceleration, so relative to each other they move at constant velocity. A dropped ball and a ball thrown up from the ground meet after a time equal to the gap divided by the throw speed, whatever g is."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 8 Motion (feynmanlectures.caltech.edu)" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 2 Motion Along a Straight Line, constant acceleration and free-fall acceleration [Unverified chapter number]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 3 Rest and Motion: Kinematics (uniformly accelerated motion, free fall) [Unverified]" }
cards:
  - { front: "The three equations of motion for constant acceleration?", back: "$v = u + at$, $\\;s = ut + \\tfrac12at^2$, $\\;v^2 = u^2 + 2as$." }
  - { front: "Which equation has no time in it?", back: "$v^2 = u^2 + 2as$. Use it when t is neither given nor asked, such as the stopping distance of a car." }
  - { front: "Stopping distance of a car travelling at speed u with braking deceleration a?", back: "$s = u^2/(2a)$. Double the speed and the distance becomes four times as large." }
  - { front: "A ball is thrown up at speed u. Maximum height and total time in the air?", back: "$h = u^2/(2g)$ and $T = 2u/g$. It lands with the same speed u it left with." }
  - { front: "How far does a body starting from rest go in the 1st, 2nd, 3rd... seconds?", back: "In the ratio $1 : 3 : 5 : 7 \\dots$ (Galileo's odd numbers), because $s \\propto t^2$." }
  - { front: "When do the three equations NOT hold?", back: "When the acceleration changes with time or position. Then you must integrate $a$ to find $v$ and $v$ to find $x$." }
core:
  idea: 'When the acceleration stays the same, the velocity changes by the same amount every second. That single fact gives three equations linking the starting velocity, the finishing velocity, the acceleration, the time and the displacement. Know any three and you can find the rest.'
  formulas:
    - tex: 'v = u + at'
      label: 'Final velocity (no displacement in it)'
    - tex: 's = ut + \tfrac12at^2'
      label: 'Displacement (no final velocity in it)'
    - tex: 'v^2 = u^2 + 2as'
      label: 'Velocity from displacement (no time in it)'
  conditions:
    - 'Constant acceleration: the same size and the same direction for the whole motion'
    - 'Straight-line motion, with one direction chosen as positive and every u, v, a, s given its sign'
    - 'For free fall: air resistance neglected and a = g = 9.8 m/s² downward (often rounded to 10 m/s²)'
  sign: 'Choose the positive direction first and give u, v, a and s signs to match. Before using the equations for braking, check whether the body stops before the time you are asked about: they do not know that it cannot go backwards.'
outcomes:
  - 'Use v = u + at, s = ut + ½at² and v² = u² + 2as and pick the one that fits what is given'
  - 'Find the stopping distance of a vehicle and explain why it grows as the square of the speed'
  - 'Solve free-fall and vertical-throw problems with a sign convention'
  - 'Solve catch-up and meeting problems by writing both positions at the same clock time'
  - 'Use symmetry and relative motion to solve two-body free-fall problems without heavy algebra'
opener:
  story: |
    A school zone has a speed limit of 30 km/h, and a highway has 100. Every driver knows that the faster you go, the longer you need to stop. (We mean the braking distance: the road covered after the brake bites.) But how much longer? If you are going twice as fast, do you need twice the distance to stop, or more?

    Here is the shock. **Twice as fast needs four times the distance.** Three times as fast needs nine times. At 100 km/h a car needs about eleven times the braking distance it needs at 30 km/h, even though the speed is only a little over three times higher.

    Why would the distance grow like a square? The answer is hidden in a few lines of algebra that you can rebuild yourself in this lesson, starting from nothing but the idea of steady acceleration.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two cars: one at speed v stops in a short distance, one at twice the speed stops in four times the distance"><line x1="20" y1="90" x2="300" y2="90" style="stroke:var(--muted);stroke-width:2"/><line x1="20" y1="190" x2="300" y2="190" style="stroke:var(--muted);stroke-width:2"/><rect x="24" y="68" width="30" height="16" rx="3" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="24" y="168" width="30" height="16" rx="3" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="60" y="100" width="40" height="12" rx="2" style="fill:var(--c)"/><rect x="60" y="200" width="160" height="12" rx="2" style="fill:var(--chem)"/><text x="20" y="54" style="font-size:12px;fill:var(--ink)">speed v: stops in distance d</text><text x="20" y="154" style="font-size:12px;fill:var(--ink)">speed 2v: stops in 4d</text><text x="108" y="110" style="font-size:11px;fill:var(--muted)">d</text><text x="228" y="210" style="font-size:11px;fill:var(--muted)">4d</text><text x="66" y="232" style="font-size:11px;fill:var(--muted)">same braking in both</text></svg>'
life:
  - 'Road-safety rules (30 km/h near schools, sharp fines for speeding) are the v² law written as policy: a small increase in speed adds a large amount of stopping distance.'
  - 'Cricket fielders and drivers judge in a split second whether they can stop or reach something, by feel for how speed turns into distance.'
  - 'A stone dropped into a well and the sound of the splash tell you the depth: s = ½gt² with t counted in seconds.'
  - 'An airliner needs a runway of kilometres: its take-off roll is s = v²/2a, where v is the speed to get airborne and a is limited by the engines.'
  - 'Rockets, trains leaving a station and lifts all spend most of their journey at near-constant acceleration, so these three equations plan them.'
models:
  - name: 'Square laws'
    text: 'Distance grows with the square of the time or of the speed because a steadily changing rate compounds: the speed grows with t and the distance covered at that speed grows with t again. Anything that is a rate of a rate (area, kinetic energy, drag) shows a square.'
  - name: 'Pick the equation that leaves out what you do not need'
    text: 'List what you know and what you want, then use the tool that does not involve the unknowns you do not care about. Good problem solvers choose the method that skips the unknown, instead of fighting through every step.'
  - name: 'Same push, same result for everybody'
    text: 'Two bodies in free fall share the same acceleration, so relative to each other they simply drift at constant velocity. When two things experience the same background effect, subtract it away and the problem becomes simple.'
links:
  - leaf: 'phy/projectile-motion'
    name: 'Projectile motion'
    same: 'A projectile is two independent straight-line motions: steady horizontal motion and vertical motion with a = −g. The same three equations are used on the vertical axis.'
    differs: 'Here there is one line. A projectile has two components that must be combined, and its path is a curve (a parabola).'
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'The constant acceleration in free fall, g, is not a coincidence. Gravitation explains it as GM/R² and shows that every body falls at the same rate.'
    differs: 'The equations here assume g is constant. Gravitation shows that g actually shrinks as you rise to great heights.'
next:
  q: 'Can you read a whole journey off a picture? If the area under a velocity-time graph is the distance travelled, what does the steepness of a position-time graph tell you?'
  leaf: 'phy/motion-graphs'
  name: 'Motion graphs'
symbols:
  - s: 'u'
    means: 'initial velocity, the velocity at the start of the interval (m/s)'
  - s: 'v'
    means: 'final velocity, the velocity at the end of the interval (m/s)'
  - s: 'a'
    means: 'acceleration, constant here (m/s^2)'
  - s: 't'
    means: 'time taken for the interval (s)'
  - s: 's'
    means: 'displacement during the interval (m)'
  - s: 'g'
    means: 'acceleration of free fall, 9.8 m/s^2 downward (often taken as 10 m/s^2)'
  - s: 'h'
    means: 'height above a starting point (m)'
  - s: 'n'
    means: 'a whole number counting seconds, as in the nth second'
---

:::hook
q: A car braking with a steady deceleration stops in 10 m from a speed of 36 km/h. With the same braking, how far does it need to stop from 72 km/h?
options: ["20 m", "40 m", "30 m", "100 m"]
answer: 1
right: Right, 40 m. Twice the speed means four times the stopping distance, because the distance goes as the square of the speed. This is why a small increase in speed makes a big difference in a crash.
wrong: It is not simply twice. The stopping distance is proportional to the square of the speed, so doubling the speed multiplies the distance by 4: 4 × 10 m = 40 m.
:::

## Steady change of velocity {lvl=1 id=s-steady label="Class 9"}

Take a car that starts from rest and speeds up by 2 m/s every second. That is a constant **acceleration** of 2 m/s². After 1 s it moves at 2 m/s, after 2 s at 4 m/s, after 3 s at 6 m/s. You can see the pattern: the velocity is 2 times the number of seconds.

Now start the car already moving. Call the starting velocity the **initial velocity**, written $u$ for short, and the velocity at the end of the time $t$ the **final velocity**, $v$. Each second adds $a$ to the velocity, so after $t$ seconds the velocity has gone up by $a\times t$:

$$v = u + at.$$

Read it as: the final velocity is the starting velocity plus the acceleration times the time. A train moving at 5 m/s with $a = 0.5$ m/s² for 20 s reaches $v = 5 + 0.5\times20 = 15$ m/s.

This equation is nothing more than the definition of acceleration, $a = (v - u)/t$, rearranged. It tells you how fast the body goes, but not how far. For that we need another idea.

:::qc lvl=1
q: A cyclist moving at 4 m/s speeds up at a steady 0.5 m/s² for 12 s. What is her final velocity?
options: ["10 m/s", "6 m/s", "2 m/s", "52 m/s"]
answer: 0
right: Right. v = u + at = 4 + 0.5 × 12 = 10 m/s.
wrong: Add the gain to the start: the gain is a × t = 0.5 × 12 = 6 m/s, so v = 4 + 6 = 10 m/s.
:::

## How far does it go? {lvl=1 id=s-far label="Class 9"}

Distance is speed times time, as long as the speed does not change. But now the speed does change. Here is the clever step. When the velocity changes steadily, its **average** over the interval is exactly half way between the start and the end, $(u + v)/2$. So the displacement $s$ is that average times the time:

$$s = \frac{u + v}{2}\,t.$$

Read it as: displacement is the average velocity times the time. Put in $v = u + at$ and tidy up:

$$s = ut + \tfrac12at^2.$$

Read it as: the distance you would cover at your starting speed, $ut$, plus an extra $\tfrac12at^2$ gained because you kept speeding up.

Now we can answer the question the last lesson left open. A car starts from rest ($u = 0$) and accelerates at $a = 2$ m/s² for $t = 10$ s. Then $v = 0 + 2\times10 = 20$ m/s and $s = 0 + \tfrac12\times2\times10^2 = 100$ m. The car is doing 72 km/h after only 100 m.

There is a picture behind the formula. Plot the velocity against time: with steady acceleration it is a straight sloping line. The area under it, a trapezoid, is the displacement.

:::figure caption="Velocity against time for constant acceleration. The rectangle (height u, width t) is ut. The triangle on top (base t, height at) is ½·at·t = ½at². Together they are the displacement s."
<svg viewBox="0 0 360 200" role="img" aria-label="Velocity-time graph: a sloping line from u to v, with the area below split into a rectangle and a triangle">
<line class="ln" x1="40" y1="170" x2="330" y2="170"/><line class="ln" x1="40" y1="170" x2="40" y2="20"/>
<path d="M40 110 L300 40 L300 170 L40 170Z" class="m2"/>
<line class="ray" x1="40" y1="110" x2="300" y2="40" style="stroke-width:2.5"/>
<line class="faint" x1="40" y1="110" x2="300" y2="110"/><line class="faint" x1="300" y1="40" x2="300" y2="170"/>
<text class="k" x="14" y="114">u</text><text class="k" x="310" y="46">v</text><text class="k" x="296" y="188">t</text><text class="k" x="170" y="190">time</text><text class="k" x="46" y="16">velocity</text>
<text x="130" y="148">rectangle = ut</text><text x="168" y="86">triangle = ½at²</text>
</svg>
:::

:::qc lvl=1
q: A car starts from rest and accelerates at 2 m/s² for 10 s. How far does it travel?
options: ["100 m", "20 m", "200 m", "50 m"]
answer: 0
right: Right. s = ut + ½at² = 0 + ½ × 2 × 10² = 100 m.
wrong: With u = 0, s = ½at² = ½ × 2 × 100 = 100 m. (200 m would be v × t, which wrongly uses the final speed for the whole time.)
:::

## When time does not matter {lvl=1 id=s-notime label="Class 9"}

Often nobody tells you the time and nobody asks for it. A driver sees a hazard 30 m ahead: can the car stop? Time is just a stepping stone. Remove it. From $v = u + at$ we get $t = (v - u)/a$. Put it into $s = \frac{u + v}{2}t$:

$$s = \frac{(u+v)(v-u)}{2a} = \frac{v^2 - u^2}{2a},\qquad\text{so}\qquad v^2 = u^2 + 2as.$$

Read it as: the change in the square of the velocity is twice the acceleration times the distance.

Here is the stopping distance. The car ends with $v = 0$, so $0 = u^2 + 2as$ and the distance is $s = -u^2/(2a)$. The acceleration is negative (braking), so $s$ comes out positive. A car at 36 km/h = 10 m/s braking at $a = -5$ m/s² needs $s = 100/10 = 10$ m. At 72 km/h = 20 m/s the same brakes need $400/10 = 40$ m. There is the square: the speed went up by 2, the distance by $2^2 = 4$.

Here are the equations side by side, with the one quantity each leaves out. There are five letters, $u, v, a, s, t$. Choose the equation that skips the letter you neither know nor want.

| Equation | Leaves out |
|---|---|
| $v = u + at$ | $s$ |
| $s = ut + \tfrac12at^2$ | $v$ |
| $v^2 = u^2 + 2as$ | $t$ |
| $s = \tfrac12(u+v)t$ | $a$ |

(The Class 11 book writes the same equations with $v_0$ for $u$ and $x$ for $s$.)

:::qc lvl=1
q: A train moving at 30 m/s brakes uniformly at 1.5 m/s² until it stops. Which equation gives the stopping distance directly, and what is the distance?
options: ["v² = u² + 2as, giving 300 m", "v = u + at, giving 20 m", "s = ut + ½at², giving 450 m", "s = ½(u + v)t, giving 150 m"]
answer: 0
right: Right. Time is not given, so use v² = u² + 2as with v = 0: s = 30²/(2 × 1.5) = 300 m.
wrong: The time is neither given nor asked, so use the equation without t: 0 = 30² − 2 × 1.5 × s gives s = 900/3 = 300 m.
:::

## Falling and throwing {lvl=2 id=s-free label="Class 11"}

The most important constant acceleration is **free fall**: the motion of a body under gravity alone, with air resistance ignored. Every body in free fall near the Earth's surface gains 9.8 m/s of speed each second, a downward acceleration called $g$. We often round it to 10 m/s² for quick work.

Because there are two directions, up and down, choose a positive direction first. Take upward as positive. Then $a = -g$ for the whole flight, whether the body is going up, at the top, or coming down. A ball thrown up at $u = 20$ m/s (taking $g = 10$):

- It slows by 10 m/s every second: 20, 10, 0, −10, −20 m/s at $t = 0, 1, 2, 3, 4$ s.
- At the top $v = 0$, so $0 = u^2 - 2gh$, giving $h = u^2/(2g) = 400/20 = 20$ m. The time to reach it is $t = u/g = 2$ s.
- The ball falls back in the same 2 s and lands at $-20$ m/s: **it returns with the speed it left with**. The total time in the air is $2u/g = 4$ s.

:::figure caption="Ball thrown upwards at 20 m/s (g = 10 m/s²). Heights at each second and the velocity there (up positive). Going up and coming down are mirror images."
<svg viewBox="0 0 360 230" role="img" aria-label="Vertical motion of a ball: heights 0, 15, 20, 15, 0 metres at 0 to 4 seconds, with velocities 20, 10, 0, minus 10, minus 20">
<line class="gr" x1="30" y1="200" x2="340" y2="200"/>
<line class="faint" x1="95" y1="200" x2="95" y2="30"/><line class="faint" x1="250" y1="200" x2="250" y2="30"/>
<circle class="obj" cx="95" cy="200" r="5"/><circle class="obj" cx="95" cy="80" r="5"/><circle class="obj" cx="95" cy="50" r="5"/><circle class="obj" cx="250" cy="50" r="5"/><circle class="obj" cx="250" cy="80" r="5"/><circle class="obj" cx="250" cy="200" r="5"/>
<text x="40" y="190">t=0 s</text><text x="40" y="84">1 s</text><text x="10" y="44">t=2 s top</text>
<text class="k" x="104" y="192">0 m, v = +20</text><text class="k" x="104" y="84">15 m, v = +10</text><text class="k" x="104" y="54">20 m, v = 0</text>
<text x="262" y="192">4 s</text><text x="262" y="84">3 s</text><text class="k" x="272" y="54">v = 0 at 20 m</text>
<text class="k" x="170" y="130">up: slowing</text><text class="k" x="244" y="150" style="text-anchor:end">down: speeding up</text>
</svg>
:::

Dropping a stone is the same with $u = 0$ and downward taken as positive, so $a = +g$ and $h = \tfrac12gt^2$. A stone dropped into a well that you hear splash 2 s later has fallen about $\tfrac12\times10\times4 = 20$ m (ignoring the time the sound takes). [Inference] The sound's own travel time makes the real depth a little smaller.

:::qc lvl=2
q: A ball is thrown vertically upwards at 30 m/s (g = 10 m/s²). How long is it in the air before it returns to the hand?
options: ["6 s", "3 s", "9 s", "12 s"]
answer: 0
right: Right. Time to the top is u/g = 3 s, and the fall takes the same 3 s: 2u/g = 6 s.
wrong: Going up takes u/g = 30/10 = 3 s, and coming down takes the same 3 s, so the total is 6 s.
:::

## Galileo's odd numbers {lvl=2 id=s-galileo label="Class 11"}

Start from rest with constant acceleration. In the first second the body covers $\tfrac12a(1)^2 = \tfrac12a$. In the first 2 s it covers $\tfrac12a(4) = 2a$, so in the second second alone it covers $2a - \tfrac12a = \tfrac32a$. In the first 3 s it covers $\tfrac92a$ and in the third second alone $\tfrac52a$. In units of $\tfrac12a$ the distances in successive seconds are 1, 3, 5, 7...

That is Galileo's rule of odd numbers, and it is how he showed from a rolling ball on a slope that its speed grew steadily. The total distance covered goes as $t^2$: 1, 4, 9, 16... times $\tfrac12a$. Double the time, four times the distance, the same square law we met in braking.

A falling stone covers about 5 m in the first second, 15 m in the next, 25 m in the next. After 3 s it has fallen $5 + 15 + 25 = 45$ m, which is $\tfrac12\times10\times9$.

:::qc lvl=2
q: A body starts from rest with constant acceleration and travels 4 m in the first second. How far does it travel in the third second?
options: ["20 m", "12 m", "36 m", "9 m"]
answer: 0
right: Right. The distances in successive seconds are in the ratio 1 : 3 : 5, so the third second gives 5 × 4 = 20 m.
wrong: Use Galileo's odd numbers: successive seconds from rest give 1 : 3 : 5. The first is 4 m, so the third is 5 × 4 = 20 m.
:::

## Strategies for tough problems {lvl=3 id=s-strategies label="JEE"}

**The nth second.** The distance covered in the $n$th second is the distance in $n$ seconds minus that in $n - 1$ seconds:

$$s_n = u + a\left(n - \tfrac12\right).$$

Read it as: it equals the velocity half way through that second (at time $n - \tfrac12$). A body with $u = 3$ m/s and $a = 2$ m/s² covers $3 + 2\times4.5 = 12$ m in the 5th second.

**Catching up.** For two bodies, write each position against the same clock and set them equal. A truck passes a stationary car at 15 m/s, and at that instant the car starts with $a = 3$ m/s². The truck's position is $15t$ and the car's is $\tfrac12\times3t^2$. Equal when $1.5t^2 = 15t$, so $t = 10$ s, at $150$ m from the start. The car's speed then is $3\times10 = 30$ m/s: **the car must travel at twice the truck's speed to catch it**. (The two have equal speeds at $t = 5$ s, the moment the gap is largest.)

**Braking: has the body already stopped?** A car moving at 15 m/s brakes at 3 m/s². How far does it go in 8 s? The formula $s = ut + \tfrac12at^2 = 15\times8 - \tfrac12\times3\times64 = 24$ m looks fine, but it is wrong. The car stops after $t = u/|a| = 5$ s, and the equation would run it backwards after that. The correct distance is the stopping distance $u^2/2|a| = 225/6 = 37.5$ m. Always check how long the body can keep moving.

**Changing acceleration.** The three equations need constant $a$. If $a$ varies, you must integrate: $v = u + \int a\,dt$ and $s = \int v\,dt$. For constant $a$ these integrals give back $v = u + at$ and $s = ut + \tfrac12at^2$, which is a check on the whole idea.

:::qc lvl=3
q: A car moving at 20 m/s brakes at 4 m/s². How far does it travel in the first 8 s?
options: ["50 m", "32 m", "160 m", "80 m"]
answer: 0
right: Right. The car stops after 20/4 = 5 s, so in 8 s it covers just the stopping distance 20²/(2 × 4) = 50 m. The formula with t = 8 gives 32 m, which is meaningless because the car would be reversing.
wrong: Check when the car stops: t = u/a = 5 s. After that it is stationary. So the distance is the stopping distance u²/2a = 50 m, not the formula's value at 8 s.
:::

## Two tricks from symmetry {lvl=4 id=s-tricks label="Olympiad"}

**Relative motion in free fall.** A ball is dropped from a tower of height $H$ at the instant a second ball is thrown up from the ground at speed $u$. Both have acceleration $-g$, so relative to each other the acceleration is zero: the dropped ball approaches the other at a steady $u$. The gap $H$ closes in a time $H/u$, whatever the value of $g$. For $H = 40$ m, $u = 20$ m/s the balls meet at $t = 2$ s, at the height $40 - \tfrac12\times10\times4 = 20$ m. This works only as long as both are still in flight, so $H/u$ must be less than both landing times.

**Two times at the same height.** A ball thrown up passes every level below the top twice, once going up and once coming down. Let it pass level $A$ twice, $T_A$ apart, and a higher level $B$ twice, $T_B$ apart. The two passes at a height $h$ happen at $t = \dfrac{u \pm \sqrt{u^2 - 2gh}}{g}$, so their gap is $T = \dfrac{2\sqrt{u^2 - 2gh}}{g}$. Squaring, $\dfrac{g^2T^2}{4} = u^2 - 2gh$. Subtracting the equation for $B$ from the one for $A$ removes the unknown $u$:

$$g = \frac{8\,(h_B - h_A)}{T_A^2 - T_B^2}.$$

Read it as: you can measure $g$ from just two time gaps and a height difference, without knowing the launch speed or the starting time. [Unverified] Versions of this trick appear in classic olympiad problems and in precision measurements of $g$.

:::qc lvl=4
q: A ball thrown straight up passes a low level L and a higher level H, each of them twice (once going up, once coming down). Which statement is true?
options: ["The gap between the two passes is larger at L than at H", "The gap between the two passes is larger at H than at L", "The gap is the same at both levels", "The ball passes H only once"]
answer: 0
right: Right. At the very top the two passes merge into one, so the gap shrinks to zero as the level rises. The gap is therefore larger at the lower level L.
wrong: Think about the highest point of the flight: there the ball passes only once, so the gap is zero. The gap shrinks as the level gets higher, so it is larger at L.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. With constant acceleration the velocity changes by the same amount every second: $v = u + at$. {lvl=1}
2. Displacement is average velocity times time; this gives $s = ut + \tfrac12at^2$. {lvl=1}
3. Without time: $v^2 = u^2 + 2as$; the stopping distance $u^2/2a$ grows as the square of the speed. {lvl=1}
4. Free fall is constant acceleration with $a = -g$ (up positive); a ball thrown up returns with the speed it left with. {lvl=2}
5. From rest the distances in successive seconds go as 1 : 3 : 5 : 7. {lvl=2}
6. For catch-up problems, write both positions against the same clock and equate them; check whether a braking body has already stopped. {lvl=3}
7. If the acceleration varies, integrate; if two bodies share the same acceleration, subtract it away. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Using the equations when the acceleration changes: they hold only for constant $a$. {lvl=1}
- Mixing units: convert km/h to m/s (divide by 3.6) before putting numbers in. {lvl=1}
- Forgetting signs: with upward positive, $a = -g$ and a falling body has negative $v$. {lvl=2}
- Treating zero velocity at the top as zero acceleration; $a = -g$ still. {lvl=2}
- Putting the full time into $s = ut + \tfrac12at^2$ for a braking body that has stopped earlier. {lvl=3}
- Using $v^2 = u^2 + 2as$ and taking the square root without choosing the correct sign for $v$. {lvl=3}
:::
