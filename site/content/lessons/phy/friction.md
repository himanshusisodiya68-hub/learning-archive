---
title: Friction
summary: Why a heavy wardrobe sits still however you push, then suddenly lurches, and the two numbers that explain it.
ncert: ["Class 8 Science (Curiosity) · Ch 5 Exploring Forces (friction)", "Class 9 Science · Ch 6 Force and Laws of Motion (friction)", "Class 11 Physics · Ch 4 Laws of Motion (§4.9 Friction)"]
up_to: Olympiad
builds_on: [Free-body diagrams, Inertia and the first law, Momentum and the second law]
notes_prompt: Explain to a friend why friction is not a fixed number, why it can point forwards, and why it is harder to start a heavy box sliding than to keep it sliding.
margin:
  - kind: history
    title: History
    text: Leonardo da Vinci noticed around 1500 that friction does not depend on how much surface touches, and Guillaume Amontons rediscovered it in 1699. Coulomb later separated static from sliding friction. The microscopic picture of tiny welds between rough peaks came only in the twentieth century.
  - kind: tip
    title: Exam favourite
    text: "Friction is only $\\mu N$ when the body is about to slip or is slipping. If it is merely at rest, find the friction from $F = ma$. A block pressed against a wall with weight $mg$ has friction exactly $mg$, whatever $\\mu N$ is."
  - kind: olympiad
    title: Olympiad link
    text: "Wrap a rope round a rough post and the force a sailor must hold falls exponentially with the number of turns, $T_{\\text{hold}} = T_{\\text{load}}e^{-\\mu\\phi}$. A few turns let a child hold a ship."
