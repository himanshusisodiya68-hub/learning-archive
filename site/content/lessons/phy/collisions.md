---
title: Collisions
summary: Why a Newton's cradle sends out exactly one ball, how momentum and the bounciness of a crash fix every speed afterwards, and where the lost energy goes.
ncert: ["Class 11 Physics · Ch 5 Work, Energy and Power (§5.12–5.13 Collisions: elastic and inelastic, in one and two dimensions)", "Class 11 Physics · Ch 6 System of Particles and Rotational Motion (§6.3 momentum of a system)"]
up_to: Olympiad
builds_on: [Momentum and the second law, Third law, Kinetic and potential energy, Conservative forces]
notes_prompt: Explain to a friend why a Newton's cradle sends out one ball at the same speed, and why it cannot send out two balls at half the speed.
margin:
  - kind: history
    title: History
    text: In 1668 the Royal Society asked for the rules of collision. Wallis, Wren and Huygens each sent a correct answer for different cases [Unverified details, from memory]. Newton later measured how bouncy colliding balls of steel, glass and cork were, using pendulums, which is how the "coefficient of restitution" began.
  - kind: tip
    title: Exam habit
    text: "Write momentum conservation first, every time. It is true for every collision in which no big outside force acts. Use energy only if the problem says elastic, or tells you e."
  - kind: olympiad
    title: Olympiad link
    text: "A small ball bouncing between a wall and a big ball sliding towards it collides a number of times that spells out the digits of pi: for a mass ratio of 100 there are 31 collisions, for 10,000 there are 314, for a million 3,141 (we checked these by simulation)."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 9 Centre of Mass and Linear Momentum, §9-4 to §9-8 (impulse, inelastic and elastic collisions in one and two dimensions)" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 10 Conservation of Momentum [Unverified chapter number, from memory]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapter on Centre of Mass, Linear Momentum, Collision [Unverified]" }
cards:
  - { front: "What is conserved in every collision with no outside force?", back: "The total momentum: $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$, a vector statement. The contact forces are equal and opposite at every instant, so they cannot change the total." }
  - { front: "What is conserved only in an elastic collision?", back: "The total kinetic energy. In an inelastic collision some of it becomes heat, sound and deformation." }
  - { front: "Coefficient of restitution?", back: "$e = \\dfrac{\\text{speed of separation}}{\\text{speed of approach}} = \\dfrac{v_2 - v_1}{u_1 - u_2}$. It is 1 for elastic, 0 for stick-together, and in between for real bouncing." }
  - { front: "A ball dropped from height $h$ rebounds to $h'$. What is $e$?", back: "$e = \\sqrt{h'/h}$: speeds are proportional to the square roots of the heights." }
  - { front: "What happens in a head-on elastic collision of equal masses?", back: "They swap velocities. A moving ball stops dead and a resting ball takes off with the first ball's speed." }
  - { front: "Kinetic energy lost in a head-on collision?", back: "$\\Delta K = \\tfrac12\\mu(1 - e^2)(u_1 - u_2)^2$ with $\\mu = m_1m_2/(m_1 + m_2)$. It is zero for $e=1$ and largest for $e=0$." }
core:
  idea: 'In any collision where no big outside force acts, the total momentum is the same just before and just after. If the bodies also bounce back perfectly (elastic), the total kinetic energy is conserved too and the speed of separation equals the speed of approach. Otherwise the coefficient of restitution e says how much of the approach speed is regained.'
  formulas:
    - tex: 'm_1u_1 + m_2u_2 = m_1v_1 + m_2v_2'
      label: 'Conservation of momentum (all collisions, no outside force)'
    - tex: 'e = \dfrac{v_2 - v_1}{u_1 - u_2},\qquad 0 \le e \le 1'
      label: 'Coefficient of restitution (1D); e = 1 elastic, e = 0 sticking'
    - tex: '\Delta K = \tfrac12\,\dfrac{m_1m_2}{m_1+m_2}\,(1 - e^2)\,(u_1 - u_2)^2'
      label: 'Kinetic energy lost in a head-on collision'
  conditions:
    - 'The collision is so brief and the contact forces so large that outside forces (gravity, friction, a spring) change the momentum by a negligible amount during it'
    - 'Head-on (one dimension) for the formula for e; in two dimensions e applies only along the line of centres'
    - 'Elastic means the forces during contact are conservative, so all the kinetic energy that went into squeezing the bodies comes back'
  sign: 'Pick one positive direction and keep the signs of the velocities. The speed of approach is u₁ − u₂ with the signs in, and the separation speed is v₂ − v₁. Never use energy conservation for an inelastic collision.'
