---
title: Motion graphs
summary: 'How to read a whole journey from one wiggly line: the slope tells you how fast, the area tells you how far.'
ncert: ["Class 9 Science (Exploration) · Ch 4 Describing Motion Around Us (§4.2 Graphical representation of motion)", "Class 11 Physics · Ch 2 Motion in a Straight Line (§2.2–2.4)"]
up_to: Olympiad
builds_on: [Speed, velocity, acceleration, Equations of motion]
notes_prompt: Explain to a friend how you can tell, from a position-time graph alone, whether a car is speeding up, slowing down or reversing, and why the area under a velocity-time graph is the distance.
margin:
  - kind: history
    title: History
    text: "The idea of drawing a quantity against time and reading distance from the area under a speed line is usually credited to Nicole Oresme in the 14th century. Galileo used the same triangle-area argument in 1638 to prove that a falling stone covers distance in the ratio 1 : 3 : 5 : 7 [Unverified dates]."
  - kind: tip
    title: Exam habit
    text: "Before you read any graph, say out loud what is on each axis. A crossing on an x–t graph means same place; a crossing on a v–t graph means same speed. Mixing these up is the commonest lost mark."
  - kind: olympiad
    title: Olympiad link
    text: "Fastest trip between two stops with limited acceleration and braking: draw the v–t graph as a triangle and the answer falls out of its area, with no calculus. The same trick gives the best train timetable."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 8 Motion (feynmanlectures.caltech.edu)" }
  - { title: "NCERT Physics Class XI Part 1", ref: "Ch 2 Motion in a Straight Line, §2.2–2.4" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "chapter Motion Along a Straight Line [Unverified]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch 3 Rest and Motion: Kinematics [Unverified chapter number]" }
cards:
  - { front: "What does the slope of a position-time graph give?", back: "The velocity. Steeper means faster; flat means at rest; downhill means moving in the negative direction." }
  - { front: "What does the area under a velocity-time graph give?", back: "The displacement. Area above the time axis counts forwards, area below counts backwards, so distance travelled is the sum of the sizes of both." }
  - { front: "What does the slope of a velocity-time graph give?", back: "The acceleration. For uniform acceleration the line is straight and the x–t graph is a parabola." }
  - { front: "Two lines cross on an x–t graph. What does it mean?", back: "Same place at the same time (a meeting or an overtaking). Not the same speed: the slopes differ." }
  - { front: "Two lines cross on a v–t graph. What does it mean?", back: "Same speed at that moment, not the same position. When one car is catching the other, this is when the gap is largest." }
  - { front: "Area under an acceleration-time graph?", back: "The change in velocity, $\\Delta v$, with the same sign rule as other areas." }
core:
  idea: 'A graph turns a journey into a picture. On a position–time graph the slope is the velocity; on a velocity–time graph the slope is the acceleration and the area is the displacement; on an acceleration–time graph the area is the change in velocity. Slope reads the next quantity down the chain, area adds up the previous one.'
  formulas:
    - tex: 'v = \dfrac{dx}{dt},\qquad a = \dfrac{dv}{dt}'
      label: 'Slope: x–t gives v, v–t gives a'
    - tex: '\Delta x = \displaystyle\int v\,dt,\qquad \Delta v = \displaystyle\int a\,dt'
      label: 'Area: v–t gives displacement, a–t gives change in velocity'
    - tex: 'x = x_0 + ut + \tfrac12 a t^2,\qquad v = u + at'
      label: 'Constant acceleration, read off the trapezium'
  conditions:
    - 'Motion along a straight line, with one direction chosen as positive'
    - 'Areas are signed: parts below the time axis count as negative displacement'
    - 'A straight v–t line and a parabolic x–t curve need constant acceleration'
  sign: 'Area under v–t is displacement, not distance: add the sizes of the areas above and below the axis for distance. A positive acceleration does not mean speeding up.'
