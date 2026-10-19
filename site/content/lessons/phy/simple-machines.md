---
title: Simple machines
summary: How a small child can lift a heavy adult on a seesaw, and why every machine trades force for distance but never gives you free energy.
ncert: ["Class 9 Science · Ch 7 Work, Energy and Power (§7.6 Simple machines: 7.6.1 Pulley, 7.6.2 Inclined plane, 7.6.3 Lever)"]
up_to: Olympiad
builds_on: [Work done by a force, Conservative forces, Power]
notes_prompt: Explain to a ten-year-old why a long gentle ramp makes a heavy load easier to push up, and what you pay for it.
margin:
  - kind: history
    title: History
    text: "Archimedes of Syracuse is said to have claimed that with a long enough lever and a place to stand he could move the Earth [Unverified quotation]. The law of the lever is among the oldest results in physics, known well before the idea of energy was born."
  - kind: tip
    title: Exam habit
    text: "Whatever the machine, write the balance twice: forces by $F_{\\text{effort}}\\times\\text{arm}_{\\text{effort}} = F_{\\text{load}}\\times\\text{arm}_{\\text{load}}$, and distances by work in = work out. If the two disagree, you have mixed up the arms."
  - kind: olympiad
    title: Olympiad link
    text: "For a frictionless machine you never need to analyse the forces inside it: give the machine a tiny imagined movement and equate the work in to the work out. This is the principle of virtual work, and it solves jacks, toggles and pulley mazes in a line."
books:
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 8 Potential Energy and Conservation of Energy, and Ch. 12 Equilibrium and Elasticity [Unverified chapter numbers]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 4 Conservation of Energy, and Ch. 13 Work and Potential Energy (A), which derives the law of the lever from the impossibility of a perpetual motion machine [Unverified chapter numbers] (feynmanlectures.caltech.edu)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapter on Rotational Mechanics (torque and equilibrium) [Unverified chapter reference]" }
cards:
  - { front: "What does a simple machine do?", back: "It changes the size or the direction of a force. Ideally it gives out exactly the work put in, so what you gain in force you pay for in distance." }
  - { front: "Define mechanical advantage.", back: "$\\text{MA} = \\dfrac{\\text{load}}{\\text{effort}}$. For an ideal machine this equals the ratio of distances: the effort moves MA times as far as the load." }
  - { front: "Law of the lever?", back: "In balance, $\\text{effort}\\times\\text{effort arm} = \\text{load}\\times\\text{load arm}$, so $\\text{MA} = \\dfrac{\\text{effort arm}}{\\text{load arm}}$. Arms are measured from the fulcrum." }
  - { front: "Mechanical advantage of an inclined plane and of a block and tackle?", back: "Ramp of length $L$ and height $h$: ideal $\\text{MA} = L/h$. Block and tackle: the number of rope strands supporting the load." }
  - { front: "Define the efficiency of a machine.", back: "$\\eta = \\dfrac{\\text{work out}}{\\text{work in}} = \\dfrac{\\text{actual MA}}{\\text{ideal MA}}$, always below 1 because friction wastes some work as heat." }
  - { front: "When does a machine hold its load by itself (self-locking)?", back: "When its efficiency is below 50%: friction then keeps the load from running the machine backwards. A screw jack is the standard example." }
core:
  idea: 'A simple machine cannot make work. It can only change how a given amount of work is split into force and distance: you push with less force over more distance. For an ideal machine, work in equals work out, and the mechanical advantage is the ratio of load to effort.'
  formulas:
    - tex: '\text{MA} = \dfrac{F_l}{F_e} = \dfrac{s_e}{s_l}'
      label: 'Mechanical advantage (ideal machine): force gained equals distance paid'
    - tex: 'F_e\,d_e = F_l\,d_l'
      label: 'Lever in balance (arms measured from the fulcrum)'
    - tex: '\eta = \dfrac{W_{\text{out}}}{W_{\text{in}}} = \dfrac{\text{actual MA}}{\text{ideal MA}}'
      label: 'Efficiency'
  conditions:
    - 'Ideal results assume no friction and light, rigid parts (massless rope, weightless lever)'
    - 'Forces on a lever must be perpendicular to the lever for the arms to be the lengths along it; otherwise use the perpendicular distance'
    - 'Efficiency is below 1 for every real machine; above 1 would mean energy created from nothing'
  sign: 'MA above 1 means a smaller effort, never less work. A third-class lever has MA below 1 and is used to gain speed and reach.'
