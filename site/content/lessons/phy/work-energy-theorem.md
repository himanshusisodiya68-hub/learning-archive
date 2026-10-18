---
title: Work–energy theorem
summary: A shortcut that gives speeds and stopping distances straight from forces and distances, with no time and no path to track.
ncert: ["Class 9 Science · Ch 7 Work, Energy, and Simple Machines (§7.2, §7.4)", "Class 11 Physics · Ch 5 Work, Energy and Power (§5.2, §5.6)"]
up_to: Olympiad
builds_on: [Work done by a force, Kinetic and potential energy, Equations of motion]
notes_prompt: Explain to a friend why tripling a car's speed makes it need nine times the braking distance, using only the idea of work and energy.
margin:
  - kind: history
    title: History
    text: By the 1840s engineers designing steam engines had a working idea of "work" (force times distance) as the thing an engine delivers and ½mv² as what a moving body holds; Joule's paddle-wheel experiments tied both to heat. The names are usually credited to Coriolis and Poncelet [Unverified, from memory].
  - kind: tip
    title: Exam favourite
    text: "When a problem gives forces and distances and asks for a speed, or gives speeds and asks for a force or a distance, use W_net = ΔK. List every force with its sign (the ledger), add, set equal to ΔK. Never ask for time with this method."
  - kind: olympiad
    title: Olympiad link
    text: "The theorem is exact for the centre of mass of any system: F_net · d_cm = Δ(½Mv_cm²). But that product is not always real work: the road does no work on an accelerating car and the wall does none on a pushing skater. The true energy comes from internal sources (fuel, muscle)."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics (10th ed.)", ref: "Ch 7 §7-2 Work and kinetic energy, §7-3 Work done by the gravitational force, §7-5 Work done by a general variable force" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch 13 Work and Potential Energy (A) [Unverified chapter number]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 8 Work and Energy [Unverified]" }
cards:
  - { front: "State the work–energy theorem.", back: "The net work done on a body by all the forces equals the change in its kinetic energy: W_net = ½mv² − ½mu²." }
  - { front: "Why does the braking distance go as the square of the speed?", back: "The brakes must remove all the kinetic energy ½mv² with a force F over a distance d, so F d = ½mv² and d = mv²/2F, which goes as v²." }
  - { front: "A force on a body is perpendicular to its motion. What does it do to its speed?", back: "Nothing. It does no work, so K is unchanged. It can only turn the velocity." }
  - { front: "How do you use the theorem when the force varies with position?", back: "Add the work as the area under the net-force–position graph (or an integral) and set it equal to the change in ½mv²." }
  - { front: "A smooth slide of height h: speed at the bottom?", back: "v = √(2gh) for a child starting from rest, for any shape of slide. Gravity's work depends only on the height dropped, and the normal force does none." }
  - { front: "Where does the energy go when air drag or friction acts?", back: "The negative work of drag and friction takes kinetic energy away; it appears as heat in the surfaces and the air." }
core:
  idea: 'The net work done on a body by all the forces acting on it equals the change in its kinetic energy. Net positive work speeds it up, net negative work slows it down, and zero net work leaves its speed unchanged. You do not need the time or the path.'
  formulas:
    - tex: 'W_{\text{net}} = \Delta K = \tfrac12 m v^{2} - \tfrac12 m u^{2}'
      label: 'Work–energy theorem (u = initial speed, v = final speed)'
    - tex: '\int F_{\text{net}}\,dx = \tfrac12 m v^{2} - \tfrac12 m u^{2}'
      label: 'The same for a force that varies with position along a line'
  conditions:
    - 'Count the work of every force on the body: gravity, friction, normal force, push or pull'
    - 'The body is treated as a single moving point, with no hidden internal energy changing (see the Olympiad section)'
    - 'Speed and work are measured by the same inertial observer; speeds far below the speed of light'
  sign: 'ΔK > 0 means speeding up (net work positive); ΔK < 0 means slowing down (net work negative). Friction and drag always contribute negative work.'
