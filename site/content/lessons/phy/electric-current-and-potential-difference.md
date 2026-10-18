---
title: Electric current and potential difference
summary: "What flows in a wire and what pushes it. Current as charge per second, potential difference as energy per charge, ammeters and voltmeters, circuit symbols, drift velocity (I = nAv_d e), EMF versus terminal voltage, and how energy actually travels from a battery to a bulb."
ncert: ["Class 10 Science · Ch 11 Electricity (§11.1–11.3)"]
up_to: Olympiad
builds_on: [Electric charge, Coulomb's law, Potential]
notes_prompt: Explain why a bulb lights almost the instant you close the switch, even though each electron in the wire crawls along at less than a millimetre per second.
margin:
  - kind: history
    title: History
    text: In 1800 Alessandro Volta stacked zinc and copper discs separated by brine-soaked cardboard and got the first steady current. The volt is named after him; the ampere after André-Marie Ampère, who measured the forces between currents in the 1820s.
  - kind: tip
    title: Board favourite
    text: "Ammeter in series, voltmeter in parallel. An ammeter must let all the current through it, so its resistance is tiny; a voltmeter must take almost none, so its resistance is huge."
  - kind: olympiad
    title: Olympiad link
    text: Energy does not ride along inside the wire with the electrons. It flows through the space around the wire, in the electric and magnetic fields, and enters the wire through its surface (the Poynting vector).
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 32 Electric Current in Conductors (§32.1–32.4, drift speed, EMF)" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism (3rd ed.)", ref: "Ch. 4 Electric currents (§4.1–4.4, 4.9)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · Electric current" }
cards:
  - { front: "Define electric current and its SI unit.", back: "Rate of flow of charge, $I = Q/t$. 1 ampere = 1 coulomb per second." }
  - { front: "Define potential difference and the volt.", back: "Work done per unit charge in moving charge between two points, $V = W/Q$. 1 volt = 1 joule per coulomb." }
  - { front: "How many electrons make one coulomb?", back: "$1/(1.6\\times10^{-19}) = 6.25\\times10^{18}$ electrons." }
  - { front: "Microscopic formula for current?", back: "$I = nAv_d e$: carrier density × area × drift speed × charge per carrier. In copper $v_d$ is typically below 1 mm/s." }
  - { front: "EMF versus terminal voltage of a cell delivering current I?", back: "$V = \\varepsilon - Ir$ while discharging; $V = \\varepsilon + Ir$ while being charged; $V = \\varepsilon$ only when no current flows." }
  - { front: "Where does the energy travel from battery to bulb?", back: "Through the fields around the wires: the Poynting vector $\\vec S = \\vec E\\times\\vec B/\\mu_0$ points into a resistor's surface and carries exactly $VI$ per second." }
core:
  idea: 'Current is the rate of flow of charge, $I = Q/t$, and potential difference is energy per unit charge, $V = W/Q$. In a steady current charge does not pile up, so a series loop carries one current, and $I = nAv_de$ links it to the drifting carriers.'
  formulas:
    - tex: 'I = \frac{Q}{t}'
      label: 'Current'
    - tex: 'V = \frac{W}{Q}'
      label: 'Potential difference'
    - tex: 'I = nAv_d e'
      label: 'Microscopic current'
  conditions:
    - 'Steady current: no charge accumulates anywhere in the circuit'
    - 'Ideal ammeter of zero resistance in series; ideal voltmeter of infinite resistance in parallel'
    - 'Cell treated as an ideal source of fixed potential difference unless internal resistance is included'
  sign: 'Conventional current flows from + to − outside the cell, opposite to the electron drift in a metal. Terminal voltage is ε − Ir while discharging but ε + Ir while charging.'
outcomes:
  - 'Calculate current, charge and number of electrons using I = Q/t'
  - 'Calculate energy and power from V = W/Q and P = VI'
  - 'Connect ammeters and voltmeters correctly and read circuit symbols'
  - 'Use I = nAv_d e to find drift speed, and explain why a bulb lights instantly'
  - 'Apply EMF, terminal voltage and internal resistance, and explain energy flow by the Poynting vector'
---