outcomes:
  - 'Explain why a machine can multiply force but never work'
  - 'Find the mechanical advantage of a ramp, a lever and a pulley system'
  - 'Balance a lever, or find an unknown weight or arm, with the law of the lever'
  - 'Compute the efficiency of a real machine and the effort it needs'
  - 'Use the work-in-equals-work-out idea to solve a machine problem without analysing its inside, and recognise when a machine is self-locking'
opener:
  story: |
    On a playground seesaw, a seven-year-old sits at one end. At the other end sits her father, who weighs twice as much. Naturally, he sinks and she is stuck in the air. Then the father shuffles in towards the middle, and slowly the plank levels out. Soon she is the one who can lift him, just by leaning back a little.

    She did not get stronger and he did not get lighter. But now a seven-year-old is lifting a grown man with the push of her own weight. Is that cheating? Where did the extra lifting power come from?

    The answer is one of the oldest ideas in physics, and every crowbar, ramp, bicycle gear and pulley uses it: the machine did not give her anything for free. She is paying in a different currency, and you can see the exchange rate with a ruler.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A seesaw balanced with a small child far from the pivot and a heavy adult close to it"><path d="M185 172 L215 172 L200 146Z" style="fill:var(--muted)"/><line x1="40" y1="146" x2="290" y2="146" style="stroke:var(--ink);stroke-width:5;stroke-linecap:round"/><circle cx="60" cy="112" r="14" style="fill:var(--surface);stroke:var(--chem);stroke-width:2.5"/><path d="M60 126 L60 146" style="stroke:var(--chem);stroke-width:2.5"/><circle cx="262" cy="96" r="22" style="fill:var(--surface);stroke:var(--c);stroke-width:2.5"/><path d="M262 118 L262 146" style="stroke:var(--c);stroke-width:2.5"/><line x1="60" y1="194" x2="200" y2="194" style="stroke:var(--chem);stroke-width:1.5"/><line x1="200" y1="204" x2="262" y2="204" style="stroke:var(--c);stroke-width:1.5"/><text x="102" y="212" style="font-size:11px;fill:var(--chem)">far: 2 d</text><text x="214" y="222" style="font-size:11px;fill:var(--c)">near: d</text><text x="40" y="84" style="font-size:11px;fill:var(--muted)">child, W</text><text x="236" y="58" style="font-size:11px;fill:var(--muted)">adult, 2 W</text></svg>'
symbols:
  - s: 'F_e'
    means: 'effort, the force you apply (newtons, N)'
  - s: 'F_l'
    means: 'load, the force the machine has to overcome, such as a weight (N)'
  - s: 'd_e'
    means: 'effort arm, distance from the fulcrum to the effort (m)'
  - s: 'd_l'
    means: 'load arm, distance from the fulcrum to the load (m)'
  - s: 's_e'
    means: 'distance the effort moves (m)'
  - s: 's_l'
    means: 'distance the load moves (m)'
  - s: 'MA'
    means: 'mechanical advantage, load divided by effort (no unit)'
  - s: '\eta'
    means: 'efficiency, work out divided by work in (no unit)'
  - s: '\theta'
    means: 'angle of an inclined plane (degrees)'
  - s: '\mu'
    means: 'coefficient of friction between the load and the plane (no unit)'
life:
  - 'Scissors, pliers, nutcrackers, bottle openers and the spoon you use to lever open a paint tin are all levers with a fulcrum, a load and an effort.'
  - 'Mountain roads such as those to Shimla and Ooty wind round the hillside: a ramp stretched out so that the engine needs a smaller force.'
  - 'The block and tackle on a construction site or a ship lets a few workers hoist a heavy girder; the price is a lot of rope pulled by hand.'
  - 'A bicycle gear is a machine for trading force against speed: low gear for a steep slope, high gear for a flat road.'
  - 'A wheelbarrow, a tap handle, a door handle placed far from the hinge: each is a lever or a lever that goes round.'
models:
  - name: 'You pay in a different currency'
    text: 'Every trade-off has an exchange rate. A machine lets you pay in distance instead of force: a gentler hill, a longer lever. Whenever something looks like a free gain, ask what is being paid in another currency such as time, risk or effort elsewhere.'
  - name: 'Leverage'
    text: 'A small input at the right place and with the right arrangement produces a big output. In finance, politics and engineering the useful question is where the fulcrum sits, not how hard you push.'
  - name: 'Conservation as a check'
    text: 'If a claimed result gives out more than went in, it is wrong. Work in must at least equal work out; any answer that breaks this can be rejected without further calculation.'
