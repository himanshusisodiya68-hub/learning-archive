---
title: AC through a resistor, an inductor and a capacitor
summary: 'Why a lamp glows through a gap in the circuit on the mains, not on a battery, and why coils tire AC.'
ncert: ["Class 12 Physics · Ch 7 Alternating Current (§7.2–7.5)"]
up_to: Olympiad
builds_on: [Alternating current, Self and mutual inductance, Capacitors, Ohm's law, Heating effect and power]
notes_prompt: Explain, without any formula, why the current through a capacitor is largest at the moments the voltage across it is zero, and why this makes the current lead the voltage by a quarter cycle.
margin:
  - kind: history
    title: History
    text: Charles Proteus Steinmetz popularised complex numbers for alternating-current calculations in the 1890s, turning differential equations into algebra with j. Before that, engineers worked with waveforms and graphical constructions. (Dates from memory, [Unverified].)
  - kind: tip
    title: Memory aid
    text: "ELI the ICE man. In an inductor (L) the voltage E comes before the current I; in a capacitor (C) the current I comes before the voltage E. Lag and lead are both by exactly a quarter cycle."
  - kind: olympiad
    title: Olympiad link
    text: "A coil (R, L) in parallel with a capacitor in series with R behaves as a pure resistance R at every frequency when R² = L/C. Such constant-resistance networks are used to split audio between loudspeakers; proving it takes three lines with complex impedance."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 7 Alternating Current, §7.2–7.5, Examples 7.2–7.5, Exercises 7.3–7.5" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Chapter Alternating Current (reactance, phasors) [chapter number not checked]" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 4 · Electric oscillations (alternating-current problems) [section number not checked]" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Chapter on alternating-current circuits (complex impedance)" }
cards:
  - { front: "Phase of the current through a pure inductor and a pure capacitor?", back: "Inductor: current lags the voltage by $\\pi/2$. Capacitor: current leads by $\\pi/2$. Resistor: in phase." }
  - { front: "Inductive and capacitive reactance?", back: "$X_L = \\omega L$ (grows with frequency), $X_C = 1/\\omega C$ (falls with frequency). Both in ohms; $I_{rms} = V_{rms}/X$." }
  - { front: "Average power taken by a pure inductor or capacitor?", back: "Zero. $p(t) = \\mp\\tfrac12 v_m i_m\\sin2\\omega t$: energy flows into the field for a quarter cycle and back out for the next." }
  - { front: "Complex impedances of R, L and C?", back: "$Z_R = R$, $Z_L = j\\omega L$, $Z_C = 1/(j\\omega C) = -j/(\\omega C)$. Add in series; add reciprocals in parallel." }
  - { front: "Real coil (R in series with L) on AC?", back: "$I = V/\\sqrt{R^2+\\omega^2L^2}$, current lags by $\\varphi$ with $\\tan\\varphi = \\omega L/R$. Only $R$ takes power: $P = I_{rms}^2R$." }
  - { front: "Cutoff of an RC filter?", back: "$\\omega_c = 1/RC$ (for RL, $R/L$). There the output is $1/\\sqrt2$ of the input, shifted by $45^\\circ$. Output across C: low-pass; across R: high-pass." }
core:
  idea: 'In a pure resistor $i$ is in phase with $v$. In a pure inductor $i$ lags $v$ by $\pi/2$ with reactance $X_L = \omega L$; in a pure capacitor $i$ leads $v$ by $\pi/2$ with $X_C = 1/\omega C$. A pure L or C takes no power on average.'
  formulas:
    - tex: 'X_L = \omega L,\qquad X_C = \frac{1}{\omega C}'
      label: 'Reactances (peak or rms current = voltage / reactance)'
    - tex: 'Z_R = R,\quad Z_L = j\omega L,\quad Z_C = \frac{1}{j\omega C}'
      label: 'Complex impedances'
  conditions:
    - 'Ideal elements: inductor with no resistance, capacitor with no leakage, both linear'
    - 'Steady state under a single-frequency sinusoidal drive (no switch-on transient)'
    - 'Voltages or currents of different elements add as phasors, not as numbers'
  sign: 'Lead and lag refer to the current relative to the voltage: it lags in an inductor and leads in a capacitor. Doubling the frequency doubles $X_L$ but halves $X_C$.'
outcomes:
  - 'Compare how R, L and C oppose a current and what each does with energy'
  - 'Find reactance, current amplitude and phase for a pure L or C and explain the zero average power'
  - 'Represent voltages and currents as phasors and as complex impedances'
  - 'Analyse a real coil, parallel branches and RC or RL low-pass and high-pass filters'
  - 'Explain the switch-on offset of an inductor and treat non-sinusoidal drives harmonic by harmonic'
opener:
  story: |
    Take a small lamp, a battery and a capacitor, which is just two metal plates with a gap of air between them. Join them in a loop. The lamp stays dark, and no wonder: the circuit has a gap in it, and charge cannot jump across air.

    Now swap the battery for a supply whose push reverses fifty times a second, like the mains in your home. Same lamp, same gap. This time the lamp **glows**. Nothing crossed the gap, yet the current is there.

    Now try a coil of wire in place of the capacitor. On a battery it lets a big current through and gets warm. On the mains the very same coil lets far less through. Same wire, same voltage, different behaviour. Something about a push that keeps changing direction is treated differently by a plain wire, a coil and a capacitor.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A lamp and capacitor on a battery stays dark; on an alternating supply the lamp glows"><path d="M50 30 H148 M172 30 H270 M270 30 V50 M270 58 V80 M50 80 H270 M50 30 V50 M50 58 V80" style="fill:none;stroke:var(--ink);stroke-width:2"/><path d="M42 50 H58 M46 58 H54" style="stroke:var(--c);stroke-width:3"/><path d="M260 50 H280 M260 58 H280" style="stroke:var(--c);stroke-width:3"/><circle cx="160" cy="30" r="12" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><path d="M152 22 L168 38 M168 22 L152 38" style="stroke:var(--muted);stroke-width:1.5"/><text x="62" y="58" style="font-size:11px;fill:var(--muted)">battery</text><text x="205" y="58" style="font-size:11px;fill:var(--muted)">capacitor</text><text x="22" y="104" style="font-size:11px;fill:var(--muted)">battery: the gap blocks it, lamp dark</text><path d="M50 140 V153 M50 177 V190 M50 140 H148 M172 140 H270 M270 140 V160 M270 168 V190 M50 190 H270" style="fill:none;stroke:var(--ink);stroke-width:2"/><circle cx="50" cy="165" r="12" style="fill:var(--surface);stroke:var(--c);stroke-width:2"/><path d="M43 165 q3.5 -8 7 0 t7 0" style="fill:none;stroke:var(--c);stroke-width:1.5"/><path d="M260 160 H280 M260 168 H280" style="stroke:var(--c);stroke-width:3"/><circle cx="160" cy="140" r="12" style="fill:color-mix(in srgb,var(--chem) 45%,var(--surface));stroke:var(--ink);stroke-width:2"/><path d="M160 118 V124 M160 156 V162 M138 140 H144 M176 140 H182 M144 124 L148 128 M176 124 L172 128 M144 156 L148 152 M176 156 L172 152" style="stroke:var(--chem);stroke-width:2"/><text x="205" y="168" style="font-size:11px;fill:var(--muted)">capacitor</text><text x="64" y="162" style="font-size:11px;fill:var(--muted)">AC supply</text><text x="22" y="214" style="font-size:11px;fill:var(--muted)">AC: charge sloshes to and fro, lamp glows</text></svg>'
