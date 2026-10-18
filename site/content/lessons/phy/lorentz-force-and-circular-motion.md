---
title: Lorentz force and the motion of charges in magnetic fields
summary: 'Why moving charges bend into circles in a magnetic field, and how that bending sorts particles and powers accelerators.'
ncert: ["Class 12 Physics · Ch 4 Moving Charges and Magnetism (§4.2–4.3)"]
up_to: Olympiad
builds_on: [Uniform circular motion, Vectors and the cross product, Electric field, Electric potential and the electron-volt, Drift velocity of electrons]
notes_prompt: Explain in your own words why a faster particle in a uniform magnetic field takes exactly as long to go once round its circle as a slower one, and why that single fact makes both the cyclotron and magnetic focusing work.
margin:
  - kind: history
    title: History
    text: "H. A. Lorentz wrote the force on a moving charge in its modern form in the 1890s. J. J. Thomson used crossed electric and magnetic fields in 1897 to measure e/m for cathode rays, the discovery of the electron. E. H. Hall found his effect in 1879, and E. O. Lawrence built the first cyclotrons around 1930–32. [Unverified: names and dates recalled from memory.]"
  - kind: tip
    title: Two numbers to carry
    text: "Radius r = mv/(qB) = p/(qB); angular frequency ω = qB/m. Almost every problem in this topic is these two formulas plus geometry. When v is not perpendicular to B, use v⊥ in the radius and v∥ in the pitch; ω does not change."
  - kind: olympiad
    title: Olympiad link
    text: "Jump to the frame moving at E × B/B². There the electric field disappears and the motion is a plain circle. The same trick handles gravity or any steady force F, which produces a drift F × B/(qB²)."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 4 Moving Charges and Magnetism, §4.2–4.3" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 34 Magnetic Field [Unverified chapter number]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.6 Motion of charged particles in electric and magnetic fields [Unverified section number]" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "§5.1 The Lorentz force law (cycloid motion example)" }
cards:
  - { front: "Lorentz force on a charge q moving with velocity v?", back: "$\\mathbf F = q(\\mathbf E + \\mathbf v\\times\\mathbf B)$. The magnetic part is perpendicular to $\\mathbf v$, so it does no work." }
  - { front: "Radius, angular frequency and period for a charge moving perpendicular to a uniform B?", back: "$r = mv/(qB) = p/(qB)$; $\\omega = qB/m$; $T = 2\\pi m/(qB)$, independent of speed." }
  - { front: "Pitch of the helix when v makes angle θ with B?", back: "$p = v\\cos\\theta\\cdot T = 2\\pi m v\\cos\\theta/(qB)$; radius $mv\\sin\\theta/(qB)$." }
  - { front: "Velocity selector condition and maximum cyclotron energy?", back: "Undeflected if $v = E/B$ (E ⊥ B ⊥ v). Cyclotron of radius $R$: $K_{\\max} = q^2B^2R^2/(2m)$." }
  - { front: "Hall voltage across a strip of thickness t (along B) carrying current I?", back: "$V_H = BI/(nqt)$. Its sign gives the sign of the charge carriers." }
  - { front: "Drift velocity in crossed uniform E and B?", back: "$\\mathbf v_d = \\mathbf E\\times\\mathbf B/B^2$, magnitude $E/B$, same for every charge and mass. Released from rest: cycloid of height $2mE/(qB^2)$." }
core:
  idea: 'The force on a charge is $\vec F = q(\vec E + \vec v\times\vec B)$. The magnetic part is perpendicular to $\vec v$, so it does no work and changes direction, not speed. In a uniform $\vec B$ the charge moves on a circle of radius $mv/qB$ with a period independent of speed.'
  formulas:
    - tex: '\vec F = q\left(\vec E + \vec v\times\vec B\right)'
      label: 'Lorentz force'
    - tex: 'r = \frac{mv}{qB},\qquad T = \frac{2\pi m}{qB}'
      label: 'Circular motion in a uniform field'
    - tex: 'v = \frac{E}{B}'
      label: 'Velocity selector (crossed E and B)'
  conditions:
    - 'Uniform, steady magnetic field; $\vec v\perp\vec B$ for a circle (otherwise a helix with $v_\parallel$ unchanged)'
    - 'Point charge in vacuum, non-relativistic speed, no radiation loss'
    - 'Other forces (gravity, collisions) negligible'
  sign: 'Find $\vec v\times\vec B$ for a positive charge; reverse it for a negative charge such as an electron. The force is always perpendicular to $\vec v$.'
outcomes:
  - 'Find the direction and magnitude of the magnetic force on a moving charge'
  - 'Derive and use $r = mv/qB$ and the period $2\pi m/qB$ for circular motion'
  - 'Analyse helical paths and a velocity selector, and use them for $e/m$ and mass spectrometry'
  - 'Treat a particle entering a field region: chord, exit angle and time spent in the field'
  - 'Explain the Hall effect, the cyclotron limit, and $\vec E\times\vec B$ drift and cycloids'
---

:::hook
q: A proton and a faster proton are launched together, perpendicular to the same uniform magnetic field. The fast one has twice the speed. Each goes round a circle. Which one comes back to its starting point first?
options: ["The faster proton, in half the time", "The slower proton", "They return at the same moment", "Neither returns: both spiral away"]
answer: 2
right: Right. The faster proton moves on a circle of twice the radius, so its path is twice as long, and it covers it twice as fast. The time for one turn, 2πm/(qB), does not contain the speed at all. This one fact powers the cyclotron.
wrong: The faster proton does move faster, but on a circle of twice the radius (r = mv/qB). Twice the distance at twice the speed takes the same time. The period 2πm/(qB) does not depend on speed, so they return together.
:::

## A force that only steers {lvl=1 id=s-steer label="Class 10"}

A current-carrying wire in a magnetic field feels a force (the motor effect; see the lesson on the force on a current). A current is just moving charge, so the force must really act on each moving charge. And it does: an electron beam in an old television tube is bent by a magnet held near the screen.

This force has a strange character. It acts only on **moving** charges, it is **sideways** to the motion, and its strength grows with the speed. A charge sitting still in a magnetic field feels nothing at all.