outcomes:
  - 'State the theorem and use it to find a speed from forces and distances, or a force from speeds and distances'
  - 'Explain why stopping distance grows as the square of the speed'
  - 'Use the area under a force–position graph, or an integral, as the net work'
  - 'Find the speed at the bottom of any smooth slope or curve from its height alone'
  - 'Account for drag and friction as energy removed, and know when "work" on a system is not real work by the outside force'
opener:
  story: |
    On long mountain roads you sometimes see a strange side road that goes *uphill* off the main highway, a ramp of loose gravel. It is an escape ramp. When a truck's brakes overheat and fail on the way down, the driver steers onto it. The truck ploughs into the gravel, climbs, and stops.

    Engineers have to decide how long the ramp must be, and they must get it right the first time: too short and the truck does not stop. They cannot rely on time-of-day or the truck's exact route. They use a bookkeeping trick that ignores the details of the motion and uses only the forces and the starting speed.

    Here is the puzzle behind it. If a truck going at 30 km/h needs a ramp 10 m long, how long a ramp does a truck going three times as fast, 90 km/h, need? Triple the length feels natural. It is wrong, and the theorem in this lesson tells you by how much.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A truck with failed brakes on level ground heading for an uphill ramp of gravel"><line x1="20" y1="200" x2="300" y2="200" style="stroke:var(--ink);stroke-width:2"/><polygon points="150,200 290,120 290,200" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><circle cx="190" cy="184" r="2" style="fill:var(--muted)"/><circle cx="214" cy="178" r="2" style="fill:var(--muted)"/><circle cx="238" cy="168" r="2" style="fill:var(--muted)"/><circle cx="262" cy="170" r="2" style="fill:var(--muted)"/><circle cx="222" cy="192" r="2" style="fill:var(--muted)"/><circle cx="252" cy="190" r="2" style="fill:var(--muted)"/><circle cx="276" cy="186" r="2" style="fill:var(--muted)"/><rect x="42" y="166" width="62" height="28" rx="3" style="fill:color-mix(in srgb,var(--chem) 30%,var(--surface));stroke:var(--chem);stroke-width:2"/><circle cx="58" cy="198" r="6" style="fill:var(--ink)"/><circle cx="90" cy="198" r="6" style="fill:var(--ink)"/><line x1="110" y1="176" x2="140" y2="176" style="stroke:var(--chem);stroke-width:3"/><path d="M134 170 L146 176 L134 182Z" style="fill:var(--chem)"/><text x="40" y="154" style="font-size:12px;fill:var(--ink)">brakes failed</text><text x="196" y="108" style="font-size:12px;fill:var(--ink)">escape ramp</text><text x="52" y="226" style="font-size:12px;fill:var(--muted)">how long must it be?</text></svg>'
life:
  - 'Road-safety rules give stopping distances that grow much faster than speed: roughly four times as far when you go twice as fast, once the driver has reacted.'
  - 'A fielder draws his hands back while catching a fast cricket ball: the same energy has to be removed, and a longer stopping distance means a smaller force.'
  - 'Crumple zones and airbags make a crash last a longer distance, so the force on the passengers is smaller for the same energy.'
  - 'A hammer blow drives a nail in by a few millimetres: the hammer''s energy divided by that distance is a force of hundreds of newtons.'
  - 'A coconut falling on wet sand digs a hole whose depth you can predict from the height of the tree.'
models:
  - name: 'The ledger beats the diary'
    text: 'To know where you end up you do not have to follow every day (the diary); you just add all the deposits and withdrawals (the ledger). The theorem is a ledger for speed: add all the signed works and you have the change in K.'
  - name: 'A fixed amount spread over a longer distance means a smaller force'
    text: 'Force times distance is fixed by the energy to be absorbed. Stretch the distance and the force shrinks. This is why we bend our knees on landing, why crumple zones exist, and why a gradual deadline is easier on a team than a sudden one.'
  - name: 'Ask what you really need'
    text: 'Energy forgets time and path, so it answers speed-and-height questions quickly. When a method ignores what you do not need, use it. When you do need the time, use Newton''s law instead.'
