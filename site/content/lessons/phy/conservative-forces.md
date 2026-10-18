---
title: Conservative forces
summary: Why a water slide's shape does not change your speed at the bottom, and the simple test that tells which forces let you store energy.
ncert: ["Class 9 Science · Ch 7 Work, Energy and Power (§7.4.2–7.4.3)", "Class 11 Physics · Ch 5 Work, Energy and Power (§5.7 Concept of potential energy, §5.8 Conservation of mechanical energy, §5.9 Potential energy of a spring)"]
up_to: Olympiad
builds_on: [Work done by a force, Kinetic and potential energy, Work–energy theorem]
notes_prompt: Explain to a friend why two water slides of the same height, one straight and one spiral, give the same speed at the bottom, and why this stops being true once friction matters.
margin:
  - kind: history
    title: History
    text: "The idea that one quantity is conserved through all the changes of nature was pinned down in the 1840s by Joule, Mayer and Helmholtz, who each came at it from a different side: heat, food and machines [Unverified dates]. Before that, people spoke of the conservation of vis viva, the old name for twice the kinetic energy."
  - kind: tip
    title: Exam habit
    text: "Draw two snapshots, the start and the end, and write kinetic plus potential energy at each. Ask one question first: does anything other than gravity or a spring do work? If friction does, add its negative work to the end side."
  - kind: olympiad
    title: Olympiad link
    text: "Near any stable equilibrium, every smooth potential energy curve looks like a parabola, so every small wobble is simple harmonic. The effective spring constant is the curvature of the potential at its bottom."
books:
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 8 Potential Energy and Conservation of Energy [Unverified chapter number]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 4 Conservation of Energy; Ch. 13 Work and Potential Energy (A); Ch. 14 Work and Potential Energy (conclusion) [Unverified chapter numbers] (feynmanlectures.caltech.edu)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapter on Work and Energy [Unverified chapter reference]" }
cards:
  - { front: "What makes a force conservative?", back: "The work it does between two points depends only on the two points, not on the path. Equivalently, the work around any closed loop is zero." }
  - { front: "Is friction conservative?", back: "No. It always opposes the motion, so it does negative work on every step. A longer path means more work lost, and a round trip does not cancel it." }
  - { front: "Relation between a conservative force's work and potential energy?", back: "$W = -\\Delta U$: when the force does positive work, the potential energy goes down." }
  - { front: "Energy stored in a spring stretched or compressed by $x$?", back: "$U = \\tfrac12 kx^2$, the area of the triangle under the force–compression graph. Double the squeeze, four times the energy." }
  - { front: "Conservation of mechanical energy, in one line?", back: "If only conservative forces do work, $K + U$ stays the same: $\\tfrac12mv^2 + U$ at the start equals the same at the end." }
  - { front: "How do you get the force from a potential energy curve?", back: "$F = -dU/dx$: minus the slope. Valleys are stable equilibria, hilltops unstable, and the total energy line fixes the turning points." }
core:
  idea: 'A force is conservative when the work it does depends only on where you start and where you end. Such a force lets you store the work as potential energy $U$, and then kinetic plus potential energy stays constant: $K + U = \text{constant}$.'
  formulas:
    - tex: 'W_{A\to B} = -\,(U_B - U_A)'
      label: 'Work done by a conservative force'
    - tex: 'U_{\text{gravity}} = mgh,\qquad U_{\text{spring}} = \tfrac12 kx^2'
      label: 'Two potential energies you will use constantly'
    - tex: '\tfrac12 mv_1^2 + U_1 = \tfrac12 mv_2^2 + U_2'
      label: 'Conservation of mechanical energy'
  conditions:
    - 'Only conservative forces (gravity, an ideal spring, the electric force) do work; forces like the normal force or string tension may act, but only if they do no work'
    - 'Friction, air drag and anything else that depends on the path are absent, or their work is added separately as $W_{nc}$'
    - 'For the spring: ideal Hooke behaviour, force proportional to stretch, spring massless'
  sign: 'Positive work by a conservative force means the potential energy falls. Only differences of $U$ matter, so you may put the zero level anywhere, but do it once and keep to it.'