links:
  - leaf: 'phy/torque'
    name: 'Torque'
    same: 'The lever law says the turning effect of the effort equals that of the load. That turning effect, force times perpendicular distance from the pivot, is exactly the quantity called torque.'
    differs: 'The lever law is the special case of balance (no rotation); torque goes on to describe how fast things spin up when the torques do not balance.'
  - leaf: 'phy/work-energy-theorem'
    name: 'Work–energy theorem'
    same: 'Both rest on counting energy: an ideal machine passes work through unchanged, just as the theorem says the net work becomes kinetic energy.'
    differs: 'The theorem tracks where the energy goes; machines are about how a force is traded for distance on the way.'
next:
  q: 'A lever trades force for distance but never creates energy. Now let two trolleys crash and stick together: the total momentum survives the crash, yet some kinetic energy vanishes. Where does it go, and can we predict the speeds after any collision?'
  leaf: 'phy/collisions'
  name: 'Collisions'
---

:::hook
q: A seesaw has a small child on one side and an adult weighing twice as much on the other, and the seesaw balances level. How must the child be seated?
options: ["Twice as far from the pivot as the adult", "Half as far from the pivot as the adult", "At the same distance, with the pivot moved", "At the same distance, but leaning back"]
answer: 0
right: Right. Balance needs weight times distance equal on both sides. The adult has twice the weight, so the child must sit twice as far: weight × distance is the same, $W\times2d = 2W\times d$.
wrong: The turning effect of each person is weight times distance from the pivot. For the two effects to be equal, the person with half the weight needs twice the distance.
:::

## Trading force for distance {lvl=1 id=s-trade label="Class 9"}

Suppose you want to lift a 100 kg drum (weight about 980 N) onto a platform 1 m high. Lifting it straight up takes a force of 980 N over a distance of 1 m. The work is $980\times1 = 980$ J.

Now roll it up a 4 m ramp, with no friction. The work needed is still 980 J, because gravity's account depends only on height, not on the route. But now the distance is 4 m, so the force is $980/4 = 245$ N. You pay four times the distance and get one quarter of the force.

That is the whole story of simple machines. A **machine** is a device that changes the size or the direction of a force, and the golden rule is **work in equals work out** (when there is no friction). If the effort needs to be smaller, it has to act through a longer distance.

We measure the gain with the **mechanical advantage**: how many times the load is bigger than the effort,

$$\text{MA} = \frac{\text{load}}{\text{effort}}.$$

For the ramp, the effort is a quarter of the load, so MA = 4, which is the ramp's length divided by its height, $L/h$. And MA is also the factor by which you move farther than the load rises.

:::worked title="A barrel and a ramp"
A 150 kg barrel is rolled up a smooth 3.0 m ramp onto a platform 0.6 m high. Take $g = 9.8$ m/s².

MA $= L/h = 3.0/0.6 = 5$. Load $= 150\times9.8 = 1470$ N, so the effort along the ramp is $1470/5 = 294$ N.

Check by work: effort × distance = $294\times3.0 = 882$ J. Load × height = $1470\times0.6 = 882$ J. Same.
:::

:::qc lvl=1
q: A ramp of length 5 m raises a load through 1 m (no friction). Compared with lifting the load straight up, the effort along the ramp is
options: ["5 times larger", "the same", "one fifth", "one half"]
answer: 2
right: Right. MA = $L/h$ = 5, so the effort is one fifth of the weight, applied over five times the distance.
wrong: The ramp trades distance for force. It is 5 times longer than the height, so the force needed is divided by 5.
:::

## Levers {lvl=1 id=s-lever label="Class 9"}

A **lever** is a rigid bar that turns about a fixed point, the **fulcrum**. You push on one part (the effort), and the bar pushes on the thing you want to move (the load). The distance from the fulcrum to each is called its **arm**.

When the lever is just balanced, the turning effect of the effort equals that of the load:

$$\text{effort}\times\text{effort arm} = \text{load}\times\text{load arm}.$$

Read it as: a long arm lets a small force balance a big one on a short arm. So the mechanical advantage is the ratio of the arms:

$$\text{MA} = \frac{\text{effort arm}}{\text{load arm}}.$$

