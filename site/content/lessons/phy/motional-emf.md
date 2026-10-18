---
title: Motional emf
summary: 'How simply moving a wire through a magnetic field turns it into a battery, and how big that battery is.'
ncert: ["Class 12 Physics · Ch 6 Electromagnetic Induction (§6.6)"]
up_to: Olympiad
builds_on: [Lorentz force and circular motion, Force on a current-carrying conductor, Electromagnetic induction, Lenz's law, Ohm's law]
notes_prompt: Explain, without using flux, why a metal rod sliding across a magnetic field ends up with one end positive and the other negative, and why the charges stop piling up after a moment.
margin:
  - kind: history
    title: History
    text: In 1831 Faraday spun a copper disc between the poles of a magnet and drew a steady current from sliding contacts at its axle and rim, the first dynamo. The puzzle of where the emf of a rotating disc "lives" was argued over for decades afterwards. (Dates and details from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "Two checks catch most mistakes: the emf is B times the length times the velocity, with all three mutually perpendicular; and the induced current always makes a force on the rod that opposes its motion."
  - kind: olympiad
    title: Olympiad link
    text: "Most rod-on-rails problems become first-order linear equations with time constant τ = mR/(B²l²). Integrate the force equation once and you get the charge: impulse = B l Q. Many 'find the distance' questions need only this, never the full v(t)."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 6 Electromagnetic Induction, §6.6 Motional electromotive force, Examples 6.6–6.7, Exercises 6.4–6.6" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 38 Electromagnetic Induction (motional emf, rotating rod)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.6 Electromagnetic induction. Maxwell's equations" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 7 Electromagnetic induction (moving conductors, the universal flux rule)" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 7 Electrodynamics, §7.1.3 Motional emf" }
cards:
  - { front: "Emf across a rod of length $l$ moving at $v$ in a field $B$, all three mutually perpendicular?", back: "$\\varepsilon = Blv$. It comes from the force $qvB$ on each carrier along the rod; the work per unit charge over the length $l$ is $vBl$." }
  - { front: "Rod on rails, total resistance $R$: current, force, power?", back: "$I = Blv/R$, opposing force $B^2l^2v/R$, power $Fv = B^2l^2v^2/R = I^2R = \\varepsilon I$." }
  - { front: "Terminal speed of a rod falling on vertical rails?", back: "$v_t = mgR/(B^2l^2)$, reached exponentially with time constant $\\tau = mR/(B^2l^2) = v_t/g$." }
  - { front: "Distance a rod coasts on rails from speed $v_0$?", back: "$x = mv_0R/(B^2l^2)$; charge through the circuit $Q = mv_0/(Bl)$, from impulse $BlQ = mv_0$." }
  - { front: "Emf of a rod of length $l$ rotating about one end at $\\omega$ in a perpendicular field?", back: "$\\varepsilon = \\tfrac12B\\omega l^2$, the same as $B\\times$ (area swept per second). A disc of radius $R$ gives $\\tfrac12B\\omega R^2$; spokes are in parallel." }
  - { front: "Rod with a capacitor $C$ across the rails, pushed by force $F$?", back: "It accelerates uniformly at $a = F/(m + CB^2l^2)$: the capacitor acts like extra mass $CB^2l^2$." }
core:
  idea: 'A conductor of length $l$ moving with velocity $\vec v$ in a field $\vec B$ has emf $\varepsilon = Blv$ (with $l$, $v$, $B$ mutually perpendicular), because the Lorentz force pushes its free charges along it. The same value follows from $-d\Phi_B/dt$.'
  formulas:
    - tex: '\varepsilon = Blv'
      label: 'Motional emf of a moving rod'
    - tex: 'F = \frac{B^2l^2v}{R}'
      label: 'Magnetic drag on the rod'
    - tex: '\varepsilon = \tfrac12 B\omega l^2'
      label: 'Rod rotating about one end'
  conditions:
    - 'Uniform, steady magnetic field; straight rigid rod with $l$, $v$, $\vec B$ mutually perpendicular'
    - 'Smooth, perfectly conducting rails with all the resistance lumped in $R$'
    - 'Negligible self-inductance; for the flux rule the circuit must be thin and move with the material'
  sign: 'The positive end of the rod is the one that $\vec v\times\vec B$ points towards; the magnetic drag always opposes the motion.'
outcomes:
  - 'Derive $\varepsilon = Blv$ from the Lorentz force and from the changing flux'
  - 'Find the current, drag force and power for a rod on rails, and show $Fv = I^2R$'
  - 'Calculate the emf of a rotating rod or disc and of conductors in the Earth''s field'
  - 'Solve terminal-speed, coasting and loop-crossing-a-field-edge problems'
  - 'Treat rods with a battery, capacitor or inductor and explain why the magnetic force does no net work'
---

