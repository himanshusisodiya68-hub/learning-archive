---
title: Huygens' principle
summary: 'Why ocean waves swing round to face the shore, and how the same trick makes light bend in glass.'
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
core:
  idea: 'Every point on a wavefront is a source of secondary wavelets spreading forward at the wave speed, and the new wavefront is their forward envelope. This gives $i = r$ and $\sin i/\sin r = v_1/v_2 = n_2/n_1$, with the frequency unchanged and $\lambda = \lambda_0/n$.'
  formulas:
    - tex: '\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{n_2}{n_1}'
      label: 'Refraction from Huygens'' construction'
    - tex: '\lambda_{\text{medium}} = \frac{\lambda_{\text{vacuum}}}{n}'
      label: 'Wavelength in a medium (frequency fixed)'
    - tex: 'L_{\text{opt}} = nd'
      label: 'Optical path length'
  conditions:
    - 'Light is treated as a wave of wavelength about 400 to 700 nm; rays are the lines perpendicular to wavefronts'
    - 'The wavelets spread only in the forward direction (justified by Kirchhoff''s obliquity factor)'
    - 'The medium is uniform, so the wave speed is constant and a wavelet after time $t$ has radius $vt$'
  sign: 'At a boundary the frequency is fixed; speed and wavelength both divide by $n$. In the second medium the wavelet radius is $v_2 t$, and light is slower in the denser medium.'
outcomes:
  - 'Define wavefronts and rays, and recognise spherical, cylindrical and plane wavefronts'
  - 'State Huygens'' principle and use it to derive the laws of reflection and refraction'
  - 'Explain why the frequency stays fixed while speed and wavelength change at a boundary'
  - 'Use optical path length to find phase differences, and apply the Doppler shift $\Delta\lambda/\lambda = v/c$'
  - 'Describe Fresnel zones, zone plates and the bright spot in a disc''s shadow'
opener:
  story: |
    Stand on a beach and watch the waves arrive. Out at sea they may come in at any angle, yet by the time they reach the sand the crests have swung round and are almost parallel to the shore. Look at a photo of any coastline from above and you will see the crests curving to line up with the beach.

    Why do they turn? Out in deep water a wave runs fast; in the shallows it slows down. The end of a crest that reaches the shallows first slows first, while the rest keeps running ahead. The whole crest pivots, like a marching line where one end hits mud and the soldiers there fall behind.

    Now dip a pencil in a glass of water: it looks bent at the surface. Light also runs slower in water than in air. **Could light be bending for the same reason the beach waves do?** That one guess started the wave theory of light.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Wave crests turning to line up with the shore as they enter shallow water"><rect x="0" y="0" width="320" height="172" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface))"/><rect x="0" y="172" width="320" height="68" style="fill:color-mix(in srgb,var(--chem) 25%,var(--surface))"/><path d="M0 172 Q80 164 160 170 T320 168" style="fill:none;stroke:var(--muted);stroke-width:1.5"/><path d="M30 44 L170 8" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M16 96 Q110 84 230 42" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M8 142 Q150 138 310 104" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M8 162 Q160 162 312 154" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M262 20 L246 74" style="fill:none;stroke:var(--ink);stroke-width:1.6"/><path d="M246 74 L245 63 M246 74 L254 66" style="fill:none;stroke:var(--ink);stroke-width:1.6"/><text x="196" y="14" style="font-size:11px;fill:var(--muted)">deep water: fast</text><text x="14" y="190" style="font-size:11px;fill:var(--muted)">shallows: slow</text><text x="206" y="222" style="font-size:11px;fill:var(--muted)">the shore</text><text x="20" y="232" style="font-size:11px;fill:var(--muted)">crests line up</text></svg>'
life:
  - 'Ocean waves arrive almost parallel to a beach because the shallow end of each crest slows first.'
  - 'A pencil in a glass of water looks bent: light is slower in water, so wavefronts swing round at the surface.'
  - 'Spectacle and camera lenses delay the middle of a wavefront more than the edge, which bends it to a focus.'
  - 'Astronomers find how fast a galaxy is moving from the shift in the colour of its light.'
models:
  - name: 'The slow side steers'
    text: 'Slow down one end of a moving line and the whole line turns towards that end: a car whose one wheel hits mud, a march where one end meets a slow patch. When something turns unexpectedly, look for which part got slowed.'
  - name: 'Local rules, global shape'
    text: 'Huygens needed no master plan: each point of the wavefront only makes its own small wavelets, and a smooth new front appears from the sum. Big orderly patterns often come from simple local rules, as in a crowd or a market.'
  - name: 'Find what the source fixes'
    text: 'The source sets the frequency; the surroundings set the speed and wavelength. When a system changes, ask which quantity is fixed from outside and which one adjusts.'
links:
  - leaf: 'phy/refraction-and-snells-law'
    name: 'Refraction and Snell''s law'
    same: 'The ray lesson used $\sin i/\sin r = n$ as a rule of thumb. Huygens'' wavelets explain **why** it holds: the ratio of the two speeds sets the bend.'
    differs: 'Rays only say how the direction changes. Wavefronts also tell you what happens to wavelength and frequency, and they prepare the ground for interference.'
  - leaf: 'phy/sound-as-a-wave'
    name: 'Sound as a wave'
    same: 'Sound spreads in wavefronts too, and bends when its speed changes, for example when it crosses from warm to cool air.'
    differs: 'Sound is a push-and-pull along the direction of travel and needs a medium. Light needs none, and its wiggle is sideways.'
next:
  q: 'Huygens says every point of a wavefront sends out its own little wavelets. So what happens where wavelets from two different places meet: can light plus light ever make darkness?'
  leaf: 'phy/interference-and-youngs-experiment'
  name: 'Interference and Young''s experiment'
---

:::hook
q: So what's your guess? Light slows down as it enters glass. Does its colour (its frequency) change too?
options: ["Yes, it turns bluer", "No, the same number of crests per second still go through", "Yes, it turns redder"]
answer: 1
right: Right, and the beach shows why. Crests reach the boundary at some rate and must leave at the same rate, or they would pile up. The wave just slows and its crests bunch closer together, so the wavelength shrinks and the colour stays.
wrong: Think of the beach. Crests arriving at the shallows must leave the shallows at the same rate, or they would pile up there. So what stays fixed, and what shrinks?
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
