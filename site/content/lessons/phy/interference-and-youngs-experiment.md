---
title: Interference and Young's experiment
summary: 'How two beams of light can add up to darkness, and how that lets us measure light itself.'
ncert: ["Class 12 Physics · Ch 10 Wave Optics (§10.4–10.5)"]
up_to: Olympiad
builds_on: [Huygens' principle, Superposition of waves]
notes_prompt: Explain why two torches shining on a wall never produce interference fringes, while two slits lit by one source do.
margin:
  - kind: history
    title: History
    text: Thomas Young showed fringes from two slits around 1801–1803 and used them to measure the wavelength of light, under a micrometre. The same Young helped decipher the Rosetta Stone.
  - kind: tip
    title: Board favourite
    text: "Fringe width β = λD/d. Bright fringes at nλD/d, dark fringes at (n + ½)λD/d. Immerse the apparatus in water and β becomes β/n."
  - kind: olympiad
    title: Olympiad link
    text: A thin sheet of thickness t in one beam shifts the whole pattern by (μ − 1)tD/d towards that slit, without changing the fringe width. This is a favourite way of measuring tiny thicknesses.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 17 Light Waves (§17.4–17.8)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.2 Interference of light" }
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 35 Interference" }
cards:
  - { front: "What makes two sources coherent?", back: "The same frequency and a constant phase difference between them. In practice both must come from the same original source." }
  - { front: "Resultant intensity of two coherent beams with phase difference $\\phi$?", back: "$I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$; for equal beams $I = 4I_0\\cos^2(\\phi/2)$." }
  - { front: "Conditions for bright and dark fringes in terms of path difference $\\Delta$?", back: "Bright: $\\Delta = n\\lambda$. Dark: $\\Delta = (n + \\tfrac12)\\lambda$." }
  - { front: "Fringe width in Young's experiment?", back: "$\\beta = \\lambda D/d$ (angular width $\\lambda/d$). Bright and dark fringes are equally spaced." }
  - { front: "A glass sheet of thickness $t$, index $\\mu$, covers one slit. What happens to the fringes?", back: "The whole pattern shifts towards the covered slit by $(\\mu - 1)tD/d$; the fringe width is unchanged." }
  - { front: "Phase difference for a path difference $\\Delta$?", back: "$\\phi = \\dfrac{2\\pi}{\\lambda}\\Delta$." }
core:
  idea: 'Coherent waves add as fields, so intensity depends on the phase difference $\phi = 2\pi\Delta/\lambda$: bright where $\Delta = n\lambda$ and dark where $\Delta = (n+\tfrac12)\lambda$. In Young''s experiment this gives equally spaced fringes of width $\beta = \lambda D/d$.'
  formulas:
    - tex: 'I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\phi'
      label: 'Two coherent beams (equal beams: $I = 4I_0\cos^2\frac{\phi}{2}$)'
    - tex: '\phi = \frac{2\pi}{\lambda}\,\Delta'
      label: 'Phase difference from path difference'
    - tex: '\beta = \frac{\lambda D}{d}'
      label: 'Fringe width in Young''s double-slit experiment'
  conditions:
    - 'The sources are coherent: same frequency and a constant phase difference, obtained by splitting light from one source'
    - 'Monochromatic light; each colour makes its own pattern'
    - '$D \gg d$ and small angles, so $\Delta \approx dx/D$'
    - 'Narrow slits (the diffraction envelope is ignored); the dark fringes are completely dark only if the two beams have equal intensity'
  sign: 'Maxima need a whole number of wavelengths of path difference, and give $4I_0$, not $2I_0$; the average over the pattern is $2I_0$.'
outcomes:
  - 'Apply superposition to find the intensity from two waves, and relate phase difference to path difference'
  - 'Explain coherence and why two separate lamps do not give fringes'
  - 'Derive fringe positions and fringe width in Young''s experiment, and predict how they change with $\lambda$, $d$, $D$ and the medium'
  - 'Handle unequal beams, visibility, a sheet over one slit and white-light fringes'
  - 'Analyse biprism, Lloyd''s mirror and Michelson set-ups, and the limits set by coherence length and source size'
opener:
  story: |
    Put two speakers a metre apart, both playing the same steady note, and walk slowly in front of them. The sound swells, nearly vanishes, then swells again. With two speakers there are places where you hear **less** than with one. Your living room has dead spots.

    Try the same trick with light. Shine two torches on a wall and you get a brighter patch, plain and even, never stripes. Everyone who has tried it agrees: light just adds up. For a hundred years that was one reason to think light was not a wave.

    Then in 1801 Thomas Young put a card with two thin slits in a beam of sunlight and saw dark stripes on the wall behind it. **Where two beams were supposed to make more light, there was darkness.** What did he do that two torches cannot?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two sources send out overlapping circular waves onto a wall with bright and dark stripes"><circle cx="50" cy="95" r="4" style="fill:var(--ink)"/><circle cx="50" cy="145" r="4" style="fill:var(--ink)"/><circle cx="50" cy="95" r="25" style="fill:none;stroke:var(--c);stroke-width:1.3"/><circle cx="50" cy="95" r="50" style="fill:none;stroke:var(--c);stroke-width:1.3"/><circle cx="50" cy="95" r="75" style="fill:none;stroke:var(--c);stroke-width:1.3"/><circle cx="50" cy="95" r="100" style="fill:none;stroke:var(--c);stroke-width:1.3"/><circle cx="50" cy="145" r="25" style="fill:none;stroke:var(--chem);stroke-width:1.3"/><circle cx="50" cy="145" r="50" style="fill:none;stroke:var(--chem);stroke-width:1.3"/><circle cx="50" cy="145" r="75" style="fill:none;stroke:var(--chem);stroke-width:1.3"/><circle cx="50" cy="145" r="100" style="fill:none;stroke:var(--chem);stroke-width:1.3"/><rect x="238" y="20" width="10" height="200" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><rect x="254" y="30" width="30" height="22" style="fill:var(--c)"/><rect x="254" y="76" width="30" height="22" style="fill:var(--c)"/><rect x="254" y="122" width="30" height="22" style="fill:var(--c)"/><rect x="254" y="168" width="30" height="22" style="fill:var(--c)"/><text x="288" y="45" style="font-size:11px;fill:var(--muted)">bright</text><text x="288" y="91" style="font-size:11px;fill:var(--muted)">bright</text><text x="288" y="64" style="font-size:11px;fill:var(--muted)">dark</text><text x="14" y="62" style="font-size:11px;fill:var(--muted)">two sources</text><text x="116" y="232" style="font-size:11px;fill:var(--muted)">stripes on the wall</text></svg>'
life:
  - 'Noise-cancelling headphones play a copy of the noise flipped upside down, so the two sounds cancel inside your ear.'
  - 'Loud spots and dead spots in a hall with two speakers.'
  - 'Wi-Fi and mobile signal can change within one step across a room, because the direct wave and the bounced waves add or cancel.'
  - 'The LIGO detectors catch ripples of space itself by watching a laser interference pattern change by a tiny fraction of a wavelength.'
models:
  - name: 'In step or out of step'
    text: 'Two efforts reinforce when they are aligned and cancel when they oppose, and the total can be far more or far less than the sum of the parts. A team pulling together, or a team pulling against itself, behaves just like two waves.'
  - name: 'Add the cause, then judge the effect'
    text: 'Light adds as a field, and brightness is the square of the total. So $1 + 1$ can be 4 or 0, not just 2. When a result depends on a combined quantity, add that quantity first.'
  - name: 'Magnify a tiny difference'
    text: 'Young turned a path difference of a few hundred nanometres into stripes millimetres wide, big enough to see. Good instruments, and good experiments, find a way to make a small difference loud.'
links:
  - leaf: 'phy/beats'
    name: 'Beats'
    same: 'Both come from adding two waves. Where they are in step the result is big, where out of step it is small.'
    differs: 'Beats mix two **frequencies** at one place and swell and fade in **time**. Young''s fringes mix two beams of the same frequency and show bright and dark in **space**.'
  - leaf: 'phy/standing-waves'
    name: 'Standing waves'
    same: 'Two waves overlapping with a fixed relationship give fixed places of full strength (antinodes) and places of zero (nodes).'
    differs: 'A standing wave is two waves travelling in opposite directions along one line. Young''s fringes come from two beams crossing at an angle in a plane.'
next:
  q: 'If light is a wave, a single narrow slit should behave like a whole crowd of tiny sources all interfering. So what happens to a beam of light when you squeeze the slit narrower and narrower?'
  leaf: 'phy/diffraction'
  name: 'Diffraction'
symbols:
  - s: 'I'
    means: 'resultant intensity at a point on the screen (W/m^2)'
  - s: 'I_1'
    means: 'intensity of the first beam alone (W/m^2)'
  - s: 'I_2'
    means: 'intensity of the second beam alone (W/m^2)'
  - s: 'I_0'
    means: 'intensity of one beam alone, when the two beams are equal (W/m^2)'
  - s: '\phi'
    means: 'phase difference between the two waves (radians)'
  - s: '\Delta'
    means: 'path difference between the two waves (m)'
  - s: '\lambda'
    means: 'wavelength of the light (nm)'
  - s: '\beta'
    means: 'fringe width: distance between neighbouring bright fringes (mm)'
  - s: 'D'
    means: 'distance from the slits to the screen (m)'
  - s: 'd'
    means: 'separation between the two slits (mm)'
---

:::hook
q: So what's your guess? Two identical torches each light a wall with brightness I. Switch both on and look at the wall. What do you see?
options: ["Stripes, 4I in some places and 0 in others", "Plain brightness 2I everywhere", "Plain brightness I, no change"]
answer: 1
right: Right. Two separate torches simply add, giving 2I with no stripes. Their light keeps jumping out of step with each other, so any stripes would shift billions of times a second and blur away. Young had to split light from one source in two, so the two beams stay in step.
wrong: For steady stripes the two beams would have to keep the same step with each other. Two separate torches have atoms firing independently, so do they?
:::

## Superposition: waves add, intensities need not {lvl=2 id=s-superpose label="Class 12"}

Where two waves overlap, the disturbances **add**: this is the principle of superposition. For light the disturbance is the electric field. Suppose two waves of the same frequency reach a point with amplitudes $a$ and a phase difference $\phi$:

$$y_1 = a\cos\omega t,\qquad y_2 = a\cos(\omega t + \phi).$$

Their sum is $y = 2a\cos(\phi/2)\cos(\omega t + \phi/2)$: an oscillation of amplitude $2a\cos(\phi/2)$. Intensity goes as amplitude squared, so with $I_0$ the intensity of each wave alone,

$$I = 4I_0\cos^2\frac{\phi}{2}.$$

- **Constructive interference**: $\phi = 0, \pm 2\pi, \pm 4\pi, \dots$ gives $I = 4I_0$, four times one wave, not twice.
- **Destructive interference**: $\phi = \pm\pi, \pm 3\pi, \dots$ gives $I = 0$.

Energy is not created or destroyed; it is moved from the dark places to the bright ones. Averaged over the pattern, $\cos^2$ averages to $\tfrac12$ and the mean intensity is $2I_0$, exactly the sum of the two.

A path difference $\Delta$ means one wave has travelled $\Delta/\lambda$ extra wavelengths, so

$$\phi = \frac{2\pi}{\lambda}\,\Delta.$$

Bright where $\Delta = n\lambda$, dark where $\Delta = (n + \tfrac12)\lambda$, with $n = 0, 1, 2, \dots$

:::qc lvl=2
q: Two coherent waves arrive with a path difference of 2.5λ. What do you see?
options: ["Bright", "Dark", "Half brightness"]
answer: 1
right: Right. 2.5λ is a phase difference of 5π, an odd multiple of π, so the waves cancel.
wrong: Convert to phase: φ = (2π/λ)(2.5λ) = 5π. Is that an even or odd multiple of π?
:::

## Coherence {lvl=2 id=s-coherence label="Class 12"}

The pattern of bright and dark places is only visible if it **stays put**. That needs the phase difference between the two sources to be constant in time: the sources must be **coherent**.

An ordinary lamp emits light as short bursts from countless atoms, and its phase jumps randomly about every $10^{-10}$ s (NCERT's figure for a sodium lamp). Two separate lamps therefore have a phase difference that changes billions of times a second. The fringes shift just as fast, the eye averages them, and you see $\overline{\cos^2} = \tfrac12$, so $I = 2I_0$ everywhere. The intensities add: the sources are **incoherent**.

Young's trick was to make both sources out of the **same** wavefront. Light from one pinhole S falls on two pinholes $S_1$ and $S_2$. Any phase jump at S reaches both at the same moment, so their phase difference stays fixed. Every practical interference arrangement does this: it splits one beam into two, either by **dividing the wavefront** (double slit, biprism, Lloyd's mirror) or by **dividing the amplitude** (thin films, the Michelson interferometer).

## Young's double-slit experiment {lvl=2 id=s-ydse label="Class 12"}

Two narrow slits $S_1$ and $S_2$, a distance $d$ apart, are lit by the same source and act as coherent, in-phase sources. A screen stands a distance $D$ away, with $D \gg d$. A point P on the screen is a height $x$ above the centre O.

:::figure caption="Young's arrangement. For D ≫ d the two rays to P are nearly parallel, and the extra path is S₂N = d sin θ."
<svg viewBox="0 0 360 190" role="img" aria-label="Geometry of Young's double slit experiment">
<line x1="60" y1="20" x2="60" y2="74" style="stroke:var(--ink);stroke-width:4"/><line x1="60" y1="86" x2="60" y2="104" style="stroke:var(--ink);stroke-width:4"/><line x1="60" y1="116" x2="60" y2="170" style="stroke:var(--ink);stroke-width:4"/>
<line x1="320" y1="15" x2="320" y2="175" style="stroke:var(--ink);stroke-width:3"/>
<line class="faint" x1="60" y1="95" x2="320" y2="95" style="stroke-dasharray:5 4"/>
<line class="ray" x1="60" y1="80" x2="320" y2="40"/><line class="ray" x1="60" y1="110" x2="320" y2="40"/>
<line class="faint" x1="60" y1="80" x2="67.5" y2="108" style="stroke:var(--chem);stroke-width:1.6"/>
<line x1="60" y1="110" x2="67.5" y2="108" style="stroke:var(--chem);stroke-width:3"/>
<circle class="obj" cx="320" cy="40" r="3"/>
<text x="38" y="80">S₁</text><text x="38" y="118">S₂</text><text x="326" y="44">P</text><text x="326" y="99">O</text><text x="20" y="99">d</text>
<text x="70" y="128" style="fill:var(--chem)">d sin θ</text><text x="180" y="110">D</text><text x="330" y="70">x</text>
<line class="faint" x1="324" y1="42" x2="324" y2="93"/>
</svg>
:::

For $D \gg d$ the rays $S_1P$ and $S_2P$ are almost parallel at angle $\theta$ to the axis, and the path difference is

$$\Delta = S_2P - S_1P \approx d\sin\theta \approx d\,\frac{x}{D}.$$

Setting $\Delta = n\lambda$ for bright and $(n + \tfrac12)\lambda$ for dark (NCERT Eqs. 10.13–10.14):

$$x_n^{\text{bright}} = \frac{n\lambda D}{d},\qquad x_n^{\text{dark}} = \left(n + \tfrac12\right)\frac{\lambda D}{d},\qquad n = 0, \pm1, \pm2, \dots$$

Bright and dark fringes are equally spaced, with **fringe width**

$$\beta = \frac{\lambda D}{d},\qquad\text{angular fringe width } \frac{\lambda}{d}.$$

With $\lambda = 600$ nm, $D = 1$ m and $d = 0.3$ mm, $\beta = 2$ mm: a pattern easily seen. A nanometre-scale wavelength is turned into millimetre-scale fringes because $D/d$ is a few thousand. This is how Young first measured the wavelength of light.

:::widget name=fringes
:::

Things that change β:

- **Longer wavelength**, wider fringes: red fringes are wider than blue.
- **Closer slits** or a **farther screen**, wider fringes.
- **Immersing the apparatus** in a liquid of index $\mu$ shortens the wavelength to $\lambda/\mu$, so $\beta$ becomes $\beta/\mu$.
- **Moving the source slit** sideways shifts the whole pattern the other way but leaves $\beta$ unchanged.

:::worked title="NCERT Exercise 10.4 in one line"
Slits 0.28 mm apart, screen 1.4 m away, and four fringe widths measure 1.2 cm. Then $\beta = 0.30$ cm and $\lambda = \beta d/D = (3.0\times10^{-3})(0.28\times10^{-3})/1.4 = 6.0\times10^{-7}$ m $= 600$ nm.
:::

## Intensity with unequal beams {lvl=3 id=s-unequal label="JEE"}

If the two waves have intensities $I_1$ and $I_2$ (amplitudes $a_1$, $a_2$), adding the fields as phasors gives

$$I = I_1 + I_2 + 2\sqrt{I_1 I_2}\,\cos\phi.$$

The last term is the **interference term**; it averages to zero for incoherent sources, leaving $I_1 + I_2$. The extremes are

$$I_{\max} = \left(\sqrt{I_1} + \sqrt{I_2}\right)^2,\qquad I_{\min} = \left(\sqrt{I_1} - \sqrt{I_2}\right)^2.$$

Dark fringes are completely dark only for equal beams. The contrast is measured by the **visibility**

$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}.$$

