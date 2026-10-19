---
title: Third law
summary: Why you cannot push anything without being pushed back, and how a horse still manages to pull a cart.
ncert: ["Class 8 Science (Curiosity) · Ch 5 (§5.3, a push meets a push)", "Class 9 Science (Exploration) · Ch 6 (Newton's third law)", "Class 11 Physics · Ch 4 Laws of Motion (third law and Exercise 4.23)"]
up_to: Olympiad
builds_on: [Momentum and the second law]
notes_prompt: Explain to a friend why the horse can pull the cart even though the cart pulls back on the horse just as hard. Draw the forces on each separately.
margin:
  - kind: history
    title: History
    text: Newton published the three laws in the Principia in 1687. The third was the new one. He used it at once to show that two bodies pulling each other with gravity cannot change their total momentum, which is how he got from one falling apple to the whole solar system.
  - kind: tip
    title: Exam habit
    text: "Name every force as 'on X by Y'. The partner of a force is 'on Y by X'. If the two names do not swap, the two forces are not a third-law pair, however equal and opposite they look."
  - kind: olympiad
    title: Olympiad link
    text: "The third law is the reason momentum is conserved, and conservation of momentum is more general: it survives where equal-and-opposite pairs fail (moving charges), because the field itself carries momentum."
books:
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 5 Force and Motion I, §5-3 Newton's third law" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 10 Conservation of Momentum (feynmanlectures.caltech.edu) [Unverified chapter reference]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 5 Newton's Laws of Motion [Unverified chapter reference]" }
cards:
  - { front: "State Newton's third law.", back: "If body A exerts a force on body B, then B exerts a force on A that is equal in size, opposite in direction, along the same line and of the same kind. The two forces act on different bodies." }
  - { front: "Why do the two forces of a third-law pair never cancel?", back: "Cancelling needs both forces to act on the same body. A pair acts on two different bodies, so each body feels only one of them." }
  - { front: "Are the weight of a book and the normal force of the table a third-law pair?", back: "No. Both act on the book, and they are different kinds of force. They are equal only because the book is not accelerating (second law). The partner of the weight is the book's pull on the Earth." }
  - { front: "How does a horse pull a cart?", back: "By pushing the ground backwards. The ground pushes the horse forwards (friction), and that push must be bigger than the cart's pull back on the horse." }
  - { front: "Link between the third law and momentum?", back: "Equal and opposite forces for the same time give equal and opposite changes of momentum, $\\Delta p_A = -\\Delta p_B$, so the total momentum of the pair does not change." }
  - { front: "Why does a light bullet fly off much faster than the gun recoils?", back: "Both get the same size of momentum, $mv$. The smaller mass must have the larger speed." }
core:
  idea: 'Forces come in pairs. Whenever A pushes or pulls B, B pushes or pulls A with a force of the same size, in the opposite direction, along the same line. The two forces act on different bodies, so they can never cancel each other.'
  formulas:
    - tex: '\vec F_{\text{on A by B}} = -\,\vec F_{\text{on B by A}}'
      label: 'Newton''s third law'
    - tex: '\Delta\vec p_A = -\,\Delta\vec p_B'
      label: 'Equal and opposite changes of momentum (same force, same time)'
  conditions:
    - 'The two forces are the same kind (both gravity, both contact, both electric) and appear and disappear together'
    - 'They act along the line joining the two bodies when the force is central (contact, gravity, static electric); this is the exact everyday form'
    - 'Speeds far below the speed of light and no fields carrying momentum between the bodies'
  sign: 'Never put both members of a pair on one free-body diagram. Each body gets only the forces acting on it.'
outcomes:
  - 'Name the third-law partner of any force in a situation'
  - 'Explain why a horse can pull a cart, and why you cannot lift yourself by your own hair'
  - 'Use equal and opposite pairs to find recoil speeds and contact forces'
  - 'Choose a system boundary so that internal pairs cancel'
  - 'Say where the third law stops being exact'
