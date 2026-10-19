---
title: Circular motion
summary: 'Why a car turning at steady speed is still accelerating, and the simple rule that gives that hidden acceleration.'
ncert: ["Class 11 Physics · Ch 3 Motion in a Plane (§3.10 Uniform circular motion)", "Class 9 Science · Ch 4 Describing Motion Around Us (§4.4.1 Uniform circular motion)"]
up_to: Olympiad
builds_on: [Speed, velocity, acceleration, Vectors in motion, Differentiation of sin and cos]
notes_prompt: Explain, with the triangle of velocity vectors, why a body moving round a circle at constant speed has an acceleration, why it points to the centre, and why its size is v²/R.
margin:
  - kind: history
    title: History
    text: Christiaan Huygens published the correct rule for circular motion in 1673, in "Horologium Oscillatorium", while working on pendulum clocks. Newton had reached the same result privately some years earlier, and coined the word "centripetal", centre-seeking.
  - kind: tip
    title: Exam habit
    text: "Convert rev/min to rad/s first: multiply by 2π/60. Then use a = ω²R when the period or rpm is given and a = v²/R when the speed is given."
  - kind: olympiad
    title: Olympiad link
    text: The radius of curvature turns any curved path into a chain of tiny circles. With ρ = v²/a_n you can find the curvature of a parabola, an ellipse, a cycloid or a helix without any geometry, only by reading off v and a at a point.
