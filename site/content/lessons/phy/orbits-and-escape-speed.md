---
title: Orbits and escape speed
summary: Why astronauts float, why a satellite needs sideways speed more than height, and how fast you must throw something to never see it again.
ncert: ["Class 11 Physics · Ch 7 Gravitation (gravitational potential energy, escape speed, Earth satellites, energy of an orbiting satellite, geostationary and polar satellites, weightlessness)"]
up_to: Olympiad
builds_on: [Universal law of gravitation, Circular motion, Kinetic and potential energy, Conservative forces]
notes_prompt: Explain to a friend why an astronaut floats inside the space station even though gravity there is still about 90% as strong as on the ground.
margin:
  - kind: history
    title: History
    text: In 1945 Arthur C. Clarke pointed out that a satellite 36,000 km up goes round once a day and so hangs over one spot, which is how TV and weather satellites work today. The first satellite, Sputnik 1, went up in 1957.
  - kind: tip
    title: Exam favourite
    text: "Higher orbit means slower speed, longer period, more total energy (less negative). Escape speed is always √2 times the circular speed at the same height. Both are independent of the satellite's mass."
  - kind: olympiad
    title: Olympiad link
    text: "To speed up in orbit you fire forwards, but you end up going slower, because you rise to a higher circle. Space engineers call this the orbital paradox; the cure is the vis-viva equation $v^2 = GM(2/r - 1/a)$."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 7 The Theory of Gravitation (feynmanlectures.caltech.edu) [Unverified]" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 13 Gravitation: gravitational potential energy and escape speed, satellites: orbits and energy (§13-5, §13-7)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 11 Gravitation [Unverified]" }
cards:
  - { front: "Orbital speed and period of a circular orbit of radius r?", back: "$v = \\sqrt{GM/r}$ and $T = 2\\pi\\sqrt{r^3/GM}$. Both come from gravity being the centripetal force; the satellite's mass cancels." }
  - { front: "Why do astronauts float?", back: "They and the station are in free fall together. Gravity is still about 90% of its ground value; nothing pushes on them, so no 'weight' is felt." }
  - { front: "Energies of a circular orbit?", back: "$K = GMm/2r$, $U = -GMm/r$, $E = -GMm/2r$. So $K = -E$ and $U = 2E$." }
  - { front: "Escape speed from a planet?", back: "$v_e = \\sqrt{2GM/R} = \\sqrt{2gR}$, 11.2 km/s for Earth. It is $\\sqrt2$ times the circular speed at the same radius." }
  - { front: "Conditions for a geostationary orbit?", back: "Circular, in the equatorial plane, going west to east, with a period of one sidereal day (23 h 56 min). That fixes $r \\approx 42{,}200$ km, a height of about 35,800 km." }
  - { front: "A satellite loses energy to air drag. What happens to its speed?", back: "It speeds up. $E = -GMm/2r$ gets more negative, so $r$ shrinks, and $v = \\sqrt{GM/r}$ grows." }
core:
  idea: 'A satellite is a projectile thrown so fast sideways that the Earth curves away as quickly as it falls: gravity alone supplies the circular motion, so $v = \sqrt{GM/r}$. Its total energy is negative (it is bound), and you free it by supplying energy $GMm/2r$, which for a throw from the surface means a speed $\sqrt{2GM/R}$.'
  formulas:
    - tex: 'v = \sqrt{\dfrac{GM}{r}},\qquad T = 2\pi\sqrt{\dfrac{r^3}{GM}}'
      label: 'Circular orbit of radius r: speed and period'
    - tex: 'K = \dfrac{GMm}{2r},\quad U = -\dfrac{GMm}{r},\quad E = -\dfrac{GMm}{2r}'
      label: 'Energies of a circular orbit (zero of potential energy at infinity)'
    - tex: 'v_e = \sqrt{\dfrac{2GM}{R}} = \sqrt{2gR}'
      label: 'Escape speed from the surface of a planet of mass M and radius R'
  conditions:
    - 'The planet is a uniform sphere (or nearly), so its pull is that of a point mass at the centre'
    - 'Only gravity acts: no air drag, no engines, and the pull of the Sun and Moon is ignored'
    - 'The satellite is far lighter than the planet, so the planet does not move noticeably'
    - 'r is the distance from the planet''s centre, not the height above the ground'
  sign: 'Take U = 0 at infinity, so every bound orbit has negative total energy. The satellite''s mass cancels from speeds, periods and escape speed.'
