---
title: Lenses and the lens formula
summary: 'How curved glass gathers light into a picture, and the one rule that tells you exactly where the picture lands.'
ncert: ["Class 8 Curiosity · Ch 10 Light: Mirrors and Lenses", "Class 10 Science · Ch 9 Light – Reflection and Refraction (§9.3.3–9.3.6)", "Class 12 Physics · Ch 9 Ray Optics (§9.5)"]
up_to: Olympiad
builds_on: [Refraction and Snell's law, Spherical mirrors (sign convention), Similar triangles]
notes_prompt: Explain why a lens that is thick in the middle brings light together, using only the idea that glass slows light down.
margin:
  - kind: history
    title: History
    text: Spectacle lenses appeared in Italy around 1286. Three centuries later, lens grinders in the Netherlands combined two lenses and invented both the telescope and the microscope.
  - kind: tip
    title: Board favourite
    text: "Lens formula 1/v − 1/u = 1/f has a minus sign; the mirror formula has a plus. Magnification is +v/u for lenses and −v/u for mirrors."
  - kind: olympiad
    title: Olympiad link
    text: A thin lens adds the same optical path to every ray from a point to its image. That is why all those rays arrive in step and form a sharp image.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 18 Geometrical Optics (refraction at spherical surfaces, thin lenses)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.1 Photometry and geometrical optics" }
  - { title: "Resnick, Halliday & Krane, Physics Vol. 2", ref: "chapter on mirrors and lenses" }
cards:
  - { front: "Write the lens formula and the magnification for a lens.", back: "$\\dfrac1v - \\dfrac1u = \\dfrac1f$ and $m = \\dfrac{h'}{h} = \\dfrac{v}{u}$, with the New Cartesian sign convention." }
  - { front: "Define 1 dioptre.", back: "The power of a lens of focal length 1 metre. $P = 1/f$ with $f$ in metres; convex lenses have positive power, concave lenses negative." }
  - { front: "Power of lenses in contact?", back: "Powers add: $P = P_1 + P_2 + \\dots$, equivalently $\\dfrac1F = \\dfrac1{f_1} + \\dfrac1{f_2} + \\dots$" }
  - { front: "Lens maker's formula?", back: "$\\dfrac1f = (n - 1)\\left(\\dfrac1{R_1} - \\dfrac1{R_2}\\right)$, with $n$ the index of the lens relative to the surrounding medium." }
  - { front: "Half of a convex lens is covered. What happens to the image?", back: "The full image still forms, but it is dimmer, because every part of the lens forms the whole image." }
  - { front: "Displacement method: object and screen D apart, two sharp positions x apart. Focal length?", back: "$f = \\dfrac{D^2 - x^2}{4D}$, possible only if $D \\ge 4f$." }
core:
  idea: 'For a thin lens and paraxial rays, object distance $u$, image distance $v$ and focal length $f$ obey $\frac{1}{v}-\frac{1}{u}=\frac{1}{f}$, with $m = v/u$. The focal length is set by the glass and the two radii through the lens maker''s formula.'
  formulas:
    - tex: '\frac{1}{v} - \frac{1}{u} = \frac{1}{f}'
      label: 'Thin-lens formula'
    - tex: 'm = \frac{h''}{h} = \frac{v}{u}'
      label: 'Magnification'
    - tex: '\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)'
      label: 'Lens maker''s formula (lens in air)'
  conditions:
    - 'A thin lens: thickness small compared with the focal length, with distances measured from the optical centre'
    - 'Paraxial rays, close to the axis and at small angles to it'
    - 'Monochromatic light, so there is no chromatic aberration'
    - 'The lens is surrounded by one uniform medium; in a medium $n_m$, replace $n$ by $n/n_m$'
  sign: 'The lens formula has a minus and $m = +v/u$, whereas the mirror formula has a plus and $m = -v/u$. With New Cartesian signs, $u < 0$, $f > 0$ for convex and $f < 0$ for concave.'
outcomes:
  - 'Draw ray diagrams for convex and concave lenses and describe the image for each object position'
  - 'Apply the lens formula, magnification and power $P = 1/f$ with the New Cartesian sign convention'
  - 'Use the lens maker''s formula, including a lens placed in a different medium'
  - 'Find the focal length of lens combinations and of silvered lenses'
  - 'Solve problems on the displacement method, the $4f$ minimum distance and the achromatic doublet'
opener:
  story: |
    Take a magnifying glass out into the sun and hold it over a scrap of paper. Move it up and down until the light shrinks to a tiny, dazzling dot. In a few seconds the paper smokes. The glass itself stays cool. It has not made any heat: it has only gathered the sunlight falling on a hand-sized patch and dropped it all onto one spot.

    Here is the odd part. That bright dot is not just a dot. It is a tiny **picture of the Sun**, drawn by the glass on the paper. The Sun is simply the brightest thing the glass has ever been shown.

    If a lump of glass can draw the Sun, it can draw anything. So walk indoors, hold the same glass up to a window across the room, and put the paper behind it. Slide the paper back and forth until something sharp appears.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A magnifying glass gathers parallel sunlight into a bright dot on a sheet of paper"><line x1="0" y1="110" x2="320" y2="110" style="stroke:var(--muted);stroke-dasharray:4 4;stroke-width:1"/><circle cx="30" cy="110" r="16" style="fill:var(--chem);stroke:none"/><path d="M150 60 Q176 110 150 160 Q124 110 150 60Z" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><polyline points="56,80 150,80 262,110" style="fill:none;stroke:var(--chem);stroke-width:2"/><polyline points="56,110 150,110 262,110" style="fill:none;stroke:var(--chem);stroke-width:2"/><polyline points="56,140 150,140 262,110" style="fill:none;stroke:var(--chem);stroke-width:2"/><rect x="262" y="84" width="8" height="52" rx="2" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.5"/><circle cx="262" cy="110" r="4" style="fill:var(--bad)"/><path d="M258 98 Q252 88 258 78" style="fill:none;stroke:var(--muted);stroke-width:1.5"/><text x="14" y="142" style="font-size:11px;fill:var(--muted)">Sun</text><text x="136" y="180" style="font-size:11px;fill:var(--muted)">glass</text><text x="242" y="154" style="font-size:11px;fill:var(--muted)">paper</text><text x="20" y="214" style="font-size:11px;fill:var(--ink)">the bright dot: a tiny picture of the Sun</text></svg>'
life:
  - 'Spectacles and contact lenses: a slice of curved glass or plastic sitting in front of your eye, chosen by its power in dioptres.'
  - 'The camera in your phone: a stack of tiny lenses draws a sharp picture of the scene on a chip, however small the phone.'
  - 'A jeweller''s or watch repairer''s loupe, and the magnifier you use to read small print on a medicine strip.'
  - 'A water drop on a leaf or a round fish bowl: each acts as a lens, which is why a bowl of water can make the world behind it look upside down.'
  - 'Cinema and classroom projectors: a lens throws a big picture of a small slide onto the wall.'
models:
  - name: 'Many small nudges make one big focus'
    text: 'A lens does not do anything dramatic to any one ray. It nudges each ray a little, more at the edge than at the middle, and the sum of the nudges brings them all to one point. Big results often come from a small, well-chosen adjustment applied everywhere.'
  - name: 'Carry the sign, not the case'
    text: 'Pick a sign convention once, and one formula covers every position of the object, near or far, real or virtual. A negative answer is not an error, it is information, just as a negative balance in your account tells you the direction as well as the size.'
  - name: 'Add the strengths, not the sizes'
    text: 'Stack two lenses and their powers (1/f) add, not their focal lengths. The same pattern appears whenever two helpers work together: two taps filling a tank add their rates, not their times.'
links:
  - leaf: 'phy/spherical-mirrors'
    name: 'Spherical mirrors'
    same: 'The same job: gather parallel rays at a focus and draw a picture from the three standard rays. The ray rules and the focus idea carry over almost word for word.'
    differs: 'A mirror turns light back by reflection; a lens bends it as it passes through glass. So the formula changes sign ($1/v + 1/u$ for mirrors, $1/v - 1/u$ for lenses), and a mirror has no colour fringes.'
  - leaf: 'phy/resistors-in-series-and-parallel'
    name: 'Resistors in parallel'
    same: 'The same reciprocal pattern: lenses in contact add $1/f$, and resistors in parallel add $1/R$. In both, the extra path or extra lens makes the total effect stronger.'
    differs: 'In the lens case, a positive and a negative power can cancel to give a flat sheet of glass. Resistances never go negative, so extra resistors in parallel can only lower the total resistance.'
next:
  q: 'Look closely at a cheap magnifying glass and you may see coloured fringes around bright edges. The light that went in was white, so where do the colours come from?'
  leaf: 'phy/prism-and-dispersion'
  name: 'Prism and dispersion'
symbols:
  - s: 'f'
    means: 'focal length: distance from the lens to the point where parallel rays meet (cm or m)'
  - s: 'u'
    means: 'object distance from the optical centre, negative for a real object (cm or m)'
  - s: 'v'
    means: 'image distance from the optical centre (cm or m)'
  - s: 'm'
    means: 'magnification: image height divided by object height (no unit)'
  - s: 'h'''
    means: 'height of the image (cm or m)'
  - s: 'h'
    means: 'height of the object (cm or m)'
  - s: 'n'
    means: 'refractive index of the lens material (no unit)'
  - s: 'R_1'
    means: 'radius of curvature of the first surface the light meets (cm or m)'
  - s: 'R_2'
    means: 'radius of curvature of the second surface (cm or m)'
---

:::hook
q: So what's your guess: held at arm's length towards a window across the room, what lands on the paper behind the glass?
options: ["A bigger, upright window", "A tiny, upside-down window", "Just a blur of light"]
answer: 1
right: Right, and now you know the burning dot was the same trick. Anything far beyond the glass's focus lands as a small, upside-down, real picture. Only when you hold the thing close, inside the focus, does the glass magnify it and keep it upright, the way you use it for reading.
wrong: Try it on any sunny day. Far things are beyond the glass's focus, and they land on the paper as a small, upside-down picture (the burning dot is the Sun's own tiny picture). The big, upright view only appears when the thing is held close.
:::