:::hook
q: An aeroplane flies level through the Earth's magnetic field, and an emf of about half a volt appears between its wing tips. A passenger runs a wire from one wing tip to the other through a bulb. Does the bulb glow?
options: ["Yes, the emf drives a current through it", "Yes, but only when the plane turns", "No: the wire to the bulb moves with the plane and has the same emf, which cancels", "No: half a volt can never light a bulb"]
answer: 2
right: Right. The connecting wire crosses the same field lines at the same speed as the wing, so it has the same emf pushing the other way round the loop. Equivalently, the flux through a loop carried along with the plane does not change. The rest of this lesson builds that picture.
wrong: The connecting wire travels with the plane, so its charges feel exactly the same magnetic push as those in the wing. Round the closed loop the two emfs cancel and no current flows. Equivalently, the flux through a loop carried along rigidly does not change.
:::

## A moving rod is a battery {lvl=2 id=s-lorentz label="Class 12"}

A metal rod is full of free electrons. When the rod moves, they move with it. A charge moving through a magnetic field feels a force $q\mathbf v\times\mathbf B$ (lesson *Lorentz force and circular motion*). So moving the rod through a field pushes every free charge sideways relative to the motion.

Take the simplest arrangement: the rod, its velocity and the field all at right angles. The force on each carrier is then $qvB$, and it points **along the rod**. Charges slide along it until they are stopped by the ends. One end becomes positive, the other negative.

The piling up cannot continue for ever. The separated charges make an electric field $E$ inside the rod, pointing back against the magnetic push. Within a tiny fraction of a second the two balance:

$$qE = qvB \quad\Rightarrow\quad E = vB.$$

A uniform field $E$ over a length $l$ gives a potential difference $El$. So the ends of the rod differ in potential by

:::eq caption="Motional emf of a straight rod of length l moving at speed v, with rod, velocity and field mutually perpendicular."
$$\varepsilon = Blv$$
:::

That is an **emf** in exactly the sense of a cell: a non-electrostatic force (here magnetic) that does work on charges and drives them from one terminal to the other. The work it does on a charge $q$ carried the length of the rod is $qvB\times l$, so the work per unit charge is $Blv$. Connect the ends through an outside circuit and current flows, just as from a cell.

If the three directions are not at right angles, only the part that matters counts. Generally,

$$\varepsilon = \int(\mathbf v\times\mathbf B)\cdot d\mathbf l,$$

the work per unit charge done by the magnetic force along the rod. A rod moving **along its own length**, or moving **along the field**, has no emf: $\mathbf v\times\mathbf B$ is then perpendicular to the rod, or zero.

**Direction.** Positive charges are pushed along $\mathbf v\times\mathbf B$. The end they gather at is the positive terminal. (Fleming's **right**-hand rule says the same: first finger field, thumb motion, second finger induced current.)

:::worked title="Numbers: a 50 cm rod"
A rod 0.50 m long moves at 4.0 m/s across a 0.20 T field. Then $\varepsilon = 0.20\times0.50\times4.0 = 0.40$ V. The electric field inside the rod (open circuit) is $vB = 0.80$ V/m, and $0.80\times0.50 = 0.40$ V, the same.
:::

:::qc
q: A rod moves at 3 m/s in a 0.5 T field, its length perpendicular to the field, but its velocity at 30° to the field. The rod is 0.4 m long. The emf is
options: ["0.6 V", "0.3 V", "0.52 V", "zero"]
answer: 1
right: Right. Only the part of the velocity perpendicular to B counts, v sin 30° = 1.5 m/s, so ε = 0.5 × 0.4 × 1.5 = 0.3 V.
wrong: The part of the velocity along B gives no force. Use v sin 30° = 1.5 m/s: ε = Blv sin θ = 0.5 × 0.4 × 1.5 = 0.3 V.
:::

## The same emf from the changing flux {lvl=2 id=s-flux label="Class 12"}

Now lay the rod across two parallel rails a distance $l$ apart, joined at one end through a resistor $R$. The rod, the rails and the resistor form a loop. The field $\mathbf B$ is perpendicular to the plane of the rails.

:::figure caption="A rod PQ slides to the right at speed v on rails joined through R, in a field B into the page (crosses). The carriers in the rod are pushed upward (v × B), so P is the positive terminal. Current runs up the rod and anticlockwise round the loop; the force BIl on the rod points left, against the motion."
<svg viewBox="0 0 340 220" role="img" aria-label="Rod sliding on rails with resistor, magnetic field into page, current and force directions">
<defs><marker id="me-a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="me-a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<g class="faint"><path d="M76,66 l8,8 M84,66 l-8,8 M136,66 l8,8 M144,66 l-8,8 M196,66 l8,8 M204,66 l-8,8 M256,66 l8,8 M264,66 l-8,8 M76,146 l8,8 M84,146 l-8,8 M136,146 l8,8 M144,146 l-8,8 M196,146 l8,8 M204,146 l-8,8 M256,146 l8,8 M264,146 l-8,8 M106,106 l8,8 M114,106 l-8,8 M166,106 l8,8 M174,106 l-8,8 M296,106 l8,8 M304,106 l-8,8"/></g>
<line class="ln" x1="40" y1="40" x2="320" y2="40"/><line class="ln" x1="40" y1="180" x2="320" y2="180"/>
<line class="ln" x1="40" y1="40" x2="40" y2="90"/><line class="ln" x1="40" y1="130" x2="40" y2="180"/>
<rect class="ln" x="32" y="90" width="16" height="40" style="fill:none"/><text x="10" y="114">R</text>
<line class="ln" x1="230" y1="34" x2="230" y2="186" style="stroke-width:4"/>
<text class="k" x="236" y="30">P (+)</text><text class="k" x="236" y="200">Q (−)</text>
<line class="ray" x1="244" y1="110" x2="290" y2="110" marker-end="url(#me-a1)"/><text class="k" x="276" y="102">v</text>
<line class="ln" x1="222" y1="140" x2="222" y2="80" marker-end="url(#me-a2)"/><text class="k" x="204" y="76">I</text>
<line class="ray" x1="226" y1="160" x2="180" y2="160" marker-end="url(#me-a1)"/><text class="k" x="168" y="174">BIl</text>
<line class="faint" x1="40" y1="206" x2="230" y2="206"/><text x="130" y="218">x</text>
<line class="faint" x1="330" y1="40" x2="330" y2="180"/><text x="322" y="214">l</text>
<text x="120" y="30">B ⊗ into the page</text>
</svg>
:::

When the rod is a distance $x$ from the resistor, the loop has area $lx$ and the flux through it is $\Phi = Blx$. As the rod moves, $x$ grows at the rate $v$, so

$$\left|\frac{d\Phi}{dt}\right| = Bl\frac{dx}{dt} = Blv.$$

Faraday's law (lesson *Electromagnetic induction*) says the emf round the loop is $-d\Phi/dt$: the same $Blv$. Two different-looking arguments, one result.

They are not two effects that add up. They are **the same effect described twice.** For a loop whose shape changes in a steady field, the rate of change of flux is exactly the integral of $(\mathbf v\times\mathbf B)\cdot d\mathbf l$ round the loop: the area the moving part sweeps out per second, times $B$. The flux rule is bookkeeping for the Lorentz force.

**Lenz's law checks the direction.** The area grows, so the inward flux grows. The induced current must make an outward field inside the loop, which means it runs anticlockwise: up through the rod. That is what $\mathbf v\times\mathbf B$ gave (lesson *Lenz's law*).