books:
  - { title: "NCERT Physics Class XI Part 1", ref: "Ch 3 Motion in a Plane, §3.10 Uniform circular motion" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapter Circular Motion [Unverified chapter reference]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 1 · 1.1 Kinematics [Unverified section reference]" }
  - { title: "Kleppner and Kolenkow, An Introduction to Mechanics", ref: "chapter on vectors and kinematics, polar coordinates [Unverified chapter reference]" }
cards:
  - { front: "Why is uniform circular motion accelerated?", back: "The speed is constant but the direction of the velocity keeps changing, and velocity is a vector. A change of velocity per unit time is an acceleration." }
  - { front: "Centripetal acceleration in three forms?", back: "$a_c = \\dfrac{v^2}{R} = \\omega^2R = v\\omega$, directed toward the centre. With $\\omega = 2\\pi\\nu$: $a_c = 4\\pi^2\\nu^2R$." }
  - { front: "Tangential and radial acceleration in non-uniform circular motion?", back: "$a_t = \\dfrac{dv}{dt} = \\alpha R$ along the tangent, $a_c = \\dfrac{v^2}{R}$ toward the centre; total $a = \\sqrt{a_t^2 + a_c^2}$." }
  - { front: "Derivatives of the polar unit vectors?", back: "$\\dfrac{d\\hat r}{dt} = \\dot\\theta\\,\\hat\\theta$ and $\\dfrac{d\\hat\\theta}{dt} = -\\dot\\theta\\,\\hat r$." }
  - { front: "Radius of curvature from v and a?", back: "$\\rho = \\dfrac{v^2}{a_n} = \\dfrac{|\\mathbf v|^3}{|\\mathbf v\\times\\mathbf a|}$; for a graph $y(x)$, $\\rho = \\dfrac{(1+y'^2)^{3/2}}{|y''|}$." }
  - { front: "Acceleration in polar coordinates?", back: "$a_r = \\ddot r - r\\dot\\theta^2$, $a_\\theta = r\\ddot\\theta + 2\\dot r\\dot\\theta$." }
core:
  idea: 'A body moving on a circle of radius $R$ with speed $v$ has an acceleration $v^2/R = \omega^2R$ toward the centre, because the direction of its velocity turns at the rate $\omega$. If the speed also changes, a tangential part $dv/dt$ adds at right angles; on any curved path $R$ is replaced by the local radius of curvature.'
  formulas:
    - tex: 'v = \omega R,\qquad \omega = \frac{d\theta}{dt} = \frac{2\pi}{T} = 2\pi\nu'
      label: 'Angular and linear speed'
    - tex: 'a_c = \frac{v^2}{R} = \omega^2 R'
      label: 'Centripetal acceleration (toward the centre)'
    - tex: 'a_t = \frac{dv}{dt} = \alpha R,\qquad a = \sqrt{a_t^2 + a_c^2}'
      label: 'Non-uniform circular motion'
  conditions:
    - 'Point particle; position measured in an inertial frame from the fixed centre of the circle'
    - 'Angles in radians, so that arc length s = Rθ holds without extra constants'
    - 'The acceleration points exactly at the centre only when the speed is constant'
  sign: 'Centripetal acceleration is not a constant vector: its direction turns with the body, so the equations of motion for constant acceleration do not apply to it. "Centripetal" names a direction, not a new kind of force.'
outcomes:
  - 'Explain why motion at constant speed on a circle is accelerated, and in which direction'
  - 'Convert between rpm, frequency, period, angular speed and linear speed, and find a = v²/R = ω²R'
  - 'Derive the centripetal acceleration from the velocity triangle and from r(t) = R(cos ωt, sin ωt)'
  - 'Split the acceleration in non-uniform circular motion into tangential and radial parts, and use the constant-α equations'
  - 'Find the radius of curvature of any path from v and a, and use acceleration in polar coordinates'
opener:
  story: |
    Picture your car on a roundabout. The speedometer needle is frozen at 36 km/h: you are not pressing the accelerator or the brake, and the number never moves. Yet your body leans against the door, and the phone on the dashboard slides across to one side. Something is pushing things around, and the speedometer cannot see it.

    Physics has a name for that hidden something: **acceleration**. We usually think of it as "getting faster", but its real meaning is wider: any change of velocity at all. And a velocity is not just a number. It also says which way you are heading.

    Here is a fact to try at a party. The Earth goes round the Sun at nearly the same speed all year, about 30 km/s, and never really speeds up or slows down. Yet it is accelerating towards the Sun every single second, at about 6 mm/s². How can something at constant speed be accelerating, and where does that acceleration point?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Car on a roundabout at constant speed, with velocity along the track and acceleration towards the centre"><circle cx="140" cy="140" r="74" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--c);stroke-width:2"/><circle cx="140" cy="140" r="4" style="fill:var(--ink)"/><rect x="204" y="130" width="22" height="20" rx="5" style="fill:var(--chem)"/><path d="M215 130 L215 84" style="stroke:var(--ink);stroke-width:3;fill:none"/><path d="M215 84 L209 94 M215 84 L221 94" style="stroke:var(--ink);stroke-width:3;fill:none"/><path d="M202 140 L152 140" style="stroke:var(--c);stroke-width:3;stroke-dasharray:6 4;fill:none"/><path d="M152 140 L162 134 M152 140 L162 146" style="stroke:var(--c);stroke-width:3;fill:none"/><text x="222" y="120" style="font-size:11px;fill:var(--ink)">velocity</text><text x="100" y="162" style="font-size:11px;fill:var(--c)">acceleration</text><text x="146" y="134" style="font-size:11px;fill:var(--muted)">centre</text><circle cx="262" cy="52" r="36" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M262 52 L282 30" style="stroke:var(--chem);stroke-width:3;fill:none"/><circle cx="262" cy="52" r="3" style="fill:var(--ink)"/><text x="244" y="82" style="font-size:11px;fill:var(--muted)">36 km/h</text><text x="228" y="102" style="font-size:11px;fill:var(--muted)">needle frozen</text><text x="30" y="232" style="font-size:11px;fill:var(--muted)">constant speed, turning velocity: accelerating</text></svg>'
symbols:
  - s: 'v'
    means: 'speed along the circle (m/s)'
  - s: 'R'
    means: 'radius of the circle (m)'
  - s: '\theta'
    means: 'angle the radius has turned through, in radians (rad)'
  - s: '\omega'
    means: 'angular speed: how fast the angle grows (rad/s)'
  - s: 'T'
    means: 'period: time for one full turn (s)'
  - s: '\nu'
    means: 'frequency: turns per second (Hz)'
  - s: 'a_c'
    means: 'centripetal acceleration, towards the centre (m/s^2)'
  - s: 'a_t'
    means: 'tangential acceleration, along the path: the rate the speed changes (m/s^2)'
  - s: '\alpha'
    means: 'angular acceleration: how fast the angular speed changes (rad/s^2)'
  - s: '\rho'
    means: 'radius of curvature of a path at a point (m)'
life:
  - 'A car on a bend or roundabout at steady speed is still accelerating sideways, which is why you lean towards the outside of the turn.'
  - 'The Earth circles the Sun and the Moon circles the Earth: at near-constant speed, with an acceleration towards the centre the whole time.'
  - 'A spin dryer or a ceiling fan: every point turns at the same rate, yet points far from the centre move much faster than points near it.'
  - 'Fighter pilots and roller-coaster riders feel several times their own weight in tight turns, because the sideways acceleration $v^2/R$ grows with the square of the speed.'
  - 'A stone whirled on a string flies off along a straight tangent the moment the string breaks, like sparks from a grinding wheel.'
models:
  - name: 'Steady is not the same as unchanging'
    text: 'A constant number can hide a changing direction. A company with steady sales growth may still be turning into a different business. Always ask not only how fast something is going but also which way.'
  - name: 'Zoom in until the curve is straight'
    text: 'Any smooth curve, seen close enough, is a tiny piece of a circle. The athlete on a polygon track with ever more sides becomes the athlete on a circle. Tiny steps added up is the idea behind calculus, compound interest and every trend line.'
  - name: 'Same rate, different reach'
    text: 'Everything on a turntable turns at the same rate, but the outside rim travels farther in the same time. When a group turns together, the ones at the edge have to move faster just to keep up: think of the outer lane on a running track.'
links:
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'The Moon''s fall towards the Earth is exactly this centripetal acceleration, $v^2/R$. Newton checked gravity by comparing the Moon''s $v^2/R$ with the apple''s $g$.'
    differs: 'Here we only describe the acceleration of a circle; gravity says what supplies it, and how it weakens with distance.'
  - leaf: 'phy/lorentz-force-and-circular-motion'
    name: 'Lorentz force and circular motion'
    same: 'A charge in a magnetic field travels on a circle with the same $a = v^2/R$ and the same $\omega$, $T$ and $\nu$.'
    differs: 'The magnetic force is always at right angles to the velocity, so the speed never changes: perfectly uniform circular motion, with a radius set by the charge, the mass and the field.'
next:
  q: 'Cut the string on a whirled stone and it flies off in a straight line. So what would the stone do if nothing at all acted on it: slow down, stop, or keep going for ever? And what does it take to turn it?'
  leaf: 'phy/inertia-and-the-first-law'
  name: 'Inertia and the first law'
---

:::hook
q: So what's your guess? The roundabout car holds a steady 36 km/h. Is it accelerating, and if so, which way?
options: ["No: its speed is constant, so its acceleration is zero", "Yes, forward along its direction of motion", "Yes, toward the centre of the roundabout", "Yes, outward, away from the centre"]
answer: 2
right: Right, and it surprises almost everyone. Speed is only the size of the velocity, and the direction keeps turning towards the centre. On a roundabout of radius 20 m, the car's acceleration is (10 m/s)²/20 m = 5 m/s², half of g, and all of it sideways. The Earth does the same round the Sun, at 6 mm/s².
wrong: The speedometer reads only the size of the velocity. But the direction keeps changing, so the velocity changes, and any change of velocity is an acceleration. Which way does the change point? Towards the centre, as the lesson will show.
:::

## Steady speed, changing velocity {lvl=1 id=s-ucm label="Class 9"}

When an object goes round a circle at constant speed, the motion is called **uniform circular motion**. "Uniform" refers to the speed only. The direction of motion changes at every instant: at the top of the circle the object moves left, a quarter turn later it moves down, and so on.

Velocity is speed together with direction. If the direction changes, the velocity changes, and any change of velocity is an acceleration. So uniform circular motion is accelerated motion, even though the speedometer reading never changes.

The velocity at each point is along the **tangent** to the circle. You can see this when a stone whirled on a string is released: it flies off along the tangent at the point of release, not outward along the radius. Sparks from a grinding wheel do the same.

:::figure caption="Uniform circular motion (anticlockwise): the velocity v (blue) is along the tangent; the acceleration a (orange) points to the centre. Both have constant size, but both keep turning."
<svg viewBox="0 0 372 220" role="img" aria-label="Circle with tangential velocity arrows and inward acceleration arrows at four points">
<defs><marker id="cmv1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="cma1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<circle class="ln" cx="180" cy="110" r="80"/>
<circle class="obj" cx="180" cy="110" r="3"/><text class="k" x="186" y="122">O</text>
<circle class="obj" cx="260" cy="110" r="4"/><line class="ray" x1="260" y1="110" x2="260" y2="58" marker-end="url(#cmv1)"/><line class="wf" x1="260" y1="110" x2="222" y2="110" marker-end="url(#cma1)"/>
<circle class="obj" cx="180" cy="30" r="4"/><line class="ray" x1="180" y1="30" x2="128" y2="30" marker-end="url(#cmv1)"/><line class="wf" x1="180" y1="30" x2="180" y2="68" marker-end="url(#cma1)"/>
<circle class="obj" cx="104.8" cy="137.4" r="4"/><line class="ray" x1="104.8" y1="137.4" x2="122.6" y2="186.3" marker-end="url(#cmv1)"/><line class="wf" x1="104.8" y1="137.4" x2="140.5" y2="124.4" marker-end="url(#cma1)"/>
<circle class="obj" cx="220" cy="179.3" r="4"/><line class="ray" x1="220" y1="179.3" x2="265" y2="153.3" marker-end="url(#cmv1)"/><line class="wf" x1="220" y1="179.3" x2="201" y2="146.4" marker-end="url(#cma1)"/>
<line class="faint" x1="260" y1="58" x2="260" y2="10"/><text x="266" y="14">released here:</text><text x="266" y="27">flies off along</text><text x="266" y="40">the tangent</text>
<text class="k" x="266" y="70">v</text><text class="k" x="228" y="104">a</text>
<text class="k" x="124" y="24">v</text><text class="k" x="186" y="64">a</text>
<text x="20" y="208">speed constant, direction of v changing</text>
</svg>
:::

For a circle of radius $r$ covered once in time $T$, the speed is the circumference divided by the time:

$$v = \frac{2\pi r}{T}.$$

A cyclist on a circular track of radius 50 m who completes a lap in 40 s moves at $v = 2\pi\times50/40 = 7.9$ m/s.

:::qc
q: A stone is whirled in a horizontal circle and the string breaks when the stone is at the northernmost point of the circle, moving east. In which direction does the stone fly off (seen from above)?
options: ["East, along the tangent", "North, straight outward", "South, toward the centre", "North-east"]
answer: 0
right: Right. With the string gone nothing turns the velocity any more, so the stone keeps the velocity it had at that instant, which was along the tangent, eastward.
wrong: The string only turned the velocity; it never pushed the stone outward. Once it breaks, the stone carries on with the velocity it had, which was along the tangent: east.
:::

## Radians and angular speed {lvl=2 id=s-omega label="Class 11"}

On a circle the radius is fixed, so a single number fixes the position: the angle $\theta$ that the radius to the body makes with a reference line. This is the **angular position**. A change in it, $\Delta\theta$, is the **angular displacement**. By convention anticlockwise is positive.

Measure angles in **radians**: the angle in radians is the arc length divided by the radius, $\theta = s/R$. One full turn is $2\pi R/R = 2\pi$ rad. The point of this choice is that arc and angle are then related with no extra constant:

$$s = R\theta.$$

The **angular speed** is the rate at which the angle changes,

$$\omega = \frac{d\theta}{dt}\quad(\text{average: } \bar\omega = \Delta\theta/\Delta t),$$

in rad/s. Dividing $\Delta s = R\,\Delta\theta$ by $\Delta t$ and letting $\Delta t\to0$ gives the link between linear and angular speed:

:::law caption="Valid for angles in radians and a circle of fixed radius R."
$$v = \omega R$$
:::

For uniform motion with period $T$ and frequency $\nu = 1/T$ (revolutions per second):

$$\omega = \frac{2\pi}{T} = 2\pi\nu,\qquad v = \frac{2\pi R}{T} = 2\pi R\nu.$$

All points of a rotating rigid body share the same $\omega$; their speeds grow in proportion to their distance from the axis. On a turntable at 33⅓ rpm, $\omega = 2\pi\times33.3/60 = 3.49$ rad/s, so a point 15 cm from the centre moves at 0.52 m/s and a point 5 cm out at only 0.17 m/s.

:::qc
q: The Earth turns once in 24 h. What is the speed of a point on the equator (radius 6.4 × 10⁶ m) due to this rotation?
options: ["about 465 m/s", "about 7.3 × 10⁻⁵ m/s", "about 4.65 km/s", "about 270 m/s"]
answer: 0
right: Right. $\omega = 2\pi/86400 = 7.27\times10^{-5}$ rad/s, so $v = \omega R = 7.27\times10^{-5}\times6.4\times10^6 = 465$ m/s.
wrong: First find $\omega = 2\pi/T = 2\pi/86400\ \text{s} = 7.27\times10^{-5}$ rad/s; that is the angular speed, not the speed. Then $v = \omega R \approx 465$ m/s.
:::

## The centripetal acceleration {lvl=2 id=s-centripetal label="Class 11"}

We know uniform circular motion is accelerated. Now find the direction and the size, using only the definition $\mathbf a = \lim \Delta\mathbf v/\Delta t$.

Let the body be at P at time $t$ and at P′ at time $t + \Delta t$, with position vectors $\mathbf r$ and $\mathbf r'$ from the centre C. In that time the radius turns through $\Delta\theta$. The velocities $\mathbf v$ and $\mathbf v'$ have the same size $v$ and are perpendicular to $\mathbf r$ and $\mathbf r'$. So the angle between $\mathbf v$ and $\mathbf v'$ is also $\Delta\theta$.

:::figure caption="Left: positions P and P′ on the circle; the radius turns through Δθ. Right: the velocities drawn from one point; they also turn through Δθ, and Δv points toward the centre (along the bisector, reversed)."
<svg viewBox="0 0 360 238" role="img" aria-label="Position triangle CPP′ and the similar velocity triangle with Δv">
<defs><marker id="cmv2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="cma2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="cmk2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<circle class="faint" cx="90" cy="130" r="80"/>
<circle class="obj" cx="90" cy="130" r="3"/><text class="k" x="78" y="146">C</text>
<line class="ln" x1="90" y1="130" x2="141.4" y2="68.7" marker-end="url(#cmk2)"/><line class="ln" x1="90" y1="130" x2="103.9" y2="51.2" marker-end="url(#cmk2)"/>
<line class="ray" x1="141.4" y1="68.7" x2="103.9" y2="51.2" style="stroke-width:1.6"/>
<path class="gr" d="M102.9 114.7 A20 20 0 0 0 93.5 110.3"/><text x="100" y="106">Δθ</text>
<circle class="obj" cx="141.4" cy="68.7" r="3.5"/><circle class="obj" cx="103.9" cy="51.2" r="3.5"/>
<text class="k" x="148" y="70">P</text><text class="k" x="96" y="44">P′</text>
<text x="124" y="108">r</text><text x="84" y="92">r′</text><text x="126" y="52">Δr</text>
<text x="20" y="218">positions</text><text x="20" y="230">(sides R, R, |Δr|)</text>
<line class="ray" x1="330" y1="150" x2="261.1" y2="92.1" marker-end="url(#cmv2)"/>
<line class="ray" x1="330" y1="150" x2="241.4" y2="134.3" marker-end="url(#cmv2)"/>
<line class="wf" x1="261.1" y1="92.1" x2="242.6" y2="131.8" marker-end="url(#cma2)"/>
<path class="gr" d="M313.1 135.9 A22 22 0 0 0 308.3 146.2"/><text x="290" y="132">Δθ</text>
<text class="k" x="298" y="110">v</text><text class="k" x="282" y="160">v′</text><text class="k" x="232" y="112">Δv</text>
<text x="214" y="218">velocities</text><text x="214" y="230">(sides v, v, |Δv|)</text>
</svg>
:::

**Direction.** The triangle of velocities is isosceles, so $\Delta\mathbf v$ is perpendicular to the bisector of $\mathbf v$ and $\mathbf v'$. That means it lies along the bisector of $\mathbf r$ and $\mathbf r'$, pointing inward. As $\Delta t\to0$, P′ closes in on P and the bisector becomes the radius at P. So the instantaneous acceleration points from the body to the centre.

**Size.** The triangles CPP′ and the velocity triangle are similar (both isosceles with apex angle $\Delta\theta$), so

$$\frac{|\Delta\mathbf v|}{v} = \frac{|\Delta\mathbf r|}{R}\quad\Rightarrow\quad|\Delta\mathbf v| = \frac{v}{R}|\Delta\mathbf r|.$$

Divide by $\Delta t$. As $\Delta t\to0$ the chord $|\Delta\mathbf r|$ approaches the arc $v\,\Delta t$, so $|\Delta\mathbf r|/\Delta t\to v$ and

:::law caption="Uniform circular motion of radius R: the acceleration always points to the centre. With ω = 2πν it is also 4π²ν²R."
$$a_c = \frac{v^2}{R} = \omega^2R = v\omega$$
:::

The name **centripetal** means "centre-seeking". Its size is constant but its direction turns with the body, so it is **not** a constant vector. That is why $v = u + at$ and the other constant-acceleration equations cannot be used on the motion as a whole.

A second way to see the size: the velocity vector, of fixed length $v$, turns at the rate $\omega$. Its tip moves on a circle of radius $v$ at speed $v\omega$. That rate of change of velocity is the acceleration, $a = v\omega = v^2/R$.

:::worked title="How hard does a spin dryer pull?"
A washing-machine drum of radius 0.25 m spins at 1200 rpm.

$\omega = 1200\times2\pi/60 = 125.7$ rad/s. The rim moves at $v = \omega R = 31.4$ m/s.

$a_c = \omega^2R = 125.7^2\times0.25 = 3.95\times10^3\ \text{m/s}^2$, about 400 g. Water in the clothes cannot be given that much inward acceleration through the fabric, so it leaves through the holes along the tangent.
:::

:::note title="Where the force comes from" tone=info
Kinematics only says that a body on a circle *must* accelerate toward the centre at $v^2/R$. Which real force provides $ma_c$ (string tension, friction, gravity, the normal force of a banked road) is dynamics. That is the subject of the leaf **Dynamics of circular motion** in Newton's laws, which covers banking, the conical pendulum and the vertical circle.
:::

:::qc
q: Two points on a rotating disc are at 10 cm and 20 cm from the axis. How do their centripetal accelerations compare?
options: ["The outer point has twice the acceleration", "The outer point has half the acceleration", "They are equal", "The outer point has four times the acceleration"]
answer: 0
right: Right. Both share the same $\omega$, so $a = \omega^2R$ doubles when $R$ doubles. (Using $v^2/R$ gives the same: $v$ doubles, so $v^2/R$ doubles.)
wrong: On one disc the points share $\omega$, not $v$. With $a = \omega^2R$, doubling $R$ doubles $a$. If instead two cars had the same speed on curves of radius 10 m and 20 m, the tighter curve would give twice the acceleration.
:::

## The same result by calculus {lvl=2 id=s-calculus label="Class 11"}

The geometric argument can be checked by differentiation. Put the centre at the origin and let $\theta = \omega t$ with $\omega$ constant. Then

$$\mathbf r(t) = R\cos\omega t\,\hat{\mathbf i} + R\sin\omega t\,\hat{\mathbf j}.$$

Differentiate once:

$$\mathbf v = \frac{d\mathbf r}{dt} = \omega R\,(-\sin\omega t\,\hat{\mathbf i} + \cos\omega t\,\hat{\mathbf j}),$$

a vector of length $\omega R$ with $\mathbf v\cdot\mathbf r = 0$: tangent to the circle. Differentiate again:

$$\mathbf a = \frac{d\mathbf v}{dt} = -\omega^2R\,(\cos\omega t\,\hat{\mathbf i} + \sin\omega t\,\hat{\mathbf j}) = -\omega^2\,\mathbf r.$$

The minus sign says the acceleration points opposite to $\mathbf r$, toward the centre, and its size is $\omega^2R$. Each Cartesian component, $x = R\cos\omega t$, is simple harmonic motion: a body in uniform circular motion, seen edge-on, oscillates. That link returns in the lessons on oscillations.

There is also a general reason why the acceleration is perpendicular to the velocity whenever the speed is constant. Differentiate $v^2 = \mathbf v\cdot\mathbf v$:

$$\frac{d}{dt}(\mathbf v\cdot\mathbf v) = 2\,\mathbf v\cdot\mathbf a.$$

If the speed is constant the left side is zero, so $\mathbf a\perp\mathbf v$. This holds on any path, not only on circles.

:::qc
q: A particle has $\mathbf r = 3\cos 2t\,\hat{\mathbf i} + 3\sin 2t\,\hat{\mathbf j}$ (metres, seconds). What is the size of its acceleration?
options: ["12 m/s²", "6 m/s²", "18 m/s²", "4 m/s²"]
answer: 0
right: Right. $R = 3$ m and $\omega = 2$ rad/s, so $a = \omega^2R = 4\times3 = 12$ m/s², toward the origin.
wrong: Read off $R = 3$ m and $\omega = 2$ rad/s. Then $\mathbf a = -\omega^2\mathbf r$, of size $\omega^2R = 12$ m/s². (6 m/s² is the speed $\omega R$.)
:::

## Speeding up on a circle {lvl=3 id=s-nonuniform label="JEE"}

Now let the speed change, as for a car braking on a bend or a fan starting up. The radius is still fixed, but $\omega$ now varies. Define the **angular acceleration**

$$\alpha = \frac{d\omega}{dt}\quad(\text{rad/s}^2).$$

The cleanest way to differentiate is with unit vectors that move with the body: $\hat{\mathbf r}$ points outward along the radius and $\hat{\boldsymbol\theta}$ along the tangent in the direction of increasing $\theta$. In Cartesian form $\hat{\mathbf r} = (\cos\theta, \sin\theta)$ and $\hat{\boldsymbol\theta} = (-\sin\theta, \cos\theta)$, so by the chain rule

$$\frac{d\hat{\mathbf r}}{dt} = \omega\,\hat{\boldsymbol\theta},\qquad \frac{d\hat{\boldsymbol\theta}}{dt} = -\omega\,\hat{\mathbf r}.$$

These two lines are the whole of circular kinematics. With $\mathbf r = R\hat{\mathbf r}$:

$$\mathbf v = R\omega\,\hat{\boldsymbol\theta},\qquad \mathbf a = \underbrace{R\alpha\,\hat{\boldsymbol\theta}}_{\text{tangential}}\ \underbrace{-\ R\omega^2\,\hat{\mathbf r}}_{\text{centripetal}}.$$

:::figure caption="Speeding up on a circle: the tangential part a_t lies along v, the centripetal part a_c points to the centre, and the total a points inside the circle but ahead of the centre."
<svg viewBox="0 0 360 232" role="img" aria-label="Circle with a point showing tangential and centripetal acceleration components and their resultant">
<defs><marker id="cma3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="cmk3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<circle class="faint" cx="150" cy="120" r="85"/>
<circle class="obj" cx="150" cy="120" r="3"/><text class="k" x="140" y="138">C</text>
<line class="faint" x1="250.1" y1="99.9" x2="171.2" y2="21"/>
<line class="wf" x1="210.1" y1="59.9" x2="185.4" y2="35.2" marker-end="url(#cma3)"/>
<line class="wf" x1="210.1" y1="59.9" x2="167.7" y2="102.3" marker-end="url(#cma3)"/>
<line class="faint" x1="185.4" y1="35.2" x2="143" y2="77.6"/><line class="faint" x1="167.7" y1="102.3" x2="143" y2="77.6"/>
<line class="ln" x1="210.1" y1="59.9" x2="145" y2="77.1" marker-end="url(#cmk3)" style="stroke-width:2"/>
<circle class="obj" cx="210.1" cy="59.9" r="4"/>
<text class="k" x="166" y="32">a<tspan dy="3" style="font-size:9px">t</tspan></text>
<text class="k" x="192" y="96">a<tspan dy="3" style="font-size:9px">c</tspan></text>
<text class="k" x="150" y="70">a</text>
<text x="220" y="56">P</text>
<text x="236" y="30">tangent</text><text x="236" y="42">(direction of v)</text>
<text x="16" y="222">tan φ = a_t / a_c, φ measured from the radius</text>
</svg>
:::

So the acceleration has two perpendicular parts:

:::law caption="Circle of fixed radius R; v is the speed. The tangential part changes the speed, the centripetal part turns the velocity."
$$a_t = \frac{dv}{dt} = \alpha R,\qquad a_c = \frac{v^2}{R} = \omega^2R,\qquad a = \sqrt{a_t^2 + a_c^2}$$
:::

The total acceleration still points inside the circle, but not at the centre. It leans toward the direction of motion when the body speeds up and away from it when the body slows down. This is why NCERT's statement "the net acceleration in circular motion is always toward the centre" is false (Exercise 3.16).

Be careful with notation: $a_t = d|\mathbf v|/dt$, the rate of change of speed. It is not $|d\mathbf v/dt|$, which is the full acceleration $a$.

:::worked title="Braking on a bend"
A car enters a bend of radius 80 m at 20 m/s and brakes so that its speed falls at 3.0 m/s².

$a_c = v^2/R = 400/80 = 5.0$ m/s² toward the centre; $a_t = 3.0$ m/s² opposite to the velocity.

$a = \sqrt{5.0^2 + 3.0^2} = 5.8$ m/s², at $\tan^{-1}(3/5) = 31^\circ$ from the radius, tilted backward. Since the tyres must supply all of it, braking on a bend uses up grip that is also needed for turning.
:::

:::qc
q: A particle starts from rest on a circle of radius 2 m with constant tangential acceleration 1 m/s². After what time is its centripetal acceleration equal to its tangential acceleration?
options: ["√2 s ≈ 1.41 s", "2 s", "1 s", "4 s"]
answer: 0
right: Right. $v = a_t t = t$, so $a_c = t^2/2$. Setting $t^2/2 = 1$ gives $t = \sqrt2$ s. At that instant the total acceleration makes 45° with the radius.
wrong: The speed grows as $v = a_tt = t$ (m/s), so $a_c = v^2/R = t^2/2$. Equal to $a_t = 1$ m/s² when $t^2 = 2$, $t = \sqrt2$ s.
:::

## Constant angular acceleration {lvl=3 id=s-alpha label="JEE"}

On a circle the angle $\theta$ is a single coordinate, just as $x$ is on a straight line. The definitions $\omega = d\theta/dt$ and $\alpha = d\omega/dt$ have exactly the form of $v = dx/dt$ and $a = dv/dt$. So if $\alpha$ is constant, integrating twice gives the familiar equations with letters changed:

$$\omega = \omega_0 + \alpha t,\qquad \theta - \theta_0 = \omega_0t + \tfrac12\alpha t^2,\qquad \omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0).$$