links:
  - leaf: 'phy/equations-of-motion'
    name: 'Equations of motion'
    same: 'For a constant force the theorem is the equation v² = u² + 2ad multiplied by m/2 and written with F = ma. It is the same fact in another costume.'
    differs: 'The equation needs a steady acceleration in a straight line. The theorem works for forces that change and for curved paths, because it adds the work step by step.'
  - leaf: 'phy/momentum-and-the-second-law'
    name: 'Momentum and the second law'
    same: 'Both come from the second law. A force over a time changes momentum (F t = Δp); a force over a distance changes kinetic energy (F d = ΔK).'
    differs: 'Momentum is a vector and tracks direction; kinetic energy is a scalar and ignores direction. Use momentum when time matters (collisions), energy when distance or height matters.'
next:
  q: 'A ball thrown straight up comes back to your hand with the same speed it left with, as if gravity had returned everything it took. But slide a book across a table and nothing is ever returned. Why do some forces give the energy back and others never do?'
  leaf: 'phy/conservative-forces'
  name: 'Conservative forces'
symbols:
  - s: 'W_{\text{net}}'
    means: 'net work: the sum of the signed works of all the forces (J)'
  - s: 'K'
    means: 'kinetic energy, ½mv² (J)'
  - s: '\Delta K'
    means: 'change in kinetic energy, final minus initial (J)'
  - s: 'm'
    means: 'mass of the body (kg)'
  - s: 'u'
    means: 'speed at the start (m/s)'
  - s: 'v'
    means: 'speed at the end (m/s)'
  - s: 'F'
    means: 'a force, or the net force F_net on the body (N)'
  - s: 'd'
    means: 'distance moved along the force (m)'
  - s: 'x'
    means: 'position along a straight line (m)'
  - s: 'g'
    means: 'acceleration of free fall, 9.8 m/s²'
  - s: 'h'
    means: 'vertical height dropped or climbed (m)'
---

:::hook
q: With its brakes locked, a car moving at 36 km/h (10 m/s) skids to a stop in 10 m. With the same braking force, how far does it need from 108 km/h (30 m/s)?
options: ["30 m (three times as far)", "60 m", "90 m (nine times as far)"]
answer: 2
right: Right. Triple the speed means nine times the kinetic energy, and the same braking force can only remove energy at the same rate per metre, so it needs nine times the distance.
wrong: Do not scale the distance by the speed. The brakes have to remove all the kinetic energy, ½mv², and that goes as the speed squared. What is 3 squared?
:::

## Brakes, work and speed {lvl=1 id=s-brakes label="Class 9"}

The car of the last lesson, 1000 kg at 20 m/s, carries $\tfrac12\times1000\times20^2 = 200\,000$ J of kinetic energy. The brakes bring it to rest in 40 m. All that energy must be removed by the brakes' force acting backward over 40 m, so

$$\text{force}\times40\ \text{m} = 200\,000\ \text{J}\quad\Longrightarrow\quad\text{force} = 5000\ \text{N}.$$

We never needed the time, the road, or how the brakes work. Now keep that 5000 N and change only the speed:

| Speed | Kinetic energy | Stopping distance (5000 N) |
|---|---|---|
| 10 m/s (36 km/h) | 50 kJ | 10 m |
| 20 m/s (72 km/h) | 200 kJ | 40 m |
| 30 m/s (108 km/h) | 450 kJ | 90 m |
| 40 m/s (144 km/h) | 800 kJ | 160 m |

Double the speed, four times the distance; triple it, nine times. The distance is the energy divided by the force, and the energy goes as the square of the speed.

