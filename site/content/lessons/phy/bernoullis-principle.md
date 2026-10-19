---
title: Bernoulli's principle
summary: Why a sheet of paper rises when you blow over it, why a tap stream thins as it falls, and how a plane or a roof gets lifted by fast air.
ncert: ["Class 11 Physics · Ch 9 Mechanical Properties of Fluids (streamline flow, equation of continuity, Bernoulli's principle, speed of efflux, Venturi meter, blood flow, dynamic lift)"]
up_to: Olympiad
builds_on: [Pressure and buoyancy, Work-energy theorem, Kinetic and potential energy]
notes_prompt: Explain to a friend why a fast-moving stream of air has a lower pressure than still air, using the idea that a speeding-up parcel of air needs a push from behind.
margin:
  - kind: history
    title: History
    text: "Daniel Bernoulli published the principle in his Hydrodynamica in 1738 [Unverified date]. Torricelli's law for the speed of water leaving a hole, which the principle explains, is older: Evangelista Torricelli found it in the 1640s."
  - kind: tip
    title: Exam favourite
    text: "Every term in P + ½ρv² + ρgh is an energy per cubic metre, and also a pressure. For a horizontal pipe the quantity P + ½ρv² is constant: faster flow, lower pressure. Use gauge pressure on both sides, never one of each."
  - kind: olympiad
    title: Olympiad link
    text: "Bernoulli is energy conservation, and so it fails wherever mechanical energy is lost to turbulence. In a sudden widening of a pipe, the pressure rises by only ρv₂(v₁ − v₂), which is less than Bernoulli says; the missing ½ρ(v₁ − v₂)² has become heat."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 14 Fluids: §14-6 The Equation of Continuity, §14-7 Bernoulli's Equation" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 2", ref: "Ch. 40 The Flow of Dry Water [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 13 Fluid Mechanics [Unverified]" }
cards:
  - { front: "Equation of continuity?", back: "For steady flow of an incompressible fluid, $A_1v_1 = A_2v_2$: the volume passing every section each second is the same, so narrow means fast." }
  - { front: "Bernoulli's equation?", back: "$P + \\tfrac12\\rho v^2 + \\rho gh = \\text{constant}$ along a streamline: energy per unit volume is conserved." }
  - { front: "Torricelli's theorem?", back: "Water leaves a small hole a depth $h$ below the surface of an open tank with speed $v = \\sqrt{2gh}$, the speed of a body falling through $h$." }
  - { front: "Conditions for Bernoulli's equation?", back: "Steady, incompressible, non-viscous flow, along one streamline, with no energy lost to turbulence or heating." }
  - { front: "Why does a wing give lift?", back: "Air flows faster over the top, so the pressure there is lower; the pressure difference times the wing area is the lift. (Equivalently, the wing pushes air downwards.)" }
  - { front: "How does a Venturi meter work?", back: "In the narrow throat the speed is higher and the pressure lower. The measured pressure difference, with continuity, gives the flow rate." }
core:
  idea: 'A steadily flowing liquid or gas cannot be created or lost, so it speeds up where the pipe narrows. To speed up it needs a push, which can only come from pressure, so the pressure must be lower where the flow is faster. Expressed as one rule, the energy of each cubic metre of fluid, in pressure, motion and height, stays constant.'
  formulas:
    - tex: 'A_1v_1 = A_2v_2'
      label: 'Continuity: what flows in per second flows out'
    - tex: 'P + \dfrac12\rho v^2 + \rho g h = \text{constant}'
      label: 'Bernoulli: energy per unit volume along a streamline'
    - tex: 'v = \sqrt{2gh}'
      label: 'Torricelli: speed of efflux at depth h below the open surface'
  conditions:
    - 'Steady flow: the speed at each point does not change with time'
    - 'Incompressible fluid, which is fine for liquids and for air at speeds below about a third of the speed of sound'
    - 'Non-viscous (no internal friction) and no turbulence, so no mechanical energy turns into heat'
    - 'The two points lie on the same streamline'
  sign: 'Use gauge pressure at both points or absolute pressure at both, never a mixture. The difference is the same either way.'
