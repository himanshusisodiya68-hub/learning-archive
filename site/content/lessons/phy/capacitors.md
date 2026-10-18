---
title: Capacitors and dielectrics
summary: 'How two close metal plates can store charge like a tiny rechargeable tank, and what an insulator between them does.'
ncert: ["Class 12 Physics · Ch 2 Electrostatic Potential and Capacitance (§2.10–2.15)"]
up_to: Olympiad
builds_on: [Electric field, Gauss's law, Electrostatic potential, Conductors in electrostatics]
notes_prompt: Explain in your own words why a battery that charges a capacitor supplies energy QV but the capacitor ends up storing only ½QV, and where the other half goes.
margin:
  - kind: history
    title: History
    text: "The first capacitor was the Leyden jar, a glass jar coated with metal foil inside and out, found independently by Ewald von Kleist and Pieter van Musschenbroek around 1745–46. The unit, the farad, honours Michael Faraday, who introduced the idea of the dielectric constant. [Unverified: names and dates recalled from memory.]"
  - kind: tip
    title: Constant Q or constant V?
    text: Before any capacitor question, ask whether the battery is still connected. Connected means V is fixed and Q changes; disconnected means Q is fixed and V changes. Half the classic mistakes come from skipping this question.
  - kind: olympiad
    title: Olympiad link
    text: A network of initially uncharged capacitors obeys the same equations as a resistor network with each capacitance playing the role of a conductance 1/R. Every resistor-network trick (symmetry, balanced bridge, infinite ladder) carries over, with series and parallel rules swapped.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 2 Electrostatic Potential and Capacitance, §2.10–2.15" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 31 Capacitors [Unverified chapter number]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.3 Capacitance. Energy of an electric field" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "§2.5 Conductors (capacitors); Ch. 4 Electric fields in matter" }
cards:
  - { front: "Capacitance of a parallel-plate capacitor, with and without a dielectric filling the gap?", back: "$C_0 = \\varepsilon_0 A/d$; filled with dielectric constant $K$, $C = K\\varepsilon_0 A/d$." }
  - { front: "A slab of thickness t and dielectric constant K fills the full area of a gap d. Capacitance?", back: "$C = \\dfrac{\\varepsilon_0 A}{d - t + t/K}$. A metal slab ($K\\to\\infty$) gives $\\varepsilon_0A/(d-t)$." }
  - { front: "Energy stored in a capacitor, and the energy density of the field?", back: "$U = \\tfrac12 CV^2 = \\tfrac12 QV = Q^2/2C$; $u = \\tfrac12\\varepsilon_0 E^2$ (in a dielectric, $\\tfrac12 K\\varepsilon_0E^2$)." }
  - { front: "Energy lost when C1 at V1 and C2 at V2 are joined like plate to like plate?", back: "$\\Delta U = \\dfrac{C_1C_2}{2(C_1+C_2)}(V_1-V_2)^2$, as heat and radiation, whatever the wire resistance. Joined opposite plates: use $V_1+V_2$." }
  - { front: "Force between the plates of a charged parallel-plate capacitor?", back: "$F = Q^2/(2\\varepsilon_0 A) = \\tfrac12 QE$. Each plate feels only the other plate's field, $\\sigma/2\\varepsilon_0$." }
  - { front: "Force pulling a dielectric slab (width b) into a capacitor held at voltage V?", back: "$F = \\tfrac12 V^2\\,dC/dx = \\varepsilon_0(K-1)bV^2/(2d)$, independent of how far it is in. At constant Q, $F = (Q^2/2C^2)\\,dC/dx$, which falls as the slab goes in." }
core:
  idea: 'A capacitor is two conductors holding $+Q$ and $-Q$; since $V\propto Q$, the ratio $C = Q/V$ depends only on geometry and the insulator. For parallel plates $C = \varepsilon_0A/d$, a dielectric multiplies it by $K$, and the stored energy is $\tfrac12CV^2$.'
  formulas:
    - tex: 'C = \frac{Q}{V}'
      label: 'Capacitance'
    - tex: 'C = \frac{K\varepsilon_0 A}{d}'
      label: 'Parallel plates (K = 1 for vacuum)'
    - tex: 'U = \frac{Q^2}{2C} = \frac12 CV^2'
      label: 'Stored energy'
  conditions:
    - 'Plates large compared with the gap, so fringing is neglected'
    - 'Equal and opposite charges on the two conductors, with a linear dielectric'
    - 'Series islands start neutral; battery connected means V fixed, disconnected means Q fixed'
  sign: 'Capacitors combine opposite to resistors: series adds reciprocals, parallel adds directly. Always decide first whether V or Q is held fixed.'
outcomes:
  - 'Calculate C for parallel-plate capacitors, with and without dielectrics or partial slabs'
  - 'Find the equivalent capacitance of series and parallel combinations, and the charge and voltage on each capacitor'
  - 'Calculate stored energy and energy density, and explain where the batterys other half goes'
  - 'Derive the capacitance of spherical and cylindrical capacitors and the energy lost in charge sharing'
  - 'Find forces on plates and dielectrics at constant Q and constant V, and solve symmetric networks'
opener:
  story: |
    Your phone screen is a sheet of glass with no buttons on it and no pressure sensor you can feel. Yet it knows within a millimetre where your finger is, even if you touch so lightly that you barely press.

    Here is the odd part. It works for a bare fingertip, and even for a banana. But a thick woollen glove or a plastic pen does nothing, though you press just as hard. So what is the screen actually sensing?

    The answer is that your finger and a hidden grid of tiny metal strips under the glass form a **capacitor**: two conductors separated by an insulator. Your finger changes how much charge the strips can hold, and the phone feels that change. This lesson is about that sneaky device, found inside every gadget you own.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Side view of a touch screen: a finger above a glass layer above a grid of metal sensor strips, forming a capacitor"><rect x="104" y="24" width="112" height="56" rx="26" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="132" y="56" style="font-size:11px;fill:var(--ink)">finger</text><rect x="40" y="110" width="240" height="14" style="fill:color-mix(in srgb,var(--chem) 22%,var(--surface));stroke:var(--chem);stroke-width:1.5"/><text x="228" y="102" style="font-size:11px;fill:var(--muted)">glass</text><g style="fill:var(--ink)"><rect x="52" y="148" width="20" height="8"/><rect x="88" y="148" width="20" height="8"/><rect x="124" y="148" width="20" height="8"/><rect x="160" y="148" width="20" height="8"/><rect x="196" y="148" width="20" height="8"/><rect x="232" y="148" width="20" height="8"/></g><text x="64" y="184" style="font-size:11px;fill:var(--muted)">grid of metal sensor strips</text><g style="font-size:13px"><text x="124" y="100" style="fill:var(--c)">+</text><text x="150" y="102" style="fill:var(--c)">+</text><text x="176" y="100" style="fill:var(--c)">+</text><text x="128" y="144" style="fill:var(--bad)">&#8722;</text><text x="164" y="144" style="fill:var(--bad)">&#8722;</text></g><g style="fill:none;stroke:var(--c);stroke-width:1.5;stroke-dasharray:3 4"><path d="M132 84 L132 144"/><path d="M152 84 L152 144"/><path d="M172 84 L172 144"/></g><path d="M262 84 L262 146" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><path d="M257 92 L262 82 L267 92Z" style="fill:var(--ink)"/><path d="M257 138 L262 148 L267 138Z" style="fill:var(--ink)"/><text x="244" y="72" style="font-size:11px;fill:var(--ink)">gap d</text><text x="64" y="214" style="font-size:11px;fill:var(--ink)">more gap, less capacitance</text></svg>'
