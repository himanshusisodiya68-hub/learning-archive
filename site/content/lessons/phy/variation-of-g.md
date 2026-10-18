---
title: Variation of g
summary: Do you weigh less on Everest, down a mine, or at the equator? Gravity's pull changes, and here is exactly how.
ncert: ["Class 11 Physics · Ch 7 Gravitation (§7.5 Acceleration due to gravity of the earth, §7.6 Below and above the surface, §7.7 Gravitational potential energy)"]
up_to: Olympiad
builds_on: [Universal law of gravitation, Shell theorem, Work and energy]
notes_prompt: Explain to a friend why you would weigh nothing at the centre of the Earth, even though you are surrounded by the whole planet.
margin:
  - kind: history
    title: History
    text: "In 1672 the French astronomer Jean Richer found that his pendulum clock, accurate in Paris, lost about two and a half minutes a day near the equator in Cayenne. Gravity there was weaker, and clocks became the first gravity meters [Unverified: dates and figures from memory]."
  - kind: tip
    title: Exam favourite
    text: "Up and down are not mirror images. Going up h, g drops about 2h/R. Going down d, g drops only d/R. The same height up costs twice as much as the same depth down."
  - kind: olympiad
    title: Olympiad link
    text: "A uniform ball with a spherical hole has a perfectly uniform field inside the hole. Fill the hole with 'negative mass' and add two simple linear fields: superposition does the whole job."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 13 Gravitation, §13-3 to §13-5 [Unverified]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 7 The Theory of Gravitation (feynmanlectures.caltech.edu)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 11 Gravitation [Unverified]" }
cards:
  - { front: "How does g change as you go up a height h (h much less than R)?", back: "It falls: $g_h = gR^2/(R+h)^2 \\approx g(1 - 2h/R)$, about 0.03% for every kilometre." }
  - { front: "How does g change as you go down a depth d in a uniform Earth?", back: "$g_d = g(1 - d/R)$. Only the ball of Earth below you pulls (shell theorem), so g falls in step with the distance from the centre, to zero at the centre." }
  - { front: "Why is g slightly smaller at the equator than at the poles?", back: "The Earth spins, so part of the pull is used up bending your path into a circle ($\\omega^2R\\cos^2\\lambda$), and the Earth bulges, so you are a little farther from the centre." }
  - { front: "Gravitational potential energy of mass m at distance r from a planet of mass M?", back: "$U = -GMm/r$, zero at infinity and negative everywhere else: you sit in a well." }
  - { front: "When is $mgh$ a good formula for the energy gained in a climb?", back: "When h is tiny compared with R, because then g hardly changes: $GMm\\,h/R(R+h) \\approx mgh$." }
  - { front: "Potential energy and potential: what is the difference?", back: "Potential is energy per kilogram, $V = -GM/r$. It is a scalar, so contributions from many masses add as plain numbers." }
core:
  idea: 'Above the ground, g falls as one over distance-squared from the centre. Below the ground (uniform Earth) only the ball beneath you pulls, so g falls in step with the distance from the centre, to zero at the centre. The energy needed to climb out of gravity is measured from the rim of a well at infinity.'
  formulas:
    - tex: 'g_h = \dfrac{g\,R^2}{(R+h)^2}'
      label: 'g at height h above the surface'
    - tex: 'g_d = g\left(1 - \dfrac{d}{R}\right)'
      label: 'g at depth d below the surface (uniform Earth)'
    - tex: 'U = -\dfrac{G\,M\,m}{r}'
      label: 'Gravitational potential energy, zero at infinity'
  conditions:
    - 'Spherical planet, with r measured from its centre (shell theorem)'
    - 'The depth formula assumes uniform density; the real Earth has a dense core'
    - 'The small-height forms g(1 - 2h/R) and mgh need h much smaller than R'
    - 'Potential energy is measured from zero at infinity, so every value is negative'
  sign: 'Do not mix the two zeros: the potential energy is negative everywhere, and "climbing" means it becomes less negative.'
