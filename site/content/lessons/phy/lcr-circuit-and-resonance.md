---
title: The LCR circuit and resonance
summary: 'How a coil, a capacitor and a resistor together can "pick" one frequency, the trick behind tuning a radio.'
ncert: ["Class 12 Physics · Ch 7 Alternating Current (§7.6–7.7)"]
up_to: Olympiad
builds_on: [Alternating current, AC through R, L and C, Self and mutual inductance, Capacitors, Kirchhoff's rules, Simple harmonic motion]
notes_prompt: Explain in your own words why a series LCR circuit driven at its resonant frequency can have a voltage across its capacitor many times larger than the source voltage, and why this does not break Kirchhoff's loop rule.
margin:
  - kind: history
    title: History
    text: Heinrich Hertz used a spark gap joined to a tuned loop to produce and detect electromagnetic waves in the late 1880s, and the first radio receivers were tuned LC circuits. Oliver Lodge patented "syntonic" tuning around 1897. (Dates from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "At resonance three things happen together: X_L = X_C, Z = R (its minimum), and the current is in phase with the voltage, so the power factor is 1. If a question gives any one of them, you get the other two free."
  - kind: olympiad
    title: Olympiad link
    text: "The series LCR equation L q'' + R q' + q/C = v(t) is the equation of a mass m on a spring k with drag b, driven by a force F(t). Map L to m, R to b, 1/C to k and q to x, and every result about forced and damped oscillations carries over unchanged."
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 7 Alternating Current, §7.6 AC voltage applied to a series LCR circuit, §7.7 Power in AC circuit: the power factor, Examples 7.6–7.10, Exercises 7.6–7.8" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 39 Alternating Current (LCR series circuit, resonance, power)" }
  - { title: "I. E. Irodov, Problems in General Physics", ref: "Part 4 · 4.2 Electric oscillations" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 8 Alternating-current circuits" }
cards:
  - { front: "Impedance and phase of a series LCR circuit?", back: "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$ with $X_L = \\omega L$, $X_C = 1/\\omega C$; $\\tan\\phi = (X_L - X_C)/R$ gives the angle by which the voltage leads the current." }
  - { front: "Resonant frequency of a series LCR circuit, and what happens there?", back: "$\\omega_0 = 1/\\sqrt{LC}$. $X_L = X_C$, so $Z = R$ (minimum), the current is largest and in phase with the voltage, and the power factor is 1." }
  - { front: "Three forms of the quality factor of a series LCR circuit?", back: "$Q = \\omega_0 L/R = \\dfrac1R\\sqrt{L/C} = \\omega_0/\\Delta\\omega$, where $\\Delta\\omega = R/L$ is the full width between the half-power points." }
  - { front: "Average power in an ac circuit?", back: "$\\langle P\\rangle = V_{rms} I_{rms}\\cos\\phi = I_{rms}^2 R$, with power factor $\\cos\\phi = R/Z$. Only the resistor takes net power; L and C hand energy back each cycle." }
  - { front: "Capacitance in parallel needed to raise the power factor of a load $P$ from $\\cos\\phi_1$ to $\\cos\\phi_2$?", back: "$C = \\dfrac{P(\\tan\\phi_1 - \\tan\\phi_2)}{\\omega V_{rms}^2}$: the capacitor's leading current cancels part of the load's lagging wattless current." }
  - { front: "Frequency of damped LCR oscillations?", back: "$\\omega' = \\sqrt{\\omega_0^2 - R^2/4L^2}$; the charge amplitude decays as $e^{-Rt/2L}$, the energy as $e^{-Rt/L}$. Oscillation stops (critical damping) at $R = 2\\sqrt{L/C}$." }
core:
  idea: 'In a series LCR circuit one current flows through all three elements; the phasor triangle gives $Z = \sqrt{R^2 + (X_L - X_C)^2}$. At $\omega_0 = 1/\sqrt{LC}$ the reactances cancel, $Z = R$, and the current is maximum and in phase with the source.'
  formulas:
    - tex: 'Z = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2},\qquad \tan\phi = \frac{X_L - X_C}{R}'
      label: 'Impedance and phase angle'
    - tex: '\omega_0 = \frac{1}{\sqrt{LC}},\qquad Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}}'
      label: 'Resonance and quality factor'
    - tex: '\langle P\rangle = V_{rms}I_{rms}\cos\phi,\qquad \cos\phi = \frac{R}{Z}'
      label: 'Average power and power factor'
  conditions:
    - 'Series circuit, steady sinusoidal source of fixed amplitude'
    - 'Ideal L and C; all the resistance is lumped in $R$'
    - 'High $Q$ for the simple results (peak of $V_C$ at $\omega_0$, bandwidth $R/L$)'
  sign: '$X_L > X_C$: inductive, current lags the voltage. $X_C > X_L$: capacitive, current leads. Only $\cos\phi = R/Z$ enters the power, so the sign convention for $\phi$ does not matter.'
outcomes:
  - 'Use phasors to find the impedance, current and phase angle of a series LCR circuit'
  - 'Find the resonant frequency and explain why $V_L$ and $V_C$ can exceed the source voltage'
  - 'Calculate bandwidth and quality factor from the shape of the resonance curve'
  - 'Calculate average power, power factor and the capacitor that corrects it'
  - 'Treat free and damped LC oscillations, the true peak of $V_C$ and parallel anti-resonance'
---

:::hook
q: A series circuit has R = 10 Ω, L = 0.1 H and C = 10 µF, driven at 1000 rad/s by a source of 10 V rms. What rms voltage does a voltmeter read across the capacitor alone?
options: ["Less than 10 V, since the capacitor shares the source voltage with R and L", "Exactly 10 V", "About 100 V", "Zero, because the reactances cancel"]
answer: 2
right: Right. At 1000 rad/s the circuit is at resonance. The current is 10 V / 10 Ω = 1 A, and the capacitor's reactance is 100 Ω, so it carries 100 V. The inductor carries another 100 V, exactly out of phase, and the two cancel in the loop.
wrong: At 1000 rad/s, X_L = X_C = 100 Ω, so only R limits the current, 1 A. The capacitor then has 1 A × 100 Ω = 100 V across it, ten times the source. The inductor's 100 V is opposite in phase and cancels it in the loop sum.
:::

## One current, three voltages {lvl=2 id=s-loop label="Class 12"}

In a series circuit there is only one path, so the **same current** $i$ flows through the resistor, the inductor and the capacitor at every instant. What differs is how each element answers that current. (The lesson *AC through R, L and C* treats each element on its own; here we put them together.)

- The resistor obeys Ohm's law: $v_R = iR$. Its voltage is **in phase** with $i$.
- The inductor opposes changes in current: $v_L = L\,di/dt$. Its voltage is largest when $i$ is changing fastest, which is when $i$ passes through zero. It **leads** $i$ by $90^\circ$.
- The capacitor's voltage is its charge over $C$: $v_C = q/C$. The charge piles up while $i$ flows one way and peaks just as $i$ falls to zero. It **lags** $i$ by $90^\circ$.

Kirchhoff's loop rule still holds at every instant:

$$v = v_R + v_L + v_C = Ri + L\frac{di}{dt} + \frac{q}{C},\qquad i = \frac{dq}{dt}.$$

The catch is in the word *instant*. The three voltages peak at different times, so their **amplitudes** do not add like numbers. Measure 151 V across a resistor and 160 V across a capacitor in series, and the source can still read only 220 V (NCERT Example 7.6). Nothing is lost: the peaks simply never coincide.

:::qc
q: In a series LCR circuit, which statement is true at every instant?
options: ["The rms voltages across R, L and C add up to the rms source voltage", "The instantaneous voltages across R, L and C add up to the instantaneous source voltage", "The current through L leads the current through C", "The voltage across R leads the current"]
answer: 1
right: Right. Kirchhoff's loop rule holds instant by instant. Rms values (and peak values) do not add, because the three voltages are out of phase.
wrong: Kirchhoff's rule applies to instantaneous values. The rms values do not add, because the voltages peak at different times. The current is the same in all three elements.
:::

## The phasor triangle and the impedance {lvl=2 id=s-phasor label="Class 12"}

A **phasor** is a rotating arrow whose projection on a fixed axis gives the sinusoid. Its length is the amplitude and its angle is the phase; all phasors at one frequency rotate together, so we may freeze the picture at any moment.

Draw the current phasor $\mathbf I$ along the horizontal. Then:

- $\mathbf V_R$ has length $i_mR$ and lies **along** $\mathbf I$;
- $\mathbf V_L$ has length $i_mX_L$, with $X_L = \omega L$, and points $90^\circ$ **ahead** (up);
- $\mathbf V_C$ has length $i_mX_C$, with $X_C = 1/\omega C$, and points $90^\circ$ **behind** (down).

The loop rule says the source phasor is the vector sum. $\mathbf V_L$ and $\mathbf V_C$ lie on one line, pointing opposite ways, so they combine to a single vertical arrow of length $i_m(X_L - X_C)$. That and $\mathbf V_R$ are perpendicular, and Pythagoras gives

$$v_m^2 = (i_mR)^2 + \big(i_m(X_L - X_C)\big)^2.$$

:::figure caption="Phasor diagram for a series LCR circuit with X_L > X_C. The current I is the reference. V_R lies along I, V_L leads by 90°, V_C lags by 90°. V_L and V_C partly cancel, leaving V_L − V_C, and the source voltage V is the hypotenuse of the right triangle with legs V_R and V_L − V_C. The angle φ between V and I is the phase angle."
<svg viewBox="0 0 360 250" role="img" aria-label="Phasor triangle: V_R horizontal, V_L up, V_C down, resultant V at angle phi">
<line class="faint" x1="50" y1="180" x2="330" y2="180"/>
<text x="300" y="196">I</text>
<line class="ray" x1="50" y1="180" x2="226" y2="180"/><polygon points="232,180 220,174 220,186" style="fill:var(--phy)"/>
<text class="k" x="130" y="198">V_R = i_m R</text>
<line class="ln" x1="50" y1="180" x2="50" y2="46"/><polygon points="50,40 44,52 56,52" style="fill:var(--ink)"/>
<text class="k" x="58" y="52">V_L = i_m X_L</text>
<line class="ln" x1="50" y1="180" x2="50" y2="224"/><polygon points="50,230 44,218 56,218" style="fill:var(--ink)"/>
<text class="k" x="58" y="232">V_C = i_m X_C</text>
<line class="faint" x1="232" y1="180" x2="232" y2="96"/><polygon points="232,90 226,102 238,102" style="fill:var(--muted)"/>
<text x="240" y="140">V_L − V_C</text>
<line class="wf" x1="50" y1="180" x2="226" y2="93"/><polygon points="232,90 218,90 224,101" style="fill:var(--eng)"/>
<text class="k" x="120" y="122">V = i_m Z</text>
<path class="ln" d="M100,180 A50,50 0 0 0 95,158"/>
<text x="106" y="172">φ</text>
</svg>
:::

Divide the triangle by $i_m$ and it becomes a triangle of **resistances**: sides $R$, $X_L - X_C$ and

:::eq caption="Impedance of a series LCR circuit. The peak current is i_m = v_m/Z, and the rms current is V/Z."
$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}$$
:::

The angle between $\mathbf V$ and $\mathbf I$ is the **phase angle** $\phi$:

$$\tan\phi = \frac{X_L - X_C}{R},\qquad \cos\phi = \frac{R}{Z}.$$

- $X_L > X_C$: the voltage leads the current; the circuit is **inductive**.
- $X_L < X_C$: the voltage lags; the circuit is **capacitive**.
- $X_L = X_C$: they are in phase; the circuit behaves like $R$ alone.

**A note on signs.** NCERT writes $v = v_m\sin\omega t$ and $i = i_m\sin(\omega t + \phi)$, so its $\phi$ is the angle by which the *current leads*, and $\tan\phi = (X_C - X_L)/R$. Here $\phi$ is the angle by which the *voltage leads*. The two differ only in sign; $\cos\phi$ and $Z$ are the same either way.

:::note title="The same result without pictures" tone=info
Try $i = i_m\sin(\omega t - \phi)$ in $L\,di/dt + Ri + q/C = v_m\sin\omega t$, with $q = -\dfrac{i_m}{\omega}\cos(\omega t - \phi)$. The left side becomes
$i_m\big[R\sin(\omega t-\phi) + (X_L - X_C)\cos(\omega t-\phi)\big] = i_mZ\sin(\omega t - \phi + \phi)$, using $R = Z\cos\phi$, $X_L - X_C = Z\sin\phi$. Matching gives $i_m = v_m/Z$ and the same $\tan\phi$. The phasor triangle is just this trigonometric identity drawn.
:::

:::worked title="NCERT Example 7.8, in brief"
$R = 3\ \Omega$, $L = 25.48$ mH, $C = 796\ \mu$F, 50 Hz. Then $X_L = 2\pi(50)(0.02548) = 8.0\ \Omega$ and $X_C = 1/(2\pi\cdot50\cdot796\times10^{-6}) = 4.0\ \Omega$.

$Z = \sqrt{3^2 + 4^2} = 5\ \Omega$, a 3-4-5 triangle. $\tan\phi = 4/3$, so $\phi = 53.1^\circ$ with the voltage leading (inductive). $\cos\phi = 0.6$.
:::

:::qc
q: A series circuit has R = 40 Ω, X_L = 50 Ω and X_C = 80 Ω. What is the impedance, and does the current lead or lag the voltage?
options: ["170 Ω; lags", "50 Ω; leads", "50 Ω; lags", "94 Ω; leads"]
answer: 1
right: Right. Z = √(40² + 30²) = 50 Ω, and X_C > X_L makes the circuit capacitive, so the current leads.
wrong: Subtract the reactances first: X_L − X_C = −30 Ω. Then Z = √(40² + 30²) = 50 Ω. A negative X_L − X_C means a capacitive circuit, in which the current leads.
:::

## Resonance {lvl=2 id=s-res label="Class 12"}

$X_L = \omega L$ grows with frequency; $X_C = 1/\omega C$ falls. So there is exactly one frequency at which they are equal:

:::law caption="Series resonance"
$$\omega_0 L = \frac{1}{\omega_0 C}\quad\Longrightarrow\quad \omega_0 = \frac{1}{\sqrt{LC}},\qquad \nu_0 = \frac{1}{2\pi\sqrt{LC}}.$$
At $\omega_0$ the impedance is a minimum, $Z = R$, the current is a maximum, $I = V/R$, and the current is in phase with the source.
:::

**Why the current peaks.** At low frequency the capacitor blocks: it has a long time to charge up each half-cycle and its large back-voltage chokes the current. At high frequency the inductor blocks: the current must reverse so quickly that the back-emf $L\,di/dt$ is large. In between there is a frequency at which the two back-voltages are equal and **opposite in phase**, so they cancel exactly. Then the source only has to push against $R$.

**Why it is the natural frequency.** Remove the source and short the ends. A charged capacitor discharges through the inductor, overshoots, charges the other way, and so on, at $\omega_0 = 1/\sqrt{LC}$ (see the section on free oscillations). Driving the circuit at this frequency is like pushing a swing in step with its own motion: every push adds energy.

**Voltage magnification.** At resonance $V_L = IX_L = (V/R)\,\omega_0L$, and likewise for $V_C$. So

$$V_L = V_C = \frac{\omega_0 L}{R}\,V = Q\,V,$$

where $Q = \omega_0L/R$ is the **quality factor**. With $Q = 10$, a 10 V source puts 100 V across the capacitor (the hook). That is why a capacitor in a resonant circuit must be rated for far more than the source voltage. Kirchhoff is safe: $\mathbf V_L$ and $\mathbf V_C$ cancel in the loop.

**Resonance needs both L and C.** An RL or an RC circuit has no frequency at which the reactance vanishes, so it shows no resonance. This is NCERT's point in §7.6.3.

:::worked title="NCERT Example 7.9: tuning Example 7.8 to resonance"
$\omega_0 = 1/\sqrt{(25.48\times10^{-3})(796\times10^{-6})} = 222.1$ rad/s, so $\nu_0 = 35.3$ Hz. (The book prints 35.4 Hz; see the note with that problem.)

At resonance $Z = R = 3\ \Omega$. The rms source voltage is $283/\sqrt2 = 200$ V, so $I = 66.7$ A and $P = I^2R = 13.3$ kW, against 4.8 kW at 50 Hz.
:::

:::qc
q: In a series LCR circuit, L is made four times larger and C is unchanged. The resonant frequency
options: ["becomes four times larger", "doubles", "halves", "becomes one quarter"]
answer: 2
right: Right. ω₀ = 1/√(LC), so multiplying L by 4 divides ω₀ by √4 = 2.
wrong: ω₀ = 1/√(LC) depends on the square root. Four times the inductance gives half the frequency.
:::

## How sharp is the peak? Bandwidth and Q {lvl=2 id=s-q label="Class 12"}

A radio must pick one station and reject its neighbours, so the peak must be **narrow**. We measure its width between the two **half-power points**: the frequencies at which the power $I^2R$ is half its peak value, that is, where $I = I_{max}/\sqrt2$.

$I = I_{max}/\sqrt2$ means $Z = \sqrt2\,R$, which means $|X_L - X_C| = R$:

$$\omega L - \frac{1}{\omega C} = \pm R \quad\Longrightarrow\quad \omega^2 \mp \frac{R}{L}\,\omega - \omega_0^2 = 0.$$

The positive roots are

$$\omega_{2,1} = \sqrt{\omega_0^2 + \frac{R^2}{4L^2}} \pm \frac{R}{2L}.$$

Two neat facts drop out, **exactly**, with no approximation:

$$\Delta\omega = \omega_2 - \omega_1 = \frac{R}{L},\qquad \omega_1\,\omega_2 = \omega_0^2.$$

So $\omega_0$ is the *geometric* mean of the half-power frequencies, not the arithmetic mean. For a sharp peak ($R/2L \ll \omega_0$) they sit nearly symmetrically at $\omega_0 \pm R/2L$, which is the form NCERT uses.

:::eq caption="Quality factor of a series LCR circuit: three equivalent forms."
$$Q = \frac{\omega_0}{\Delta\omega} = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 CR} = \frac{1}{R}\sqrt{\frac{L}{C}}$$
:::