opener:
  story: |
    Put on roller skates, face a brick wall and push it hard with both hands. You glide backwards. Now stop and think. The wall is bolted to the building, which is bolted to the Earth. It has no muscles and no engine. **So what pushed you?**

    It feels wrong to say "the wall pushed me". The wall just stands there. But try the same thing against a soft curtain, or against a friend on skates who does not push at all: the wall, the curtain and the friend all send you backwards as much as you send them forward, if they can.

    Newton's third law says that you cannot push anything unless it pushes you back, exactly as hard. The odd part comes next: if every push has an equal push-back, how does anything ever get going?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two skaters push each other and roll apart, the pushes are equal and opposite"><line x1="20" y1="190" x2="300" y2="190" style="stroke:var(--muted);stroke-width:1.5"/><circle cx="95" cy="80" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M95 94 L95 140 L82 186 M95 140 L108 186" style="fill:none;stroke:var(--ink);stroke-width:3;stroke-linecap:round"/><path d="M95 108 L152 118" style="fill:none;stroke:var(--ink);stroke-width:3;stroke-linecap:round"/><circle cx="225" cy="80" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M225 94 L225 140 L212 186 M225 140 L238 186" style="fill:none;stroke:var(--ink);stroke-width:3;stroke-linecap:round"/><path d="M225 108 L168 118" style="fill:none;stroke:var(--ink);stroke-width:3;stroke-linecap:round"/><circle cx="160" cy="118" r="5" style="fill:var(--chem)"/><path d="M80 150 L30 150" style="fill:none;stroke:var(--c);stroke-width:4"/><path d="M26 150 L40 142 L40 158Z" style="fill:var(--c)"/><path d="M240 150 L290 150" style="fill:none;stroke:var(--chem);stroke-width:4"/><path d="M294 150 L280 142 L280 158Z" style="fill:var(--chem)"/><text x="22" y="136" style="font-size:11px;fill:var(--muted)">on A by B</text><text x="236" y="136" style="font-size:11px;fill:var(--muted)">on B by A</text><text x="70" y="226" style="font-size:11px;fill:var(--muted)">equal size, opposite direction, two bodies</text></svg>'
life:
  - 'Walking: your foot pushes the ground back, and the ground pushes you forward. On ice it cannot push back, so you cannot go anywhere.'
  - 'A swimmer pushes water backwards with hands and feet, and the water pushes the swimmer forwards; a boatman does the same with an oar.'
  - 'A rocket or a Diwali rocket-firework throws hot gas down, and the gas throws the rocket up. No air or ground is needed.'
  - 'A garden hose or fire-hose kicks back against your hands, and the kick grows with the water speed.'
  - 'A cricketer drawing the hands back while catching, and a gun kicking into the shoulder, are the same pair of forces seen from two sides.'
models:
  - name: 'Every interaction has two ends'
    text: 'A push is never a property of one body; it is a relationship between two. In a negotiation, a price war or a quarrel, ask what is pushing back on you. If you cannot name the partner, you have not understood the interaction yet.'
  - name: 'Draw the boundary before you count'
    text: 'Whether a pair cancels depends on where you draw the line round your system. Inside the line the pairs cancel; across it they do not. In money, a transfer between your own two accounts changes nothing, while a payment out of the household does. Decide what is inside first.'
  - name: 'Equal force, unequal effect'
    text: 'Equal pushes do not give equal results: the effect depends on how much inertia each side has. The same dispute can move a small firm a lot and a giant a hair. Compare the pushes, then divide by what resists them.'
links:
  - leaf: 'phy/universal-law-of-gravitation'
    name: 'Universal law of gravitation'
    same: 'Gravity is a third-law pair too: the Earth pulls the apple down with $GMm/r^2$, and the apple pulls the Earth up with exactly the same force. The Earth''s acceleration is tiny only because its mass is huge.'
    differs: 'The third law is about any pair of forces. Gravity is one particular force law that happens to obey it.'
  - leaf: 'phy/collisions'
    name: 'Collisions'
    same: 'In a collision the two bodies push each other with equal and opposite forces for the same short time, so they swap equal amounts of momentum. That is the whole proof that momentum is conserved.'
    differs: 'In collisions you rarely know the forces; you use the conserved total instead. The third law is why the total is conserved at all.'
next:
  q: 'A real problem has a block, a table, a rope, a pulley and the Earth, each pushing on the others. How do you pick out just the forces on one body, without mixing up the pairs?'
  leaf: 'phy/free-body-diagrams'
  name: 'Free-body diagrams'