outcomes:
  - 'Use continuity to find flow speeds in pipes and jets'
  - 'Explain why fast-moving fluid has lower pressure, without memorising it'
  - 'Apply Bernoulli''s equation to tanks, siphons, Venturi meters and Pitot tubes'
  - 'Find the speed, range and drain time for water flowing out of a tank'
  - 'Say when Bernoulli''s equation fails and what replaces it'
opener:
  story: |
    Here's a party trick. Hold a strip of paper just under your lower lip, so that it droops down, and blow gently straight ahead across the top of it. You'd expect the stream of air to push the paper down. It does the opposite: **the paper rises** and floats straight out.

    Now think about a cyclone hitting a coast. Tin roofs lift off houses even though the air is pushing down on them from above, and the walls stay standing. A jumbo jet weighing 300 tonnes hangs in the air on wings. And a perfume bottle sprays when you squeeze a rubber bulb, though you never squeeze the perfume.

    These are all the same puzzle. **How can air that is moving push less than air that is not?** The answer is in a short argument about speeding up, and it needs nothing more than what you already know about pressure and energy.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A strip of paper rising when air is blown across its top surface"><circle cx="46" cy="110" r="22" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M62 112 Q84 112 96 108" style="stroke:var(--ink);stroke-width:2;fill:none"/><path d="M96 108 Q170 70 270 78" style="stroke:var(--chem);stroke-width:5;fill:none;stroke-linecap:round"/><path d="M96 108 Q130 150 160 170" style="stroke:var(--muted);stroke-width:4;fill:none;stroke-linecap:round;stroke-dasharray:2 7"/><path d="M82 98 Q150 66 244 62" style="stroke:var(--c);stroke-width:1.8;fill:none;stroke-dasharray:6 5"/><path d="M82 104 Q160 74 262 90" style="stroke:var(--c);stroke-width:1.8;fill:none;stroke-dasharray:6 5"/><path d="M236 56 L252 62 L238 70Z" style="fill:var(--c)"/><text x="148" y="160" style="font-size:11px;fill:var(--muted)">paper when still: droops</text><text x="120" y="50" style="font-size:11px;fill:var(--muted)">fast air above: paper rises</text><text x="14" y="26" style="font-size:12px;fill:var(--ink)">Blow over the top. Which way does it go?</text></svg>'
life:
  - 'An aeroplane wing is shaped and tilted so that air flows faster over its top than its bottom; the pressure difference holds the plane up.'
  - 'A perfume atomiser, a spray gun and the air-inlet of a gas stove (Bunsen burner) all use a fast stream of air across a tube that draws liquid or air in.'
  - 'In a cyclone, wind passing over a roof lowers the pressure above it; the pressure from inside is then greater and the roof is pushed up.'
  - 'A doctor''s blood-pressure and flow measurements, and the Venturi meters on water pipelines, find a flow rate from a pressure drop in a narrow throat.'
  - 'A tap stream narrows as it falls, and a hose nozzle makes water speed up when you squeeze the end, both because of continuity.'
models:
  - name: 'Conservation as a budget with trade-offs'
    text: 'A fixed energy budget per volume can be spent on pressure, on speed or on height; spend more on one and there is less for the others. Whenever a total is fixed, a rise in one part must be paid for by a fall in the others.'
  - name: 'Bottlenecks speed things up'
    text: 'In a steady flow whatever goes in must come out, so a narrow stretch forces fast movement (water in a pipe, a stream squeezing through a gorge). The caveat is crucial in life: cars, crowds and data are not incompressible, and a bottleneck usually jams instead.'
  - name: 'Read the conditions before using the law'
    text: 'Bernoulli''s equation works so well that people apply it to rapids and crowded pipes where it fails. Every strong rule comes with assumptions; the skill is knowing which ones your problem breaks.'
links:
  - leaf: 'phy/pressure-and-buoyancy'
    name: 'Pressure and buoyancy'
    same: 'Put $v = 0$ in Bernoulli''s equation and you get $P_2 - P_1 = \rho g(h_1 - h_2)$, the pressure-at-depth law. Static fluid is just the special case.'
    differs: 'In a moving fluid the pressure depends on speed as well as depth, so "pressure depends on depth alone" no longer holds.'
  - leaf: 'phy/work-energy-theorem'
    name: 'Work-energy theorem'
    same: 'Bernoulli''s equation is that theorem applied to a slice of fluid: the net work done by pressure equals the change in kinetic plus potential energy.'
    differs: 'A solid is one lump; a fluid is a stream whose energy is tracked per unit volume as it flows through.'
