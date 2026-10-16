---
title: Alternating current and the AC generator
summary: Why the mains alternates, the generator emf NBAω sin ωt from Faraday's law, peak, average and rms values, power in a resistor, rms of rectified, square, triangular and offset waveforms, how AC meters respond, phasors and adding sinusoids, the mean of a product, and three-phase supply.
ncert: ["Class 12 Physics · Ch 6 Electromagnetic Induction (§6.8)", "Class 12 Physics · Ch 7 Alternating Current (§7.1–7.3)"]
up_to: Olympiad
builds_on: [Electromagnetic induction, Heating effect and power, Ohm's law]
notes_prompt: Explain in your own words why the average of an alternating current over a cycle is zero and yet it heats a resistor, and why the rms value (not the average) is the right single number to describe it.
margin:
  - kind: history
    title: History
    text: "In the late 1880s Edison's companies backed DC distribution while Westinghouse, using Tesla's AC induction motor and polyphase patents, backed AC. AC won largely because transformers make high-voltage transmission cheap. [Unverified: names and dates recalled from memory.]"
  - kind: tip
    title: Mains numbers
    text: "NCERT uses 220 V, 50 Hz for Indian mains: peak 311 V, period 20 ms, and 100 zero crossings per second. The current Indian standard is often quoted as 230 V. [Unverified: from memory.] Unless told otherwise, every AC voltage or current rating is an rms value."
  - kind: olympiad
    title: Olympiad link
    text: "The mean of a product of two same-frequency sinusoids is ½AB cos φ, and sinusoids of different frequencies are orthogonal (their product averages to zero). These two facts give the rms of any sum of sinusoids, and later the power factor."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch. 6 §6.8 AC generator; Ch. 7 §7.1–7.3" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 39 Alternating Current (rms values, phasors)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 4 · 4.5 Electric oscillations (AC problems)" }
cards:
  - { front: "Emf of a coil of N turns, area A, rotating at ω in a uniform field B (axis perpendicular to B)?", back: "$\\varepsilon = NBA\\omega\\sin\\omega t$, peak $\\varepsilon_0 = NBA\\omega$. The emf is largest when the coil's plane is parallel to B (flux zero, but changing fastest)." }
  - { front: "Why is the rms value of a sinusoid its peak divided by √2?", back: "The mean of $\\sin^2\\omega t$ over a cycle is ½ (because $\\sin^2 + \\cos^2 = 1$ and both have the same average). So $\\overline{v^2} = V_0^2/2$ and $V_{rms} = V_0/\\sqrt2$." }
  - { front: "Average power in a resistor on AC?", back: "$\\bar P = I_{rms}^2R = V_{rms}^2/R = V_{rms}I_{rms} = \\tfrac12V_0I_0$. The instantaneous power pulsates at twice the supply frequency." }
  - { front: "rms of half-wave rectified, full-wave rectified, square and triangular waves of peak V₀?", back: "$V_0/2$, $V_0/\\sqrt2$, $V_0$, $V_0/\\sqrt3$." }
  - { front: "rms of v = V_d + V₀ sin ωt?", back: "$\\sqrt{V_d^2 + V_0^2/2}$. The cross term $2V_dV_0\\sin\\omega t$ averages to zero." }
  - { front: "Amplitude of A₁ sin ωt + A₂ sin(ωt + φ)?", back: "$A = \\sqrt{A_1^2 + A_2^2 + 2A_1A_2\\cos\\varphi}$, the length of the phasor sum." }
---

:::hook
q: An Indian wall socket is labelled 220 V. Roughly what is the largest voltage between its two pins during each cycle?
options: ["220 V", "311 V", "440 V", "156 V"]
answer: 1
right: Right. 220 V is the rms value. The voltage swings between +311 V and −311 V, since $220\sqrt2 \approx 311$. A 220 V DC supply would heat a kettle at the same rate, which is why the rms value is the one printed on the label.
wrong: The 220 V on the label is the rms value: the steady voltage that would heat a resistor equally fast. The sinusoid actually peaks at $220\sqrt2 \approx 311$ V, and also reaches −311 V half a cycle later.
:::

## What "alternating" means, and why mains uses it {lvl=1 id=s-why label="Class 10"}

A cell pushes charge one way only: that is **direct current** (DC). The supply in your house reverses its direction many times a second: that is **alternating current** (AC). In India the voltage between the pins goes positive, falls through zero, goes negative and comes back 50 times every second, so its **frequency** is 50 Hz and one **cycle** lasts $1/50$ s = 20 ms.

Why build a whole country's supply on something that keeps reversing? Two reasons.

1. **Rotation makes AC naturally.** Almost all electricity comes from turbines (driven by steam, water or wind) that spin a coil and a magnet relative to each other. A spinning coil sees the magnetic field through it grow, shrink, reverse and come back, so the emf it produces reverses every half-turn. AC is what a rotating machine gives you without any extra parts.
2. **AC can be stepped up and down.** Power sent down a line is $P = VI$, and the line wastes $I^2R$ as heat. Send the same power at 10 times the voltage and the current is 10 times smaller, so the loss is **100 times** smaller. A **transformer** changes voltages cheaply and with almost no loss, but it works only with a *changing* current. So power stations step the voltage up to hundreds of kilovolts for the long journey and step it down near your house. (See the leaf *Transformers*.)

:::qc
q: A power line delivers the same power at 22 kV instead of 220 V. By what factor does the heat lost in the line wires change?
options: ["It becomes 1/10 000 as much", "It becomes 1/100 as much", "It becomes 100 times as much", "It does not change"]
answer: 0
right: Right. The voltage is 100 times larger, so the current $I = P/V$ is 100 times smaller and the loss $I^2R$ is $100^2 = 10\,000$ times smaller.
wrong: For a fixed power, $I = P/V$. Raising V by 100 cuts I by 100, and the line loss $I^2R$ goes as the square of the current.
:::

## The AC generator: emf from a rotating coil {lvl=2 id=s-gen label="Class 12"}

Take a flat coil of $N$ turns and area $A$, and spin it at a steady angular speed $\omega$ about an axis perpendicular to a uniform field $B$. Let $\theta$ be the angle between the coil's **normal** (the direction perpendicular to its plane) and $\vec B$. Starting the clock when the normal points along $\vec B$, $\theta = \omega t$.

:::figure caption="An AC generator seen along its axis. The coil (edge-on, thick line) turns at ω between the poles; its normal n makes angle θ = ωt with the field B. The flux is largest when n is along B and zero when the coil's plane lies along B."
<svg viewBox="0 0 320 190" role="img" aria-label="Edge-on view of a coil rotating between north and south magnet poles, with the normal to the coil at angle omega t to the horizontal magnetic field">
<rect x="10" y="30" width="45" height="130" style="fill:color-mix(in srgb, var(--chem) 18%, var(--surface));stroke:var(--chem);stroke-width:1.5"/>
<rect x="265" y="30" width="45" height="130" style="fill:color-mix(in srgb, var(--phy) 18%, var(--surface));stroke:var(--phy);stroke-width:1.5"/>
<text class="k" x="27" y="100">N</text><text class="k" x="283" y="100">S</text>
<line class="faint" x1="60" y1="45" x2="258" y2="45"/><polyline class="ln" points="252,41 258,45 252,49"/>
<line class="faint" x1="60" y1="170" x2="258" y2="170"/><polyline class="ln" points="252,166 258,170 252,174"/>
<line class="faint" x1="60" y1="95" x2="100" y2="95"/><line class="faint" x1="220" y1="95" x2="258" y2="95"/><polyline class="ln" points="252,91 258,95 252,99"/>
<circle class="faint" cx="160" cy="95" r="58"/>
<line class="pen" x1="124.6" y1="52.9" x2="195.4" y2="137.1" style="stroke:var(--phy);stroke-width:5"/>
<circle class="obj" cx="124.6" cy="52.9" r="4"/><circle class="obj" cx="195.4" cy="137.1" r="4"/>
<line class="faint" x1="160" y1="95" x2="215" y2="95"/>
<line class="ln" x1="160" y1="95" x2="206" y2="56.4" style="stroke-width:2"/><polyline class="ln" points="197.3,58.4 206,56.4 202.5,64.6" style="stroke-width:2"/>
<path class="ln" d="M185 95 A25 25 0 0 0 179.2 78.9"/>
<text class="k" x="210" y="54">n</text><text x="188" y="88">θ = ωt</text>
<text class="k" x="236" y="38">B</text>
<path class="ln" d="M110 140 A62 62 0 0 0 150 156"/><polyline class="ln" points="142,158 150,156 144,150"/><text x="96" y="168">ω</text>
</svg>
:::