:::qc lvl=1
q: A car stops from a given speed in 20 m. If the braking force were twice as large, the stopping distance from the same speed would be
options: ["10 m", "20 m", "40 m"]
answer: 0
right: Right. The same energy has to go, and with twice the force each metre removes twice as much, so the distance is halved.
wrong: Force × distance = the kinetic energy, which does not change here. If force doubles, what must happen to the distance?
:::

## Net work equals change in energy {lvl=1 id=s-theorem label="Class 9"}

What the car did is the general rule. The **work–energy theorem** says:

> the net work done on a body by all the forces acting on it equals the change in its kinetic energy.

In letters, with $u$ for the starting speed and $v$ for the final speed,

$$W_{\text{net}} = \tfrac12 m v^2 - \tfrac12 m u^2.$$

Read it as: the total work of all the forces is the energy gained, final minus initial. A positive total speeds the body up, a negative total slows it down, and zero total leaves the speed alone.

Try one. A 5 kg trolley at rest is pushed by a steady 20 N over 2.5 m. The work is $20\times2.5 = 50$ J, so it gains 50 J: $\tfrac12\times5\times v^2 = 50$, giving $v = \sqrt{20} = 4.5$ m/s. You can check with the equations of motion: $a = 20/5 = 4$ m/s², and $v^2 = 2\times4\times2.5 = 20$. Same answer, and the theorem needed no acceleration at all.

**Why it must be true.** For a steady force, the motion obeys $v^2 = u^2 + 2ad$. Multiply by $m/2$: $\tfrac12mv^2 - \tfrac12mu^2 = (ma)\,d = F d$, and $Fd$ is the work. The theorem is that equation read as energy.

**Count every force.** The theorem is about the *net* work, so friction, gravity and the normal force all go in the ledger. A 20 kg crate is pushed 6 m along a floor with a 100 N push while friction pulls back with 40 N.

| Force | Work over 6 m |
|---|---|
| Push, 100 N forward | $+600$ J |
| Friction, 40 N backward | $-240$ J |
| Gravity and normal force (at right angles to the motion) | $0$ |
| **Net** | **+360 J** |

The crate gains 360 J, so $\tfrac12\times20\times v^2 = 360$ and $v = 6$ m/s.

:::qc lvl=1
q: A ball is thrown up and falls back to the thrower's hand, with air resistance. When it returns, compared with its throwing speed, its speed is
options: ["larger", "the same", "smaller"]
answer: 2
right: Right. Over the round trip gravity's work is zero, but air drag always does negative work, so the net work is negative and the kinetic energy is less.
wrong: Gravity helps on the way down as much as it hinders on the way up. What does air resistance do over the whole trip: help, hinder, or neither?
:::

## When the force varies {lvl=2 id=s-var label="Class 11"}

For a force that changes along the way, split the path into tiny steps $dx$. On each step the second law gives $F = m\,dv/dt$, and since $dv/dt = v\,dv/dx$,

$$F\,dx = m v\,dv.$$

Read it as: the work on each tiny step equals the tiny change in $\tfrac12mv^2$. Adding all the steps from start to finish gives

$$\int F_{\text{net}}\,dx = \tfrac12 mv^2 - \tfrac12 mu^2.$$

On a graph this is the **area under the net-force–position graph**, equal to the energy gained.

:::worked title="How far does a block go into a sticky patch?"
A 0.5 kg block slides at 4 m/s onto a patch where the resisting force grows with the depth $x$ (in metres) as $F = -8x$ newtons. How far in does it stop?

Its energy is $\tfrac12\times0.5\times4^2 = 4$ J. The resisting work over a depth $x$ is minus the area of a triangle: $-\tfrac12\times(8x)\times x = -4x^2$ J. It stops when the work removes all the energy: $4x^2 = 4$, so $x = 1$ m. We never solved for the motion in time.
:::

