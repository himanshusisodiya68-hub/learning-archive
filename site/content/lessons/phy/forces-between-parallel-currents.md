---
title: Forces between parallel currents
summary: Two currents push or pull on each other because each sits in the other's magnetic field. The force per unit length μ₀I₁I₂/2πd, Newton's third law, the ampere and why the Earth's field must be removed, several wires and equilibrium, a loop beside a long wire, beams of moving charges and the factor (v/c)², the pinch effect and magnetic pressure, contracting coils and coaxial rings.
ncert: ["Class 12 Physics · Ch 4 Moving Charges and Magnetism (§4.8)"]
up_to: Olympiad
builds_on: [Force on a current, Biot–Savart law, Ampère's law, Coulomb's law]
notes_prompt: Explain in your own words why two wires carrying current the same way attract, even though two beams of electrons moving the same way repel.
margin:
  - kind: history
    title: History
    text: "Ampère showed in 1820, within weeks of hearing of Oersted's compass experiment, that two current-carrying wires attract or repel each other with no magnet present. [Unverified: date recalled from memory.]"
  - kind: tip
    title: Quick rule
    text: "Like currents attract, unlike currents repel: the opposite of charges. For numbers, remember μ₀/2π = 2 × 10⁻⁷ T m/A, so f = 2 × 10⁻⁷ I₁I₂/d newtons per metre."
  - kind: olympiad
    title: Olympiad link
    text: "A current-carrying conductor is squeezed by its own field. The inward magnetic pressure is B²/2μ₀ at the surface, the same expression as the energy density of the field. Pinch, solenoid and coil-spring problems all reduce to it."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 4 Moving Charges and Magnetism, §4.8 Force between two parallel currents, the ampere" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 35 Magnetic Field due to a Current (force between parallel currents)" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 5 Magnetostatics (§5.1–5.3); Ch. 12 for the relativistic view" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.6 Magnetic field. Constant current; 3.4 for forces" }
cards:
  - { front: "Force per unit length between two long parallel wires?", back: "$f = \\dfrac{\\mu_0 I_1 I_2}{2\\pi d} = 2\\times10^{-7}\\,\\dfrac{I_1I_2}{d}$ N/m. Like currents attract, unlike currents repel." }
  - { front: "The classic (pre-2019) definition of the ampere?", back: "The steady current in each of two infinitely long, thin, straight, parallel wires 1 m apart in vacuum that gives a force of $2\\times10^{-7}$ N per metre of length." }
  - { front: "Why must the Earth's field be screened in an ampere balance?", back: "The Earth's field ($\\sim 3\\times10^{-5}$ T) on a 1 A wire gives up to $3\\times10^{-5}$ N/m, about 150 times the $2\\times10^{-7}$ N/m being measured." }
  - { front: "Two line charges λ moving side by side at speed v: ratio of magnetic to electric force?", back: "$F_B/F_E = v^2/c^2$, using $\\mu_0\\varepsilon_0 = 1/c^2$. Net force $= F_E(1 - v^2/c^2)$, still repulsive." }
  - { front: "Net force on a rectangular loop (parallel sides of length l at distances a and a+b) beside a long wire?", back: "$F = \\dfrac{\\mu_0 I_1 I_2 l}{2\\pi}\\left(\\dfrac1a - \\dfrac1{a+b}\\right)$, towards the wire if the near side's current is parallel to the wire's." }
  - { front: "Magnetic pressure at the surface of a conductor carrying current?", back: "$p_B = B^2/2\\mu_0$, directed inwards. For a uniform current, the pressure needed on the axis to resist the pinch is $\\mu_0 I^2/4\\pi^2R^2$." }
core:
  idea: 'Each of two long parallel currents lies in the field of the other, $B = \mu_0 I/2\pi d$, so each feels $F = BIL$. Parallel currents attract and antiparallel currents repel, with force per unit length $\mu_0 I_1 I_2/2\pi d$, equal and opposite on the two wires.'
  formulas:
    - tex: '\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}'
      label: 'Force per unit length between parallel wires'
    - tex: 'B = \frac{\mu_0 I}{2\pi d}'
      label: 'Field of one wire at the other'
  conditions:
    - 'Straight, parallel, very long wires (separation much smaller than their length)'
    - 'Thin wires in air or vacuum carrying steady currents'
    - 'No other fields acting (the Earth''s field must be cancelled)'
  sign: 'Opposite to the rule for charges: like (parallel) currents attract, unlike (antiparallel) currents repel.'