symbols:
  - s: 'F'
    means: 'force, a push or a pull (newtons, N)'
  - s: 'F_{\text{on A by B}}'
    means: 'the force acting on body A, exerted by body B (N)'
  - s: 'p'
    means: 'momentum, mass times velocity (kg m/s)'
  - s: '\Delta p'
    means: 'change of momentum (kg m/s)'
  - s: 'm'
    means: 'mass (kg)'
  - s: 'a'
    means: 'acceleration (m/s^2)'
  - s: 'T'
    means: 'tension, the pull of a rope or string (N)'
  - s: 'N'
    means: 'normal force, the push of a surface on a body (N)'
---

:::hook
q: You stand on roller skates and push a brick wall with both hands. You roll backwards. What pushed you?
options: ["Nothing: your own push makes you slide away", "The wall pushed you, with exactly the force you pushed it", "The air behind you", "The wall pushed you, but less than you pushed it, because it is fixed"]
answer: 1
right: Right. The wall pushed back, exactly as hard as you pushed. It stays still because it is attached to the whole Earth; you roll because nothing holds you. A push is half of an interaction, and the other half always exists.
wrong: Try the same push with nobody pushing back, such as in empty space, and you would not move at all. Your push only moves you because the wall pushes you. The two pushes are equal; what differs is what each body is attached to.
:::

## You cannot push without being pushed {lvl=1 id=s-push label="Class 8"}

Press your palm flat on a table. You can feel the table pressing back on your hand. Lean harder and it presses back harder. Two skaters on a smooth floor show it even better: let one push the other and **both** roll away, in opposite directions, even though only one of them did any pushing.

So a force is never alone. It is one end of an **interaction** between two bodies, and the other end is a second force, on the other body. That is Newton's **third law**:

> If body A pushes or pulls body B, then B pushes or pulls A with a force of the same size, in the opposite direction, along the same line.

People call the two forces "action" and "reaction", but that wording tempts you to think one comes first. They appear together and vanish together. It makes no difference which you call which.

:::figure caption="Two skaters push off. The force on A by B points left; the force on B by A points right. Same length, opposite directions, drawn on different bodies."
<svg viewBox="0 0 360 150" role="img" aria-label="Two skaters pushing on each other, with equal and opposite arrows on each">
<defs><marker id="tl1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker><marker id="tl1b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker></defs>
<line class="ln" x1="20" y1="124" x2="340" y2="124"/>
<circle class="ln" cx="100" cy="40" r="11"/><path class="ln" d="M100 51 L100 92 L89 120 M100 92 L111 120 M100 64 L170 72"/>
<circle class="ln" cx="240" cy="40" r="11"/><path class="ln" d="M240 51 L240 92 L229 120 M240 92 L251 120 M240 64 L170 72"/>
<line class="wf" x1="92" y1="80" x2="30" y2="80" marker-end="url(#tl1a)"/>
<line class="ray" x1="248" y1="80" x2="310" y2="80" marker-end="url(#tl1b)"/>
<text class="k" x="20" y="70">on A by B</text><text class="k" x="262" y="70">on B by A</text>
<text x="104" y="144">A</text><text x="236" y="144">B</text>
</svg>
:::

:::qc lvl=1
q: A fast truck hits a parked scooter. During the crash, which is true?
options: ["The truck pushes the scooter harder than the scooter pushes the truck", "They push each other with forces of exactly the same size", "The scooter pushes harder because it gets damaged more", "Only the truck exerts a force"]
answer: 1
right: Right. Bigger and faster does not mean a bigger force. The forces are equal; the scooter just has much less mass, so the same force gives it a much bigger acceleration, and it is the one that gets wrecked.
wrong: Damage depends on what each body is made of and how much mass it has, not on which push was bigger. The two pushes are always equal.
:::

## Two forces, two bodies {lvl=1 id=s-pairs label="Class 9"}

To keep pairs straight, name every force in the form "force **on** this body **by** that body". The partner of "force on A by B" is "force on B by A". The names swap places. That is the test: if the names do not swap, it is not a pair.

A third-law pair always has five features:

- the same size;
- opposite directions, along the same line;
- the same kind (a gravity force is paired with a gravity force, a contact push with a contact push);
- acting on **two different bodies**;
- existing together, neither before the other.

