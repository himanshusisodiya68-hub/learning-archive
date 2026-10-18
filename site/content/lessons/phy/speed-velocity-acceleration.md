---
title: Speed, velocity, acceleration
summary: Three questions about any motion (how fast, which way, how quickly is that changing?) and why averaging speeds is a classic trap.
ncert: ["Class 7 Science (Curiosity) · Ch 8 Measurement of Time and Motion (§8.1–8.4)", "Class 9 Science (Exploration) · Ch 4 Describing Motion Around Us (§4.1.3–4.1.4)", "Class 11 Physics · Ch 2 Motion in a Straight Line (§2.2–2.3)"]
up_to: Olympiad
builds_on: [Distance and displacement, Units and dimensions]
notes_prompt: Explain to a friend the difference between speed, velocity and acceleration using a car that goes round a roundabout, and say why a speedometer shows speed but not velocity.
margin:
  - kind: history
    title: History
    text: "Galileo, working around 1600, was the first to separate clearly how fast a body moves from how fast its speed changes. A well-known story says that, as a student, he timed a swinging lamp in the Pisa cathedral against his own pulse and noticed the swing time stayed the same [Unverified: this story is probably embellished]."
  - kind: tip
    title: Exam favourite
    text: "To go from km/h to m/s divide by 3.6; to go back multiply by 3.6. Average speed is total distance over total time, never the average of the speeds. Over equal distances the average speed is the harmonic mean 2v₁v₂/(v₁ + v₂)."
  - kind: olympiad
    title: Olympiad link
    text: "Write a = dv/dt = v·dv/dx when the acceleration is given as a function of position. A body whose deceleration is proportional to its speed stops within a finite distance but never in a finite time."
books:
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 8 Motion (speed, acceleration and the idea of a derivative) (feynmanlectures.caltech.edu)" }
  - { title: "Halliday, Resnick and Walker, Fundamentals of Physics", ref: "Ch. 2 Motion Along a Straight Line, average and instantaneous velocity and acceleration [Unverified chapter number]" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "Ch. 3 Rest and Motion: Kinematics [Unverified]" }
cards:
  - { front: "Speed versus velocity?", back: "Speed is how fast, a plain number: distance over time. Velocity is how fast and in which direction: displacement over time. Speed is never negative; velocity can be." }
  - { front: "Average speed formula and common trap?", back: "$\\text{average speed} = \\dfrac{\\text{total distance}}{\\text{total time}}$. It is not the mean of the speeds unless the times are equal." }
  - { front: "Average speed for two equal distances at $v_1$ and $v_2$?", back: "$\\dfrac{2v_1v_2}{v_1+v_2}$, the harmonic mean. Going out at 40 and back at 60 km/h gives 48 km/h, not 50." }
  - { front: "Define acceleration and give its unit.", back: "Acceleration is the rate of change of velocity: $a = \\Delta v/\\Delta t$, in m/s². A car going from 0 to 20 m/s in 5 s has $a = 4$ m/s²." }
  - { front: "How can an object accelerate with constant speed?", back: "Velocity includes direction. If the direction changes (a car round a bend) the velocity changes, so there is acceleration even though the speedometer is steady." }
  - { front: "Instantaneous velocity and acceleration in calculus?", back: "$v = dx/dt$ and $a = dv/dt = d^2x/dt^2$: the limits of the average values as the time interval shrinks to zero." }
core:
  idea: 'Speed tells you how fast you are going, velocity adds which way, and acceleration tells you how quickly your velocity is changing. Each is a rate: something changed, divided by the time it took.'
  formulas:
    - tex: '\text{average speed} = \dfrac{\text{total distance}}{\text{total time}}'
      label: 'Average speed'
    - tex: '\bar v = \dfrac{\Delta x}{\Delta t},\qquad v = \dfrac{dx}{dt}'
      label: 'Average and instantaneous velocity along a line'
    - tex: '\bar a = \dfrac{\Delta v}{\Delta t},\qquad a = \dfrac{dv}{dt}'
      label: 'Average and instantaneous acceleration along a line'
  conditions:
    - 'Motion along a straight line, with one direction chosen positive (the plus or minus signs carry the direction)'
    - 'The body is treated as a point and the clock is read at the same instants for everything'
    - 'Average values describe a whole interval; the instantaneous values need the interval shrunk to zero'
  sign: 'Speeding up or slowing down depends on whether v and a have the same sign or opposite signs, not on the sign of a alone. Average speed can never be less than the size of the average velocity.'
