---
title: Electromagnetic waves
summary: 'How electric and magnetic fields chase each other across empty space as light, radio and Wi-Fi, all at one speed.'
ncert: ["Class 12 Physics · Ch 8 Electromagnetic Waves (§8.3–8.4)"]
up_to: Olympiad
builds_on: [Displacement current, Electromagnetic induction, Ampère's circuital law, Gauss's law, Polarisation]
notes_prompt: Explain in your own words why a changing electric field and a changing magnetic field can keep each other alive in empty space, and why the speed they travel at is fixed by ε₀ and μ₀ alone.
margin:
  - kind: history
    title: History
    text: Maxwell computed 1/√(μ₀ε₀) in the 1860s, found it equal to the measured speed of light, and concluded that light is an electromagnetic wave. Hertz produced and detected such waves with spark gaps in 1887; J. C. Bose made millimetre waves in Kolkata in the 1890s, and Marconi sent radio signals across the Atlantic in 1901.
  - kind: tip
    title: Board favourite
    text: "E₀ = cB₀; c = 1/√(μ₀ε₀); λν = c; E ⊥ B ⊥ direction of travel, with E × B along the travel. Order of the spectrum by wavelength: γ < X < UV < visible < IR < microwave < radio."
  - kind: olympiad
    title: Olympiad link
    text: "Radiation pressure on a perfect reflector is 2I/c. A sail whose areal density is below L/(2πcGM) is pushed away from the Sun more strongly than it is pulled, at every distance, because both forces fall as 1/r²."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 8 Electromagnetic Waves (§8.3–8.4)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 40 Electromagnetic Waves" }
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 33 Electromagnetic Waves (§33.1–33.6)" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 9 Electromagnetic Waves; Ch. 11 Radiation" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 4 · 4.4 Electromagnetic waves. Radiation" }
cards:
  - { front: "What produces electromagnetic waves?", back: "Accelerated charges. A charge at rest gives only a static field, a steady current only a static magnetic field; an oscillating charge radiates at its own frequency of oscillation." }
  - { front: "How are $\\vec E$, $\\vec B$ and the direction of travel related in a plane wave in vacuum?", back: "All three are mutually perpendicular, $\\vec E\\times\\vec B$ points along the travel, $E$ and $B$ oscillate in phase, and $E = cB$ at every instant." }
  - { front: "Speed of an electromagnetic wave in vacuum and in a medium?", back: "$c = 1/\\sqrt{\\mu_0\\varepsilon_0} \\approx 3.00\\times10^8$ m/s in vacuum; $v = 1/\\sqrt{\\mu\\varepsilon} = c/n$ in a medium, with $n = \\sqrt{\\mu_r\\varepsilon_r}$." }
  - { front: "Intensity of a plane wave of field amplitude $E_0$?", back: "$I = \\tfrac12\\varepsilon_0 c E_0^2 = cB_0^2/(2\\mu_0)$. The electric and magnetic energy densities are equal; the mean total is $\\tfrac12\\varepsilon_0E_0^2$." }
  - { front: "Radiation pressure on an absorber and on a perfect reflector (normal incidence)?", back: "$I/c$ on an absorber, $2I/c$ on a perfect reflector. A pulse of energy $U$ carries momentum $U/c$." }
  - { front: "Spectrum in order of increasing frequency?", back: "Radio, microwave, infrared, visible, ultraviolet, X-rays, γ-rays. All travel at $c$ in vacuum; photon energy $h\\nu$ rises in the same order." }
core:
  idea: 'A changing $\vec B$ makes $\vec E$ and a changing $\vec E$ makes $\vec B$, so a transverse wave travels in vacuum at $c = 1/\sqrt{\mu_0\varepsilon_0}$, with $\vec E\perp\vec B\perp$ direction of travel, $\vec E\times\vec B$ along it, and $E_0 = cB_0$.'
  formulas:
    - tex: 'c = \frac{1}{\sqrt{\mu_0\varepsilon_0}},\qquad \frac{E_0}{B_0} = c = \frac{\omega}{k}'
      label: 'Speed and the E to B ratio'
    - tex: 'E_y = E_0\sin(kx-\omega t),\qquad B_z = B_0\sin(kx-\omega t)'
      label: 'Plane wave travelling along +x'
    - tex: 'I = \tfrac12\varepsilon_0 c E_0^2'
      label: 'Intensity (radiation pressure $I/c$ absorbed, $2I/c$ reflected)'
  conditions:
    - 'Plane, monochromatic wave in vacuum (in matter $v = c/n$ with $n = \sqrt{\mu_r\varepsilon_r}$)'
    - 'Far from the source, where the wave is transverse and $E$, $B$ are in phase'
    - 'Radiation pressure at normal incidence on a perfect absorber or perfect reflector'
  sign: 'The direction of travel is that of $\vec E\times\vec B$; $kx - \omega t$ means travel along $+x$. $E_0 = cB_0$, not $B_0 = cE_0$.'
outcomes:
  - 'Explain how changing fields sustain each other and why the wave needs no medium'
  - 'Find the directions of $\vec E$, $\vec B$ and travel, and relate $E_0$, $B_0$, $k$, $\omega$ and $c$'
  - 'Place the types of radiation in the electromagnetic spectrum by wavelength, source and use'
  - 'Calculate energy density, intensity, momentum and radiation pressure'
  - 'Derive the wave equation from Maxwell''s equations and explain why accelerated charges radiate (Larmor)'
opener:
  story: |
    Sunlight takes about eight minutes to reach you. Between the Sun and your face there is almost nothing: no air, no water, no rope to carry the push. Sound cannot cross that gap, because sound needs something to shake. Yet light crosses it, warms your skin, and does it every single day.

    The same goes for the radio waves that bring cricket commentary, the Wi-Fi in your room, the X-rays at the hospital and the signals from a spacecraft near Mars. They look nothing alike. A radio wave can be as long as a building, an X-ray a billion times shorter than a hair is thick.

    So here is a question for a party. If a burst of radio waves and a burst of X-rays leave a distant star at the same moment, crossing the empty space towards us, which one reaches Earth first?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="The Sun on the left and the Earth on the right with an electric and a magnetic wave travelling between them through empty space"><circle cx="40" cy="120" r="24" style="fill:color-mix(in srgb,var(--chem) 40%,var(--surface));stroke:var(--chem);stroke-width:2"/><path d="M40 88 V82 M40 152 V158 M8 120 H2 M72 120 H78 M17 97 L12 92 M63 97 L68 92 M17 143 L12 148 M63 143 L68 148" style="stroke:var(--chem);stroke-width:2"/><circle cx="292" cy="120" r="14" style="fill:color-mix(in srgb,var(--phy) 35%,var(--surface));stroke:var(--phy);stroke-width:2"/><path d="M78 120 q15 -40 30 0 t30 0 t30 0 t30 0 t30 0 H278" style="fill:none;stroke:var(--c);stroke-width:2.5"/><path d="M78 120 q15 -18 30 0 t30 0 t30 0 t30 0 t30 0" style="fill:none;stroke:var(--bad);stroke-width:2;stroke-dasharray:4 3"/><text x="86" y="64" style="font-size:11px;fill:var(--c)">electric field swings up and down</text><text x="86" y="182" style="font-size:11px;fill:var(--bad)">magnetic field swings at right angles</text><text x="28" y="164" style="font-size:11px;fill:var(--muted)">Sun</text><text x="276" y="148" style="font-size:11px;fill:var(--muted)">you</text><text x="160" y="214" style="font-size:11px;fill:var(--muted);text-anchor:middle">eight minutes through empty space</text></svg>'