outcomes:
  - 'Explain weightlessness as free fall, not as the absence of gravity'
  - 'Find the speed and period of a circular orbit from G, M and r'
  - 'Work out the kinetic, potential and total energy of a satellite and explain why drag speeds it up'
  - 'Compute escape speed and the speed left over far away'
  - 'Find the radius of a geostationary orbit and the extra speed needed to change orbit'
opener:
  story: |
    On the space station, astronauts drift about as if gravity had been switched off. Pictures of them floating make it look like the station sits somewhere beyond the Earth's pull. It doesn't. The station orbits only 400 km up, about the straight-line distance from Delhi to Lucknow, turned upwards. At that height gravity is still nearly 90% as strong as it is on your terrace.

    So here's the puzzle. Getting a rocket 400 km up is not the hard part: any modern sounding rocket does it in minutes and falls back. The station is not hard to reach because it is high. So **what is the real price of staying in orbit?**

    Hold your guess. The answer is that the station isn't being held up at all. It travels sideways at 7.7 km/s, 27,600 km/h, and that speed, not the height, is the thing the rocket spends nearly all its fuel on.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A rocket going straight up for height, and a satellite racing sideways round the Earth"><circle cx="150" cy="190" r="72" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><circle cx="150" cy="190" r="86" style="fill:none;stroke:var(--c);stroke-width:1.5;stroke-dasharray:5 5"/><path d="M150 118 L150 74" style="stroke:var(--chem);stroke-width:3;fill:none"/><path d="M144 82 L150 68 L156 82Z" style="fill:var(--chem)"/><text x="160" y="92" style="font-size:11px;fill:var(--muted)">up: easy</text><path d="M80 130 Q150 70 232 130" style="stroke:var(--ink);stroke-width:1.2;stroke-dasharray:3 4;fill:none"/><rect x="226" y="100" width="24" height="10" rx="2" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="214" y="102" width="10" height="6" style="fill:var(--chem)"/><rect x="252" y="102" width="10" height="6" style="fill:var(--chem)"/><path d="M262 140 L300 168" style="stroke:var(--ink);stroke-width:2;fill:none"/><path d="M290 168 L302 170 L296 158Z" style="fill:var(--ink)"/><text x="196" y="226" style="font-size:11px;fill:var(--muted)">sideways: 7.7 km/s</text><text x="14" y="26" style="font-size:12px;fill:var(--ink)">Which costs more fuel?</text></svg>'
life:
  - 'GPS, Google Maps and cab apps rely on satellites about 20,000 km up that circle the Earth every 12 hours.'
  - 'INSAT and GSAT TV and communication satellites sit over the equator at 36,000 km, and your dish on the roof points at one fixed spot in the sky.'
  - 'The space station sees about 16 sunrises and sunsets every day because it circles the Earth in about 92 minutes.'
  - 'A rocket launched eastwards from the coast, as ISRO does from Sriharikota, gets a free push from the Earth''s own spin.'
  - 'The Moon has no air because its escape speed (2.4 km/s) is too low to hold on to gas molecules; Earth keeps its nitrogen but has long lost its hydrogen.'
models:
  - name: 'Falling is the default; staying up is a speed'
    text: 'Orbiting is not a special condition, it is free fall with enough sideways motion. Many "stable" states, from a cyclist staying upright to a company staying afloat, are really continuous falling that constant motion keeps balancing.'
  - name: 'Energy debt and the zero line'
    text: 'Measuring energy from infinity makes every bound system negative: you are in debt, and escaping means paying the debt to exactly zero. Whenever you can only pay in one currency (energy), ask how much you owe, not which way you go.'
  - name: 'Speeding up can slow you down'
    text: 'Pushing harder on one variable can move the system to a state where another variable falls (burn forward and the orbit rises, so the satellite ends up slower). In systems with feedback, check where the push leads before judging it by the first effect.'
