---
title: Surface tension
summary: Why a steel needle can float on water, why raindrops are round, and how water climbs a hair-thin tube against gravity.
ncert: ["Class 11 Physics · Ch 9 Mechanical Properties of Fluids (§9.6 Surface tension, §9.6.1–9.6.5)"]
up_to: Olympiad
builds_on: [Pressure and buoyancy, Work, energy and power, Friction]
notes_prompt: Explain to a ten-year-old why a drop of water is round, and why water climbs up a very thin tube but mercury sinks down in it.
margin:
  - kind: history
    title: History
    text: "Thomas Young (1805) and Pierre-Simon Laplace (1806) gave the theory of capillary action, including the pressure jump across a curved surface. [Unverified, exact years from memory]"
  - kind: tip
    title: Exam favourite
    text: "Count the surfaces. A drop has one, so the excess pressure is 2S/r. A soap bubble has two, so it is 4S/r. A soap film on a frame pulls with 2Sl."
  - kind: olympiad
    title: Olympiad link
    text: "When water climbs a capillary, only half of the energy released by the surface goes into potential energy of the water column. The other half is lost as heat in the oscillations."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 12 Characteristics of Force (a short passage on surface tension) [Unverified]" }
  - { title: "Resnick, Halliday, Walker, Fundamentals of Physics", ref: "Surface tension is not treated in depth [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 14 Some Mechanical Properties of Matter [Unverified]" }
cards:
  - { front: "What is surface tension, in two equivalent ways?", back: "Force per unit length acting in the surface, $S = F/l$ (N/m), and equally the surface energy per unit area (J/m²)." }
  - { front: "Why does a liquid surface have extra energy?", back: "A molecule at the surface has neighbours on one side only, so it has lost about half of its binding energy compared with a molecule inside." }
  - { front: "Excess pressure inside a drop, a gas bubble in liquid, and a soap bubble in air?", back: "Drop and gas bubble in liquid: $2S/r$ (one surface). Soap bubble: $4S/r$ (two surfaces)." }
  - { front: "Capillary rise formula?", back: "$h = \\dfrac{2S\\cos\\theta}{\\rho g a}$. Water, $\\theta$ acute: rises. Mercury, $\\theta$ obtuse: falls." }
  - { front: "When is the angle of contact acute and when obtuse?", back: "Acute when the liquid sticks to the solid more than to itself (water on glass). Obtuse when it sticks to itself more (mercury on glass, water on a lotus leaf)." }
  - { front: "How does surface tension change with temperature?", back: "It generally decreases as temperature rises." }
core:
  idea: 'A molecule at the surface of a liquid has lost half of its neighbours, so surface costs energy. The liquid therefore pulls its surface as tight as it can, with a force S per unit length, which rounds drops, floats needles, squeezes the gas inside bubbles and lifts liquid in thin tubes.'
  formulas:
    - tex: 'S = \dfrac{F}{l} = \dfrac{\text{extra surface energy}}{\text{extra area}}'
      label: 'Surface tension: pull per length equals energy per area'
    - tex: '\Delta P = \dfrac{2S}{r}'
      label: 'Excess pressure inside a drop (one surface); 4S/r for a soap bubble (two surfaces)'
    - tex: 'h = \dfrac{2S\cos\theta}{\rho g a}'
      label: 'Capillary rise in a tube of radius a'
  conditions:
    - 'Free surface of a liquid, clean, at a fixed temperature'
    - 'Drops and bubbles small enough that gravity does not flatten them (radius well below about 3 mm for water)'
    - 'Capillary tube narrow, so the meniscus is a part of a sphere'
    - 'Static situation: no flow, so viscosity plays no part'
  sign: 'Count the surfaces (one or two) before using 2S/r or 4S/r. The angle of contact is measured inside the liquid.'
outcomes:
  - 'Explain surface tension as the extra energy of molecules at the surface'
  - 'Use S as force per length and as energy per area, including the factor of two for a soap film'
  - 'Say whether a liquid wets a solid from the angle of contact'
  - 'Calculate the excess pressure in drops and bubbles'
  - 'Calculate capillary rise or fall and the energy released when drops merge'