outcomes:
  - 'Find g at any height above, or depth below, a planet''s surface'
  - 'Explain why g is smaller at the equator and why a plumb line is not quite vertical'
  - 'Say why the weight is zero at the centre of the Earth'
  - 'Use U = -GMm/r to find energy needed to lift a body, and see mgh as its small-height version'
  - 'Add potentials of several masses as scalars, and find how long a trip through the Earth takes'
opener:
  story: |
    Step on a bathroom scale in Delhi and note the number. Now take the same scale, and the same you, to three places: the summit of Everest, the bottom of a very deep mine, and the exact centre of the Earth. In which of them do you weigh the least?

    The centre sounds like a trick, because you would be buried under six thousand billion billion kilograms of rock, surely the heaviest place of all. But it is the opposite. At the centre you would weigh **nothing**, even though the whole planet is wrapped round you and pulling.

    How can a planet pull on you with all its mass, and yet pull you nowhere? The answer also tells you why the equator is a slightly lighter place to live than the North Pole.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Cross-section of the Earth with arrows showing gravity at four heights: strong at the surface, weaker above, half as strong halfway down, zero at the centre"><defs><marker id="vgA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" style="fill:var(--chem)"/></marker></defs><circle cx="150" cy="140" r="70" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><circle cx="150" cy="140" r="35" style="fill:none;stroke:var(--c);stroke-width:1;stroke-dasharray:3 4"/><path d="M150 14 L150 140" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4;fill:none"/><path d="M150 18 L150 31" style="stroke:var(--chem);stroke-width:2.5;fill:none" marker-end="url(#vgA)"/><path d="M150 32 L150 68" style="stroke:var(--chem);stroke-width:2.5;fill:none" marker-end="url(#vgA)"/><path d="M150 106 L150 124" style="stroke:var(--chem);stroke-width:2.5;fill:none" marker-end="url(#vgA)"/><circle cx="150" cy="140" r="3.5" style="fill:var(--ink)"/><text x="162" y="30" style="font-size:11px;fill:var(--muted)">high up: weaker</text><text x="162" y="56" style="font-size:11px;fill:var(--muted)">surface: strongest</text><text x="162" y="96" style="font-size:11px;fill:var(--muted)">halfway down: half</text><text x="162" y="144" style="font-size:11px;fill:var(--muted)">centre: zero</text><text x="40" y="232" style="font-size:11px;fill:var(--muted)">arrow length = strength of gravity</text></svg>'
life:
  - 'A spring balance weighs about half a percent less at the equator than at the poles, so gold bought by that balance gives slightly less metal at the equator.'
  - 'Rockets are launched from sites close to the equator and go east, so the spin of the Earth gives them a free push.'
  - 'Mountaineers and astronauts feel "lighter" for two reasons: a real, tiny drop in g, and the way their bodies are loaded; at 400 km up, gravity is still about 89% of its ground value.'
  - 'Geologists find buried ore bodies and oil domes by measuring tiny changes in g from place to place, a method called gravimetry.'
  - 'Satellites such as GRACE map the Earth''s gravity field to show where ice sheets and underground water are growing or shrinking [Unverified].'
models:
  - name: 'Only what is beneath you counts'
    text: 'Inside a sphere, the outer shells cancel themselves out and only the inner ball pulls. A similar spirit: in a large crowd you feel the pressure of the people on your side, not of the whole crowd. Ask which part of a system actually acts on you.'
  - name: 'A well with a rim'
    text: 'Energy measured from a fixed rim (here infinity) makes bound things negative. Debt works the same way: being at -50 000 rupees is not a mystery once you remember where zero is, and escaping means climbing back to zero.'
  - name: 'Linear or inverse-square: ask which side of the surface'
    text: 'The same law gives two different shapes, a straight line inside and a falling curve outside, because the thing that changes is different (the mass that pulls, or the distance). Whenever a rule has two regimes, find what changes in each.'
