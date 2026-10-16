---
title: Kirchhoff's rules
summary: The junction rule (charge conservation) and the loop rule (a conservative field plus the EMF of cells), careful sign conventions, the branch-current method, why the equations always suffice, nodal and mesh analysis, charging a battery, superposition, symmetry with sources, Thevenin's theorem and where the rules break down.
ncert: ["Class 12 Physics · Ch 3 Current Electricity (§3.12)"]
up_to: Olympiad
builds_on: [Ohm's law, Resistors in series and parallel, EMF and internal resistance, Electric potential]
notes_prompt: Explain, without writing any equation, why going once round any closed loop of a circuit must bring you back to the same potential, and why this stops being true near a changing magnetic field.
margin:
  - kind: history
    title: History
    text: Gustav Kirchhoff stated both rules in 1845 while still a student at Königsberg. In 1847 he showed how to count the independent equations of a network, an argument now described using spanning trees of a graph. (Dates from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "Fix every branch current's direction on the figure before writing any equation, and use the junction rule at once to cut down the unknowns. A negative answer only means the real current flows the other way."
  - kind: olympiad
    title: Olympiad link
    text: Any linear network seen from two terminals behaves like a single cell of EMF E_th with internal resistance R_th (Thevenin). This turns networks with one non-linear part, such as a diode or lamp, into a one-line problem.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 3 Current Electricity, §3.12 Kirchhoff's rules, Examples 3.5–3.6, Exercises 3.7–3.8" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 32 Electric Current in Conductors (Kirchhoff's laws)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.4 Electric current" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 4 Electric currents (networks, Thevenin)" }
cards:
  - { front: "Junction rule and the law behind it?", back: "At any junction, the sum of currents entering equals the sum leaving, $\\sum I = 0$. Charge is conserved and cannot pile up in a steady state." }
  - { front: "Loop rule and the law behind it?", back: "Round any closed loop, the algebraic sum of EMFs and $IR$ drops is zero. The electrostatic field is conservative, $\\oint \\vec E\\cdot d\\vec l = 0$, so you return to the same potential." }
  - { front: "Sign rules for a loop walk?", back: "Resistor walked along the current: $-IR$; against it: $+IR$. Cell walked from $-$ to $+$: $+\\varepsilon$; from $+$ to $-$: $-\\varepsilon$." }
  - { front: "How many independent equations for a network with $b$ branches and $n$ nodes?", back: "$n-1$ junction equations plus $b-n+1$ loop equations, total $b$: one per branch current." }
  - { front: "Terminal voltage of a cell being charged?", back: "$V = \\varepsilon + Ir$: the current enters the positive terminal, so the charger must supply the EMF plus the internal drop." }
  - { front: "Thevenin equivalent of a two-terminal linear network?", back: "A cell of EMF $E_{th}$ = open-circuit voltage, in series with $R_{th}$ = resistance between the terminals with every source replaced by its internal resistance (or $E_{th}/I_{sc}$)." }
---

:::hook
q: A 10 V cell (internal resistance 2 Ω) and a 4 V cell (internal resistance 1 Ω) are connected in parallel, positive to positive, and a 2 Ω lamp is connected across them. What does the 4 V cell do?
options: ["It helps the 10 V cell, pushing current out of its positive terminal", "Current is driven into its positive terminal: it is being charged", "Nothing: no current flows through it"]
answer: 1
right: Right. The common terminal voltage turns out to be 4.5 V, which is above the 4 V cell's EMF, so 0.5 A is pushed backwards through it. Kirchhoff's rules find this in a few lines, and the worked example below does exactly that.
wrong: The two cells are not in series, so their EMFs do not simply add or subtract. The 10 V cell raises the common terminals to 4.5 V, above the smaller cell's EMF, so current is forced into the 4 V cell's positive terminal and it is charged.
:::

## Where series and parallel stop working {lvl=1 id=s-why label="Class 10"}

Series and parallel rules reduce many circuits to one resistor. But they only work when a circuit is built **entirely** from series and parallel pairs. Put a second cell in a different branch, or add one cross-connection, and there may be no two resistors left that are purely in series or purely in parallel.

What survives in every circuit is the reason the series and parallel rules were true in the first place. Two conservation laws:

- **Charge is conserved.** In a steady current no charge piles up anywhere, so whatever flows into a point must flow out.
- **Energy is conserved, and potential is a property of a point.** A coulomb carried once round any closed path and back to its start returns to the same potential, so the rises in potential along the way exactly cancel the drops.

Kirchhoff wrote these two facts as two rules that apply to **any** network of cells and resistors. The series and parallel rules are just the two simplest cases.

:::qc
q: In a steady circuit, 5 A flows into a junction along one wire, and two wires leave it. One of them carries 2 A. What does the other carry?
options: ["7 A", "3 A", "2.5 A", "It cannot be found"]
answer: 1
right: Right. What flows in must flow out, so 5 = 2 + I and I = 3 A.
wrong: Charge cannot pile up at the junction, so the 5 A in must equal the total out, 2 A + I. That gives 3 A.
:::

