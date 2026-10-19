---
title: Self and mutual inductance
summary: 'Why a coil has a kind of inertia for current, and how a 1.5-volt cell can give you a sharp kick.'
ncert: ["Class 12 Physics · Ch 6 Electromagnetic Induction (§6.7)"]
up_to: Olympiad
builds_on: [Electromagnetic induction, Lenz's law, Ampère's circuital law, Capacitors, Kirchhoff's rules]
notes_prompt: Explain, without any equation, why a coil makes it hard to change the current through it quickly but does nothing at all to a steady current, and how this is like pushing a heavy trolley.
margin:
  - kind: history
    title: History
    text: "Joseph Henry in America noticed self-induction (a spark on breaking a circuit with a long coil) around 1832, independently of Faraday's 1831 work on induction; the SI unit of inductance is named after him. (Dates from memory, [Unverified].)"
  - kind: tip
    title: Board favourite
    text: "To find any inductance: (1) imagine a current I in one coil, (2) find B with Ampère's law, (3) find the flux through one turn of the coil you care about, (4) multiply by its number of turns, (5) divide by I. The I always cancels; that is the proof that L and M are geometry only."
  - kind: olympiad
    title: Olympiad link
    text: "Energy is the master tool. U = ½L₁I₁² + ½L₂I₂² + MI₁I₂ proves M₁₂ = M₂₁, proves |M| ≤ √(L₁L₂), and gives the inductance of a coaxial cable or a thick wire through ∫B²/2μ₀ dV when the flux is awkward to define."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 6 Electromagnetic Induction, §6.7 Inductance (mutual inductance, self-inductance); Examples 6.8–6.9; Exercises 6.7–6.8" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 38 Electromagnetic Induction (self-induction, LR circuits, energy stored, mutual induction)" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 7 Electrodynamics, §7.2.3 Inductance, §7.2.4 Energy in magnetic fields" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 7 Electromagnetic Induction (mutual inductance, reciprocity, self-inductance, RL circuit, energy)" }
cards:
  - { front: "Define self-inductance $L$ and mutual inductance $M$.", back: "Flux linkage $N\\Phi = LI$ for a coil's own current; $N_2\\Phi_2 = MI_1$ for the flux in coil 2 due to coil 1. Then $\\varepsilon = -L\\,dI/dt$ and $\\varepsilon_2 = -M\\,dI_1/dt$. Unit henry, H = Wb/A = V s/A." }
  - { front: "Self-inductance of a long solenoid; mutual inductance of two coaxial long solenoids?", back: "$L = \\mu_r\\mu_0 n^2Al = \\mu_r\\mu_0N^2A/l$. $M = \\mu_0n_1n_2\\pi r_1^2 l$, with $r_1$ the inner (smaller) radius." }
  - { front: "Energy in an inductor and energy density of a magnetic field?", back: "$U = \\tfrac12LI^2$, the work done against the back emf. $u_B = B^2/2\\mu_0$, the twin of $u_E = \\tfrac12\\varepsilon_0E^2$." }
  - { front: "Current in an L–R circuit after switching on, and after removing the battery?", back: "Growth $I = \\frac{\\varepsilon}{R}(1-e^{-t/\\tau})$, decay $I = I_0e^{-t/\\tau}$, with $\\tau = L/R$. After one $\\tau$: 63% grown, or 37% left." }
  - { front: "Two inductors in series, with mutual inductance $M$?", back: "$L = L_1 + L_2 \\pm 2M$ (+ when the fluxes aid, − when they oppose). Uncoupled parallel: $1/L = 1/L_1 + 1/L_2$. Coupling coefficient $k = M/\\sqrt{L_1L_2} \\le 1$." }
  - { front: "Why is $M_{12} = M_{21}$?", back: "Set up $I_1$ then $I_2$, or $I_2$ then $I_1$: the work is $\\tfrac12L_1I_1^2 + \\tfrac12L_2I_2^2 + M_{12}I_1I_2$ or the same with $M_{21}$. The final state is the same, so the energy is too." }
core:
  idea: 'Flux linkage is proportional to the current that produces it, $N\Phi = LI$ (self) and $N_2\Phi_2 = MI_1$ (mutual), with $L$ and $M$ fixed by geometry and core alone. Hence $\varepsilon = -L\,dI/dt$, and the energy stored is $\tfrac12LI^2$.'
  formulas:
    - tex: 'N\Phi = LI,\qquad \varepsilon = -L\frac{dI}{dt}'
      label: 'Self-inductance'
    - tex: 'L = \mu_0 n^2 A l'
      label: 'Long solenoid (multiply by $\mu_r$ with a core)'
    - tex: 'U = \tfrac12 L I^2'
      label: 'Energy stored in an inductor'
  conditions:
    - 'Air core or linear core, so $L$ does not depend on the current'
    - 'Long solenoid with ends neglected and a uniform field inside'
    - 'Ideal inductor has zero resistance; for $M$, coupling $k\le 1$ with $M^2\le L_1L_2$'
  sign: 'The minus sign is a back emf opposing the change of current. The voltage across an inductor depends on $dI/dt$, not on $I$; the current cannot change abruptly.'
outcomes:
  - 'Define self and mutual inductance and give their units'
  - 'Calculate the inductance of a solenoid, and the mutual inductance of coaxial coils'
  - 'Find the energy stored in an inductor and the energy density $B^2/2\mu_0$ of the field'
  - 'Solve L–R growth and decay with $\tau = L/R$ and explain the spark on breaking a circuit'
  - 'Combine inductors and prove reciprocity and $|M|\le\sqrt{L_1L_2}$ from energy'
