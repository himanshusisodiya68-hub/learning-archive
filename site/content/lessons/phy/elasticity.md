---
title: Elasticity
summary: Why a wire thinner than a pencil lead can hold two people, how much it stretches, and what really happens before it snaps.
ncert: ["Class 11 Physics · Ch 8 Mechanical Properties of Solids (elastic behaviour, stress and strain, Hooke's law, stress-strain curve, elastic moduli, applications)"]
up_to: Olympiad
builds_on: [Newton's laws, Free body diagrams, Kinetic and potential energy, Pressure and buoyancy]
notes_prompt: Explain to a friend why a thick steel cable stretches less than a thin one under the same load, using nothing but atoms joined by tiny springs.
margin:
  - kind: history
    title: History
    text: "Robert Hooke announced in 1676 the Latin anagram ceiiinosssttuv, which he decoded in 1678 as 'ut tensio, sic vis': as the stretch, so the force. Thomas Young, who also did the double-slit experiment, gave his name to the stiffness constant in 1807 [Unverified dates]."
  - kind: tip
    title: Exam favourite
    text: "Extension is $FL/AY$: it grows with load and length, and falls with area and stiffness. Doubling a wire's diameter cuts the stretch to a quarter, because area goes as diameter squared."
  - kind: olympiad
    title: Olympiad link
    text: "A body's stiffness is not only its material: for a beam, stiffness grows as depth cubed. A ruler on edge is hundreds of times stiffer than flat, and an I-beam puts steel only where it counts."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 12 Equilibrium and Elasticity, §12-3 (indeterminate structures, elasticity)" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 2", ref: "Ch. 38 Elasticity [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 14 Some Mechanical Properties of Matter [Unverified]" }
cards:
  - { front: "Define stress and strain.", back: "Stress is force per unit area, $\\sigma = F/A$ (N/m² or Pa). Strain is fractional change in size, such as $\\Delta L/L$; it has no unit." }
  - { front: "Young's modulus and the extension formula?", back: "$Y = (F/A)/(\\Delta L/L)$, so $\\Delta L = FL/AY$. For steel $Y \\approx 2\\times10^{11}$ N/m²." }
  - { front: "Name the three kinds of modulus.", back: "Young's $Y$ (stretching), bulk $B$ (all-round squeeze, $B = -\\Delta P/(\\Delta V/V)$) and shear $G$ (sliding layers, stress over shear angle)." }
  - { front: "Why does a thicker wire stretch less?", back: "More atom chains share the load in parallel, so each is pulled less: extension goes as $1/A$, area as diameter squared." }
  - { front: "Elastic energy stored in a stretched wire?", back: "$U = \\tfrac12F\\,\\Delta L$, or $\\tfrac12\\times\\text{stress}\\times\\text{strain}\\times\\text{volume}$; per unit volume $\\sigma^2/2Y$." }
  - { front: "What is the difference between yield point and breaking point?", back: "Past the yield point the material stretches permanently (plastic flow) and does not return; the breaking point is where it fractures." }
core:
  idea: 'Solids are atoms joined by springs, so a load stretches them in proportion to the load. Dividing out the size of the sample gives the property of the material: stress (force per area) is proportional to strain (fractional deformation) for small loads, and the ratio is a modulus.'
  formulas:
    - tex: '\sigma = \dfrac{F}{A},\qquad \varepsilon = \dfrac{\Delta L}{L},\qquad Y = \dfrac{\sigma}{\varepsilon}\;\Rightarrow\;\Delta L = \dfrac{FL}{AY}'
      label: 'Stress, strain and Young''s modulus'
    - tex: 'B = -\dfrac{\Delta P}{\Delta V/V},\qquad G = \dfrac{\text{shear stress}}{\text{shear angle}}'
      label: 'Bulk and shear moduli'
    - tex: 'U = \tfrac12\,F\,\Delta L = \dfrac{\sigma^2}{2Y}\times\text{volume}'
      label: 'Elastic energy stored in a stretched wire'
  conditions:
    - 'Small loads, below the proportional limit, where stress is proportional to strain (Hooke''s law)'
    - 'The material goes back to its original size when the load is removed (below the elastic limit)'
    - 'Slow loading and uniform material, so the stress is the same across the whole cross-section'
    - 'The force acts at right angles to the area for tension and compression, and along the area for shear'
  sign: 'A tensile strain is positive and a compressive one negative. The bulk modulus has a minus sign so that B is positive: a rise in pressure shrinks the volume.'
