---
title: Momentum and the second law
summary: Why drawing your hands back when you catch a cricket ball saves your fingers, and the one rule, force equals change of motion, that explains it.
ncert: ["Class 9 Science (Exploration) · Ch 6 Forces and Laws of Motion (second law, momentum)", "Class 11 Physics · Ch 4 Laws of Motion (§4.5–4.7, impulse)"]
up_to: Olympiad
builds_on: [Inertia and the first law, Speed, velocity and acceleration, Vectors in motion]
notes_prompt: Explain to a friend why an airbag, a crumple zone and a high-jump mat all work, using only the idea that a force acting for longer changes motion by the same amount with a smaller push.
margin:
  - kind: history
    title: History
    text: "Newton did not write F = ma. In the Principia (1687) he said that the change of motion is proportional to the force. By 'motion' he meant what we call momentum. The familiar F = ma form came later, from Euler in the 1700s [Unverified date]."
  - kind: tip
    title: Exam habit
    text: "Before any sign matters, pick a positive direction. A ball hitting a wall at 20 m/s and returning at 15 m/s changes velocity by 15 − (−20) = 35 m/s, not 5."
  - kind: olympiad
    title: Olympiad link
    text: "F = dp/dt is the true form; F = ma is its special case for constant mass. For rockets, rain gathering on a falling drop or sand on a belt, the mass changes, and only the momentum form, applied to a clearly chosen system, gives the right answer."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch 5 Force and Motion I (second law, §5-1) and Ch 9 Centre of Mass and Linear Momentum (impulse) [Unverified section numbers]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch 9 Newton's Laws of Dynamics, and Ch 10 Conservation of Momentum [Unverified chapter numbers]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 5 Newton's Laws of Motion and Ch 9 Centre of Mass, Linear Momentum, Collision [Unverified]" }
cards:
  - { front: "State Newton's second law.", back: "The net force on a body equals the rate of change of its momentum: $\\vec F = d\\vec p/dt$. For constant mass this is $\\vec F = m\\vec a$." }
  - { front: "Define momentum and give its unit.", back: "$\\vec p = m\\vec v$, mass times velocity. Unit: kg m/s (same as N s). It is a vector, pointing along the velocity." }
  - { front: "What is impulse?", back: "$\\vec J = \\vec F\\,\\Delta t$ (or the area under the force-time graph). It equals the change in momentum, $\\vec J = \\Delta\\vec p$." }
  - { front: "Why does a longer stopping time mean a smaller force?", back: "The change of momentum is fixed by the mass and the speeds. $F_{av} = \\Delta p/\\Delta t$, so a longer $\\Delta t$ gives a smaller average force." }
  - { front: "A 60 kg person is in a lift accelerating upward at $a$. What does the scale read?", back: "$N = m(g + a)$. Accelerating up reads more than $mg$; accelerating down reads less; in free fall it reads zero." }
  - { front: "What is the newton?", back: "The force that gives a 1 kg mass an acceleration of 1 m/s². About the weight of a medium apple." }
core:
  idea: 'A net force changes a body''s momentum, its mass times velocity, at a rate equal to the force. For a body of fixed mass, acceleration is the net force divided by the mass and points along the net force. The same force acting for twice as long changes the motion twice as much.'
  formulas:
    - tex: '\vec F_{\text{net}} = \dfrac{d\vec p}{dt},\qquad \vec p = m\vec v'
      label: 'Second law: force is the rate of change of momentum'
    - tex: '\vec F_{\text{net}} = m\vec a'
      label: 'Constant mass: acceleration = force ÷ mass'
    - tex: '\vec J = \vec F_{\text{av}}\,\Delta t = \Delta\vec p'
      label: 'Impulse equals the change in momentum'
  conditions:
    - 'Observed from an inertial frame'
    - 'F = ma needs a body of constant mass; for changing mass use F = dp/dt on a clearly defined system'
    - 'Speeds much less than the speed of light'
    - 'F is the net force: the vector sum of every force on the body'
  sign: 'Choose and write down a positive direction first. Change of momentum is final minus initial, with signs: a rebound reverses the sign of the velocity.'
outcomes:
  - 'Use F = ma with correct units and direction, and explain why acceleration depends on both force and mass'
  - 'Define momentum and impulse, and use F = Δp/Δt to find average forces in catches, kicks and crashes'
  - 'Explain airbags, crumple zones, landing mats and bubble wrap with one idea'
  - 'Solve problems with forces at angles, lifts and variable forces F(t)'
  - 'Handle streams and variable mass, such as sand on a belt and the rocket equation'