## The junction rule {lvl=2 id=s-junction label="Class 12"}

A **junction** (node) is a point where three or more wires meet. In a steady state the charge at the junction is not changing, so the rate at which charge arrives equals the rate at which it leaves:

:::law caption="Junction rule (Kirchhoff's first rule): conservation of charge."
$$\sum I_{\text{in}} = \sum I_{\text{out}} \qquad\text{or}\qquad \sum_k I_k = 0 \ \ (\text{in} +,\ \text{out} -)$$
:::

**Why "steady" matters.** When you first close a switch, some charge does collect, on the surfaces of the wires and at bends and junctions. That surface charge is exactly what bends the electric field to follow the wire. It builds up in about a nanosecond and then stays fixed. After that, any extra charge piling up would change the field and push the current back towards balance, so the steady state obeys the rule exactly.

**Use it first.** If a junction has three wires and you know or name two of the currents, the third is fixed. NCERT Example 3.6 does this: it names only three currents for a six-branch network and writes the other three as sums and differences.

## The loop rule {lvl=2 id=s-loop label="Class 12"}

In a steady state the charges sitting on wires and terminals are fixed in place, so the electric field they produce is an **electrostatic** field. Such a field is conservative: the work it does on a charge carried round any closed path is zero, $\oint \vec E\cdot d\vec l = 0$. Equivalently, every point has a single, definite potential.

So walk once round any closed loop of the circuit, adding up the changes in potential, and you must arrive back at the potential you started with:

:::law caption="Loop rule (Kirchhoff's second rule): the total change of potential round any closed loop is zero."
$$\sum_{\text{loop}} \Delta V = 0, \qquad\text{that is}\qquad \sum \varepsilon = \sum IR \ \text{(with signs)}$$
:::

**Where do the cells come in?** Inside a cell, chemical forces (not the electrostatic field) push positive charge from the negative terminal to the positive one, against the field. The work done per coulomb is the EMF $\varepsilon$. As you cross the cell from $-$ to $+$, the potential **rises** by $\varepsilon$, less any drop across its internal resistance. In resistors the current flows from high potential to low, so walking **along** the current the potential **falls** by $IR$.

Think of a hill walk. Cells are lifts that carry you up; resistors are slopes down. Round any closed walk you end at the height where you started.

:::qc
q: A single loop contains a 12 V cell and two resistors, 2 Ω and 4 Ω, with no internal resistance. Walking round with the current, what is the sum of the two potential drops?
options: ["6 V", "12 V", "24 V", "It depends on where you start"]
answer: 1
right: Right. The loop rule says the drops add up to the EMF, 12 V, wherever you start. Here I = 2 A, and the drops are 4 V and 8 V.
wrong: Round a closed loop the rises equal the drops. The only rise is the 12 V cell, so the drops in the resistors must total 12 V.
:::

## Sign conventions, done carefully {lvl=2 id=s-signs label="Class 12"}

Almost every mistake with Kirchhoff's rules is a sign mistake. Fix two choices, and then follow four rules mechanically.

1. **Choose a direction for each branch current** and draw an arrow. A guess is fine: if the guess is wrong, the answer comes out negative.
2. **Choose a direction to walk round each loop**, clockwise or anticlockwise. It does not matter which.

:::figure caption="Changes in potential as you walk across an element in the direction of the walking arrow (above each element). Current arrows are drawn below the resistors."
<svg viewBox="0 0 360 170" role="img" aria-label="Four cases: walking across a resistor with and against the current, and across a cell from negative to positive and from positive to negative">
<line class="ln" x1="20" y1="40" x2="55" y2="40"/><polyline class="ray" points="55,40 59,32 67,48 75,32 83,48 91,32 95,40"/><line class="ln" x1="95" y1="40" x2="130" y2="40"/>
<text x="40" y="18">walk →</text><text x="40" y="68">I →</text><text class="k" x="40" y="92">ΔV = −IR</text>
<line class="ln" x1="200" y1="40" x2="235" y2="40"/><polyline class="ray" points="235,40 239,32 247,48 255,32 263,48 271,32 275,40"/><line class="ln" x1="275" y1="40" x2="310" y2="40"/>
<text x="220" y="18">walk →</text><text x="220" y="68">← I</text><text class="k" x="220" y="92">ΔV = +IR</text>
<line class="ln" x1="20" y1="135" x2="68" y2="135"/><line class="ln" x1="68" y1="128" x2="68" y2="142" style="stroke-width:4"/><line class="ln" x1="80" y1="121" x2="80" y2="149" style="stroke-width:2"/><line class="ln" x1="80" y1="135" x2="130" y2="135"/>
<text x="56" y="118">−</text><text x="86" y="118">+</text><text x="40" y="112">walk →</text><text class="k" x="40" y="166">ΔV = +ε</text>
<line class="ln" x1="200" y1="135" x2="248" y2="135"/><line class="ln" x1="248" y1="121" x2="248" y2="149" style="stroke-width:2"/><line class="ln" x1="260" y1="128" x2="260" y2="142" style="stroke-width:4"/><line class="ln" x1="260" y1="135" x2="310" y2="135"/>
<text x="236" y="118">+</text><text x="266" y="118">−</text><text x="220" y="112">walk →</text><text class="k" x="220" y="166">ΔV = −ε</text>
</svg>
:::