outcomes:
  - 'Calculate speed, distance or time from the other two and convert between km/h and m/s'
  - 'Tell uniform from non-uniform motion and find an average speed without averaging the speeds'
  - 'Find average velocity and say why it can be zero for a journey with a lot of speed'
  - 'Find the average acceleration and use signs to decide whether a body speeds up or slows down'
  - 'Use dx/dt and dv/dt to get instantaneous velocity and acceleration from a formula'
opener:
  story: |
    A game for the next family trip. You drive to your grandparents' house, 120 km away, at a steady 40 km/h. The road back is clearer, so you come home at a steady 60 km/h. Ask everyone: **what was the average speed for the whole round trip?**

    Almost everyone says 50 km/h, because it is half way between 40 and 60. It feels obvious. It is also wrong, and you can prove it with nothing more than a clock.

    By the end of this lesson you will know the exact answer, why the half-way guess fails, and how a single car can be speeding up, slowing down and going round a bend all at the same time, with three different words to say precisely what is happening.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A road between two houses, 40 km/h out, 60 km/h back, with a question mark for the average"><line x1="40" y1="120" x2="280" y2="120" style="stroke:var(--muted);stroke-width:3"/><rect x="26" y="104" width="22" height="18" rx="2" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M23 105 L37 92 L51 105Z" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="272" y="104" width="22" height="18" rx="2" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M269 105 L283 92 L297 105Z" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M70 80 L250 80" style="stroke:var(--c);stroke-width:3;fill:none"/><path d="M250 80 L238 74 L238 86Z" style="fill:var(--c)"/><path d="M250 160 L70 160" style="stroke:var(--chem);stroke-width:3;fill:none"/><path d="M70 160 L82 154 L82 166Z" style="fill:var(--chem)"/><text x="116" y="70" style="font-size:12px;fill:var(--c)">out: 40 km/h</text><text x="112" y="182" style="font-size:12px;fill:var(--chem)">back: 60 km/h</text><text x="104" y="218" style="font-size:13px;fill:var(--ink)">average speed = 50 km/h ?</text></svg>'
life:
  - 'A car speedometer shows your speed at this very instant; the trip computer shows your average speed over the journey.'
  - 'A cricket bowler is measured by the speed gun at the instant the ball leaves the hand, not by how fast it averages to the batsman.'
  - 'Pressing the accelerator, the brake or turning the steering wheel are all ways of changing your velocity: the accelerator changes the size, the steering wheel the direction.'
  - 'Metro timetables give the average speed between stations, including the stops, which is why it is far below the top speed on the open track.'
  - 'When a lift starts or stops you feel pressed down or lifted: your body feels the acceleration, not the speed.'
models:
  - name: 'Everything is a rate'
    text: 'Speed is distance per time, acceleration is speed per time. Whenever something is described as "per" something, ask what is being divided by what. Growth in percent per year, salary per month and runs per over are all rates.'
  - name: 'You cannot average the averages'
    text: 'When the weights differ, the simple middle value is wrong. Average speed must weight each speed by the time spent at it. The same trap hides in average marks of classes with different sizes and average returns over years with different balances.'
  - name: 'Change is felt, not state'
    text: 'You do not feel speed, you feel a change in it. People quickly adjust to a steady high salary, speed or noise, and notice only when it changes. Acceleration is the thing the body and the mind react to.'
links:
  - leaf: 'phy/momentum-and-the-second-law'
    name: 'Momentum and the second law'
    same: 'Newton''s second law says the acceleration of a body is the force on it divided by its mass. Acceleration, defined here, is exactly the quantity that a force produces.'
    differs: 'Here acceleration is only described. The second law explains why it happens and what decides its size.'
  - leaf: 'mat/derivatives'
    name: 'Derivatives'
    same: 'Instantaneous velocity and acceleration are derivatives: the limit of "change divided by time" as the time shrinks to zero. The mathematics is identical.'
    differs: 'In maths a derivative is the slope of any curve. In physics each derivative has a unit and a meaning: m/s for dx/dt and m/s² for dv/dt.'
