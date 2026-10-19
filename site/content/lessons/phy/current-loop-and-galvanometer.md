---
title: Torque on a current loop and the moving-coil galvanometer
summary: 'Why a loop of current twists in a magnetic field, and how that twist becomes the needle of a meter.'
ncert: ["Class 12 Physics · Ch 4 Moving Charges and Magnetism (§4.9–4.10)"]
up_to: Olympiad
builds_on: [Force on a current-carrying conductor, Biot–Savart law, Ohm's law, Resistors in series and parallel, Electric dipole in a uniform field]
notes_prompt: Explain in your own words why a moving-coil meter needs a radial magnetic field to have an evenly spaced scale, and why winding twice as many turns does not make it a better voltmeter.
margin:
  - kind: history
    title: History
    text: "The moving-coil galvanometer with a fixed permanent magnet and a light suspended coil is usually credited to Arsène d'Arsonval and Marcel Deprez (around 1882), and is often called the d'Arsonval movement. Edward Weston later added the pivoted coil, hairsprings and pointer used in portable meters. [Unverified: names and dates recalled from memory.]"
  - kind: tip
    title: Angle convention
    text: In τ = mB sin θ the angle θ is between the normal (the moment m) and B, not between the plane of the loop and B. A loop whose plane is parallel to B has θ = 90° and the largest torque. Read every question for which angle it gives.
  - kind: olympiad
    title: Olympiad link
    text: For any body whose charge and mass are spread in the same proportions, the magnetic moment is m = (Q/2M)L. So a spinning charged ring, disc or sphere precesses in a field at the same rate QB/2M, whatever its shape or spin rate.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 4 Moving Charges and Magnetism, §4.9 Torque on current loop, magnetic dipole; §4.10 The moving coil galvanometer" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 34 Magnetic Field (torque on a current loop, moving-coil galvanometer)" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 6 §6.1 Magnetic dipoles: torques and forces" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.5 Constant magnetic field. Magnetics" }
cards:
  - { front: "Torque on a planar current loop in a uniform field?", back: "$\\boldsymbol\\tau = \\mathbf m\\times\\mathbf B$ with $\\mathbf m = NI\\mathbf A$; magnitude $NIAB\\sin\\theta$, θ between the normal and B. The net force is zero." }
  - { front: "Potential energy of a magnetic dipole in a field; stable and unstable positions?", back: "$U = -\\mathbf m\\cdot\\mathbf B$. Stable when m ∥ B (U = −mB), unstable when m is antiparallel (U = +mB)." }
  - { front: "Galvanometer current and voltage sensitivity?", back: "Current sensitivity $\\phi/I = NAB/k$; voltage sensitivity $\\phi/V = NAB/(kR)$. Doubling N doubles R as well, so voltage sensitivity hardly changes." }
  - { front: "Shunt for an ammeter, series resistor for a voltmeter (galvanometer G, full scale I_g)?", back: "Shunt $S = I_gG/(I - I_g)$ in parallel; series $R = V/I_g - G$." }
  - { front: "Orbital magnetic moment of an electron and its ratio to angular momentum?", back: "$m = evr/2$, and $m/L = e/2m_e$, with m opposite to L. For L = ħ this is the Bohr magneton eħ/2m_e ≈ 9.27 × 10⁻²⁴ J/T." }
  - { front: "Force on a small loop in a non-uniform field?", back: "$\\mathbf F = \\nabla(\\mathbf m\\cdot\\mathbf B)$. A loop with m along B is pulled toward the stronger field." }
core:
  idea: 'A planar current loop of $N$ turns has magnetic moment $\vec m = NI\vec A$. In a uniform field it feels no net force but a torque $\vec\tau = \vec m\times\vec B$ that turns $\vec m$ towards $\vec B$; its orientation energy is $-\vec m\cdot\vec B$.'
  formulas:
    - tex: '\vec m = NI\vec A,\qquad \vec\tau = \vec m\times\vec B,\qquad \tau = NIAB\sin\theta'
      label: 'Moment and torque on a coil'
    - tex: 'U = -\vec m\cdot\vec B'
      label: 'Energy of a magnetic moment'
    - tex: 'k\phi = NIAB'
      label: 'Moving-coil galvanometer (radial field)'
  conditions:
    - 'Uniform magnetic field, so the net force is zero and only a couple acts'
    - 'Rigid planar loop carrying a steady current; $\theta$ is the angle between the normal ($\vec m$) and $\vec B$'
    - 'Galvanometer: radial field so the torque is $NIAB$ at every deflection, and a linear restoring spring'
    - 'Ideal ammeter has zero resistance and ideal voltmeter infinite resistance'
  sign: '$\vec A$ and $\vec m$ follow the right-hand rule (fingers along the current, thumb along the normal). The torque is largest when the plane of the loop is parallel to $\vec B$.'
outcomes:
  - 'Explain why a loop in a field turns, and how a commutator keeps a DC motor turning one way'
  - 'Find the magnetic moment of any planar loop and the torque on it in a uniform field'
  - 'Explain the moving-coil galvanometer and compare current and voltage sensitivity'
  - 'Convert a galvanometer to an ammeter or voltmeter and estimate the loading error'
  - 'Use $U = -\vec m\cdot\vec B$, small oscillations, orbital moments and $\vec F = \nabla(\vec m\cdot\vec B)$'
opener:
  story: |
    Look at an old analogue multimeter, or the needle on a vintage scooter's battery gauge. The needle swings smoothly, settles on a number, and there is no computer behind it.

    Open it up and you find almost nothing: a tiny coil of fine copper wire, free to turn, sitting between the poles of a magnet. A current of a few thousandths of an ampere weighs nothing, yet it drags a needle across the scale.

    The same trick spins your ceiling fan and your mixer-grinder. A loop of current in a magnetic field does not slide away; it **twists**. But if every side of the loop is pushed, why does the loop not simply fly off?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A coil between magnet poles turns a needle across a scale"><rect x="18" y="80" width="60" height="70" rx="4" style="fill:color-mix(in srgb,var(--bad) 22%,var(--surface));stroke:var(--bad);stroke-width:2"/><rect x="242" y="80" width="60" height="70" rx="4" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="48" y="120" style="font-size:11px;fill:var(--muted);text-anchor:middle">N</text><text x="272" y="120" style="font-size:11px;fill:var(--muted);text-anchor:middle">S</text><ellipse cx="160" cy="115" rx="34" ry="44" style="fill:none;stroke:var(--chem);stroke-width:3"/><ellipse cx="160" cy="115" rx="24" ry="44" style="fill:none;stroke:var(--chem);stroke-width:2"/><circle cx="160" cy="115" r="14" style="fill:var(--surface);stroke:var(--muted);stroke-width:2"/><path d="M80 100 L124 100" style="stroke:var(--muted);stroke-dasharray:3 4;fill:none"/><path d="M80 130 L124 130" style="stroke:var(--muted);stroke-dasharray:3 4;fill:none"/><path d="M196 100 L240 100" style="stroke:var(--muted);stroke-dasharray:3 4;fill:none"/><path d="M196 130 L240 130" style="stroke:var(--muted);stroke-dasharray:3 4;fill:none"/><path d="M80 188 A90 90 0 0 1 240 188" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M160 214 L205 150" style="stroke:var(--bad);stroke-width:3;fill:none"/><circle cx="160" cy="214" r="5" style="fill:var(--ink)"/><path d="M96 168 L100 175 M120 150 L123 158 M160 143 L160 152 M200 150 L197 158 M224 168 L220 175" style="stroke:var(--ink);stroke-width:2;fill:none"/><text x="160" y="236" style="font-size:11px;fill:var(--muted);text-anchor:middle">a trickle of current twists the coil</text><text x="160" y="22" style="font-size:11px;fill:var(--muted);text-anchor:middle">coil in the magnet</text></svg>'