Because the force is always at right angles to the motion, it can never speed the charge up or slow it down. Think of a stone whirled on a string: the string pulls inward, at right angles to the motion, and the stone goes round at a steady speed. A magnetic field does the same job as the string, without the string. The charge keeps its speed and its kinetic energy; only its **direction** changes.

## The Lorentz force {lvl=2 id=s-lorentz label="Class 12"}

Experiment shows that the magnetic force on a charge $q$ moving with velocity $\mathbf v$:

- is proportional to $q$ and to $v$;
- is zero when $\mathbf v$ is along a certain direction (the field direction) and largest when $\mathbf v$ is perpendicular to it, varying as $\sin\theta$ in between;
- is perpendicular to both $\mathbf v$ and that direction, and reverses if $q$ or $\mathbf v$ reverses.

All of this is exactly the cross product. In fact it is the way the magnetic field $\mathbf B$ is **defined**: $\mathbf B$ is the vector that makes the force equal $q\mathbf v\times\mathbf B$. Adding the electric force gives the full law:

:::law caption="Lorentz force. Unit of B: tesla, 1 T = 1 N s C⁻¹ m⁻¹ = 1 N A⁻¹ m⁻¹. A smaller unit is the gauss, 1 G = 10⁻⁴ T."
$$\mathbf F = q\left(\mathbf E + \mathbf v\times\mathbf B\right),\qquad |q\mathbf v\times\mathbf B| = qvB\sin\theta$$
:::

The tesla is large. The Earth's field is about $5\times10^{-5}$ T, a fridge magnet about $10^{-2}$ T, a hospital MRI magnet 1.5–3 T. [Unverified: typical values from memory.]

**Direction.** Point the fingers of the right hand along $\mathbf v$ and curl them towards $\mathbf B$: the thumb gives $\mathbf v\times\mathbf B$. For a **negative** charge the force is the opposite way. In NCERT Example 4.2, $\mathbf v$ along $+x$ and $\mathbf B$ along $+y$ give $\hat x\times\hat y = +\hat z$: a proton is pushed along $+z$, an electron along $-z$.

**No work.** The power delivered by any force is $\mathbf F\cdot\mathbf v$. For the magnetic part, $(\mathbf v\times\mathbf B)\cdot\mathbf v = 0$ because a cross product is perpendicular to each of its factors. So

$$\frac{d}{dt}\left(\tfrac12mv^2\right) = q\mathbf E\cdot\mathbf v.$$

Only the electric field can change a particle's energy. The magnetic field changes $\mathbf v$ (it accelerates the particle) without changing $|\mathbf v|$. This is not a contradiction: acceleration is a change of velocity, and a change of direction is a change of velocity.

:::qc
q: An electron moves due north in a magnetic field that points vertically downward. Which way is the magnetic force on it?
options: ["East", "West", "Up", "No force"]
answer: 0
right: Right. Take x east, y north, z up. For a positive charge, ŷ × (−ẑ) = −x̂, which is west. The electron is negative, so its force is east.
wrong: Work out v × B for a positive charge first. With x east, y north, z up, north × up = east (ŷ × ẑ = x̂), so north × down = west. The electron is negative, which reverses this to east.
:::

## Circles in a uniform field {lvl=2 id=s-circle label="Class 12"}

Let a charge move perpendicular to a uniform field $\mathbf B$. The force has constant size $qvB$ (the speed never changes) and is always perpendicular to the velocity, in the plane perpendicular to $\mathbf B$. A force of constant size that is always at right angles to the motion is exactly what uniform circular motion needs. So the path is a **circle**.

:::figure caption="A positive charge in a uniform field pointing into the page (×) moves anticlockwise. At every point the force qv × B points to the centre. A negative charge would go round the other way."
<svg viewBox="0 0 300 170" role="img" aria-label="A circle with crosses representing a field into the page; a positive charge at the top moving left with a force arrow pointing down to the centre">
<g style="fill:var(--muted);font-size:12px"><text x="30" y="30">×</text><text x="80" y="30">×</text><text x="230" y="30">×</text><text x="270" y="30">×</text><text x="30" y="90">×</text><text x="270" y="90">×</text><text x="30" y="150">×</text><text x="80" y="150">×</text><text x="230" y="150">×</text><text x="270" y="150">×</text><text x="146" y="100">×</text></g>
<circle class="faint" cx="150" cy="88" r="58" style="fill:none"/>
<circle cx="150" cy="30" r="6" style="fill:var(--phy)"/>
<line class="ray" x1="150" y1="30" x2="104" y2="30"/><polygon points="104,26 96,30 104,34" style="fill:var(--phy)"/>
<line class="pen" x1="150" y1="36" x2="150" y2="68" style="stroke:var(--ink)"/><polygon points="146,66 150,74 154,66" style="fill:var(--ink)"/>
<text x="106" y="22">v</text><text x="156" y="62">F</text><text x="165" y="96">r</text><line class="faint" x1="150" y1="88" x2="200" y2="58"/>
<text x="238" y="125">B into page</text>
</svg>
:::

Newton's second law for the circle sets the magnetic force equal to mass × centripetal acceleration:

$$qvB = \frac{mv^2}{r}.$$

:::law caption="Radius and angular frequency of the circular orbit (the cyclotron frequency). p = mv is the momentum."
$$r = \frac{mv}{qB} = \frac{p}{qB},\qquad \omega = \frac{v}{r} = \frac{qB}{m},\qquad T = \frac{2\pi m}{qB},\qquad \nu = \frac{qB}{2\pi m}$$
:::

The radius makes sense: more momentum is harder to bend, more charge or field bends harder. The surprise is $\omega$: the **speed has cancelled**. Double $v$ and you double $r$ and so the circumference; the particle covers twice the distance at twice the speed, in the same time. Every particle with the same $q/m$ in the same field goes round at the same rate, like the hands of a clock.

:::worked title="NCERT Example 4.3: an electron in 6 × 10⁻⁴ T"
An electron ($m = 9\times10^{-31}$ kg) moves at $3\times10^{7}$ m/s perpendicular to $B = 6\times10^{-4}$ T.

