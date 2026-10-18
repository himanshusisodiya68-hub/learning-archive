---
title: Inertia and the first law
summary: Why you lurch when a train starts, why a puck on ice never really wants to stop, and what a force is for.
ncert: ["Class 8 Science (Curiosity) · Ch 5 Exploring Forces (§5.1–5.2)", "Class 9 Science (Exploration) · Ch 6 Forces and Laws of Motion (first law, inertia)", "Class 11 Physics · Ch 4 Laws of Motion (§4.1–4.5)"]
up_to: Olympiad
builds_on: [Speed, velocity and acceleration, Vectors in motion]
notes_prompt: Explain to a friend why a ball rolling on a perfectly smooth, endless floor would never stop, and why that does not mean "no force is needed to keep it moving" is the same as "no force is acting on it".
margin:
  - kind: history
    title: History
    text: For about two thousand years people followed Aristotle, who held that every moving thing needs a continuing mover. Galileo overturned this in the early 1600s with ramps and rolling balls; Newton made it the first law of his Principia (1687).
  - kind: tip
    title: Exam habit
    text: "Never say 'no force, so no motion'. Say 'no net force, so no change in velocity'. A body moving at constant velocity has net force zero, and a body at rest is just the special case with velocity zero."
  - kind: olympiad
    title: Olympiad link
    text: "The first law is not a spare case of the second. It tells you where the second law works: in an inertial frame. Every pseudo-force problem is really the question of which frame you stand in."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch 5 Force and Motion I, Newton's first law and inertial frames [Unverified section number]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch 9 Newton's Laws of Dynamics [Unverified chapter number]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 5 Newton's Laws of Motion [Unverified]" }
cards:
  - { front: "State Newton's first law.", back: "A body stays at rest or keeps moving in a straight line at constant speed unless a net (unbalanced) force acts on it." }
  - { front: "What is inertia?", back: "The reluctance of a body to change its velocity, in size or direction. Its measure is the mass: more mass, more inertia." }
  - { front: "Mass or weight: which changes on the Moon?", back: "Weight (the Earth's or Moon's pull, $W = mg$) changes. Mass, the amount of inertia, does not." }
  - { front: "A body moves at constant velocity. What is the net force?", back: "Zero. Constant velocity means zero acceleration, so the forces are balanced. Friction and the push are still there; they cancel." }
  - { front: "Condition for equilibrium of a particle?", back: "$\\vec F_1 + \\vec F_2 + \\dots = \\vec 0$: the force vectors close into a polygon. In components, $\\sum F_x = 0$ and $\\sum F_y = 0$." }
  - { front: "What is an inertial frame?", back: "A frame in which a body with no net force moves with constant velocity. Any frame moving at constant velocity relative to one is also inertial; an accelerating one is not." }
core:
  idea: 'A body keeps its velocity, in size and direction, unless a net force acts on it. Motion needs no push to continue; a force is what changes motion. Inertia, measured by mass, is how strongly a body resists that change.'
  formulas:
    - tex: '\vec F_{\text{net}} = \vec 0 \;\Longleftrightarrow\; \vec v = \text{constant}'
      label: 'First law: balanced forces, unchanging velocity'
    - tex: 'W = mg'
      label: 'Weight is the pull of the planet; mass m is the inertia'
  conditions:
    - 'Observed from an inertial frame (not from an accelerating bus or a spinning merry-go-round)'
    - 'The body is treated as a point: no spinning is considered'
    - '"Net" means the vector sum of all forces acting on the body, from every source'
  sign: 'Zero net force does not mean zero velocity, and it does not mean no forces. It means the forces cancel.'
outcomes:
  - 'Explain why a moving body does not need a continuing push, using friction-removal thought experiments'
  - 'State the first law and use it to find an unknown force on a body in constant motion'
  - 'Separate mass (inertia) from weight, and explain everyday inertia effects'
  - 'Solve equilibrium problems by closing the force polygon or resolving into components'
  - 'Say what an inertial frame is and why the first law is a test for it'