life:
  - 'A touch screen senses your finger as a tiny change in capacitance.'
  - 'A camera flash charges up slowly from small batteries, then dumps its energy in about a thousandth of a second.'
  - 'A defibrillator charges a capacitor and then releases the energy in one sharp pulse through the chest.'
  - 'The capacitor in a ceiling fan gives its motor the starting kick and keeps it turning smoothly.'
  - 'Mobile chargers use capacitors to smooth out the ripples left after turning mains AC into steady DC.'
symbols:
  - { s: 'Q', means: 'charge stored on one plate, the other holds the opposite (coulomb, C)' }
  - { s: 'V', means: 'voltage across the plates (volt, V)' }
  - { s: 'C', means: 'capacitance: charge stored per volt, Q divided by V (farad, F = C/V)' }
  - { s: '\varepsilon_0', means: 'permittivity of free space (8.85 \times 10^{-12}\ \text{C}^2\,\text{N}^{-1}\text{m}^{-2})' }
  - { s: 'A', means: 'area of each plate (m^2)' }
  - { s: 'd', means: 'gap between the plates (metre, m)' }
  - { s: 'K', means: 'dielectric constant: the factor by which an insulator between the plates multiplies capacitance (no unit)' }
  - { s: 'U', means: 'energy stored in the capacitor (joule, J)' }
  - { s: '\sigma', means: 'charge per unit area on a plate (C/m^2)' }
  - { s: 'E', means: 'electric field between the plates (V/m)' }
models:
  - name: 'A buffer stores when there is plenty'
    text: 'A roof tank, a granary and an emergency fund all store when supply is generous and give back when it is short. A buffer smooths the mismatch between how fast things arrive and how fast they are needed.'
  - name: 'Capacity belongs to the container'
    text: 'How much a system can hold depends on its shape (big area, small gap), not on how full it is. A hall''s seating is set by its floor area, not by today''s crowd.'
  - name: 'Ask what is held fixed'
    text: 'Before predicting what changes, find out which quantity is held constant. Same action, different result: disconnect the battery and the charge is fixed; keep it and the voltage is fixed. A fixed budget and a fixed target behave just as differently.'
links:
  - leaf: 'phy/springs-and-pendulums'
    name: 'Springs and pendulums'
    same: 'A stretched spring stores energy of the form $\tfrac12kx^2$ and a charged capacitor $\tfrac12CV^2$, both quadratic. The charge plays the role of the stretch and the capacitance C plays the role of softness, 1/k.'
    differs: 'A spring stores its energy as strain in matter; a capacitor stores it in the electric field between the plates, even if the gap is a vacuum.'
  - leaf: 'phy/lcr-circuit-and-resonance'
    name: 'LCR circuit and resonance'
    same: 'Join a capacitor to a coil and the charge swings back and forth like a mass on a spring: the capacitor acts as the spring and the coil as the mass.'
    differs: 'Resistance drains energy as heat just as friction drains a pendulum, but the analogy works for the gaps and the timing, not for every detail.'
next:
  q: 'A charged capacitor keeps its charge only while the plates stay apart. Join the plates with a wire and the charge rushes across. How fast does it flow, and what keeps it flowing continuously, as in a torch?'
  leaf: 'phy/electric-current-and-potential-difference'
  name: 'Electric current and potential difference'
---

:::hook
q: So what's your guess? Why does a thick glove stop the screen from seeing your finger?
options: ["The glove is too thick for you to press hard enough", "The glove widens the gap between finger and sensor, so the change in capacitance becomes too small to detect", "Cloth blocks a heat sensor under the glass"]
answer: 1
right: Right. The capacitance of two plates goes as area divided by gap, so a thicker gap means a much smaller change for the phone to notice, and cloth does not conduct the way a finger does. Some screens are sensitive enough for thin gloves, which fits the same story.
wrong: Pressing has nothing to do with it, because the screen senses charge, not force. The glove adds a gap, and capacitance, which goes as area divided by gap, falls below what the phone can detect.
:::

## A bucket for charge {lvl=1 id=s-idea label="Class 10"}

A battery pushes charge round a circuit, but it cannot **hold** a large pile of charge ready to release in a hurry. A camera flash, a defibrillator and the smoothing stage of a phone charger all need exactly that. The device that does it is a **capacitor**: two conductors, close together, separated by an insulator.

Why two conductors, and why close? Try storing charge on one metal ball. Each new bit of charge is pushed back by the charge already there, so the ball's potential climbs fast. A ball of radius 10 cm at 1000 V holds only about 11 nC (nanocoulombs).

Now bring a second conductor close and give it the **opposite** charge. Its pull partly cancels the push of the first conductor's charge. The same 1000 V now holds far more charge. The closer the two conductors, the better the cancellation, and the more charge per volt.

So a capacitor stores charge $+Q$ on one conductor and $-Q$ on the other. The net charge is zero; what is stored is the **separation** of charge, and with it, energy in the electric field between the plates.

## Capacitance is geometry {lvl=2 id=s-cap label="Class 12"}

Take any two conductors with charges $+Q$ and $-Q$, and let $V$ be the potential difference between them. Double the charge on each and the charge spreads in exactly the same pattern, only twice as dense. By superposition the field doubles everywhere, so $V$ doubles. Hence $V \propto Q$, and the ratio

:::law caption="Capacitance. Unit: farad (F) = coulomb per volt."
$$C = \frac{Q}{V}$$
:::

does not depend on $Q$ or $V$ at all. It depends only on the **sizes, shapes and spacing** of the conductors and on the insulator between them. Capacitance is a geometric property, like the resistance of a wire.

One farad is enormous. A parallel-plate capacitor with a 1 mm air gap (see the next section) needs a plate area of $A = Cd/\varepsilon_0 = 10^{-3}/(8.854\times10^{-12}) \approx 1.1\times10^{8}$ m², a square about 10.6 km on a side, to reach 1 F. Real capacitors are measured in µF (10⁻⁶ F), nF and pF (10⁻¹² F).

The recipe for any capacitor is always the same, and the rest of this lesson uses it again and again:

1. Put $+Q$ on one conductor and $-Q$ on the other.
2. Find the field $E$ between them (usually by Gauss's law; see the lesson on Gauss's law).
3. Integrate to get $V = \int E\,dr$ from the negative conductor to the positive one (see the lesson on electrostatic potential).
4. Divide: $C = Q/V$. The $Q$ always cancels.

:::qc
q: The charge on a capacitor is tripled by connecting it to a bigger battery. What happens to its capacitance?
options: ["It triples", "It is unchanged", "It falls to one third", "It increases ninefold"]
answer: 1
right: Right. V triples with Q, so Q/V stays the same. Capacitance depends only on geometry and the insulator.
wrong: Tripling Q triples the field everywhere and so triples V. The ratio Q/V, the capacitance, does not change.
:::