life:
  - 'Tube-light chokes and old ceiling-fan regulators drop the voltage with a coil, which wastes almost no power as heat.'
  - 'The small capacitor on a ceiling fan lets the AC through and shifts its timing, which is how the motor gets started turning.'
  - 'A capacitor in front of a speaker''s tweeter passes the high notes and blocks the deep bass, so each speaker gets only the sounds it is good at.'
  - 'Phone chargers and the power supply of a TV use a coil and a capacitor to smooth out the 100 Hz ripple left after the mains is converted to DC.'
  - 'A capacitor between two amplifier stages passes the music signal but blocks the steady DC bias of the stage before.'
models:
  - name: 'Resistance to size, inertia to change'
    text: 'A plain resistor cares only how big the push is right now. A coil resists change itself, like inertia, and a capacitor resists staying the same, because its plates fill. People, habits and institutions work the same way: some resist the size of a demand, many resist the change.'
  - name: 'Busy but not spent'
    text: 'A pure coil or capacitor swaps energy back and forth every quarter cycle and keeps none, so its average power is zero though the current is large. A shop that buys and sells the same stock all day has big turnover and no profit. Large flows do not always mean real gain.'
  - name: 'Sort things by how fast they change'
    text: 'Because opposition depends on frequency, a coil and a capacitor act as filters: slow changes pass one way, quick changes the other. A moving average of prices is the same idea, a low-pass filter that hides the daily wiggle and keeps the trend.'
links:
  - leaf: 'phy/inertia-and-the-first-law'
    name: 'Inertia and the first law'
    same: 'An inductor resists a change of current as a mass resists a change of velocity: the inductance $L$ plays the part of mass, and the energy $\tfrac12Li^2$ plays the part of kinetic energy $\tfrac12mv^2$.'
    differs: 'Mass resists changes of motion in a body; the coil resists changes of current through a magnetic field, and a real coil also has resistance, which no ideal mass has.'
  - leaf: 'phy/shm-equation'
    name: 'The equation of simple harmonic motion'
    same: 'A capacitor stores energy $\tfrac12Cv^2$ like a spring stores $\tfrac12kx^2$, and a coil and a capacitor together swap energy like a mass and a spring. This is the seed of the next two lessons.'
    differs: 'Here a supply drives the circuit at its own rhythm; a free swing at its own natural frequency needs both L and C in the same loop.'
symbols:
  - s: 'v'
    means: 'voltage at one instant, the electrical push (volts, V)'
  - s: 'i'
    means: 'current at one instant, the flow of charge (amperes, A)'
  - s: 'R'
    means: 'resistance, how strongly a wire turns current into heat (ohms, Ω)'
  - s: 'L'
    means: 'inductance of a coil, how strongly it resists a change of current (henries, H)'
  - s: 'C'
    means: 'capacitance, how much charge the plates hold per volt (farads, F)'
  - s: '\omega'
    means: 'angular frequency of the supply, $2\pi$ times the frequency (radians per second)'
  - s: 'X_L'
    means: 'inductive reactance, the opposition of a coil, $\omega L$ (ohms, Ω)'
  - s: 'X_C'
    means: 'capacitive reactance, the opposition of a capacitor, $1/\omega C$ (ohms, Ω)'
  - s: 'Z'
    means: 'impedance, the total opposition of a circuit to AC (ohms, Ω)'
  - s: '\varphi'
    means: 'phase angle, how far the current is out of step with the voltage (radians or degrees)'
  - s: 'I'
    means: 'rms current, the steady value that heats as much as the AC does (A)'
  - s: 'V'
    means: 'rms voltage, the steady value that heats as much as the AC does (V)'
next:
  q: 'A coil pushes the current late and a capacitor pushes it early, in opposite directions. What happens if you put both in the same loop with a resistor: can they cancel, and could the result pick out one special frequency?'
  leaf: 'phy/lcr-circuit-and-resonance'
  name: 'The LCR circuit and resonance'
---

:::hook
q: So what's your guess? A coil passes 2 A from a 12 V battery. You connect the same coil to a 12 V AC supply at 50 Hz (12 V here is the rms value, which heats a lamp as much as 12 V DC would). What current flows now?
options: ["More than 2 A, since AC pushes harder at its peaks", "Exactly 2 A, since 12 V is 12 V", "Less than 2 A, since the coil fights every swing"]
answer: 2
right: Right, and now you can see the mystery of the two circuits. On DC only the coil's wire limits the current. On AC the coil also answers every change of current with a back-EMF, so a second kind of opposition, the reactance ωL, joins the resistance. The capacitor does the opposite trick with its plates.
wrong: The battery current tells you only the wire's resistance. On AC the current keeps changing, and the coil answers every change with a back-EMF. That extra opposition (reactance) makes the AC current smaller than 2 A, though not zero.
:::

## Three ways to oppose a current {lvl=1 id=s-why label="Class 10"}

A circuit element can oppose a current in three different ways, and they behave very differently when the current keeps reversing.

- A **resistor** turns electrical energy into heat. It cares only about how large the current is right now. A current in either direction heats it.
- An **inductor** (a coil) stores energy in its magnetic field. It does not mind a steady current; it fights a **change** of current, with a back-EMF.
- A **capacitor** stores energy in its electric field. A steady current cannot flow through it at all, because the plates simply fill up. But a current that keeps reversing never fills them, so it can keep flowing back and forth.

On a battery (DC) these behaviours are easy: the resistor obeys Ohm's law, the coil is just a piece of wire, and the capacitor blocks the current. On the mains (AC), the voltage swings 50 times a second, and the coil and capacitor start to matter. Their opposition depends on how fast the voltage swings, and the current through them no longer rises and falls in step with the voltage.

This lesson takes the three elements one at a time. Combining all three in series, and resonance, belong to the lesson *LCR circuit and resonance*.

## A resistor: current in step with the voltage {lvl=2 id=s-r label="Class 12"}

Apply $v = v_m\sin\omega t$ across a resistor $R$. Kirchhoff's loop rule gives $v - iR = 0$ at every instant, so

$$i = \frac{v_m}{R}\sin\omega t = i_m\sin\omega t,\qquad i_m = \frac{v_m}{R}.$$

The current is a sine with **no phase shift**: it is zero when the voltage is zero and largest when the voltage is largest. Ohm's law holds at every instant, and so it also holds for the peaks and for the rms values: $V = IR$ with $V = v_m/\sqrt2$, $I = i_m/\sqrt2$.

The power is $p = vi = v_m i_m\sin^2\omega t$. It is never negative: a resistor always takes energy, whichever way the current flows. The average of $\sin^2$ over a cycle is $\tfrac12$, so

$$\bar p = \tfrac12 v_m i_m = VI = I^2R.$$

That is why rms values are used: they make AC heating formulas look like DC ones. (The lesson *Alternating current* develops the rms value itself.)