:::hook
q: A torch bulb is 10 cm of copper wire away from its cell. The current is 0.3 A in a wire of cross-section 0.5 mm². How long does one particular electron take to travel from the cell to the bulb?
options: ["About a billionth of a second", "About one second", "More than half an hour"]
answer: 2
right: Right. The electrons drift at only about 0.04 mm/s, so 10 cm takes roughly 38 minutes. Yet the bulb lights at once. This lesson explains both facts.
wrong: Surprisingly, it is more than half an hour. The electrons drift at only about 0.04 mm/s. The bulb lights at once for a different reason, which this lesson explains.
:::

## What flows: electric current {lvl=1 id=s-current label="Class 10"}

A wire looks the same whether a current flows in it or not. What changes is invisible: charge is moving through it. In a metal, the outer electron of each atom is not tied to that atom; it wanders through the whole metal. These **free electrons** are what move.

To measure a flow, count how much passes a point each second, just as a river's flow is measured in litres per second. For charge:

:::law caption="Q is the net charge passing any cross-section in time t."
$$I = \frac{Q}{t}$$
:::

The SI unit of charge is the **coulomb** (C), so the unit of current is the coulomb per second, called the **ampere** (A). An electron carries $1.6\times10^{-19}$ C, so one coulomb is

$$\frac{1}{1.6\times10^{-19}} = 6.25\times10^{18}\ \text{electrons}.$$

A current of 1 A means about six billion billion electrons cross the wire every second. Small currents are given in milliamperes (1 mA = $10^{-3}$ A) and microamperes (1 µA = $10^{-6}$ A).

**Direction.** Benjamin Franklin and others fixed the sign convention long before the electron was discovered (1897). They chose current to flow from the **positive** terminal round the circuit to the **negative** terminal, as if positive charges were moving. We now know that in metals it is the negative electrons that move, the other way. Nothing is lost: negative charge moving left carries charge the same way as positive charge moving right. So **conventional current** is still drawn from + to −, opposite to the electron flow.

:::figure caption="In a metal wire, free electrons drift towards the + terminal. Conventional current is drawn the other way."
<svg viewBox="0 0 360 150" role="img" aria-label="Electrons drifting left in a wire while conventional current points right">
<rect class="m2" x="30" y="55" width="300" height="40" style="stroke:var(--ink);stroke-width:1.2"/>
<g style="fill:var(--chem)"><circle cx="70" cy="68" r="5"/><circle cx="115" cy="82" r="5"/><circle cx="160" cy="66" r="5"/><circle cx="205" cy="84" r="5"/><circle cx="250" cy="70" r="5"/><circle cx="295" cy="80" r="5"/></g>
<g class="ln"><line x1="62" y1="68" x2="50" y2="68"/><line x1="107" y1="82" x2="95" y2="82"/><line x1="152" y1="66" x2="140" y2="66"/><line x1="197" y1="84" x2="185" y2="84"/><line x1="242" y1="70" x2="230" y2="70"/><line x1="287" y1="80" x2="275" y2="80"/></g>
<line class="ray" x1="110" y1="32" x2="250" y2="32"/><path d="M250 26 L262 32 L250 38 Z" style="fill:var(--phy)"/>
<text class="k" x="130" y="22">conventional current I</text>
<line class="gr" x1="250" y1="118" x2="110" y2="118"/><path d="M110 112 L98 118 L110 124 Z" style="fill:var(--muted)"/>
<text x="132" y="140">electron drift</text>
<text class="k" x="8" y="80">+</text><text class="k" x="340" y="80">−</text>
</svg>
:::

:::qc
q: A charge of 30 C passes through a lamp in one minute. What is the current?
options: ["30 A", "0.5 A", "2 A", "1800 A"]
answer: 1
right: Right. One minute is 60 s, so I = 30/60 = 0.5 A.
wrong: Convert the time to seconds first. I = Q/t = 30 C / 60 s.
:::

## What pushes: potential difference {lvl=1 id=s-pd label="Class 10"}

Free electrons in a wire on its own move about at random, so no net charge crosses any section and there is no current. Something has to push them steadily one way. In a water pipe, water flows only if there is a difference of pressure or height between the ends. In a circuit, charge flows only if there is a **difference of electric potential** between the ends of the conductor.

A cell creates this difference. Chemical reactions inside it pile up extra electrons on the negative terminal and remove them from the positive one. Charges in the external wire then feel an electric force and drift. The chemical energy of the cell is spent keeping the difference going.

Potential difference measures this push as **energy per unit charge**: how much work is done on each coulomb as it moves from one point to the other.

:::law caption="W is the work done moving charge Q from one point to the other."
$$V = \frac{W}{Q}$$
:::