opener:
  story: |
    Lay a steel sewing needle gently on a bowl of still water. Steel is about eight times denser than water, so it ought to sink like a stone. But it floats, with the water making a tiny dent under it. A water strider does the same trick all day, standing on a pond on six thin legs.

    Now look at a drop hanging from a tap, or a bead of dew on a leaf. Why are they round? Nobody squeezed them into balls. And why does a paper towel dipped into a spill drag the water upward, against gravity?

    All three puzzles have one answer, and it has nothing to do with the liquid being thick or thin. **What is special about the edge of a liquid?**
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A needle resting in a dent of the water surface, with a bead of dew beside it"><rect x="20" y="120" width="280" height="100" style="fill:color-mix(in srgb,var(--chem) 18%,var(--surface));stroke:none"/><path d="M20 120 H118 Q160 142 202 120 H300" style="fill:none;stroke:var(--c);stroke-width:2.5"/><ellipse cx="160" cy="116" rx="40" ry="5" style="fill:var(--ink)"/><path d="M118 120 L106 96" style="fill:none;stroke:var(--chem);stroke-width:2"/><path d="M202 120 L214 96" style="fill:none;stroke:var(--chem);stroke-width:2"/><path d="M124 124 L116 108 M196 124 L204 108" style="fill:none;stroke:var(--chem);stroke-width:2"/><path d="M160 140 V176" style="fill:none;stroke:var(--muted);stroke-width:2"/><path d="M154 168 L160 178 L166 168" style="fill:none;stroke:var(--muted);stroke-width:2"/><text x="170" y="164" style="font-size:11px;fill:var(--muted)">weight</text><text x="64" y="86" style="font-size:11px;fill:var(--muted)">the surface pulls</text><text x="64" y="98" style="font-size:11px;fill:var(--muted)">back up</text><circle cx="262" cy="96" r="14" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><path d="M236 110 H292" style="fill:none;stroke:var(--ink);stroke-width:2"/><text x="226" y="78" style="font-size:11px;fill:var(--muted)">a round bead</text><text x="60" y="236" style="font-size:11px;fill:var(--muted)">a needle floats in a dent of the surface</text></svg>'
life:
  - 'Raindrops, dew and mercury beads are round, and soap bubbles are perfect spheres, because a sphere has the least surface for its volume.'
  - 'Water striders, floating needles and mosquito larvae resting at the surface all lean on the surface''s pull.'
  - 'Towels, tissues, candle wicks and sponges soak up liquid through capillary action; roots and soil draw water the same way.'
  - 'Detergent and soap lower water''s surface tension and angle of contact so that it soaks into cloth and lifts grease; hot water, with lower surface tension, cleans better.'
  - 'A duck''s oily feathers (or waterproofing on a raincoat) make a large angle of contact, so water beads up and rolls off.'
models:
  - name: 'Boundaries cost energy'
    text: 'Every border has a price: here the molecules at an interface have extra energy. Systems drift towards the arrangement with the least total border, so drops merge, bubbles in foam shrink and merge, small things clump. The same idea explains why borders, tariffs and silos cost effort in any organisation.'
  - name: 'A surface effect against a volume effect'
    text: 'Surface grows as size squared, volume as size cubed. For small things the surface wins; for large ones the volume (weight) wins. Surface tension rules fine mist, thin tubes and insects, and is irrelevant for oceans. Ask which of two scales is bigger before choosing the law.'
  - name: 'Find the energy, then find the force'
    text: 'You need not know how every molecule pulls. If making a little more surface costs energy, then the surface must pull back with a force that is the energy per area. Energy bookkeeping is often the shortest route to a force.'
links:
  - leaf: 'phy/elasticity'
    name: 'Elasticity'
    same: 'Both are forces that come from molecules being pulled away from their neighbours, and both store energy when stretched.'
    differs: 'A stretched spring or rubber band pulls harder the more you stretch it (Hooke''s law). A liquid film pulls with the same force at any size, because stretching only adds more of the same surface.'
  - leaf: 'phy/viscosity'
    name: 'Viscosity'
    same: 'Both come from forces between molecules and both fall as the liquid is warmed.'
    differs: 'Viscosity resists motion and vanishes when the liquid is at rest. Surface tension acts even in a perfectly still liquid, and is a property of the surface, not of the bulk.'
next:
  q: 'Disturb a water drop and it wobbles: the surface pulls it back to a sphere, overshoots, and comes back again. A pushed swing, a plucked string and a bobbing cork also go to and fro. What do all of these have in common, and why do they repeat?'
  leaf: 'phy/periodic-motion'
  name: 'Periodic motion'
