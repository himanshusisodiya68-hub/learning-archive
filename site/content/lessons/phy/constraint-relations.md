---
title: Constraint relations
summary: Why pulling a rope one metre lifts a load only half a metre, and the one habit that cracks every pulley, wedge and ladder problem.
ncert: []
up_to: Olympiad
builds_on: [Free-body diagrams, Momentum and the second law, Vectors in motion]
notes_prompt: Explain to a friend, using only a rope and a pulley, why the load on a movable pulley moves half as far as your hand.
margin:
  - kind: history
    title: History
    text: "Archimedes is said to have launched a fully loaded ship single-handed with a compound pulley, around 250 BC [Unverified anecdote]. Whatever the truth of the story, the idea is real: more strands mean more load per unit of pull, paid for in rope."
  - kind: tip
    title: Exam habit
    text: "Before writing any force equation, write the constraint. Ask: if A moves 1 cm this way, how far, and which way, does B move? Then check the signs against a picture."
  - kind: olympiad
    title: Olympiad link
    text: "Constraints can be turned into an energy check. If every surface is smooth, the work done by gravity equals the kinetic energy of all moving parts, with the speeds tied together by the constraint. If the two methods disagree, one of your constraints has a wrong factor."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 5 Force and Motion I, the sample problem with a block on a table and a block hanging over the edge [Unverified chapter reference]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 5 Newton's Laws of Motion, the section on constraint relations [Unverified chapter reference]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 1 · 1.3 Dynamics of a particle [Unverified section reference]" }
cards:
  - { front: "What is a constraint?", back: "A fixed relation between the motions of connected bodies, set by geometry: a string that cannot stretch, a rod that stays rigid, a surface that stays in contact." }
  - { front: "Rule for a string over a fixed pulley?", back: "Length of string is constant, so what one end loses the other gains: $a_A = a_B$ in size, opposite in direction along the string." }
  - { front: "Rule for a movable pulley with a load, the string fixed at one end?", back: "Two strands lift the pulley, so the load moves half as far as the free end: $a_{\\text{load}} = \\tfrac12 a_{\\text{end}}$." }
  - { front: "General method for a pulley system?", back: "Write the total string length as a sum of segments, add a variable for each moving pulley, set the total constant and differentiate twice." }
  - { front: "Constraint for a rigid rod or a straight taut string?", back: "The velocity components of the two ends along the rod are equal: $v_A\\cos\\alpha = v_B\\cos\\beta$." }
  - { front: "Constraint for a block sliding on a movable wedge?", back: "The accelerations of block and wedge have the same component perpendicular to the contact surface." }
core:
  idea: 'Connected bodies are not free: a taut string, a rigid rod or a surface in contact ties their motions together. Write the tie as an equation between lengths or velocities, differentiate it to link the accelerations, and use it alongside F = ma for each body.'
  formulas:
    - tex: 'n_1a_1 + n_2a_2 + \cdots = 0'
      label: 'String of fixed length: n is the number of strands on each body, a measured along the string in one sense'
    - tex: 'v_A\cos\alpha = v_B\cos\beta'
      label: 'Rigid rod or straight taut string: velocity components along it are equal'
    - tex: '(\vec a_1 - \vec a_2)\cdot\hat n = 0'
      label: 'Two bodies in contact: no relative acceleration perpendicular to the surface'
  conditions:
    - 'The string is inextensible and stays taut (tension greater than zero)'
    - 'Pulleys are light and smooth, so the tension is the same along the whole string'
    - 'Rods are rigid; surfaces stay in contact (the normal force stays above zero)'
    - 'All motions measured in one inertial frame (see the next lesson for accelerating frames)'
  sign: 'Pick one positive direction for each body and write the constraint with that choice. Test it against a picture: if A goes down, does B go up? Most wrong answers here come from a wrong sign or a missing factor of 2 in the constraint, not from the forces.'