opener:
  story: |
    You are standing in a Mumbai local, hands off the rail. The train pulls out and you stumble backwards, as if someone shoved you. Nobody did. A few minutes later the driver brakes and you stumble forwards. Nobody shoved you that time either.

    Here is an older puzzle. Slide a steel puck over a wooden floor and it stops within a metre. Slide it on polished ice and it glides ten metres. On an air-hockey table it zips from end to end, barely slower than when it left your hand. Aristotle said things stop because a push runs out. Every time you take friction away, the puck seems to disagree with him.

    So what would the puck do on an endless sheet of ice with no friction at all, and nothing else touching it? Galileo asked that question around 1600, and the answer is still the first rule of mechanics.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="The same flick on wood, ice and an air table: the puck goes farther each time"><text x="76" y="22" style="font-size:11px;fill:var(--muted)">same flick, smoother floor each time</text><text x="60" y="54" style="font-size:11px;fill:var(--muted)">wood</text><circle cx="60" cy="72" r="8" style="fill:var(--chem)"/><line x1="72" y1="72" x2="112" y2="72" style="stroke:var(--c);stroke-width:5;stroke-linecap:round"/><text x="60" y="114" style="font-size:11px;fill:var(--muted)">ice</text><circle cx="60" cy="132" r="8" style="fill:var(--chem)"/><line x1="72" y1="132" x2="190" y2="132" style="stroke:var(--c);stroke-width:5;stroke-linecap:round"/><text x="60" y="174" style="font-size:11px;fill:var(--muted)">air table</text><circle cx="60" cy="192" r="8" style="fill:var(--chem)"/><line x1="72" y1="192" x2="276" y2="192" style="stroke:var(--c);stroke-width:5;stroke-linecap:round"/><line x1="280" y1="192" x2="312" y2="192" style="stroke:var(--c);stroke-width:5;stroke-linecap:round;stroke-dasharray:2 8"/><text x="60" y="228" style="font-size:11px;fill:var(--ink)">and with no friction at all?</text></svg>'
symbols:
  - s: 'F_{\text{net}}'
    means: 'net force: the sum of all forces on the body, as vectors (newtons, N)'
  - s: 'v'
    means: 'velocity of the body: speed with direction (m/s)'
  - s: 'm'
    means: 'mass: the amount of inertia of the body (kilograms, kg)'
  - s: 'W'
    means: 'weight: the pull of a planet on the body (N)'
  - s: 'g'
    means: 'pull per kilogram near a planet: 9.8 N/kg on the Earth, about 1.6 N/kg on the Moon (same as m/s^2)'
  - s: 'T'
    means: 'tension: the pull along a rope or string (N)'
life:
  - 'The lurch in a bus or metro when it starts, brakes or turns: your body wants to keep its old velocity.'
  - 'A seat belt: in a crash the car stops but you, left alone, would keep going at 50 km/h until something stops you.'
  - 'Shaking a ketchup bottle or a wet umbrella: the container stops, the drops keep going.'
  - 'Tightening a loose hammer head by banging the handle end on the ground: the handle stops, the head keeps going down.'
  - 'Spacecraft cruising for years with their engines off, coasting at constant velocity, because there is nothing to slow them.'
models:
  - name: 'Default state'
    text: 'Every system has a default that continues without effort, and only a cause changes it. Physics names velocity as the default for motion. Ask about habits, companies and money too: what carries on by itself, and what would it take to change it?'
  - name: 'Balanced is not absent'
    text: 'Two big forces that cancel leave the same result as none at all. A calm lake is not a lake without forces, and a stable deal is not one without pressures. Look for the opposing sides before declaring that nothing is happening.'
  - name: 'Ask who is accelerating'
    text: 'When something seems pushed by a mysterious force, first check whether you are standing on something that is accelerating. Many "forces" are just the observer changing velocity.'
links:
  - leaf: 'phy/self-and-mutual-inductance'
    name: 'Self-inductance (electrical inertia)'
    same: 'A coil resists any change in the current through it, just as a mass resists any change in velocity. The energy stored, $\frac12Li^2$, mirrors $\frac12mv^2$.'
    differs: 'Mass resists a change of velocity; a coil resists a change of current, and it does so by generating a voltage rather than a force.'
  - leaf: 'phy/pseudo-forces'
    name: 'Pseudo forces'
    same: 'The first law picks out inertial frames. Pseudo forces are what you must invent to keep Newton''s laws alive in a frame that is not inertial.'
    differs: 'A real force has a source body pushing or pulling. A pseudo force has none; it appears only because the frame accelerates.'
next:
  q: 'We now know that no net force means no change. But if a net force does act, how much does the velocity change, and does the same push change a heavy trolley and a light one equally?'
  leaf: 'phy/momentum-and-the-second-law'
  name: 'Momentum and the second law'
