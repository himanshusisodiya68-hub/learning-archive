---
title: Laws of reflection
summary: 'Why your reflection sits exactly as far behind the mirror as you stand in front, and why light takes the shortest route.'
ncert: ["Class 7 Curiosity · Ch 11 Light: Shadows and Reflections", "Class 8 Curiosity · Ch 10 Light: Mirrors and Lenses", "Class 10 Science · Ch 9 Light – Reflection and Refraction (§9.1)", "Class 12 Physics · Ch 9 Ray Optics"]
up_to: Olympiad
builds_on: [Rectilinear propagation, Angles and parallel lines]
notes_prompt: Explain why your image in a plane mirror seems to swap left and right but never up and down.
margin:
  - kind: history
    title: History
    text: Heron of Alexandria (1st century CE) showed that light reflecting off a mirror takes the shortest possible path between two points. It was the first "least principle" in physics.
  - kind: tip
    title: Board favourite
    text: "Angles are measured from the normal, not from the mirror. A ray at 30° to the mirror has an angle of incidence of 60°."
  - kind: olympiad
    title: Olympiad link
    text: A corner reflector of three perpendicular mirrors sends any ray straight back. Astronauts left such reflectors on the Moon for laser ranging.
books:
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 18 Geometrical Optics" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 5 · 5.1 Photometry and geometrical optics" }
  - { title: "The Feynman Lectures on Physics Vol. I", ref: "Ch. 26 Optics: The Principle of Least Time" }
cards:
  - { front: "State the two laws of reflection.", back: "1) The angle of incidence equals the angle of reflection, both measured from the normal. 2) The incident ray, the reflected ray and the normal lie in one plane." }
  - { front: "Describe the image formed by a plane mirror.", back: "Virtual and erect, the same size as the object, as far behind the mirror as the object is in front, and laterally inverted." }
  - { front: "A plane mirror turns through an angle $\\theta$ while the incident ray stays fixed. How far does the reflected ray turn?", back: "Through $2\\theta$." }
  - { front: "Minimum length of a plane mirror in which you can see your whole height $H$?", back: "$H/2$, whatever your distance from the mirror." }
core:
  idea: 'At a smooth surface the angle of reflection equals the angle of incidence, both measured from the normal, and the incident ray, reflected ray and normal lie in one plane. A plane mirror therefore forms a virtual, erect, same-size image as far behind it as the object is in front.'
  formulas:
    - tex: 'i = r'
      label: 'Law of reflection (angles from the normal)'
    - tex: '\hat{\mathbf{r}} = \hat{\mathbf{i}} - 2(\hat{\mathbf{i}}\cdot\hat{\mathbf{n}})\,\hat{\mathbf{n}}'
      label: 'Vector form of the law'
    - tex: '\delta = 360^\circ - 2\theta'
      label: 'Total deviation after one reflection from each of two mirrors inclined at $\theta$'
  conditions:
    - 'The surface is smooth on the scale of the wavelength (regular reflection); a rough surface scatters but still obeys the law patch by patch'
    - 'At a curved surface the law applies at each point, using the local normal'
    - 'In a plane mirror the image is the point from which the reflected rays appear to diverge when traced backwards'
  sign: 'Angles are measured from the normal, not from the mirror: a ray at 30° to the mirror has $i = 60^\circ$.'
outcomes:
  - 'State the two laws of reflection and measure angles from the normal'
  - 'Describe the image in a plane mirror and locate it, including lateral inversion'
  - 'Find the minimum mirror height needed to see a full-length image'
  - 'Solve problems on rotating mirrors, inclined mirrors and the number of images'
  - 'Use the vector form of reflection, and Heron''s shortest-path argument, for corner reflectors and moving mirrors'
