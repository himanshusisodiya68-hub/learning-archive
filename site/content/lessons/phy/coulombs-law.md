---
title: Coulomb's law
summary: The force between two point charges. Why it falls as 1/r², how Coulomb measured it, the vector form and Newton's third law, k and ε₀, superposition, the 10³⁹ comparison with gravity, hanging spheres and rings of charge, the shell theorem, Earnshaw's theorem and unstable equilibria, charges in orbit and on rotating frames, and how precisely the exponent 2 has been tested.
ncert: ["Class 12 Physics · Ch 1 Electric Charges and Fields (§1.5–1.6)"]
up_to: Olympiad
builds_on: [Electric charge, Newton's laws of motion, Vectors, Newton's law of gravitation]
notes_prompt: Explain in your own words why a force that spreads out evenly in three-dimensional space must fall off as 1/r², and why that same exponent makes the force inside a uniformly charged shell exactly zero.
margin:
  - kind: history
    title: History
    text: "Charles-Augustin de Coulomb published his torsion-balance measurements in 1785. Joseph Priestley had guessed the inverse-square law earlier (1767) from the absence of charge effects inside a hollow conductor, and Henry Cavendish tested it around 1773 but did not publish. [Unverified: dates recalled from memory.]"
  - kind: tip
    title: Count before you compute
    text: "In any arrangement of charges, look for symmetry first. Equal charges at equal distances in opposite directions cancel; a regular polygon of equal charges exerts zero net force at its centre. Only then reach for components."
  - kind: olympiad
    title: Olympiad link
    text: "Near any point free of charge, the three 'spring constants' of the electric force always add to zero (Earnshaw). So if a charge is pushed back along two directions, it is pushed away along the third. Use this to get one stiffness from the other two without integrating."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 1 Electric Charges and Fields, §1.5 Coulomb's law, §1.6 Forces between multiple charges" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 29 Electric Field and Potential (Coulomb's law sections) [Unverified chapter reference]" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 1 Electrostatics: charges and fields [Unverified chapter reference]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.1 Constant electric field in vacuum [Unverified chapter reference]" }
cards:
  - { front: "Coulomb's law in vector form (force on 2 due to 1)?", back: "$\\mathbf F_{21} = \\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q_1q_2}{r_{21}^2}\\,\\hat{\\mathbf r}_{21}$, with $\\hat{\\mathbf r}_{21}$ pointing from 1 to 2. The sign of $q_1q_2$ decides repulsion or attraction." }
  - { front: "Why 1/r² and not some other power?", back: "Whatever spreads out from a point in 3D is shared over a sphere of area $4\\pi r^2$. A force that is 'carried' undiminished outward must therefore weaken as $1/r^2$." }
  - { front: "Ratio of electric to gravitational force, electron and proton?", back: "About $2.3\\times10^{39}$, independent of distance. For two protons about $1.2\\times10^{36}$." }
  - { front: "Two like charges q and 4q are distance L apart. Where does a third charge feel no force?", back: "Between them, at $L/3$ from $q$ (distance from each $\\propto\\sqrt{\\text{charge}}$). If all three are free, the third must be $-4q/9$." }
  - { front: "Force on a charge q on the axis of a ring (charge Q, radius R) at distance z?", back: "$F = \\dfrac{kQq\\,z}{(R^2+z^2)^{3/2}}$ along the axis; largest at $z = R/\\sqrt2$." }
  - { front: "Earnshaw's theorem in one line?", back: "A charge cannot rest in stable equilibrium under electrostatic forces alone, because the stiffnesses along three perpendicular directions add to zero." }
---

:::hook
q: The electric force between an electron and a proton is about 10³⁹ times their gravitational attraction. Why, then, do the planets move under gravity and not under electric forces?
options: ["Electric forces fall off faster with distance than gravity", "Large bodies are almost exactly neutral, so their electric forces cancel", "Electric forces cannot act across empty space", "Gravity grows stronger at large distances"]
answer: 1
right: Right. Both forces fall as 1/r². But charge comes in two signs and matter is neutral to better than one part in 10¹⁸, so the huge attractions and repulsions cancel. Mass has only one sign, so gravity adds up.
wrong: Both forces fall as 1/r², and both act across empty space. The difference is that charge comes in two signs. Planets are almost perfectly neutral, so the electric pushes and pulls of their particles cancel, while every kilogram adds to gravity.
:::

## What Coulomb measured {lvl=2 id=s-law label="Class 12"}

Rub a comb and it picks up paper; two rubbed balloons push apart. The lesson on electric charge established that charge comes in two kinds, is conserved and is quantised. The next question is **how strong** the push or pull is, and how it depends on the charges and on the distance between them.

To answer it cleanly we need **point charges**: charged bodies so small compared with their separation that their size and shape do not matter. Two charged marbles a metre apart are point charges; the same marbles touching are not.

For two point charges $q_1$ and $q_2$ at rest, a distance $r$ apart, experiment gives three facts:

1. The force acts **along the line** joining them.
2. It is **proportional to each charge**: double $q_1$ and the force doubles.
3. It falls as the **inverse square** of the distance: double $r$ and the force drops to a quarter.

:::law caption="Coulomb's law (magnitude). Like charges repel, unlike charges attract."
$$F = k\,\frac{|q_1q_2|}{r^2}, \qquad k = \frac{1}{4\pi\varepsilon_0} \approx 9\times10^{9}\ \text{N m}^2\,\text{C}^{-2}$$
:::

**How Coulomb did it.** Coulomb used a **torsion balance**. A light insulating rod hangs from a thin wire, with a small charged ball A at one end. A second charged ball B is brought near A. The repulsion turns the rod, and the wire twists until its restoring torque balances the electric torque. The twist of a wire is proportional to the torque, so the angle of twist measures the force.