:::qc
q: In the figure, the rod is moved to the left instead (towards the resistor). The current through R now flows
options: ["upward through R, from Q's rail to P's rail", "downward through R, as before", "no current, since the area is still non-zero", "only if the rod accelerates"]
answer: 0
right: Right. Reversing v reverses v × B, so carriers are pushed down the rod; the current runs clockwise, which means up through R. Flux into the page is now falling, and a clockwise current tops it up.
wrong: Reversing the velocity reverses v × B and hence the emf. The current goes clockwise: down the rod, up through R. Lenz agrees: the inward flux is decreasing, and a clockwise current adds inward flux.
:::

## Current, force and the energy account {lvl=2 id=s-rails label="Class 12"}

Close the circuit. With total resistance $R$ (resistor plus rod),

$$I = \frac{Blv}{R}.$$

That current flows through the rod, which sits in the field, so the rod feels a force $BIl$ (lesson *Force on a current-carrying conductor*). Its direction is $I\mathbf l\times\mathbf B$; in the figure it points **left, against the motion**. It always does: that is Lenz's law seen as a force.

$$F_{\text{mag}} = BIl = \frac{B^2l^2v}{R}.$$

To keep the rod at a constant speed, someone must push with an equal force. The power they supply is

$$P_{\text{mech}} = Fv = \frac{B^2l^2v^2}{R}.$$

The power dissipated in the resistance is $I^2R = \dfrac{B^2l^2v^2}{R}$. **They are equal.** Every joule of work done by the pushing hand appears as heat in the circuit. The magnetic field is only the gearbox between the two.

Notice how the force grows **with the speed**. A conductor moving in a field feels a drag like a viscous liquid, proportional to $v$. That is the principle of magnetic brakes on trains and the damping of moving-coil meters.

:::worked title="A rod at 3 m/s"
$B = 0.50$ T, $l = 0.20$ m, $R = 0.60$ Ω, $v = 3.0$ m/s.

- $\varepsilon = 0.50\times0.20\times3.0 = 0.30$ V; $I = 0.30/0.60 = 0.50$ A.
- $F = BIl = 0.50\times0.50\times0.20 = 0.050$ N.
- $Fv = 0.15$ W and $I^2R = 0.25\times0.60 = 0.15$ W.
:::

:::qc
q: The same rod is pushed at twice the speed. The power the pusher must supply becomes
options: ["the same", "twice as large", "four times as large", "half as large"]
answer: 2
right: Right. Both the force (∝ v) and the speed doubled, so P = B²l²v²/R is four times as large.
wrong: The magnetic drag is itself proportional to v, so P = Fv = B²l²v²/R grows as v². Doubling v gives four times the power.
:::

## Rotating rods and the Faraday disc {lvl=2 id=s-rotate label="Class 12"}

Spin a rod of length $l$ about one end at angular speed $\omega$, in a field $B$ parallel to the axis (NCERT Example 6.6). Different parts of the rod now move at different speeds: a piece at distance $r$ from the pivot moves at $v = \omega r$. So add up the contributions piece by piece:

$$\varepsilon = \int_0^l B(\omega r)\,dr = \tfrac12 B\omega l^2.$$