The flux through each turn is $BA\cos\theta$, so the total flux linkage is

$$N\Phi_B = NBA\cos\omega t.$$

By Faraday's law (see the leaf *Electromagnetic induction*), the emf is minus the rate of change of flux linkage:

$$\varepsilon = -\frac{d}{dt}\big(NBA\cos\omega t\big) = NBA\omega\sin\omega t.$$

:::law caption="Emf of an AC generator. ν = ω/2π is the number of revolutions per second, and also the frequency of the AC."
$$\varepsilon = \varepsilon_0\sin\omega t, \qquad \varepsilon_0 = NBA\omega = 2\pi\nu NBA$$
:::

Three things are worth seeing in this result.

- **The emf is largest when the flux is zero.** At $\omega t = 90°$ the coil's plane lies along $\vec B$: no field lines thread it, but the flux is *changing* fastest, because the sides of the coil are cutting straight across the field. At $\omega t = 0$ the flux is maximum but momentarily not changing, so $\varepsilon = 0$. (The cutting picture is the leaf *Motional emf*.)
- **The peak grows with every factor.** Double the turns, the field, the area or the speed and you double $\varepsilon_0$. Speed also raises the frequency, so a real generator fixes $\omega$ (50 Hz) and gets voltage from $N$, $B$ and $A$.
- **The sign flips every half-turn.** That is the "alternating" in AC: the current through an external resistor reverses as each side of the coil swaps from moving up to moving down through the field.

:::worked title="NCERT Example 6.10: Kamla's bicycle generator"
$N = 100$, $A = 0.10$ m², $\nu = 0.5$ rev/s, $B = 0.01$ T.

$\varepsilon_0 = NBA(2\pi\nu) = 100 \times 0.01 \times 0.10 \times 2\pi \times 0.5 = 0.314$ V.

The emf is $0.314\sin(\pi t)$ V, so it swings between +0.314 V and −0.314 V once every 2 s. Pedalling a stationary bicycle by hand cannot reach 50 Hz; real generators use stronger fields, many turns and fast turbines.
:::

:::qc
q: A generator coil gives a peak emf of 120 V at 50 rev/s. The turbine slows to 40 rev/s, with everything else unchanged. What are the new peak emf and frequency?
options: ["96 V, 40 Hz", "120 V, 40 Hz", "96 V, 50 Hz", "150 V, 40 Hz"]
answer: 0
right: Right. $\varepsilon_0 = NBA\omega$ is proportional to ω, so it falls to $120 \times 40/50 = 96$ V; the frequency equals the rotation rate, 40 Hz.
wrong: Both the peak $\varepsilon_0 = NBA\omega$ and the frequency $\omega/2\pi$ are proportional to the speed of rotation, so both fall by the factor 40/50.
:::

## Describing a sinusoid: peak, period, phase {lvl=2 id=s-sine label="Class 12"}

Any sinusoidal voltage can be written

$$v = V_0\sin(\omega t + \varphi).$$

- $V_0$ is the **peak value** (amplitude). The swing from $+V_0$ to $-V_0$ is the **peak-to-peak value** $2V_0$.
- $\omega$ is the **angular frequency** in rad/s. The **frequency** is $\nu = \omega/2\pi$ and the **period** is $T = 1/\nu = 2\pi/\omega$. For 50 Hz mains, $\omega = 100\pi \approx 314$ rad/s.
- $\varphi$ is the **phase constant**: it says where in its cycle the wave is at $t = 0$. It matters only when we compare two waves.

:::worked title="Reading an oscilloscope trace"
A scope is set to 5 V per division vertically and 5 ms per division horizontally. A sinusoid on the screen spans 8 divisions from crest to trough, and one full cycle covers 4 divisions.

- Peak-to-peak: $8 \times 5 = 40$ V, so $V_0 = 20$ V and $V_{rms} = 20/\sqrt2 = 14.1$ V (rms is explained next).
- Period: $4 \times 5 = 20$ ms, so $\nu = 1/0.020 = 50$ Hz and $\omega = 100\pi$ rad/s.

So the trace is $v = 20\sin(100\pi t)$ V, if we start the clock at an upward zero crossing. Measure the period between two matching points (two upward zero crossings) rather than crest to crest; crests are flat and hard to locate.
:::

:::qc
q: A current is i = 4 sin(200πt) A. What are its frequency and its value at t = 1/400 s?
options: ["100 Hz, 4 A", "200 Hz, 0 A", "100 Hz, 0 A", "200π Hz, 4 A"]
answer: 0
right: Right. $\nu = 200\pi/2\pi = 100$ Hz. At $t = 1/400$ s the angle is $200\pi/400 = \pi/2$, so $i = 4\sin(\pi/2) = 4$ A, the peak.
wrong: The number multiplying t is ω, not ν: $\nu = \omega/2\pi = 100$ Hz. Then put $t = 1/400$ s into the angle: $200\pi \times 1/400 = \pi/2$.
:::

## Average, mean square and rms {lvl=2 id=s-rms label="Class 12"}

A sinusoid spends exactly as long below zero as above it, with the same shape. So its **average over a full cycle is zero**:

$$\bar v = \frac1T\int_0^T V_0\sin\omega t\,dt = \frac{V_0}{\omega T}\big[-\cos\omega t\big]_0^T = 0.$$

A DC ammeter (a moving-coil meter) connected to the mains therefore reads zero. But an electric kettle on the mains boils water perfectly well. Heating does not care about the direction of current: a resistor dissipates $p = i^2R$, and $i^2$ is never negative. So the useful average is the average of the **square**.

**The mean of $\sin^2$.** Over a whole cycle, $\sin^2\omega t$ and $\cos^2\omega t$ are the same curve shifted by a quarter period, so they have the same average. Their sum is exactly 1 at every instant. Two equal averages that add to 1 must each be $\tfrac12$:

$$\overline{\sin^2\omega t} = \overline{\cos^2\omega t} = \tfrac12.$$

(The same result from the identity $\sin^2x = \tfrac12(1 - \cos2x)$: the $\cos2x$ part averages to zero.)

So the **mean square** voltage is $\overline{v^2} = V_0^2/2$. The **root mean square** (rms) value is the square root of this:

:::law caption="rms value of a sinusoid. Also called the effective value; NCERT writes V and I for rms values."
$$V_{rms} = \sqrt{\overline{v^2}} = \frac{V_0}{\sqrt2} \approx 0.707\,V_0, \qquad I_{rms} = \frac{I_0}{\sqrt2}$$
:::