Constant $\alpha$ means constant $a_t = \alpha R$. It does **not** mean constant total acceleration: $a_c = \omega^2R$ grows as the body speeds up. The angular equations apply because $\theta$ is a one-dimensional coordinate along the path.

:::worked title="A ceiling fan running down"
A fan turning at 900 rpm is switched off and stops uniformly in 30 s. Its blade tips are 0.60 m from the axis.

$\omega_0 = 900\times2\pi/60 = 94.2$ rad/s, so $\alpha = -94.2/30 = -3.14$ rad/s².

Angle turned: $\theta = \tfrac12\omega_0t = \tfrac12\times94.2\times30 = 1.41\times10^3$ rad, that is 225 revolutions.

Just after switch-off, at the tip: $a_t = \alpha R = -1.9$ m/s² but $a_c = \omega_0^2R = 5.3\times10^3$ m/s². Even while the fan runs down, almost all the acceleration of the tip is centripetal.
:::

All points of a rigid body turning about a fixed axis share the same $\theta$, $\omega$ and $\alpha$; only $v$, $a_t$ and $a_c$ scale with the distance from the axis. That is why rotation of rigid bodies is described in angular variables.

:::qc
q: A wheel speeds up uniformly from rest and turns through 10 revolutions in the first 5 s. Through how many revolutions does it turn in the next 5 s?
options: ["30", "10", "20", "40"]
answer: 0
right: Right. From rest $\theta\propto t^2$, so in 10 s it turns $4\times10 = 40$ revolutions in total; the second 5 s gives $40 - 10 = 30$.
wrong: From rest, $\theta = \tfrac12\alpha t^2$, so doubling the time quadruples the angle: 40 revolutions in 10 s. Subtract the first 10 to get 30.
:::

