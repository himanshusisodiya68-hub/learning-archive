---
title: Torque
summary: Why a long spanner loosens a stubborn nut, and the two rules that keep ladders, beams and see-saws from toppling.
ncert: ["Class 11 Physics · Ch 6 (moment of force or torque, equilibrium of a rigid body, couples; Examples 6.4, 6.5, 6.7–6.9, Exercises 6.4, 6.5, 6.8, 6.9, 6.16)"]
up_to: Olympiad
builds_on: [Third law, Momentum and the second law, Vectors in motion]
notes_prompt: Explain to a friend, using a door, why pushing near the hinge is much harder than pushing at the handle, and what rule decides whether a plank balances.
margin:
  - kind: history
    title: History
    text: Archimedes (3rd century BC) worked out the law of the lever, and is said to have boasted that with a long enough lever and a place to stand he could move the Earth. The word "torque" comes from the Latin for twist and was introduced in the 1880s.
  - kind: tip
    title: Exam habit
    text: "In a statics problem, take moments about the point where the most unknown forces act. Those forces have zero arm, so they drop out of the equation."
  - kind: olympiad
    title: Olympiad link
    text: "Three forces that keep a rigid body in equilibrium must either be parallel or have lines of action meeting at one point. Use it to find the direction of a hinge force without any algebra."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 10 Rotation, §10-7 Torque; Ch. 12 Equilibrium and Elasticity, §12-1 Equilibrium" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 18 Rotation in Two Dimensions [Unverified chapter reference]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapters Rotational Mechanics and Statics [Unverified chapter references]" }
cards:
  - { front: "Define the torque of a force about a point.", back: "Force times the perpendicular distance from the point to the line of action of the force: $\\tau = Fd = rF\\sin\\theta$. Unit: N m." }
  - { front: "Two conditions for a rigid body to be in equilibrium?", back: "The forces add to zero (no acceleration of the centre of mass), and the torques about any one point add to zero (no turning)." }
  - { front: "What is a couple?", back: "Two equal and opposite forces whose lines of action do not coincide. Net force zero, pure turning effect $\\tau = Fd$, the same about every point." }
  - { front: "Vector form of torque?", back: "$\\vec\\tau = \\vec r\\times\\vec F$; magnitude $rF\\sin\\theta$, direction by the right-hand rule, perpendicular to both $\\vec r$ and $\\vec F$." }
  - { front: "Where does the weight of a body act?", back: "At its centre of gravity (the centre of mass in a uniform field); the middle of a uniform rod or plate." }
  - { front: "Which pivot should you choose in an equilibrium problem?", back: "The point where most unknown forces act. They have zero moment arm and vanish from the torque equation." }
core:
  idea: 'A force turns a body by an amount that depends on how big it is and how far its line of action lies from the pivot: torque = force × perpendicular distance. A rigid body stays at rest only if the forces on it add to zero and the torques about any one point add to zero.'
  formulas:
    - tex: '\tau = rF\sin\theta = F\,d'
      label: 'Torque of a force about a point'
    - tex: '\vec\tau = \vec r \times \vec F'
      label: 'Torque as a vector (cross product)'
    - tex: '\sum \vec F = 0,\qquad \sum \tau = 0'
      label: 'Equilibrium of a rigid body'
  conditions:
    - 'Torque is always about a stated point or axis; the same force has different torques about different points'
    - 'The body is rigid: its shape does not change under the forces'
    - 'The weight of a uniform body acts at its centre; for equilibrium, forces and torques are measured in an inertial frame'
    - 'Static friction and contact forces take whatever values equilibrium needs, up to their limits'
  sign: 'Anticlockwise torque counts as positive and clockwise as negative. Choose the pivot where the most unknown forces act.'
outcomes:
  - 'Find the torque of a force about a point from the perpendicular distance, and from the angle'
  - 'Balance a see-saw, a lever or a beam using the principle of moments'
  - 'Use the vector product to find the torque and its direction'
  - 'Solve equilibrium problems (beams, ladders) with the two equilibrium conditions and a smart pivot'
  - 'Explain what a couple is and why its torque is the same about every point'