:::figure caption="Top: v = V₀ sin ωt, with the peak V₀ and the rms value 0.707 V₀ marked. Bottom: v², which never goes negative; its mean is exactly V₀²/2, so the shaded humps above the dashed line fill the dips below it."
<svg viewBox="0 0 360 215" role="img" aria-label="A sine wave with peak and rms levels marked, and below it the squared wave oscillating between zero and V0 squared with its mean at half">
<line class="ln" x1="40" y1="70" x2="345" y2="70" style="stroke-width:1"/><line class="ln" x1="40" y1="15" x2="40" y2="125" style="stroke-width:1"/>
<polyline class="ray" points="40.0,70.0 42.5,64.8 45.0,59.6 47.5,54.5 50.0,49.7 52.5,45.0 55.0,40.6 57.5,36.5 60.0,32.8 62.5,29.5 65.0,26.7 67.5,24.3 70.0,22.4 72.5,21.1 75.0,20.3 77.5,20.0 80.0,20.3 82.5,21.1 85.0,22.4 87.5,24.3 90.0,26.7 92.5,29.5 95.0,32.8 97.5,36.5 100.0,40.6 102.5,45.0 105.0,49.7 107.5,54.5 110.0,59.6 112.5,64.8 115.0,70.0 117.5,75.2 120.0,80.4 122.5,85.5 125.0,90.3 127.5,95.0 130.0,99.4 132.5,103.5 135.0,107.2 137.5,110.5 140.0,113.3 142.5,115.7 145.0,117.6 147.5,118.9 150.0,119.7 152.5,120.0 155.0,119.7 157.5,118.9 160.0,117.6 162.5,115.7 165.0,113.3 167.5,110.5 170.0,107.2 172.5,103.5 175.0,99.4 177.5,95.0 180.0,90.3 182.5,85.5 185.0,80.4 187.5,75.2 190.0,70.0 192.5,64.8 195.0,59.6 197.5,54.5 200.0,49.7 202.5,45.0 205.0,40.6 207.5,36.5 210.0,32.8 212.5,29.5 215.0,26.7 217.5,24.3 220.0,22.4 222.5,21.1 225.0,20.3 227.5,20.0 230.0,20.3 232.5,21.1 235.0,22.4 237.5,24.3 240.0,26.7 242.5,29.5 245.0,32.8 247.5,36.5 250.0,40.6 252.5,45.0 255.0,49.7 257.5,54.5 260.0,59.6 262.5,64.8 265.0,70.0 267.5,75.2 270.0,80.4 272.5,85.5 275.0,90.3 277.5,95.0 280.0,99.4 282.5,103.5 285.0,107.2 287.5,110.5 290.0,113.3 292.5,115.7 295.0,117.6 297.5,118.9 300.0,119.7 302.5,120.0 305.0,119.7 307.5,118.9 310.0,117.6 312.5,115.7 315.0,113.3 317.5,110.5 320.0,107.2 322.5,103.5 325.0,99.4 327.5,95.0 330.0,90.3 332.5,85.5 335.0,80.4 337.5,75.2 340.0,70.0"/>
<line class="faint" x1="40" y1="20" x2="345" y2="20"/><line class="faint" x1="40" y1="34.6" x2="345" y2="34.6" style="stroke:var(--chem)"/>
<text class="k" x="4" y="24">V₀</text><text x="2" y="40" style="fill:var(--chem)">V_rms</text><text x="2" y="124">−V₀</text>
<line class="faint" x1="40" y1="120" x2="345" y2="120"/>
<line class="gr" x1="40" y1="132" x2="190" y2="132"/><line class="gr" x1="40" y1="128" x2="40" y2="136"/><line class="gr" x1="190" y1="128" x2="190" y2="136"/><text x="108" y="128">T</text>
<line class="ln" x1="40" y1="200" x2="345" y2="200" style="stroke-width:1"/><line class="ln" x1="40" y1="145" x2="40" y2="205" style="stroke-width:1"/>
<polyline class="ray" points="40.0,200.0 42.5,199.5 45.0,197.8 47.5,195.2 50.0,191.7 52.5,187.5 55.0,182.7 57.5,177.6 60.0,172.4 62.5,167.3 65.0,162.5 67.5,158.3 70.0,154.8 72.5,152.2 75.0,150.5 77.5,150.0 80.0,150.5 82.5,152.2 85.0,154.8 87.5,158.3 90.0,162.5 92.5,167.3 95.0,172.4 97.5,177.6 100.0,182.7 102.5,187.5 105.0,191.7 107.5,195.2 110.0,197.8 112.5,199.5 115.0,200.0 117.5,199.5 120.0,197.8 122.5,195.2 125.0,191.7 127.5,187.5 130.0,182.7 132.5,177.6 135.0,172.4 137.5,167.3 140.0,162.5 142.5,158.3 145.0,154.8 147.5,152.2 150.0,150.5 152.5,150.0 155.0,150.5 157.5,152.2 160.0,154.8 162.5,158.3 165.0,162.5 167.5,167.3 170.0,172.4 172.5,177.6 175.0,182.7 177.5,187.5 180.0,191.7 182.5,195.2 185.0,197.8 187.5,199.5 190.0,200.0 192.5,199.5 195.0,197.8 197.5,195.2 200.0,191.7 202.5,187.5 205.0,182.7 207.5,177.6 210.0,172.4 212.5,167.3 215.0,162.5 217.5,158.3 220.0,154.8 222.5,152.2 225.0,150.5 227.5,150.0 230.0,150.5 232.5,152.2 235.0,154.8 237.5,158.3 240.0,162.5 242.5,167.3 245.0,172.4 247.5,177.6 250.0,182.7 252.5,187.5 255.0,191.7 257.5,195.2 260.0,197.8 262.5,199.5 265.0,200.0 267.5,199.5 270.0,197.8 272.5,195.2 275.0,191.7 277.5,187.5 280.0,182.7 282.5,177.6 285.0,172.4 287.5,167.3 290.0,162.5 292.5,158.3 295.0,154.8 297.5,152.2 300.0,150.5 302.5,150.0 305.0,150.5 307.5,152.2 310.0,154.8 312.5,158.3 315.0,162.5 317.5,167.3 320.0,172.4 322.5,177.6 325.0,182.7 327.5,187.5 330.0,191.7 332.5,195.2 335.0,197.8 337.5,199.5 340.0,200.0" style="stroke:var(--eng)"/>
<line class="faint" x1="40" y1="150" x2="345" y2="150"/><line class="faint" x1="40" y1="175" x2="345" y2="175" style="stroke:var(--chem)"/>
<text class="k" x="10" y="154">V₀²</text><text x="2" y="179" style="fill:var(--chem)">V₀²/2</text><text x="350" y="204">t</text>
</svg>
:::

**Why rms is the right single number.** A steady DC voltage $V$ across $R$ gives power $V^2/R$. An AC voltage gives average power $\overline{v^2}/R = V_{rms}^2/R$. So **the rms value is the DC value that heats a resistor at the same rate.** That is why every AC rating (220 V mains, a 5 A plug) is an rms value: with it, all the DC formulas for power keep working.

:::qc
q: The peak current in a heater is 14.1 A. What steady direct current would heat it equally fast?
options: ["10 A", "14.1 A", "7.07 A", "20 A"]
answer: 0
right: Right. The DC that heats equally is the rms value, $14.1/\sqrt2 = 10$ A.
wrong: Equal heating means equal mean of $i^2$. That is the definition of the rms value: $I_0/\sqrt2 = 10$ A.
:::

## Power in a resistor {lvl=2 id=s-power label="Class 12"}

Apply $v = V_0\sin\omega t$ across a resistor $R$. Ohm's law holds at every instant (see the leaf *Ohm's law*), so $i = v/R = I_0\sin\omega t$ with $I_0 = V_0/R$. Current and voltage rise and fall together: they are **in phase**.

The instantaneous power is

$$p = vi = V_0I_0\sin^2\omega t = \tfrac12V_0I_0\big(1 - \cos2\omega t\big).$$

So the power is never negative (the resistor always takes energy from the source) but it **pulsates at twice the supply frequency**: a filament lamp on 50 Hz mains gets 100 pulses of power per second. Averaging over a cycle kills the $\cos 2\omega t$ term:

:::law caption="Average power in a resistor on AC. The same formulas as for DC, with rms values."
$$\bar P = \tfrac12V_0I_0 = V_{rms}I_{rms} = I_{rms}^2R = \frac{V_{rms}^2}{R}$$
:::

:::worked title="NCERT Example 7.1 and Exercise 7.1"
**A 100 W, 220 V bulb.** $R = V^2/P = 220^2/100 = 484\ \Omega$. Peak voltage $V_0 = 220\sqrt2 = 311$ V. rms current $I = P/V = 100/220 = 0.455$ A.

**A 100 Ω resistor on 220 V, 50 Hz.** $I_{rms} = 220/100 = 2.20$ A; $\bar P = I_{rms}^2R = 2.2^2 \times 100 = 484$ W. The frequency does not appear: a pure resistor does not care how fast the current alternates.
:::

:::qc
q: A 1000 W, 220 V heater is run on the mains. What is the largest instantaneous power it draws?
options: ["2000 W", "1000 W", "1414 W", "500 W"]
answer: 0
right: Right. $p = 2\bar P\sin^2\omega t$, which peaks at $2\bar P = 2000$ W (that is, $V_0I_0 = 2V_{rms}I_{rms}$).
wrong: The average is $\tfrac12V_0I_0$, so the peak power $V_0I_0$ is twice the average: 2000 W.
:::

## Phasors: a sinusoid as a rotating arrow {lvl=2 id=s-phasor label="Class 12"}

Writing out $\sin$ and $\cos$ every time two AC quantities are compared is clumsy. A neater picture comes from the generator itself.

Draw an arrow of length $V_0$ from the origin, and let it rotate anticlockwise at angular speed $\omega$, starting along the $x$-axis at $t = 0$. At time $t$ it makes angle $\omega t$ with the $x$-axis, so its **projection on the vertical axis** is $V_0\sin\omega t$. That projection *is* the voltage. The rotating arrow is called a **phasor**.

