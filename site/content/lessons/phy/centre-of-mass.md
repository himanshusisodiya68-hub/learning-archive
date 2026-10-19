---
title: Centre of mass
summary: Every tumbling, exploding or wobbling thing has one point that moves as simply as a thrown ball, and finding it is easier than you think.
ncert: ["Class 11 Physics · Ch 6 System of Particles and Rotational Motion (§6.1–6.2 Centre of mass, §6.3 Motion of centre of mass)"]
up_to: Olympiad
builds_on: [Momentum and the second law, Third law, Projectile motion, Collisions]
notes_prompt: Explain to a friend why a spinning bat tossed in the air has one point that flies in a smooth arc, and how you would find that point with a single finger.
margin:
  - kind: history
    title: History
    text: Archimedes worked out the balance point of flat shapes such as the triangle and the parabolic segment about 250 BC [Unverified date, from memory], long before anyone had a law of motion. The idea that the whole body moves as if its mass sat at this one point came with Newton's laws in the 1680s.
  - kind: tip
    title: Exam habit
    text: "Put the origin where it kills the most terms (on one of the masses, or on an axis of symmetry). For a body with a hole, treat the hole as a negative mass."
  - kind: olympiad
    title: Olympiad link
    text: "Two bodies joined by a spring behave like one body of mass M moving steadily plus one imaginary body of 'reduced mass' μ = m₁m₂/(m₁+m₂) oscillating. The same trick handles planets, molecules and collisions."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 9 Centre of Mass and Linear Momentum, §9-1 and §9-2" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 19 Centre of Mass; Moment of Inertia [Unverified chapter number, from memory]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapter on Centre of Mass, Linear Momentum, Collision [Unverified]" }
cards:
  - { front: "What is the centre of mass of two masses $m_1$ and $m_2$ a distance $d$ apart?", back: "On the line joining them, at $m_2d/(m_1+m_2)$ from $m_1$: closer to the heavier one. The distances from the two masses are in the inverse ratio of the masses." }
  - { front: "Formula for the centre of mass in words and symbols?", back: "A weighted average of positions, the weights being the masses: $x_{cm} = \\dfrac{\\sum m_ix_i}{\\sum m_i}$, and the same for $y$ and $z$." }
  - { front: "What does the centre of mass do when only internal forces act?", back: "Nothing new: it keeps its velocity. Internal forces come in equal and opposite pairs, so they cancel in $M\\vec a_{cm} = \\vec F_{ext}$." }
  - { front: "Can the centre of mass lie outside the body?", back: "Yes. For a ring it is at the centre of the hole; for a boomerang or a bent rod it is in the air near the bend." }
  - { front: "How do you find the centre of mass of a plate with a hole?", back: "Whole plate = remaining plate + removed piece. Treat the removed piece as a negative mass at its own centre and use the weighted average." }
  - { front: "Kinetic energy of a system in two pieces?", back: "$K = \\tfrac12Mv_{cm}^2 + K_{\\text{about cm}}$: the energy of the whole body moving, plus the energy of the motion relative to the centre of mass." }
core:
  idea: 'Every body or group of bodies has one special point, the centre of mass, the average position of its matter weighted by mass. Whatever the body does internally (spins, explodes, wobbles), this point moves exactly as a single particle of the total mass would under the total outside force.'
  formulas:
    - tex: 'x_{cm} = \dfrac{m_1x_1 + m_2x_2 + \cdots}{m_1 + m_2 + \cdots}'
      label: 'Centre of mass: a mass-weighted average of positions'
    - tex: 'M\vec a_{cm} = \vec F_{ext}'
      label: 'Newton''s second law for a whole system'
    - tex: '\vec P = M\vec v_{cm}'
      label: 'Total momentum of a system'
  conditions:
    - 'The law M a = F holds for the centre of mass of any system, rigid or not, provided F_ext is the sum of outside forces only'
    - 'Internal forces must obey Newton''s third law (equal, opposite, along the line joining the two bodies)'
    - 'Centre of mass and centre of gravity coincide only when gravity is the same everywhere on the body (true for ordinary bodies near the Earth)'
  sign: 'Choose positive directions first and put them in. A mass on the negative side of the origin enters the sum with a negative position. A hole enters with a negative mass.'