The fourth feature explains why the pair does not cancel. To cancel, two forces must act on the same body. A pair acts on two bodies, so each body feels one force and gets accelerated by it.

Then why does an apple fall to the Earth while the Earth does not seem to rise? Because the two pulls are equal and the accelerations are not: $a = F/m$, and the Earth's mass is some $10^{25}$ times the apple's.

:::worked title="Gun and bullet"
Say a gun of mass 4 kg pushes a bullet of mass 0.05 kg with a force of 100 N, and so the bullet pushes the gun back with 100 N.

Bullet: $a = 100/0.05 = 2000$ m/s², forward.
Gun: $a = 100/4 = 25$ m/s², backward.

Equal forces, but the lighter body gets 80 times the acceleration. The two accelerations are in the inverse ratio of the masses.
:::

## The horse and the cart {lvl=1 id=s-horse label="Class 11"}

Here is the famous trap. The horse pulls the cart forward. By the third law the cart pulls the horse back, equally hard. So the forces cancel, and nothing should ever move. Yet carts do move. What went wrong?

The mistake is adding the two forces together. They act on different bodies, so you can only add forces that act on the **same** body. Look at each separately.

- **On the cart**: the horse pulls it forward, the ground resists backwards. If the pull is bigger, the cart accelerates forward.
- **On the horse**: the cart pulls it backward, and the **ground pushes it forward**, because the horse pushes backward on the ground with its hooves. If that forward push is bigger than the pull of the cart, the horse accelerates forward.

So the real engine of the whole team is the ground. The horse pushes the ground back, and the ground pushes the horse forward. In empty space, or on perfectly smooth ice, there is nothing to push against: the horse could neither start nor stop.

:::figure caption="Horizontal forces, arrow lengths to scale. Horse 400 kg, cart 200 kg, both speeding up at 0.5 m/s². Horse: 500 − 300 = 200 N forward = 400 × 0.5. Cart: 300 − 200 = 100 N forward = 200 × 0.5."
<svg viewBox="0 0 380 196" role="img" aria-label="A horse and a cart with horizontal forces on each drawn separately">
<defs><marker id="tl2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="tl2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ln" x1="10" y1="150" x2="370" y2="150"/>
<rect class="m2 ln" x="30" y="88" width="100" height="50" rx="6"/><text class="k" x="52" y="118">horse 400 kg</text>
<rect class="m2 ln" x="200" y="98" width="90" height="40" rx="6"/><text class="k" x="212" y="122">cart 200 kg</text>
<circle class="ln" cx="220" cy="142" r="8"/><circle class="ln" cx="272" cy="142" r="8"/>
<line class="ln" x1="130" y1="112" x2="200" y2="116"/>
<line class="ray" x1="20" y1="72" x2="150" y2="72" marker-end="url(#tl2a)"/><text x="20" y="66">ground → horse 500 N</text>
<line class="wf" x1="150" y1="46" x2="72" y2="46" marker-end="url(#tl2b)"/><text x="72" y="40">cart → horse 300 N</text>
<line class="ray" x1="205" y1="72" x2="283" y2="72" marker-end="url(#tl2a)"/><text x="205" y="66">horse → cart 300 N</text>
<line class="wf" x1="283" y1="46" x2="231" y2="46" marker-end="url(#tl2b)"/><text x="205" y="40">ground → cart 200 N</text>
<text x="30" y="173">ground pushes the horse;</text><text x="30" y="186">the rope pair (300 N) never cancels</text>
</svg>
:::

:::qc lvl=1
q: A horse is harnessed to a cart on frictionless ice. Which is true?
options: ["It pulls faster, since nothing resists", "It cannot start: its hooves cannot push the ground backwards, so the ground cannot push it forwards", "Only the cart moves", "It moves, at constant speed"]
answer: 1
right: Right. The forward push on the horse is the ground's friction push. With no friction, there is no forward force on the horse at all, so it slips in place.
wrong: Walking and pulling both rely on the ground pushing you forward. Take away the grip, and the push disappears.
:::

## Pairs hiding in plain sight {lvl=1 id=s-hidden label="Class 9"}