outcomes:
  - 'Read velocity, rest and direction of motion off a position-time graph'
  - 'Find distance and displacement from the area under a velocity-time graph'
  - 'Turn one kind of graph into the other two, for constant and varying acceleration'
  - 'Solve overtaking and meeting problems with graphs, including the moment of largest gap'
  - 'Use a = v dv/dx and the triangle trick for quickest-trip problems'
opener:
  story: |
    You are on the platform in Pune, watching two trains on a screen that plots how far each is from Mumbai as time passes. The fast Shatabdi is a steep straight line. A slow local is a gentler straight line. Halfway through, the two lines **cross**.

    Quick: what just happened? Most people say "they were going the same speed at that moment". It sounds right. The lines meet, so they must be equal at that point.

    Equal in *what*, exactly? That one word decides everything. Learn to read graphs and you can look at a squiggle, never see the train, and still tell who is faster, who is slowing down and who just turned back.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two position-time lines crossing: the steep one is the fast train, the gentle one the slow train"><line x1="40" y1="200" x2="300" y2="200" style="stroke:var(--ink);stroke-width:1.6"/><line x1="40" y1="200" x2="40" y2="30" style="stroke:var(--ink);stroke-width:1.6"/><path d="M40 190 L280 50" style="fill:none;stroke:var(--c);stroke-width:2.6"/><path d="M40 90 L280 170" style="fill:none;stroke:var(--chem);stroke-width:2.6"/><line x1="145" y1="200" x2="145" y2="130" style="stroke:var(--muted);stroke-dasharray:4 4"/><line x1="40" y1="130" x2="145" y2="130" style="stroke:var(--muted);stroke-dasharray:4 4"/><circle cx="145" cy="130" r="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="152" y="180" style="font-size:11px;fill:var(--ink)">they cross</text><text x="166" y="66" style="font-size:11px;fill:var(--c)">fast train</text><text x="196" y="134" style="font-size:11px;fill:var(--chem)">slow local</text><text x="244" y="218" style="font-size:11px;fill:var(--muted)">time</text><text x="46" y="42" style="font-size:11px;fill:var(--muted)">distance from start</text><text x="110" y="232" style="font-size:11px;fill:var(--muted)">same place, same moment</text></svg>'
symbols:
  - s: 'x'
    means: 'position: where the object is along the line, measured from a chosen zero (metres, m)'
  - s: 't'
    means: 'time since we started the clock (seconds, s)'
  - s: 'v'
    means: 'velocity: how fast the position changes, with a sign for direction (m/s)'
  - s: 'a'
    means: 'acceleration: how fast the velocity changes (m/s²)'
  - s: 'u'
    means: 'starting velocity at t = 0 (m/s)'
  - s: '\Delta x'
    means: 'displacement: change in position, with sign (m)'
  - s: '\Delta v'
    means: 'change in velocity (m/s)'
  - s: '\dfrac{dx}{dt}'
    means: 'slope of the position-time curve at one instant (m/s)'
life:
  - 'The trip log on a cab or fitness-band app is exactly a position-time graph; the flat bits are your stops, and a steeper stretch means you were rushing.'
  - 'A metro timetable draws every train as a sloping line on a distance-time chart; where two lines cross, two trains meet, so planners keep them on different tracks or platforms.'
  - 'The speedometer history of a cricket bowler, or the speed trace from a Formula 1 lap, is a velocity-time graph; the area under it is the length of the track.'
  - 'A stock chart, a monthly rainfall chart and a growth chart for a child all follow the same rule: the steepness is the rate of change, and the total so far is the area built up.'
models:
  - name: 'Slope is the rate, area is the total'
    text: 'Income per month is a rate and your savings are the area under it; the budget deficit is a rate and the national debt is the area under it. Whenever one number is the "how fast" of another, one is a slope and the other an area.'
  - name: 'Say what the axes mean before you read'
    text: 'The same two crossing lines mean "same place" on a position graph and "same speed" on a speed graph. In news charts and business reports the axes decide the story; read the labels first.'
  - name: 'The biggest gap is when the speeds match'
    text: 'The gap between a chaser and the leader stops growing exactly when their speeds become equal. The same logic finds the best moment to catch a falling market, a rival, or a delivery truck.'