next:
  q: 'If a car accelerates steadily at 2 m/s² from rest, how far does it go in 10 s, and how fast is it moving at the end? Can you get both answers without knowing calculus?'
  leaf: 'phy/equations-of-motion'
  name: 'Equations of motion'
symbols:
  - s: 'v'
    means: 'velocity or speed: how fast the position changes, with a sign for direction (m/s)'
  - s: '\bar v'
    means: 'average velocity over an interval (m/s); the bar means average'
  - s: '\Delta x'
    means: 'displacement, the change in position (m)'
  - s: '\Delta t'
    means: 'a time interval, the change in the clock reading (s)'
  - s: 'a'
    means: 'acceleration: how fast the velocity changes (m/s^2)'
  - s: '\Delta v'
    means: 'change in velocity, final minus initial (m/s)'
  - s: 'dx/dt'
    means: 'the rate of change of position at one instant, the instantaneous velocity (m/s)'
  - s: 'dv/dt'
    means: 'the rate of change of velocity at one instant, the instantaneous acceleration (m/s^2)'
  - s: 'k'
    means: 'a constant that sets how strongly the drag slows the body (1/s)'
---

:::hook
q: You drive 120 km to your grandparents at a steady 40 km/h and return the same 120 km at a steady 60 km/h. What is the average speed for the whole round trip?
options: ["50 km/h", "48 km/h", "52 km/h", "Zero, because you ended where you began"]
answer: 1
right: Right, 48 km/h. The way out takes 3 hours and the way back 2 hours, so you cover 240 km in 5 hours. You spend more time at the slower speed, so the average is pulled below 50. (Your average velocity, by the way, is zero. That is the other option, but it answers a different question.)
wrong: Do not average the speeds. Work out the time for each leg: 120 km at 40 km/h takes 3 h; 120 km at 60 km/h takes 2 h. Total distance 240 km over total time 5 h is 48 km/h. Zero is the average velocity, not the average speed.
:::

## Fast or slow? {lvl=1 id=s-fast label="Class 7"}

To say that one runner is faster than another, you need two things: a ruler and a clock. Long ago people used the sun, burning candles and water dripping out of pots as clocks. Then people noticed that a swinging pendulum takes almost exactly the same time for every swing, which gave a steadier clock. The SI unit of time is the second.

If two runners cover the same distance, the one who takes less time is faster. But when the distances differ you need a single number that combines both. Take the distance run in each second. A sprinter who covers 100 m in 10 s covers 10 m every second, and we say her **speed** is 10 metres per second. In words:

$$\text{speed} = \frac{\text{distance covered}}{\text{time taken}}.$$

Read it as: speed is the distance you cover in one unit of time. Written with units, 10 m/s, read "10 metres per second".

Cars and trains are given in kilometres per hour. To switch between the units, remember that 1 km is 1000 m and 1 hour is 3600 s, so $1\ \text{km/h} = \frac{1000}{3600}\ \text{m/s} = \frac{1}{3.6}\ \text{m/s}$. A train at 72 km/h moves at $72/3.6 = 20$ m/s. The sprinter's 10 m/s is $10\times3.6 = 36$ km/h, a fast car in a school zone.

You can also turn the equation around. If you know the speed you can find the distance, $\text{distance} = \text{speed}\times\text{time}$, or the time, $\text{time} = \text{distance}/\text{speed}$. A bicycle at 5 m/s takes $1500/5 = 300$ s, that is 5 minutes, to cover 1.5 km.

:::qc lvl=1
q: A bus travels at 54 km/h. What is its speed in m/s?
options: ["15 m/s", "194 m/s", "5.4 m/s", "30 m/s"]
answer: 0
right: Right. Divide by 3.6: 54/3.6 = 15 m/s.
wrong: To change km/h to m/s divide by 3.6 (1000 m per 3600 s). 54 ÷ 3.6 = 15 m/s.
:::