- Across a resistor **in the direction of its current arrow**: $\Delta V = -IR$. Against it: $+IR$.
- Across a cell **from $-$ to $+$**: $\Delta V = +\varepsilon$. From $+$ to $-$: $-\varepsilon$. This does **not** depend on which way the current flows.
- A cell's internal resistance $r$ is just another resistor in the branch, treated by the resistor rule.

**The terminal-voltage formulas come from this.** Walk from the negative terminal of a cell to its positive terminal, through the cell. You gain $\varepsilon$, and you cross $r$. If the current also flows $-$ to $+$ inside the cell (the cell is discharging), you walk along it and lose $Ir$:

$$V_+ - V_- = \varepsilon - Ir \quad\text{(discharging)}.$$

If the current is driven the other way, into the positive terminal (the cell is being charged), you walk against it and gain $Ir$:

$$V_+ - V_- = \varepsilon + Ir \quad\text{(charging)}.$$

These are NCERT's two expressions $V = \varepsilon - Ir$ and $V = \varepsilon + Ir$, and they are both just the loop rule applied to the inside of one cell.

:::qc
q: Walking round a loop you cross a 6 V cell from its positive to its negative terminal, and then a 3 Ω resistor in the same direction as its current of 1 A. What is the total change in potential over these two elements?
options: ["+9 V", "+3 V", "−3 V", "−9 V"]
answer: 3
right: Right. Crossing the cell from + to − gives −6 V whatever the current does, and walking along the current in the resistor gives −IR = −3 V. Total −9 V.
wrong: The cell term depends only on the order of its terminals as you walk (+ to − gives −ε), and the resistor term depends only on whether you walk with the current (−IR) or against it (+IR).
:::

## The branch-current method {lvl=2 id=s-method label="Class 12"}

The working recipe, used in NCERT Examples 3.5 and 3.6:

1. Mark every **branch**: a stretch of circuit between two junctions, which carries one current all along it.
2. Give each branch a current and an arrow. **Use the junction rule straight away**, so that only the truly independent currents get new letters.
3. Write the loop rule round enough loops to get as many equations as unknowns. Each new loop must pass through at least one branch not used before.
4. Solve. Check the result with a loop you did not use.

:::figure caption="The hook circuit. Three branches join the top junction X to the bottom junction Y. The current arrows are guesses: I₁ up through the 10 V cell, I₂ down through the lamp, I₃ up through the 4 V cell."
<svg viewBox="0 0 320 200" role="img" aria-label="Two cells with internal resistances in parallel with a 2 ohm lamp, three vertical branches between a top wire X and a bottom wire Y">
<line class="ln" x1="50" y1="30" x2="270" y2="30"/><line class="ln" x1="50" y1="175" x2="270" y2="175"/>
<line class="ln" x1="50" y1="30" x2="50" y2="72"/><line class="ln" x1="50" y1="72" x2="50" y2="72"/>
<line class="ln" x1="36" y1="72" x2="64" y2="72" style="stroke-width:2"/><line class="ln" x1="43" y1="80" x2="57" y2="80" style="stroke-width:4"/>
<line class="ln" x1="50" y1="80" x2="50" y2="110"/><polyline class="ray" points="50,110 58,114 42,122 58,130 42,138 58,146 50,150"/><line class="ln" x1="50" y1="150" x2="50" y2="175"/>
<line class="ln" x1="160" y1="30" x2="160" y2="80"/><polyline class="ray" points="160,80 168,85 152,93 168,101 152,109 168,117 160,122"/><line class="ln" x1="160" y1="122" x2="160" y2="175"/>
<line class="ln" x1="270" y1="30" x2="270" y2="72"/>
<line class="ln" x1="256" y1="72" x2="284" y2="72" style="stroke-width:2"/><line class="ln" x1="263" y1="80" x2="277" y2="80" style="stroke-width:4"/>
<line class="ln" x1="270" y1="80" x2="270" y2="110"/><polyline class="ray" points="270,110 278,114 262,122 278,130 262,138 278,146 270,150"/><line class="ln" x1="270" y1="150" x2="270" y2="175"/>
<circle class="obj" cx="160" cy="30" r="3.5"/><circle class="obj" cx="160" cy="175" r="3.5"/>
<text class="k" x="155" y="20">X</text><text class="k" x="155" y="195">Y</text>
<text x="68" y="80">10 V</text><text x="66" y="134">2 Ω</text>
<text x="176" y="105">2 Ω (lamp)</text>
<text x="210" y="80">4 V</text><text x="226" y="134">1 Ω</text>
<text x="20" y="104">I₁↑</text><text x="134" y="150">I₂↓</text><text x="286" y="104">I₃↑</text>
</svg>
:::

