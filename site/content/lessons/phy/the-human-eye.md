---
title: The human eye and its defects
summary: 'How a jelly lens in your head refocuses from book to mountain in a second, and how glasses help when it can''t.'
ncert: ["Class 10 Science · Ch 10 The Human Eye and the Colourful World (§10.1–10.2)"]
up_to: Olympiad
builds_on: [Lenses and the lens formula, Power of a lens]
notes_prompt: Explain to someone who wears glasses why their lenses are thicker at the edges (or the centre) than plain glass.
margin:
  - kind: history
    title: History
    text: Kepler (1604) was the first to explain that the eye's lens forms a real, inverted image on the retina and that the brain makes sense of it.
  - kind: tip
    title: Board favourite
    text: Myopia is corrected with a concave lens of focal length equal to the far point distance; hypermetropia with a convex lens that images an object at 25 cm onto the near point.
  - kind: olympiad
    title: Olympiad link
    text: Most of the eye's focusing is done by the curved front surface, the cornea, not by the lens. That is why you see blurred underwater without goggles.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 19 Optical Instruments (the eye, defects of vision)" }
cards:
  - { front: "What is accommodation?", back: "The eye's ability to change the focal length of its lens, using the ciliary muscles, so that both near and far objects are focused on the retina." }
  - { front: "Near point and far point of a normal eye?", back: "Near point about 25 cm (least distance of distinct vision); far point at infinity." }
  - { front: "Myopia: symptom, cause, correction?", back: "Distant objects blurred; image forms in front of the retina (eyeball too long or lens too curved). Corrected by a concave lens." }
  - { front: "Hypermetropia: symptom, cause, correction?", back: "Near objects blurred; image forms behind the retina (eyeball too short or focal length too long). Corrected by a convex lens." }
  - { front: "What is presbyopia and how is it corrected?", back: "Loss of accommodation with age as the ciliary muscles weaken and the lens stiffens; near point recedes. Corrected by convex lenses, or bifocals if myopia is also present." }
  - { front: "Power needed by a myopic eye with far point $x$?", back: "$P = -1/x$ (x in metres): a concave lens that images infinity at the far point." }
core:
  idea: 'The cornea and eye lens form a real, inverted image on the retina, a fixed 2 cm behind. The ciliary muscles change the lens''s focal length (accommodation) so objects from the near point, 25 cm, to infinity are focused; a spectacle lens corrects a shifted range.'
  formulas:
    - tex: 'P = -\frac{1}{x}'
      label: 'Myopia: concave lens for far point $x$ (metres)'
    - tex: 'P = 4 - \frac{1}{d}'
      label: 'Hypermetropia: convex lens for near point $d$ (metres), reading distance 25 cm; $P$ in dioptres'
  conditions:
    - 'The eye is treated as a single thin lens a fixed distance (about 2 cm) in front of the retina'
    - 'A normal eye has its near point at about 25 cm and its far point at infinity'
    - 'The correcting lens is thin and placed against the eye, so the gap to the spectacle lens is ignored'
  sign: 'Myopia needs a concave (negative power) lens and hypermetropia a convex (positive power) one. Use metres to get dioptres, and note the pupil controls brightness, not focus.'
outcomes:
  - 'Describe how the eye forms an image on the retina and the role of accommodation'
  - 'State the near point and far point of a normal eye'
  - 'Identify myopia, hypermetropia, presbyopia and cataract, and name the correcting lens for each'
  - 'Calculate the power of the corrective lens from the far point or near point'
  - 'Estimate the eye''s power, accommodation range and resolution limit, and explain blurred underwater vision'
opener:
  story: |
    Hold your thumb out at arm's length and look at it. Your thumb is sharp, but the wall behind it turns into a soft, doubled blur. Now look at the wall. The wall snaps into focus, and your thumb blurs. You can never see both sharp at once, but the switch takes almost no time and no thought.

    A camera has to whirr a motor to slide its lens back and forth before it can do this. Nothing in your eye whirrs, and there is nothing in there that slides like a camera lens. Yet it focuses faster than any camera you have used.

    So what is the eye doing instead?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="An eye looks at a near thumb that is sharp while a far wall is blurred"><circle cx="70" cy="120" r="46" style="fill:color-mix(in srgb,var(--c) 8%,var(--surface));stroke:var(--ink);stroke-width:2"/><path d="M44 82 A46 46 0 0 0 44 158" style="fill:none;stroke:var(--chem);stroke-width:4"/><ellipse cx="92" cy="120" rx="6" ry="16" style="fill:color-mix(in srgb,var(--c) 30%,var(--surface));stroke:var(--c);stroke-width:2"/><path d="M112 98 Q122 120 112 142" style="fill:none;stroke:var(--ink);stroke-width:2"/><polyline points="170,112 92,106 25,120" style="fill:none;stroke:var(--c);stroke-width:2"/><polyline points="170,128 92,134 25,120" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="164" y="104" width="14" height="40" rx="7" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--c);stroke-width:2"/><rect x="278" y="40" width="10" height="160" rx="3" style="fill:var(--surface);stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3"/><text x="130" y="168" style="font-size:11px;fill:var(--ink)">thumb: sharp</text><text x="226" y="222" style="font-size:11px;fill:var(--muted)">far wall: blurred</text><text x="14" y="36" style="font-size:11px;fill:var(--muted)">retina (a fixed screen)</text></svg>'
