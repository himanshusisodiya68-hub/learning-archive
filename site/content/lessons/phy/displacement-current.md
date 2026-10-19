---
title: Displacement current and Maxwell's equations
summary: 'A missing piece in the laws of magnetism, and the bold fix that led to the discovery that light is a wave.'
ncert: ["Class 12 Physics · Ch 8 Electromagnetic Waves (§8.1–8.2)"]
up_to: Olympiad
builds_on: [Ampère's circuital law, Gauss's law, Capacitors, Electromagnetic induction]
notes_prompt: Explain in your own words why a changing electric field between capacitor plates must produce a magnetic field, using only the idea that a loop around a wire can bound more than one surface.
margin:
  - kind: history
    title: History
    text: "James Clerk Maxwell added the displacement-current term in the early 1860s (the paper 'On Physical Lines of Force', 1861–62) and set out the full theory in 'A Dynamical Theory of the Electromagnetic Field' (1865). Heinrich Hertz confirmed the predicted waves experimentally in 1887–88. [Unverified: titles and dates recalled from memory.]"
  - kind: tip
    title: Not a flow of charge
    text: Displacement current carries no charge and no electrons cross the gap. It is a changing electric field that acts, for the purpose of making a magnetic field, exactly like a current. Measure it in amperes all the same.
  - kind: olympiad
    title: Olympiad link
    text: A leaky capacitor that discharges through its own slightly conducting dielectric produces no magnetic field at all. The conduction current through the dielectric and the displacement current cancel exactly at every point. See the last section.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 8 Electromagnetic Waves, §8.1–8.2" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 7 Electrodynamics, §7.3 Maxwell's equations; §8.1 Poynting's theorem [Unverified section numbers]" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 9 Maxwell's equations and electromagnetic waves [Unverified chapter number]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3, section on Maxwell's equations and displacement current [Unverified section number]" }
cards:
  - { front: "Definition of the displacement current?", back: "$i_d = \\varepsilon_0\\,\\dfrac{d\\Phi_E}{dt}$, where $\\Phi_E$ is the electric flux through the surface. In a dielectric, $i_d = d\\Phi_D/dt$ with $\\vec D = \\varepsilon\\vec E$." }
  - { front: "Ampère–Maxwell law?", back: "$\\oint\\vec B\\cdot d\\vec l = \\mu_0 i_c + \\mu_0\\varepsilon_0\\dfrac{d\\Phi_E}{dt}$." }
  - { front: "B between circular capacitor plates (radius R) carrying displacement current i_d?", back: "Inside, $B = \\dfrac{\\mu_0 i_d r}{2\\pi R^2}$ (grows linearly); outside, $B = \\dfrac{\\mu_0 i_d}{2\\pi r}$, the same as around the wire. Maximum at $r = R$." }
  - { front: "Ratio of conduction to displacement current density in a medium (σ, ε) at angular frequency ω?", back: "$J_c/J_d = \\sigma/(\\omega\\varepsilon)$. They are equal at $\\omega = \\sigma/\\varepsilon$; above it the medium behaves like a dielectric, below it like a conductor." }
  - { front: "Why must the displacement term exist (continuity argument)?", back: "Charge conservation says $\\nabla\\cdot\\vec J = -\\partial\\rho/\\partial t$, but the divergence of a curl is zero, so $\\nabla\\times\\vec B = \\mu_0\\vec J$ forces $\\nabla\\cdot\\vec J = 0$. Adding $\\varepsilon_0\\partial\\vec E/\\partial t$ (with Gauss's law) restores consistency." }
  - { front: "Energy flow into a charging parallel-plate capacitor?", back: "The Poynting vector $\\vec S = \\vec E\\times\\vec B/\\mu_0$ points radially inward at the rim; $S\\cdot 2\\pi R d = \\dfrac{d}{dt}\\left(\\tfrac12\\varepsilon_0E^2\\,\\pi R^2 d\\right)$. Energy enters through the sides, not along the wires." }
core:
  idea: 'A changing electric flux acts as a source of magnetic field exactly like a conduction current: $i_d = \varepsilon_0\,d\Phi_E/dt$. With it Ampère''s law holds for every surface bounded by the loop, and in a charging capacitor $i_d = i_c$.'
  formulas:
    - tex: 'i_d = \varepsilon_0\frac{d\Phi_E}{dt}'
      label: 'Displacement current'
    - tex: '\oint \vec B\cdot d\vec l = \mu_0\left(i_c + i_d\right) = \mu_0 i_c + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}'
      label: 'Ampère–Maxwell law'
  conditions:
    - 'Parallel-plate capacitor with a uniform field between the plates and fringing neglected'
    - 'Vacuum gap ($\varepsilon_0$); with a dielectric use $\varepsilon = K\varepsilon_0$'
    - 'Circular plates, so symmetry gives $B(r)$ from a circular Amperian loop; charge is conserved'
  sign: '$i_d$ points along $d\vec E/dt$, not along $\vec E$: while the capacitor discharges they point opposite ways. $i_d$ carries no charge across the gap.'
