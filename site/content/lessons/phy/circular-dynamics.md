---
title: Dynamics of circular motion
summary: What really pulls a car round a bend, and how banking, speed and grip decide whether it stays on the road.
ncert: ["Class 11 Physics · Ch 4 Laws of Motion (motion of a vehicle on a level and on a banked road, Examples 4.10 and 4.11, Exercises 4.4, 4.21, 4.22)"]
up_to: Olympiad
builds_on: [Circular motion, Momentum and the second law, Third law, Friction]
notes_prompt: Explain to a friend why you slide outward in a turning car although no force pushes you outward, and which real force bends the car's path.
margin:
  - kind: history
    title: History
    text: Huygens worked out the rule for circular motion in 1673 and gave the pull its name "centrifugal" (flying from the centre). Newton turned the point of view round and called the inward pull "centripetal" (seeking the centre).
  - kind: tip
    title: Exam habit
    text: "Draw the real forces only. Then write: sum of the forces pointing to the centre = m v squared over r. The words 'centripetal force' never go on the diagram."
  - kind: olympiad
    title: Olympiad link
    text: "Whenever a problem asks 'when does the body leave the surface?', set the normal force to zero in the radial equation. The block on the sphere and the car on a hump bridge are the same calculation."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 6 Force and Motion II, §6-3 Uniform circular motion" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 12 Characteristics of Force, on pseudo forces [Unverified chapter reference]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapter Circular Motion [Unverified chapter reference]" }
cards:
  - { front: "What is the centripetal force?", back: "Not a new force. It is the name for the net force pointing to the centre, $mv^2/r$, made up of real forces such as tension, friction, the normal force or gravity." }
  - { front: "Maximum speed on a flat bend?", back: "Friction supplies $mv^2/r$ and can be at most $\\mu mg$, so $v_{\\max} = \\sqrt{\\mu g r}$. The mass cancels." }
  - { front: "Banking angle with no friction needed?", back: "$\\tan\\theta = \\dfrac{v^2}{rg}$. The horizontal part of the normal force is the whole centripetal force." }
  - { front: "Speed range on a banked road with friction?", back: "$v_{\\max}^2 = rg\\,\\dfrac{\\tan\\theta+\\mu}{1-\\mu\\tan\\theta}$ and $v_{\\min}^2 = rg\\,\\dfrac{\\tan\\theta-\\mu}{1+\\mu\\tan\\theta}$." }
  - { front: "Minimum speeds on a vertical circle (string)?", back: "At the top $v \\ge \\sqrt{gr}$. At the bottom $v \\ge \\sqrt{5gr}$. The tension at the bottom is then $6mg$." }
  - { front: "Where does a block sliding from the top of a smooth sphere leave it?", back: "At $\\cos\\theta = 2/3$ from the vertical, i.e. at height $2R/3$ above the centre." }
core:
  idea: 'For a body moving on a circle of radius $r$ at speed $v$, the forces along the radius must add up to $mv^2/r$, pointing to the centre. "Centripetal force" is not an extra force: it is the name of that sum, supplied by tension, friction, the normal force, gravity, or a mix of them.'
  formulas:
    - tex: 'F_{\text{in}} = \dfrac{m v^{2}}{r} = m\omega^{2} r'
      label: 'Net force towards the centre'
    - tex: '\tan\theta = \dfrac{v^{2}}{r g}'
      label: 'Banking angle that needs no friction'
    - tex: 'v_{\text{top}} \ge \sqrt{g r}'
      label: 'Smallest speed at the top of a vertical circle (string or loop)'
  conditions:
    - 'Use an inertial frame (the ground); the body moves on a circle of fixed radius'
    - 'For the formula along the radius, the speed may change as long as you use the speed at that instant'
    - 'Friction is at most the limiting value $\mu N$, and a string or surface can only pull or push one way'
  sign: 'Count inward as positive. A force pointing away from the centre goes in with a minus sign. Never add a "centrifugal" force when working in the ground frame.'