outcomes:
  - 'Predict how far and which way a body moves when a connected body moves, for strings over fixed and movable pulleys'
  - 'Write the length of a string as a sum of segments and differentiate it to relate speeds and accelerations'
  - 'Solve a pulley problem by combining free-body diagrams with the constraint, counting equations against unknowns'
  - 'Use the rod rule and the contact rule for ladders, wedges and strings pulled at an angle'
  - 'Check an answer with energy, and recognise when a string would go slack'
opener:
  story: |
    A mechanic in a garage hangs a car engine from a chain, passes the chain over some pulleys, and lifts it with one hand. The engine weighs about 200 kg. She is not especially strong. The catch: to raise the engine by one metre, she has to pull four metres of chain through her fingers.

    Nothing about this is magic, and nothing is lost. It is a bookkeeping fact about chain. If the chain cannot stretch, the total length of chain is fixed, so every metre that the engine rises must be paid for by chain that moves somewhere else. Count the strands, and you know the exchange rate.

    That is the whole idea of this lesson. Whenever bodies are joined by ropes, rods or touching surfaces, **their motions are not independent**, and one cheap sentence about geometry can replace pages of algebra.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A block and tackle: the free end of the rope moves four times as far as the load"><line x1="40" y1="24" x2="280" y2="24" style="stroke:var(--ink);stroke-width:2"/><circle cx="110" cy="48" r="12" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><circle cx="160" cy="48" r="12" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><circle cx="110" cy="128" r="12" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><circle cx="160" cy="128" r="12" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><path d="M98 48 L98 128 M122 48 L122 128 M148 48 L148 128 M172 48 L172 128" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M172 128 L172 200" style="fill:none;stroke:var(--chem);stroke-width:2"/><path d="M135 140 L135 168" style="stroke:var(--ink);stroke-width:2"/><rect x="112" y="168" width="46" height="34" rx="4" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="135" y="189" text-anchor="middle" style="font-size:10px;fill:var(--ink)">engine</text><path d="M240 120 L240 200" style="stroke:var(--chem);stroke-width:3"/><path d="M232 190 L240 202 L248 190" style="fill:none;stroke:var(--chem);stroke-width:3"/><text x="200" y="224" style="font-size:11px;fill:var(--muted)">pull 4 m of rope</text><text x="40" y="224" style="font-size:11px;fill:var(--muted)">lift 1 m</text></svg>'
life:
  - 'A block and tackle on a crane, a boat winch or a garage hoist gives a big lift for a small pull, paid for in rope.'
  - 'A window blind or curtain cord, a sash window with its weights and a lift with its counterweight are all strings tying two motions together.'
  - 'A fisherman reeling in a boat or a tow rope pulling a boat to a jetty at an angle: the boat moves faster than the hand pulls the rope.'
  - 'A ladder slipping down a wall: the top and the foot are tied by the fixed length of the ladder.'
  - 'A cable-stayed bridge and a ski-lift cable work only because the cable length is fixed and the tower fixes the geometry.'
models:
  - name: 'Conservation of a total'
    text: 'When a total is fixed (rope length, a budget, hours in a day), whatever one part gains another loses. Write the total down first; the rest is subtraction.'
  - name: 'Count the strands'
    text: 'Every gain in force from a machine is paid for in distance. The exchange rate is the number of supporting strands. Be suspicious of any claim that gives you more of both.'
  - name: 'Geometry before forces'
    text: 'Before asking what pushes what, ask what is allowed to move. A cheap restriction found first often removes half the unknowns.'
links:
  - leaf: 'phy/free-body-diagrams'
    name: 'Free-body diagrams'
    same: 'Both break a connected system into single bodies, each with its own forces and its own F = ma.'
    differs: 'Free-body diagrams give one equation per body per direction; constraints supply the extra equations that tie the bodies together. You need both to count equations equal to unknowns.'
  - leaf: 'phy/relative-motion'
    name: 'Relative motion'
    same: 'Subtracting velocities along a direction is exactly what the rod and wedge constraints do: relative speed along the rod is zero, and relative speed perpendicular to a surface is zero.'
    differs: 'Relative motion describes the same event from two viewpoints; a constraint is a physical restriction that decides what the motion can be.'
