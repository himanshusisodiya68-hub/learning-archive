---
title: Magnetic materials
summary: 'Why iron sticks to a magnet but wood and water barely notice, and how a magnet can remember.'
ncert: ["Class 12 Physics · Ch 5 Magnetism and Matter (§5.4–5.5)"]
up_to: Olympiad
builds_on: [Magnetic dipole and bar magnet, Ampère's circuital law, Current loop and its magnetic moment, Electromagnetic induction (Lenz's law)]
notes_prompt: Explain in your own words why H inside a solenoid depends only on the current in the windings, while B depends on the core as well.
margin:
  - kind: history
    title: History
    text: "Pierre Curie measured how the magnetism of many substances changes with temperature (1895) and found the 1/T law that bears his name. Pierre Weiss proposed magnetic domains and an internal 'molecular field' in 1907, and Meissner and Ochsenfeld found in 1933 that a superconductor expels magnetic flux. [Unverified: names and dates recalled from memory.]"
  - kind: tip
    title: H follows the free current, B follows everything
    text: "In a solenoid H = nI whatever the core. Put the core in and B = μ₀(H + M) = μᵣμ₀nI. If a question gives you the winding current, find H first; if it gives you B, divide by μ₀ and subtract H to get M."
  - kind: olympiad
    title: Olympiad link
    text: "Magnetostatics in linear materials copies electrostatics in dielectrics: H plays the role of E, B of D, μ of ε, and a uniformly magnetised sphere behaves like a uniformly polarised one. Many shielding and sphere-in-a-field problems can be solved by translating a known dielectric result."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 5 Magnetism and Matter, §5.4–5.5" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 36 Permanent Magnets and Ch. 37 Magnetic Properties of Matter [Unverified chapter numbers]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · Magnetic field in a substance [Unverified section number]" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 6 Magnetic Fields in Matter" }
cards:
  - { front: "How are B, H and M related, and what are χ and μᵣ?", back: "$\\vec B = \\mu_0(\\vec H + \\vec M)$. For a linear material $\\vec M = \\chi\\vec H$, so $\\vec B = \\mu_0(1+\\chi)\\vec H = \\mu_r\\mu_0\\vec H$ with $\\mu_r = 1 + \\chi$." }
  - { front: "Signs and rough sizes of χ for dia-, para- and ferromagnets?", back: "Diamagnetic: small, negative (about −10⁻⁵). Paramagnetic: small, positive (10⁻⁵ to 10⁻³). Ferromagnetic: large, positive (hundreds to many thousands), and not constant. Superconductor: χ = −1." }
  - { front: "Curie's law?", back: "For a paramagnet in a weak field, $\\chi = C\\mu_0/T$: alignment of the atomic moments fights thermal agitation, so χ ∝ 1/T. A classical model gives $\\chi = \\mu_0 n m^2/(3k_BT)$." }
  - { front: "Retentivity and coercivity?", back: "Retentivity: the B (or M) left when H is brought back to zero. Coercivity: the reverse H needed to bring B to zero. Permanent magnets need both large; electromagnet and transformer cores need low coercivity and a thin loop." }
  - { front: "Energy lost per cycle in a ferromagnetic core?", back: "$\\oint H\\,dB$ per unit volume per cycle: the area of the hysteresis loop on a B–H graph. Power = loop area × volume × frequency." }
  - { front: "Boundary conditions at an interface between two magnetic media (no free surface current)?", back: "$B_\\perp$ is continuous, $H_\\parallel$ is continuous. Field lines bend so that $\\tan\\theta_1/\\mu_1 = \\tan\\theta_2/\\mu_2$ (angles from the normal)." }
core:
  idea: 'In matter $\vec B = \mu_0(\vec H + \vec M)$: $\vec H$ is fixed by the free current alone and the magnetisation $\vec M$ (moment per unit volume) is the response of atomic moments. For a linear material $\vec M = \chi\vec H$, so $\vec B = \mu_0\mu_r\vec H$ with $\mu_r = 1+\chi$.'
  formulas:
    - tex: '\vec B = \mu_0\left(\vec H + \vec M\right)'
      label: 'Field, intensity and magnetisation'
    - tex: '\vec M = \chi\vec H,\qquad \mu_r = 1+\chi'
      label: 'Susceptibility and relative permeability'
    - tex: '\chi = \frac{C\mu_0}{T}'
      label: 'Curie''s law (paramagnet)'
  conditions:
    - 'Linear, isotropic, homogeneous material (a ferromagnet is non-linear, with hysteresis)'
    - 'Curie''s law: weak field and not too low a temperature (absolute scale)'
    - '$H$ depends on the free current only, e.g. $H = nI$ in a long solenoid whatever the core'
  sign: 'Diamagnet: $\chi < 0$ (induced moment opposes $\vec B$, pushed to weaker field). Paramagnet: $\chi > 0$ small. Ferromagnet: $\chi$ large and positive.'
outcomes:
  - 'Distinguish diamagnetic, paramagnetic and ferromagnetic materials by their atomic origin and their $\chi$'
  - 'Use $\vec B = \mu_0(\vec H + \vec M)$ and $\mu_r = 1+\chi$ in a solenoid with a core'
  - 'Apply Curie''s law and read a hysteresis loop (retentivity, coercivity, loss per cycle)'
  - 'Choose materials for permanent magnets, cores and shielding'
  - 'Find the force on a weak sample in a non-uniform field and the field across a boundary or air gap'
