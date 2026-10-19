---
title: Pseudo forces
summary: Why you are pressed back in a speeding-up car, why a helium balloon leans forward, and how to use a "fake" force to make hard problems easy.
ncert: []
up_to: Olympiad
builds_on: [Inertia and the first law, Momentum and the second law, Free-body diagrams, Circular motion]
notes_prompt: Explain to a friend why you are pushed back into your seat when a car speeds up, using no force that is not exerted by something.
margin:
  - kind: history
    title: History
    text: "Newton thought a spinning bucket of water proved that rotation is absolute: the water climbs the walls even with nothing nearby to rotate against. Ernst Mach disagreed in the 1880s, and the argument fed directly into Einstein's thinking about gravity and acceleration [Unverified details]."
  - kind: tip
    title: Exam habit
    text: "Choose the frame in which the problem is simplest. If everything sits still in an accelerating cart, a lift or a turntable, add the pseudo force and solve a static problem. If bodies move in different ways, use the ground frame instead."
  - kind: olympiad
    title: Olympiad link
    text: "In a frame rotating at angular speed ω, a body moving with velocity v relative to the frame also feels the Coriolis force −2mω×v, at right angles to its motion. It steers the trade winds and the spin of cyclones."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 12 Characteristics of Force, the section on pseudo forces [Unverified chapter reference]" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 5 Force and Motion I: inertial reference frames, and the elevator-scale sample problem [Unverified chapter reference]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 1 · 1.3 Dynamics of a particle, problems on non-inertial frames [Unverified section reference]" }
cards:
  - { front: "What is a pseudo force?", back: "An extra force $-m\\vec A$ that we add on every body when we use a frame accelerating with $\\vec A$, so that $\\vec F = m\\vec a$ keeps working there. No body exerts it; it has no reaction." }
  - { front: "Which way does the pseudo force point?", back: "Opposite to the acceleration of the frame. Car speeding up: backward. Lift accelerating up: downward. Car on a turn: away from the centre." }
  - { front: "Apparent weight in a lift accelerating with $a$ upward?", back: "$N = m(g + a)$. Accelerating downward: $N = m(g - a)$. In free fall $N = 0$." }
  - { front: "What is effective gravity?", back: "$\\vec g_{\\text{eff}} = \\vec g - \\vec A$: gravity plus the pseudo force per unit mass. Everything in the frame behaves as if this were the gravity." }
  - { front: "Centrifugal force, in one line?", back: "In a frame rotating at $\\omega$, a mass $m$ at distance $r$ from the axis feels $m\\omega^2 r$ outward. It is a pseudo force, not the reaction to the centripetal force." }
  - { front: "What is the Coriolis force?", back: "In a rotating frame, a body moving with relative velocity $\\vec v$ feels $-2m\\vec\\omega\\times\\vec v$, perpendicular to $\\vec v$. It does no work." }
core:
  idea: 'Newton''s laws hold only in inertial frames. In a frame that is itself accelerating with A, you can keep using F = ma if you add to every body an extra force −mA with no source and no reaction. Gravity and this pseudo force together make an effective gravity, and the frame''s whole world behaves as if it lived in it.'
  formulas:
    - tex: '\vec F_{\text{pseudo}} = -m\vec A'
      label: 'Frame accelerating with A: pseudo force on a mass m'
    - tex: '\vec g_{\text{eff}} = \vec g - \vec A'
      label: 'Effective gravity inside the accelerating frame'
    - tex: 'F_{\text{cf}} = m\omega^2 r'
      label: 'Rotating frame: centrifugal pseudo force, directed away from the axis'
  conditions:
    - 'The frame accelerates as a whole without turning (a lift, a car on a straight road) or rotates at a steady rate'
    - 'The pseudo force acts on every mass in the frame, in proportion to its mass, like a gravity'
    - 'It has no source and no third-law partner; it exists only for an observer in that frame'
    - 'Use the pseudo force in the accelerating frame or the real forces in the ground frame, never both in one equation'
  sign: 'The pseudo force points opposite to the frame''s acceleration. In a rotating frame, a body at rest has the centrifugal force outward, balanced by a real force inward. Never add a centripetal and a centrifugal force in the same equation.'
