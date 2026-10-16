---
title: Total internal reflection
summary: When light inside a denser medium cannot get out. Critical angle, why diamonds sparkle, totally reflecting prisms, optical fibres and their acceptance angle, Snell's window, and frustrated total internal reflection.
ncert: ["Class 12 Physics · Ch 9 Ray Optics (§9.4)"]
up_to: Olympiad
builds_on: [Refraction and Snell's law, Sine of an angle]
notes_prompt: Explain why an optical fibre can carry light around a bend without losing it through the walls.
margin:
  - kind: history
    title: History
    text: In 1841 Daniel Colladon guided light along a curved jet of water in a Geneva lecture hall, the first light pipe. Optical fibres now carry almost all long-distance internet traffic.
  - kind: tip
    title: Board favourite
    text: "Two conditions for total internal reflection, both needed: light goes from denser to rarer medium, and the angle of incidence exceeds the critical angle."
  - kind: olympiad
    title: Olympiad link
    text: In total internal reflection the light still pokes a fraction of a wavelength into the rarer medium. Bring a second prism close and some light crosses the gap, the optical version of quantum tunnelling.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 18 Geometrical Optics (total internal reflection)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.1 Photometry and geometrical optics" }
cards:
  - { front: "Two conditions for total internal reflection?", back: "Light travels from the optically denser to the rarer medium, and the angle of incidence exceeds the critical angle." }
  - { front: "Critical angle formula?", back: "$\\sin\\theta_c = n_2/n_1$ (rarer over denser); from a medium of index $n$ into air, $\\sin\\theta_c = 1/n$." }
  - { front: "Why does a diamond sparkle?", back: "Its critical angle is only about 24°, so light entering it is totally reflected many times inside a well-cut stone before leaving through the top." }
  - { front: "Acceptance angle of an optical fibre in air?", back: "$\\sin\\theta_{\\max} = \\sqrt{n_1^2 - n_2^2}$ (core $n_1$, cladding $n_2$), the numerical aperture." }
  - { front: "How wide is the circle of sky a fish sees from below the water surface?", back: "A cone of half-angle $\\theta_c \\approx 48.6^\\circ$ (Snell's window); outside it the surface acts as a mirror." }
---

:::hook
q: You look up from the bottom of a swimming pool at the flat water surface, away from the vertical. What do you see far from straight overhead?
options: ["The sky, everywhere", "A silvery mirror reflecting the pool floor", "Darkness"]
answer: 1
right: Right. Beyond about 49° from the vertical, light from the pool floor is totally reflected at the surface, so it acts as a perfect mirror. The sky appears only inside a bright circle overhead.
wrong: Next time you swim, look up at an angle. Light inside water hitting the surface steeply enough cannot get out, so the surface acts as a mirror.
:::

## When light cannot get out {lvl=2 id=s-tir label="Class 12"}

When light travels from a denser medium such as glass or water into a rarer one such as air, it bends **away** from the normal. Increase the angle of incidence and the refracted ray swings closer to the surface, while more and more of the light is reflected back. At one particular angle, the **critical angle** $\theta_c$, the refracted ray grazes along the surface ($\theta_2 = 90^\circ$). Beyond it there is no refracted ray at all: **all** the light is reflected. This is **total internal reflection** (TIR).

Two conditions, both needed:

1. light travels from the optically **denser** medium to the **rarer** one;
2. the angle of incidence is **greater than the critical angle**.

Try it below: choose "Water → Air" or "Glass → Air" and increase the angle past the critical angle.

:::widget name=refraction-sim
:::

## The critical angle {lvl=2 id=s-critical label="Class 12"}

Put $\theta_2 = 90^\circ$ in Snell's law:

:::law caption="n₁ is the denser medium, n₂ the rarer one. Into air, sin θc = 1/n."
$$\sin\theta_c = \frac{n_2}{n_1}$$
:::

| Medium | Refractive index | Critical angle (to air) |
|---|---|---|
| Water | 1.33 | 48.8° |
| Crown glass | 1.52 | 41.1° |
| Dense flint glass | 1.62 | 37.3° |
| Diamond | 2.42 | 24.4° |

A higher refractive index means a smaller critical angle, so light is trapped more easily.

TIR reflects 100% of the light, more than any silvered mirror, which always absorbs a few per cent. That is why prisms and fibres, not mirrors, are used where light must be reflected many times.

:::qc
q: Light in air strikes the surface of water at 70°. Can it be totally reflected?
options: ["Yes, 70° is beyond the critical angle", "No, light is going from rarer to denser"]
answer: 1
right: Right. TIR needs light travelling from the denser medium. Light entering water from air is always partly refracted.
wrong: Check the direction: air to water is rarer to denser, so condition 1 fails.
:::

## TIR in nature and technology {lvl=2 id=s-uses label="Class 12"}

- **Diamonds sparkle** because their critical angle is so small (24.4°). A brilliant cut is designed so that light entering through the top is totally reflected again and again by the lower faces and leaves through the top, broken into colours by dispersion.
- **Totally reflecting prisms.** A glass prism with angles 45°–90°–45° turns a ray through 90° or 180° by TIR at its long face, because light inside meets that face at 45°, more than the critical angle of glass. Binoculars and periscopes use such prisms instead of mirrors; they never tarnish.
- **Optical fibres** are hair-thin strands of glass: a core of higher refractive index inside a cladding of lower index. Light entering one end strikes the core–cladding boundary beyond the critical angle and is totally reflected thousands of times per metre, so it follows the fibre around bends with very little loss. Fibres carry telephone and internet signals and, as **endoscopes**, let doctors see inside the body.
- **Mirages**: on a hot road, light from the sky travelling down through layers of hotter, lower-index air bends until it is turned upward, as though reflected from a pool of water.

:::figrow
<figure class="fig"><svg viewBox="0 0 360 120" role="img" aria-label="Light zigzags along an optical fibre by total internal reflection"><rect x="0" y="30" width="360" height="60" style="fill:color-mix(in srgb, var(--phy) 6%, var(--surface))"/><rect class="m2" x="0" y="40" width="360" height="40"/><line class="ln" x1="0" y1="40" x2="360" y2="40" style="stroke-width:1"/><line class="ln" x1="0" y1="80" x2="360" y2="80" style="stroke-width:1"/><polyline class="ray" points="0,72 10,60 50,40 130,80 210,40 290,80 350,50"/><text x="6" y="24">cladding (lower n)</text><text x="230" y="104">core (higher n)</text></svg><figcaption>An optical fibre: light is totally reflected at every bounce.</figcaption></figure>
<figure class="fig"><svg viewBox="0 0 200 170" role="img" aria-label="A 45-90-45 prism turns a ray through 90 degrees by total internal reflection"><path class="m2" d="M60 30 L60 130 L160 130 Z" style="stroke:var(--ink);stroke-width:1.4"/><polyline class="ray" points="10,100 130,100 130,165"/><line class="faint" x1="110" y1="80" x2="150" y2="120"/><text x="134" y="94">45°</text><text x="8" y="92">in</text><text x="136" y="162">out</text></svg><figcaption>A 45° prism turns light through 90° with no silvering.</figcaption></figure>
:::

## Acceptance angle of a fibre {lvl=3 id=s-fibre label="JEE"}

Light enters the end of a fibre from air at angle $\theta$ to its axis and refracts to angle $r$, with $\sin\theta = n_1\sin r$. It then meets the core–cladding wall at $90^\circ - r$. Total reflection needs $\sin(90^\circ - r) \ge n_2/n_1$, i.e. $\cos r \ge n_2/n_1$. The largest acceptable $r$ gives

$$\sin\theta_{\max} = n_1\sqrt{1 - \frac{n_2^2}{n_1^2}} = \sqrt{n_1^2 - n_2^2}.$$

This quantity is the fibre's **numerical aperture**. Light arriving within the cone of half-angle $\theta_{\max}$ is trapped; light outside it leaks out. NCERT's Exercise 9.17 uses exactly this with a core of 1.68 and a cladding of 1.44.

**Different paths, different delays.** A ray along the axis and a ray bouncing at the critical angle travel different distances. Over a length $L$ the difference in arrival time is about $\Delta t = \dfrac{L n_1}{c}\left(\dfrac{n_1}{n_2} - 1\right)$, which smears short pulses. This modal dispersion limits how fast data can be sent, and engineers fight it with graded-index fibres and single-mode fibres only a few micrometres wide.

## Snell's window {lvl=3 id=s-window label="JEE"}

Seen from under still water, light from the entire sky above the surface is squeezed into a cone of half-angle $\theta_c$, about 48.6°, so a diver sees the whole outside world inside a bright circle overhead. Beyond that circle the surface acts as a mirror reflecting the dark depths. At depth $h$, the circle has radius $h\tan\theta_c \approx 1.13h$.

Run the light backwards and the same geometry explains NCERT's Exercise 9.5: a lamp at the bottom of a tank lights up only a circle of the surface.

## Frustrated total internal reflection {lvl=4 id=s-ftir label="Olympiad"}

Even in TIR, the light's electromagnetic field does not stop dead at the boundary. A wave, the **evanescent wave**, extends a short way into the rarer medium, its strength falling off exponentially with a decay length of order

$$\delta = \frac{\lambda}{2\pi\sqrt{n_1^2\sin^2\theta - n_2^2}},$$

typically a fraction of a wavelength. If a second block of glass is brought within this distance, light crosses the gap and continues into it: the reflection is **frustrated**. The transmitted fraction depends very sharply on the gap, which is used in beam-splitter cubes, some fingerprint scanners and touch sensors. It is the exact optical analogue of a quantum particle tunnelling through a barrier.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. TIR needs light going from denser to rarer, at more than the critical angle. {lvl=2}
2. $\sin\theta_c = n_2/n_1$; for glass about 42°, water 49°, diamond 24°. {lvl=2}
3. TIR reflects all the light, so prisms and fibres outperform mirrors. {lvl=2}
4. Optical fibres guide light by repeated TIR at the core–cladding boundary. {lvl=2}
5. Acceptance angle: $\sin\theta_{\max} = \sqrt{n_1^2 - n_2^2}$. {lvl=3}
6. A lamp at depth $h$ lights a circle of radius $h\tan\theta_c$; a diver sees the sky through the same circle. {lvl=3}
7. An evanescent wave reaches a fraction of a wavelength across the boundary; a nearby second surface frustrates TIR. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Check the direction of the light first: TIR never happens going from rarer to denser.
- The critical angle is measured from the normal, not from the surface.
- For a submerged lamp, the lit area is a circle of radius $h\tan\theta_c$, not $h\sin\theta_c$. {lvl=2}
- For fibre problems, the angle at the wall is $90^\circ - r$, where $r$ is the refraction angle at the entry face. {lvl=3}
:::
