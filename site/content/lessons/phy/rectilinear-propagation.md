---
title: Rectilinear propagation
summary: 'Why the Sun makes crescent-shaped spots under a tree during an eclipse, and how a hole in a box paints the world.'
ncert: ["Class 7 Curiosity · Ch 11 Light: Shadows and Reflections", "Class 10 Science · Ch 9 (introduction)"]
up_to: Olympiad
builds_on: [Straight lines and similar triangles]
notes_prompt: Explain why the shadow of a bird flying high in the sky never reaches the ground.
margin:
  - kind: history
    title: History
    text: Ibn al-Haytham (about 1011 CE) used a darkened room with a small hole, the camera obscura, to show that light travels in straight lines from every point of an object.
  - kind: tip
    title: Board favourite
    text: In a pinhole camera, image height ÷ object height = image distance ÷ object distance, and the image is always inverted.
  - kind: olympiad
    title: Olympiad link
    text: Make a pinhole too small and the image gets blurrier, not sharper. Diffraction sets an optimum hole size of a fraction of a millimetre.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 22 Photometry" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.1 Photometry and geometrical optics" }
cards:
  - { front: "Luminous or non-luminous: Sun, Moon, Venus, a mirror, a lit candle?", back: "Luminous (give out their own light): Sun, lit candle. Non-luminous (only reflect light): Moon, Venus, mirror." }
  - { front: "Describe the image in a pinhole camera.", back: "Real, inverted, and scaled by image distance ÷ object distance." }
  - { front: "Difference between umbra and penumbra?", back: "Umbra: no light from the source reaches it (full shadow). Penumbra: part of the source is visible (partial shadow). Only extended sources make a penumbra." }
  - { front: "How long does sunlight take to reach the Earth?", back: "About 8 minutes 20 seconds (1.5 × 10¹¹ m ÷ 3 × 10⁸ m/s ≈ 500 s)." }
  - { front: "Illuminance at distance $r$ from a point source of intensity $I$, at angle $\\theta$ to the surface normal?", back: "$E = \\dfrac{I\\cos\\theta}{r^2}$ (inverse-square law with Lambert's cosine factor)." }
core:
  idea: 'In a uniform transparent medium light travels in straight lines called rays, so an opaque body casts a shadow. A point source of intensity $I$ spreads its light over $4\pi r^2$, so illuminance falls as $1/r^2$, with a factor $\cos\theta$ for a tilted surface.'
  formulas:
    - tex: 'E = \frac{I\cos\theta}{r^2}'
      label: 'Illuminance from a point source (inverse-square law with Lambert''s cosine law)'
    - tex: '\frac{h_{\text{image}}}{h_{\text{object}}} = \frac{d_{\text{screen}}}{d_{\text{object}}}'
      label: 'Pinhole camera, from similar triangles (image inverted)'
  conditions:
    - 'The medium is uniform (constant refractive index), so rays do not bend'
    - 'Apertures and obstacles are much larger than the wavelength, so diffraction is negligible'
    - 'A point source gives a sharp shadow; an extended source gives an umbra and a penumbra'
    - 'For the inverse-square law, the source is small compared with the distance and no light is absorbed on the way'
outcomes:
  - 'Classify bodies as luminous or non-luminous and materials as transparent, translucent or opaque'
  - 'Explain shadows and the inverted image of a pinhole camera using straight rays and similar triangles'
  - 'Distinguish umbra from penumbra and explain solar and lunar eclipses'
  - 'Apply the inverse-square and cosine laws to find the illuminance on a surface'
  - 'Explain why a smaller pinhole can give a worse image, and estimate the best size from diffraction'