outcomes:
  - 'Explain why Ampère''s law fails for a charging capacitor and how displacement current repairs it'
  - 'Show that $i_d = i_c$ and find the magnetic field between circular plates, inside and outside'
  - 'State Maxwell''s four equations in integral form and what each says'
  - 'Compare conduction and displacement current in matter using $\sigma/\omega\varepsilon$'
  - 'Derive the displacement term from charge conservation and show energy enters the capacitor through its rim'
opener:
  story: |
    Hold a compass near a wire carrying a current and the needle swings. A current makes a magnetic field that circles around it. That is one of the first things you learn about magnetism.

    Now cut the wire and put a capacitor in the gap: two plates facing each other with nothing between them. Current flows along the wire, piles charge onto one plate and draws it off the other. But nothing crosses the empty gap. Charge cannot leap through air, so inside the gap there is no current at all.

    So here is the puzzle that bothered James Clerk Maxwell in the 1860s. If a magnetic field needs a current, then there should be no magnetic field in the gap. Yet draw a loop round the wire just before the plate, and another of the same size round the gap just after it. Should the magnetic field suddenly vanish?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A capacitor in a wire: current in the wire, a growing electric field in the gap, and a loop drawn round the wire and round the gap"><path d="M15 120 H118 M152 120 H305" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M118 82 V158 M152 82 V158" style="stroke:var(--c);stroke-width:4"/><path d="M122 100 h26 m-5 -3 l5 3 l-5 3 M122 120 h26 m-5 -3 l5 3 l-5 3 M122 140 h26 m-5 -3 l5 3 l-5 3" style="fill:none;stroke:var(--bad);stroke-width:1.5"/><ellipse cx="62" cy="120" rx="8" ry="32" style="fill:none;stroke:var(--chem);stroke-width:2;stroke-dasharray:4 3"/><ellipse cx="135" cy="120" rx="8" ry="32" style="fill:none;stroke:var(--chem);stroke-width:2;stroke-dasharray:4 3"/><path d="M26 108 h24 m-6 -4 l6 4 l-6 4" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="24" y="100" style="font-size:11px;fill:var(--ink)">current</text><text x="30" y="176" style="font-size:11px;fill:var(--chem)">loop round the wire</text><text x="104" y="68" style="font-size:11px;fill:var(--chem)">loop round the gap?</text><text x="106" y="192" style="font-size:11px;fill:var(--bad)">electric field growing</text><text x="168" y="214" style="font-size:11px;fill:var(--muted)">no charge crosses the gap</text></svg>'
life:
  - 'A camera flash charges a capacitor: current fills it through the wires while nothing crosses the gap between its plates.'
  - 'Every capacitor in your phone and charger passes AC although no charge ever crosses it; the changing field in the gap completes the circuit.'
  - 'A touch screen senses your finger by the tiny AC current its plates and your finger exchange, the same gap-completing effect.'
  - 'The idea behind radio, Wi-Fi and mobile signals: changing fields in empty space can make each other, with no wires at all, which the next lesson explores.'
  - 'Maxwell''s equations, built from this one correction, underlie every motor, generator, antenna and optical fibre.'
models:
  - name: 'When two reliable rules disagree, one is incomplete'
    text: 'Maxwell trusted Ampère''s law and charge conservation, found they clashed for a charging capacitor, and repaired the law rather than throwing either away. When two things you trust collide, look for the missing piece.'
  - name: 'Use a conservation law as a compass'
    text: 'Charge cannot vanish. Demanding that the books balance told Maxwell exactly what the missing term had to be. A budget, a ledger and a sanity check all work the same way: what goes in must be accounted for.'
  - name: 'Same effect, different cause'
    text: 'A changing electric field makes a magnetic field exactly as a flow of charge does, so for that purpose they count as one. Cash and a card payment differ in mechanism but do the same job for the shop.'
links:
  - leaf: 'phy/electromagnetic-induction'
    name: 'Electromagnetic induction'
    same: 'Beautiful symmetry: a changing magnetic field makes an electric field (Faraday), and a changing electric field makes a magnetic field (Maxwell). The two together are the engine of light.'
    differs: 'The constant $\mu_0\varepsilon_0$ is so tiny that the second effect is invisible unless the field changes very fast, which is why Faraday''s effect was found sixty years before Maxwell''s, and there is no minus sign in the Ampère–Maxwell law the way Lenz''s law has one.'
  - leaf: 'phy/gausss-law'
    name: 'Gauss''s law'
    same: 'Gauss''s law gives the electric flux through the gap as $\Phi_E = Q/\varepsilon_0$, and differentiating it shows at once that $i_d = i_c$.'
    differs: 'Gauss''s law is about the field at one instant; the displacement term is about how fast it is changing.'
symbols:
  - s: 'i_c'
    means: 'conduction current, the flow of real charge in a wire (amperes, A)'
  - s: 'i_d'
    means: 'displacement current, the changing electric flux acting like a current (amperes, A)'
  - s: '\vec E'
    means: 'electric field (volts per metre, V/m)'
  - s: '\Phi_E'
    means: 'electric flux, the amount of electric field through a surface (V m)'
  - s: '\varepsilon_0'
    means: 'permittivity of free space, $8.85\times10^{-12}$ F/m'
  - s: '\vec B'
    means: 'magnetic field (tesla, T)'
  - s: '\mu_0'
    means: 'permeability of free space, $4\pi\times10^{-7}$ T m/A'
  - s: '\oint \vec B\cdot d\vec l'
    means: 'add up the magnetic field along a closed loop (T m)'
  - s: 'r'
    means: 'distance from the axis of the capacitor (metres, m)'