outcomes:
  - 'Find the balance point of a few masses on a line and explain why it sits nearer the heavier one'
  - 'Find the centre of mass of symmetric solids, plates with holes and simple composite shapes'
  - 'Explain why the centre of mass of a spinning or exploding body still follows a smooth path'
  - 'Use the centre of mass to solve boat-and-man, shell-explosion and pulley problems quickly'
  - 'Split a system''s kinetic energy into the part of the whole and the part inside, and handle two bodies joined by a spring'
opener:
  story: |
    Toss a cricket bat up in the air with a spin, and watch it. The handle swings one way, the blade swings the other, the whole bat tumbles around and looks as if it has lost its mind. Catching it feels like luck.

    Now stop watching the bat and follow one single point on it. You can't tell which point yet, but there is one. That point ignores the tumbling completely. It rises in a calm, smooth arc, slows at the top and falls back, exactly like a plain ball thrown by hand. Everything else on the bat is just dancing around it.

    Where is that point? You can find it in two seconds without any maths: lay the bat across one finger and slide it about until it balances. The spot above your finger is the one. So **why does the balance point get to fly so simply?**
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A spinning bat tossed in the air: the bat tumbles but its balance point follows a smooth parabola"><path d="M30 190 Q160 -10 290 190" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 4"/><g transform="translate(95 115) rotate(-35)"><path d="M-36 -2 L-4 -2 L-4 -5 L34 -5 L34 5 L-4 5 L-4 2 L-36 2 Z" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><circle r="3.5" style="fill:var(--chem)"/></g><g transform="translate(160 90) rotate(80)"><path d="M-36 -2 L-4 -2 L-4 -5 L34 -5 L34 5 L-4 5 L-4 2 L-36 2 Z" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><circle r="3.5" style="fill:var(--chem)"/></g><g transform="translate(225 115) rotate(190)"><path d="M-36 -2 L-4 -2 L-4 -5 L34 -5 L34 5 L-4 5 L-4 2 L-36 2 Z" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><circle r="3.5" style="fill:var(--chem)"/></g><text x="30" y="214" style="font-size:11px;fill:var(--muted)">the bat tumbles wildly</text><text x="150" y="40" style="font-size:11px;fill:var(--muted)">but this dot glides</text></svg>'
life:
  - 'A high jumper arches over the bar so that the body goes over while the centre of mass passes slightly under it. The jump is "cheaper" because the centre of mass is what gets lifted.'
  - 'A firework shell bursts at the top of its flight into a hundred sparks, yet the middle of the whole cloud keeps falling on the original curve until the first spark hits the ground.'
  - 'A truck or double-decker bus tips over when its centre of mass moves outside the wheels. That is why heavy loads go low.'
  - 'The Earth and the Moon both circle a point about 4,700 km from the Earth''s centre, inside the Earth, which is why the Earth seems to wobble each month.'
  - 'Astronomers find planets around other stars by watching the star wobble about the star-planet centre of mass.'
models:
  - name: 'Weighted average'
    text: 'The centre of mass is just an average where the heavier items get a bigger vote. Class averages, price indices and the "average" income of a village with one millionaire work the same way, and carry the same warning: the average can sit where nobody actually is.'
  - name: 'Internal pushes cancel'
    text: 'Pushes inside a group cannot change what the group does as a whole. A team cannot lift itself by pulling on its own belts, and a company cannot make its total money grow by moving it between its own accounts. Only outside forces count.'
  - name: 'Choose the right level of detail'
    text: 'You do not need to follow every part of a messy system. Often one well-chosen summary point answers the question: where does the shell land, how far does the boat drift, will the van tip.'
links:
  - leaf: 'phy/momentum-and-the-second-law'
    name: 'Momentum and the second law'
    same: 'Newton''s second law for one particle, F = ma, is the special case of M a_cm = F_ext for a system that is a single point. Momentum conservation is the same law when F_ext = 0.'
    differs: 'The single-particle law needs one force on one body. The system law lets you ignore all the internal forces, which is the whole point.'
  - leaf: 'phy/projectile-motion'
    name: 'Projectile motion'
    same: 'Under gravity alone, any thrown body, however much it spins or breaks up, has a centre of mass that follows the same parabola as a ball.'
    differs: 'The parabola belongs to the centre of mass only. Individual pieces of a tumbling or exploding body take other paths.'
