---
title: Spherical mirrors
summary: 'Why one side of a spoon shows you upside down and the other upright, and how a curved mirror starts fires.'
ncert: ["Class 8 Curiosity · Ch 10 Light: Mirrors and Lenses", "Class 10 Science · Ch 9 Light – Reflection and Refraction (§9.2)", "Class 12 Physics · Ch 9 Ray Optics (§9.2)"]
up_to: Olympiad
builds_on: [Laws of reflection, Similar triangles, Reciprocals and fractions]
notes_prompt: Explain why a concave mirror can make a real image but a convex mirror never can.
margin:
  - kind: history
    title: History
    text: Archimedes is said to have used concave mirrors to set Roman ships on fire at Syracuse. Whether it happened is doubtful, but solar furnaces today use the same idea.
  - kind: tip
    title: Board favourite
    text: "In the New Cartesian sign convention a concave mirror has a negative focal length and a convex mirror a positive one. Real images have negative v."
  - kind: olympiad
    title: Olympiad link
    text: Only a parabolic mirror sends every ray parallel to its axis through one focus. A spherical mirror is a good approximation near its pole.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 18 Geometrical Optics (reflection at curved surfaces)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.1 Photometry and geometrical optics" }
  - { title: "Resnick, Halliday & Krane, Physics Vol. 2", ref: "chapter on mirrors and lenses" }
cards:
  - { front: "Define the principal focus of a concave mirror.", back: "The point on the principal axis where rays parallel to the axis meet after reflection." }
  - { front: "Relation between focal length and radius of curvature of a spherical mirror?", back: "$f = R/2$, valid for rays close to the axis (paraxial rays)." }
  - { front: "Write the mirror formula and the magnification formula.", back: "$\\dfrac1v + \\dfrac1u = \\dfrac1f$ and $m = \\dfrac{h'}{h} = -\\dfrac{v}{u}$, with distances measured from the pole using the New Cartesian sign convention." }
  - { front: "Where must an object be placed for a concave mirror to give a virtual, erect, enlarged image?", back: "Between the pole P and the principal focus F." }
  - { front: "Why are convex mirrors used as rear-view mirrors?", back: "They always form an erect, diminished image and give a much wider field of view than a plane mirror." }
  - { front: "Longitudinal magnification of a small object lying along the axis?", back: "$m_L = -m^2$: lengths along the axis are magnified by the square of the transverse magnification." }
core:
  idea: 'For paraxial rays a spherical mirror has focal length $f = R/2$: rays parallel to the axis meet at (or appear to come from) the focus. Object distance $u$, image distance $v$ and $f$ obey the mirror formula, and the magnification is $m = -v/u$.'
  formulas:
    - tex: '\frac{1}{v} + \frac{1}{u} = \frac{1}{f}'
      label: 'Mirror formula'
    - tex: 'm = \frac{h''}{h} = -\frac{v}{u}'
      label: 'Magnification'
    - tex: 'f = \frac{R}{2}'
      label: 'Focal length and radius of curvature'
  conditions:
    - 'Paraxial rays: small aperture compared with $R$, rays close to the principal axis and at small angles to it'
    - 'A small object placed perpendicular to the principal axis'
    - 'A spherical surface, which focuses only approximately; only a parabolic mirror focuses parallel rays exactly'
  sign: 'New Cartesian convention: distances from the pole, positive along the incident light, so $u < 0$; $f < 0$ for a concave mirror and $f > 0$ for a convex one; a real image has $v < 0$.'
outcomes:
  - 'Define pole, centre of curvature, focus and focal length, and relate $f$ to $R$'
  - 'Draw ray diagrams for concave and convex mirrors and describe the image for each object position'
  - 'Apply the mirror formula and $m = -v/u$ with the New Cartesian sign convention'
  - 'Explain spherical aberration and why parabolic mirrors are used for telescopes and dishes'
  - 'Use longitudinal magnification $-m^2$, Newton''s form $xx'' = f^2$ and the $1/v$ against $1/u$ graph'