:::qc
q: The current through a 50 Ω resistor on a 230 V (rms) supply is zero at some instant. At that same instant the voltage across it is
options: ["230 V", "325 V", "zero", "it cannot be told"]
answer: 2
right: Right. For a resistor v = iR at every instant, so the voltage is zero whenever the current is.
wrong: A resistor obeys v = iR at every instant; there is no lag. When the current is zero, so is the voltage.
:::

## An inductor: the current lags by a quarter cycle {lvl=2 id=s-l label="Class 12"}

A pure inductor has no resistance; its only effect is the back-EMF $-L\,di/dt$ (lesson *Self and mutual inductance*). The loop rule with $v = v_m\sin\omega t$ applied gives

$$v_m\sin\omega t - L\frac{di}{dt} = 0 \quad\Rightarrow\quad \frac{di}{dt} = \frac{v_m}{L}\sin\omega t.$$

The source voltage fixes the **slope** of the current, not the current itself. Integrating,

$$i = -\frac{v_m}{\omega L}\cos\omega t = i_m\sin\!\left(\omega t - \frac{\pi}{2}\right),\qquad i_m = \frac{v_m}{\omega L}.$$

(The constant of integration is a steady current that a real, slightly resistive coil soon loses; the section on switching on returns to it.)

**Why a quarter cycle?** The current rises as long as the voltage is positive. It therefore keeps rising through the whole positive half-cycle of $v$ and reaches its peak just as $v$ falls to zero. The current peaks a quarter cycle after the voltage: it **lags by $\pi/2$**.

**Why does the opposition grow with frequency?** In time $T/4$ the slope $v_m/L$ can build the current up only to about $(v_m/L)(T/4)$. At a higher frequency there is less time per half-cycle, so the current peak is smaller. The exact result defines the **inductive reactance**:

:::eq caption="Inductive reactance. It plays the role of resistance for the amplitudes (and rms values) of a pure inductor, but the current lags by π/2."
$$X_L = \omega L = 2\pi\nu L,\qquad i_m = \frac{v_m}{X_L},\qquad I = \frac{V}{X_L}$$
:::

The unit is the ohm: $L$ is in V·s/A and $\omega$ in s⁻¹. At $\omega = 0$ (DC) the reactance is zero, so the coil is just a wire.

:::worked title="NCERT Example 7.2 in numbers"
A pure 25.0 mH inductor on 220 V, 50 Hz: $X_L = 2\pi\times50\times0.025 = 7.85\ \Omega$, so $I = 220/7.85 = 28$ A. Double the frequency and the current halves to 14 A; on DC an ideal coil would short the supply.
:::

:::qc
q: The frequency of the supply across a pure inductor is tripled, its rms voltage unchanged. The rms current
options: ["triples", "is unchanged", "falls to one third", "falls to one ninth"]
answer: 2
right: Right. X_L = ωL triples, so I = V/X_L falls to a third.
wrong: The reactance ωL is proportional to frequency. Tripling the frequency triples X_L and divides the current by 3.
:::

## A capacitor: the current leads by a quarter cycle {lvl=2 id=s-c label="Class 12"}

For a capacitor the charge follows the voltage at every instant, $q = Cv$. The current is the rate at which charge arrives on the plate:

$$i = \frac{dq}{dt} = C\frac{dv}{dt} = \omega C v_m\cos\omega t = i_m\sin\!\left(\omega t + \frac{\pi}{2}\right),\qquad i_m = \omega C v_m.$$

**Why a quarter cycle ahead?** Charge flows fastest when the voltage is changing fastest, which is as $v$ passes through zero. When $v$ is at its peak it momentarily stops changing, the plates stop filling, and the current is zero. So the current peak comes a quarter cycle **before** the voltage peak: it **leads by $\pi/2$**.

**Why does the opposition fall with frequency?** The plates hold at most $Cv_m$ of charge. That charge must be delivered in a quarter cycle. The faster the cycles, the faster it must flow, so the current amplitude grows with $\omega$. This defines the **capacitive reactance**:

:::eq caption="Capacitive reactance. Large at low frequency (infinite for DC: the capacitor blocks it), small at high frequency."
$$X_C = \frac{1}{\omega C} = \frac{1}{2\pi\nu C},\qquad i_m = \frac{v_m}{X_C},\qquad I = \frac{V}{X_C}$$
:::

For NCERT Example 7.4, a 15.0 µF capacitor at 50 Hz has $X_C = 212\ \Omega$; on 220 V it carries 1.04 A rms (1.47 A peak). No charge ever crosses the gap: the current in the wires is matched, inside the capacitor, by a changing electric field (the lesson *Displacement current* makes this precise).

:::figure caption="Voltage v (blue) and current i (orange) over one cycle. Left, a pure inductor: i reaches its peak a quarter cycle after v, so it lags. Right, a pure capacitor: i peaks a quarter cycle before v, so it leads. In both, i is zero exactly when v is at a peak."
<svg viewBox="0 0 520 190" role="img" aria-label="Two plots of voltage and current against time; inductor current lags, capacitor current leads by a quarter cycle">
<line class="faint" x1="30" y1="90" x2="240" y2="90"/><line class="faint" x1="290" y1="90" x2="500" y2="90"/>
<line class="faint" x1="80" y1="25" x2="80" y2="155"/><line class="faint" x1="130" y1="25" x2="130" y2="155"/>
<line class="faint" x1="340" y1="25" x2="340" y2="155"/><line class="faint" x1="390" y1="25" x2="390" y2="155"/>
<path class="ray" d="M30.0,90.0 L38.3,75.8 L46.7,62.5 L55.0,51.1 L63.3,42.4 L71.7,36.9 L80.0,35.0 L88.3,36.9 L96.7,42.4 L105.0,51.1 L113.3,62.5 L121.7,75.8 L130.0,90.0 L138.3,104.2 L146.7,117.5 L155.0,128.9 L163.3,137.6 L171.7,143.1 L180.0,145.0 L188.3,143.1 L196.7,137.6 L205.0,128.9 L213.3,117.5 L221.7,104.2 L230.0,90.0"/>
<path class="wf" d="M30.0,128.0 L38.3,126.7 L46.7,122.9 L55.0,116.9 L63.3,109.0 L71.7,99.8 L80.0,90.0 L88.3,80.2 L96.7,71.0 L105.0,63.1 L113.3,57.1 L121.7,53.3 L130.0,52.0 L138.3,53.3 L146.7,57.1 L155.0,63.1 L163.3,71.0 L171.7,80.2 L180.0,90.0 L188.3,99.8 L196.7,109.0 L205.0,116.9 L213.3,122.9 L221.7,126.7 L230.0,128.0"/>
<path class="ray" d="M290.0,90.0 L298.3,75.8 L306.7,62.5 L315.0,51.1 L323.3,42.4 L331.7,36.9 L340.0,35.0 L348.3,36.9 L356.7,42.4 L365.0,51.1 L373.3,62.5 L381.7,75.8 L390.0,90.0 L398.3,104.2 L406.7,117.5 L415.0,128.9 L423.3,137.6 L431.7,143.1 L440.0,145.0 L448.3,143.1 L456.7,137.6 L465.0,128.9 L473.3,117.5 L481.7,104.2 L490.0,90.0"/>
<path class="wf" d="M290.0,52.0 L298.3,53.3 L306.7,57.1 L315.0,63.1 L323.3,71.0 L331.7,80.2 L340.0,90.0 L348.3,99.8 L356.7,109.0 L365.0,116.9 L373.3,122.9 L381.7,126.7 L390.0,128.0 L398.3,126.7 L406.7,122.9 L415.0,116.9 L423.3,109.0 L431.7,99.8 L440.0,90.0 L448.3,80.2 L456.7,71.0 L465.0,63.1 L473.3,57.1 L481.7,53.3 L490.0,52.0"/>
<text class="k" x="100" y="180">Inductor: i lags</text><text class="k" x="355" y="180">Capacitor: i leads</text>
<text x="62" y="28" style="fill:var(--phy)">v peak</text><text x="136" y="46" style="fill:var(--eng)">i peak</text>
<text x="322" y="28" style="fill:var(--phy)">v peak</text><text x="282" y="46" style="fill:var(--eng)">i peak</text>
<text x="236" y="94">t</text><text x="496" y="94">t</text>
</svg>
:::