outcomes:
  - 'Use momentum conservation to find the final speed when two bodies stick together or bounce'
  - 'Tell elastic, inelastic and completely inelastic collisions apart, and say where the lost energy goes'
  - 'Find both final velocities of a head-on collision from the masses, the initial velocities and e'
  - 'Solve a ballistic pendulum and a glancing collision of equal masses'
  - 'Use the "moving wall" frame trick to find speeds after bounces off moving objects'
opener:
  story: |
    You may have seen one on a desk: five steel balls hanging in a row, just touching. Lift the ball on the right and let go. Click. The ball on the far left swings out, and the three in the middle barely twitch. Lift two, and exactly two swing out on the other side. It looks like a trick, and it makes a good one at a party.

    Now the puzzle. When the first ball hits the row, nothing forces it to behave this way. It could share its push among all five and let them drift away together, slowly. Or it could send out two balls at half the speed. Nature never does either. It always sends out exactly one ball, at exactly the speed the first one arrived with.

    Two simple rules decide this, and the same two rules decide every car crash, every cricket shot and every game of carrom. Let's find them.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A Newton''s cradle: the right ball is lifted, and a dashed ball on the left shows where one ball will swing out"><rect x="60" y="30" width="200" height="8" rx="2" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/><g style="stroke:var(--muted);stroke-width:1"><line x1="100" y1="38" x2="100" y2="170"/><line x1="132" y1="38" x2="132" y2="170"/><line x1="164" y1="38" x2="164" y2="170"/><line x1="196" y1="38" x2="196" y2="170"/><line x1="228" y1="38" x2="304" y2="146"/></g><g style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--ink);stroke-width:1.4"><circle cx="100" cy="186" r="16"/><circle cx="132" cy="186" r="16"/><circle cx="164" cy="186" r="16"/><circle cx="196" cy="186" r="16"/></g><circle cx="304" cy="146" r="16" style="fill:var(--chem);stroke:var(--ink);stroke-width:1.4"/><line x1="100" y1="38" x2="26" y2="146" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4"/><circle cx="26" cy="146" r="16" style="fill:none;stroke:var(--ink);stroke-width:1.4;stroke-dasharray:4 4"/><text x="21" y="151" style="font-size:14px;fill:var(--ink)">?</text><text x="230" y="224" style="font-size:11px;fill:var(--muted)">let go here</text><text x="14" y="224" style="font-size:11px;fill:var(--muted)">how many swing out?</text></svg>'
life:
  - 'A cricket bat hitting a ball, a footballer heading a ball, a carrom striker hitting a coin: all are short, hard collisions where the speeds afterwards follow from momentum and bounciness.'
  - 'Car safety: the crumple zone makes the crash less elastic and longer, so the force on you is smaller. A car that bounced like a rubber ball would give you a worse jolt, because you would also have to be sent back.'
  - 'Railway shunting: a moving wagon bumps into a stationary one and couples to it, and the pair continues at a fraction of the speed. You can predict it with one line of arithmetic.'
  - 'Nuclear reactors use light atoms (heavy water, graphite) to slow down neutrons by collisions, because a light target takes most of the energy.'
  - 'Spacecraft such as Voyager gain speed by swinging past a planet, a kind of collision with a moving wall that never touches.'
models:
  - name: 'Conserve the thing nothing can steal'
    text: 'Energy can change form into heat or sound, but the total push (momentum) of a closed system cannot be lost. When a situation is messy, find what is conserved regardless and start there. The same logic is used in accounts: money moves between accounts but the total is fixed.'
  - name: 'Change your point of view'
    text: 'A hard problem often becomes easy when seen from another frame: the moving wall, or the centre of mass. Switch to the frame where the answer is obvious, then switch back.'
  - name: 'Two numbers describe a bounce'
    text: 'Masses fix how the push is shared; e fixes how much of the approach is returned. Two parameters are enough to describe a whole family of outcomes, much as speed and altitude describe a flight.'