A large $Q$ means a tall, narrow peak. Notice that $R$ does not move the resonance: it changes the height ($V/R$) and the width ($R/L$), never the position ($1/\sqrt{LC}$).

:::figure caption="rms current against angular frequency for L = 0.1 H, C = 10 µF (so ω₀ = 1000 rad/s) and a 10 V rms source. Solid: R = 10 Ω, Q = 10, peak 1 A, half-power width 100 rad/s. Dashed: R = 30 Ω, Q = 3.3, peak 0.33 A, width 300 rad/s. Both peak at the same ω₀. Short bars mark the half-power points."
<svg viewBox="0 0 460 235" role="img" aria-label="Two resonance curves peaking at the same frequency, one tall and narrow, one low and broad">
<line class="ln" x1="40" y1="200" x2="440" y2="200"/><line class="ln" x1="40" y1="200" x2="40" y2="15"/>
<text x="425" y="216">ω</text><text x="8" y="22">I</text>
<text x="30" y="216">500</text><text x="216" y="216">1000</text><text x="404" y="216">1500</text>
<line class="faint" x1="230" y1="200" x2="230" y2="25"/>
<text x="0" y="34">1 A</text><line class="faint" x1="36" y1="30" x2="44" y2="30"/>
<text x="0" y="147">0.33</text><line class="faint" x1="36" y1="143" x2="44" y2="143"/>
<path class="ray" d="M40.0,188.7 L49.5,187.7 L59.0,186.6 L68.5,185.5 L78.0,184.1 L87.5,182.7 L97.0,181.0 L106.5,179.1 L116.0,176.9 L125.5,174.3 L135.0,171.3 L144.5,167.6 L154.0,163.1 L157.8,161.0 L161.6,158.7 L165.4,156.2 L169.2,153.4 L173.0,150.2 L176.8,146.7 L180.6,142.7 L184.4,138.2 L188.2,133.1 L192.0,127.2 L195.8,120.5 L199.6,112.6 L203.4,103.6 L207.2,93.2 L211.0,81.4 L214.8,68.3 L218.6,54.8 L222.4,42.4 L226.2,33.3 L230.0,30.0 L233.8,33.3 L237.6,41.9 L241.4,53.7 L245.2,66.3 L249.0,78.4 L252.8,89.3 L256.6,99.0 L260.4,107.4 L264.2,114.8 L268.0,121.1 L271.8,126.7 L275.6,131.5 L279.4,135.8 L283.2,139.5 L287.0,142.9 L290.8,145.9 L294.6,148.6 L298.4,151.0 L302.2,153.3 L306.0,155.3 L315.5,159.6 L325.0,163.1 L334.5,166.1 L344.0,168.5 L353.5,170.6 L363.0,172.5 L372.5,174.1 L382.0,175.5 L391.5,176.7 L401.0,177.8 L410.5,178.8 L420.0,179.7"/>
<path class="wf" style="stroke-dasharray:6 4" d="M40.0,188.9 L49.5,188.0 L59.0,187.0 L68.5,185.9 L78.0,184.7 L87.5,183.3 L97.0,181.9 L106.5,180.2 L116.0,178.4 L125.5,176.4 L135.0,174.1 L144.5,171.5 L154.0,168.6 L157.8,167.3 L161.6,166.0 L165.4,164.6 L169.2,163.2 L173.0,161.7 L176.8,160.1 L180.6,158.5 L184.4,156.9 L188.2,155.3 L192.0,153.7 L195.8,152.0 L199.6,150.5 L203.4,149.0 L207.2,147.6 L211.0,146.4 L214.8,145.3 L218.6,144.5 L222.4,143.8 L226.2,143.5 L230.0,143.3 L233.8,143.5 L237.6,143.8 L241.4,144.4 L245.2,145.2 L249.0,146.1 L252.8,147.2 L256.6,148.4 L260.4,149.6 L264.2,150.9 L268.0,152.2 L271.8,153.5 L275.6,154.8 L279.4,156.1 L283.2,157.4 L287.0,158.6 L290.8,159.8 L294.6,160.9 L298.4,162.0 L302.2,163.1 L306.0,164.1 L315.5,166.5 L325.0,168.6 L334.5,170.4 L344.0,172.1 L353.5,173.6 L363.0,175.0 L372.5,176.2 L382.0,177.3 L391.5,178.3 L401.0,179.2 L410.5,180.0 L420.0,180.8"/>
<line class="ln" x1="211.5" y1="72" x2="211.5" y2="88"/><line class="ln" x1="249.5" y1="72" x2="249.5" y2="88"/>
<line class="faint" x1="211.5" y1="80" x2="249.5" y2="80"/>
<text class="k" x="256" y="76">Δω = 100</text>
<line class="ln" x1="177.3" y1="152" x2="177.3" y2="168"/><line class="ln" x1="291.3" y1="152" x2="291.3" y2="168"/>
<text class="k" x="296" y="172">Δω = 300</text>
<text x="232" y="22">ω₀</text>
</svg>
:::