## Steady or not? {lvl=1 id=s-uniform label="Class 7"}

Look at a long straight road. A car on a clear highway covers 20 m every second, second after second. A car in city traffic covers 5 m in one second, 12 m in the next, then 0 m while waiting for a signal. The first car is in **uniform motion**: it covers equal distances in equal intervals of time. The second is in **non-uniform motion**.

Here is a way to see this. Imagine taking a photograph of the moving body once every second and laying the photos side by side. A steady speed gives dots at equal gaps. A growing speed gives gaps that grow.

:::figure caption="Positions at every second. Top: uniform motion (equal gaps). Bottom: speeding up (gaps grow by the same amount each second: constant acceleration)."
<svg viewBox="0 0 360 150" role="img" aria-label="Two rows of dots, one with equal spacing and one with growing spacing">
<line class="gr" x1="20" y1="50" x2="340" y2="50"/><line class="gr" x1="20" y1="110" x2="340" y2="110"/>
<circle class="obj" cx="30" cy="50" r="5"/><circle class="obj" cx="80" cy="50" r="5"/><circle class="obj" cx="130" cy="50" r="5"/><circle class="obj" cx="180" cy="50" r="5"/><circle class="obj" cx="230" cy="50" r="5"/><circle class="obj" cx="280" cy="50" r="5"/>
<circle class="obj" cx="30" cy="110" r="5"/><circle class="obj" cx="40" cy="110" r="5"/><circle class="obj" cx="70" cy="110" r="5"/><circle class="obj" cx="120" cy="110" r="5"/><circle class="obj" cx="190" cy="110" r="5"/><circle class="obj" cx="280" cy="110" r="5"/>
<text x="20" y="30">uniform: equal gaps every second</text>
<text x="20" y="90">speeding up: gaps 10, 30, 50, 70, 90</text>
<text x="20" y="140" class="k">t = 0, 1, 2, 3, 4, 5 s</text>
</svg>
:::

Real motion is almost always non-uniform, so we need a way of describing the whole journey with one number. That number is the **average speed**: the total distance covered divided by the total time taken, stops included.

$$\text{average speed} = \frac{\text{total distance}}{\text{total time}}.$$

A bus travels 30 km in the first half hour and 60 km in the next hour. Total distance 90 km, total time 1.5 h, so the average speed is $90/1.5 = 60$ km/h. Notice that the first half hour ran at 60 km/h as well, and the next hour at 60 km/h: here the answer happens to equal both.

The family trip from the start of the lesson shows why you must use the formula and not guess. Each leg is 120 km. Time out: $120/40 = 3$ h. Time back: $120/60 = 2$ h. Average speed $= 240/5 = 48$ km/h, not 50. You spent more of your time at 40 than at 60, so the average slides towards 40.

:::qc lvl=1
q: A cyclist rides 6 km in 20 minutes and then 9 km in 40 minutes. What is her average speed for the 15 km?
options: ["15 km/h", "16.5 km/h", "22.5 km/h", "18 km/h"]
answer: 0
right: Right. Total distance 15 km, total time 60 min = 1 h, so the average speed is 15 km/h.
wrong: Add the distances (6 + 9 = 15 km) and the times (20 + 40 = 60 min = 1 h). 15 km in 1 h is 15 km/h. Do not average the two separate speeds (18 km/h and 13.5 km/h).
:::

## Velocity: speed with a direction {lvl=1 id=s-velocity label="Class 9"}

Speed says how fast, but not where to. Two ships leaving a harbour at 20 km/h have the same speed, yet one reaches Mumbai and the other Goa. We add the direction and get **velocity**.

Take a straight line and mark a direction as positive. The **average velocity** over a time interval is the displacement divided by the time it took:

$$\bar v = \frac{\Delta x}{\Delta t} = \frac{x_f - x_i}{t_f - t_i}.$$

Read it as: average velocity is the change in position divided by the change in time. The bar over the $v$ means "average"; $\Delta t$ is the time interval.