outcomes:
  - 'Tell stress from strain and explain why each is needed'
  - 'Calculate the stretch, stress and strain of a wire under a load'
  - 'Read a stress-strain curve and name its limits'
  - 'Use bulk and shear moduli, and say why fluids have no shear modulus'
  - 'Find stored elastic energy and the stress in a rod that is not allowed to expand'
opener:
  story: |
    Take a steel wire as thick as a pencil lead, about 2 mm across, and two metres long. Hang yourself from it, if you weigh 60 kg. It will hold. If you could find a second person of the same weight to hang on as well, it still would, since a wire like that does not break until about 130 kg. And all that time, with your whole weight on it, the wire is only about **1.9 mm longer**, less than the width of the wire itself.

    Meanwhile a rubber band as thin as a noodle stretches to double its length under a pull you can barely feel.

    Both are made of atoms. So **what decides how much a wire stretches, and what decides when it finally gives way?** The answer is a nice piece of detective work: it starts by asking why a thick wire is stiffer than a thin one, and ends with how engineers build bridges and lifts.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A steel wire hanging from a ceiling carrying a load, with an enlarged view of atoms joined by springs"><rect x="40" y="20" width="110" height="8" rx="2" style="fill:var(--muted)"/><path d="M95 28 L95 150" style="stroke:var(--ink);stroke-width:3;fill:none"/><rect x="72" y="150" width="46" height="34" rx="5" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="78" y="172" style="font-size:12px;fill:var(--ink)">60 kg</text><text x="40" y="206" style="font-size:11px;fill:var(--muted)">stretch: 1.9 mm in 2 m</text><circle cx="212" cy="50" r="9" style="fill:var(--chem)"/><circle cx="212" cy="104" r="9" style="fill:var(--chem)"/><circle cx="212" cy="158" r="9" style="fill:var(--chem)"/><path d="M212 59 l-7 6 l14 8 l-14 8 l14 8 l-14 8 l7 5" style="stroke:var(--ink);stroke-width:1.6;fill:none"/><path d="M212 113 l-7 6 l14 8 l-14 8 l14 8 l-14 8 l7 5" style="stroke:var(--ink);stroke-width:1.6;fill:none"/><circle cx="264" cy="50" r="9" style="fill:var(--chem)"/><circle cx="264" cy="104" r="9" style="fill:var(--chem)"/><circle cx="264" cy="158" r="9" style="fill:var(--chem)"/><path d="M264 59 l-7 6 l14 8 l-14 8 l14 8 l-14 8 l7 5" style="stroke:var(--ink);stroke-width:1.6;fill:none"/><path d="M264 113 l-7 6 l14 8 l-14 8 l14 8 l-14 8 l7 5" style="stroke:var(--ink);stroke-width:1.6;fill:none"/><text x="176" y="206" style="font-size:11px;fill:var(--muted)">zoom: atoms and springs</text><path d="M150 100 L186 86" style="stroke:var(--muted);stroke-dasharray:3 4;fill:none"/></svg>'
life:
  - 'Lift cables, crane ropes and the steel cables of suspension bridges are designed so that the stress stays far below the breaking value; engineers call the ratio the safety factor.'
  - 'A cricket bat, a trampoline and a bow all store energy elastically and give it back; bungee cords and rubber slings do it with a huge strain.'
  - 'Railway tracks are laid with small gaps (or welded under controlled temperature) because a steel rail that cannot expand builds up enormous stress in summer.'
  - 'The steel I-beams in buildings and flyovers have their shape, wide flanges joined by a thin web, because stiffness against bending grows as depth cubed.'
  - 'Deep-sea submarines and the water at the bottom of the ocean are squeezed by huge pressures; water at 4 km down is compressed by about 2%.'