outcomes:
  - 'Explain why two current-carrying wires exert forces on each other without any magnet'
  - 'Calculate the force per unit length and state its direction for parallel and antiparallel currents'
  - 'Define the ampere through the force between wires and say why the Earth''s field matters'
  - 'Solve equilibrium problems with several wires and the net force on a loop beside a long wire'
  - 'Compare the magnetic and electric forces between beams of charges ($v^2/c^2$) and describe the pinch effect'
---

:::hook
q: Two long straight wires lie side by side on a table, a few centimetres apart. You send a current through both, in the same direction. What happens?
options: ["They pull towards each other", "They push apart", "Nothing: wires are neutral, so there is no force", "They twist to become perpendicular"]
answer: 0
right: Right. Each wire sits in the magnetic field of the other, and the force on a current in that field points towards the other wire. Like currents attract, which is the opposite of the rule for charges.
wrong: The wires are electrically neutral, but each one makes a magnetic field and the other one carries a current in it. For currents in the same direction the force is attractive. Like currents attract, unlike currents repel.
:::

## Why two currents act on each other {lvl=2 id=s-why label="Class 12"}

You already have two facts from neighbouring lessons:

1. **A current makes a magnetic field.** A long straight wire carrying $I$ makes circular field lines around itself, of strength $B = \dfrac{\mu_0 I}{2\pi r}$ at distance $r$ (see the lessons on the Biot–Savart law and Ampère's law).
2. **A field pushes on a current.** A length $\mathbf l$ of wire carrying $I$ in a field $\mathbf B$ feels $\mathbf F = I\,\mathbf l\times\mathbf B$ (see the lesson on the force on a current).

Put the two together and a striking conclusion follows: **two currents must push or pull on each other**, with no magnet anywhere. Wire *a* makes a field; wire *b* sits in that field and feels a force. Electricity and magnetism are not two separate subjects here; one current is the magnet for the other.

This is not a small curiosity. It is the reason the SI unit of current was for decades defined mechanically, and it is the force that crushes lightning conductors and confines fusion plasmas.

## The force per unit length {lvl=2 id=s-formula label="Class 12"}

Take two long parallel wires *a* and *b*, a distance $d$ apart, carrying $I_a$ and $I_b$ in the same direction (out of the page in the figure).

**Field of *a* at *b*.** Every point of wire *b* is at distance $d$ from *a*, so the field there has the same size all along *b*:

$$B_a = \frac{\mu_0 I_a}{2\pi d}.$$

Its direction is along the circle around *a*, so it is **perpendicular** to the line joining the wires and also perpendicular to wire *b*.

**Force on a length $L$ of *b*.** Since $\mathbf L$ (along *b*) is perpendicular to $\mathbf B_a$, $|\mathbf L\times\mathbf B_a| = LB_a$, and

$$F_{ba} = I_b L B_a = \frac{\mu_0 I_a I_b}{2\pi d}\,L .$$

**Direction.** Point the fingers along $\mathbf L$ (out of the page) and curl them towards $\mathbf B_a$: the thumb of the cross product points **towards wire *a***. The figure shows it.

:::figure caption="Two wires seen end-on, both currents out of the page (dots). The field of a at b points up; I L × B then points left, towards a. By symmetry the field of b at a points down and the force on a points right. Like currents attract."
<svg viewBox="0 0 320 190" role="img" aria-label="Two wires end on, field circles around wire a, attraction arrows">
<circle class="faint" cx="100" cy="95" r="40"/><circle class="faint" cx="100" cy="95" r="80"/>
<circle cx="100" cy="95" r="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.6"/><circle cx="100" cy="95" r="3" style="fill:var(--ink)"/>
<circle cx="220" cy="95" r="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.6"/><circle cx="220" cy="95" r="3" style="fill:var(--ink)"/>
<text class="k" x="92" y="125">a</text><text class="k" x="214" y="125">b</text>
<line class="faint" x1="110" y1="95" x2="210" y2="95"/><text x="152" y="88">d</text>
<line class="ray" x1="236" y1="120" x2="236" y2="60"/><polygon points="236,52 231,63 241,63" style="fill:var(--phy)"/><text x="244" y="66">B of a</text>
<line class="ln" x1="206" y1="95" x2="168" y2="95" style="stroke:var(--chem);stroke-width:2.4"/><polygon points="160,95 170,90 170,100" style="fill:var(--chem)"/>
<line class="ln" x1="114" y1="95" x2="150" y2="95" style="stroke:var(--chem);stroke-width:2.4"/><polygon points="158,95 148,90 148,100" style="fill:var(--chem)"/>
<text x="160" y="118">F</text><text x="134" y="118">F</text>
<path class="ray" d="M 100 55 A 40 40 0 0 0 60 95" /><polygon points="60,103 55,92 65,92" style="fill:var(--phy)"/>
<text x="20" y="178">field circles of a run anticlockwise (right-hand rule)</text>
</svg>
:::

:::law caption="Force per unit length between two long parallel currents. Same directions attract; opposite directions repel."
$$f = \frac{F}{L} = \frac{\mu_0 I_a I_b}{2\pi d} = 2\times10^{-7}\,\frac{I_a I_b}{d}\ \text{N m}^{-1}$$
:::

**Reverse one current** and $\mathbf L$ flips, so the force flips: **antiparallel currents repel**.

**Newton's third law check.** Repeat the argument with the roles swapped: the field of *b* at *a* is $\mu_0I_b/2\pi d$, so the force on a length $L$ of *a* is $\mu_0 I_a I_b L/2\pi d$, pointing towards *b*. Same size, opposite direction: $\mathbf F_{ab} = -\mathbf F_{ba}$. The formula is symmetric in $I_a$ and $I_b$, as it must be. (For two short current *elements* at odd angles, the Biot–Savart forces need not be equal and opposite; the balance is restored by the momentum of the field. For complete steady circuits, like long wires closing far away, the third law always holds [Inference: standard result, stated without proof here].)

**How big?** Two household wires 1 cm apart carrying 10 A each: $f = 2\times10^{-7}\times100/0.01 = 2\times10^{-3}$ N/m, the weight of about 0.2 g per metre. Small, which is why your cables do not leap about. In a short circuit the current can be thousands of amperes and the force rises as $I^2$: at 10 kA it is a million times larger, $2\times10^{3}$ N/m, enough to bend busbars.

:::qc
q: Two long wires 2 cm apart carry 5 A and 8 A in opposite directions. What is the force on each metre of wire?
options: ["4 × 10⁻⁴ N, repulsive", "4 × 10⁻⁴ N, attractive", "4 × 10⁻⁶ N, repulsive", "8 × 10⁻⁴ N, repulsive"]
answer: 0
right: Right. f = 2 × 10⁻⁷ × 5 × 8/0.02 = 4 × 10⁻⁴ N/m. Opposite currents repel.
wrong: Use f = 2 × 10⁻⁷ I₁I₂/d with d in metres: 2 × 10⁻⁷ × 40/0.02 = 4 × 10⁻⁴ N/m. Opposite currents repel.
:::

## The ampere, and why the Earth must be shielded {lvl=2 id=s-ampere label="Class 12"}

**Why use a force to define a unit of current?** A force can be measured very accurately with a balance, by comparing it with known weights. Charge cannot be weighed. So for most of the twentieth century the ampere was defined by the parallel-wire force. Put $I_a = I_b = 1$ A and $d = 1$ m in the law:

$$f = \frac{\mu_0}{2\pi}\cdot\frac{1\times1}{1} = 2\times10^{-7}\ \text{N m}^{-1}.$$

:::note title="The classic definition of the ampere (NCERT §4.8)"
One ampere is the value of that steady current which, when maintained in each of two very long, straight, parallel conductors of negligible cross-section, placed one metre apart in vacuum, would produce on each of these conductors a force equal to $2\times10^{-7}$ newton per metre of length.
:::

Read the other way round, this definition **fixed** $\mu_0$ to be exactly $4\pi\times10^{-7}$ T m A⁻¹. The coulomb then followed: one coulomb is the charge carried by 1 A in 1 s.

**The 2019 redefinition.** In 2019 the SI changed direction. The elementary charge was fixed exactly, $e = 1.602\,176\,634\times10^{-19}$ C, and the ampere became "that current in which $1/e$ elementary charges pass per second" [Unverified: digits and wording recalled from memory]. Now $\mu_0$ is a measured number. It is still $4\pi\times10^{-7}$ to about one part in $10^{10}$ [Unverified: size of the difference recalled from memory], so every school calculation is unchanged. The parallel-wire definition is still the clearest physical picture of what one ampere *does*.

**Why the Earth's field matters (Example 4.9).** In a current balance the force being measured is tiny. Now place a 1 A wire on a table where the Earth's horizontal field is $3.0\times10^{-5}$ T, with the current east to west, perpendicular to the field. The force on it is

$$f = IB = 1\times3.0\times10^{-5} = 3\times10^{-5}\ \text{N m}^{-1},$$

which is **150 times** the $2\times10^{-7}$ N/m the definition is about. Run the same current south to north, parallel to the field, and the force is zero. So a careful measurement must either cancel the Earth's field (and any stray fields from nearby equipment) or arrange the wires along it. A practical current balance also uses coils rather than two straight wires, because coils give a larger force from the same current; the geometry is then calculated, not assumed.

:::qc
q: Two wires 1 m apart each carry 1 A. A third quantity, the Earth's horizontal field of 3 × 10⁻⁵ T, acts on one wire placed perpendicular to it. Roughly how does the Earth's force compare with the force between the wires?
options: ["About 150 times larger", "About 150 times smaller", "About equal", "About 1.5 times larger"]
answer: 0
right: Right. 3 × 10⁻⁵ ÷ 2 × 10⁻⁷ = 150. The stray force would swamp the force being measured.
wrong: The Earth gives IB = 3 × 10⁻⁵ N/m; the wires give 2 × 10⁻⁷ N/m. The ratio is 150, so the Earth's field would swamp the measurement.
:::

## Coils that squeeze and wires that float {lvl=2 id=s-everyday label="Class 12"}

Two quick consequences of "like currents attract".

**A spring contracts.** In a loosely wound coil spring, neighbouring turns carry current in the same direction, so every turn attracts its neighbours. Pass a large current and the spring shortens. If its lower end dips into a pool of mercury, the contraction lifts the end out, breaks the circuit, the spring falls back, touches again, and so it bounces on its own. This classroom demonstration is often called Roget's spiral [Unverified: name of the demonstration recalled from memory].

**A wire floats.** Fix one long wire and lay a light parallel wire above it, carrying current the **opposite** way. The repulsion can balance the weight: per unit length, $\mu_0 I_1 I_2/2\pi d = \lambda g$, where $\lambda$ is the mass per unit length of the upper wire. (Problem m1 does the numbers.) Push the floating wire down and $d$ shrinks, the repulsion grows and pushes it back: vertically, the balance is **stable**. Sideways it is not: a sideways nudge tilts the repulsion so that it pushes the wire further aside. A real demonstration needs a groove or guides.

:::qc
q: A light wire floats above a fixed parallel wire by magnetic repulsion. The current in the fixed wire is doubled. Where is the new equilibrium?
options: ["Twice as high above the fixed wire", "At the same height", "Half as high", "√2 times as high"]
answer: 0
right: Right. The weight per metre is fixed, so I₁I₂/d must stay the same. Doubling I₁ doubles d.
wrong: Balance needs μ₀I₁I₂/2πd = λg, a fixed number. If I₁ doubles, d must double to keep I₁/d the same.
:::

## Several wires: superposition and equilibrium {lvl=3 id=s-many label="JEE"}

With more than two wires, find the force on one wire from each of the others separately, then **add the vectors**. Each pair obeys the two-wire law, because fields add (superposition) and $\mathbf F = I\mathbf L\times\mathbf B$ is linear in $\mathbf B$.

**Three wires in a line.** Wires 1 and 2, a distance $D$ apart, carry $I_1$ and $I_2$ in the same direction. Where can a third parallel wire, carrying any current $I_3$, feel no force? Between them, it is pulled towards each. At distance $x$ from wire 1 the pulls balance when

$$\frac{I_1}{x} = \frac{I_2}{D - x} \quad\Longrightarrow\quad x = \frac{I_1}{I_1 + I_2}\,D .$$

$I_3$ cancels: the place depends only on where the **field** of wires 1 and 2 is zero. That is a general rule: a wire of any current is in equilibrium exactly where the other wires' net field is zero.

**Is it stable?** Move the third wire a little towards wire 1. The pull from 1 grows and the pull from 2 shrinks, so it moves further: **unstable** along the line (if $I_3$ is parallel to the others). Move it a little off the line, and both pulls now have components back towards the line: **stable** sideways. Reverse $I_3$ and every statement reverses. There is no arrangement of fixed straight currents in which a free parallel wire is stable in every direction. [Inference: this is the two-dimensional analogue of Earnshaw's theorem, because the field of straight wires is a harmonic (potential-like) field in the plane; stated, not proved.]

**If the currents are opposite**, the zero-field point lies outside the pair, on the side of the smaller current: $I_1/x = I_2/(x - D)$ with $x > D$ when $I_1 > I_2$.

**Wires at the corners of a square.** Four wires carry the same current $I$ in the same direction at the corners of a square of side $a$. On one wire, the two neighbours each pull with $f_0 = \mu_0I^2/2\pi a$ along the sides; their resultant is $\sqrt2 f_0$ along the diagonal, towards the centre. The opposite corner pulls with $f_0/\sqrt2$, also along the diagonal. Total:

$$f = f_0\left(\sqrt2 + \frac1{\sqrt2}\right) = \frac{3}{\sqrt2}\,\frac{\mu_0 I^2}{2\pi a}, \text{ towards the centre.}$$

The whole bundle tends to collapse inwards: a first glimpse of the pinch effect below.

:::qc
q: Wires 1 and 2 are 9 cm apart and carry 2 A and 4 A in the same direction. Where does a third parallel wire feel no force?
options: ["3 cm from wire 1, between them", "6 cm from wire 1, between them", "4.5 cm from each", "9 cm beyond wire 1"]
answer: 0
right: Right. x = I₁D/(I₁ + I₂) = 2 × 9/6 = 3 cm. The null point is nearer the weaker current.
wrong: Balance I₁/x = I₂/(D − x): 2/x = 4/(9 − x), so x = 3 cm. The zero is nearer the smaller current.
:::

## A loop beside a long wire {lvl=3 id=s-loop label="JEE"}

A rectangular loop carrying $I_2$ lies in the same plane as a long straight wire carrying $I_1$. Its two sides of length $l$ are parallel to the wire, at distances $a$ and $a + b$.

:::figure caption="A rectangular loop beside a long wire. The near side (current parallel to the wire) is attracted strongly; the far side (antiparallel) is repelled weakly. The forces on the two perpendicular sides are equal and opposite. Net force: towards the wire."
<svg viewBox="0 0 320 200" role="img" aria-label="Long wire on the left, rectangular loop to its right, forces on near and far sides">
<line class="ln" x1="40" y1="10" x2="40" y2="190" style="stroke-width:2.4"/><polygon points="40,20 35,32 45,32" style="fill:var(--ink)"/><text class="k" x="14" y="104">I₁</text>
<rect x="110" y="50" width="120" height="100" class="ln"/>
<polygon points="110,92 105,104 115,104" style="fill:var(--ink)"/><polygon points="230,108 225,96 235,96" style="fill:var(--ink)"/>
<polygon points="164,150 176,145 176,155" style="fill:var(--ink)"/><polygon points="176,50 164,45 164,55" style="fill:var(--ink)"/>
<text class="k" x="240" y="128">I₂</text><text x="116" y="44">l</text>
<line class="ln" x1="104" y1="120" x2="66" y2="120" style="stroke:var(--chem);stroke-width:2.6"/><polygon points="58,120 68,114 68,126" style="fill:var(--chem)"/><text x="62" y="138">F₁</text>
<line class="ln" x1="236" y1="80" x2="258" y2="80" style="stroke:var(--chem);stroke-width:1.6"/><polygon points="265,80 256,75 256,85" style="fill:var(--chem)"/><text x="268" y="84">F₂</text>
<line class="faint" x1="40" y1="172" x2="110" y2="172"/><text x="70" y="186">a</text>
<line class="faint" x1="110" y1="172" x2="230" y2="172"/><text x="166" y="186">b</text>
</svg>
:::

**Perpendicular sides.** The two short sides run across the field at the same distances, with opposite currents, so their forces (along the wire) are equal and opposite. They cancel.

**Parallel sides.** The near side feels attraction $\mu_0I_1I_2l/2\pi a$; the far side feels repulsion $\mu_0I_1I_2l/2\pi(a+b)$. The near one is closer, so it wins:

:::law caption="Net force on a rectangular loop beside a long wire (towards the wire if the near side's current is parallel to I₁)."
$$F = \frac{\mu_0 I_1 I_2\, l}{2\pi}\left(\frac1a - \frac1{a+b}\right) = \frac{\mu_0 I_1 I_2\, l\, b}{2\pi a(a+b)}$$
:::

**Why the loop moves towards stronger field.** A loop in a **uniform** field feels no net force, only a torque (see the lesson on the current loop and galvanometer). Here the field is non-uniform, and the loop is pulled towards the region where its own field lines and the wire's field lines **add** inside it. That is the same behaviour as a small magnet drawn into a stronger field (see the lesson on the magnetic dipole and bar magnet). If $b \ll a$, $F \approx \dfrac{\mu_0 I_1}{2\pi a^2}\,(I_2 l b) = m\,\left|\dfrac{dB}{dr}\right|$, with $m = I_2 lb$ the loop's magnetic moment: the force on a dipole is the moment times the field gradient.

**The torque is zero** here, because the loop's moment (perpendicular to the plane) is parallel to the wire's field in that plane.

:::qc
q: A square loop of side 10 cm carries 2 A; its nearest side is 10 cm from a long wire carrying 10 A, current in the near side parallel to the wire. What is the net force?
options: ["2 × 10⁻⁶ N towards the wire", "4 × 10⁻⁶ N towards the wire", "2 × 10⁻⁶ N away from the wire", "Zero"]
answer: 0
right: Right. F = 2 × 10⁻⁷ × 10 × 2 × 0.1 × (1/0.1 − 1/0.2) = 4 × 10⁻⁷ × 5 = 2 × 10⁻⁶ N, attraction.
wrong: Use F = (μ₀I₁I₂l/2π)(1/a − 1/(a+b)) = 2 × 10⁻⁷ × 20 × 0.1 × (10 − 5) = 2 × 10⁻⁶ N, towards the wire because the near side wins.
:::

## Beams of charges: magnetic force as a small correction {lvl=4 id=s-beams label="Olympiad"}

Here is a puzzle. Two beams of electrons moving side by side in the same direction are two parallel currents, so they should attract. But electrons repel. What actually happens?

**Both forces act.** Model each beam as a line of charge with $\lambda$ coulombs per metre, moving at speed $v$, so it carries current $I = \lambda v$. At separation $d$, per unit length:

$$f_E = \lambda\,E = \frac{\lambda^2}{2\pi\varepsilon_0 d}\ \text{(repulsion)}, \qquad f_B = \frac{\mu_0 (\lambda v)^2}{2\pi d}\ \text{(attraction)}.$$

Their ratio is

$$\frac{f_B}{f_E} = \mu_0\varepsilon_0 v^2 = \frac{v^2}{c^2},$$

using $\mu_0\varepsilon_0 = 1/c^2$. The net force is $f_E(1 - v^2/c^2)$, always **repulsive** and smaller the faster the beams move. Magnetism is a correction of size $(v/c)^2$ to electricity.

**Then why are wire forces measurable at all?** In a copper wire the drift speed is about $10^{-4}$ m/s, so $(v/c)^2 \sim 10^{-25}$. The magnetic force should be hopelessly small. The answer is **neutrality**. A wire holds its moving electrons together with an equal, opposite charge of fixed ions, so the electric forces between two wires cancel *exactly*, leaving only the magnetic part. The electric force that is cancelled is gigantic: the free electrons in one metre of thin copper wire carry roughly $10^{4}$ C [Inference: order-of-magnitude estimate from $n \approx 10^{29}$ m⁻³ and a 1 mm² cross-section]. A factor $10^{-25}$ of something enormous is still a few millinewtons.

**A pointer to relativity.** The two beams look different from a frame moving with them: there the charges are at rest, the force is purely electric, and it is larger. The two frames agree once you allow for how forces and times transform between frames; the factor $1 - v^2/c^2$ is exactly that bookkeeping. Turned round, this suggests that **magnetism is what electricity looks like when charges move**, viewed from a frame in which they move. [Inference: this is the standard special-relativity account, mentioned here as a pointer only; the derivation is beyond this lesson.]

:::qc
q: Two proton beams travel side by side at 0.6c. Compared with the electric repulsion alone, the net force between them is
options: ["0.64 of it, still repulsive", "0.36 of it, still repulsive", "zero", "attractive"]
answer: 0
right: Right. Net = f_E(1 − v²/c²) = f_E(1 − 0.36) = 0.64 f_E, still repulsive. Only at v → c would the forces cancel.
wrong: The magnetic attraction is (v/c)² = 0.36 of the electric repulsion, so the net is 1 − 0.36 = 0.64 of the electric force, still repulsive.
:::

## The pinch effect and magnetic pressure {lvl=4 id=s-pinch label="Olympiad"}

Think of a thick conductor as a bundle of thin parallel filaments, all carrying current the same way. Every filament attracts every other one, so the whole bundle is **squeezed inwards** by its own current. This is the **pinch effect**.

:::figure caption="Cross-section of a cylinder carrying current out of the page. The field lines circle the axis; the force j × B on every element points towards the axis. The column is squeezed by its own field."
<svg viewBox="0 0 260 200" role="img" aria-label="Circle with dots for current out of page, circular field lines and inward arrows">
<circle cx="130" cy="100" r="62" style="fill:color-mix(in srgb, var(--phy) 10%, var(--surface));stroke:var(--ink);stroke-width:1.6"/>
<circle class="faint" cx="130" cy="100" r="35"/><circle class="faint" cx="130" cy="100" r="82"/>
<circle cx="130" cy="100" r="2.5" style="fill:var(--ink)"/><circle cx="105" cy="80" r="2.5" style="fill:var(--ink)"/><circle cx="158" cy="85" r="2.5" style="fill:var(--ink)"/><circle cx="112" cy="128" r="2.5" style="fill:var(--ink)"/><circle cx="152" cy="124" r="2.5" style="fill:var(--ink)"/>
<line class="ln" x1="130" y1="14" x2="130" y2="34" style="stroke:var(--chem);stroke-width:2.2"/><polygon points="130,42 125,32 135,32" style="fill:var(--chem)"/>
<line class="ln" x1="130" y1="186" x2="130" y2="166" style="stroke:var(--chem);stroke-width:2.2"/><polygon points="130,158 125,168 135,168" style="fill:var(--chem)"/>
<line class="ln" x1="44" y1="100" x2="64" y2="100" style="stroke:var(--chem);stroke-width:2.2"/><polygon points="72,100 62,95 62,105" style="fill:var(--chem)"/>
<line class="ln" x1="216" y1="100" x2="196" y2="100" style="stroke:var(--chem);stroke-width:2.2"/><polygon points="188,100 198,95 198,105" style="fill:var(--chem)"/>
<text x="200" y="36">B</text><text x="196" y="124">F</text><text x="14" y="194">current out of page, uniform j</text>
</svg>
:::

**The field inside.** Let a cylinder of radius $R$ carry current $I$ spread uniformly, with current density $j = I/\pi R^2$. By Ampère's law, the field at radius $r < R$ comes only from the current inside $r$:

$$B(r) = \frac{\mu_0\, j\, \pi r^2}{2\pi r} = \frac{\mu_0 j r}{2}.$$

**The force on each piece.** A volume element feels a force $\mathbf j\times\mathbf B$ per unit volume. With $\mathbf j$ along the axis and $\mathbf B$ around it, this force points **radially inwards**, of size $jB$.

**What can hold the column up?** In a plasma or a liquid metal, only an outward pressure gradient: $dp/dr = -jB(r) = -\mu_0 j^2 r/2$. Integrating from the surface (where $p = 0$) inwards gives the pressure on the axis needed for balance:

$$p(0) = \frac{\mu_0 j^2 R^2}{4} = \frac{\mu_0 I^2}{4\pi^2 R^2}.$$

**Magnetic pressure.** Compare this with $B_s^2/2\mu_0$, where $B_s = \mu_0 I/2\pi R$ is the field at the surface: $B_s^2/2\mu_0 = \mu_0I^2/8\pi^2R^2$, exactly half of $p(0)$. The pattern is general: **a magnetic field exerts a pressure $B^2/2\mu_0$ on a current sheet bounding it**, pushing from the side where the field is strong towards the side where it is weak. The same expression is the energy stored per unit volume in the field, and that is no coincidence: pressure is energy per volume. [Inference: the general statement is quoted without derivation; the two numbers above are derived.]

**Numbers.** A plasma column of radius 1 cm carrying 100 kA needs $p(0) = 10^{-7}\times10^{10}/(\pi\times10^{-4}) \approx 3.2\times10^6$ Pa, about 30 atmospheres. Currents of that size are reached in laboratory pinches, and the confinement of hot plasma by its own current was one of the first ideas for fusion. The simple pinch turned out to be violently unstable: a column that thins a little at one place has a stronger field there and is squeezed further (the "sausage" instability) [Unverified: historical outline recalled from memory].

**Everyday pinches.** A lightning stroke can carry tens of kiloamperes for microseconds; hollow copper lightning conductors have been found crushed after a strike [Unverified: recalled from memory, often cited from a 1905 Australian report]. In electromagnetic metal forming, a large pulse of current squeezes a tube onto a shaped core.

**A solenoid squeezes too.** In a long solenoid of $N$ turns, length $\ell$, cross-section $A$ and current $I$, every turn attracts its neighbours. The axial squeeze can be found from energy. At constant current, the mechanical force is $F = +\partial U/\partial x$, with $U = \tfrac12 L_{\text{ind}} I^2$ and $L_{\text{ind}} = \mu_0N^2A/\ell$ [Inference: the sign rule "plus at constant current" is quoted from the energy method, because the battery supplies twice the change in stored energy]. So

$$F = \frac{\partial U}{\partial \ell} = -\frac{\mu_0 N^2 A I^2}{2\ell^2} = -\frac{B^2}{2\mu_0}\,A, \qquad B = \frac{\mu_0 N I}{\ell}.$$

The minus sign means the force tends to **shorten** the solenoid, and its size is the magnetic pressure times the area. This is the coil spring of the earlier section, done properly.

:::qc
q: The current in a straight conductor is doubled while its radius stays the same. By what factor does the pinch pressure on its axis change?
options: ["4", "2", "√2", "8"]
answer: 0
right: Right. p(0) = μ₀I²/4π²R² goes as I², so doubling I multiplies it by 4. So does B², since B ∝ I.
wrong: The pressure is μ₀I²/4π²R², or equivalently proportional to B². Both go as the square of the current: a factor of 4.
:::

## Coaxial rings, and wires that are not parallel {lvl=4 id=s-rings label="Olympiad"}

**Two coaxial rings very close together.** Two rings of radius $R$, on the same axis, a small distance $d \ll R$ apart, carry $I_1$ and $I_2$. Any small piece of one ring sees the other ring as an almost straight, almost parallel wire at distance $d$. So per unit length the force is about $\mu_0I_1I_2/2\pi d$, directed along the axis, and over the whole circumference $2\pi R$:

$$F \approx \frac{\mu_0 I_1 I_2}{2\pi d}\times2\pi R = \frac{\mu_0 I_1 I_2 R}{d}\qquad (d \ll R).$$

Attraction for currents circulating the same way, repulsion otherwise. The error is of relative order $d/R$ (times a logarithm) because the rings curve away from each other [Inference: size of the correction stated, not derived].

**Far apart.** For $d \gg R$ each ring is a small magnetic dipole, and the force falls off much faster, as $1/d^4$ (see the lesson on the magnetic dipole and bar magnet). The interaction changes from $1/d$ close up to $1/d^4$ far away.

**Crossed wires.** Two long straight wires that cross at right angles, one just above the other, feel **no net force** along the line joining them: the forces on the two halves of each wire, either side of the crossing point, point in opposite directions. But they do feel a **torque**, which turns them towards being parallel with currents in the same direction. Currents "prefer" to line up. This is the same tendency that makes a loop turn so that its own field adds to the outside field.

:::qc
q: Two coaxial rings of radius 5 cm, 1 mm apart, each carry 20 A in the same sense. About how large is the force between them?
options: ["About 0.025 N, attractive", "About 0.025 N, repulsive", "About 2.5 × 10⁻⁵ N, attractive", "About 0.25 N, attractive"]
answer: 0
right: Right. F ≈ μ₀I²R/d = 4π × 10⁻⁷ × 400 × 0.05/0.001 ≈ 0.025 N, attraction because the currents circulate the same way.
wrong: Treat the close rings as parallel wires of length 2πR: F ≈ μ₀I₁I₂R/d = 4π × 10⁻⁷ × 400 × 50 ≈ 0.025 N, attractive.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Each current sits in the other's magnetic field, so currents exert forces on each other with no magnet present. Like currents attract; unlike currents repel. {lvl=2}
2. $f = \mu_0 I_1 I_2/2\pi d = 2\times10^{-7}\,I_1I_2/d$ N/m, equal and opposite on the two wires. {lvl=2}
3. Classic definition: 1 A in each of two wires 1 m apart gives $2\times10^{-7}$ N/m. Since 2019 the ampere is fixed through $e$, and $\mu_0$ is measured [Unverified]. {lvl=2}
4. The Earth's field gives up to $3\times10^{-5}$ N/m on a 1 A wire, 150 times the defining force, so it must be cancelled in a current balance. {lvl=2}
5. With many wires, add forces from each pair. A free wire is in equilibrium where the others' net field is zero, never stable in every direction. {lvl=3}
6. Loop beside a wire: $F = \dfrac{\mu_0I_1I_2l}{2\pi}\left(\dfrac1a - \dfrac1{a+b}\right)$; perpendicular sides cancel. {lvl=3}
7. Moving line charges: $f_B/f_E = v^2/c^2$. Wire forces survive only because neutrality cancels the electric part exactly. {lvl=4}
8. Pinch: the force $\mathbf j\times\mathbf B$ points inwards; the axial pressure needed is $\mu_0I^2/4\pi^2R^2$; magnetic pressure is $B^2/2\mu_0$. A solenoid is squeezed by $B^2A/2\mu_0$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The rule is the opposite of charges: **like currents attract**. Check every direction with $I\mathbf L\times\mathbf B$, not with intuition from electrostatics. {lvl=2}
- Put $d$ in metres. A distance in centimetres gives an answer 100 times too small or too large. {lvl=2}
- $f$ is force **per unit length**. Multiply by the length of the section when a force in newtons is asked (Exercise 4.7). {lvl=2}
- A wire carries no force from its own field when it is straight; only the *other* wire's field counts in the two-wire law. {lvl=2}
- At an equilibrium between two like currents, the third current drops out of the condition, but it decides which directions are stable. {lvl=3}
- On a loop beside a wire, the forces on the perpendicular sides cancel; do not integrate them into the net force. {lvl=3}
- For beams of free charges the electric force dominates; for neutral wires it is absent. Do not mix the two pictures. {lvl=4}
- In energy methods, the force at **constant current** is $+\partial U/\partial x$, not $-\partial U/\partial x$. {lvl=4}
:::