links:
  - leaf: 'phy/centre-of-mass'
    name: 'Centre of mass'
    same: 'The centre of mass of the colliding bodies moves at the same velocity before and after the collision, since the contact forces are internal. That fact is the origin of momentum conservation.'
    differs: 'The centre of mass says what happens to the pair as a whole, and nothing about how the two bodies share it. Collisions need e as well.'
  - leaf: 'phy/kinetic-and-potential-energy'
    name: 'Kinetic and potential energy'
    same: 'During an elastic collision, kinetic energy turns into the elastic potential energy of the squeezed bodies and back again, like a spring.'
    differs: 'Total energy is always conserved, but in an inelastic collision the kinetic energy that does not come back has become heat and sound, which we do not follow.'
next:
  q: 'In every crash the pair as a whole carried on unaffected, as if the internal forces did not exist. Is there one special point in any body or group of bodies that always moves this simply, and how do you find it for a seesaw, a hammer or a family on a boat?'
  leaf: 'phy/centre-of-mass'
  name: 'Centre of mass'
symbols:
  - s: 'm_1,\ m_2'
    means: 'masses of the two bodies (kg)'
  - s: 'u_1,\ u_2'
    means: 'velocities just before the collision (m/s, with sign)'
  - s: 'v_1,\ v_2'
    means: 'velocities just after the collision (m/s, with sign)'
  - s: 'e'
    means: 'coefficient of restitution, a pure number between 0 and 1'
  - s: 'K'
    means: 'kinetic energy (J)'
  - s: '\Delta K'
    means: 'kinetic energy lost in the collision (J)'
  - s: '\mu'
    means: 'reduced mass m_1 m_2/(m_1+m_2) (kg)'
  - s: 'h,\ h^{\prime}'
    means: 'height before and after a bounce (m)'
---

:::hook
q: You pull back one ball of a Newton's cradle and release it. What swings out on the far side?
options: ["One ball, at the same speed", "Two balls, each at half the speed", "All four other balls, slowly, together", "Nothing: the energy is lost as sound"]
answer: 0
right: Right. Two balls at half speed carry the same momentum but only half the energy, so they are ruled out. One ball at full speed is the only outcome that keeps both the momentum and the energy.
wrong: Check the "two balls at half speed" idea for energy: two balls, each with a quarter of the original kinetic energy (half the speed, squared), add up to only half the original. Steel balls lose almost no energy, so the answer must keep both numbers.
:::

## What happens when things collide {lvl=1 id=s-what label="Class 9"}

A collision is a short, hard meeting between two bodies: a bat meets a ball, two cars meet, an electron bounces off an atom. It lasts a thousandth of a second or less, the force between them is huge, and it is very hard to follow in detail. We will not try.

Instead we use a trick from Newton's third law. During the meeting body 1 pushes body 2 and body 2 pushes body 1 with a force of equal size in the opposite direction, at every instant, for the same time. So the push that one body gains is exactly the push the other loses, and the **total momentum** of the pair does not change. Momentum is mass times velocity, and here velocity needs a sign for direction.

So: **total momentum just before = total momentum just after**, however complicated the contact was. This holds as long as no big outside force acts during the short meeting. (Gravity and friction exist, but over a thousandth of a second they hardly change anything.)

:::worked title="A car meets a parked car"
A 1200 kg car moving at 10 m/s bumps into a parked 800 kg car, and the two lock together. What speed do they have just after?

Momentum before: $1200\times10 + 800\times0 = 12000$ kg m/s. After, the combined 2000 kg moves with speed $v$: $2000v = 12000$, so $v = 6$ m/s.

Notice we never needed to know how strong the crash was or how long it lasted.
:::

:::qc lvl=1
q: A 2 kg trolley moving at 5 m/s hits a stationary 3 kg trolley and they stick. What is their speed afterwards?
options: ["2 m/s", "5 m/s", "2.5 m/s", "1 m/s"]
answer: 0
right: Right. Momentum before is 2 × 5 = 10 kg m/s. After, 5 kg moves together at 10/5 = 2 m/s.
wrong: Total momentum is conserved: 2 × 5 = 10 kg m/s before, so (2 + 3) × v = 10 and v = 2 m/s.
:::

## Sticky, bouncy, in between {lvl=2 id=s-kinds label="Class 11"}

