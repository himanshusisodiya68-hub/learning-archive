---
title: Electric field
summary: Why physics replaces action at a distance with a field, the field as force per unit charge, superposition, field lines, the electric dipole (axial, equatorial and general fields, torque, force in a non-uniform field, dipole–dipole forces), fields of rings, discs, rods, arcs and hemispheres by integration, charged particles in uniform fields, field lines versus trajectories, and oscillation through a charged ring.
ncert: ["Class 12 Physics · Ch 1 Electric Charges and Fields (§1.7–1.12)"]
up_to: Olympiad
builds_on: [Electric charge, Coulomb's law, Vectors and their addition, Projectile motion, Integration]
notes_prompt: Explain in your own words why a field is more than a bookkeeping trick, using the example of a charge that is suddenly moved while a second charge sits far away.
margin:
  - kind: history
    title: History
    text: Michael Faraday pictured "lines of force" filling the space around charges and magnets in the 1830s–1840s, and James Clerk Maxwell turned the picture into equations in the 1860s, which predicted electromagnetic waves travelling at the speed of light. (Dates from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "Axial field 2kp/r³ along p; equatorial field kp/r³ opposite to p. The axial one is twice as strong at the same distance. Net force on a dipole in a uniform field is zero; the torque is p × E."
  - kind: olympiad
    title: Olympiad link
    text: For a finite straight rod, the field at a point at perpendicular distance d depends only on the two angles its ends subtend there, (kλ/d)(sin α + sin β) across and (kλ/d)(cos α − cos β) along. Arcs, polygons of rods and semi-infinite wires all reduce to this one result.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 1 Electric Charges and Fields, §1.7–1.12, Examples 1.7–1.9, Exercises 1.7–1.10, 1.13" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 29 Electric Field and Potential (field, field lines, dipole)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.1 Constant electric field in vacuum" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 1 Electrostatics (the field, continuous distributions); Ch. 2 (dipole field)" }
cards:
  - { front: "Definition of the electric field at a point?", back: "$\\vec E = \\lim_{q_0\\to0}\\vec F/q_0$, the force per unit positive test charge. Unit N/C (= V/m). For a point charge $\\vec E = kQ\\hat r/r^2$, $k = 1/4\\pi\\varepsilon_0$." }
  - { front: "Dipole fields on the axis and on the equator (far away)?", back: "Axial $E = 2kp/r^3$ along $\\vec p$; equatorial $E = kp/r^3$ opposite to $\\vec p$. In general $E_r = 2kp\\cos\\theta/r^3$, $E_\\theta = kp\\sin\\theta/r^3$." }
  - { front: "Dipole in a uniform field: force and torque?", back: "Net force zero; torque $\\vec\\tau = \\vec p\\times\\vec E$, magnitude $pE\\sin\\theta$, turning $\\vec p$ towards $\\vec E$." }
  - { front: "Field on the axis of a ring (charge $Q$, radius $R$) at distance $z$?", back: "$E = kQz/(z^2+R^2)^{3/2}$ along the axis. Zero at the centre, maximum $2kQ/(3\\sqrt3R^2)$ at $z = R/\\sqrt2$, like a point charge far away." }
  - { front: "Field of a finite straight rod at perpendicular distance $d$, ends at angles $\\alpha, \\beta$ from the perpendicular?", back: "$E_\\perp = (k\\lambda/d)(\\sin\\alpha+\\sin\\beta)$, $E_\\parallel = (k\\lambda/d)|\\cos\\alpha-\\cos\\beta|$. Infinite rod $2k\\lambda/d$; semi-infinite rod (at its end) $\\sqrt2\\,k\\lambda/d$ at $45^\\circ$." }
  - { front: "Do charges move along field lines?", back: "Only in special cases (released from rest on a straight line). The field fixes the acceleration, not the velocity, so on curved lines inertia carries the particle off the line." }
---

:::hook
q: A thin ring of radius R carries positive charge spread evenly round it. You move a small test charge along the ring's axis, starting at the centre. Where is the electric field strongest?
options: ["At the centre of the ring", "At a distance of about 0.71R from the centre", "At a distance of exactly R", "Very far away"]
answer: 1
right: Right. At the centre the pushes from opposite sides of the ring cancel, so the field is zero. Far away it fades like 1/z². In between it peaks, at z = R/√2 ≈ 0.71R, as the section on the ring shows.
wrong: At the centre every bit of ring is cancelled by the bit opposite, so the field is zero; very far away it dies off like 1/z². So it must peak somewhere in between, and the calculation in the ring section puts the peak at z = R/√2 ≈ 0.71R.
:::

## Why talk about a field at all? {lvl=1 id=s-why label="Class 10"}

Coulomb's law tells you the force between two charges. It says nothing about **how** one charge knows that the other is there. Read literally, a charge here pushes a charge over there instantly, across empty space. This is called *action at a distance*.

The field idea changes the story into two steps:

1. A charge **creates** something in the space all around it: the electric field. It exists at every point, whether or not anything is placed there.
2. Another charge placed at a point **feels a force from the field at that point**. It needs to know nothing about the source, only about the field where it sits.

This is the same move you already make for gravity. You say "$g = 9.8$ N/kg here" without mentioning the Earth. The field is gravity's "force per kilogram"; the electric field is "force per coulomb".

Why bother? Three reasons, in increasing depth:

- **Bookkeeping.** Work out the field once, then the force on *any* charge placed there is one multiplication.
- **Locality.** Physics works best when what happens at a point depends only on things at that point. The field gives you something at the point.
- **The field is real.** If a source charge is jiggled, a distant charge does not feel the change at once. The news travels outwards at the speed of light, and while it travels, energy and momentum are stored in the field itself. The last section returns to this.

:::qc
q: A charge of 2 C placed at a point feels a force of 10 N to the east. What is the electric field at that point?
options: ["20 N/C east", "5 N/C east", "5 N/C west", "It depends on the charges that made it"]
answer: 1
right: Right. The field is the force per unit charge, 10 N / 2 C = 5 N/C, in the direction of the force on a positive charge.
wrong: Field = force ÷ charge = 10/2 = 5 N/C, and for a positive charge it points the same way as the force, east. Once you know the field you do not need to know its sources.
:::

## The field as force per unit charge {lvl=2 id=s-def label="Class 12"}

Place a small positive **test charge** $q_0$ at a point $P$ and measure the force $\vec F$ on it. The electric field at $P$ is

:::law caption="Definition of the electric field. Unit N/C, which equals V/m."
$$\vec E(P) = \lim_{q_0\to 0}\frac{\vec F}{q_0}$$
:::

Two details matter.

- **Why "per unit charge"?** By Coulomb's law the force on $q_0$ is proportional to $q_0$. Dividing by $q_0$ removes the test charge from the answer and leaves a property of the *place*.
- **Why the limit?** A real test charge pushes on the source charges. On a conductor, they would rearrange and change the field you are trying to measure. Making $q_0$ tiny keeps the sources undisturbed. (Charge is quantised, so the limit is an idealisation; in practice "small enough not to disturb".)

For a single point charge $Q$ at the origin, Coulomb's law divided by $q_0$ gives

:::eq caption="Field of a point charge. k = 1/4πε₀ ≈ 9 × 10⁹ N m² C⁻²; r̂ points from the charge to P."
$$\vec E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\,\hat r = \frac{kQ}{r^2}\hat r$$
:::

It points away from a positive charge and towards a negative one, and it falls as $1/r^2$: double the distance, a quarter of the field. Once $\vec E$ is known, the force on any charge $q$ placed there is $\vec F = q\vec E$. For negative $q$ the force is opposite to $\vec E$.

## Superposition {lvl=2 id=s-super label="Class 12"}

Forces from several charges add as vectors (that is an experimental fact built into Coulomb's law). Dividing by $q_0$, **fields add as vectors too**:

$$\vec E = \sum_i \frac{kq_i}{r_i^2}\hat r_i$$

Each term is computed as if the other charges were absent. The only skill is vector addition: draw each field, then resolve into components.

:::worked title="Equilateral triangle"
**Charges +2 nC and −2 nC sit at two corners A and B of an equilateral triangle of side 10 cm. Find the field at the third corner C.**

Each charge is 0.10 m from C, so each field has magnitude $kq/a^2 = 9\times10^9\times2\times10^{-9}/0.01 = 1800$ N/C.

The field of the positive charge points along $\vec{AC}$ (away from A). The field of the negative charge points along $\vec{CB}$ (towards B). The angle between $\vec{AC}$ and $\vec{CB}$ is $120^\circ$. Two equal vectors at $120^\circ$ add to a vector of the **same** magnitude, along the bisector.

So $E = 1800$ N/C, parallel to AB, pointing from the positive charge's side to the negative charge's side. The components perpendicular to AB cancel.
:::

:::qc
q: Charges +q and +q sit at two corners of an equilateral triangle. Compared with one charge alone, the field at the third corner is
options: ["zero", "the same size", "√3 times as large", "twice as large"]
answer: 2
right: Right. Now the two equal fields are at 60° to each other, so the resultant is 2E cos30° = √3 E, pointing away from the side joining the charges.
wrong: With two positive charges both fields point away, and the angle between them is 60°. The resultant is 2E cos30° = √3 E.
:::

## Field lines {lvl=2 id=s-lines label="Class 12"}

A field is a vector at every point: too much to draw. Faraday's trick was to draw **curves whose tangent at each point gives the direction of $\vec E$**, with arrows, and to crowd them together where the field is strong.

:::figure caption="Field lines of a single positive charge (left) and of a dipole (right), traced numerically. Lines start on the positive charge and end on the negative one; they are most crowded near the charges, where the field is strongest."
<svg viewBox="0 0 440 200" role="img" aria-label="Radial field lines of a positive charge, and curved field lines running from the positive to the negative charge of a dipole">
<line class="ray" x1="114.0" y1="100.0" x2="185.0" y2="100.0"/>
<polygon style="fill:var(--phy)" points="160.0,100.0 151.0,104.0 151.0,96.0"/>
<line class="ray" x1="109.9" y1="90.1" x2="160.1" y2="39.9"/>
<polygon style="fill:var(--phy)" points="142.4,57.6 138.9,66.8 133.2,61.1"/>
<line class="ray" x1="100.0" y1="86.0" x2="100.0" y2="15.0"/>
<polygon style="fill:var(--phy)" points="100.0,40.0 104.0,49.0 96.0,49.0"/>
<line class="ray" x1="90.1" y1="90.1" x2="39.9" y2="39.9"/>
<polygon style="fill:var(--phy)" points="57.6,57.6 66.8,61.1 61.1,66.8"/>
<line class="ray" x1="86.0" y1="100.0" x2="15.0" y2="100.0"/>
<polygon style="fill:var(--phy)" points="40.0,100.0 49.0,96.0 49.0,104.0"/>
<line class="ray" x1="90.1" y1="109.9" x2="39.9" y2="160.1"/>
<polygon style="fill:var(--phy)" points="57.6,142.4 61.1,133.2 66.8,138.9"/>
<line class="ray" x1="100.0" y1="114.0" x2="100.0" y2="185.0"/>
<polygon style="fill:var(--phy)" points="100.0,160.0 96.0,151.0 104.0,151.0"/>
<line class="ray" x1="109.9" y1="109.9" x2="160.1" y2="160.1"/>
<polygon style="fill:var(--phy)" points="142.4,142.4 133.2,138.9 138.9,133.2"/>
<polyline class="ray" points="307.5,97.3 308.0,97.1 310.8,96.1 313.7,95.1 316.5,94.2 319.4,93.3 322.2,92.5 325.2,91.7 328.1,91.1 331.0,90.5 334.0,90.1 337.0,89.9 340.0,89.8 343.0,89.8 346.0,90.1 349.0,90.4 351.9,91.0 354.8,91.6 357.8,92.3 360.6,93.2 363.5,94.1 366.3,95.0 369.2,96.0 372.0,97.0 372.9,97.4"/>
<polygon style="fill:var(--phy)" points="345.0,89.8 336.0,93.8 336.0,85.8"/>
<polyline class="ray" points="305.7,94.3 306.0,94.0 308.2,91.9 310.4,89.9 312.6,87.8 314.9,85.9 317.2,84.0 319.7,82.3 322.2,80.7 324.8,79.2 327.5,77.9 330.3,76.8 333.2,76.0 336.1,75.5 339.1,75.2 342.1,75.2 345.1,75.6 348.0,76.2 350.9,77.1 353.7,78.2 356.4,79.6 358.9,81.1 361.4,82.8 363.8,84.6 366.1,86.5 368.4,88.4 370.6,90.5 372.7,92.6 374.5,94.3"/>
<polygon style="fill:var(--phy)" points="344.1,75.0 335.2,79.3 335.0,71.3"/>
<polyline class="ray" points="302.7,92.5 302.9,92.0 304.0,89.2 305.1,86.4 306.3,83.7 307.6,81.0 308.9,78.3 310.3,75.6 311.9,73.1 313.6,70.6 315.4,68.2 317.4,66.0 319.5,63.8 321.8,61.9 324.2,60.1 326.8,58.6 329.5,57.3 332.3,56.2 335.2,55.5 338.2,55.1 341.2,55.1 344.2,55.3 347.1,55.9 350.0,56.8 352.7,58.0 355.3,59.5 357.8,61.2 360.1,63.1 362.3,65.2 364.3,67.4 366.2,69.7 367.9,72.2 369.5,74.7 370.9,77.4 372.3,80.0 373.6,82.8 374.7,85.5 375.9,88.3 376.9,91.1 377.4,92.5"/>
<polygon style="fill:var(--phy)" points="346.2,55.3 337.0,58.9 337.4,50.9"/>
<polyline class="ray" points="298.6,92.1 298.5,91.6 298.1,88.7 297.6,85.7 297.2,82.7 296.9,79.7 296.6,76.8 296.5,73.8 296.3,70.8 296.3,67.8 296.4,64.8 296.5,61.8 296.8,58.8 297.2,55.8 297.7,52.8 298.3,49.9 299.0,47.0 299.9,44.1 300.9,41.3 302.0,38.5 303.2,35.8 304.6,33.1 306.2,30.6 307.9,28.1 309.7,25.7 311.7,23.4 313.8,21.3 316.0,19.3 318.4,17.5 320.9,15.9 323.6,14.4 326.3,13.2 329.1,12.1 332.0,11.3 334.9,10.8 337.9,10.4 340.9,10.4 343.9,10.5 346.9,11.0 349.8,11.6 352.7,12.6 355.4,13.7 358.1,15.0 360.7,16.6 363.1,18.3 365.5,20.2 367.6,22.3 369.7,24.4 371.6,26.8 373.4,29.2 375.0,31.7 376.5,34.3 377.8,37.0 379.0,39.8 380.0,42.6 380.9,45.4 381.7,48.3 382.4,51.3 382.9,54.2 383.4,57.2 383.7,60.2 383.9,63.2 384.0,66.2 384.0,69.2 383.9,72.1 383.7,75.1 383.5,78.1 383.2,81.1 382.8,84.1 382.4,87.1 381.9,90.0 381.4,92.5"/>
<polygon style="fill:var(--phy)" points="345.9,10.5 336.8,14.3 337.0,6.3"/>
<polyline class="ray" points="294.3,94.3 294.0,94.0 291.9,91.8 289.8,89.7 287.7,87.5 285.7,85.3 283.7,83.1 281.7,80.9 279.7,78.6 277.8,76.3 275.9,74.0 274.0,71.7 272.1,69.3 270.3,66.9 268.5,64.5 266.8,62.1 265.1,59.6 263.4,57.1 261.8,54.6 260.2,52.0 258.6,49.5 257.1,46.9 255.6,44.3 254.2,41.7 252.7,39.0 251.4,36.3 250.1,33.7 248.8,30.9 247.5,28.2 246.3,25.5 245.2,22.7 244.1,19.9 243.0,17.1 242.0,14.3 241.0,11.4 240.1,8.6 239.2,5.7 238.9,4.8"/>
<polygon style="fill:var(--phy)" points="269.1,65.3 277.7,70.0 271.4,74.9"/>
<polyline class="ray" points="292.0,100.0 291.5,100.0 288.5,100.0 285.5,100.0 282.5,100.0 279.5,100.0 276.5,100.0 273.5,100.0 270.5,100.0 267.5,100.0 264.5,100.0 261.5,100.0 258.5,100.0 255.5,100.0 252.5,100.0 249.5,100.0 246.5,100.0 243.5,100.0 240.5,100.0 237.5,100.0 234.5,100.0 232.0,100.0"/>
<polygon style="fill:var(--phy)" points="253.5,100.0 262.5,96.0 262.5,104.0"/>
<polyline class="ray" points="294.3,105.7 294.0,106.0 291.9,108.2 289.8,110.3 287.7,112.5 285.7,114.7 283.7,116.9 281.7,119.1 279.7,121.4 277.8,123.7 275.9,126.0 274.0,128.3 272.1,130.7 270.3,133.1 268.5,135.5 266.8,137.9 265.1,140.4 263.4,142.9 261.8,145.4 260.2,148.0 258.6,150.5 257.1,153.1 255.6,155.7 254.2,158.3 252.7,161.0 251.4,163.7 250.1,166.3 248.8,169.1 247.5,171.8 246.3,174.5 245.2,177.3 244.1,180.1 243.0,182.9 242.0,185.7 241.0,188.6 240.1,191.4 239.2,194.3 238.9,195.2"/>
<polygon style="fill:var(--phy)" points="269.1,134.7 271.4,125.1 277.7,130.0"/>
<polyline class="ray" points="298.6,107.9 298.5,108.4 298.1,111.3 297.6,114.3 297.2,117.3 296.9,120.3 296.6,123.2 296.5,126.2 296.3,129.2 296.3,132.2 296.4,135.2 296.5,138.2 296.8,141.2 297.2,144.2 297.7,147.2 298.3,150.1 299.0,153.0 299.9,155.9 300.9,158.7 302.0,161.5 303.2,164.2 304.6,166.9 306.2,169.4 307.9,171.9 309.7,174.3 311.7,176.6 313.8,178.7 316.0,180.7 318.4,182.5 320.9,184.1 323.6,185.6 326.3,186.8 329.1,187.9 332.0,188.7 334.9,189.2 337.9,189.6 340.9,189.6 343.9,189.5 346.9,189.0 349.8,188.4 352.7,187.4 355.4,186.3 358.1,185.0 360.7,183.4 363.1,181.7 365.5,179.8 367.6,177.7 369.7,175.6 371.6,173.2 373.4,170.8 375.0,168.3 376.5,165.7 377.8,163.0 379.0,160.2 380.0,157.4 380.9,154.6 381.7,151.7 382.4,148.7 382.9,145.8 383.4,142.8 383.7,139.8 383.9,136.8 384.0,133.8 384.0,130.8 383.9,127.9 383.7,124.9 383.5,121.9 383.2,118.9 382.8,115.9 382.4,112.9 381.9,110.0 381.4,107.5"/>
<polygon style="fill:var(--phy)" points="345.9,189.5 337.0,193.7 336.8,185.7"/>
<polyline class="ray" points="302.7,107.5 302.9,108.0 304.0,110.8 305.1,113.6 306.3,116.3 307.6,119.0 308.9,121.7 310.3,124.4 311.9,126.9 313.6,129.4 315.4,131.8 317.4,134.0 319.5,136.2 321.8,138.1 324.2,139.9 326.8,141.4 329.5,142.7 332.3,143.8 335.2,144.5 338.2,144.9 341.2,144.9 344.2,144.7 347.1,144.1 350.0,143.2 352.7,142.0 355.3,140.5 357.8,138.8 360.1,136.9 362.3,134.8 364.3,132.6 366.2,130.3 367.9,127.8 369.5,125.3 370.9,122.6 372.3,120.0 373.6,117.2 374.7,114.5 375.9,111.7 376.9,108.9 377.4,107.5"/>
<polygon style="fill:var(--phy)" points="346.2,144.7 337.4,149.1 337.0,141.1"/>
<polyline class="ray" points="305.7,105.7 306.0,106.0 308.2,108.1 310.4,110.1 312.6,112.2 314.9,114.1 317.2,116.0 319.7,117.7 322.2,119.3 324.8,120.8 327.5,122.1 330.3,123.2 333.2,124.0 336.1,124.5 339.1,124.8 342.1,124.8 345.1,124.4 348.0,123.8 350.9,122.9 353.7,121.8 356.4,120.4 358.9,118.9 361.4,117.2 363.8,115.4 366.1,113.5 368.4,111.6 370.6,109.5 372.7,107.4 374.5,105.7"/>
<polygon style="fill:var(--phy)" points="344.1,125.0 335.0,128.7 335.2,120.7"/>
<polyline class="ray" points="307.5,102.7 308.0,102.9 310.8,103.9 313.7,104.9 316.5,105.8 319.4,106.7 322.2,107.5 325.2,108.3 328.1,108.9 331.0,109.5 334.0,109.9 337.0,110.1 340.0,110.2 343.0,110.2 346.0,109.9 349.0,109.6 351.9,109.0 354.8,108.4 357.8,107.7 360.6,106.8 363.5,105.9 366.3,105.0 369.2,104.0 372.0,103.0 372.9,102.6"/>
<polygon style="fill:var(--phy)" points="345.0,110.2 336.0,114.2 336.0,106.2"/>
<line class="ray" x1="308" y1="100" x2="372" y2="100"/><polygon style="fill:var(--phy)" points="345,100 336,96 336,104"/>
<circle class="obj" cx="100" cy="100" r="9"/><text class="k" x="96" y="104" style="fill:var(--surface, #fff)">+</text>
<circle class="obj" cx="300" cy="100" r="9"/><text class="k" x="296" y="104" style="fill:var(--surface, #fff)">+</text>
<circle cx="380" cy="100" r="9" style="fill:var(--ink)"/><text class="k" x="377" y="104" style="fill:var(--surface, #fff)">−</text>
</svg>
:::

The rules follow from the definition and from the $1/r^2$ law:

- **Lines start on positive charges and end on negative charges** (or run off to infinity). In a charge-free region they cannot start or stop.
- **Two lines never cross.** At a crossing the field would have two directions at one point, which is impossible because the total field is a single vector.
- **Density shows strength.** For a point charge, $N$ lines cross a sphere of area $4\pi r^2$, so lines per unit area go as $1/r^2$, exactly like $E$. This is why the picture works in 3-D and why it would fail for any other force law. (Counting lines through a surface is the *flux*, the subject of the Gauss's law leaf.)
- **No closed loops** in electrostatics. Going round a closed field line, a positive charge would always be pushed forwards and gain energy on every lap, which would make a perpetual-motion machine. (The potential leaf turns this into $\oint \vec E\cdot d\vec l = 0$.)
- **Lines meet a conductor's surface at right angles** (in the steady state; see the Gauss's law leaf).

:::qc
q: Why can two electric field lines never cross?
options: ["Because lines repel each other", "Because the field at the crossing would have two directions", "Because the field is zero at the crossing", "They can cross at a negative charge only"]
answer: 1
right: Right. The resultant field at a point is one vector with one direction, so only one line can pass through each point where E ≠ 0.
wrong: A tangent to a field line gives the direction of the total field. Two lines crossing would give two directions at the same point, but superposition produces a single vector there.
:::

## The electric dipole {lvl=2 id=s-dipole label="Class 12"}

A **dipole** is a pair of equal and opposite charges $\pm q$ a small distance $2a$ apart. It matters because neutral molecules (water, HCl) behave like dipoles, and because a neutral atom in a field is stretched into one. Its strength is the **dipole moment**

$$\vec p = q\,(2a)\,\hat d,$$

pointing from $-q$ to $+q$. Unit C m.

:::figure caption="A dipole with its moment p pointing from −q to +q. At an axial point P the field is along p; at an equatorial point Q it is opposite to p."
<svg viewBox="0 0 380 190" role="img" aria-label="Dipole on a horizontal axis with an axial point to the right and an equatorial point above the centre, each with its field arrow">
<line class="faint" x1="30" y1="120" x2="370" y2="120"/><line class="faint" x1="150" y1="120" x2="150" y2="30"/>
<line class="faint" x1="120" y1="120" x2="150" y2="30"/><line class="faint" x1="180" y1="120" x2="150" y2="30"/>
<circle cx="120" cy="120" r="8" style="fill:var(--ink)"/><circle class="obj" cx="180" cy="120" r="8"/>
<text class="k" x="112" y="148">−q</text><text class="k" x="174" y="148">+q</text>
<line style="stroke:var(--ink);stroke-width:2" x1="132" y1="102" x2="166" y2="102"/><polygon style="fill:var(--ink)" points="172,102 163,98 163,106"/><text class="k" x="146" y="96">p</text>
<text x="140" y="166">2a</text>
<circle class="obj" cx="300" cy="120" r="3.5"/><text class="k" x="296" y="140">P</text>
<line class="ray" x1="300" y1="120" x2="350" y2="120"/><polygon style="fill:var(--phy)" points="358,120 348,115 348,125"/><text x="318" y="110">E ∥ p</text>
<text x="225" y="135">r</text>
<circle class="obj" cx="150" cy="30" r="3.5"/><text class="k" x="156" y="24">Q</text>
<line class="ray" x1="150" y1="30" x2="100" y2="30"/><polygon style="fill:var(--phy)" points="92,30 102,25 102,35"/><text x="40" y="50">E opposite p</text>
<text x="156" y="80">r</text>
</svg>
:::

**On the axis** at distance $r$ from the centre (point P), the $+q$ charge is nearer:

$$E_{\text{axial}} = kq\left[\frac{1}{(r-a)^2}-\frac{1}{(r+a)^2}\right] = \frac{k\,q\,4ar}{(r^2-a^2)^2} \;\xrightarrow{\;r\gg a\;}\; \frac{2kp}{r^3}\ \text{along } \vec p.$$

**On the equator** (point Q), both charges are at distance $\sqrt{r^2+a^2}$. Their fields have equal size; the components along the bisector cancel and the components parallel to the axis add, each a fraction $a/\sqrt{r^2+a^2}$ of the whole:

$$E_{\text{eq}} = 2\cdot\frac{kq}{r^2+a^2}\cdot\frac{a}{\sqrt{r^2+a^2}} = \frac{kp}{(r^2+a^2)^{3/2}} \;\xrightarrow{\;r\gg a\;}\; \frac{kp}{r^3}\ \text{opposite to } \vec p.$$

Why $1/r^3$ and not $1/r^2$? From far away the two charges almost cancel. What survives is the *difference* between two $1/r^2$ fields at slightly different distances, which is roughly $2a\times\frac{d}{dr}(1/r^2)\propto 1/r^3$. Only the product $p = 2aq$ appears: halve $a$ and double $q$, and nothing outside changes. A **point dipole** is the limit $a\to0$, $q\to\infty$ with $p$ fixed.

:::worked title="How good is the far-field formula?"
**Charges ±10 nC are 1 cm apart. Find the axial field 10 cm from the centre, exactly and from $2kp/r^3$.**

$p = 10^{-8}\times10^{-2} = 10^{-10}$ C m. Approximate: $2kp/r^3 = 2\times9\times10^9\times10^{-10}/10^{-3} = 1800$ N/C.

Exact, with $a = 0.005$ m: $\dfrac{4kqar}{(r^2-a^2)^2} = \dfrac{9\times10^9\times10^{-8}\times4\times0.005\times0.1}{(0.009975)^2} \approx 1809$ N/C.

The far-field formula is 0.5% low, already good at $r = 20a$. The error shrinks like $(a/r)^2$.
:::

:::qc
q: At the same large distance r from a dipole's centre, how does the field on the axis compare with the field on the equator?
options: ["Equal size, same direction", "Axial is twice as large and points the opposite way", "Axial is half as large", "Axial is four times as large"]
answer: 1
right: Right. Axial 2kp/r³ along p, equatorial kp/r³ opposite to p.
wrong: Axial field 2kp/r³ points along p; equatorial field kp/r³ points against p. So the axial one is twice as big, in the opposite direction.
:::

## A dipole in a uniform field {lvl=2 id=s-torque label="Class 12"}

Put the dipole in a uniform field $\vec E$, its moment at angle $\theta$ to the field. The force on $+q$ is $q\vec E$; on $-q$ it is $-q\vec E$.

- **Net force:** $q\vec E - q\vec E = 0$. A uniform field cannot move a dipole's centre.
- **Net torque:** the two forces are equal, opposite and not in line: a couple. Its arm is $2a\sin\theta$, so

:::law caption="Torque on a dipole in a uniform field. It turns p towards E; it vanishes when p is parallel (stable) or antiparallel (unstable) to E."
$$\vec\tau = \vec p\times\vec E,\qquad \tau = pE\sin\theta$$
:::

The torque is independent of the point you take moments about, because the net force is zero. The energy stored as the dipole turns, $U = -\vec p\cdot\vec E$, belongs to the potential leaf.

**Small oscillations.** If the dipole (moment of inertia $I$ about its centre) is turned slightly from $\theta = 0$ and released, $I\ddot\theta = -pE\sin\theta\approx -pE\,\theta$. That is simple harmonic motion with $\omega = \sqrt{pE/I}$, exactly like a pendulum with $pE$ in place of $mgl$.

:::qc
q: A dipole is held with p antiparallel to a uniform field and nudged slightly. What happens?
options: ["It stays where it is", "It swings round towards alignment with E", "It drifts along the field", "It oscillates about the antiparallel position"]
answer: 1
right: Right. At θ = 180° the torque is zero, but any nudge gives a torque pE sinθ that grows the displacement. It is unstable and swings round to θ = 0.
wrong: Antiparallel is an equilibrium (sin180° = 0) but an unstable one. A small nudge produces a torque turning p further, towards E. The net force stays zero, so it does not drift.
:::

## Continuous charge distributions {lvl=2 id=s-cont label="Class 12"}

Charge on a rod, a plate or in a ball is made of many electrons and ions, but at everyday scales it looks smooth. We describe it with densities:

| kind | density | small piece |
|---|---|---|
| line | $\lambda$ (C/m) | $dq = \lambda\,dl$ |
| surface | $\sigma$ (C/m²) | $dq = \sigma\,dA$ |
| volume | $\rho$ (C/m³) | $dq = \rho\,dV$ |

Each small piece acts as a point charge, and superposition becomes an integral:

:::eq caption="Field of a continuous distribution. r is the distance from the piece dq to P, and r̂ points from dq to P."
$$\vec E(P) = \int \frac{k\,dq}{r^2}\,\hat r$$
:::

This is a **vector** integral. The working rule: use symmetry to decide which components cancel, then integrate only the surviving component (a plain number). The next sections do this for the standard shapes.

## Charged particles in a uniform field {lvl=3 id=s-motion label="JEE"}

In a uniform field the force $q\vec E$ is constant, so the acceleration $\vec a = q\vec E/m$ is constant. Every result from projectile motion carries over, with $g$ replaced by $qE/m$. Gravity is usually negligible: for an electron in only 100 N/C, $eE/m \approx 1.8\times10^{13}$ m s⁻², about $10^{12}\,g$.

Unlike gravity, the acceleration depends on $q/m$. Example 1.7 in the NCERT problems shows the consequence: a proton takes far longer to fall the same height than an electron.

:::figure caption="An electron enters deflecting plates of length L along the axis. Inside, it follows a parabola; outside, a straight line. Extended backwards, that line meets the axis at the middle of the plates, so the spot on a screen at distance D (from the plates' centre) is displaced by Y = D tan φ."
<svg viewBox="0 0 380 180" role="img" aria-label="Electron beam bent upward between two horizontal plates and then travelling straight to a screen">
<line class="ln" style="stroke-width:3" x1="40" y1="55" x2="150" y2="55"/><line class="ln" style="stroke-width:3" x1="40" y1="125" x2="150" y2="125"/>
<text class="k" x="90" y="46">+ + +</text><text class="k" x="90" y="142">− − −</text>
<line class="ln" x1="60" y1="62" x2="60" y2="78"/><polygon style="fill:var(--ink)" points="60,84 56,76 64,76"/><text x="66" y="76">E</text>
<line class="faint" x1="40" y1="90" x2="350" y2="90"/>
<line class="ray" x1="5" y1="90" x2="40" y2="90"/>
<path class="ray" d="M40,90 Q95,90 150,75"/>
<line class="ray" x1="150" y1="75" x2="350" y2="20.5"/>
<line class="faint" x1="95" y1="90" x2="150" y2="75"/>
<line class="ln" x1="350" y1="10" x2="350" y2="170"/>
<text x="356" y="58">Y</text><text x="112" y="86">φ</text>
<line class="faint" x1="40" y1="155" x2="150" y2="155"/><text x="90" y="170">L</text>
<line class="faint" x1="95" y1="165" x2="350" y2="165"/><text x="220" y="160">D</text>
</svg>
:::

Take the field $E$ perpendicular to the initial velocity $v$, plates of length $L$. The time inside is $t = L/v$, so

$$y_{\text{exit}} = \frac{1}{2}\frac{qE}{m}\frac{L^2}{v^2},\qquad \tan\varphi = \frac{v_y}{v_x} = \frac{qEL}{mv^2}.$$

Since $y_{\text{exit}} = \tfrac{L}{2}\tan\varphi$, the exit line, extended back, passes through the **centre of the plates**. So the spot on a screen a distance $D$ from the plates' centre is displaced by

$$Y = D\tan\varphi = \frac{qELD}{mv^2}.$$

Deflection is proportional to $E$, which is why such plates measure voltages in a cathode-ray oscilloscope. Note $mv^2$ in the denominator: it is twice the kinetic energy, so particles accelerated through the same voltage are deflected the same amount whatever their mass.

:::worked title="Electron through deflecting plates"
**An electron moving at $1.0\times10^7$ m/s enters a region 4.0 cm long with a transverse field of 1000 N/C. Find its deflection at exit and the angle of its path.**

$a = eE/m = 1.6\times10^{-19}\times10^3/9.11\times10^{-31} = 1.76\times10^{14}$ m s⁻². Time $t = 0.04/10^7 = 4\times10^{-9}$ s.

$y = \tfrac12 at^2 = \tfrac12\times1.76\times10^{14}\times16\times10^{-18} = 1.4\times10^{-3}$ m $= 1.4$ mm.

$\tan\varphi = at/v = 1.76\times10^{14}\times4\times10^{-9}/10^7 = 0.070$, so $\varphi\approx4.0^\circ$.
:::

:::qc
q: A proton and an alpha particle (charge 2e, mass 4m_p) enter the same deflecting plates with the same kinetic energy. Which is deflected more?
options: ["The proton", "The alpha particle, twice as much", "Both the same", "The alpha particle, four times as much"]
answer: 1
right: Right. Deflection ∝ qE/(mv²) = qE/(2K). Same K, double the charge, so the alpha particle is deflected twice as much.
wrong: The deflection depends on q/(mv²) = q/(2K). With equal kinetic energies only the charge matters, and the alpha particle has twice the charge.
:::

## Ring and disc on the axis {lvl=3 id=s-ring label="JEE"}

**The ring.** A thin ring of radius $R$ carries charge $Q$. Take a point P on its axis at distance $z$ from the centre. Every element $dq$ is at the same distance $r = \sqrt{z^2+R^2}$ from P.

:::figure caption="Ring seen edge-on. The fields of opposite elements dq and dq′ have equal perpendicular components, which cancel, and equal axial components, which add."
<svg viewBox="0 0 360 210" role="img" aria-label="Edge-on ring with two opposite charge elements and their field vectors at an axial point, whose sideways parts cancel">
<ellipse class="ln" cx="80" cy="105" rx="16" ry="70"/>
<line class="faint" x1="20" y1="105" x2="345" y2="105"/>
<line class="faint" x1="80" y1="105" x2="80" y2="35"/>
<line class="ln" style="stroke-width:1" x1="80" y1="35" x2="250" y2="105"/><line class="ln" style="stroke-width:1" x1="80" y1="175" x2="250" y2="105"/>
<circle class="obj" cx="80" cy="35" r="4"/><circle class="obj" cx="80" cy="175" r="4"/>
<circle class="obj" cx="250" cy="105" r="3.5"/><text class="k" x="246" y="124">P</text>
<line class="ray" x1="250" y1="105" x2="300.9" y2="126"/><polygon style="fill:var(--phy)" points="300.9,126 292,126.65 295,119.25"/>
<line class="ray" x1="250" y1="105" x2="300.9" y2="84"/><polygon style="fill:var(--phy)" points="300.9,84 295,90.75 292,83.35"/>
<line style="stroke:var(--ink);stroke-width:2.5" x1="250" y1="105" x2="333" y2="105"/><polygon style="fill:var(--ink)" points="343,105 333,100 333,110"/>
<text x="88" y="28">dq</text><text x="88" y="195">dq′</text><text x="64" y="75">R</text><text x="160" y="120">z</text><text x="160" y="62">r</text><text x="224" y="100">θ</text>
<text x="300" y="80">dE</text><text x="300" y="142">dE</text><text class="k" x="330" y="96">E</text>
</svg>
:::

By symmetry the components perpendicular to the axis cancel in pairs. Each element contributes an axial component $\dfrac{k\,dq}{r^2}\cos\theta$ with $\cos\theta = z/r$, the same for all elements, so the integral is just the total charge:

:::eq caption="Ring of charge Q, radius R, on its axis at distance z from the centre."
$$E = \frac{kQz}{(z^2+R^2)^{3/2}}$$
:::

Checks: $E = 0$ at $z = 0$ (everything cancels); $E\to kQ/z^2$ for $z\gg R$ (a point charge from far away). Setting $dE/dz = 0$:

$$(z^2+R^2) - 3z^2 = 0 \;\Rightarrow\; z = \frac{R}{\sqrt2},\qquad E_{\max} = \frac{2kQ}{3\sqrt3\,R^2}.$$

:::worked title="A ring on its axis"
**A ring of radius 5 cm carries 10 nC. Find the field on its axis 12 cm from the centre.**

$r = \sqrt{12^2+5^2} = 13$ cm. $E = kQz/r^3 = 9\times10^9\times10^{-8}\times0.12/0.13^3 = 10.8/0.002197 \approx 4.9\times10^3$ N/C, along the axis, away from the ring.

As a point charge at 12 cm it would be $kQ/z^2 = 6.25\times10^3$ N/C. The ring is weaker because its pieces pull partly sideways.
:::

**The disc.** A disc of radius $R$ with surface density $\sigma$ is a set of rings. The ring between $s$ and $s + ds$ has $dq = \sigma\,2\pi s\,ds$, so

$$E = \int_0^R \frac{k\,\sigma\,2\pi s\,ds\;z}{(z^2+s^2)^{3/2}} = 2\pi k\sigma z\left[\frac{1}{z}-\frac{1}{\sqrt{z^2+R^2}}\right] = \frac{\sigma}{2\varepsilon_0}\left(1-\frac{z}{\sqrt{z^2+R^2}}\right).$$

Two limits tell the story:

- **Close up** ($z\ll R$) or an infinite sheet: $E = \sigma/2\varepsilon_0$, **independent of distance**. A plane of charge gives a uniform field; the Gauss's law leaf gets this in one line.
- **Far away** ($z\gg R$): $1 - z/\sqrt{z^2+R^2}\approx R^2/2z^2$, so $E\approx \sigma\pi R^2 k/z^2 = kQ/z^2$. A point charge again.

Why does an infinite sheet give a field that does not weaken? As you move away, each piece's field weakens as $1/r^2$, but the area that contributes at a given angle grows as $r^2$. The two exactly cancel.

:::qc
q: At z = R on the axis of a uniformly charged disc, what fraction of σ/2ε₀ is the field?
options: ["1/2", "1 − 1/√2 ≈ 0.29", "1/√2 ≈ 0.71", "1"]
answer: 1
right: Right. 1 − R/√(2R²) = 1 − 1/√2 ≈ 0.29.
wrong: Put z = R into 1 − z/√(z²+R²). That gives 1 − 1/√2 ≈ 0.29 of the infinite-sheet value.
:::

## Straight rods: finite, semi-infinite, infinite {lvl=3 id=s-rod label="JEE"}

A straight rod carries uniform charge $\lambda$ per metre. Take a point P at perpendicular distance $d$ from the line of the rod, with foot N. Measure angles at P from PN.

:::figure caption="Finite rod AB with uniform charge λ. P is at perpendicular distance d from the line; the ends subtend angles α and β on either side of the perpendicular PN. An element dx at angle φ is shown."
<svg viewBox="0 0 360 200" role="img" aria-label="Horizontal charged rod with a point above it, the perpendicular from the point and the lines to the two ends making angles alpha and beta">
<line class="ray" style="stroke-width:5" x1="40" y1="160" x2="330" y2="160"/>
<circle class="obj" cx="140" cy="50" r="3.5"/><text class="k" x="128" y="42">P</text>
<line class="faint" x1="140" y1="50" x2="140" y2="160"/>
<line class="ln" style="stroke-width:1" x1="140" y1="50" x2="40" y2="160"/><line class="ln" style="stroke-width:1" x1="140" y1="50" x2="330" y2="160"/>
<line class="faint" x1="140" y1="50" x2="240" y2="160"/>
<line style="stroke:var(--ink);stroke-width:4" x1="234" y1="160" x2="246" y2="160"/>
<text x="118" y="84">α</text><text x="150" y="86">β</text><text x="166" y="76">φ</text><text x="146" y="118">d</text>
<text class="k" x="34" y="182">A</text><text class="k" x="136" y="182">N</text><text class="k" x="326" y="182">B</text><text x="220" y="182">dq = λ dx</text>
</svg>
:::

The element at distance $x$ from N (angle $\varphi$, with $x = d\tan\varphi$) is at distance $r = d\sec\varphi$, and $dx = d\sec^2\varphi\,d\varphi$. So

$$dE = \frac{k\lambda\,dx}{r^2} = \frac{k\lambda}{d}\,d\varphi.$$

That is the key simplification: in terms of angle, every slice of angle contributes the same field strength. Resolving across and along the rod and integrating from $-\alpha$ to $\beta$:

:::law caption="Field of a finite straight rod. The along-rod component points away from the longer side (towards the side whose end subtends the smaller angle)."
$$E_\perp = \frac{k\lambda}{d}(\sin\alpha+\sin\beta),\qquad E_\parallel = \frac{k\lambda}{d}\left|\cos\alpha-\cos\beta\right|$$
:::

Special cases:

- **Infinite rod** ($\alpha = \beta = 90^\circ$): $E = \dfrac{2k\lambda}{d} = \dfrac{\lambda}{2\pi\varepsilon_0 d}$, perpendicular. Falls as $1/d$, not $1/d^2$.
- **Semi-infinite rod, P level with its end** ($\alpha = 0$, $\beta = 90^\circ$): $E_\perp = E_\parallel = k\lambda/d$. The resultant $\sqrt2\,k\lambda/d$ points at $45^\circ$ to the rod, **whatever $d$ is**.
- **Point on the rod's own line**, distance $a$ from the near end of a rod of length $L$: here the angle method fails ($d = 0$); integrate directly, $E = k\lambda\int_a^{a+L}\frac{dx}{x^2} = \dfrac{kQ}{a(a+L)}$. From far away ($a\gg L$) it is $kQ/a^2$.

:::qc
q: An infinite line charge gives 1000 N/C at 2 cm from it. What does it give at 4 cm?
options: ["250 N/C", "500 N/C", "1000 N/C", "707 N/C"]
answer: 1
right: Right. E = 2kλ/d falls as 1/d, so doubling d halves E.
wrong: A line charge's field goes as 1/d, not 1/d². Doubling the distance halves it, to 500 N/C.
:::

## Arcs and hemispheres {lvl=3 id=s-arc label="JEE"}

**Arc at its centre.** An arc of radius $R$, charge density $\lambda$, subtends angle $2\theta_0$ at its centre O. Every element is at distance $R$. By symmetry only the component along the arc's line of symmetry survives. The element at angle $\theta$ from that line has $dq = \lambda R\,d\theta$, so

$$E = \int_{-\theta_0}^{\theta_0}\frac{k\lambda R\,d\theta}{R^2}\cos\theta = \frac{2k\lambda}{R}\sin\theta_0.$$

A **semicircle** ($\theta_0 = 90^\circ$) gives $2k\lambda/R$: the same as an infinite straight line at distance $R$. That is no coincidence. Each element of the line is seen from P at angle $\varphi$, and the rod-section result says each $d\varphi$ contributes $k\lambda\,d\varphi/d$, exactly as a circular arc of radius $d$ subtending the same $d\varphi$. You can "bend" a straight rod onto an arc without changing its field at P. A full ring gives zero, as it must.

**Hemispherical shell at its centre.** A hemisphere of radius $R$ carries surface charge $\sigma$. Slice it into rings by the polar angle $\theta$ (measured from the symmetry axis). The ring at $\theta$ has $dq = \sigma\,2\pi R^2\sin\theta\,d\theta$, all at distance $R$ from the centre; only the axial part $\cos\theta$ survives:

$$E = \int_0^{\pi/2}\frac{k\,\sigma\,2\pi R^2\sin\theta\cos\theta\,d\theta}{R^2} = \pi k\sigma = \frac{\sigma}{4\varepsilon_0}.$$

It does not depend on $R$: a bigger bowl has more charge, but it is farther away. A **solid hemisphere** with volume density $\rho$ is a stack of thin shells of thickness $dr$ (each a hemisphere with $\sigma = \rho\,dr$), so at the centre of its flat face $E = \int_0^R \frac{\rho\,dr}{4\varepsilon_0} = \dfrac{\rho R}{4\varepsilon_0}$.

:::qc
q: A uniformly charged semicircular wire of radius R carries total charge Q. What is the field at its centre?
options: ["kQ/R²", "2kQ/(πR²)", "zero", "πkQ/R²"]
answer: 1
right: Right. λ = Q/(πR), and E = 2kλ/R = 2kQ/(πR²).
wrong: Use E = 2kλ/R for a semicircle, with λ = Q/(πR) since the arc length is πR. That gives 2kQ/(πR²).
:::

## Oscillation through a charged ring {lvl=3 id=s-shm label="JEE"}

Near the ring's centre ($z\ll R$), the axial field is

$$E\approx\frac{kQ}{R^3}\,z.$$

It grows linearly with distance, like a spring's force. A particle of charge $-q$ (opposite to the ring's charge) and mass $m$, kept on the axis, feels a restoring force $F = -\dfrac{kQq}{R^3}z$. So it oscillates in simple harmonic motion with

:::eq caption="Small axial oscillations of a charge −q through a ring of charge +Q (or +q through −Q)."
$$\omega = \sqrt{\frac{kQq}{mR^3}} = \sqrt{\frac{Qq}{4\pi\varepsilon_0\,mR^3}}$$
:::

For larger amplitudes the force is weaker than linear (it peaks at $R/\sqrt2$), so the motion is periodic but not simple harmonic, and the period grows with amplitude.

A charge of the **same** sign as the ring is pushed out along the axis: the centre is unstable for it. But it is pulled back if displaced sideways in the plane of the ring. Section "Off the axis" works out why, and how strongly.

:::qc
q: If the ring's radius is doubled (same charge), the period of small axial oscillations becomes
options: ["twice as long", "2√2 times as long", "4 times as long", "half as long"]
answer: 1
right: Right. ω ∝ R^(−3/2), so T ∝ R^(3/2); doubling R multiplies T by 2^(3/2) = 2√2.
wrong: The spring constant is kQq/R³, so ω ∝ R^(−3/2) and T ∝ R^(3/2). Doubling R gives 2^(3/2) = 2√2 ≈ 2.83 times the period.
:::

## The dipole field everywhere {lvl=4 id=s-dipole-general label="Olympiad"}

The axial and equatorial results give the field at **every** point, by superposition. Take a point at distance $r$ from a point dipole, at angle $\theta$ from $\vec p$. Split $\vec p$ into a part $p\cos\theta$ along $\hat r$ and a part $p\sin\theta$ across it. P is on the axis of the first part and on the equator of the second:

$$E_r = \frac{2kp\cos\theta}{r^3},\qquad E_\theta = \frac{kp\sin\theta}{r^3},\qquad |\vec E| = \frac{kp}{r^3}\sqrt{1+3\cos^2\theta}.$$

In vector form, independent of coordinates:

:::eq caption="Field of a point dipole p at displacement r (unit vector r̂) from it."
$$\vec E = \frac{k\left[3(\vec p\cdot\hat r)\hat r-\vec p\right]}{r^3}$$
:::

Some consequences:

- The field direction makes angle $\alpha$ with $\hat r$ where $\tan\alpha = E_\theta/E_r = \tfrac12\tan\theta$.
- The field is **perpendicular to $\vec p$** where $E_r\cos\theta = E_\theta\sin\theta$, that is $\tan^2\theta = 2$, $\theta\approx54.7^\circ$. There the field is purely sideways.
- **The field lines.** Along a line, $\dfrac{dr}{r\,d\theta} = \dfrac{E_r}{E_\theta} = 2\cot\theta$. Integrating, $\ln r = 2\ln\sin\theta + \text{const}$:

$$r = C\sin^2\theta.$$

Each line leaves the dipole near $\theta = 0$, reaches its farthest point $r = C$ on the equator, and returns near $\theta = 180^\circ$. Far from the Earth, its magnetic field lines (roughly those of a magnetic dipole) have approximately the same shape.

:::qc
q: A dipole field line crosses the equator at distance 8 cm from a point dipole. At what angle θ from p is it 2 cm from the dipole?
options: ["15°", "30°", "45°", "60°"]
answer: 1
right: Right. r = C sin²θ with C = 8 cm, so sin²θ = 1/4, sinθ = 1/2, θ = 30°.
wrong: On the equator sin θ = 1, so C = 8 cm. Then 2 = 8 sin²θ gives sinθ = 1/2 and θ = 30°.
:::

## Dipoles in non-uniform fields {lvl=4 id=s-nonuniform label="Olympiad"}

In a non-uniform field the forces on $+q$ and $-q$ no longer cancel, because the two charges sit at points where the field differs. With $\vec d = 2a\hat p$ from $-q$ to $+q$:

$$\vec F = q\vec E(\vec r + \vec d) - q\vec E(\vec r) \approx q(\vec d\cdot\nabla)\vec E = (\vec p\cdot\nabla)\vec E.$$

In words: $\vec F$ is $p$ times the rate at which $\vec E$ changes **as you step along $\vec p$**. In one dimension, a dipole along the $x$-axis in a field $E_x(x)$ feels $F = p\,dE_x/dx$.

**A dipole aligned with a field is drawn into the stronger field.** This is why a charged comb picks up paper. The comb's field polarises the neutral paper (the electric-charge leaf), creating dipoles that point along the field, and the field is stronger nearer the comb.

**Point charge and dipole.** A dipole on the axis of a point charge $Q$, pointing directly away from it, at distance $r$: $E = kQ/r^2$, so $F = p\,\dfrac{dE}{dr} = -\dfrac{2kQp}{r^3}$, an attraction. Check with Newton's third law: the dipole's axial field at $Q$ is $2kp/r^3$, so it pulls on $Q$ with $2kQp/r^3$. Equal and opposite, as it must be.

**Two dipoles.** Put a second dipole $\vec p_2$ on the axis of $\vec p_1$, both pointing along the line joining them, a distance $r$ apart. Along the axis, $E_1 = 2kp_1/r^3$, so

$$F = p_2\frac{dE_1}{dr} = -\frac{6k\,p_1p_2}{r^4}\quad\text{(attraction)}.$$

Coaxial dipoles pointing the same way attract (head-to-tail: the near charges are opposite). Two parallel dipoles side by side repel, with force $3kp_1p_2/r^4$ [the cleanest route to this uses the dipole–dipole energy from the potential leaf]. The $1/r^4$ law is why forces between neutral polar molecules are short-ranged.

:::qc
q: In a non-uniform field, a dipole pointing along the field (p parallel to E) is pushed
options: ["towards the weaker field", "towards the stronger field", "not at all, as in a uniform field", "perpendicular to the field"]
answer: 1
right: Right. F = (p·∇)E points the way |E| increases along p, so an aligned dipole moves into the stronger field.
wrong: The charge facing the stronger field feels a larger force than the other one. For an aligned dipole that net force points into the stronger field, which is why neutral bits of paper jump to a charged comb.
:::

## Field lines are not trajectories {lvl=4 id=s-traj label="Olympiad"}

A field line gives the direction of the **force**, so of the acceleration. A trajectory follows the **velocity**. These agree only in special cases:

- A charge released from rest on a **straight** field line (a uniform field, the axis of a dipole, the radial lines of a point charge) stays on it.
- On a **curved** line, a charge starting from rest first moves along the line. To keep following the curve it would need a sideways (centripetal) force $mv^2/\rho$, where $\rho$ is the line's radius of curvature. The field has no sideways component relative to its own line, so inertia carries the particle to the **outside** of the curve. Its path is always less curved than the line it left.
- A charge with an initial velocity across the field (deflecting plates) obviously does not follow the straight field lines.

They do coincide in one important limit: when friction or collisions dominate inertia, so that velocity is proportional to force. This is the case for ions drifting in a gas or charge carriers in a wire, where drift velocity is proportional to $E$.

:::qc
q: A small positive charge is released from rest on a curved field line between the charges of a dipole. Its path
options: ["follows the field line exactly", "curves less sharply than the field line, drifting to the outside of the curve", "curves more sharply than the field line", "is a straight line along the initial field"]
answer: 1
right: Right. Following the line would need a centripetal force the field does not provide; inertia carries the charge to the outside of the curve.
wrong: The force is along the line's tangent, with no sideways part to bend the path. As the line curves, inertia carries the particle off it, to the outside of the bend.
:::

## Off the axis: the ring near its centre {lvl=4 id=s-offaxis label="Olympiad"}

How does a positive charge behave if it is displaced **in the plane** of a positively charged ring, near the centre? You do not need a new integral. Use the fact that near the centre there is no charge, so the field lines entering any small closed surface must also leave it (zero net flux: the Gauss's law leaf).

Take a small cylinder on the axis, radius $s$, from $z$ to $z + dz$. Axial flux out of its two ends: $\pi s^2\,[E_z(z+dz)-E_z(z)] = \pi s^2\dfrac{kQ}{R^3}dz$, using $E_z\approx kQz/R^3$. This must be balanced by flux **into** the curved side, $2\pi s\,dz\,E_s$, with $E_s$ inward:

$$E_s = -\frac{kQ}{2R^3}\,s.$$

So near the centre the field points **inwards** in the plane, with half the axial strength gradient. A charge $+q$ (same sign as the ring) displaced sideways in the plane is pushed back to the centre, with

$$\omega_{\text{radial}} = \sqrt{\frac{kQq}{2mR^3}},$$

$1/\sqrt2$ of the axial frequency of an opposite charge. Yet along the axis it is pushed out. The centre is a **saddle point**: stable in two directions, unstable in the third. This is Earnshaw's theorem in action: no arrangement of static charges can hold a charge in stable equilibrium in all directions, because zero flux forbids the field from pointing inward everywhere around a point.

:::qc
q: A small negative charge sits at the centre of a positively charged ring. For which displacements is it stable?
options: ["Along the axis only", "In the plane of the ring only", "In every direction", "In no direction"]
answer: 0
right: Right. The ring pulls it back along the axis (that is the SHM above), but in the plane the inward-pointing field pushes a negative charge outward. Stable along the axis, unstable in the plane.
wrong: Reverse the sign in the off-axis result. The in-plane field points inward, so it pushes a negative charge outward (unstable), while along the axis the field points outward and pulls a negative charge back (stable).
:::

## Why the field is real {lvl=4 id=s-real label="Olympiad"}

Electrostatics alone cannot tell "field" from "action at a distance": both give the same forces between charges at rest. The difference shows up when charges move.

Suppose charge A is suddenly moved, and charge B is 300 m away. The force on B does not change for $r/c = 1\ \mu$s; the news of A's move travels outward at the speed of light. During that microsecond the force on A has changed but the force on B has not, so the forces between A and B are **not** equal and opposite. If momentum is to be conserved (and every experiment says it is), the missing momentum must be somewhere: **in the field**. The same goes for energy: a field stores energy with density $\tfrac12\varepsilon_0E^2$ per unit volume (the capacitors leaf derives it).

Once the field carries energy and momentum and its changes travel at a finite speed, it is a physical thing, not a calculating device. A changing electric field together with a changing magnetic field can even travel on its own, away from all charges. That is light; see the Electromagnetic waves leaf.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The electric field is force per unit positive charge, $\vec E = \vec F/q_0$; the force on any charge is $q\vec E$. It replaces action at a distance with something at each point. {lvl=1}
2. Point charge: $E = kQ/r^2$, radially out from $+Q$. Fields of several charges add as vectors. {lvl=2}
3. Field lines start on $+$ and end on $-$, never cross, never close on themselves in electrostatics, and crowd where $E$ is strong. {lvl=2}
4. Dipole $\vec p = q\cdot2a$ from $-$ to $+$. Far field: axial $2kp/r^3$ along $\vec p$, equatorial $kp/r^3$ opposite. Uniform field: no net force, torque $\vec p\times\vec E$. {lvl=2}
5. Continuous charge: $\vec E = \int k\,dq\,\hat r/r^2$; use symmetry first, then integrate one component. Ring $kQz/(z^2+R^2)^{3/2}$; disc $\frac{\sigma}{2\varepsilon_0}(1-z/\sqrt{z^2+R^2})$; infinite line $2k\lambda/d$; semicircle at centre $2k\lambda/R$; hemispherical shell at centre $\sigma/4\varepsilon_0$. {lvl=3}
6. Uniform field: projectile motion with $a = qE/m$. Deflection $Y = qELD/(mv^2)$, as if bent at the plates' centre. Small oscillations through a ring: $\omega = \sqrt{kQq/mR^3}$. {lvl=3}
7. General dipole field $k[3(\vec p\cdot\hat r)\hat r-\vec p]/r^3$, lines $r = C\sin^2\theta$. Non-uniform field: $\vec F = (\vec p\cdot\nabla)\vec E$; coaxial dipoles attract with $6kp_1p_2/r^4$. Field lines are not trajectories. The field carries energy and momentum. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The direction of $\vec E$ is the force on a **positive** charge. For an electron, the force is opposite to the field. {lvl=1}
- Add fields as vectors, never as plain numbers. Draw each charge's field at the point first, then resolve. {lvl=2}
- Dipole moment points from $-q$ to $+q$ (opposite to the chemists' older arrow convention). The equatorial field points from the $+$ end towards the $-$ end, opposite to $\vec p$. {lvl=2}
- $2kp/r^3$ and $kp/r^3$ are far-field formulas. Close to the dipole ($r$ comparable to $a$), use the exact expressions. {lvl=2}
- For continuous charges, write $dq$ and the distance $r$ to P in terms of one variable before integrating, and kill cancelling components by symmetry, not by integrating them. {lvl=3}
- The rod formula needs P **off** the line of the rod. For points on the line, integrate $k\lambda\,dx/x^2$ directly. {lvl=3}
- In deflection problems, $D$ is measured from the **centre** of the plates. Check the exit deflection is smaller than half the plate gap, or the particle hits a plate. {lvl=3}
- A ring's centre is stable along the axis only for charges of the opposite sign. No static charge arrangement traps a charge in all directions (Earnshaw). {lvl=4}
- In a non-uniform field a dipole feels both a torque and a net force. Don't assume the force vanishes because the dipole is neutral. {lvl=4}
:::
