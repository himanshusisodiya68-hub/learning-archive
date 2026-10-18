---
title: Pressure and buoyancy
summary: "Why a bed of nails does not hurt, why a steel ship floats, and how a small push lifts a car."
ncert: ["Class 8 Science · Ch 6 Pressure, Winds, Storms, and Cyclones (§6.1)", "Class 11 Physics · Ch 9 Mechanical Properties of Fluids (§9.1–9.2)"]
up_to: Olympiad
builds_on: [Newton's laws, Density and weight, Work and energy]
notes_prompt: Explain to a ten-year-old why a huge steel ship floats but a small steel nail sinks.
margin:
  - kind: history
    title: History
    text: "Torricelli made the first mercury barometer in 1643, and Pascal had one carried up a mountain in 1648 to show that the mercury fell as the air thinned [Unverified details]. The story of Archimedes shouting Eureka in his bath was written down about two centuries later, so treat it as legend [Unverified]."
  - kind: tip
    title: Exam favourite
    text: "Pressure at depth depends only on the depth, never on the shape or width of the vessel. The force on the base is that pressure times the base area, and it can be larger or smaller than the weight of the water inside."
  - kind: olympiad
    title: Olympiad link
    text: "The buoyant force is the sum of all the pressure pushes on the surface of the body. It acts through the centre of the displaced fluid, the centre of buoyancy, and whether a ship stays upright depends on where that point sits compared with the ship's centre of gravity."
books:
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 14 Fluids (14-1 to 14-5)" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 40 The Principles of Statistical Mechanics (the exponential atmosphere) [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 13 Fluid Mechanics [Unverified]" }
cards:
  - { front: "What is pressure, and what is its unit?", back: "Force on each unit of area, $P = F/A$. The unit is the pascal, 1 Pa = 1 N/m²." }
  - { front: "Pressure at depth h in a liquid of density ρ?", back: "$P = P_0 + \\rho g h$, where $P_0$ is the pressure at the surface. It depends on depth only, not on the shape or width of the vessel." }
  - { front: "State Pascal's law and one use.", back: "A change of pressure in an enclosed fluid is passed on undiminished to every part of it. Hydraulic lifts and brakes use it to multiply force." }
  - { front: "State Archimedes' principle.", back: "A body in a fluid is pushed up by a force equal to the weight of the fluid it displaces: $F_B = \\rho_{fluid} V_{sub} g$." }
  - { front: "When does a body float, and how much of it is under water?", back: "It floats when its average density is less than the fluid's. The fraction under water is $\\rho_{body}/\\rho_{fluid}$." }
  - { front: "Why does the air not crush us?", back: "The air pushes on us with about 10^5 Pa, but the fluids inside the body push outward with the same pressure, so the pushes cancel." }
core:
  idea: 'Pressure is force per unit area. In a fluid at rest it pushes equally in every direction, grows by ρg for every metre of depth, and any extra pressure you add is passed on undiminished. A body in a fluid is pushed up by a force equal to the weight of the fluid it pushes aside.'
  formulas:
    - tex: 'P = \dfrac{F}{A}'
      label: 'Pressure: force per unit area'
    - tex: 'P = P_0 + \rho g h'
      label: 'Pressure at depth h below the free surface'
    - tex: 'F_B = \rho_{\text{fluid}}\,V_{\text{sub}}\,g'
      label: 'Archimedes: buoyant force'
  conditions:
    - 'The fluid is at rest (no flow) and the same density throughout, for P = P₀ + ρgh'
    - 'g is constant over the depth, and h is measured vertically from the free surface'
    - 'For F = PA the force acts at right angles to the surface'
    - 'For buoyancy, the fluid is not accelerating, and V_sub is the volume of the body that is actually below the surface'
  sign: 'Depth h is measured straight down, so a deeper point always has higher pressure. Keep gauge pressure (ρgh) and absolute pressure (P₀ + ρgh) apart.'
outcomes:
  - 'Explain with pressure why sharp things cut and broad things do not'
  - 'Find the pressure at any depth in a liquid and say why the shape of the vessel does not matter'
  - 'Use Pascal''s law to find forces and distances moved in a hydraulic lift'
  - 'Decide whether a body floats and how much of it is submerged, using Archimedes'
  - 'Solve puzzles with apparent weight, balloons, two liquids, tilted tanks and dam walls'