links:
  - leaf: 'phy/potential'
    name: 'Electric potential'
    same: 'Potential is energy per unit (per kilogram here, per coulomb there). It is a scalar, so potentials from many sources simply add, and the field is the downhill slope of the potential.'
    differs: 'Charges come in two signs, so electric potential can be positive or negative; mass has one sign, so gravitational potential is always negative.'
  - leaf: 'phy/conservative-forces'
    name: 'Conservative forces'
    same: 'Gravity is conservative: the work to move a mass between two points does not depend on the path, which is why one number U(r) is enough.'
    differs: 'mgh is the special case of constant force; here the force changes with distance, so the energy is found by adding up pieces and gives -GMm/r.'
next:
  q: 'Gravity pulls you straight down, so why do the planets not fall into the Sun but sweep round it in neat ovals? Before Newton, a Danish nobleman''s twenty years of naked-eye measurements held the answer.'
  leaf: 'phy/keplers-laws'
  name: 'Kepler''s laws'
symbols:
  - s: 'g'
    means: 'acceleration of free fall at the surface (about 9.8 m/s^2)'
  - s: 'g_h'
    means: 'acceleration of free fall at height h above the surface (m/s^2)'
  - s: 'g_d'
    means: 'acceleration of free fall at depth d below the surface (m/s^2)'
  - s: 'h'
    means: 'height above the surface (m)'
  - s: 'd'
    means: 'depth below the surface (m)'
  - s: 'R'
    means: 'radius of the planet (6.4 × 10^6 m for the Earth)'
  - s: 'G'
    means: 'gravitational constant, 6.67 × 10^-11 N m^2/kg^2'
  - s: 'M'
    means: 'mass of the planet (kg)'
  - s: 'm'
    means: 'mass of the small body (kg)'
  - s: 'r'
    means: 'distance from the centre of the planet (m)'
  - s: 'U'
    means: 'gravitational potential energy (joules, J)'
  - s: 'V'
    means: 'gravitational potential, energy per kilogram (J/kg)'
  - s: 'ω'
    means: 'angular speed of the Earth''s spin (7.29 × 10^-5 rad/s)'
  - s: 'λ'
    means: 'latitude, the angle north or south of the equator (degrees)'
---

:::hook
q: Go 1 km up, or go 1 km down a mine. Where does gravity's pull drop more?
options: ["Going up", "Going down", "Exactly the same"]
answer: 0
right: Right, and by a factor of two. Going up, you are farther from all of the Earth, and the pull falls as 1 over distance squared. Going down, the layers above you stop pulling, but all the rock beneath still does, so the loss is only half as fast.
wrong: Most people guess that "inside the Earth" must be the more dramatic place. Hold that thought: we are about to see that the layers above you cancel out, which softens the loss.
:::

## Up a mountain, up to the Space Station {lvl=1 id=s-up label="Class 9"}

From the last lesson, the pull on a body at the Earth's surface is $g = GM/R^2 = 9.8$ m/s². The distance in that formula is measured from the **centre** of the Earth, $R = 6400$ km. Now climb. Climbing 8.8 km up Everest takes you from 6400 km to 6409 km from the centre, a change of only 0.14%. The pull falls by twice that, about 0.28%: from 9.80 to about 9.77 m/s². The mountaineer is not lighter in any way that a bathroom scale could tell.

Go far higher and the change becomes real. The International Space Station flies 400 km up, at 6800 km from the centre. That is 6800/6400 = 1.0625 times farther, so the pull is weaker by $(6400/6800)^2 = 0.886$:

$$g_{\text{ISS}} = 9.8 \times 0.886 = 8.7\ \text{m/s}^2.$$

At the Space Station, gravity is still **89%** of its value on the ground. Astronauts float, but not because gravity has gone. We will see why in the lesson on orbits.

The general rule: at height $h$ above the surface the distance from the centre is $R + h$, so

$$g_h = g\,\frac{R^2}{(R+h)^2}.$$

Read it as: "the pull at height $h$ is the ground pull, times how much farther from the centre you are, squared and upside down." For a modest climb ($h$ much less than $R$) this simplifies to $g_h \approx g\,(1 - 2h/R)$: every kilometre up loses about 2/6400, or 0.03%, of $g$.

