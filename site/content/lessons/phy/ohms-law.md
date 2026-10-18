---
title: Ohm's law
summary: Why current through a metal wire is proportional to the potential difference across it, what resistance means, the rheostat, why the law fails for bulbs and diodes, EMF and internal resistance, real meters and the potential divider.
ncert: ["Class 10 Science · Ch 11 Electricity (§11.4)"]
up_to: Olympiad
builds_on: [Electric current and potential difference, Proportionality and straight-line graphs]
notes_prompt: Explain, using drifting electrons and collisions, why doubling the voltage across a metal wire doubles the current but doubling it across a bulb does not.
margin:
  - kind: history
    title: History
    text: Georg Simon Ohm published the law in 1827 in "Die galvanische Kette, mathematisch bearbeitet". He used a thermocouple as a steady source, because the batteries of his day drifted too much. His work was received coldly at first; the unit of resistance now bears his name.
  - kind: tip
    title: Board favourite
    text: "State the condition every time: V is proportional to I only if the temperature (and other physical conditions) of the conductor stay the same."
  - kind: olympiad
    title: Olympiad link
    text: In 1900 Paul Drude explained Ohm's law with electrons that accelerate in the field and are stopped by collisions. The law is linear because the random speed of the electrons is enormously larger than their drift speed.
books:
  - { title: "NCERT Science Class X", ref: "Ch 11 Electricity, §11.4 Ohm's law" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 32 Electric Current in Conductors" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.5 Electric current" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "chapter Current and Resistance" }
cards:
  - { front: "State Ohm's law.", back: "The current through a metallic conductor is proportional to the potential difference across its ends, provided its temperature stays the same: $V = IR$." }
  - { front: "What is 1 ohm?", back: "The resistance of a conductor that carries 1 A when the potential difference across it is 1 V: $1\\ \\Omega = 1\\ \\text{V/A}$." }
  - { front: "Drude result for resistivity?", back: "$\\rho = \\dfrac{m}{ne^2\\tau}$, with $n$ the free-electron density and $\\tau$ the mean time between collisions; for copper $\\tau \\approx 2.5\\times10^{-14}$ s." }
  - { front: "Terminal voltage of a cell (EMF $E$, internal resistance $r$) delivering current $I$?", back: "$V = E - Ir$; while being charged, $V = E + Ir$." }
  - { front: "Which way to connect meters when measuring a small resistance?", back: "Voltmeter directly across the resistor, ammeter outside it. The measured value is $RR_V/(R+R_V)$, slightly low." }
  - { front: "Static vs dynamic resistance?", back: "Static $R = V/I$ at a point; dynamic $r = dV/dI$, the inverse slope of the I–V curve there. They are equal only for an ohmic conductor." }
core:
  idea: 'For a metallic conductor at constant temperature the current is proportional to the potential difference across it, $V = IR$, with the resistance $R$ constant. The linearity arises because the drift velocity is proportional to the field, $v_d = eE\tau/m$.'
  formulas:
    - tex: 'V = IR'
      label: 'Ohms law'
    - tex: 'v_d = \frac{eE}{m}\,\tau'
      label: 'Drift velocity (Drude)'
    - tex: '\rho = \frac{m}{ne^2\tau}'
      label: 'Resistivity'
  conditions:
    - 'Constant temperature (and other physical conditions) of the conductor'
    - 'Metallic conductor: the relaxation time τ does not depend on the field'
    - 'Ideal source and ideal meters when V = IR is applied to a whole circuit'
  sign: 'Ohms law is a property of certain materials, not a law of nature: filaments, diodes and thermistors are non-ohmic. On the NCERT graph V is vertical, so slope = R; on an I–V graph the slope is 1/R.'
outcomes:
  - 'State Ohms law with its condition and calculate V, I or R from it'
  - 'Use a rheostat and V–I graphs to control current and find R'
  - 'Explain Ohms law from drift velocity and collisions, and recognise non-ohmic devices'
  - 'Apply V = E − Ir to find EMF and internal resistance, and allow for meter loading error'
  - 'Solve potential-divider and load-line problems'
---