links:
  - leaf: 'phy/equations-of-motion'
    name: 'Equations of motion'
    same: 'The three equations are just the trapezium under a straight v–t line, read three ways. Memorise the picture and you can rebuild the algebra in ten seconds.'
    differs: 'The equations give numbers at one instant for constant acceleration only; a graph also handles acceleration that changes.'
  - leaf: 'phy/work-done-by-a-force'
    name: 'Work done by a force'
    same: 'Work is the area under a force–displacement graph, the same "area adds up the rate" move, with force playing the role of speed.'
    differs: 'The area now gives energy delivered, not distance covered, and a below-axis area means energy taken away.'
next:
  q: 'These graphs only handle motion forwards and backwards along one line. What if a ball moves up and sideways at the same time: how do you describe that, and why is a plain number no longer enough?'
  leaf: 'phy/vectors-in-motion'
  name: 'Vectors in motion'
---

:::hook
q: So here's the puzzle. Two lines cross on a graph of position against time. What is the one thing you can say for certain?
options: ["The two travellers are moving at the same speed", "The two travellers are at the same place at that moment", "The two travellers have gone the same total distance"]
answer: 1
right: Right. Position is what is on the vertical axis, so the crossing point means equal position at the same time: a meeting or an overtaking. Their speeds are the slopes, and at the crossing the slopes are different, which is exactly why one line goes through the other.
wrong: Read the vertical axis: it is position, not speed and not distance covered. Two lines meeting there share a position at one moment. If the slopes were equal the lines would be parallel and would never meet.
:::

## A journey drawn as a line {lvl=1 id=s-xt label="Class 9"}

Take a bus from town A. In the first hour it covers 60 km. Then it waits half an hour at a dhaba. Then it drives back and is home again one hour later. How do you draw that?

Put **time** along the bottom and **position** (how far from home) up the side. Each moment of the trip becomes one dot, and the dots join into a line. That picture is a **position–time graph**, also written $x$–$t$.

:::figure caption="The bus trip as a position-time graph. Steep up means moving away fast; flat means stopped; steep down means coming home."
<svg viewBox="0 0 360 215" role="img" aria-label="Position-time graph of a bus that goes out, stops and returns">
<line class="ln" x1="40" y1="180" x2="330" y2="180"/><line class="ln" x1="40" y1="180" x2="40" y2="20"/>
<path class="ray" d="M40 180 L140 90 L190 90 L290 180"/>
<line class="faint" x1="40" y1="90" x2="140" y2="90"/><line class="faint" x1="140" y1="90" x2="140" y2="180"/>
<circle class="obj" cx="140" cy="90" r="3.5"/><circle class="obj" cx="190" cy="90" r="3.5"/>
<text x="46" y="32">position (km)</text><text x="296" y="210">time (h)</text><text x="12" y="94">60</text><text x="136" y="196">1</text><text x="186" y="196">1.5</text><text x="286" y="196">2.5</text>
<text class="k" x="48" y="106">out:</text><text class="k" x="48" y="118">+60 km/h</text><text class="k" x="150" y="80">stopped</text><text class="k" x="236" y="130">back: −60 km/h</text>
</svg>
:::

The secret is the steepness, the **slope**. In the first hour the bus moves 60 km in 1 h, so its velocity is 60 km/h and the line climbs 60 for every 1 across. When the line is flat, the position is not changing, so the velocity is zero. On the way back the line slopes down: the position is shrinking, which is a negative velocity. The sign is the direction.

So the rule is: **slope of the position–time graph is the velocity.** Steeper means faster. A line that is not straight means the speed is changing; the slope at one instant is the velocity at that instant.

