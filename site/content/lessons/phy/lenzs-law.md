---
title: Lenz's law
summary: The direction of every induced current. Opposition to the change of flux (not to the flux), a four-step method, the minus sign of Faraday's law as energy conservation, forces on loops entering a field with P = Fv = ε²/R, eddy-current braking and damping, a magnet falling through a ring or a conducting tube, the jumping ring, the sign of self and mutual induction, and the superconducting ring that keeps its flux fixed.
ncert: ["Class 12 Physics · Ch 6 Electromagnetic Induction (§6.5)"]
up_to: Olympiad
builds_on: [Magnetic flux, "Faraday's law of induction", Right-hand rule for a current loop, Force on a current-carrying conductor, Heating effect and power]
notes_prompt: Explain in your own words why an induced current that helped the change of flux, instead of opposing it, would let you build a perpetual-motion machine.
margin:
  - kind: history
    title: History
    text: "Heinrich Lenz stated his rule in 1834, three years after Faraday's discovery of induction. Elihu Thomson demonstrated the jumping ring in the 1880s. [Unverified: dates recalled from memory.]"
  - kind: tip
    title: Say it in poles
    text: "For a magnet and a coil, Lenz's law in one line: an approaching pole is met by a like pole (repelled); a receding pole is chased by an unlike pole (attracted). Then read the current sense off the pole: anticlockwise seen from a face means that face is N."
  - kind: olympiad
    title: Olympiad link
    text: "Many drag problems reduce to one trick: the electrical power ε²/R must equal the mechanical power Fv. With ε = v·dΦ/dz this gives F = (dΦ/dz)²v/R at once, without finding any current direction or field on the moving body."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 6 Electromagnetic Induction, §6.5" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 38 Electromagnetic Induction [Unverified chapter number]" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 7 Electrodynamics, §7.2 (Faraday's law, Lenz's rule)" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 7 Electromagnetic Induction [Unverified section numbers]" }
cards:
  - { front: "What exactly does the induced current oppose?", back: "The **change** of magnetic flux through the circuit, not the flux itself. Rising flux: induced field points against the external field. Falling flux: induced field points along it." }
  - { front: "Why is there a minus sign in $\\varepsilon = -d\\Phi/dt$?", back: "Energy conservation. With a plus sign the induced current would aid the change that caused it, the change would grow by itself, and energy would appear from nothing (runaway)." }
  - { front: "A loop of side $L$, resistance $R$ enters a field $B$ at speed $v$. Force on it?", back: "$F = B^2L^2v/R$, opposing the motion. Mechanical power $Fv = B^2L^2v^2/R = \\varepsilon^2/R$, the Joule heat." }
  - { front: "A magnet falls through a horizontal ring. Does the ring push or pull it?", back: "Approaching: the ring repels it. Leaving: the ring attracts it. Both forces point upward, so the magnet is slowed throughout (except at the instant $d\\Phi/dz = 0$)." }
  - { front: "Why does a jumping ring with a slit not jump?", back: "No closed path, so no induced current and no force. An emf is still induced across the slit, but emf alone exerts no magnetic force." }
  - { front: "What does a superconducting ring conserve?", back: "Its total flux $\\Phi_\\text{ext} + LI$. With $R = 0$ the emf must be zero, so any change of external flux is exactly cancelled by a change in the ring current." }
---

:::hook
q: A bar magnet is dropped, north pole down, through a horizontal copper ring. When the magnet has passed through and is falling away below the ring, what does the ring do to it?
options: ["Pushes it downward, speeding it up", "Pulls it upward, slowing it down", "Nothing: the magnet is already past the ring", "Pushes it sideways"]
answer: 1
right: Right. As the magnet leaves, the flux through the ring falls. The induced current tries to keep the flux, which means attracting the magnet back. The ring slows the magnet on the way in (by repelling it) and on the way out (by attracting it).
wrong: The ring pulls it upward. As the magnet leaves, the flux through the ring is falling, and the induced current tries to keep that flux by attracting the magnet back. On the way in, the ring repelled it. Either way the force opposes the motion.
:::

## Opposing the change, not the field {lvl=2 id=s-change label="Class 12"}

Faraday's law tells us **how big** an induced emf is: the rate of change of magnetic flux. It does not, by itself, say which way the current flows. Lenz's rule (1834) answers that:

> The induced current flows in the direction that **opposes the change** in magnetic flux that produces it.

The key word is *change*. The induced current does not fight the field itself.

- If the flux through a loop is **increasing**, the induced current makes its own field **against** the external field, to hold the total back.
- If the flux is **decreasing**, the induced current makes its own field **along** the external field, to prop the total up.

So the loop behaves like something with inertia for flux: it resists whatever the flux is trying to do. A steady flux, however large, induces nothing.