life:
  - 'Wi-Fi, mobile signals, FM radio and TV are all electromagnetic waves, differing only in frequency and in how they are made and caught.'
  - 'A microwave oven fills its box with 2.45 GHz waves that shake the water molecules in food and warm it.'
  - 'A TV remote sends infrared, the sunburn on a summer afternoon comes from ultraviolet and the hospital X-ray uses a much shorter wavelength still.'
  - 'Radio signals from a spacecraft near Mars take several minutes each way, so ISRO controllers cannot steer it live; they must send instructions and wait.'
  - 'Fibre-optic internet cables carry light pulses, and GPS satellites send radio signals whose travel time tells your phone where it is.'
models:
  - name: 'Two things keeping each other going'
    text: 'Each field''s change makes the other, so the wave carries itself without any outside support. Feedback loops of this kind, a rumour spreading, a market moving, keep running on their own once started.'
  - name: 'One thing on a dial'
    text: 'Radio, light and X-rays are the same wave at different frequencies. Our names for them reflect the instruments and uses we have, not different nature. Many categories in life, such as forms of money, are one thing seen through different tools.'
  - name: 'Spreading thins out'
    text: 'Anything radiating evenly from a point, such as light, Wi-Fi or sound, weakens as one over the distance squared, because the same amount is shared over a sphere. Move twice as far from the router and you get a quarter of the signal.'
links:
  - leaf: 'phy/wave-equation'
    name: 'The wave equation'
    same: 'Light obeys the same wave equation as every other wave: speed equals frequency times wavelength, and the same ideas of crests, interference and diffraction apply.'
    differs: 'Sound and water waves need a medium to shake; electromagnetic waves need none, and they are transverse with two coupled fields, an electric and a magnetic one, instead of one displacement.'
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'Both give an inverse-square law: the intensity of light falls as $1/r^2$ just as the pull of gravity does, because both spread over a sphere.'
    differs: 'Gravity is a steady pull that needs no energy to maintain; a wave carries energy and momentum away at the finite speed $c$.'
symbols:
  - s: '\vec E'
    means: 'electric field, the force per unit charge (volts per metre, V/m)'
  - s: '\vec B'
    means: 'magnetic field (tesla, T)'
  - s: 'c'
    means: 'speed of light in vacuum, $3.00\times10^8$ m/s'
  - s: '\mu_0'
    means: 'permeability of free space, $4\pi\times10^{-7}$ T m/A'
  - s: '\varepsilon_0'
    means: 'permittivity of free space, $8.85\times10^{-12}$ F/m'
  - s: '\lambda'
    means: 'wavelength, the distance between two crests (metres, m)'
  - s: '\nu'
    means: 'frequency, the number of waves per second (hertz, Hz)'
  - s: '\omega'
    means: 'angular frequency, $2\pi\nu$ (radians per second)'
  - s: 'k'
    means: 'wave number, $2\pi/\lambda$ (radians per metre)'
  - s: 'E_0'
    means: 'peak value of the electric field (V/m)'
  - s: 'B_0'
    means: 'peak value of the magnetic field (T)'
  - s: 'I'
    means: 'intensity, the power crossing each square metre (W/m²)'
next:
  q: 'Light is an electromagnetic wave, so how does a wave travel and bend? Why does a wave squeezing through a gap spread out, and how can we predict where it goes next?'
  leaf: 'phy/huygens-principle'
  name: 'Huygens'' principle'
---

:::hook
q: So what's your guess? A burst of radio waves and a burst of X-rays leave a distant star at the same moment and cross empty space towards us. Which arrives first?
options: ["The X-rays, since they carry far more energy", "The radio waves, since long waves slip through space more easily", "They arrive together"]
answer: 2
right: Right, and that is the surprise Maxwell found. Radio waves, light and X-rays are the same kind of wave, a travelling pattern of electric and magnetic fields, and in vacuum every one of them moves at c = 3 × 10⁸ m/s whatever its wavelength or energy.
wrong: Energy and wavelength differ hugely, but the speed in vacuum is set only by two constants of nature, ε₀ and μ₀. Every electromagnetic wave travels at c.
:::

## Fields that keep each other going {lvl=2 id=s-idea label="Class 12"}

Two laws you have already met point at something remarkable when you put them side by side.

- **Faraday's law** (lesson **Electromagnetic induction**): a changing magnetic field produces an electric field that curls around it.
- **Maxwell's displacement current** (lesson **Displacement current**): a changing electric field produces a magnetic field that curls around it, exactly as a current would.

So a changing $\vec B$ makes an $\vec E$, and a changing $\vec E$ makes a $\vec B$. Suppose you jiggle a charge. Its electric field nearby changes; that change makes a magnetic field a little further out; that magnetic field is itself changing, so it makes an electric field further out still; and so on. The disturbance **feeds itself and moves away**, with no charges and no medium needed along the way. That travelling pattern of fields is an **electromagnetic wave**.

Two questions follow at once: how fast does it move, and what does it look like? Maxwell answered both from his equations. The speed comes out as

$$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}.$$

Put in the numbers: $\mu_0 = 4\pi\times10^{-7}$ T m A⁻¹ and $\varepsilon_0 = 8.854\times10^{-12}$ C² N⁻¹ m⁻². Then $\mu_0\varepsilon_0 = 1.113\times10^{-17}$ s² m⁻², $\sqrt{\mu_0\varepsilon_0} = 3.336\times10^{-9}$ s/m, and

$$c = 2.998\times10^{8}\ \text{m/s}.$$

$\varepsilon_0$ was measured with charges and capacitors, $\mu_0$ with currents and magnets. Neither experiment involved light. Yet their combination is exactly the measured speed of light. Maxwell drew the conclusion: **light is an electromagnetic wave.** Everything in the Optics pillar (reflection, refraction, interference, diffraction, polarisation) is the behaviour of these waves.