symbols:
  - s: 'S'
    means: 'surface tension: the pull per unit length of the surface, or the energy per unit area (N/m or J/m^2)'
  - s: 'F'
    means: 'force the surface exerts on a line or a slider (newtons, N)'
  - s: 'l'
    means: 'length of the line or slider the film touches (m)'
  - s: 'r'
    means: 'radius of a drop or bubble (m)'
  - s: '\Delta P'
    means: 'excess pressure inside a drop or bubble over the pressure outside (pascal, Pa)'
  - s: '\theta'
    means: 'angle of contact, measured inside the liquid between the liquid surface and the solid (degrees)'
  - s: 'a'
    means: 'radius of the capillary tube (m)'
  - s: 'h'
    means: 'height the liquid rises (or falls, if negative) in the tube (m)'
  - s: '\rho'
    means: 'density of the liquid (kg/m^3)'
  - s: 'g'
    means: 'acceleration due to gravity (m/s^2)'
  - s: 'S_{la}, S_{sa}, S_{sl}'
    means: 'interface tensions of liquid-air, solid-air and solid-liquid (N/m)'
---

:::hook
q: So what's your guess? A steel needle is 8 times denser than water, yet it rests on the surface. What holds it up?
options: ["A cushion of trapped air under it, like a tiny boat", "The water surface behaves like a stretched skin that the needle dents, and the skin pulls back up", "Water molecules are attracted to the steel's magnetism"]
answer: 1
right: Right. The surface of water resists being stretched, because surface costs energy. The needle sinks in a little and makes a dent, and the stretched surface pulls up around the whole edge of the dent. There is no separate skin; it is simply the liquid's own surface pulling tight.
wrong: Look at the dent in the picture. The water around the needle is stretched, and a stretched surface pulls back. That pull, all along the edge, adds up to a force that can hold the needle up. No air cushion, no magnetism.
:::

## A surface that wants to shrink {lvl=1 id=s-energy label="Class 11"}

Why should a surface be special? Look at one water molecule deep inside the liquid. It is pulled by neighbours on all sides, and the pulls balance. It is happy. Now take a molecule at the surface. There are neighbours below and to the sides, but nothing above (air is far thinner). It has lost about half of its attractions, so it sits at a higher energy than a molecule inside. NCERT estimates that the surface molecule has roughly half the binding energy of one inside.

:::figure caption="A molecule inside the liquid is pulled equally in all directions. A molecule at the surface has neighbours only below and beside it, so it is pulled inwards and has extra energy."
<svg viewBox="0 0 360 200" role="img" aria-label="Liquid with one molecule inside pulled from all sides and one at the surface pulled only downward and sideways">
<defs><marker id="st1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<rect x="20" y="60" width="320" height="130" class="m2"/>
<line class="ln" x1="20" y1="60" x2="340" y2="60"/>
<circle class="faint" cx="110" cy="130" r="40"/><circle class="obj" cx="110" cy="130" r="6"/>
<line class="ray" x1="110" y1="130" x2="110" y2="96" marker-end="url(#st1)"/><line class="ray" x1="110" y1="130" x2="110" y2="164" marker-end="url(#st1)"/><line class="ray" x1="110" y1="130" x2="76" y2="130" marker-end="url(#st1)"/><line class="ray" x1="110" y1="130" x2="144" y2="130" marker-end="url(#st1)"/>
<text class="k" x="50" y="190">inside: balanced</text>
<circle class="faint" cx="256" cy="60" r="40"/><circle class="obj" cx="256" cy="60" r="6"/>
<line class="ray" x1="256" y1="60" x2="256" y2="96" marker-end="url(#st1)"/><line class="ray" x1="256" y1="60" x2="226" y2="82" marker-end="url(#st1)"/><line class="ray" x1="256" y1="60" x2="286" y2="82" marker-end="url(#st1)"/>
<text class="k" x="200" y="46">surface: pulled inwards</text>
<text x="26" y="52">air</text>
</svg>
:::

If the surface costs energy, the liquid will make as little surface as it can. For a given volume, the shape with the least surface is a sphere. That is why small drops, dew and bubbles are round. Gravity can only squash a big drop, and a drop in free fall (in a spray jet, or on a space station) becomes a ball.