Slit widths control the beam intensities: intensity is proportional to slit width, so slits whose widths are in the ratio 4 : 1 have amplitudes 2 : 1 and $I_{\max} : I_{\min} = 9 : 1$.

## Shifting the pattern with a thin sheet {lvl=3 id=s-sheet label="JEE"}

Cover slit $S_1$ with a transparent sheet of thickness $t$ and refractive index $\mu$. Light through $S_1$ now has an extra optical path $(\mu - 1)t$. The central bright fringe is where the two optical paths are equal again:

$$\frac{xd}{D} = (\mu - 1)t\quad\Rightarrow\quad x_0 = \frac{(\mu - 1)tD}{d}.$$

The **whole pattern shifts towards the covered slit** by $x_0$, which equals $(\mu - 1)t/\lambda$ fringe widths. The fringe width itself is unchanged. Counting how many fringes cross a point measures $t$ or $\mu$ to a fraction of a wavelength.

## White light {lvl=3 id=s-white label="JEE"}

With white light each colour makes its own pattern with its own $\beta$. All of them have a bright fringe at the centre, where the path difference is zero for every wavelength, so the **central fringe is white**. Next to it the dark fringe for violet comes first, so the first fringes are coloured: violet edges inside, red outside. After a few orders the colours overlap into a uniform whitish illumination. A white central fringe is how experimenters find the zero of path difference.