opener:
  story: |
    Pick up a steel spoon and look into the hollow side from arm's length. There you are: tiny, and upside down.

    Now flip the spoon and look at the bulging back. You are upright again, and a little smaller, as if seen from far away. Same spoon, same shiny metal, same you.

    A flat mirror never does this. It always gives an upright, same-size copy. So what does a curve do to light that a flat surface cannot?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A spoon: the hollow side shows a small upside-down face, the bulging side an upright one"><ellipse cx="90" cy="92" rx="44" ry="58" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><rect x="84" y="148" width="12" height="62" rx="6" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><circle cx="90" cy="92" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><circle cx="85" cy="98" r="1.8" style="fill:var(--ink)"/><circle cx="95" cy="98" r="1.8" style="fill:var(--ink)"/><path d="M83 84 Q90 78 97 84" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><ellipse cx="230" cy="92" rx="44" ry="58" style="fill:color-mix(in srgb,var(--c) 6%,var(--surface));stroke:var(--c);stroke-width:2"/><rect x="224" y="148" width="12" height="62" rx="6" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><circle cx="230" cy="92" r="9" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><circle cx="226" cy="89" r="1.4" style="fill:var(--ink)"/><circle cx="234" cy="89" r="1.4" style="fill:var(--ink)"/><path d="M225 96 Q230 101 235 96" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><text x="46" y="28" style="font-size:11px;fill:var(--muted)">hollow side</text><text x="170" y="28" style="font-size:11px;fill:var(--muted)">bulging back</text><text x="40" y="232" style="font-size:11px;fill:var(--muted)">upside down</text><text x="176" y="232" style="font-size:11px;fill:var(--muted)">upright, smaller</text></svg>'
life:
  - 'Torch, scooter and car headlights put the bulb at the focus of a concave reflector to throw a straight, parallel beam.'
  - 'A shaving or make-up mirror is concave: held close, it shows an upright, enlarged face.'
  - 'A dentist''s small mirror enlarges the tooth the dentist is looking at.'
  - 'Rear-view and side mirrors on cars and buses are convex: they show a wide view, which is why they warn that objects are closer than they appear.'
  - 'Solar cookers and satellite dishes gather parallel rays (sunlight, TV signals) to a single focus.'
models:
  - name: 'Every benefit has a price'
    text: 'A convex mirror buys a wide field of view by giving up true size and distance. A wide-angle phone lens, a one-page summary and a cheap flight all trade something away, so always ask what you paid.'
  - name: 'Gather and focus'
    text: 'Collecting something spread out into one spot makes it powerful: sunlight into a burning point, a week of effort into one hard problem, small savings into one investment. The concentration does the work.'
  - name: 'Fix the sign rules first'
    text: 'Before solving, pick one consistent rule for which distances are positive and which are negative. Accountants do the same with credit and debit; the discipline prevents most errors.'
links:
  - leaf: 'phy/lenses-and-the-lens-formula'
    name: 'Lenses and the lens formula'
    same: 'The lens formula is nearly the mirror formula in new clothes. A concave mirror and a convex lens both bring rays from one object point to one image point, so the same four ray-drawing rules and the same similar-triangle proof cover both.'
    differs: 'A mirror bounces light back on the same side; a lens sends it through the glass, bending it twice. That flips where the image appears and the signs of $f$ and $v$.'
  - leaf: 'phy/electromagnetic-waves'
    name: 'Electromagnetic waves'
    same: 'A satellite dish or radio telescope is a parabolic mirror for radio waves: rays arriving in parallel are all sent to one focus, exactly as in this lesson.'
    differs: 'Radio waves are metres to centimetres long, far longer than light, so a dish can be a coarse wire mesh, and diffraction limits its sharpness far more.'
next:
  q: 'A mirror turns light back by bouncing it. But a magnifying glass lets light pass straight through and still bends it. Why does light change direction just by entering water or glass? Why does a straw look broken in a glass of water?'
  leaf: 'phy/refraction-and-snells-law'
  name: 'Refraction and Snell''s law'
---

:::hook
q: So what's your guess? Which side of the spoon turns you upside down?
options: ["The back (bulging side)", "The front (hollow side)", "Neither"]
answer: 1
right: Right, the hollow side. It acts as a concave mirror that gathers light towards a focus. Beyond the focus the rays have crossed over, and crossed rays mean an upside-down image. The bulging side spreads the rays out so they never cross, which is why it always shows you upright.
wrong: Try it with a real spoon. The hollow side is a concave mirror, and it inverts anything placed beyond its focus. The bulging back is a convex mirror, which spreads rays out and always shows you upright and small.
:::

## Words you need {lvl=1 id=s-words}