Notice that the formula uses the displacement from the last lesson, not the distance. A swimmer does one 25 m length of a pool and swims back in a total time of 40 s. Her average speed is $50/40 = 1.25$ m/s. But she ended where she started, so her displacement is zero and her average velocity is $0$. The family on the trip had the same effect: speed 48 km/h, average velocity zero.

So speed and the size of the velocity are not always the same. The average speed is always at least as big as the size of the average velocity, and they are equal only when the body moves in a straight line without turning back.

:::qc lvl=1
q: A runner completes exactly one lap of a 400 m track in 80 s. Which statement is true?
options: ["Average speed is 5 m/s and average velocity is zero", "Average speed is zero and average velocity is 5 m/s", "Both are 5 m/s", "Both are zero"]
answer: 0
right: Right. Distance 400 m over 80 s is 5 m/s. The displacement for one full lap is zero, so the average velocity is zero.
wrong: Speed uses the distance (400 m), so it is 400/80 = 5 m/s. Velocity uses the displacement, which is zero after a full lap.
:::

## Acceleration: how fast the velocity changes {lvl=1 id=s-accel label="Class 9"}

When you press the accelerator of a car, you do not suddenly jump to a new speed. The speed builds up second by second. We need a measure for how fast it builds up. That is **acceleration**: the change in velocity divided by the time it took.

$$\bar a = \frac{\Delta v}{\Delta t} = \frac{v_f - v_i}{\Delta t}.$$

Read it as: how much the velocity changes in one second. A car that goes from rest to 20 m/s (72 km/h) in 5 s gains 4 m/s every second, so $\bar a = 20/5 = 4$ m/s². The unit m/s² is read "metres per second squared", meaning "metres per second, per second".

Velocity can fall as well as rise. A train slowing from 30 m/s to 10 m/s in 10 s has $\bar a = (10 - 30)/10 = -2$ m/s². The minus sign tells you the velocity is dropping. In everyday speech this is called **deceleration**, but physics simply says negative acceleration, when forward is positive.

A sports car that goes from 0 to 100 km/h in 8 s has $\bar a = 27.8/8 = 3.5$ m/s². A freely falling stone gains 9.8 m/s of speed every second, an acceleration of 9.8 m/s².

:::qc lvl=1
q: A motorbike's speed changes from 10 m/s to 25 m/s in 5 s. What is its average acceleration?
options: ["3 m/s²", "7 m/s²", "75 m/s²", "0.33 m/s²"]
answer: 0
right: Right. Change in velocity is 25 − 10 = 15 m/s in 5 s, so a = 15/5 = 3 m/s².
wrong: Acceleration is the change in velocity divided by time: (25 − 10)/5 = 15/5 = 3 m/s².
:::

## Signs, speeding up and turning {lvl=2 id=s-signs label="Class 11"}

With one direction chosen as positive, both $v$ and $a$ carry signs. This causes a common muddle: a negative acceleration does not always mean "slowing down". What matters is whether the signs of $v$ and $a$ agree.

| Velocity | Acceleration | What happens |
|---|---|---|
| + | + | speeds up (moving forward, pushed forward) |
| + | − | slows down (moving forward, pushed back) |
| − | − | speeds up (moving backward, pushed further backward) |
| − | + | slows down (moving backward, pushed forward) |

Think of a ball thrown upwards, with up positive. Gravity gives $a = -9.8$ m/s² the whole time. On the way up $v$ is positive, so the ball slows. At the top $v = 0$ for an instant, but $a$ is still $-9.8$: zero velocity does not mean zero acceleration. On the way down $v$ is negative and $a$ is negative, so the ball speeds up.

There is a second way to accelerate. Velocity includes direction, so a car going round a roundabout at a steady 40 km/h is accelerating, because its direction changes all the time. The speedometer stays still but the velocity does not. This kind of acceleration is the subject of the Circular motion lesson.

:::qc lvl=2
q: With upward as positive, a ball is moving downward and speeding up. Which signs describe v and a?
options: ["v negative, a negative", "v negative, a positive", "v positive, a negative", "v positive, a positive"]
answer: 0
right: Right. Moving down means v is negative. It is speeding up, so a points the same way as v: negative.
wrong: Downward motion has v < 0. Speeding up means a has the same sign as v, so a < 0 as well.
:::

