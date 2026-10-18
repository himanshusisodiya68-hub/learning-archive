---
title: The Biot–Savart law
summary: "How a small piece of current makes a magnetic field (inverse square, cross product, μ₀), the field of a circular loop on its axis and at its centre, finite and infinite straight wires, arcs and hairpins, polygon loops, the solenoid as stacked loops, rotating charged rings and discs, Helmholtz coils, and the field of a slowly moving point charge."
ncert: ["Class 12 Physics · Ch 4 Moving Charges and Magnetism (§4.4–4.5)"]
up_to: Olympiad
builds_on: [Coulomb's law, Electric field, Electric current, Vectors and the cross product, Integration by substitution]
notes_prompt: Explain, without any equation, why the straight leads of a wire bent into a semicircle add nothing to the field at the centre of the semicircle, while the same leads add a lot if the centre is moved off their line.
margin:
  - kind: history
    title: History
    text: Oersted saw a compass needle turn near a current-carrying wire in 1820. Within months Biot and Savart in Paris had measured how the field of a long wire falls with distance, and Laplace put their result in the form of a law for a small current element. (Dates from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "The derivation of the field on the axis of a circular loop is asked almost every year. Draw the figure, say that dl is perpendicular to r for every element, resolve dB into axial and perpendicular parts, state that the perpendicular parts cancel in pairs, and integrate the axial part."
  - kind: olympiad
    title: Olympiad link
    text: A slowly moving point charge has B = v × E / c². So the magnetic force between two charges moving side by side is v²/c² times the electric force. This tiny ratio is why magnetism is a relativistic effect, and why it still matters, since wires are electrically neutral and the electric forces cancel.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 4 Moving Charges and Magnetism, §4.4 Magnetic field due to a current element, §4.5 Magnetic field on the axis of a circular current loop; Examples 4.4–4.6; Exercise 4.1" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 35 Magnetic Field due to a Current" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 5 Magnetostatics, §5.2 The Biot–Savart law" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 6 The Magnetic Field (Biot–Savart law, fields of rings and solenoids)" }
cards:
  - { front: "State the Biot–Savart law.", back: "$d\\vec B = \\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,d\\vec l\\times\\hat r}{r^2}$, with $\\vec r$ from the element to the field point; magnitude $\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,dl\\sin\\theta}{r^2}$, and $\\mu_0/4\\pi = 10^{-7}$ T m/A." }
  - { front: "Field of a circular loop on its axis, and at its centre?", back: "$B = \\dfrac{\\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$ along the axis; at the centre $\\mu_0 I/2R$ (times $N$ for $N$ turns)." }
  - { front: "Field of a finite straight wire at perpendicular distance d?", back: "$\\dfrac{\\mu_0 I}{4\\pi d}(\\sin\\theta_1+\\sin\\theta_2)$, angles measured at the point from the perpendicular to each end. Infinite wire: $\\mu_0I/2\\pi d$; semi-infinite, point opposite the end: $\\mu_0I/4\\pi d$." }
  - { front: "Field at the centre of an arc of angle φ (radians)?", back: "$\\dfrac{\\mu_0 I}{4\\pi R}\\varphi$. Semicircle: $\\mu_0I/4R$. Straight leads pointing at the centre add nothing." }
  - { front: "Field at the centre of a uniformly charged disc (charge Q, radius R) spinning at ω?", back: "Each ring is a current $dI = \\sigma\\omega r\\,dr$, so $B = \\mu_0\\sigma\\omega R/2 = \\mu_0 Q\\omega/(2\\pi R)$." }
  - { front: "Magnetic field of a slowly moving point charge?", back: "$\\vec B = \\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\,\\vec v\\times\\hat r}{r^2} = \\dfrac{\\vec v\\times\\vec E}{c^2}$, so magnetic forces between moving charges are about $v^2/c^2$ of the electric ones." }
core:
  idea: 'Each current element $I\,d\vec l$ makes a field $d\vec B = \frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\vec r}{r^3}$: inverse square, perpendicular to both $d\vec l$ and $\vec r$. The field of a circuit is the vector sum (integral) of these contributions.'
  formulas:
    - tex: 'd\vec B = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec l\times\vec r}{r^3}'
      label: 'Biot–Savart law'
    - tex: 'B = \frac{\mu_0 I R^2}{2\left(R^2+x^2\right)^{3/2}}'
      label: 'Axis of a circular loop (centre: $\mu_0 I/2R$)'
    - tex: 'B = \frac{\mu_0 I}{4\pi d}\left(\sin\theta_1+\sin\theta_2\right)'
      label: 'Finite straight wire'
  conditions:
    - 'Steady current in a thin (filamentary) wire, in vacuum'
    - 'Superposition: total field is the vector sum of the fields of all elements'
    - 'Infinite straight wire: $\theta_1=\theta_2=90^\circ$; the point-charge form $\vec B = \frac{\mu_0}{4\pi}\frac{q\vec v\times\hat r}{r^2}$ needs $v\ll c$'
  sign: '$\vec r$ points from the element to the field point; the direction of $d\vec B$ follows the right-hand rule for $d\vec l\times\vec r$.'
outcomes:
  - 'State the Biot–Savart law and the direction of the field of a current element'
  - 'Find the field at the centre and on the axis of a circular loop'
  - 'Find the field of straight wires, arcs, hairpins and polygon loops by adding contributions'
  - 'Build the solenoid and Helmholtz coils from stacked loops and use the field of a rotating charge'
---

:::hook
q: A wire carrying a current I is first stretched out straight, and the field is measured at a point a distance R from it. The same wire is then bent into a circle of radius R, and the field is measured at the centre. How do the two fields compare?
options: ["They are equal: same current, same distance", "The circle gives π times the field", "The straight wire gives π times the field", "The circle gives zero, because opposite sides cancel"]
answer: 1
right: "Right. The straight wire gives μ₀I/2πR, the circle μ₀I/2R. In the circle every bit of wire is at the full distance R and every bit pushes the field the same way, while most of a straight wire is far away and sees the point at a slant."
wrong: "Opposite sides of a loop carry current in opposite directions, so their fields at the centre point the same way and add. Every element of the circle is at distance R and at right angles to the radius, which gives μ₀I/2R, π times the straight wire's μ₀I/2πR."
:::

## A current makes a magnetic field {lvl=1 id=s-idea label="Class 10"}

Put a compass under a wire and switch on a current: the needle swings. A current produces a magnetic field around it, and the field disappears when the current stops. (Field lines and compasses are covered in the lesson **Field lines and compasses**.)

What does the field depend on? Experiments with a single loop of wire and a compass at its centre show three things:

- **More current, more field.** Doubling the current doubles the deflecting effect.
- **More turns, more field.** A coil of 50 turns acts like 50 single loops on top of each other, so its field is 50 times as large.
- **A smaller loop gives a larger field at its centre.** The wire is closer to the centre.

The direction follows the **right-hand thumb rule**: curl the fingers of your right hand along the current in the loop, and the thumb points along the field through the middle.

To go further, we need a law that says how much field each small piece of wire produces. That law is the Biot–Savart law.

:::qc
q: A circular coil at a compass gives a certain field at its centre. Which change doubles the field there?
options: ["Doubling the radius, same turns and current", "Doubling the number of turns, same radius and current", "Halving the current", "Reversing the current"]
answer: 1
right: Right. Each turn adds the same field at the centre, so twice the turns gives twice the field. Doubling the radius would halve it, and reversing the current only reverses its direction.
wrong: Each turn contributes the same amount, so the field is proportional to the number of turns. Doubling the radius halves the field; reversing the current only flips its direction.
:::

## The law for a current element {lvl=2 id=s-law label="Class 12"}

We cannot isolate a tiny piece of current: current flows in closed circuits. So the law for a small piece is a deduction. One proposes a rule for each element $I\,d\vec l$ (a short length $dl$ of wire, pointing along the current), adds up the contributions of all the elements, and checks the result against measured fields of whole circuits. The rule that works is the following.

:::law caption="Biot–Savart law (NCERT §4.4). r⃗ runs from the element to the field point P; θ is the angle between dl⃗ and r⃗."
$$d\vec B = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec l\times\vec r}{r^3},\qquad |d\vec B| = \frac{\mu_0}{4\pi}\,\frac{I\,dl\,\sin\theta}{r^2}.$$
:::

