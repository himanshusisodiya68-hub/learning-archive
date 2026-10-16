---
title: Huygens' principle
summary: Light as a wave. Wavefronts and rays, Huygens' construction, reflection and refraction from wavelets, what changes at a boundary, optical path, the Doppler shift of light and Fresnel zones.
ncert: ["Class 12 Physics · Ch 10 Wave Optics (§10.1–10.3)"]
up_to: Olympiad
builds_on: [Refraction and Snell's law, Waves (wavelength, frequency, speed)]
notes_prompt: Explain how Huygens' wavelets show that light must travel more slowly in water if it bends towards the normal.
margin:
  - kind: history
    title: History
    text: Huygens proposed the wave theory in 1678; Newton favoured particles. The decisive test came in 1850, when Foucault measured light travelling more slowly in water, as the wave theory predicted and the particle theory denied.
  - kind: tip
    title: Board favourite
    text: At a boundary the frequency stays the same; wavelength and speed both change by the factor n.
  - kind: olympiad
    title: Olympiad link
    text: Fresnel added interference between wavelets to Huygens' idea. The result explains diffraction, zone plates, and even the bright spot at the centre of a round shadow.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 17 Light Waves" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.2 Interference of light; 5.3 Diffraction of light" }
cards:
  - { front: "What is a wavefront?", back: "A surface on which all points vibrate in the same phase. Rays are perpendicular to wavefronts." }
  - { front: "Shapes of wavefronts from a point source, a line source and a distant source?", back: "Spherical, cylindrical and plane." }
  - { front: "State Huygens' principle.", back: "Every point on a wavefront acts as a source of secondary wavelets spreading in the forward direction at the wave speed; the new wavefront is the common forward envelope (tangent surface) of these wavelets." }
  - { front: "Light passes from air into water. What happens to its frequency, wavelength and speed?", back: "Frequency unchanged; wavelength and speed both reduced by the factor n (1.33)." }
  - { front: "Doppler shift for light from a source receding at speed $v \\ll c$?", back: "$\\Delta\\lambda/\\lambda = v/c$, a shift to longer wavelength (red shift)." }
---

:::hook
q: Light slows down when it enters glass. Does its colour (frequency) change too?
options: ["Yes, it becomes bluer", "No, the frequency stays the same", "Yes, it becomes redder"]
answer: 1
right: Right. Wave crests arrive at the boundary at one rate and must leave at the same rate, so the frequency (and colour) is unchanged. The wavelength shrinks instead.
wrong: Crests reaching the boundary every second must leave it every second, or they would pile up. What does that say about frequency?
:::

## Light as a wave {lvl=2 id=s-wave label="Class 12"}

Ray optics treats light as straight lines. It works whenever the openings and obstacles are much larger than the wavelength, but it cannot explain interference, diffraction or polarisation. For those we need the **wave model**: light is an electromagnetic wave of wavelength roughly 400–700 nm in the visible.

A **wavefront** is a surface on which every point vibrates in the same phase, for instance all the crests at one instant. Energy travels perpendicular to the wavefronts, along the **rays**.

- A **point source** sends out **spherical** wavefronts.
- A **line source** (a long slit) sends out **cylindrical** wavefronts.
- Far from any source, a small piece of a sphere is nearly flat: light from the Sun or a distant star arrives as **plane** wavefronts.

:::figure caption="Rays are perpendicular to wavefronts: spherical near a point source (left), plane far from it (right)."
<svg viewBox="0 0 360 150" role="img" aria-label="Spherical and plane wavefronts with rays">
<circle class="obj" cx="70" cy="75" r="4"/>
<circle cx="70" cy="75" r="22" style="fill:none;stroke:var(--eng);stroke-width:1.5"/><circle cx="70" cy="75" r="42" style="fill:none;stroke:var(--eng);stroke-width:1.5"/><circle cx="70" cy="75" r="62" style="fill:none;stroke:var(--eng);stroke-width:1.5"/>
<line class="ray" x1="70" y1="75" x2="140" y2="75"/><line class="ray" x1="70" y1="75" x2="120" y2="25"/><line class="ray" x1="70" y1="75" x2="120" y2="125"/><line class="ray" x1="70" y1="75" x2="20" y2="25"/><line class="ray" x1="70" y1="75" x2="20" y2="125"/>
<line x1="220" y1="15" x2="220" y2="135" style="stroke:var(--eng);stroke-width:1.5"/><line x1="255" y1="15" x2="255" y2="135" style="stroke:var(--eng);stroke-width:1.5"/><line x1="290" y1="15" x2="290" y2="135" style="stroke:var(--eng);stroke-width:1.5"/>
<line class="ray" x1="200" y1="40" x2="340" y2="40"/><line class="ray" x1="200" y1="75" x2="340" y2="75"/><line class="ray" x1="200" y1="110" x2="340" y2="110"/>
<text x="30" y="148">spherical</text><text x="250" y="148">plane</text>
</svg>
:::

## Huygens' principle {lvl=2 id=s-principle label="Class 12"}

How does a wavefront move? Huygens' answer (1678):

1. Every point on a wavefront acts as a source of **secondary wavelets**, which spread out in the forward direction at the speed of the wave in that medium.
2. After a time $t$, the new wavefront is the **forward envelope** of these wavelets: the surface that touches all of them.

In a uniform medium, wavelets of radius $vt$ drawn around every point of a plane wavefront have a plane envelope a distance $vt$ ahead, and a spherical wavefront grows into a larger sphere. Huygens simply assumed the wavelets do not travel backwards. Kirchhoff later justified this with a full wave theory, which gives the wavelets an obliquity factor that vanishes in the backward direction.

## Reflection and refraction from wavelets {lvl=2 id=s-laws label="Class 12"}

**Refraction.** A plane wavefront meets a boundary obliquely. One edge enters the slower medium first and its wavelets grow more slowly there. The refraction lesson works through the geometry: two right triangles sharing the boundary give

$$\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{n_2}{n_1}.$$

**Reflection.** The same construction with the wavelets staying in the first medium gives two congruent right triangles, because the wavelets travel at the same speed before and after: hence $i = r$.

This was a crucial test. Huygens' construction gives Snell's law only if light is **slower** in the denser medium. Newton's particle model explained the same bending by particles **speeding up** in the denser medium. In 1850 Foucault found light slower in water, deciding the question in favour of waves.

Huygens' construction also shows what simple optical elements do to wavefronts. A thin prism tilts a plane wavefront, because the part crossing thicker glass is delayed more. A convex lens delays the centre of a plane wavefront most, turning it into a spherical wavefront converging on the focus. A concave mirror does the same by reflection.

## What changes at a boundary {lvl=2 id=s-boundary label="Class 12"}

The frequency is fixed by the source and the boundary cannot change it; NCERT's Example 10.1 explains it in terms of the atoms, which oscillate at the frequency of the light driving them and re-radiate at that same frequency. With $v = \nu\lambda$ and $v = c/n$,

$$\lambda_{\text{medium}} = \frac{\lambda_{\text{vacuum}}}{n}.$$

A slower wave does not carry less energy: the energy depends on the wave's amplitude (or, in the photon picture, on the number of photons crossing per second), not on its speed.

## Optical path {lvl=3 id=s-opl label="JEE"}

Light travelling a distance $d$ in a medium of index $n$ takes the same time as it would to travel $nd$ in vacuum. The product $nd$ is the **optical path length**, and it counts how many wavelengths fit along the path: $nd/\lambda_{\text{vacuum}}$.

Between two wavefronts, every ray has the same optical path, which is another way of saying they take the same time. This is the bridge between Huygens' waves and Fermat's least-time principle, and it is what you use to compute phase differences in interference: a thin sheet of glass of thickness $t$ placed in one path adds $(n - 1)t$ of optical path.

## The Doppler effect for light {lvl=3 id=s-doppler label="JEE"}

If a source moves away from you at speed $v \ll c$, each successive crest is emitted from a little farther away, so the wavelength you receive is stretched:

$$\frac{\Delta\lambda}{\lambda} = \frac{v}{c}\qquad\left(\text{equivalently } \frac{\Delta\nu}{\nu} = -\frac{v}{c}\right).$$

A receding source is **red-shifted**, an approaching one blue-shifted. Astronomers measure the shifts of known spectral lines to find stars' and galaxies' speeds along the line of sight. Hubble's discovery that distant galaxies are all red-shifted, more so the farther away they are, revealed the expansion of the universe.

## Fresnel zones {lvl=4 id=s-fresnel label="Olympiad"}

Fresnel combined Huygens' wavelets with interference. Divide a plane wavefront approaching a point P (a distance $L$ away) into rings, **Fresnel zones**, chosen so that each ring's edge is half a wavelength farther from P than the previous one. Their radii are

$$r_m \approx \sqrt{m\lambda L}.$$

Each zone's wavelets arrive roughly half a period out of step with the previous zone's, so neighbouring zones nearly cancel. Block every other zone with an opaque ring pattern, a **zone plate**, and the remaining zones all add in phase: the plate focuses light like a lens. The same reasoning predicts a bright spot at the very centre of the shadow of a round disc. Poisson thought that prediction absurd; Arago observed it in 1818, and the wave theory was settled.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A wavefront joins points vibrating in phase; rays are perpendicular to it. {lvl=2}
2. Point source: spherical wavefronts; line source: cylindrical; distant source: plane. {lvl=2}
3. Huygens: every point of a wavefront emits secondary wavelets; the new wavefront is their forward envelope. {lvl=2}
4. Huygens' construction gives the laws of reflection and refraction, with light slower in denser media. {lvl=2}
5. At a boundary, frequency is unchanged; $\lambda$ and $v$ both divide by $n$. {lvl=2}
6. Optical path $nd$; a sheet of thickness $t$ adds $(n - 1)t$. {lvl=3}
7. Doppler shift: $\Delta\lambda/\lambda = v/c$ for a receding source. {lvl=3}
8. Fresnel zones have radii $\sqrt{m\lambda L}$; a zone plate focuses light. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Frequency, and so colour, does not change on refraction; wavelength does. {lvl=2}
- A slower wave in glass does not mean less energy. {lvl=2}
- In Huygens' construction, wavelets in the second medium have radius $v_2 t$, not $v_1 t$. {lvl=2}
- For phase differences, always convert to optical path, $n \times$ distance, before comparing with $\lambda$. {lvl=3}
:::