symbols:
  - { s: 'I', means: 'current in the coil (amperes, A)' }
  - { s: 'B', means: 'magnetic field (tesla, T)' }
  - { s: 'N', means: 'number of turns of wire in the coil (a pure number)' }
  - { s: 'A', means: 'area of one turn (square metres, m$^2$)' }
  - { s: '\vec m', means: 'magnetic moment of the coil: how strongly it acts like a tiny magnet ($\text{A m}^2$)' }
  - { s: '\tau', means: 'torque, the twisting effect of a force (newton metres, N m)' }
  - { s: '\theta', means: 'angle between the coil''s normal (its axis) and the field (degrees or radians)' }
  - { s: 'U', means: 'energy of the coil in the field (joules, J)' }
  - { s: 'k', means: 'stiffness of the hairspring: torque per radian of twist (N m/rad)' }
  - { s: '\phi', means: 'angle the coil has turned, so the needle deflection (radians)' }
life:
  - 'Analogue ammeters, voltmeters and multimeters all use a moving coil, with shunt or series resistors to change the range.'
  - 'Every electric motor, from a ceiling fan to a mixer-grinder to an electric autorickshaw, turns because current loops are twisted by a magnetic field.'
  - 'A loudspeaker pushes a coil of wire in the field of a magnet, so a changing current becomes sound.'
  - 'Older ECG machines wrote the heartbeat on paper with a pen driven by a coil galvanometer.'
models:
  - name: 'Where two opposing effects balance, you can read a number'
    text: 'The needle stops where the electric twist equals the spring''s push-back. A thermostat, a price and a weighing scale all work this way: the reading is the balance point.'
  - name: 'Zero total does not mean nothing happens'
    text: 'Equal and opposite pushes at different points cancel as a force but make a spin. A balanced budget can hide huge flows; a steering wheel turns with zero net push.'
  - name: 'Design the environment to make the response simple'
    text: 'A radial field makes the twist the same at every angle, so the scale is evenly spaced. Engineers often tame a messy response by shaping the setting rather than the object.'
links:
  - leaf: 'phy/torque'
    name: 'Torque'
    same: 'Torque is force times the perpendicular arm, and a pair of equal and opposite forces gives a pure turning effect, the couple.'
    differs: 'Here the forces come from a magnetic field on a current, so the torque depends on the current, the field and the angle: $\tau = NIAB\sin\theta$.'
  - leaf: 'phy/electric-field'
    name: 'Electric field and the electric dipole'
    same: 'An electric dipole in a uniform field has the same law: $\tau = pE\sin\theta$ and $U=-pE\cos\theta$, matching $mB\sin\theta$ and $-mB\cos\theta$.'
    differs: 'An electric dipole is two real separated charges you can pull apart. A current loop is a magnetic dipole with no separable north or south.'
next:
  q: 'A loop of current acts like a tiny magnet. So is a bar magnet just a crowd of tiny current loops? And if so, why can you never cut out a single north pole?'
  leaf: 'phy/magnetic-dipole-and-bar-magnet'
  name: 'Magnetic dipole and bar magnet'
---

:::hook
q: So here is the puzzle. The coil sits in a uniform magnetic field and every side of it is pushed. What is the net force on the whole loop?
options: ["Zero, whatever its shape or tilt", "IAB, along the field", "It depends on how the loop is tilted"]
answer: 0
right: Right. Going round a closed loop, the little pushes cancel in a vector sum: the total force is zero. But they act along different lines, so they form a couple and the coil turns. That twist is what moves the needle.
wrong: Add up the push on each small piece of wire all the way round and you return to where you started, so the pushes cancel: the net force is zero in a uniform field. The pushes still act along different lines, so they twist the loop. That twist is the needle's engine.
:::

## Why a loop in a magnet turns: the motor idea {lvl=1 id=s-why label="Class 10"}

Put a rectangular loop in a uniform field, with the plane of the loop along the field. Look at each side in turn (the force rule is in the lesson on the force on a current):

- The two sides **along** the field feel no force, because a current parallel to B is not pushed.
- The two sides **across** the field feel equal forces in **opposite** directions, because their currents flow in opposite directions.

Equal and opposite forces that do not act along the same line form a **couple**. A couple does not move the loop anywhere; it **turns** it. This is the whole principle of the electric motor and of the moving-coil meter.

:::figure caption="A loop whose plane contains B, seen face on. The current runs clockwise. The top and bottom sides are parallel to B and feel no force. The left side is pushed into the page and the right side out of it, so the loop turns about the dashed axis."
<svg viewBox="0 0 320 200" role="img" aria-label="Rectangular loop in a horizontal magnetic field; side forces into and out of the page form a couple about a vertical axis">
<line class="faint" x1="10" y1="20" x2="310" y2="20"/><line class="faint" x1="10" y1="75" x2="310" y2="75"/><line class="faint" x1="10" y1="125" x2="310" y2="125"/><line class="faint" x1="10" y1="185" x2="310" y2="185"/>
<line style="stroke:var(--ink);stroke-width:2" x1="250" y1="100" x2="295" y2="100"/><polygon style="fill:var(--ink)" points="303,100 293,95 293,105"/><text class="k" x="268" y="92">B</text>
<rect x="110" y="50" width="100" height="100" style="fill:none;stroke:var(--phy);stroke-width:2.5"/>
<polygon style="fill:var(--phy)" points="166,50 156,45 156,55"/><polygon style="fill:var(--phy)" points="210,106 205,96 215,96"/><polygon style="fill:var(--phy)" points="154,150 164,145 164,155"/><polygon style="fill:var(--phy)" points="110,94 105,104 115,104"/>
<text class="k" x="164" y="66">I</text>
<line class="faint" x1="160" y1="35" x2="160" y2="165"/><text x="164" y="176">axis</text>
<text class="k" x="40" y="104">F ⊗ (into)</text><text class="k" x="218" y="124">F ⊙ (out)</text>
<text x="112" y="42">parallel to B: no force</text>
</svg>
:::

**Why a motor needs a commutator.** As the loop turns, the couple gets weaker. When the plane of the loop is **perpendicular** to B the two forces lie in the plane of the loop, pulling it outward along one line, and the turning effect is zero. If the loop swings past that position with the same current, the couple reverses and drags it back. Left alone, the loop would just rock to and fro about that position.

A DC motor fixes this with a **split-ring commutator**: the coil's ends are joined to two half-rings, and fixed brushes press on them. Every half turn, just as the loop passes the zero-torque position, the half-rings swap brushes and the current in the coil reverses. The couple then keeps turning the coil the same way, and it spins continuously. A real motor also uses many coils at different angles on a soft-iron armature, so the torque never drops to zero. [Inference: the multi-coil armature detail is general engineering knowledge, not part of the NCERT text.]

:::qc
q: A motor's commutator is removed, so the current in its coil never reverses. The coil is started from rest with its plane parallel to B. What happens?
options: ["It spins continuously, just more slowly", "It turns, overshoots and oscillates about the position where its plane is perpendicular to B", "It does not move at all", "It turns until its plane is parallel to B and stops"]
answer: 1
right: Right. The couple always tries to bring the plane of the loop perpendicular to B. Without a commutator the loop overshoots that position, is pulled back and oscillates about it (and friction eventually stops it there).
wrong: The couple is largest when the plane is parallel to B and zero when the plane is perpendicular to B. Past that position it reverses. Without a commutator to reverse the current, the coil oscillates about the perpendicular position.
:::

