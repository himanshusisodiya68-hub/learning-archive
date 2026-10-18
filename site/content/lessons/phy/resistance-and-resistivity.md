---
title: Resistance and resistivity
summary: Why a wire's resistance grows with length and falls with thickness, how resistivity separates the material from the shape, what happens when a wire is stretched or heated, how to find the resistance of tapered, spherical and coaxial conductors, and where resistivity comes from in the electron picture.
ncert: ["Class 10 Science · Ch 11 Electricity (§11.5)"]
up_to: Olympiad
builds_on: [Electric current and potential difference, Ohm's law, Resistors in series and parallel, Area of a circle]
notes_prompt: Explain, without quoting the formula, why cutting a wire in half halves its resistance but folding it in half quarters it.
margin:
  - kind: history
    title: History
    text: In 1911 Heike Kamerlingh Onnes cooled mercury to about 4.2 K and its resistance vanished completely. This was the discovery of superconductivity, which today keeps MRI magnets running with no power loss in the coils.
  - kind: tip
    title: Board favourite
    text: "Stretching a wire keeps its volume fixed. Length n times means area 1/n times, so resistance becomes n² times. Do not stop at n times."
  - kind: olympiad
    title: Olympiad link
    text: "Any conductor whose cross-section changes can be cut into thin slices in series: R = ∫ρ dx/A(x). For radial flow, the slices are spherical or cylindrical shells."
books:
  - { title: "NCERT Science Class X", ref: "Ch 11 Electricity, §11.5 and Table 11.2" }
  - { title: "NCERT Physics Class XII Part 1", ref: "Ch 3 Current Electricity (resistivity, drift of electrons, temperature dependence)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 32 Electric Current in Conductors" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.4 Electric current" }
cards:
  - { front: "How does the resistance of a uniform wire depend on its shape?", back: "$R = \\rho l/A$: proportional to length, inversely proportional to area of cross-section." }
  - { front: "SI unit of resistivity, and typical values?", back: "Ω m. Metals $10^{-8}$ to $10^{-6}$ Ω m; insulators $10^{12}$ to $10^{17}$ Ω m." }
  - { front: "A wire is stretched to n times its length. New resistance?", back: "$n^2 R$, because the volume is fixed so the area falls to $A/n$." }
  - { front: "Why are heater coils made of nichrome rather than copper?", back: "Nichrome has about 60 times the resistivity of copper, hardly changes resistance with temperature, and does not oxidise at red heat." }
  - { front: "Resistance of a wire tapering from radius $a$ to $b$ over length $L$?", back: "$R = \\rho L/(\\pi a b)$, from $\\int \\rho\\,dx/(\\pi r^2)$." }
  - { front: "Resistivity in the free-electron model?", back: "$\\rho = m/(n e^2 \\tau)$, with $n$ the electron density and $\\tau$ the mean time between collisions." }
core:
  idea: 'The resistance of a uniform conductor is $R = \rho l/A$: slices in series add resistance along the length, strands in parallel lower it as the area grows, and the resistivity $\rho$ belongs to the material (and its temperature). Locally $\vec J = \sigma\vec E$.'
  formulas:
    - tex: 'R = \rho\,\frac{l}{A}'
      label: 'Resistance of a uniform wire'
    - tex: 'R = \int \frac{\rho\,dx}{A(x)}'
      label: 'Non-uniform conductor (slices in series)'
    - tex: '\rho(T) = \rho_0\,[1 + \alpha\,(T - T_0)]'
      label: 'Temperature dependence'
  conditions:
    - 'Uniform cross-section and resistivity along the current (otherwise integrate over slices)'
    - 'Constant temperature, with the dimensions fixed (thermal expansion neglected)'
    - 'Volume stays constant when a wire is stretched or drawn out'
  sign: 'Stretching a wire to n times its length gives n² R, not nR, because the area shrinks too; folding it in half gives R/4.'
outcomes:
  - 'Explain how R depends on length, area, material and temperature, and calculate it from R = ρl/A'
  - 'Find the new resistance of a wire that is stretched, cut or folded'
  - 'Use conductivity and the local form J = σE'
  - 'Apply the temperature coefficient to metals, alloys and semiconductors'
  - 'Integrate to find the resistance of tapered conductors and of radial flow between spheres or cylinders'
---

:::hook
q: A wire has resistance 10 Ω. You pull it through a die so that it becomes twice as long, without losing any metal. What is its resistance now?
options: ["10 Ω", "20 Ω", "40 Ω", "5 Ω"]
answer: 2
right: Right. Twice the length doubles the resistance, and because the same metal is spread over twice the length, the wire is half as thick, which doubles it again. 10 × 2 × 2 = 40 Ω.
wrong: Longer means more resistance, but that is only half the story. The same volume of metal now has half the cross-section, and a thinner wire also resists more. The answer is 40 Ω.
:::

## What sets the resistance of a wire {lvl=1 id=s-factors label="Class 10"}

Take a wire of some metal and connect it to a cell. A current flows, and $R = V/I$ tells you how hard the wire resists it. Now change the wire and ask what happens to $R$. Only three things can change: how **long** the wire is, how **thick** it is, and what **material** it is made of. (Temperature matters too; we come to that later.)

You can predict the first two without any new physics, using only what you know about resistors in series and parallel.

**Length.** Picture a 2 m wire as two 1 m wires joined end to end. Each 1 m piece has the same resistance $R_1$, and they are in series, so the whole wire has $2R_1$. A 3 m wire is three pieces in series: $3R_1$. So

$$R \propto l.$$

**Area.** Picture a thick wire as a bundle of thin, identical strands lying side by side. Each strand has resistance $R_s$. They are in parallel, so $n$ strands give $R_s/n$. Doubling the area means doubling the number of strands, which halves the resistance:

$$R \propto \frac1A.$$

:::figure caption="Left: a long wire is short pieces in series, so R grows with length. Right: a thick wire is thin strands in parallel, so R falls as the area grows."
<svg viewBox="0 0 400 170" role="img" aria-label="Wire split into series slices and parallel strands">
<rect x="20" y="50" width="50" height="24" style="fill:color-mix(in srgb, var(--phy) 18%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<rect x="70" y="50" width="50" height="24" style="fill:color-mix(in srgb, var(--phy) 18%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<rect x="120" y="50" width="50" height="24" style="fill:color-mix(in srgb, var(--phy) 18%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<text x="38" y="66">R₁</text><text x="88" y="66">R₁</text><text x="138" y="66">R₁</text>
<line class="axis" x1="20" y1="95" x2="170" y2="95"/>
<text x="55" y="115">length 3l → 3R₁</text>
<text x="30" y="30">series slices</text>
<rect x="240" y="30" width="130" height="18" style="fill:color-mix(in srgb, var(--phy) 18%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<rect x="240" y="52" width="130" height="18" style="fill:color-mix(in srgb, var(--phy) 18%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<rect x="240" y="74" width="130" height="18" style="fill:color-mix(in srgb, var(--phy) 18%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<text x="290" y="44">R_s</text><text x="290" y="66">R_s</text><text x="290" y="88">R_s</text>
<text x="245" y="115">area 3A → R_s/3</text>
<text x="250" y="20">parallel strands</text>
<line class="ray" x1="20" y1="145" x2="170" y2="145"/><text x="20" y="162" style="font-size:11px">current flows along the wire →</text>
</svg>
:::

Put the two together: $R \propto l/A$. The constant of proportionality depends only on the material. Call it $\rho$ (rho), the **resistivity**:

:::law caption="R in ohm, l in metre, A in square metre, ρ in ohm metre."
$$R = \rho\,\frac{l}{A}$$
:::

For a round wire of diameter $d$, $A = \pi d^2/4$. Since the diameter is squared, halving the diameter makes $R$ **four** times larger.

:::qc
q: Wire Q is made of the same metal as wire P, is twice as long and has twice the diameter. Compared with P, Q has resistance
options: ["twice", "the same", "half", "one quarter"]
answer: 2
right: Right. Length ×2 doubles R; diameter ×2 makes the area ×4, which divides R by 4. Net factor 2/4 = 1/2.
wrong: Diameter is squared in the area. Length ×2 gives ×2, diameter ×2 gives ÷4, so overall ×½.
:::

## Resistivity: a number for the material alone {lvl=1 id=s-rho label="Class 10"}

$R$ belongs to a particular object. $\rho$ belongs to the **material**. Rearranging, $\rho = RA/l$: it is the resistance of a piece of the material 1 m long with a 1 m² cross-section (a 1 m cube between opposite faces). Its SI unit is $\Omega\cdot\text{m}^2/\text{m} = \Omega\,\text{m}$.

Selected values from NCERT Table 11.2, at 20 °C:

| Group | Material | Resistivity (Ω m) |
|---|---|---|
| Conductors | Silver | $1.60\times10^{-8}$ |
| | Copper | $1.62\times10^{-8}$ |
| | Aluminium | $2.63\times10^{-8}$ |
| | Tungsten | $5.20\times10^{-8}$ |
| | Iron | $10.0\times10^{-8}$ |
| | Mercury | $94.0\times10^{-8}$ |
| | Manganese | $1.84\times10^{-6}$ |
| Alloys | Manganin (Cu, Mn, Ni) | $44\times10^{-6}$ |
| | Constantan (Cu, Ni) | $49\times10^{-6}$ |
| | Nichrome (Ni, Cr, Mn, Fe) | $100\times10^{-6}$ |
| Insulators | Glass | $10^{10}$ to $10^{14}$ |
| | Diamond | $10^{12}$ to $10^{13}$ |
| | Ebonite | $10^{15}$ to $10^{17}$ |

Three things to notice.

1. **Metals** sit between about $10^{-8}$ and $10^{-6}$ Ω m. **Insulators** sit between about $10^{12}$ and $10^{17}$ Ω m. The gap is more than 18 powers of ten, one of the widest ranges of any physical property.
2. **Alloys have higher resistivity than the metals they are made of.** Nichrome is about 60 times worse than copper. That is why heater coils, toaster elements and iron elements are alloys: a short coil gives a large resistance and so a lot of heat. Alloys also do not oxidise (burn) readily at red heat.
3. **Copper and aluminium** are used for transmission lines because their resistivity is low. Silver is slightly better but far too expensive. **Tungsten** is used for bulb filaments because it melts only at about 3400 °C.

:::worked title="NCERT Example 11.5"
Resistance of a metal wire of length 1 m is 26 Ω at 20°C. If the diameter of the wire is 0.3 mm, what will be the resistivity of the metal at that temperature? Using Table 11.2, predict the material of the wire.

$A = \pi d^2/4$ with $d = 3\times10^{-4}$ m, so

$$\rho = \frac{RA}{l} = \frac{26\times3.14\times(3\times10^{-4})^2}{4\times1} = 1.84\times10^{-6}\ \Omega\,\text{m}.$$

This matches **manganese** in Table 11.2.
:::

:::qc
q: An electric iron's element and a house wire both carry the same current. Why does the element get red hot while the wire stays cool?
options: ["The element carries more charge", "The element is made of a high-resistivity alloy, so its resistance and heat output are far larger", "The house wire is insulated"]
answer: 1
right: Right. With the same current, heat produced goes as the resistance, and the nichrome element has a resistance hundreds of times that of the copper wire.
wrong: The current is the same in both. What differs is the resistance: nichrome has about 60 times the resistivity of copper, and the element is also thin.
:::

## Stretching and folding a wire {lvl=2 id=s-stretch label="Class 12"}

When a wire is drawn out, the metal is neither created nor lost. Its **volume** $V = Al$ stays the same. So if the length becomes $n$ times, the area becomes $1/n$ times, and

$$R' = \rho\,\frac{nl}{A/n} = n^2 R.$$

It is often handy to write $R$ in terms of volume, so that only one variable changes:

$$R = \frac{\rho\, l^2}{V} = \frac{\rho V}{A^2}.$$

So at fixed volume, $R \propto l^2$ and $R \propto 1/A^2 \propto 1/d^4$. Halving the diameter of a drawn wire makes its resistance 16 times larger.

**Small stretches.** If the length grows by a small fraction, take logarithms of $R = \rho l^2/V$: $\dfrac{\Delta R}{R} = 2\,\dfrac{\Delta l}{l}$. A 1% stretch gives about a 2% rise in resistance. (Exactly, $1.01^2 = 1.0201$.) A **strain gauge** glued to a bridge or aircraft wing uses this to measure tiny stretches.

**Folding.** Fold a wire of resistance $R$ in half and twist the halves together. You now have two pieces of resistance $R/2$ in parallel: $R/4$. Cutting it into $n$ equal pieces and bundling them gives $R/n^2$.

:::qc
q: A wire of resistance 8 Ω is drawn out until its diameter is halved. Its new resistance is
options: ["16 Ω", "32 Ω", "64 Ω", "128 Ω"]
answer: 3
right: Right. At fixed volume R ∝ 1/d⁴. Halving d multiplies R by 16: 8 × 16 = 128 Ω.
wrong: Halving the diameter quarters the area, which at fixed volume makes the length 4 times. R goes up by 4 × 4 = 16, so 128 Ω.
:::

## Conductivity and the local form of Ohm's law {lvl=2 id=s-local label="Class 12"}

$R = V/I$ describes a whole object. To talk about what happens at each **point** inside a conductor, divide out the shape.

- The current per unit area is the **current density** $J = I/A$ (A/m²).
- In a uniform wire the field inside is $E = V/l$.

Substitute into $V = IR = I\rho l/A$:

$$\frac{V}{l} = \rho\,\frac{I}{A}\quad\Longrightarrow\quad E = \rho J \quad\text{or}\quad \vec J = \sigma \vec E.$$

$\sigma = 1/\rho$ is the **conductivity**, in siemens per metre (S/m). Copper has $\sigma \approx 6\times10^{7}$ S/m.

This **local** law holds at every point even when the conductor has an awkward shape. That is what lets us handle tapered and curved conductors below: we never need the whole-object formula, only $E = \rho J$ inside each thin slice.

## Temperature and resistivity {lvl=3 id=s-temp label="JEE"}

Resistivity is not fixed for a material; it depends on temperature. Over a moderate range it is close to linear:

:::eq caption="α is the temperature coefficient of resistivity, in K⁻¹; ρ₀ is the value at a reference temperature T₀."
$$\rho(T) = \rho_0\,\bigl[1 + \alpha\,(T - T_0)\bigr]$$
:::

If the wire's dimensions barely change (thermal expansion is about 1000 times smaller an effect), the same law holds for $R$.

Three families behave very differently.

- **Pure metals**: $\alpha > 0$, about $4\times10^{-3}$ K⁻¹ (copper about $3.9\times10^{-3}$). The lattice ions vibrate more when hot and scatter the electrons more often. A tungsten filament at about 2500 °C has roughly 10 to 15 times its cold resistance; this is why a bulb draws a large surge at switch-on.
- **Alloys** such as manganin and constantan: $\alpha$ is tiny, about $10^{-5}$ K⁻¹ or less. Their resistance is dominated by the disorder of the mixed atoms, which does not depend on temperature. Standard resistors and the wires of meter bridges are made of them.
- **Semiconductors** (silicon, germanium, carbon): $\alpha < 0$. Heating frees many more charge carriers, and this outweighs the extra scattering. Pure silicon's resistivity falls by roughly 7% per kelvin near room temperature.

:::figure caption="Sketch of how resistivity changes with temperature (not to scale): a pure metal rises, an alloy stays almost flat at a higher level, a semiconductor falls steeply."
<svg viewBox="0 0 360 210" role="img" aria-label="Resistivity versus temperature for metal, alloy and semiconductor">
<line class="axis" x1="40" y1="180" x2="340" y2="180"/>
<line class="axis" x1="40" y1="180" x2="40" y2="15"/>
<text x="300" y="198">T</text><text x="14" y="25">ρ</text>
<line class="pen" x1="40" y1="150" x2="330" y2="80" style="stroke:var(--phy)"/>
<text x="250" y="88" style="fill:var(--phy)">pure metal</text>
<line class="pen" x1="40" y1="60" x2="330" y2="56" style="stroke:var(--chem)"/>
<text x="230" y="48" style="fill:var(--chem)">alloy (manganin)</text>
<path class="pen" d="M50 20 Q90 140 180 160 T330 172" style="fill:none;stroke:var(--mat)"/>
<text x="70" y="40" style="fill:var(--mat)">semiconductor</text>
</svg>
:::

:::worked title="Two resistors whose drifts cancel (original)"
A carbon resistor ($\alpha_1 = -5\times10^{-4}$ K⁻¹) is joined in series with a copper coil ($\alpha_2 = 4\times10^{-3}$ K⁻¹). What ratio $R_1/R_2$ makes the total resistance independent of temperature, to first order?

The total is $R_1(1 + \alpha_1\Delta T) + R_2(1 + \alpha_2\Delta T)$. The $\Delta T$ term vanishes when $R_1\alpha_1 + R_2\alpha_2 = 0$:

$$\frac{R_1}{R_2} = -\frac{\alpha_2}{\alpha_1} = \frac{4\times10^{-3}}{5\times10^{-4}} = 8.$$

So 8 Ω of carbon for every 1 Ω of copper.
:::

:::note title="Linear is only an approximation" tone=warn
$\rho = \rho_0(1 + \alpha\Delta T)$ is a first-order fit. Over a few hundred kelvin it is fine for metals. For a filament heated by 2000 K it gives only a rough estimate, and for semiconductors the true dependence is exponential, not linear.
:::

:::qc
q: You need a resistor for a precision instrument whose value must not drift as the room warms up. Which material?
options: ["Copper", "Tungsten", "Manganin", "Silicon"]
answer: 2
right: Right. Manganin's temperature coefficient is roughly 400 times smaller than copper's.
wrong: Pure metals rise about 0.4% per kelvin and semiconductors change even faster. Alloys like manganin or constantan hardly change at all.
:::

## Conductors that are not uniform {lvl=3 id=s-integrate label="JEE"}

$R = \rho l/A$ assumes the same area all along. If the area changes, go back to the idea that a wire is **slices in series**. Cut the conductor into thin slices of thickness $dx$ across the direction of the current. Each slice is so thin that its area $A(x)$ is uniform across it, so

$$dR = \frac{\rho\,dx}{A(x)},\qquad R = \int \frac{\rho\,dx}{A(x)}.$$

If the resistivity also changes along the length, keep it inside: $R = \int \rho(x)\,dx/A(x)$.

**Tapered wire.** A conical wire of length $L$ has radius $a$ at one end and $b$ at the other. The radius grows linearly: $r = a + (b-a)x/L$, so $dx = \dfrac{L}{b-a}\,dr$. Then

$$R = \int_a^b \frac{\rho}{\pi r^2}\,\frac{L\,dr}{b-a} = \frac{\rho L}{\pi(b-a)}\left(\frac1a - \frac1b\right) = \frac{\rho L}{\pi a b}.$$

Compare a uniform wire, $\rho L/(\pi r^2)$: the taper simply replaces $r^2$ by the product $ab$. When $a = b$ the two agree, which is a good check.

:::figure caption="A tapered conductor cut into thin slices across the current. Each slice has resistance ρ dx / πr², and the slices are in series."
<svg viewBox="0 0 360 160" role="img" aria-label="Tapered wire divided into slices">
<polygon points="40,65 320,35 320,125 40,95" style="fill:color-mix(in srgb, var(--phy) 14%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<rect x="180" y="50" width="12" height="60" style="fill:color-mix(in srgb, var(--phy) 40%, transparent);stroke:var(--phy)"/>
<line class="faint" x1="40" y1="80" x2="320" y2="80" style="stroke-dasharray:3 3"/>
<line class="ray" x1="20" y1="80" x2="38" y2="80"/>
<text x="30" y="60">a</text><text x="326" y="60">b</text>
<text x="176" y="44">dx</text><text x="196" y="76">r</text>
<line class="axis" x1="40" y1="145" x2="320" y2="145"/><text x="170" y="140">L</text>
</svg>
:::

:::qc
q: A copper wire tapers from radius 1 mm to radius 4 mm. A uniform wire of the same length and material has the same resistance if its radius is
options: ["2.5 mm", "2 mm", "1.6 mm", "3 mm"]
answer: 1
right: Right. Equal resistance needs r² = ab = 1 × 4, so r = 2 mm, the geometric mean, not the average.
wrong: The tapered wire behaves like a uniform one with r² = ab. Here r = √(1 × 4) = 2 mm.
:::

## Radial flow: shells and cylinders {lvl=4 id=s-radial label="Olympiad"}

Sometimes current does not flow along a wire but spreads **outward**: from a small electrode into the ground, or through the insulation of a cable from the core to the sheath. The slicing idea still works; only the shape of the slices changes. The slices must be **equipotential surfaces**, so that each one really is a thin resistor in series with the next. By symmetry these are spheres or cylinders.

**Spherical shell** (inner radius $a$, outer $b$). A slice at radius $r$ has area $4\pi r^2$ and thickness $dr$:

$$R = \int_a^b \frac{\rho\,dr}{4\pi r^2} = \frac{\rho}{4\pi}\left(\frac1a - \frac1b\right) = \frac{\rho\,(b-a)}{4\pi a b}.$$

Let $b \to \infty$: a sphere of radius $a$ in an infinite medium has resistance $\rho/(4\pi a)$ to infinity. A **hemispherical earth electrode** has half the area at each radius, so $R = \rho/(2\pi a)$. With soil of $\rho = 100$ Ω m and $a = 0.5$ m this is about 32 Ω, and half of it lies within the first $a$ of soil. That is why earthing pits are packed with salt and charcoal close to the electrode.

**Coaxial cylinders** (radii $a$ and $b$, length $L$). A slice has area $2\pi r L$:

$$R = \int_a^b \frac{\rho\,dr}{2\pi r L} = \frac{\rho}{2\pi L}\ln\frac{b}{a}.$$

This is the **leakage resistance** of a coaxial cable's insulation. Note it falls as $1/L$: a longer cable has more insulation in parallel, so it leaks more.

:::figure caption="Radial current between coaxial cylinders. The thin cylindrical shell at radius r has area 2πrL and thickness dr; the shells are in series."
<svg viewBox="0 0 300 200" role="img" aria-label="Coaxial cylinders with radial current">
<circle cx="150" cy="100" r="85" style="fill:color-mix(in srgb, var(--phy) 12%, transparent);stroke:var(--phy);stroke-width:1.6"/>
<circle cx="150" cy="100" r="55" class="faint" style="fill:none;stroke-dasharray:3 3"/>
<circle cx="150" cy="100" r="25" style="fill:color-mix(in srgb, var(--phy) 45%, transparent);stroke:var(--phy);stroke-width:1.6"/>
<line class="ray" x1="175" y1="100" x2="232" y2="100"/>
<line class="ray" x1="132" y1="82" x2="92" y2="42"/>
<line class="ray" x1="150" y1="125" x2="150" y2="182"/>
<text x="143" y="104">a</text><text x="240" y="70">b</text><text x="196" y="94">r</text>
<text x="10" y="195" style="font-size:11px">current spreads outward through the shells</text>
</svg>
:::

:::worked title="Choosing the slices (original)"
A circular annulus (washer) of thickness $t$, inner radius $a$, outer radius $b$, has electrodes on its inner and outer rims. Find its resistance.

Current flows radially, so slice into rings. A ring at radius $r$ has area $2\pi r t$ (perpendicular to the current) and thickness $dr$. This is the coaxial case with $L = t$: $R = \dfrac{\rho}{2\pi t}\ln\dfrac ba$.

If instead the electrodes cover the two **flat faces**, current flows along the thickness and every path is parallel: $R = \rho t/[\pi(b^2 - a^2)]$. Same object, different electrodes, very different resistance.
:::

:::qc
q: The leakage resistance of 1 m of coaxial cable is 500 MΩ. What is the leakage resistance of 10 m of the same cable?
options: ["5000 MΩ", "500 MΩ", "50 MΩ", "158 MΩ"]
answer: 2
right: Right. R = ρ ln(b/a)/(2πL) falls as 1/L. Ten metres is ten 1 m sections in parallel.
wrong: Leakage current flows radially, across the insulation, so extra length adds paths in parallel, not in series.
:::

## Where resistivity comes from {lvl=4 id=s-drude label="Olympiad"}

Why does $J$ come out proportional to $E$ at all? The simplest model (Drude's free-electron model) answers it.

A metal contains $n$ free electrons per cubic metre. An applied field $E$ accelerates each one at $eE/m$. But every so often an electron collides with a vibrating ion or an impurity and its direction is randomised, so it forgets the speed it gained. If the average time between collisions is $\tau$, the electrons settle into an average **drift velocity**

$$v_d = \frac{eE}{m}\,\tau.$$

The current density is the charge crossing unit area per second, $J = n e v_d$. So

$$J = \frac{n e^2 \tau}{m}\,E \qquad\Longrightarrow\qquad \sigma = \frac{n e^2\tau}{m},\qquad \rho = \frac{m}{n e^2 \tau}.$$

This explains Ohm's law: $J \propto E$ because the collisions keep resetting the electrons, so the drift speed is set by the field, not by how long it has acted.

**Numbers for copper.** $n \approx 8.5\times10^{28}$ m⁻³ and $\rho \approx 1.7\times10^{-8}$ Ω m give

$$\tau = \frac{m}{n e^2 \rho} = \frac{9.11\times10^{-31}}{8.5\times10^{28}\times(1.60\times10^{-19})^2\times1.7\times10^{-8}} \approx 2.5\times10^{-14}\ \text{s}.$$

The model now reads every trend in this lesson.

- **Metals vs insulators**: an insulator has almost no free electrons, $n \to 0$, so $\rho$ is enormous.
- **Metals heat up**: hotter ions vibrate more, collisions come sooner, $\tau$ falls, $\rho$ rises.
- **Semiconductors heat up**: $n$ rises steeply (as $e^{-E_g/2kT}$), which beats the drop in $\tau$, so $\rho$ falls.
- **Alloys**: the different atoms make the lattice irregular, and every irregularity scatters. The collision rates add (**Matthiessen's rule**): $\dfrac1\tau = \dfrac1{\tau_\text{lattice}(T)} + \dfrac1{\tau_\text{impurity}}$, so $\rho = \rho_\text{lattice}(T) + \rho_\text{impurity}$. In an alloy the second term is large and fixed, so $\rho$ is high and its **fractional** change with temperature is small.

:::note title="What the simple model gets wrong" tone=info
Drude treated electrons as a classical gas. Quantum mechanics shows that only electrons near the Fermi energy matter and that they move at about $1.6\times10^{6}$ m/s in copper, so the mean free path is $v_F\tau \approx 40$ nm, about 150 atomic spacings. A perfect, still lattice would not scatter electrons at all; only its vibrations and defects do. The formula $\rho = m/(ne^2\tau)$ survives with these reinterpretations.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Resistance depends on length, area of cross-section, material and temperature: $R = \rho l/A$. {lvl=1}
2. $R \propto l$ because slices add in series; $R \propto 1/A$ because strands add in parallel. {lvl=1}
3. Resistivity $\rho$ (Ω m) belongs to the material: metals $10^{-8}$ to $10^{-6}$, insulators $10^{12}$ to $10^{17}$. {lvl=1}
4. Alloys have higher resistivity than their metals and do not oxidise easily, so they are used in heaters. {lvl=1}
5. Stretching at constant volume: $R \propto l^2 \propto 1/d^4$; small stretch gives $\Delta R/R = 2\Delta l/l$. {lvl=2}
6. Local Ohm's law: $\vec J = \sigma\vec E$, with $\sigma = 1/\rho$. {lvl=2}
7. $\rho = \rho_0(1 + \alpha\Delta T)$: $\alpha > 0$ for metals, tiny for alloys, negative for semiconductors. {lvl=3}
8. Non-uniform conductor: $R = \int\rho\,dx/A(x)$; tapered wire $R = \rho L/(\pi ab)$. {lvl=3}
9. Radial flow: spherical shell $\rho(b-a)/(4\pi ab)$, coaxial $\rho\ln(b/a)/(2\pi L)$. {lvl=4}
10. Free-electron model: $\rho = m/(ne^2\tau)$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Convert mm² to m² before using $R = \rho l/A$: $1\ \text{mm}^2 = 10^{-6}\ \text{m}^2$.
- Use the radius, not the diameter, in $\pi r^2$; or use $\pi d^2/4$.
- Resistivity does not change when a wire is cut, stretched or folded; only resistance does. {lvl=1}
- "Stretched to n times" means $n^2 R$, not $nR$: the area shrinks too. {lvl=2}
- Folding a wire in half gives $R/4$, not $R/2$: half the length and double the area. {lvl=2}
- In $R_T = R_0(1 + \alpha\Delta T)$, use $R_0$ at the reference temperature; for two arbitrary temperatures $R_2/R_1 = (1+\alpha\Delta T_2)/(1+\alpha\Delta T_1)$, not $1 + \alpha(T_2 - T_1)$, unless $\alpha\Delta T$ is small. {lvl=3}
- For a tapered wire the effective radius is the geometric mean $\sqrt{ab}$, not the average. {lvl=3}
- In radial problems, slice along equipotentials (shells), and use the area perpendicular to the current. {lvl=4}
:::