next:
  q: 'If a changing magnetic field makes an electric field, and a changing electric field makes a magnetic field, could the two keep each other going by themselves, with no wires and no charges? How fast would such a thing travel?'
  leaf: 'phy/electromagnetic-waves'
  name: 'Electromagnetic waves'
---

:::hook
q: So what's your guess? A capacitor with circular plates is charged by a steady current of 1 A. No charge crosses the empty gap. Is there a magnetic field in the gap region?
options: ["No: no current flows there", "Yes, and just outside the plates it equals the field of the wire at the same distance", "Only near the edges of the plates"]
answer: 1
right: Right, and Maxwell's guess was bold. The electric field in the gap is growing, and a growing electric field makes a magnetic field just as a current does. Outside the plate edge the field is exactly what a 1 A wire would give at that distance. This lesson explains why.
wrong: There is a magnetic field. The electric field in the gap is growing, and Maxwell showed that a changing electric field produces a magnetic field exactly as a current does. Just outside the plate edge it equals the field of the 1 A wire at the same distance.
:::

## Two kinds of current {lvl=2 id=s-idea label="Class 12"}

So far a magnetic field has had one source: moving charge, a **conduction current**. Ampère's circuital law says how much field it makes. Take any closed loop; add up $\vec B\cdot d\vec l$ around it; the total is $\mu_0$ times the current that passes through the loop:

$$\oint \vec B\cdot d\vec l = \mu_0\, i_c .$$

"Passes through the loop" needs care. A loop is a curve, not a hole. What we really count is the current through a **surface** whose edge is the loop. For a steady current in a complete circuit it does not matter which surface we pick: whatever enters one side must leave by the other, so every surface with that edge is crossed by the same net current.

That last sentence is the weak point. It is true only if charge never piles up anywhere. A capacitor that is charging is exactly a place where charge piles up.

## The paradox: one loop, two surfaces {lvl=2 id=s-paradox label="Class 12"}

A current $I$ flows along a wire into the left plate of a capacitor. Draw a circular loop $C$ round the wire, a little to the left of the plate. By symmetry $B$ is the same all round the loop and points along it, so the left side of Ampère's law is $B\cdot 2\pi r$. That number is fixed by the field; it cannot depend on how we imagine a surface.

Now choose two surfaces with the loop as their edge:

- $S_1$, a flat disc. The wire pierces it, so the current through it is $I$. Ampère gives $B\cdot2\pi r = \mu_0 I$.
- $S_2$, a pot-shaped surface whose bottom passes through the gap between the plates. No wire crosses it, so the conduction current through it is zero. Ampère gives $B\cdot2\pi r = 0$.

:::figure caption="The same loop C (edge-on, as an ellipse) bounds the flat surface S₁, which the wire pierces, and the pot-shaped surface S₂, which dips into the gap. No conduction current crosses S₂, but a growing electric field E does."
<svg viewBox="0 0 320 180" role="img" aria-label="A wire enters the left plate of a capacitor. A loop around the wire is drawn as an ellipse. A flat surface fills the loop; a curved pot-shaped surface goes from the loop over the top of the left plate, down through the gap and back under the bottom of the plate.">
<line class="obj" x1="10" y1="90" x2="170" y2="90" style="stroke:var(--ink);stroke-width:2"/>
<line class="obj" x1="200" y1="90" x2="310" y2="90" style="stroke:var(--ink);stroke-width:2"/>
<line x1="170" y1="40" x2="170" y2="140" style="stroke:var(--phy);stroke-width:5"/>
<line x1="200" y1="40" x2="200" y2="140" style="stroke:var(--ink);stroke-width:5"/>
<polygon points="40,85 50,90 40,95" style="fill:var(--ink)"/>
<polygon points="270,85 280,90 270,95" style="fill:var(--ink)"/>
<text x="38" y="80">I</text><text x="268" y="80">I</text>
<ellipse cx="100" cy="90" rx="9" ry="35" style="fill:var(--phy);fill-opacity:0.15;stroke:var(--phy);stroke-width:2"/>
<text x="90" y="45">C</text><text x="72" y="140">S₁</text>
<path class="pen" d="M100 55 C130 15, 186 15, 186 55 L186 125 C186 165, 130 165, 100 125" style="fill:none;stroke:var(--mat);stroke-width:2;stroke-dasharray:5 3"/>
<text x="140" y="18">S₂</text>
<line class="ray" x1="176" y1="60" x2="194" y2="60"/><line class="ray" x1="176" y1="120" x2="194" y2="120"/>
<polygon points="190,57 196,60 190,63" style="fill:var(--phy)"/><polygon points="190,117 196,120 190,123" style="fill:var(--phy)"/>
<text x="205" y="60">E ↑ growing</text>
<text x="160" y="160">+Q</text><text x="198" y="160">−Q</text>
</svg>
:::