:::figure caption="Phasors. The arrows V₀ and I₀ rotate anticlockwise together at ω. Their vertical projections trace out v and i (right). Here i leads v by φ: the current reaches its peak earlier, by the time φ/ω."
<svg viewBox="0 0 360 200" role="img" aria-label="Two rotating arrows on the left, one at angle omega t and one further ahead by phi, with their vertical projections traced as two sine waves on the right">
<circle class="faint" cx="80" cy="100" r="60"/>
<line class="ln" x1="10" y1="100" x2="150" y2="100" style="stroke-width:1"/><line class="ln" x1="80" y1="30" x2="80" y2="170" style="stroke-width:1"/>
<line class="ln" x1="170" y1="100" x2="355" y2="100" style="stroke-width:1"/><line class="ln" x1="170" y1="30" x2="170" y2="170" style="stroke-width:1"/>
<line class="ray" x1="80" y1="100" x2="118.6" y2="54.0" style="stroke-width:2.5"/>
<line class="ray" x1="80" y1="100" x2="80" y2="60" style="stroke:var(--chem);stroke-width:2.5"/>
<polyline class="ray" points="170.0,100.0 171.5,96.9 173.0,93.7 174.5,90.6 176.0,87.5 177.5,84.5 179.0,81.5 180.5,78.5 182.0,75.6 183.5,72.8 185.0,70.0 186.5,67.3 188.0,64.7 189.5,62.2 191.0,59.9 192.5,57.6 194.0,55.4 195.5,53.4 197.0,51.5 198.5,49.7 200.0,48.0 201.5,46.5 203.0,45.2 204.5,44.0 206.0,42.9 207.5,42.0 209.0,41.3 210.5,40.7 212.0,40.3 213.5,40.1 215.0,40.0 216.5,40.1 218.0,40.3 219.5,40.7 221.0,41.3 222.5,42.0 224.0,42.9 225.5,44.0 227.0,45.2 228.5,46.5 230.0,48.0 231.5,49.7 233.0,51.5 234.5,53.4 236.0,55.4 237.5,57.6 239.0,59.9 240.5,62.2 242.0,64.7 243.5,67.3 245.0,70.0 246.5,72.8 248.0,75.6 249.5,78.5 251.0,81.5 252.5,84.5 254.0,87.5 255.5,90.6 257.0,93.7 258.5,96.9 260.0,100.0 261.5,103.1 263.0,106.3 264.5,109.4 266.0,112.5 267.5,115.5 269.0,118.5 270.5,121.5 272.0,124.4 273.5,127.2 275.0,130.0 276.5,132.7 278.0,135.3 279.5,137.8 281.0,140.1 282.5,142.4 284.0,144.6 285.5,146.6 287.0,148.5 288.5,150.3 290.0,152.0 291.5,153.5 293.0,154.8 294.5,156.0 296.0,157.1 297.5,158.0 299.0,158.7 300.5,159.3 302.0,159.7 303.5,159.9 305.0,160.0 306.5,159.9 308.0,159.7 309.5,159.3 311.0,158.7 312.5,158.0 314.0,157.1 315.5,156.0 317.0,154.8 318.5,153.5 320.0,152.0 321.5,150.3 323.0,148.5 324.5,146.6 326.0,144.6 327.5,142.4 329.0,140.1 330.5,137.8 332.0,135.3 333.5,132.7 335.0,130.0 336.5,127.2 338.0,124.4 339.5,121.5 341.0,118.5 342.5,115.5 344.0,112.5 345.5,109.4 347.0,106.3 348.5,103.1 350.0,100.0"/>
<polyline class="ray" points="170.0,74.3 171.5,72.7 173.0,71.2 174.5,69.8 176.0,68.5 177.5,67.2 179.0,66.1 180.5,65.0 182.0,64.0 183.5,63.2 185.0,62.4 186.5,61.7 188.0,61.2 189.5,60.7 191.0,60.4 192.5,60.2 194.0,60.0 195.5,60.0 197.0,60.1 198.5,60.3 200.0,60.6 201.5,61.0 203.0,61.5 204.5,62.2 206.0,62.9 207.5,63.7 209.0,64.7 210.5,65.7 212.0,66.8 213.5,68.1 215.0,69.4 216.5,70.7 218.0,72.2 219.5,73.8 221.0,75.4 222.5,77.1 224.0,78.8 225.5,80.6 227.0,82.5 228.5,84.4 230.0,86.3 231.5,88.3 233.0,90.3 234.5,92.4 236.0,94.4 237.5,96.5 239.0,98.6 240.5,100.7 242.0,102.8 243.5,104.9 245.0,106.9 246.5,109.0 248.0,111.0 249.5,113.0 251.0,115.0 252.5,116.9 254.0,118.8 255.5,120.6 257.0,122.4 258.5,124.1 260.0,125.7 261.5,127.3 263.0,128.8 264.5,130.2 266.0,131.5 267.5,132.8 269.0,133.9 270.5,135.0 272.0,136.0 273.5,136.8 275.0,137.6 276.5,138.3 278.0,138.8 279.5,139.3 281.0,139.6 282.5,139.8 284.0,140.0 285.5,140.0 287.0,139.9 288.5,139.7 290.0,139.4 291.5,139.0 293.0,138.5 294.5,137.8 296.0,137.1 297.5,136.3 299.0,135.3 300.5,134.3 302.0,133.2 303.5,131.9 305.0,130.6 306.5,129.3 308.0,127.8 309.5,126.2 311.0,124.6 312.5,122.9 314.0,121.2 315.5,119.4 317.0,117.5 318.5,115.6 320.0,113.7 321.5,111.7 323.0,109.7 324.5,107.6 326.0,105.6 327.5,103.5 329.0,101.4 330.5,99.3 332.0,97.2 333.5,95.1 335.0,93.1 336.5,91.0 338.0,89.0 339.5,87.0 341.0,85.0 342.5,83.1 344.0,81.2 345.5,79.4 347.0,77.6 348.5,75.9 350.0,74.3" style="stroke:var(--chem)"/>
<line class="faint" x1="118.6" y1="54" x2="195" y2="54"/><line class="faint" x1="80" y1="60" x2="195" y2="60" style="stroke:var(--chem)"/>
<line class="faint" x1="195" y1="40" x2="195" y2="160"/>
<circle class="obj" cx="195" cy="54" r="3" style="fill:var(--phy)"/><circle class="obj" cx="195" cy="60" r="3"/>
<path class="ln" d="M100 100 A20 20 0 0 0 92.9 84.7"/><text x="102" y="92">ωt</text>
<path class="ln" d="M99.3 77.0 A30 30 0 0 0 80 70"/><text x="86" y="66">φ</text>
<text class="k" x="122" y="50">V₀</text><text class="k" x="60" y="56" style="fill:var(--chem)">I₀</text>
<text x="300" y="38" style="fill:var(--phy)">v</text><text x="230" y="150" style="fill:var(--chem)">i</text><text x="342" y="114">ωt</text><text x="186" y="176">now</text>
</svg>
:::

A phasor diagram is a **snapshot** of the arrows at one instant. Everything useful is in it:

- the **length** of each arrow is the peak value;
- the **angle between** two arrows is their phase difference, and stays fixed as they rotate together (same $\omega$);
- the arrow **ahead** in the anticlockwise sense **leads**: $i = I_0\sin(\omega t + \varphi)$ reaches each peak a time $\varphi/\omega$ before $v = V_0\sin\omega t$.

For a resistor, $v$ and $i$ are in phase, so the two phasors point the same way. The leaf *AC through R, L and C* uses phasors for inductors and capacitors, where they are not in phase.

:::qc
q: v = 10 sin(ωt + π/6) and i = 2 sin(ωt − π/3). Which statement is right?
options: ["v leads i by π/2", "i leads v by π/2", "v leads i by π/6", "They are in phase"]
answer: 0
right: Right. The phase difference is $\pi/6 - (-\pi/3) = \pi/2$, and v has the larger phase, so its phasor is a quarter-turn ahead.
wrong: Subtract the phases: $\pi/6 - (-\pi/3) = \pi/2$. The one with the larger phase angle (v) is ahead, i.e. leads.
:::