opener:
  story: |
    Why is the handle of a door put on the far edge, as far from the hinges as possible? Try it: push the door right next to the hinge with a finger, then push it at the handle. At the handle, a finger opens it. Near the hinge you can lean with your whole body and it barely moves.

    You pushed with the same force in both cases. The difference is only **where** you pushed. Every mechanic knows the same secret: when a wheel nut will not budge, slip a pipe over the spanner and it comes loose with no extra effort.

    So a push has a second ingredient besides its size. What is it, and how can we use it to balance a see-saw, hold a ladder, or know when a cupboard will tip over?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A door seen from above: a small push at the handle turns it more than a big push near the hinge"><rect x="50" y="108" width="230" height="10" rx="3" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--ink);stroke-width:2"/><circle cx="50" cy="113" r="8" style="fill:var(--ink)"/><path d="M95 205 L95 128" style="fill:none;stroke:var(--chem);stroke-width:6"/><path d="M95 122 L84 140 L106 140Z" style="fill:var(--chem)"/><path d="M262 160 L262 128" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M262 122 L255 135 L269 135Z" style="fill:var(--c)"/><path d="M130 88 Q170 60 215 80" style="fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:4 4"/><text x="40" y="224" style="font-size:11px;fill:var(--muted)">big push near the hinge</text><text x="188" y="178" style="font-size:11px;fill:var(--muted)">small push at the handle</text><text x="38" y="94" style="font-size:11px;fill:var(--muted)">hinge</text><text x="116" y="52" style="font-size:11px;fill:var(--muted)">both can turn the door</text></svg>'
life:
  - 'Door handles, tap handles, spanners, screwdrivers with fat handles, and the long bar used to lift a manhole cover all trade a longer lever arm for a smaller force.'
  - 'A see-saw, a kirana-shop beam balance, a crowbar, scissors and a nutcracker are levers, each balancing turning effects round a pivot.'
  - 'The dhenki, the foot-operated rice-husking lever of rural India, and the old well sweep (denkli) use a long beam on a pivot.'
  - 'A loaded lorry, a double-decker bus or a tall almirah tips over when the line of its weight leaves its base.'
  - 'Cyclists pull on both ends of the handlebar in opposite directions to steer: a couple.'
models:
  - name: 'Leverage'
    text: 'The same effort can be made bigger by moving where you apply it. A small push at a good place beats a big push at a bad place. In business and politics, the question is often not how hard you push but from where.'
  - name: 'Two conditions for balance'
    text: 'To be steady, nothing must be pushed away and nothing must be twisted. A team with equal efforts on both sides may still spin if the efforts are off-line. Always check both the total and the arrangement.'
  - name: 'Choose the viewpoint that hides your unknowns'
    text: 'Taking moments about the point where unknown forces act removes them from the equation. In many problems, picking the vantage point where the things you do not know do not matter is half the solution.'
links:
  - leaf: 'phy/centre-of-mass'
    name: 'Centre of mass'
    same: 'The weight of an extended body acts at one point, its centre of mass, because the torque of gravity about any pivot equals total weight times the distance of that point.'
    differs: 'Centre of mass answers where a body behaves as a point; torque answers how a force off that point turns it.'
  - leaf: 'phy/current-loop-and-galvanometer'
    name: 'Current loop and galvanometer'
    same: 'A current loop in a magnetic field feels two equal and opposite forces on opposite sides: a couple, with $\tau = F \times$ width. It is the same torque idea as the steering wheel.'
    differs: 'The forces there are magnetic and the torque aligns the loop with the field instead of the hand turning a wheel.'
next:
  q: 'A torque that is not balanced makes a body turn faster and faster. But the same push spins a light bicycle wheel up quickly and a heavy flywheel slowly. What measures how hard a body is to turn, and why does it depend on where the mass sits?'
  leaf: 'phy/moment-of-inertia'
  name: 'Moment of inertia'