## Where the waves come from {lvl=2 id=s-sources label="Class 12"}

Which charges radiate?

- A **charge at rest** has a static electric field. Nothing changes, so nothing travels.
- A **steady current** (charges moving at constant velocity) has a steady magnetic field. Again nothing changes in time.
- An **accelerated charge** changes its field in a way that cannot keep up everywhere at once: the news of the change spreads outward at $c$. That spreading change is radiation.

**Accelerated charges are the source of electromagnetic waves.** An oscillating charge is the standard example: it radiates waves whose frequency **equals its frequency of oscillation**. The energy comes from whatever keeps the charge oscillating.

This is how a radio transmitter works: an LC oscillator (lesson **LCR circuit and resonance**) drives charges up and down an aerial at, say, 100 MHz, and the aerial radiates 100 MHz waves of wavelength $c/\nu = 3$ m. To radiate efficiently, an antenna must be comparable in size to the wavelength, so FM aerials are about a metre long. Visible light has $\nu \approx 5\times10^{14}$ Hz, far beyond any circuit; it comes from electrons moving within atoms, whose oscillations are that fast.

Hertz made the first waves this way in 1887: a spark across a gap between two metal plates made charges surge back and forth, and a spark in a separate ring of wire some metres away showed that the waves had arrived.

:::qc
q: A charged particle oscillates about its equilibrium position with frequency 10⁹ Hz. What is the wavelength of the waves it radiates?
options: ["3 m", "0.3 m", "30 cm only if it is an electron"]
answer: 1
right: Right. The radiated frequency equals the oscillation frequency, 10⁹ Hz, so λ = c/ν = 3 × 10⁸/10⁹ = 0.3 m. The kind of particle does not matter.
wrong: The wave's frequency is the charge's oscillation frequency, whatever the particle. Then λ = c/ν.
:::

## The shape of a plane wave {lvl=2 id=s-shape label="Class 12"}

Far from its source, a small piece of a spherical wave looks flat: a **plane wave**. Take it travelling along $x$. Maxwell's equations then force three facts on it.

1. **It is transverse.** $\vec E$ and $\vec B$ are both perpendicular to the direction of travel. Neither has a component along $x$.
2. **$\vec E$ and $\vec B$ are perpendicular to each other**, and $\vec E\times\vec B$ points along the direction of travel. If $\vec E$ is along $y$, then $\vec B$ is along $z$ and the wave moves along $+x$.
3. **They oscillate in phase, with $E = cB$** at every point and every instant.

:::law caption="Plane wave along +x in vacuum (NCERT §8.3). E₀ = cB₀, k = 2π/λ, ω = 2πν, and ω/k = c."
$$E_y = E_0\sin(kx-\omega t),\qquad B_z = B_0\sin(kx-\omega t),\qquad \frac{E_0}{B_0} = c = \frac{\omega}{k} = \nu\lambda$$
:::

:::figure caption="A plane electromagnetic wave travelling along +x. The electric field (blue, in the plane of the page) and the magnetic field (orange, drawn obliquely: out of the page) are perpendicular to each other and to the direction of travel, peak together, and fall to zero together. E × B points along the travel."
<svg viewBox="0 0 380 190" role="img" aria-label="Two sine waves sharing an axis: the electric field oscillating up and down in the page and the magnetic field oscillating perpendicular to the page, in phase, with the propagation direction along the axis">
<line class="faint" x1="20" y1="110" x2="345" y2="110"/><polyline class="ln" points="337,106 345,110 337,114"/>
<polyline class="ray" points="30,110.0 35,98.6 40,87.6 45,77.7 50,69.1 55,62.4 60,57.7 65,55.3 70,55.3 75,57.7 80,62.4 85,69.1 90,77.7 95,87.6 100,98.6 105,110.0 110,121.4 115,132.4 120,142.3 125,150.9 130,157.6 135,162.3 140,164.7 145,164.7 150,162.3 155,157.6 160,150.9 165,142.3 170,132.4 175,121.4 180,110.0 185,98.6 190,87.6 195,77.7 200,69.1 205,62.4 210,57.7 215,55.3 220,55.3 225,57.7 230,62.4 235,69.1 240,77.7 245,87.6 250,98.6 255,110.0 260,121.4 265,132.4 270,142.3 275,150.9 280,157.6 285,162.3 290,164.7 295,164.7 300,162.3 305,157.6 310,150.9 315,142.3 320,132.4 325,121.4 330,110.0"/>
<line class="ray" style="stroke-width:1" x1="45" y1="110" x2="45" y2="77.7"/><line class="ray" style="stroke-width:1" x1="60" y1="110" x2="60" y2="57.7"/><line class="ray" style="stroke-width:1" x1="75" y1="110" x2="75" y2="57.7"/><line class="ray" style="stroke-width:1" x1="90" y1="110" x2="90" y2="77.7"/><line class="ray" style="stroke-width:1" x1="120" y1="110" x2="120" y2="142.3"/><line class="ray" style="stroke-width:1" x1="135" y1="110" x2="135" y2="162.3"/><line class="ray" style="stroke-width:1" x1="150" y1="110" x2="150" y2="162.3"/><line class="ray" style="stroke-width:1" x1="165" y1="110" x2="165" y2="142.3"/><line class="ray" style="stroke-width:1" x1="195" y1="110" x2="195" y2="77.7"/><line class="ray" style="stroke-width:1" x1="210" y1="110" x2="210" y2="57.7"/><line class="ray" style="stroke-width:1" x1="225" y1="110" x2="225" y2="57.7"/><line class="ray" style="stroke-width:1" x1="240" y1="110" x2="240" y2="77.7"/><line class="ray" style="stroke-width:1" x1="270" y1="110" x2="270" y2="142.3"/><line class="ray" style="stroke-width:1" x1="285" y1="110" x2="285" y2="162.3"/><line class="ray" style="stroke-width:1" x1="300" y1="110" x2="300" y2="162.3"/><line class="ray" style="stroke-width:1" x1="315" y1="110" x2="315" y2="142.3"/>
<polyline style="stroke:var(--chem);stroke-width:2;fill:none" points="30.0,110.0 29.9,113.7 29.9,117.3 30.5,120.6 31.6,123.4 33.6,125.6 36.5,127.1 40.4,127.9 45.4,127.9 51.5,127.1 58.6,125.6 66.6,123.4 75.5,120.6 84.9,117.3 94.9,113.7 105.0,110.0 115.1,106.3 125.1,102.7 134.5,99.4 143.4,96.6 151.4,94.4 158.5,92.9 164.6,92.1 169.6,92.1 173.5,92.9 176.4,94.4 178.4,96.6 179.5,99.4 180.1,102.7 180.1,106.3 180.0,110.0 179.9,113.7 179.9,117.3 180.5,120.6 181.6,123.4 183.6,125.6 186.5,127.1 190.4,127.9 195.4,127.9 201.5,127.1 208.6,125.6 216.6,123.4 225.5,120.6 234.9,117.3 244.9,113.7 255.0,110.0 265.1,106.3 275.1,102.7 284.5,99.4 293.4,96.6 301.4,94.4 308.5,92.9 314.6,92.1 319.6,92.1 323.5,92.9 326.4,94.4 328.4,96.6 329.5,99.4 330.1,102.7 330.1,106.3 330.0,110.0"/>
<line style="stroke:var(--chem);stroke-width:1" x1="45" y1="110" x2="30.5" y2="120.6"/><line style="stroke:var(--chem);stroke-width:1" x1="60" y1="110" x2="36.5" y2="127.1"/><line style="stroke:var(--chem);stroke-width:1" x1="75" y1="110" x2="51.5" y2="127.1"/><line style="stroke:var(--chem);stroke-width:1" x1="90" y1="110" x2="75.5" y2="120.6"/><line style="stroke:var(--chem);stroke-width:1" x1="120" y1="110" x2="134.5" y2="99.4"/><line style="stroke:var(--chem);stroke-width:1" x1="135" y1="110" x2="158.5" y2="92.9"/><line style="stroke:var(--chem);stroke-width:1" x1="150" y1="110" x2="173.5" y2="92.9"/><line style="stroke:var(--chem);stroke-width:1" x1="165" y1="110" x2="179.5" y2="99.4"/><line style="stroke:var(--chem);stroke-width:1" x1="195" y1="110" x2="180.5" y2="120.6"/><line style="stroke:var(--chem);stroke-width:1" x1="210" y1="110" x2="186.5" y2="127.1"/><line style="stroke:var(--chem);stroke-width:1" x1="225" y1="110" x2="201.5" y2="127.1"/><line style="stroke:var(--chem);stroke-width:1" x1="240" y1="110" x2="225.5" y2="120.6"/><line style="stroke:var(--chem);stroke-width:1" x1="270" y1="110" x2="284.5" y2="99.4"/><line style="stroke:var(--chem);stroke-width:1" x1="285" y1="110" x2="308.5" y2="92.9"/><line style="stroke:var(--chem);stroke-width:1" x1="300" y1="110" x2="323.5" y2="92.9"/><line style="stroke:var(--chem);stroke-width:1" x1="315" y1="110" x2="329.5" y2="99.4"/>
<text class="k" x="58" y="48">E (along y)</text>
<text class="k" x="18" y="140" style="fill:var(--chem)">B (along z)</text>
<text class="k" x="350" y="114">x</text>
<text x="350" y="185" text-anchor="end">direction of travel: E × B</text>
<line class="ln" x1="345" y1="40" x2="370" y2="40"/><polyline class="ln" points="365,37 370,40 365,43"/>
<line class="ln" x1="345" y1="40" x2="345" y2="15"/><polyline class="ln" points="342,20 345,15 348,20"/>
<line class="ln" x1="345" y1="40" x2="333" y2="49"/>
<text x="372" y="44">x</text><text x="349" y="18">y</text><text x="322" y="58">z</text>
</svg>
:::