:::qc lvl=1
q: At what height above the surface is g equal to one quarter of its surface value?
options: ["R/2", "R", "2R"]
answer: 1
right: Right. A quarter means twice as far from the centre, $2R$ from the centre, which is $R$ above the surface. Do not forget the radius you already carry.
wrong: Quarter pull needs twice the distance from the centre, since $2^2 = 4$. Twice $R$ from the centre is how far above the surface?
:::

## Down a mine {lvl=2 id=s-down label="Class 11"}

Last lesson ended with the shell theorem: a uniform shell pulls a body **outside** it as if all its mass were at the centre, and pulls a body **inside** it with no net force at all. Now stand inside the Earth, at distance $r$ from the centre. Cut the Earth into thin shells. Every shell farther out than you pulls you with zero net force. Only the ball of Earth of radius $r$, beneath you, pulls, and it pulls as if all of its mass sat at the centre.

Take the Earth to have the same density everywhere. Then the mass of a ball is in proportion to its volume, which goes as the cube of the radius, so the inner ball holds a fraction $(r/R)^3$ of the Earth's mass. Try halfway down, $r = R/2$. The ball has $1/8$ of the mass and you are at $1/2$ of the distance:

$$\frac{1/8}{(1/2)^2} = \frac12.$$

Half the pull, so $g$ is 4.9 m/s². A body weighing 250 N on the surface weighs 125 N halfway to the centre (NCERT Exercise 7.16).

In general the inner mass is $M(r/R)^3$ and the pull is $G\,M(r/R)^3/r^2 = GMr/R^3$:

$$g_r = g\,\frac{r}{R}, \qquad\text{so at depth } d:\quad g_d = g\left(1 - \frac{d}{R}\right).$$

Read it as: "the pull grows in a straight line with the distance from the centre, from zero at the centre to $g$ at the surface." Going down by the fraction $d/R$ of the radius removes that fraction of $g$. A 1 km mine costs 1/6400 of $g$, half of what 1 km of height costs. That settles the opening question.

:::figure caption="How g changes with distance r from the centre of a uniform Earth. Inside the surface it is a straight line from zero. Outside it falls as one over r squared."
<svg viewBox="0 0 320 200" role="img" aria-label="Graph of g against distance from the centre: a straight rising line up to the surface, then a falling curve">
<path d="M50 20 L50 170 L300 170" style="fill:none;stroke:var(--muted);stroke-width:1.5"/>
<path d="M130 170 L130 60" style="fill:none;stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4"/>
<path d="M50 170 L130 60" style="fill:none;stroke:var(--chem);stroke-width:2.5"/>
<path d="M130 60 L150 99.6 L170 121.1 L210 142.5 L250 152.4 L290 157.8" style="fill:none;stroke:var(--c);stroke-width:2.5"/>
<text x="56" y="30" style="font-size:11px;fill:var(--muted)">g</text>
<text x="282" y="186" style="font-size:11px;fill:var(--muted)">r</text>
<text x="118" y="186" style="font-size:11px;fill:var(--muted)">R</text>
<text x="205" y="186" style="font-size:11px;fill:var(--muted)">2R</text>
<text x="52" y="56" style="font-size:11px;fill:var(--muted)">9.8 at surface</text>
<text x="52" y="132" style="font-size:11px;fill:var(--chem)">inside: straight line</text>
<text x="176" y="112" style="font-size:11px;fill:var(--c)">outside: 1/r² curve</text>
</svg>
:::

:::qc lvl=2
q: A body is carried from the surface to the centre of a uniform Earth. Its weight
options: ["increases steadily", "stays the same", "decreases steadily to zero"]
answer: 2
right: Right. The weight falls in a straight line with the distance from the centre. At the centre every part of the Earth pulls equally in all directions, and the pulls cancel.
wrong: Inside, only the ball beneath you pulls, and that ball shrinks as you go down. At the centre there is no Earth below you at all, only equal pulls from every side.
:::

The real Earth is not uniform. Its core is much denser than its crust, so g does not fall off in a straight line. Just below the surface it hardly drops at all, and it may even rise a little before it finally falls to zero [Unverified: the peak of about 10.7 m/s² near the core boundary is from memory]. The straight line is the textbook model for a uniform ball.

