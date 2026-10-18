---
title: Rolling motion
summary: Why the top of a wheel moves twice as fast as its centre, and who wins a race down a slope.
ncert: ["Class 11 Physics · Ch 6 System of Particles and Rotational Motion (introduction only: the 2026-27 reprint mentions rolling there and has no rolling section or exercise)"]
up_to: Olympiad
builds_on: [Moment of inertia, Circular motion, Work-energy theorem, Friction]
notes_prompt: Explain to a ten-year-old why a car's tyre is not moving at the exact spot where it touches the road, even though the car is going at 60 km/h.
margin:
  - kind: history
    title: History
    text: "Galileo rolled bronze balls down grooved slopes in the 1600s to slow falling enough to time it. Rolling is slower than free fall because part of the energy goes into spin, an effect he did not know about; it is the subject of this lesson [Unverified date]."
  - kind: tip
    title: Exam favourite
    text: "For any body that rolls without slipping, kinetic energy is $\\tfrac12 mv^2(1+k)$, where $k = I/mR^2$. Memorise k: ring 1, disc 1/2, solid sphere 2/5, hollow sphere 2/3."
  - kind: olympiad
    title: Olympiad link
    text: "Take angular momentum about the point of the floor where a sliding ball touches it. Friction acts along that line, so it has no torque about the point, and a messy slide-to-roll problem becomes one line of algebra."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 11 Rolling, Torque and Angular Momentum, §11-1 to §11-3 [Unverified]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 18 Rotation in Two Dimensions and Ch. 19 Centre of Mass; Moment of Inertia [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 10 Rotational Mechanics, rolling section [Unverified]" }
cards:
  - { front: "What is the no-slip rolling condition?", back: "The contact point is momentarily at rest, so $v_{cm} = \\omega R$." }
  - { front: "How fast does the top of a rolling wheel move, relative to the road?", back: "Twice the speed of the centre: $2v_{cm}$. The bottom point has speed zero." }
  - { front: "Total kinetic energy of a rolling body?", back: "$K = \\tfrac12 mv_{cm}^2 + \\tfrac12 I\\omega^2 = \\tfrac12 mv_{cm}^2(1+k)$ with $I = kmR^2$." }
  - { front: "Speed at the bottom of a slope of height h for a body rolling from rest?", back: "$v = \\sqrt{2gh/(1+k)}$: independent of mass and radius, smaller for larger k. Solid sphere beats disc beats ring." }
  - { front: "Acceleration down an incline of angle θ without slipping?", back: "$a = g\\sin\\theta/(1+k)$, with friction $f = kmg\\sin\\theta/(1+k)$ acting up the slope." }
  - { front: "Does static friction do work on a rolling wheel?", back: "No. Its point of application is at rest, so no energy is lost. Skidding (kinetic friction) is what wastes energy." }
core:
  idea: 'A rolling wheel does two things at once: its centre moves forward and the wheel spins about the centre. Rolling without slipping ties the two together, so the contact point is at rest and the centre moves at the spin speed times the radius.'
  formulas:
    - tex: 'v_{cm} = \omega R'
      label: 'No-slip rolling condition'
    - tex: 'K = \tfrac12 m v_{cm}^2 + \tfrac12 I \omega^2 = \tfrac12 m v_{cm}^2 (1+k)'
      label: 'Kinetic energy of rolling, I = kmR²'
    - tex: 'a = \dfrac{g\sin\theta}{1+k}'
      label: 'Acceleration down a rough incline'
  conditions:
    - 'Rigid body that does not slip: the contact point is at rest relative to the surface'
    - 'Rolling friction (the slight squashing of tyre and road) is ignored'
    - 'The body is symmetric about its axle, so its centre of mass is at the centre'
    - 'The surface is rough enough to supply the friction needed (friction needed is at most μN)'
  sign: 'Friction on a body rolling down a slope points up the slope, and it does no work. Do not subtract it from the energy.'
outcomes:
  - 'Describe the velocity of any point of a rolling wheel as spin plus slide'
  - 'Find the speed of the top, the bottom and the side points of a rolling wheel'
  - 'Write the kinetic energy of a rolling body and the fraction that is spin'
  - 'Predict the winner of a race down a slope among ring, disc and sphere, and find its acceleration'
  - 'Find the friction needed for rolling, and the final speed when a sliding ball settles into a roll'
opener:
  story: |
    Picture a car doing 60 km/h on a straight road. Now stick a tiny red dot on the tyre, at the very bottom, right where rubber meets tarmac. For that instant, **how fast is the red dot moving, as seen from the road?**

    You might say 60 km/h, since the car is. But think about what a tyre does: the bottom of it is pressed flat against the road, and it is not dragging along the surface. If it were, the road would be rubbing the rubber away like a pencil eraser.

    The red dot is standing still, for an instant. And the dot at the very top of the tyre? It races at 120 km/h, twice the speed of the car. Same wheel, same moment. Let's find out why.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A rolling wheel: the centre moves at v, the top at 2v, and the contact point at rest"><path d="M10 185 L310 185" style="fill:none;stroke:var(--muted);stroke-width:2"/><circle cx="150" cy="125" r="60" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:3"/><path d="M150 125 L150 65 M150 125 L202 155 M150 125 L98 155" style="fill:none;stroke:var(--c);stroke-width:1.5"/><circle cx="150" cy="125" r="5" style="fill:var(--ink)"/><path d="M150 62 L268 62" style="fill:none;stroke:var(--chem);stroke-width:3"/><path d="M268 62 L257 56 L257 68Z" style="fill:var(--chem)"/><path d="M155 125 L212 125" style="fill:none;stroke:var(--chem);stroke-width:3"/><path d="M212 125 L201 119 L201 131Z" style="fill:var(--chem)"/><circle cx="150" cy="185" r="6" style="fill:var(--ink)"/><text x="196" y="50" style="font-size:12px;fill:var(--muted)">top: 2v</text><text x="214" y="142" style="font-size:12px;fill:var(--muted)">centre: v</text><text x="164" y="206" style="font-size:12px;fill:var(--muted)">bottom: 0 (at rest!)</text></svg>'
life:
  - 'A car tyre at 60 km/h: the patch touching the road is at rest, so a tyre that rolls does not wear the way a skidding one does. Hard braking that locks the wheels leaves black skid marks because now the rubber really slides.'
  - 'Indian Railways wheels are not cylinders but slightly coned. On a curve the outer wheel rides on a larger radius than the inner one, so it covers more ground in one turn, and the wheelset steers itself round the bend without scraping [Unverified detail].'
  - 'Cricket and carrom: a ball that skids onto the pitch behaves differently from one that already rolls; a dry outfield makes the ball roll and slow gently, because rolling wastes very little energy.'
  - 'Pulling out the spool of thread, a yo-yo, or a toilet-paper roll rolling down a ramp: all are wheels whose axle is not the same size as their rim.'
  - 'Ball bearings in fan motors and cycle hubs replace sliding with rolling, because rolling needs far less force than dragging.'
models:
  - name: 'Two jobs, added together'
    text: 'A complicated motion is often a simple motion plus another simple one. A wheel is a slide plus a spin; a swimmer in a river is the swimmer plus the river. Split the job, solve each part, add.'
  - name: 'The point that is standing still'
    text: 'Look for the one part of a moving system that is momentarily frozen; measuring from it can make everything simple. Like a rowing boat: whatever the oar does, the water at the blade is the fixed point you push against.'
  - name: 'Where the effort goes'
    text: 'Energy shared between two uses is a budget. A ring puts half its energy into spinning; a solid sphere puts under a third. Whoever wastes less on spinning wins the race. Ask where a budget leaks.'
links:
  - leaf: 'phy/moment-of-inertia'
    name: 'Moment of inertia'
    same: 'Spin energy $\tfrac12 I\omega^2$ is the twin of $\tfrac12 mv^2$, and $I = kmR^2$ says how much of the mass sits far from the axis. That single number $k$ decides every race in this lesson.'
    differs: 'Mass is one number that does not care where the push is applied. $I$ depends on the axis you choose, which is why rolling can be viewed as a spin about the centre or about the contact point.'
  - leaf: 'phy/friction'
    name: 'Friction'
    same: 'Rolling needs static friction, with the same limit $f \leq \mu N$.'
    differs: 'Here friction does no work and loses no energy: its job is only to supply the torque that spins the wheel up, so the usual "friction wastes energy" rule fails.'
next:
  q: 'A skater spinning on ice pulls in her arms and whirls faster, though nobody touched her. And a spinning bicycle wheel resists being tilted. Is there a "momentum for spinning" that is conserved?'
  leaf: 'phy/angular-momentum'
  name: 'Angular momentum'
symbols:
  - s: 'v_{cm}'
    means: 'speed of the centre of the wheel (m/s)'
  - s: '\omega'
    means: 'angular speed, how fast the wheel spins (radians per second, rad/s)'
  - s: 'R'
    means: 'radius of the wheel or ball (m)'
  - s: 'I'
    means: 'moment of inertia about the axle, how hard the body is to spin (kg m²)'
  - s: 'k'
    means: 'shape number, I divided by mR² (no unit): ring 1, disc 1/2, solid sphere 2/5'
  - s: 'K'
    means: 'total kinetic energy (joules, J)'
  - s: 'f'
    means: 'force of static friction at the contact point (N)'
  - s: '\mu'
    means: 'coefficient of static friction between body and surface (no unit)'
  - s: '\theta'
    means: 'angle of the incline (degrees)'
---

:::hook
q: A wheel rolls along the road without slipping. How fast does its very top move, compared with its centre?
options: ["The same speed", "Twice as fast", "Half as fast"]
answer: 1
right: Right. The top is carried forward by the whole wheel moving along, and also swung forward by the spin. Both add up to double. The bottom has the same two parts, but the spin swings it backward by exactly the amount the wheel moves forward, so it is at rest.
wrong: Think of the two jobs the wheel is doing at once. The whole wheel slides forward, and it also spins. At the top, which way does the spin carry the rubber? And at the bottom?
:::

## Slide plus spin {lvl=1 id=s-slide label="Class 9"}

Roll a coin along a table and watch one point of its edge. It does not go straight; it traces a looping curve called a **cycloid**, rising, peaking and landing again. Yet the whole coin moves in a straight line. The trick is to see the motion as two simple ones added together.

Job one is the **slide**: the entire wheel moves forward at some speed, call it $v$. Every point of the wheel, top, bottom and middle, gets this same forward velocity. Job two is the **spin**: the wheel turns about its centre. A point on the rim then moves at the **spin speed** $\omega R$, tangent to the rim, where $\omega$ ("omega") is how many radians the wheel turns each second and $R$ is the radius.

At the top the spin points forward. At the bottom it points backward. Rolling **without slipping** means the wheel does not skid over the road, which says the bottom point is not moving relative to the road. So the backward spin at the bottom must exactly cancel the forward slide:

$$v = \omega R.$$

Read it as: "the speed of the centre equals the spin speed of the rim." Try numbers. A wheel of radius 0.40 m whose centre moves at 6 m/s must spin at $6/0.40 = 15$ rad/s. Then the top point moves at $6 + 6 = 12$ m/s, the bottom at $6 - 6 = 0$.

:::figure caption="Rolling is slide plus spin. Sliding gives every point the same arrow. Spinning gives the top an arrow forward and the bottom an arrow backward. Added together, the top moves at 2v and the bottom stays at rest."
<svg viewBox="0 0 330 130" role="img" aria-label="Three wheels: slide gives equal arrows, spin gives opposite arrows at top and bottom, the sum gives double at the top and zero at the bottom">
<path d="M10 118 L320 118" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
<circle cx="52" cy="68" r="28" style="fill:none;stroke:var(--c);stroke-width:2"/>
<path d="M52 36 L82 36 M52 68 L82 68 M52 96 L82 96" style="fill:none;stroke:var(--chem);stroke-width:2.5"/>
<path d="M82 36 L76 33 L76 39Z M82 68 L76 65 L76 71Z M82 96 L76 93 L76 99Z" style="fill:var(--chem)"/>
<text x="20" y="14" style="font-size:11px;fill:var(--muted)">slide</text>
<text x="100" y="72" style="font-size:18px;fill:var(--ink)">+</text>
<circle cx="165" cy="68" r="28" style="fill:none;stroke:var(--c);stroke-width:2"/>
<path d="M165 36 L195 36 M165 96 L135 96" style="fill:none;stroke:var(--chem);stroke-width:2.5"/>
<path d="M195 36 L189 33 L189 39Z M135 96 L141 93 L141 99Z" style="fill:var(--chem)"/>
<text x="140" y="14" style="font-size:11px;fill:var(--muted)">spin</text>
<text x="212" y="72" style="font-size:18px;fill:var(--ink)">=</text>
<circle cx="275" cy="68" r="28" style="fill:none;stroke:var(--c);stroke-width:2"/>
<path d="M275 36 L325 36 M275 68 L300 68" style="fill:none;stroke:var(--chem);stroke-width:2.5"/>
<path d="M325 36 L319 33 L319 39Z M300 68 L294 65 L294 71Z" style="fill:var(--chem)"/>
<circle cx="275" cy="96" r="3.5" style="fill:var(--ink)"/>
<text x="250" y="14" style="font-size:11px;fill:var(--muted)">roll</text>
</svg>
:::

:::qc lvl=1
q: A bicycle wheel rolls without slipping with its centre moving at 5 m/s. What is the speed, relative to the road, of the lowest point of the tyre?
options: ["0 m/s", "5 m/s", "10 m/s"]
answer: 0
right: Right. That is what "without slipping" means: the point touching the road is at rest at that instant, which is also why static friction, not kinetic friction, acts there.
wrong: The backward spin of the rim at the bottom is $\omega R = 5$ m/s, and the forward slide is also 5 m/s. What do they add up to?
:::

## Turning about the contact point {lvl=2 id=s-contact label="Class 11"}

Here is a neater way to see the same thing. At each instant the bottom point is at rest. A body in which one point is at rest and everything else moves is **turning about that point**: the speed of any other point is its distance from it, times $\omega$. The contact point is the pivot of the moment.

Check with the top: its distance from the contact point is the diameter $2R$, so its speed is $\omega \cdot 2R = 2v$. The centre is at distance $R$, speed $\omega R = v$. Both agree with slide plus spin. Now a new one: the point at the same height as the centre, at the side of the wheel. It is $\sqrt{R^2 + R^2} = \sqrt2 R$ from the contact point, so it moves at $\sqrt2\,v$, in a direction at right angles to the line joining it to the contact point, which is 45° above the road.

:::worked title="A point at an angle"
A rim point whose radius makes angle $\phi$ with the vertical (measured from the top) is at distance $2R\cos(\phi/2)$ from the contact point, so its speed is $2v\cos(\phi/2)$. At the top $\phi = 0$ gives $2v$. At the contact point $\phi = 180°$ gives zero. At $\phi = 90°$ it gives $2v\cos45° = \sqrt2\,v$, matching the side point above.
:::

This "pivot about the contact point" view is only valid for velocities at this instant. The pivot jumps along the road as the wheel rolls, so it is not a fixed axis; the JEE section shows when it is still safe to take torques about it.

## Two kinds of energy {lvl=2 id=s-energy label="Class 11"}

A rolling wheel moves forward, so it has the usual **translation energy** $\tfrac12 mv^2$. It also spins, so it has **spin energy** $\tfrac12 I\omega^2$, where $I$ is its moment of inertia about the axle. The two just add:

$$K = \tfrac12 m v_{cm}^2 + \tfrac12 I\omega^2.$$

Read it as: "the energy of the centre's motion plus the energy of spinning about the centre." Write $I = kmR^2$, where the shape number $k$ says how far out the mass sits (ring $k = 1$, solid disc or cylinder $\tfrac12$, solid sphere $\tfrac25$, thin hollow sphere $\tfrac23$). With $\omega = v/R$ the spin energy becomes $\tfrac12 kmR^2 (v/R)^2 = \tfrac12 kmv^2$, so

$$K = \tfrac12 m v^2\,(1 + k).$$

Try a 2 kg solid cylinder rolling at 4 m/s. Translation: $\tfrac12 \cdot 2 \cdot 16 = 16$ J. Spin: half as much again, since $k = \tfrac12$, so 8 J. Total 24 J. The share that is spin is $k/(1+k)$: a ring puts $\tfrac12$ of its energy into spin, a disc $\tfrac13$, a hollow sphere $\tfrac25$, a solid sphere $\tfrac27$ (about 29%).

:::qc lvl=2
q: A solid sphere rolls without slipping. What fraction of its kinetic energy is rotational?
options: ["2/7", "2/5", "1/2"]
answer: 0
right: Right. With $k = 2/5$ the rotational share is $k/(1+k) = (2/5)/(7/5) = 2/7$.
wrong: The share is $k/(1+k)$, where $k = 2/5$ for a solid sphere. Compute $(2/5) \div (7/5)$.
:::

## A race down a slope {lvl=2 id=s-race label="Class 11"}

Release a ring, a solid disc and a solid ball from the top of a slope of height $h$, all rolling without slipping. Energy is conserved, because the friction at the contact point does no work (its point of action is at rest). What the body loses in height, it gains in kinetic energy:

$$mgh = \tfrac12 m v^2 (1 + k)\ \Longrightarrow\ v = \sqrt{\frac{2gh}{1+k}}.$$

Read it as: "the speed at the bottom is what a sliding block would have, shrunk by the factor $1/\sqrt{1+k}$ because some of the energy went into spin." The mass and the radius have cancelled. A solid cylinder from 1.5 m up has $v = \sqrt{2 \times 9.8 \times 1.5/1.5} = 4.43$ m/s, while a frictionless block would arrive at 5.42 m/s.

So the winner is the one with the smallest $k$: **solid sphere ($k = 0.4$), then solid disc (0.5), then hollow sphere (0.67), then ring (1)**. A heavy, small, or wide one makes no difference; a hollow can of soup loses to a full one. This is a neat party trick to test whether a can is full: roll it and watch.

:::figure caption="Same start, same height. The solid ball spends the least energy on spinning and leads; the ring spends the most and trails. A sliding block, with no spin at all, would beat all of them."
<svg viewBox="0 0 320 200" role="img" aria-label="Three bodies rolling down a slope: solid ball ahead, then disc, then ring">
<path d="M20 50 L300 170 L20 170Z" style="fill:color-mix(in srgb,var(--muted) 14%,var(--surface));stroke:var(--muted);stroke-width:2"/>
<circle cx="199" cy="111.5" r="14" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--c);stroke-width:2"/>
<circle cx="165.5" cy="97.1" r="14" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/>
<circle cx="143.1" cy="87.5" r="14" style="fill:none;stroke:var(--c);stroke-width:3"/>
<circle cx="143.1" cy="87.5" r="9" style="fill:none;stroke:var(--surface);stroke-width:2"/>
<text x="208" y="96" style="font-size:11px;fill:var(--ink)">solid ball</text>
<text x="176" y="80" style="font-size:11px;fill:var(--ink)">disc</text>
<text x="126" y="68" style="font-size:11px;fill:var(--ink)">ring</text>
<text x="30" y="188" style="font-size:11px;fill:var(--muted)">winner has the smallest k</text>
</svg>
:::