:::figure caption="A rod OA rotating about O at angular speed ω in a field out of the page. A piece dr at distance r moves at ωr and contributes Bωr dr. The flux view: in one turn the rod sweeps the disc area πl², so per second it sweeps ½ωl² and ε = ½Bωl²."
<svg viewBox="0 0 320 220" role="img" aria-label="Rod rotating about one end inside a ring, with a small element at radius r">
<defs><marker id="me-b1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<g style="fill:var(--muted)"><circle cx="70" cy="40" r="2"/><circle cx="250" cy="40" r="2"/><circle cx="60" cy="180" r="2"/><circle cx="260" cy="180" r="2"/><circle cx="160" cy="60" r="2"/><circle cx="110" cy="150" r="2"/></g>
<circle class="ln" cx="160" cy="110" r="90" style="fill:none"/>
<path class="faint" d="M160,110 L250,110 A90,90 0 0 0 223.6,46.4 Z" style="fill:var(--phy);fill-opacity:0.12"/>
<line class="ln" x1="160" y1="110" x2="223.6" y2="46.4" style="stroke-width:4"/>
<circle cx="160" cy="110" r="4" style="fill:var(--ink)"/><text class="k" x="140" y="128">O</text><text class="k" x="228" y="40">A</text>
<line class="ray" x1="202" y1="68" x2="218" y2="84" marker-end="url(#me-b1)"/><text x="222" y="92">v = ωr</text>
<text x="168" y="80">r</text>
<path class="ray" d="M270,110 A110,110 0 0 0 253,52" style="fill:none" marker-end="url(#me-b1)"/><text class="k" x="276" y="80">ω</text>
<text x="20" y="214">B ⊙ out of the page (parallel to the axis)</text>
</svg>
:::

The flux view agrees. Close the circuit through the ring and a wire back to the centre. In time $dt$ the rod sweeps a sector of area $\tfrac12l^2\,\omega\,dt$, so $|d\Phi/dt| = \tfrac12B\omega l^2$.

Useful variations:

- **Pivot in the middle.** Each half gives $\tfrac12B\omega(l/2)^2$, both pointing from the centre outward (or both inward). Between the two **ends** the emf is zero; between centre and either end it is $\tfrac18B\omega l^2$.
- **Pivot at distance $a$ from one end.** Between the ends, $\varepsilon = \tfrac12B\omega\big[(l-a)^2 - a^2\big]$.
- **A wheel with spokes** (NCERT Example 6.7). Each spoke has the same emf from axle to rim. The spokes are connected in **parallel**, so the emf between axle and rim is that of one spoke, however many there are. More spokes only lower the internal resistance.
- **The Faraday disc.** A solid disc of radius $R$ is a wheel with infinitely many spokes: $\varepsilon = \tfrac12B\omega R^2$ between axle and rim, picked up by sliding contacts. It gives a steady, unreversing emf, a true direct-current generator, though a feeble one.

:::worked title="NCERT Exercise 6.5 in one line"
$l = 1.0$ m, $\omega = 400$ rad/s, $B = 0.5$ T: $\varepsilon = \tfrac12\times0.5\times400\times1.0^2 = 100$ V.
:::

:::qc
q: A bicycle wheel with 36 spokes, each 0.30 m, spins at 10 rad/s in a field of 5 × 10⁻⁵ T along its axle. The emf between axle and rim is about
options: ["2.25 × 10⁻⁵ V", "8.1 × 10⁻⁴ V", "4.5 × 10⁻⁵ V", "zero"]
answer: 0
right: Right. One spoke gives ½ × 5×10⁻⁵ × 10 × 0.09 = 2.25×10⁻⁵ V, and the spokes are in parallel, so that is the answer.
wrong: The spokes are in parallel, not series, so the number 36 does not multiply anything. ε = ½Bωl² = ½ × 5×10⁻⁵ × 10 × 0.30² = 2.25×10⁻⁵ V.
:::

## Wires in the Earth's field {lvl=2 id=s-earth label="Class 12"}

The Earth's field is weak, a few tens of microtesla, but long conductors moving fast still pick up measurable emfs.

**A falling wire (NCERT Exercise 6.6).** A 10 m wire running east–west falls at 5.0 m/s through a horizontal field component of $0.30\times10^{-4}$ T. Rod, velocity (down) and field (north) are mutually perpendicular, so $\varepsilon = 0.30\times10^{-4}\times10\times5.0 = 1.5$ mV. With east $= \hat x$, north $= \hat y$, up $= \hat z$: $\mathbf v\times\mathbf B \propto (-\hat z)\times\hat y = +\hat x$. Positive charge gathers at the **east** end, which is at the higher potential. A wire running **north–south** and falling would have no emf: $\mathbf v\times\mathbf B$ points east, perpendicular to its length.

**An aeroplane wing.** A plane flying level moves horizontally, so the horizontal component of the Earth's field gives no emf along the (horizontal) wing; only the **vertical** component $B_V$ matters: $\varepsilon = B_V\,l\,v$. With illustrative values $B_V \approx 4\times10^{-5}$ T, a 60 m wingspan and 250 m/s, $\varepsilon \approx 0.6$ V. [Unverified: these are typical mid-latitude and airliner values quoted from memory, not data.]