opener:
  story: |
    A 1.5 volt cell cannot hurt you. You can hold both ends and feel nothing. Now connect the cell to a big coil of wire, hold the two ends of the coil, and break the circuit. The instant you do, you get a sharp kick, as if the voltage had suddenly jumped far above 1.5 volts. (This is a standard classroom demonstration.)

    You may have seen the same thing at home: pull the plug of a running fan or mixer out of the wall and a small spark leaps between the pin and the socket. The appliance was drawing a steady current, so why does it spark at the moment you cut it off?

    The coil is behaving as though the current had *momentum*. It wants to keep flowing, and when you cut the path, it pushes charge across a gap of air to do so. That odd stubbornness is the subject of this lesson.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A circuit with a cell, a coil and a switch gap where a spark jumps when the circuit is broken"><path d="M60 128 V70 H100" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M100 70 c0 -28 20 -28 20 0 c0 -28 20 -28 20 0 c0 -28 20 -28 20 0 c0 -28 20 -28 20 0 c0 -28 20 -28 20 0 c0 -28 20 -28 20 0" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M220 70 H260 V100" style="fill:none;stroke:var(--ink);stroke-width:2"/><polyline points="260,100 268,108 254,118 268,124 260,132" style="fill:none;stroke:var(--chem);stroke-width:3"/><path d="M260 132 V190 H60 V150" style="fill:none;stroke:var(--ink);stroke-width:2"/><line x1="46" y1="150" x2="74" y2="150" style="stroke:var(--ink);stroke-width:3"/><line x1="52" y1="138" x2="68" y2="138" style="stroke:var(--ink);stroke-width:3"/><line x1="60" y1="138" x2="60" y2="128" style="stroke:var(--ink);stroke-width:2"/><text x="146" y="36" style="font-size:11px;fill:var(--c)">big coil</text><text x="72" y="148" style="font-size:11px;fill:var(--muted)">1.5 V cell</text><text x="274" y="122" style="font-size:11px;fill:var(--chem)">spark!</text><text x="96" y="216" style="font-size:11px;fill:var(--muted)">the current refuses to stop</text></svg>'
life:
  - 'The spark when you unplug a running fan, mixer or charger is a coil''s current refusing to stop.'
  - 'Phone wireless chargers and electric-toothbrush chargers send energy from one coil to another through the air: mutual inductance at work.'
  - 'The ignition coil of a petrol engine turns a 12-volt battery into thousands of volts for the spark plug by breaking a current fast.'
  - 'The metal detector at a mall or airport is a coil whose inductance changes when metal comes near.'
  - 'The tiny black cylinders on laptop and phone charger cables are inductors that smooth out sudden changes in current.'
models:
  - name: 'Inertia has an electrical twin'
    text: 'A coil does for current what mass does for motion: it resists change, stores energy ($\tfrac12 LI^2$ versus $\tfrac12 mv^2$), and costs nothing to keep going once it is steady. Many things have this trait: habits, institutions, a big ship.'
  - name: 'Smooth the jolts'
    text: 'An inductor does not stop current, it slows its change. Shock absorbers, savings buffers and notice periods do the same job: they let you absorb a sudden jolt gradually rather than all at once.'
  - name: 'Cutting off sharply costs you'
    text: 'The danger is in stopping fast. The faster you break a coil''s current, the larger the voltage it throws. Sudden stops, whether of a current, a loan or a project, tend to release trouble stored up in them.'
links:
  - leaf: 'phy/momentum-and-the-second-law'
    name: 'Momentum and the second law'
    same: 'Same shape of equation: voltage across a coil $= L\,dI/dt$ matches force $= m\,dv/dt$, so $L$ plays the part of mass, current the part of velocity, and energy $\tfrac12LI^2$ matches $\tfrac12mv^2$.'
    differs: 'Mass is a fixed property of a body, but $L$ depends on shape, turns and what is inside the coil, and it can be raised many times by an iron core.'
  - leaf: 'phy/capacitors'
    name: 'Capacitors'
    same: 'A capacitor stores energy in an electric field ($\tfrac12CV^2$) and an inductor stores it in a magnetic field ($\tfrac12LI^2$). Both depend only on geometry, and both give an exponential rise and fall with a time constant.'
    differs: 'A capacitor resists a change of voltage; an inductor resists a change of current. Where one is large the other is small, which is the key to resonance.'
symbols:
  - { s: 'N', means: 'number of turns in the coil' }
  - { s: '\Phi', means: 'magnetic flux through one turn (weber, Wb)' }
  - { s: 'I', means: 'current in the coil (amperes, A)' }
  - { s: 'L', means: 'self-inductance: flux linkage per ampere in the coil''s own current (henry, H)' }
  - { s: 'M', means: 'mutual inductance: flux linkage in one coil per ampere in the other (henry, H)' }
  - { s: '\varepsilon', means: 'induced emf, the back push on the current (volts, V)' }
  - { s: 'U', means: 'energy stored in the inductor (joules, J)' }
  - { s: '\tau', means: 'time constant L/R of a coil with a resistor (seconds)' }
  - { s: '\mu_0', means: 'permeability of free space: how easily a field forms in vacuum (T m/A)' }
  - { s: 'n', means: 'number of turns per metre of a solenoid' }
  - { s: 'A', means: 'cross-section area of the coil (square metres)' }
  - { s: 'k', means: 'coupling coefficient of two coils: 1 means all flux is shared, 0 none' }
next:
  q: 'A coil resists any change in its current. A power station''s spinning coil makes a current that reverses direction 50 times every second. What is the supply in the wall then, and what does the label 220 V really mean?'
  leaf: 'phy/alternating-current'
  name: 'Alternating current and the AC generator'
---

:::hook
q: So what's your guess? Now put a bulb in series with a big coil of thick copper wire, whose resistance is tiny, and close the switch. What does the bulb do?
options: ["It lights fully at once, since the coil has almost no resistance", "It brightens gradually over a moment, then stays bright", "It flashes brightly, then goes dim"]
answer: 1
right: "Right. As the current rises, the coil's own field and flux rise too, so the coil induces an emf that opposes the rise. The current creeps up to its final value. Once it is steady there is nothing left to oppose, and the coil acts like a plain wire. That same stubbornness gives the spark when you break the circuit."
wrong: "The coil does not block a steady current, since its resistance is tiny. But while the current is rising, the coil's own changing flux induces an emf that opposes the rise (Lenz's law). So the bulb brightens gradually, then stays bright. That same stubbornness gives the spark when you break the circuit."
:::