opener:
  story: |
    Hold up your right hand in front of a mirror. The person in the mirror holds up what looks like their left hand. So a mirror swaps left and right. Everybody says so.

    But then why doesn't it swap up and down? Your head is still at the top of your reflection, your feet at the bottom. The mirror has no idea which of your sides is the left one, and no idea which way is up. It treats both exactly alike.

    So the mirror is doing something to you, but it is not what we say it is doing. There is one direction it truly reverses, and it is neither of these.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A person and their mirror image face each other across a mirror, equally far away"><line x1="160" y1="30" x2="160" y2="205" style="stroke:var(--ink);stroke-width:3"/><circle cx="90" cy="90" r="14" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><path d="M104 88 L112 92 L104 96Z" style="fill:var(--ink)"/><path d="M90 104 L90 160 M90 160 L78 200 M90 160 L102 200 M90 115 L66 95 M90 115 L108 140" style="fill:none;stroke:var(--c);stroke-width:3;stroke-linecap:round"/><circle cx="230" cy="90" r="14" style="fill:var(--surface);stroke:var(--chem);stroke-width:1.5;stroke-dasharray:4 3"/><path d="M216 88 L208 92 L216 96Z" style="fill:var(--chem)"/><path d="M230 104 L230 160 M230 160 L242 200 M230 160 L218 200 M230 115 L254 95 M230 115 L212 140" style="fill:none;stroke:var(--chem);stroke-width:3;stroke-linecap:round;stroke-dasharray:4 4"/><line x1="90" y1="214" x2="230" y2="214" style="stroke:var(--muted);stroke-dasharray:2 4"/><text x="76" y="62" style="font-size:11px;fill:var(--muted)">you</text><text x="206" y="62" style="font-size:11px;fill:var(--muted)">your image</text><text x="136" y="24" style="font-size:11px;fill:var(--muted)">mirror</text><text x="94" y="232" style="font-size:11px;fill:var(--muted)">same distance each side</text></svg>'
life:
  - 'The word AMBULANCE is painted backwards on the front of the vehicle so drivers ahead read it correctly in their rear-view mirror.'
  - 'A bathroom mirror only needs to be half your height for you to see your whole self, however far you stand.'
  - 'A barber holds a second mirror behind your head so you can see the back of it: two reflections in a row.'
  - 'Bicycle and road-sign reflectors glow back at a car''s headlights because they send light straight back where it came from.'
  - 'A calm lake at sunrise gives a perfect copy of the hills; ripples break the copy because each patch of water tilts the normal a different way.'
models:
  - name: 'Reflect the problem'
    text: 'Instead of tracing a bouncing path, remove the mirror and put a copy of the target behind it, and the bounce becomes a straight line. Mirroring a hard problem into an easy one is a trick that works far beyond optics.'
  - name: 'Nature takes the shortest route'
    text: 'Light gets from A to B by the quickest path available. When many options exist, ask what is being minimised (time, cost, effort); it often predicts the choice.'
  - name: 'Name what really changed'
    text: 'The mirror seems to swap left and right but only reverses front and back. When something looks like a paradox, ask which single thing actually changed, and you often find it was mislabelled.'
links:
  - leaf: 'phy/huygens-principle'
    name: 'Huygens'' principle'
    same: 'Reflection also drops out of wavefronts: every point on the surface sends a little wavelet, and the reflected front is their envelope, with the equal-angle law as a result.'
    differs: 'The ray picture follows one line and cannot show spreading or interference; the wave picture can, but is harder to draw.'
  - leaf: 'phy/sound-as-a-wave'
    name: 'Sound as a wave'
    same: 'An echo is reflection: sound bounces off a cliff or hall wall at equal angles, just as light does off a mirror.'
    differs: 'A surface is smooth or rough compared with the wavelength. Sound waves are about a million times longer than light waves, so a brick wall that scatters light reflects sound almost like a mirror.'
next:
  q: 'A flat mirror gives a perfect same-size copy of you. But a steel spoon gives a tiny upside-down face on one side and a smaller upright one on the other. What changes when the mirror curves?'
  leaf: 'phy/spherical-mirrors'
  name: 'Spherical mirrors'
---

:::hook
q: So what's your guess? Which direction does a mirror really reverse?
options: ["Left and right", "Up and down", "Front and back"]
answer: 2
right: Right. A mirror flips only the direction that points into it. Your image faces you, so its right hand ends up on your left, exactly as it would if a twin stood facing you. The left-right swap is a side effect of that single front-back flip, and the lesson below shows why.
wrong: Test it. Step towards the mirror and your image steps towards you, so front and back have swapped. Up stays up, and left and right on the glass stay put. Only one direction is reversed, and it is the one pointing into the mirror.
:::

## The two laws {lvl=1 id=s-laws}

