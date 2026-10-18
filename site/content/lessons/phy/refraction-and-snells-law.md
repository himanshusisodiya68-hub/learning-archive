---
title: Refraction and Snell's law
summary: 'Why a straw looks broken in a glass of water, and the simple rule that tells you exactly how much light bends.'
ncert: ["Class 8 Curiosity · Ch 10 Light: Mirrors and Lenses", "Class 10 Science · Ch 9 Light – Reflection and Refraction (§9.3)", "Class 12 Physics · Ch 9 Ray Optics (§9.3–9.4)"]
up_to: Olympiad
builds_on: [Laws of reflection, Speed of light, Sine of an angle, Vectors (JEE level), Derivatives and maxima (Olympiad level)]
notes_prompt: Explain refraction to a Class 8 student using the marching-band picture.
margin:
  - kind: history
    title: History
    text: Ibn Sahl described the law of refraction in Baghdad around 984. Willebrord Snell found it again in 1621, and it carries his name.
  - kind: tip
    title: Board favourite
    text: Apparent depth = real depth ÷ n, valid only when viewing nearly straight down.
  - kind: olympiad
    title: Olympiad link
    text: Snell's law follows from the principle of least time. The same reasoning leads to the brachistochrone and to Lagrangian mechanics.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 18 Geometrical Optics (refraction at plane surfaces)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.1 Photometry and geometrical optics" }
  - { title: "The Feynman Lectures on Physics Vol. I", ref: "Ch. 26 Optics: The Principle of Least Time" }