outcomes:
  - 'Name the real force that plays the part of centripetal force in any circular motion'
  - 'Find the safest and the top speed on flat and banked bends'
  - 'Solve conical pendulum and rotor problems with one equation along the radius and one along the vertical'
  - 'Find the tension or the normal force at any point on a vertical circle'
  - 'Find where a body leaves a curved surface by setting the normal force to zero'
opener:
  story: |
    Sit on the back seat as a car swings into a sharp left turn. You slide to the right and press against the door, as if something flung you outward. Nobody pushed you. So here is the odd part: **what is actually making the car turn?** Not the engine, which pushes straight ahead, and not the steering wheel, which only points the tyres.

    Try it with something you can hold. Whirl a stone on a string above your head, then let go. Most people say the stone flies outward, away from your hand. Watch a hammer thrower, or a stone leaving a sling, and you will see it does not.

    Newton's answer takes only one sentence: with no force a body goes straight. To go round, the body needs a steady push towards the centre, and the whole subject is about finding where that push comes from.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A stone whirled on a string; when the string is cut, the stone flies off along the tangent"><circle cx="130" cy="130" r="70" style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:5 5"/><circle cx="130" cy="130" r="4" style="fill:var(--ink)"/><path d="M130 130 L200 130" style="fill:none;stroke:var(--ink);stroke-width:2"/><circle cx="200" cy="130" r="11" style="fill:var(--surface);stroke:var(--c);stroke-width:3"/><path d="M188 130 L152 130" style="fill:none;stroke:var(--c);stroke-width:4"/><path d="M148 130 L162 122 L162 138Z" style="fill:var(--c)"/><path d="M200 118 L200 50" style="fill:none;stroke:var(--chem);stroke-width:4;stroke-dasharray:8 6"/><path d="M200 44 L192 58 L208 58Z" style="fill:var(--chem)"/><text x="210" y="70" style="font-size:11px;fill:var(--muted)">cut the string:</text><text x="210" y="84" style="font-size:11px;fill:var(--muted)">straight on</text><text x="104" y="172" style="font-size:11px;fill:var(--muted)">string pulls in</text><text x="56" y="228" style="font-size:11px;fill:var(--muted)">no outward force, only an inward pull</text></svg>'
life:
  - 'A car, a bus or a cycle turning a corner uses sideways friction between tyre and road to get round; on wet roads that grip shrinks and cars slide straight on.'
  - 'Highways and railway tracks are banked on curves so that the road itself helps to turn the vehicle, and a cyclist leans in for the same reason.'
  - 'The giant swing and the chair-swing ride at a mela fly outward as they spin faster; the heavier riders swing out to the same angle as the light ones.'
  - 'A salad spinner, a washing machine drying cycle, and a centrifuge in a hospital lab all rely on the wall pushing the stuff inward while water and blood cells escape through holes or settle outward.'
  - 'A roller-coaster loop, a bucket of water whirled overhead and the old "wall of death" show are all vertical or inclined circles.'
models:
  - name: 'A name is not a thing'
    text: '"Centripetal force" names a job (the inward push), not a new kind of force. Many arguments, in economics or in office life, are about a label such as "growth" or "efficiency". Ask what actual forces or actions fill the role.'
  - name: 'Limit first, then check'
    text: 'Friction can only grow up to a ceiling, so the first question about a bend is whether the needed force is under that ceiling. Find the demand, find the limit, compare. The same habit prices a bridge, a loan or a deadline.'
  - name: 'Make the road do the work'
    text: 'Banking does not make the car need less turning; it lets the surface supply the turning force so the tyres do not have to. Good design reduces what people have to resist by shaping the situation, not by being stronger.'
links:
  - leaf: 'phy/circular-motion'
    name: 'Circular motion'
    same: 'The acceleration $v^2/r$ towards the centre was found there from geometry alone. Here, force equals mass times that acceleration.'
    differs: 'Circular motion asked how a body must accelerate to go round; this lesson asks which forces make it so, and when they run out.'
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'A satellite is the same problem: gravity is the whole centripetal force, $GMm/r^2 = mv^2/r$, which gives the orbital speed $v = \sqrt{GM/r}$.'
    differs: 'On a road, you can choose the speed and the friction fails if you go too fast. In an orbit gravity fixes the speed for each radius.'