models:
  - name: 'Per-unit measures reveal the material'
    text: 'Stress is force per area, strain is stretch per length. Dividing out the size of the object leaves a number that belongs to the material alone. The same trick is used when comparing cities by income per person or companies by profit per share: scale out the size to see the underlying quality.'
  - name: 'Parallel adds strength, series adds give'
    text: 'Many chains side by side share the load, so they are stiffer; many links in a row add up their stretch, so they give more. Teams, power supplies and budgets work the same way: parallel paths add capacity, serial steps add delay.'
  - name: 'The safe working region'
    text: 'Most systems are linear and forgiving up to a limit and then change character: past the elastic limit a wire does not come back. Bridges, bank balances and a person''s patience share the pattern: know where the limit is and stay well inside it.'
links:
  - leaf: 'phy/pressure-and-buoyancy'
    name: 'Pressure and buoyancy'
    same: 'Pressure is stress: force per area. The bulk modulus is the stiffness against it, and a fluid pushes at right angles on any surface it touches, just as a solid does under compression.'
    differs: 'A solid can also carry a shear stress and keep its shape; a fluid cannot, so it takes the shape of its container.'
  - leaf: 'phy/kinetic-and-potential-energy'
    name: 'Kinetic and potential energy'
    same: 'A stretched wire stores energy $\tfrac12 F\Delta L$, exactly like a stretched spring stores $\tfrac12kx^2$; the wire is a spring with $k = YA/L$.'
    differs: 'A wire''s stored energy is spread through its whole volume as energy per unit volume, $\sigma^2/2Y$, which is a property of the material.'
next:
  q: 'A fast wind can lift a roof off a house, though air pushes on both sides. How can moving air push less than still air?'
  leaf: 'phy/bernoullis-principle'
  name: 'Bernoulli''s principle'
symbols:
  - s: 'F'
    means: 'the load or pulling force (N)'
  - s: 'A'
    means: 'cross-section area the force acts on (m^2)'
  - s: '\sigma'
    means: 'stress, force per unit area, F/A (N/m^2 = Pa)'
  - s: 'L'
    means: 'original length (m)'
  - s: '\Delta L'
    means: 'change in length, the extension (m)'
  - s: '\varepsilon'
    means: 'strain, the fractional change in size, ΔL/L (no unit)'
  - s: 'Y'
    means: 'Young''s modulus, stress divided by strain, for stretching (N/m^2)'
  - s: 'B'
    means: 'bulk modulus, for squeezing from all sides (N/m^2)'
  - s: 'G'
    means: 'shear modulus, for sliding layers (N/m^2)'
  - s: '\Delta P'
    means: 'change in pressure (Pa)'
  - s: '\Delta V'
    means: 'change in volume (m^3)'
  - s: '\theta'
    means: 'shear angle, how far the layers have slid sideways, in radians'
  - s: 'U'
    means: 'elastic energy stored (J)'
  - s: '\rho'
    means: 'density of the material (kg/m^3)'
  - s: '\alpha'
    means: 'coefficient of linear expansion, fractional growth per degree (per °C)'
  - s: '\Delta T'
    means: 'rise in temperature (°C)'
  - s: 'b, d'
    means: 'width and depth of a rectangular beam (m)'
---

:::hook
q: Two wires are made of the same steel and have the same length. The second one has twice the diameter of the first. Under the same load, the second one stretches
options: ["half as much", "a quarter as much", "the same as the first"]
answer: 1
right: Right. Doubling the diameter gives four times the area, so four times as many atom chains share the load, and each stretches a quarter as much.
wrong: The load is shared between all the atomic chains side by side. Doubling the diameter multiplies the area by what, and so the number of chains?
:::

## Atoms joined by springs {lvl=1 id=s-springs label="Class 9"}