symbols:
  - s: '\tau'
    means: 'torque, the turning effect of a force about a point (newton metre, N m)'
  - s: 'F'
    means: 'force (N)'
  - s: 'r'
    means: 'distance from the pivot to the point where the force acts (m)'
  - s: 'd'
    means: 'perpendicular distance from the pivot to the line of the force, the lever arm (m)'
  - s: '\theta'
    means: 'angle between the line from the pivot and the force (degrees)'
  - s: '\vec r'
    means: 'position vector from the pivot to the point where the force acts (m)'
  - s: '\times'
    means: 'cross product: a way of multiplying two vectors to get a third vector at right angles to both'
  - s: 'W'
    means: 'weight, the pull of gravity on a body (N)'
  - s: 'N'
    means: 'normal force, the push of a surface on a body (N)'
  - s: 'f'
    means: 'friction force (N)'
  - s: '\mu'
    means: 'coefficient of static friction (no unit)'
---

:::hook
q: You push a door with the same force each time. Where does it open most easily?
options: ["Close to the hinge", "In the middle", "At the handle, far from the hinge", "It makes no difference where"]
answer: 2
right: Right. The turning effect is the force times the distance from the hinge, so the same push at three times the distance turns the door three times as strongly. That is why handles are put as far from the hinges as possible.
wrong: Try it. Pushing near the hinge needs a huge force. The turning effect grows with the distance from the hinge, so the handle end is the best place.
:::

## Why a long spanner wins {lvl=1 id=s-spanner label="Class 8"}

Pushing a door near the hinge does not turn it much. Pushing at the handle does. The turning effect of a force depends on **two** things: how big the force is, and how far from the pivot it is applied. Multiply them and you have the **torque** (also called the **moment of a force**):

$$\text{torque} = \text{force} \times \text{distance from the pivot}.$$

Read it as: double the force or double the distance and the turning effect doubles. The unit is the newton metre, N m. Torque has the same units as work but is a different thing: work is force along a distance moved, torque is force at a distance, producing a turn.

:::figure caption="A force F at the end of a spanner of length d turns the nut. Torque = F × d."
<svg viewBox="0 0 360 150" role="img" aria-label="A spanner on a nut with a force at the end and the distance marked">
<defs><marker id="tq1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<polygon class="m2 ln" points="40,60 52,52 68,52 80,60 68,68 52,68"/>
<rect class="m2 ln" x="60" y="54" width="250" height="12" rx="6"/>
<line class="ray" x1="300" y1="16" x2="300" y2="52" marker-end="url(#tq1a)"/><text class="k" x="308" y="34">F = 40 N</text>
<line class="ln" x1="60" y1="100" x2="300" y2="100"/><line class="ln" x1="60" y1="94" x2="60" y2="106"/><line class="ln" x1="300" y1="94" x2="300" y2="106"/>
<text class="k" x="140" y="120">d = 0.25 m from the nut</text>
<text x="30" y="40">nut</text>
</svg>
:::

:::worked title="A stuck wheel nut"
A force of 40 N at the end of a 0.25 m spanner gives a torque of $40 \times 0.25 = 10$ N m. Slide a pipe over the handle so that you push at 0.50 m. The same 10 N m now needs only $10/0.50 = 20$ N. Twice the arm, half the force.
:::

:::qc lvl=1
q: A bolt needs 30 N m to turn. How much force on a spanner of length 0.15 m is needed, applied at right angles to the spanner?
options: ["4.5 N", "45 N", "200 N", "20 N"]
answer: 2
right: Right. $F = \tau/d = 30/0.15 = 200$ N. A 0.60 m pipe would bring that to 50 N.
wrong: Divide the torque by the arm: $30/0.15$.
:::

## Balancing: the see-saw {lvl=1 id=s-seesaw label="Class 8"}

Two children on a see-saw try to turn it opposite ways. One twists it anticlockwise, the other clockwise. It stays level when the two turning effects are equal. This is the **principle of moments**:

> For a body to stay still, the total anticlockwise moment about any point equals the total clockwise moment.