## The parallel-plate capacitor {lvl=2 id=s-pp label="Class 12"}

Two flat metal plates of area $A$ face each other across a small gap $d$. Charge $+Q$ sits on one and $-Q$ on the other, spread uniformly with surface densities $\pm\sigma$, where $\sigma = Q/A$.

A large sheet with surface density $\sigma$ produces a field of $\sigma/2\varepsilon_0$ on each side, pointing away from it if positive. Add the two sheets:

- **between** the plates, both fields point from $+$ to $-$, so $E = \sigma/2\varepsilon_0 + \sigma/2\varepsilon_0 = \sigma/\varepsilon_0$;
- **outside**, they point in opposite directions and cancel, so $E = 0$.

:::figure caption="Parallel-plate capacitor. The field between the plates is uniform, E = σ/ε₀; outside it nearly vanishes. Near the edges the lines bulge outward (fringing), which the formula C = ε₀A/d ignores."
<svg viewBox="0 0 300 170" role="img" aria-label="Two vertical plates, positive on the left and negative on the right, with uniform horizontal field lines between them and curved fringe lines at the top and bottom edges">
<line x1="100" y1="25" x2="100" y2="145" style="stroke:var(--phy);stroke-width:5"/>
<line x1="200" y1="25" x2="200" y2="145" style="stroke:var(--ink);stroke-width:5"/>
<line class="ray" x1="104" y1="45" x2="196" y2="45"/><line class="ray" x1="104" y1="70" x2="196" y2="70"/><line class="ray" x1="104" y1="95" x2="196" y2="95"/><line class="ray" x1="104" y1="120" x2="196" y2="120"/>
<polygon points="156,41 164,45 156,49" style="fill:var(--phy)"/><polygon points="156,66 164,70 156,74" style="fill:var(--phy)"/><polygon points="156,91 164,95 156,99" style="fill:var(--phy)"/><polygon points="156,116 164,120 156,124" style="fill:var(--phy)"/>
<path class="faint" d="M100 28 Q150 0 200 28"/><path class="faint" d="M100 142 Q150 170 200 142"/>
<text class="k" x="80" y="40">+</text><text class="k" x="80" y="80">+</text><text class="k" x="80" y="120">+</text>
<text class="k" x="210" y="40">−</text><text class="k" x="210" y="80">−</text><text class="k" x="210" y="120">−</text>
<text x="138" y="160">d</text><text x="20" y="90">+Q</text><text x="250" y="90">−Q</text><text x="128" y="110">E = σ/ε₀</text>
</svg>
:::

The field is uniform, so the potential difference is simply field × distance, $V = Ed = Qd/(\varepsilon_0 A)$. Divide:

:::law caption="Parallel-plate capacitor in vacuum (air is almost the same: K ≈ 1.0006)."
$$C_0 = \frac{\varepsilon_0 A}{d}$$
:::

Both dependences make sense. A bigger area holds more charge at the same field. A smaller gap means less voltage for the same field. So $C$ grows with $A$ and falls with $d$.

The formula assumes the plates are large compared with the gap ($d \ll \sqrt{A}$), so that the edge region with its bulging, **fringing** field is a small part of the whole. For plates 10 cm × 10 cm, 1 mm apart, $C_0 = 8.854\times10^{-12}\times0.01/10^{-3} \approx 88.5$ pF.

:::qc
q: The plate area of a parallel-plate capacitor is doubled and the gap is also doubled. What happens to C?
options: ["Doubles", "Halves", "Unchanged", "Quadruples"]
answer: 2
right: Right. C = ε₀A/d, and doubling both A and d leaves the ratio unchanged.
wrong: C = ε₀A/d. Doubling A doubles C and doubling d halves it, so C is unchanged.
:::

## Dielectrics: polarisation and bound charge {lvl=2 id=s-diel label="Class 12"}

Slide a sheet of glass or plastic between the plates of a charged, isolated capacitor, and the voltage **drops**. The charge on the plates has not changed, so the field between them must have fallen. Something inside the insulator is partly cancelling the field.

An insulator has no free electrons, but its charges can still shift slightly. There are two cases (NCERT §2.10):

- **Non-polar molecules** (such as O₂ or CO₂) have no dipole moment of their own. An applied field pulls their electron clouds one way and their nuclei the other, inducing a small dipole along the field.
- **Polar molecules** (such as H₂O) already carry a dipole moment, but in random directions, so on average they cancel. An applied field lines them up partly, against the jostling of thermal motion.

Either way, the material ends up with a net dipole moment along the field. The **polarisation** $\vec P$ is the dipole moment per unit volume.

:::figure caption="A polarised slab. Inside, the head of each dipole sits next to the tail of the next, so the charges cancel. Only the two faces are left with uncancelled bound charge −σ_b and +σ_b, and these oppose the field of the free charge on the plates."
<svg viewBox="0 0 320 170" role="img" aria-label="A dielectric slab between two plates, filled with small dipoles aligned left to right, with a layer of negative bound charge on the left face and positive bound charge on the right face">
<line x1="40" y1="20" x2="40" y2="150" style="stroke:var(--phy);stroke-width:5"/>
<line x1="280" y1="20" x2="280" y2="150" style="stroke:var(--ink);stroke-width:5"/>
<rect x="90" y="25" width="140" height="120" class="m2" style="stroke:var(--muted)"/>
<g style="fill:none;stroke:var(--muted);stroke-width:1">
<ellipse cx="115" cy="50" rx="12" ry="7"/><ellipse cx="160" cy="50" rx="12" ry="7"/><ellipse cx="205" cy="50" rx="12" ry="7"/>
<ellipse cx="115" cy="85" rx="12" ry="7"/><ellipse cx="160" cy="85" rx="12" ry="7"/><ellipse cx="205" cy="85" rx="12" ry="7"/>
<ellipse cx="115" cy="120" rx="12" ry="7"/><ellipse cx="160" cy="120" rx="12" ry="7"/><ellipse cx="205" cy="120" rx="12" ry="7"/>
</g>
<text x="106" y="54">− +</text><text x="151" y="54">− +</text><text x="196" y="54">− +</text>
<text x="106" y="89">− +</text><text x="151" y="89">− +</text><text x="196" y="89">− +</text>
<text x="106" y="124">− +</text><text x="151" y="124">− +</text><text x="196" y="124">− +</text>
<text class="k" x="93" y="40">−</text><text class="k" x="93" y="140">−</text><text class="k" x="221" y="40">+</text><text class="k" x="221" y="140">+</text>
<text class="k" x="22" y="90">+σ</text><text class="k" x="288" y="90">−σ</text>
<text x="70" y="165">−σ_b</text><text x="215" y="165">+σ_b</text>
</svg>
:::

**Why only surface charge.** In a uniformly polarised slab, every dipole's $+$ end sits against the next dipole's $-$ end, so the interior is neutral. At the left face there is an uncancelled layer of $-$ ends, and at the right face a layer of $+$ ends. These are **bound charges**: they cannot leave their molecules. A slab of area $A$ and thickness $t$ has total dipole moment $PAt$; the same moment comes from charges $\pm\sigma_b A$ a distance $t$ apart, so