$r = mv/(eB) = 9\times10^{-31}\times3\times10^{7}/(1.6\times10^{-19}\times6\times10^{-4}) = 0.28$ m.

$\nu = eB/(2\pi m) = 1.6\times10^{-19}\times6\times10^{-4}/(2\pi\times9\times10^{-31}) \approx 1.7\times10^{7}$ Hz, i.e. 17 MHz, a radio frequency.

Energy $\tfrac12mv^2 = 4.05\times10^{-16}$ J $\approx 2.5$ keV. Doubling the energy would multiply $r$ by $\sqrt2$ but leave 17 MHz unchanged.
:::

A useful form when a particle has been accelerated from rest through a potential difference $V$: $p = \sqrt{2mqV}$, so $r = \dfrac1B\sqrt{\dfrac{2mV}{q}}$.

:::qc
q: A proton and an alpha particle (charge 2e, mass 4m) are accelerated through the same potential difference and enter the same perpendicular field. What is the ratio of their radii r_p : r_α?
options: ["1 : 1", "1 : √2", "√2 : 1", "1 : 2"]
answer: 1
right: Right. r = √(2mV/q)/B ∝ √(m/q). The proton has m/q = 1, the alpha 4/2 = 2, so r_p : r_α = 1 : √2.
wrong: With the same accelerating voltage, r = √(2mV/q)/B ∝ √(m/q). For the alpha m/q is twice the proton's, so its radius is √2 times larger: 1 : √2.
:::

## Helices: when v is not perpendicular to B {lvl=2 id=s-helix label="Class 12"}

Split the velocity into a part along the field, $v_\parallel$, and a part across it, $v_\perp$. The cross product ignores the parallel part ($\mathbf v_\parallel\times\mathbf B = 0$), so:

- along $\mathbf B$ there is no force, and $v_\parallel$ stays constant;
- across $\mathbf B$ the motion is the circle we just found, with radius $mv_\perp/(qB)$ and the same period $2\pi m/(qB)$.

A circle carried steadily along the axis is a **helix**, like the thread of a screw or a stretched spring.

:::figure caption="Helical path. The circle is set by v⊥; the steady drift along B is set by v∥. The distance advanced in one turn is the pitch."
<svg viewBox="0 0 300 150" role="img" aria-label="A helix drawn along a horizontal field direction, with the pitch marked between two successive turns">
<line class="axis" x1="20" y1="85" x2="280" y2="85"/><polygon points="272,81 280,85 272,89" style="fill:var(--muted)"/><text x="262" y="78">B</text>
<path class="ray" style="fill:none" d="M66,85 L68,78 L68,72 L69,66 L68,61 L67,57 L66,55 L65,53 L63,53 L62,55 L61,57 L60,61 L60,66 L60,72 L61,78 L62,85 L65,92 L67,98 L71,104 L75,109 L80,113 L85,115 L90,117 L95,117 L100,115 L105,113 L110,109 L114,104 L117,98 L120,92 L123,85 L124,78 L125,72 L125,66 L125,61 L124,57 L123,55 L121,53 L120,53 L119,55 L117,57 L117,61 L116,66 L116,72 L117,78 L119,85 L121,92 L124,98 L128,104 L132,109 L136,113 L141,115 L146,117 L152,117 L157,115 L162,113 L166,109 L170,104 L174,98 L177,92 L179,85 L181,78 L181,72 L182,66 L181,61 L181,57 L179,55 L178,53 L177,53 L175,55 L174,57 L173,61 L173,66 L173,72 L174,78 L175,85 L178,92 L181,98 L184,104 L188,109 L193,113 L198,115 L203,117 L208,117 L213,115 L218,113 L223,109 L227,104 L230,98 L233,92 L236,85"/>
<line class="faint" x1="63" y1="40" x2="63" y2="132"/><line class="faint" x1="120" y1="40" x2="120" y2="132"/>
<line class="pen" x1="66" y1="134" x2="117" y2="134" style="stroke:var(--ink)"/><text x="78" y="148">pitch p</text>
<text x="190" y="40">radius mv⊥/qB</text>
</svg>
:::

:::law caption="Pitch of the helix: the distance moved along B during one period. θ is the angle between v and B."
$$p = v_\parallel T = \frac{2\pi m\,v\cos\theta}{qB},\qquad r = \frac{m\,v\sin\theta}{qB}$$
:::

Two limits check it. At $\theta = 90°$ the pitch is zero: a flat circle. At $\theta = 0$ the radius is zero: straight-line motion along the field, untouched. This is why charged particles from the Sun spiral **along** the Earth's field lines and reach the atmosphere near the poles, making the aurora.

:::qc
q: An electron enters a uniform field at 60° to it. If the field strength is doubled, what happens to the pitch of its helix?
options: ["Doubles", "Halves", "Unchanged", "Quadruples"]
answer: 1
right: Right. The pitch is v∥ × T and T = 2πm/(qB) halves when B doubles, while v∥ is unchanged. The radius halves too.
wrong: Pitch = v∥ T. The field does not touch v∥, but the period 2πm/(qB) halves when B doubles, so the pitch halves.
:::

## Crossed fields: the velocity selector {lvl=3 id=s-selector label="JEE"}

Now add an electric field perpendicular to $\mathbf B$, and send a positive particle in perpendicular to both. Arrange the directions so the two forces oppose: $q\mathbf E$ one way, $q\mathbf v\times\mathbf B$ the other.