:::figure caption="A see-saw in balance. The pivot is 1 m from the 40 kg father and 1.6 m from the 25 kg child: 40 × 1 = 25 × 1.6."
<svg viewBox="0 0 360 190" role="img" aria-label="A see-saw with a heavier person near the pivot and a lighter child farther away">
<defs><marker id="tq2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="30" y1="120" x2="330" y2="120" style="stroke-width:3"/>
<polygon class="m2 ln" points="150,121 134,152 166,152"/>
<circle class="ln" cx="80" cy="68" r="10"/><line class="ln" x1="80" y1="78" x2="80" y2="118"/>
<circle class="ln" cx="262" cy="88" r="8"/><line class="ln" x1="262" y1="96" x2="262" y2="118"/>
<line class="wf" x1="80" y1="124" x2="80" y2="164" marker-end="url(#tq2a)"/><text class="k" x="38" y="148">40 kg</text>
<line class="wf" x1="262" y1="124" x2="262" y2="149" marker-end="url(#tq2a)"/><text class="k" x="272" y="146">25 kg</text>
<line class="ln" x1="80" y1="176" x2="150" y2="176"/><text x="104" y="172">1 m</text>
<line class="ln" x1="150" y1="176" x2="262" y2="176"/><text x="196" y="172">1.6 m</text>
</svg>
:::

:::worked title="Where should the child sit?"
A father of mass 40 kg sits 1 m from the pivot. His 25 kg daughter wants to balance him on the other side. Equal moments: $40 \times g \times 1 = 25 \times g \times x$, so $x = 40/25 = 1.6$ m. The $g$ cancels, so you can use masses directly. The pivot itself pushes up with the total weight: $65 \times 9.8 = 637$ N.
:::

A lever is just this principle in use. A crowbar, a pair of scissors, a bottle-opener and a wheelbarrow all let a small force at a long arm balance or beat a big force at a short arm.

:::qc lvl=1
q: A 20 kg child sits 2 m from the pivot of a see-saw. Where must a 40 kg child sit on the other side to balance it?
options: ["4 m", "2 m", "1 m", "0.5 m"]
answer: 2
right: Right. $20 \times 2 = 40 \times x$ gives $x = 1$ m. The heavier child sits closer.
wrong: Moments must be equal: mass times distance on one side equals mass times distance on the other.
:::

## Only the sideways part turns {lvl=2 id=s-angle label="Class 11"}

Push a door straight towards the hinge, along the line from the hinge to your hand, and nothing happens, however hard you push. Only the part of the force that is **across** the line from the pivot turns the body. If the force makes an angle $\theta$ with the line from the pivot to the point where it acts, that sideways part is $F\sin\theta$:

$$\tau = rF\sin\theta = F\,d,\qquad d = r\sin\theta.$$

Read it as: the sideways part of the force times the distance, or equally the whole force times the shortest distance $d$ from the pivot to the line along which the force acts. The distance $d$ is called the **lever arm** (or moment arm).

:::figure caption="Force F acts at P, distance r from the pivot O, at angle θ to OP. The perpendicular distance from O to the line of the force is d = r sin θ."
<svg viewBox="0 0 360 240" role="img" aria-label="Pivot O, a force at point P at an angle, and the perpendicular distance from O to the line of the force">
<defs><marker id="tq3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<circle class="ln" cx="60" cy="150" r="4"/><text x="34" y="140" class="k">O</text>
<line class="ln" x1="60" y1="150" x2="200" y2="150"/><text x="120" y="142">r</text>
<line class="faint" x1="200" y1="150" x2="270" y2="150"/>
<line class="ray" x1="200" y1="150" x2="278" y2="105" marker-end="url(#tq3a)"/><text class="k" x="284" y="104">F</text>
<text x="232" y="144">θ</text>
<line class="faint" x1="200" y1="150" x2="95" y2="211"/><line class="faint" x1="60" y1="150" x2="95" y2="211"/>
<text class="k" x="138" y="206">d = r sin θ</text>
<text x="190" y="170" class="k">P</text>
</svg>
:::

:::worked title="A slanting pull"
A 60 N force acts on a point 0.20 m from the pivot at 30° to the line from the pivot. Then $\tau = 0.20 \times 60 \times \sin 30^\circ = 6.0$ N m. The same number from the lever arm: $d = 0.20\sin 30^\circ = 0.10$ m and $\tau = 60 \times 0.10 = 6.0$ N m.
:::

Two special cases are worth remembering. If the force points along the line through the pivot ($\theta = 0$ or $180^\circ$), the torque is zero. If it is at right angles ($\theta = 90^\circ$), the torque is largest, $rF$. This is why you push a door at right angles to it.

