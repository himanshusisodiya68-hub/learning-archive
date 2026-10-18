---
title: The Wheatstone bridge
summary: 'How to measure an unknown resistance precisely by balancing it against known ones until nothing flows.'
ncert: ["Class 12 Physics · Ch 3 Current Electricity (§3.13)"]
up_to: Olympiad
builds_on: [Ohm's law, Resistors in series and parallel, Kirchhoff's rules, Resistance and resistivity]
notes_prompt: Explain in your own words why a Wheatstone bridge gives the same answer whether the battery is fresh or half-flat, and why that makes it more accurate than an ammeter and a voltmeter.
margin:
  - kind: history
    title: History
    text: "The bridge was described by Samuel Hunter Christie in 1833 and made famous by Charles Wheatstone, who credited Christie, in 1843. It kept Wheatstone's name anyway. [Unverified: dates recalled from memory.]"
  - kind: tip
    title: Practical favourite
    text: In the metre bridge, choose the known resistance so that the balance point falls near the middle of the wire. Then the reading error and the end corrections matter least. Touch the jockey to the wire; never drag it along.
  - kind: olympiad
    title: Olympiad link
    text: In the Carey Foster bridge, two balance readings with the gap resistors swapped cancel the unknown end resistances exactly. The trick is that both ratios have the same total, so equal ratios force equal numerators.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 3 Current Electricity, §3.13 Wheatstone bridge" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 32 Electric Current in Conductors (Wheatstone bridge, metre bridge)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.4 Electric current" }
cards:
  - { front: "Balance condition of a Wheatstone bridge (arms R1, R2 on one path, R3, R4 on the other)?", back: "$R_1/R_2 = R_3/R_4$ (NCERT writes $R_2/R_1 = R_4/R_3$). The galvanometer current is then zero." }
  - { front: "Why is a null measurement accurate?", back: "The balance condition contains no emf, no internal resistance and no galvanometer resistance. The galvanometer only has to show zero, so it needs no calibration." }
  - { front: "Metre bridge formula, known R in the left gap, unknown S in the right?", back: "$S = R\\,\\dfrac{100 - l}{l}$, with $l$ in cm measured from the left end." }
  - { front: "Where should the metre-bridge balance point be, and why?", back: "Near 50 cm. The fractional error $\\delta l\\,[1/l + 1/(100-l)]$ is smallest there, and end corrections matter least." }
  - { front: "Carey Foster bridge result?", back: "$X - Y = \\lambda\\,(l_2 - l_1)$, where $\\lambda$ is the wire's resistance per cm. End corrections cancel exactly." }
  - { front: "Quarter, half and full strain-gauge bridge outputs?", back: "About $E\\,x/4$, exactly $E\\,x/2$, exactly $E\\,x$, where $x = \\Delta R/R = G_F\\,\\varepsilon$." }
core:
  idea: 'A bridge is balanced when no current flows through the galvanometer, which happens exactly when the two midpoints are at the same potential: $R_1/R_2 = R_3/R_4$. This null condition contains no emf, battery resistance or galvanometer resistance.'
  formulas:
    - tex: '\frac{R_1}{R_2} = \frac{R_3}{R_4}'
      label: 'Balance condition (products of opposite arms equal)'
    - tex: 'S = R\,\frac{100 - l}{l}'
      label: 'Metre bridge (R in the left gap, l in cm)'
    - tex: 'X - Y = \lambda\,(l_2 - l_1)'
      label: 'Carey Foster bridge'
  conditions:
    - 'Exact balance: galvanometer current zero, so the two midpoints B and D are at equal potential'
    - 'Uniform metre-bridge wire, so resistance is proportional to length (end corrections neglected)'
    - 'Ideal battery and stable resistors that do not heat appreciably'
  sign: 'Pair the arms correctly: R1/R2 and R3/R4 are the two arms of each path from A to C. In the metre bridge, l is measured on the side of the gap holding R.'
outcomes:
  - 'Explain why a null method is accurate and derive the balance condition'
  - 'Find an unknown resistance with a Wheatstone bridge or a metre bridge'
  - 'Choose the balance point and ratio arms for best sensitivity, and account for end corrections'
  - 'Find the galvanometer current in an unbalanced bridge using Thevenins theorem'
  - 'Use the Carey Foster bridge, and quarter, half and full strain-gauge bridges'
---

:::hook
q: A Wheatstone bridge is balanced with a 2 V cell, so the galvanometer reads zero. You replace the cell with a 6 V battery and change nothing else. What does the galvanometer read now?
options: ["Zero", "Three times its previous reading", "A small current, because the bridge is now unbalanced", "It depends on the galvanometer's resistance"]
answer: 0
right: Right. Balance means the two middle points are at the same potential. Tripling the emf triples every potential in the circuit, so the two points stay equal and the reading stays zero. That is the whole secret of the bridge.
wrong: Balance depends only on the ratios of the four resistances. A bigger emf scales every potential by the same factor, so two equal potentials stay equal and the galvanometer still reads zero.
:::

