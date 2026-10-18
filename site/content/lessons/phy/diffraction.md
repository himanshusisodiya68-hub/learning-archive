---
title: Diffraction
summary: 'Why you can hear round a corner but not see round it, and what light does in a very narrow gap.'
ncert: ["Class 12 Physics · Ch 10 Wave Optics (§10.6)"]
up_to: Olympiad
builds_on: [Huygens' principle, Interference and Young's experiment]
notes_prompt: Explain why sound bends around a doorway so easily while light does not.
margin:
  - kind: history
    title: History
    text: Francesco Grimaldi named diffraction in 1665 after seeing faint bands at the edges of shadows. Fresnel's wave theory of diffraction won the French Academy's prize in 1819.
  - kind: tip
    title: Board favourite
    text: "Single slit: minima at a sin θ = nλ. Central maximum: angular width 2λ/a and linear width 2λD/a, twice the width of the other maxima."
  - kind: olympiad
    title: Olympiad link
    text: "In a double slit of width a and separation d, the interference orders at d sin θ = mλ that fall on diffraction minima are missing. With d = 3a, every third order vanishes."
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 17 Light Waves (§17.9–17.11)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.3 Diffraction of light" }
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 36 Diffraction" }
cards:
  - { front: "Condition for the minima of a single slit of width $a$?", back: "$a\\sin\\theta = n\\lambda$, $n = \\pm1, \\pm2, \\dots$ (not $n = 0$, which is the central maximum)." }
  - { front: "Angular and linear width of the central maximum?", back: "Angular width $2\\lambda/a$; on a screen at distance $D$, $2\\lambda D/a$." }
  - { front: "Where are the secondary maxima of a single slit, roughly?", back: "At $\\theta \\approx (n + \\tfrac12)\\lambda/a$, each weaker than the last (the first is about 4.5% of the central peak)." }
  - { front: "Fresnel distance, and what it means?", back: "$z_F = a^2/\\lambda$. Up to this distance a beam through an aperture $a$ stays roughly the size of the aperture, so ray optics works." }
  - { front: "Angular resolution limit of a circular aperture of diameter $D$?", back: "$\\theta \\approx 1.22\\lambda/D$ (Rayleigh's criterion)." }
  - { front: "Grating equation?", back: "$d\\sin\\theta = n\\lambda$, where $d$ is the spacing of the lines." }
core:
  idea: 'Each point of a wavefront across an opening acts as a wavelet source and the wavelets interfere. For a single slit of width $a$ the minima are at $a\sin\theta = n\lambda$ ($n \ne 0$), so the central maximum has angular width $2\lambda/a$, and narrower openings spread light more.'
  formulas:
    - tex: 'a\sin\theta = n\lambda,\quad n = \pm1, \pm2, \dots'
      label: 'Minima of a single slit'
    - tex: 'I = I_0\left(\frac{\sin\beta}{\beta}\right)^2,\quad \beta = \frac{\pi a\sin\theta}{\lambda}'
      label: 'Single-slit intensity'
    - tex: '\theta \approx 1.22\,\frac{\lambda}{D}'
      label: 'Rayleigh limit for a circular aperture of diameter $D$'
  conditions:
    - 'A parallel monochromatic beam falls normally on the slit'
    - 'The screen is far away, or a lens is used (far-field, Fraunhofer diffraction)'
    - 'The slit is long and narrow, so the problem is one-dimensional'
    - 'For linear widths such as $2\lambda D/a$, the angles are small'
  sign: 'In a single slit, $a\sin\theta = n\lambda$ gives dark, the opposite of Young''s bright condition, and $n = 0$ is the central maximum.'
outcomes:
  - 'Explain diffraction as interference of wavelets and say when it is noticeable'
  - 'Derive the single-slit minima and find the width of the central maximum'
  - 'Use the intensity curve $(\sin\beta/\beta)^2$ and combine it with the double-slit pattern, including missing orders'
  - 'Use the Fresnel distance $a^2/\lambda$ to say when ray optics holds, and the Rayleigh criterion for resolving power'
  - 'Apply the grating equation $d\sin\theta = n\lambda$, its dispersion and its resolving power $nN$'