opener:
  story: |
    A fakir lies on a bed of nails, smiling, and a friend stands on his chest. You wouldn't dare push a single one of those nails into your palm. Same nails, same sharp tips. So why does he walk away without a scratch?

    Now a second puzzle. A steel pin dropped in a bucket sinks like a stone. A cargo ship, made of the same steel, weighs a hundred thousand tonnes and floats. Steel is nearly eight times denser than water. How can a ship made of it float at all?

    Both riddles have one root: what matters is not just how hard something pushes, but **how that push is spread out**. Let's find out how fluids use it.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="One nail carries the whole weight; a bed of many nails shares it"><rect x="14" y="36" width="64" height="32" rx="5" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="26" y="57" style="font-size:12px;fill:var(--ink)">600 N</text><polygon points="46,70 41,200 51,200" style="fill:var(--ink)"/><rect x="12" y="200" width="68" height="10" rx="2" style="fill:var(--muted)"/><text x="10" y="228" style="font-size:11px;fill:var(--muted)">one nail: ouch</text><rect x="116" y="36" width="190" height="32" rx="5" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="178" y="57" style="font-size:12px;fill:var(--ink)">600 N</text><polygon points="130,70 126,200 134,200" style="fill:var(--muted)"/><polygon points="152,70 148,200 156,200" style="fill:var(--muted)"/><polygon points="174,70 170,200 178,200" style="fill:var(--muted)"/><polygon points="196,70 192,200 200,200" style="fill:var(--muted)"/><polygon points="218,70 214,200 222,200" style="fill:var(--muted)"/><polygon points="240,70 236,200 244,200" style="fill:var(--muted)"/><polygon points="262,70 258,200 266,200" style="fill:var(--muted)"/><polygon points="284,70 280,200 288,200" style="fill:var(--muted)"/><rect x="116" y="200" width="190" height="10" rx="2" style="fill:var(--muted)"/><text x="130" y="228" style="font-size:11px;fill:var(--muted)">many nails: shared, fine</text><path d="M46 20 L46 32" style="stroke:var(--chem);stroke-width:2;fill:none"/><path d="M211 20 L211 32" style="stroke:var(--chem);stroke-width:2;fill:none"/></svg>'
life:
  - 'Wide tyres, snowshoes and a camel''s broad feet all spread a weight over a large area so that sand or snow takes less pressure per square centimetre.'
  - 'A knife is sharpened and a bus seat is padded for the same reason, one to concentrate a force and the other to spread it.'
  - 'The overhead tank on a Indian building gives the ground-floor tap a stronger stream than the top floor, because the water column above it is taller.'
  - 'Hydraulic brakes in a car, the jack at a puncture stop, the dentist''s chair and a JCB digger all multiply a small push with an oil-filled tube.'
  - 'Ships, submarines, fish with their swim bladders and hot-air balloons all float or hover by balancing their weight against the weight of the fluid they displace.'
models:
  - name: 'Spread it out, or sharpen it'
    text: 'The same total effort has very different effects depending on how it is concentrated. A nail and a bed of nails, a spotlight and a floodlight, one big bet and many small ones. Always ask over how much area (or how many people, or how many accounts) the load is spread.'
  - name: 'Swap the thing for its surroundings'
    text: 'To find the push on an object, imagine replacing it with a lump of the surrounding stuff, which is plainly at rest. The push of the surroundings must then just balance that lump''s weight. The surroundings can''t tell the difference, so the push is the same for the real object. A clean trick: replace a hard problem with an easy one that has the same boundary.'
  - name: 'No free lunch: trade force for distance'
    text: 'A hydraulic lift, a lever, a gear and a pulley all multiply force, and all of them make you move proportionally farther. The work in is the work out. If something promises a big gain for a small effort, look for the distance, time or risk you are paying instead.'
links:
  - leaf: 'phy/electric-current-and-potential-difference'
    name: 'Potential difference and current'
    same: 'A difference in pressure drives a fluid to flow, just as a difference in electric potential drives current. Water runs from high pressure to low pressure and charge runs from high potential to low.'
    differs: 'The pressure in a still fluid grows with depth because of weight; a still conductor in electrostatics has no field inside at all. And fluid pressure is a push in all directions, not a quantity that pulls on charges.'
  - leaf: 'phy/work-energy-theorem'
    name: 'Work–energy theorem'
    same: 'A hydraulic lift gives the same work out as in: force times distance on the small piston equals force times distance on the big one.'
    differs: 'In a lift the force changes in a ratio but nothing speeds up or gains kinetic energy; the work all goes to raising the load.'
next:
  q: 'A fluid cannot hold a sideways push; it just flows. But a steel rod, a rubber band and a bone all resist being stretched and spring back. How does a solid push back, and how far can you go before it will not come back?'
  leaf: 'phy/elasticity'
  name: 'Elasticity'
