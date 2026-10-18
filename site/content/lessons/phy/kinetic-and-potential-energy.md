---
title: Kinetic and potential energy
summary: Why a ball dropped from four times the height lands only twice as fast, and the two kinds of energy that explain it.
ncert: ["Class 9 Science · Ch 7 Work, Energy, and Simple Machines (§7.2–7.4)", "Class 11 Physics · Ch 5 Work, Energy and Power (§5.4, §5.7)"]
up_to: Olympiad
builds_on: [Work done by a force, Equations of motion, Momentum and the second law]
notes_prompt: Explain to a ten-year-old why a car going twice as fast is four times as dangerous, and what happens to the energy of a stone as it falls.
margin:
  - kind: history
    title: History
    text: In the 1680s Leibniz argued that the real measure of a moving body is mv², which he called vis viva ("living force"). Later experiments dropping balls into soft clay found a ball moving twice as fast made a dent about four times as deep, and Émilie du Châtelet defended the mv² rule in the 1740s [Unverified details, from memory]. The word "kinetic energy" came in the nineteenth century.
  - kind: tip
    title: Exam favourite
    text: "Speed doubles, energy quadruples. Momentum doubles, energy quadruples. Height doubles, potential energy doubles. And K = p²/2m: for the same momentum, the lighter body has the larger energy."
  - kind: olympiad
    title: Olympiad link
    text: "A spread-out body has potential energy M g h_cm, with its centre of mass standing in for all of it. Its kinetic energy splits into the energy of the centre of mass plus the energy of motion about it, and only the second part can ever become heat in a collision."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics (10th ed.)", ref: "Ch 7 §7-1 Kinetic energy; Ch 8 §8-1 Work and potential energy" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch 4 Conservation of Energy; Ch 13 Work and Potential Energy (A) [Unverified chapter numbers]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 8 Work and Energy [Unverified]" }
cards:
  - { front: "Formula for kinetic energy, and what it means?", back: 'K = ½ m v². The energy a body has because it moves. It is never negative, and it does not depend on direction.' }
  - { front: "A car doubles its speed. What happens to its kinetic energy?", back: "It becomes four times as large, because K goes as the square of the speed." }
  - { front: "Formula for gravitational potential energy near the ground?", back: 'U = m g h: mass × 9.8 × height above the level you chose as zero.' }
  - { front: "Does it matter where you put the zero of potential energy?", back: "No. Only differences of U matter, and every choice of zero gives the same change when the body moves." }
  - { front: "Kinetic energy in terms of momentum?", back: 'K = p²/(2m). For equal momentum the lighter body has more energy; for equal energy the lighter body has less momentum.' }
  - { front: "Where is the potential energy of a long rope or plank?", back: 'At its centre of mass: U = M g h_cm. Lifting a plank flat to upright raises its centre by half its length.' }
core:
  idea: 'Energy is a number that measures what a body could do to others. A moving body has kinetic energy, half its mass times its speed squared. A raised body has potential energy, its weight times its height above a level you choose. Falling swaps one for the other.'
  formulas:
    - tex: 'K = \tfrac12\,m v^{2} = \dfrac{p^{2}}{2m}'
      label: 'Kinetic energy: the energy of motion'
    - tex: 'U = m g h'
      label: 'Gravitational potential energy near the ground: the energy of height'
    - tex: 'U = M g\,h_{\text{cm}}'
      label: 'For a spread-out body, h_cm is the height of its centre of mass'
  conditions:
    - 'K = ½mv² holds for speeds far below the speed of light, and v is measured in one chosen frame'
    - 'U = mgh needs g to stay (nearly) constant, so h must be tiny compared with the Earth radius, 6400 km'
    - 'The zero of potential energy is your free choice; only changes in U carry meaning'
  sign: 'K is never negative. U may be negative: it is simply below the level you called zero.'
outcomes:
  - 'Explain why speed enters kinetic energy squared, and use it to compare real vehicles'
  - 'Compute potential energy and, more importantly, changes in it, with any zero level'
  - 'Find the speed of a falling body from its height without using time'
  - 'Use K = p²/2m to compare bodies with equal momentum or equal energy'
  - 'Find the potential energy of a rope or plank from its centre of mass, and know when mgh stops being accurate'