opener:
  story: |
    Stand in a corridor beside an open door. You can hear people talking in the room, clearly, yet you cannot see them. Sound has bent round the corner. Light, which is also a wave, went straight and was stopped by the wall.

    So why do the two behave so differently? And is it true that light never bends round corners? Try this: hold two fingers almost touching, in front of one eye, and look through the thin gap at a bright window. You will see dark lines inside the gap, though nothing is there.

    **Light does bend round edges. It just does it by a tiny amount.** Whether a wave visibly bends or goes straight depends on one comparison. What is being compared with what?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Long waves spread widely after a narrow gap while short waves hardly spread"><rect x="150" y="10" width="14" height="95" style="fill:var(--ink)"/><rect x="150" y="135" width="14" height="95" style="fill:var(--ink)"/><path d="M40 20 L40 220 M70 20 L70 220 M100 20 L100 220 M130 20 L130 220" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M164 94 Q196 120 164 146" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M164 70 Q225 120 164 170" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M164 46 Q254 120 164 194" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M164 22 Q283 120 164 218" style="fill:none;stroke:var(--c);stroke-width:2"/><path d="M164 120 L310 120" style="fill:none;stroke:var(--chem);stroke-width:2;stroke-dasharray:5 4"/><text x="14" y="236" style="font-size:11px;fill:var(--muted)">long waves (sound)</text><text x="196" y="236" style="font-size:11px;fill:var(--muted)">fans out wide</text><text x="190" y="112" style="font-size:11px;fill:var(--chem)">short waves (light)</text><text x="190" y="138" style="font-size:11px;fill:var(--chem)">hardly spread</text></svg>'
life:
  - 'You hear music from the next room through an open door even though you cannot see the speakers.'
  - 'The rainbow colours on a CD or DVD come from its fine tracks spreading light by different amounts for different colours.'
  - 'A telescope or phone camera cannot show detail finer than its opening allows, however good the lens.'
  - 'Long radio waves such as AM follow hills better than the short waves of mobile phones, so phones lose signal behind hills and in tunnels.'
models:
  - name: 'Compared with what?'
    text: 'Whether a wave bends is not about the wavelength alone or the gap alone, only about their ratio. Many things matter only relative to something else: a Rs 500 gift to a student or to a company.'
  - name: 'Squeeze one thing and another spreads'
    text: 'Pin the beam down to a narrow slit and its direction becomes fuzzy. Expect trade-offs: tightening one thing often loosens another.'
  - name: 'Many small voices'
    text: 'The smooth pattern comes from adding the tiny contributions of every point across the opening. A crowd cheer or an election result is also a sum of many small voices.'
links:
  - leaf: 'phy/interference-and-youngs-experiment'
    name: 'Interference and Young''s experiment'
    same: 'Diffraction is interference. Feynman put it bluntly: nobody has ever found a real difference between them.'
    differs: 'Interference usually means two or a few sources. Diffraction means a huge number of wavelets across one opening, which gives a bright centre and fading side bands.'
  - leaf: 'phy/matter-waves'
    name: 'Matter waves'
    same: 'Electrons, shot at a thin crystal, make diffraction rings. That is how we learnt they behave as waves too.'
    differs: 'For light the spread is set by $\lambda/a$ with $\lambda$ about 500 nm. For electrons it uses the much shorter de Broglie wavelength, which is why electron microscopes see far finer detail.'
next:
  q: 'Interference and diffraction work for sound and water waves too. Is there anything light can do that those waves cannot, a sign that it wiggles in a different way?'
  leaf: 'phy/polarisation'
  name: 'Polarisation'