## One instant: the speedometer {lvl=2 id=s-instant label="Class 11"}

The average velocity over a whole minute says little about what the car is doing now. The speedometer reads **instantaneous** velocity, the velocity at one moment. How do you measure something over a time of zero?

You cannot divide by zero, but you can get closer and closer. Let a body move with position $x = t^2$ (in metres, with $t$ in seconds). Find the average velocity from $t = 2$ s over shorter and shorter intervals:

| Interval | Distance moved | Average velocity |
|---|---|---|
| 2 s to 3 s | 9 − 4 = 5 m | 5 m/s |
| 2 s to 2.1 s | 4.41 − 4 = 0.41 m | 4.1 m/s |
| 2 s to 2.01 s | 4.0401 − 4 = 0.0401 m | 4.01 m/s |

The numbers are closing in on 4 m/s. That limit is the instantaneous velocity at $t = 2$ s. In symbols, with $dt$ standing for a time interval shrunk almost to zero and $dx$ for the tiny displacement in it,

$$v = \frac{dx}{dt}.$$

Read it as: velocity is the rate of change of position. For $x = t^2$ this is $v = 2t$, which gives 4 m/s at $t = 2$ s, matching the table. In the same way the instantaneous acceleration is how fast the velocity changes at that instant,

$$a = \frac{dv}{dt} = \frac{d^2x}{dt^2}.$$

Here $a = 2$ m/s², the same at every instant. The size of the instantaneous velocity is the **instantaneous speed**; this is what the speedometer displays.

:::worked title="From a formula to v and a"
The position of a car is $x = 3t^2 + 2t$ (metres, seconds). Then $v = dx/dt = 6t + 2$ and $a = dv/dt = 6$ m/s².

At $t = 2$ s: $v = 14$ m/s. Average velocity from $t = 1$ to $t = 3$: $x(3) = 33$, $x(1) = 5$, so $\bar v = 28/2 = 14$ m/s. This equals $v$ at the middle time $t = 2$, because the acceleration is constant.
:::

:::qc lvl=2
q: A particle's position is x = 5t² metres. What is its velocity at t = 3 s?
options: ["30 m/s", "45 m/s", "15 m/s", "10 m/s"]
answer: 0
right: Right. v = dx/dt = 10t, which is 30 m/s at t = 3 s.
wrong: Differentiate: v = d(5t²)/dt = 10t. At t = 3 s that is 30 m/s. (45 m would be the position, not the velocity.)
:::

## Averages that fool you {lvl=3 id=s-averages label="JEE"}

JEE problems repeatedly test whether you can average correctly. Three rules cover almost everything.

**Equal distances.** If a body covers equal distances at speeds $v_1$ and $v_2$, the times are $d/v_1$ and $d/v_2$ and

$$\text{average speed} = \frac{2d}{d/v_1 + d/v_2} = \frac{2v_1v_2}{v_1+v_2}.$$

Read it as: the harmonic mean, always smaller than the simple mean. For 40 and 60: $2\times40\times60/100 = 48$ km/h.

**Equal times.** If a body spends equal times at $v_1$ and $v_2$, the distances are $v_1t$ and $v_2t$, and the average speed is the plain mean $(v_1+v_2)/2$. For 40 and 60 this is 50 km/h. The "obvious" answer is right only when the time spent is the same.

**Constant acceleration.** Only when the acceleration is constant is the average velocity equal to the mean of the initial and final velocities, $\bar v = (u + v)/2$. For the position $x = t^3$ the average velocity over 0 to 2 s is $8/2 = 4$ m/s, but the mean of the end velocities is $(0 + 12)/2 = 6$ m/s.

:::worked title="A reversal: velocity changes sign"
A cricket ball arrives at the bat at 30 m/s and leaves in the opposite direction at 40 m/s. Take the final direction as positive: $v_i = -30$, $v_f = +40$, so $\Delta v = 70$ m/s, not 10. If the contact lasts 0.01 s the average acceleration is $70/0.01 = 7000$ m/s², about 700 times $g$.
:::