next:
  q: 'The centre of mass tells us how a body travels, but not how it spins. A door pushed near the hinge hardly moves, yet at the handle it swings easily. What decides how strongly a push turns something?'
  leaf: 'phy/torque'
  name: 'Torque'
symbols:
  - s: 'm_i'
    means: 'mass of the i-th particle (kg)'
  - s: 'x_i'
    means: 'position of the i-th particle along the x-axis (m)'
  - s: 'x_{cm}'
    means: 'x-position of the centre of mass (m)'
  - s: 'M'
    means: 'total mass of the system, the sum of all the m_i (kg)'
  - s: '\vec r_{cm}'
    means: 'position vector of the centre of mass (m)'
  - s: '\vec v_{cm},\ \vec a_{cm}'
    means: 'velocity (m/s) and acceleration (m/s^2) of the centre of mass'
  - s: '\vec F_{ext}'
    means: 'sum of all the outside forces on the system (N)'
  - s: '\vec P'
    means: 'total linear momentum of the system (kg m/s)'
  - s: '\mu'
    means: 'reduced mass of two bodies, m_1 m_2/(m_1+m_2) (kg)'
  - s: 'K'
    means: 'kinetic energy (J)'
---

:::hook
q: A spinning bat is tossed in the air. Which point of the bat flies in a smooth, ball-like arc?
options: ["The end of the handle", "The exact middle of the bat's length", "The balance point, a little nearer the heavy blade", "No point: every part wobbles"]
answer: 2
right: Yes. The balance point, the centre of mass, is the one point that moves as if the whole bat were a tiny ball. It is nearer the blade because the blade is heavier, so the middle of the length is not the balance point.
wrong: Try balancing a bat across your finger. It does not balance at the middle, because the blade is heavier than the handle. The point where it does balance is the point that glides in an arc.
:::

## The balance point {lvl=1 id=s-balance label="Class 9"}

Put a plank across a log so that it balances like a see-saw. Sit a 2 kg bag at one end and a 6 kg bag at the other end, 8 m away. Where must the log go?

Not at the middle. The heavier bag has more pull, so the log must slide towards it. Work it out with a number: put the log at distance $x$ from the 2 kg bag. The 2 kg bag tips the plank one way with a "turning pull" of $2\times x$. The 6 kg bag tips it the other way with $6\times(8-x)$. Balance means these two are equal:

$$2x = 6(8-x)\ \Rightarrow\ 8x = 48\ \Rightarrow\ x = 6\ \text{m}.$$

Read it as: the log sits 6 m from the light bag and 2 m from the heavy one. The distances are in the **inverse** ratio of the masses: 3 times the mass, one third of the distance.

:::figure caption="A 2 kg and a 6 kg bag 8 m apart balance on a log 6 m from the light one. That balance point is the centre of mass."
<svg viewBox="0 0 380 175" role="img" aria-label="Plank balanced on a pivot with a 2 kilogram bag at the left end and a 6 kilogram bag at the right end">
<rect x="30" y="100" width="320" height="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/>
<rect x="38" y="74" width="24" height="26" rx="3" class="m2" style="stroke:var(--ink);stroke-width:1.2"/><text x="40" y="91" class="k">2 kg</text>
<rect x="308" y="58" width="44" height="42" rx="3" class="m2" style="stroke:var(--ink);stroke-width:1.2"/><text x="318" y="83" class="k">6 kg</text>
<path d="M260 108 L244 140 L276 140 Z" style="fill:var(--chem);stroke:var(--ink);stroke-width:1.2"/>
<text x="228" y="156" class="k">balance point</text>
<line x1="50" y1="164" x2="330" y2="164" class="ln"/><line x1="50" y1="159" x2="50" y2="169" class="ln"/><line x1="330" y1="159" x2="330" y2="169" class="ln"/><line x1="260" y1="159" x2="260" y2="169" class="ln"/>
<text x="140" y="130">6 m</text><text x="290" y="130">2 m</text>
</svg>
:::