next:
  q: 'Bernoulli says a fluid that flows steadily through a pipe needs no push to keep going. But a real pipe needs a pump, and honey pours slowly while water pours fast. What is the invisible brake inside a fluid?'
  leaf: 'phy/viscosity'
  name: 'Viscosity'
symbols:
  - s: 'A'
    means: 'cross-section area of the pipe or jet (m^2)'
  - s: 'v'
    means: 'speed of the fluid (m/s)'
  - s: 'Q'
    means: 'volume flow rate, A v, the volume passing per second (m^3/s)'
  - s: 'P'
    means: 'pressure in the fluid (Pa)'
  - s: '\rho'
    means: 'density of the fluid (kg/m^3)'
  - s: 'g'
    means: 'free-fall acceleration (m/s^2)'
  - s: 'h'
    means: 'height above a chosen level, or depth below the surface in Torricelli''s law (m)'
  - s: '\Delta P'
    means: 'difference in pressure between two points (Pa)'
  - s: 'a'
    means: 'area of a small hole (m^2)'
---

:::hook
q: You hold a strip of paper just below your lip and blow straight across its top. What does the paper do?
options: ["It is pushed down by the air", "It rises", "It does not move"]
answer: 1
right: Right, it rises. The fast air over the top has a lower pressure than the still air under the paper, so the paper is pushed up by the difference. Fast-moving fluid means low pressure, and we shall see why.
wrong: Try it. The air under the paper is at ordinary atmospheric pressure. What must the pressure in the moving air above be, for the paper to go the way it does?
:::

## Narrow means fast {lvl=1 id=s-continuity label="Class 9"}

Watch water from a tap: the stream gets thinner as it falls. Put your thumb over the end of a garden hose and the water shoots out fast. In both cases the same thing is going on. Water cannot pile up or vanish, so **the amount passing any point each second must be the same everywhere along a steady stream**.

Think of a river. Where the river narrows, the same water per second must squeeze through a smaller opening, so it must move faster. Where it widens, it slows and looks calm. The volume passing each second is the area times the speed, so $A_1v_1 = A_2v_2$:

:::law caption="Equation of continuity: steady flow of an incompressible fluid along a tube; A is the cross-section area and v the speed."
$$A_1v_1 = A_2v_2 = \text{constant}$$
:::

Read it as: "half the area, twice the speed". A number: a hose of inner diameter 2.0 cm carries water at 0.50 m/s, and ends in a nozzle of diameter 0.50 cm. The area goes down by $(2.0/0.50)^2 = 16$, so the water leaves at $0.50\times16 = 8.0$ m/s. The flow rate throughout is $Av = \pi(0.010)^2\times0.50 = 1.6\times10^{-4}$ m$^3$/s, about 0.16 litres each second.

:::qc lvl=1
q: A river is 40 m wide and 2 m deep, flowing at 1.0 m/s. It then runs through a gorge 10 m wide and 2 m deep. The speed in the gorge is
options: ["1.0 m/s", "4.0 m/s", "0.25 m/s"]
answer: 1
right: Right. The area falls by a factor of 4, so the speed rises by 4.
wrong: Same depth, so the area is just proportional to the width. Narrower by 4 means faster by what factor?
:::

## Why fast flow has low pressure {lvl=2 id=s-pressure label="Class 11"}

Now the central question. Water flows along a horizontal pipe that narrows. In the narrow part, it must go faster (continuity). **A parcel of water that speeds up is accelerating, so a net force must push it forwards.** In the middle of a fluid the only forces on a parcel come from the pressure of its neighbours, so the pressure behind the parcel must be higher than the pressure in front. Along a narrowing pipe, pressure falls as the water speeds up. The wide part has higher pressure than the narrow part.