$$\sigma_b = P .$$

**Why the field falls by a fixed factor.** The free charge $\sigma$ on the plates makes a field $\sigma/\varepsilon_0$. The bound layers act like a reversed capacitor inside, giving $-\sigma_b/\varepsilon_0$. So the field in the dielectric is

$$E = \frac{\sigma - \sigma_b}{\varepsilon_0} = \frac{\sigma - P}{\varepsilon_0}.$$

For most materials at ordinary fields, $P$ is proportional to the field that causes it: $P = \varepsilon_0\chi E$, where $\chi$ (the **electric susceptibility**) is a pure number. Substituting,

$$\varepsilon_0 E = \sigma - \varepsilon_0\chi E \quad\Longrightarrow\quad E = \frac{\sigma}{\varepsilon_0(1+\chi)} = \frac{E_0}{K}, \qquad K = 1 + \chi .$$

:::law caption="A linear dielectric filling the field region reduces the field by K, the dielectric constant (relative permittivity), and multiplies the capacitance by K."
$$E = \frac{E_0}{K}, \qquad C = K C_0 = \frac{K\varepsilon_0 A}{d}$$
:::

Typical values, approximately: air 1.0006, paper about 3, glass 5–10, mica about 6, water about 80 (because its molecules are strongly polar). [Unverified: approximate values recalled from memory.]

A dielectric does a second job. Every insulator breaks down (conducts in a spark) above some field, its **dielectric strength**: about 3 × 10⁶ V/m for dry air [Unverified]. A good solid dielectric survives much higher fields, so the plates can be closer and the capacitor smaller.

:::note title="The general picture (Olympiad)" tone=olympiad
If the polarisation is not uniform, the dipole ends no longer cancel inside, and a **volume** bound charge appears, $\rho_b = -\nabla\cdot\vec P$. Gauss's law then splits neatly if we define $\vec D = \varepsilon_0\vec E + \vec P$: its flux counts only **free** charge, $\oint \vec D\cdot d\vec A = Q_{\text{free}}$. In a linear medium $\vec D = K\varepsilon_0\vec E$. The last section uses this for a dielectric whose K changes across the gap.
:::

:::qc
q: An isolated charged capacitor has 300 V across it. A dielectric of K = 3 is slid in to fill the gap completely. What is the new voltage?
options: ["900 V", "300 V", "100 V", "33 V"]
answer: 2
right: Right. Q is fixed and C triples, so V = Q/C falls to 100 V. Equivalently, the bound charges cut the field to one third.
wrong: The capacitor is isolated, so Q is fixed. C becomes 3C₀, so V = Q/C falls to one third, 100 V.
:::

## Partly filled gaps: slabs in series and side by side {lvl=2 id=s-slab label="Class 12"}

Real problems rarely fill the gap neatly. Two arrangements cover almost all of them.

**A slab parallel to the plates** (full area $A$, thickness $t < d$). The free charge per area $\sigma$ is the same everywhere, so the field is $E_0 = \sigma/\varepsilon_0$ in the air and $E_0/K$ in the slab. Add the voltages:

$$V = E_0(d - t) + \frac{E_0}{K}\,t \quad\Longrightarrow\quad C = \frac{Q}{V} = \frac{\varepsilon_0 A}{d - t + t/K}.$$

A slab of thickness $t$ acts like air only $t/K$ thick. A **metal** slab has $K\to\infty$: its interior field is zero, and $C = \varepsilon_0 A/(d - t)$, as if the gap simply shrank. NCERT Example 2.8 is the case $t = \tfrac34 d$.

There is a second way to see this. The face of the slab is perpendicular to the field, so it is an equipotential. Slip an imaginary metal foil of zero thickness onto it: nothing changes. Now you have **two capacitors in series**, $\varepsilon_0A/(d-t)$ and $K\varepsilon_0A/t$.

**Slabs side by side** (each fills the full gap $d$, over areas $A_1$ and $A_2$). Both parts share the same plates, so the same voltage $V$, and the field in each is $V/d$. Each part is its own capacitor, and the charges add: **parallel**,

$$C = \frac{\varepsilon_0}{d}\left(K_1A_1 + K_2A_2\right).$$

:::figure caption="Left: a slab parallel to the plates. The field changes from layer to layer, but the free charge per area does not, so the layers act in series. Right: two dielectrics side by side. Both see the same voltage, so they act in parallel."
<svg viewBox="0 0 340 160" role="img" aria-label="Two diagrams. Left: plates with a horizontal-layer dielectric slab occupying part of the gap. Right: plates with two different dielectrics filling the upper and lower halves of the gap">
<line x1="30" y1="20" x2="30" y2="130" style="stroke:var(--phy);stroke-width:4"/><line x1="140" y1="20" x2="140" y2="130" style="stroke:var(--ink);stroke-width:4"/>
<rect x="70" y="20" width="70" height="110" class="m2" style="stroke:var(--phy)"/>
<text class="k" x="98" y="80">K</text><text x="38" y="80">air</text>
<text x="40" y="148">d − t</text><text x="92" y="148">t</text>
<text x="40" y="14">series</text>
<line x1="200" y1="20" x2="200" y2="130" style="stroke:var(--phy);stroke-width:4"/><line x1="310" y1="20" x2="310" y2="130" style="stroke:var(--ink);stroke-width:4"/>
<rect x="202" y="20" width="106" height="55" class="m2" style="stroke:var(--phy)"/>
<rect x="202" y="75" width="106" height="55" style="fill:color-mix(in srgb, var(--chem) 12%, var(--surface));stroke:var(--chem)"/>
<text class="k" x="230" y="52">K₁, A₁</text><text class="k" x="230" y="107">K₂, A₂</text>
<text x="240" y="148">d</text><text x="230" y="14">parallel</text>
</svg>
:::

:::worked title="A slab that doubles the capacitance"
Plates 4.0 mm apart; a slab with K = 3 and thickness 3.0 mm is inserted, covering the full area. Effective air gap: $d - t + t/K = 1.0 + 1.0 = 2.0$ mm. So $C = \varepsilon_0A/(2.0\text{ mm}) = 2C_0$. The 3 mm of dielectric counts as only 1 mm of air.
:::

Mixed arrangements (a slab covering half the area and half the thickness, say) are built from these two rules, as long as each piece's boundaries are equipotentials or field lines. When they are not, the answer is only approximate [Inference: the series and parallel splitting assumes the field stays perpendicular to the plates in every region].

:::qc
q: A metal slab of thickness d/2 is placed (not touching the plates) in the middle of a capacitor of gap d. What happens to C?
options: ["Unchanged", "Doubles", "Halves", "Becomes infinite"]
answer: 1
right: Right. The field inside the metal is zero, so only d/2 of air is left in total: C = ε₀A/(d/2) = 2C₀. Its position in the gap does not matter.
wrong: Inside a conductor E = 0, so the metal contributes no voltage. The air left totals d/2, so C = 2C₀, wherever the slab sits.
:::

## Series and parallel from first principles {lvl=2 id=s-comb label="Class 12"}