:::figure caption="Velocity selector. E (downward, between charged plates) and B (into the page) are crossed. For a positive ion moving right, qE points down and qv × B points up. Only ions with v = E/B go straight through the exit slit."
<svg viewBox="0 0 300 160" role="img" aria-label="Two horizontal plates, positive on top and negative below, with crosses for a field into the page; an ion beam enters from the left, the selected ions go straight, faster ones bend up and slower ones bend down">
<line x1="60" y1="30" x2="240" y2="30" style="stroke:var(--phy);stroke-width:4"/><line x1="60" y1="130" x2="240" y2="130" style="stroke:var(--ink);stroke-width:4"/>
<text x="250" y="34">+</text><text x="250" y="134">−</text>
<g style="fill:var(--muted);font-size:12px"><text x="80" y="55">×</text><text x="130" y="55">×</text><text x="180" y="55">×</text><text x="220" y="55">×</text><text x="80" y="115">×</text><text x="130" y="115">×</text><text x="180" y="115">×</text><text x="220" y="115">×</text></g>
<line class="ray" x1="10" y1="80" x2="290" y2="80"/><polygon points="282,76 290,80 282,84" style="fill:var(--phy)"/>
<path class="faint" style="fill:none" d="M60,80 Q160,78 240,50"/><path class="faint" style="fill:none" d="M60,80 Q160,82 240,110"/>
<line class="pen" x1="120" y1="80" x2="120" y2="104" style="stroke:var(--ink)"/><polygon points="116,102 120,110 124,102" style="fill:var(--ink)"/><text x="126" y="106">qE</text>
<line class="pen" x1="150" y1="80" x2="150" y2="56" style="stroke:var(--ink)"/><polygon points="146,58 150,50 154,58" style="fill:var(--ink)"/><text x="156" y="62">qvB</text>
<text x="244" y="48">fast</text><text x="244" y="118">slow</text><text x="12" y="72">ions</text>
</svg>
:::

The net force vanishes when $qE = qvB$:

:::law caption="Velocity selector (Wien filter). Charge and mass cancel."
$$v = \frac{E}{B}$$
:::

A faster particle feels a bigger magnetic force and bends one way; a slower one bends the other way. A slit at the far end passes only $v = E/B$. Since $q$ and $m$ cancel, the same setting selects electrons, protons and heavy ions alike, as long as they have that speed.

**Thomson's e/m.** Thomson first balanced the two fields to find $v = E/B$ for his cathode rays. Then he switched off $E$ and measured the radius of the circle in $B$ alone: $r = mv/(eB)$ gives

$$\frac em = \frac{v}{Br} = \frac{E}{B^2 r}.$$