## Angular velocity as a vector {lvl=3 id=s-vector label="JEE"}

In three dimensions a rotation needs an axis as well as a rate. So define the **angular velocity vector** $\boldsymbol\omega$: its size is $\omega$, it lies along the axis, and its sense follows the right-hand rule (curl the fingers along the motion; the thumb gives $\boldsymbol\omega$). For anticlockwise motion in the $xy$ plane, $\boldsymbol\omega$ points along $+z$.

With $\mathbf r$ drawn from any point on the axis to the body,

$$\mathbf v = \boldsymbol\omega\times\mathbf r.$$

The size is $\omega r\sin\phi = \omega R$, where $R = r\sin\phi$ is the distance from the axis, and the direction is along the tangent. Differentiating, with $\boldsymbol\alpha = d\boldsymbol\omega/dt$,

$$\mathbf a = \boldsymbol\alpha\times\mathbf r + \boldsymbol\omega\times\mathbf v = \boldsymbol\alpha\times\mathbf r + \boldsymbol\omega\times(\boldsymbol\omega\times\mathbf r).$$

For a fixed axis the first term is the tangential part $\alpha R$. The second term is the centripetal part: expanding, $\boldsymbol\omega\times(\boldsymbol\omega\times\mathbf r) = -\omega^2\mathbf R_\perp$, where $\mathbf R_\perp$ is the perpendicular from the axis to the body. It points at the axis, not at the origin.

