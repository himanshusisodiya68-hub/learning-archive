---
title: Magnetic dipole and bar magnet
summary: 'Why you can never cut a magnet into a lone north pole, and what a bar magnet is really made of.'
ncert: ["Class 12 Physics · Ch 5 Magnetism and Matter (§5.1–5.3)"]
up_to: Olympiad
builds_on: [Electric field, Gauss's law, Potential, Field lines and compasses, Current loop and galvanometer]
notes_prompt: Explain in your own words why cutting a bar magnet in half, again and again, never gives you a lone north pole, using the picture of current loops inside the magnet.
margin:
  - kind: history
    title: History
    text: William Gilbert's De Magnete (1600) argued that the Earth itself is a great magnet. Around 1820 Ampère proposed that all magnetism comes from tiny circulating currents inside matter. Gauss developed the deflection and oscillation methods for measuring the Earth's field in absolute units in the 1830s. (Names and dates from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "Short magnet: axial field (μ₀/4π)(2m/r³) along m; equatorial (μ₀/4π)(m/r³) opposite to m. Torque m × B, energy −m·B, period 2π√(I/mB). Every formula is the electric dipole with p → m and 1/4πε₀ → μ₀/4π."
  - kind: olympiad
    title: Olympiad link
    text: "Two coaxial point dipoles attract (head to tail) with F = 3μ₀m₁m₂/2πr⁴. The force falls as 1/r⁴ because it is the gradient of an energy that falls as 1/r³. Side by side and parallel, they repel with half that force."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 5 Magnetism and Matter, §5.1–5.3, Examples 5.1–5.4, Exercises 5.1–5.7" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 36 Permanent Magnets (pole model, magnetometers, Earth's field) [Unverified chapter reference]" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 6 (field of a current loop, dipole) and Ch. 11 Magnetic fields in matter [Unverified chapter reference]" }
cards:
  - { front: "Why can't a magnetic pole be isolated?", back: "A magnet's field comes from closed current loops (electron orbits and spins). A loop always has two faces, N and S. Cutting the magnet only gives fewer loops, each still two-faced. Equivalently $\\oint\\vec B\\cdot d\\vec S = 0$: no magnetic charge." }
  - { front: "Fields of a short magnet (moment $m$) at distance $r$?", back: "Axial $\\dfrac{\\mu_0}{4\\pi}\\dfrac{2m}{r^3}$ along $\\vec m$; equatorial $\\dfrac{\\mu_0}{4\\pi}\\dfrac{m}{r^3}$ opposite to $\\vec m$. General: $B_r = \\dfrac{\\mu_0}{4\\pi}\\dfrac{2m\\cos\\theta}{r^3}$, $B_\\theta = \\dfrac{\\mu_0}{4\\pi}\\dfrac{m\\sin\\theta}{r^3}$." }
  - { front: "Magnet in a uniform field: torque, energy, period?", back: "$\\vec\\tau = \\vec m\\times\\vec B$, $U = -\\vec m\\cdot\\vec B$, work to turn from $\\theta_1$ to $\\theta_2$ is $mB(\\cos\\theta_1-\\cos\\theta_2)$. Small oscillations $T = 2\\pi\\sqrt{I/mB}$. Net force zero." }
  - { front: "Gauss's law for magnetism, and with monopoles?", back: "$\\oint\\vec B\\cdot d\\vec S = 0$ for every closed surface. If monopoles of strength $q_m$ existed it would read $\\oint\\vec B\\cdot d\\vec S = \\mu_0 q_{m,\\text{enc}}$." }
  - { front: "Deflection magnetometer: tan A and tan B positions?", back: "Magnet east–west, needle at distance $d$. Tan A (end-on, on the axis): $\\dfrac{\\mu_0}{4\\pi}\\dfrac{2md}{(d^2-l^2)^2} = B_H\\tan\\theta$. Tan B (broadside-on, equatorial): $\\dfrac{\\mu_0}{4\\pi}\\dfrac{m}{(d^2+l^2)^{3/2}} = B_H\\tan\\theta$. Gives $m/B_H$; the oscillation magnetometer gives $mB_H$." }
  - { front: "Dip $I$ at magnetic latitude $\\lambda$ for a dipole Earth?", back: "$\\tan I = 2\\tan\\lambda$. Zero at the magnetic equator, $90^\\circ$ at the magnetic poles. Total field $B_{eq}\\sqrt{1+3\\sin^2\\lambda}$: twice as strong at the poles as at the equator." }
core:
  idea: 'A bar magnet is a magnetic dipole of moment $\vec m$ (a crowd of atomic current loops, pointing S to N inside); isolated poles do not exist. At large distance its field is the electric dipole field with $\vec p\to\vec m$ and $1/4\pi\varepsilon_0\to\mu_0/4\pi$.'
  formulas:
    - tex: 'B_{\text{axial}} = \frac{\mu_0}{4\pi}\frac{2m}{r^3},\qquad B_{\text{equat}} = \frac{\mu_0}{4\pi}\frac{m}{r^3}'
      label: 'Far field of a short magnet'
    - tex: '\vec\tau = \vec m\times\vec B,\qquad U = -\vec m\cdot\vec B'
      label: 'Dipole in a uniform field'
    - tex: '\oint \vec B\cdot d\vec S = 0'
      label: 'Gauss''s law for magnetism'
  conditions:
    - 'Short (point) magnet, distance much larger than its length; otherwise use the exact pole-model forms'
    - 'Uniform external field for the torque and energy results (net force is then zero)'
    - 'No magnetic monopoles; the Earth treated as a dipole with its field horizontal and vertical parts $B_H$, $B_V$'
  sign: 'On the axis $\vec B$ is along $\vec m$; on the equatorial line it is opposite to $\vec m$ (outside the magnet the lines run from N to S).'
outcomes:
  - 'Explain why magnetic poles always come in pairs and why a magnet is equivalent to a solenoid'
  - 'Find the field of a bar magnet on its axis and equatorial line'
  - 'Calculate the torque, energy and oscillation period of a magnet in a uniform field'
  - 'Use dip, declination and $B_H$, neutral points, and deflection and oscillation magnetometers'
  - 'Write the full dipole field and the $1/x^4$ force between two magnets'
---

:::hook
q: A compass needle sits 10 cm from the centre of a short bar magnet, on the magnet's axis, and feels a field B from the magnet. You move the needle to the magnet's equatorial line (the perpendicular bisector). At what distance from the centre does it feel a field of the same size B?
options: ["20 cm", "10 cm", "About 7.9 cm", "5 cm"]
answer: 2
right: Right. The equatorial field of a short magnet is half the axial field at the same distance, and both fall as 1/r³. To double the equatorial field you must shrink r by a factor 2^(1/3) ≈ 1.26, giving 10/1.26 ≈ 7.9 cm.
wrong: At equal distances the equatorial field is only half the axial field, so you must move closer. Both fall as 1/r³, so r must shrink by 2^(1/3) ≈ 1.26: 10 cm/1.26 ≈ 7.9 cm. The section on the dipole analogy shows why.
:::

## Poles that never come alone {lvl=1 id=s-poles label="Class 10"}

Hang a bar magnet from a thread and it settles pointing roughly north–south. The end that points north is called the **north pole** (N), the other the **south pole** (S). Two facts about poles are easy to check with two magnets:

- **Like poles repel, unlike poles attract.**
- **The pull is strongest near the ends.** Iron filings sprinkled round a magnet crowd at the two ends and are sparse near the middle.

So far this looks just like electric charge: N and S behave like $+$ and $-$. But there is one huge difference. Cut a magnet in half, across its length, hoping to separate N from S. You get **two complete magnets**, each with its own N and S. Cut again: four magnets. Nobody has ever produced a piece of matter with only an N pole. A positive charge, by contrast, is easy to get on its own: rub a glass rod.

This lesson is about why that is, and about the object that the magnet really is: a **magnetic dipole**. Field lines and the use of a compass to trace them belong to the leaf on field lines and compasses; here we use them freely.

:::qc
q: A bar magnet 10 cm long is cut into two pieces of 5 cm by a cut across its length. What do you get?
options: ["One piece with only N, one with only S", "Two magnets, each with an N and an S pole", "Two unmagnetised pieces", "One magnet and one unmagnetised piece"]
answer: 1
right: Right. Each piece is a complete magnet. A new S pole appears on the new face of the N half, and a new N pole on the new face of the S half.
wrong: Poles cannot be separated. Each half is a full magnet with an N and an S pole; new poles appear on the two cut faces.
:::

## A magnet is a crowd of current loops {lvl=2 id=s-ampere label="Class 12"}

Why can't poles be separated? Because, as Ampère guessed, **there are no magnetic charges at all**. Every magnetic field we know is made by moving charge.

Start from something you can build: a small loop of wire carrying current $I$ around area $A$. Its field far away looks exactly like that of a tiny bar magnet (the leaf on the current loop and galvanometer works this out). One face acts as N and the other as S: the face from which the current looks **anticlockwise** is N. The loop's strength is its **magnetic moment**

$$\vec m = I A\,\hat n,$$

with $\hat n$ along the right-hand-rule normal (curl the fingers with the current, the thumb points along $\vec m$, out of the N face). Unit A m², which equals J/T.

Stack $N$ such loops side by side and you have a solenoid, with moment $m = NIA$. Its field outside is the field of a bar magnet: compare the two panels below.

:::figure caption="Left: field lines of a bar magnet. Right: field lines of a solenoid carrying current anticlockwise as seen from its right end. Outside, the two patterns are the same. Inside, the lines run from S to N, so every line is a closed loop that never starts or stops."
<svg viewBox="0 0 440 185" role="img" aria-label="A bar magnet and a solenoid side by side, each with closed field lines leaving the north end, curving round and entering the south end, and running inside from south to north">
<rect class="m2" x="60" y="80" width="100" height="20" style="stroke:var(--ink);stroke-width:1.2"/>
<line class="ln" x1="110" y1="80" x2="110" y2="100"/>
<text class="k" x="70" y="76">S</text><text class="k" x="145" y="76">N</text>
<path class="ray" d="M160,86 C210,20 10,20 60,86"/><polygon style="fill:var(--phy)" points="102,36.5 111,32.5 111,40.5"/>
<path class="ray" d="M160,94 C210,160 10,160 60,94"/><polygon style="fill:var(--phy)" points="102,143.5 111,139.5 111,147.5"/>
<path class="ray" d="M160,82 C235,-5 -15,-5 60,82"/><polygon style="fill:var(--phy)" points="102,19.5 111,15.5 111,23.5"/>
<path class="ray" d="M160,98 C235,185 -15,185 60,98"/><polygon style="fill:var(--phy)" points="102,160.5 111,156.5 111,164.5"/>
<line class="ray" x1="62" y1="90" x2="158" y2="90"/><polygon style="fill:var(--phy)" points="128,90 119,86 119,94"/>
<text x="62" y="180">bar magnet</text>
<ellipse class="ln" cx="290" cy="90" rx="5" ry="16"/><ellipse class="ln" cx="306" cy="90" rx="5" ry="16"/><ellipse class="ln" cx="322" cy="90" rx="5" ry="16"/><ellipse class="ln" cx="338" cy="90" rx="5" ry="16"/><ellipse class="ln" cx="354" cy="90" rx="5" ry="16"/><ellipse class="ln" cx="370" cy="90" rx="5" ry="16"/>
<text class="k" x="282" y="70">S</text><text class="k" x="372" y="70">N</text>
<path class="ray" d="M380,86 C430,20 230,20 280,86"/><polygon style="fill:var(--phy)" points="322,36.5 331,32.5 331,40.5"/>
<path class="ray" d="M380,94 C430,160 230,160 280,94"/><polygon style="fill:var(--phy)" points="322,143.5 331,139.5 331,147.5"/>
<line class="ray" x1="282" y1="90" x2="378" y2="90"/><polygon style="fill:var(--phy)" points="348,90 339,86 339,94"/>
<text x="290" y="180">solenoid, m = NIA</text>
</svg>
:::

Now the key step. Inside iron, and inside every atom, electrons circulate and spin. Each atom is a tiny current loop with a moment of order $10^{-23}$ A m² [Unverified, order of magnitude]. In an unmagnetised bar these little moments point every which way and cancel. In a magnet, a large fraction of them point the same way.

Picture a cross-section of the magnet tiled with tiny aligned loops, all anticlockwise. Where two loops touch, their currents run in opposite directions and cancel. Only the currents round the **outer edge** survive. The magnet therefore behaves like a solenoid with a sheet of current flowing round its curved surface: the so-called **Ampèrian surface current**. For a strong modern magnet this equivalent current is of order $10^6$ A per metre of length, i.e. ten thousand amperes for every centimetre [Unverified, order of magnitude from memory]. No wire could carry that without melting; atoms do it without any resistance.

This picture explains everything in the first section:

- **Why the ends are strongest:** the field of a solenoid fans out from its ends.
- **Why poles cannot be isolated:** cutting the magnet just gives a shorter stack of loops, still with two faces. There is no place in a loop where "north" lives on its own.
- **Why a magnet's moment adds up:** cut a magnet across its length into two halves and each has half the moment; cut it along its length and each half also has half the moment (half the area).

:::qc
q: Looking at one face of a flat coil, you see the current going clockwise. Which pole is that face?
options: ["North", "South", "Neither: a coil has no poles", "It depends on the current's size"]
answer: 1
right: Right. Anticlockwise as seen = N face; clockwise as seen = S face. The moment m = IA points out of the N face, which here is the far side, away from you.
wrong: The face from which the current looks anticlockwise is N; clockwise means you are looking at the S face. The moment points out of the opposite (N) face.
:::

## The dipole analogy and the field of a magnet {lvl=2 id=s-analogy label="Class 12"}

Far from a small current loop, its field has exactly the same shape as the field of an electric dipole, with $\vec p$ replaced by $\vec m$ and $1/4\pi\varepsilon_0$ replaced by $\mu_0/4\pi$. You can therefore borrow every far-field result from electrostatics:

| electric dipole | magnetic dipole |
|---|---|
| $\vec E$ | $\vec B$ |
| $\vec p$ (C m) | $\vec m$ (A m² = J/T) |
| $\dfrac{1}{4\pi\varepsilon_0}$ | $\dfrac{\mu_0}{4\pi} = 10^{-7}$ T m/A |
| axial $\dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{r^3}$ | axial $\dfrac{\mu_0}{4\pi}\dfrac{2m}{r^3}$ |
| equatorial $-\dfrac{1}{4\pi\varepsilon_0}\dfrac{\vec p}{r^3}$ | equatorial $-\dfrac{\mu_0}{4\pi}\dfrac{\vec m}{r^3}$ |
| torque $\vec p\times\vec E$ | torque $\vec m\times\vec B$ |
| energy $-\vec p\cdot\vec E$ | energy $-\vec m\cdot\vec B$ |

The analogy is exact only **outside** the sources and only for the far field (or, for a bar magnet, for the pole model described next). Inside, the two fields differ sharply, as the last section shows.

:::figure caption="A short bar magnet with moment m pointing from S to N. At an axial point P the field is along m; at an equatorial point Q it is opposite to m and half as strong at the same distance."
<svg viewBox="0 0 400 190" role="img" aria-label="Bar magnet on a horizontal axis with an axial point to the right and an equatorial point above the centre, each with its field arrow">
<line class="faint" x1="30" y1="120" x2="370" y2="120"/><line class="faint" x1="150" y1="120" x2="150" y2="30"/>
<rect class="m2" x="120" y="112" width="60" height="16" style="stroke:var(--ink);stroke-width:1.2"/>
<text class="k" x="124" y="146">S</text><text class="k" x="170" y="146">N</text>
<line style="stroke:var(--ink);stroke-width:2" x1="130" y1="102" x2="166" y2="102"/><polygon style="fill:var(--ink)" points="172,102 163,98 163,106"/><text class="k" x="146" y="96">m</text>
<circle class="obj" cx="300" cy="120" r="3.5"/><text class="k" x="296" y="140">P</text>
<line class="ray" x1="300" y1="120" x2="350" y2="120"/><polygon style="fill:var(--phy)" points="358,120 348,115 348,125"/><text x="316" y="110">B ∥ m</text>
<text x="235" y="135">r</text>
<circle class="obj" cx="150" cy="30" r="3.5"/><text class="k" x="156" y="24">Q</text>
<line class="ray" x1="150" y1="30" x2="100" y2="30"/><polygon style="fill:var(--phy)" points="92,30 102,25 102,35"/><text x="40" y="50">B opposite m</text>
<text x="156" y="80">r</text>
</svg>
:::

**The pole model.** For a bar magnet of finite length there is an old and still useful trick. Pretend each end carries a "pole strength" $q_m$ (unit A m), $+q_m$ at N and $-q_m$ at S, a distance $2l$ apart, and that a pole makes a Coulomb-like field

$$B = \frac{\mu_0}{4\pi}\frac{q_m}{r^2}.$$

Then $m = q_m\cdot 2l$, and the calculation is word for word the electric dipole's. On the axis at distance $r$ from the centre, the N pole is nearer:

$$B_{\text{axial}} = \frac{\mu_0 q_m}{4\pi}\left[\frac{1}{(r-l)^2}-\frac{1}{(r+l)^2}\right] = \frac{\mu_0}{4\pi}\,\frac{2mr}{(r^2-l^2)^2}\;\xrightarrow{\;r\gg l\;}\;\frac{\mu_0}{4\pi}\frac{2m}{r^3}.$$

On the equatorial line both poles are at $\sqrt{r^2+l^2}$; the components across the axis cancel and those parallel to it add:

$$B_{\text{eq}} = \frac{\mu_0}{4\pi}\,\frac{m}{(r^2+l^2)^{3/2}}\;\xrightarrow{\;r\gg l\;}\;\frac{\mu_0}{4\pi}\frac{m}{r^3}\quad\text{opposite to }\vec m.$$

Here $2l$ is the **magnetic length**, the distance between the effective pole positions. It is somewhat less than the bar's actual length because the "poles" are spread over the end regions; a figure of about 0.85 of the geometric length is often quoted [Unverified].

:::worked title="How good is the short-magnet formula?"
**A magnet of moment 1.0 A m² has magnetic length 4 cm. Find the field 10 cm from its centre on the axis and on the equator, exactly and with the short-magnet formulas.**

Here $l = 0.02$ m, $r = 0.10$ m, $\mu_0/4\pi = 10^{-7}$ T m/A.

Axial, short: $10^{-7}\times2\times1.0/10^{-3} = 2.00\times10^{-4}$ T. Exact: $\dfrac{10^{-7}\times2\times1.0\times0.10}{(0.0100-0.0004)^2} = \dfrac{2\times10^{-8}}{9.22\times10^{-5}} = 2.17\times10^{-4}$ T, 8.5% more.

Equatorial, short: $1.00\times10^{-4}$ T. Exact: $\dfrac{10^{-7}}{(0.0104)^{3/2}} = \dfrac{10^{-7}}{1.061\times10^{-3}} = 0.943\times10^{-4}$ T, 5.7% less.

At $r = 5l$ the short-magnet formulas are already within 10%; the error shrinks like $(l/r)^2$.
:::

:::qc
q: Using the pole model, a magnet has pole strength 2 A m and magnetic length 5 cm. What is its magnetic moment?
options: ["0.05 A m²", "0.1 A m²", "0.4 A m²", "10 A m²"]
answer: 1
right: Right. m = q_m × 2l = 2 × 0.05 = 0.1 A m².
wrong: The moment is pole strength times the distance between the poles: m = q_m × 2l = 2 A m × 0.05 m = 0.1 A m².
:::

## Torque, energy and oscillation in a uniform field {lvl=2 id=s-torque label="Class 12"}

In a **uniform** field $\vec B$, the forces on the two ends of a magnet (or on opposite sides of a current loop) are equal and opposite. The net force is zero, but they form a couple:

:::law caption="A magnetic dipole in a uniform field. The torque turns m towards B. The net force is zero."
$$\vec\tau = \vec m\times\vec B,\qquad \tau = mB\sin\theta,\qquad U = -\vec m\cdot\vec B = -mB\cos\theta$$
:::

The energy follows from the torque: turning the magnet from $\theta$ to $\theta + d\theta$ against the field takes work $mB\sin\theta\,d\theta$, and $\int mB\sin\theta\,d\theta = -mB\cos\theta$. The zero of $U$ is the perpendicular position, which is a convention. Only **differences** matter:

$$W_{\theta_1\to\theta_2} = mB(\cos\theta_1-\cos\theta_2).$$

- $\theta = 0$ ($\vec m$ along $\vec B$): $U = -mB$, the minimum. **Stable** equilibrium.
- $\theta = 180^\circ$: $U = +mB$, the maximum. **Unstable** equilibrium; turning from 0° to 180° costs $2mB$.

**Small oscillations.** A magnet with moment of inertia $I$ about a vertical axis through its centre, turned slightly from the field and released, obeys $I\ddot\theta = -mB\sin\theta\approx-mB\,\theta$. That is simple harmonic motion:

$$T = 2\pi\sqrt{\frac{I}{mB}}.$$

This is the magnetic version of the pendulum, with $mB$ playing the part of $mgl$. Measure $T$ and you learn the product $mB$. The magnetometer section turns this into an instrument.

:::worked title="Work and torque"
**A magnet of moment 2.0 A m² lies along a field of 0.05 T. How much work turns it to 60°, and what torque is needed to hold it there?**

$W = mB(\cos0^\circ-\cos60^\circ) = 2.0\times0.05\times0.5 = 0.05$ J. Holding torque $= mB\sin60^\circ = 0.1\times0.866 = 0.087$ N m.
:::

:::qc
q: Two magnets of moments m and 4m oscillate in the same uniform field. They have the same moment of inertia. How do their periods compare?
options: ["The stronger one has a quarter of the period", "The stronger one has half the period", "Equal periods", "The stronger one has twice the period"]
answer: 1
right: Right. T ∝ 1/√m, so four times the moment gives half the period.
wrong: T = 2π√(I/mB), so T ∝ 1/√m. Quadrupling m halves T.
:::

## Gauss's law for magnetism {lvl=2 id=s-gauss label="Class 12"}

For the electric field, the net flux out of a closed surface counts the charge inside: $\oint\vec E\cdot d\vec S = q_{\text{enc}}/\varepsilon_0$. What is the magnetic version?

Every magnetic field comes from current loops. A loop's field lines are closed curves: each one comes out through the N face, runs round outside and goes back in through the S face. Now draw any closed surface. A closed line that crosses it outwards must cross it inwards again to close up. Every line that leaves comes back. Hence

:::law caption="Gauss's law for magnetism. It holds for every closed surface, whatever currents or magnets are inside or outside."
$$\oint_S \vec B\cdot d\vec S = 0$$
:::

It says, in one line, that **there are no magnetic charges**. Some consequences:

- Field lines of $\vec B$ never start or end. They close on themselves (or run off to infinity).
- A Gaussian surface round only the N end of a magnet still has zero net flux: the lines coming out through the N face are matched by the lines running **inside** the magnet into that region from the S end.
- The flux through **any** surface bounded by a given loop is the same, whatever shape the surface has. This is what makes "flux through a circuit" well defined, which the induction leaves rely on.

**If monopoles existed.** A magnetic charge $q_m$ (in the pole units above) would make a field $\dfrac{\mu_0}{4\pi}\dfrac{q_m}{r^2}$ pointing radially, exactly as a point charge does. The flux through a sphere around it would be $4\pi r^2\times\dfrac{\mu_0 q_m}{4\pi r^2} = \mu_0q_m$, and Gauss's law would become

$$\oint_S\vec B\cdot d\vec S = \mu_0\,q_{m,\text{enc}}.$$

Searches have found no monopole so far. Dirac showed (around 1931) that if even one existed anywhere, electric charge would have to come in whole multiples of a basic unit, which it does [date from memory, Unverified]. So the question is not closed.

:::qc
q: A closed spherical surface surrounds only the N pole end of a long bar magnet. The magnet pierces the sphere. What is the net magnetic flux out of the sphere?
options: ["Positive: the N pole is inside", "Negative", "Zero", "It depends on the radius"]
answer: 2
right: Right. ∮B·dS = 0 for every closed surface. The lines leaving through the outside are matched by the lines entering inside the magnet's body, which runs S → N.
wrong: There is no magnetic charge, so the net flux out of any closed surface is zero. The lines that come out of the N end outside the magnet are fed by lines that enter the sphere inside the magnet, running from S to N.
:::

## The Earth as a magnet {lvl=3 id=s-earth label="JEE"}

A freely hung compass points roughly north because the Earth has a magnetic field that, to a first approximation, is the field of a **dipole near the Earth's centre**. The dipole is tilted by roughly 10° from the rotation axis, and its moment is roughly $8\times10^{22}$ A m²; the surface field is a few tens of microtesla (about 25–65 µT) [all values from memory, Unverified; they also drift slowly with time]. The field is thought to come from currents in the molten iron outer core, not from a permanent magnet: the core is far above the temperature at which iron loses its permanent magnetism.

One naming trap: the north end of a compass needle is attracted to a point in the Arctic. Unlike poles attract, so the Earth's dipole has its **S pole** near the geographic north. The Earth's moment $\vec m$ points roughly **southwards**, and outside the Earth its field lines run from the southern hemisphere to the northern.

Three numbers describe the field at a place:

- **Declination** $D$: the angle between the magnetic meridian (the vertical plane containing a horizontal compass needle) and the geographic meridian.
- **Dip** (inclination) $I$: the angle that the total field makes with the horizontal, in the magnetic meridian. A needle pivoted about a horizontal axis in that plane points along $\vec B$.
- **Horizontal component** $B_H = B\cos I$; the vertical component is $B_V = B\sin I$, so $\tan I = B_V/B_H$.

:::figure caption="Left: the Earth modelled as a dipole whose moment m points roughly south; outside, the lines leave the southern hemisphere and enter the northern. Right: at a place in the northern hemisphere the field dips below the horizontal by the angle I, with components B_H (north) and B_V (down)."
<svg viewBox="0 0 440 220" role="img" aria-label="Earth as a circle with a dipole arrow inside pointing down, field lines curving from the bottom half to the top half outside; beside it, a field vector dipping below a horizontal line with its horizontal and vertical components">
<circle cx="130" cy="110" r="60" style="fill:none;stroke:var(--ink);stroke-width:1.4"/>
<line style="stroke:var(--ink);stroke-width:2" x1="130" y1="85" x2="130" y2="128"/><polygon style="fill:var(--ink)" points="130,136 126,127 134,127"/><text class="k" x="136" y="112">m</text>
<text class="k" x="96" y="42">geographic N</text><text class="k" x="96" y="186">geographic S</text>
<path class="ray" d="M160,162 C250,200 250,20 160,58"/><polygon style="fill:var(--phy)" points="227.5,102 223.5,111 231.5,111"/>
<path class="ray" d="M100,162 C10,200 10,20 100,58"/><polygon style="fill:var(--phy)" points="32.5,102 28.5,111 36.5,111"/>
<line class="ln" x1="290" y1="70" x2="430" y2="70"/><text x="384" y="62">north →</text>
<line class="faint" x1="300" y1="70" x2="357.9" y2="70"/><line class="faint" x1="357.9" y1="70" x2="357.9" y2="138.9"/>
<line class="ray" x1="300" y1="70" x2="357.9" y2="138.9"/><polygon style="fill:var(--phy)" points="357.9,138.9 349.0,134.6 355.2,129.4"/>
<text class="k" x="314" y="120">B</text><text x="318" y="62">B_H</text><text x="363" y="108">B_V</text><text class="k" x="326" y="86">I</text>
<text x="300" y="190">horizontal: B_H = B cos I</text><text x="300" y="206">vertical: B_V = B sin I</text>
</svg>
:::

**Dip in the dipole model.** At magnetic latitude $\lambda$ on a sphere of radius $R$, the dipole's radial and tangential components are (the general field is derived in the Olympiad section)

$$B_V = \frac{\mu_0}{4\pi}\frac{2m\sin\lambda}{R^3},\qquad B_H = \frac{\mu_0}{4\pi}\frac{m\cos\lambda}{R^3},\qquad\text{so}\qquad \tan I = 2\tan\lambda.$$

At the magnetic equator the needle is horizontal; at the magnetic poles it is vertical; at magnetic latitude 45° the dip is $\tan^{-1}2 = 63.4^\circ$, not 45°. The total field is $B_{\text{eq}}\sqrt{1+3\sin^2\lambda}$, twice as strong at the poles as at the magnetic equator. The real field departs from this model by tens of percent in places, so treat $\tan I = 2\tan\lambda$ as a first approximation only.

**Apparent dip.** If the dip circle is turned so its plane makes angle $\alpha$ with the magnetic meridian, the needle sees the full $B_V$ but only $B_H\cos\alpha$. It shows an apparent dip $I'$ with $\tan I' = \tan I/\cos\alpha$. In two perpendicular planes, $\cot^2I_1+\cot^2I_2 = \cot^2I$, a standard way to find the true dip without knowing where the meridian is.

:::qc
q: In the dipole model, where on Earth does a dip needle stand vertical?
options: ["At the geographic equator", "At the magnetic equator", "At the magnetic poles", "Nowhere: dip never reaches 90°"]
answer: 2
right: Right. tan I = 2 tan λ, which is infinite at λ = ±90°, the magnetic poles. There B_H = 0, so an ordinary compass has no preferred direction.
wrong: tan I = 2 tan λ, so I = 90° where the magnetic latitude is ±90°: the magnetic poles. At the magnetic equator I = 0.
:::

## Neutral points {lvl=3 id=s-neutral label="JEE"}

Lay a bar magnet on a table, where the Earth's horizontal field $B_H$ points north. Around the magnet the two fields add as vectors. At a **neutral point** they cancel exactly, and a small compass placed there has no preferred direction.

Where are they? Use the fact that the magnet's field is **along** $\vec m$ on the axis and **against** $\vec m$ on the equatorial line.

- **N pole pointing north** ($\vec m$ along $\vec B_H$). On the axis the fields add. On the equatorial line (east and west of the magnet) the magnet's field points south and cancels $B_H$. Neutral points lie **east and west**, at the distance where $\dfrac{\mu_0}{4\pi}\dfrac{m}{d^3} = B_H$ (short magnet).
- **N pole pointing south** ($\vec m$ against $\vec B_H$). Now the axial field points south. Neutral points lie **on the axis**, north and south of the magnet, at $\dfrac{\mu_0}{4\pi}\dfrac{2m}{d^3} = B_H$.

:::figure caption="Neutral points (×) for a bar magnet in the Earth's horizontal field, with north up the page. Left: N pole pointing north; the points lie on the equatorial line. Right: N pole pointing south; the points lie on the axis."
<svg viewBox="0 0 440 220" role="img" aria-label="Two panels. In each, a vertical bar magnet with the Earth's field arrow pointing up. On the left the N pole is at the top and crosses mark points to the left and right. On the right the N pole is at the bottom and crosses mark points above and below">
<line class="ray" x1="20" y1="195" x2="20" y2="35"/><polygon style="fill:var(--phy)" points="20,27 15,37 25,37"/><text x="26" y="40">B_H</text>
<rect class="m2" x="104" y="80" width="12" height="60" style="stroke:var(--ink);stroke-width:1.2"/>
<text class="k" x="106" y="76">N</text><text class="k" x="106" y="154">S</text>
<line class="faint" x1="45" y1="110" x2="175" y2="110"/>
<text class="k" x="48" y="114">×</text><text class="k" x="164" y="114">×</text>
<text x="70" y="200">N pointing north</text>
<line class="ray" x1="240" y1="195" x2="240" y2="35"/><polygon style="fill:var(--phy)" points="240,27 235,37 245,37"/><text x="246" y="40">B_H</text>
<rect class="m2" x="324" y="80" width="12" height="60" style="stroke:var(--ink);stroke-width:1.2"/>
<text class="k" x="326" y="76">S</text><text class="k" x="326" y="154">N</text>
<line class="faint" x1="330" y1="20" x2="330" y2="185"/>
<text class="k" x="326" y="34">×</text><text class="k" x="326" y="180">×</text>
<text x="290" y="200">N pointing south</text>
</svg>
:::

:::worked title="Locating a neutral point"
**A short magnet of moment 0.40 A m² lies with its N pole pointing south, in a place where $B_H = 40$ µT (a given value). Where are the neutral points?**

On the axis: $10^{-7}\times\dfrac{2\times0.40}{d^3} = 4.0\times10^{-5}$, so $d^3 = \dfrac{8\times10^{-8}}{4\times10^{-5}} = 2.0\times10^{-3}$ m³ and $d = 0.126$ m. Neutral points 12.6 cm north and south of the centre.

Turn the magnet round (N pointing north): the equatorial condition $10^{-7}\times0.40/d^3 = 4\times10^{-5}$ gives $d^3 = 10^{-3}$, $d = 10$ cm east and west. Since $2^{1/3} = 1.26$, the axial neutral points are always 1.26 times farther out.
:::

:::qc
q: A magnet lies with its N pole pointing north. At a point on its axis, north of the magnet, how does the total field compare with B_H?
options: ["Smaller than B_H", "Zero", "Larger than B_H", "Equal to B_H"]
answer: 2
right: Right. On the axis the magnet's field points along m, which is north here, so it adds to B_H. The neutral points are east and west instead.
wrong: On the axis the magnet's field is along m. With N pointing north that is northwards, the same direction as B_H, so the fields add. Cancellation happens on the equatorial line.
:::

## Magnetometers: measuring m and B_H {lvl=3 id=s-meters label="JEE"}

Before electronic sensors, the Earth's field and the moments of magnets were measured with a compass and a stopwatch. Two instruments each give a combination of $m$ and $B_H$; together they give both. These are classic board and JEE items.

**The deflection magnetometer.** A small compass needle sits at the centre of a scale. The magnet is placed east–west, so its field at the needle is **perpendicular** to $B_H$. The needle then sets along the resultant, deflected by $\theta$ from north, with

$$B_{\text{magnet}} = B_H\tan\theta.$$

The two standard arrangements, called the **Gauss positions**:

- **Tan A position (end-on):** the needle lies on the magnet's axis at distance $d$ from its centre. $\;\dfrac{\mu_0}{4\pi}\dfrac{2md}{(d^2-l^2)^2} = B_H\tan\theta_A.$
- **Tan B position (broadside-on):** the needle lies on the magnet's equatorial line. $\;\dfrac{\mu_0}{4\pi}\dfrac{m}{(d^2+l^2)^{3/2}} = B_H\tan\theta_B.$

Either gives the ratio $m/B_H$. For a short magnet at the same $d$, $\tan\theta_A = 2\tan\theta_B$: this was historically one of the checks of the $1/r^3$ law. Readings are taken on both sides and with the magnet reversed, then averaged, to cancel an off-centre needle or magnet.

**Comparing two magnets (null method).** Place two magnets on opposite sides of the needle in the same position, at distances $d_1$ and $d_2$ chosen to give zero deflection. Then for short magnets $m_1/m_2 = d_1^3/d_2^3$.

**The oscillation (vibration) magnetometer.** Hang the magnet horizontally and time its small oscillations in the Earth's field:

$$T = 2\pi\sqrt{\frac{I}{mB_H}}\quad\Longrightarrow\quad mB_H = \frac{4\pi^2I}{T^2}.$$

It gives the **product** $mB_H$. With the ratio from the deflection magnetometer:

$$B_H = \sqrt{\frac{mB_H}{m/B_H}},\qquad m = \sqrt{(mB_H)(m/B_H)}.$$

The oscillation magnetometer alone also compares things:

- **Same magnet, two places:** $B_1/B_2 = T_2^2/T_1^2$.
- **Two magnets (sum and difference method):** tie them together, like poles together (period $T_s$) and then opposed (period $T_d$). The moment of inertia is the same both times, so $\dfrac{m_1+m_2}{m_1-m_2} = \dfrac{T_d^2}{T_s^2}$, giving $\dfrac{m_1}{m_2} = \dfrac{T_d^2+T_s^2}{T_d^2-T_s^2}$.

:::qc
q: The same short magnet, at the same distance from a deflection magnetometer, gives a deflection θ_A in the tan A position and θ_B in the tan B position. Which is true?
options: ["tan θ_A = tan θ_B", "tan θ_A = 2 tan θ_B", "θ_A = 2θ_B", "tan θ_B = 2 tan θ_A"]
answer: 1
right: Right. The axial field is twice the equatorial field, and each equals B_H times the tangent of its deflection, so tan θ_A = 2 tan θ_B. The angles themselves are not in ratio 2.
wrong: B_magnet = B_H tan θ, and the axial field is twice the equatorial one. So it is the tangents that are in ratio 2: tan θ_A = 2 tan θ_B.
:::

## The full dipole field {lvl=4 id=s-general label="Olympiad"}

Far from any small current loop, the field at a point P at distance $r$, at angle $\theta$ from $\vec m$, is

:::eq caption="Field of a point magnetic dipole. Radial and transverse components, and the vector form."
$$B_r = \frac{\mu_0}{4\pi}\frac{2m\cos\theta}{r^3},\qquad B_\theta = \frac{\mu_0}{4\pi}\frac{m\sin\theta}{r^3},\qquad \vec B = \frac{\mu_0}{4\pi}\,\frac{3(\vec m\cdot\hat r)\hat r-\vec m}{r^3}$$
:::

**Quick derivation.** Outside the sources the dipole's field (like the electric dipole's) is minus the gradient of a scalar potential, $\phi = \dfrac{\mu_0}{4\pi}\dfrac{m\cos\theta}{r^2}$. Then $B_r = -\partial\phi/\partial r$ and $B_\theta = -\dfrac1r\partial\phi/\partial\theta$ give the components above. A faster way to remember them: resolve $\vec m$ into $m\cos\theta$ along $\hat r$ and $-m\sin\theta\,\hat\theta$ across it. P is on the axis of the first part (field $2\times$, along it) and on the equator of the second (field $1\times$, opposite to it, i.e. along $+\hat\theta$).

**Consequences.**

- $|\vec B| = \dfrac{\mu_0}{4\pi}\dfrac{m}{r^3}\sqrt{1+3\cos^2\theta}$, ranging from $1\times$ on the equator to $2\times$ on the axis.
- The field makes angle $\alpha$ with $\hat r$, where $\tan\alpha = B_\theta/B_r = \tfrac12\tan\theta$. On Earth this is $\tan I = 2\tan\lambda$ again (with $\lambda = 90^\circ-\theta$).
- $\vec B$ is perpendicular to $\vec m$ where $\cos^2\theta = 1/3$, i.e. $\theta = 54.7^\circ$.
- **Field lines** satisfy $dr/(r\,d\theta) = B_r/B_\theta = 2\cot\theta$, so $\ln r = 2\ln\sin\theta + $ const: $r = L\sin^2\theta$. A line leaving the Earth at magnetic latitude $\lambda_0$ crosses the equatorial plane at $L = R/\cos^2\lambda_0$. A line from 60° latitude reaches out to 4 Earth radii.

:::qc
q: At what angle θ from the dipole axis is the dipole field perpendicular to the moment m (so a compass needle there sets at right angles to m)?
options: ["45°", "54.7°", "60°", "90°"]
answer: 1
right: Right. The component of B along m is (μ₀/4π)(m/r³)(3cos²θ − 1), which vanishes at cos²θ = 1/3, θ = 54.7°. At 90° the field is antiparallel to m, not perpendicular.
wrong: The component of B along m is proportional to 3cos²θ − 1, zero when cos θ = 1/√3, θ ≈ 54.7°. On the equator (90°) the field is antiparallel to m.
:::

## Forces between magnets {lvl=4 id=s-force label="Olympiad"}

In a uniform field a magnet feels no net force. In a **non-uniform** field it does. Treat the orientation of $\vec m$ as fixed and move the magnet: the energy $U = -\vec m\cdot\vec B$ changes with position, so

$$\vec F = -\nabla U = \nabla(\vec m\cdot\vec B).$$

A magnet aligned with the field ($\vec m\cdot\vec B>0$) is pulled towards where the field is **stronger**. This is why an iron nail is attracted to either pole of a magnet (NCERT Example 5.1(b)): the field magnetises the nail along $\vec B$, and then the nail slides up the gradient. (Magnetisation of materials is the subject of the leaf on magnetic materials.)

**Two coaxial magnets, head to tail.** Magnet 1 sits at the origin with $\vec m_1$ along $x$; magnet 2, with $\vec m_2$ also along $x$, sits on the axis at distance $x$. The field of 1 there is $\dfrac{\mu_0}{4\pi}\dfrac{2m_1}{x^3}$ along $x$, so

$$U = -\frac{\mu_0}{4\pi}\frac{2m_1m_2}{x^3},\qquad F_x = -\frac{dU}{dx} = -\frac{\mu_0}{4\pi}\frac{6m_1m_2}{x^4}.$$

:::law caption="Force between two coaxial short magnets at separation x. Attractive when the moments point the same way (N facing S), repulsive when they are opposed (like poles facing)."
$$F = \frac{\mu_0}{4\pi}\frac{6m_1m_2}{x^4} = \frac{3\mu_0m_1m_2}{2\pi x^4}$$
:::

**Side by side.** If both moments are perpendicular to the line joining them and parallel to each other, magnet 2 is on the equator of magnet 1, where the field is $-\dfrac{\mu_0}{4\pi}\dfrac{\vec m_1}{x^3}$. Then $U = +\dfrac{\mu_0}{4\pi}\dfrac{m_1m_2}{x^3}$ and the force is a **repulsion** of $\dfrac{\mu_0}{4\pi}\dfrac{3m_1m_2}{x^4}$, half the coaxial value. Antiparallel side by side, they attract.

Why $1/x^4$? The force between two single poles would fall as $1/x^2$. Each magnet is a pair of nearly cancelling poles, and each pairing costs one power of $x$: two magnets, two extra powers. You can check this with the pole model: four pole–pole forces $\pm q_1q_2/(x\pm l_1\pm l_2)^2$ expanded for small $l$ give the same $6m_1m_2/x^4$.

**General energy of two dipoles** a vector $\vec r$ apart:

$$U = \frac{\mu_0}{4\pi}\,\frac{\vec m_1\cdot\vec m_2-3(\vec m_1\cdot\hat r)(\vec m_2\cdot\hat r)}{r^3}.$$

Head to tail ($U = -2km_1m_2/r^3$, with $k = \mu_0/4\pi$) is twice as deep as side by side antiparallel ($-km_1m_2/r^3$). That is why a chain of small magnets or compass needles lines up end to end.

A magnet dropped through a vertical copper tube falls slowly, although copper is not attracted to it. That is a force of a different kind, from currents the moving magnet induces in the tube; it belongs to the induction leaves.

:::qc
q: Two identical small magnets are coaxial and attract with force F at separation x. What is the force at separation 2x?
options: ["F/2", "F/4", "F/8", "F/16"]
answer: 3
right: Right. The coaxial force goes as 1/x⁴, so doubling x divides it by 16.
wrong: The force between two dipoles is the gradient of an energy ∝ 1/x³, so it goes as 1/x⁴. Doubling the separation divides it by 2⁴ = 16.
:::

## Poles or currents? Inside the magnet {lvl=4 id=s-inside label="Olympiad"}

The pole model and the current-loop model give the same field **outside** a magnet. Inside they disagree completely.

- **Pole model:** lines leave $+q_m$ at the N face in both directions. Inside the bar they run from N to S, against $\vec m$.
- **Current model (a solenoid):** inside, the field runs from S to N, along $\vec m$, and joins up with the outside lines into closed loops.

Gauss's law for magnetism decides it. The pole picture has lines starting on the N face, so $\oint\vec B\cdot d\vec S\neq0$ round that face. The true $\vec B$ is the solenoid's: continuous closed loops, running S to N inside. What the pole picture actually computes is a different field, called $\vec H$, which does start and end on the faces of a magnet. The two are related by $\vec B = \mu_0(\vec H+\vec M)$, where $\vec M$ is the magnetic moment per unit volume; the leaf on magnetic materials develops this. Outside the magnet $\vec M = 0$ and the two pictures agree, which is why the pole formulas work for everything in this lesson except the inside of the bar.

A quick sanity check of the inside field: a long magnet with magnetisation $M$ is equivalent to a solenoid with surface current $M$ per unit length, so the field deep inside is $B = \mu_0M$, pointing from S to N. The pole model would give a small field pointing the other way.

:::qc
q: Inside a long bar magnet, far from its ends, which way does B point?
options: ["From N to S, like the outside field near the poles", "From S to N, along m", "B is zero inside a magnet", "Across the magnet, perpendicular to its length"]
answer: 1
right: Right. A magnet is an equivalent solenoid, and inside a solenoid B runs along the axis from the S end to the N end. That closes each field line into a loop, as ∮B·dS = 0 requires.
wrong: B lines are closed loops. Outside they run N → S; to close up they must run S → N inside, as in a solenoid of the same moment. The N → S field inside comes from the pole model and is H, not B.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Magnets always have two poles: like poles repel, unlike attract, and cutting a magnet only makes more complete magnets. {lvl=1}
2. Every magnetic field comes from moving charge. A magnet is a crowd of aligned atomic current loops, equivalent to a solenoid; $\vec m = NIA\,\hat n$, unit A m² = J/T, out of the N face. {lvl=2}
3. Far field: copy the electric dipole with $\vec p\to\vec m$, $1/4\pi\varepsilon_0\to\mu_0/4\pi$. Axial $\frac{\mu_0}{4\pi}\frac{2m}{r^3}$ along $\vec m$; equatorial $\frac{\mu_0}{4\pi}\frac{m}{r^3}$ against $\vec m$. Pole model: $m = q_m\cdot2l$, exact $\frac{\mu_0}{4\pi}\frac{2mr}{(r^2-l^2)^2}$ and $\frac{\mu_0}{4\pi}\frac{m}{(r^2+l^2)^{3/2}}$. {lvl=2}
4. Uniform field: no force; $\vec\tau = \vec m\times\vec B$, $U = -\vec m\cdot\vec B$, $T = 2\pi\sqrt{I/mB}$. {lvl=2}
5. $\oint\vec B\cdot d\vec S = 0$: no magnetic charge, closed field lines. With monopoles it would be $\mu_0q_{m,\text{enc}}$. {lvl=2}
6. Earth: roughly a dipole pointing south; declination, dip $\tan I = B_V/B_H$, and $\tan I = 2\tan\lambda$ in the dipole model. Neutral points: equatorial if N points north, axial if N points south. Deflection magnetometer gives $m/B_H$ ($B = B_H\tan\theta$), oscillation magnetometer gives $mB_H$. {lvl=3}
7. Full field $\frac{\mu_0}{4\pi}[3(\vec m\cdot\hat r)\hat r-\vec m]/r^3$, lines $r = L\sin^2\theta$. Non-uniform field: $\vec F = \nabla(\vec m\cdot\vec B)$; coaxial magnets $3\mu_0m_1m_2/2\pi x^4$. Inside a magnet $\vec B$ runs S to N; the pole model gives $\vec H$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The Earth's geographic north is near a magnetic **S** pole: that is why a compass's N end points there. {lvl=1}
- $\vec m$ points from S to N **inside** the magnet. On the equatorial line the field is parallel to the magnet but points from its N end towards its S end, i.e. opposite to $\vec m$. {lvl=2}
- $2m/r^3$ and $m/r^3$ are short-magnet formulas. If the problem gives the magnet's length and the distance is not large, use the exact pole-model forms with half the **magnetic** length $l$. {lvl=2}
- $U = -mB\cos\theta$ has its zero at 90°. Work done is a difference: $mB(\cos\theta_1-\cos\theta_2)$; from 0° to 180° it is $2mB$, not $mB$. {lvl=2}
- Units: $m$ in A m² is the same as J/T; pole strength is in A m; $\mu_0/4\pi = 10^{-7}$ T m/A exactly enough for all problems; 1 G = $10^{-4}$ T. {lvl=2}
- Deflection magnetometer: the magnet must lie **east–west** so its field is perpendicular to $B_H$; only then is $B = B_H\tan\theta$. It is the tangents, not the angles, that scale with the field. {lvl=3}
- Oscillation magnetometer uses only $B_H$ (the magnet swings horizontally), not the total field. In sum-and-difference problems $I$ is the combined moment of inertia, the same in both arrangements. {lvl=3}
- Dip: $\tan I = 2\tan\lambda$, not $I = 2\lambda$; and it uses **magnetic** latitude. {lvl=3}
- Forces between magnets go as $1/x^4$, torques on one magnet in another's field as $1/x^3$. Do not mix them up when scaling. {lvl=4}
:::
