---
title: Projectile motion
summary: 'Why a ball thrown sideways and a ball dropped land together, and why every thrown thing flies in the same graceful curve.'
ncert: ["Class 11 Physics · Ch 3 Motion in a Plane (§3.8 Motion in a plane with constant acceleration, §3.9 Projectile motion)"]
up_to: Olympiad
builds_on: [Vectors in motion, Motion graphs, Equations of motion, Trigonometric ratios]
notes_prompt: Explain to a friend why a bullet fired horizontally and a bullet dropped from the same height reach the ground at the same moment, and why the path of a thrown ball is a parabola.
margin:
  - kind: history
    title: History
    text: "Galileo showed in his Two New Sciences (1638) that a thrown object follows a parabola, by combining a steady sideways motion with a falling motion that speeds up. Before that, many thinkers believed a cannonball flew straight, then dropped straight down [Unverified details]."
  - kind: tip
    title: Exam habit
    text: "Split the launch velocity first: u cos θ goes sideways and never changes, u sin θ goes up and is cut by g every second. Then solve two easy problems, joined by the same time t."
  - kind: olympiad
    title: Olympiad link
    text: "Switch to a frame that falls freely with the projectile and gravity disappears: everything moves in straight lines. That one move solves the monkey-and-hunter problem and many collision problems at a glance."