Each part of the law has a reason:

- **$I\,dl$.** Two equal elements side by side give twice the field, so the field is proportional to both the current and the length.
- **$1/r^2$.** Like the field of a point charge, the influence of a small source spreads out and weakens as the inverse square of distance.
- **$\sin\theta$ and the cross product.** An element gives **no** field along its own line ($\theta = 0$), and the most at right angles to itself. The field is perpendicular to both $d\vec l$ and $\vec r$: it circles the line of the element.
- **$\mu_0$**, the permeability of free space, fixes the units. $\mu_0/4\pi = 10^{-7}$ T m A⁻¹. Until 2019 this was exact by the definition of the ampere; now it is measured, and agrees with $4\pi\times10^{-7}$ to about one part in 10¹⁰.

:::figure caption="A current element I dl⃗ at O and a field point P. r⃗ makes angle θ with dl⃗. The field dB⃗ at P is perpendicular to the page (into it here, ⊗), the direction of dl⃗ × r⃗."
<svg viewBox="0 0 340 180" role="img" aria-label="A short horizontal current element with a vector r drawn up and to the right to a point P, angle theta between them, and a cross at P showing the field into the page">
<line class="faint" x1="30" y1="130" x2="170" y2="130"/>
<line class="ln" x1="70" y1="130" x2="125" y2="130" style="stroke:var(--phy);stroke-width:2.4"/><polyline class="ln" points="117,125 125,130 117,135" style="stroke:var(--phy);stroke-width:2"/>
<line class="ln" x1="95" y1="130" x2="252" y2="44" style="stroke-dasharray:4 3"/>
<path class="ln" d="M 135 130 A 40 40 0 0 0 130 111"/>
<circle class="ln" cx="260" cy="40" r="9" style="fill:none"/><line class="ln" x1="254" y1="34" x2="266" y2="46"/><line class="ln" x1="266" y1="34" x2="254" y2="46"/>
<text class="k" x="92" y="150">I dl</text><text class="k" x="140" y="122">θ</text><text class="k" x="170" y="80">r</text>
<text class="k" x="275" y="45">P</text><text x="230" y="70">dB (into page)</text><text x="88" y="145">O</text>
</svg>
:::