:::qc lvl=2
q: A force acts on a point of a wheel in the direction pointing straight at the axle. What is its torque about the axle?
options: ["$rF$", "$rF/2$", "Zero", "$F/r$"]
answer: 2
right: Right. The line of the force passes through the axle, so the lever arm is zero. Such a force cannot turn the wheel.
wrong: The torque is $F$ times the shortest distance from the axle to the line of the force. For a line through the axle that distance is zero.
:::

## Torque as a vector: the cross product {lvl=2 id=s-cross label="Class 11"}

Torque also has a direction: the axis about which it tends to turn. The neat way to write both together is the **vector product** (or cross product) of the position vector $\vec r$ (from the pivot to the point of the force) and the force $\vec F$:

$$\vec\tau = \vec r \times \vec F.$$

Read it as: the torque is a vector whose size is $rF\sin\theta$ and which points at right angles to both $\vec r$ and $\vec F$. To get the direction, curl the fingers of your right hand from $\vec r$ towards $\vec F$; your thumb points along $\vec\tau$.

In components, with $\vec r = (x, y, z)$ and $\vec F = (F_x, F_y, F_z)$:

$$\vec\tau = \big(yF_z - zF_y,\ \ zF_x - xF_z,\ \ xF_y - yF_x\big).$$

Two quick rules: $\vec a\times\vec b = -\,\vec b\times\vec a$ (swap them and the direction flips), and $\vec a\times\vec a = 0$ (parallel vectors give zero, matching the "no torque along the line" rule).

:::worked title="Two torque calculations"
A force $(0, 3, 0)$ N acts at $(2, 0, 0)$ m. Then $\vec\tau = (0 - 0,\ 0 - 0,\ 2\times3 - 0) = (0, 0, 6)$ N m: 6 N m along $+z$, which is an anticlockwise turn seen from above.

A force $(0, 0, 5)$ N acts at $(1, 2, 0)$ m: $\vec\tau = (2\times5 - 0,\ 0 - 1\times5,\ 0) = (10, -5, 0)$ N m, of size $\sqrt{125} = 11.2$ N m.
:::

The size $|\vec a\times\vec b| = ab\sin\theta$ is also the **area of the parallelogram** with sides $\vec a$ and $\vec b$; half of it is the area of the triangle on those two sides. The same product with a third vector gives the volume of the box on three vectors. So the cross product is geometry first, and torque is one use of it.

:::qc lvl=2
q: What is $\hat i \times \hat j$, and what is $\hat j \times \hat i$?
options: ["$\\hat k$ and $\\hat k$", "$\\hat k$ and $-\\hat k$", "$-\\hat k$ and $\\hat k$", "0 and 0"]
answer: 1
right: Right. Curling from $x$ to $y$, the thumb points along $+z$. Swapping the order flips the direction.
wrong: The right-hand rule gives $\hat i\times\hat j = \hat k$, and swapping the factors reverses the sign.
:::

## Equilibrium of a rigid body {lvl=2 id=s-equil label="Class 11"}

A body can fail to be still in two different ways. It can be **pushed along** (the forces do not add to zero) or it can be **twisted** (the torques do not add to zero). So for a rigid body at rest there are two conditions:

$$\sum\vec F = 0\quad\text{and}\quad\sum\tau = 0\ \text{(about any one point)}.$$

Read them as: nothing pushes it along, and nothing turns it.

Gravity pulls on every bit of the body. The pulls add up to the same total torque as if the whole weight acted at one point, the **centre of gravity** (for ordinary bodies, the same as the centre of mass). For a uniform rod or plate it is the middle. A uniform metre rule balances on a finger placed at the 50 cm mark.

:::worked title="A plank on two supports"
A uniform plank 6 m long and of mass 30 kg rests on supports at its two ends. A 50 kg person stands 2 m from the left end. Take $g = 9.8$ m/s².

Take moments about the left end, where one unknown force acts. The right support gives an anticlockwise moment $R_R \times 6$; the plank's weight at 3 m and the person at 2 m give clockwise moments:
$6R_R = 30g\times3 + 50g\times2 = 190g$, so $R_R = 310$ N.
Forces: $R_L + R_R = 80g = 784$ N, so $R_L = 474$ N.
The left support carries more, as it should: the person is closer to it.
:::