opener:
  story: |
    A magnet grabs a steel nail at once. It ignores a copper coin, a pencil and your finger. So iron is magnetic and the rest of the world is not. Right?

    Wrong. In the 1990s physicists in the Netherlands floated a live frog in mid-air inside a very strong magnet. A frog is mostly water, and water is pushed away by magnets, very weakly. Every substance answers a magnetic field. Iron just shouts, while water whispers back the opposite way.

    And iron has one more trick. Stroke a nail with a magnet and it becomes a magnet that stays one. **Why does iron shout, and why does it remember?**
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A frog floating above a strong magnet while a steel nail is pulled to a small magnet"><rect x="40" y="170" width="120" height="40" rx="4" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="100" y="196" style="font-size:11px;fill:var(--muted);text-anchor:middle">strong magnet</text><ellipse cx="100" cy="100" rx="30" ry="18" style="fill:color-mix(in srgb,var(--chem) 35%,var(--surface));stroke:var(--chem);stroke-width:2"/><circle cx="86" cy="86" r="6" style="fill:var(--surface);stroke:var(--chem);stroke-width:2"/><circle cx="112" cy="86" r="6" style="fill:var(--surface);stroke:var(--chem);stroke-width:2"/><path d="M72 112 L60 126 M128 112 L140 126" style="stroke:var(--chem);stroke-width:2.5;fill:none"/><path d="M100 164 L100 132" style="stroke:var(--bad);stroke-width:2.5;fill:none"/><path d="M94 140 L100 130 L106 140Z" style="fill:var(--bad)"/><text x="100" y="62" style="font-size:11px;fill:var(--muted);text-anchor:middle">frog: pushed away</text><rect x="230" y="150" width="60" height="24" rx="3" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><rect x="196" y="156" width="24" height="12" rx="2" style="fill:var(--muted);stroke:var(--ink);stroke-width:1.5"/><path d="M190 162 L172 162" style="stroke:var(--ink);stroke-width:2.5;fill:none"/><path d="M180 156 L170 162 L180 168Z" style="fill:var(--ink)"/><text x="255" y="196" style="font-size:11px;fill:var(--muted);text-anchor:middle">nail: pulled in</text><text x="160" y="236" style="font-size:11px;fill:var(--muted);text-anchor:middle">every material answers a magnet</text></svg>'
symbols:
  - { s: '\vec B', means: 'total magnetic field inside the material (tesla, T)' }
  - { s: '\vec H', means: 'magnetic intensity, the part set by the free current alone (amperes per metre, A/m)' }
  - { s: '\vec M', means: 'magnetisation: magnetic moment per unit volume (A/m)' }
  - { s: '\mu_0', means: 'permeability of free space ($4\pi\times10^{-7}$ T m/A)' }
  - { s: '\chi', means: 'susceptibility: how strongly the material magnetises (a pure number)' }
  - { s: '\mu_r', means: 'relative permeability: how many times the material multiplies the field (a pure number)' }
  - { s: 'C', means: 'Curie constant of a paramagnet (kelvin, K)' }
  - { s: 'T', means: 'absolute temperature (kelvin, K)' }
  - { s: 'n', means: 'turns per metre of a solenoid (1/m)' }
life:
  - 'Scrapyard cranes use an electromagnet with a soft-iron core: switch the current off and the heavy steel drops.'
  - 'Transformer and motor cores are laminated soft iron that magnetise and demagnetise easily, with little energy lost.'
  - 'Hard disks, old cassette tapes and the stripe on a card store information as tiny regions of remembered magnetisation.'
  - 'Heat a magnet red hot, or drop it hard, and it loses its strength: warmth and shocks jumble the atomic magnets.'
models:
  - name: 'Memory is history written into the thing'
    text: 'The state of a ferromagnet depends on the path it took, not only on the field now. A habit, a reputation and a debt are the same: where you are depends on how you got there.'
  - name: 'Everything responds, only the size differs'
    text: '"Non-magnetic" really means a response a hundred million times smaller. Before saying nothing happens, ask whether something small is happening.'
  - name: 'Easy to change or easy to keep, not both'
    text: 'Soft iron changes quickly and forgets; hard steel keeps its magnetism and resists change. Flexible rules are easy to improve; sticky ones last. Choose which you need.'
links:
  - leaf: 'phy/capacitors'
    name: 'Capacitors and dielectrics'
    same: 'Putting a dielectric between capacitor plates modifies the field in a way described by $\varepsilon_r$; a magnetic material modifies the field in a way described by $\mu_r$. Same bookkeeping: applied field plus the response of the atoms.'
    differs: 'A dielectric always weakens the electric field, whereas magnetic materials can weaken it (diamagnets) or strengthen it (para- and ferromagnets).'
  - leaf: 'phy/lenzs-law'
    name: 'Lenz''s law'
    same: 'Diamagnetism is Lenz''s law inside every atom: the change of field makes an atomic current that opposes it.'
    differs: 'In a wire loop the induced current dies away through resistance, but atomic currents meet none, so the opposing response lasts as long as the field does.'
next:
  q: 'Every atom''s loops are steady currents. But what if the magnetic field through a loop of wire changes with time, by pushing a magnet into a coil? Does the coil notice?'
  leaf: 'phy/electromagnetic-induction'
  name: 'Electromagnetic induction and Faraday''s law'
---