Momentum is conserved in every collision, but that is not enough to decide the outcome. Compare two crashes of the 1200 kg car into the parked one: in the first they stick, in the second they bounce apart. Both conserve momentum, yet the speeds are different. What else distinguishes them? **Energy.**

Before the first crash, the car has $\tfrac12(1200)(10)^2 = 60{,}000$ J of kinetic energy. After it, the locked pair has $\tfrac12(2000)(6)^2 = 36{,}000$ J. A fifth... no, exactly 24,000 J, or 40%, has gone. It went into bending metal, heat in the crumpled panels and the bang. Energy is never destroyed, but the kinetic energy can be turned into other forms that you cannot easily turn back.

We sort collisions into three kinds.

| Kind | Momentum | Kinetic energy | After the collision |
|---|---|---|---|
| **Elastic** | conserved | conserved | bodies bounce apart as if on perfect springs (steel balls, atoms) |
| **Inelastic** | conserved | some lost | bodies bounce apart, slower than elastic (a tennis ball on grass) |
| **Completely inelastic** | conserved | the most possible lost | bodies stick and move together (the cars; a bullet in a block) |

Momentum is always conserved because it comes from the third law, with no escape route. Kinetic energy has an escape route: heat, sound and deformation. That is why we never use energy conservation in a crash unless the problem says it is elastic.

Why can kinetic energy come back in an elastic collision? While two steel balls touch, they squash slightly, like two springs. Their kinetic energy goes into stored elastic energy and then returns as they spring apart. If the force depends only on the separation, as for an ideal spring, the force is conservative and nothing is lost.

:::figure caption="The same head-on collision in two versions. Above: the bodies stick (completely inelastic). Below: they bounce apart (elastic). The momentum before and after is the same in both; the kinetic energy is not."
<svg viewBox="0 0 380 190" role="img" aria-label="Before and after pictures of a collision: bodies sticking and bodies bouncing apart">
<defs><marker id="cl1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<text x="8" y="16" class="k">sticky: after</text>
<rect x="10" y="26" width="46" height="30" rx="4" class="m2" style="stroke:var(--ink);stroke-width:1.2"/><text x="24" y="45" class="k">m₁</text>
<rect x="56" y="26" width="30" height="30" rx="4" class="m2" style="stroke:var(--ink);stroke-width:1.2"/><text x="64" y="45" class="k">m₂</text>
<line x1="94" y1="41" x2="140" y2="41" class="ray" marker-end="url(#cl1)"/><text x="100" y="32">v (slower)</text>
<text x="8" y="86" class="k">before (both)</text>
<rect x="10" y="96" width="46" height="30" rx="4" class="m2" style="stroke:var(--ink);stroke-width:1.2"/><text x="24" y="115" class="k">m₁</text>
<line x1="60" y1="111" x2="130" y2="111" class="ray" marker-end="url(#cl1)"/><text x="66" y="102">u₁</text>
<rect x="200" y="96" width="30" height="30" rx="4" class="m2" style="stroke:var(--ink);stroke-width:1.2"/><text x="208" y="115" class="k">m₂</text>
<text x="200" y="86">u₂ = 0</text>
<text x="8" y="150" class="k">bounce: after</text>
<rect x="10" y="158" width="46" height="26" rx="4" class="m2" style="stroke:var(--ink);stroke-width:1.2"/><text x="24" y="176" class="k">m₁</text>
<line x1="60" y1="171" x2="90" y2="171" class="ray" marker-end="url(#cl1)"/><text x="62" y="162">v₁</text>
<rect x="150" y="158" width="30" height="26" rx="4" class="m2" style="stroke:var(--ink);stroke-width:1.2"/><text x="158" y="176" class="k">m₂</text>
<line x1="184" y1="171" x2="260" y2="171" class="ray" marker-end="url(#cl1)"/><text x="190" y="162">v₂ (faster)</text>
</svg>
:::

:::qc lvl=2
q: Two clay balls collide head-on and stick. Which of these is NOT the same just before and just after?
options: ["the total momentum", "the total kinetic energy", "the total energy including heat", "the velocity of the centre of mass"]
answer: 1
right: Right. The kinetic energy drops because some of it becomes heat and deformation. The total energy, the momentum and the velocity of the centre of mass are all unchanged.
wrong: Momentum and the centre-of-mass velocity are always unchanged, and total energy including heat is conserved. It is the kinetic energy alone that is lost when the clay deforms.
:::

