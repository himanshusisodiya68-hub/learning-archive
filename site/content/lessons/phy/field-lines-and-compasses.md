---
title: Magnetic field, field lines and compasses
summary: What a magnetic field is and why moving charges make one; the compass as a detector; field lines of a bar magnet, a straight wire, a loop and a solenoid; the right-hand thumb rule; superposition and neutral points; the Earth's field; no magnetic monopoles; B as an axial vector; exact field lines in two dimensions; magnetism as electricity seen from a moving frame.
ncert: ["Class 10 Science · Ch 12 Magnetic Effects of Electric Current (§12.1–12.2)"]
up_to: Olympiad
builds_on: [Electric current, Electric field, Field lines, Vectors and the cross product]
notes_prompt: Explain, without any formula, why a magnetic field line can never simply stop in empty space, and why the line through the middle of a bar magnet has to run from its south pole to its north pole.
margin:
  - kind: history
    title: History
    text: William Gilbert argued around 1600 that the Earth itself is a great magnet. In 1820 Hans Christian Oersted saw a compass needle swing when a nearby wire carried current, the first link between electricity and magnetism. Within weeks Ampère had shown that two currents push and pull on each other. (Dates as usually quoted; the 1600 date is from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "Two questions come every year: draw the field lines of a bar magnet (closed curves, crowded at the poles, never crossing) and use the right-hand thumb rule for a wire or a loop. For a loop or solenoid, the end where the current looks anticlockwise to you is the north pole."
  - kind: olympiad
    title: Olympiad link
    text: In any field made by long parallel currents, the field lines are the contour lines of a single function ψ(x, y), and equal steps of ψ give lines whose density is exactly the field strength. Two equal parallel currents give a figure-of-eight separatrix that is a lemniscate of Bernoulli.
books:
  - { title: "NCERT Science Class X", ref: "Ch 12 Magnetic Effects of Electric Current, §12.1 Magnetic field and field lines, §12.2 Magnetic field due to a current-carrying conductor; Example 12.1; Exercises 1, 3, 4" }
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 4 Moving Charges and Magnetism; Ch 5 Magnetism and Matter (the Earth's field, Gauss's law for magnetism)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Chapters on the magnetic field, the field due to a current, and permanent magnets (chapter numbers not checked, [Unverified])" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 5 The fields of moving charges (magnetism from relativity); Ch. 6 The magnetic field" }
cards:
  - { front: "What is the direction of the magnetic field at a point, and how do you find it in the lab?", back: "The direction in which the north pole of a small compass needle points there. Field lines are drawn tangent to this direction." }
  - { front: "Why are magnetic field lines closed curves, and why do they never cross?", back: "There are no magnetic monopoles for lines to start or end on ($\\oint\\vec B\\cdot d\\vec S = 0$). They never cross because the field has one direction at each point." }
  - { front: "Right-hand thumb rule for a straight wire? For a loop or solenoid?", back: "Wire: thumb along the current, fingers curl the way the field circles. Loop or solenoid: fingers along the current, thumb gives the field through the middle, which points out of the north end." }
  - { front: "Field of a long straight wire, and where the neutral point is when it sits in a uniform perpendicular field $B_0$?", back: "$B = \\mu_0 I/(2\\pi r)$, circling the wire. Neutral point at $r = \\mu_0 I/(2\\pi B_0)$, on the side where the wire's field opposes $B_0$." }
  - { front: "Why is $\\vec B$ called an axial vector?", back: "It is built from a cross product of two ordinary vectors ($I\\,d\\vec l\\times\\vec r$). In a mirror its components parallel to the mirror flip and the perpendicular one stays, the opposite of an ordinary arrow." }
  - { front: "Ratio of magnetic to electric force between two parallel beams of like charges moving at speed $v$?", back: "$v^2/c^2$. The magnetic part attracts, so the net repulsion is $(1 - v^2/c^2)$ times the electric force: magnetism is a relativistic side of electricity." }
core:
  idea: 'Moving charges (currents) make a magnetic field $\vec B$, and $\vec B$ acts only on moving charges. Field lines are closed curves: the tangent gives the direction of $\vec B$, the crowding its strength. A straight current gives circles about the wire, found by the right-hand thumb rule.'
  formulas:
    - tex: 'B = \frac{\mu_0 I}{2\pi r}'
      label: 'Long straight wire'
    - tex: '\oint \vec B\cdot d\vec S = 0'
      label: 'No magnetic monopoles (field lines never end)'
    - tex: '\vec F = q\,\vec v\times\vec B'
      label: 'Force on a moving charge'
  conditions:
    - 'Steady currents, field in vacuum (air), no iron nearby'
    - 'Infinitely long straight wire (or a point close to a long one); ideal long solenoid with a uniform field inside'
    - 'Fields from different sources add as vectors (superposition); the compass needle is small enough not to disturb the field'
  sign: 'For a straight wire the thumb is the current and the fingers give the field; for a loop or solenoid the fingers follow the current and the thumb gives the field. Outside a magnet lines run N to S, inside S to N.'
outcomes:
  - 'Draw the field lines of a bar magnet, a straight wire, a loop and a solenoid, and read direction and strength from them'
  - 'Find the direction of the field of a current using the right-hand thumb rule'
  - 'Explain how a compass needle detects a field, including the Earth''s field and a wire''s field together'
  - 'Locate neutral points by adding fields as vectors'
  - 'State why $\oint\vec B\cdot d\vec S = 0$ and what it says about field lines and monopoles'
