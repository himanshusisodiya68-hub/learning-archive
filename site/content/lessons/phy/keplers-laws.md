---
title: Kepler's laws
summary: Three patterns that a Danish nobleman's twenty years of star-gazing hid in the sky, and why every one of them follows from gravity.
ncert: ["Class 11 Physics · Ch 7 Gravitation (Kepler's laws: the law of orbits, the law of areas, the law of periods; section numbers not checked against the 2026-27 reprint)"]
up_to: Olympiad
builds_on: [Universal law of gravitation, Variation of g, Angular momentum, Circular motion]
notes_prompt: Explain to a friend why a planet moves faster when it is closer to the Sun, and why Saturn takes 29 years to go round while Earth takes one.
margin:
  - kind: history
    title: History
    text: "Tycho Brahe measured planet positions with the naked eye, to about one arcminute, for some twenty years. Kepler inherited the tables and found that a circle for Mars was off by about 8 arcminutes, a sliver about a quarter of the Moon's width. He trusted the data over the circle and found the ellipse [Unverified details, from memory]."
  - kind: tip
    title: Exam favourite
    text: "For a ratio problem, use $T^2 \\propto a^3$ with the Sun as the common centre. Convert nothing: time in years and distance in AU gives $T^2 = a^3$ exactly."
  - kind: olympiad
    title: Olympiad link
    text: "A planet's period depends only on the long axis of its ellipse, not on how thin the ellipse is. So a body dropped from rest at distance r falls straight into the Sun in the half-period of an orbit of long axis r. That gives the time to fall into the Sun as about 65 days from Earth's orbit."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 13 Gravitation, §13-6 Planets and Satellites: Kepler's Laws [Unverified]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 7 The Theory of Gravitation, the section on Kepler's laws and Newton's reasoning [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 11 Gravitation, Kepler's laws [Unverified]" }
cards:
  - { front: "Kepler's first law?", back: "Each planet moves in an ellipse with the Sun at one focus (the other focus is empty)." }
  - { front: "Kepler's second law?", back: "The line from the Sun to a planet sweeps out equal areas in equal times. It is conservation of angular momentum: $dA/dt = L/2m$." }
  - { front: "Kepler's third law?", back: "$T^2 \\propto a^3$: the square of the period is proportional to the cube of the semi-major axis. Exactly, $T^2 = 4\\pi^2a^3/GM$." }
  - { front: "Speed ratio at the nearest and farthest points?", back: "$v_{near}/v_{far} = r_{far}/r_{near}$ (from $r_1v_1 = r_2v_2$), which is $(1+e)/(1-e)$." }
  - { front: "How do you weigh the Sun, or any planet?", back: "From a body orbiting it: $M = 4\\pi^2a^3/(GT^2)$. The orbiting body's own mass cancels." }
  - { front: "Which quantities are constant along a comet's orbit?", back: "Angular momentum and total energy. Speed, angular speed, kinetic energy and potential energy all change." }
core:
  idea: 'Planets move on ellipses with the Sun at one focus; they sweep equal areas in equal times, so they hurry near the Sun and dawdle far away; and the square of the year is proportional to the cube of the orbit size. All three follow from an inward pull that falls as one over distance squared.'
  formulas:
    - tex: 'r_p v_p = r_a v_a, \qquad \dfrac{dA}{dt} = \dfrac{L}{2m} = \text{constant}'
      label: 'Second law: equal areas, from angular momentum'
    - tex: 'T^2 = \dfrac{4\pi^2}{GM}\,a^3'
      label: 'Third law: periods and orbit sizes'
    - tex: 'r_p = a(1-e), \qquad r_a = a(1+e)'
      label: 'Ellipse geometry: nearest and farthest distances'
  conditions:
    - 'One heavy body at rest (the Sun) and one light body orbiting it; for comparable masses use the total mass $M_1 + M_2$ and the separation'
    - 'The pull is purely inward and varies as $1/r^2$; other planets and drag are ignored'
    - 'Orbit is bound (an ellipse or circle); open paths are parabolas or hyperbolas'
    - '$a$ is the semi-major axis, half the long axis, which is exactly $(r_p + r_a)/2$'
  sign: 'Use $a$, the semi-major axis, in the third law, not the distance at one instant. For a circle $a$ is just the radius.'
outcomes:
  - 'State Kepler''s three laws and say what each one means in plain words'
  - 'Explain why a planet speeds up near the Sun using angular momentum'
  - 'Compare two orbits with $T^2 \propto a^3$ and find the period or the distance'
  - 'Weigh the Sun or a planet from the orbit of one body round it'
  - 'Find the speeds at the nearest and farthest points of an elliptical orbit'