## The elastic trick {lvl=2 id=s-elastic label="Class 11"}

For an elastic head-on collision we have two equations (momentum and energy) and two unknowns (the two final velocities). A neat trick makes the algebra short. Write both conservation laws with the changes on each side:

$$m_1(u_1 - v_1) = m_2(v_2 - u_2)\qquad\text{(momentum)}$$
$$m_1(u_1^2 - v_1^2) = m_2(v_2^2 - u_2^2)\qquad\text{(energy)}$$

Divide the second by the first. The common factors $(u_1 - v_1)$ and $(v_2 - u_2)$ cancel (we are ignoring the case of no collision at all), leaving $u_1 + v_1 = v_2 + u_2$, or

$$u_1 - u_2 = v_2 - v_1.$$

Read it as: "the speed of approach equals the speed of separation". In an elastic collision the two bodies move apart as fast as they came together. Add the momentum equation and you can solve:

$$v_1 = \frac{(m_1 - m_2)u_1 + 2m_2u_2}{m_1 + m_2},\qquad v_2 = \frac{(m_2 - m_1)u_2 + 2m_1u_1}{m_1 + m_2}.$$

:::worked title="A catching-up collision"
A 2 kg block moving at 6 m/s catches up with a 4 kg block moving at 3 m/s in the same direction and collides elastically.

$v_1 = \dfrac{(2-4)(6) + 2(4)(3)}{6} = \dfrac{-12+24}{6} = 2$ m/s and $v_2 = \dfrac{(4-2)(3) + 2(2)(6)}{6} = \dfrac{6+24}{6} = 5$ m/s.

Checks: momentum $12 + 12 = 24$ before, $4 + 20 = 24$ after. Approach speed $6 - 3 = 3$, separation speed $5 - 2 = 3$. Kinetic energy $36 + 18 = 54$ J before and $4 + 50 = 54$ J after.
:::

Three special cases are worth carrying in your head.

1. **Equal masses swap velocities.** Put $m_1 = m_2$ and the formulas give $v_1 = u_2$ and $v_2 = u_1$. A moving ball hitting a resting one stops dead and the resting one moves off with its speed. That is the cradle: each ball hands the whole motion to the next, down the row, and the last ball goes out with the original speed.
2. **A heavy body hits a light one at rest.** The heavy body hardly slows, and the light one flies off at about **twice** the heavy body's speed ($v_2 \approx 2u_1$ when $m_1 \gg m_2$).
3. **A light body hits a heavy one at rest.** The light body bounces straight back with almost its own speed, and the heavy one hardly moves. A ball bouncing off a wall is this case.

Why not two balls at half speed in the cradle? That outcome has the right momentum, $2\times\tfrac12 = 1$ unit, but its kinetic energy is $2\times\tfrac12\times\tfrac14 = \tfrac14$ of the original mass-speed-squared, half of what we started with. Only one ball at the original speed satisfies both laws.

:::qc lvl=2
q: A 1 kg ball moving at 3 m/s collides elastically and head-on with an identical ball at rest. The speeds afterwards are
options: ["both 1.5 m/s", "first 0, second 3 m/s", "first 3 m/s, second 0", "first 1 m/s, second 2 m/s"]
answer: 1
right: Right. Equal masses in an elastic head-on collision swap velocities.
wrong: Try each option for momentum (3 kg m/s) and energy (4.5 J). Only the swap, first 0 and second 3 m/s, keeps both.
:::

## How bouncy is it? {lvl=2 id=s-e label="Class 11"}

Real balls are neither perfectly springy nor perfectly sticky. A tennis ball on a cement floor bounces back at about three quarters of its landing speed; a ball of putty does not bounce at all. The **coefficient of restitution** $e$ puts a number on this:

$$e = \frac{\text{speed of separation}}{\text{speed of approach}} = \frac{v_2 - v_1}{u_1 - u_2}.$$

Read it as: "how much of the speed with which they came together do they regain as they move apart". Elastic collisions have $e = 1$, completely inelastic ones have $e = 0$ (no separation: they stick), and everything real lies between.

