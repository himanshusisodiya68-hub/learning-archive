---
title: Resistors in series and parallel
summary: 'Why adding a bulb to a circuit can dim the others or leave them bright, depending on how you connect it.'
ncert: ["Class 10 Science · Ch 11 Electricity (§11.6)"]
up_to: Olympiad
builds_on: [Electric current and potential difference, Ohm's law, Resistance and resistivity]
notes_prompt: Explain, without using any formula, why adding a resistor in parallel lowers the total resistance while adding one in series raises it.
margin:
  - kind: history
    title: History
    text: Georg Ohm published his law in 1827. Within a few decades telegraph engineers were combining coils in series and parallel every day, and in 1847 Gustav Kirchhoff, then a student, turned the rules for any network into two simple laws.
  - kind: tip
    title: Board favourite
    text: "Always state the reason, not just the formula: in series the current is the same in every resistor; in parallel the potential difference is the same across every resistor."
  - kind: olympiad
    title: Olympiad link
    text: Every edge of a cube of 1 Ω resistors gives 7/12 Ω between its ends. Foster's theorem gets this in one line, with no circuit solving at all.
books:
  - { title: "NCERT Science Class X", ref: "Ch. 11 Electricity, §11.6 Resistance of a system of resistors" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 32 Electric Current in Conductors (combination of resistors)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.4 Electric current" }
cards:
  - { front: "Series rule and the reason behind it?", back: "$R_s = R_1 + R_2 + \\dots$ The same current flows through each (charge cannot pile up), and the potential drops add (energy per coulomb adds along one path)." }
  - { front: "Parallel rule and the reason behind it?", back: "$1/R_p = 1/R_1 + 1/R_2 + \\dots$ Every branch has the same potential difference, and the branch currents add at the junction." }
  - { front: "Two resistors in parallel, quick formula?", back: "$R_p = \\dfrac{R_1R_2}{R_1+R_2}$ (product over sum). It is always smaller than the smaller one." }
  - { front: "Why are homes wired in parallel?", back: "Each appliance gets the full mains voltage, can be switched on and off independently, and one failure does not cut the others off." }
  - { front: "Resistance across the body diagonal of a cube of resistors R?", back: "$5R/6$. Face diagonal $3R/4$, edge $7R/12$." }
  - { front: "Infinite ladder with series r and shunt R?", back: "$R_\\infty = \\tfrac12\\left(r + \\sqrt{r^2 + 4rR}\\right)$; for $r = R$ it is $\\varphi R \\approx 1.618R$." }
core:
  idea: 'In series the same current flows through every resistor and the potential drops add, so $R_s = \sum R_i$. In parallel every resistor has the same potential difference and the currents add, so $1/R_p = \sum 1/R_i$.'
  formulas:
    - tex: 'R_s = R_1 + R_2 + R_3 + \dots'
      label: 'Series'
    - tex: '\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots'
      label: 'Parallel'
    - tex: 'V_k = V\,\frac{R_k}{R_1 + R_2 + \dots}'
      label: 'Voltage divider (series)'
  conditions:
    - 'Steady current, so charge does not accumulate and each resistor obeys Ohms law with a fixed R'
    - 'Connecting wires of zero resistance'
    - 'Series: no branch leaves between the resistors. Parallel: both ends of every resistor share the same two nodes'
  sign: 'After adding reciprocals for a parallel group, invert at the end. In a current divider the other resistor goes on top.'
outcomes:
  - 'Calculate the equivalent resistance of series and parallel combinations, and the current and voltage in each resistor'
  - 'Explain why houses are wired in parallel'
  - 'Reduce nested networks step by step and apply voltage and current dividers'
  - 'Use equipotential points, symmetry, balanced bridges, the cube and infinite ladders on harder networks'
  - 'Apply delta–star transformation, superposition and Fosters theorem to networks with no series or parallel structure'
---

:::hook
q: A 10 Ω resistor is connected across a battery. You now connect a second resistor, of 1000 Ω, directly across the first one (in parallel). What happens to the current drawn from the battery?
options: ["It falls, because there is now more resistance in the circuit", "It rises slightly", "It stays exactly the same"]
answer: 1
right: Right. The 10 Ω resistor still has the full battery voltage and carries the same current as before. The new resistor opens an extra path and adds its own small current, so the total goes up and the combined resistance goes down, to about 9.9 Ω.
wrong: More resistors do not always mean more resistance. In parallel, the new resistor adds a second path for charge, so the battery has to supply more current, not less.
:::

## Two ways to join resistors {lvl=1 id=s-two label="Class 10"}

Real circuits rarely contain just one resistor. A torch has a bulb and the wires leading to it, a house has dozens of appliances, and a phone has millions of tiny resistive parts. We want to replace a whole group of resistors by **one equivalent resistor** that draws the same current from the same battery. Then Ohm's law, $V = IR$, works for the whole group at once.

There are two basic ways to connect resistors, and every simple network is built from them:

- **Series:** end to end, so charge has **only one path**. Whatever flows through the first must flow through the second.
- **Parallel:** each resistor is connected across **the same two points**, so charge has **several paths** to choose from.

:::figrow
<figure class="fig"><svg viewBox="0 0 300 140" role="img" aria-label="Three resistors in series with a battery"><polyline class="ln" points="50,40 20,40 20,110 144,110"/><polyline class="ln" points="156,110 280,110 280,40 250,40"/><line class="ln" x1="90" y1="40" x2="130" y2="40"/><line class="ln" x1="170" y1="40" x2="210" y2="40"/><polyline class="ray" points="50,40 54,32 62,48 70,32 78,48 86,32 90,40"/><polyline class="ray" points="130,40 134,32 142,48 150,32 158,48 166,32 170,40"/><polyline class="ray" points="210,40 214,32 222,48 230,32 238,48 246,32 250,40"/><line class="ln" x1="144" y1="96" x2="144" y2="124" style="stroke-width:2"/><line class="ln" x1="156" y1="103" x2="156" y2="117" style="stroke-width:4"/><text class="k" x="62" y="24">R₁</text><text class="k" x="142" y="24">R₂</text><text class="k" x="222" y="24">R₃</text><text x="62" y="68">V₁</text><text x="142" y="68">V₂</text><text x="222" y="68">V₃</text><text x="26" y="80">I</text><text x="140" y="136">V</text></svg><figcaption>Series<span>One path: the same current I everywhere; V = V₁ + V₂ + V₃.</span></figcaption></figure>
<figure class="fig"><svg viewBox="0 0 300 150" role="img" aria-label="Three resistors in parallel with a battery"><line class="ln" x1="60" y1="25" x2="60" y2="125"/><line class="ln" x1="240" y1="25" x2="240" y2="125"/><polyline class="ln" points="60,125 144,125"/><polyline class="ln" points="156,125 240,125"/><line class="ln" x1="60" y1="25" x2="130" y2="25"/><line class="ln" x1="170" y1="25" x2="240" y2="25"/><line class="ln" x1="60" y1="60" x2="130" y2="60"/><line class="ln" x1="170" y1="60" x2="240" y2="60"/><line class="ln" x1="60" y1="95" x2="130" y2="95"/><line class="ln" x1="170" y1="95" x2="240" y2="95"/><polyline class="ray" points="130,25 134,17 142,33 150,17 158,33 166,17 170,25"/><polyline class="ray" points="130,60 134,52 142,68 150,52 158,68 166,52 170,60"/><polyline class="ray" points="130,95 134,87 142,103 150,87 158,103 166,87 170,95"/><line class="ln" x1="144" y1="111" x2="144" y2="139" style="stroke-width:2"/><line class="ln" x1="156" y1="118" x2="156" y2="132" style="stroke-width:4"/><circle class="obj" cx="60" cy="60" r="3.5"/><circle class="obj" cx="240" cy="60" r="3.5"/><text class="k" x="44" y="64">A</text><text class="k" x="248" y="64">B</text><text x="96" y="20">I₁ → R₁</text><text x="96" y="55">I₂ → R₂</text><text x="96" y="90">I₃ → R₃</text></svg><figcaption>Parallel<span>Every branch sits between A and B: same V; I = I₁ + I₂ + I₃.</span></figcaption></figure>
:::

Two conservation laws decide everything that follows: **charge is conserved** (it cannot appear, vanish or pile up in a steady current) and **energy is conserved** (the work done on each coulomb by the battery equals the energy it gives up in the resistors).

## Series: one path, one current {lvl=1 id=s-series label="Class 10"}

**Why the current is the same.** In a steady current, charge cannot pile up anywhere in the wire. If 2 coulombs per second enter $R_1$, then 2 coulombs per second must leave it and enter $R_2$, and so on. With only one path, the current $I$ is the same in every resistor. NCERT checks this with an ammeter moved to different places in a series circuit: the reading does not change.

**Why the voltages add.** Potential difference is energy given up per coulomb. A coulomb that passes through $R_1$, then $R_2$, then $R_3$ gives up energy in each one, and the total must equal the energy the battery gave it:

$$V = V_1 + V_2 + V_3 .$$

Now use Ohm's law on each resistor, $V_1 = IR_1$, and so on. If one resistor $R_s$ replaces all three and draws the same current $I$ from the same $V$, then $IR_s = IR_1 + IR_2 + IR_3$. The $I$ cancels:

:::law caption="Series. The equivalent resistance is the sum, so it is larger than the largest resistor."
$$R_s = R_1 + R_2 + R_3 + \dots$$
:::

This matches what resistance means physically. Resistance grows with length ($R = \rho l/A$), and joining resistors end to end is like making one longer conductor.

**Example.** 5 Ω, 10 Ω and 15 Ω in series across 30 V: $R_s = 30\ \Omega$, $I = 30/30 = 1$ A. The drops are 5 V, 10 V and 15 V. They add back to 30 V, and **the largest resistor takes the largest share** of the voltage.

:::qc
q: Two resistors, 2 Ω and 4 Ω, are in series across a 12 V battery. What is the potential difference across the 4 Ω resistor?
options: ["4 V", "6 V", "8 V", "12 V"]
answer: 2
right: Right. R_s = 6 Ω, so I = 2 A, and V = 2 × 4 = 8 V. The 4 Ω resistor has twice the resistance, so it takes twice the voltage.
wrong: First find the current, I = 12/(2 + 4) = 2 A. The same 2 A flows through the 4 Ω resistor, so V = IR = 8 V.
:::

## Parallel: many paths, one voltage {lvl=1 id=s-parallel label="Class 10"}

**Why the voltage is the same.** Every parallel branch begins at point A and ends at point B. Potential is a property of a **point**, like the height of a place, so the difference $V_A - V_B$ is the same whichever branch a coulomb takes. Two roads from one village to another lead downhill by the same total height. Each resistor therefore has the full voltage $V$ across it.

**Why the currents add.** At junction A the current splits. Charge is conserved, so what arrives must leave:

$$I = I_1 + I_2 + I_3 .$$

Ohm's law on each branch gives $I_1 = V/R_1$, and so on. A single resistor $R_p$ drawing the same total current satisfies $V/R_p = V/R_1 + V/R_2 + V/R_3$. Cancel $V$:

:::law caption="Parallel. Reciprocals add, so the equivalent resistance is smaller than the smallest resistor."
$$\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots$$
:::

Physically, putting resistors side by side is like **widening** the conductor: a larger area $A$ gives a smaller resistance. Each new branch is an extra path, so it can only let **more** current through.

For just two resistors there is a handy form, "product over sum":

$$R_p = \frac{R_1R_2}{R_1 + R_2}.$$

For $n$ equal resistors $R$ in parallel, $R_p = R/n$.

**Example.** 5 Ω, 10 Ω and 30 Ω in parallel across 12 V. The branch currents are $2.4$ A, $1.2$ A and $0.4$ A, a total of 4.0 A. So $R_p = 12/4 = 3\ \Omega$. Check: $\tfrac15 + \tfrac1{10} + \tfrac1{30} = \tfrac{6+3+1}{30} = \tfrac13$. **The smallest resistor carries the largest current.**

:::qc
q: A 3 Ω and a 6 Ω resistor are joined in parallel. What is their equivalent resistance?
options: ["9 Ω", "4.5 Ω", "2 Ω", "0.5 Ω"]
answer: 2
right: Right. Product over sum, 18/9 = 2 Ω, which is smaller than 3 Ω, as it must be.
wrong: Use 1/R = 1/3 + 1/6 = 1/2, so R = 2 Ω. (0.5 is 1/R, not R. Always invert at the end.)
:::

## Why houses are wired in parallel {lvl=1 id=s-homes label="Class 10"}

Imagine a house with its bulb, fan and heater all in **series**:

- One current flows through everything, but a bulb needs about 0.3 A and a heater about 5 A. **No single current suits all of them.**
- The 220 V is shared among the appliances, so **none gets its rated voltage**.
- Switch off or burn out any one device and the circuit breaks, so **everything goes off**, as in an old string of festival lights.
- The total resistance is the sum of all of them, so it is large.

In **parallel**, every appliance is connected directly across the mains:

- each gets the **full 220 V** and draws its own correct current, $I = V/R$;
- each has its **own switch** and works independently;
- a failure in one branch leaves the others working.

There is one consequence to keep in mind. Each appliance you switch on adds a parallel branch, which **lowers** the total resistance and **raises** the total current in the main wire. Too many heavy appliances on one circuit means too much current. That is why fuses and circuit breakers exist (see the leaf on the heating effect of current).

## Reducing a combination step by step {lvl=1 id=s-combos label="Class 10"}

Most textbook networks are series and parallel groups nested inside each other. The method is always the same:

1. Find a group that is **purely** series (one path, nothing branching off between them) or **purely** parallel (both ends on the same two points).
2. Replace it by its equivalent and redraw.
3. Repeat until one resistor is left.
4. To find individual currents and voltages, **unwind**: go back through the drawings in reverse.

:::worked title="A series–parallel circuit"
A 4 Ω resistor is in series with a parallel pair of 6 Ω and 3 Ω, across a 12 V battery. Find every current.

**Reduce.** The pair gives $\dfrac{6\times3}{6+3} = 2\ \Omega$. In series with 4 Ω: $R = 6\ \Omega$.

**Total current.** $I = 12/6 = 2$ A. All of it passes through the 4 Ω resistor, which therefore drops $8$ V.

**Unwind.** The parallel pair gets the remaining $12 - 8 = 4$ V. So $I_6 = 4/6 \approx 0.67$ A and $I_3 = 4/3 \approx 1.33$ A. Check: $0.67 + 1.33 = 2$ A. ✓
:::

## Voltage and current dividers {lvl=2 id=s-dividers label="Class 12"}

Two results are used so often that they are worth knowing by heart.

**Voltage divider.** In series the current is $I = V/(R_1 + R_2 + \dots)$, so the drop across $R_k$ is

$$V_k = V\,\frac{R_k}{R_1 + R_2 + \dots}.$$

The voltage is shared **in proportion to resistance**. This is how a potentiometer (a resistor with a sliding contact) supplies any voltage from 0 to $V$, and how sensors such as a light-dependent resistor turn a change of resistance into a change of voltage.

**Current divider.** Two resistors in parallel share the same $V$, so $I_1R_1 = I_2R_2$, which gives

$$I_1 = I\,\frac{R_2}{R_1 + R_2}, \qquad I_2 = I\,\frac{R_1}{R_1 + R_2}.$$

The current is shared **in inverse proportion to resistance**. Note the "other" resistor on top. A common slip is to write $R_1$ on top for $I_1$.

**Power follows the same pattern.** In series (same $I$), $P = I^2R$, so the **larger** resistance dissipates more. In parallel (same $V$), $P = V^2/R$, so the **smaller** resistance dissipates more. A 60 W, 220 V bulb has a higher filament resistance than a 100 W, 220 V bulb ($R = V^2/P$). Across the mains in parallel the 100 W bulb is brighter, but in series the 60 W bulb glows brighter.

:::qc
q: A 60 W and a 100 W bulb (both rated for 220 V) are connected in series to the 220 V mains. Which glows brighter?
options: ["The 100 W bulb", "The 60 W bulb", "Both equally"]
answer: 1
right: Right. In series the current is common, so P = I²R favours the larger resistance, and the 60 W bulb has the larger resistance (806 Ω against 484 Ω).
wrong: The ratings tell you the resistances, R = V²/P, so the 60 W bulb has more resistance. In series the same current flows, so P = I²R is larger for the 60 W bulb.
:::

**Loading.** A divider's output changes as soon as you connect something to it. Two 6 kΩ resistors across 12 V give 6 V at the middle. Connect a voltmeter of resistance 6 kΩ across the lower one: that part becomes 3 kΩ, and the meter reads $12 \times 3/9 = 4$ V, not 6 V. A good voltmeter must have a resistance much larger than whatever it is measuring.

## Quick bounds and why more never means less {lvl=3 id=s-bounds label="JEE"}

The rules give fast sanity checks before any arithmetic:

- $R_s$ is **larger than the largest** resistor, and $R_p$ is **smaller than the smallest**.
- $n$ equal resistors give $nR$ in series and $R/n$ in parallel, a ratio of $n^2$.
- A small resistor in parallel with a huge one is almost the small one: $1\ \Omega \parallel 1\ \text{M}\Omega \approx 0.999999\ \Omega$. A tiny resistor in series with a large one hardly matters.

**Conductance.** Define $G = 1/R$ (unit siemens, S). Then parallel conductances simply add, $G_p = G_1 + G_2 + \dots$, just as series resistances add. Thinking in conductance makes parallel problems as easy as series ones.

**Monotonicity (Rayleigh's principle).** In any network, however complicated:

- **increasing** any one resistance can never **decrease** the resistance between two terminals;
- **joining** two points with a wire (a short) can never increase it;
- **cutting** a wire can never decrease it.

These sound obvious, and they are true in general. They let you bracket an answer: cut a link to get an upper bound, short it to get a lower bound. For example, four resistors $a, b$ (in series) next to $c, d$ (in series), all in parallel, give $(a+b)\parallel(c+d)$. Joining the two midpoints gives $(a\parallel c) + (b\parallel d)$, which can only be smaller or equal. Equality holds exactly when the midpoints were already at the same potential, $a/b = c/d$. That is the balanced-bridge condition, met again below.

## Redrawing: nodes and equipotential points {lvl=3 id=s-nodes label="JEE"}

Many "hard" circuits are easy networks drawn confusingly. The cure is to label **nodes**:

1. Every resistor-free wire is a single node. Give all points on it the same letter, however far apart they look on the page.
2. Write each resistor as "between node X and node Y".
3. Redraw with each node once. Resistors between the same pair of nodes are in parallel. A resistor with both ends on the **same** node carries no current, so delete it.

**Equipotential points can be joined or separated freely.** If two points are at the same potential, a wire between them carries no current, so adding or removing it changes nothing. This is the key to every symmetry trick.

**Example: a triangle.** Three equal resistors $R$ form a triangle, and the terminals are two of its corners, A and B. Between A and B there are two paths: the direct resistor $R$, and the two others in series, $2R$. So $R_{AB} = R \parallel 2R = \dfrac{2R}{3}$.

## Symmetry and balanced bridges {lvl=3 id=s-symmetry label="JEE"}

Below, five resistors form a **bridge**. Nothing is in series or in parallel: the middle resistor between C and D links the two paths. Yet if all four outer arms are equal, the answer is easy.

:::figure caption="A bridge. If R_AC/R_CB = R_AD/R_DB, points C and D are at the same potential and the middle resistor carries no current."
<svg viewBox="0 0 280 190" role="img" aria-label="Bridge network of five resistors between terminals A and B">
<line class="ln" x1="30" y1="95" x2="130" y2="25"/><line class="ln" x1="130" y1="25" x2="230" y2="95"/>
<line class="ln" x1="30" y1="95" x2="130" y2="165"/><line class="ln" x1="130" y1="165" x2="230" y2="95"/>
<line class="ln" x1="130" y1="25" x2="130" y2="165"/>
<line class="ln" x1="5" y1="95" x2="30" y2="95"/><line class="ln" x1="230" y1="95" x2="255" y2="95"/>
<rect class="ln" x="65" y="55" width="30" height="10" transform="rotate(-35 80 60)" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect class="ln" x="165" y="55" width="30" height="10" transform="rotate(35 180 60)" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect class="ln" x="65" y="125" width="30" height="10" transform="rotate(35 80 130)" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect class="ln" x="165" y="125" width="30" height="10" transform="rotate(-35 180 130)" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect class="ln" x="125" y="80" width="10" height="30" style="fill:var(--surface);stroke:var(--muted);stroke-width:2"/>
<circle class="obj" cx="30" cy="95" r="3.5"/><circle class="obj" cx="230" cy="95" r="3.5"/><circle class="obj" cx="130" cy="25" r="3.5"/><circle class="obj" cx="130" cy="165" r="3.5"/>
<text class="k" x="12" y="88">A</text><text class="k" x="240" y="88">B</text><text class="k" x="136" y="20">C</text><text class="k" x="136" y="182">D</text>
<text x="58" y="42">P</text><text x="194" y="42">Q</text><text x="58" y="158">R</text><text x="194" y="158">S</text><text x="140" y="99">G</text>
</svg>
:::

**Balanced bridge.** Let current enter at A and leave at B. Along the upper path, C divides the drop in the ratio $P:Q$. Along the lower path, D divides it in the ratio $R:S$. If $P/Q = R/S$, then C and D are at the **same potential**. So the middle resistor G carries no current and can be removed: $R_{AB} = (P+Q)\parallel(R+S)$. With all five resistors equal to $R$, this gives $2R \parallel 2R = R$. The general unbalanced case, and its use for measuring resistance, belongs to the leaf on the Wheatstone bridge.

**Mirror symmetry.** If the network looks the same after reflection in a line (or plane) through both A and B, then each point and its mirror image are at the same potential. Join them. Resistors that then share both ends combine in parallel.

**Antisymmetry.** If reflecting in the perpendicular bisector of AB swaps A and B and leaves the network unchanged, every point on that bisector is at the midpoint potential $\tfrac12(V_A + V_B)$. All those points can be joined, or cut apart, as you like.

**Equal splitting.** If several branches leaving a node are equivalent under some symmetry, the current divides equally among them. You can then write currents down directly and add drops along one path, with no need to find an equivalent resistance first.

## The cube of resistors {lvl=3 id=s-cube label="JEE"}

Twelve equal resistors $R$ form the edges of a cube. What is the resistance between opposite corners A and B (the body diagonal)?

:::figure caption="A current I enters at A. It splits into I/3 on each of the 3 edges from A, then I/6 on each of the 6 middle edges, then recombines as I/3 on each of the 3 edges into B."
<svg viewBox="0 0 300 220" role="img" aria-label="A cube of twelve resistors with current entering at one corner and leaving at the opposite corner">
<line class="faint" x1="60" y1="190" x2="120" y2="150"/><line class="faint" x1="120" y1="150" x2="240" y2="150"/><line class="faint" x1="120" y1="150" x2="120" y2="30"/>
<rect class="ln" x="60" y="70" width="120" height="120" style="stroke:var(--phy);stroke-width:2"/>
<polyline class="ln" points="60,70 120,30 240,30 180,70" style="stroke:var(--phy);stroke-width:2"/>
<polyline class="ln" points="240,30 240,150 180,190" style="stroke:var(--phy);stroke-width:2"/>
<circle class="obj" cx="60" cy="190" r="4.5"/><circle class="obj" cx="240" cy="30" r="4.5"/>
<text class="k" x="40" y="206">A</text><text class="k" x="248" y="24">B</text>
<text x="80" y="208">I/3</text><text x="34" y="132">I/3</text><text x="98" y="182">I/3</text>
<text x="196" y="88">I/6 …</text>
<text x="214" y="58">I/3</text>
</svg>
:::

**Solution by equal splitting.** By symmetry the three edges leaving A are equivalent, so each carries $I/3$. Each of the three corners next to A sends its $I/3$ onward along **two** edges to the middle layer, $I/6$ each (six edges in all). The three corners next to B each collect $2 \times I/6 = I/3$ and pass it to B. Add the drops along any path from A to B:

$$V_{AB} = \frac{I}{3}R + \frac{I}{6}R + \frac{I}{3}R = \frac{5}{6}IR \quad\Rightarrow\quad R_{AB} = \frac{5R}{6}.$$

**Face diagonal** (A and C at opposite corners of one face). Use antisymmetry. With $V_A = 1$ and $V_C = 0$, the two other corners of that face lie on the bisecting plane, at $\tfrac12$, and so do the two corners above them. The corner $A'$ directly above A connects to A (at 1) and to two of those corners (at $\tfrac12$), so it sits at their average, $V_{A'} = \tfrac{1 + 1/2 + 1/2}{3} = \tfrac23$. Current leaving A is $\tfrac{2(1 - 1/2)}{R} + \tfrac{1 - 2/3}{R} = \tfrac{4}{3R}$, so $R_{AC} = \dfrac{3R}{4}$.

**Edge.** Here no simple symmetry is enough by itself; the answer, $7R/12$, comes in one line from Foster's theorem in the Olympiad section.

:::qc
q: In the cube with current entering at A and leaving at the opposite corner B, what current flows in each of the six edges of the middle layer?
options: ["I/3", "I/4", "I/6", "I/12"]
answer: 2
right: Right. Each of the three neighbours of A receives I/3 and splits it equally between its two onward edges.
wrong: Each of A's three neighbours gets I/3 and has two onward edges of equal standing, so each carries I/6.
:::

## Infinite ladders {lvl=3 id=s-ladder label="JEE"}

A ladder is a chain of repeated sections: a series resistor $r$ along the top rail, then a "rung" (shunt) $R$ down to the bottom rail, again and again, forever. What resistance $R_\infty$ is seen between the input terminals A and B?

:::figure caption="Self-similarity: chop off the first section and what remains (dashed box) is exactly the same infinite ladder, with resistance R∞."
<svg viewBox="0 0 360 150" role="img" aria-label="An infinite ladder network of series and shunt resistors">
<line class="ln" x1="20" y1="40" x2="40" y2="40"/><line class="ln" x1="80" y1="40" x2="140" y2="40"/><line class="ln" x1="180" y1="40" x2="240" y2="40"/><line class="ln" x1="280" y1="40" x2="300" y2="40"/>
<line class="ln" x1="20" y1="120" x2="300" y2="120"/>
<polyline class="ray" points="40,40 44,32 52,48 60,32 68,48 76,32 80,40"/>
<polyline class="ray" points="140,40 144,32 152,48 160,32 168,48 176,32 180,40"/>
<polyline class="ray" points="240,40 244,32 252,48 260,32 268,48 276,32 280,40"/>
<line class="ln" x1="110" y1="40" x2="110" y2="60"/><line class="ln" x1="110" y1="100" x2="110" y2="120"/>
<polyline class="ray" points="110,60 102,64 118,72 102,80 118,88 102,96 110,100"/>
<line class="ln" x1="210" y1="40" x2="210" y2="60"/><line class="ln" x1="210" y1="100" x2="210" y2="120"/>
<polyline class="ray" points="210,60 202,64 218,72 202,80 218,88 202,96 210,100"/>
<rect class="faint" x="96" y="18" width="250" height="118" style="stroke:var(--muted)"/>
<circle class="obj" cx="20" cy="40" r="3.5"/><circle class="obj" cx="20" cy="120" r="3.5"/>
<text class="k" x="6" y="36">A</text><text class="k" x="6" y="140">B</text>
<text x="55" y="26">r</text><text x="122" y="84">R</text><text x="155" y="26">r</text><text x="222" y="84">R</text>
<text x="308" y="84">…</text><text x="258" y="132">R∞ again</text>
</svg>
:::

**The trick is self-similarity.** Removing one section from an infinite ladder leaves an infinite ladder, so the part to the right of the first rung also has resistance $R_\infty$. The whole is then: $r$ in series with ($R$ in parallel with $R_\infty$):

$$R_\infty = r + \frac{R\,R_\infty}{R + R_\infty} \quad\Rightarrow\quad R_\infty^2 - rR_\infty - rR = 0 \quad\Rightarrow\quad R_\infty = \frac{r + \sqrt{r^2 + 4rR}}{2}.$$

Take the **positive root**, since a resistance cannot be negative. With $r = R$, $R_\infty = \tfrac{1+\sqrt5}{2}R \approx 1.618R$, the golden ratio.

**Is the infinite answer believable?** Build the ladder one section at a time, with $r = R = 1\ \Omega$. One section (ending in its rung) gives 2 Ω. Two give $1 + \tfrac{1\times2}{1+2} = \tfrac53$. Three give $\tfrac{13}{8} = 1.625$, then $\tfrac{34}{21} \approx 1.619$. These are ratios of Fibonacci numbers, and they close in on 1.618 very fast. Far sections carry almost no current, so a long finite ladder behaves like an infinite one.

## Delta–star transformation {lvl=4 id=s-deltastar label="Olympiad"}

An **unbalanced** bridge has no series or parallel pairs and no symmetry. Kirchhoff's rules (their own leaf) will always solve it. There is also a neat reduction, which works because **a three-terminal network is completely described by its three pairwise resistances**. So a triangle (delta) of resistors $R_{ab}, R_{bc}, R_{ca}$ can be replaced by a Y (star) of $R_a, R_b, R_c$ meeting at a new central point, provided the resistance between every pair of terminals matches, with the third terminal left unconnected:

$$R_a + R_b = \frac{R_{ab}(R_{bc} + R_{ca})}{\Sigma}, \text{ and cyclically, where } \Sigma = R_{ab} + R_{bc} + R_{ca}.$$

Add two of these equations and subtract the third:

:::law caption="Delta to star: each star arm is the product of the two delta resistors touching that corner, divided by the sum of all three. Reverse: R_ab = (R_aR_b + R_bR_c + R_cR_a)/R_c."
$$R_a = \frac{R_{ab}R_{ca}}{R_{ab} + R_{bc} + R_{ca}}$$
:::

For three equal resistors, delta $R$ becomes star $R/3$.

:::worked title="An unbalanced bridge"
In the bridge figure take $P = R_{AC} = 1\ \Omega$, $Q = R_{CB} = 2\ \Omega$, $R = R_{AD} = 2\ \Omega$, $S = R_{DB} = 1\ \Omega$ and $G = R_{CD} = 1\ \Omega$. Here $P/Q \ne R/S$, so the bridge is not balanced.

Convert the delta A–C–D (1, 1, 2; sum 4) to a star with centre O:
$R_A = \tfrac{1\times2}{4} = 0.5\ \Omega$, $R_C = \tfrac{1\times1}{4} = 0.25\ \Omega$, $R_D = \tfrac{2\times1}{4} = 0.5\ \Omega$.

Now A–O is 0.5 Ω, followed by two parallel paths to B: O–C–B $= 0.25 + 2 = 2.25\ \Omega$ and O–D–B $= 0.5 + 1 = 1.5\ \Omega$. Their parallel value is $\tfrac{2.25\times1.5}{3.75} = 0.9\ \Omega$. So $R_{AB} = 0.5 + 0.9 = 1.4\ \Omega$.
:::

## Superposition and the infinite grid {lvl=4 id=s-grid label="Olympiad"}

Resistor networks are **linear**: double all the currents fed in and every current and voltage doubles. So the response to two sources acting together is the **sum** of the responses to each alone (superposition). This lets us split one hard problem into two symmetric easy ones.

**Infinite square grid.** Every link of an endless square mesh is $R$. Find the resistance between neighbours A and B.

1. Feed current $I$ into A and let it leave "at infinity". By symmetry the four links at A are equivalent, so link AB carries $I/4$ from A to B.
2. Separately, draw current $I$ out of B, supplied from infinity. Again by symmetry, AB carries $I/4$, still in the direction A to B.
3. Superpose. Current $I$ enters at A and leaves at B, the infinity parts cancel, and AB carries $I/4 + I/4 = I/2$.

So $V_{AB} = \tfrac12 IR$ and $R_{AB} = R/2$. The same argument gives $2R/z$ for neighbours in any infinite lattice in which every node has $z$ equivalent links: $2R/3$ for a honeycomb, $R/3$ for a triangular lattice and $R/3$ for a simple cubic lattice in 3D.

## Foster's theorem {lvl=4 id=s-foster label="Olympiad"}

For any connected network of $N$ nodes, let $R_e$ be the resistor on each edge $e$ and $R^{\text{eff}}_e$ the equivalent resistance measured between that edge's two ends, with the whole network in place. Foster's theorem (R. M. Foster, 1949) says:

:::law caption="Foster's theorem: summed over all edges of a connected network of N nodes."
$$\sum_{\text{edges}} \frac{R^{\text{eff}}_e}{R_e} = N - 1$$
:::

A tree (no loops) is a quick check: every edge is the only path between its ends, so each ratio is 1, and a tree with $N$ nodes has $N-1$ edges. ✓ Loops give extra paths, which make each ratio less than 1, but the sum stays fixed.

**Cube edge.** The cube has $N = 8$ corners and 12 equal edges, all equivalent by symmetry, so $12\,R_{\text{edge}}/R = 7$. Therefore $R_{\text{edge}} = \dfrac{7R}{12}$.

The same idea works for any network in which all edges look alike: the regular polyhedra, a complete graph or a ring. For a ring of $n$ equal resistors, $n \cdot R_{\text{adj}}/R = n - 1$, so $R_{\text{adj}} = \tfrac{n-1}{n}R$. That agrees with $R \parallel (n-1)R$. ✓

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Series: one path, so the same current; potential drops add; $R_s = R_1 + R_2 + \dots$, larger than the largest. {lvl=1}
2. Parallel: same two end points, so the same voltage; currents add; $1/R_p = 1/R_1 + 1/R_2 + \dots$, smaller than the smallest. {lvl=1}
3. Homes use parallel wiring: full voltage to each appliance, independent switching, no chain failure. More appliances means lower total resistance and higher total current. {lvl=1}
4. Voltage divides in proportion to $R$ in series; current divides in inverse proportion to $R$ in parallel. In series the larger $R$ dissipates more power; in parallel the smaller $R$ does. {lvl=2}
5. Points at equal potential can be joined or separated freely; symmetry finds such points and equal current splits. {lvl=3}
6. Cube: $5R/6$ (body diagonal), $3R/4$ (face diagonal), $7R/12$ (edge). Infinite ladder: $R_\infty = \tfrac12(r + \sqrt{r^2 + 4rR})$. {lvl=3}
7. Delta–star, superposition (infinite grid gives $R/2$ between neighbours) and Foster's theorem crack networks with no series or parallel structure. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- After adding reciprocals, **invert**: $1/R_p = 1/2$ means $R_p = 2\ \Omega$, not $0.5\ \Omega$.
- Two resistors are in series only if **no branch leaves the point between them**; they are in parallel only if **both ends** share nodes.
- A rated bulb's resistance is $V_{\text{rated}}^2/P_{\text{rated}}$. In series the lower-wattage bulb glows brighter. {lvl=2}
- In the current divider the **other** resistor goes on top: $I_1 = I R_2/(R_1+R_2)$. {lvl=2}
- A resistor with both ends on the same node, or joining two equipotential points, carries no current. Delete it. {lvl=3}
- Infinite ladder: keep the positive root, and check that $r < R_\infty < r + R$ (one section alone gives $r + R$; each added section lowers the total). {lvl=3}
- Superposition: both halves must have the current flowing the **same way** through the link before you add them. {lvl=4}
:::
