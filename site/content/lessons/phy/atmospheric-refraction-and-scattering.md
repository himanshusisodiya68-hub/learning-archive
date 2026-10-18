---
title: Atmospheric refraction and scattering
summary: Why stars twinkle and planets do not, why the Sun is seen before it rises, the Tyndall effect, why the sky is blue and sunsets red, Rayleigh's 1/λ⁴ law, and how much the air bends light near the horizon.
ncert: ["Class 10 Science · Ch 10 The Human Eye and the Colourful World (§10.5–10.6)"]
up_to: Olympiad
builds_on: [Refraction and Snell's law, Prism and dispersion]
notes_prompt: Explain why the sky is blue but the setting Sun is red, using one idea for both.
margin:
  - kind: history
    title: History
    text: In 1871 Lord Rayleigh showed that particles much smaller than the wavelength scatter light in proportion to 1/λ⁴. C. V. Raman, studying the blue of the sea in 1921, went on to discover the Raman effect and won India's first Nobel Prize in science.
  - kind: tip
    title: Board favourite
    text: "Twinkling: stars are point sources, so the air's fluctuating refraction makes their light flicker. Planets are extended, so the flickers average out."
  - kind: olympiad
    title: Olympiad link
    text: Near the horizon the air lifts the Sun's image by about half a degree, roughly its own diameter. When you watch the Sun touch the horizon, it is already geometrically below it.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 20 Dispersion and Spectra" }
cards:
  - { front: "Why do stars twinkle?", back: "Starlight passes through layers of air whose refractive index keeps changing. A star is effectively a point source, so its apparent position and brightness flicker." }
  - { front: "Why don't planets twinkle?", back: "A planet is close enough to be an extended source, a collection of points. Their flickers average out." }
  - { front: "Why is the Sun visible about 2 minutes before actual sunrise?", back: "Atmospheric refraction bends sunlight over the horizon, so the Sun's image appears above the horizon while the Sun is still below it." }
  - { front: "What is the Tyndall effect?", back: "Scattering of a beam of light by small particles (dust, smoke, colloids), which makes the path of the beam visible." }
  - { front: "Why is the sky blue?", back: "Air molecules, much smaller than the wavelength, scatter short wavelengths (blue) far more strongly than long ones (red); scattered intensity ∝ 1/λ⁴." }
  - { front: "Why are danger signals red?", back: "Red light is scattered least by fog and smoke, so it travels farthest and stays visible from a distance." }
core:
  idea: 'Air''s refractive index changes with height and temperature, so light bends continuously: stars twinkle and the Sun is seen about 2 minutes before sunrise. Particles much smaller than the wavelength scatter light with $I \propto 1/\lambda^4$, so blue is scattered most.'
  formulas:
    - tex: 'I_{\text{scattered}} \propto \frac{1}{\lambda^4}'
      label: 'Rayleigh scattering'
    - tex: 'R \approx (n_0 - 1)\tan z'
      label: 'Refraction shift for a star at zenith angle $z$ (flat layers)'
  conditions:
    - 'For Rayleigh scattering, the scatterers (air molecules) are much smaller than the wavelength; larger droplets scatter all colours about equally'
    - 'A star is a point source, so its image shakes as the air moves; a planet is an extended source and its flickers average out'
    - 'For the shift formula, the atmosphere is flat layers of refractive index falling with height, valid well above the horizon'
outcomes:
  - 'Explain twinkling of stars, the steady light of planets, and advance sunrise and delayed sunset'
  - 'Describe scattering and the Tyndall effect, and explain the blue sky, the red Sun at sunrise and sunset, red danger signals and white clouds'
  - 'State and apply Rayleigh''s $1/\lambda^4$ law, and explain why the sky is not violet'
  - 'Explain why skylight is polarised at 90° to the Sun'
  - 'Estimate atmospheric refraction from the layer invariant and the horizon value of about 34 arcminutes'
---

:::hook
q: An astronaut on the Moon looks up during the lunar day, with the Sun shining. What colour is the sky?
options: ["Blue, as on Earth", "Black", "White"]
answer: 1
right: Right. With no atmosphere there is nothing to scatter sunlight, so the sky is black even in full sunshine. NCERT asks the same about astronauts.
wrong: The sky's colour comes from sunlight scattered by air. What happens with no air?
:::

## Atmospheric refraction {lvl=1 id=s-refraction}

The atmosphere is not uniform. Air is denser, with a higher refractive index, near the ground and thinner higher up, and pockets of warm and cool air constantly drift through it. Light passing through therefore bends gradually and unsteadily. NCERT calls this **atmospheric refraction**.

:::figure caption="Starlight bends as it passes through denser air near the ground, so the star appears higher than it really is."
<svg viewBox="0 0 360 200" role="img" aria-label="Atmospheric refraction raises the apparent position of a star">
<path d="M-40 260 A320 320 0 0 1 400 260" style="fill:color-mix(in srgb, var(--bio) 14%, var(--surface));stroke:var(--bio);stroke-width:1.5"/>
<path d="M-40 260 A345 345 0 0 1 400 260" class="m2" style="opacity:.55" transform="translate(0,-28)"/>
<path d="M-40 260 A370 370 0 0 1 400 260" class="m2" style="opacity:.3" transform="translate(0,-56)"/>
<circle class="obj" cx="40" cy="20" r="5"/><circle class="ghost" cx="60" cy="6" r="5"/>
<path class="ray" d="M40 20 Q120 60 200 120"/>
<line class="faint" x1="200" y1="120" x2="60" y2="6"/>
<ellipse class="eye" cx="203" cy="124" rx="6" ry="3"/>
<text x="10" y="40">real position</text><text x="70" y="12">apparent position</text><text x="260" y="150">denser air</text><text x="250" y="70">thinner air</text>
</svg>
:::

**Twinkling of stars.** Stars are so far away that each is effectively a point source of light. As its light crosses the restless atmosphere, the amount of bending keeps changing, so the star's apparent position wobbles slightly and the amount of light reaching your eye flickers. The star **twinkles**.

**Planets do not twinkle.** Planets are much closer and appear as tiny discs: extended sources made of many points. The flickers from different points are independent and average out, so the total light stays steady.

**Advance sunrise and delayed sunset.** Near the horizon, sunlight crosses the most air and bends the most, over the horizon towards us. We see the Sun about **2 minutes before** it actually crosses the horizon and about 2 minutes after it has set. The days are about 4 minutes longer than they would be without an atmosphere. The bending also makes the Sun look flattened as it sets.

:::qc
q: Why do stars twinkle while planets shine steadily?
options: ["Stars emit flickering light", "Stars are point sources; planets are extended and their flickers average out", "Planets are closer to the Sun"]
answer: 1
right: Right. Changing refraction in the air shakes a point image noticeably, but an extended disc averages the effect.
wrong: Stars shine steadily in space. The flicker comes from the air, and it shows up only for point-like sources.
:::

## Scattering of light {lvl=1 id=s-scattering}

When light meets tiny particles, part of it is sent off in all directions: it is **scattered**. A sunbeam entering a dusty room or a dense forest canopy is visible from the side because dust or water droplets scatter some of its light towards your eyes. This visibility of a beam's path through a colloid or a fine suspension is the **Tyndall effect**.

The colour of the scattered light depends on the size of the particles:

- **Very small particles** (air molecules, fine dust) scatter **short wavelengths (blue) much more** than long wavelengths (red).
- **Larger particles** (water droplets in clouds, coarse dust) scatter **all colours about equally**, so the scattered light looks **white**.

**Why the sky is blue.** Air molecules are far smaller than the wavelength of visible light, so they scatter blue light from the sunlight much more strongly than red. Look anywhere away from the Sun and you see this scattered blue light. Above the atmosphere there is nothing to scatter light, so astronauts see a black sky.

**Why the Sun is red at sunrise and sunset.** Near the horizon, sunlight crosses a much thicker layer of air. Most of the blue is scattered out of the beam along the way, and the light that reaches you directly is mainly red and orange. At noon the path is short, so the Sun looks white.

**Why danger signals are red.** Red light is scattered least by fog, smoke and dust, so it can be seen from the greatest distance.

**Why clouds are white.** Cloud droplets are larger than the wavelength of light and scatter all colours about equally.

:::qc
q: The setting Sun looks red. What has happened to its blue light?
options: ["The Sun stops emitting blue in the evening", "It has been scattered out of the long path through the air", "The atmosphere turns blue light into red"]
answer: 1
right: Right. The long path near the horizon scatters most of the blue sideways, lighting other people's sky, and mainly red reaches you directly.
wrong: The Sun's light is the same all day. What is different at sunset is the length of air the light must cross.
:::

## Rayleigh's law {lvl=2 id=s-rayleigh label="Class 11–12"}

For particles much smaller than the wavelength, Rayleigh showed that the intensity of scattered light varies as

$$I_{\text{scattered}} \propto \frac{1}{\lambda^4}.$$

Blue light (about 450 nm) is therefore scattered $(700/450)^4 \approx 5.9$ times more strongly than red light (about 700 nm). The steep power comes from how a molecule's electrons, driven to oscillate by the light's electric field, re-radiate: radiated power rises as the fourth power of the oscillation frequency.

**Why not violet?** Violet is scattered even more than blue, but the Sun emits less violet than blue, some is absorbed high in the atmosphere, and our eyes are much less sensitive to it. The mixture we perceive is sky blue.

## Polarised skylight {lvl=3 id=s-polarised label="JEE"}

Light scattered at 90° to the sunlight is strongly polarised (see the Polarisation lesson). Rotate a polaroid sunglass lens while looking at the sky about 90° from the Sun and the sky visibly darkens and brightens. Bees navigate using this pattern of polarisation in the sky.

## How much does the air bend light? {lvl=4 id=s-amount label="Olympiad"}

Treat the atmosphere as flat layers. By the layer invariant from the refraction lesson, $n\sin\theta$ is constant, and the total bending depends only on the refractive index at the ground. For a star at zenith angle $z$ well above the horizon, the apparent shift is about

$$R \approx (n_0 - 1)\tan z,$$

with $n_0 - 1 \approx 2.9 \times 10^{-4}$ for air at sea level: about 1 arcminute at $z = 45^\circ$. The flat-layer formula fails near the horizon, where the Earth's curvature matters. There the refraction reaches about 34 arcminutes, slightly more than the Sun's angular diameter (32 arcminutes). The Earth turns through 15 arcminutes of sky per minute of time, so a 34-arcminute lift advances sunrise by roughly 2 minutes, as NCERT states.

Because refraction grows rapidly towards the horizon, the setting Sun's lower edge is lifted more than its upper edge, so the disc looks squashed. Dispersion in the air separates the colours slightly too: the last sliver of the setting Sun can flash green.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The atmosphere's refractive index varies with height and time: atmospheric refraction.
2. Stars twinkle (point sources); planets do not (extended sources).
3. Refraction makes the Sun visible about 2 minutes before sunrise and after sunset.
4. Tyndall effect: small particles scatter light and make a beam visible.
5. Small particles scatter blue most: blue sky, red sunrise and sunset, black sky in space.
6. Large particles scatter all colours equally: white clouds. Red is least scattered: danger signals.
7. Rayleigh: scattered intensity $\propto 1/\lambda^4$. {lvl=2}
8. Horizon refraction about 34 arcminutes, a little more than the Sun's diameter. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Twinkling is caused by refraction in the air, not by the star itself.
- The sky is blue because of scattering, not reflection from the oceans.
- Only small particles scatter selectively; large droplets scatter all colours, so fog and clouds look white.
- At sunset, the red Sun is light that has lost its blue, not light that has gained red.
:::