:::qc lvl=2
q: A uniform beam of weight 100 N rests on two supports at its ends. A 100 N load sits at the middle. What does each support carry?
options: ["100 N each", "200 N each", "50 N each", "100 N and 0"]
answer: 0
right: Right. By symmetry the supports share the total of 200 N equally: 100 N each.
wrong: The total downward force is 200 N and the load is at the middle, so the two supports share it equally.
:::

## Couples: pure turning {lvl=2 id=s-couple label="Class 11"}

Turn a steering wheel with both hands: one hand pushes up on the right, the other pushes down on the left, with the same size of force. The two forces are equal and opposite, so the net force is zero and the wheel's centre does not accelerate. Yet the wheel turns. This pair is called a **couple**.

:::figure caption="A couple on a steering wheel: equal and opposite tangential forces F, a distance d = 2r apart. The turning effect is F × d."
<svg viewBox="0 0 360 200" role="img" aria-label="A steering wheel with two equal and opposite forces on opposite sides">
<defs><marker id="tq4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<circle class="ln" cx="150" cy="100" r="70"/><circle class="ln" cx="150" cy="100" r="6"/>
<line class="ln" x1="80" y1="100" x2="220" y2="100"/><line class="ln" x1="150" y1="100" x2="150" y2="170"/>
<line class="ray" x1="220" y1="100" x2="220" y2="46" marker-end="url(#tq4a)"/><text class="k" x="230" y="70">F</text>
<line class="ray" x1="80" y1="100" x2="80" y2="154" marker-end="url(#tq4a)"/><text class="k" x="62" y="140">F</text>
<line class="ln" x1="80" y1="186" x2="220" y2="186"/><text class="k" x="108" y="182">d = 2r</text>
</svg>
:::

The **moment of a couple** is one of the forces times the perpendicular distance between them: $\tau = F\,d$. Its remarkable property: it is the **same about every point**. To see it in one dimension, take any point between the two forces at distance $x$ from the first force; the two moments (which turn the same way) add to $Fx + F(d - x) = Fd$, whatever $x$ is. In vector form, with the forces at positions $\vec r_1$ and $\vec r_2$, the total torque is $\vec r_1\times\vec F + \vec r_2\times(-\vec F) = (\vec r_1-\vec r_2)\times\vec F$, which does not contain the pivot at all.

:::worked title="Turning a tap"
You turn a tap with thumb and forefinger, each pushing 3 N in opposite directions on a handle 4 cm wide. The couple is $3 \times 0.04 = 0.12$ N m, whatever the point of the tap's stem you call the axis.
:::

Couples are everywhere: a key in a lock, a screwdriver, a bottle cap, a compass needle in the Earth's field, and an electric motor.

:::qc lvl=2
q: Two equal and opposite forces of 5 N act on a bar, 0.4 m apart, not along the same line. What are the net force and the torque?
options: ["10 N and 2 N m", "0 and 2 N m", "0 and 0", "10 N and 0"]
answer: 1
right: Right. Net force: $5 - 5 = 0$. Torque: $5 \times 0.4 = 2$ N m about every point.
wrong: The forces cancel as forces, but their lines are apart, so they still turn the bar: $F \times d$.
:::

## Ladders and the clever pivot {lvl=3 id=s-ladder label="JEE"}

Equilibrium problems have unknown forces: hinge forces, contact forces, friction. You have three equations in a plane: horizontal forces, vertical forces, torques. The trick is to choose the pivot well. Take moments about the point where **most unknown forces act**. They have no lever arm, and so vanish from that equation.