:::worked title="Reading the curve"
For the solid curve, $Q = \omega_0L/R = 1000\times0.1/10 = 10$ and $\Delta\omega = R/L = 100$ rad/s. Exactly, $\omega_{1,2} = \sqrt{10^6 + 50^2} \mp 50 = 951.2$ and $1051.2$ rad/s; their product is $10^6 = \omega_0^2$. At resonance, $I = 1$ A, and $V_L = V_C = QV = 100$ V.
:::

:::qc
q: Two series LCR circuits have the same L and C. Circuit A has R = 5 Ω and circuit B has R = 20 Ω. Compared with B, the resonance curve of A is
options: ["at a lower frequency and broader", "at the same frequency, four times narrower, with four times the peak current", "at the same frequency and the same width", "at a higher frequency and narrower"]
answer: 1
right: Right. ω₀ = 1/√(LC) does not involve R. The width R/L and the peak current V/R both scale with R, so A is 4 times narrower and 4 times taller.
wrong: R does not move ω₀ = 1/√(LC). It sets the width Δω = R/L and the peak current V/R. A quarter of the resistance gives a quarter of the width and four times the peak.
:::

## Power in an ac circuit {lvl=2 id=s-power label="Class 12"}

The power delivered by the source at each instant is $p = vi$. With $v = v_m\sin\omega t$ and $i = i_m\sin(\omega t - \phi)$,