:::figure caption="A torsion balance. The repulsion between B and A twists the fibre; the twist angle is proportional to the force. Turning the torsion head to bring A back to a fixed distance measures the force at that distance."
<svg viewBox="0 0 300 200" role="img" aria-label="Torsion balance: a fibre hanging from a torsion head holds a horizontal rod with ball A at one end and a counterweight at the other; a fixed ball B on an insulating stem sits beside A">
<rect x="110" y="8" width="80" height="14" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.5"/>
<text class="lbl" x="196" y="19">torsion head</text>
<line class="ln" x1="150" y1="22" x2="150" y2="110"/>
<text class="lbl" x="156" y="70">fibre</text>
<line class="pen" x1="70" y1="110" x2="230" y2="110" style="stroke-width:3"/>
<circle class="obj" cx="70" cy="110" r="9"/>
<circle cx="230" cy="110" r="7" style="fill:var(--muted)"/>
<line class="faint" x1="40" y1="30" x2="40" y2="128"/>
<circle cx="40" cy="138" r="9" style="fill:var(--phy)"/>
<text class="k" x="64" y="96">A</text><text class="k" x="22" y="160">B</text>
<line class="ray" x1="82" y1="122" x2="110" y2="140"/>
<polygon points="110,140 100,138 104,131" style="fill:var(--phy)"/>
<text class="lbl" x="104" y="158">A pushed away</text>
<path class="axis" d="M60,185 Q150,200 240,185"/>
<text class="lbl" x="120" y="184">angle scale</text>
</svg>
:::

To vary the charges, Coulomb used the trick of NCERT Example 1.4. Touching a charged ball with an identical uncharged one shares the charge equally, by symmetry, so each keeps half. He could make $q, q/2, q/4, \dots$ without ever measuring a charge.

:::qc
q: Two point charges repel with 12 N. One charge is tripled and the distance is doubled. What is the new force?
options: ["9 N", "18 N", "4 N", "36 N"]
answer: 0
right: Right. Tripling one charge multiplies F by 3; doubling r divides it by 4. So 12 × 3/4 = 9 N.
wrong: F ∝ q₁q₂/r². Tripling one charge gives ×3, doubling r gives ÷4, so F becomes 12 × 3/4 = 9 N.
:::

## Why the inverse square? {lvl=2 id=s-why label="Class 12"}

The power 2 is not an accident. It is the signature of **three-dimensional space**.

Picture the influence of a charge as something that streams out equally in all directions, like light from a bulb or paint from a spray can. Nothing is lost on the way. At distance $r$ the same total amount is spread over a sphere of area $4\pi r^2$. At distance $2r$ the sphere has four times the area, so each square metre gets a quarter as much.

:::figure caption="The same lines leave the charge and cross both spheres. The sphere of radius 2r has four times the area, so the lines per unit area, and the force on a test charge, are four times smaller."
<svg viewBox="0 0 320 220" role="img" aria-label="A point charge with eight radial lines crossing two concentric circles of radius r and 2r">
<circle class="faint" cx="110" cy="110" r="40"/>
<circle class="faint" cx="110" cy="110" r="80"/>
<g class="ray">
<line x1="110" y1="110" x2="210" y2="110"/><line x1="110" y1="110" x2="10" y2="110"/>
<line x1="110" y1="110" x2="110" y2="10"/><line x1="110" y1="110" x2="110" y2="210"/>
<line x1="110" y1="110" x2="180.7" y2="39.3"/><line x1="110" y1="110" x2="39.3" y2="39.3"/>
<line x1="110" y1="110" x2="180.7" y2="180.7"/><line x1="110" y1="110" x2="39.3" y2="180.7"/>
</g>
<circle class="obj" cx="110" cy="110" r="6" style="fill:var(--phy)"/>
<text class="k" x="140" y="104">r</text><text class="k" x="176" y="104">2r</text>
<text class="lbl" x="214" y="60">area 4πr²</text>
<text class="lbl" x="214" y="80">area 4π(2r)² = 4 × 4πr²</text>
<text class="lbl" x="214" y="110">same lines</text>
<text class="lbl" x="214" y="130">→ ¼ per m²</text>
</svg>
:::

So any influence that spreads from a point in 3D, without being created or absorbed on the way, weakens as $1/r^2$. Light intensity, sound intensity far from a source, gravity and the electric force all share this law. In a flat 2D world the same argument would give $1/r$ (circumference $2\pi r$).

This is a **picture**, not a proof: nature could have chosen otherwise. That is why the exponent is tested by experiment (the last section), and why the lesson on Gauss's law turns this picture into the exact statement that the electric flux through any closed surface depends only on the charge inside.

:::qc
q: In an imaginary world with four space dimensions, a "sphere" of radius r has a surface that grows as r³. By the spreading argument, how would the force between point charges depend on r?
options: ["1/r²", "1/r³", "1/r⁴", "1/r"]
answer: 1
right: Right. The same total influence is spread over a surface ∝ r³, so the force goes as 1/r³. The exponent is always (number of dimensions − 1).
wrong: The force per unit area goes as 1/(surface area). If the surface grows as r³, the force falls as 1/r³.
:::

## Units: k, ε₀ and the coulomb {lvl=2 id=s-units label="Class 12"}

In SI units the charge is measured in **coulombs**, defined independently of this law. Since 2019 the coulomb is fixed by declaring the electron's charge to be exactly $e = 1.602176634\times10^{-19}$ C. One coulomb is then about $6.24\times10^{18}$ elementary charges.

Because the units of force, distance and charge are all fixed separately, the constant $k$ has to be measured. It comes out as

$$k = 8.988\times10^{9}\ \text{N m}^2\,\text{C}^{-2} \approx 9\times10^{9},$$

so 1 C is an enormous charge: two 1 C charges a metre apart would push with $9\times10^9$ N, about the weight of a million tonnes. Laboratory charges are microcoulombs or nanocoulombs.

**Why write $k = 1/4\pi\varepsilon_0$?** The factor $4\pi r^2$ is the area of the sphere from the last section. Writing

$$F = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2} = \frac{q_1q_2}{\varepsilon_0\,(4\pi r^2)}$$