The unit is the joule per coulomb, called the **volt** (V). A potential difference of 1 V between two points means 1 J of work is done moving 1 C between them. A 1.5 V cell gives each coulomb 1.5 J; a 230 V mains supply gives each coulomb 230 J. That is why the mains is dangerous and a torch cell is not: each coulomb that flows through you carries far more energy.

:::figure caption="The water analogy. The pump (battery) lifts water (charge) to a height (potential); the water does work on the wheel (lamp) as it falls back. Flow rate corresponds to current."
<svg viewBox="0 0 360 210" role="img" aria-label="Water circuit: a pump raises water to a high tank, water flows down through a pipe turning a wheel and back to a low tank">
<rect class="m2" x="20" y="30" width="90" height="40" style="stroke:var(--ink);stroke-width:1.2"/>
<rect class="m2" x="250" y="150" width="90" height="40" style="stroke:var(--ink);stroke-width:1.2"/>
<polyline class="ln" points="110,55 200,55 200,120 270,120 270,150" style="stroke-width:3"/>
<circle class="ln" cx="200" cy="90" r="16"/><line class="ln" x1="184" y1="90" x2="216" y2="90"/><line class="ln" x1="200" y1="74" x2="200" y2="106"/>
<polyline class="ln" points="250,185 60,185 60,70" style="stroke-width:3"/>
<rect x="45" y="120" width="30" height="34" style="fill:var(--surface);stroke:var(--chem);stroke-width:2"/>
<text class="k" x="48" y="141">pump</text>
<line class="ray" x1="140" y1="45" x2="180" y2="45"/><text x="128" y="40">flow</text>
<line class="faint" x1="10" y1="50" x2="10" y2="170"/><text x="14" y="104">h</text>
<text x="22" y="22">high tank (high potential)</text>
<text x="222" y="204">low tank (low potential)</text>
<text x="222" y="84">wheel = lamp</text>
<text x="84" y="134">= battery</text>
</svg>
:::

The analogy is good for the basic picture: the battery is a pump, not a store of water. Charge is not used up as it goes round; it is the **energy per charge** that falls from the + terminal side to the − terminal side. The same current comes back to the battery as left it.

:::qc
q: A 12 V battery drives 2 C of charge round a circuit. How much energy does it supply?
options: ["6 J", "14 J", "24 J", "0.17 J"]
answer: 2
right: Right. W = VQ = 12 × 2 = 24 J.
wrong: Potential difference is energy per coulomb, so W = VQ = 12 V × 2 C.
:::

## Measuring current and voltage; circuit symbols {lvl=1 id=s-meters label="Class 10"}

An **ammeter** measures the current *through* a component, so the same charge that passes the component must pass the meter. It goes **in series**, in the same loop. To avoid reducing the very current it measures, an ammeter has a very small resistance.

A **voltmeter** compares the potential at *two points*, so its two terminals go to those two points: **in parallel** across the component. It should draw almost no current, otherwise it changes the circuit; so its resistance is very large.

:::figure caption="A cell, key, ammeter and bulb in series. The voltmeter is connected in parallel across the bulb."
<svg viewBox="0 0 360 225" role="img" aria-label="Circuit with cell, key, ammeter in series with a bulb, and a voltmeter across the bulb">
<g class="ln">
<line x1="40" y1="40" x2="165" y2="40"/><line x1="175" y1="40" x2="320" y2="40"/>
<line x1="320" y1="40" x2="320" y2="92"/><line x1="320" y1="118" x2="320" y2="170"/>
<line x1="320" y1="170" x2="192" y2="170"/><line x1="168" y1="170" x2="40" y2="170"/>
<line x1="40" y1="170" x2="40" y2="125"/><line x1="40" y1="85" x2="40" y2="40"/>
<line x1="40" y1="125" x2="58" y2="92"/>
<circle cx="320" cy="105" r="13"/><circle cx="180" cy="170" r="12"/>
<line x1="171.5" y1="161.5" x2="188.5" y2="178.5"/><line x1="188.5" y1="161.5" x2="171.5" y2="178.5"/>
<polyline points="145,170 145,205 168,205"/><polyline points="192,205 215,205 215,170"/>
<circle cx="180" cy="205" r="12"/>
</g>
<line x1="165" y1="24" x2="165" y2="56" style="stroke:var(--ink);stroke-width:1.6"/>
<line x1="175" y1="31" x2="175" y2="49" style="stroke:var(--ink);stroke-width:4"/>
<circle class="obj" cx="40" cy="125" r="3"/><circle class="obj" cx="40" cy="85" r="3"/>
<circle cx="145" cy="170" r="3" style="fill:var(--ink)"/><circle cx="215" cy="170" r="3" style="fill:var(--ink)"/>
<text class="k" x="315" y="109">A</text><text class="k" x="175" y="209">V</text>
<text class="k" x="152" y="20">+</text><text class="k" x="180" y="20">−</text>
<text x="10" y="110">K</text><text x="200" y="158">bulb</text>
<text x="244" y="108">ammeter</text><text x="226" y="216">voltmeter</text>
<line class="ray" x1="230" y1="30" x2="270" y2="30"/><path d="M270 25 L280 30 L270 35 Z" style="fill:var(--phy)"/><text x="232" y="22">I</text>
</svg>
:::