:::qc lvl=2
q: A hollow ball and a solid ball of the same mass and radius roll from rest down the same slope. Which reaches the bottom first?
options: ["The hollow one", "The solid one", "They tie"]
answer: 1
right: Right. The hollow ball has more of its mass far from the axis ($k = 2/3$ against $2/5$), so more of its energy goes into spinning and it has less left over to go forward.
wrong: Their masses and radii are the same, but not their moments of inertia. Which ball has more mass far from the axis, and so a larger share of energy tied up in spin?
:::

## Who pushes the wheel? {lvl=3 id=s-friction label="JEE"}

Energy told us the speed but not the force. Let us find the acceleration and the friction needed. Take an incline of angle $\theta$. Along the slope, gravity pulls down with $mg\sin\theta$ and friction $f$ pulls up the slope (it must, to make the spin build up). So

$$mg\sin\theta - f = ma.$$

Friction acts at the rim, a distance $R$ from the centre, and it is the only force with a torque about the centre: gravity acts at the centre itself, and the normal force at the rim points straight at the centre. So $fR = I\alpha$, and rolling without slipping says $\alpha = a/R$. That gives $f = I a/R^2 = kma$. Put it in:

$$a = \frac{g\sin\theta}{1+k},\qquad f = \frac{k}{1+k}\,mg\sin\theta.$$