puts the sphere's area in plain sight. The cost is a $4\pi$ in Coulomb's law; the reward is that the $4\pi$ disappears from the laws used far more often (Gauss's law, the capacitor formula $C = \varepsilon_0A/d$). The constant $\varepsilon_0 = 8.854\times10^{-12}$ C² N⁻¹ m⁻² is the **permittivity of free space**.

:::note title="Coulomb's law in a medium"
If the charges sit in an insulating medium such as water or oil, the force is smaller by a factor $K$ (the dielectric constant, about 80 for water). The reason (the medium's molecules line up and partly screen the charges) belongs to the lesson on dielectrics and capacitors. Here we take the charges to be in vacuum or air.
:::

:::qc
q: How many electrons must be removed from a neutral object to give it a charge of +1 µC?
options: ["6.25 × 10¹²", "6.25 × 10¹⁸", "1.6 × 10¹³", "1.6 × 10⁻¹³"]
answer: 0
right: Right. n = q/e = 10⁻⁶ / 1.6 × 10⁻¹⁹ = 6.25 × 10¹².
wrong: Divide the charge by e: n = 10⁻⁶ / (1.6 × 10⁻¹⁹) = 6.25 × 10¹² electrons.
:::

## The vector form and Newton's third law {lvl=2 id=s-vector label="Class 12"}

A force has a direction, and Coulomb's law must say which way it points. Place $q_1$ at position $\mathbf r_1$ and $q_2$ at $\mathbf r_2$. Let

$$\mathbf r_{21} = \mathbf r_2 - \mathbf r_1, \qquad \hat{\mathbf r}_{21} = \frac{\mathbf r_{21}}{r_{21}},$$

the vector and the unit vector **from 1 to 2**.

:::figure caption="Position vectors r₁ and r₂ from the origin O. The vector r₂₁ points from q₁ to q₂. For like charges F₂₁ (on 2) points along r̂₂₁ and F₁₂ (on 1) points the opposite way."
<svg viewBox="0 0 320 240" role="img" aria-label="Two charges q1 and q2 with position vectors from an origin, the separation vector from q1 to q2, and equal and opposite forces on each">
<circle class="obj" cx="30" cy="225" r="3" style="fill:var(--muted)"/>
<text class="lbl" x="12" y="236">O</text>
<line class="faint" x1="30" y1="225" x2="90" y2="160"/>
<line class="faint" x1="30" y1="225" x2="240" y2="70"/>
<text class="lbl" x="42" y="186">r₁</text><text class="lbl" x="150" y="160">r₂</text>
<line class="ln" x1="90" y1="160" x2="240" y2="70" style="stroke-width:1.6;opacity:1"/>
<text class="k" x="150" y="105">r₂₁</text>
<circle class="obj" cx="90" cy="160" r="7" style="fill:var(--phy)"/>
<circle class="obj" cx="240" cy="70" r="7" style="fill:var(--phy)"/>
<text class="k" x="98" y="180">q₁</text><text class="k" x="226" y="94">q₂</text>
<line class="ray" x1="240" y1="70" x2="283" y2="44"/>
<polygon points="283,44 277.3,52 273.2,45.2" style="fill:var(--phy)"/>
<text class="k" x="270" y="34">F₂₁</text>
<line class="ray" x1="90" y1="160" x2="47" y2="186"/>
<polygon points="47,186 56.8,184.8 52.7,178" style="fill:var(--phy)"/>
<text class="k" x="22" y="176">F₁₂</text>
</svg>
:::

:::law caption="Coulomb's law, vector form: force on q₂ due to q₁."
$$\mathbf F_{21} = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1q_2}{r_{21}^2}\,\hat{\mathbf r}_{21} = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1q_2}{|\mathbf r_2-\mathbf r_1|^3}\,(\mathbf r_2-\mathbf r_1)$$
:::

The beauty of this form is that **signs take care of direction**. If $q_1q_2 > 0$ the force on 2 points along $\hat{\mathbf r}_{21}$, away from 1: repulsion. If $q_1q_2 < 0$ it points towards 1: attraction. You never have to decide "attractive or repulsive" separately; put the signed charges in and the vector comes out right.

Swapping the labels gives $\mathbf F_{12}$, with $\hat{\mathbf r}_{12} = -\hat{\mathbf r}_{21}$, so

$$\mathbf F_{12} = -\mathbf F_{21}.$$

Coulomb forces between two static charges obey **Newton's third law**: equal, opposite and along the line joining them (a "central" force). This is why, in NCERT Example 1.6, the three forces on $q, q, -q$ at the corners of a triangle add to zero: the internal forces of any system of static charges cancel in pairs.

:::note title="Only for charges at rest" tone=warn
For moving charges the magnetic forces are not always equal and opposite, and the electric field of a fast charge is no longer the simple Coulomb field. The momentum books balance only once the field's own momentum is counted. In this lesson the charges are at rest, or slow enough for Coulomb's law to hold.
:::

:::qc
q: A charge of −2 µC is at the origin and +3 µC at (0, 0.3 m). Which way does the force on the +3 µC charge point?
options: ["Along −y (towards the origin)", "Along +y", "Along +x", "There is no force"]
answer: 0
right: Right. q₁q₂ < 0, so F₂₁ points opposite to r̂₂₁ = +ŷ: along −y, towards the negative charge. Its size is 9 × 10⁹ × 6 × 10⁻¹² / 0.09 = 0.6 N.
wrong: The product q₁q₂ is negative, so the force on the second charge points opposite to the unit vector from 1 to 2. That unit vector is +ŷ, so the force is along −y: attraction.
:::

## Electric force versus gravity: what 10³⁹ means {lvl=2 id=s-gravity label="Class 12"}

Newton's law of gravitation, $F = Gm_1m_2/r^2$, has exactly the same form. So the ratio of the two forces between the same pair of particles does **not depend on distance**. For an electron and a proton:

$$\frac{F_e}{F_G} = \frac{ke^2}{Gm_em_p} = \frac{8.99\times10^9\times(1.602\times10^{-19})^2}{6.674\times10^{-11}\times9.109\times10^{-31}\times1.673\times10^{-27}} \approx 2.3\times10^{39}.$$

For two protons it is about $1.2\times10^{36}$. NCERT quotes $2.4\times10^{39}$ and $1.3\times10^{36}$; the small difference comes from rounding of the constants.

**What such a number means.** Gravity is ridiculously weak between particles. It wins in astronomy only because **mass has one sign and charge has two**. Matter is so nearly neutral that the electric forces cancel.

How nearly? Two equal bodies of mass $M$ with net charge $Q$ each repel electrically as much as they attract gravitationally when $kQ^2 = GM^2$, i.e.

$$\frac{Q}{M} = \sqrt{\frac{G}{k}} = \sqrt{\frac{6.67\times10^{-11}}{8.99\times10^{9}}} \approx 8.6\times10^{-11}\ \text{C/kg}.$$

A proton carries $e/m_p \approx 9.6\times10^{7}$ C/kg. So an imbalance of just one unpaired proton per $10^{18}$ or so would cancel the gravity between two bodies. The Earth and the Sun are neutral far better than that.

