---
title: Viscosity
summary: Why honey pours slowly, why a falling marble stops speeding up, and why a tiny cloud droplet can hang in the air for hours.
ncert: ["Class 11 Physics · Ch 9 Mechanical Properties of Fluids (§9.5 Viscosity, §9.5.1 Stokes' law, §9.3 Streamline flow)"]
up_to: Olympiad
builds_on: [Newton's laws, Friction, Pressure and buoyancy]
notes_prompt: Explain to a ten-year-old why a marble dropped into honey does not keep speeding up, and why a big raindrop falls faster than a tiny one.
margin:
  - kind: history
    title: History
    text: "George Stokes worked out the drag on a slowly moving sphere in 1851. Millikan later used Stokes' law on tiny falling oil drops (around 1909) to measure the charge of the electron. [Unverified, exact years]"
  - kind: tip
    title: Exam favourite
    text: "Terminal velocity: set weight equal to buoyancy plus drag, and you get v = 2a²(ρ − σ)g / 9η. Remember it goes as the square of the radius."
  - kind: olympiad
    title: Olympiad link
    text: "Dimensional analysis alone forces the drag on a slow sphere to be proportional to ηav. Only the number 6π needs real hydrodynamics."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 2", ref: "Ch. 41 The Flow of Wet Water (feynmanlectures.caltech.edu) [Unverified: chapter number from memory]" }
  - { title: "Resnick, Halliday, Walker, Fundamentals of Physics", ref: "Fluids chapter: viscosity is not treated in depth [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 14 Some Mechanical Properties of Matter [Unverified]" }
cards:
  - { front: "Define the coefficient of viscosity.", back: "Shear stress divided by rate of shear strain: $\\eta = (F/A)/(v/l)$. SI unit: pascal second (Pa s); dimensions $[ML^{-1}T^{-1}]$." }
  - { front: "Stokes' law for a small sphere moving slowly through a fluid?", back: "Drag $F = 6\\pi\\eta a v$: proportional to the speed, the radius and the viscosity." }
  - { front: "Terminal velocity of a sphere of radius a, density ρ, in a fluid of density σ and viscosity η?", back: "$v_t = \\dfrac{2a^2(\\rho-\\sigma)g}{9\\eta}$. It goes as $a^2$." }
  - { front: "How does temperature change viscosity?", back: "Liquids get less viscous when warmed; gases get more viscous." }
  - { front: "What is the Reynolds number and what does it tell you?", back: "$Re = \\rho v d/\\eta$, the ratio of inertial to viscous effects. Small $Re$: smooth laminar flow. Large $Re$ (above roughly 1000 to 2000 in a pipe): turbulence." }
  - { front: "Poiseuille's law for flow through a tube?", back: "$Q = \\pi a^4 \\Delta P / 8\\eta L$: flow rate goes as the fourth power of the radius." }
core:
  idea: 'Fluid layers drag on each other as they slide past, and that internal friction is viscosity. A body moving slowly through a fluid feels a drag proportional to its speed, so a falling body speeds up only until the drag (plus buoyancy) cancels its weight, and then falls at a steady terminal velocity.'
  formulas:
    - tex: '\dfrac{F}{A} = \eta\,\dfrac{v}{l}'
      label: 'Viscous force on a layer: stress equals viscosity times rate of shear'
    - tex: 'F = 6\pi\eta a v'
      label: 'Stokes'' drag on a small sphere'
    - tex: 'v_t = \dfrac{2a^2(\rho-\sigma)g}{9\eta}'
      label: 'Terminal velocity of a sphere'
  conditions:
    - 'Smooth (laminar) flow, no eddies'
    - 'Stokes'' law: a sphere, moving slowly, in a fluid that extends far beyond it (roughly $Re$ below 1)'
    - 'The fluid sticks to every surface it touches (no slip at the wall)'
    - 'Constant temperature, since $\eta$ depends strongly on it'
  sign: 'Viscous force always opposes the relative motion of the two layers. Do not forget buoyancy when you balance forces in a liquid.'
outcomes:
  - 'Explain viscosity as friction between layers of a fluid, and use $F = \eta A v/l$'
  - 'Explain why a falling body reaches a terminal velocity and calculate it with Stokes'' law'
  - 'Say why the terminal speed goes as the square of the radius and what that means for rain, fog and dust'
  - 'Tell laminar from turbulent flow and use the Reynolds number to judge which one you have'
  - 'Use Poiseuille''s law to see why a small narrowing of a pipe or artery cuts the flow so much'
opener:
  story: |
    Drop a marble into a jar of water and it plunges to the bottom. Drop it into a jar of honey and it sinks lazily, as if it were wading through a crowd. Watch carefully and you will notice something odd: after the first moment, it does not seem to speed up any more.

    That is strange. Gravity keeps pulling with exactly the same force the whole way down. Newton says a constant force means a constant acceleration, which means the marble should keep getting faster and faster. Yet it settles into a steady crawl.

    The same thing happens to rain. A raindrop falls two kilometres, yet it hits you at a few metres per second, not at the 200 metres per second of a bullet. **What is going on in the honey, and in the sky?**
  art: '<svg viewBox="0 0 360 240" role="img" aria-label="A marble sinking through honey: the marks along its path first spread out, then stay evenly spaced"><rect x="90" y="30" width="140" height="190" rx="14" style="fill:color-mix(in srgb,var(--chem) 22%,var(--surface));stroke:var(--ink);stroke-width:2"/><rect x="90" y="30" width="140" height="14" rx="6" style="fill:var(--surface);stroke:none"/><circle cx="160" cy="62" r="9" style="fill:var(--surface);stroke:var(--c);stroke-width:2;stroke-dasharray:3 3"/><circle cx="160" cy="76" r="9" style="fill:var(--surface);stroke:var(--c);stroke-width:2;stroke-dasharray:3 3"/><circle cx="160" cy="98" r="9" style="fill:var(--surface);stroke:var(--c);stroke-width:2;stroke-dasharray:3 3"/><circle cx="160" cy="128" r="9" style="fill:var(--surface);stroke:var(--c);stroke-width:2;stroke-dasharray:3 3"/><circle cx="160" cy="162" r="9" style="fill:var(--surface);stroke:var(--c);stroke-width:2;stroke-dasharray:3 3"/><circle cx="160" cy="196" r="9" style="fill:var(--c);stroke:var(--ink);stroke-width:2"/><path d="M250 64 L250 196" style="fill:none;stroke:var(--muted);stroke-width:1"/><path d="M244 128 H256 M244 162 H256 M244 196 H256" style="fill:none;stroke:var(--muted);stroke-width:1.5"/><text x="262" y="68" style="font-size:11px;fill:var(--muted)">speeding up</text><text x="262" y="178" style="font-size:11px;fill:var(--muted)">same gaps:</text><text x="262" y="192" style="font-size:11px;fill:var(--muted)">steady speed</text><text x="104" y="238" style="font-size:11px;fill:var(--muted)">a marble in honey</text></svg>'
life:
  - 'Honey, engine oil and shampoo flow slowly because their layers drag on each other; warm them and they pour much faster.'
  - 'A raindrop reaches a steady terminal speed, and a skydiver does too (about 55 m/s belly-down), because air drag grows with speed until it matches weight.'
  - 'Fog and cloud droplets stay in the air for hours: a drop 10 micrometres across falls only about a centimetre per second.'
  - 'Blood is about 2.7 times more viscous than water (NCERT Table 9.2), and the heart must push it through ever-narrower vessels.'
  - 'Cream rises through milk, and mud slowly settles in a pond, at the speed Stokes'' law predicts; a centrifuge simply makes gravity much bigger.'
models:
  - name: 'Speed-limited by your own resistance'
    text: 'When the resistance grows with speed and the push does not, you do not accelerate forever: you settle at the speed where the two balance. It is the terminal velocity of a falling body, the top speed of a car, and the steady level of a medicine in blood.'
  - name: 'Small things live in a different world'
    text: 'Weight goes as size cubed but drag goes as size, so at small sizes drag wins. Ants survive falls, dust hangs in the air, bacteria cannot coast. Before you guess how a thing behaves, ask how big it is.'
  - name: 'The ratio decides the regime'
    text: 'The Reynolds number is one ratio, push-to-keep-going over internal friction, and it predicts smooth versus turbulent flow for oil in a pipe and for air round a plane. Many puzzles reduce to "which of two competing effects wins?"'
links:
  - leaf: 'phy/friction'
    name: 'Friction'
    same: 'Both are forces that oppose relative motion and turn motion into heat. Both give a limiting speed or a stopping distance.'
    differs: 'Solid friction is nearly independent of speed and area. Viscous drag grows in proportion to the speed (and to the area, for a sliding layer), and it is zero when nothing moves.'
  - leaf: 'phy/resistance-and-resistivity'
    name: 'Resistance and resistivity'
    same: 'Poiseuille''s law is Ohm''s law for fluids: pressure difference plays the part of voltage, flow rate the part of current, and $8\eta L/\pi a^4$ the part of resistance. Pipes in series and parallel combine like resistors.'
    differs: 'The resistance of a tube goes as $1/a^4$, but a wire''s resistance goes only as $1/a^2$.'
next:
  q: 'Viscosity is a force that comes from the whole liquid sliding. But a drop of water on a leaf pulls itself into a ball, and a needle can rest on water. What force acts at the edge of a liquid, where there is no liquid on one side?'
  leaf: 'phy/surface-tension'
  name: 'Surface tension'
symbols:
  - s: 'F'
    means: 'force, here the viscous force on a layer or the drag on a ball (newtons, N)'
  - s: 'A'
    means: 'area of the sliding layer (m^2)'
  - s: 'v'
    means: 'speed of a layer, or of a ball through the fluid (m/s)'
  - s: 'l'
    means: 'thickness of the fluid between the two surfaces (m)'
  - s: '\eta'
    means: 'coefficient of viscosity: how strongly layers drag on each other (pascal second, Pa s)'
  - s: 'a'
    means: 'radius of the sphere, or of the tube in Poiseuille''s law (m)'
  - s: '\rho'
    means: 'density of the sphere (kg/m^3)'
  - s: '\sigma'
    means: 'density of the fluid (kg/m^3)'
  - s: 'v_t'
    means: 'terminal velocity, the steady speed at the end of a fall (m/s)'
  - s: 'Re'
    means: 'Reynolds number, a pure number (no unit)'
  - s: 'd'
    means: 'diameter of the pipe or size of the object (m)'
  - s: '\Delta P'
    means: 'pressure difference between the two ends of a tube (pascal, Pa)'
  - s: 'L'
    means: 'length of the tube (m)'
  - s: 'Q'
    means: 'volume of liquid flowing past per second (m^3/s)'
  - s: '\tau'
    means: 'time constant of the approach to terminal speed (s)'
---

:::hook
q: So what's your guess? A marble is released in a deep jar of honey. What does its speed do as it sinks?
options: ["Keeps increasing, like free fall, just more slowly", "Increases at first, then levels off to a steady speed", "Stays tiny, because honey is so thick that the marble never speeds up at all"]
answer: 1
right: Right. At the start the marble is slow, so honey drags it only a little and gravity wins. As it speeds up, the drag grows until it exactly cancels the weight (less the buoyancy). Then nothing is left to accelerate it, and it sinks at a steady speed.
wrong: Gravity does speed the marble up at the start, because a slow marble feels almost no drag. But the drag grows with speed, so it must catch up with the weight. At that moment the acceleration stops, and the speed stays constant for the rest of the fall.
:::

## The sticky layers {lvl=1 id=s-layers label="Class 9"}

Try to slide your hand across a table with a thin film of oil on it. It slides, but you feel a steady drag. The oil is not a solid, yet it does not let you glide freely either. Picture the oil as a stack of very thin layers, like a deck of cards. The layer touching your hand moves with your hand. The layer touching the table stays at rest. In between, each layer drags its slower neighbour forward and is dragged back by its faster neighbour. This internal friction between layers is **viscosity**.

:::figure caption="A plate slides over a fixed floor with a film of oil between them. The layer next to the plate moves at speed v, the layer next to the floor is at rest, and the speeds in between change smoothly."
<svg viewBox="0 0 380 200" role="img" aria-label="A moving plate above a thin oil film over a fixed floor, with arrows of decreasing length from top to bottom">
<defs><marker id="vi1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="vi2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<rect x="40" y="32" width="250" height="18" rx="3" style="fill:var(--sunk);stroke:var(--ink);stroke-width:1.4"/>
<rect x="40" y="50" width="250" height="100" class="m2"/>
<rect x="40" y="150" width="250" height="16" style="fill:var(--sunk);stroke:var(--ink);stroke-width:1.4"/>
<line class="wf" x1="300" y1="41" x2="345" y2="41" marker-end="url(#vi2)"/><text class="k" x="318" y="30">F</text>
<line class="ray" x1="40" y1="62" x2="250" y2="62" marker-end="url(#vi1)"/>
<line class="ray" x1="40" y1="82" x2="205" y2="82" marker-end="url(#vi1)"/>
<line class="ray" x1="40" y1="102" x2="160" y2="102" marker-end="url(#vi1)"/>
<line class="ray" x1="40" y1="122" x2="115" y2="122" marker-end="url(#vi1)"/>
<line class="ray" x1="40" y1="142" x2="70" y2="142" marker-end="url(#vi1)"/>
<line class="faint" x1="250" y1="50" x2="40" y2="150"/>
<text class="k" x="255" y="60">v</text>
<text x="46" y="182">fixed floor</text><text x="298" y="110">film,</text><text x="298" y="123">thickness l</text>
<line class="ln" x1="22" y1="50" x2="22" y2="150"/><line class="ln" x1="18" y1="50" x2="26" y2="50"/><line class="ln" x1="18" y1="150" x2="26" y2="150"/><text class="k" x="6" y="104">l</text>
</svg>
:::

To keep the plate moving at a steady speed you must keep pushing. How hard? Experiments say the push is larger for a bigger plate, a faster plate and a thinner film. Put in words: the force per area needed (the **shear stress**) is proportional to how quickly the speed changes across the film (the **rate of shear strain**, speed difference divided by thickness). The constant of proportionality is the **coefficient of viscosity**, written $\eta$ (eta).

A worked number first. A plate of area $0.20\ \text{m}^2$ slides at $0.50\ \text{m/s}$ over a film of oil $1.0\ \text{mm}$ thick, and the oil's viscosity is $0.10\ \text{Pa s}$. The speed changes by $0.50$ m/s over $0.0010$ m, so the rate of shear is $500$ per second. The stress is $0.10\times500 = 50\ \text{N/m}^2$. On $0.20\ \text{m}^2$ that is a force of $10$ N. In symbols:

$$\frac{F}{A} = \eta\,\frac{v}{l}.$$

Read it as: the push per area equals the viscosity times the speed change per thickness. The unit of $\eta$ follows: (N/m²) divided by (1/s) is N s/m², called the pascal second (Pa s). NCERT's Table 9.2 lists water at about $1.0\times10^{-3}$ Pa s at 20 °C and glycerine at $0.83$ Pa s, more than eight hundred times thicker.

Two things to notice. First, a solid resists the *amount* of shear (a rubber block pushes back harder the more you shear it), while a fluid resists the *rate* of shear. A fluid under a steady push keeps flowing, and stops resisting the moment you stop. Second, **temperature matters in opposite ways**. A warm liquid flows more easily because its molecules escape each other's grip. A warm gas is more viscous because fast molecules wandering between layers carry more momentum across.

:::qc lvl=1
q: You double the thickness of the oil film but keep the plate's area and speed the same. What happens to the force needed?
options: ["It doubles", "It halves", "It stays the same"]
answer: 1
right: Right. The speed change is spread over twice the thickness, so the rate of shear is halved, and so is the force.
wrong: The force is proportional to $v/l$. Doubling $l$ does what to that ratio?
:::

## A ball in honey: terminal velocity {lvl=2 id=s-stokes label="Class 11"}

Now back to the marble. A moving ball drags the fluid right next to it along (that layer sticks to the ball), and that layer drags the next, and so on. So the fluid pulls back on the ball. Stokes found that for a small sphere moving slowly the pull-back is proportional to the speed, to the radius of the ball and to the viscosity. The pure number in front turns out to be $6\pi$:

$$F = 6\pi\eta a v.$$

Read it as: twice the speed, twice the drag; a ball twice as wide, twice the drag. (NCERT quotes this law without deriving it.)

Now picture the fall. Three forces act on the ball: its weight pulling down, the buoyancy pushing up (the weight of the fluid it displaces, the lesson on pressure and buoyancy), and the drag, which always points against the motion. At the first instant $v=0$ and there is no drag. The ball accelerates. As $v$ grows the drag grows, and the net force down shrinks. Eventually the three forces balance and the acceleration is zero. The speed at that point is the **terminal velocity**. Balance them:

$$\underbrace{\tfrac43\pi a^3\rho g}_{\text{weight}} = \underbrace{\tfrac43\pi a^3\sigma g}_{\text{buoyancy}} + \underbrace{6\pi\eta a v_t}_{\text{drag}}\quad\Longrightarrow\quad v_t = \frac{2a^2(\rho-\sigma)g}{9\eta}.$$

Read it as: a fatter, denser ball falls faster; a thicker fluid slows it. Mostly: **radius counts twice**, since doubling $a$ makes $v_t$ four times larger. Here $\rho$ is the ball's density and $\sigma$ the fluid's.

:::figure caption="Speed against time for a ball released from rest in a viscous fluid. The speed rises quickly and flattens out at the terminal velocity. The curve reaches about 63% of that value after one time constant."
<svg viewBox="0 0 360 200" role="img" aria-label="Speed versus time graph rising and levelling off at terminal velocity">
<line class="ln" x1="46" y1="160" x2="330" y2="160"/><line class="ln" x1="46" y1="160" x2="46" y2="20"/>
<line class="faint" x1="46" y1="42" x2="330" y2="42"/>
<path class="ray" d="M46 160 C 80 90, 120 56, 170 48 S 270 43, 326 42" style="stroke-width:2.4"/>
<line class="faint" x1="104" y1="160" x2="104" y2="72"/><line class="faint" x1="46" y1="72" x2="104" y2="72"/>
<text class="k" x="10" y="30">v</text>
<text class="k" x="326" y="176">t</text>
<text x="100" y="176">τ</text>
<text x="110" y="92">63% of v</text><text x="164" y="38">terminal velocity</text>
<text x="52" y="184">release</text>
</svg>
:::

:::worked title="Why a cloud droplet hangs in the air"
A droplet of water of radius $10\ \mu\text{m}$ ($10^{-5}$ m) falls in air. Air's viscosity is about $1.8\times10^{-5}$ Pa s (NCERT's table gives 0.017 to 0.019 mPl, which is the same thing). Water is about 1000 kg/m³ and air about 1.2 kg/m³, so we can drop the buoyancy.