life:
  - 'Switching between your phone screen and the road ahead: your eye lens flattens and fattens dozens of times a day without you noticing.'
  - 'Reading glasses appearing in the forties, when the lens stiffens and "my arms are too short" becomes a common complaint.'
  - 'Blurred vision underwater without goggles: water almost cancels the cornea''s focusing, and a layer of air in the goggles restores it.'
  - 'Eye-camp cataract surgery in villages, where a cloudy lens is replaced with a clear artificial one in minutes.'
  - 'The 20-20-20 habit for screen users: every 20 minutes look at something 20 feet away for 20 seconds, to let the tired focusing muscle relax.'
models:
  - name: 'When one thing is fixed, vary another'
    text: 'The distance from lens to retina cannot change, so the eye changes the focal length instead. When a constraint is stuck, look for another dial that can do the same job: a shop that cannot lower its prices can change pack size.'
  - name: 'A feedback loop: try, check, adjust'
    text: 'Focusing is a loop: the eye tries a shape, the brain judges how blurred the result is, and the muscle adjusts until it is sharp. A thermostat, steering a bicycle and adjusting a monthly budget all work the same way.'
  - name: 'Fix the offset, not the machine'
    text: 'A short-sighted eye is a working eye whose range is shifted. A spectacle lens shifts it back instead of rebuilding the eye. Many problems are an offset, and an offset is cheaper to correct than a design.'
links:
  - leaf: 'phy/lenses-and-the-lens-formula'
    name: 'Lenses and the lens formula'
    same: 'The eye is a lens drawing a real, inverted picture on a screen, and the lens formula and power in dioptres apply to it exactly.'
    differs: 'A camera keeps its focal length and moves the lens to change the image distance. The eye does the opposite: the image distance is fixed and the focal length changes.'
  - leaf: 'phy/refraction-and-snells-law'
    name: 'Refraction and Snell''s law'
    same: 'Most of the eye''s focusing comes from refraction at the curved front surface, the cornea, where light jumps from air into a denser medium.'
    differs: 'The cornea''s power depends on the jump in refractive index. In water that jump almost vanishes, which is why vision blurs underwater, though a glass lens in air is unaffected.'
next:
  q: 'A perfect eye still looks through the air, and the air itself bends and scatters light on the way. Why do stars twinkle while planets do not, and why is the sky blue instead of black?'
  leaf: 'phy/atmospheric-refraction-and-scattering'
  name: 'Atmospheric refraction and scattering'
---

:::hook
q: So what's your guess: you glance from a book to a far-away tree and both look sharp within a second. What changes inside your eye?
options: ["The distance from lens to retina", "The shape (focal length) of the eye lens", "The size of the pupil only"]
answer: 1
right: Right, and the surprise is how it is done. Tiny muscles squeeze a soft, jelly-like lens fatter for near things and let it relax flatter for far ones. The retina cannot move, so the eye changes the lens's focal length instead. That is accommodation.
wrong: The retina is fixed at the back of the eye, so it cannot slide like a camera's sensor. The pupil only controls how much light enters. Something about the lens itself has to change.
:::

## How the eye forms images {lvl=1 id=s-eye}

The eye is a camera made of living tissue. Light enters through the **cornea**, a thin transparent bulge at the front, which does most of the bending. Behind it, the coloured **iris** controls the size of the **pupil**, the opening that admits light: the pupil shrinks in bright light and widens in dim light. The **eye lens**, a flexible, jelly-like converging lens held by the **ciliary muscles**, fine-tunes the focus. Together they form a real, **inverted** image on the **retina**, a light-sensitive screen packed with rod and cone cells. These turn light into electrical signals that travel along the **optic nerve** to the brain, which interprets the image as upright.