symbols:
  - s: 'P'
    means: 'pressure, the force on each unit of area (pascal, Pa = N/m^2)'
  - s: 'F'
    means: 'force pressing at right angles to a surface (newton, N)'
  - s: 'A'
    means: 'area of the surface (square metre, m^2)'
  - s: '\rho'
    means: 'density of the fluid, mass per unit volume (kg/m^3)'
  - s: 'g'
    means: 'acceleration of free fall, 9.8 m/s^2'
  - s: 'h'
    means: 'depth below the free surface (m)'
  - s: 'P_0'
    means: 'pressure at the free surface, usually atmospheric pressure, 1.01 × 10^5 Pa'
  - s: 'F_B'
    means: 'buoyant force, the upthrust of the fluid on the body (N)'
  - s: 'V_{sub}'
    means: 'volume of the body that is under the surface (m^3)'
---

:::hook
q: A fakir lies on a bed of 1000 identical nails. Compared with leaning on just one of the nails with his whole weight, how hard does each nail now push into his back?
options: ["The same force as before", "About 1000 times less", "About 1000 times more", "No force, the skin protects him"]
answer: 1
right: Right. His weight is shared among 1000 nails, so each carries only a thousandth of it. The push per nail is a thousand times smaller, and so is the pressure, since each tip still has the same tiny area. Spread the load and the damage disappears.
wrong: His weight does not change, and it has to be carried by something. With 1000 nails, each takes a share. Divide the weight by 1000 and you get what each nail pushes with.
:::

## Force on an area {lvl=1 id=s-pressure label="Class 8"}

Press the blunt head of a drawing pin and nothing happens. Turn it round and press the point with the same force, and it goes into the board. The push is the same. What changed is the **area** it is squeezed into.

The thing that decides the damage is called **pressure**: how much force each square metre of the surface has to carry. If a force $F$ presses straight onto an area $A$, then

$$P = \frac{F}{A}.$$

Read it as: spread the same force over twice the area and the pressure halves; squeeze it into a tenth of the area and the pressure becomes ten times bigger. The unit is the newton per square metre, called the **pascal** (Pa). It is a very small unit: a sheet of A4 paper lying flat presses on the table with about 1 Pa.

:::worked title="Two feet against one heel"
A 60 kg person weighs about $60 \times 9.8 = 588$ N. Standing on two flat feet of total area 300 cm² ($0.03$ m²), the pressure on the floor is $588/0.03 = 2\times10^{4}$ Pa.

Now she balances on a single stiletto heel of area 1 cm² ($10^{-4}$ m²): $588/10^{-4} = 5.9\times10^{6}$ Pa. The weight is the same, but the pressure is about 300 times bigger, which is why heels dent wooden floors that bare feet do not.
:::

That is the whole secret of the fakir. Each nail has a tiny tip, but there are a thousand of them, so the total area carrying his weight is a thousand times larger than for one nail.

:::qc lvl=1
q: A 600 N skier in boots (total area 400 cm²) sinks into soft snow. Wearing skis with a total area of 0.40 m² instead, the pressure on the snow becomes
options: ["10 times smaller", "10 times larger", "The same", "100 times smaller"]
answer: 0
right: Right. The area changed from 0.04 m² to 0.40 m², ten times bigger, and the force is unchanged, so the pressure is ten times smaller.
wrong: The weight stays the same. Only the area changes, from 0.04 m² to 0.40 m². Pressure is force divided by area, so what happens when the area gets ten times bigger?
:::

## Liquids push in every direction {lvl=1 id=s-liquid label="Class 8"}

A solid pushes on whatever it stands on. A liquid does more: it pushes on the bottom, on the **side walls** and on anything dipped into it. Punch three holes up a plastic bottle full of water and the water spurts sideways out of all three, hardest from the lowest.

:::figure caption="Water presses on the side walls as well as the base, and the deeper the hole, the harder the push: the lowest jet leaves the fastest."
<svg viewBox="0 0 360 230" role="img" aria-label="A tank of water with three side holes; arrows from deeper holes are longer">
<rect class="m2" x="40" y="30" width="100" height="170"/>
<path class="ln" d="M40 30 L40 200 L140 200 L140 30"/>
<line class="faint" x1="30" y1="30" x2="150" y2="30"/>
<text x="150" y="26">water level</text>
<circle class="obj" cx="140" cy="70" r="3.5"/><circle class="obj" cx="140" cy="120" r="3.5"/><circle class="obj" cx="140" cy="170" r="3.5"/>
<defs><marker id="pbj" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<line class="ray" x1="144" y1="70" x2="196" y2="70" marker-end="url(#pbj)"/>
<line class="ray" x1="144" y1="120" x2="236" y2="120" marker-end="url(#pbj)"/>
<line class="ray" x1="144" y1="170" x2="286" y2="170" marker-end="url(#pbj)"/>
<text x="204" y="62">shallow: gentle</text><text x="244" y="112">deeper: harder</text><text x="200" y="196">deepest: strongest</text>
</svg>
:::

