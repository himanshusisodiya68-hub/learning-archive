---
title: Electrostatic potential and potential energy
summary: 'A single number at every point that tells you the energy a charge would have there, and why that is so handy.'
ncert: ["Class 12 Physics · Ch 2 Electrostatic Potential and Capacitance (§2.1–2.9)"]
up_to: Olympiad
builds_on: [Electric charge, Coulomb's law, Electric field, Gauss's law, Work and energy]
notes_prompt: Explain, without any formula, why two metal spheres joined by a wire end up at the same potential but usually with different charges, and why the smaller sphere has the stronger field at its surface.
margin:
  - kind: history
    title: History
    text: "Lagrange and Laplace used a potential function for gravity in the late 1700s, and Poisson extended it to electrostatics in 1812. George Green named it the 'potential function' in his 1828 essay, which also contains the ideas behind the method of images. (Names and dates from memory, [Unverified].)"
  - kind: tip
    title: Board favourite
    text: "Potential is a scalar: add the values from each charge with their signs, and never resolve components. Then use E = −dV/dr only if the field is asked for."
  - kind: olympiad
    title: Olympiad link
    text: "A charge q at distance d from a large earthed metal plate is attracted exactly as if a charge −q sat at its mirror image. The plate's field outside is unchanged by this replacement, but the energy is only half of what the two-charge formula gives."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 2 Electrostatic Potential and Capacitance, §2.1–2.9, Examples 2.1–2.7, Exercises 2.1–2.4" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 29 Electric Field and Potential; Ch. 30 Gauss's Law (conductors)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.1 Constant electric field in vacuum; 3.2 Conductors and dielectrics in an electric field" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 1 (energy of a system of charges), Ch. 2 The electric potential, Ch. 3 Conductors (images)" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "§2.3–2.5 Electric potential, work and energy, conductors; §3.2 Method of images" }
cards:
  - { front: "Define the potential difference V_B − V_A.", back: "The work done by an external agent per unit positive charge in moving a test charge slowly from A to B: $V_B - V_A = -\\int_A^B \\vec E\\cdot d\\vec l$. It does not depend on the path because the electrostatic field is conservative." }
  - { front: "Potential of a point charge and of a dipole?", back: "Point charge: $V = \\dfrac{q}{4\\pi\\varepsilon_0 r}$. Dipole (far away): $V = \\dfrac{p\\cos\\theta}{4\\pi\\varepsilon_0 r^2}$, zero on the perpendicular bisector." }
  - { front: "How are E and V related?", back: "$\\vec E = -\\nabla V$. The field points the way V falls fastest, its size is the rate of fall per metre, and it is perpendicular to every equipotential surface." }
  - { front: "Potential energy of a dipole in a uniform field?", back: "$U = -\\vec p\\cdot\\vec E = -pE\\cos\\theta$. Minimum (stable) at $\\theta = 0$; turning it from 0 to 180° needs work $2pE$." }
  - { front: "Two metal spheres of radii R₁, R₂ far apart are joined by a thin wire. How do charge and surface field divide?", back: "Equal potential: $q_1/R_1 = q_2/R_2$, so $q \\propto R$, $\\sigma \\propto 1/R$ and the surface field $\\propto 1/R$. The smaller sphere has the stronger field." }
  - { front: "Self-energy of a charge Q spread on a thin shell and through a solid ball of radius R?", back: "Shell: $\\dfrac{Q^2}{8\\pi\\varepsilon_0 R}$. Uniform ball: $\\dfrac{3Q^2}{20\\pi\\varepsilon_0 R}$, i.e. $\\tfrac35\\,\\dfrac{Q^2}{4\\pi\\varepsilon_0 R}$." }
core:
  idea: 'The electrostatic field is conservative, so each point has a potential $V$: the work per unit positive charge to bring a test charge slowly from infinity. For a point charge $V = kq/r$; potentials of several charges add as signed scalars, and $\vec E = -\nabla V$.'
  formulas:
    - tex: 'V_B - V_A = -\int_A^B \vec E\cdot d\vec l'
      label: 'Potential difference'
    - tex: 'V = \frac{1}{4\pi\varepsilon_0}\frac{q}{r}'
      label: 'Potential of a point charge'
    - tex: '\vec E = -\nabla V'
      label: 'Field from potential'
  conditions:
    - 'Static charges, so the field is conservative and its closed-loop integral is zero'
    - 'Test charge moved slowly (no kinetic energy gained), with V = 0 at infinity for finite charge distributions'
    - 'Conductor in equilibrium: E = 0 inside and one potential throughout'
  sign: 'V is a scalar: add potentials with their signs and never resolve components. V = 0 does not mean E = 0, and E = 0 does not mean V = 0.'
outcomes:
  - 'Calculate the work to move a charge between two points using q(V_B − V_A)'
  - 'Find the potential of point charges, dipoles and charge systems by adding signed scalars'
  - 'Relate field and potential through equipotentials and E = −dV/dx'
  - 'Compute the potential energy of charge systems and dipoles, and use energy conservation for moving charges'
  - 'Solve problems on conductors, charge sharing and earthing, self-energy and the method of images'
opener:
  story: |
    Look at a crow sitting on a bare 11,000-volt power line by the roadside. It is not electrocuted. It does not even look worried. A lineman who touched the same wire without protection would not survive.

    Same wire, same voltage. The bird stands with both feet on it and nothing happens. But if it stretched a wing to the next wire, or to the pole, it would be in deadly trouble. So what decides whether a voltage hurts you?

    The answer is that "how high" a voltage is means nothing by itself. Only the gap between two places matters, like the drop of a hill and not its height above sea level. This lesson gives that idea a name, **potential**, and shows why it turns hard problems into easy sums.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A bird perched on a high-voltage wire with both feet at the same potential, while the large voltage drop is between the wire and the ground"><rect x="36" y="52" width="9" height="178" style="fill:var(--muted)"/><rect x="14" y="54" width="52" height="6" style="fill:var(--muted)"/><path d="M40 60 Q160 108 300 62" style="fill:none;stroke:var(--ink);stroke-width:3"/><text x="62" y="46" style="font-size:11px;fill:var(--bad)">11 000 V</text><ellipse cx="166" cy="76" rx="16" ry="10" style="fill:var(--c)"/><circle cx="181" cy="67" r="6" style="fill:var(--c)"/><path d="M186 66 L194 68 L186 70Z" style="fill:var(--ink)"/><path d="M152 80 L138 86 L152 84Z" style="fill:var(--c)"/><line x1="162" y1="84" x2="162" y2="92" style="stroke:var(--ink);stroke-width:2"/><line x1="172" y1="85" x2="172" y2="93" style="stroke:var(--ink);stroke-width:2"/><text x="112" y="132" style="font-size:11px;fill:var(--muted)">both feet at the same potential</text><line x1="0" y1="228" x2="320" y2="228" style="stroke:var(--muted);stroke-width:2"/><text x="240" y="222" style="font-size:11px;fill:var(--muted)">0 V (earth)</text><path d="M270 80 L270 216" style="fill:none;stroke:var(--chem);stroke-width:2;stroke-dasharray:5 4"/><path d="M264 90 L270 76 L276 90Z" style="fill:var(--chem)"/><path d="M264 206 L270 220 L276 206Z" style="fill:var(--chem)"/><text x="116" y="170" style="font-size:11px;fill:var(--chem)">the big difference is down here,</text><text x="116" y="184" style="font-size:11px;fill:var(--chem)">not across the bird</text></svg>'