:::figure caption="The eye focuses parallel light from a distant object onto the retina."
<svg viewBox="0 0 360 200" role="img" aria-label="Labelled diagram of the human eye">
<circle cx="200" cy="100" r="80" style="fill:color-mix(in srgb, var(--phy) 5%, var(--surface));stroke:var(--ink);stroke-width:1.6"/>
<path d="M128 66 Q106 100 128 134" style="fill:none;stroke:var(--ink);stroke-width:2"/>
<line x1="138" y1="64" x2="138" y2="88" style="stroke:var(--eng);stroke-width:4"/><line x1="138" y1="112" x2="138" y2="136" style="stroke:var(--eng);stroke-width:4"/>
<ellipse cx="152" cy="100" rx="9" ry="22" class="m2" style="stroke:var(--phy);stroke-width:1.5"/>
<path d="M240 30.7 A80 80 0 0 1 240 169.3" style="fill:none;stroke:var(--chem);stroke-width:4"/>
<line x1="280" y1="100" x2="340" y2="100" style="stroke:var(--chem);stroke-width:7"/>
<polyline class="ray" points="10,82 120,82 152,86 280,100"/><polyline class="ray" points="10,118 120,118 152,114 280,100"/>
<text x="92" y="58">cornea</text><text x="132" y="52">iris</text><text x="160" y="140">lens</text><text x="256" y="22">retina</text><text x="296" y="90">optic nerve</text><text x="96" y="160">pupil</text>
</svg>
:::

## Accommodation, near point and far point {lvl=1 id=s-accommodation}

The distance from lens to retina is fixed, about 2 cm. To focus objects at different distances, the eye changes the focal length of its lens:

- For **distant objects**, the ciliary muscles relax, the lens becomes thinner, and its focal length increases.
- For **near objects**, the ciliary muscles contract, the lens becomes thicker and more curved, and its focal length decreases.

This ability is **accommodation**. It has limits. The closest point at which a normal young eye can see clearly without strain is the **near point**, about **25 cm**; this is the **least distance of distinct vision**. The farthest point it can see clearly is the **far point**, at **infinity** for a normal eye. Closer than 25 cm the lens cannot become any more curved, so the image falls behind the retina and looks blurred.

:::qc
q: When you look at a distant mountain, what are your ciliary muscles doing?
options: ["Contracting, making the lens thicker", "Relaxing, making the lens thinner", "Nothing; the iris does the focusing"]
answer: 1
right: Right. For distant objects the muscles relax and the lens flattens, giving its longest focal length.
wrong: Distant objects need the longest focal length, which means a thinner, flatter lens.
:::

## Defects of vision and their correction {lvl=1 id=s-defects}

**Myopia (near-sightedness).** Near objects are seen clearly, distant ones are blurred. The far point is closer than infinity because the eyeball is too long or the lens too strongly curved, so the image of a distant object forms **in front of** the retina. A **concave lens** of suitable power spreads the rays slightly so that the image moves back onto the retina.

**Hypermetropia (far-sightedness).** Distant objects are clear, near ones blurred. The near point is farther than 25 cm because the eyeball is too short or the lens's focal length too long, so the image of a near object forms **behind** the retina. A **convex lens** adds converging power.

:::figure caption="Myopia: light from far away focuses in front of the retina (left). A concave lens moves the focus back onto the retina (right)."
<svg viewBox="0 0 360 150" role="img" aria-label="Myopic eye and its correction with a concave lens">
<circle cx="90" cy="75" r="50" style="fill:color-mix(in srgb, var(--phy) 5%, var(--surface));stroke:var(--ink);stroke-width:1.4"/>
<path d="M115 31.7 A50 50 0 0 1 115 118.3" style="fill:none;stroke:var(--chem);stroke-width:3"/>
<polyline class="ray" points="0,60 50,60 110,75 140,82.5"/><polyline class="ray" points="0,90 50,90 110,75 140,67.5"/>
<text x="20" y="140">focus in front of retina</text>
<path d="M190 35 L210 35 Q200 75 210 115 L190 115 Q200 75 190 35Z" class="m2" style="stroke:var(--phy);stroke-width:1.4"/>
<circle cx="290" cy="75" r="50" style="fill:color-mix(in srgb, var(--phy) 5%, var(--surface));stroke:var(--ink);stroke-width:1.4"/>
<path d="M315 31.7 A50 50 0 0 1 315 118.3" style="fill:none;stroke:var(--chem);stroke-width:3"/>
<polyline class="ray" points="160,62 200,62 250,57 340,75"/><polyline class="ray" points="160,88 200,88 250,93 340,75"/>
<text x="200" y="140">concave lens corrects it</text>
</svg>
:::