That is the whole idea, and it matches the paper puzzle: the air over the paper moves faster than the air beneath, so the pressure above is lower and the paper is pushed up.

:::figure caption="Water in a horizontal pipe that narrows. The three vertical tubes act as pressure gauges: the water stands lower in the narrow part, where the flow is faster."
<svg viewBox="0 0 360 212" role="img" aria-label="A pipe narrowing in the middle with three vertical gauge tubes showing a lower water level in the narrow part">
<path class="ln" d="M20 90 H110 L150 112 H210 L250 90 H340"/>
<path class="ln" d="M20 170 H110 L150 148 H210 L250 170 H340"/>
<rect x="21" y="91" width="318" height="78" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:none"/>
<path class="ln" d="M55 90 V20 M65 90 V20 M175 112 V20 M185 112 V20 M295 90 V20 M305 90 V20"/>
<rect x="56" y="38" width="8" height="52" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface))"/>
<rect x="176" y="70" width="8" height="42" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface))"/>
<rect x="296" y="40" width="8" height="50" style="fill:color-mix(in srgb,var(--c) 40%,var(--surface))"/>
<line class="faint" x1="40" y1="38" x2="320" y2="38"/>
<path class="ray" d="M30 130 H92" style="stroke-width:2.5"/><path d="M86 125 L98 130 L86 135Z" style="fill:var(--phy)"/>
<path class="ray" d="M160 130 H198" style="stroke-width:4.5"/><path d="M192 124 L206 130 L192 136Z" style="fill:var(--phy)"/>
<text x="26" y="188" style="font-size:10px;fill:var(--muted)">wide: slow,</text><text x="26" y="200" style="font-size:10px;fill:var(--muted)">high pressure</text>
<text x="150" y="188" style="font-size:10px;fill:var(--muted)">narrow: fast,</text><text x="150" y="200" style="font-size:10px;fill:var(--muted)">low pressure</text>
<text x="256" y="188" style="font-size:10px;fill:var(--muted)">wide: slow,</text><text x="256" y="200" style="font-size:10px;fill:var(--muted)">high pressure</text>
</svg>
:::

To put a number on it, follow a slice of fluid and use the work-energy theorem. Take a slice of volume $\Delta V$ moving from point 1 to point 2. The pressure behind pushes it with work $P_1\Delta V$ and the pressure ahead resists with $P_2\Delta V$. The net work, $(P_1 - P_2)\Delta V$, must equal the gain in kinetic energy plus the gain in potential energy of the slice, whose mass is $\rho\,\Delta V$:

$$(P_1 - P_2)\Delta V = \tfrac12\rho\,\Delta V\,(v_2^2 - v_1^2) + \rho\,\Delta V\,g\,(h_2 - h_1).$$

Divide by $\Delta V$ and collect the 1-terms on one side:

:::law caption="Bernoulli's equation: for steady, incompressible, non-viscous flow, along one streamline. Each term is an energy per unit volume, which equals a pressure."
$$P_1 + \tfrac12\rho v_1^2 + \rho gh_1 = P_2 + \tfrac12\rho v_2^2 + \rho gh_2$$
:::

Read it as: "pressure energy, plus motion energy, plus height energy, per cubic metre, is the same everywhere along the flow". Three quick checks. If $v = 0$ it becomes $P_2 - P_1 = \rho g(h_1 - h_2)$, the pressure-at-depth law you already know. If the pipe is horizontal, $P + \tfrac12\rho v^2$ is constant, so more speed means less pressure. And since only *differences* in pressure appear, atmospheric pressure cancels if you use gauge pressure on both sides, but you must not mix one gauge and one absolute pressure.

:::worked title="Pressure in the narrow part"
Water flows at 2.0 m/s in a wide pipe and at 8.0 m/s in a narrow part at the same height. Then $P_1 - P_2 = \tfrac12\rho(v_2^2 - v_1^2) = \tfrac12\times1000\times(64 - 4) = 3.0\times10^{4}$ Pa. The narrow part is at a pressure 30 kPa lower, about a third of an atmosphere's worth less.
:::