:::qc
q: At the instant the voltage across a capacitor on AC is at its positive peak, the current through it is
options: ["at its positive peak", "at its negative peak", "zero", "half its peak"]
answer: 2
right: Right. i = C dv/dt, and at a peak the voltage momentarily stops changing, so the current is zero.
wrong: The current depends on how fast v is changing, i = C dv/dt. At a peak v is flat for an instant, so the current is zero.
:::

## Phasors: pictures of rotating quantities {lvl=2 id=s-phasor label="Class 12"}

Keeping track of sines and cosines gets tedious once two elements are combined. A **phasor** is a picture that does the bookkeeping.

Think of $v_m\sin\omega t$ as the vertical projection of an arrow of length $v_m$ that rotates anticlockwise at angular speed $\omega$. The current is another arrow, of length $i_m$, rotating at the same speed. Because both rotate together, the **angle between them never changes**, and that angle is the phase difference. The picture at any one instant contains all the information.

- **Resistor:** $\mathbf V$ and $\mathbf I$ point the same way.
- **Inductor:** $\mathbf I$ is $90^\circ$ **behind** $\mathbf V$ (clockwise from it).
- **Capacitor:** $\mathbf I$ is $90^\circ$ **ahead** of $\mathbf V$ (anticlockwise from it).

Phasors add like vectors because sines of the same frequency add like the projections of arrows. That is the whole reason they are useful: a sum of two shifted sines is one sine whose amplitude and phase come from the arrow sum.

:::figure caption="Phasor diagrams at one instant. Both arrows rotate anticlockwise at ω; the actual voltage and current are their vertical projections. Resistor: V and I in line. Inductor: I is 90° clockwise from V (lags). Capacitor: I is 90° anticlockwise from V (leads)."
<svg viewBox="0 0 520 180" role="img" aria-label="Three phasor diagrams for a resistor, an inductor and a capacitor">
<defs><marker id="ahv7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--phy)"/></marker><marker id="ahi7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="faint" x1="30" y1="95" x2="140" y2="95"/><line class="faint" x1="80" y1="30" x2="80" y2="155"/>
<line class="faint" x1="210" y1="95" x2="320" y2="95"/><line class="faint" x1="260" y1="30" x2="260" y2="155"/>
<line class="faint" x1="390" y1="95" x2="500" y2="95"/><line class="faint" x1="440" y1="30" x2="440" y2="155"/>
<line class="ray" x1="80" y1="95" x2="132" y2="65" marker-end="url(#ahv7)"/><line class="wf" x1="80" y1="95" x2="112" y2="77" marker-end="url(#ahi7)" style="stroke-width:3"/>
<line class="ray" x1="260" y1="95" x2="312" y2="65" marker-end="url(#ahv7)"/><line class="wf" x1="260" y1="95" x2="280" y2="130" marker-end="url(#ahi7)"/>
<line class="ray" x1="440" y1="95" x2="492" y2="65" marker-end="url(#ahv7)"/><line class="wf" x1="440" y1="95" x2="420" y2="60" marker-end="url(#ahi7)"/>
<text x="134" y="62" style="fill:var(--phy)">V</text><text x="100" y="72" style="fill:var(--eng)">I</text>
<text x="314" y="62" style="fill:var(--phy)">V</text><text x="284" y="140" style="fill:var(--eng)">I</text>
<text x="494" y="62" style="fill:var(--phy)">V</text><text x="408" y="56" style="fill:var(--eng)">I</text>
<text x="292" y="108">90°</text><text x="450" y="64">90°</text>
<text class="k" x="45" y="175">Resistor</text><text class="k" x="225" y="175">Inductor</text><text class="k" x="400" y="175">Capacitor</text>
</svg>
:::

:::qc
q: In a phasor diagram the current arrow is drawn 90° clockwise from the voltage arrow. The element is
options: ["a resistor", "an inductor", "a capacitor", "it could be either L or C"]
answer: 1
right: Right. Phasors rotate anticlockwise, so an arrow 90° clockwise from V is behind it: the current lags, which is an inductor.
wrong: Phasors rotate anticlockwise, so clockwise means behind. A current lagging by 90° belongs to an inductor.
:::

## Why a pure L or C takes no power on average {lvl=2 id=s-power label="Class 12"}

For the inductor, $v = v_m\sin\omega t$ and $i = -i_m\cos\omega t$, so

$$p = vi = -v_m i_m\sin\omega t\cos\omega t = -\tfrac12 v_m i_m\sin2\omega t.$$

The power swings at **twice** the supply frequency and is negative as often as it is positive. Its average over a cycle is zero. For the capacitor the same steps give $p = +\tfrac12 v_m i_m\sin2\omega t$, again averaging to zero.

The reason is energy storage. The inductor holds $U = \tfrac12 Li^2$ in its magnetic field. During a quarter cycle in which $|i|$ grows, the source pushes energy into the field ($p > 0$). During the next quarter, $|i|$ falls and the field hands the same energy back ($p < 0$). Check: $dU/dt = Li\,di/dt = vi$. The capacitor does the same with $\tfrac12 Cv^2$ in its electric field. Nothing is converted to heat, so nothing is lost.

This is why a pure inductor carrying 28 A (Example 7.2) dissipates no power, and why NCERT Exercise 7.4's capacitor draws current but no net energy.