Light travels in straight lines until it meets a surface. At a smooth, shiny surface it bounces back in a predictable direction. Draw the **normal**, the line perpendicular to the surface at the point where the ray strikes. Then:

1. **The angle of incidence equals the angle of reflection**, $i = r$, both measured from the normal.
2. **The incident ray, the reflected ray and the normal all lie in one plane.**

These laws hold for every reflecting surface, flat or curved. At a curved mirror, the normal at each point is the line to the centre of curvature, and the same two laws apply point by point.

:::figure caption="The normal is drawn at the point of incidence; i and r are measured from it."
<svg viewBox="0 0 360 200" role="img" aria-label="Law of reflection: incident and reflected rays make equal angles with the normal">
<rect class="m2" x="40" y="150" width="280" height="14"/><line class="ln" x1="40" y1="150" x2="320" y2="150"/>
<line class="faint" x1="180" y1="30" x2="180" y2="150"/>
<line class="ray" x1="80" y1="50" x2="180" y2="150"/><line class="ray" x1="180" y1="150" x2="280" y2="50"/>
<path class="gr" d="M180 110 A40 40 0 0 0 151.7 121.7"/><path class="gr" d="M180 110 A40 40 0 0 1 208.3 121.7"/>
<text class="k" x="158" y="104">i</text><text class="k" x="196" y="104">r</text>
<text x="184" y="26">normal</text><text x="42" y="182">mirror</text><text x="64" y="44">incident ray</text><text x="232" y="44">reflected ray</text>
</svg>
:::

**Regular and diffuse reflection.** A mirror is smooth on the scale of the light's wavelength, so parallel rays stay parallel after reflecting and you see a clear image. Paper is rough at that scale: each tiny patch has its own normal, parallel rays scatter in all directions, and you see the paper itself rather than an image. Both obey the same laws; only the surface differs.

:::qc
q: A ray strikes a plane mirror making an angle of 35° with the mirror surface. What is the angle of reflection?
options: ["35°", "55°", "70°"]
answer: 1
right: Right. The angle with the normal is 90° − 35° = 55°, and the angle of reflection equals it.
wrong: Angles are measured from the normal. The ray makes 90° − 35° with the normal.
:::

## Images in a plane mirror {lvl=1 id=s-plane}

Every ray from a point on an object reflects according to the law. Traced backwards, the reflected rays all seem to come from a single point behind the mirror. That point is the **image**. No light actually passes through it, so it is a **virtual** image: it cannot be caught on a screen.

:::figure caption="Reflected rays reaching the eye seem to come from the image, as far behind the mirror as the object is in front."
<svg viewBox="0 0 360 200" role="img" aria-label="Plane mirror image formation">
<line class="ln" x1="200" y1="20" x2="200" y2="185" style="stroke-width:2.2"/>
<line class="gr" x1="200" y1="30" x2="210" y2="22"/><line class="gr" x1="200" y1="60" x2="210" y2="52"/><line class="gr" x1="200" y1="90" x2="210" y2="82"/><line class="gr" x1="200" y1="120" x2="210" y2="112"/><line class="gr" x1="200" y1="150" x2="210" y2="142"/><line class="gr" x1="200" y1="180" x2="210" y2="172"/>
<line class="pen" x1="120" y1="140" x2="120" y2="60" style="stroke-width:3"/><path class="pen" d="M114 70L120 60L126 70" style="stroke-width:3;fill:none"/>
<line class="pen" x1="280" y1="140" x2="280" y2="60" style="stroke-width:3;opacity:.4;stroke-dasharray:5 4"/>
<line class="ray" x1="120" y1="60" x2="200" y2="96.4"/><line class="ray" x1="200" y1="96.4" x2="60" y2="160"/>
<line class="faint" x1="200" y1="96.4" x2="280" y2="60"/><line class="faint" x1="150" y1="96.4" x2="250" y2="96.4"/>
<ellipse class="eye" cx="54" cy="163" rx="8" ry="4"/>
<line class="faint" x1="120" y1="150" x2="280" y2="150"/><text x="150" y="166">d</text><text x="236" y="166">d</text>
<text x="92" y="52">object</text><text x="262" y="52">image</text>
</svg>
:::

The image in a plane mirror is