**Comparison with Coulomb's law.** The two laws are built the same way, with one deep difference.

| | Electric field of a charge element | Magnetic field of a current element |
|---|---|---|
| Source | scalar $dq$ | vector $I\,d\vec l$ |
| Distance | $1/r^2$ | $1/r^2$ |
| Direction | along $\hat r$ (radial) | along $d\vec l\times\hat r$ (circling the element) |
| Constant | $1/4\pi\varepsilon_0 = 9\times10^9$ | $\mu_0/4\pi = 10^{-7}$ |
| Zero where | never (for a point charge) | along the element's own line |

Because the source is a vector, the field depends on angle as well as distance. And $\mu_0\varepsilon_0 = 1/c^2$, a link between the two constants and the speed of light that we shall use at the end of this lesson.

:::qc
q: A current element at the origin points along +x. At which point is its magnetic field zero?
options: ["(0, 1 m, 0)", "(0, 0, 1 m)", "(1 m, 0, 0)", "Nowhere: the field is never zero"]
answer: 2
right: Right. At (1 m, 0, 0) the vector r⃗ is parallel to dl⃗, so sin θ = 0 and the cross product vanishes.
wrong: The field is proportional to sin θ, with θ the angle between dl⃗ and r⃗. It is zero along the element's own line, for example at (1 m, 0, 0).
:::

## A circular loop on its axis {lvl=2 id=s-loop label="Class 12"}

Take a loop of radius $R$ carrying current $I$, and a point P on its axis at distance $x$ from the centre. Two facts make the sum easy:

1. **Every element is at the same distance** $r = \sqrt{R^2+x^2}$ from P.
2. **Every $d\vec l$ is perpendicular to its $\vec r$.** The element runs round the circle, while $\vec r$ lies in the plane containing the axis and that element. So $\sin\theta = 1$ for every element:

$$dB = \frac{\mu_0}{4\pi}\,\frac{I\,dl}{R^2+x^2}.$$

The direction of $d\vec B$ is perpendicular to $\vec r$, tilted away from the axis. Split it into a part along the axis and a part perpendicular to it.

:::figure caption="A loop seen edge-on (current out of the page at the top, ⊙, into it at the bottom, ⊗). The top element gives dB⃗ at P perpendicular to r⃗. Its part across the axis is cancelled by the bottom element (faint arrow); the parts along the axis add."
<svg viewBox="0 0 360 200" role="img" aria-label="An edge-on circular loop with the axis horizontal, a point P on the axis, a line r from the top of the loop to P, and the field vector at P split into axial and perpendicular components">
<line class="faint" x1="20" y1="100" x2="340" y2="100"/>
<ellipse class="ray" cx="90" cy="100" rx="16" ry="70" style="fill:none"/>
<circle class="ln" cx="90" cy="30" r="6" style="fill:none"/><circle cx="90" cy="30" r="1.8" style="fill:var(--ink)"/>
<circle class="ln" cx="90" cy="170" r="6" style="fill:none"/><line class="ln" x1="86" y1="166" x2="94" y2="174"/><line class="ln" x1="94" y1="166" x2="86" y2="174"/>
<line class="ln" x1="90" y1="30" x2="200" y2="100" style="stroke-dasharray:4 3"/>
<line class="faint" x1="90" y1="100" x2="90" y2="30" style="stroke-dasharray:2 2"/>
<line class="ln" x1="200" y1="100" x2="238" y2="41" style="stroke:var(--phy);stroke-width:2"/><polyline class="ln" points="230,44 238,41 238,50" style="stroke:var(--phy);stroke-width:2"/>
<line class="faint" x1="200" y1="100" x2="238" y2="159"/>
<line class="ln" x1="200" y1="100" x2="245" y2="100" style="stroke-width:2"/><polyline class="ln" points="238,96 245,100 238,104"/>
<line class="faint" x1="238" y1="100" x2="238" y2="41" style="stroke-dasharray:2 2"/>
<circle cx="200" cy="100" r="2.5" style="fill:var(--ink)"/>
<text class="k" x="196" y="118">P</text><text class="k" x="78" y="70">R</text><text class="k" x="140" y="58">r</text>
<text class="k" x="140" y="115">x</text><text class="k" x="243" y="38">dB</text><text x="250" y="96">dB cos φ (adds)</text><text x="244" y="162">from bottom element</text>
</svg>
:::