## The torque on a rectangular loop {lvl=2 id=s-torque label="Class 12"}

Now let the loop be tilted. Take a rectangle with sides $a$ and $b$, carrying current $I$, free to turn about an axis through its centre parallel to the sides of length $a$. A uniform field $\mathbf B$ is perpendicular to that axis. Let $\theta$ be the angle between the **normal** to the loop and $\mathbf B$.

**The sides of length $b$.** Their currents are opposite, and both make the same angle with B, so their forces are equal and opposite. Both forces point along the rotation axis and act along that same line, so they cancel and give no torque about it.

**The sides of length $a$.** Each is perpendicular to B, so each feels a force $F = IaB$, perpendicular both to the side and to B. The two forces are equal and opposite, but they act along parallel lines a distance $b\sin\theta$ apart (see the figure). That is a couple of moment

$$\tau = F\,b\sin\theta = IaB\,b\sin\theta = IAB\sin\theta,$$

where $A = ab$ is the area.

:::figure caption="Side view, looking along the sides of length a. The loop is seen edge on. The force on each long side is IaB, vertical. The two lines of action are b sin θ apart, so the couple is IAB sin θ, turning the moment m toward B."
<svg viewBox="0 0 360 205" role="img" aria-label="Edge-on loop tilted at angle theta, with normal m, horizontal field B, upward force on one edge and downward force on the other">
<line style="stroke:var(--ink);stroke-width:2" x1="20" y1="22" x2="80" y2="22"/><polygon style="fill:var(--ink)" points="88,22 78,17 78,27"/><text class="k" x="46" y="15">B</text>
<line class="faint" x1="240" y1="100" x2="320" y2="100"/>
<line style="stroke:var(--phy);stroke-width:3" x1="196.7" y1="75" x2="283.3" y2="125"/>
<circle cx="196.7" cy="75" r="7" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><circle cx="196.7" cy="75" r="2" style="fill:var(--ink)"/>
<circle cx="283.3" cy="125" r="7" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><line style="stroke:var(--ink);stroke-width:1.5" x1="278.5" y1="120.2" x2="288.1" y2="129.8"/><line style="stroke:var(--ink);stroke-width:1.5" x1="278.5" y1="129.8" x2="288.1" y2="120.2"/>
<line style="stroke:var(--ink);stroke-width:2" x1="196.7" y1="67" x2="196.7" y2="32"/><polygon style="fill:var(--ink)" points="196.7,22 191.7,32 201.7,32"/><text class="k" x="204" y="36">F = IaB</text>
<line style="stroke:var(--ink);stroke-width:2" x1="283.3" y1="133" x2="283.3" y2="168"/><polygon style="fill:var(--ink)" points="283.3,178 278.3,168 288.3,168"/><text class="k" x="291" y="172">F</text>
<line style="stroke:var(--phy);stroke-width:2" x1="240" y1="100" x2="265" y2="56.7"/><polygon style="fill:var(--phy)" points="270,48 269.33,59.16 260.67,54.16"/><text class="k" x="276" y="50">m</text>
<path class="ln" d="M265,100 A25,25 0 0,0 252.5,78.35"/><text x="268" y="88">θ</text>
<line class="faint" x1="196.7" y1="84" x2="196.7" y2="188"/><line class="ln" x1="196.7" y1="188" x2="283.3" y2="188"/><text x="214" y="201">b sin θ</text>
<text x="150" y="70">⊙ current out</text><text x="236" y="146">⊗ in</text>
</svg>
:::

Bundle the loop's properties into one vector, the **magnetic dipole moment**:

:::law caption="Magnetic moment of a flat coil of N turns, and the torque on it in a uniform field. The direction of A (and m) is given by the right-hand rule: curl the fingers along the current; the thumb gives the normal."
$$\mathbf m = NI\mathbf A, \qquad \boldsymbol\tau = \mathbf m\times\mathbf B, \qquad \tau = NIAB\sin\theta$$
:::

The SI unit of $m$ is A m² (equivalently J T⁻¹). The torque turns $\mathbf m$ toward $\mathbf B$; it is largest when the plane of the loop is **parallel** to B ($\theta = 90^\circ$) and zero when the plane is **perpendicular** to B.

Compare the electric dipole: $\boldsymbol\tau = \mathbf p\times\mathbf E$. A current loop in a magnetic field behaves exactly like an electric dipole in an electric field. That is why it is called a magnetic dipole.

:::qc
q: A square coil of 20 turns, side 10 cm, carries 12 A. Its normal makes 30° with a uniform 0.80 T field. What torque acts on it? (NCERT Exercise 4.9)
options: ["0.96 N m", "1.66 N m", "0.048 N m", "1.92 N m"]
answer: 0
right: Right. τ = NIAB sin θ = 20 × 12 × 0.01 × 0.80 × 0.5 = 0.96 N m. The angle given is from the normal, so it goes straight into sin θ.
wrong: τ = NIAB sin θ with θ = 30° measured from the normal: 20 × 12 × (0.1)² × 0.80 × sin 30° = 0.96 N m. Using cos 30° would treat 30° as the angle from the plane.
:::

## Any flat loop: the mosaic argument {lvl=2 id=s-shape label="Class 12"}

The formula used a rectangle. Does a circle, or a blob, give the same $\boldsymbol\tau = I\mathbf A\times\mathbf B$? Yes, and here is why.

Cover the flat loop with a fine grid of tiny rectangles, and imagine the same current $I$ circulating round every tiny rectangle in the same sense. Where two tiny rectangles share an edge, their currents along that edge are **equal and opposite**, so they cancel exactly. Every interior edge cancels. All that survives is the current round the **outer boundary**, which is the original loop.

:::figure caption="A flat loop as a mosaic of small current loops, all circulating the same way. On every shared edge the two currents are opposite and cancel, leaving only the current round the outside."
<svg viewBox="0 0 320 180" role="img" aria-label="Grid of small square loops all circulating counterclockwise; on a shared edge the two currents point opposite ways">
<line class="faint" x1="100" y1="40" x2="100" y2="160"/><line class="faint" x1="140" y1="40" x2="140" y2="160"/><line class="faint" x1="180" y1="40" x2="180" y2="160"/>
<line class="faint" x1="60" y1="80" x2="220" y2="80"/><line class="faint" x1="60" y1="120" x2="220" y2="120"/>
<rect x="60" y="40" width="160" height="120" style="fill:none;stroke:var(--phy);stroke-width:2.5"/>
<text x="74" y="64">↺</text><text x="114" y="64">↺</text><text x="154" y="64">↺</text><text x="194" y="64">↺</text>
<text x="154" y="104">↺</text><text x="194" y="104">↺</text>
<text x="74" y="144">↺</text><text x="114" y="144">↺</text><text x="154" y="144">↺</text><text x="194" y="144">↺</text>
<line style="stroke:var(--ink);stroke-width:2" x1="95" y1="115" x2="95" y2="90"/><polygon style="fill:var(--ink)" points="95,84 91,93 99,93"/>
<line style="stroke:var(--ink);stroke-width:2" x1="105" y1="85" x2="105" y2="110"/><polygon style="fill:var(--ink)" points="105,116 101,107 109,107"/>
<text class="k" x="68" y="104">↑</text><text class="k" x="112" y="104">↓</text>
<text x="230" y="70">shared</text><text x="230" y="84">edges</text><text x="230" y="98">cancel</text>
<text x="28" y="176">only the outer boundary current survives</text>
</svg>
:::

Each tiny rectangle feels a torque $I\,d\mathbf A\times\mathbf B$. All the $d\mathbf A$ point along the same normal (the loop is flat), so they add to $I\mathbf A\times\mathbf B$. A curved edge is approximated as closely as you like by a fine enough staircase, so the result holds for **any** planar loop: only the area and the orientation matter, not the shape. This is NCERT's answer to Exercise 4.13(b).