:::hook
q: A 230 V, 60 W filament bulb draws about 0.26 A once it is glowing. In the first instant after you switch it on, while the filament is still cold, the current is
options: ["about the same, 0.26 A", "much larger, a few amperes", "much smaller, almost zero"]
answer: 1
right: Right. Cold tungsten has roughly a tenth of the resistance of white-hot tungsten, so the switch-on current is several times the running current. That surge is why bulbs usually fail at the moment they are switched on.
wrong: The supply voltage is the same, but a cold filament has far less resistance than a hot one. So the current at switch-on is several times larger, and it falls as the filament heats up.
:::

## What Ohm found {lvl=1 id=s-law label="Class 10"}

Connect a length of nichrome wire to one cell, then two, three and four cells in series. Each time, read the current $I$ with an ammeter in series and the potential difference $V$ across the wire with a voltmeter connected across it. A rheostat in the circuit lets you adjust the current between readings.

:::figure caption="The Ohm's law circuit: cells, key K, ammeter A and rheostat in series with the wire R; voltmeter V across R."
<svg viewBox="0 0 360 225" role="img" aria-label="Circuit with cells, key, ammeter, rheostat and resistor in series, and a voltmeter across the resistor">
<line class="pen" x1="30" y1="40" x2="62" y2="40"/><line class="pen" x1="78" y1="40" x2="110" y2="40"/>
<line class="pen" x1="62" y1="24" x2="62" y2="56" style="stroke-width:2"/><line class="pen" x1="72" y1="32" x2="72" y2="48" style="stroke-width:4"/>
<line class="pen" x1="72" y1="40" x2="78" y2="40"/>
<text x="56" y="18">cells</text>
<circle class="obj" cx="112" cy="40" r="3"/><circle class="obj" cx="132" cy="40" r="3"/><line class="pen" x1="112" y1="40" x2="130" y2="30"/><line class="pen" x1="132" y1="40" x2="158" y2="40"/>
<text x="116" y="24">K</text>
<circle cx="170" cy="40" r="12" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><text class="k" x="165" y="45">A</text>
<line class="pen" x1="182" y1="40" x2="230" y2="40"/>
<rect x="230" y="33" width="50" height="14" style="fill:none;stroke:var(--ink);stroke-width:1.4"/>
<line class="pen" x1="226" y1="58" x2="284" y2="22"/><polygon points="284,22 274,24 279,31" style="fill:var(--ink)"/>
<text x="228" y="74">rheostat</text>
<line class="pen" x1="280" y1="40" x2="330" y2="40"/>
<line class="pen" x1="330" y1="40" x2="330" y2="160"/><line class="pen" x1="30" y1="40" x2="30" y2="160"/>
<line class="pen" x1="330" y1="160" x2="210" y2="160"/><line class="pen" x1="150" y1="160" x2="30" y2="160"/>
<rect x="150" y="153" width="60" height="14" style="fill:color-mix(in srgb, var(--phy) 25%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<text class="k" x="174" y="148">R</text>
<line class="faint" x1="140" y1="160" x2="140" y2="200"/><line class="faint" x1="140" y1="200" x2="168" y2="200"/>
<line class="faint" x1="220" y1="160" x2="220" y2="200"/><line class="faint" x1="220" y1="200" x2="192" y2="200"/>
<circle cx="180" cy="200" r="12" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><text class="k" x="175" y="205">V</text>
</svg>
:::

Typical readings for one wire:

| Cells | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $I$ (A) | 0.30 | 0.60 | 0.90 | 1.20 |
| $V$ (V) | 1.5 | 3.0 | 4.5 | 6.0 |
| $V/I$ (Ω) | 5.0 | 5.0 | 5.0 | 5.0 |

Doubling $V$ doubles $I$; the ratio $V/I$ stays fixed. Plotted with $I$ along the horizontal axis and $V$ up the vertical, the points lie on a straight line through the origin. This is **Ohm's law**:

:::law caption="Valid when the temperature (and other physical conditions) of the conductor do not change."
$$V \propto I \quad\Longrightarrow\quad V = IR$$
:::

Why "at constant temperature"? Because the constant $R$ belongs to the wire in a given state. Heat the wire and $R$ changes, so the straight line bends. You will see why in the next sections.

## Resistance and the ohm {lvl=1 id=s-resistance label="Class 10"}

The constant $R = V/I$ is the **resistance** of the conductor: how many volts it takes to push one ampere through it. Its SI unit is the **ohm** (Ω):

$$1\ \Omega = \frac{1\ \text{V}}{1\ \text{A}}.$$

A conductor has a resistance of 1 Ω if a potential difference of 1 V across it drives a current of 1 A.