Why more pressure deeper? Because the deeper you are, the more water is stacked above you and pressing down. That weight is passed through the water in every direction. Two surprising consequences:

- It is the **depth** that matters, not how much water there is. A small rooftop tank and a huge one, both sitting at the same height, give the same pressure at a ground-floor tap.
- Dams are built thicker at the bottom because the water presses harder there.

:::qc lvl=1
q: One tank holds 500 litres and another holds 5000 litres. Both are on the same roof, both filled to the same height. Which gives a stronger stream from a ground-floor tap?
options: ["The 5000 litre tank", "The 500 litre tank", "Both the same"]
answer: 2
right: Right. Pressure depends on the height of the water column above the tap, not on the amount of water. Same height, same pressure.
wrong: The pressure at the tap comes from the height of the column of water above it. The size of the tank does not matter. Compare the two heights.
:::

## Pressure at depth {lvl=2 id=s-depth label="Class 11"}

Let us put a number on it. Picture a vertical column of liquid with a base of area $A$ reaching from the free surface straight down to depth $h$. It contains a volume $Ah$, so its mass is $\rho A h$ (with $\rho$ the density, the mass of each cubic metre), and its weight is $\rho A h g$. All of that weight rests on the base, so the extra pressure is weight divided by area:

$$P - P_0 = \rho g h.$$

Here $P_0$ is the pressure pushing down on the surface itself, usually the air. Read it as: **every metre of water adds about 9800 Pa**, which is roughly a tenth of an atmosphere. So 10 m of water adds about one whole atmosphere.

:::worked title="A diver at 30 m"
Fresh water has $\rho = 1000$ kg/m³. At $h = 30$ m the water adds $1000 \times 9.8 \times 30 = 2.94\times10^{5}$ Pa. Add the air above the lake, $1.01\times10^{5}$ Pa, and the absolute pressure is $3.95\times10^{5}$ Pa, almost 4 atmospheres. The part from the water alone, $\rho g h$, is called the **gauge pressure**; the total is the **absolute pressure**. A tyre gauge reads gauge pressure.
:::

Why is the pressure at one point the same in every direction? A fluid at rest cannot hold a sideways pull or push the way a solid can. If it pushed harder one way than another, the fluid there would simply move until it balanced. So the pressure at a point is a single number (a scalar), and the force it exerts is always at right angles to whatever surface it touches.

The formula contains no width and no shape. Join vessels of different shapes at the bottom and fill them: the water settles to the **same level** in every one, because only the depth sets the pressure.

:::figure caption="Narrow tube, wide tank, funnel and slanted tube joined at the bottom: the water stands at the same height in all of them, so the pressure at the bottom is the same."
<svg viewBox="0 0 370 230" role="img" aria-label="Four connected vessels of different shapes with water at the same level">
<rect class="m2" x="20" y="170" width="330" height="30"/>
<rect class="m2" x="40" y="70" width="20" height="100"/><rect class="m2" x="100" y="70" width="80" height="100"/>
<polygon class="m2" points="228,170 252,170 271.2,70 208.8,70"/><polygon class="m2" points="300,170 322,170 340.3,70 318.3,70"/>
<path class="ln" d="M40 50 L40 170 M60 50 L60 170 M100 50 L100 170 M180 50 L180 170 M205 50 L228 170 M275 50 L252 170 M322 50 L300 170 M344 50 L322 170"/>
<path class="ln" d="M20 170 L40 170 M60 170 L100 170 M180 170 L228 170 M252 170 L300 170 M322 170 L350 170 M20 170 L20 200 L350 200 L350 170"/>
<line class="faint" x1="30" y1="70" x2="355" y2="70"/>
<text x="130" y="62">same level in every vessel</text>
<text x="110" y="222">same depth, same pressure at the bottom</text>
</svg>
:::

The same idea measures things. In a U-tube with water on one side and a lighter liquid on the other, the pressures balance at the dividing level, so the lighter liquid stands higher in proportion: $\rho_1 h_1 = \rho_2 h_2$.

:::qc lvl=2
q: A lake is 20 m deep (water density 1000 kg/m³, g = 10 m/s², air pressure 1 atm = 10⁵ Pa). What is the absolute pressure on the bottom?
options: ["1 atm", "2 atm", "3 atm", "20 atm"]
answer: 2
right: Right. The water adds ρgh = 1000 × 10 × 20 = 2 × 10⁵ Pa = 2 atm, and the air above adds 1 atm, so 3 atm in all.
wrong: Two parts add up: the water column (ρgh = 1000 × 10 × 20 = 2 × 10⁵ Pa, that is 2 atm) and the air pressing on the surface (1 atm).
:::