The two combination rules follow from two conservation laws: **charge** cannot appear or vanish on an isolated piece of metal, and the **potential** difference between two points is the same along any path.

:::figure caption="Series (left): the island between C₁ and C₂ starts neutral, so it carries −Q and +Q; every capacitor holds the same Q. Parallel (right): every capacitor sees the same V."
<svg viewBox="0 0 340 130" role="img" aria-label="Left: three capacitors in a row between points A and B, with an island conductor between each pair marked by a dashed box. Right: three capacitors stacked between two common wires">
<line class="ln" x1="10" y1="60" x2="40" y2="60"/><line x1="40" y1="40" x2="40" y2="80" style="stroke:var(--ink);stroke-width:3"/><line x1="50" y1="40" x2="50" y2="80" style="stroke:var(--ink);stroke-width:3"/>
<line class="ln" x1="50" y1="60" x2="90" y2="60"/><line x1="90" y1="40" x2="90" y2="80" style="stroke:var(--ink);stroke-width:3"/><line x1="100" y1="40" x2="100" y2="80" style="stroke:var(--ink);stroke-width:3"/>
<line class="ln" x1="100" y1="60" x2="140" y2="60"/><line x1="140" y1="40" x2="140" y2="80" style="stroke:var(--ink);stroke-width:3"/><line x1="150" y1="40" x2="150" y2="80" style="stroke:var(--ink);stroke-width:3"/>
<line class="ln" x1="150" y1="60" x2="170" y2="60"/>
<rect class="faint" x="47" y="30" width="46" height="60"/>
<text x="34" y="100">C₁</text><text x="84" y="100">C₂</text><text x="134" y="100">C₃</text><text x="56" y="26">island</text>
<text x="32" y="36">+Q</text><text x="44" y="112">−Q +Q</text><text class="k" x="2" y="54">A</text><text class="k" x="164" y="54">B</text>
<line class="ln" x1="200" y1="20" x2="200" y2="110"/><line class="ln" x1="320" y1="20" x2="320" y2="110"/>
<line class="ln" x1="200" y1="25" x2="255" y2="25"/><line x1="255" y1="13" x2="255" y2="37" style="stroke:var(--ink);stroke-width:3"/><line x1="265" y1="13" x2="265" y2="37" style="stroke:var(--ink);stroke-width:3"/><line class="ln" x1="265" y1="25" x2="320" y2="25"/>
<line class="ln" x1="200" y1="65" x2="255" y2="65"/><line x1="255" y1="53" x2="255" y2="77" style="stroke:var(--ink);stroke-width:3"/><line x1="265" y1="53" x2="265" y2="77" style="stroke:var(--ink);stroke-width:3"/><line class="ln" x1="265" y1="65" x2="320" y2="65"/>
<line class="ln" x1="200" y1="105" x2="255" y2="105"/><line x1="255" y1="93" x2="255" y2="117" style="stroke:var(--ink);stroke-width:3"/><line x1="265" y1="93" x2="265" y2="117" style="stroke:var(--ink);stroke-width:3"/><line class="ln" x1="265" y1="105" x2="320" y2="105"/>
<text x="272" y="45">C₁</text><text x="272" y="85">C₂</text><text x="272" y="125">C₃</text>
</svg>
:::

**Series.** Charge $+Q$ arrives on the left plate of $C_1$. It induces $-Q$ on the facing plate (every field line from the left plate ends there). The right plate of $C_1$ and the left plate of $C_2$ are joined by a wire into one isolated **island**. The island started neutral, so if its left end holds $-Q$, its right end holds $+Q$. The same happens at every island: **all capacitors in series carry the same charge**. The voltages add:

$$V = \frac{Q}{C_1} + \frac{Q}{C_2} + \frac{Q}{C_3} \quad\Longrightarrow\quad \frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3}.$$

**Parallel.** Each capacitor is connected across the same two wires, so each has **the same voltage** $V$. The charges add: $Q = (C_1 + C_2 + C_3)V$, so

$$C = C_1 + C_2 + C_3 .$$

The rules are the reverse of the resistor rules because $C$ measures how easily charge is **stored** per volt, as conductance $1/R$ measures how easily it **flows** per volt.

:::note title="The hidden assumption" tone=warn
The series rule needs every island to be **neutral** before connection. If an island was charged earlier, the capacitors do not carry equal charges and $1/C = \sum 1/C_i$ gives wrong answers. Then write the two laws directly: charge on each island is conserved, and the voltages round each loop add to the emf.
:::

In series, the voltage divides inversely to capacitance, $V_1 = V\,C_2/(C_1+C_2)$: the **smaller** capacitor takes the **larger** voltage. That is why a weak capacitor in a series string is the first to break down.

:::qc
q: A 2 µF and a 6 µF capacitor in series are connected across 80 V. What is the voltage across the 2 µF capacitor?
options: ["20 V", "40 V", "60 V", "80 V"]
answer: 2
right: Right. Same charge on both, so V ∝ 1/C. The 2 µF takes three times the voltage of the 6 µF: 60 V and 20 V.
wrong: In series both carry the same Q, so V = Q/C is larger on the smaller capacitor. C_eq = 1.5 µF, Q = 120 µC, V = 120/2 = 60 V.
:::

## Energy stored, and where it lives {lvl=2 id=s-energy label="Class 12"}

Charge a capacitor by moving small amounts $dq$ from the negative plate to the positive one. When the charge is already $q$, the potential difference is $q/C$, and moving $dq$ across it costs work $dW = (q/C)\,dq$. Add up from $0$ to $Q$:

$$U = \int_0^Q \frac{q}{C}\,dq = \frac{Q^2}{2C}.$$

:::law caption="Energy stored in a capacitor. All three forms are the same, using Q = CV."
$$U = \frac{Q^2}{2C} = \frac12 CV^2 = \frac12 QV$$
:::

Why $\tfrac12 QV$ and not $QV$? Early charge crosses a small voltage, late charge the full $V$. On average each coulomb crosses $V/2$.

**Where is the energy?** For a parallel-plate capacitor, put $C = \varepsilon_0A/d$ and $V = Ed$:

$$U = \frac12\,\frac{\varepsilon_0A}{d}\,E^2d^2 = \frac12\varepsilon_0E^2\,(Ad).$$

$Ad$ is the volume between the plates, where the field is. So the energy can be read as spread through the field, with **energy density**

:::law caption="Energy per unit volume of an electric field in vacuum (multiply by K inside a linear dielectric)."
$$u = \frac12\varepsilon_0E^2$$
:::

This is derived for one simple case, but it holds for any electrostatic field. It is the start of the idea that fields carry energy, which becomes essential for light.

**Concrete numbers.** The 88.5 pF capacitor from above, at 100 V, stores $\tfrac12\times88.5\times10^{-12}\times100^2 \approx 0.44$ µJ. Air breaks down near $E = 3\times10^6$ V/m, which caps its energy density at about $\tfrac12\times8.85\times10^{-12}\times(3\times10^6)^2 \approx 40$ J/m³. That is tiny next to a chemical battery, which is why capacitors are used for fast bursts of power, not for long storage. Dielectrics raise the limit, by both $K$ and a higher breakdown field.