:::figure caption="Left: the N pole approaches, the flux to the right through the ring rises, so the induced field points left and the near face of the ring becomes N. The ring repels the magnet. Right: the N pole recedes, the flux falls, the induced field points right, the near face becomes S and the ring attracts the magnet. Both times the force opposes the motion."
<svg viewBox="0 0 360 160" role="img" aria-label="Two panels: a bar magnet moving towards a ring with the ring repelling it, and a bar magnet moving away from a ring with the ring attracting it">
<g transform="translate(0,0)">
<rect x="10" y="62" width="70" height="26" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<rect x="55" y="62" width="25" height="26" style="fill:var(--phy);opacity:0.25"/>
<text x="20" y="80">S</text><text x="63" y="80">N</text>
<line x1="20" y1="45" x2="70" y2="45" class="pen"/><polygon points="70,41 78,45 70,49" style="fill:var(--ink)"/>
<text x="30" y="38" style="font-size:11px">v</text>
<ellipse cx="130" cy="75" rx="10" ry="40" style="fill:none;stroke:var(--phy);stroke-width:3"/>
<line x1="165" y1="75" x2="105" y2="75" style="stroke:var(--phy);stroke-dasharray:4 3"/><polygon points="108,71 100,75 108,79" style="fill:var(--phy)"/>
<text x="140" y="68" style="font-size:11px">B ind</text>
<text x="104" y="128" style="font-size:11px">near face N</text>
<text x="30" y="150" style="font-size:11px">flux rising: repel</text>
</g>
<line x1="180" y1="10" x2="180" y2="150" class="faint"/>
<g transform="translate(185,0)">
<rect x="10" y="62" width="70" height="26" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<rect x="55" y="62" width="25" height="26" style="fill:var(--phy);opacity:0.25"/>
<text x="20" y="80">S</text><text x="63" y="80">N</text>
<line x1="70" y1="45" x2="20" y2="45" class="pen"/><polygon points="20,41 12,45 20,49" style="fill:var(--ink)"/>
<text x="45" y="38" style="font-size:11px">v</text>
<ellipse cx="130" cy="75" rx="10" ry="40" style="fill:none;stroke:var(--phy);stroke-width:3"/>
<line x1="100" y1="75" x2="160" y2="75" style="stroke:var(--phy);stroke-dasharray:4 3"/><polygon points="157,71 165,75 157,79" style="fill:var(--phy)"/>
<text x="138" y="68" style="font-size:11px">B ind</text>
<text x="104" y="128" style="font-size:11px">near face S</text>
<text x="20" y="150" style="font-size:11px">flux falling: attract</text>
</g>
</svg>
:::

Notice what the rule does *not* claim. The induced field does not cancel the change; it only reduces it. In an ordinary loop with resistance the external flux still changes almost as before. Only in a loop with zero resistance (a superconductor, at the end of this lesson) is the opposition complete.

:::qc
q: A loop sits in a field pointing into the page. The field is steadily decreasing. The induced field at the centre of the loop points
options: ["out of the page, opposing the field", "into the page, along the field", "nowhere: there is no induced current because the field still points into the page", "into the page only if the loop is moving"]
answer: 1
right: Right. The flux into the page is falling; the induced current tries to keep it, so its field points into the page as well.
wrong: Lenz's law opposes the change. The into-the-page flux is falling, so the induced field supports it and points into the page too. Opposing the field itself is the most common mistake.
:::

## A four-step method {lvl=2 id=s-method label="Class 12"}

Every direction question, whatever the geometry, goes through the same four steps.

1. **Flux direction.** Which way does the external field go through the loop?
2. **Change.** Is that flux increasing or decreasing? (Is the field getting stronger, is the area inside the field growing, is the loop turning towards or away from the field?)
3. **Induced field.** Increasing: induced field opposite to the external field inside the loop. Decreasing: same direction.
4. **Current sense.** Curl the fingers of your right hand so the thumb points along the induced field. The fingers give the current.

A handy check from step 4: seen from the side the induced field comes **out** towards you, the current is **anticlockwise**.

:::worked title="A loop leaving a field"
A rectangular loop in the plane of the page is pulled to the right, out of a region where the field points into the page (⊗). Which way does the current flow while the loop is partly out?

1. The flux is into the page.
2. Less of the loop is in the field each second: the flux is decreasing.
3. The induced field must support it: into the page.
4. Thumb into the page, fingers curl **clockwise** as seen by the reader.

When the loop is entirely inside or entirely outside the region, the flux is constant and there is no current at all. This is the reasoning NCERT uses for its Example 6.4 (see the problems for this leaf).
:::

The method also works for an open circuit. If a coil is connected to a capacitor instead of a resistor, no steady current flows, but the emf has the sign Lenz's law would give the current: the plate the current "would flow into" becomes positive.