Circuit diagrams use standard symbols so that anyone can read them. The long thin line of a cell is its **positive** terminal.

:::figure caption="Commonly used circuit symbols (NCERT Class 10, Table 11.1)."
<svg viewBox="0 0 360 290" role="img" aria-label="Table of circuit symbols: cell, battery, open and closed key, joint, crossing wires, bulb, resistor, rheostat, ammeter, voltmeter">
<g class="ln">
<line x1="10" y1="25" x2="38" y2="25"/><line x1="46" y1="25" x2="74" y2="25"/>
<line x1="190" y1="25" x2="206" y2="25"/><line x1="214" y1="25" x2="222" y2="25" style="stroke-dasharray:2 2"/><line x1="230" y1="25" x2="246" y2="25"/>
<line x1="10" y1="80" x2="30" y2="80"/><line x1="54" y1="80" x2="74" y2="80"/><circle cx="34" cy="80" r="3"/><circle cx="50" cy="80" r="3"/>
<line x1="190" y1="80" x2="210" y2="80"/><line x1="226" y1="80" x2="246" y2="80"/><circle cx="214" cy="80" r="3"/><circle cx="222" cy="80" r="3"/><line x1="214" y1="74" x2="222" y2="74" style="stroke-width:3"/>
<line x1="10" y1="135" x2="74" y2="135"/><line x1="42" y1="115" x2="42" y2="155"/>
<line x1="190" y1="135" x2="246" y2="135"/><path d="M218 115 L218 129 A6 6 0 0 1 218 141 L218 155"/>
<line x1="10" y1="190" x2="30" y2="190"/><line x1="54" y1="190" x2="74" y2="190"/><circle cx="42" cy="190" r="12"/><line x1="33.5" y1="181.5" x2="50.5" y2="198.5"/><line x1="50.5" y1="181.5" x2="33.5" y2="198.5"/>
<polyline points="190,190 200,190 204,182 212,198 220,182 228,198 234,190 246,190"/>
<polyline points="10,245 20,245 24,237 32,253 40,237 48,253 54,245 74,245"/><line x1="22" y1="260" x2="56" y2="230"/>
<line x1="190" y1="245" x2="206" y2="245"/><line x1="230" y1="245" x2="246" y2="245"/><circle cx="218" cy="245" r="12"/>
<line x1="10" y1="280" x2="30" y2="280"/><line x1="54" y1="280" x2="74" y2="280"/>
</g>
<path d="M56 230 L49 232 L53 237 Z" style="fill:var(--ink)"/>
<line x1="38" y1="12" x2="38" y2="38" style="stroke:var(--ink);stroke-width:1.6"/><line x1="46" y1="18" x2="46" y2="32" style="stroke:var(--ink);stroke-width:4"/>
<line x1="206" y1="12" x2="206" y2="38" style="stroke:var(--ink);stroke-width:1.6"/><line x1="214" y1="18" x2="214" y2="32" style="stroke:var(--ink);stroke-width:4"/>
<line x1="222" y1="12" x2="222" y2="38" style="stroke:var(--ink);stroke-width:1.6"/><line x1="230" y1="18" x2="230" y2="32" style="stroke:var(--ink);stroke-width:4"/>
<circle cx="42" cy="135" r="3.5" style="fill:var(--ink)"/>
<text class="k" x="213" y="249">A</text>
<text x="84" y="29">cell</text><text x="256" y="29">battery</text>
<text x="84" y="84">key/switch open</text><text x="256" y="84">key closed</text>
<text x="84" y="139">wire joint</text><text x="256" y="139">wires crossing,</text><text x="256" y="152">no joint</text>
<text x="84" y="194">bulb</text><text x="256" y="194">resistor</text>
<text x="84" y="249">rheostat</text><text x="256" y="249">ammeter</text>
<text x="84" y="284">voltmeter</text>
<circle class="ln" cx="42" cy="280" r="9"/><text class="k" x="38" y="284">V</text>
</svg>
:::