## Words you need {lvl=1 id=s-words}

A **lens** is a transparent body bounded by two surfaces, at least one of them curved. A lens that is **thicker in the middle** than at the edges is **convex**: it bends parallel light together, so it is **converging**. A lens that is **thinner in the middle** is **concave** and **diverging**.

:::figure caption="A convex lens. Rays parallel to the axis converge to F₂; a ray through the optical centre O goes straight on."
<svg viewBox="0 0 360 190" role="img" aria-label="Convex lens with principal foci and optical centre">
<line class="faint" x1="10" y1="100" x2="350" y2="100" style="stroke-dasharray:6 4"/>
<path class="m2" d="M180 25 Q205 100 180 175 Q155 100 180 25z" style="stroke:var(--phy);stroke-width:1.5"/>
<line class="ray" x1="10" y1="55" x2="180" y2="55"/><line class="ray" x1="180" y1="55" x2="300" y2="122.5"/>
<line class="ray" x1="10" y1="145" x2="180" y2="145"/><line class="ray" x1="180" y1="145" x2="300" y2="77.5"/>
<circle class="obj" cx="260" cy="100" r="3.5"/><circle class="obj" cx="100" cy="100" r="3.5"/><circle class="obj" cx="180" cy="100" r="3"/><circle class="obj" cx="340" cy="100" r="3"/><circle class="obj" cx="20" cy="100" r="3"/>
<text class="k" x="254" y="92">F₂</text><text class="k" x="94" y="92">F₁</text><text class="k" x="184" y="114">O</text><text x="330" y="118">2F₂</text><text x="10" y="118">2F₁</text>
<line class="gr" x1="180" y1="176" x2="260" y2="176"/><text x="216" y="188">f</text>
</svg>
:::