:::note title="The battery's missing half" tone=warn
A battery that charges a capacitor to $V$ moves charge $Q$ through its emf, so it supplies $QV$. The capacitor keeps $\tfrac12QV$. The other half is turned into heat in the wires (and a little radiation), **whatever the resistance**. A smaller resistance gives a larger current for a shorter time, and the total heat is the same. The time course is the subject of the later lesson on RC circuits.
:::

:::qc
q: A capacitor connected to a battery has a dielectric of K = 2 slid in. By what factor does its stored energy change?
options: ["×½", "×1", "×2", "×4"]
answer: 2
right: Right. V is fixed by the battery and C doubles, so U = ½CV² doubles. The battery supplied the extra charge and energy.
wrong: Connected means V is fixed. C doubles, so ½CV² doubles. (If it were isolated, Q would be fixed and U = Q²/2C would halve.)
:::

## Spherical and cylindrical capacitors {lvl=3 id=s-geom label="JEE"}

Apply the four-step recipe to two other shapes. The fields come straight from Gauss's law.

**Spherical capacitor.** A metal sphere of radius $a$ inside a concentric shell of inner radius $b$, with charges $+Q$ and $-Q$. Between them, a Gaussian sphere of radius $r$ encloses $+Q$, so $E = Q/(4\pi\varepsilon_0r^2)$. Then

$$V = \int_a^b \frac{Q}{4\pi\varepsilon_0r^2}\,dr = \frac{Q}{4\pi\varepsilon_0}\left(\frac1a - \frac1b\right), \qquad C = \frac{4\pi\varepsilon_0\,ab}{b-a}.$$

Two checks:
- Let $b\to\infty$: an **isolated sphere** has $C = 4\pi\varepsilon_0 a$. For the Earth ($a = 6.4\times10^6$ m) that is only about 712 µF. A whole planet is a modest capacitor.
- Let $b - a = d \ll a$: then $C \approx 4\pi\varepsilon_0a^2/d = \varepsilon_0A/d$. A thin shell gap looks locally flat, and the parallel-plate result returns.

**Cylindrical capacitor** (a coaxial cable). An inner wire of radius $a$ and an outer tube of radius $b$, length $L \gg b$, with charge per length $\pm\lambda$. Gauss with a cylinder of radius $r$ gives $E = \lambda/(2\pi\varepsilon_0r)$, so

$$V = \frac{\lambda}{2\pi\varepsilon_0}\ln\frac ba, \qquad \frac{C}{L} = \frac{2\pi\varepsilon_0}{\ln(b/a)}.$$

The logarithm changes very slowly, so cables of very different sizes have similar capacitance per metre. With $a = 0.5$ mm, $b = 2.0$ mm and a polyethylene filling of $K \approx 2.3$ [Unverified], $C/L = 2\pi\varepsilon_0K/\ln 4 \approx 92$ pF/m.

**Layered dielectrics.** If concentric layers fill the gap with different $K$, each thin shell $dr$ is a little capacitor in series with the next. In general, with $K(r)$:

$$\frac1C = \int_a^b \frac{dr}{4\pi\varepsilon_0K(r)\,r^2} \quad\text{(spherical)}, \qquad \frac{1}{C} = \int_a^b\frac{dr}{2\pi\varepsilon_0 K(r)\,L\,r}\quad\text{(cylindrical)}.$$

:::qc
q: The outer shell of a spherical capacitor is moved from b = 2a out to b = 3a. By what factor does C change?
options: ["It increases to 4/3 of its value", "It decreases to 3/4 of its value", "It halves", "It is unchanged"]
answer: 1
right: Right. C = 4πε₀ab/(b − a). For b = 2a this is 4πε₀(2a); for b = 3a it is 4πε₀(1.5a). The ratio is 3/4.
wrong: Use C = 4πε₀ab/(b − a): 2a for b = 2a, 1.5a for b = 3a (times 4πε₀). The new C is 3/4 of the old.
:::

## Sharing charge: the energy that always goes missing {lvl=3 id=s-share label="JEE"}

Charge $C_1$ to $V_1$ and $C_2$ to $V_2$, then join positive plate to positive plate and negative to negative. Charge flows until both have a common voltage $V$. The joined plates form an isolated pair, so charge is conserved:

$$C_1V_1 + C_2V_2 = (C_1 + C_2)V \quad\Longrightarrow\quad V = \frac{C_1V_1 + C_2V_2}{C_1 + C_2}.$$

Now compare energies. A few lines of algebra give

:::law caption="Energy lost in charge sharing. Join opposite plates instead and replace V₁ − V₂ by V₁ + V₂ (charge conservation then reads C₁V₁ − C₂V₂ = (C₁ + C₂)V)."
$$U_i - U_f = \frac{C_1C_2}{2(C_1 + C_2)}\,(V_1 - V_2)^2$$
:::

It is never negative, and zero only if the voltages were already equal. The loss does **not** depend on the resistance of the connecting wires. In a real wire it becomes heat. In the textbook limit of zero resistance, the charge oscillates (the wires have some inductance) and the energy leaves as electromagnetic radiation and sparks [Inference: the idealised circuit is singular; the physics depends on the parts the ideal model leaves out].

:::note title="An analogy from mechanics" tone=olympiad
This is a perfectly inelastic collision. Two bodies moving at $v_1$ and $v_2$ stick and lose kinetic energy $\tfrac12\mu(v_1 - v_2)^2$ with $\mu = m_1m_2/(m_1 + m_2)$. Map $m \to C$, $v \to V$, momentum $\to$ charge: conserved charge plays the role of conserved momentum, and the "reduced capacitance" $C_1C_2/(C_1 + C_2)$ is exactly the series combination.
:::

:::qc
q: Two identical capacitors, one at 100 V and one uncharged, are joined in parallel. What fraction of the original energy is lost?
options: ["None", "One quarter", "One half", "Three quarters"]
answer: 2
right: Right. The common voltage is 50 V. Energy goes from ½C(100)² to 2 × ½C(50)², which is half the original. Half is lost.
wrong: Common voltage = 50 V. Final energy = 2 × ½C × 50² = ½ × (½C × 100²). Half the energy is lost.
:::

## Forces: on the plates, and on a dielectric {lvl=3 id=s-force label="JEE"}

**The plates attract.** It is tempting to write $F = QE = Q\sigma/\varepsilon_0$. That is twice too big. A plate does not push itself; it feels only the **other** plate's field, $\sigma/2\varepsilon_0$. So

$$F = Q\,\frac{\sigma}{2\varepsilon_0} = \frac{Q^2}{2\varepsilon_0 A} = \frac12 QE .$$

The energy method agrees. Hold $Q$ fixed (isolated capacitor) and let the gap be $x$: $U = Q^2x/(2\varepsilon_0A)$. Pulling the plates apart by $dx$ needs work $dU = Q^2dx/(2\varepsilon_0A)$, which is $F\,dx$. That is also why the plates in the hook gained energy as you separated them. Divide by $A$: the pull per unit area is $\tfrac12\varepsilon_0E^2$, exactly the energy density. Field lines behave like stretched strings, with a tension per area equal to $u$.