outcomes:
  - 'Explain why the speed at the bottom of a frictionless slide depends only on its height'
  - 'Decide whether a force is conservative using the path test and the closed-loop test'
  - 'Find the energy stored in a spring and use it to launch, stop or catch a body'
  - 'Solve speed and height problems by writing K + U at the start and at the end, adding the work of friction when present'
  - 'Read a potential energy curve: turning points, forbidden regions, stable and unstable equilibrium, and the force from the slope'
opener:
  story: |
    Picture a water park with two slides side by side. One is a plain straight chute. The other twists and spirals like a corkscrew. Both start at exactly the same height, and both end in the same pool.

    Two children, the same weight, sit at the tops. Someone shouts "go!" Everyone looks at the corkscrew and thinks: that long winding path must slow her down, or maybe all those turns make her faster. So who is moving faster when they hit the water?

    The answer is annoying and beautiful: **exactly the same speed**. All that twisting changes nothing about *how fast* she arrives, only *when*. The reason is that some forces keep a perfect account of what they have given you, and gravity is one of them.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two slides of equal height, one straight and one winding, both ending at the same level"><rect x="0" y="206" width="320" height="34" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface))"/><line x1="40" y1="206" x2="280" y2="206" style="stroke:var(--muted);stroke-width:1"/><line x1="26" y1="40" x2="26" y2="206" style="stroke:var(--ink);stroke-width:1.5"/><path d="M20 46 L32 46 M20 200 L32 200" style="stroke:var(--ink);stroke-width:1.5"/><text x="4" y="128" style="font-size:12px;fill:var(--ink)">h</text><path d="M60 40 L60 52 L140 202" style="fill:none;stroke:var(--c);stroke-width:3.5;stroke-linejoin:round"/><path d="M200 40 L200 52 C250 60 180 80 230 96 C280 112 190 130 240 146 C285 160 215 184 260 202" style="fill:none;stroke:var(--chem);stroke-width:3.5"/><circle cx="64" cy="36" r="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="204" cy="36" r="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><line x1="40" y1="46" x2="290" y2="46" style="stroke:var(--muted);stroke-dasharray:4 4"/><text x="76" y="24" style="font-size:11px;fill:var(--muted)">straight</text><text x="216" y="24" style="font-size:11px;fill:var(--muted)">corkscrew</text><text x="96" y="232" style="font-size:11px;fill:var(--muted)">same speed at the bottom</text></svg>'
symbols:
  - s: 'm'
    means: 'mass of the body (kilograms, kg)'
  - s: 'g'
    means: 'free-fall acceleration, about 9.8 m/s^2 near the Earth'
  - s: 'h'
    means: 'height above the zero level you chose (metres, m)'
  - s: 'v'
    means: 'speed of the body (m/s)'
  - s: 'K'
    means: 'kinetic energy, the energy of motion, 1/2 m v^2 (joules, J)'
  - s: 'U'
    means: 'potential energy, work stored by a conservative force (J)'
  - s: 'W'
    means: 'work done by a force along a path (J)'
  - s: 'k'
    means: 'spring constant, how stiff the spring is (newtons per metre, N/m)'
  - s: 'x'
    means: 'stretch or compression of the spring from its natural length (m)'
  - s: 'E'
    means: 'total mechanical energy, K plus U (J)'
life:
  - 'A roller coaster has no engine after the first climb: the first hill is the energy bank, and every later hill must be lower than it.'
  - 'Hydroelectric dams such as Bhakra turn the potential energy of water stored at height into the kinetic energy that spins turbines.'
  - 'A pogo stick, a trampoline and the spring in a ballpoint pen all store work as spring energy and give it back.'
  - 'Brakes and tyres get hot because friction turns motion into heat that never comes back as motion: that is the one-way account of a non-conservative force.'
  - 'A child on a swing rises to the same height each side only if the air and the ropes steal nothing; in practice you must keep pushing.'