Press a lump of putty and it stays dented. Press a steel ball and it springs back. The difference is the first thing to understand: some bodies are **elastic**, meaning they regain their shape when the push is removed, and others are **plastic**, meaning they stay deformed. Steel is elastic for small loads and becomes plastic if you overdo it.

Why does a solid push back at all? Because its atoms sit at fixed spacings, held there by electric forces. Pull two neighbours apart and the force between them pulls back; push them closer and it pushes back. Close to the resting spacing, that force is proportional to the change of spacing, just like a spring. So picture a solid as a huge lattice of little balls joined by springs.

Now stretch a wire. Every atomic spring lengthens a tiny bit and all together they add up to the visible stretch. For small loads, **double the pull, double the stretch**: this is **Hooke's law**. Past a limit the atoms slide past their neighbours and the wire does not come back; that limit is the **elastic limit**.

:::qc lvl=1
q: A steel wire stretches by 1 mm under a load of 10 N, and goes back when the load is removed. What stretch would you expect for 20 N?
options: ["0.5 mm", "2 mm", "Cannot say: it depends on the wire"]
answer: 1
right: Right, provided 20 N is still below the elastic limit. Hooke's law: stretch proportional to load.
wrong: Hooke's law says doubling the load doubles the extension, while the wire is in its elastic region.
:::

## Stress and strain: dividing out the size {lvl=2 id=s-stress label="Class 11"}

A thick, long wire and a thin, short one are made of the same steel. How can we compare the steel itself, rather than the two wires? We need to strip away the size. Two simple observations show how.

First, **a thicker wire shares the load between more atomic chains side by side** (springs in parallel). Twice the area, twice as many chains, so each chain carries half the pull. So what matters is the force on each unit of area, which we call **stress**: $\sigma = F/A$, in newtons per square metre (pascal, Pa).

Second, **a longer wire has more atomic springs in a row** (springs in series), and each one stretches. Twice the length, twice the stretch. So what matters is the stretch per unit length, which we call **strain**: $\varepsilon = \Delta L/L$. It is a ratio of two lengths, so it has no unit.

Take the wire from the opening: 2.0 mm across, so $A = \pi(1.0\times10^{-3})^2 = 3.14\times10^{-6}$ m$^2$, and a load of $60\times9.8 = 588$ N. The stress is $588/3.14\times10^{-6} = 1.9\times10^{8}$ N/m$^2$. Ordinary steel breaks near $4\times10^8$ N/m$^2$, so this wire is carrying about half of its breaking stress, which is why two people could just about hang on it.

:::figure caption="Left: two chains side by side (parallel) share the load, so each stretches less. Right: two links in a row (series) add their stretches. This is why stress uses area and strain uses length."
<svg viewBox="0 0 360 200" role="img" aria-label="Springs in parallel share the load, springs in series add up their stretch">
<line class="ln" x1="30" y1="20" x2="120" y2="20"/>
<path class="ln" d="M50 20 l0 14 l-6 6 l12 8 l-12 8 l12 8 l-12 8 l6 6 l0 10"/>
<path class="ln" d="M100 20 l0 14 l-6 6 l12 8 l-12 8 l12 8 l-12 8 l6 6 l0 10"/>
<line class="ln" x1="40" y1="116" x2="110" y2="116"/>
<line class="ray" x1="75" y1="116" x2="75" y2="160" style="stroke-width:3"/>
<text x="82" y="152" style="font-size:11px;fill:var(--muted)">F</text>
<text x="26" y="188" style="font-size:11px;fill:var(--muted)">parallel: F/2 each</text>
<line class="ln" x1="220" y1="20" x2="290" y2="20"/>
<path class="ln" d="M255 20 l0 10 l-6 5 l12 7 l-12 7 l12 7 l-12 7 l6 5 l0 6 l-6 5 l12 7 l-12 7 l12 7 l-12 7 l6 5 l0 8"/>
<circle class="obj" cx="255" cy="122" r="4"/>
<line class="ray" x1="255" y1="126" x2="255" y2="166" style="stroke-width:3"/>
<text x="262" y="158" style="font-size:11px;fill:var(--muted)">F</text>
<text x="204" y="188" style="font-size:11px;fill:var(--muted)">series: stretches add</text>
</svg>
:::