links:
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'Everything here is that one law, $F = GMm/r^2$, plus Newton''s second law for circular motion. Nothing new has to be believed.'
    differs: 'The earlier lesson asked about forces; this one works with energy and with the whole path, which is what orbits and escape need.'
  - leaf: 'phy/circular-motion'
    name: 'Circular motion'
    same: 'An orbit is circular motion whose centripetal force is gravity, so $mv^2/r = GMm/r^2$ is the whole derivation.'
    differs: 'A string or a road supplies a force you can change; gravity at a given radius fixes the speed uniquely, so each circular orbit has exactly one speed.'
next:
  q: 'Why does a steel ship float while a steel coin sinks, and why does the pressure at the bottom of a pool depend on the depth alone?'
  leaf: 'phy/pressure-and-buoyancy'
  name: 'Pressure and buoyancy'
symbols:
  - s: 'G'
    means: 'gravitational constant, 6.67 × 10^-11 N m^2/kg^2'
  - s: 'M'
    means: 'mass of the planet being orbited (kg)'
  - s: 'm'
    means: 'mass of the satellite (kg)'
  - s: 'r'
    means: 'distance from the planet''s centre to the satellite (m)'
  - s: 'R'
    means: 'radius of the planet (m)'
  - s: 'g'
    means: 'free-fall acceleration at the planet''s surface (m/s^2); GM = gR^2'
  - s: 'v'
    means: 'speed of the satellite (m/s)'
  - s: 'T'
    means: 'period, the time for one full orbit (s)'
  - s: 'K'
    means: 'kinetic energy (J)'
  - s: 'U'
    means: 'gravitational potential energy, zero at infinity (J)'
  - s: 'E'
    means: 'total mechanical energy, K + U (J)'
  - s: 'v_e'
    means: 'escape speed, the least launch speed that never returns (m/s)'
  - s: 'a'
    means: 'semi-major axis, half the long width of an elliptical orbit (m)'
---

:::hook
q: A rocket carries a satellite to 400 km. What takes most of the energy: lifting it to 400 km, or giving it its orbital speed?
options: ["Lifting it to 400 km", "Giving it its sideways orbital speed", "About equal"]
answer: 1
right: Right. Per kilogram, the climb costs about 3.7 million joules; the orbital speed of 7.7 km/s costs about 29.5 million. Speed takes roughly eight times as much, which is why orbits are won sideways, not upwards.
wrong: Work it out per kilogram. Climbing 400 km against gravity that stays near 9 m/s² costs about 3.7 MJ. Moving at 7.7 km/s means a kinetic energy of ½ × 7700² ≈ 29.5 MJ. Which is bigger?
:::

## Weightless, but not gravity-free {lvl=1 id=s-float label="Class 9"}

Stand in a lift and cut the cable (in your imagination only). You and the lift fall together at $9.8\ \text{m/s}^2$. The floor no longer pushes on your feet, and a weighing scale under you reads zero. If you let go of a pen, it floats beside you, because it is falling at exactly the same rate as you and the lift. That feeling, with no push from anything, is what we call **weightlessness**.

Now picture the same thing in orbit. The space station and everyone in it are falling towards the Earth together, and they keep missing it because of their sideways speed. Gravity at 400 km is still about $9.8 \times (6.4/6.8)^2 = 8.7\ \text{m/s}^2$, nearly 89% of the ground value. Astronauts float because nothing pushes on them, not because nothing pulls.

This explains an odd list of space-sickness symptoms: no weight means body fluids stop pooling towards the feet and shift towards the head, so faces swell and heads ache, and the inner ear, which senses "down" through gravity, gets confused.

:::qc lvl=1
q: At a height of 400 km, how large is gravity compared to the ground?
options: ["Zero", "About 89%", "About 1%"]
answer: 1
right: Right. 400 km is small next to the Earth's radius of 6400 km, so gravity has barely weakened.
wrong: The distance from the centre has grown only from 6400 km to 6800 km. Gravity goes as 1/r².
:::

## How fast is "fast enough"? {lvl=2 id=s-speed label="Class 11"}