:::worked title="Two people with 1% extra electrons"
Take two 70 kg people 1 m apart, and suppose each had 1% more electrons than protons. A body contains roughly as many neutrons as protons, so the number of protons is about $\tfrac12\times70/(1.67\times10^{-27}) \approx 2\times10^{28}$. One per cent of that is $2\times10^{26}$ electrons, a charge of $2\times10^{26}\times1.6\times10^{-19}\approx3\times10^{7}$ C. The repulsion would be

$$F \approx 9\times10^{9}\times\frac{(3\times10^{7})^2}{1^2}\approx10^{25}\ \text{N},$$

hundreds of times the Sun's gravitational pull on the whole Earth (about $3.5\times10^{22}$ N). [Inference] This is an order-of-magnitude estimate; the point is that even a tiny charge imbalance in ordinary matter would be overwhelming.
:::

At the other end, inside atoms and molecules, gravity is irrelevant. Every chemical bond, the stiffness of solids, friction and the contact forces of everyday mechanics are electrical in origin.

:::qc
q: The ratio F_e/F_G for two protons is about 10³⁶. If the protons are moved ten times farther apart, the ratio becomes
options: ["about 10³⁶ (unchanged)", "about 10³⁴", "about 10³⁸", "about 10³⁵"]
answer: 0
right: Right. Both forces fall as 1/r², so their ratio does not depend on r at all.
wrong: Both laws contain 1/r². The distance cancels in the ratio, so it stays about 10³⁶.
:::

## Superposition: many charges {lvl=2 id=s-super label="Class 12"}

With three or more charges, what is the force on one of them? Experiment answers: **the force between any two charges is unaffected by the presence of others**, and the total force is the vector sum of the separate two-body forces:

$$\mathbf F_1 = \mathbf F_{12} + \mathbf F_{13} + \dots + \mathbf F_{1n} = \frac{q_1}{4\pi\varepsilon_0}\sum_{i=2}^{n}\frac{q_i}{r_{1i}^2}\,\hat{\mathbf r}_{1i},$$

where $\hat{\mathbf r}_{1i}$ points from $q_i$ to $q_1$.

This **principle of superposition** is an experimental fact, not a logical necessity. One could imagine a law where a third charge nearby weakens the force between the first two; nature does not do this in classical electrostatics. [Inference] At extremely strong fields, quantum effects (light scattering off light) make tiny departures from superposition, far beyond anything in ordinary physics.

**How to use it.**
1. Draw each two-body force on the chosen charge as an arrow, with the right direction (away from like charges, towards unlike ones).
2. Find each magnitude from Coulomb's law.
3. Use symmetry to cancel what you can, then add the rest by components.

:::worked title="A charge at the centre of a square (NCERT Exercise 1.6 style)"
Charges $+2, -5, +2, -5\ \mu$C sit at the corners A, B, C, D of a square, and $1\ \mu$C is at the centre O. Every corner is the same distance from O. A and C carry equal charges and lie on opposite sides of O, so their forces on the centre charge are equal and opposite. The same holds for B and D. The net force is **zero**, without a single number being computed.

Now remove the charge at D. The centre charge feels only the uncancelled force of B. With side 10 cm, $OB = 5\sqrt2$ cm $= 0.0707$ m, so

$$F = 9\times10^{9}\times\frac{(1\times10^{-6})(5\times10^{-6})}{(0.0707)^2} = 9.0\ \text{N},$$

directed towards B (attraction).
:::

:::qc
q: Equal charges +q sit at five of the six corners of a regular hexagon. A charge Q at the centre feels a net force F. What is F, in terms of the force f that one corner charge alone exerts on Q?
options: ["f, pointing towards the empty corner", "f, pointing away from the empty corner", "5f", "zero"]
answer: 0
right: Right. Six charges would give zero by symmetry. Removing one, at an empty corner, is the same as adding −q there to the full ring. So the net force is that of −q at that corner, f directed towards it (for Q of the same sign as q).
wrong: Think of it as the full hexagon (net force zero) plus a charge −q at the empty corner. The full ring contributes nothing, so the answer is the force of −q alone: magnitude f, towards the empty corner (attraction if Q has the sign of q).
:::

## Hanging charged spheres {lvl=3 id=s-strings label="JEE"}

The commonest Coulomb's-law problem in JEE: two small balls of mass $m$, equal charge $q$, hanging from one point by threads of length $L$. They repel and stand apart, each thread at angle $\theta$ to the vertical.

:::figure caption="Each ball is in equilibrium under the thread tension T, its weight mg and the Coulomb repulsion F. The three forces form a closed triangle, so F = mg tan θ."
<svg viewBox="0 0 300 250" role="img" aria-label="Two charged balls hanging from a common point by threads at angle theta to the vertical, with tension, weight and repulsion forces drawn on the right ball">
<line class="ln" x1="110" y1="16" x2="190" y2="16" style="stroke-width:3;opacity:1"/>
<line class="ln" x1="150" y1="20" x2="101" y2="172" style="opacity:1"/>
<line class="ln" x1="150" y1="20" x2="199" y2="172" style="opacity:1"/>
<line class="axis" x1="150" y1="20" x2="150" y2="200"/>
<path class="faint" d="M150,60 A40,40 0 0 0 162.3,58" style="stroke-dasharray:none"/>
<text class="k" x="156" y="76">θ</text>
<circle class="obj" cx="101" cy="172" r="8" style="fill:var(--phy)"/>
<circle class="obj" cx="199" cy="172" r="8" style="fill:var(--phy)"/>
<line class="ray" x1="199" y1="172" x2="249" y2="172"/>
<polygon points="249,172 241,168 241,176" style="fill:var(--phy)"/>
<text class="k" x="254" y="176">F</text>
<line class="ray" x1="199" y1="172" x2="199" y2="232"/>
<polygon points="199,232 195,224 203,224" style="fill:var(--phy)"/>
<text class="k" x="206" y="236">mg</text>
<line class="ray" x1="199" y1="172" x2="180" y2="112"/>
<polygon points="180,112 186.3,119.4 178.7,121.8" style="fill:var(--phy)"/>
<text class="k" x="166" y="110">T</text>
<line class="faint" x1="101" y1="196" x2="199" y2="196"/>
<text class="lbl" x="140" y="212">r = 2L sin θ</text>
<text class="lbl" x="104" y="96">L</text>
</svg>
:::

**Equilibrium.** Resolve along the vertical and horizontal: $T\cos\theta = mg$ and $T\sin\theta = F$. Dividing,