:::figure caption="A lever in balance. The load is 30 N at 0.2 m from the fulcrum. The effort needed is 30 × 0.2 / 0.6 = 10 N at 0.6 m, so MA = 3. The effort end moves three times as far as the load."
<svg viewBox="0 0 320 208" role="img" aria-label="A lever with a fulcrum, a load close to the fulcrum and an effort farther away">
<path d="M130 150 L160 150 L145 124Z" style="fill:var(--muted)"/>
<line x1="40" y1="124" x2="290" y2="124" style="stroke:var(--ink);stroke-width:5;stroke-linecap:round"/>
<path d="M115 70 L115 118" style="fill:none;stroke:var(--chem);stroke-width:3"/><path d="M109 110 L115 120 L121 110" style="fill:none;stroke:var(--chem);stroke-width:3"/>
<path d="M270 70 L270 118" style="fill:none;stroke:var(--phy);stroke-width:3"/><path d="M264 110 L270 120 L276 110" style="fill:none;stroke:var(--phy);stroke-width:3"/>
<text x="92" y="62" style="font-size:12px;fill:var(--chem)">load 30 N</text><text x="234" y="62" style="font-size:12px;fill:var(--phy)">effort 10 N</text>
<line x1="115" y1="168" x2="145" y2="168" style="stroke:var(--chem);stroke-width:1.5"/><line x1="145" y1="184" x2="270" y2="184" style="stroke:var(--phy);stroke-width:1.5"/>
<text x="102" y="164" style="font-size:11px;fill:var(--chem)">0.2 m</text><text x="188" y="198" style="font-size:11px;fill:var(--phy)">0.6 m</text>
<text x="150" y="170" style="font-size:11px;fill:var(--muted)">fulcrum</text>
</svg>
:::

Levers come in three kinds, depending on which of the three (fulcrum, load, effort) sits in the middle:

- **Fulcrum in the middle** (seesaw, scissors, crowbar): MA can be above or below 1.
- **Load in the middle** (wheelbarrow, nutcracker, bottle opener): effort arm is longer than load arm, so MA is always above 1.
- **Effort in the middle** (tweezers, a fishing rod, your forearm): the effort arm is shorter, so MA is below 1. You lose force but gain speed and reach.

:::worked title="Balancing the seesaw"
A 20 kg child sits 2.4 m from the pivot. Where must a 60 kg adult sit on the other side?

$20\times2.4 = 60\times d\ \Rightarrow\ d = 48/60 = 0.8$ m. (We used kilograms on both sides; $g$ cancels.) The adult sits one third as far from the pivot, as the weights are in the ratio 1 : 3.
:::

:::qc lvl=1
q: To cut a thick wire with a pair of cutters, you should place the wire
options: ["near the tips of the blades", "close to the pivot", "it makes no difference", "at the handles"]
answer: 1
right: Right. Closer to the pivot means a shorter load arm, so a larger mechanical advantage: the same hand force gives a bigger cutting force.
wrong: The effort arm (handle to pivot) stays the same, so shortening the load arm (wire to pivot) raises the mechanical advantage, effort arm over load arm.
:::

## Pulleys {lvl=1 id=s-pulley label="Class 9"}

A **pulley** is a wheel with a groove for a rope. A **fixed pulley**, hung from the ceiling, only changes the direction of the pull: you pull down to lift a load up. The tension in the rope is the same on both sides, so the effort equals the load and the MA is 1. It is useful because pulling down, using your own weight, is easier than pulling up.

A **movable pulley** hangs on the rope itself. The load hangs from the pulley, and two strands of rope hold it up. Each strand carries half the load, so the effort is half and MA = 2. The cost: to raise the load by 1 m, each strand must shorten by 1 m, so you pull 2 m of rope.

A **block and tackle** combines several pulleys. Its MA equals the number of rope strands that hold the load, and the length of rope you pull is that many times the height the load rises.