opener:
  story: |
    Next time you stand under a leafy tree on a sunny day, look at the ground. It is dotted with bright coins of light. Not squares, not triangles, not the zigzag shapes of the gaps between the leaves. Round coins, nearly all of them.

    Now the strange part. During a partial solar eclipse, every one of those coins turns into a tiny crescent, copying the bitten Sun in the sky. Nobody told the leaves about the eclipse.

    The shape of the gap seems not to matter at all. So what is drawing a picture of the Sun on the ground, when there is no lens anywhere in sight?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Sunlight through a small gap in the leaves makes a round picture of the Sun on the ground"><circle cx="160" cy="30" r="14" style="fill:var(--chem)"/><text x="182" y="26" style="font-size:11px;fill:var(--muted)">the Sun</text><line x1="146" y1="30" x2="189" y2="200" style="stroke:var(--chem);stroke-width:1.5"/><line x1="174" y1="30" x2="131" y2="200" style="stroke:var(--chem);stroke-width:1.5"/><ellipse cx="140" cy="86" rx="112" ry="20" style="fill:color-mix(in srgb,var(--c) 25%,var(--surface));stroke:var(--c);stroke-width:2"/><circle cx="160" cy="86" r="3" style="fill:var(--surface)"/><line x1="10" y1="200" x2="310" y2="200" style="stroke:var(--muted);stroke-width:2"/><ellipse cx="160" cy="200" rx="29" ry="6" style="fill:var(--chem);opacity:.85"/><ellipse cx="64" cy="200" rx="29" ry="6" style="fill:var(--chem);opacity:.85"/><ellipse cx="256" cy="200" rx="29" ry="6" style="fill:var(--chem);opacity:.85"/><line x1="64" y1="86" x2="64" y2="196" style="stroke:var(--muted);stroke-dasharray:2 4"/><text x="176" y="120" style="font-size:11px;fill:var(--muted)">a tiny gap in the leaves</text><text x="68" y="226" style="font-size:11px;fill:var(--muted)">round pictures of the Sun</text></svg>'
life:
  - 'Round coins of light under a tree, and crescents of them during an eclipse, are pinhole pictures of the Sun.'
  - 'Shadows grow long in the evening and shrink at noon, which is how the stone gnomons at Jaipur''s Jantar Mantar read the time.'
  - 'Sunbeams through monsoon clouds, or a torch beam in a dusty room, look like straight rods because light really does go straight.'
  - 'Move your study lamp twice as far away and the page gets only a quarter of the light.'
  - 'A solar eclipse is the Moon''s shadow sweeping across the Earth; people travel to stand inside its narrow darkest strip.'
models:
  - name: 'Start with the simplest model'
    text: 'Assume light goes straight and you explain shadows, cameras and eclipses. Then learn exactly where the model fails (tiny holes, where waves spread). Every good model comes with a stated range.'
  - name: 'A fixed amount spread wider is thinner'
    text: 'The same light is shared over a bigger and bigger sphere, so each patch gets less. A teacher''s time over a larger class, or a fixed budget over more projects, thins out the same way.'
  - name: 'There is a sweet spot, not a more-is-better'
    text: 'A smaller pinhole is sharper by geometry but blurrier by diffraction, so the best size sits in the middle. Study hours versus sleep, speed versus accuracy: look for the optimum, not the extreme.'
links:
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'Both weaken as $1/r^2$, because whatever spreads out evenly from a point is shared over a sphere of area $4\pi r^2$. Light, gravity and the electric force all obey this.'
    differs: 'Gravity cannot be blocked by anything and has no tilt factor; light is stopped by any opaque body, and a tilted surface catches less of it (the $\cos\theta$ factor).'
  - leaf: 'mat/similar-triangles'
    name: 'Similar triangles'
    same: 'A pinhole camera is nothing but similar triangles: image size over object size equals the ratio of the two distances. The same ratio finds the length of an umbra or the height of a tree from its shadow.'
    differs: 'On paper the triangles are drawn by you; here nature draws them with light, and the straight-line rule is itself only an approximation.'
next:
  q: 'Light travels straight until something stops it. When it meets a smooth, shiny surface it does not stop: it bounces. But which way does it go, and why does your face seem to float behind the glass?'
  leaf: 'phy/laws-of-reflection'
  name: 'Laws of reflection'