Newton's cannon asked for a speed. Here is how to find it. On a circular orbit of radius $r$, something must supply the centripetal force, the inward push needed to keep a body turning. Here that something is gravity alone:

$$\frac{mv^2}{r} = \frac{GMm}{r^2}.$$

Read it as: "the push needed to keep turning equals the pull available". The satellite's mass $m$ cancels, which is Galileo's idea again: a heavy satellite is pulled harder but also resists harder. Solving for the speed gives

:::law caption="Circular orbit of radius r around a mass M; r is measured from the centre of M."
$$v = \sqrt{\frac{GM}{r}},\qquad T = \frac{2\pi r}{v} = 2\pi\sqrt{\frac{r^3}{GM}}$$
:::

A number first. Just above the surface, use $GM = gR^2$, so $v = \sqrt{gR} = \sqrt{9.8\times6.4\times10^6} = 7.9\ \text{km/s}$ and $T = 2\pi R/v = 85$ minutes. At the space station, $r = 6.8\times10^6$ m, so $v = 7.7$ km/s and $T = 92.7$ minutes (about 16 laps a day).

Read the formula: a bigger $r$ means a smaller $v$ and a longer period. Distant orbits are slower. And since $T^2 \propto r^3$, this is already Kepler's third law for circles: double the radius and the period grows by $2^{3/2} = 2.83$.

:::figure caption="Circular orbits of some famous satellites, drawn to scale (Earth radius = 16 units). The Moon would be 960 units away, far off this page."
<svg viewBox="0 0 360 240" role="img" aria-label="Earth with a low orbit, a GPS orbit and a geostationary orbit drawn to scale">
<circle cx="180" cy="120" r="16" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/>
<circle class="faint" cx="180" cy="120" r="17.5"/>
<circle class="faint" cx="180" cy="120" r="66.5"/>
<circle class="faint" cx="180" cy="120" r="106"/>
<circle class="obj" cx="197.5" cy="120" r="3"/>
<circle class="obj" cx="246.5" cy="120" r="3"/>
<circle class="obj" cx="255" cy="45" r="3"/>
<text x="204" y="112" style="font-size:10px;fill:var(--muted)">station</text>
<text x="204" y="140" style="font-size:10px;fill:var(--muted)">400 km,</text><text x="204" y="152" style="font-size:10px;fill:var(--muted)">92 min</text>
<line class="faint" x1="250" y1="120" x2="292" y2="120"/><text x="296" y="106" style="font-size:10px;fill:var(--muted)">GPS</text><text x="296" y="117" style="font-size:10px;fill:var(--muted)">20,200 km</text><text x="296" y="128" style="font-size:10px;fill:var(--muted)">12 h</text>
<line class="faint" x1="258" y1="45" x2="292" y2="45"/><text x="296" y="40" style="font-size:10px;fill:var(--muted)">GEO</text><text x="296" y="51" style="font-size:10px;fill:var(--muted)">35,800 km</text><text x="296" y="62" style="font-size:10px;fill:var(--muted)">24 h</text>
<text x="156" y="218" style="font-size:10px;fill:var(--muted)">Earth</text>
<text x="40" y="232" style="font-size:10px;fill:var(--muted)">radii of the orbits: 1.06, 4.2 and 6.6 Earth radii</text>
</svg>
:::

:::qc
q: A satellite is moved from a circular orbit of radius r to one of radius 4r. What happens to its speed?
options: ["Doubles", "Halves", "Stays the same"]
answer: 1
right: Right. v goes as 1/√r, so four times the radius halves the speed.
wrong: Use v = √(GM/r). If r becomes 4r, the square root of the quotient changes by what factor?
:::

## Parking above one spot {lvl=2 id=s-geo label="Class 11"}

A **geostationary** satellite appears fixed in the sky because it goes round in exactly the time the Earth takes to turn once. For that it must obey three rules: orbit above the equator (a tilted circle would make it swing north and south, and it can only keep pace with a point on the equator), move west to east like the Earth's spin, and have a period of one sidereal day, 86,164 s. Then $T = 2\pi\sqrt{r^3/GM}$ fixes the radius uniquely:

$$r^3 = \frac{GMT^2}{4\pi^2} = \frac{3.986\times10^{14}\times(86164)^2}{4\pi^2}\quad\Rightarrow\quad r = 4.22\times10^7\ \text{m}.$$

Subtract the Earth's radius, 6378 km, and the height is about 35,800 km. The speed there is only 3.07 km/s, less than half the speed of the space station. Because the period alone fixes $r$, every geostationary satellite, whatever its mass or owner, sits on the same ring, which is why the slots above India are crowded and licensed. Satellites over the poles, in contrast, whizz north to south in low "polar" orbits and scan the whole Earth, strip by strip, as the Earth turns below them, which is how remote-sensing satellites map crops and cities.

:::qc lvl=2
q: Could a geostationary satellite be placed above Delhi (latitude 28° N)?
options: ["Yes, any longitude works", "No, only above the equator", "Yes, if it is heavier"]
answer: 1
right: Right. The centre of its orbit must be the centre of the Earth, and a circle round that centre that stays over one point has to lie in the equatorial plane.
wrong: Any orbit is a circle (or ellipse) centred on the Earth's centre. A circle at constant latitude 28° N has its own centre elsewhere on the axis.
:::

## The energy of an orbit {lvl=2 id=s-energy label="Class 11"}

For heights small compared to $R$, potential energy is $mgh$. But gravity weakens with height, so for large distances we must add up small steps. To lift a body from distance $r$ to far away, gravity pulls back with $GMm/x^2$ at distance $x$, so the work we must do is

$$\int_r^\infty \frac{GMm}{x^2}\,dx = \frac{GMm}{r}.$$

Calling the potential energy zero at infinity, the energy at $r$ is therefore **negative**: $U = -GMm/r$. Read it as: "the work you would get back by letting the body fall in from infinity, taken with a minus sign: it starts at zero and only goes down".

For a circular orbit, the force equation gives $mv^2 = GMm/r$, so the kinetic energy is $K = \tfrac12mv^2 = GMm/2r$. Add the two:

:::law caption="Circular orbit; zero of potential energy at infinity. Note the signs and the factor of 2."
$$K = \frac{GMm}{2r},\qquad U = -\frac{GMm}{r},\qquad E = K+U = -\frac{GMm}{2r}$$
:::

So $E = -K$ and $U = 2E$. A number: a 1000 kg satellite on $r = 7.0\times10^6$ m has $K = +2.85\times10^{10}$ J, $U = -5.69\times10^{10}$ J and $E = -2.85\times10^{10}$ J. The minus sign on $E$ is the statement that the satellite is **bound**: it has less energy than it would have at rest at infinity.

:::figure caption="Potential energy against distance. A circular orbit at radius r has total energy E halfway between U and zero; the gap from E down to U is the kinetic energy K. To escape, the total energy has to be raised to the zero line."
<svg viewBox="0 0 360 220" role="img" aria-label="Potential energy curve minus GMm over r with the total energy of a circular orbit and the zero line for escape">
<line class="gr" x1="50" y1="20" x2="50" y2="200"/>
<line class="gr" x1="50" y1="60" x2="345" y2="60"/>
<path class="ln" d="M80 180 L88 155 L95 140 L110 120 L125 109 L140 100 L170 90 L230 80 L290 75 L326 73"/>
<line class="faint" x1="110" y1="60" x2="110" y2="200"/>
<line class="faint" x1="170" y1="75" x2="326" y2="75"/>
<line class="wf" x1="170" y1="90" x2="170" y2="76" style="stroke-width:3"/>
<circle class="obj" cx="170" cy="90" r="3.5"/>
<text x="56" y="16" style="font-size:10px;fill:var(--muted)">energy</text>
<text x="352" y="54" text-anchor="end" style="font-size:10px;fill:var(--muted)">E = 0: free</text>
<text x="104" y="212" style="font-size:10px;fill:var(--muted)">surface, r = R</text>
<text x="176" y="212" style="font-size:10px;fill:var(--muted)">orbit radius</text>
<text x="254" y="68" style="font-size:10px;fill:var(--muted)">E of the orbit</text>
<text x="178" y="108" style="font-size:10px;fill:var(--ink)">U (curve)</text>
<text x="176" y="86" style="font-size:10px;fill:var(--eng)">K</text>
<text x="352" y="196" text-anchor="end" style="font-size:10px;fill:var(--muted)">distance r</text>
</svg>
:::