life:
  - 'The 1.5 V on a battery label is a potential difference: every coulomb that passes gains or gives 1.5 joules.'
  - 'An ECG measures potential differences between points on your skin to read your heartbeat.'
  - 'After shuffling across a carpet your body can reach thousands of volts, yet the shock is harmless because the charge involved is tiny.'
  - 'A thundercloud and the ground can differ by many millions of volts, and lightning is what happens when the air gives way.'
  - 'Lightning conductors have sharp tips because charge crowds onto points of a conductor even though the whole conductor sits at one potential.'
symbols:
  - { s: 'W', means: 'work done in moving a charge (joule, J)' }
  - { s: 'U', means: 'electric potential energy: the energy a charge has because of where it sits (J)' }
  - { s: 'V', means: 'electric potential: potential energy per coulomb at a point (volt, V = J/C)' }
  - { s: '\Delta V', means: 'potential difference between two points (V)' }
  - { s: 'q', means: 'the charge being moved (coulomb, C)' }
  - { s: 'k', means: 'the force constant, k = 1/(4\pi\varepsilon_0), about 9 \times 10^{9}\ \text{N m}^2\,\text{C}^{-2}' }
  - { s: 'r', means: 'distance from the source charge (metre, m)' }
  - { s: '\vec E', means: 'electric field (N/C, the same as V/m)' }
  - { s: '\nabla V', means: 'how steeply the potential changes in each direction (V/m)' }
models:
  - name: 'Only the drop counts, not the path'
    text: 'Climbing a hill costs the same energy by whichever path; only the difference in height matters. In life too, it is the gap between two places that drives people to move or a price to change, not the absolute level.'
  - name: 'Zero is your choice'
    text: 'Potential, like altitude above sea level, has an arbitrary zero. Nothing real changes if you shift it. Celsius versus Kelvin and "ahead or behind compared with whom?" are the same idea.'
  - name: 'Flow runs downhill until levels match'
    text: 'Charge flows until potentials are equal, as water between two tanks does, as heat between two objects does, and as prices between two markets do once traders step in.'
links:
  - leaf: 'phy/kinetic-and-potential-energy'
    name: 'Kinetic and potential energy'
    same: 'Potential is potential energy per unit charge, just as height is gravitational potential energy per kilogram divided by g. Only differences matter and the path does not.'
    differs: 'Gravity always pulls masses downhill; the same electric move can raise or lower the energy depending on the sign of the moving charge.'
  - leaf: 'phy/temperature-and-heat'
    name: 'Heat and temperature'
    same: 'Temperature is the "potential" for heat: heat flows from high to low until the levels match, as charge flows until the potentials match.'
    differs: 'Heat flows by random collisions and never reverses by itself; charge is pushed by a field in a direction that depends on its sign. Temperature has a true zero; potential''s zero is chosen freely.'
next:
  q: 'Potential tells us how hard a battery can push charge onto a metal plate. How much charge can a pair of plates hold at a given voltage, and how much energy ends up stored?'
  leaf: 'phy/capacitors'
  name: 'Capacitors'
---

:::hook
q: So what's your guess? Why is the bird safe on the wire?
options: ["Its feathers insulate it from the wire", "Both feet are at almost the same potential, so nothing pushes current through its body", "Its body conducts so poorly that the current is tiny"]
answer: 1
right: Right. Current flows only when there is a potential difference across the body. A bird's feet sit a few centimetres apart on a good conductor, so the difference is a tiny fraction of a volt. Danger starts when it bridges two different potentials, such as a wire and the pole.
wrong: Feathers do almost nothing at 11,000 V, and a bird's body conducts well enough. What matters is that its two feet touch points of almost the same potential, so there is almost no voltage across the bird to drive a current.
:::

## Height for charges {lvl=1 id=s-why label="Class 10"}

In Class 10 the potential difference of a cell was "work done per unit charge". Here is why that idea is so useful.

Lift a 1 kg stone from the floor onto a 2 m shelf. You do about 20 J of work, whichever way you carry it: straight up, up a ramp, or round the room first. Because the work depends only on the start and the end, we can give **each place a number**, its height, and read off the work as (mass) × g × (difference in heights). One number per point replaces a whole vector force field.

The electric force between charges has the same property. Carry a small positive charge from point A to point B near some fixed charges. The work you do does not depend on the route. So each point can be given a number, its **electric potential** $V$, such that

$$W_{A\to B} = q\,(V_B - V_A).$$

Potential is "height for charges", measured in joules per coulomb, which is the **volt**. A positive charge, left to itself, rolls "downhill" to lower potential. A negative charge rolls uphill.

:::qc
q: Point B is at 50 V and point A at 20 V. How much work must you do to carry a +2 C charge slowly from A to B?
options: ["30 J", "60 J", "−60 J", "140 J"]
answer: 1
right: Right. W = q(V_B − V_A) = 2 × 30 = 60 J, on any path.
wrong: Only the difference of potential matters. W = q(V_B − V_A) = 2 × (50 − 20) = 60 J.
:::

## Conservative force and potential difference {lvl=2 id=s-def label="Class 12"}

**Why the work is path-independent.** The field of one point charge is radial. Break any path into small steps. Each step is partly along the radius and partly across it. The force does no work in the sideways part, so the work depends only on how far the radius changes in total. A path that goes out and comes back in cancels exactly. The field of many charges is a sum of such fields (see the lesson *Electric field*), so it too has this property. Such a force is called **conservative**.

So, round any closed loop, the electrostatic field does zero work:

:::law caption="The electrostatic field is conservative. This is the reason a potential exists."
$$\oint \vec E\cdot d\vec l = 0.$$
:::