A book rests on a table. The Earth pulls it down (its weight $W$) and the table pushes it up (the normal force $N$). The two are equal and opposite, so is that a third-law pair? **No.** Both act on the book, and one is gravity while the other is a contact force. They are equal only because the book is not accelerating, which is a second-law fact. The true partners are on the right of the figure: the book pushes down on the table (partner of $N$) and the book pulls up on the Earth (partner of $W$).

:::figure caption="Left: the two forces acting on the book. Right: their partners, which act on other bodies. Same colour means the same pair."
<svg viewBox="0 0 360 210" role="img" aria-label="Forces on a book and their third-law partners on the table and the Earth">
<defs><marker id="tl3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="tl3b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<text class="k" x="10" y="16">forces ON the book</text><text class="k" x="200" y="16">their partners</text>
<rect class="m2 ln" x="60" y="100" width="60" height="24" rx="3"/>
<line class="ray" x1="90" y1="98" x2="90" y2="44" marker-end="url(#tl3a)"/><text x="14" y="40">N: table on book</text>
<line class="wf" x1="90" y1="126" x2="90" y2="180" marker-end="url(#tl3b)"/><text x="14" y="196">W: Earth on book</text>
<rect class="m2 ln" x="215" y="100" width="90" height="48" rx="3"/><text x="232" y="164">table</text>
<rect class="ln" x="240" y="78" width="40" height="20" rx="3"/>
<line class="ray" x1="260" y1="104" x2="260" y2="142" marker-end="url(#tl3a)"/><text x="196" y="56">book on table</text>
<path class="m2 ln" d="M190 210 Q270 178 350 210"/>
<line class="wf" x1="330" y1="198" x2="330" y2="156" marker-end="url(#tl3b)"/><text x="322" y="176" text-anchor="end">book on Earth</text>
</svg>
:::

:::qc lvl=1
q: A ball hangs at rest from a string. The string pulls up on the ball. What is the third-law partner of this force?
options: ["The weight of the ball", "The ball's pull down on the string", "The pull of the ceiling on the string", "The ball's pull up on the Earth"]
answer: 1
right: Right. "Pull on the ball by the string" swaps to "pull on the string by the ball". The weight is not the partner: it acts on the same ball and is a gravity force.
wrong: Swap the names. The force is "on ball, by string"; its partner is "on string, by ball".
:::

Once you look for pairs, you see them everywhere:

| What happens | The push you notice | Its partner |
|---|---|---|
| Walking | foot pushes the ground back | ground pushes you forward |
| Swimming | hand pushes water back | water pushes you forward |
| Rocket | engine pushes gas down | gas pushes rocket up |
| Bird in flight | wings push air down | air pushes the bird up |
| Car on a road | tyre pushes the road back | road pushes the car forward |
| Jumping off a boat | feet push the boat back | boat pushes you forward |

## Momentum is conserved {lvl=2 id=s-momentum label="Class 11"}

Put the third law next to the second law. Two bodies A and B push on each other with forces $F$ and $-F$ for the same stretch of time $\Delta t$. The second law says force times time is the change of momentum, so A gains $F\,\Delta t$ and B gains $-F\,\Delta t$. In symbols:

$$\Delta p_A = -\Delta p_B.$$

Read it as: whatever momentum one body gains, the other loses. The total momentum of the pair does not change.

:::worked title="Rifle recoil"
A rifle of mass 4 kg fires a bullet of mass 10 g at 600 m/s. Both start at rest, so the total momentum is zero before and must be zero after.

Bullet momentum: $0.010 \times 600 = 6$ kg m/s forward.
So the rifle has $6$ kg m/s backward: $v = 6/4 = 1.5$ m/s.

Same size of momentum, but the rifle is 400 times heavier, so it moves 400 times more slowly. The kinetic energies are not equal: the bullet gets $\tfrac12(0.01)(600)^2 = 1800$ J and the rifle only 4.5 J.
:::

The same idea answers a question that often puzzles people. When a sailor jumps forward from a small boat towards the shore, **the boat moves backward**. His feet push the boat back; the boat pushes him forward. With a 60 kg sailor leaving at 3 m/s from a 120 kg boat at rest, the boat's momentum is $-60 \times 3 = -180$ kg m/s and it slides back at 1.5 m/s. That is why a person jumping to a dock from a small boat can end up in the water.

