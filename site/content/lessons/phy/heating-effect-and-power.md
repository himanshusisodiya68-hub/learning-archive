---
title: Heating effect of current and electric power
summary: 'Why a wire gets hot when current flows, and how to read your electricity bill and a bulb''s wattage.'
ncert: ["Class 10 Science · Ch 11 Electricity (§11.7–11.8)"]
up_to: Olympiad
builds_on: [Potential difference, Ohm's law, Resistors in series and parallel, Specific heat capacity]
notes_prompt: Explain why the heating element of a heater glows while its connecting cord stays cool, even though the same current flows through both.
margin:
  - kind: history
    title: History
    text: In 1841 James Prescott Joule measured the heat produced by currents in coils of wire dipped in water and found it grew as the square of the current. The SI unit of energy is named after him.
  - kind: tip
    title: Board favourite
    text: "1 kW h = 1000 W × 3600 s = 3.6 × 10⁶ J. The 'unit' on an electricity bill is one kilowatt hour."
  - kind: olympiad
    title: Olympiad link
    text: The energy that heats a wire does not flow along the wire. It enters through the wire's surface from the electric and magnetic fields around it, carried by the Poynting vector.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 32 Electric Current in Conductors (heating effect, power)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.4 Electric current" }
cards:
  - { front: "Joule's law of heating?", back: "$H = I^2Rt$; equivalently $H = VIt = V^2t/R$." }
  - { front: "Three forms of electric power?", back: "$P = VI = I^2R = V^2/R$. Use $I^2R$ when the current is shared, $V^2/R$ when the voltage is shared." }
  - { front: "1 kW h in joules?", back: "$3.6\\times10^6$ J. One 'unit' on the bill." }
  - { front: "Two bulbs rated P₁ and P₂ at the same voltage in series across that voltage: which glows brighter?", back: "The lower-rated one (larger resistance). Total power $P_1P_2/(P_1+P_2)$." }
  - { front: "Maximum power transfer from a source of internal resistance r?", back: "When the load $R = r$; then $P_{\\max} = \\mathcal{E}^2/4r$ and the efficiency is only 50%." }
  - { front: "How does the fusing current of a wire depend on its radius?", back: "$I^2 \\propto r^3$, so $I \\propto r^{3/2}$: heat produced $\\propto 1/r^2$, heat lost $\\propto r$." }
core:
  idea: 'A charge falling through potential difference $V$ gives up $V$ joules per coulomb, which a resistor turns into heat: $H = VIt = I^2Rt$, with power $P = VI = I^2R = V^2/R$. Choose the form by whether current or voltage is shared.'
  formulas:
    - tex: 'H = I^2Rt'
      label: 'Joules law'
    - tex: 'P = VI = I^2R = \frac{V^2}{R}'
      label: 'Electric power'
    - tex: '1\ \text{kW h} = 3.6\times10^6\ \text{J}'
      label: 'Kilowatt hour'
  conditions:
    - 'Resistor obeys Ohms law with a fixed R (change with temperature ignored)'
    - 'All the electrical energy is dissipated as heat in the resistor (no motor or other work)'
    - 'For a rated bulb or heater, R = V_rated²/P_rated stays constant'
  sign: 'Always say what is held fixed: at the same current the larger resistance heats more; at the same voltage the smaller resistance heats more.'
outcomes:
  - 'Calculate heat, power and the cost of electrical energy using Joules law and the kilowatt hour'
  - 'Find the actual power of rated bulbs and heaters connected in series and in parallel'
  - 'Use an energy balance to find the efficiency and heating time of a kettle'
  - 'Derive maximum power transfer at R = r and the r^(3/2) law for fuse wires'
  - 'Analyse heating with cooling and thermal runaway, and use the local form p = J·E'
---

:::hook
q: A 100 W bulb and a 25 W bulb, both rated for 220 V, are connected in series across the 220 V mains. Which one glows brighter?
options: ["The 100 W bulb", "The 25 W bulb", "Both equally"]
answer: 1
right: Right. In series both carry the same current, so the brighter one is the one with the larger resistance, and the 25 W bulb has four times the resistance of the 100 W one.
wrong: The "100 W" on a bulb is what it draws on its own across 220 V. In series the current is shared, and heat goes as I²R, so the larger resistance wins. The 25 W bulb has the larger resistance.
:::

## Where the energy goes {lvl=1 id=s-energy label="Class 10"}

A potential difference $V$ across a resistor means that each coulomb of charge passing through it loses $V$ joules of electrical potential energy. The charge leaves the resistor moving no faster than it entered: the current is the same at both ends. So where did the energy go?

It went into the resistor itself, as **heat**. The charges are pushed through a crowded lattice of atoms; they keep colliding and handing their energy to the atoms, which vibrate more vigorously. The resistor gets warmer.

Now count. In time $t$ a current $I$ carries charge $Q = It$ across the potential difference $V$, so the energy given up is

$$H = VQ = VIt.$$

For a resistor obeying Ohm's law, $V = IR$, so:

:::law caption="Joule's law of heating. H in joules, I in amperes, R in ohms, t in seconds."
$$H = I^2Rt$$
:::

Three things follow, and each can be checked in the kitchen:

- double the current and the heat goes up **four** times;
- double the resistance (same current) and the heat doubles;
- double the time and the heat doubles.

:::worked title="A quick count"
A 4 Ω resistor carries 5 A for one minute. $H = 5^2\times4\times60 = 6000$ J. The same resistor at 10 A gives $24\,000$ J in that minute, four times as much.
:::

## Electric power and the kilowatt hour {lvl=1 id=s-power label="Class 10"}

**Power** is the rate of transfer of energy. Divide $H = VIt$ by $t$:

:::law caption="Electric power. 1 W = 1 V × 1 A = 1 J/s."
$$P = VI = I^2R = \frac{V^2}{R}$$
:::

All three are the same thing; pick the form whose quantities you know. $I^2R$ is convenient when you know the current (for example, things in series share it); $V^2/R$ when you know the voltage (things in parallel share it).

The joule is far too small for household use. Electricity boards sell energy in **kilowatt hours**: the energy used by a 1 kW appliance in 1 hour.

$$1\ \text{kW h} = 1000\ \text{W}\times3600\ \text{s} = 3.6\times10^6\ \text{J}.$$

One kilowatt hour is called one **unit** on the bill. Energy in units is simply (power in kW) × (time in hours).

:::worked title="A monthly bill"
A 1.5 kW geyser runs 1 hour a day and four 10 W LED bulbs run 6 hours a day. Daily energy $= 1.5\times1 + 4\times0.010\times6 = 1.5 + 0.24 = 1.74$ kW h. In 30 days, $52.2$ units. At Rs 7 per unit, the bill is Rs 365.40. The geyser costs more than six times as much as all the lights together.
:::

:::qc
q: A 2 kW room heater runs for 3 hours. How many units of electricity does it use?
options: ["0.67", "6", "6000", "21 600"]
answer: 1
right: Right. 2 kW × 3 h = 6 kW h, which is 6 units.
wrong: Units are kilowatt hours: multiply the power in kW by the time in hours, 2 × 3 = 6.
:::

## Bulbs, heaters and fuses {lvl=1 id=s-uses label="Class 10"}

Joule heating is a nuisance in wires and motors, which waste energy and must be cooled, but it is the whole point in many devices.

- **Heaters, irons, toasters, kettles** use a coil of **nichrome**, an alloy whose resistivity is about 60 times that of copper and which does not oxidise when red-hot.
- **Filament bulbs** use **tungsten**, which melts at about 3380 °C, so its filament can run at around 2500 °C and glow white. The bulb is filled with nitrogen or argon so the hot tungsten does not burn. Even so, most of the energy comes out as heat rather than light, which is why LEDs have replaced filament bulbs.
- **The connecting cord** is thick copper with a tiny resistance. It carries the same current as the element, but its $I^2R$ is small, so it stays cool.
- **A fuse** is a short wire of low melting point (an alloy of tin and lead, or of copper or aluminium) placed **in series** with a circuit. If the current rises above a safe value, the fuse heats up, melts and breaks the circuit before the wiring overheats. Common ratings are 1 A, 2 A, 3 A, 5 A and 10 A. A 1 kW iron on 220 V draws $1000/220 = 4.5$ A, so it needs a 5 A fuse.

:::note title="Which heats more: a large R or a small R?" tone=warn
At the **same current**, $P = I^2R$: the larger resistance heats more (element versus cord).
At the **same voltage**, $P = V^2/R$: the *smaller* resistance heats more. That is why a 2 kW heater on 220 V has a smaller resistance (24.2 Ω) than a 1 kW heater (48.4 Ω).
There is no contradiction: always ask which quantity is fixed.
:::

## Rated power and actual power {lvl=2 id=s-rated label="Class 12"}

A bulb marked "100 W, 220 V" tells you what it draws **if** 220 V is put across it. From these two numbers you can find its resistance, which (ignoring the change with temperature) stays fixed:

$$R = \frac{V_{\text{rated}}^2}{P_{\text{rated}}} = \frac{220^2}{100} = 484\ \Omega.$$

On any other voltage, $P_{\text{actual}} = V^2/R = P_{\text{rated}}\,(V/V_{\text{rated}})^2$. A 10% drop in voltage (220 V to 198 V) cuts the power by 19%, since $0.9^2 = 0.81$.

**Series.** Put a 100 W and a 60 W bulb (both 220 V) in series across 220 V. $R_1 = 484\ \Omega$, $R_2 = 220^2/60 = 806.7\ \Omega$, so $I = 220/1290.7 = 0.170$ A, and

$$P_1 = I^2R_1 = 14.1\ \text{W},\qquad P_2 = I^2R_2 = 23.4\ \text{W}.$$

The 60 W bulb is brighter, and both are dim. In general, for bulbs with the same rated voltage in series across that voltage, the total power obeys $\dfrac1{P} = \dfrac1{P_1} + \dfrac1{P_2}$ (here 37.5 W), because $R \propto 1/P_{\text{rated}}$ and the resistances add.

**Parallel.** Each bulb gets the full 220 V and draws its rated power: 100 W and 60 W, total 160 W. The 100 W bulb is brighter. This is why house wiring is in parallel.

:::figure caption="Left: in series the current is shared, so the larger resistance (the lower-rated bulb) gets more power. Right: in parallel the voltage is shared, so each bulb draws its rated power."
<svg viewBox="0 0 360 170" role="img" aria-label="Two bulbs in series and two bulbs in parallel across a cell">
<line class="ln" x1="20" y1="30" x2="58" y2="30"/><line class="ln" x1="82" y1="30" x2="118" y2="30"/><line class="ln" x1="142" y1="30" x2="160" y2="30"/>
<line class="ln" x1="160" y1="30" x2="160" y2="130"/><line class="ln" x1="160" y1="130" x2="20" y2="130"/>
<line class="ln" x1="20" y1="130" x2="20" y2="86"/><line class="ln" x1="20" y1="74" x2="20" y2="30"/>
<line class="ln" x1="8" y1="74" x2="32" y2="74" style="stroke-width:2"/><line class="ln" x1="14" y1="86" x2="26" y2="86" style="stroke-width:3"/>
<circle class="obj" cx="70" cy="30" r="12" style="fill:none;stroke:var(--ink)"/><line class="ln" x1="62" y1="22" x2="78" y2="38"/><line class="ln" x1="78" y1="22" x2="62" y2="38"/>
<circle class="obj" cx="130" cy="30" r="12" style="fill:color-mix(in srgb, var(--phy) 35%, transparent);stroke:var(--ink)"/><line class="ln" x1="122" y1="22" x2="138" y2="38"/><line class="ln" x1="138" y1="22" x2="122" y2="38"/>
<text x="56" y="60">100 W</text><text x="118" y="60">60 W</text><text x="40" y="155">series: same I</text>
<line class="ln" x1="210" y1="30" x2="330" y2="30"/><line class="ln" x1="210" y1="130" x2="330" y2="130"/>
<line class="ln" x1="210" y1="130" x2="210" y2="86"/><line class="ln" x1="210" y1="74" x2="210" y2="30"/>
<line class="ln" x1="198" y1="74" x2="222" y2="74" style="stroke-width:2"/><line class="ln" x1="204" y1="86" x2="216" y2="86" style="stroke-width:3"/>
<line class="ln" x1="270" y1="30" x2="270" y2="68"/><line class="ln" x1="270" y1="92" x2="270" y2="130"/>
<line class="ln" x1="330" y1="30" x2="330" y2="68"/><line class="ln" x1="330" y1="92" x2="330" y2="130"/>
<circle class="obj" cx="270" cy="80" r="12" style="fill:color-mix(in srgb, var(--phy) 45%, transparent);stroke:var(--ink)"/><line class="ln" x1="262" y1="72" x2="278" y2="88"/><line class="ln" x1="278" y1="72" x2="262" y2="88"/>
<circle class="obj" cx="330" cy="80" r="12" style="fill:color-mix(in srgb, var(--phy) 25%, transparent);stroke:var(--ink)"/><line class="ln" x1="322" y1="72" x2="338" y2="88"/><line class="ln" x1="338" y1="72" x2="322" y2="88"/>
<text x="228" y="84">100 W</text><text x="292" y="112">60 W</text><text x="232" y="155">parallel: same V</text>
</svg>
:::

:::qc
q: Two identical bulbs in series across a supply together use 40 W. If they are reconnected in parallel across the same supply, what power do they use?
options: ["20 W", "40 W", "80 W", "160 W"]
answer: 3
right: Right. Series resistance 2R, parallel R/2: four times smaller, so at the same V the power is four times larger, 160 W.
wrong: At fixed V, P = V²/R. Series gives 2R, parallel gives R/2, a factor of 4 in resistance, so the power goes from 40 W to 160 W.
:::

## Heating water: energy balance and efficiency {lvl=2 id=s-kettle label="Class 12"}

Electrical energy into a heater goes partly into the water ($mc\,\Delta T$) and partly into the kettle body and the surrounding air. The **efficiency** is the useful fraction:

$$\eta = \frac{mc\,\Delta T}{Pt}.$$

:::worked title="An electric kettle"
A 1.8 kW kettle heats 1.2 kg of water from 25 °C to 100 °C ($c = 4200$ J kg⁻¹ K⁻¹). If it were perfect, the time would be $t = mc\Delta T/P = 1.2\times4200\times75/1800 = 210$ s. It actually takes 4 minutes (240 s), so $\eta = 378\,000/432\,000 = 87.5\%$.
:::

The losses are not a fixed fraction: they grow with how hot the kettle is compared with the room and with how long it takes. That is why a weak heater on a low voltage can take far longer than $P$ alone suggests, or never boil the water at all (see the last section).

## Where Joule heat comes from, microscopically {lvl=3 id=s-micro label="JEE"}

Inside a conductor the field $\vec E$ pushes each free electron with force $-e\vec E$. Between collisions the electron speeds up and gains kinetic energy; at each collision with the vibrating lattice it loses that extra energy to the lattice. On average the electrons move with a steady **drift velocity** $\vec v_d$, so the field does work on them at a steady rate, and all of it ends up as lattice vibration, which is heat.

Rate of work on one electron: $\vec F\cdot\vec v_d = (-e\vec E)\cdot\vec v_d$. With $n$ electrons per unit volume, and current density $\vec J = -ne\vec v_d$, the power per unit volume is

:::law caption="Local form of Joule's law: power dissipated per unit volume. σ is conductivity, ρ = 1/σ resistivity."
$$p = \vec J\cdot\vec E = \sigma E^2 = \rho J^2$$
:::

Check it on a uniform wire of length $l$ and area $A$: $J = I/A$, so the total power is $\rho (I/A)^2\times Al = I^2\,\rho l/A = I^2R$. Good.

The local form tells you **where** the heat appears. In a wire that narrows, $J$ is larger in the narrow part and $p = \rho J^2$ grows as $1/A^2$: that is where the wire glows first, and why a loose, poorly contacting plug socket gets hot.

:::qc
q: A copper wire narrows from radius 2 mm to radius 1 mm. How does the heat produced per unit volume in the thin part compare with that in the thick part?
options: ["Half", "Twice", "4 times", "16 times"]
answer: 3
right: Right. J goes as 1/r², so it is 4 times larger, and p = ρJ² is 16 times larger.
wrong: The same current crosses one quarter of the area, so J is 4 times larger and p = ρJ² is 16 times larger.
:::

## Maximum power transfer {lvl=3 id=s-maxpower label="JEE"}

A real cell of emf $\mathcal E$ has an internal resistance $r$. Connect a load $R$. Then $I = \mathcal E/(R+r)$ and the power delivered to the load is

$$P(R) = \frac{\mathcal E^2 R}{(R+r)^2}.$$

At $R = 0$ the current is large but there is no voltage across the load, so $P = 0$. At $R\to\infty$ there is voltage but no current, so $P\to0$. There must be a best value in between. Set $dP/dR = 0$:

$$\frac{(R+r)^2 - 2R(R+r)}{(R+r)^4} = 0 \;\Rightarrow\; R = r.$$

:::law caption="Maximum power transfer theorem."
$$R_{\text{load}} = r \quad\Rightarrow\quad P_{\max} = \frac{\mathcal E^2}{4r}$$
:::

A neat way to see it without calculus: $(R+r)^2/R = R + 2r + r^2/R = \left(\sqrt R - r/\sqrt R\right)^2 + 4r$, so $P = \dfrac{\mathcal E^2}{(\sqrt R - r/\sqrt R)^2 + 4r}$, which is largest when the square vanishes, at $R = r$.

The price is the **efficiency** $\eta = I^2R/I^2(R+r) = R/(R+r)$, only **50%** at the matched point: as much heat is wasted inside the source as delivered. So:

- **signals** (an antenna into a receiver, an amplifier into a speaker) are matched, $R = r$, because the source is weak and every microwatt counts;
- **power systems** are never matched. A power station wants $R \gg r$ to get efficiency near 100%.

:::figure caption="Power in the load (solid) peaks at R = r, where it is E²/4r. Efficiency R/(R + r) (dashed) is only 50% there and keeps rising with R."
<svg viewBox="0 0 360 200" role="img" aria-label="Graph of load power and efficiency against load resistance">
<line class="axis" x1="40" y1="170" x2="350" y2="170"/><line class="axis" x1="40" y1="170" x2="40" y2="20"/>
<polyline class="ray" style="fill:none" points="40,170 52.5,80.4 65,45.6 90,30 115,35.6 140,45.6 190,65 240,80.4 290,92.2 340,101.5"/>
<polyline class="faint" style="fill:none;stroke-dasharray:6 4" points="40,170 52.5,142 65,123.3 90,100 140,76.7 190,65 240,58 340,50"/>
<line class="faint" x1="90" y1="170" x2="90" y2="30" style="stroke-dasharray:2 3"/>
<line class="faint" x1="40" y1="30" x2="90" y2="30" style="stroke-dasharray:2 3"/>
<text x="84" y="186">r</text><text x="300" y="186">R</text><text x="4" y="34">E²/4r</text>
<text x="250" y="44">efficiency</text><text x="250" y="112">P(R)</text>
<text x="96" y="114">50%</text>
</svg>
:::

:::qc
q: A 12 V battery with internal resistance 2 Ω drives a variable resistor. What is the largest power the resistor can take?
options: ["6 W", "18 W", "36 W", "72 W"]
answer: 1
right: Right. R = r = 2 Ω, current 3 A, power 3² × 2 = 18 W, which is E²/4r = 144/8.
wrong: Match the load, R = r = 2 Ω. Then I = 12/4 = 3 A and P = 9 × 2 = 18 W.
:::

**Why power lines use high voltage.** A power station sends power $P$ along a line of resistance $R_\ell$. The current is $I = P/V$, so the heat lost in the line is $I^2R_\ell = P^2R_\ell/V^2$. Raising the transmission voltage 10 times cuts the line loss 100 times. Here the trap is to write $V^2/R_\ell$ with the *transmission* voltage: that voltage is not across the line, most of it is across the load.

## Fuse wires and the r³ law {lvl=3 id=s-fuse label="JEE"}

A wire settles at the temperature where heat produced equals heat lost. Heat is **produced** throughout the volume, but **lost** only through the surface (to the air, by convection and radiation), roughly in proportion to the surface area times the temperature excess.

For a wire of radius $r$ and length $l$:

$$\underbrace{I^2\,\frac{\rho l}{\pi r^2}}_{\text{produced}} = \underbrace{h\,(2\pi r l)\,(T - T_0)}_{\text{lost}}.$$

The length cancels. At the melting point, $T - T_0$ is fixed by the material, so

:::law caption="Fusing current of a wire of given material (end losses neglected)."
$$I^2 \propto r^3, \qquad I \propto r^{3/2}$$
:::

Doubling the radius raises the fusing current by $2^{3/2} \approx 2.83$, not 4. A thick wire has four times the cross-section but only twice the surface per unit length to shed its heat, and only one quarter of the resistance per unit length.

[Inference] In real short fuses, heat also flows out through the end caps, so very short fuse wires blow at somewhat higher currents than this scaling predicts. The $r^{3/2}$ law is the idealisation for a long wire in air.

## Heating with cooling, and thermal runaway {lvl=4 id=s-cooling label="Olympiad"}

Give a resistor heat capacity $C$ and let it lose heat at the rate $k(T - T_0)$ (Newton's law of cooling). With constant power $P$:

$$C\frac{dT}{dt} = P - k(T - T_0).$$

The temperature rises fast at first, then levels off where production equals loss:

$$T - T_0 = \frac{P}{k}\left(1 - e^{-t/\tau}\right),\qquad \tau = \frac{C}{k}.$$

The **steady temperature rise** is $P/k$, reached in a few time constants $\tau$. A big lump (large $C$) takes longer; a well-cooled one (large $k$) settles lower. This is why a kettle with a weak element may never boil: if $P/k < 100\ ^\circ\text{C} - T_0$, the water simply stops warming before it boils.

:::figure caption="Temperature of a heated body that loses heat to its surroundings: an exponential approach to the steady value P/k, with time constant τ = C/k."
<svg viewBox="0 0 360 200" role="img" aria-label="Temperature rise approaching a steady value exponentially">
<line class="axis" x1="40" y1="170" x2="350" y2="170"/><line class="axis" x1="40" y1="170" x2="40" y2="20"/>
<line class="faint" x1="40" y1="40" x2="350" y2="40" style="stroke-dasharray:6 4"/>
<polyline class="ray" style="fill:none" points="40,170 70,118.9 100,87.8 130,69 160,57.5 220,46.5 280,42.3 340,40.9"/>
<line class="faint" x1="40" y1="170" x2="100" y2="40" style="stroke-dasharray:2 3"/>
<line class="faint" x1="100" y1="170" x2="100" y2="87.8" style="stroke-dasharray:2 3"/>
<text x="96" y="186">τ</text><text x="320" y="186">t</text><text x="4" y="44">P/k</text><text x="106" y="92">63%</text><text x="6" y="110">T−T₀</text>
</svg>
:::

The initial slope is $P/C$ (no loss yet): the dotted tangent hits the steady line at $t = \tau$.

**Resistance that changes with temperature.** For metals $R = R_0[1 + \alpha(T - T_0)]$ with $\alpha > 0$. Now it matters whether the source fixes the voltage or the current.

- **Fixed voltage** (mains): $P = V^2/R$ *falls* as the wire warms. Heating slows itself down, so there is always a stable steady state. This is why a filament bulb is self-regulating. The flip side: cold tungsten has more than ten times less resistance than hot, so at switch-on the current surges, and bulbs usually fail at the moment they are switched on.
- **Fixed current**: $P = I^2R_0[1 + \alpha\Delta T]$ *rises* as the wire warms. The steady state needs $k\,\Delta T = I^2R_0(1 + \alpha\Delta T)$, i.e.

$$\Delta T = \frac{I^2R_0}{k - \alpha I^2R_0}.$$

  This has a positive solution only if $\alpha I^2R_0 < k$. Above the critical current $I_c = \sqrt{k/\alpha R_0}$, extra heating outpaces extra cooling and the temperature climbs without limit until something melts: **thermal runaway**.

**Where the energy really flows.** [Beyond NCERT] At the surface of a long straight wire of radius $a$ carrying current $I$, the electric field $E = V/l$ points along the wire and the magnetic field $B = \mu_0 I/2\pi a$ circles it. The Poynting vector $\vec S = \vec E\times\vec B/\mu_0$ points radially **inward**, with magnitude $EI/2\pi a$. Multiply by the surface area $2\pi a l$: the inflow is $EIl = VI$, exactly the Joule heat. The energy reaches the wire from the fields in the space around it, not along the copper from the battery.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Charge falling through a potential difference $V$ gives up $V$ joules per coulomb, which a resistor turns into heat: $H = VIt = I^2Rt = V^2t/R$. {lvl=1}
2. $P = VI = I^2R = V^2/R$; at fixed current larger $R$ heats more, at fixed voltage smaller $R$ heats more. {lvl=1}
3. 1 kW h = 3.6 MJ = one unit on the bill; units = kW × hours. {lvl=1}
4. Heater elements are nichrome, filaments tungsten; a fuse is a low-melting wire in series that melts on overcurrent. {lvl=1}
5. Rated values give $R = V_{\text{rated}}^2/P_{\text{rated}}$; in series the lower-rated bulb glows brighter, in parallel the higher-rated one. {lvl=2}
6. Locally, $p = \vec J\cdot\vec E = \rho J^2$: heat is concentrated where the current is crowded. {lvl=3}
7. Load power peaks at $R = r$ with $P_{\max} = \mathcal E^2/4r$ and 50% efficiency; transmission lines use high voltage to cut $I^2R$ loss. {lvl=3}
8. Fusing current scales as $I \propto r^{3/2}$. {lvl=3}
9. With cooling, $\Delta T \to P/k$ with time constant $C/k$; at fixed current a positive $\alpha$ can cause thermal runaway above $I_c = \sqrt{k/\alpha R_0}$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Convert to kW and hours before computing units; convert to W and seconds before computing joules. {lvl=1}
- "Rated" power is not actual power. First find $R$ from the rating, then use the real voltage or current. {lvl=1}
- Do not say "high resistance means more heat" without saying what is held fixed. {lvl=1}
- Power scales as $V^2$: a 10% voltage drop is a 19% power drop, not 10%. {lvl=2}
- In line-loss problems use $I^2R_\ell$ with $I = P/V$, never $V^2/R_\ell$ with the transmission voltage. {lvl=3}
- Matched load ($R = r$) maximises power, not efficiency. {lvl=3}
- For heating with losses, write an energy balance per second: power in = rate of storage + rate of loss. {lvl=4}
:::