:::figure caption="A ladder against a smooth wall. Forces: wall push N_w (horizontal), weight W, floor push N_f, friction f. The lines of N_w and W meet at a point, and the floor's total force must pass through the same point."
<svg viewBox="0 0 360 230" role="img" aria-label="A ladder leaning on a wall with the four forces on it and a dashed point where lines of action meet">
<defs><marker id="tq5a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="tq5b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="60" y1="20" x2="60" y2="200" style="stroke-width:3"/><line class="ln" x1="40" y1="200" x2="340" y2="200"/>
<line class="ln" x1="210" y1="200" x2="60" y2="40" style="stroke-width:4"/>
<line class="faint" x1="210" y1="200" x2="135" y2="40"/><line class="faint" x1="135" y1="120" x2="135" y2="40"/><line class="faint" x1="62" y1="40" x2="135" y2="40"/><circle class="ln" cx="135" cy="40" r="3"/>
<line class="ray" x1="64" y1="40" x2="116" y2="40" marker-end="url(#tq5a)"/><text class="k" x="68" y="32">N_w</text>
<line class="wf" x1="135" y1="120" x2="135" y2="168" marker-end="url(#tq5b)"/><text class="k" x="142" y="160">W</text>
<line class="ray" x1="210" y1="198" x2="210" y2="150" marker-end="url(#tq5a)"/><text class="k" x="216" y="156">N_f</text>
<line class="ray" x1="206" y1="203" x2="152" y2="203" marker-end="url(#tq5a)"/><text class="k" x="156" y="218">f</text>
<text x="150" y="26">lines meet here</text>
</svg>
:::

:::worked title="A painter on a ladder"
A ladder 6.5 m long and of mass 15 kg leans against a smooth wall, its foot 2.5 m from the wall, so its top is $\sqrt{6.5^2 - 2.5^2} = 6.0$ m up. A painter of mass 60 kg stands at its middle. Take $g = 9.8$ m/s².

The foot has two unknown forces (floor push and friction), so take moments about the foot. The wall's push is horizontal, so its lever arm is the full height 6.0 m. The weights (75 kg in all) act at the middle, 1.25 m horizontally from the foot:
$N_w\times 6.0 = 75g\times 1.25$, so $N_w = 153$ N.
Horizontal forces: friction $f = N_w = 153$ N. Vertical: $N_f = 75g = 735$ N.
The floor must give $\mu \ge f/N_f = 0.21$.
:::

A powerful shortcut: **three non-parallel forces in equilibrium must have lines of action that meet at one point.** For the ladder, the wall's push (horizontal) and the weight (vertical) meet at a point above the middle, and the floor's combined force has to point through it. Read the geometry and you can find the direction of an unknown force without any algebra. It also gives a neat rule: a uniform ladder with a smooth wall and angle $\varphi$ to the floor holds only if $\tan\varphi \ge 1/(2\mu)$.

:::qc lvl=3
q: A uniform ladder rests against a smooth wall. If you stand a heavier person higher up the ladder, what happens to the friction needed at the floor?
options: ["It falls", "It rises", "It stays the same", "It becomes zero"]
answer: 1
right: Right. A load higher up has a larger horizontal lever arm about the foot, so the wall push, and therefore the friction, must grow.
wrong: Moments about the foot: the wall push times the height equals the weights times their horizontal distances. A load far up the ladder has a bigger horizontal distance, so the wall push, and the friction, grows.
:::

## Tipping or sliding? {lvl=3 id=s-tip label="JEE"}

Push a tall box sideways. It may slide or it may topple. At the moment of toppling it pivots about its lower edge, so take moments there: the push $F$ at height $h$ turns it one way, and the weight $W$ at horizontal distance $a/2$ (half the width) turns it back. It tips when $F h > W\,a/2$. It slides when $F > \mu W$. Whichever needs the smaller force happens first.

:::worked title="A fridge on the move"
A fridge 0.6 m wide and 1.8 m high, of mass 60 kg, is pushed horizontally at a height of 1.5 m. It tips when $F\times 1.5 > 60g\times 0.3$, i.e. when $F > 117.6$ N. It slides when $F > \mu \times 60g = 588\mu$ N. These are equal when $\mu = 0.2$. If the floor is rougher than that, the fridge **tips** before it slides. Push lower down and the tipping force grows, so the fridge slides first. That is why movers push low.
:::

The same rule decides when a vehicle rolls over. A body on a flat surface stays up as long as the vertical line through its centre of gravity falls inside its base. A bus 2.4 m wide whose centre of gravity is 1.5 m up tips on a slope at $\tan\varphi = 1.2/1.5 = 0.8$, i.e. $\varphi = 38.7^\circ$. Loading luggage on the roof raises the centre of gravity and lowers that angle.