## Where the energy comes from {lvl=3 id=s-energy label="JEE"}

A generator is not a free source of energy. Connect the coil (total resistance $R$, including the load) and a current $i = \varepsilon/R$ flows. A current loop in a field feels a torque $\tau = NiAB\sin\theta$ (see the leaf *Force on a current*), and by Lenz's law it **opposes the rotation** (see *Lenz's law*). To keep the coil turning at steady $\omega$, the turbine must supply an equal and opposite torque, doing work at the rate

$$\tau\omega = NiAB\omega\sin\omega t = i\,\varepsilon.$$

That is exactly the electrical power $\varepsilon i$ delivered to the circuit. The average mechanical power is

$$\bar P = \frac{\varepsilon_0^2}{2R}.$$

With no load (open circuit) there is no current and no opposing torque; the turbine only fights friction. Switch on more load (smaller $R$) and the turbine must work harder. That is why a power station must burn more fuel the moment a city switches on its air conditioners. The torque also varies as $\sin^2\omega t$, so a single-coil generator under load gets a jerky pull twice per turn; three-phase machines (at the end of this lesson) avoid that.

:::qc
q: A generator with ε₀ = 200 V drives a total resistance of 50 Ω. What average mechanical power must the turbine supply (ignoring friction)?
options: ["400 W", "800 W", "200 W", "4 W"]
answer: 0
right: Right. $\bar P = \varepsilon_0^2/2R = 40\,000/100 = 400$ W, the same as $\varepsilon_{rms}^2/R$.
wrong: The electrical power is $\varepsilon_{rms}^2/R = (\varepsilon_0^2/2)/R = 400$ W, and the turbine must supply exactly that.
:::

## The DC generator and the commutator {lvl=3 id=s-dc label="JEE"}

The coil's emf reverses every half-turn whatever we do. To get a one-way output, reverse the **connections** every half-turn as well. A **split-ring commutator** does this: the coil ends go to two half-rings, and fixed brushes touch whichever half is on their side. Just as the emf passes through zero, the brushes swap halves.

The output is then $|\varepsilon_0\sin\omega t|$: one-way, but bumpy. Its average is

$$\bar\varepsilon = \frac1\pi\int_0^\pi\varepsilon_0\sin x\,dx = \frac{2\varepsilon_0}{\pi} \approx 0.637\,\varepsilon_0.$$

Real DC machines use many coils at staggered angles, each with its own pair of commutator segments, so the brushes always pick up a coil near its peak. The output becomes nearly steady. The same split ring, run backwards, keeps a DC motor turning. (An AC generator uses two full **slip rings** instead, one per end, so the connections never swap.)

:::qc
q: A commutator generator gives peak emf 50 V. What does a moving-coil (DC) voltmeter across it read on open circuit?
options: ["31.8 V", "35.4 V", "50 V", "0 V"]
answer: 0
right: Right. A moving-coil meter reads the average, $2\varepsilon_0/\pi = 100/\pi = 31.8$ V.
wrong: The commutator output is $|\varepsilon_0\sin\omega t|$, whose average is $2\varepsilon_0/\pi$, not zero and not the rms.
:::

## rms of other waveforms {lvl=3 id=s-wave label="JEE"}

The rule $V_{rms} = V_0/\sqrt2$ is **only for sinusoids**. For any other periodic wave, go back to the definition:

$$V_{rms} = \sqrt{\frac1T\int_0^T v^2\,dt}.$$

Two shortcuts make most cases quick.

- **Zero stretches.** If $v = 0$ for a fraction of each period, those stretches add nothing to $\int v^2\,dt$ but still count in $T$.
- **Flipping sign does not change $v^2$.** So a wave and its rectified version have the same rms.

