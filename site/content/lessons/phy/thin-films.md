---
title: Thin films
summary: Colours of soap bubbles and oil slicks. Interference by division of amplitude, the half-wave phase change on reflection, the thin-film conditions, wedge fringes, Newton's rings, anti-reflection coatings and multilayer mirrors.
ncert: []
up_to: Olympiad
builds_on: [Interference and Young's experiment, Refraction and Snell's law]
notes_prompt: Explain why a soap film turns black just before it bursts.
margin:
  - kind: history
    title: History
    text: Newton studied the coloured rings between a lens and a flat glass plate in detail, but did not see them as interference; Young explained them with waves in 1802. Newton's rings are still used to test the shape of lenses.
  - kind: tip
    title: Exam favourite
    text: "Count the phase changes first. One λ/2 flip (soap film in air): bright reflection when 2nt = (m + ½)λ. Two flips or none (coating on glass): bright when 2nt = mλ."
  - kind: olympiad
    title: Olympiad link
    text: "A single quarter-wave coating of index √n_glass on glass cancels the reflection of one wavelength. Stacks of many alternating layers do the opposite and make mirrors reflecting over 99.9%."
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 17 Light Waves (§17.8 Interference from thin films)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.2 Interference of light" }
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 35 Interference (§35.5 Thin films)" }
cards:
  - { front: "When does reflection add a phase change of $\\pi$?", back: "When light reflects from a medium of higher refractive index (going from rarer to denser). Reflection from a rarer medium adds no phase change." }
  - { front: "Soap film (index $n$, thickness $t$) in air, normal incidence: condition for bright reflection?", back: "$2nt = (m + \\tfrac12)\\lambda$, because one of the two reflections has a $\\pi$ change." }
  - { front: "Fringe spacing of an air wedge of angle $\\alpha$?", back: "$\\beta = \\lambda/(2\\alpha)$; in a wedge of index $n$, $\\lambda/(2n\\alpha)$." }
  - { front: "Radius of the $m$th dark Newton's ring in reflection?", back: "$r_m = \\sqrt{m\\lambda R}$, with a dark spot at the centre." }
  - { front: "Ideal single-layer anti-reflection coating on glass of index $n_g$?", back: "Index $\\sqrt{n_g}$, optical thickness $\\lambda/4$ ($t = \\lambda/4n_c$)." }
core:
  idea: 'The two reflections from the faces of a thin film are coherent (division of amplitude). Their optical path difference is $2nt\cos r$, plus $\lambda/2$ for each unmatched reflection from a denser medium, which adds a phase change of $\pi$; whole or half wavelengths then give bright or dark.'
  formulas:
    - tex: '\Delta = 2nt\cos r'
      label: 'Optical path difference between the two reflected rays'
    - tex: '2nt = \left(m + \tfrac12\right)\lambda'
      label: 'Bright reflection from a film in air, normal incidence (one phase flip)'
    - tex: '\beta = \frac{\lambda}{2\alpha}'
      label: 'Fringe spacing of an air wedge of angle $\alpha$'
  conditions:
    - 'The film is uniform and thin, comparable to the wavelength and within the light''s coherence length'
    - 'Monochromatic light; only the first two reflections matter, since each surface reflects only a few per cent'
    - 'Count the phase changes: reflection from a higher $n$ adds $\pi$, from a lower $n$ adds nothing, and transmission never changes phase'
    - 'A wedge or Newton''s-rings gap is small and slowly varying, so the local gap is $t = \alpha x$ or $r^2/2R$'
  sign: 'Count the phase flips before writing the condition: they swap bright and dark between $m\lambda$ and $(m+\tfrac12)\lambda$.'
outcomes:
  - 'Explain the colours of soap bubbles and oil films as interference between two reflections'
  - 'State when reflection adds a phase change of $\pi$ and write the bright and dark conditions for a film'
  - 'Find the thinnest film that looks bright or dark for a given wavelength'
  - 'Analyse air-wedge fringes and use them to measure thickness or test flatness'
  - 'Derive Newton''s ring radii, quarter-wave anti-reflection coatings and multilayer mirrors'
---

:::hook
q: A soap film turns black just before it bursts, when it is far thinner than a wavelength. Why black, not bright?
options: ["It has stopped reflecting light at all", "The two reflected waves cancel because one is flipped by half a wave", "The soap absorbs all the light"]
answer: 1
right: Right. Reflection from the front face (air to soap) flips the wave by half a cycle; reflection from the back face (soap to air) does not. With no extra path, the two reflections arrive exactly out of step and cancel.
wrong: When the film is very thin, the two reflected waves travel almost the same path. So whether they cancel depends on something that happens at each reflection. What could that be?
:::