symbols:
  - s: 'E'
    means: 'illuminance: light energy arriving per unit area of the surface (lux)'
  - s: 'I'
    means: 'luminous intensity of the point source (candela)'
  - s: 'r'
    means: 'distance from the point source to the surface (m)'
  - s: '\theta'
    means: 'angle between the light ray and the normal to the surface (degrees)'
  - s: 'h_{\text{image}}'
    means: 'height of the image on the pinhole-camera screen (cm or m)'
  - s: 'h_{\text{object}}'
    means: 'height of the object in front of the pinhole (cm or m)'
  - s: 'd_{\text{screen}}'
    means: 'distance from the pinhole to the screen (cm or m)'
  - s: 'd_{\text{object}}'
    means: 'distance from the object to the pinhole (cm or m)'
---

:::hook
q: So what's your guess? What is each little bright coin of light on the ground?
options: ["The shadow of a leaf", "A small upside-down picture of the Sun", "Sunlight bouncing off the leaves"]
answer: 1
right: Right. Every gap between the leaves works as a pinhole. Light travels in straight lines, so the rays cross over in the gap and paint a small, upside-down picture of the Sun on the ground. That is why the coins are round, and why they turn into crescents in a partial eclipse. The higher the gap, the bigger the coin: about 1/108 of its height, so a gap 5 m up makes a coin about 5 cm wide.
wrong: Not quite. A leaf shadow or a reflection would copy the shape of the gap or the leaf, and these coins copy the Sun. Each gap acts as a pinhole: rays cross in it and draw a little upside-down picture of the Sun, round normally and a crescent in an eclipse.
:::

## Light travels in straight lines {lvl=1 id=s-straight}

We see an object only when light from it enters our eyes. Objects that give out their own light, such as the Sun, the stars, a candle flame or a glowing bulb, are **luminous**. Everything else, including the Moon, the planets and a mirror, is **non-luminous**: we see it because it reflects light that falls on it. The Moon shines only with reflected sunlight; Venus, the brightest "star" of the evening, is a planet doing the same.

Materials differ in what they do with light:

- **Transparent** materials (clear glass, water, air) let almost all light pass through, so you can see clearly through them.
- **Translucent** materials (butter paper, frosted glass) let some light through but scatter it, so you see only blurred shapes.
- **Opaque** materials (wood, metal, your hand) let no light through.

Several everyday facts show that light travels in straight lines: you cannot see a flame through a bent pipe; sunlight streams through gaps in clouds as straight beams; a small source casts sharp-edged shadows. This straight path is called a **ray**, and travelling in straight lines is called **rectilinear propagation**.

## Shadows {lvl=1 id=s-shadow}

An opaque object in the path of light blocks the rays that strike it. Behind it lies a region the light cannot reach: the **shadow**. Since light travels in straight lines, the shadow always forms on the side opposite the source, and its shape follows the outline of the object.

- **Moving the source closer** to the object makes the shadow on a screen **larger**; moving it farther makes it smaller.
- **Two sources** produce two shadows.
- **The Sun's height** sets the length of outdoor shadows: long in the morning and evening, shortest around noon, when the Sun is highest.

:::qc
q: A torch shines on a ball in front of a wall. You move the ball closer to the torch. What happens to the shadow on the wall?
options: ["It gets smaller", "It gets larger", "It stays the same"]
answer: 1
right: Right. Near the torch the ball blocks a wider cone of rays, so the shadow on the wall grows.
wrong: Draw two straight rays from the torch past the edges of the ball. Closer to the torch, the cone they make is wider.
:::

## The pinhole camera {lvl=1 id=s-pinhole}

Make a tiny hole in one side of a closed box and put a screen of tracing paper on the opposite side. Each point of a bright object sends light in all directions, but only the narrow pencil of rays through the hole reaches the screen. Rays from the top of the object travel in straight lines through the hole and land at the bottom of the screen, and rays from the bottom land at the top. The result is a real, **inverted** image.