Read it as: "the slope's pull is shared out between moving the centre and spinning up the wheel, in the ratio 1 to $k$." For a solid sphere on a 30° slope, $a = 9.8 \times 0.5/1.4 = 3.5$ m/s² and $f = \tfrac{1}{7}\,mg$. The wheel will roll only if this friction can be supplied, that is if $f \le \mu_s N = \mu_s mg\cos\theta$:

$$\mu_s \ge \frac{k}{1+k}\tan\theta.$$

Read it as: "the steeper the slope, the stickier the surface must be." For a solid cylinder on a 30° slope, $\mu_s \ge \tfrac13\tan30° = 0.19$. On ice, with $\mu_s$ near zero, everything just slides, and the time ratio works too: since $a$ is constant, $t \propto 1/\sqrt{a} \propto \sqrt{1+k}$, so a ring takes $\sqrt{2/1.4} = 1.195$ times as long as a solid sphere.

:::note title="The shortcut: torque about the contact point" tone=tip
Gravity's torque about the contact point is $mgR\sin\theta$: its line of action is the vertical through the centre, which is a horizontal distance $R\sin\theta$ from the contact point. The moment of inertia about that point is $I + mR^2 = (1+k)mR^2$ by the parallel-axis theorem. So $\alpha = \dfrac{mgR\sin\theta}{(1+k)mR^2}$ and $a = \alpha R = \dfrac{g\sin\theta}{1+k}$: the same answer in two lines, with no friction in it. It works for a rolling body whose centre moves parallel to the surface, because the contact point then accelerates only towards the centre, which does not spoil $\tau = I\alpha$ about it. [Inference: that condition is the usual textbook justification, quoted from memory.]
:::