next:
  q: 'A block on a table is tied by a rope over the edge to a hanging block. When the hanging block drops 1 m, how far does the other block move, and what about three blocks and two pulleys? How do we connect the motions of several bodies?'
  leaf: 'phy/constraint-relations'
  name: 'Constraint relations'
symbols:
  - s: 'F_{\text{in}}'
    means: 'net force towards the centre of the circle (N)'
  - s: 'm'
    means: 'mass of the moving body (kg)'
  - s: 'v'
    means: 'speed along the circle (m/s)'
  - s: 'r'
    means: 'radius of the circle (m)'
  - s: '\omega'
    means: 'angular speed, angle swept per second (rad/s)'
  - s: '\theta'
    means: 'angle of banking, or angle of the string to the vertical (degrees)'
  - s: '\mu'
    means: 'coefficient of static friction (no unit)'
  - s: 'N'
    means: 'normal force, the push of a surface on the body (N)'
  - s: 'T'
    means: 'tension in a string or rope (N)'
  - s: 'g'
    means: 'acceleration of free fall, 9.8 m/s^2'
---

:::hook
q: You whirl a stone on a string in a horizontal circle, and let go. Which way does it fly off, as seen from above?
options: ["Outwards, along the radius, away from the centre", "Straight on, along the tangent to the circle", "On inwards, towards the centre", "It keeps going round for a while"]
answer: 1
right: Right. The only horizontal force was the string's inward pull. The moment it goes, there is no horizontal force at all, so the stone keeps the velocity it had that instant, which points along the tangent. There never was an outward force.
wrong: Ask what horizontal force acts after the string is gone. None. Then the first law says the stone goes straight with the velocity it had, which at any point of a circle is along the tangent.
:::

## The pull that bends the path {lvl=1 id=s-pull label="Class 9"}

Feel the string as you whirl the stone: it tugs your hand outward. That is the third law at work, the stone pulling on the string. But look at the stone itself. The only thing acting on it horizontally is the string, and the string pulls it **inward**. A body that is not pushed goes straight, so to go round and round, it must be pulled to the centre all the time.

:::figure caption="Top view of a stone whirled on a string. The string pulls the stone inward; the velocity is along the tangent. If the string breaks, the stone leaves along the tangent (dashed), not outward."
<svg viewBox="0 0 360 220" role="img" aria-label="Top view of circular motion with the inward tension, the tangent velocity and the path after the string is cut">
<defs><marker id="cd1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="cd1b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<circle class="faint" cx="150" cy="120" r="80"/><circle class="ln" cx="150" cy="120" r="3"/>
<line class="ln" x1="150" y1="120" x2="230" y2="120"/><circle class="m2 ln" cx="230" cy="120" r="9"/>
<line class="ray" x1="220" y1="120" x2="172" y2="120" marker-end="url(#cd1a)"/><text class="k" x="168" y="112">T inward</text>
<line class="wf" x1="230" y1="108" x2="230" y2="64" marker-end="url(#cd1b)"/><text x="238" y="86">v (tangent)</text>
<line class="faint" x1="230" y1="60" x2="230" y2="16"/><text x="238" y="22">after the string breaks</text>
</svg>
:::

:::qc lvl=1
q: A stone on a string is whirled in a horizontal circle at a steady speed. Which statement about the forces on the stone (ignoring gravity) is correct?
options: ["The string pulls inward and an outward force balances it", "The only horizontal force is the string's inward pull, so the net force points to the centre", "No force acts, since the speed is constant", "The net force points along the velocity"]
answer: 1
right: Right. There is no outward force on the stone. The net force is the inward pull, and it changes only the direction of the velocity, not its size.
wrong: A balanced stone would go straight. The stone curves, so the net force is not zero, and it is the string's inward pull.
:::

## The rule: inward force equals $mv^2/r$ {lvl=2 id=s-rule label="Class 11"}

Circular motion gave us the acceleration of a body on a circle of radius $r$ at speed $v$: it points to the centre and equals $v^2/r$. Newton's second law then says what force this needs: mass times that acceleration.

$$F_{\text{in}} = \frac{m v^2}{r} = m\omega^2 r.$$