Notice what the graph is *not*: it is not the road. A bus climbing steeply on the graph is not climbing a hill; it is only moving fast.

:::qc lvl=1
q: A cyclist's x–t graph is a straight line sloping up from (0 s, 0 m) to (20 s, 100 m). What is her velocity?
options: ["5 m/s", "20 m/s", "2000 m/s"]
answer: 0
right: Right. Slope = rise over run = 100 m / 20 s = 5 m/s.
wrong: Slope is how much the position rises for each second that passes: 100 m in 20 s.
:::

## Speed against time, and the area trick {lvl=1 id=s-vt label="Class 9"}

Now draw the speed itself against time. This is a **velocity–time graph**, $v$–$t$. A metro leaving a station speeds up for 10 s until it reaches 20 m/s, cruises at that speed for 30 s, then brakes to a stop in 10 s.

How far has it gone? Start with the easy part, the cruise. Speed 20 m/s for 30 s gives $20 \times 30 = 600$ m. On the graph, that is a rectangle of height 20 and width 30, and its **area** is 600. Distance is speed times time, and area is height times width. They are the same arithmetic.

The speeding-up part is a triangle: its speed grows steadily from 0 to 20, so the average speed is 10 m/s, and in 10 s the metro covers 100 m. The area of the triangle is $\tfrac12 \times 10 \times 20 = 100$. Same answer again, and the braking part gives another 100 m.

:::figure caption="The metro's speed graph. Each part of the area is a distance: 100 + 600 + 100 = 800 m."
<svg viewBox="0 0 360 215" role="img" aria-label="Velocity-time trapezium of a metro with its areas labelled">
<line class="ln" x1="40" y1="180" x2="335" y2="180"/><line class="ln" x1="40" y1="180" x2="40" y2="20"/>
<path class="m2" d="M40 180 L96 60 L264 60 L320 180Z"/><path class="ray" d="M40 180 L96 60 L264 60 L320 180"/>
<line class="faint" x1="96" y1="60" x2="96" y2="180"/><line class="faint" x1="264" y1="60" x2="264" y2="180"/>
<text x="46" y="32">speed (m/s)</text><text x="296" y="210">time (s)</text><text x="14" y="64">20</text><text x="92" y="196">10</text><text x="260" y="196">40</text><text x="316" y="196">50</text>
<text class="k" x="58" y="172">100 m</text><text class="k" x="148" y="124">20 × 30 = 600 m</text><text class="k" x="270" y="172">100 m</text>
</svg>
:::

So the rule: **area under the velocity–time graph is the distance travelled** (more exactly the displacement, as the next sections show). You never need a formula: split the shape into rectangles and triangles and add.

:::qc lvl=1
q: A car's speed graph is a straight line from (0 s, 0 m/s) to (8 s, 15 m/s). How far does it go in those 8 s?
options: ["60 m", "120 m", "15 m"]
answer: 0
right: Right. The area is a triangle: ½ × 8 × 15 = 60 m.
wrong: Distance is the area under the line, and the shape is a triangle, not a rectangle. Half base times height.
:::

## Acceleration: the slope of the speed graph {lvl=1 id=s-accel label="Class 9"}

If the speed graph is steep, the speed is changing fast. That steepness has a name: the **acceleration**, how much the velocity changes each second. The metro's first stretch rises 20 m/s in 10 s, so its acceleration is $20/10 = 2$ m/s². In the cruise the line is flat, so the acceleration is zero. In the braking stretch the line falls 20 in 10 s, so the acceleration is $-2$ m/s².

A negative acceleration is a push opposite to the positive direction. It slows the metro only because the metro is moving in the positive direction. A car reversing and speeding up backwards has negative velocity *and* negative acceleration.

Here is a clean way to avoid mistakes: **speeding up** when velocity and acceleration have the same sign, **slowing down** when they have opposite signs.