$$F = mg\tan\theta, \qquad \frac{kq^2}{(2L\sin\theta)^2} = mg\tan\theta.$$

This is exact for any angle. Two common follow-ups:

- **Small angles.** With $\tan\theta\approx\sin\theta\approx\theta$ and $r = 2L\theta$, the condition becomes $kq^2/r^2 = mg\,r/(2L)$, so
$$r^3 = \frac{2kq^2L}{mg}, \qquad r\propto q^{2/3}.$$
- **Leaking charge.** If the balls slowly lose charge, $r$ shrinks. Differentiating $r^3\propto q^2$: $3r^2\dot r\propto 2q\dot q$, so with a constant leak rate $\dot q$, the speed of approach goes as $\dot r\propto q/r^2\propto r^{3/2}/r^2 = r^{-1/2}$. The balls approach faster as they get closer.

:::worked title="How far apart?"
Balls of mass 1.0 g on threads 1.0 m long each carry 50 nC. Small-angle formula with $k = 9\times10^9$, $g = 9.8$ m/s²:

$$r^3 = \frac{2\times9\times10^{9}\times(5\times10^{-8})^2\times1.0}{10^{-3}\times9.8} = 4.6\times10^{-3}\ \text{m}^3, \qquad r \approx 0.166\ \text{m}.$$

Check: $\theta\approx r/2L = 0.083$ rad $\approx4.8^\circ$, small enough for the approximation.
:::

:::qc
q: In the small-angle limit, the charge on each hanging ball is doubled. By what factor does their separation change?
options: ["2^(2/3) ≈ 1.59", "2", "4", "√2 ≈ 1.41"]
answer: 0
right: Right. r³ ∝ q², so r ∝ q^(2/3), and doubling q multiplies r by 2^(2/3) ≈ 1.59.
wrong: From kq²/r² = mg r/(2L) we get r³ ∝ q², so r ∝ q^(2/3). Doubling q gives a factor 2^(2/3) ≈ 1.59.
:::

## A ring of charge {lvl=3 id=s-ring label="JEE"}

Superposition becomes an integral when charge is spread out. The simplest useful case: charge $Q$ spread uniformly round a thin ring of radius $R$, and a point charge $q$ on the ring's axis at distance $z$ from the centre.

:::figure caption="Each element dQ of the ring pushes q along the line joining them. Elements on opposite sides of the ring give sideways components that cancel; the axial components add."
<svg viewBox="0 0 320 220" role="img" aria-label="A ring seen obliquely, with a charge on its axis; forces from the top and bottom elements of the ring are shown, and their sideways parts cancel">
<ellipse cx="90" cy="110" rx="22" ry="70" style="fill:none;stroke:var(--phy);stroke-width:3"/>
<line class="axis" x1="20" y1="110" x2="300" y2="110"/>
<line class="faint" x1="90" y1="40" x2="250" y2="110"/>
<line class="faint" x1="90" y1="180" x2="250" y2="110"/>
<line class="ln" x1="90" y1="110" x2="90" y2="40" style="opacity:1"/>
<text class="k" x="74" y="78">R</text>
<text class="k" x="164" y="126">z</text>
<circle class="obj" cx="90" cy="40" r="4" style="fill:var(--ink)"/><circle class="obj" cx="90" cy="180" r="4" style="fill:var(--ink)"/>
<text class="k" x="96" y="34">dQ</text><text class="k" x="96" y="198">dQ′</text>
<circle class="obj" cx="250" cy="110" r="6" style="fill:var(--phy)"/>
<text class="k" x="240" y="134">q</text>
<line class="ray" x1="250" y1="110" x2="291" y2="128"/>
<polygon points="291,128 281.3,128.1 284.5,120.7" style="fill:var(--phy)"/>
<line class="ray" x1="250" y1="110" x2="291" y2="92"/>
<polygon points="291,92 284.5,99.3 281.3,91.9" style="fill:var(--phy)"/>
<text class="lbl" x="230" y="78">dF from dQ′</text><text class="lbl" x="230" y="152">dF from dQ</text>
<text class="lbl" x="200" y="210">sideways parts cancel</text>
</svg>
:::

Every element $dQ$ is at the same distance $d = \sqrt{R^2+z^2}$ from $q$, and its force $k\,q\,dQ/d^2$ makes the same angle with the axis, with cosine $z/d$. The sideways parts cancel in opposite pairs. The axial parts all add:

$$F = \frac{kq}{d^2}\cdot\frac{z}{d}\sum dQ = \frac{kQq\,z}{(R^2+z^2)^{3/2}}.$$

:::law caption="Force on a point charge on the axis of a uniform ring, directed along the axis."
$$F(z) = \frac{1}{4\pi\varepsilon_0}\,\frac{Qq\,z}{(R^2+z^2)^{3/2}}$$
:::

**Checks.** At $z = 0$ the force is zero (symmetry). For $z\gg R$, $F\to kQq/z^2$: from far away the ring looks like a point charge. In between the force has a **maximum**. Setting $dF/dz = 0$:

$$(R^2+z^2) - 3z^2 = 0 \quad\Longrightarrow\quad z = \frac{R}{\sqrt2}, \qquad F_{\max} = \frac{2}{3\sqrt3}\,\frac{kQq}{R^2}.$$

**Small oscillations on the axis.** If $q$ and $Q$ have **opposite** signs, the force near the centre pulls $q$ back. For $z\ll R$,

$$F \approx -\frac{k|Qq|}{R^3}\,z,$$

a spring law with stiffness $k|Qq|/R^3$. A charge of mass $m$ released near the centre therefore oscillates along the axis with

$$\omega = \sqrt{\frac{k|Qq|}{mR^3}}, \qquad T = 2\pi\sqrt{\frac{4\pi\varepsilon_0\,mR^3}{|Qq|}}.$$

For large amplitudes the motion is still periodic but no longer simple harmonic, because the force is weaker than linear beyond $z\sim R/\sqrt2$.

:::qc
q: A charge sits on the axis of a charged ring at z = R. Compared with a point charge Q at the ring's centre, the ring exerts a force that is
options: ["1/(2√2) ≈ 0.35 times as large", "the same", "half as large", "√2 times as large"]
answer: 0
right: Right. Ring: kQq·R/(2R²)^(3/2) = kQq/(2√2 R²). Point charge at distance R: kQq/R². Ratio 1/(2√2) ≈ 0.35. The ring is weaker because its pieces are farther away and pull at an angle.
wrong: Put z = R into kQqz/(R² + z²)^(3/2): you get kQq/(2√2 R²), which is 1/(2√2) ≈ 0.35 of kQq/R².
:::