models:
  - name: 'A bank account that remembers only the balance'
    text: 'Gravity and springs behave like an account where only the starting and ending balance matter, not the route of deposits and withdrawals. When something has this property you can ignore the messy middle and compare two snapshots. Look for it in life: a salary minus fixed costs, altitude gained on a trek.'
  - name: 'Path does not matter, so look at the endpoints'
    text: 'Whenever a quantity depends only on where you start and finish, do the sum at the two ends and skip the journey. Compare it with distance travelled, which remembers every twist of the route.'
  - name: 'A leaky bucket'
    text: 'Friction is a hole in the bucket: the energy is not destroyed, it leaks into heat. The more route you take, the more leaks. Policies and plans that lose a little at every step behave the same way.'
links:
  - leaf: 'phy/potential'
    name: 'Electric potential'
    same: 'The electric force from fixed charges is conservative too, so the work to move a charge between two points depends only on the points, and potential energy exists. Voltage is potential energy per unit charge, the same bookkeeping.'
    differs: 'Gravity only attracts; electric forces can push or pull, so electric potential energy can be positive or negative. A battery is a source that keeps resetting the account.'
  - leaf: 'phy/shm-equation'
    name: 'Simple harmonic motion'
    same: 'A mass on a spring swaps energy between $\tfrac12mv^2$ and $\tfrac12kx^2$ forever when nothing leaks, which is conservation of mechanical energy at work. The total is fixed by the amplitude.'
    differs: 'Here we find speeds from energy snapshots; SHM goes on to find the full motion in time, $x(t)$.'
next:
  q: 'Climbing a hill in a day or in a week costs the same energy, so why does the second feel so much easier? What exactly is the thing you are limited by?'
  leaf: 'phy/power'
  name: 'Power'
---

:::hook
q: Two water slides start at the same height. One is a straight chute, the other a long corkscrew with no friction. Which child is moving faster at the bottom?
options: ["The one on the straight chute", "The one on the corkscrew", "Both have exactly the same speed", "It depends on how heavy each child is"]
answer: 2
right: Right. Each child loses the same height, so gravity does the same work on each, and that work becomes the same kinetic energy. The corkscrew child takes longer, but arrives at the same speed.
wrong: Think about how much height each child loses, and what gravity does for every metre of height lost. The path in between turns out not to matter, and neither does the child's weight.
:::

## Energy that remembers only the height {lvl=1 id=s-slide label="Class 9"}

Lifting a child of mass $m$ up through a height $h$ takes work. We called that work $mgh$ in the last lessons, and we said it is stored as **potential energy**, the energy a body has because of where it is. When the child slides down, that stored energy comes back as **kinetic energy**, the energy of motion, $\tfrac12mv^2$.

With no friction the whole of it comes back:

$$\tfrac12mv^2 = mgh \quad\Longrightarrow\quad v = \sqrt{2gh}.$$

Read it as: the speed at the bottom depends on the height lost and on gravity, nothing else. The mass $m$ cancels, so a heavy child and a light child arrive together. And the shape of the slide appears nowhere in the answer.

:::worked title="How fast is the corkscrew?"
A slide drops 3.0 m. With $g = 9.8$ m/s²:

$v = \sqrt{2\times9.8\times3.0} = \sqrt{58.8} = 7.7$ m/s, about 28 km/h.

A straight chute of the same height gives 7.7 m/s too. The straight one is not simply quicker: a flat start to the chute, or a long bend, can change *when* you arrive. Only the arrival *speed* is fixed by the height.
:::

:::qc lvl=1
q: A ball is dropped from 5 m and another, of twice the mass, from 5 m on a frictionless curved ramp. Compare their speeds at the bottom.
options: ["The heavier is twice as fast", "They are equal", "The one on the ramp is slower, because the path is longer", "The one dropped straight down is faster"]
answer: 1
right: Right. Both lose 5 m of height, so $v = \sqrt{2gh}$ for both: about 9.9 m/s. Mass and path drop out.
wrong: The speed depends only on the height lost, $v = \sqrt{2gh}$. Mass cancels and the path does not appear.
:::