**Constant Q against constant V.** For an isolated capacitor, the force follows from the energy, $F = -(\partial U/\partial x)_Q$. With a battery attached it is not so simple. When $C$ changes by $dC$, the battery pushes charge $V\,dC$ through its emf and does work $V^2dC$. The field energy changes by only $\tfrac12V^2dC$. Energy balance for a mechanical displacement $dx$ then gives:

:::law caption="Generalised force along x on any part of a capacitor (the part tends to move so as to increase C). The two forms give the same force at the same instant."
$$F = -\left(\frac{\partial U}{\partial x}\right)_{Q} = +\left(\frac{\partial U}{\partial x}\right)_{V} = \frac12 V^2\frac{dC}{dx}$$
:::

The trap: at constant $V$, the stored energy **rises** as the force does positive work. Writing $F = -dU/dx$ there gives the wrong sign.

**A dielectric slab is sucked in.** Plates of length $L$, width $b$, gap $d$; a slab of constant $K$ fills the full gap and has entered a distance $x$. The two parts are in parallel:

$$C(x) = \frac{\varepsilon_0 b}{d}\big[Kx + (L - x)\big], \qquad \frac{dC}{dx} = \frac{\varepsilon_0 b\,(K-1)}{d}.$$

:::figure caption="A slab partly inside a capacitor. The fringing field at the edge has a sideways component that pulls on the slab's bound charges, drawing it in. The uniform field deep inside cannot exert a sideways force; only the edge region can."
<svg viewBox="0 0 320 150" role="img" aria-label="Horizontal plates top and bottom, a dielectric slab entering from the left, with curved fringe field lines at the right edge of the slab and an arrow showing the force pulling the slab inward">
<line x1="60" y1="35" x2="260" y2="35" style="stroke:var(--phy);stroke-width:4"/><line x1="60" y1="115" x2="260" y2="115" style="stroke:var(--ink);stroke-width:4"/>
<rect x="10" y="38" width="140" height="74" class="m2" style="stroke:var(--phy)"/>
<line class="ray" x1="200" y1="39" x2="200" y2="111"/><line class="ray" x1="230" y1="39" x2="230" y2="111"/>
<path class="ray" d="M170 39 Q160 75 150 80"/><path class="ray" d="M180 39 Q175 70 152 95"/>
<path class="faint" d="M262 37 Q290 75 262 113"/>
<line class="ray" x1="95" y1="130" x2="135" y2="130"/><polygon points="135,126 143,130 135,134" style="fill:var(--phy)"/>
<text class="k" x="60" y="80">K</text><text x="90" y="146">F pulls slab in</text><text x="70" y="28">x</text><text x="262" y="28">L</text>
<text x="275" y="80">d</text>
</svg>
:::

At constant $V$:

$$F = \frac{\varepsilon_0(K-1)\,b\,V^2}{2d},$$

the same at every position $x$. At constant $Q$ the force is $\tfrac12(Q/C)^2\,dC/dx$, which **weakens** as the slab goes in, because $C$ grows and $V$ falls.

The force comes from the fringing field, which the simple formula ignores. Yet the energy method gets it right, because energy does not care about details at the edge. This is a good example of why energy methods are powerful.

:::worked title="Oil rising between charged plates"
Two vertical plates 5.0 mm apart, held at 10 kV, are dipped into oil with $K = 2.5$ and density 900 kg/m³. How high does the oil rise between them? The upward force per unit width is $\varepsilon_0(K-1)V^2/(2d)$; the weight of the raised column per unit width is $\rho g h d$. Setting them equal,

$$h = \frac{\varepsilon_0(K-1)V^2}{2\rho g d^2} = \frac{8.854\times10^{-12}\times1.5\times(10^4)^2}{2\times900\times9.8\times(5\times10^{-3})^2} \approx 3.0\text{ mm}.$$

The field, $2\times10^6$ V/m, is just below the breakdown of air [Unverified breakdown figure], which is why the effect is small.
:::

:::qc
q: A capacitor is charged and disconnected. Its plates are then pulled further apart. Which statement is true?
options: ["The attractive force between the plates decreases", "The attractive force is unchanged and the stored energy increases", "The attractive force increases", "The stored energy decreases"]
answer: 1
right: Right. F = Q²/(2ε₀A) contains no gap, and Q is fixed, so F is constant. The work you do against it, F × Δx, raises U = Q²x/(2ε₀A).
wrong: With Q fixed, F = Q²/(2ε₀A) does not depend on the gap. You do work against this constant force, and the stored energy rises by the same amount.
:::

## Networks: symmetry, bridges and ladders {lvl=4 id=s-net label="Olympiad"}

For a network of capacitors that all start **uncharged**, the governing equations are:

- **Node rule:** the total charge on the plates meeting at any isolated node is zero (it started neutral): $\sum_j C_{ij}(V_i - V_j) = 0$.
- **Loop rule:** the voltages $q/C$ round any loop add up to the emfs in it.

These are Kirchhoff's rules (see the lesson on Kirchhoff's rules) with charge in place of current and $C$ in place of conductance $1/R$. So **every resistor-network result carries over**, with $C$ for $1/R$:

- a balanced bridge (arms $C_1, C_2$ on one path, $C_3, C_4$ on the other) has $C_1/C_2 = C_3/C_4$, and its middle capacitor holds no charge;
- twelve equal resistors on the edges of a cube give $5R/6$ between opposite corners, so twelve equal capacitors give $6C/5$;
- points at the same potential by symmetry can be joined or separated freely.

:::worked title="The cube, by symmetry"
Twelve capacitors $C$ form the edges of a cube; find $C_{\text{eq}}$ between opposite corners A and G. Put charge $Q$ on the network through A. Three edges leave A, all equivalent by symmetry, so each carries $Q/3$. The three nodes reached are at one potential, and from them six edges lead on, each carrying $Q/6$. The last three edges into G carry $Q/3$ each. Add the voltages along any path:

$$V = \frac{Q}{3C} + \frac{Q}{6C} + \frac{Q}{3C} = \frac{5Q}{6C}, \qquad C_{\text{eq}} = \frac{6C}{5}.$$
:::

**Infinite ladders.** If a network repeats forever, adding one more section to the front does not change it. Call its capacitance $X$. For a ladder with a capacitor $C$ in series along the top and $C$ across to the bottom rail in every section, one new section puts $C$ in series with ($C$ in parallel with $X$):

$$X = \frac{C\,(C + X)}{2C + X} \quad\Longrightarrow\quad X^2 + CX - C^2 = 0 \quad\Longrightarrow\quad X = \frac{\sqrt5 - 1}{2}\,C \approx 0.618\,C.$$

Take the positive root; the golden ratio appears just as it does for the matching resistor ladder.

**Islands with charge already on them.** If some isolated node starts with charge $q_0$, the node rule becomes $\sum_j C_{ij}(V_i - V_j) = q_0$. The network is then no longer a simple capacitor between two terminals, and "equivalent capacitance" may not even be defined. Write the node equations and solve them.

:::qc
q: Five equal capacitors C form a Wheatstone bridge: four in the arms and one across the middle. What is the capacitance between the two battery terminals?
options: ["C/2", "C", "2C", "5C/4"]
answer: 1
right: Right. The bridge is balanced (C/C = C/C), so the middle capacitor holds no charge. What is left is two series pairs (C/2 each) in parallel: C.
wrong: Equal arms make the bridge balanced, so the middle capacitor holds no charge and can be removed. Two series pairs of C/2 in parallel give C.
:::