Read it as: the net push towards the centre must be the mass times the speed squared over the radius. Double the speed and you need four times the push; halve the radius and you need twice the push.

:::worked title="How hard does the string pull?"
A 0.4 kg stone is whirled on a 2 m string, one round per second, in a horizontal circle. The angular speed is $\omega = 2\pi$ rad/s, so the needed inward force is $m\omega^2 r = 0.4 \times (2\pi)^2 \times 2 \approx 31.6$ N, about the weight of a 3 kg bag. Check with speeds: $v = \omega r = 12.6$ m/s and $mv^2/r = 0.4 \times 158/2 = 31.6$ N. ✓
:::

"Centripetal force" is a **job title**, not a new force. Whatever real forces point to the centre, added up, must equal $mv^2/r$. Who does the job depends on the situation:

| Situation | The real force doing the job |
|---|---|
| Stone on a string | tension |
| Car on a flat bend | friction of the road on the tyres |
| Moon and satellites | gravity |
| Rotor ride | normal push of the wall |
| Electron in a magnetic field | magnetic force |
| Car on a banked road | normal force (and friction) |

So the rule for every problem: draw the real forces on the body, take the components along the line to the centre, and set their sum equal to $mv^2/r$.

:::qc lvl=2
q: A car goes round a bend at 10 m/s. At 20 m/s on the same bend, how does the sideways friction it needs change?
options: ["Doubles", "Becomes four times as large", "Stays the same", "Becomes half"]
answer: 1
right: Right. The needed force goes as $v^2$, so twice the speed needs four times the friction.
wrong: The needed force is $mv^2/r$. Squaring the speed squares the force.
:::

## Flat bends: friction does the pulling {lvl=2 id=s-flat label="Class 11"}

On a level road, both weight and the normal force are vertical. Neither can point to the centre. The only horizontal force on the car is the sideways **static friction** of the road on the tyres, and so

$$f = \frac{mv^2}{r} \le \mu m g.$$

Read it as: the friction needed must not exceed the most that the road can give. So the largest safe speed is

$$v_{\max} = \sqrt{\mu g r}.$$

The mass has cancelled: a lorry and a scooter have the same limit on the same road. The speed squared goes with the grip $\mu$ and the radius.

:::worked title="Will the truck skid?"
A truck takes a bend of radius 50 m at 54 km/h = 15 m/s. It needs $\mu \ge v^2/(rg) = 225/(50 \times 9.8) = 0.46$. On a dry road with $\mu = 0.7$ it holds. On a wet road with $\mu = 0.4$ it slides, because it needs 0.46. At $\mu = 0.2$ in heavy rain the safe limit is $\sqrt{0.2 \times 9.8 \times 50} = 9.9$ m/s, about 36 km/h.
:::

If you are going too fast the road does not throw you outward: the grip runs out, and the car continues straight along the tangent, which is why it ends up on the outside of the bend.

:::qc lvl=2
q: On a flat circular track the safe speed for a small car is 20 m/s. What is it for a heavy lorry, on the same track and tyres?
options: ["Lower, since it is heavier", "Higher, since it has more grip", "20 m/s, the same", "Cannot say"]
answer: 2
right: Right. The weight raises the grip $\mu mg$ and the demand $mv^2/r$ in the same ratio, so mass cancels.
wrong: Write both sides: demand $mv^2/r$, limit $\mu mg$. The $m$ is on both sides.
:::

## Banked roads: let the road do the pushing {lvl=2 id=s-bank label="Class 11"}

Tilt the road inward by an angle $\theta$. Now the normal force, which is always perpendicular to the road, leans toward the centre, and part of it points inward. If the speed is right, the horizontal part of the normal force supplies the whole centripetal force and the tyres need no friction at all.