## A spinning, bulging Earth {lvl=2 id=s-spin label="Class 11"}

A bathroom scale at the equator reads a little less than at the poles. Two things cause it.

**The spin.** Once a day a person at the equator travels round a circle of radius 6400 km, at 465 m/s. To follow a circle, something must supply a pull towards its centre. That something is part of gravity. Only what is left presses on the scale. The pull needed is the angular speed squared times the radius, $\omega^2R$, where $\omega$ is the angle the Earth turns per second ($2\pi$ radians in one sidereal day of 86 164 s, so $\omega = 7.29\times10^{-5}$ rad/s):

$$\omega^2R = (7.29\times10^{-5})^2\times6.4\times10^6 = 0.034\ \text{m/s}^2.$$

That is 0.34% of $g$. A 60 kg person weighs 2 N less at the equator, out of 588 N. At latitude $\lambda$ (the angle north or south of the equator) the circle has a smaller radius, $R\cos\lambda$, and only the part of the pull that points along the line to the centre is lost, so

$$g_{\text{apparent}} \approx g - \omega^2R\cos^2\lambda.$$

Read it as: "the loss is biggest at the equator, where $\cos\lambda = 1$, and zero at the poles, where $\cos\lambda = 0$."

**The shape.** The spin also flattens the Earth: the equator sits about 21 km farther from the centre than the poles [Unverified]. That alone would cut $g$ by more than the spin, but the extra rock in the bulge pulls you back, so the net effect of the shape is smaller. The measured gap between pole and equator is about 0.05 m/s², about 9.83 and 9.78 m/s² [Unverified: from memory], so the shape adds roughly 0.02 on top of the spin's 0.034.

One more curiosity. Because of the sideways part of the spin effect, a plumb line does not point exactly at the centre of the Earth, except at the equator and the poles. At 45° latitude it leans by about a tenth of a degree.

:::qc lvl=2
q: At which place on the Earth is the effect of spin on the measured g zero?
options: ["The equator", "The poles", "Latitude 45°"]
answer: 1
right: Right. At the poles you only turn on the spot, so you travel in no circle at all and no pull is used up.
wrong: The spin effect is $\omega^2R\cos^2\lambda$. Where is $\cos\lambda$ equal to zero?
:::

## The cost of climbing {lvl=2 id=s-pe label="Class 11"}

How much work does it take to lift 1 kg from the ground to a height equal to the Earth's radius, 6400 km up? The school formula $mgh$ gives $1\times9.8\times6.4\times10^6 = 6.3\times10^7$ J. But $g$ falls as you climb, and at the top it is only a quarter of its ground value. So the real work must be smaller. Adding up the effort in thin slices (a small piece of calculus, shown below) gives exactly half: $3.1\times10^7$ J.

The general result is neat. The work to move a mass $m$ from the centre-distance $r_1$ to $r_2$ is

$$W = GMm\left(\frac1{r_1} - \frac1{r_2}\right).$$

Read it as: "the work is the strength of gravity, $GMm$, times the gap between one over the start distance and one over the end distance." (Slices: $F = GMm/r^2$, and the sum of $F\,dr$ from $r_1$ to $r_2$ is the area under the force curve.) Since this work depends only on where you start and finish, never on the path, we can store it as **potential energy**. Choose the zero at infinity, where the pull is nil, so that the work to bring a mass from infinity to $r$ is the energy it has lost:

$$U = -\frac{GMm}{r}.$$

Read it as: "potential energy is minus the pull-strength constant over the distance." It is **negative**, because you are in a well: gravity holds you, and you must be given energy to reach the rim at infinity where $U = 0$. At the Earth's surface, with $GM = gR^2$, a kilogram has $U = -gR = -6.27\times10^7$ J. That is also the energy it takes to lift 1 kg completely out of the Earth's pull. Hold on to this number; it returns as the escape speed.

How does this give the old $mgh$? Lift from $R$ to $R+h$:

$$\Delta U = GMm\left(\frac1R - \frac1{R+h}\right) = \frac{GMm\,h}{R(R+h)} \approx \frac{GM}{R^2}\,m\,h = mgh \quad (h \ll R).$$