Two patterns coincide where $n_1\lambda_1 = n_2\lambda_2$. For 650 nm and 520 nm (NCERT Exercise 10.6) the smallest solution is $4 \times 650 = 5 \times 520 = 2600$ nm.

## Other ways to split a wavefront {lvl=4 id=s-other label="Olympiad"}

- **Fresnel's biprism**: two thin prisms base to base bend light from one slit S into two beams that seem to come from two virtual images $S_1$ and $S_2$. If the prism angle is $A$ and its index $\mu$, each beam is deviated by $(\mu - 1)A$, and for a source a distance $a$ from the biprism, $d = 2a(\mu - 1)A$.
- **Lloyd's mirror**: light from a slit meets a screen both directly and after grazing reflection from a flat mirror. The mirror image of the slit is the second source. Reflection from a denser medium adds a phase change of $\pi$, so the fringe at the mirror's edge, where the path difference is zero, is **dark**. This was the first proof of the $\pi$ phase change.
- **Michelson interferometer**: a half-silvered mirror divides the amplitude, sends the beams along two arms and recombines them. Moving one mirror by $\lambda/2$ shifts the pattern by one fringe.

## Coherence length and source size {lvl=4 id=s-coh-length label="Olympiad"}

Real light is never perfectly coherent, and two limits decide whether fringes appear.