:::figure caption="Four waveforms of peak V₀ with their rms levels (dashed). Half-wave: V₀/2. Full-wave: V₀/√2. Square: V₀. Triangle: V₀/√3."
<svg viewBox="0 0 360 200" role="img" aria-label="Four small graphs: half-wave rectified sine, full-wave rectified sine, square wave and triangular wave, each with a dashed rms line">
<line class="ln" x1="30" y1="60" x2="155" y2="60" style="stroke-width:1"/><line class="ln" x1="200" y1="60" x2="325" y2="60" style="stroke-width:1"/>
<line class="ln" x1="30" y1="160" x2="155" y2="160" style="stroke-width:1"/><line class="ln" x1="200" y1="160" x2="325" y2="160" style="stroke-width:1"/>
<polyline class="ray" points="30.0,60.0 30.5,58.4 31.0,56.9 31.5,55.3 32.0,53.8 32.5,52.2 33.0,50.7 33.5,49.2 34.0,47.8 34.5,46.4 35.0,45.0 35.5,43.7 36.0,42.4 36.5,41.1 37.0,39.9 37.5,38.8 38.0,37.7 38.5,36.7 39.0,35.7 39.5,34.8 40.0,34.0 40.5,33.3 41.0,32.6 41.5,32.0 42.0,31.5 42.5,31.0 43.0,30.7 43.5,30.4 44.0,30.2 44.5,30.0 45.0,30.0 45.5,30.0 46.0,30.2 46.5,30.4 47.0,30.7 47.5,31.0 48.0,31.5 48.5,32.0 49.0,32.6 49.5,33.3 50.0,34.0 50.5,34.8 51.0,35.7 51.5,36.7 52.0,37.7 52.5,38.8 53.0,39.9 53.5,41.1 54.0,42.4 54.5,43.7 55.0,45.0 55.5,46.4 56.0,47.8 56.5,49.2 57.0,50.7 57.5,52.2 58.0,53.8 58.5,55.3 59.0,56.9 59.5,58.4 60.0,60.0 60.5,60.0 61.0,60.0 61.5,60.0 62.0,60.0 62.5,60.0 63.0,60.0 63.5,60.0 64.0,60.0 64.5,60.0 65.0,60.0 65.5,60.0 66.0,60.0 66.5,60.0 67.0,60.0 67.5,60.0 68.0,60.0 68.5,60.0 69.0,60.0 69.5,60.0 70.0,60.0 70.5,60.0 71.0,60.0 71.5,60.0 72.0,60.0 72.5,60.0 73.0,60.0 73.5,60.0 74.0,60.0 74.5,60.0 75.0,60.0 75.5,60.0 76.0,60.0 76.5,60.0 77.0,60.0 77.5,60.0 78.0,60.0 78.5,60.0 79.0,60.0 79.5,60.0 80.0,60.0 80.5,60.0 81.0,60.0 81.5,60.0 82.0,60.0 82.5,60.0 83.0,60.0 83.5,60.0 84.0,60.0 84.5,60.0 85.0,60.0 85.5,60.0 86.0,60.0 86.5,60.0 87.0,60.0 87.5,60.0 88.0,60.0 88.5,60.0 89.0,60.0 89.5,60.0 90.0,60.0 90.5,58.4 91.0,56.9 91.5,55.3 92.0,53.8 92.5,52.2 93.0,50.7 93.5,49.2 94.0,47.8 94.5,46.4 95.0,45.0 95.5,43.7 96.0,42.4 96.5,41.1 97.0,39.9 97.5,38.8 98.0,37.7 98.5,36.7 99.0,35.7 99.5,34.8 100.0,34.0 100.5,33.3 101.0,32.6 101.5,32.0 102.0,31.5 102.5,31.0 103.0,30.7 103.5,30.4 104.0,30.2 104.5,30.0 105.0,30.0 105.5,30.0 106.0,30.2 106.5,30.4 107.0,30.7 107.5,31.0 108.0,31.5 108.5,32.0 109.0,32.6 109.5,33.3 110.0,34.0 110.5,34.8 111.0,35.7 111.5,36.7 112.0,37.7 112.5,38.8 113.0,39.9 113.5,41.1 114.0,42.4 114.5,43.7 115.0,45.0 115.5,46.4 116.0,47.8 116.5,49.2 117.0,50.7 117.5,52.2 118.0,53.8 118.5,55.3 119.0,56.9 119.5,58.4 120.0,60.0 120.5,60.0 121.0,60.0 121.5,60.0 122.0,60.0 122.5,60.0 123.0,60.0 123.5,60.0 124.0,60.0 124.5,60.0 125.0,60.0 125.5,60.0 126.0,60.0 126.5,60.0 127.0,60.0 127.5,60.0 128.0,60.0 128.5,60.0 129.0,60.0 129.5,60.0 130.0,60.0 130.5,60.0 131.0,60.0 131.5,60.0 132.0,60.0 132.5,60.0 133.0,60.0 133.5,60.0 134.0,60.0 134.5,60.0 135.0,60.0 135.5,60.0 136.0,60.0 136.5,60.0 137.0,60.0 137.5,60.0 138.0,60.0 138.5,60.0 139.0,60.0 139.5,60.0 140.0,60.0 140.5,60.0 141.0,60.0 141.5,60.0 142.0,60.0 142.5,60.0 143.0,60.0 143.5,60.0 144.0,60.0 144.5,60.0 145.0,60.0 145.5,60.0 146.0,60.0 146.5,60.0 147.0,60.0 147.5,60.0 148.0,60.0 148.5,60.0 149.0,60.0 149.5,60.0 150.0,60.0"/><polyline class="ray" points="200.0,60.0 200.5,58.4 201.0,56.9 201.5,55.3 202.0,53.8 202.5,52.2 203.0,50.7 203.5,49.2 204.0,47.8 204.5,46.4 205.0,45.0 205.5,43.7 206.0,42.4 206.5,41.1 207.0,39.9 207.5,38.8 208.0,37.7 208.5,36.7 209.0,35.7 209.5,34.8 210.0,34.0 210.5,33.3 211.0,32.6 211.5,32.0 212.0,31.5 212.5,31.0 213.0,30.7 213.5,30.4 214.0,30.2 214.5,30.0 215.0,30.0 215.5,30.0 216.0,30.2 216.5,30.4 217.0,30.7 217.5,31.0 218.0,31.5 218.5,32.0 219.0,32.6 219.5,33.3 220.0,34.0 220.5,34.8 221.0,35.7 221.5,36.7 222.0,37.7 222.5,38.8 223.0,39.9 223.5,41.1 224.0,42.4 224.5,43.7 225.0,45.0 225.5,46.4 226.0,47.8 226.5,49.2 227.0,50.7 227.5,52.2 228.0,53.8 228.5,55.3 229.0,56.9 229.5,58.4 230.0,60.0 230.5,58.4 231.0,56.9 231.5,55.3 232.0,53.8 232.5,52.2 233.0,50.7 233.5,49.2 234.0,47.8 234.5,46.4 235.0,45.0 235.5,43.7 236.0,42.4 236.5,41.1 237.0,39.9 237.5,38.8 238.0,37.7 238.5,36.7 239.0,35.7 239.5,34.8 240.0,34.0 240.5,33.3 241.0,32.6 241.5,32.0 242.0,31.5 242.5,31.0 243.0,30.7 243.5,30.4 244.0,30.2 244.5,30.0 245.0,30.0 245.5,30.0 246.0,30.2 246.5,30.4 247.0,30.7 247.5,31.0 248.0,31.5 248.5,32.0 249.0,32.6 249.5,33.3 250.0,34.0 250.5,34.8 251.0,35.7 251.5,36.7 252.0,37.7 252.5,38.8 253.0,39.9 253.5,41.1 254.0,42.4 254.5,43.7 255.0,45.0 255.5,46.4 256.0,47.8 256.5,49.2 257.0,50.7 257.5,52.2 258.0,53.8 258.5,55.3 259.0,56.9 259.5,58.4 260.0,60.0 260.5,58.4 261.0,56.9 261.5,55.3 262.0,53.8 262.5,52.2 263.0,50.7 263.5,49.2 264.0,47.8 264.5,46.4 265.0,45.0 265.5,43.7 266.0,42.4 266.5,41.1 267.0,39.9 267.5,38.8 268.0,37.7 268.5,36.7 269.0,35.7 269.5,34.8 270.0,34.0 270.5,33.3 271.0,32.6 271.5,32.0 272.0,31.5 272.5,31.0 273.0,30.7 273.5,30.4 274.0,30.2 274.5,30.0 275.0,30.0 275.5,30.0 276.0,30.2 276.5,30.4 277.0,30.7 277.5,31.0 278.0,31.5 278.5,32.0 279.0,32.6 279.5,33.3 280.0,34.0 280.5,34.8 281.0,35.7 281.5,36.7 282.0,37.7 282.5,38.8 283.0,39.9 283.5,41.1 284.0,42.4 284.5,43.7 285.0,45.0 285.5,46.4 286.0,47.8 286.5,49.2 287.0,50.7 287.5,52.2 288.0,53.8 288.5,55.3 289.0,56.9 289.5,58.4 290.0,60.0 290.5,58.4 291.0,56.9 291.5,55.3 292.0,53.8 292.5,52.2 293.0,50.7 293.5,49.2 294.0,47.8 294.5,46.4 295.0,45.0 295.5,43.7 296.0,42.4 296.5,41.1 297.0,39.9 297.5,38.8 298.0,37.7 298.5,36.7 299.0,35.7 299.5,34.8 300.0,34.0 300.5,33.3 301.0,32.6 301.5,32.0 302.0,31.5 302.5,31.0 303.0,30.7 303.5,30.4 304.0,30.2 304.5,30.0 305.0,30.0 305.5,30.0 306.0,30.2 306.5,30.4 307.0,30.7 307.5,31.0 308.0,31.5 308.5,32.0 309.0,32.6 309.5,33.3 310.0,34.0 310.5,34.8 311.0,35.7 311.5,36.7 312.0,37.7 312.5,38.8 313.0,39.9 313.5,41.1 314.0,42.4 314.5,43.7 315.0,45.0 315.5,46.4 316.0,47.8 316.5,49.2 317.0,50.7 317.5,52.2 318.0,53.8 318.5,55.3 319.0,56.9 319.5,58.4 320.0,60.0"/>
<polyline class="ray" points="30,130 60,130 60,190 90,190 90,130 120,130 120,190 150,190 150,160"/>
<polyline class="ray" points="200,160 215,130 245,190 260,160 275,130 305,190 320,160"/>
<line class="faint" x1="30" y1="45" x2="155" y2="45" style="stroke:var(--chem)"/>
<line class="faint" x1="200" y1="38.8" x2="325" y2="38.8" style="stroke:var(--chem)"/>
<line class="faint" x1="30" y1="128" x2="155" y2="128" style="stroke:var(--chem)"/>
<line class="faint" x1="200" y1="142.7" x2="325" y2="142.7" style="stroke:var(--chem)"/>
<text class="k" x="40" y="80">half-wave: V₀/2</text><text class="k" x="205" y="80">full-wave: V₀/√2</text>
<text class="k" x="40" y="118">square: V₀</text><text class="k" x="205" y="118">triangle: V₀/√3</text>
</svg>
:::

**Half-wave rectified** ($v = V_0\sin\omega t$ for half the cycle, zero for the other half). Over the "on" half the mean of $v^2$ is $V_0^2/2$; over the whole period it is half of that, $V_0^2/4$. So $V_{rms} = V_0/2$. The average is $V_0/\pi$ (half of the full-wave average).

**Full-wave rectified** ($|V_0\sin\omega t|$). Squaring removes the sign, so $v^2$ is identical to that of the sine: $V_{rms} = V_0/\sqrt2$. The average is $2V_0/\pi$.

**Square wave** ($\pm V_0$). $v^2 = V_0^2$ at every instant, so $V_{rms} = V_0$: a square wave heats like DC of its full height.

**Triangle or sawtooth** (linear between $-V_0$ and $+V_0$). On any straight stretch, $v$ is spread evenly over its range, so the mean of $v^2$ equals the mean of $x^2$ over $-V_0 \le x \le V_0$:

$$\overline{v^2} = \frac{1}{2V_0}\int_{-V_0}^{V_0}x^2\,dx = \frac{V_0^2}{3}, \qquad V_{rms} = \frac{V_0}{\sqrt3} \approx 0.577\,V_0.$$

(The same holds for a ramp from 0 to $V_0$.)

**Pulse train** (height $V_0$ for a fraction $D$ of each period, zero otherwise, $D$ = duty cycle). Mean $DV_0$, rms $V_0\sqrt D$.

**Sinusoid with a DC offset**, $v = V_d + V_0\sin\omega t$. Square it:

$$v^2 = V_d^2 + 2V_dV_0\sin\omega t + V_0^2\sin^2\omega t.$$

The middle term averages to zero, so

$$V_{rms} = \sqrt{V_d^2 + \tfrac12V_0^2}.$$

