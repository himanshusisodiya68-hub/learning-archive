---
title: Transformers and power transmission
summary: How two coils sharing one flux trade voltage for current. The turns ratio from Faraday's law, why an idle transformer draws almost nothing, the current ratio from energy and from flux balance, reflected impedance and matching, the four losses and the condition for maximum efficiency, why power travels at high voltage, the autotransformer, a transformer on dc, switch-on inrush, and the coupled-circuit model.
ncert: ["Class 12 Physics · Ch 7 Alternating Current (§7.8)"]
up_to: Olympiad
builds_on: [Self and mutual inductance, Alternating current, Magnetic materials, Heating effect and power, Resistance and resistivity]
notes_prompt: Explain in your own words why connecting a heavier load to the secondary makes the primary draw more current, even though the two windings are not connected by any wire.
margin:
  - kind: history
    title: History
    text: "Faraday's 1831 induction ring, two coils wound on one iron ring, was in effect the first transformer. Practical closed-core power transformers came from the Ganz works in Budapest (Zipernowsky, Bláthy and Déri) around 1884–85 and from William Stanley in the USA in 1886. [Unverified: names and dates recalled from memory.]"
  - kind: tip
    title: Two ratios, opposite ways
    text: "Voltage goes with turns, V_s/V_p = N_s/N_p. Current goes against turns, I_s/I_p = N_p/N_s. Impedance goes with the square. If you are unsure which way, check that V × I comes out the same on both sides."
  - kind: olympiad
    title: Olympiad link
    text: "A transformer with perfect coupling but finite primary inductance L_p behaves exactly like an ideal transformer with L_p in parallel across its primary. Most 'real transformer' puzzles become circuit problems once you draw that model."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 7 Alternating Current, §7.8 Transformers" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 39 Alternating Current (transformer) [Unverified chapter number]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. II", ref: "Ch. 16 Induced Currents (transformers and inductances) [Unverified section]" }
cards:
  - { front: "Ideal transformer: voltage, current and impedance ratios?", back: "$V_s/V_p = N_s/N_p$; $I_s/I_p = N_p/N_s$; a load $R$ on the secondary looks like $R\\,(N_p/N_s)^2$ to the source." }
  - { front: "Why does an unloaded transformer draw almost no current?", back: "The changing core flux induces a back-emf in the primary almost equal to the supply voltage. Only a small magnetising current $V/(\\omega L_p)$ flows, lagging by 90°, so it takes almost no power." }
  - { front: "Why does the core flux not change when load is added?", back: "The flux is fixed by the supply: $V_p = N_p\\,d\\Phi/dt$. When the secondary current tries to reduce the flux, the primary draws extra current so that $N_pI_p' = N_sI_s$." }
  - { front: "Four losses in a real transformer, and the cure for each?", back: "Copper ($I^2R$; thick wire), eddy currents (laminated core), hysteresis (soft iron with a thin loop), flux leakage (windings on top of each other, closed core)." }
  - { front: "Condition for maximum efficiency?", back: "Copper loss = iron (core) loss. Iron loss is fixed; copper loss grows as $I^2$." }
  - { front: "Line loss when power P is sent at voltage V through line resistance R?", back: "$P_{loss} = I^2R = P^2R/V^2$. Raising V by a factor n cuts the loss by $n^2$." }
---

:::hook
q: The primary winding of a transformer has a resistance of only 1 Ω. You connect it to the 230 V ac mains and leave the secondary open. About how much current does it draw?
options: ["About 230 A, from Ohm's law", "Well under 1 A, because the changing flux induces a back-emf almost equal to 230 V", "Exactly zero, because the secondary is open", "About 230 A for an instant, then zero"]
answer: 1
right: Right. The winding sits on an iron core, so it is a large inductor. The alternating current sets up an alternating flux, and that flux induces an emf in the primary itself that almost cancels the supply. Only the small current needed to keep the flux going flows.
wrong: Ohm's law with 1 Ω would give 230 A, and that is exactly what happens on dc (and the winding burns). On ac, the changing core flux induces a back-emf in the primary almost equal to the supply voltage, so only a small magnetising current flows, typically well under 1 A.
:::

## Why change voltages at all? {lvl=2 id=s-why label="Class 12"}

A power station's generators produce a few thousand to a few tens of thousands of volts. Your phone wants about 5 V. A lamp wants 230 V. The long lines between them want hundreds of thousands of volts. No single voltage suits everyone.

The reason the lines want a high voltage is simple. A power $P = VI$ can be delivered as a large voltage with a small current, or a small voltage with a large current. The wires waste $I^2R$ as heat. So for the same power, a smaller current wastes far less. You will see the numbers in the section on power transmission.

What we need is a device that converts a voltage $V_1$ at current $I_1$ into a voltage $V_2$ at current $I_2$, with $V_1I_1 \approx V_2I_2$, and with no moving parts. That device is the **transformer**. It works only with changing currents, which is one big reason the world's grids run on ac.

## One flux, two windings: the turns ratio {lvl=2 id=s-how label="Class 12"}

A transformer is two coils of insulated wire wound on one closed iron core. The coil connected to the supply is the **primary** ($N_p$ turns). The coil connected to the load is the **secondary** ($N_s$ turns). There is no wire between them. They are linked only by magnetic flux.