---

:::hook
q: A puck sits on an endless, perfectly smooth sheet of ice, with no air at all. You flick it once and let go. What does it do?
options: ["It slowly slows down and stops, because the push runs out", "It keeps going in a straight line at the same speed for ever", "It speeds up slowly, as if the push were still building", "It keeps going, but curves gently to one side"]
answer: 1
right: Right. With nothing to push or pull it, the puck keeps the velocity it was given: same speed, same straight line, for ever. This is the first law. Everyday objects stop only because friction and air quietly push against them.
wrong: Try the experiment in your head with smoother and smoother floors: wood, ice, air table. The puck goes farther each time. Take the last bit of friction away and the trend says it never slows. The slowing was caused by friction, not by the puck running out of push.
:::

## Does motion need a push? {lvl=1 id=s-puck label="Class 8"}

Everyday experience says yes. Push a cart and it moves; stop pushing and it halts. It is no surprise that Aristotle thought things move only while something keeps moving them.

But look at what the cart is doing besides being pushed. It is rubbing against the ground and pushing through the air, and both of these push **backwards**. The cart stops not because the push has run out, but because friction was there all along. Make the floor smoother and the cart goes farther before stopping. Galileo took this to the limit: remove the friction entirely and the cart would go on for ever.

His famous test used two ramps facing each other. A ball released from a height rolls down one and, if there is no friction, rises up the other to the same height. Make the second ramp gentler and the ball must travel farther to reach that height. Make it flat, and it would have to travel for ever.

:::figure caption="Galileo's ramps: the flatter the second slope, the farther the ball travels to climb back to its starting height. On a flat second track it never stops."
<svg viewBox="0 0 360 200" role="img" aria-label="A ball released on a slope rises on a second slope to the same height; flatter slopes make it go farther">
<line class="faint" x1="20" y1="40" x2="340" y2="40"/>
<path class="ln" d="M20 40 L110 150 L200 40"/>
<path class="faint" d="M110 150 L270 40"/>
<path class="faint" d="M110 150 L340 40"/>
<line class="faint" x1="110" y1="150" x2="340" y2="150"/>
<circle class="obj" cx="22" cy="38" r="7"/>
<text x="30" y="30">start, height h</text>
<text x="196" y="68">steep</text>
<text x="262" y="88">gentler</text>
<text x="260" y="140">flat: never stops</text>
</svg>
:::

This is a classic **thought experiment**: you cannot build a perfectly smooth ramp, but you can see where the trend is heading and trust that. The best real stand-in is an air-hockey table, where a thin layer of air lifts the puck off the surface.

:::qc lvl=1
q: A cyclist stops pedalling on a flat road and gradually slows down. What is the best explanation?
options: ["The push from the pedals has run out", "Friction and air resistance push backwards on the cycle", "A moving object naturally comes to rest", "Gravity pulls it to a stop"]
answer: 1
right: Right. With no pedalling, the only horizontal forces are friction and air drag, and they point backwards. They change the cycle's velocity.
wrong: Look for the force that points against the motion. A body does not slow down by itself; something must be pushing against it.
:::

## The first law {lvl=1 id=s-law label="Class 9"}

Galileo's idea became **Newton's first law**. In plain words:

> A body at rest stays at rest, and a body in motion keeps moving in a straight line at constant speed, **unless a net force acts on it**.

Two words in this need care. "Net" means all the forces added together, with direction. A tug-of-war with both teams pulling equally has two big forces and a net force of zero. Such forces are called **balanced**. The second is "unless": a force is not what keeps a body moving; a force is what **changes** the motion.

Read it the other way and it is a detector. If a body is speeding up, slowing down or turning, a net force must be acting. If a body is at rest or moving steadily in a straight line, the forces on it must add to zero.

A crate is pushed along a floor at a steady 1.5 m/s with a push of 120 N. How large is the friction? The crate is not accelerating, so the net force is zero, and the friction must be exactly 120 N, backwards. Push with 150 N and the net force becomes 30 N forward, so the crate speeds up.

:::worked title="Steady speed does not mean no forces"
A table is dragged across the floor at a constant velocity with a horizontal force $F$. Constant velocity means zero acceleration, so the net force is zero. Friction from the floor is therefore equal to $F$ and opposite to it. If the push were larger than friction, the table would speed up; if smaller, it would slow down.
:::