That balance point has a name: the **centre of mass**. For a body made of many pieces, it is the single point where you could imagine all the mass gathered without changing how the body balances.

:::qc lvl=1
q: A 1 kg stone and a 3 kg stone sit at the two ends of a 4 m light rod. How far from the 3 kg stone must you hold the rod to balance it?
options: ["1 m", "2 m", "3 m", "0.75 m"]
answer: 0
right: Right. The distances are in the inverse ratio of the masses, so the 3 kg stone is 1 m from the balance point and the 1 kg stone is 3 m from it.
wrong: The heavier stone must be closer to your hand. Try 1 m and 3 m: 3 kg × 1 m = 3 and 1 kg × 3 m = 3, which balance.
:::

## An average with weights {lvl=2 id=s-weighted label="Class 11"}

The plank gives the idea. Say it in words first: the **centre of mass** is the average position of all the matter, where heavier pieces count for more. A class average counts each student once. This average counts each particle as many times as its mass. For particles at positions $x_1, x_2, \ldots$ with masses $m_1, m_2, \ldots$ (all on a line) we write

$$x_{cm} = \frac{m_1x_1 + m_2x_2 + m_3x_3 + \cdots}{m_1 + m_2 + m_3 + \cdots}.$$

Read it as: "multiply each position by its mass, add them up, and divide by the total mass." Here $x_{cm}$ is short for "the x-position of the centre of mass". Check it on the plank: put the 2 kg bag at $x=0$ and the 6 kg bag at $x=8$: $x_{cm} = (2\times0 + 6\times8)/8 = 6$ m. The same answer as before.

In a plane or in space the same recipe is used on each direction separately, so $y_{cm}$ uses the $y$-positions and $z_{cm}$ the $z$-positions. If you write a position as an arrow $\vec r$ from the origin, all three become one line, with $M$ for the total mass:

$$\vec r_{cm} = \frac{\sum m_i\,\vec r_i}{M}.$$

:::worked title="Three bags in a corner"
Masses 1 kg, 2 kg and 3 kg sit at $(0,0)$, $(6,0)$ and $(0,4)$ metres. The total mass is $M=6$ kg.

$x_{cm} = (1\times0 + 2\times6 + 3\times0)/6 = 2$ m and $y_{cm} = (1\times0 + 2\times0 + 3\times4)/6 = 2$ m.

The centre of mass is at $(2,\,2)$ m. It sits between the three bags, pulled towards the heavy 3 kg bag on the $y$ side and the 2 kg bag on the $x$ side.
:::

Two facts help a lot. First, if you move the origin, every $x_i$ and the answer shift by the same amount, so the **physical** point does not move: you may pick the origin to make the arithmetic easy. Second, if you can already find the centre of mass of two parts of a body, you may treat each part as one point mass at its own centre of mass, and average those two points. That is the key to composite bodies.

## Solid bodies and symmetry {lvl=2 id=s-solid label="Class 11"}

A solid has too many particles to add up one by one, so we use symmetry. Cut the body into slices that you can see are balanced about a line, and the centre of mass must lie on that line. A uniform rod balances at its midpoint. A uniform disc, sphere, cube or cylinder balances at its geometric centre, because for every bit of mass on one side there is an equal bit on the exact opposite side.

Two things surprise people.

**It may not be inside the body.** A ring balances at the middle of the hole, where there is no material at all. A boomerang or a bent rod has its centre of mass in the air near the bend.

**A triangle's centre is one third of the way up.** Slice a triangular plate into thin strips parallel to the base. Each strip balances at its midpoint, and those midpoints all lie on the median from the apex, so the centre of mass is on that median. Do the same with strips parallel to another side and the centre of mass is on a second median. It is where the medians cross, at a height $h/3$ above the base.

Many results are worth knowing and you will meet them again, mostly measured from the centre of the circle or the base.

| Body (uniform) | Where the centre of mass is |
|---|---|
| Triangular plate | $h/3$ above the base, on a median |
| Semicircular ring (wire) | $2R/\pi \approx 0.64R$ from the centre |
| Semicircular disc | $4R/3\pi \approx 0.42R$ from the centre |
| Solid hemisphere | $3R/8$ from the centre of the flat face |
| Hollow hemisphere (thin shell) | $R/2$ from the centre of the flat face |
| Solid cone or pyramid | $h/4$ above the base |