## Young's modulus and the stretch formula {lvl=2 id=s-young label="Class 11"}

For small loads, stress is proportional to strain. The constant is **Young's modulus**, the stiffness of the material itself:

:::law caption="Stretching or compressing a rod or wire along its length, below the elastic limit."
$$Y = \frac{\sigma}{\varepsilon} = \frac{F/A}{\Delta L/L}\qquad\Longrightarrow\qquad \Delta L = \frac{F\,L}{A\,Y}$$
:::

Read the second form as a sentence: "the stretch grows with the pull and the length, and shrinks with the area and with the stiffness of the material". Continuing with our wire, $\Delta L = \dfrac{588\times2.0}{3.14\times10^{-6}\times2.0\times10^{11}} = 1.9\times10^{-3}$ m, the 1.9 mm of the opening. Typical values of $Y$ (approximate, from standard tables):

| Material | Steel | Copper | Aluminium | Glass | Bone | Rubber |
|---|---|---|---|---|---|---|
| $Y$ in N/m² | $2\times10^{11}$ | $1.1\times10^{11}$ | $7\times10^{10}$ | $5$ to $7\times10^{10}$ | about $10^{10}$ | about $10^{6}$ to $10^{7}$ |

Notice that stiffness is not "stretchiness". Rubber stretches a lot, so it has a *small* $Y$; physicists therefore call steel the more elastic material, which is the opposite of the everyday use of the word.

A wire is therefore a spring: $F = (YA/L)\,\Delta L$, so its spring constant is $k = YA/L$. Our steel wire has $k = 3.1\times10^5$ N/m. Hang a mass on it and it oscillates up and down very quickly, like a spring much stiffer than anything in a shop.

:::qc
q: Wire A and wire B are made of the same material. B has twice the length and twice the radius of A. Under the same load, how does B's stretch compare with A's?
options: ["The same", "Half of A's", "A quarter of A's"]
answer: 1
right: Right. Twice the length doubles the stretch; twice the radius makes four times the area and divides it by four. Together, 2 × 1/4 = 1/2.
wrong: Use ΔL = FL/AY. L doubles, and A grows as the square of the radius. What is the net factor?
:::

## What happens when you keep pulling {lvl=2 id=s-curve label="Class 11"}

Load a wire slowly, measuring stress and strain, and you get a curve with a story.

:::figure caption="Stress against strain for a ductile metal such as mild steel. Up to P the line is straight (Hooke's law); up to E the wire still returns to its original length; beyond Y it flows plastically; at U it is strongest; at F it breaks. The curve is not to scale."
<svg viewBox="0 0 360 230" role="img" aria-label="Stress-strain curve showing proportional limit, elastic limit, yield point, ultimate strength and fracture">
<line class="gr" x1="50" y1="200" x2="340" y2="200"/>
<line class="gr" x1="50" y1="200" x2="50" y2="20"/>
<path class="ln" d="M50 200 L110 110 Q120 98 130 94 Q150 92 170 96 Q220 78 260 50 Q280 40 300 52 L320 80"/>
<circle class="obj" cx="110" cy="110" r="3.5"/><circle class="obj" cx="130" cy="94" r="3.5"/><circle class="obj" cx="260" cy="50" r="3.5"/><circle class="obj" cx="320" cy="80" r="3.5"/>
<line class="faint" x1="130" y1="94" x2="130" y2="200"/>
<text x="92" y="132" style="font-size:11px;fill:var(--ink)">P</text>
<text x="118" y="86" style="font-size:11px;fill:var(--ink)">E, Y</text>
<text x="256" y="42" style="font-size:11px;fill:var(--ink)">U</text>
<text x="324" y="92" style="font-size:11px;fill:var(--ink)">F</text>
<text x="52" y="16" style="font-size:10px;fill:var(--muted)">stress</text>
<text x="296" y="216" style="font-size:10px;fill:var(--muted)">strain</text>
<text x="136" y="188" style="font-size:10px;fill:var(--muted)">elastic region</text>
<text x="196" y="142" style="font-size:10px;fill:var(--muted)">plastic region</text>
</svg>
:::