For a **non-planar** loop the same mosaic idea still works with a surface spanning the loop: $\mathbf m = I\int d\mathbf A$, a vector area that depends only on the boundary.

:::qc
q: A flexible current loop of fixed perimeter lies in a uniform field and is free to move. Which shape does it end in, and why?
options: ["A circle with its plane perpendicular to B, because that maximises m = IA along B", "A long thin ellipse along B, because that minimises the torque", "A square, because it has straight sides", "Any shape; the torque depends only on the perimeter"]
answer: 0
right: Right. The energy is −m·B. The loop lowers it by turning m along B and by making m as large as possible, and for a fixed perimeter the circle has the largest area (NCERT Example 4.11c).
wrong: The energy of the loop is −m·B = −IAB cos θ. It is lowest when m is along B and A is as large as possible. For a fixed perimeter, a circle encloses the largest area.
:::

## The circular loop as a magnetic dipole {lvl=2 id=s-dipole label="Class 12"}

The name "dipole" is more than an analogy. On the axis of a circular loop of radius $R$, at a distance $x$ from its centre, the Biot–Savart law gives (see the lesson on the Biot–Savart law)

$$B = \frac{\mu_0 I R^2}{2(x^2+R^2)^{3/2}} \;\xrightarrow{\;x\gg R\;}\; \frac{\mu_0}{4\pi}\,\frac{2m}{x^3}, \qquad m = I\pi R^2 .$$

Compare the field on the axis of a small electric dipole, $\dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{x^3}$. Replace $1/\varepsilon_0$ by $\mu_0$ and $p$ by $m$ and the two agree. The match holds at every far point, not only on the axis: far away, a small current loop and a small bar magnet have the same field pattern as an electric dipole. The lesson on the magnetic dipole and bar magnet builds on this.

**One difference.** An electric dipole is two separated charges. No one has found an isolated magnetic charge, and inside a current loop the field lines go *through* the loop and close on themselves, while inside an electric dipole the field points from + to −, against the outside field. Far away the two look the same; close up they do not.

:::qc
q: A 100-turn coil of radius 10 cm carries 3.2 A (NCERT Example 4.10). What is its magnetic moment, to one significant figure?
options: ["10 A m²", "0.1 A m²", "1000 A m²", "3.2 A m²"]
answer: 0
right: Right. m = NIπR² = 100 × 3.2 × π × 0.01 ≈ 10 A m².
wrong: Use m = NIA with A = πR² = π × (0.1)² = 0.0314 m². Then m = 100 × 3.2 × 0.0314 ≈ 10 A m².
:::

## The moving-coil galvanometer {lvl=2 id=s-galv label="Class 12"}

A galvanometer detects and measures small currents by turning the torque on a coil into a visible angle.

**The parts.**
- A rectangular coil of many turns on a light frame, free to turn about a vertical axis.
- A permanent magnet with **concave** pole pieces, and a **soft-iron cylinder** fixed at the centre, inside the coil.
- A spring (or a fine suspension fibre) that supplies a restoring torque $k\phi$ proportional to the deflection $\phi$.
- A pointer, or a small mirror and a lamp-and-scale for very small deflections.

**Why the curved poles and the iron core.** The iron core draws the field lines into itself, and the curved gap makes them **radial**: in the gap they all point along radii of the core. The coil's vertical sides move round inside that gap, so they always cut the field at right angles, whatever the deflection. The plane of the coil always lies along the field lines, so $\sin\theta = 1$ at every position, and the torque is simply $NIAB$. The iron also makes $B$ in the gap much stronger.

:::figure caption="Top view of a moving-coil galvanometer. The concave poles and the soft-iron core make the field in the gap radial. The coil's sides (⊙ and ⊗) always move at right angles to the field, so the deflecting torque is NIAB at every angle."
<svg viewBox="0 0 320 206" role="img" aria-label="Top view: N and S poles with concave faces around a soft iron core; radial field lines in the gap; coil sides with tangential forces">
<path d="M30,30 L120.3,30 L120.3,55 A60,60 0 0,0 120.3,145 L120.3,170 L30,170 Z" style="fill:var(--muted);fill-opacity:.25;stroke:var(--muted)"/>
<path d="M199.7,30 L290,30 L290,170 L199.7,170 L199.7,145 A60,60 0 0,0 199.7,55 Z" style="fill:var(--muted);fill-opacity:.25;stroke:var(--muted)"/>
<text class="k" x="58" y="105">N</text><text class="k" x="250" y="105">S</text>
<circle cx="160" cy="100" r="35" style="fill:var(--muted);fill-opacity:.35;stroke:var(--muted)"/><text x="147" y="135">core</text>
<line style="stroke:var(--phy);stroke-width:1.5" x1="108.04" y1="70" x2="129.69" y2="82.5"/><line style="stroke:var(--phy);stroke-width:1.5" x1="100" y1="100" x2="125" y2="100"/><line style="stroke:var(--phy);stroke-width:1.5" x1="108.04" y1="130" x2="129.69" y2="117.5"/>
<line style="stroke:var(--phy);stroke-width:1.5" x1="190.31" y1="82.5" x2="211.96" y2="70"/><line style="stroke:var(--phy);stroke-width:1.5" x1="195" y1="100" x2="220" y2="100"/><line style="stroke:var(--phy);stroke-width:1.5" x1="190.31" y1="117.5" x2="211.96" y2="130"/>
<line class="faint" x1="115.8" y1="83.9" x2="204.2" y2="116.1"/>
<circle cx="115.8" cy="83.9" r="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><circle cx="115.8" cy="83.9" r="1.8" style="fill:var(--ink)"/>
<circle cx="204.2" cy="116.1" r="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><line style="stroke:var(--ink);stroke-width:1.3" x1="200" y1="112" x2="208.4" y2="120.2"/><line style="stroke:var(--ink);stroke-width:1.3" x1="200" y1="120.2" x2="208.4" y2="112"/>
<line style="stroke:var(--ink);stroke-width:2" x1="113.7" y1="90" x2="108.2" y2="104.6"/><polygon style="fill:var(--ink)" points="105.5,112.1 111.96,105.97 104.44,103.23"/><text class="k" x="90" y="122">F</text>
<line style="stroke:var(--ink);stroke-width:2" x1="206.3" y1="110" x2="211.76" y2="95.42"/><polygon style="fill:var(--ink)" points="214.5,87.9 215.52,96.79 208.0,94.05"/><text class="k" x="220" y="86">F</text>
<text x="160" y="188" style="text-anchor:middle">field radial in the gap:</text><text x="160" y="200" style="text-anchor:middle">plane of coil always along B</text>
</svg>
:::

**Balance.** The coil turns until the spring's torque equals the magnetic torque:

$$k\phi = NIAB \quad\Longrightarrow\quad \phi = \left(\frac{NAB}{k}\right) I .$$

The deflection is **proportional** to the current, so the scale is evenly spaced (linear). Without the radial field the torque would be $NIAB\cos\phi$ for a coil starting parallel to B, falling off as it turned, and the scale would bunch up at the high end.

:::qc
q: Why is the soft-iron core in a moving-coil galvanometer essential for a linear scale?
options: ["It makes the field radial, so the coil's plane is always along B and the torque is NIAB at every deflection", "It increases the coil's moment of inertia, so the needle moves steadily", "It provides the restoring torque", "It shields the coil from the Earth's field"]
answer: 0
right: Right. With a radial field, sin θ = 1 at every deflection, so kφ = NIAB and φ is proportional to I. The core also strengthens the field.
wrong: The restoring torque comes from the spring. The core, together with the concave poles, makes the field radial, so the magnetic torque is NIAB at every angle and the balance kφ = NIAB gives φ ∝ I.
:::