| Term | Meaning |
|---|---|
| Optical centre O | The centre of the lens; a ray through it passes undeviated |
| Principal axis | The line through O joining the centres of curvature of the two surfaces |
| Principal foci F₁, F₂ | A lens has two foci, one on each side, equally far from O |
| Focal length f | The distance OF |
| Aperture | The diameter of the lens's outline |

A lens is **thin** when its thickness is small compared with its focal length. Everything below, up to Class 12, assumes thin lenses.

## Drawing the image: three special rays {lvl=1 id=s-rays}

1. A ray **parallel to the axis** passes **through F₂** after refraction (convex), or appears to come from F₁ (concave).
2. A ray **through F₁** (convex), or heading towards F₂ (concave), emerges **parallel to the axis**.
3. A ray **through the optical centre** passes **undeviated**.

:::widget name=optics-bench types=convex-lens,concave-lens u=30 f=12
:::

| Object position (convex lens) | Image position | Image |
|---|---|---|
| At infinity | At F₂ | Real, inverted, highly diminished (a point) |
| Beyond 2F₁ | Between F₂ and 2F₂ | Real, inverted, diminished |
| At 2F₁ | At 2F₂ | Real, inverted, same size |
| Between F₁ and 2F₁ | Beyond 2F₂ | Real, inverted, enlarged |
| At F₁ | At infinity | Real, inverted, infinitely large |
| Between F₁ and O | Same side as the object | Virtual, erect, enlarged |