:::qc lvl=1
q: A ball is thrown up. Taking up as positive, on the way up its velocity is positive and its acceleration is −10 m/s². Is it speeding up or slowing down?
options: ["Speeding up", "Slowing down", "Neither: acceleration is constant"]
answer: 1
right: Right. Velocity and acceleration have opposite signs, so the speed drops, by 10 m/s every second.
wrong: Compare the signs: positive velocity, negative acceleration. Opposite signs always means slowing down.
:::

## Three graphs, one story {lvl=2 id=s-three label="Class 11"}

A single motion has three graphs: position, velocity and acceleration against time. They are not three stories but one story told in three ways, each the slope of the one before and the area under the one after.

$$v = \frac{dx}{dt}, \qquad a = \frac{dv}{dt}, \qquad \Delta x = \int v\,dt, \qquad \Delta v = \int a\,dt.$$

Read it as: "velocity is how fast the position changes; acceleration is how fast the velocity changes; add up the velocity over time to get the displacement; add up the acceleration over time to get the change in velocity". The letters $dx/dt$ mean "a tiny change in $x$ divided by the tiny time it took", the slope at one instant. The curly integral sign just means "add up the tiny slices of area".

Play with the widget. Choose a starting velocity and a constant acceleration. The $v$–$t$ graph is a straight line, the $x$–$t$ graph a curve (a parabola), and the $a$–$t$ graph a flat line. Watch how the slope of the middle graph is the height of the right-hand one.

:::widget name=motion-graphs u=4 a=-1
:::

Try $u = 6$ and $a = -2$. The velocity drops to zero at $t = 3$ s, the $x$–$t$ curve reaches its peak there, and afterwards the object comes back. The widget reports the time it turns around and the distance travelled, which is bigger than the displacement once it turns.

:::qc lvl=2
q: In the widget, the x–t curve has a peak (the top of a hill) at some instant. What is the velocity there?
options: ["Zero", "Maximum", "Equal to the acceleration"]
answer: 0
right: Right. At the top of the hill the tangent is flat, so the slope, which is the velocity, is zero. The object is momentarily at rest and about to turn.
wrong: Velocity is the slope of the x–t graph. What is the slope at the top of a hill?
:::

## Where the equations of motion come from {lvl=2 id=s-derive label="Class 11"}

You do not need to memorise the equations for constant acceleration. Draw the picture. Start at velocity $u$ (the starting velocity), and let the velocity grow steadily to $v$ at time $t$. The graph is a straight line, and the area under it is a **trapezium**. Its area is the average of the two parallel sides times the width:

$$x = \frac{u + v}{2}\, t.$$

Read it as: "average velocity times time". The slope of the line is the acceleration, so $v = u + at$. Substitute that for $v$:

$$x = ut + \tfrac12 a t^2.$$

Read it as: "the distance you would have covered at the starting velocity, plus an extra half $a t^2$ because you kept speeding up". In the picture, $ut$ is the rectangle and $\tfrac12 a t^2$ is the triangle sitting on top of it.

Finally eliminate $t$: from $v = u + at$ we get $t = (v-u)/a$, and then $x = \frac{(u+v)}{2}\cdot\frac{(v-u)}{a} = \frac{v^2-u^2}{2a}$, which is

$$v^2 = u^2 + 2ax.$$

Read it as: "the change in the square of the speed is twice the acceleration times the distance". That is all three equations, from one trapezium.

:::worked title="Braking distance from the picture"
A car at 20 m/s brakes uniformly at 5 m/s². How far does it go? The speed graph is a triangle that falls from 20 to 0 in $20/5 = 4$ s. The area is $\tfrac12 \times 4 \times 20 = 40$ m. With the formula: $v^2 = u^2 + 2ax$ gives $0 = 400 - 10x$, so $x = 40$ m. Double the speed and the braking time doubles, and the triangle's area quadruples: that is why speed limits near schools matter.
:::