## Flux linkage and inductance {lvl=2 id=s-def label="Class 12"}

Pass a current $I$ through a coil. Its magnetic field, and so the flux through each turn, is proportional to $I$. That is just the Biot–Savart law: double every current and you double every $B$.

Add up the flux through all $N$ turns. This total, $N\Phi$, is called the **flux linkage**. Since it is proportional to the current,
$$N\Phi = LI.$$

The constant $L$ is the coil's **self-inductance**.

Now put a second coil nearby. Coil 1's field also threads coil 2. The flux linkage in coil 2 is again proportional to $I_1$:
$$N_2\Phi_2 = M_{21}I_1.$$

The constant $M_{21}$ is the **mutual inductance** of coil 2 with respect to coil 1.

**Why only geometry?** To compute $\Phi$ you find $B$ from the shape of the wire and multiply by $I$, then integrate over the shape of the turns. The current comes out as a common factor. What is left depends only on the sizes, shapes, number of turns, relative positions, and the material filling the space (through $\mu_r$). The current or its rate of change never enters. This is like capacitance, $C = Q/V$, which depends only on the shape of the plates and the dielectric.

Faraday's law turns these into emfs. If the current changes, the flux linkage changes, and
$$\varepsilon = -\frac{d(N\Phi)}{dt} = -L\frac{dI}{dt},\qquad \varepsilon_2 = -M_{21}\frac{dI_1}{dt}.$$

:::law caption="Self- and mutual inductance (NCERT §6.7). The minus sign is Lenz's law: the induced emf opposes the change in current. Unit: the henry, 1 H = 1 Wb/A = 1 V s/A."
$$N\Phi = LI,\quad \varepsilon = -L\frac{dI}{dt};\qquad N_2\Phi_2 = MI_1,\quad \varepsilon_2 = -M\frac{dI_1}{dt}$$
:::

A coil of 1 H carrying a current changing at 1 A/s has 1 V across it. That is a large inductance. Coils in electronics are usually microhenries to millihenries.

:::worked title="NCERT Exercises 6.7 and 6.8"
**6.7.** A current falls from 5.0 A to 0 in 0.1 s and the average induced emf is 200 V. Then $L = \varepsilon/(\Delta I/\Delta t) = 200/(5.0/0.1) = 4$ H.

**6.8.** $M = 1.5$ H and $I_1$ goes from 0 to 20 A. The flux linkage in the other coil changes by $M\Delta I_1 = 1.5\times20 = 30$ Wb. The time, 0.5 s, only gives the average emf, $30/0.5 = 60$ V.
:::

:::qc
q: The current in a coil is doubled, from 2 A to 4 A. What happens to its self-inductance?
options: ["It doubles", "It halves", "It stays the same", "It becomes four times larger"]
answer: 2
right: Right. The flux linkage doubles, but so does the current, so L = NΦ/I is unchanged. L depends only on the coil's geometry and the core material.
wrong: Doubling I doubles the flux linkage NΦ too, so their ratio L is unchanged. L depends only on the geometry and the core, like capacitance.
:::

## Electrical inertia {lvl=2 id=s-inertia label="Class 12"}

An inductor in a circuit obeys
$$V_L = L\frac{dI}{dt}$$
for the voltage across it (in the direction of the current). Compare Newton's second law, $F = m\,dv/dt$:

| Mechanics | Circuit |
|---|---|
| velocity $v$ | current $I$ |
| force $F$ | voltage $V$ |
| mass $m$ | inductance $L$ |
| kinetic energy $\tfrac12mv^2$ | magnetic energy $\tfrac12LI^2$ |

A large mass does not resist **motion**, only **changes** in motion. In the same way an inductor does nothing to a steady current (with ideal wire, $V_L = 0$). It only resists changes. The consequences:

- The current through an inductor **cannot jump**. A sudden jump would need $dI/dt = \infty$, so an infinite voltage.
- To change the current at a rate $dI/dt$ you must supply a voltage $L\,dI/dt$, just as you push with $m\,dv/dt$ to accelerate a trolley.
- A moving trolley keeps going when you stop pushing; a current in an inductor keeps flowing when you remove the battery, until something (a resistor, like friction) takes its energy.

The emf $-L\,dI/dt$ is often called the **back emf**: it pushes back against whatever is changing the current.

:::qc
q: Just after a switch is closed in a circuit with an inductor, the current through the inductor is zero. Just after, what is the voltage across the (ideal) inductor?
options: ["Zero, because the current is zero", "The whole battery emf, since no current means no voltage drop on any resistor", "Infinite", "Half the battery emf"]
answer: 1
right: Right. The current cannot jump, so it is still zero just after the switch closes. No current means no IR drop anywhere, so the full emf appears across the inductor, which gives the current its starting rate ε/L.
wrong: The current is zero, so the resistors have no voltage drop. Kirchhoff's loop rule then puts the whole emf across the inductor: the current starts rising at the rate ε/L. Voltage across an inductor depends on dI/dt, not on I.
:::

## Inductance of a long solenoid {lvl=2 id=s-solenoid label="Class 12"}