A **concave** lens always forms a virtual, erect, diminished image between its focus F₁ and O, on the same side as the object. For an object at infinity the image is a point at F₁.

:::qc
q: An object sits exactly at 2F₁ of a convex lens. Describe the image.
options: ["At 2F₂, real, inverted, same size", "At F₂, real, point-sized", "Virtual, erect, enlarged"]
answer: 0
right: Right. Object at 2F₁ gives a same-size, real, inverted image at 2F₂, the symmetric position.
wrong: Look at the table row for an object at 2F₁.
:::

## Sign convention and the lens formula {lvl=1 id=s-formula}

Lenses use the same New Cartesian sign convention as mirrors, with distances measured from the **optical centre**. Light travels left to right, so $u$ is negative for a real object; a convex lens has positive $f$ and a concave lens negative $f$.

:::law caption="u, v and f measured from the optical centre, with signs."
$$\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$$
:::

$$m = \frac{h'}{h} = \frac{v}{u}$$

A positive $v$ means the image is on the far side of the lens, where light actually goes: a real image. A negative $m$ means inverted.

:::worked title="NCERT Example 9.3"
A concave lens has focal length of 15 cm. At what distance should the object from the lens be placed so that it forms an image at 10 cm from the lens? Also, find the magnification produced by the lens.

A concave lens always forms a virtual, erect image on the object's side, so $v = -10$ cm and $f = -15$ cm.

$$\frac1u = \frac1v - \frac1f = -\frac{1}{10} + \frac{1}{15} = \frac{-3 + 2}{30} \;\Rightarrow\; u = -30 \text{ cm}$$

$$m = \frac{v}{u} = \frac{-10}{-30} = +0.33$$

The object is 30 cm from the lens; the image is erect, virtual and one-third the size.
:::

:::worked title="NCERT Example 9.4"
A 2.0 cm tall object is placed perpendicular to the principal axis of a convex lens of focal length 10 cm. The distance of the object from the lens is 15 cm. Find the nature, position and size of the image. Also find its magnification.

$h = +2.0$ cm, $f = +10$ cm, $u = -15$ cm.

$$\frac1v = \frac1u + \frac1f = -\frac{1}{15} + \frac{1}{10} = \frac{1}{30} \;\Rightarrow\; v = +30 \text{ cm}$$

$$m = \frac{v}{u} = \frac{30}{-15} = -2, \qquad h' = mh = -4.0 \text{ cm}$$

The image is 30 cm on the other side of the lens, real, inverted and twice the size.
:::

## Power of a lens {lvl=1 id=s-power}

A lens with a shorter focal length bends light more strongly. Its **power** is the reciprocal of the focal length in metres:

$$P = \frac{1}{f\,(\text{in metres})}$$

The unit is the **dioptre** (D): 1 D is the power of a lens of focal length 1 m, so $1\text{ D} = 1\text{ m}^{-1}$. Convex lenses have positive power and concave lenses negative power. Opticians prescribe lenses by power, because the powers of lenses in contact simply add:

$$P = P_1 + P_2 + P_3 + \dots$$

A +2.0 D lens has $f = +0.50$ m; a −2.5 D lens has $f = -0.40$ m.

:::qc
q: What is the power of a concave lens of focal length 25 cm?
options: ["+4 D", "−4 D", "−0.25 D"]
answer: 1
right: Right. f = −0.25 m, so P = 1/(−0.25) = −4 D.
wrong: Convert to metres first and keep the sign: a concave lens has negative f.
:::

## Covering half a lens {lvl=1 id=s-half}

Every point of a lens receives light from every point of the object and sends it on to the corresponding image point. Covering half the lens removes half of the rays for each image point, but the remaining half still meet in the same places. So the **full image still forms; it is just dimmer**. NCERT asks you to check this by experiment, and it works: try covering half a magnifying glass while focusing sunlight or a window on a wall.

## Where the lens formula comes from {lvl=2 id=s-surface label="Class 12"}

Start with one curved boundary. Light in a medium of index $n_1$ meets a spherical surface of radius $R$ bounding a medium of index $n_2$. Apply Snell's law at the point of incidence, use small angles, and relate the angles to distances along the axis. The result, for paraxial rays, is

:::eq caption="Refraction at a single spherical surface (signs from the New Cartesian convention; R positive if the centre of curvature is on the outgoing side)."
$$\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$$
:::

A thin lens is two such surfaces back to back. The first surface forms an intermediate image inside the glass; that image acts as the object for the second surface. Adding the two equations eliminates the intermediate distance and gives the **lens maker's formula** for a lens of index $n$ in air:

$$\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right), \qquad \frac1v - \frac1u = \frac1f.$$