:::hook
q: Back to the frog. A small rod of bismuth hangs on a thread between the poles of a strong electromagnet, and the current is switched on. What does the rod do?
options: ["It is pulled strongly towards a pole, like iron", "It is pulled weakly towards the stronger field", "It is pushed weakly away from the stronger field"]
answer: 2
right: Right, bismuth is diamagnetic, like the frog. The field makes tiny atomic currents that point against it, so the rod is pushed gently towards weaker field and swings across the gap. Everything responds; most things respond weakly.
wrong: Bismuth is diamagnetic, like the water in the frog. The field induces atomic currents that point against it (Lenz's law at atomic scale), so the rod is pushed weakly out of the strong field and settles across the gap. Nothing is truly non-magnetic; the effect is just small.
:::

## Every atom is a tiny current loop {lvl=2 id=s-why label="Class 12"}

A current loop has a magnetic moment $m = IA$ (see the lesson on the current loop and galvanometer). Inside every atom there are such loops.

- An electron going round a nucleus is a circulating charge, so it carries an **orbital** magnetic moment. For a circular orbit of radius $r$ at speed $v$, the current is $e/(2\pi r/v)$ and the moment is $m = \tfrac12 evr$.
- The electron also has an **intrinsic** ("spin") moment of about one Bohr magneton, $\mu_B = e\hbar/2m_e \approx 9.27\times10^{-24}$ J/T. It is not literally a spinning ball; it is simply a property of the electron, like its charge.

In many atoms these moments pair off and cancel exactly: every electron moment is matched by an opposite one. In others, something is left over and the atom has a **permanent** moment.

So a field can do two different things to a material:

1. **Induce** new moments, by changing how the electrons circulate. Lenz's law says the change opposes the field. This happens in every atom, and it is **diamagnetism**.
2. **Turn** existing permanent moments towards the field. Thermal jostling fights the turning. This is **paramagnetism**, and when neighbouring moments also lock together, **ferromagnetism**.

Where both happen, the turning effect wins easily if there are permanent moments, so the material is paramagnetic or ferromagnetic. Diamagnetism shows only when the atoms have no net moment to turn.

:::qc
q: Which statement is true of every material, including copper, water and glass?
options: ["It has permanent atomic moments", "A field induces atomic moments opposite to itself", "It is attracted towards strong field", "It keeps a magnetisation after the field is removed"]
answer: 1
right: Right. Induced diamagnetic moments arise in every atom, by Lenz's law. Permanent moments, attraction and remanence belong only to some materials.
wrong: Only the induced, opposing moment (diamagnetism) is universal. Permanent moments exist only in some atoms, and remanence only in ferromagnets.
:::

## Magnetisation and the surface current {lvl=2 id=s-mag label="Class 12"}

Take a cylinder of material whose atomic moments all point along its axis. Describe it by the **magnetisation**

$$\vec M = \frac{\text{net magnetic moment}}{\text{volume}},$$

measured in A m²/m³ = **A/m**, the same unit as a current per unit length.

That unit is a clue. Picture each atom as a tiny current loop, all circulating the same way. Where two loops touch, their currents run in opposite directions and cancel. Only at the outer surface is there nothing to cancel against, so the net effect is a current running round the surface, like the winding of a solenoid.

:::figure caption="Aligned atomic loops (cross-section of a magnetised rod, M out of the page). Inside, neighbouring currents run in opposite directions and cancel. What survives is a current round the boundary: the magnetisation (Ampèrian) surface current, K = M per unit length."
<svg viewBox="0 0 300 170" role="img" aria-label="A grid of small square current loops all circulating counter-clockwise inside a large rectangle; the inner edges cancel and a bold current flows round the outer boundary">
<rect x="60" y="25" width="180" height="120" style="fill:none;stroke:var(--phy);stroke-width:4"/>
<g class="faint">
<rect x="66" y="31" width="50" height="50"/><rect x="125" y="31" width="50" height="50"/><rect x="184" y="31" width="50" height="50"/>
<rect x="66" y="89" width="50" height="50"/><rect x="125" y="89" width="50" height="50"/><rect x="184" y="89" width="50" height="50"/>
</g>
<g class="pen">
<path d="M101 56 A10 10 0 1 0 91 66"/><path d="M160 56 A10 10 0 1 0 150 66"/><path d="M219 56 A10 10 0 1 0 209 66"/>
<path d="M101 114 A10 10 0 1 0 91 124"/><path d="M160 114 A10 10 0 1 0 150 124"/><path d="M219 114 A10 10 0 1 0 209 124"/>
</g>
<polygon points="236,90 240,80 244,90" style="fill:var(--phy)"/><polygon points="64,80 60,90 56,80" style="fill:var(--phy)"/>
<polygon points="150,21 140,25 150,29" style="fill:var(--phy)"/><polygon points="150,141 160,145 150,149" style="fill:var(--phy)"/>
<text x="250" y="88">K</text><text x="120" y="164">M out of page (⊙)</text>
</svg>
:::

A rod of length $L$ and cross-section $A$ has total moment $MAL$. A surface current $K$ per unit length round it has total current $KL$ circulating round area $A$, so moment $KLA$. They match when

$$K = M.$$

So **a magnetised rod is exactly equivalent to a solenoid** carrying current $M$ per unit length round its surface. This is why a bar magnet's field looks like a solenoid's (see the lesson on the magnetic dipole and bar magnet). The current is "bound": no charge flows along a wire, yet its field is real.

## H, B and the solenoid with a core {lvl=2 id=s-h label="Class 12"}

Wind a long solenoid, $n$ turns per metre, current $I$, and fill it with a material. Two currents now make the field inside:

- the **free** current in the windings, $nI$ per unit length;
- the **bound** surface current of the core, $M$ per unit length.

Each acts like a solenoid, so

$$B = \mu_0(nI + M).$$

The free part is the one we control and can measure with an ammeter. Give it a name, the **magnetic intensity** $H$; here $H = nI$. Then:

:::law caption="Magnetic field, magnetic intensity and magnetisation. H and M are in A/m; B is in tesla."
$$\vec B = \mu_0\left(\vec H + \vec M\right)$$
:::

In general $\vec H$ is defined by this equation, and Ampère's law written for $H$ counts only free current: $\oint \vec H\cdot d\vec l = I_\text{free}$. That is why $H = nI$ in a solenoid regardless of the core.

For most materials $M$ is proportional to $H$ (until it saturates). Write

:::law caption="Susceptibility χ (a pure number) and relative permeability μᵣ for a linear material."
$$\vec M = \chi\vec H,\qquad \vec B = \mu_0(1+\chi)\vec H = \mu_0\mu_r\vec H = \mu\vec H,\qquad \mu_r = 1+\chi$$
:::

:::worked title="A soft-iron core"
A solenoid with 800 turns per metre carries 0.50 A and has a core with $\mu_r = 1500$.

- $H = nI = 800\times0.50 = 400$ A/m, whatever the core.
- $B = \mu_r\mu_0H = 1500\times4\pi\times10^{-7}\times400 = 0.754$ T.
- $M = (\mu_r - 1)H = 1499\times400 \approx 6.0\times10^{5}$ A/m.

The bound current, $6.0\times10^{5}$ A per metre, is 1499 times the free current. Without the core you would need 750 A in the windings for the same field. That is the whole point of an iron core.
:::

:::qc
q: The current in a cored solenoid is kept fixed while the iron core is pulled out. Which quantity inside stays the same?
options: ["B", "H", "M", "All three"]
answer: 1
right: Right. H = nI depends only on the free current. M drops to zero and B falls by the factor μᵣ.
wrong: H counts only free current, so H = nI stays the same. Without the core M = 0, and B = μ₀H is μᵣ times smaller.
:::

## Diamagnetism: Lenz's law inside the atom {lvl=2 id=s-dia label="Class 12"}

Switch on a field through an atom. Each electron orbit is a closed loop, and the flux through it is changing, so an EMF is induced round the orbit (Faraday's law). By Lenz's law, the change in circulation produces a moment that **opposes** the new field. Orbits going one way speed up, orbits going the other way slow down; either way the change in moment points against $\vec B$.

So every material gets a small induced $\vec M$ opposite to $\vec H$: $\chi < 0$. In a non-uniform field the sample is pushed towards **weaker** field (a later section shows why). Because the effect is so small ($|\chi|$ around $10^{-5}$), you notice it only in materials with no permanent atomic moments: bismuth, copper, water, most organic matter, the noble gases.

Diamagnetism hardly depends on temperature. The induced change in an orbit does not care how the atom as a whole is jostling about.

:::note title="The perfect diamagnet"
A **superconductor** below its critical temperature expels magnetic field from its interior: $B = 0$ inside. Then $M = -H$, so $\chi = -1$, the largest possible negative value. This is the **Meissner effect**, and it is why a small magnet can float above a cooled superconducting disc. It is not ordinary Lenz's law (a perfect conductor would only freeze in whatever flux it had); a superconductor actively pushes the flux out even if it was cooled in the field. [Unverified details: recalled from memory, not from the NCERT text.]
:::

## Paramagnetism and Curie's law {lvl=2 id=s-para label="Class 12"}

In aluminium, sodium, oxygen gas or many salts of iron-group metals, each atom (or molecule) has a permanent moment $m$. With no field they point every which way and $M = 0$.

A field $B$ exerts a torque on each moment (see the lesson on the magnetic dipole and bar magnet) and tries to line it up. Thermal collisions, with energies of order $k_BT$, keep knocking them out of line. Compare the two energies at room temperature for $m = \mu_B$ and $B = 1$ T:

$$mB \approx 9.3\times10^{-24}\ \text{J},\qquad k_BT \approx 4.1\times10^{-21}\ \text{J}.$$

The field wins by less than one part in 400. So only a tiny net alignment survives, and $\chi$ is small and positive (around $10^{-5}$ to $10^{-3}$). A paramagnet is pulled weakly towards **stronger** field.

Since the alignment is a contest between $mB$ and $k_BT$, the net magnetisation in a weak field goes as their ratio:

:::law caption="Curie's law, for a paramagnet in a weak field. C is the Curie constant of the material."
$$M = C\,\frac{B}{T}\qquad\Longleftrightarrow\qquad \chi = \frac{C\mu_0}{T}$$
:::

Cool a paramagnet and it becomes more strongly magnetised in the same field. In very strong fields or at very low temperature the ratio $mB/k_BT$ is no longer small: almost all moments line up and $M$ **saturates** at $nm$ (with $n$ atoms per unit volume). The derivation is in the Olympiad section below.

:::qc
q: A paramagnetic salt has χ = 3.0 × 10⁻⁴ at 300 K. What is χ at 100 K (weak field)?
options: ["1.0 × 10⁻⁴", "3.0 × 10⁻⁴", "9.0 × 10⁻⁴", "2.7 × 10⁻³"]
answer: 2
right: Right. χ ∝ 1/T, and the temperature fell by a factor of 3, so χ triples.
wrong: Curie's law: χ ∝ 1/T. Going from 300 K to 100 K triples χ, to 9.0 × 10⁻⁴.
:::

## Ferromagnetism and domains {lvl=2 id=s-ferro label="Class 12"}

Iron, cobalt, nickel, gadolinium and many alloys behave very differently. A modest $H$ produces an enormous $M$: $\mu_r$ in the hundreds or many thousands.

The reason is a strong quantum-mechanical coupling (the **exchange interaction**) between neighbouring atoms that makes their spin moments prefer to point the **same** way. It is far stronger than the magnetic force between two dipoles. Below a certain temperature it beats thermal agitation, and large groups of atoms line up spontaneously, with no field needed. [Inference: the exchange mechanism is beyond the NCERT text, which states only that the moments interact and align.]

If every atom in a lump of iron pointed the same way, the lump would be a strong magnet with a large external field, costing a lot of field energy. Instead the material splits into **domains**: regions, typically from micrometres up to about a millimetre across, each magnetised to saturation, but pointing in different directions so that the lump as a whole has little net moment. [Unverified: domain sizes recalled from memory.]

:::figure caption="Left: an unmagnetised ferromagnet. Each domain is fully magnetised, but the domains point different ways and their moments nearly cancel. Right: in an applied field, domains pointing along H grow by moving their walls, and at higher fields the remaining ones rotate. The sample becomes strongly magnetised."
<svg viewBox="0 0 320 150" role="img" aria-label="Two blocks divided into irregular domains. In the left block the arrows in the domains point in various directions; in the right block most of the area belongs to domains pointing right, with an applied field arrow H pointing right">
<g style="fill:none;stroke:var(--ink);stroke-width:1.5">
<rect x="15" y="20" width="130" height="100"/>
<path d="M15 70 L60 62 L80 20"/><path d="M60 62 L75 120"/><path d="M60 62 L105 75 L145 60"/><path d="M105 75 L110 120"/><path d="M105 75 L115 20"/>
<rect x="175" y="20" width="130" height="100"/>
<path d="M175 98 L200 96 L210 120"/><path d="M270 20 L285 45 L305 48"/>
</g>
<g class="pen">
<line x1="25" y1="42" x2="55" y2="42"/><line x1="90" y1="55" x2="90" y2="30"/><line x1="135" y1="30" x2="135" y2="55"/>
<line x1="55" y1="100" x2="25" y2="100"/><line x1="90" y1="85" x2="90" y2="110"/><line x1="140" y1="95" x2="118" y2="95"/>
<line x1="195" y1="50" x2="245" y2="50"/><line x1="215" y1="80" x2="265" y2="80"/><line x1="240" y1="105" x2="290" y2="105"/>
<line x1="185" y1="112" x2="185" y2="104"/><line x1="290" y1="38" x2="290" y2="30"/>
</g>
<g style="fill:var(--phy)">
<polygon points="55,38 63,42 55,46"/><polygon points="86,30 90,22 94,30"/><polygon points="131,55 135,63 139,55"/>
<polygon points="25,96 17,100 25,104"/><polygon points="86,110 90,118 94,110"/><polygon points="118,91 110,95 118,99"/>
<polygon points="245,46 253,50 245,54"/><polygon points="265,76 273,80 265,84"/><polygon points="290,101 298,105 290,109"/>
</g>
<line class="ray" x1="200" y1="138" x2="270" y2="138"/><polygon points="270,134 278,138 270,142" style="fill:var(--phy)"/>
<text x="282" y="142">H</text><text x="45" y="140">no field</text>
</svg>
:::

An applied field favours the domains already pointing roughly along it. At first their walls slide, so these domains grow at the expense of the others; this is easy and gives the huge $\chi$. At higher fields the remaining domains rotate. When everything points along $H$, $M$ cannot grow any more: the sample is **saturated**.

**Heat destroys it.** Above the **Curie temperature** $T_C$ thermal agitation wins over the exchange coupling, the spontaneous alignment vanishes, and the material becomes an ordinary paramagnet, with

$$\chi = \frac{C\mu_0}{T - T_C}\qquad (T > T_C).$$

Approximate Curie temperatures: iron about 1043 K (770 °C), nickel about 631 K, cobalt about 1394 K, gadolinium about 293 K, just below room temperature. [Unverified: values recalled from memory.] Heat a steel magnet to red heat and it loses its magnetism.

## Hysteresis: the material remembers {lvl=2 id=s-hyst label="Class 12"}

Put an unmagnetised iron ring inside a toroidal winding, raise $H$ from zero and watch $B$. It climbs steeply (domain walls sliding), then levels off at saturation: the dashed curve below.

Now bring $H$ back to zero. $B$ does **not** retrace its path. Domain walls catch on impurities and grain boundaries and do not all slide back, so a field $B_r$ remains at $H = 0$. You have made a permanent magnet.

To remove that field you must drive $H$ **negative**, to $-H_c$. Keep going and the iron saturates the other way; come back and it traces a matching lower branch. The closed curve is the **hysteresis loop** (Greek *hysteresis*, "lagging behind").

:::figure caption="Hysteresis loop of a ferromagnet. Dashed: first magnetisation from the unmagnetised state. Bᵣ is the retentivity (remanence), the field left at H = 0. Hc is the coercivity, the reverse H needed to bring B to zero. The loop is traced anticlockwise as H cycles."
<svg viewBox="0 0 320 220" role="img" aria-label="A B versus H graph with an S-shaped closed loop. The upper branch crosses the B axis at B r and the H axis at minus H c; the lower branch crosses at minus B r and plus H c. A dashed curve rises from the origin to the top right tip.">
<line class="axis" x1="20" y1="110" x2="300" y2="110"/><line class="axis" x1="160" y1="200" x2="160" y2="15"/>
<text x="292" y="126">H</text><text x="166" y="20">B</text>
<path d="M280 30 C220 40 180 50 160 55 C140 62 128 85 120 110 C110 145 80 180 40 190" style="fill:none;stroke:var(--phy);stroke-width:2.5"/>
<path d="M40 190 C100 180 140 170 160 165 C180 158 192 135 200 110 C210 75 240 40 280 30" style="fill:none;stroke:var(--phy);stroke-width:2.5"/>
<path class="faint" d="M160 110 C176 104 186 62 280 30" style="stroke-dasharray:5 4"/>
<circle cx="160" cy="55" r="3.5" style="fill:var(--ink)"/><circle cx="120" cy="110" r="3.5" style="fill:var(--ink)"/>
<circle cx="160" cy="165" r="3.5" style="fill:var(--ink)"/><circle cx="200" cy="110" r="3.5" style="fill:var(--ink)"/>
<text x="166" y="50">Bᵣ</text><text x="96" y="104">−H<tspan dy="3" font-size="9">c</tspan></text><text x="166" y="182">−Bᵣ</text><text x="204" y="128">H<tspan dy="3" font-size="9">c</tspan></text>
<text x="238" y="24">saturation</text><polygon points="214,44 206,46 212,40" style="fill:var(--phy)"/><polygon points="98,182 106,180 100,186" style="fill:var(--phy)"/>
</svg>
:::

Two numbers characterise the loop:

- **Retentivity** (remanence) $B_r$: how much field the material keeps on its own.
- **Coercivity** $H_c$: how hard it is to demagnetise.

### Choosing the material

Which loop shape you want depends on the job.

| Use | What it needs | Material |
|---|---|---|
| Permanent magnet | high $B_r$ **and** high $H_c$, so stray fields, knocks and heat cannot erase it | hard steel, alnico, ferrites, NdFeB |
| Electromagnet core | high $\mu_r$, low $H_c$, low $B_r$, so it switches off cleanly | soft iron |
| Transformer or motor core | thin loop (small area, as the next section shows that area is energy lost each cycle), high $\mu_r$ | soft iron, silicon steel, ferrites |

Note that soft iron can have a **higher** retentivity than steel. What makes steel suitable for permanent magnets is its much larger coercivity: its magnetism is hard to knock out. [Unverified: the comparison follows the NCERT text's discussion as recalled; specific alloys recalled from memory.]

:::figure caption="Soft iron (left): tall, thin loop, easy to magnetise and demagnetise, little energy lost per cycle. Hard steel (right): wide loop with a large coercivity, hard to demagnetise, the right choice for permanent magnets."
<svg viewBox="0 0 320 150" role="img" aria-label="Two B–H loops side by side; the left one narrow and tall labelled soft iron, the right one wide labelled steel">
<line class="axis" x1="10" y1="75" x2="150" y2="75"/><line class="axis" x1="80" y1="140" x2="80" y2="10"/>
<path d="M140 20 C110 24 88 30 80 33 C74 36 72 55 70 75 C68 100 50 125 20 130 C50 126 76 120 80 117 C86 114 88 95 90 75 C92 50 110 26 140 20" style="fill:none;stroke:var(--phy);stroke-width:2.2"/>
<line class="axis" x1="170" y1="75" x2="310" y2="75"/><line class="axis" x1="240" y1="140" x2="240" y2="10"/>
<path d="M305 30 C280 36 255 40 240 42 C215 45 205 60 200 75 C192 100 200 115 175 120 C200 114 225 110 240 108 C265 105 275 90 280 75 C288 50 280 35 305 30" style="fill:none;stroke:var(--phy);stroke-width:2.2"/>
<text x="40" y="148">soft iron</text><text x="215" y="148">steel</text>
<text x="142" y="70">H</text><text x="84" y="16">B</text><text x="302" y="70">H</text><text x="244" y="16">B</text>
</svg>
:::

:::qc
q: Which property matters most for the core of an electromagnet used in a scrap-yard crane that must drop its load when switched off?
options: ["High retentivity", "High coercivity", "Low coercivity", "Large loop area"]
answer: 2
right: Right. Low coercivity means the magnetism collapses as soon as the current stops, and the scrap falls.
wrong: The crane must release its load. A low-coercivity (soft) core loses its magnetisation easily when the current is switched off.
:::

## Forces on a sample in a non-uniform field {lvl=3 id=s-force label="JEE"}

Why does a paramagnet move towards strong field and a diamagnet away? In a **uniform** field neither moves: a dipole feels a torque but no net force. A net force needs a field that changes with position.

Take a small sample of volume $V$ and susceptibility $\chi$ with $|\chi| \ll 1$. Its moment is $\vec m = \vec M V = \chi V\vec B/\mu_0$, parallel to $\vec B$ if $\chi>0$. The energy of a dipole is $-\vec m\cdot\vec B$, but this moment is *induced*: it grows from zero as the field is applied. Building it up from $0$ to $B$ gives

$$U = -\int_0^{B}\frac{\chi V}{\mu_0}B'\,dB' = -\frac{\chi V}{2\mu_0}B^2.$$

(The factor $\tfrac12$ is the same one that appears for an induced electric dipole.) The force is $-\nabla U$:

:::law caption="Force on a small, weakly magnetic sample (|χ| ≪ 1). Positive χ: pushed towards larger B². Negative χ: pushed towards smaller B²."
$$\vec F = \frac{\chi V}{2\mu_0}\nabla\!\left(B^2\right),\qquad F_x = \frac{\chi V}{\mu_0}\,B\,\frac{dB}{dx}$$
:::

:::worked title="How strong is paramagnetic attraction?"
A 1.0 cm³ aluminium sample ($\chi \approx 2.2\times10^{-5}$ [Unverified value], density 2.7 g/cm³) sits where $B = 1.5$ T and $dB/dx = 10$ T/m.

$$F = \frac{2.2\times10^{-5}\times10^{-6}}{4\pi\times10^{-7}}\times1.5\times10 = 2.6\times10^{-4}\ \text{N}.$$

Its weight is $2.7\times10^{-3}\times9.8 = 2.6\times10^{-2}$ N, a hundred times larger. Paramagnetic forces are real but small; you need a sensitive balance (a Gouy or Faraday balance) to measure them.
:::

The same formula explains the famous levitated frog: with a strong enough $B\,dB/dz$, the diamagnetic push on the water in living tissue balances gravity. One of the advanced problems asks for the value needed.

## Boundary conditions and magnetic circuits {lvl=3 id=s-bc label="JEE"}

When field lines cross from one material into another, two rules fix how they bend. Both come straight from the two laws of magnetostatics.

- **No magnetic charge** ($\oint\vec B\cdot d\vec A = 0$). A flat pill-box straddling the interface has as much flux in as out, so the **normal component of $\vec B$ is continuous**: $B_{1\perp} = B_{2\perp}$.
- **Ampère's law for H** ($\oint\vec H\cdot d\vec l = I_\text{free}$). A thin rectangle straddling the interface encloses no free current (unless a wire runs along the surface), so the **tangential component of $\vec H$ is continuous**: $H_{1\parallel} = H_{2\parallel}$.

Measure angles from the normal. Then $\tan\theta = B_\parallel/B_\perp$, and $B_\parallel = \mu H_\parallel$, so

:::law caption="Refraction of magnetic field lines at an interface with no free surface current."
$$\frac{\tan\theta_1}{\mu_1} = \frac{\tan\theta_2}{\mu_2}$$
:::

With $\mu_2 \gg \mu_1$ (iron next to air), lines inside the iron run almost along the surface while lines in the air leave almost **perpendicular** to it. That is why field lines leave a soft-iron pole face nearly at right angles.

**Magnetic circuits.** High-$\mu$ iron guides flux the way copper guides current. Take an iron ring of mean length $l$ and permeability $\mu_r$, with a narrow air gap of width $g$, wound with $N$ turns carrying $I$. The flux crosses the gap faces normally, so $B$ is the same in iron and gap (ignoring fringing). But $H$ differs: $H_\text{iron} = B/\mu_r\mu_0$ and $H_\text{gap} = B/\mu_0$. Ampère's law round the ring gives

$$\frac{B}{\mu_r\mu_0}\,l + \frac{B}{\mu_0}\,g = NI \quad\Longrightarrow\quad B = \frac{\mu_0 NI}{l/\mu_r + g}.$$

The terms $l/\mu_r$ and $g$ add like resistances in series ("reluctances"). With $l = 0.40$ m, $\mu_r = 2000$ and $g = 1.0$ mm, the iron contributes $0.20$ mm and the gap $1.0$ mm: a 1 mm slit of air dominates 40 cm of iron.

:::qc
q: Field lines in an iron block (μᵣ = 1000) make 45° with the normal at the iron–air surface. In the air just outside, the angle with the normal is about
options: ["45°", "0.06°", "89.9°", "1°"]
answer: 1
right: Right. tan θ_air = tan 45° / 1000 = 0.001, so θ ≈ 0.057°. The lines leave almost perpendicular to the surface.
wrong: tan θ₁/μ₁ = tan θ₂/μ₂. Going from μᵣ = 1000 into air, tan θ falls by 1000: tan θ_air = 0.001, θ ≈ 0.06°.
:::

## Energy lost in a hysteresis cycle {lvl=3 id=s-loss label="JEE"}

Why is loop area wasted energy? Take a toroidal core of cross-section $A$ and mean length $l$, wound with $N$ turns. As $B$ changes, the induced EMF in the winding is $N A\,dB/dt$, and the source must push current $I$ against it. The work supplied in time $dt$ is

$$dW = I\,NA\,\frac{dB}{dt}\,dt = (Al)\,\frac{NI}{l}\,dB = (\text{volume})\;H\,dB,$$

using $H = NI/l$. Over a full cycle the core returns to the same state, so any net work has been turned into heat:

:::law caption="Hysteresis loss per unit volume per cycle. It equals the area enclosed by the B–H loop."
$$w = \oint H\,dB$$
:::

(Some books plot $M$ against $H$; then the loss per cycle is $\mu_0\oint H\,dM$, which is the same number, because $\oint H\,dH = 0$.) The units check: (A/m)·T = J/m³.

A transformer core of volume $V$ running at frequency $f$ loses power $wVf$. A core of 2000 cm³ with a loop area of 300 J/m³ at 50 Hz loses $300\times2\times10^{-3}\times50 = 30$ W, all as heat. This is why cores use soft iron or silicon steel with the thinnest loops available, and why the loss grows with frequency.

## Curie's law from thermal statistics {lvl=4 id=s-curie label="Olympiad"}

Let a paramagnet have $n$ independent moments per unit volume, each of size $m$, in field $B$ at temperature $T$. The energy of a moment at angle $\theta$ to the field is $-mB\cos\theta$, and the Boltzmann factor $e^{mB\cos\theta/k_BT}$ weights each orientation.

**Two-state model.** If each moment can point only along or against $B$ (as for an electron spin, roughly), with energies $\mp mB$:

$$M = nm\,\frac{e^{x} - e^{-x}}{e^{x} + e^{-x}} = nm\tanh x,\qquad x = \frac{mB}{k_BT}.$$

For small $x$, $\tanh x \approx x$, so $M \approx nm^2B/(k_BT)$.

**Classical model (Langevin).** If every direction is allowed, averaging $\cos\theta$ over a sphere with the Boltzmann weight gives

$$\langle\cos\theta\rangle = \coth x - \frac1x \approx \frac x3\quad(x\ll1),\qquad M \approx \frac{nm^2B}{3k_BT}.$$

Either way, in a weak field $M \propto B/T$, which is Curie's law, and $\chi \approx \mu_0 M/B$ gives

$$\chi = \frac{\mu_0 n m^2}{3k_BT}\ \text{(classical)}.$$

The numerical factor (1 or ⅓) depends on how many orientations quantum mechanics allows; real atoms lie in between, with $m^2$ replaced by an effective value. [Inference: this summary of the quantum case is a simplification.] At large $x$ both models saturate at $M = nm$.

**Curie–Weiss.** Weiss supposed each moment also feels a "molecular field" from its aligned neighbours, proportional to $M$, so that the effective intensity is $H + \lambda M$. Curie's law written as $M = (C/T)(H_\text{eff})$ then gives $M = (C/T)(H + \lambda M)$, so $M = CH/(T - \lambda C)$. The susceptibility blows up at $T_C = \lambda C$: below it, a magnetisation can sustain itself with no applied field. This is the simplest model of a ferromagnet.

## Diamagnetism worked out {lvl=4 id=s-larmor label="Olympiad"}

Take an electron (charge $-e$, mass $m_e$) on a circular orbit of radius $r$ in the $xy$ plane, and raise $B_z$ slowly from 0 to $B$. Faraday's law round the orbit gives a tangential electric field

$$E\cdot2\pi r = \pi r^2\,\frac{dB}{dt}\quad\Longrightarrow\quad E = \frac r2\,\frac{dB}{dt}$$

(in magnitude). This field changes the electron's speed: $m_e\,dv = eE\,dt = \tfrac12 er\,dB$, so after the field is on,

$$\Delta v = \frac{erB}{2m_e}.$$

The radius stays the same: the extra Lorentz force $evB$ supplies exactly the extra centripetal force needed to first order. The moment of the orbit is $\tfrac12evr$, so it changes by

$$\Delta m = \frac{e^2r^2}{4m_e}B,$$

and Lenz's law fixes its direction: **opposite** to $\vec B$, whichever way the electron was going. Orbits that were clockwise and anticlockwise both shift the same way, which is why the effect never cancels.

For an atom with $Z$ electrons whose orbits are oriented at random, only the part of $r^2$ perpendicular to $B$ counts, $\langle x^2 + y^2\rangle = \tfrac23\langle r^2\rangle$, so

$$\chi = -\frac{\mu_0 nZe^2\langle r^2\rangle}{6m_e}.$$

With $n\sim5\times10^{28}$ m⁻³, $Z\sim10$ and $\langle r^2\rangle\sim10^{-21}$ m², this gives $|\chi|\sim10^{-5}$: the right size.

:::note title="A warning about classical pictures" tone=olympiad
The Bohr–van Leeuwen theorem says that a fully classical gas of charges in thermal equilibrium has **no** magnetisation at all; the diamagnetic and the surface effects cancel exactly. The argument above works because it assumes stable orbits, which only quantum mechanics justifies. Treat it as a correct estimate built on a quantum fact. [Inference: theorem recalled from memory, stated without proof.]
:::

## Shielding, spheres and superconductors {lvl=4 id=s-shield label="Olympiad"}

**The uniformly magnetised sphere.** A sphere of radius $R$ with uniform magnetisation $\vec M$ has a perfectly uniform field inside and a pure dipole field outside:

$$\vec B_\text{in} = \tfrac23\mu_0\vec M,\qquad \vec m = \tfrac43\pi R^3\vec M.$$

This mirrors the uniformly polarised dielectric sphere ($\vec E_\text{in} = -\vec P/3\varepsilon_0$). Combining it with a uniform applied field solves a sphere of any $\mu_r$ in a uniform field.

**Superconducting sphere.** In an applied field $\vec B_0$, a superconductor must have $\vec B = 0$ inside. Superpose a uniformly magnetised sphere with $\tfrac23\mu_0\vec M = -\vec B_0$. Outside, the sphere's dipole field adds to $\vec B_0$. At the poles the normal component must vanish (it is zero inside, and $B_\perp$ is continuous), and it does. At the equator the dipole field points along $\vec B_0$ with size $\mu_0|M|/3 = B_0/2$, so the surface field there is $\tfrac32B_0$. Field lines crowd round the equator. Once $\tfrac32B_0$ exceeds the material's critical field, superconductivity breaks down there first.

**Shielding.** A shell of high-$\mu$ material draws field lines into itself (they prefer the easy path) and carries them round the cavity. For a spherical shell of outer radius $b$, thickness $t \ll b$ and $\mu_r \gg 1$, the field inside is reduced by about

$$\frac{B_\text{in}}{B_0} \approx \frac{3b}{2\mu_r t}.$$

[Unverified: thin-shell limit of the standard exact result for a spherical shell, recalled from memory, not derived here.] A shell of radius 5 cm, 1 mm thick, with $\mu_r = 10^4$, cuts the field to under 1%. Nested shells multiply their factors. Laboratories use this (with "mu-metal", a nickel–iron alloy) to shield sensitive instruments from the Earth's field.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Electrons carry orbital and spin magnetic moments. A field induces opposing moments in every atom (diamagnetism) and turns any permanent moments towards itself (paramagnetism, ferromagnetism). {lvl=2}
2. Magnetisation $\vec M$ is moment per unit volume (A/m). A magnetised body is equivalent to a surface current $K = M$ per unit length. {lvl=2}
3. $\vec B = \mu_0(\vec H + \vec M)$; $H$ counts only free current, so $H = nI$ in a solenoid whatever the core. {lvl=2}
4. Linear materials: $M = \chi H$, $\mu_r = 1+\chi$, $B = \mu_r\mu_0H$. {lvl=2}
5. Diamagnetic: $\chi$ small, negative, almost independent of $T$. Paramagnetic: $\chi$ small, positive, $\chi = C\mu_0/T$ (Curie). Ferromagnetic: $\chi$ large, field-dependent; paramagnetic above $T_C$. Superconductor: $\chi = -1$. {lvl=2}
6. Ferromagnets form domains; magnetising means wall motion and then rotation, up to saturation. {lvl=2}
7. Hysteresis: retentivity $B_r$ is what stays at $H = 0$; coercivity $H_c$ is the reverse $H$ that removes it. Permanent magnets need high $H_c$; cores need low $H_c$ and thin loops. {lvl=2}
8. Force on a weak sample: $F_x = (\chi V/\mu_0)B\,dB/dx$; paramagnets go to strong field, diamagnets to weak field. {lvl=3}
9. At interfaces $B_\perp$ and $H_\parallel$ are continuous; $\tan\theta_1/\mu_1 = \tan\theta_2/\mu_2$. In a gapped core $B = \mu_0NI/(l/\mu_r + g)$. {lvl=3}
10. Hysteresis loss per unit volume per cycle is $\oint H\,dB$, the loop area. {lvl=3}
11. Curie's law from Boltzmann statistics: $M = nm\tanh(mB/k_BT)$ (two-state) or $nmL(x)$ (classical); weak field $M\propto B/T$. {lvl=4}
12. Induced orbital moment $\Delta m = e^2r^2B/4m_e$, against $B$. Superconducting sphere: surface field $\tfrac32B_0$ at the equator. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- H depends on the free current only. Do not multiply $nI$ by $\mu_r$ to get H; that gives $B/\mu_0$. {lvl=2}
- $\mu_r = 1 + \chi$, not $\chi$. For paramagnets and diamagnets $\mu_r$ is barely different from 1. {lvl=2}
- Curie's law uses absolute temperature. Convert °C to K before taking ratios. {lvl=2}
- "Soft" and "hard" refer to coercivity, not to retentivity. Soft iron can keep more remanence than steel and still make a poor permanent magnet. {lvl=2}
- A uniform field exerts no net force on a magnetic sample, only on its orientation. Dia- and paramagnetic forces need a gradient. {lvl=3}
- The force on an induced moment carries a factor ½ in its energy ($U = -\chi VB^2/2\mu_0$) that a permanent dipole's energy does not. {lvl=3}
- In a magnetic circuit, B (not H) is the same across a gap normal to the flux. A thin air gap can dominate a long iron path. {lvl=3}
- Loop area is energy per unit volume per cycle; multiply by volume and frequency for power. Check the axes: B–H gives J/m³ directly, M–H needs a factor $\mu_0$. {lvl=3}
- Classical and two-state models differ by a factor of 3 in the Curie constant. Use whichever the problem specifies. {lvl=4}
:::