**The perpendicular parts cancel.** For each element there is a diametrically opposite one whose perpendicular part points the other way.

**The axial parts add.** The angle between $d\vec B$ and the axis equals the angle between $\vec r$ and the plane of the loop, so the axial part is $dB\cdot R/r$. Since $\sum dl = 2\pi R$,

$$B = \frac{\mu_0 I}{4\pi r^2}\cdot\frac{R}{r}\cdot 2\pi R.$$

:::law caption="Field on the axis of a circular loop (NCERT §4.5), directed along the axis by the right-hand thumb rule. For N closely wound turns, multiply by N."
$$B(x) = \frac{\mu_0 I R^2}{2\,(R^2+x^2)^{3/2}},\qquad B(0) = \frac{\mu_0 I}{2R}.$$
:::

**Checks.** At the centre ($x = 0$) every element is at distance $R$ and perpendicular to its radius, so $B = \frac{\mu_0}{4\pi}\frac{I\cdot2\pi R}{R^2} = \frac{\mu_0 I}{2R}$ directly. Far away, $B$ falls as $1/x^3$, not $1/x^2$: the loop's two sides almost cancel.

:::worked title="A 100-turn coil (NCERT Example 4.6)"
$N = 100$, $R = 0.10$ m, $I = 1$ A.

$$B = \frac{\mu_0 NI}{2R} = \frac{4\pi\times10^{-7}\times100\times1}{0.20} = 6.28\times10^{-4}\ \text{T}.$$

That is about ten times the Earth's field (roughly 25–65 µT, depending on place), enough to swing a compass hard over.

On the axis at $x = R = 0.10$ m the field is smaller by $(1+1)^{-3/2} = 0.354$: $2.2\times10^{-4}$ T.
:::

:::qc
q: The field at the centre of a loop is B₀. What is it on the axis at a distance equal to the radius, x = R?
options: ["B₀/2", "B₀/√2", "B₀/(2√2)", "B₀/8"]
answer: 2
right: "Right. B(R)/B₀ = R³/(2R²)^{3/2} = 1/(2√2) ≈ 0.35."
wrong: "Divide the two formulas: B(x)/B₀ = R³/(R² + x²)^{3/2}. At x = R this is 1/2^{3/2} = 1/(2√2) ≈ 0.35."
:::

## Finite and infinite straight wires {lvl=3 id=s-straight label="JEE"}

Now a straight wire of finite length, and a point P at perpendicular distance $d$ from its line. Let N be the foot of the perpendicular, and let the wire run from angle $\theta_2$ on one side of PN to angle $\theta_1$ on the other, measured at P.

:::figure caption="A finite straight wire (current upward) and a point P at perpendicular distance d. θ₁ and θ₂ are measured at P from the perpendicular PN to the lines joining P to the two ends. The field at P is into the page (⊗)."
<svg viewBox="0 0 320 220" role="img" aria-label="A vertical wire segment, a point P to its right at perpendicular distance d, and lines from P to the two ends of the wire making angles theta 1 and theta 2 with the perpendicular">
<line class="ray" x1="80" y1="20" x2="80" y2="200" style="stroke-width:2.4"/><polyline class="ln" points="74,68 80,58 86,68" style="stroke:var(--phy);stroke-width:2"/>
<line class="ln" x1="80" y1="120" x2="230" y2="120" style="stroke-dasharray:4 3"/>
<line class="faint" x1="230" y1="120" x2="80" y2="20"/><line class="faint" x1="230" y1="120" x2="80" y2="200"/>
<path class="ln" d="M 200 120 A 30 30 0 0 1 205 103"/><path class="ln" d="M 200 120 A 30 30 0 0 0 203.5 134.1"/>
<polyline class="faint" points="80,110 90,110 90,120"/>
<circle class="ln" cx="245" cy="120" r="8" style="fill:none"/><line class="ln" x1="240" y1="115" x2="250" y2="125"/><line class="ln" x1="250" y1="115" x2="240" y2="125"/>
<text class="k" x="180" y="106">θ₁</text><text class="k" x="180" y="145">θ₂</text><text class="k" x="150" y="114">d</text>
<text class="k" x="226" y="140">P</text><text class="k" x="64" y="124">N</text><text class="k" x="60" y="64">I</text>
</svg>
:::