## Three charges on a line {lvl=3 id=s-collinear label="JEE"}

Two fixed charges $q_1$ and $q_2$ (same sign) sit a distance $L$ apart. Where can a third charge rest?

**Where.** Outside the pair, both forces on the third charge point the same way and cannot cancel. Between them they point oppositely and cancel where

$$\frac{q_1}{x^2} = \frac{q_2}{(L-x)^2} \quad\Longrightarrow\quad \frac{x}{L-x} = \sqrt{\frac{q_1}{q_2}}, \qquad x = \frac{L\sqrt{q_1}}{\sqrt{q_1}+\sqrt{q_2}}.$$

The point is closer to the smaller charge, and does not depend on the third charge at all, neither its size nor its sign.

(If $q_1$ and $q_2$ have opposite signs, the balance point lies outside the pair, beyond the smaller one.)

**All three free.** Now let all three charges be free. The third charge $Q$ must also hold $q_1$ in balance against $q_2$'s repulsion, so $Q$ must be of the opposite sign, with

$$\frac{k|Q|q_1}{x^2} = \frac{kq_1q_2}{L^2} \quad\Longrightarrow\quad Q = -q_2\frac{x^2}{L^2} = -\frac{q_1q_2}{(\sqrt{q_1}+\sqrt{q_2})^2}.$$

The third charge's balance is already guaranteed by the choice of $x$, and the balance of $q_2$ then follows automatically, because the three internal forces add to zero (Newton's third law).

:::worked title="+q and +4q"
With $q_1 = q$, $q_2 = 4q$: $\sqrt{q_1}:\sqrt{q_2} = 1:2$, so $x = L/3$ from $q$. If all three are free, $Q = -q\cdot4q/(1+2)^2q = -\tfrac49 q$.
:::

Every one of these equilibria is **unstable** in some direction. The balance point between two like charges, for example, is stable along the line (move towards one charge and it pushes back harder) but unstable sideways. The next-but-one section explains why this is not bad luck.

:::qc
q: Charges +9 µC and +1 µC are 40 cm apart. Where between them does a third charge feel zero force?
options: ["30 cm from the +9 µC charge", "10 cm from the +9 µC charge", "20 cm from each", "36 cm from the +9 µC charge"]
answer: 0
right: Right. Distances are in the ratio √9 : √1 = 3 : 1, so 30 cm from +9 µC and 10 cm from +1 µC.
wrong: Distances from the two charges are in the ratio of the square roots of the charges, 3 : 1. So the point is 30 cm from the +9 µC charge and 10 cm from the +1 µC charge.
:::

## The shell theorem for charges {lvl=3 id=s-shell label="JEE"}

Newton proved two remarkable facts for gravity, and the same proofs work for charge because they rely only on the $1/r^2$ law and superposition. For a thin spherical shell carrying charge $Q$ spread uniformly:

1. On a point charge **outside**, the shell exerts the same force as a point charge $Q$ at its centre.
2. On a point charge **anywhere inside**, it exerts **zero** force.

**Newton's argument for the inside.** Take a point P inside the shell and draw a thin double cone through P. It cuts out two patches of the shell, one near and one far.

:::figure caption="A thin double cone through an interior point P cuts two patches from the shell. Their areas grow as the square of the distance from P, and their forces fall as the inverse square, so the two forces are equal and opposite."
<svg viewBox="0 0 300 220" role="img" aria-label="Circle representing a shell with an off-centre point P inside; a narrow double cone through P meets the shell in a small near patch and a larger far patch">
<circle cx="150" cy="110" r="90" style="fill:none;stroke:var(--phy);stroke-width:2"/>
<polygon points="185,85 84.4,48.4 107.4,30.7" style="fill:var(--phy);opacity:.15"/>
<polygon points="185,85 239.9,105 239.1,122.9" style="fill:var(--phy);opacity:.15"/>
<line class="ln" x1="84.4" y1="48.4" x2="239.9" y2="105" style="opacity:1"/>
<line class="ln" x1="107.4" y1="30.7" x2="239.1" y2="122.9" style="opacity:1"/>
<path d="M84.4,48.4 A90,90 0 0 1 107.4,30.7" style="fill:none;stroke:var(--ink);stroke-width:5"/>
<path d="M239.9,105 A90,90 0 0 1 239.1,122.9" style="fill:none;stroke:var(--ink);stroke-width:5"/>
<circle class="obj" cx="185" cy="85" r="4" style="fill:var(--ink)"/>
<text class="k" x="182" y="76">P</text>
<text class="lbl" x="40" y="30">far patch: area ∝ r₁²</text>
<text class="lbl" x="200" y="150">near patch: area ∝ r₂²</text>
<text class="lbl" x="110" y="110">force ∝ area / r²</text>
</svg>
:::

The cones are similar, so each patch's area is proportional to the square of its distance from P (the patches meet the shell at the same angle, because a chord makes equal angles with the sphere at its two ends). Charge is spread uniformly, so each patch's charge is proportional to its area, $\propto r^2$. Its force on P is proportional to $\text{charge}/r^2$, which is the **same** for both patches, and they push in opposite directions. Covering the whole shell with such double cones, every pair cancels.

Notice what made this work: the exponent in the force law is exactly the exponent in the area law. **If the force went as $1/r^{2+\epsilon}$ with $\epsilon\neq0$, the nearer patch would win and the force inside would not vanish.** This is the basis of the most precise tests of Coulomb's law (last section).