opener:
  story: |
    A cricket ball is hurtling towards you at 90 km/h, which is 25 metres per second. Catch it with your hands held rigid and your palms sting for ten minutes. Catch it the way every fielder is taught, drawing your hands back as the ball arrives, and it feels like nothing at all.

    Now think about what you did to the ball. In both catches it ended up at rest in your hands. Whatever "amount of motion" it had, you took all of it away. You took away exactly the same amount each time.

    So the same ball, the same speed and the same hands, yet one catch hurts and the other does not. What changed? The answer, once you see it, explains airbags, bubble wrap and why you bend your knees when you jump down from a wall.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two force against time graphs with equal areas: a tall narrow spike for stiff hands and a low wide hump for hands drawn back"><line x1="40" y1="200" x2="300" y2="200" style="stroke:var(--ink);stroke-width:1.5"/><line x1="40" y1="200" x2="40" y2="30" style="stroke:var(--ink);stroke-width:1.5"/><text x="46" y="42" style="font-size:11px;fill:var(--muted)">force</text><text x="270" y="216" style="font-size:11px;fill:var(--muted)">time</text><path d="M60 200 L80 50 L100 200 Z" style="fill:color-mix(in srgb,var(--chem) 30%,var(--surface));stroke:var(--chem);stroke-width:2"/><path d="M130 200 L190 150 L250 200 Z" style="fill:color-mix(in srgb,var(--c) 25%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="52" y="226" style="font-size:11px;fill:var(--muted)">stiff hands</text><text x="150" y="226" style="font-size:11px;fill:var(--muted)">hands drawn back</text><text x="108" y="70" style="font-size:11px;fill:var(--ink)">big force, short time</text><text x="130" y="142" style="font-size:11px;fill:var(--ink)">small force, long time</text><text x="90" y="20" style="font-size:11px;fill:var(--muted)">the two shaded areas are equal</text></svg>'
symbols:
  - s: 'F'
    means: 'net force on the body: the push or pull left after adding all forces (newtons, N)'
  - s: 'm'
    means: 'mass of the body (kg)'
  - s: 'a'
    means: 'acceleration: how fast the velocity changes (m/s^2)'
  - s: 'p'
    means: 'momentum, mass times velocity: the "amount of motion" (kg m/s)'
  - s: 'J'
    means: 'impulse: force times the time it acts, equal to the change in momentum (N s, same as kg m/s)'
  - s: '\Delta t'
    means: 'a short stretch of time (s)'
  - s: 'N'
    means: 'normal force: the push of a surface or floor on a body (N)'
  - s: 'v_e'
    means: 'speed of the exhaust gas relative to the rocket (m/s)'
life:
  - 'Airbags, seat belts and crumple zones stretch out the time of a crash, so the force on you is far smaller.'
  - 'A cricketer drawing the hands back, a goalkeeper cushioning a shot, a boxer "rolling with the punch".'
  - 'Bending your knees when you land from a jump, and the sand or foam mat in a high-jump pit.'
  - 'The reading on a bathroom scale in a lift: you feel heavy as it starts up and light as it starts down.'
  - 'Rockets and jets: a steady stream of gas shot backwards gives a steady force forwards.'
models:
  - name: 'Same total, spread out'
    text: 'When the total change is fixed, a longer time makes the rate smaller. A big bill paid over 12 months hurts less per month; a flood spread over a week does less damage than in an hour. Ask: is the total fixed, and can I stretch the time?'
  - name: 'Cause equals rate of change'
    text: 'A force does not say what the motion is; it says how fast the motion is changing. Likewise, money flow is a rate of change of savings, and growth is a rate of change of size. Never mix up the quantity with its rate.'
  - name: 'Same push, different response'
    text: 'The same push gives a bigger change to something light than to something heavy. Pressure on a small firm moves it more than on a huge one. Ask how much inertia the thing has before judging the size of the push.'
links:
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'Mass appears twice: as inertia in $F = ma$, and as the "charge" of gravity in $F = GMm/r^2$. These cancel, and that is why all bodies fall with the same acceleration.'
    differs: 'The second law holds for any force. Gravity is one particular force law that you plug into it.'
  - leaf: 'phy/collisions'
    name: 'Collisions'
    same: 'Collisions are impulses: a huge force for a tiny time. The bodies swap momentum, and the total change of the system is the same whatever the details of the force.'
    differs: 'In a collision, you often do not know the force or the time, so you apply conservation of momentum to the whole system instead of $F = ma$ to one body.'
next:
  q: 'When a bat hits a ball, the bat changes the ball''s momentum. Does the ball do anything to the bat? And if so, why does the bat not fly off backwards?'
  leaf: 'phy/third-law'
  name: 'Third law'
---

:::hook
q: You catch a cricket ball at 25 m/s. Whether your hands are stiff or drawn back, the ball ends up at rest. Why does the second way hurt far less?
options: ["The ball has less energy when you draw your hands back", "The same change of motion happens over a longer time, so the average force is smaller", "Drawing your hands back makes the ball lighter", "The ball is already slower before it touches your hands"]
answer: 1
right: Right. The ball's change of motion is fixed by its mass and speed. Spread over 0.1 s instead of 0.02 s, the average force is five times smaller. Newton's second law says exactly this: force equals the change of momentum divided by the time it takes.
wrong: In both catches the ball starts at 25 m/s and ends at rest, so the change in its motion is identical. The difference can only be how long the change takes.
:::

## A bigger push, a bigger change {lvl=1 id=s-fma label="Class 9"}

Push a shopping trolley with a steady push and it speeds up steadily. Push twice as hard and it speeds up twice as fast. Load it with three times the shopping and it speeds up three times more slowly. Those two observations are the **second law**:

> The acceleration of a body is the net force divided by its mass, in the direction of the net force.

Written with symbols, $a = F/m$, or more usefully

$$F = ma.$$

Read it as: the force you need equals the mass times how quickly you want the velocity to change.

The unit of force is the **newton** (N): the force that gives a 1 kg mass an acceleration of 1 m/s². A medium apple weighs about 1 N, since $0.1\ \text{kg} \times 9.8 \approx 1$. When a force of 1 N acts on a 1 kg trolley, in one second its speed rises by 1 m/s.

:::worked title="How hard does a bowler push?"
A bowler's hand accelerates a 0.16 kg cricket ball from rest to 30 m/s in 0.1 s. The acceleration is $a = 30/0.1 = 300$ m/s². The net force is $F = ma = 0.16 \times 300 = 48$ N, about the weight of a 5 kg bag of rice. The ball goes up to 300 m/s every second the force lasts, but the force acts for only a tenth of a second.
:::

Weight is just the second law in action with $a = g$: the Earth's pull on a mass $m$ is $mg$, and a freely falling body, with only this force on it, accelerates at $g$.

:::qc lvl=1
q: A force of 20 N gives a trolley an acceleration of 4 m/s². The same 20 N is applied to a trolley of twice the mass. What is the acceleration?
options: ["8 m/s²", "4 m/s²", "2 m/s²", "10 m/s²"]
answer: 2
right: Right. $a = F/m$, and doubling the mass halves the acceleration: 2 m/s².
wrong: The original mass was $m = 20/4 = 5$ kg. The new mass is 10 kg, so $a = 20/10 = 2$ m/s².
:::

## Motion has an amount: momentum {lvl=1 id=s-momentum label="Class 9"}

A cyclist and a loaded lorry both moving at 10 m/s are not equally hard to stop. Newton's name for the quantity that tells you how hard is **momentum**: the mass times the velocity, written $p = mv$. It is measured in kg m/s. Momentum has a direction, the direction of the velocity. A 0.16 kg ball at 25 m/s has momentum $0.16 \times 25 = 4.0$ kg m/s.

Newton's own statement of the second law is about momentum. It says that a force is the **rate of change of momentum**: how much the momentum changes, divided by the time it takes.

$$F = \frac{\Delta p}{\Delta t}.$$

Read it as: the force equals the change of motion per second.

If the mass stays the same, $\Delta p = m\,\Delta v$, so $F = m\,\Delta v/\Delta t = ma$. This is the old formula again, as a special case. The momentum form is the more basic one, and it is the form that gives the answer to the puzzle.

:::worked title="The cricket catch"
The ball has momentum $0.16 \times 25 = 4.0$ kg m/s and is brought to rest, so $\Delta p = 4.0$ kg m/s in either case.

Stiff hands, stopping in 0.02 s: $F = 4.0/0.02 = 200$ N.
Hands drawn back, stopping in 0.10 s: $F = 4.0/0.10 = 40$ N.

The change in momentum is the same, but a five times longer stopping time makes the average force five times smaller.
:::

:::qc lvl=1
q: The same constant force acts for the same time on a light trolley and on a heavy one, both starting from rest on a smooth floor. Which statement is true?
options: ["Both gain the same speed", "Both gain the same momentum", "The heavy one gains more momentum", "The light one gains less momentum"]
answer: 1
right: Right. Momentum gained is force times time, the same for both. The light trolley ends up with the greater speed, because the same momentum is shared over less mass.
wrong: The change of momentum is $F\,\Delta t$, which does not depend on the mass at all. Speeds differ; momenta do not.
:::

## Impulse: force times time {lvl=2 id=s-impulse label="Class 11"}

Rearrange $F = \Delta p/\Delta t$ and you get the product of force and time, called the **impulse**, $J$:

$$J = F\,\Delta t = \Delta p.$$

Read it as: push for twice as long and you change the momentum twice as much. Its unit is the newton second, N s, which is the same as kg m/s.

Real contacts, such as a bat on a ball, have a force that rises, peaks and falls within a few milliseconds. Then $F$ stands for the **average force**, and the impulse is the **area under the force-time graph**. Two contacts with the same area give the same change of momentum, however differently shaped.

:::figure caption="Force on a ball during a bat hit: it builds up, peaks and dies away in a few thousandths of a second. The shaded area is the impulse, which equals the ball's change of momentum."
<svg viewBox="0 0 360 200" role="img" aria-label="Force against time during an impact, with the area under the hump shaded">
<line class="ln" x1="40" y1="160" x2="340" y2="160"/>
<line class="ln" x1="40" y1="160" x2="40" y2="20"/>
<path class="m2" d="M80 160 Q 160 -30 240 160 Z"/>
<path class="ray" d="M80 160 Q 160 -30 240 160"/>
<text x="46" y="32">force</text><text x="300" y="178">time</text>
<text class="k" x="130" y="125">area = impulse</text>
<text x="100" y="188">contact: a few milliseconds</text>
</svg>
:::

Direction matters. Take towards the wall as negative and away from it as positive. A tennis ball of mass 0.06 kg hits a wall at 20 m/s and comes back at 15 m/s. Its velocity changes from $-20$ to $+15$, so $\Delta p = 0.06\,(15 - (-20)) = 2.1$ kg m/s. If the contact lasts 5 ms, the average force is $2.1/0.005 = 420$ N, pointing away from the wall.

:::worked title="One idea behind many safety devices"
A 60 kg person lands from a jump at 4 m/s and stops. The momentum to remove is $60 \times 4 = 240$ kg m/s. Landing stiff-legged in 0.02 s needs an average force of $240/0.02 = 12\,000$ N, twenty times body weight, enough to break bones. Bending the knees for 0.4 s needs only $240/0.4 = 600$ N, about body weight. Airbags, crumple zones, sand pits and bubble wrap are all the same trick: make the stopping time long.
:::

:::qc lvl=2
q: A ball of mass 0.5 kg hits the floor at 8 m/s and rebounds at 6 m/s, straight up. What impulse does the floor give it?
options: ["1 N s", "7 N s", "4 N s", "3 N s"]
answer: 1
right: Right. Take up as positive: $\Delta p = 0.5 \times 6 - 0.5 \times (-8) = 3 + 4 = 7$ N s, upwards.
wrong: Velocity reverses, so add the two speeds: $\Delta v = 6 + 8 = 14$ m/s, then multiply by 0.5 kg.
:::

## Using F = ma well {lvl=2 id=s-using label="Class 11"}

The law is a vector law, so it works component by component: the net force along $x$ gives the acceleration along $x$, and likewise along $y$. Forces at right angles do not interfere.

:::worked title="Two forces at right angles"
A 3 kg body feels 9 N east and 12 N north. The net force is $\sqrt{9^2 + 12^2} = 15$ N. The acceleration is $15/3 = 5$ m/s², in the direction of the net force: $\tan\theta = 12/9$, so $53°$ north of east. The easterly acceleration is $9/3 = 3$ m/s² and the northerly one is $12/3 = 4$ m/s², and these combine to 5 m/s².
:::

One more point catches nearly everyone. The law links force to **acceleration**, not to velocity. A pebble thrown up has the same net force, $mg$ downward, on the way up, at the very top where it stops for an instant, and on the way down. At the top its velocity is zero, but its acceleration is still $g$. The velocity can point any way you like; the acceleration always points along the net force. Play with the widget below: the only force is gravity, pointing straight down, yet the ball moves up, sideways and down.

:::widget name=projectile u=20 angle=45
:::

:::qc lvl=2
q: A stone is thrown straight up. At the very top, it is momentarily at rest. What is the net force on it?
options: ["Zero, because it is at rest", "Its weight, $mg$, downward", "Its weight upward", "Cannot be known"]
answer: 1
right: Right. Gravity pulls throughout. At the top the velocity is zero, but it is just about to change, so the acceleration is $g$ downward and the net force is $mg$.
wrong: Zero velocity does not mean zero force. If the net force were zero, the stone would hover there for ever.
:::

## Weighing in a lift {lvl=2 id=s-lift label="Class 11"}

A bathroom scale does not measure your mass or even your pull from Earth. It measures how hard it is pushed up by the floor, the **normal force** $N$. In a lift at rest, $N = mg$. When the lift accelerates, $N$ changes, because you and the lift now have to accelerate together.

Take up as positive. The floor pushes up with $N$, gravity pulls down with $mg$, and the net force is $m a$:

$$N - mg = ma \quad\Longrightarrow\quad N = m(g + a).$$

Read it as: if the lift accelerates up, the scale reads more than your weight.

:::figure caption="In a lift accelerating upwards, the floor must push harder than gravity pulls: the scale reads more than mg."
<svg viewBox="0 0 360 220" role="img" aria-label="A person in a lift accelerating upward: the normal force arrow is longer than the weight arrow">
<defs><marker id="mo1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="mo2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<rect class="ln" x="104" y="20" width="124" height="180" rx="4"/>
<circle class="obj" cx="150" cy="110" r="7"/>
<line class="ray" x1="150" y1="104" x2="150" y2="30" marker-end="url(#mo1)"/>
<line class="wf" x1="150" y1="118" x2="150" y2="170" marker-end="url(#mo2)"/>
<text class="k" x="158" y="48">N (floor)</text>
<text class="k" x="158" y="160">mg</text>
<line class="ln" x1="270" y1="150" x2="270" y2="80" marker-end="url(#mo1)"/>
<text x="240" y="170">a = 2 m/s²</text><text x="240" y="184">upward</text>
</svg>
:::

:::worked title="A 60 kg person in a lift (g = 9.8)"
Resting: $N = 60 \times 9.8 = 588$ N.
Accelerating up at 2 m/s²: $N = 60 \times (9.8 + 2) = 708$ N, so you feel heavier.
Accelerating down at 2 m/s²: $N = 60 \times (9.8 - 2) = 468$ N, so you feel lighter.
Cable snaps, $a = g$ downward: $N = 0$. You feel weightless, though gravity has not gone anywhere.
:::

:::qc lvl=2
q: A lift is moving upward at a steady 3 m/s. What does a scale on its floor read for a 60 kg person?
options: ["More than 588 N", "Exactly 588 N", "Less than 588 N", "Zero"]
answer: 1
right: Right. Steady velocity means zero acceleration, so $N = mg$. A lift's speed is invisible to the scale; only its acceleration shows.
wrong: The scale reacts to acceleration. Steady speed, up or down, is acceleration zero.
:::

## Forces that change, and streams {lvl=3 id=s-var label="JEE"}

Real forces rarely hold still. The honest form of the law is $F = dp/dt$, and its integral form says the impulse is the area under $F(t)$:

$$\Delta p = \int F\,dt.$$

Read it as: add up the force over every instant, and you get the total change of momentum.

:::worked title="A force that grows with time"
A 2 kg body at rest is pushed by $F = 4t$ newtons, with $t$ in seconds. After 3 s, $\Delta p = \int_0^3 4t\,dt = 2t^2\big|_0^3 = 18$ kg m/s. So the speed is $18/2 = 9$ m/s. Notice that the acceleration $a = 2t$ grows with time, so the constant-acceleration equations would not work here.
:::

The law also handles **streams**: a steady flow of mass that is stopped, deflected or started. If mass arrives at the rate $dm/dt$ and each kilogram changes velocity by $\Delta v$, the force is $F = (dm/dt)\,\Delta v$.

:::worked title="Sand falling on a conveyor belt"
Sand drops vertically onto a horizontal belt at 5 kg/s, and the belt moves at a steady 2 m/s. Every second, 5 kg of sand goes from no horizontal speed to 2 m/s, a gain of $5 \times 2 = 10$ kg m/s each second. So the belt must be pulled with an extra $F = 10$ N to keep it at 2 m/s. The pulling power is $Fv = 10 \times 2 = 20$ W, but the sand gains kinetic energy at only $\tfrac12 \times 5 \times 2^2 = 10$ W. The other 10 W is lost as heat while the sand slides on the belt before it grips. This halving is no accident: it happens for any belt speed.
:::

:::qc lvl=3
q: A hose sends 3 kg of water per second at 10 m/s against a wall, and the water stops dead. What is the average force on the wall?
options: ["10 N", "30 N", "3 N", "300 N"]
answer: 1
right: Right. Momentum lost per second is $3 \times 10 = 30$ kg m/s each second, so $F = 30$ N.
wrong: Force is momentum change per second. Each second 3 kg moving at 10 m/s is stopped.
:::

## When the mass changes: rockets {lvl=4 id=s-rocket label="Olympiad"}

A rocket loses mass as it burns fuel, so $F = ma$ with a fixed $m$ does not apply. The careful way is to follow a clearly chosen system and apply $F = dp/dt$ to the whole of it, fuel included.

Jump into the frame in which the rocket, of mass $m$, is momentarily at rest. In a short time $dt$ it throws out a small mass $dm_e$ backward at speed $v_e$ relative to itself. With no external force the total momentum stays zero, so the rocket gains a speed $dv$ with

$$m\,dv = v_e\,dm_e.$$

The rocket's own mass falls by $dm_e$, so $dm_e = -dm$. Integrating from the start mass $m_0$ to the final mass $m$:

$$\Delta v = v_e \ln\frac{m_0}{m}.$$

Read it as: the speed gained depends on how fast you throw the gas and on the logarithm of how much of your mass you throw away. This is the **rocket equation**, found by Konstantin Tsiolkovsky in 1903 [Unverified date].

The logarithm is the cruel part. Chemical rockets have $v_e \approx 3$ km/s [Unverified typical value]. To reach 7.8 km/s, near the speed of a low-Earth orbit, you need $m_0/m = e^{7.8/3} = e^{2.6} \approx 13.5$. More than 92% of the launch mass must be fuel, ignoring gravity and drag. That is why real rockets are staged and mostly fuel and tanks.

The thrust follows too: the force on the rocket equals the momentum given to the gas per second, $F = v_e\,|dm/dt|$.

A closing thought about status. $F = ma$ is not a definition of force; it becomes a law only because forces can be measured separately, for example by the stretch of a spring or by the pull of gravity, and then the law predicts the motion.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Acceleration = net force divided by mass, in the direction of the force: $F = ma$. A force of 1 N gives 1 kg an acceleration of 1 m/s². {lvl=1}
2. Momentum is mass times velocity, $p = mv$. The second law says $F = \Delta p/\Delta t$. {lvl=1}
3. The same change of momentum over a longer time needs a smaller force: airbags, bent knees and mats. {lvl=1}
4. Impulse $J = F\,\Delta t = \Delta p$, and it is the area under a force-time graph. Take signs seriously: a rebound reverses the velocity. {lvl=2}
5. The law links force to acceleration, not to velocity: a stone at the top of its throw still feels $mg$. {lvl=2}
6. A scale reads the normal force: $N = m(g + a)$ in a lift with upward acceleration $a$. {lvl=2}
7. For changing forces, $\Delta p = \int F\,dt$; for streams, $F = (dm/dt)\,\Delta v$. {lvl=3}
8. With changing mass, apply $F = dp/dt$ to a defined system: the rocket equation is $\Delta v = v_e\ln(m_0/m)$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Net force is the sum of all forces. Do not use the one force you are told about if others are acting too. {lvl=1}
- Mass is in kilograms, not grams: convert before using $F = ma$. {lvl=1}
- Choose a positive direction before computing $\Delta p$. A rebound adds the two speeds. {lvl=2}
- Velocity zero does not mean force zero. Look at the acceleration. {lvl=2}
- A scale reads $N$, not $mg$. They are equal only when the vertical acceleration is zero. {lvl=2}
- $F = ma$ is wrong for a body whose mass changes. Use $F = dp/dt$ on a fixed system and count the mass that leaves or joins. {lvl=4}
:::