:::qc lvl=3
q: A car covers the first half of a journey (by distance) at 30 km/h and the second half at 60 km/h. What is its average speed?
options: ["40 km/h", "45 km/h", "50 km/h", "42 km/h"]
answer: 0
right: Right. For equal distances use the harmonic mean: 2 × 30 × 60 / 90 = 40 km/h.
wrong: Equal distances, not equal times, so do not take the simple mean. With the distance d each way, the times are d/30 and d/60; the average is 2d/(d/30 + d/60) = 40 km/h.
:::

## When acceleration depends on where you are {lvl=4 id=s-vdvdx label="Olympiad"}

Sometimes the acceleration is given in terms of position, not time: a spring, a brake that bites harder as the speed rises. Then you want $v$ as a function of $x$. Using the chain rule,

$$a = \frac{dv}{dt} = \frac{dv}{dx}\cdot\frac{dx}{dt} = v\,\frac{dv}{dx}.$$

Read it as: acceleration is speed times the rate at which speed changes with distance. This lets you skip time entirely.

Here is a puzzle that looks odd. A body slides with a drag such that its deceleration is proportional to its speed, $a = -kv$ (with $k$ a constant in 1/s). Then $v\,dv/dx = -kv$, so $dv/dx = -k$ and the speed falls linearly with the distance: $v = v_0 - kx$. It stops at the finite distance $x = v_0/k$.

But how long does it take? Use $a = dv/dt = -kv$. The rate of fall of the speed is proportional to the speed itself, so the speed decays exponentially, $v = v_0e^{-kt}$, and never quite reaches zero in finite time. The body comes to a stop in a finite distance only after an infinite time. [Inference] Real drag at very low speeds behaves roughly like this; at the very end other effects such as friction bring the body to rest.

Finally, an old puzzle about averages. A car goes the first kilometre of a 2 km road at 30 km/h. How fast must it drive the second kilometre so that its average speed for the 2 km is 60 km/h? To average 60 km/h over 2 km it has 2 minutes. But the first kilometre at 30 km/h already took 2 minutes. No time is left: the required speed is infinite, which is impossible. This is the same lesson as the family trip, taken to its limit: you cannot make up lost time by going faster later if time is what is already spent.

:::qc lvl=4
q: A body decelerates with a = −kv. Its speed at the start is v₀. How far does it travel before stopping?
options: ["v₀/k", "v₀²/2k", "It never stops, the distance is infinite", "k v₀"]
answer: 0
right: Right. From a = v dv/dx = −kv we get dv/dx = −k, so v = v₀ − kx, which is zero at x = v₀/k. (The time taken is infinite.)
wrong: Write a = v dv/dx = −kv, so dv/dx = −k and v = v₀ − kx. Setting v = 0 gives x = v₀/k. The time is infinite but the distance is finite.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Speed = distance ÷ time; convert km/h to m/s by dividing by 3.6. {lvl=1}
2. Average speed = total distance ÷ total time, never the mean of the speeds. {lvl=1}
3. Velocity is speed with a direction: average velocity = displacement ÷ time, and can be zero. {lvl=1}
4. Acceleration = change in velocity ÷ time (m/s²); a negative value only means slowing when the velocity is positive. {lvl=1}
5. The body speeds up when v and a have the same sign and slows when the signs differ. {lvl=2}
6. $v = dx/dt$ and $a = dv/dt$ are the instantaneous values; the speedometer reads |v|. {lvl=2}
7. For equal distances the average speed is $2v_1v_2/(v_1+v_2)$; for equal times it is the plain mean. {lvl=3}
8. $a = v\,dv/dx$ is useful when the acceleration depends on position. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Averaging two speeds instead of finding total distance over total time. {lvl=1}
- Using distance in the velocity formula: velocity needs the displacement. {lvl=1}
- Reading "negative acceleration" as "slowing down": check the sign of the velocity too. {lvl=2}
- Concluding that a = 0 when v = 0: at the top of a throw, $v = 0$ but $a = -g$. {lvl=2}
- Treating $(u + v)/2$ as the average velocity when the acceleration is not constant. {lvl=3}
- Forgetting that a change of direction is a change of velocity: reversing from +30 to −40 m/s is a change of 70, not 10. {lvl=3}
:::