**Why is $E = cB$?** It is the condition for the two halves of the wave to sustain each other. Faraday's law says the rate at which $B$ changes in time sets how steeply $E$ varies in space; the displacement-current law says the same with the roles swapped. Both can hold for one travelling sine wave only if the amplitudes are in the ratio $c$ (the derivation is in the Olympiad section below).

**Why does $B$ look so small?** In SI units, $B_0 = E_0/c$. A field of 30 V/m (a strong radio signal) goes with $B_0 = 10^{-7}$ T, about five hundred times weaker than the Earth's field. This does not mean the magnetic part is unimportant: the next section shows it carries exactly half the energy.

:::worked title="Reading a wave equation (NCERT Example 8.2)"
A wave has $B_y = (2\times10^{-7}\ \text{T})\sin(0.5\times10^{3}x + 1.5\times10^{11}t)$, with $x$ in metres.

**Direction.** The sign inside is $kx + \omega t$, so a crest moves to **−x**.

**Wavelength and frequency.** $k = 500$ m⁻¹ gives $\lambda = 2\pi/k = 1.26$ cm; $\omega = 1.5\times10^{11}$ s⁻¹ gives $\nu = \omega/2\pi = 23.9$ GHz. Check: $\omega/k = 3\times10^{8}$ m/s.

**Electric field.** $E_0 = cB_0 = 60$ V/m. With $\vec B$ along $y$ and travel along $-x$, the electric field must satisfy $\hat E\times\hat y = -\hat x$, so $\hat E = \hat z$: $E_z = 60\sin(0.5\times10^{3}x + 1.5\times10^{11}t)$ V/m.
:::

:::qc
q: A plane wave in vacuum travels along +z, and at some instant its electric field is along +x. Along which direction is its magnetic field at that point?
options: ["+y", "−y", "+z"]
answer: 0
right: Right. E × B must point along +z; x̂ × ŷ = ẑ, so B is along +y.
wrong: Use E × B = direction of travel. Which unit vector, crossed after x̂, gives ẑ?
:::

**Polarisation is the direction of $\vec E$.** A wave whose $\vec E$ stays along one line is linearly polarised. Natural light is a jumble of waves from many atoms, each with its own $\vec E$ direction: unpolarised. Polaroids, Malus' law and Brewster's angle are all statements about the direction of $\vec E$ (lesson **Polarisation**). Since only transverse waves can be polarised, polarisation is direct evidence for fact 1 above.

## The electromagnetic spectrum {lvl=2 id=s-spectrum label="Class 12"}

Maxwell's equations allow any wavelength. Nature and technology provide waves from shorter than an atomic nucleus to many kilometres long. They differ in **how they are made and detected**, not in what they are. Arranged by wavelength, they form the **electromagnetic spectrum**.

