---
title: Vectors in motion
summary: 'Why "5 km" is not enough when you travel, and the arrows that let you describe any motion exactly.'
ncert: ["Class 11 Physics · Ch 3 Motion in a Plane (§3.2–3.8)"]
up_to: Olympiad
builds_on: [Equations of motion, Motion graphs, Trigonometric ratios, Pythagoras' theorem]
notes_prompt: Explain in your own words why the velocity of a particle always points along the tangent to its path, while its acceleration can point in any direction, and what each part of the acceleration does.
margin:
  - kind: history
    title: History
    text: The rule for combining forces by a triangle appears in the work of Simon Stevin in the late sixteenth century. The vector notation used today (dot and cross products, i, j, k) was shaped in the 1880s by J. Willard Gibbs and Oliver Heaviside, who pared down Hamilton's quaternions into a toolkit for physics.
  - kind: tip
    title: Board favourite
    text: "Know the resultant formula with its special cases: R² = A² + B² + 2AB cos θ gives A + B at 0°, √(A² + B²) at 90° and |A − B| at 180°. The direction is tan α = B sin θ / (A + B cos θ), measured from A."
  - kind: olympiad
    title: Olympiad link
    text: Many olympiad kinematics problems become easy with two ideas from this lesson. Write the acceleration as dv/dt along the path plus v²/ρ towards the centre of curvature. In polar coordinates, remember that the unit vectors themselves turn.
books:
  - { title: "NCERT Physics Class XI Part 1", ref: "Ch 3 Motion in a Plane, §3.2–3.8" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 2 Physics and Mathematics (vectors); Ch 3 Rest and Motion: Kinematics [Unverified chapter numbers]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 1 · 1.1 Kinematics [Unverified]" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "chapters Vectors; Motion in Two and Three Dimensions [Unverified]" }
cards:
  - { front: "Magnitude and direction of the resultant of A and B at angle θ?", back: "$R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$; $\\tan\\alpha = \\dfrac{B\\sin\\theta}{A + B\\cos\\theta}$, with $\\alpha$ measured from $\\mathbf A$." }
  - { front: "Components of a vector of magnitude A at angle θ to the x-axis?", back: "$A_x = A\\cos\\theta$, $A_y = A\\sin\\theta$; back again: $A = \\sqrt{A_x^2 + A_y^2}$, $\\tan\\theta = A_y/A_x$." }
  - { front: "Constant-acceleration equations in vector form?", back: "$\\mathbf v = \\mathbf v_0 + \\mathbf a t$ and $\\mathbf r = \\mathbf r_0 + \\mathbf v_0 t + \\tfrac12\\mathbf a t^2$: each splits into an independent $x$ and $y$ equation." }
  - { front: "Rate of change of speed in terms of v and a?", back: "$\\dfrac{dv}{dt} = \\dfrac{\\mathbf v\\cdot\\mathbf a}{v}$. The speed is momentarily constant when $\\mathbf v \\perp \\mathbf a$." }
  - { front: "Radius of curvature of a path from v and a?", back: "$\\rho = \\dfrac{v^3}{|\\mathbf v\\times\\mathbf a|} = \\dfrac{v^3}{|v_x a_y - v_y a_x|}$, since $a_n = v^2/\\rho$." }
  - { front: "Acceleration in polar coordinates?", back: "$\\mathbf a = (\\ddot r - r\\dot\\theta^2)\\,\\hat{\\mathbf r} + (r\\ddot\\theta + 2\\dot r\\dot\\theta)\\,\\hat{\\boldsymbol\\theta}$." }
core:
  idea: 'A vector quantity has magnitude and direction and adds by the triangle (parallelogram) rule. In components every vector equation splits into independent equations, one per axis. Velocity $\mathbf v = d\mathbf r/dt$ is tangent to the path; acceleration $\mathbf a = d\mathbf v/dt$ can point anywhere, with one part changing the speed and the other turning the motion.'
  formulas:
    - tex: 'R = \sqrt{A^2 + B^2 + 2AB\cos\theta}'
      label: 'Resultant of two vectors'
    - tex: '\mathbf A = A_x\hat{\mathbf i} + A_y\hat{\mathbf j},\quad A_x = A\cos\theta,\ A_y = A\sin\theta'
      label: 'Resolution into components'
    - tex: '\mathbf v = \mathbf v_0 + \mathbf a t,\qquad \mathbf r = \mathbf r_0 + \mathbf v_0 t + \tfrac12\mathbf a t^2'
      label: 'Constant acceleration in a plane'
  conditions:
    - 'Flat (Euclidean) space, with axes fixed in one frame: the unit vectors i, j do not rotate'
    - 'The body is treated as a point particle'
    - 'The last pair of equations needs the acceleration vector constant in both magnitude and direction'
  sign: '|Δr| is not the path length and |Δv| is not the change in speed. (v₁ + v₂)/2 equals the average velocity only when the acceleration is constant.'
outcomes:
  - 'Tell scalars from vectors, and add or subtract vectors by the triangle and parallelogram rules'
  - 'Resolve vectors into components and add them analytically, with the law of cosines and the law of sines'
  - 'Write position, velocity and acceleration as vectors and solve constant-acceleration motion in a plane axis by axis'
  - 'Split acceleration into tangential and normal parts with the dot product, and find extreme speeds'
  - 'Find the radius of curvature and use polar components for motion described by rotating unit vectors'
opener:
  story: |
    Your phone's walking map says the market is a 7 km walk: 3 km east along the canal, then 4 km north up the main road. A friend with a drone says the market is only **5 km** from your door. You check. The map is right, and so is the drone.

    How can 3 and 4 add up to 5? Nobody is cheating. Distance, the number your feet count, and the straight-line gap, the number a crow counts, are different things. And the crow's number depends on a thing a plain number cannot hold: **which way** each leg points.

    That one idea (a quantity that carries a direction inside it) is the language in which all of motion, forces, fields and waves are written. Once you can think in arrows, a thrown ball, a boat crossing a river and a plane in a crosswind become the same puzzle.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A walk 3 km east then 4 km north, and the 5 km straight line from start to market"><line x1="40" y1="190" x2="200" y2="190" style="stroke:var(--c);stroke-width:3"/><line x1="200" y1="190" x2="200" y2="60" style="stroke:var(--c);stroke-width:3"/><line x1="40" y1="190" x2="200" y2="60" style="stroke:var(--chem);stroke-width:3;stroke-dasharray:7 5"/><circle cx="40" cy="190" r="6" style="fill:var(--ink)"/><circle cx="200" cy="60" r="7" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="194" y="182" width="12" height="8" style="fill:none;stroke:var(--muted)"/><text x="30" y="212" style="font-size:11px;fill:var(--ink)">your door</text><text x="212" y="64" style="font-size:11px;fill:var(--ink)">market</text><text x="86" y="208" style="font-size:11px;fill:var(--c)">3 km east</text><text x="206" y="130" style="font-size:11px;fill:var(--c)">4 km north</text><text x="60" y="118" style="font-size:11px;fill:var(--chem)">5 km as the crow flies</text><text x="40" y="232" style="font-size:11px;fill:var(--muted)">3 + 4 = 5, when directions differ</text></svg>'
symbols:
  - s: '\mathbf{A},\ \mathbf{B}'
    means: 'two vectors: arrows that have both a size and a direction'
  - s: 'A,\ B'
    means: 'the size (magnitude) of each vector, in the quantity''s unit'
  - s: '\theta'
    means: 'the angle between two vectors, or between a vector and the x-axis (degrees or radians)'
  - s: 'R'
    means: 'size of the resultant: the single vector equal to A and B added'
  - s: '\hat{\mathbf i},\ \hat{\mathbf j}'
    means: 'unit vectors: arrows of length 1 pointing along the x and y axes (no unit)'
  - s: 'A_x,\ A_y'
    means: 'components: how much of the vector lies along the x and the y axis (same unit as A)'
  - s: '\mathbf{r}'
    means: 'position vector: the arrow from the origin to the object (metres, m)'
  - s: '\mathbf{v}'
    means: 'velocity vector: how fast and which way the position changes (m/s)'
  - s: '\mathbf{a}'
    means: 'acceleration vector: how fast and which way the velocity changes (m/s²)'
  - s: 't'
    means: 'time (seconds, s)'
  - s: '\rho'
    means: 'radius of curvature: the radius of the circle that best fits the path at a point (m)'
life:
  - 'A map app shows two numbers for the same trip, the distance you walk and the straight-line gap; displacement is the second one.'
  - 'A pilot flying north in a westerly wind must point the plane partly into the wind: the plane''s velocity and the wind''s add as vectors, and the ground track is their sum.'
  - 'A cricket fielder running to catch a skier adds his own running velocity to the ball''s; judging that sum is what makes a good catch look easy.'
  - 'Two people pulling a stuck auto-rickshaw with ropes at an angle push less per rope the wider they stand, because only the part of each pull along the road helps.'
  - 'Drone and rocket controllers handle each axis separately, then combine the three results into one path.'
models:
  - name: 'Break the problem into independent axes'
    text: 'A hard two-way problem becomes two easy one-way problems, if the two directions do not interfere. Budgeting does this too: split spending into categories and handle each on its own, then combine.'
  - name: 'Direction matters as much as size'
    text: 'Two efforts of equal size can add, cancel or do something in between, depending on how well aligned they are. In a team, a hundred people pulling in different directions achieve less than ten pulling together.'
  - name: 'Choose the coordinates that make the problem easy'
    text: 'The physics is the same whichever axes you pick, but the work is not. Put the x-axis along the slope, along the wind, or along the road, and half the terms vanish.'
links:
  - leaf: 'phy/relative-motion'
    name: 'Relative motion'
    same: 'The velocity of a boat relative to the bank is the boat''s velocity relative to the water plus the water''s velocity relative to the bank. It is the same triangle rule, used for velocities.'
    differs: 'Here we add arrows within one frame of reference; there the arrows belong to different observers, and the choice of observer is the whole problem.'
  - leaf: 'phy/coulombs-law'
    name: 'Coulomb''s law'
    same: 'Forces from several charges add as vectors, just like displacements: break each into components, add component by component.'
    differs: 'Displacements are measured along a path you travelled; forces are measured at one point, and each force depends on where its source sits.'
next:
  q: 'If you throw a ball sideways and drop another from the same height at the same instant, which one hits the ground first? And what shape does the thrown ball''s path take?'
  leaf: 'phy/projectile-motion'
  name: 'Projectile motion'
---

:::hook
q: So take 3 + 4 = 5 seriously. Two people each pull a heavy box with a force of 10 N. Can their combined pull on the box be exactly 10 N?
options: ["No, the net pull is always 20 N", "Yes, if the two ropes are 120° apart", "Yes, if the two ropes are at right angles", "No, it can only lie between 10 N and 20 N"]
answer: 1
right: Right, and it is the same trick as the walk. At 120° the two 10 N pulls and their resultant form an equilateral triangle, so the resultant is also 10 N. At right angles it would be about 14 N, and with the ropes pulling in opposite directions it would be zero.
wrong: Forces carry direction, so they do not simply add as numbers, just like the 3 km and 4 km legs. Two 10 N pulls give anything from 0 N (opposite) to 20 N (together); at 120° the three forces form an equilateral triangle, and the resultant is exactly 10 N.
:::

## Why direction matters {lvl=1 id=s-why label="Class 10"}

Walk 3 km east and then 4 km north. You have walked 7 km, but you are only 5 km from where you started. The 3 and the 4 did not add to 7, because they pointed in different directions.

In a straight line, a sign was enough to show direction: $+$ for forwards and $-$ for backwards. In a plane there are infinitely many directions, so a sign is no longer enough. We need a quantity that carries a **direction** as well as a **magnitude** (size). That is a vector.

- A **scalar** is fully given by one number with its unit: mass, time, temperature, distance, speed, energy. Scalars add like ordinary numbers.
- A **vector** has a magnitude and a direction, *and* it combines with other vectors by the triangle rule of the next section. Displacement, velocity, acceleration and force are vectors.

The second condition matters. Electric current in a wire has a direction, yet currents meeting at a junction simply add as numbers, so current is a scalar. Having a direction is not enough; the quantity must also combine by the triangle rule.

Distance and **displacement** are the first pair to keep apart. Distance is the length of the path, a scalar. Displacement is the straight arrow from the start to the finish. For the walk above the distance is 7 km and the displacement is 5 km towards the north-east (about $53^\circ$ north of east).

:::qc
q: An athlete runs exactly one lap of a 400 m circular track and stops where she started. What are her distance and the magnitude of her displacement?
options: ["400 m and 0 m", "400 m and 400 m", "0 m and 400 m", "400 m and 127 m"]
answer: 0
right: Right. Distance is the length of the path, 400 m. Displacement joins the start to the finish, which coincide, so it is zero.
wrong: Distance counts every metre run. Displacement is only the straight arrow from start to finish, and here the start and finish are the same point.
:::

## Adding and subtracting vectors {lvl=2 id=s-add label="Class 11"}

Displacements show how vectors must add. Go from $O$ to $P$ (displacement $\mathbf A$), then from $P$ to $Q$ (displacement $\mathbf B$). The single trip from $O$ to $Q$ does the same job, so it is the sum: $\mathbf R = \mathbf A + \mathbf B$.

That is the **triangle rule**: place the tail of $\mathbf B$ at the head of $\mathbf A$; the sum runs from the tail of $\mathbf A$ to the head of $\mathbf B$. Equivalently, draw both from one point and complete the parallelogram; the diagonal from that point is the sum (the **parallelogram rule**).

:::figure caption="Left: triangle rule, B placed head-to-tail after A. Right: parallelogram rule, A and B drawn from one point; the diagonal is the same R."
<svg viewBox="0 0 370 185" role="img" aria-label="Triangle and parallelogram construction of the sum of two vectors">
<defs>
<marker id="vmA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker>
<marker id="vmB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker>
<marker id="vmR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<line x1="30" y1="150" x2="140" y2="110" style="stroke:var(--phy);stroke-width:2" marker-end="url(#vmA)"/>
<line x1="140" y1="110" x2="180" y2="40" style="stroke:var(--chem);stroke-width:2" marker-end="url(#vmB)"/>
<line x1="30" y1="150" x2="180" y2="40" style="stroke:var(--ink);stroke-width:2.2" marker-end="url(#vmR)"/>
<text class="k" x="88" y="148">A</text><text class="k" x="168" y="84">B</text><text class="k" x="88" y="88">R = A + B</text>
<text x="50" y="176">triangle rule</text>
<line x1="200" y1="150" x2="310" y2="110" style="stroke:var(--phy);stroke-width:2" marker-end="url(#vmA)"/>
<line x1="200" y1="150" x2="240" y2="80" style="stroke:var(--chem);stroke-width:2" marker-end="url(#vmB)"/>
<line class="faint" x1="310" y1="110" x2="350" y2="40" style="stroke-dasharray:4 3"/>
<line class="faint" x1="240" y1="80" x2="350" y2="40" style="stroke-dasharray:4 3"/>
<line x1="200" y1="150" x2="350" y2="40" style="stroke:var(--ink);stroke-width:2.2" marker-end="url(#vmR)"/>
<text class="k" x="258" y="146">A</text><text class="k" x="204" y="108">B</text><text class="k" x="282" y="86">R</text>
<text x="226" y="140">θ</text>
<text x="222" y="176">parallelogram rule</text>
</svg>
:::

Three facts follow from the picture:

- **Order does not matter**: $\mathbf A + \mathbf B = \mathbf B + \mathbf A$ (the two halves of the parallelogram). Grouping does not matter either: $(\mathbf A + \mathbf B) + \mathbf C = \mathbf A + (\mathbf B + \mathbf C)$.
- Vectors that add to zero form a **closed polygon**: walk all of them head to tail and you return to the start. The **null vector** $\mathbf 0$ has zero magnitude and no definite direction; $\mathbf A + (-\mathbf A) = \mathbf 0$.
- A side of a triangle is never longer than the other two together, so $|\mathbf A + \mathbf B| \le A + B$. It also cannot be shorter than their difference, so $|\mathbf A + \mathbf B| \ge |A - B|$. Equality holds only when the vectors are parallel or antiparallel.

**Subtraction** is addition of the negative: $\mathbf A - \mathbf B = \mathbf A + (-\mathbf B)$, where $-\mathbf B$ has the same magnitude as $\mathbf B$ and the opposite direction. In the parallelogram, $\mathbf A - \mathbf B$ is the *other* diagonal, running from the head of $\mathbf B$ to the head of $\mathbf A$. Ask "what must I add to $\mathbf B$ to get $\mathbf A$?" and you have $\mathbf A - \mathbf B$.

:::qc
q: The sum of four vectors a + b + c + d is zero. Which statement must be true?
options: ["a, b, c and d each have zero magnitude", "The magnitude of a equals the magnitude of b + c + d", "a + c is always zero", "Each vector is parallel to one of the others"]
answer: 1
right: Right. From $\mathbf a = -(\mathbf b + \mathbf c + \mathbf d)$, the magnitudes are equal. The four vectors just form a closed quadrilateral, so none needs to vanish or be parallel to another.
wrong: Vectors adding to zero form a closed polygon; they need not vanish. Rearranged, $\mathbf a = -(\mathbf b + \mathbf c + \mathbf d)$, so only the magnitudes of $\mathbf a$ and $\mathbf b + \mathbf c + \mathbf d$ must match.
:::

## Unit vectors and components {lvl=2 id=s-components label="Class 11"}

Drawing triangles works, but it is slow and inexact. The way out is to describe every vector by numbers along fixed axes.

**Multiplying by a number.** $\lambda\mathbf A$ is a vector along $\mathbf A$ with magnitude $|\lambda| A$; for negative $\lambda$ it points the opposite way. Displacement $=$ velocity $\times$ time is an example: a vector multiplied by a scalar that has a unit.

A **unit vector** has magnitude 1 and only marks a direction: $\hat{\mathbf A} = \mathbf A/A$. Along the axes we write $\hat{\mathbf i}$, $\hat{\mathbf j}$ and $\hat{\mathbf k}$ for $x$, $y$ and $z$.

**Resolution.** Any vector in the plane is a sum of a piece along $x$ and a piece along $y$:

:::figure caption="Resolving A into components. Dropping perpendiculars onto the axes gives A_x = A cos θ and A_y = A sin θ."
<svg viewBox="0 0 300 200" role="img" aria-label="A vector at angle theta to the x-axis with its x and y components">
<defs>
<marker id="vmC1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker>
<marker id="vmC2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker>
</defs>
<line class="axis" x1="40" y1="170" x2="285" y2="170"/><line class="axis" x1="40" y1="170" x2="40" y2="15"/>
<text x="276" y="186">x</text><text x="26" y="22">y</text>
<line class="faint" x1="220" y1="60" x2="220" y2="170" style="stroke-dasharray:4 3"/>
<line class="faint" x1="220" y1="60" x2="40" y2="60" style="stroke-dasharray:4 3"/>
<line x1="40" y1="170" x2="220" y2="60" style="stroke:var(--phy);stroke-width:2.2" marker-end="url(#vmC1)"/>
<line x1="40" y1="170" x2="218" y2="170" style="stroke:var(--chem);stroke-width:2.2" marker-end="url(#vmC2)"/>
<line x1="40" y1="170" x2="40" y2="62" style="stroke:var(--chem);stroke-width:2.2" marker-end="url(#vmC2)"/>
<path class="pen" d="M80 170 A40 40 0 0 0 74.1 149.2" style="fill:none"/>
<text x="84" y="162">θ</text>
<text class="k" x="124" y="104">A</text>
<text x="104" y="190">A_x = A cos θ</text>
<text x="46" y="52">A_y = A sin θ</text>
</svg>
:::

$$\mathbf A = A_x\hat{\mathbf i} + A_y\hat{\mathbf j},\qquad A_x = A\cos\theta,\quad A_y = A\sin\theta .$$

Going back, Pythagoras and the tangent give

$$A = \sqrt{A_x^2 + A_y^2},\qquad \tan\theta = \frac{A_y}{A_x}.$$

The components $A_x$ and $A_y$ are scalars with signs; they depend on the axes you chose, while the vector itself does not. Check the quadrant from the signs of $A_x$ and $A_y$, since $\tan\theta$ alone cannot tell $(3, 4)$ from $(-3, -4)$.

Any two non-parallel directions can serve, not only perpendicular axes. With oblique directions, though, the pieces are *not* $A\cos\theta$; you must complete the parallelogram and use the law of sines. Perpendicular axes are chosen because they make each component independent of the other.

:::qc
q: What are the magnitude and direction of the vector î + ĵ?
options: ["√2, at 45° to the x-axis", "2, at 45° to the x-axis", "1, along the line y = x", "√2, at 90° to the x-axis"]
answer: 0
right: Right. Both components are 1, so the magnitude is $\sqrt{1^2 + 1^2} = \sqrt2$ and $\tan\theta = 1$ gives $45^\circ$. A sum of two unit vectors is not itself a unit vector.
wrong: Use $A = \sqrt{A_x^2 + A_y^2} = \sqrt2$ and $\tan\theta = A_y/A_x = 1$.
:::

## Adding by components {lvl=2 id=s-analytic label="Class 11"}

Once vectors are written in components, addition is just addition along each axis:

$$\mathbf A + \mathbf B = (A_x + B_x)\,\hat{\mathbf i} + (A_y + B_y)\,\hat{\mathbf j}.$$

This works because the $\hat{\mathbf i}$ parts and the $\hat{\mathbf j}$ parts never mix. A vector equation in the plane is really **two scalar equations**, one for each axis. That single idea carries all of kinematics in two dimensions.

Apply it to two vectors at angle $\theta$. Put $\mathbf A$ along $x$. Then $R_x = A + B\cos\theta$ and $R_y = B\sin\theta$, so

:::law caption="Resultant of A and B with angle θ between them; α is the angle of R measured from A."
$$R = \sqrt{A^2 + B^2 + 2AB\cos\theta},\qquad \tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}$$
:::

This is the law of cosines (NCERT Example 3.2). In the triangle of $\mathbf A$, $\mathbf B$ and $\mathbf R$, the law of sines also holds: $R/\sin\theta = B/\sin\alpha = A/\sin\beta$, where $\beta = \theta - \alpha$ is the angle $\mathbf R$ makes with $\mathbf B$. For a difference, replace $\theta$ by $180^\circ - \theta$: $|\mathbf A - \mathbf B| = \sqrt{A^2 + B^2 - 2AB\cos\theta}$.

:::worked title="Three legs of a walk"
A hiker walks 4 km east, then 6 km at $30^\circ$ north of east, then 2 km due west. Where does she end up?

Components (east $= x$, north $= y$):

| Leg | $x$ (km) | $y$ (km) |
|---|---|---|
| 4 km east | 4 | 0 |
| 6 km at 30° N of E | $6\cos30^\circ = 5.20$ | $6\sin30^\circ = 3.00$ |
| 2 km west | $-2$ | 0 |
| **Sum** | **7.20** | **3.00** |

Magnitude $\sqrt{7.20^2 + 3.00^2} = 7.80$ km, at $\tan^{-1}(3.00/7.20) = 22.6^\circ$ north of east. The distance walked was 12 km.
:::

:::qc
q: Two vectors of magnitudes 5 and 8 are 60° apart. What is the magnitude of their sum?
options: ["about 11.4", "13", "7", "about 9.4"]
answer: 0
right: Right. $R^2 = 25 + 64 + 2(5)(8)(0.5) = 129$, so $R \approx 11.4$.
wrong: Use $R^2 = A^2 + B^2 + 2AB\cos\theta$ with $\cos60^\circ = 0.5$: $R^2 = 129$.
:::

## Position and velocity vectors {lvl=2 id=s-velocity label="Class 11"}

Choose an origin $O$. The **position vector** of a particle is the arrow from $O$ to the particle:

$$\mathbf r = x\,\hat{\mathbf i} + y\,\hat{\mathbf j}.$$

If the particle moves from $\mathbf r_1$ to $\mathbf r_2$ in time $\Delta t$, its **displacement** is $\Delta\mathbf r = \mathbf r_2 - \mathbf r_1$. The displacement does not depend on where you put the origin, though each position vector does.

The **average velocity** over the interval is

$$\bar{\mathbf v} = \frac{\Delta\mathbf r}{\Delta t},$$

a vector along the chord from the old position to the new one. Now shrink $\Delta t$. The chord swings round and settles along the tangent to the path at the starting point. The limit is the **instantaneous velocity**:

$$\mathbf v = \lim_{\Delta t\to0}\frac{\Delta\mathbf r}{\Delta t} = \frac{d\mathbf r}{dt} = \frac{dx}{dt}\,\hat{\mathbf i} + \frac{dy}{dt}\,\hat{\mathbf j} = v_x\hat{\mathbf i} + v_y\hat{\mathbf j}.$$

:::figure caption="As Δt shrinks, the displacement Δr (a chord) turns towards the tangent at P. In the limit, Δr/Δt becomes the velocity v, which is tangent to the path."
<svg viewBox="0 0 340 200" role="img" aria-label="A curved path with chords from P shrinking towards the tangent at P">
<defs>
<marker id="vmV1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker>
<marker id="vmV2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker>
</defs>
<path d="M20 180 C 80 60, 200 30, 320 70" style="fill:none;stroke:var(--ink);stroke-width:1.6"/>
<line class="faint" x1="300" y1="190" x2="50.8" y2="132" style="stroke-dasharray:4 3"/>
<line class="faint" x1="300" y1="190" x2="230.9" y2="53.4" style="stroke-dasharray:4 3"/>
<circle class="obj" cx="300" cy="190" r="3"/><text x="306" y="194">O</text>
<text x="176" y="176">r₁</text><text x="272" y="128">r₂</text>
<line x1="50.8" y1="132" x2="229" y2="53.8" style="stroke:var(--chem);stroke-width:1.6" marker-end="url(#vmV1)"/>
<line x1="50.8" y1="132" x2="130.5" y2="71.3" style="stroke:var(--chem);stroke-width:1.6" marker-end="url(#vmV1)"/>
<line x1="50.8" y1="132" x2="95.2" y2="77.9" style="stroke:var(--phy);stroke-width:2.4" marker-end="url(#vmV2)"/>
<circle class="obj" cx="50.8" cy="132" r="3.5"/><text x="30" y="140">P</text>
<circle class="obj" cx="230.9" cy="53.4" r="3"/><circle class="obj" cx="132" cy="70.9" r="3"/>
<text x="150" y="104">Δr (large Δt)</text><text x="104" y="100">Δr</text>
<text x="66" y="66">v (tangent)</text>
</svg>
:::

The magnitude of $\mathbf v$ is the **speed**, $v = \sqrt{v_x^2 + v_y^2}$, and its direction is $\tan\theta = v_y/v_x$. For the instantaneous values, speed equals the magnitude of velocity. For averages they differ: average speed is path length divided by time, and it is never less than $|\bar{\mathbf v}|$, because a path is never shorter than the chord.

:::qc
q: A taxi takes a passenger 23 km along a winding road in 28 min, to a hotel 10 km away in a straight line. Which is the magnitude of the average velocity?
options: ["about 21.4 km/h", "about 49.3 km/h", "about 35 km/h", "zero"]
answer: 0
right: Right. Average velocity uses the 10 km displacement: $10/(28/60) \approx 21.4$ km/h. The average speed, $23/(28/60) \approx 49.3$ km/h, is what the meter charges for.
wrong: Average velocity is displacement over time, $10\ \text{km}/(28/60\ \text{h})$. The 23 km path gives the average speed instead.
:::

## The acceleration vector {lvl=2 id=s-accel label="Class 11"}

Velocity can change in two ways: in **magnitude** (speeding up or slowing down) and in **direction** (turning). Either change is an acceleration. Defined the same way as velocity,

$$\mathbf a = \lim_{\Delta t\to0}\frac{\Delta\mathbf v}{\Delta t} = \frac{d\mathbf v}{dt} = \frac{dv_x}{dt}\,\hat{\mathbf i} + \frac{dv_y}{dt}\,\hat{\mathbf j}.$$

Here $\Delta\mathbf v = \mathbf v_2 - \mathbf v_1$ is found by vector subtraction. So the acceleration points along the *change* in velocity, not along the velocity itself.

Three pictures to keep in mind:

- **Along $\mathbf v$**: a car speeding up on a straight road. Only the speed changes.
- **Perpendicular to $\mathbf v$**: a car going round a bend at a steady 40 km/h. Only the direction changes; the speedometer reads constant, yet the car is accelerating. The [circular motion](#lesson~phy~circular-motion) lesson works this case out.
- **At an angle to $\mathbf v$**: a thrown ball. Gravity points down while the ball moves sideways, so the speed changes *and* the path bends.

In one dimension, $\mathbf a$ and $\mathbf v$ could only be parallel or antiparallel. In a plane they can make any angle, and that angle decides what happens to the speed: an acute angle speeds the particle up, an obtuse angle slows it down, and a right angle only turns it.

:::qc
q: A cyclist rides round a circular track at a constant speed of 5 m/s. Is she accelerating?
options: ["Yes, because the direction of her velocity keeps changing", "No, because her speed is constant", "Only if the track is banked", "Only when she speeds up"]
answer: 0
right: Right. Velocity is a vector, and its direction changes all the time on a circle. A change of direction is an acceleration, here pointing towards the centre.
wrong: Acceleration is the rate of change of the velocity vector. Turning changes the direction of the velocity, so it counts, even at constant speed.
:::

## Constant acceleration in a plane {lvl=2 id=s-const label="Class 11"}

If $\mathbf a$ is constant in magnitude *and* direction, the straight-line equations carry over, written as vectors. Because $d\mathbf v/dt = \mathbf a$ is constant, the velocity grows linearly; integrating once more gives the position:

:::law caption="Valid only when the acceleration vector is constant. Each equation is two scalar equations, one along x and one along y."
$$\mathbf v = \mathbf v_0 + \mathbf a t,\qquad \mathbf r = \mathbf r_0 + \mathbf v_0 t + \tfrac12\mathbf a t^2$$
:::

In components, the $x$-motion is

$$v_x = v_{0x} + a_x t,\qquad x = x_0 + v_{0x}t + \tfrac12 a_x t^2,$$

and the $y$-motion has the same form with $y$ in place of $x$. The two motions run **independently**: what happens along $x$ is not affected by $a_y$ or $v_y$. Time $t$ is the only thing they share. So a motion in a plane is two straight-line motions of the kind in [equations of motion](#lesson~phy~equations-of-motion), run side by side with a common clock.

The path is a straight line if $\mathbf v_0$ is zero or parallel to $\mathbf a$. Otherwise it is a parabola, since along $\mathbf a$ the displacement grows as $t^2$ and across $\mathbf a$ it grows as $t$. Gravity near the ground is the standard example; the widget shows it, and [projectile motion](#lesson~phy~projectile-motion) works it out in detail.

:::widget name=projectile u=20 angle=40 g=9.8
:::

:::worked title="A puck on a tilted air table"
A puck starts at the origin with $\mathbf v_0 = 6\,\hat{\mathbf i}$ m/s and has a constant acceleration $\mathbf a = (-1\,\hat{\mathbf i} + 2\,\hat{\mathbf j})$ m s⁻². Find its velocity and position at $t = 4$ s.

- $x$: $v_x = 6 - 1(4) = 2$ m/s; $x = 6(4) - \tfrac12(1)(16) = 16$ m.
- $y$: $v_y = 0 + 2(4) = 8$ m/s; $y = \tfrac12(2)(16) = 16$ m.

So $\mathbf v = 2\,\hat{\mathbf i} + 8\,\hat{\mathbf j}$ m/s, speed $\sqrt{68} = 8.25$ m/s at $\tan^{-1}4 = 76^\circ$ to the $x$-axis. Also $\mathbf r = 16\,\hat{\mathbf i} + 16\,\hat{\mathbf j}$ m, which is 22.6 m from the start at $45^\circ$. Notice that the puck's position at $45^\circ$ does not mean it is moving at $45^\circ$: position and velocity point in different directions.
:::

:::qc
q: A particle has constant acceleration 2 î m s⁻² and starts with velocity 3 ĵ m/s. After 2 s, what is its y-coordinate (starting at the origin)?
options: ["6 m", "4 m", "10 m", "0 m"]
answer: 0
right: Right. Along $y$ there is no acceleration, so $y = v_{0y}t = 3\times2 = 6$ m. The acceleration along $x$ has no effect on the $y$-motion.
wrong: Treat the axes separately. Along $y$: $v_{0y} = 3$ m/s and $a_y = 0$, so $y = 3t$.
:::

## The dot product {lvl=3 id=s-dot label="JEE"}

We often need the angle between two vectors, or the part of one vector along another. Both come from one operation, the **scalar (dot) product**:

$$\mathbf A\cdot\mathbf B = AB\cos\theta .$$

Why this combination? Write the law of cosines for the difference: $|\mathbf A - \mathbf B|^2 = A^2 + B^2 - 2AB\cos\theta$. Expand the left side in components and compare:

$$(A_x - B_x)^2 + (A_y - B_y)^2 = A^2 + B^2 - 2(A_xB_x + A_yB_y).$$

So $AB\cos\theta = A_xB_x + A_yB_y$ (with $+A_zB_z$ in three dimensions). The geometric form gives meaning; the component form gives a quick way to compute.

What it is used for:

- **Angle between vectors**: $\cos\theta = \dfrac{\mathbf A\cdot\mathbf B}{AB}$.
- **Perpendicular test**: $\mathbf A\cdot\mathbf B = 0$ with neither vector zero means $\theta = 90^\circ$.
- **Component along a direction**: the part of $\mathbf A$ along a unit vector $\hat{\mathbf n}$ is $\mathbf A\cdot\hat{\mathbf n}$. The ordinary components are $A_x = \mathbf A\cdot\hat{\mathbf i}$ and $A_y = \mathbf A\cdot\hat{\mathbf j}$.
- **Magnitude**: $\mathbf A\cdot\mathbf A = A^2$. Hence $|\mathbf A + \mathbf B|^2 = A^2 + B^2 + 2\,\mathbf A\cdot\mathbf B$, which is the resultant formula again.

The dot product of two vectors is a scalar: its value does not depend on the axes. Work, $W = \mathbf F\cdot\mathbf s$, is the first physical example you will meet.

:::qc
q: What is the angle between A = 3î + 4ĵ and B = 4î − 3ĵ?
options: ["90°", "0°", "45°", "180°"]
answer: 0
right: Right. $\mathbf A\cdot\mathbf B = 12 - 12 = 0$, so the vectors are perpendicular. Swapping the components and changing one sign always gives a perpendicular vector of the same length.
wrong: Compute $\mathbf A\cdot\mathbf B = A_xB_x + A_yB_y = 12 - 12$.
:::

## Speeding up versus turning {lvl=3 id=s-tangential label="JEE"}

Split the acceleration into a part along the velocity and a part across it:

- The **tangential** part $a_t$ changes the speed.
- The **normal** part $a_n$ turns the velocity without changing the speed.

To find $a_t$, differentiate $v^2 = \mathbf v\cdot\mathbf v$: $\;2v\,\dfrac{dv}{dt} = 2\,\mathbf v\cdot\mathbf a$. So

:::law caption="Rate of change of speed and the turning part of the acceleration."
$$a_t = \frac{dv}{dt} = \frac{\mathbf v\cdot\mathbf a}{v},\qquad a_n = \sqrt{a^2 - a_t^2}$$
:::

The speed is momentarily constant (at a maximum, a minimum or a pause) exactly when $\mathbf v\cdot\mathbf a = 0$, that is, when the velocity is perpendicular to the acceleration.

**Least speed under constant acceleration.** Let $\phi$ be the angle between $\mathbf v_0$ and a constant $\mathbf a$. If $\phi \le 90^\circ$, the speed only grows and its least value is $v_0$, at $t = 0$. If $\phi > 90^\circ$, the part of $\mathbf v$ along $\mathbf a$ shrinks to zero while the part across $\mathbf a$, $v_0\sin\phi$, never changes. So

$$v_{\min} = v_0\sin\phi\quad\text{at}\quad t = -\frac{\mathbf v_0\cdot\mathbf a}{a^2}.$$

For a ball thrown at 20 m/s and $60^\circ$ above the horizontal, $\phi = 150^\circ$ and $v_{\min} = 20\sin150^\circ = 10$ m/s. This is the horizontal velocity at the top of the flight.

:::worked title="Where does the speed stop falling?"
$\mathbf v_0 = (8\,\hat{\mathbf i} + 6\,\hat{\mathbf j})$ m/s and $\mathbf a = (-3\,\hat{\mathbf i} + 1\,\hat{\mathbf j})$ m s⁻².

$\mathbf v_0\cdot\mathbf a = -24 + 6 = -18 < 0$, so the particle first slows down. The minimum is at $t = 18/10 = 1.8$ s, where $\mathbf v = 2.6\,\hat{\mathbf i} + 7.8\,\hat{\mathbf j}$ and $v = 8.22$ m/s. Check: $\sin\phi = \sqrt{1 - \cos^2\phi}$, with $\cos\phi = -18/(10\sqrt{10})$, gives $10\sin\phi = 8.22$ m/s. The speed never reaches zero because $\mathbf a$ is not antiparallel to $\mathbf v_0$.
:::

:::qc
q: At some instant v = 3î + 4ĵ m/s and a = 2î m s⁻². At what rate is the speed changing?
options: ["1.2 m s⁻²", "2 m s⁻²", "0", "6 m s⁻²"]
answer: 0
right: Right. $dv/dt = \mathbf v\cdot\mathbf a/v = 6/5 = 1.2$ m s⁻². The remaining $\sqrt{4 - 1.44} = 1.6$ m s⁻² turns the velocity.
wrong: Only the part of $\mathbf a$ along $\mathbf v$ changes the speed: $\mathbf v\cdot\mathbf a/v = (3\times2)/5$.
:::

## Averages and their traps {lvl=3 id=s-averages label="JEE"}

Four distinctions that examiners keep returning to:

1. **$|\Delta\mathbf r|$ versus path length.** They are equal only for straight-line motion without reversal; otherwise $|\Delta\mathbf r|$ is smaller.
2. **$|\Delta\mathbf v|$ versus $\Delta v$.** The magnitude of the change in velocity is not the change in speed. For half a lap of a circle at constant speed $v$, $\Delta v = 0$ but $|\Delta\mathbf v| = 2v$, since the velocity reverses.
3. **Average velocity.** $\bar{\mathbf v} = \Delta\mathbf r/\Delta t$ always. The shortcut $\bar{\mathbf v} = \tfrac12(\mathbf v_1 + \mathbf v_2)$ holds only for constant acceleration, when $\mathbf v$ changes linearly with time.
4. **Average acceleration.** $\bar{\mathbf a} = \Delta\mathbf v/\Delta t$ always. The formulas $\mathbf v = \mathbf v_0 + \mathbf a t$ and $\mathbf r = \mathbf r_0 + \mathbf v_0t + \tfrac12\mathbf a t^2$ need $\mathbf a$ constant.

Why does the shortcut in 3 work for constant acceleration? Take $\mathbf r - \mathbf r_0 = \mathbf v_0t + \tfrac12\mathbf a t^2$ and divide by $t$: $\bar{\mathbf v} = \mathbf v_0 + \tfrac12\mathbf a t = \tfrac12(\mathbf v_0 + \mathbf v)$. When $\mathbf a$ varies, the velocity spends unequal times near its two end values, and the shortcut fails.

:::qc
q: A particle moves on a circle of radius 2 m at a constant speed of 4 m/s. What is the magnitude of its average acceleration over a quarter turn?
options: ["about 7.2 m s⁻²", "8 m s⁻²", "0", "about 5.1 m s⁻²"]
answer: 0
right: Right. Over a quarter turn the velocity turns through $90^\circ$, so $|\Delta\mathbf v| = 4\sqrt2 = 5.66$ m/s. The time is $(\pi\times2/2)/4 = 0.785$ s, so $|\bar{\mathbf a}| = 7.2$ m s⁻². That is less than the instantaneous $v^2/r = 8$ m s⁻².
wrong: The speed does not change, but the velocity does: $|\Delta\mathbf v| = \sqrt{4^2 + 4^2}$ for a $90^\circ$ turn. Divide it by the time for a quarter circle, $(\pi r/2)/v$.
:::

## When acceleration varies {lvl=3 id=s-varying label="JEE"}

If $\mathbf r(t)$ is given, differentiate each component to get $\mathbf v$ and $\mathbf a$. If $\mathbf a(t)$ is given, integrate each component, using the initial velocity and position to fix the constants. The axes stay independent even when the acceleration is not constant.

To find the **shape of the path**, eliminate $t$ between $x(t)$ and $y(t)$.

:::worked title="Integrating a growing acceleration"
A particle at rest at the origin has $\mathbf a = (6t\,\hat{\mathbf i} + 4\,\hat{\mathbf j})$ m s⁻². Then

$$\mathbf v = 3t^2\,\hat{\mathbf i} + 4t\,\hat{\mathbf j},\qquad \mathbf r = t^3\,\hat{\mathbf i} + 2t^2\,\hat{\mathbf j}.$$

At $t = 2$ s: $\mathbf v = 12\,\hat{\mathbf i} + 8\,\hat{\mathbf j}$ m/s (speed 14.4 m/s) and $\mathbf r = 8\,\hat{\mathbf i} + 8\,\hat{\mathbf j}$ m. Eliminating $t = x^{1/3}$ gives the path $y = 2x^{2/3}$. It is not a parabola, because the acceleration is not constant. The formula $\tfrac12(\mathbf v_0 + \mathbf v)t$ would give $\mathbf r = 12\,\hat{\mathbf i} + 8\,\hat{\mathbf j}$ m, which is wrong in $x$, where the acceleration changes.
:::

:::qc
q: A particle has r = (2t) î + (5 − t²) ĵ m. What is its acceleration?
options: ["−2ĵ m s⁻², constant", "2î − 2tĵ m s⁻²", "zero", "2î m s⁻²"]
answer: 0
right: Right. $\mathbf v = 2\,\hat{\mathbf i} - 2t\,\hat{\mathbf j}$ and $\mathbf a = -2\,\hat{\mathbf j}$, a constant acceleration, so the path $y = 5 - x^2/4$ is a parabola.
wrong: Differentiate each component twice: $x = 2t$ gives $a_x = 0$, and $y = 5 - t^2$ gives $a_y = -2$.
:::

## Curvature: the intrinsic view {lvl=4 id=s-curvature label="Olympiad"}

Describe the motion by the path itself. Let $s$ be the distance along the path, $\hat{\mathbf t}$ the unit tangent and $\hat{\mathbf n}$ the unit normal pointing towards the inside of the bend. Then $\mathbf v = v\,\hat{\mathbf t}$, and

$$\mathbf a = \frac{dv}{dt}\,\hat{\mathbf t} + v\,\frac{d\hat{\mathbf t}}{dt}.$$

The first term changes the speed. The second exists because the tangent turns. Over a short stretch the path is close to an arc of a circle of radius $\rho$, the **osculating circle**. Moving a distance $ds$ turns the tangent through $d\psi = ds/\rho$, and $\hat{\mathbf t}$ swings towards $\hat{\mathbf n}$, so $d\hat{\mathbf t}/dt = (v/\rho)\,\hat{\mathbf n}$. Hence

:::law caption="Intrinsic components of acceleration; ρ is the local radius of curvature of the path."
$$\mathbf a = \frac{dv}{dt}\,\hat{\mathbf t} + \frac{v^2}{\rho}\,\hat{\mathbf n},\qquad \rho = \frac{v^3}{|\mathbf v\times\mathbf a|} = \frac{v^3}{|v_xa_y - v_ya_x|}$$
:::

:::figure caption="At each point, the acceleration splits into a tangential part (changing speed) and a normal part v²/ρ pointing to the centre C of the osculating circle (turning)."
<svg viewBox="0 0 340 215" role="img" aria-label="Curved path with its osculating circle, and the acceleration split into tangential and normal parts">
<defs>
<marker id="vmK1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
<marker id="vmK2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker>
<marker id="vmK3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker>
</defs>
<path d="M40 120 Q170 0 300 120" style="fill:none;stroke:var(--ink);stroke-width:1.8"/>
<path class="faint" d="M79.5 92.9 A140.8 140.8 0 0 1 260.5 92.9" style="fill:none;stroke-dasharray:5 4"/>
<line class="faint" x1="170" y1="60" x2="170" y2="200"/>
<circle class="obj" cx="170" cy="200.8" r="3"/><text x="178" y="205">C</text><text x="176" y="170">ρ</text>
<line class="faint" x1="216" y1="60" x2="216" y2="118" style="stroke-dasharray:3 3"/>
<line class="faint" x1="170" y1="120" x2="216" y2="120" style="stroke-dasharray:3 3"/>
<line x1="170" y1="60" x2="226" y2="60" style="stroke:var(--phy);stroke-width:2" marker-end="url(#vmK2)"/>
<line x1="170" y1="60" x2="170" y2="118" style="stroke:var(--chem);stroke-width:2" marker-end="url(#vmK3)"/>
<line x1="170" y1="60" x2="215" y2="118" style="stroke:var(--ink);stroke-width:2.2" marker-end="url(#vmK1)"/>
<circle class="obj" cx="170" cy="60" r="3.5"/>
<text x="198" y="50">a_t = dv/dt</text><text x="100" y="104">a_n = v²/ρ</text><text class="k" x="220" y="104">a</text>
<text x="252" y="76">path</text><text x="40" y="78">osculating circle</text>
</svg>
:::

The cross product of two plane vectors, $\mathbf v\times\mathbf a$, has magnitude $va\sin\theta$, the area of the parallelogram they span. That is $v$ times the part of $\mathbf a$ perpendicular to $\mathbf v$, which is $v\,a_n$. So $a_n = |\mathbf v\times\mathbf a|/v$, and the formula for $\rho$ follows from $a_n = v^2/\rho$.

**Example: a projectile.** At the top of its flight, $\mathbf v$ is horizontal ($u\cos\theta$) and $\mathbf g$ is entirely normal, so $\rho_{\text{top}} = u^2\cos^2\theta/g$. At launch, the normal part of $\mathbf g$ is $g\cos\theta$, so $\rho_{\text{launch}} = u^2/(g\cos\theta)$, which is much larger: the path is flatter at the ends than at the top.

Uniform circular motion is the special case $dv/dt = 0$, $\rho = r$: the [circular motion](#lesson~phy~circular-motion) lesson starts from here.

:::qc
q: A particle has v = 4î m/s and a = 3î + 2ĵ m s⁻² at some instant. What is the radius of curvature of its path there?
options: ["8 m", "5.3 m", "16 m", "4 m"]
answer: 0
right: Right. Only the 2 m s⁻² across the velocity bends the path: $\rho = v^2/a_n = 16/2 = 8$ m. The 3 m s⁻² along $\mathbf v$ only changes the speed.
wrong: Use the part of $\mathbf a$ perpendicular to $\mathbf v$: $a_n = 2$ m s⁻², so $\rho = v^2/a_n$.
:::

## Rotating unit vectors {lvl=4 id=s-polar label="Olympiad"}

All the formulas so far used $\hat{\mathbf i}$ and $\hat{\mathbf j}$, which never change, so differentiating a vector meant differentiating its components. For motion around a centre it is natural to use **polar coordinates** $(r, \theta)$ with unit vectors $\hat{\mathbf r}$ (outward) and $\hat{\boldsymbol\theta}$ (in the direction of increasing $\theta$). These unit vectors turn as the particle moves, and that turning creates extra terms.

Since $\hat{\mathbf r} = \cos\theta\,\hat{\mathbf i} + \sin\theta\,\hat{\mathbf j}$ and $\hat{\boldsymbol\theta} = -\sin\theta\,\hat{\mathbf i} + \cos\theta\,\hat{\mathbf j}$,

$$\frac{d\hat{\mathbf r}}{dt} = \dot\theta\,\hat{\boldsymbol\theta},\qquad \frac{d\hat{\boldsymbol\theta}}{dt} = -\dot\theta\,\hat{\mathbf r}.$$

Differentiate $\mathbf r = r\,\hat{\mathbf r}$ twice:

:::law caption="Velocity and acceleration in plane polar coordinates (dots are time derivatives)."
$$\mathbf v = \dot r\,\hat{\mathbf r} + r\dot\theta\,\hat{\boldsymbol\theta},\qquad \mathbf a = (\ddot r - r\dot\theta^2)\,\hat{\mathbf r} + (r\ddot\theta + 2\dot r\dot\theta)\,\hat{\boldsymbol\theta}$$
:::

Read the terms one by one: $\ddot r$ is the radial speeding up; $-r\dot\theta^2$ is the centripetal term; $r\ddot\theta$ is the angular speeding up; $2\dot r\dot\theta$ arises because moving outwards on a turning line carries you to where the line moves faster. The transverse part can be written $\frac{1}{r}\frac{d}{dt}(r^2\dot\theta)$, so it vanishes exactly when $r^2\dot\theta$ is constant: Kepler's equal-areas law in kinematic form.

:::worked title="Ant on a turning rod"
A rod turns at a steady $\omega = 2$ rad/s about one end. An ant walks outwards along it at a steady $0.1$ m/s relative to the rod. At $r = 0.3$ m,

$$a_r = \ddot r - r\omega^2 = 0 - 0.3(4) = -1.2\ \text{m s}^{-2},\qquad a_\theta = 2\dot r\omega = 2(0.1)(2) = 0.4\ \text{m s}^{-2}.$$

So $|\mathbf a| = \sqrt{1.44 + 0.16} = 1.26$ m s⁻². The ant walks at constant speed along the rod, yet it has a sideways acceleration of 0.4 m s⁻², and the rod must push it sideways to provide it.
:::

:::qc
q: A particle moves so that r is constant and θ̇ is constant. Which terms of the polar acceleration survive?
options: ["Only −rθ̇² along r̂", "Only 2ṙθ̇ along θ̂", "Both −rθ̇² and rθ̈", "None: the acceleration is zero"]
answer: 0
right: Right. With $\dot r = \ddot r = \ddot\theta = 0$, only $-r\dot\theta^2\,\hat{\mathbf r}$ is left: the centripetal acceleration of uniform circular motion.
wrong: Set $\dot r$, $\ddot r$ and $\ddot\theta$ to zero in the formula. The centripetal term $-r\dot\theta^2$ remains.
:::

## What makes a vector a vector {lvl=4 id=s-invariance label="Olympiad"}

A vector is a geometric arrow; its components are only its shadow on a chosen pair of axes. Rotate the axes through an angle $\varphi$ and the components change:

$$A_x' = A_x\cos\varphi + A_y\sin\varphi,\qquad A_y' = -A_x\sin\varphi + A_y\cos\varphi .$$

This rule is the precise test. A pair of numbers is the component pair of a vector exactly when it changes in this way under rotation. You can check from these equations that $A_x'^2 + A_y'^2 = A_x^2 + A_y^2$ and $A_x'B_x' + A_y'B_y' = A_xB_x + A_yB_y$. Magnitudes and dot products do not change: they are **scalars**. This is the real meaning of "scalar": a quantity whose value is the same for observers whose axes point in different directions. A scalar need not be positive, conserved, dimensionless or the same everywhere (temperature varies from place to place).

Two consequences that olympiad questions test:

- **Finite rotations are not vectors.** A rotation has a size (angle) and a direction (axis), but two finite rotations about different axes give different results in different orders. Turn a book $90^\circ$ about $x$ then $90^\circ$ about $y$, then try the reverse order: the book ends up differently. Vector addition is commutative, so finite rotations fail the test. Infinitesimal rotations do commute to first order, which is why angular velocity is a vector.
- **Laws written as vector equations hold in every orientation of axes.** If $\mathbf F = m\mathbf a$ holds in one set of axes, it holds in any rotated set. This is why choosing axes cleverly (along an incline, along $\mathbf a$) is always allowed.

:::qc
q: Which of these is a true statement about a scalar?
options: ["Its value is the same for observers with differently oriented axes", "It can never be negative", "It must be dimensionless", "It must be conserved in every process"]
answer: 0
right: Right. Invariance under rotation of axes is what defines a scalar. Charge and temperature can be negative (in °C), mass has dimensions, and kinetic energy is not always conserved.
wrong: Counter-examples dispose of the others: temperature in °C can be negative, mass has dimensions, kinetic energy is not always conserved. The defining property is that rotating the axes does not change the value.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Distance is path length (scalar); displacement is the arrow from start to finish (vector). Speed is a scalar; velocity is a vector. {lvl=1}
2. A vector has magnitude and direction and adds by the triangle (or parallelogram) rule; vectors summing to zero form a closed polygon. {lvl=2}
3. $\mathbf A = A_x\hat{\mathbf i} + A_y\hat{\mathbf j}$ with $A_x = A\cos\theta$ and $A_y = A\sin\theta$; add vectors by adding components. $R^2 = A^2 + B^2 + 2AB\cos\theta$. {lvl=2}
4. $\mathbf v = d\mathbf r/dt$ is tangent to the path; $\mathbf a = d\mathbf v/dt$ points along the change of velocity and can make any angle with $\mathbf v$. {lvl=2}
5. With constant $\mathbf a$: $\mathbf v = \mathbf v_0 + \mathbf a t$ and $\mathbf r = \mathbf r_0 + \mathbf v_0t + \tfrac12\mathbf a t^2$, axis by axis and independently. {lvl=2}
6. $\mathbf A\cdot\mathbf B = AB\cos\theta = A_xB_x + A_yB_y$; $dv/dt = \mathbf v\cdot\mathbf a/v$; speed is extremal when $\mathbf v \perp \mathbf a$. {lvl=3}
7. $\mathbf a = (dv/dt)\,\hat{\mathbf t} + (v^2/\rho)\,\hat{\mathbf n}$ and $\rho = v^3/|\mathbf v\times\mathbf a|$; in polar form $a_r = \ddot r - r\dot\theta^2$ and $a_\theta = r\ddot\theta + 2\dot r\dot\theta$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never add magnitudes of vectors that point in different directions: 3 km east plus 4 km north is 5 km, not 7 km. {lvl=1}
- The resultant of $A$ and $B$ lies between $|A - B|$ and $A + B$; use this to reject impossible options at once. {lvl=2}
- $\tan\theta = A_y/A_x$ does not fix the quadrant; look at the signs of the components. {lvl=2}
- For oblique (non-perpendicular) directions, the components are not $A\cos\theta$; use the parallelogram and the law of sines. {lvl=2}
- $\mathbf v = \mathbf v_0 + \mathbf a t$ and its partner need a constant acceleration vector; for circular motion or a varying $\mathbf a(t)$, differentiate or integrate instead. {lvl=2}
- $|\Delta\mathbf v| \ne \Delta v$ and $|\Delta\mathbf r| \ne$ path length; $\tfrac12(\mathbf v_1 + \mathbf v_2)$ is the average velocity only for constant $\mathbf a$. {lvl=3}
- Minimum speed under constant acceleration is $v_0\sin\phi$, not zero, unless $\mathbf a$ is exactly opposite to $\mathbf v_0$. {lvl=3}
- In polar coordinates, do not just differentiate $r$ and $\theta$: the unit vectors turn, which brings in the $-r\dot\theta^2$ and $2\dot r\dot\theta$ terms. {lvl=4}
:::