As the hook showed, this emf cannot be tapped by wires carried on the plane: they move with it and have the same emf. Motional emf only drives current if part of the circuit moves **relative to** the rest, like the rod relative to the rails.

:::qc
q: A car with a 1.5 m vertical radio aerial drives north at 20 m/s. Which component of the Earth's field gives an emf along the aerial?
options: ["the vertical component", "the horizontal (northward) component", "neither: the velocity is along the horizontal field, and v × B from the vertical part is horizontal", "both"]
answer: 2
right: Right. v is northward, along B_H, so v × B_H = 0. v × B_V is horizontal (east–west), perpendicular to the vertical aerial. No emf along it.
wrong: Work out v × B. Northward v with the northward B_H gives zero; with the vertical B_V it gives an east–west vector. Neither has a component along a vertical aerial, so the emf is zero.
:::

## A loop crossing the edge of a field {lvl=3 id=s-loop label="JEE"}

A rectangular loop, $a$ along the direction of motion and $b$ across it, is pulled at constant speed $v$ through a strip of field of width $D > a$. Track the flux, or equally, ask which sides are inside the field.

- **Entering** (time $a/v$): only the leading side $b$ is in the field and cuts it. $\varepsilon = Bbv$.
- **Fully inside** (time $(D-a)/v$): both sides of length $b$ are in the field with equal emfs that cancel round the loop. The flux is constant. $\varepsilon = 0$, no current, no force.
- **Leaving** (time $a/v$): only the trailing side is in the field. $\varepsilon = Bbv$ again, but **reversed** in sense round the loop: the flux is now falling.

The current reverses between entry and exit, but the **force** does not. Each time it is $B^2b^2v/R$, **opposing** the motion. The pushing hand works only during entry and exit.

:::figure caption="Top: a loop (a along the motion, b across) pulled at speed v through a field strip of width D. Bottom: the emf round the loop and the drag force against time. The emf is +Bbv while entering and −Bbv while leaving; the force opposes the motion both times."
<svg viewBox="0 0 340 250" role="img" aria-label="Loop entering a field strip, with emf and force against time graphs">
<defs><marker id="me-c1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<rect x="150" y="10" width="120" height="80" style="fill:var(--phy);fill-opacity:0.10;stroke:none"/>
<line class="faint" x1="150" y1="8" x2="150" y2="92"/><line class="faint" x1="270" y1="8" x2="270" y2="92"/>
<text x="196" y="24">B ⊗</text><text x="200" y="104">D</text>
<rect class="ln" x="110" y="30" width="60" height="44" style="fill:none"/>
<text x="132" y="26">a</text><text x="96" y="56">b</text>
<line class="ray" x1="176" y1="52" x2="210" y2="52" marker-end="url(#me-c1)"/><text class="k" x="214" y="56">v</text>
<line class="axis" x1="30" y1="160" x2="330" y2="160"/><line class="axis" x1="30" y1="112" x2="30" y2="206"/>
<text class="k" x="6" y="130">ε</text><text x="318" y="176">t</text>
<polyline class="ray" points="30,160 70,160 70,130 130,130 130,160 210,160 210,190 270,190 270,160 320,160" style="fill:none"/>
<text x="74" y="124">+Bbv</text><text x="214" y="204">−Bbv</text>
<line class="axis" x1="30" y1="240" x2="330" y2="240"/><line class="axis" x1="30" y1="214" x2="30" y2="246"/>
<text class="k" x="6" y="232">F</text>
<polyline class="ln" points="30,240 70,240 70,220 130,220 130,240 210,240 210,220 270,220 270,240 320,240" style="fill:none"/>
<text x="140" y="234">opposes v both times</text>
</svg>
:::

**NCERT Exercise 6.4.** A loop 8 cm × 2 cm leaves a 0.3 T field at 1 cm/s. Moving normal to the long side, the 8 cm side does the cutting: $\varepsilon = 0.3\times0.08\times0.01 = 2.4\times10^{-4}$ V, lasting $2/1 = 2$ s. Moving normal to the short side: $6\times10^{-5}$ V for 8 s. The product (emf × time) is the same, $4.8\times10^{-4}$ Wb: the flux that leaves, $BA$.

That last remark is general. **The charge that flows is fixed by the change of flux, not by how fast it happens:** $Q = \int I\,dt = \Delta\Phi/R$. Pull faster and the current is larger but lasts less time.

For other shapes the emf is not constant during entry. A **triangle** or a **circle** entering a field has a cutting length that changes with position, so $\varepsilon = B\,l_{\text{eff}}(x)\,v$, where $l_{\text{eff}}$ is the length of the field edge inside the loop at that moment.

:::qc
q: A square loop of side 10 cm and resistance 0.5 Ω is pulled entirely out of a 0.4 T field. The charge that flows round it
options: ["is 8 mC, whatever the speed", "is larger if it is pulled faster", "is zero, since the current reverses", "depends on the shape of the field edge only"]
answer: 0
right: Right. Q = ΔΦ/R = 0.4 × 0.01 / 0.5 = 8 × 10⁻³ C. Speed changes the current and the time, but not their product.
wrong: Q = ∫I dt = (1/R)∫ε dt = ΔΦ/R = BA/R = 0.4 × 0.01 / 0.5 = 8 mC. The speed does not enter. The current does not reverse while the loop is only leaving.
:::

