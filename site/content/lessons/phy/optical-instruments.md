---
title: Optical instruments
summary: 'How two pieces of glass in a tube bring the Moon close and make pollen huge, and why magnifying must stop.'
ncert: ["Class 12 Physics · Ch 9 Ray Optics and Optical Instruments (§9.7)"]
up_to: Olympiad
builds_on: [Lenses and the lens formula, The human eye and its defects, Spherical mirrors]
notes_prompt: Explain why a magnifying glass makes things look bigger even though the image subtends the same angle at the eye as the object.
margin:
  - kind: history
    title: History
    text: Galileo turned a telescope to the sky in 1609 and saw Jupiter's moons and the phases of Venus. Antonie van Leeuwenhoek's single-lens microscopes, around 1675, first revealed bacteria.
  - kind: tip
    title: Board favourite
    text: "Telescope in normal adjustment: m = fₒ/fₑ and length fₒ + fₑ. Microscope: m ≈ (L/fₒ)(D/fₑ), with D = 25 cm."
  - kind: olympiad
    title: Olympiad link
    text: A telescope cannot usefully magnify beyond the point where its own diffraction blur fills the eye's resolution, roughly 2× per millimetre of aperture.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 19 Optical Instruments" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.1 Photometry and geometrical optics" }
cards:
  - { front: "Define the magnifying power of an optical instrument.", back: "The ratio of the angle subtended at the eye by the final image to the angle subtended by the object seen directly (at 25 cm for a microscope, at its actual distance for a telescope)." }
  - { front: "Magnifying power of a simple magnifier?", back: "$m = 1 + D/f$ with the image at the near point $D = 25$ cm; $m = D/f$ with the image at infinity." }
  - { front: "Magnifying power of a compound microscope in normal adjustment?", back: "$m \\approx \\dfrac{L}{f_o}\\cdot\\dfrac{D}{f_e}$, with $L$ the tube length (between the inner focal points)." }
  - { front: "Astronomical telescope in normal adjustment: magnifying power and length?", back: "$m = f_o/f_e$; length $f_o + f_e$." }
  - { front: "Two advantages of reflecting telescopes?", back: "No chromatic aberration, and large mirrors can be supported from behind and made parabolic (no spherical aberration); a mirror needs only one polished surface." }
  - { front: "Resolving limit of a telescope of aperture $D$?", back: "$\\theta \\approx 1.22\\lambda/D$: a larger aperture resolves finer detail and gathers more light (∝ $D^2$)." }
core:
  idea: 'An optical instrument works by increasing the angle subtended at the eye. Magnifying power is $m$ = (angle subtended by the final image) / (angle subtended by the object seen directly); for a simple magnifier $m = 1 + D/f$, and for a telescope in normal adjustment $m = f_o/f_e$.'
  formulas:
    - tex: 'm = 1 + \frac{D}{f}'
      label: 'Simple magnifier, image at the near point $D = 25$ cm ($m = D/f$ for image at infinity)'
    - tex: 'm \approx \frac{L}{f_o}\cdot\frac{D}{f_e}'
      label: 'Compound microscope, normal adjustment'
    - tex: 'm = \frac{f_o}{f_e}'
      label: 'Astronomical telescope, normal adjustment (tube length $f_o + f_e$)'
  conditions:
    - 'Thin lenses and paraxial rays'
    - 'The reference for a microscope or magnifier is the object at the near point, $D = 25$ cm'
    - 'Normal adjustment: the final image is at infinity and the eye is relaxed'
    - 'For a telescope the object is effectively at infinity, and its image is formed in the objective''s focal plane'
  sign: 'Magnifying power (a ratio of angles) is not linear magnification $v/u$; the telescope''s tube length is $f_o + f_e$ only in normal adjustment.'
outcomes:
  - 'Define magnifying power as a ratio of angles and explain why a magnifier lets you hold an object closer than 25 cm'
  - 'Calculate the magnifying power of a simple magnifier for the image at the near point and at infinity'
  - 'Describe and analyse the compound microscope and the astronomical telescope in normal adjustment'
  - 'Compare refracting and reflecting telescopes'
  - 'Apply light-gathering power $\propto D^2$, the resolution limit $1.22\lambda/D$ and the exit pupil'