## Why compare instead of measure? {lvl=2 id=s-why label="Class 12"}

The obvious way to find a resistance is to put it in a circuit, read the current $I$ on an ammeter and the voltage $V$ on a voltmeter, and divide. Every part of that has a flaw:

- The ammeter has some resistance and the voltmeter draws some current, so the meters disturb the very thing they measure.
- Each meter must be **calibrated**: its pointer must mean exactly what its scale says. A 2% error in each meter can give a 4% error in $R$.
- The battery runs down during the measurement, so $V$ and $I$ drift.

A better idea is the one a shopkeeper's beam balance uses. A beam balance does not measure weight; it **compares** an unknown mass with known ones and only asks "is the beam level?". It is accurate even if the beam's spring, pivot or scale is poor, because a level beam means the same thing on any balance.

The Wheatstone bridge does this for resistance. It compares an unknown resistor with known ones and asks a single yes-or-no question: **does any current flow through the galvanometer?** This is called a **null method**.

## The bridge and its balance condition {lvl=2 id=s-balance label="Class 12"}

Four resistors form a loop A–B–C–D. A battery is connected across one diagonal (A and C), and a galvanometer across the other (B and D). Current from A reaches C by two paths: through $R_1$ and $R_2$ (via B), or through $R_3$ and $R_4$ (via D).

:::figure caption="The Wheatstone bridge. The battery arm is AC and the galvanometer arm is BD. At balance, B and D are at the same potential and G reads zero."
<svg viewBox="0 0 300 240" role="img" aria-label="Wheatstone bridge: four resistors in a diamond A B C D, battery across A and C, galvanometer across B and D">
<line class="ln" x1="40" y1="110" x2="150" y2="30"/><line class="ln" x1="150" y1="30" x2="260" y2="110"/>
<line class="ln" x1="40" y1="110" x2="150" y2="190"/><line class="ln" x1="150" y1="190" x2="260" y2="110"/>
<line class="ln" x1="150" y1="30" x2="150" y2="98"/><line class="ln" x1="150" y1="122" x2="150" y2="190"/>
<circle cx="150" cy="110" r="12" style="fill:var(--surface);stroke:var(--muted);stroke-width:2"/>
<text class="k" x="145" y="115">G</text>
<rect x="80" y="65" width="30" height="10" transform="rotate(-36 95 70)" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect x="190" y="65" width="30" height="10" transform="rotate(36 205 70)" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect x="80" y="145" width="30" height="10" transform="rotate(36 95 150)" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect x="190" y="145" width="30" height="10" transform="rotate(-36 205 150)" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<polyline class="ln" points="40,110 40,222 144,222"/><polyline class="ln" points="156,222 260,222 260,110"/>
<line class="ln" x1="144" y1="208" x2="144" y2="236" style="stroke-width:2"/><line class="ln" x1="156" y1="215" x2="156" y2="229" style="stroke-width:4"/>
<circle class="obj" cx="40" cy="110" r="3.5"/><circle class="obj" cx="260" cy="110" r="3.5"/><circle class="obj" cx="150" cy="30" r="3.5"/><circle class="obj" cx="150" cy="190" r="3.5"/>
<text class="k" x="22" y="106">A</text><text class="k" x="268" y="106">C</text><text class="k" x="156" y="24">B</text><text class="k" x="156" y="206">D</text>
<text class="k" x="66" y="56">R₁</text><text class="k" x="220" y="56">R₂</text><text class="k" x="66" y="176">R₃</text><text class="k" x="220" y="176">R₄</text>
<text x="90" y="40">I₁ →</text><text x="88" y="196">I₂ →</text><text x="170" y="236">E</text>
</svg>
:::

**Route 1: equal potentials.** Take $V_C = 0$ and $V_A = E$. If no current flows through G, the path A–B–C is a plain series pair, and so is A–D–C. A series pair divides the voltage in proportion to its resistances (the voltage divider), so

$$V_B = E\,\frac{R_2}{R_1 + R_2}, \qquad V_D = E\,\frac{R_4}{R_3 + R_4}.$$

No current flows through G exactly when $V_B = V_D$:

$$\frac{R_2}{R_1 + R_2} = \frac{R_4}{R_3 + R_4} \iff R_2R_3 + R_2R_4 = R_1R_4 + R_2R_4 \iff R_2R_3 = R_1R_4 .$$