A spherical mirror is a piece cut from a hollow, polished sphere. If the reflecting surface is the inside (curving inwards), it is **concave**; if it is the outside (bulging outwards), it is **convex**.

:::figure caption="A concave mirror. A ray parallel to the axis reflects through F; the normal at any point runs to C."
<svg viewBox="0 0 360 200" role="img" aria-label="Concave mirror with pole P, focus F, centre of curvature C">
<line class="faint" x1="20" y1="100" x2="340" y2="100" style="stroke-dasharray:6 4"/>
<path class="ln" d="M255 32.4 A160 160 0 0 1 255 167.6" style="stroke-width:2.6"/>
<line class="faint" x1="110" y1="100" x2="264.9" y2="60"/>
<line class="ray" x1="20" y1="60" x2="264.9" y2="60"/><line class="ray" x1="264.9" y1="60" x2="156.4" y2="120"/>
<circle class="obj" cx="110" cy="100" r="3.5"/><circle class="obj" cx="190" cy="100" r="3.5"/><circle class="obj" cx="270" cy="100" r="3.5"/>
<text class="k" x="104" y="118">C</text><text class="k" x="185" y="118">F</text><text class="k" x="276" y="118">P</text>
<text x="24" y="94">principal axis</text><text x="196" y="80">reflected ray</text>
<line class="gr" x1="110" y1="182" x2="270" y2="182"/><text x="180" y="196">R</text>
<line class="gr" x1="190" y1="160" x2="270" y2="160"/><text x="224" y="156">f</text>
</svg>
:::

| Term | Meaning |
|---|---|
| Pole P | The centre of the mirror's reflecting surface |
| Centre of curvature C | The centre of the sphere the mirror is part of |
| Radius of curvature R | The distance PC |
| Principal axis | The line through P and C |
| Principal focus F | Where rays parallel to the axis meet after reflection (concave), or seem to come from (convex) |
| Focal length f | The distance PF |
| Aperture | The width of the reflecting surface |

For mirrors whose aperture is small compared with $R$, the focus lies halfway between P and C:

$$f = \frac{R}{2}$$

## Drawing the image: four special rays {lvl=1 id=s-rays}

Any two of these rays from the top of an object locate the top of its image:

1. A ray **parallel to the axis** reflects **through F** (concave), or appears to come from F (convex).
2. A ray **through F** (concave), or heading towards F (convex), reflects **parallel to the axis**.
3. A ray **through C** (concave), or heading towards C (convex), strikes along the normal and **returns along itself**.
4. A ray striking the **pole** reflects symmetrically about the axis.

Try it: move the object and watch where the image forms. Three rays are drawn; the dashed lines show where reflected rays appear to come from when the image is virtual.

:::widget name=optics-bench types=concave-mirror,convex-mirror u=30 f=12
:::

| Object position (concave mirror) | Image position | Image |
|---|---|---|
| At infinity | At F | Real, inverted, highly diminished (a point) |
| Beyond C | Between F and C | Real, inverted, diminished |
| At C | At C | Real, inverted, same size |
| Between C and F | Beyond C | Real, inverted, enlarged |
| At F | At infinity | Real, inverted, highly enlarged |
| Between P and F | Behind the mirror | Virtual, erect, enlarged |

A **convex** mirror always gives a virtual, erect, diminished image between P and F behind the mirror; for an object at infinity the image is a point at F.

:::qc
q: You want a concave mirror to show your face upright and enlarged, as a shaving mirror does. Where must your face be?
options: ["Beyond C", "Between C and F", "Between P and F"]
answer: 2
right: Right. Only an object between the pole and the focus gives a virtual, erect, enlarged image.
wrong: Look at the table: which object position gives a virtual, erect, enlarged image?
:::

## Where you see them {lvl=1 id=s-uses}

- **Concave mirrors** concentrate light. Torches, searchlights and car headlights put the bulb at F to send out a parallel beam. Shaving and make-up mirrors use the enlarged upright image of a nearby face. Dentists use small ones to see enlarged images of teeth. Solar furnaces and solar cookers collect sunlight at F.
- **Convex mirrors** spread light. Rear-view and side mirrors on vehicles always give an erect, diminished image and cover a much wider field of view than a plane mirror of the same size. Shops and sharp road bends use them for the same reason.