The DC part and the AC part each heat as if the other were absent. Note it is **not** $V_d + V_0/\sqrt2$; rms values of parts do not simply add.

:::worked title="An uneven rectangular wave"
A voltage is +12 V for 2 ms, then −4 V for 6 ms, repeating. Average: $(12 \times 2 - 4 \times 6)/8 = 0$. Mean square: $(144 \times 2 + 16 \times 6)/8 = 48$ V², so $V_{rms} = \sqrt{48} = 6.93$ V. A zero average says nothing about heating.
:::

:::qc
q: v = 3 + 4√2 sin ωt volts. What is its rms value?
options: ["5 V", "7 V", "8.66 V", "4 V"]
answer: 0
right: Right. The AC part has rms $4\sqrt2/\sqrt2 = 4$ V and the DC part is 3 V; they combine as $\sqrt{3^2 + 4^2} = 5$ V.
wrong: Use $V_{rms}^2 = V_d^2 + V_0^2/2 = 9 + 32/2 = 25$, so $V_{rms} = 5$ V. The cross term averages to zero.
:::

## How AC meters respond {lvl=3 id=s-meters label="JEE"}

A meter's reading depends on **what physical effect moves its pointer**.

- **Moving-coil (PMMC) meter.** The deflecting torque is proportional to $i$. On 50 Hz AC the torque reverses 100 times a second; the heavy pointer cannot follow and settles at the **average**, which is zero. So a plain moving-coil meter reads zero on symmetric AC, and reads the average on rectified or offset waveforms.
- **Hot-wire meter.** The current heats a fine wire, which sags; the sag moves the pointer. Heating goes as $i^2$, so the meter responds to $\overline{i^2}$ and is calibrated to read $I_{rms}$, for **any** waveform and for DC alike.
- **Moving-iron meter.** The coil magnetises two soft-iron pieces in the same sense, so they repel whatever the direction of the current. The force goes roughly as $i^2$, so it too reads rms.

Because these respond to $i^2$, their scales are crowded at the low end (square-law scales).

Many cheap digital and rectifier meters do something else: they rectify the signal, measure the **average of** $|v|$, and multiply by the **form factor of a sine**, $V_{rms}/\overline{|v|} = (V_0/\sqrt2)/(2V_0/\pi) = \pi/(2\sqrt2) \approx 1.11$. That reads correctly for sinusoids only.

- On a square wave, $\overline{|v|} = V_0$, so the meter shows $1.11V_0$: **11% high**.
- On a triangle, $\overline{|v|} = V_0/2$, so it shows $0.555V_0$, against a true $0.577V_0$: about **4% low**.

Meters labelled "true rms" compute $\sqrt{\overline{v^2}}$ directly.

:::qc
q: A rectifier meter calibrated for sine waves is connected to a square wave of ±10 V. What does it read?
options: ["11.1 V", "10 V", "7.07 V", "6.37 V"]
answer: 0
right: Right. The rectified average of a ±10 V square wave is 10 V; the meter multiplies by 1.11, showing 11.1 V. The true rms is 10 V.
wrong: The meter measures the average of |v| (10 V here) and multiplies by 1.11, the sine's form factor.
:::

## Adding sinusoids of the same frequency {lvl=3 id=s-add label="JEE"}

Suppose two generators (or two parts of a circuit) give $v_1 = A_1\sin\omega t$ and $v_2 = A_2\sin(\omega t + \varphi)$ in series. Their sum is again a sinusoid of the **same frequency**, and phasors give it at once.

Each voltage is the vertical projection of its rotating arrow. The projection of a vector sum is the sum of projections. So $v_1 + v_2$ is the projection of the **vector sum** of the two phasors, which rotates rigidly with them at $\omega$.

:::figure caption="Phasor addition. A₁ and A₂, with phase difference φ, add like vectors. The resultant has length A and leads A₁ by δ."
<svg viewBox="0 0 280 180" role="img" aria-label="Parallelogram of two phasors A1 and A2 at angle phi giving resultant A at angle delta">
<line class="ln" x1="40" y1="150" x2="250" y2="150" style="stroke-width:1"/>
<line class="ray" x1="60" y1="150" x2="150" y2="150" style="stroke-width:2.5"/>
<line class="ray" x1="60" y1="150" x2="90" y2="98" style="stroke:var(--chem);stroke-width:2.5"/>
<line class="faint" x1="150" y1="150" x2="180" y2="98"/><line class="faint" x1="90" y1="98" x2="180" y2="98"/>
<line class="ray" x1="60" y1="150" x2="180" y2="98" style="stroke:var(--eng);stroke-width:2.5"/>
<path class="ln" d="M85 150 A25 25 0 0 0 72.5 128.3"/><text x="88" y="140">φ</text>
<path class="ln" d="M110 150 A50 50 0 0 0 105.9 130.1"/><text x="113" y="143">δ</text>
<text class="k" x="140" y="166">A₁</text><text class="k" x="62" y="96" style="fill:var(--chem)">A₂</text><text class="k" x="184" y="94" style="fill:var(--eng)">A</text>
</svg>
:::

By the cosine rule, and by resolving along and across $A_1$:

:::law caption="Sum of two same-frequency sinusoids: A₁ sin ωt + A₂ sin(ωt + φ) = A sin(ωt + δ)."
$$A = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\varphi}, \qquad \tan\delta = \frac{A_2\sin\varphi}{A_1 + A_2\cos\varphi}$$
:::

