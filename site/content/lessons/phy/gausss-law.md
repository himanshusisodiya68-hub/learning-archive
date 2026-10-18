---
title: Gauss's law
summary: Electric flux, why the flux out of any closed surface is exactly the enclosed charge over ε₀, choosing Gaussian surfaces by symmetry (line, sheet, shell, solid sphere), solid angle and flux through a cube face or a disc, non-uniform spheres, a cavity with a uniform field, conductors and the σ²/2ε₀ pressure, the field jump across a sheet, Earnshaw's theorem and Gauss's law for gravity.
ncert: ["Class 12 Physics · Ch 1 Electric Charges and Fields (§1.9, §1.13–1.14)"]
up_to: Olympiad
builds_on: [Coulomb's law, Electric field, Field lines, Area and volume of a sphere and cylinder]
notes_prompt: Explain, without any equation, why the number of field lines leaving a closed balloon does not change when you squeeze the balloon into a different shape, as long as the charge stays inside, and why the argument would fail if the force fell off as 1/r³.
margin:
  - kind: history
    title: History
    text: Gauss published the theorem in 1835–1840 in work on gravitation and magnetism. Cavendish had tested the inverse-square law around 1773 by showing that no charge appears on a sphere enclosed in a charged conducting shell; later versions of this null experiment put the exponent equal to 2 to within about one part in 10¹⁶. (Dates and precision from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: "Every derivation has the same four lines: name the symmetry, draw the Gaussian surface (cylinder, pillbox or sphere), compute the flux as E × (area where E is normal), and set it equal to q_enclosed/ε₀. Say why the flux through the other parts is zero."
  - kind: olympiad
    title: Olympiad link
    text: A cavity in a uniformly charged sphere has a perfectly uniform field ρd/3ε₀. Two overlapping spheres of +ρ and −ρ give the same trick, and in the limit they produce a shell with σ = σ₀ cos θ, which also has a uniform field inside. This is the standard route to dielectric spheres in a field.
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 1 Electric Charges and Fields, §1.9 Electric flux, §1.13 Gauss's law, §1.14 Applications; Examples 1.10–1.12; Exercises 1.14–1.23" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 30 Gauss's Law" }
  - { title: "D. J. Griffiths, Introduction to Electrodynamics", ref: "Ch. 2 Electrostatics, §2.2 Divergence and curl of electrostatic fields" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 1 §1.9–1.15 (flux, Gauss's law, force on a layer of charge), Ch. 2 (divergence, Earnshaw)" }
cards:
  - { front: "Gauss's law in words and symbols?", back: "The outward flux of $\\vec E$ through any closed surface equals the enclosed charge over $\\varepsilon_0$: $\\oint \\vec E\\cdot d\\vec S = q_{enc}/\\varepsilon_0$." }
  - { front: "Fields of an infinite line, an infinite sheet and a thin spherical shell?", back: "Line: $\\lambda/(2\\pi\\varepsilon_0 r)$. Sheet: $\\sigma/(2\\varepsilon_0)$, independent of distance. Shell: $Q/(4\\pi\\varepsilon_0 r^2)$ outside, zero inside." }
  - { front: "Flux through one face of a cube with $q$ at its centre? At a corner (far face)?", back: "Centre: $q/(6\\varepsilon_0)$. Corner: the corner is shared by 8 cubes, so the cube gets $q/(8\\varepsilon_0)$, all through the 3 far faces: $q/(24\\varepsilon_0)$ each." }
  - { front: "Field just outside a conductor, and the outward force per unit area on its surface charge?", back: "$E = \\sigma/\\varepsilon_0$ along the normal. Pressure $\\sigma^2/(2\\varepsilon_0)$: the charge feels only the average of the inside (0) and outside ($\\sigma/\\varepsilon_0$) fields." }
  - { front: "Field inside a spherical cavity cut from a uniformly charged sphere?", back: "Uniform: $\\vec E = \\rho\\vec d/(3\\varepsilon_0)$, where $\\vec d$ runs from the sphere's centre to the cavity's centre." }
  - { front: "Why can no static arrangement of charges hold a test charge in stable equilibrium (Earnshaw)?", back: "Stability needs $\\vec E$ to point inward all over a small sphere round the point, giving negative flux. Gauss then demands negative charge at that point, but the region is charge-free." }
core:
  idea: 'The net outward flux of the electric field through any closed surface equals the enclosed charge divided by $\varepsilon_0$. It holds for every surface, and gives $E$ directly only when symmetry makes the field normal and constant, or parallel, over each part.'
  formulas:
    - tex: '\phi = \vec E\cdot\Delta\vec S = E\,\Delta S\cos\theta'
      label: 'Flux through a small patch'
    - tex: '\oint_S \vec E\cdot d\vec S = \frac{q_{\text{enc}}}{\varepsilon_0}'
      label: 'Gausss law'
  conditions:
    - 'Force law exactly inverse-square (Coulomb) with superposition'
    - 'Closed imaginary surface with outward normal; charges outside add nothing to the net flux but still contribute to the field'
    - 'To find E: spherical, cylindrical or planar symmetry, so E is normal and constant (or parallel) on each part of the surface'
  sign: 'Zero net flux does not mean zero field: E in the law is the total field of all charges, inside and outside.'
outcomes:
  - 'Explain flux as a count of field lines and calculate it through a flat patch'
  - 'Apply Gausss law with the correct Gaussian surface to a line, sheet, shell and solid sphere'
  - 'Use solid angle to find the flux through a disc or a cube face'
  - 'Handle non-uniform spheres, conductors and cavities using enclosed charge and superposition'
  - 'Derive the pressure on a charged conductor, Earnshaws theorem and Gausss law for gravity'
---

:::hook
q: A small charge sits inside a closed rubber balloon. Without letting the charge out, you squeeze the balloon into a long thin sausage, so that parts of its surface come much closer to the charge. What happens to the total electric flux out of the balloon?
options: ["It increases, because the field is stronger where the surface is close", "It decreases, because the surface area is smaller", "It stays exactly the same", "It depends on where the charge sits inside"]
answer: 2
right: Right. Where the surface comes closer the field is stronger, but the surface there intercepts a smaller cone of field lines. The two effects cancel exactly because the field falls as 1/r² while area grows as r². This lesson shows why, and how to turn it into a tool.
wrong: The total flux through a closed surface depends only on the charge inside it. Closer patches see a stronger field but intercept a narrower cone of lines; for an inverse-square field the two cancel exactly. So the flux stays the same.
:::

## Counting field lines {lvl=1 id=s-lines label="Class 10"}

Draw the field of a single point charge with, say, 24 lines coming out of it. Now surround the charge with any closed surface: a sphere, a box, a potato shape. Every one of the 24 lines must cross that surface on its way out, because lines start on positive charge and only end on negative charge. None of them can stop in empty space.

So the number of lines **leaving** a closed surface depends only on the charge inside it. It does not depend on the size or shape of the surface, or on where inside the charge sits.

Two more facts follow at once:

- **A charge outside the surface** sends lines that enter the surface somewhere and leave it somewhere else. Each such line counts once in and once out, so it adds nothing to the net count.
- **Several charges inside** simply add their lines. A negative charge inside swallows lines, so it reduces the net count.

Gauss's law is this line-counting idea made exact. The "number of lines" becomes the **electric flux**, and the result is: net flux out = enclosed charge ÷ $\varepsilon_0$.

:::qc
q: A closed box contains a +3 µC charge. A +5 µC charge sits just outside the box. On what does the net number of field lines leaving the box depend?
options: ["Only the +3 µC charge", "Both charges, +8 µC in total", "Only the +5 µC charge, since it is closer to one face", "Neither: it depends on the shape of the box"]
answer: 0
right: Right. Lines from the outside charge enter and leave the box, so they cancel in the net count. Only the enclosed +3 µC counts.
wrong: Every line from the outside charge that enters the box must leave it again, so it contributes zero net. Only the enclosed +3 µC charge decides the net count.
:::

## Electric flux {lvl=2 id=s-flux label="Class 12"}

To make "number of lines" precise, think of the field as a flow and ask how much of it passes through a small flat patch of area $\Delta S$.

- Only the part of $\vec E$ **perpendicular** to the patch goes through it. The part along the patch slides past.
- So we describe the patch by an **area vector** $\Delta\vec S$: magnitude $\Delta S$, direction along the normal. For a closed surface the normal is always taken **outward**.

:::law caption="Flux through a small patch. θ is the angle between the field and the outward normal (NCERT §1.9)."
$$\Delta\phi = \vec E\cdot\Delta\vec S = E\,\Delta S\cos\theta, \qquad \phi = \oint \vec E\cdot d\vec S \ \text{ for a closed surface.}$$
:::

:::figure caption="A uniform field E (horizontal lines) through a flat patch. Only the component along the normal n̂ counts, so the flux is E ΔS cos θ. Tilting the patch to θ = 90° makes the flux zero."
<svg viewBox="0 0 340 170" role="img" aria-label="Horizontal field lines crossing a tilted rectangular patch with its normal vector at angle theta to the field">
<line class="ray" x1="20" y1="40" x2="320" y2="40"/><line class="ray" x1="20" y1="75" x2="320" y2="75"/><line class="ray" x1="20" y1="110" x2="320" y2="110"/><line class="ray" x1="20" y1="145" x2="320" y2="145"/>
<polygon class="m2" points="150,30 200,55 200,155 150,130" style="stroke:var(--ink);stroke-width:1.4"/>
<line class="ln" x1="175" y1="92" x2="235" y2="62"/><polyline class="ln" points="226,60 235,62 230,70"/>
<line class="faint" x1="175" y1="92" x2="250" y2="92"/>
<path class="ln" d="M 205 92 A 30 30 0 0 0 202 79"/>
<text class="k" x="238" y="58">n̂</text><text class="k" x="212" y="88">θ</text>
<text class="k" x="295" y="32">E</text><text x="130" y="165">patch ΔS</text>
</svg>
:::

**Units.** Flux has units of N C⁻¹ m², written N m² C⁻¹.

**Sign.** Flux is positive where the field leaves a closed surface and negative where it enters. That is why an outside charge contributes zero net: its inward flux on one side cancels its outward flux on the other.

:::qc
q: A uniform field of 200 N/C makes an angle of 60° with the normal to a flat 0.10 m² plate. What is the flux through the plate?
options: ["20 N m²/C", "10 N m²/C", "17.3 N m²/C", "0"]
answer: 1
right: Right. φ = E S cos θ = 200 × 0.10 × cos 60° = 10 N m²/C.
wrong: Use the normal component: φ = E S cos θ = 200 × 0.10 × 0.5 = 10 N m²/C. The angle is measured from the normal, not from the plate.
:::

## Gauss's law {lvl=2 id=s-gauss label="Class 12"}

**The simplest case.** Put a point charge $q$ at the centre of a sphere of radius $r$. On the sphere the field is radial, so it is along the outward normal everywhere, and it has the same size $E = q/(4\pi\varepsilon_0 r^2)$ everywhere. The flux is just field × area:

$$\phi = \frac{q}{4\pi\varepsilon_0 r^2}\times 4\pi r^2 = \frac{q}{\varepsilon_0}.$$

The $r^2$ cancels. This is the whole secret: the field weakens as $1/r^2$ while the sphere's area grows as $r^2$, so every sphere centred on the charge carries the same flux. The line picture said the same thing.

**Any surface, any number of charges.** The next section proves that the shape of the surface does not matter. Then superposition does the rest: the field is the sum of the fields of the individual charges, so the flux is the sum of their fluxes. Each inside charge gives $q_i/\varepsilon_0$; each outside charge gives 0.

:::law caption="Gauss's law (NCERT §1.13). The surface is any closed surface (the Gaussian surface). q_enc is the algebraic sum of charges inside it."
$$\oint_S \vec E\cdot d\vec S = \frac{q_{\text{enc}}}{\varepsilon_0}$$
:::

Three points that examiners test:

1. $\vec E$ on the left is the **total** field at the surface, due to all charges inside **and outside**. Only the net flux ignores the outside charges; the field itself does not.
2. The law holds for every closed surface. It is **useful** for finding $E$ only when symmetry lets you take $E$ outside the integral.
3. The Gaussian surface is imaginary. It should not pass through a point charge (the field there is undefined), but it may pass through a continuous charge distribution.

:::qc
q: A Gaussian sphere encloses charges +2 µC and −5 µC. A +10 µC charge lies outside it. Which statement is correct?
options: ["The net flux is −3 µC/ε₀, and the field on the sphere is due to the −3 µC only", "The net flux is −3 µC/ε₀, but the field on the sphere is due to all three charges", "The net flux is +7 µC/ε₀", "The flux is zero because the charges add to zero overall"]
answer: 1
right: Right. q_enc = +2 − 5 = −3 µC fixes the net flux, but the field at each point of the surface is the sum of the fields of all three charges. The outside charge's flux simply nets to zero.
wrong: Net flux counts only the enclosed charge: (+2 − 5) µC/ε₀ = −3 µC/ε₀. But the field at the surface is still produced by every charge, including the +10 µC outside; its flux in and out cancels.
:::

## Choosing the Gaussian surface {lvl=2 id=s-symmetry label="Class 12"}

Gauss's law always holds, but it gives the field only when you can pull $E$ out of the integral. That needs a surface on which, piece by piece,

- $\vec E$ is either **along** the normal with **constant** magnitude (flux = $E \times$ area), or
- $\vec E$ is **parallel** to the surface (flux = 0).

Symmetry tells you the direction of $\vec E$ before you calculate anything. For an infinite straight line, rotating about the line or sliding along it changes nothing, so $\vec E$ must point straight away from the line and depend only on the distance $r$. For an infinite plane, $\vec E$ must be perpendicular to it. For a sphere, $\vec E$ must be radial. Then choose the surface that matches the symmetry:

:::figure caption="The three standard Gaussian surfaces (dashed). Left: a cylinder of radius r and length l around a line charge λ; the field crosses only the curved side. Centre: a pillbox through a sheet σ; the field crosses only the two flat ends. Right: a sphere of radius r around a charged shell; the field is radial and equal all over it."
<svg viewBox="0 0 460 180" role="img" aria-label="A dashed cylinder around a charged line, a dashed pillbox through a charged sheet, and a dashed sphere around a charged spherical shell">
<line class="ray" x1="8" y1="90" x2="142" y2="90"/>
<ellipse class="faint" cx="40" cy="90" rx="9" ry="30"/><ellipse class="faint" cx="110" cy="90" rx="9" ry="30"/>
<line class="faint" x1="40" y1="60" x2="110" y2="60"/><line class="faint" x1="40" y1="120" x2="110" y2="120"/>
<line class="ln" x1="75" y1="60" x2="75" y2="38"/><polyline class="ln" points="71,44 75,38 79,44"/>
<line class="ln" x1="75" y1="120" x2="75" y2="142"/><polyline class="ln" points="71,136 75,142 79,136"/>
<line class="ln" x1="58" y1="90" x2="58" y2="60" style="stroke-dasharray:2 2"/>
<text class="k" x="125" y="84">λ</text><text class="k" x="61" y="80">r</text><text x="68" y="168">l</text><text class="k" x="82" y="36">E</text>
<polygon class="m2" points="222,25 238,40 238,160 222,145" style="stroke:var(--phy);stroke-width:1.6"/>
<ellipse class="faint" cx="198" cy="92" rx="6" ry="18"/><ellipse class="faint" cx="262" cy="92" rx="6" ry="18"/>
<line class="faint" x1="198" y1="74" x2="262" y2="74"/><line class="faint" x1="198" y1="110" x2="262" y2="110"/>
<line class="ln" x1="192" y1="92" x2="168" y2="92"/><polyline class="ln" points="174,88 168,92 174,96"/>
<line class="ln" x1="268" y1="92" x2="292" y2="92"/><polyline class="ln" points="286,88 292,92 286,96"/>
<text class="k" x="226" y="20">σ</text><text class="k" x="160" y="84">E</text><text class="k" x="290" y="84">E</text><text x="212" y="176">area A</text>
<circle class="ray" cx="385" cy="90" r="32"/>
<circle class="faint" cx="385" cy="90" r="58"/>
<line class="ln" x1="385" y1="90" x2="426" y2="49" style="stroke-dasharray:2 2"/>
<line class="ln" x1="426" y1="131" x2="440" y2="145"/><polyline class="ln" points="433,145 440,145 440,138"/>
<text class="k" x="380" y="95">R</text><text class="k" x="410" y="64">r</text><text class="k" x="340" y="64">Q</text><text class="k" x="443" y="140">E</text>
</svg>
:::

## Line, sheet and spherical shell {lvl=2 id=s-apps label="Class 12"}

**Infinite line, charge λ per unit length (NCERT §1.14.1).** Take a coaxial cylinder of radius $r$ and length $l$. The flat ends have $\vec E$ along their surface, so zero flux. The curved side has area $2\pi rl$ and $\vec E$ normal to it:

$$E\cdot 2\pi r l = \frac{\lambda l}{\varepsilon_0} \;\Rightarrow\; E = \frac{\lambda}{2\pi\varepsilon_0 r}.$$

The field falls as $1/r$, not $1/r^2$. A line spreads its field over a growing **circle**, not a growing sphere.

**Infinite plane sheet, charge σ per unit area (§1.14.2).** Take a pillbox with end faces of area $A$ on both sides. The curved side gets no flux. Both ends get $EA$ outward:

$$2EA = \frac{\sigma A}{\varepsilon_0} \;\Rightarrow\; E = \frac{\sigma}{2\varepsilon_0}.$$

The field does not depend on the distance at all. Moving away from an infinite sheet does not make it look any smaller: a wider area of the sheet contributes at a shallower angle, and the two effects cancel. For a real sheet this holds while you are close compared with its size.

**Thin spherical shell, total charge $Q$ (§1.14.3).** Take a concentric sphere of radius $r$:

- Outside ($r > R$): $E\cdot4\pi r^2 = Q/\varepsilon_0$, so $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$. The shell acts as if all its charge were at the centre.
- Inside ($r < R$): the Gaussian sphere encloses nothing, so $E = 0$.

The zero inside is not just "the flux is zero". Zero flux alone allows a field that goes in on one side and out on the other. It is symmetry (the field must be radial and the same at every point of the sphere) that forces $E = 0$ everywhere on the surface.

:::worked title="Two parallel sheets"
Two large parallel sheets carry $+\sigma$ and $-\sigma$, with $\sigma = 17.7$ nC/m². Find the field between them and outside.

Each sheet gives $\sigma/(2\varepsilon_0) = 17.7\times10^{-9}/(2\times8.854\times10^{-12}) \approx 1000$ N/C, pointing away from the positive sheet and towards the negative one.

**Between the sheets** both fields point from + to −, so they add: $E = \sigma/\varepsilon_0 \approx 2000$ N/C.

**Outside** they point in opposite directions and cancel: $E = 0$.

This is the field of a parallel-plate capacitor (see the lesson **Capacitors**).
:::

:::qc
q: A long straight wire with λ = 2 nC/m gives 360 N/C at 10 cm. What is the field at 20 cm?
options: ["90 N/C", "180 N/C", "360 N/C", "720 N/C"]
answer: 1
right: Right. A line charge gives E ∝ 1/r, so doubling r halves E: 180 N/C.
wrong: For a line charge E = λ/(2πε₀r), proportional to 1/r, not 1/r². Doubling the distance halves the field: 180 N/C.
:::

## Solid angle: why the flux is exactly q/ε₀ {lvl=3 id=s-solid label="JEE"}

The sphere argument used a sphere centred on the charge. To see why **any** surface gives the same flux, we need the idea of solid angle.

**Solid angle.** A plane angle is arc length ÷ radius, measured in radians; a full circle is $2\pi$. A **solid angle** is the 3D version: the area a cone cuts from a sphere, divided by radius squared, measured in steradians (sr). A full sphere is $4\pi r^2/r^2 = 4\pi$ sr.

**A tilted patch.** Take a small patch $dS$ at distance $r$ from the charge, with its normal at angle $\theta$ to the radial direction. Seen from the charge, it covers the solid angle

$$d\Omega = \frac{dS\cos\theta}{r^2}.$$

Its flux is $E\,dS\cos\theta = \dfrac{q}{4\pi\varepsilon_0 r^2}\,dS\cos\theta = \dfrac{q}{4\pi\varepsilon_0}\,d\Omega$.

So **the flux through any patch equals $q/(4\pi\varepsilon_0)$ times the solid angle the patch subtends at the charge.** The distance and the tilt have dropped out. This works only because $E \propto 1/r^2$ exactly.

**Closed surfaces.** Follow any thin cone out from the charge.

- **Charge inside:** the cone crosses the surface an odd number of times, alternately out, in, out. The crossings cancel in pairs, leaving one net outward $d\Omega$. Adding all cones gives $4\pi$, and the flux is $\dfrac{q}{4\pi\varepsilon_0}\times 4\pi = q/\varepsilon_0$.
- **Charge outside:** every cone that meets the surface crosses it an even number of times, in and out, so the net is zero.

:::figure caption="A point charge q on the axis of a disc of radius a, at distance d. The edge of the disc subtends the half-angle α. The flux through the disc is q/(4πε₀) times the solid angle of this cone, 2π(1 − cos α)."
<svg viewBox="0 0 340 180" role="img" aria-label="A point charge on the axis of a disc, with a cone from the charge to the edge of the disc">
<circle class="obj" cx="50" cy="90" r="5"/>
<line class="faint" x1="50" y1="90" x2="300" y2="90"/>
<line class="ray" x1="50" y1="90" x2="250" y2="25"/><line class="ray" x1="50" y1="90" x2="250" y2="155"/>
<ellipse class="m2" cx="250" cy="90" rx="16" ry="65" style="stroke:var(--ink);stroke-width:1.4"/>
<path class="ln" d="M 100 90 A 50 50 0 0 0 97 74"/>
<line class="ln" x1="262" y1="90" x2="262" y2="25" style="stroke-dasharray:2 2"/>
<text class="k" x="44" y="112">q</text><text class="k" x="106" y="84">α</text><text class="k" x="150" y="104">d</text><text class="k" x="268" y="60">a</text>
</svg>
:::

:::law caption="Flux through a surface that subtends a solid angle Ω at a point charge. For a disc on the axis, cos α = d/√(d² + a²)."
$$\phi = \frac{q}{4\pi\varepsilon_0}\,\Omega, \qquad \Omega_{\text{disc}} = 2\pi(1-\cos\alpha)\ \Rightarrow\ \phi_{\text{disc}} = \frac{q}{2\varepsilon_0}\left(1 - \frac{d}{\sqrt{d^2+a^2}}\right)$$
:::

Check the limits: a very large disc ($a\to\infty$) gives $q/(2\varepsilon_0)$, half the total, because it hides half of all directions. A tiny disc gives $\approx q a^2/(4\varepsilon_0 d^2)$, which is $E\times\pi a^2$, as it should be.

**Cube tricks by symmetry.**

- Charge at the **centre** of a cube: six identical faces share $q/\varepsilon_0$, so each gets $q/(6\varepsilon_0)$.
- Charge at a **corner**: eight cubes meet at that corner and would together enclose it, so one cube gets $q/(8\varepsilon_0)$. The three faces that touch the charge get zero (the field runs along them), so each of the three far faces gets $q/(24\varepsilon_0)$.
- Charge at the **centre of a face**: two cubes share it, so the cube gets $q/(2\varepsilon_0)$, and the face holding the charge gets zero.

:::qc
q: A charge q sits on the axis of a disc, at a distance from the disc equal to the disc's radius. What fraction of q/ε₀ passes through the disc?
options: ["1/2", "(1 − 1/√2)/2 ≈ 0.146", "1/4", "1/(2√2) ≈ 0.354"]
answer: 1
right: Right. cos α = d/√(d² + a²) = 1/√2, so φ = (q/2ε₀)(1 − 1/√2) ≈ 0.146 q/ε₀.
wrong: Use φ = (q/2ε₀)(1 − cos α) with cos α = d/√(d² + d²) = 1/√2. This gives (1 − 0.707)/2 ≈ 0.146 of q/ε₀.
:::

## Solid spheres and non-uniform charge {lvl=3 id=s-solid-sphere label="JEE"}

For any **spherically symmetric** distribution $\rho(r)$, the field is radial and depends only on $r$, so a concentric Gaussian sphere always works:

:::law caption="Spherical symmetry. Only the charge inside radius r matters; the shells outside r give zero field there (shell theorem)."
$$E(r) = \frac{q_{\text{enc}}(r)}{4\pi\varepsilon_0 r^2}, \qquad q_{\text{enc}}(r) = \int_0^r \rho(r')\,4\pi r'^2\,dr'$$
:::

**Uniform ball** of charge $Q$ and radius $R$: $q_{\text{enc}} = Q r^3/R^3$, so inside

$$E = \frac{Q r}{4\pi\varepsilon_0 R^3} = \frac{\rho r}{3\varepsilon_0}, \qquad \vec E = \frac{\rho\,\vec r}{3\varepsilon_0}.$$

The field rises linearly from zero at the centre, peaks at the surface, then falls as $1/r^2$. The vector form $\rho\vec r/3\varepsilon_0$ will be the key to cavities below.

:::figure caption="E against r. Solid: a uniformly charged ball (linear inside, 1/r² outside, continuous at R). Dashed: a thin shell of the same charge (zero inside, then a jump to the same curve). A surface charge makes the field jump; a volume charge does not."
<svg viewBox="0 0 440 175" role="img" aria-label="Graph of electric field against distance for a solid sphere and a thin shell">
<line class="ln" x1="40" y1="150" x2="425" y2="150"/><line class="ln" x1="40" y1="150" x2="40" y2="15"/>
<polyline class="ln" points="419,146 425,150 419,154"/><polyline class="ln" points="36,21 40,15 44,21"/>
<polyline class="ray" points="40,150 160,40 175,57 190,70 205,80 220,89 250,101 280,110 310,117 340,122 380,128 420,132"/>
<line class="faint" x1="40" y1="148" x2="160" y2="148" style="stroke:var(--chem);stroke-dasharray:5 3;stroke-width:1.6"/>
<line class="faint" x1="160" y1="148" x2="160" y2="40"/>
<text class="k" x="155" y="165">R</text><text class="k" x="415" y="166">r</text><text class="k" x="20" y="22">E</text>
<text x="80" y="70">ρr/3ε₀</text><text x="290" y="100">Q/4πε₀r²</text><text x="62" y="140">shell: 0</text>
</svg>
:::

:::worked title="A sphere whose density falls to zero at the surface"
A ball of radius $R$ has $\rho = \rho_0(1 - r/R)$. Find $E$ inside and where it is largest.

$$q_{\text{enc}} = 4\pi\rho_0\int_0^r\left(r'^2 - \frac{r'^3}{R}\right)dr' = 4\pi\rho_0\left(\frac{r^3}{3} - \frac{r^4}{4R}\right).$$

$$E = \frac{q_{\text{enc}}}{4\pi\varepsilon_0 r^2} = \frac{\rho_0}{\varepsilon_0}\left(\frac{r}{3} - \frac{r^2}{4R}\right).$$

Setting $dE/dr = 0$: $\tfrac13 - \tfrac{r}{2R} = 0$, so the field peaks at $r = 2R/3$, **inside** the ball, where $E_{\max} = \rho_0R/(9\varepsilon_0)$. At the surface $E = \rho_0R/(12\varepsilon_0)$, which equals $Q/(4\pi\varepsilon_0R^2)$ with total charge $Q = \pi\rho_0R^3/3$, as it must.
:::

**Cylinders work the same way.** For an infinitely long cylinder with $\rho(r)$, a coaxial Gaussian cylinder gives $E\cdot2\pi rl = q_{\text{enc}}/\varepsilon_0$. A uniform cylinder gives $E = \rho r/(2\varepsilon_0)$ inside.

:::qc
q: Inside a uniformly charged ball, the field at half the radius is what fraction of the field at the surface?
options: ["1/4", "1/2", "1", "2"]
answer: 1
right: Right. Inside a uniform ball E ∝ r, so at R/2 the field is half its surface value.
wrong: Only the charge within r counts, and it grows as r³, so E ∝ r³/r² = r. At R/2 the field is half the surface value.
:::

## Conductors and the field jump across a sheet {lvl=3 id=s-conductors label="JEE"}

**Inside a conductor in equilibrium, $\vec E = 0$.** If it were not, the free electrons would move, so the charges were not yet in equilibrium. Apply Gauss's law to any small surface entirely inside the metal: zero field, so zero flux, so zero charge. **Any excess charge therefore sits on the surface.** (The lesson **Electric field** covers screening; **Capacitors** uses these results.)

**The field just outside is $\sigma/\varepsilon_0$, normal to the surface.** The tangential part must be zero, or charge would slide along the surface. Now draw a tiny pillbox with one face just inside the metal and one just outside. Only the outer face has flux:

$$E\,A = \frac{\sigma A}{\varepsilon_0} \;\Rightarrow\; E = \frac{\sigma}{\varepsilon_0}.$$

Compare the isolated sheet, $\sigma/(2\varepsilon_0)$. The difference is not a contradiction. The conductor's other charges arrange themselves to cancel the field inside, which doubles it outside.

**The jump across any surface charge.** The same pillbox, placed across any surface carrying $\sigma$ (not just a conductor), gives

:::law caption="Boundary condition. n̂ points from side 1 to side 2. The tangential component of E is continuous (the electrostatic field is conservative; see the lesson Potential)."
$$E_{2,n} - E_{1,n} = \frac{\sigma}{\varepsilon_0}$$
:::

Check: an isolated sheet has $+\sigma/2\varepsilon_0$ on one side and $-\sigma/2\varepsilon_0$ on the other (measured along $\hat n$), a jump of $\sigma/\varepsilon_0$. A conductor has $0$ inside and $\sigma/\varepsilon_0$ outside: the same jump. The jump is fixed by the local σ; how it is shared between the two sides depends on all the other charges.

:::qc
q: Just outside a charged conductor the field is 9.0 × 10⁴ N/C. What is the surface charge density there?
options: ["0.40 µC/m²", "0.80 µC/m²", "1.6 µC/m²", "10 µC/m²"]
answer: 1
right: Right. σ = ε₀E = 8.854 × 10⁻¹² × 9.0 × 10⁴ ≈ 8.0 × 10⁻⁷ C/m² = 0.80 µC/m².
wrong: At a conductor E = σ/ε₀ (not σ/2ε₀), so σ = ε₀E = 8.854 × 10⁻¹² × 9.0 × 10⁴ ≈ 0.80 µC/m².
:::

## A cavity in a charged sphere {lvl=3 id=s-cavity label="JEE"}

Cut a spherical hole out of a uniformly charged ball (density ρ). The hole is off-centre, so the symmetry is gone, and Gauss's law cannot be used on its own. But **superposition** can be.

A ball with a hole = (a full ball of $+\rho$) + (a small ball of $-\rho$ filling the hole). At any point P inside the hole, with $\vec r$ from the big centre O and $\vec r'$ from the hole's centre O′:

$$\vec E = \frac{\rho\,\vec r}{3\varepsilon_0} + \frac{(-\rho)\,\vec r'}{3\varepsilon_0} = \frac{\rho}{3\varepsilon_0}(\vec r - \vec r') = \frac{\rho\,\vec d}{3\varepsilon_0},$$

where $\vec d = \overrightarrow{OO'}$ is fixed. **The field in the hole is uniform**: the same size and direction at every point, parallel to the line of centres.

:::figure caption="A ball of charge density ρ (centre O) with a spherical cavity (centre O′). For any point P in the cavity, r − r′ = d, so the field is ρd/3ε₀ everywhere in the cavity (arrows)."
<svg viewBox="0 0 320 200" role="img" aria-label="A large circle with an off-centre circular cavity; vectors r, r prime and d; uniform field arrows inside the cavity">
<circle class="m2" cx="140" cy="100" r="88" style="stroke:var(--ink);stroke-width:1.4"/>
<circle cx="185" cy="100" r="38" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/>
<line class="ray" x1="160" y1="80" x2="210" y2="80"/><polyline class="ray" points="204,76 210,80 204,84"/>
<line class="ray" x1="160" y1="122" x2="210" y2="122"/><polyline class="ray" points="204,118 210,122 204,126"/>
<circle class="obj" cx="140" cy="100" r="3"/><circle class="obj" cx="185" cy="100" r="3"/><circle cx="195" cy="108" r="2.5" style="fill:var(--ink)"/>
<line class="ln" x1="140" y1="100" x2="185" y2="100"/>
<line class="faint" x1="140" y1="100" x2="195" y2="108"/><line class="faint" x1="185" y1="100" x2="195" y2="108"/>
<text class="k" x="124" y="104">O</text><text class="k" x="176" y="96">O′</text><text class="k" x="199" y="114">P</text><text class="k" x="158" y="96">d</text>
<text class="k" x="250" y="40">ρ</text><text x="236" y="104">E uniform</text>
</svg>
:::

The same trick works for a cylindrical hole in a uniformly charged cylinder: $\vec E = \rho\vec d/(2\varepsilon_0)$ in the hole.

## The pressure on a charged surface {lvl=4 id=s-pressure label="Olympiad"}

The charge on a conductor's surface feels an outward electric force. How big is it per unit area? It is tempting to say $\sigma E = \sigma\cdot\sigma/\varepsilon_0$. That is twice too large.

**Why half.** Split the field near a small patch of the surface into two parts:

- the patch's own field, which is $\sigma/(2\varepsilon_0)$ pointing away from it on both sides (it looks like an infinite sheet from very close);
- the field $\vec E_{\text{rest}}$ of all the other charges, which is smooth across the patch.

Inside the metal the total is zero, so $E_{\text{rest}} - \sigma/2\varepsilon_0 = 0$. Outside it is $E_{\text{rest}} + \sigma/2\varepsilon_0 = \sigma/\varepsilon_0$. Both give $E_{\text{rest}} = \sigma/(2\varepsilon_0)$. A patch cannot push itself, so it feels only $E_{\text{rest}}$:

:::law caption="Force per unit area on a surface charge: σ times the average of the fields on the two sides. For a conductor this is outward, whatever the sign of σ."
$$\frac{F}{A} = \sigma\,\frac{E_{\text{in}} + E_{\text{out}}}{2} = \frac{\sigma^2}{2\varepsilon_0} = \frac{\varepsilon_0E^2}{2}$$
:::

The last form says the pressure equals the energy density of the field just outside. That is no accident: if the surface moves out by $dx$, field-filled volume $A\,dx$ disappears, releasing energy $\tfrac12\varepsilon_0E^2A\,dx$, which is the work $F\,dx$.

:::worked title="Holding a charged sphere together"
A conducting spherical shell of radius $R$ carries charge $Q$. What force is needed to hold its two hemispheres together?

The pressure $\sigma^2/2\varepsilon_0$ acts normally outward everywhere. On a hemisphere, the net push is the pressure times the **projected** area $\pi R^2$ (the sideways components cancel, as for gas pressure on a dome). With $\sigma = Q/4\pi R^2$:

$$F = \frac{\sigma^2}{2\varepsilon_0}\pi R^2 = \frac{Q^2}{32\pi\varepsilon_0R^2}.$$

For $Q = 1$ µC and $R = 10$ cm this is about 0.11 N. Such forces are small for laboratory charges, but they are why charged soap bubbles grow slightly and why charged droplets break up (the Rayleigh limit).
:::

:::qc
q: The field just outside a conductor is 3.0 × 10⁶ N/C (near the breakdown of air). What outward pressure acts on the surface charge?
options: ["About 13 Pa", "About 40 Pa", "About 80 Pa", "About 2.7 × 10⁷ Pa"]
answer: 1
right: Right. p = ε₀E²/2 = 8.854 × 10⁻¹² × 9 × 10¹² / 2 ≈ 40 Pa. Even at the breakdown field the pressure is tiny compared with the atmosphere.
wrong: The pressure is ε₀E²/2 (not ε₀E²): 8.854 × 10⁻¹² × (3 × 10⁶)² / 2 ≈ 40 Pa.
:::

## Gauss's law and Coulomb's law are the same law {lvl=4 id=s-equiv label="Olympiad"}

**From Coulomb to Gauss.** The solid-angle argument proved Gauss's law for one point charge, using only the $1/r^2$ form and the radial direction. Superposition extends it to any distribution. So Coulomb + superposition ⟹ Gauss.

**From Gauss to Coulomb.** For one point charge, assume the field is radial and depends only on $r$ (space has no preferred direction, so the charge cannot pick one). A Gaussian sphere then gives $E = q/(4\pi\varepsilon_0r^2)$, and the force on a second charge is Coulomb's law.

**What Gauss's law alone does not fix.** Gauss's law controls only the "spreading out" of the field. Adding any field with zero net flux through every closed surface, such as a uniform field, leaves it satisfied. To pin the field down you need two more facts: the electrostatic field is **conservative** ($\oint\vec E\cdot d\vec l = 0$; see **Potential**) and it vanishes far away. With those, the solution is unique. That is why every derivation above began by using symmetry to fix the direction of $\vec E$.

**The local form.** Apply the law to a tiny box of volume $dV$. The net outflow per unit volume is the **divergence** of $\vec E$, and the divergence theorem turns the integral law into a point-by-point one:

:::law caption="Differential form of Gauss's law, the first of Maxwell's equations. ∇·E = ∂Eₓ/∂x + ∂E_y/∂y + ∂E_z/∂z."
$$\nabla\cdot\vec E = \frac{\rho}{\varepsilon_0}$$
:::

Check with the uniform ball: $\vec E = \rho\vec r/(3\varepsilon_0)$ has $\nabla\cdot\vec E = \rho(1+1+1)/(3\varepsilon_0) = \rho/\varepsilon_0$ ✓. In NCERT Example 1.10, $E_x = \alpha\sqrt x$ has $\partial E_x/\partial x = \alpha/(2\sqrt x) \ne 0$, so that field needs charge spread through the cube, consistent with the non-zero flux found there.

**Testing the inverse-square law.** If the force went as $1/r^{2+\delta}$, the flux through a sphere would depend on its radius, and a closed conducting shell would have a small field inside. Searching for that field is therefore the most sensitive test of Coulomb's law; these null experiments push $\delta$ far below $10^{-10}$ ([Unverified]: precision quoted from memory).

## Earnshaw's theorem {lvl=4 id=s-earnshaw label="Olympiad"}

Could a cleverly arranged set of fixed charges hold a positive test charge in **stable** equilibrium at a point P in empty space?

For stability, a small push in **any** direction must produce a restoring force back toward P. So on a tiny sphere around P, $\vec E$ must point **inward** everywhere. Then the flux through that sphere is negative, and Gauss's law demands negative charge inside it. But P is in a charge-free region. Contradiction.

:::law caption="Earnshaw's theorem (1842). A charge cannot be held in stable equilibrium by electrostatic forces alone. The same holds for a mass in a static gravitational field."
$$\nabla\cdot\vec E = 0 \text{ in empty space} \;\Rightarrow\; \text{no point where } \vec E \text{ points inward from every side}$$
:::

The equilibrium can be stable in some directions, but then it is unstable in others. Example: a positive charge midway between two equal positive charges is stable along the line joining them but unstable sideways.

Consequences:

- Classical atoms of static point charges cannot be stable (one reason for the planetary and then quantum models).
- Ion traps get round the theorem with **oscillating** fields (the Paul trap) or by adding a magnetic field (the Penning trap). Magnetic levitation of a frog works because diamagnetic materials are not covered by the theorem's assumptions.

## Gauss's law for gravity {lvl=4 id=s-gravity label="Olympiad"}

Newton's gravity is also an inverse-square, radial, superposable field. So everything above carries over, with $q \to m$ and $1/(4\pi\varepsilon_0) \to -G$ (the minus sign because gravity attracts):

$$\oint\vec g\cdot d\vec S = -4\pi G\,M_{\text{enc}}.$$

- A uniform spherical shell exerts no gravity inside it, and pulls on outside bodies as if its mass were at its centre (Newton's shell theorem, here in one line).
- Inside a uniform Earth, $g = g_0\,r/R$. A ball dropped down a frictionless tunnel through the centre oscillates in simple harmonic motion with period $2\pi\sqrt{R/g_0} \approx 84$ min, the same as the period of a satellite skimming the surface.
- The real Earth is denser at the centre, so $g$ actually **increases** a little on going down at first. [Inference from the known density profile; values not given here.]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Field lines start and end only on charges, so the net number leaving a closed surface depends only on the charge inside. Outside charges add nothing net. {lvl=1}
2. Flux $\phi = \oint\vec E\cdot d\vec S$, with the area vector along the outward normal. Gauss's law: $\phi = q_{\text{enc}}/\varepsilon_0$, for every closed surface; $\vec E$ in it is the total field. {lvl=2}
3. Symmetry fixes the direction of $\vec E$; then choose the matching surface. Line: $\lambda/2\pi\varepsilon_0r$. Sheet: $\sigma/2\varepsilon_0$. Shell: $Q/4\pi\varepsilon_0r^2$ outside, 0 inside. {lvl=2}
4. Flux through any surface from a point charge is $q\Omega/4\pi\varepsilon_0$. Disc: $\frac{q}{2\varepsilon_0}(1-\cos\alpha)$. Cube: $q/6\varepsilon_0$ per face (centre), $q/24\varepsilon_0$ per far face (corner). {lvl=3}
5. Spherical symmetry: $E = q_{\text{enc}}(r)/4\pi\varepsilon_0r^2$. Uniform ball: $\vec E = \rho\vec r/3\varepsilon_0$ inside; a cavity has a uniform field $\rho\vec d/3\varepsilon_0$. {lvl=3}
6. Conductor: $E = 0$ inside, charge on the surface, $E = \sigma/\varepsilon_0$ just outside. Across any sheet the normal field jumps by $\sigma/\varepsilon_0$. {lvl=3}
7. Surface pressure $\sigma^2/2\varepsilon_0 = \varepsilon_0E^2/2$ (average of the two side fields). Gauss ⇔ Coulomb + superposition; $\nabla\cdot\vec E = \rho/\varepsilon_0$; Earnshaw: no stable electrostatic equilibrium. Gravity: $\oint\vec g\cdot d\vec S = -4\pi GM_{\text{enc}}$. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Zero net flux does **not** mean zero field on the surface. A charge outside gives zero flux but a non-zero field everywhere on the surface. {lvl=2}
- Gauss's law always holds but finds $E$ only with symmetry. For a finite line, a finite sheet or a cube of charge, it gives the flux but not the field. {lvl=2}
- Sheet versus conductor: an isolated sheet gives $\sigma/2\varepsilon_0$ on each side; a conductor surface gives $\sigma/\varepsilon_0$ outside and 0 inside. {lvl=2}
- For a cube or disc, use symmetry or solid angle; never multiply a non-uniform field by an area. Faces that contain the charge get zero flux. {lvl=3}
- In a non-uniform sphere, integrate $\rho\,4\pi r^2\,dr$ for $q_{\text{enc}}$. Do not multiply $\rho(r)$ at one radius by the volume. {lvl=3}
- With a hole or an off-centre piece, think "full body plus a negative body" (superposition), not Gauss directly. {lvl=3}
- Force on a surface charge uses the average field $(E_{\text{in}} + E_{\text{out}})/2$, not the outside field: $\sigma^2/2\varepsilon_0$, not $\sigma^2/\varepsilon_0$. {lvl=4}
- Force on a hemisphere from a normal pressure is pressure × projected area $\pi R^2$, not × curved area $2\pi R^2$. {lvl=4}
:::