books:
  - { title: "NCERT Physics Class XI Part 1", ref: "Ch 3 Motion in a Plane, §3.8–3.9" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 9 The Newtonian Laws of Dynamics [Unverified: discusses independence of horizontal and vertical motion]" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "chapter Motion in Two and Three Dimensions, projectile motion [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 3 Rest and Motion: Kinematics, projectile motion [Unverified chapter number]" }
cards:
  - { front: "Why do a dropped ball and a ball thrown sideways from the same height land together?", back: "Gravity acts only downwards, so the sideways motion does not affect the fall. Both have zero starting vertical speed, so the vertical motion is identical." }
  - { front: "Time of flight, maximum height and range for launch speed u at angle θ (level ground)?", back: "$T = \\dfrac{2u\\sin\\theta}{g}$, $H = \\dfrac{u^2\\sin^2\\theta}{2g}$, $R = \\dfrac{u^2\\sin2\\theta}{g}$." }
  - { front: "Equation of the path of a projectile?", back: "$y = x\\tan\\theta - \\dfrac{g\\,x^2}{2u^2\\cos^2\\theta}$: a parabola." }
  - { front: "Velocity and acceleration at the highest point?", back: "Velocity is purely horizontal, $u\\cos\\theta$, and this is the minimum speed. The acceleration is still $g$ downwards." }
  - { front: "Which two launch angles give the same range?", back: "$\\theta$ and $90^\\circ - \\theta$. The maximum range $u^2/g$ is at $45^\\circ$." }
  - { front: "Relation between H and R?", back: "$H = \\dfrac{R\\tan\\theta}{4}$; at $45^\\circ$ this says $R = 4H$." }
core:
  idea: 'A projectile feels only gravity, straight down. So its sideways velocity never changes, while its up-and-down motion is ordinary free fall, and the two motions share only the clock. The path is a parabola.'
  formulas:
    - tex: 'x = (u\cos\theta)\,t,\qquad y = (u\sin\theta)\,t - \tfrac12 g t^2'
      label: 'Position at time t (launch from the origin)'
    - tex: 'T = \dfrac{2u\sin\theta}{g},\quad H = \dfrac{u^2\sin^2\theta}{2g},\quad R = \dfrac{u^2\sin2\theta}{g}'
      label: 'Time of flight, maximum height, range (level ground)'
    - tex: 'y = x\tan\theta - \dfrac{g\,x^2}{2u^2\cos^2\theta}'
      label: 'Equation of the path'
  conditions:
    - 'Only gravity acts: no air resistance, no wind, no spin effects'
    - 'g is constant (heights tiny compared with the radius of the Earth) and points straight down'
    - 'The T, H and R formulas assume the landing level equals the launch level'
  sign: 'Take up as positive, so the vertical acceleration is −g. At the top the vertical velocity is zero, but the acceleration is still g and the speed is not zero.'
outcomes:
  - 'Explain why horizontal and vertical motions are independent, and use it to find where a ball thrown sideways lands'
  - 'Resolve a launch velocity and find time of flight, greatest height and range'
  - 'Show that the path is a parabola, and find speed and direction at any moment'
  - 'Use complementary angles, maximum range and launches from a height'
  - 'Solve problems with the free-fall frame, an inclined plane and the safety parabola'
opener:
  story: |
    Two children stand at the edge of a terrace. One just opens her fingers and a marble drops. At exactly the same instant, the other flicks an identical marble off the edge, sideways and hard, so that it sails out across the lane.

    Which marble reaches the ground first? Your gut says the dropped one: it only has to fall, while the flicked one has to fall *and* travel sideways. That feels like extra work.

    Now the surprising part. A hunter's rifle fires a bullet horizontally at the very instant a second bullet is dropped from the muzzle. The two bullets hit the ground **together**, even though one flies hundreds of metres sideways first. Nature, it seems, keeps a separate set of books for sideways and downwards.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two marbles leave a terrace edge together: one drops straight, one flies sideways, and they are always at the same height"><rect x="10" y="40" width="40" height="190" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--muted)"/><line x1="10" y1="215" x2="310" y2="215" style="stroke:var(--ink);stroke-width:1.6"/><path d="M60 40 Q150 40 250 215" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:4 4"/><g style="stroke:var(--muted);stroke-dasharray:2 4"><line x1="60" y1="51" x2="110" y2="51"/><line x1="60" y1="84" x2="152" y2="84"/><line x1="60" y1="138" x2="200" y2="138"/></g><g style="fill:var(--chem)"><circle cx="60" cy="40" r="5"/><circle cx="60" cy="51" r="5"/><circle cx="60" cy="84" r="5"/><circle cx="60" cy="138" r="5"/><circle cx="60" cy="210" r="5"/></g><g style="fill:var(--c)"><circle cx="110" cy="51" r="5"/><circle cx="152" cy="84" r="5"/><circle cx="200" cy="138" r="5"/><circle cx="250" cy="210" r="5"/></g><text x="72" y="30" style="font-size:11px;fill:var(--muted)">start together</text><text x="68" y="190" style="font-size:11px;fill:var(--chem)">dropped</text><text x="196" y="100" style="font-size:11px;fill:var(--c)">thrown sideways</text><text x="100" y="232" style="font-size:11px;fill:var(--muted)">same height at every tick</text></svg>'
symbols:
  - s: 'u'
    means: 'launch speed: how fast the object leaves your hand (m/s)'
  - s: '\theta'
    means: 'launch angle above the horizontal (degrees)'
  - s: 'u\cos\theta,\ u\sin\theta'
    means: 'the sideways and the upward parts of the launch velocity (m/s)'
  - s: 'g'
    means: 'acceleration of free fall, about 9.8 m/s² downwards (we use 10 for easy sums)'
  - s: 't'
    means: 'time since launch (seconds, s)'
  - s: 'x,\ y'
    means: 'horizontal position and height above the launch point (m)'
  - s: 'T'
    means: 'time of flight: launch to landing on level ground (s)'
  - s: 'H'
    means: 'maximum height above the launch point (m)'
  - s: 'R'
    means: 'range: horizontal distance from launch to landing on level ground (m)'
life:
  - 'A cricket ball hit for six, a basketball shot, a javelin and a long jumper all follow the same parabola; the best angle and speed are projectile physics.'
  - 'A stream of water from a garden hose or a fountain traces a perfect parabola, because each drop is its own tiny projectile.'
  - 'A relief aircraft dropping food packets must release them well before the target: the packet keeps the plane''s sideways speed while it falls.'
  - 'Camera drones and goalkeepers read the arc of a ball in a split second, and the arc is nothing but sideways motion plus a steady fall.'
  - 'Sparks from a grinding wheel or a firework cracker spray in parabolas, which together fill a curved dome.'
models:
  - name: 'Independent channels'
    text: 'When two effects do not interfere, handle each alone and join them with the shared clock. A business can do the same: sales growth and cost control run separately, and the same calendar ties them together.'
  - name: 'Momentum carries on until something acts'
    text: 'The sideways speed never changes because nothing pushes sideways. Habits, trends and markets keep their velocity too, until a force acts on them.'
  - name: 'Look from the falling frame'
    text: 'Change your point of view until the hard part disappears. In a frame falling with the ball, gravity vanishes. Good negotiators and engineers also ask which point of view makes the problem simple.'
links:
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'Newton''s cannon is a projectile launched so fast that the ground curves away beneath it. A parabola is the short-range look of an orbit.'
    differs: 'Projectile motion assumes the same g everywhere and a flat ground; over thousands of kilometres g points to the centre and weakens, and the path is an ellipse.'
  - leaf: 'phy/electric-field'
    name: 'Electric field'
    same: 'An electron shot between two charged plates feels a steady sideways-to-its-motion force, so it follows the same parabola, with the same independent x and y motions.'
    differs: 'The push on a charge depends on its charge and mass, so different particles curve differently; gravity gives every mass the same acceleration.'
next:
  q: 'A passenger in a moving train throws a ball straight up, and it comes back to her hand. To someone on the platform, the same ball flew along a parabola. Who is right, and how do you convert between their stories?'
  leaf: 'phy/relative-motion'
  name: 'Relative motion'
---

:::hook
q: So back to the terrace. One marble is dropped and an identical one is flicked sideways at the same moment. Which lands first?
options: ["The dropped marble", "The flicked marble", "They land together"]
answer: 2
right: Right. The only force on either marble is gravity, and gravity pulls straight down. It cannot tell one marble that it is also moving sideways. Both start with zero downward speed and fall with the same acceleration, so they fall together. The flicked one just lands farther away.
wrong: Think about what gravity does: it pulls down, and only down. The sideways motion adds nothing to the downward motion and takes nothing away. Both marbles start with no downward speed, so their falls are identical.
:::

## Two motions that ignore each other {lvl=2 id=s-indep label="Class 11"}

Throw a ball and then watch it only from above, as a shadow on the ground. What do you see? A shadow moving at a steady speed. Nothing pushes it sideways (we ignore the air), so the sideways velocity never changes.

Now look only at its height, like a shadow on a wall. The ball goes up, slows, turns and falls. This is ordinary **free fall**, the straight-line motion you already know: the velocity changes by $g$ every second, whatever the sideways motion is doing.

The two views are the full story. The motions are **independent**; their only link is the clock, because both are happening for the same $t$ seconds.

:::figure caption="A strobe picture: both marbles, photographed at equal time intervals, are always at the same height. The thrown one gains the same sideways distance each tick."
<svg viewBox="0 0 360 225" role="img" aria-label="Strobe diagram of a dropped marble and a marble thrown sideways, always at the same height">
<rect class="m2" x="10" y="40" width="44" height="170"/><line class="ln" x1="10" y1="205" x2="350" y2="205"/>
<path class="faint" d="M70 40 Q180 40 290 205"/>
<line class="faint" x1="70" y1="50" x2="125" y2="50"/><line class="faint" x1="70" y1="81" x2="180" y2="81"/><line class="faint" x1="70" y1="133" x2="235" y2="133"/>
<circle class="obj" cx="70" cy="40" r="4.5"/><circle class="obj" cx="70" cy="50" r="4.5"/><circle class="obj" cx="70" cy="81" r="4.5"/><circle class="obj" cx="70" cy="133" r="4.5"/><circle class="obj" cx="70" cy="205" r="4.5"/>
<circle cx="125" cy="50" r="4.5" style="fill:var(--phy)"/><circle cx="180" cy="81" r="4.5" style="fill:var(--phy)"/><circle cx="235" cy="133" r="4.5" style="fill:var(--phy)"/><circle cx="290" cy="205" r="4.5" style="fill:var(--phy)"/>
<text class="k" x="78" y="30">start</text><text x="76" y="176">dropped</text><text class="k" x="196" y="62">thrown sideways</text><text x="300" y="196">lands</text>
</svg>
:::

:::worked title="A marble off a table"
A marble rolls off a 1.25 m high table at 2 m/s. With $g = 10$ m/s²: the fall takes $t = \sqrt{2h/g} = \sqrt{0.25} = 0.5$ s (the time of a dropped marble from that height). In that time, sideways at a steady 2 m/s: $2 \times 0.5 = 1$ m. It lands 1 m from the foot of the table. Speed it up to 4 m/s and it still takes 0.5 s, but lands 2 m away.
:::

:::qc lvl=2
q: A ball is thrown horizontally from a roof with speed 10 m/s. A second ball is thrown horizontally from the same roof with speed 20 m/s. Which reaches the ground first?
options: ["The faster one", "The slower one", "Both together"]
answer: 2
right: Right. Time to fall depends only on the height and g, not on the sideways speed. The faster ball just lands twice as far away.
wrong: The sideways speed does not enter the vertical motion. Both fall from the same height with zero downward starting speed, so both take the same time.
:::

## Throwing at an angle {lvl=2 id=s-angle label="Class 11"}

Now throw a ball upward at an angle. The launch is an arrow of length $u$ (the launch speed) at angle $\theta$ above the ground. Split the arrow into a sideways part and an upward part, like a ladder against a wall: $u\cos\theta$ along the ground and $u\sin\theta$ up.

Take $u = 20$ m/s at $\theta = 30^\circ$ and $g = 10$ m/s². The sideways part is $20\cos30^\circ = 17.3$ m/s, the upward part $20\sin30^\circ = 10$ m/s. Now treat the up-and-down alone, like a ball thrown straight up at 10 m/s: it slows by 10 m/s every second, so it stops rising after 1 s, at a height of $\tfrac12\times10\times1 = 5$ m. Then it falls for another 1 s, so the flight takes 2 s in all. And the sideways travel is $17.3\times2 = 34.6$ m.

Do the same with letters. The rise stops when $u\sin\theta = gt$, which is half the flight, so the **time of flight** is $T = 2u\sin\theta/g$. The top height is $H = u^2\sin^2\theta/(2g)$ and the **range** (the distance along the ground) is $R = (u\cos\theta)\,T = u^2\sin2\theta/g$.

Read them as: "time is twice the rise time", "height is the straight-up height for the upward part of the speed", and "range is sideways speed times time in the air". The step to $\sin2\theta$ uses $2\sin\theta\cos\theta = \sin2\theta$.

Play with the launch angle and the speed in the widget.

:::widget name=projectile u=20 angle=30 g=10
:::

:::qc lvl=2
q: A ball is kicked at 20 m/s at 30° above the ground, g = 10 m/s². What is its speed at the top of the path?
options: ["0", "10 m/s", "17.3 m/s"]
answer: 2
right: Right. At the top the upward part of the velocity is zero, but the sideways part, 20 cos 30° = 17.3 m/s, never changed. That is the slowest the ball ever moves.
wrong: Only the upward part of the velocity becomes zero at the top. The sideways part is 20 cos 30° = 17.3 m/s all the way.
:::

## Why the path is a parabola {lvl=2 id=s-parabola label="Class 11"}

You have two facts: $x = (u\cos\theta)\,t$ and $y = (u\sin\theta)\,t - \tfrac12 g t^2$. Remove the clock. From the first, $t = x/(u\cos\theta)$. Put it into the second:

$$y = x\tan\theta - \frac{g\,x^2}{2u^2\cos^2\theta}.$$

Read it as: "height equals a straight-line term (the climb you would get with no gravity) minus a drop that grows as the square of the distance". An equation in which $y$ depends on $x$ and $x^2$ is the equation of a **parabola**.

:::figure caption="At each point the velocity splits into a constant sideways part (blue) and a vertical part (orange) that shrinks, vanishes at the top and grows downwards. The speed is least at the top."
<svg viewBox="0 0 360 225" role="img" aria-label="Parabola with sideways and vertical velocity components at five points">
<defs><marker id="pjh1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="pjv1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="10" y1="180" x2="350" y2="180"/>
<path class="faint" d="M30 180 Q170 -60 310 180"/>
<circle class="obj" cx="30" cy="180" r="3.5"/><circle class="obj" cx="100" cy="90" r="3.5"/><circle class="obj" cx="170" cy="60" r="3.5"/><circle class="obj" cx="240" cy="90" r="3.5"/><circle class="obj" cx="310" cy="180" r="3.5"/>
<line class="ray" x1="30" y1="180" x2="62" y2="180" marker-end="url(#pjh1)"/><line class="ray" x1="100" y1="90" x2="132" y2="90" marker-end="url(#pjh1)"/><line class="ray" x1="170" y1="60" x2="202" y2="60" marker-end="url(#pjh1)"/><line class="ray" x1="240" y1="90" x2="272" y2="90" marker-end="url(#pjh1)"/><line class="ray" x1="310" y1="180" x2="342" y2="180" marker-end="url(#pjh1)"/>
<line class="wf" x1="30" y1="180" x2="30" y2="146" marker-end="url(#pjv1)"/><line class="wf" x1="100" y1="90" x2="100" y2="73" marker-end="url(#pjv1)"/><line class="wf" x1="240" y1="90" x2="240" y2="107" marker-end="url(#pjv1)"/><line class="wf" x1="310" y1="180" x2="310" y2="214" marker-end="url(#pjv1)"/>
<text class="k" x="178" y="48">top: only sideways</text><text x="40" y="196">launch</text><text x="300" y="196" text-anchor="end">landing</text>
</svg>
:::

The symmetry of the parabola shows itself in the picture: the speed on the way down at a given height equals the speed on the way up at the same height, and the landing speed equals the launch speed on level ground.

:::qc lvl=2
q: A ball is thrown at 25 m/s and reaches the same height on its way up and on its way down. How do its two speeds at that height compare?
options: ["Faster going up", "Faster going down", "Equal"]
answer: 2
right: Right. The path is symmetric. The sideways part is the same, and the vertical part has the same size, only reversed in direction.
wrong: At the same height the vertical speed has the same size on the way up and the way down. The sideways part never changes.
:::

## Two angles, one range {lvl=2 id=s-range label="Class 11"}

The range $R = u^2\sin2\theta/g$ is largest when $\sin2\theta = 1$, so at $\theta = 45^\circ$, and the greatest range is $u^2/g$. At $u = 20$ m/s and $g = 10$ m/s², that is 40 m.

Notice something odd. Since $\sin2\theta = \sin(180^\circ - 2\theta)$, the angles $\theta$ and $90^\circ - \theta$ give **the same range**. At 30° and 60°, both give $400\times0.866/10 = 34.6$ m. The two flights are very different: the 30° one has $T = 2$ s and $H = 5$ m, the 60° one has $T = 3.46$ s and $H = 15$ m. A flat fast throw and a high lob reach the same spot; the widget shows the second path as a dashed ghost.

A neat link between height and range, from dividing the formulas, is

$$H = \frac{R\tan\theta}{4}.$$

Read it as: "height is a quarter of the range times the tangent of the angle". At 45° the height is a quarter of the range.

:::qc lvl=2
q: A ball thrown at 35° from the ground lands at distance R. At which other angle (same speed) would it also land at R?
options: ["35°", "45°", "55°"]
answer: 2
right: Right. Complementary angles, θ and 90° − θ, give the same range: 90° − 35° = 55°.
wrong: Range goes as sin 2θ, which equals sin (180° − 2θ). That makes θ and 90° − θ twins.
:::

## From a height, to a different level {lvl=3 id=s-height label="JEE"}

The formulas $T$, $H$ and $R$ need equal launch and landing levels. When they differ, go back to the two basic equations, with the landing height put into $y$.

:::worked title="Thrown sideways off a cliff"
A stone is thrown horizontally at 15 m/s from a cliff 20 m high, $g = 10$ m/s². Fall time: $20 = \tfrac12\cdot10\,t^2$ gives $t = 2$ s. Distance from the foot of the cliff: $15 \times 2 = 30$ m. Just before landing, the vertical speed is $gt = 20$ m/s and the sideways speed is still 15 m/s, so the speed is $\sqrt{15^2 + 20^2} = 25$ m/s, at an angle $\tan^{-1}(20/15) \approx 53^\circ$ below the horizontal.
:::

Here is a time-saver that comes from energy: the **landing speed** depends only on the launch speed and the height fallen, $v^2 = u^2 + 2gh$, whatever the angle. Check: $15^2 + 2\times10\times20 = 625$, so $v = 25$ m/s. Throw the stone up, down or sideways at 15 m/s from that cliff and it hits the ground at 25 m/s every time, though at different angles and times.

:::qc lvl=3
q: Three stones are thrown at the same speed from the same cliff top: one straight up, one horizontally, one straight down. Ignoring air, how do their landing speeds compare?
options: ["Down is fastest", "Up is fastest", "All equal"]
answer: 2
right: Right. Energy fixes the speed: v² = u² + 2gh for all three. The directions and the times differ, the speed does not.
wrong: The landing speed depends only on the starting speed and the height fallen, so all three agree. Only the time and the direction of arrival differ.
:::

## Switch gravity off: the monkey and the hunter {lvl=3 id=s-monkey label="JEE"}

A hunter aims at a monkey hanging from a branch. The instant he fires, the monkey lets go. Does the bullet miss, because the monkey has dropped?

Consider what gravity does. Without gravity, the bullet would fly straight along the line of sight, and the monkey would stay put. With gravity, **both** fall the same extra distance $\tfrac12gt^2$ below where they would otherwise have been, in the same time $t$. So the bullet is always exactly as far below the line of sight as the monkey is below the branch. They meet: the bullet hits the monkey, provided it reaches the monkey before the monkey hits the ground.

The idea is general. In a frame of reference that falls freely with the target, gravity disappears for both objects, and everything moves in straight lines. The next lessons make that precise.

:::qc lvl=3
q: The hunter now aims slightly above the monkey, who drops at the instant of firing. What happens to the bullet?
options: ["It passes over the monkey", "It still hits the monkey", "It hits the branch"]
answer: 0
right: Right. The bullet is on a line above the monkey's starting point, and both fall equally, so the bullet stays above the monkey's line and passes over it.
wrong: Both fall the same extra distance, so the bullet stays the same distance above its line of sight as the monkey is below the branch. If the line of sight misses the monkey's start, the bullet misses.
:::

## Up and down a slope {lvl=3 id=s-slope label="JEE"}

If the ground is a slope, tilt your axes so that $x$ points along the slope and $y$ points away from it. Gravity then splits into a part down the slope, $g\sin\alpha$, and a part into it, $g\cos\alpha$, where $\alpha$ is the slope's angle. The problem is the same as before with two different accelerations.

A stone thrown horizontally from a point on a slope that falls away at angle $\alpha$ lands when the drop equals the slope's drop: $\tfrac12gt^2 = (ut)\tan\alpha$, so $t = 2u\tan\alpha/g$.

:::worked title="Thrown off a hillside"
Throw a ball horizontally at 10 m/s from a point on a 45° slope, $g = 10$ m/s². Landing time $t = 2\times10\times1/10 = 2$ s. Across: $10\times2 = 20$ m. Down: $\tfrac12\times10\times4 = 20$ m. Distance along the slope: $\sqrt{20^2 + 20^2} = 28.3$ m.
:::

Another useful result: with launch speed $u$ at any angle, the **greatest** distance up a slope of angle $\alpha$ is $u^2/[g(1+\sin\alpha)]$ (and down it, $u^2/[g(1-\sin\alpha)]$). On level ground ($\alpha = 0$) both reduce to $u^2/g$. The problems derive it.

:::qc lvl=3
q: A ball is thrown horizontally at 10 m/s from a point on a slope of angle 45° (g = 10). How long until it lands on the slope?
options: ["1 s", "2 s", "4 s"]
answer: 1
right: Right. Set the drop ½gt² equal to the slope's drop, ut tan 45° = 10t: 5t² = 10t, so t = 2 s.
wrong: The ball lands when the vertical drop equals the slope's drop at the same horizontal distance: ½ g t² = u t tan α. Solve for t.
:::

## Everything you can reach: the safety parabola {lvl=4 id=s-safety label="Olympiad"}

Fire a cannon at speed $u$ at every possible angle. Where can a shell *possibly* land? The reachable points are bounded by a parabola, called the **safety parabola**:

$$y_{max} = \frac{u^2}{2g} - \frac{g\,x^2}{2u^2}.$$

Read it as: "the boundary starts at the highest point you can reach, $u^2/2g$, straight above the gun, and curves down to the farthest range $u^2/g$ on the ground". Everything inside is reachable; everything outside is safe.

To see why, put a target at $(x, y)$ into the path equation, with $\tan\theta = T$ and $1/\cos^2\theta = 1 + T^2$: it becomes a quadratic equation in $T$. A launch angle exists only when its two roots are real. The boundary, where the roots are equal, is the parabola above. Points inside have two roots: **two angles** reach the same target, a flat shot and a lob.

Example: a garden sprinkler throws water at 8 m/s in every direction. With $g = 10$ m/s² the farthest drop lands $64/10 = 6.4$ m away, so the lawn it can wet on level ground has radius 6.4 m. The highest water reaches $64/20 = 3.2$ m above the nozzle.

:::qc lvl=4
q: A cannon fires at speed u in every direction. What is the greatest height any shell can reach?
options: ["u²/g", "u²/(2g)", "u²/(4g)"]
answer: 1
right: Right. Fire straight up: v² = u² − 2gh = 0 gives h = u²/(2g). No other angle does better, since only the upward part of the speed lifts the shell.
wrong: The best you can do for height is to fire straight up, which gives h = u²/(2g).
:::

## Where the real world differs {lvl=4 id=s-air label="Olympiad"}

Our parabola ignores the air. A real cricket ball or football loses speed to drag, so it falls short of the ideal range, its path is steeper on the way down than on the way up, and the best launch angle falls below 45°. Backspin on a golf ball adds a lift force, which is why golfers launch at about 10 to 15° and still carry 200 m [Unverified numbers]. For a slow, heavy object such as a shot put, the parabola is very good; for a shuttlecock, it is hopeless, since a shuttlecock almost drops straight down at the end of its flight.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Gravity pulls only downwards, so the sideways velocity of a projectile never changes and the fall is ordinary free fall. {lvl=2}
2. A ball thrown sideways and a ball dropped from the same height land together. {lvl=2}
3. Split the launch: sideways $u\cos\theta$, upward $u\sin\theta$; join the two motions by the same time. {lvl=2}
4. $T = 2u\sin\theta/g$, $H = u^2\sin^2\theta/(2g)$, $R = u^2\sin2\theta/g$, for level ground. {lvl=2}
5. The path is a parabola; the speed is least at the top, where the velocity is purely sideways. {lvl=2}
6. $\theta$ and $90^\circ - \theta$ give the same range; the greatest range is at 45°. {lvl=2}
7. Landing speed from a height follows from energy: $v^2 = u^2 + 2gh$. {lvl=3}
8. In a frame falling with the target, gravity vanishes: the monkey is always hit. {lvl=3}
9. The reachable region is bounded by the safety parabola. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- At the top the velocity is not zero: only its vertical part is. The acceleration is $g$ everywhere along the path. {lvl=2}
- The formulas for $T$, $H$ and $R$ need equal launch and landing heights; from a cliff, go back to $x$ and $y$. {lvl=3}
- Do not use the range formula with $\theta$ measured from the vertical; check which angle the question gives. {lvl=2}
- Real balls slow down in air; the parabola is the ideal answer, not the exact one. {lvl=4}
:::