## Current sensitivity and voltage sensitivity {lvl=2 id=s-sens label="Class 12"}

A sensitive meter gives a large deflection for a small input.

:::law caption="Sensitivities of a moving-coil galvanometer of N turns, area A, field B, spring constant k and coil resistance R (= G)."
$$\text{current sensitivity } \frac{\phi}{I} = \frac{NAB}{k}, \qquad \text{voltage sensitivity } \frac{\phi}{V} = \frac{NAB}{kR}$$
:::

The reciprocal of the current sensitivity, $k/(NAB)$, is called the **figure of merit**: the current per unit deflection.

**Why doubling N does not help a voltmeter.** Doubling the number of turns doubles the current sensitivity. But to get twice the turns of the same wire on the same frame you need twice the length of wire, so the coil resistance $R$ also doubles. Then $NAB/(kR)$ is unchanged. More turns help when the meter is fed a fixed **current**, not when it is fed a fixed **voltage**. (In practice the extra turns also add mass and space, and thinner wire to fit them raises $R$ further.)

**How to make a galvanometer more sensitive.** Increase $B$ (a stronger magnet), increase $A$, or decrease $k$ (a finer suspension, such as phosphor bronze or quartz). Each of these helps both sensitivities.

:::worked title="A galvanometer by the numbers"
A coil has $N = 100$, $A = 2.0\times10^{-4}$ m², $B = 0.25$ T, $k = 1.0\times10^{-5}$ N m rad⁻¹ and $R = 50\ \Omega$.

$NAB = 100\times2.0\times10^{-4}\times0.25 = 5.0\times10^{-3}$ N m A⁻¹.

Current sensitivity $= 5.0\times10^{-3}/10^{-5} = 500$ rad A⁻¹, so 1 mA gives $0.5$ rad $\approx 29^\circ$.

Voltage sensitivity $= 500/50 = 10$ rad V⁻¹, so 10 mV gives $0.1$ rad $\approx 5.7^\circ$.
:::

:::qc
q: Meter M₂ has 1.4 times the current sensitivity of M₁, and its coil resistance is 14 Ω against M₁'s 10 Ω. What is the ratio of their voltage sensitivities, M₂ to M₁? (NCERT Exercise 4.10)
options: ["1", "1.4", "1.96", "0.71"]
answer: 0
right: Right. Voltage sensitivity is current sensitivity divided by R: 1.4 × 10/14 = 1.
wrong: Voltage sensitivity = current sensitivity / R. So the ratio is 1.4 × (R₁/R₂) = 1.4 × 10/14 = 1.
:::

## Turning a galvanometer into an ammeter or a voltmeter {lvl=2 id=s-convert label="Class 12"}

A galvanometer gives full-scale deflection for a tiny current $I_g$, often a milliampere or less, and its coil has a resistance $G$ of tens of ohms. That makes it a poor meter for ordinary circuits:

- As an **ammeter** it would be wrecked by an ampere, and its resistance $G$ would change the current it is put in to measure.
- As a **voltmeter** it would draw far too much current from the circuit it is connected across.

The cure is one extra resistor in each case.

:::figure caption="Left: an ammeter is a galvanometer with a small shunt S in parallel, which carries most of the current. Right: a voltmeter is a galvanometer with a large resistance R in series."
<svg viewBox="0 0 360 150" role="img" aria-label="Ammeter circuit with galvanometer and parallel shunt; voltmeter circuit with galvanometer and series resistor">
<line class="ln" x1="20" y1="60" x2="60" y2="60"/><line class="ln" x1="60" y1="40" x2="60" y2="80"/>
<line class="ln" x1="60" y1="40" x2="96" y2="40"/><circle cx="110" cy="40" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text class="k" x="105" y="44">G</text><line class="ln" x1="124" y1="40" x2="160" y2="40"/>
<line class="ln" x1="60" y1="80" x2="95" y2="80"/><rect x="95" y="75" width="30" height="10" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/><line class="ln" x1="125" y1="80" x2="160" y2="80"/><text class="k" x="104" y="112">S</text>
<line class="ln" x1="160" y1="40" x2="160" y2="80"/><line class="ln" x1="160" y1="60" x2="190" y2="60"/>
<text x="22" y="54">I →</text><text x="70" y="32">I_g</text><text x="66" y="96">I − I_g</text>
<text x="30" y="125">ammeter:</text><text x="30" y="137">small S in parallel</text>
<line class="ln" x1="210" y1="60" x2="240" y2="60"/><circle cx="254" cy="60" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><text class="k" x="249" y="64">G</text>
<line class="ln" x1="268" y1="60" x2="290" y2="60"/><rect x="290" y="55" width="40" height="10" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/><line class="ln" x1="330" y1="60" x2="350" y2="60"/><text class="k" x="306" y="85">R</text>
<text x="215" y="125">voltmeter:</text><text x="215" y="137">large R in series</text>
</svg>
:::

**Ammeter.** At full scale the galvanometer carries $I_g$ and the shunt carries the rest, $I - I_g$. They are in parallel, so they have the same potential difference: $I_gG = (I - I_g)S$.

**Voltmeter.** At full scale the current through the galvanometer and the series resistor is $I_g$, and the total potential difference is $V$: $I_g(G + R) = V$.

:::law caption="Conversions. The ammeter's resistance is GS/(G + S) ≈ S, very small. The voltmeter's resistance is G + R, very large."
$$S = \frac{I_g\,G}{I - I_g}, \qquad R = \frac{V}{I_g} - G$$
:::

A voltmeter built this way is often rated in **ohms per volt**, $1/I_g$: a 50 µA movement gives 20 kΩ per volt, so on its 10 V range its resistance is 200 kΩ.

:::worked title="One movement, two meters"
A galvanometer has $G = 50\ \Omega$ and $I_g = 5$ mA.

**Ammeter, 0–1 A:** $S = \dfrac{0.005\times50}{1 - 0.005} = 0.251\ \Omega$. The meter's resistance is $50\times0.251/50.251 \approx 0.25\ \Omega$.

**Voltmeter, 0–10 V:** $R = 10/0.005 - 50 = 1950\ \Omega$. The meter's resistance is $2000\ \Omega$, that is 200 Ω per volt, a rather poor voltmeter.
:::

:::qc
q: A galvanometer of resistance 60 Ω is shunted by 0.02 Ω and used in series with a 3.00 Ω resistor across an ideal 3.00 V cell. What current does it read? (NCERT Example 4.12b)
options: ["0.99 A", "1.00 A", "0.048 A", "0.50 A"]
answer: 0
right: Right. The shunted meter has about 0.02 Ω, so the total is 3.02 Ω and I = 3/3.02 = 0.99 A, close to the true 1.00 A. Unshunted, the 60 Ω coil would have cut the current to 0.048 A.
wrong: The meter's resistance is 60 ∥ 0.02 ≈ 0.02 Ω. The total is 3.02 Ω, so I = 3.00/3.02 = 0.99 A.
:::

## Energy of a dipole: stable and unstable positions {lvl=3 id=s-energy label="JEE"}

The torque $mB\sin\theta$ tries to reduce $\theta$. To turn the loop slowly from $\theta_1$ to $\theta_2$ an outside agent must supply the work

$$W = \int_{\theta_1}^{\theta_2} mB\sin\theta\,d\theta = mB(\cos\theta_1 - \cos\theta_2).$$

Choosing the zero of energy at $\theta = 90^\circ$ gives a potential energy for the orientation:

:::law caption="Orientation energy of a magnetic dipole in a uniform field."
$$U(\theta) = -\mathbf m\cdot\mathbf B = -mB\cos\theta$$
:::

- $\theta = 0$ ($\mathbf m$ along $\mathbf B$): $U = -mB$, a minimum. A small twist produces a torque back toward $\theta = 0$: **stable** equilibrium.
- $\theta = 180^\circ$: $U = +mB$, a maximum. A small twist grows: **unstable** equilibrium.
- Work to turn from stable to unstable: $2mB$.

In the stable position the loop's own field through its area points the same way as the external field, so the total flux through the loop is **largest** (NCERT Example 4.11b).

[Inference: the "energy" $-\mathbf m\cdot\mathbf B$ is the mechanical potential energy of a loop whose current is kept constant. The battery that keeps $I$ fixed while the flux changes does extra work, and a full energy count includes it. For torques and equilibria, $-\mathbf m\cdot\mathbf B$ gives the right answers.]

:::worked title="Energy turned into rotation (the idea behind NCERT Example 4.10d)"
A coil with $m = 10$ A m² and moment of inertia $0.1$ kg m² is released from rest with its axis **perpendicular** to a 2 T field ($\theta = 90^\circ$). It swings to $\theta = 0$, losing potential energy

$$U(90^\circ) - U(0) = 0 - (-mB) = mB = 20\ \text{J}.$$

All of this becomes kinetic energy: $\tfrac12(0.1)\omega^2 = 20$, so $\omega = 20$ rad s⁻¹ as it passes the stable position. NCERT's Example 4.10(d) gets the same 20 rad s⁻¹ by integrating the torque over a 90° turn. Note that a coil released exactly **at** $\theta = 0$ feels no torque and would not move at all; read the setup carefully.
:::

:::qc
q: A coil of moment 0.5 A m² is turned slowly from θ = 0 to θ = 180° in a 0.4 T field. How much work is done on it?
options: ["0.4 J", "0.2 J", "0 J", "0.8 J"]
answer: 0
right: Right. W = U(180°) − U(0) = (+mB) − (−mB) = 2mB = 2 × 0.5 × 0.4 = 0.4 J.
wrong: U = −mB cos θ. The change from θ = 0 to 180° is from −mB to +mB, so W = 2mB = 0.4 J.
:::

## Small oscillations of a loop in a field {lvl=3 id=s-osc label="JEE"}

Twist a freely pivoted loop a little away from its stable position and let go. For small $\theta$, $\sin\theta\approx\theta$, so the torque is $-mB\theta$: a restoring torque proportional to the twist, which is the recipe for simple harmonic motion. With $I_{\text{rot}}$ the moment of inertia about the pivot axis,

$$I_{\text{rot}}\,\ddot\theta = -mB\,\theta \quad\Longrightarrow\quad T = 2\pi\sqrt{\frac{I_{\text{rot}}}{mB}} .$$

This is how a **vibration magnetometer** compares field strengths: the same magnet or coil oscillates with $T\propto1/\sqrt B$, so $B_1/B_2 = T_2^2/T_1^2$. The bar-magnet version is in the lesson on the magnetic dipole and bar magnet.

:::qc
q: A coil oscillates about its stable position with period 2.0 s. The current in it is quadrupled. What is the new period?
options: ["1.0 s", "0.5 s", "4.0 s", "2.0 s"]
answer: 0
right: Right. m ∝ I, so m is four times larger and T ∝ 1/√m halves, to 1.0 s.
wrong: T = 2π√(I_rot/(mB)) and m = NIA ∝ current. Four times the current gives four times m, so T falls by √4 = 2, to 1.0 s.
:::

## Real meters disturb what they measure {lvl=3 id=s-loading label="JEE"}

The lesson on Ohm's law met this already; now we can see where the meter resistances come from. An ammeter adds $R_A \approx S$ in series; a voltmeter adds $R_V = G + R$ in parallel. Neither is zero or infinite.

**Ammeter loading.** In a circuit of total resistance $R_c$ driven by an ideal source, inserting the ammeter changes the current from $E/R_c$ to $E/(R_c + R_A)$. The reading is low by a fraction $R_A/(R_c + R_A)$.

**Voltmeter loading.** A voltmeter across a resistor $R$ puts $R_V$ in parallel with it, so the resistor's effective value drops to $RR_V/(R + R_V)$, and the voltage across it drops too.

:::worked title="A voltmeter that reads a third too low"
A 12 V ideal source drives two 10 kΩ resistors in series, so each should have 6 V across it. A voltmeter with $R_V = 10$ kΩ (say a 1 kΩ/V meter on its 10 V range) is connected across one of them.

The parallel pair is $10\,\|\,10 = 5$ kΩ. The voltmeter reads $12\times\dfrac{5}{5 + 10} = 4.0$ V, not 6 V. A 20 kΩ/V meter on the same range ($R_V = 200$ kΩ) reads $12\times\dfrac{9.52}{19.52} = 5.85$ V, much closer.
:::

**Measuring $R$ with both meters.** In the ammeter–voltmeter method there are two ways to connect:

- Voltmeter across $R$ only (ammeter outside): the measured $V/I = R\,\|\,R_V$, too small by about $R/R_V$.
- Voltmeter across $R$ and the ammeter together: the measured $V/I = R + R_A$, too large by $R_A/R$.

The first is better for small $R$, the second for large $R$. The two errors are equal when $R = \sqrt{R_AR_V}$.

:::qc
q: You must measure a resistance of about 1 MΩ with an ammeter of 1 Ω and a voltmeter of 10 MΩ. Which connection gives the smaller error?
options: ["Voltmeter across the resistor and the ammeter together", "Voltmeter across the resistor only", "Both are equally good", "Neither works at all"]
answer: 0
right: Right. Across both, the error is R_A/R = 10⁻⁶. Across R only, it is about R/R_V = 0.1. Since R is far above √(R_A R_V) ≈ 3.2 kΩ, include the ammeter inside the voltmeter's span.
wrong: Compare the fractional errors: across R only, about R/R_V = 1/10; across R and ammeter, R_A/R = 10⁻⁶. For a large R, put the ammeter inside the voltmeter's span.
:::

## Orbiting electrons as current loops {lvl=4 id=s-orbit label="Olympiad"}

A charge going round a circle is a current loop. An electron (charge $-e$) moving at speed $v$ in a circle of radius $r$ passes any point $v/(2\pi r)$ times per second, so the current is $e v/(2\pi r)$ (opposite to its motion). The moment is

$$m = IA = \frac{ev}{2\pi r}\,\pi r^2 = \frac{evr}{2} .$$

Its angular momentum is $L = m_evr$. Dividing, the speed and radius drop out:

:::law caption="Gyromagnetic ratio of orbital motion. For the electron, m points opposite to L because its charge is negative."
$$\frac{m}{L} = \frac{e}{2m_e}, \qquad \mathbf m = -\frac{e}{2m_e}\,\mathbf L$$
:::

In Bohr's model the smallest orbital angular momentum is $L = \hbar$, which gives a natural unit of atomic magnetism, the **Bohr magneton**:

$$\mu_B = \frac{e\hbar}{2m_e} = \frac{(1.602\times10^{-19})(1.055\times10^{-34})}{2\times9.109\times10^{-31}} \approx 9.27\times10^{-24}\ \text{J T}^{-1} .$$

As a check, the Bohr ground-state values $v\approx2.19\times10^6$ m s⁻¹ and $r\approx0.529\times10^{-10}$ m give $evr/2\approx9.3\times10^{-24}$ J T⁻¹, the same. [Unverified: the Bohr-orbit speed and radius are recalled from memory; they agree with the magneton computed from e, ħ and mₑ.]