## Colours from thin layers {lvl=2 id=s-colours label="Class 12 · enrichment"}

Soap bubbles, oil slicks on wet roads, the blue of a camera lens coating and the shimmer of peacock feathers are not dyes. They come from **interference between light reflected from the top and the bottom of a very thin layer**.

Light falling on a film partly reflects from its front surface and partly enters, reflects from the back surface and comes out again. These two reflected waves come from the **same incoming wave**, so they are coherent. This is interference by **division of amplitude**: unlike Young's slits, which split the wavefront sideways, a film splits each bit of the wave in two by partial reflection. That makes it work with broad sources like the sky, which is why you see film colours everywhere.

The extra path of the second wave is about twice the film's thickness. When it makes the two waves reinforce for some colour, that colour is reflected strongly; colours that cancel are transmitted instead. As the thickness changes across a soap film, so does the colour, giving bands.

## The phase change on reflection {lvl=3 id=s-phase label="JEE"}

A wave on a light string, reflected from a heavy string, comes back inverted. A wave going from heavy to light comes back upright. Light behaves the same way:

- Reflection **from a denser medium** (higher $n$) adds a phase change of $\pi$, equivalent to an extra half wavelength of path.
- Reflection **from a rarer medium** adds no phase change.
- The transmitted wave never changes phase.

This is the same $\pi$ that makes the edge fringe of Lloyd's mirror dark.

## The thin-film conditions {lvl=3 id=s-conditions label="JEE"}

Take a film of index $n$ and thickness $t$, with light refracting inside at angle $r$. The optical path difference between the two reflected rays works out to

$$\Delta = 2nt\cos r\qquad (= 2nt \text{ at normal incidence}).$$

Then add $\lambda/2$ for each $\pi$ phase change that one ray has and the other does not.

:::figure caption="A thin film: ray 1 reflects at the top surface, ray 2 at the bottom. The extra optical path is 2nt cos r."
<svg viewBox="0 0 360 180" role="img" aria-label="Thin film interference geometry">
<rect x="20" y="80" width="320" height="40" style="fill:color-mix(in srgb, var(--phy) 14%, transparent);stroke:var(--phy);stroke-width:1.4"/>
<line class="ray" x1="60" y1="10" x2="130" y2="80"/>
<line class="ray r1" x1="130" y1="80" x2="200" y2="10"/>
<line class="ray r2" x1="130" y1="80" x2="160" y2="120"/><line class="ray r2" x1="160" y1="120" x2="190" y2="80"/><line class="ray r2" x1="190" y1="80" x2="260" y2="10"/>
<line class="faint" x1="160" y1="120" x2="160" y2="70" style="stroke-dasharray:3 3"/>
<text x="205" y="22">1</text><text x="262" y="22">2</text><text x="300" y="104">n, t</text><text x="164" y="104">r</text>
<text x="30" y="72">air</text><text x="30" y="140">air (soap film) or glass (coating)</text>
</svg>
:::

**Soap film or oil film in air with air below** (one flip, at the top surface):

$$\text{bright reflection: } 2nt\cos r = \left(m + \tfrac12\right)\lambda,\qquad \text{dark reflection: } 2nt\cos r = m\lambda.$$

As $t \to 0$ the reflection is dark for every colour: the black film.

**Oil on water, or a coating on glass, with $n_{\text{air}} < n_{\text{film}} < n_{\text{below}}$** (two flips, which cancel):

$$\text{bright reflection: } 2nt\cos r = m\lambda,\qquad \text{dark reflection: } 2nt\cos r = \left(m + \tfrac12\right)\lambda.$$

Energy is conserved: a wavelength missing from the reflected light is enhanced in the transmitted light, so the transmitted colours are complementary to the reflected ones.

:::qc lvl=3
q: A soap film (n = 1.33) in air looks bright green (532 nm) by reflection at normal incidence. What is its thinnest possible thickness?
options: ["100 nm", "200 nm", "400 nm"]
answer: 0
right: Right. One flip, so 2nt = λ/2 for the thinnest bright film: t = λ/(4n) = 532/(4 × 1.33) ≈ 100 nm.
wrong: Count the flips: only the front reflection (air to soap) flips. So the thinnest bright film has 2nt = λ/2.
:::

Thick films show no colours. The path difference is then many wavelengths, so nearby wavelengths alternate rapidly between bright and dark and the mixture looks white. The path difference must also stay within the light's coherence length, about a micrometre for white light.