Why is this allowed? Finite rotations are not vectors, because two of them done in different orders give different results (turn a book 90° about two axes in either order and compare). But infinitesimal rotations $d\boldsymbol\theta$ do add like vectors, to first order, and $\boldsymbol\omega = d\boldsymbol\theta/dt$ inherits that property.

:::qc
q: A body moves anticlockwise (seen from above) on a horizontal circle. Its angular velocity vector points
options: ["vertically upward", "vertically downward", "along the velocity", "toward the centre"]
answer: 0
right: Right. Curl the fingers of the right hand anticlockwise as seen from above; the thumb points up. $\boldsymbol\omega$ lies along the axis, perpendicular to the plane of the circle.
wrong: $\boldsymbol\omega$ lies along the axis of rotation, perpendicular to the plane of motion. By the right-hand rule, anticlockwise as seen from above gives an upward vector.
:::

## Radius of curvature {lvl=3 id=s-curvature label="JEE"}

Circles matter far beyond circular tracks. Look closely enough at any smooth curve and a short piece of it matches a circle: the **osculating circle**, whose radius $\rho$ is the **radius of curvature** at that point and whose centre is the centre of curvature. A straight line has $\rho = \infty$; a tight bend has a small $\rho$.

At each instant, then, a moving body is doing circular motion on its osculating circle. Split its acceleration along the velocity (tangential) and perpendicular to it (normal, toward the centre of curvature):