The same left side cannot equal both $\mu_0 I$ and $0$. Ampère's law, as stated, is inconsistent whenever a current is changing the amount of charge somewhere. Something must cross $S_2$ that does the job of the current.

What does cross $S_2$? An **electric field**. As charge builds up on the plates, the field in the gap grows. So the electric flux through $S_2$ is changing, while the flux through $S_1$ (which lies outside the gap, where the field is negligible) is not.

:::qc
q: In the figure, which quantity is nonzero through S₂ but essentially zero through S₁?
options: ["The conduction current", "The rate of change of electric flux", "The magnetic flux", "The charge on the surface"]
answer: 1
right: Right. The growing field in the gap pierces S₂, so dΦ_E/dt through S₂ is nonzero; through S₁ it is nearly zero. The conduction current does the opposite.
wrong: The conduction current crosses S₁ only. What crosses S₂ is the growing electric field in the gap, so it is dΦ_E/dt that is nonzero there.
:::

## Displacement current, and why it equals the wire current {lvl=2 id=s-id label="Class 12"}

Let the plates have area $A$ and charge $\pm Q$. By Gauss's law the field between them is $E = Q/(\varepsilon_0 A)$, and ignoring fringing the flux through $S_2$ is

$$\Phi_E = EA = \frac{Q}{\varepsilon_0}.$$

Differentiate. The charge on the plate grows at the rate the wire delivers it, $dQ/dt = I$:

$$\varepsilon_0\frac{d\Phi_E}{dt} = \frac{dQ}{dt} = I.$$

The quantity $\varepsilon_0\,d\Phi_E/dt$ has units of current and equals the wire current **exactly**, whatever the plate size or spacing. Maxwell called it the **displacement current** and added it to the right side of Ampère's law.

:::law caption="Displacement current, and the Ampère–Maxwell law. Φ_E is the electric flux through any surface bounded by the loop."
$$i_d = \varepsilon_0\frac{d\Phi_E}{dt},\qquad \oint \vec B\cdot d\vec l = \mu_0\left(i_c + i_d\right) = \mu_0 i_c + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}$$
:::

Check the paradox. Through $S_1$: $i_c = I$, $i_d = 0$. Through $S_2$: $i_c = 0$, $i_d = I$. Both give $\mu_0 I$. The total current $i_c + i_d$ is continuous round the circuit: conduction current in the wires, displacement current in the gap.

This also rescues Kirchhoff's junction rule at a plate (NCERT Exercise 8.1): current arriving by wire equals current leaving as displacement current, provided "current" means the sum of the two.

:::note title="In a dielectric" tone=info
If the gap is filled with a dielectric of permittivity $\varepsilon = K\varepsilon_0$, the field is $E = Q/(\varepsilon A)$, and the displacement current is $\varepsilon\,d\Phi_E/dt$, or $d\Phi_D/dt$ in terms of $\vec D = \varepsilon\vec E$. It still equals $I$. Part of it is the real motion of bound charges as the dielectric polarises; the part $\varepsilon_0\,d\Phi_E/dt$ exists even in vacuum.
:::

:::qc
q: A 5 pF capacitor is connected to a source whose voltage rises at 2 × 10⁹ V/s. What is the displacement current in the gap?
options: ["0.1 mA", "10 mA", "0.4 A", "Zero, as no charge crosses the gap"]
answer: 1
right: Right. i_d = i_c = C dV/dt = 5 × 10⁻¹² × 2 × 10⁹ = 10⁻² A = 10 mA.
wrong: The displacement current equals the charging current, C dV/dt = 5 × 10⁻¹² × 2 × 10⁹ = 10 mA. It exists even though no charge crosses the gap.
:::

## The symmetry Maxwell saw {lvl=2 id=s-sym label="Class 12"}

There is a second, more physical reason to expect the new term. Faraday's law says a **changing magnetic field** makes an electric field:

$$\oint \vec E\cdot d\vec l = -\frac{d\Phi_B}{dt}.$$

The displacement current says the reverse: a **changing electric field** makes a magnetic field,

$$\oint \vec B\cdot d\vec l = \mu_0\varepsilon_0\frac{d\Phi_E}{dt}\quad\text{(no conduction current)}.$$

Put the two together and a field can sustain itself in empty space. A changing $\vec E$ makes a changing $\vec B$ nearby, which makes a changing $\vec E$ a little further on, and so on. The disturbance travels. Maxwell found its speed to be $1/\sqrt{\mu_0\varepsilon_0}$, which matched the measured speed of light. How those waves work is the subject of the lesson **Electromagnetic waves**; here we stay with the source term itself.

The two equations are not perfect mirror images. Faraday's law has a minus sign (Lenz's law), and there is no "magnetic conduction current" because no magnetic charges have been found.

## The magnetic field between charging plates {lvl=2 id=s-field label="Class 12"}

Take circular plates of radius $R$ carrying a displacement current $i_d$ (equal to the wire current). Ignore fringing: the field in the gap is uniform, so the displacement current is spread evenly over the plate area, like a current in a fat wire of radius $R$.

The symmetry is the same as for a long straight wire. Field lines are circles round the axis, and $B$ depends only on the distance $r$ from the axis. Take a circular loop of radius $r$ midway in the gap.