## Forces with a perfect memory {lvl=1 id=s-memory label="Class 9"}

Why did the shape of the slide not matter? Because of a special property of gravity. Take a student up to the top floor of a building, 72 m above the ground. Go by lift, or by a long staircase: either way the gain in potential energy is the same, $mgh$, since the final height is the same. The route changes how tired your legs get; it does not change what gravity records.

A force with this property is called a **conservative force**: the work it does between two points depends only on the two points, never on the path between them.

There is a second way to say the same thing, which is often easier to use. Take any round trip that ends where it started. The height gained going up is lost coming down, so gravity does zero total work around the loop. For a conservative force **the work around every closed loop is zero**.

:::figure caption="Two routes from A to B. The straight ramp and the winding path rise through the same height h, so gravity does the same work, -mgh, on both. A force with this property is conservative."
<svg viewBox="0 0 320 200" role="img" aria-label="Two paths from A to B with the same height gain h">
<line x1="40" y1="170" x2="280" y2="170" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:4 4"/>
<line x1="40" y1="50" x2="280" y2="50" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:4 4"/>
<path d="M60 170 L240 50" style="fill:none;stroke:var(--phy);stroke-width:3"/>
<path d="M60 170 C110 190 130 110 160 140 C190 170 190 80 220 100 C230 106 235 80 240 50" style="fill:none;stroke:var(--chem);stroke-width:3"/>
<circle cx="60" cy="170" r="5" style="fill:var(--ink)"/><circle cx="240" cy="50" r="5" style="fill:var(--ink)"/>
<text x="44" y="190" style="font-size:12px;fill:var(--ink)">A</text><text x="246" y="46" style="font-size:12px;fill:var(--ink)">B</text>
<line x1="284" y1="54" x2="284" y2="166" style="stroke:var(--ink);stroke-width:1.5"/>
<path d="M278 54 L290 54 M278 166 L290 166" style="stroke:var(--ink);stroke-width:1.5"/>
<text x="296" y="114" style="font-size:12px;fill:var(--ink)">h</text>
<text x="70" y="40" style="font-size:11px;fill:var(--muted)">same height gained, same work by gravity</text>
</svg>
:::

Now compare **friction**. Push a crate round a square, 1 m on each side, on a rough floor where friction is 2 N. Friction always points against the motion, so on every step it does negative work. Round the loop of length 4 m it does $-2\times4 = -8$ J, even though the crate is back where it began. Nothing cancels it. A longer path wastes more, so friction depends on the path: it is **non-conservative**.

:::qc lvl=1
q: Which of these is a conservative force?
options: ["Kinetic friction on a sliding box", "Air drag on a falling raindrop", "The weight of a book", "The push of your hand on a trolley (varying as you like)"]
answer: 2
right: Right. Weight does the same work between two heights, however the book travels. Friction and drag change with the path length, and a hand can push whenever it likes.
wrong: Test each one with a round trip. Only the weight does zero net work when the body returns to its start.
:::

## Potential energy is stored work {lvl=2 id=s-potential label="Class 11"}

For a conservative force we can define stored energy exactly. The potential energy $U$ at a point is what the force would give back if the body returned to the zero level. Between two points A and B, the work done by the force equals the *fall* in $U$:

$$W_{A\to B} = U_A - U_B = -\,\Delta U.$$

Read it as: if the force pushes the body along (positive work), the stored energy goes down by the same amount. For gravity near the ground, with $h$ measured up from a zero level you pick, $U = mgh$.

You are free to put that zero level anywhere. A 2 kg book on a 0.8 m table has $U = 15.7$ J if the floor is the zero, and $U = 0$ if the table is the zero. When it falls to the floor, though, the energy it loses is 15.7 J either way. Only **differences** in $U$ are physical.