How much energy does a surface cost? Call the energy per unit area $S$, the **surface tension**. For water it is $S = 0.0727$ J per square metre at 20 °C (NCERT Table 9.3). A worked number: break one litre of water into a fine mist of droplets $10\ \mu\text{m}$ in radius. Their total area is $3V/r = 3\times10^{-3}/10^{-5} = 300\ \text{m}^2$, the area of a small flat. The energy to create it is $0.0727\times300 = 22$ J, as much as lifting that litre by $2.2$ m. That is why fine sprays take effort, and why mist tends to run back together into drops.

:::worked title="How much can the surface hold up?"
Take a steel needle 4.0 cm long. The dented surface pulls up along both long edges, each with a force of $S$ per length. At best (surface nearly vertical at the edge) the upward force is $2Sl = 2\times0.0727\times0.040 = 5.8\times10^{-3}$ N, the weight of about 0.6 g. A needle 0.5 mm wide weighs only about 0.06 g, so there is a tenfold margin. Push it a little deeper, or add soap to lower $S$, and it sinks. [Simplified: this ignores buoyancy of the dent and the exact slope of the surface.]
:::

:::qc lvl=1
q: Water is heated from 20 °C to 80 °C. What happens to its surface tension?
options: ["Increases", "Decreases", "Stays the same"]
answer: 1
right: Right. At higher temperature the molecules move more and the net pull at the surface is weaker. The surface tension of a liquid generally falls as it warms (NCERT).
wrong: Warm molecules jostle more and hold on to each other less. Does that make the surface pull stronger or weaker?
:::

## Tension: the surface as a pull {lvl=1 id=s-tension label="Class 11"}

Energy per area can also be read as a *force*. Stretch a soap film on a U-shaped wire frame with a light slider on one side, as in NCERT Fig. 9.15. The film pulls the slider inward. Pull it out by a small distance $d$. You have to supply the work $F\times d$, and it goes into making new surface. A film has two sides, so the new area is $2\times l\times d$, where $l$ is the slider's length:

$$F\,d = S\times 2l\,d \;\Longrightarrow\; S = \frac{F}{2l}.$$

Read it as: the surface tension is the force the film exerts per metre of slider, per surface. The 2 is there because a soap film has *two* surfaces, front and back. So $S$ has two equal meanings: pull per length (N/m) and energy per area (J/m²), the same unit.

:::figure caption="A soap film on a U-frame with a sliding bar. The two surfaces of the film each pull the bar inwards with force S per unit length, so the total pull is 2Sl. Pulling the bar out by d makes new area 2ld."
<svg viewBox="0 0 360 180" role="img" aria-label="A U-shaped frame with a soap film and a slider, showing the pull of the film on the slider">
<defs><marker id="st2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="st3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<rect x="40" y="40" width="200" height="100" class="m2"/>
<line class="ln" x1="30" y1="40" x2="270" y2="40"/><line class="ln" x1="30" y1="140" x2="270" y2="140"/><line class="ln" x1="40" y1="40" x2="40" y2="140"/>
<line class="pen" x1="240" y1="38" x2="240" y2="142" style="stroke:var(--ink);stroke-width:4"/>
<line class="wf" x1="240" y1="90" x2="170" y2="90" marker-end="url(#st2)"/><text class="k" x="176" y="82">2Sl</text>
<line class="ray" x1="240" y1="90" x2="310" y2="90" marker-end="url(#st3)"/><text class="k" x="272" y="82">F</text>
<text x="100" y="125">soap film</text><text x="246" y="158">slider, length l</text>
<line class="faint" x1="270" y1="40" x2="270" y2="140"/>
<text x="258" y="34">d</text>
</svg>
:::

Two lessons come out of this picture. First, **the pull does not depend on how big the film is**. Stretch the film as much as you like, and it pulls with the same $2Sl$. A rubber band pulls harder as you stretch it, but a liquid surface only adds more of the same surface (NCERT Exercises 9.2c and 9.18). Second, **count surfaces**: a soap film has two, the surface of a pond has one.

:::worked title="A soap film on a small frame"
A slider 5.0 cm long on a soap film with $S = 0.025$ N/m. The film pulls with $2Sl = 2\times0.025\times0.050 = 2.5\times10^{-3}$ N, the weight of a quarter of a gram. Hang just that much and the slider is in equilibrium.
:::