:::figure caption="A pure inductor over two cycles: voltage v (blue), current i (orange, lagging) and power p = vi (green). p swings at twice the frequency, with equal areas above and below the axis: energy goes into the magnetic field and comes back."
<svg viewBox="0 0 500 160" role="img" aria-label="Voltage, current and power curves for a pure inductor; power alternates sign at twice the frequency">
<line class="faint" x1="30" y1="85" x2="475" y2="85"/>
<path class="ray" d="M30,85 L39,73 L48,62 L58,53 L67,46 L76,42 L85,40 L94,42 L103,46 L112,53 L122,62 L131,73 L140,85 L149,97 L158,107 L168,117 L177,124 L186,128 L195,130 L204,128 L213,124 L222,117 L232,108 L241,97 L250,85 L259,73 L268,62 L278,53 L287,46 L296,42 L305,40 L314,42 L323,46 L332,53 L342,63 L351,73 L360,85 L369,97 L378,107 L388,117 L397,124 L406,128 L415,130 L424,128 L433,124 L442,117 L452,108 L461,97 L470,85"/>
<path class="wf" d="M30,115 L39,114 L48,111 L58,106 L67,100 L76,93 L85,85 L94,77 L103,70 L112,64 L122,59 L131,56 L140,55 L149,56 L158,59 L168,64 L177,70 L186,77 L195,85 L204,93 L213,100 L222,106 L232,111 L241,114 L250,115 L259,114 L268,111 L278,106 L287,100 L296,93 L305,85 L314,77 L323,70 L332,64 L342,59 L351,56 L360,55 L369,56 L378,59 L388,64 L397,70 L406,77 L415,85 L424,93 L433,100 L442,106 L452,111 L461,114 L470,115"/>
<path d="M30,85 L39,105 L48,120 L58,125 L67,120 L76,105 L85,85 L94,65 L103,50 L112,45 L122,50 L131,65 L140,85 L149,105 L158,120 L168,125 L177,120 L186,105 L195,85 L204,65 L213,50 L222,45 L232,50 L241,65 L250,85 L259,105 L268,120 L278,125 L287,120 L296,105 L305,85 L314,65 L323,50 L332,45 L342,50 L351,65 L360,85 L369,105 L378,120 L388,125 L397,120 L406,105 L415,85 L424,65 L433,50 L442,45 L452,50 L461,65 L470,85" style="stroke:var(--bio);stroke-width:1.6;fill:none"/>
<text x="80" y="34" style="fill:var(--phy)">v</text><text x="135" y="50" style="fill:var(--eng)">i</text><text x="40" y="138" style="fill:var(--bio)">p &lt; 0: field returns energy</text><text x="218" y="38" style="fill:var(--bio)">p</text>
<text x="300" y="30" style="fill:var(--bio)">p &gt; 0: source fills the field</text>
</svg>
:::

:::qc
q: A pure capacitor on a 230 V, 50 Hz supply carries 2 A rms. The average power it draws is
options: ["460 W", "230 W", "zero", "920 W"]
answer: 2
right: Right. Its current is 90° out of phase with the voltage, so p(t) is positive and negative for equal times and averages to zero.
wrong: Multiplying V by I works only when they are in phase. For a pure capacitor they are 90° apart; energy flows in and back out, and the average power is zero.
:::

## Lamps, iron rods and capacitors {lvl=2 id=s-lamp label="Class 12"}

A lamp in series with a reactive element is a good test of these ideas, because the lamp's brightness reports the current.

**Lamp and capacitor (NCERT Example 7.3).** On DC the capacitor charges in a moment and then blocks; the lamp stays dark (after a brief flash at most). On AC it keeps charging and discharging, and the lamp glows. Make $C$ smaller and $X_C = 1/\omega C$ grows, so the current falls and the lamp dims. Raise the frequency and the lamp brightens.

**Lamp and coil, with an iron rod (NCERT Example 7.5).** Pushing an iron rod into the coil magnetises the iron, which multiplies the flux for the same current, so $L$ rises (by a large factor for soft iron). $X_L = \omega L$ rises, the coil takes a larger share of the supply voltage, the current falls, and the lamp **dims**. On DC the rod would make no difference to the steady glow, since only the coil's resistance matters then.

The voltages across the lamp and the coil do **not** simply add to the supply voltage, because they are $90^\circ$ apart; the next section shows how they combine.

:::qc
q: A lamp is in series with a capacitor on an AC supply. A second identical capacitor is connected in parallel with the first. The lamp
options: ["dims", "brightens", "is unchanged", "goes out"]
answer: 1
right: Right. Capacitors in parallel add, so C doubles, X_C = 1/ωC halves, and more current flows.
wrong: In parallel the capacitance doubles. A larger C has a smaller reactance 1/ωC, so the current rises and the lamp brightens.
:::

## A real coil: resistance and inductance together {lvl=3 id=s-coil label="JEE"}

A real coil has both resistance $R$ (its wire) and inductance $L$. Treat it as $R$ and $L$ in series: one current $i = i_m\sin\omega t$ flows through both.

- The voltage across $R$ is in phase with the current: phasor $V_R = IR$ along $\mathbf I$.
- The voltage across $L$ leads the current by $90^\circ$: phasor $V_L = IX_L$ at right angles.

The total voltage is their **phasor** sum, the hypotenuse of a right triangle:

:::eq caption="A coil of resistance R and inductance L on AC. The current lags the voltage by φ, between 0 (pure R) and 90° (pure L)."
$$V = I\sqrt{R^2 + \omega^2L^2},\qquad \tan\varphi = \frac{\omega L}{R}$$
:::

The quantity $\sqrt{R^2+\omega^2L^2}$ is the coil's **impedance**. Only $R$ absorbs energy, so the average power is $I^2R$, however large $X_L$ is.