opener:
  story: |
    In 1609 Galileo heard about a Dutch toy that made far things look near. He built his own, pointed it at the night sky, and saw four small lights circling Jupiter. A tube with two pieces of glass in it helped overturn the old belief that everything in the sky goes round the Earth.

    Rearrange the same two kinds of glass and the tube looks the other way. A near, tiny thing, such as a grain of pollen or a drop of pond water, becomes huge. A telescope and a microscope are close cousins.

    But here is the strange part. You can't see an ant's legs by simply bringing the ant close to your eye: closer than about 25 centimetres everything blurs. Yet a small glass lens lets you hold the ant just 5 centimetres away and see it sharply.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A telescope tube with a large objective lens and a small eyepiece, aimed at Jupiter and its moons, with an eye at the other end"><circle cx="24" cy="120" r="12" style="fill:color-mix(in srgb,var(--chem) 40%,var(--surface));stroke:var(--chem);stroke-width:1.5"/><circle cx="8" cy="98" r="2" style="fill:var(--ink)"/><circle cx="44" cy="146" r="2" style="fill:var(--ink)"/><circle cx="40" cy="94" r="2" style="fill:var(--ink)"/><rect x="90" y="92" width="150" height="56" rx="4" style="fill:none;stroke:var(--muted);stroke-width:2"/><ellipse cx="100" cy="120" rx="5" ry="26" style="fill:color-mix(in srgb,var(--c) 25%,var(--surface));stroke:var(--c);stroke-width:2"/><ellipse cx="230" cy="120" rx="4" ry="12" style="fill:color-mix(in srgb,var(--c) 25%,var(--surface));stroke:var(--c);stroke-width:2"/><polyline points="56,104 100,104 230,122.3 280,122.3" style="fill:none;stroke:var(--chem);stroke-width:2"/><polyline points="56,136 100,136 230,117.7 280,117.7" style="fill:none;stroke:var(--chem);stroke-width:2"/><ellipse cx="294" cy="120" rx="10" ry="16" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="288" cy="120" r="3" style="fill:var(--ink)"/><text x="52" y="76" style="font-size:11px;fill:var(--muted)">big objective</text><text x="196" y="82" style="font-size:11px;fill:var(--muted)">small eyepiece</text><text x="10" y="186" style="font-size:11px;fill:var(--ink)">wide beam in, narrow beam out</text></svg>'
life:
  - 'Binoculars at a cricket stadium or a bird sanctuary, with two telescopes side by side.'
  - 'The zoom on a phone camera, where a lens group moves to change the angle the scene fills.'
  - 'A school or pathology lab microscope showing blood cells, bacteria or plant cells from a stained slide.'
  - 'A watchmaker''s loupe and the magnifier that helps read the fine print on a loan document.'
  - 'Observatories on high mountains such as the Indian Astronomical Observatory at Hanle in Ladakh, where a big mirror gathers faint starlight.'
models:
  - name: 'More zoom is not more detail'
    text: 'Past a point, magnifying only makes the blur bigger. The same thing happens when you enlarge a low-resolution photo or quote an estimate to six decimal places. First ask what limits the sharpness of the input, and stop magnifying where it runs out.'
  - name: 'Gather first, magnify second'
    text: 'A telescope''s first job is to collect light, in proportion to the area of the big lens or mirror. Amplifying a weak signal also amplifies the noise, so improve what you collect (more data, a bigger sample) before you amplify it.'
  - name: 'Two stages multiply'
    text: 'A microscope gets its power from two modest stages whose effects multiply: objective and eyepiece. Gears, compound interest and a team of specialists each doing one step well all beat a single heroic stage.'
links:
  - leaf: 'phy/the-human-eye'
    name: 'The human eye'
    same: 'Every instrument is built around the eye, which sets the reference: the 25 cm near point and about one arcminute of resolution. The eye is itself a small lens with a pupil as its aperture.'
    differs: 'The eye is limited to a few millimetres of aperture and cannot be adjusted beyond a small range. An instrument can have a far bigger aperture, which gathers more light and resolves finer detail.'
  - leaf: 'phy/diffraction'
    name: 'Diffraction'
    same: 'The limit on telescope resolution, $\theta \approx 1.22\lambda/D$, is diffraction at the aperture: the same wave spreading you meet through a narrow slit.'
    differs: 'A slit gives a pattern of bright and dark bands, while a round telescope aperture gives a central disc with faint rings. Both depend on the ratio of wavelength to opening size.'
next:
  q: 'Even a flawless lens cannot show you a single atom, however much it magnifies, because light itself is a wave and waves smear. What does it really mean for light to be a wave, and how does a wave decide where to go next?'
  leaf: 'phy/huygens-principle'
  name: 'Huygens'' principle'