:::qc lvl=1
q: A soap film is held on a frame with a slider of length 10 cm. The film is then stretched until its area is three times as large (same slider, same temperature). How does the pull on the slider change?
options: ["It becomes three times larger", "It stays the same", "It becomes one third"]
answer: 1
right: Right. The pull is $2Sl$ and depends only on the liquid, the temperature and the slider's length. The area does not appear.
wrong: The force is $2Sl$. Does the area of the film appear anywhere in it?
:::

## Wet or not: the angle of contact {lvl=2 id=s-contact label="Class 11"}

Water spreads on clean glass, but beads up on a waxy leaf. Mercury forms balls on any surface. Why? At the line where a liquid meets a solid and the air, three surfaces meet, and each pulls. Compare how much the liquid likes the solid with how much it likes itself.

The liquid-solid angle at the edge is the **angle of contact** $\theta$, measured inside the liquid. When the liquid is strongly attracted to the solid (more than to itself), it creeps up the solid, the angle is **acute** (below 90°) and the liquid **wets** the solid: water on glass, kerosene on almost anything. When it is attracted more to itself than to the solid, it pulls into a ball, the angle is **obtuse** (above 90°) and it does not wet: mercury on glass, water on a lotus leaf or on a duck.

:::figure caption="Three drops on a solid. Acute angle of contact: the liquid spreads (it wets). Right angle: in between. Obtuse angle: the liquid beads up (it does not wet). The angle is always measured inside the liquid."
<svg viewBox="0 0 360 160" role="img" aria-label="Three drops on a surface with acute, right and obtuse contact angles">
<line class="ln" x1="10" y1="120" x2="350" y2="120"/>
<path d="M20 120 Q70 82 120 120Z" class="m2" style="stroke:var(--phy);stroke-width:2"/>
<path d="M150 120 L150 100 Q180 78 210 100 L210 120Z" class="m2" style="stroke:var(--phy);stroke-width:2"/>
<path d="M254 120 Q248 76 290 74 Q332 76 326 120Z" class="m2" style="stroke:var(--phy);stroke-width:2"/>
<path d="M44 120 A22 22 0 0 0 30 106" style="fill:none;stroke:var(--eng);stroke-width:1.6"/><text class="k" x="50" y="110">θ &lt; 90°</text>
<text class="k" x="162" y="138">θ = 90°</text>
<path d="M276 120 A22 22 0 0 1 256 98" style="fill:none;stroke:var(--eng);stroke-width:1.6"/><text class="k" x="290" y="138">θ &gt; 90°</text>
<text x="38" y="145">water on glass</text><text x="258" y="152">mercury on glass</text>
</svg>
:::

The balance of the three tugs along the solid gives NCERT's relation, with the subscripts naming the interfaces (liquid-air, solid-air, solid-liquid):

$$S_{la}\cos\theta + S_{sl} = S_{sa}.$$

Read it as: the liquid-air tension, resolved along the solid, plus the solid-liquid tension, balances the solid-air tension. An illustration with invented numbers: take $S_{la} = 0.073$ N/m and $S_{sa} - S_{sl} = 0.050$ N/m. Then $\cos\theta = 0.050/0.073 = 0.685$ and $\theta\approx47^\circ$, acute. If $S_{sa}-S_{sl}$ were as large as $S_{la}$ or more, $\cos\theta$ would reach 1 and the liquid would spread over the solid completely.

**Soaps and detergents** are wetting agents: they lower $S_{la}$ and the contact angle, so the water enters fibres and cracks. **Waterproofing agents** do the opposite, creating a large angle between water and fibre so that water rolls off.

:::qc lvl=2
q: Which statement is correct for mercury in a glass tube?
options: ["The angle of contact is acute and the surface is concave", "The angle of contact is obtuse and the surface is convex", "The angle of contact is zero"]
answer: 1
right: Right. Mercury sticks to itself more than to glass, so the angle is obtuse (about 135°) and the surface bulges upward in the middle (convex). Water in glass is the opposite: acute angle, concave surface.
wrong: Mercury beads up on glass rather than wetting it. Does that mean an acute or an obtuse angle?
:::

## Pressure inside drops and bubbles {lvl=2 id=s-pressure label="Class 11"}

A drop is held together by its skin, and the skin presses the liquid inside. How much? Imagine the drop of radius $r$ growing by a tiny $\Delta r$. Its surface area grows from $4\pi r^2$ by $8\pi r\,\Delta r$, which costs surface energy $S\times8\pi r\,\Delta r$. Where does that energy come from? From the inside pressure pushing the surface outward through $\Delta r$: the extra pressure $\Delta P$ times the area $4\pi r^2$ times $\Delta r$. In equilibrium the two are equal:

$$\Delta P\times4\pi r^2\,\Delta r = S\times8\pi r\,\Delta r\;\Longrightarrow\;\Delta P = \frac{2S}{r}.$$

Read it as: the smaller the drop, the higher the pressure inside. A raindrop of radius 0.1 mm has $\Delta P = 2\times0.0727/10^{-4} = 1.5\times10^{3}$ Pa: about 1.4% of an atmosphere. For a drop of radius 1 mm it is only 146 Pa.

The formula counts *one* surface. A **soap bubble** in air has two (the outside and the inside of the film), so its excess pressure is double: $\Delta P = 4S/r$. A **bubble of air inside a liquid** has one surface, so $\Delta P = 2S/r$ (this is NCERT Example 9.10). The general rule: the side on the *concave* side of a curved surface has the higher pressure.

:::figure caption="A drop has one surface (excess pressure 2S/r). A soap bubble is a thin film with two surfaces, inner and outer (excess pressure 4S/r)."
<svg viewBox="0 0 360 170" role="img" aria-label="A drop with one surface and a soap bubble with two surfaces">
<circle cx="90" cy="85" r="46" class="m2" style="stroke:var(--phy);stroke-width:2"/>
<text class="k" x="58" y="90">liquid</text><text x="50" y="152">drop: 1 surface</text><text class="k" x="46" y="26">ΔP = 2S/r</text>
<circle cx="260" cy="85" r="46" style="fill:none;stroke:var(--phy);stroke-width:2.5"/><circle cx="260" cy="85" r="42" style="fill:none;stroke:var(--phy);stroke-width:2.5"/>
<text class="k" x="240" y="90">air</text><text x="206" y="152">soap bubble: 2 surfaces</text><text class="k" x="226" y="26">ΔP = 4S/r</text>
</svg>
:::

:::worked title="A soap bubble"
A soap bubble of radius 1.0 cm, with $S = 0.030$ N/m, has an excess pressure of $4S/r = 4\times0.030/0.010 = 12$ Pa over the room's air, not much more than the weight of a sheet of paper on a square metre. A smaller bubble has a larger excess: radius 1 mm gives 120 Pa. This is why you have to blow a little harder at the start of a bubble, as NCERT remarks.
:::

:::qc lvl=2
q: A soap bubble has radius r and surface tension S. A gas bubble of the same radius is formed inside the same soap solution. How do their excess pressures compare?
options: ["Same", "The soap bubble's is twice as large", "The gas bubble's is twice as large"]
answer: 1
right: Right. The soap bubble in air has two surfaces, so $4S/r$. The gas bubble inside the liquid has one surface, so $2S/r$.
wrong: Count the surfaces: how many liquid-air surfaces does the soap film have, and how many does the surface of a gas bubble in liquid have?
:::

## Capillary rise {lvl=2 id=s-capillary label="Class 11"}

Dip a thin glass tube into water. The water climbs up inside the tube, above the level outside, and the thinner the tube, the higher it goes. This is **capillary rise** (from Latin *capilla*, hair).

The picture is simple. Water wets glass, so its surface in the tube curves up the walls (a concave meniscus) and the contact angle $\theta$ is acute. Around the circle where the water meets the glass, the surface pulls the water up with a force of $S$ per length, tilted at angle $\theta$ to the vertical, so the upward part is $S\cos\theta$ per length. The length of the circle is $2\pi a$. In equilibrium, this upward pull holds up the column of water of height $h$ above the outside level, whose weight is $\pi a^2h\rho g$:

$$2\pi a\,S\cos\theta = \pi a^2h\rho g\;\Longrightarrow\;h = \frac{2S\cos\theta}{\rho g a}.$$

Read it as: higher for greater surface tension, higher for a thinner tube, lower for a heavier liquid. The same result follows from pressures (NCERT Eq. 9.29): the curved surface makes the pressure just under the meniscus lower than the air outside by $2S\cos\theta/a$, and that deficit is balanced by a column of water of height $h$.