outcomes:
  - 'Explain, in the ground frame and in the car frame, why a passenger is thrown forward when a car brakes'
  - 'Find the apparent weight in a lift, and the angle of a hanging bob in an accelerating bus'
  - 'Build effective gravity and use it for pendulums, liquid surfaces, blocks on wedges and floating bodies'
  - 'Use the centrifugal force to solve turntable and turn problems in the rotating frame'
  - 'Describe the Coriolis force, and say why pseudo forces do not break Newton''s third law'
opener:
  story: |
    You are in a train at the platform with a ball on the table in front of you. The train starts to pull out. Without anyone touching it, the ball rolls backward, toward the tail of the train. Something pushed it. Or did it?

    Look out of the window and the puzzle changes. The platform sees the ball calmly staying where it was, while the train slid forward underneath it. From outside, nothing pushed the ball at all. From inside, there seemed to be a push, strong enough to roll a ball and press you against the seat.

    Which view is right? Both. And the second one is surprisingly useful: if you are willing to believe in a push that nobody exerts, you can solve lifts, tilted pendulums and merry-go-rounds as if everything were standing still. The price is knowing exactly what you are pretending.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A ball rolls to the back of a train that accelerates forward"><rect x="40" y="90" width="240" height="90" rx="10" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><rect x="62" y="104" width="38" height="28" rx="3" style="fill:var(--surface);stroke:var(--muted)"/><rect x="132" y="104" width="38" height="28" rx="3" style="fill:var(--surface);stroke:var(--muted)"/><rect x="202" y="104" width="38" height="28" rx="3" style="fill:var(--surface);stroke:var(--muted)"/><circle cx="90" cy="156" r="8" style="fill:var(--chem)"/><path d="M146 156 L110 156" style="stroke:var(--chem);stroke-width:2;stroke-dasharray:4 4"/><path d="M116 150 L108 156 L116 162" style="fill:none;stroke:var(--chem);stroke-width:2"/><circle cx="90" cy="196" r="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="230" cy="196" r="10" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M250 60 L300 60" style="stroke:var(--ink);stroke-width:2"/><path d="M292 52 L302 60 L292 68" style="fill:none;stroke:var(--ink);stroke-width:2"/><text x="226" y="50" style="font-size:11px;fill:var(--muted)">train speeds up</text><text x="40" y="230" style="font-size:11px;fill:var(--muted)">the ball seems pushed backward</text></svg>'
life:
  - 'You lean forward when a bus brakes, backward when it starts, and outward on a turn: each is a pseudo force felt in the bus frame.'
  - 'A lift feels heavier when it starts going up and lighter when it starts going down, and a bathroom scale in it shows that in numbers.'
  - 'A salad spinner, a washing-machine dryer and a funfair rotor all work by getting out of the way of the water or people, which fly off in a straight line.'
  - 'Astronauts on the space station are weightless not because gravity is absent but because station and astronauts fall together.'
  - 'Trade winds, the direction cyclones spin, and the long-range gunner''s correction all come from the Earth''s rotation (the Coriolis force).'
models:
  - name: 'Change the viewpoint, not the world'
    text: 'When a problem is hard from one position, step into another where it is simple. Physics, negotiating and debugging all reward the question "what would this look like from there?"'
  - name: 'Fictions can be useful if you know they are fictions'
    text: 'A pseudo force is a bookkeeping device. Averages, exchange rates and "equivalent" quantities are the same kind of tool: valuable while you remember what they stand for.'
  - name: 'Felt force is not the same as real force'
    text: 'What you feel pushing you can come from where you stand rather than from anything pushing. Before blaming a force, ask: what is the observer doing?'