Turned round, $I = V/R$: for a fixed voltage, **current is inversely proportional to resistance**. Double the resistance and the current halves. A heater coil of 100 Ω on the 220 V mains draws 2.2 A; a bulb filament of 1200 Ω on the same mains draws only 0.18 A.

:::figure caption="V–I graphs (I horizontal, V vertical, as in NCERT). The slope of each line is its resistance: the steeper line is the larger resistance."
<svg viewBox="0 0 300 200" role="img" aria-label="Two straight lines through the origin on a V against I graph, the steeper one for 5 ohms and the shallower one for 2 ohms">
<line class="axis" x1="40" y1="170" x2="280" y2="170"/><line class="axis" x1="40" y1="170" x2="40" y2="15"/>
<text x="268" y="188">I</text><text x="22" y="24">V</text>
<line class="ray" x1="40" y1="170" x2="160" y2="20"/><text x="150" y="44">R = 5 Ω</text>
<line class="pen" x1="40" y1="170" x2="270" y2="54" style="stroke:var(--chem)"/><text x="214" y="72">R = 2 Ω</text>
<line class="faint" x1="120" y1="170" x2="120" y2="70" style="stroke-dasharray:4 3"/><text x="104" y="186">0.4 A</text>
<text x="126" y="66">2.0 V</text><text x="126" y="124">0.8 V</text>
</svg>
:::

:::qc
q: A resistor carries 0.5 A when the voltage across it is 3 V. What current flows when the voltage is raised to 7.5 V, if its temperature does not change?
options: ["1.25 A", "0.2 A", "2.5 A", "1.5 A"]
answer: 0
right: Right. $R = 3/0.5 = 6\ \Omega$, so $I = 7.5/6 = 1.25$ A. Equivalently, the voltage went up 2.5 times, so the current does too.
wrong: First find $R = V/I = 6\ \Omega$; then $I = 7.5/6$.
:::

## Controlling current: the rheostat {lvl=1 id=s-rheostat label="Class 10"}

Since $I = V/R$, you can change the current from a fixed supply by changing the resistance in the circuit. A **rheostat** is a variable resistor: a long coil of resistance wire with a sliding contact. Moving the slider changes how much of the coil the current passes through, and so changes the circuit's total resistance.

In Ohm's experiment the rheostat lets you take many $(I, V)$ readings with a single battery, instead of changing the number of cells. In daily life the same idea (now usually in electronic form) dims lights, sets fan speeds and adjusts volume.