**Precession.** A torque on a spinning or orbiting body does not just tip it over; because it has angular momentum, it makes $\mathbf L$ precess. From $d\mathbf L/dt = \mathbf m\times\mathbf B = -\frac{e}{2m_e}\mathbf L\times\mathbf B$, the vector $\mathbf L$ turns about $\mathbf B$ at the **Larmor frequency** $\omega_L = eB/(2m_e)$, independent of the tilt.

The electron's spin also carries a moment, about one Bohr magneton, but its ratio to the spin angular momentum is about twice $e/2m_e$ (a "g-factor" of about 2). [Unverified: stated from memory; the spin result needs relativistic quantum mechanics, not this classical model.] The lesson on magnetic materials uses these atomic moments.

:::qc
q: In a classical model, an electron's orbit is doubled in radius while its angular momentum stays the same. What happens to its orbital magnetic moment?
options: ["It is unchanged", "It doubles", "It halves", "It is four times larger"]
answer: 0
right: Right. m = (e/2mₑ)L for any circular orbit, so a fixed L means a fixed m. The larger radius is exactly offset by the lower speed.
wrong: m/L = e/2mₑ for any circular orbit, whatever its radius or speed. With L fixed, m is fixed.
:::

## Spinning charged bodies {lvl=4 id=s-spin label="Olympiad"}

Any rotating charge distribution is a set of current loops, one for each thin ring about the axis.

**Ring.** Charge $Q$ on a ring of radius $R$ turning at $\omega$: the charge passes a point $\omega/2\pi$ times a second, so $I = Q\omega/2\pi$ and

$$m_{\text{ring}} = \frac{Q\omega}{2\pi}\,\pi R^2 = \frac{Q\omega R^2}{2}.$$

**Disc.** Uniform surface charge $\sigma = Q/\pi R^2$. The ring between $r$ and $r + dr$ holds $dq = \sigma\,2\pi r\,dr$ and contributes $dm = \tfrac12dq\,\omega r^2 = \sigma\pi\omega r^3dr$. Integrating,

$$m_{\text{disc}} = \sigma\pi\omega\frac{R^4}{4} = \frac{Q\omega R^2}{4}.$$

The same method gives $Q\omega R^2/3$ for a thin spherical shell and $Q\omega R^2/5$ for a uniformly charged solid sphere.

**The shortcut.** Each piece contributes $dm = \tfrac12\,dq\,\omega r_\perp^2$ to the moment and $dL = dM\,\omega r_\perp^2$ to the angular momentum. If charge and mass are spread in the same proportion ($dq/dM = Q/M$ everywhere), then

$$\mathbf m = \frac{Q}{2M}\,\mathbf L$$

for **any** shape. Check: a uniform disc has $L = \tfrac12MR^2\omega$, so $m = \tfrac{Q}{2M}\cdot\tfrac12MR^2\omega = Q\omega R^2/4$. It follows that every such body precesses in a field at the same rate $\Omega = QB/2M$.

**Torque.** In a uniform field, the spinning body feels $\boldsymbol\tau = \mathbf m\times\mathbf B$ like any loop: a disc of moment $Q\omega R^2/4$ with its axis at angle $\theta$ to $\mathbf B$ feels $\tfrac14Q\omega R^2B\sin\theta$.

:::qc
q: A ring and a disc have the same radius and the same total charge, and spin at the same rate. What is the ratio of their magnetic moments, ring to disc?
options: ["2", "1", "1/2", "4"]
answer: 0
right: Right. m_ring = QωR²/2 and m_disc = QωR²/4. On the ring all the charge sits at the full radius, where each charge encloses the largest area.
wrong: m_ring = QωR²/2 because all the charge is at radius R. In the disc much of the charge is near the centre, giving QωR²/4. The ratio is 2.
:::

## Force on a loop in a non-uniform field {lvl=4 id=s-nonuni label="Olympiad"}

In a uniform field the net force on a loop is zero. In a non-uniform field it is not, and the direction is easy to guess from energy: since $U = -\mathbf m\cdot\mathbf B$, the force is

:::law caption="Force on a small current loop (magnetic dipole) of fixed moment m. Compare F = ∇(p·E) for an electric dipole."
$$\mathbf F = -\nabla U = \nabla(\mathbf m\cdot\mathbf B)$$
:::

A loop with $\mathbf m$ along $\mathbf B$ moves toward where the field is **stronger**; one with $\mathbf m$ opposite to $\mathbf B$ is pushed toward the weaker field.

**Seeing it directly.** Place a horizontal ring of radius $r$ above the north pole of a magnet, so the field spreads out as it rises. At the ring the field has an upward part $B_z$ and a small outward part $B_r$. The upward part pushes each element sideways in the plane of the ring (the forces cancel round it). The outward part gives every element a force $IdlB_r$ along the axis, all in the same direction, so they add: $F = I(2\pi r)B_r$.

:::figure caption="A small loop, seen edge on, in a field that spreads out upward (weaker higher up). The outward part of the field gives every element a downward force, so a loop with m along B is pulled toward the stronger field."
<svg viewBox="0 0 320 200" role="img" aria-label="Diverging field lines, edge-on loop with current out of page on left and into page on right, downward forces on both ends, moment m pointing up">
<line style="stroke:var(--phy);stroke-width:1.2;opacity:.6" x1="136" y1="195" x2="40" y2="10"/><line style="stroke:var(--phy);stroke-width:1.2;opacity:.6" x1="144" y1="195" x2="80" y2="10"/><line style="stroke:var(--phy);stroke-width:1.2;opacity:.6" x1="152" y1="195" x2="120" y2="10"/><line style="stroke:var(--phy);stroke-width:1.2;opacity:.6" x1="160" y1="195" x2="160" y2="10"/><line style="stroke:var(--phy);stroke-width:1.2;opacity:.6" x1="168" y1="195" x2="200" y2="10"/><line style="stroke:var(--phy);stroke-width:1.2;opacity:.6" x1="176" y1="195" x2="240" y2="10"/><line style="stroke:var(--phy);stroke-width:1.2;opacity:.6" x1="184" y1="195" x2="280" y2="10"/>
<line style="stroke:var(--ink);stroke-width:3" x1="100" y1="90" x2="220" y2="90"/>
<circle cx="100" cy="90" r="7" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><circle cx="100" cy="90" r="2" style="fill:var(--ink)"/>
<circle cx="220" cy="90" r="7" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><line style="stroke:var(--ink);stroke-width:1.3" x1="215.5" y1="85.5" x2="224.5" y2="94.5"/><line style="stroke:var(--ink);stroke-width:1.3" x1="215.5" y1="94.5" x2="224.5" y2="85.5"/>
<line style="stroke:var(--ink);stroke-width:2" x1="100" y1="99" x2="100" y2="128"/><polygon style="fill:var(--ink)" points="100,136 95,126 105,126"/>
<line style="stroke:var(--ink);stroke-width:2" x1="220" y1="99" x2="220" y2="128"/><polygon style="fill:var(--ink)" points="220,136 215,126 225,126"/>
<text class="k" x="78" y="130">F</text><text class="k" x="228" y="130">F</text>
<line style="stroke:var(--chem);stroke-width:2" x1="160" y1="84" x2="160" y2="56"/><polygon style="fill:var(--chem)" points="160,48 155,58 165,58"/><text class="k" x="166" y="58">m</text>
<line style="stroke:var(--ink);stroke-width:1.5" x1="93" y1="90" x2="72" y2="90"/><polygon style="fill:var(--ink)" points="66,90 74,86 74,94"/><text x="40" y="84">B_r</text>
<text x="10" y="174">stronger</text><text x="10" y="186">field below</text><text x="274" y="36">weaker</text><text x="274" y="48">above</text>
</svg>
:::