:::worked title="The hook circuit by branch currents"
**Junction X:** $I_1 + I_3 = I_2$. So there are two unknowns, say $I_1$ and $I_2$, with $I_3 = I_2 - I_1$.

**Left loop** (up the 10 V branch, down the lamp, walking along both arrows): $+10 - 2I_1 - 2I_2 = 0$.

**Right loop** (up the 4 V branch, down the lamp): $+4 - 1\cdot I_3 - 2I_2 = 0$.

From the left loop, $I_2 = 5 - I_1$. Then $I_3 = I_2 - I_1 = 5 - 2I_1$, and the right loop gives $4 - (5 - 2I_1) - 2(5 - I_1) = 0$, so $4I_1 = 11$:

$$I_1 = 2.75\ \text{A},\qquad I_2 = 2.25\ \text{A},\qquad I_3 = -0.5\ \text{A}.$$

$I_3$ is negative, so the real current in the 4 V branch is 0.5 A **downwards**, into the positive terminal of the 4 V cell. It is being charged.

**Check** with the outer loop (up the 10 V branch, down the 4 V branch): $+10 - 2(2.75) + 1(-0.5) - 4 = 10 - 5.5 - 0.5 - 4 = 0$ ✓.
:::

## Charging a battery {lvl=2 id=s-charging label="Class 12"}

The hook circuit shows that "is this cell charging or discharging?" is not decided by the cell but by the **circuit**. A cell is charged whenever the rest of the network holds its terminals above its EMF.

In the worked example the terminal voltage (the potential of X above Y) is $10 - 2(2.75) = 4.5$ V. For the 4 V cell, $V = \varepsilon + Ir = 4 + 0.5\times1 = 4.5$ V ✓, the charging formula.

**Energy bookkeeping.** The power delivered into the charging cell is $VI = 4.5\times0.5 = 2.25$ W. Of this, $\varepsilon I = 2.0$ W is stored as chemical energy, and $I^2r = 0.25$ W heats the cell. In general

$$VI = \varepsilon I + I^2 r \quad\text{(charging)}, \qquad \varepsilon I = VI + I^2 r \quad\text{(discharging)}.$$

**Why a series resistor in a charger?** The charging current is $(V_{\text{supply}} - \varepsilon)/(R + r)$. A battery's $r$ is tiny, so without a series $R$ even a modest excess voltage drives a huge current. NCERT Exercise 3.8 works this out for an 8 V battery on a 120 V supply: 7 A with a 15.5 Ω resistor, but 224 A without it.

:::qc
q: A 12 V battery of internal resistance 0.1 Ω is being charged with a current of 5 A. What is its terminal voltage?
options: ["11.5 V", "12.0 V", "12.5 V", "17 V"]
answer: 2
right: Right. While charging, V = ε + Ir = 12 + 5 × 0.1 = 12.5 V. The charger must overcome both the EMF and the internal drop.
wrong: The current is going into the positive terminal, so walking from − to + inside the cell you go against the current and gain Ir: V = 12 + 0.5 = 12.5 V.
:::

## Why the two rules are always enough {lvl=3 id=s-count label="JEE"}

A network has $b$ branches and $n$ junctions. There are $b$ unknown currents, so we need exactly $b$ **independent** equations. Do the rules supply them?

**Junction equations: $n - 1$ of them.** Write the junction rule at every one of the $n$ junctions. Each branch current leaves one junction and enters another, so it appears exactly twice, once with $+$ and once with $-$. Adding all $n$ equations gives $0 = 0$. So any one of them follows from the other $n-1$. The other $n - 1$ are independent (each new junction brings in a branch the others lack).

**Loop equations: $b - n + 1$ of them.** Pick a **tree**: a set of branches that connects all $n$ junctions without forming any loop. A tree always has exactly $n - 1$ branches. Each of the remaining $b - n + 1$ branches, added to the tree, closes exactly one loop. Each such loop contains a branch that no other chosen loop contains, so its equation cannot be built from the others. Any other loop is a combination of these, so it gives nothing new.

:::law caption="Counting equations. For a planar circuit the b − n + 1 loops can be taken as the 'window panes' (meshes) of the drawing."
$$\underbrace{(n-1)}_{\text{junctions}} + \underbrace{(b-n+1)}_{\text{loops}} = b$$
:::

Checks:

- Hook circuit: $n = 2$, $b = 3$, so 1 junction equation and 2 loop equations. ✓
- NCERT Example 3.6: $n = 4$, $b = 6$, so 3 junction and 3 loop equations. NCERT used the 3 junction equations to name only 3 currents, then wrote 3 loops. ✓
- Cube with a battery across a body diagonal (Example 3.5): $n = 8$, $b = 12 + 1 = 13$, so 7 junction and 6 loop equations. Symmetry cuts this down to one equation.

:::qc
q: A circuit has 5 junctions and 8 branches. How many independent loop equations does it give?
options: ["3", "4", "5", "8"]
answer: 1
right: Right. b − n + 1 = 8 − 5 + 1 = 4. Together with 4 junction equations that makes 8, one per branch current.
wrong: Use b − n + 1. Here 8 − 5 + 1 = 4 loops, and n − 1 = 4 junction equations, 8 in all.
:::

## Nodal and mesh analysis {lvl=3 id=s-nodal label="JEE"}

The branch-current method uses $b$ unknowns at first. Two systematic methods start with fewer, by building one rule in automatically.

**Nodal analysis (unknowns: potentials).** Choose one junction as zero potential (ground). Give every other junction an unknown potential. Then the loop rule is automatically satisfied, because potentials are single-valued. Write each branch current from Ohm's law, and apply **only** the junction rule, at the $n - 1$ other junctions.

For a branch from node P to node Q holding a cell $\varepsilon$ (positive end towards Q) and total resistance $R$, the current from P to Q is

$$I_{PQ} = \frac{V_P - V_Q + \varepsilon}{R}.$$

*Hook circuit by nodal analysis.* Put $V_Y = 0$ and $V_X = V$. Currents into X: $(10 - V)/2$ from the left branch and $(4 - V)/1$ from the right. Current out of X through the lamp: $V/2$. So

$$\frac{10 - V}{2} + \frac{4 - V}{1} = \frac{V}{2} \;\Rightarrow\; 9 = 2V \;\Rightarrow\; V = 4.5\ \text{V}.$$

One equation instead of three. NCERT Exercise 3.7 is solved this way in the problems.

:::eq caption="Millman's rule: cells (EMF εᵢ, resistance rᵢ, including branches with ε = 0) all connected in parallel between two nodes give this common voltage. It is just nodal analysis with one unknown."
$$V = \frac{\sum_i \varepsilon_i / r_i}{\sum_i 1/r_i}$$
:::

**Mesh analysis (unknowns: loop currents).** For a planar circuit, give each window pane its own circulating current, all clockwise, say. A branch shared by two meshes carries the difference of their mesh currents. Now the junction rule is automatic (each mesh current flows in and out of every junction it passes), and you apply **only** the loop rule, once per mesh.

*Hook circuit by meshes.* Left mesh $i_a$, right mesh $i_b$, both clockwise. The lamp carries $i_a - i_b$ downwards.

- Left mesh: $10 - 2i_a - 2(i_a - i_b) = 0$, so $4i_a - 2i_b = 10$.
- Right mesh: up the lamp, then down the 4 V branch (crossing the cell + to −): $-2(i_b - i_a) - 1\cdot i_b - 4 = 0$, so $-2i_a + 3i_b = -4$.

So $i_b = 0.5$ A and $i_a = 2.75$ A. The 4 V branch carries $i_b = 0.5$ A **downwards**, the lamp $i_a - i_b = 2.25$ A, as before.

**Which to choose?** Count unknowns: nodal needs $n - 1$, mesh needs $b - n + 1$. Pick the smaller. Many cells in parallel favour nodal; a long chain of loops favours mesh.

## Superposition {lvl=3 id=s-super label="JEE"}

Every equation above is **linear**: currents and EMFs appear only to the first power, never multiplied together. Linear equations have a powerful property. If one set of EMFs produces currents $I$ and a second set produces $I'$, then both together produce $I + I'$.

:::law caption="Superposition. Valid only for linear (ohmic) elements; it fails for lamps, diodes and other non-ohmic parts."
In a linear network, the current in any branch equals the sum of the currents produced by each source acting alone, with every other cell replaced by its internal resistance.
:::

*Hook circuit by superposition.*

- 10 V cell alone (the 4 V cell replaced by its 1 Ω): $V = \dfrac{10/2}{1/2 + 1/2 + 1} = 2.5$ V.
- 4 V cell alone (the 10 V cell replaced by its 2 Ω): $V = \dfrac{4/1}{2} = 2$ V.
- Together: $V = 2.5 + 2 = 4.5$ V ✓.