The semicircular wire is easy to derive: a piece at angle $\theta$ has height $R\sin\theta$ and length $R\,d\theta$, so $y_{cm} = \int_0^\pi R\sin\theta\,R\,d\theta\big/\pi R = 2R/\pi$. The others are standard results from the same kind of integral, which you may use without proof in exams [standard results].

:::qc lvl=2
q: A uniform square plate has a small square cut out of one corner. The centre of mass of the plate with the hole moves, compared with the full plate, towards
options: ["the hole", "the opposite corner, away from the hole", "nowhere: the centre of mass is fixed by the shape of the outline", "the middle of the nearest edge"]
answer: 1
right: Right. Removing mass from one side leaves more mass on the other, so the average position shifts away from the hole.
wrong: Think of the missing piece as a negative mass. The balance point must move away from where the mass was taken.
:::

## The hole trick {lvl=2 id=s-hole label="Class 11"}

How do you find the centre of mass of a disc with a hole in it? Add the hole back mentally. The full disc is the remaining plate plus the piece you took out, so

$$\text{full disc} = \text{remaining plate} + \text{piece}.$$

Take the full disc's centre as the origin, so its centre of mass is at $x=0$. Now average the two parts and say the result must be 0. Let the full disc have mass $M$ and radius $R$, and cut a hole of radius $R/3$ with its centre $R/2$ to the right of the centre. The area of the hole is $(1/3)^2 = 1/9$ of the disc, so the removed piece has mass $M/9$ and the plate keeps $8M/9$. If the plate's centre of mass is at $x$:

$$0 = \frac{(8M/9)\,x + (M/9)(R/2)}{M}\ \Rightarrow\ x = -\frac{R}{16}.$$

Read it as: the plate's centre of mass is $R/16$ to the **left** of the disc's centre, away from the hole. The trick is the same as treating the hole as a **negative mass** at its own centre. It saves an integral every time.

## The point that moves simply {lvl=2 id=s-motion label="Class 11"}

Back to the bat. Why does the balance point fly smoothly? Think of the bat as many small pieces, with masses $m_1, m_2, \ldots$. Each piece feels gravity, and the pieces also push and pull on each other inside the wood. Newton's second law for piece number $i$ says

$$m_i\vec a_i = (\text{outside forces on piece } i) + (\text{forces on piece } i \text{ from the other pieces}).$$

Now add the equations for all the pieces. The left side is $\sum m_i\vec a_i$, which is $M\vec a_{cm}$ because the centre of mass is the mass-weighted average position, so its acceleration is the mass-weighted average acceleration. On the right, the forces between the pieces come in pairs, and by Newton's third law each pair is equal and opposite, so they cancel in the sum. All that is left is the sum of the outside forces:

$$M\,\vec a_{cm} = \vec F_{ext}.$$

Read it as: "the centre of mass accelerates as if all the mass sat at that point and every outside force pushed on that point." For the bat, the only outside force is gravity, so $\vec a_{cm} = \vec g$ downwards. That is the acceleration of a thrown ball. Hence the arc.

Two things follow at once.

**Internal forces cannot move the centre of mass.** Your legs push on the ground (outside), but when a firework shell bursts, the explosive pushes the pieces apart with huge forces that are all internal. The centre of mass of the pieces keeps falling on the shell's old parabola until the first piece reaches the ground and a new outside force (the ground) appears.

**Momentum is the same statement.** The total momentum of a system is $\vec P = M\vec v_{cm}$, and $d\vec P/dt = \vec F_{ext}$. With no net outside force, $\vec P$, and hence $\vec v_{cm}$, stays constant. This is conservation of momentum, and it is the heart of the next lesson.