:::qc
q: A circular loop lies flat on a table. A long straight wire, also on the table, runs beside the loop and carries a current that is increasing. The current in the wire flows from left to right, and the loop is on the far side of the wire (away from you). Which way does the induced current in the loop circulate, seen from above?
options: ["Clockwise", "Anticlockwise", "No current, because the wire's field lines lie in the plane of the table", "It alternates"]
answer: 1
right: "Right. By the right-hand grip rule, a left-to-right current makes a field pointing down into the table on its far side. That downward flux is growing, so the induced field points up, and a current with an upward field is anticlockwise seen from above."
wrong: "Work it through step by step. On the far side of the wire, its field points down into the table. That downward flux is increasing, so the induced field must point up, and a current making an upward field circulates anticlockwise seen from above."
:::

## Why the minus sign: energy conservation {lvl=2 id=s-energy label="Class 12"}

Faraday's law is written with a minus sign:

:::law caption="Faraday's law with Lenz's sign. Φ is the flux through the circuit, taken positive along the normal fixed by the chosen sense of circulation (right-hand rule)."
$$\varepsilon = -\frac{d\Phi_B}{dt}$$
:::

The sign is not a convention. Suppose for a moment that it were a plus sign, so that the induced current **aided** the change. Push the N pole of a magnet a little towards a coil:

- the flux rises, so the induced current makes the near face of the coil an **S** pole;
- the coil attracts the magnet, which speeds up;
- faster motion means faster change of flux, a bigger current and a bigger pull;
- the magnet accelerates without limit, while the coil heats up.

A tiny push would produce unlimited kinetic energy and heat from nothing. That breaks conservation of energy, so nature must choose the other sign.

With the real sign, the coil **repels** the approaching magnet. To keep the magnet moving you must push it, and the work you do is exactly the energy that appears as heat in the coil. Lenz's law is the statement that induced currents are paid for.

:::note title="Self-induction has the same sign"
The same argument applies to a single circuit. If a current's own changing field induced an emf that helped the change, a small increase of current would grow by itself without limit. The real self-induced emf (the "back emf") opposes every change of current. This is the subject of the lesson on self and mutual inductance.
:::

:::qc
q: You push a magnet towards a coil whose ends are not connected to anything. Compared with pushing it towards the same coil with its ends joined, the force you need is
options: ["larger", "the same", "smaller: almost no force, since no current flows", "larger, because the emf is larger"]
answer: 2
right: Right. An emf is induced in both cases, but with an open circuit no current flows, no heat is produced and the coil exerts (almost) no force. Energy accounting and force go together.
wrong: The open coil carries no current, so it makes no field and exerts (almost) no force on the magnet. No heat is produced, so no extra work is needed. The emf is the same either way.
:::

## The force on a loop entering a field {lvl=3 id=s-force label="JEE"}

Lenz's law in mechanical form: **the force from an induced current always opposes the relative motion that causes it.** We can check this, and get its size, for the simplest case.

A square loop of side $L$ and resistance $R$ moves at speed $v$ into a region of uniform field $B$ pointing into the page. Let $x$ be the length of the loop inside the field.

:::figure caption="A loop entering a field region (⊗) at speed v. Only the leading edge is in the field. The flux into the page is rising, so the current is anticlockwise. The force on the leading edge, I L × B, points back against the motion."
<svg viewBox="0 0 340 170" role="img" aria-label="A square loop with its right edge inside a shaded field region, moving to the right, with an anticlockwise current and a leftward force on the right edge">
<rect x="160" y="15" width="170" height="140" style="fill:var(--phy);opacity:0.08"/>
<g class="faint" style="font-size:12px">
<text x="180" y="40">×</text><text x="220" y="40">×</text><text x="260" y="40">×</text><text x="300" y="40">×</text>
<text x="180" y="85">×</text><text x="260" y="85">×</text><text x="300" y="85">×</text>
<text x="180" y="130">×</text><text x="220" y="130">×</text><text x="260" y="130">×</text><text x="300" y="130">×</text>
</g>
<rect x="110" y="45" width="90" height="80" style="fill:none;stroke:var(--ink);stroke-width:2"/>
<polygon points="196,92 200,82 204,92" style="fill:var(--phy)"/>
<polygon points="160,41 150,45 160,49" style="fill:var(--phy)"/>
<polygon points="106,78 110,88 114,78" style="fill:var(--phy)"/>
<polygon points="150,121 160,125 150,129" style="fill:var(--phy)"/>
<line x1="60" y1="85" x2="95" y2="85" class="pen"/><polygon points="95,81 103,85 95,89" style="fill:var(--ink)"/><text x="70" y="78">v</text>
<line x1="205" y1="100" x2="245" y2="100" style="stroke:var(--phy);stroke-width:2"/><polygon points="208,96 200,100 208,104" style="fill:var(--phy)"/>
<text x="230" y="115" style="font-size:11px">F</text>
<line x1="160" y1="140" x2="200" y2="140" class="axis"/><text x="175" y="155" style="font-size:11px">x</text>
<text x="118" y="38" style="font-size:11px">I</text><text x="10" y="160" style="font-size:11px">B into page</text>
</svg>
:::