opener:
  story: |
    Before telescopes, one man made it his life's work to write down where the planets are. Tycho Brahe, a Danish nobleman with a false nose, spent some twenty years noting positions night after night, more carefully than anyone before him. When he died, his young assistant Johannes Kepler inherited the books.

    Kepler tried to fit them with circles, the shape every astronomer for two thousand years had assumed was perfect for heaven. The circle for Mars missed by a tiny amount, about a quarter of the width of the full Moon. Most people would shrug and blame the data. Kepler believed Tycho's data over the circle, and the circle had to go.

    What he found were three clean rules. Here is one to try on yourself before we start: **Saturn's year is 29.5 Earth years. How many times farther from the Sun is it than we are?**
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="An ellipse with the Sun at one focus; two shaded wedges of equal area, a wide one near the Sun and a thin one far from it"><ellipse cx="160" cy="120" rx="120" ry="90" style="fill:none;stroke:var(--c);stroke-width:2.5"/><path d="M239.4 120 L267.9 80.8 L267.9 159.2Z" style="fill:color-mix(in srgb,var(--chem) 35%,var(--surface));stroke:var(--chem);stroke-width:1.5"/><path d="M239.4 120 L40.6 111.2 L40.6 128.8Z" style="fill:color-mix(in srgb,var(--chem) 35%,var(--surface));stroke:var(--chem);stroke-width:1.5"/><circle cx="239.4" cy="120" r="9" style="fill:var(--ink)"/><circle cx="80.6" cy="120" r="3" style="fill:var(--muted)"/><circle cx="280" cy="120" r="5" style="fill:var(--c)"/><circle cx="40" cy="120" r="5" style="fill:var(--c)"/><text x="226" y="146" style="font-size:12px;fill:var(--ink)">Sun</text><text x="212" y="36" style="font-size:12px;fill:var(--muted)">same area, same time</text><text x="20" y="214" style="font-size:12px;fill:var(--muted)">far away: slow</text><text x="196" y="214" style="font-size:12px;fill:var(--muted)">near the Sun: fast</text><text x="52" y="100" style="font-size:12px;fill:var(--muted)">empty focus</text></svg>'
life:
  - 'The seasons are not caused by the Earth being closer to the Sun: we are nearest in early January, in the northern winter. Kepler''s second law then makes the northern winter slightly shorter than the summer [Unverified: by a few days].'
  - 'Halley''s Comet returns every 76 years or so: its long thin ellipse brings it within the orbit of Venus and then out beyond Neptune, moving about sixty times faster at the near end.'
  - 'Every satellite launched by ISRO or anyone else obeys these laws: a satellite 36 000 km up takes exactly one day to go round, which is why some TV dishes can stay pointed at one spot in the sky.'
  - 'Astronomers weigh stars, black holes and whole galaxies by timing something that orbits them: the third law turns a period and a size into a mass.'
  - 'Any planet found around another star shows up as a wobble in the star''s light with a regular period; the third law then gives its distance from the star.'
models:
  - name: 'Patterns first, reasons later'
    text: 'Kepler had no idea why the rules held; Newton explained them seventy years later. Spotting a regularity in data is already valuable. Predictions work long before explanations do, in markets, in medicine, in cricket stats.'
  - name: 'Trust the data over the beautiful idea'
    text: 'A circle was elegant, but eight arcminutes of error was larger than the error of the instrument. When a lovely theory disagrees with careful measurement by more than the noise, the theory is the one to change.'
  - name: 'The slow lane and the fast lane'
    text: 'Near the centre the track is short and you must go fast to keep pace; far out you can dawdle. Same idea as outer lanes on a running track, or a skater pulling in her arms. When something must stay constant, closer means faster.'
links:
  - leaf: 'phy/angular-momentum'
    name: 'Angular momentum'
    same: 'The law of areas is exactly conservation of angular momentum about the Sun: the Sun''s pull points straight at it, so it has no torque about it.'
    differs: 'The skater changes her own moment of inertia; the planet changes its distance, and both speed up as they come closer to the axis.'
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'Kepler''s third law is what you get from $GMm/r^2$ plus circular motion; run backwards, it tells you the force must go as $1/r^2$.'
    differs: 'Kepler described how planets move; Newton explained why, with one law that also covers the apple and the Moon.'