$$v_t = \frac{2\times(10^{-5})^2\times1000\times9.8}{9\times1.8\times10^{-5}} \approx 1.2\times10^{-2}\ \text{m/s},$$

about a centimetre per second. A gentle updraught is enough to hold it up, which is why clouds float instead of falling out of the sky as a single splash. A drop ten times wider has a terminal velocity a hundred times larger, about a metre per second (a rough figure, because Stokes' law then begins to fail, see below).
:::

:::qc lvl=2
q: A ball of radius $a$ reaches terminal speed $v_t$ in a thick oil. What is the terminal speed of a ball of the same material and radius $2a$ in the same oil?
options: ["$2v_t$", "$4v_t$", "$8v_t$"]
answer: 1
right: Right. Weight goes as $a^3$ (eight times larger), but drag at a given speed goes only as $a$ (twice larger), so the speed must rise four times to make the drag match. That is the $a^2$ rule.
wrong: Weight scales as $a^3$ and drag as $a\,v$. Setting them equal, how must $v$ scale?
:::

## Smooth flow and turbulence {lvl=2 id=s-flow label="Class 11"}

Open a tap slowly and the water comes out as a smooth glassy rod. Open it fully and it breaks into a roaring, twisting mess. Both are water flowing under gravity, and the difference is a change in the *kind* of flow.

In **streamline** (laminar) flow, every bit of fluid follows a smooth path, and layers slide over each other without mixing. Viscosity does all the work here, and the velocity in a pipe is greatest in the middle and zero at the walls, because the fluid sticks to the pipe (NCERT Fig. 9.12b). In **turbulent** flow, the paths are tangled, with swirling eddies that mix the fluid and cost much more energy.

:::figure caption="Flow in a pipe. Top: laminar flow, with a smooth speed profile that is largest on the axis and zero at the wall. Bottom: turbulent flow, with eddies and a much flatter profile."
<svg viewBox="0 0 360 200" role="img" aria-label="Two pipes: smooth parallel streamlines with a parabolic velocity profile, and a pipe with swirling eddies">
<defs><marker id="vi3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<line class="ln" x1="30" y1="20" x2="330" y2="20"/><line class="ln" x1="30" y1="86" x2="330" y2="86"/>
<line class="ray" x1="40" y1="36" x2="320" y2="36" style="stroke-width:1.4"/><line class="ray" x1="40" y1="53" x2="320" y2="53" style="stroke-width:1.4"/><line class="ray" x1="40" y1="70" x2="320" y2="70" style="stroke-width:1.4"/>
<path class="wf" d="M240 20 Q300 53 240 86" style="stroke-width:1.6"/>
<line class="wf" x1="240" y1="53" x2="290" y2="53" marker-end="url(#vi3)" style="stroke-width:1.2"/>
<text x="42" y="14">laminar: smooth layers</text>
<line class="ln" x1="30" y1="116" x2="330" y2="116"/><line class="ln" x1="30" y1="182" x2="330" y2="182"/>
<path class="ray" d="M40 132 Q70 120 100 134 T160 132 T220 136 T280 130 T320 134" style="stroke-width:1.4"/>
<path class="ray" d="M40 150 Q80 166 110 148 T170 152 T230 146 T290 154 T320 150" style="stroke-width:1.4"/>
<path class="ray" d="M40 168 Q70 158 105 170 T165 166 T225 172 T290 164 T320 168" style="stroke-width:1.4"/>
<circle class="faint" cx="130" cy="150" r="12"/><circle class="faint" cx="212" cy="145" r="14"/><circle class="faint" cx="272" cy="160" r="10"/>
<text x="42" y="110">turbulent: eddies and mixing</text>
</svg>
:::

Turbulence is also why a smoothly shaped aeroplane wing is so valuable, why a river becomes quiet in a wide, deep reach, and why NCERT's Exercise 9.14 asks about a model plane in a wind tunnel. We come to the number that predicts it in the JEE section below.

:::qc lvl=2
q: In laminar flow in a pipe, where is the fluid moving fastest?
options: ["At the wall", "On the axis (the middle)", "It moves at the same speed everywhere"]
answer: 1
right: Right. The fluid in contact with the wall is held at rest by the no-slip condition, and each layer inward is dragged along by the one before it, so the speed rises to a maximum on the axis.
wrong: Think about the layer touching the wall. It sticks to the pipe, so what is its speed?
:::

## The Reynolds number {lvl=3 id=s-reynolds label="JEE"}

When does the smooth flow break up? Think of two competing tendencies. A moving fluid has **inertia**: a lump of it wants to keep going straight, and bumps and swirls can grow. Viscosity works against that: it smooths out differences between neighbouring layers. If viscosity wins, the flow stays smooth; if inertia wins, it turns turbulent.

The ratio of the two is a single pure number, the **Reynolds number**:

$$Re = \frac{\rho\,v\,d}{\eta}.$$

Read it as: density times speed times size, divided by viscosity. Here $d$ is a typical width of the flow (the pipe's diameter, say). (A rough way to see where it comes from: the inertial force on a blob of size $d$ is about $\rho v^2d^2$, the viscous force about $\eta vd$, and their ratio is $\rho vd/\eta$.)

For flow in a pipe, the flow is usually smooth for $Re$ below about 1000 and turbulent above about 2000 to 3000, with an uncertain zone between. These threshold numbers are the standard values, but they are not in the 2026-27 NCERT reprint text [Unverified against the reprint].

:::worked title="Three flows, three worlds"
**Garden hose.** Water ($\rho = 1000$, $\eta = 10^{-3}$) at 1 m/s in a pipe 2 cm wide: $Re = 1000\times1\times0.02/10^{-3} = 2\times10^{4}$. Very turbulent.

**Blood in the aorta.** $\rho\approx1060$, $v\approx0.3$ m/s, $d\approx0.025$ m, $\eta = 2.7\times10^{-3}$: $Re\approx3\times10^{3}$, right at the edge. Doctors can hear turbulence with a stethoscope when it is not meant to be there. [Unverified: typical physiological values from memory]

**A swimming bacterium.** $d\approx1\ \mu\text{m}$, $v\approx30\ \mu\text{m/s}$, in water: $Re = 1000\times3\times10^{-5}\times10^{-6}/10^{-3}\approx3\times10^{-5}$. Viscosity utterly dominates: if the bacterium stops pushing, it halts in a distance far smaller than an atom. [Unverified: typical size and speed]
:::

The same number settles a model-testing puzzle (NCERT Exercise 9.3e): a scale model of a plane is smaller, so to have the same $Re$ as the real plane it must be tested at a *greater* speed. That is why wind tunnels are fast.

The Reynolds number also tells you when Stokes' law can be trusted. The drag $6\pi\eta av$ assumes viscosity rules, so it needs $Re$ for the ball, $\rho_{\text{fluid}}\,v\,2a/\eta$, to be below about 1. Our 100-micrometre-radius droplet above has $Re\approx16$, so the answer 1.2 m/s is an overestimate. When $Re$ is large, the drag stops being proportional to $v$ and becomes proportional to $v^2$: roughly $F\approx\tfrac12C\,\sigma\,\pi a^2v^2$, with a shape factor $C$ near 0.5 for a sphere [Unverified: typical value]. That is the regime for a real raindrop. A drop of radius 2 mm balances weight and this drag at

$$v_t\approx\sqrt{\frac{\tfrac43\pi a^3\rho g}{\tfrac12\times0.5\times1.2\times\pi a^2}}\approx9\ \text{m/s},$$

which is close to what is observed. Notice that now $v_t\propto\sqrt a$, not $a^2$: big drops still fall faster, but only a bit faster. That is the answer to the raindrop puzzle (NCERT-style board question: why does rain not hit like bullets?).

:::qc lvl=3
q: A model of a ship is 1/25 of the real length. Water is used for both. For the same Reynolds number, how must the model's speed compare with the ship's?
options: ["25 times larger", "25 times smaller", "The same"]
answer: 0
right: Right. Since $Re\propto vd$ with the same $\rho$ and $\eta$, a model 25 times smaller must go 25 times faster. (In practice this is impractical for ships, so other tricks are used. That is why model testing is an art.)
wrong: $Re = \rho vd/\eta$. With $\rho$ and $\eta$ fixed, what must happen to $v$ if $d$ shrinks to one twenty-fifth?
:::

## Flow through a tube: Poiseuille {lvl=3 id=s-poiseuille label="JEE"}

How much liquid runs through a narrow pipe when you push it? A pressure difference $\Delta P$ between the two ends drives the flow; viscosity at the wall resists it. Poiseuille's law gives the volume flowing per second:

$$Q = \frac{\pi a^4\,\Delta P}{8\,\eta\,L}.$$

Read it as: more pressure push, more flow; more viscosity or a longer pipe, less flow; and above all **the radius to the fourth power**. (This is a standard result that the 2026-27 reprint no longer derives [Unverified against the reprint]. NCERT Exercise 9.13 uses it.)

Where does the fourth power come from? A scaling argument gets the dependence (the 8 needs integration). The push on the liquid in the tube is $\Delta P\times\pi a^2$. The viscous drag on the wall is roughly $\eta\times(v/a)\times2\pi aL$, because the speed drops from about $v$ in the middle to zero over a distance about $a$. Setting these equal gives $v\propto\Delta P\,a^2/\eta L$. The flow rate is speed times area $\pi a^2$, so $Q\propto a^4$. A wider pipe helps twice: more area, *and* less wall friction per unit of liquid.

:::worked title="A narrowed artery"
A fat deposit narrows an artery so that its radius shrinks by 20%, from $a$ to $0.8a$. With the same pressure drive, the flow becomes $0.8^4 = 0.41$ of what it was: it falls by almost 60%. The heart has to raise the pressure by $1/0.41\approx2.4$ times to keep the same supply. That is why a modest blockage is dangerous.
:::

There is a deep parallel with electricity: $\Delta P = Q\times R_{\text{flow}}$ where $R_{\text{flow}} = 8\eta L/\pi a^4$. Pressure is voltage, flow is current. Pipes in series add their resistances; pipes in parallel add their conductances. Try it on the parallel-pipes problem in the practice set.

:::qc lvl=3
q: Two pipes of equal length carry the same liquid under the same pressure difference. One has twice the radius of the other. How do the flow rates compare?
options: ["2 : 1", "4 : 1", "16 : 1"]
answer: 2
right: Right. $Q\propto a^4$, and $2^4 = 16$. One wide pipe carries as much as sixteen narrow ones.
wrong: Poiseuille's law has $a^4$. What is $2^4$?
:::

## How fast does the ball reach terminal speed? {lvl=3 id=s-tau label="JEE"}

Is the "constant speed" in the fall reached at once, or slowly? Write Newton's second law for the ball, with $m$ its mass and $\tau$ for a time we will find:

$$m\frac{dv}{dt} = \left[\tfrac43\pi a^3(\rho-\sigma)g\right] - 6\pi\eta a\,v.$$

The first part is a constant push (weight less buoyancy), the second is a drag proportional to $v$. The solution rises towards $v_t$ like

$$v(t) = v_t\left(1 - e^{-t/\tau}\right),\qquad \tau = \frac{m}{6\pi\eta a} = \frac{2a^2\rho}{9\eta}.$$

Read it as: the gap between the speed and $v_t$ shrinks by a factor $e$ (about 2.7) in every time $\tau$. After one $\tau$ the ball is at 63% of $v_t$; after $5\tau$, at 99.3%. (This ignores the extra fluid that is pushed along with the ball, a small correction.)

For a 1 mm radius steel ball in glycerine, $\tau = 2\times10^{-6}\times7800/(9\times0.83)\approx2.1$ ms. The ball is at terminal speed after only about 10 ms, so for any practical fall the "steady speed" picture is right from the start. That is why the experiments with a ball in a tall jar measure $v_t$ and not $v(t)$.

This is the same exponential shape as a capacitor charging through a resistor, with $m/6\pi\eta a$ playing the part of $RC$.

## Why $6\pi\eta a v$ is the only possible form {lvl=4 id=s-dim label="Olympiad"}

Suppose you did not know Stokes' law. Which combination of $\eta$, $a$ and $v$ could give a force? The units are: $[\eta] = \text{kg m}^{-1}\text{s}^{-1}$, $[a] = \text{m}$, $[v] = \text{m s}^{-1}$, and a force is $\text{kg m s}^{-2}$. Try $F\propto\eta^x a^y v^z$. Matching powers of kg gives $x=1$. Matching seconds gives $-x-z=-2$, so $z=1$. Matching metres gives $-x+y+z=1$, so $y=1$. The only possible form is $F = k\,\eta a v$ with a pure number $k$. Hard hydrodynamics only gives $k = 6\pi$.

Why no density $\rho$ of the fluid? At low speed the fluid's *inertia* does not matter, only its internal friction. That is the same statement as $Re\ll1$. If you allow $\rho$ in, you get a whole family of forms, and the force can depend on $Re$: this is the quadratic regime above.

There is a surprising consequence at low $Re$: the flow equations are not changed if you run time backwards. So a swimmer that moves its body in a sequence and then plays the same sequence in reverse gets back exactly where it started, going nowhere (the "scallop theorem", usually credited to Edward Purcell [Unverified: attribution and details from memory]). A bacterium must therefore use a corkscrew-like or otherwise non-reversing motion. At small sizes, the world really does work differently.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Viscosity is friction between fluid layers. The push needed is $F = \eta A v/l$: it depends on the rate of shear, not the amount. {lvl=1}
2. Liquids become less viscous when warmed; gases become more viscous. {lvl=1}
3. Drag on a small sphere is $6\pi\eta av$. A falling body speeds up until weight equals buoyancy plus drag, then moves at the terminal velocity $v_t = 2a^2(\rho-\sigma)g/9\eta$. {lvl=2}
4. Terminal velocity goes as $a^2$: tiny droplets and dust fall extremely slowly. {lvl=2}
5. Laminar flow slides in smooth layers (fastest on the axis, zero at the wall); turbulent flow has eddies. {lvl=2}
6. $Re = \rho vd/\eta$ compares inertia to viscosity: low means smooth, high means turbulent. At high $Re$ the drag goes as $v^2$ and Stokes' law fails. {lvl=3}
7. Poiseuille: $Q = \pi a^4\Delta P/8\eta L$. Halving the radius cuts the flow sixteenfold. {lvl=3}
8. At low $Re$, dimensional analysis forces $F\propto\eta av$, and reversible motions get you nowhere. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Viscosity is not density: honey is thicker than water, but a thick liquid is not necessarily a dense one. Mercury is very dense and flows easily. {lvl=1}
- Do not forget buoyancy in the terminal-velocity balance: use $(\rho-\sigma)$, not $\rho$, unless the fluid is a gas. {lvl=2}
- A *lighter-than-fluid* sphere (cream in milk, a bubble) rises. The formula still works with $\sigma-\rho$ in place of $\rho-\sigma$. {lvl=2}
- Stokes' law is only for small, slow spheres ($Re\lesssim1$). For a raindrop or a skydiver, the drag goes as $v^2$. {lvl=3}
- Poiseuille's law needs laminar flow. Check $Re$ first (NCERT Exercise 9.13 asks you to). {lvl=3}
- The $a^4$ in Poiseuille's law and the $a^2$ in terminal velocity are different laws; do not mix them up. {lvl=3}
:::