:::qc lvl=2
q: A scooter at 10 m/s brakes at 5 m/s². The same scooter at 20 m/s brakes at the same rate. By what factor does the braking distance grow?
options: ["2", "4", "8"]
answer: 1
right: Right. Distance is u²/(2a), so doubling u quadruples it. The triangle is twice as tall and twice as wide.
wrong: Both the time to stop and the starting speed double, so the triangle's base and height both double. What happens to its area?
:::

## Reading curved graphs {lvl=2 id=s-curved label="Class 11"}

When acceleration is not constant, the lines bend. The rule is the same, but now you use the tangent: the slope **at that point**. A steeper tangent means a bigger velocity (on an x–t curve) or a bigger acceleration (on a v–t curve).

A ball thrown straight up shows everything at once. Take up as positive, a launch speed of 20 m/s, and $g = 10$ m/s² to keep the numbers clean. The velocity falls by 10 m/s every second, so the v–t graph is one straight line sloping down, whether the ball is rising, at the top or falling.

:::figure caption="Velocity of a ball thrown upwards at 20 m/s. The area above the axis is the rise (20 m); the area below is the fall (20 m). At 4 s the two cancel and the displacement is zero."
<svg viewBox="0 0 360 225" role="img" aria-label="Velocity-time line of a ball thrown upwards with two equal triangles above and below the axis">
<line class="ln" x1="40" y1="110" x2="335" y2="110"/><line class="ln" x1="40" y1="20" x2="40" y2="205"/>
<path class="m2" d="M40 110 L40 20 L180 110Z"/><path class="hot" d="M180 110 L320 200 L320 110Z"/>
<path class="ray" d="M40 20 L320 200"/>
<circle class="obj" cx="180" cy="110" r="3.5"/>
<text x="46" y="14">v (m/s)</text><text x="296" y="104">t (s)</text><text x="14" y="24">20</text><text x="6" y="204">−20</text><text x="174" y="126">2</text><text x="314" y="126">4</text>
<text class="k" x="64" y="84">up: +20 m</text><text class="k" x="262" y="134">down:</text><text class="k" x="262" y="147">−20 m</text><text class="k" x="188" y="96">top: v = 0</text>
</svg>
:::

At 2 s the velocity is zero: the ball is at the top, but the line is still sloping down at 10 m/s², so the acceleration is *not* zero there. The area of the first triangle is $\tfrac12 \times 2 \times 20 = 20$ m, the height. After that the line is below the axis, so the ball moves downwards, and the second triangle is $-20$ m. Total displacement over 4 s is $20 - 20 = 0$: it is back in your hand. The distance it travelled is $20 + 20 = 40$ m.

:::qc lvl=2
q: For the throw above, what is the ball's average velocity over the full 4 s, and its average speed?
options: ["0 and 10 m/s", "10 m/s and 10 m/s", "0 and 0"]
answer: 0
right: Right. Displacement is zero, so the average velocity is zero. The distance is 40 m in 4 s, which is an average speed of 10 m/s.
wrong: Average velocity uses the displacement (0 m); average speed uses the whole distance walked, 40 m.
:::

## Signed area: distance versus displacement {lvl=3 id=s-signed label="JEE"}

Whenever a velocity graph dips below the axis, you must decide what you want. **Displacement** is the net area, with below-axis parts subtracted. **Distance** adds every part as a positive number. JEE problems love this because the two answers differ and both look plausible.

The same area rule works one step down. The area under an **acceleration–time graph** is the change in velocity, $\Delta v$. Starting from rest, you can build the whole velocity graph by adding areas of the acceleration graph slice by slice, then build the position graph by adding areas of the velocity graph.

:::worked title="From an a–t graph to a distance"
A particle starts from rest. Its acceleration is $+4$ m/s² for the first 3 s, zero for the next 5 s, then $-6$ m/s² until it stops. Area of the first slice: $4 \times 3 = 12$ m/s, so the velocity is 12 m/s at $t = 3$ s. It stays there for 5 s (that gives 60 m). Then $-6$ m/s² takes 12 m/s to zero in 2 s. The v–t graph is a trapezium with parallel sides 10 s and 5 s and height 12 m/s, with area $\tfrac12(10 + 5) \times 12 = 90$ m.
:::