The lens formula and the focal length both drop out of one argument.

**A lens in another medium.** If the surrounding medium has index $n_m$, replace $n$ by $n/n_m$. A glass lens ($n = 1.5$) in water ($n = 1.33$) has a much longer focal length. An air bubble inside glass has $n/n_m < 1$, so a convex-shaped bubble acts as a **diverging** lens.

:::qc lvl=2
q: A biconvex lens is made of glass of index 1.5. It is placed in a liquid of index 1.6. How does it behave?
options: ["Converging, shorter f", "Converging, longer f", "Diverging"]
answer: 2
right: Right. Relative index 1.5/1.6 < 1, so (n_rel − 1) is negative and the lens diverges.
wrong: Use the relative index n_lens/n_medium. Is it more or less than 1?
:::

## Lenses in combination {lvl=3 id=s-combo label="JEE Advanced"}

**In contact:** the image from the first lens is the object for the second. Adding the two lens equations gives $\dfrac1F = \dfrac1{f_1} + \dfrac1{f_2}$.

**Separated by a distance $d$** (in air):

$$\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}.$$

Two converging lenses can combine into a diverging system if they are far enough apart. Eyepieces and camera lenses use this to control focal length and aberrations.

**Silvered lenses.** Coat the back surface of a lens with silver. Light passes through the lens, reflects from the silvered surface and passes through the lens again, so the system acts as a single mirror whose converging power is