$$p = v_m i_m\sin\omega t\,\sin(\omega t - \phi) = \frac{v_m i_m}{2}\big[\cos\phi - \cos(2\omega t - \phi)\big].$$

The second term swings at $2\omega$ and averages to zero over a cycle. What remains is

:::law caption="Average power and the power factor"
$$\langle P\rangle = \frac{v_m i_m}{2}\cos\phi = V_{rms}\,I_{rms}\cos\phi,\qquad \cos\phi = \frac{R}{Z}.$$
$\cos\phi$ is the **power factor**. Since $V_{rms} = I_{rms}Z$, this is the same as $\langle P\rangle = I_{rms}^2R$: all the net power goes into the resistor.
:::

The cases:

- **Pure resistor**, $\phi = 0$: $\cos\phi = 1$, full power.
- **Pure L or pure C**, $\phi = \pm90^\circ$: $\cos\phi = 0$. Energy flows in during one quarter-cycle and back out in the next; the net is zero. The current still flows, and still heats the wires, but delivers no average power. Such a current is called **wattless**.
- **Series LCR**: $\cos\phi = R/Z$, which reaches 1 at resonance.

**Wattless current.** Resolve the current phasor along and across the voltage. The part $I\cos\phi$ in phase with $V$ carries all the power; the part $I\sin\phi$ at $90^\circ$ carries none. The product $V_{rms}I_{rms}$ is called the *apparent power* (unit volt-ampere, VA), to keep it apart from the real power in watts.

