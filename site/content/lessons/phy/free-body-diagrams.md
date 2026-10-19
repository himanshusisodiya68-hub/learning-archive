---
title: Free-body diagrams
summary: Why a book on a table is being pushed up, and the one drawing habit that makes every force problem easy.
ncert: ["Class 8 Science (Curiosity) · Ch 5 Exploring Forces", "Class 11 Physics · Ch 4 Laws of Motion (§4.8 Equilibrium of a particle, §4.9 Common forces, §4.11 Solving problems)"]
up_to: Olympiad
builds_on: [Inertia and the first law, Momentum and the second law, Third law, Vectors in motion]
notes_prompt: Explain to a friend why a book resting on a table has two forces on it, why they are equal, and why they are not an action-reaction pair.
margin:
  - kind: history
    title: History
    text: Newton himself drew almost no force diagrams; he argued in words and geometry. The habit of drawing a body alone with arrows for the forces on it grew with nineteenth-century engineers, who needed to be sure a bridge or a crane would not fail.
  - kind: tip
    title: Exam habit
    text: "Before writing any equation, draw the body alone, label every arrow with who exerts it, and mark the direction of the acceleration. Most lost marks in force problems are lost before the first equation."
  - kind: olympiad
    title: Olympiad link
    text: "When several bodies move together, a smart choice of system makes the unknown internal forces disappear. A pulley that hangs from a balance reads $2T$, and a rope with mass has a tension that changes along its length."