- **Temporal coherence.** A wave train from one atom lasts only a time $\tau$, so it is a length $\ell_c = c\tau$ long. If the path difference exceeds $\ell_c$, the two beams at a point come from different trains and the fringes fade. A spread of wavelengths $\Delta\lambda$ gives $\ell_c \approx \lambda^2/\Delta\lambda$: about a micrometre for white light (hence only a few coloured fringes), millimetres for a sodium lamp, and metres or more for a laser.
- **Spatial coherence.** A source of width $w$ at distance $L$ from the slits produces patterns from its different points shifted by about $wD/L$ (on the screen). Fringes survive only if this is less than $\beta$, which needs $w\,d/L \lesssim \lambda$. This is why Young needed the first pinhole S, why sunlight (half a degree wide, as NCERT notes) gives no fringes directly, and why Michelson could measure the angular sizes of stars from the slit separation at which fringes vanish.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Waves add their fields; equal coherent waves give $I = 4I_0\cos^2(\phi/2)$. {lvl=2}
2. Phase difference $\phi = 2\pi\Delta/\lambda$; bright for $\Delta = n\lambda$, dark for $\Delta = (n + \tfrac12)\lambda$. {lvl=2}
3. Coherent sources have a constant phase difference; they must come from one original source. {lvl=2}
4. Incoherent sources: intensities simply add. {lvl=2}
5. Young's fringes: $x_n = n\lambda D/d$, fringe width $\beta = \lambda D/d$, angular width $\lambda/d$. {lvl=2}
6. In a medium of index $\mu$, $\beta \to \beta/\mu$. {lvl=2}
7. Unequal beams: $I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\phi$; $I_{\max}/I_{\min} = \left(\frac{\sqrt{I_1}+\sqrt{I_2}}{\sqrt{I_1}-\sqrt{I_2}}\right)^2$. {lvl=3}
8. A sheet in one beam shifts the pattern by $(\mu - 1)tD/d$ towards that slit. {lvl=3}
9. With white light the central fringe is white and the next few are coloured. {lvl=3}
10. Coherence length $\approx \lambda^2/\Delta\lambda$; source width limits fringes to $wd/L \lesssim \lambda$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Constructive interference gives $4I_0$, not $2I_0$; the average over the pattern is $2I_0$. {lvl=2}
- The distance from the central bright fringe to the $n$th bright fringe is $n\beta$; to the $n$th dark fringe it is $(n - \tfrac12)\beta$. {lvl=2}
- Convert every length to metres before using $\beta = \lambda D/d$; mm and nm mix-ups are the commonest error. {lvl=2}
- Intensity is proportional to slit width, so amplitude goes as the square root of the width. {lvl=3}
- A sheet shifts the fringes towards the covered slit, never away from it. {lvl=3}
- Reflection from a denser medium adds $\lambda/2$ of path; a rarer one adds nothing. {lvl=4}
:::