:::worked title="A ball dropped on a floor"
A ball is dropped from 2.0 m onto a floor with $e = 0.8$. It arrives at $v = \sqrt{2gh} = \sqrt{2\times9.8\times2.0} = 6.26$ m/s. The floor does not move, so the rebound speed is $0.8\times6.26 = 5.0$ m/s, and the ball rises to $h' = v'^2/2g = 1.28$ m.

Notice $h'/h = 0.64 = e^2$. In general $e = \sqrt{h'/h}$. The next bounce reaches 0.82 m, then 0.52 m, each $e^2$ times the previous.
:::

Two bodies with any $e$: combine the momentum equation with the definition of $e$, and you get

$$v_1 = \frac{(m_1 - em_2)u_1 + m_2(1+e)u_2}{m_1 + m_2},\qquad v_2 = \frac{(m_2 - em_1)u_2 + m_1(1+e)u_1}{m_1 + m_2}.$$

Setting $e = 1$ returns the elastic formulas, and $e = 0$ gives $v_1 = v_2 = (m_1u_1 + m_2u_2)/(m_1+m_2)$, the stuck-together answer. Check with a 2 kg body at +5 m/s and a 3 kg body at $-1$ m/s, with $e = 0.5$: $v_1 = [(2 - 1.5)5 + 3(1.5)(-1)]/5 = -0.4$ m/s.

:::qc lvl=2
q: A ball is dropped from 1.0 m and rebounds to 0.25 m. The coefficient of restitution is
options: ["0.25", "0.5", "0.75", "0.0625"]
answer: 1
right: Right. e = √(h′/h) = √0.25 = 0.5. Speeds, not heights, are in the ratio e.
wrong: Heights go as the square of the speeds, so e is the square root of the height ratio: √(0.25/1.0) = 0.5.
:::

## Collision, then swing {lvl=3 id=s-pendulum label="JEE"}

The ballistic pendulum is the classic combination of the two ideas. A bullet is fired into a hanging block, and the block swings up. The speed of the bullet can be found from the height of the swing, with no fast clock needed.

There are two stages, and each has its own conservation law:

1. **The collision** is brief and the bullet sticks. Momentum is conserved. Kinetic energy is not.
2. **The swing** takes a second or so. Now gravity is the only force doing work (the string does none), and mechanical energy is conserved.

:::worked title="Ballistic pendulum"
A 20 g bullet moving at 250 m/s embeds in a 1.98 kg block hanging on long strings. The total mass is 2.00 kg.

Stage 1 (momentum): $0.020\times250 = 2.00\,v$, so $v = 2.5$ m/s just after the impact.

Stage 2 (energy): $\tfrac12v^2 = gh$, so $h = 6.25/19.6 = 0.32$ m.

Energy check: the bullet had $\tfrac12(0.02)(250)^2 = 625$ J; the block and bullet have only $\tfrac12(2)(2.5)^2 = 6.25$ J just after. 99% of the energy went into heat in the wood. The common mistake is to write $\tfrac12mu^2 = (m+M)gh$ across the whole event, which pretends stage 1 lost nothing.
:::

## The centre-of-mass view {lvl=3 id=s-cm label="JEE"}

Seen from the centre of mass, any collision looks simple. In that frame the total momentum is zero, so the two bodies move in opposite directions with equal momenta $p$, and their combined kinetic energy is $p^2/2m_1 + p^2/2m_2 = p^2/2\mu$, where $\mu = m_1m_2/(m_1+m_2)$ is called the **reduced mass**. (The next lesson, on the centre of mass, builds this frame fully.) In terms of the relative speed $u_{rel} = u_1 - u_2$, this energy is $\tfrac12\mu\,u_{rel}^2$.

After the collision the relative speed has been multiplied by $e$ (that is what $e$ means), so each body's speed has been multiplied by $e$, and the kinetic energy by $e^2$. The kinetic energy lost is therefore

$$\Delta K = \tfrac12\mu\,u_{rel}^2\,(1 - e^2).$$

Read it as: "the lost energy is the energy of the relative motion times $1-e^2$". The energy of the centre of mass moving along is untouched. Check on the car crash: $\mu = 1200\times800/2000 = 480$ kg, $u_{rel} = 10$ m/s, $e = 0$, so $\Delta K = \tfrac12(480)(100) = 24{,}000$ J, as we found.