opener:
  story: |
    Drop a rubber ball from a height of 1 m, about the height of your waist. It smacks the floor at roughly 4.4 m/s, a slow cyclist's speed. Now stand on a table and drop it from 4 m, four times higher. Your gut says it hits four times as fast.

    Hold that thought, because there is a trap in it. Height and speed are not the same kind of thing, and nature does not trade one for the other one-for-one. Something else is being swapped between them.

    That something is **energy**. It is why the posters beside highways say speed kills (doubling your speed does far more than double the damage), and why a water tank on a roof can push water to the taps with no pump. This lesson is about the two forms of energy you can see with your own eyes: the energy of motion and the energy of height.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A ball dropped from 1 metre and from 4 metres; the speed bar on landing is only twice as long for the higher drop"><line x1="20" y1="180" x2="300" y2="180" style="stroke:var(--ink);stroke-width:2"/><circle cx="90" cy="140" r="10" style="fill:color-mix(in srgb,var(--c) 30%,var(--surface));stroke:var(--c);stroke-width:2"/><line x1="90" y1="152" x2="90" y2="180" style="stroke:var(--muted);stroke-dasharray:3 4"/><line x1="52" y1="140" x2="52" y2="180" style="stroke:var(--ink)"/><line x1="47" y1="140" x2="57" y2="140" style="stroke:var(--ink)"/><line x1="47" y1="180" x2="57" y2="180" style="stroke:var(--ink)"/><text x="22" y="164" style="font-size:12px;fill:var(--muted)">1 m</text><circle cx="230" cy="20" r="10" style="fill:color-mix(in srgb,var(--c) 30%,var(--surface));stroke:var(--c);stroke-width:2"/><line x1="230" y1="32" x2="230" y2="180" style="stroke:var(--muted);stroke-dasharray:3 4"/><line x1="192" y1="20" x2="192" y2="180" style="stroke:var(--ink)"/><line x1="187" y1="20" x2="197" y2="20" style="stroke:var(--ink)"/><line x1="187" y1="180" x2="197" y2="180" style="stroke:var(--ink)"/><text x="160" y="104" style="font-size:12px;fill:var(--muted)">4 m</text><rect x="58" y="196" width="44" height="10" rx="2" style="fill:var(--chem)"/><rect x="198" y="196" width="88" height="10" rx="2" style="fill:var(--chem)"/><text x="40" y="226" style="font-size:12px;fill:var(--muted)">speed on landing: v</text><text x="204" y="226" style="font-size:12px;fill:var(--ink)">2v, not 4v</text></svg>'
life:
  - 'A car at 60 km/h carries four times the crash energy of the same car at 30 km/h, which is why speed limits outside schools are low.'
  - 'An overhead water tank on the roof stores energy as height; opening a tap turns it into the motion of water, with no pump.'
  - 'Hydroelectric dams, such as Bhakra or Tehri, turn the potential energy of a lake held high into the kinetic energy of falling water, then into electricity.'
  - 'A cricket ball bowled at 150 km/h carries about 170 J: as much as lifting an 18 kg bag by one metre.'
  - 'A stretched catapult or a wound clock spring stores energy in its shape and gives it back as motion.'
models:
  - name: 'Energy as bank balance'
    text: 'Energy is like money in several accounts: motion in one, height in another, heat in a third. Transfers happen, the accounts rise and fall, and the total tells the real story. Ask where a quantity is stored, not only how much of it there is.'
  - name: 'Squares hide in everyday risk'
    text: 'When the damage grows with the square of something (speed here, distance for light and sound), doubling it is not "twice as bad". Be careful with any quantity whose effect grows faster than the quantity itself.'
  - name: 'Only differences matter'
    text: 'The zero of potential energy is a choice, like sea level for heights or the freezing point for temperatures. Compare changes, not absolute readings, and you stop arguing about where zero should be.'