:::qc
q: A student connects a voltmeter in series with a bulb and a cell. What happens?
options: ["The bulb glows normally and the voltmeter reads its voltage", "The bulb hardly glows, because the voltmeter's huge resistance almost stops the current", "The voltmeter burns out"]
answer: 1
right: Right. A voltmeter has a very large resistance. In series it chokes the current, so the bulb barely glows and the meter reads nearly the full cell voltage.
wrong: A voltmeter has a very large resistance. Put in series, it almost stops the current, so the bulb barely glows.
:::

## Charge is conserved: the same current all round {lvl=2 id=s-continuity label="Class 12"}

Why does the ammeter read the same wherever it is placed in a single loop? Because charge is neither created nor destroyed, and in a steady current it does not pile up anywhere. If 2 C entered a bulb each second but only 1.9 C left, the bulb would gain 0.1 C every second, and its rising charge would quickly repel further charge and stop the current. In the steady state, **charge in = charge out** for every piece of the circuit.

So in a series loop the current is the same at every point, including inside the battery. At a junction where wires split, the currents in the branches add up to the current arriving. This is Kirchhoff's **junction rule**, which you will use to solve every circuit.

A bulb does not "use up" current. What it uses is **energy**: each coulomb arrives at a higher potential than it leaves, and the difference $V$ joules per coulomb is turned into heat and light. Energy per second is then

$$P = \frac{W}{t} = \frac{VQ}{t} = VI.$$

:::qc
q: A bulb and a resistor are in series with a cell. The ammeter before the bulb reads 0.40 A. What does an ammeter between the bulb and the resistor read?
options: ["Less than 0.40 A, because the bulb used some", "0.40 A", "More than 0.40 A"]
answer: 1
right: Right. In a single loop the current is the same everywhere. The bulb takes energy from the charges, not charge.
wrong: Charge is conserved and does not accumulate in a steady current, so the same 0.40 A flows everywhere in a series loop.
:::

## Inside the wire: drift velocity {lvl=2 id=s-drift label="Class 12"}

Now count the charge that crosses a section of wire. Suppose the wire has cross-section $A$, contains $n$ free electrons per cubic metre, and they all move along it at an average speed $v_d$, the **drift speed**.

In time $t$ each electron moves a distance $v_d t$. So every electron within that distance behind the cross-section gets through it: all those in a cylinder of volume $A v_d t$.

:::figure caption="In time t, all carriers within a length v_d t of the shaded cross-section pass through it."
<svg viewBox="0 0 360 160" role="img" aria-label="Cylinder of length v_d t and area A in a wire">
<line class="ln" x1="20" y1="40" x2="340" y2="40"/><line class="ln" x1="20" y1="110" x2="340" y2="110"/>
<ellipse class="faint" cx="110" cy="75" rx="14" ry="35"/>
<ellipse cx="250" cy="75" rx="14" ry="35" style="fill:color-mix(in srgb, var(--phy) 18%, transparent);stroke:var(--phy);stroke-width:1.6"/>
<g style="fill:var(--chem)"><circle cx="135" cy="60" r="4"/><circle cx="160" cy="88" r="4"/><circle cx="185" cy="58" r="4"/><circle cx="205" cy="92" r="4"/><circle cx="228" cy="70" r="4"/><circle cx="150" cy="72" r="4"/><circle cx="215" cy="52" r="4"/></g>
<line class="gr" x1="110" y1="132" x2="250" y2="132"/><line class="gr" x1="110" y1="126" x2="110" y2="138"/><line class="gr" x1="250" y1="126" x2="250" y2="138"/>
<text class="k" x="160" y="150">v_d t</text><text class="k" x="262" y="62">A</text>
<line class="ray" x1="140" y1="22" x2="220" y2="22"/><path d="M220 17 L230 22 L220 27 Z" style="fill:var(--phy)"/><text x="236" y="26">drift (positive carriers)</text>
</svg>
:::