- **virtual and erect**,
- **the same size** as the object (magnification $m = +1$),
- **as far behind the mirror** as the object is in front,
- **laterally inverted**: your right hand appears as the image's left hand.

Lateral inversion is really a front–back reversal. The mirror reverses only the direction perpendicular to itself; up stays up and left stays on the left of the picture. Your image is facing you, so its "right" is on your left. That is why the word AMBULANCE is painted mirror-reversed on the front of ambulances: drivers ahead read it correctly in their rear-view mirrors.

:::qc
q: You walk towards a plane mirror at 1.5 m/s. How fast does your image approach you?
options: ["1.5 m/s", "3 m/s", "0.75 m/s"]
answer: 1
right: Right. The image approaches the mirror at 1.5 m/s from the other side, so relative to you it closes at 3 m/s.
wrong: The image moves towards the mirror at the same speed as you, from the other side. Add the two.
:::

## How tall must a mirror be? {lvl=2 id=s-height label="Class 12"}

To see your feet, light from your feet must reflect into your eyes. The reflection point sits halfway, in height, between your eyes and your feet, because the mirror is midway between you and your image. The same holds for the top of your head. So the mirror needs to span only from halfway between eyes and feet to halfway between eyes and the top of your head:

$$L_{\min} = \tfrac12 (h_{\text{eye}} + (H - h_{\text{eye}})) = \frac{H}{2}$$

The distance from the mirror never appears: stepping back does not let you see more of yourself in a small mirror, a common surprise.

## Why the law holds: the shortest path {lvl=2 id=s-heron label="Class 12"}

Light from A reaches B by bouncing off a mirror. Of all possible bounce points, which one does light choose? Reflect B in the mirror to get its image B′. Any path A → mirror → B has the same length as A → mirror → B′, because the mirror is the perpendicular bisector of BB′. The shortest route from A to B′ is a straight line, and a straight line crosses the mirror at exactly the point where $i = r$.

:::figure caption="Heron's trick: the path to B has the same length as the path to its image B′. The straight line to B′ gives the shortest route and equal angles."
<svg viewBox="0 0 360 200" role="img" aria-label="Shortest path reflection via image point">
<line class="ln" x1="20" y1="110" x2="340" y2="110" style="stroke-width:2"/>
<circle class="obj" cx="80" cy="40" r="5"/><circle class="obj" cx="280" cy="60" r="5"/><circle class="ghost" cx="280" cy="160" r="5"/>
<line class="ray" x1="80" y1="40" x2="196.7" y2="110"/><line class="ray" x1="196.7" y1="110" x2="280" y2="60"/>
<line class="faint" x1="196.7" y1="110" x2="280" y2="160"/><line class="faint" x1="280" y1="60" x2="280" y2="160"/>
<line class="gr" x1="80" y1="40" x2="140" y2="110" style="stroke-dasharray:2 3"/><line class="gr" x1="140" y1="110" x2="280" y2="60" style="stroke-dasharray:2 3"/>
<text class="k" x="66" y="34">A</text><text class="k" x="290" y="58">B</text><text class="k" x="290" y="166">B′</text>
<text x="100" y="128">a longer path (dotted)</text>
</svg>
:::

This is the first "least principle" in physics. Fermat later extended it to refraction: light takes the path of least, or more precisely stationary, travel time. The refraction lesson develops that idea.

## Rotating mirrors and inclined pairs {lvl=3 id=s-rotate label="JEE"}

**Rotating a mirror.** Keep the incident ray fixed and turn the mirror by $\theta$. The normal turns by $\theta$, so the angle of incidence changes by $\theta$ and so does the angle of reflection. The reflected ray therefore turns by $2\theta$. This doubling made the optical lever possible: a tiny mirror on a galvanometer coil turns a small rotation into a large movement of a light spot on a scale.

**Two mirrors at an angle $\theta$.** A ray reflecting once from each mirror turns through a total angle

$$\delta = 360^\circ - 2\theta,$$

independent of the angle at which it first arrives. With $\theta = 90^\circ$ the ray is sent straight back, parallel to itself.

**Number of images** of an object placed between two mirrors at angle $\theta$: when $360^\circ/\theta$ is an even integer, there are $n = 360^\circ/\theta - 1$ images wherever the object is. When $360^\circ/\theta$ is odd, the count is $360^\circ/\theta - 1$ for an object on the bisector and $360^\circ/\theta$ otherwise. Two parallel mirrors ($\theta \to 0$) give an endless row of images.