next:
  q: 'A bob hangs from the roof of a bus that is speeding up. The string tilts backward, yet nobody pushes the bob backward. So what holds the string at that angle?'
  leaf: 'phy/pseudo-forces'
  name: 'Pseudo forces'
symbols:
  - s: 'a'
    means: 'acceleration of a body (m/s²), written with a subscript for the body'
  - s: 'T'
    means: 'tension, the pull of a string on the body it is attached to (N)'
  - s: 'y_p'
    means: 'depth of a movable pulley below the ceiling (m)'
  - s: 'L'
    means: 'total length of a string (m), constant'
  - s: 'n'
    means: 'number of string strands attached to a body, a whole number'
  - s: '\alpha,\ \beta'
    means: 'angles between a velocity and the rod or string it is attached to (degrees)'
  - s: '\hat n'
    means: 'unit vector perpendicular to a contact surface (no unit)'
  - s: 'N'
    means: 'normal force, the push of a surface on a body (N)'
  - s: 'g'
    means: 'acceleration of free fall, 9.8 m/s²'
---

:::hook
q: A rope is fixed to the ceiling, runs down under a movable pulley that carries a heavy load, then goes up and over a fixed pulley to your hand. You pull the free end down by 1 m. How far does the load rise?
options: ["1 m, the same as your hand", "0.5 m", "2 m", "0.25 m"]
answer: 1
right: Right, 0.5 m. Two strands of rope hold up the movable pulley. To raise the load by 1 m, each strand must shorten by 1 m, 2 m of rope in all, and that rope can only come from your hand. So 1 m of hand movement buys 0.5 m of lift, and in return your pull needs only half the load's weight.
wrong: Count the strands that hold the movable pulley up. The rope has a fixed total length, so every metre the load rises takes rope out of two strands, 2 m in all. How far must your hand move to supply that?
:::

## A rope cannot stretch {lvl=1 id=s-rope label="Class 9"}

Start with the simplest machine: a rope over a fixed pulley, with a block at each end. Pull down on one block by 1 m and the other must rise by 1 m, no more, no less. The rope has a fixed length, and the pulley only turns it round the corner.

If it moves 1 m in 1 s, it moves at 1 m/s. If its speed grows by 2 m/s every second, the other block's speed grows at the same rate. So **the two blocks have equal speeds and equal accelerations, in opposite directions along the rope**. A table block pulled towards the edge by a hanging block follows the same rule: slide the table block 0.40 m towards the edge and the hanging block drops 0.40 m.

:::qc lvl=1
q: A string joins block A on a smooth table to block B hanging over the table edge. A moves 0.40 m towards the edge. How far does B fall?
options: ["0.20 m", "0.40 m", "0.80 m"]
answer: 1
right: Right. Whatever length of string leaves the table, goes down beside the edge: one for one.
wrong: The total length of string is fixed. If 0.40 m leaves the table top, where does it have to go?
:::

Now put numbers on the forces. Hang 3 kg and 5 kg masses at the two ends of a rope over a smooth fixed pulley, and let go. The heavier one goes down, the lighter one goes up, with the same acceleration $a$ and the same rope tension $T$ (a light rope over a smooth pulley pulls equally at both ends).

:::worked title="The two-mass pulley"
5 kg mass, taking down as positive: $5g - T = 5a$. 3 kg mass, taking up as positive: $T - 3g = 3a$. Add the two equations and $T$ disappears: $2g = 8a$, so $a = 2 \times 9.8/8 = 2.45$ m/s², and $T = 3(g + a) = 36.75$ N.