symbols:
  - s: 'm'
    means: 'magnifying power: angle subtended by the image divided by angle subtended by the object (no unit)'
  - s: 'D'
    means: 'near point of the eye, 25 cm (cm)'
  - s: 'f'
    means: 'focal length of the magnifying lens (cm)'
  - s: 'L'
    means: 'distance between the objective and eyepiece images, roughly the tube length of the microscope (cm)'
  - s: 'f_o'
    means: 'focal length of the objective lens (cm)'
  - s: 'f_e'
    means: 'focal length of the eyepiece lens (cm)'
---

:::hook
q: So what's your guess: why can't you see a tiny ant's legs clearly just by bringing it right up to your eye?
options: ["The ant is too dark", "Closer than about 25 cm the eye cannot focus", "The image becomes upside down"]
answer: 1
right: Right. Bringing the ant closer makes it look bigger, but closer than your near point (about 25 cm) the eye's lens cannot get fat enough to focus. A magnifier does the focusing for you, so you can bring the ant much closer and still see it sharp.
wrong: Closer things look bigger, so why not bring it right against your eye? The catch is what the eye can do at that range: its lens can only get so fat before the picture falls behind the retina and blurs.
:::

## What instruments really magnify {lvl=2 id=s-angular label="Class 12"}

How big something looks depends on the **angle** it subtends at your eye, not on its actual size. A coin at arm's length can hide the Moon. To see detail, you want a larger angle on the retina.

An instrument's **magnifying power** (angular magnification) is

$$m = \frac{\text{angle subtended by the final image}}{\text{angle subtended by the object seen directly}}.$$

For a microscope or magnifier, "seen directly" means held at the near point, $D = 25$ cm, the closest the eye can manage. For a telescope it means seen at its actual distance.

## The simple magnifier {lvl=2 id=s-magnifier label="Class 12"}

A convex lens of short focal length held close to the eye lets you place the object inside its focus, much closer than 25 cm, and still see a sharp, erect, virtual image.

- **Image at the near point** (maximum magnification, slightly tiring): $m = 1 + \dfrac{D}{f}$.
- **Image at infinity** (relaxed eye, object at the focus): $m = \dfrac{D}{f}$.

With $f = 5$ cm, $m$ is 5 to 6. The image's angular size equals the object's angular size from the lens; the gain comes from being able to hold the object much closer than 25 cm. NCERT's Exercises 9.22–9.25 explore this difference between linear magnification ($v/u$) and magnifying power.

In practice a single lens cannot usefully go beyond about 3× to 10×: very short focal lengths are hard to grind and suffer strong aberrations.

## The compound microscope {lvl=2 id=s-microscope label="Class 12"}

Two converging lenses in a tube multiply their effects. The **objective**, of very short focal length, sits close to the object (just outside its focus) and forms a real, inverted, enlarged image inside the tube. The **eyepiece**, used as a magnifier, then enlarges that image further.

:::figure caption="Compound microscope: the objective forms a real enlarged image (inside the tube); the eyepiece magnifies it into a large virtual image."
<svg viewBox="0 0 360 180" role="img" aria-label="Ray diagram of a compound microscope">
<line class="faint" x1="10" y1="70" x2="350" y2="70" style="stroke-dasharray:6 4"/>
<path d="M80 40 Q88 70 80 100 Q72 70 80 40z" class="m2" style="stroke:var(--phy);stroke-width:1.4"/>
<path d="M220 30 Q230 70 220 110 Q210 70 220 30z" class="m2" style="stroke:var(--phy);stroke-width:1.4"/>
<line class="pen" x1="55" y1="70" x2="55" y2="64" style="stroke-width:3"/>
<line class="ray" x1="55" y1="64" x2="180" y2="94"/><polyline class="ray" points="55,64 80,64 180,94"/>
<line x1="180" y1="70" x2="180" y2="94" style="stroke:var(--chem);stroke-width:3;opacity:.7"/>
<polyline class="ray" points="180,94 220,94 340,46"/><polyline class="ray" points="180,94 220,70 340,-2"/>
<line class="faint" x1="220" y1="94" x2="100" y2="142"/><line class="faint" x1="220" y1="70" x2="100" y2="142"/>
<line x1="100" y1="70" x2="100" y2="142" style="stroke:var(--bio);stroke-width:3;stroke-dasharray:5 3"/>
<text x="62" y="30">objective</text><text x="200" y="22">eyepiece</text><text x="30" y="58">object</text><text x="196" y="127">first image</text><text x="20" y="160">final virtual image</text>
</svg>
:::

The total magnifying power is the product of the objective's linear magnification and the eyepiece's angular magnification:

$$m = m_o\,m_e = \frac{v_o}{|u_o|}\left(1 + \frac{D}{f_e}\right)\ \text{(image at } D),\qquad m \approx \frac{L}{f_o}\cdot\frac{D}{f_e}\ \text{(normal adjustment)},$$