$$P_{\text{eq}} = 2P_{\text{lens}} + P_{\text{mirror}}.$$

A plano-convex lens silvered on its **plane** face behaves as a concave mirror of focal length $f/2$. Silvered on its **curved** face (radius $R$), it behaves as a concave mirror of focal length $R/2n$.

## Measuring f: the displacement method {lvl=3 id=s-displacement label="JEE"}

Fix an object and a screen a distance $D$ apart and slide a convex lens between them. If $D > 4f$, two lens positions give a sharp image. By reversibility, they are symmetric: if one has object distance $a$ and image distance $b$, the other has them swapped. With $a + b = D$ and $b - a = x$ (the distance between the two positions),

$$f = \frac{ab}{a + b} = \frac{D^2 - x^2}{4D}.$$

The two images have sizes $h_1$ and $h_2$ with $h_1 h_2 = h^2$, so the object size is $\sqrt{h_1 h_2}$. When $D = 4f$ the two positions merge: **the shortest object-to-real-image distance for a convex lens is $4f$**.

## Newton's form and the shortest distance {lvl=3 id=s-newton label="Irodov"}

Measure the object distance $x$ from F₁ and the image distance $x'$ from F₂. The lens formula becomes

$$x\,x' = f^2 \quad(\text{magnitudes}).$$

The object-to-image distance for a real image is $2f + x + x'$. With $xx' = f^2$, the AM–GM inequality gives $x + x' \ge 2f$, so the minimum is $4f$ at $x = x' = f$, the same result as the displacement method.

## Chromatic aberration and the achromatic doublet {lvl=4 id=s-achromat label="Olympiad"}

Because $n$ depends on wavelength, $1/f = (n - 1)(1/R_1 - 1/R_2)$ does too: violet light focuses closer to the lens than red. Define the **dispersive power** of the glass as $\omega = (n_V - n_R)/(n_Y - 1)$. A lens's power then varies across the spectrum by $\Delta P = \omega P$.

Two lenses in contact made of different glasses have no chromatic aberration (for the two chosen colours) if their variations cancel:

$$\frac{\omega_1}{f_1} + \frac{\omega_2}{f_2} = 0.$$

Since $\omega$ is always positive, one lens must be converging and the other diverging, made of a more dispersive glass: a crown-glass convex lens cemented to a flint-glass concave lens. Every good camera and telescope objective is built this way.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Convex lenses converge light; concave lenses diverge it.
2. $\dfrac1v - \dfrac1u = \dfrac1f$ and $m = \dfrac{v}{u}$, with distances from the optical centre.
3. Convex lens: real inverted images for objects beyond F₁; virtual, erect, magnified for objects inside F₁. Concave lens: always virtual, erect, diminished.
4. $P = 1/f$ in metres, in dioptres; powers of lenses in contact add.
5. Covering part of a lens dims the image but keeps it complete.
6. Lens maker's formula $\dfrac1f = (n - 1)\left(\dfrac1{R_1} - \dfrac1{R_2}\right)$, with $n$ relative to the surrounding medium. {lvl=2}
7. Minimum object-to-real-image distance for a convex lens is $4f$; displacement method $f = (D^2 - x^2)/4D$. {lvl=3}
8. An achromatic doublet needs $\omega_1/f_1 + \omega_2/f_2 = 0$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Lens formula has a minus ($1/v - 1/u$); mirror formula has a plus. Lens magnification is $+v/u$; mirror magnification is $-v/u$.
- Convert focal length to metres before computing power, and keep the sign.
- For a concave lens the image is always on the object side, so $v$ is negative.
- In the lens maker's formula, $R$ is positive when the centre of curvature lies on the side the light goes towards; for a biconvex lens $R_1 > 0$ and $R_2 < 0$. {lvl=2}
- For two separated lenses, find the first image, then use it as the object for the second lens, measuring from the second lens. {lvl=3}
:::