The value, about $1.76\times10^{11}$ C/kg, was roughly two thousand times the value for hydrogen ions. Either the particle had a huge charge or a tiny mass; it turned out to be a tiny mass. (Thomson's actual apparatus measured a deflection rather than a full circle; the principle is the same.)

:::qc
q: In a velocity selector, E = 3.0 × 10⁴ V/m and B = 0.20 T. Which particles pass undeflected?
options: ["Only protons with v = 1.5 × 10⁵ m/s", "Any charged particle with v = 1.5 × 10⁵ m/s", "Any particle with v = 6.0 × 10³ m/s", "Only electrons with v = 1.5 × 10⁵ m/s"]
answer: 1
right: Right. v = E/B = 3.0 × 10⁴ / 0.20 = 1.5 × 10⁵ m/s, and q cancels, so the sign and size of the charge and the mass do not matter. (For a negative particle both forces reverse, so they still balance.)
wrong: v = E/B = 1.5 × 10⁵ m/s. The condition qE = qvB does not involve q or m, and for a negative charge both forces flip together, so any charged particle with this speed passes.
:::

## Weighing ions: the mass spectrometer {lvl=3 id=s-massspec label="JEE"}

Pass ions through a velocity selector, so all have the same $v$, then let them enter a region of field $B'$ alone. Each travels a semicircle and lands on a detector at distance $2r$ from the entrance slit:

$$2r = \frac{2mv}{qB'}\quad\Rightarrow\quad m = \frac{qB'(2r)}{2v}.$$

For the same charge, the landing distance is **proportional to the mass**. Isotopes, which are chemically identical, land in separate places. This is how isotopes were first separated and how masses of atoms are measured to many digits.

A simpler version skips the selector: accelerate the ions from rest through a voltage $V$, so $r = \sqrt{2mV/q}\,/B$ and $r\propto\sqrt m$. For neon-20 and neon-22 ions accelerated through 1000 V into 0.20 T, the radii are about 10.2 cm and 10.7 cm, so their spots land about 1 cm apart.

:::qc
q: Two singly charged ions with the same speed enter the same field; one has twice the mass of the other. How do their landing distances compare?
options: ["Equal", "The heavier lands √2 times as far", "The heavier lands twice as far", "The heavier lands four times as far"]
answer: 2
right: Right. At equal speed and charge, r = mv/(qB) ∝ m, so the landing distance 2r doubles.
wrong: With v and q fixed, r = mv/(qB) is proportional to m. The √m law applies only when the ions have been accelerated through the same voltage, not when they share a speed.
:::

## The cyclotron {lvl=3 id=s-cyclotron label="JEE"}

How do you give a proton the energy of tens of millions of volts without building a tens-of-megavolt power supply? Kick it many times with a small voltage. The difficulty is timing: the kicks must arrive exactly when the particle is in the right place. Speed-independence of $T$ solves it.

**Construction.** Two hollow D-shaped metal boxes ("dees") sit in a uniform field $B$, with a narrow gap between them. An alternating voltage $V_0$ is applied across the gap. Inside a dee there is no electric field (it is a hollow conductor), so the particle just follows a semicircle. Each time it crosses the gap it is accelerated, gaining energy $qV_0$.

**Resonance.** Each semicircle takes $T/2 = \pi m/(qB)$, **whatever the speed**. So if the voltage reverses every half period, at the fixed frequency

$$\nu_{\text{osc}} = \frac{qB}{2\pi m},$$

the particle always arrives at the gap just as the field there points the right way. It spirals outward on larger and larger semicircles, gaining $2qV_0$ per turn, until it reaches the edge, radius $R$, and is pulled out.

:::law caption="Maximum kinetic energy from a cyclotron of radius R. It does not depend on the dee voltage, which only sets how many turns it takes."
$$K_{\max} = \frac{p_{\max}^2}{2m} = \frac{q^2B^2R^2}{2m}$$
:::

For protons with $B = 1.5$ T and $R = 0.50$ m: $\nu = qB/(2\pi m) \approx 23$ MHz and $K_{\max} = (1.6\times10^{-19})^2(1.5)^2(0.5)^2/(2\times1.67\times10^{-27}) \approx 4.3\times10^{-12}$ J $\approx 27$ MeV. With 50 kV across the gap, each turn gives 100 keV, so the proton makes about 270 turns.

**The relativistic limit.** The cancellation of $v$ relied on $p = mv$. In relativity $p = \gamma mv$ with $\gamma = 1/\sqrt{1-v^2/c^2}$. The radius formula $r = p/(qB)$ still holds exactly, but the angular frequency becomes $\omega = qB/(\gamma m)$: a fast particle goes round **more slowly**. At 27 MeV a proton (rest energy about 938 MeV) has $\gamma \approx 1.03$, so it lags by about 3% of a turn each turn. Over hundreds of turns it drifts out of step with the oscillator and stops gaining energy. That is why simple cyclotrons reach only tens of MeV for protons, and why electrons (with $\gamma$ large already at an MeV) are not accelerated in cyclotrons at all. Machines that lower the oscillator frequency as the particle speeds up (synchrocyclotrons), or shape the field to rise with radius, get round the limit.

:::qc
q: The oscillator of a cyclotron is set for protons. Without changing B, what oscillator frequency would accelerate alpha particles (charge 2e, mass 4m_p)?
options: ["The same frequency", "Half the frequency", "Twice the frequency", "Four times the frequency"]
answer: 1
right: Right. ν = qB/(2πm) ∝ q/m. For the alpha q/m is 2/4 = ½ of the proton's, so the frequency must be halved.
wrong: The resonance frequency is qB/(2πm), proportional to q/m. Alpha particles have half the proton's q/m, so they need half the frequency.
:::

## Entering a field region: chords, exit angles and time {lvl=3 id=s-boundary label="JEE"}

Many problems have the field fill only part of space, beyond a straight edge. Inside, the particle follows an arc of its circle; outside, a straight line. Three geometric facts settle almost everything.

1. **The centre** lies on the line through the entry point perpendicular to the velocity, at distance $r = mv/(qB)$, on the side the force points.
2. **Symmetry.** The chord from entry to exit is a line of symmetry of the arc. So the particle leaves a straight boundary at the **same angle** to the boundary as it entered, mirror-reflected.
3. **Time.** The velocity turns at the steady rate $\omega = qB/m$. If it turns through angle $\phi$ while inside, the time spent is $t = \phi/\omega = \phi\,m/(qB)$, and the chord is $2r\sin(\phi/2)$.

:::figure caption="A particle enters the field (×, above the boundary) at 60° to the boundary and is bent to the left. It turns through 240°, follows most of a circle and leaves at 60° on the far side. Bent the other way, it would have used the short 120° arc of the same circle and the same chord."
<svg viewBox="0 0 300 200" role="img" aria-label="A horizontal boundary with crosses above it; a circular arc of 240 degrees rising from an entry point on the right and returning to an exit point on the left, with the circle's centre marked">
<line class="axis" x1="10" y1="150" x2="290" y2="150"/>
<g style="fill:var(--muted);font-size:12px"><text x="20" y="40">×</text><text x="20" y="100">×</text><text x="190" y="40">×</text><text x="250" y="40">×</text><text x="250" y="100">×</text><text x="200" y="130">×</text></g>
<path class="ray" style="fill:none" d="M150,150 A60,60 0 1 0 46,150"/>
<line class="ray" x1="126" y1="192" x2="150" y2="150"/><line class="ray" x1="46" y1="150" x2="70" y2="192"/><polygon points="66,186 72,195 73,184" style="fill:var(--phy)"/>
<line class="pen" x1="150" y1="150" x2="168" y2="119" style="stroke:var(--ink)"/><polygon points="163,119 170,115 170,124" style="fill:var(--ink)"/>
<circle cx="98" cy="120" r="3" style="fill:var(--ink)"/><line class="faint" x1="98" y1="120" x2="150" y2="150"/><line class="faint" x1="98" y1="120" x2="46" y2="150"/>
<text x="172" y="112">v (60°)</text><text x="84" y="114">C</text><text x="80" y="168">chord √3 r</text><text x="200" y="168">no field</text>
</svg>
:::

:::worked title="Proton bent back across the boundary"
A proton at $1.0\times10^{6}$ m/s enters $B = 0.10$ T at 60° to the boundary, bent as in the figure. Then $r = mv/(eB) = 0.104$ m and $m/(eB) = 1.04\times10^{-7}$ s.

The velocity turns anticlockwise from 60° to 300°, that is $\phi = 240° = 4\pi/3$. Time inside: $t = (4\pi/3)\times1.04\times10^{-7} = 0.44\ \mu$s. Exit point: chord $2r\sin120° = \sqrt3\,r = 18$ cm from the entry.
:::

**A strip of field.** If the field fills a strip of width $d$ and the particle enters perpendicular to the edge, it gets across only if $r > d$, and then leaves deflected by angle $\phi$ with $\sin\phi = d/r$. If $r \le d$ it turns back after a semicircle. So the least speed to cross is $v = qBd/m$.

:::qc
q: A charged particle enters a field region perpendicular to its straight boundary. How long does it stay in the field?
options: ["T/4", "T/2", "T", "It depends on its speed"]
answer: 1
right: Right. Entering at 90° to the boundary, it must leave at 90° (symmetry), moving the opposite way. The velocity has turned through 180°: half a period, πm/(qB), whatever the speed.
wrong: By symmetry it leaves perpendicular to the boundary, travelling back out. The velocity has reversed, a turn of 180°, which takes half a period, T/2 = πm/(qB), independent of speed.
:::

## The Hall effect {lvl=3 id=s-hall label="JEE"}

Put a current-carrying strip in a magnetic field perpendicular to its broad face. The moving carriers feel a sideways force $qv_dB$ and start to pile up on one edge, leaving the other edge with the opposite charge. That separation creates a sideways electric field $E_H$, which grows until it exactly cancels the magnetic push. After that, carriers flow straight along the strip again, but there is now a measurable voltage **across** it: the Hall voltage.

:::figure caption="Hall effect. Current flows to the right; B points out of the page (•). Electrons drift left, and v × B pushes them to the bottom edge, which becomes negative. Positive carriers moving right would be pushed to the bottom too, making it positive. The sign of V_H reveals the sign of the carriers."
<svg viewBox="0 0 300 150" role="img" aria-label="A rectangular strip with current to the right, dots for a field out of the page, electrons drifting left and collecting at the bottom edge, plus signs on the top edge, and a voltmeter across the width">
<rect x="50" y="40" width="200" height="70" style="fill:none;stroke:var(--ink);stroke-width:2"/>
<g style="fill:var(--muted)"><circle cx="80" cy="60" r="2"/><circle cx="130" cy="60" r="2"/><circle cx="180" cy="60" r="2"/><circle cx="230" cy="60" r="2"/><circle cx="80" cy="90" r="2"/><circle cx="230" cy="90" r="2"/></g>
<line class="ray" x1="10" y1="75" x2="45" y2="75"/><polygon points="38,71 46,75 38,79" style="fill:var(--phy)"/><text x="12" y="68">I</text>
<line class="pen" x1="170" y1="78" x2="130" y2="78" style="stroke:var(--ink)"/><polygon points="134,74 126,78 134,82" style="fill:var(--ink)"/><text x="132" y="96">e⁻ drift</text>
<text x="60" y="36">+  +  +  +  +  +  +  +</text><text x="60" y="124">−  −  −  −  −  −  −  −</text>
<line class="faint" x1="270" y1="40" x2="270" y2="110"/><text x="276" y="80">V_H</text><text x="62" y="146">width w, thickness t (along B)</text>
</svg>
:::

**Derivation.** In the steady state the forces on a carrier balance: $qE_H = qv_dB$, so $E_H = v_dB$. Across the width $w$: $V_H = E_Hw = v_dBw$. The current is $I = nqv_d\,(wt)$, where $n$ is the carrier density and $wt$ the cross-section. Eliminate $v_d$:

:::law caption="Hall voltage. t is the thickness measured along B; the width w cancels. R_H = 1/(nq) is the Hall coefficient."
$$V_H = \frac{BI}{nqt}$$
:::

Three uses follow directly:

- **Sign of carriers.** For the same current direction, positive and negative carriers are pushed to the **same** edge, so the Hall voltage has opposite signs. In metals like copper it shows negative carriers (electrons); in p-type semiconductors it shows positive carriers (holes).
- **Carrier density.** Measuring $V_H$, $B$, $I$, $t$ gives $n$. Copper has $n\approx8.5\times10^{28}$ m⁻³, so a 0.5 mm strip with 10 A in 1.5 T gives only about 2 µV. [Unverified: the value of n for copper is recalled from memory.]
- **Measuring B.** In a semiconductor $n$ is far smaller and $V_H$ far larger, so a small chip with known $n$, $t$ and $I$ becomes a magnetometer: a Hall probe.

:::qc
q: Two strips of the same size carry the same current in the same field. Strip X has ten times the carrier density of strip Y. Compare their Hall voltages.
options: ["V_X = 10 V_Y", "V_X = V_Y", "V_X = V_Y / 10", "V_X = V_Y / 100"]
answer: 2
right: Right. V_H = BI/(nqt) ∝ 1/n. More carriers means each drifts more slowly for the same current, so the magnetic push and the balancing Hall field are smaller.
wrong: V_H = BI/(nqt) is inversely proportional to n: ten times the carriers, each drifting ten times slower, gives one tenth the Hall voltage.
:::

## Crossed E and B in general: drift and cycloids {lvl=4 id=s-drift label="Olympiad"}

What does a particle do in crossed fields if it does **not** have the selector speed, for instance if it starts from rest? The cleanest route is to change frames.

**The drift frame.** Move to a frame travelling with constant velocity $\mathbf u$. The velocity of the particle becomes $\mathbf v' = \mathbf v - \mathbf u$; the force is the same in both frames (non-relativistically), so

$$q(\mathbf E + \mathbf v\times\mathbf B) = q\big(\mathbf E + \mathbf u\times\mathbf B + \mathbf v'\times\mathbf B\big).$$

Choose $\mathbf u$ so that $\mathbf E + \mathbf u\times\mathbf B = 0$. For $\mathbf E\perp\mathbf B$ this works with

:::law caption="E × B drift velocity. Same for every charge and every mass. (Valid for E < cB; this treatment also needs E/B ≪ c.)"
$$\mathbf u = \frac{\mathbf E\times\mathbf B}{B^2},\qquad u = \frac EB$$
:::

(Check: $\mathbf u\times\mathbf B = (\mathbf E\times\mathbf B)\times\mathbf B/B^2 = -\mathbf E$ when $\mathbf E\perp\mathbf B$.) In the moving frame only $\mathbf B$ acts, so the particle simply goes round a circle at the cyclotron frequency. In the lab: **circle + steady drift**.

**Released from rest.** Take $\mathbf E = E\hat y$, $\mathbf B = B\hat z$, a positive charge at rest at the origin. Then $\mathbf u = (E/B)\hat x$. In the drift frame the particle starts with velocity $-u\hat x$, so it circles at speed $u$ with radius $R = mu/(qB) = mE/(qB^2)$. In the lab the centre of that circle moves at $u$ along $x$ while the particle goes round it at the same speed: exactly a point on the rim of a wheel of radius $R$ **rolling** along the $x$-axis. The path is a **cycloid**.

:::figure caption="A positive charge released from rest in E (up) and B (out of the page) traces a cycloid, drifting along E × B. It stops momentarily at each cusp on the axis and is fastest, at 2E/B, at the top of each arch, a height 2mE/(qB²) above the axis."
<svg viewBox="0 0 330 160" role="img" aria-label="A cycloid of two arches drawn above a horizontal axis, with E pointing up and an arrow showing the drift to the right">
<line class="axis" x1="20" y1="140" x2="320" y2="140"/>
<path class="ray" style="fill:none" d="M30,140 L30,138 L31,136 L32,133 L34,129 L37,125 L40,120 L45,116 L51,111 L57,107 L64,103 L72,100 L81,98 L90,96 L99,96 L108,96 L117,98 L126,100 L134,103 L141,107 L148,111 L153,116 L158,120 L162,125 L164,129 L166,133 L167,136 L168,138 L168,140 L168,138 L169,136 L170,133 L172,129 L175,125 L179,120 L183,116 L189,111 L195,107 L203,103 L211,100 L219,98 L228,96 L237,96 L247,96 L256,98 L264,100 L272,103 L279,107 L286,111 L291,116 L296,120 L300,125 L302,129 L304,133 L306,136 L306,138 L306,140"/>
<line class="pen" x1="40" y1="60" x2="40" y2="25" style="stroke:var(--ink)"/><polygon points="36,30 40,22 44,30" style="fill:var(--ink)"/><text x="46" y="35">E</text>
<circle cx="80" cy="45" r="7" style="fill:none;stroke:var(--muted)"/><circle cx="80" cy="45" r="2" style="fill:var(--muted)"/><text x="92" y="50">B</text>
<line class="pen" x1="200" y1="40" x2="260" y2="40" style="stroke:var(--ink)"/><polygon points="252,36 260,40 252,44" style="fill:var(--ink)"/><text x="190" y="32">drift E/B</text>
<line class="faint" x1="99" y1="96" x2="99" y2="140"/><text x="104" y="125">2R</text>
</svg>
:::

Energy gives an independent check. The magnetic force does no work, so $\tfrac12mv^2 = qEy$. At the top of an arch the rolling-wheel picture gives speed $2u$; then $y_{\max} = \tfrac12m(2E/B)^2/(qE) = 2mE/(qB^2) = 2R$, as it should.

**Complex-number form.** For motion in the $xy$-plane write $w = v_x + iv_y$. With $\mathbf B = B\hat z$, $\mathbf v\times\mathbf B = B(v_y, -v_x)$, so the equation of motion becomes

$$\frac{dw}{dt} = -i\omega w + \frac{q}{m}(E_x + iE_y),\qquad \omega = \frac{qB}{m}.$$

The steady solution $w_d = (q/m)(E_x+iE_y)/(i\omega)$ is the drift; for $\mathbf E = E\hat y$ it is $E/B$ along $+x$. The general solution adds $Ae^{-i\omega t}$, a circle. This form also handles extra linear forces, such as a drag $-k\mathbf v$, which simply adds $-(k/m)w$ and turns the circles into an inward spiral.

**Any steady force.** Replace $q\mathbf E$ by any constant force $\mathbf F$ perpendicular to $\mathbf B$: the drift is $\mathbf F\times\mathbf B/(qB^2)$. Gravity, for example, makes ions and electrons drift in **opposite** directions (because of the $q$), which drives currents in the Earth's ionosphere. [Inference: the general principle is standard; its importance for any particular ionospheric current is not checked here.]

:::qc
q: A proton and an electron are both released from rest in the same crossed uniform E and B. Which statement is true?
options: ["They drift in opposite directions", "They drift in the same direction at the same average speed E/B", "Only the proton drifts", "The electron drifts faster because it is lighter"]
answer: 1
right: Right. The drift E × B/B² contains neither q nor m. They do loop in opposite senses on cycloids of very different sizes (R = mE/qB² is about 1836 times larger for the proton), but both move on average at E/B in the same direction.
wrong: The drift velocity E × B/B² does not contain q or m. Reversing q reverses both the electric force and the sense of rotation, and the drift comes out the same. The cycloid sizes differ (R ∝ m/q), but the average velocity is the same.
:::

## Magnetic focusing {lvl=4 id=s-focus label="Olympiad"}

Electrons leave a point on the axis of a long solenoid with nearly the same speed $v$ but slightly different directions, each at a small angle $\alpha$ to the axis. Can the field bring them all back to a single point?

Look along the axis. Each electron's projected motion is a circle of radius $mv\sin\alpha/(eB)$ that **passes through the axis**, because the electron started there. Different electrons have different circles, but every circle takes the same time $T = 2\pi m/(eB)$ to close. After exactly one period, every electron is back on the axis.

Meanwhile each has moved forward by $v\cos\alpha\,T \approx vT$ for small $\alpha$. So all of them cross the axis again at the same point, a distance

$$L = vT = \frac{2\pi mv}{eB}$$

from the source: a **magnetic lens**. The focus is exact only to first order in $\alpha$ (the forward speed $v\cos\alpha$ differs slightly), just as an ordinary lens has spherical aberration. Electron microscopes use short coils as magnetic lenses on this principle.

Read backwards, this is a method to measure $e/m$: vary $B$ until the beam focuses on a screen at distance $L$; with $v = \sqrt{2eV/m}$, $e/m = 8\pi^2V/(B^2L^2)$.

:::qc
q: A beam focuses on a screen at distance L for field B₀. At which other field values does it also focus on the same screen?
options: ["B₀/2, B₀/3, …", "2B₀, 3B₀, …", "Only B₀", "√2 B₀, √3 B₀, …"]
answer: 1
right: Right. With field nB₀ the period is T/n, so the beam crosses the axis n times in the same distance L, the last crossing at the screen.
wrong: Focus needs L to be a whole number of pitches vT. With B = nB₀ the period, and hence the pitch, is 1/n as long, so exactly n turns fit in L. B₀/2 would give a pitch of 2L, too long.
:::

## Magnetic mirrors and bottles {lvl=4 id=s-mirror label="Olympiad"}

In a **non-uniform** field the circle-and-drift picture breaks, but if the field changes slowly over one turn of the helix, a simple rule holds. Consider field lines that converge, so that $B$ grows along the axis $z$. Because $\nabla\cdot\mathbf B = 0$, converging lines need a small radial component near the axis:

$$B_r \approx -\frac r2\frac{\partial B_z}{\partial z}.$$

A particle gyrating on a circle of radius $r_L = mv_\perp/(|q|B)$ around the axis feels a force along $z$ from this $B_r$. Working out $(\mathbf v\times\mathbf B)_z = -v_\phi B_r$ for either sign of charge (the sense of gyration always flips with the sign of $q$) gives a force that pushes **away from the stronger field**:

$$F_z = -\mu\frac{\partial B}{\partial z},\qquad \mu = \frac{|q|v_\perp r_L}{2} = \frac{mv_\perp^2}{2B}.$$

Here $\mu$ is the magnetic moment of the gyrating charge (a current loop of area $\pi r_L^2$; see the lesson on the current loop). Now the energy bookkeeping. Along the path, $F_z$ changes the parallel kinetic energy at the rate $\frac{d}{dt}(\tfrac12mv_\parallel^2) = -\mu\,\frac{dB}{dt}$, where $dB/dt$ is the rate at which the particle meets stronger field. The total kinetic energy is fixed (no work by $\mathbf B$), so $\frac{d}{dt}(\tfrac12mv_\perp^2) = +\mu\,\frac{dB}{dt}$. But $\tfrac12mv_\perp^2 = \mu B$, so $\frac{d}{dt}(\mu B) = \mu\frac{dB}{dt}$, which forces

$$\frac{d\mu}{dt} = 0:\qquad \frac{v_\perp^2}{B} = \text{constant}.$$

(Equivalently, the magnetic flux through one turn of the orbit stays constant.) As the particle moves into stronger field, $v_\perp$ grows, so $v_\parallel$ must shrink. If $v_\parallel$ reaches zero before the strongest point, the particle is **reflected**: a magnetic mirror.

:::law caption="Mirror condition. A particle with pitch angle α (between v and B) where the field is B₀ is reflected by a region of maximum field B_max if"
$$\sin^2\alpha \ \ge\ \frac{B_0}{B_{\max}}$$
:::

Two mirrors facing each other make a **magnetic bottle**. Particles with small $\alpha$ (inside the "loss cone") escape through the ends; the rest bounce to and fro. With $B_{\max} = 4B_0$, everything with $\alpha \ge 30°$ is trapped. The Earth's dipole field, strong at the poles and weak at the equator, is a natural bottle: it holds the Van Allen radiation belts.

:::qc
q: In a magnetic bottle with B_max/B₀ = 2, what is the half-angle of the loss cone at the centre?
options: ["Half-angle 30°", "Half-angle 45°", "Half-angle 60°", "Half-angle 90°"]
answer: 1
right: Right. sin²α = B₀/B_max = ½ gives α = 45°. Particles moving within 45° of the axis escape; the rest are reflected.
wrong: The loss-cone edge is where sin²α = B₀/B_max = ½, so α = 45°. Inside that half-angle, v⊥ is too small to grow enough to stop the particle before the field peaks.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A magnetic field pushes only on moving charges, sideways to the motion. It changes direction, never speed or kinetic energy. {lvl=1}
2. $\mathbf F = q(\mathbf E + \mathbf v\times\mathbf B)$; magnitude $qvB\sin\theta$; reverse the direction for negative charge. This force defines $\mathbf B$; 1 T = 1 N A⁻¹ m⁻¹, 1 G = 10⁻⁴ T. {lvl=2}
3. Perpendicular to uniform $B$: circle of radius $r = mv/(qB) = p/(qB)$, angular frequency $\omega = qB/m$, period $2\pi m/(qB)$, independent of speed. {lvl=2}
4. At an angle: a helix, radius from $v_\perp$, pitch $2\pi m v_\parallel/(qB)$. {lvl=2}
5. Crossed E and B pass only $v = E/B$ (velocity selector), regardless of $q$ and $m$. Selector plus a circle in $B$ gives $e/m$ (Thomson) and masses (mass spectrometer). {lvl=3}
6. Cyclotron: oscillator at $qB/(2\pi m)$; $K_{\max} = q^2B^2R^2/(2m)$; relativity ($\omega = qB/\gamma m$) breaks the resonance at high energy. {lvl=3}
7. Field region with a straight edge: centre on the normal to $\mathbf v$; exit angle mirrors the entry angle; time = turning angle × $m/(qB)$; chord $2r\sin(\phi/2)$. {lvl=3}
8. Hall voltage $V_H = BI/(nqt)$; its sign gives the sign of the carriers. {lvl=3}
9. In crossed fields everything drifts at $\mathbf E\times\mathbf B/B^2$; from rest the path is a cycloid of height $2mE/(qB^2)$ and peak speed $2E/B$. Any steady force drifts at $\mathbf F\times\mathbf B/(qB^2)$. {lvl=4}
10. Equal periods focus a diverging beam after one turn ($L = 2\pi mv/eB$); in slowly varying fields $mv_\perp^2/(2B)$ is conserved, giving mirrors with $\sin^2\alpha \ge B_0/B_{\max}$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- For an electron, find $\mathbf v\times\mathbf B$ and then **reverse** it. Most sign errors come from forgetting this. {lvl=2}
- Units: gauss to tesla is × 10⁻⁴; keV to joules is × 1.6 × 10⁻¹⁶. {lvl=2}
- "Same speed" gives $r\propto m/q$; "same accelerating voltage" gives $r\propto\sqrt{m/q}$; "same kinetic energy" gives $r\propto\sqrt m/q$. Check which is given. {lvl=2}
- The magnetic force changes velocity (it accelerates) but not speed. "No work" does not mean "no effect". {lvl=2}
- In a helix the period uses all of $B$ but only $v_\perp$ sets the radius; the pitch uses $v_\parallel$. {lvl=2}
- Cyclotron energy is set by $B$ and $R$, not by the dee voltage. {lvl=3}
- With a field boundary, decide the bending sense first: the two senses use the two different arcs of the same circle (angles $2\theta$ and $360° - 2\theta$ for entry at angle $\theta$ to the edge). {lvl=3}
- In the Hall formula, $t$ is the dimension **along B**, not the width across which $V_H$ is measured. {lvl=3}
- The $E\times B$ drift is the same for all particles; a frame change removes $E$ only when $E\perp B$ and $E < cB$. A component of $E$ along $B$ simply accelerates the particle along $B$. {lvl=4}
- Mirror trapping depends on the pitch angle, not on the speed or the charge. {lvl=4}
:::