:::figure caption="Two windings on one closed iron core. The primary (left, 8 turns drawn) carries an alternating current; the core guides almost all of the resulting flux Φ round the loop, so the same Φ threads every turn of the secondary (right, 4 turns drawn). This one is a 2 : 1 step-down transformer."
<svg viewBox="0 0 320 200" role="img" aria-label="Square iron core with a primary coil on the left limb connected to an ac source, a secondary coil on the right limb connected to a resistor, and a dashed loop showing the flux path round the core">
<path d="M90 30 H230 V170 H90 Z M120 60 V140 H200 V60 Z" style="fill:var(--muted);fill-opacity:.25;fill-rule:evenodd;stroke:var(--muted);stroke-width:1"/>
<rect class="faint" x="105" y="45" width="110" height="110" style="fill:none;stroke-dasharray:4 4"/>
<text class="k" x="152" y="40">Φ</text>
<path d="M150 45 l8 -4 l0 8 z" style="fill:var(--muted)"/>
<line x1="84" y1="72" x2="126" y2="76" style="stroke:var(--phy);stroke-width:2"/>
<line x1="84" y1="80" x2="126" y2="84" style="stroke:var(--phy);stroke-width:2"/>
<line x1="84" y1="88" x2="126" y2="92" style="stroke:var(--phy);stroke-width:2"/>
<line x1="84" y1="96" x2="126" y2="100" style="stroke:var(--phy);stroke-width:2"/>
<line x1="84" y1="104" x2="126" y2="108" style="stroke:var(--phy);stroke-width:2"/>
<line x1="84" y1="112" x2="126" y2="116" style="stroke:var(--phy);stroke-width:2"/>
<line x1="84" y1="120" x2="126" y2="124" style="stroke:var(--phy);stroke-width:2"/>
<line x1="84" y1="128" x2="126" y2="132" style="stroke:var(--phy);stroke-width:2"/>
<line x1="194" y1="84" x2="236" y2="88" style="stroke:var(--chem);stroke-width:2"/>
<line x1="194" y1="96" x2="236" y2="100" style="stroke:var(--chem);stroke-width:2"/>
<line x1="194" y1="108" x2="236" y2="112" style="stroke:var(--chem);stroke-width:2"/>
<line x1="194" y1="120" x2="236" y2="124" style="stroke:var(--chem);stroke-width:2"/>
<polyline class="ln" points="84,72 40,72 40,88"/>
<circle cx="40" cy="100" r="12" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/>
<text class="k" x="34" y="105">~</text>
<polyline class="ln" points="40,112 40,132 84,132"/>
<polyline class="ln" points="236,88 280,88 280,92"/>
<rect x="274" y="92" width="12" height="28" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/>
<polyline class="ln" points="280,120 280,124 236,124"/>
<text x="14" y="70">V_p</text><text x="292" y="110">R</text><text x="254" y="80">V_s</text>
<text class="k" x="88" y="190">primary N_p</text><text class="k" x="182" y="190">secondary N_s</text>
</svg>
:::

**Why the iron?** Iron has a relative permeability in the thousands (see the lesson on magnetic materials). Field lines much prefer to run through it, just as current prefers a copper wire to the air around it. So nearly all the flux made by the primary stays in the core and passes through the secondary. Call the flux through the core $\Phi(t)$. Then every turn of either coil has the same flux $\Phi$ through it.

Now apply Faraday's law to each coil. The emf induced in a coil of $N$ turns is $N$ times the emf per turn:

$$\varepsilon_p = -N_p\frac{d\Phi}{dt}, \qquad \varepsilon_s = -N_s\frac{d\Phi}{dt}.$$

The **emf per turn is the same in both coils**, because each turn sees the same changing flux. Divide one equation by the other and $d\Phi/dt$ cancels.