**Powers do not superpose.** Power goes as $I^2$, and $(I + I')^2 \neq I^2 + I'^2$. Find the total current first, then the power.

:::qc
q: In a linear circuit, cell A alone drives 3 A through a resistor, and cell B alone drives 1 A through it in the opposite direction. Both cells are now connected. What current flows through the resistor?
options: ["4 A", "2 A", "√10 A", "It cannot be found without the circuit"]
answer: 1
right: Right. By superposition the currents add with signs: 3 − 1 = 2 A, in cell A's direction.
wrong: In a linear network the effects of the sources add as signed currents. Opposite directions subtract: 3 − 1 = 2 A.
:::

## Symmetry with Kirchhoff's rules {lvl=3 id=s-symmetry label="JEE"}

Symmetry tells you, before any algebra, which currents are equal and which points share a potential. Kirchhoff's rules then finish the job with one or two equations. The cube (NCERT Example 3.5, $R_{eq} = 5R/6$ across a body diagonal) is the standard case and is worked in the problems and in the series–parallel lesson. Here are two more solids.

**Tetrahedron.** Six equal resistors $R$ form the edges of a tetrahedron ABCD, with a cell across A and B. Swapping C and D leaves the circuit unchanged, so $V_C = V_D$ and edge CD carries no current. Also, reflecting in the plane through C, D and the midpoint of AB swaps A and B and reverses the current, so C and D sit at the midpoint potential. Remove CD: three parallel paths remain, $R$, $2R$ and $2R$:

$$R_{AB} = R \parallel 2R \parallel 2R = \frac{R}{2}.$$

**Octahedron.** Twelve equal resistors form the edges of an octahedron. Its six corners are a top A, a bottom B and four corners round the middle (the equator).

:::figure caption="Current I enters at the top corner A and leaves at the bottom corner B. All four equator corners are equivalent, so they share one potential and the four equator edges (faint) carry no current."
<svg viewBox="0 0 300 220" role="img" aria-label="An octahedron of resistors with current entering at the top vertex and leaving at the bottom vertex">
<line class="faint" x1="60" y1="112" x2="125" y2="135"/><line class="faint" x1="125" y1="135" x2="240" y2="112"/><line class="faint" x1="240" y1="112" x2="175" y2="90"/><line class="faint" x1="175" y1="90" x2="60" y2="112"/>
<line class="ln" x1="150" y1="20" x2="60" y2="112" style="stroke:var(--phy);stroke-width:2"/><line class="ln" x1="150" y1="20" x2="125" y2="135" style="stroke:var(--phy);stroke-width:2"/><line class="ln" x1="150" y1="20" x2="240" y2="112" style="stroke:var(--phy);stroke-width:2"/><line class="ln" x1="150" y1="20" x2="175" y2="90" style="stroke:var(--phy);stroke-width:2"/>
<line class="ln" x1="150" y1="200" x2="60" y2="112" style="stroke:var(--phy);stroke-width:2"/><line class="ln" x1="150" y1="200" x2="125" y2="135" style="stroke:var(--phy);stroke-width:2"/><line class="ln" x1="150" y1="200" x2="240" y2="112" style="stroke:var(--phy);stroke-width:2"/><line class="ln" x1="150" y1="200" x2="175" y2="90" style="stroke:var(--phy);stroke-width:2"/>
<circle class="obj" cx="150" cy="20" r="4.5"/><circle class="obj" cx="150" cy="200" r="4.5"/>
<text class="k" x="160" y="18">A</text><text class="k" x="160" y="212">B</text>
<text x="70" y="58">I/4 each</text><text x="70" y="172">I/4 each</text><text x="250" y="116">equator: same V</text>
</svg>
:::

Rotating about the line AB by a quarter turn leaves everything unchanged, so the four edges from A each carry $I/4$ and the four equator corners share one potential. The equator edges join equal potentials and carry nothing. Then

$$V_{AB} = \frac{I}{4}R + \frac{I}{4}R = \frac{IR}{2} \;\Rightarrow\; R_{AB} = \frac{R}{2}.$$

Between **adjacent** corners there is less symmetry. Foster's theorem (series–parallel lesson) gives it at once: 6 corners and 12 equivalent edges, so $12R_{\text{adj}}/R = 6 - 1$ and $R_{\text{adj}} = 5R/12$.

**Symmetry also works with cells inside the network**, provided the cells respect the same symmetry. If they do not, use superposition to split the problem into symmetric pieces, or Thevenin's theorem (next section) to treat the cell's branch separately.

:::qc
q: Six equal 1 Ω resistors form a tetrahedron ABCD. A cell maintains 6 V between A and B. What current flows in edge CD?
options: ["0 A", "1.5 A", "3 A", "6 A"]
answer: 0
right: Right. Swapping C and D leaves the circuit unchanged, so C and D are at the same potential and the edge between them carries no current.
wrong: Look at the symmetry: C and D play identical roles relative to A and B, so they must be at equal potential. Equal potentials at both ends mean zero current in CD.
:::

## Thevenin's theorem {lvl=4 id=s-thevenin label="Olympiad"}

Pick any two terminals P and Q of a linear network of cells and resistors, and connect something between them that draws current $I$ out of P. How does $V = V_P - V_Q$ depend on $I$?

**Why it must be a straight line.** Replace the external part by an ideal current source of value $I$ (whatever it is, it just fixes the current). By superposition, every potential in the network is (the value with $I = 0$) plus (a number proportional to $I$). So

$$V = E_{th} - I R_{th}$$

for two constants. That is exactly the terminal law of a single cell with EMF $E_{th}$ and internal resistance $R_{th}$.

:::law caption="Thevenin's theorem. Equivalently (Norton), the network is a current source E_th/R_th in parallel with R_th."
Seen from two terminals, any linear network behaves as one EMF $E_{th}$ in series with one resistance $R_{th}$, where
$E_{th}$ = the open-circuit voltage between the terminals, and
$R_{th}$ = the resistance between the terminals with every cell replaced by its internal resistance $= E_{th}/I_{\text{short circuit}}$.
:::

*Hook circuit again.* Take the lamp as the load. The rest is the 10 V/2 Ω and 4 V/1 Ω cells in parallel. Open circuit, Millman gives $E_{th} = \dfrac{10/2 + 4/1}{1/2 + 1} = 6$ V, and $R_{th} = 2 \parallel 1 = \tfrac23\ \Omega$. With the 2 Ω lamp, $I = \dfrac{6}{2/3 + 2} = 2.25$ A ✓.

**What it buys you.**

- **One changing part.** If only one resistor is varied, reduce everything else once, and each new value is a one-line calculation.
- **Non-linear loads.** A lamp or diode breaks superposition, but the **rest** of the circuit is still linear. Replace it by $(E_{th}, R_{th})$ and intersect the straight line $V = E_{th} - IR_{th}$ with the element's I–V curve (the load-line method from the Ohm's law lesson).
- **Maximum power** to a load is $E_{th}^2/4R_{th}$, drawn when the load equals $R_{th}$ (heating-effect lesson).
- **Self-similar networks.** For an infinite ladder containing cells, the part beyond the first section is the same network, so it has the same $(E_{th}, R_{th})$. That gives two equations for two unknowns.

