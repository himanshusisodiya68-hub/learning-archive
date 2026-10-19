---
title: Power
summary: Why running up the stairs leaves you gasping when walking does not, though the work is the same, and how to measure how fast energy moves.
ncert: ["Class 9 Science · Ch 7 Work, Energy and Power (§7.5 Power)", "Class 11 Physics · Ch 5 Work, Energy and Power (§5.10 Power)"]
up_to: Olympiad
builds_on: [Work done by a force, Kinetic and potential energy, Work–energy theorem, Conservative forces]
notes_prompt: Explain to a friend why a 1.5 kW heater and a 15 W phone charger can both be "on" for an hour, and why only one makes the electricity bill jump.
margin:
  - kind: history
    title: History
    text: "James Watt wanted to sell his steam engines to people who owned horses, so he measured how fast a strong brewery horse could lift a load and called that one horse power, about 746 W in today's units [Unverified details of his measurements]. The unit of power was later named after him."
  - kind: tip
    title: Exam habit
    text: "Ask whether the question gives the average or the instantaneous power. Average is total work divided by total time; instantaneous is force times speed at that moment. They differ whenever the speed is changing."
  - kind: olympiad
    title: Olympiad link
    text: "When mass is being added to a moving body, like sand dropped on a conveyor belt, the motor delivers twice the power that the sand's kinetic energy gains. The missing half is heat, and no choice of roughness can change that."