:::law caption="Balance condition (NCERT form R₂/R₁ = R₄/R₃). Equivalent forms: R₁R₄ = R₂R₃, or the products of opposite arms are equal."
$$\frac{R_1}{R_2} = \frac{R_3}{R_4}$$
:::

**Route 2: Kirchhoff's loop rule** (this is NCERT's route; see the lesson on Kirchhoff's rules). Let $I_g$ be the galvanometer current and $G$ its resistance. Go round loop ABDA: $I_1R_1 + I_gG - I_2R_3 = 0$. Go round loop BCDB: $(I_1 - I_g)R_2 - I_gG - (I_2 + I_g)R_4 = 0$. Now impose balance, $I_g = 0$:

$$I_1R_1 = I_2R_3, \qquad I_1R_2 = I_2R_4 .$$

Dividing one by the other removes the currents and gives $R_1/R_2 = R_3/R_4$ again.

**Why it works.** Picture the potential falling steadily from $E$ at A to 0 at C along each path. B sits at the fraction $R_1/(R_1+R_2)$ of the way down the top path; D sits at $R_3/(R_3+R_4)$ of the way down the bottom path. When the two fractions are equal, B and D are at the same "height", so nothing flows between them.

**Measuring an unknown.** Put the unknown in one arm, say $R_4$. Make $R_1$ and $R_2$ fixed "ratio arms", and adjust a known resistor $R_3$ until G reads zero. Then

$$R_4 = R_3\,\frac{R_2}{R_1}.$$

With $R_2/R_1 = 1/10$, $1$ or $10$, a resistance box covers a wide range.

:::qc
q: In a balanced bridge, R₁ = 100 Ω, R₂ = 10 Ω and R₃ = 470 Ω. What is R₄?
options: ["4700 Ω", "47 Ω", "4.7 Ω", "10 Ω"]
answer: 1
right: Right. R₁/R₂ = R₃/R₄ gives R₄ = R₃R₂/R₁ = 470 × 10/100 = 47 Ω.
wrong: Use R₁/R₂ = R₃/R₄. The ratio R₁/R₂ is 10, so R₃/R₄ must also be 10, giving R₄ = 47 Ω.
:::

## Why a null reading is so accurate {lvl=2 id=s-null label="Class 12"}

Look at what is **missing** from $R_1/R_2 = R_3/R_4$:

- **No emf.** Changing $E$ scales $V_B$ and $V_D$ by the same factor, so if they were equal they stay equal. A weak or drifting battery does not spoil the result.
- **No galvanometer resistance $G$.** At balance $I_g = 0$, so $G$ multiplies zero in every equation.
- **No internal resistance of the battery.** It changes the current entering at A, but both paths share that change in the same ratio.
- **No calibration.** The galvanometer only has to tell zero from not-zero. It never has to report *how much* current flows.

The accuracy now rests on the known resistors alone, and good standard resistors are far more stable than any pointer meter. The galvanometer only limits how small an imbalance you can notice, which is a question of **sensitivity** (below), not of calibration.

**Two useful by-products.**

1. **Balanced bridge, equivalent resistance.** At balance the galvanometer arm carries no current, so you may delete it (or short it). The network between A and C is then $(R_1 + R_2)$ in parallel with $(R_3 + R_4)$, which equals $R_1\|R_3 + R_2\|R_4$. This is the shortcut used in the lesson on resistors in series and parallel.
2. **Swapping battery and galvanometer.** The balance condition $R_1R_4 = R_2R_3$ is symmetric under that swap, so a bridge balanced one way stays balanced the other way.

:::qc
q: A bridge is balanced. Which change will upset the balance?
options: ["Replacing the galvanometer with a more sensitive one of different resistance", "Replacing the battery with one of higher internal resistance", "Doubling R₁ and R₃ together", "Doubling R₁ only"]
answer: 3
right: Right. Doubling R₁ alone changes R₁/R₂ but not R₃/R₄. Doubling R₁ and R₃ together doubles both ratios, so they stay equal, and the battery and galvanometer never appear in the condition.
wrong: The balance condition involves only the ratios R₁/R₂ and R₃/R₄. The battery and the galvanometer do not appear in it. Of the options, only doubling R₁ alone changes one ratio without the other.
:::

## The metre bridge {lvl=2 id=s-metre label="Class 12"}

A resistance box with many fine steps is expensive. The **metre bridge** (slide-wire bridge) replaces the two ratio arms with a single uniform wire, 1 m long, stretched along a metre scale. A sliding contact, the **jockey**, picks a point J on the wire.

