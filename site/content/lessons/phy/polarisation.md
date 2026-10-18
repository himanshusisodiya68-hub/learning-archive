---
title: Polarisation
summary: 'The hidden direction in which light wiggles, why polarised sunglasses kill glare, and why a third filter can let light through.'
ncert: ["Class 12 Physics · Ch 10 Wave Optics (§10.7)"]
up_to: Olympiad
builds_on: [Interference and Young's experiment, Atmospheric refraction and scattering]
notes_prompt: Explain why polarisation shows that light is a transverse wave while interference and diffraction do not.
margin:
  - kind: history
    title: History
    text: Étienne-Louis Malus discovered polarisation by reflection in 1808, looking through a calcite crystal at sunlight reflected from the windows of the Luxembourg Palace. Edwin Land invented the sheet polaroid in 1929.
  - kind: tip
    title: Board favourite
    text: "Unpolarised light through one polaroid: I₀/2. Then a second at θ: (I₀/2) cos²θ. Brewster angle: tan θ_B = n."
  - kind: olympiad
    title: Olympiad link
    text: "N polaroids, each turned π/(2N) from the last, pass a fraction cos²ᴺ(π/2N) of polarised light, which approaches 1 as N grows: you can rotate polarisation by 90° with almost no loss."
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 17 Light Waves (§17.12)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.4 Polarization of light" }
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 33 Electromagnetic Waves (§33.5, 33.10)" }
cards:
  - { front: "What does polarisation prove about light?", back: "That light is a transverse wave: its electric field oscillates perpendicular to the direction of travel. Longitudinal waves such as sound cannot be polarised." }
  - { front: "Intensity after an ideal polaroid for unpolarised light of intensity $I_0$?", back: "$I_0/2$, whatever the orientation of the polaroid." }
  - { front: "State Malus' law.", back: "Polarised light of intensity $I_0$ passing a polaroid whose axis makes angle $\\theta$ with its polarisation emerges with $I = I_0\\cos^2\\theta$." }
  - { front: "Brewster's law?", back: "At incidence $\\theta_B$ with $\\tan\\theta_B = n$, the reflected light is completely polarised (perpendicular to the plane of incidence), and the reflected and refracted rays are at 90°." }
  - { front: "Why is skylight polarised?", back: "Air molecules scatter sunlight as dipole radiators; light scattered at 90° to the sunlight is strongly polarised perpendicular to the plane containing the Sun, the molecule and the observer." }
  - { front: "Three polaroids: P₁ and P₃ crossed, P₂ at θ to P₁. Transmitted fraction of the light leaving P₁?", back: "$\\cos^2\\theta\\sin^2\\theta = \\tfrac14\\sin^2 2\\theta$, maximum $\\tfrac14$ at $\\theta = 45°$ (NCERT Example 10.2)." }
core:
  idea: 'Light is a transverse wave: its electric field is perpendicular to the direction of travel. An ideal polaroid passes only the field component along its axis, so polarised light of intensity $I_0$ emerges with $I = I_0\cos^2\theta$ (Malus'' law), and unpolarised light is halved.'
  formulas:
    - tex: 'I = I_0\cos^2\theta'
      label: 'Malus'' law (light already polarised)'
    - tex: 'I = \frac{I_0}{2}'
      label: 'Unpolarised light through one ideal polaroid'
    - tex: '\tan\theta_B = n'
      label: 'Brewster''s law: reflected light is completely polarised'
  conditions:
    - 'An ideal polaroid passes the field component along its pass axis completely and absorbs the perpendicular component completely'
    - 'Malus'' law applies only to light that is already linearly polarised; natural light has random field directions'
    - 'Brewster''s law: reflection at a smooth surface between transparent media, with reflected and refracted rays at 90°'
  sign: 'In multi-polaroid problems $\theta$ is the angle between successive axes; at Brewster''s angle only the reflected light is completely polarised.'
outcomes:
  - 'Explain why polarisation shows that light is a transverse wave'
  - 'Distinguish unpolarised, plane-polarised light and explain how a polaroid works'
  - 'State and apply Malus'' law, including problems with several polaroids'
  - 'Derive and apply Brewster''s law, and explain polarisation by scattering'
  - 'Describe birefringence, quarter-wave and half-wave plates, photoelasticity and optical activity'
opener:
  story: |
    Put on a pair of polarised sunglasses and look at your phone. Now tilt your head sideways. On many screens, though not all, the picture fades to black. Tilt back and it returns. The phone did not change, and the glasses are just clear tinted plastic.

    Look at a wet road or a lake on a bright day with the same glasses and the blinding glare disappears, while the rest of the scene stays. Something about that reflected light is different from ordinary light, and your eye cannot tell.

    **Light has a hidden direction, and the glasses are picky about it.** Sound has no such thing, and neither do water ripples. So what is light doing that they cannot?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A phone looks bright through a polarising lens held one way and black when the lens is turned"><rect x="50" y="26" width="46" height="88" rx="6" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface));stroke:var(--ink);stroke-width:2"/><circle cx="73" cy="70" r="40" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M63 40 L63 100 M73 32 L73 108 M83 40 L83 100" style="fill:none;stroke:var(--muted);stroke-width:1.6"/><text x="40" y="136" style="font-size:11px;fill:var(--muted)">head upright: bright</text><rect x="214" y="26" width="46" height="88" rx="6" style="fill:var(--ink);stroke:var(--ink);stroke-width:2"/><circle cx="237" cy="70" r="40" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M215 60 L259 60 M207 70 L267 70 M215 80 L259 80" style="fill:none;stroke:var(--muted);stroke-width:1.6"/><text x="196" y="136" style="font-size:11px;fill:var(--muted)">head tilted: black</text><path d="M20 190 L120 190" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><path d="M60 175 L60 205 M70 178 L70 202 M80 182 L80 198" style="fill:none;stroke:var(--c);stroke-width:1.5"/><text x="130" y="194" style="font-size:11px;fill:var(--muted)">light wiggles sideways to its path</text><text x="20" y="226" style="font-size:11px;fill:var(--muted)">the lens lines show its pass direction</text></svg>'
life:
  - 'Polarised sunglasses cut glare from wet roads, car bonnets and water, because reflected glare is polarised.'
  - 'Many phone and laptop screens give out polarised light, so they go dark through polarised glasses at the wrong tilt.'
  - '3D cinema glasses send a different picture to each eye by using two different polarisations.'
  - 'A photographer''s polarising filter darkens a blue sky and removes reflections from glass.'
  - 'A clear plastic ruler between two crossed polaroids shows coloured stress patterns, which engineers use to find weak spots.'
models:
  - name: 'Hidden properties'
    text: 'Two beams can look identical and differ in a property your eyes cannot see, until the right filter reveals it. Look for the property you are not measuring.'
  - name: 'Stepping stones beat one jump'
    text: 'Crossed sheets block all the light, but a sheet at 45 degrees between them lets some through. A gentle sequence of small turns can get you where one big turn cannot, as in learning or in careers.'
  - name: 'Rule out a model with one test'
    text: 'Sound cannot be polarised, light can. One experiment that only a sideways wave can pass shows that light is a sideways wave. Good tests are ones one model can pass and another cannot.'
links:
  - leaf: 'phy/atmospheric-refraction-and-scattering'
    name: 'Atmospheric refraction and scattering'
    same: 'The same scattering that makes the sky blue also polarises it. Look at the sky at a right angle to the Sun through a polaroid and it darkens.'
    differs: 'The scattering lesson cared about how much light and what colour. Polarisation cares about which way the wiggle points.'
  - leaf: 'phy/sound-as-a-wave'
    name: 'Sound as a wave'
    same: 'Both carry energy as waves, and both show interference and diffraction.'
    differs: 'Sound is a push-and-pull along its path (longitudinal) and has no sideways direction, so it cannot be polarised. Light wiggles across its path.'
next:
  q: 'Light reflecting from glass or water comes back partly polarised, so a reflection has hidden rules. What happens when light reflects from both the front and back of a layer thinner than a hair? Why does a soap bubble show colour?'
  leaf: 'phy/thin-films'
  name: 'Thin films'
---

:::hook
q: So what's your guess? Two polaroid sheets are crossed, so no light gets through. You slide a third sheet between them, at 45°. What happens?
options: ["Still dark, since adding a filter can only block more", "Light gets through", "It depends on the colour"]
answer: 1
right: Right, and it surprises almost everyone, because an extra filter let light through. The middle sheet turns the polarisation halfway, so each sheet passes part of the light. A quarter of what left the first sheet comes out.
wrong: Each polaroid passes the component of the field along its own axis. Follow the field direction through all three sheets, one at a time.
:::

## Transverse waves can be polarised {lvl=2 id=s-transverse label="Class 12"}

Shake one end of a long string up and down and a wave runs along it, every point moving only up and down, perpendicular to the direction of travel. That is a **transverse** wave, and because each point moves along one line we call it **linearly polarised** (or plane polarised: the string stays in one plane). Shake sideways and you get a wave polarised the other way. If you change the direction of shaking randomly and rapidly, the wave is **unpolarised**: still transverse, but with no fixed direction.

Light is an electromagnetic wave whose **electric field oscillates perpendicular to its direction of travel**. In light from the Sun or a lamp, each atom emits with its own orientation and the field direction changes randomly many times in any measurement: natural light is **unpolarised**.

Interference and diffraction happen for any wave, sound included. **Polarisation happens only for transverse waves.** Sound in air, a longitudinal wave, cannot be polarised. So polarisation is the proof that light is transverse.

## Polaroids and Malus' law {lvl=2 id=s-malus label="Class 12"}

A **polaroid** is a plastic sheet containing long-chain molecules aligned in one direction. The electric field component along the molecules drives electrons along the chains and is absorbed; the component perpendicular to them passes. That perpendicular direction is the **pass axis**.

- Unpolarised light through one polaroid: the output is linearly polarised along the pass axis, with **half** the intensity. Rotating the polaroid changes nothing you can see.
- Put a second polaroid (the **analyser**) after the first (the **polariser**), with their axes at angle $\theta$. Of the field $E$ leaving the first sheet, only the component $E\cos\theta$ passes the second. Intensity goes as $E^2$, so

$$I = I_0\cos^2\theta,$$

where $I_0$ is the intensity leaving the first polaroid. This is **Malus' law**. Parallel axes pass everything ($\theta = 0$); crossed axes pass nothing ($\theta = 90°$). Turning the analyser through a full circle gives two maxima and two minima.

:::widget name=polarisers
:::

Polaroids control intensity in sunglasses, camera filters and window panes. 3D cinemas show the left-eye and right-eye pictures with different polarisations, and the glasses send each to the correct eye.

:::worked title="NCERT Example 10.2: a polaroid rotated between two crossed polaroids"
Let $I_0$ be the intensity after the first polaroid $P_1$, and let the middle sheet $P_2$ make angle $\theta$ with $P_1$. After $P_2$: $I_0\cos^2\theta$. The third sheet $P_3$ is crossed with $P_1$, so it makes angle $\tfrac{\pi}{2} - \theta$ with $P_2$. After $P_3$:

$$I = I_0\cos^2\theta\cos^2\!\left(\tfrac{\pi}{2} - \theta\right) = I_0\cos^2\theta\sin^2\theta = \frac{I_0}{4}\sin^2 2\theta.$$

The transmitted intensity is greatest, $I_0/4$, at $\theta = \pi/4$, and zero when $P_2$ lines up with either outer sheet. Tick "add a third polaroid" in the widget above to try it.
:::

## Polarisation by reflection: Brewster's law {lvl=3 id=s-brewster label="JEE"}

Light reflected from glass, water or a road is partly polarised, which is why polaroid sunglasses (pass axis vertical) cut glare. At one special angle the reflected light is **completely** polarised, with its field perpendicular to the plane of incidence.

Why? The refracted light makes electrons in the surface oscillate perpendicular to the refracted ray, and they radiate the reflected light. An oscillating charge radiates nothing along its own line of oscillation. When the reflected and refracted rays are perpendicular, the field component lying in the plane of incidence oscillates exactly along the reflected direction, so it cannot be reflected. Only the perpendicular component remains.

Reflected and refracted rays at 90° means $\theta_B + r = 90°$. Snell's law, $\sin\theta_B = n\sin r = n\cos\theta_B$, then gives **Brewster's law**:

$$\tan\theta_B = n\qquad\left(\text{generally } \tan\theta_B = \frac{n_2}{n_1}\right).$$

For glass of index 1.5, $\theta_B = \tan^{-1}1.5 \approx 56.3°$; for water, about 53°. The refracted beam at Brewster's angle is only partly polarised. A stack of glass plates at $\theta_B$ strips more of the perpendicular component at each surface and gives a fairly well-polarised transmitted beam.

:::qc lvl=3
q: Light reflected from water (n = 1.33) is completely polarised. What is the angle of refraction?
options: ["53°", "37°", "45°"]
answer: 1
right: Right. tan θ_B = 1.33 gives θ_B ≈ 53°, and at Brewster's angle the refracted ray is at 90° to the reflected one, so r = 90° − 53° = 37°.
wrong: At Brewster's angle, θ_B + r = 90°. Find θ_B from tan θ_B = n first.
:::

## Polarisation by scattering {lvl=3 id=s-scatter label="JEE"}

The atmosphere lesson explained that air molecules scatter sunlight, blue most strongly. Each molecule's electrons are driven to oscillate along the Sun's field, which lies in the plane perpendicular to the sunbeam. An oscillating charge does not radiate along its line of motion. Look at the sky **90° away from the Sun**, and the oscillation component pointing towards you sends nothing your way; you see only the component perpendicular to your line of sight. That skylight is strongly **linearly polarised**. Rotate a polaroid while looking at the blue sky at right angles to the Sun and it darkens and brightens. Bees and some birds navigate by this pattern.

## Birefringence and wave plates {lvl=4 id=s-birefringence label="Olympiad"}

In crystals such as calcite and quartz, the speed of light depends on its polarisation direction: the crystal has two refractive indices. An unpolarised beam splits into two beams polarised at right angles, the **ordinary** (o-ray, obeying Snell's law) and the **extraordinary** (e-ray). Look through calcite at a printed word and you see it twice.

A plate of such crystal of thickness $t$, cut with the optic axis in its face, delays one polarisation relative to the other by a phase

$$\delta = \frac{2\pi}{\lambda}\,|n_o - n_e|\,t.$$

- A **quarter-wave plate** ($\delta = \pi/2$) turns linearly polarised light at 45° to its axis into **circularly polarised** light, whose field rotates at constant length; at other angles it gives **elliptical** polarisation.
- A **half-wave plate** ($\delta = \pi$) reflects the polarisation direction about the plate's axis, rotating it by $2\alpha$ if it started at $\alpha$.

Between crossed polaroids a stressed plastic part shows coloured bands, because stress makes it birefringent by different amounts in different places. Engineers use this **photoelasticity** to see stress concentrations. Some substances, like sugar solutions, rotate the plane of polarisation steadily as light passes through them (**optical activity**); the rotation measures their concentration.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Polarisation is possible only for transverse waves; it proves light is transverse. {lvl=2}
2. Natural light is unpolarised; a polaroid passes the field component along its pass axis. {lvl=2}
3. One polaroid halves unpolarised light: $I_0/2$. {lvl=2}
4. Malus' law: $I = I_0\cos^2\theta$; crossed polaroids pass nothing. {lvl=2}
5. A middle polaroid at $\theta$ between crossed ones passes $\tfrac14\sin^2 2\theta$, at most a quarter. {lvl=2}
6. Brewster: $\tan\theta_B = n$; reflected light fully polarised; reflected and refracted rays at 90°. {lvl=3}
7. Skylight at 90° from the Sun is strongly polarised by scattering. {lvl=3}
8. Birefringent crystals have two indices; wave plates make circular and elliptical polarisation. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Malus' law applies to light that is **already polarised**. For unpolarised light the first sheet gives $\tfrac12$, not $\cos^2\theta$. {lvl=2}
- In multi-polaroid problems, $\theta$ is the angle between **successive** axes. {lvl=2}
- At Brewster's angle the **reflected** light is completely polarised; the refracted light is only partly polarised. {lvl=3}
- The Brewster angle uses $\tan$, the critical angle uses $\sin$: don't swap them. {lvl=3}
:::