:::figure caption="Voltage triangle for a real coil. The current I is the reference. V_R = IR lies along I, V_L = IωL is 90° ahead, and the supply voltage V is the hypotenuse. The current lags V by φ with tan φ = ωL/R."
<svg viewBox="0 0 360 180" role="img" aria-label="Right triangle of voltage phasors V_R, V_L and V for a coil">
<defs><marker id="ahc7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<line class="ln" x1="50" y1="150" x2="230" y2="150" marker-end="url(#ahc7)"/>
<line class="ln" x1="230" y1="150" x2="230" y2="30" marker-end="url(#ahc7)"/>
<line class="ray" x1="50" y1="150" x2="230" y2="30" style="stroke-width:2.5"/>
<line class="wf" x1="50" y1="162" x2="140" y2="162"/>
<path class="ln" d="M95,150 A45,45 0 0 0 87,125"/>
<text x="100" y="140">φ</text><text x="120" y="176" style="fill:var(--eng)">I (reference)</text>
<text x="130" y="145">V_R = IR</text><text x="238" y="95">V_L = IωL</text><text x="50" y="56" style="fill:var(--phy)">V = I√(R² + ω²L²)</text>
</svg>
:::

:::worked title="Measuring a coil's inductance"
A coil draws 2.0 A from a 12 V battery and 1.2 A from a 12 V (rms), 50 Hz supply. (This is the hook.) Find $R$, $L$ and the phase lag.

DC sees only resistance: $R = 12/2.0 = 6.0\ \Omega$. AC sees the impedance: $Z = 12/1.2 = 10\ \Omega$. So $X_L = \sqrt{10^2 - 6^2} = 8.0\ \Omega$ and $L = 8.0/(2\pi\times50) = 25$ mH. The current lags by $\varphi = \tan^{-1}(8/6) = 53^\circ$. The AC power is $1.2^2\times6 = 8.6$ W, not $12\times1.2 = 14.4$ W.
:::

:::qc
q: A coil has R = 30 Ω and X_L = 40 Ω. On a 100 V (rms) supply the voltage across its inductance (if it could be measured alone) is
options: ["100 V", "80 V", "57 V", "40 V"]
answer: 1
right: Right. Z = 50 Ω, I = 2 A, V_L = 2 × 40 = 80 V, and V_R = 60 V. 60 and 80 add as phasors to 100, not as numbers.
wrong: Z = √(30² + 40²) = 50 Ω, so I = 2 A and V_L = IX_L = 80 V. It exceeds half the supply because V_R and V_L are at right angles and add like the sides of a triangle.
:::

## Complex impedance {lvl=3 id=s-complex label="JEE"}

Phasors are arrows in a plane, and arrows in a plane are complex numbers. Writing them that way turns AC circuits into DC-style algebra. Electrical engineers write $j = \sqrt{-1}$, because $i$ is taken by current.

Represent $v = v_m\cos(\omega t + \alpha)$ as the real part of $\tilde V e^{j\omega t}$, with the complex amplitude $\tilde V = v_m e^{j\alpha}$. The key fact is

$$\frac{d}{dt}e^{j\omega t} = j\omega\, e^{j\omega t}:$$

differentiation becomes **multiplication by $j\omega$**, and multiplying by $j$ is a rotation by $90^\circ$ anticlockwise. So

- inductor: $v = L\,di/dt$ becomes $\tilde V = j\omega L\,\tilde I$;
- capacitor: $i = C\,dv/dt$ becomes $\tilde I = j\omega C\,\tilde V$, that is $\tilde V = \tilde I/(j\omega C)$;
- resistor: $\tilde V = R\tilde I$.

Each element has a complex **impedance** $Z = \tilde V/\tilde I$:

:::eq caption="Complex impedances. |Z| is the ratio of voltage amplitude to current amplitude; arg Z is how far the voltage leads the current."
$$Z_R = R,\qquad Z_L = j\omega L,\qquad Z_C = \frac{1}{j\omega C} = -\frac{j}{\omega C}$$
:::

Kirchhoff's laws hold for the complex amplitudes, because they are linear and every term carries the same $e^{j\omega t}$. So impedances combine exactly like resistances:

$$\text{series: } Z = Z_1 + Z_2,\qquad \text{parallel: } \frac{1}{Z} = \frac{1}{Z_1} + \frac{1}{Z_2}.$$

The real part of $Z$ is the resistance; the imaginary part is the **reactance** $X$, positive for inductive and negative for capacitive behaviour. With $Z = R + jX$, the amplitude ratio is $|Z| = \sqrt{R^2+X^2}$ and the voltage leads the current by $\varphi = \tan^{-1}(X/R)$.

:::worked title="A real coil, the complex way"
The coil above: $Z = 6 + j\,8\ \Omega$. Then $|Z| = 10\ \Omega$ and $\arg Z = 53^\circ$: the voltage leads the current by $53^\circ$, the same result without any triangle. For a resistor $R$ in series with a capacitor, $Z = R - j/\omega C$: the voltage now **lags** the current.
:::

:::qc
q: An element has complex impedance Z = −50j Ω at the operating frequency. It is
options: ["a 50 Ω resistor", "an inductor with X_L = 50 Ω", "a capacitor with X_C = 50 Ω", "impossible"]
answer: 2
right: Right. Z_C = −j/ωC, a negative imaginary impedance; here 1/ωC = 50 Ω.
wrong: A negative imaginary impedance is capacitive: Z_C = 1/(jωC) = −j/(ωC). So X_C = 50 Ω.
:::

## Parallel branches: adding currents {lvl=3 id=s-parallel label="JEE"}

In a parallel circuit the **voltage** is common, so it is the natural reference, and the branch **currents** add as phasors. In complex form, $\tilde I = \tilde V\,(1/Z_1 + 1/Z_2)$.

**R parallel C.** $I_R = V/R$ is in phase with $V$; $I_C = V\omega C$ leads by $90^\circ$. The line current is $I = V\sqrt{1/R^2 + \omega^2C^2}$, leading by $\tan^{-1}(\omega CR)$.

**R parallel L.** $I_L = V/\omega L$ lags by $90^\circ$. The line current lags by $\tan^{-1}(R/\omega L)$. Compare the series coil, where $\tan\varphi = \omega L/R$: the ratio is upside down, because in parallel a **small** reactance takes the larger current.

**L parallel C.** $I_L$ lags $V$ by $90^\circ$ and $I_C$ leads by $90^\circ$, so the two branch currents are exactly **opposite**. The line current is their difference,

$$I = V\left|\,\omega C - \frac{1}{\omega L}\,\right|,$$

and it can be **smaller than either branch current**: energy sloshes between the coil and the capacitor and the source supplies only the difference. (When the two cancel exactly, the line current vanishes; that frequency is the subject of *LCR circuit and resonance*.)

:::figure caption="Current phasors for R in parallel with C. The common voltage V is the reference. I_R lies along V, I_C is 90° ahead, and the line current I is the diagonal, leading V by θ with tan θ = ωCR."
<svg viewBox="0 0 360 180" role="img" aria-label="Current phasor diagram for a resistor and a capacitor in parallel">
<defs><marker id="ahp7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs>
<line class="ray" x1="50" y1="150" x2="320" y2="150"/><text x="320" y="168" style="fill:var(--phy);text-anchor:end">V (reference)</text>
<line class="wf" x1="50" y1="150" x2="200" y2="150" marker-end="url(#ahp7)"/>
<line class="wf" x1="50" y1="150" x2="50" y2="40" marker-end="url(#ahp7)"/>
<line class="faint" x1="200" y1="150" x2="200" y2="40"/><line class="faint" x1="50" y1="40" x2="200" y2="40"/>
<line class="wf" x1="50" y1="150" x2="200" y2="40" marker-end="url(#ahp7)" style="stroke-width:3"/>
<path class="ln" d="M100,150 A50,50 0 0 0 90,121"/>
<text x="108" y="140">θ</text><text x="110" y="168">I_R = V/R</text><text x="56" y="36">I_C = VωC</text><text x="130" y="84">I</text>
</svg>
:::

:::worked title="A choke and a capacitor in parallel"
A 1.0 H inductor and a 5.0 µF capacitor are connected in parallel across 230 V, 50 Hz. Then $X_L = 314\ \Omega$ and $X_C = 637\ \Omega$, so $I_L = 0.732$ A and $I_C = 0.361$ A. They are opposite in phase, so the supply delivers only $0.732 - 0.361 = 0.371$ A, lagging by $90^\circ$ (the inductive branch wins). An ammeter in each branch and one in the supply line would read 0.73 A, 0.36 A and 0.37 A.
:::

:::qc
q: A 60 Ω resistor and a capacitor with X_C = 80 Ω are in parallel across 240 V (rms). The supply current is
options: ["7 A", "5 A", "2.4 A", "1 A"]
answer: 1
right: Right. I_R = 4 A, I_C = 3 A, 90° apart, so I = √(16 + 9) = 5 A.
wrong: The branch currents are 4 A (in phase) and 3 A (leading by 90°). They add as phasors: √(4² + 3²) = 5 A, not 7 A.
:::

## Frequency as a dial: low-pass and high-pass {lvl=3 id=s-filter label="JEE"}

Because $X_L$ and $X_C$ depend on frequency, a resistor plus one reactive element divides a voltage differently at different frequencies. This is the simplest **filter**.

Drive $R$ and $C$ in series with $\tilde V_{in}$ and take the output across $C$. As a complex voltage divider,

$$\frac{\tilde V_{out}}{\tilde V_{in}} = \frac{Z_C}{R + Z_C} = \frac{1}{1 + j\omega RC},\qquad \left|\frac{V_{out}}{V_{in}}\right| = \frac{1}{\sqrt{1 + (\omega RC)^2}}.$$

- At low frequency $X_C \gg R$: the capacitor takes almost all the voltage, and the output ≈ input.
- At high frequency $X_C \ll R$: the capacitor is nearly a short, and the output ≈ 0.

So the output across $C$ is a **low-pass** filter. Taken across $R$ instead, the ratio is $\omega RC/\sqrt{1+(\omega RC)^2}$: a **high-pass** filter. The changeover happens where $R = X_C$:

:::eq caption="Cutoff (corner) angular frequency of RC and RL filters. At ω_c each output is 1/√2 ≈ 0.707 of the input (half the power), shifted by 45°."
$$\omega_c = \frac{1}{RC}\quad(\text{RC}),\qquad \omega_c = \frac{R}{L}\quad(\text{RL})$$
:::

For an RL pair the roles swap: the output across $L$ is high-pass (the coil blocks high frequencies, so it holds the high-frequency voltage), and the output across $R$ is low-pass. In every case, **the element whose reactance is large takes the voltage**.

:::figure caption="Output/input amplitude of an RC divider against frequency (log scale, ω/ω_c from 0.01 to 100). Across C (blue) the low frequencies pass; across R (orange) the high frequencies pass. Both curves cross at 0.707 when ω = ω_c = 1/RC."
<svg viewBox="0 0 340 200" role="img" aria-label="Low-pass and high-pass response curves crossing at 0.707 at the cutoff frequency">
<line class="ln" x1="40" y1="170" x2="310" y2="170"/><line class="ln" x1="40" y1="20" x2="40" y2="170"/>
<line class="faint" x1="40" y1="30" x2="300" y2="30"/><line class="faint" x1="40" y1="71" x2="300" y2="71"/><line class="faint" x1="170" y1="20" x2="170" y2="170"/>
<path class="ray" d="M40.0,30.0 L53.0,30.0 L66.0,30.0 L79.0,30.1 L92.0,30.3 L105.0,30.7 L118.0,31.7 L131.0,34.2 L144.0,39.9 L157.0,51.6 L170.0,71.0 L183.0,95.3 L196.0,118.2 L209.0,135.9 L222.0,148.1 L235.0,156.1 L248.0,161.2 L261.0,164.4 L274.0,166.5 L287.0,167.8 L300.0,168.6"/>
<path class="wf" d="M40.0,168.6 L53.0,167.8 L66.0,166.5 L79.0,164.4 L92.0,161.2 L105.0,156.1 L118.0,148.1 L131.0,135.9 L144.0,118.2 L157.0,95.3 L170.0,71.0 L183.0,51.6 L196.0,39.9 L209.0,34.2 L222.0,31.7 L235.0,30.7 L248.0,30.3 L261.0,30.1 L274.0,30.0 L287.0,30.0 L300.0,30.0"/>
<text x="20" y="34">1</text><text x="6" y="75">0.71</text><text x="34" y="186">0.01</text><text x="162" y="186">ω_c</text><text x="290" y="186">100 ω_c</text>
<text x="60" y="24" style="fill:var(--phy)">across C</text><text x="232" y="24" style="fill:var(--eng)">across R</text>
</svg>
:::

:::worked title="Removing a whistle from a hum"
A signal contains 50 Hz hum and a 10 kHz whistle. It is passed through $R = 3.3$ kΩ in series with $C = 47$ nF, and the output is taken across $C$. Here $RC = 1.55\times10^{-4}$ s and $f_c = 1/(2\pi RC) = 1.03$ kHz.

At 50 Hz, $\omega RC = 0.049$: the output is $0.999$ of the input. At 10 kHz, $\omega RC = 9.7$: the output is $1/\sqrt{1+95} = 0.10$ of the input. The whistle is cut tenfold while the hum passes untouched. Take the output across $R$ instead and the opposite happens.
:::

:::qc
q: An RL circuit has R = 100 Ω and L = 10 mH. The output is taken across L. Signals well above which angular frequency pass almost unchanged?
options: ["100 rad/s", "1000 rad/s", "10 000 rad/s", "1 rad/s"]
answer: 2
right: Right. ω_c = R/L = 10⁴ rad/s. Across L the circuit is high-pass, so frequencies well above that pass.
wrong: The corner of an RL filter is ω_c = R/L = 100/0.01 = 10⁴ rad/s, and the output across L is high-pass.
:::

## Chokes, coupling and bypass capacitors {lvl=3 id=s-uses label="JEE"}

These frequency rules explain several standard circuit parts.

**The choke.** To drop part of the mains voltage before a lamp or motor, a resistor works but wastes $I^2R$ as heat. A coil of low resistance and large $L$ drops the voltage by reactance instead, and reactance takes no average power. Fluorescent tube chokes and older fan regulators work this way. A choke in a DC power supply does the reverse job: it passes the steady current freely ($X_L = 0$) while opposing the 100 Hz ripple.

**The coupling capacitor.** Between two amplifier stages, the DC bias of one stage must not reach the next, but the signal must. A capacitor in series blocks DC ($X_C = \infty$) and passes the signal if its reactance at signal frequencies is small compared with the resistance that follows. That is the RC high-pass filter above, with its corner placed below the lowest signal frequency.

**The bypass capacitor.** A capacitor connected across a resistor or a supply rail gives AC a low-reactance path round it while leaving the DC conditions alone. High-frequency noise on a supply line, for example, is shunted to ground.

[Inference] Specific component values in real tube-light and fan circuits vary with design and are not given here.

:::qc
q: A lamp rated 110 V must run from a 220 V AC supply. Why is a series choke preferred over a series resistor?
options: ["The choke drops less voltage", "The choke wastes almost no power as heat", "The choke makes the current larger", "The resistor would not work on AC"]
answer: 1
right: Right. Both can drop the extra voltage, but a pure inductor's average power is zero, while the resistor would dissipate as much power as the lamp itself.
wrong: A resistor works on AC too, but it heats up. A choke drops the voltage through reactance, and reactance takes no average power.
:::

## Instantaneous power for any phase {lvl=3 id=s-ptg label="JEE"}

The three power results are one formula. If $v = v_m\sin\omega t$ and $i = i_m\sin(\omega t - \varphi)$, then

$$p = vi = \tfrac12 v_m i_m\left[\cos\varphi - \cos(2\omega t - \varphi)\right].$$

The second term oscillates at $2\omega$ and averages to zero. The average is $\tfrac12 v_m i_m\cos\varphi = VI\cos\varphi$:

- $\varphi = 0$ (resistor): $\bar p = VI$, and $p$ never goes negative;
- $\varphi = \pm\pi/2$ (pure L or C): $\bar p = 0$, and $p$ swings between $\pm VI$.

Note the peak rate at which energy enters a pure inductor: $\tfrac12 v_m i_m = VI$, the product of the rms values, though the average is zero. The factor $\cos\varphi$ for a general circuit (the power factor) is developed in *LCR circuit and resonance*.

## Switching on: the offset an inductor remembers {lvl=4 id=s-switch label="Olympiad"}

The integral in the inductor section had a constant. It matters at the moment of switching. Connect $v = v_m\sin\omega t$ to an ideal inductor at $t = 0$, with $i(0) = 0$:

$$i(t) = \int_0^t \frac{v_m}{L}\sin\omega t'\,dt' = \frac{v_m}{\omega L}\left(1 - \cos\omega t\right).$$

The current is the steady-state sine $-\tfrac{v_m}{\omega L}\cos\omega t$ **plus a DC offset** $v_m/\omega L$. It never goes negative and peaks at $2v_m/\omega L$, twice the steady value. An ideal inductor keeps this offset forever, since no voltage averages it away.

If instead the switch closes at a voltage **peak**, $v = v_m\cos\omega t$, then $i = (v_m/\omega L)\sin\omega t$: no offset at all. The general rule: the offset equals the difference between the actual initial current (zero) and the steady-state current at that instant.

In a real coil the loop equation $L\,di/dt + Ri = v$ makes the offset decay as $e^{-Rt/L}$. A large transformer or motor, with $L/R$ of many cycles, can draw a big inrush current if switched on near a voltage zero. [Inference] The detailed inrush of iron-cored transformers is larger still, because the doubled flux saturates the core; that goes beyond this linear model.

The capacitor has its dual: connecting a sinusoid to an uncharged capacitor at a voltage peak demands an instant jump in charge, which in the ideal case means an infinite current spike. In practice the wire resistance limits it.

:::qc
q: An ideal 0.1 H inductor is connected at t = 0, when the voltage is zero and rising, to a 50 Hz supply of peak 100 V. The largest current that occurs is about
options: ["3.2 A", "6.4 A", "2.3 A", "zero"]
answer: 1
right: Right. v_m/ωL = 100/31.4 = 3.2 A, and the switch-on offset doubles the peak to 6.4 A.
wrong: Switching at a voltage zero gives i = (v_m/ωL)(1 − cos ωt), whose peak is 2v_m/ωL = 2 × 3.2 = 6.4 A.
:::

## Non-sinusoidal voltages {lvl=4 id=s-shapes label="Olympiad"}

Why is all of AC theory built on sines? Because a sine is the only periodic shape that survives differentiation unchanged except for a shift and a scale: $\frac{d}{dt}\sin\omega t = \omega\sin(\omega t + \pi/2)$. Since $L$ and $C$ act by differentiating, a sinusoidal voltage always produces a sinusoidal current. Other shapes get distorted.

**Square wave on an inductor.** Let $v = \pm V_0$, switching every half-period $T/2$. During each half, $di/dt = \pm V_0/L$ is constant, so the current is a **triangle wave**. In steady state it rises by $V_0T/2L$ in one half and falls by the same in the next, so its amplitude is $V_0T/4L$.

**Triangle wave on a capacitor.** $dv/dt$ is constant on each slope, so $i = C\,dv/dt$ is a **square wave**.

**The frequency-domain view.** Any periodic voltage is a sum of sines (a Fourier series). A square wave contains odd harmonics $n = 1, 3, 5, \dots$ with amplitudes $4V_0/(n\pi)$. Each harmonic meets its own reactance. An inductor has $X_L = n\omega L$, so it suppresses the harmonics by a further $1/n$: the current harmonics fall as $1/n^2$, which is why the current looks smoother (a triangle) than the voltage. A capacitor does the opposite: $X_C = 1/(n\omega C)$ lets the harmonics through more strongly, so its current looks spikier than the voltage.

This is the same rule as the filter section, applied harmonic by harmonic: **inductors smooth current, capacitors smooth voltage**.

:::qc
q: A square-wave voltage drives a pure capacitor through a small resistor. The current waveform is closest to
options: ["a square wave", "a triangle wave", "a sine wave", "sharp spikes at each switching instant"]
answer: 3
right: Right. Between switchings dv/dt = 0, so no current flows; at each jump the capacitor must change its charge almost instantly, giving a spike limited only by the resistor.
wrong: i = C dv/dt. A square wave is flat except at its jumps, so the current is zero most of the time with sharp spikes at the jumps.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A resistor burns energy, an inductor stores it in a magnetic field, a capacitor stores it in an electric field. Only the resistor cares about the current alone; L and C respond to its changes. {lvl=1}
2. Resistor: $i = (v_m/R)\sin\omega t$, in phase. Inductor: $L\,di/dt = v$, current lags by $\pi/2$, $X_L = \omega L$. Capacitor: $i = C\,dv/dt$, current leads by $\pi/2$, $X_C = 1/\omega C$. {lvl=2}
3. Phasors are rotating arrows whose projections are $v$ and $i$; quantities of one frequency add as arrows. {lvl=2}
4. Pure L or C: $p = \mp\tfrac12 v_mi_m\sin2\omega t$, average zero. Energy is swapped with the field twice per cycle. {lvl=2}
5. An iron rod in a coil raises $L$ and dims a series lamp; a smaller capacitor or lower frequency dims a lamp in series with C. {lvl=2}
6. Real coil: $Z = \sqrt{R^2+\omega^2L^2}$, $\tan\varphi = \omega L/R$, power $I^2R$ only. {lvl=3}
7. Complex impedance: $Z_R = R$, $Z_L = j\omega L$, $Z_C = 1/j\omega C$; combine like resistances. In parallel, add currents as phasors; L and C branch currents are opposite. {lvl=3}
8. RC and RL dividers are filters with corner $\omega_c = 1/RC$ or $R/L$; the element with the larger reactance takes the voltage. {lvl=3}
9. Switching a sine onto an inductor at a voltage zero leaves a DC offset and doubles the peak current; non-sinusoidal drives are handled harmonic by harmonic. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Use $\omega = 2\pi\nu$ in $X_L$ and $X_C$, not $\nu$. At 50 Hz, $\omega = 314$ rad/s. {lvl=2}
- "Lag" and "lead" are about the **current** relative to the **voltage**. In an inductor the current lags; in a capacitor it leads. {lvl=2}
- Doubling the frequency doubles $X_L$ but halves $X_C$. {lvl=2}
- Zero average power does not mean zero current: a pure L or C can carry a large current while taking no energy. {lvl=2}
- Voltages across R and L (or currents in parallel branches) add as phasors, not as numbers: 60 V and 80 V make 100 V, not 140 V. {lvl=3}
- Series RL: $\tan\varphi = \omega L/R$. Parallel RL: $\tan\varphi = R/\omega L$. Do not mix them up. {lvl=3}
- A DC test of a coil gives only $R$; the AC test gives $Z$; $X_L = \sqrt{Z^2-R^2}$. {lvl=3}
- $Z_C = -j/\omega C$: the minus sign is the lead. Dropping it turns a capacitor into an inductor. {lvl=3}
- Power is $I^2R$ with only the resistive part, or $VI\cos\varphi$; never $VI$ for a reactive circuit. {lvl=3}
- The steady-state formulas ignore switch-on transients; an inductor can carry twice its steady peak current just after switching. {lvl=4}
:::
