---
title: Electromagnetic induction and Faraday's law
summary: How a magnet makes a current without touching the wire. Faraday's and Henry's experiments, magnetic flux as B·A and as a surface integral, Faraday's law ε = −N dΦ/dt and the three ways to change flux, charge flow q = NΔΦ/R and the search coil, the rotating-coil generator, the induced non-conservative electric field (inside and outside a solenoid), eddy currents, the betatron condition and why "voltage" around a changing flux depends on the path.
ncert: ["Class 12 Physics · Ch 6 Electromagnetic Induction (§6.1–6.4)"]
up_to: Olympiad
builds_on: [Magnetic field of a current, Biot–Savart law, Ampère's circuital law, Electric potential and emf, Ohm's law, Dot product of vectors]
notes_prompt: Explain in your own words why a strong magnet resting inside a coil produces no current at all, while a weak magnet moved quickly in and out produces one, and what single quantity decides the size of the current.
margin:
  - kind: history
    title: History
    text: Michael Faraday announced electromagnetic induction in 1831 after years of looking for a current produced by a steady magnet; he found that only a change gives an effect. Joseph Henry in the USA found the same independently at about the same time. The flux-rule form ε = −dΦ/dt was later written by Franz Neumann (1845). (Dates from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "Three-line routine: (1) write Φ = NBA cos θ at the start and at the end, taking θ between B and the normal; (2) ε = |ΔΦ|/Δt for the average emf; (3) I = ε/R and, if asked, q = |ΔΦ|/R. Flipping a coil through 180° changes the flux by 2BA, not BA."
  - kind: olympiad
    title: Olympiad link
    text: The induced electric field obeys ∮E·dl = −dΦ/dt, so it has closed loops and no potential. Around a changing flux, a voltmeter's reading depends on how its leads are routed. Symmetry (circles round a solenoid axis) plus this one equation solves the betatron, the charged ring that spins up when a field is switched off, and eddy-current heating in a disc.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 6 Electromagnetic Induction, §6.1 Introduction, §6.2 The experiments of Faraday and Henry, §6.3 Magnetic flux, §6.4 Faraday's law of induction; Examples 6.1–6.3; Exercise 6.3" }
  - { title: "NCERT Science Class X", ref: "Ch 12 Magnetic Effects of Electric Current (rationalised edition; electromagnetic induction and generators appear in the exercises)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 38 Electromagnetic Induction" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 7 §7.1–7.2 (electromotive force, Faraday's law, the induced electric field)" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. II", ref: "Ch. 17 The Laws of Induction (§17-2 exceptions to the flux rule)" }
cards:
  - { front: "What is magnetic flux through a flat loop in a uniform field? Unit?", back: "$\\Phi_B = \\vec B\\cdot\\vec A = BA\\cos\\theta$, with $\\theta$ between $\\vec B$ and the normal to the loop. Unit: weber, 1 Wb = 1 T m². In general $\\Phi_B = \\int\\vec B\\cdot d\\vec A$." }
  - { front: "Faraday's law?", back: "$\\varepsilon = -N\\,\\dfrac{d\\Phi_B}{dt}$. The emf depends on the rate of change of flux, not on the flux itself. The minus sign is Lenz's law." }
  - { front: "Charge that flows through a coil of resistance R when its flux linkage changes by NΔΦ?", back: "$q = N\\,|\\Delta\\Phi|/R$, independent of how fast the change happens. Basis of the search coil and flip coil for measuring $B$." }
  - { front: "Peak emf of a coil of N turns, area A, spinning at ω in a uniform field B?", back: "$\\varepsilon = NBA\\omega\\sin\\omega t$, peak $NBA\\omega$, when the plane of the coil is parallel to $\\vec B$ (flux zero but changing fastest)." }
  - { front: "Induced electric field inside and outside a long solenoid of radius R whose field changes at dB/dt?", back: "Circles round the axis. $E = \\dfrac r2\\dfrac{dB}{dt}$ for $r<R$, $E = \\dfrac{R^2}{2r}\\dfrac{dB}{dt}$ for $r>R$, from $\\oint\\vec E\\cdot d\\vec l = -d\\Phi/dt$." }
  - { front: "Why is the induced electric field not electrostatic?", back: "Its line integral round a closed loop is $-d\\Phi/dt \\neq 0$. An electrostatic field has $\\oint\\vec E\\cdot d\\vec l = 0$. So the induced field has closed field lines and no potential function." }
core:
  idea: 'An emf is induced in a circuit whenever the magnetic flux through it changes: $\varepsilon = -N\,d\Phi_B/dt$, where $\Phi_B = \vec B\cdot\vec A = BA\cos\theta$. Only the rate of change of flux matters, however the change is produced.'
  formulas:
    - tex: '\varepsilon = -N\frac{d\Phi_B}{dt}'
      label: 'Faraday''s law'
    - tex: '\Phi_B = \vec B\cdot\vec A = BA\cos\theta'
      label: 'Magnetic flux'
    - tex: 'q = \frac{N\,|\Delta\Phi|}{R}'
      label: 'Charge driven round a circuit'
  conditions:
    - 'Thin closed loop of $N$ identical turns; $\theta$ is the angle between $\vec B$ and the normal'
    - 'Charge formula: total resistance $R$ and negligible self-inductance'
    - 'The emf exists even in an open circuit; a current needs a closed path'
  sign: 'The minus sign is Lenz''s law: the induced current opposes the change of flux. A steady flux, however large, gives no emf.'
outcomes:
  - 'State the conditions under which a magnet and a coil produce a current'
  - 'Calculate flux $BA\cos\theta$ and the induced emf from $\varepsilon = -N\,d\Phi/dt$'
  - 'Find the charge that flows and use a search coil to measure $B$'
  - 'Derive the emf of a rotating-coil generator and explain eddy currents'
  - 'Use the induced electric field $\oint\vec E\cdot d\vec l = -d\Phi_B/dt$ for a solenoid and a betatron'
---

:::hook
q: A strong bar magnet sits at rest inside a coil that is connected to a sensitive galvanometer. Nothing moves. What does the galvanometer show?
options: ["A large steady deflection, because the field inside the coil is strong", "A small steady deflection", "No deflection at all", "A deflection that slowly grows"]
answer: 2
right: Right. A steady field, however strong, drives no current in a fixed coil. Only a change of the magnetic field through the coil does. That single observation is the whole of this lesson.
wrong: The galvanometer reads zero. A steady magnetic field, however strong, drives no current in a fixed coil. Push the magnet in or pull it out, and the needle kicks; stop, and it returns to zero. Only change matters.
:::

## How can a magnet make a current without touching the wire? {lvl=1 id=s-why label="Class 10"}

In 1820 Oersted showed that a current makes a magnetic field. Physicists then asked the reverse question: can a magnetic field make a current? The obvious attempt, putting a strong magnet next to a coil, gives nothing.

The answer turned out to be: **yes, but only while something changes.**

Try this with a coil of wire connected to a galvanometer (a sensitive current meter).

- **Push a magnet into the coil.** The needle kicks to one side.
- **Hold it still inside.** The needle goes back to zero.
- **Pull it out.** The needle kicks the other way.
- **Push it in faster.** The kick is bigger.
- **Keep the magnet still and move the coil instead.** Exactly the same kicks. Only the relative motion matters.

The current that appears is called an **induced current**, and the effect is **electromagnetic induction**. No wire touches the magnet. The magnet's field reaches into the coil, and when that field changes, it pushes the electrons in the wire round the loop.

This is how almost all the world's electricity is made. In a power-station **generator**, a turbine turns coils of wire between strong magnets (or turns magnets inside fixed coils). The field through each coil changes all the time, so a current is induced continuously. Because the change reverses every half turn, the current reverses too: it is an alternating current.

:::qc
q: A coil is connected to a galvanometer. In which case is there NO induced current?
options: ["A magnet is moved towards the coil", "The coil is moved away from a fixed magnet", "A magnet and the coil move together at the same velocity", "A magnet is rotated near the coil"]
answer: 2
right: Right. If the magnet and the coil move together, nothing changes as seen from the coil, so no current is induced.
wrong: Induction needs a change in the field through the coil. If the magnet and coil move together at the same velocity, the coil sees an unchanging field, so there is no current.
:::

## Faraday's and Henry's experiments {lvl=2 id=s-experiments label="Class 12"}

NCERT (§6.2) describes three experiments. Each removes one possible explanation, and together they point to a single cause.

**Experiment 6.1: magnet and coil.** A bar magnet moved towards or away from a coil gives a current; at rest, none. Reversing the pole, or the direction of motion, reverses the current. A faster motion gives a larger current. Moving the coil instead of the magnet gives the same result.

**Experiment 6.2: coil and coil.** Replace the magnet with a second coil carrying a steady current from a battery. Moving either coil induces a current in the other. So the effect has nothing special to do with permanent magnets: any magnetic field will do.

**Experiment 6.3: nothing moves at all.** Two coils sit still, one wound over the other (or on a common iron core). Pressing the switch in the first coil's circuit makes the galvanometer on the second coil kick briefly; releasing it gives a kick the other way. While the current is steady, nothing happens. An iron rod inside the coils makes the kicks much larger.

Experiment 6.3 is the decisive one. **There is no motion at all**, yet there is a current. What the three experiments share is that the **magnetic field through the coil changes**: because a magnet moves, because a coil moves, or because a current is switched on or off.

:::figure caption="Experiment 6.1. A bar magnet moving towards a coil connected to a galvanometer G. While it moves, the field through the coil grows and a current flows; when it stops, the current stops."
<svg viewBox="0 0 360 170" role="img" aria-label="A bar magnet with N and S poles moving towards a helical coil whose ends go to a galvanometer">
<rect x="20" y="62" width="50" height="30" style="fill:var(--phy);opacity:0.75"/>
<rect x="70" y="62" width="50" height="30" style="fill:var(--muted);opacity:0.5"/>
<text class="k" x="38" y="82">S</text><text class="k" x="90" y="82">N</text>
<line class="ln" x1="128" y1="77" x2="160" y2="77"/><polyline class="ln" points="152,72 160,77 152,82"/>
<text x="126" y="60">v</text>
<path class="faint" d="M120 70 Q190 40 260 64"/><path class="faint" d="M120 84 Q190 114 260 90"/>
<ellipse class="ray" cx="190" cy="77" rx="8" ry="30"/><ellipse class="ray" cx="208" cy="77" rx="8" ry="30"/><ellipse class="ray" cx="226" cy="77" rx="8" ry="30"/><ellipse class="ray" cx="244" cy="77" rx="8" ry="30"/>
<polyline class="ln" points="190,107 190,145 285,145"/><polyline class="ln" points="244,47 300,47 300,125"/>
<circle class="obj" cx="300" cy="138" r="14" style="fill:none;stroke:var(--ink);stroke-width:1.4"/>
<text class="k" x="295" y="143">G</text>
<line class="ln" x1="300" y1="152" x2="300" y2="160"/><polyline class="ln" points="285,145 285,160 300,160"/>
</svg>
:::

**Henry** in the USA made the same discovery independently and also found **self-induction**, where a coil's own changing current induces an emf in itself. That is the subject of the lesson **Self and mutual inductance**.

:::qc
q: In Experiment 6.3 (two fixed coils), the galvanometer deflects only at the moments the switch is closed or opened. Why not while the current is steady?
options: ["The battery's current is too small while steady", "A steady current gives a steady field, and only a changing field through the second coil induces a current", "The iron core absorbs the steady field", "The galvanometer cannot measure steady currents"]
answer: 1
right: Right. A steady primary current gives a steady field through the secondary coil. Only while the current is rising or falling does that field change, and only then is a current induced.
wrong: The key is change. A steady primary current gives a steady field through the secondary, which induces nothing. Switching on or off changes the field, and only then is a current induced.
:::

## Magnetic flux {lvl=2 id=s-flux label="Class 12"}

To turn "the field through the coil" into a number, we need to account for three things: how strong the field is, how big the loop is, and how the loop is tilted. A loop edge-on to the field catches none of it.

This is exactly the idea of electric flux from **Gauss's law**, applied to $\vec B$. Describe a flat loop by its **area vector** $\vec A$: magnitude equal to the area, direction along the normal to the loop. Then only the component of $\vec B$ along the normal threads the loop.

:::law caption="Magnetic flux through a flat loop of area A in a uniform field (NCERT §6.3). θ is the angle between B and the normal to the loop, not between B and the plane."
$$\Phi_B = \vec B\cdot\vec A = BA\cos\theta.$$
:::

:::figure caption="A flat loop with area vector A along its normal, in a uniform field B. Only B cos θ, the component along the normal, passes through the loop. At θ = 0 the flux is BA; at θ = 90° (loop edge-on) it is zero."
<svg viewBox="0 0 340 170" role="img" aria-label="Parallel field lines crossing a tilted elliptical loop; an area vector A makes angle theta with the field direction">
<line class="ray" x1="20" y1="35" x2="320" y2="35"/><line class="ray" x1="20" y1="70" x2="320" y2="70"/><line class="ray" x1="20" y1="105" x2="320" y2="105"/><line class="ray" x1="20" y1="140" x2="320" y2="140"/>
<polyline class="ray" points="312,30 320,35 312,40"/>
<ellipse cx="170" cy="88" rx="24" ry="58" transform="rotate(-25 170 88)" style="fill:var(--phy);fill-opacity:0.12;stroke:var(--ink);stroke-width:1.5"/>
<line class="ln" x1="170" y1="88" x2="236" y2="57"/><polyline class="ln" points="227,56 236,57 231,65"/>
<line class="faint" x1="170" y1="88" x2="250" y2="88"/>
<path class="ln" d="M 205 88 A 35 35 0 0 0 202 74"/>
<text class="k" x="240" y="54">A</text><text class="k" x="212" y="84">θ</text><text class="k" x="298" y="27">B</text>
</svg>
:::

**Unit.** The SI unit of flux is the **weber**: 1 Wb = 1 T m². (This is why the tesla is also written Wb m⁻².)

**Non-uniform field or curved surface.** Split the surface into small patches $d\vec A$, each nearly flat with a nearly uniform field, and add:

$$\Phi_B = \int \vec B\cdot d\vec A.$$

**Flux linkage.** A coil of $N$ turns, each with flux $\Phi$, has flux linkage $N\Phi$. Every turn contributes its own emf, and they add in series.

**Sign.** For an open loop the direction of $\vec A$ is a choice, tied to a direction round the loop by the right-hand rule (curl the fingers round the chosen direction; the thumb gives $\vec A$). Once you have chosen, flux can be positive or negative. A loop turned through 180° has its flux go from $+BA$ to $-BA$, a change of $2BA$.

:::note title="Why the flux of B through a closed surface is always zero" tone=olympiad
There are no magnetic charges, so magnetic field lines have no beginning or end. Every line entering a closed surface leaves it. Gauss's law for magnetism is $\oint\vec B\cdot d\vec A = 0$. That is what makes "the flux through a loop" well-defined: any two surfaces bounded by the same loop together form a closed surface, so they carry the same flux. You may use the flat disc or any curved cap over the loop.
:::

:::qc
q: A 20 cm × 10 cm rectangular loop lies in a uniform field of 0.5 T. The field makes 30° with the plane of the loop. What is the flux?
options: ["8.7 mWb", "5.0 mWb", "10 mWb", "0"]
answer: 1
right: Right. 30° with the plane means 60° with the normal. Φ = BA cos 60° = 0.5 × 0.02 × 0.5 = 5.0 × 10⁻³ Wb.
wrong: The angle in Φ = BA cos θ is measured from the normal. 30° with the plane is 60° with the normal, so Φ = 0.5 × 0.02 × cos 60° = 5.0 mWb.
:::

## Faraday's law {lvl=2 id=s-faraday label="Class 12"}

Faraday's experiments, made quantitative, give one rule.

:::law caption="Faraday's law of induction (NCERT §6.4). N is the number of turns. The minus sign gives the direction of the emf (Lenz's law)."
$$\varepsilon = -N\,\frac{d\Phi_B}{dt}.$$
:::

In words: **the induced emf equals the rate of change of the flux linkage.** The flux itself does not matter. A huge steady flux gives zero emf; a small flux that changes fast gives a large one.

If the coil is part of a closed circuit of resistance $R$, a current $I = \varepsilon/R$ flows. If the circuit is open, the emf still exists and appears as a voltage across the open ends. **Induction makes an emf; a current follows only if there is a closed path.**

**The minus sign.** It says the induced emf drives a current whose own field opposes the change of flux. That is a separate idea with its own consequences (energy conservation, magnetic braking), treated in the lesson **Lenz's law**. In numerical problems we usually find the magnitude with $|d\Phi/dt|$ and the direction from Lenz's law.

### Three ways to change the flux

Since $\Phi_B = BA\cos\theta$, there are exactly three things to change:

1. **Change $B$.** Move a magnet nearer, or change the current in a nearby coil (Experiments 6.1–6.3). Exercise 6.3 is this case: $\varepsilon = A\,dB/dt$.
2. **Change $A$.** Stretch or squeeze the loop, or slide a rod along rails so the circuit's area grows. This is **motional emf** (its own lesson).
3. **Change $\theta$.** Rotate the coil in a fixed field. This is the generator (below and in the lesson **Alternating current**).

If several change at once, differentiate the product: $\dfrac{d\Phi}{dt} = A\cos\theta\,\dfrac{dB}{dt} + B\cos\theta\,\dfrac{dA}{dt} - BA\sin\theta\,\dfrac{d\theta}{dt}$.

:::worked title="Exercise 6.3 in one line (NCERT)"
A long solenoid with 15 turns per cm has a small loop of area 2.0 cm² inside it, normal to its axis. The current rises steadily from 2.0 A to 4.0 A in 0.1 s.

Inside a long solenoid $B = \mu_0 nI$, so $\Phi = \mu_0 nIA$ and only $I$ changes:

$$\varepsilon = \mu_0 nA\frac{\Delta I}{\Delta t} = (4\pi\times10^{-7})(1500)(2.0\times10^{-4})\frac{2.0}{0.1} = 7.5\times10^{-6}\ \text{V}.$$

Note that $n = 15$ per cm = 1500 per m. The loop is "small", so the field is uniform over it.
:::

:::qc
q: The flux through a 50-turn coil varies as Φ = (2t² + 3t) mWb, with t in seconds. What is the magnitude of the emf at t = 2 s?
options: ["0.55 V", "0.70 V", "0.35 V", "14 mV"]
answer: 0
right: Right. dΦ/dt = 4t + 3 = 11 mWb/s at t = 2 s, so ε = 50 × 11 × 10⁻³ = 0.55 V.
wrong: Differentiate first, then substitute: dΦ/dt = 4t + 3 = 11 mWb/s at t = 2 s. Multiply by N = 50: ε = 0.55 V.
:::

## Charge flow and measuring B with a search coil {lvl=3 id=s-charge label="JEE"}

How much charge passes round a circuit while the flux changes? The current at each instant is $I = \varepsilon/R = -\dfrac{N}{R}\dfrac{d\Phi}{dt}$. Integrate over time:

:::law caption="Charge driven round a circuit of total resistance R by a change of flux linkage. Only the net change matters, not the time it takes. (Neglects self-inductance, which in any case returns to zero current at the end.)"
$$q = \int I\,dt = \frac{N}{R}\int\left|\frac{d\Phi}{dt}\right|dt = \frac{N\,|\Delta\Phi|}{R}\quad\text{(if Φ changes in one direction).}$$
:::

This is remarkable. Push a magnet in slowly or quickly: the current is small for long or large for short, but **the same charge** flows. The time drops out. If the flux rises and then falls back, the current reverses and the net charge is zero; for the total charge that crosses a section, add the magnitudes for each one-way stretch.

**The search coil and flip coil.** This gives a way to measure an unknown field. Place a small coil of $N$ turns and area $A$ with its normal along $\vec B$, connected to a **ballistic galvanometer** (one that measures the total charge of a short pulse). Then either pull it quickly out of the field ($\Delta\Phi = BA$) or flip it over through 180° ($\Delta\Phi = 2BA$). The charge gives

$$B = \frac{qR}{NA}\ \ \text{(pulled out)},\qquad B = \frac{qR}{2NA}\ \ \text{(flipped)}.$$

The flip coil has the advantage that the coil never leaves the point being measured. Nothing about the speed of the flip needs to be known.

:::worked title="NCERT Example 6.3 again: what charge flows?"
A circular coil, radius 10 cm, 500 turns, resistance 2 Ω, is turned through 180° about a vertical diameter, starting perpendicular to the horizontal Earth field $3.0\times10^{-5}$ T.

$\Delta\Phi = 2BA = 2\times3.0\times10^{-5}\times\pi(0.1)^2 = 1.88\times10^{-6}$ Wb per turn.

$$q = \frac{N\Delta\Phi}{R} = \frac{500\times1.88\times10^{-6}}{2} = 4.7\times10^{-4}\ \text{C}.$$

NCERT asks for the average emf in 0.25 s (3.8 mV) and current (1.9 mA). Their product with the time, $1.9\times10^{-3}\times0.25 = 4.7\times10^{-4}$ C, agrees, but the charge is the more robust answer: it is the same whatever the speed of turning.
:::

:::qc
q: A magnet is pushed into a coil, first in 1 s, then in 0.1 s. Compare the charges that flow and the peak currents.
options: ["Same charge; peak current about 10 times larger the second time", "10 times the charge the second time; same peak current", "Same charge and same peak current", "10 times the charge and 10 times the current"]
answer: 0
right: Right. q = NΔΦ/R does not depend on time, while the current (and emf) scale with the rate, so roughly 10 times larger for a 10 times faster push.
wrong: The charge q = NΔΦ/R depends only on the flux change, so it is the same. The emf and current depend on the rate, so they are about ten times larger for the faster push.
:::

## The rotating coil: how a generator works {lvl=3 id=s-generator label="JEE"}

Take a coil of $N$ turns and area $A$, spinning at angular speed $\omega$ about an axis perpendicular to a uniform field $\vec B$. Its normal makes angle $\theta = \omega t$ with $\vec B$, so

$$\Phi = NBA\cos\omega t,\qquad \varepsilon = -\frac{d\Phi}{dt} = NBA\omega\sin\omega t.$$

- The emf is **largest** ($NBA\omega$) when the plane of the coil is **parallel** to $\vec B$, where the flux is **zero**. There the flux is passing through zero and changing fastest.
- The emf is **zero** when the coil faces the field squarely, where the flux is largest but momentarily not changing.

Flux and its rate of change are different things, and this is the clearest example of it.

:::worked title="A bicycle dynamo, roughly"
A coil of 200 turns, area 4.0 cm², turns at 25 revolutions per second in a 0.15 T field. Peak emf:

$$\varepsilon_0 = NBA\omega = 200\times0.15\times4.0\times10^{-4}\times(2\pi\times25) \approx 1.9\ \text{V}.$$

Doubling the speed doubles both the peak emf and the frequency. That is why a dynamo lamp brightens as you ride faster.
:::

The sinusoidal emf is the origin of alternating current; its circuits are developed in the lesson **Alternating current**. A commutator (split ring) reverses the coil's connections every half turn, giving a pulsating but one-way (DC) output, as in the Class 10 DC motor run backwards.

:::qc
q: At the instant a generator coil's flux is maximum, its emf is
options: ["maximum", "zero", "half the maximum", "equal to NBA"]
answer: 1
right: Right. At maximum flux, Φ = NBA cos ωt is at its peak and momentarily flat, so dΦ/dt = 0 and the emf is zero.
wrong: Emf depends on the rate of change. At the maximum of Φ = NBA cos ωt the slope is zero, so the emf is zero. The emf peaks when the flux passes through zero.
:::

## The induced electric field {lvl=3 id=s-efield label="JEE"}

In Experiment 6.3 nothing moves. The electrons in the second coil start from rest, so the magnetic force $q\vec v\times\vec B$ on them is zero. Yet they are pushed round the wire. **Something must exert a force on charges at rest, and that is, by definition, an electric field.**

So a changing magnetic field creates an electric field. The emf round a loop is the work done per unit charge by this field in one trip round the loop:

:::law caption="Faraday's law for a fixed loop, in terms of the induced electric field. The loop can be any closed path, in a wire or in empty space; S is any surface bounded by it."
$$\oint \vec E\cdot d\vec l = -\frac{d}{dt}\int_S \vec B\cdot d\vec A.$$
:::

**This field is not electrostatic.** For the field of static charges, $\oint\vec E\cdot d\vec l = 0$ round every loop: that is what lets us define a potential $V$. The induced field has a non-zero circulation, so:

- its field lines can form **closed loops** with no charges at either end;
- there is **no potential function** for it: the work done in carrying a charge from A to B depends on the path;
- it does not need a wire. The wire only gives the charges a path to follow. The field exists in empty space too.

### The field of a changing solenoid

A long solenoid of radius $R$ has a uniform field $B(t)$ inside and (almost) none outside. By symmetry the induced $\vec E$ can depend only on the distance $r$ from the axis, and it must circle the axis. (A radial part would need charges on the axis; an axial part would not be consistent with a long uniform solenoid.) Take a circle of radius $r$ as the loop. Then $\oint\vec E\cdot d\vec l = E\cdot2\pi r$.

- **Inside** ($r<R$): the flux is $\pi r^2B$, so $E\cdot2\pi r = \pi r^2\,\dfrac{dB}{dt}$, giving $E = \dfrac r2\dfrac{dB}{dt}$.
- **Outside** ($r>R$): the flux is all of $\pi R^2B$, so $E = \dfrac{R^2}{2r}\dfrac{dB}{dt}$.

:::figure caption="Left: cross-section of a solenoid whose field B (into the page, crosses) is increasing. The induced electric field lines are closed circles round the axis, inside and outside. Right: E against r. It grows linearly to r = R and then falls as 1/r. Outside, where B itself is zero, E is not zero."
<svg viewBox="0 0 460 190" role="img" aria-label="A circle with crosses inside, surrounded by concentric dashed circles with arrows; beside it a graph of E rising linearly to R and then falling as one over r">
<circle cx="95" cy="95" r="45" style="fill:var(--phy);fill-opacity:0.1;stroke:var(--ink);stroke-width:1.5"/>
<text class="k" x="78" y="80">×</text><text class="k" x="104" y="80">×</text><text class="k" x="78" y="104">×</text><text class="k" x="104" y="104">×</text><text class="k" x="91" y="124">×</text><text class="k" x="91" y="66">×</text>
<circle class="faint" cx="95" cy="95" r="25"/><circle class="faint" cx="95" cy="95" r="65"/><circle class="faint" cx="95" cy="95" r="85"/>
<polyline class="ln" points="115,25 121,30 115,36"/><polyline class="ln" points="174,90 179,96 184,90"/><polyline class="ln" points="10,100 15,94 20,100"/><polyline class="ln" points="98,64 92,70 98,76"/>
<line class="faint" x1="95" y1="95" x2="140" y2="95"/><text class="k" x="112" y="91">R</text>
<text x="30" y="186">B increasing, into page</text>
<line class="axis" x1="240" y1="160" x2="450" y2="160" style="stroke:var(--ink)"/><line class="axis" x1="240" y1="160" x2="240" y2="20" style="stroke:var(--ink)"/>
<polyline class="ray" points="240,160 310,50 330,72 350,86.7 370,97.1 390,105 420,115.3 445,120.2"/>
<line class="faint" x1="310" y1="50" x2="310" y2="160"/>
<text class="k" x="306" y="176">R</text><text class="k" x="440" y="176">r</text><text class="k" x="220" y="28">E</text>
<text x="254" y="100">∝ r</text><text x="390" y="96">∝ 1/r</text>
</svg>
:::

The field just outside the solenoid, where $\vec B = 0$, is a striking result: a charge there feels a force although the magnetic field at its own position never changes. What matters is the flux enclosed by the loop through the charge, not the field at the charge.

:::worked title="How strong is an induced field?"
A solenoid of radius 2.0 cm has its field rising at 50 T/s (a fast pulse). At $r = 1.0$ cm: $E = \frac{0.010}{2}\times50 = 0.25$ V/m. At $r = 4.0$ cm, outside: $E = \frac{(0.020)^2}{2\times0.040}\times50 = 0.25$ V/m.

A one-turn loop of radius 4.0 cm round the solenoid has emf $E\cdot2\pi r = 0.25\times2\pi\times0.04 = 0.063$ V, which equals $\pi R^2\,dB/dt = \pi(0.02)^2\times50$, as it must. Any loop that encircles the solenoid once, whatever its shape or size, has the same emf.
:::

:::qc
q: A circular loop of radius 10 cm encircles a long solenoid of radius 3 cm whose field changes at a steady rate. The loop is replaced by one of radius 20 cm, also encircling the solenoid. The emf in the loop
options: ["doubles", "halves", "stays the same", "becomes four times as large"]
answer: 2
right: Right. Outside the solenoid B = 0, so both loops enclose the same changing flux πR²B. E falls as 1/r but the path length grows as r: the emf is the same.
wrong: Only flux inside the solenoid changes. Both loops enclose all of it, so the emf πR² dB/dt is the same. The induced E is weaker at 20 cm, but the path is longer by the same factor.
:::

## Eddy currents {lvl=3 id=s-eddy label="JEE"}

Faraday's law does not need wires. In a **solid piece of metal**, every closed path through the metal is a possible loop. When the flux through such paths changes, currents swirl round inside the metal like eddies in a stream. These are **eddy currents** (also called Foucault currents).

Their size follows from the induced field: the current density is $J = \sigma E$, with $E \propto dB/dt$ and growing with the size of the loops. So eddy currents are large in **thick, highly conducting** pieces with **fast-changing** fields.

**They can be useful:**

- **Induction furnace and induction cooktop.** A high-frequency alternating field induces large eddy currents in the metal (or in the iron pan), heating it directly. The heating power grows as the square of the frequency, so these run at kilohertz frequencies. [Typical frequencies from general knowledge, not from NCERT.]
- **Electromagnetic damping and braking.** A metal plate moving through a magnetic field has eddy currents that, by Lenz's law, oppose the motion. This damps the swinging coil of a galvanometer (so the needle settles quickly) and is used in the brakes of some trains. It is braking with no contact and no wear.
- **Metal detectors** and **speedometers** also rely on induced currents in metal.

**They can be wasteful:** in a transformer or motor core, eddy currents turn electrical energy into heat. The cure is to **laminate** the core: make it from thin insulated sheets stacked along the field. Each sheet is too thin for large current loops, and the insulation blocks currents from one sheet to the next.

The magnetic braking of a pendulum or a falling magnet is Lenz's law at work, so it is developed in the lesson **Lenz's law**.

:::qc
q: Why is a transformer core made of thin insulated sheets instead of a solid block of iron?
options: ["Thin sheets have a larger magnetic permeability", "Thin sheets weigh less", "The insulation breaks up the large current loops, reducing eddy-current heating", "Thin sheets increase the flux through the coils"]
answer: 2
right: Right. The changing flux would drive large eddy currents round a solid core. Thin insulated sheets allow only small loops with small emfs, so much less energy is lost as heat.
wrong: The point is to reduce eddy currents. In a solid core they circulate in large loops; insulated laminations confine them to thin sheets, cutting the heating loss sharply.
:::

## One law, two mechanisms {lvl=4 id=s-two label="Olympiad"}

Faraday's law covers two physically different situations.

- **Fixed loop, changing field** (Experiment 6.3). The charges start at rest; they are pushed by the **induced electric field**, $\oint\vec E\cdot d\vec l = -\int\dfrac{\partial\vec B}{\partial t}\cdot d\vec A$.
- **Moving loop, steady field** (a rod sliding on rails, a coil rotating in a magnet's field). Here there is no induced $\vec E$ in the lab frame. The charges move with the wire, so the **magnetic force** $q\vec v\times\vec B$ pushes them along it. The emf is $\oint(\vec v\times\vec B)\cdot d\vec l$, and one can show this equals $-d\Phi/dt$. (Developed in the lesson **Motional emf**.)

In general, the emf round a circuit is $\varepsilon = \oint(\vec E + \vec v\times\vec B)\cdot d\vec l$, and for a thin-wire circuit both parts together give exactly $-d\Phi/dt$. Einstein's 1905 relativity paper began from exactly this coincidence: the magnet-moving and coil-moving experiments give the same current, although the explanations differ. In relativity they are one effect seen from two frames.

**Differential form.** Apply Faraday's law to a tiny loop. Using Stokes' theorem ($\oint\vec E\cdot d\vec l = \int(\nabla\times\vec E)\cdot d\vec A$) for every small surface gives

$$\nabla\times\vec E = -\frac{\partial\vec B}{\partial t},$$

the third Maxwell equation. In electrostatics $\nabla\times\vec E = 0$; a changing $\vec B$ is the only source of curl in $\vec E$.

:::note title="When the flux rule seems to fail" tone=olympiad
The flux rule assumes the circuit is a definite thin path moving with the material. In a **Faraday disc** (a copper disc spinning in a steady axial field, with sliding contacts at the axle and the rim), the flux through any obvious circuit does not change, yet there is a steady emf $\tfrac12B\omega a^2$. The $\vec v\times\vec B$ force explains it directly. Conversely, two rocking plates can change the flux through a circuit a lot with almost no emf. In such cases always go back to $\vec E + \vec v\times\vec B$ (Feynman, Lectures Vol. II §17-2). The Faraday disc is worked out in the lesson **Motional emf**.
:::

## Voltage that depends on the path {lvl=4 id=s-path label="Olympiad"}

Because the induced field has no potential, "the voltage between two points" is not defined in a region of changing flux. A voltmeter measures $\int\vec E\cdot d\vec l$ **along its own leads**, and different routes give different readings.

Here is the cleanest example. A ring is made of two resistors, $R_1$ on the left half and $R_2$ on the right half, joined at points P and Q. A long solenoid passes through the middle of the ring, with a changing flux that gives emf $\varepsilon$ round the ring. The current is $I = \varepsilon/(R_1 + R_2)$.

Now connect a voltmeter to P and Q.

- **Leads run on the left**, so the loop "voltmeter + $R_1$" encloses no changing flux. Kirchhoff's loop rule holds for that loop, and the meter reads $IR_1$.
- **Leads run on the right**, so the loop "voltmeter + $R_2$" encloses no flux. The meter reads $IR_2$ in magnitude, with the opposite sign.

With $R_1 \neq R_2$, two voltmeters connected to the **same two points** show **different readings**. Neither is wrong. Each measures the line integral along its own path, and these differ by exactly the enclosed $d\Phi/dt$.

:::note title="Practical lesson" tone=warn
Kirchhoff's loop rule is valid only for loops that enclose no changing flux. With inductors in a circuit, the changing flux is confined inside the coils, and we account for it by assigning each coil a "voltage" $L\,dI/dt$. That works because the leads never enclose the coil's flux. When a loop does enclose changing flux, write $\oint\vec E\cdot d\vec l = -d\Phi/dt$ instead.
:::

## The betatron condition {lvl=4 id=s-betatron label="Olympiad"}

A **betatron** accelerates electrons round a fixed circular orbit of radius $r$ using only the induced electric field of a rising magnetic field. Two things must happen together:

1. **Acceleration.** The induced field along the orbit is $E = \dfrac{1}{2\pi r}\dfrac{d\Phi}{dt}$, where $\Phi = \pi r^2\bar B$ and $\bar B$ is the **average** field over the area inside the orbit. Newton: $\dfrac{dp}{dt} = eE = \dfrac{er}{2}\dfrac{d\bar B}{dt}$.
2. **Steering.** The field **at the orbit**, $B_{\text{orb}}$, must hold the electron on the circle of radius $r$: $p = eB_{\text{orb}}r$, so $\dfrac{dp}{dt} = er\dfrac{dB_{\text{orb}}}{dt}$.

Equating, and starting from zero: $B_{\text{orb}} = \tfrac12\bar B$. The field at the orbit must always be **half the average field inside it** (the "2 : 1 rule"). The magnet's pole faces are shaped to make the field weaker at the orbit than in the middle.

Each turn, the electron gains energy $e\,\dfrac{d\Phi}{dt}$, the emf of one loop round the orbit. With a flux changing at a few tens of webers per second, that is tens of electronvolts per turn, but over millions of turns it reaches millions of electronvolts. [Inference: order-of-magnitude illustration, not data for a specific machine.]

:::qc
q: In a betatron, the average field inside the orbit increases at 60 T/s and the orbit radius is 0.4 m. What energy does an electron gain per turn?
options: ["30 eV", "15 eV", "60 eV", "7.5 eV"]
answer: 0
right: Right. Energy per turn = e × dΦ/dt = e × π(0.4)² × 60 ≈ e × 30 V, so about 30 eV.
wrong: One turn round the orbit is a loop with emf dΦ/dt = πr² dB̄/dt = π × 0.16 × 60 ≈ 30 V. The electron gains e × 30 V = 30 eV per turn.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A magnetic field induces a current only while the field through the circuit **changes**. Magnet moving, coil moving, or a current switched on or off all work; a steady field, however strong, does nothing. Generators use this. {lvl=1}
2. Flux $\Phi_B = \vec B\cdot\vec A = BA\cos\theta$ ($\theta$ from the normal), or $\int\vec B\cdot d\vec A$; unit weber = T m². Flipping a coil changes the flux by $2BA$. {lvl=2}
3. Faraday's law: $\varepsilon = -N\,d\Phi/dt$. Change $B$, $A$ or $\theta$. The emf exists even in an open circuit; a current needs a closed path. The sign is Lenz's law. {lvl=2}
4. Charge through a circuit: $q = N|\Delta\Phi|/R$, independent of the time taken (search coil, flip coil). Rotating coil: $\varepsilon = NBA\omega\sin\omega t$, largest when the flux is zero. {lvl=3}
5. A changing $B$ creates an electric field with $\oint\vec E\cdot d\vec l = -d\Phi/dt$: closed field lines, no potential, exists without wires. Solenoid: $E = \frac r2\frac{dB}{dt}$ inside, $\frac{R^2}{2r}\frac{dB}{dt}$ outside. {lvl=3}
6. Eddy currents flow in bulk metal in a changing flux: useful for furnaces, cooktops and braking; wasteful in cores, so cores are laminated. {lvl=3}
7. emf $= \oint(\vec E + \vec v\times\vec B)\cdot d\vec l$; $\nabla\times\vec E = -\partial\vec B/\partial t$. Voltmeter readings depend on the routing of the leads round changing flux. Betatron: $B_{\text{orb}} = \frac12\bar B$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Large flux does not mean large emf. What counts is the **rate** of change; at maximum flux a rotating coil has zero emf. {lvl=2}
- $\theta$ in $BA\cos\theta$ is between $\vec B$ and the **normal**. "Field at 30° to the plane" means $\theta = 60°$. {lvl=2}
- Turning a coil through 180° changes the flux by $2BA$, not zero and not $BA$. Through 90° from face-on, the change is $BA$. {lvl=2}
- Convert turns per cm to turns per m, and cm² to m² ($\times10^{-4}$), before using $\mu_0 nIA$. {lvl=2}
- $|\Delta\Phi|/\Delta t$ gives the **average** emf. For an instantaneous value, differentiate $\Phi(t)$ first. {lvl=3}
- $q = N\Delta\Phi/R$ uses the **total** resistance of the circuit (coil plus galvanometer). If the flux reverses its trend, split into one-way stretches. {lvl=3}
- Outside a solenoid $B = 0$ but the induced $E$ is not zero. Use $\oint\vec E\cdot d\vec l$ with the enclosed flux, not the local $B$. {lvl=3}
- Kirchhoff's loop rule fails for a loop that encloses changing flux; a voltmeter's reading then depends on how its leads run. {lvl=4}
- The flux rule is for thin circuits that move with the material. For sliding contacts on a spinning disc, use $\vec v\times\vec B$ directly. {lvl=4}
:::
