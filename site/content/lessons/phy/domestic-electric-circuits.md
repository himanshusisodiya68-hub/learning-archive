---
title: Domestic electric circuits
summary: How electricity reaches and is shared out inside a house. Live, neutral and earth wires, the meter board, 5 A and 15 A circuits, fuses, short circuits and overloading, earthing, what 220 V AC means, wire sizes and voltage drop, fault currents, MCBs and RCDs, electric shock and the adiabatic melting of a fuse.
ncert: ["Class 10 Science · Ch 12 Magnetic Effects of Electric Current (§12.4)"]
up_to: JEE
builds_on: [Potential difference, Ohm's law, Resistors in series and parallel, Heating effect and power]
notes_prompt: Explain why a fuse in the neutral wire would leave an appliance dangerous even after it had blown, and why earthing protects you only if the earth path has a low resistance.
margin:
  - kind: history
    title: History
    text: Early electric lighting in the 1880s used fuses almost from the start. Edison's lamp systems used lead fuse wires in series with the circuits to stop overheating wires from starting fires.
  - kind: tip
    title: Board favourite
    text: "Current drawn = power ÷ 220 V. If it exceeds the circuit rating (5 A or 15 A), the fuse blows. Switch and fuse always go in the live wire."
  - kind: olympiad
    title: Deeper link
    text: A residual-current device is Faraday's law at work. Live and neutral pass through the same iron ring; only when some current leaks to earth does their net flux change, inducing an emf that trips the switch.
books:
  - { title: "NCERT Science Class X", ref: "Ch 12 Magnetic Effects of Electric Current, §12.4 Domestic Electric Circuits" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 32 Electric Current in Conductors (heating effect); Ch. 39 Alternating Current (rms values)" }
cards:
  - { front: "The three wires in a house and their NCERT colours?", back: "Live (red), neutral (black), earth (green). Live and neutral differ by 220 V; the earth wire normally carries no current." }
  - { front: "Why must the switch and the fuse be in the live wire?", back: "So that when the switch is off or the fuse has blown, the appliance is cut off from the live wire and sits at earth potential. In the neutral wire it would stay live." }
  - { front: "Short circuit versus overloading?", back: "Short circuit: live and neutral touch, R almost 0, current enormous. Overloading: too many or too powerful appliances on one circuit, total current above its rating." }
  - { front: "Peak voltage of 220 V AC mains?", back: "$V_0 = \\sqrt2\\times220 \\approx 311$ V. 220 V is the rms value, which gives the same heating as 220 V DC." }
  - { front: "When does earthing make the fuse blow?", back: "Only if the fault loop (live wiring + earth path) has a low resistance, so the fault current is several times the fuse rating. A poor earth gives a few amperes, no blow and a live body: that is what an RCD is for." }
  - { front: "How does an RCD detect a leak?", back: "Live and neutral pass through one ring. Normally their currents are equal and opposite, net flux 0. A leak to earth (about 30 mA) unbalances them, the changing flux induces an emf in a sense coil, and the device trips." }
core:
  idea: 'A house takes live (220 V rms), neutral and earth wires. Every appliance is connected in parallel between live and neutral, with each switch and fuse in the live wire, and the circuit current $I = P/V$ must stay within the rating.'
  formulas:
    - tex: 'I = \frac{P}{V}'
      label: 'Current drawn by an appliance'
    - tex: 'V_{\text{rms}} = \frac{V_0}{\sqrt2}'
      label: 'rms value of the mains voltage'
    - tex: 'I_{\text{fault}} = \frac{220}{R_L + R_E}'
      label: 'Earth-fault current'
  conditions:
    - 'Resistive appliances, so the DC formulas hold with rms values'
    - 'Fuse or breaker rated just above the normal circuit current and fitted in the live wire'
    - 'Low-resistance earth path, so that a fault current is large enough to blow the fuse'
  sign: 'A switch in the neutral wire turns an appliance off but leaves it connected to 220 V. The earth wire carries current only during a fault.'
outcomes:
  - 'Identify live, neutral and earth wires and the order of components on a meter board'
  - 'Choose a 5 A or 15 A circuit using I = P/V, and explain fuses, short circuits and overloading'
  - 'Explain earthing and why switches go in the live wire'
  - 'Convert between rms and peak values, and calculate voltage drop and heating in wires'
  - 'Calculate fault currents, explain MCBs and RCDs, and estimate the adiabatic melting time of a fuse'
---

:::hook
q: A ceiling fan is switched off at the wall. An electrician opens it up and touches a wire inside. When is this safe?
options: ["Always: the switch is off, so no current can flow", "Only if the switch is in the live wire", "Only if the switch is in the neutral wire", "Never, whatever the wiring"]
answer: 1
right: Right. A switch in the live wire disconnects the fan from the 220 V wire, so everything after it sits at earth potential. A switch in the neutral wire stops the current but leaves the fan connected to the live wire. (Electricians still switch off at the mains, because they cannot be sure how a house was wired.)
wrong: An "off" switch only breaks the circuit at one point. If that point is in the neutral wire, the fan is still joined to the live wire at 220 V, and touching it with your feet on the floor completes a circuit through you. The switch must be in the live wire.
:::

## The supply that comes into a house {lvl=1 id=s-supply label="Class 10"}

Electricity reaches a house from a pole or an underground cable through the **mains**. Two of the wires carry the supply:

- the **live** wire (usually red insulation in NCERT's description);
- the **neutral** wire (usually black).

In India the potential difference between them is **220 V**, alternating at **50 Hz**. The neutral wire is connected to the earth at the local substation, so it stays close to earth potential. The live wire is the dangerous one: it is at 220 V relative to the neutral and to the ground you stand on.

NCERT calls the live wire "positive" and the neutral "negative". That is loose language. The supply is alternating, so the live wire is above earth potential for half of each cycle and below it for the other half. What is true is that the neutral stays near 0 V, and the live wire swings either side of it.

A third wire, the **earth** wire (green insulation), runs alongside. It is connected to a metal plate buried deep in the ground near the house. It carries no current in normal use; it is there for safety, as later sections explain.

[Unverified] Newer cables in India and elsewhere follow the international colours: brown for live, blue for neutral, and green-with-yellow for earth. Older wiring and NCERT use red, black and green. Never trust colours alone; test before touching.

**The meter board.** At the entry point the wires pass in this order:

1. a **main fuse** (belonging to the electricity company);
2. the **electricity meter**, which records the energy used in kilowatt hours;
3. the **main switch** and a **distribution box**, where the supply splits into separate circuits, each with its own fuse or circuit breaker.

:::figure caption="A house circuit. Live (red), neutral (black) and earth (green, dashed) run from the meter board. Every appliance is connected between live and neutral, in parallel; every switch and fuse is in the live wire; the 15 A socket also has an earth connection."
<svg viewBox="0 0 420 240" role="img" aria-label="House wiring: live, neutral and earth wires from the meter and distribution box to two bulbs in parallel and a fused, switched, earthed socket">
<text x="2" y="44">L</text><text x="2" y="166">N</text><text x="2" y="214">E</text>
<line x1="12" y1="50" x2="50" y2="50" style="stroke:#c0392b;stroke-width:2"/>
<rect x="50" y="44" width="24" height="12" style="fill:none;stroke:var(--ink)"/>
<line x1="74" y1="50" x2="95" y2="50" style="stroke:#c0392b;stroke-width:2"/>
<text x="34" y="36">main fuse</text>
<line x1="12" y1="170" x2="95" y2="170" style="stroke:var(--ink);stroke-width:2"/>
<rect x="95" y="30" width="55" height="160" style="fill:none;stroke:var(--ink)"/>
<text x="104" y="114">meter</text>
<line x1="150" y1="50" x2="170" y2="50" style="stroke:#c0392b;stroke-width:2"/>
<line x1="150" y1="170" x2="170" y2="170" style="stroke:var(--ink);stroke-width:2"/>
<rect x="170" y="30" width="55" height="160" style="fill:none;stroke:var(--ink)"/>
<text x="176" y="104">main</text><text x="176" y="120">switch,</text><text x="176" y="136">fuses</text>
<line x1="225" y1="50" x2="400" y2="50" style="stroke:#c0392b;stroke-width:2"/>
<line x1="225" y1="170" x2="400" y2="170" style="stroke:var(--ink);stroke-width:2"/>
<line x1="30" y1="210" x2="400" y2="210" style="stroke:#2e8b57;stroke-width:2;stroke-dasharray:6 4"/>
<line x1="30" y1="210" x2="30" y2="224" style="stroke:#2e8b57;stroke-width:2"/>
<line x1="20" y1="224" x2="40" y2="224" style="stroke:#2e8b57;stroke-width:2"/><line x1="24" y1="229" x2="36" y2="229" style="stroke:#2e8b57;stroke-width:2"/><line x1="28" y1="234" x2="32" y2="234" style="stroke:#2e8b57;stroke-width:2"/>
<text x="44" y="232">earth plate</text>
<line class="ln" x1="250" y1="50" x2="250" y2="72"/><line class="ln" x1="250" y1="72" x2="262" y2="86"/><line class="ln" x1="250" y1="90" x2="250" y2="113"/>
<circle cx="250" cy="125" r="12" style="fill:color-mix(in srgb, var(--phy) 30%, transparent);stroke:var(--ink)"/><line class="ln" x1="242" y1="117" x2="258" y2="133"/><line class="ln" x1="258" y1="117" x2="242" y2="133"/>
<line class="ln" x1="250" y1="137" x2="250" y2="170"/>
<line class="ln" x1="305" y1="50" x2="305" y2="72"/><line class="ln" x1="305" y1="72" x2="317" y2="86"/><line class="ln" x1="305" y1="90" x2="305" y2="113"/>
<circle cx="305" cy="125" r="12" style="fill:color-mix(in srgb, var(--phy) 30%, transparent);stroke:var(--ink)"/><line class="ln" x1="297" y1="117" x2="313" y2="133"/><line class="ln" x1="313" y1="117" x2="297" y2="133"/>
<line class="ln" x1="305" y1="137" x2="305" y2="170"/>
<text x="236" y="22">5 A circuit</text>
<line class="ln" x1="370" y1="50" x2="370" y2="60"/><rect x="364" y="60" width="12" height="18" style="fill:none;stroke:var(--ink)"/>
<line class="ln" x1="370" y1="78" x2="370" y2="88"/><line class="ln" x1="370" y1="88" x2="382" y2="100"/><line class="ln" x1="370" y1="104" x2="370" y2="116"/>
<rect x="355" y="116" width="30" height="26" style="fill:none;stroke:var(--ink)"/>
<circle cx="364" cy="124" r="2.5" style="fill:var(--ink)"/><circle cx="376" cy="124" r="2.5" style="fill:var(--ink)"/><circle cx="370" cy="135" r="2.5" style="fill:var(--ink)"/>
<line class="ln" x1="370" y1="142" x2="370" y2="170"/>
<line x1="385" y1="135" x2="400" y2="135" style="stroke:#2e8b57;stroke-width:2"/><line x1="400" y1="135" x2="400" y2="210" style="stroke:#2e8b57;stroke-width:2"/>
<text x="330" y="22">15 A socket</text>
<text x="333" y="72">fuse</text><text x="268" y="70">switch</text>
</svg>
:::

## Why appliances are in parallel, and why the switch goes in the live wire {lvl=1 id=s-parallel label="Class 10"}

Every appliance in a house is connected **between the live and the neutral wire**, which means they are all **in parallel**. The reasons follow from what you know about series and parallel circuits:

- In parallel, each appliance gets the **full 220 V**, the voltage it was designed for. In series the 220 V would be shared, and a 60 W bulb in series with a 2 kW heater would barely glow.
- Each appliance draws its own current, $I = P/V$, and can be **switched on and off independently**.
- If one appliance fails or its fuse blows, the **others keep working**. In series, one break stops everything.

The price is that the currents **add up** in the wires leading back to the meter. A house with many appliances on draws a large total current, which is why each circuit has a current rating.

**Switches and fuses go in the live wire.** A switch or fuse works by breaking the circuit. Where you break it matters:

- Break the **live** wire, and everything downstream is disconnected from the 220 V wire. It is joined only to the neutral, which is near earth potential. It is safe to touch.
- Break the **neutral** wire, and the current stops, but the appliance is still joined to the live wire. Its parts are at 220 V. A person who touches them while standing on the floor becomes the path to earth.

So a switch or fuse in the neutral wire would make the appliance *look* off while leaving it dangerous.

:::qc
q: A bulb's switch has been wrongly fitted in the neutral wire. With the switch off, which statement is true?
options: ["The bulb is off and its holder is safe to touch", "The bulb is off but its holder terminals are still at 220 V", "The bulb stays on", "The fuse will blow"]
answer: 1
right: Right. No current flows, so the bulb is off, but the holder is still connected to the live wire. Touching it can give a shock.
wrong: Breaking the neutral stops the current, so the bulb goes off. But the bulb is still joined to the live wire, so its terminals stay at mains potential. That is why switches must be in the live wire.
:::

## Two circuits: 5 A and 15 A {lvl=1 id=s-ratings label="Class 10"}

Houses usually have two kinds of circuit:

- a **5 A** circuit for lights, fans and small appliances;
- a **15 A** circuit for high-power appliances: geysers, room heaters, air coolers, electric ovens and air conditioners.

To decide which circuit an appliance needs, find the current it draws:

$$I = \frac{P}{V}.$$

| Appliance | Power | Current on 220 V |
|---|---|---|
| LED bulb | 10 W | 0.045 A |
| Ceiling fan | 75 W | 0.34 A |
| Electric iron | 1 kW | 4.5 A |
| Geyser | 2 kW | 9.1 A |
| Room heater | 2.5 kW | 11.4 A |

An iron is close to the 5 A limit by itself, and a 2 kW geyser is well beyond it. So high-power appliances go on the 15 A circuit, which uses **thicker wires**. A thicker wire has less resistance, so the same current produces less heat in it ($P = I^2R$), and it can carry a larger current without overheating.

:::worked title="A current budget"
A kitchen circuit rated 15 A has a 2 kW induction cooker, a 1.2 kW microwave and a 150 W refrigerator. Total power $= 2000 + 1200 + 150 = 3350$ W, so $I = 3350/220 = 15.2$ A. Using all three at once slightly overloads the circuit, and its fuse or breaker may trip. Not using the microwave and cooker together keeps it at about 9.8 A.
:::

:::qc
q: An electric oven rated 2 kW is plugged into a 5 A circuit on 220 V. What happens?
options: ["It works normally", "It works at reduced power", "The circuit is overloaded and the fuse blows", "The voltage rises"]
answer: 2
right: Right. It draws 2000/220 = 9.1 A, nearly twice the 5 A rating, so the fuse melts and cuts off the circuit.
wrong: Find the current: 2000/220 = 9.1 A. That is far above the 5 A rating, so the fuse blows.
:::

## Fuses, short circuits and overloading {lvl=1 id=s-fuse label="Class 10"}

A **fuse** is a short piece of wire with a low melting point, placed **in series** with the live wire of a circuit. Its rating is the current it can carry indefinitely. If the current goes well above the rating, the Joule heat $I^2Rt$ melts the wire, which breaks the circuit before the house wiring overheats. (The heating lesson explains the physics of the fuse wire itself.)

Two faults make the current rise dangerously.

**Short circuit.** The live and neutral wires touch directly, for example where insulation is damaged or inside a faulty appliance. The appliance's resistance is bypassed, so the only resistance left is that of the wires themselves, a fraction of an ohm. By $I = V/R$, the current rises **enormously**, to hundreds of amperes. Without a fuse, wires would glow and could start a fire.

**Overloading.** Too many appliances, or too powerful an appliance, on one circuit. Each appliance is working normally, but the currents add up to more than the circuit's rating. Plugging many appliances into one socket through adaptors is the classic cause. A rise in the supply voltage also increases every current.

:::note title="Use the right fuse" tone=warn
A fuse must be rated just above the normal current of the circuit it protects. Replacing a blown 5 A fuse with a thick copper wire or a 15 A fuse "so it won't blow again" removes the protection: the next fault will heat the wiring instead.
:::

:::qc
q: In a short circuit, what happens to the current in the circuit?
options: ["It reduces substantially", "It does not change", "It increases heavily", "It reverses direction"]
answer: 2
right: Right. Live and neutral touch, the resistance drops to almost zero, and I = V/R becomes very large.
wrong: A short circuit bypasses the appliance, so the circuit resistance falls to the resistance of the wires alone. With R tiny, I = V/R is huge.
:::

## Earthing {lvl=1 id=s-earth label="Class 10"}

Many appliances have a **metal body**: an iron, a toaster, a refrigerator, a washing machine, a table fan. Inside, the live wire runs close to that body. If its insulation wears through and the live wire touches the metal, the whole body is at 220 V. Someone who touches it with their feet on the ground would carry current to earth through their own body.

**Earthing** prevents this. The metal body is joined by the **earth wire** (the third, longer pin of a three-pin plug) to the earth plate buried near the house. Now:

- the body is held at **earth potential**, so touching it is safe;
- if the live wire touches the body, a large current flows straight to earth through the low-resistance earth wire. This **fault current** blows the fuse, which cuts off the live wire and announces that something is wrong.

:::figure caption="An earth fault. The live wire touches the metal body. The fault current (arrows) flows through the earth wire to the earth plate and back to the earthed neutral at the substation, and is large enough to blow the fuse. The body stays near earth potential, so the person touching it is protected."
<svg viewBox="0 0 360 200" role="img" aria-label="Live wire touching the metal body of an appliance, fault current flowing through the earth wire to the ground">
<line x1="10" y1="60" x2="60" y2="60" style="stroke:#c0392b;stroke-width:2"/>
<rect x="60" y="54" width="24" height="12" style="fill:none;stroke:var(--ink)"/><text x="60" y="46">fuse</text>
<line x1="84" y1="60" x2="160" y2="60" style="stroke:#c0392b;stroke-width:2"/>
<line x1="10" y1="100" x2="160" y2="100" style="stroke:var(--ink);stroke-width:2"/>
<text x="10" y="54">L</text><text x="10" y="94">N</text>
<rect x="150" y="40" width="120" height="80" rx="4" style="fill:color-mix(in srgb, var(--muted) 15%, transparent);stroke:var(--ink);stroke-width:2"/>
<text x="178" y="112">metal body</text>
<path class="pen" d="M160 60 L176 52 L170 60 L186 50" style="fill:none"/>
<text x="190" y="54">fault</text>
<line x1="210" y1="120" x2="210" y2="170" style="stroke:#2e8b57;stroke-width:2"/>
<text x="216" y="150">earth wire</text>
<line x1="196" y1="170" x2="224" y2="170" style="stroke:#2e8b57;stroke-width:2"/><line x1="201" y1="176" x2="219" y2="176" style="stroke:#2e8b57;stroke-width:2"/><line x1="206" y1="182" x2="214" y2="182" style="stroke:#2e8b57;stroke-width:2"/>
<line class="faint" x1="0" y1="188" x2="360" y2="188"/>
<path class="ray" d="M100 66 L140 66" style="fill:none"/><path class="ray" d="M134 62 L140 66 L134 70" style="fill:none"/>
<path class="ray" d="M202 128 L202 160" style="fill:none"/><path class="ray" d="M198 154 L202 160 L206 154" style="fill:none"/>
<circle cx="315" cy="78" r="9" style="fill:none;stroke:var(--ink)"/>
<line class="ln" x1="315" y1="87" x2="315" y2="140"/><line class="ln" x1="315" y1="100" x2="272" y2="88"/>
<line class="ln" x1="315" y1="140" x2="303" y2="186"/><line class="ln" x1="315" y1="140" x2="327" y2="186"/>
</svg>
:::

So earthing has two jobs: keep the metal body at a safe potential, and turn a dangerous hidden fault into a large, obvious current that operates the fuse. The JEE-level section below shows that the second job works only if the earth path really has a low resistance.

:::qc
q: Why is the earth wire connected to the metal body of an electric iron?
options: ["To complete the circuit so the iron heats up", "To carry any leakage current safely to the ground and keep the body at earth potential", "To reduce the electricity bill", "To raise the voltage across the heating element"]
answer: 1
right: Right. In normal use the earth wire carries no current. It is a safety path that keeps the body at earth potential and lets a fault current blow the fuse.
wrong: The iron's circuit is between live and neutral. The earth wire is only a safety path: it keeps the metal body at earth potential and carries any fault current to the ground.
:::

## What "220 V AC" means {lvl=2 id=s-ac label="Class 12"}

The mains voltage is not steady. It varies sinusoidally:

$$v(t) = V_0\sin(2\pi f t),\qquad f = 50\ \text{Hz}.$$

It reverses 100 times a second (twice per cycle). Then what is "220 V"?

The useful question is: what steady (DC) voltage would heat a resistor at the same average rate? The instantaneous power in a resistor is $v^2/R = (V_0^2/R)\sin^2(2\pi ft)$. Over a cycle, $\sin^2$ averages to $\tfrac12$ (it and $\cos^2$ add to 1 and have the same average). So the average power is $V_0^2/2R$. A steady voltage $V$ gives $V^2/R$. They match when

:::law caption="Root-mean-square (rms) value of a sinusoidal voltage or current."
$$V_{\text{rms}} = \frac{V_0}{\sqrt2},\qquad I_{\text{rms}} = \frac{I_0}{\sqrt2}$$
:::

Mains "220 V" is the **rms** value. The peak is $V_0 = 220\sqrt2 \approx 311$ V. For a resistive appliance all the DC formulas work with rms values: $P = V_{\text{rms}}I_{\text{rms}}$, $I = P/V$, and so on. Fuse and wire ratings are rms currents. (The alternating-current leaf develops this, along with what changes for motors and capacitors, where the current is out of step with the voltage.)

:::qc
q: The live wire of a 220 V, 50 Hz supply reaches what largest potential relative to the neutral?
options: ["220 V", "about 311 V", "440 V", "about 156 V"]
answer: 1
right: Right. 220 V is the rms value; the peak is 220 × √2 ≈ 311 V, reached 50 times a second in each direction.
wrong: Mains voltages are quoted as rms values. The peak is √2 times larger: 220 × 1.414 ≈ 311 V.
:::

## Wire sizes, voltage drop and extension leads {lvl=2 id=s-wires label="Class 12"}

House wires are not perfect conductors. A copper wire of cross-section $A$ has resistance $\rho/A$ per metre ($\rho \approx 1.7\times10^{-8}\ \Omega$ m), and heats at

$$\frac{P}{l} = \frac{I^2\rho}{A}\quad\text{watts per metre}.$$

Compare a 1.5 mm² wire carrying 5 A and 15 A: $0.28$ W/m and $2.55$ W/m. Tripling the current gives nine times the heating. A 2.5 mm² wire at 15 A heats at $1.53$ W/m. That is why 15 A circuits use thicker wire: the heat per metre must stay low enough for the insulation, buried in a wall where it cannot cool easily, to stay well below its softening temperature.

[Unverified] Common practice in India is about 1.5 mm² copper for lighting circuits and 2.5–4 mm² for power circuits. Follow the local wiring code for real installations.

**Voltage drop.** The current goes out along the live wire and back along the neutral, so the wire length that counts is **twice** the distance. The wire resistance is in series with the appliance and takes part of the 220 V.

:::worked title="A 10 m extension lead"
A 2 kW heater (rated 220 V, so $R = 220^2/2000 = 24.2\ \Omega$) runs through a 10 m lead whose copper cores are 1 mm² each. Lead resistance $= 1.7\times10^{-8}\times20/10^{-6} = 0.34\ \Omega$. Current $= 220/24.54 = 8.96$ A. Drop across the lead $= 8.96\times0.34 = 3.0$ V, and heat in the lead $= 8.96^2\times0.34 = 27$ W.

27 W spread along a straight 10 m lead is harmless. Wound tightly on its drum, the same 27 W is trapped in a small volume and can melt the insulation. That is why heavy loads should never be run from a coiled extension lead.
:::

:::qc
q: An extension lead is replaced by one twice as long with the same wire. For the same appliance current, the heat produced in the lead
options: ["halves", "stays the same", "doubles", "quadruples"]
answer: 2
right: Right. Its resistance doubles, and at the same current the heat I²R doubles.
wrong: Resistance is proportional to length, so it doubles. At the same current the heat I²R also doubles.
:::

## The bill, and standby power {lvl=2 id=s-bill label="Class 12"}

The meter adds up energy in **kilowatt hours** (units): $1$ kW h $= 3.6\times10^6$ J. The heating-effect lesson works out bills; one point specific to houses is **standby power**.

A television, set-top box or charger that is "off" but plugged in often keeps drawing a few watts, all day and all year. A device drawing 5 W continuously uses $5\times24\times365 = 43\,800$ W h $\approx 44$ units a year. Several such devices together can match a fridge's lights or a fan used for months. Switching off at the socket cuts it to zero.

## Fault currents: when earthing actually works {lvl=3 id=s-fault label="JEE"}

Model the circuit during an earth fault. The supply drives current round a **fault loop**: out through the live wiring (resistance $R_L$, including the supply transformer and cables), into the metal body, through the earth wire and the ground (total $R_E$), and back to the substation's earthed neutral.

$$I_{\text{fault}} = \frac{220}{R_L + R_E},\qquad V_{\text{body}} = I_{\text{fault}}R_E = 220\,\frac{R_E}{R_L+R_E}.$$

$V_{\text{body}}$ is the potential of the metal body relative to the ground under a person's feet.

**Good earth.** Take $R_L = 0.6\ \Omega$ and $R_E = 0.4\ \Omega$. Then $I_{\text{fault}} = 220$ A, roughly 15 times the rating of a 15 A fuse, which blows within a fraction of a second. The body rises to $88$ V, but only for that brief moment.

**Poor earth.** Suppose the earth rod is in dry soil and $R_E = 50\ \Omega$. Then $I_{\text{fault}} = 220/50.6 = 4.3$ A. That does not even reach the 15 A rating, so **the fuse never blows**. Meanwhile the body sits at $220\times50/50.6 = 217$ V, almost full mains, indefinitely. A person touching it is a resistance (say 2 kΩ, [Unverified] typical figure) in parallel with $R_E$. They barely change the circuit, but they carry about $217/2000 \approx 0.11$ A, enough to be lethal.

:::figure caption="Equivalent circuit of an earth fault. The body node is joined to the ground through the earth path R_E; a person touching the body is a second path in parallel. The fuse sees the total fault current, which is set mainly by R_L + R_E."
<svg viewBox="0 0 360 180" role="img" aria-label="Fault loop: source, live resistance, body node, earth resistance and person resistance in parallel to ground">
<circle cx="40" cy="90" r="18" style="fill:none;stroke:var(--ink)"/><text x="30" y="95">~</text><text x="8" y="60">220 V</text>
<line class="ln" x1="40" y1="72" x2="40" y2="30"/><line class="ln" x1="40" y1="30" x2="80" y2="30"/>
<rect x="80" y="24" width="20" height="12" style="fill:none;stroke:var(--ink)"/><text x="78" y="18">fuse</text>
<line class="ln" x1="100" y1="30" x2="130" y2="30"/>
<path class="ln" d="M130 30 l6 -8 l8 16 l8 -16 l8 16 l8 -16 l8 16 l6 -8" style="fill:none"/><text x="148" y="18">R_L</text>
<line class="ln" x1="182" y1="30" x2="230" y2="30"/><circle cx="230" cy="30" r="3" style="fill:var(--ink)"/><text x="236" y="26">body</text>
<line class="ln" x1="230" y1="30" x2="230" y2="60"/><line class="ln" x1="200" y1="60" x2="300" y2="60"/>
<line class="ln" x1="200" y1="60" x2="200" y2="70"/><path class="ln" d="M200 70 l-8 5 l16 8 l-16 8 l16 8 l-16 8 l8 5" style="fill:none"/><line class="ln" x1="200" y1="112" x2="200" y2="140"/><text x="164" y="96">R_E</text>
<line class="ln" x1="300" y1="60" x2="300" y2="70"/><path class="ln" d="M300 70 l-8 5 l16 8 l-16 8 l16 8 l-16 8 l8 5" style="fill:none"/><line class="ln" x1="300" y1="112" x2="300" y2="140"/><text x="312" y="96">person</text>
<line class="ln" x1="200" y1="140" x2="300" y2="140"/><line class="ln" x1="200" y1="140" x2="40" y2="140"/><line class="ln" x1="40" y1="140" x2="40" y2="108"/>
<text x="70" y="160">ground and earthed neutral</text>
</svg>
:::

The lesson: earthing protects you through the fuse only if $R_L + R_E$ is small enough that $220/(R_L+R_E)$ is several times the fuse rating. [Inference] For a 15 A fuse to blow quickly you would want a fault current of the order of 50–100 A, so a loop resistance of a few ohms at most. Earth electrodes need periodic testing for this reason, and where a low earth resistance cannot be guaranteed, an RCD (next section) is used.

**Short circuit current.** A live-to-neutral short has no appliance and no earth path in the loop, only the wiring and the supply. With a loop resistance of $0.5\ \Omega$ [Inference: plausible order of magnitude for a house near its transformer], $I = 220/0.5 = 440$ A. The heat in a wire grows as $I^2$, so the wiring heats about $(440/15)^2 \approx 860$ times faster than at its full rating. The fuse has milliseconds to act, not minutes.

:::qc
q: A metal-bodied heater develops an earth fault. The live wiring has resistance 1 Ω and the earth path 21 Ω. What is the fault current, and does a 15 A fuse blow?
options: ["220 A; yes", "10 A; no", "10.5 A; no", "22 A; yes"]
answer: 1
right: Right. I = 220/(1 + 21) = 10 A, below the fuse rating, so it does not blow, and the body sits at 10 × 21 = 210 V. A dangerous fault that the fuse cannot see.
wrong: The fault loop is R_L + R_E = 22 Ω, so I = 220/22 = 10 A. That is below 15 A: the fuse does not blow, and the body sits at 210 V.
:::

## Circuit breakers and residual-current devices {lvl=3 id=s-mcb label="JEE"}

Fuses must be replaced after every fault. Modern distribution boxes use resettable switches instead.

**Miniature circuit breaker (MCB).** It replaces the fuse and has two trip mechanisms for the two kinds of overcurrent:

- **Thermal trip** (for overloads): the current heats a **bimetallic strip**, two metals with different expansion coefficients bonded together. It bends as it warms, and past a set point it releases a spring-loaded latch. Being thermal, it is slow: a 20–50% overload takes seconds to minutes, just as the wiring itself takes time to overheat.
- **Magnetic trip** (for short circuits): the current also passes through a small **solenoid**. A huge current makes a strong enough field to pull an iron plunger that knocks the latch open within milliseconds. [Unverified] Common household MCBs trip magnetically at roughly 3–5 or 5–10 times their rated current, depending on their type.

An MCB, like a fuse, responds only to the **size** of the current in the live wire. It cannot tell a 4 A kettle from a 4 A leak through a person.

**Residual-current device (RCD, also ELCB or RCCB).** It responds to a **difference** of currents. In a healthy circuit every coulomb that goes out along the live wire comes back along the neutral: $I_L = I_N$ at every instant. If some current leaks to earth, whether through a faulty earth path or through a person, then $I_L - I_N = I_{\text{leak}} \neq 0$.

The RCD passes both wires through one iron ring. Their magnetic fields in the ring are opposite, so the net flux depends only on $I_L - I_N$. Normally this is zero. A leak produces a net alternating flux, which induces an emf in a small **sense coil** wound on the ring (Faraday's law, developed in the electromagnetic-induction leaf). That emf drives a relay which opens both wires.

:::figure caption="Principle of an RCD. Live and neutral pass through the same iron ring in opposite directions. Their fluxes cancel unless some current leaks to earth; then the net alternating flux induces an emf in the sense coil and the relay trips."
<svg viewBox="0 0 360 200" role="img" aria-label="Residual-current device: live and neutral wires through a ring core with a sense coil connected to a trip relay">
<ellipse cx="160" cy="100" rx="50" ry="70" style="fill:none;stroke:var(--muted);stroke-width:12"/>
<line x1="20" y1="90" x2="300" y2="90" style="stroke:#c0392b;stroke-width:2"/>
<line x1="20" y1="112" x2="300" y2="112" style="stroke:var(--ink);stroke-width:2"/>
<path class="ray" d="M50 84 L80 84 M74 80 L80 84 L74 88" style="fill:none"/><text x="40" y="76">I_L</text>
<path class="ray" d="M80 120 L50 120 M56 116 L50 120 L56 124" style="fill:none"/><text x="40" y="138">I_N</text>
<path class="ln" d="M204 60 q12 4 0 8 q12 4 0 8 q12 4 0 8" style="fill:none"/>
<line class="ln" x1="210" y1="62" x2="250" y2="40"/><line class="ln" x1="210" y1="82" x2="250" y2="56"/>
<rect x="250" y="30" width="70" height="34" style="fill:none;stroke:var(--ink)"/><text x="258" y="52">trip relay</text>
<text x="96" y="192">net flux ∝ I_L − I_N</text>
<text x="226" y="84">sense coil</text>
</svg>
:::

[Unverified] RCDs for personal protection are usually set to trip at a residual current of 30 mA, within a few tens of milliseconds. That is far below the current that would operate any fuse, which is why an RCD protects a person who touches a live part even when no earth fault current is large enough to blow a fuse.

What an RCD does **not** catch: a person who touches both the live and the neutral, with no path to earth. The current goes out through the live wire and returns through the neutral, so $I_L = I_N$ and the device sees nothing. Only insulation and care protect against that.

:::qc
q: A person touches a live wire while standing on a damp floor, and 50 mA flows through them to earth. Which device trips?
options: ["A 15 A fuse", "A 6 A MCB", "A 30 mA RCD", "None of them"]
answer: 2
right: Right. 50 mA is negligible to a fuse or MCB, but it makes I_L − I_N = 50 mA, above the 30 mA threshold of the RCD.
wrong: Fuses and MCBs need amperes. The RCD compares live and neutral currents; a 50 mA leak to earth unbalances them by 50 mA, which exceeds its 30 mA setting.
:::

## Electric shock: current, not voltage {lvl=3 id=s-shock label="JEE"}

Harm comes from the **current through the body**, especially through the chest, because it disturbs nerves and the rhythm of the heart. Voltage matters only because it drives that current through the body's resistance: $I = V/R_{\text{body}}$.

[Unverified] Rough figures often quoted for 50 Hz AC, hand to hand or hand to foot:

- about 1 mA: just felt as a tingle;
- about 10 mA: muscles contract and a person may be unable to let go of the conductor;
- tens of mA upwards through the chest, for a fraction of a second or more: risk of ventricular fibrillation (the heart quivers instead of pumping), which is often fatal.

The body's resistance is mostly in the skin. [Unverified] Dry skin can give tens of kilohms or more; wet skin or a cut can bring it down to around 1 kΩ. At 220 V, 100 kΩ gives about 2 mA, but 1 kΩ gives 220 mA. This is why water and electricity are such a bad combination, and why bathrooms and kitchens need RCDs most.

**Why a bird on a power line is safe.** Both its feet are on the same wire, a few centimetres apart. The potential difference between them is only the drop along a few centimetres of thick conductor, a tiny fraction of a volt. No significant current flows through the bird. If it touched a second wire or an earthed pole at the same time, it would be electrocuted.

## How fast does a fuse melt? {lvl=4 id=s-adiabatic label="Olympiad"}

The heating lesson found that a long wire melts at a steady current $I \propto r^{3/2}$, set by the balance between heat produced and heat lost through its surface. That is the slow end of a fuse's behaviour. In a short circuit the current is so large that the wire melts in milliseconds, far too fast to lose heat. Then the heating is **adiabatic**: every joule stays in the wire.

Per unit volume, the heating rate is $\rho J^2 = \rho I^2/A^2$, and raising the wire to its melting point needs $d\,c\,\Delta T$ per unit volume ($d$ density, $c$ specific heat). So

:::law caption="Adiabatic melting time of a wire of cross-section A (resistivity taken constant, latent heat neglected)."
$$t = \frac{d\,c\,\Delta T\,A^2}{\rho\,I^2}\qquad\Longleftrightarrow\qquad I^2t = \frac{d\,c\,\Delta T}{\rho}\,A^2$$
:::

The quantity $I^2t$ is fixed for a given wire: doubling the fault current melts it **four times faster**. This is why fuse makers quote an "$I^2t$" value, and why a thin fuse protects thick wiring. A cable of larger area can absorb a much larger $I^2t$ (it scales as $A^2$) before it is damaged, so the fuse melts first.

:::worked title="A copper wire in a 500 A short"
Copper: $d = 8900$ kg m⁻³, $c = 385$ J kg⁻¹ K⁻¹, $\rho = 1.7\times10^{-8}\ \Omega$ m, melting point 1085 °C. A wire of radius 0.2 mm ($A = 1.26\times10^{-7}$ m²) starts at 25 °C. With $I = 500$ A,

$$t = \frac{8900\times385\times1060\times(1.26\times10^{-7})^2}{1.7\times10^{-8}\times500^2} \approx 0.013\ \text{s}.$$

About 13 ms, less than one cycle of the mains.
:::

[Inference] Two effects pull in opposite directions. The resistivity of copper rises several-fold as it heats, which makes melting faster than this estimate. The latent heat of fusion must also be supplied before the wire actually parts, which makes it slower. The formula gives the order of magnitude and, more usefully, the scaling.

The full **time-current curve** of a fuse joins the two regimes. At low currents the wire reaches a steady temperature and never melts, below a threshold set by the cooling balance. Just above the threshold, melting takes seconds to minutes. At large currents, $t \propto 1/I^2$. Fuses in series are **discriminated** by choosing the one nearest the fault with the smaller $I^2t$, so that it blows first and the rest of the house stays on.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The mains has a live wire (220 V relative to the neutral), a neutral wire (earthed at the substation) and an earth wire (to a plate in the ground near the house). {lvl=1}
2. Meter board order: main fuse, meter, main switch and distribution box, then separate circuits each with its own fuse or breaker. {lvl=1}
3. Appliances are in parallel, so each gets 220 V and works independently; the currents add in the supply wires. {lvl=1}
4. Switches and fuses go in the live wire, so that "off" means disconnected from 220 V. {lvl=1}
5. $I = P/220$ decides the circuit: 5 A for lights and fans, 15 A (thicker wire) for geysers, heaters and ovens. {lvl=1}
6. Short circuit: live and neutral touch, R almost 0, huge current. Overloading: total current above the rating. Both melt the fuse. {lvl=1}
7. Earthing keeps metal bodies at earth potential and turns an earth fault into a current large enough to blow the fuse. {lvl=1}
8. 220 V is the rms value; the peak is $220\sqrt2 \approx 311$ V. Wire heating per metre is $I^2\rho/A$, and the lead length counts twice. {lvl=2}
9. Fault current $= 220/(R_L + R_E)$: a poor earth gives a small current, no fuse action and a live body at almost 220 V. {lvl=3}
10. MCBs trip thermally (overload) or magnetically (short); RCDs trip on $I_L - I_N$ of about 30 mA through electromagnetic induction. {lvl=3}
11. Shock depends on current, $V/R_{\text{body}}$; wet skin lowers $R$ enormously. {lvl=3}
12. Adiabatic melting: $I^2t = d\,c\,\Delta T\,A^2/\rho$, so melting time goes as $A^2/I^2$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- For a circuit, add the powers and divide by 220 V; compare the total current with the rating, not each appliance separately. {lvl=1}
- Do not say the earth wire carries current in normal use. It carries current only during a fault. {lvl=1}
- Overloading and short circuit are different faults; both blow the fuse, for different reasons. {lvl=1}
- A switch in the neutral turns the appliance off but leaves it live. {lvl=1}
- Use rms values throughout for resistive appliances; the 311 V peak matters for insulation and shocks, not for power. {lvl=2}
- In voltage-drop problems, the wire length is out and back: twice the lead length. {lvl=2}
- Earthing alone does not guarantee the fuse blows: check $220/(R_L + R_E)$ against the fuse rating. {lvl=3}
- An RCD cannot detect current that goes in through the live and out through the neutral, even through a person. {lvl=3}
:::