:::qc lvl=2
q: A conservative force does $+20$ J of work on a body as it moves from P to Q. What happens to the potential energy?
options: ["It rises by 20 J", "It falls by 20 J", "It is unchanged", "It cannot be said without the path"]
answer: 1
right: Right. $W = -\Delta U$, so $\Delta U = -20$ J. And since the force is conservative, the path is irrelevant.
wrong: For a conservative force, work equals minus the change in potential energy. A positive $W$ therefore means $U$ falls.
:::

## The spring {lvl=2 id=s-spring label="Class 11"}

A spring is the second great conservative force. Squeeze it and it pushes back; the further you squeeze, the harder it pushes. For an ideal spring the pushback is proportional to the squeeze (Hooke's law): compressing by $x$ meets a force $kx$, where $k$ is the spring constant, the number of newtons for each metre of squeeze. A stiff spring has a large $k$.

Because the force grows as you compress, the work is the **area under the force–distance graph**. That area is a triangle of width $x$ and height $kx$:

$$U = \tfrac12\,x\,(kx) = \tfrac12kx^2.$$

Read it as: the stored energy grows as the *square* of the squeeze. Squeeze twice as far, store four times the energy.

:::figure caption="Force against compression for an ideal spring. The work you do, and the energy stored, is the shaded triangle: half of x times kx."
<svg viewBox="0 0 320 200" role="img" aria-label="Force versus compression graph, a straight line with the triangle under it shaded">
<path d="M50 160 L50 30 M50 160 L290 160" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<path d="M50 160 L230 50 L230 160 Z" style="fill:color-mix(in srgb,var(--phy) 22%,transparent);stroke:none"/>
<path d="M50 160 L260 32" style="fill:none;stroke:var(--phy);stroke-width:3"/>
<line x1="230" y1="50" x2="230" y2="160" style="stroke:var(--muted);stroke-dasharray:4 4"/>
<line x1="50" y1="50" x2="230" y2="50" style="stroke:var(--muted);stroke-dasharray:4 4"/>
<text x="224" y="178" style="font-size:12px;fill:var(--ink)">x</text><text x="24" y="54" style="font-size:12px;fill:var(--ink)">kx</text>
<text x="268" y="176" style="font-size:11px;fill:var(--muted)">compression</text><text x="10" y="24" style="font-size:11px;fill:var(--muted)">force</text>
<text x="146" y="134" style="font-size:12px;fill:var(--ink)">area = ½ k x²</text>
</svg>
:::

:::worked title="A dart gun"
A toy dart gun has a spring with $k = 500$ N/m, compressed by 2.0 cm = 0.020 m.

Stored energy: $\tfrac12\times500\times0.020^2 = 0.10$ J.

It all goes into a 5.0 g = 0.0050 kg dart: $\tfrac12\times0.0050\times v^2 = 0.10$, so $v = \sqrt{40} = 6.3$ m/s.

Squeeze it to 4.0 cm and the energy is four times as large, 0.40 J, so the dart leaves twice as fast, 12.6 m/s.
:::

The spring is conservative for the same reason as gravity: its force depends only on position, so the work depends only on the end positions. This is why we can store energy in it at all.

:::qc lvl=2
q: A spring is compressed by 3 cm and stores 0.9 J. How much does it store when compressed by 6 cm?
options: ["1.8 J", "2.7 J", "3.6 J", "0.45 J"]
answer: 2
right: Right. Energy goes as $x^2$, and $2^2 = 4$, so $4\times0.9 = 3.6$ J.
wrong: The energy is $\tfrac12kx^2$, which grows as the square of the compression. Doubling $x$ multiplies the energy by 4.
:::

## Mechanical energy is conserved {lvl=2 id=s-conserve label="Class 11"}

Now put the two ideas together. When a body moves under conservative forces only, the work done is $-\Delta U$, and the work–energy theorem says that work equals the change in kinetic energy $\Delta K$. So $\Delta K = -\Delta U$, which is the same as $\Delta(K+U) = 0$.

:::law caption="Valid when only conservative forces do work. Forces that do no work (normal force, a string's tension on a swinging bob) may act freely."
$$K + U = E = \text{constant}\qquad\text{i.e.}\qquad \tfrac12mv_1^2 + U_1 = \tfrac12mv_2^2 + U_2$$
:::

Read it as: whatever kinetic energy is lost is gained as potential energy, and the other way round. **Mechanical energy** $E$ is the sum.

:::worked title="A swing from the horizontal"
A bob hangs on a string 2.5 m long. It is held with the string horizontal and released. At the bottom it has dropped 2.5 m. The string's tension always points along the string, at right angles to the motion, so it does no work.

$\tfrac12mv^2 = mg(2.5)$, so $v = \sqrt{2\times9.8\times2.5} = 7.0$ m/s. The mass cancels again.
:::

When friction or drag is also at work, mechanical energy is not conserved. The rule becomes: the change in mechanical energy equals the work done by the non-conservative forces,

$$\Delta E = W_{nc}.$$

:::worked title="The playground slide with friction"
A 30 kg child slides from rest down a slide of height 2.5 m and reaches the bottom at 4.0 m/s.

Start: $E = mgh = 30\times9.8\times2.5 = 735$ J. End: $E = \tfrac12(30)(4.0)^2 = 240$ J.

$W_{nc} = 240 - 735 = -495$ J. So 495 J of the 735 J was turned into heat in the slide and the child's clothes. The energy is not lost; it has left the *mechanical* account.
:::

:::qc lvl=2
q: A ball is thrown straight up at 14 m/s. Ignoring air, how high does it rise?
options: ["7 m", "10 m", "14 m", "20 m"]
answer: 1
right: Right. At the top all the kinetic energy has become potential energy: $\tfrac12mv^2 = mgh$, so $h = v^2/2g = 196/19.6 = 10$ m.
wrong: Equate $\tfrac12mv^2$ at the start with $mgh$ at the top (where the speed is zero): $h = v^2/2g$.
:::

## Energy method on harder problems {lvl=3 id=s-methods label="JEE"}

Energy conservation is the fastest tool whenever you want a speed at a place and do not care about the time. Four patterns turn up again and again.

**1. The vertical circle.** A bob of mass $m$ on a string of length $L$ is to swing round a full vertical circle. The danger is the top: if the speed there is too small, the string goes slack. At the very lowest allowed speed, the tension at the top is zero and gravity alone supplies the centripetal force, $mg = mv_T^2/L$, so $v_T^2 = gL$. Energy from bottom to top, a climb of $2L$:

$$\tfrac12mv_B^2 = \tfrac12mv_T^2 + mg(2L)\ \Rightarrow\ v_B^2 = gL + 4gL = 5gL.$$

So the bob needs $v_B \ge \sqrt{5gL}$ at the bottom. (If the bob is on a light rod instead of a string, it only has to reach the top with any speed above zero, and the bottom speed needed is $2\sqrt{gL}$.)

**2. A block set down on a vertical spring.** Place a mass $m$ on top of a spring that stands at its natural length, and let go. It does not stop at the balance point; it overshoots. At the lowest point it is momentarily at rest, so all the potential energy it lost is now in the spring: $mgx = \tfrac12kx^2$, which gives

$$x_{\max} = \frac{2mg}{k},$$

twice the compression $mg/k$ at which it would sit in balance. For $m = 0.5$ kg and $k = 100$ N/m the balance point is 4.9 cm and the lowest point is 9.8 cm. If the block is *dropped* from a height $H$ above the spring, it falls $H + x$ in all, and you must solve $mg(H+x) = \tfrac12kx^2$, a quadratic.

**3. A body leaving a smooth dome.** A small block starts at the top of a smooth hemisphere of radius $R$ and slides off. At angle $\theta$ from the vertical it has dropped $R(1-\cos\theta)$, so $v^2 = 2gR(1-\cos\theta)$. The block stays on the surface while the net inward force is enough: $mg\cos\theta - N = mv^2/R$. It leaves when $N = 0$:

$$g\cos\theta = 2g(1-\cos\theta)\ \Rightarrow\ \cos\theta = \tfrac23,\qquad v^2 = \tfrac23gR.$$

It leaves after dropping one third of the radius, whatever the size of the dome.

**4. Systems with strings and pulleys.** For two blocks joined by a string over a pulley, the tension does $+Td$ on one block and $-Td$ on the other, so it cancels in the system's energy account. Count the energy of the *whole system*: gravity's work on both blocks equals the sum of both kinetic energies.

:::qc lvl=3
q: A block is gently placed on top of a vertical spring and released from rest. Compared with the compression at which it would balance, the largest compression is
options: ["the same", "twice as large", "half as large", "four times as large"]
answer: 1
right: Right. Energy gives $mgx = \tfrac12kx^2$, so $x = 2mg/k$, twice the equilibrium compression $mg/k$. The block overshoots and bounces about the balance point.
wrong: Compare $mgx$ lost with $\tfrac12kx^2$ stored: $x = 2mg/k$. At balance the compression is only $mg/k$.
:::

## Reading a potential energy curve {lvl=3 id=s-curve label="JEE"}

Draw $U$ against position along a line. The curve is a map of the whole motion. Three rules read it.

**The force is minus the slope:** $F = -dU/dx$. A body rolls down the slope of the curve, just as a marble rolls down a real hill. For the spring, $U = \tfrac12kx^2$ has slope $kx$, so $F = -kx$, which is Hooke's law back again.

**The total energy $E$ is a horizontal line.** Since $K = E - U$ cannot be negative, the body can only be where the curve is *below* the line. Where the line meets the curve, $K = 0$: those are the **turning points**.

**Equilibrium is where the slope is zero.** A valley is a **stable** equilibrium (nudge it and it comes back), a hilltop is **unstable** (nudge it and it runs away).

:::figure caption="A potential energy curve. The horizontal line is the total energy E. The body can only be where the curve is below the line: here it is trapped in the left valley between the two turning points, unable to cross the hill."
<svg viewBox="0 0 320 210" role="img" aria-label="Potential energy curve with two valleys and a hill, a total energy line and turning points">
<path d="M20 20 L20 180 L310 180" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<path d="M20 30 C50 30 70 160 110 160 S150 90 190 90 S230 170 270 170 S300 40 310 30" style="fill:none;stroke:var(--phy);stroke-width:3"/>
<line x1="20" y1="120" x2="310" y2="120" style="stroke:var(--chem);stroke-width:1.8;stroke-dasharray:6 4"/>
<circle cx="64" cy="120" r="4.5" style="fill:var(--chem)"/><circle cx="150" cy="120" r="4.5" style="fill:var(--chem)"/>
<text x="296" y="114" style="font-size:12px;fill:var(--chem)">E</text>
<text x="40" y="110" style="font-size:10px;fill:var(--muted)">turning</text><text x="122" y="140" style="font-size:10px;fill:var(--muted)">turning</text>
<text x="86" y="176" style="font-size:10px;fill:var(--muted)">stable</text>
<text x="168" y="80" style="font-size:10px;fill:var(--muted)">unstable</text>
<text x="248" y="190" style="font-size:10px;fill:var(--muted)">deeper valley</text>
<text x="8" y="14" style="font-size:11px;fill:var(--muted)">U</text><text x="304" y="198" style="font-size:11px;fill:var(--muted)">x</text>
</svg>
:::

NCERT Exercise 5.3 asks you to do exactly this on four shapes of potential energy: mark the regions where $V > E$, where the particle cannot be, and find the lowest allowed $E$, which is the lowest point of the curve.

:::qc lvl=3
q: A particle has total energy $E$. At a point where $U = E$, which statement is true?
options: ["Its speed is largest", "Its speed is zero: a turning point", "Its acceleration is zero", "It is in stable equilibrium"]
answer: 1
right: Right. $K = E - U = 0$ there, so the particle is momentarily at rest. It need not be in equilibrium: the slope there is usually not zero, so the force is pushing it back.
wrong: With $K = E - U$, setting $U = E$ gives $K = 0$. That is a turning point, not an equilibrium: equilibrium needs zero *slope*, not zero speed.
:::

## When does a potential exist? Small wobbles {lvl=4 id=s-olympiad label="Olympiad"}

**Is a given force conservative?** In two dimensions a force $\vec F = (F_x, F_y)$ is conservative only if its work around every closed loop vanishes. For a small loop of area $A$, the work around it (anticlockwise) is

$$W = \left(\frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y}\right)A.$$