:::figure caption="A car on a banked road, side view, centre of the circle to the left. N is perpendicular to the road, so it has a horizontal part N sin θ pointing to the centre and a vertical part N cos θ that carries the weight."
<svg viewBox="0 0 360 220" role="img" aria-label="A car on a banked road with the normal force, weight and the horizontal direction to the centre of the circle">
<defs><marker id="cd2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="cd2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="30" y1="190" x2="330" y2="81"/><line class="faint" x1="30" y1="190" x2="140" y2="190"/><text x="110" y="184">θ</text>
<g transform="rotate(-20 180 135.5)"><rect class="m2 ln" x="150" y="115.5" width="60" height="20" rx="4"/></g>
<circle class="ln" cx="177" cy="126" r="2.5"/>
<line class="ray" x1="177" y1="126" x2="154" y2="62" marker-end="url(#cd2a)"/><text class="k" x="96" y="56">N (perpendicular to road)</text>
<line class="wf" x1="177" y1="126" x2="177" y2="188" marker-end="url(#cd2b)"/><text class="k" x="184" y="176">mg</text>
<line class="faint" x1="177" y1="126" x2="96" y2="126"/><text x="40" y="122">to the centre</text>
</svg>
:::

Two equations. Vertically, nothing accelerates: $N\cos\theta = mg$. Horizontally, towards the centre: $N\sin\theta = mv^2/r$. Divide the second by the first and the $N$ and $m$ disappear:

$$\tan\theta = \frac{v^2}{rg}.$$

Read it as: the steeper the bank, the faster the "no-friction speed". For a given bend, there is one speed $v_0 = \sqrt{rg\tan\theta}$ at which the car needs no sideways grip at all. That is why road engineers choose the banking from the design speed.

:::worked title="Banking a motorway bend"
A bend of radius 200 m is designed for 90 km/h = 25 m/s. Then $\tan\theta = 25^2/(200 \times 9.8) = 0.319$, so $\theta \approx 17.7^\circ$. At 25 m/s the tyres feel no sideways force at all, and a glass of water on the dashboard stays flat relative to the car.
:::

The common mistake is to point the centre along the slope. The centre of the circle is in the **horizontal** direction, because the car moves in a horizontal circle. That is why the horizontal part of $N$ is what counts.

:::qc lvl=2
q: A banked road has $\theta = 45^\circ$ and radius 98 m. What speed needs no friction?
options: ["9.8 m/s", "31 m/s", "98 m/s", "22 m/s"]
answer: 1
right: Right. $v^2 = rg\tan 45^\circ = 98 \times 9.8 \times 1 = 960.4$, so $v = 31$ m/s.
wrong: Use $v^2 = rg\tan\theta$, with $\tan 45^\circ = 1$, then take the square root.
:::

## Banked, with friction {lvl=3 id=s-bankfric label="JEE"}

Real roads are rough too, so there is a whole **range** of safe speeds. Go faster than $v_0$ and the car tends to slide **up** the bank, so friction acts **down** the slope. Go slower and the car tends to slide down, so friction acts up. At the fastest safe speed, friction down the slope is at its limit $\mu N$:

$$N\cos\theta = mg + \mu N\sin\theta,\qquad N\sin\theta + \mu N\cos\theta = \frac{mv^2}{r}.$$

Divide the second equation by the first, so that $m$ and $N$ disappear:

$$v_{\max}^2 = rg\,\frac{\tan\theta + \mu}{1 - \mu\tan\theta}.$$

The same steps, with friction reversed, give the slowest speed:

$$v_{\min}^2 = rg\,\frac{\tan\theta - \mu}{1 + \mu\tan\theta}.$$

Read the pair as: a rougher road widens the range on both sides. If $\mu \ge \tan\theta$, the slowest speed is zero: a car can even stand still on the bank. If $\mu\tan\theta \ge 1$ the denominator of the first formula is zero or negative, and no speed can make the car slide up.

:::worked title="The speed range on a bank"
Radius 80 m, bank $20^\circ$ ($\tan\theta = 0.364$), $\mu = 0.25$.

No-friction speed: $\sqrt{80 \times 9.8 \times 0.364} = 16.9$ m/s (61 km/h).
Fastest: $v^2 = 784 \times \dfrac{0.364 + 0.25}{1 - 0.25 \times 0.364} = 529.5$, so $v = 23.0$ m/s (83 km/h).
Slowest: $v^2 = 784 \times \dfrac{0.364 - 0.25}{1 + 0.25 \times 0.364} = 81.9$, so $v = 9.05$ m/s (33 km/h).
:::