:::figure caption="Steady motion, balanced forces: the 120 N push and the 120 N friction cancel, so the crate keeps its velocity. The up and down forces (weight and the floor's push) also cancel; they are not drawn."
<svg viewBox="0 0 360 200" role="img" aria-label="A crate moving right at constant velocity with equal push and friction arrows">
<defs><marker id="in1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="in2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="20" y1="150" x2="340" y2="150"/>
<rect class="m2 ln" x="130" y="70" width="100" height="80"/>
<line class="ray" x1="40" y1="110" x2="128" y2="110" marker-end="url(#in1)"/>
<text class="k" x="36" y="100">push 120 N</text>
<line class="wf" x1="228" y1="168" x2="138" y2="168" marker-end="url(#in2)"/>
<text class="k" x="150" y="188">friction 120 N</text>
<line class="ln" x1="160" y1="44" x2="220" y2="44" marker-end="url(#in1)"/>
<text x="150" y="32">v = 1.5 m/s, steady</text>
</svg>
:::

Here is that same fact as a graph: no net force, so the acceleration is zero, the velocity is a flat line and the position rises in a straight line.

:::widget name=motion-graphs u=3 a=0
:::

:::qc lvl=1
q: A box slides at constant velocity along a rough floor. Which statement is true?
options: ["There is no force on it", "The forward push is larger than friction", "The forces on it add to zero", "Friction is zero"]
answer: 2
right: Right. There are several forces, but they cancel, and that is exactly why the velocity does not change.
wrong: Constant velocity means zero acceleration, and that means the net force is zero. The forces are there but balanced.
:::

## Inertia and mass {lvl=1 id=s-inertia label="Class 9"}

The first law says a body will not change its velocity by itself. This stubbornness is called **inertia**. Everyone has felt it:

- A bus starts and you tip backwards. Your feet go with the bus, but your upper body, with nothing pushing it, tries to keep its old velocity (rest).
- The bus brakes and you tip forwards. Your feet slow down, your body wants to carry on.
- Flick a card from under a coin on a glass and the coin drops straight in. The card is gone before friction has time to drag the coin along sideways, so the coin stays put, and gravity then pulls it down.
- Yank a tablecloth quickly from under plates and the plates barely move. The cloth drags on them only for a tiny time, which is too short to change their velocity much.

Some bodies are harder to change than others. A 2 kg trolley is easy to start, a 10 kg trolley is five times harder to get going with the same push, and equally hard to stop. The measure of inertia is **mass**, written $m$ and counted in kilograms. A bigger mass means more inertia.

Mass is often confused with weight. **Weight** is the pull of a planet on the body, a force, counted in newtons. Near a planet's surface it is the mass times the pull per kilogram: $W = mg$. Read it as: every kilogram is pulled by about 9.8 newtons on Earth.

:::worked title="Weight on the Moon"
A 60 kg person has weight $60 \times 9.8 = 588$ N on Earth. On the Moon each kilogram is pulled by only about 1.6 N, so the weight is $60 \times 1.6 = 96$ N, about one-sixth. The mass is still 60 kg: the person is just as hard to push around. Kicking a heavy rock on the Moon would hurt your toe just as much as on Earth, because the rock's inertia is unchanged.
:::

:::qc lvl=1
q: An astronaut of mass 80 kg lands on the Moon. Which statement is right?
options: ["Mass is 80 kg, weight is smaller than on Earth", "Mass is about 13 kg, weight is smaller", "Both mass and weight are the same as on Earth", "Mass is 80 kg and weight is the same as on Earth"]
answer: 0
right: Right. Weight depends on the pull of the place and drops to one-sixth; mass, the amount of inertia, travels with you.
wrong: Mass is the quantity of inertia and does not depend on where you are. Weight is the planet's pull and does.
:::

## Forces that add to nothing {lvl=2 id=s-vector label="Class 11"}

A force has a direction, so "adding forces" means adding vectors. Two forces of 6 N east and 8 N north do not make 14 N; they make a force of $\sqrt{6^2 + 8^2} = 10$ N pointing north-east. A body in equilibrium (not accelerating) needs the vector sum of all forces to be zero:

$$\vec F_1 + \vec F_2 + \vec F_3 + \dots = \vec 0.$$