symbols:
  - s: 'a'
    means: 'width of the single slit (mm)'
  - s: '\theta'
    means: 'angle from the central axis to a point on the screen (degrees)'
  - s: '\lambda'
    means: 'wavelength of the light (nm)'
  - s: 'n'
    means: 'order of the minimum, a non-zero integer (no unit)'
  - s: 'I'
    means: 'intensity at angle theta (W/m^2)'
  - s: 'I_0'
    means: 'intensity of the central maximum (W/m^2)'
  - s: '\beta'
    means: 'phase quantity, pi a sin(theta) over lambda (radians)'
  - s: 'D'
    means: 'diameter of the circular aperture (mm)'
---

:::hook
q: So what's your guess? You squeeze a slit narrower and narrower. What happens to the patch of light on a far wall?
options: ["It shrinks to a thin line", "It spreads out wider", "It stays the same size but gets dimmer"]
answer: 1
right: Right, and your ear already knows it at a doorway. A narrow gap acts like a small new source, so the light fans out, and the narrower the gap, the wider the fan. A ray picture would wrongly predict a thinner and thinner line.
wrong: A ray picture says a thinner line, but think of the doorway and the voices. When a gap is small compared with the wave, what does the wave do after passing through?
:::

## Waves bend around obstacles {lvl=2 id=s-what label="Class 12"}

Look closely at a shadow's edge and you find faint bright and dark bands extending into the shadow and beyond it. Light passing an edge or through an opening spreads into the region that ray optics says should be dark. This is **diffraction**, and every kind of wave shows it: water waves through a harbour gap, sound around a corner, electrons through a crystal.

How much a wave spreads depends on the ratio of wavelength to opening. Sound waves are about a metre long, comparable to a doorway, so sound bends round freely. Visible light is about half a micrometre, much smaller than everyday openings, so its diffraction is hard to notice. It shows when the opening is narrow: a slit between two razor blades, the fine tracks of a CD (which give its colours), or the limited aperture of a telescope.

Diffraction is the same physics as interference. Feynman, quoted in NCERT, put it this way: there is no real physical difference; "interference" is usually said for a few sources and "diffraction" for very many. In diffraction, the many sources are the Huygens wavelets across a single opening.

## The single slit {lvl=2 id=s-single label="Class 12"}

A parallel beam of wavelength $\lambda$ falls normally on a slit of width $a$. Each point across the slit sends out wavelets, all in phase because the incoming wavefront lies along the slit. On a distant screen (or the focal plane of a lens) we add them up in each direction $\theta$.

:::figure caption="Single slit of width a. Rays to a far point at angle θ: the edge rays differ in path by a sin θ."
<svg viewBox="0 0 360 170" role="img" aria-label="Path difference geometry for single slit diffraction">
<line x1="70" y1="10" x2="70" y2="50" style="stroke:var(--ink);stroke-width:4"/><line x1="70" y1="120" x2="70" y2="160" style="stroke:var(--ink);stroke-width:4"/>
<line class="faint" x1="70" y1="85" x2="340" y2="85" style="stroke-dasharray:5 4"/>
<line class="ray" x1="70" y1="50" x2="330" y2="0"/><line class="ray" x1="70" y1="85" x2="330" y2="35"/><line class="ray" x1="70" y1="120" x2="330" y2="70"/>
<line x1="70" y1="50" x2="83" y2="117.5" style="stroke:var(--chem);stroke-width:1.4;stroke-dasharray:3 2"/>
<line x1="70" y1="120" x2="83" y2="117.5" style="stroke:var(--chem);stroke-width:3"/>
<text x="54" y="52">L</text><text x="54" y="89">M</text><text x="54" y="126">N</text><text x="30" y="89">a</text>
<text x="90" y="140" style="fill:var(--chem)">a sin θ</text><text x="200" y="80">θ</text>
</svg>
:::

**Straight ahead** ($\theta = 0$) all wavelets travel the same distance and add in phase: a bright **central maximum**.

**The first minimum.** Tilt to the angle where the two edge rays differ in path by exactly one wavelength, $a\sin\theta = \lambda$. Split the slit into two halves. Each point in the top half has a partner exactly $a/2$ below it in the bottom half, and their paths differ by $\lambda/2$, so each pair cancels. Every pair cancels, and the intensity is **zero**. The same pairing, with the slit split into 4, 6, … parts, gives zeros at $a\sin\theta = 2\lambda, 3\lambda, \dots$:

$$a\sin\theta = n\lambda,\qquad n = \pm1, \pm2, \pm3, \dots\qquad\text{(minima)}$$

Watch the surprise: in Young's experiment a path difference of $\lambda$ meant **bright**. Here $\lambda$ across the edges means **dark**, because it is the whole set of wavelets that cancels in pairs, not just two waves.

**Secondary maxima.** Between the minima are weaker bright bands, near $\theta \approx (n + \tfrac12)\lambda/a$. At $a\sin\theta = \tfrac32\lambda$, split the slit into three parts: two cancel and only one third is left over, so this maximum is far dimmer than the centre. Each further maximum is dimmer still.

For a screen at distance $D$ and small angles,

$$\text{central maximum: angular width } \frac{2\lambda}{a},\qquad\text{linear width } \frac{2\lambda D}{a}.$$

The central maximum is **twice as wide** as each secondary one. A narrower slit gives a **wider** pattern, and red light spreads more than blue.

:::widget name=fringes mode=single lambda=600
:::

:::qc lvl=2
q: Light of wavelength 500 nm passes through a slit 0.1 mm wide onto a screen 1 m away. How wide is the central maximum?
options: ["5 mm", "10 mm", "2.5 mm"]
answer: 1
right: Right. 2λD/a = 2 × 5×10⁻⁷ × 1 / 10⁻⁴ m = 10 mm.
wrong: The central maximum runs from the first minimum on one side to the first on the other, so its width is 2λD/a.
:::

## Seeing it yourself {lvl=2 id=s-home label="Class 12"}

NCERT's home experiment: hold two razor blades with their edges parallel and almost touching, and look through the slit at a clear bulb with a straight filament, the slit parallel to the filament. The filament plays the role of the source slit and your eye's lens focuses the pattern on the retina. You see bright and dark bands; with a red filter they are wider than with a blue one. Do not look at the Sun this way. It would harm your eye, and the Sun is too wide a source (half a degree) for fringes anyway.

In interference and diffraction, energy is only **redistributed**: what leaves the dark bands appears in the bright ones.

## The intensity curve {lvl=3 id=s-intensity label="JEE"}

Adding the wavelets as phasors (a smooth arc of total phase $2\beta$, with $\beta = \pi a\sin\theta/\lambda$) gives

$$I(\theta) = I_0\left(\frac{\sin\beta}{\beta}\right)^2,\qquad \beta = \frac{\pi a\sin\theta}{\lambda}.$$

The zeros are at $\beta = n\pi$, which is $a\sin\theta = n\lambda$. The secondary maxima sit at the roots of $\tan\beta = \beta$, slightly inside $(n + \tfrac12)\pi$: $\beta = 1.43\pi, 2.46\pi, \dots$. Their heights are about **4.5%, 1.6%, 0.8%** of the central peak, so roughly 90% of the light lands in the central maximum.

## The double slit, honestly {lvl=3 id=s-double label="JEE"}

Real slits have width. NCERT notes that the pattern of a double slit is the single-slit diffraction pattern of each slit **multiplied** by the two-slit interference pattern:

$$I(\theta) = I_0\left(\frac{\sin\beta}{\beta}\right)^2\cos^2\!\left(\frac{\pi d\sin\theta}{\lambda}\right).$$

Fine fringes of width $\lambda D/d$ sit under a broad envelope of width $2\lambda D/a$. The number of bright fringes inside the central envelope is about $2d/a$. If an interference maximum ($d\sin\theta = m\lambda$) falls exactly on a diffraction minimum ($a\sin\theta = n\lambda$), that order is **missing**: $m = n\,d/a$. Switch the interference widget to a non-zero slit width to see the envelope.

## The limit of ray optics {lvl=3 id=s-fresnel label="JEE"}

A beam through an aperture of width $a$ spreads at angle about $\lambda/a$. After a distance $z$ its spread is $z\lambda/a$. This equals the aperture itself at the **Fresnel distance**