## A rod falling on vertical rails {lvl=3 id=s-terminal label="JEE"}

Turn the rails vertical, with the field horizontal and perpendicular to their plane, and let the rod (mass $m$) fall from rest. Gravity accelerates it; the magnetic drag $B^2l^2v/R$ grows with its speed. Newton's second law:

$$m\frac{dv}{dt} = mg - \frac{B^2l^2}{R}v.$$

The rod speeds up until the drag equals its weight. Then it falls steadily at the **terminal velocity**

:::eq caption="Terminal speed of a rod of mass m sliding down vertical rails a distance l apart, in a horizontal field B, with total resistance R."
$$v_t = \frac{mgR}{B^2l^2}$$
:::

Solving the equation, $v(t) = v_t\big(1 - e^{-t/\tau}\big)$ with $\tau = \dfrac{mR}{B^2l^2} = \dfrac{v_t}{g}$. After three or four time constants the rod is at terminal speed.

**Energy at terminal speed.** Gravity does work at $mgv_t$; the circuit dissipates $I^2R = B^2l^2v_t^2/R = mgv_t$. The rod's kinetic energy is constant, and all the lost potential energy becomes heat.

**On a slope.** If the rails are inclined at $\theta$ and the field is **perpendicular to the plane of the rails**, replace $g$ by $g\sin\theta$: $v_t = mgR\sin\theta/(B^2l^2)$. If instead the field is **vertical**, two factors of $\cos\theta$ appear: only $v\cos\theta$ is perpendicular to $\mathbf B$, and the horizontal force $BIl$ has only $BIl\cos\theta$ along the slope. Then $v_t = mgR\sin\theta/(B^2l^2\cos^2\theta)$.

:::worked title="A 20 g rod"
$m = 0.020$ kg, $l = 0.50$ m, $B = 0.80$ T, $R = 2.0$ Ω, $g = 9.8$ m/s².
$$v_t = \frac{0.020\times9.8\times2.0}{0.64\times0.25} = 2.45\ \text{m/s},\qquad \tau = \frac{2.45}{9.8} = 0.25\ \text{s}.$$
:::

:::qc
q: The resistance of the circuit is halved. The terminal speed of the falling rod
options: ["doubles", "halves", "is unchanged", "becomes four times"]
answer: 1
right: Right. v_t = mgR/(B²l²). A smaller resistance lets a larger current flow at a given speed, so the drag balances the weight sooner.
wrong: Lower resistance means a larger current and a larger drag at the same speed, so balance comes at a lower speed: v_t ∝ R, so it halves.
:::

## A rod coasting to a stop {lvl=3 id=s-coast label="JEE"}

Give the rod a push so that it starts at $v_0$ on horizontal rails, and let it go. The only horizontal force is the drag:

$$m\frac{dv}{dt} = -\frac{B^2l^2}{R}v \quad\Rightarrow\quad v = v_0e^{-t/\tau},\qquad \tau = \frac{mR}{B^2l^2}.$$

It never quite stops, yet it travels only a finite distance. Write $m\,dv/dt = m v\,dv/dx$ and cancel one $v$:

$$m\frac{dv}{dx} = -\frac{B^2l^2}{R} \quad\Rightarrow\quad x_{\text{total}} = \frac{mv_0R}{B^2l^2} = v_0\tau.$$

The speed falls **linearly with distance**. Two more quantities come out without solving anything:

- **Charge.** The total impulse of the drag is $\int BIl\,dt = BlQ$. It removes all the momentum, so $Q = mv_0/(Bl)$. (Check: $Q = \Delta\Phi/R = Blx_{\text{total}}/R$, the same.)
- **Heat.** All the kinetic energy, $\tfrac12mv_0^2$, is dissipated in $R$.

:::qc
q: A rod coasting on rails from v₀ travels 2 m before it (practically) stops. If it had started at 2v₀, it would travel
options: ["2 m", "4 m", "8 m", "2√2 m"]
answer: 1
right: Right. x = mv₀R/(B²l²) is linear in v₀, unlike friction (where it would be v₀²).
wrong: The drag is proportional to v, so v falls linearly with distance and x = mv₀R/(B²l²) ∝ v₀. Doubling v₀ doubles the distance: 4 m. (Constant friction would give v₀², i.e. 8 m.)
:::

## A rod in series with a battery: motor and generator {lvl=3 id=s-battery label="JEE"}

Replace the resistor by a cell of emf $E$ in series with resistance $R$. The cell drives current through the rod, the field pushes the rod, and the moving rod develops a **back emf** $Blv$ that opposes the cell:

$$I = \frac{E - Blv}{R}.$$

- **Start-up (motor).** At rest $I = E/R$ and the force is $BEl/R$. As the rod speeds up, the back emf grows, the current falls, and with no load the rod approaches $v_0 = E/(Bl)$, where the current is zero.
- **Driving a load.** If the rod pulls a load force $F$, it settles where $BIl = F$, so $I = F/(Bl)$ and $v = \dfrac{E - IR}{Bl}$. The cell supplies $EI$; the load takes $Fv = (Blv)I$; the resistor takes $I^2R$. The efficiency is $Blv/E$.
- **Generator.** If an outside agent pushes the rod **faster** than $E/(Bl)$, then $Blv > E$, the current reverses, and the rod charges the cell. The same machine is a motor or a generator depending on whether the back emf is smaller or larger than $E$.