The flux is $\Phi = BLx$, so $|\varepsilon| = BL\,dx/dt = BLv$ and $I = BLv/R$. Only the leading edge is in the field; the force on it is $ILB$, directed backwards (check it with $\vec F = I\vec L\times\vec B$ in the figure). The forces on the top and bottom edges cancel.

$$F = \frac{B^2L^2v}{R}.$$

Now compare powers. The agent pulling the loop at steady speed does work at the rate $Fv = B^2L^2v^2/R$. The heat produced is $I^2R = (BLv)^2/R = \varepsilon^2/R$. They are equal, exactly as the energy argument demanded.

:::law caption="For any rigid circuit moved against an induced force, at steady speed: mechanical power in = Joule heat out."
$$F v = \frac{\varepsilon^2}{R}$$
:::

This relation is a fast route to induced forces. If you know how the flux depends on position, $\varepsilon = v\,|d\Phi/dx|$, so $F = (d\Phi/dx)^2\,v/R$, with no need to find the current or the field on each piece of wire.

:::worked title="How hard to pull?"
A loop of side 10 cm and resistance 0.05 Ω is pulled at a steady 2 m/s into a field of 0.5 T. Then $\varepsilon = 0.5\times0.1\times2 = 0.10$ V, $I = 2.0$ A and $F = ILB = 2.0\times0.1\times0.5 = 0.10$ N. Power: $Fv = 0.20$ W $= \varepsilon^2/R = 0.01/0.05$ W. While entering, the loop takes $0.1/2 = 0.05$ s and dissipates $0.20\times0.05 = 0.01$ J.
:::

The drag force is proportional to $v$, like viscous drag. A loop sliding freely into the field obeys $m\,dv/dt = -B^2L^2v/R$. Writing $dv/dt = v\,dv/dx$ gives $m\,dv/dx = -B^2L^2/R$: **the speed falls by the same amount for every metre advanced.** The loop loses $B^2L^3/(mR)$ of speed while it enters completely, whatever its starting speed (as long as it gets in).

:::qc
q: The loop in the figure is fully inside the field and still moving to the right. Then it starts to leave through the right-hand boundary. While it leaves, the force on it points
options: ["to the right, helping it out", "to the left, opposing the motion", "zero, because the current reverses", "up the page"]
answer: 1
right: "Right. Leaving, the flux falls and the current reverses (clockwise), but now only the trailing edge is in the field. Reversed current on the opposite edge gives a force that again points against the motion."
wrong: "The current does reverse (it becomes clockwise), but now the trailing edge is the one in the field. Reversed current on the opposite edge means the force still points left, against the motion. The induced force always opposes the relative motion."
:::

## Eddy currents: braking and damping {lvl=3 id=s-eddy label="JEE"}

A solid piece of metal has no wires, but it is full of closed paths. When it moves through a non-uniform field, or the field through it changes, currents swirl round inside it. These are **eddy currents**, and Lenz's law says what they do: they oppose the motion.

- **Braking.** A copper or aluminium plate swinging between magnet poles stops within a few swings. The kinetic energy becomes heat in the plate. Magnetic brakes have no rubbing parts to wear out.
- **Damping.** The coil of a moving-coil meter is wound on a metal frame. Eddy currents in the frame stop the needle swinging, so it settles quickly on its reading.
- **Heating.** Induction cookers and furnaces use deliberately large eddy currents to heat metal.
- **Loss.** In transformer and motor cores, eddy currents waste energy. Cores are built from thin insulated sheets (laminations) so that the current paths are cut.

:::figure caption="A metal plate swinging into a magnet gap (shaded). Left: a solid plate carries large eddy loops and stops quickly. Right: slots cut across the paths force the currents into narrow fingers; the emf round each small loop is small and the resistance is large, so the damping is much weaker."
<svg viewBox="0 0 340 160" role="img" aria-label="Two pendulum plates: a solid one with large circulating eddy currents and a slotted one with only small current loops">
<line x1="85" y1="5" x2="85" y2="40" class="pen"/>
<rect x="40" y="40" width="90" height="80" style="fill:var(--muted);opacity:0.18;stroke:var(--ink)"/>
<rect x="95" y="60" width="50" height="60" style="fill:var(--phy);opacity:0.15"/>
<ellipse cx="95" cy="85" rx="28" ry="22" style="fill:none;stroke:var(--phy);stroke-width:2"/>
<polygon points="93,59 101,63 93,67" style="fill:var(--phy)"/>
<text x="45" y="140" style="font-size:11px">solid: strong braking</text>
<line x1="255" y1="5" x2="255" y2="40" class="pen"/>
<path d="M210 40 H300 V120 H210 Z" style="fill:var(--muted);opacity:0.18;stroke:var(--ink)"/>
<g style="stroke:var(--ink);stroke-width:3">
<line x1="225" y1="120" x2="225" y2="60"/><line x1="240" y1="120" x2="240" y2="60"/><line x1="255" y1="120" x2="255" y2="60"/><line x1="270" y1="120" x2="270" y2="60"/><line x1="285" y1="120" x2="285" y2="60"/>
</g>
<rect x="265" y="60" width="50" height="60" style="fill:var(--phy);opacity:0.15"/>
<ellipse cx="277" cy="88" rx="4" ry="14" style="fill:none;stroke:var(--phy);stroke-width:1.5"/>
<ellipse cx="292" cy="88" rx="4" ry="14" style="fill:none;stroke:var(--phy);stroke-width:1.5"/>
<text x="210" y="140" style="font-size:11px">slotted: weak braking</text>
</svg>
:::