This is Green's theorem, quoted here without proof. So the test is:

$$\frac{\partial F_y}{\partial x} = \frac{\partial F_x}{\partial y}.$$

Try $\vec F = (-\alpha y,\ \alpha x)$, a force that always pushes round the origin. Here $\partial F_y/\partial x = \alpha$ and $\partial F_x/\partial y = -\alpha$, which differ. Check by pushing a body once anticlockwise round a circle of radius $R$: the force points along the path and has size $\alpha R$, so $W = \alpha R\times2\pi R = 2\pi\alpha R^2 \ne 0$. No potential energy exists. Compare $\vec F = (\alpha y,\ \alpha x)$: both partial derivatives are $\alpha$, and indeed $\vec F = -\nabla U$ with $U = -\alpha xy$.

**Wobbles about a minimum.** Near the bottom of any smooth valley, $U(x)$ looks like a parabola, $U \approx U_0 + \tfrac12U''(x-x_0)^2$, where $U''$ is the curvature at the bottom. That is exactly a spring with $k = U''(x_0)$. So every small oscillation about a stable equilibrium is simple harmonic, with

$$\omega = \sqrt{\frac{U''(x_0)}{m}}.$$

:::worked title="Curvature gives the spring"
Take $U(x) = U_0\left(\dfrac{x}{a} + \dfrac{a}{x}\right)$ for $x>0$.