next:
  q: 'A satellite circles the Earth 400 km up and its crew float. How fast must it move to stay up, how much energy does it take to get there, and how fast would you have to throw something to leave the Earth for good?'
  leaf: 'phy/orbits-and-escape-speed'
  name: 'Orbits and escape speed'
symbols:
  - s: 'a'
    means: 'semi-major axis, half the long axis of the ellipse (m, or AU); the radius for a circle'
  - s: 'e'
    means: 'eccentricity: 0 for a circle, close to 1 for a long thin ellipse (no unit)'
  - s: 'T'
    means: 'period, the time for one full orbit (s, or years)'
  - s: 'r_p'
    means: 'distance at the nearest point to the Sun, perihelion (m)'
  - s: 'r_a'
    means: 'distance at the farthest point, aphelion (m)'
  - s: 'v_p'
    means: 'speed at perihelion (m/s)'
  - s: 'v_a'
    means: 'speed at aphelion (m/s)'
  - s: 'G'
    means: 'gravitational constant, 6.67 × 10^-11 N m^2/kg^2'
  - s: 'M'
    means: 'mass of the central body, such as the Sun (kg)'
  - s: 'm'
    means: 'mass of the orbiting body (kg)'
  - s: 'L'
    means: 'angular momentum of the planet about the Sun (kg m^2/s)'
  - s: 'dA/dt'
    means: 'area swept out per second by the line from the Sun to the planet (m^2/s)'
---

:::hook
q: Saturn takes 29.5 years to go round the Sun, against Earth's one. How much farther from the Sun is Saturn?
options: ["About 29.5 times", "About 9.5 times", "About 5 times"]
answer: 1
right: Right. Kepler's third law says the year squared goes as the distance cubed. A year 29.5 times longer means a distance $29.5^{2/3} \approx 9.5$ times larger. Saturn is about 9.5 times as far from the Sun as we are.
wrong: A year 29.5 times longer does not mean 29.5 times farther, because far planets also move more slowly. Kepler found the pattern: the year squared goes as the distance cubed. Which power of 29.5 is the distance?
:::

## Three patterns in the sky {lvl=1 id=s-three label="Class 9"}

After years of fitting the Danish tables, Kepler stated three rules.

**First: orbits are ellipses.** An ellipse is a squashed circle, the shape you draw by pinning the ends of a loop of string to two thumbtacks and pulling the loop tight with a pencil. The two tacks are the **foci**. The Sun sits at **one** focus; the other is empty. The long half-width is the **semi-major axis**, written $a$. A circle is an ellipse with both foci in the same place, and the Earth's path is nearly one: its nearest and farthest distances differ by only about 3%. Halley's Comet is very different.

**Second: equal areas in equal times.** Imagine a line from the Sun to a planet. As the planet moves, the line sweeps a wedge. Whatever part of the orbit you pick, the wedge swept in a month has the same area.

**Third: the year squared goes as the distance cubed.** For planets round the same Sun, $T^2 \propto a^3$.

:::figure caption="The Sun is at one focus. The wedge near the Sun is short and fat and takes the same time as the wedge far away, which is long and thin. The planet therefore covers more arc near the Sun, so it is faster there."
<svg viewBox="0 0 320 200" role="img" aria-label="An ellipse with the Sun at the right focus, perihelion on the right and aphelion on the left">
<ellipse cx="160" cy="100" rx="120" ry="75" style="fill:none;stroke:var(--c);stroke-width:2.5"/>
<path d="M40 100 L280 100" style="fill:none;stroke:var(--muted);stroke-width:1;stroke-dasharray:4 4"/>
<circle cx="160" cy="100" r="3" style="fill:var(--muted)"/>
<circle cx="94" cy="100" r="3" style="fill:var(--muted)"/>
<circle cx="226" cy="100" r="8" style="fill:var(--ink)"/>
<circle cx="280" cy="100" r="5" style="fill:var(--c)"/><circle cx="40" cy="100" r="5" style="fill:var(--c)"/>
<text x="212" y="124" style="font-size:12px;fill:var(--ink)">Sun</text>
<text x="244" y="86" style="font-size:12px;fill:var(--muted)">perihelion</text>
<text x="20" y="86" style="font-size:12px;fill:var(--muted)">aphelion</text>
<text x="150" y="184" style="font-size:12px;fill:var(--muted)">a = half of the long axis</text>
<path d="M40 176 L280 176" style="fill:none;stroke:var(--muted);stroke-width:1"/>
<path d="M40 171 L40 181 M280 171 L280 181" style="fill:none;stroke:var(--muted);stroke-width:1"/>
</svg>
:::