:::qc
q: In steady non-viscous flow through a horizontal pipe, where is the pressure lowest?
options: ["Where the pipe is widest", "Where the pipe is narrowest", "The pressure is the same everywhere"]
answer: 1
right: Right. The narrowest part has the fastest flow, so P + ½ρv² constant gives the lowest P there.
wrong: Narrowest means fastest by continuity. And fastest means what for the pressure?
:::

## Torricelli: a hole in a tank {lvl=2 id=s-torricelli label="Class 11"}

A tank of water open at the top has a small hole a depth $h$ below the surface. How fast does water leave? Apply Bernoulli between the surface (point 1) and the hole (point 2). Both are open to the air, so $P_1 = P_2 = P_{\text{atm}}$. The surface of a wide tank drops very slowly, so $v_1 \approx 0$. Then $\rho g h = \tfrac12\rho v^2$:

$$v = \sqrt{2gh}.$$

This is **Torricelli's theorem**: the water leaves at the speed a stone would reach after falling freely through the height $h$. It makes sense, since each bit of water gives up its potential energy to speed. For $h = 0.80$ m, $v = \sqrt{2\times9.8\times0.80} = 3.96$ m/s.

After leaving the hole the jet is a projectile launched horizontally. If the hole is a height $h_2$ above the ground, its fall time is $\sqrt{2h_2/g}$, so the jet lands at a horizontal distance

$$x = \sqrt{2gh_1}\,\sqrt{\frac{2h_2}{g}} = 2\sqrt{h_1h_2},$$

where $h_1$ is the depth of the hole. Read this as: "twice the geometric mean of the depth and the height above the ground". The $g$ cancels. Since the product $h_1h_2$ is what counts, two holes with swapped $h_1$ and $h_2$ give the same range, and the best range is for a hole halfway between the water surface and the ground, where $h_1 = h_2 = H/2$ and $x = H$.

:::figure caption="A tank with a hole a depth h₁ below the surface and a height h₂ above the ground. The jet leaves horizontally at √(2gh₁) and follows a parabola."
<svg viewBox="0 0 360 230" role="img" aria-label="A water tank with a side hole and the parabolic jet landing on the ground">
<rect x="30" y="40" width="80" height="150" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:none"/>
<path class="ln" d="M30 20 V190 H110 V20"/>
<line class="ln" x1="10" y1="190" x2="340" y2="190"/>
<line class="faint" x1="30" y1="40" x2="110" y2="40"/>
<path class="ray" d="M110 100 Q180 100 250 190" style="stroke-width:3"/>
<circle class="obj" cx="110" cy="100" r="3.5"/>
<line class="wf" x1="124" y1="42" x2="124" y2="98" style="stroke-width:1.5"/>
<line class="wf" x1="124" y1="102" x2="124" y2="188" style="stroke-width:1.5"/>
<text x="130" y="74" style="font-size:11px;fill:var(--eng)">h₁</text>
<text x="130" y="150" style="font-size:11px;fill:var(--eng)">h₂</text>
<line class="faint" x1="110" y1="200" x2="250" y2="200"/>
<text x="164" y="216" style="font-size:11px;fill:var(--muted)">range x = 2√(h₁h₂)</text>
<text x="30" y="13" style="font-size:10px;fill:var(--muted)">open to the air</text>
</svg>
:::

## Fast air at work {lvl=2 id=s-uses label="Class 11"}

The same equation explains a lot of everyday things.

- **Roofs and cyclones.** A strong wind over a flat roof lowers the pressure above it by about $\tfrac12\rho v^2$. For 40 m/s and air density 1.2 kg/m$^3$ this is about 1000 Pa; across a roof of 100 m$^2$ it is $10^5$ N, as much as the weight of ten tonnes.
- **Atomisers and burners.** Air blown fast across the top of a thin tube lowers the pressure there; liquid is pushed up the tube by the higher pressure below and sprayed out. A Bunsen burner and a gas stove draw air in through side holes in the same way.
- **Venturi meter.** Fit two gauges to a pipe, one in the wide part and one in a narrow throat. Continuity gives $v_2 = (A_1/A_2)v_1$, and Bernoulli gives $P_1 - P_2 = \tfrac12\rho(v_2^2 - v_1^2)$, so
$$Q = A_1v_1 = A_1A_2\sqrt{\frac{2(P_1 - P_2)}{\rho\,(A_1^2 - A_2^2)}}.$$
Reading a pressure difference gives the flow rate, with no moving parts.
- **Pitot tube.** An open tube facing the airflow brings the air to rest at its mouth, so the pressure there is higher than the pressure in the stream by $\tfrac12\rho v^2$. Aircraft use this to measure airspeed: for a pressure difference of 392 Pa in air of density 1.2 kg/m$^3$, $v = \sqrt{2\times392/1.2} = 25.6$ m/s.
- **Blood flow.** If a clogged artery narrows, the blood speeds up in the narrow part and its pressure falls; the artery wall can collapse inwards, which makes the narrowing worse.