:::qc lvl=3
q: A particle's velocity is +6 m/s for 2 s and then −3 m/s for 4 s. What are its displacement and distance over 6 s?
options: ["0 m and 24 m", "0 m and 0 m", "24 m and 24 m"]
answer: 0
right: Right. Forwards 6 × 2 = 12 m, backwards 3 × 4 = 12 m. Net displacement zero; total distance 24 m.
wrong: Count the area above the axis as +12 and the area below as −12. The displacement is their sum; the distance adds their sizes.
:::

## Overtaking and the largest gap {lvl=3 id=s-chase label="JEE"}

A car B moves at a steady 12 m/s. At the instant it passes a stationary car A, A starts off with acceleration 3 m/s². When does A catch B, and how far behind is A at the worst moment?

Draw both on one velocity–time graph. B is a flat line at 12. A is a sloping line through the origin, $v = 3t$. **A has caught B when the two areas are equal.** B's area is the rectangle $12t$; A's is the triangle $\tfrac12 \cdot t \cdot 3t = 1.5t^2$. Set them equal: $1.5t^2 = 12t$ gives $t = 8$ s. At that moment A is travelling at 24 m/s, twice B's speed, so it overtakes.

The lines cross earlier, at $3t = 12$, that is $t = 4$ s. At that moment the two have the *same speed*, and the gap is at its largest: B's area minus A's area is $12 \times 4 - \tfrac12 \times 4 \times 12 = 48 - 24 = 24$ m. Before $t = 4$, B is faster so the gap is growing; after it, A is faster and the gap shrinks.

So two different moments: **the crossing of the v–t lines is the time of the largest gap; the equality of areas is the time of the meeting.** The cartoon version is a chase in a film: the pursuer is still losing ground until the instant he matches the speed.

:::qc lvl=3
q: Two trains run on parallel tracks. Their v–t lines cross at t = 30 s. What happens at that moment?
options: ["They are side by side", "Their speeds are equal and the gap is at a maximum or minimum", "One has stopped"]
answer: 1
right: Right. The crossing means equal speeds, so the gap stops changing there. Side by side would show when the areas under the two graphs match, which may be a different time.
wrong: On a v–t graph the vertical axis is speed. Lines that cross have the same speed, not the same position.
:::

## Velocity against position {lvl=3 id=s-vx label="JEE"}

Sometimes a problem hands you speed as a function of *where* the object is, not when. The graph of $v$ against $x$ has its own slope rule. By the chain rule,

$$a = \frac{dv}{dt} = \frac{dv}{dx}\cdot\frac{dx}{dt} = v\,\frac{dv}{dx}.$$

Read it as: "acceleration is the speed times the slope of the speed–position graph". It lets you find the acceleration at a point without ever knowing the time.

:::worked title="A speed that falls with distance"
A particle moves with $v = 6 - 2x$ (in SI units). At $x = 0$: $v = 6$ m/s and $dv/dx = -2$ s⁻¹, so $a = 6 \times (-2) = -12$ m/s². At $x = 1$: $v = 4$ and $a = 4 \times (-2) = -8$ m/s². The acceleration shrinks as the particle slows, so this is not constant-acceleration motion, and the equations of motion would give wrong answers here.
:::

:::qc lvl=3
q: A particle has v = 3x (SI units). What is its acceleration at x = 2 m?
options: ["6 m/s²", "18 m/s²", "3 m/s²"]
answer: 1
right: Right. v = 3 × 2 = 6 m/s and dv/dx = 3, so a = v dv/dx = 6 × 3 = 18 m/s².
wrong: Use a = v dv/dx. Here v = 6 m/s at x = 2, and the slope of v against x is 3.
:::