## Moving plates and graded dielectrics {lvl=4 id=s-moving label="Olympiad"}

**Moving plates.** If the geometry changes while a battery holds $V$ fixed, the charge must follow, $Q = C(t)V$, and a current flows even though nothing in the circuit "drives" it:

$$I = V\,\frac{dC}{dt}.$$

For plates at gap $x(t)$ moving apart at speed $v$: $C = \varepsilon_0A/x$, so $I = -\varepsilon_0AVv/x^2$. The current runs **back into** the battery, charging it. Check the energy books: the external agent supplies $Fv = \varepsilon_0AV^2v/(2x^2)$, the field energy falls by $\varepsilon_0AV^2v/(2x^2)$ per second, and the battery absorbs the sum, $\varepsilon_0AV^2v/x^2$. A condenser microphone works this way: sound moves a thin plate, and the changing $C$ drives a tiny current.

**Graded dielectric.** Suppose $K$ changes smoothly across the gap, $K = K(x)$. The free charge per area $\sigma$ is the same at every layer, because $D = \sigma$ (Gauss's law for free charge). So $E(x) = \sigma/(\varepsilon_0K(x))$ and the gap acts like infinitely many thin capacitors in series:

$$V = \frac{\sigma}{\varepsilon_0}\int_0^d \frac{dx}{K(x)}, \qquad \frac{1}{C} = \frac{1}{\varepsilon_0A}\int_0^d\frac{dx}{K(x)}.$$

The polarisation $P = D - \varepsilon_0E = \sigma(1 - 1/K)$ now varies with $x$, so a **volume** bound charge appears inside, $\rho_b = -dP/dx = -\sigma K'(x)/K^2$. Its total, plus the two surface bound charges, is zero, as it must be for a neutral slab.

For a linear profile $K = K_1 + (K_2 - K_1)x/d$, the integral gives

$$C = \frac{\varepsilon_0 A\,(K_2 - K_1)}{d\,\ln(K_2/K_1)},$$

which tends to $K\varepsilon_0A/d$ as $K_2\to K_1$ (since $\ln(1+\epsilon)\approx\epsilon$).

:::qc
q: A capacitor held at constant V by a battery has its plate separation slowly halved. Which way does charge flow through the battery?
options: ["Out of the battery's positive terminal, so the battery loses energy", "Into the battery's positive terminal, so the battery gains energy", "No charge flows", "It depends on the direction of the field"]
answer: 0
right: Right. Halving the gap doubles C, so Q = CV must double. The battery pushes extra charge out of its positive terminal and supplies energy V × ΔQ.
wrong: C = ε₀A/x doubles when x halves, so Q = CV doubles. The battery delivers the extra charge and the energy that goes with it.
:::

## Charging through a resistor: a preview {lvl=3 id=s-rc label="JEE"}

Everything above treats charging as instant. In a real circuit the charge flows through some resistance $R$, and the current is limited: at first the capacitor is uncharged and the whole emf drives current through $R$; as charge builds up, the capacitor's voltage opposes the emf and the current dies away. The time scale is $\tau = RC$ (ohms × farads = seconds).

The full time dependence, the exponential charge and discharge curves, and the proof that the heat in $R$ is exactly $\tfrac12CV^2$ for any $R$ belong to the later lesson on RC circuits. For now, keep two facts: a capacitor passes no steady current, and in a steady state it simply holds the voltage across its terminals.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A capacitor is two conductors holding $+Q$ and $-Q$. Bringing the opposite charge close lets far more charge sit at the same voltage. {lvl=1}
2. $C = Q/V$ depends only on geometry and the insulator. Recipe: assume $Q$, find $E$ (Gauss), integrate for $V$, divide. {lvl=2}
3. Parallel plates: $C = \varepsilon_0A/d$; field $\sigma/\varepsilon_0$ inside, zero outside. A filling dielectric multiplies $C$ by $K$. {lvl=2}
4. A dielectric polarises; bound surface charge $\sigma_b = P$ opposes the field, giving $E = E_0/K$ with $K = 1 + \chi$. {lvl=2}
5. A slab parallel to the plates: $C = \varepsilon_0A/(d - t + t/K)$ (series). Dielectrics side by side: $C = \varepsilon_0(K_1A_1 + K_2A_2)/d$ (parallel). {lvl=2}
6. Series: equal charge (neutral islands), $1/C = \sum1/C_i$. Parallel: equal voltage, $C = \sum C_i$. {lvl=2}
7. $U = Q^2/2C = \tfrac12CV^2 = \tfrac12QV$; energy density $\tfrac12\varepsilon_0E^2$. The battery supplies $QV$; half is lost as heat. {lvl=2}
8. Spherical $C = 4\pi\varepsilon_0ab/(b-a)$; isolated sphere $4\pi\varepsilon_0a$; cylindrical $C/L = 2\pi\varepsilon_0/\ln(b/a)$. {lvl=3}
9. Charge sharing loses $\tfrac{C_1C_2}{2(C_1+C_2)}(V_1 \mp V_2)^2$, independent of the wire resistance. {lvl=3}
10. Plate force $Q^2/2\varepsilon_0A$. Generalised force $\tfrac12V^2\,dC/dx$; a dielectric is pulled in with $\varepsilon_0(K-1)bV^2/2d$ at constant V. {lvl=3}
11. Uncharged capacitor networks map onto resistor networks with $C \leftrightarrow 1/R$; use symmetry, balanced bridges and self-similar ladders. {lvl=4}
12. Changing geometry at constant V drives $I = V\,dC/dt$. A graded dielectric gives $1/C = \int dx/(\varepsilon_0 A K)$ and volume bound charge $-dP/dx$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- First decide: battery connected (V fixed) or disconnected (Q fixed). Every "what happens when…" question depends on it. {lvl=2}
- Capacitors combine opposite to resistors: series uses reciprocals, parallel simply adds. {lvl=2}
- In series, the smaller capacitor takes the larger voltage. {lvl=2}
- Convert units: µF = 10⁻⁶ F, pF = 10⁻¹² F, mm² = 10⁻⁶ m². Most wrong answers in this topic are off by a power of ten. {lvl=2}
- A slab of thickness t does not replace C₀ by KC₀; only the slab's own thickness shrinks to t/K. {lvl=2}
- The series formula assumes neutral islands. If a capacitor was charged before being connected, use conservation of charge on each island. {lvl=3}
- Force on a plate is $\tfrac12QE$, not $QE$: a plate does not feel its own field. {lvl=3}
- At constant V, $F = +dU/dx$, not $-dU/dx$, because the battery does work $V^2dC$, twice the field-energy change. {lvl=3}
- Charge-sharing loss with opposite plates joined uses $V_1 + V_2$, and the common charge is $|C_1V_1 - C_2V_2|$. {lvl=3}
- In symmetry arguments, check that a proposed symmetry really maps the terminals onto themselves (or onto each other with the voltages flipped). {lvl=4}
:::