**How big is the drag?** A rough scaling argument. A conductor of conductivity $\sigma$ moving at $v$ through a field $B$ feels an effective electric field $vB$, so the current density is of order $J\sim\sigma vB$. The force per unit volume is $JB\sim\sigma vB^2$. For a volume $V$ of metal in the field,

$$F \sim \sigma v B^2 V \times (\text{a geometric factor less than 1}).$$

The drag grows linearly with speed, with the square of the field and with the conductivity. The geometric factor is below 1 because the currents must close through regions where they push the wrong way or no field acts. [Inference: scaling estimate, not an exact result.]

:::qc
q: A brass plate and an otherwise identical plate made of a better conductor, copper, swing into the same magnet gap at the same speed. Which is braked more strongly?
options: ["Brass, because its higher resistance produces more heat", "Copper, because larger currents flow for the same emf", "Both equally, because the emf is the same", "Neither: eddy currents need a changing field, not motion"]
answer: 1
right: "Right. The emf is the same, but copper has the higher conductivity, so the eddy currents are larger and the force (and the power σv²B²V) is larger too."
wrong: "The emf is the same in both, but the current density is σvB, so the better conductor carries larger currents and feels a larger force. The heat produced, ε²/R, is also larger for copper because R is smaller."
:::

## A magnet falling through a ring or a tube {lvl=3 id=s-tube label="JEE"}

Drop a strong magnet down a vertical copper pipe and it drifts down slowly, taking seconds to come out of a pipe it would fall through in a fraction of a second.

Think of the pipe as a stack of rings. Take a magnet falling with its N pole down.

- **Rings below the magnet:** the magnet is approaching, so their flux is rising. Each one repels the magnet: an upward push.
- **Rings above the magnet:** the magnet is leaving, so their flux is falling. Each one attracts the magnet: an upward pull.

:::figure caption="A magnet falling N-down through a copper tube (cross-section). The ring just below has rising flux and repels the magnet; the ring just above has falling flux and attracts it. The two induced currents circulate in opposite senses, and both forces on the magnet point up."
<svg viewBox="0 0 300 200" role="img" aria-label="A vertical tube in section with a magnet inside; induced current loops above and below the magnet in opposite senses, both pushing the magnet upward">
<rect x="100" y="10" width="10" height="180" style="fill:var(--muted);opacity:0.5"/>
<rect x="190" y="10" width="10" height="180" style="fill:var(--muted);opacity:0.5"/>
<rect x="130" y="75" width="40" height="55" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<rect x="130" y="105" width="40" height="25" style="fill:var(--phy);opacity:0.25"/>
<text x="144" y="94">S</text><text x="144" y="123">N</text>
<line x1="230" y1="90" x2="230" y2="130" class="pen"/><polygon points="226,128 230,136 234,128" style="fill:var(--ink)"/><text x="238" y="115">v</text>
<text x="88" y="60" style="fill:var(--phy)">⊙</text><text x="203" y="60" style="fill:var(--phy)">⊗</text>
<text x="88" y="160" style="fill:var(--phy)">⊗</text><text x="203" y="160" style="fill:var(--phy)">⊙</text>
<text x="215" y="50" style="font-size:11px">flux falling: attracts</text>
<text x="215" y="175" style="font-size:11px">flux rising: repels</text>
<line x1="150" y1="70" x2="150" y2="35" style="stroke:var(--phy);stroke-width:2"/><polygon points="146,38 150,30 154,38" style="fill:var(--phy)"/>
<text x="157" y="40" style="font-size:11px">F up</text>
</svg>
:::

The force grows in proportion to the speed (as for every eddy-current drag), so the magnet speeds up only until the upward force equals its weight. It then falls at a **terminal speed**. At that speed all the lost gravitational energy, at the rate $Mgv_t$, becomes heat in the pipe.

How does $v_t$ depend on the set-up? The drag coefficient $k$ in $F = kv$ grows with the conductivity and thickness of the wall (more current for the same emf) and with the square of the magnet's strength (bigger emf, and bigger force per unit current). So

$$v_t = \frac{Mg}{k},\qquad k\propto \frac{\sigma\,t\,m^2}{a^4},$$