books:
  - { title: "D. Halliday, R. Resnick, J. Walker, Fundamentals of Physics", ref: "Ch. 7 Kinetic Energy and Work, section on power [Unverified chapter number]" }
  - { title: "R. P. Feynman, The Feynman Lectures on Physics Vol. 1", ref: "Ch. 4 Conservation of Energy; Ch. 13 Work and Potential Energy (A) [Unverified chapter numbers] (feynmanlectures.caltech.edu)" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 1", ref: "chapter on Work and Energy, section on power [Unverified chapter reference]" }
cards:
  - { front: "Define power and its SI unit.", back: "Power is the rate of doing work or of transferring energy, $P = W/t$. Unit: the watt, 1 W = 1 J/s. 1 kW = 1000 W; 1 hp is about 746 W." }
  - { front: "Instantaneous power in terms of force and velocity?", back: "$P = \\vec F\\cdot\\vec v = Fv\\cos\\theta$. A force at right angles to the velocity does no work and delivers no power." }
  - { front: "What is a kilowatt-hour?", back: "A unit of energy, not power: $1\\ \\text{kWh} = 1000\\ \\text{W}\\times3600\\ \\text{s} = 3.6\\times10^6$ J. One unit on the electricity bill." }
  - { front: "Define efficiency.", back: "$\\eta = \\dfrac{\\text{useful output energy (or power)}}{\\text{input energy (or power)}}$, always less than 1 for a real machine, because some energy leaves as heat." }
  - { front: "A body accelerates from rest under constant power $P$. How do $v$ and $x$ grow?", back: "$v \\propto t^{1/2}$ and $x \\propto t^{3/2}$, since $\\tfrac12mv^2 = Pt$. The acceleration is large at first and falls as $v$ grows." }
  - { front: "Power carried by wind or water flowing through an area $A$ at speed $v$?", back: "$P = \\tfrac12\\rho Av^3$, with $\\rho$ the density. Double the speed and the power is eight times greater." }
core:
  idea: 'Power is how fast energy is moved. A job needs a fixed amount of energy, but doing it faster needs more power: $P = W/t$, and at any instant $P = Fv$.'
  formulas:
    - tex: 'P = \dfrac{W}{t} = \dfrac{\Delta E}{t},\qquad 1\ \text{W} = 1\ \text{J/s}'
      label: 'Average power'
    - tex: 'P = \vec F\cdot\vec v = Fv\cos\theta'
      label: 'Instantaneous power'
    - tex: '\eta = \dfrac{P_{\text{out}}}{P_{\text{in}}} < 1'
      label: 'Efficiency'
  conditions:
    - 'Average power is total energy divided by total time; $P = Fv$ gives the power at one instant, with $\vec v$ the velocity of the point where the force acts'
    - 'For the equation $P = Fv$ with $\cos\theta = 1$ the force must be along the motion'
    - 'Energy is billed in kWh; power is the rate and is measured in W'
  sign: 'Power is negative when the force opposes the motion (a brake, or friction). A kilowatt is a rate and a kilowatt-hour is an amount: they are never interchangeable.'
outcomes:
  - 'Explain why the same job can need very different power, and find power from work and time'
  - 'Convert between W, kW, hp and kWh, and work out an electricity bill'
  - 'Use P = Fv to relate engine power, force and speed, including the idea of gears'
  - 'Find efficiency and the input power needed for a given output'
  - 'Solve constant-power motion, power of a flow (wind, water) and conveyor-belt problems'
opener:
  story: |
    You climb the stairs to the third floor of your building. First you stroll up, taking about a minute. The next day you are late, so you run up in ten seconds.

    You lifted the same body through the same height, so gravity took exactly the same amount of energy from you both times. Yet on the second day you arrive with your heart pounding and a dry throat. Something was different, and it cannot be the energy. So what was it?

    The something is how *fast* you spent that energy. Your body can pay out a little energy slowly all day, but a lot of energy quickly is a different matter. That rate has a name, and it is the number on every bulb, engine, charger and kettle you own.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="Two people climb the same stairs, one slowly in 60 seconds and one quickly in 10 seconds"><path d="M40 200 L90 200 L90 170 L130 170 L130 140 L170 140 L170 110 L210 110 L210 80 L250 80 L250 50 L290 50" style="fill:none;stroke:var(--ink);stroke-width:2.5;stroke-linejoin:round"/><line x1="40" y1="200" x2="290" y2="200" style="stroke:var(--muted);stroke-width:1"/><circle cx="108" cy="154" r="8" style="fill:var(--surface);stroke:var(--c);stroke-width:2.5"/><path d="M108 162 L108 182" style="stroke:var(--c);stroke-width:2.5"/><circle cx="224" cy="64" r="8" style="fill:var(--surface);stroke:var(--chem);stroke-width:2.5"/><path d="M224 72 L224 92" style="stroke:var(--chem);stroke-width:2.5"/><path d="M118 150 L176 106" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 5"/><path d="M232 60 L270 34" style="fill:none;stroke:var(--chem);stroke-width:2;stroke-dasharray:5 5"/><text x="46" y="226" style="font-size:11px;fill:var(--c)">stroll: 60 s</text><text x="160" y="226" style="font-size:11px;fill:var(--chem)">run: 10 s</text><text x="56" y="34" style="font-size:11px;fill:var(--muted)">same height, same energy</text><text x="56" y="50" style="font-size:11px;fill:var(--muted)">six times the power</text></svg>'
symbols:
  - s: 'P'
    means: 'power, the rate of doing work (watts, W)'
  - s: 'W'
    means: 'work done, energy transferred (joules, J)'
  - s: 't'
    means: 'time taken (seconds, s)'
  - s: 'F'
    means: 'force doing the work (newtons, N)'
  - s: 'v'
    means: 'speed (m/s)'
  - s: '\eta'
    means: 'efficiency, useful output over total input (no unit, often written as a percentage)'
  - s: '\rho'
    means: 'density of the moving fluid, mass per unit volume (kg/m^3)'
  - s: 'A'
    means: 'area the fluid flows through (m^2)'
life:
  - 'The electricity bill charges for energy in kWh: a 1.5 kW AC running 8 hours uses 12 units, while a 5 W LED night lamp running all night uses about a twentieth of one unit.'
  - 'A car in first gear can pull a heavy load slowly up a hill, but in top gear the same engine gives a small force at high speed: P = Fv with P fixed.'
  - 'Wind farms along the Tamil Nadu and Gujarat coasts harvest the power of moving air, which depends on wind speed cubed.'
  - 'A cyclist riding at double the speed does not work twice as hard: air drag makes the power needed climb roughly eight-fold.'
  - 'Phone fast-chargers deliver 30 W or more and warm the phone: the missing efficiency is heat.'
models:
  - name: 'Rate versus amount'
    text: 'A pipe has a flow rate and a tank has a volume; income is a rate and savings are an amount. Power is the rate and energy is the amount. Confusing the two is how people misjudge bills, loans and workloads.'
  - name: 'Same job, different speed, different load'
    text: 'Doing the same task in a third of the time takes three times the power, whether that is lifting a bag, delivering parcels or finishing a project. Ask "how fast?" as well as "how much?".'
  - name: 'A trade between force and speed'
    text: 'With a fixed power supply you can have a big force or a high speed but not both: gears, bicycles and bulldozers all choose a point on this trade-off. Many fixed-budget choices in life work the same way.'
links:
  - leaf: 'phy/heating-effect-and-power'
    name: 'Electrical power'
    same: 'The same idea in another costume: energy per second. An electric heater delivers $P = VI$ watts, and the meter bills you in the same kWh.'
    differs: 'Mechanical power is $Fv$, a force times a speed; electrical power is $VI$, a voltage times a current. Both are rates of energy transfer.'
  - leaf: 'phy/work-energy-theorem'
    name: 'Work–energy theorem'
    same: 'The theorem says net work equals the change in kinetic energy. Divide both sides by time and you get the power form: the net power equals the rate of change of kinetic energy, $P = dK/dt$.'
    differs: 'The theorem compares two snapshots; power asks how quickly one changes into the other.'
next:
  q: 'A long crowbar lets one person shift a boulder that ten people could not lift. If energy cannot be created, where does the extra push come from, and what is the price?'
  leaf: 'phy/simple-machines'
  name: 'Simple machines'
---

:::hook
q: You and a friend carry identical bags up the same flight of stairs. You take 20 seconds; your friend takes 60. Who does more work, and who needs more power?
options: ["Same work, but you need three times the power", "You do three times the work and need three times the power", "Same work and same power", "Your friend does more work because it took longer"]
answer: 0
right: Right. Lifting the same bag the same height takes the same work, $mgh$. You finish in a third of the time, so you spend energy three times faster: three times the power.
wrong: Work is force times distance, and neither changed, so the work is the same. Power is work divided by time, and you used one-third of the time.
:::

## Work per second {lvl=1 id=s-rate label="Class 9"}

A fixed job needs a fixed amount of energy. Lifting a 50 kg student through 3 m on the stairs takes $mgh = 50\times10\times3 = 1500$ J, whether you stroll or sprint. What changes is the *time*, and the quantity that captures that is **power**, the work done per second:

$$P = \frac{W}{t}.$$

Read it as: power is the energy moved divided by the time it took. The unit is the **watt** (W): one joule each second. A 60 W bulb takes in 60 J every second.

Climb that flight in 30 s and your power is $1500/30 = 50$ W. Run it in 10 s and it is $1500/10 = 150$ W: the same energy, three times the power. Larger units are handy: 1 kilowatt (kW) = 1000 W. Engines are sometimes rated in **horse power**, with 1 hp about 746 W.

:::worked title="Reading a power rating"
A pump lifts 120 kg of water through 5 m in 20 s. Take $g = 10$ m/s².

Work: $mgh = 120\times10\times5 = 6000$ J. Power: $6000/20 = 300$ W.

Doing the same job in 10 s would need 600 W, twice the power.
:::

:::qc lvl=1
q: A machine lifts a load, doing 2400 J of work in 8 s. Another machine does the same work in 4 s. How do their powers compare?
options: ["The second has half the power", "They have the same power", "The second has twice the power", "The second has four times the power"]
answer: 2
right: Right. $P = W/t$: 300 W against 600 W. Same work in half the time means twice the power.
wrong: Divide the work by the time for each machine: 2400/8 = 300 W and 2400/4 = 600 W.
:::

## The bill pays for energy, not power {lvl=1 id=s-bill label="Class 9"}

Your electricity meter does not count watts; it counts the energy used. The unit on the bill is the **kilowatt-hour** (kWh): the energy used by a 1 kW device running for one hour,

$$1\ \text{kWh} = 1000\ \text{W}\times3600\ \text{s} = 3.6\times10^6\ \text{J}.$$

One "unit" of electricity is exactly 1 kWh. The name has the word *power* in it, but a kilowatt-hour is an amount of energy.

:::worked title="An air conditioner's month"
A 1.5 kW air conditioner runs 8 hours a day for 30 days.

Energy: $1.5\ \text{kW}\times(8\times30)\ \text{h} = 360$ kWh, which is 360 units. At ₹8 a unit that is ₹2880.

A 60 W bulb for the same 240 hours uses $0.06\times240 = 14.4$ kWh. The AC's *power* is 25 times the bulb's, so for the same time its energy is 25 times too.
:::

:::qc lvl=1
q: A 2 kW heater is on for 3 hours. How many units of electricity does it use?
options: ["2 units", "3 units", "6 units", "6000 units"]
answer: 2
right: Right. Energy = power × time = 2 kW × 3 h = 6 kWh, which is 6 units.
wrong: Multiply the power in kW by the time in hours: the result is in kWh, and one unit is 1 kWh.
:::

## Power from force and speed {lvl=2 id=s-fv label="Class 11"}

Engines and motors are rated by how hard they can push while moving. Link the two. A force $F$ along the motion moves a body a distance $d$ in a time $t$. The work is $Fd$, and the power is

$$P = \frac{Fd}{t} = F\,\frac{d}{t} = Fv.$$

Read it as: power is the force times the speed. This is the power at an instant, with the speed at that instant. In general $P = \vec F\cdot\vec v = Fv\cos\theta$, so a force at right angles to the velocity (the pull on a satellite in a circular orbit, the tension in a swinging string) delivers no power.

For a fixed power $P$, the force and speed trade off: $F = P/v$. This is why a car engine has gears. In first gear the car moves slowly and the force is large; in top gear it moves fast, and the force is small.

:::worked title="A cyclist against the wind"
A cyclist holds 6 m/s on a flat road and her legs deliver 150 W. At constant speed, the push on the road equals the resistance, so

$F = P/v = 150/6 = 25$ N.

Air drag grows roughly as $v^2$. If she doubled her speed to 12 m/s, the drag would be four times larger, 100 N, and the speed doubled, so the power is $100\times12 = 1200$ W, eight times more [Inference: assuming drag is the only resistance]. That is why racing cyclists tuck down and wear tight clothing.
:::

:::qc lvl=2
q: A car engine delivers 40 kW to the wheels at 20 m/s. What is the forward force on the car?
options: ["800 N", "2000 N", "8000 N", "2 N"]
answer: 1
right: Right. $F = P/v = 40\,000/20 = 2000$ N. At constant speed this equals the total resistance.
wrong: Use $P = Fv$, so $F = P/v$, with power in watts: 40 000 W divided by 20 m/s.
:::

## Efficiency: the energy that leaks away {lvl=2 id=s-eff label="Class 11"}

No machine turns all the energy it receives into the job you wanted. Some always leaves as heat, sound or vibration. The **efficiency** says what fraction comes out as useful work:

$$\eta = \frac{\text{useful energy out}}{\text{energy in}} = \frac{P_{\text{out}}}{P_{\text{in}}}.$$

Read it as: of every 100 J you pay for, $100\eta$ J do what you wanted. It is always below 1, or below 100% when written as a percentage. A good electric motor reaches about 90%; a petrol engine, about 25–30% [Unverified typical values].

:::worked title="Boiling water in a kettle"
A 1.5 kW kettle heats 1.0 kg of water from 20 °C to 100 °C. The water needs $mc\Delta T = 1.0\times4200\times80 = 336\,000$ J (taking $c = 4200$ J/(kg K)).

If the kettle is 80% efficient, it must draw $336\,000/0.80 = 420\,000$ J from the socket. At 1500 W that takes $420\,000/1500 = 280$ s, about 4.7 minutes. The missing 84 000 J warms the kettle and the air.
:::

When you know the needed *output* power, the input power you must pay for is $P_{\text{in}} = P_{\text{out}}/\eta$. A pump that must raise water at 1.3 kW and is 30% efficient draws about 4.3 kW.

:::qc lvl=2
q: A motor must deliver 600 W of useful power and is 75% efficient. What power must it draw from the supply?
options: ["450 W", "600 W", "800 W", "1350 W"]
answer: 2
right: Right. $P_{\text{in}} = P_{\text{out}}/\eta = 600/0.75 = 800$ W. The 200 W difference leaves as heat.
wrong: Efficiency is output over input, so the input must be larger than the output: divide 600 W by 0.75.
:::

## Constant power: a car from rest {lvl=3 id=s-const label="JEE"}

Many engines are best described by a fixed power rather than a fixed force. Suppose a body starts from rest and a constant power $P$ flows in. The energy gained after time $t$ is $Pt$, and that is all kinetic (no resistance), so

$$\tfrac12mv^2 = Pt\ \Rightarrow\ v = \sqrt{\frac{2P}{m}}\;t^{1/2}.$$

Read it as: the speed grows as the square root of time. Because the force is $F = P/v$, it is huge at the start and falls as the car speeds up, so the acceleration drops steadily. Integrating $v$ over time gives $x = \tfrac23\sqrt{2P/m}\,t^{3/2}$, so the distance grows as $t^{3/2}$, which is why $x = \tfrac23vt$: the average speed over the run is two-thirds of the final speed.

Compare constant force: then $a$ is constant, $v = at$, and the power $P = Fv = Fat$ grows in proportion to $t$. The work done is the area under the power–time graph.

:::figure caption="Power against time. Constant force: power rises steadily and the area under the line, the work, is a triangle, half of the final power times t. Constant power: a flat line, with area P times t."
<svg viewBox="0 0 320 200" role="img" aria-label="Power versus time graphs: a rising line for constant force and a flat line for constant power">
<path d="M50 170 L50 24 M50 170 L296 170" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<path d="M50 170 L230 54 L230 170 Z" style="fill:color-mix(in srgb,var(--phy) 22%,transparent);stroke:none"/>
<path d="M50 170 L256 38" style="fill:none;stroke:var(--phy);stroke-width:3"/>
<line x1="50" y1="54" x2="270" y2="54" style="stroke:var(--chem);stroke-width:3"/>
<line x1="230" y1="54" x2="230" y2="170" style="stroke:var(--muted);stroke-dasharray:4 4"/>
<text x="262" y="48" style="font-size:9px;fill:var(--phy)">F constant</text>
<text x="60" y="46" style="font-size:12px;fill:var(--chem)">P constant</text>
<text x="224" y="188" style="font-size:12px;fill:var(--ink)">t</text><text x="12" y="30" style="font-size:11px;fill:var(--muted)">P</text>
<text x="108" y="150" style="font-size:12px;fill:var(--ink)">work = area</text>
</svg>
:::

:::worked title="A truck from rest"
A truck of mass 8000 kg has 120 kW available, and we ignore resistance. How long to reach 15 m/s, and how far does it travel?

Kinetic energy at 15 m/s: $\tfrac12\times8000\times15^2 = 900\,000$ J. Time: $900\,000/120\,000 = 7.5$ s.

Distance: $x = \tfrac23vt = \tfrac23\times15\times7.5 = 75$ m.
:::

**Top speed.** With resistance there is a top speed, reached when the engine's push equals the resistance. If the resistance is $kv^2$ (air drag), then $P = Fv = kv^3$, so $v_{\max} = (P/k)^{1/3}$. A car with 60 kW and $k = 0.6$ N s²/m² tops out at $(10^5)^{1/3} = 46$ m/s, about 167 km/h. To go 10% faster you need 33% more power.

:::qc lvl=3
q: A car starts from rest with constant engine power and no resistance. After 4 s its speed is 10 m/s. What is its speed after 16 s?
options: ["20 m/s", "40 m/s", "30 m/s", "160 m/s"]
answer: 0
right: Right. $v \propto \sqrt t$, so four times the time gives twice the speed: 20 m/s. (With constant acceleration it would have been 40 m/s.)
wrong: Constant power gives $\tfrac12mv^2 = Pt$, so $v \propto t^{1/2}$. Four times the time gives twice the speed.
:::

## Flowing power: wind and water {lvl=3 id=s-flow label="JEE"}

Wind, rivers and jets of water carry power because they are moving mass. In time $t$ a stream of speed $v$ through an area $A$ delivers a cylinder of fluid of volume $Avt$, with mass $\rho Avt$, where $\rho$ is the density. Its kinetic energy is $\tfrac12(\rho Avt)v^2$, so the power in the stream is

$$P = \tfrac12\rho Av^3.$$

Read it as: the power depends on the *cube* of the speed. Double the wind speed and the power goes up eight times.

:::worked title="A wind turbine"
A turbine with 20 m diameter faces a wind of 8 m/s. Air density is $\rho = 1.2$ kg/m³.

Area: $A = \pi\times10^2 = 314\ \text{m}^2$. Power in the wind: $\tfrac12\times1.2\times314\times8^3 = 9.65\times10^4$ W, about 97 kW.

No turbine can capture it all. If the machine converts 35% of it into electricity, the output is about 34 kW. (There is a theoretical cap of about 59% of the wind's power, called the Betz limit [Unverified here].)
:::

:::qc lvl=3
q: The wind speed at a wind farm rises from 5 m/s to 10 m/s. By what factor does the power in the wind through the blades change?
options: ["2", "4", "8", "16"]
answer: 2
right: Right. $P \propto v^3$, and $2^3 = 8$.
wrong: The power in a moving stream is $\tfrac12\rho Av^3$. Doubling $v$ multiplies it by $2^3$.
:::

## Where does the other half go? {lvl=4 id=s-belt label="Olympiad"}

Sand falls at a steady rate $\mu$ (kilograms per second) onto a horizontal conveyor belt that is driven at a constant speed $v$. The sand lands at rest and is quickly carried along at $v$.

What force must the motor supply? In one second the belt must give $\mu$ kilograms of sand a speed $v$, so the momentum it gives per second is $\mu v$. That is a force of $F = \mu v$. The power the motor must supply is

$$P = Fv = \mu v^2.$$

But the kinetic energy that the sand gains per second is only $\tfrac12\mu v^2$. **Exactly half of the motor's energy** has gone somewhere else. It becomes heat, as the sand slips on the belt before settling at $v$. The surprise is that the answer does not depend on how rough the belt is: a rougher belt makes the slip shorter but the force larger, and the two effects cancel exactly. The same bookkeeping tells you the energy lost whenever something is brought up to speed by sliding friction.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Power is the rate of transferring energy: $P = W/t$, measured in watts (J/s). {lvl=1}
2. The same job done faster needs more power; the energy is the same. {lvl=1}
3. A kilowatt-hour is an amount of energy, $3.6\times10^6$ J. The bill counts units, each one 1 kWh. {lvl=1}
4. At any instant $P = Fv$ (more fully $\vec F\cdot\vec v$); with fixed power, force and speed trade off. {lvl=2}
5. Efficiency is useful output over total input; it is always below 100%, and the rest leaves as heat. {lvl=2}
6. Constant power from rest: $v \propto t^{1/2}$ and $x \propto t^{3/2}$; constant force: $P \propto t$. {lvl=3}
7. A flow carries power $\tfrac12\rho Av^3$, and a drag $kv^2$ limits the top speed to $(P/k)^{1/3}$. {lvl=3}
8. Adding mass to a moving belt costs $\mu v^2$ of power: half goes to the sand, half to heat. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A kilowatt-hour is not a unit of power. It is energy, 3.6 MJ. {lvl=1}
- Power is a rate: always say *per second*. Doing twice the work in twice the time is the same power. {lvl=1}
- Convert km/h to m/s before using $P = Fv$: divide by 3.6. {lvl=2}
- Efficiency is output over input, never the other way round; and the input is what you pay for. {lvl=2}
- With constant power the acceleration is not constant, so $v = u + at$ does not apply. {lvl=3}
- The power in a wind or a jet goes as $v^3$, not $v^2$: one factor of $v$ for the mass arriving per second, and $v^2$ for the energy each kilogram carries. {lvl=3}
:::