:::figure caption="A movable pulley. Two strands of rope hold up the load, so each carries W/2 and the effort is W/2. Lifting the load by 1 m takes 2 m of rope pulled."
<svg viewBox="0 0 320 220" role="img" aria-label="A movable pulley with two rope strands supporting a hanging load">
<line x1="100" y1="26" x2="150" y2="26" style="stroke:var(--ink);stroke-width:4"/>
<path d="M130 26 L130 110 A22 22 0 0 0 174 110 L174 50 L174 12" style="fill:none;stroke:var(--phy);stroke-width:2.5"/>
<circle cx="152" cy="110" r="22" style="fill:none;stroke:var(--ink);stroke-width:2.5"/><circle cx="152" cy="110" r="3" style="fill:var(--ink)"/>
<line x1="152" y1="110" x2="152" y2="150" style="stroke:var(--ink);stroke-width:2"/>
<rect x="132" y="150" width="40" height="30" rx="3" style="fill:color-mix(in srgb,var(--chem) 20%,var(--surface));stroke:var(--chem);stroke-width:2.5"/>
<text x="140" y="170" style="font-size:12px;fill:var(--ink)">W</text>
<path d="M174 40 L174 14" style="stroke:var(--phy);stroke-width:2.5"/><path d="M168 22 L174 12 L180 22" style="fill:none;stroke:var(--phy);stroke-width:2.5"/>
<text x="186" y="20" style="font-size:12px;fill:var(--phy)">effort W/2</text>
<text x="62" y="90" style="font-size:11px;fill:var(--muted)">W/2</text><text x="190" y="90" style="font-size:11px;fill:var(--muted)">W/2</text>
</svg>
:::

:::worked title="A block and tackle with four strands"
Four strands support a load of 800 N, and friction is negligible. MA = 4, so the effort is $800/4 = 200$ N.

To lift the load 0.5 m you pull $4\times0.5 = 2$ m of rope. Work in: $200\times2 = 400$ J. Work out: $800\times0.5 = 400$ J.
:::

:::qc lvl=1
q: A single fixed pulley is used to raise a flag. What is its mechanical advantage?
options: ["0.5", "1", "2", "It depends on the flag's weight"]
answer: 1
right: Right. The rope tension is the same on both sides, so effort equals load. The pulley only changes the direction of the force.
wrong: With a single fixed pulley, the force on the rope is the same on both sides, so the effort equals the load.
:::

## Real machines waste work {lvl=2 id=s-eff label="Class 11"}

Real machines have friction in the bearings and between surfaces, so you always have to put in more work than you get out. The **actual** mechanical advantage is then below the ideal one. The fraction of the work that comes out is the **efficiency**:

$$\eta = \frac{W_{\text{out}}}{W_{\text{in}}} = \frac{\text{actual MA}}{\text{ideal MA}}.$$

Read it as: if the efficiency is 80%, then of each 100 J you put in, 80 J do the job and 20 J become heat. It can never exceed 100%: that would mean the machine gives out more than it takes in, a perpetual motion machine.

:::worked title="A friction-limited tackle"
A block and tackle with 4 strands (ideal MA = 4) lifts an 800 N load, but needs an effort of 250 N.

Actual MA $= 800/250 = 3.2$. Efficiency $\eta = 3.2/4 = 0.80$, or 80%.

Check by work: for 1 m of load rise you pull 4 m of rope. Work in $= 250\times4 = 1000$ J; work out $= 800\times1 = 800$ J; ratio 0.80.
:::

:::qc lvl=2
q: A machine needs 500 J of input work to deliver 350 J of useful output. Its efficiency is
options: ["35%", "70%", "143%", "150 J"]
answer: 1
right: Right. $\eta = 350/500 = 0.70$, or 70%. The other 150 J became heat.
wrong: Efficiency is output over input: 350 ÷ 500.
:::

## The lever as a balance of turning effects {lvl=3 id=s-torque label="JEE"}

The lever law is a statement about **turning effects**. The turning effect of a force about a point is the force times the perpendicular distance from the point to the line of the force. A lever in balance (not turning) needs the turning effects on the two sides to match. Real beams have weight: a uniform beam's weight acts at its middle, and counts as another force on its own arm.

The pivot itself pushes up with whatever force makes the vertical forces balance. So a beam on a single support has two conditions: forces add to zero, and turning effects add to zero.

:::worked title="A beam with weight"
A uniform beam 3.0 m long and of mass 12 kg rests on a pivot 1.0 m from its left end. What mass must hang from the left end to keep it level?

The beam's centre is at 1.5 m from the left end, so 0.5 m to the right of the pivot. Turning effects: $m\times1.0 = 12\times0.5 \Rightarrow m = 6$ kg. The pivot supports the total, $(12+6)g = 176$ N.
:::

**Ramps with friction.** On a ramp at angle $\theta$ with friction coefficient $\mu$, pushing a load of weight $W$ up at constant speed needs an effort along the ramp of $W(\sin\theta + \mu\cos\theta)$: the weight component plus the friction. The useful work per metre is $W\sin\theta$, so

$$\eta = \frac{\sin\theta}{\sin\theta + \mu\cos\theta} = \frac{\tan\theta}{\tan\theta + \mu}.$$