:::worked title="Air drag speeds a satellite up"
Drag does negative work, so $E = -GMm/2r$ becomes more negative, which means $r$ gets smaller. Then $v = \sqrt{GM/r}$ gets larger. Where does the energy go? $U = -GMm/r$ falls by twice as much as $E$ does. Half of that drop is carried off by drag as heat; the other half shows up as extra kinetic energy. Gravity does more positive work on the spiralling satellite than drag takes away, so the satellite speeds up while losing energy. It is a very real effect: space stations need regular boosts to stay up.
:::

## Throwing something away for good {lvl=2 id=s-escape label="Class 11"}

How fast must you throw a stone so that it never comes back? Gravity never fully switches off, but the energy needed to climb away from it is finite, because the pull falls as $1/r^2$. The stone just escapes when it reaches infinity with zero speed, so its total energy must be zero:

$$\tfrac12mv_e^2 - \frac{GMm}{R} = 0\quad\Rightarrow\quad v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}.$$

Read it as: "enough kinetic energy to pay back the whole potential-energy debt at the surface". For the Earth that is $\sqrt{2\times9.8\times6.4\times10^6} = 11.2$ km/s, about 40,000 km/h. Three things are worth noticing:

- the mass $m$ of the object cancels, so a pebble and a rocket have the same escape speed;
- the direction does not matter, because energy is a scalar (as long as the path does not hit the ground);
- $v_e = \sqrt2\,v_c$: the escape speed is $\sqrt2 = 1.41$ times the circular-orbit speed at the same place. A satellite just above the ground at 7.9 km/s needs only $11.2 - 7.9 = 3.3$ km/s more.

Planets compare easily using $v_e \propto \sqrt{M/R}$. The Moon has $1/81$ of Earth's mass and $0.27$ of its radius, so $v_e = 11.2\sqrt{(1/81)/0.27} = 2.4$ km/s. Jupiter, 318 times heavier and 11.2 times wider, has about 60 km/s.

:::note title="Why Earth has no hydrogen, and the Moon no air" tone=info
Air molecules are always moving; at room temperature a nitrogen molecule moves at about 0.5 km/s and a hydrogen molecule at about 1.9 km/s, with a long tail of faster ones. A rule of thumb [Unverified, quoted from memory] says a planet loses a gas over billions of years if the typical molecular speed is more than about a sixth of the escape speed. Hydrogen at 1.9 km/s is a sixth of 11.2, so the Earth loses it; nitrogen at 0.5 km/s is far below, so we keep it. On the Moon, with $v_e = 2.4$ km/s, even heavy gases leak away.
:::

:::qc
q: A body is launched from the Earth's surface with exactly the escape speed. What is its speed at a very great distance?
options: ["11.2 km/s", "5.6 km/s", "Practically zero"]
answer: 2
right: Right. Escape speed is the least speed for which the speed "runs out" only at infinity.
wrong: Use energy. The total is zero at launch. Far away U is also zero, so what must K be?
:::

## Beyond the pull: speed left over {lvl=3 id=s-jee label="JEE"}

If you throw faster than $v_e$, you keep some speed far away. Do it with energy, not speeds: speeds do not subtract, energies do. At launch $E = \tfrac12mv^2 - GMm/R$. Far away only kinetic energy remains, $\tfrac12mv_\infty^2$. Using $\tfrac12mv_e^2 = GMm/R$:

$$v_\infty^2 = v^2 - v_e^2.$$

So a probe launched at $3v_e$ ends up with $\sqrt{9-1}\,v_e = 2.83\times11.2 = 31.7$ km/s (not $2v_e$). Interplanetary missions are designed with this "extra speed at infinity" as the target.

Now the opposite: throw straight up with less than escape speed. How high does it go? Energy conservation, from the surface to the top where the speed is zero:

$$\tfrac12v^2 - \frac{GM}{R} = -\frac{GM}{R+h}\quad\Rightarrow\quad h = \frac{Rv^2}{v_e^2 - v^2}.$$