:::qc
q: A coil draws 5 A rms from a 200 V rms supply and takes 600 W. What is its power factor?
options: ["0.6", "0.8", "1.0", "0.75"]
answer: 0
right: Right. cos φ = P/(V I) = 600/(200 × 5) = 0.6.
wrong: Apparent power is V I = 1000 VA, real power 600 W, so cos φ = 600/1000 = 0.6.
:::

## Correcting the power factor {lvl=3 id=s-pfc label="JEE"}

Motors, transformers and fluorescent chokes are inductive: they draw a current that **lags** the voltage. For a fixed real power $P$ at voltage $V$ the line must carry $I = P/(V\cos\phi)$, and the loss in the line, $I^2R_{line}$, grows as $1/\cos^2\phi$. Supply companies therefore penalise a low power factor (NCERT Example 7.7(a)).

The cure is a capacitor **in parallel** with the load. It does not change the voltage across the load, so the load's current and power are untouched. It adds a **leading** wattless current $\omega CV$ that cancels part of the load's lagging wattless current.

The load draws a wattless current $I\sin\phi_1 = \dfrac{P}{V}\tan\phi_1$. We want the total to be $\dfrac{P}{V}\tan\phi_2$. The capacitor must supply the difference:

:::eq caption="Parallel capacitor that raises the power factor of a load P (at rms voltage V and angular frequency ω) from cos φ₁ to cos φ₂."
$$\omega C V = \frac{P}{V}(\tan\phi_1 - \tan\phi_2)\quad\Longrightarrow\quad C = \frac{P(\tan\phi_1 - \tan\phi_2)}{\omega V^2}$$
:::

For full correction to $\cos\phi_2 = 1$, set $\tan\phi_2 = 0$. In practice one stops near 0.9–0.95, since the last bit of correction costs the most capacitance for the least gain.