where $m$ is the magnet's dipole moment, $t$ the wall thickness and $a$ the pipe radius. The steep $a^{-4}$ says a slightly wider pipe lets the magnet fall much faster. The Olympiad section derives this law with its numerical factor.

:::qc
q: A copper ring falls, horizontal, down along the axis of a long vertical bar magnet (the magnet passes through the ring). At the instant the ring passes the middle of the magnet, its acceleration is
options: ["less than g", "equal to g", "greater than g", "zero"]
answer: 1
right: "Right. Near the middle of a long magnet the flux through the ring is at its maximum, so its rate of change is momentarily zero. No current flows at that instant, and there is no magnetic force."
wrong: "Near the middle of a long bar magnet the flux through the ring is a maximum: rising before, falling after. At the maximum dΦ/dt = 0, so the induced current and the force are zero for an instant and the acceleration is g."
:::

## Lenz's law in circuits and in atoms {lvl=3 id=s-mutual label="JEE"}

The same rule fixes the signs in every induction formula.

**Mutual induction.** Two coaxial coils, wound the same way, sit side by side. Switch on a current $I_1$ in the first.

- While $I_1$ **rises**, the second coil's flux rises, and its induced current $I_2$ flows the **opposite** way round. Opposite currents repel: the second coil is pushed away.
- While $I_1$ **falls** (switch opened), $I_2$ flows the **same** way. Parallel currents attract: the second coil is pulled in.
- With $I_1$ steady, nothing happens.

In symbols $\varepsilon_2 = -M\,dI_1/dt$, with $M$ positive for coils wound the same way. The minus sign is Lenz's law. The details are in the lesson on self and mutual inductance.

**Self-induction.** A coil opposes changes in its own current: $\varepsilon = -L\,dI/dt$. That is why current in an inductor cannot jump, and why breaking a circuit with a large inductor gives a spark: the coil drives a large emf to keep the current going.

**Atoms.** When a field is switched on through an atom, the induced electric field speeds up or slows down the circulating electrons. By Lenz's law the change in their orbital moment points **against** the applied field. This is diamagnetism, present in every material (see the lesson on magnetic materials).

:::qc
q: Two identical coaxial coils face each other. The current in the first is switched off. During the switch-off, the second coil
options: ["is repelled", "is attracted", "feels no force because the current is decreasing", "feels a torque but no force"]
answer: 1
right: "Right. The second coil's flux is falling, so its induced current flows in the same sense as the first coil's, to keep the flux. Parallel currents attract."
wrong: "When the primary current falls, the secondary's induced current flows the same way, trying to keep the flux. Currents circulating the same way attract, so the second coil is pulled towards the first."
:::

## A dipole through a ring: the drag worked out {lvl=4 id=s-dipole label="Olympiad"}

Model the magnet as a point dipole of moment $m$ moving along the axis of a thin ring of radius $a$ and resistance $R$. Let $z$ be the distance from the ring's centre.

**Flux through the ring.** The direct calculation is awkward because the dipole field is singular. Use reciprocity instead: the mutual inductance between the ring and a tiny loop is the same whichever one carries the current. With current $I$ in the ring, the field on its axis is $\mu_0Ia^2/2(a^2+z^2)^{3/2}$. A tiny loop of moment $m$ at that point links flux $B\cdot(\text{its area})$, so

$$\Phi(z) = \frac{\mu_0 m a^2}{2(a^2+z^2)^{3/2}},\qquad \frac{d\Phi}{dz} = -\frac{3\mu_0 m a^2 z}{2(a^2+z^2)^{5/2}}.$$

The flux is largest at $z = 0$ and $d\Phi/dz$ is zero there: at the moment the magnet is in the plane of the ring there is no force on it.

**Force.** Neglect the ring's self-inductance (good when the magnet is slow). Power balance $Fv = \varepsilon^2/R$ with $\varepsilon = v\,d\Phi/dz$ gives a drag

:::eq caption="Drag on a dipole moving along the axis of a ring of resistance R."
$$F = \frac{v}{R}\left(\frac{d\Phi}{dz}\right)^2 .$$
:::

**Momentum taken by the ring.** The impulse of the drag over a whole passage is $\int F\,dt = \frac1R\int(d\Phi/dz)^2\,v\,dt = \frac1R\int(d\Phi/dz)^2\,dz$. The speed has dropped out: **every passage removes the same momentum**, whether the magnet is fast or slow. With $z = a\tan\theta$,

$$\int_{-\infty}^{\infty}\frac{z^2\,dz}{(a^2+z^2)^5} = \frac{1}{a^7}\int_{-\pi/2}^{\pi/2}\sin^2\theta\cos^6\theta\,d\theta = \frac{5\pi}{128\,a^7},$$

so

$$\Delta p = \frac{9\mu_0^2m^2a^4}{4R}\cdot\frac{5\pi}{128a^7} = \frac{45\pi\,\mu_0^2 m^2}{512\,R\,a^3}.$$