:::qc lvl=2
q: Two ships sail side by side, close together. The water between them moves faster relative to the ships than the water outside. What do the ships tend to do?
options: ["Drift apart", "Drift together", "Nothing"]
answer: 1
right: Right. The pressure in the narrow channel between them is lower than outside, so the higher outside pressure pushes them together. Real ships are warned to keep apart for this reason.
wrong: Fast flow means low pressure. Where is the pressure lower, between the ships or outside them?
:::

## Wings, siphons and draining {lvl=3 id=s-jee label="JEE"}

**Lift.** If the air passes over the top of a wing at speed $v_t$ and under it at speed $v_b$, the pressure difference is $\Delta P = \tfrac12\rho(v_t^2 - v_b^2)$ and the lift is $\Delta P\times$ wing area. For a light plane with wings of area 16 m$^2$ and speeds 60 m/s over and 52 m/s under (air density 1.2 kg/m$^3$), $\Delta P = 0.6\times(3600 - 2704) = 538$ Pa, so the lift is $538\times16 = 8.6\times10^{3}$ N, the weight of about 880 kg.

:::note title="A common wrong explanation of lift" tone=warn
Many books say the air above and below the wing must reach the back at the same time, so it travels faster over the longer top path. That is false: the air over the top arrives *earlier*. The pressure difference is real, but its cause is the wing's shape and angle, which turn the air stream downwards. By Newton's third law, a wing that pushes air down is pushed up. The pressure picture and the "air pushed down" picture are two descriptions of one force; either gives the same lift.
:::

**Siphon.** A tube takes water over the rim of a tank to an outlet 0.60 m below the water surface. Bernoulli between the surface and the outlet gives $v = \sqrt{2g\times0.60} = 3.43$ m/s, whatever the height of the crest in between. At the crest, at 1.0 m above the surface, the water moves at the same speed in a uniform tube, so $P_{\text{atm}} = P_{\text{crest}} + \rho g(1.0) + \tfrac12\rho v^2$, and the pressure there is $\Delta P = 1000(9.8 + 5.88) = 15.7$ kPa below atmospheric. The crest can be raised until the pressure there falls to zero, roughly 10 m of water at most (and in practice about half that, since air comes out of solution).

**Draining time.** A tank of cross-section area $A$ with a small hole of area $a$ at the bottom: at depth $h$ the surface falls at a speed $v_s = (a/A)\sqrt{2gh}$ (continuity). Separating variables gives the time to empty from depth $h_0$:

$$t = \frac{A}{a}\sqrt{\frac{2h_0}{g}}.$$

For $A = 0.50$ m$^2$, $a = 2.0$ cm$^2$ and $h_0 = 1.0$ m this is $2500\times0.452 = 1130$ s, about 19 minutes. It is twice the time the *initial* flow rate would need, because the flow slows as the level falls.

**When the equation fails.** Bernoulli's equation needs steady, non-viscous, non-turbulent flow. It fails in river rapids, where the flow is turbulent and unsteady, and in long pipes, where viscosity makes the pressure fall steadily along the flow even though the speed does not change. For air it also fails near the speed of sound, when the density itself changes. Remember also that it links points on a single streamline, the path a fluid parcel follows; in a smooth, irrotational flow the constant is the same on all streamlines.