:::qc lvl=2
q: A 2 kg block starts at rest. The net force on it grows steadily from 0 to 8 N over the first 3 m. How fast is it going after 3 m?
options: ["About 3.5 m/s", "About 6 m/s", "About 12 m/s"]
answer: 0
right: Right. The area under the graph is ½ × 3 × 8 = 12 J, so ½ × 2 × v² = 12, v = √12 = 3.5 m/s.
wrong: Find the area under the force–distance graph (a triangle), set it equal to ½mv², and solve.
:::

## Same height, same speed {lvl=2 id=s-height label="Class 11"}

A child slides from rest down a smooth slide of height 3 m. Gravity pulls with $mg$ and the slide's push (the normal force) is at right angles to the motion, so it does no work. Gravity's work on each short bit of the slide is its weight times the *vertical* drop on that bit. Adding all the bits gives weight times the total vertical drop, $mgh$, whatever the shape.

So $\tfrac12mv^2 = mgh$ and $v = \sqrt{2gh}$, which for 3 m is $\sqrt{2\times9.8\times3} = 7.7$ m/s. The mass cancels, just like in free fall.

:::figure caption="Three smooth slides with the same drop h. A child released from rest reaches the bottom at the same speed on all three, because gravity's work depends only on the vertical drop. The times are different."
<svg viewBox="0 0 360 210" role="img" aria-label="Three smooth paths of different shapes from the same height to the same level">
<line class="faint" x1="20" y1="30" x2="360" y2="30"/>
<line class="ln" x1="20" y1="170" x2="350" y2="170"/>
<line class="ln" x1="22" y1="30" x2="22" y2="170"/>
<text class="k" x="28" y="104">h</text>
<path class="ray" d="M40 30 L300 170"/>
<path class="wf" d="M40 30 C 40 130 120 170 230 170"/>
<path class="ln" d="M40 30 C 160 30 340 60 340 170"/>
<circle class="obj" cx="40" cy="30" r="5"/>
<text x="58" y="26">start (from rest)</text>
<text x="56" y="196">same speed v = √(2gh) at the bottom</text>
</svg>
:::

More generally, at any height $y$ below the start, $v^2 = u^2 + 2gy$; going up, $v^2 = u^2 - 2gy$. A thrown ball is such a case. In the simulator below, change the angle: the path changes shape, but the ball always lands at the speed it was launched with, because gravity's work from the ground back to the ground is zero (negative going up, the same positive coming down).

:::widget name=projectile u=20 angle=30
:::

:::qc lvl=2
q: Three smooth slides have the same height but different shapes. A child starts from rest at the top of each. The speed at the bottom is
options: ["highest on the steepest slide", "highest on the longest slide", "the same on all three"]
answer: 2
right: Right. The speed depends only on the height. The steep slide is quicker to ride, but the speed at the bottom is the same.
wrong: Gravity's work depends only on the vertical drop, and the normal force does none. Compare the heights of the three slides.
:::

## Where did the energy go? {lvl=3 id=s-drag label="JEE"}

Friction and drag are forces too, so they appear in the ledger, always with a minus sign: they point against the motion. If gravity is the only other force, the theorem reads

$$W_{\text{gravity}} + W_{\text{drag}} = \tfrac12mv^2 - \tfrac12mu^2.$$

Read it as: what gravity gives, minus what the air takes, is what the body keeps.

:::worked title="A parachutist"
A 70 kg parachutist jumps from a hovering balloon and lands 800 m below at 5 m/s.

Gravity's work: $70\times9.8\times800 = 548\,800$ J. Kinetic energy gained: $\tfrac12\times70\times5^2 = 875$ J. So the air did $875 - 548\,800 = -547\,925$ J.

More than 99.8% of the energy that gravity supplied was carried off by the air, as heat in the parachute and the air. That is the whole point of a parachute.
:::

Notice what we avoided: the drag force changes with speed in a complicated way, and we did not need to know it. The theorem fixes the *total* work from the start and the end alone. The next lesson makes the "carried off" idea precise.