:::qc lvl=3
q: On a banked road with friction, a car going exactly at the no-friction speed $v_0 = \sqrt{rg\tan\theta}$ feels what friction?
options: ["Down the slope, at its maximum", "Up the slope, at its maximum", "None needed: friction is zero", "Along the road, in the direction of motion"]
answer: 2
right: Right. At $v_0$ the normal force alone gives the exact centripetal force, so the car needs no friction, and the road can keep its grip in reserve for emergencies.
wrong: At $v_0$ the earlier equations are satisfied without friction. Friction only appears if the speed is off.
:::

## Conical pendulum and the rotor {lvl=3 id=s-cone label="JEE"}

Tie a bob to a string and spin it so that it goes round in a horizontal circle, with the string making an angle $\theta$ with the vertical. This is the **conical pendulum**, and it is the model of the chair-swing ride.

:::figure caption="Conical pendulum: the bob moves in a horizontal circle of radius L sin θ. The vertical part of the tension holds the bob up; the horizontal part turns it."
<svg viewBox="0 0 360 230" role="img" aria-label="A conical pendulum with the tension and weight on the bob">
<defs><marker id="cd3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="cd3b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="120" y1="16" x2="200" y2="16"/><line class="faint" x1="160" y1="16" x2="160" y2="170"/>
<ellipse class="faint" cx="160" cy="150" rx="75" ry="14"/>
<line class="ln" x1="160" y1="16" x2="235" y2="146"/><circle class="m2 ln" cx="235" cy="146" r="9"/>
<line class="ray" x1="231" y1="140" x2="203" y2="92" marker-end="url(#cd3a)"/><text class="k" x="246" y="104">T</text>
<line class="wf" x1="235" y1="157" x2="235" y2="206" marker-end="url(#cd3b)"/><text class="k" x="244" y="196">mg</text>
<text x="170" y="64">θ</text><text x="168" y="164">r = L sin θ</text>
</svg>
:::

Vertically: $T\cos\theta = mg$. Along the radius: $T\sin\theta = m\omega^2 r$ with $r = L\sin\theta$. Dividing, the mass and the tension drop out of the angle:

$$\cos\theta = \frac{g}{\omega^2 L},\qquad \text{period } = 2\pi\sqrt{\frac{L\cos\theta}{g}}.$$

Read it as: spin faster and $\cos\theta$ falls, so the bob swings out higher. And since the mass has cancelled, heavy and light riders on a chair-swing hang at the same angle.

:::worked title="A fast conical pendulum"
String of 0.5 m at $\theta = 60^\circ$: $\omega^2 = g/(L\cos\theta) = 9.8/(0.5 \times 0.5) = 39.2$, so $\omega = 6.26$ rad/s and the period is $2\pi/6.26 \approx 1.0$ s. The tension is $T = m\omega^2 L = 19.6\,m$ newtons, twice the weight, because $T\cos 60^\circ = mg$.
:::

**The rotor.** In the fairground rotor you stand against the wall of a spinning drum, and then the floor drops away. The wall's normal push is the centripetal force, $N = m\omega^2 r$, and friction holds you up: $f = mg \le \mu N$. So $\omega^2 \ge g/(\mu r)$. With $r = 3$ m and $\mu = 0.4$ you need $v \ge \sqrt{gr/\mu} = 8.6$ m/s, about 27 turns a minute. Your mass cancels, so the same speed works for everyone.

:::qc lvl=3
q: In a rotor of fixed radius, a heavier person and a lighter person stand against the wall. Which of them needs the higher spinning speed to stay up?
options: ["The heavier", "The lighter", "Both need the same", "Neither: friction does not matter"]
answer: 2
right: Right. Weight $mg$ and the maximum friction $\mu N = \mu m\omega^2 r$ both scale with $m$, so $m$ cancels from $\omega^2 \ge g/(\mu r)$.
wrong: Write friction $\le \mu N$ with $N = m\omega^2 r$ and compare it with $mg$. The mass drops out.
:::

## The vertical circle {lvl=3 id=s-vert label="JEE"}