where $L$, the **tube length**, is the distance between the second focal point of the objective and the first focal point of the eyepiece (often 16 cm). Both focal lengths must be short for high magnification.

:::qc lvl=2
q: A microscope has fₒ = 1 cm, fₑ = 2.5 cm and tube length 16 cm. What is its magnifying power in normal adjustment?
options: ["40", "160", "400"]
answer: 1
right: Right. m ≈ (16/1)(25/2.5) = 16 × 10 = 160.
wrong: Use m ≈ (L/fₒ)(D/fₑ) with D = 25 cm.
:::

## Telescopes {lvl=2 id=s-telescope label="Class 12"}

A telescope makes distant objects subtend a larger angle. In the **astronomical (refracting) telescope**, an **objective** of long focal length $f_o$ and large aperture forms a real, inverted image of the distant object at its focal plane. A short-focus **eyepiece** magnifies that image.

- **Normal adjustment** (final image at infinity, relaxed eye): $m = \dfrac{f_o}{f_e}$, and the tube length is $f_o + f_e$.
- **Final image at the near point**: $m = \dfrac{f_o}{f_e}\left(1 + \dfrac{f_e}{D}\right)$.

The image is inverted, which does not matter for stars. **Terrestrial telescopes** add an erecting lens, and binoculars use totally reflecting prisms both to erect the image and to fold the long light path.

**Reflecting telescopes** replace the objective lens with a concave mirror. Mirrors have no chromatic aberration, can be made parabolic to remove spherical aberration, and can be very large because they can be supported from behind; a lens can be held only at its edge and sags under its own weight. All the largest telescopes are reflectors. In the **Cassegrain** design a small convex secondary mirror sends the light back through a hole in the primary to the eyepiece or camera, giving a long focal length in a short tube.

## Light gathering and resolution {lvl=3 id=s-resolution label="JEE"}

A telescope's first job is often to collect light, not to magnify. The light gathered is proportional to the objective's area, $D^2$: an 8 m telescope collects about $(8/0.007)^2 \approx 1.3$ million times as much light as a 7 mm dark-adapted pupil, revealing objects far too faint for the eye.

Its second job is to **resolve** detail. Diffraction at the aperture smears each point into a tiny disc, so two stars closer than about

$$\theta \approx 1.22\,\frac{\lambda}{D}$$

merge into one. Bigger apertures resolve finer detail. Magnification beyond the point where this blur becomes as large as the eye can see (about 1 arcminute) shows nothing new; it only enlarges the blur.

## The exit pupil and the eye ring {lvl=4 id=s-exitpupil label="Olympiad"}

All the light from the objective that passes through the instrument crosses a small region just behind the eyepiece: the image of the objective formed by the eyepiece, called the **eye ring** or **exit pupil**. Your eye should sit there; NCERT's Exercise 9.25(e) asks why.

For a telescope in normal adjustment, the objective is a distance $f_o + f_e$ in front of the eyepiece, so its image forms at

$$v = \frac{f_e(f_o + f_e)}{f_o}$$

behind the eyepiece, a little beyond $f_e$, and its diameter is the objective's diameter divided by the magnifying power, $D_{\text{obj}}\,f_e/f_o$. If the exit pupil is larger than your pupil, some of the collected light is wasted; that is why night-observing binoculars use a modest magnification for their aperture.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Instruments increase the angle subtended at the eye; magnifying power is a ratio of angles. {lvl=2}
2. Simple magnifier: $m = 1 + D/f$ (image at 25 cm) or $D/f$ (image at infinity). {lvl=2}
3. Compound microscope: short-focus objective and eyepiece; $m \approx (L/f_o)(D/f_e)$. {lvl=2}
4. Telescope: long-focus objective, short-focus eyepiece; $m = f_o/f_e$, length $f_o + f_e$. {lvl=2}
5. Reflecting telescopes avoid chromatic aberration and can be built much larger. {lvl=2}
6. Light gathered ∝ $D^2$; resolution limit $1.22\lambda/D$. {lvl=3}
7. The eye belongs at the exit pupil, the eyepiece's image of the objective. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Linear magnification ($v/u$) and magnifying power (ratio of angles) are different; they agree only when the image is at 25 cm. {lvl=2}
- In a microscope the object sits just outside $f_o$; in a telescope the object is at infinity. {lvl=2}
- For two-lens problems, find the eyepiece's object distance from the required final image first, then work back to the objective. {lvl=2}
- A telescope's tube length is $f_o + f_e$ only in normal adjustment. {lvl=2}
:::