links:
  - leaf: 'phy/inertia-and-the-first-law'
    name: 'Inertia and the first law'
    same: 'The first law only holds in inertial frames, and pseudo forces are what you see when the frame is not one. A body left alone keeps its velocity in the ground frame, and so the passenger is "thrown" forward.'
    differs: 'The first law says what happens with no force on a body; a pseudo force is a correction that restores the law for an observer who is accelerating.'
  - leaf: 'phy/circular-dynamics'
    name: 'Dynamics of circular motion'
    same: 'Every circular-motion problem can be solved in two ways: in the ground frame with a centripetal acceleration, or in the rotating frame with a centrifugal force and no acceleration.'
    differs: 'Centripetal means "a real net force toward the centre"; centrifugal is a pseudo force, away from the centre, that exists only in the rotating frame.'
next:
  q: 'You carry a heavy bag along a level road. It gets no faster and no higher, but you are tired. Did you do any physics "work" on the bag?'
  leaf: 'phy/work-done-by-a-force'
  name: 'Work done by a force'
symbols:
  - s: 'm'
    means: 'mass of the body (kg)'
  - s: '\vec A'
    means: 'acceleration of the frame (the lift, the bus) relative to the ground (m/s²)'
  - s: '\vec F_{\text{pseudo}}'
    means: 'pseudo force, equal to −m times the frame''s acceleration (N)'
  - s: '\vec g_{\text{eff}}'
    means: 'effective gravity inside the accelerating frame (m/s²)'
  - s: 'N'
    means: 'normal force, the push of the floor or scale (N); the scale reads this'
  - s: '\theta'
    means: 'angle of a string with the vertical (degrees)'
  - s: '\omega'
    means: 'angular speed of the rotating frame (rad/s)'
  - s: 'r'
    means: 'distance of the body from the axis of rotation (m)'
  - s: 'F_{\text{cf}}'
    means: 'centrifugal pseudo force on a body in the rotating frame (N)'
  - s: 'g'
    means: 'acceleration of free fall, 9.8 m/s²'
---

:::hook
q: A helium balloon floats in a closed car at a red light. The light turns green and the car speeds up forward. Does the balloon swing forward, backward, or stay put?
options: ["Forward, toward the windscreen", "Backward, toward the rear window", "Stays upright", "Moves up to the roof"]
answer: 0
right: Forward. Everything loose swings back, so you would guess the balloon does too. But the balloon floats because it is lighter than the air around it, so it goes where the air does not want to be. When the car speeds up, the air piles toward the back, and the balloon moves the opposite way. By the end of the lesson you will see this as a one-line calculation.
wrong: Your guess is natural: loose things swing backward. But the balloon is lighter than air, so it behaves the opposite way from a heavy bob: it floats up in a tilted gravity. We will find out which way "up" tilts.
:::

## Pushed by nobody {lvl=1 id=s-nobody label="Class 9"}

Stand in a bus that is standing still, holding the rail loosely. The driver pulls away, and you stagger backward. Brake hard, and you lurch forward. Round a sharp bend and you slide to the outside. Each time you felt a push, and each time no person or object pushed you.

Here is what really happened, seen from the road. When the bus starts, **your body is just carrying on at rest** (inertia, the first law) while the floor is dragged forward under you. When the bus brakes, your body keeps going at the old speed until the seat belt or the seat in front stops you. No force pushed you forward; a force was missing.

From inside the bus it looks different: the bus feels like the fixed world, and you seem to be shoved. The physicist's trick is to keep using this view anyway, by **inventing a force** that does the shoving. It is called a **pseudo force** ("pseudo" means fake): it feels real, it has a size and a direction, but nobody applies it. It appears only because the observer's own frame is speeding up, slowing down or turning.

:::qc lvl=1
q: A car brakes hard. In the road frame, what pushes the passenger forward?
options: ["The passenger's inertia pushes forward", "Nothing pushes; the car slows and the passenger just keeps moving", "The brakes push the passenger forward"]
answer: 1
right: Right. With no force on the passenger, the passenger keeps going at the old velocity. "Inertia" is not a force; it is the tendency to keep going.
wrong: Forces come from other bodies, and nothing is pushing the passenger forward. Think about what the first law says for a body with no net force.
:::

## Add one force, and Newton works again {lvl=2 id=s-rule label="Class 11"}