:::figure caption="The electromagnetic spectrum on a logarithmic wavelength scale; each tick is a factor of 1000. Visible light is the narrow coloured strip near 0.5 µm. Band edges are conventional and neighbouring bands overlap. Boundaries follow NCERT Table 8.1 as recalled [Unverified]."
<svg viewBox="0 0 460 150" role="img" aria-label="A horizontal bar divided into gamma rays, X-rays, ultraviolet, a narrow visible strip, infrared, microwaves and radio waves, with wavelength ticks from picometres to kilometres">
<defs><linearGradient id="emw-vis" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#7a3cff"/><stop offset="0.3" stop-color="#2f6bff"/><stop offset="0.5" stop-color="#2fbf4a"/><stop offset="0.7" stop-color="#f2d22e"/><stop offset="1" stop-color="#e5372b"/></linearGradient></defs>
<rect class="m2" x="15" y="50" width="50" height="34" style="stroke:var(--ink);stroke-width:1"/>
<rect class="m2" x="65" y="50" width="75" height="34" style="stroke:var(--ink);stroke-width:1"/>
<rect class="m2" x="140" y="50" width="65" height="34" style="stroke:var(--ink);stroke-width:1"/>
<rect x="205" y="50" width="6" height="34" fill="url(#emw-vis)" style="stroke:var(--ink);stroke-width:1"/>
<rect class="m2" x="211" y="50" width="79" height="34" style="stroke:var(--ink);stroke-width:1"/>
<rect class="m2" x="290" y="50" width="50" height="34" style="stroke:var(--ink);stroke-width:1"/>
<rect class="m2" x="340" y="50" width="100" height="34" style="stroke:var(--ink);stroke-width:1"/>
<text class="k" x="30" y="71">γ</text><text class="k" x="88" y="71">X-ray</text><text class="k" x="160" y="71">UV</text>
<text class="k" x="240" y="71">IR</text><text class="k" x="292" y="71">micro</text><text class="k" x="372" y="71">radio</text>
<line class="ln" x1="208" y1="50" x2="208" y2="30"/><text class="k" x="182" y="24">visible</text>
<line class="ln" x1="65" y1="84" x2="65" y2="94"/><line class="ln" x1="140" y1="84" x2="140" y2="94"/><line class="ln" x1="215" y1="84" x2="215" y2="94"/><line class="ln" x1="290" y1="84" x2="290" y2="94"/><line class="ln" x1="365" y1="84" x2="365" y2="94"/><line class="ln" x1="440" y1="84" x2="440" y2="94"/>
<text x="55" y="107">1 pm</text><text x="130" y="107">1 nm</text><text x="205" y="107">1 µm</text><text x="279" y="107">1 mm</text><text x="358" y="107">1 m</text><text x="425" y="107">1 km</text>
<line class="faint" x1="40" y1="128" x2="420" y2="128"/><polyline class="ln" points="48,124 40,128 48,132"/>
<text x="120" y="145">higher frequency, higher photon energy</text>
</svg>
:::

Approximate ranges and how each band is used. The wavelength boundaries are as recalled from NCERT Table 8.1 and the broadcast bands from general knowledge [Unverified]:

| Band | Wavelength | Made by | Detected by | Uses |
|---|---|---|---|---|
| Radio | > 0.1 m | oscillating currents in aerials | aerial + tuned circuit | AM (about 0.5–1.7 MHz), FM (about 88–108 MHz), TV, mobile phones |
| Microwave | 0.1 m – 1 mm | klystron, magnetron, Gunn diode | point-contact diodes | radar, satellite links, microwave ovens |
| Infrared | 1 mm – 700 nm | hot bodies, molecular vibrations | thermopiles, bolometers, the skin | remote controls, night vision, physiotherapy, greenhouse effect |
| Visible | 700 – 400 nm | electrons in atoms, hot filaments | the eye, photocells, film | sight, photography, optical fibres |
| Ultraviolet | 400 nm – 1 nm | the Sun, arcs, very hot bodies | photocells, film | sterilising water, eye surgery, detecting forged notes |
| X-rays | 1 nm – 10⁻³ nm | fast electrons hitting a metal target | film, Geiger tubes | medical imaging, crystal structure, cancer therapy |
| γ-rays | < 10⁻³ nm | radioactive nuclei | ionisation detectors | cancer therapy, sterilising instruments, nuclear physics |

Some points the table hides:

- **Bands overlap.** An X-ray and a γ-ray of the same wavelength are identical; the names record the source (electrons versus nuclei), not the wave.
- **The eye sees a sliver.** Visible light spans less than a factor of two in wavelength out of about twenty factors of ten in the figure. Our eyes evolved to use it because the Sun is brightest there and the atmosphere and water let it through.
- **Infrared is "heat radiation"** because molecules absorb it into vibration and the energy shows up as warmth. Water and carbon dioxide absorb outgoing infrared from the ground, which keeps the Earth warmer than it would otherwise be (the greenhouse effect).
- **Ultraviolet below about 300 nm is mostly stopped by the ozone layer** [Unverified: approximate cut-off]. That is why ozone depletion matters.
- **Microwave ovens** run near 2.45 GHz ($\lambda \approx 12$ cm) [Unverified]. The oscillating field twists polar water molecules back and forth and the agitation becomes heat.

:::qc
q: Which of these have the same speed in vacuum? X-rays of 10⁻¹⁰ m, red light of 6800 Å, radio waves of 500 m.
options: ["Only the light and the X-rays", "All three", "None: speed grows with frequency"]
answer: 1
right: Right (NCERT Exercise 8.3). They are all electromagnetic waves and all travel at c = 3 × 10⁸ m/s in vacuum; only λ and ν differ, with λν = c.
wrong: In vacuum the speed of every electromagnetic wave is c = 1/√(μ₀ε₀), independent of frequency.
:::

## Energy and intensity {lvl=3 id=s-energy label="JEE"}

A wave carries energy: sunlight warms your skin after crossing 150 million km of empty space. Where is that energy while it travels? **In the fields.** From the lessons **Capacitors** and **Self and mutual inductance**, the energy stored per unit volume in a field is

$$u_E = \tfrac12\varepsilon_0E^2,\qquad u_B = \frac{B^2}{2\mu_0}.$$

In a wave $B = E/c$, so $u_B = E^2/(2\mu_0c^2) = \tfrac12\varepsilon_0E^2 = u_E$, because $1/(\mu_0c^2) = \varepsilon_0$. **The electric and magnetic parts carry equal energy.** The total is $u = \varepsilon_0E^2$.

For $E = E_0\sin(kx-\omega t)$ the average of $\sin^2$ is $\tfrac12$, so the mean energy density is $\langle u\rangle = \tfrac12\varepsilon_0E_0^2$.

**Intensity** $I$ is the average power crossing unit area perpendicular to the travel (W/m²). In time $t$, the energy in a slab of area $A$ and length $ct$ crosses the area, so $I = \langle u\rangle c$:

:::law caption="Intensity of a plane wave in vacuum. E_rms = E₀/√2. Intensity falls as 1/r² from a point source because the power spreads over 4πr²."
$$I = \tfrac12\varepsilon_0cE_0^2 = \frac{cB_0^2}{2\mu_0} = \frac{E_0B_0}{2\mu_0} = \varepsilon_0cE_{\text{rms}}^2$$
:::

**Direction of the energy flow: the Poynting vector.** The energy flux at each instant, in magnitude and direction, is

$$\vec S = \frac{1}{\mu_0}\,\vec E\times\vec B.$$