:::figure caption="Water in a narrow glass tube: concave meniscus, acute contact angle, and a rise h above the level outside. Mercury in the same tube: convex meniscus, obtuse contact angle, and a fall below the level outside."
<svg viewBox="0 0 360 200" role="img" aria-label="Water rising in a capillary tube and mercury being depressed in a capillary tube">
<rect x="10" y="110" width="150" height="80" class="m2"/><line class="gr" x1="10" y1="110" x2="160" y2="110"/>
<rect x="76" y="40" width="4" height="120" style="fill:var(--ink)"/><rect x="104" y="40" width="4" height="120" style="fill:var(--ink)"/>
<rect x="80" y="74" width="24" height="86" class="m2"/>
<path d="M80 74 Q92 86 104 74" style="fill:var(--surface);stroke:var(--phy);stroke-width:2"/>
<line class="faint" x1="40" y1="74" x2="76" y2="74"/><line class="ln" x1="46" y1="74" x2="46" y2="110"/><text class="k" x="30" y="96">h</text>
<text x="20" y="184">water</text>
<rect x="200" y="100" width="150" height="90" style="fill:color-mix(in srgb,var(--ink) 18%,var(--surface))"/><line class="gr" x1="200" y1="100" x2="350" y2="100"/>
<rect x="266" y="40" width="4" height="130" style="fill:var(--ink)"/><rect x="294" y="40" width="4" height="130" style="fill:var(--ink)"/>
<rect x="270" y="132" width="24" height="38" style="fill:color-mix(in srgb,var(--ink) 18%,var(--surface))"/>
<path d="M270 132 Q282 120 294 132" style="fill:color-mix(in srgb,var(--ink) 18%,var(--surface));stroke:var(--phy);stroke-width:2"/>
<line class="ln" x1="316" y1="100" x2="316" y2="126"/><text class="k" x="322" y="118">h</text>
<text x="210" y="184">mercury</text>
</svg>
:::

A worked number. For water in a tube of radius $0.10$ mm (a fine hair, $\theta\approx0$): $h = 2\times0.0727/(1000\times9.8\times10^{-4}) = 0.148$ m, about 15 cm. For a tube 1 cm in radius, the rise is only 1.5 mm, which is why you never see it in a glass of water. Mercury has an obtuse angle, so $\cos\theta<0$ and $h$ is negative: the mercury in the tube sits *below* the outside level. That is why old barometers need a wide tube.

:::qc lvl=2
q: A capillary tube dipped in water gives a rise of 6 cm. A tube of half the radius is used instead. What is the new rise?
options: ["3 cm", "6 cm", "12 cm"]
answer: 2
right: Right. $h\propto1/a$, so halving the radius doubles the rise.
wrong: $h = 2S\cos\theta/\rho g a$. What happens to $h$ if $a$ is halved?
:::

## When does surface beat gravity? {lvl=3 id=s-scale label="JEE"}

A drop of water on a table is flat if it is big and round if it is small. Where is the dividing line? Compare two pressures: the weight of the water column across the drop's height, about $\rho g r$, and the surface-tension pressure, about $S/r$. They are equal when

$$r\approx\sqrt{\frac{S}{\rho g}}.$$

Read it as: the size below which surface tension beats gravity. For water, $\sqrt{0.0727/(1000\times9.8)}\approx2.7$ mm (sometimes called the capillary length). Below that size, drops are nearly round and capillary rise is easily seen; above it, water lies flat and gravity rules. This is also why a mosquito or a water strider (a few milligrams) can rest on water, while a cat cannot.

The same scale explains why capillary rise cannot lift sap to the top of a tall tree. In a fine xylem tube of radius $10\ \mu\text{m}$, $h = 2S/\rho g a\approx1.5$ m. The rest of the climb needs another mechanism, the pull of evaporation from the leaves [Unverified: the details are beyond NCERT Class 11 physics].

:::worked title="Merging drops warms the water"
Eight identical water droplets of radius 1.0 mm merge into one. Volume is conserved, so the new radius is $R = 2r = 2.0$ mm. The area falls from $8\times4\pi r^2 = 32\pi r^2$ to $4\pi R^2 = 16\pi r^2$, a loss of $16\pi r^2 = 5.0\times10^{-5}\ \text{m}^2$. The released energy is $S\,\Delta A = 0.0727\times5.0\times10^{-5} = 3.6\times10^{-6}$ J. It heats the water by a tiny bit. The opposite process, splitting a drop into many, costs the same energy: you must put it in.
:::

A related effect shows up when two soap bubbles are joined by a tube. The excess pressure in each is $4S/r$, so the **smaller bubble has the larger pressure** and pushes its air into the larger one. The small bubble shrinks and the big one grows, which looks wrong but is exactly what the formula says. (Rubber balloons behave differently, because their tension is not constant.)

