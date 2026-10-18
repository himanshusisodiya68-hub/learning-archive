---
title: Rectilinear propagation
summary: Light travels in straight lines. Luminous and non-luminous bodies, shadows, the pinhole camera, umbra and penumbra, eclipses, the speed of light, brightness and the inverse-square law, and where the straight-line picture breaks down.
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
---

:::hook
q: Four children look into four bent and straight pipes joined to a candle. Only one pipe runs in a straight line to the flame. Who can see the candle?
options: ["Everyone, light fills the pipes", "Only the child at the straight pipe", "Nobody, pipes block light"]
answer: 1
right: Right. Light travels in straight lines, so it reaches the eye only along an unbroken straight path. A bent pipe blocks it.
wrong: Not quite. Light goes in straight lines, so only a straight, unbroken pipe lets it through to the eye.
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