This is the whole physics of a DC motor (lesson *Force on a current-carrying conductor* gives the torque side) in its simplest geometry.

:::qc
q: A cell of 3 V drives a rod (l = 0.5 m) on rails in a 0.4 T field. With no load and no friction, the rod's final speed is
options: ["6 m/s", "15 m/s", "0.6 m/s", "it accelerates for ever"]
answer: 1
right: Right. The current, and hence the force, vanish when the back emf Blv equals 3 V: v = 3/(0.4 × 0.5) = 15 m/s.
wrong: As the rod speeds up its back emf Blv reduces the current. The force vanishes when Blv = E, so v = E/(Bl) = 3/0.2 = 15 m/s.
:::

## A capacitor or an inductor across the rails {lvl=4 id=s-lc label="Olympiad"}

**Capacitor.** Join the rails through a capacitor $C$ (and nothing else) and pull the rod with a constant force $F$. With no resistance the capacitor voltage always equals the emf, so $q = CBlv$ and

$$I = \frac{dq}{dt} = CBl\,a.$$

The drag is $BIl = CB^2l^2a$, proportional to the **acceleration**, not the speed. Newton's law gives

$$F - CB^2l^2a = ma \quad\Rightarrow\quad a = \frac{F}{m + CB^2l^2}.$$

The rod accelerates uniformly, as if its mass were increased by $CB^2l^2$. The energy agrees: the work $Fx$ goes into $\tfrac12mv^2 + \tfrac12C(Blv)^2 = \tfrac12(m + CB^2l^2)v^2$.

With a resistor in series and an initial speed $v_0$ but no applied force, the rod slows until the capacitor voltage equals $Blv$, and then coasts on. The impulse equation $m(v_0 - v) = BlQ = Bl\cdot CBlv$ gives the final speed $v_f = \dfrac{mv_0}{m + CB^2l^2}$, **independent of $R$**. The heat produced is the missing energy, $\tfrac12mv_0^2 - \tfrac12(m+CB^2l^2)v_f^2$, also independent of $R$.

**Inductor.** Join the rails through an inductor $L$ of negligible resistance (lesson *Self and mutual inductance*). Round the circuit, $Blv = L\,dI/dt$. Integrating with $I = 0$ when $x = 0$: $LI = Blx$. The force on the rod is

$$-BIl = -\frac{B^2l^2}{L}x.$$

That is a spring! The rod oscillates in simple harmonic motion with

$$\omega = \frac{Bl}{\sqrt{mL}},$$

and energy swaps between the rod's kinetic energy and the inductor's $\tfrac12LI^2 = \tfrac12\dfrac{B^2l^2}{L}x^2$. Started at $v_0$ from $x = 0$, its amplitude is $v_0/\omega$.

:::qc
q: In the inductor circuit, the rod is replaced by one of four times the mass. The period of oscillation
options: ["doubles", "quadruples", "halves", "is unchanged"]
answer: 0
right: Right. ω = Bl/√(mL), so the period 2π√(mL)/(Bl) grows as √m: four times the mass doubles it.
wrong: The "spring constant" is B²l²/L and the mass is m, so T = 2π√(mL)/(Bl) ∝ √m. Four times the mass gives twice the period.
:::

## Why the magnetic force still does no net work {lvl=4 id=s-work label="Olympiad"}

A puzzle. The magnetic force on a charge, $q\mathbf v\times\mathbf B$, is always perpendicular to the charge's velocity, so it never does work. Yet the "work per unit charge" of the magnetic force is what we called the emf. What is really doing the work?

Follow one carrier while current flows. It has two velocities: the rod's $\mathbf v$ (sideways) and its drift $\mathbf u$ along the rod. The magnetic force on it has two parts:

- $q\mathbf v\times\mathbf B$, **along the rod**, of size $qvB$. It pushes the carrier along at speed $u$, doing work at the rate $qvBu$.
- $q\mathbf u\times\mathbf B$, **against the rod's motion**, of size $quB$. The carrier moves sideways at $v$, so this part does work at the rate $-quBv$.

:::figure caption="One carrier in the rod. It moves with the rod (v) and drifts along it (u). The force from v × B points along the rod and does positive work; the force from u × B points back against v and does equal negative work. The total force is perpendicular to the total velocity."
<svg viewBox="0 0 320 210" role="img" aria-label="Velocity and force components on a carrier in a moving rod">
<defs><marker id="me-d1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="me-d2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<rect x="150" y="10" width="20" height="190" style="fill:var(--muted);fill-opacity:0.25;stroke:none"/>
<circle cx="160" cy="110" r="6" style="fill:var(--phy)"/>
<line class="ln" x1="166" y1="110" x2="240" y2="110" marker-end="url(#me-d2)"/><text class="k" x="244" y="114">v</text>
<line class="ln" x1="160" y1="104" x2="160" y2="56" marker-end="url(#me-d2)"/><text class="k" x="140" y="62">u</text>
<line class="ray" x1="174" y1="104" x2="174" y2="40" marker-end="url(#me-d1)"/><text x="180" y="44">q v×B (along rod)</text>
<line class="ray" x1="154" y1="124" x2="94" y2="124" marker-end="url(#me-d1)"/><text x="20" y="144">q u×B (against v)</text>
<text x="230" y="196">B ⊗</text>
</svg>
:::

