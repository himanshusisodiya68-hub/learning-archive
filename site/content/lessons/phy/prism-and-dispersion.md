---
title: Prism and dispersion
summary: Refraction through a triangular prism, the prism formula and minimum deviation, splitting white light into colours, dispersive power, achromatic prism pairs, and the geometry of the rainbow.
ncert: ["Class 10 Science · Ch 10 The Human Eye and the Colourful World (§10.3–10.4)", "Class 12 Physics · Ch 9 Ray Optics (§9.6)"]
up_to: Olympiad
builds_on: [Refraction and Snell's law, Total internal reflection, Angles of a triangle]
notes_prompt: Explain to a younger student why a prism splits white light but a flat window pane does not.
margin:
  - kind: history
    title: History
    text: In 1666 Newton passed sunlight through a prism, then sent one colour through a second prism and found it could not be split further. He concluded that white light is a mixture of colours, not something the prism adds colour to.
  - kind: tip
    title: Board favourite
    text: A prism bends light towards its base, and violet is bent the most, red the least.
  - kind: olympiad
    title: Olympiad link
    text: The primary rainbow sits about 42° from the point directly opposite the Sun because rays leaving a raindrop crowd together at minimum deviation.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 18 Geometrical Optics (prism) and Ch. 20 Dispersion and Spectra" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.1 Photometry and geometrical optics" }
cards:
  - { front: "Write the prism relations between i, e, r₁, r₂, A and δ.", back: "$r_1 + r_2 = A$ and $\\delta = i + e - A$." }
  - { front: "Refractive index of a prism from its minimum deviation?", back: "$n = \\dfrac{\\sin\\frac{A + \\delta_m}{2}}{\\sin\\frac{A}{2}}$; at minimum deviation $i = e$ and $r_1 = r_2 = A/2$." }
  - { front: "Deviation by a thin prism?", back: "$\\delta = (n - 1)A$." }
  - { front: "What is dispersion and why does it happen?", back: "The splitting of white light into its colours. The refractive index depends on wavelength, so each colour bends by a different amount; violet bends most." }
  - { front: "Define dispersive power.", back: "$\\omega = \\dfrac{n_V - n_R}{n_Y - 1}$, the angular dispersion divided by the mean deviation." }
  - { front: "How is a rainbow formed?", back: "Sunlight is refracted into raindrops, dispersed, reflected once inside each drop and refracted out. The bow appears about 42° from the point opposite the Sun, red outside and violet inside." }
---

:::hook
q: White light enters a glass prism. Which colour comes out bent the most?
options: ["Red", "Green", "Violet"]
answer: 2
right: Right. Glass has a slightly higher refractive index for violet light, so violet is deviated most and red least.
wrong: Not quite. Each colour sees a slightly different refractive index; the shortest wavelength, violet, sees the largest.
:::

## Refraction through a prism {lvl=1 id=s-prism}

A **prism** is a block of glass with two plane faces inclined to each other. The angle between them is the **angle of the prism**, $A$. A ray entering one face refracts towards the normal, crosses the prism, and refracts away from the normal as it leaves through the other face. Unlike a rectangular slab, the two faces are not parallel, so the two bends add instead of cancelling: the emergent ray is turned towards the **base** of the prism. The angle between the incident ray extended and the emergent ray is the **angle of deviation**, $\delta$.

Set the angle of incidence, the prism angle and the refractive index below and watch the deviation.

:::widget name=prism-sim
:::

## Dispersion: white light is many colours {lvl=1 id=s-dispersion}

Send a narrow beam of white light into a prism and a band of colours comes out: **violet, indigo, blue, green, yellow, orange, red** (VIBGYOR). This band is a **spectrum**, and the splitting is **dispersion**. It happens because the refractive index of glass is slightly different for each colour, highest for violet and lowest for red, so each colour is deviated by a different angle.