Notice what the constraint did. Without it we would have three unknowns ($a_1$, $a_2$, $T$) and two equations. The sentence "the rope does not stretch" gave $a_1 = a_2$ and closed the gap.
:::

## Count the strands {lvl=2 id=s-count label="Class 11"}

A movable pulley breaks the one-for-one rule, so we need a method rather than a trick. Here it is, and it works for every pulley puzzle you will meet.

1. Choose one direction (say, down from the ceiling) and measure each moving thing's position in that direction.
2. Write the total length of the rope as a sum of its straight pieces. A piece that hangs from a movable pulley shows up once for each strand.
3. The total is constant. Differentiate once for speeds and twice for accelerations.

For our opener, the rope is fixed to the ceiling, goes down round the movable pulley (depth $y_p$ below the ceiling), up over the fixed pulley, and down to the free end at depth $y_m$. Two strands hang from the movable pulley and one strand hangs to the mass, so the length is
$$L = y_p + y_p + y_m + \text{constant}.$$
Read it as: two strands of length $y_p$, one of length $y_m$, and a fixed part that goes over the pulleys. The constant does not change, so $2\,\Delta y_p + \Delta y_m = 0$, and the same holds for speeds and accelerations: $2a_p + a_m = 0$. The pulley moves half as far as the end of the rope, in the opposite direction.

:::figure caption="A movable pulley carrying a 4 kg load, rope fixed to the ceiling, then over a fixed pulley to a 5 kg mass. Two strands hold the movable pulley up, so it moves half as far as the 5 kg mass."
<svg viewBox="0 0 360 230" role="img" aria-label="Movable pulley with load, rope fixed at the ceiling and passing over a fixed pulley to a hanging mass">
<line class="ln" x1="150" y1="18" x2="300" y2="18"/>
<text x="14" y="40" style="font-size:9px">rope fixed here</text><line class="faint" x1="104" y1="36" x2="183" y2="22"/>
<line class="ray" x1="185" y1="18" x2="185" y2="100"/>
<circle class="ln m2" cx="195" cy="100" r="10"/>
<path class="ray" d="M185 100 A10 10 0 0 0 205 100"/>
<line class="ray" x1="205" y1="100" x2="205" y2="40"/>
<line class="ln" x1="215" y1="18" x2="215" y2="30"/>
<circle class="ln m2" cx="215" cy="40" r="10"/>
<path class="ray" d="M205 40 A10 10 0 0 1 225 40"/>
<line class="ray" x1="225" y1="40" x2="225" y2="120"/>
<rect class="obj" x="214" y="120" width="22" height="22"/>
<line class="ln" x1="195" y1="110" x2="195" y2="128"/>
<rect class="obj" x="184" y="128" width="22" height="22"/>
<text class="k" x="170" y="166">4 kg</text><text class="k" x="212" y="158">5 kg</text>
<text class="k" x="168" y="66">T</text><text class="k" x="209" y="74">T</text><text class="k" x="230" y="90">T</text>
<text x="20" y="196">load rises half as far as the mass falls,</text><text x="20" y="212">and moves the opposite way</text>
</svg>
:::

Now the forces. The rope is light, so the tension $T$ is the same all along it. The 5 kg mass has weight and one tension. The movable pulley is **light** (massless), so we can treat it and its 4 kg load as one body of mass 4 kg: gravity pulls it down with $4g$, and two strands pull it up, $2T$ in all. Take down as positive and let $a$ be the acceleration of the 5 kg mass. The load then has acceleration $a/2$ upward.

:::worked title="The 5 kg mass and the 4 kg load"
5 kg mass: $5g - T = 5a$.

Movable pulley with its load (two strands pull up with $T$ each): $2T - 4g = 4 \cdot \tfrac{a}{2} = 2a$.

From the first, $T = 5g - 5a$. Put it in the second: $10g - 10a - 4g = 2a$, so $a = 6g/12 = g/2 = 4.9$ m/s². The load rises with 2.45 m/s², and $T = 5(9.8 - 4.9) = 24.5$ N.