For a plane wave it points along the travel and its time average is $I$. It is more general than waves: around a resistor carrying current, $\vec S$ points **into** the wire from the surrounding space, and that is how the energy dissipated as heat arrives (lesson **Heating effect and power**). [Inference: stated as a pointer; the full calculation needs the field just outside the wire.]

:::worked title="The field in sunlight"
Sunlight above the atmosphere has intensity about 1.36 kW/m² [Unverified: the solar constant, from memory]. Treat it as one plane wave.

$E_{\text{rms}} = \sqrt{I/(\varepsilon_0c)} = \sqrt{1360/(8.854\times10^{-12}\times3\times10^{8})} = \sqrt{5.12\times10^{5}} \approx 716$ V/m, so $E_0 \approx 1010$ V/m.

$B_0 = E_0/c \approx 3.4\ \mu$T, less than a tenth of the Earth's field.

A thousand volts per metre sounds dangerous, but it reverses direction about $10^{15}$ times a second, far too fast to push charges anywhere.
:::

:::qc
q: A small lamp radiates 100 W of light uniformly in all directions. What is the intensity 2 m away?
options: ["about 2.0 W/m²", "about 8.0 W/m²", "25 W/m²"]
answer: 0
right: Right. I = P/(4πr²) = 100/(4π × 4) ≈ 2.0 W/m². Doubling the distance would quarter it.
wrong: The power spreads over a sphere of area 4πr² = 4π × 2² ≈ 50 m².
:::

## Momentum and radiation pressure {lvl=3 id=s-pressure label="JEE"}

A wave that carries energy also carries momentum. Here is a picture of why. The wave's $\vec E$ (along $y$) drives a charge in an absorbing surface along $y$; that moving charge feels the force $q\vec v\times\vec B$ from the wave's $\vec B$ (along $z$), which points along $\hat y\times\hat z = \hat x$: **along the direction of travel**. Absorbing light pushes the absorber forward.

Working it through gives a simple rule (NCERT §8.3): **a wave that delivers energy $U$ delivers momentum $p = U/c$.** In quantum language each photon has $E = h\nu$ and $p = h/\lambda$, and $E/p = \nu\lambda = c$, the same ratio.

Momentum per second is force. So a beam of power $P$ on a surface exerts:

:::law caption="Radiation force and pressure at normal incidence. A reflector reverses the momentum, so it receives twice as much."
$$F_{\text{absorb}} = \frac{P}{c},\quad F_{\text{reflect}} = \frac{2P}{c};\qquad p_{\text{rad,absorb}} = \frac{I}{c},\quad p_{\text{rad,reflect}} = \frac{2I}{c}$$
:::

The numbers are tiny. Sunlight of 1 kW/m² on a black surface gives $3.3\ \mu$Pa, about $3\times10^{-11}$ of atmospheric pressure. Yet it matters:

- **Comet tails** point away from the Sun partly because sunlight pushes the fine dust.
- **Solar sails**: a 100 m × 100 m mirror near the Earth gets a force of $2 \times 1360 \times 10^{4}/(3\times10^{8}) \approx 0.09$ N, continuously and for free.
- **Optical tweezers** hold living cells with the momentum of focused laser light.
- **Inside stars**, radiation pressure helps hold up the outer layers against gravity.

:::qc lvl=3
q: A 2 W laser beam falls normally on a perfect mirror. What force does it exert?
options: ["6.7 nN", "13.3 nN", "0.67 nN"]
answer: 1
right: Right. A mirror reverses the momentum: F = 2P/c = 4/(3 × 10⁸) = 1.33 × 10⁻⁸ N = 13.3 nN.
wrong: The momentum flow is P/c; reflection reverses it, so the change per second is 2P/c.
:::

**Oblique incidence on a reflector.** If the whole beam (power $P$) strikes a mirror at angle $\theta$ to the normal, only the normal component of momentum reverses: $F = 2P\cos\theta/c$, along the normal. If instead you know the intensity $I$ of a wide beam, the area it lights per unit area of mirror is reduced by another $\cos\theta$, so the **pressure** is $2I\cos^2\theta/c$. Decide which quantity is given before you choose $\cos$ or $\cos^2$.

## Waves in matter {lvl=3 id=s-matter label="JEE"}

In a material with permittivity $\varepsilon = \varepsilon_r\varepsilon_0$ and permeability $\mu = \mu_r\mu_0$, the same argument goes through with $\varepsilon_0, \mu_0$ replaced by $\varepsilon, \mu$:

$$v = \frac{1}{\sqrt{\mu\varepsilon}} = \frac{c}{\sqrt{\mu_r\varepsilon_r}},\qquad n = \frac{c}{v} = \sqrt{\mu_r\varepsilon_r}.$$

Here is the refractive index of the Optics pillar (lesson **Refraction and Snell's law**), explained. For glass and water $\mu_r \approx 1$, so $n \approx \sqrt{\varepsilon_r}$. The material slows light because its charges are polarised by the passing $\vec E$ and re-radiate, and the re-radiated wave adds to the original with a lag.

Inside the medium $E_0 = vB_0 = cB_0/n$. At a boundary the **frequency stays the same** (the charges on the surface are driven at the incoming frequency) while the wavelength becomes $\lambda/n$, which is exactly what Huygens' construction assumed (lesson **Huygens' principle**).

**A puzzle that teaches dispersion.** Water has a static $\varepsilon_r \approx 80$ [Unverified: from memory], which would give $n \approx 9$. Its optical index is 1.33. The resolution: $\varepsilon_r$ depends on frequency. Water's molecules can turn to follow a slowly changing field, but at $5\times10^{14}$ Hz only the electrons can keep up, and they give a much smaller polarisation. A frequency-dependent $\varepsilon_r$ means a frequency-dependent $n$: this is **dispersion**, the reason a prism splits white light (lesson **Prism and dispersion**).

:::qc lvl=3
q: A non-magnetic material has εᵣ = 2.25 at optical frequencies. What is the speed of light in it?
options: ["1.33 × 10⁸ m/s", "2.0 × 10⁸ m/s", "6.75 × 10⁸ m/s"]
answer: 1
right: Right. n = √2.25 = 1.5, so v = c/n = 2.0 × 10⁸ m/s, like ordinary glass.
wrong: n = √(μᵣεᵣ), not εᵣ itself. Take the square root first.
:::

## Photons, the atmosphere and the ionosphere {lvl=3 id=s-photons label="JEE"}

**Photons.** Light is absorbed and emitted in lumps of energy $E = h\nu = hc/\lambda$, with $h = 6.63\times10^{-34}$ J s. A handy form is $hc \approx 1240$ eV nm. So:

- visible light (400–700 nm): about 1.8–3.1 eV per photon, the scale of chemical bonds, which is why light can drive photosynthesis and vision;
- X-rays of 0.1 nm: about 12 keV, enough to knock electrons out of atoms (ionising);
- FM radio of 3 m: about $4\times10^{-7}$ eV, far too little to affect a molecule singly.

This is why ultraviolet causes sunburn and X-rays are rationed while radio waves, however intense, only heat. The wave picture of this lesson and the particle picture are two sides of one thing; the photoelectric effect and the dual nature of radiation come in the later Modern physics pillar.

**Atmospheric windows.** The air is transparent only in a few bands:

- the **optical window** (near-UV through visible to near-IR), with some IR gaps where water vapour and CO₂ absorb;
- the **radio window**, roughly from a centimetre to some tens of metres [Unverified: approximate limits].

Ozone absorbs most UV, and the whole atmosphere stops X-rays and γ-rays, which is why X-ray and γ-ray telescopes fly on satellites.

**The ionosphere.** High above us, solar UV ionises the thin air into a layer of free electrons. For waves below a critical frequency of a few MHz up to about 30 MHz [Unverified], the electrons respond strongly enough to bend the wave back down. **Short-wave and AM radio** therefore travel round the curve of the Earth by bouncing between ground and ionosphere (sky waves). **FM, TV and mobile signals** at higher frequency pass straight through, so they need line-of-sight towers or satellites.

## The wave equation from Maxwell's equations {lvl=4 id=s-derive label="Olympiad"}

Now the derivation behind $c = 1/\sqrt{\mu_0\varepsilon_0}$ and $E = cB$. In empty space (no charges, no currents) take a plane wave along $x$ with $\vec E = E_y(x,t)\,\hat y$ and $\vec B = B_z(x,t)\,\hat z$.

**Faraday's law** on a thin rectangle in the $xy$-plane, width $dx$ along $x$ and height $h$ along $y$, traversed anticlockwise seen from $+z$. The sides along $x$ contribute nothing ($\vec E$ has no $x$ component). The two vertical sides give

$$\oint\vec E\cdot d\vec l = [E_y(x+dx) - E_y(x)]\,h = \frac{\partial E_y}{\partial x}\,h\,dx.$$

The flux through the rectangle is $B_z\,h\,dx$, so $\oint\vec E\cdot d\vec l = -\dfrac{d\Phi_B}{dt}$ gives

$$\frac{\partial E_y}{\partial x} = -\frac{\partial B_z}{\partial t}. \tag{1}$$

**The Ampère–Maxwell law**, $\oint\vec B\cdot d\vec l = \mu_0\varepsilon_0\,d\Phi_E/dt$, on a thin rectangle in the $xz$-plane (width $dx$, height $h$ along $z$), traversed anticlockwise seen from $+y$. Going anticlockwise seen from $+y$ means up the $z$-side at $x$ and down at $x + dx$ (because $\hat z\times\hat x = \hat y$). The circulation is $[B_z(x) - B_z(x+dx)]h$, the flux of $\vec E$ is $E_y\,h\,dx$, so

$$-\frac{\partial B_z}{\partial x} = \mu_0\varepsilon_0\,\frac{\partial E_y}{\partial t}. \tag{2}$$

**Combine.** Differentiate (1) with respect to $x$ and (2) with respect to $t$, and eliminate the mixed derivative of $B_z$:

$$\frac{\partial^2E_y}{\partial x^2} = -\frac{\partial}{\partial t}\frac{\partial B_z}{\partial x} = \mu_0\varepsilon_0\,\frac{\partial^2E_y}{\partial t^2}.$$

This is the **wave equation** $\partial^2 f/\partial x^2 = (1/v^2)\,\partial^2 f/\partial t^2$, the same one obeyed by waves on a string, whose solutions are any shape $f(x \mp vt)$ moving rigidly at speed $v$. Here $v^2 = 1/(\mu_0\varepsilon_0)$. $B_z$ obeys the same equation.

**The ratio $E/B$.** Try $E_y = E_0\sin(kx-\omega t)$. Equation (1) gives $\partial B_z/\partial t = -kE_0\cos(kx-\omega t)$, so $B_z = (k/\omega)E_0\sin(kx-\omega t)$: **in phase**, with $B_0 = E_0/c$. And $\hat y\times\hat z = \hat x$: $\vec E\times\vec B$ along the travel.

**Transversality.** Gauss's law in empty space, $\oint\vec E\cdot d\vec S = 0$, applied to a thin box with faces at $x$ and $x+dx$, forces $\partial E_x/\partial x = 0$: a longitudinal part could only be a constant, not a wave. The same holds for $\vec B$. That is why light has two independent polarisations and not three.

:::qc lvl=4
q: In a region with no charges, a wave has E_y = E₀ sin(kx + ωt). Using ∂E_y/∂x = −∂B_z/∂t, what is B_z?
options: ["+(E₀/c) sin(kx + ωt)", "−(E₀/c) sin(kx + ωt)", "(E₀/c) cos(kx + ωt)"]
answer: 1
right: Right. ∂E_y/∂x = kE₀ cos(kx + ωt) = −∂B_z/∂t gives B_z = −(k/ω)E₀ sin(kx + ωt). Then E × B ∝ ŷ × (−ẑ) = −x̂: the wave moves along −x, as kx + ωt says.
wrong: Integrate −kE₀ cos(kx + ωt) with respect to t; the derivative of sin(kx + ωt) with respect to t is +ω cos(kx + ωt).
:::

## Why accelerated charges radiate: the kinked field line {lvl=4 id=s-kink label="Olympiad"}

A neat argument (due to J. J. Thomson) shows why acceleration, and only acceleration, radiates, and gives the field of the wave.

A charge $q$ sits at rest at the origin. At $t = 0$ it accelerates with $a$ for a short time $\Delta t$, reaching a small speed $v = a\Delta t \ll c$, and then coasts. Look at the field at a later time $t$:

- Beyond radius $ct$, the news has not arrived. The field lines still point radially from the **old** position.
- Inside radius $c(t - \Delta t)$, the field lines point radially from the **current** position (a slowly moving charge has an almost radial field).
- In the thin shell of thickness $c\Delta t$ between them, each field line must join its outer part to its inner part. Since the two parts are offset sideways by about $vt\sin\theta$, the line runs **sideways** across the shell: a kink.

In the kink, the ratio of transverse to radial field equals the sideways offset over the shell thickness:

$$\frac{E_\perp}{E_r} = \frac{vt\sin\theta}{c\,\Delta t} = \frac{a\,t\sin\theta}{c}.$$

With $E_r = q/(4\pi\varepsilon_0r^2)$ and $t = r/c$:

$$E_\perp = \frac{q\,a\sin\theta}{4\pi\varepsilon_0c^2\,r}.$$