Newton's second law, $F = ma$, works in the ground frame (and any frame moving at a steady velocity: an inertial frame). Suppose you ride in a frame whose own acceleration, seen from the ground, is $A$. A body of mass $m$ has acceleration $a_{\text{ground}}$ in the ground frame, and you see it with $a_{\text{rel}} = a_{\text{ground}} - A$. Then
$$F_{\text{real}} = m\,a_{\text{ground}} = m\,a_{\text{rel}} + mA \quad\Longrightarrow\quad F_{\text{real}} - mA = m\,a_{\text{rel}}.$$
Read it as: your own acceleration, times the mass, can be moved to the other side as one extra force, $-mA$. So the rule for the accelerating frame is: **add a pseudo force $-mA$ to every body, opposite to the frame's acceleration, and then use $F = ma$ as usual.**

:::worked title="The bob in the bus"
A bob hangs from the roof of a bus that accelerates forward at 2.0 m/s². In the bus the bob hangs at rest at some angle. Three forces act on it: the tension $T$ along the string, its weight $mg$ down and the pseudo force $ma$ backward. At rest, the forces balance in each direction: $T\cos\theta = mg$ and $T\sin\theta = ma$. Divide: $\tan\theta = a/g = 2.0/9.8$, so $\theta = 11.5^\circ$, the bob displaced backward.

The ground frame gives the same answer without a pseudo force: the horizontal part of the tension is what gives the bob the bus's acceleration, $T\sin\theta = ma$, and $T\cos\theta = mg$. Two frames, two pictures, one angle.
:::

:::figure caption="A bob in a bus that speeds up. In the bus frame three forces balance: tension, weight and the pseudo force (dashed) pointing backward. The string tilts back at tan θ = a/g."
<svg viewBox="0 0 360 230" role="img" aria-label="A bob hangs in a bus accelerating forward with a pseudo force pointing backward">
<defs><marker id="pfb1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="pfb2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<rect class="ln m2" x="30" y="60" width="300" height="130" rx="8"/>
<line class="faint" x1="170" y1="60" x2="170" y2="150"/>
<line class="ln" x1="170" y1="60" x2="132" y2="140"/>
<circle class="obj" cx="132" cy="140" r="8"/>
<line class="ray" x1="132" y1="140" x2="150" y2="102" marker-end="url(#pfb1)"/><text class="k" x="152" y="104">T</text>
<line class="ray" x1="132" y1="148" x2="132" y2="190" marker-end="url(#pfb1)" style="opacity:0"/>
<line class="ray" x1="132" y1="152" x2="132" y2="180" marker-end="url(#pfb1)"/><text class="k" x="138" y="178">mg</text>
<line class="wf" x1="124" y1="140" x2="84" y2="140" marker-end="url(#pfb2)" style="stroke-dasharray:4 3"/><text class="k" x="50" y="134">ma</text>
<line class="ln" x1="250" y1="44" x2="310" y2="44" marker-end="url(#pfb1)"/><text x="230" y="36">bus accelerates, A</text>
<text x="176" y="100">θ</text>
<circle class="ln" cx="80" cy="200" r="10"/><circle class="ln" cx="280" cy="200" r="10"/>
</svg>
:::

Two points of honesty. First, the pseudo force **has no reaction**: there is no body for it to push back on, so Newton's third law is not broken, it is simply not applicable to a force that no body exerts. Second, the equation $F_{\text{real}} - mA = m\,a_{\text{rel}}$ lists only the real forces and the single fake one: do not add a real push *and* the pseudo force in the same frame as if they were independent causes.

:::qc lvl=2
q: A bus accelerates forward at 2.0 m/s². In the bus frame, the pseudo force on a 50 kg passenger is
options: ["100 N backward", "100 N forward", "50 N backward"]
answer: 0
right: Right. Size ma = 50 × 2.0 = 100 N, opposite to the bus's acceleration, so backward. The seat pushes forward with a real force of 100 N, and that is what makes the passenger accelerate with the bus.
wrong: The pseudo force is mass times the frame's acceleration, pointing opposite to it. What is 50 × 2.0, and which way is opposite to forward?
:::

## Lifts and apparent weight {lvl=2 id=s-lift label="Class 11"}