The outside result needs a calculation (or Gauss's law). The lessons on the electric field and on Gauss's law derive both results again, more quickly, and extend them to solid spheres. For now the consequence: **two uniformly charged spheres that do not overlap attract or repel exactly as point charges at their centres**. Conducting spheres brought close are different, because their charges move and crowd towards or away from each other.

:::qc
q: A point charge sits 2 cm from the centre of a uniformly charged thin shell of radius 5 cm (charge Q). What force does the shell exert on it?
options: ["Zero", "kQq/(0.02)²", "kQq/(0.05)²", "kQq/(0.03)²"]
answer: 0
right: Right. Inside a uniform shell the force is zero everywhere, not just at the centre.
wrong: The point is inside the shell (2 cm < 5 cm). Newton's double-cone argument shows the force is zero at every interior point.
:::

## Earnshaw's theorem: no stable rest {lvl=4 id=s-earnshaw label="Olympiad"}

Every equilibrium we have found so far was unstable in some direction. In 1842 Samuel Earnshaw showed this is unavoidable. [Unverified: year recalled from memory.]

:::law caption="Earnshaw's theorem."
A point charge cannot be held in stable equilibrium by the electrostatic forces of fixed charges alone.
:::

**Why.** Near an equilibrium point, take axes $x, y, z$ and let the force on the charge be, to first order, $F_x = -\kappa_x x$, $F_y = -\kappa_y y$, $F_z = -\kappa_z z$ (after choosing axes cleverly). Stability needs all three stiffnesses $\kappa$ to be positive. But for any $1/r^2$ force from charges **elsewhere**,

$$\kappa_x + \kappa_y + \kappa_z = 0.$$

The reason is the spreading picture once more: the net "outflow" of force from a small region containing no charge is zero (this is Gauss's law with no enclosed charge). A small sphere around a point of stable equilibrium would have the force pointing inward everywhere on its surface, a net inflow, which needs charge inside. So some $\kappa$ must be negative.

**The ring check.** Put a positive charge $q$ at the centre of a ring carrying positive $Q$. Along the axis, the formula from the ring section gives $F_z = +kQq\,z/R^3$ for small $z$: pushed **away**, so $\kappa_z = -kQq/R^3$. The theorem then predicts, for the two in-plane directions (equal by symmetry),

$$\kappa_x = \kappa_y = +\frac{kQq}{2R^3}.$$

A direct integration (an Olympiad problem below) confirms it. So the like charge is stable for in-plane displacements, with $\omega^2 = kQq/(2mR^3)$, but slides off along the axis. For an unlike charge everything reverses: stable along the axis (the oscillation of the ring section) and unstable in the plane.

**Midpoint of two like charges.** Charges $+q$ at $x = \pm a$ and a like test charge $q_0$ at the origin. Along the line the stiffness is $+4kqq_0/a^3$; sideways it is $-2kqq_0/a^3$ in each of the two directions. The sum is $4 - 2 - 2 = 0$, as the theorem demands.

**Ways round it.** Earnshaw's theorem covers only fixed charges and static forces. Equilibrium can be stable when there is:
- a **constraint**: a bead on a wire, a ball in a tube or on a rod (the constraint supplies forces that are not Coulomb forces);
- **gravity** or another non-electric force;
- **motion**: orbits, or rapidly alternating fields (the Paul trap that holds single ions);
- conductors or dielectrics whose charges rearrange; [Inference] these do not escape the theorem for a charge, but diamagnetic materials do levitate stably in magnetic fields.

This is also why classical physics could not explain stable atoms with charges at rest: the electrons must move.

:::qc
q: A small positive charge is placed at the centre of a cube with equal positive charges at all eight corners. By symmetry the stiffness is the same along x, y and z. What does Earnshaw's theorem say?
options: ["Each stiffness is zero to first order, so the equilibrium is neutral at this order", "The charge is stable in all directions", "The charge is unstable in all directions", "The theorem does not apply to cubes"]
answer: 0
right: Right. Three equal stiffnesses that add to zero must each be zero. The restoring or expelling force starts only at higher order in the displacement, and a closer look shows the equilibrium is still not stable in every direction.
wrong: The theorem says κx + κy + κz = 0. Cube symmetry makes the three equal, so each must be zero. The charge can never be stable in all directions.
:::

## Charges in orbit and on rotating frames {lvl=4 id=s-orbits label="Olympiad"}

Since a static arrangement cannot hold a charge stably, motion is the natural alternative. Because Coulomb's law has the same form as Newton's law of gravitation, **every result of planetary motion carries over** with $Gm_1m_2$ replaced by $-kq_1q_2$ (attraction needs opposite signs).

**Circular orbit.** An electron (mass $m$) circling a fixed proton at radius $r$:

$$\frac{mv^2}{r} = \frac{ke^2}{r^2} \quad\Longrightarrow\quad v = \sqrt{\frac{ke^2}{mr}}.$$

At $r = 0.53\times10^{-10}$ m (the Bohr radius) this gives $v\approx2.2\times10^{6}$ m/s, about $c/137$. The period obeys a Kepler law: $T^2 = 4\pi^2mr^3/(ke^2)$.

**Two-body orbits and reduced mass.** If neither particle is fixed, both circle their centre of mass. As in gravitation, the relative motion is that of a single particle of **reduced mass** $\mu = m_1m_2/(m_1+m_2)$ about a fixed centre:

$$T^2 = \frac{4\pi^2\mu\,r^3}{k|q_1q_2|}.$$

For hydrogen $\mu\approx m_e$. For **positronium** (an electron and a positron), $\mu = m_e/2$, so at the same separation the period is shorter by $\sqrt2$.

**Rotating frames.** Charges threaded on a rod spinning at angular speed $\omega$ can sit at rest relative to the rod. In the rotating frame each bead of mass $m$ at distance $x$ from the axis feels a centrifugal force $m\omega^2x$ outward. Two beads with opposite charges $\pm q$, symmetric about the axis at $\pm x$, balance when

$$\frac{kq^2}{(2x)^2} = m\omega^2x \quad\Longrightarrow\quad x^3 = \frac{kq^2}{4m\omega^2}.$$

Is it stable? In the rotating frame the effective potential energy of the pair (both beads) is $U(x) = -\dfrac{kq^2}{2x} - m\omega^2x^2$. Then $U'(x) = 0$ reproduces the balance condition, and $U''(x) = -\dfrac{kq^2}{x^3} - 2m\omega^2 < 0$. The balance point is a **maximum** of $U$: unstable. Physically, if $x$ grows a little, the attraction weakens while the centrifugal pull grows, so $x$ keeps growing; if $x$ shrinks, the attraction wins. (Like charges on such a rod cannot balance at all; both forces push outward.)

[Inference] A classical electron in orbit is accelerating and should radiate, spiralling inward in about $10^{-11}$ s. Coulomb's law with Newtonian mechanics cannot explain why atoms are stable; that needed quantum mechanics.

:::qc
q: An electron circles a proton at radius r with speed v. If the orbit radius were 4r, the speed would be
options: ["v/2", "v/4", "2v", "v/16"]
answer: 0
right: Right. v = √(ke²/(mr)) ∝ 1/√r, so four times the radius gives half the speed.
wrong: From mv²/r = ke²/r², v² ∝ 1/r. Quadrupling r halves v.
:::

## How exact is the exponent 2? {lvl=4 id=s-tests label="Olympiad"}

Write the law as $F\propto1/r^{2+\epsilon}$. How small is $\epsilon$?

**Direct tests** like Coulomb's torsion balance are limited by the accuracy of measuring forces and distances, perhaps a few per cent. [Unverified] Coulomb's own data are thought to confirm the exponent only to a few per cent.

**Null tests** are vastly better. They use the shell theorem: the force inside a charged conducting shell is zero **only if** $\epsilon = 0$. Charge an outer sphere to a high voltage and look for any charge or voltage on an inner sphere connected to it. A null result bounds $\epsilon$.

- Cavendish (about 1773) found $|\epsilon|$ below about 0.02 this way. [Unverified]
- Plimpton and Lawton (1936) reached about $2\times10^{-9}$. [Unverified]
- Williams, Faller and Hill (1971) reached about $10^{-16}$. [Unverified: figure recalled from memory.]

**The photon-mass connection.** In modern physics the electric force is carried by photons. If the photon had a tiny mass $m_\gamma$, the force would be cut off at large distances by a factor like $e^{-r/\lambda}$ with $\lambda = \hbar/(m_\gamma c)$ (a Yukawa force). Laboratory tests and measurements of planetary and galactic magnetic fields put $m_\gamma$ below roughly $10^{-18}$ eV/$c^2$, i.e. $\lambda$ larger than the size of the Solar System. [Unverified: the size of the bound is recalled from memory and depends on the method.]

**At very short distances** the law is also tested, by atomic spectra and electron scattering. Quantum effects ("vacuum polarisation") make the effective charge grow slightly at distances well below $10^{-12}$ m, but the departures are small and fully predicted by quantum electrodynamics. [Inference] For all of classical physics, including everything in this course, Coulomb's law with exponent exactly 2 is safe.

:::qc
q: Why is "no charge on the inner sphere" a much better test of the inverse-square law than measuring forces at several distances?
options: ["Because zero inside follows only if the exponent is exactly 2, and detecting the absence of something can be made extremely sensitive", "Because forces cannot be measured at all", "Because the inner sphere has no charge whatever the law", "Because it avoids using superposition"]
answer: 0
right: Right. A null result is limited only by the detector's sensitivity, not by how well forces and distances are calibrated, and it tests exactly the cancellation that depends on the exponent being 2.
wrong: The shell theorem's zero interior force depends on the exponent being exactly 2. A null measurement only has to detect "something versus nothing", which can be made far more sensitive than a force measurement.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Coulomb's law: $F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{|q_1q_2|}{r^2}$ for point charges at rest, along the line joining them; like repel, unlike attract. $k\approx9\times10^9$ N m² C⁻². {lvl=2}
2. The $1/r^2$ reflects three-dimensional space: an undiminished influence spreads over a sphere of area $4\pi r^2$. The $4\pi$ in $1/4\pi\varepsilon_0$ is that area. {lvl=2}
3. Vector form $\mathbf F_{21} = k\,q_1q_2\,\hat{\mathbf r}_{21}/r_{21}^2$: signed charges give the direction automatically, and $\mathbf F_{12} = -\mathbf F_{21}$. {lvl=2}
4. $F_e/F_G\approx2.3\times10^{39}$ for an electron and proton, independent of distance. Gravity rules the heavens only because matter is neutral to better than one part in $10^{18}$. {lvl=2}
5. Superposition is an experimental fact: total force = vector sum of two-body forces. Use symmetry before components. {lvl=2}
6. Hanging spheres: $F = mg\tan\theta$, $r = 2L\sin\theta$; small angles give $r^3 = 2kq^2L/(mg)$. {lvl=3}
7. Ring on its axis: $F = kQqz/(R^2+z^2)^{3/2}$, maximum at $z = R/\sqrt2$; near the centre an unlike charge oscillates with $\omega^2 = k|Qq|/(mR^3)$. {lvl=3}
8. Between like charges $q_1, q_2$: balance at distances in the ratio $\sqrt{q_1}:\sqrt{q_2}$. All three free: $Q = -q_1q_2/(\sqrt{q_1}+\sqrt{q_2})^2$. {lvl=3}
9. Uniform shell: point charge at the centre outside, zero force inside. The zero inside holds only for exponent exactly 2. {lvl=3}
10. Earnshaw: stiffnesses add to zero, so no stable electrostatic equilibrium. Constraints, gravity or motion are needed. {lvl=4}
11. Orbits follow Kepler's laws with $Gm_1m_2\to k|q_1q_2|$ and the reduced mass $\mu$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Convert units first: µC to C ($10^{-6}$), nC ($10^{-9}$), cm to m. A forgotten $10^{-2}$ in $r$ costs $10^{4}$ in $F$. {lvl=2}
- Coulomb's law is for **point** charges. Large conducting spheres close together redistribute their charge, and the formula with centre-to-centre distance is then wrong. {lvl=2}
- Put signs in only through the vector form or a clear diagram. Mixing signed charges into a magnitude formula and then also choosing a direction counts the sign twice. {lvl=2}
- Touching identical conductors share the **algebraic** total: $+8$ and $-2\ \mu$C become $+3$ each, and the force may change from attraction to repulsion. {lvl=2}
- Superposition adds **vectors**, not magnitudes. Two equal forces at 120° have a resultant equal to either; at 60° the resultant is $\sqrt3$ times either. {lvl=2}
- Hanging spheres: the separation is $2L\sin\theta$, not $L\sin\theta$; and $F = mg\tan\theta$ uses the thread's angle to the **vertical**. {lvl=3}
- The balance point between two charges is independent of the third charge; the value of the third charge matters only when all three must be in equilibrium. {lvl=3}
- Ring: off-axis points do not follow the axial formula. Only the axis has the simple cancellation. {lvl=3}
- "Equilibrium" is not "stable equilibrium". State the stability, and remember Earnshaw: with Coulomb forces alone, some direction is always unstable. {lvl=4}
- In a rotating frame include the centrifugal force; then test stability with the effective potential, not just the force balance. {lvl=4}
:::