:::worked title="Lifting a load from 0.5 to 0.9"
A load takes 1.1 kW from a 220 V, 50 Hz supply at power factor 0.5 lagging. $\tan\phi_1 = \tan(60^\circ) = 1.732$ and, for $\cos\phi_2 = 0.9$, $\tan\phi_2 = 0.484$.

$C = \dfrac{1100\times(1.732 - 0.484)}{2\pi(50)(220)^2} = 9.03\times10^{-5}$ F $\approx 90\ \mu$F.

The line current falls from $1100/(220\times0.5) = 10$ A to $1100/(220\times0.9) = 5.6$ A, and the line loss to $(0.5/0.9)^2 = 31\%$ of its old value.
:::

:::qc
q: Why must the power-factor capacitor go in parallel with an inductive load, not in series?
options: ["A series capacitor would block all the current", "In parallel it leaves the load's voltage, current and power unchanged while adding a leading current to the line", "A capacitor in series has no reactance", "In parallel it reduces the resistance of the load"]
answer: 1
right: Right. In parallel the load still sees the full supply voltage and works as before; only the line current changes, by the capacitor's leading wattless current.
wrong: The aim is to leave the load working exactly as before and change only the current in the supply line. A parallel capacitor does this: the load voltage stays the same, and the capacitor's leading current cancels part of the load's lagging current.
:::

## Tuning a radio, and the metal detector {lvl=2 id=s-tune label="Class 12"}

An aerial picks up signals from every station at once, each at its own carrier frequency. A series LC circuit in the receiver responds strongly only near $\nu_0 = 1/(2\pi\sqrt{LC})$. Turning the tuning knob changes $C$ (a variable capacitor), slides $\nu_0$ along the band, and brings one station into resonance while the others, off the peak, give tiny currents. A high $Q$ means good **selectivity**.

To tune frequency $\nu$ with a fixed coil $L$:

$$C = \frac{1}{4\pi^2\nu^2 L}.$$

:::worked title="Choosing C for a medium-wave station"
With $L = 200\ \mu$H, to receive 1.0 MHz: $C = 1/(4\pi^2\times10^{12}\times2\times10^{-4}) = 1.27\times10^{-10}$ F $= 127$ pF.

To cover a band from 540 kHz to 1600 kHz, the frequency ratio is 2.96, so the capacitor must vary by $2.96^2 = 8.8$ times. A capacitance range of, say, 40 pF to 350 pF would need $L \approx 250\ \mu$H to reach 1600 kHz at 40 pF, and the same coil then reaches 540 kHz at 350 pF. ([Inference]: these are illustrative values, not taken from a particular set.)
:::

**The metal detector** (NCERT Example 7.10) works the other way round. A coil in the doorway is part of a circuit tuned to resonance. Metal brought near the coil changes its inductance, which shifts $\omega_0$ away from the drive frequency. The current changes sharply, because near resonance a small shift moves you down a steep curve, and the electronics sounds an alarm.

:::qc
q: A radio tuned to 600 kHz must be retuned to 1200 kHz with the same coil. The tuning capacitance must be
options: ["doubled", "halved", "reduced to one quarter", "increased four times"]
answer: 2
right: Right. ν ∝ 1/√C, so doubling ν needs C divided by 4.
wrong: ν₀ = 1/(2π√(LC)), so C ∝ 1/ν². Doubling the frequency needs a quarter of the capacitance.
:::

## Free oscillations of an LC circuit {lvl=3 id=s-lc label="JEE"}

Charge a capacitor to $q_0$ and connect it across an ideal inductor. Follow the energy.

1. At first all the energy is electric, $q_0^2/2C$, in the capacitor; the current is zero.
2. The capacitor discharges, but the inductor will not let the current jump. The current builds up gradually, and energy moves into the magnetic field, $\tfrac12Li^2$.
3. When the capacitor is empty, the current is at its maximum and all the energy is magnetic.
4. The inductor will not let the current stop either, so it keeps pushing charge and charges the capacitor the **other** way.
5. Then the process runs backwards, and so on.

The loop rule with no source, $L\,di/dt + q/C = 0$, gives

$$\frac{d^2q}{dt^2} = -\frac{1}{LC}\,q,$$

which is simple harmonic motion: $q = q_0\cos\omega_0t$ with $\omega_0 = 1/\sqrt{LC}$. Energy is conserved:

$$\frac{q^2}{2C} + \frac12Li^2 = \frac{q_0^2}{2C}\quad\Longrightarrow\quad i_{max} = \frac{q_0}{\sqrt{LC}} = \omega_0q_0.$$

| Mass on a spring | LC circuit |
|---|---|
| displacement $x$ | charge $q$ |
| velocity $v$ | current $i$ |
| mass $m$ (inertia) | inductance $L$ |
| stiffness $k$ | $1/C$ |
| drag coefficient $b$ | resistance $R$ |
| KE $\tfrac12mv^2$ | magnetic energy $\tfrac12Li^2$ |
| PE $\tfrac12kx^2$ | electric energy $q^2/2C$ |
| $\omega_0 = \sqrt{k/m}$ | $\omega_0 = 1/\sqrt{LC}$ |

The inductor is the circuit's inertia (it resists changes in current, as mass resists changes in velocity); the capacitor is its spring.

:::worked title="An LC circuit"
$L = 10$ mH and $C = 1\ \mu$F, capacitor charged to 50 V. Then $\omega_0 = 1/\sqrt{10^{-8}} = 10^4$ rad/s ($\nu_0 = 1.59$ kHz). The energy is $\tfrac12CV_0^2 = 1.25$ mJ, and $i_{max} = V_0\sqrt{C/L} = 50\times0.01 = 0.5$ A. The energy passes from capacitor to coil in a quarter period, $T/4 = 157\ \mu$s.
:::