:::figure caption="Metre bridge. Thick copper strips leave two gaps for a known resistance R and an unknown S. The jockey J divides the wire into lengths l and 100 − l (cm)."
<svg viewBox="0 0 300 220" role="img" aria-label="Metre bridge: a one-metre wire with two gaps holding R and S above it, a galvanometer from the middle strip to a sliding jockey">
<polyline class="ln" points="40,150 40,60 98,60" style="stroke-width:5"/>
<line class="ln" x1="128" y1="60" x2="172" y2="60" style="stroke-width:5"/>
<polyline class="ln" points="202,60 260,60 260,150" style="stroke-width:5"/>
<rect x="98" y="54" width="30" height="12" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<rect x="172" y="54" width="30" height="12" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<line class="ray" x1="40" y1="150" x2="260" y2="150" style="stroke-width:2"/>
<line class="ln" x1="150" y1="60" x2="150" y2="88"/>
<circle cx="150" cy="100" r="12" style="fill:var(--surface);stroke:var(--muted);stroke-width:2"/>
<text class="k" x="145" y="105">G</text>
<line class="ln" x1="146" y1="111" x2="118" y2="146"/>
<circle class="obj" cx="118" cy="150" r="3.5"/>
<polyline class="ln" points="40,150 40,196 144,196"/><polyline class="ln" points="156,196 260,196 260,150"/>
<line class="ln" x1="144" y1="182" x2="144" y2="210" style="stroke-width:2"/><line class="ln" x1="156" y1="189" x2="156" y2="203" style="stroke-width:4"/>
<line class="faint" x1="40" y1="166" x2="118" y2="166"/><line class="faint" x1="118" y1="166" x2="260" y2="166"/>
<text class="k" x="106" y="48">R</text><text class="k" x="180" y="48">S</text><text class="k" x="24" y="154">A</text><text class="k" x="266" y="154">C</text><text class="k" x="112" y="140">J</text><text class="k" x="152" y="52">B</text>
<text x="70" y="180">l</text><text x="170" y="180">100 − l</text><text x="160" y="215">E</text>
</svg>
:::

**Why a wire can be a ratio arm.** For a uniform wire, $R = \rho l/A$ with the same $\rho$ and $A$ everywhere, so the resistance of a piece is proportional to its length: $R_{AJ} = \lambda l$ and $R_{JC} = \lambda(100 - l)$, where $\lambda$ is the resistance per centimetre. The bridge has R and S on one path and the two wire segments on the other, so at balance

$$\frac{R}{S} = \frac{\lambda l}{\lambda(100 - l)} = \frac{l}{100 - l} \quad\Longrightarrow\quad S = R\,\frac{100 - l}{l}.$$

The unknown $\lambda$ cancels, so you never need to know the wire's resistance. A metre scale replaces an expensive set of precision resistors.

:::worked title="Finding S, and checking by interchange"
With $R = 10\ \Omega$ in the left gap, balance is found at $l = 40.0$ cm.

$S = 10 \times 60.0/40.0 = 15.0\ \Omega$.

**Interchange** R and S. Now $S/R = l'/(100 - l')$. If everything is ideal, the new balance is at $l' = 60.0$ cm, and $S = 10 \times 60.0/40.0 = 15.0\ \Omega$ again. In the laboratory the two values differ slightly, and their mean is taken. The next section shows what this interchange can and cannot correct.
:::

:::qc
q: In a metre bridge with 6 Ω in the left gap and an unknown S in the right gap, the balance point is at 75 cm. What is S?
options: ["18 Ω", "4.5 Ω", "2 Ω", "8 Ω"]
answer: 2
right: Right. S = R(100 − l)/l = 6 × 25/75 = 2 Ω. The longer wire segment lies on the side of the larger resistance.
wrong: The ratio R/S equals l/(100 − l) = 75/25 = 3. So S = 6/3 = 2 Ω.
:::

## End corrections and the best balance point {lvl=3 id=s-end label="JEE"}

**End corrections.** The wire is soldered to thick copper strips at each end, and the soldered joints, the strips and the contacts have small resistances of their own. Their effect is as if the wire were a little longer at each end, by lengths $\alpha$ (left) and $\beta$ (right). The true balance condition is

$$\frac{R}{S} = \frac{l + \alpha}{100 - l + \beta}.$$

**What interchanging reveals.** Let $k = R/S$ and $L = 100 + \alpha + \beta$ (the effective wire length). The first balance gives $l + \alpha = \dfrac{k}{1 + k}L$. After swapping, $l' + \alpha = \dfrac{1}{1 + k}L$. Add them:

$$l + l' = 100 + \beta - \alpha .$$