**Presbyopia.** With age the ciliary muscles weaken and the lens stiffens, so accommodation decreases and the near point recedes. Older people find it hard to read without convex reading glasses. Someone who also has myopia needs **bifocal** lenses: the upper part concave for distance, the lower part convex for reading.

**Cataract.** In old age the eye lens can become milky and cloudy, causing partial or complete loss of vision. Surgery replaces the cloudy lens with an artificial one.

## How strong must the correcting lens be? {lvl=1 id=s-power}

**Myopia.** The lens must make light from infinity appear to come from the far point $x$. Its image distance is $v = -x$ with $u = -\infty$, so $f = -x$ and

$$P = -\frac{1}{x}\ \ (x \text{ in metres}).$$

A far point of 80 cm needs $P = -1/0.8 = -1.25$ D.

**Hypermetropia.** The lens must form a virtual image at the person's near point $d$ of an object held at 25 cm: $u = -0.25$ m, $v = -d$:

$$P = \frac1v - \frac1u = -\frac{1}{d} + \frac{1}{0.25} = 4 - \frac{1}{d}\ \text{D}.$$

A near point of 1 m needs $P = 4 - 1 = +3$ D.

:::worked title="Worked example: two pairs of glasses"
A person needs a lens of power −5.5 D for distant vision and +1.5 D for reading (NCERT Exercise 10.5). Find the focal lengths.

$f = 1/P$: distance glasses $f = 1/(-5.5) = -0.18$ m (concave); reading glasses $f = 1/1.5 = +0.67$ m (convex). Such a person needs bifocals.
:::

## The eye as an optical system {lvl=2 id=s-optics label="Class 12"}

Treating the eye as a single thin lens 2 cm in front of the retina, its power when relaxed is about $1/0.02 = 50$ D, and it rises to about 54 D to focus at 25 cm: the **amplitude of accommodation** of a young eye is about 4 D. Children manage 10 D or more; by age 60 it has fallen to about 1 D.

**Two eyes** see a scene from slightly different angles, and the brain combines the two images to judge depth. Cover one eye and try to touch two pencil tips together: it becomes surprisingly hard.

**Contact lenses and spectacles.** Spectacles sit about 1–2 cm in front of the eye, so the lens power required differs slightly from that of a contact lens on the cornea. For strong prescriptions this matters.

## How much detail can the eye see? {lvl=3 id=s-resolution label="JEE"}

Two points can be told apart only if their images fall on different receptor cells. The cones in the most sensitive spot of the retina are about 2–3 µm apart, which limits the eye to resolving angles of about 1 minute of arc ($3 \times 10^{-4}$ rad). Light diffraction at the pupil gives a similar limit, $\theta \approx 1.22\lambda/D$: for a 3 mm pupil and green light, about $2 \times 10^{-4}$ rad. Nature has matched the receptor spacing to the optics.

At 1 arcminute, two car headlights 1.5 m apart merge into one beyond about 5 km.

## Why underwater vision is blurred {lvl=4 id=s-underwater label="Olympiad"}

The cornea's power comes from the jump in refractive index between air ($1.00$) and the cornea ($\approx 1.376$) across a curved surface of radius about 7.8 mm. Using the single-surface formula, its power is about $(1.376 - 1)/0.0078 \approx 48$ D, most of the eye's total. In water ($n = 1.33$) the jump almost vanishes and the cornea's power drops to about 5 D. The lens alone cannot make up 40-odd dioptres, so everything blurs. Goggles restore the air layer in front of the cornea. Fish have nearly spherical lenses with very high power to compensate.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The cornea and lens form a real, inverted image on the retina; the brain interprets it.
2. Accommodation: the ciliary muscles change the lens's focal length.
3. Normal eye: near point about 25 cm, far point at infinity.
4. Myopia: image in front of the retina, corrected by a concave lens with $P = -1/x_{\text{far}}$.
5. Hypermetropia: image behind the retina, corrected by a convex lens with $P = 4 - 1/d_{\text{near}}$ dioptres.
6. Presbyopia: age-related loss of accommodation; bifocals if myopia is also present. Cataract: a cloudy lens.
7. The relaxed eye has about 50 D of power and about 4 D of accommodation. {lvl=2}
8. Resolution limit about 1 arcminute, set by receptor spacing and pupil diffraction. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Myopia is corrected with a concave lens and hypermetropia with a convex lens; do not swap them.
- Use distances in metres when computing power in dioptres.
- For hypermetropia, the object is at 25 cm and the image at the person's near point, both on the same side as the object: $u = -0.25$ m, $v = -d$.
- The pupil controls brightness, not focus.
:::