Check against intuition: $2T = 49$ N is more than the load's weight $4g = 39.2$ N, so the load does accelerate upward. And $a$ is half of $g$, not equal to it, because the 5 kg mass is not free to fall.
:::

:::qc lvl=2
q: Why does the movable pulley with its load get $2T$ from the rope, not $T$?
options: ["Because the pulley is heavy", "Because two strands of the same rope pull up on it, each with tension T", "Because the tension doubles when the rope goes round a pulley"]
answer: 1
right: Right. One rope, one tension, but it pulls up on the pulley in two places.
wrong: A smooth pulley does not change the tension. Count how many strands of rope the pulley is hanging from.
:::

## Equations against unknowns {lvl=2 id=s-recipe label="Class 11"}

You now have the recipe that solves nearly every connected-body problem in the syllabus:

- one free-body diagram per body (or per pulley), one equation per direction of motion;
- one **constraint** per string, rod or contact;
- one tension per string (the same along it when the string and pulleys are light and smooth).

Then **count**: unknowns (each body's acceleration, each tension, each normal force) against equations. If they do not match, a constraint is missing. If you have more equations than unknowns, check a sign.

:::worked title="Table block and hanging block"
A 4 kg block sits on a smooth table and is tied over the edge to a 1 kg block. Constraint: same $a$ for both. Hanging block: $g - T = a$. Table block: $T = 4a$. Add: $g = 5a$, so $a = 1.96$ m/s² and $T = 4 \times 1.96 = 7.84$ N.

The tension (7.84 N) is less than the hanging block's weight (9.8 N). That is exactly why it accelerates down: a string that merely supported it would have $T = 9.8$ N.
:::

## When the surface moves too {lvl=3 id=s-wedge label="JEE"}

A block sliding down the face of a wedge that is itself free to slide on the floor is the classic JEE constraint problem. The block cannot sink into the wedge, and it cannot leave it, so the **motion of the block relative to the wedge is along the face**. Put differently: the component of the two accelerations **perpendicular to the face is the same**, and only the component along the face can differ.

Take a 1.0 kg block on a 30° smooth wedge of mass 4.0 kg. Let the wedge accelerate sideways with $A$ and the block slide down the face with acceleration $a_r$ relative to the wedge. Then the block's acceleration seen from the floor has a horizontal part $a_r\cos\theta - A$ and a downward part $a_r\sin\theta$.

:::figure caption="A block slides down a movable wedge. The normal force N on the block is perpendicular to the face; by the third law the block pushes the wedge with the same N, so the wedge slides away."
<svg viewBox="0 0 360 230" role="img" aria-label="Block on a movable wedge with normal force and accelerations marked">
<defs><marker id="crw1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="crw2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="30" y1="190" x2="340" y2="190"/>
<polygon class="ln m2" points="70,190 290,190 70,70"/>
<g transform="translate(158 118) rotate(28.6)"><rect class="obj" x="-14" y="-22" width="28" height="22"/></g>
<line class="ray" x1="158" y1="118" x2="177" y2="82" marker-end="url(#crw1)"/><text class="k" x="182" y="82">N</text>
<line class="wf" x1="176" y1="128" x2="222" y2="152" marker-end="url(#crw2)"/><text class="k" x="226" y="152">a_r</text>
<line class="ray" x1="200" y1="210" x2="150" y2="210" marker-end="url(#crw1)"/><text class="k" x="120" y="214">A</text>
<text x="256" y="182">30°</text>
<text x="30" y="30">block's motion relative to the wedge</text><text x="30" y="46">is along the face; no sinking in, no leaving</text>
</svg>
:::

Two equations from the block's motion and one from the wedge's (the horizontal force $N\sin\theta$ is the only thing pushing the wedge):

- Wedge: $MA = N\sin\theta$.
- Block, horizontal: $m(a_r\cos\theta - A) = N\sin\theta$.
- Block, vertical: $mg - N\cos\theta = m\,a_r\sin\theta$.

Solving: $N = \dfrac{mMg\cos\theta}{M + m\sin^2\theta}$, and the wedge's acceleration is
$$A = \frac{N\sin\theta}{M} = \frac{mg\sin\theta\cos\theta}{M + m\sin^2\theta}.$$
Read it as: the wedge moves faster when the block is heavy compared with the wedge, and not at all when the wedge is enormously heavy. Putting in the numbers, $A = \dfrac{1.0 \times 9.8 \times 0.5 \times 0.866}{4.0 + 0.25} = 0.998$ m/s². Check: if $M \to \infty$, then $A \to 0$ and $a_r \to g\sin\theta$, the familiar fixed-wedge result.

:::qc lvl=3
q: A block slides down a smooth wedge that is free to move on a smooth floor. Compared with a fixed wedge, the normal force on the block is
options: ["larger", "smaller", "the same"]
answer: 1
right: Right. The wedge gives way, so it does not push back as hard: N = mMg cosθ/(M + m sin²θ) is below mg cosθ.
wrong: Compare N = mg cosθ for a fixed wedge with N = mMg cosθ/(M + m sin²θ). The denominator is bigger than M, so N is smaller. A support that moves away pushes back less.
:::

## Rods, ladders and strings at an angle {lvl=3 id=s-rod label="JEE"}

A rigid rod keeps its length. That does not mean its two ends move at the same speed. It means their **components along the rod are equal**: if one end advanced along the rod faster than the other, the rod would have to shorten or lengthen. The sideways parts, perpendicular to the rod, are free (that is what rotation is).

The same rule holds for a taut straight string, such as a rope from a pier to a boat.

:::worked title="The sliding ladder"
A 2.0 m ladder leans on a smooth wall, and its top slides down at 3.0 m/s. When the ladder makes 30° with the floor, how fast does the foot move out? The top moves vertically, so its component along the ladder is $v_A\sin30^\circ$. The foot moves horizontally, with component $v_B\cos30^\circ$ along the ladder. Equal components give
$$v_B\cos30^\circ = v_A\sin30^\circ \quad\Rightarrow\quad v_B = v_A\tan30^\circ = 3.0 \times 0.577 = 1.73\ \text{m/s}.$$
The length of the ladder does not enter: it only fixes the angle. (Check with coordinates: $x^2 + y^2 = L^2$ gives $x\dot x = -y\dot y$, so $\dot x = (y/x)\,|\dot y| = \tan30^\circ \times 3.0$.)
:::

:::figure caption="The ladder cannot lengthen: the components of the two end velocities along the ladder (dotted) are equal. The foot goes faster than the top when the ladder is flat, slower when it is steep."
<svg viewBox="0 0 360 230" role="img" aria-label="Ladder against a wall with the velocities of top and foot">
<defs><marker id="crl1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="crl2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="60" y1="20" x2="60" y2="200"/><line class="ln" x1="60" y1="200" x2="330" y2="200"/>
<line class="ln" x1="60" y1="80" x2="200" y2="200" style="stroke-width:4"/>
<circle class="obj" cx="60" cy="80" r="4"/><circle class="obj" cx="200" cy="200" r="4"/>
<line class="ray" x1="60" y1="80" x2="60" y2="138" marker-end="url(#crl1)"/><text class="k" x="68" y="137">v_A</text>
<line class="ray" x1="200" y1="200" x2="250" y2="200" marker-end="url(#crl1)"/><text class="k" x="252" y="195">v_B</text>
<line class="wf" x1="60" y1="80" x2="89" y2="105" marker-end="url(#crl2)"/><line class="wf" x1="200" y1="200" x2="229" y2="225" marker-end="url(#crl2)"/>
<text x="150" y="150">ladder</text>
<text x="140" y="190">θ</text>
<text x="80" y="56">same component along the ladder</text>
</svg>
:::

A second favourite is the **rope pulled at an angle**. A boat is hauled in by a rope running to a pulley on the pier, 3.0 m above the boat's deck. You pull the free end at 2.0 m/s. When the boat is 4.0 m from the point directly below the pulley, the rope is 5.0 m long and makes an angle with $\cos\theta = 4/5$ to the water. The rope shortens at 2.0 m/s, and that is the component of the boat's velocity along the rope: $v_{boat}\cos\theta = 2.0$, so the boat moves at $2.0/0.8 = 2.5$ m/s. The boat moves faster than your hand, and faster still as it nears the pier, where $\cos\theta \to 0$.

:::qc lvl=3
q: A boat is pulled in by a rope at constant speed v. As the boat approaches the pier, its speed
options: ["stays equal to v", "increases", "decreases"]
answer: 1
right: Right. The boat's speed is v/cosθ, and θ grows as the boat gets closer, so cosθ shrinks and the speed grows. The boat is not pulled at constant speed even though you pull at a constant rate.
wrong: Only the component of the boat's velocity along the rope equals v. As the boat nears the pier, the rope is steeper, so a given rope speed needs a faster boat. Check v/cosθ.
:::

## Check with energy, and when strings go slack {lvl=4 id=s-energy label="Olympiad"}

Constraints give an independent check. For smooth surfaces and light pulleys, no energy is lost: the work gravity does equals the kinetic energy of the moving parts, with speeds tied by the constraint. Take the 5 kg mass and 4 kg load from before. When the 5 kg mass has fallen $y$, the load has risen $y/2$ and moves at half the speed $v$:
$$5gy - 4g\,\tfrac{y}{2} = \tfrac12(5)v^2 + \tfrac12(4)\left(\tfrac{v}{2}\right)^2 \;\Rightarrow\; 3gy = 3v^2.$$
Read it as: the energy released (left) is shared among the moving parts (right). So $v^2 = gy$. For constant acceleration, $v^2 = 2ay$, so $a = g/2$, the same answer we got from forces. If the two methods ever disagree, a constraint has a wrong factor.

One more fact the equations will not tell you: a string can pull but cannot push. The constraint "the string is taut" holds only while $T \ge 0$. If your solution gives a negative tension, the string goes slack, the bodies fly free of one another, and the constraint no longer applies. A bead on a rod behaves differently, because a rod can push, so the contact constraint works in both directions. The same holds for contact: it holds only while $N \ge 0$. For a ladder sliding from the vertical on smooth surfaces, the wall pushes only while $N \ge 0$, and the top leaves the wall when it has fallen to two-thirds of its starting height (the problem set asks you to prove it).

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A rope that cannot stretch has fixed length: what one end loses, another gains. {lvl=1}
2. Over a fixed pulley, the two ends have equal speeds and accelerations, in opposite directions. {lvl=1}
3. Write the rope length as a sum of segments, count a strand once for each time it hangs from a movable pulley, set the total constant and differentiate. {lvl=2}
4. A light movable pulley with a load feels $2T$ from the rope; its load moves half as far as the free end. {lvl=2}
5. Free-body diagrams plus constraints: count equations against unknowns. {lvl=2}
6. A block on a movable wedge: the accelerations have equal components perpendicular to the face. {lvl=3}
7. Rigid rod or straight taut string: the velocity components along it are equal. {lvl=3}
8. Check with energy; negative tension means the string has gone slack. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Writing $a_1 = a_2$ for blocks around a movable pulley. Count strands first. {lvl=2}
- Forgetting that the tension is the same only for a light rope over smooth light pulleys. A heavy pulley or a rough one changes it. {lvl=2}
- Using equal speeds for the two ends of a rod (instead of equal components along it). {lvl=3}
- Mixing positive directions: pick one per body and write the constraint with that choice. {lvl=1}
- Ignoring slackening: a negative tension in your answer means the string is not taut. {lvl=4}
:::