## The weight of the sky {lvl=2 id=s-atm label="Class 11"}

You live at the bottom of an ocean of air. The air above each square metre of ground has a mass of about 10 000 kg, ten tonnes, and its weight is the **atmospheric pressure**, $P_0 = 1.013\times10^{5}$ Pa (one atmosphere). Why aren't we crushed? Because the pressure inside our bodies matches it, so air pushes inward and our own fluids push outward by the same amount.

Torricelli measured it in 1643. Fill a metre-long glass tube with mercury, close the end with a finger, and turn it upside down into a dish of mercury. The mercury sinks a little and stops, with an empty space (almost a vacuum) above it, standing about 76 cm above the dish. The air pushing on the dish holds that column up, so

$$P_0 = \rho_{Hg}\,g\,h = 13\,600 \times 9.8 \times 0.76 = 1.01\times10^{5}\ \text{Pa}.$$

Read it as: the sky's weight equals the weight of a 76 cm column of mercury. Water is 13.6 times lighter than mercury, so a water barometer would need a tube 10.3 m tall.

This also explains the drinking straw. You do not "suck" juice up. You lower the pressure inside your mouth, and the air pushing on the juice in the glass shoves it up the straw. Even a perfect vacuum pump can lift water by suction only about 10 m, because that is all the atmosphere can hold up.

Air can be squashed, so the air is densest at the bottom and thins quickly with height. At about 5.5 km up the pressure has already halved, even though the atmosphere stretches over more than 100 km.

:::qc lvl=2
q: A mercury barometer is carried from the beach to the top of a hill. The height of the mercury column
options: ["rises", "falls", "stays the same", "depends on the tube's width"]
answer: 1
right: Right. Higher up there is less air above you, so less weight of air is pressing on the dish, and a shorter column of mercury is enough to balance it.
wrong: The column is held up by the weight of the air above the dish. Climb a hill and some of that air is now below you. What happens to the weight pressing down?
:::

## Pascal's law and the hydraulic lift {lvl=2 id=s-pascal label="Class 11"}

If you squeeze a fluid shut in a container, the extra pressure does not stay where you pushed. It appears everywhere in the fluid, in full, and also on the walls. This is **Pascal's law**: a change of pressure applied to an enclosed fluid is passed on undiminished to every point of the fluid and to the walls.

Now use two pistons of different sizes on the same enclosed fluid. The pressure is the same under both, so a small force on a small piston balances a big force on a big one:

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}\quad\Longrightarrow\quad F_2 = F_1\,\frac{A_2}{A_1}.$$

Read it as: the force is multiplied by the ratio of the areas.

:::worked title="A car jack"
Small piston 10 cm², big piston 1000 cm², a ratio of 100. You push the small piston with 100 N. The pressure is $100/10^{-3} = 10^{5}$ Pa. The big piston has area $0.1$ m², so it pushes up with $10^{5}\times0.1 = 10\,000$ N, enough to lift a car of about a tonne.

The price: the liquid is incompressible, so the volume pushed in at the small piston equals the volume pushed out at the big one: $A_1 d_1 = A_2 d_2$. You push the small piston 100 cm to raise the car 1 cm. Force goes up by 100 and distance goes down by 100, so the work, force times distance, is the same on both sides.
:::

:::figure caption="Hydraulic lift: the pressure is the same under both pistons, so the big piston gets a force multiplied by the area ratio and moves proportionally less."
<svg viewBox="0 0 360 220" role="img" aria-label="Two pistons joined by a fluid, small force on the small piston lifts a large load">
<defs><marker id="pcl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="pcl2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<rect class="m2" x="40" y="110" width="30" height="70"/><rect class="m2" x="40" y="180" width="280" height="22"/><rect class="m2" x="230" y="124" width="90" height="56"/>
<path class="ln" d="M40 70 L40 202 L320 202 L320 90 M70 70 L70 180 L230 180 L230 90"/>
<rect x="38" y="104" width="34" height="8" style="fill:var(--ink)"/><rect x="228" y="118" width="94" height="8" style="fill:var(--ink)"/>
<rect x="250" y="70" width="50" height="46" rx="4" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/>
<text x="258" y="98">load</text>
<line class="ray" x1="55" y1="52" x2="55" y2="98" marker-end="url(#pcl)"/><text x="62" y="60" class="k">F1</text>
<line class="wf" x1="275" y1="190" x2="275" y2="150" style="display:none"/>
<line class="wf" x1="330" y1="150" x2="330" y2="96" marker-end="url(#pcl2)"/><text x="334" y="120" class="k">F2</text>
<text x="40" y="216">small area A1</text><text x="228" y="216">large area A2</text>
</svg>
:::

Car brakes use exactly this: the pressure you make with your foot in the master cylinder reaches all four wheel cylinders through the brake fluid, equally.