The same idea tells you about springs. Let a 1 kg block moving at 4 m/s hit a spring fixed to a 3 kg block at rest. The spring is shortest at the moment the two blocks have the **same velocity**, since the compression stops growing exactly when the relative velocity is zero. That common velocity is $1\times4/4 = 1$ m/s, and the kinetic energy that has not gone into the spring is $\tfrac12(4)(1)^2 = 2$ J. The remaining 6 of the 8 J is stored in the spring.

:::note title="Is energy always lost?" tone=olympiad
In an ordinary crash the kinetic energy decreases. It can also **increase**: if the bodies carry stored energy that the collision releases (a compressed spring, an explosive, a nuclear reaction), then $e > 1$ is possible and the kinetic energy afterwards is greater. So "kinetic energy never rises in a collision" is true only for passive bodies.
:::

## Glancing collisions in a plane {lvl=3 id=s-2d label="JEE"}

Most real collisions are not head-on. Pool balls meet off-centre, and then they leave in different directions. The rules are the same, but now momentum is a vector, so both components are conserved. For smooth balls there is one extra fact: the contact force is along the line joining the centres, so the force has no component in the perpendicular direction. Therefore

- along the **line of centres** the collision behaves like a head-on one, with its own $e$;
- along the **tangent** (perpendicular to it) nothing happens to either ball: each keeps its tangential velocity.

Here is a very useful result. A ball hits an **identical** ball at rest, elastically, and not head-on. Momentum conservation says $\vec u = \vec v_1 + \vec v_2$ (the masses cancel). Square this: $u^2 = v_1^2 + v_2^2 + 2\vec v_1\cdot\vec v_2$. Elastic collision with equal masses also says $u^2 = v_1^2 + v_2^2$. Comparing, $\vec v_1\cdot\vec v_2 = 0$, so the two balls leave at **right angles** to each other.

:::worked title="A pool shot"
A cue ball at 5 m/s hits an identical ball at rest, and the cue ball goes off at 20° from its original direction. The other ball must go off at $90^\circ - 20^\circ = 70^\circ$ on the other side. Resolve the incoming velocity along the two directions: the cue ball keeps $5\cos20^\circ = 4.70$ m/s and the target gets $5\sin20^\circ = 1.71$ m/s. Check with momentum along the original direction: $4.70\cos20^\circ + 1.71\cos70^\circ = 4.42 + 0.58 = 5.0$.
:::

:::figure caption="A glancing elastic collision of equal balls, one at rest: the paths leave at right angles. The target moves along the line of centres at impact."
<svg viewBox="0 0 360 200" role="img" aria-label="Moving ball strikes a resting ball off-centre; the two leave at right angles">
<defs><marker id="cl2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="cl3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<circle cx="180" cy="100" r="22" class="m2" style="stroke:var(--ink);stroke-width:1.4"/>
<circle cx="141" cy="123" r="22" class="faint"/>
<line x1="20" y1="123" x2="119" y2="123" class="ray" marker-end="url(#cl2)"/><text x="30" y="114">before: u</text>
<line x1="180" y1="100" x2="260" y2="56" class="wf" marker-end="url(#cl3)"/><text x="248" y="48">target v₂</text>
<line x1="141" y1="123" x2="168" y2="180" class="ray" marker-end="url(#cl2)"/><text x="172" y="190">cue v₁</text>
<line x1="141" y1="123" x2="180" y2="100" class="faint"/>
<path d="M154 141 A15 15 0 0 0 169 128" class="gr"/><text x="146" y="164" class="k">90°</text>
</svg>
:::

:::qc lvl=3
q: In a glancing elastic collision, a moving billiard ball hits an identical ball at rest. After the collision the angle between the two velocities is
options: ["0°", "45°", "90°", "180°"]
answer: 2
right: Right. Momentum gives u = v₁ + v₂ and energy gives u² = v₁² + v₂², so v₁ and v₂ are perpendicular.
wrong: Use the two conservation laws together. The energy law says the squares add like a right triangle, and the momentum law says the vectors add to u. Both hold only if the angle is 90°.
:::

## Why light atoms slow neutrons {lvl=3 id=s-moderator label="JEE"}

In a head-on elastic collision with a target at rest, how much of the incoming kinetic energy does the target receive? From $v_2 = 2m_1u_1/(m_1 + m_2)$, the target's kinetic energy over the original is

$$\frac{\tfrac12m_2v_2^2}{\tfrac12m_1u_1^2} = \frac{4m_1m_2}{(m_1+m_2)^2}.$$