Two words you will need. The nearest point to the Sun is the **perihelion** and the farthest is the **aphelion**. Because the long axis runs from one to the other, $2a = r_p + r_a$, and if we write $e$ ("eccentricity", 0 for a circle, near 1 for a long thin ellipse) for how off-centre the Sun is, then $r_p = a(1 - e)$ and $r_a = a(1 + e)$. Read them as: "the Sun sits a fraction $e$ of $a$ off the centre of the ellipse, so the nearest distance is $a$ minus that and the farthest is $a$ plus that." Halley's Comet is about 0.59 AU from the Sun at its nearest and about 35 AU at its farthest [Unverified numbers from memory], so $a \approx 17.8$ AU and $e = (35 - 0.59)/(35 + 0.59) \approx 0.97$. (One **AU**, astronomical unit, is the Earth's average distance from the Sun.)

:::qc lvl=1
q: Where in its orbit is a planet moving fastest?
options: ["At aphelion, far from the Sun", "At perihelion, nearest the Sun", "Its speed is always the same"]
answer: 1
right: Right. The planet sweeps equal areas in equal times, so near the Sun, where the line to the Sun is short, it must cover a longer arc each second to sweep the same area.
wrong: The wedge swept in a month has a fixed area. A wedge with a short side must have a long arc to have the same area as one with a long side. Where is the side short?
:::

## Why fast near the Sun {lvl=2 id=s-areas label="Class 11"}

The area law is not a coincidence. It is conservation of angular momentum, from the last lesson. The Sun's pull on a planet points straight at the Sun, so it has no lever arm and no torque about the Sun. The planet's angular momentum about the Sun, $L = mvd$ (mass times speed times the perpendicular distance from the Sun to its line of motion), cannot change. In a short time $dt$ the planet moves $v\,dt$ along its path, and the thin triangle it sweeps has area $\tfrac12 (v\,dt)\,d$, so

$$\frac{dA}{dt} = \frac12 vd = \frac{L}{2m} = \text{constant}.$$

Read it as: "area swept per second is half the angular momentum per kilogram, and that does not change." At the nearest and the farthest points the planet moves at right angles to the line to the Sun, so $d$ is just the distance $r$ and

$$r_p v_p = r_a v_a, \qquad \frac{v_p}{v_a} = \frac{r_a}{r_p}.$$

Read it as: "twice as far, half the speed." The Earth is at 147.1 million km in early January and at 152.1 million km in early July [Unverified from memory], so its speed is only 3.4% higher in January. For Halley it is much more dramatic: roughly 59 times faster at the near end than the far end, since $35/0.59 \approx 59$. NCERT Example 7.1 asks the same question and adds a twist: will the planet take equal times to go round the two halves of the orbit, split by the long axis? No. The half containing the aphelion is traversed more slowly, so it takes longer.

A comet's speed, angular speed, kinetic energy and potential energy all change round its orbit, but its **angular momentum and total energy do not** (NCERT Exercise 7.8).

:::qc lvl=2
q: A comet is 0.5 AU from the Sun at perihelion, moving at 60 km/s. What is its speed at 5 AU?
options: ["6 km/s", "30 km/s", "600 km/s"]
answer: 0
right: Right. $r_pv_p = r_av_a$ gives $v_a = 0.5 \times 60/5 = 6$ km/s. Ten times the distance, a tenth of the speed.
wrong: Use $r_pv_p = r_av_a$. The distance has gone up by a factor of 10. What must happen to the speed?
:::

## The year and the size of the orbit {lvl=2 id=s-period label="Class 11"}

Take the simplest case, a circular orbit of radius $r$. The Sun's pull $GMm/r^2$ is the only force, and it supplies the centripetal force $m\omega^2 r$. With $\omega = 2\pi/T$ for one turn in time $T$:

$$\frac{GMm}{r^2} = m\,\frac{4\pi^2}{T^2}\,r\ \Longrightarrow\ T^2 = \frac{4\pi^2}{GM}\,r^3.$$

Read it as: "the square of the year equals a fixed number, set by the Sun's mass, times the cube of the orbit's radius." The mass $m$ of the planet has cancelled, so a heavy planet and a light one at the same distance have the same year. For an ellipse, the radius $r$ is replaced by the semi-major axis $a$ [the exact proof for ellipses is in the Olympiad section].

