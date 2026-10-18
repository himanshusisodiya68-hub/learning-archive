---
title: Moment of inertia
summary: Why a tightrope walker carries a long pole, and the one number that says how hard anything is to spin.
ncert: ["Class 11 Physics · Ch 6 System of Particles and Rotational Motion (§6.9 Moment of inertia, §6.10 Kinematics of rotational motion, §6.11 Dynamics of rotational motion)"]
up_to: Olympiad
builds_on: [Torque, Centre of mass, Circular motion, Newton's second law]
notes_prompt: Explain to a ten-year-old why a long pole makes a tightrope walker harder to tip over, and why a bicycle wheel with a heavy rim is hard to start and hard to stop.
margin:
  - kind: history
    title: History
    text: Leonhard Euler introduced the idea in the 1700s while studying spinning bodies, and the name "moment of inertia" comes from him [Unverified date]. The "moment" is the old word for a mass multiplied by a distance, the same word as in "moment of a force".
  - kind: tip
    title: Exam habit
    text: "Always write which axis you mean. A rod has I = ML²/12 about its middle and ML²/3 about its end: same rod, different axis, four times the value."
  - kind: olympiad
    title: Olympiad link
    text: "A body's moment of inertia about every axis through one point is fixed by just three numbers (the principal moments). For a cube all three are equal, so a cube is exactly as hard to spin about a body diagonal as about the axis through two opposite faces."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 10 Rotation, §10-5 Rotational inertia [Unverified chapter reference]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 18 Rotation in Two Dimensions and Ch. 19 Center of Mass; Moment of Inertia (feynmanlectures.caltech.edu) [Unverified chapter numbers]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapter Rotational Mechanics [Unverified chapter reference]" }
cards:
  - { front: "What is the moment of inertia?", back: "A body's resistance to being spun up about a given axis: $I = \\sum m r^2$, each bit of mass times the square of its distance from the axis." }
  - { front: "The rotation twin of F = ma?", back: "$\\tau = I\\alpha$: the net torque about the axis equals the moment of inertia times the angular acceleration." }
  - { front: "Moments of inertia of ring, disc, solid sphere about the central axis?", back: "Ring $MR^2$; disc $\\tfrac12MR^2$; solid sphere (about a diameter) $\\tfrac25MR^2$." }
  - { front: "State the parallel axes theorem.", back: "$I = I_{cm} + Md^2$, where $I_{cm}$ is about the axis through the centre of mass and $d$ is the distance to the parallel axis." }
  - { front: "State the perpendicular axes theorem.", back: "For a flat body in the xy-plane: $I_z = I_x + I_y$. Only for plane (flat) bodies." }
  - { front: "Constant angular acceleration equations?", back: "$\\omega = \\omega_0 + \\alpha t$, $\\theta = \\omega_0 t + \\tfrac12\\alpha t^2$, $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$ (angles in radians)." }
core:
  idea: 'Spinning a body up is harder the more mass it has and the farther that mass sits from the axis. Each bit of mass counts as its mass times the square of its distance from the axis; add these up to get the moment of inertia I. Rotation then obeys the twin of Newton''s second law: torque equals I times angular acceleration.'
  formulas:
    - tex: 'I = \sum m_i r_i^{\,2}'
      label: 'Moment of inertia about an axis'
    - tex: '\tau = I\alpha'
      label: 'Second law for rotation about a fixed axis'
    - tex: 'I = I_{cm} + Md^2'
      label: 'Parallel axes theorem'
  conditions:
    - 'Rigid body: the distances between its bits do not change while it turns'
    - 'The axis stays fixed in direction (a fixed axis, or one through the centre of mass that keeps its direction)'
    - 'I, the torque and alpha must all refer to the same axis, and angles are in radians'
    - 'Parallel axes: one of the two axes must pass through the centre of mass. Perpendicular axes: the body must be flat'
  sign: 'I depends on the axis, so always say about which axis. Count torque and angular acceleration positive in the same sense (anticlockwise).'
outcomes:
  - 'Explain why mass far from the axis is hard to turn, and compare two bodies without a calculator'
  - 'Use the constant angular acceleration equations, including rpm to rad/s conversion'
  - 'Write down and use I for rings, discs, spheres and rods, and the radius of gyration'
  - 'Solve pulley and hinged-rod problems with torque = I x alpha'
  - 'Shift axes with the parallel and perpendicular axes theorems, and use the subtraction trick for bodies with holes'
opener:
  story: |
    Watch a tightrope walker crossing a gorge, and you will notice she carries a long pole. Not a light stick: a heavy, bendy pole, longer than she is tall. It looks like extra work. Why would anyone add weight to a job that is already about not falling?

    Here is the trick. When she starts to tip, she is **rotating** about the rope, and a rotation takes time to build up. If the pole spreads her mass far out sideways, the tip happens in slow motion, and she gets those extra moments to shift her hands and fix it.

    It is not the weight of the pole that helps. It is *where* the weight is. The same mass near her body would do almost nothing. So how do you put a number on "how hard is it to start something spinning"?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Tightrope walker with a long pole, and a dashed pole showing the start of a tip"><line x1="8" y1="176" x2="312" y2="176" style="stroke:var(--ink);stroke-width:2"/><line x1="160" y1="176" x2="160" y2="128" style="stroke:var(--ink);stroke-width:4;stroke-linecap:round"/><circle cx="160" cy="112" r="11" style="fill:var(--surface);stroke:var(--ink);stroke-width:2.5"/><line x1="26" y1="132" x2="294" y2="132" style="stroke:var(--c);stroke-width:4;stroke-linecap:round"/><circle cx="26" cy="132" r="7" style="fill:var(--chem)"/><circle cx="294" cy="132" r="7" style="fill:var(--chem)"/><line x1="30" y1="156" x2="290" y2="104" style="stroke:var(--muted);stroke-width:2;stroke-dasharray:5 5"/><circle cx="160" cy="132" r="4" style="fill:var(--ink)"/><text x="30" y="212" style="font-size:12px;fill:var(--muted)">a wobble starts: far-out mass tips slowly</text><text x="86" y="84" style="font-size:12px;fill:var(--muted)">heavy ends, far from the rope</text></svg>'
life:
  - 'A tightrope walker, or a ballet dancer in an arabesque with arms out, steadies herself by spreading her mass wide.'
  - 'A ceiling fan takes seconds to reach full speed and seconds to stop: the blades hold their mass far from the axis.'
  - 'A potter''s wheel has a heavy rim so that once it is spinning it keeps going smoothly while the clay pushes back.'
  - 'A door swings easily when you push at the handle, but if you add a heavy lock at the handle it becomes sluggish.'
  - 'Race cyclists spend money to put the weight of a wheel near the hub, not at the rim, because rim weight must be spun up every time you speed up.'
models:
  - name: 'Far things count squared'
    text: 'Distance from the pivot is not just a bit more important, it is squared. Double the distance and the same mass resists four times as much. Anywhere a cost grows with the square of a size (a bigger team means many more pairs who can disagree), the far end dominates.'
  - name: 'Find the twin'
    text: 'Rotation is translation with a new dictionary: position becomes angle, mass becomes moment of inertia, force becomes torque. When you meet a new topic, ask whether it is a twin of one you know. It halves the learning.'
  - name: 'Spread beats size'
    text: 'Two bodies with the same total mass can behave very differently because of how the mass is spread. The same total budget concentrated at the edge or at the centre of an organisation also acts differently.'
links:
  - leaf: 'phy/centre-of-mass'
    name: 'Centre of mass'
    same: 'Both are mass-weighted sums over all the bits of the body: the centre of mass is the average of the positions, $\sum m x/M$, and $I$ is the sum of masses times squared distances, $\sum m r^2$.'
    differs: 'The centre of mass is a single point that does not depend on any axis. $I$ is always positive and changes with the axis you choose. The parallel axes theorem links the two.'
  - leaf: 'phy/momentum-and-the-second-law'
    name: 'Momentum and the second law'
    same: 'Both $F = ma$ and $\tau = I\alpha$ say that something resisting change (mass or moment of inertia) sets how fast a push (force or torque) changes the motion.'
    differs: 'Mass is one fixed number for a body. $I$ has a different value for every axis, so the same body can be easy to spin one way and hard another.'
next:
  q: 'A solid ball and a hoop of the same mass and radius are released together at the top of a slope, with no slipping. The same gravity pulls on both, yet one of them arrives first. Which, and why does a block of ice that cannot spin at all beat both?'
  leaf: 'phy/rolling-motion'
  name: 'Rolling motion'
symbols:
  - s: 'I'
    means: 'moment of inertia about the chosen axis (kg m²)'
  - s: 'm_i,\ r_i'
    means: 'mass of the i-th bit (kg) and its perpendicular distance from the axis (m)'
  - s: '\theta'
    means: 'angle turned, in radians (rad)'
  - s: '\omega'
    means: 'angular speed, the angle turned per second (rad/s)'
  - s: '\alpha'
    means: 'angular acceleration, how fast ω changes (rad/s²)'
  - s: '\tau'
    means: 'torque about the axis: the turning effect of a force (N m)'
  - s: 'M,\ R,\ L'
    means: 'mass (kg), radius (m) and length (m) of the whole body'
  - s: 'I_{cm}'
    means: 'moment of inertia about the parallel axis through the centre of mass (kg m²)'
  - s: 'd'
    means: 'distance between two parallel axes (m)'
  - s: 'K'
    means: 'radius of gyration, defined by I = MK² (m)'
---

:::hook
q: Why do tightrope walkers carry a long, heavy pole? Pick the best reason.
options: ["The pole acts as a counterweight so their own weight is smaller", "Mass far out sideways makes them hard to tip, so a wobble grows slowly and they have time to correct it", "Its weight presses them onto the rope for better grip", "It is only tradition: it makes no difference to balance"]
answer: 1
right: Right. The pole raises her resistance to tipping, her moment of inertia, without changing her height or where she steps. A wobble that would take a quarter of a second now takes about half a second, and that is enough time to move a foot.
wrong: A pole does not reduce her weight or add grip. What it changes is how quickly a tip builds up: mass spread far out sideways is hard to turn, so she tips in slow motion. That resistance to turning is what this lesson measures.
:::

## Mass far away is hard to turn {lvl=1 id=s-far label="Class 9"}

Take a light rod 1 m long and clamp two 2 kg lumps to it, one at each end. Hold it by the middle and try to twist it. It feels heavy and slow. Now slide both lumps in until they sit 10 cm from your hand on either side. Twist it again. It is easy.

The total mass has not changed: 4 kg both times. What changed is how far the mass sits from the **axis**, the line about which you turn the rod. Each lump resists being swung round, and the farther it has to travel in a circle to complete a turn, the more it resists.

Physicists measure this resistance by taking every bit of mass, multiplying it by the **square** of its distance from the axis, and adding up. The total is called the **moment of inertia**, written $I$. For the two lumps:

$$I = 2\,(2\ \text{kg})(0.5\ \text{m})^2 = 1.0\ \text{kg m}^2\quad\text{(lumps at the ends)},$$

$$I = 2\,(2\ \text{kg})(0.1\ \text{m})^2 = 0.04\ \text{kg m}^2\quad\text{(lumps near the middle)}.$$

Read it as: five times the distance, twenty-five times the resistance. The same mass is 25 times harder to turn when it sits at the ends.

That squared distance is what the tightrope walker is exploiting. In symbols, the rule is

$$I = \sum m_i r_i^{\,2}.$$

Read it as: take each bit, its mass times its distance from the axis squared, and add them all up.

:::qc lvl=1
q: A bicycle wheel and a solid disc of the same mass and radius are mounted on the same axle. Which is harder to start spinning?
options: ["The bicycle wheel, because its mass is at the rim", "The solid disc, because it has more material", "Both are equally hard, since the mass is the same"]
answer: 0
right: Right. Same mass, but the wheel keeps all of it at the largest distance from the axis, so its $I$ is larger: $MR^2$ against $\tfrac12MR^2$ for the disc.
wrong: The mass is the same, so only the position matters. The wheel's mass is all at distance $R$; the disc has some of its mass close to the axle, where it hardly resists.
:::

## Spinning with a steady push {lvl=2 id=s-kinematics label="Class 11"}

Before the law, we need the words for rotation. To say where a turning body is, give the **angle** $\theta$ it has turned through. Measure it in radians: the angle in radians is the arc length divided by the radius, so one full turn is $2\pi$ rad (about 6.28). How fast it turns is the **angular speed** $\omega$, in rad/s. How fast that speed grows is the **angular acceleration** $\alpha$, in rad/s².

Rotation is translation in new clothes. Every equation you know for straight-line motion has a twin:

| Straight line | Rotation about a fixed axis |
|---|---|
| position $x$ | angle $\theta$ |
| velocity $v$ | angular speed $\omega$ |
| acceleration $a$ | angular acceleration $\alpha$ |
| $v = u + at$ | $\omega = \omega_0 + \alpha t$ |
| $s = ut + \tfrac12at^2$ | $\theta = \omega_0t + \tfrac12\alpha t^2$ |
| $v^2 = u^2 + 2as$ | $\omega^2 = \omega_0^2 + 2\alpha\theta$ |

These hold when $\alpha$ is constant. Read the middle one aloud: the angle turned equals the starting spin times the time, plus half the acceleration times the time squared.

A bit of the body at distance $r$ from the axis moves in a circle, so its speed is $v = \omega r$ and its tangential acceleration is $a = \alpha r$. Every bit has the same $\omega$ and $\alpha$; the outer bits just go faster.

:::worked title="A ceiling fan switched off"
A fan turns at 300 rpm. Switched off, it slows uniformly and stops in 20 s. How many turns does it make while stopping?

First convert: 300 rpm $= 300\times2\pi/60 = 10\pi \approx 31.4$ rad/s. The angular acceleration is $\alpha = (0 - 10\pi)/20 = -\pi/2 \approx -1.57$ rad/s². The angle turned is $\theta = \omega_0t + \tfrac12\alpha t^2 = 10\pi(20) - \tfrac12(\pi/2)(400) = 200\pi - 100\pi = 100\pi$ rad, which is $50$ revolutions. A quick check: the average speed is half the starting one, $2.5$ rev/s, and $2.5\times20 = 50$ revolutions.
:::

:::qc lvl=2
q: A wheel speeds up uniformly from rest to 120 rpm in 10 s. What is its angular acceleration?
options: ["$4\\pi/10 \\approx 1.26$ rad/s²", "12 rad/s²", "$2\\pi \\approx 6.28$ rad/s²"]
answer: 0
right: Right. 120 rpm is $4\pi$ rad/s, and $4\pi/10 = 1.26$ rad/s². Convert rpm to rad/s first, always.
wrong: Convert 120 rpm to rad/s first: $120\times2\pi/60 = 4\pi \approx 12.6$ rad/s. Then divide by 10 s.
:::

## The moment of inertia of common shapes {lvl=2 id=s-shapes label="Class 11"}

For two lumps we added by hand. For a continuous body we add up an enormous number of tiny bits, and the result, for the shapes you meet in problems, is just a fraction times $MR^2$ or $ML^2$. These are worth knowing by heart.

:::figure caption="Moment of inertia about the axis marked (dashed). The nearer the mass to the axis, the smaller the fraction."
<svg viewBox="0 0 360 170" role="img" aria-label="Ring, disc, solid sphere and rod with their moments of inertia">
<circle cx="45" cy="60" r="30" style="fill:none;stroke:var(--phy);stroke-width:6"/>
<circle cx="45" cy="60" r="2.5" style="fill:var(--ink)"/>
<text class="k" x="17" y="115">ring</text><text x="17" y="132">MR²</text>
<circle cx="135" cy="60" r="30" style="fill:color-mix(in srgb,var(--phy) 30%,var(--surface));stroke:var(--phy);stroke-width:2"/>
<circle cx="135" cy="60" r="2.5" style="fill:var(--ink)"/>
<text class="k" x="108" y="115">disc</text><text x="104" y="132">½MR²</text>
<circle cx="225" cy="60" r="30" style="fill:color-mix(in srgb,var(--phy) 30%,var(--surface));stroke:var(--phy);stroke-width:2"/>
<line class="faint" x1="225" y1="22" x2="225" y2="98"/>
<text class="k" x="188" y="115">solid sphere</text><text x="203" y="132">⅖MR²</text>
<line x1="270" y1="60" x2="350" y2="60" style="stroke:var(--phy);stroke-width:6;stroke-linecap:round"/>
<line class="faint" x1="310" y1="30" x2="310" y2="90"/>
<text class="k" x="285" y="115">rod, middle</text><text x="289" y="132">ML²/12</text>
<text x="289" y="150">end: ML²/3</text>
</svg>
:::

Two notes. The ring and the disc are measured about the axis through the centre, perpendicular to the page. A hollow cylinder (a tin with the ends removed) is like a ring and has $I = MR^2$ about its axis; a solid cylinder is like a disc, $\tfrac12MR^2$. And the numbers are in the order you would guess: a ring has all its mass at distance $R$ (so exactly $MR^2$); a disc has some mass near the middle (half as much); a sphere is more compact still ($\tfrac25$).

**The radius of gyration** $K$ is a way to say the same thing in a length: it is the distance at which all the mass could be squeezed into a single ring and give the same $I$. It is defined by $I = MK^2$, so for a disc $K = R/\sqrt2$.

:::qc lvl=2
q: Torques of equal size act on a hollow cylinder and a solid sphere of the same mass and radius, each about its own central axis, both starting from rest. After the same time, which spins faster?
options: ["The hollow cylinder", "The solid sphere, 2.5 times faster", "Both the same"]
answer: 1
right: Right. $\omega = \tau t/I$. The cylinder has $I = MR^2$, the sphere $\tfrac25MR^2$, so the sphere has the smaller $I$ and spins up $1/(2/5) = 2.5$ times faster.
wrong: Equal torque and equal time give $\omega = \tau t/I$, so the smaller $I$ wins. Compare $MR^2$ with $\tfrac25MR^2$.
:::

## The law for spinning {lvl=2 id=s-law label="Class 11"}

A force changes motion in a straight line. A **torque** is a force's turning effect: force times the perpendicular distance from the axis to its line of action. The claim that makes rotation as easy as straight-line motion is this.

:::law caption="For rotation about a fixed axis: torque equals moment of inertia times angular acceleration."
$$\tau = I\alpha$$
:::

Read it as: the same push is harder to turn when $I$ is bigger. It is exactly $F = ma$ with force replaced by torque, mass by $I$, and acceleration by angular acceleration.

Why is it true? Take one bit of mass $m$ at distance $r$ from the axis. The tangential force $F$ on it gives $F = ma = m\alpha r$. Multiply both sides by $r$: the torque on the bit is $Fr = m r^2\alpha$. Add up over all bits, and every bit has the same $\alpha$: total torque $= (\sum m r^2)\,\alpha = I\alpha$. Forces between the bits cancel in pairs, and so do their torques, so only the outside torque survives.

:::worked title="A weight on a string winding off a pulley"
A 1 kg mass hangs from a light string wound round a solid cylindrical pulley of mass 4 kg and radius 0.10 m. The pulley turns freely about its axle. Released from rest, how fast does the mass accelerate? Take $g = 9.8$ m/s².

If the pulley had no mass the answer would be $g$. But the string has to spin the pulley up, and that takes a push. The string pulls with tension $T$.

The mass moves down: $mg - T = ma$.

The pulley turns: the string pulls at the rim, so the torque is $TR$ and $I = \tfrac12MR^2$. With no slipping the string and rim move together, $a = \alpha R$. So $TR = \tfrac12MR^2\,(a/R)$, which gives $T = \tfrac12Ma$.

Put the two together: $mg = (m + \tfrac12M)a$, so
$$a = \frac{mg}{m + M/2} = \frac{1(9.8)}{1 + 2} = 3.27\ \text{m/s}^2.$$
The tension is $T = \tfrac12(4)(3.27) = 6.5$ N, less than the weight 9.8 N: the string must be pulling less than the weight, or the mass would not accelerate down. Notice $R$ cancelled out.
:::

:::qc lvl=2
q: In the pulley example above, the pulley is replaced by a ring of the same mass and radius. Compared with the disc, the mass now falls
options: ["faster", "slower", "with the same acceleration"]
answer: 1
right: Right. A ring has $I = MR^2$, larger than the disc's $\tfrac12MR^2$. Then $a = mg/(m + M)$, which is smaller. A bigger $I$ always slows things down.
wrong: The ring has all its mass at the rim, so its $I$ is larger and it is harder to spin up. Redo the working with $I = MR^2$: $a = mg/(m+M)$.
:::

## Moving the axis {lvl=3 id=s-axes label="JEE"}

Tables give the central values. For any other axis there are two shortcuts.

**Parallel axes theorem.** The moment of inertia about an axis a distance $d$ from a parallel axis through the centre of mass is

$$I = I_{cm} + Md^2.$$

Read it as: take the value about the centre of mass, and add the mass times the square of the shift. The axis through the centre of mass always has the smallest $I$ of all its parallel axes. The proof is short: put the centre of mass at the origin and the new axis at $x = d$. A bit at $(x, y)$ is at distance squared $(x-d)^2 + y^2 = x^2 + y^2 - 2dx + d^2$ from the new axis. Add up with weights $m$: $\sum m(x^2+y^2) = I_{cm}$, $\sum m d^2 = Md^2$, and the middle term is $-2d\sum m x = 0$ because the centre of mass is at the origin.

**Perpendicular axes theorem.** For a **flat** body lying in the $xy$-plane, the moment of inertia about the axis $z$ through any point, perpendicular to the plane, is the sum of the moments about two perpendicular axes in the plane through that point:

$$I_z = I_x + I_y.$$

Read it as: spin about the line through the page equals spin about the up-down line plus spin about the left-right line. The reason: a bit at $(x, y)$ is $x^2+y^2$ from the $z$-axis, $y^2$ from the $x$-axis and $x^2$ from the $y$-axis.

:::figure caption="The same rod, two axes. The end is half a length from the middle, so ML²/12 + M(L/2)² = ML²/3."
<svg viewBox="0 0 360 130" role="img" aria-label="A rod with a dashed axis through its centre and another through its end">
<line x1="40" y1="70" x2="320" y2="70" style="stroke:var(--phy);stroke-width:8;stroke-linecap:round"/>
<line class="faint" x1="180" y1="22" x2="180" y2="118"/>
<line class="faint" x1="40" y1="22" x2="40" y2="118"/>
<line class="ln" x1="42" y1="38" x2="178" y2="38"/>
<text x="92" y="32">d = L/2</text>
<text class="k" x="188" y="104">I = ML²/12</text>
<text class="k" x="48" y="112">I = ML²/3</text>
</svg>
:::

:::worked title="Three quick results"
**Ring about a diameter.** The ring is flat, and by symmetry two perpendicular diameters give the same value. The axis through the centre is $MR^2$, so $I_x + I_y = MR^2$ and each is $\tfrac12MR^2$.

**Solid sphere about a tangent.** The tangent is parallel to a diameter, distance $R$ away: $I = \tfrac25MR^2 + MR^2 = \tfrac75MR^2$.

**Rod about one end.** $\dfrac{ML^2}{12} + M\left(\dfrac L2\right)^2 = \dfrac{ML^2}{3}$.
:::

Where does a number like $\tfrac12MR^2$ come from? A disc is a nest of thin rings. A ring of radius $r$ and width $dr$ has mass $dm = M\,\dfrac{2\pi r\,dr}{\pi R^2}$ and contributes $r^2\,dm$, so $I = \dfrac{2M}{R^2}\displaystyle\int_0^R r^3\,dr = \dfrac12MR^2$. The rod is the same idea with $dm = (M/L)\,dx$: $I = \dfrac ML\displaystyle\int_{-L/2}^{L/2}x^2\,dx = \dfrac{ML^2}{12}$.

:::qc lvl=3
q: A uniform disc of mass M and radius R. What is its moment of inertia about an axis in its own plane, along a diameter?
options: ["$\\tfrac12MR^2$", "$\\tfrac14MR^2$", "$MR^2$"]
answer: 1
right: Right. The disc is flat, so $I_x + I_y = I_z = \tfrac12MR^2$, and the two diameters are equal by symmetry: each $\tfrac14MR^2$.
wrong: Use the perpendicular axes theorem. The axis through the centre perpendicular to the disc has $\tfrac12MR^2$, and it equals the sum of two equal diameters.
:::

## Tricks that win JEE problems {lvl=3 id=s-tricks label="JEE"}

**Subtract the hole.** A body with a piece missing has the moment of inertia of the whole minus that of the missing piece, both about the same axis. A washer (a uniform disc of radius $R$ with a concentric hole of radius $R/2$, where $M$ is the mass before cutting) loses a disc of mass $M/4$, which has $\tfrac12\left(\tfrac M4\right)\left(\tfrac R2\right)^2 = \dfrac{MR^2}{32}$. So $I = \tfrac12MR^2 - \dfrac{MR^2}{32} = \dfrac{15}{32}MR^2$.

**Add the parts.** A body made of pieces has $I$ equal to the sum of the pieces' values about the same axis. A dumbbell, or a rod with a ball on the end, is solved by adding.

**Scaling.** Make a body twice as large in every direction, same material: its mass becomes 8 times, and the $R^2$ becomes 4 times, so $I$ grows by $8\times4 = 32$.

**The rod released from horizontal.** A uniform rod of length $L$ is hinged at one end and released from rest horizontal. Just after release, its weight $Mg$ acts at the middle, a distance $L/2$ from the hinge, so the torque is $MgL/2$. About the hinge $I = \tfrac13ML^2$. Hence

$$\alpha = \frac{\tau}{I} = \frac{MgL/2}{ML^2/3} = \frac{3g}{2L}.$$

The free end then has acceleration $\alpha L = \tfrac32g$, **bigger than $g$**. A coin lying on the free end is left behind in the air for a moment, since the end is dropping faster than free fall. For $L = 1.5$ m, $\alpha = 3(9.8)/(2\times1.5) = 9.8$ rad/s².

:::qc lvl=3
q: The rod above is released from horizontal. A small coin sits on its free end. Immediately after release, the coin
options: ["stays on the rod and moves with it", "loses contact: the end falls faster than g", "moves upward"]
answer: 1
right: Right. The end accelerates downwards at $1.5g$, but the coin can only fall at $g$ (nothing pulls it down harder). The rod runs ahead of the coin, and contact is lost for a moment.
wrong: The free end falls with acceleration $\tfrac{3g}{2L}\cdot L = 1.5g$. The coin has only gravity, which gives $g$. So the rod pulls away from underneath.
:::

## One trick for spheres and cubes {lvl=4 id=s-cube label="Olympiad"}

Here is a way to get the shell and the cube with almost no calculus. For any body, add the moments of inertia about three perpendicular axes through one point. Each particle at $(x, y, z)$ contributes $m(y^2+z^2) + m(x^2+z^2) + m(x^2+y^2) = 2m r^2$, where $r$ is its distance from the point. So

$$I_x + I_y + I_z = 2\sum m r^2.$$

Read it as: the three moments add to twice the sum of mass times distance from the point, squared.

**Thin hollow sphere.** Every bit is exactly $R$ from the centre, so $\sum m r^2 = MR^2$. By symmetry the three moments are equal: each is $\tfrac23MR^2$. A solid sphere is a nest of such shells: $dm = M\,\dfrac{3r^2\,dr}{R^3}$ and
$$I = \int \tfrac23r^2\,dm = \tfrac23\cdot\frac{3M}{R^3}\int_0^R r^4\,dr = \tfrac25MR^2,$$
which is the familiar value.

**Cube.** A cube of side $a$ has $\overline{x^2} = a^2/12$ for each coordinate, so $\sum m r^2 = M\cdot 3a^2/12 = Ma^2/4$. The three moments about axes through the centre parallel to the edges are equal, so each is $\tfrac23\cdot\tfrac{Ma^2}{4} = \dfrac{Ma^2}{6}$ (check: it matches $M(a^2+a^2)/12$ for a square slab). For a cube, the products $\sum m x y$ and similar vanish by symmetry [Inference: this standard result is stated here without proof], and then the moment of inertia is $Ma^2/6$ about **every** axis through the centre, including the body diagonal. A cube spun about its corner-to-corner diagonal is exactly as hard to turn as about a face axis: a party fact that surprises most people.

Not every body is so friendly. A brick, with three different principal moments, tumbles differently about its three axes. Throw a book with a rubber band round it about the shortest axis and the longest axis, and it spins cleanly; about the middle axis it tumbles unstably. That is a story for a later course.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Mass far from the axis is hard to turn: $I = \sum m r^2$, so distance counts squared. {lvl=1}
2. Rotation has the same equations as straight-line motion with $x\to\theta$, $v\to\omega$, $a\to\alpha$. Convert rpm to rad/s with $2\pi/60$. {lvl=2}
3. $\tau = I\alpha$ is Newton's second law for rotation: ring $MR^2$, disc $\tfrac12MR^2$, solid sphere $\tfrac25MR^2$, rod $ML^2/12$ (middle), $ML^2/3$ (end). {lvl=2}
4. Pulleys with mass need torque on the pulley as well as force on the weight. {lvl=2}
5. Parallel axes: $I = I_{cm} + Md^2$. Perpendicular axes: $I_z = I_x + I_y$ for flat bodies. {lvl=3}
6. Subtract holes, add parts, and scale as $\text{length}^5$ for a fixed density. {lvl=3}
7. Summing three perpendicular moments gives $2\sum mr^2$, which gives the shell and the cube almost for free. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Always name the axis: the same body has a different $I$ about each axis. {lvl=1}
- $\tau$, $I$ and $\alpha$ must all be about the same axis. {lvl=2}
- Do not use rpm in $\omega = \omega_0 + \alpha t$ unless you also use minutes. Convert to rad/s. {lvl=2}
- A pulley with mass has different tensions on the two sides of it; treating it as massless is only right when $I$ is negligible. {lvl=2}
- The parallel axes theorem only works from the axis through the centre of mass: to go between two non-central axes, step down to the centre and up again. {lvl=3}
- The perpendicular axes theorem needs a flat body. It does not apply to a sphere or a cylinder. {lvl=3}
- When you cut a hole, subtract the hole's $I$ about the original axis, not about its own centre. {lvl=3}
:::