**The definition.** Move a test charge $q$ slowly (no gain in kinetic energy) from A to B. Your force is $-q\vec E$ at every point, so the work you do is $-q\int_A^B \vec E\cdot d\vec l$. Per unit charge:

:::eq caption="Potential difference: work done by an external agent per unit positive charge, A to B, moving slowly."
$$V_B - V_A = -\int_A^B \vec E\cdot d\vec l.$$
:::

Only differences are physical. We are free to choose one reference point where $V = 0$. For charges confined to a finite region, the convention is **zero at infinity**; then $V(P)$ is the work per unit charge to bring a test charge from infinity to P.

Three consequences used everywhere:

- The work done **by the field** on a charge going from A to B is $-q(V_B - V_A)$. If no other force acts, its kinetic energy rises by exactly this amount: $\Delta K = -q\,\Delta V$.
- Moving **along** the field lines, $V$ falls. A positive charge released at rest moves to lower $V$; an electron moves to higher $V$.
- The **electron volt** is the energy an electron gains falling through 1 V: $1\text{ eV} = 1.6\times10^{-19}$ J.

## Potential of a point charge {lvl=2 id=s-point label="Class 12"}

Bring a test charge from infinity to distance $r$ from a charge $q$, along a radius. The field is $E = \dfrac{q}{4\pi\varepsilon_0 r'^2}$ outwards, and the path runs inwards, so

$$V(r) = -\int_\infty^r \frac{q}{4\pi\varepsilon_0 r'^2}\,dr' = \frac{q}{4\pi\varepsilon_0}\left[\frac{1}{r'}\right]_\infty^r .$$

:::eq caption="Potential of a point charge, zero at infinity. Positive near a positive charge, negative near a negative charge."
$$V(r) = \frac{1}{4\pi\varepsilon_0}\,\frac{q}{r}.$$
:::

$V$ falls as $1/r$, more slowly than the field ($1/r^2$). Halve the distance and the potential doubles while the field quadruples.

**Numbers.** With $\dfrac{1}{4\pi\varepsilon_0} = 9\times10^{9}$ N m² C⁻², a charge of $4\times10^{-7}$ C gives $V = 9\times10^9\times4\times10^{-7}/0.09 = 4\times10^4$ V at 9 cm. Bringing a 2 nC charge there from infinity costs $2\times10^{-9}\times4\times10^{4} = 8\times10^{-5}$ J (NCERT Example 2.1).

:::qc
q: The potential 10 cm from a point charge is 900 V. What is it at 30 cm, and how does the field compare?
options: ["300 V; field one third", "300 V; field one ninth", "100 V; field one ninth", "100 V; field one third"]
answer: 1
right: Right. V ∝ 1/r gives 300 V, and E ∝ 1/r² gives one ninth.
wrong: Potential goes as 1/r (900 → 300 V) but field goes as 1/r² (down by a factor of 9).
:::

## Many charges: add the numbers {lvl=2 id=s-super label="Class 12"}

Fields add as vectors, and the work done by a sum of forces is the sum of the works. So **potentials simply add, as signed numbers**:

$$V(P) = \frac{1}{4\pi\varepsilon_0}\sum_i \frac{q_i}{r_{iP}}.$$

This is the great practical advantage of potential: no components, no angles, just a sum with signs.

:::worked title="A square of charges"
Charges $+q, -q, +q, -q$ sit in order at the corners of a square of side $a$. At the centre each is $a/\sqrt2$ away, so $V = \dfrac{1}{4\pi\varepsilon_0}\dfrac{(q - q + q - q)}{a/\sqrt2} = 0$.

The field at the centre is also zero here (opposite corners carry equal charges). But with $+q, +q, -q, -q$ in order, $V$ is still $0$ while the field is **not**: both $+q$ charges push the test charge towards the $-q$ side. Zero potential at a point says nothing about the field there.
:::

**The dipole.** Charges $\pm q$ separated by $2a$, dipole moment $p = 2qa$ from $-q$ to $+q$. At distance $r$ from the centre, at angle $\theta$ to the axis, the distances to the charges are about $r \mp a\cos\theta$ when $r \gg a$. Then

$$V = \frac{q}{4\pi\varepsilon_0}\left(\frac{1}{r - a\cos\theta} - \frac{1}{r + a\cos\theta}\right) \approx \frac{q}{4\pi\varepsilon_0}\,\frac{2a\cos\theta}{r^2}.$$

:::eq caption="Potential of a dipole far away (r ≫ a). It falls as 1/r², one power faster than a single charge, because the two charges nearly cancel."
$$V = \frac{1}{4\pi\varepsilon_0}\,\frac{p\cos\theta}{r^2} = \frac{1}{4\pi\varepsilon_0}\,\frac{\vec p\cdot\hat r}{r^2}.$$
:::

On the axis ($\theta = 0$), $V = p/(4\pi\varepsilon_0 r^2)$. On the perpendicular bisector ($\theta = 90°$), $V = 0$ at every distance, exactly, because every point there is equidistant from $+q$ and $-q$. Yet the field there is not zero: it points parallel to the axis, from $+q$ towards $-q$.

## Equipotential surfaces {lvl=2 id=s-equi label="Class 12"}

An **equipotential surface** joins all points at one potential, like a contour line on a map joins points at one height.

**Why field lines cross them at right angles.** Move a charge a small step $d\vec l$ within the surface. $V$ does not change, so the work $-q\vec E\cdot d\vec l$ is zero for every direction in the surface. That forces $\vec E$ to be perpendicular to the surface. And it points from higher to lower $V$.

**Spacing tells the strength.** If neighbouring surfaces differ by $\Delta V$ and are $\Delta l$ apart, then $E = \Delta V/\Delta l$. Crowded surfaces mean a strong field, just as crowded contours mean a steep hill.

:::figure caption="Left: a point charge. Equipotentials are spheres (circles here), drawn for equal steps of V (radii in the ratio 1/4 : 1/3 : 1/2 : 1), so they crowd together near the charge where the field (faint radial lines) is strong. Right: a uniform field. Equipotentials are equally spaced planes perpendicular to the field."
<svg viewBox="0 0 360 180" role="img" aria-label="Concentric circular equipotentials around a point charge with radial field lines, and parallel equally spaced vertical equipotential lines in a uniform field pointing right">
<line class="faint" x1="90" y1="90" x2="170" y2="90"/><line class="faint" x1="90" y1="90" x2="10" y2="90"/><line class="faint" x1="90" y1="90" x2="90" y2="10"/><line class="faint" x1="90" y1="90" x2="90" y2="170"/>
<line class="faint" x1="90" y1="90" x2="147" y2="33"/><line class="faint" x1="90" y1="90" x2="33" y2="147"/><line class="faint" x1="90" y1="90" x2="147" y2="147"/><line class="faint" x1="90" y1="90" x2="33" y2="33"/>
<circle class="ray" cx="90" cy="90" r="20"/><circle class="ray" cx="90" cy="90" r="27"/><circle class="ray" cx="90" cy="90" r="40"/><circle class="ray" cx="90" cy="90" r="80"/>
<circle class="obj" cx="90" cy="90" r="5"/><text class="k" x="96" y="84">+q</text>
<line class="ray" x1="215" y1="20" x2="215" y2="165"/><line class="ray" x1="250" y1="20" x2="250" y2="165"/><line class="ray" x1="285" y1="20" x2="285" y2="165"/><line class="ray" x1="320" y1="20" x2="320" y2="165"/>
<line class="faint" x1="200" y1="60" x2="340" y2="60"/><line class="faint" x1="200" y1="120" x2="340" y2="120"/>
<text x="330" y="56">E →</text><text x="205" y="178">40 V</text><text x="240" y="178">30 V</text><text x="275" y="178">20 V</text><text x="310" y="178">10 V</text>
</svg>
:::

:::figure caption="Equipotentials of a dipole, +q on the left and −q on the right, for V = ±2, ±1, ±0.5 and ±0.3 in units of q/4πε₀a, where 2a is the separation. The vertical line midway is the V = 0 surface."
<svg viewBox="0 0 360 200" role="img" aria-label="Closed equipotential curves around each charge of a dipole, nested and egg-shaped, with a straight vertical zero-potential line between them">
<polygon class="ray" points="149,100 149,97 148,94 147,91 146,89 144,86 141,84 139,82 136,81 133,80 130,80 127,80 124,81 121,82 118,83 115,85 113,88 112,91 110,94 110,97 109,100 110,103 110,106 112,109 113,112 115,115 118,117 121,118 124,119 127,120 130,120 133,120 136,119 139,118 141,116 144,114 146,111 147,109 148,106 149,103"/>
<polygon class="ln" style="stroke:var(--chem)" points="251,100 250,97 250,94 248,91 247,88 245,85 242,83 239,82 236,81 233,80 230,80 227,80 224,81 221,82 219,84 216,86 214,89 213,91 212,94 211,97 211,100 211,103 212,106 213,109 214,111 216,114 219,116 221,118 224,119 227,120 230,120 233,120 236,119 239,118 242,117 245,115 247,112 248,109 250,106 250,103"/>
<polygon class="ray" points="159,100 159,95 158,91 157,86 155,82 152,78 149,74 145,71 140,69 135,67 130,66 125,66 119,67 114,69 109,71 105,75 101,79 98,83 95,89 94,94 93,100 94,106 95,111 98,117 101,121 105,125 109,129 114,131 119,133 125,134 130,134 135,133 140,131 145,129 149,126 152,122 155,118 157,114 158,109 159,105"/>
<polygon class="ln" style="stroke:var(--chem)" points="267,100 266,94 265,89 262,83 259,79 255,75 251,71 246,69 241,67 235,66 230,66 225,67 220,69 215,71 211,74 208,78 205,82 203,86 202,91 201,95 201,100 201,105 202,109 203,114 205,118 208,122 211,126 215,129 220,131 225,133 230,134 235,134 241,133 246,131 251,129 255,125 259,121 262,117 265,111 266,106"/>
<polygon class="ray" points="168,100 168,94 167,88 166,82 164,76 161,69 156,64 151,58 145,53 138,49 130,47 121,46 113,46 104,49 95,52 88,58 81,64 76,72 72,81 69,90 68,100 69,110 72,119 76,128 81,136 88,142 95,148 104,151 113,154 121,154 130,153 138,151 145,147 151,142 156,136 161,131 164,124 166,118 167,112 168,106"/>
<polygon class="ln" style="stroke:var(--chem)" points="292,100 291,90 288,81 284,72 279,64 272,58 265,52 256,49 247,46 239,46 230,47 222,49 215,53 209,58 204,64 199,69 196,76 194,82 193,88 192,94 192,100 192,106 193,112 194,118 196,124 199,131 204,136 209,142 215,147 222,151 230,153 239,154 247,154 256,151 265,148 272,142 279,136 284,128 288,119 291,110"/>
<polygon class="ray" points="173,100 172,93 172,86 171,79 169,72 166,64 162,56 157,48 149,40 140,34 130,29 118,27 106,27 94,29 82,33 70,40 61,50 53,61 47,73 43,86 42,100 43,114 47,127 53,139 61,150 70,160 82,167 94,171 106,173 118,173 130,171 140,166 149,160 157,152 162,144 166,136 169,128 171,121 172,114 172,107"/>
<polygon class="ln" style="stroke:var(--chem)" points="318,100 317,86 313,73 307,61 299,50 290,40 278,33 266,29 254,27 242,27 230,29 220,34 211,40 203,48 198,56 194,64 191,72 189,79 188,86 188,93 187,100 188,107 188,114 189,121 191,128 194,136 198,144 203,152 211,160 220,166 230,171 242,173 254,173 266,171 278,167 290,160 299,150 307,139 313,127 317,114"/>
<line class="faint" x1="180" y1="5" x2="180" y2="195"/>
<circle class="obj" cx="130" cy="100" r="4"/><circle class="obj" cx="230" cy="100" r="4" style="fill:var(--ink)"/>
<text class="k" x="122" y="92">+q</text><text class="k" x="226" y="92">−q</text><text x="184" y="16">V = 0</text>
</svg>
:::

:::qc
q: Equipotentials 2 V apart are found to be 4 mm apart in one region. What is the field strength there?
options: ["8 V/m", "500 V/m", "0.5 V/m", "2 V/m"]
answer: 1
right: Right. E = ΔV/Δl = 2 V / 0.004 m = 500 V/m, perpendicular to the surfaces, towards lower V.
wrong: E = ΔV/Δl, with Δl in metres. 2 V over 0.004 m is 500 V/m.
:::

## Potential energy of a system of charges {lvl=2 id=s-energy label="Class 12"}

**Assembling the system.** Bring charges in from infinity one by one, slowly. The first costs nothing: there is no field yet. The second, $q_2$, is brought into the potential of $q_1$ and costs $\dfrac{q_1q_2}{4\pi\varepsilon_0 r_{12}}$. The third feels both and costs $\dfrac{1}{4\pi\varepsilon_0}\left(\dfrac{q_1q_3}{r_{13}} + \dfrac{q_2q_3}{r_{23}}\right)$. The total does not depend on the order. It is the **potential energy of the system**:

:::eq caption="Potential energy of point charges: one term for every pair, counted once."
$$U = \frac{1}{4\pi\varepsilon_0}\sum_{\text{pairs } i<j}\frac{q_iq_j}{r_{ij}}.$$
:::

Positive $U$ means work had to be done against repulsion; the system will release it if allowed to fly apart. Negative $U$ means the charges attract, and work must be supplied to pull them apart.

:::worked title="Three charges on a triangle"
Charges $+2$ µC, $+2$ µC and $-1$ µC sit at the corners of an equilateral triangle of side 0.30 m. The pairs give $q_iq_j$ = $+4$, $-2$, $-2$ (in µC²), total $0$. So $U = 0$: assembling this triangle from far-apart charges costs no net work. The work against the repulsion of the two positive charges is paid back exactly by the attraction of the negative one.
:::

**In an external field.** If charges sit in a field produced by other, fixed charges with potential $V(\vec r)$, the energy is

$$U = \sum_i q_iV(\vec r_i) + \frac{1}{4\pi\varepsilon_0}\sum_{i<j}\frac{q_iq_j}{r_{ij}},$$

the first sum for the interaction with the external sources, the second for the charges with each other.

**A dipole in a uniform field.** Put $+q$ at $\vec r_+$ and $-q$ at $\vec r_-$, with $\vec r_+ - \vec r_- = \vec d$. The energy in the external field is $q[V(\vec r_+) - V(\vec r_-)] = -q\vec E\cdot\vec d$ for a uniform field, since $V$ drops by $\vec E\cdot\vec d$ over the displacement $\vec d$. The internal term $-q^2/(4\pi\varepsilon_0 d)$ is constant and dropped.

:::eq caption="Energy of a dipole in a uniform external field. Stable when p is along E (θ = 0); unstable when opposite (θ = 180°)."
$$U(\theta) = -\vec p\cdot\vec E = -pE\cos\theta.$$
:::

Turning the dipole from $\theta_1$ to $\theta_2$ needs external work $pE(\cos\theta_1 - \cos\theta_2)$; from aligned to reversed this is $2pE$. The torque $\tau = pE\sin\theta$ is just $-dU/d\theta$.

:::qc
q: A dipole of moment 4 × 10⁻⁹ C m is aligned with a uniform field of 5 × 10⁴ N/C. How much work turns it to 90°?
options: ["0", "2 × 10⁻⁴ J", "4 × 10⁻⁴ J", "1 × 10⁻⁴ J"]
answer: 1
right: Right. U goes from −pE to 0, so W = pE = 4 × 10⁻⁹ × 5 × 10⁴ = 2 × 10⁻⁴ J.
wrong: W = pE(cos 0° − cos 90°) = pE = 2 × 10⁻⁴ J. Reversing it fully would cost 2pE.
:::

## Conductors in electrostatic equilibrium {lvl=2 id=s-cond label="Class 12"}

A metal contains free electrons. If there were any field inside, they would move. So once everything has settled (in a tiny fraction of a second):

1. **$E = 0$ everywhere inside the material** of a conductor.
2. **The whole conductor is one equipotential.** With $E = 0$ inside, $\int\vec E\cdot d\vec l = 0$ between any two of its points. Its surface is an equipotential, so the field just outside is **perpendicular to the surface**.
3. **Any net charge lives on the surface.** Gauss's law round any small closed surface inside the metal gives zero enclosed charge.
4. **Just outside, $E = \sigma/\varepsilon_0$**, where $\sigma$ is the local surface charge density (from Gauss's law with a small pillbox; see the lesson *Gauss's law*).
5. **An empty cavity in a conductor has $E = 0$ inside**, whatever charges or fields are outside. This is **electrostatic shielding**: a metal box (a Faraday cage) protects what is inside it.

Why 5? The cavity wall is one equipotential. If there were a field inside the empty cavity, a field line would run from one point of the wall to another, from higher to lower potential. But the wall has only one potential. So there is no field line, and no field.

:::qc
q: A hollow metal sphere has +5 nC on it. A small uncharged metal ball hangs inside on a thread, not touching. What is the field at the ball?
options: ["The same as just outside the sphere", "Zero", "Half of the outside value", "It depends on where the ball hangs"]
answer: 1
right: Right. The cavity is surrounded by one equipotential and contains no charge, so there is no field anywhere inside it.
wrong: The cavity wall is a single equipotential with no charge inside, so no field line can begin or end there. The field is zero throughout the cavity.
:::

## Field from potential, E = −∇V {lvl=3 id=s-grad label="JEE"}

Reverse the definition. Over a small step $d\vec l$, $dV = -\vec E\cdot d\vec l$. In one dimension this reads $E_x = -dV/dx$. In three dimensions:

:::law caption="The field is minus the gradient of the potential. It points the way V falls fastest; its size is that rate of fall."
$$\vec E = -\nabla V = -\left(\frac{\partial V}{\partial x}\,\hat i + \frac{\partial V}{\partial y}\,\hat j + \frac{\partial V}{\partial z}\,\hat k\right).$$
:::

Reading a $V(x)$ graph: **the field is minus the slope**. A flat part means zero field; a steep fall means a strong field pointing to $+x$; a minimum of $V$ is a point of stable equilibrium for a positive charge on that line.

:::worked title="From a potential formula to the field"
Suppose $V = 6xy - y + 2z$ volts ($x, y, z$ in metres). Then $E_x = -6y$, $E_y = -(6x - 1)$, $E_z = -2$. At $(1, 1, 0)$: $\vec E = (-6, -5, -2)$ V/m, of size $\sqrt{36 + 25 + 4} = 8.06$ V/m.
:::

Two points to hold firm:

- $V = 0$ at a point does **not** mean $E = 0$ there (the dipole's bisector).
- $E = 0$ at a point does **not** mean $V = 0$ there (the inside of a charged shell, where $V = kQ/R$).

:::qc
q: Along the x-axis V rises linearly from 0 at x = 0 to 12 V at x = 3 m, then stays at 12 V. What is the field at x = 1 m and at x = 5 m?
options: ["4 V/m along +x; 0", "4 V/m along −x; 0", "4 V/m along −x; 12 V/m", "12 V/m along +x; 0"]
answer: 1
right: Right. E = −dV/dx = −4 V/m, so 4 V/m pointing to −x. Where V is flat, E = 0.
wrong: The field is minus the slope. The slope is +4 V/m, so E points along −x with size 4 V/m. On the flat part E = 0 even though V = 12 V.
:::

## Potentials of continuous charges {lvl=3 id=s-cont label="JEE"}

For a smooth charge distribution, cut it into bits $dq$ and add: $V = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\int\frac{dq}{r}$. A scalar integral is far easier than the vector one for $\vec E$. Here $k = 1/4\pi\varepsilon_0$.

**Ring on its axis** (radius $R$, charge $Q$, distance $x$ from the centre). Every bit of the ring is the same distance $\sqrt{R^2 + x^2}$ from the point, so no integral is needed at all:

$$V = \frac{kQ}{\sqrt{R^2 + x^2}}.$$

Then $E_x = -dV/dx = kQx/(R^2 + x^2)^{3/2}$, the result that takes several lines by vectors. At the centre $V = kQ/R$ but $E = 0$.

**Disc on its axis** (radius $R$, surface density $\sigma$). Add rings of radius $s$ and charge $\sigma\,2\pi s\,ds$:

$$V = \int_0^R \frac{\sigma\,2\pi s\,ds}{4\pi\varepsilon_0\sqrt{s^2 + x^2}} = \frac{\sigma}{2\varepsilon_0}\left(\sqrt{R^2 + x^2} - x\right).$$

Far away ($x \gg R$) the bracket is about $R^2/2x$ and $V \to kQ/x$ with $Q = \sigma\pi R^2$, as it must. Close to the disc, $E = -dV/dx \to \sigma/2\varepsilon_0$, the infinite-sheet value.

**Thin spherical shell** (radius $R$, charge $Q$). Outside, the field is that of a point charge at the centre, so $V = kQ/r$. Inside, $E = 0$, so $V$ is constant and equal to its surface value $kQ/R$.

**Uniformly charged solid sphere.** Outside, $V = kQ/r$. Inside, $E = kQr/R^3$; integrating inwards from the surface,

$$V(r) = \frac{kQ}{R} + \int_r^R \frac{kQr'}{R^3}\,dr' = \frac{kQ\,(3R^2 - r^2)}{2R^3},\qquad V(0) = \frac{3}{2}\,\frac{kQ}{R}.$$

**Concentric shells.** For shells of radii $r_j$ carrying $q_j$, the potential of shell $i$ is $V_i = k\sum_j q_j/\max(r_i, r_j)$: each other shell acts like a point charge if it is inside, and like a constant if it is outside.

:::figure caption="V(r) for a charge Q on a thin shell (blue) and spread uniformly through a solid ball (orange) of the same radius R. Outside both are kQ/r. The shell's potential is flat inside; the ball's rises to 1.5 kQ/R at the centre. The slope (minus E) is continuous for the ball but jumps at the shell."
<svg viewBox="0 0 360 200" role="img" aria-label="Graph of potential against distance. A flat line inside radius R for the shell, a downward parabola for the solid sphere reaching 1.5 at the centre, and a common 1 over r curve outside">
<line class="ln" x1="40" y1="170" x2="340" y2="170"/><line class="ln" x1="40" y1="170" x2="40" y2="20"/>
<line class="faint" x1="110" y1="170" x2="110" y2="40"/><line class="faint" x1="40" y1="90" x2="110" y2="90"/><line class="faint" x1="40" y1="50" x2="60" y2="50"/>
<polyline class="ray" points="40,90 110,90"/>
<polyline class="ray" points="110,90 117,97 124,103 131,108 138,113 145,117 152,120 159,123 166,126 173,128 180,130 194,134 208,137 222,139 236,141 250,143 264,145 278,146 292,148 306,149 320,150"/>
<polyline class="ln" style="stroke:var(--chem);stroke-width:2" points="40,50 47,50 54,52 61,54 68,56 75,60 82,64 89,70 96,76 103,82 110,90"/>
<text x="104" y="184">R</text><text x="324" y="184">r</text><text x="8" y="94">kQ/R</text><text x="2" y="54">1.5kQ/R</text><text x="44" y="18">V</text>
<text x="200" y="124">kQ/r</text><text x="60" y="84">shell</text><text x="66" y="44" style="fill:var(--chem)">solid ball</text>
</svg>
:::

**Infinite line charge** ($\lambda$ per metre). Its field is $E = \lambda/(2\pi\varepsilon_0 r)$ (see *Gauss's law*). Integrating:

$$V(r) - V(r_0) = -\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{r}{r_0}.$$

Here $V = 0$ at infinity is **impossible**: the logarithm grows without limit, because the line carries infinite charge. Choose a finite reference distance $r_0$ instead. Only differences are meaningful anyway.

:::qc
q: A ring of radius 3 cm carries 10 nC. What is the potential on its axis 4 cm from the centre?
options: ["1800 V", "2250 V", "3000 V", "3600 V"]
answer: 0
right: Right. Every bit of the ring is √(3² + 4²) = 5 cm away, so V = 9 × 10⁹ × 10⁻⁸ / 0.05 = 1800 V.
wrong: All the ring's charge is at the same distance, 5 cm, from the point. V = kQ/0.05 = 1800 V.
:::

## Charged particles: energy conservation {lvl=3 id=s-motion label="JEE"}

When only electric forces act, $K + U$ is constant. This settles most motion questions without ever finding a force or an acceleration.

**Accelerated through a potential difference.** A charge $q$ falling through $V$ gains $K = |q|V$. An electron through 100 V gains 100 eV, speed $\sqrt{2\times100\times1.6\times10^{-19}/9.11\times10^{-31}} = 5.9\times10^6$ m/s.

**Closest approach.** An alpha particle ($+2e$) of 5 MeV heads straight at a gold nucleus ($+79e$), which is heavy enough to stay put. It stops where all its kinetic energy has become potential energy:

$$r_{\min} = \frac{k(2e)(79e)}{K}.$$

Using $ke^2 = 1.44$ MeV fm (from $9\times10^9\times(1.6\times10^{-19})^2 = 2.30\times10^{-28}$ J m), $r_{\min} = 2\times79\times1.44/5 = 45.5$ fm.

**Escape.** A charge $q$ of mass $m$ starting at $r$ from a fixed like charge $Q$ reaches infinity with $\tfrac12mv^2 = kqQ/r$. A charge attracted to $Q$ needs at least this kinetic energy to get away.

**Two free charges.** If both can move, **momentum** is conserved too. Released from rest at separation $r$, masses $m_1, m_2$:

$$m_1v_1 = m_2v_2,\qquad \tfrac12m_1v_1^2 + \tfrac12m_2v_2^2 = \frac{kq_1q_2}{r}.$$

The energy divides in the inverse ratio of the masses: the lighter body takes the larger share. Two protons released 1 nm apart share $U = 1.44\text{ eV nm}/1\text{ nm} = 1.44$ eV equally, 0.72 eV each.

:::worked title="Closest approach with a free target"
A particle of mass $m$ and kinetic energy $K$ approaches a free particle of mass $M$, head-on, initially at rest. At closest approach they move together with the centre-of-mass speed, which keeps kinetic energy $K\,\dfrac{m}{m+M}$. Only the rest, $K\,\dfrac{M}{m+M}$, can become potential energy. So
$$\frac{kq_1q_2}{r_{\min}} = K\,\frac{M}{m+M}.$$
A free target lets the projectile come less close than a fixed one would.
:::

## Sharing charge, grounding and sharp points {lvl=3 id=s-share label="JEE"}

**Connecting conductors.** A wire makes two conductors one conductor, so they come to **one potential**. Charge flows until that happens. It is not shared equally, unless the conductors are identical.

For two spheres far apart (so each one's field barely affects the other), joined by a thin wire, with total charge $q$:

$$\frac{kq_1}{R_1} = \frac{kq_2}{R_2} \;\Rightarrow\; \frac{q_1}{q_2} = \frac{R_1}{R_2},\qquad \frac{\sigma_1}{\sigma_2} = \frac{q_1/R_1^2}{q_2/R_2^2} = \frac{R_2}{R_1}.$$

So the **smaller** sphere has the **larger** surface density and the stronger surface field. In the hook, 9 nC on 3 cm and 3 nC on 1 cm: the surface field is $k\cdot9/9$ against $k\cdot3/1$ (nC/cm²), three times bigger on the small sphere.

**Sharp points.** A pointed conductor behaves like a large sphere joined to a very small one. Charge piles up at the tip, the field there becomes huge and ionises the air: the charge leaks away as a **corona** or **point discharge**. This is how a lightning conductor works, and why high-voltage equipment has smooth, rounded ends. Air breaks down at about $3\times10^6$ V/m [Unverified, value from memory], so a sphere of radius 10 cm in air cannot be raised much above $E_bR \approx 3\times10^5$ V.

**Grounding.** The Earth is a huge conductor; we take its potential as zero. Connecting a conductor to earth fixes its **potential** at zero. It does **not** make its charge zero: the conductor keeps whatever charge is needed to hold $V = 0$ given the charges near it.

:::worked title="Earthing the inner of two shells"
Concentric thin shells, radii $a = 10$ cm and $b = 20$ cm. The outer one has $+Q$. The inner one is earthed through a tiny hole. Its potential must be zero:
$$\frac{kq}{a} + \frac{kQ}{b} = 0 \;\Rightarrow\; q = -Q\,\frac{a}{b} = -\frac{Q}{2}.$$
Charge flows **up** from the earth onto the inner shell, even though it started neutral.
:::

:::qc
q: A neutral metal sphere is earthed while a positive charge is held near it. The earth wire is then cut and the charge removed. What charge does the sphere keep?
options: ["None, it was earthed", "Positive", "Negative", "It depends on the sphere's size only"]
answer: 2
right: Right. While earthed, the positive charge nearby raised the sphere's potential, so electrons flowed up from earth to bring it back to zero. Cutting the wire traps them. This is charging by induction.
wrong: Earthing fixes V = 0, not q = 0. The nearby positive charge tends to raise the sphere's potential, so electrons flow up from the earth to cancel it, and they are trapped when the wire is cut.
:::

## Self-energy and the energy in the field {lvl=4 id=s-self label="Olympiad"}

The pair sum assumes point charges that already exist. How much work does it take to **build** one charged body by bringing in its charge bit by bit?

**Thin shell.** When the shell already holds $q$, its potential is $kq/R$, so adding $dq$ costs $kq\,dq/R$. Building up to $Q$:

$$U_{\text{shell}} = \int_0^Q \frac{kq\,dq}{R} = \frac{kQ^2}{2R} = \frac{Q^2}{8\pi\varepsilon_0R} = \tfrac12 QV.$$

**Uniform ball.** Build it in layers. When the ball has radius $r$ its charge is $Q r^3/R^3$; a new layer $dq = 3Qr^2dr/R^3$ sits at potential $k(Qr^3/R^3)/r$. Then

$$U_{\text{ball}} = \int_0^R \frac{kQr^2}{R^3}\cdot\frac{3Qr^2}{R^3}\,dr = \frac{3kQ^2}{5R}.$$

For the ball, $\tfrac12\int\rho V\,d\tau$ gives the same number. In general $U = \tfrac12\sum q_iV_i$, where each $V_i$ is the potential at $q_i$ due to **all the others**. The $\tfrac12$ stops every pair being counted twice.

**Where is the energy?** The same result is obtained by giving the field an energy density $u = \tfrac12\varepsilon_0E^2$ and integrating over all space. For the shell, $E = kQ/r^2$ outside and $0$ inside: $\int_R^\infty \tfrac12\varepsilon_0(kQ/r^2)^2\,4\pi r^2dr = kQ^2/2R$. The energy density is developed further in the lesson *Capacitors*.

**A warning from point charges.** For a point charge, $R \to 0$ and the self-energy diverges. Setting $ke^2/r_e = m_ec^2$ gives a length $r_e = 1.44\text{ MeV fm}/0.511\text{ MeV} = 2.82$ fm, the "classical electron radius". It marks where classical electrostatics stops making sense, not a real size. (Electron rest energy 0.511 MeV, standard value.)

:::qc
q: A uniformly charged ball of charge Q splits into 8 identical small balls of the same density that fly far apart. What fraction of the original self-energy remains as self-energy of the pieces?
options: ["1/8", "1/4", "1/2", "1"]
answer: 1
right: Right. Each piece has charge Q/8 and radius R/2, so energy (Q/8)²/(R/2) = Q²/(32R) in the same units. Eight of them give Q²/(4R), one quarter.
wrong: Self-energy ∝ q²/r. Each piece has q = Q/8 and r = R/2 (volume one eighth). Then 8 × (1/64)/(1/2) = 1/4 of the original.
:::

## Uniqueness and the method of images {lvl=4 id=s-images label="Olympiad"}

**The uniqueness theorem.** In a region with given charges, if the potential is fixed on every boundary (conductors held at given potentials, and $V \to 0$ at infinity), there is only **one** potential that satisfies Gauss's law inside. [The proof uses the fact that the difference of two solutions would have no charge and zero boundary values, so no field lines could start or end anywhere; hence the difference is zero.]

So any trick that produces a potential with the right charges and the right boundary values gives **the** answer.

**Point charge and an earthed plane.** A charge $q$ is at distance $d$ above a large earthed metal plane. Replace the plane by a charge $-q$ at the mirror-image point, distance $d$ below. Every point of the plane is equidistant from $q$ and $-q$, so the plane has $V = 0$, as required. Above the plane the charge is still just $q$. By uniqueness, the field above the plane is exactly that of the pair. Below the plane (inside the metal) the true field is zero; the image is a mathematical stand-in, not a real charge.

:::figure caption="Method of images. The charge q above an earthed plane (solid) behaves, in the region above, like q together with an image −q at the mirror point (faint). Field lines from q meet the plane at right angles, and induced negative charge gathers most densely right under q."
<svg viewBox="0 0 360 200" role="img" aria-label="A positive charge above a horizontal earthed plane, field lines curving down to meet the plane perpendicularly, and a faint image charge below the plane">
<line class="ln" x1="20" y1="110" x2="340" y2="110" style="stroke-width:3"/>
<circle class="obj" cx="180" cy="50" r="5"/><text class="k" x="188" y="46">+q</text>
<circle cx="180" cy="170" r="5" style="fill:none;stroke:var(--muted);stroke-dasharray:3 3"/><text x="188" y="174">image −q</text>
<line class="faint" x1="150" y1="50" x2="150" y2="170"/><text x="120" y="84">d</text><text x="120" y="146">d</text>
<path class="ray" d="M180 55 L180 110"/>
<path class="ray" d="M184 54 Q200 85 205 110"/><path class="ray" d="M176 54 Q160 85 155 110"/>
<path class="ray" d="M185 51 Q235 70 245 110"/><path class="ray" d="M175 51 Q125 70 115 110"/>
<path class="ray" d="M185 48 Q285 40 300 110"/><path class="ray" d="M175 48 Q75 40 60 110"/>
<text x="150" y="124" style="fill:var(--chem)">− − − − − − −</text>
<text x="24" y="104">earthed plane, V = 0</text>
</svg>
:::

Consequences:

- **Force** on $q$: attraction towards the plane, $F = \dfrac{kq^2}{(2d)^2}$.
- **Induced charge density** at distance $s$ from the foot of the perpendicular: $\sigma = -\varepsilon_0E = -\dfrac{qd}{2\pi(d^2 + s^2)^{3/2}}$. Integrating over the plane gives exactly $-q$.
- **Energy.** The work to pull $q$ away to infinity is $\int_d^\infty kq^2/(4x^2)\,dx = kq^2/(4d)$, so $U = -kq^2/(4d)$. This is **half** of $-kq^2/(2d)$, the energy of two real charges $2d$ apart. The reason: when $q$ moves, its image moves too, but the image's field exists only on one side of the plane, so only half the field energy of the real pair is present.

**Earthed sphere.** For a charge $q$ at distance $a$ from the centre of an earthed sphere of radius $R$ ($a > R$), the image is $q' = -qR/a$ at distance $R^2/a$ from the centre. One can check that every point of the sphere is then at $V = 0$. For an **isolated, uncharged** sphere, add a second image $+qR/a$ at the centre, which keeps the total charge zero and the surface still an equipotential. Its potential is then $kq/a$: the potential at the centre, where all the induced charge (net zero) is at distance $R$.

:::qc
q: A point charge q is 2 cm from a large earthed metal plate. Compared with the force it feels, what is the force between the charges q and −q placed 4 cm apart?
options: ["Twice as big", "Equal", "Half as big", "Four times as big"]
answer: 1
right: Right. The image sits 2 cm behind the plate, 4 cm from q, so the force on q is exactly kq²/(0.04 m)². The forces agree, but the energies differ by a factor of 2.
wrong: The plate acts on q exactly as an image −q at the mirror point, 4 cm away. So the force is the same as between q and −q at 4 cm. Only the energy is halved.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Potential is work per unit charge, measured in volts. Because the electric force is conservative, each point gets one number, and $W_{A\to B} = q(V_B - V_A)$ on any path. {lvl=1}
2. $V_B - V_A = -\int_A^B\vec E\cdot d\vec l$. Point charge: $V = kq/r$. Dipole: $V = kp\cos\theta/r^2$. Potentials of many charges add as signed numbers. {lvl=2}
3. Equipotentials are perpendicular to field lines; the field points to lower $V$ and is strongest where they crowd. {lvl=2}
4. $U = k\sum_{i<j}q_iq_j/r_{ij}$ for a system; $U = -\vec p\cdot\vec E$ for a dipole in a uniform field. {lvl=2}
5. A conductor in equilibrium has $E = 0$ inside, one potential throughout, charge only on its surface, $E = \sigma/\varepsilon_0$ just outside, and an empty cavity inside it is shielded. {lvl=2}
6. $\vec E = -\nabla V$. Ring on axis $kQ/\sqrt{R^2 + x^2}$; disc $\tfrac{\sigma}{2\varepsilon_0}(\sqrt{R^2 + x^2} - x)$; shell $kQ/R$ inside; solid ball $\tfrac32kQ/R$ at the centre; line charge logarithmic. {lvl=3}
7. Joined conductors share potential, not charge: $q \propto R$ and $\sigma \propto 1/R$ for distant spheres. Earthing fixes $V = 0$, not $q = 0$. {lvl=3}
8. Self-energy: $kQ^2/2R$ for a shell, $3kQ^2/5R$ for a uniform ball. Image of $q$ in an earthed plane is $-q$; the energy is $-kq^2/4d$, half the two-charge value. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Keep the signs of the charges when adding potentials. Never use magnitudes, and never resolve potential into components. {lvl=2}
- "Work done by the field" and "work done by an external agent" have opposite signs. $\Delta K = -q\Delta V$ when only the field acts. {lvl=2}
- $V = 0$ does not imply $E = 0$, and $E = 0$ does not imply $V = 0$. {lvl=2}
- In the energy of a system, count each pair once. With $\tfrac12\sum q_iV_i$, the $\tfrac12$ does that for you. {lvl=2}
- For an infinite line or sheet, you cannot set $V = 0$ at infinity. Use a finite reference point. {lvl=3}
- When both charges are free, use momentum as well as energy. A free target means a larger closest-approach distance. {lvl=3}
- Joined spheres share equal potential, not equal charge. The smaller one has the stronger surface field. {lvl=3}
- For concentric shells, shell $i$ sees each charge inside it as a point charge ($kq/r_i$) and each charge outside it as a constant ($kq/r_j$). {lvl=3}
- With images, the force is that of the two-charge pair but the energy is half. The image field exists only on the side of the real charge. {lvl=4}
:::