**Inside** ($r<R$): the loop encloses only the fraction $\pi r^2/\pi R^2$ of the displacement current, so

$$B\cdot 2\pi r = \mu_0 i_d\frac{r^2}{R^2}\quad\Longrightarrow\quad B = \frac{\mu_0 i_d\, r}{2\pi R^2}.$$

**Outside** ($r>R$): the loop encloses all of it, and $B = \dfrac{\mu_0 i_d}{2\pi r}$, the same as around the wire at the same distance.

:::figure caption="B against distance r from the axis, in the gap of charging circular plates of radius R. Linear inside, falling as 1/r outside; the largest field is at the rim, μ₀i_d/2πR."
<svg viewBox="0 0 320 180" role="img" aria-label="Graph of B against r. A straight line rises from the origin to a peak at r equals R, then a curve falls off as one over r.">
<line class="axis" x1="40" y1="150" x2="310" y2="150"/>
<line class="axis" x1="40" y1="150" x2="40" y2="20"/>
<text x="296" y="168">r</text><text x="20" y="28">B</text>
<line x1="40" y1="150" x2="140" y2="50" style="stroke:var(--phy);stroke-width:2.5"/>
<polyline points="140,50 165,70 190,83 215,93 240,100 265,106 290,110 310,113" style="fill:none;stroke:var(--phy);stroke-width:2.5"/>
<line class="faint" x1="140" y1="50" x2="140" y2="150"/>
<line class="faint" x1="40" y1="50" x2="140" y2="50"/>
<text x="136" y="166">R</text>
<text x="44" y="44">μ₀i_d/2πR</text>
<text x="100" y="128">∝ r</text><text x="230" y="90">∝ 1/r</text>
</svg>
:::

**Direction.** Use the right-hand rule with your thumb along the displacement current. While the capacitor is charging, the field in the gap points from the $+$ plate to the $-$ plate and is growing, so $d\vec E/dt$, and with it $i_d$, points the same way as the conduction current in the wire. The field lines in the gap circle in the same sense as around the wire. The magnetic field round a charging capacitor is continuous with the field round its leads.

:::worked title="How big is it?"
Plates of radius $R = 10$ cm are charged by a steady 2 A. At the rim, $B = \mu_0 i_d/(2\pi R) = 2\times10^{-7}\times2/0.10 = 4\times10^{-6}$ T $= 4\ \mu$T, about a tenth of the Earth's field. Halfway out, at $r = 5$ cm, it is $2\ \mu$T. A real but small effect: for decades it was measured only indirectly, through the existence of electromagnetic waves. [Unverified: history of direct measurement.]
:::

:::qc
q: Between charging circular plates of radius R, at what distance from the axis is B largest?
options: ["On the axis", "At r = R/2", "At the rim, r = R", "Far outside the plates"]
answer: 2
right: Right. Inside, B grows in proportion to r because the enclosed displacement current grows as r²; outside, it falls as 1/r. The peak is at the rim.
wrong: Inside, B = μ₀i_d r/2πR² grows with r; outside, B = μ₀i_d/2πr falls. The maximum is at the rim, r = R.
:::

## Maxwell's equations as a set {lvl=2 id=s-maxwell label="Class 12"}

With the displacement current in place, four laws describe every electric and magnetic field. **This section is a summary, not a derivation**: each law is developed in its own lesson (**Gauss's law**, **Ampère's circuital law**, **Electromagnetic induction**, and this one).

:::law caption="Maxwell's equations in integral form (vacuum, with charges and currents present)."
$$\begin{aligned}
&\text{(1) Gauss (electric):} &&\oint \vec E\cdot d\vec A = \frac{Q_{\text{enc}}}{\varepsilon_0}\\
&\text{(2) Gauss (magnetic):} &&\oint \vec B\cdot d\vec A = 0\\
&\text{(3) Faraday:} &&\oint \vec E\cdot d\vec l = -\frac{d\Phi_B}{dt}\\
&\text{(4) Ampère–Maxwell:} &&\oint \vec B\cdot d\vec l = \mu_0 i_c + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}
\end{aligned}$$
:::

One line each:

1. Electric field lines begin on positive charge and end on negative charge.
2. Magnetic field lines never begin or end: there are no isolated magnetic poles.
3. A changing magnetic flux drives an electric field round any loop (the emf of induction).
4. A magnetic field circulates round both conduction current and changing electric flux.

The equations say how charges and currents **make** fields. The other half, how fields **push** charges, is the Lorentz force:

$$\vec F = q\left(\vec E + \vec v\times\vec B\right).$$

Together with Newton's laws, these five equations are the whole of classical electromagnetism: circuits, motors, optics and radio.

:::qc
q: Which of Maxwell's equations would change if a magnetic monopole were discovered?
options: ["Gauss's law for electricity only", "Gauss's law for magnetism (and Faraday's law would gain a current term)", "Only the Ampère–Maxwell law", "None of them"]
answer: 1
right: Right. ∮B·dA = 0 expresses the absence of magnetic charge. Monopoles would make it nonzero, and a moving monopole would add a "magnetic current" term to Faraday's law, restoring a fuller symmetry.
wrong: The statement that magnetic flux through any closed surface is zero is exactly the statement that no magnetic charge exists. That is the law that would change; Faraday's law would also gain a magnetic-current term.
:::