Read it as: put the arrows head to tail, and they must return to the start. Three forces make a closed triangle, four make a closed quadrilateral, and so on.

:::figure caption="A body is in equilibrium under 6 N east, 8 N north and a third force. Head to tail, the three arrows must close, so the third force is 10 N, pointing south-west (back from the tip of the 8 N arrow to the start)."
<svg viewBox="0 0 360 200" role="img" aria-label="Right triangle of force vectors 6 N, 8 N and 10 N closing head to tail">
<defs><marker id="in3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="in4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ray" x1="70" y1="170" x2="128" y2="170" marker-end="url(#in3)"/>
<line class="ray" x1="130" y1="168" x2="130" y2="92" marker-end="url(#in3)"/>
<line class="wf" x1="130" y1="90" x2="72" y2="166" marker-end="url(#in4)"/>
<text class="k" x="90" y="188">6 N east</text>
<text class="k" x="138" y="132">8 N north</text>
<text class="k" x="22" y="124">third force</text><text x="22" y="138">10 N</text>
<text x="210" y="100">closed triangle</text><text x="210" y="116">means net force zero</text>
</svg>
:::

Zero net force does not mean zero velocity. A raindrop falling at a steady speed has gravity pulling down and air drag pushing up, equal and opposite; a cork floating on water has weight balanced by the push of the water; a kite held still has the string, the wind and gravity cancelling. In each case the net force is zero, but the raindrop moves and the cork and kite do not. Both are covered by the same law.

Equilibrium in two dimensions splits into two ordinary equations: the forces along $x$ add to zero, and so do the forces along $y$.

:::qc lvl=2
q: A body is acted on by exactly 3 N east and 4 N north. What third force makes the net force zero?
options: ["5 N pointing south-west", "7 N pointing south-west", "5 N pointing north-east", "1 N pointing west"]
answer: 0
right: Right. The two forces add to 5 N pointing north-east, so the third must be 5 N exactly opposite.
wrong: First find the resultant of 3 N and 4 N: $\sqrt{3^2 + 4^2} = 5$ N, pointing north-east. The balancing force is equal and opposite.
:::

## Whose rest? Inertial frames {lvl=2 id=s-frame label="Class 11"}

The passenger who tips backwards in the starting bus seems to break the first law: from inside the bus, nothing pushes the passenger and yet the passenger accelerates backwards. But watch from the platform. The passenger is not accelerating at all; the bus accelerates forward and the passenger's lower half is dragged with it by the floor's friction, while the upper body lags.

So the first law cannot hold everywhere. It holds in some frames of reference and fails in others. A frame in which a body with no net force moves in a straight line at constant speed is called an **inertial frame**. The ground is very nearly one. A bus moving steadily on a straight road is another, since a ball tossed up in it falls back to your hand just as on the ground. A bus that is speeding up, braking or turning is not.

How good is the ground? Because the Earth spins, a point on the equator has an acceleration of about $0.034$ m/s², about 0.3% of $g$. Because the Earth goes round the Sun, there is another $0.006$ m/s². These are tiny, so for ordinary mechanics we treat the ground as inertial.

:::worked title="A stone dropped from a truck"
A truck starts from rest and accelerates steadily at 2 m/s². After 10 s, its speed is 20 m/s, and a person on top drops a stone. What happens to the stone's horizontal motion? Once it leaves the hand, no horizontal force acts on it (ignore air), so by the first law its horizontal velocity stays at 20 m/s, and its acceleration is just $g$ downwards. The truck keeps accelerating, so the truck pulls ahead of the stone. From the ground, the stone follows a curve; from the truck it seems to drift backwards, but that is because the truck is the one speeding up.
:::

:::qc lvl=2
q: A ball is thrown straight up inside a train moving at a steady 30 m/s along a straight track. Where does it land (ignore air)?
options: ["Behind the thrower", "In front of the thrower", "Back in the thrower's hand", "Cannot tell"]
answer: 2
right: Right. The train at constant velocity is an inertial frame. Inside it, a ball goes up and comes down exactly as if the train were at rest.
wrong: A steady train is just as good an inertial frame as the ground. The ball also moves forward at 30 m/s and keeps doing so, so it stays level with the thrower.
:::

## Equilibrium problems {lvl=3 id=s-equil label="JEE"}

Nearly every statics problem uses the same four steps. Pick one body. List every force on it. Resolve into components. Set the sum of components to zero along two perpendicular axes.

For a lamp of weight $W$ hung from two equal ropes, each making an angle $\theta$ above the horizontal, the ropes pull up with $T\sin\theta$ each. Balance: $2T\sin\theta = W$, so

$$T = \frac{W}{2\sin\theta}.$$

Read it as: the flatter the ropes, the more each one has to pull.

:::worked title="Each rope carries the whole weight"
A 5 kg lamp ($W = 49$ N) hangs from two ropes at 30° above the horizontal. Then $T = 49/(2 \sin 30°) = 49/(2 \times 0.5) = 49$ N. Each rope carries the full weight of the lamp, though together they carry twice that in their pull. At 5° it becomes $T = 49/(2 \times 0.0872) = 281$ N, almost six times the weight. That is why a washing line, however tight you pull it, can never be perfectly straight.
:::

:::qc lvl=3
q: A washing line carries a load of weight $W$ in the middle, and each half of the line makes 5° with the horizontal. About how large is the tension in the line?
options: ["About $W/2$", "About $W$", "About $5.7\\,W$", "Infinite"]
answer: 2
right: Right. $T = W/(2\sin 5°) = W/0.174 \approx 5.7\,W$. The tension is far larger than the load, and it grows without limit as the line is pulled flatter, so a perfectly straight line would need an infinite pull.
wrong: Use $2T\sin\theta = W$ with $\theta = 5°$, so $\sin 5° \approx 0.087$.
:::

When exactly three forces act and they are not parallel, they must pass through a single point, and the three sides of the force triangle follow the sine rule. This is **Lami's theorem**: each force is proportional to the sine of the angle between the other two. It saves a few lines, but resolving into components always works.

## What the first law really claims {lvl=4 id=s-deep label="Olympiad"}

**Is the first law just the second law with $a = 0$?** If it were, it would say nothing new. Its real job is different. It makes a claim about the world: there exist frames, the inertial frames, in which a force-free body moves uniformly. Then, and only then, the second law $F = ma$ is allowed to be written with the forces we normally count. In an accelerating frame the second law needs extra, invented terms (pseudo forces). So the first law selects the stage on which the other two laws can be played.

**Two puzzles from this.** *First*, hang a ball from the ceiling by a string and tie a second string to the bottom of the ball. Pull the lower string slowly and the upper string breaks, because it carries your pull plus the weight. Jerk the lower string sharply and the lower one breaks, because the ball's inertia stops it moving down before the upper string has stretched at all. Same ball, same strings, opposite result.

*Second*, a helium balloon floats in a closed car, tied to the floor. When the car accelerates forward, which way does the balloon lean? Forward, towards the front. Heavy air sloshes backward in the car, pressure builds at the rear, and that pressure gradient pushes the light balloon forward. It is the air's inertia, not the balloon's, that decides. Your head would tip backwards; the balloon does the opposite, and it is a good party trick.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A body keeps its velocity, size and direction, unless a net force acts. Slowing down always has a cause, usually friction. {lvl=1}
2. A force changes motion; it is not needed to keep motion going. {lvl=1}
3. Inertia is the reluctance to change velocity, and mass measures it. Weight is the pull of a planet ($W = mg$) and changes from place to place; mass does not. {lvl=1}
4. Constant velocity means balanced forces, not absent ones. {lvl=1}
5. Equilibrium: the force vectors add to zero, so the polygon of forces closes; resolve and set $\sum F_x = \sum F_y = 0$. {lvl=2}
6. The first law holds in inertial frames only; an accelerating bus is not one. {lvl=2}
7. In a rope-and-lamp problem, flatter ropes mean larger tension: $T = W/(2\sin\theta)$. {lvl=3}
8. The first law is the test for inertial frames; it is what permits $F = ma$ to be written without extra terms. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- "No force" and "no net force" are different. Check which one a problem means. {lvl=1}
- A body at rest has zero velocity; a body moving steadily has zero acceleration. Both have zero net force. {lvl=1}
- Do not call weight "mass": the first is in newtons, the second in kilograms. {lvl=1}
- There is no force "of motion" or "of inertia" to draw in a force diagram; inertia is a property, not a force. {lvl=2}
- Before applying the first law, check that your frame is not accelerating. {lvl=2}
- In equilibrium problems, choose axes that line up with as many forces as possible to cut down the algebra. {lvl=3}
:::