## Sign convention and the mirror formula {lvl=1 id=s-formula}

To use one formula for every case, distances get signs. In the **New Cartesian sign convention**:

1. Distances are measured from the **pole**.
2. Distances measured in the direction of the incident light (taken left to right, with the object on the left) are **positive**; those against it are **negative**. So the object distance $u$ is always negative.
3. Heights above the principal axis are **positive**; heights below are **negative**.

With these signs, a concave mirror has negative $f$ and a convex mirror positive $f$. Then for every spherical mirror:

:::law caption="u = object distance, v = image distance, f = focal length, all measured from P with signs."
$$\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$$
:::

The **magnification** compares image height $h'$ with object height $h$:

$$m = \frac{h'}{h} = -\frac{v}{u}$$

A negative $m$ means an inverted (real) image; a positive $m$ means an erect (virtual) image; $|m| > 1$ means enlarged.

:::worked title="NCERT Example 9.1"
A convex mirror used for rear-view on an automobile has a radius of curvature of 3.00 m. If a bus is located at 5.00 m from this mirror, find the position, nature and size of the image.

With signs: $R = +3.00$ m, so $f = +1.50$ m; $u = -5.00$ m.

$$\frac1v = \frac1f - \frac1u = \frac{1}{1.50} + \frac{1}{5.00} = \frac{5.00 + 1.50}{7.50} \;\Rightarrow\; v = +1.15 \text{ m}$$

$$m = -\frac{v}{u} = -\frac{1.15}{-5.00} = +0.23$$

The image is 1.15 m behind the mirror, virtual and erect, and 0.23 times the size of the bus.
:::

:::worked title="NCERT Example 9.2"
An object, 4.0 cm in size, is placed at 25.0 cm in front of a concave mirror of focal length 15.0 cm. At what distance from the mirror should a screen be placed in order to obtain a sharp image? Find the nature and the size of the image.

$h = +4.0$ cm, $u = -25.0$ cm, $f = -15.0$ cm.

$$\frac1v = \frac1f - \frac1u = -\frac{1}{15.0} + \frac{1}{25.0} = \frac{-5 + 3}{75} \;\Rightarrow\; v = -37.5 \text{ cm}$$

$$h' = -\frac{v}{u}\,h = -\frac{-37.5}{-25.0}(4.0) = -6.0 \text{ cm}$$

Place the screen 37.5 cm in front of the mirror. The image is real, inverted and enlarged, 6.0 cm tall.
:::

## Deriving the mirror formula {lvl=2 id=s-derive label="Class 12"}

Take an object AB with B on the axis and its image A′B′ formed by a concave mirror. Use two rays from A: one through the pole, one parallel to the axis that reflects through F. For rays close to the axis, the mirror near P is almost a straight vertical line through P.

- The ray through P reflects symmetrically, so triangles ABP and A′B′P are similar: $\dfrac{A'B'}{AB} = \dfrac{B'P}{BP}$.
- The parallel ray strikes the mirror at height AB and passes through F. Triangles formed at F by this ray and by A′B′ give $\dfrac{A'B'}{AB} = \dfrac{B'F}{FP} = \dfrac{B'P - FP}{FP}$.

Equate the two ratios and insert signed distances ($BP = -u$, $B'P = -v$, $FP = -f$):

$$\frac{-v}{-u} = \frac{-v + f}{-f} \;\Rightarrow\; vf = uv - uf \;\Rightarrow\; \frac1f = \frac1u + \frac1v.$$

The same algebra with signs gives the same formula for a convex mirror and for virtual images. That is the payoff of the sign convention: one formula for every case.

:::qc lvl=2
q: A concave mirror forms a real image three times the size of the object, which is 10 cm from the mirror. What is m?
options: ["+3", "−3", "−1/3"]
answer: 1
right: Right. A real image from a mirror is inverted, so m = −3, which gives v = −30 cm.
wrong: Real images are inverted, so m is negative; enlarged means |m| = 3.
:::

## Why f = R/2, and where it fails {lvl=3 id=s-aberration label="JEE Advanced"}

A ray parallel to the axis at height $h$ strikes the mirror where the radius makes angle $\theta$ with the axis, $\sin\theta = h/R$. The angle of incidence is $\theta$, so the reflected ray makes $2\theta$ with the axis. The triangle formed by C, the point of incidence and the crossing point on the axis is isosceles, and the crossing point lies at a distance

$$x = R - \frac{R}{2\cos\theta}$$

from the pole. For small $\theta$, $\cos\theta \approx 1$ and $x \approx R/2$. For larger apertures, $x < R/2$: rays far from the axis cross closer to the mirror. A spherical mirror therefore does not bring all parallel rays to one point. This blurring is **spherical aberration**.

A **parabolic** mirror has no spherical aberration for rays parallel to its axis, which is why satellite dishes, telescope mirrors and good searchlights are parabolic. Near the pole, a sphere and a parabola of the same focal length are almost identical, so the paraxial results hold for both.

## Image speed and longitudinal magnification {lvl=3 id=s-longitudinal label="JEE Advanced"}

Differentiate the mirror formula with respect to time, with $f$ fixed:

$$-\frac{1}{v^2}\frac{dv}{dt} - \frac{1}{u^2}\frac{du}{dt} = 0 \;\Rightarrow\; \frac{dv}{dt} = -\frac{v^2}{u^2}\frac{du}{dt} = -m^2\,\frac{du}{dt}.$$

- An object moving along the axis drives its image along the axis at $m^2$ times its speed, in the opposite direction (in the sign convention).
- A short object of length $\Delta u$ lying along the axis forms an image of length $m^2\,\Delta u$: the **longitudinal magnification** is $-m^2$.

So a small cube in front of a concave mirror does not image as a cube: it is stretched along the axis by $m^2$ and across it by $|m|$.

## Newton's form {lvl=3 id=s-newton label="Irodov"}

Measure the object's distance $x$ and the image's distance $x'$ from the focus instead of from the pole. With $u = -(f_0 + x)$ and $v = -(f_0 + x')$, where $f_0 = |f|$ for a concave mirror, the mirror formula becomes

$$x\,x' = f^2.$$

This symmetric form makes many problems one-liners and shows at a glance that the object and image are on the same side of the focus.

## Graphs of v against u {lvl=3 id=s-graphs label="JEE"}

For a concave mirror, plotting $v$ against $u$ gives a rectangular hyperbola with asymptotes at $u = f$ and $v = f$. Plotting $1/v$ against $1/u$ gives a straight line of slope $-1$ meeting both axes at $1/f$. The second graph is the standard laboratory method for measuring $f$: take several readings, plot $1/v$ against $1/u$, and read $1/f$ from the intercept.

## Conic mirrors and caustics {lvl=4 id=s-conics label="Olympiad"}

Fermat's principle explains which shapes focus perfectly:

- An **ellipse** is the set of points with a fixed sum of distances to two foci. Every path from one focus to the mirror to the other has the same length, so all rays from one focus meet at the other. Whispering galleries work this way for sound.
- A **parabola** is the limit of an ellipse with one focus at infinity, so parallel rays meet at its focus.
- A **sphere** focuses perfectly only rays from its centre back to its centre.

Rays that do not meet at a point still crowd along a bright curve called a **caustic**. The bright cusp of light inside a coffee mug in sunlight is the caustic of a circular mirror. Its cusp sits at $R/2$ from the centre, on the paraxial focus, and its arms trace the spherical aberration worked out above.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. $f = R/2$ for rays close to the axis.
2. Concave mirrors converge light; convex mirrors diverge it.
3. Concave mirror: real inverted images for objects beyond F; a virtual, erect, enlarged image for objects between P and F.
4. Convex mirror: always virtual, erect, diminished.
5. $\dfrac1v + \dfrac1u = \dfrac1f$ and $m = -\dfrac{v}{u}$, with the New Cartesian sign convention.
6. A spherical mirror suffers spherical aberration; a parabolic mirror focuses parallel rays exactly. {lvl=3}
7. Image speed along the axis is $m^2$ times object speed; longitudinal magnification is $-m^2$. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Put signs in **before** substituting: $u$ is negative; $f$ is negative for concave and positive for convex mirrors.
- A negative $v$ from the formula means the image is in front of the mirror (real); positive means behind it (virtual).
- Use $m = -v/u$ for mirrors (with the minus sign). Lenses use $m = v/u$; do not mix them up.
- "Three times magnified real image" means $m = -3$, not $+3$.
- $f = R/2$ and the mirror formula assume paraxial rays. For a wide aperture, use the exact geometry. {lvl=3}
:::