## The deep reason: conservation of charge {lvl=3 id=s-cont label="JEE"}

The two-surface paradox is a symptom of something general. Put the two surfaces $S_1$ and $S_2$ together: they form a **closed** surface enclosing the left plate. Charge conservation says the net current out of any closed surface equals the rate at which the charge inside falls:

$$\oint \vec J\cdot d\vec A = -\frac{dQ_{\text{in}}}{dt}.$$

Ampère's original law demands that the current through $S_1$ equal the current through $S_2$, which is the same as saying the net current out of the closed surface is zero, i.e. $dQ_{\text{in}}/dt = 0$. So the old law is secretly a statement that charge never accumulates. It is fine for steady currents and wrong for anything else.

Gauss's law offers the fix. Since $Q_{\text{in}} = \varepsilon_0\oint\vec E\cdot d\vec A$,

$$\oint\left(\vec J + \varepsilon_0\frac{\partial\vec E}{\partial t}\right)\cdot d\vec A = 0 .$$

The combination $\vec J + \varepsilon_0\,\partial\vec E/\partial t$ never piles up anywhere. That is the "total current" which can appear on the right side of Ampère's law without contradiction. The displacement current is not an optional extra: given Gauss's law and charge conservation, it is forced.

:::note title="Differential form (Olympiad)" tone=olympiad
In differential form charge conservation is the **continuity equation** $\nabla\cdot\vec J = -\partial\rho/\partial t$. The divergence of any curl is zero, so taking the divergence of $\nabla\times\vec B = \mu_0\vec J$ would give $\nabla\cdot\vec J = 0$: no charge could ever change anywhere. Using $\rho = \varepsilon_0\nabla\cdot\vec E$,

$$\nabla\cdot\left(\vec J + \varepsilon_0\frac{\partial\vec E}{\partial t}\right) = -\frac{\partial\rho}{\partial t} + \frac{\partial\rho}{\partial t} = 0,$$

so $\nabla\times\vec B = \mu_0\vec J + \mu_0\varepsilon_0\,\partial\vec E/\partial t$ is consistent. Run the argument backwards and Maxwell's equations **imply** charge conservation.
:::

## Discharging through a resistor {lvl=3 id=s-discharge label="JEE"}

Let a capacitor $C$ charged to $V_0$ discharge through a resistor $R$. The charge falls as $Q = CV_0e^{-t/RC}$, and the wire current has size $I = (V_0/R)e^{-t/RC}$.

In the gap the field still points from the $+$ plate to the $-$ plate, but now it is **shrinking**. So $d\vec E/dt$ points from $-$ to $+$: the displacement current runs opposite to $\vec E$. Follow the loop: conduction current leaves the $+$ plate, goes through $R$ to the $-$ plate, then "returns" across the gap as displacement current from $-$ to $+$. The total current is again continuous, and its size in the gap is $I$ at every instant.

The magnetic field in the gap therefore reverses compared with charging (for the same orientation of the capacitor), and decays with the same time constant $RC$:

$$B(r,t) = \frac{\mu_0 r}{2\pi R_p^2}\cdot\frac{V_0}{R}e^{-t/RC}\qquad (r<R_p,\ R_p = \text{plate radius}).$$

:::worked title="Field in the gap of a discharging capacitor"
A 2 nF capacitor at 50 V discharges through 1 MΩ. Its circular plates have radius 4 cm. At $t = 0$ the current is $50/10^6 = 50\ \mu$A, so at the rim $B = 2\times10^{-7}\times5\times10^{-5}/0.04 = 2.5\times10^{-10}$ T. After one time constant ($RC = 2$ ms) it is $e^{-1}$ of that, $9.2\times10^{-11}$ T.
:::

## Conduction or displacement? Currents in matter {lvl=3 id=s-matter label="JEE"}

In a material with conductivity $\sigma$ and permittivity $\varepsilon$, an electric field drives both kinds of current at once:

$$J_c = \sigma E,\qquad J_d = \varepsilon\frac{\partial E}{\partial t}.$$

For a field oscillating as $E = E_0\sin\omega t$, the amplitudes are $\sigma E_0$ and $\omega\varepsilon E_0$, so

:::eq caption="Ratio of conduction to displacement current. J_d leads J_c by 90°."
$$\frac{J_c}{J_d} = \frac{\sigma}{\omega\varepsilon}$$
:::

The two are equal at the **crossover** $\omega^* = \sigma/\varepsilon$. Well below it the material behaves as a conductor, well above it as a dielectric. Note also that $1/\omega^* = \varepsilon/\sigma$ is the time a free charge placed inside the material takes to leak away to the surface.