:::qc lvl=3
q: Why do movers push a tall cupboard near its base, not its top?
options: ["Pushing low is more comfortable", "A low push has a smaller torque about the lower edge, so it slides instead of tipping", "Pushing low needs less force to slide", "The weight is lower there"]
answer: 1
right: Right. The tipping torque is $F\times h$. A smaller $h$ makes the push less likely to topple the cupboard, so it slides instead.
wrong: The tipping torque about the bottom edge is the push times the height. A low push has a small tipping torque.
:::

## Any point will do, and the bricks that overhang {lvl=4 id=s-brick label="Olympiad"}

**Why can you choose any pivot?** Suppose the forces add to zero and the torque about one point $A$ is zero. Move to another point $B$, displaced by $\vec s$. Every position vector changes by $\vec s$, and the torque changes by $\vec s\times\sum\vec F = 0$. So if the total force is zero, the torque is the same about every point: equilibrium needs torque balance about **one** point only, and you pick whichever is cleverest.

**How far can bricks overhang?** Stack identical bricks of length $L$ so that each sticks out beyond the one below, as far as possible without falling. Work from the top. For the stack to balance, the edge of the support must lie under the centre of mass of everything above it.

Suppose the top $n - 1$ bricks are balanced with their combined centre of mass exactly above the edge of brick $n$. Brick $n$ has its own centre $L/2$ inside that edge. The centre of mass of all $n$ bricks is then at $\dfrac{(n-1)\times 0 + 1\times L/2}{n} = \dfrac{L}{2n}$ inside the edge. So brick $n$ can stick out beyond the brick under it by $L/(2n)$. The total overhang is

$$\frac{L}{2}\left(1 + \frac12 + \frac13 + \dots + \frac1n\right).$$

:::worked title="How many bricks to get a whole brick out?"
One brick: $L/2$. Two bricks: $\tfrac{L}{2}\cdot\tfrac32 = 0.75L$. Three: $\tfrac{L}{2}\cdot\tfrac{11}{6} = 0.92L$. Four: $\tfrac{L}{2}\cdot\tfrac{25}{12} = 1.04L$. With **four bricks** the top brick lies entirely beyond the edge of the bottom one. The series never stops growing, though very slowly: an overhang of three whole brick lengths needs 227 bricks.
:::

This is a good one for the dinner table, with a stack of books and a coin to mark the edge.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Torque = force × perpendicular distance from the pivot; a long arm turns more. {lvl=1}
2. A body stays balanced when the clockwise and anticlockwise moments are equal (principle of moments). {lvl=1}
3. Only the sideways part of a force turns: $\tau = rF\sin\theta = Fd$. A force through the pivot has zero torque. {lvl=2}
4. $\vec\tau = \vec r\times\vec F$: size $rF\sin\theta$, direction by the right-hand rule. {lvl=2}
5. Rigid-body equilibrium: $\sum\vec F = 0$ and $\sum\tau = 0$. The weight acts at the centre of gravity. {lvl=2}
6. A couple is two equal opposite forces on different lines: no net force, torque $Fd$, the same about every point. {lvl=2}
7. Take moments about the point where the most unknown forces act; three forces in equilibrium meet at a point. {lvl=3}
8. A body tips when the vertical through its centre of gravity leaves its base. {lvl=3}
9. If $\sum\vec F=0$, the torque is the same about every point, so one pivot is enough. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Torque is about a chosen point. A force can have a large torque about one point and zero about another. {lvl=1}
- Use the perpendicular distance, not the distance along the bar, unless the force is at right angles to the bar. {lvl=2}
- Count clockwise and anticlockwise with opposite signs, and keep the same convention throughout. {lvl=2}
- Torque (N m) is not energy (joule), even though the units look the same. {lvl=2}
- Equilibrium needs both conditions: a couple has zero net force but still turns the body. {lvl=2}
- At the foot of a ladder, friction and the floor push are two unknowns: take moments there so both vanish. {lvl=3}
- When a body is about to tip, the whole normal force acts at the edge it pivots about. {lvl=3}
:::