links:
  - leaf: 'phy/momentum-and-the-second-law'
    name: 'Momentum and the second law'
    same: 'Both measure "how much motion" a body has and both grow with mass and speed. Momentum is mv, kinetic energy is ½mv², and K = p²/2m links them.'
    differs: 'Momentum is a vector, changes by force × time and is conserved in every collision. Energy is a scalar, changes by force × distance, and can be turned into heat.'
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'Potential energy near the ground, mgh, is the small-height version of the energy of two masses pulling on each other.'
    differs: 'Far from the Earth the pull weakens, so mgh overestimates; the exact potential energy falls as 1/r and is zero at infinity, so it is negative everywhere else.'
next:
  q: 'A car carries 200 kJ of kinetic energy at 20 m/s and the brakes stop it in 40 m. How hard did the brakes push, and can you work it out without knowing the time or any detail of how the brakes act?'
  leaf: 'phy/work-energy-theorem'
  name: 'Work–energy theorem'
symbols:
  - s: 'K'
    means: 'kinetic energy, the energy of motion (joule, J)'
  - s: 'm'
    means: 'mass of the body (kg)'
  - s: 'v'
    means: 'speed of the body (m/s)'
  - s: 'U'
    means: 'gravitational potential energy, the energy of height (J)'
  - s: 'h'
    means: 'height above the level chosen as zero (m)'
  - s: 'g'
    means: 'acceleration of free fall, 9.8 m/s² (taken as 10 where stated)'
  - s: 'p'
    means: 'momentum, mass times velocity (kg m/s)'
  - s: 'M'
    means: 'total mass of a spread-out body (kg)'
  - s: 'h_{\text{cm}}'
    means: 'height of the centre of mass above the zero level (m)'
  - s: 'R'
    means: 'radius of the Earth, about 6400 km'
---

:::hook
q: Dropped from 1 m, a ball hits the floor at about 4.4 m/s. Ignoring air, at what speed does it hit if you drop it from 4 m?
options: ["About 8.8 m/s (twice as fast)", "About 13 m/s (three times as fast)", "About 17.7 m/s (four times as fast)"]
answer: 0
right: Right. Four times the height gives only twice the speed. Height and speed are linked through energy, and the speed enters energy squared. Below you will see exactly why.
wrong: That is the natural guess: four times higher, four times faster. But test it with the equation for a fall, v² = 2gh. If v² goes with h, what does v go with?
:::

## What a fall buys {lvl=1 id=s-fall label="Class 9"}

From the equations of motion, a ball dropped from rest through a height $h$ lands with $v^2 = 2gh$. For $h = 1$ m and $g = 9.8$ m/s², $v^2 = 19.6$ and $v = 4.4$ m/s. For $h = 4$ m, $v^2 = 78.4$ and $v = 8.85$ m/s. Four times the height multiplies $v^2$ by four, so it multiplies $v$ by only two.

Now do something that looks like magic: multiply both sides of $v^2 = 2gh$ by half the mass of the ball.

$$\tfrac12\,m v^2 = m g h.$$

Read it as: half the mass times speed squared equals mass times 9.8 times height. The right side is a quantity you can feel: how much height the ball gave up, weighted by its mass. The left side is what that height turned into: motion. Each side gets a name.

The quantity on the left, one half times the mass times the speed squared, is the **kinetic energy**, $K$: the energy a body has because it moves. The quantity on the right, mass times $g$ times height, is the **gravitational potential energy**, $U$: the energy a body has because it was lifted. Both are measured in joules, the unit of work from the last lesson.

| Dropped from | Speed on landing | Kinetic energy (1 kg ball) |
|---|---|---|
| 1 m | 4.4 m/s | 9.8 J |
| 4 m | 8.9 m/s | 39.2 J |
| 9 m | 13.3 m/s | 88.2 J |

Energy grows steadily with height; speed grows only as the square root. That is the answer to the opener: 4 times the height, 4 times the energy, 2 times the speed.