:::qc lvl=3
q: A uniform solid cylinder rolls down a slope. Friction does work on it, because it opposes the motion. True or false?
options: ["True", "False"]
answer: 1
right: Right, false. The point of the cylinder touching the slope is at rest, so the friction force acts on a point that does not move and does zero work. Its role is to give the torque, and it takes no energy from the system.
wrong: Work is force times the distance the point of application moves. How far does the contact point move relative to the slope?
:::

## Slide first, roll later {lvl=3 id=s-slide-roll label="JEE"}

Throw a bowling ball along the lane so that it slides at 7.0 m/s with no spin. At first the bottom of the ball moves relative to the lane, so **kinetic friction** acts backwards: it slows the centre and, because it acts at the bottom, spins the ball up. This continues until the bottom stops sliding, $v = \omega R$, after which friction vanishes and the ball rolls on at constant speed.

To find the final speed, avoid the friction altogether. Take angular momentum about a point on the lane directly under the centre. Friction acts along the lane, so its line passes through that point and it has no torque; gravity and the normal force cancel. So angular momentum about that point is conserved. At the start it is $mv_0R$ (a mass moving along a line at distance $R$). At the end, translation gives $mvR$, plus spin $I\omega = kmR^2 \cdot v/R = kmRv$:

$$mv_0R = mvR\,(1+k)\ \Longrightarrow\ v = \frac{v_0}{1+k}.$$