:::qc lvl=2
q: A hydraulic jack has an area ratio of 50 between the big and small pistons. You push the small piston down 25 cm. How far does the load rise?
options: ["0.5 cm", "25 cm", "1250 cm", "5 cm"]
answer: 0
right: Right. The same volume of fluid moves, so the distance goes down by the area ratio: 25/50 = 0.5 cm. The force is 50 times bigger, the distance 50 times smaller, and the work is equal.
wrong: The liquid cannot be squashed, so the volume that leaves the small cylinder equals the volume that enters the large one. If the area is 50 times larger, the piston moves 50 times less.
:::

## Archimedes: swap the rock for water {lvl=2 id=s-archimedes label="Class 11"}

Why does a stone feel lighter in water? Here is the cleanest argument. Imagine a lump of **water**, shaped exactly like the stone, sitting in the middle of the lake. It is not falling and not rising, so the rest of the water must be pushing on it with an upward force equal to its weight.

Now take that lump away and put the stone in its place. The water around it has no way of knowing what is inside the boundary. It pushes on the surface in exactly the same way as before. So the push, the **buoyant force**, is the weight of the water that used to be there: the weight of the fluid **displaced** by the body.

:::law caption="Archimedes' principle: the upthrust equals the weight of the fluid displaced, for any shape, whether the body is fully or partly under the surface."
$$F_B = \rho_{\text{fluid}}\,V_{\text{sub}}\,g$$
:::

For a box you can check it directly. The bottom face is deeper than the top face by the height $h$ of the box, so it feels a bigger pressure by $\rho g h$. The net upward push is $\rho g h \times A = \rho g V$, which is the weight of a box-shaped lump of fluid.

:::figure caption="Pressure grows with depth, so the push up on the bottom face beats the push down on the top face. The difference is the buoyant force."
<svg viewBox="0 0 360 230" role="img" aria-label="A block under water with a small downward arrow on top and a longer upward arrow underneath">
<defs><marker id="pab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="pab2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<rect class="m2" x="40" y="40" width="280" height="170"/>
<path class="ln" d="M40 20 L40 210 L320 210 L320 20"/>
<line class="faint" x1="30" y1="40" x2="330" y2="40"/>
<rect x="140" y="90" width="80" height="60" rx="3" style="fill:var(--muted);stroke:var(--ink);stroke-width:1.5"/>
<line class="ray" x1="165" y1="62" x2="165" y2="88" marker-end="url(#pab)"/><line class="ray" x1="195" y1="62" x2="195" y2="88" marker-end="url(#pab)"/>
<line class="wf" x1="150" y1="200" x2="150" y2="152" marker-end="url(#pab2)"/><line class="wf" x1="180" y1="200" x2="180" y2="152" marker-end="url(#pab2)"/><line class="wf" x1="210" y1="200" x2="210" y2="152" marker-end="url(#pab2)"/>
<text x="232" y="76">small push down</text><text x="232" y="190">bigger push up</text>
<text x="232" y="124" class="k">net: up</text>
</svg>
:::

:::worked title="A stone in a bucket"
A stone of volume 500 cm³ ($5\times10^{-4}$ m³) and mass 1.3 kg weighs $1.3\times9.8 = 12.74$ N. Fully under water it displaces $5\times10^{-4}$ m³ of water, so $F_B = 1000\times5\times10^{-4}\times9.8 = 4.9$ N. A spring balance would read the **apparent weight**, $12.74 - 4.9 = 7.84$ N.
:::

:::qc lvl=2
q: A solid iron ball and a wooden ball of the same volume are both held fully under water. Which one feels the bigger buoyant force?
options: ["The iron ball, it is heavier", "The wooden ball, it is lighter", "Both the same"]
answer: 2
right: Right. The buoyant force depends only on the volume pushed aside, and the two balls have the same volume. What the ball is made of changes its weight, not the upthrust.
wrong: The upthrust equals the weight of the water displaced. Same volume, same displaced water, same upthrust. The material only matters for the weight pulling down.
:::

## Floating and sinking {lvl=2 id=s-float label="Class 11"}

A body in a fluid has two forces on it: its weight pulling down, and the buoyant force pushing up. When fully under water, the weight is $\rho_{body} V g$ and the upthrust is $\rho_{fluid} V g$, with the same $V$. So the comparison is just of the **densities**: the body sinks if it is denser than the fluid, and rises if it is less dense. A body that rises breaks the surface until it displaces just enough fluid to balance its weight, and then floats.

At floating, weight equals upthrust:

$$\rho_{body}\,V\,g = \rho_{fluid}\,V_{sub}\,g\quad\Longrightarrow\quad\frac{V_{sub}}{V} = \frac{\rho_{body}}{\rho_{fluid}}.$$