**A tube.** Slice a thin-walled tube (radius $a$, wall thickness $t\ll a$, conductivity $\sigma$) into rings of height $dz$. Each has resistance $2\pi a/(\sigma t\,dz)$. If the rings do not influence each other (their own inductance neglected), their drags add:

$$F = kv,\qquad k = \frac{\sigma t}{2\pi a}\int_{-\infty}^{\infty}\left(\frac{d\Phi}{dz}\right)^2dz = \frac{45\,\mu_0^2 m^2\sigma t}{1024\,a^4}.$$

:::worked title="Terminal speed in a copper pipe"
Take a magnet of mass 7.5 g and moment $m = 1.0$ A m² in a copper pipe with mean radius 8 mm, wall 1.5 mm, $\sigma = 5.9\times10^7$ S/m.

$k = 45(4\pi\times10^{-7})^2(1.0)^2(5.9\times10^7)(1.5\times10^{-3})/(1024\times(8\times10^{-3})^4) \approx 1.50$ N s/m.

$v_t = Mg/k = 0.0075\times9.8/1.50 \approx 0.049$ m/s, about 5 cm/s, roughly a hundred times slower than free fall from a metre.

[Inference: the moment 1 A m² is my estimate for a small NdFeB magnet (magnetisation of order 10⁶ A/m times 1 cm³), and a 1 cm magnet in a pipe of radius 8 mm is not a point dipole. Treat the answer as an order of magnitude.]
:::

When is "neglect inductance" safe? A ring's current relaxes in a time $L/R$. If the magnet takes much longer than that to pass ($a/v\gg L/R$), the current simply follows the emf. At high speed the currents lag, the drag stops growing with $v$, and the ring starts to push the magnet sideways and away rather than drag it. That lag is the subject of the next section.

## The jumping ring and induction levitation {lvl=4 id=s-jump label="Olympiad"}

Put an aluminium ring over a vertical iron core that sticks out of a coil. Close a DC switch: the ring leaps up. Lenz's law explains the jump: while the coil current rises, the ring current flows the opposite way and opposite currents repel. Once the current is steady, the force stops. A ring with a slit does not jump at all: an emf appears across the gap but no current flows.

With **AC** in the coil the ring is pushed up continuously and can float. But this needs more than Lenz's law: it needs the ring's **inductance**. Here is why.

Let the coil current be $I_1 = I_0\cos\omega t$, and let $M(z)$ be the mutual inductance, decreasing as the ring rises. The ring has resistance $R$ and self-inductance $L$:

$$L\frac{dI_2}{dt} + RI_2 = -M\frac{dI_1}{dt} = M\omega I_0\sin\omega t.$$

The steady solution is $I_2 = \dfrac{M\omega I_0}{Z}\sin(\omega t-\varphi)$ with $Z = \sqrt{R^2+\omega^2L^2}$ and $\tan\varphi = \omega L/R$. The vertical force is $F = I_1I_2\,dM/dz$ (the energy of interaction is $MI_1I_2$). Averaging $\cos\omega t\,\sin(\omega t-\varphi)$ over a cycle gives $-\tfrac12\sin\varphi$, so

:::eq caption="Time-averaged force on a ring above an AC coil. dM/dz < 0, so the force is upward (repulsive)."
$$\langle F\rangle = -\frac{dM}{dz}\,\frac{M\omega I_0^2}{2Z}\sin\varphi = -\frac{dM}{dz}\,\frac{M\omega^2 L\,I_0^2}{2(R^2+\omega^2L^2)}.$$
:::

- **Purely resistive ring** ($L\to0$): the ring current is in phase with the emf, which is a quarter cycle out of phase with $I_1$. The force is repulsive for half of each cycle and attractive for the other half, and averages to **zero**.
- **Inductive ring** ($\omega L\gg R$): the ring current lags nearly half a cycle behind $I_1$, so the two currents are nearly opposite all the time and the force is always repulsive. The average force tends to $-\tfrac{dM}{dz}\,MI_0^2/2L$.

So a ring of lower resistance jumps higher. A common demonstration cools the ring in liquid nitrogen first and it jumps markedly higher. [Unverified: demonstration reported from memory.]