---

:::hook
q: An electron is held at rest in the gap between the poles of a very strong horseshoe magnet. What force does the magnet exert on it?
options: ["A pull towards the north pole", "A pull towards the south pole", "No force at all", "It depends on whether the electron is positive or negative"]
answer: 2
right: Right. A magnet does nothing to a charge at rest. Magnetic forces act only on moving charges, and are made only by moving charges (a magnet is full of them, in its atoms). That one fact runs through this whole branch.
wrong: A magnetic field exerts no force on a charge at rest, however strong the magnet. It acts only on moving charges, and moving charges are also what make it. This lesson starts from that fact.
:::

## What a magnetic field is, and why this branch exists {lvl=1 id=s-why label="Class 10"}

Before 1820 there seemed to be two separate subjects. **Electricity** was about charges and currents. **Magnetism** was about lodestones and compass needles. Then Oersted noticed that a compass needle near a wire swings when a current is switched on. A current, which is just charges moving, does what a magnet does.

Everything since has confirmed one picture:

- **Moving charges make a magnetic field** in the space around them. A current in a wire is the obvious case. A bar magnet is the hidden case: inside it, countless electrons spin and orbit in step.
- **The magnetic field pushes only on moving charges.** It turns a compass needle because the needle is itself full of these tiny atomic currents.

A **field** is a property of space: at every point there is a definite strength and direction, whether or not anything is there to feel it. You met the electric field this way. The magnetic field, written $\vec B$, is the same kind of object, with one difference you will meet again and again: its push is sideways to the motion of the charge it acts on.

So the Magnetism branch splits in a natural way:

1. **Sources.** How moving charges make $\vec B$. This lesson draws the field; the lessons *Biot–Savart law* and *Ampère's law* compute it.
2. **Forces.** What $\vec B$ does to moving charges: *Force on a current*, *Lorentz force and circular motion*, *Forces between parallel currents*, *Current loop and galvanometer*.
3. **Matter.** Magnets as collections of atomic currents: *Magnetic dipole and bar magnet*, *Magnetic materials*.
4. **Use.** *Domestic electric circuits*, in the Class 10 chapter.

## The compass: a field detector {lvl=1 id=s-compass label="Class 10"}

A compass needle is a small, light bar magnet on a pivot. Left alone, it settles along a north–south line.

- The end that points towards the geographic north is called the needle's **north pole** (N). The other end is its **south pole** (S). This is just a name for the north-seeking end.
- Like poles repel and unlike poles attract. So the Earth must have a magnetic **south** pole near its geographic north, which attracts the needle's N end. The Earth's magnetic "north" in everyday speech is, as a magnet, a south pole.

Near a bar magnet, the needle ignores the Earth (whose field is weak) and lines up with the magnet's field instead. This gives us the **definition of the field's direction**:

> The direction of $\vec B$ at a point is the direction in which the north pole of a small compass needle points when placed there.

Move the compass a little in that direction, read it again, and repeat. The path you trace is a **magnetic field line**. Iron filings sprinkled on a card do the same job all at once: each filing becomes a tiny needle and lines up along the field.

:::qc
q: A compass placed due east of a bar magnet points away from the magnet. Which pole of the magnet faces the compass?
options: ["North pole", "South pole", "Either; a compass cannot tell", "Neither; the compass is reading the Earth's field"]
answer: 0
right: Right. The needle's north end is pushed away, so the nearby pole repels a north pole: it is the magnet's north pole. Field lines leave a north pole.
wrong: The needle's north end points away from the magnet, so the nearby pole repels a north pole. Like poles repel, so the magnet's north pole faces the compass.
:::

## Field lines of a bar magnet {lvl=1 id=s-bar label="Class 10"}

Tracing the field round a bar magnet with a compass gives the familiar pattern below.

:::figure caption="Field lines of a bar magnet. Outside, the lines leave the north pole and enter the south pole. Inside, they run from S back to N, so every line is a closed curve. They crowd together near the poles, where the field is strongest."
<svg viewBox="0 0 460 225" role="img" aria-label="Bar magnet with closed field lines looping from its north pole on the right, around the outside, into its south pole on the left, and back through the magnet">
<path class="ray" d="M 290 100 C 330 50 130 50 170 100"/>
<path class="ray" d="M 290 100 C 360 10 100 10 170 100"/>
<path class="ray" d="M 290 100 C 400 -25 60 -25 170 100"/>
<path class="ray" d="M 290 120 C 330 170 130 170 170 120"/>
<path class="ray" d="M 290 120 C 360 210 100 210 170 120"/>
<path class="ray" d="M 290 120 C 400 245 60 245 170 120"/>
<line class="ray" x1="290" y1="110" x2="450" y2="110"/><line class="ray" x1="10" y1="110" x2="170" y2="110"/>
<polyline class="ray" points="236,57 228,62 236,67"/><polyline class="ray" points="236,27 228,32 236,37"/><polyline class="ray" points="236,1 228,6 236,11"/>
<polyline class="ray" points="236,153 228,158 236,163"/><polyline class="ray" points="236,183 228,188 236,193"/><polyline class="ray" points="236,209 228,214 236,219"/>
<polyline class="ray" points="402,105 410,110 402,115"/><polyline class="ray" points="82,105 90,110 82,115"/>
<rect class="m2" x="170" y="95" width="120" height="30" style="stroke:var(--ink);stroke-width:1.4"/>
<line class="faint" x1="185" y1="110" x2="275" y2="110"/><polyline class="ln" points="248,105 256,110 248,115"/>
<text class="k" x="178" y="114">S</text><text class="k" x="276" y="114">N</text>
</svg>
:::