Read it as: "when $h$ is tiny compared with $R$, the bracket is nearly $h/R^2$, and the formula collapses to the one you already knew." So $mgh$ was always the small-height shadow of $-GMm/r$.

:::qc lvl=2
q: A satellite's gravitational potential energy, measured from infinity, is
options: ["positive, because it is high up", "zero, because it is in orbit", "negative, because we would have to supply energy to take it to infinity"]
answer: 2
right: Right. Zero is at the rim of the well, infinity. Everything closer is lower, so negative.
wrong: Zero is at infinity. A satellite is closer than that, deeper in the well, and has less energy than zero.
:::

## Potential: energy per kilogram {lvl=3 id=s-pot label="JEE"}

Divide the potential energy by the mass of the small body and you get a number that depends only on the planet and the place, not on the body. Call it the **gravitational potential**, $V = U/m = -GM/r$, in joules per kilogram. At the Earth's surface it is $-6.27\times10^7$ J/kg.

Why bother? Because potential is a **scalar**: a plain number with no direction. With several masses, the potential at a point is just the sum of the potentials, taking each mass separately. No vectors, no components. The forces would have to be added as arrows.

Take four equal masses $m$ at the corners of a square of side $l$ (NCERT Example 7.3). The potential at the centre: each corner is $\sqrt2\,l/2$ away, so

$$V = -4\,\frac{Gm}{\sqrt2\,l/2} = -4\sqrt2\,\frac{Gm}{l} = -5.66\,\frac{Gm}{l}.$$

For the energy of the whole system, count every **pair** once: four pairs at distance $l$ and two (the diagonals) at $\sqrt2\,l$, so $U = -4\,Gm^2/l - 2\,Gm^2/(\sqrt2\,l) = -5.41\,Gm^2/l$. That is the energy it would take to pull the four masses apart to infinity.

:::note title="Field is a slope, potential is a height" tone=tip
Potential is like a height on a landscape; the gravitational field is how steeply it slopes, always pointing downhill. Where the potential is flat, the field is zero: inside a hollow shell, $V$ is the same everywhere, so there is no pull, which is the shell theorem again. The midpoint of two equal masses has zero field but is no resting place: it is a saddle, a pass between two hills, stable sideways and unstable along the line joining the masses.
:::

:::qc lvl=3
q: Inside a thin uniform shell the potential has the same value everywhere. What is the field there?
options: ["zero", "pointing inward", "pointing outward"]
answer: 0
right: Right. The field is the slope of the potential, and a flat landscape has no slope.
wrong: The field is the downhill slope of the potential. What is the slope of something flat?
:::

## Falling through the Earth {lvl=3 id=s-tunnel label="JEE"}

Dig a straight tunnel through the centre of a uniform Earth, smooth enough to have no friction and with the air pumped out, and drop in a capsule. The pull at distance $r$ from the centre is $g\,r/R$ and points to the centre: it grows in step with the distance, like a spring pulling you back. A mass on a spring swings back and forth with a period that depends only on the stiffness. Here, the stiffness per unit mass is $g/R$, so

$$T = 2\pi\sqrt{\frac{R}{g}} = 2\pi\sqrt{\frac{6.4\times10^6}{9.8}} \approx 5100\ \text{s} \approx 84\ \text{min}.$$

Read it as: "the round trip takes 84 minutes; the one-way trip, surface to surface, takes half of that, 42 minutes." The capsule passes the centre at $\sqrt{gR} = 7.9$ km/s.

Now the surprise. A tunnel does not have to pass through the centre. Take any straight tunnel between two points on the surface, at any slant. At a point of the tunnel, the pull is $g\,r/R$ towards the centre, and the part of it **along** the tunnel is again proportional to the distance from the tunnel's midpoint, with the same constant $g/R$. So every such tunnel gives the same period, and the trip from New Delhi to anywhere on Earth by gravity train would take 42 minutes, with no fuel [Inference: ignores friction, air and the Earth's non-uniform density; a real density profile gives about 38 minutes, which is from memory, [Unverified]].