:::qc
q: An infinitely long ladder has a resistor R on each rung and on each section of the top rail, and every rung also contains a cell of EMF ε, all with their positive ends towards the top rail. What is the open-circuit voltage at the input?
options: ["0", "ε/2", "ε", "It grows without limit"]
answer: 2
right: Right. Try the guess that no current flows anywhere. Then every rung has V = ε across it, every top-rail resistor joins two points at ε, and every rule is satisfied. The solution is unique, so the guess is the answer: E_th = ε.
wrong: Test the possibility that no current flows at all. Each rung then shows exactly ε, every top-rail resistor has equal potentials at its ends, and both rules hold. Since the solution is unique, E_th = ε.
:::

## Why the answer is unique {lvl=4 id=s-unique label="Olympiad"}

The last quick check used a strong claim: a network of cells and positive resistors has **one and only one** set of currents. Here is why.

Suppose two different sets of currents, $I_k$ and $I'_k$, both satisfy the rules for the same cells. Their difference $J_k = I_k - I'_k$ satisfies the junction rule, and the loop rule **with all EMFs set to zero** (the EMFs cancel in the subtraction). So $J_k$ is a pattern of currents in a network with no sources.

For such a pattern, give each junction its potential $\phi$ (possible because the loop rule holds). The power dissipated is

$$\sum_k J_k^2 R_k = \sum_k J_k(\phi_{\text{start}} - \phi_{\text{end}}) = \sum_{\text{junctions}} \phi \times (\text{net current leaving}) = 0,$$

because the net current leaving every junction is zero. A sum of terms $J_k^2R_k \ge 0$ can be zero only if every $J_k = 0$. So the two solutions are the same.

Uniqueness is what makes symmetry arguments and inspired guesses legitimate: **any** current pattern that satisfies both rules is **the** answer. It also proves that $b$ independent equations in $b$ unknowns always have a solution, since a linear system with a unique solution of the source-free case is always solvable.

## When the rules fail {lvl=4 id=s-fail label="Olympiad"}

Both rules rest on the steady state. Each can fail when that is not true.