The radial field falls as $1/r^2$, but **the kink field falls only as $1/r$**, because the kink gets longer as the shell expands. Energy flux goes as $E^2 \propto 1/r^2$ and the area of the shell as $r^2$: the energy carried out is independent of distance. It escapes to infinity. That is radiation. With no acceleration there is no kink and no radiation.

The transverse field is largest at $\theta = 90°$ (perpendicular to the acceleration) and zero along the acceleration. Integrate $S = E_\perp^2/(\mu_0c)$ over a sphere, using $\int\sin^2\theta\,d\Omega = 8\pi/3$:

:::law caption="The Larmor formula: power radiated by a charge with acceleration a (non-relativistic)."
$$P = \frac{q^2a^2}{6\pi\varepsilon_0c^3}$$
:::

**Consequences.**

- **The classical atom should collapse.** An electron orbiting a proton should radiate its energy away in about $10^{-11}$ s. That it does not is one of the failures of classical physics that led to quantum mechanics (Bohr's postulates, in the Modern physics pillar).
- **X-ray tubes** work by slamming fast electrons into a metal target: the huge deceleration radiates X-rays (bremsstrahlung, "braking radiation").
- **Synchrotron light**: electrons forced round a ring accelerate centripetally and radiate intensely.

## Dipole antennas, scattering and cavities {lvl=4 id=s-dipole label="Olympiad"}

**The oscillating dipole.** Charges surging up and down a short wire make a dipole $p = p_0\cos\omega t$; the acceleration is proportional to $\omega^2p_0$. Two results follow from the Larmor picture.

1. **Pattern.** The radiated field goes as $\sin\theta$ and the intensity as $\sin^2\theta$, where $\theta$ is measured from the wire. A vertical antenna sends most power horizontally and **none straight up along its own axis**. The field of the radiated wave lies in the plane containing the wire and the line of sight, so the wave is polarised along the wire's projection.
2. **Power grows as $\omega^4$.** Average power $\propto p_0^2\omega^4$. A real antenna is made about half a wavelength long so that the current in it resonates; a 100 MHz FM dipole is about 1.5 m.

These two facts explain two results of the Optics pillar (lesson **Atmospheric refraction and scattering**):

- Air molecules are tiny dipoles driven by sunlight. They re-radiate with power $\propto\omega^4\propto1/\lambda^4$, so blue is scattered about $(700/400)^4 \approx 9$ times more than red: **the sky is blue**.
- A molecule cannot radiate along the direction its electrons oscillate. Look at the sky at 90° to the Sun: the only oscillation that can send light to you is perpendicular to the plane of Sun, molecule and you, so that skylight is **polarised**. The same no-radiation-along-the-axis rule gives **Brewster's angle** (lesson **Polarisation**).

**Standing waves in a cavity.** Between two parallel mirrors (or the metal walls of a microwave oven), a wave and its reflection superpose into a **standing wave**. $\vec E$ along a perfect conductor must vanish at the wall, so the walls are nodes of $E$ and the gap must hold a whole number of half-wavelengths, $L = m\lambda/2$, as for a string fixed at both ends. The magnetic field has its antinodes where $E$ has nodes, and the two are a quarter-period out of step in time: energy sloshes back and forth between electric and magnetic form. This is why a microwave oven has hot and cold spots (and a turntable), and how a laser selects its wavelengths. Interference of electromagnetic waves in general is in the lesson **Interference and Young's experiment**; their spreading around obstacles, in **Diffraction**.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A changing $\vec B$ makes $\vec E$ (Faraday); a changing $\vec E$ makes $\vec B$ (displacement current). Together they make a self-sustaining wave that needs no medium. {lvl=2}
2. Speed in vacuum: $c = 1/\sqrt{\mu_0\varepsilon_0} = 3.00\times10^8$ m/s for every wavelength. Light is an electromagnetic wave. {lvl=2}
3. Accelerated charges radiate; an oscillating charge radiates at its own oscillation frequency. {lvl=2}
4. Plane wave: $\vec E\perp\vec B\perp$ travel, $\vec E\times\vec B$ along the travel, in phase, $E_0 = cB_0$, $\omega/k = \nu\lambda = c$. {lvl=2}
5. Spectrum by increasing wavelength: γ, X-ray, UV, visible, IR, microwave, radio. They differ in source and detector, not in nature. {lvl=2}
6. Polarisation is the direction of $\vec E$. {lvl=2}
7. Energy density $u = \varepsilon_0E^2$, split equally between $E$ and $B$; intensity $I = \tfrac12\varepsilon_0cE_0^2$; Poynting vector $\vec S = \vec E\times\vec B/\mu_0$. {lvl=3}
8. Momentum $p = U/c$; radiation pressure $I/c$ (absorber), $2I/c$ (reflector). {lvl=3}
9. In matter $v = c/n$ with $n = \sqrt{\mu_r\varepsilon_r}$; frequency is unchanged at a boundary. {lvl=3}
10. Photon energy $h\nu = hc/\lambda$, with $hc \approx 1240$ eV nm. {lvl=3}
11. From Maxwell's curl equations: $\partial^2E/\partial x^2 = \mu_0\varepsilon_0\,\partial^2E/\partial t^2$. Radiation field $\propto qa\sin\theta/r$; Larmor power $q^2a^2/(6\pi\varepsilon_0c^3)$; dipole intensity $\propto\sin^2\theta\,\omega^4$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The frequency of the wave **equals** the oscillation frequency of the charge; it is not doubled or halved. {lvl=2}
- $E_0 = cB_0$, not $B_0 = cE_0$. In SI units $B$ is the small number. {lvl=2}
- To find the direction of the missing field, use $\vec E\times\vec B$ = direction of travel. Read the travel direction from the sign: $kx - \omega t$ is $+x$, $kx + \omega t$ is $-x$. {lvl=2}
- A small $B_0$ does **not** mean the magnetic field carries little energy: $u_E = u_B$ exactly. {lvl=3}
- Intensity uses the **average** $\tfrac12\varepsilon_0cE_0^2$; with rms field it is $\varepsilon_0cE_{\text{rms}}^2$. Don't add both halves of the energy and also halve. {lvl=3}
- Reflector: $2I/c$; absorber: $I/c$. For a given beam power at angle $\theta$ the force on a mirror is $2P\cos\theta/c$; for a given intensity the pressure is $2I\cos^2\theta/c$. {lvl=3}
- In a medium, frequency stays fixed and wavelength shrinks to $\lambda/n$; $E_0 = vB_0$, not $cB_0$. {lvl=3}
- Use the optical $\varepsilon_r$ in $n = \sqrt{\varepsilon_r}$, not the static one. {lvl=3}
- Larmor's formula needs the **acceleration**, not the speed; a charge in uniform motion does not radiate. {lvl=4}
:::