:::worked title="Worked example: deviation by two mirrors"
Two plane mirrors meet at 60°. A ray reflects once from each. Find the total deviation.

The formula gives $\delta = 360^\circ - 2(60^\circ) = 240^\circ$. Equivalently, the ray ends up turned $120^\circ$ the other way, since $240^\circ$ and $120^\circ$ describe the same final direction measured in opposite senses.
:::

:::qc lvl=3
q: Two mirrors are inclined at 90°, and an object sits between them. How many images do you see?
options: ["2", "3", "4"]
answer: 1
right: Right. 360°/90° = 4 is even, so n = 4 − 1 = 3.
wrong: Use n = 360°/θ − 1 when 360°/θ is even.
:::

## Moving mirrors {lvl=3 id=s-moving label="JEE"}

Take the mirror as a coordinate plane. The image is the object's reflection, so in the direction perpendicular to the mirror the image coordinate is the negative of the object's, while along the mirror it is the same. Differentiate:

- object velocity along the mirror → the image moves the same way, at the same speed;
- object velocity perpendicular to the mirror → the image moves the opposite way;
- a mirror moving perpendicular to itself at speed $v$ moves a stationary object's image at $2v$.

## Reflection as a vector rule {lvl=3 id=s-vector label="Irodov"}

Let $\hat{\mathbf{i}}$ be the unit vector along the incident ray and $\hat{\mathbf{n}}$ the unit normal. Reflection flips the part of $\hat{\mathbf{i}}$ along the normal and keeps the rest:

$$\hat{\mathbf{r}} = \hat{\mathbf{i}} - 2(\hat{\mathbf{i}}\cdot\hat{\mathbf{n}})\,\hat{\mathbf{n}}$$

Both laws are inside this one line: the dot product fixes equal angles, and $\hat{\mathbf{r}}$ is built from $\hat{\mathbf{i}}$ and $\hat{\mathbf{n}}$ alone, so it lies in their plane.

**Corner reflector.** Three mutually perpendicular mirrors along the $x$, $y$ and $z$ planes each flip one component of the direction. A ray that strikes all three leaves with every component reversed: $(a, b, c) \to (-a, -b, -c)$, straight back towards its source, whatever its direction. Bicycle reflectors, road signs and the reflectors left on the Moon by Apollo astronauts use this.

## A spot sweeping a wall {lvl=4 id=s-sweep label="Olympiad"}

A mirror rotates steadily at angular speed $\omega$, reflecting a fixed beam onto a wall a perpendicular distance $d$ away. The reflected beam turns at $2\omega$. When the beam makes angle $\phi$ with the perpendicular to the wall, the spot is at $x = d\tan\phi$, so its speed is

$$v = \frac{dx}{dt} = d\sec^2\phi \cdot 2\omega.$$

At the foot of the perpendicular, $v = 2\omega d$, and it grows without limit as the beam swings towards the wall's plane. Nothing physical travels along the wall, so the spot may even move faster than light without breaking relativity. Foucault used a rotating mirror in 1862 to measure the speed of light this way.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. $i = r$, measured from the normal, and the incident ray, reflected ray and normal lie in one plane.
2. A plane mirror forms a virtual, erect, same-size image, as far behind the mirror as the object is in front.
3. Lateral inversion is a front–back reversal.
4. Seeing your full height needs a mirror half your height. {lvl=2}
5. Turning a mirror by $\theta$ turns the reflected ray by $2\theta$. {lvl=3}
6. Vector form: $\hat{\mathbf{r}} = \hat{\mathbf{i}} - 2(\hat{\mathbf{i}}\cdot\hat{\mathbf{n}})\hat{\mathbf{n}}$. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Angles of incidence and reflection are measured from the normal. Subtract from 90° if a problem gives the angle with the mirror.
- The image is behind the mirror; distances between you and your image are twice your distance from the mirror.
- For the number of images, check whether $360^\circ/\theta$ is even or odd before using a formula. {lvl=3}
- For moving mirrors, split velocities into parts along and perpendicular to the mirror. {lvl=3}
:::