The two rates cancel exactly. The magnetic force does no net work, as it must.

What happens instead is a **transfer**. The backward part $q\mathbf u\times\mathbf B$ is passed by the carriers to the lattice of the rod: summed over all carriers it is the drag $BIl$. The pushing hand works against it at the rate $BIl\,v$. The forward part drives the carriers round the circuit at the rate $(qvB)u$ per carrier, which sums to $\varepsilon I$. Since $BIlv = (Blv)I = \varepsilon I$, the field simply redirects the hand's work into the circuit. It is a perfect frictionless gearbox: in at $Fv$, out at $\varepsilon I$.

The same bookkeeping explains the Faraday disc as a motor: the torque from current $I$ flowing radially is $\int_0^R BIr\,dr = \tfrac12BIR^2$, and the mechanical power $\tfrac12BIR^2\,\omega$ equals $\varepsilon I$.

**Another frame.** Ride along with the rod. The carriers are now at rest on average, so no magnetic force can act on them; yet the same emf appears. In the rod's frame, the observer finds an **electric** field $\mathbf E' = \mathbf v\times\mathbf B$ (to first order in $v/c$), and it is this that pushes the charges. Whether an emf is "magnetic" or "electric" depends on the frame; the current that flows does not. Working this out properly needs special relativity, beyond this lesson.

:::qc
q: A rod moves at 2 m/s on rails in a 0.5 T field; l = 0.4 m and a current of 3 A flows. The rate at which the hand does work and the rate of electrical energy delivered to the circuit are
options: ["1.2 W and 1.2 W", "1.2 W and 0 W, since the field does no work", "0.6 W and 1.2 W", "2.4 W and 1.2 W"]
answer: 0
right: Right. Hand: BIl·v = 0.5 × 3 × 0.4 × 2 = 1.2 W. Circuit: εI = (0.5 × 0.4 × 2) × 3 = 1.2 W. The field transfers, but does no net work itself.
wrong: Both rates equal BIlv = εI = 0.5 × 3 × 0.4 × 2 = 1.2 W. The magnetic force does no net work but transfers the hand's work to the circuit.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A conductor moving across a magnetic field has an emf because the field pushes its free charges along it. With rod, velocity and field mutually perpendicular, $\varepsilon = Blv$; the positive end is the one $\mathbf v\times\mathbf B$ points to. {lvl=2}
2. The flux rule gives the same emf: the moving rod changes the area of the circuit at the rate $lv$. These are one effect described twice, not two effects. {lvl=2}
3. With total resistance $R$: $I = Blv/R$, drag $B^2l^2v/R$ opposing the motion, and power $Fv = I^2R = \varepsilon I$. {lvl=2}
4. A rod rotating about one end gives $\tfrac12B\omega l^2$; spokes of a wheel are in parallel; the Faraday disc gives $\tfrac12B\omega R^2$. {lvl=2}
5. A loop crossing a field edge has emf only while its flux changes; the current reverses between entry and exit but the force always opposes the motion. The charge that flows is $\Delta\Phi/R$. {lvl=3}
6. Falling rod: $v_t = mgR/(B^2l^2)$, time constant $v_t/g$. Coasting rod: distance $mv_0R/(B^2l^2)$, charge $mv_0/(Bl)$. With a battery, the back emf limits the speed to $E/(Bl)$. {lvl=3}
7. A capacitor makes the rod heavier by $CB^2l^2$; an inductor makes it a spring with $\omega = Bl/\sqrt{mL}$. The magnetic force does no net work; it transfers the pusher's work to the circuit. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Use only the components that are mutually perpendicular: the length across the field and the velocity across both. A rod moving along its length has no emf. {lvl=2}
- The spokes of a wheel are in parallel: never multiply the emf by the number of spokes. {lvl=2}
- For a plane's wing or a car's aerial, decide first which component of the Earth's field ($B_H$ or $B_V$) can give $\mathbf v\times\mathbf B$ along the conductor. {lvl=2}
- A conductor moving with the whole circuit, or a loop wholly inside a uniform field, gives no current: emfs cancel round the loop. {lvl=3}
- Put the resistance of the rod itself into $R$ if it is given; the potential difference across the rod is then $\varepsilon - Ir$, not $\varepsilon$. {lvl=3}
- For a "how far" question with magnetic drag, write $m v\,dv/dx$, or use impulse $= BlQ$; you rarely need $v(t)$. {lvl=3}
- With a vertical field on inclined rails, there are two factors of $\cos\theta$: one in the emf, one in resolving the horizontal force. {lvl=3}
- Final speed with a capacitor and resistor comes from momentum (impulse $BlQ$), not from energy: energy is lost as heat. {lvl=4}
:::