:::figure caption="Straight rays through the pinhole cross over: the image is inverted. Similar triangles give its size."
<svg viewBox="0 0 360 160" role="img" aria-label="Pinhole camera forming an inverted image of a tree">
<line class="faint" x1="10" y1="120" x2="350" y2="120" style="stroke-dasharray:none;opacity:.4"/>
<rect class="tree" x="37" y="80" width="6" height="40"/><circle class="tree" cx="40" cy="62" r="20"/>
<rect class="m2" x="200" y="40" width="120" height="80" style="stroke:var(--ink);stroke-width:1.4"/>
<line class="ln" x1="200" y1="40" x2="200" y2="77" style="stroke-width:3"/><line class="ln" x1="200" y1="83" x2="200" y2="120" style="stroke-width:3"/>
<line class="ray" x1="40" y1="42" x2="320" y2="112"/><line class="ray" x1="40" y1="120" x2="320" y2="50"/>
<rect class="tree" x="317" y="50" width="4" height="15" opacity=".8"/><circle class="tree" cx="319" cy="97" r="13" opacity=".8"/>
<text x="16" y="150">object (tree)</text><text x="176" y="34">pinhole</text><text x="282" y="150">screen</text>
</svg>
:::

By similar triangles, $\dfrac{\text{image height}}{\text{object height}} = \dfrac{\text{distance from hole to screen}}{\text{distance from object to hole}}$.

A larger hole lets in more light but admits a wider cone of rays from each point, so the image gets brighter and blurrier. Every pinhole of light under a leafy tree during a solar eclipse is a tiny pinhole camera: the ground fills with little crescent images of the partly covered Sun.

## Umbra, penumbra and eclipses {lvl=2 id=s-umbra label="Class 9–10"}

A point source casts a shadow with a sharp edge. Real sources such as the Sun have size, so different parts of the source are blocked by different amounts:

- the **umbra** is the region from which no part of the source can be seen (full shadow);
- the **penumbra** is the region from which part of the source is visible (partial shadow), shading off towards full light.

:::figure caption="An extended source and a small object. The umbra is a cone that ends a short distance behind the object; a far screen catches only the faint penumbra."
<svg viewBox="0 0 360 160" role="img" aria-label="Umbra and penumbra behind an object lit by an extended source">
<rect x="34" y="40" width="12" height="80" rx="6" class="obj"/>
<circle class="tree" cx="180" cy="80" r="10" style="fill:var(--ink)"/>
<line class="ray" x1="40" y1="40" x2="330" y2="102.1"/><line class="ray" x1="40" y1="120" x2="330" y2="57.9"/>
<line class="faint" x1="40" y1="40" x2="330" y2="143.6"/><line class="faint" x1="40" y1="120" x2="330" y2="16.4"/>
<line class="ln" x1="330" y1="10" x2="330" y2="150" style="stroke-width:2"/><line class="gr" x1="210" y1="50" x2="210" y2="110" style="stroke-dasharray:3 3"/>
<text x="10" y="150">extended source</text><text x="160" y="110">object</text><text x="215" y="45">near screen</text><text x="292" y="12">far screen</text>
<text x="226" y="84" class="k">umbra ends</text>
</svg>
:::

The umbra is a cone that tapers to a point. Its length behind an object of size $d$ lit by the Sun (diameter $D$, distance $L$) is about

$$\ell \approx \frac{d\,L}{D} \approx 108\,d,$$

because the Sun's diameter is about $1/108$ of its distance. A bird 30 cm across has an umbra only about 32 m long. Flying higher, its shadow on the ground is only a faint, wide penumbra that you cannot see, which answers NCERT's question about birds' shadows.

**Eclipses** are the same geometry on a planetary scale. In a **solar eclipse** the Moon's shadow falls on the Earth: inside the umbra the Sun is completely hidden (total eclipse), inside the penumbra only partly. In a **lunar eclipse** the Earth's shadow falls on the Moon. Eclipses do not happen every month because the Moon's orbit is tilted by about 5° to the Earth's orbit, so the three bodies rarely line up exactly.