The number of carriers in that cylinder is $nAv_dt$, each with charge $e$, so $Q = nAv_d t\,e$ and

:::law caption="n = carriers per m³, A = cross-section, v_d = drift speed, e = charge per carrier. The current density is j = I/A = n e v_d."
$$I = nAv_d e$$
:::

**Numbers for copper.** Copper has one free electron per atom. Its density is 8960 kg/m³ and its molar mass 63.5 g/mol, so

$$n = \frac{8960}{0.0635}\times6.02\times10^{23} \approx 8.5\times10^{28}\ \text{m}^{-3}.$$

For 1 A in a wire of cross-section 1 mm² $=10^{-6}$ m²:

$$v_d = \frac{I}{nAe} = \frac{1}{8.5\times10^{28}\times10^{-6}\times1.6\times10^{-19}} \approx 7.4\times10^{-5}\ \text{m/s},$$

about 0.07 mm/s, slower than a snail. An electron would need almost four hours to travel one metre. The current is large not because electrons are fast but because there are so many of them: $8.5\times10^{28}$ per cubic metre.

:::qc
q: The same current flows through a thick copper wire and then a thin copper wire of half the diameter. How does the drift speed in the thin wire compare?
options: ["The same", "Twice as fast", "Four times as fast", "Half as fast"]
answer: 2
right: Right. I and n are the same, so v_d ∝ 1/A. Half the diameter means a quarter of the area, so four times the drift speed.
wrong: From I = nAv_d e, with I and n fixed, v_d ∝ 1/A, and A ∝ d². Halving d quarters A.
:::

## Random motion, the Drude picture and why the bulb lights at once {lvl=3 id=s-drude label="JEE"}

The drift speed is a tiny average on top of a violent random motion. Even with no current, the free electrons in copper move at about $1.6\times10^6$ m/s in random directions (a quantum effect; the classical thermal estimate $\sqrt{3kT/m}\approx1.2\times10^5$ m/s at room temperature is smaller but still huge). Averaged over all electrons, these random velocities cancel, so they carry no current.

Apply an electric field $E$ along the wire. Between collisions with the lattice, each electron accelerates at $a = eE/m$ opposite to the field. Collisions randomise its velocity again, so it never gains much. If the average time between collisions is $\tau$, the average extra velocity is

$$v_d = \frac{eE}{m}\tau.$$

This is the **Drude model** (1900). For copper $\tau\approx2.5\times10^{-14}$ s. In the 1 A, 1 mm² wire above, the field is only about 0.017 V/m, giving $v_d = (1.6\times10^{-19}\times0.017/9.11\times10^{-31})\times2.5\times10^{-14}\approx7\times10^{-5}$ m/s, matching the count from $I = nAv_de$. Since $v_d\propto E$, the current is proportional to the voltage: this is the origin of Ohm's law, taken up in the next leaf.

**Why the bulb lights at once.** Closing the switch does not send electrons racing from the cell to the bulb. The wire is already full of free electrons, like a pipe already full of water. What travels is the **change in the electric field**: within nanoseconds the field is set up along the whole circuit, and electrons everywhere, including those already inside the bulb's filament, start drifting together. The signal moves at a large fraction of the speed of light (typically 0.6–0.9 c along a cable).

With AC mains at 50 Hz the electrons do not even make progress: they oscillate back and forth through a few micrometres. Energy reaches your devices all the same, which shows that the energy is not carried by electrons travelling from the power station.

:::qc
q: Doubling the potential difference across a given copper wire (at fixed temperature) does what to the drift speed?
options: ["Leaves it unchanged; it is set by temperature", "Doubles it", "Quadruples it"]
answer: 1
right: Right. Doubling V doubles E inside the wire, and v_d = eEτ/m with τ unchanged, so v_d doubles and so does the current.
wrong: The drift speed is v_d = eEτ/m. The field E = V/L doubles, τ is fixed, so v_d doubles.
:::

## EMF and terminal voltage {lvl=3 id=s-emf label="JEE"}

Inside a battery, the conventional current goes from the − terminal to the + terminal, *against* the electrostatic push. Some other agent must do that work: in a cell it is chemistry, in a dynamo it is magnetic force, in a solar cell it is light. The work this agent does per unit charge carried from − to + inside the source is the **electromotive force** (EMF), $\varepsilon$:

$$\varepsilon = \frac{W_{\text{non-electrostatic}}}{q}.$$