:::figure caption="Dispersion: violet is deviated most, red least."
<svg viewBox="0 0 360 200" role="img" aria-label="White light dispersed into a spectrum by a prism">
<path d="M180 30 L110 170 L250 170Z" class="m2" style="stroke:var(--ink);stroke-width:1.4"/>
<line class="pen" x1="10" y1="130" x2="146" y2="100" style="stroke:var(--ink);stroke-width:3"/>
<line x1="146" y1="100" x2="214" y2="104" style="stroke:#b23a3a;stroke-width:2"/><line x1="214" y1="104" x2="350" y2="132" style="stroke:#b23a3a;stroke-width:2.5"/>
<line x1="146" y1="100" x2="214" y2="110" style="stroke:#d08a1e;stroke-width:2"/><line x1="214" y1="110" x2="350" y2="148" style="stroke:#d08a1e;stroke-width:2.5"/>
<line x1="146" y1="100" x2="214" y2="116" style="stroke:#3f8f3a;stroke-width:2"/><line x1="214" y1="116" x2="350" y2="164" style="stroke:#3f8f3a;stroke-width:2.5"/>
<line x1="146" y1="100" x2="214" y2="122" style="stroke:#3a5fc0;stroke-width:2"/><line x1="214" y1="122" x2="350" y2="180" style="stroke:#3a5fc0;stroke-width:2.5"/>
<line x1="146" y1="100" x2="214" y2="127" style="stroke:#7a3fb0;stroke-width:2"/><line x1="214" y1="127" x2="350" y2="194" style="stroke:#7a3fb0;stroke-width:2.5"/>
<text x="14" y="122">white light</text><text x="312" y="126">red</text><text x="300" y="196">violet</text>
</svg>
:::

Newton showed the colours were already in the white light. A second, identical prism placed upside down after the first recombines the spectrum into white light, and a single colour picked out by a slit passes through another prism without splitting further.

**The rainbow** is nature's spectrum. After rain, sunlight enters spherical raindrops, refracts and disperses, reflects once off the back of each drop, and refracts out again. You see a rainbow only with the Sun **behind** you; red is on the outside of the bow and violet on the inside.

:::qc
q: Where must the Sun be for you to see a rainbow?
options: ["In front of you, low in the sky", "Behind you", "Directly overhead"]
answer: 1
right: Right. Raindrops send the light back towards the Sun's side at about 42°, so you face the rain with the Sun at your back.
wrong: Inside each drop the light reflects off the back surface, so it returns roughly towards the Sun's side. Where must you stand?
:::

## The prism formula {lvl=2 id=s-formula label="Class 12"}

Follow the ray through a prism of angle $A$: incidence $i$, refraction $r_1$ at the first face, incidence $r_2$ at the second face from inside, emergence $e$. The two normals and the prism faces form a quadrilateral, which gives

$$r_1 + r_2 = A, \qquad \delta = (i - r_1) + (e - r_2) = i + e - A.$$

As $i$ increases from small values, $\delta$ first falls and then rises: it has a **minimum**, $\delta_m$. By reversibility the minimum must be symmetric, with $i = e$ and $r_1 = r_2 = A/2$. Then $i = (A + \delta_m)/2$ and Snell's law at the first face gives

:::law caption="Measure A and the minimum deviation δₘ, and this gives the refractive index."
$$n = \frac{\sin\dfrac{A + \delta_m}{2}}{\sin\dfrac{A}{2}}$$
:::

This is how refractive indices are measured precisely in the lab, with a spectrometer.

**Thin prisms.** For small $A$ and small angles, $\sin x \approx x$ and the formula reduces to

$$\delta = (n - 1)A,$$

independent of the angle of incidence.

## Angular dispersion and dispersive power {lvl=3 id=s-power label="JEE"}

For a thin prism, violet and red are deviated by $(n_V - 1)A$ and $(n_R - 1)A$, so the spectrum spreads over an angle

$$\theta = \delta_V - \delta_R = (n_V - n_R)A.$$

Dividing by the deviation of the middle (yellow) light gives the **dispersive power**, a property of the glass alone:

$$\omega = \frac{\delta_V - \delta_R}{\delta_Y} = \frac{n_V - n_R}{n_Y - 1}.$$