books:
  - { title: "NCERT Physics Class XI Part 1", ref: "Ch 4 Laws of Motion, §4.8, §4.9, §4.11" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch 5 Force and Motion I, §5-2 and §5-3 (free-body diagrams) [Unverified section numbers]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch 12 Characteristics of Force [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 5 Newton's Laws of Motion [Unverified chapter number]" }
cards:
  - { front: "What is a free-body diagram?", back: "A sketch of one body alone, with an arrow for every force acting ON it (and nothing else), each labelled with who pushes or pulls." }
  - { front: "Name the usual forces in a mechanics problem.", back: "Weight $mg$ (Earth), normal force $N$ (surface), tension $T$ (rope), friction $f$ (surface, along it), plus any push or pull you apply." }
  - { front: "Are weight and the normal force on a resting book an action-reaction pair?", back: "No. They act on the same body, and they are different kinds of force. The reaction to the weight is the book pulling the Earth up; the reaction to the normal force is the book pushing the table down." }
  - { front: "A person in a lift accelerating upward at $a$: scale reading?", back: "$N = m(g + a)$. Upward acceleration makes the scale read more; downward acceleration $a$ gives $m(g - a)$; free fall gives zero." }
  - { front: "Block on a smooth slope of angle $\\theta$: components of the weight?", back: "$mg\\sin\\theta$ along the slope (down it), $mg\\cos\\theta$ into the slope. So $N = mg\\cos\\theta$ and $a = g\\sin\\theta$." }
  - { front: "Tension in a light rope over a smooth pulley?", back: "Same everywhere in the rope. The pulley changes the direction of the pull, not its size." }
core:
  idea: 'Pick one body, draw it alone, and put an arrow on it for every force that other bodies exert on it. Then the net force, added as vectors, equals mass times acceleration, one axis at a time.'
  formulas:
    - tex: '\sum F_x = ma_x,\qquad \sum F_y = ma_y'
      label: 'Newton''s second law, along any chosen axes'
    - tex: 'N = mg\cos\theta,\qquad a = g\sin\theta'
      label: 'Block on a smooth slope of angle $\theta$'
    - tex: 'N = m(g + a)'
      label: 'Scale reading in a lift accelerating upward at $a$'
  conditions:
    - 'Only forces ON the body appear in its diagram; forces it exerts on others never do'
    - 'Weight, normal force and tension are real forces; "inertia" and "the force of the throw" are not forces at all'
    - 'Ropes are light and inextensible and pulleys smooth, unless the problem says otherwise'
    - 'Axes are in an inertial frame (not accelerating, not rotating)'
  sign: 'Choose a positive direction before writing equations, ideally the direction of the acceleration. A negative answer then means the force or acceleration points the other way.'
outcomes:
  - 'Draw the free-body diagram of a body and name who exerts each force'
  - 'Explain why weight and normal force are not an action-reaction pair'
  - 'Predict the reading of a scale in a lift that speeds up or slows down'
  - 'Solve blocks on slopes, hanging masses and ropes over pulleys with F = ma along chosen axes'
  - 'Choose a system so that unknown internal forces drop out, and find how tension varies along a heavy rope'
opener:
  story: |
    You are standing still. Gravity is pulling you down with about 600 newtons, roughly the weight of a sack of rice. Yet you are not accelerating. You are not sinking through the floor, and you are not shooting off the planet.

    That means something is pushing you **up** with exactly the same 600 newtons. The only thing touching your feet is the floor. But a floor is not a person, and it has no muscles. How can it push?

    Here is the answer: your shoes squash the atoms of the floor by a hair's breadth, just as you squash a mattress, and the squashed atoms push back like billions of tiny springs. The floor pushes exactly as hard as it needs to, no more. Now ask a harder question: what does a bathroom scale read if you stand on it in a lift that has just started to rise?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A box on a table with a dashed bubble round it, and beside it a dot with an upward arrow N and a downward arrow mg"><rect x="20" y="170" width="170" height="16" rx="3" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><rect x="75" y="112" width="60" height="58" rx="4" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="58" y="94" width="94" height="86" rx="30" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 5"/><text x="60" y="84" style="font-size:11px;fill:var(--muted)">draw a bubble round it</text><text x="92" y="146" style="font-size:12px;fill:var(--ink)">book</text><circle cx="250" cy="116" r="6" style="fill:var(--ink)"/><path d="M250 108 L250 52" style="fill:none;stroke:var(--chem);stroke-width:3"/><path d="M243 60 L250 46 L257 60Z" style="fill:var(--chem)"/><path d="M250 124 L250 182" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M243 174 L250 188 L257 174Z" style="fill:var(--c)"/><text x="262" y="68" style="font-size:12px;fill:var(--ink)">N (table)</text><text x="262" y="180" style="font-size:12px;fill:var(--ink)">mg (Earth)</text><text x="310" y="226" style="font-size:11px;fill:var(--muted);text-anchor:end">only forces ON the book</text></svg>'
life:
  - 'A scale in a lift: the number flickers up as the lift starts upward and down as it stops, though your mass never changes.'
  - 'A washing line never gets perfectly straight, however hard two people pull: a straight line would need infinite tension to hold a wet shirt.'
  - 'Engineers draw a free-body diagram of every joint of a bridge truss to check that no beam carries more than it can bear.'
  - 'Tug of war, a crane lifting a girder, a kid on a swing: each is the same drawing with different arrows.'
  - 'Astronauts feel weightless in orbit not because gravity is gone but because nothing pushes up on them: no normal force, so the scale reads zero.'
models:
  - name: 'Draw the system boundary first'
    text: 'Before arguing about anything complicated (a company, a budget, a family quarrel), decide exactly what is inside the bubble. Only what crosses the boundary matters to the bubble; everything inside is bookkeeping.'
  - name: 'Responders and drivers'
    text: 'Some forces are drivers (gravity, your push) and some are responders (the normal force, tension, static friction): they adjust themselves to whatever is needed. Ask of any situation which quantities are fixed by nature and which simply respond.'
  - name: 'Name who is acting'
    text: 'Every arrow must say who exerts it. A force with no culprit is a mistake. In life too, a pressure or an effect nobody can name is usually imaginary.'
links:
  - leaf: 'phy/vectors-in-motion'
    name: 'Vectors in motion'
    same: 'Every tilted force is split into two perpendicular components, exactly the way a velocity was split into horizontal and vertical parts.'
    differs: 'Here the components obey a law: along each axis the net force must equal mass times the acceleration along that axis, which is the whole point.'
  - leaf: 'phy/kirchhoffs-rules'
    name: 'Kirchhoff''s rules'
    same: 'Both are bookkeeping at a point: the forces on a knot must add to zero when it is at rest, just as the currents into a junction must add to zero.'
    differs: 'Forces are vectors, so you need components along two axes; currents are plain numbers that flow along wires.'
next:
  q: 'We drew the normal force straight out of the surface and nothing along it. But a block on a tilted plank can sit still instead of sliding down. What extra force holds it, and how does it know how hard to pull?'
  leaf: 'phy/friction'
  name: 'Friction'
symbols:
  - s: 'N'
    means: 'normal force, the push of a surface perpendicular to itself (newtons, N)'
  - s: 'm'
    means: 'mass of the body (kilograms, kg)'
  - s: 'g'
    means: 'free-fall acceleration, 9.8 m/s² (about 10 m/s² in NCERT)'
  - s: 'mg'
    means: 'weight, the pull of the Earth on the body (N)'
  - s: 'T'
    means: 'tension, the pull of a rope or string (N)'
  - s: 'a'
    means: 'acceleration of the body (m/s²)'
  - s: '\theta'
    means: 'angle of the slope or of a rope to the horizontal (degrees)'
  - s: 'F'
    means: 'an applied push or pull (N)'
---

:::hook
q: You stand on a bathroom scale in a lift that is at rest. The lift then starts moving upward, picking up speed. During those first moments, what does the scale read?
options: ["Less than your usual weight", "Exactly your usual weight", "More than your usual weight", "Zero for a moment"]
answer: 2
right: Right. To speed upward you need a net upward force, so the scale must push you up harder than gravity pulls you down. The scale reads your weight plus $ma$. A 70 kg person in a lift accelerating upward at 5 m/s² would see about 1050 N, as if their mass were 105 kg.
wrong: Think of what your body must do: it has to speed up upward. That needs an upward net force, so something must push up harder than gravity pulls down. The only thing pushing up on you is the scale, so its reading goes up.
:::

## Draw the body alone {lvl=1 id=s-draw label="Class 8"}

A **force** is a push or a pull that one body exerts on another. To find out what a body will do, you do not need to know the whole world. You need to know only what is pushing or pulling **that** body.

So draw the body by itself, as a dot or a box, with a bubble round it. Then ask: who touches it, and who pulls it from a distance? Every answer becomes an arrow starting on the body and pointing the way the force acts. This picture is called a **free-body diagram**. "Free" means the body has been freed from its surroundings; the surroundings are replaced by the arrows.

There are only a few kinds of arrows in everyday mechanics:

- **Weight**, $mg$ downward: the Earth pulls on everything, from a distance.
- **Normal force**, $N$: a surface pushes on a body, always perpendicular to the surface ("normal" means at right angles).
- **Tension**, $T$: a rope pulls on what it is tied to, always along the rope and always a pull, never a push.
- **Friction**, along the surface: the next lesson.
- **Your own push or pull**, when you apply one.

:::note title="Two rules that fix most mistakes" tone=info
1. An arrow must name **who exerts it**. If you cannot say who, it is not a force.
2. Draw only forces **on** the body. The force the body exerts on something else belongs in that other body's diagram.
:::

Take the NCERT question about a ball thrown up. Once the ball has left your hand, who is touching it? Nobody (we ignore the air). So there is exactly **one** force on it, its weight, pointing down. It points down while the ball rises, at the very top, and while it falls. "The force of the throw" is not on the diagram, because the hand is no longer in contact. The ball keeps rising only because of inertia, and inertia is not a force.

:::qc lvl=1
q: A ball is thrown straight up. At its highest point it is momentarily at rest. What is the net force on it there (ignoring air)?
options: ["Zero, because it is at rest", "Its weight, pointing down", "Its weight, pointing up", "The force of the throw, pointing up"]
answer: 1
right: Right. Being at rest for an instant does not mean the net force is zero. Gravity still pulls it down, which is why it turns round and falls.
wrong: Speed zero is not the same as force zero. Who is touching the ball at the top? Nobody. Only gravity acts on it, pointing down.
:::

## Weight and the normal force {lvl=1 id=s-normal label="Class 9"}

Back to the book on the table. Draw it alone. Two arrows: its weight $mg$ down, and the normal force $N$ of the table up. The book is at rest, so the net force is zero and the two arrows are equal. The table pushes up with exactly $mg$.

The normal force is a **responder**. Put a second book on top and the table pushes harder, without any decision, because the squashed atoms compress a bit more. Press down on the book with your hand and the table pushes up with $mg$ plus your push. The table can keep this up only until it breaks.

Here is a trap that catches many careful students: weight and the normal force on the book are **not** an action-reaction pair, although they are equal and opposite. They act on the **same** body, and they are different kinds of force. An action-reaction pair acts on **two different bodies** and is always the same kind of force. The reaction to the table pushing up on the book is the book pushing down on the table. The reaction to the Earth pulling the book down is the book pulling the Earth up. In the lift at the start, the two forces on you are only equal when the lift is not accelerating.

:::worked title="Six kilograms on a rope"
A 6 kg mass hangs at rest from a rope. Take $g = 10$ m/s². The free-body diagram has the tension $T$ pulling up and the weight $mg = 60$ N pulling down. At rest the net force is zero, so $T = 60$ N.

Now lift it so that it accelerates upward at 2 m/s². The arrows are the same, but they are no longer equal: $T - mg = ma$, so $T = 60 + 6\times2 = 72$ N. A rope that can safely hold 65 N holds the mass at rest but breaks if you jerk it upward.
:::

## The recipe {lvl=2 id=s-recipe label="Class 11"}

The second law says: the vector sum of the forces on a body equals its mass times its acceleration. To use it, resolve every arrow along two perpendicular axes you choose, and write one equation for each axis:

$$\sum F_x = ma_x,\qquad \sum F_y = ma_y.$$

Read it as: along each axis, add up all the forces, taking the direction you picked as positive; the total is the mass times the acceleration along that axis. The symbol $\sum$ is just a shorthand for "add up".

The recipe never changes:

1. Choose the body (or bodies) and draw it alone.
2. Draw every force on it, labelled with who exerts it.
3. Choose axes so as few arrows as possible are tilted. If you know the direction of the acceleration, put one axis along it.
4. Write $F = ma$ along each axis.
5. Solve, and check that the answer has sensible size, sign and units.

:::worked title="Weighing yourself in a lift (NCERT)"
A man of mass 70 kg stands on a scale in a lift. NCERT takes $g = 10$ m/s². The scale reads the normal force $N$ on him. Take upward as positive, so the equation is $N - mg = ma$ with $a$ the upward acceleration, giving $N = m(g + a)$.

(a) Constant speed upward: $a = 0$, $N = 700$ N (a reading of 70 kg).
(b) Downward with acceleration 5: $a = -5$, $N = 70\times5 = 350$ N (35 kg).
(c) Upward with acceleration 5: $N = 70\times15 = 1050$ N (105 kg).
(d) Cable broken, free fall: $a = -g$, $N = 0$. The scale reads zero: the man is weightless, though gravity still acts on him.
:::

Read the result as a sentence: if the lift accelerates up, you feel heavy; if it accelerates down, you feel light; and the scale tracks the acceleration, not the speed. At a steady 10 m/s the reading is your normal weight. This also explains the Class 8 "swing" question: just after the top of the swing you are speeding up downward, so the seat pushes up with less than your weight, and you feel light.

:::qc lvl=2
q: A lift moves downward but is slowing down to stop at the ground floor. What does the scale read?
options: ["Less than your weight", "Exactly your weight", "More than your weight", "Zero"]
answer: 2
right: Right. Slowing down while moving down means the acceleration is upward. Upward acceleration needs a net upward force, so $N > mg$.
wrong: The scale tracks the direction of the acceleration, not of the motion. Moving down while slowing means the velocity change points up, so the acceleration is upward and $N = m(g + a) > mg$.
:::

## Tilted planes {lvl=2 id=s-slope label="Class 11"}

A block sits on a smooth slope of angle $\theta$. Two forces act: the weight $mg$, straight down, and the normal force $N$, perpendicular to the slope. Weight is the only tilted arrow if you choose axes in the usual horizontal and vertical way, but then both axes have an unknown. A smarter choice: one axis **along** the slope and one **perpendicular** to it. Then $N$ lies on one axis and only the weight must be split.

:::figure caption="Free-body diagram of a block on a smooth slope. Axes are along and perpendicular to the slope; the weight splits into mg sin θ along the slope and mg cos θ into it."
<svg viewBox="0 0 360 220" role="img" aria-label="Block on an incline with weight, normal force and the two components of the weight">
<defs><marker id="fb1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="fb1b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<polygon points="30,200 330,200 330,60" style="fill:color-mix(in srgb,var(--phy) 10%,var(--surface));stroke:var(--ink);stroke-width:1.4"/>
<g transform="translate(170,134.7) rotate(-25)"><rect x="-24" y="-40" width="48" height="40" class="ln"/></g>
<circle class="obj" cx="161" cy="117" r="3.5"/>
<line class="ray" x1="161" y1="117" x2="134" y2="61" marker-end="url(#fb1a)"/>
<line class="wf" x1="161" y1="117" x2="161" y2="177" marker-end="url(#fb1b)"/>
<line class="faint" x1="161" y1="117" x2="137" y2="128"/>
<line class="faint" x1="161" y1="117" x2="185" y2="165"/>
<text class="k" x="122" y="60">N</text>
<text class="k" x="167" y="190">mg</text>
<text x="70" y="136">mg sin θ</text>
<text x="190" y="170">mg cos θ</text>
<text x="52" y="192">θ</text>
</svg>
:::

Perpendicular to the slope there is no acceleration, so $N$ balances the part of the weight pressing into the slope:

$$N = mg\cos\theta.$$

Along the slope, the only unbalanced force is the other part of the weight:

$$mg\sin\theta = ma\quad\Rightarrow\quad a = g\sin\theta.$$

Read it as: the steeper the slope, the bigger the acceleration; at $\theta = 0$ it is zero, and at $\theta = 90^\circ$ it is $g$, free fall. The mass cancels, so a heavy and a light block slide alike.

:::worked title="A 10 kg block on a 30 degree slope"
$N = 10\times9.8\times\cos30^\circ = 84.9$ N, noticeably less than the weight of 98 N: a slope carries only the part of the weight that presses into it. The block accelerates at $9.8\times\sin30^\circ = 4.9$ m/s², exactly half of $g$.
:::

:::qc lvl=2
q: A block rests on a smooth slope of angle 30°. To hold it still you must push it up the slope with a force equal to:
options: ["Its full weight, mg", "mg cos 30°", "mg sin 30°, which is half its weight", "Zero, since the slope is smooth"]
answer: 2
right: Right. Along the slope only $mg\sin\theta$ pulls the block down, so an equal push up the slope holds it. Half the weight is why ramps make lifting easier.
wrong: Along the slope the only force on the block is the component $mg\sin\theta$ of its weight. A force of that size up the slope balances it.
:::

## Ropes and pulleys {lvl=2 id=s-rope label="Class 11"}

A **light** rope (one whose mass we ignore) has a handy property: its tension is the same everywhere along it. Why? Take any piece of it. The piece has no mass, so the net force on it must be zero (if not, it would have infinite acceleration), which means the two ends of that piece pull with equal force. A **smooth pulley** changes the direction of the rope but not the tension.

:::worked title="Two masses over a pulley (NCERT)"
Masses 8 kg and 12 kg hang from the two ends of a light string over a frictionless pulley (use $g = 10$). Draw a diagram for each mass. The heavier one goes down and the lighter one goes up, both with the same acceleration $a$ because the string does not stretch.

Lighter mass, positive upward: $T - 8g = 8a$. Heavier mass, positive downward: $12g - T = 12a$.

Add the two equations: the unknown $T$ cancels, leaving $4g = 20a$, so $a = 2$ m/s². Then $T = 8(g + a) = 96$ N.

Check: $T$ lies between the two weights (80 N and 120 N), as it must.
:::

Two blocks on a smooth table, tied together with a light string, show the same idea. Masses 10 kg (A) and 20 kg (B), pulled by 600 N. Both move together with $a = 600/(10 + 20) = 20$ m/s². If the pull acts on A, the string must accelerate B alone: $T = 20\times20 = 400$ N. If the pull acts on B, the string accelerates A alone: $T = 10\times20 = 200$ N. The string always transmits just enough force to make whatever is **behind** it accelerate.

:::qc lvl=2
q: Two weights hang from the two ends of a light rope over a smooth pulley and are released. The rope tension is:
options: ["Equal to the heavier weight", "Equal to the lighter weight", "Between the two weights", "Zero, since the system is accelerating"]
answer: 2
right: Right. The heavier mass must accelerate down, so $T$ is less than its weight. The lighter must accelerate up, so $T$ is more than its weight. Tension sits in between.
wrong: Look at each mass. The heavy one accelerates down, so $T$ is less than its weight; the light one accelerates up, so $T$ is greater than its weight. Only a value between the two works.
:::

## Equilibrium at a knot {lvl=2 id=s-knot label="Class 11"}

When nothing accelerates, the second law becomes: the forces on the body add to zero. If three ropes meet at a knot, draw the knot alone with three arrows and require that they form a closed triangle. In components, the horizontal pulls cancel and the vertical pulls cancel.

NCERT's example hangs a 6 kg mass (weight 60 N) from a rope and pulls the middle of the rope sideways with 50 N. The knot is at rest, with the 50 N sideways, the 60 N weight carried down by the lower rope, and the tension $T$ in the upper rope at angle $\theta$ to the vertical. Horizontally $T\sin\theta = 50$ and vertically $T\cos\theta = 60$. Divide: $\tan\theta = 50/60$, so $\theta \approx 40^\circ$.

A lamp of mass $m$ hung from the middle of a wire makes the wire sag so that each half makes an angle $\theta$ with the horizontal. The vertical equation is $2T\sin\theta = mg$, so

$$T = \frac{mg}{2\sin\theta}.$$

Read it as: the flatter the wire, the larger the tension. For a 3 kg lamp with $\theta = 30^\circ$, $T = mg = 29.4$ N: each wire pulls as hard as the whole weight. For a nearly flat wire, $\theta = 1^\circ$, the tension is about 28 times the weight. A perfectly straight wire would need infinite tension, which is why no washing line or power cable is ever perfectly straight.

## Choosing a system {lvl=3 id=s-system label="JEE"}

The bubble need not surround one block. You can draw it round **two or more bodies together**, and then the forces they exert on each other are inside the bubble and drop out of the equation. Only forces from outside count.

A block of mass $m_1$ pushes a block of mass $m_2$ along a smooth table, with $F$ applied to the first. Treat both as one system: the only external horizontal force is $F$, so $a = F/(m_1 + m_2)$. Now ask for the contact force $R$ between the blocks. It is **external** to the second block alone, which moves with the same $a$:

$$R = m_2 a = \frac{m_2}{m_1 + m_2}F.$$

Read it as: the contact force is a fraction of $F$, the fraction of the total mass that sits in front of the contact.

:::worked title="A man pulling himself up"
A man of mass 70 kg sits on a chair of mass 10 kg that hangs from a light rope over a fixed pulley; he holds the other end and pulls with 500 N. Find the force the chair exerts on him ($g = 9.8$).

Bubble round man and chair together: the rope pulls up at **both** ends of it, once where it holds the chair and once in his hands, so the upward force is $2T = 1000$ N, against a weight of $80\times9.8 = 784$ N. Then $a = (1000 - 784)/80 = 2.7$ m/s² upward.

Now the man alone: $T + N - 70g = 70a$, so $N = 70\times2.7 + 686 - 500 = 375$ N. The chair pushes up on him with 375 N.
:::

A pulley hanging from a spring balance gives another handy fact. When a smooth pulley carries a rope with tension $T$ on both sides, the rope pulls down on it with $2T$, so the balance reads $2T$ (plus the pulley's own weight). For masses $m_1$ and $m_2$ in an Atwood machine, $T = \dfrac{2m_1m_2}{m_1 + m_2}g$, so the balance reads $\dfrac{4m_1m_2}{m_1 + m_2}g$. It is always less than $(m_1 + m_2)g$, the reading when the masses are held still. While one mass accelerates down and the other up, the centre of mass of the pair accelerates down on the whole, so the support carries less than the total weight.

:::qc lvl=3
q: A 3 kg block sits on a 5 kg block on a table. You push down on the top block with 20 N. What force does the table exert on the lower block? (g = 9.8)
options: ["49 N", "78.4 N", "98.4 N", "147 N"]
answer: 2
right: Right. Put the bubble round both blocks: down forces are $(3 + 5)\times9.8 = 78.4$ N plus your 20 N, and nothing accelerates, so the table pushes up with 98.4 N.
wrong: Draw a bubble round both blocks. The downward forces are their combined weight (78.4 N) plus your 20 N push. The table must supply an equal upward force.
:::

## A rope with mass {lvl=4 id=s-heavy label="Olympiad"}

The rule "tension is the same everywhere" needed a **light** rope. If the rope has mass, the tension changes along it, and the way to see how is to apply the system trick to a piece of the rope.

A uniform rope of mass $M$ and length $L$ lies on a smooth table and is pulled at one end by a force $F$. The whole rope accelerates at $a = F/M$. Take the part of the rope that lies a distance $x$ from the free end. Its mass is $Mx/L$ and the only force on it, along the table, is the tension $T(x)$ from the rope behind. So

$$T(x) = \frac{Mx}{L}\cdot\frac{F}{M} = \frac{x}{L}F.$$

Read it as: the tension grows in a straight line from zero at the free end to the full $F$ at the end where you pull. Each bit of rope supplies the pull needed to accelerate all the rope ahead of it.

The same trick gives a hanging rope. A uniform rope of mass $M$ hanging from a ceiling has tension $Mgx/L$ at a distance $x$ above the bottom, equal to the weight of the rope below that point. The tension is greatest at the top, and the rope breaks there first. If a block hangs from its lower end and the whole thing accelerates upward, add the block's weight and the extra $ma$ of everything below: $T = (m_{\text{below}})(g + a)$. Every question about a heavy rope is one question: **what is hanging, or being pulled, below the cut?**

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A free-body diagram shows one body alone, with an arrow for each force that other bodies exert on it. {lvl=1}
2. Every arrow must name who exerts it. Inertia and the force of a throw are not forces. {lvl=1}
3. Weight and the normal force on a resting body are equal, but not an action-reaction pair: they act on the same body. {lvl=1}
4. $\sum F = ma$ along each chosen axis; a scale in a lift reads $m(g + a)$ with $a$ the upward acceleration. {lvl=2}
5. On a smooth slope, $N = mg\cos\theta$ and $a = g\sin\theta$. {lvl=2}
6. In a light rope the tension is the same everywhere; $T = mg/(2\sin\theta)$ for a load on the middle of a sagging wire. {lvl=2}
7. Draw the bubble round several bodies and their internal forces disappear. {lvl=3}
8. In a rope with mass, tension changes with position: it equals the mass below (or ahead) times its acceleration. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Do not put "the force the block exerts on the table" on the block's diagram. It acts on the table. {lvl=1}
- The normal force is not always $mg$: it is $m(g + a)$ in an accelerating lift, $mg\cos\theta$ on a slope, and $mg + F\sin\theta$ if you also push down at an angle $\theta$. {lvl=2}
- A body at rest at one instant (the top of a throw) still has a net force if it is about to move. {lvl=1}
- The scale reads the normal force, not the weight. {lvl=2}
- Tension is always a pull along the rope; a rope cannot push. {lvl=2}
- Choose a positive direction first. A negative tension means you chose the wrong picture, since tension cannot be negative. {lvl=2}
:::