Read it as: the fraction under water equals the density ratio.

:::worked title="The tip of the iceberg"
Ice has density 917 kg/m³. In fresh water the fraction under is $917/1000 = 92\%$. In sea water of density 1030 kg/m³ it is $917/1030 = 89\%$. Only about a tenth of an iceberg shows above the water, and that is where "the tip of the iceberg" comes from.
:::

The riddle of the ship now resolves. A steel nail is solid, 8 times denser than water, so it displaces only an eighth of its weight in water and sinks. A ship's hull is a thin steel shell around a huge volume of air. The **average** density of the whole ship, its total mass divided by the volume below the waterline, is below that of water. It sinks only until the water it displaces weighs as much as the ship, and stops there. The painted **Plimsoll line** on a ship's side marks the safe waterline, with different marks for fresh, salt and warm water because their densities differ.

A submarine sits on the border: it takes in water into tanks to raise its average density and dive, and blows the water out with compressed air to rise.

:::qc lvl=2
q: An ice cube floats in a glass filled exactly to the brim with water. When the ice melts, the water
options: ["overflows a little", "stays exactly at the brim, with no spill", "drops below the brim"]
answer: 1
right: Right. Floating ice pushes aside water that weighs the same as the ice. Melted, the ice becomes water of that same weight, which fills exactly the space it was pushing aside.
wrong: A floating body displaces its own weight of water. When the ice melts, its water has that same weight, so it occupies exactly the volume the ice had displaced. Nothing changes the level.
:::

## Puzzles in the swimming pool {lvl=3 id=s-puzzles label="JEE"}

Almost every JEE buoyancy problem comes down to one move: **find the displaced volume**, or compare two situations by what they displace.

**Stone in a boat.** A boat floating in a pool carries a 5 kg stone of density 2500 kg/m³. Someone throws the stone overboard. Does the pool level rise, fall or stay put? In the boat, the stone is part of the floating load, so it makes the boat push aside 5 kg of water, which is 5 litres. Thrown in, it sinks and pushes aside only its own volume, $5/2500 = 0.002$ m³ = 2 litres. So 3 litres less water is displaced, and the pool level **falls**. (If the stone were as light as water the level would not change.)

**Lifting with lighter-than-air gas.** A balloon of volume $V$ filled with a gas of density $\rho_g$ in air of density $\rho_a$ gets an upthrust $\rho_a V g$ and has a weight $\rho_g V g$ plus the fabric and basket. The lifting capacity is $(\rho_a - \rho_g)V$ in kilograms, minus the mass of the structure. A hot-air balloon of 2800 m³ filled with air at 100 °C (density about 0.94 kg/m³ against 1.2 kg/m³ outside) has a lift of $(1.2 - 0.94)\times2800 \approx 700$ kg before the fabric, burner and basket are counted.

**Two layers.** A block can float at the boundary of oil on water. The upthrust is then the sum of the weights of oil and water displaced: each layer pushes up in proportion to the part of the block sitting in it.

:::qc lvl=3
q: A boat carrying a heavy stone floats in a swimming pool. The stone is thrown into the water and sinks. The water level in the pool
options: ["rises", "stays the same", "falls"]
answer: 2
right: Right. In the boat the stone made the boat displace its weight in water. At the bottom it displaces only its own volume, which is smaller because stone is denser than water. Less displaced water, lower level.
wrong: Compare the volume of water displaced in each case. In the boat: the weight of the stone, in water, i.e. a lot. On the bottom: only the volume of the stone, which is less.
:::

## A tank on wheels {lvl=3 id=s-accel label="JEE"}

Put a tank of water on a cart and accelerate the cart forward with acceleration $a$. The water slops backward and its surface tilts, higher at the back. Why?

Look at a small block of water in the middle. It is accelerating forward, so the net force on it must point forward, and that force can only come from pressure. So pressure must be **higher behind it than in front**: along the direction of travel it falls at a rate $\rho a$ for every metre. Vertically nothing is accelerating, so the usual $\rho g h$ still holds. The surface, where the pressure is the air pressure, is a line of equal pressure, and it tilts so that

$$\tan\theta = \frac{a}{g}.$$

Read it as: the harder you accelerate compared with gravity, the steeper the surface. With $a = 2$ m/s², $\tan\theta = 0.20$ and $\theta \approx 11.5^\circ$. In a 1 m long tank the water is 20 cm higher at the back than at the front.

A neat way to remember it: from the cart's point of view gravity seems to point down and **backwards**. The surface is always at right angles to that effective gravity, and pressure grows with depth measured along it.