Despite the name, EMF is not a force; it is measured in volts.

A real cell also has **internal resistance** $r$: the electrolyte resists the flow. Some of the EMF is used up driving current through the cell itself, so the potential difference you measure across the terminals while current $I$ flows is less than the EMF:

:::law caption="Discharging cell. When the cell is being charged (current forced in at +), V = ε + Ir."
$$V = \varepsilon - Ir$$
:::

:::figure caption="A real cell: an ideal EMF ε in series with an internal resistance r, inside the dashed box. A voltmeter at the terminals reads V = ε − Ir."
<svg viewBox="0 0 360 190" role="img" aria-label="Cell modelled as EMF in series with internal resistance, connected to external resistor R">
<rect x="60" y="20" width="240" height="60" style="fill:none;stroke:var(--muted);stroke-dasharray:5 4"/>
<g class="ln">
<line x1="30" y1="50" x2="100" y2="50"/><line x1="110" y1="50" x2="170" y2="50"/>
<polyline points="170,50 180,50 185,40 195,60 205,40 215,60 220,50 230,50"/>
<line x1="230" y1="50" x2="330" y2="50"/>
<line x1="30" y1="50" x2="30" y2="160"/><line x1="330" y1="50" x2="330" y2="160"/>
<line x1="30" y1="160" x2="140" y2="160"/><line x1="220" y1="160" x2="330" y2="160"/>
<polyline points="140,160 150,160 155,150 165,170 175,150 185,170 195,150 205,170 210,160 220,160"/>
</g>
<line x1="100" y1="34" x2="100" y2="66" style="stroke:var(--ink);stroke-width:1.6"/>
<line x1="110" y1="41" x2="110" y2="59" style="stroke:var(--ink);stroke-width:4"/>
<circle cx="30" cy="50" r="3.5" style="fill:var(--ink)"/><circle cx="330" cy="50" r="3.5" style="fill:var(--ink)"/>
<text class="k" x="98" y="94">ε</text><text class="k" x="196" y="94">r</text><text class="k" x="176" y="186">R</text>
<text class="k" x="16" y="40">+</text><text class="k" x="336" y="40">−</text>
<text x="200" y="14">real cell</text>
<line class="ray" x1="230" y1="140" x2="130" y2="140"/><path d="M130 135 L120 140 L130 145 Z" style="fill:var(--phy)"/><text x="172" y="134">I</text>
</svg>
:::

When no current flows, $Ir = 0$ and a voltmeter reads the EMF itself. That is why the EMF is called the "open-circuit voltage".

:::worked title="Worked example: why headlights dim when you start a car"
A car battery has EMF 12.6 V and internal resistance 0.020 Ω. The starter motor draws 150 A.

Terminal voltage: $V = \varepsilon - Ir = 12.6 - 150\times0.020 = 12.6 - 3.0 = 9.6$ V.

The headlights, connected across the same terminals, suddenly get 9.6 V instead of about 12.6 V, so they dim. Power wasted inside the battery: $I^2r = 150^2\times0.020 = 450$ W, which is why cranking for a long time warms the battery.
:::

The energy bookkeeping per second is $\varepsilon I = VI + I^2 r$: the source converts $\varepsilon I$ joules per second; $VI$ goes to the external circuit and $I^2r$ heats the cell.

:::qc
q: A cell of EMF 1.5 V gives a terminal voltage of 1.2 V while supplying 0.6 A. What is its internal resistance?
options: ["0.2 Ω", "0.5 Ω", "2.0 Ω", "2.5 Ω"]
answer: 1
right: Right. Ir = ε − V = 0.3 V, so r = 0.3/0.6 = 0.5 Ω.
wrong: Use V = ε − Ir: Ir = 1.5 − 1.2 = 0.3 V, and r = 0.3 V / 0.6 A.
:::

## How energy really travels: surface charges and the Poynting vector {lvl=4 id=s-poynting label="Olympiad"}

Two puzzles remain. First, what makes the field inside a wire point *along* the wire, even round bends? The battery's charges alone would produce a field pointing roughly straight from + to −, cutting across the circuit. The answer is **surface charge**. When the circuit is closed, a tiny amount of charge redistributes itself on the surfaces of the wires, with a gradient from more positive near the + terminal to more negative near the − terminal. Wherever the field is not along the wire, charge accumulates on the surface until it is: the system is self-correcting, and the transient lasts nanoseconds. The surface charges needed are minute, far less than an electron per atom of surface.