- **Straight line** (to P, the proportional limit): Hooke's law, and the slope is $Y$.
- **Elastic limit**: remove the load and the wire still returns to its exact length. Just beyond it, a permanent stretch remains.
- **Yield point**: the wire flows like putty; strain grows quickly for little extra stress. (Many textbooks show elastic limit and yield point close together.)
- **Ultimate strength (U)**: the highest stress the material can carry. After this the wire thins at one spot (necking) and breaks at F.

Materials that stretch a lot between yield and fracture, such as copper and gold, are **ductile**; they can be drawn into wires. Those that break soon after the elastic region, such as glass, cast iron and chalk, are **brittle**. Structures are designed so that the working stress is a fraction of the yield stress, often a third or less. Rubber is a special case: it does not obey Hooke's law, stretches enormously, and returns along a *different* curve when released. The area between the two curves is energy lost as heat, which is why rubber shock absorbers and tyres warm up.

:::qc
q: A wire is stretched past its yield point and then the load is removed. The wire
options: ["returns to its original length", "stays longer than before", "becomes shorter than before"]
answer: 1
right: Right. A permanent (plastic) stretch remains. The wire has not been broken, but it has been changed.
wrong: Beyond the elastic limit the atoms have slipped past their neighbours and cannot go back. What does that leave?
:::

## Squeezing and sliding {lvl=2 id=s-other label="Class 11"}

Stretching is one way to deform a solid. There are two more.

**Squeezing from all sides** changes the volume. The pressure rises by $\Delta P$ and the volume shrinks by $\Delta V$. The stiffness against this is the **bulk modulus** $B$:

$$B = -\frac{\Delta P}{\Delta V/V}.$$

The minus sign is there because $\Delta V$ is negative when $\Delta P$ is positive, so $B$ comes out positive. Read it as: "how much extra pressure does it take to shrink the volume by one part in a hundred?". Solids and liquids are hard to compress: for water $B = 2.2\times10^{9}$ N/m$^2$. At 4 km depth in the ocean the pressure rise is about $\rho gh = 1000\times10\times4000 = 4\times10^{7}$ Pa, so the fractional compression is $4\times10^7/2.2\times10^9 = 1.8\%$. Water at the bottom of the ocean is only slightly denser than at the top. The reciprocal $1/B$ is the **compressibility**. Gases have a bulk modulus too, but a tiny one: you can easily squeeze air.

**Sliding the layers** is called shear. Fix the bottom face of a block and push the top sideways with a force $F$ along it; the block leans over by a small angle $\theta$. The shear stress is $F/A$ (force along the face over its area) and the shear strain is the angle, so the **shear modulus** is $G = \dfrac{F/A}{\theta}$. For a rivet of diameter 10 mm carrying 6.0 kN across it, the shear stress is $6000/(\pi\times0.005^2) = 7.6\times10^{7}$ N/m$^2$, and with $G = 8\times10^{10}$ N/m$^2$ for steel the shear angle is $9.5\times10^{-4}$ rad.

Liquids and gases cannot keep a shear: they flow instead. Their shear modulus is zero. That is the real difference between a solid and a fluid.

:::note title="Which modulus for which job?" tone=info
Stretch or compress a rod: Young's modulus. Squeeze something uniformly from every side (a submarine, a rock deep in the Earth): bulk modulus. Slide or twist (a rivet, a shaft in torsion): shear modulus. A real deformation is often a mix; for example, twisting a wire is a shear.
:::

## Energy stored in a stretched wire {lvl=3 id=s-energy label="JEE"}

To stretch a wire you must pull harder and harder, from zero up to $F$ as the extension grows from zero to $\Delta L$. So the work you do is the *average* force times the extension:

$$U = \tfrac12F\,\Delta L.$$

For the wire with a 60 kg load, $U = \tfrac12\times588\times1.9\times10^{-3} = 0.55$ J. Using $F = \sigma A$ and $\Delta L = \varepsilon L$, and noting that $AL$ is the volume, you can write it as $U = \tfrac12\sigma\varepsilon\times\text{volume}$, so the **energy per unit volume** is

:::eq caption="Elastic energy density; it belongs to the material, not to the shape."
$$u = \tfrac12\sigma\varepsilon = \frac{\sigma^2}{2Y}$$
:::

At a stress of $2\times10^8$ N/m$^2$, steel stores $(2\times10^8)^2/(2\times2\times10^{11}) = 10^5$ J per cubic metre. For a given stress, a softer material (smaller $Y$) stores *more* energy per volume. That is why catapults and bows use rubber and springy wood, and why springs are made of steel that can bear a high stress without yielding.

Three applications of the same ideas:

:::worked title="A wire hanging by its own weight"
At a point $x$ above the free bottom end, the wire carries the weight of the part below it, so the stress is $\rho g x$. A small piece $dx$ stretches by $(\rho g x/Y)\,dx$. Add them up from $0$ to $L$: $\Delta L = \dfrac{\rho gL^2}{2Y}$. The factor $\tfrac12$ appears because the average load along the wire is half the load at the top. The stress at the top, $\rho g L$, does not depend on the area at all, so the longest wire that can hang without breaking is $L = \sigma_{\text{break}}/\rho g$: for copper this is about 2.9 km, whatever the thickness.
:::

:::worked title="A rod that cannot expand"
Heat a steel rod by 50 °C and, if free, it would expand by a strain $\alpha\,\Delta T = 1.2\times10^{-5}\times50 = 6\times10^{-4}$. If two rigid walls forbid this, they squeeze it back by the same strain, so the stress is $\sigma = Y\alpha\,\Delta T = 2\times10^{11}\times6\times10^{-4} = 1.2\times10^{8}$ N/m$^2$ (120 MPa), whatever the length or thickness. That is why rails have expansion gaps and bridges have expansion joints.
:::

:::worked title="Parallel wires share by stiffness"
Two rods of the same length, joined side by side and stretched together, stretch by the same amount. From $F = YA\,\Delta L/L$, the load splits in the ratio $Y_1A_1 : Y_2A_2$. In series, with one wire hanging below the other, the *load* is the same in both but the *stretches* add up: $\Delta L = FL_1/A_1Y_1 + FL_2/A_2Y_2$.
:::

## A spring in every bond {lvl=3 id=s-atoms label="JEE"}

Can we estimate the spring constant of one atomic bond from $Y$? Imagine each atom taking up a square of side $r_0$, the spacing between atoms, in the cross-section of the wire. A stretch of one bond by $\delta$ is a strain $\delta/r_0$; the force per bond $k\delta$ spread over an area $r_0^2$ gives a stress $k\delta/r_0^2$. Dividing:

$$Y \approx \frac{k}{r_0}\quad\Rightarrow\quad k \approx Yr_0.$$

For steel, $r_0 \approx 2.5\times10^{-10}$ m, so $k \approx 2\times10^{11}\times2.5\times10^{-10} = 50$ N/m. [Inference: an order-of-magnitude estimate, treating the atoms as a simple cubic lattice.] That is the stiffness of a rather firm toy spring, from a bond a few ten-billionths of a metre long. It also explains why strains stay tiny: pull a bond by 10% of its length and it breaks, which suggests that steel should fail at around $Y/10 \approx 2\times10^{10}$ N/m$^2$. Real steel breaks at 50 times lower stress because of defects (dislocations), which is why thin crystal whiskers and carbon fibres, nearly free of defects, are so much stronger than bulk metal.