With years and AU, the number $4\pi^2/GM$ works out to 1, so $T^2 = a^3$. Saturn: $a = 29.5^{2/3} = 9.55$ AU, as the hook says (NCERT Exercise 7.14 gives $9.55 \times 1.50 \times 10^8$ km $= 1.43 \times 10^9$ km). A planet with a year half as long as the Earth's is at $(1/2)^{2/3} = 0.63$ of Earth's distance (NCERT Exercise 7.3). Mars is at 1.52 AU, so its year is $1.52^{1.5} = 1.87$ Earth years, or about 684 days (NCERT Example 7.5(ii)).

Notice what Newton did with this. If $T^2 \propto r^3$, then the acceleration towards the Sun is $a_c = 4\pi^2 r/T^2 \propto r/r^3 = 1/r^2$. Kepler's third law, read backwards, says that the pull must fall off as the inverse square of the distance. That was Newton's route to the law of gravitation.

:::qc lvl=2
q: One planet orbits at 9 times the distance of another. How does its year compare?
options: ["3 times as long", "27 times as long", "81 times as long"]
answer: 1
right: Right. $T \propto a^{3/2}$, so $9^{3/2} = 27$. Think of it as: 9 cubed is 729, whose square root is 27.
wrong: The year goes as the distance to the power $3/2$. What is $9^{3/2}$, that is $9 \times \sqrt9$?
:::

## Weighing worlds {lvl=2 id=s-weigh label="Class 11"}

Solve the same law for the mass of the centre:

$$M = \frac{4\pi^2 a^3}{G\,T^2}.$$

Read it as: "time anything round it, measure its orbit, and out comes the mass of what is in the middle." Only the orbiting body's period and size count, not its own mass.

:::worked title="Weighing the Sun, Jupiter and the Earth"
**Sun** (NCERT Exercise 7.13): the Earth has $a = 1.496 \times 10^{11}$ m and $T = 3.156 \times 10^7$ s, giving $M = 4\pi^2 (1.496\times10^{11})^3/[6.67\times10^{-11}(3.156\times10^{7})^2] = 2.0 \times 10^{30}$ kg.

**Jupiter** from its moon Io (NCERT Exercise 7.4): $T = 1.769$ days $= 1.53 \times 10^5$ s, $a = 4.22 \times 10^8$ m, so $M_J = 1.9 \times 10^{27}$ kg, about one thousandth of the Sun's mass.

**Earth** from the Moon: $a = 3.84 \times 10^8$ m, $T = 27.3$ days $= 2.36 \times 10^6$ s, so $M_E = 6.0 \times 10^{24}$ kg. The same Moon data written as $T^2 = ka^3$ gives $k = 10^{-13}$ s²/m³ for the Earth (NCERT Example 7.7), against $3\times10^{-19}$ for the Sun: the constant is different for each centre, since it contains the mass.
:::

## The speed anywhere on the ellipse {lvl=3 id=s-vis label="JEE"}

We have the speeds at the two ends. For any point we use energy. The total energy of a body of mass $m$ in an elliptical orbit round a mass $M$ depends only on $a$, as the next lesson shows for circles and the general fact is a standard result:

$$E = \tfrac12 mv^2 - \frac{GMm}{r} = -\frac{GMm}{2a}.$$

Solve for $v$ to get the speed at distance $r$:

$$v^2 = GM\left(\frac2r - \frac1a\right).$$

Read it as: "the speed depends only on how far you are now and on the long axis." Check with a circle: $r = a$ gives $v^2 = GM/a$, as before. At perihelion $r = a(1-e)$, so

$$v_p^2 = \frac{GM}{a}\cdot\frac{1+e}{1-e},\qquad v_a^2 = \frac{GM}{a}\cdot\frac{1-e}{1+e},$$