## How fast is light? {lvl=2 id=s-speed label="Class 10"}

Light travels at about $c = 3 \times 10^8$ m/s in vacuum, the fastest anything can travel. Sunlight takes about 8 minutes 20 seconds to cover the $1.5 \times 10^{11}$ m to Earth, so we always see the Sun as it was 8 minutes ago.

The first measurement came from astronomy. In 1676 Ole Rømer noticed that eclipses of Jupiter's moon Io came later than predicted when the Earth was on the far side of its orbit from Jupiter. The delay was the time light took to cross the extra distance, about the diameter of the Earth's orbit. In 1849 Fizeau measured $c$ on Earth by sending light through the gaps of a rapidly spinning toothed wheel to a mirror 8 km away and back.

## Brightness and the inverse-square law {lvl=3 id=s-photometry label="JEE · Irodov"}

A small source sends its light out in all directions. At distance $r$ the same light is spread over a sphere of area $4\pi r^2$, so the light falling on each square metre falls off as $1/r^2$. If the surface is tilted so that its normal makes angle $\theta$ with the incoming rays, it intercepts less light by a factor $\cos\theta$ (Lambert's cosine law). The **illuminance** produced by a point source of luminous intensity $I$ is therefore

$$E = \frac{I\cos\theta}{r^2}.$$

Intensity is measured in candela (cd) and illuminance in lux (lumen per square metre). Doubling your distance from a lamp quarters the light on your page. This is the subject of the first group of Irodov's optics problems.

:::worked title="Worked example: a lamp over a table"
A lamp of intensity 100 cd hangs 2 m above the floor. Find the illuminance directly below it and at a point on the floor 2 m to the side.

Directly below: $E = 100/2^2 = 25$ lux.

To the side: $r = 2\sqrt2$ m and the rays arrive at $\theta = 45^\circ$ to the floor's normal, so $E = 100 \times \cos 45^\circ/8 = 8.8$ lux, about a third of the value directly below.
:::

## Where straight lines fail {lvl=4 id=s-diffraction label="Olympiad"}

Rectilinear propagation is an approximation. Light is a wave of wavelength about $5 \times 10^{-7}$ m, and when it passes an edge or a hole that is not much larger than many wavelengths, it spreads out: **diffraction** (see the Wave optics branch). NCERT's Class 10 book notes this right at the start of the Light chapter.

A pinhole camera shows the trade-off clearly. With a hole of diameter $d$ and screen distance $L$:

- geometry blurs each image point into a spot about $d$ across, so a smaller hole looks sharper;
- diffraction spreads light from a hole of diameter $d$ through an angle of about $1.22\lambda/d$, blurring each point by about $2.44\lambda L/d$, so a smaller hole looks blurrier.

The total blur is smallest when the two are about equal, at $d \approx \sqrt{2.44\,\lambda L}$. For $L = 10$ cm and green light this is about 0.4 mm. A finer pinhole makes the picture worse.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Luminous bodies emit light; non-luminous bodies, like the Moon, only reflect it.
2. Light travels in straight lines (rays), so opaque objects cast shadows on the side away from the source.
3. A pinhole camera gives a real, inverted image; size ratio = image distance ÷ object distance.
4. Extended sources make an umbra (full shadow) and a penumbra (partial shadow). {lvl=2}
5. $c \approx 3 \times 10^8$ m/s; sunlight takes about 8 min 20 s to reach Earth. {lvl=2}
6. Illuminance $E = I\cos\theta/r^2$. {lvl=3}
7. Straight-line optics fails when apertures approach the wavelength; the best pinhole is about $\sqrt{2.44\lambda L}$ wide. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The Moon and planets are not luminous, however bright they look.
- A shadow is not an image: it carries no colour or detail of the object, only its outline.
- In a pinhole camera, measure distances from the hole, not from the box's edge.
- Shadow size depends on where the object sits between source and screen, not only on the object's size.
- In photometry, use the distance from the source to the point, not the height of the lamp, and include $\cos\theta$. {lvl=3}
:::