This is the same algebra as two-source interference in optics (see *Interference and Young's experiment*), for the same reason.

:::worked title="Two examples"
**At right angles.** $3\sin\omega t + 4\cos\omega t$. Here $\cos\omega t = \sin(\omega t + 90°)$, so $\varphi = 90°$: $A = \sqrt{9 + 16} = 5$ and $\tan\delta = 4/3$, $\delta = 53.1°$. So the sum is $5\sin(\omega t + 53.1°)$; its rms is $5/\sqrt2 = 3.54$, not $(3 + 4)/\sqrt2$.

**Equal, 120° apart.** $A_1 = A_2 = 100$ V, $\varphi = 120°$: $A = \sqrt{100^2 + 100^2 - 100^2} = 100$ V. Two 100 V sources 120° out of phase in series give only 100 V peak. Add a third at 240° and the three arrows close a triangle: the sum is **zero** at every instant.
:::

Peak values add as vectors, and so do rms values (each is the peak times $1/\sqrt2$). Plain numerical addition is correct only when the waves are in phase.

:::qc
q: Two sources, 6 sin ωt V and 8 sin(ωt − π/2) V, are in series. What is the peak of the total?
options: ["10 V", "14 V", "2 V", "7.07 V"]
answer: 0
right: Right. With $\varphi = -90°$, $\cos\varphi = 0$, so $A = \sqrt{36 + 64} = 10$ V. The sign of φ does not change the length.
wrong: Use $A^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\varphi$ with $\cos(-90°) = 0$: $A = 10$ V.
:::

## Mean of a product, and the rms of any sum {lvl=4 id=s-product label="Olympiad"}

Many questions (power, rms of a sum, what a meter reads) need the average of a product of two sinusoids. Use $\sin a\sin b = \tfrac12[\cos(a - b) - \cos(a + b)]$:

$$\overline{A\sin\omega t\cdot B\sin(\omega t + \varphi)} = \tfrac12AB\big[\cos\varphi - \overline{\cos(2\omega t + \varphi)}\big] = \tfrac12AB\cos\varphi.$$

:::law caption="Mean of a product of two same-frequency sinusoids, peaks A and B, phase difference φ. In rms terms: A_rms B_rms cos φ."
$$\overline{a(t)\,b(t)} = \tfrac12AB\cos\varphi$$
:::

With $\varphi = 0$ this gives $\overline{\sin^2} = \tfrac12$ again. With $\varphi = 90°$ it is zero: a sine and a cosine are "orthogonal". Applied to $(a + b)^2 = a^2 + 2ab + b^2$, it reproduces the phasor law $A^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\varphi$, a useful check. (When $a$ is a voltage and $b$ a current, this is the average power; the leaf *LCR circuit and resonance* develops that as the power factor.)

**Different frequencies.** For whole numbers $m \ne n$, $\sin m\omega t\,\sin n\omega t = \tfrac12[\cos(m - n)\omega t - \cos(m + n)\omega t]$, and both cosines average to zero over the common period. So the cross terms vanish and **mean squares simply add**:

$$v = V_d + \sum_n V_n\sin(n\omega t + \varphi_n) \quad\Rightarrow\quad V_{rms}^2 = V_d^2 + \sum_n \tfrac12V_n^2.$$

This is Parseval's theorem for Fourier series. For example $v = 10 + 20\sin\omega t + 10\sin3\omega t$ has $V_{rms}^2 = 100 + 200 + 50 = 350$, so $V_{rms} = 18.7$ V, whatever the phase of the harmonic.

:::note title="A check with the square wave" tone=olympiad
A ±$V_0$ square wave has the Fourier series $\dfrac{4V_0}{\pi}\big(\sin x + \tfrac13\sin3x + \tfrac15\sin5x + \dots\big)$. Parseval gives
$$V_{rms}^2 = \frac{16V_0^2}{\pi^2}\cdot\frac12\Big(1 + \frac19 + \frac1{25} + \dots\Big) = \frac{8V_0^2}{\pi^2}\cdot\frac{\pi^2}{8} = V_0^2,$$
using $\sum 1/(2k-1)^2 = \pi^2/8$. It agrees with the direct answer $V_{rms} = V_0$.
:::

**Ripple.** A rectified wave is "DC plus ripple". Since mean squares add, the rms of the ripple alone is $\sqrt{V_{rms}^2 - \bar v^2}$. For full-wave rectification, $V_0\sqrt{\tfrac12 - 4/\pi^2} \approx 0.31\,V_0$, about 48% of the DC level. Filters in power supplies exist to remove this.

:::qc
q: A heater is fed by v = 100 sin ωt + 100 sin 2ωt volts. Compared with 100 sin ωt alone, its average power is
options: ["doubled", "the same", "quadrupled", "it depends on the relative phase"]
answer: 0
right: Right. Different frequencies are orthogonal, so the mean squares add: $5000 + 5000$, twice the single-wave value, for any relative phase.
wrong: For different frequencies the cross term $2\overline{v_1v_2}$ averages to zero, so $\overline{v^2} = \overline{v_1^2} + \overline{v_2^2}$: the power doubles.
:::

## Three-phase supply (outline) {lvl=4 id=s-three label="Olympiad"}

Put three identical coils on one generator shaft, $120°$ apart. They give three emfs of equal size, each a third of a cycle behind the last:

$$v_1 = V_0\sin\omega t,\quad v_2 = V_0\sin(\omega t - 120°),\quad v_3 = V_0\sin(\omega t - 240°).$$

:::figure caption="Three-phase phasors 120° apart. Their sum is zero, so a balanced load returns no current in the neutral. The voltage between two lines is V₁ − V₂, of length √3 V₀."
<svg viewBox="0 0 300 200" role="img" aria-label="Three equal phasors at 120 degrees and the line voltage between tips of two of them">
<circle class="faint" cx="150" cy="110" r="70"/>
<line class="ray" x1="150" y1="110" x2="150" y2="40" style="stroke-width:2.5"/>
<line class="ray" x1="150" y1="110" x2="210.6" y2="145" style="stroke:var(--chem);stroke-width:2.5"/>
<line class="ray" x1="150" y1="110" x2="89.4" y2="145" style="stroke:var(--bio);stroke-width:2.5"/>
<line class="ray" x1="210.6" y1="145" x2="150" y2="40" style="stroke:var(--eng);stroke-dasharray:5 3"/>
<path class="ln" d="M150 90 A20 20 0 0 1 167.3 120"/><text x="170" y="100">120°</text>
<text class="k" x="156" y="38">V₁</text><text class="k" x="214" y="160" style="fill:var(--chem)">V₂</text><text class="k" x="62" y="160" style="fill:var(--bio)">V₃</text>
<text x="190" y="80" style="fill:var(--eng)">V₁ − V₂</text>
</svg>
:::

Three useful facts follow from what we already have.

- **They sum to zero.** The three phasors close an equilateral triangle. With three equal resistive loads joined at a common point (star connection), the currents also sum to zero, so the return (neutral) wire carries no current. Three loads are fed with three wires instead of six.
- **Line voltage is $\sqrt3$ times phase voltage.** Between two live lines the voltage is $v_1 - v_2$, a phasor of length $2V_0\sin60° = \sqrt3V_0$. So a 230 V (phase, rms) system has about 400 V between lines. [Unverified: 230/400 V as the Indian three-phase standard is from memory; the factor √3 is exact.]
- **Total power is steady.** With equal resistors $R$, the total power is $\frac{V_0^2}{R}\big[\sin^2\omega t + \sin^2(\omega t - 120°) + \sin^2(\omega t - 240°)\big]$. The bracket equals $\tfrac32$ at every instant (the three $\cos(2\omega t - \dots)$ terms are themselves three phasors 120° apart and cancel). So a three-phase motor or generator feels a smooth, non-pulsating torque.

Long-distance transmission and large motors use three phases; houses usually take one phase and the neutral (see *Domestic electric circuits*). [Inference: details of how a given building is wired vary and are not covered here.]

:::qc
q: Each phase of a balanced three-phase supply is 100 V rms. What is the rms voltage between two lines?
options: ["173 V", "200 V", "141 V", "100 V"]
answer: 0
right: Right. The two phasors are 120° apart, so their difference has length $\sqrt3$ times either: $100\sqrt3 \approx 173$ V.
wrong: Subtract phasors, not numbers: $|V_1 - V_2| = 2V\sin60° = \sqrt3V = 173$ V.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. AC reverses direction periodically; Indian mains is 50 Hz. Mains is AC because rotating generators produce it naturally and transformers can step it up for low-loss transmission. {lvl=1}
2. A coil rotating at ω in a field B gives $\varepsilon = NBA\omega\sin\omega t$; the emf peaks when the flux is zero (changing fastest). {lvl=2}
3. A sinusoid averages to zero over a cycle, but $\overline{\sin^2} = \tfrac12$, so $V_{rms} = V_0/\sqrt2$. The rms value is the DC that heats equally; all AC ratings are rms. {lvl=2}
4. In a resistor v and i are in phase; $p$ pulsates at $2\omega$ and $\bar P = V_{rms}I_{rms} = \tfrac12V_0I_0$. {lvl=2}
5. A phasor is an arrow of length equal to the peak, rotating at ω; its vertical projection is the instantaneous value. The arrow ahead leads. {lvl=2}
6. The turbine's torque supplies exactly the electrical power $\varepsilon i$; a commutator gives $|\varepsilon_0\sin\omega t|$, average $2\varepsilon_0/\pi$. {lvl=3}
7. rms for other waves: half-wave $V_0/2$, full-wave $V_0/\sqrt2$, square $V_0$, triangle $V_0/\sqrt3$, offset $\sqrt{V_d^2 + V_0^2/2}$. Moving-coil meters read the average; hot-wire and moving-iron read rms. {lvl=3}
8. Same-frequency sinusoids add as phasors: $A^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\varphi$. {lvl=3}
9. $\overline{ab} = \tfrac12AB\cos\varphi$; different frequencies are orthogonal, so mean squares add (Parseval). Three-phase: phasors sum to zero, line voltage $\sqrt3$ times phase, steady total power. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A rating like 220 V or 5 A is rms unless stated otherwise. Multiply by $\sqrt2$ for the peak, by $2\sqrt2$ for peak-to-peak. {lvl=1}
- In $\sin(\omega t)$ the number before t is ω, not the frequency: $\nu = \omega/2\pi$. {lvl=2}
- $\varepsilon_0 = NBA\omega$ needs ω in rad/s: convert rpm by $\omega = 2\pi \times \text{rpm}/60$. {lvl=2}
- The emf is maximum when the coil's plane is parallel to B, not perpendicular. Check which angle a problem measures (to the plane or to the normal). {lvl=2}
- $V_0/\sqrt2$ is for sinusoids only. For any other waveform, square, average over a full period (including the zero stretches), then take the root. {lvl=3}
- rms values do not add: $V_d + V_0\sin\omega t$ has rms $\sqrt{V_d^2 + V_0^2/2}$, and same-frequency sources add as phasors. {lvl=3}
- Ask what a meter responds to: average (moving coil), rms (hot-wire, moving iron, true-rms), or 1.11 × average |v| (rectifier type, right only for sinusoids). {lvl=3}
- Average over a whole number of periods; an average over a part-cycle is generally not ½ for $\sin^2$. {lvl=4}
:::