So the swap detects only the **difference** $\beta - \alpha$. If the two ends have equal corrections, the swap gives exactly $l' = 100 - l$, the same as for an ideal wire, and averaging the two results corrects nothing. To find $\alpha$ and $\beta$ separately, use a **known** ratio $k$. Dividing the two balance equations gives $k = (l + \alpha)/(l' + \alpha)$, so

$$\alpha = \frac{l - k\,l'}{k - 1}, \qquad \beta = \alpha + l + l' - 100 .$$

**Why the middle is best.** Even without end corrections, $l$ can only be read to some $\delta l$, perhaps 0.1 cm. Since $\ln S = \ln R + \ln(100 - l) - \ln l$, the fractional error is

$$\frac{\delta S}{S} = \delta l\left(\frac{1}{l} + \frac{1}{100 - l}\right) = \frac{100\,\delta l}{l(100 - l)} .$$

The product $l(100 - l)$ is largest at $l = 50$ cm. There, with $\delta l = 0.1$ cm, the error is 0.4%. At $l = 10$ cm it is 1.1%. Fixed end corrections also matter least when both segments are long. So choose $R$ close to the expected $S$.

:::qc
q: A metre bridge has equal end corrections at both ends. A student interchanges R and S and averages the two values of S. Does this remove the end-correction error?
options: ["Yes, completely", "No; with equal end corrections the swapped reading is exactly 100 − l and the error is unchanged", "Yes, but only when l = 50 cm"]
answer: 1
right: Right. With α = β, l + l′ = 100 exactly, so both readings give the same, equally wrong, value of S. The swap only exposes an unequal pair of corrections. (At l = 50 cm the corrections do cancel, but only because R = S then.)
wrong: Add the two balance conditions: l + l′ = 100 + β − α. With α = β, the swapped reading is exactly 100 − l, so averaging changes nothing. The cure is to calibrate α and β with known resistors, or to use a Carey Foster bridge.
:::

## Sensitivity: when does the bridge notice a change? {lvl=3 id=s-sens label="JEE"}

A null method is only as good as its ability to notice a tiny imbalance. Suppose the bridge is balanced and one arm, say $R_2$, changes by a small fraction $\varepsilon$, so $R_2 \to R_2(1 + \varepsilon)$. Let $p = R_1/R_2$ be the ratio of the two arms on that path. Then

$$V_B = \frac{E R_2}{R_1 + R_2}, \qquad \Delta V_B \approx \frac{dV_B}{dR_2}\,R_2\varepsilon = E\,\frac{R_1R_2}{(R_1 + R_2)^2}\,\varepsilon = E\,\varepsilon\,\frac{p}{(1 + p)^2}.$$

$V_D$ does not change, so $\Delta V_B$ is the imbalance voltage that drives the galvanometer.

:::figure caption="The factor p/(1 + p)² peaks at p = 1, where it equals 1/4. Equal ratio arms make the bridge most sensitive; a ratio of 10 gives only about a third as much signal."
<svg viewBox="0 0 300 190" role="img" aria-label="Graph of p over (1+p) squared against p, rising from zero to a maximum of one quarter at p equals one, then falling slowly">
<line class="ln" x1="40" y1="150" x2="290" y2="150"/><line class="ln" x1="40" y1="150" x2="40" y2="15"/>
<polyline class="ray" points="40,150 43,128 46,110 55,73 70,43 85,32 100,30 130,35 160,43 190,52 220,60 250,67 280,73" style="fill:none;stroke-width:2"/>
<line class="faint" x1="100" y1="30" x2="100" y2="150"/><line class="faint" x1="40" y1="30" x2="100" y2="30"/>
<text x="96" y="166">1</text><text x="156" y="166">2</text><text x="216" y="166">3</text><text x="276" y="166">4</text><text x="36" y="166">0</text>
<text x="10" y="34">0.25</text><text class="k" x="270" y="184">p</text><text class="k" x="120" y="22">p/(1+p)²</text>
</svg>
:::

Two lessons follow.

1. **The ratio arms should be equal** (or nearly). The function $p/(1+p)^2$ is greatest at $p = 1$, so the voltage signal is greatest there: $\Delta V = E\varepsilon/4$.
2. **The resistances should be comparable to the galvanometer's.** The galvanometer sees the imbalance voltage through the bridge's own resistance (next section). If the arms are huge compared with $G$, the current is tiny; if they are tiny, the battery current becomes large and heats the arms, changing their resistance. NCERT's advice that the bridge is most sensitive when all four arms are of the same order is the practical summary of these two points.

Raising $E$ also increases the signal, but only until heating ($I^2R$ in the arms) starts to change the resistances being compared.

:::qc
q: A bridge has ratio arms R₁ = 1000 Ω and R₂ = 10 Ω. The same arm R₂ changes by 0.1%. By roughly what factor would the imbalance voltage grow if the ratio arms were made equal?
options: ["About 2.5", "About 25", "About 100", "No change"]
answer: 1
right: Right. With p = 100, p/(1+p)² = 100/10201 ≈ 0.0098. With p = 1 it is 0.25. The ratio is about 25.
wrong: Compare p/(1+p)²; for p = 100 it is about 0.0098, and for p = 1 it is 0.25, about 25 times larger.
:::

## The unbalanced bridge: Thevenin's shortcut {lvl=3 id=s-unbal label="JEE"}

When the bridge is not balanced, you can always find the galvanometer current with Kirchhoff's rules, as NCERT does in Example 3.7, by solving three simultaneous equations. There is a faster way.

**Thevenin's theorem.** A network of resistors and sources is linear: doubling every emf doubles every current. It follows that, seen from any two terminals, the whole network behaves like a single emf $V_{\text{th}}$ in series with a single resistance $R_{\text{th}}$:

- $V_{\text{th}}$ is the **open-circuit voltage** between the terminals (nothing connected to them);
- $R_{\text{th}}$ is the resistance between the terminals with every ideal source replaced by a plain wire.

For the bridge, take B and D as the terminals and remove the galvanometer.

- **Open-circuit voltage.** With nothing between B and D, each path is a voltage divider: $V_{\text{th}} = V_B - V_D = E\left(\dfrac{R_2}{R_1 + R_2} - \dfrac{R_4}{R_3 + R_4}\right)$.
- **Resistance.** Short the (ideal) battery, so A and C become one point. Seen from B, $R_1$ and $R_2$ are in parallel; seen from D, $R_3$ and $R_4$ are in parallel. These two pairs are in series between B and D: $R_{\text{th}} = R_1\|R_2 + R_3\|R_4$.

:::law caption="Galvanometer current in an unbalanced bridge (ideal battery). Positive means from B to D."
$$I_g = \frac{V_{\text{th}}}{R_{\text{th}} + G} = \frac{E\left(\dfrac{R_2}{R_1 + R_2} - \dfrac{R_4}{R_3 + R_4}\right)}{\dfrac{R_1R_2}{R_1 + R_2} + \dfrac{R_3R_4}{R_3 + R_4} + G}$$
:::

The numerator is zero exactly at balance, which recovers $R_1/R_2 = R_3/R_4$ a third way. The denominator shows the sensitivity point from the last section: the galvanometer should be comparable to $R_{\text{th}}$ so that neither swamps the other.

:::worked title="NCERT Example 3.7 in four lines"
Arms AB = 100 Ω, BC = 10 Ω, AD = 60 Ω, DC = 5 Ω; $G = 15\ \Omega$; 10 V across AC.

$V_B = 10 \times \tfrac{10}{110} = 0.9091$ V and $V_D = 10 \times \tfrac{5}{65} = 0.7692$ V, so $V_{\text{th}} = 0.1399$ V.

$R_{\text{th}} = \tfrac{100 \times 10}{110} + \tfrac{60 \times 5}{65} = 9.091 + 4.615 = 13.706\ \Omega$.

$I_g = \dfrac{0.1399}{13.706 + 15} = 4.87 \times 10^{-3}$ A $= 4.87$ mA, from B to D, in agreement with NCERT's Kirchhoff solution.
:::

:::note title="If the battery has internal resistance" tone=warn
With a battery of internal resistance $r$, shorting the source leaves $r$ between A and C, and $R_{\text{th}}$ is no longer two simple parallel pairs (it is itself a bridge). Use nodal analysis, or convert a delta to a star. The **balance condition** is unaffected, because it never involved the battery.
:::

:::qc
q: In a bridge with ideal battery E = 12 V, R₁ = R₂ = 100 Ω, R₃ = 100 Ω and R₄ = 110 Ω, what is the open-circuit voltage between B and D?
options: ["About 0.29 V, with D higher", "About 0.29 V, with B higher", "1.2 V", "Zero"]
answer: 0
right: Right. V_B = 6.000 V and V_D = 12 × 110/210 = 6.286 V, so D is higher by about 0.29 V. A 10% change in one arm gives roughly E × 0.1/4 = 0.3 V, as the sensitivity formula predicts.
wrong: Use the two dividers. V_B = 12 × 100/200 = 6 V and V_D = 12 × 110/210 = 6.29 V. The difference is about 0.29 V, with D higher.
:::

## The Carey Foster bridge: cancelling the ends exactly {lvl=3 id=s-carey label="JEE"}

The end corrections of the metre bridge cannot be removed by interchange alone. The **Carey Foster bridge** removes them exactly, by measuring the **difference** between two nearly equal resistances. It is used to compare a resistance with a standard of almost the same value, or to find the resistance per centimetre of the wire.

**Set-up.** Use a metre-bridge wire with four gaps. The two inner gaps hold fixed resistances $P$ and $Q$ (usually nearly equal). These form one path of the bridge. The two outer gaps hold $X$ and $Y$, which sit in series with the two ends of the wire to form the other path. With end corrections $\alpha$, $\beta$ and wire resistance $\lambda$ per cm, balance at $l_1$ gives

$$\frac{P}{Q} = \frac{X + \lambda(l_1 + \alpha)}{Y + \lambda(100 - l_1 + \beta)} .$$

Now swap $X$ and $Y$, and find the new balance at $l_2$:

$$\frac{P}{Q} = \frac{Y + \lambda(l_2 + \alpha)}{X + \lambda(100 - l_2 + \beta)} .$$

**The cancelling trick.** In both fractions, numerator plus denominator is the same total, $T = X + Y + \lambda(100 + \alpha + \beta)$. The two fractions are both equal to $P/Q$. Two fractions with equal values and equal totals must have equal numerators (each numerator is $T \cdot \tfrac{P}{P + Q}$). So

$$X + \lambda(l_1 + \alpha) = Y + \lambda(l_2 + \alpha) .$$

:::law caption="Carey Foster bridge. α and β have vanished; so has the ratio P/Q."
$$X - Y = \lambda\,(l_2 - l_1)$$
:::

**Using it.** First make $Y$ a thick copper strip ($Y \approx 0$) and $X$ a known standard: the shift $l_2 - l_1$ gives $\lambda$. Then measure the difference between an unknown and a standard of nearly equal value. Because only a *difference* is found from the wire, a small wire error makes an even smaller error in $X$.

The result does not even need $P = Q$. In practice $P$, $Q$, $X$ and $Y$ are all chosen nearly equal, so that both balance points lie on the wire and the bridge works near its most sensitive ratio.

:::qc
q: In a Carey Foster bridge with λ = 0.01 Ω/cm, the balance point moves by 15.0 cm when X and Y are interchanged. If Y = 2.000 Ω and X > Y, what is X?
options: ["2.150 Ω", "2.015 Ω", "1.850 Ω", "17.0 Ω"]
answer: 0
right: Right. X − Y = λ(l₂ − l₁) = 0.01 × 15 = 0.15 Ω, so X = 2.150 Ω.
wrong: X − Y = λ × (shift) = 0.01 × 15.0 = 0.15 Ω. Add this to Y.
:::

## Bridges as sensors: temperature and strain {lvl=4 id=s-sensors label="Olympiad"}

So far the bridge has been a measuring tool used at balance. In instrumentation it is used the other way round: balance it once, then **read the small output voltage** as one arm changes. Many physical quantities change a resistance a little, and the bridge turns that little change into a voltage with the large steady part removed. This is the starting point of the owner's later subject, Instrumentation and Control Engineering.

**The quarter bridge.** Make three arms equal to $R$ and the fourth a sensor, $R_1 = R(1 + x)$, where $x = \Delta R/R$ is small. With $V_C = 0$ and $V_A = E$:

$$V_B = \frac{E}{2 + x}, \quad V_D = \frac{E}{2}, \quad V_{\text{out}} = V_D - V_B = \frac{E\,x}{2(2 + x)} \approx \frac{E\,x}{4}\left(1 - \frac{x}{2}\right).$$

For small $x$ this matches the sensitivity result, $E\varepsilon/4$ at $p = 1$. The correction term $-x/2$ is the **non-linearity** of the bridge.

**Temperature: a resistance thermometer.** A platinum wire has $R = R_0(1 + \alpha T)$ over a wide range. A common industrial sensor (Pt100) has $R_0 = 100\ \Omega$ at 0 °C and $\alpha \approx 0.00385$ per °C [Unverified: standard values recalled from memory]. At $T = 100$ °C, $x = 0.385$, and the quarter bridge reads $1/(1 + 0.1925) = 0.84$ of the linear estimate: a 16% shortfall that must be corrected in software or by design. A **thermistor** (a semiconductor) changes resistance far more strongly, several per cent per degree, and its resistance falls as it warms [Unverified: typical size from memory]. It gives large signals, but over a narrow range and very non-linearly.

**Strain: a strain gauge.** A thin metal foil zig-zag glued to a beam gets longer and thinner when the beam is stretched, so its resistance rises. Over the small strains involved, $\Delta R/R = G_F\,\varepsilon$, where $\varepsilon = \Delta l/l$ is the strain and the **gauge factor** $G_F$ is about 2 for common metal foils [Unverified: typical value from memory]. For $\varepsilon = 10^{-3}$, $x = 2\times10^{-3}$, and a 10 V quarter bridge gives only about 5 mV. The bridge is what makes such a signal usable: it removes the 5 V common level, leaving only the change.

**Half and full bridges.** On a bending beam, one face stretches while the other is compressed. Put a gauge from each face in **adjacent** arms, $R_1 = R(1 + x)$ and $R_2 = R(1 - x)$:

$$V_B = E\,\frac{1 - x}{2}, \quad V_{\text{out}} = V_D - V_B = \frac{E\,x}{2} \quad\text{(exactly linear).}$$

With four active gauges, $R_1 = R_4 = R(1 + x)$ and $R_2 = R_3 = R(1 - x)$, the output is exactly $E\,x$. Each step doubles the signal and removes the non-linearity.

**Temperature compensation.** A gauge also changes with temperature, which would look like strain. If both gauges on one path change by the same factor $(1 + t)$, then $V_B = E\,R_2/(R_1 + R_2)$ is unchanged, because the factor cancels from the ratio. This is why an unstrained **dummy gauge**, at the same temperature, is placed in the arm adjacent to the active gauge. The same ratio idea handles long connecting leads: a three-wire connection puts one lead in the sensor's arm and an equal lead in the adjacent arm, so the lead resistances cancel from the ratio.

**Beyond resistors.** With alternating current, the four arms can be any impedances, and balance needs $Z_1/Z_2 = Z_3/Z_4$ as complex numbers. That is two conditions (magnitude and phase), so two adjustments are needed. Such AC bridges measure capacitance and inductance, and they are the basis of many displacement and level sensors.

:::qc
q: A strain gauge (G_F = 2) sees a strain of 500 × 10⁻⁶ in a quarter bridge with E = 8 V. About what output voltage do you expect?
options: ["2 mV", "4 mV", "8 mV", "0.5 mV"]
answer: 0
right: Right. x = G_F ε = 10⁻³, and V_out ≈ Ex/4 = 8 × 10⁻³/4 = 2 mV. A half bridge would give 4 mV and a full bridge 8 mV.
wrong: First x = ΔR/R = G_F ε = 2 × 500 × 10⁻⁶ = 10⁻³. A quarter bridge gives about Ex/4 = 2 mV.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A bridge compares resistances instead of measuring current and voltage. It asks only whether the galvanometer current is zero (a null method). {lvl=2}
2. Balance: $R_1/R_2 = R_3/R_4$ (NCERT: $R_2/R_1 = R_4/R_3$). Then B and D are at equal potentials, from equal voltage-divider fractions. {lvl=2}
3. The balance condition contains no emf, no galvanometer resistance and no battery resistance, so the result is as accurate as the known resistors. {lvl=2}
4. Metre bridge: $S = R(100 - l)/l$. The wire's resistance per cm cancels. Aim for a balance near 50 cm. {lvl=2}
5. End corrections: interchange reveals only $\beta - \alpha$; known resistors fix both. Fractional error $100\,\delta l/[l(100 - l)]$ is least at the middle. {lvl=3}
6. Sensitivity $\propto p/(1+p)^2$, greatest for equal ratio arms. Unbalanced current $I_g = V_{\text{th}}/(R_{\text{th}} + G)$ with $R_{\text{th}} = R_1\|R_2 + R_3\|R_4$. {lvl=3}
7. Carey Foster: $X - Y = \lambda(l_2 - l_1)$, with end corrections cancelled exactly. {lvl=3}
8. Sensor bridges: quarter $\approx Ex/4$ (non-linear), half $= Ex/2$, full $= Ex$. Adjacent-arm compensation cancels temperature and lead effects. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Pair the arms correctly: $R_1/R_2$ compares the two arms of one path from A to C, and $R_3/R_4$ the two arms of the other path; $R_1$ and $R_3$ both touch A. Equivalently, products of **opposite** arms are equal. {lvl=2}
- In the metre bridge, $l$ is the length on the side of the gap holding $R$. Write $R/S = l/(100 - l)$ from the figure, not from memory. {lvl=2}
- A balanced bridge's middle arm can be removed **or** shorted; either way the equivalent resistance is the same. {lvl=2}
- Averaging after interchange does not remove equal end corrections; it only exposes unequal ones. {lvl=3}
- Thevenin's $R_{\text{th}}$ as two parallel pairs in series needs an ideal battery. With internal resistance, use nodes. {lvl=3}
- Keep the sign of $I_g$: positive from the higher of $V_B$, $V_D$ to the lower. {lvl=3}
- The quarter-bridge output $Ex/4$ is only the small-$x$ limit; for an RTD over a wide range, use $Ex/[2(2+x)]$. {lvl=4}
:::