Each property in the NCERT list has a reason behind it.

- **The direction is the tangent.** At each point the line runs along $\vec B$, by construction: that is how we traced it.
- **Lines never cross.** At a crossing, a compass would have to point two ways at once. The field has one direction at each point, so lines cannot cross. (A line can pass through a point where $B = 0$; there the direction is undefined. These are the *neutral points* below.)
- **Crowding shows strength.** Draw the lines so that the number crossing a small area at right angles is proportional to $B$. Then where the field is strong the lines bunch up, as near the poles, and where it is weak they spread out.
- **Lines are closed.** Electric field lines start on positive charges and end on negative ones. There is no magnetic "charge" for a line to start or end on. Break a bar magnet in two and you get two complete magnets, each with N and S, never a lone N. So a line that leaves the N pole must come back, and inside the magnet it runs from S to N to close the loop.

:::qc
q: Why must the field line through the centre of a bar magnet point from S to N inside the magnet?
options: ["Because like poles repel inside the magnet", "Because the lines that leave N and enter S outside must continue somewhere, and there is nothing for them to end on", "Because the field inside a magnet is zero", "It need not: inside, the lines run from N to S as well"]
answer: 1
right: Right. Lines enter the S end from outside and cannot stop, so they carry on through the magnet and come out at N. Each line is a closed loop.
wrong: Field lines have nothing to end on, because there are no magnetic charges. The lines entering the S end from outside must continue through the magnet and emerge at N, so inside they point from S to N.
:::

## Oersted's wire and the right-hand thumb rule {lvl=1 id=s-wire label="Class 10"}

Pass a straight wire vertically through a card, sprinkle iron filings, and switch on a few amperes. The filings arrange themselves in **concentric circles** centred on the wire, in planes perpendicular to it. A compass carried round one circle turns steadily, always pointing along the circle.

Three facts come out of such experiments:

- **Shape:** circles round the wire, not lines towards it or along it.
- **Direction:** reverse the current and every compass reverses. The sense of the circles is given by the **right-hand thumb rule**: hold the wire in your right hand with the thumb along the current; your fingers curl in the direction of the field.
- **Strength:** the field grows with the current and falls off with the distance. For a long wire, $B = \dfrac{\mu_0 I}{2\pi r}$, with $\mu_0 = 4\pi\times10^{-7}$ T m/A. (The lessons *Biot–Savart law* and *Ampère's law* derive this; here it is just a result to use.)

:::figure caption="Left: a straight wire with current I upwards; by the right-hand thumb rule the field circles anticlockwise when seen from above. Right: the same wire seen end-on, current out of the page (⊙). The circles are drawn closer together near the wire because the field there is stronger; their radii grow in a fixed ratio because B falls as 1/r."
<svg viewBox="0 0 460 220" role="img" aria-label="A vertical wire with upward current and two field circles around it, and an end-on view showing concentric field circles spaced further apart with distance">
<line class="ln" x1="110" y1="20" x2="110" y2="205"/><polyline class="ln" points="104,32 110,20 116,32"/>
<text class="k" x="120" y="30">I</text>
<ellipse class="ray" cx="110" cy="130" rx="62" ry="18"/><polyline class="ray" points="104,143 112,148 104,153"/>
<ellipse class="ray" cx="110" cy="75" rx="40" ry="12"/><polyline class="ray" points="104,82 112,87 104,92"/>
<text class="k" x="176" y="132">B</text>
<text x="20" y="200">thumb: I</text><text x="20" y="214">fingers: B</text>
<circle class="ray" cx="330" cy="110" r="18"/><circle class="ray" cx="330" cy="110" r="30"/><circle class="ray" cx="330" cy="110" r="50"/><circle class="ray" cx="330" cy="110" r="83"/>
<polyline class="ray" points="336,87 328,92 336,97"/><polyline class="ray" points="336,75 328,80 336,85"/><polyline class="ray" points="336,55 328,60 336,65"/><polyline class="ray" points="336,22 328,27 336,32"/>
<circle class="ln" cx="330" cy="110" r="6"/><circle cx="330" cy="110" r="2" style="fill:var(--ink)"/>
<text class="k" x="420" y="40">B</text>
</svg>
:::

**Sizes.** A wire carrying 10 A gives $B = 2\times10^{-7}\times10/0.01 = 200\ \mu$T at 1 cm, and 20 µT at 10 cm. The Earth's field is roughly 25–65 µT depending on place [Unverified, typical textbook range]. So a domestic current near a compass is easily noticed, which is exactly what Oersted saw.

:::worked title="NCERT Example 12.1: a power line"
A horizontal power line carries current from east to west. Point the thumb of the right hand west. The fingers curl over the top of the wire and back under it.

- **Directly below** the wire, the fingers point **south**.
- **Directly above** it, they point **north**.

A check with the cross product (Class 12 notation): the field from a current element is along $d\vec l\times\hat r$, where $\hat r$ points from the wire to the point. Below the wire, $d\vec l$ is west and $\hat r$ is down; west × down = south (using east, north, up as a right-handed set). The rule and the cross product agree, as they must.
:::

:::qc
q: A horizontal wire runs north–south directly above a compass that is lying on the table. Current flows towards the north. Which way does the north end of the needle swing?
options: ["Towards the east", "Towards the west", "It does not move, since the field is vertical", "It dips downwards"]
answer: 1
right: Right. Thumb north, and below the wire the fingers point west. That field adds to the Earth's northward field, so the needle turns west of north.
wrong: Use the thumb rule: thumb along the current (north). Under the wire the fingers point west. The needle settles between north and west.
:::

## Loops, solenoids and electromagnets {lvl=1 id=s-solenoid label="Class 10"}

**A circular loop.** Each small piece of the loop is a short straight wire with its own circles of field. Near the wire the circles are small and tight. At the centre of the loop, the contributions from every piece point the **same way**, through the loop, and add up. So the field at the centre is straight along the axis and stronger than near a single piece of wire. Curl the fingers of the right hand along the current: the **thumb** gives the field through the middle.

**A solenoid** is many loops wound side by side like a spring. The fields of neighbouring turns add along the axis and largely cancel just outside the sides. The result:

- inside, **parallel, equally spaced lines**: a nearly uniform field;
- outside, a pattern just like a bar magnet's, with one end acting as N and the other as S.

The rule for the poles: look at one end of the coil. If the current there runs **anticlockwise**, that end is a **north** pole; if **clockwise**, a **south** pole. (Draw an N or S with its tips as arrows to remember it.)

:::figure caption="Field of a current-carrying solenoid. Inside, the lines are straight, parallel and equally spaced (uniform field). Outside, the pattern is that of a bar magnet. Seen from the right-hand end the current runs anticlockwise, so the right-hand end is the north pole."
<svg viewBox="0 0 460 225" role="img" aria-label="A coil drawn as a row of ellipses with straight parallel field lines inside and bar-magnet-like loops outside, north pole on the right">
<path class="ray" d="M 310 95 C 360 30 100 30 150 95"/>
<path class="ray" d="M 310 90 C 400 -10 60 -10 150 90"/>
<path class="ray" d="M 310 125 C 360 190 100 190 150 125"/>
<path class="ray" d="M 310 130 C 400 230 60 230 150 130"/>
<polyline class="ray" points="236,41 228,46 236,51"/><polyline class="ray" points="236,10 228,15 236,20"/>
<polyline class="ray" points="236,169 228,174 236,179"/><polyline class="ray" points="236,200 228,205 236,210"/>
<line class="ray" x1="150" y1="98" x2="310" y2="98"/><line class="ray" x1="10" y1="110" x2="450" y2="110"/><line class="ray" x1="150" y1="122" x2="310" y2="122"/>
<polyline class="ray" points="402,105 410,110 402,115"/><polyline class="ray" points="82,105 90,110 82,115"/>
<g class="ln"><ellipse cx="160" cy="110" rx="7" ry="32"/><ellipse cx="180" cy="110" rx="7" ry="32"/><ellipse cx="200" cy="110" rx="7" ry="32"/><ellipse cx="220" cy="110" rx="7" ry="32"/><ellipse cx="240" cy="110" rx="7" ry="32"/><ellipse cx="260" cy="110" rx="7" ry="32"/><ellipse cx="280" cy="110" rx="7" ry="32"/><ellipse cx="300" cy="110" rx="7" ry="32"/></g>
<text class="k" x="318" y="84">N</text><text class="k" x="134" y="84">S</text>
</svg>
:::

The uniform field inside a long solenoid is $B = \mu_0 nI$, where $n$ is the number of turns per metre; the lesson *Ampère's law* derives it.

**An electromagnet** is a solenoid wound on a **soft-iron** core. The coil's field lines up the atomic magnets in the iron, which adds a field hundreds or thousands of times larger than the coil's own [Unverified typical range; see *Magnetic materials*]. Switch the current off and soft iron loses almost all its magnetism, which is what makes electromagnets useful in relays, cranes and bells. Steel keeps its magnetism and is used for permanent magnets instead.

:::qc
q: You look at one end of a current-carrying solenoid and see the current flowing clockwise. Which pole is that end?
options: ["North", "South", "Neither: a solenoid has no poles", "It depends on the length of the solenoid"]
answer: 1
right: Right. Clockwise as seen from outside means the thumb of the right hand points into the coil there, so field lines enter that end: a south pole.
wrong: Curl your right-hand fingers clockwise as you look: the thumb points away from you, into the coil. Field lines enter that end, so it is a south pole.
:::

## The field as a vector; field lines are not lines of force {lvl=2 id=s-vector label="Class 12"}

$\vec B$ has a magnitude and a direction at each point, so it is a **vector field**. Its SI unit is the **tesla** (T); $1\ \text{T} = 1$ N A⁻¹ m⁻¹. The tesla is large. Rough sizes [Unverified, order of magnitude only]:

| Source | $B$ |
|---|---|
| Earth's surface | ≈ 50 µT |
| 10 A wire at 1 cm | 200 µT |
| fridge magnet | ≈ 5 mT |
| strong neodymium magnet at its face | ≈ 1 T |
| hospital MRI | 1.5–3 T |

**Lines of force?** For the electric field, the field line through a point is also the direction of the force on a positive test charge there. For the magnetic field, this is **not** true for a moving charge. The force on a charge $q$ moving with velocity $\vec v$ is

$$\vec F = q\,\vec v\times\vec B,$$

which is **perpendicular** to $\vec B$ (the lesson *Lorentz force and circular motion* builds on this). An electron fired along a field line feels no force at all, and one fired across the lines is pushed sideways, off them. A current-carrying wire is likewise pushed at right angles to the field (*Force on a current*).

So "magnetic lines of force" is an old name with a narrow meaning. The lines show the direction in which the north pole of a needle would be pushed, which is how we defined them. They do not show the force on moving charges or currents. This course calls them **field lines**.

:::qc
q: A proton moves straight along a magnetic field line of a uniform field. What force does the field exert on it?
options: ["A force along the line, in the direction of motion", "A force along the line, opposing the motion", "A sideways force, perpendicular to the line", "No force"]
answer: 3
right: Right. F = qv × B, and the cross product of two parallel vectors is zero. Moving along the lines, the proton feels nothing.
wrong: The magnetic force is qv × B. When v is parallel to B, the cross product is zero, so there is no force at all. Field lines are not force lines for moving charges.
:::

## Superposition and neutral points {lvl=3 id=s-superpose label="JEE"}

Magnetic fields from different sources **add as vectors** at each point, exactly like electric fields. This is the principle of superposition, and it is an experimental fact for fields of everyday size.

A **neutral point** is a point where the total field is zero. A compass placed there points nowhere in particular. Field lines cannot cross anywhere else, but at a neutral point several lines can meet, because there the direction is undefined.

**Two parallel wires.** Two long wires, currents $I_1$ and $I_2$, a distance $d$ apart.

- *Same direction:* between the wires the two fields point opposite ways. They cancel at the distance $x$ from wire 1 where $I_1/x = I_2/(d-x)$, so $x = \dfrac{I_1 d}{I_1+I_2}$. For equal currents, this is the midpoint.
- *Opposite directions:* between the wires the fields add, so there is no neutral point there. Outside, on the side of the **smaller** current, $I_1/x = I_2/(d+x)$ gives $x = \dfrac{I_1 d}{I_2 - I_1}$ beyond wire 1. For equal and opposite currents there is no neutral point at all.

**A wire in the Earth's field.** A vertical wire carries current $I$ upwards; the Earth's horizontal field $B_H$ points north. Seen from above, the wire's field circles anticlockwise. Due **east** of the wire it points north and adds to $B_H$. Due **west** it points south and cancels $B_H$ at

$$r_0 = \frac{\mu_0 I}{2\pi B_H}.$$

:::figure caption="A vertical wire (current out of the page, ⊙) in the Earth's horizontal field B_H (vertical lines, north up). West of the wire the wire's field points south and cancels B_H at the neutral point X, a distance r₀ = μ₀I/2πB_H away. East of the wire the two fields add."
<svg viewBox="0 0 400 200" role="img" aria-label="End-on wire in a uniform northward field with a neutral point marked to its west">
<line class="faint" x1="40" y1="190" x2="40" y2="10"/><line class="faint" x1="360" y1="190" x2="360" y2="10"/>
<polyline class="ln" points="34,22 40,10 46,22"/><polyline class="ln" points="354,22 360,10 366,22"/>
<text class="k" x="48" y="20">B_H (north)</text>
<circle class="ray" cx="200" cy="100" r="30"/><circle class="ray" cx="200" cy="100" r="60"/>
<polyline class="ray" points="206,65 198,70 206,75"/><polyline class="ray" points="206,35 198,40 206,45"/>
<circle class="ln" cx="200" cy="100" r="6"/><circle cx="200" cy="100" r="2" style="fill:var(--ink)"/>
<text class="k" x="134" y="96">X</text>
<line class="ln" x1="150" y1="104" x2="150" y2="134"/><polyline class="ln" points="145,126 150,134 155,126"/>
<line class="ln" x1="128" y1="134" x2="128" y2="104"/><polyline class="ln" points="123,112 128,104 133,112"/>
<line class="ln" x1="268" y1="125" x2="268" y2="75"/><polyline class="ln" points="263,83 268,75 273,83"/>
<text x="62" y="155">wire's field cancels B_H</text><text x="246" y="145">fields add</text>
<line class="faint" x1="140" y1="170" x2="200" y2="170"/><text x="155" y="185">r₀</text>
</svg>
:::

**A compass under a wire.** If the wire is horizontal and runs north–south above a compass, its field at the compass is horizontal and east–west, at right angles to $B_H$. The needle settles along the resultant, at an angle $\theta$ from north with

$$\tan\theta = \frac{B_{\text{wire}}}{B_H}.$$

This is the principle of the old tangent galvanometer (see *Current loop and galvanometer*).

**A bar magnet in the Earth's field.** For a short magnet of magnetic moment $m$, the field at distance $r$ is $\dfrac{\mu_0}{4\pi}\dfrac{2m}{r^3}$ on its axis and $\dfrac{\mu_0}{4\pi}\dfrac{m}{r^3}$ on its perpendicular bisector, pointing opposite to the moment there (derived in *Magnetic dipole and bar magnet*). The moment points from the magnet's S to its N.

- Magnet's **N pole pointing north:** on the bisector (east and west of the magnet) the magnet's field points south and cancels $B_H$. Neutral points lie **east and west**.
- Magnet's **N pole pointing south:** on the axis the magnet's field points along the moment, south, and cancels $B_H$. Neutral points lie **north and south**, at a distance larger by a factor $2^{1/3}$.

:::worked title="Where is the neutral point of a wire?"
A vertical wire carries 5.0 A upwards; take $B_H = 30\ \mu$T (given).

$$r_0 = \frac{\mu_0 I}{2\pi B_H} = \frac{2\times10^{-7}\times5.0}{30\times10^{-6}} = 3.3\times10^{-2}\ \text{m}.$$

The neutral point is 3.3 cm due **west** of the wire. At 3.3 cm due east the total field is $2B_H = 60\ \mu$T, pointing north.
:::

:::qc
q: Two long parallel wires 12 cm apart carry 3 A and 9 A in the same direction. Where is the field zero?
options: ["Midway between them", "3 cm from the 3 A wire, between the wires", "6 cm from the 3 A wire, outside", "Nowhere"]
answer: 1
right: Right. Between the wires the fields oppose. 3/x = 9/(12 − x) gives x = 3 cm from the weaker wire, closer to it, as it should be.
wrong: For currents in the same direction the fields oppose between the wires. Set 3/x = 9/(12 − x): x = 3 cm from the 3 A wire. The neutral point is nearer the weaker current.
:::

## The Earth's field in outline {lvl=3 id=s-earth label="JEE"}

Near its surface, the Earth's field looks roughly like that of a huge bar magnet at the centre, tilted at about 10° to the spin axis [Unverified; the tilt drifts slowly]. The magnet's **south** pole lies under the northern hemisphere and its **north** pole under the southern one, so outside the Earth the lines run from south to north. The field is thought to come from currents in the molten iron outer core, not from a buried permanent magnet; the core is far too hot to hold permanent magnetism.

:::figure caption="The Earth's field as a tilted dipole. The equivalent bar magnet has its N pole towards the geographic south, so outside the Earth the lines run from the southern hemisphere to the northern one, and a compass at the equator points north. Near the poles the lines are steep, so a freely pivoted needle dips steeply there."
<svg viewBox="0 0 400 240" role="img" aria-label="Earth as a circle with a tilted bar magnet inside, south pole of the magnet towards geographic north, field lines looping from the southern to the northern hemisphere">
<line class="faint" x1="200" y1="35" x2="200" y2="205"/>
<text class="k" x="168" y="28">geographic N</text><text class="k" x="168" y="222">geographic S</text>
<path class="ray" d="M 215 170 C 330 240 330 0 215 70"/><path class="ray" d="M 185 170 C 70 240 70 0 185 70"/>
<path class="ray" d="M 210 165 C 270 200 270 40 210 75"/><path class="ray" d="M 190 165 C 130 200 130 40 190 75"/>
<polyline class="ray" points="296,126 301,118 306,126"/><polyline class="ray" points="94,126 99,118 104,126"/>
<polyline class="ray" points="250,126 255,118 260,126"/><polyline class="ray" points="140,126 145,118 150,126"/>
<circle class="m2" cx="200" cy="120" r="60" style="stroke:var(--ink);stroke-width:1.4;fill-opacity:.6"/>
<g transform="rotate(11 200 120)"><rect x="192" y="90" width="16" height="60" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.2"/><text class="k" x="196" y="103">S</text><text class="k" x="196" y="146">N</text></g>
</svg>
:::

Three numbers describe the field at a place:

- **Declination** $D$: the angle between magnetic north (where a compass points) and true north.
- **Dip** or **inclination** $I$: the angle the total field makes with the horizontal. It is 0 near the magnetic equator and 90° at the magnetic poles.
- **Horizontal component** $B_H = B\cos I$. The vertical component is $B_V = B\sin I$, so $\tan I = B_V/B_H$.

An ordinary compass pivots only horizontally, so it responds to $B_H$ alone. In India $B_H$ is roughly 30–40 µT [Unverified]. Every compass experiment in this lesson is really a contest between $B_H$ and the field you are studying.

:::qc
q: At a certain place the vertical component of the Earth's field equals the horizontal component. What is the angle of dip there?
options: ["0°", "30°", "45°", "90°"]
answer: 2
right: Right. tan I = B_V/B_H = 1, so I = 45°.
wrong: The dip satisfies tan I = B_V/B_H. With the two equal, tan I = 1 and I = 45°.
:::

## No magnetic monopoles: Gauss's law for magnetism {lvl=4 id=s-monopole label="Olympiad"}

For the electric field, the flux out of a closed surface counts the charge inside. For the magnetic field, no isolated "magnetic charge" (monopole) has ever been found, despite careful searches. Every line that enters a closed surface leaves it again, so

$$\oint \vec B\cdot d\vec S = 0, \qquad \text{or, point by point,}\qquad \nabla\cdot\vec B = 0.$$

This is one of Maxwell's four equations. Its consequences in this lesson:

- **Flux continuity.** The flux through the inside of a bar magnet equals the flux returning outside. That is why the inside lines must run S → N.
- **Lines never end.** A field line can only stop where $\nabla\cdot\vec B \ne 0$, and that never happens.

A subtle point: "lines never end" does **not** mean every line closes on itself. In a general field a line can wind round forever without returning to its starting point, filling a surface (a straight wire on the axis of a current loop is a standard example: the lines spiral round a family of nested tori). Closed loops are what you get in symmetric fields such as those drawn above. The lesson *Magnetic dipole and bar magnet* takes up the full treatment.

:::qc
q: A closed surface encloses the north pole of a bar magnet but not its south pole. What is the net magnetic flux out of the surface?
options: ["Positive, equal to the pole strength times μ₀", "Negative", "Zero", "It depends on the shape of the surface"]
answer: 2
right: Right. The surface necessarily cuts through the magnet. The flux leaving through the outside is exactly returned by the flux entering through the cut inside the magnet. There are no monopoles to enclose.
wrong: The net flux of B through any closed surface is zero. A surface round one pole cuts the magnet, and the lines running inside the magnet from S to N carry the flux back in.
:::

## B is an axial vector {lvl=4 id=s-axial label="Olympiad"}

Look at a current loop in a mirror. Put the loop flat in the plane $z = 0$, current anticlockwise seen from above, so $\vec B$ at the centre points up ($+z$). Now reflect the whole set-up in the vertical mirror $x = 0$.

- An ordinary arrow pointing up lies parallel to that mirror, so its image also points up.
- But the reflected current runs **clockwise** seen from above (a mirror reverses every sense of rotation). By the right-hand rule, the mirrored loop's field points **down**.

So $\vec B$ does not reflect like an arrow. Its components parallel to the mirror flip, and the component perpendicular to it stays. A quantity like this is an **axial vector** (or pseudovector), like angular velocity. It arises because $\vec B$ is built from a cross product of two ordinary (polar) vectors: the field of a current element is along $I\,d\vec l\times\hat r$.

The right-hand rule is therefore a **convention**. If everyone used the left hand, every $\vec B$ would reverse. But no measurable force would change, because the force $q\vec v\times\vec B$ uses the rule a second time and the two reversals cancel. Physics needs only consistency, not a particular hand. (The weak nuclear force does distinguish left from right, but that is outside electromagnetism.)

:::qc
q: Under inversion through the origin (every position vector r → −r), a polar vector reverses. What does B do?
options: ["Reverses", "Stays the same", "Becomes zero", "Rotates by 90°"]
answer: 1
right: Right. Both I dl and r reverse, so their cross product does not. B is unchanged, which is the defining property of an axial vector.
wrong: B comes from I dl × r. Under inversion both factors reverse, so the cross product stays the same. That is what makes B an axial vector.
:::

## Drawing field lines exactly in two dimensions {lvl=4 id=s-stream label="Olympiad"}

When all the currents are long straight wires parallel to the $z$-axis, the field lies in the $xy$-plane and does not depend on $z$. Then $\nabla\cdot\vec B = \partial_x B_x + \partial_y B_y = 0$ lets us write

$$B_x = \frac{\partial\psi}{\partial y},\qquad B_y = -\frac{\partial\psi}{\partial x}$$

for a single function $\psi(x, y)$. Since $\vec B\cdot\nabla\psi = B_x\partial_x\psi + B_y\partial_y\psi = 0$, $\psi$ is **constant along every field line**. The field lines are simply the contour lines of $\psi$. Better still, the flux (per unit length in $z$) passing between two contours is the difference of their $\psi$ values, so contours drawn at **equal steps** of $\psi$ have a density exactly proportional to $B$. This makes "crowding shows strength" precise.

The building blocks, which you can check by differentiating:

| Source | $\psi$ |
|---|---|
| wire along $z$, current $I$ (out of page) | $-\dfrac{\mu_0 I}{2\pi}\ln r$ |
| uniform field $B_0$ along $x$ | $B_0\,y$ |

Superposition of fields is superposition of $\psi$. For one wire, equal steps in $\ln r$ mean radii in a fixed ratio, which is how the end-on figure above was drawn.

:::worked title="The separatrix of a wire in a uniform field"
A wire with current $I$ out of the page sits at the origin in a uniform field $B_0\hat x$. The wire's field points along $-\hat x$ at points on the $+y$ axis, so the neutral point is at $(0, a)$ with $a = \mu_0 I/(2\pi B_0)$. Measure lengths in units of $a$ and $\psi$ in units of $B_0 a$:

$$\psi = y - \ln r.$$

At the neutral point $\psi = 1$. Near the wire $\psi\to+\infty$; lines with $\psi > 1$ are closed loops round the wire, and lines with $\psi < 1$ are open lines bent by the wire. The boundary $y - \ln r = 1$ is the **separatrix**; it crosses itself at the neutral point.

- On the $x$-axis ($y = 0$): $\ln|x| = -1$, so the closed region reaches $|x| = 1/e \approx 0.37a$ to each side.
- Below the wire ($x = 0$, $y = -t$): $t + \ln t = -1$, so $t \approx 0.28a$ (solve numerically).

So the closed loops fill a lopsided teardrop that reaches a distance $a$ on one side of the wire and only about $0.28a$ on the other.
:::

:::qc
q: In a two-dimensional field described by ψ, contours are drawn at ψ = 0, 1, 2, 3, ... (in some unit). In one region adjacent contours are 2 mm apart, in another 6 mm apart. Compare the field strengths.
options: ["Equal", "The first is 3 times the second", "The second is 3 times the first", "The first is 9 times the second"]
answer: 1
right: Right. The same flux passes between each pair of adjacent contours, so B is inversely proportional to their spacing: 6/2 = 3.
wrong: Equal steps of ψ carry equal flux between adjacent contours, so B ∝ 1/spacing. The 2 mm region has 3 times the field of the 6 mm region.
:::

## Why moving charges make magnetism {lvl=4 id=s-relativity label="Olympiad"}

Here is the deepest answer to the question this branch opened with. Take two long, parallel beams of identical charges, each with line density $\lambda$ (in the lab), moving side by side with speed $v$, a distance $r$ apart. A charge $q$ in one beam feels:

- an **electric** repulsion from the other beam, $F_E = \dfrac{q\lambda}{2\pi\varepsilon_0 r}$;
- a **magnetic** attraction, because the other beam is a current $\lambda v$ making $B = \dfrac{\mu_0\lambda v}{2\pi r}$, and the force is $qvB = \dfrac{\mu_0 q\lambda v^2}{2\pi r}$.

Using $\mu_0\varepsilon_0 = 1/c^2$, the ratio is

$$\frac{F_B}{F_E} = \frac{v^2}{c^2},\qquad F_{\text{net}} = \left(1 - \frac{v^2}{c^2}\right)F_E .$$

Now ride along with the beams. In that frame the charges are at rest, so there is **no** magnetic force, only an electric one. Special relativity says the two descriptions must agree, and they do: the line density at rest is smaller by $\gamma = 1/\sqrt{1 - v^2/c^2}$, and a sideways force in the lab is smaller by another factor $\gamma$ than in the rest frame. The product is exactly $1 - v^2/c^2$.

So the magnetic force is the correction that keeps electric forces consistent between moving frames. For slow charges it is tiny compared with the electric force, a factor $v^2/c^2$. It dominates everyday life only because a wire is electrically neutral: the huge electric forces of its electrons and ions cancel, leaving the magnetic part. A charge moving beside a neutral current-carrying wire sees, in its own frame, the ion and electron densities length-contracted by different amounts; the wire looks slightly charged, and the "magnetic" force on the charge appears there as an electric one. (Purcell and Morin, Ch. 5, works this out in full.)

The general rule for the field of a slow point charge follows the same idea: $\vec B = \dfrac{1}{c^2}\,\vec v\times\vec E$. Fields of moving charges and the Biot–Savart law are built from this in *Biot–Savart law*.

:::qc
q: Two parallel electron beams move side by side at 0.8c in the lab. Compared with the electrostatic repulsion alone, the net force between them is
options: ["the same", "0.8 times as large", "0.36 times as large", "zero"]
answer: 2
right: Right. The magnetic attraction is v²/c² = 0.64 of the electric repulsion, so the net is 1 − 0.64 = 0.36 of it.
wrong: The magnetic attraction is a fraction v²/c² = 0.64 of the electric repulsion. The net force is (1 − 0.64) = 0.36 times the electric force.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Moving charges make magnetic fields, and magnetic fields push only on moving charges. A magnet is full of atomic currents. {lvl=1}
2. The field's direction at a point is where a compass needle's north pole points. The needle's N end is the north-seeking end, so the Earth has a magnetic south pole near its geographic north. {lvl=1}
3. Field lines: tangent gives the direction, crowding gives the strength, they never cross, and they form closed curves (S → N inside a magnet). {lvl=1}
4. Straight wire: concentric circles, sense by the right-hand thumb rule, $B = \mu_0 I/2\pi r$. Loop and solenoid: fingers along the current, thumb gives the field inside; anticlockwise end = N. Solenoid inside: uniform field. {lvl=1}
5. $\vec B$ is a vector in tesla. Field lines are not lines of force on moving charges: $\vec F = q\vec v\times\vec B$ is perpendicular to $\vec B$. {lvl=2}
6. Fields add as vectors. Neutral points: same-direction wires at $x = I_1d/(I_1+I_2)$; a wire in $B_H$ at $\mu_0I/2\pi B_H$; a short magnet with N to the north has neutral points east–west, with N to the south, north–south. {lvl=3}
7. Earth: tilted dipole, declination $D$, dip $I$, $B_H = B\cos I$, $\tan I = B_V/B_H$. A compass reads $B_H$ only. {lvl=3}
8. $\oint\vec B\cdot d\vec S = 0$ (no monopoles); $\vec B$ is axial (mirror flips its parallel components); in 2D the lines are contours of $\psi$; $F_B/F_E = v^2/c^2$ for parallel beams. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Outside a magnet lines go N → S; inside they go S → N. Drawing them N → S inside as well breaks flux continuity. {lvl=1}
- The thumb is the **current** for a straight wire, but the **field** for a loop or solenoid. Mixing the two is the most common error. {lvl=1}
- "Directly above" and "directly below" a wire have opposite field directions. Fix east, north and up first, then apply the rule. {lvl=1}
- A real compass also feels $B_H$. It points along the **resultant** field, at $\tan\theta = B_{\text{wire}}/B_H$ from north, not along the wire's field alone. {lvl=2}
- Field lines are not paths of moving charges and not directions of force on them. A charge moving along a line feels no force. {lvl=2}
- Neutral points of two wires: same directions, between them nearer the weaker current; opposite directions, outside them on the weaker current's side; equal and opposite, none. {lvl=3}
- For a bar magnet in the Earth's field, the axial field is twice the equatorial at the same distance, so the axial neutral distance is $2^{1/3}$ times the equatorial one, not 2 times. {lvl=3}
- "Closed lines" is guaranteed only for symmetric fields; in general lines need never end, but they need not close. {lvl=4}
:::
