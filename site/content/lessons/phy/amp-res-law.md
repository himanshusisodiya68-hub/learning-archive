---
title: Ampère's circuital law
summary: 'A shortcut that finds the magnetism around a current from its symmetry, with no heavy adding-up at all.'
ncert: ["Class 12 Physics · Ch 4 Moving Charges and Magnetism (§4.6–4.7)"]
up_to: Olympiad
builds_on: [Biot–Savart law, Field lines and compasses, Gauss's law, Area of a circle and annulus]
notes_prompt: Explain, without any equation, why the total of B·dl round a circle centred on a long wire is the same whether the circle is small or large, and why it stays the same when you bend the circle into any other loop that still goes once round the wire.
margin:
  - kind: history
    title: History
    text: "Ørsted found in 1820 that a current deflects a compass. Within weeks Ampère began the experiments on forces between currents that led to his circuital result, published in full around 1826. Maxwell later (1861–1865) found the law fails when currents are not steady and added the displacement-current term. (Dates from memory, [Unverified].)"
  - kind: tip
    title: Board favourite
    text: "Every derivation has four lines: name the symmetry, draw the Amperian loop (circle, rectangle or coaxial circle), compute ∮B·dl as B × (length where B is along the loop), and set it equal to μ₀ × the current threading the loop. Say why the other parts of the loop add nothing."
  - kind: olympiad
    title: Olympiad link
    text: "A cylindrical hole drilled off-axis in a current-carrying rod has a perfectly uniform field (μ₀/2) J × d inside it. This is the magnetic twin of the uniform electric field inside a cavity in a charged sphere, and the same superposition trick solves both."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 4 Moving Charges and Magnetism, §4.6 Ampère's circuital law, §4.7 The solenoid; Examples 4.7–4.8; Exercises 4.2–4.4, 4.8" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 35 Magnetic Field due to a Current (Ampère's law, solenoid, toroid)" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 5 Magnetostatics, §5.3 Divergence and curl of B; §7.3 Maxwell's equations" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 6 The Magnetic Field (Ampère's law, solenoid, field jump at a current sheet)" }
cards:
  - { front: "State Ampère's circuital law and its sign rule.", back: "$\\oint \\vec B\\cdot d\\vec l = \\mu_0 I_{enc}$ for any closed loop and steady currents. Curl the right-hand fingers along the loop direction; currents along the thumb count positive." }
  - { front: "Field of a long thick wire (radius $a$, uniform current $I$) inside and outside?", back: "Inside: $B = \\mu_0 I r/(2\\pi a^2)$, rising linearly. Outside: $B = \\mu_0 I/(2\\pi r)$. Maximum at the surface." }
  - { front: "Field of a long solenoid and of a toroid?", back: "Solenoid: $B = \\mu_0 n I$ inside (uniform), about 0 outside; half that at an end. Toroid: $B = \\mu_0 N I/(2\\pi r)$ inside the core, 0 in the open space inside and outside." }
  - { front: "Field of an infinite sheet with surface current density $K$ (A/m)?", back: "$B = \\mu_0 K/2$ on each side, parallel to the sheet and perpendicular to $K$, opposite on the two sides. Tangential $B$ jumps by $\\mu_0 K$ across the sheet." }
  - { front: "Field inside an off-axis cylindrical hole in a rod carrying uniform current density $\\vec J$?", back: "Uniform: $\\vec B = \\tfrac{\\mu_0}{2}\\vec J\\times\\vec d$, where $\\vec d$ runs from the rod's axis to the hole's axis." }
  - { front: "Why does Ampère's law fail for a charging capacitor?", back: "A flat surface on the loop cuts the wire (current $I$), a bulging one through the gap cuts no current. The law needs $\\nabla\\cdot\\vec J = 0$ (steady currents); Maxwell's displacement current repairs it." }
core:
  idea: 'The line integral of $\vec B$ round any closed loop equals $\mu_0$ times the net steady current threading the loop. When symmetry makes $B$ constant and along the loop, this gives $B$ in one line.'
  formulas:
    - tex: '\oint \vec B\cdot d\vec l = \mu_0\, I_{\text{enc}}'
      label: 'Ampère''s circuital law'
    - tex: 'B = \mu_0 n I'
      label: 'Inside a long solenoid'
    - tex: 'B = \frac{\mu_0 N I}{2\pi r}'
      label: 'Inside a toroid'
  conditions:
    - 'Steady currents only (no changing electric flux)'
    - 'High symmetry so that $B$ is constant and tangential on the Amperian loop: infinite straight wire, infinite sheet, coaxial cylinders'
    - 'Ideal solenoid: infinitely long, tightly wound, field outside taken as zero'
  sign: '$I_{\text{enc}}$ is positive when its direction is related to the sense of going round the loop by the right-hand rule; currents outside the loop add nothing to the circulation.'
outcomes:
  - 'State Ampère''s law and choose an Amperian loop that exploits the symmetry'
  - 'Find the field of a long wire, inside and outside, using $\mu_0 I_{\text{enc}}$'
  - 'Derive the fields of a solenoid and a toroid'
  - 'Handle non-uniform currents, hollow conductors, coaxial cables and current sheets'
  - 'Find the field in a cavity by superposition and state where the law fails'
opener:
  story: |
    Wind a long coil of wire, send a current through it, and measure the magnetic field inside. Now wind a second coil that is five times wider, with the same number of turns in every metre and the same current. It has far more wire in it, and its loops are far bigger.

    You would expect the fat coil to have a stronger field, since it has so much more wire. Or perhaps a weaker one, since the wire is farther from the middle. The measurement says something stranger: the field inside is exactly the same, and it is the same at every point inside, near the wall or on the axis.

    Adding up every bit of wire would take pages of algebra. There is a one-line trick that gives the answer from symmetry alone. First, let's see what the field does. **Which coil has the stronger field inside?**
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A thin long coil and a fat long coil, each with the same turns per metre and the same current, have the same field inside"><text x="160" y="20" style="font-size:11px;fill:var(--muted);text-anchor:middle">same turns per metre, same current in both</text><ellipse cx="30" cy="120" rx="6" ry="22" style="fill:none;stroke:var(--ink);stroke-width:2"/><ellipse cx="50" cy="120" rx="6" ry="22" style="fill:none;stroke:var(--ink);stroke-width:2"/><ellipse cx="70" cy="120" rx="6" ry="22" style="fill:none;stroke:var(--ink);stroke-width:2"/><ellipse cx="90" cy="120" rx="6" ry="22" style="fill:none;stroke:var(--ink);stroke-width:2"/><ellipse cx="110" cy="120" rx="6" ry="22" style="fill:none;stroke:var(--ink);stroke-width:2"/><line x1="14" y1="120" x2="120.0" y2="120.0" style="stroke:var(--c);stroke-width:2.5"/><polygon points="128,120 120.0,116.0 120.0,124.0" style="fill:var(--c)"/><ellipse cx="180" cy="120" rx="11" ry="60" style="fill:none;stroke:var(--ink);stroke-width:2"/><ellipse cx="208" cy="120" rx="11" ry="60" style="fill:none;stroke:var(--ink);stroke-width:2"/><ellipse cx="236" cy="120" rx="11" ry="60" style="fill:none;stroke:var(--ink);stroke-width:2"/><ellipse cx="264" cy="120" rx="11" ry="60" style="fill:none;stroke:var(--ink);stroke-width:2"/><ellipse cx="292" cy="120" rx="11" ry="60" style="fill:none;stroke:var(--ink);stroke-width:2"/><line x1="166" y1="90" x2="296.0" y2="90.0" style="stroke:var(--c);stroke-width:2.5"/><polygon points="304,90 296.0,86.0 296.0,94.0" style="fill:var(--c)"/><line x1="166" y1="120" x2="296.0" y2="120.0" style="stroke:var(--c);stroke-width:2.5"/><polygon points="304,120 296.0,116.0 296.0,124.0" style="fill:var(--c)"/><line x1="166" y1="150" x2="296.0" y2="150.0" style="stroke:var(--c);stroke-width:2.5"/><polygon points="304,150 296.0,146.0 296.0,154.0" style="fill:var(--c)"/><text x="70" y="206" style="font-size:11px;fill:var(--muted);text-anchor:middle">thin coil</text><text x="236" y="206" style="font-size:11px;fill:var(--muted);text-anchor:middle">fat coil</text><text x="160" y="230" style="font-size:11px;fill:var(--muted);text-anchor:middle">the field inside is the same</text></svg>'
life:
  - 'Inside an MRI machine a long coil gives a very even field over the whole space where you lie.'
  - 'The coil of an electromagnet or a relay is a solenoid: more turns per metre or more current, and the pull rises, with no need to change its width.'
  - 'The ring-shaped coil of a toroid, used in many electronics circuits, keeps its field almost entirely inside the ring.'
  - 'A TV cable has its current going one way in the middle wire and back in the outer sheath, so the fields cancel outside and little leaks out.'
  - 'The long toroidal coils of a fusion experiment keep a hot plasma in a ring using the field inside the coil.'
models:
  - name: 'Use the symmetry'
    text: 'When a problem looks the same from many angles, the answer must too. Symmetry cuts a hard calculation to one line, in physics, in a negotiation and in a design.'
  - name: 'Count what is inside, not what is outside'
    text: 'The total at the edge depends only on what is enclosed, not on the shape of the boundary. It is the logic of an audit: look at the closed totals, not every transaction.'
  - name: 'Things can cancel exactly'
    text: 'More wire and more distance cancelled exactly. When two effects pull in opposite ways, find the one number they share before assuming one wins.'
links:
  - leaf: 'phy/gausss-law'
    name: 'Gauss''s law'
    same: 'Same strategy: pick a loop or surface that fits the symmetry, so the field is constant on it, and the total depends only on what is enclosed.'
    differs: 'Gauss counts charge through a closed surface; Ampère counts current through a closed loop. Gauss''s sum is a flux, Ampère''s a circulation.'
symbols:
  - {s: '\oint', means: 'sum round a complete closed loop, ending where you started'}
  - {s: '\vec B', means: 'magnetic field (tesla, T)'}
  - {s: 'd\vec l', means: 'a tiny step along the loop (metres, m)'}
  - {s: '\mu_0', means: 'a fixed number that sets how strongly currents make magnetism (4π×10⁻⁷ T m/A)'}
  - {s: 'I_{\text{enc}}', means: 'net current passing through the loop (ampere, A)'}
  - {s: 'n', means: 'turns of wire per metre of a solenoid (turns per metre)'}
  - {s: 'N', means: 'total number of turns in a coil (a pure number)'}
  - {s: 'r', means: 'distance from the axis or centre (metres, m)'}
next:
  q: 'We can now find the field of a wire anywhere. So put a second wire, carrying its own current, into the field of the first. Each wire carries current and sits in the other''s field: do they pull together, push apart, or ignore each other? And can that define the ampere?'
  leaf: 'phy/forces-between-parallel-currents'
  name: 'Forces between parallel currents'
---

:::hook
q: So what's your guess? Both coils are long, with 1000 turns per metre and 2 A. One is thin (radius 1 cm), one is fat (radius 5 cm). How do the fields on the axis compare?
options: ["The fat coil is stronger, because it has much more wire", "The thin coil is stronger, because its wire is closer to the axis", "They are exactly equal"]
answer: 2
right: Right. The field is B = μ₀nI, and the radius is not in it. The fat coil has more wire, but each bit is farther away, and the two effects cancel exactly, just as for a circle drawn round a wire. Ampère's law shows why in one line.
wrong: More wire and a longer distance to it exactly cancel. The field inside a long coil is B = μ₀nI, with n the turns per metre and I the current, and no radius anywhere. So both coils give the same field, and Ampère's law gets this in one line.
:::

## Circulation: adding up B round a loop {lvl=2 id=s-circ label="Class 12"}

The field of a long straight wire (from the Biot–Savart law) has circular field lines, with
$$B = \frac{\mu_0 I}{2\pi r}.$$

Walk once round one of these circles, radius $r$. Along the way, $\vec B$ points exactly along your path and has the same size everywhere. Multiply the field by the length walked:
$$B \times 2\pi r = \frac{\mu_0 I}{2\pi r}\times 2\pi r = \mu_0 I.$$

The radius has cancelled. A circle of 1 mm and a circle of 1 km give the same answer. The field is weaker far out, but the path is longer in exactly the same ratio.

This "field along the path times length" is called the **circulation** of $\vec B$. For a path where $\vec B$ changes size or direction, chop the path into tiny steps $d\vec l$ and add up only the part of $\vec B$ along each step:
$$\text{circulation} = \oint \vec B\cdot d\vec l = \oint B\cos\theta\,dl.$$

The little circle on the integral sign means the path is **closed**: you end where you started.

Now bend the circle. A step that runs straight outward from the wire is perpendicular to the circular field lines, so it adds nothing. A step along a circle of radius $r$ that turns through angle $d\varphi$ adds $B\,r\,d\varphi = \frac{\mu_0 I}{2\pi}\,d\varphi$, independent of $r$. One full trip round the wire turns through $2\pi$ in total, so **every** closed loop that goes once round the wire gives $\mu_0 I$. A loop that does not go round the wire turns forward and then back, net angle zero, so its circulation is zero.

:::qc
q: A circular loop of radius 4 cm is centred on a long wire carrying 3 A. The radius is doubled to 8 cm. What happens to the circulation of B round the loop?
options: ["It doubles", "It halves", "It stays the same", "It becomes four times smaller"]
answer: 2
right: Right. The field halves but the circumference doubles, so B × 2πr stays μ₀ × 3 A.
wrong: The field at 8 cm is half that at 4 cm, but the loop is twice as long. The product B × 2πr is unchanged, μ₀ × 3 A.
:::

## Ampère's circuital law {lvl=2 id=s-law label="Class 12"}

The wire result extends, by superposition, to any set of steady currents. Each current threading the loop adds its own $\mu_0 I$; each current that does not thread it adds zero.

:::law caption="Ampère's circuital law (NCERT §4.6). The loop is any closed path (the Amperian loop). I_enc is the net current through any surface bounded by the loop. B is the total field from all currents, inside and outside the loop. Valid for steady currents."
$$\oint \vec B\cdot d\vec l = \mu_0\, I_{\text{enc}}$$
:::

**Sign convention.** Choose a direction to walk round the loop. Curl the fingers of your right hand along that direction; your thumb points the positive way through the loop. Currents along the thumb count $+$, currents against it count $-$.

:::figure caption="An Amperian loop walked anticlockwise (as seen), so the thumb points out of the page. I₁ (out of the page, ⊙) counts +, I₂ (into the page, ⊗) counts −, and I₃ lies outside the loop. Then ∮B·dl = μ₀(I₁ − I₂). I₃ still changes B at every point of the loop, but its net contribution to the circulation is zero."
<svg viewBox="0 0 340 200" role="img" aria-label="A closed loop enclosing a current out of the page and a current into the page, with a third current outside">
<path class="ray" d="M60,100 C60,40 150,20 210,40 C270,60 280,130 230,160 C180,190 80,170 60,100 Z"/>
<polyline class="ray" points="160,22 151,27 160,33"/>
<circle class="ln" cx="120" cy="95" r="9"/><circle cx="120" cy="95" r="2.5" style="fill:var(--ink)"/>
<circle class="ln" cx="205" cy="115" r="9"/>
<line class="ln" x1="199" y1="109" x2="211" y2="121"/><line class="ln" x1="211" y1="109" x2="199" y2="121"/>
<circle class="ln" cx="300" cy="45" r="9"/><circle cx="300" cy="45" r="2.5" style="fill:var(--ink)"/>
<text class="k" x="104" y="80">I₁</text><text class="k" x="218" y="112">I₂</text><text class="k" x="288" y="30">I₃</text>
<text x="70" y="192">I_enc = I₁ − I₂</text>
<text x="160" y="16">walk</text>
</svg>
:::

Three points that are easy to get wrong:

- $\vec B$ in the law is the **total** field. A current outside the loop changes $\vec B$ on the loop, but its circulation is zero.
- "Enclosed" means **threading** the loop. If a coil of $N$ turns passes through the loop, the current $I$ crosses the surface $N$ times, so $I_{\text{enc}} = NI$.
- The law is always true for steady currents, but it gives $B$ itself only when symmetry lets you take $B$ outside the integral.

The parallel with Gauss's law is close:

| | Gauss's law (electric) | Ampère's law (magnetic) |
|---|---|---|
| Integral over | a closed surface | a closed loop |
| Quantity | flux $\oint\vec E\cdot d\vec S$ | circulation $\oint\vec B\cdot d\vec l$ |
| Source | $q_{\text{enc}}/\varepsilon_0$ | $\mu_0 I_{\text{enc}}$ |
| Useful when | symmetry makes $E$ constant on the surface | symmetry makes $B$ constant along the loop |

:::qc
q: An Amperian loop encloses a wire carrying 4 A upward and another carrying 6 A downward. A third wire carrying 10 A upward passes just outside the loop. Walking the loop so that "up" is positive, what is the circulation of B?
options: ["μ₀ × 20 A", "μ₀ × 8 A", "−μ₀ × 2 A", "Zero, because the outside wire cancels the rest"]
answer: 2
right: Right. Only the threading currents count, with sign: 4 − 6 = −2 A. The outside wire changes B on the loop but not its circulation.
wrong: Only currents threading the loop count, with sign: +4 A − 6 A = −2 A. The 10 A wire outside contributes zero net circulation, even though it changes B on the loop.
:::

## Choosing the Amperian loop {lvl=2 id=s-choose label="Class 12"}

To get $B$ out of the integral, the loop must follow the symmetry. You want each part of the loop to be either

- **along** $\vec B$ with $B$ constant there (it contributes $B\times$length), or
- **perpendicular** to $\vec B$, or in a region where $B = 0$ (it contributes nothing).

So first use symmetry to find the **direction** of $\vec B$. For a long straight wire, $\vec B$ could in principle have three parts:

- **Radial** (toward or away from the wire). Field lines of $\vec B$ never begin or end (there are no magnetic charges), so the net flux of $\vec B$ out of any closed surface is zero. A radial field would send flux out of every point of a coaxial cylinder. So the radial part is zero.
- **Along the wire.** A rectangular loop with two sides parallel to the wire, both outside it, encloses no current. So this part has the same value at every distance, and it must vanish far away. So it is zero.
- **Round the wire** (circumferential). This is all that is left, and by symmetry it has the same size at every point of a circle round the wire.

Then pick the loop to match: a **circle** round a wire or a rod, a **rectangle** for a solenoid or a sheet, a **coaxial circle** for a toroid.

:::qc
q: You want the field of a long straight wire using Ampère's law. Which Amperian loop makes the calculation possible?
options: ["A square around the wire", "A circle centred on the wire, in a plane perpendicular to it", "A circle in a plane containing the wire", "Any loop at all, because the law is always true"]
answer: 1
right: Right. On that circle B is along the path and constant, so the circulation is just B × 2πr. The law is true for the square too, but B varies along it and cannot be taken out of the integral.
wrong: The law is true for every loop, but it only gives B where B is along the path and constant. That is a circle centred on the wire, perpendicular to it.
:::

## Long straight wire, inside and outside {lvl=2 id=s-wire label="Class 12"}

Take a long straight wire of radius $a$ carrying current $I$ spread uniformly over its cross-section (NCERT Example 4.7). Use a circle of radius $r$ centred on the axis:
$$B\cdot 2\pi r = \mu_0 I_{\text{enc}}.$$

**Outside** ($r > a$): the whole current is enclosed, so
$$B = \frac{\mu_0 I}{2\pi r}.$$

A thick wire looks exactly like a thin wire from outside. Exercise 4.2 is just this: 35 A at 20 cm gives $B = 2\times10^{-7}\times35/0.20 = 3.5\times10^{-5}$ T.

**Inside** ($r < a$): only the fraction of the area inside radius $r$ is enclosed, $I_{\text{enc}} = I\,\dfrac{\pi r^2}{\pi a^2}$. So
$$B = \frac{\mu_0 I}{2\pi a^2}\,r.$$

The field rises linearly from zero on the axis to its largest value $\mu_0 I/(2\pi a)$ at the surface, then falls as $1/r$.

:::figure caption="B against distance r from the axis. Solid: a solid wire with uniform current (linear inside, 1/r outside, continuous at r = a). Dashed: a thin tube of the same radius carrying the same current (zero inside, then a jump to the same 1/r curve)."
<svg viewBox="0 0 340 180" role="img" aria-label="Graph of magnetic field against distance for a solid wire and a thin tube">
<line class="ln" x1="40" y1="150" x2="325" y2="150"/><polyline class="ln" points="319,146 325,150 319,154"/>
<line class="ln" x1="40" y1="150" x2="40" y2="20"/><polyline class="ln" points="36,26 40,20 44,26"/>
<polyline class="ray" points="40,150 100,50 120,75 140,90 160,100 190,110 220,116.7 250,121.4 280,125 315,128"/>
<line class="faint" x1="100" y1="150" x2="100" y2="50"/>
<line class="faint" x1="44" y1="148" x2="98" y2="148"/>
<text class="k" x="96" y="166">a</text><text class="k" x="318" y="168">r</text><text class="k" x="26" y="26">B</text>
<text x="108" y="44">μ₀I/2πa</text><text x="52" y="110">∝ r</text><text x="220" y="108">∝ 1/r</text>
</svg>
:::

**Direction.** Grip the wire with the right hand, thumb along the current; the fingers curl along $\vec B$. In Exercise 4.3 the current runs north to south and the point is east of the wire: with the thumb pointing south, the fingers on the east side point vertically **up**.

:::qc
q: A wire of radius 2 mm carries a uniform current. The field at its surface is 100 µT. What is the field 1 mm from the axis, and 4 mm from the axis?
options: ["50 µT and 50 µT", "25 µT and 50 µT", "50 µT and 25 µT", "100 µT and 50 µT"]
answer: 0
right: Right. Inside, B ∝ r, so half the radius gives half the field, 50 µT. Outside, B ∝ 1/r, so twice the radius also gives 50 µT.
wrong: Inside, B grows in proportion to r: at 1 mm it is 50 µT. Outside, B falls as 1/r: at 4 mm (twice the radius) it is also 50 µT.
:::

## The solenoid {lvl=2 id=s-solenoid label="Class 12"}

A **solenoid** is a long wire wound in a tight helix: $n$ turns per unit length, each carrying $I$. Near the middle of a long solenoid the field has a simple form, which experiment and the Biot–Savart law both show:

- **Inside:** along the axis, and the same everywhere across the cross-section.
- **Outside:** very weak. The field lines that are packed inside spread out over the whole of the outside space.

Ampère's law then gives the size. Take the rectangle $abcd$ in the figure, with side $ab$ (length $h$) inside and parallel to the axis, side $cd$ outside, and sides $bc$, $da$ crossing the winding.

:::figure caption="Section through a long solenoid. Top row: current into the page (⊗); bottom row: out of the page (⊙). The field inside points along the axis (here to the left). The rectangle abcd, walked a → b → c → d, threads three turns of the bottom row, so I_enc = 3I. Only side ab contributes to the circulation."
<svg viewBox="0 0 440 190" role="img" aria-label="Cross-section of a solenoid with a rectangular Amperian loop crossing the lower winding">
<g>
<circle class="ln" cx="60" cy="40" r="7"/><circle class="ln" cx="100" cy="40" r="7"/><circle class="ln" cx="140" cy="40" r="7"/><circle class="ln" cx="180" cy="40" r="7"/><circle class="ln" cx="220" cy="40" r="7"/><circle class="ln" cx="260" cy="40" r="7"/><circle class="ln" cx="300" cy="40" r="7"/><circle class="ln" cx="340" cy="40" r="7"/><circle class="ln" cx="380" cy="40" r="7"/>
<path class="ln" d="M55,35 l10,10 M65,35 l-10,10 M95,35 l10,10 M105,35 l-10,10 M135,35 l10,10 M145,35 l-10,10 M175,35 l10,10 M185,35 l-10,10 M215,35 l10,10 M225,35 l-10,10 M255,35 l10,10 M265,35 l-10,10 M295,35 l10,10 M305,35 l-10,10 M335,35 l10,10 M345,35 l-10,10 M375,35 l10,10 M385,35 l-10,10"/>
</g>
<g>
<circle class="ln" cx="60" cy="140" r="7"/><circle class="ln" cx="100" cy="140" r="7"/><circle class="ln" cx="140" cy="140" r="7"/><circle class="ln" cx="180" cy="140" r="7"/><circle class="ln" cx="220" cy="140" r="7"/><circle class="ln" cx="260" cy="140" r="7"/><circle class="ln" cx="300" cy="140" r="7"/><circle class="ln" cx="340" cy="140" r="7"/><circle class="ln" cx="380" cy="140" r="7"/>
<g style="fill:var(--ink)"><circle cx="60" cy="140" r="2"/><circle cx="100" cy="140" r="2"/><circle cx="140" cy="140" r="2"/><circle cx="180" cy="140" r="2"/><circle cx="220" cy="140" r="2"/><circle cx="260" cy="140" r="2"/><circle cx="300" cy="140" r="2"/><circle cx="340" cy="140" r="2"/><circle cx="380" cy="140" r="2"/></g>
</g>
<line class="ln" x1="400" y1="68" x2="40" y2="68"/><polyline class="ln" points="48,64 40,68 48,72"/>
<line class="ln" x1="400" y1="112" x2="40" y2="112"/><polyline class="ln" points="48,108 40,112 48,116"/>
<polyline class="ray" points="280,90 160,90 160,175 280,175 280,90"/>
<polyline class="ray" points="226,86 218,90 226,94"/>
<text class="k" x="284" y="86">a</text><text class="k" x="146" y="86">b</text><text class="k" x="146" y="186">c</text><text class="k" x="284" y="186">d</text>
<text class="k" x="410" y="72">B</text><text x="210" y="104">h</text>
</svg>
:::

Go round the four sides:

- $ab$ (inside, along $\vec B$): contributes $Bh$.
- $bc$ and $da$: perpendicular to $\vec B$ inside, and outside the field is (nearly) zero. They contribute nothing.
- $cd$ (outside): $B \approx 0$, so nothing.

The rectangle is threaded by the turns lying between $a$ and $b$: there are $nh$ of them, so $I_{\text{enc}} = nhI$. Hence $Bh = \mu_0 nhI$:

:::law caption="Field inside a long solenoid (NCERT §4.7). n = turns per unit length. Uniform over the cross-section; independent of the radius."
$$B = \mu_0 n I$$
:::

**Why is the field uniform and the outside field zero?** Put a rectangle entirely inside: it threads no current, so the fields on its two long sides are equal. The inside field is therefore the same at every distance from the axis. A rectangle entirely outside also threads nothing, so the outside field is the same at every distance. Far away it must vanish, so it is zero everywhere outside an ideal infinite solenoid.

:::worked title="NCERT Example 4.8 and Exercise 4.8"
A solenoid 0.5 m long with 500 turns carries 5 A: $n = 1000$ m⁻¹ and $B = 4\pi\times10^{-7}\times1000\times5 = 6.28\times10^{-3}$ T. The radius (1 cm) does not appear: only $l \gg a$ matters.

Exercise 4.8 has 5 layers of 400 turns on 0.80 m: $n = 2000/0.80 = 2500$ m⁻¹. With 8.0 A, $B = 4\pi\times10^{-7}\times2500\times8.0 = 2.5\times10^{-2}$ T. Each layer adds its own $\mu_0 n_{\text{layer}} I$ (the field outside an inner layer is zero, so outer layers do not affect the argument), so the layers simply add.
:::

:::qc
q: A long solenoid is rewound with the same wire on a former of twice the radius, keeping the number of turns per metre and the current the same. The field inside
options: ["doubles", "halves", "stays the same", "becomes four times larger"]
answer: 2
right: Right. B = μ₀nI does not contain the radius. A wider solenoid has the same field over a larger area.
wrong: B = μ₀nI has no radius in it. Only the turns per metre and the current matter.
:::

## The toroid {lvl=2 id=s-toroid label="Class 12"}

Bend a solenoid round into a ring and join its ends: this is a **toroid**, $N$ turns in total, each carrying $I$. There are now no ends for field lines to escape from. By symmetry the field lines are circles coaxial with the ring.

Use circles of radius $r$ centred on the ring's centre, in its plane:

- **Open space inside the ring** (circle smaller than the core): it threads no current. $B\cdot2\pi r = 0$, so $B = 0$.
- **Inside the core**: the circle passes through all $N$ turns, each once, in the same direction. $B\cdot 2\pi r = \mu_0 N I$.
- **Outside the ring**: every turn crosses the flat disc of the circle twice, once going up and once going down. Net current zero, so $B = 0$.

:::law caption="Field inside the core of a toroid (NCERT §4.7). r is the distance from the centre of the ring. For a thin ring of mean radius R, N/2πR = n and this becomes μ₀nI."
$$B = \frac{\mu_0 N I}{2\pi r}$$
:::

A toroid holds all its field inside the core. That is why toroidal cores are used for transformers that must not disturb nearby circuits, and why the tokamak fusion reactor has a toroidal shape.

:::worked title="A toroid with 1000 turns"
Mean radius 10 cm, 1000 turns, 1 A: $B = \dfrac{4\pi\times10^{-7}\times1000\times1}{2\pi\times0.10} = 2.0\times10^{-3}$ T. If the core runs from $r = 9$ cm to $r = 11$ cm, the field varies from 2.22 mT at the inner edge to 1.82 mT at the outer edge: the field is not quite uniform across a fat toroid.
:::

:::qc
q: A toroid has 600 turns carrying 2 A. What is the circulation of B round a circle that lies wholly outside the ring, but in its plane and concentric with it?
options: ["μ₀ × 1200 A", "μ₀ × 600 A", "Zero", "μ₀ × 2 A"]
answer: 2
right: Right. Each turn crosses that circle's disc twice in opposite directions, so the net current is zero.
wrong: Each turn passes through the disc of that circle once going up and once coming down. The net threading current is zero, so the circulation is zero.
:::

## Non-uniform currents, tubes and the coaxial cable {lvl=3 id=s-thick label="JEE"}

With cylindrical symmetry, Ampère's law always gives
$$B(r) = \frac{\mu_0\, I_{\text{enc}}(r)}{2\pi r},$$
so the whole job is to find the current inside radius $r$. When the current density $J$ varies with $r$, add up thin rings: a ring of radius $r'$ and width $dr'$ has area $2\pi r'\,dr'$, so
$$I_{\text{enc}}(r) = \int_0^r J(r')\,2\pi r'\,dr'.$$

**Current density proportional to $r$.** With $J = J_0 r/a$ in a rod of radius $a$, $I_{\text{enc}} = 2\pi J_0 r^3/(3a)$ and the total is $I = 2\pi J_0 a^2/3$. So $I_{\text{enc}} = I r^3/a^3$ and
$$B = \frac{\mu_0 I r^2}{2\pi a^3}\quad(r<a).$$
The field now grows as $r^2$ inside, but still joins $\mu_0 I/(2\pi a)$ smoothly at the surface.

**A thick tube** (inner radius $b$, outer $c$, uniform current $I$): $B = 0$ in the hollow, $B = \dfrac{\mu_0 I}{2\pi r}\dfrac{r^2 - b^2}{c^2 - b^2}$ in the metal, and $\mu_0 I/(2\pi r)$ outside. The hollow is field-free whatever the tube's thickness, just as the inside of a charged shell is field-free.

:::worked title="A coaxial cable"
A solid inner conductor (radius $a$) carries $I$ one way. A coaxial tube (radii $b$ to $c$) carries $I$ back. Circles centred on the axis give:

- $r < a$: $B = \mu_0 I r/(2\pi a^2)$.
- $a < r < b$ (the insulation): $B = \mu_0 I/(2\pi r)$. For $I = 2$ A at $r = 3$ mm: $B = 2\times10^{-7}\times2/0.003 = 1.3\times10^{-4}$ T.
- $b < r < c$: $I_{\text{enc}} = I\left[1 - \dfrac{r^2 - b^2}{c^2 - b^2}\right]$, falling to zero at $c$.
- $r > c$: $I_{\text{enc}} = I - I = 0$, so $B = 0$.

The cable keeps its magnetic field to itself. That is why coaxial cables neither radiate much nor pick up much interference.
:::

:::qc
q: A coaxial cable carries 3 A out along the inner conductor and 3 A back along the outer tube. What is the field 1 cm outside the outer tube?
options: ["μ₀ × 3 A divided by 2πr", "μ₀ × 6 A divided by 2πr", "Zero", "It depends on the radii of the conductors"]
answer: 2
right: Right. A circle outside the cable threads +3 A and −3 A, net zero, and cylindrical symmetry makes B the same all round it, so B = 0.
wrong: A circle outside both conductors threads +3 A and −3 A: net zero. Since B has the same size all round the circle, B itself is zero.
:::

## Current sheets {lvl=3 id=s-sheet label="JEE"}

Lay many parallel wires side by side in a flat layer. In the limit this is a **current sheet**, described by its **surface current density** $K$: the current per unit width across the sheet, in A/m.

By symmetry the field is parallel to the sheet and perpendicular to $K$, with equal size on the two sides but opposite directions (as each wire's circular field suggests). Take a rectangle crossing the sheet, with sides of length $l$ parallel to the sheet, one on each side:
$$2Bl = \mu_0 K l \quad\Rightarrow\quad B = \frac{\mu_0 K}{2}.$$

:::figure caption="An infinite sheet seen edge-on, with current out of the page (⊙) of K amperes per metre of width. Above the sheet B points left; below, right. The rectangle threads a current Kl; only its two horizontal sides (length l) contribute, giving 2Bl = μ₀Kl."
<svg viewBox="0 0 400 180" role="img" aria-label="Edge-on current sheet with field arrows above and below and a rectangular loop crossing it">
<line class="faint" x1="20" y1="90" x2="380" y2="90"/>
<g style="fill:var(--ink)"><circle cx="40" cy="90" r="2"/><circle cx="70" cy="90" r="2"/><circle cx="100" cy="90" r="2"/><circle cx="130" cy="90" r="2"/><circle cx="160" cy="90" r="2"/><circle cx="190" cy="90" r="2"/><circle cx="220" cy="90" r="2"/><circle cx="250" cy="90" r="2"/><circle cx="280" cy="90" r="2"/><circle cx="310" cy="90" r="2"/><circle cx="340" cy="90" r="2"/><circle cx="370" cy="90" r="2"/></g>
<rect class="ray" x="150" y="55" width="110" height="70"/>
<line class="ln" x1="330" y1="40" x2="270" y2="40"/><polyline class="ln" points="277,36 270,40 277,44"/>
<line class="ln" x1="90" y1="40" x2="30" y2="40"/><polyline class="ln" points="37,36 30,40 37,44"/>
<line class="ln" x1="270" y1="142" x2="330" y2="142"/><polyline class="ln" points="323,138 330,142 323,146"/>
<line class="ln" x1="30" y1="142" x2="90" y2="142"/><polyline class="ln" points="83,138 90,142 83,146"/>
<text class="k" x="290" y="32">B</text><text class="k" x="290" y="162">B</text>
<text class="k" x="196" y="50">l</text><text class="k" x="355" y="80">K ⊙</text>
</svg>
:::

Two lessons hide in this result:

- **The field jumps by $\mu_0 K$ across the sheet**: from $+\mu_0K/2$ to $-\mu_0K/2$. This holds for any current sheet, flat or curved: the component of $\vec B$ parallel to the sheet (and perpendicular to $\vec K$) jumps by $\mu_0 K$, whatever other fields are present. It is the magnetic twin of the $\sigma/\varepsilon_0$ jump of $E$ across a charged sheet.
- **Two sheets with opposite currents** ($+K$ and $-K$): between them the fields add, $B = \mu_0 K$; outside they cancel, $B = 0$. A solenoid is exactly this, rolled into a tube: the winding is a sheet with $K = nI$, so $B = \mu_0 nI$ inside and 0 outside.

:::qc
q: Two large parallel plates carry equal surface currents K in the same direction. What is the field between them?
options: ["μ₀K", "μ₀K/2", "Zero", "2μ₀K"]
answer: 2
right: Right. Between the plates each sheet's μ₀K/2 points the opposite way, so they cancel. Outside they add to μ₀K.
wrong: Each sheet gives μ₀K/2, with opposite directions on its two sides. Between two sheets with the same current direction the fields cancel; outside they add to μ₀K.
:::

## The ends of a real solenoid {lvl=3 id=s-ends label="JEE"}

Ampère's law needs the ideal infinite solenoid. A real one has ends, and there the field is weaker.

**At the centre of an end face, $B = \tfrac12\mu_0 nI$.** Imagine a second identical long solenoid joined on at that end. Together they form one long solenoid, with field $\mu_0 nI$ at the joint. By symmetry each half supplies the same axial field at the joint. So one half alone gives $\tfrac12\mu_0 nI$.

**Anywhere on the axis of a finite solenoid** (radius $R$), adding the Biot–Savart fields of its rings gives
$$B = \frac{\mu_0 n I}{2}\left(\cos\alpha_1 + \cos\alpha_2\right),$$
where $\alpha_1, \alpha_2$ are the half-angles of the cones from the point to the rims of the two ends: $\cos\alpha = x/\sqrt{x^2+R^2}$ for an end at distance $x$. (The derivation belongs with the Biot–Savart law.) Deep inside a long solenoid both cosines are 1, giving $\mu_0 nI$. At an end, one is about 1 and the other 0, giving half.

Example: a solenoid 20 cm long and 5 cm in radius. At its centre $\cos\alpha = 10/\sqrt{10^2 + 5^2} = 0.894$, so $B = 0.894\,\mu_0 nI$: about 11% below the ideal value.

A last subtlety: a helical winding also carries a net current $I$ **along** the solenoid, from one end to the other. Outside, that gives a weak field $\mu_0 I/(2\pi r)$ round the solenoid, like a single straight wire. Just outside the winding ($r \approx R$) this is smaller than the inside field $\mu_0 nI$ by the factor $1/(2\pi R n)$, one over the number of turns in a length $2\pi R$. With hundreds of turns per centimetre of circumference it is usually ignored.

:::qc
q: The field deep inside a long solenoid is 8 mT. What is the field on the axis exactly at one of its ends?
options: ["8 mT", "4 mT", "2 mT", "Zero"]
answer: 1
right: Right. Two semi-infinite solenoids joined end to end make an infinite one, and each supplies half the field at the joint, so 4 mT.
wrong: Join a second identical solenoid at that end: the pair makes 8 mT at the joint, and each half supplies the same amount. So one end alone gives 4 mT.
:::

## A hole in a current-carrying rod {lvl=4 id=s-cavity label="Olympiad"}

A long rod of radius $R$ carries a uniform current density $\vec J$ along its axis. A long cylindrical hole is drilled parallel to the axis, but off-centre. What is the field inside the hole?

Ampère's law alone cannot answer this: the symmetry is gone. **Superposition** restores it. The rod with the hole is

(full rod carrying $+\vec J$) + (a rod filling the hole, carrying $-\vec J$).

Each of these has cylindrical symmetry. Inside a full rod, from the thick-wire result, $B = \mu_0 J r/2$, circling the axis. In vector form, with $\vec r$ the perpendicular vector from the axis to the point:
$$\vec B = \frac{\mu_0}{2}\,\vec J\times\vec r.$$

At a point in the hole, with $\vec r$ measured from the rod's axis and $\vec r^{\prime}$ from the hole's axis,
$$\vec B = \frac{\mu_0}{2}\vec J\times\vec r - \frac{\mu_0}{2}\vec J\times\vec r^{\prime} = \frac{\mu_0}{2}\vec J\times(\vec r - \vec r^{\prime}) = \frac{\mu_0}{2}\vec J\times\vec d,$$
where $\vec d$ runs from the rod's axis to the hole's axis.

:::figure caption="A rod (axis O) with an off-axis hole (axis O′), current density J out of the page. For any point in the hole, r − r′ = d, so the field is the same everywhere in it: (μ₀/2) J × d, perpendicular to d (arrows)."
<svg viewBox="0 0 300 200" role="img" aria-label="Circular rod cross-section with an off-centre circular hole containing parallel field arrows">
<circle class="m2" cx="130" cy="100" r="80" style="stroke:var(--phy);stroke-width:1.6"/>
<circle cx="175" cy="100" r="32" style="fill:var(--surface, #fff);stroke:var(--phy);stroke-width:1.6"/>
<circle cx="130" cy="100" r="2.5" style="fill:var(--ink)"/><circle cx="175" cy="100" r="2.5" style="fill:var(--ink)"/>
<line class="ln" x1="130" y1="100" x2="171" y2="100"/><polyline class="ln" points="165,96 171,100 165,104"/>
<line class="ln" x1="160" y1="124" x2="160" y2="80"/><polyline class="ln" points="156,86 160,80 164,86"/>
<line class="ln" x1="190" y1="124" x2="190" y2="80"/><polyline class="ln" points="186,86 190,80 194,86"/>
<text class="k" x="116" y="96">O</text><text class="k" x="178" y="114">O′</text><text class="k" x="146" y="94">d</text>
<text class="k" x="195" y="78">B</text>
<circle class="ln" cx="85" cy="70" r="7"/><circle cx="85" cy="70" r="2" style="fill:var(--ink)"/><text class="k" x="70" y="58">J</text>
<text x="215" y="185">uniform B in hole</text>
</svg>
:::

The field in the hole is **uniform**: the same size and direction everywhere, perpendicular to the line joining the axes. A centred hole ($d = 0$) has no field, matching the thick-tube result. This is how some accelerator magnets get a clean uniform field from currents [Inference: the idea of overlapping current distributions; real designs vary].

:::qc
q: In a rod with an off-axis hole, the hole's axis is moved twice as far from the rod's axis (the hole stays inside the rod, J unchanged). The field in the hole
options: ["doubles", "halves", "stays the same", "becomes non-uniform"]
answer: 0
right: Right. B = (μ₀/2) J d, so it is proportional to the offset d and stays uniform.
wrong: The field in the hole is (μ₀/2) J × d: still uniform, and proportional to the offset d. Doubling d doubles it.
:::

## Magnetic pressure {lvl=4 id=s-pressure label="Olympiad"}

A current sheet sits in the field of the rest of the world and feels a force. What field acts on it? Just above the sheet the field is $B_1$, just below $B_2$, and they differ by $\mu_0 K$ (the sheet's own jump). The sheet's own field ($\pm\mu_0K/2$, opposite on the two sides) cannot push the sheet as a whole; only the field of everything else acts, and that is the **average** $(B_1+B_2)/2$. This is the same reasoning as for the surface-charge pressure in Gauss's law:

:::law caption="Force per unit area on a current sheet: K times the average of the tangential fields on its two sides. The force on a wire is IL × B; per unit area of sheet it is K × B_avg."
$$\vec f = \vec K\times\frac{\vec B_1 + \vec B_2}{2}$$
:::

For a solenoid, $B_1 = B$ inside, $B_2 = 0$ outside and $K = nI = B/\mu_0$. So the winding feels an outward pressure
$$p = K\cdot\frac{B}{2} = \frac{B^2}{2\mu_0}.$$
This makes sense: opposite sides of each turn carry opposite currents, and antiparallel currents repel (see Forces between parallel currents). Neighbouring turns carry parallel currents and attract, so the solenoid is also squeezed along its length.

:::worked title="An MRI magnet"
A superconducting MRI solenoid with $B = 3$ T [typical value, Unverified]: $p = \dfrac{3^2}{2\times4\pi\times10^{-7}} = 3.6\times10^{6}$ Pa, about 35 atmospheres pushing the windings outward. The coil must be built like a pressure vessel. The same expression $B^2/2\mu_0$ is also the **energy density** of the magnetic field (pressure and energy per unit volume have the same units, N/m² = J/m³).
:::

:::qc
q: The current in a solenoid is doubled. By what factor does the outward pressure on its windings change?
options: ["2", "4", "√2", "It does not change"]
answer: 1
right: Right. B doubles and p = B²/2μ₀, so the pressure quadruples.
wrong: Doubling I doubles B, and the pressure is B²/2μ₀, so it goes up four times.
:::

## Where Ampère's law stops {lvl=4 id=s-limits label="Olympiad"}

**Differential form.** Apply the law to a tiny loop round a point. The circulation per unit area of a loop is the **curl** of $\vec B$, so
$$\nabla\times\vec B = \mu_0\vec J.$$
Together with $\nabla\cdot\vec B = 0$ (no magnetic charges), this is all of magnetostatics. The Biot–Savart law and Ampère's law are equivalent statements, just as Coulomb's and Gauss's laws are.

**It needs steady currents.** The divergence of a curl is always zero, so the law forces $\nabla\cdot\vec J = 0$: no charge may pile up anywhere. Two consequences:

- A **finite piece of wire** is not a steady current on its own (charge would pile up at its ends). You cannot get its field from Ampère's law with a circle; Biot–Savart gives $\frac{\mu_0 I}{4\pi r}(\sin\theta_1 + \sin\theta_2)$, which is less than $\mu_0 I/(2\pi r)$.
- A **charging capacitor** breaks the law outright. Draw a circle round the wire leading to one plate. A flat disc on that circle is crossed by the current $I$. A bag-shaped surface on the same circle, bulging between the plates, is crossed by no current at all. The circulation cannot be both $\mu_0 I$ and zero.

Maxwell repaired this by adding a term for the changing electric field between the plates, the **displacement current**. That repair is the subject of the lesson Displacement current. For every steady-current problem in this lesson, the law as stated is exact.

:::qc
q: A circle surrounds the wire leading to a capacitor plate while the capacitor charges with current I. Why can the original Ampère's law not decide the circulation of B round this circle?
options: ["B is not constant on the circle", "Different surfaces bounded by the same circle are crossed by different currents", "The current is too small", "Capacitors produce no magnetic field"]
answer: 1
right: Right. A flat disc is crossed by I, a surface bulging through the gap by nothing. The enclosed current is ambiguous because charge piles up on the plate; the displacement current fixes it.
wrong: The trouble is the enclosed current: a flat disc on the circle is crossed by I, while a surface bulging through the capacitor gap is crossed by none. Charge is piling up, so the current is not steady.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Round a long wire, $B\times2\pi r = \mu_0 I$ for every radius: the field weakens as $1/r$ while the path grows as $r$. {lvl=2}
2. Ampère's law: $\oint\vec B\cdot d\vec l = \mu_0 I_{\text{enc}}$ for any closed loop and steady currents. Right-hand rule for signs; currents outside give zero net circulation; a coil of $N$ turns threading the loop counts $NI$. {lvl=2}
3. It yields $B$ only with symmetry: circle for a wire, rectangle for a solenoid or sheet, coaxial circle for a toroid. Thick wire: $\mu_0Ir/2\pi a^2$ inside, $\mu_0I/2\pi r$ outside. {lvl=2}
4. Solenoid: $B = \mu_0 nI$ inside, uniform and independent of radius, about 0 outside. Toroid: $\mu_0NI/2\pi r$ in the core, 0 elsewhere. {lvl=2}
5. With cylindrical symmetry $B = \mu_0 I_{\text{enc}}(r)/2\pi r$, $I_{\text{enc}} = \int J\,2\pi r\,dr$. Hollow regions are field-free; outside a coaxial cable $B = 0$. Sheet: $\mu_0K/2$; tangential $B$ jumps by $\mu_0K$. Solenoid end: half the inside field. {lvl=3}
6. Off-axis hole in a rod: uniform $\vec B = \frac{\mu_0}{2}\vec J\times\vec d$. Magnetic pressure $B^2/2\mu_0$ on a winding. $\nabla\times\vec B = \mu_0\vec J$ needs steady currents; a charging capacitor needs the displacement current. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Ampère's law is always true, but $B$ comes out of the integral only when it is constant and along the loop. Do not use it for a finite wire, a single circular loop or a short coil. {lvl=2}
- Zero circulation does **not** mean zero field on the loop. A loop beside a wire has zero circulation but $B \neq 0$ all along it. {lvl=2}
- In $B = \mu_0 nI$, $n$ is turns per **metre**, not the total number of turns; multiple layers simply add their turns. The radius never enters. {lvl=2}
- For a toroid use $r$ at the point, not the outer or inner radius, and count all $N$ turns. {lvl=2}
- With a non-uniform $J$, integrate $J\,2\pi r\,dr$; do not multiply $J$ at one radius by the area. {lvl=3}
- A current sheet gives $\mu_0K/2$, a pair with opposite currents $\mu_0K$ between them. The field of a sheet does not fall off with distance. {lvl=3}
- A hole or a missing piece: think "full body plus a body with $-J$" (superposition), not Ampère directly. {lvl=4}
- Force on a sheet uses the **average** of the fields on its two sides: pressure $B^2/2\mu_0$, not $B^2/\mu_0$. {lvl=4}
:::