Read it as: "the final speed is the starting speed shared out with the spin." For the solid sphere, $v = 7.0/1.4 = 5.0$ m/s. Energy has not been conserved: the initial $\tfrac12 mv_0^2$ becomes $\tfrac12 mv^2 (1+k)$ afterwards, which is the fraction $1/(1+k)$ of it, so $k/(1+k) = \tfrac27$ of the energy is lost as heat on the lane, wasted by kinetic friction while the contact point slid.

:::qc lvl=3
q: A solid ball slides at 7 m/s and finally rolls. Which quantity is conserved while friction acts?
options: ["Linear momentum", "Kinetic energy", "Angular momentum about a point on the floor under the centre"]
answer: 2
right: Right. Friction pushes the centre backwards, so linear momentum changes, and it dissipates energy. But it acts along the floor and has no torque about a point on the floor, so that angular momentum survives.
wrong: Friction is the only horizontal force, and it changes the momentum and wastes energy. Which quantity does it leave alone, because its line of action passes through the point you chose?
:::

## The cue's sweet spot {lvl=4 id=s-cue label="Olympiad"}

A billiard ball (uniform solid sphere, radius $R$) lies on a table. A cue gives it a horizontal impulse $J$ along a line in the vertical plane through its centre, at height $h$ above the centre. How high must $h$ be so that the ball starts rolling without slipping at once, with no skidding at all?