**Linking to $\nabla(\mathbf m\cdot\mathbf B)$.** Field lines neither start nor end, so the flux out of a thin pillbox of radius $r$ and height $dz$ on the axis is zero: $\pi r^2[B_z(z + dz) - B_z(z)] + 2\pi r\,dz\,B_r = 0$, giving $B_r = -\tfrac r2\,\dfrac{dB_z}{dz}$. Then the axial force on the ring is

$$F_z = -I(2\pi r)B_r = I\pi r^2\,\frac{dB_z}{dz} = m\,\frac{dB_z}{dz},$$

with the sign meaning that the force points toward increasing $B_z$, exactly what $\nabla(mB_z)$ says. This is why a coil carrying current the same way as a magnet's field is attracted to the magnet, and two coaxial coils with currents in the same sense attract (compare the lesson on forces between parallel currents).

:::qc
q: A small coil with its moment along a field that gets stronger toward the east is released. Which way is the net force?
options: ["East, toward the stronger field", "West, toward the weaker field", "Zero, as in any field", "Perpendicular to the field"]
answer: 0
right: Right. F = ∇(m·B) with m·B = +mB, so the force points up the gradient of B, toward the east.
wrong: The net force is zero only in a uniform field. Here F = ∇(m·B), and with m along B this points toward the stronger field, east.
:::

## The ballistic galvanometer {lvl=4 id=s-ballistic label="Olympiad"}

Sometimes what matters is not a steady current but the total **charge** in a short pulse, for example when a capacitor is discharged or a search coil is pulled out of a field. A **ballistic galvanometer** has a heavy coil with a large moment of inertia $J$ and a weak spring, so its natural period $T = 2\pi\sqrt{J/k}$ is long (several seconds), and very little damping.

**Step 1: the kick.** During a pulse much shorter than $T$, the coil barely moves, so the field stays at right angles to its sides and the torque is $NABi(t)$. The angular impulse gives it an angular speed

$$J\omega_0 = \int NAB\,i\,dt = NAB\,Q .$$

**Step 2: the swing.** Afterwards, the coil turns against the spring until its kinetic energy is stored: $\tfrac12J\omega_0^2 = \tfrac12k\theta_{\max}^2$, so $\theta_{\max} = \omega_0\sqrt{J/k}$.

Combining, with $\sqrt{J/k} = T/2\pi$ and $J = kT^2/4\pi^2$:

:::law caption="Ballistic galvanometer (undamped, pulse much shorter than the period). The first throw is proportional to the charge that passed."
$$Q = \frac{k}{NAB}\cdot\frac{T}{2\pi}\,\theta_{\max}$$
:::

The factor $k/(NAB)$ is the figure of merit from the steady-current calibration, so one steady-current measurement and one timing of the free swing calibrate the instrument for charge. In practice, air and eddy-current damping shrink the first throw slightly, and a measured correction from the decay of successive swings is applied. [Inference: the size and form of this damping correction are not derived here.]

Damping matters in ordinary meters too. A galvanometer coil is often wound on a metal frame: as it turns in the field, eddy currents flow in the frame and oppose the motion (see the induction lessons), so the pointer settles quickly instead of swinging. A ballistic galvanometer deliberately avoids this.

:::qc
q: A ballistic galvanometer's spring is replaced by one four times stiffer, everything else unchanged. For the same charge pulse, how does the first throw change?
options: ["It halves", "It falls to a quarter", "It doubles", "It is unchanged"]
answer: 0
right: Right. θ_max = NABQ/√(kJ). Four times k gives half the throw. The kick ω₀ = NABQ/J is unchanged, but a stiffer spring stops it sooner.
wrong: The kick gives ω₀ = NABQ/J, independent of k. Then θ_max = ω₀√(J/k) ∝ 1/√k, so four times k halves the throw.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A current loop in a uniform field feels no net force but a couple; the couple turns it. This is the principle of the motor and the moving-coil meter. {lvl=1}
2. A DC motor's commutator reverses the coil current every half turn, so the couple keeps the same sense. {lvl=1}
3. $\mathbf m = NI\mathbf A$ (right-hand rule) and $\boldsymbol\tau = \mathbf m\times\mathbf B$, magnitude $NIAB\sin\theta$ with θ from the normal. It holds for any planar shape, because interior currents of a mosaic cancel. {lvl=2}
4. Far from it, a small current loop has the field of a dipole: $B_{\text{axis}} = \dfrac{\mu_0}{4\pi}\dfrac{2m}{x^3}$. {lvl=2}
5. Galvanometer: radial field from concave poles and an iron core, so $k\phi = NIAB$ and the scale is linear. Current sensitivity $NAB/k$; voltage sensitivity $NAB/(kR)$. {lvl=2}
6. Ammeter: shunt $S = I_gG/(I - I_g)$ in parallel. Voltmeter: $R = V/I_g - G$ in series. {lvl=2}
7. $U = -\mathbf m\cdot\mathbf B$: stable with m along B, unstable opposite, $2mB$ between them. Small oscillations: $T = 2\pi\sqrt{I_{\text{rot}}/(mB)}$. {lvl=3}
8. Meters load the circuit: an ammeter reads low by $R_A/(R_c + R_A)$; a voltmeter puts $R_V$ in parallel. Use $V$ across $R$ alone for small $R$, across $R$ and ammeter for large $R$. {lvl=3}
9. Orbital moment $m = evr/2$, $m/L = e/2m_e$; Bohr magneton $e\hbar/2m_e\approx9.27\times10^{-24}$ J/T. Spinning bodies with uniform $q/M$: $\mathbf m = (Q/2M)\mathbf L$; ring $Q\omega R^2/2$, disc $Q\omega R^2/4$. {lvl=4}
10. Non-uniform field: $\mathbf F = \nabla(\mathbf m\cdot\mathbf B)$; on an axis $F = m\,dB/dz$. Ballistic galvanometer: $Q = \dfrac{k}{NAB}\dfrac{T}{2\pi}\theta_{\max}$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The torque is largest when the loop's **plane** is parallel to B, and zero when the plane is perpendicular to B. Check whether a question gives the angle from the normal or from the plane. {lvl=1}
- Do not forget N: the moment of a coil is $NIA$, not $IA$. And use the area in m² (10 cm side → 0.01 m²). {lvl=2}
- The shape of a flat loop does not matter, only its area and orientation; the perimeter does not enter. {lvl=2}
- More turns raise current sensitivity, not voltage sensitivity, because R rises with N. {lvl=2}
- An ammeter goes in series and must have tiny resistance; a voltmeter goes in parallel and must have huge resistance. A shunt is in parallel with the galvanometer, the voltmeter resistor in series. {lvl=2}
- The work to turn a dipole from θ₁ to θ₂ is $mB(\cos\theta_1 - \cos\theta_2)$; from 0 to 180° it is $2mB$, not zero. {lvl=3}
- In $T = 2\pi\sqrt{I/(mB)}$, the $I$ is the moment of inertia about the actual pivot axis (for a ring about a diameter, $MR^2/2$), not the current. {lvl=3}
- For an electron, $\mathbf m$ is opposite to $\mathbf L$. For a spinning disc, use $Q\omega R^2/4$, not the ring value. {lvl=4}
- A uniform field gives zero net force. If a problem says a loop is pulled or pushed, the field must be non-uniform; use $\mathbf F = \nabla(\mathbf m\cdot\mathbf B)$ or the radial-field picture. {lvl=4}
:::