When a wire is stretched it also gets thinner, by a fixed fraction of its stretch. That fraction (lateral strain over longitudinal strain) is called **Poisson's ratio**; it is about 0.3 for metals and close to 0.5 for rubber, whose volume stays nearly constant.

:::qc lvl=3
q: A steel rod is heated while held between two rigid walls. If the rod has twice the cross-section area, the stress that builds up is
options: ["twice as large", "the same", "half as large"]
answer: 1
right: Right. The stress is Yα ΔT, which depends only on the material and the temperature rise, and not on the size. The force is twice as large because the area is, but the stress is the same.
wrong: Stress is force per area. Doubling the area doubles the force the walls must supply. What does that do to the force per area?
:::

## Stiffness of a beam: why depth matters {lvl=4 id=s-beam label="Olympiad"}

Why is a ruler easy to bend flat, but hard to bend on its edge, though it is the same steel? Think about what bending does: the top layer is stretched and the bottom layer compressed, and the layer in the middle (the neutral layer) stays the same length. The strain of a layer is proportional to its distance from the middle. The layers far from the middle are strained most, so they carry the most stress and, being far from the middle, give the biggest twisting resistance. The material close to the middle does very little.

A careful sum (not done here) shows that for a rectangular beam of width $b$ and depth $d$ the resistance to bending is proportional to $bd^3$. One standard result, quoted from memory [Unverified]: a beam fixed at one end, length $L$, with a load $F$ on the free end, droops by

$$\delta = \frac{4FL^3}{Y\,b\,d^3}.$$

Read it as: "droop grows as the cube of the length and falls as the cube of the depth". A ruler with a 25 mm × 1 mm cross-section: flat, the depth is 1 mm and the width 25 mm, so $bd^3 = 25$; on edge, the depth is 25 mm and the width 1 mm, so $bd^3 = 15625$. So the ruler on edge is $625 = (25/1)^2$ times stiffer, for exactly the same amount of steel.

Engineers use this everywhere. An **I-beam** puts nearly all its steel in two wide flanges at the top and bottom, far from the middle, joined by a thin web. Hollow tubes, such as bicycle frames and bones (hollow, with marrow inside), are nearly as stiff as solid rods of the same outer size but much lighter, because the middle carries so little stress. A beam twice as deep is eight times stiffer for only twice the material: the cheap way to stiffness is depth.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A solid is a lattice of atoms joined by springs: it springs back (elastic) up to a limit and then deforms permanently (plastic). {lvl=1}
2. Stress is force per area, strain is fractional change in size; dividing out the size leaves the property of the material. {lvl=2}
3. Hooke's law: stress is proportional to strain below the elastic limit, and the ratio is a modulus: $Y = \sigma/\varepsilon$, so $\Delta L = FL/AY$. {lvl=2}
4. The stress-strain curve has a straight part, an elastic limit, a yield point, an ultimate strength and a breaking point; ductile and brittle materials differ after the elastic region. {lvl=2}
5. Bulk modulus resists squeezing, shear modulus resists sliding; fluids have no shear modulus. {lvl=2}
6. Stored energy is $\tfrac12F\,\Delta L = \sigma^2/2Y$ per unit volume; a wire is a spring of constant $YA/L$. {lvl=3}
7. A rod that cannot expand develops stress $Y\alpha\,\Delta T$; a beam's stiffness grows as depth cubed. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Strain has no unit; stress, $Y$, $B$ and $G$ all have the unit N/m² (pascal). {lvl=2}
- Use the area of the *cross-section* in $\sigma = F/A$: for a wire, $A = \pi d^2/4$, so doubling the diameter quadruples the area. Watch for mm² versus m². {lvl=2}
- A large $Y$ means stiff, not stretchy: steel is "more elastic" than rubber. {lvl=2}
- Hooke's law fails beyond the proportional limit; the stored-energy and modulus formulas assume the elastic region. {lvl=2}
- Energy stored is $\tfrac12F\Delta L$, not $F\Delta L$: the force builds up from zero. {lvl=3}
- Stress from blocked thermal expansion does not depend on the length or the area. {lvl=3}
:::