For $\theta = 30^\circ$ and $\mu = 0.2$ the efficiency is $0.5/(0.5 + 0.2\times0.866) = 0.74$, or 74%. A steeper ramp wastes proportionally less to friction.

**The wheel and axle.** A steering wheel, a tap or a screwdriver is a lever that turns a full circle. Pulling at radius $R$ to turn an axle of radius $r$ gives MA = $R/r$.

:::qc lvl=3
q: A uniform plank of length 4 m has weight 100 N and is pivoted at its centre. A 200 N load sits 1 m from the pivot. Where must a 100 N load go on the other side to balance?
options: ["0.5 m", "1 m", "2 m", "4 m"]
answer: 2
right: Right. The plank's weight acts at the pivot and has no turning effect. $200\times1 = 100\times d \Rightarrow d = 2$ m, the end of the plank.
wrong: Take turning effects about the pivot. The plank's own weight acts through the pivot, so it contributes nothing: $200\times1 = 100\times d$.
:::

## Let the machine move a little: virtual work {lvl=4 id=s-virtual label="Olympiad"}

For a frictionless machine you can find the mechanical advantage without ever drawing the forces inside it. Imagine the effort end moving through a small distance $\delta s_e$ and see how far the load moves, $\delta s_l$. Work in equals work out, so

$$F_e\,\delta s_e = F_l\,\delta s_l\quad\Longrightarrow\quad \text{MA} = \frac{F_l}{F_e} = \frac{\delta s_e}{\delta s_l}.$$

Read it as: the force gain is the ratio of how far you move to how far the load moves. This is the principle of virtual work, and it often replaces a page of free-body diagrams.

**Example: the differential pulley.** The upper pulley has two rigidly joined grooves, of radii $R$ and $r$ with $R > r$. An endless chain goes over the big groove, down round the movable pulley that holds the load, up over the small groove, and hangs as a free loop. Pull the free chain so that the upper pulley turns through a small angle $\theta$.

On the big groove, a length $R\theta$ of chain is taken in; on the small groove, a length $r\theta$ is paid out. The two strands holding the load shorten in total by $(R - r)\theta$, so the load rises by half of that, $\tfrac12(R-r)\theta$. The effort end moves $R\theta$. So

$$\text{MA} = \frac{R\theta}{\tfrac12(R-r)\theta} = \frac{2R}{R - r}.$$

For $R = 10$ cm and $r = 9$ cm, MA = 20. A light pull holds a large load, and with real friction the load does not run back down when you let go: the machine is **self-locking**.

**Self-locking.** A machine holds its load by itself if friction is large enough that the load alone cannot drive it backwards. That happens exactly when the efficiency is below 50%. For the ramp, $\eta = \tan\theta/(\tan\theta + \mu) < \tfrac12$ means $\tan\theta < \mu$: precisely the condition that a block just sits on the incline with no push. A screw jack is a ramp wrapped round a cylinder, built to be self-locking so that a car stays up when you stop turning the handle.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A machine changes the size or direction of a force; it cannot make work. Work in equals work out for an ideal machine. {lvl=1}
2. Mechanical advantage = load ÷ effort = distance moved by the effort ÷ distance moved by the load. {lvl=1}
3. Ramp: ideal MA = length ÷ height. Lever: MA = effort arm ÷ load arm. Block and tackle: MA = number of strands holding the load. {lvl=1}
4. A fixed pulley has MA = 1: it only changes direction. {lvl=1}
5. Efficiency = work out ÷ work in = actual MA ÷ ideal MA, always below 100%. {lvl=2}
6. The lever law is a balance of turning effects; a uniform beam's weight acts at its middle. {lvl=3}
7. Ramp with friction: $\eta = \tan\theta/(\tan\theta + \mu)$. {lvl=3}
8. Virtual work gives the MA of any ideal machine by comparing distances; efficiency below 50% means self-locking. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- No machine saves work. If a problem seems to, you have mixed up force and work. {lvl=1}
- Arms are measured from the fulcrum to the line of the force, not from the end of the bar or from the load to the effort. {lvl=1}
- Mechanical advantage above 1 means a smaller force and a longer distance, not a faster job. {lvl=1}
- In a block and tackle, count only the strands that pull on the *load* (the movable block); the strand where you pull does not count unless it also holds the load. {lvl=2}
- Ideal MA comes from geometry; actual MA is measured with friction. Efficiency is their ratio. {lvl=2}
- When a beam has weight, include it at the centre of the beam, not at the end. {lvl=3}
:::