:::qc lvl=3
q: Eight small drops of the same liquid merge into one large drop. What happens to the energy and the temperature?
options: ["Surface energy is released, so the drop warms slightly", "Energy must be supplied, so the drop cools", "Nothing changes"]
answer: 0
right: Right. The total surface area falls (to one half, in this case), so surface energy is released as heat. Splitting a drop does the reverse and needs energy.
wrong: Does the total surface area go up or down when the drops merge? What does that say about the stored surface energy?
:::

## Where does the energy go in a capillary? {lvl=4 id=s-energy-cap label="Olympiad"}

Here is a classic puzzle. A liquid rises in a capillary tube. Gravity does negative work (the column gains potential energy) and the surface does positive work. Does the surface's work all go into potential energy? Compute both.

The surface force $2\pi aS$ (take $\theta=0$) acts over the whole rise $h$, so the work it does is $W_S = 2\pi aS\,h$. The potential energy of a column of height $h$, whose weight is $\pi a^2h\rho g$ and whose centre of mass is at $h/2$, is $U = \tfrac12\pi a^2\rho g\,h^2$. Using $h = 2S/\rho g a$ to replace one factor of $\rho g a h$ by $2S$:

$$U = \tfrac12\pi a\,h\,(\rho g a h) = \tfrac12\pi a h\times2S = \pi aSh = \tfrac12W_S.$$

Read it as: only half the work the surface does ends up as potential energy. **The other half is lost as heat**: the liquid does not creep up smoothly but overshoots and oscillates about its final height, and viscosity turns that motion into heat. It is the same half-and-half split as when you charge a capacitor through a resistor, or when two blocks stick together.

Two joined soap bubbles give another neat result. The partition between them is a film with two surfaces, and the pressure difference across it is $4S/R$, where $R$ is its radius of curvature. The two bubble pressures are $P_0+4S/r_1$ and $P_0+4S/r_2$, so $4S/R = 4S/r_1-4S/r_2$, that is

$$\frac1R = \frac1{r_1}-\frac1{r_2}\quad(r_1<r_2).$$

Read it as: the partition bulges into the larger bubble, with a radius larger than either. For bubbles of radius 2 cm and 3 cm, $1/R = 1/2-1/3 = 1/6$, so $R = 6$ cm.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Molecules at a liquid surface have lost half their neighbours, so the surface has extra energy and the liquid shrinks it as far as it can: drops and bubbles are spheres. {lvl=1}
2. Surface tension $S$ is both force per length and energy per area; it generally decreases with temperature. {lvl=1}
3. A soap film has two surfaces and pulls with $2Sl$; the pull does not depend on the film's area. {lvl=1}
4. The angle of contact is acute when the liquid wets the solid (water on glass) and obtuse when it does not (mercury on glass). {lvl=2}
5. Excess pressure: drop $2S/r$; soap bubble $4S/r$; gas bubble in liquid $2S/r$. The pressure is higher on the concave side. {lvl=2}
6. Capillary rise $h = 2S\cos\theta/\rho g a$: rises for water, falls for mercury, and bigger for thinner tubes. {lvl=2}
7. Surface tension beats gravity below a length of about $\sqrt{S/\rho g}$ (2.7 mm for water). Merging drops release heat; splitting them needs energy. {lvl=3}
8. In a capillary rise, half of the surface work becomes potential energy and half is dissipated. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Count the surfaces before using $2S/r$ or $4S/r$: a soap bubble has two, a drop or a gas bubble in a liquid has one. {lvl=1}
- Surface tension is not a force that grows with area: a bigger film pulls with the same $S$ per length. {lvl=1}
- The angle of contact is measured inside the liquid. Use $\cos\theta$ with its sign: negative $\cos\theta$ means a depression, not a rise. {lvl=2}
- In capillary rise, $h$ is measured from the free surface *outside* the tube, and $a$ is the radius of the tube, not of the meniscus. {lvl=2}
- Excess pressure is over the pressure *outside*: to find the pressure inside a bubble at depth, add the hydrostatic pressure $\rho gh$ and the atmosphere (NCERT Exercise 9.20). {lvl=2}
- Surface tension depends on the two materials meeting at the surface and on temperature, not on the shape or the area. {lvl=3}
:::