For an ideal transformer, the winding resistances are negligible. Then the supply voltage across the primary equals the emf the primary induces in itself (that is just Kirchhoff's loop rule round the primary), and the secondary's terminal voltage equals its induced emf. So:

:::law caption="Ideal transformer voltage ratio. N_s > N_p steps up; N_s < N_p steps down."
$$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$
:::

A transformer with 1000 primary turns and 50 secondary turns turns 230 V into 11.5 V. Reverse it and 11.5 V becomes 230 V. Nothing in the device "knows" which side is the primary; that is decided by where you connect the supply.

:::qc
q: A transformer has 400 primary turns and 1600 secondary turns. The primary is on 230 V ac. What is the secondary voltage?
options: ["57.5 V", "230 V", "920 V", "3680 V"]
answer: 2
right: Right. The emf per turn is 230/400 = 0.575 V, the same in every turn of either coil, so 1600 turns give 920 V.
wrong: Use V_s/V_p = N_s/N_p = 1600/400 = 4. The secondary voltage is 4 × 230 = 920 V.
:::

## Why an idle transformer draws almost no current {lvl=2 id=s-noload label="Class 12"}

The hook asked a real puzzle. The primary is copper with perhaps 1 Ω of resistance, yet on 230 V it draws a fraction of an ampere. Where did Ohm's law go?

With the secondary open, the primary is simply a coil on an iron core: a large inductor $L_p$. On ac, an inductor's current is limited not by resistance but by its own **back-emf**. The current makes the flux; the changing flux induces an emf that opposes the supply. In the ideal case the induced emf exactly balances the supply at every instant:

$$V_p(t) = N_p\frac{d\Phi}{dt}.$$

Read this equation backwards. **The supply voltage fixes the rate of change of flux**, and so it fixes the flux itself. For $V_p = V_0\sin\omega t$, the flux swings with amplitude

$$\Phi_0 = \frac{V_0}{N_p\,\omega}.$$

The current is only whatever is needed to set up this flux. For a coil of inductance $L_p$ that is the **magnetising current**, of rms value $I_m = V_p/(\omega L_p)$, lagging the voltage by 90°.

:::worked title="How small is the magnetising current?"
Take a core of cross-section $A = 20\ \text{cm}^2$, mean path length $l = 0.40$ m and relative permeability $\mu_r = 2000$, with $N_p = 500$ turns. (These are illustrative values, assumed for the example.)

Inductance: $L_p = \mu_0\mu_r N_p^2 A/l = (4\pi\times10^{-7})(2000)(500^2)(20\times10^{-4})/0.40 \approx 3.14$ H.

On 230 V, 50 Hz: $\omega L_p = 314 \times 3.14 \approx 987\ \Omega$, so $I_m \approx 230/987 \approx 0.23$ A.

Peak flux: $\Phi_0 = 230\sqrt2/(314\times500) \approx 2.07\times10^{-3}$ Wb, a peak flux density of $\Phi_0/A \approx 1.0$ T.

Compare 230 A if the same winding were put on 230 V dc. The inductance, not the resistance, keeps the idle current small.
:::

Because $I_m$ is 90° out of phase with $V_p$, the average power it carries, $V I\cos 90°$, is zero. An ideal unloaded transformer takes current from the mains but no energy; the energy stored in the core field each quarter-cycle is handed back in the next. (A real one takes a little, for the core losses described later.)

This also gives the designer's **emf equation**. With $V_{rms} = V_0/\sqrt2$ and $\omega = 2\pi f$:

$$V_{rms} = \frac{2\pi}{\sqrt2}\,f N\Phi_0 \approx 4.44\, f N \Phi_0 .$$

Iron saturates at around 1.5–2 T [Unverified: typical figure], so $\Phi_0$ cannot exceed about that times the core area. For a given voltage and frequency this fixes the number of volts per turn the core can carry.

:::qc
q: An ideal transformer designed for 230 V, 50 Hz is connected to 230 V at 25 Hz. What happens to the peak flux in the core?
options: ["It halves", "It stays the same", "It doubles, and the core may saturate", "It becomes zero"]
answer: 2
right: Right. Φ₀ = V₀/(Nω). Halving ω at the same voltage doubles the flux. If the design was already near saturation, the magnetising current shoots up and the transformer overheats.
wrong: The supply fixes dΦ/dt, so Φ₀ = V₀/(Nω). At half the frequency the flux has twice as long to build up in each half-cycle, so its peak doubles.
:::

## Connecting a load: where the current ratio comes from {lvl=2 id=s-load label="Class 12"}

Now connect a resistor $R$ across the secondary. A current $I_s = V_s/R$ flows in the secondary and power $V_sI_s$ goes into the load. That energy can only come from the mains. How does the primary "find out" that it must supply more?

**Route 1: energy.** An ideal transformer has no losses, so power in equals power out:

$$V_pI_p = V_sI_s \quad\Longrightarrow\quad \frac{I_s}{I_p} = \frac{V_p}{V_s} = \frac{N_p}{N_s}.$$

A step-up transformer steps current down, and a step-down transformer steps current up, by the same factor. It is like a lever: you gain force by giving up distance.

**Route 2: what the flux does.** This route explains the mechanism. The secondary current flows round the core too, and by Lenz's law it tries to *reduce* the flux. But the flux cannot change: $V_p = N_p\,d\Phi/dt$ still holds, and $V_p$ is fixed by the mains. So the instant the flux begins to drop, the primary's back-emf drops below the supply, and the primary draws extra current until the flux is restored.

Ampère's law round the core makes this exact. The total current threading the core is $N_pI_p - N_sI_s$ (the secondary current circulates the opposite way). The field in the core is this "magnetomotive force" divided by $l/(\mu A)$. Because $\mu$ is huge, only a tiny net value is needed to produce the required flux: that tiny net is the magnetising current. Everything else must cancel:

$$N_pI_p' = N_sI_s ,$$

where $I_p'$ is the extra primary current due to the load. This is the same current ratio as Route 1, now derived from magnetism alone. Energy conservation and Faraday's law agree, as they must.

:::note title="The transformer as a messenger"
The load current in the secondary is felt by the primary only through the core flux. A heavier load (smaller $R$) draws more $I_s$, which pulls the flux down slightly, which lowers the primary's back-emf, which lets more mains current in. The flux itself stays almost constant from no load to full load.
:::

:::qc
q: An ideal step-down transformer (230 V to 23 V) supplies a 23 V, 46 W lamp. What current does it draw from the mains?
options: ["0.2 A", "2 A", "20 A", "0.02 A"]
answer: 0
right: Right. The lamp draws 46/23 = 2 A. The turns ratio is 10 : 1, so the primary current is 2/10 = 0.2 A. Check, 230 × 0.2 = 46 W.
wrong: Power in equals power out, 46 W. At 230 V that is 46/230 = 0.2 A. The step-down transformer steps the current up by 10, so 0.2 A in the primary becomes 2 A in the lamp.
:::

## Real transformers: where the energy goes {lvl=2 id=s-losses label="Class 12"}

Large real transformers are remarkably good, often above 95% efficient and the biggest above 99% [Unverified: typical figures]. The small losses come from four sources, and each has a standard cure.

1. **Copper loss.** The windings have resistance, so they waste $I_p^2R_p + I_s^2R_s$. Cure: thick copper (or aluminium) wire, especially in the high-current winding. This loss grows as the square of the load current.
2. **Eddy-current loss.** The core is itself a conductor sitting in a changing flux. Loops of current are induced inside the iron, heating it. Cure: build the core from thin **laminations** (sheets) insulated from one another by varnish or oxide, with the sheets parallel to the flux. Each eddy loop is then confined to a thin sheet, where the emf is small and the path is long. A later section shows the loss falls as the square of the sheet thickness.
3. **Hysteresis loss.** The iron is magnetised first one way, then the other, 50 times a second. Each cycle wastes an energy per unit volume equal to the area of the B–H loop (see the lesson on magnetic materials). Cure: use **soft iron** or silicon steel, whose loop is narrow.
4. **Flux leakage.** Some primary flux does not pass through the secondary, so the secondary sees a slightly smaller emf than the turns ratio predicts. Cure: a closed core, and windings placed on top of each other rather than on opposite limbs. (The figure separates them only for clarity.)

Losses 2 and 3 together are the **iron loss** or **core loss**. They depend on the flux, which the supply voltage fixes, so they are almost the **same at every load**. Copper loss depends on the current, so it grows with load. This difference decides when a transformer is most efficient, as a later section shows.

A further small effect: as the iron is magnetised its dimensions change very slightly (magnetostriction), at twice the supply frequency. That is the familiar 100 Hz hum of a transformer on 50 Hz mains.

:::qc
q: Why is a transformer core made of thin insulated sheets instead of a solid block of iron?
options: ["To reduce hysteresis loss", "To reduce eddy-current loss", "To reduce copper loss", "To increase the magnetic flux"]
answer: 1
right: Right. Insulating layers break up the big current loops that would circulate in a solid core. Each sheet allows only thin loops with small emf and high resistance, so the eddy-current heating drops sharply.
wrong: Laminations cut the eddy currents. Hysteresis depends on the kind of iron (soft iron has a narrow loop), not on whether it is in sheets; copper loss is in the windings.
:::

## Power transmission at high voltage {lvl=2 id=s-grid label="Class 12"}

Here is the reason transformers run the world. A station must deliver power $P$ to a town through lines of total resistance $R$ (both conductors together). If it transmits at voltage $V$, the line current is $I = P/V$ and the heat lost in the line is

:::law caption="Line loss for power P sent at voltage V (unity power factor). The V here is the transmission voltage."
$$P_{loss} = I^2R = \frac{P^2R}{V^2}$$
:::

The loss falls as the **square** of the voltage. Doubling the voltage quarters the loss. Raising it 20 times cuts the loss 400 times. You could instead lower $R$ with thicker wires, but $R \propto 1/A$, so a 400-fold saving would need 400 times as much copper on every pylon.

:::worked title="10 MW to a town 50 km away"
Suppose the line's total resistance is $R = 5\ \Omega$ (an assumed value) and the town needs $P = 10$ MW.

**At 11 kV:** $I = 10^7/1.1\times10^4 = 909$ A. Loss $= 909^2 \times 5 = 4.13$ MW, which is 41% of the power. The voltage drop along the line is $909 \times 5 = 4545$ V, so the town would not even get 11 kV.

**At 220 kV:** $I = 10^7/2.2\times10^5 = 45.5$ A. Loss $= 45.5^2 \times 5 = 10.3$ kW, about 0.1%. The line drop is only 227 V.

The voltage went up 20 times; the loss went down $20^2 = 400$ times.
:::

So the grid steps up, transmits, and steps down in stages.

:::figure caption="A typical supply chain. Each transformer changes voltage, not power. Voltages shown are typical Indian grid values recalled from memory [Unverified]; the actual values vary by region."
<svg viewBox="0 0 340 150" role="img" aria-label="Power grid schematic: generator, step-up transformer, long high-voltage line, step-down substation, distribution line, pole transformer, house">
<circle cx="25" cy="70" r="14" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<text class="k" x="20" y="75">G</text>
<line class="ln" x1="39" y1="70" x2="58" y2="70"/>
<circle cx="66" cy="70" r="9" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><circle cx="76" cy="70" r="9" style="fill:none;stroke:var(--ink);stroke-width:1.4"/>
<line class="ray" x1="85" y1="70" x2="200" y2="70" style="stroke-width:3"/>
<line class="faint" x1="110" y1="45" x2="110" y2="95"/><line class="faint" x1="140" y1="45" x2="140" y2="95"/><line class="faint" x1="170" y1="45" x2="170" y2="95"/>
<circle cx="208" cy="70" r="9" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><circle cx="218" cy="70" r="9" style="fill:none;stroke:var(--ink);stroke-width:1.4"/>
<line class="ln" x1="227" y1="70" x2="270" y2="70"/>
<circle cx="278" cy="70" r="7" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><circle cx="286" cy="70" r="7" style="fill:none;stroke:var(--ink);stroke-width:1.4"/>
<line class="ln" x1="293" y1="70" x2="305" y2="70"/>
<path d="M305 80 V62 L318 52 L331 62 V80 Z" style="fill:none;stroke:var(--ink);stroke-width:1.4"/>
<text x="8" y="105">11–25 kV</text>
<text x="56" y="45">step-up</text>
<text x="110" y="115">220–765 kV line</text>
<text x="190" y="45">substation</text>
<text x="230" y="105">11 kV</text>
<text x="262" y="45">pole</text>
<text x="300" y="100">230 V</text>
<text class="k" x="105" y="138">high V, small I: little I²R loss</text>
</svg>
:::

Why not go even higher? Higher voltages need taller towers, longer insulator strings and wider clearances, and above several hundred kilovolts the air around the conductors begins to ionise and leak energy (corona discharge). The chosen voltage is an economic balance between line loss and insulation cost [Inference].

:::note title="Three phases, briefly"
Real grids send power as **three-phase** ac: three alternating voltages 120° apart on three conductors. For a balanced load the three return currents add to zero, so no heavy return wire is needed and less conductor carries the same power. Three-phase transformers are three sets of windings on one core. The details belong to electrical engineering; the physics of each phase is exactly this lesson.
:::

:::qc
q: A station switches its transmission from 33 kV to 132 kV, keeping the power and the line the same. By what factor does the line loss change?
options: ["Falls to 1/4", "Falls to 1/16", "Rises 4 times", "Rises 16 times"]
answer: 1
right: Right. The voltage rises 4 times, so the current falls 4 times and the I²R loss falls 4² = 16 times.
wrong: The loss is P²R/V². Multiplying V by 4 divides the loss by 16. (It would rise only if you wrongly used V²/R with V the transmission voltage.)
:::

## Step-up and step-down in everyday use {lvl=2 id=s-uses label="Class 12"}

- **Substations and pole transformers** step the grid voltage down in stages, as in the figure.
- **Mains adapters.** An old-style adapter, heavy for its size, holds an iron-core 50 Hz transformer that steps 230 V down to perhaps 9–12 V, followed by a rectifier. Modern phone chargers are light because they first convert the mains to ac at tens of kilohertz and use a tiny transformer at that frequency [Unverified: typical frequency]. The emf equation explains why: $V \approx 4.44\,fN\Phi_0$, so at a frequency 1000 times higher the same voltage needs about 1000 times less flux, and so a far smaller core.
- **Welding and induction heating.** A step-down transformer with a few turns of very thick secondary gives hundreds of amperes at a low voltage.
- **Ignition coil in a petrol engine.** This is a special case. It runs from the car's 12 V dc battery. A switch (once mechanical, now electronic) suddenly *breaks* the primary current. The flux collapses in a very short time, and the secondary, with many more turns, gives a pulse of many kilovolts that jumps the spark-plug gap [Unverified: typical voltages]. The large voltage comes from the turns ratio *and* the very fast $d\Phi/dt$, not from steady ac.
- **Isolation.** Even with a 1 : 1 ratio, a transformer separates two circuits electrically. Medical equipment and bathroom shaver sockets use this so that touching one side of the output does not complete a path to earth.

## Reflected impedance and impedance matching {lvl=3 id=s-reflect label="JEE"}

What does the source "see" when it looks into the primary of an ideal transformer loaded by $R$? Write $a = N_p/N_s$. Then $V_p = aV_s$ and $I_p = I_s/a$, so

:::law caption="A load R on the secondary looks like a²R at the primary, with a = N_p/N_s."
$$R' = \frac{V_p}{I_p} = \frac{aV_s}{I_s/a} = a^2\,\frac{V_s}{I_s} = \left(\frac{N_p}{N_s}\right)^2 R$$
:::

The impedance is transformed by the **square** of the turns ratio, because voltage goes up by $a$ while current goes down by $a$. A step-down transformer makes a small load look large to the source; a step-up transformer makes a large load look small.

This is a powerful design tool. A source with internal resistance $r$ delivers the most power to a load when the load equals $r$ (the maximum power transfer theorem, which you can prove by maximising $E^2R/(r + R)^2$). If the load is not equal to $r$, a transformer can make it *look* equal.

:::worked title="Matching a loudspeaker"
An amplifier stage behaves like an emf of 8 V (rms) with internal resistance $r = 800\ \Omega$. The loudspeaker has $R = 8\ \Omega$.

**Directly connected:** $I = 8/808 \approx 9.9$ mA, and $P = I^2R \approx 0.78$ mW.

**Through a matching transformer:** we need $a^2 \times 8 = 800$, so $a = N_p/N_s = 10$. The source now sees 800 Ω, and delivers $E^2/(4r) = 64/3200 = 20$ mW, all of which (ideally) reaches the speaker.

The transformer increased the power to the speaker about 25 times without adding any energy source. It only changed the voltage–current trade-off.
:::

The same rule holds for any impedance. A capacitor $C$ on the secondary looks like $C/a^2$ at the primary (since $1/\omega C$ is multiplied by $a^2$), and an inductor $L$ looks like $a^2L$. A reactive load still takes no average power: the primary current then has a load component 90° out of phase with $V_p$, added to the magnetising current. With a resistive load, the load component is in phase. (See the lesson on ac through R, L and C for the phasors.)

:::qc
q: An ideal transformer with N_p/N_s = 3 has a 10 Ω resistor on its secondary. What resistance does the source see?
options: ["3.3 Ω", "1.1 Ω", "30 Ω", "90 Ω"]
answer: 3
right: Right. R' = (N_p/N_s)² R = 9 × 10 = 90 Ω. A step-down transformer makes the load look larger.
wrong: The impedance transforms as the square of the turns ratio, from the secondary to the primary as (N_p/N_s)². So R' = 3² × 10 = 90 Ω.
:::

## Efficiency, and when it is greatest {lvl=3 id=s-eff label="JEE"}

Model a real transformer with a fixed iron loss $P_i$ (independent of load, since the flux is fixed) and a copper loss $I^2R_{eq}$, where $I$ is the secondary current and $R_{eq}$ lumps both windings' resistances referred to the secondary ($R_{eq} = R_s + R_p/a^2$, by the reflection rule). For output voltage $V$ at power factor $\cos\phi$:

$$\eta = \frac{VI\cos\phi}{VI\cos\phi + P_i + I^2R_{eq}} .$$

To maximise $\eta$, minimise the loss per unit output, $(P_i + I^2R_{eq})/I = P_i/I + IR_{eq}$. Differentiate with respect to $I$:

$$-\frac{P_i}{I^2} + R_{eq} = 0 \quad\Longrightarrow\quad I^2R_{eq} = P_i .$$

:::law caption="Maximum efficiency (fixed V and power factor; iron loss independent of load)."
$$\text{copper loss} = \text{iron loss}$$
:::

The logic is the same as for any fixed cost plus a cost that grows faster than output: at light load the fixed iron loss dominates; at heavy load the $I^2$ loss dominates; the best point is where they are equal. The model is a simplification (iron loss varies a little with load because the flux does, and $R_{eq}$ changes with temperature) [Inference: standard approximation].

:::worked title="Where is this transformer best?"
Full-load output 100 kW at unity power factor; iron loss 1.0 kW; full-load copper loss 1.5 kW.

Copper loss scales as (load)². It equals 1.0 kW at a fraction $x$ of full load with $1.5x^2 = 1.0$, so $x = 0.816$, i.e. 81.6 kW output.

$\eta_{max} = 81.6/(81.6 + 1.0 + 1.0) = 97.6\%$. At full load, $\eta = 100/(100 + 1 + 1.5) = 97.6\%$ too (97.56%), and at half load, $\eta = 50/(50 + 1 + 0.375) = 97.3\%$.

The curve is flat near its peak, which is why designers can place the maximum near the most common load. Distribution transformers stay energised day and night, mostly at part load, so they are typically designed with low iron loss [Inference].
:::

## The autotransformer {lvl=3 id=s-auto label="JEE"}

The isolation between windings is not always needed. An **autotransformer** uses a single winding of $N_p$ turns with a tap at $N_s$ turns. The supply goes across the whole winding; the load across the tapped part (or the other way round to step up). Each turn still has the same emf, so $V_s/V_p = N_s/N_p$ as before, and for an ideal device $V_pI_p = V_sI_s$.

The saving is in the shared part. In a step-down autotransformer, the primary current $I_p$ flows in through the top section, and the load current $I_s$ flows out of the tap. By Kirchhoff's junction rule, the common section carries only $I_s - I_p$ (the two are in phase for an ideal device).

Take 230 V down to 200 V for a 10 A load: $I_p = 200 \times 10/230 = 8.70$ A, and the common section carries only $10 - 8.70 = 1.30$ A. That section can use thin wire. When the ratio is near 1, an autotransformer is much smaller and cheaper than a two-winding one.

The price is safety: the output is connected directly to the input. If the winding breaks near the tap, the load can receive the full input voltage. So autotransformers are used for modest ratios: the variable "variac" on a laboratory bench, voltage stabilisers, and ties between two grid voltages.

## A transformer on dc {lvl=3 id=s-dc label="JEE"}

Connect the primary to a battery. Once the current is steady, the flux is constant, $d\Phi/dt = 0$, and **the secondary voltage is zero**. Worse, the primary now has nothing but its resistance to limit the current: on 230 V dc the 1 Ω winding would carry 230 A and burn. This is why a transformer must never be connected to dc of its rated voltage.

There is a brief secondary voltage while the current builds up. For a primary of resistance $R_p$ and inductance $L_p$ on a dc voltage $V$, the current rises as $I = (V/R_p)(1 - e^{-t/\tau})$ with $\tau = L_p/R_p$ (see the lesson on self and mutual inductance). The primary's induced emf is $L_p\,dI/dt = V e^{-t/\tau}$, and with perfect coupling the secondary's is $N_s/N_p$ times that:

$$\varepsilon_s(t) = \frac{N_s}{N_p}\,V e^{-t/\tau}.$$

At the instant of switching on the secondary gets the full turns-ratio voltage, which then dies away. Breaking the circuit produces a pulse of the opposite sign, and because a switch can stop the current very fast, that pulse can be much larger: the ignition coil exploits exactly this.

There is a deeper way to say it. Integrating $V = N_p\,d\Phi/dt$ gives $\Delta\Phi = \frac{1}{N_p}\int V\,dt$. A transformer can only handle a limited **volt-seconds** product before the core saturates. On ac, the positive and negative half-cycles cancel, so the flux just swings back and forth. A dc voltage keeps adding volt-seconds; the flux heads for saturation, the inductance collapses, and the current is limited only by resistance. (With the illustrative core earlier, 12 A in 500 turns would demand about 38 T, far beyond saturation: the iron gives up long before.)

:::qc
q: A 12 V battery, a switch and the primary of a 1 : 50 step-up transformer form a circuit. When is a voltage seen across the secondary?
options: ["Continuously, 600 V", "Only briefly, at the moments of closing and opening the switch", "Never, because dc cannot pass through a transformer", "Only while the switch stays closed"]
answer: 1
right: Right. Only a changing primary current changes the flux. Closing the switch gives a decaying pulse (up to 600 V for perfect coupling); opening it gives an opposite, often larger, pulse. A steady current gives nothing.
wrong: A secondary emf needs a changing flux. The primary current changes only while it rises after closing and while it collapses after opening, so the secondary shows only brief pulses then.
:::

## Core-loss scaling: why thin sheets and why frequency matters {lvl=4 id=s-eddy label="Olympiad"}

Let us find how eddy-current loss depends on sheet thickness. Take one lamination of thickness $t$ (along $y$), much wider and longer than it is thick, with a uniform flux density $B(t) = B_0\sin\omega t$ along its length. Consider a thin rectangular current loop in the sheet reaching from $-y$ to $+y$ across the thickness and running a long distance $L$ along the width. The flux through it is $B\cdot 2yL$, so its emf is $2yL\,\dot B$. The loop's long sides dominate, so the electric field along each is

$$E(y) = y\,\dot B .$$

This field drives a current density $J = \sigma E$, and the power per unit volume is $\sigma E^2 = \sigma y^2\dot B^2$. Average over the thickness ($\langle y^2\rangle = t^2/12$ for $y$ from $-t/2$ to $t/2$) and over time ($\langle\dot B^2\rangle = \omega^2B_0^2/2$):

:::eq caption="Eddy-current power per unit volume in a thin lamination (thickness well below the skin depth)."
$$p_{eddy} = \frac{\sigma\,\omega^2 B_0^2\, t^2}{24}$$
:::

Three lessons follow. The loss goes as $t^2$: halving the sheet thickness quarters the loss. It goes as $\sigma$: adding a few percent of silicon to the iron raises its resistivity and cuts the loss. And it goes as $\omega^2$: at high frequency even thin sheets are too lossy, so high-frequency transformers use ferrite cores, which are ceramic magnets with very low conductivity [Unverified: typical practice].

The formula assumes the field is uniform through the sheet. In a good conductor of high permeability, the eddy currents themselves screen the field from the interior over a **skin depth** $\delta = \sqrt{2/(\mu\sigma\omega)}$. For silicon steel at 50 Hz this is of order a millimetre [Inference: from typical $\mu_r$ in the thousands and $\sigma \sim 2\times10^6$ S/m], which is why laminations are a few tenths of a millimetre thick.

**Hysteresis** scales differently. The energy lost per cycle per unit volume is the loop area $\oint H\,dB$, fixed by the material and by $B_0$, so the power is that area times $f$: linear in frequency. An empirical rule (Steinmetz) puts the loop area roughly proportional to $B_0^{1.6}$ [Unverified: exponent from memory]. Since $B_0 \propto V/(fN)$, a transformer run at its rated voltage but too low a frequency has larger $B_0$ and much higher core loss.

## The coupled-circuit model and the switch-on surge {lvl=4 id=s-coupled label="Olympiad"}

A careful model replaces "ideal transformer" with two coupled inductors. Let the primary and secondary have self-inductances $L_p$, $L_s$ and mutual inductance $M$, with the load $R$ on the secondary. Use complex phasors ($j = \sqrt{-1}$; see the lesson on ac through R, L and C). With $I_2$ the secondary current measured so that both coils' fluxes add,

$$V_p = j\omega L_pI_p + j\omega M I_2, \qquad 0 = j\omega M I_p + (R + j\omega L_s)I_2 .$$

Eliminate $I_2 = -j\omega M I_p/(R + j\omega L_s)$:

$$Z_{in} = \frac{V_p}{I_p} = j\omega L_p + \frac{\omega^2M^2}{R + j\omega L_s}.$$

For a closed core with no leakage, every turn links the same flux, so $L_p \propto N_p^2$, $L_s \propto N_s^2$ and $M^2 = L_pL_s$ (coupling coefficient $k = 1$). Then $L_p/L_s = (N_p/N_s)^2 = a^2$, and the expression collapses:

$$Z_{in} = \frac{j\omega L_p(R + j\omega L_s) + \omega^2L_pL_s}{R + j\omega L_s} = \frac{j\omega L_p R}{R + j\omega L_s} = \frac{(j\omega L_p)(a^2R)}{j\omega L_p + a^2R}.$$

The last form is the formula for two impedances **in parallel**: $j\omega L_p$ and $a^2R$.

:::figure caption="Equivalent circuit of a transformer with perfect coupling. The magnetising inductance L_p sits in parallel with the reflected load a²R, where a = N_p/N_s. As L_p → ∞ the magnetising branch disappears and the ideal transformer remains."
<svg viewBox="0 0 300 160" role="img" aria-label="Equivalent circuit: ac source on the left, an inductor L_p and a resistor a squared R connected in parallel across it">
<circle cx="40" cy="80" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/>
<text class="k" x="34" y="85">~</text>
<polyline class="ln" points="40,66 40,30 240,30 240,62"/>
<polyline class="ln" points="40,94 40,130 240,130 240,98"/>
<line class="ln" x1="140" y1="30" x2="140" y2="56"/><line class="ln" x1="140" y1="104" x2="140" y2="130"/>
<path d="M140 56 q10 6 0 12 q10 6 0 12 q10 6 0 12 q10 6 0 12" style="fill:none;stroke:var(--phy);stroke-width:2"/>
<rect x="232" y="62" width="16" height="36" style="fill:var(--surface);stroke:var(--chem);stroke-width:2"/>
<text x="10" y="60">V_p</text>
<text class="k" x="156" y="84">L_p</text>
<text class="k" x="256" y="84">a²R</text>
<text x="80" y="150">magnetising branch ∥ reflected load</text>
</svg>
:::

This one model reproduces everything: with $R \to \infty$ (open secondary) only the magnetising current $V_p/(\omega L_p)$ flows; with large $L_p$ the reflected load $a^2R$ dominates; and the total primary current is the phasor sum of a 90°-lagging magnetising part and an in-phase load part. With $k < 1$, the uncoupled part of each winding's inductance appears as a small **leakage inductance** in series, which makes the output voltage sag as the load grows. Winding resistance adds a series resistor, and core loss a resistor in parallel with $L_p$.

**The switch-on surge.** Switching on is not always gentle. Ignore resistance and switch on at phase $\theta$, with the core initially unmagnetised: $N_p\,d\Phi/dt = V_0\sin(\omega t + \theta)$ and $\Phi(0) = 0$. Then

$$\Phi(t) = \Phi_0\left[\cos\theta - \cos(\omega t + \theta)\right], \qquad \Phi_0 = \frac{V_0}{N_p\omega}.$$

The steady swing $-\Phi_0\cos(\omega t + \theta)$ is offset by a constant $\Phi_0\cos\theta$. The flux reaches $\Phi_0(1 + |\cos\theta|)$, and for switching at a voltage zero ($\theta = 0$) it reaches $2\Phi_0$. A core designed to run at 1.4 T would be asked for 2.8 T, far into saturation, so the magnetising current spikes to many times its normal value. The offset decays over many cycles, with the winding's $L/R$ time constant. Switching at a voltage peak ($\theta = 90°$) gives no offset at all. Leftover magnetisation from the last switch-off can make the surge worse [Inference: follows from adding a nonzero $\Phi(0)$]. This **inrush current** is why large transformers may trip their protection on switch-on.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A transformer is two coils on one iron core, linked only by a shared changing flux. It works only on changing current. {lvl=2}
2. Each turn has the same emf, so $V_s/V_p = N_s/N_p$. More secondary turns step up, fewer step down. {lvl=2}
3. With no load, the primary's back-emf nearly cancels the supply; only a small magnetising current $V_p/(\omega L_p)$ flows, 90° out of phase, taking no average power. {lvl=2}
4. The supply fixes the flux: $\Phi_0 = V_0/(N_p\omega)$, i.e. $V_{rms} \approx 4.44 fN\Phi_0$. Load does not change it. {lvl=2}
5. Ideal: $V_pI_p = V_sI_s$, so $I_s/I_p = N_p/N_s$. Mechanism: load current pulls the flux down, and the primary draws extra current with $N_pI_p' = N_sI_s$. {lvl=2}
6. Losses: copper ($I^2R$), eddy currents (laminations), hysteresis (soft iron), leakage (closed core, interleaved windings). Iron loss is fixed; copper loss grows as $I^2$. {lvl=2}
7. Line loss $= P^2R/V^2$: transmitting at $n$ times the voltage cuts the loss $n^2$ times. {lvl=2}
8. Reflected impedance $R' = (N_p/N_s)^2R$; use it to match a load to a source. Maximum efficiency when copper loss equals iron loss. {lvl=3}
9. On dc only switching transients appear: $\varepsilon_s = (N_s/N_p)Ve^{-t/\tau}$; steady dc burns the winding. Autotransformers share one winding; cheap for ratios near 1, but not isolated. {lvl=3}
10. Eddy loss per volume $\sigma\omega^2B_0^2t^2/24$; hysteresis loss $\propto f$. Perfect coupling = ideal transformer with $L_p$ in parallel; switch-on at a voltage zero can double the flux. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Voltage ratio goes with turns; current ratio goes against turns. Check that $V_pI_p = V_sI_s$. {lvl=2}
- A step-up transformer does not create energy: it raises voltage by lowering current. {lvl=2}
- In $P_{loss} = V^2/R$ for a line, $V$ must be the voltage *drop along the line*, not the transmission voltage. Safer to use $I = P/V$ and $I^2R$. {lvl=2}
- "Line resistance" usually means both conductors together. Check whether a problem gives the resistance per wire or per km. {lvl=2}
- Laminations reduce eddy loss, not hysteresis loss; soft iron reduces hysteresis loss. {lvl=2}
- The core flux is set by the supply voltage and frequency, not by the load. Iron loss therefore stays roughly constant from no load to full load. {lvl=3}
- Impedance transforms with the square of the turns ratio, and the direction matters: from secondary to primary multiply by $(N_p/N_s)^2$. {lvl=3}
- Efficiency formula: the output is $VI\cos\phi$; a transformer's rating in kVA is not its power in kW unless $\cos\phi = 1$. {lvl=3}
- An ideal transformer has zero magnetising current; a perfectly coupled real one has $L_p$ in parallel. Do not confuse "no losses" with "infinite inductance". {lvl=4}
:::