Flint glass has roughly twice the dispersive power of crown glass. Combining the two allows two useful tricks:

- **Deviation without dispersion** (achromatic pair): a crown prism and an inverted flint prism with $(n_V - n_R)_1A_1 = (n_V - n_R)_2A_2$ cancel the spread of colours but still bend the light. This is the prism version of the achromatic doublet lens.
- **Dispersion without deviation** (direct-vision prism): choose the angles so the deviations cancel, $(n_1 - 1)A_1 = (n_2 - 1)A_2$, and a spectrum emerges along the original direction. Pocket spectroscopes work this way.

## Limits: when no light gets through {lvl=3 id=s-limits label="JEE Advanced"}

At the second face the ray meets the glass–air boundary from inside at $r_2 = A - r_1$. If $r_2$ exceeds the critical angle $\theta_c$, the light is totally reflected and nothing emerges (NCERT's Exercise 9.21 asks exactly when this starts). Since $r_1 \le \theta_c$ for any incidence, light can emerge for some angle of incidence only if

$$A \le 2\theta_c.$$

For glass with $n = 1.5$ that means $A < 83.6^\circ$. A prism with a larger angle traps every ray entering its first face.

## The geometry of the rainbow {lvl=4 id=s-rainbow label="Olympiad"}

A ray entering a spherical drop at incidence $i$ refracts to $r$ ($\sin i = n\sin r$), reflects $k$ times inside, and leaves. Its total deviation is

$$D_k = 2(i - r) + k(180^\circ - 2r).$$

For the primary bow ($k = 1$), $D_1 = 180^\circ + 2i - 4r$. As $i$ varies across the drop, $D_1$ has a minimum where $dD_1/di = 0$. Using $\cos i\,di = n\cos r\,dr$, this happens when

$$\cos^2 i = \frac{n^2 - 1}{3}.$$

For water ($n = 1.333$), $i \approx 59.4^\circ$, $r \approx 40.2^\circ$ and $D_{1,\min} \approx 137.9^\circ$. Rays bunch up near this minimum deviation, so the drop sends a concentrated cone of light at $180^\circ - 137.9^\circ \approx 42^\circ$ from the point directly opposite the Sun: the primary bow. Since $n$ is a little larger for violet, violet appears at about 40° and red at 42°, so red is outside.

The **secondary bow** comes from two internal reflections: $\cos^2 i = (n^2 - 1)/8$ gives a cone at about 51°, fainter and with the colours reversed. Between the two bows almost no light is sent back towards you, and the sky there looks darker: **Alexander's dark band**.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A prism deviates light towards its base; the deviation is the angle between incident and emergent rays.
2. Dispersion: the refractive index depends on colour, so white light splits into VIBGYOR, violet deviated most.
3. A rainbow forms by refraction, dispersion and one internal reflection in raindrops, with the Sun behind you.
4. $r_1 + r_2 = A$ and $\delta = i + e - A$; at minimum deviation $n = \sin\frac{A + \delta_m}{2}/\sin\frac{A}{2}$. {lvl=2}
5. Thin prism: $\delta = (n - 1)A$. {lvl=2}
6. Dispersive power $\omega = (n_V - n_R)/(n_Y - 1)$; crown and flint prisms can cancel either dispersion or deviation. {lvl=3}
7. Light can emerge from a prism only if $A \le 2\theta_c$. {lvl=3}
8. Primary rainbow at about 42° (minimum deviation, $\cos^2 i = (n^2 - 1)/3$), secondary at about 51°. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Deviation is measured between the incident ray extended and the emergent ray, not between the ray and the prism face.
- Violet has the larger refractive index, so it is deviated more but travels more slowly in glass.
- Use the minimum-deviation formula only for the symmetric path ($i = e$). {lvl=2}
- $\delta = (n - 1)A$ holds only for thin prisms and small angles. {lvl=2}
- For "no emergent ray" questions, compare $r_2 = A - r_1$ with the critical angle. {lvl=3}
:::