On a vertical circle, gravity helps at some points and fights at others, and the speed itself changes. At any point, use the radial equation with the speed at that point.

**At the top** (string or track pushing down, plus gravity down): $T + mg = mv^2/r$. The string cannot push, so $T \ge 0$, and the smallest top speed is $v_{\text{top}} = \sqrt{gr}$: gravity alone then provides the whole centripetal force.

**At the bottom** the tension points up and gravity down: $T - mg = mv^2/r$, so $T = mg + mv^2/r$.

Energy links the two. From bottom to top the body climbs a height $2r$, so $v_{\text{bot}}^2 = v_{\text{top}}^2 + 4gr$. For the least top speed, the bottom speed is $\sqrt{5gr}$ and the bottom tension is $T = mg + 5mg = 6mg$, exactly six times the weight. (More generally $T_{\text{bottom}} - T_{\text{top}} = 6mg$, whatever the speed.)

:::figure caption="Forces at the top and at the bottom of a vertical circle. At the top, tension and weight both point to the centre. At the bottom, tension points to the centre and weight away from it."
<svg viewBox="0 0 360 230" role="img" aria-label="Vertical circle with forces at the top and at the bottom">
<defs><marker id="cd4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="cd4b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<circle class="faint" cx="150" cy="118" r="76"/><circle class="ln" cx="150" cy="118" r="3"/>
<circle class="m2 ln" cx="150" cy="42" r="8"/>
<line class="ray" x1="144" y1="52" x2="144" y2="94" marker-end="url(#cd4a)"/><text class="k" x="124" y="84">T</text>
<line class="wf" x1="157" y1="52" x2="157" y2="78" marker-end="url(#cd4b)"/><text class="k" x="164" y="74">mg</text>
<circle class="m2 ln" cx="150" cy="194" r="8"/>
<line class="ray" x1="150" y1="184" x2="150" y2="134" marker-end="url(#cd4a)"/><text class="k" x="160" y="156">T</text>
<line class="wf" x1="160" y1="204" x2="160" y2="228" marker-end="url(#cd4b)"/><text class="k" x="168" y="226">mg</text>
<text x="250" y="46">top: T + mg = mv²/r</text><text x="250" y="198">bottom: T − mg = mv²/r</text>
</svg>
:::

:::worked title="A bucket of water overhead"
Swing a bucket of water on your arm of radius 1.6 m in a vertical circle. For the water not to fall out at the top you need $v \ge \sqrt{gr} = \sqrt{9.8 \times 1.6} = 3.96$ m/s, about 4 m/s. At the top, the bucket pushes down on the water with the normal force $N = mv^2/r - mg$, which is zero at this limit, and the water is in free fall along the circle. At the bottom the speed must be at least $\sqrt{5gr} = 8.85$ m/s to get all the way round.
:::

**Hump-back bridge.** A car at the crest of a bridge of radius $r$: weight down (towards the centre), normal force up. So $mg - N = mv^2/r$, giving $N = mg - mv^2/r$. The faster you go, the lighter you feel. At $v = \sqrt{gr}$ the normal force is zero and the car leaves the road: on a bridge of radius 90 m this happens at 29.7 m/s, 107 km/h. At the bottom of a dip, $N = mg + mv^2/r$, and you feel heavy.

**Rod or tube instead of a string.** A rod can push as well as pull, so the top speed can be almost zero. Then the bottom speed need only be $v_{\text{bot}} = \sqrt{4gr}$, from $v_{\text{bot}}^2 = 0 + 4gr$.

:::qc lvl=3
q: A ball on a string goes round a vertical circle at just the minimum speed at the top. What is the tension at the bottom, in terms of the weight $mg$?
options: ["$mg$", "$3mg$", "$5mg$", "$6mg$"]
answer: 3
right: Right. At the bottom $v^2 = 5gr$, so $T = mg + m(5gr)/r = 6mg$.
wrong: Bottom speed squared is $5gr$ (top gives $gr$ plus $4gr$ from energy). Then $T = mg + mv^2/r$.
:::

## Where a body leaves the surface {lvl=4 id=s-leave label="Olympiad"}