:::qc lvl=1
q: A ball dropped from 9 m lands at about 13 m/s. About how fast does it land if dropped from 1 m?
options: ["About 1.5 m/s", "About 4.4 m/s", "About 6.6 m/s"]
answer: 1
right: Right. One ninth of the height means one third of the speed, 13.3 / 3 = 4.4 m/s. Speed goes as the square root of the height.
wrong: Height is 9 times smaller. Speed goes as the square root of the height. What is the square root of 9?
:::

## Why speed is squared {lvl=1 id=s-kinetic label="Class 9"}

For a body of mass $m$ moving at speed $v$,

$$K = \tfrac12\,m v^2.$$

Read it as: half the mass, times the speed, times the speed again. Because the speed appears twice, doubling it quadruples the energy, and tripling it multiplies the energy by nine.

The cricket ball in the textbook, 0.2 kg at 154.8 km/h (43 m/s), has $K = \tfrac12\times0.2\times43^2 = 185$ J, about the work needed to lift a 19 kg bag of cement by 1 m. Some other numbers to feel the scale:

| Moving body | Mass | Speed | Kinetic energy |
|---|---|---|---|
| Cyclist and bike | 80 kg | 5 m/s | 1 000 J |
| Rifle bullet | 0.05 kg | 200 m/s | 1 000 J |
| Car at 72 km/h | 1000 kg | 20 m/s | 200 000 J |
| Same car at 144 km/h | 1000 kg | 40 m/s | 800 000 J |

A bullet carries as much energy as the cyclist in 1/1600 of the mass, because the speed is squared. And the same car at double the speed carries four times the energy, all of which must be absorbed in a crash. Kinetic energy has no direction: a car going north and one going south at the same speed have the same $K$, and $K$ is never negative.

:::qc lvl=1
q: A car speeds up from 20 m/s to 30 m/s. By what factor does its kinetic energy grow?
options: ["1.5", "2.25", "3"]
answer: 1
right: Right. The speed grows by 1.5 and the energy by 1.5² = 2.25.
wrong: Energy goes as the square of the speed. The speed grew by a factor 30/20 = 1.5; square that.
:::

## Energy of position {lvl=1 id=s-potential label="Class 9"}

Lifting a thing takes work against gravity, and that work does not vanish. It is stored, ready to be returned as motion when the thing falls. To lift a mass $m$ through a height $h$ you must push up with a force equal to its weight, $mg$, over the distance $h$, so the work is $mgh$:

$$U = m g h.$$

Read it as: mass, times 9.8, times height above the starting level. A 5 kg bag raised 2 m stores $5\times9.8\times2 = 98$ J. A 1000-litre rooftop tank (1000 kg of water) 10 m up stores 98 000 J, which is why opening the tap on the ground floor makes the water run with no pump.

Two things to notice. First, only the **height** matters: carrying the bag sideways at constant height adds nothing to $U$, and it does not matter how winding the stairs were. Second, the energy is shared: it belongs to the pair, the bag and the Earth, not to the bag alone. We say "the bag's potential energy" for short.

:::qc lvl=1
q: A porter carries a 20 kg suitcase 100 m along a level platform. How much does the suitcase's potential energy change?
options: ["About 19 600 J", "About 200 J", "None"]
answer: 2
right: Right. The height does not change, so U does not change, however far he walks.
wrong: U = mgh depends on height only. Did the height change?
:::

## Zero is your choice {lvl=2 id=s-zero label="Class 11"}

"Height above what?" The floor, the table, the sea? Any level will do, because physics only ever uses **changes** in $U$, and a change is the same whatever level you called zero.