cards:
  - { front: "State Snell's law and say what the refractive index $n$ measures.", back: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$, angles from the normal. $n = c/v$: how many times slower light travels in the medium than in vacuum." }
  - { front: "Light enters a medium of higher refractive index. Which way does it bend?", back: "Towards the normal (it slows down). Into a lower index it bends away from the normal." }
  - { front: "Define the refractive index of medium 2 with respect to medium 1.", back: "$n_{21} = \\dfrac{v_1}{v_2} = \\dfrac{n_2}{n_1}$, the ratio of the speed of light in medium 1 to that in medium 2." }
  - { front: "Is an optically denser medium always denser in mass?", back: "No. Kerosene (n = 1.44) is optically denser than water (n = 1.33) but floats on water." }
  - { front: "Critical angle condition?", back: "Light going from dense to rare: $\\sin\\theta_c = n_2/n_1$. Beyond $\\theta_c$, total internal reflection." }
  - { front: "What stays the same when light crosses into a new medium: speed, wavelength or frequency?", back: "Frequency. Speed and wavelength both change by the factor $n_1/n_2$." }
core:
  idea: 'Light travels at $v = c/n$ in a medium. At a boundary its frequency is fixed and the wavefront turns so that $n\sin\theta$ is the same on both sides: $n_1\sin\theta_1 = n_2\sin\theta_2$, with angles from the normal. Equivalently, the travel time along the actual path is stationary.'
  formulas:
    - tex: 'n_1\sin\theta_1 = n_2\sin\theta_2'
      label: 'Snell''s law'
    - tex: 'n = \frac{c}{v}'
      label: 'Absolute refractive index'
    - tex: '\text{apparent depth} = \frac{\text{real depth}}{n}'
      label: 'Object in a denser medium seen from air, near-normal viewing'
  conditions:
    - 'Each medium is uniform and isotropic, with a sharp plane boundary between them'
    - 'Monochromatic light, since $n$ depends on wavelength'
    - 'All angles are measured from the normal, and the incident ray, refracted ray and normal lie in one plane'
    - 'For the apparent-depth rule, the eye looks almost straight down so angles are small'
  sign: 'Entering a higher $n$, light slows and bends towards the normal; entering a lower $n$, it bends away. Optically denser means higher $n$, not higher mass density.'
outcomes:
  - 'State the laws of refraction and compute refracted angles with $n_1\sin\theta_1 = n_2\sin\theta_2$'
  - 'Explain refraction using the change of light speed, and find the shift of a ray through a glass slab'
  - 'Calculate apparent depth, and show that frequency stays fixed while speed and wavelength change'
  - 'Use the invariant $n\sin\theta$ through stacks of layers and the vector form of Snell''s law'
  - 'Derive Snell''s law from Fermat''s principle and trace rays in graded-index media'
opener:
  story: |
    Put a straw in a glass of water and look from the side. It seems to snap at the surface, as if the part underwater had slid sideways and shrunk.

    Nothing broke. Lift the straw out and it is perfectly straight. Look at your legs in a swimming pool and they seem short and stubby. Look at a coin at the bottom of a bucket and it floats higher than it really is.

    Light is playing a trick on you, and it plays it by a rule so exact that you can calculate every trick in advance. So what is light doing at the surface of the water?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A straw in water seems to bend and shorten at the surface"><rect x="90" y="40" width="140" height="170" rx="6" style="fill:none;stroke:var(--ink);stroke-width:2"/><rect x="92" y="120" width="136" height="88" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface))"/><line x1="92" y1="120" x2="228" y2="120" style="stroke:var(--c);stroke-width:2"/><line x1="200" y1="20" x2="158" y2="120" style="stroke:var(--ink);stroke-width:4;stroke-linecap:round"/><line x1="158" y1="120" x2="120" y2="200" style="stroke:var(--muted);stroke-width:4;stroke-dasharray:5 5;stroke-linecap:round"/><line x1="158" y1="120" x2="145" y2="168" style="stroke:var(--chem);stroke-width:4;stroke-linecap:round"/><text x="240" y="118" style="font-size:11px;fill:var(--muted)">water surface</text><text x="238" y="170" style="font-size:11px;fill:var(--chem)">what you see</text><text x="238" y="190" style="font-size:11px;fill:var(--muted)">where it really is</text></svg>'
life:
  - 'A swimming pool looks shallower than it is, so the deep end can surprise you.'
  - 'Spear fishermen aim below where the fish appears to be, because the fish is deeper than it looks.'
  - 'Spectacles, cameras, binoculars and your own eye all work by bending light at curved glass or tissue surfaces.'
  - 'A glass rod seems to vanish in a liquid with nearly the same refractive index as glass.'
  - 'The shimmering pool of water on a hot summer road is light bending through layers of air of different temperature.'
models:
  - name: 'When one edge slows first, the whole front turns'
    text: 'A marching column swings round when one end hits mud first. A change that reaches part of a group first can redirect the whole group, as one division meeting a new market can pivot a company.'
  - name: 'Find what cannot change'
    text: 'Across the boundary the frequency stays fixed, and so does $n\sin\theta$. In a hard problem, first find the quantity that stays put, then let everything else adjust around it.'
  - name: 'Quickest is not shortest'
    text: 'Light takes the path of least time, not least distance, like a lifeguard who runs further along the sand before swimming. Optimise what really matters, which is often not the obvious measure.'
links:
  - leaf: 'phy/huygens-principle'
    name: 'Huygens'' principle'
    same: 'Wavefronts give Snell''s law directly: the part of the front that enters the slower medium lags behind, so the whole front swings round, just as a marching column does.'
    differs: 'Snell''s law tells you the angle; Huygens tells you why, and goes on to explain diffraction and interference, where the ray picture is silent.'
  - leaf: 'mat/applications-of-derivatives'
    name: 'Applications of derivatives'
    same: 'Finding the quickest route across two media is a minimising problem: set the derivative of the travel time to zero and Snell''s law appears. It is the same method as finding the cheapest price or the biggest box.'
    differs: 'In a maths exercise you choose what to minimise; light just does it, and strictly the time is stationary, not always a minimum.'
next:
  q: 'Going into glass, light bends towards the normal; coming out, it bends away. But if it hits the surface steeply enough from inside glass or water, there is no more bending room left. What does the light do then?'
  leaf: 'phy/total-internal-reflection'
  name: 'Total internal reflection'
symbols:
  - s: 'v'
    means: 'speed of light in the medium (m/s)'
  - s: 'c'
    means: 'speed of light in vacuum, 3 × 10^8 m/s'
  - s: 'n'
    means: 'absolute refractive index of the medium (no unit)'
  - s: 'n_1'
    means: 'refractive index of the first medium, where the ray starts (no unit)'
  - s: '\theta_1'
    means: 'angle of incidence, measured from the normal (degrees)'
  - s: 'n_2'
    means: 'refractive index of the second medium (no unit)'
  - s: '\theta_2'
    means: 'angle of refraction, measured from the normal (degrees)'
---

:::hook
q: So what's your guess? A coin lies at the bottom of a bucket with water 40 cm deep. Looking straight down, how deep does it seem?
options: ["40 cm", "about 30 cm", "about 53 cm"]
answer: 1
right: Right. Light from the coin bends away from the vertical as it leaves the water, so your eye traces it back to a shallower point: 40 ÷ 1.33 ≈ 30 cm. The same bending snaps the straw and shortens your legs in a pool. The exact rule behind it is below.
wrong: Not quite. Water always makes things look shallower, which is why a pool is deeper than it looks and a straw seems to bend. The rule below tells you exactly how much.
:::

## The idea {lvl=1 id=s-idea}

Light travels at about $3 \times 10^8$ m/s in vacuum and more slowly inside matter. When a beam crosses into a new material at an angle, one edge of the beam slows down before the other, so the beam swings round. A column of marchers turns the same way when one end steps into mud first.

The **refractive index** compares the two speeds. The absolute refractive index of a medium is

$$n = \frac{c}{v} = \frac{\text{speed of light in vacuum}}{\text{speed of light in the medium}}.$$

The refractive index of medium 2 **with respect to** medium 1 is $n_{21} = v_1/v_2 = n_2/n_1$. A larger $n$ means slower light and a sharper bend towards the normal. The medium with the larger index is called **optically denser**.

**The laws of refraction:**

1. The incident ray, the refracted ray and the normal at the point of incidence all lie in one plane.
2. For light of a given colour and a given pair of media, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant (**Snell's law**):

:::law caption="Both angles are measured from the normal."
$$n_1 \sin\theta_1 = n_2 \sin\theta_2 \qquad\text{equivalently}\qquad \frac{\sin i}{\sin r} = n_{21}$$
:::

### How much do materials slow light?

NCERT's Table 9.3 lists absolute refractive indices:

| Material | $n$ | Material | $n$ |
|---|---|---|---|
| Air | 1.0003 | Canada balsam | 1.53 |
| Ice | 1.31 | Rock salt | 1.54 |
| Water | 1.33 | Carbon disulphide | 1.63 |
| Alcohol | 1.36 | Dense flint glass | 1.65 |
| Kerosene | 1.44 | Ruby | 1.71 |
| Fused quartz | 1.46 | Sapphire | 1.77 |
| Turpentine oil | 1.47 | Diamond | 2.42 |
| Benzene | 1.50 | | |
| Crown glass | 1.52 | | |

Optical density is not mass density. Kerosene has a higher refractive index than water, so it is optically denser, yet it is less dense in mass and floats on water.

:::qc
q: Light passes from water (n = 1.33) into glass (n = 1.5). Which way does it bend?
options: ["Towards the normal", "Away from the normal"]
answer: 0
right: Right. Glass has the higher index, so light slows down and bends towards the normal.
wrong: Not quite. It is entering a medium with a higher index, where it travels more slowly.
:::

## Move the ray yourself {lvl=1 id=s-sim}

:::widget name=refraction-sim
:::

## Worked example {lvl=1 id=s-ex1}

:::worked title="A ray entering glass"
A ray in air strikes a glass slab ($n = 1.5$) at 60° to the normal. Find the angle of refraction.

$1.00 \times \sin 60^\circ = 1.5 \sin\theta_2$, so $\sin\theta_2 = 0.866/1.5 = 0.577$ and $\theta_2 \approx 35.3^\circ$. The ray bends towards the normal, as expected for a slower medium.
:::

## Through a glass slab {lvl=1 id=s-slab}

NCERT's activity: place a rectangular glass slab on paper, draw its outline, and look through it at two pins. The ray bends towards the normal entering the glass and away from the normal leaving it. Because both faces are parallel, the two bends cancel: **the emergent ray is parallel to the incident ray**, only shifted sideways. Letters seen through a thick glass slab look raised for the same reason.

:::figure caption="Parallel slab: the ray leaves parallel to its original direction, shifted sideways by d."
<svg viewBox="0 0 360 220" role="img" aria-label="Lateral shift: a ray crosses a glass slab and leaves parallel to its original direction, shifted sideways by d"><rect class="m2" x="0" y="60" width="360" height="100"/><line class="ln" x1="0" y1="60" x2="360" y2="60"/><line class="ln" x1="0" y1="160" x2="360" y2="160"/><line class="faint" x1="120" y1="25" x2="120" y2="95"/><line class="faint" x1="179.4" y1="125" x2="179.4" y2="195"/><line class="faint" x1="120" y1="60" x2="286.8" y2="200"/><line class="ray" x1="66.4" y1="15" x2="120" y2="60"/><line class="ray" x1="120" y1="60" x2="179.4" y2="160"/><line class="ray" x1="179.4" y1="160" x2="225.4" y2="198.6"/><line class="gr" x1="194.7" y1="172.9" x2="219.4" y2="143.5" style="stroke-width:1.6"/><text class="k" x="214" y="176">d</text><text x="100" y="40">i</text><text x="126" y="96">r</text><line class="gr" x1="340" y1="60" x2="340" y2="160"/><text class="k" x="346" y="114">t</text><text x="12" y="112">glass slab</text></svg>
:::

## Where you see it {lvl=1 id=s-see}

:::see
<figure class="fig"><svg viewBox="0 0 160 120" role="img" aria-label="A pencil in a glass of water looks bent at the surface"><rect class="m2" x="40.7" y="55" width="78.6" height="54.3"/><path class="gr" d="M40 20V110H120V20"/><line class="ln" x1="40" y1="55" x2="120" y2="55"/><line class="pen" x1="30" y1="10" x2="65" y2="55"/><line class="pen" x1="65" y1="55" x2="104" y2="82"/><line class="faint" x1="65" y1="55" x2="100" y2="100"/></svg><figcaption>A pencil looks bent<span>The submerged part appears raised: dashed is where it really is.</span></figcaption></figure>
<figure class="fig"><svg viewBox="0 0 160 120" role="img" aria-label="A pool appears shallower than it is"><rect class="m2" x="10" y="40" width="140" height="70"/><line class="ln" x1="10" y1="40" x2="150" y2="40"/><line class="ln" x1="10" y1="110" x2="150" y2="110"/><line class="faint" x1="10" y1="92.6" x2="150" y2="92.6"/><ellipse class="eye" cx="132" cy="16" rx="7" ry="3.5"/><text x="14" y="105">real floor</text><text x="14" y="88">appears here</text></svg><figcaption>Pools look shallower<span>Seen from above, a 2 m pool looks about 1.5 m deep.</span></figcaption></figure>
<figure class="fig"><svg viewBox="0 0 160 120" role="img" aria-label="Mirage: light from a tree curves up off hot air above a road"><rect class="hot" x="0" y="80" width="160" height="15"/><rect class="road" x="0" y="95" width="160" height="25"/><rect class="tree" x="26" y="58" width="4" height="37"/><circle class="tree" cx="28" cy="50" r="12"/><path class="ray" d="M36 50Q80 130 140 70"/><line class="faint" x1="140" y1="70" x2="98" y2="112"/><circle class="ghost-tree" cx="94" cy="114" r="8"/><ellipse class="eye" cx="146" cy="68" rx="6" ry="3"/></svg><figcaption>Mirages<span>Hot air near the road has a lower index, so light from the sky curves upwards.</span></figcaption></figure>
:::

A lemon in a glass of water looks bigger than it is, for the same reason. The atmosphere bends light on a larger scale: air thins with height, so starlight bends as it comes down. Stars appear slightly higher than they are and twinkle as the air moves, and the Sun is visible about two minutes before it actually rises. Those effects belong to the next chapter, on the human eye.

## Why the law holds {lvl=2 id=s-why}

Treat light as a wavefront, a line of crests that moves perpendicular to itself. Let the front AB reach the surface at A while its other end B still has a distance BC to go.

:::figure caption="Wavefront AB arrives; the wavelet from A grows to radius AD while B travels to C; DC is the new wavefront."
<svg viewBox="0 0 360 240" role="img" aria-label="Huygens construction: wavefront AB meets the surface; wavelet from A of radius AD; refracted wavefront DC"> <rect class="m2" x="0" y="120" width="360" height="120"/> <line class="ln" x1="0" y1="120" x2="360" y2="120"/> <line class="ray" x1="26.4" y1="75" x2="80" y2="120"/> <line class="ray" x1="80" y1="120" x2="146.4" y2="231.8"/> <line class="ray" x1="139.6" y1="2.2" x2="280" y2="120"/> <line class="ray" x1="280" y1="120" x2="310.6" y2="171.6"/> <path class="faint" d="M182.1,120 A102.1,102.1 0 0 1 80,222.1"/> <line class="wf" x1="80" y1="120" x2="162.6" y2="21.5"/> <line class="wf" x1="132.1" y1="207.8" x2="280" y2="120"/> <text class="k" x="68" y="112">A</text><text class="k" x="168" y="20">B</text> <text class="k" x="284" y="112">C</text><text class="k" x="118" y="222">D</text> <text x="232" y="64">v₁t</text><text x="70" y="178">v₂t</text> <text x="8" y="16">medium 1 (n₁)</text><text x="250" y="234">medium 2 (n₂)</text> </svg>
:::

In the time $t$ that B takes to reach C at speed $v_1$, the wavelet from A spreads into medium 2 to a radius $AD = v_2 t$. The new wavefront is the line from C that just touches this wavelet. Triangles ABC and ADC share the side AC, so

$$\sin i = \frac{BC}{AC} = \frac{v_1 t}{AC}, \qquad \sin r = \frac{AD}{AC} = \frac{v_2 t}{AC} \quad\Rightarrow\quad \frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{n_2}{n_1}.$$

The law is a statement about speeds and nothing else. The frequency cannot change at the boundary, because crests arrive at the surface at one rate on both sides. So the wavelength shrinks in the slower medium: $\lambda_2 = \lambda_1 n_1/n_2$.

## Consequences you will use constantly {lvl=2 id=s-cons label="JEE Main"}

- **Reversibility.** A ray sent backwards retraces its path, so $n_{12} = 1/n_{21}$.
- **Deviation at one surface.** The ray turns by $\delta = i - r$.
- **Critical angle.** Going from dense to rare, the refracted ray grazes the surface when $\sin\theta_c = n_2/n_1$. Beyond $\theta_c$ all the light reflects (**total internal reflection**). The largest turn refraction alone can give is $90^\circ - \theta_c$.
- **Apparent depth, near-normal viewing.** An object at depth $h$ in a medium of index $n$, seen from air, appears at $h/n$. In general, apparent depth = real depth × $n_{\text{observer}}/n_{\text{object}}$.
- **Parallel slab.** The lateral shift is $d = t\sin(i - r)/\cos r$, because the path inside is $t/\cos r$ long and makes angle $i - r$ with the original line. Seen face-on, the slab lifts an image by $t(1 - 1/n)$.

:::figrow
<figure class="fig"><svg viewBox="0 0 360 220" role="img" aria-label="Apparent depth: rays from a coin bend at the surface and seem to come from a higher point"><rect class="m2" x="0" y="70" width="360" height="150"/><line class="ln" x1="0" y1="70" x2="360" y2="70"/><line class="faint" x1="190" y1="40" x2="190" y2="100"/><line class="ray" x1="150" y1="190" x2="150" y2="20"/><line class="ray" x1="150" y1="190" x2="190" y2="70"/><line class="ray" x1="190" y1="70" x2="217.8" y2="10"/><line class="faint" x1="190" y1="70" x2="150" y2="156"/><circle class="obj" cx="150" cy="190" r="6"/><circle class="ghost" cx="150" cy="156" r="6"/><ellipse class="eye" cx="224" cy="9" rx="7" ry="3.5"/><line class="gr" x1="110" y1="70" x2="110" y2="190"/><line class="gr" x1="104" y1="190" x2="116" y2="190"/><line class="gr" x1="128" y1="70" x2="128" y2="156"/><line class="gr" x1="122" y1="156" x2="134" y2="156"/><text x="30" y="150">real depth</text><text x="8" y="112">apparent depth</text><text class="k" x="162" y="194">O</text><text class="k" x="162" y="160">I</text><text x="300" y="50">air</text><text x="300" y="100">water</text></svg><figcaption>Apparent depth: the coin O is seen at I.</figcaption></figure>
<figure class="fig"><svg viewBox="0 0 360 170" role="img" aria-label="Three rays from an underwater lamp: one refracts, one grazes the surface at the critical angle, one is totally reflected"><rect class="m2" x="0" y="70" width="360" height="100"/><line class="ln" x1="0" y1="70" x2="360" y2="70"/><line class="faint" x1="162.7" y1="40" x2="162.7" y2="100"/><line class="faint" x1="290.7" y1="40" x2="290.7" y2="100"/><line class="faint" x1="49.5" y1="40" x2="49.5" y2="100"/><polyline class="ray" points="200,150 162.7,70 126.1,16.3"/><polyline class="ray" points="200,150 290.7,70 350,70"/><polyline class="ray" points="200,150 49.5,70 5.3,93.5"/><circle class="obj" cx="200" cy="150" r="5"/><text x="132" y="22">refracts</text><text x="250" y="62">grazes at θc</text><text x="14" y="116">totally reflected</text><text x="320" y="30">air</text><text x="300" y="164">water</text></svg><figcaption>Beyond the critical angle no light escapes.</figcaption></figure>
:::

:::qc lvl=2
q: Can total internal reflection happen when light travels from air into water?
options: ["Yes", "No"]
answer: 1
right: Right. It needs light going from a higher index to a lower one. Going from air into water there is always a refracted ray.
wrong: No. Entering a higher index, sin θ₂ = sin θ₁/n is always below 1, so a refracted ray always exists.
:::

## The invariant n sin θ {lvl=3 id=s-inv label="JEE Advanced"}

Stack any number of parallel layers. At every boundary the product $n\sin\theta$ is handed on unchanged:

$$n_1\sin\theta_1 = n_2\sin\theta_2 = \dots = n_k\sin\theta_k$$

The final direction depends only on the first and last media, never on the layers between. This turns multilayer problems into one line. It also tells you where total internal reflection happens deep inside a stack: wherever $n_1\sin\theta_1$ exceeds the local $n$. In the limit of a continuously varying index it becomes $n(y)\sin\theta(y) = \text{constant}$.

:::qc lvl=3
q: Light enters a stack of glass and water layers from air at 40° and finally leaves into air again. At what angle does it leave?
options: ["40°", "Less than 40°", "Depends on the thicknesses"]
answer: 0
right: Right. n sin θ is the same in the first and last medium, and both are air.
wrong: Use the invariant: only the first and last media matter.
:::

## Apparent depth at an angle {lvl=3 id=s-depth label="Irodov"}

The rule $h/n$ assumes you look almost straight down. Look obliquely and the image moves. Put the object at depth $h$ in water and follow a ray leaving at angle $\theta_1$. It meets the surface at $x = h\tan\theta_1$ and continues in air at $\theta_2$, with $n\sin\theta_1 = \sin\theta_2$.

Your eye collects a thin bundle of neighbouring rays, and the image is where those rays, traced backwards, cross. A backward-traced ray at depth $y$ sits at $x - y\tan\theta_2$; neighbouring rays meet where this does not change with $\theta_1$:

$$\frac{dx}{d\theta_1} = y\sec^2\theta_2\,\frac{d\theta_2}{d\theta_1}, \qquad \frac{dx}{d\theta_1} = h\sec^2\theta_1, \qquad n\cos\theta_1\,d\theta_1 = \cos\theta_2\,d\theta_2$$

:::eq caption="θ₁ in water, θ₂ in air. For θ → 0 this returns h/n."
$$h' = \frac{h\cos^3\theta_2}{n\cos^3\theta_1}$$
:::

Since $\theta_2 > \theta_1$, the ratio is below $1/n$: the more obliquely you look, the shallower the object seems. That is why the floor of a pool appears to rise towards the far end.

## Snell's law as a vector equation {lvl=3 id=s-vec label="Irodov"}

Let $\hat{\mathbf{k}}_1$ and $\hat{\mathbf{k}}_2$ be unit vectors along the incident and refracted rays, and $\hat{\mathbf{N}}$ the unit normal pointing into medium 2. Snell's law and the rule that both rays share a plane with the normal combine into one statement: the part of $n\hat{\mathbf{k}}$ along the surface is conserved.

$$n_1(\hat{\mathbf{k}}_1\times\hat{\mathbf{N}}) = n_2(\hat{\mathbf{k}}_2\times\hat{\mathbf{N}}) \iff n_2\hat{\mathbf{k}}_2 = n_1\hat{\mathbf{k}}_1 + (n_2\cos\theta_2 - n_1\cos\theta_1)\,\hat{\mathbf{N}}$$

This form handles tilted surfaces in three dimensions without drawing anything, which makes it the natural tool for prism and wedge problems, and it is the formula ray-tracing software uses.

## Fermat's principle {lvl=4 id=s-fermat}

One rule produces straight-line travel, reflection and refraction together: **light follows a path along which the travel time is stationary**. Equivalently, the optical path length $\int n\,ds$ is stationary.

Put A at height $a$ above the boundary and B at depth $b$ below it, a horizontal distance $d$ apart. If the ray crosses at $x$, then

$$c\,T(x) = n_1\sqrt{a^2 + x^2} + n_2\sqrt{b^2 + (d - x)^2}.$$

Setting $dT/dx = 0$ gives $n_1 x/\sqrt{a^2 + x^2} = n_2 (d - x)/\sqrt{b^2 + (d - x)^2}$, and each fraction is a sine: $n_1\sin\theta_1 = n_2\sin\theta_2$. "Stationary" matters: for some curved mirrors the actual path takes the longest time, not the shortest.

:::qc lvl=4
q: Does light always take the path of least time?
options: ["Yes, always", "No, the time is stationary"]
answer: 1
right: Right. The time is stationary: a minimum, a maximum or a saddle point. Some curved mirrors give a maximum.
wrong: Not always. The rule is that the time is stationary; for some curved mirrors it is a maximum.
:::

## Curved rays in graded media {lvl=4 id=s-grad}

If $n$ changes smoothly with height, the layer invariant becomes $n(y)\sin\theta(y) = \text{constant}$, with $\theta$ measured from the vertical. The ray bends steadily towards higher $n$, with curvature set by the part of the index gradient perpendicular to the ray:

$$\frac{1}{R} = \frac{1}{n}\frac{\partial n}{\partial N}, \qquad\text{and in general}\qquad \frac{d}{ds}\!\left(n\,\frac{d\mathbf{r}}{ds}\right) = \nabla n.$$

The second form, the **ray equation**, is Newton's second law for light rays.

:::figure caption="Index rising upwards: a horizontal ray bends into a parabola."
<svg viewBox="0 0 360 200" role="img" aria-label="A ray launched horizontally curves into a parabola towards the region of higher refractive index"><rect class="band" x="0" y="4" width="360" height="28" opacity="0.245"/><rect class="band" x="0" y="32" width="360" height="28" opacity="0.210"/><rect class="band" x="0" y="60" width="360" height="28" opacity="0.175"/><rect class="band" x="0" y="88" width="360" height="28" opacity="0.140"/><rect class="band" x="0" y="116" width="360" height="28" opacity="0.105"/><rect class="band" x="0" y="144" width="360" height="28" opacity="0.070"/><rect class="band" x="0" y="172" width="360" height="28" opacity="0.035"/><path class="ray" d="M20 170Q170 170 320 30"/><circle class="obj" cx="20" cy="170" r="4"/><line class="gr" x1="340" y1="150" x2="340" y2="62" style="stroke-width:1.6"/><path class="gr" d="M334 70l6-10 6 10" style="stroke-width:1.6"/><text class="k" x="318" y="166">∇n</text><text x="16" y="22">higher n</text><text x="16" y="192">lower n</text></svg>
:::

:::worked title="Worked example: a parabolic ray"
A medium has $n^2 = n_0^2(1 + \alpha y)$. A ray starts horizontally at $y = 0$. Find its path.

Horizontal start means $\sin\theta = 1$ at $n = n_0$, so $n\sin\theta = n_0$ everywhere. The slope is $dy/dx = \cot\theta = \sqrt{n^2 - n_0^2}/n_0 = \sqrt{\alpha y}$. Separate and integrate: $2\sqrt{y} = \sqrt{\alpha}\,x$, so $y = \alpha x^2/4$. The ray is a parabola, bending towards larger $n$.
:::

A mirage on a hot road is the same physics: air near the surface is hotter, so its index is lower, and rays from the sky curve upwards into your eye from below.

## Two refinements {lvl=4 id=s-refine}

- **Dispersion.** $n$ depends on wavelength. For glass in the visible range, Cauchy's formula $n(\lambda) \approx A + B/\lambda^2$ works well, so violet bends more than red. This is how a prism splits white light.
- **How much light reflects.** Refraction never takes all of the light. At normal incidence the reflected fraction is $R = \left(\frac{n_1 - n_2}{n_1 + n_2}\right)^2$, about 4% at an air–glass surface. The Fresnel equations give the angle dependence.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Light changes speed in a new medium; $n = c/v$.
2. $n_1\sin\theta_1 = n_2\sin\theta_2$, with angles from the normal and all rays in one plane.
3. Into a higher index the ray bends towards the normal; into a lower index, away from it.
4. A parallel slab shifts a ray sideways without changing its direction.
5. Looking straight down, apparent depth = real depth ÷ $n$.
6. Frequency stays fixed at a boundary; speed and wavelength change. {lvl=2}
7. From dense to rare, beyond $\sin\theta_c = n_2/n_1$, all the light reflects. {lvl=2}
8. $n\sin\theta$ is the same in every layer of a parallel stack. {lvl=3}
9. Light takes a path of stationary travel time; in graded media rays curve towards higher $n$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Angles are measured from the normal. Many problems give the angle with the surface instead.
- Optically denser means higher refractive index, not higher mass density.
- Total internal reflection needs light going from dense to rare. Check the direction before using $\sin\theta_c = n_2/n_1$. {lvl=2}
- For small angles, $\sin\theta \approx \tan\theta \approx \theta$ (in radians) turns most near-normal problems into simple ratios. {lvl=2}
- In layered problems, use $n\sin\theta = $ constant and skip the layers in between. {lvl=3}
- $h/n$ is a near-normal result. For oblique viewing, use the $\cos^3$ formula. {lvl=3}
- Any "quickest route" puzzle, such as a lifeguard running then swimming, is Snell's law with speeds in place of indices. {lvl=4}
:::