:::law caption="Valid on any smooth path. The tangential part changes the speed; the normal part turns the velocity and fixes the curvature."
$$a_t = \frac{dv}{dt},\qquad a_n = \frac{v^2}{\rho}\quad\Rightarrow\quad\rho = \frac{v^2}{a_n} = \frac{|\mathbf v|^3}{|\mathbf v\times\mathbf a|}$$
:::

The last form follows because $|\mathbf v\times\mathbf a| = v\,a_n$: only the part of $\mathbf a$ perpendicular to $\mathbf v$ survives the cross product. For a path given as a graph $y(x)$, the same formula with $x$ playing the role of time gives

$$\rho = \frac{\left(1 + y'^2\right)^{3/2}}{|y''|}.$$

:::figure caption="A projectile path. At the top the whole of g is normal to v, so ρ = v²/g. At an earlier point g splits into a tangential part (slowing the body) and a normal part g cos φ."
<svg viewBox="0 0 360 240" role="img" aria-label="Parabolic projectile path with the osculating circle at the top and the decomposition of g at another point">
<defs><marker id="cmv4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="cma4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="gr" x1="10" y1="190" x2="350" y2="190"/>
<path class="ln" d="M20 190 Q180 -50 340 190"/>
<circle class="faint" cx="180" cy="176.7" r="106.7"/>
<line class="gr" x1="180" y1="176.7" x2="180" y2="70"/><circle class="obj" cx="180" cy="176.7" r="2.5"/>
<text x="186" y="150">ρ = v²/g</text>
<circle class="obj" cx="180" cy="70" r="4"/>
<line class="ray" x1="180" y1="70" x2="236" y2="70" marker-end="url(#cmv4)"/><text class="k" x="238" y="66">v</text>
<line class="wf" x1="180" y1="70" x2="180" y2="108" marker-end="url(#cma4)"/><text class="k" x="168" y="104">g</text>
<circle class="obj" cx="84" cy="113.2" r="4"/>
<line class="ray" x1="84" y1="113.2" x2="121.2" y2="79.8" marker-end="url(#cmv4)"/><text class="k" x="112" y="76">v</text>
<line class="wf" x1="84" y1="113.2" x2="84" y2="153.2" marker-end="url(#cma4)"/><text class="k" x="74" y="168">g</text>
<line class="faint" x1="84" y1="113.2" x2="64.1" y2="131.1"/><line class="faint" x1="84" y1="113.2" x2="103.9" y2="135.3"/>
<line class="faint" x1="64.1" y1="131.1" x2="84" y2="153.2"/><line class="faint" x1="103.9" y1="135.3" x2="84" y2="153.2"/>
<text x="26" y="132">a_t</text><text x="106" y="142">a_n</text>
<text x="180" y="214" text-anchor="middle">osculating circle</text><text x="180" y="227" text-anchor="middle">at the top (dashed)</text>
</svg>
:::

:::worked title="Curvature of a projectile path"
A ball is thrown at 20 m/s at 60° above the horizontal ($g = 9.8$ m/s²).

At the top the velocity is horizontal, $v = 20\cos60^\circ = 10$ m/s, and $g$ is entirely normal: $\rho_{\text{top}} = v^2/g = 100/9.8 = 10.2$ m.

At launch the velocity makes 60° with the horizontal, so the normal part of $g$ is $g\cos60^\circ$: $\rho_0 = u^2/(g\cos60^\circ) = 400/4.9 = 81.6$ m.

In general, where the velocity makes angle $\varphi$ with the horizontal, $\rho = v^2/(g\cos\varphi)$. The path is most sharply curved at the top, where the speed is least.
:::

:::qc
q: At some instant a particle has velocity 4 m/s along +x and acceleration 3 m/s² along +x plus 6 m/s² along +y. What is the radius of curvature of its path there?
options: ["2.67 m", "5.33 m", "2.39 m", "1.78 m"]
answer: 0
right: Right. Only the part of $\mathbf a$ perpendicular to $\mathbf v$ counts: $a_n = 6$ m/s². So $\rho = v^2/a_n = 16/6 = 2.67$ m. The 3 m/s² along $\mathbf v$ only changes the speed.
wrong: Use the normal component, not the total: $a_n = 6$ m/s² (perpendicular to $\mathbf v$), so $\rho = 16/6 = 2.67$ m. Dividing by the full $\sqrt{45} = 6.7$ m/s² gives the wrong 2.39 m.
:::

## Polar coordinates {lvl=4 id=s-polar label="Olympiad"}

Circular motion is the special case $r = R$ = constant of motion described by $(r, \theta)$. Planetary orbits, beads on rotating rods and spirals need the general case. Write $\mathbf r = r\hat{\mathbf r}$ and use the two unit-vector rules from the section on speeding up:

$$\mathbf v = \dot r\,\hat{\mathbf r} + r\dot\theta\,\hat{\boldsymbol\theta},$$

$$\mathbf a = \left(\ddot r - r\dot\theta^2\right)\hat{\mathbf r} + \left(r\ddot\theta + 2\dot r\dot\theta\right)\hat{\boldsymbol\theta}.$$

Read the terms one by one:
- $\ddot r$: speeding up along the radius, as on a straight line.
- $-r\dot\theta^2$: the centripetal term of this lesson.
- $r\ddot\theta$: the tangential term $\alpha R$.
- $2\dot r\dot\theta$: present only when $r$ and $\theta$ both change. Half of it comes from the radial velocity being turned, and half from the transverse speed $r\dot\theta$ growing because $r$ grows.

Here every term is measured in an inertial frame; nothing in this list is a pseudo force. The transverse part can be written

$$a_\theta = \frac{1}{r}\frac{d}{dt}\left(r^2\dot\theta\right),$$

so whenever the acceleration is purely radial, $r^2\dot\theta$ is constant. That is Kepler's second law in kinematic form; its dynamics comes later with gravitation.

:::worked title="An ant on a turntable spoke"
A turntable turns at a steady $\omega = 1.0$ rad/s, and an ant walks outward along a radial line at a steady 0.50 m/s relative to the turntable. Find the ant's acceleration (in the ground frame) when it is 1.0 m from the centre.

$\dot r = 0.50$ m/s, $\ddot r = 0$, $\dot\theta = 1.0$ rad/s, $\ddot\theta = 0$.

$a_r = 0 - 1.0\times1.0^2 = -1.0$ m/s² (toward the centre); $a_\theta = 2\times0.50\times1.0 = 1.0$ m/s² (sideways, in the sense of rotation).

$|\mathbf a| = \sqrt2 = 1.41$ m/s². Walking outward at a steady pace on a turning disc needs a sideways push from the surface, which is why it feels like being shoved sideways.
:::

:::qc
q: A particle moves outward along a straight rod with constant speed relative to the rod, while the rod turns with constant angular speed ω. At distance r from the axis, which acceleration components are non-zero?
options: ["radial −rω² and transverse 2ṙω", "only radial −rω²", "only transverse 2ṙω", "none: both speeds are constant"]
answer: 0
right: Right. With $\ddot r = \ddot\theta = 0$, the polar formulas leave $a_r = -r\omega^2$ and $a_\theta = 2\dot r\omega$.
wrong: Constant $\dot r$ and constant $\dot\theta$ do not mean zero acceleration. With $\ddot r = \ddot\theta = 0$ there remain $a_r = -r\omega^2$ and $a_\theta = 2\dot r\omega$.
:::

## Curvature on harder paths {lvl=4 id=s-hard label="Olympiad"}

The formula $\rho = v^2/a_n$ turns geometry problems into kinematics. Pick any convenient motion along the curve, find $\mathbf v$ and $\mathbf a$ at the point, and divide. The curvature belongs to the path, so the answer does not depend on which motion you pick.

**A point on a rolling wheel.** A wheel of radius $R$ rolls without slipping at a steady speed $v$, so $\omega = v/R$. Each rim point traces a cycloid. In the frame of the axle, a rim point does uniform circular motion. Since the axle moves at constant velocity, the acceleration of the rim point in the ground frame is the same: $v^2/R$ toward the axle. At the top the rim point moves at $2v$, horizontally, and its acceleration $v^2/R$ points straight down, perpendicular to the velocity. So

$$\rho_{\text{top}} = \frac{(2v)^2}{v^2/R} = 4R.$$

The cycloid is twice as flat at its top as a circle through the top point centred on the axle would suggest. At the bottom the point is momentarily at rest ($v = 0$), so $\rho = 0$: the cycloid has a cusp there.

**A helix.** A particle with $\mathbf r = (R\cos\omega t,\ R\sin\omega t,\ ut)$ has speed $\sqrt{\omega^2R^2 + u^2}$ and acceleration $\omega^2R$ toward the axis, which is perpendicular to the velocity. Hence

$$\rho = \frac{\omega^2R^2 + u^2}{\omega^2R} = R\left(1 + \frac{u^2}{\omega^2R^2}\right) > R.$$

A charged particle spiralling along a magnetic field follows such a helix. Its path is less curved than the circle of radius $R$ you see when you look down the axis.

**Frenet form.** In three dimensions the acceleration always lies in the plane of the osculating circle: $\mathbf a = \dot v\,\hat{\mathbf T} + (v^2/\rho)\,\hat{\mathbf N}$, with no component along the third direction $\hat{\mathbf T}\times\hat{\mathbf N}$. That direction changes only when the path twists out of its plane.

:::qc
q: A wheel of radius 0.30 m rolls without slipping at 2.0 m/s. What is the radius of curvature of the path of the topmost point of its rim?
options: ["1.2 m", "0.30 m", "0.60 m", "2.4 m"]
answer: 0
right: Right. $\rho_{\text{top}} = (2v)^2/(v^2/R) = 4R = 1.2$ m, whatever the speed.
wrong: The top point moves at $2v$ and its acceleration is $v^2/R$, perpendicular to its velocity. So $\rho = 4v^2/(v^2/R) = 4R = 1.2$ m. The wheel's radius is not the radius of curvature of the cycloid.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. In uniform circular motion the speed is constant but the velocity is not; the velocity is along the tangent. {lvl=1}
2. $v = 2\pi r/T$ for one lap of a circle in time $T$. {lvl=1}
3. Angles in radians: $s = R\theta$, $\omega = d\theta/dt = 2\pi/T = 2\pi\nu$, $v = \omega R$. {lvl=2}
4. Centripetal acceleration $a_c = v^2/R = \omega^2R = v\omega$, toward the centre; constant in size, not in direction. {lvl=2}
5. From $\mathbf r = R(\cos\omega t, \sin\omega t)$: $\mathbf a = -\omega^2\mathbf r$. Constant speed on any path means $\mathbf a\perp\mathbf v$. {lvl=2}
6. Non-uniform: $a_t = dv/dt = \alpha R$, $a_c = v^2/R$, $a = \sqrt{a_t^2 + a_c^2}$; the total points inside the circle but not at the centre. {lvl=3}
7. Constant $\alpha$: $\omega = \omega_0 + \alpha t$, $\theta = \omega_0t + \tfrac12\alpha t^2$, $\omega^2 = \omega_0^2 + 2\alpha\theta$. {lvl=3}
8. $\mathbf v = \boldsymbol\omega\times\mathbf r$, $\mathbf a = \boldsymbol\alpha\times\mathbf r + \boldsymbol\omega\times(\boldsymbol\omega\times\mathbf r)$. {lvl=3}
9. Any path: $\rho = v^2/a_n = |\mathbf v|^3/|\mathbf v\times\mathbf a|$; for $y(x)$, $\rho = (1+y'^2)^{3/2}/|y''|$. Projectile: $\rho = v^2/(g\cos\varphi)$. {lvl=3}
10. Polar: $a_r = \ddot r - r\dot\theta^2$, $a_\theta = r\ddot\theta + 2\dot r\dot\theta = \frac1r\frac{d}{dt}(r^2\dot\theta)$. Rolling wheel top: $\rho = 4R$; helix: $\rho = R(1 + u^2/\omega^2R^2)$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "Constant speed" does not mean "no acceleration"; on a curve the velocity is turning. {lvl=1}
- A released stone flies off along the tangent, not outward along the radius. {lvl=1}
- Convert rpm to rad/s with $2\pi/60$ and km/h to m/s with $1/3.6$ before using $a = \omega^2R$ or $v^2/R$. {lvl=2}
- On one rigid body all points share $\omega$, so use $a = \omega^2R$ (grows with $R$); for equal speeds use $v^2/R$ (falls with $R$). {lvl=2}
- Do not use $v = u + at$ for the motion round a circle: the centripetal acceleration changes direction. Use the angular equations for $\theta$ instead. {lvl=2}
- The total acceleration points to the centre only if the speed is constant. $a_t$ is the rate of change of speed, not $|d\mathbf v/dt|$. {lvl=3}
- Average acceleration over part of a turn is $|\Delta\mathbf v|/\Delta t$, smaller than $v^2/R$; over a full turn it is zero. {lvl=3}
- For the radius of curvature divide by the normal component $a_n$, never by the full acceleration. {lvl=3}
- The centripetal term $\boldsymbol\omega\times(\boldsymbol\omega\times\mathbf r)$ points at the axis, not at the origin on the axis. {lvl=3}
- Forces (what provides $ma_c$, banking, vertical circles) belong to Dynamics of circular motion; kinematics only gives the acceleration that must be produced. {lvl=2}
:::