Try $v = \tfrac12v_e = 5.6$ km/s. The formula gives $h = R/3 = 2130$ km. The school formula $v^2/2g$ would say $1600$ km, which is wrong because it assumes gravity stays constant all the way up. The correct height is higher because gravity weakens as you climb.

:::eq caption="Maximum height of a vertical throw from the surface with speed v below escape speed; for small v it reduces to v²/2g."
$$h = \frac{Rv^2}{v_e^2 - v^2}$$
:::

Orbits also come in three flavours that tell you the destiny of a body from one number, the total energy: $E < 0$ bound (a circle or an ellipse), $E = 0$ just escapes (a parabola), $E > 0$ escapes with speed to spare (a hyperbola). Comets that return, like Halley, are in the first group; one-off visitors are in the third.

:::worked title="The neutral point (NCERT's two-sphere example)"
Two fixed spheres of masses $M$ and $4M$ have centres $6R$ apart, and a projectile leaves the surface of $M$ towards the other. Where do the two pulls cancel? At $r$ from $M$ with $\dfrac{GM}{r^2} = \dfrac{4GM}{(6R-r)^2}$, so $6R - r = 2r$ and $r = 2R$. The projectile needs just enough energy to get over that "pass": beyond it the heavy sphere pulls it in. The trick is a general one: the minimum launch speed is set by the highest point of the potential-energy landscape, not by the destination.
:::

## Changing orbit: the paradox {lvl=3 id=s-change label="JEE"}

Suppose a satellite on a circle needs to move to a higher circle. It fires its engine forwards, gaining speed, so it ends up *slower* on the new circle (since $v = \sqrt{GM/r}$). What is going on? Two things: the extra forward speed lifts it into an ellipse whose far end is the higher circle; on the way up the satellite slows as it climbs (kinetic energy turns into potential energy). At the top a second burn is needed to round it into the new circle. The total energy rises, but the *kinetic* energy at the end is lower, because $K = -E$ and $E$ has become less negative.

The energy for the whole move from radius $r_1$ to $r_2$ is just the change in $E = -GMm/2r$:

$$\Delta E = \frac{GMm}{2}\left(\frac1{r_1} - \frac1{r_2}\right).$$

Moving a 1000 kg satellite from $R$ to $2R$ costs $GMm/4R = mgR/4 = 1.57\times10^{10}$ J. Notice that the same logic runs backwards: to come down, a satellite fires *backwards*, slows, and falls into a lower orbit where it moves faster.

:::qc lvl=3
q: To catch up with a spacecraft ahead of it in the same orbit, an astronaut should
options: ["fire the thrusters forward, speeding up", "drop to a lower orbit, where the speed is higher, then return", "just wait"]
answer: 1
right: Right. Speeding up directly lifts the craft to a higher, slower orbit and it falls behind. Dropping first, running faster in the lower orbit, and climbing back is how docking really works.
wrong: Firing forward raises the orbit and so lowers the speed. Which orbit has the higher speed?
:::

## Ellipses, and the cheapest route to a high orbit {lvl=4 id=s-ellipse label="Olympiad"}

Orbits are not always circles. Two conservation laws handle every ellipse. Gravity is a central force, so **angular momentum** is conserved: $mv_pr_p = mv_ar_a$ at the nearest (perigee) and farthest (apogee) points. And **energy** is conserved. Together they give a very useful result, the **vis-viva equation**:

$$v^2 = GM\left(\frac{2}{r} - \frac{1}{a}\right),\qquad E = -\frac{GMm}{2a},$$

where $a$ is the semi-major axis, half of the ellipse's long diameter. Read it as: "the circle ($r = a$) is the special case $v^2 = GM/r$; stay below $2/r$ and you are bound". The energy depends only on $a$, so all orbits with the same $a$ have the same energy and the same period $T = 2\pi\sqrt{a^3/GM}$ (Kepler's third law for ellipses).