## Wedge fringes {lvl=3 id=s-wedge label="JEE"}

Place a hair between two glass plates at one end: the air gap forms a thin wedge of small angle $\alpha$. At a distance $x$ from the line of contact the gap is $t = \alpha x$. Seen by reflection from above, the gap has one flip (at the lower plate), so dark fringes sit where $2t = m\lambda$. They are straight lines parallel to the contact edge, with a **dark** fringe at the edge itself, spaced by

$$\beta = \frac{\lambda}{2\alpha}\qquad\left(\frac{\lambda}{2n\alpha}\text{ if the wedge is filled with a liquid of index } n\right).$$

Each fringe marks a change of $\lambda/2$ in the gap. Counting fringes measures the hair's diameter; curved fringes reveal how far a surface departs from flat, to a fraction of a wavelength. Optical workshops test flatness this way.

## Newton's rings {lvl=4 id=s-newton label="Olympiad"}

A plano-convex lens of large radius of curvature $R$ rests on a flat plate. The air gap at distance $r$ from the contact point is $t \approx r^2/2R$ (from the geometry of a circle). Viewed by reflection, there is one flip, so dark rings appear where $2t = m\lambda$:

$$r_m^{\text{dark}} = \sqrt{m\lambda R},\qquad r_m^{\text{bright}} = \sqrt{\left(m + \tfrac12\right)\lambda R}.$$

The centre is **dark**. The rings crowd together outwards because $r_m$ grows as $\sqrt m$. Measuring two ring diameters gives $\lambda$ (or $R$) without knowing which ring is which: $D_{m+p}^2 - D_m^2 = 4p\lambda R$. Fill the gap with a liquid of index $n$ and every ring radius shrinks by the factor $\sqrt n$. In transmitted light the pattern is reversed, with a bright centre.

## Anti-reflection coatings and multilayer mirrors {lvl=4 id=s-coatings label="Olympiad"}

Each glass–air surface reflects about 4% of the light. A camera lens with many surfaces would lose much of its light and fill pictures with ghost images. The cure is a thin **coating** whose two reflections cancel.

With air ($n = 1$), coating ($n_c$) and glass ($n_g$), and $1 < n_c < n_g$, both reflections flip, so they cancel when

$$2n_c t = \frac{\lambda}{2}\quad\Rightarrow\quad t = \frac{\lambda}{4n_c}\qquad\text{(a quarter-wave layer)}.$$

For complete cancellation the two reflected amplitudes must also be equal, which happens when $n_c = \sqrt{n_g}$: about 1.22 for $n_g = 1.5$. Magnesium fluoride ($n \approx 1.38$) is the usual compromise. It is designed for the middle of the spectrum (green), so a little red and violet still reflect, giving coated lenses their purplish tint.

Stack many alternating high- and low-index quarter-wave layers and every reflection adds **in phase**. Such a **dielectric mirror** reflects more than 99.9% of one band of wavelengths, far better than metal. Laser mirrors and the coloured interference filters used in projectors are made this way, and so is the shimmer of butterfly wings, built from natural multilayers.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Thin-film colours come from interference between reflections at the two surfaces (division of amplitude). {lvl=2}
2. Reflection from a denser medium adds $\pi$ ($\lambda/2$); from a rarer one, nothing. {lvl=3}
3. Path difference $2nt\cos r$, plus $\lambda/2$ for each unmatched flip. {lvl=3}
4. Soap film in air: bright for $2nt = (m + \tfrac12)\lambda$; a very thin film is black. {lvl=3}
5. Reflected and transmitted colours are complementary. {lvl=3}
6. Air wedge: straight fringes, spacing $\lambda/2\alpha$, dark at the contact edge. {lvl=3}
7. Newton's rings: dark radii $\sqrt{m\lambda R}$, dark centre in reflection. {lvl=4}
8. Anti-reflection coating: quarter-wave layer of index $\sqrt{n_g}$; multilayers make mirrors. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Always count phase flips before writing the condition; the answer swaps between $m\lambda$ and $(m + \tfrac12)\lambda$. {lvl=3}
- Use the wavelength in the film, $\lambda/n$, or equivalently multiply thickness by $n$; never both. {lvl=3}
- Oblique incidence uses $\cos r$ (angle inside the film), not $\cos i$. {lvl=3}
- In a wedge, adjacent fringes correspond to a change of $\lambda/2$ in thickness, not $\lambda$. {lvl=3}
- Newton's ring radii go as $\sqrt m$; their spacing is not constant. {lvl=4}
:::