Slope: $U' = U_0\left(\dfrac1a - \dfrac{a}{x^2}\right)$, zero at $x_0 = a$: the equilibrium.

Curvature: $U'' = \dfrac{2U_0a}{x^3}$, which at $x = a$ is $\dfrac{2U_0}{a^2}>0$, so it is a minimum (stable).

Effective spring constant $k = 2U_0/a^2$, so $\omega = \sqrt{2U_0/(ma^2)}$.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. With no friction, the speed at the bottom depends only on the height lost, $v = \sqrt{2gh}$, never on the shape of the slide or the mass. {lvl=1}
2. A conservative force does work that depends only on the end points; its work around any closed loop is zero. Gravity and springs are conservative, friction and drag are not. {lvl=1}
3. For a conservative force, $W = -\Delta U$. Only differences in $U$ matter, so the zero level is yours to choose. {lvl=2}
4. A spring stores $\tfrac12kx^2$, the area under its force–compression graph. {lvl=2}
5. If only conservative forces do work, $K + U$ is constant; otherwise $\Delta E = W_{nc}$. {lvl=2}
6. Vertical circle on a string: bottom speed at least $\sqrt{5gL}$. Block on a vertical spring: maximum squeeze $2mg/k$. Dome: leaves at $\cos\theta = 2/3$. {lvl=3}
7. $F = -dU/dx$: valleys are stable, hilltops unstable, and the line $E$ fixes the turning points. {lvl=3}
8. Near a stable minimum the motion is simple harmonic with $k = U''$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Equal *speed* at the bottom does not mean equal *time*: energy tells you the speed at a point, never how long it took. {lvl=1}
- A force that does no work (the normal force on a slide, the tension in a swinging string) does not spoil conservation of mechanical energy. Friction does. {lvl=2}
- Measure $h$ as a height *difference*, from a zero level you chose once; mixing two zero levels is the usual slip. {lvl=2}
- A spring stores $\tfrac12kx^2$, not $\tfrac12kx$ and not $kx^2$; and $x$ is the stretch from the natural length. {lvl=2}
- A block dropped onto a spring falls $H + x$, not just $H$; leaving out the extra $x$ underestimates the squeeze by a noticeable amount. {lvl=3}
- Zero speed is not equilibrium: a ball at the top of a throw has zero speed and a full force acting on it. {lvl=3}
:::