books:
  - { title: "NCERT Physics Class XI Part 1", ref: "Ch 4 Laws of Motion, §4.9 Friction" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch 6 Force and Motion II, §6-1 Friction [Unverified section number]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch 12 Characteristics of Force, friction [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 6 Friction [Unverified chapter number]" }
cards:
  - { front: "Which way does friction point?", back: "Along the surface, opposing the sliding (or attempted sliding) of the two surfaces over each other. It can point in the direction of motion, as when you walk." }
  - { front: "Static and kinetic friction laws?", back: "Static: $f_s \\le \\mu_s N$, taking whatever value keeps the body from slipping. Kinetic: $f_k = \\mu_k N$, roughly constant. Usually $\\mu_k < \\mu_s$." }
  - { front: "Does friction depend on the area of contact?", back: "Not to a good approximation. It depends on how hard the surfaces are pressed together (the normal force) and on the two materials." }
  - { front: "Angle of repose?", back: "The slope angle at which a block just starts to slide: $\\tan\\theta = \\mu_s$." }
  - { front: "Maximum acceleration a box can have on a train floor without slipping?", back: "$a_{\\max} = \\mu_s g$, since friction is the only horizontal force pushing the box along." }
  - { front: "Best angle for dragging a block with a rope, and the minimum force?", back: "Rope at $\\tan\\theta = \\mu$ above the horizontal; $F_{\\min} = \\mu mg/\\sqrt{1 + \\mu^2}$." }
core:
  idea: 'Friction is the force that two touching surfaces exert on each other along the surface, opposing their sliding. Before sliding it is a responder that takes whatever value is needed, up to a limit set by how hard the surfaces are pressed together. Once sliding starts, it settles at a slightly smaller constant value.'
  formulas:
    - tex: 'f_s \le \mu_s N'
      label: 'Static friction: at most $\mu_s N$, equal to whatever is needed'
    - tex: 'f_k = \mu_k N'
      label: 'Kinetic (sliding) friction'
    - tex: '\tan\theta = \mu_s'
      label: 'Angle of repose: block about to slide down a slope'
  conditions:
    - 'Dry, solid surfaces at moderate speeds; lubricated or very fast sliding behaves differently'
    - '$N$ is the actual normal force, which is not always $mg$'
    - 'The coefficients $\mu_s$ and $\mu_k$ depend on the two materials, not on the area of contact (to a good approximation)'
    - 'Usually $\mu_k < \mu_s$; when a problem gives only one $\mu$, use it for both'
  sign: 'Friction on a body points along the surface, opposite to the sliding (or attempted sliding) of that body relative to the surface it touches. It is not always opposite to the body''s motion: friction on a walker''s shoe, or on a box in an accelerating train, points forward.'
outcomes:
  - 'Explain why static friction adjusts itself, and find it from F = ma when a body is not slipping'
  - 'Use f = μN correctly, with the right normal force, for sliding and for the point of slipping'
  - 'Find the angle of repose, the acceleration on a rough slope, and stopping distances'
  - 'Decide whether two stacked blocks slip, and find the largest force before they do'
  - 'Show why a rope is easiest to pull at a particular angle, and derive the wrap-around-a-post law'
opener:
  story: |
    You try to push a heavy wardrobe across a room. A gentle push: nothing. A harder push: still nothing. You lean in with everything you have, and suddenly it jerks forward, and once it is moving it is easier to keep going than it was to start.

    Here is the puzzle. If you push with 100 newtons and the wardrobe does not move, something is pushing back with exactly 100 newtons. Push with 150 and it pushes back with 150. It seems to know how hard you are pushing! Then at some point it gives up. What is this force that matches your effort, up to a limit, and who decides the limit?

    The answer lies in the wardrobe's feet. At the microscopic scale a floor is a mountain range, and so is the bottom of the wardrobe. The peaks catch on one another, like two combs pressed together. Pushing sideways bends and squashes the peaks until they are pushed past each other, and that is what we call sliding.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A magnified view of two rough surfaces with interlocking peaks, a box above and a push arrow"><rect x="40" y="52" width="240" height="46" rx="4" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink);stroke-width:2"/><text x="132" y="80" style="font-size:12px;fill:var(--ink)">wardrobe</text><path d="M40 98 L58 110 L76 98 L94 112 L112 98 L130 111 L148 98 L166 112 L184 98 L202 110 L220 98 L238 111 L256 98 L280 108" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M40 118 L58 106 L76 118 L94 104 L112 118 L130 105 L148 118 L166 104 L184 118 L202 106 L220 118 L238 105 L256 118 L280 108" style="fill:none;stroke:var(--c);stroke-width:2"/><rect x="40" y="118" width="240" height="40" rx="4" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:none"/><path d="M0 75 L34 75" style="fill:none;stroke:var(--chem);stroke-width:3"/><path d="M26 69 L38 75 L26 81Z" style="fill:var(--chem)"/><text x="4" y="64" style="font-size:11px;fill:var(--ink)">your push</text><path d="M170 175 L116 175" style="fill:none;stroke:var(--c);stroke-width:3"/><path d="M124 169 L112 175 L124 181Z" style="fill:var(--c)"/><text x="120" y="196" style="font-size:11px;fill:var(--ink)">friction, matching your push</text><text x="40" y="226" style="font-size:11px;fill:var(--muted)">greatly magnified: peaks catch on peaks</text></svg>'
life:
  - 'Walking, cycling and a car pulling away all depend on friction pushing you forward; on ice the same effort gets you nowhere.'
  - 'A match lights, a nail holds in wood, a knot stays tied, a screw stays in the wall: all friction.'
  - 'About a fifth of the fuel in a car goes in fighting friction inside the engine and drivetrain; oil makes it smaller.'
  - 'Tyres, shoe soles and cricket-bat handles are patterned and chosen for a high coefficient of friction; skates, snow skis and bearings for a low one.'
  - 'Brakes work by friction: stopping distance is $v^2/(2\mu g)$, so a wet road (low $\mu$) can double it.'
models:
  - name: 'Responders have limits'
    text: 'A responder (static friction, a rope''s tension, a support) gives exactly what is asked of it, until it reaches its limit and fails all at once. Beams, relationships and budgets behave like this: no sign of strain, then a sudden break.'
  - name: 'Starting costs more than continuing'
    text: 'It takes a bigger effort to start something (a heavy box, a habit, a business) than to keep it going. The reason is a threshold: once the peaks have been pushed past one another, the grip is weaker.'
  - name: 'Friction is why the world holds still'
    text: 'Without friction, everything would slide until it reached the lowest point. Many of the things we call stable (a nail, a pile of sand, a standing human) are stable only because of a force that resists change.'
links:
  - leaf: 'phy/viscosity'
    name: 'Viscosity'
    same: 'Both oppose the sliding of one thing over another where they touch, and both turn organised motion into heat.'
    differs: 'Kinetic friction between solids is nearly independent of speed; viscous drag in a fluid grows with speed and vanishes when sliding stops.'
  - leaf: 'phy/heating-effect-and-power'
    name: 'Heating effect and power'
    same: 'Both are dissipative: the energy of an organised flow (a sliding body, an electric current) ends up as heat in the material.'
    differs: 'Friction depends on how hard the surfaces are pressed together; resistance depends on the material and shape of the conductor, not on any pressing force.'
next:
  q: 'Friction pushes you forward when you walk. What does it do to a car on a bend, which has to turn rather than speed up? And why is a wet road so much more dangerous than a dry one on exactly the same bend?'
  leaf: 'phy/circular-dynamics'
  name: 'Dynamics of circular motion'
symbols:
  - s: 'f'
    means: 'friction force, along the surface (newtons, N)'
  - s: 'N'
    means: 'normal force, the perpendicular push of the surface (N)'
  - s: '\mu_s'
    means: 'coefficient of static friction, a pure number with no unit'
  - s: '\mu_k'
    means: 'coefficient of kinetic (sliding) friction, a pure number'
  - s: '\theta'
    means: 'angle of the slope, or of a rope above the horizontal (degrees)'
  - s: 'm'
    means: 'mass of the body (kg)'
  - s: 'g'
    means: 'free-fall acceleration, 9.8 m/s² (10 m/s² in NCERT)'
  - s: 'a'
    means: 'acceleration (m/s²)'
---

:::hook
q: You push a crate with 20 N and it does not move. You push with 30 N and it still does not move. At the moment you push with 30 N, how large is the friction force from the floor on the crate?
options: ["20 N, the value it had before", "30 N, equal to your push", "More than 30 N, since the crate is not moving", "It depends only on the crate's weight, so we cannot say"]
answer: 1
right: Right. The crate is at rest, so the forces on it add to zero, and friction must be exactly 30 N. Static friction is a responder: it matches your push, whatever it is, until the limit $\mu_s N$ is reached.
wrong: The crate is not accelerating, so the horizontal forces on it must add to zero. Your push is 30 N, so friction must be 30 N: it has grown with your push. Static friction has a maximum value but does not stay fixed at it.
:::

## Why surfaces grip {lvl=1 id=s-why label="Class 8"}

When one surface slides, or tries to slide, over another, a force appears between them, along the surface. This is **friction**. It always resists the sliding.

Why does it exist? Look at any surface under a strong microscope: even polished steel is a landscape of tiny peaks and valleys. When two surfaces are pressed together, only the tips of the peaks really touch, and under the pressing force those tips stick to each other and squash. To slide, you must keep tearing these tiny contacts apart, and new ones keep forming. That is why friction is larger between **rough** surfaces, and also why it depends on how hard the surfaces are pressed: more pressing squashes more peaks together.

This is also why **smooth** surfaces can be slippery, yet very smooth ones (clean glass plates or polished metal blocks) can stick together: more of their surfaces touch. And why a wet surface is slippery: the water fills the valleys and keeps the peaks apart, a thin film between the surfaces. Friction is not limited to solids sliding on solids: air and water also resist the motion of objects through them. That is **drag**, a related force that grows with speed.

:::qc lvl=1
q: Which of these makes friction between two dry surfaces larger?
options: ["Pressing them together harder", "Making the contact area much bigger, with the same pressing force", "Making the surfaces slide faster", "Making them shiny"]
answer: 0
right: Right. Friction grows with the force that presses the surfaces together. A bigger contact area with the same pressing force changes little, because the force is shared over more, smaller contact points.
wrong: Friction depends on the pressing force (the normal force) and on the two materials. A larger area spreads the same force thinner, so the total real contact barely changes.
:::

## A responder with a limit {lvl=1 id=s-responder label="Class 9"}

Return to the wardrobe. You push with 100 N and it stays at rest, so friction must be 100 N. You push with 150 N, friction rises to 150 N. This friction **before** sliding is called **static friction**, and it is a responder: it takes whatever value is needed to prevent sliding. But it has a ceiling, the **maximum static friction**. Push harder than that and the surfaces slip.

Once sliding, the force drops a little and stays at roughly the same value, the **kinetic friction**, however fast the body slides. That is why starting a box is harder than keeping it going: the first push must beat the larger limit, then the force falls to the smaller kinetic value and the box accelerates, if you keep pushing the same.

:::figure caption="Friction against the push on a box. While at rest, friction equals the push (the rising line). At the limit the box slips, and friction drops to a smaller steady value."
<svg viewBox="0 0 360 220" role="img" aria-label="Graph of friction against applied force: a rising line up to a maximum, then a lower flat line">
<line class="ln" x1="50" y1="190" x2="340" y2="190"/><line class="ln" x1="50" y1="190" x2="50" y2="20"/>
<line class="ray" x1="50" y1="190" x2="190" y2="50"/>
<line class="faint" x1="190" y1="50" x2="190" y2="190"/><line class="faint" x1="50" y1="50" x2="190" y2="50"/>
<line class="wf" x1="190" y1="90" x2="330" y2="90"/><line class="wf" x1="190" y1="50" x2="190" y2="90" style="stroke-dasharray:3 3"/>
<text x="196" y="210">applied push F</text><text x="8" y="32">friction f</text>
<text class="k" x="56" y="46">max static: μs N</text><text class="k" x="236" y="82">kinetic: μk N</text>
<text x="78" y="140">at rest: f = F</text><text x="192" y="132">slipping starts</text>
</svg>
:::

:::worked title="A 10 kg box"
A 10 kg box on a floor with $\mu_s = 0.4$ and $\mu_k = 0.3$ (take $g = 9.8$). On level ground $N = mg = 98$ N. The most static friction can give is $0.4\times98 = 39.2$ N; once sliding, friction is $0.3\times98 = 29.4$ N.

Push with 30 N: the box stays put, and friction is 30 N (not 39.2 N and not 29.4 N). Push with 45 N: the box slips, friction falls to 29.4 N, and $a = (45 - 29.4)/10 = 1.56$ m/s². Push with exactly 39.2 N and the box is just about to slip.
:::

:::qc lvl=1
q: For the same box, what is the friction force if you push with 39 N (just below the limit)?
options: ["29.4 N", "39 N", "39.2 N", "98 N"]
answer: 1
right: Right. Below the limit the box does not move, so friction equals the push, 39 N. The maximum, 39.2 N, only comes into play if you push at least that hard.
wrong: The box is at rest, so friction equals your push: 39 N. The number 39.2 N is only the ceiling it could reach.
:::

An NCERT Class 9 question shows how the numbers combine. A 2 kg object moves at 10 m/s onto a rough patch where friction is 7 N, and a further 3 N opposes it. The net opposing force is 10 N, so $a = -10/2 = -5$ m/s², and the stopping distance is $v^2/(2|a|) = 100/10 = 10$ m.

## Two laws and two numbers {lvl=2 id=s-laws label="Class 11"}

Experiments on dry surfaces give two simple rules. For a body **at rest**, friction takes whatever value is needed, up to

$$f_s \le \mu_s N.$$

Read it as: static friction is at most the static coefficient times the normal force. For a body that is **sliding**,

$$f_k = \mu_k N,$$

kinetic friction is the kinetic coefficient times the normal force. The coefficients $\mu_s$ and $\mu_k$ are pure numbers that depend on the two materials; for most pairs $\mu_k$ is a little less than $\mu_s$. The symbol $N$ is the **normal force**, the perpendicular push between the surfaces. This is the number that measures "how hard they are pressed", and it is **not always** $mg$.

:::worked title="Push or pull a roller?"
A 20 kg roller is moved by a force of 80 N along its handle, at $30^\circ$ to the horizontal; $\mu_s = 0.3$, $g = 9.8$. The horizontal part of the force is $80\cos30^\circ = 69.3$ N either way.

Pushing (handle pointing down at 30 degrees): the vertical part $80\sin30^\circ = 40$ N pushes the roller into the floor, so $N = 196 + 40 = 236$ N and the maximum friction is $0.3\times236 = 70.8$ N. That is more than 69.3 N: the roller does **not** move.

Pulling (handle pointing up at 30 degrees): the vertical part now lifts, so $N = 196 - 40 = 156$ N and the maximum friction is only 46.8 N. That is less than 69.3 N: the roller moves.

Same force, same angle, opposite result. This is why a lawn roller or a loaded cart is easier to pull than to push.
:::

## The angle of repose {lvl=2 id=s-repose label="Class 11"}

Place a block on a plank and slowly tilt the plank. At first the block stays; at some angle it just begins to slide. What is that angle? Draw the block alone: weight $mg$ down, the normal force $N$ perpendicular to the plank, and static friction $f$ along the plank, **up** the slope, resisting the slide.

:::figure caption="A block on a rough slope: friction acts up the slope. The block is about to slide when f reaches μs N."
<svg viewBox="0 0 360 220" role="img" aria-label="Block on a rough incline with weight, normal force and friction up the slope">
<defs><marker id="fr1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="fr1b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="fr1c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker></defs>
<polygon points="30,200 330,200 330,60" style="fill:color-mix(in srgb,var(--phy) 10%,var(--surface));stroke:var(--ink);stroke-width:1.4"/>
<g transform="translate(170,134.7) rotate(-25)"><rect x="-24" y="-40" width="48" height="40" class="ln"/></g>
<circle class="obj" cx="161" cy="117" r="3.5"/>
<line class="ray" x1="161" y1="117" x2="134" y2="61" marker-end="url(#fr1a)"/>
<line class="wf" x1="161" y1="117" x2="161" y2="177" marker-end="url(#fr1b)"/>
<line class="ray" x1="161" y1="117" x2="203" y2="97" style="stroke:var(--chem)" marker-end="url(#fr1c)"/>
<text class="k" x="122" y="60">N</text><text class="k" x="167" y="190">mg</text><text class="k" x="208" y="94">f</text>
<text x="52" y="192">θ</text>
</svg>
:::

Perpendicular to the plank, nothing accelerates: $N = mg\cos\theta$. Along the plank, at the point of slipping, friction is at its maximum, $f = \mu_s N$, and balances the downhill part of the weight: $mg\sin\theta = \mu_s\,mg\cos\theta$. The $mg$ cancels, and dividing by $\cos\theta$,

$$\tan\theta = \mu_s.$$

Read it as: the angle at which a block just starts to slide is a direct readout of the coefficient of friction, independent of the block's mass. NCERT's example: a 4 kg block just slides at 15 degrees, so $\mu_s = \tan15^\circ = 0.27$. It is the cheapest way to measure $\mu_s$: tilt, and read the angle.

Once the block slides, kinetic friction takes over, and the acceleration is

$$a = g(\sin\theta - \mu_k\cos\theta).$$

Read it as: gravity's pull along the slope, minus the friction (also a multiple of $g$), per kilogram. For $\theta = 30^\circ$ and $\mu_k = 0.2$ it is $9.8\times(0.5 - 0.2\times0.866) = 3.2$ m/s², compared with 4.9 m/s² on a smooth slope.

:::qc lvl=2
q: A block just starts to slide on a plank tilted at 37° ($\tan37^\circ = 0.75$). What is $\mu_s$?
options: ["0.60", "0.75", "0.80", "Cannot say without the mass"]
answer: 1
right: Right. At the point of slipping, $\tan\theta = \mu_s$, so $\mu_s = 0.75$. The mass cancels.
wrong: At the point of slipping, $mg\sin\theta = \mu_s mg\cos\theta$, so $\tan\theta = \mu_s$. The mass cancels, and $\mu_s = 0.75$.
:::

## Friction pushes forward too {lvl=2 id=s-forward label="Class 11"}

Friction opposes **sliding between the two surfaces**, not the motion of the body. Think of walking. Your foot pushes backward on the ground, and the ground, by Newton's third law, pushes **forward** on your foot. The surface of your shoe is not sliding (it is at rest on the ground for an instant), so this is static friction. Without it, as on ice, the foot slides backward and you get nowhere.

The same holds for a car: the engine turns the driving wheels, whose tyres push backwards on the road, and the road's static friction on the tyres pushes the car **forward**. A box on the floor of an accelerating train has only one horizontal force on it, friction from the floor. If it is not to slip, friction alone must supply $ma$. The most it can give is $\mu_s mg$, so

$$a_{\max} = \mu_s g.$$

Read it as: the greatest acceleration that friction can give any object is $\mu_s g$, whatever its mass. NCERT's example: $\mu_s = 0.15$ gives $1.5$ m/s² (with $g = 10$).

The same limit decides how fast a car can stop. With the wheels rolling without slipping, static friction brakes the car at most at $\mu_s g$, so the shortest stopping distance from speed $v$ is

$$d = \frac{v^2}{2\mu_s g}.$$

At 72 km/h (20 m/s) on a dry road with $\mu_s = 0.8$: $d = 400/(2\times0.8\times9.8) = 25.5$ m. On a wet road with $\mu_s = 0.4$ the distance doubles to 51 m. Tyres that skid are worse than tyres that grip, because $\mu_k < \mu_s$, which is why anti-lock brakes pulse the brakes to keep the wheels just gripping.

:::qc lvl=2
q: When you walk forward on a level road, the friction force of the road on your shoe points
options: ["Backward, opposing your motion", "Forward, in the direction you walk", "Upward", "Nowhere: there is no friction on the foot"]
answer: 1
right: Right. Your foot pushes back on the road; the road pushes forward on your foot. That forward static friction is what accelerates you.
wrong: Friction opposes the sliding of the foot over the ground, which would be backward if the ground were icy. So the ground's friction on the shoe is forward, and that is the force that moves you forward.
:::

## Will it slip? {lvl=3 id=s-slip label="JEE"}

Many JEE problems have two or more bodies, and the question is whether one slips on another. The method is always the same: **assume they do not slip, find the friction needed, and compare with the limit.**

:::worked title="A block on a block"
A 4 kg block lies on a 6 kg block, with $\mu_s = 0.3$ between them. The 6 kg block rests on a smooth floor and is pulled by a horizontal force $F$. What is the largest $F$ before the top block slips? ($g = 9.8$)

The only horizontal force on the top block is friction from the bottom block, and friction can give at most $\mu_s m g$, so the top block's greatest acceleration is $\mu_s g = 2.94$ m/s². If they move together, the whole 10 kg system has this acceleration: $F = (4 + 6)\times2.94 = 29.4$ N. For a bigger $F$ the bottom block pulls ahead and the top block slides backward on it.
:::

Another trap: friction is not always $\mu N$. A 2 kg block pressed against a wall by a horizontal force of 50 N, with $\mu_s = 0.4$: $\mu_s N = 20$ N, but the block is at rest, so friction equals its weight, $2\times9.8 = 19.6$ N. Friction is only $\mu N$ when the body is about to slip; otherwise find it from $F = ma$.

**The best angle to drag a block.** Pull a block of mass $m$ along level ground with a rope at angle $\theta$ above the horizontal. The rope lifts the block a little, so $N = mg - F\sin\theta$, and at the point of sliding $F\cos\theta = \mu N$. Solve for $F$:

$$F = \frac{\mu mg}{\cos\theta + \mu\sin\theta}.$$

Read it as: the force is smallest when the denominator is largest. A little trigonometry shows that the largest value of $\cos\theta + \mu\sin\theta$ is $\sqrt{1 + \mu^2}$, reached when $\tan\theta = \mu$. So

$$F_{\min} = \frac{\mu mg}{\sqrt{1 + \mu^2}}\quad\text{at}\quad \tan\theta = \mu.$$

For $\mu = 0.5$ and $m = 10$ kg: $\theta = 26.6^\circ$ and $F_{\min} = 49/1.118 = 43.8$ N, against 49 N for a horizontal pull.

The same angle has another meaning. The surface pushes with $N$ and friction $f$, and these combine into one force of size $\sqrt{N^2 + f^2}$ at an angle $\lambda$ from the normal, with $\tan\lambda = f/N$. Since $f \le \mu_s N$, this total contact force can never lean more than $\lambda_{\max} = \arctan\mu_s$ from the perpendicular: it stays inside a **friction cone**. That is the angle of repose again. A body stays put under any push whose direction lies inside this cone, however large the push; this is the secret of a wedge that jams, and of a stuck drawer.

:::qc lvl=3
q: A 5 kg block rests on a rough slope. You gradually increase a push directed up the slope. Compared with the push needed to hold the block when it is just about to slide down, the push needed to make it just start to slide up is
options: ["Smaller", "The same", "Larger, by twice the maximum friction", "Zero in both cases"]
answer: 2
right: Right. About to slide down, friction points up the slope and helps you: $F = mg\sin\theta - f_{\max}$. About to slide up, friction points down the slope and works against you: $F = mg\sin\theta + f_{\max}$. The difference is $2f_{\max}$.
wrong: Friction always opposes the sliding. When the block is about to slide down, friction points up the slope and helps your push; when it is about to slide up, friction points down and opposes it. So the two pushes differ by twice the maximum friction.
:::

## Rope round a post {lvl=4 id=s-capstan label="Olympiad"}

A sailor holds a ship at a dock by winding a rope a few times round a post and holding the free end with a small pull. Why does this work, and how small can the pull be? Take a tiny piece of rope that subtends a small angle $d\phi$ at the centre of the post. The tension on one side is $T$ and on the other $T + dT$.

The two tensions together press the piece into the post with a normal force $N = T\,d\phi$ (for a small angle, two pulls of size $T$ at an angle $d\phi$ to each other have an inward resultant $T\,d\phi$). Friction along the rope, at its limit, balances the difference in tensions: $dT = \mu N = \mu T\,d\phi$. So

$$\frac{dT}{T} = \mu\,d\phi\quad\Rightarrow\quad T_{\text{load}} = T_{\text{hold}}\,e^{\mu\phi}.$$

Read it as: each extra angle of turn multiplies the holding power by a fixed factor, so it grows exponentially. For $\mu = 0.3$ and three full turns ($\phi = 6\pi = 18.85$ rad), $e^{\mu\phi} = e^{5.65}\approx 286$. A sailor who pulls with 0.34 N can hold a 98 N load, the weight of a 10 kg bag. Four turns multiply this by another 14.

:::note title="Exponentials in nature" tone=info
The same equation, "growth in proportion to size," describes compound interest, population growth and radioactive decay. Here the quantity is tension and the "time" is the angle round the post.
:::

A second classic: a uniform chain of length $L$ lies on a rough table with a length $x$ hanging over the edge. The hanging part's weight, $Mgx/L$, pulls the rest; friction holds the part on the table, at most $\mu Mg(L - x)/L$. The chain is about to slide when $x/L = \mu/(1 + \mu)$. For $\mu = 0.25$ one fifth can hang before it goes.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Friction is a force along the touching surfaces that resists their sliding; it comes from tiny peaks catching on each other. {lvl=1}
2. Static friction is a responder: it matches the push, up to a maximum. Below the limit, find it from $F = ma$. {lvl=1}
3. $f_s \le \mu_s N$ and $f_k = \mu_k N$; usually $\mu_k < \mu_s$; friction does not depend on contact area. {lvl=2}
4. $N$ is whatever the surface pushes with: push down on the block and it grows, pull up and it falls. {lvl=2}
5. A block on a slope just slips at $\tan\theta = \mu_s$; once sliding, $a = g(\sin\theta - \mu_k\cos\theta)$. {lvl=2}
6. Friction can point forward: it is the force that drives you, a car, or a box in a train, with maximum acceleration $\mu_s g$. {lvl=2}
7. For stacked blocks, assume no slip, find the friction needed, and compare it with $\mu_s N$. {lvl=3}
8. The best angle to drag a block is $\tan\theta = \mu$, with $F_{\min} = \mu mg/\sqrt{1 + \mu^2}$. {lvl=3}
9. Wrapping a rope round a post gives $T_{\text{load}} = T_{\text{hold}}e^{\mu\phi}$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Friction is **not** always $\mu N$. That is only the limit. For a body at rest and not about to slip, use $F = ma$. {lvl=1}
- Friction depends on the normal force, not on the weight: on a slope $N = mg\cos\theta$, and with an angled push or pull $N$ changes. {lvl=2}
- Friction is not always backward. It can be the very force that moves you forward. {lvl=2}
- The block at rest on a slope has friction $mg\sin\theta$, whatever $\mu$ is; the limit only matters when you are testing whether it will slide. {lvl=2}
- Friction on one body of a stack acts on **both**, in opposite directions (Newton's third law). Draw it on each. {lvl=3}
- Do not use kinetic friction before the block has started to slide. Static friction first. {lvl=2}
:::