A body stays on a curved surface only as long as the surface pushes it, and a surface can only push. So the moment the normal force $N$ falls to zero, the body takes off. This single idea decides many Olympiad problems.

:::worked title="The block on a smooth sphere"
A small block slides without friction from the top of a fixed smooth sphere of radius $R$. When the radius to the block makes an angle $\theta$ with the vertical:

Energy: it has fallen $R(1 - \cos\theta)$, so $v^2 = 2gR(1 - \cos\theta)$.
Radial (towards the centre): $mg\cos\theta - N = mv^2/R$.

Put $N = 0$: $g\cos\theta = 2g(1 - \cos\theta)$, so $\cos\theta = 2/3$, an angle of $48.2^\circ$. The block leaves at a height $2R/3$ above the centre, with speed $v = \sqrt{2gR/3}$. For $R = 0.9$ m that is $\sqrt{5.88} = 2.43$ m/s. The angle does not depend on the mass, the radius or even $g$: it is the same on the Moon.
:::

The same trick works for a ball rolling off a dome, a skier on a rounded hill, or a car on a bridge. Replace "energy at the point" and "radial equation at the point", set $N = 0$, and solve.

**The bead on a spinning hoop.** A bead slides without friction on a vertical hoop of radius $R$, which spins about its vertical diameter with angular speed $\omega$. The bead sits at an angle $\theta$ from the bottom. The hoop's push $N$ points to the hoop's centre. Vertically $N\cos\theta = mg$, along the horizontal $N\sin\theta = m\omega^2 R\sin\theta$, so $N = m\omega^2R$ and

$$\cos\theta = \frac{g}{\omega^2 R}.$$

This is a conical pendulum with $L = R$. If $\omega^2 < g/R$ there is no solution, and the bead stays at the bottom: it must spin fast enough before the bead lifts at all.

**The funnel.** A marble circling on the inside of a smooth cone whose surface makes an angle $\beta$ with the horizontal. It is a banked road bent into a full circle: $N\cos\beta = mg$ and $N\sin\beta = mv^2/r$, so $v^2 = rg\tan\beta$. Again the mass drops out, and a bigger circle needs more speed. This is the coin-funnel at science museums, where a coin spirals in as friction takes its speed away.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. To go round a circle a body needs a net force towards the centre. With no force it goes along the tangent. {lvl=1}
2. The net force towards the centre is $mv^2/r = m\omega^2 r$. "Centripetal force" names this sum; it is not an extra force. {lvl=2}
3. On a flat bend friction does the job: $v_{\max} = \sqrt{\mu g r}$, independent of mass. {lvl=2}
4. On a banked road with no friction, $\tan\theta = v^2/(rg)$. The centre is horizontal, not along the slope. {lvl=2}
5. With friction, the safe speeds form a range given by $(\tan\theta \pm \mu)/(1 \mp \mu\tan\theta)$. {lvl=3}
6. Conical pendulum: $\cos\theta = g/(\omega^2 L)$. Rotor: $\omega^2 \ge g/(\mu r)$. {lvl=3}
7. Vertical circle with a string: $v_{\text{top}} \ge \sqrt{gr}$, $v_{\text{bot}} \ge \sqrt{5gr}$, bottom tension $6mg$ at the limit. {lvl=3}
8. A body leaves a surface where $N = 0$: on a smooth sphere at $\cos\theta = 2/3$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- There is no outward force on the body in the ground frame. The feeling of being flung outward is inertia. {lvl=1}
- Do not draw "centripetal force" as an extra arrow on the free-body diagram; draw the real forces and add their components along the radius. {lvl=2}
- On a banked road the centre is horizontal. Resolve forces along horizontal and vertical, not along the slope. {lvl=2}
- On a banked road at high speed, friction acts down the slope; at low speed up the slope. {lvl=3}
- At the top of a vertical circle the tension and weight point the same way, to the centre. {lvl=3}
- Use the speed at that point, not the speed at the start: speed changes on a vertical circle. {lvl=3}
- To find where a body leaves a surface, set the normal force to zero in the radial equation, with the speed from energy. {lvl=4}
:::
