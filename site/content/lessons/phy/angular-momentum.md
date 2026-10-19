---
title: Angular momentum
summary: How a skater spins faster by pulling in her arms, and the one quantity that no push-free spin can lose.
ncert: ["Class 11 Physics · Ch 6 System of Particles and Rotational Motion (torque and angular momentum of a particle, angular momentum of a rotating body, conservation of angular momentum, work and power in rotation; section numbers not checked against the 2026-27 reprint)"]
up_to: Olympiad
builds_on: [Moment of inertia, Torque, Momentum and the second law, Circular motion]
notes_prompt: Explain to a ten-year-old why an ice-skater spins faster when she pulls her arms in, even though nobody pushes her.
margin:
  - kind: history
    title: History
    text: "Kepler saw the equal-areas rule in the planets' motion around 1609 without knowing why. Newton showed in 1687 that it holds for any force that points at a fixed centre; angular momentum as a named, conserved quantity came later, in the 1700s [Unverified dates]."
  - kind: tip
    title: Exam favourite
    text: "When you pull in your arms, angular speed rises but kinetic energy rises too. The extra energy is the work your muscles do. Never say energy is conserved there, only angular momentum is."
  - kind: olympiad
    title: Olympiad link
    text: "Angular momentum depends on the point you measure from. In a collision with a pivot, choose the pivot as the point: the unknown force at the pivot then has zero torque about it, and the problem solves itself."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 11 Rolling, Torque and Angular Momentum, §11-5 to §11-9 [Unverified]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 18 Rotation in Two Dimensions; Ch. 20 Rotation in Space [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 10 Rotational Mechanics [Unverified]" }
cards:
  - { front: "Angular momentum of a body spinning about a fixed axis?", back: "$L = I\\omega$ (unit kg m$^2$/s)." }
  - { front: "Angular momentum of a point mass moving with speed v, at perpendicular distance d from the point?", back: "$L = mvd$, that is $L = r\\,p\\sin\\theta$ in vector form $\\vec L = \\vec r\\times\\vec p$." }
  - { front: "Newton's second law for rotation?", back: "$\\tau = dL/dt$. With a fixed axis and constant $I$ this is $\\tau = I\\alpha$." }
  - { front: "When is angular momentum conserved?", back: "When the net external torque about the chosen point (or axis) is zero. Then $I_1\\omega_1 = I_2\\omega_2$." }
  - { front: "Why does a skater speed up when she pulls her arms in?", back: "$L = I\\omega$ stays fixed, so smaller $I$ means larger $\\omega$. The kinetic energy $L^2/2I$ rises too, paid for by her muscles." }
  - { front: "Work and power in rotation?", back: "$W = \\tau\\theta$ for constant torque and $P = \\tau\\omega$. Work done equals the gain in rotational kinetic energy $\\tfrac12 I\\omega^2$." }
core:
  idea: 'Spinning has its own momentum, angular momentum. It is how much spin a body carries (moment of inertia times angular speed), and it changes only when an outside torque acts. With no outside torque it never changes, so shrinking a body speeds up its spin.'
  formulas:
    - tex: 'L = I\omega, \qquad L = m v d'
      label: 'Angular momentum: a spinning body, and a moving particle at perpendicular distance d'
    - tex: '\tau = \dfrac{dL}{dt}'
      label: 'Rotational second law'
    - tex: 'I_1\omega_1 = I_2\omega_2'
      label: 'Conservation (no outside torque)'
    - tex: 'W = \tau\theta,\quad P = \tau\omega'
      label: 'Rotational work and power'
  conditions:
    - 'Conservation needs zero net external torque about the point you take, not zero net force'
    - 'For $L = I\omega$: a rigid body turning about a fixed axis (or an axis through its centre of mass that keeps its direction)'
    - 'Internal forces never change the total angular momentum of a system (they come in equal and opposite pairs along the same line)'
    - 'Torque and angular momentum must be measured about the same point'
  sign: 'Choose counterclockwise as positive. Spin the other way counts as negative. Angular momentum depends on the point chosen: always say about which point.'
outcomes:
  - 'Explain the skater, the diver and the rotating stool with one law'
  - 'Calculate L for a spinning body and for a particle moving past a point'
  - 'Use conservation of angular momentum in merging, jumping-on and bullet-and-pivot problems'
  - 'Explain why kinetic energy rises when a skater pulls in her arms'
  - 'Find rotational work and power, and apply equal areas swept per second to a planet'
opener:
  story: |
    Watch a figure skater begin a spin with her arms stretched wide. She turns once every couple of seconds, gracefully slow. Then she pulls her arms in against her chest, and she becomes a blur, three, four times faster.

    Nobody pushed her. The ice is nearly frictionless, so nothing outside is speeding her up. She did it by only moving her own arms. How can pulling your arms in make you spin faster, without anything pushing you?

    The answer is a quantity that **cannot change when nothing twists you from outside**, even though the body is free to reshape itself. It is the same quantity that keeps a spinning bicycle wheel upright, a cat landing on its feet, and a planet racing round the Sun.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two spinning bodies seen from above: arms out spins slowly, arms in spins fast"><circle cx="82" cy="108" r="58" style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 4"/><circle cx="82" cy="108" r="7" style="fill:var(--ink)"/><path d="M82 108 L26 108 M82 108 L138 108" style="fill:none;stroke:var(--c);stroke-width:3"/><circle cx="26" cy="108" r="11" style="fill:var(--chem)"/><circle cx="138" cy="108" r="11" style="fill:var(--chem)"/><path d="M50 52 Q82 36 114 52" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M114 52 L106 46 L104 56Z" style="fill:var(--ink)"/><text x="46" y="188" style="font-size:12px;fill:var(--muted)">arms out: slow</text><circle cx="240" cy="108" r="26" style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 4"/><circle cx="240" cy="108" r="7" style="fill:var(--ink)"/><path d="M240 108 L222 108 M240 108 L258 108" style="fill:none;stroke:var(--c);stroke-width:3"/><circle cx="222" cy="108" r="11" style="fill:var(--chem)"/><circle cx="258" cy="108" r="11" style="fill:var(--chem)"/><path d="M204 66 Q240 40 276 66" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M204 66 L212 60 L214 70Z M276 66 L268 60 L266 70Z" style="fill:var(--ink)"/><path d="M196 150 Q240 176 284 150" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M196 150 L204 156 L206 146Z M284 150 L276 156 L274 146Z" style="fill:var(--ink)"/><text x="196" y="188" style="font-size:12px;fill:var(--muted)">arms in: fast</text><text x="64" y="224" style="font-size:12px;fill:var(--muted)">same spin momentum I x w</text></svg>'
life:
  - 'Figure skaters, ballet dancers and gymnasts start a spin with limbs out, then tuck in to speed up. Platform divers curl into a ball to do their somersaults and open up again to slow for a clean entry.'
  - 'A cat dropped upside down turns over in mid-air and lands on its feet without anything to push on, by swinging its tail and twisting its front and back halves in turn.'
  - 'A thrown frisbee or a rifle bullet stays pointing the same way in flight because its spin momentum resists being tipped; a spinning top stands up while it spins and topples as it slows.'
  - 'Satellites, including Indian spacecraft, use spinning wheels (reaction wheels) inside to turn without any fuel: speed one wheel up and the craft turns the other way [Unverified: which missions].'
models:
  - name: 'The unchangeable total'
    text: 'Some totals only change if something from outside acts, however much the parts inside rearrange. Money in a closed family, for example: spending moves it between people but does not change the total. Look for the conserved total first, and many puzzles shrink.'
  - name: 'Trade one factor for the other'
    text: 'When $I\omega$ is fixed, shrinking one factor grows the other. A product that must stay constant forces a trade: time against speed, price against quantity at fixed budget, width against height at fixed area.'
  - name: 'Choose your point wisely'
    text: 'The same situation looks complicated from one viewpoint and simple from another. Put the viewpoint where the unknown force acts and that force drops out. In negotiation, in debugging, in geometry: stand where the hardest part vanishes.'
links:
  - leaf: 'phy/momentum-and-the-second-law'
    name: 'Linear momentum'
    same: 'Same shape: $F = dp/dt$ becomes $\tau = dL/dt$. No outside force, constant momentum; no outside torque, constant angular momentum. Mass becomes $I$, velocity becomes $\omega$.'
    differs: 'Mass is fixed, but the moment of inertia of a body can change by reshaping it. That is why a skater can change her spin and no one can change their own linear momentum.'
  - leaf: 'phy/moment-of-inertia'
    name: 'Moment of inertia'
    same: '$I$ is the quantity that links angular momentum to spin rate, in the same way mass links momentum to velocity.'
    differs: '$I$ depends on the axis and on how the mass is spread, so $I\omega$ can stay fixed while both change.'
next:
  q: 'A planet sweeps round the Sun, and its angular momentum about the Sun never changes. That works only if the Sun always pulls it straight towards the Sun. What force law does the Moon feel, and why does it fall off as it does?'
  leaf: 'phy/universal-law-of-gravitation'
  name: 'Universal law of gravitation'
symbols:
  - s: 'L'
    means: 'angular momentum, the amount of spin (kg m²/s)'
  - s: 'I'
    means: 'moment of inertia about the axis (kg m²)'
  - s: '\omega'
    means: 'angular speed (radians per second, rad/s)'
  - s: '\tau'
    means: 'torque, the turning effect of a force (newton metre, N m)'
  - s: '\alpha'
    means: 'angular acceleration (rad/s²)'
  - s: 'm'
    means: 'mass of the particle (kg)'
  - s: 'v'
    means: 'speed of the particle (m/s)'
  - s: 'd'
    means: 'perpendicular distance from the chosen point to the line of motion (m)'
  - s: '\theta'
    means: 'angle turned, in radians (rad)'
  - s: 'W'
    means: 'work done by the torque (J)'
  - s: 'P'
    means: 'power, work per second (watts, W)'
  - s: 'K'
    means: 'rotational kinetic energy, $\tfrac12 I\omega^2$ (J)'
---

:::hook
q: A skater spins with her arms stretched out, then pulls them in. Nothing touches her. What happens to her spin?
options: ["It speeds up", "It stays the same", "It slows down"]
answer: 0
right: Right. Pulling in her arms makes her easier to turn (a smaller moment of inertia), so her spin rate must rise, because the amount of spin she carries, moment of inertia times angular speed, cannot change without a push from outside.
wrong: Ask what is the same before and after. Nobody twisted her, so some "total spin" is fixed. If she makes herself more compact, does the speed of her turning have to go up or down to keep that total?
:::

## Spin that you cannot lose by yourself {lvl=1 id=s-spin label="Class 9"}

A moving truck has a lot of **momentum**: heavy and fast. You cannot stop it without a long push. A spinning thing has the same kind of stubbornness for turning. A heavy flywheel spinning fast is hard to stop; a bicycle wheel you have set whirling keeps going. The amount of spin a body carries is its **angular momentum**.

It has the same two ingredients as momentum: how hard the thing is to turn (its moment of inertia, $I$) and how fast it turns (its angular speed, $\omega$). Multiply them and you get the angular momentum $L = I\omega$.

Here is the surprise. Momentum cannot change unless a push acts from outside. In the same way, **angular momentum cannot change unless a twist acts from outside.** The skater's arms moving in are an inside job. So her $I\omega$ stays put, but $I$ changes. Say her moment of inertia is 3.0 kg m² with arms out and 1.2 kg m² with arms in, and she starts at 2.0 rad/s. Her spin momentum is $3.0 \times 2.0 = 6.0$. After pulling in, $1.2\,\omega = 6.0$, so $\omega = 5.0$ rad/s. Two and a half times faster, because her moment of inertia dropped to two fifths.

:::qc lvl=1
q: A diver tucks into a ball in mid-air. What happens to her spin rate?
options: ["It increases", "It stays the same", "It decreases"]
answer: 0
right: Right. Tucking in shrinks her moment of inertia. Gravity gives no twist about her centre, so $I\omega$ is fixed and $\omega$ must grow. Opening out again slows her for a clean entry.
wrong: Gravity pulls on every part of her equally, and gives no twist about her centre. So her total spin is fixed. Tucking in makes her moment of inertia smaller. What must happen to $\omega$?
:::

## Angular momentum of a spinning body {lvl=2 id=s-body label="Class 11"}

Let us put numbers on it. For a rigid body turning about a fixed axis, with moment of inertia $I$ about that axis,

$$L = I\omega.$$

Read it as: "spin momentum is how hard it is to turn, times how fast it turns." The unit is kg m²/s. A wheel with $I = 0.5$ kg m² turning at 12 rad/s has $L = 6$ kg m²/s. It is a **vector**: it points along the axis, in the direction your right thumb points when your fingers curl the way the body turns. In this lesson we keep to one axis, so a sign (counterclockwise plus, clockwise minus) is enough.

How do you get a change? Just as a force is the rate of change of momentum, **torque is the rate of change of angular momentum**:

$$\tau = \frac{dL}{dt}.$$

Read it as: "the twist applied equals how fast the spin momentum is changing." For a body with fixed $I$ this is the familiar $\tau = I\alpha$, because $\alpha = d\omega/dt$. A constant torque 12 N m acting for 5.0 s on a wheel with $I = 3.0$ kg m² starting from rest adds $L = 12 \times 5 = 60$ kg m²/s, so $\omega = 60/3 = 20$ rad/s. If the torque is zero, $L$ does not change at all. That is **conservation of angular momentum**.

:::worked title="A solid cylinder (NCERT Exercise 6.11 style)"
A solid cylinder of mass 20 kg and radius 0.25 m spins about its axis at 100 rad/s. Its moment of inertia is $\tfrac12 MR^2 = \tfrac12 \times 20 \times 0.0625 = 0.625$ kg m². So $L = I\omega = 62.5$ kg m²/s and the rotational kinetic energy is $\tfrac12 I\omega^2 = \tfrac12 \times 0.625 \times 10^4 = 3125$ J.
:::

:::qc lvl=2
q: A wheel is spinning with angular momentum 40 kg m²/s. A steady torque of 10 N m, in the direction of the spin, acts for 3.0 s. The new angular momentum is
options: ["30 kg m²/s", "43.3 kg m²/s", "70 kg m²/s"]
answer: 2
right: Right. The change is torque times time: $10 \times 3 = 30$, added to 40, which makes 70 kg m²/s.
wrong: $\tau = dL/dt$ means the change in $L$ is torque times time, $10 \times 3.0 = 30$. It adds to the original, because the torque is along the spin.
:::

## Turning in, speeding up {lvl=2 id=s-conserve label="Class 11"}

With no outside torque, $L$ is constant before and after:

$$I_1\omega_1 = I_2\omega_2, \qquad \omega_2 = \omega_1\,\frac{I_1}{I_2}.$$

Read it as: "the spin rate rises in the same ratio as the moment of inertia falls." A child stands on a frictionless turntable turning at 40 rev/min with arms out. He pulls them in so that $I$ becomes $\tfrac25$ of before. Then $\omega_2 = 40/(2/5) = 100$ rev/min. (This is NCERT Exercise 6.12, and the same lesson as the skater.)

Now the puzzle. Compare the kinetic energies. Since $K = \tfrac12 I\omega^2 = L^2/2I$, with $L$ fixed, $K$ **goes up** when $I$ goes down. In the skater example, $K$ was $\tfrac12 \times 3.0 \times 2.0^2 = 6$ J and becomes $\tfrac12 \times 1.2 \times 5.0^2 = 15$ J. The extra 9 J did not come from nowhere. Her arms are moving in a circle, and to pull them inward her muscles must pull against their tendency to fly outwards. They do positive work, and that work is the 9 J. The skater's rule is "angular momentum, not energy, is the thing conserved".

:::figure caption="Same total spin, different shape. The skater's moment of inertia falls from 3.0 to 1.2 and her angular speed rises from 2 to 5, so the product, the angular momentum, stays 6. The kinetic energy rises from 6 J to 15 J."
<svg viewBox="0 0 330 150" role="img" aria-label="Bar chart: moment of inertia drops, angular speed rises, angular momentum stays the same">
<path d="M40 130 L320 130" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
<rect x="55" y="40" width="34" height="90" style="fill:var(--c)"/><rect x="95" y="94" width="34" height="36" style="fill:var(--chem)"/>
<text x="52" y="28" style="font-size:11px;fill:var(--muted)">I (3.0 to 1.2)</text>
<rect x="165" y="100" width="34" height="30" style="fill:var(--c)"/><rect x="205" y="55" width="34" height="75" style="fill:var(--chem)"/>
<text x="165" y="28" style="font-size:11px;fill:var(--muted)">w (2 to 5)</text>
<rect x="265" y="70" width="22" height="60" style="fill:var(--c)"/><rect x="291" y="70" width="22" height="60" style="fill:var(--chem)"/>
<text x="250" y="28" style="font-size:11px;fill:var(--muted)">L (6 and 6)</text>
<text x="52" y="146" style="font-size:11px;fill:var(--muted)">first bar: arms out, second: arms in</text>
</svg>
:::

**Jumping on.** A merry-go-round is a uniform disc of mass 200 kg and radius 2.0 m turning at 1.5 rad/s. A 40 kg child runs up and jumps onto its rim, moving straight in (no spin of her own about the axis). The disc's $I = \tfrac12 \times 200 \times 2.0^2 = 400$ kg m², giving $L = 400 \times 1.5 = 600$. The child adds a moment of inertia $40 \times 2.0^2 = 160$ and no angular momentum. Total $I = 560$, so $\omega = 600/560 = 1.07$ rad/s. The ride slows, because the same spin is now shared by more mass. The collision is inelastic: $K$ is lost, $L$ is not.

:::qc lvl=2
q: In the skater's spin with arms pulled in, which of these is NOT conserved?
options: ["Angular momentum", "Kinetic energy", "Both are conserved"]
answer: 1
right: Right. Kinetic energy rises, because her muscles do work pulling the arms in. Angular momentum is the one that survives, because no outside torque acts.
wrong: There is no outside torque, so one of these is certainly conserved. For the other, ask where her kinetic energy would have to come from to rise.
:::

## A particle has angular momentum too {lvl=2 id=s-particle label="Class 11"}

A body does not have to spin to carry angular momentum. A stone moving in a straight line past you has it too, measured about you. The rule: for a particle of mass $m$ moving at speed $v$, the angular momentum about a point is

$$L = m\,v\,d,$$

where $d$ is the perpendicular distance from the point to the line along which the particle is moving. Read it as: "momentum times the lever arm". In vectors, $\vec L = \vec r \times \vec p$, whose magnitude is $rp\sin\theta$, and $r\sin\theta = d$. A 0.20 kg stone whirled on a string in a circle of radius 0.40 m at 5.0 m/s has $d = r = 0.40$ m, since the velocity is at right angles to the radius: $L = 0.20 \times 5.0 \times 0.40 = 0.40$ kg m²/s.

Notice that a particle moving at **constant velocity** has constant angular momentum, about any point. The line of motion stays the same, so $d$ does not change (NCERT Example 6.6). And two particles of mass $m$ and speed $v$ moving in opposite directions along parallel lines a distance $d$ apart have a total angular momentum $mvd$ about any point, wherever you choose it: the difference between the two lever arms is always $d$, and the two contributions add (NCERT Exercise 6.7).

:::figure caption="A particle moving along a straight line has angular momentum about a point O equal to its momentum times the perpendicular distance d, which stays the same as it moves. The triangle O to the two positions has the same area in equal times."
<svg viewBox="0 0 330 160" role="img" aria-label="A particle moves along a horizontal line above a point O; the perpendicular distance d is marked and a triangle is swept">
<path d="M20 50 L310 50" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
<path d="M110 50 L110 125 M110 125 L190 50 M110 125 L240 50" style="fill:none;stroke:var(--c);stroke-width:1.8"/>
<path d="M190 50 L240 50 L110 125Z" style="fill:color-mix(in srgb,var(--c) 20%,var(--surface));stroke:none"/>
<circle cx="110" cy="125" r="6" style="fill:var(--ink)"/>
<circle cx="190" cy="50" r="7" style="fill:var(--chem)"/>
<path d="M200 50 L238 50" style="fill:none;stroke:var(--chem);stroke-width:2.5"/><path d="M238 50 L230 45 L230 55Z" style="fill:var(--chem)"/>
<text x="96" y="146" style="font-size:12px;fill:var(--ink)">O</text>
<text x="84" y="92" style="font-size:12px;fill:var(--muted)">d</text>
<text x="170" y="34" style="font-size:12px;fill:var(--muted)">mass m, velocity v</text>
</svg>
:::

NCERT Exercise 6.6 asks for the components in coordinates. With position $(x, y, z)$ and momentum $(p_x, p_y, p_z)$, the cross product gives $L_x = yp_z - zp_y$, $L_y = zp_x - xp_z$, $L_z = xp_y - yp_x$. If the particle moves only in the $x$–$y$ plane, $z = 0$ and $p_z = 0$, so $L_x = L_y = 0$ and only $L_z$ survives: motion in a plane has its angular momentum along the axis at right angles to that plane.

## Work and power of a spin {lvl=3 id=s-work label="JEE"}

How much energy does a torque deliver? A force $F$ pushing at the rim of a wheel of radius $R$ through a small arc $ds = R\,d\theta$ does work $F\,R\,d\theta = \tau\,d\theta$. So **work is torque times angle turned**:

$$W = \tau\,\theta, \qquad P = \tau\,\omega.$$

Read them as: "work equals the twist times the angle through which it acts, and power is the twist times the spin rate." Both parallel $W = Fs$ and $P = Fv$. By the same steps as for linear motion, the work done equals the gain in rotational kinetic energy: $W = \tfrac12 I\omega_2^2 - \tfrac12 I\omega_1^2$. Check with the earlier numbers: torque 12 N m, $I = 3.0$, 5.0 s from rest. $\alpha = 4$ rad/s², $\theta = \tfrac12\alpha t^2 = 50$ rad, so $W = 12 \times 50 = 600$ J. And $\omega = 20$, $\tfrac12 \times 3.0 \times 20^2 = 600$ J. They agree.

Power explains gearboxes. A car engine that delivers 150 N m at 3000 rev/min has $\omega = 3000 \times 2\pi/60 = 314$ rad/s, so $P = 150 \times 314 = 47$ kW, about 63 horsepower. For fixed power, torque and speed trade off: the low gears give high torque at low speed for climbing a hill. NCERT Exercise 6.14 is the same idea: a rotor at 200 rad/s needing 180 N m is drawing $180 \times 200 = 36$ kW.

## A body with a pivot {lvl=3 id=s-pivot label="JEE"}

Many JEE problems are collisions in which one body is on a hinge. A rod hangs from a frictionless pivot at its top end, mass 2.0 kg, length 1.2 m. A 0.050 kg bullet at 200 m/s strikes its lower end and sticks. How fast does the rod swing off?

Linear momentum is **not** conserved: the pivot gives an unknown impulsive force. But about the **pivot itself** that force has no lever arm, so there is no external torque, and **angular momentum about the pivot is conserved**. Before: the bullet's $mvd = 0.050 \times 200 \times 1.2 = 12$ kg m²/s. After: the rod and bullet turn together with $I = \tfrac13 ML^2 + mL^2 = \tfrac13 \times 2.0 \times 1.44 + 0.050 \times 1.44 = 0.96 + 0.072 = 1.032$ kg m². So $\omega = 12/1.032 = 11.6$ rad/s. The lesson is the habit: **put the point at the place where the unknown force acts.**

**A free body.** For any body, angular momentum about a point $O$ splits into two parts: the angular momentum of the whole mass imagined at the centre of mass, plus the spin about the centre of mass:

$$L_O = (M\,v_{cm}\,d) + I_{cm}\,\omega.$$

Read it as: "the orbit part plus the spin part." A rolling wheel about its contact point gives $L = M v R + I_{cm}\omega = (I_{cm} + MR^2)\omega$, which is how the rolling lesson found the moment of inertia about the contact point.

:::qc lvl=3
q: A bullet strikes a rod hanging from a frictionless pivot and sticks. Which quantity is conserved through the impact?
options: ["Linear momentum of the bullet and rod", "Angular momentum about the pivot", "Kinetic energy"]
answer: 1
right: Right. The pivot exerts a large unknown force during the impact, which spoils linear momentum, but it has zero torque about the pivot itself. Energy is lost in the sticking collision.
wrong: The pivot gives an unknown force, so linear momentum changes by an unknown amount. Which quantity is not affected by that force, if you measure it about the pivot?
:::

## Central forces and equal areas {lvl=4 id=s-central label="Olympiad"}

Suppose a force always points at one fixed point, such as the Sun's pull on a planet. Then the force has no lever arm about that point, so it has no torque about it: $\tau = 0$, and the planet's angular momentum $L = mvd$ about the Sun is **constant**. This has two lovely consequences.

First, the motion stays in one plane, because the direction of $\vec L$ cannot change. Second, the line from the Sun to the planet sweeps out **equal areas in equal times**. In a short time $dt$ the planet moves a distance $v\,dt$, and the triangle it sweeps has area $\tfrac12 \cdot (v\,dt) \cdot d$, so

$$\frac{dA}{dt} = \frac12\,v\,d = \frac{L}{2m} = \text{constant}.$$

Read it as: "area swept per second is half the angular momentum per unit mass." This is Kepler's second law, found before anyone knew why. At the nearest and farthest points the velocity is at right angles to the line to the Sun, so $r_1 v_1 = r_2 v_2$. A planet at $1.0 \times 10^{11}$ m moving at $3.0 \times 10^4$ m/s will be at $1.5 \times 10^{11}$ m with speed $2.0 \times 10^4$ m/s.

**The gyroscope.** A spinning wheel has angular momentum $L = I\omega$ along its axle. Gravity pulls its centre down and gives a torque $\tau = mgr$ about the pivot, horizontal and at right angles to $\vec L$. Then $\tau = dL/dt$ says $\vec L$ changes in the direction of the torque, so it changes **direction**, not size: the axle swings round horizontally instead of falling. The rate is $\Omega = \tau/L = mgr/(I\omega)$, for a fast spin. This is **precession**, valid when $\omega$ is much larger than $\Omega$ [standard result]. It is why a faster spin makes a gyroscope slower to turn.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Angular momentum is the amount of spin carried: $L = I\omega$ for a body, $L = mvd$ for a particle. {lvl=1}
2. It changes only if an outside torque acts: $\tau = dL/dt$, and with no outside torque $I_1\omega_1 = I_2\omega_2$. {lvl=2}
3. Pulling a body in speeds its spin up; the extra kinetic energy comes from the work of whatever pulls in. {lvl=2}
4. A particle moving in a straight line has constant angular momentum about any point; $L$ is always about a chosen point. {lvl=2}
5. $W = \tau\theta$ and $P = \tau\omega$; work done by torque equals the gain in $\tfrac12I\omega^2$. {lvl=3}
6. In pivot problems take angular momentum about the pivot: the pivot's unknown force then drops out. {lvl=3}
7. A force pointing at a fixed centre gives constant $L$, hence equal areas in equal times, hence $r_1v_1 = r_2v_2$ at the turning points. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Conservation needs no outside **torque**, not no outside force: a bullet on a pivoted rod has outside forces but still conserves $L$ about the pivot. {lvl=2}
- Kinetic energy is not conserved when you pull in your arms or when bodies stick together. Only $L$ is. {lvl=2}
- Always state about which point or axis. The same particle has different $L$ about different points. {lvl=2}
- Add angular momenta with signs: spins in opposite senses subtract. {lvl=2}
- A child jumping onto a disc adds moment of inertia, $mR^2$ at the rim, and no spin of its own if it arrives moving radially. {lvl=3}
- $P = \tau\omega$ needs $\omega$ in radians per second, not rev/min. {lvl=3}
:::