The impulse gives the centre a speed $v = J/m$. Its torque about the centre gives a spin: $Jh = I\omega = \tfrac25 mR^2\omega$. Rolling at once means $v = \omega R$. Substitute $\omega = v/R = J/(mR)$ in the torque equation: $Jh = \tfrac25 mR^2 \cdot J/(mR) = \tfrac25 JR$, so

$$h = \tfrac25 R.$$

Read it as: "strike a little above centre, at two fifths of the radius." For a ball of radius 2.8 cm that is 1.1 cm above the centre. Hit lower and the ball starts with too little spin, so it skids forward until the cloth spins it up. Hit higher and it starts with too much spin, so the cloth drags it back. Players use the low strike on purpose: it gives backspin and the "draw" shot.

**Pulling a spool.** A spool of outer radius $R$ with an axle of radius $r$ has a string leaving the bottom of the axle. You pull the string at angle $\theta$ above the horizontal on a rough table. The torque about the contact point is the force times the perpendicular distance from the contact point to the string, which works out as $F(R\cos\theta - r)$. So the spool rolls towards you if $\cos\theta > r/R$, rolls away if $\cos\theta < r/R$, and stays put if $\cos\theta = r/R$. The string's line passes straight through the contact point, so there is no torque about it and nothing to turn the spool.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Rolling is slide plus spin; without slipping, the contact point is at rest and $v_{cm} = \omega R$. {lvl=1}
2. The top of a rolling wheel moves at $2v_{cm}$, the bottom at 0, and the side at $\sqrt2\,v_{cm}$. {lvl=1}
3. $K = \tfrac12mv^2(1+k)$ where $I = kmR^2$; the spin share of the energy is $k/(1+k)$. {lvl=2}
4. Down a slope, $v = \sqrt{2gh/(1+k)}$ and $a = g\sin\theta/(1+k)$: smaller $k$ wins; mass and radius do not matter. {lvl=2}
5. Rolling needs friction $f = \tfrac{k}{1+k}mg\sin\theta$ up the slope, so $\mu_s \ge \tfrac{k}{1+k}\tan\theta$; this friction does no work. {lvl=3}
6. A sliding ball becomes rolling with $v = v_0/(1+k)$ by angular momentum about a point on the floor; $\tfrac{k}{1+k}$ of the energy is lost. {lvl=3}
7. A cue at height $\tfrac25R$ above the centre starts a billiard ball rolling at once. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- $v = \omega R$ holds only when the wheel does not slip. A skidding or spinning-in-place wheel breaks it. {lvl=1}
- The top point moves at $2v$ relative to the road but at $v$ relative to the centre. State what the speed is relative to. {lvl=1}
- Do not add the translation energy to the rolling energy twice: $K = \tfrac12mv^2(1+k)$ is already the total. {lvl=2}
- Static friction on a rolling body does no work and loses no energy; kinetic friction on a sliding contact does. {lvl=2}
- Which axis? For a rolling body use $I_{cm}$ with the centre's motion, or $I_{cm} + mR^2$ about the contact point, never a mixture. {lvl=3}
- Down a slope, friction acts up the slope. It does not slow the centre by dissipating energy; it only shares the push with the spin. {lvl=3}
:::