Add up the pairs inside a group of bodies and they cancel two by two. So **only forces from outside a system can change its total momentum**. Inside forces, however violent, cannot. This is why you cannot lift yourself by pulling on your own hair, and why a sail on a boat does nothing if the fan blowing on it is also on the boat.

:::qc lvl=2
q: A 50 kg skater at rest throws a 5 kg ball forward at 8 m/s on smooth ice. At what speed does the skater move?
options: ["0.8 m/s backward", "8 m/s backward", "0.8 m/s forward", "No movement"]
answer: 0
right: Right. Ball momentum is $5 \times 8 = 40$ kg m/s forward, so the skater has 40 kg m/s backward: $v = 40/50 = 0.8$ m/s.
wrong: The skater gets the same momentum, backward. Divide by the skater's own mass, 50 kg.
:::

## Pushing blocks, pulling ropes {lvl=2 id=s-chain label="Class 11"}

Two blocks touch on a smooth table: a 4 kg block and a 1 kg block. You push the 4 kg block with 20 N. Both move together with $a = 20/(4+1) = 4$ m/s². What does the 4 kg block push the 1 kg block with? The 1 kg block is accelerated by this contact force alone: $N = 1 \times 4 = 4$ N. By the third law, the 1 kg block pushes back on the 4 kg block with 4 N, so the net force on the big block is $20 - 4 = 16$ N, which is indeed $4 \times 4$.

Now push the 1 kg block instead with the same 20 N. The acceleration is still 4 m/s², but now the 1 kg block has to push the 4 kg block along: $N = 4 \times 4 = 16$ N. **The contact force depends on which end you push.** It is the force needed to accelerate everything beyond the point of contact.

A **light rope** works the same way. A rope with negligible mass needs no net force to accelerate it, so the two ends pull on it with equal forces. By the third law, the rope pulls on the bodies at both ends with that same force, the **tension** $T$. This is why an ideal rope passes a pull along unchanged, and why a pulley (which only turns the rope) just redirects it.

A **heavy rope** is different. Its parts must accelerate too, so the tension changes from point to point. A uniform rope of mass $M$ and length $L$ pulled along a smooth table with force $F$ has tension $T = F\,x/L$ at a distance $x$ from the free end: each bit of rope pulls the bit behind it, and the pulls pile up.

:::qc lvl=2
q: A 10 N force pushes two blocks (3 kg then 2 kg, in contact) on a smooth floor. You then reverse the order, pushing the 2 kg block first. How does the contact force change?
options: ["It stays the same", "It goes from 4 N to 6 N", "It goes from 6 N to 4 N", "It becomes zero"]
answer: 1
right: Right. Pushing the 3 kg block first, the contact force accelerates the 2 kg block: $2 \times 2 = 4$ N. Pushing the 2 kg block first, it accelerates the 3 kg block: $3 \times 2 = 6$ N.
wrong: The common acceleration is $10/5 = 2$ m/s². The contact force is the mass beyond the contact times this.
:::

## System or part? {lvl=3 id=s-system label="JEE"}

Many JEE problems turn on a choice: do you draw your boundary round one body or round the whole group? Pairs inside the boundary cancel and disappear from the equation; pairs that cross the boundary stay. Pick the boundary that hides the forces you do not care about.

:::worked title="A finger in the water"
A beaker of water stands on a scale that reads 2.000 kg. You dip a finger of volume 20 cm³ into the water, without touching the glass. The water pushes the finger up with the buoyant force $\rho V g = 1000 \times 20\times10^{-6} \times 9.8 = 0.196$ N. By the third law, the finger pushes the water down with 0.196 N, and the scale feels that extra push. The reading goes up by $0.196/9.8 = 0.020$ kg, to 2.020 kg: the scale counts the mass of the water your finger pushed aside.
:::

:::worked title="A bird in a sealed cage"
A sealed cage with a bird sits on a scale. If the bird perches, the scale reads cage plus bird. If the bird hovers, it must push air down with a force equal to its weight; the air carries that push to the cage floor, so the scale still reads cage plus bird. Draw the boundary round the whole sealed box: the only outside forces are gravity and the scale, so the scale reads the total weight as long as the centre of mass of the contents is not accelerating. If the bird accelerates upward, the scale reads more for that moment.
:::