$$z_F \approx \frac{a^2}{\lambda}.$$

Closer than $z_F$ the beam keeps its shape and ray optics works; much farther, diffraction dominates. For a 3 mm opening and 500 nm light, $z_F \approx 18$ m: rays are an excellent approximation in a room. For a 0.1 mm slit it is only 2 cm.

## Resolving power {lvl=3 id=s-resolve label="JEE"}

A lens or mirror is itself an aperture. Even a perfect lens images a point star as a small **Airy disc** surrounded by faint rings. For a circular aperture of diameter $D$ the first dark ring is at

$$\theta \approx 1.22\,\frac{\lambda}{D}.$$

**Rayleigh's criterion**: two points are just resolved when the centre of one disc falls on the first dark ring of the other. So a telescope's smallest resolvable angle is $1.22\lambda/D$; bigger mirrors see finer detail. For a microscope the smallest resolvable separation is about $\dfrac{1.22\lambda}{2n\sin\beta}$, where $n\sin\beta$ is the numerical aperture; immersing the objective in oil (raising $n$) or using shorter wavelengths improves it. This is why electron microscopes, with wavelengths far below a nanometre, see atoms.

## The diffraction grating {lvl=4 id=s-grating label="Olympiad"}

A **grating** has thousands of equally spaced slits, a spacing $d$ apart. Light from adjacent slits reinforces where

$$d\sin\theta = n\lambda.$$

With $N$ slits, the principal maxima become extremely sharp, with angular half-width about $\lambda/(Nd\cos\theta)$, and $N - 2$ tiny subsidiary maxima between them. Each wavelength goes to its own angle, so a grating spreads light into a clean spectrum, better than a prism.

- The highest order seen is the largest $n$ with $n\lambda \le d$.
- **Resolving power**: two wavelengths $\lambda$ and $\lambda + \Delta\lambda$ are resolved in order $n$ when $\dfrac{\lambda}{\Delta\lambda} \le nN$. Resolving the sodium doublet (589.0 and 589.6 nm) needs $nN \ge 982$.
- **Dispersion**: $\dfrac{d\theta}{d\lambda} = \dfrac{n}{d\cos\theta}$; higher orders spread colours more.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Diffraction is waves spreading around edges and through openings; it is noticeable when the opening is comparable to $\lambda$. {lvl=2}
2. Single slit minima: $a\sin\theta = n\lambda$, $n \ne 0$. {lvl=2}
3. Central maximum: angular width $2\lambda/a$, linear width $2\lambda D/a$, twice the others. {lvl=2}
4. Secondary maxima near $(n + \tfrac12)\lambda/a$, rapidly weaker. {lvl=2}
5. Narrower slits and longer wavelengths spread more. {lvl=2}
6. $I = I_0(\sin\beta/\beta)^2$ with $\beta = \pi a\sin\theta/\lambda$; the first side peak is 4.5%. {lvl=3}
7. A real double slit: interference fringes under a single-slit envelope; missing orders at $m = n\,d/a$. {lvl=3}
8. Fresnel distance $a^2/\lambda$ marks where ray optics fails. {lvl=3}
9. Rayleigh limit $1.22\lambda/D$ sets the resolution of telescopes, cameras and eyes. {lvl=3}
10. Grating: $d\sin\theta = n\lambda$; resolving power $nN$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- In a single slit, $a\sin\theta = n\lambda$ gives **dark**, the opposite of Young's bright condition. {lvl=2}
- The central maximum spans from $-\lambda/a$ to $+\lambda/a$: its width is $2\lambda D/a$, not $\lambda D/a$. {lvl=2}
- Don't mix up $d$ (slit separation, sets the fringe width) and $a$ (slit width, sets the envelope). {lvl=3}
- For a grating given in lines per mm, $d = 1/(\text{lines per mm})$ mm. {lvl=4}
- $\sin\theta$ cannot exceed 1: that caps the highest visible order. {lvl=4}
:::
