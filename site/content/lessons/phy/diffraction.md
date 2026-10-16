---
title: Diffraction
summary: Light bending around edges and spreading from slits. Single-slit minima and the central maximum, why the pattern looks that way, Fresnel distance and the limit of ray optics, resolving power, the double slit's diffraction envelope, and the diffraction grating.
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
---

:::hook
q: You make a slit narrower and narrower. What happens to the patch of light on a distant screen?
options: ["It shrinks to a thin line", "It spreads out wider", "It stays the same size but gets dimmer"]
answer: 1
right: Right. Below a certain width the slit behaves as a new source and the light fans out; the narrower the slit, the wider the spread. Ray optics would predict a thinner line.
wrong: Ray optics would say a thinner line, but light is a wave. When an opening is comparable to the wavelength, what does a wave do after passing through?
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