It equals 1 for equal masses (all the energy moves across), and falls off when the masses are very different, since a ping-pong ball cannot start a bowling ball rolling and a bowling ball hardly notices a ping-pong ball. For a neutron hitting deuterium ($m_2 = 2m_1$) the fraction is $8/9$, and for carbon ($m_2 \approx 12m_1$) it is about 0.28. That is why nuclear reactors use heavy water or graphite as a **moderator**: light nuclei take away most of the neutron's energy per collision.

## The moving wall {lvl=4 id=s-wall label="Olympiad"}

A frame trick unlocks many hard problems. Suppose a very heavy wall moves towards you at speed $V$, and a ball approaches it at speed $u$. In the **wall's frame** the ball comes in at $u + V$. An elastic bounce off an unmoving wall just reverses the velocity, so the ball leaves at $u + V$ away from the wall. Going back to the ground frame, add the wall's speed again:

$$v = u + 2V.$$

Read it as: "a bounce off an approaching wall adds twice the wall's speed". A tennis ball arriving at 10 m/s and met by a racket moving at 15 m/s leaves at $10 + 30 = 40$ m/s. The same idea is the **gravity assist** of space probes: a planet moving across the probe's path acts as a very heavy moving wall that gives it extra speed, in a collision with no contact [Inference: the flyby is a gravitational encounter, but its energy bookkeeping in the planet's frame matches the wall picture].

**The stacked-ball trick.** Put a small ball on top of a much bigger one and drop both from a height $h$. Both hit the ground at $v = \sqrt{2gh}$. The big ball bounces up at $v$ and meets the small ball still falling at $v$. In the big ball's frame the small ball comes in at $2v$ and goes out at $2v$. Back in the ground frame that is $v + 2v = 3v$, and the small ball rises to $9h$. A superball on a basketball can fly well over your head [Inference: real balls reach less, since $e<1$ and the masses are finite].

**Counting the digits of $\pi$.** Place a small ball between a wall and a much heavier ball that slides towards it. The heavy ball pushes the small one against the wall, the small one bounces back and forth between the wall and the heavy ball, and the heavy ball slows, stops and finally leaves. The total number of collisions is 3 if the masses are equal, 31 if the heavy ball is 100 times heavier, 314 for a ratio of 10,000, and 3,141 for a million: the digits of $\pi$ [Unverified source; the counts were reproduced by our own simulation]. The reason is a geometric one: each collision turns a point in the plane of ($\sqrt m$ × velocity) by a fixed angle $2\arctan\sqrt{m/M}$, and the whole process stops after half a turn.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. In every collision with no outside force, total momentum is conserved. {lvl=1}
2. Elastic: kinetic energy also conserved. Inelastic: some becomes heat and sound. Completely inelastic: the bodies stick. {lvl=2}
3. In an elastic head-on collision the speed of approach equals the speed of separation; equal masses swap velocities. {lvl=2}
4. $e = (v_2 - v_1)/(u_1 - u_2)$, and a dropped ball has $e = \sqrt{h'/h}$. {lvl=2}
5. Collision first (momentum), then swing (energy): the ballistic pendulum has two stages. {lvl=3}
6. Kinetic energy lost $= \tfrac12\mu(1 - e^2)u_{rel}^2$, from the centre-of-mass frame. {lvl=3}
7. Glancing collision of equal masses, elastic, target at rest: the balls leave at 90° to each other. {lvl=3}
8. A bounce off a wall moving towards you adds twice the wall's speed. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never use energy conservation across an inelastic collision. Use momentum across the collision, and energy only for what happens before or after (a swing, a slide). {lvl=1}
- Momentum is a vector. Give velocities signs in one head-on direction, and use components in two dimensions. {lvl=2}
- During the contact, even in an elastic collision, kinetic energy is not conserved (some is stored in the squeeze). Only the values before and after are equal. {lvl=2}
- "Elastic" does not mean "no momentum change of each body": each body's momentum changes. It is the total that is conserved. {lvl=2}
- Heights, not speeds, are in the ratio $e^2$: $e = \sqrt{h'/h}$. {lvl=2}
- The coefficient of restitution for a glancing hit applies only along the line of centres. The tangential velocity of a smooth ball does not change. {lvl=3}
:::