:::qc
q: In an ideal LC circuit, the energy is shared equally between the capacitor and the inductor when the charge on the capacitor is
options: ["q₀/2", "q₀/√2", "q₀/4", "zero"]
answer: 1
right: Right. Electric energy q²/2C must be half of q₀²/2C, so q = q₀/√2.
wrong: The electric energy is q²/2C. For it to be half of the total q₀²/2C, q² = q₀²/2, so q = q₀/√2.
:::

## Damped oscillations {lvl=4 id=s-damped label="Olympiad"}

A real coil has resistance. With $R$ in the loop,

$$L\ddot q + R\dot q + \frac{q}{C} = 0.$$

Try $q = e^{st}$: $Ls^2 + Rs + 1/C = 0$, so $s = -\dfrac{R}{2L} \pm \sqrt{\dfrac{R^2}{4L^2} - \omega_0^2}$. Three regimes follow.

- **Underdamped**, $R < 2\sqrt{L/C}$: the root is complex, and
$$q = q_0e^{-Rt/2L}\cos(\omega' t + \alpha),\qquad \omega' = \sqrt{\omega_0^2 - \frac{R^2}{4L^2}}.$$
The circuit still rings, slightly slower than $\omega_0$, inside an exponentially shrinking envelope.
- **Critically damped**, $R = 2\sqrt{L/C}$: the fastest return to zero without overshoot.
- **Overdamped**, $R > 2\sqrt{L/C}$: a slow, non-oscillating decay.

**Energy and Q.** The energy goes as the square of the amplitude, so its envelope falls as $e^{-Rt/L}$. In one period ($2\pi/\omega_0$, for light damping) the fraction lost is about $2\pi R/(\omega_0L) = 2\pi/Q$. This gives the most general definition:

$$Q = 2\pi\,\frac{\text{energy stored}}{\text{energy lost per cycle}}.$$

The same $Q$ thus measures how sharp the *forced* resonance is and how many cycles the *free* oscillation lasts: the amplitude falls to $1/e$ in about $Q/\pi$ cycles. A tuning fork that rings for a long time has a sharp resonance; this is no coincidence.

:::worked title="A lossy LC circuit"
$L = 10$ mH, $C = 1\ \mu$F, $R = 20\ \Omega$. Critical resistance $2\sqrt{L/C} = 200\ \Omega$, so the circuit is underdamped. $R/2L = 1000\ \text{s}^{-1}$ and $\omega' = \sqrt{10^8 - 10^6} = 9950$ rad/s, only 0.5% below $\omega_0$. The amplitude falls to $1/e$ in $2L/R = 1$ ms, about 1.6 cycles; $Q = \omega_0L/R = 5$.
:::

:::qc
q: The resistance of an underdamped LC circuit is doubled. The decay time of the charge amplitude (to 1/e)
options: ["doubles", "halves", "is unchanged", "falls to a quarter"]
answer: 1
right: Right. The envelope is e^(−Rt/2L), with time constant 2L/R; doubling R halves it.
wrong: The amplitude envelope is e^(−Rt/2L). Its time constant 2L/R is halved when R doubles.
:::

## Where the capacitor and inductor voltages really peak {lvl=4 id=s-vc-peak label="Olympiad"}

The *current* peaks at $\omega_0$. But $V_C = I/(\omega C)$ carries an extra factor $1/\omega$, which favours lower frequencies, and $V_L = I\omega L$ favours higher ones. So their peaks shift apart.

$V_C = \dfrac{V}{\omega C\,Z}$ is largest when $\omega^2Z^2 = \omega^2R^2 + (\omega^2L - 1/C)^2$ is smallest. Treat it as a function of $u = \omega^2$ and set the derivative to zero: $R^2 + 2L(uL - 1/C) = 0$, so

$$\omega_C^2 = \omega_0^2 - \frac{R^2}{2L^2} = \omega_0^2\left(1 - \frac{1}{2Q^2}\right).$$

By the same method $V_L$ peaks at $\omega_L^2 = \omega_0^2\big/\left(1 - \dfrac{1}{2Q^2}\right)$, so $\omega_C\,\omega_L = \omega_0^2$. For $Q \gg 1$ both are very close to $\omega_0$, and the maximum $V_C$ is $QV/\sqrt{1 - 1/4Q^2}$, a hair above $QV$. If $Q < 1/\sqrt2$, $V_C$ has no peak at all; it simply falls from $V$ at $\omega = 0$.

Note that three different "resonant" frequencies appear in the subject: $\omega_0$ (current peak, and the drive frequency for unity power factor), $\omega_C$ (capacitor-voltage peak), and $\omega'$ (free damped ringing, $\omega_0^2 - R^2/4L^2$). They differ only at low $Q$.

## Complex impedance {lvl=4 id=s-complex label="Olympiad"}

Phasors are complex numbers. Write $v = \text{Re}(\tilde V e^{j\omega t})$ and likewise for $i$ (engineers use $j = \sqrt{-1}$, since $i$ is taken). Then $d/dt$ becomes multiplication by $j\omega$, and each element has a complex impedance:

$$Z_R = R,\qquad Z_L = j\omega L,\qquad Z_C = \frac{1}{j\omega C} = -\frac{j}{\omega C}.$$

The factor $j$ is a $90^\circ$ turn: the inductor's voltage leads, the capacitor's lags. Now **every DC rule works unchanged**: impedances add in series, reciprocals add in parallel, and Kirchhoff's rules hold for complex amplitudes. The series LCR circuit is just

$$Z = R + j\left(\omega L - \frac{1}{\omega C}\right),\qquad |Z| = \sqrt{R^2 + (X_L - X_C)^2},\qquad \arg Z = \phi.$$

## Parallel LC and anti-resonance {lvl=4 id=s-parallel label="Olympiad"}

Put an ideal L and C in **parallel** across the source. Each branch sees the full voltage $V$. The inductor current lags $V$ by $90^\circ$, the capacitor current leads by $90^\circ$: they are exactly opposite. Their magnitudes $V/\omega L$ and $\omega CV$ are equal at $\omega_0 = 1/\sqrt{LC}$, where they cancel and the **line current is zero**. The impedance is infinite.

This is **anti-resonance**: a series circuit has *minimum* impedance at $\omega_0$; a parallel one has *maximum*. Yet a large current still circulates round the L–C loop, sloshing between them as in free oscillation. The source only tops up the losses.

A real coil has resistance $r$. With complex admittances,

$$Y = j\omega C + \frac{1}{r + j\omega L} = j\omega C + \frac{r - j\omega L}{r^2 + \omega^2L^2}.$$

The line current is in phase with $V$ when the imaginary part vanishes: $r^2 + \omega^2L^2 = L/C$, that is $\omega^2 = \dfrac{1}{LC} - \dfrac{r^2}{L^2}$. Then $Y = rC/L$ exactly, so

$$Z_{\text{dynamic}} = \frac{L}{rC}.$$

This is large when $r$ is small. For $L = 1$ mH, $C = 10$ nF and $r = 10\ \Omega$: $Z = 10^{-3}/(10\times10^{-8}) = 10$ kΩ, while the coil alone has $r = 10\ \Omega$. The circulating current is about $Q = \omega_0L/r \approx 32$ times the line current. Such a "tank circuit" sets the frequency of oscillators and blocks one frequency in a filter (a wave trap).

:::qc
q: At its resonant frequency, an ideal parallel LC circuit connected to an ac source draws
options: ["a very large current, as Z = 0", "zero current from the source, though current circulates in the L–C loop", "a current V/R", "zero current in both L and C"]
answer: 1
right: Right. The branch currents are equal and opposite, so the line current is zero. Each branch still carries V/(ω₀L), which circulates round the loop.
wrong: In parallel, the inductor and capacitor currents are opposite in phase and equal at ω₀. They cancel in the line (infinite impedance), but each branch still carries current, which circulates between L and C.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. In series, one current flows through R, L and C. $V_R$ is in phase with it, $V_L$ leads by $90^\circ$, $V_C$ lags by $90^\circ$. Instantaneous voltages add; rms values do not. {lvl=2}
2. The phasor triangle: $Z = \sqrt{R^2 + (X_L - X_C)^2}$, $\tan\phi = (X_L - X_C)/R$, $\cos\phi = R/Z$. Inductive circuits: current lags; capacitive: current leads. {lvl=2}
3. Resonance at $\omega_0 = 1/\sqrt{LC}$: $X_L = X_C$, $Z = R$, current largest and in phase, power factor 1. $V_L = V_C = QV$ there. {lvl=2}
4. $Q = \omega_0L/R = \frac1R\sqrt{L/C} = \omega_0/\Delta\omega$, with half-power width $\Delta\omega = R/L$ and $\omega_1\omega_2 = \omega_0^2$. R changes height and width, never position. {lvl=2}
5. $\langle P\rangle = V_{rms}I_{rms}\cos\phi = I_{rms}^2R$. A pure L or C takes no net power: its current is wattless. {lvl=2}
6. A parallel capacitor $C = P(\tan\phi_1 - \tan\phi_2)/(\omega V^2)$ corrects a lagging power factor and cuts line losses. Tuning: $C = 1/(4\pi^2\nu^2L)$. {lvl=3}
7. LC free oscillation is SHM with $L \leftrightarrow m$, $1/C \leftrightarrow k$; with $R$ it decays as $e^{-Rt/2L}$ at $\omega' = \sqrt{\omega_0^2 - R^2/4L^2}$, critically damped at $R = 2\sqrt{L/C}$. {lvl=3}
8. $V_C$ peaks at $\omega_0\sqrt{1 - 1/2Q^2}$, not at $\omega_0$. A parallel LC circuit has maximum impedance $L/(rC)$ at resonance (anti-resonance). {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Never add $V_R + V_L + V_C$ as numbers. Use $V = \sqrt{V_R^2 + (V_L - V_C)^2}$. {lvl=2}
- Subtract $X_L - X_C$ before squaring; $Z \neq \sqrt{R^2 + X_L^2 + X_C^2}$. {lvl=2}
- $\nu_0 = 1/(2\pi\sqrt{LC})$ is in hertz; $\omega_0 = 1/\sqrt{LC}$ is in rad/s. Check which one the question asks for. {lvl=2}
- NCERT's $\phi$ is the angle by which the current leads; many books use the angle by which the voltage leads. Only the sign of $\tan\phi$ changes; $\cos\phi$ does not. {lvl=2}
- At resonance the voltage across L or C can exceed the source voltage by the factor Q; this is not an error. {lvl=2}
- Power uses rms values: $V_{rms}I_{rms}\cos\phi$, or $\tfrac12v_mi_m\cos\phi$ with peak values. Mixing them gives a factor-of-2 error. {lvl=2}
- Half-power points are where the current is $1/\sqrt2$ of its peak, not half of it. {lvl=2}
- A power-factor capacitor goes in parallel, and it reduces the line current, not the load current. {lvl=3}
- Three different "resonant" frequencies ($\omega_0$, $\omega'$, $\omega_C$) coincide only for high Q; read which one a problem means. {lvl=4}
:::