- **Copper**: $\sigma \approx 6\times10^7$ S/m, and taking $\varepsilon\approx\varepsilon_0$, $f^* = \sigma/(2\pi\varepsilon_0)\approx 1\times10^{18}$ Hz. At mains frequency (50 Hz) the conduction current exceeds the displacement current by a factor of about $2\times10^{16}$. [Unverified: σ for copper recalled from memory. Inference: at frequencies near $10^{18}$ Hz, σ is no longer a constant and this simple model fails, so the crossover number only shows that displacement current is utterly negligible in metals at any practical frequency.]
- **Sea water**: $\sigma\approx 4$ S/m, $\varepsilon_r\approx 81$, so $f^*\approx 0.9$ GHz. Below about a gigahertz sea water is a conductor, which is why radio does not penetrate it far. [Unverified: material values recalled from memory.]
- **Good insulators** (glass, $\sigma$ of order $10^{-12}$ S/m or less): the crossover is far below 1 Hz, so displacement current dominates at every frequency of interest. [Unverified: order of magnitude.]

That is why we ignore displacement current in wires, and why it is the **only** current in the gap of a capacitor.

:::qc
q: A medium has σ/ε = 10⁶ s⁻¹. At angular frequency ω = 10⁸ rad/s, which current dominates?
options: ["Conduction, by a factor of 100", "Displacement, by a factor of 100", "They are equal", "Neither; both are zero"]
answer: 1
right: Right. J_c/J_d = σ/(ωε) = 10⁶/10⁸ = 0.01, so the displacement current is 100 times larger. At this frequency the medium acts like a dielectric.
wrong: J_c/J_d = σ/(ωε) = 10⁶/10⁸ = 1/100. The displacement current is 100 times the conduction current.
:::

## Energy flows in through the rim {lvl=4 id=s-poynting label="Olympiad"}

A charging capacitor gains energy $U = \tfrac12\varepsilon_0E^2\cdot(\text{volume})$. Where does that energy enter? The obvious guess, "along the wires", is wrong. Electromagnetic energy flows with the **Poynting vector**

$$\vec S = \frac{1}{\mu_0}\vec E\times\vec B,$$

a power per unit area (W/m²). We quote it here without derivation; Poynting's theorem shows it is exactly what makes field energy conserved [it is developed further in **Electromagnetic waves**].

Take circular plates of radius $a$ and gap $d$, field $E$ growing. At the rim, the Ampère–Maxwell law (with $i_d = \varepsilon_0\pi a^2\,dE/dt$) gives

$$B = \frac{\mu_0 i_d}{2\pi a} = \frac{\mu_0\varepsilon_0 a}{2}\frac{dE}{dt}.$$

$\vec E$ is along the axis and $\vec B$ circles round it, so $\vec E\times\vec B$ is radial. Work out the sense (figure): it points **inward**, into the gap. Its size is

$$S = \frac{EB}{\mu_0} = \frac{\varepsilon_0 a}{2}E\frac{dE}{dt}.$$

:::figure caption="Side view of charging plates. E points down and is growing. B circles the axis: into the page on the left rim (⊗), out of the page on the right rim (⊙). S = E × B/μ₀ points radially inward at the rim on both sides."
<svg viewBox="0 0 320 170" role="img" aria-label="Two horizontal plates, plus on top, minus below. Downward field arrows between them. At the left edge an into-page symbol and an arrow pointing right into the gap; at the right edge an out-of-page symbol and an arrow pointing left into the gap.">
<line x1="90" y1="50" x2="230" y2="50" style="stroke:var(--phy);stroke-width:5"/>
<line x1="90" y1="120" x2="230" y2="120" style="stroke:var(--ink);stroke-width:5"/>
<text x="235" y="45">+Q</text><text x="235" y="135">−Q</text>
<line class="ray" x1="120" y1="56" x2="120" y2="114"/><line class="ray" x1="160" y1="56" x2="160" y2="114"/><line class="ray" x1="200" y1="56" x2="200" y2="114"/>
<polygon points="116,106 120,114 124,106" style="fill:var(--phy)"/><polygon points="156,106 160,114 164,106" style="fill:var(--phy)"/><polygon points="196,106 200,114 204,106" style="fill:var(--phy)"/>
<text x="165" y="90">E</text>
<circle cx="60" cy="85" r="9" style="fill:none;stroke:var(--mat);stroke-width:2"/>
<line x1="54" y1="79" x2="66" y2="91" style="stroke:var(--mat);stroke-width:2"/><line x1="66" y1="79" x2="54" y2="91" style="stroke:var(--mat);stroke-width:2"/>
<circle cx="260" cy="85" r="9" style="fill:none;stroke:var(--mat);stroke-width:2"/>
<circle cx="260" cy="85" r="2.5" style="fill:var(--mat)"/>
<text x="52" y="110">B</text><text x="254" y="110">B</text>
<line x1="20" y1="85" x2="44" y2="85" style="stroke:var(--chem);stroke-width:2.5"/><polygon points="40,80 49,85 40,90" style="fill:var(--chem)"/>
<line x1="300" y1="85" x2="276" y2="85" style="stroke:var(--chem);stroke-width:2.5"/><polygon points="280,80 271,85 280,90" style="fill:var(--chem)"/>
<text x="18" y="76">S</text><text x="296" y="76">S</text>
<text x="150" y="155">gap d, radius a</text>
</svg>
:::

The power flowing in through the curved side (area $2\pi a d$) is