and their ratio $v_p/v_a = (1+e)/(1-e) = r_a/r_p$, matching the area law. For a planet with $a = 2.0$ AU and $e = 0.6$, a circular orbit at 1 AU would have speed $v_E = 29.8$ km/s (the Earth's). Then $v_p = v_E\sqrt{(1/2.0)(1.6/0.4)} = v_E\sqrt2 = 42$ km/s.

:::qc lvl=3
q: A planet moves on an ellipse. Its energy is the same as that of a circular orbit of what radius?
options: ["The perihelion distance", "The semi-major axis", "The aphelion distance"]
answer: 1
right: Right. $E = -GMm/2a$ depends only on $a$. That is why the period, which is fixed by the energy, depends only on $a$ too.
wrong: In $E = -GMm/2a$, which distance appears? A circle has $a = r$, so equal $E$ means equal $a$.
:::

## Two bodies, one dance {lvl=3 id=s-binary label="JEE"}

Kepler assumed the Sun stays still. It does not quite: the Sun and a planet both circle their common centre of mass, the balance point of the pair. For two bodies of masses $M_1$ and $M_2$ a distance $d$ apart, the third law becomes

$$T^2 = \frac{4\pi^2}{G\,(M_1 + M_2)}\,d^3.$$

Read it as: "the same law with the total mass in the middle and the separation in place of the radius." For the Sun and a planet, $M_1 + M_2$ is hardly different from $M_1$, so Kepler's version was almost right. For Jupiter the difference is about one part in a thousand [Inference: from the mass ratio found above].

Two equal stars, each of mass $M$, separated by $d$, go round their midpoint, each at radius $d/2$. The pull $GM^2/d^2$ gives each the centripetal force $M\omega^2 (d/2)$, so $\omega^2 = 2GM/d^3$ and $T = 2\pi\sqrt{d^3/2GM}$: the formula above with $M_1 + M_2 = 2M$. Two stars of $2.0 \times 10^{30}$ kg ($\approx$ the Sun's mass) a distance $3.0 \times 10^{11}$ m apart (2 AU) circle once every 2.0 years.

## Why $a^3$? The area law does it {lvl=4 id=s-proof label="Olympiad"}

Kepler's third law for circles needed only force and circular motion. For ellipses, the area law gives a lovely proof. The area of an ellipse is $\pi ab$ ($b$ is the short half-axis), and the area swept per second is $L/2m$, so the period is

$$T = \frac{\pi a b}{L/2m} = \frac{2\pi m\,ab}{L}.$$

It remains to find $L$. For an inverse-square pull, the orbit equation gives $L^2 = GMm^2\,\ell$, where $\ell = b^2/a$ is the **semi-latus rectum**, the ellipse's half-width as seen from the Sun [standard result, quoted not derived]. Then

$$T^2 = \frac{4\pi^2m^2a^2b^2}{L^2} = \frac{4\pi^2 a^2 b^2}{GM\,b^2/a} = \frac{4\pi^2a^3}{GM}.$$

The $b$ cancels. Read it as: "no matter how thin the ellipse, the period is fixed by $a$ alone", which is why the third law holds for every planet and comet regardless of eccentricity.

**Dropped into the Sun.** Stop the Earth in its orbit and let it fall. It falls straight in, which is the thinnest possible ellipse: the long axis is the line from the Sun to where it was, so $a = r/2 = 0.5$ AU. The fall is half of that thin orbit (out and back is a full period), so

$$t = \tfrac12 T = \tfrac12 (0.5)^{3/2}\ \text{years} = 0.177\ \text{years} \approx 64.6\ \text{days}.$$

Read it as: "half the period of a planet whose long axis is half of Earth's distance." A little over two months to fall into the Sun.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Planets move on ellipses with the Sun at one focus; $r_p = a(1-e)$ and $r_a = a(1+e)$. {lvl=1}
2. The line from the Sun to a planet sweeps equal areas in equal times, so planets are fastest at perihelion. {lvl=1}
3. $T^2 \propto a^3$; in years and AU, $T^2 = a^3$ exactly for the Sun. {lvl=2}
4. The area law is angular momentum conservation: $dA/dt = L/2m$ and $r_pv_p = r_av_a$. {lvl=2}
5. $M = 4\pi^2a^3/(GT^2)$ weighs the central body from any orbiting body; the orbiter's mass cancels. {lvl=2}
6. $v^2 = GM(2/r - 1/a)$ gives the speed anywhere; the energy $-GMm/2a$ depends only on $a$. {lvl=3}
7. For two comparable bodies use $M_1 + M_2$ and their separation; the period depends only on $a$, however thin the ellipse. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Use the semi-major axis $a$ (half the long axis) in the third law, not the distance at one point of the orbit. {lvl=1}
- The Sun is at a focus, not at the centre of the ellipse. {lvl=1}
- Constant areal speed does not mean constant speed. Speed, angular speed, kinetic and potential energy all vary; angular momentum and total energy do not. {lvl=2}
- Compare planets of the same star only: the constant $4\pi^2/GM$ changes with the central body. {lvl=2}
- The orbiter's mass cancels. A satellite's mass does not affect its period at a given height. {lvl=2}
- In the ratio form, years and AU, do not convert: $T^2 = a^3$ already has the units built in. {lvl=2}
:::