Second, where does the energy flow? Use the energy-flux density of the electromagnetic field, the **Poynting vector**

$$\vec S = \frac{1}{\mu_0}\vec E\times\vec B,$$

in watts per square metre. Take a straight resistive wire of radius $a$ and length $L$ with current $I$ and potential difference $V$ across it. Inside and at the surface, the electric field is along the wire, $E = V/L$. The magnetic field at the surface circles the wire, $B = \mu_0 I/(2\pi a)$. These are perpendicular, and by the right-hand rule $\vec E\times\vec B$ points **radially inward**, with magnitude

$$S = \frac{1}{\mu_0}\cdot\frac{V}{L}\cdot\frac{\mu_0 I}{2\pi a} = \frac{VI}{2\pi a L}.$$

Multiply by the curved surface area $2\pi aL$: the total power flowing into the wire through its sides is exactly $VI$, the Joule heating. Near a battery the surface charges and current make $\vec S$ point *outward*: the battery emits energy into the surrounding fields, which guide it along the wires and into the resistors. The electrons are the agents that let the field do its work in the conductor; they are not the delivery trucks.

:::note title="A consistency check, not a paradox" tone=olympiad
For an ideal (zero-resistance) connecting wire, $E$ along it is zero, so $\vec S$ has no inward part: no energy enters the wire, consistent with no heat produced. The flux runs *parallel* to such a wire, in the space around it. This picture is standard (Feynman Lectures Vol. II §27-5; Purcell and Morin) and is what the hook's "instant" bulb really means: the energy arrives at the speed the fields establish themselves.
:::

:::qc
q: A straight resistor wire carries steady current. Which way does the Poynting vector point just outside its curved surface?
options: ["Along the wire, in the direction of the current", "Radially into the wire", "Radially out of the wire"]
answer: 1
right: Right. E is along the wire and B circles it, so E × B points radially inward. Power VI flows in through the surface and becomes heat.
wrong: E is along the wire and B circles it (right-hand rule). E × B then points radially inward, bringing energy VI into the resistor.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Current is the rate of flow of charge: $I = Q/t$; 1 A = 1 C/s; 1 C = $6.25\times10^{18}$ electrons. {lvl=1}
2. Conventional current flows from + to − outside the cell, opposite to the electron drift in metals. {lvl=1}
3. Potential difference is work per unit charge: $V = W/Q$; 1 V = 1 J/C. {lvl=1}
4. Ammeter in series (low resistance); voltmeter in parallel (high resistance). The long line of a cell symbol is +. {lvl=1}
5. In a steady current, charge does not pile up: the same current everywhere in a series loop, and currents add at a junction. Components use energy, not charge. {lvl=2}
6. $I = nAv_de$; in copper $n\approx8.5\times10^{28}$ m⁻³ and $v_d$ is a fraction of a mm/s. {lvl=2}
7. Drude: $v_d = eE\tau/m$, so current is proportional to field; the signal travels at near light speed, not the electrons. {lvl=3}
8. EMF is non-electrostatic work per charge; terminal voltage $V = \varepsilon - Ir$ discharging, $\varepsilon + Ir$ charging. {lvl=3}
9. Energy flows through the fields around the wires; $\vec S = \vec E\times\vec B/\mu_0$ delivers exactly $VI$ into a resistor through its surface. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Convert minutes and hours to seconds before using $I = Q/t$; convert mA h to coulombs with 1 A h = 3600 C. {lvl=1}
- "Electrons flow from − to +" and "current flows from + to −" are both right; do not mix them in one answer. {lvl=1}
- A voltmeter in series, or an ammeter in parallel, is the classic wiring error: the first chokes the current, the second short-circuits the component. {lvl=1}
- Current is not used up by a bulb; energy is. {lvl=2}
- For drift speed, $v_d\propto1/A\propto1/d^2$ at fixed current; at fixed voltage across a wire of fixed length, $v_d$ does not depend on $A$ at all. {lvl=2}
- Terminal voltage equals EMF only when the cell supplies no current. If a question gives the voltage "across the cell" while current flows, it is $V$, not $\varepsilon$. {lvl=3}
- Signal speed (≈ c), random speed (≈ $10^6$ m/s) and drift speed (≈ $10^{-4}$ m/s) are three different things. {lvl=3}
:::