The same trick explains a party piece. A helium balloon hangs on a string inside a closed car. When the car accelerates, the air inside is pushed to the back and the pressure there is higher. The balloon, which wants to rise against effective gravity, moves **forward**, the opposite of everything else loose in the car.

:::qc lvl=3
q: A closed car is braking hard, and a helium balloon hangs on a string. The balloon swings
options: ["forward", "backward", "stays vertical"]
answer: 1
right: Right. When braking, the car's acceleration points backward, so effective gravity points forward-down, and the balloon, which moves against it, swings backward. Air and balloon behave opposite ways because the balloon is less dense than the air.
wrong: Braking is an acceleration backward. The heavy air sloshes forward, piling up at the front, and the balloon, being lighter than air, goes the opposite way.
:::

## Dam walls and the thinning air {lvl=4 id=s-dam label="Olympiad"}

**The dam.** On a dam wall of height $h$ and width $w$ the (gauge) pressure rises from 0 at the surface to $\rho g h$ at the base, in a straight line. The average is $\tfrac12\rho g h$, so the total force on the wall is that times its area $hw$:

$$F = \tfrac12\rho g h^2 w.$$

Read it as: doubling the water depth quadruples the force. For $h = 10$ m and $w = 50$ m, $F = \tfrac12\times1000\times9.8\times100\times50 = 2.45\times10^{7}$ N, about 2500 tonnes of force.

The pressure is stronger near the bottom, so the force acts not at the middle but at **one third of the height** from the base (the centre of the triangle of pressure). The turning effect about the base is $F\times h/3 = \rho g w h^3/6$, which for the numbers above is $8.2\times10^{7}$ N m. That cubic growth is why a dam needs a very wide base to stay put.

**Thin air.** Is $P = P_0 + \rho g h$ true for the atmosphere? Not directly, since $\rho$ is not constant. In a thin slab of height $dh$ the pressure drop is $dP = -\rho g\,dh$. If the temperature is the same everywhere, the density of a gas is proportional to its pressure, $\rho = \rho_0 P/P_0$. Then $dP/P = -(\rho_0 g/P_0)\,dh$, whose solution is an exponential:

$$P = P_0\,e^{-h/H},\qquad H = \frac{P_0}{\rho_0 g} = \frac{1.013\times10^{5}}{1.29\times9.8} \approx 8\ \text{km}.$$

Read it as: every 8 km up, the pressure is divided by $e \approx 2.7$. It halves at $H\ln2 \approx 5.5$ km, matching the "about 6 km" in the NCERT exercise. [Inference] The real atmosphere cools with height, so this is only a good approximation.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Pressure is force per unit area, $P = F/A$ in pascal; the same push does more damage over a small area. {lvl=1}
2. A liquid pushes in all directions, harder the deeper you go, and only the depth matters, not the amount of liquid or the shape of the vessel. {lvl=1}
3. $P = P_0 + \rho g h$: each metre of water adds about 9800 Pa, so 10 m adds about one atmosphere. {lvl=2}
4. Air has weight: 1 atm $= 1.013\times10^{5}$ Pa, which holds up 76 cm of mercury or about 10.3 m of water. {lvl=2}
5. Pascal's law: pressure change in an enclosed fluid is passed on everywhere, so $F_2 = F_1A_2/A_1$, and the distances shrink by the same ratio. {lvl=2}
6. Archimedes: the upthrust equals the weight of the fluid displaced; a body floats if its average density is below the fluid's, with fraction submerged equal to the density ratio. {lvl=2}
7. Puzzles reduce to comparing displaced volumes; in an accelerating tank the surface tilts with $\tan\theta = a/g$. {lvl=3}
8. Force on a vertical wall is $\tfrac12\rho g h^2 w$, acting at $h/3$ above the base; the atmosphere's pressure falls exponentially with height. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Pressure is force **per area**: compare areas before you compare forces. Convert cm² to m² (multiply by $10^{-4}$) before using SI. {lvl=1}
- The force on the base of a vessel is $\rho g h A$, not the weight of the liquid. A wide-mouthed or narrow-mouthed vessel of the same depth gives the same pressure. {lvl=2}
- $\rho g h$ is the gauge pressure. Add $P_0$ for absolute pressure. When the air acts on both sides of a wall or window, only the gauge part gives a net force. {lvl=2}
- Buoyancy uses the volume **below the surface** and the density of the **fluid**, not the density of the body. {lvl=2}
- A floating body's apparent weight is zero: the upthrust equals its full weight, so a spring balance reading is for a body held fully under water. {lvl=2}
- In a hydraulic lift you gain force, not work or energy. Distance falls in the same ratio that force rises. {lvl=2}
- In an accelerating container, pressure changes along the direction of acceleration. Use the effective gravity, not just $g$. {lvl=3}
:::