Take a long solenoid: length $l$, cross-section area $A$, $N$ turns, so $n = N/l$ turns per metre. A current $I$ gives (Ampère's law) a uniform field inside:
$$B = \mu_0 nI.$$

Flux through one turn: $\Phi = BA = \mu_0nIA$. All $N = nl$ turns see the same flux, so
$$N\Phi = (nl)(\mu_0nIA) = \mu_0n^2AlI.$$

:::law caption="Self-inductance of a long solenoid (NCERT §6.7). Ends neglected. With a core of relative permeability μr filling it, multiply by μr."
$$L = \mu_0 n^2 A l = \frac{\mu_0 N^2 A}{l},\qquad L = \mu_r\mu_0n^2Al\ \text{(with a core)}$$
:::

Notice the $N^2$. Doubling the turns doubles the field **and** doubles the number of turns that catch it. Also $L\propto Al$, the volume: inductance is about how much space is filled with field.

:::worked title="A typical coil"
A solenoid 10 cm long, radius 1 cm, with 1000 turns, air core.
$n = 10^4$ m⁻¹, $A = \pi(0.01)^2 = 3.14\times10^{-4}$ m², $l = 0.1$ m.
$$L = 4\pi\times10^{-7}\times10^8\times3.14\times10^{-4}\times0.1 = 3.9\times10^{-3}\ \text{H} \approx 4\ \text{mH}.$$
An iron core with $\mu_r$ of a few hundred raises this to around 1 H, which is why heavy chokes have iron cores. (Real iron is non-linear, so $L$ then depends somewhat on $I$.)
:::

:::qc
q: A solenoid is rewound with the same wire on the same former, but with twice as many turns over the same length. Its inductance becomes
options: ["2 times", "4 times", "Half", "Unchanged"]
answer: 1
right: Right. L = μ₀N²A/l. Twice the turns makes twice the field, and twice as many turns catch it, so 4 times.
wrong: L = μ₀N²A/l. Twice the turns doubles B, and doubles the number of turns that the flux links, so L goes up 4 times.
:::

## Mutual inductance {lvl=2 id=s-mutual label="Class 12"}

**A coil round a solenoid.** Wind $N_2$ turns of a second coil round the middle of a long solenoid (radius $r_1$, $n_1$ turns per metre). The outer coil may be any size or shape; it just has to go round the solenoid.

:::figure caption="A long solenoid (coil 1, current I₁) with a short coil of N₂ turns wound round it. The field μ₀n₁I₁ exists only inside the solenoid, so each turn of coil 2 catches flux μ₀n₁I₁πr₁², whatever its own size."
<svg viewBox="0 0 340 160" role="img" aria-label="Long solenoid with a secondary coil wound round its middle">
<rect class="obj" x="30" y="55" width="280" height="50" rx="6" fill="none"/>
<line class="faint" x1="50" y1="55" x2="50" y2="105"/><line class="faint" x1="70" y1="55" x2="70" y2="105"/><line class="faint" x1="90" y1="55" x2="90" y2="105"/><line class="faint" x1="110" y1="55" x2="110" y2="105"/><line class="faint" x1="230" y1="55" x2="230" y2="105"/><line class="faint" x1="250" y1="55" x2="250" y2="105"/><line class="faint" x1="270" y1="55" x2="270" y2="105"/><line class="faint" x1="290" y1="55" x2="290" y2="105"/>
<line class="ray" x1="45" y1="80" x2="300" y2="80"/><polyline class="ray" points="292,75 300,80 292,85"/>
<ellipse class="pen" cx="150" cy="80" rx="8" ry="40" fill="none"/>
<ellipse class="pen" cx="170" cy="80" rx="8" ry="40" fill="none"/>
<ellipse class="pen" cx="190" cy="80" rx="8" ry="40" fill="none"/>
<text x="40" y="45">coil 1: n₁ turns/m, radius r₁</text>
<text x="140" y="140">coil 2: N₂ turns</text>
<text class="k" x="256" y="124">B = μ₀n₁I₁</text>
</svg>
:::

The field of coil 1 is $\mu_0n_1I_1$ inside and (nearly) zero outside. So each turn of coil 2 catches only the flux inside the solenoid, $\mu_0n_1I_1\pi r_1^2$:
$$N_2\Phi_2 = \mu_0n_1N_2\pi r_1^2\,I_1,\qquad M = \mu_0n_1N_2\pi r_1^2.$$

**Two coaxial long solenoids (NCERT).** If coil 2 is itself a long solenoid of $n_2$ turns per metre over the same length $l$ (radius $r_2 > r_1$), then $N_2 = n_2l$ and
$$M_{21} = \mu_0n_1n_2\pi r_1^2l.$$

NCERT also computes it the other way. Put the current in the **outer** coil: its field $\mu_0n_2I_2$ fills the outer solenoid, but the inner coil's turns only catch the part inside radius $r_1$. Flux linkage of the inner coil $= (n_1l)(\mu_0n_2I_2)(\pi r_1^2)$, so
$$M_{12} = \mu_0n_1n_2\pi r_1^2l = M_{21}.$$

The two answers agree. Both use the **smaller** area. This is no coincidence; it is a general theorem.

:::law caption="Reciprocity. For any two circuits the mutual inductance is the same whichever one carries the current. So we write just M. (Proved by energy in the Olympiad section below.)"
$$M_{12} = M_{21} = M$$
:::

:::worked title="NCERT Example 6.8: two concentric coplanar coils"
A small coil (radius $r_1$) sits at the centre of a large one (radius $r_2 \gg r_1$), coaxial. A current $I_2$ in the large coil gives $B = \mu_0I_2/2r_2$ at its centre, nearly uniform over the small coil. So
$$\Phi_1 = \pi r_1^2\frac{\mu_0I_2}{2r_2},\qquad M = \frac{\mu_0\pi r_1^2}{2r_2}.$$
Computing the other way (current in the small coil, flux through the large one) would be hard: the small coil's field is a dipole field, and its flux through the big loop needs an integral. Reciprocity says the answer is the same, so we choose the easy way.
:::

:::qc
q: Coil A carrying 1 A puts a flux linkage of 2 mWb in coil B. If instead coil B carries 1 A, what flux linkage does it put in coil A?
options: ["2 mWb", "It depends on the number of turns of A", "It depends on which coil is bigger", "Cannot be found"]
answer: 0
right: Right. M = 2 mH whichever coil carries the current (reciprocity), so 1 A in B gives 2 mWb in A.
wrong: Reciprocity: M_AB = M_BA. Here M = 2 mWb / 1 A = 2 mH, so 1 A in B gives a flux linkage of 2 mWb in A, whatever the turns or sizes.
:::

## Energy stored in an inductor {lvl=2 id=s-energy label="Class 12"}

**Why there is energy at all.** While the current rises, the coil's back emf opposes it. The source must push charge through against that emf, and that takes work. When the current falls, the emf reverses and pushes charge forward: the coil gives the work back. So the coil holds energy while it carries a current.

**How much.** At a moment when the current is $I$ and rising at $dI/dt$, the source pushes against an emf $L\,dI/dt$. The power it delivers to the coil is
$$P = I\cdot L\frac{dI}{dt}.$$

In a time $dt$ the work is $LI\,dI$. Building the current from 0 to $I$:
$$W = \int_0^I LI'\,dI' = \tfrac12LI^2.$$

This is the twin of $\tfrac12mv^2$ (and of $\tfrac12CV^2$ for a capacitor).

:::law caption="Energy stored in an inductor (NCERT §6.7). It depends only on the present current, not on how the current got there."
$$U_B = \tfrac12LI^2$$
:::

**Where the energy lives.** For a long solenoid, $L = \mu_0n^2Al$ and $I = B/\mu_0n$ (NCERT Example 6.9):
$$U_B = \tfrac12\mu_0n^2Al\cdot\frac{B^2}{\mu_0^2n^2} = \frac{B^2}{2\mu_0}\times(Al).$$

$Al$ is the volume of the solenoid, which is where the field is. So the energy per unit volume of field is
$$u_B = \frac{B^2}{2\mu_0}.$$

Compare a capacitor: $u_E = \tfrac12\varepsilon_0E^2$. In both cases the energy sits in the field, spread through space, with density proportional to the field squared. This result is general, not just for solenoids.

:::worked title="How much energy does a field hold?"
A field of 1 T (a strong lab magnet): $u_B = 1/(2\times4\pi\times10^{-7}) = 4.0\times10^5$ J/m³, about 0.4 MJ in a cubic metre. An electric field of $3\times10^6$ V/m (about where air breaks down [Unverified]) holds only $\tfrac12\times8.85\times10^{-12}\times9\times10^{12} \approx 40$ J/m³. That is why motors and transformers are magnetic, not electric, machines.
:::

:::qc
q: The current in an inductor is doubled. The stored energy becomes
options: ["2 times", "4 times", "Half", "Unchanged"]
answer: 1
right: Right. U = ½LI², so doubling I quadruples U. Equivalently B doubles, so B²/2μ₀ quadruples everywhere.
wrong: U = ½LI², so 2I gives 4U. In field terms, B doubles everywhere, so the energy density B²/2μ₀ is four times larger.
:::

## The L–R circuit: growth and decay {lvl=3 id=s-lr label="JEE"}

**Growth.** A battery (emf $\varepsilon$), a resistor $R$ and an inductor $L$ are in series; the switch closes at $t = 0$. Go round the loop with Kirchhoff's rule, counting the inductor as a drop $L\,dI/dt$ in the direction of the current:
$$\varepsilon - IR - L\frac{dI}{dt} = 0.$$

Read it as a story. At $t = 0$, $I = 0$, so all of $\varepsilon$ is across the inductor and the current starts rising at $\varepsilon/L$. As $I$ grows, $IR$ takes more of the emf, less is left for $L\,dI/dt$, and the rise slows. It stops when $IR = \varepsilon$: the final current is $I_0 = \varepsilon/R$, the same as with no inductor.

Solve it: put $x = \varepsilon/R - I$, so $dx/dt = -dI/dt$ and the equation becomes $dx/dt = -(R/L)x$. The solution is an exponential:

:::law caption="Growth of current in an L–R circuit. τ = L/R is the time constant (henry/ohm = second)."
$$I = \frac{\varepsilon}{R}\left(1 - e^{-t/\tau}\right),\qquad \tau = \frac{L}{R}$$
:::

**Decay.** If the battery is replaced by a wire (the current $I_0$ now flows round $L$ and $R$ alone), the loop rule gives $-IR - L\,dI/dt = 0$, so
$$I = I_0\,e^{-t/\tau}.$$

The inductor keeps the current going, now pushing it (its emf points along the current), until the resistor has turned all the stored energy into heat.

:::figure caption="Current in an L–R circuit. Left: growth after switching on; the tangent at t = 0 reaches the final value ε/R at exactly t = τ, and the current is 63% of the way there at t = τ. Right: decay; 37% is left after one τ. Five time constants are enough for either to be complete (within 1%)."
<svg viewBox="0 0 340 180" role="img" aria-label="Exponential growth and decay of current in an LR circuit">
<line class="ln" x1="30" y1="150" x2="168" y2="150"/><polyline class="ln" points="162,146 168,150 162,154"/>
<line class="ln" x1="30" y1="150" x2="30" y2="22"/><polyline class="ln" points="26,28 30,22 34,28"/>
<line class="faint" x1="30" y1="40" x2="162" y2="40"/>
<line class="faint" x1="30" y1="150" x2="56" y2="40"/>
<line class="faint" x1="56" y1="150" x2="56" y2="80.5"/>
<line class="faint" x1="30" y1="80.5" x2="56" y2="80.5"/>
<polyline class="ray" points="30,150 43,106.7 56,80.5 69,64.5 82,54.9 108,45.5 134,42 160,40.7"/>
<text class="k" x="52" y="166">τ</text><text class="k" x="160" y="168">t</text><text class="k" x="16" y="28">I</text>
<text x="100" y="34">ε/R</text><text x="0" y="84">0.63</text>
<line class="ln" x1="190" y1="150" x2="328" y2="150"/><polyline class="ln" points="322,146 328,150 322,154"/>
<line class="ln" x1="190" y1="150" x2="190" y2="22"/><polyline class="ln" points="186,28 190,22 194,28"/>
<line class="faint" x1="216" y1="150" x2="216" y2="109.5"/>
<line class="faint" x1="190" y1="109.5" x2="216" y2="109.5"/>
<polyline class="ray" points="190,40 203,83.3 216,109.5 229,125.5 242,135.1 268,144.5 294,148 320,149.3"/>
<text class="k" x="212" y="166">τ</text><text class="k" x="320" y="168">t</text><text class="k" x="176" y="28">I</text>
<text x="196" y="36">I₀</text><text x="222" y="106">0.37 I₀</text>
</svg>
:::

**Why $\tau = L/R$?** A big $L$ (heavy trolley) means slow change; a big $R$ means a small final current, which is reached sooner. The initial slope is $\varepsilon/L$ and the target is $\varepsilon/R$, so "target ÷ initial slope" $= L/R$: that is where the tangent meets the final value.

**Energy balance.** Multiply the loop equation by $I$:
$$\varepsilon I = I^2R + \frac{d}{dt}\left(\tfrac12LI^2\right).$$

The battery's power goes partly into heat and partly into the field. Over the whole growth, the field ends with $\tfrac12LI_0^2$, but the battery delivers more than that, since the resistor heats all the time. During decay, the heat produced in $R$ is exactly the stored $\tfrac12LI_0^2$.

:::worked title="A relay coil"
$L = 0.20$ H, $R = 40\ \Omega$, $\varepsilon = 12$ V. Then $\tau = 0.20/40 = 5$ ms, $I_0 = 0.30$ A. At $t = 10$ ms $= 2\tau$: $I = 0.30(1 - e^{-2}) = 0.30\times0.865 = 0.26$ A. Final stored energy $\tfrac12\times0.20\times0.09 = 9$ mJ.
:::

:::qc
q: In an L–R circuit with τ = 2 s, the current is switched on at t = 0. Roughly what fraction of the final current flows at t = 2 s?
options: ["37%", "50%", "63%", "100%"]
answer: 2
right: Right. At t = τ, I = I₀(1 − 1/e) ≈ 0.63 I₀.
wrong: At t = τ the current is I₀(1 − e⁻¹) ≈ 0.63 I₀. 37% is what is left during decay after one τ.
:::

## Opening an inductive circuit: the spark {lvl=3 id=s-spark label="JEE"}

Switching **on** is gentle: the inductor slows the rise. Switching **off** is violent.

When you open a switch, you try to force the current to zero in a very short time. The inductor refuses: its current cannot jump. With $L = 1$ H, 1 A and a switch opening in about 1 μs, the emf would be of order $L\,\Delta I/\Delta t \sim 10^6$ V. Long before that, the voltage across the opening contacts becomes large enough to break down the air, a spark jumps, and the current flows on through the spark while the stored $\tfrac12LI^2$ is dumped there as heat and light. [Inference: the exact peak voltage depends on the switch speed and on the stray capacitance across the contacts, which this simple model ignores.]

This is used and fought:
- **Used**: a car's ignition coil and old-style spark generators interrupt a current in an inductor to get thousands of volts from a 12 V battery. [Unverified as a description of modern ignition systems, which are electronically switched.]
- **Fought**: a relay coil switched by a transistor would destroy the transistor with this spike. A diode across the coil (a "flyback" diode) gives the current a gentle path round the coil, so it decays as an ordinary L–R decay.

A resistor across the coil does the same. If a coil carrying $I_0$ suddenly finds its only path through a resistor $R_2$, the current in $R_2$ is $I_0$ at that instant, so the voltage across it is $I_0R_2$, which can be far larger than the original battery emf if $R_2$ is large.

:::qc
q: A coil carries 2 A from a 6 V battery. The battery is disconnected and the coil's only path is a 300 Ω resistor across it. Just after the switch opens, the voltage across the resistor is about
options: ["6 V", "0 V", "600 V", "3 V"]
answer: 2
right: Right. The coil's current cannot jump, so 2 A flows through 300 Ω: 600 V, a hundred times the battery voltage. It then decays with τ = L/300.
wrong: The coil keeps its 2 A for an instant, and the only path is the 300 Ω resistor, so the voltage is 2 × 300 = 600 V. This is the origin of the switch-off spike.
:::

## Combinations of inductors {lvl=3 id=s-combo label="JEE"}

**No coupling.** Inductors far apart (or shielded) combine like resistors, because $V = L\,dI/dt$ has the same form as $V = IR$ with $dI/dt$ in place of $I$.
- Series: the same $dI/dt$ in each, voltages add: $L = L_1 + L_2$.
- Parallel: the same voltage, rates add: $\dfrac1L = \dfrac1{L_1} + \dfrac1{L_2}$.

**With coupling, in series.** Now each coil also feels the other's changing current. With the same current $I$ through both, the voltage across coil 1 is $L_1\dot I \pm M\dot I$, and across coil 2 $L_2\dot I \pm M\dot I$. The sign is + when the two coils' fluxes point the same way (aiding) and − when they oppose. Total:
$$L = L_1 + L_2 \pm 2M.$$

Measuring both ways gives $L_+ - L_- = 4M$, a neat way to find $M$ in the lab.

**With coupling, in parallel (aiding).** Same voltage $V$ across both:
$$V = L_1\dot I_1 + M\dot I_2 = M\dot I_1 + L_2\dot I_2.$$
Solve for $\dot I_1$ and $\dot I_2$, add them, and divide $V$ by the total rate:
$$L = \frac{L_1L_2 - M^2}{L_1 + L_2 - 2M}\qquad(\text{replace } M \to -M \text{ if opposing}).$$

With $M = 0$ this gives back $L_1L_2/(L_1 + L_2)$.

**Coupling coefficient.** Define
$$k = \frac{M}{\sqrt{L_1L_2}}.$$

For the two coaxial solenoids above, $L_1 = \mu_0n_1^2\pi r_1^2l$, $L_2 = \mu_0n_2^2\pi r_2^2l$ and $M = \mu_0n_1n_2\pi r_1^2l$, so $k = r_1/r_2$. If the coils are wound right on top of each other ($r_1 = r_2$), $k = 1$: every line of flux links both. Some flux of the outer coil passing outside the inner one makes $k < 1$. It is always true that $0 \le k \le 1$ (proved from energy in the reciprocity section below). Transformers aim for $k$ close to 1; loosely coupled radio coils may have $k$ of a few per cent.

:::qc
q: Two coils of 4 mH and 9 mH are joined in series. Joined one way the total is 19 mH. What is the total when one coil's connections are reversed?
options: ["13 mH", "7 mH", "1 mH", "19 mH"]
answer: 1
right: Right. 19 = 4 + 9 + 2M gives M = 3 mH, so reversed: 4 + 9 − 6 = 7 mH. Here k = 3/√36 = 0.5.
wrong: L = L₁ + L₂ ± 2M. From 19 = 13 + 2M, M = 3 mH, so the other way gives 13 − 6 = 7 mH.
:::

## Toroid and coaxial cable {lvl=3 id=s-toroid label="JEE"}

When $B$ is not uniform, integrate the flux.

**Toroid of rectangular cross-section.** $N$ turns, inner radius $a$, outer radius $b$, height $h$. Ampère's law gives $B = \mu_0NI/2\pi r$ inside the core. A strip of the cross-section at radius $r$, width $dr$, has area $h\,dr$:
$$\Phi = \int_a^b\frac{\mu_0NI}{2\pi r}h\,dr = \frac{\mu_0NIh}{2\pi}\ln\frac ba,\qquad L = \frac{N\Phi}{I} = \frac{\mu_0N^2h}{2\pi}\ln\frac ba.$$

For a thin ring ($b - a \ll a$), $\ln(b/a) \approx (b-a)/a$, and this becomes $\mu_0N^2A/2\pi R$, the solenoid formula with length $2\pi R$.

**Coaxial cable.** An inner conducting tube of radius $a$ carries $I$ along; an outer tube of radius $b$ carries it back. Between them $B = \mu_0I/2\pi r$; outside, $B = 0$. Count the flux through a rectangle of length $l$ stretching from $r = a$ to $r = b$ (the "loop" made by the go and return paths):
$$\Phi = \int_a^b\frac{\mu_0I}{2\pi r}l\,dr \quad\Rightarrow\quad \frac Ll = \frac{\mu_0}{2\pi}\ln\frac ba.$$

If the inner conductor is a **solid** wire with uniform current, there is field inside the wire too ($B = \mu_0Ir/2\pi a^2$). Flux linkage is awkward to define there (each bit of current encircles a different part of the flux), so use energy instead: $\tfrac12LI^2 = \int\frac{B^2}{2\mu_0}dV$. The inside of the wire adds
$$\int_0^a\frac{1}{2\mu_0}\left(\frac{\mu_0Ir}{2\pi a^2}\right)^2 2\pi rl\,dr = \frac{\mu_0I^2l}{16\pi},$$
which is $\tfrac12(\mu_0l/8\pi)I^2$. So
$$\frac Ll = \frac{\mu_0}{2\pi}\left(\ln\frac ba + \frac14\right).$$

:::qc
q: The inductance per unit length of a thin-walled coaxial cable depends on
options: ["b − a", "b/a", "a only", "The current"]
answer: 1
right: Right. L/l = (μ₀/2π) ln(b/a). Scaling the whole cable up keeps L/l the same.
wrong: L/l = (μ₀/2π) ln(b/a): only the ratio of the radii matters, because B falls as 1/r.
:::

## L–C oscillation: a preview {lvl=3 id=s-lc label="JEE"}

Connect a charged capacitor across an inductor (no resistance). The capacitor starts to drive a current, but the inductor makes it build up slowly. By the time the capacitor is empty, the current is at its largest, and the inductor will not let it stop: it carries on and charges the capacitor the other way. Then the whole thing runs back.

The loop rule, with $I = dq/dt$:
$$\frac qC + L\frac{d^2q}{dt^2} = 0,$$
which is the spring equation $m\ddot x + kx = 0$ with $m\to L$ and $k\to1/C$. So the charge oscillates with
$$\omega = \frac{1}{\sqrt{LC}},$$
and the energy sloshes between $\tfrac12q^2/C$ (electric, like spring energy) and $\tfrac12LI^2$ (magnetic, like kinetic energy). With resistance the oscillation dies away. The full story is in the lcr-circuit-and-resonance leaf.

## Reciprocity and k ≤ 1, from energy {lvl=4 id=s-recip label="Olympiad"}

Take two coils. Build up their currents to $I_1$ and $I_2$ in two different orders and count the work done against the induced emfs.

**Order A: $I_1$ first.** Raise $I_1$ from 0 with $I_2 = 0$: work $\tfrac12L_1I_1^2$. Now raise $I_2$ while holding $I_1$ fixed. Coil 2 costs $\tfrac12L_2I_2^2$. But coil 1 now sees an emf $-M_{12}\,dI_2/dt$ (flux in 1 due to 2), and to keep $I_1$ fixed its source must push against it, at power $I_1M_{12}\,dI_2/dt$. That adds $M_{12}I_1I_2$. Total:
$$U_A = \tfrac12L_1I_1^2 + \tfrac12L_2I_2^2 + M_{12}I_1I_2.$$

**Order B: $I_2$ first** gives the same with $M_{21}$.

The final state is identical (same currents, same field everywhere), and the stored energy is $\int B^2/2\mu_0\,dV$, which depends only on the field. So $U_A = U_B$, and
$$M_{12} = M_{21}.$$

**Why $k\le1$.** The energy of two coils is
$$U = \tfrac12L_1I_1^2 + MI_1I_2 + \tfrac12L_2I_2^2.$$

It is the integral of $B^2/2\mu_0$, so it is never negative, for **any** choice of $I_1$, $I_2$ (including opposite signs). Put $x = I_1/I_2$: $\tfrac12L_1x^2 + Mx + \tfrac12L_2 \ge 0$ for all $x$. A quadratic that never goes negative has a discriminant $\le 0$:
$$M^2 \le L_1L_2,\qquad k = \frac{|M|}{\sqrt{L_1L_2}}\le 1.$$

Equality ($k = 1$) means some combination of currents gives $U = 0$, that is, zero field everywhere: the two coils' fields can cancel exactly. That needs every flux line of one coil to link every turn of the other.

**A consequence.** For perfect coupling, $M^2 = L_1L_2$; for two coils on the same core $L\propto N^2$, so $M = \sqrt{L_1L_2}$ and $L_1/L_2 = (N_1/N_2)^2$. This is the starting point of the ideal transformer (see the alternating-current leaf).

:::qc
q: Two coils have L₁ = 2 mH and L₂ = 8 mH. Which mutual inductance is impossible?
options: ["1 mH", "3 mH", "4 mH", "5 mH"]
answer: 3
right: Right. M ≤ √(L₁L₂) = √16 = 4 mH, so 5 mH would allow a current pattern with negative field energy.
wrong: |M| ≤ √(L₁L₂) = √(2 × 8) = 4 mH. Anything larger would make ½L₁I₁² + MI₁I₂ + ½L₂I₂² negative for some currents, impossible for ∫B²/2μ₀ dV.
:::

## Superconducting ring: trapped flux {lvl=4 id=s-super label="Olympiad"}

A closed ring of zero resistance and self-inductance $L$ sits in an external field that gives a flux $\Phi_{\text{ext}}$ through it. The loop rule has no $IR$ term:
$$-\frac{d\Phi_{\text{ext}}}{dt} - L\frac{dI}{dt} = 0\quad\Rightarrow\quad \Phi_{\text{ext}} + LI = \text{constant}.$$

The **total** flux through the ring cannot change. Switch on an external field, and the ring sets up exactly the current needed to cancel the new flux, $I = -\Delta\Phi_{\text{ext}}/L$. Cool a ring below its transition temperature in a field and then remove the field: the current that appears keeps the old flux trapped, and it goes on flowing with no battery. This is Lenz's law taken to its limit, and the principle of persistent-current magnets. (Real superconductors also expel field from their bulk, the Meissner effect, which this circuit model does not describe.)

:::qc
q: A superconducting ring with zero current is placed in zero field. A field is then switched on, giving 3 mWb through the ring if it carried no current. Its inductance is 1 μH. What current flows?
options: ["0", "3 kA", "3 A", "Increasing without limit"]
answer: 1
right: Right. Total flux stays zero, so LI = −3 × 10⁻³ Wb, I = 3 × 10⁻³ / 10⁻⁶ = 3000 A, in the sense that opposes the applied field.
wrong: The total flux through a zero-resistance ring is fixed (here zero), so LI = −Φ_ext and |I| = 3 × 10⁻³ / 10⁻⁶ = 3 kA, opposing the field.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Flux linkage is proportional to current: $N\Phi = LI$ (own current), $N_2\Phi_2 = MI_1$ (other coil). Then $\varepsilon = -L\,dI/dt$, $\varepsilon_2 = -M\,dI_1/dt$. $L$ and $M$ depend only on geometry and core material. {lvl=2}
2. An inductor is electrical inertia: no effect on a steady current, opposes changes, and its current cannot jump. {lvl=2}
3. Long solenoid $L = \mu_r\mu_0n^2Al$; coaxial solenoids $M = \mu_0n_1n_2\pi r_1^2l$ (inner area); reciprocity $M_{12} = M_{21}$. {lvl=2}
4. Stored energy $\tfrac12LI^2$, from work against the back emf; it lives in the field with density $B^2/2\mu_0$ (compare $\tfrac12\varepsilon_0E^2$). {lvl=2}
5. L–R circuit: $I = \frac{\varepsilon}{R}(1 - e^{-t/\tau})$, decay $I_0e^{-t/\tau}$, $\tau = L/R$. Opening an inductive circuit gives a large voltage spike. Series $L_1 + L_2 \pm 2M$; toroid $\frac{\mu_0N^2h}{2\pi}\ln\frac ba$; coax $\frac{\mu_0}{2\pi}\ln\frac ba$ per metre; LC circuit oscillates at $1/\sqrt{LC}$. {lvl=3}
6. Energy $\tfrac12L_1I_1^2 + MI_1I_2 + \tfrac12L_2I_2^2 \ge 0$ proves reciprocity and $|M|\le\sqrt{L_1L_2}$. Field energy gives $L$ when flux linkage is awkward (solid wire adds $\mu_0/8\pi$ per metre). A zero-resistance ring keeps its total flux fixed. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- $L$ does not depend on $I$ or $dI/dt$ (for an air core). "The current doubled, so $L$ doubled" is wrong. {lvl=2}
- In the solenoid formula, $N^2$ and not $N$: twice the turns, four times the inductance. With $n$ per metre, $L = \mu_0n^2Al$ (the volume $Al$, not the area). {lvl=2}
- For coaxial solenoids use the **smaller** cross-section in $M$, whichever coil carries the current. {lvl=2}
- Voltage across an inductor depends on $dI/dt$, not on $I$: it can be largest when $I = 0$ (just after switching on) and zero when $I$ is largest (steady state). {lvl=2}
- At $t = 0^+$ an inductor acts as an open circuit (current still zero); at $t\to\infty$ as a plain wire. A capacitor is the other way round. {lvl=3}
- $\tau = L/R$ uses the resistance seen by the inductor, which can differ between switching on and switching off (a different path). Find the Thevenin resistance across $L$ for each phase. {lvl=3}
- During growth the battery delivers more energy than ends up in the field; the rest is heat. Do not equate battery work with $\tfrac12LI_0^2$. {lvl=3}
- Coupled coils in series: decide aiding or opposing from the winding sense, then $\pm2M$, not $\pm M$. {lvl=3}
- For a thick wire, do not try to define flux linkage inside the conductor; use $\tfrac12LI^2 = \int B^2/2\mu_0\,dV$. {lvl=4}
:::