$$P = S\cdot 2\pi a d = \varepsilon_0\pi a^2 d\,E\frac{dE}{dt} = \frac{d}{dt}\left(\tfrac12\varepsilon_0E^2\cdot\pi a^2d\right) = \frac{dU}{dt}.$$

Exactly the rate of increase of stored energy. The energy is carried by the fields **round** the wires and enters the capacitor sideways, through its rim. The same picture, run backwards, shows energy streaming **out** through the rim during discharge, then inward along the field around the resistor, where it becomes heat. [Inference: the resistor half of that statement follows from the same Poynting argument applied to a resistor; it is not worked here.]

:::worked title="A number for the energy flow"
Plates of radius 5 cm, gap 2 mm; at some instant $E = 10^6$ V/m and $dE/dt = 10^{12}$ V m⁻¹ s⁻¹. Then $P = \varepsilon_0\pi a^2 d\,E\,dE/dt = 8.854\times10^{-12}\times7.85\times10^{-3}\times2\times10^{-3}\times10^{18}\approx 139$ W, all of it entering through a ring of side area $2\pi a d \approx 6.3\times10^{-4}$ m².
:::

## The leaky capacitor that makes no field {lvl=4 id=s-leaky label="Olympiad"}

Fill the gap of a charged, isolated parallel-plate capacitor with a slightly conducting dielectric ($\sigma$, $\varepsilon$). It discharges through itself: a real conduction current $J_c = \sigma E$ flows from the $+$ plate to the $-$ plate. Does that current make a magnetic field?

The free charge density $\sigma_f$ on the $+$ plate falls at the rate the current carries it off, $d\sigma_f/dt = -\sigma E$, and $E = \sigma_f/\varepsilon$. So

$$\varepsilon\frac{dE}{dt} = -\sigma E \quad\Longrightarrow\quad J_c + J_d = \sigma E + \varepsilon\frac{dE}{dt} = 0 .$$

The total current is zero at every point: conduction current one way, an equal displacement current the other. With no total current anywhere (no external wires), the Ampère–Maxwell law and $\oint\vec B\cdot d\vec A = 0$ leave only $\vec B = 0$. The field decays as $E\propto e^{-\sigma t/\varepsilon}$, with a time constant $\varepsilon/\sigma$ that does not depend on the shape of the capacitor.

Compare the section on discharging through a resistor: there the conduction current runs **outside** the gap, through the wire, and the field in the gap is not cancelled. The difference is where the conduction current flows, not whether it flows.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Ampère's law $\oint\vec B\cdot d\vec l = \mu_0 i_c$ is inconsistent for a charging capacitor: one loop, two surfaces, two different currents. {lvl=2}
2. Displacement current $i_d = \varepsilon_0\,d\Phi_E/dt$. It carries no charge but makes a magnetic field like any current. {lvl=2}
3. For a parallel-plate capacitor, $i_d = i_c$ exactly, from Gauss's law $\Phi_E = Q/\varepsilon_0$. Total current $i_c + i_d$ is continuous round the circuit. {lvl=2}
4. Ampère–Maxwell: $\oint\vec B\cdot d\vec l = \mu_0 i_c + \mu_0\varepsilon_0\,d\Phi_E/dt$. A changing E makes B, as a changing B makes E. {lvl=2}
5. Between circular plates: $B = \mu_0 i_d r/2\pi R^2$ inside, $\mu_0 i_d/2\pi r$ outside; largest at the rim. {lvl=2}
6. Maxwell's four equations plus the Lorentz force $q(\vec E + \vec v\times\vec B)$ are all of classical electromagnetism. {lvl=2}
7. The displacement term is forced by charge conservation: $\vec J + \varepsilon_0\partial\vec E/\partial t$ has zero divergence. {lvl=3}
8. In matter, $J_c/J_d = \sigma/\omega\varepsilon$; crossover at $\omega = \sigma/\varepsilon$. Negligible displacement current in metals, only displacement current in a vacuum gap. {lvl=3}
9. Energy enters a charging capacitor through its rim: $\vec S = \vec E\times\vec B/\mu_0$ inward, and $S\cdot2\pi a d = dU/dt$. {lvl=4}
10. A leaky capacitor discharging through its own dielectric has $J_c + J_d = 0$ and no magnetic field. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Displacement current is not charge crossing the gap. Never say electrons "jump" between the plates. {lvl=2}
- $i_d = i_c$ for the capacitor at every instant, for AC too. Do not compute $i_d$ from the flux of the wire's region. {lvl=2}
- Inside the plates only the enclosed fraction $r^2/R^2$ of $i_d$ counts, just like inside a thick wire. {lvl=2}
- Direction: $i_d$ is along $d\vec E/dt$, not along $\vec E$. While discharging they point opposite ways. {lvl=3}
- In AC problems, quote amplitudes or rms consistently: $i_0 = \sqrt2\,i_{rms}$, and $B_0$ follows from $i_0$. {lvl=2}
- With a dielectric in the gap, use $\varepsilon = K\varepsilon_0$ (or $d\Phi_D/dt$), not $\varepsilon_0$. {lvl=3}
- The Poynting flux into a capacitor uses the side area $2\pi a d$, not the plate area. {lvl=4}
:::