:::worked title="Pulling yourself up"
A man of mass 60 kg stands on a platform of mass 20 kg. A light rope runs over a pulley and is tied at one end to the platform; the man holds the other end. Take $g = 9.8$ m/s². What tension lets him hold everything at rest?

Take the man and platform as one system. Upward pulls from the rope act at two places (one on the platform, one on his hands), each equal to $T$. So $2T = (60 + 20) \times 9.8$, giving $T = 392$ N.

Now the man alone: $T + N = 60 \times 9.8 = 588$ N, so the platform pushes him up with $N = 196$ N and, by the third law, he pushes the platform down with 196 N. Check on the platform: $T = 20 \times 9.8 + 196 = 392$ N. ✓
:::

:::qc lvl=3
q: A man in a lift pushes up on the ceiling with 100 N while the lift moves at a steady speed. How does the force of the cable change?
options: ["It rises by 100 N", "It falls by 100 N", "It does not change", "It becomes zero"]
answer: 2
right: Right. The man's push on the ceiling is an internal pair (ceiling pushes him down by 100 N). The lift plus man as one system feels only the cable and gravity, so the cable force is unchanged.
wrong: Draw the boundary round the lift and the man. The pair is inside it and cancels. Only the cable and gravity cross the boundary.
:::

## When the third law bends {lvl=4 id=s-bends label="Olympiad"}

The third law has two versions. The **weak** version says only that the two forces are equal and opposite. The **strong** version also says they lie on the line joining the two bodies. Contact forces, gravity and the electric force between charges at rest are all strong: they point along the line. The strong version is what makes angular momentum conserved as well.

At everyday speeds, the third law is superb. But the force between two **moving** charges is not always equal and opposite. Take one charge sailing straight towards the spot where another charge is crossing at right angles. The magnetic force on one is not matched by an opposite force on the other, and total momentum of the two particles alone is not conserved. The momentum has not vanished; it is in the electromagnetic field around them, and the field carries it back later. Momentum conservation, including the field, is more fundamental than the equal-and-opposite rule, and the third law is its low-speed shadow. [Standard result; for the discussion see Feynman Vol. 1 on momentum conservation, chapter reference unverified.]

Even gravity bends this way at high speeds, because the pull travels at the speed of light, not instantly.

The cleanest working form of the third law for problem solving is the **centre-of-mass rule**. With no outside horizontal force, the centre of mass of a system does not move, however the parts push each other.

:::worked title="Walking in a boat"
A 60 kg person stands at the back of a 120 kg boat that floats still on a calm lake (ignore water drag). She walks 3 m to the front. How far does the boat move?

No outside horizontal force, so the centre of mass stays put. Let the boat slide back by $x$. Relative to the lake, the person moves forward $3 - x$. For the centre of mass to stay where it was, the person's mass times her shift must equal the boat's mass times its shift: $60\,(3 - x) = 120\,x$, so $180 = 180\,x$ and $x = 1.0$ m. The boat slides 1 m back, the person ends 2 m forward of where she started.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Forces come in pairs: A on B and B on A are equal in size and opposite in direction. {lvl=1}
2. The two forces of a pair act on different bodies, so they never cancel each other. {lvl=1}
3. Name forces "on X by Y"; the partner swaps the names. Weight and normal force are not a pair. {lvl=1}
4. A horse pulls a cart by pushing the ground back, and the ground pushes it forward. {lvl=1}
5. Equal and opposite pairs give $\Delta p_A = -\Delta p_B$: momentum is conserved, and recoil is momentum shared out. {lvl=2}
6. Contact force between pushed blocks is the force needed to accelerate everything beyond the contact. {lvl=2}
7. For a system, draw the boundary so internal pairs cancel; only forces across it matter. {lvl=3}
8. Between moving charges, the pair rule bends; momentum conservation, with the field, stays. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never put both forces of a pair on the same free-body diagram: they act on different bodies. {lvl=1}
- Weight and the normal force on a book at rest are equal but are **not** a third-law pair. {lvl=1}
- A bigger body does not push harder; the force is equal. It only accelerates less. {lvl=1}
- In recoil problems, momenta are equal and opposite, not speeds, and not energies. {lvl=2}
- Contact force between two pushed blocks changes when you swap which one you push. {lvl=2}
- Check the scale: a force inside the system (hand on own ceiling) cannot change what the outside sees. {lvl=3}
:::