:::figure caption="A shell bursts at the top of its flight. The pieces fly apart, but their centre of mass (orange dot) stays on the original parabola. The outside force, gravity, has not changed."
<svg viewBox="0 0 360 200" role="img" aria-label="Parabola of a shell with two fragments after the burst and the centre of mass staying on the parabola">
<line x1="10" y1="175" x2="350" y2="175" class="gr"/>
<path d="M20 175 Q180 -25 340 175" class="ln"/>
<circle cx="180" cy="75" r="5" class="obj"/>
<path d="M180 75 Q205 80 232 175" class="faint"/><path d="M180 75 Q150 80 128 175" class="faint"/>
<circle cx="136" cy="145" r="5" style="fill:var(--phy)"/><circle cx="224" cy="145" r="5" style="fill:var(--phy)"/>
<circle cx="180" cy="145" r="4" style="fill:var(--chem);stroke:var(--ink);stroke-width:1"/>
<path d="M180 75 L180 145" class="faint"/>
<text x="150" y="60" class="k">burst</text><text x="188" y="162">centre of mass</text>
<text x="86" y="140">piece</text><text x="236" y="140">piece</text>
</svg>
:::

:::qc lvl=2
q: A firework shell bursts into pieces flying in all directions. Neglecting air resistance, the centre of mass of all the pieces just before the first piece lands
options: ["flies off in some direction of the burst", "keeps following the shell's original parabola", "stops, because the burst forces cancel", "falls straight down"]
answer: 1
right: Right. The burst forces are internal and cancel in pairs. Gravity alone acts, so the centre of mass carries on exactly as if the shell had never burst.
wrong: The burst forces are inside the system, so they cannot change the motion of the centre of mass. Only outside forces can, and the only one here is gravity.
:::

## Shortcuts that win exams {lvl=3 id=s-tricks label="JEE"}

The system law gives three tricks that appear again and again.

**1. No outside horizontal force, so the centre of mass does not move sideways.** A 60 kg man stands at one end of a 120 kg boat on still water and walks 4 m along the boat. Water drag is neglected. The man and boat together have no horizontal outside force, so their centre of mass stays put. If the boat slides back by $s$, the man has moved forward $4-s$ in the water, and the shift of the centre of mass is zero: $60(4-s) - 120s = 0$, so $s = 1.33$ m. You never needed to know how hard he pushed.

**2. A shell that bursts: use the centre of mass for the landing.** A shell fired on level ground breaks into two equal pieces at the top of its flight. One piece falls straight down, the other flies on. Both land at the same time (each starts with no vertical speed), and their average landing position is where the whole shell would have landed. If the unbroken shell would land at $R$, and the first piece lands at $R/2$ (directly below the burst), then $(R/2 + x_2)/2 = R$ gives $x_2 = 3R/2$. The problems below ask you to check this with numbers.

**3. One acceleration for a whole contraption.** Masses 3 kg and 2 kg hang on a string over a pulley, and accelerate at $a = 1.96$ m/s² (3 kg down, 2 kg up). The centre-of-mass acceleration is the mass-weighted average, $a_{cm} = (3a - 2a)/5 = 0.39$ m/s² down. It is far less than $g$ because the pulley's support pushes up on the system from outside: the string tension is internal, but the pull of the support is not.

:::note title="The centre-of-mass frame" tone=olympiad
If you ride along with the centre of mass (when $\vec F_{ext}=0$ it is a good inertial frame), the total momentum is zero. Many two-body problems become short: in that frame the two bodies always move in opposite directions, with momenta equal and opposite. The collisions lesson used exactly this view: now you can see why it works.
:::

:::qc lvl=3
q: A man stands at the front of a stationary boat on smooth water and walks to the back. The boat
options: ["moves backwards while he walks and stops when he stops", "moves forwards while he walks and stops when he stops", "does not move at all", "keeps moving after he stops"]
answer: 1
right: Right. The centre of mass of man and boat cannot move. When the man walks towards the back, the boat moves forward, and when he stops the relative motion stops, so it stops too.
wrong: He moves back relative to the boat, so for their centre of mass to stay still the boat must move the other way, forwards. When he stops, nothing pushes the boat any more.
:::

## Falling stuff pushes {lvl=4 id=s-stream label="Olympiad"}

Sand pours at 2 kg each second from a hopper 1.25 m above a kitchen scale. What does the scale read? Many people say "the weight of the sand on the pan". It reads more, and the reason is the system law again.