:::figure caption="A 2 kg flower pot on a shelf 3 m above the floor and on a table 1 m above it. Moving it from shelf to table lowers U by 39.2 J, whichever level is called zero."
<svg viewBox="0 0 360 210" role="img" aria-label="A flower pot on a shelf and on a table, with the heights above the floor">
<line class="ln" x1="20" y1="190" x2="340" y2="190"/>
<line class="ln" x1="40" y1="70" x2="120" y2="70"/>
<rect class="m2" x="64" y="46" width="32" height="24" style="stroke:var(--ink);stroke-width:1.4"/>
<line class="ln" x1="220" y1="150" x2="300" y2="150"/>
<line class="ln" x1="232" y1="150" x2="232" y2="190"/><line class="ln" x1="288" y1="150" x2="288" y2="190"/>
<rect class="m2" x="244" y="126" width="32" height="24" style="stroke:var(--ink);stroke-width:1.4"/>
<line class="faint" x1="80" y1="70" x2="80" y2="190"/>
<text x="86" y="136">3 m above floor</text>
<line class="faint" x1="260" y1="150" x2="260" y2="190"/>
<text x="266" y="176">1 m</text>
<path class="wf" d="M120 60 C170 60 200 90 236 120"/>
<text class="k" x="140" y="48">moved: ΔU = −39.2 J</text>
<text x="40" y="206">shelf: pot 2 kg</text>
</svg>
:::

| Zero level | U on the shelf | U on the table | Change |
|---|---|---|---|
| the floor | $2\times9.8\times3 = 58.8$ J | $2\times9.8\times1 = 19.6$ J | $-39.2$ J |
| the table top | $2\times9.8\times2 = 39.2$ J | $0$ | $-39.2$ J |
| the shelf | $0$ | $-39.2$ J | $-39.2$ J |

Same change in every row. Notice the last row: $U$ can be negative, simply meaning "below the level I called zero". Kinetic energy has no such freedom. Speed is measured against something too (the road, the train), but once the observer is fixed, $K$ is a definite number that is zero only at rest.

:::qc lvl=2
q: A book is moved from a shelf 2.0 m high to a table 0.8 m high. One student puts the zero at the floor, another at the table. Their values for the change in the book's potential energy are
options: ["different, since the starting values differ", "the same, negative", "the same, positive"]
answer: 1
right: Right. The book goes down 1.2 m. Both students find the same change, −1.2 × mg joules. Only differences carry meaning.
wrong: The two students disagree about the value of U at each place, but not about the difference. Which way did the book move, and does that depend on where zero is?
:::

## Energy and momentum {lvl=2 id=s-p label="Class 11"}

Momentum is $p = mv$. Square it and divide by $2m$:

$$\frac{p^2}{2m} = \frac{(mv)^2}{2m} = \tfrac12 m v^2 = K.$$

Read it as: energy is momentum squared over twice the mass. This gives two quick rules. With **equal momentum**, the lighter body has the larger energy (a body of mass $m$ against one of mass $4m$: $K$ is 4 to 1). With **equal energy**, $v$ goes as $1/\sqrt m$: a proton is 1836 times heavier than an electron, so at the same kinetic energy it moves $\sqrt{1836}\approx43$ times slower.

The two quantities do different jobs. Momentum is a vector and is conserved in every collision; energy is a scalar and can leak away as heat and sound. You will need both.

## Tricks for spread-out bodies and percentages {lvl=3 id=s-tricks label="JEE"}

**A rope, chain or plank.** Each small piece has its own height, and the potential energy is the sum $\sum m_i g h_i$. Since the centre of mass height is $h_{\text{cm}} = \sum m_ih_i/M$, the total is

$$U = M g\,h_{\text{cm}}.$$

Read it as: treat the whole body as a single point of mass $M$ sitting at its centre. A uniform 20 kg plank 3 m long, lying flat and stood upright on one end, has its centre raised from near 0 to 1.5 m, so the work done is $20\times9.8\times1.5 = 294$ J. No need to add up pieces.

**Percentages.** Because $K\propto v^2$ and $K = p^2/2m$, small changes follow quick rules: 1% more speed gives about 2% more kinetic energy. Exactly: 21% more momentum or speed gives $1.21^2 = 1.46$, so 46% more energy, and in reverse a 44% rise in $K$ means $v$ rose by $\sqrt{1.44}-1 = 20\%$.

:::qc lvl=3
q: A body's kinetic energy rises by 21% at the same mass. Its speed rose by
options: ["10%", "21%", "46%"]
answer: 0
right: Right. 1.10² = 1.21, so 10% more speed gives 21% more energy.
wrong: K goes as v². Which factor, squared, gives 1.21?
:::

