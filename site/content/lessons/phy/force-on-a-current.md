---
title: Force on a current-carrying conductor
summary: 'Why a wire carrying current jumps sideways between magnet poles, the shove that spins every fan, mixer and metro motor.'
ncert: ["Class 10 Science · Ch 12 Magnetic Effects of Electric Current (§12.3)", "Class 12 Physics · Ch 4 Moving Charges and Magnetism (§4.2)"]
up_to: Olympiad
builds_on: [Electric current and potential difference, Field lines and compasses, Vectors and the cross product, Newton's laws and friction]
notes_prompt: Explain, without any formula, why a wire carrying a current along a magnetic field feels no force, but the same wire turned across the field is pushed sideways, and why the push is neither along the wire nor along the field.
margin:
  - kind: history
    title: History
    text: In 1820, within weeks of Oersted's report that a current deflects a compass, Ampère showed that two current-carrying wires push or pull each other. In 1821 Faraday made a wire rotate continuously round a magnet dipped in mercury, the first electric motor. (Dates from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "Fleming's left-hand rule uses conventional current. For a beam of electrons, point the second finger opposite to their motion first. Most lost marks come from skipping this step."
  - kind: olympiad
    title: Olympiad link
    text: "A flexible wire carrying current I, held at tension T in a uniform field B, bends into a circular arc of radius T/(IB). A charged particle with momentum p moves on a circle of radius p/(qB). So T/I plays the role of p/q, and the wire traces exactly the particle's orbit."
books:
  - { title: "NCERT Science Class X", ref: "Ch 12 Magnetic Effects of Electric Current, §12.3, Activity 12.7, Example 12.2, Exercises 5–7" }
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 4 Moving Charges and Magnetism, §4.2 Magnetic force, Example 4.1, Exercises 4.5–4.6" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 34 Magnetic Field (force on a current-carrying wire)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 3 · 3.5 Constant magnetic field. Magnetics" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 6 The magnetic field (force on a wire)" }
cards:
  - { front: "Force on a straight wire of length $l$ carrying $I$ in a uniform field $\\mathbf B$?", back: "$\\mathbf F = I\\,\\mathbf l\\times\\mathbf B$, magnitude $BIl\\sin\\theta$. Largest ($BIl$) when the wire is across the field, zero when it is along it." }
  - { front: "Fleming's left-hand rule?", back: "Thumb, first finger and second finger of the left hand at right angles: First finger = Field, seCond finger = Current (conventional), thuMb = Motion (force)." }
  - { front: "Where does $\\mathbf F = I\\mathbf l\\times\\mathbf B$ come from?", back: "Each carrier feels $q\\mathbf v_d\\times\\mathbf B$; there are $nAl$ of them and $nqv_dA = I$, so the total is $I\\mathbf l\\times\\mathbf B$." }
  - { front: "Force on a bent wire from A to B in a uniform field?", back: "The same as on the straight wire from A to B: $\\mathbf F = I\\,\\overrightarrow{AB}\\times\\mathbf B$. A closed loop in a uniform field feels zero net force, though it may feel a torque." }
  - { front: "Kick given by a short current pulse to a rod of length $l$?", back: "Impulse $= Bl\\int I\\,dt = Blq$, where $q$ is the charge that passed. The shape of the pulse does not matter." }
  - { front: "Tension in a flexible circular current loop of radius $R$ in a perpendicular field?", back: "$T = BIR$. Each element feels an outward force $BI\\,R\\,d\\varphi$, balanced by $T\\,d\\varphi$ from the tension at its two ends." }
core:
  idea: 'A current-carrying wire in a magnetic field feels the sum of the Lorentz forces on its moving charges: $\vec F = I\,\vec l\times\vec B$, perpendicular to both wire and field. In a uniform field a wire of any shape feels the force of the straight chord joining its ends.'
  formulas:
    - tex: '\vec F = I\,\vec l\times\vec B,\qquad F = BIl\sin\theta'
      label: 'Force on a straight wire'
    - tex: '\vec F = I\,\overrightarrow{AB}\times\vec B'
      label: 'Wire of any shape in a uniform field'
  conditions:
    - 'Uniform magnetic field over the length of wire used'
    - 'Steady current in a thin wire; only the length actually inside the field counts'
    - 'The wire''s own field and the Earth''s field are ignored unless given'
  sign: 'Fleming''s left-hand rule: first finger Field, second finger Current (conventional), thumb Motion. For an electron beam reverse the motion to get the conventional current first.'
outcomes:
  - 'State why a current in a field feels a force and find its direction with Fleming''s left-hand rule'
  - 'Calculate the force on a straight wire using $F = BIl\sin\theta$'
  - 'Use $\vec F = I\,\vec l\times\vec B$ for a wire of any shape and show that a closed loop has zero net force'
  - 'Solve rod-on-rails, inclined-plane and hanging-wire equilibrium problems'
  - 'Use impulse $Blq$ for a current pulse and tension $T = BIR$ for a flexible current loop'
opener:
  story: |
    Hang a loose aluminium rod between the two poles of a horseshoe magnet, so it can swing freely. Connect a battery, and the rod lurches out of the gap as if someone had flicked it. Reverse the battery and it lurches the other way. Turn the magnet over and it lurches the other way again.

    Here is the odd part. The pole on one side is a north, the pole on the other a south, so you would expect the rod to be pulled towards one of them. It is not. It moves at a right angle to both the field and the wire, which is a direction nothing in daily life prepares you for.

    The same shove spins your ceiling fan, your mixer-grinder and the motors of the metro train. So work it out. **Which way does the wire jump?**
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A wire carrying current away from you sits between a north pole on the left and a south pole on the right and is pushed downwards"><rect x="16" y="64" width="60" height="100" style="fill:var(--bad);stroke:var(--ink);stroke-width:2"/><rect x="244" y="64" width="60" height="100" style="fill:var(--c);stroke:var(--ink);stroke-width:2"/><text x="46" y="56" style="font-size:11px;fill:var(--muted);text-anchor:middle">N</text><text x="274" y="56" style="font-size:11px;fill:var(--muted);text-anchor:middle">S</text><line x1="84" y1="88" x2="230.0" y2="88.0" style="stroke:var(--muted);stroke-width:1.5"/><polygon points="236,88 230.0,85.0 230.0,91.0" style="fill:var(--muted)"/><line x1="84" y1="114" x2="230.0" y2="114.0" style="stroke:var(--muted);stroke-width:1.5"/><polygon points="236,114 230.0,111.0 230.0,117.0" style="fill:var(--muted)"/><line x1="84" y1="140" x2="230.0" y2="140.0" style="stroke:var(--muted);stroke-width:1.5"/><polygon points="236,140 230.0,137.0 230.0,143.0" style="fill:var(--muted)"/><text x="160" y="80" style="font-size:11px;fill:var(--muted);text-anchor:middle">magnetic field</text><circle cx="160" cy="114" r="12" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><line x1="154" y1="108" x2="166" y2="120" style="stroke:var(--ink);stroke-width:2"/><line x1="166" y1="108" x2="154" y2="120" style="stroke:var(--ink);stroke-width:2"/><line x1="160" y1="130" x2="160.0" y2="189.0" style="stroke:var(--chem);stroke-width:3"/><polygon points="160,198 164.5,189.0 155.5,189.0" style="fill:var(--chem)"/><text x="150" y="190" style="font-size:11px;fill:var(--muted);text-anchor:end">the wire is shoved down</text><text x="160" y="226" style="font-size:11px;fill:var(--muted);text-anchor:middle">current going away from you, into the page</text></svg>'
life:
  - 'The motor in a ceiling fan, mixer-grinder or washing machine is coils of current pushed by magnets, turning the shove into rotation.'
  - 'Electric trains and the Delhi Metro use powerful motors that work on exactly this force.'
  - 'The bass in a loudspeaker is a coil of wire pushed back and forth by a magnet, which shakes the cone and the air.'
  - 'An electric two-wheeler runs on a motor whose spinning part is pushed round by magnetic forces on its currents.'
  - 'Old moving-coil meters deflect their pointer because the current in a small coil is pushed by a magnet.'
models:
  - name: 'Push at right angles'
    text: 'Some influences do not act along the line between cause and effect but across it. Sideways effects need a sideways view: ask which two directions the answer depends on.'
  - name: 'Reverse one thing, reverse the outcome'
    text: 'Flip the current or flip the magnet and the push flips; flip both and nothing changes. Check which inputs matter and how they combine before guessing.'
  - name: 'Many small pushes add up'
    text: 'Each charge feels a tiny force, but together they shove a heavy rod. Small, steady, aligned contributions in one direction beat large random ones, in physics and in a crowd.'
links:
  - leaf: 'phy/electromagnetic-induction'
    name: 'Electromagnetic induction'
    same: 'It is the motor effect run backwards: push a wire through a field and you get a current instead of using a current to get a push. The same cross product of direction and field sits behind both.'
    differs: 'In a motor you supply the current and get motion; in a generator you supply motion and get a current.'
symbols:
  - {s: '\vec F', means: 'force on the wire (newton, N)'}
  - {s: 'I', means: 'current in the wire (ampere, A)'}
  - {s: '\vec l', means: 'length of wire inside the field, arrow along the current (metres, m)'}
  - {s: '\vec B', means: 'magnetic field (tesla, T)'}
  - {s: '\theta', means: 'angle between the wire and the field (degrees or radians)'}
  - {s: 'q', means: 'charge that flows in a short pulse of current (coulomb, C)'}
  - {s: 'T', means: 'tension, the pull along a flexible loop of wire (newton, N)'}
next:
  q: 'A current is only charges moving along a wire, so the force on the wire must really be a force on each moving charge. What happens to a single charge flying through empty space with no wire: does it bend, and into what shape?'
  leaf: 'phy/lorentz-force-and-circular-motion'
  name: 'Lorentz force'
---

:::hook
q: So what's your guess? The magnet's field points from the north pole on the left to the south pole on the right, and the current flows away from you. Which way is the wire pushed?
options: ["Towards the north pole, on the left", "Towards the south pole, on the right", "Straight down (or up), towards neither pole"]
answer: 2
right: Right. The push is at a right angle to both the field and the current. For this arrangement it is straight down; reverse the current or flip the magnet and it goes up. Fleming's left-hand rule gives the direction, and the formula F = BIl gives the size.
wrong: The poles do not pull the wire at all. The push is at a right angle to both the field (left to right) and the current (away from you), so it points straight down here, and up if you reverse the current or the magnet. Fleming's left-hand rule finds it.
:::

## A wire is a crowd of moving charges {lvl=1 id=s-why label="Class 10"}

A current in a wire makes a magnetic field: that is how it turns a compass needle. Newton's third law then suggests the reverse. If the wire pushes on the magnet, the magnet should push back on the wire.

It does. Hang a light aluminium rod between the poles of a horseshoe magnet and pass a current through it (NCERT Activity 12.7). The rod swings sideways. Reverse the current and it swings the other way. Turn the magnet over and it also swings the other way.

The reason sits at the level of single charges. A charge **moving** through a magnetic field feels a force at right angles to its motion. A charge at rest feels none. A current is a steady stream of charges drifting along the wire, so every one of them is pushed sideways, and they push the wire with them.

Experiments show that the force on the rod:

- grows with the current $I$, with the strength of the field $B$, and with the length $l$ of wire inside the field;
- is largest when the wire runs **across** the field, and zero when the wire runs **along** it;
- points neither along the wire nor along the field, but at right angles to both.

For a wire across the field, $F = BIl$. This is the meaning of the unit of field: **one tesla** is the field in which a 1 m wire carrying 1 A, placed across the field, feels a force of 1 N.

:::qc
q: The current in the rod of Activity 12.7 is doubled and the magnet is replaced by one twice as strong. The force on the rod becomes
options: ["the same", "twice as large", "four times as large", "half as large"]
answer: 2
right: Right. F = BIl, so doubling both B and I multiplies the force by 4.
wrong: The force is proportional to both the current and the field, F = BIl. Doubling each gives 2 × 2 = 4 times the force.
:::

## Which way? Fleming's left-hand rule {lvl=1 id=s-fleming label="Class 10"}

Three directions are involved: the field, the current and the force. They are all at right angles to each other, like the edges meeting at the corner of a room. Fleming's rule fixes which way round they go.

:::law caption="Fleming's left-hand rule"
Stretch the thumb, first finger and second finger of your **left** hand so that each is at right angles to the other two. Point the **first** finger along the **field** (north to south) and the **second** finger along the **current**. The **thumb** then points along the **force** on the conductor (its motion).
:::

A memory hook: **F**irst finger, **F**ield; se**C**ond finger, **C**urrent; thu**M**b, **M**otion.

:::figure caption="Fleming's left-hand rule as three arrows. The field B points right, the current I comes out of the page towards you, and the force F on the wire is upward. Swap any one arrow and the force reverses."
<svg viewBox="0 0 320 200" role="img" aria-label="Three mutually perpendicular arrows: field to the right, current out of the page, force upward">
<line class="ray" x1="160" y1="120" x2="268" y2="120"/><polygon points="272,120 260,114 260,126" style="fill:var(--phy)"/>
<line class="ln" x1="160" y1="120" x2="160" y2="34"/><polygon points="160,28 154,40 166,40" style="fill:var(--ink)"/>
<line class="wf" x1="160" y1="120" x2="99" y2="172"/><polygon points="95,175 106,172 99,164" style="fill:var(--eng)"/>
<text class="k" x="230" y="112">B</text><text x="196" y="140">first finger: field</text>
<text class="k" x="168" y="40">F</text><text x="168" y="56">thumb: force (motion)</text>
<text class="k" x="80" y="168">I</text><text x="20" y="194">second finger: current</text>
<circle cx="160" cy="120" r="3" style="fill:var(--ink)"/>
</svg>
:::

Two points to keep straight.

- The rule uses **conventional current**, the direction positive charge would flow. For a beam of electrons moving one way, the current points the other way.
- If the wire lies **along** the field, no arrangement of the fingers works: the force is zero.

:::qc
q: A horizontal wire runs east–west and carries current towards the east. The magnetic field is vertically downward. Which way is the force on the wire?
options: ["North", "South", "Up", "West"]
answer: 0
right: Right. With east = x, north = y, up = z, the current is along +x and the field along −z; x × (−z) = +y, which is north.
wrong: Point the first finger down (field) and the second finger east (current). Your left thumb then points north. As vectors, x̂ × (−ẑ) = +ŷ, north.
:::

## Motors and loudspeakers in outline {lvl=1 id=s-uses label="Class 10"}

Every electric motor, loudspeaker and moving-coil meter uses this force.

- **Motor.** A rectangular coil sits between magnet poles. The two sides that run across the field carry current in opposite directions, so one is pushed up and the other down: the coil turns. A split-ring commutator reverses the current every half turn so that the turning keeps the same sense.
- **Loudspeaker.** A coil attached to a paper cone sits in the field of a ring magnet. The audio current goes back and forth, so the force on the coil does too, and the cone pushes the air in and out.

The turning effect on a coil is a torque. It belongs with current loops, and is worked out in the lesson *current loop and galvanometer*. This lesson stays with the force itself.

## The force as a vector, F = I l × B {lvl=2 id=s-vector label="Class 12"}

Start from a single charge. A charge $q$ moving with velocity $\mathbf v$ in a field $\mathbf B$ feels the magnetic part of the Lorentz force (see *Lorentz force and circular motion*):

$$\mathbf F = q\,\mathbf v\times\mathbf B .$$

Now take a straight piece of wire of length $l$ and cross-section $A$, with $n$ carriers per unit volume, each of charge $q$, drifting with velocity $\mathbf v_d$. The piece holds $nAl$ carriers, each feeling the same force, so the total is

$$\mathbf F = (nAl)\,q\,\mathbf v_d\times\mathbf B .$$

The current is $I = nqv_dA$. Define a vector $\mathbf l$ of length $l$ pointing along the current. Then $nAlq\,\mathbf v_d = I\,\mathbf l$, and

:::eq caption="Force on a straight wire in a uniform field. Magnitude BIl sin θ, where θ is the angle between the wire (current) and the field."
$$\mathbf F = I\,\mathbf l\times\mathbf B$$
:::

The cross product carries all three Class 10 facts:

- it is perpendicular to both $\mathbf l$ and $\mathbf B$, which is why the force is sideways;
- its size $BIl\sin\theta$ is largest at $90^\circ$ and zero at $0^\circ$;
- its sense follows the right-hand screw rule for $\mathbf l\times\mathbf B$. Fleming's left-hand rule is that same cross product, encoded in a hand.

**Electrons give the same answer.** In a metal the carriers are electrons, $q = -e$, drifting against the current. Both the charge and the velocity change sign, so $q\mathbf v_d$ and the force are unchanged. A magnetic force on a wire cannot tell you the sign of the carriers. (The Hall effect can; see the next section.)

:::worked title="Levitating a wire (NCERT Example 4.1, with numbers to compare)"
A wire of mass 200 g and length 1.5 m carrying 2 A is held up by a horizontal field. Balance the weight: $BIl = mg$, so
$$B = \frac{mg}{Il} = \frac{0.2\times9.8}{2\times1.5} = 0.65\ \text{T}.$$
Only the mass per unit length, $m/l$, matters. For comparison, Earth's field is about $5\times10^{-5}$ T [Unverified, typical value], so a 1 m wire carrying 10 A in Earth's field feels at most $5\times10^{-4}$ N, roughly the weight of half a gram.
:::

:::qc
q: A wire carries 8 A at 30° to a uniform field of 0.15 T. The force on each metre of the wire is
options: ["1.2 N", "0.6 N", "1.04 N", "0"]
answer: 1
right: Right. F/l = BI sin θ = 0.15 × 8 × 0.5 = 0.6 N/m (NCERT Exercise 4.5).
wrong: Only the component of the wire across the field counts: F/l = BI sin 30° = 0.15 × 8 × 0.5 = 0.6 N per metre.
:::

## Weighing a magnetic force: the current balance {lvl=2 id=s-balance label="Class 12"}

The cleanest way to measure $B$ is to weigh the force. Hang a rectangular loop from one pan of a balance so that only its bottom edge, of length $l$, lies in the field, horizontal and across it. The two vertical sides carry opposite currents through the same field, so their sideways forces cancel. The top edge is outside the field.

Switch on the current $I$ and the balance reading changes by $\Delta m$:

$$BIl = (\Delta m)\,g, \qquad B = \frac{(\Delta m)\,g}{Il}.$$

With $l = 5$ cm and $I = 2$ A, a field of 0.1 T changes the reading by $\Delta m = 0.1\times2\times0.05/9.8 \approx 1.0$ g, easily seen on a laboratory balance.

The modern Kibble balance, used since 2019 to realise the kilogram, is a precise descendant of this idea: it weighs $BIl$ against $mg$ in one mode and measures $Bl$ by moving the coil in another [Unverified, from memory]. The force between two currents, which once defined the ampere, is in the lesson *forces between parallel currents*.

:::qc
q: Why does only the bottom edge of the loop in a current balance matter?
options: ["The side currents are too small", "The vertical sides feel equal and opposite forces, and the top edge is outside the field", "Magnetic forces act only on horizontal wires", "The loop is made of a non-magnetic metal"]
answer: 1
right: Right. The sides carry opposite currents in the same field, so their forces cancel; the top edge sees no field.
wrong: The two vertical sides carry currents in opposite directions through the same field, so their forces cancel. The top edge is outside the field, so only the bottom edge contributes.
:::

## Wires of any shape {lvl=3 id=s-shape label="JEE"}

For a curved wire, cut it into short pieces $d\mathbf l$, each almost straight. Each piece feels

$$d\mathbf F = I\,d\mathbf l\times\mathbf B .$$

If $\mathbf B$ is **uniform** and the current is the same all along the wire, both $I$ and $\mathbf B$ come out of the sum:

$$\mathbf F = I\Big(\int_A^B d\mathbf l\Big)\times\mathbf B = I\,\overrightarrow{AB}\times\mathbf B .$$

The sum of all the little steps along the wire is just the straight step from start to end. So:

:::law caption="Force on a wire of any shape in a uniform field"
A wire from A to B, of any shape, feels the same force as the straight wire from A to B carrying the same current: $\mathbf F = I\,\overrightarrow{AB}\times\mathbf B$.
:::

:::figure caption="A semicircle from A to B in a field B coming out of the page (dots). The force on each element points towards the centre. Their components along AB cancel in pairs, and what is left equals the force on the dashed chord: BI(2R), straight down."
<svg viewBox="0 0 320 210" role="img" aria-label="Semicircular wire with radial inward forces and the net force perpendicular to the chord">
<defs><marker id="fc-a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="fc-a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<g style="fill:var(--muted)"><circle cx="40" cy="40" r="2"/><circle cx="100" cy="30" r="2"/><circle cx="220" cy="30" r="2"/><circle cx="280" cy="40" r="2"/><circle cx="30" cy="110" r="2"/><circle cx="290" cy="110" r="2"/><circle cx="160" cy="110" r="2"/><circle cx="60" cy="185" r="2"/><circle cx="260" cy="185" r="2"/></g>
<path class="ln" d="M60,150 A100,100 0 0 1 260,150"/>
<line class="faint" x1="60" y1="150" x2="260" y2="150"/>
<line class="ray" x1="160" y1="52" x2="160" y2="76" marker-end="url(#fc-a1)"/>
<line class="ray" x1="90" y1="80" x2="107" y2="97" marker-end="url(#fc-a1)"/>
<line class="ray" x1="230" y1="80" x2="213" y2="97" marker-end="url(#fc-a1)"/>
<line class="ray" x1="62" y1="132" x2="86" y2="135" marker-end="url(#fc-a1)"/>
<line class="ray" x1="258" y1="132" x2="234" y2="135" marker-end="url(#fc-a1)"/>
<line class="ln" x1="160" y1="152" x2="160" y2="196" marker-end="url(#fc-a2)" style="stroke-width:2.2"/>
<text class="k" x="44" y="166">A</text><text class="k" x="266" y="166">B</text>
<text x="118" y="44">I →</text><text class="k" x="168" y="192">F = BI·AB</text>
<text x="292" y="24">B ⊙</text>
</svg>
:::

Three consequences.

- **Semicircle of radius $R$:** $F = BI(2R)$, not $BI\pi R$.
- **A closed loop in a uniform field feels zero net force,** whatever its shape, because its start and end coincide: $\oint d\mathbf l = \mathbf 0$. It may still feel a **torque**, since the forces act at different points. That torque runs every motor (lesson *current loop and galvanometer*).
- **Only the uniform-field case is this simple.** In a non-uniform field, the force varies along the loop and need not cancel (last section).

:::worked title="A quarter circle"
A wire bent into a quarter circle of radius 10 cm carries 4 A in a 0.5 T field perpendicular to its plane. Its ends are $R\sqrt2 = 0.1414$ m apart, so
$$F = BI\,R\sqrt2 = 0.5\times4\times0.1414 = 0.283\ \text{N},$$
perpendicular to the chord, in the plane of the wire. Doing the integral directly gives the same answer, with much more work.
:::

:::qc
q: A square loop carrying current lies flat in a uniform magnetic field that is perpendicular to its plane. The net force on the loop is
options: ["4BIa, outward", "BIa", "zero", "it depends on the direction of the current"]
answer: 2
right: Right. A closed loop in a uniform field feels no net force: the forces on opposite sides are equal and opposite. (Here they stretch or squeeze the loop.)
wrong: The end-to-end vector of a closed loop is zero, so the net force in a uniform field is zero. The four side forces are real, but they cancel in pairs.
:::

## Rods on rails and slopes {lvl=3 id=s-rails label="JEE"}

A favourite set-up: two parallel conducting rails a distance $l$ apart, a rod laid across them, a battery driving current $I$ through the rod, and a field $\mathbf B$. Only the length $l$ between the rails carries current, so the magnetic force is $I\mathbf l\times\mathbf B$ for that length. After that it is an ordinary Newton's-laws problem: draw the free-body diagram with the magnetic force as one more force.

Watch the **direction** of the magnetic force. It is perpendicular to the field, so a **vertical** field gives a **horizontal** force, even on a slope.

:::figure caption="A rod (seen end-on, current into the page) rests on rails inclined at θ, in a vertical field B. The magnetic force BIl is horizontal. Along the slope, BIl cos θ balances mg sin θ."
<svg viewBox="0 0 320 210" role="img" aria-label="Free-body diagram of a current-carrying rod on an inclined plane with vertical magnetic field">
<defs><marker id="fc-b1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><marker id="fc-b2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="fc-b3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--muted)"/></marker></defs>
<polygon class="ln" points="30,180 260,180 260,47"/>
<path class="ln" d="M70,180 A40,40 0 0 0 64.6,160"/><text x="76" y="174">θ</text>
<line class="faint" x1="40" y1="160" x2="40" y2="100" marker-end="url(#fc-b3)"/><line class="faint" x1="290" y1="190" x2="290" y2="120" marker-end="url(#fc-b3)"/><text x="296" y="140">B</text>
<circle class="ln" cx="145.5" cy="102.9" r="9"/><line class="ln" x1="139.5" y1="96.9" x2="151.5" y2="108.9"/><line class="ln" x1="151.5" y1="96.9" x2="139.5" y2="108.9"/>
<line class="ln" x1="145.5" y1="112" x2="145.5" y2="158" marker-end="url(#fc-b1)"/><text class="k" x="150" y="160">mg</text>
<line class="ray" x1="155" y1="102.9" x2="210" y2="102.9" marker-end="url(#fc-b2)"/><text class="k" x="196" y="95">BIl</text>
<line class="ln" x1="141" y1="95" x2="121" y2="60" marker-end="url(#fc-b1)"/><text class="k" x="104" y="58">N</text>
</svg>
:::

:::worked title="Holding a rod still on a smooth slope"
A rod of mass 60 g lies across smooth rails 0.30 m apart, inclined at $30^\circ$, in a vertical field of 0.40 T. Along the slope, the horizontal magnetic force has component $BIl\cos\theta$ up the slope and gravity has $mg\sin\theta$ down it:
$$BIl\cos\theta = mg\sin\theta \;\Rightarrow\; I = \frac{mg\tan\theta}{Bl} = \frac{0.06\times9.8\times0.577}{0.40\times0.30} = 2.83\ \text{A}.$$
Perpendicular to the slope, the magnetic force presses the rod **into** the rails: $N = mg\cos\theta + BIl\sin\theta$. That matters as soon as there is friction.
:::

**With friction,** there is no single answer but a range. Static friction can act either way along the slope, up to $\mu N$, so the rod stays put for all currents between two limits. A useful trick: if the field direction is yours to choose, tilting it so that the magnetic force has an upward part reduces $N$, and with it the friction. That is why the smallest field that drags a rod along rough horizontal rails is **not** vertical.

:::qc
q: The rails in the worked example are made horizontal (θ = 0), still smooth, with the same vertical field and current. What does the rod do?
options: ["Stays at rest", "Accelerates horizontally along the rails", "Rises off the rails", "Presses harder on the rails but does not move"]
answer: 1
right: Right. The magnetic force is horizontal and nothing opposes it on smooth rails, so the rod accelerates at BIl/m.
wrong: A vertical field gives a horizontal force on a rod across it. On smooth horizontal rails nothing balances this force, so the rod accelerates along the rails at BIl/m.
:::

## A wire hanging in a field {lvl=3 id=s-hang label="JEE"}

Hang a horizontal rod of mass $m$ and length $l$ from two light conducting threads, in a **vertical** field $B$. The current gives a steady horizontal force $BIl$. In equilibrium the threads tilt by $\theta$ where the tension balances both weight and magnetic force:

$$\tan\theta = \frac{BIl}{mg}.$$

There is a neat way to see what happens if the current is switched on **suddenly**. A constant horizontal force plus gravity is just a tilted, stronger "effective gravity", pointing along the new equilibrium direction at angle $\theta$. The rod starts at rest at angle $\theta$ from this new "down", so it swings like a pendulum released from rest: through equilibrium and out to $\theta$ on the other side. The maximum swing from the vertical is $2\theta$.

:::worked title="Switching on the current"
A 50 g rod 0.25 m long hangs in a vertical field of 0.98 T, and 2 A is switched on. Then $BIl = 0.98\times2\times0.25 = 0.49$ N and $mg = 0.05\times9.8 = 0.49$ N, so $\tan\theta = 1$ and the equilibrium angle is $45^\circ$. Switched on suddenly, the rod swings out to $90^\circ$, level with its supports, before swinging back. The threads stay taut throughout: measured from the tilted effective gravity, the swing is only $45^\circ$ either side, and a pendulum released from rest within $90^\circ$ of its "down" always keeps its string tight. Air drag eventually leaves it at $45^\circ$.
:::

:::qc
q: In the worked example the current is switched on slowly instead, raising it gradually from zero to 2 A. What is the largest angle the threads reach?
options: ["45°", "90°", "0°", "More than 90°"]
answer: 0
right: Right. Raised slowly, the rod follows the equilibrium angle, which ends at 45°. The overshoot to 2θ needs a sudden switch-on.
wrong: If the current rises slowly, the rod is always close to equilibrium and never picks up speed, so it simply tilts to the final equilibrium angle, 45°.
:::

## The kick of a current pulse {lvl=4 id=s-pulse label="Olympiad"}

Often the current is a short pulse: a capacitor discharged through the rod, or a switch closed for an instant. The force $BIl$ then changes too quickly to follow. But the **impulse** it delivers does not depend on the details:

$$J = \int F\,dt = Bl\int I\,dt = Bl\,q,$$

where $q$ is the total charge that passed. If the pulse is much shorter than the time the rod takes to move noticeably, the rod simply leaves with momentum $mv = Blq$, and the rest is a projectile or pendulum problem. Measure how high the rod jumps, or how far a hanging rod swings, and you have measured $q$. This is the same idea as the ballistic galvanometer.

:::worked title="A jumping wire"
A rod of mass 2 g and length 0.10 m lies across two horizontal rails in a horizontal field of 0.40 T along the rails. A capacitor sends 0.05 C through it in a fraction of a millisecond, with the current in the sense that makes the force upward. Then
$$mv = Blq = 0.40\times0.10\times0.05 = 2.0\times10^{-3}\ \text{N s}, \qquad v = 1.0\ \text{m/s},$$
and the rod jumps to $h = v^2/2g = 5.1$ cm. Gravity's impulse during the pulse, $mg\,\Delta t$, is negligible because $\Delta t$ is so short. While the rod moves, a back-EMF $Blv$ (electromagnetic induction, a later branch) slightly reduces the current; for so short a pulse this effect is small. [Inference]
:::

:::qc
q: The same capacitor is discharged through a larger resistance, so the pulse lasts four times as long (still very short) with a quarter of the peak current. The rod's take-off speed
options: ["is a quarter as large", "is unchanged", "is four times as large", "is halved"]
answer: 1
right: Right. The kick depends only on the charge passed, q = ∫I dt, which is the same.
wrong: The impulse is Bl∫I dt = Blq. The total charge is still the capacitor's charge, so the take-off speed is unchanged.
:::

## Tension in a flexible current loop {lvl=4 id=s-flex label="Olympiad"}

Lay a loop of soft, flexible wire on a smooth table in a vertical field and pass a current round it. If the current runs in the sense that pushes every element **outward**, the loop pulls itself into a circle and becomes taut. The outward force is the same size, $BI$ per unit length, everywhere. A taut string with a uniform sideways load per unit length has the same curvature everywhere, which means a circle.

To find the tension, take a short arc of the circle, of radius $R$, subtending an angle $d\varphi$ at the centre. Its length is $R\,d\varphi$, so the outward magnetic force on it is $BI\,R\,d\varphi$. The tension $T$ pulls along the tangent at each end. The two tangents differ by $d\varphi$, so the tensions have a net inward component $2T\sin(d\varphi/2) \approx T\,d\varphi$. Balance:

:::eq caption="Tension in a circular current loop in a perpendicular uniform field. The same relation gives the radius of an arc of flexible wire held at tension T: R = T/(BI)."
$$T\,d\varphi = BI\,R\,d\varphi \quad\Longrightarrow\quad T = BIR$$
:::

:::figure caption="Left: the current runs clockwise with B into the page, so the force on every element points outward and the loop becomes a taut circle. Right: one short arc. The tensions at its ends, along the tangents, have a net inward part T dφ, which balances the outward force BI R dφ."
<svg viewBox="0 0 340 210" role="img" aria-label="A circular current loop with outward forces and a free-body diagram of a short arc">
<defs><marker id="fc-c1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="fc-c2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<circle class="ln" cx="100" cy="105" r="62"/>
<line class="ray" x1="100" y1="41" x2="100" y2="17" marker-end="url(#fc-c1)"/><line class="ray" x1="100" y1="169" x2="100" y2="193" marker-end="url(#fc-c1)"/>
<line class="ray" x1="36" y1="105" x2="12" y2="105" marker-end="url(#fc-c1)"/><line class="ray" x1="164" y1="105" x2="188" y2="105" marker-end="url(#fc-c1)"/>
<line class="ray" x1="145" y1="60" x2="162" y2="43" marker-end="url(#fc-c1)"/><line class="ray" x1="55" y1="60" x2="38" y2="43" marker-end="url(#fc-c1)"/>
<line class="ray" x1="145" y1="150" x2="162" y2="167" marker-end="url(#fc-c1)"/><line class="ray" x1="55" y1="150" x2="38" y2="167" marker-end="url(#fc-c1)"/>
<text x="84" y="100">B ⊗</text><text x="78" y="120">I clockwise</text>
<path class="ln" d="M222.4,96.6 A110,110 0 0 1 297.6,96.6" style="stroke-width:2.4"/>
<line class="ln" x1="222.4" y1="96.6" x2="196" y2="107" marker-end="url(#fc-c2)"/><line class="ln" x1="297.6" y1="96.6" x2="324" y2="107" marker-end="url(#fc-c2)"/>
<line class="ray" x1="260" y1="88" x2="260" y2="52" marker-end="url(#fc-c1)"/>
<text class="k" x="200" y="124">T</text><text class="k" x="314" y="124">T</text><text class="k" x="236" y="44">BI R dφ</text>
<line class="faint" x1="260" y1="200" x2="222.4" y2="96.6"/><line class="faint" x1="260" y1="200" x2="297.6" y2="96.6"/><text x="252" y="184">dφ</text>
</svg>
:::

With a loop 0.5 m long ($R = 0.5/2\pi = 0.080$ m), $I = 3$ A and $B = 0.2$ T, the tension is $T = 0.2\times3\times0.080 = 0.048$ N. Small, but enough to hold the loop in a perfect circle.

Two refinements.

- **Reverse the current** and every element is pushed inward. The loop does not shrink neatly: the circle is now unstable, and the wire crumples.
- **The particle analogy.** A charge with momentum $p$ moves in a circle of radius $p/(qB)$; a wire at tension $T$ bends to radius $T/(IB)$. A flexible wire fixed at one end and held at tension $T$ therefore lies along the path a particle with $p/q = T/I$ would follow, even in a non-uniform field. Accelerator builders have used this "floating wire" method to trace beam paths through magnets [Unverified, from memory].

:::qc
q: The current in a taut circular loop in a perpendicular field is doubled, and the loop keeps its size. The tension
options: ["is unchanged", "doubles", "quadruples", "halves"]
answer: 1
right: Right. T = BIR, so at fixed B and R the tension is proportional to I.
wrong: The outward force per unit length is BI, so the tension that balances it, T = BIR, is proportional to the current: it doubles.
:::

## Who pushes the wire, and who does the work? {lvl=4 id=s-work label="Olympiad"}

The magnetic force acts on the moving **electrons**, but the wire as a whole moves. How does the push reach the lattice of ions? And the magnetic force $q\mathbf v\times\mathbf B$ is always perpendicular to the velocity, so it never does work. Yet a motor's rod speeds up. Both puzzles have the same answer.

**Transferring the push.** The sideways force crowds electrons against one face of the wire. This uncovers positive ions on the opposite face, and a transverse electric field, the **Hall field**, $E_H = v_dB$, builds up until it stops further crowding. That field pulls on the positive ions of the lattice. Per unit volume the ions carry charge $ne$, so the force on them is $neE_H = nev_dB = jB$, exactly the magnetic force per unit volume. The magnetic field pushes the electrons; the electrons, through the Hall field, push the lattice.

**The energy.** Once the rod moves with velocity $\mathbf u$, each electron's velocity is $\mathbf v_d + \mathbf u$, and its magnetic force $q(\mathbf v_d+\mathbf u)\times\mathbf B$ has two parts:

- the part $q\mathbf v_d\times\mathbf B$ is sideways and pushes the rod forward, delivering mechanical power $BIl\,u$;
- the part $q\mathbf u\times\mathbf B$ points **along** the wire, against the current. It is the back-EMF $Blu$, and the battery must do extra work $BluI$ per second to drive the current against it.

The two powers are equal. The magnetic field takes energy from the battery through one part and hands it to the rod through the other, doing no net work itself, as it must. Motional EMF is treated fully under electromagnetic induction.

## Non-uniform fields {lvl=4 id=s-nonuniform label="Olympiad"}

The rule "a closed loop feels no net force" needs a uniform field. In a field that varies across the loop, the opposite sides sit in different fields and the forces no longer cancel.

Take a small square loop of side $a$ in the plane $z = 0$, current $I$ anticlockwise seen from above, in a field whose vertical part grows along $x$: $B_z = B_0 + Gx$. The side at $x = a$ feels $Ia(B_0 + Ga)$ in the $+x$ direction; the side at $x = 0$ feels $IaB_0$ in the $-x$ direction. The two sides along $x$ cancel (they are mirror images). The net force is

$$F_x = Ia^2G = m\,\frac{\partial B_z}{\partial x},$$

where $m = Ia^2$ is the loop's magnetic moment. A loop is pulled towards stronger field when its moment points along the field. This is why a magnet attracts a piece of iron, and it is developed in *magnetic dipole and bar magnet* and *magnetic materials*. (A real field with this gradient also has a horizontal part, $B_x = Gz$, which vanishes in the plane of the loop; see problem o2.)

:::qc
q: A closed current loop is placed in a field that is stronger on its left side than on its right. In general the net force on the loop
options: ["is zero, because the loop is closed", "is non-zero", "is zero only if the current is small", "is always towards the right"]
answer: 1
right: Right. The zero-net-force result needs a uniform field. With a gradient, opposite sides feel different forces, and the net force is m times the field gradient.
wrong: A closed loop feels zero net force only in a uniform field. In a non-uniform field the forces on opposite sides differ, leaving a net force (towards the stronger field if the moment is aligned with it).
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A current-carrying wire in a magnetic field feels a force because each moving charge in it does. The force is perpendicular to both the wire and the field. {lvl=1}
2. For a straight wire across the field, $F = BIl$; along the field, zero. One tesla gives 1 N on 1 m of wire carrying 1 A across it. {lvl=1}
3. Fleming's left-hand rule: First finger Field, seCond finger Current (conventional), thuMb Motion. Reverse the current or the field and the force reverses. {lvl=1}
4. $\mathbf F = I\,\mathbf l\times\mathbf B$, magnitude $BIl\sin\theta$, follows from $q\mathbf v_d\times\mathbf B$ summed over $nAl$ carriers. Positive and negative carriers give the same force. {lvl=2}
5. In a uniform field, a wire of any shape from A to B feels $I\,\overrightarrow{AB}\times\mathbf B$; a closed loop feels no net force (but possibly a torque). {lvl=3}
6. Rods on rails and hanging wires are free-body problems with one extra force; a vertical field gives a horizontal force even on a slope. A suddenly switched current swings a hanging wire to twice its equilibrium angle. {lvl=3}
7. A short pulse gives impulse $Blq$; a flexible loop has tension $T = BIR$; the field does no net work, as the Hall field and back-EMF show; in a non-uniform field a loop feels $m\,\partial B/\partial x$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- For an electron beam, turn the motion into conventional current (reverse it) before using Fleming's rule. {lvl=1}
- Use only the length of wire that is inside the field and carrying current: the length between the rails, not the whole rod. {lvl=2}
- $\sin\theta$ uses the angle between the wire and the field, not between the wire and the force. {lvl=2}
- A vertical field never gives a vertical force. Find the force direction first, then resolve it along and across the slope. {lvl=3}
- For a bent wire, use the straight line between the ends, not the length of the wire. A semicircle gives $2R$, not $\pi R$. {lvl=3}
- "Closed loop, zero force" holds only in a uniform field, and it says nothing about torque. {lvl=3}
- With friction on rails, the magnetic force can change the normal reaction. Check whether it presses the rod in or lifts it. {lvl=3}
- For a short pulse, work with impulse $Blq$, not with force; the current's time profile does not matter. {lvl=4}
:::