**The loop rule fails with changing magnetic flux.** If the magnetic flux $\Phi$ through a loop changes, the electric field is no longer conservative: $\oint \vec E\cdot d\vec l = -\,d\Phi/dt$ (Faraday's law, in the induction branch). There is then no single potential, and the "voltage between two points" depends on the path taken between them.

:::figure caption="A ring made of R₁ and R₂ surrounds a changing magnetic flux (crosses). Two voltmeters connected to the same points A and B, one on each side, read different values."
<svg viewBox="0 0 320 200" role="img" aria-label="A ring of two resistors around a region of changing magnetic flux, with voltmeters on the left and right connected to the same two points">
<circle cx="160" cy="100" r="62" style="fill:none;stroke:var(--ink);stroke-width:1.6"/>
<rect x="92" y="85" width="12" height="30" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect x="216" y="85" width="12" height="30" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<text x="140" y="96" style="fill:var(--muted)">× × ×</text><text x="140" y="112" style="fill:var(--muted)">× × ×</text><text x="134" y="132" style="fill:var(--muted)">dΦ/dt</text>
<circle class="obj" cx="160" cy="38" r="3.5"/><circle class="obj" cx="160" cy="162" r="3.5"/>
<text class="k" x="166" y="32">A</text><text class="k" x="166" y="178">B</text>
<text x="70" y="104">R₁</text><text x="234" y="104">R₂</text>
<polyline class="ln" points="160,38 30,38 30,82"/><polyline class="ln" points="30,118 30,162 160,162"/><circle cx="30" cy="100" r="16" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><text x="24" y="105">V</text>
<polyline class="ln" points="160,38 290,38 290,82"/><polyline class="ln" points="290,118 290,162 160,162"/><circle cx="290" cy="100" r="16" style="fill:none;stroke:var(--ink);stroke-width:1.4"/><text x="284" y="105">V</text>
</svg>
:::

In the figure, the induced EMF round the ring drives $I = \varepsilon/(R_1 + R_2)$. The left voltmeter's loop (through R₁) encloses no changing flux, so it reads $IR_1$. The right one reads $IR_2$. Both are connected to A and B, yet they disagree. Engineers rescue Kirchhoff's rules by putting the induced EMF into the circuit as a "cell" ($L\,dI/dt$ for a coil), but that is a model, not the original electrostatic rule.

**The junction rule fails where charge accumulates.** On one plate of a charging capacitor, current flows in and none flows out through the gap. Treating the whole capacitor as one element saves the rule: the current into one plate equals the current out of the other. (Maxwell's displacement current makes this exact.)

**Both fail at high frequency.** Kirchhoff's rules assume the circuit is small compared with the wavelength $c/f$ of the signals, so that a change at one end reaches the other end at once. At 50 Hz the wavelength is 6000 km and the rules are excellent. At GHz frequencies it is centimetres, and circuits must be treated as transmission lines and antennas.

:::qc
q: Why can two voltmeters connected to the same two points of a circuit give different readings?
options: ["One of them is faulty", "The leads of the two meters enclose different changing magnetic flux, so the electric field is not conservative", "The current is too large", "Kirchhoff's junction rule fails"]
answer: 1
right: Right. With changing flux, ∮E·dl ≠ 0, so the potential difference between A and B depends on the path. Each meter measures ∫E·dl along its own leads.
wrong: The loop rule needs ∮E·dl = 0. A changing magnetic flux makes this integral equal to −dΦ/dt, so the reading depends on which path the voltmeter leads take.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Junction rule: current in = current out at every junction. It is conservation of charge in a steady state. {lvl=1}
2. Loop rule: round any closed loop the potential rises (EMFs) equal the drops ($IR$). It holds because the steady-state field is conservative. {lvl=2}
3. Signs: $-IR$ walking with the current, $+IR$ against it; $+\varepsilon$ crossing a cell from $-$ to $+$, $-\varepsilon$ from $+$ to $-$. A negative current only means the arrow was drawn the wrong way. {lvl=2}
4. Terminal voltage: $V = \varepsilon - Ir$ while discharging, $V = \varepsilon + Ir$ while being charged. Whether a cell charges is decided by the rest of the circuit. {lvl=2}
5. $n - 1$ junction equations plus $b - n + 1$ loop equations give exactly $b$ independent equations. Nodal analysis ($n-1$ unknown potentials) and mesh analysis ($b-n+1$ loop currents) each build one rule in. {lvl=3}
6. Linear networks obey superposition. Symmetry finds equal currents and equal potentials (tetrahedron and octahedron, opposite corners: $R/2$). {lvl=3}
7. Thevenin: any linear two-terminal network is one EMF plus one resistance. The solution of a resistive network is unique. The loop rule fails with changing flux; the rules also fail at high frequency. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Use the junction rule **before** naming currents, so that each new letter is a genuine unknown. {lvl=2}
- The sign of an EMF term depends only on the order you cross the terminals, never on the current direction. {lvl=2}
- Internal resistance is a resistor in the branch: include its $Ir$ term in every loop through that cell. {lvl=2}
- Each new loop must contain a branch not used before; otherwise it repeats an earlier equation and the system cannot be solved. {lvl=3}
- Check the answer with a loop you did not use. It catches nearly every sign slip. {lvl=3}
- Superpose currents and voltages, never powers. When you switch off a cell, keep its internal resistance in place. {lvl=3}
- Superposition and Thevenin need linear elements. With a lamp or diode, reduce only the linear part, then solve with the element's I–V curve. {lvl=4}
- Near a changing magnetic flux the "potential difference between two points" depends on the path. Do not apply the electrostatic loop rule blindly. {lvl=4}
:::