## Speed given as a function of position {lvl=3 id=s-vx label="JEE"}

Sometimes the problem hands you the speed as a formula in position. Then the net work between two positions is just the change in $\tfrac12mv^2$, and no force law is needed. A 0.5 kg particle with $v = 4x$ (in m/s, with $x$ in metres) moving from $x = 0$ to $x = 2$ m has speeds 0 and 8 m/s, so the net work is $\tfrac12\times0.5\times8^2 = 16$ J. As a check, $F = mv\,dv/dx = 0.5\times4x\times4 = 8x$ N, and $\int_0^2 8x\,dx = 16$ J.

The fastest point of a motion is where the net force changes sign: before it the work is positive (the body speeds up), after it negative (it slows down). So set $F_{\text{net}} = 0$ to locate the maximum speed, then use the theorem to get its value.

## Work you cannot see {lvl=4 id=s-hidden label="Olympiad"}

A skater stands facing a wall, pushes it, and glides away at 1.5 m/s. She gains $\tfrac12\times40\times1.5^2 = 45$ J. The wall pushed her, so did the wall do 45 J of work? No. The wall's push acts on her hands, and the point where the wall's force touches her does not move relative to the wall: its displacement is zero, so the wall's work on her is zero. The 45 J came from her muscles, an internal energy source.

A car does the same trick. The road's friction pushes the car forward, but the driven wheel's contact patch is momentarily at rest on the road, so the road does no work. The kinetic energy comes from the fuel.

What survives is the **centre-of-mass form** of the theorem, true for any system:

$$F_{\text{net}}\cdot d_{\text{cm}} = \Delta\!\left(\tfrac12Mv_{\text{cm}}^2\right).$$

Read it as: the net outside force times the distance the centre of mass moves equals the change in the energy of the centre of mass. It tells you the speed of the centre of mass, but not where the energy came from. The real-work version holds if internal work is counted as well. Finally, remember that W and ΔK each depend on the observer; the equation between them holds for every observer who moves at steady velocity.

:::qc lvl=4
q: A skater pushes off a wall and glides away. The work done on her by the wall is
options: ["positive and equal to her kinetic energy", "zero", "negative"]
answer: 1
right: Right. The wall's force acts at a point that does not move, so it does no work. Her kinetic energy comes from her muscles.
wrong: Work is force times the displacement of the point where the force acts. Does the wall's surface move?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The net work done on a body equals its change in kinetic energy: $W_{\text{net}} = \tfrac12mv^2 - \tfrac12mu^2$. {lvl=1}
2. Stopping distance goes as the speed squared, because the brakes must remove $\tfrac12mv^2$ at $F$ per metre. {lvl=1}
3. Count every force's work with its sign; zero net work means constant speed. {lvl=1}
4. For a varying force, net work is the area under the force–position graph, $\int F\,dx$. {lvl=2}
5. On a smooth slope, speed at the bottom is $\sqrt{2gh}$ whatever the shape, because only vertical drop counts. {lvl=2}
6. Drag and friction take energy away; the theorem gives their total work from the start and end alone. {lvl=3}
7. The centre-of-mass form of the theorem holds for any system, but "work" of a wall or road on a pushing body can be zero while its energy rises. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Use the **net** work. Forgetting friction or gravity in the ledger is the commonest error. {lvl=1}
- The theorem has no time in it. If a question needs time, use Newton's second law or the equations of motion. {lvl=1}
- Forces at right angles to the motion (normal force on a smooth slide, tension on a whirled stone) do no work and cannot change the speed. {lvl=2}
- On a varying force, do not multiply the final force by the distance: find the area under the graph. {lvl=2}
- The theorem gives the change in $\tfrac12mv^2$, so a negative total does not mean negative speed: it means the body slows down. {lvl=2}
- Friction does negative work only if the body slides against it; static friction on an accelerating crate can do positive work. {lvl=3}
:::