A scale does not measure your mass or your "weight"; it reports how hard it is pushed up, the normal force $N$. In a lift that accelerates, that number changes, and the pseudo force explains why.

Take a 70 kg person in a lift that starts going down with acceleration 1.5 m/s². In the lift frame, the person is at rest under three forces: weight $mg$ down, the pseudo force $ma$ up (opposite to the lift's downward acceleration) and the scale's push $N$ up. At rest, $N + ma = mg$, so $N = m(g - a) = 70 \times 8.3 = 581$ N, which the scale shows as 59 kg instead of 70. You feel lighter. Going up with the same acceleration, $N = m(g + a) = 70 \times 11.3 = 791$ N, and you feel heavier.

| What the lift is doing | Its acceleration | Scale reads | You feel |
|---|---|---|---|
| steady speed, up or down, or at rest | 0 | $mg$ | normal |
| speeding up going up, or slowing going down | $a$ upward | $m(g+a)$ | heavier |
| speeding up going down, or slowing going up | $a$ downward | $m(g-a)$ | lighter |
| the cable snaps | $g$ downward | 0 | weightless |

Notice that **what matters is the acceleration, not the direction of motion**: a lift moving up but slowing down makes you lighter, like one moving down and speeding up. In the last row, the pseudo force $mg$ upward exactly cancels the weight: the scale reads zero, and you float. This is what astronauts feel on the space station: not "no gravity" but free fall (the space station and everything in it fall together), so there is nothing for any support to push against.

:::qc lvl=2
q: A lift moving upward slows down as it approaches the top floor. A person standing in it
options: ["feels heavier", "feels lighter", "feels normal, as the lift is still moving up"]
answer: 1
right: Right. Slowing down while going up means the acceleration is downward, so the pseudo force is upward and the scale reads less than mg.
wrong: Look at the acceleration, not the direction of motion. If the speed upward is falling, which way does the acceleration point?
:::

## Effective gravity {lvl=3 id=s-eff label="JEE"}

Here is the deep reason why pseudo forces are so handy. The pseudo force is proportional to the mass, exactly like weight. So inside the accelerating frame, gravity and the pseudo force combine into a single "gravity"
$$\vec g_{\text{eff}} = \vec g - \vec A.$$
Read it as: the gravity you feel is the real gravity minus the frame's acceleration. Inside the frame **everything behaves as if this were the true gravity**: things fall along $\vec g_{\text{eff}}$, hang along it, float against it, and water surfaces set themselves at right angles to it.

That one sentence solves a whole shelf of problems.

- **Lift going up at $a$:** $g_{\text{eff}} = g + a$, straight down. A pendulum of length 1.0 m in a lift accelerating up at 2.0 m/s² has period $2\pi\sqrt{L/g_{\text{eff}}} = 2\pi\sqrt{1.0/11.8} = 1.83$ s, instead of 2.01 s. In free fall, $g_{\text{eff}} = 0$ and it does not swing at all.
- **Bus speeding up at $a$:** $g_{\text{eff}} = \sqrt{g^2 + a^2}$ pointing down and backward at an angle $\tan\theta = a/g$. The bob hangs along it; the water surface in a tank sets itself perpendicular to it, tilting at the same angle. Hence 3 m/s² gives a tilt of 17°.
- **The helium balloon.** Effective gravity points down and backward. A balloon is lighter than air, so it floats against $g_{\text{eff}}$: up and forward. When the car speeds up, the balloon swings forward. (Seen from the road: the heavy air piles toward the back, and the pressure is higher there, so the net pressure force on the balloon points forward. Same answer, the other frame.)

:::worked title="Block at rest on a moving wedge"
A smooth wedge of incline 30° is pushed horizontally with a constant acceleration $a$, and a small block rests on the inclined face without sliding. Find $a$. In the wedge frame the block is at rest, so $g_{\text{eff}}$ must be perpendicular to the smooth face (otherwise the block would slide along it). The vertical makes an angle of 30° with the perpendicular to the face, and $g_{\text{eff}}$ is tilted from the vertical by $\tan^{-1}(a/g)$, so $a/g = \tan30^\circ$ and $a = 9.8 \times 0.577 = 5.66$ m/s².

(With forces: along the incline the pseudo force component $ma\cos\theta$ must balance $mg\sin\theta$, so $a = g\tan\theta$. Same answer.)
:::

:::qc lvl=3
q: A pendulum clock with a bob on a rod is carried in a lift that accelerates downward at g/2. Compared with its rate at rest, the clock runs
options: ["faster", "slower", "at the same rate"]
answer: 1
right: Right. g_eff = g − g/2 = g/2, so the period 2π√(L/g_eff) grows by √2 and the clock runs slower.
wrong: Find the effective gravity: g_eff = g − A. The period is 2π√(L/g_eff). A smaller g_eff means a longer period.
:::

## Turntables, turns and the centrifugal force {lvl=3 id=s-rotating label="JEE"}

A frame that rotates is accelerating too: every point in it goes in a circle, with an acceleration $\omega^2 r$ toward the axis. So the pseudo force on a mass at rest in a frame rotating at angular speed $\omega$, at distance $r$ from the axis, is $m\omega^2 r$ pointing **away** from the axis. It is called the **centrifugal force** ("centre-fleeing").

:::figure caption="A coin on a turntable, seen from above. In the turntable frame the coin sits still: friction (real) pulls it inward, and the centrifugal pseudo force (dashed) pushes it outward with m ω² r."
<svg viewBox="0 0 360 230" role="img" aria-label="Top view of a turntable with a coin, friction inward and centrifugal force outward">
<defs><marker id="pft1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="pft2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<circle class="ln m2" cx="180" cy="115" r="90"/>
<circle class="obj" cx="180" cy="115" r="3"/>
<line class="faint" x1="180" y1="115" x2="250" y2="115"/><text x="206" y="108">r</text>
<circle class="obj" cx="250" cy="115" r="7"/>
<line class="ray" x1="244" y1="115" x2="205" y2="115" marker-end="url(#pft1)"/><text class="k" x="204" y="136">friction f</text>
<line class="wf" x1="258" y1="115" x2="300" y2="115" marker-end="url(#pft2)" style="stroke-dasharray:4 3"/><text class="k" x="278" y="136">m ω² r</text>
<path class="faint" d="M180 40 A75 75 0 0 1 255 115"/>
<text x="120" y="38">turns at ω</text>
<text x="30" y="214">rotating frame: f balances the centrifugal force</text>
</svg>
:::

:::worked title="The coin that stays on the turntable"
A coin lies 0.10 m from the centre of a turntable; static friction can hold it with at most $\mu_s mg$, and $\mu_s = 0.30$. In the turntable frame the coin is at rest, so friction (inward) balances the centrifugal force (outward): $m\omega^2 r = f \le \mu_s mg$. The mass cancels:
$$\omega_{\max} = \sqrt{\frac{\mu_s g}{r}} = \sqrt{\frac{0.30 \times 9.8}{0.10}} = 5.4\ \text{rad/s}\ (\approx 52\ \text{rev/min}).$$
In the ground frame the same condition is $f = m\omega^2 r$, with friction supplying the centripetal acceleration, and no pseudo force. Same numbers, one picture simpler.

A car on a level turn of radius 50 m at 10 m/s has a ball hanging on a string. In the car frame the ball is at rest under tension, weight and a centrifugal force $mv^2/R$ outward: $\tan\theta = v^2/(Rg) = 100/(50 \times 9.8)$, so $\theta = 11.5^\circ$, the ball swinging outward.
:::

A frequent confusion: the centrifugal force is **not** the reaction to the centripetal force. The centripetal force is a real force (friction, tension, gravity) acting on the body. Its reaction acts on a different body: the coin pulls the turntable back with an equal and opposite friction. The centrifugal force is the pseudo force felt in the rotating frame alone, and in that frame there is no centripetal acceleration for it to "balance" except the one the frame itself has. If you work in the ground frame, forget centrifugal force entirely.

When a washing-machine drum spins, the water is not thrown outward by any force. Seen from the ground, the wet clothes are forced round by the drum, while the water, not held, goes straight off along the tangent, through the holes.

:::qc lvl=3
q: A stone is whirled on a string in a horizontal circle. Which frame needs a centrifugal force to describe it?
options: ["The ground frame", "The frame rotating with the stone", "Both frames"]
answer: 1
right: Right. In the ground frame the stone accelerates toward the centre because the string pulls it that way, and no centrifugal force appears. Only in the stone's rotating frame is it at rest, and then the outward centrifugal force is needed to balance the string.
wrong: Centrifugal force appears only for an observer who rotates with the stone. The ground observer uses the real tension, and the acceleration v²/R.
:::

## The Coriolis force and the Earth {lvl=4 id=s-coriolis label="Olympiad"}

If the body is moving in the rotating frame, there is a second pseudo force. Suppose you stand on a merry-go-round turning anticlockwise at $\omega = 0.5$ rad/s and walk straight outward along a radius at 1.0 m/s. Seen from the ground, two things change at once, and each gives an equal share of the effect.

1. As you move out, your distance $r$ grows, and so does the speed $\omega r$ of the ground under you. To keep up, your sideways speed must grow at the rate $\omega \times (\text{radial speed})$.
2. The direction of your radial velocity itself turns with the merry-go-round, again at the rate $\omega \times (\text{radial speed})$.

Add the two: a sideways acceleration $2\omega v$, here $2 \times 0.5 \times 1.0 = 1.0$ m/s². Someone has to supply a real sideways force, $m \times 1.0$ N, or else you drift off the radius. In the rotating frame, that is described as a pseudo force, the **Coriolis force**, $-2m\,\vec\omega \times \vec v$, at right angles to the relative velocity: to the right of the motion for an anticlockwise frame. It does no work, since it is perpendicular to $\vec v$.

The Earth is such a frame, turning once in a day. Two consequences are real and easy to state:

- **Centrifugal part.** At the equator, $\omega^2R = (7.29\times10^{-5})^2 \times 6.37\times10^6 = 0.034$ m/s², about 0.35% of $g$. So you weigh a little less at the equator than at the poles; this is one reason $g$ changes with latitude. If the Earth turned about 17 times faster (a day of about 84 minutes), objects at the equator would float.
- **Coriolis part.** Winds moving toward a low-pressure region are turned to their right in the Northern Hemisphere, so cyclones spin anticlockwise there, and clockwise in the south. (The old story that bathtub drains swirl one way north and the other way south is mostly a myth: at that scale the Coriolis force is far too weak compared with other effects.)

**Choosing the frame.** If everything in the problem sits at rest in one accelerating or rotating thing (a lift, a bus, a turntable), use that frame and a pseudo force: you get a statics problem. If bodies move independently, use the ground frame. In both, the physics is the same; only the bookkeeping differs.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. In a speeding-up, braking or turning vehicle you feel a push that no body exerts: a pseudo force. {lvl=1}
2. In a frame accelerating with $A$, add $-mA$ to every body, opposite to the frame's acceleration, and use $F = ma$. {lvl=2}
3. Apparent weight in a lift: $m(g \pm a)$; only acceleration matters, and in free fall the apparent weight is zero. {lvl=2}
4. Effective gravity $\vec g_{\text{eff}} = \vec g - \vec A$ governs pendulums, liquid surfaces, floating and blocks at rest in the frame. {lvl=3}
5. Rotating frame: centrifugal force $m\omega^2 r$ outward. It is a pseudo force, not the reaction to the centripetal force. {lvl=3}
6. A body moving in a rotating frame also feels the Coriolis force $-2m\vec\omega\times\vec v$; it turns winds and cyclones. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Adding a pseudo force and also using the acceleration of the frame in the same equation (counting it twice). {lvl=2}
- Drawing the pseudo force in the same direction as the frame's acceleration: it points opposite. {lvl=2}
- Calling the centrifugal force the reaction to the centripetal force. They act on different bodies, or in different frames. {lvl=3}
- Using a pseudo force in the ground frame. It exists only in the accelerating frame. {lvl=2}
- Forgetting that a pseudo force exists for every mass in the frame, including the air and the water. {lvl=3}
:::