:::qc lvl=3
q: One tunnel passes through the centre of a uniform Earth; another is a short chord near the surface. Which trip takes longer?
options: ["The one through the centre", "The chord", "They take the same time"]
answer: 2
right: Right. Both are simple back-and-forth motions with the same spring constant $g/R$, so the time is the same.
wrong: Along any straight tunnel the pull along it is proportional to the distance from the tunnel's midpoint, with the same constant. What does that say about the time?
:::

:::note title="Three 84-minute coincidences" tone=tip
$2\pi\sqrt{R/g} \approx 84$ min is also (1) the period of a satellite skimming the ground and (2) the length of day at which people on the equator would just float, because then $\omega^2R = g$. These are not three coincidences, but one: all three are the same condition, a pull of $g$ whose size sets a time of $2\pi\sqrt{R/g}$. You will meet the orbit again in a later lesson.
:::

## Subtract a hole {lvl=4 id=s-hole label="Olympiad"}

Suppose a uniform ball of density $\rho$ has a spherical hole inside it. What is the field inside the hole? Do not integrate; use superposition. The ball with the hole is the same as the full ball plus a smaller ball of the same density with **negative** mass, sitting in the hole's place. Inside a uniform ball, the field is $-\tfrac{4\pi}{3}G\rho\,\vec p$ (a straight pull towards the centre, from the formula $g\,r/R$), where $\vec p$ is the position from the centre. With the hole's centre at the position $\vec c$, the fields of the full ball and the negative ball add to

$$\vec g = -\tfrac{4\pi}{3}G\rho\,\vec p + \tfrac{4\pi}{3}G\rho\,(\vec p - \vec c) = -\tfrac{4\pi}{3}G\rho\,\vec c.$$

Read it as: "the field in the hole is the same at every point, pointing from the hole's centre to the ball's centre, with a size proportional to how far off-centre the hole sits." The $\vec p$ cancels. A mass placed anywhere inside the hole falls the same way, with the same acceleration, as if in a uniform field.

**The tide, in one line.** The Moon pulls the near side of the Earth harder than the centre, and the centre harder than the far side. The difference is $GM_m\bigl[1/(d-R)^2 - 1/d^2\bigr] \approx 2GM_mR/d^3$ for the Moon's distance $d$. With $GM_m = 4.9\times10^{12}$ and $d = 3.84\times10^8$ m [Unverified], that is about $1.1\times10^{-6}$ m/s², one part in nine million of $g$. Small, but water is free to flow sideways, and it piles up towards and away from the Moon. By the same formula, a 2 m tall person weighs a hair less at the head than at the feet: $2gh/R \approx 6\times10^{-6}$ m/s².

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Above the surface $g_h = gR^2/(R+h)^2$, which is about $g(1-2h/R)$ for small $h$; at the Space Station g is still 89% of its ground value. {lvl=1}
2. Inside a uniform Earth only the inner ball pulls, so $g_d = g(1 - d/R)$, falling to zero at the centre. {lvl=2}
3. Spin and the equatorial bulge make g a little smaller at the equator ($\omega^2R\cos^2\lambda$). {lvl=2}
4. $U = -GMm/r$ with zero at infinity; $mgh$ is its small-height form. {lvl=2}
5. Potential $V = -GM/r$ is a scalar and adds; the field is its downhill slope. {lvl=3}
6. Through any straight frictionless tunnel in a uniform Earth the one-way trip takes 42 minutes. {lvl=3}
7. A hole in a uniform ball has a uniform field inside it, found by superposition. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Measure from the **centre**, not the surface: at height $h$ the distance is $R + h$. {lvl=1}
- Do not use $g(1 - d/R)$ for heights, or $g(1-2h/R)$ for depths: the factors of 2 differ. {lvl=2}
- The depth formula needs uniform density; the real Earth is denser at the core. {lvl=2}
- Potential energy is negative with zero at infinity, so "higher" means "less negative". {lvl=2}
- $mgh$ is only for small heights; over a large climb it gives too much work (twice too much for a climb of $R$). {lvl=2}
- Add potentials as plain numbers, but add fields as vectors. {lvl=3}
:::