:::figure caption="An elliptical transfer orbit between a low circle and a high circle. Burn one at the near end raises the far end; burn two at the far end rounds the orbit off."
<svg viewBox="0 0 360 200" role="img" aria-label="Hohmann transfer ellipse from a small circular orbit to a large one">
<circle cx="120" cy="100" r="14" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/>
<circle class="faint" cx="120" cy="100" r="26"/>
<circle class="faint" cx="120" cy="100" r="86"/>
<ellipse class="wf" cx="150" cy="100" rx="56" ry="46" style="stroke-width:2"/>
<circle class="obj" cx="94" cy="100" r="4"/>
<circle class="obj" cx="206" cy="100" r="4"/>
<text x="60" y="130" style="font-size:10px;fill:var(--muted)">burn 1</text>
<text x="212" y="96" style="font-size:10px;fill:var(--muted)">burn 2</text>
<text x="250" y="172" style="font-size:10px;fill:var(--muted)">high circle</text>
<text x="60" y="152" style="font-size:10px;fill:var(--muted)">low circle</text>
</svg>
:::

The cheapest two-burn route between two circles of radius $r_1$ and $r_2$ (the Hohmann transfer) uses the ellipse with $a = (r_1 + r_2)/2$. For a space station orbit ($r_1 = 6.8\times10^6$ m) to geostationary ($r_2 = 4.22\times10^7$ m), $a = 2.45\times10^7$ m and vis-viva gives the speed on the ellipse at the near end, 10.05 km/s, against the circular 7.66 km/s: burn 1 adds about 2.4 km/s. At the far end the ellipse is moving at 1.62 km/s but the circle needs 3.07 km/s: burn 2 adds about 1.5 km/s. The total, about **3.9 km/s**, is far less than the 11.2 km/s of escape, and the trip takes half the ellipse's period, about 5.3 hours.

Two more pictures worth keeping. First, both bodies in a pair really orbit their common centre of mass. For two equal stars $M$ a distance $d$ apart, each moves on a circle of radius $d/2$ with gravity $GM^2/d^2$ as the centripetal force, so $T = 2\pi\sqrt{d^3/2GM}$: two Sun-like stars 1 AU apart circle each other in about 259 days. Second, take the escape-speed formula and ask what mass-to-radius ratio makes $v_e = c$. You get $R = 2GM/c^2$, which is about 9 mm for the Earth and 3 km for the Sun. [Inference] This is a lucky coincidence of Newtonian algebra with the true black-hole radius, which needs general relativity, but it shows why a collapsed star could trap light.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Astronauts float because they are in free fall with the station; gravity at 400 km is still about 89% of its ground value. {lvl=1}
2. Gravity supplies the centripetal force, so $v = \sqrt{GM/r}$ and $T = 2\pi\sqrt{r^3/GM}$; higher orbits are slower and the satellite's mass drops out. {lvl=2}
3. A geostationary satellite is equatorial, west to east, with a period of one sidereal day; this puts it at $r \approx 42{,}200$ km. {lvl=2}
4. In a circular orbit $K = GMm/2r$, $U = -GMm/r$, $E = -GMm/2r$; drag therefore speeds a satellite up. {lvl=2}
5. Escape speed is $\sqrt{2GM/R}$ = 11.2 km/s for Earth, independent of the mass and direction of the object, and $\sqrt2$ times the circular speed. {lvl=2}
6. Far-away speed after launch is $v_\infty^2 = v^2 - v_e^2$; a throw below escape speed rises to $h = Rv^2/(v_e^2 - v^2)$. {lvl=3}
7. Angular momentum and energy together give the vis-viva equation, $E = -GMm/2a$ for any ellipse, and the Hohmann transfer. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Use $r$ from the Earth's centre: for a satellite 400 km up, $r = 6800$ km, not 400 km. {lvl=1}
- "Weightless" means falling freely, not "beyond gravity". {lvl=1}
- A higher orbit has the *lower* speed, though it takes *more* energy to get there. {lvl=2}
- Speeds do not subtract: a probe launched at $3v_e$ ends at $\sqrt8\,v_e$, not $2v_e$. {lvl=3}
- Energy is $-GMm/2r$ only for a circular orbit; for an ellipse use the semi-major axis in place of $r$. {lvl=4}
- Do not use $mgh$ or $v^2/2g$ for heights comparable to $R$; gravity weakens on the way. {lvl=3}
:::