Think about the sand that hits the pan during one second. A mass of 2 kg arrives at $v=\sqrt{2gh} = \sqrt{2\times9.8\times1.25}\approx4.95$ m/s and is brought to rest. The pan must remove $2\times4.95 = 9.9$ kg m/s of momentum in one second, which needs an extra force of 9.9 N (the weight of about 1 kg). In general

$$F_{\text{extra}} = (\text{mass arriving per second})\times(\text{speed on arrival}).$$

Read it as: "the more stuff per second and the faster it arrives, the harder it pushes". The same rule gives the push of rain on an umbrella, the force of a fire hose, and the thrust of a rocket (turned around). You will use it on a falling chain in the problems.

## Two bodies and a spring {lvl=4 id=s-konig label="Olympiad"}

Two natural questions about energy. First: how much kinetic energy does a system have? Let $\vec v_{cm}$ be the velocity of the centre of mass and let $\vec u_i = \vec v_i - \vec v_{cm}$ be the velocity of piece $i$ **relative** to it. Then

$$K = \tfrac12\sum m_i|\vec v_{cm}+\vec u_i|^2 = \tfrac12Mv_{cm}^2 + \vec v_{cm}\cdot\sum m_i\vec u_i + \tfrac12\sum m_iu_i^2.$$

The middle term vanishes because $\sum m_i\vec u_i = 0$, which is just the definition of the centre of mass in disguise (the momentum relative to the centre of mass is zero). So

$$K = \tfrac12Mv_{cm}^2 + K_{\text{relative}}.$$

Read it as: "the energy of the whole body moving, plus the energy of motion inside". Only the second part can be turned into heat by internal forces. This is why a perfectly inelastic collision cannot destroy the first part.

Second question: two bodies $m_1$ and $m_2$ joined by a spring of stiffness $k$ and natural length $l_0$ lie on a smooth table. The spring is internal, so the centre of mass moves steadily. What about the stretch $x = (\text{separation}) - l_0$? Newton's law for each body gives $m_1a_1 = kx$ and $m_2a_2 = -kx$. Subtract: the relative acceleration is $a_2 - a_1 = -kx\left(\frac1{m_1}+\frac1{m_2}\right)$, and since $a_2-a_1 = \ddot x$,

$$\ddot x = -\frac{k}{\mu}\,x,\qquad \mu = \frac{m_1m_2}{m_1+m_2},\qquad \omega = \sqrt{\frac{k}{\mu}}.$$

Read it as: "the pair oscillates exactly like one body of mass $\mu$ on the same spring". The **reduced mass** $\mu$ is always smaller than either mass. For $m_1=1$ kg and $m_2=3$ kg, $\mu = 0.75$ kg. A hydrogen chloride molecule vibrates with $\mu$ very close to the hydrogen mass, and a molecule with heavy hydrogen (deuterium) vibrates more slowly. That shift is how spectroscopists tell the two apart [Inference, standard molecular physics].

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The balance point of a body is its centre of mass; with two masses it lies on the line between them, nearer the heavier one. {lvl=1}
2. $x_{cm} = \sum m_ix_i/\sum m_i$: an average of positions, with masses as weights. Use it for each direction. {lvl=2}
3. Symmetry gives the centre of mass of simple solids. It may lie outside the body. For a hole, subtract a negative mass. {lvl=2}
4. $M\vec a_{cm} = \vec F_{ext}$: internal forces cancel in pairs, so only outside forces move the centre of mass. {lvl=2}
5. With no net outside force the centre of mass keeps its velocity: boat-and-man, shell bursts, momentum conservation. {lvl=3}
6. Force from a stream of matter is (mass per second) × (speed). {lvl=4}
7. $K = \tfrac12Mv_{cm}^2 + K_{\text{relative}}$, and two bodies on a spring oscillate with the reduced mass $\mu$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The centre of mass of a body is not necessarily at its middle: it moves towards where mass is concentrated. {lvl=1}
- Do not include internal forces (strings between the parts, explosions) in $\vec F_{ext}$. {lvl=2}
- A hole is a negative mass at the hole's own centre, not at the plate's centre. {lvl=2}
- The centre of mass moves in a parabola only while the outside force is constant gravity. Once a piece hits the ground there is a new outside force. {lvl=3}
- Signs: positions on the left of the origin are negative. Measure all positions from the same origin. {lvl=1}
:::