:::qc lvl=3
q: In a siphon, the crest of the tube is raised a little higher above the water surface, with the outlet unchanged and the crest still well below 10 m. The speed of water leaving the outlet
options: ["increases", "decreases", "stays the same"]
answer: 2
right: Right. Bernoulli between the surface and the outlet involves only the drop in height to the outlet, not the crest. A higher crest just lowers the pressure at the top (until air or vapour breaks the flow).
wrong: Apply the equation between the open surface and the outlet only. Which height difference appears in it?
:::

## A jet pushes back, and energy gets lost {lvl=4 id=s-oly label="Olympiad"}

**The recoil of a leaking tank.** A jet of speed $v = \sqrt{2gh}$ and area $a$ carries momentum away at the rate $\rho av\cdot v = \rho av^2 = 2\rho gha$. By Newton's third law the tank is pushed back with that force: *twice* the hydrostatic force $\rho gha$ you would expect from the missing pressure on the hole. For a hole of area 1.0 cm$^2$ at a depth of 1.25 m the recoil is 2.45 N. Where does the other half come from? Near the hole the water on the inside is already moving towards it, so by Bernoulli the pressure on the wall around the hole is lower than hydrostatic; that is the other half of the recoil (this is one standard account of the factor 2). A rocket works on the same momentum principle, with the jet speed set by a combustion chamber instead of a column of water.

**Where Bernoulli's equation fails: the sudden widening.** Let water at speed $v_1$ in a narrow pipe of area $A_1$ run into a wide pipe of area $A_2$ and slow to $v_2 = v_1A_1/A_2$. Bernoulli predicts a pressure rise $\tfrac12\rho(v_1^2 - v_2^2)$. But the water leaving a sharp-edged pipe forms a jet that mixes violently (eddies) before it settles. Here is the momentum argument instead: take the water between a section just before the step and one well after. The net force on it is $(P_1 - P_2)A_2$ (assuming the pressure over the step equals $P_1$), and the rate of change of its momentum is $\rho Q(v_2 - v_1)$ with $Q = A_2v_2$. So

$$P_2 - P_1 = \rho v_2(v_1 - v_2).$$

With $v_1 = 4$ m/s and $v_2 = 1$ m/s: Bernoulli predicts $\tfrac12\times1000\times(16 - 1) = 7500$ Pa but the true rise is $1000\times1\times3 = 3000$ Pa. The difference, $4500$ Pa, is exactly $\tfrac12\rho(v_1 - v_2)^2$, the mechanical energy per cubic metre lost to turbulence and heat. Conservation of energy still holds; it is only the *mechanical* part that is not conserved, and that is why a smooth gradual widening (a diffuser) recovers pressure far better than a sudden one.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. For steady flow of an incompressible fluid, $A_1v_1 = A_2v_2$: narrow means fast, wide means slow. {lvl=1}
2. A speeding-up parcel needs a push from behind, so faster flow means lower pressure. {lvl=2}
3. Bernoulli: $P + \tfrac12\rho v^2 + \rho gh$ is constant along a streamline; every term is energy per unit volume. {lvl=2}
4. Torricelli: water leaves a small hole at depth $h$ with speed $\sqrt{2gh}$ and a jet lands at $2\sqrt{h_1h_2}$. {lvl=2}
5. Venturi meters, Pitot tubes, atomisers and wings all turn a speed difference into a pressure difference. {lvl=2}
6. Lift on a wing is the pressure difference times the area; the "equal transit time" story is wrong. {lvl=3}
7. The principle fails with viscosity, turbulence and compressibility; a sudden widening loses $\tfrac12\rho(v_1 - v_2)^2$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Do not use Bernoulli's equation across a pump, a rapid or a sudden widening: mechanical energy is not conserved there. {lvl=3}
- Use gauge pressure at both points or absolute pressure at both. {lvl=2}
- Use the area of the *opening* in continuity: for pipes $A = \pi d^2/4$, so doubling the diameter quarters the speed. {lvl=1}
- In Torricelli's law the depth $h$ is measured from the free surface to the hole, not from the ground. {lvl=2}
- Torricelli's speed is independent of the liquid's density and of the size of the hole (while the hole is small). {lvl=2}
- Fast air above and still air below lowers the pressure above: the paper rises, it is not pushed down. {lvl=1}
:::
