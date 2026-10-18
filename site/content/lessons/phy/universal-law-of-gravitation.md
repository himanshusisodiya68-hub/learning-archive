---
title: Universal law of gravitation
summary: Why the Moon does not fall on us (it does, all the time), Newton's inverse-square law, why every object falls at the same rate, and how the same shape of law reappears in electricity.
ncert: ["Class 11 Physics · Ch 7 Gravitation (§7.1–7.3)"]
up_to: Olympiad
builds_on: [Momentum and the second law, Circular motion]
notes_prompt: Explain to a ten-year-old why the Moon keeps going round the Earth instead of falling down or flying away.
margin:
  - kind: history
    title: History
    text: Newton is said to have compared the falling apple with the Moon around 1666, and published the law in the Principia in 1687. Cavendish first measured G in a laboratory in 1798, "weighing the Earth".
  - kind: tip
    title: Exam favourite
    text: "Doubling the distance quarters the force. Doubling one mass doubles it. Always measure r between centres."
  - kind: olympiad
    title: Olympiad link
    text: "A uniform spherical shell pulls an outside body as if all its mass sat at the centre, and pulls an inside body not at all. Gauss's law for gravity proves both in two lines."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 7 The Theory of Gravitation (feynmanlectures.caltech.edu)" }
  - { title: "R. P. Feynman, Six Easy Pieces", ref: "Ch. 5 The Theory of Gravitation" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 11 Gravitation [Unverified]" }
cards:
  - { front: "State Newton's law of gravitation.", back: "Every two point masses attract along the line joining them with $F = Gm_1m_2/r^2$." }
  - { front: "Why does a heavy stone fall no faster than a light one?", back: "The pull is proportional to the mass, and so is the inertia; the mass cancels, so $a = GM/r^2$ for every body." }
  - { front: "How far does the Moon fall towards the Earth each second?", back: "About 1.4 mm, which is exactly what its curved path needs: it keeps falling and keeps missing." }
  - { front: "Value of G?", back: "$6.67 \\times 10^{-11}\\ \\text{N m}^2\\,\\text{kg}^{-2}$, tiny, which is why gravity between everyday objects goes unnoticed." }
  - { front: "Shell theorem in one line?", back: "Outside a uniform shell: as if all mass were at the centre. Inside: zero force." }
core:
  idea: 'Every lump of matter pulls every other lump, along the line joining them, with a force proportional to each mass and to one over the distance squared. The same pull drops an apple and keeps the Moon in orbit.'
  formulas:
    - tex: 'F = \dfrac{G\,m_1 m_2}{r^2}'
      label: 'Newton''s law of gravitation'
    - tex: 'g = \dfrac{GM}{R^2}'
      label: 'Acceleration of free fall at a planet''s surface'
  conditions:
    - 'Point masses, or uniform spheres with r measured between their centres'
    - 'Speeds far below light and fields far weaker than near a black hole (Newtonian limit)'
    - 'Forces from several bodies simply add as vectors (superposition)'
  sign: 'Gravity always attracts. Measure r centre to centre, never surface to surface.'
outcomes:
  - 'Explain why the Moon is falling, and why it never lands'
  - 'Use F = Gm₁m₂/r² and its inverse-square scaling without a calculator'
  - 'Show why all bodies fall with the same acceleration and find g from G, M and R'
  - 'Add gravitational pulls from several bodies as vectors'
  - 'Compare gravity with the electric force: what is the same, what is different'
opener:
  story: |
    Drop your phone and it falls. Everyone knows that. Now step outside tonight and look up. The Moon is hanging there, nearly four lakh kilometres away, with nothing holding it up. No string, no pillar, no engine.

    So here's a question that bothered the sharpest minds for two thousand years: **why doesn't the Moon fall down too?**

    Isaac Newton's answer sounds like a joke at first. It *does* fall. It's falling right now, as you read this. It has been falling for four billion years. It just keeps missing.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Newton''s cannon: faster shots curve round the Earth into orbit"><circle cx="150" cy="150" r="66" style="fill:color-mix(in srgb,var(--c) 18%,var(--surface));stroke:var(--c);stroke-width:2"/><path d="M138 86 L150 70 L162 86Z" style="fill:var(--muted)"/><rect x="146" y="64" width="16" height="6" rx="2" style="fill:var(--ink)"/><circle cx="150" cy="150" r="86" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 5"/><path d="M162 66 Q190 62 196 98" style="fill:none;stroke:var(--chem);stroke-width:2"/><path d="M162 66 Q222 62 214 130" style="fill:none;stroke:var(--chem);stroke-width:2"/><path d="M162 66 Q240 70 226 172" style="fill:none;stroke:var(--chem);stroke-width:2"/><circle cx="276" cy="44" r="13" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><circle cx="271" cy="40" r="2.5" style="fill:var(--muted)"/><circle cx="280" cy="48" r="2" style="fill:var(--muted)"/><path d="M262 54 Q236 70 228 92" style="fill:none;stroke:var(--ink);stroke-dasharray:3 4"/><text x="178" y="56" style="font-size:11px;fill:var(--muted)">faster and faster</text><text x="104" y="236" style="font-size:11px;fill:var(--muted)">fast enough: it never lands</text><text x="232" y="22" style="font-size:11px;fill:var(--muted)">the Moon, falling</text></svg>'
life:
  - 'Satellites for GPS, weather and TV are falling round the Earth exactly like the Moon, just closer and faster.'
  - 'Ocean tides come from the Moon pulling the near side of the Earth a little harder than the far side.'
  - 'You weigh about 0.3% less at the equator and at the top of Everest than at the poles at sea level.'
  - 'Space agencies plan slingshot routes past planets using nothing but this one law.'
models:
  - name: 'Inverse-square spreading'
    text: 'Anything that spreads out evenly from a point (gravity, light, sound, Wi-Fi signal) weakens as 1/r², because the same total is shared over a sphere of area 4πr². Double the distance, a quarter of the effect.'
  - name: 'Same law, different scale'
    text: 'Newton''s leap was refusing to treat the sky and the ground as different worlds. When two puzzles look different, ask whether one rule could explain both.'
  - name: 'Cancel what appears on both sides'
    text: 'Mass makes the pull bigger and makes the body harder to move, by exactly the same factor. When a quantity drives both the push and the resistance, it drops out of the answer.'
links:
  - leaf: 'phy/coulombs-law'
    name: 'Coulomb''s law (electric force)'
    same: 'Same shape: $F \propto q_1q_2/r^2$ versus $F \propto m_1m_2/r^2$. Both act along the line joining the bodies, both add by superposition, both obey the shell theorem and a Gauss''s law. Learn one and the other is nearly free.'
    differs: 'Charge comes in two signs, so electric forces attract or repel and can cancel; mass has one sign, so gravity only attracts and never cancels. And the electric force between two electrons is about $10^{42}$ times stronger than their gravity.'
next:
  q: 'If gravity weakens with distance, do you weigh less on top of a mountain? And what happens to your weight if you go down a deep mine: does it grow, or shrink?'
  leaf: 'phy/variation-of-g'
  name: 'Variation of g'
---

:::hook
q: So what's your guess? Is the Moon falling towards us right now?
options: ["No, its speed holds it up", "Yes, every second, by about 1.4 mm", "No, gravity can't reach that far"]
answer: 1
right: Right, and that is Newton's great insight. Without gravity the Moon would fly off in a straight line; gravity bends that line by about 1.4 mm each second, just enough to keep it on its circle. It falls and keeps missing.
wrong: Picture the Moon with gravity switched off: it would go straight, leaving the Earth behind. Its actual path curves towards us. Curving towards something is falling towards it.
:::

## The question Newton asked {lvl=1 id=s-question label="Class 9"}

Throw a ball and it curves back to the ground. Throw it harder and it lands farther away. Now imagine a giant cannon on a mountain top, firing faster and faster. At some speed the ball curves down at exactly the rate the round Earth curves away beneath it. It keeps falling, and never lands. It is in orbit.

That thought experiment is Newton's, and it carries the whole idea. **The Moon is a thrown ball that never lands.** The force that pulls the apple down from the tree is the same force that bends the Moon's path. Before Newton, people treated the heavens and the Earth as two different worlds with different rules. He bet they were one world.

How would you test the bet? The Moon is 60 times farther from the Earth's centre than the apple is. If gravity weakens as $1/r^2$, the Moon should fall $60^2 = 3600$ times more slowly than the apple. The apple falls 4.9 m in its first second; the Moon should fall $4.9/3600 \approx 1.4$ mm. From the Moon's speed and orbit, Newton worked out how much it actually falls each second: about 1.4 mm. The bet paid off.

:::qc lvl=1
q: A satellite orbits at twice the distance from the Earth's centre that another does. How does the pull on it compare (same mass)?
options: ["Half", "A quarter", "The same"]
answer: 1
right: Right. Twice the distance, 2² = 4 times weaker.
wrong: The force goes as 1/r². What is 1/2²?
:::

## The law in one line {lvl=1 id=s-law label="Class 9"}

Every two bodies pull on each other. The pull grows with each mass and fades with the square of the distance between their centres:

$$F = \frac{G\,m_1 m_2}{r^2},\qquad G = 6.67 \times 10^{-11}\ \text{N m}^2\,\text{kg}^{-2}.$$

Read it as a sentence, not a formula. "Twice the mass, twice the pull. Twice the distance, a quarter of the pull." The letters are just a short way of writing that sentence. $G$ is simply the number that turns kilograms and metres into newtons, and it is astonishingly small: two 1 kg balls 1 m apart pull each other with less than a ten-billionth of a newton. That is why you never notice the pull between you and the person next to you, but you always notice the pull of the whole Earth.

It is also **mutual**. The apple pulls the Earth up exactly as hard as the Earth pulls the apple down (Newton's third law). The Earth just has $10^{24}$ times more inertia, so its movement is far too small to see.

## Why everything falls together {lvl=1 id=s-same label="Class 9"}

Galileo found that a heavy ball and a light ball, dropped together, land together (when air does not interfere). The law explains why. A body of mass $m$ at the Earth's surface feels

$$F = \frac{GMm}{R^2}.$$

But that same $m$ also measures how hard the body is to accelerate: $a = F/m$. The $m$ cancels:

$$a = g = \frac{GM}{R^2} \approx 9.8\ \text{m/s}^2,$$

the same for a feather and a cannonball. The heavier body is pulled harder, and it resists harder, by exactly the same factor. On the Moon, astronaut David Scott dropped a hammer and a feather together in 1971; with no air, they landed at the same instant.

:::worked title="Weighing the Earth"
Once Cavendish measured $G$, the Earth could be "weighed" from a falling stone: $M = gR^2/G = 9.8 \times (6.37\times10^6)^2/6.67\times10^{-11} \approx 6.0 \times 10^{24}$ kg.
:::

## Pulls add up {lvl=2 id=s-superposition label="Class 11"}

With more than two bodies, each pair obeys the law independently, and the forces on any one body add as **vectors**. This is superposition. A spacecraft between the Earth and the Moon feels the Earth's pull one way and the Moon's the other; at about 90% of the way to the Moon they balance.

In vector form, the force on mass $m_2$ due to $m_1$ is $\vec F = -\dfrac{Gm_1m_2}{r^2}\hat r$, where $\hat r$ points from $m_1$ to $m_2$; the minus sign says "towards $m_1$".

## Why a planet acts like a point {lvl=3 id=s-shell label="JEE"}

The law is for points, yet we used the Earth's centre as if all its mass sat there. Newton spent years proving this is allowed. A thin uniform **spherical shell**:

- pulls a body **outside** it exactly as if all the shell's mass were at its centre;
- pulls a body **inside** it with **zero** net force: the near part is closer but smaller, the far part farther but bigger, and they cancel exactly because of the $1/r^2$.

A solid planet is a nest of shells, so outside it behaves like a point mass. Inside, only the shells beneath you pull, which is the key to the next lesson's question about deep mines.

## Gauss's law for gravity {lvl=4 id=s-gauss label="Olympiad"}

Define the gravitational field $\vec g = \vec F/m$. Because it spreads from mass exactly as $1/r^2$, the "flux" of $\vec g$ out of any closed surface depends only on the mass inside:

$$\oint \vec g\cdot d\vec A = -4\pi G\,M_{\text{inside}}.$$

This is word for word Gauss's law of electrostatics with $1/\varepsilon_0 \to -4\pi G$ and charge → mass. The shell theorem drops out in two lines: inside a shell there is no mass, so no field. It is also why the two laws (and anything else that spreads evenly from a point in 3-D space) have the same inverse-square shape: the area of a sphere grows as $r^2$.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The Moon is falling towards the Earth all the time; its sideways speed makes it keep missing. {lvl=1}
2. $F = Gm_1m_2/r^2$: twice the distance, a quarter of the force. {lvl=1}
3. All bodies fall with the same acceleration $g = GM/R^2$, because mass both feels the pull and resists it. {lvl=1}
4. Forces from several bodies add as vectors. {lvl=2}
5. A uniform shell acts as a point outside and exerts no force inside. {lvl=3}
6. Gravity and the electric force have the same inverse-square shape and the same Gauss's law. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Measure $r$ between centres: a satellite 300 km up is at $r = 6670$ km, not 300 km. {lvl=1}
- "Weightless" astronauts are not beyond gravity; they are falling freely with their spacecraft. {lvl=1}
- Gravity is never shielded or cancelled by putting matter in between. {lvl=2}
- Inside a solid planet, only the mass at smaller radius pulls you. {lvl=3}
:::