**When mgh stops being true.** The formula $U = mgh$ assumes the pull stays $mg$ all the way up. Really it falls as $1/r^2$: at distance $r$ from the Earth's centre the pull is $mgR^2/r^2$ ($R$ = Earth's radius). Lifting from $R$ to $R+h$ means adding up this changing force (the area under its graph, as in the last lesson):

$$\Delta U = mgR^2\left(\frac1R - \frac1{R+h}\right) = mgh\cdot\frac{R}{R+h}.$$

Read it as: the true change is $mgh$ times a correcting factor $R/(R+h)$. For a 10 m climb the factor is 0.9999984, so $mgh$ is fine. For $h = R$ (6400 km up) the factor is $\tfrac12$ and $mgh$ is twice too big.

## Whose speed? {lvl=4 id=s-frame label="Olympiad"}

Kinetic energy depends on the observer. A 1 kg ball thrown forward at 5 m/s inside a train going 20 m/s has $K = 12.5$ J for a passenger and $K = \tfrac12\cdot1\cdot25^2 = 312.5$ J for someone on the platform. Neither is wrong. What every observer agrees on is the *change* in energy for a given event, as the next lesson shows.

Splitting the motion helps. The kinetic energy of any system is the energy of its centre of mass plus the energy of motion about it:

$$K_{\text{total}} = \tfrac12 M v_{\text{cm}}^2 + K_{\text{about cm}}.$$

Read it as: total energy equals the energy of "everything moving as one lump" plus the energy of the internal jostling. Two 1 kg carts moving the same way at 3 m/s and 1 m/s have $K = 4.5 + 0.5 = 5$ J. Their centre of mass moves at 2 m/s, which accounts for $\tfrac12\cdot2\cdot2^2 = 4$ J. The remaining **1 J** is the internal part. If the carts collide and stick, they end up moving together at 2 m/s, so at most that 1 J can become heat. The 4 J belongs to the lump and cannot be touched without outside help.

:::qc lvl=4
q: Two identical 1 kg carts move the same way at 3 m/s and 1 m/s on a smooth track. They collide and stick together. The most energy that can be turned to heat is
options: ["1 J", "4 J", "5 J"]
answer: 0
right: Right. Only the part of the energy that belongs to the motion about the centre of mass can be lost. The centre of mass keeps its 4 J.
wrong: Momentum is conserved, so the centre of mass keeps moving at 2 m/s with its 4 J. Subtract that from the 5 J total.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Falling swaps height for speed: $\tfrac12mv^2 = mgh$ for a drop from rest, so speed goes as the square root of the height fallen. {lvl=1}
2. Kinetic energy $K = \tfrac12mv^2$ is never negative; doubling the speed quadruples it. {lvl=1}
3. Potential energy $U = mgh$ depends on height only, not on path or sideways distance. {lvl=1}
4. The zero of $U$ is your choice; changes in $U$ are the same for every choice. {lvl=2}
5. $K = p^2/2m$: for equal momentum the light body has more energy; for equal energy it moves faster. {lvl=2}
6. A spread-out body has $U = Mgh_{\text{cm}}$; $mgh$ is only the small-height version of the true potential energy. {lvl=3}
7. Kinetic energy depends on the observer; the total splits into centre-of-mass energy plus energy about it. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Speed is squared in $K$. Doubling speed does not double energy; it quadruples it. {lvl=1}
- Do not use $h$ as the distance walked or the length of the slope: it is the **vertical** height. {lvl=1}
- Energy in joules needs mass in kg and speed in m/s: convert km/h by dividing by 3.6. {lvl=1}
- $U$ can be negative and that is fine; $K$ cannot. {lvl=2}
- For a rope or plank use the height of the centre of mass, and be careful with what is lifted (a chain hanging over an edge lifts only the hanging part's centre). {lvl=3}
- Do not apply $mgh$ to heights comparable to the Earth's radius. {lvl=3}
:::