:::qc
q: A 6 V battery is in series with a 4 Ω lamp and a rheostat. What rheostat setting makes the current 0.5 A? (Treat the lamp's resistance as fixed.)
options: ["8 Ω", "12 Ω", "3 Ω", "2 Ω"]
answer: 0
right: Right. The total resistance must be $6/0.5 = 12\ \Omega$; the lamp supplies 4 Ω, so the rheostat must supply 8 Ω.
wrong: Find the total resistance needed, $V/I = 12\ \Omega$, then subtract the lamp's 4 Ω.
:::

## Why the current is proportional to the voltage {lvl=2 id=s-why label="Class 12"}

Ohm's law is not a law of nature like conservation of charge. It is a property of certain materials, and it has a reason.

A metal is a lattice of positive ions with a sea of free electrons darting about at high speed in random directions. With no field, the random velocities average to zero: no current. Apply a field $E$ along the wire and each electron accelerates at $a = eE/m$ opposite to the field, but only until its next collision with the lattice (with a vibrating ion or an impurity), which scrambles its direction. Then it starts accelerating afresh.

:::figure caption="An electron's zigzag path. Between collisions the field curves each segment slightly to the left (opposite to E). The net result is a slow drift superimposed on fast random motion."
<svg viewBox="0 0 360 150" role="img" aria-label="Zigzag path of an electron among lattice ions, drifting opposite to the electric field">
<g style="fill:var(--muted)">
<circle cx="40" cy="30" r="4"/><circle cx="100" cy="30" r="4"/><circle cx="160" cy="30" r="4"/><circle cx="220" cy="30" r="4"/><circle cx="280" cy="30" r="4"/><circle cx="340" cy="30" r="4"/>
<circle cx="40" cy="80" r="4"/><circle cx="100" cy="80" r="4"/><circle cx="160" cy="80" r="4"/><circle cx="220" cy="80" r="4"/><circle cx="280" cy="80" r="4"/><circle cx="340" cy="80" r="4"/>
<circle cx="40" cy="130" r="4"/><circle cx="100" cy="130" r="4"/><circle cx="160" cy="130" r="4"/><circle cx="220" cy="130" r="4"/><circle cx="280" cy="130" r="4"/><circle cx="340" cy="130" r="4"/>
</g>
<polyline class="ray" points="300,100 250,55 262,110 196,62 210,118 140,48 118,104 70,60" style="fill:none"/>
<circle class="obj" cx="300" cy="100" r="4"/><text x="306" y="112">start</text><text x="56" y="56">end</text>
<line class="pen" x1="250" y1="12" x2="340" y2="12"/><polygon points="340,12 331,8 331,16" style="fill:var(--ink)"/><text class="k" x="225" y="16">E</text>
<line class="pen" x1="110" y1="12" x2="30" y2="12" style="stroke:var(--phy)"/><polygon points="30,12 39,8 39,16" style="fill:var(--phy)"/><text x="116" y="16">drift</text>
</svg>
:::

If the average time between collisions is $\tau$ (the **relaxation time**), an electron gains on average a velocity $eE\tau/m$ against the field before it is scrambled. That average is the **drift velocity**:

$$v_d = \frac{eE}{m}\,\tau.$$

With $n$ free electrons per cubic metre, the current density (current per unit area) is $J = nev_d$, so

:::law caption="Drude's model. J is current per unit area, σ the conductivity, ρ = 1/σ the resistivity."
$$J = \frac{ne^2\tau}{m}\,E = \sigma E, \qquad \rho = \frac{1}{\sigma} = \frac{m}{ne^2\tau}$$
:::

For a wire of length $L$ and area $A$: $E = V/L$ and $I = JA$, so $I = \sigma A V/L$, which is $V = IR$ with $R = \rho L/A$. Ohm's law appears, **provided $\tau$ does not depend on $E$**.

Why should $\tau$ be independent of $E$? Because collisions are set by the electrons' random motion, and that is enormously faster than the drift. Numbers for copper ($n = 8.5\times10^{28}\ \text{m}^{-3}$, $\rho = 1.7\times10^{-8}\ \Omega\,\text{m}$):

- $\tau = m/(ne^2\rho) \approx 2.5\times10^{-14}$ s;
- a current of 1 A in a wire of cross-section 1 mm² gives $v_d = I/(neA) \approx 7\times10^{-5}$ m/s, less than a millimetre per ten seconds;
- the random speed of the electrons is of order $10^6$ m/s.

The field nudges a random motion that is ten billion times faster; it barely changes how often electrons collide. So $\tau$ is fixed by the material and its temperature, and the current is linear in the field.

:::qc
q: In Drude's picture, why does a hot wire have a larger resistance than a cold one?
options: ["The ions vibrate more, so electrons collide more often and τ is shorter", "Heat removes free electrons from the metal", "The drift velocity becomes larger than the random speed"]
answer: 0
right: Right. Stronger lattice vibrations scatter electrons more often, so $\tau$ falls and $\rho = m/(ne^2\tau)$ rises. In a metal, $n$ hardly changes with temperature.
wrong: Look at $\rho = m/(ne^2\tau)$. In a metal $n$ is fixed; what heating changes is how often the electrons are scattered.
:::

## When Ohm's law fails {lvl=2 id=s-nonohmic label="Class 12"}

A conductor is **ohmic** if its $V$–$I$ graph is a straight line through the origin, with the same slope for both directions of current. Many useful devices are **non-ohmic**:

- **Filament lamps.** More current means more heating, so $\tau$ falls and $R$ rises. The graph bends: each extra volt buys less extra current. The tungsten of a 60 W, 230 V bulb has a hot resistance of $V^2/P \approx 880\ \Omega$, about ten times its cold value.
- **Semiconductor diodes.** Almost no current flows until the forward voltage reaches about 0.6–0.7 V (silicon); then the current rises steeply. In reverse, almost nothing flows. The graph is not straight and not symmetric.
- **Thermistors and semiconductors.** Heating releases more charge carriers ($n$ rises), so resistance *falls* with temperature, the opposite of a metal.
- **Gas discharges and electrolytes** also have curved graphs.

:::figure caption="Current I (vertical) against voltage V (horizontal) for three devices. Here a steeper curve means a smaller resistance."
<svg viewBox="0 0 360 210" role="img" aria-label="I against V curves: straight line for an ohmic resistor, flattening curve for a filament lamp, and a diode curve that is flat in reverse and rises sharply after about 0.7 volts">
<line class="axis" x1="20" y1="130" x2="350" y2="130"/><line class="axis" x1="180" y1="200" x2="180" y2="10"/>
<text x="338" y="148">V</text><text x="186" y="20">I</text>
<line class="pen" x1="60" y1="190" x2="320" y2="60" style="stroke:var(--chem)"/><text x="292" y="88" style="fill:var(--chem)">resistor</text>
<path class="pen" d="M40 178 C 90 165, 130 158, 180 130 C 230 102, 270 95, 330 82" style="fill:none;stroke:var(--mat)"/><text x="276" y="114" style="fill:var(--mat)">lamp</text>
<path class="ray" d="M30 132 L 180 130 L 215 128 C 228 124, 236 90, 242 18" style="fill:none"/><text x="246" y="30">diode</text>
<line class="faint" x1="222" y1="130" x2="222" y2="140"/><text x="210" y="154">0.7 V</text>
</svg>
:::

**Static and dynamic resistance.** For a non-ohmic device "the resistance" is ambiguous. The **static** (chord) resistance $V/I$ is the ratio at one operating point; the **dynamic** (differential) resistance $r = dV/dI$ is the inverse slope of the $I$–$V$ curve there, and governs how a *small change* in voltage changes the current. For a lit filament $dV/dI > V/I$; for a forward-biased diode $dV/dI$ is tiny. For an ohmic resistor both equal $R$.

:::qc
q: A device has $I = kV^2$. At an operating point, how does its dynamic resistance compare with its static resistance V/I?
options: ["Half of it", "Equal to it", "Twice it"]
answer: 0
right: Right. $dI/dV = 2kV$, so $dV/dI = 1/(2kV)$, while $V/I = 1/(kV)$. The dynamic resistance is half the static one.
wrong: Differentiate: $dI/dV = 2kV$. Compare $1/(2kV)$ with $V/I = 1/(kV)$.
:::

## EMF and internal resistance {lvl=3 id=s-emf label="JEE"}

A cell's chemistry does work on each coulomb of charge it moves from its negative to its positive terminal. That work per unit charge is the **electromotive force** (EMF) $E$, measured in volts. It is not a force; the name is historical.

The charge also has to pass through the cell's own electrolyte and electrodes, which have some resistance $r$, the **internal resistance**. So part of the EMF is used up inside the cell. With current $I$ flowing to an external resistor $R$:

:::law caption="Terminal voltage of a cell delivering current I. While a cell is being charged, the current is reversed and V = E + Ir."
$$I = \frac{E}{R + r}, \qquad V = E - Ir = \frac{ER}{R + r}$$
:::

:::figure caption="Left: a real cell is an ideal EMF E in series with r. Right: the terminal voltage falls linearly with current, from E at no load to zero at short circuit (I = E/r)."
<svg viewBox="0 0 360 170" role="img" aria-label="Cell drawn as ideal EMF in series with internal resistance connected to a load resistor, and graph of terminal voltage falling linearly with current">
<rect x="20" y="20" width="130" height="58" rx="6" style="fill:none;stroke:var(--muted);stroke-dasharray:4 3"/>
<line class="pen" x1="30" y1="50" x2="52" y2="50"/><line class="pen" x1="52" y1="36" x2="52" y2="64" style="stroke-width:2"/><line class="pen" x1="60" y1="43" x2="60" y2="57" style="stroke-width:4"/>
<line class="pen" x1="60" y1="50" x2="84" y2="50"/><rect x="84" y="44" width="34" height="12" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><line class="pen" x1="118" y1="50" x2="140" y2="50"/>
<text x="48" y="32">E</text><text x="96" y="38">r</text>
<line class="pen" x1="30" y1="50" x2="30" y2="130"/><line class="pen" x1="140" y1="50" x2="140" y2="130"/>
<line class="pen" x1="30" y1="130" x2="62" y2="130"/><line class="pen" x1="108" y1="130" x2="140" y2="130"/>
<rect x="62" y="123" width="46" height="14" style="fill:color-mix(in srgb, var(--phy) 25%, transparent);stroke:var(--phy);stroke-width:1.4"/><text x="80" y="156">R</text>
<line class="axis" x1="200" y1="150" x2="350" y2="150"/><line class="axis" x1="200" y1="150" x2="200" y2="15"/>
<text x="340" y="166">I</text><text x="184" y="24">V</text>
<line class="ray" x1="200" y1="40" x2="330" y2="150"/>
<text x="184" y="44">E</text><text x="314" y="166">E/r</text><text x="262" y="80">slope = −r</text>
</svg>
:::

Consequences you meet constantly:

- With no current (open circuit) $V = E$, so a high-resistance voltmeter across a cell reads nearly its EMF.
- Short-circuit current is $E/r$. A car battery (12 V, $r \approx 0.02\ \Omega$) can push hundreds of amperes, enough to start a motor or melt a spanner; a torch cell ($r$ of a fraction of an ohm) cannot.
- A "weak" battery often has nearly its full EMF but a large internal resistance, so its terminal voltage collapses under load.

:::worked title="Two readings fix E and r"
A cell gives 1.40 V across a 7 Ω resistor and 1.20 V across a 3 Ω resistor. Find $E$ and $r$.

Currents: $1.40/7 = 0.20$ A and $1.20/3 = 0.40$ A. Each reading satisfies $V = E - Ir$:
$1.40 = E - 0.20r$ and $1.20 = E - 0.40r$. Subtracting, $0.20 = 0.20r$, so $r = 1.0\ \Omega$ and $E = 1.60$ V.
:::

:::qc
q: A cell of EMF 2.0 V and internal resistance 0.5 Ω is connected to a 1.5 Ω resistor. What does a voltmeter across the cell's terminals read?
options: ["1.5 V", "2.0 V", "0.5 V", "1.0 V"]
answer: 0
right: Right. $I = 2.0/(1.5+0.5) = 1.0$ A, and $V = E - Ir = 2.0 - 0.5 = 1.5$ V, which is also $IR$.
wrong: Find $I = E/(R+r)$ first, then $V = E - Ir$.
:::

## Real meters and loading error {lvl=3 id=s-meters label="JEE"}

An **ammeter** goes in series, so the current it measures passes through it; ideally it has zero resistance. A **voltmeter** goes in parallel, so it compares the potentials at two points; ideally it has infinite resistance and draws no current. Real meters fall short, and inserting them changes the very thing they measure. That is **loading error**.

Measuring an unknown $R$ with both meters can be done in two ways:

- **Voltmeter directly across $R$** (ammeter outside). The ammeter reads the current through $R$ *plus* the voltmeter's current, so the measured value is $R_m = \dfrac{RR_V}{R + R_V}$, slightly low. The fractional error is about $R/R_V$: small when $R \ll R_V$.
- **Ammeter directly in series with $R$** (voltmeter across both). The voltmeter reads the drop across $R$ *plus* the ammeter's drop, so $R_m = R + R_A$, slightly high. The fractional error is $R_A/R$: small when $R \gg R_A$.

The two errors are equal when $R/R_V = R_A/R$, i.e. $R = \sqrt{R_A R_V}$. Below this, put the voltmeter directly across the resistor; above it, put the ammeter directly in series.

:::worked title="Choosing the connection"
An ammeter of 1 Ω and a voltmeter of 10 kΩ are used to measure a resistor of about 20 Ω. The crossover is $\sqrt{1\times10^4} = 100\ \Omega$, so 20 Ω is a "small" resistance: connect the voltmeter directly across it. The error is about $20/10^4 = 0.2\%$. The other connection would read $21\ \Omega$, a 5% error.
:::

:::qc
q: A voltmeter of resistance 900 Ω is connected directly across a 100 Ω resistor, and the ammeter reads the total current. What resistance does V/I give?
options: ["90 Ω", "100 Ω", "111 Ω", "1000 Ω"]
answer: 0
right: Right. The meter sees $100 \parallel 900 = 100\times900/1000 = 90\ \Omega$, a 10% underestimate.
wrong: The ammeter's current divides between the resistor and the voltmeter, so $V/I$ gives the parallel combination.
:::

## The potential divider {lvl=3 id=s-divider label="JEE"}

Two resistors $R_1$ and $R_2$ in series across a supply $V$ carry the same current $V/(R_1+R_2)$, so the voltage across $R_2$ is

$$V_{\text{out}} = V\,\frac{R_2}{R_1 + R_2}.$$

Each resistor takes a share of the voltage proportional to its resistance. A rheostat with three terminals (both ends across the supply, output taken from one end and the slider) is a continuously adjustable divider, a **potentiometer** in the everyday sense. Unlike a rheostat in series, it can set the output all the way down to zero.

:::figure caption="A potential divider with a load R_L connected across R₂. The load is in parallel with R₂ and lowers the output."
<svg viewBox="0 0 300 180" role="img" aria-label="Potential divider: two resistors in series across a supply, with a load resistor across the lower one">
<line class="pen" x1="40" y1="20" x2="160" y2="20"/><line class="pen" x1="40" y1="160" x2="160" y2="160"/>
<line class="pen" x1="40" y1="20" x2="40" y2="78"/><line class="pen" x1="40" y1="102" x2="40" y2="160"/>
<line class="pen" x1="26" y1="78" x2="54" y2="78" style="stroke-width:2"/><line class="pen" x1="32" y1="88" x2="48" y2="88" style="stroke-width:4"/>
<line class="pen" x1="40" y1="88" x2="40" y2="102"/>
<text x="8" y="94">V</text>
<line class="pen" x1="160" y1="20" x2="160" y2="34"/><rect x="153" y="34" width="14" height="40" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><text x="174" y="58">R₁</text>
<line class="pen" x1="160" y1="74" x2="160" y2="102"/><rect x="153" y="102" width="14" height="40" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><text x="128" y="126">R₂</text>
<line class="pen" x1="160" y1="142" x2="160" y2="160"/>
<line class="faint" x1="160" y1="88" x2="250" y2="88"/><line class="faint" x1="160" y1="160" x2="250" y2="160"/>
<line class="faint" x1="250" y1="88" x2="250" y2="104"/><rect x="243" y="104" width="14" height="40" style="fill:color-mix(in srgb, var(--phy) 25%, transparent);stroke:var(--phy);stroke-width:1.4"/><line class="faint" x1="250" y1="144" x2="250" y2="160"/>
<text x="262" y="128">R_L</text><text x="196" y="82">V_out</text>
</svg>
:::

**Loading.** Anything connected to the output draws current and sits in parallel with $R_2$, so the true output is $V\,(R_2\parallel R_L)/(R_1 + R_2\parallel R_L)$. A 9 V supply across two 10 kΩ resistors gives 4.5 V unloaded; connect a 10 kΩ load and $R_2\parallel R_L = 5$ kΩ, so the output falls to $9\times5/15 = 3$ V. Rule of thumb: keep the load resistance at least ten times the divider's resistances. A voltmeter is itself a load, which is why it needs a high resistance.

## Load lines: circuits with a non-ohmic element {lvl=4 id=s-loadline label="Olympiad"}

With a non-ohmic device you cannot write $I = V/R$ with a fixed $R$. Instead, use two facts at once. Suppose a source $E$ drives the device through a series resistor $R_s$ (which can include the source's internal resistance):

1. the device obeys its own curve, $I = f(V)$;
2. the rest of the circuit obeys $V = E - IR_s$, a straight line on the $I$–$V$ plot from $(E, 0)$ to $(0, E/R_s)$, called the **load line**.

The operating point is where they cross. Graphically, draw the line over the measured curve; algebraically, solve the two together.

:::worked title="A lamp on a load line"
A lamp obeys $I = 0.1\sqrt{V}$ (I in amperes, V in volts). It is run from a 12 V supply through a 20 Ω resistor. Find the lamp voltage.

$V + 20\times0.1\sqrt V = 12$. Put $s = \sqrt V$: $s^2 + 2s - 12 = 0$, so $s = -1 + \sqrt{13} = 2.606$. Hence $V = 6.79$ V and $I = 0.261$ A. Check: $6.79 + 20\times0.261 = 12.0$ V. Note that the lamp's static resistance here is $26\ \Omega$, but you could not have known that before solving.
:::

**Stability.** If the device curve has a region where the current *falls* as voltage rises (negative dynamic resistance, as in an arc lamp, a gas discharge or a tunnel diode), the load line can cross it at more than one point, and some of those crossings are unstable. An arc lamp on a stiff supply would run away; the series resistor or choke (the "ballast") is what makes a stable crossing exist. A small fluctuation $\delta I$ dies away only if the total differential resistance around the loop, $R_s + dV/dI$, is positive.

## How far the Drude picture goes {lvl=4 id=s-drude-limits label="Olympiad"}

Drude's model gets Ohm's law and the right order of magnitude for $\tau$, but its classical details need repair.

- **Speeds.** Classically the random speed at 300 K is $\sqrt{3kT/m} \approx 1.2\times10^5$ m/s. Quantum mechanics (the Pauli principle) forces the conduction electrons of copper to fill states up to the **Fermi speed** $v_F \approx 1.6\times10^6$ m/s, almost independent of temperature. The formula $\rho = m/(ne^2\tau)$ survives unchanged; only the interpretation of $\tau$ changes.
- **Mean free path.** With $v_F$, copper's mean free path at room temperature is $v_F\tau \approx 40$ nm, about 150 atomic spacings. Electrons are not scattered by every ion: a perfect, motionless lattice would not scatter them at all. They are scattered by *departures* from perfection, namely thermal vibrations and impurities.
- **Matthiessen's rule.** The two kinds of scattering add their rates, so $\rho = \rho_{\text{thermal}}(T) + \rho_{\text{impurity}}$. Near room temperature the thermal part is roughly proportional to $T$; at very low temperature it dies away and a residual resistivity from impurities remains. Alloys such as nichrome and manganin are dominated by the impurity part, which is why their resistance hardly changes with temperature and why they are chosen for standard resistors and heating elements.
- **Breakdown at high fields.** Linearity relies on $\tau$ being independent of $E$. In semiconductors at fields of order $10^5$–$10^6$ V/m and above, electrons gain energy between collisions faster than the lattice can take it away ("hot electrons"); the drift velocity saturates and $J$ stops being proportional to $E$. Ordinary metal wires never reach this regime, because they would melt first.

:::qc
q: Two copper samples differ only in purity. Compared with the pure sample, the impure one has
options: ["a larger resistivity at every temperature, by roughly a constant amount", "a smaller resistivity", "the same resistivity at room temperature but a larger one when hot"]
answer: 0
right: Right. By Matthiessen's rule the impurity scattering adds a nearly temperature-independent term to the resistivity.
wrong: Impurities add a second, independent source of scattering. Scattering rates add, so the resistivities add.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Ohm's law: $V = IR$ for a metallic conductor at constant temperature; the $V$–$I$ graph is a straight line through the origin. {lvl=1}
2. Resistance $R = V/I$, unit ohm: $1\ \Omega = 1$ V/A. For a fixed voltage, $I \propto 1/R$. {lvl=1}
3. A rheostat varies the resistance in a circuit and so controls the current. {lvl=1}
4. Drude: $v_d = eE\tau/m$, $J = \sigma E$, $\rho = m/(ne^2\tau)$. Linearity holds because the random speed dwarfs the drift speed, so $\tau$ does not depend on $E$. {lvl=2}
5. Filaments, diodes, thermistors and discharges are non-ohmic; distinguish static $V/I$ from dynamic $dV/dI$. {lvl=2}
6. A real cell: $V = E - Ir$; short-circuit current $E/r$. {lvl=3}
7. Real ammeters add $R_A$, real voltmeters draw current; choose the connection by comparing $R$ with $\sqrt{R_AR_V}$. {lvl=3}
8. Potential divider: $V_{\text{out}} = VR_2/(R_1+R_2)$, lowered by any load in parallel with $R_2$. {lvl=3}
9. Non-ohmic circuits are solved with a load line; stability needs a positive total differential resistance. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Ohm's law needs constant temperature; a bulb's $V/I$ rises as it heats, so do not use its cold resistance for the lit bulb. {lvl=1}
- Convert mA to A and kΩ to Ω before using $V = IR$. {lvl=1}
- In NCERT's graph $V$ is vertical and $I$ horizontal, so slope = $R$; on an $I$–$V$ graph the slope is $1/R$. Read the axes first. {lvl=1}
- Ammeter in series, voltmeter in parallel; an ammeter wired in parallel acts as a short circuit. {lvl=1}
- Terminal voltage equals the EMF only when no current flows. {lvl=3}
- A loaded potential divider gives less than $VR_2/(R_1+R_2)$; include the load in parallel with $R_2$. {lvl=3}
- For a non-ohmic element, never assume a resistance; solve its curve together with the load line. {lvl=4}
:::