## The triangle trick for the quickest trip {lvl=4 id=s-triangle label="Olympiad"}

A train must cover a distance $D$ between two stations in the shortest possible time. It can accelerate at most at $a_1$ and brake at most at $a_2$. Should it cruise at some top speed? No. Without a speed limit, the best graph is a **triangle**: accelerate flat out, then brake flat out, with no cruising.

Why is a triangle best? Any other graph with the same area $D$ that stays below the triangle's edges is longer in time. Let $v_m$ be the peak speed. The rising edge takes $v_m/a_1$ and the falling edge takes $v_m/a_2$, so the total time is $T = v_m\left(\frac{1}{a_1} + \frac{1}{a_2}\right)$. The area is $D = \tfrac12 v_m T$. Eliminating $v_m$ gives

$$T = \sqrt{2D\left(\frac{1}{a_1} + \frac{1}{a_2}\right)}.$$

Read it as: "the shortest time grows with the square root of the distance". For $D = 1500$ m, $a_1 = 1$ m/s² and $a_2 = 0.5$ m/s², this is $T = \sqrt{2 \times 1500 \times 3} \approx 95$ s, with a peak speed of about 32 m/s. If the track has a speed limit lower than $v_m$, the triangle's top is cut off and becomes a trapezium: accelerate, cruise at the limit, brake.

The same area logic solves a whole family of Olympiad problems: whenever the answer is "area under a curve is fixed, minimise the time", the optimal graph hugs the steepest allowed lines.

:::qc lvl=4
q: In the quickest trip, you double the distance D but keep the same accelerations. By what factor does the shortest time grow?
options: ["2", "√2", "4"]
answer: 1
right: Right. T goes as the square root of D, so doubling D multiplies T by √2 (about 1.41), not 2.
wrong: Look at the formula: T = √(2D(1/a₁ + 1/a₂)). D is under a square root.
:::

## Never reaching the end {lvl=4 id=s-exp label="Olympiad"}

Return to $v = 6 - 2x$. Since $v = dx/dt$, we have $dx/dt = 6 - 2x$, which says the closer the particle gets to $x = 3$, the slower it moves. Solving it gives $x = 3(1 - e^{-2t})$: the particle gets as close as you like to $x = 3$ m but **never arrives**, in any finite time. A graph can show this at a glance: the v–x line hits zero at $x = 3$, and a particle whose speed is proportional to the distance still to go creeps up on it forever. The same shape appears when a hot cup of tea cools towards room temperature and when a capacitor discharges.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. On a position–time graph the slope is the velocity: steeper is faster, flat is at rest, downhill is moving back. {lvl=1}
2. On a velocity–time graph the area is the displacement and the slope is the acceleration. {lvl=1}
3. Speeding up means velocity and acceleration have the same sign; slowing down means opposite signs. {lvl=1}
4. The constant-acceleration equations are read off a trapezium under a straight v–t line. {lvl=2}
5. Areas above the axis count forwards and below count backwards: net area is displacement, total of sizes is distance. {lvl=3}
6. On a v–t graph, crossing lines mean equal speed (largest gap in a chase); equal areas mean the meeting. {lvl=3}
7. When speed depends on position, $a = v\,dv/dx$. {lvl=3}
8. For a quickest trip, the best v–t graph is a triangle (or a trapezium when there is a speed limit). {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The graph is not the path: a steep line is a fast object, not a hill. {lvl=1}
- Check the axes first: a crossing on x–t is the same place, on v–t the same speed. {lvl=1}
- Zero velocity does not mean zero acceleration: a ball at the top of its flight still accelerates at g. {lvl=2}
- Area below the time axis is negative displacement; do not subtract it when you want distance. {lvl=3}
- A parabolic x–t graph and a straight v–t graph need constant acceleration; do not use $v^2 = u^2 + 2ax$ otherwise. {lvl=3}
:::