**The sum.** An element $dy$ at height $y$ above N is at distance $r = \sqrt{y^2+d^2}$, and $\sin(\text{angle between } d\vec l \text{ and } \vec r) = d/r$. All elements give a field in the same direction (into the page), so

$$B = \frac{\mu_0 I}{4\pi}\int\frac{d\,dy}{(y^2+d^2)^{3/2}}.$$

Substitute $y = d\tan\theta$, the angle at P: $dy = d\sec^2\theta\,d\theta$ and $(y^2+d^2)^{3/2} = d^3\sec^3\theta$. The integrand becomes $\cos\theta\,d\theta/d$.

:::law caption="Finite straight wire. θ₁, θ₂ measured at P from the perpendicular; take an angle as negative if both ends lie on the same side of N."
$$B = \frac{\mu_0 I}{4\pi d}\left(\sin\theta_1+\sin\theta_2\right).$$
:::

Three limits cover most problems:

- **Infinite wire:** $\theta_1 = \theta_2 = 90^\circ$, so $B = \dfrac{\mu_0 I}{2\pi d}$. The field lines are circles round the wire. (The lesson **Ampère's circuital law** gets this in one line, using symmetry.)
- **Semi-infinite wire, P opposite its end:** $\theta_1 = 90^\circ$, $\theta_2 = 0$, so $B = \dfrac{\mu_0 I}{4\pi d}$, half the infinite value.
- **P on the line of the wire:** $\sin\theta = 0$ for every element, so $B = 0$.

:::qc
q: An infinite wire gives 20 µT at a point 5 cm away. A semi-infinite wire with the same current ends exactly opposite another point 5 cm away. What field does it give there?
options: ["20 µT", "10 µT", "40 µT", "0"]
answer: 1
right: Right. Opposite the end, θ₁ = 90° and θ₂ = 0, so the sum of sines is 1 instead of 2: half the infinite-wire field.
wrong: The infinite wire has sin θ₁ + sin θ₂ = 2. Opposite the end of a semi-infinite wire the sum is 1 + 0 = 1, so the field is half, 10 µT.
:::

## Arcs, hairpins and polygons {lvl=3 id=s-arcs label="JEE"}

**Arcs.** For a point at the centre of an arc of radius $R$ subtending angle $\varphi$ (in radians), every element is at distance $R$ and perpendicular to its radius. The total length is $R\varphi$:

$$B = \frac{\mu_0}{4\pi}\,\frac{I\,R\varphi}{R^2} = \frac{\mu_0 I\varphi}{4\pi R}.$$

A full circle ($\varphi = 2\pi$) gives back $\mu_0I/2R$; a semicircle gives $\mu_0 I/4R$ (NCERT Example 4.5).

**Straight leads.** A straight lead whose line passes through the centre contributes nothing there (P on the line of the wire). A lead that passes the centre at a distance contributes by the finite-wire formula. Find each piece separately, give it a direction by the right-hand rule, and add the pieces as vectors.

:::figure caption="A hairpin: two long parallel wires a distance 2R apart, joined by a semicircle of radius R. At the centre C, both straight wires and the semicircle give fields into the page."
<svg viewBox="0 0 340 160" role="img" aria-label="Two horizontal parallel wires extending to the left, joined on the right by a semicircle, with the centre C of the semicircle marked">
<line class="ray" x1="20" y1="40" x2="200" y2="40" style="stroke-width:2.2"/><line class="ray" x1="20" y1="120" x2="200" y2="120" style="stroke-width:2.2"/>
<path class="ray" d="M 200 40 A 40 40 0 0 1 200 120" style="fill:none;stroke-width:2.2"/>
<polyline class="ln" points="102,35 110,40 102,45" style="stroke:var(--phy);stroke-width:2"/><polyline class="ln" points="110,115 102,120 110,125" style="stroke:var(--phy);stroke-width:2"/>
<circle cx="200" cy="80" r="2.5" style="fill:var(--ink)"/>
<line class="faint" x1="200" y1="80" x2="228" y2="52" style="stroke-dasharray:2 2"/>
<circle class="ln" cx="180" cy="80" r="7" style="fill:none"/><line class="ln" x1="175" y1="75" x2="185" y2="85"/><line class="ln" x1="185" y1="75" x2="175" y2="85"/>
<text class="k" x="205" y="96">C</text><text class="k" x="218" y="72">R</text><text x="22" y="30">from ∞</text><text x="22" y="140">to ∞</text><text class="k" x="104" y="28">I</text>
</svg>
:::

:::worked title="The hairpin"
At C, each straight wire is semi-infinite and C lies opposite its end, at distance $R$: each gives $\mu_0 I/4\pi R$. The semicircle gives $\mu_0I/4R$. All three point into the page, so

$$B_C = \frac{\mu_0 I}{4R} + 2\cdot\frac{\mu_0 I}{4\pi R} = \frac{\mu_0 I}{4\pi R}\,(\pi + 2).$$

For $I = 10$ A and $R = 5.0$ cm: $B_C = \dfrac{10^{-7}\times10}{0.05}\times5.14 = 1.03\times10^{-4}$ T.
:::

**Regular polygons.** A regular $n$-gon with circumradius $R$ has each side at distance $d = R\cos(\pi/n)$ from the centre, and each side subtends $\pm\pi/n$ there. All sides give fields in the same direction, so

$$B = n\cdot\frac{\mu_0 I}{4\pi R\cos(\pi/n)}\cdot2\sin\frac{\pi}{n} = \frac{n\,\mu_0 I}{2\pi R}\tan\frac{\pi}{n}.$$

- **Square** ($n = 4$, side $a$, $R = a/\sqrt2$): $B = \dfrac{2\sqrt2\,\mu_0 I}{\pi a}$.
- **Many sides:** $n\tan(\pi/n)\to\pi$, and $B\to\mu_0 I/2R$, the circle, as it must.
- For the same circumradius the polygon gives a slightly **larger** field than the circle, since its sides come closer to the centre.

:::qc
q: A wire carries current along a quarter-circle arc of radius R, with both straight leads running radially, away from the centre. What is the field at the centre?
options: ["μ₀I/8R", "μ₀I/4R", "μ₀I/2πR", "μ₀I/8πR"]
answer: 0
right: "Right. φ = π/2 gives μ₀Iφ/4πR = μ₀I/8R, and radial leads point at the centre, so they add nothing."
wrong: "The arc gives μ₀Iφ/(4πR) with φ = π/2, which is μ₀I/8R. The radial leads lie on lines through the centre, so they give zero there."
:::

## The solenoid as stacked loops {lvl=3 id=s-solenoid label="JEE"}

A solenoid is a long coil with $n$ turns per unit length. A slice of length $dz$ holds $n\,dz$ turns, so it is a single loop carrying current $nI\,dz$. Add up loops with the axial formula:

$$B = \int \frac{\mu_0\, nI\,dz\,R^2}{2(R^2+z^2)^{3/2}}.$$

With $z = R\cot\alpha$, where $\alpha$ is the angle at P between the axis and the line to the rim of the slice, this becomes $\frac{\mu_0 nI}{2}\int\sin\alpha\,d\alpha$:

:::law caption="Field on the axis of a finite solenoid. α₁ and α₂ are the half-angles subtended at P by the two end faces (each measured from the axis, towards that end)."
$$B = \frac{\mu_0 nI}{2}\left(\cos\alpha_1+\cos\alpha_2\right).$$
:::

- **Deep inside a long solenoid:** both ends are far away, $\alpha_1,\alpha_2\to0$, so $B = \mu_0 nI$.
- **At the centre of one end face of a long solenoid:** one cosine is 1, the other 0, so $B = \mu_0 nI/2$, half the inside value. Half the solenoid is "missing".

Biot–Savart gives the field only on the axis. That the field is also uniform off the axis inside a long solenoid, and nearly zero outside, follows neatly from the lesson **Ampère's circuital law**.

:::qc
q: Inside a long solenoid the field is 4.0 mT. What is it at the centre of one end?
options: ["4.0 mT", "2.0 mT", "1.0 mT", "0"]
answer: 1
right: Right. At the end one cosine is 1 and the other is 0, so the field is μ₀nI/2, half the inside value.
wrong: At the centre of an end face, cos α₁ + cos α₂ = 1 + 0 = 1, instead of 2 deep inside. So the field is half: 2.0 mT.
:::

## Rotating charges as currents {lvl=4 id=s-rotating label="Olympiad"}

A charge going round a circle is a current. If a ring carrying charge $q$ spins at angular speed $\omega$, the charge passes any fixed point $\omega/2\pi$ times per second, so

$$I = \frac{q\omega}{2\pi},\qquad B_{\text{centre}} = \frac{\mu_0 I}{2R} = \frac{\mu_0 q\omega}{4\pi R}.$$

**A spinning disc.** Take a disc of radius $R$ with uniform surface charge $\sigma = Q/\pi R^2$, spinning at $\omega$. A ring between $r$ and $r+dr$ holds charge $\sigma\,2\pi r\,dr$, so it carries current $dI = \sigma\omega r\,dr$ and gives at the centre

$$dB = \frac{\mu_0\,dI}{2r} = \frac{\mu_0\sigma\omega}{2}\,dr.$$

Every ring of width $dr$ contributes the same, so

:::law caption="Field at the centre of a uniformly charged disc spinning about its axis."
$$B = \frac{\mu_0\sigma\omega R}{2} = \frac{\mu_0 Q\omega}{2\pi R}.$$
:::

This is twice the value $\mu_0Q\omega/4\pi R$ for a ring of the same charge and radius, because the disc's inner charge sits closer to the centre. The same ring-by-ring method gives the field on the axis, or at the centre of a spinning charged sphere.

:::worked title="Size of the effect"
$Q = 10$ µC on a disc of radius 5 cm, spinning at 6000 rev/min ($\omega = 200\pi$ rad/s):

$$B = \frac{4\pi\times10^{-7}\times10^{-5}\times200\pi}{2\pi\times0.05} = 2.5\times10^{-8}\ \text{T}.$$

Only 25 nT, about a two-thousandth of the Earth's field. Moving static charge makes a very small current. Rowland measured this convection-current effect in 1876. (Date from memory, [Unverified].)
:::

:::qc
q: A charged ring and a charged disc have the same radius and the same total charge, and spin at the same rate. Which gives the larger field at its centre?
options: ["The ring, because all its charge is at the full radius", "The disc, by a factor of 2", "They are equal: same charge, same rate", "The disc, by a factor of 4"]
answer: 1
right: "Right. Ring: μ₀Qω/4πR. Disc: μ₀Qω/2πR. Each inner ring of the disc carries less current but sits closer, and dB = μ₀σω dr/2 does not fall off with r."
wrong: "Ring: μ₀Qω/4πR. Disc: integrate rings, each giving μ₀σω dr/2, to get μ₀Qω/2πR, twice as large. An inner ring carries less current but sits closer, so every ring of width dr gives the same field."
:::

## Helmholtz coils {lvl=4 id=s-helmholtz label="Olympiad"}

Laboratories need a region of uniform field, open on the sides. A single loop's field varies along the axis. Two equal coaxial coils carrying the same current in the same sense, separated by $d$, do much better if $d$ is chosen well.

Write the axial field of one loop as $B_1(x) = \frac{\mu_0IR^2}{2}f(x)$ with $f(x) = (R^2+x^2)^{-3/2}$. With the coils at $x = \pm d/2$, the field a distance $s$ from the midpoint is proportional to $f(d/2+s) + f(d/2-s)$.

- The sum is even in $s$, so its first and third derivatives at $s = 0$ vanish.
- Its second derivative there is $2f''(d/2)$. Differentiating, $f''(x) = 3(4x^2-R^2)(R^2+x^2)^{-7/2}$.
- So the second derivative vanishes when $4(d/2)^2 = R^2$, that is, when $d = R$.

:::law caption="Helmholtz pair: N turns each, radius R, separation R, same current. The field at the midpoint varies only as s⁴ near the centre."
$$B_0 = \left(\frac45\right)^{3/2}\frac{\mu_0 NI}{R} \approx 0.716\,\frac{\mu_0NI}{R},\qquad B(s)\approx B_0\left(1-\frac{144}{125}\frac{s^4}{R^4}\right).$$
:::

Within $\pm0.1R$ of the centre along the axis the field changes by only about one part in 10⁴. Helmholtz coils are used to cancel the Earth's field and to calibrate magnetometers. If the coils are closer than $R$ the field has a maximum at the midpoint; if farther apart, a dip.

:::qc
q: A Helmholtz pair has the currents in opposite senses instead (an anti-Helmholtz pair). What is the field at the midpoint?
options: ["Twice the Helmholtz value", "The same as one coil alone", "Zero, with a field that grows linearly away from the midpoint", "Uniform, as before"]
answer: 2
right: Right. The two contributions cancel at the midpoint, and the field grows linearly away from it. This gradient field is used in magneto-optical traps for cold atoms.
wrong: With opposite currents the two axial fields are equal and opposite at the midpoint, so B = 0 there, and the field grows linearly away from it (a gradient field).
:::

## The field of a moving point charge {lvl=4 id=s-point-charge label="Olympiad"}

A current is moving charge. In a wire of cross-section $A$ with $n$ carriers per unit volume, each of charge $q$ and drift velocity $\vec v$, the element $I\,d\vec l$ equals $(nA\,dl)\,q\vec v$: the number of carriers in the element times $q\vec v$. So each carrier seems to contribute

:::law caption="Magnetic field of a point charge moving slowly (v ≪ c) with constant velocity. r⃗ runs from the charge to the field point."
$$\vec B = \frac{\mu_0}{4\pi}\,\frac{q\,\vec v\times\hat r}{r^2} = \frac{\vec v\times\vec E}{c^2},\qquad \text{using } \mu_0\varepsilon_0 = \frac1{c^2}.$$
:::

Three warnings and one consequence:

- **It is an approximation.** The Biot–Savart law holds for **steady** currents. A single charge is not a steady current; its fields change as it moves. The formula is right when $v \ll c$. For uniform motion at any speed, the relation $\vec B = \vec v\times\vec E/c^2$ still holds with the correctly compressed relativistic $\vec E$ (Griffiths, Ch. 10).
- **No field ahead or behind.** Along the line of motion $\vec v\times\hat r = 0$, just as an element gives no field along its own line.
- **It depends on the frame.** In the frame moving with the charge there is no magnetic field at all. Electric and magnetic fields are two faces of one field, and relativity mixes them.

**Magnetic versus electric force.** Two charges $q$ move side by side with the same velocity $v$, at separation $r$. The second feels an electric force $F_e = qE$ and a magnetic force $F_m = qvB = qv\cdot vE/c^2$:

$$\frac{F_m}{F_e} = \frac{v^2}{c^2}.$$

For electrons drifting in a wire at about 0.1 mm/s this is about 10⁻²⁵. Yet wires attract each other measurably, because a wire is electrically neutral: the huge electric forces cancel exactly, and the tiny magnetic ones, multiplied by about 10²³ carriers per cubic centimetre, are all that is left. (See the lesson **Forces between parallel currents**; the force on a moving charge is in **The Lorentz force and circular motion**.)

:::qc
q: A proton moves along +x at a modest speed. Where is its magnetic field zero?
options: ["Nowhere", "In the plane x = 0 through the proton", "Everywhere on the x-axis through the proton", "Only at the proton itself"]
answer: 2
right: Right. On the line of motion, r̂ is parallel to v⃗, so v⃗ × r̂ = 0. The field is largest in the plane through the charge perpendicular to v⃗.
wrong: B is proportional to v⃗ × r̂, which vanishes when r̂ is parallel to v⃗, that is, everywhere on the line of motion (the x-axis). In the perpendicular plane x = 0 the field is largest.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A current makes a magnetic field. At the centre of a coil the field grows with the current and the number of turns and falls as the radius grows. The right-hand thumb rule gives its direction. {lvl=1}
2. Biot–Savart: $d\vec B = \frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2}$, with $\mu_0/4\pi = 10^{-7}$ T m/A. It is inverse-square like Coulomb's law, but the field circles the element and is zero along its line. {lvl=2}
3. Circular loop: $B = \frac{\mu_0IR^2}{2(R^2+x^2)^{3/2}}$ on the axis and $\mu_0NI/2R$ at the centre. Perpendicular parts cancel in pairs; axial parts add. {lvl=2}
4. Straight wire: $\frac{\mu_0I}{4\pi d}(\sin\theta_1+\sin\theta_2)$. Infinite: $\mu_0I/2\pi d$. Semi-infinite, opposite its end: $\mu_0I/4\pi d$. On the wire's line: 0. Arc: $\mu_0I\varphi/4\pi R$. {lvl=3}
5. Polygon at its centre: $\frac{n\mu_0I}{2\pi R}\tan\frac{\pi}{n}$; square of side $a$: $2\sqrt2\mu_0I/\pi a$. Solenoid on its axis: $\frac{\mu_0nI}{2}(\cos\alpha_1+\cos\alpha_2)$, so $\mu_0nI$ inside and $\mu_0nI/2$ at an end. {lvl=3}
6. Spinning charge is a current $I = q\omega/2\pi$: ring $\mu_0q\omega/4\pi R$, disc $\mu_0Q\omega/2\pi R$. Helmholtz pair (separation $R$): $B_0 = (4/5)^{3/2}\mu_0NI/R$, flat to order $s^4$. {lvl=4}
7. Slow point charge: $\vec B = \vec v\times\vec E/c^2$; the magnetic force between charges moving side by side is $v^2/c^2$ of the electric one. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Reversing the current reverses the field but does not change its size. Always state the direction (right-hand rule) along with the magnitude. {lvl=1}
- $\vec r$ runs **from the element to the field point**. Reversing it flips the cross product and the direction of the answer. {lvl=2}
- On the axis use $(R^2+x^2)^{3/2}$, not $(R^2+x^2)$ or $x^3$. The $x^3$ form is only the far-field limit. {lvl=2}
- In the finite-wire formula, the angles are measured **at the field point, from the perpendicular**, not from the wire. If they are measured from the wire, use cosines. If both ends lie on the same side of the foot, subtract. {lvl=3}
- Leads aimed at the centre give zero; leads passing beside it do not. Check the geometry of each straight piece separately. {lvl=3}
- Add fields as vectors. Pieces of a circuit can give fields in opposite directions at a point (for example, an arc and a straight segment on the same side). {lvl=3}
- For spinning charges use the frequency $\omega/2\pi$, not $\omega$, when converting to current. {lvl=4}
- $\vec B = \frac{\mu_0}{4\pi}\frac{q\vec v\times\hat r}{r^2}$ is not exact Biot–Savart. It needs $v\ll c$ and fails for accelerating charges. {lvl=4}
:::