The same physics underlies **electrodynamic levitation**: a magnet moving fast over a conducting sheet induces eddy currents that lag behind it and push it up, while at low speed the effect is mostly drag. [Unverified: qualitative claim from memory; the full analysis needs the sheet's field distribution.]

## The superconducting ring: flux frozen in {lvl=4 id=s-super label="Olympiad"}

What happens to Lenz's law when $R = 0$? Kirchhoff's loop rule for a ring of self-inductance $L$ in an external flux $\Phi_\text{ext}$ reads

$$-\frac{d\Phi_\text{ext}}{dt} - L\frac{dI}{dt} = IR = 0 \quad\Longrightarrow\quad \Phi_\text{ext} + LI = \text{constant}.$$

The total flux through a superconducting ring **cannot change**. Here the opposition of Lenz's law is complete: every change in external flux is exactly cancelled by the ring's own flux.

- A ring that is superconducting in zero field, then has a field switched on, acquires a current $I = -\Phi_\text{ext}/L$ that keeps the net flux at zero.
- A ring cooled through its transition in a field keeps that flux when the field is removed. A current $I = \Phi_\text{ext}/L$ appears and, with no resistance, flows indefinitely (a **persistent current**).

:::worked title="Trapping flux"
A ring of area $\pi(0.02)^2$ m² and self-inductance $1.0\times10^{-7}$ H is cooled until superconducting in a perpendicular field of 0.010 T. The field is then removed. The ring keeps $\Phi = 0.010\times\pi\times4\times10^{-4} = 1.26\times10^{-5}$ Wb, so it now carries $I = \Phi/L \approx 126$ A. The energy stored is $\tfrac12LI^2 = \Phi^2/2L \approx 0.79$ mJ, supplied by the work done on the ring as the field was removed.
:::

Push a magnet towards a superconducting ring and the ring current grows to keep the flux constant. The force is repulsive and, with no resistance, nothing is dissipated: the magnetic energy $(\Delta\Phi)^2/2L$ is stored and returned when the magnet withdraws. A superconductor acts as a perfect **magnetic spring**, which is why a magnet can float stably over one. (A bulk superconductor goes further and expels the field from its interior, the Meissner effect; see the lesson on magnetic materials.)

:::qc
q: A superconducting ring with no current lies in zero field. A magnet is brought up slowly so that it would produce flux Φ₀ through the ring if the ring were absent. The flux actually through the ring is then
options: ["Φ₀", "Φ₀/2", "zero", "−Φ₀"]
answer: 2
right: "Right. The total flux must stay at its initial value, zero. The ring current produces −Φ₀ through itself, exactly cancelling the magnet's contribution."
wrong: "With R = 0 the emf round the ring must vanish, so Φ_ext + LI cannot change. It started at zero, so it stays zero: the ring current exactly cancels the magnet's flux."
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The induced current opposes the **change** of flux. Rising flux: induced field against the external field. Falling flux: along it. {lvl=2}
2. Method: flux direction, rising or falling, induced field, right-hand rule for the current. {lvl=2}
3. An approaching pole meets a like pole; a receding pole is chased by an unlike pole. {lvl=2}
4. The minus sign in $\varepsilon = -d\Phi/dt$ is energy conservation; the opposite sign would give runaway motion and energy from nothing. {lvl=2}
5. A loop moving into or out of a field feels $F = B^2L^2v/R$ against the motion, and $Fv = \varepsilon^2/R$. {lvl=3}
6. Eddy currents in solid conductors oppose motion (braking, damping) and waste energy in cores; laminations or slots cut them down. Drag $\propto\sigma vB^2$. {lvl=3}
7. A magnet falling through a conducting tube is repelled by the rings below and attracted by those above; it reaches a terminal speed where $Mgv_t$ is the Joule heat. {lvl=3}
8. $\varepsilon_2 = -M\,dI_1/dt$ and $\varepsilon = -L\,dI/dt$: rising primary current repels the secondary, falling current attracts it. Diamagnetism is Lenz's law inside atoms. {lvl=3}
9. Dipole on the axis of a ring: $F = (v/R)(d\Phi/dz)^2$; momentum lost per passage $45\pi\mu_0^2m^2/(512Ra^3)$; thin tube $k = 45\mu_0^2m^2\sigma t/(1024a^4)$. {lvl=4}
10. A ring over an AC coil is repelled on average only because of its inductance: $\langle F\rangle\propto\sin\varphi$, zero for a purely resistive ring. {lvl=4}
11. A superconducting ring keeps $\Phi_\text{ext} + LI$ constant: complete opposition, a lossless magnetic spring. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Do not make the induced field oppose the external field automatically. It opposes only when the flux is rising. {lvl=2}
- A loop entirely inside a uniform field, moving or not, has no induced current: its flux does not change. {lvl=2}
- Lenz's law gives the direction of the emf even in an open circuit (for capacitor polarity), but force needs current, so an open coil exerts no force. {lvl=2}
- When a loop leaves a field the current reverses, but the force still opposes the motion, because the field now acts on the other edge. {lvl=3}
- In "ring over a magnet" problems, the force vanishes where $d\Phi/dz = 0$ (middle of a long magnet, magnet in the plane of a ring), not where the field is zero. {lvl=3}
- For a sliding loop with only magnetic drag, speed falls linearly with distance, not exponentially: $m\,dv/dx = -B^2L^2/R$. {lvl=3}
- Use $Fv = \varepsilon^2/R$ to get drag forces fast, but only when the induced currents follow the emf instantly (negligible inductance). {lvl=4}
- Lenz's law gives "opposition"; the size of the opposing flux depends on $R$ and $L$. Only a superconductor cancels the change completely. {lvl=4}
:::
