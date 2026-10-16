---
title: Electric charge
summary: Two kinds of charge from rubbing, electrons as the carriers, conductors and insulators, the electroscope, the three properties of charge (additive, conserved, quantised), induction and the electrophorus, why charged bodies attract neutral ones, charge sharing between conductors, Millikan's idea, quarks and charge invariance.
ncert: ["Class 12 Physics · Ch 1 Electric Charges and Fields (§1.1–1.4)"]
up_to: Olympiad
builds_on: [Structure of the atom, Force and Newton's laws, Conservation laws]
notes_prompt: Explain in your own words why a charged comb can pick up neutral bits of paper, and why it would still pick them up if its charge were reversed.
margin:
  - kind: history
    title: History
    text: The word "electric" comes from the Greek elektron, amber, which attracts straw when rubbed. Charles du Fay found two kinds of electrification (he called them vitreous and resinous) in the 1730s, and Benjamin Franklin later renamed them positive and negative. (Names and dates from memory, [Unverified].)
  - kind: tip
    title: Board favourite
    text: In induction questions, track only the electrons. Protons never move in a solid. Earthing lets electrons flow to or from the earth, and the sign the body ends with is always opposite to that of the inducing rod.
  - kind: olympiad
    title: Olympiad link
    text: Repeated contact or repeated connection problems give geometric progressions. Write the charge after step n in terms of step n − 1, find the fixed point, and the answer is fixed point × (1 − ratioⁿ).
books:
  - { title: "NCERT Physics Class XII Part I", ref: "Ch 1 Electric Charges and Fields, §1.1–1.4, Examples 1.1–1.2, Exercises 1.4, 1.5, 1.11" }
  - { title: "H. C. Verma, Concepts of Physics Vol. 2", ref: "Ch. 29 Electric Field and Potential (§29.1–29.2 Electric charge)" }
  - { title: "E. M. Purcell and D. J. Morin, Electricity and Magnetism", ref: "Ch. 1 Electrostatics (§1.1–1.3 charge, conservation, quantisation); Ch. 5 (charge invariance)" }
  - { title: "D. Halliday, R. Resnick and J. Walker, Fundamentals of Physics", ref: "Ch. 21 Coulomb's Law (charge, conductors and insulators, quantisation, conservation)" }
cards:
  - { front: "What actually moves when a glass rod is rubbed with silk?", back: "Electrons, from the glass to the silk. The glass is left positive and the silk negative by exactly the same amount." }
  - { front: "The three basic properties of charge?", back: "Additive (total charge is the algebraic sum), conserved (the total in an isolated system never changes), quantised ($q = ne$, $e = 1.6\\times10^{-19}$ C)." }
  - { front: "Why does a charged rod attract a neutral body?", back: "It polarises the body: opposite charge is pulled to the near side and like charge pushed to the far side. The near charge feels a stronger force, so the net force is attractive for either sign of the rod." }
  - { front: "Charging by induction: sign of the final charge?", back: "Opposite to the inducing charge. The rod never touches the body and loses no charge." }
  - { front: "Two conductors of radii $R_1$, $R_2$ far apart, joined by a thin wire: how is charge shared?", back: "In the ratio of the radii, $q_1/q_2 = R_1/R_2$, because both end at the same potential $kq/R$." }
  - { front: "Quark charges, and why we never see $e/3$?", back: "$u$: $+\\tfrac23 e$, $d$: $-\\tfrac13 e$. Quarks are confined inside hadrons, and every allowed combination has an integer total charge." }
---

:::hook
q: A comb run through dry hair picks up small bits of paper. The bits of paper were never charged. Why are they attracted?
options: ["The air near the comb charges the paper before it moves", "The comb separates charges inside each bit, and the opposite charge ends up nearer the comb", "Rubbing magnetises the comb", "The paper is attracted only if its charge is opposite to the comb's"]
answer: 1
right: Right. The paper stays neutral overall, but the comb pulls opposite charge slightly towards it and pushes like charge away. The nearer charge feels the larger force, so the paper is pulled in. This is polarisation, and it is why a charged body attracts any neutral body.
wrong: The paper stays neutral. The comb shifts charge inside each bit, so opposite charge sits a little nearer the comb than like charge. Electric forces weaken with distance, so the attraction wins. Section "Why charged bodies attract neutral ones" works this out.
:::

## Rubbing things: two kinds of charge {lvl=1 id=s-rub label="Class 10"}

Rub a glass rod with silk and it attracts dust and bits of paper. Rub a plastic rod with wool and it does the same. Something has been given to the rods. We call it **electric charge**.

A few simple experiments show there are exactly **two kinds** of charge:

- Two glass rods, both rubbed with silk, **repel** each other.
- Two plastic rods, both rubbed with wool, **repel** each other.
- A rubbed glass rod and a rubbed plastic rod **attract** each other.
- The silk used on the glass attracts the glass rod, and repels the wool-rubbed plastic.

Every charged object ever tested behaves either like the glass rod or like the plastic rod. Nobody has found a third kind, one that repels both or attracts both. So:

:::law caption="The basic rule of electrostatics."
Like charges repel; unlike charges attract.
:::

The names are a convention due to Franklin: the glass-rod kind is called **positive**, the plastic-rod kind **negative**. Calling them $+$ and $-$ is more than a label. When equal amounts of the two are put together on one body, their effects cancel completely, just as $+3$ and $-3$ add to zero. A body with no net charge is **neutral**.

:::qc
q: Rod A repels rod B. Rod B attracts rod C. Rod C is negative. What is rod A?
options: ["Negative", "Positive", "Neutral", "Cannot be decided"]
answer: 1
right: Right. B attracts the negative rod C, so B is positive (attraction alone could also mean B is neutral, but B repels A, and only charged bodies repel). A repels B, so A is also positive.
wrong: Repulsion is the reliable test, since only like charges repel. A repels B, so they have the same sign. B attracts negative C and is charged (it repels A), so B is positive, and so is A.
:::

## What really moves: electrons {lvl=1 id=s-electrons label="Class 10"}

Every material is made of atoms. Each atom has a small, heavy **nucleus** holding positive **protons** (and neutral neutrons), surrounded by much lighter, negative **electrons**. In a neutral atom the number of electrons equals the number of protons.

In a solid, the nuclei are locked in place. Only electrons, and only the outermost ones, can be moved from one body to another. So when two different materials are rubbed together:

- electrons cross from the material that holds them less tightly to the one that holds them more tightly;
- the body that loses electrons is left **positive** (more protons than electrons);
- the body that gains electrons becomes **negative**, by exactly the same amount.

Glass loses electrons to silk. Wool loses electrons to polythene (NCERT Exercise 1.11). Rubbing only helps by making many points of close contact; it does not create anything.

:::figure caption="Rubbing a glass rod with silk. A few electrons (−) cross from the glass to the silk. The rod is left with unbalanced + charges, the silk carries the same number of extra electrons."
<svg viewBox="0 0 360 140" role="img" aria-label="Glass rod and silk cloth, with electrons crossing from rod to silk">
<rect class="ln" x="20" y="30" width="200" height="26" rx="6"/>
<text class="k" x="24" y="22">glass rod</text>
<text x="40" y="48">+</text><text x="70" y="48">+</text><text x="100" y="48">+</text><text x="130" y="48">+</text><text x="160" y="48">+</text>
<path class="m2" d="M150 70 q30 -10 60 0 q30 10 60 0 l0 40 q-30 10 -60 0 q-30 -10 -60 0 z"/>
<path class="ln" d="M150 70 q30 -10 60 0 q30 10 60 0 l0 40 q-30 10 -60 0 q-30 -10 -60 0 z"/>
<text class="k" x="285" y="95">silk</text>
<text x="170" y="96">−</text><text x="200" y="96">−</text><text x="230" y="96">−</text><text x="255" y="96">−</text><text x="185" y="106">−</text>
<path class="ray" d="M120 60 L165 82"/><path class="ray" d="M165 82 l-9 -1 m9 1 l-4 -8"/>
<text x="60" y="88">electrons move</text><text x="60" y="100">rod → silk</text>
</svg>
:::

Since electrons have mass, a negatively charged body is, strictly, a little heavier. The effect is tiny: the $3\times10^{-7}$ C on the polythene in NCERT Exercise 1.11 is about $2\times10^{12}$ extra electrons, roughly $2\times10^{-18}$ kg.

## Conductors and insulators {lvl=1 id=s-conductors label="Class 10"}

Hold a metal rod in your hand and rub it: it seems to stay uncharged. Hold the same rod by a plastic handle and rub it: it charges. The difference is whether charge can **travel through** the material.

- In a **conductor** (metals, the human body, the earth, salt water) some electrons are not tied to any one atom. These **free electrons** move through the whole body when pushed. Charge placed at one point spreads over the whole conductor at once, and, if there is a path, flows away through your hand into the earth.
- In an **insulator** (glass, plastic, rubber, dry wood, dry air) every electron is bound to its own atom or molecule. Charge stays where it was put.
- **Semiconductors** (silicon, germanium) lie in between, and their conduction can be controlled. They are treated in the Semiconductors leaf.

Connecting a conductor to the earth is called **earthing** or **grounding**. The earth is so large that it can give or take any number of electrons without its own state changing noticeably, so an earthed conductor shares its charge with the earth and is left practically neutral. The third pin of a household plug is the earth connection for exactly this reason.

:::qc
q: Why can a metal rod held directly in the hand not be charged by rubbing?
options: ["Metals do not have electrons that can move", "The charge flows away through the rod and the body to the earth", "Metals always gain equal positive and negative charge", "Metals are too dense"]
answer: 1
right: Right. The metal does gain charge, but it is a conductor, as is the body, so the charge drains to the earth. With an insulating handle the charge stays on the rod.
wrong: The metal does charge, but metal and body are both conductors, so the charge flows through them into the earth. Holding the rod by an insulating handle traps the charge on it.
:::

## Detecting charge: the electroscope {lvl=1 id=s-electroscope label="Class 10"}

The gold-leaf electroscope is the simplest detector. A metal rod passes through an insulating stopper into a glass box. At the top is a metal disc or knob; at the bottom hang two thin strips of gold foil (or aluminium).

:::figure caption="A gold-leaf electroscope. A negative rod touches the knob; electrons spread through the metal, both leaves become negative and push apart. The bigger the charge, the wider the leaves open."
<svg viewBox="0 0 360 200" role="img" aria-label="Electroscope with diverging leaves">
<rect class="ln" x="110" y="70" width="140" height="120" rx="6"/>
<rect class="m2" x="168" y="62" width="24" height="14"/><rect class="ln" x="168" y="62" width="24" height="14"/>
<line class="ln" x1="180" y1="40" x2="180" y2="130" style="stroke-width:3"/>
<ellipse class="ln" cx="180" cy="36" rx="22" ry="6"/>
<line class="ray" x1="180" y1="130" x2="160" y2="172"/><line class="ray" x1="180" y1="130" x2="200" y2="172"/>
<text x="150" y="160">−</text><text x="203" y="160">−</text><text x="186" y="104">−</text><text x="186" y="34">−</text>
<rect class="ln" x="196" y="8" width="120" height="16" rx="4" transform="rotate(-12 196 16)"/>
<text x="240" y="40">− − −</text><text class="k" x="258" y="58">charged rod</text>
<text class="k" x="20" y="40">metal knob</text><text class="k" x="20" y="72">insulating</text><text x="20" y="84">stopper</text>
<text class="k" x="20" y="160">leaves</text><line class="faint" x1="62" y1="157" x2="155" y2="157"/>
</svg>
:::

- **Touching** the knob with a charged body gives the whole metal part charge of the same sign. Both leaves carry like charge and repel, so they diverge.
- To find the **sign** of an unknown charge, first charge the electroscope with a known sign, then bring the unknown body near the knob (not touching). If the leaves open **further**, the body has the **same** sign. If they close, it is either of opposite sign or simply a neutral conductor, so a decrease alone does not settle the question.

## Three properties of charge {lvl=2 id=s-props label="Class 12"}

Experiments over three centuries show that charge obeys three simple rules. Each one has a reason.

**1. Charge is additive.** The total charge of a body or system is the algebraic sum of its parts: a body with charges $+2$, $+5$, $-3$ (in any unit) has net charge $+4$. This works because charge is a **scalar**: it has a size and a sign but no direction. Two charges side by side do not "point" anywhere; you just add the numbers.

Mass is also a scalar, but it cannot be negative. Charge can, so a body packed with charge can still be neutral. A cup of water holds about $1.3\times10^{7}$ C of positive charge and the same amount of negative charge (NCERT Example 1.2), yet its net charge is zero.

**2. Charge is conserved.** In an isolated system the total charge never changes. Charge can be moved from body to body, but it cannot be created or destroyed on its own. When glass and silk are rubbed, $+q$ appears on one and $-q$ on the other; the total stays zero (NCERT Exercise 1.5).

Particles can be created and destroyed, but only in ways that keep the total charge fixed. A neutron decays into a proton, an electron and an antineutrino: $0 \to (+e) + (-e) + 0$. A high-energy photon can turn into an electron and a positron: $0 \to (-e) + (+e)$.

**3. Charge is quantised.** Every charge found on a free body is a whole-number multiple of one basic unit, the size of the electron's charge $e$:

:::eq caption="Quantisation of charge. The SI value of e has been fixed exactly since the 2019 redefinition of the SI units."
$$q = ne,\qquad n = 0, \pm1, \pm2, \dots,\qquad e = 1.602\,176\,634\times10^{-19}\ \text{C}$$
:::

The electron carries $-e$, the proton $+e$. A body can hold $5e$ or $-12e$, but never $2.5e$.

:::qc
q: Two identical metal spheres carry +7 µC and −3 µC. They touch and are separated. Which statement is correct?
options: ["Each carries +5 µC", "Each carries +2 µC", "One carries +7 µC and the other −3 µC still", "Each carries +4 µC"]
answer: 1
right: Right. The total, +7 + (−3) = +4 µC, is conserved (additivity plus conservation), and by symmetry identical spheres share it equally.
wrong: Add the charges with their signs: the total is +4 µC, and this total cannot change. Identical spheres share it equally, so each has +2 µC.
:::

## How big is a coulomb? {lvl=2 id=s-coulomb label="Class 12"}

The SI unit of charge is the **coulomb** (C), the charge carried by a current of 1 A in 1 s. It takes

$$n = \frac{1\ \text{C}}{1.6\times10^{-19}\ \text{C}} = 6.25\times10^{18}$$

electrons to make one coulomb. Even moving $10^9$ electrons a second, you would need about 198 years to collect 1 C (NCERT Example 1.1).

Electrostatic experiments work with far less. The charges on rubbed rods are usually microcoulombs (µC, $10^{-6}$ C) or nanocoulombs (nC, $10^{-9}$ C). Two charges of 1 C each, a metre apart, would push on each other with about $9\times10^{9}$ N, as the Coulomb's law leaf shows.

This explains why quantisation is invisible in daily life. A charge of 1 µC is about $6\times10^{12}$ electrons. Adding or removing one electron changes it by roughly one part in $10^{13}$, far below anything we can measure on a rod. So for large bodies we treat charge as continuous, and only at the level of atoms and single particles does the graininess matter (NCERT Exercise 1.4).

## Charging by induction {lvl=2 id=s-induction label="Class 12"}

Touching passes charge from one body to another, and the rod loses some of its own charge. **Induction** charges a conductor without touching it, and the rod keeps all its charge.

The idea: a charged rod held near a conductor pushes the conductor's free electrons around. If at that moment we give the displaced charge a way out, and then close that way, the conductor is left charged.

:::figure caption="Charging a sphere by induction. (1) A positive rod draws electrons to the near side. (2) Earthing: electrons flow up from the earth, attracted by the rod. (3) The earth link is broken with the rod still in place. (4) The rod is removed; the extra electrons spread evenly. The sphere ends negative."
<svg viewBox="0 0 400 150" role="img" aria-label="Four panels showing charging by induction">
<g>
<rect class="ln" x="4" y="50" width="16" height="50" rx="3"/><text x="8" y="70">+</text><text x="8" y="86">+</text>
<circle class="ln" cx="55" cy="75" r="26"/><text x="32" y="72">−</text><text x="32" y="86">−</text><text x="72" y="72">+</text><text x="72" y="86">+</text>
<text class="k" x="45" y="140">(1)</text>
</g>
<g>
<rect class="ln" x="102" y="50" width="16" height="50" rx="3"/><text x="106" y="70">+</text><text x="106" y="86">+</text>
<circle class="ln" cx="153" cy="75" r="26"/><text x="130" y="72">−</text><text x="130" y="86">−</text><text x="140" y="79">−</text>
<line class="ln" x1="153" y1="101" x2="153" y2="120"/><line class="ln" x1="143" y1="120" x2="163" y2="120"/><line class="ln" x1="147" y1="124" x2="159" y2="124"/><line class="ln" x1="151" y1="128" x2="155" y2="128"/>
<path class="ray" d="M168 122 L168 104 m-4 6 l4 -6 l4 6"/><text x="172" y="118">e⁻</text>
<text class="k" x="143" y="140">(2)</text>
</g>
<g>
<rect class="ln" x="200" y="50" width="16" height="50" rx="3"/><text x="204" y="70">+</text><text x="204" y="86">+</text>
<circle class="ln" cx="251" cy="75" r="26"/><text x="228" y="72">−</text><text x="228" y="86">−</text><text x="238" y="79">−</text>
<line class="faint" x1="251" y1="101" x2="251" y2="112"/><line class="ln" x1="241" y1="120" x2="261" y2="120"/><line class="ln" x1="245" y1="124" x2="257" y2="124"/>
<text class="k" x="241" y="140">(3)</text>
</g>
<g>
<circle class="ln" cx="349" cy="75" r="26"/><text x="345" y="56">−</text><text x="326" y="80">−</text><text x="366" y="80">−</text>
<text class="k" x="339" y="140">(4)</text>
</g>
</svg>
:::

The order matters. If the rod is removed **before** the earth link is broken, the electrons simply flow back to the earth and the sphere ends neutral.

The NCERT version uses two metal spheres touching each other. The rod drives electrons into the far sphere (or draws them into the near one). Separate the spheres while the rod is still there, then remove the rod: the spheres carry **equal and opposite** charges. The total is still zero, as conservation demands.

:::qc
q: In step (2) above, if the rod were negative instead of positive, what would happen when the sphere is earthed?
options: ["Electrons flow from the earth to the sphere", "Electrons flow from the sphere to the earth", "Protons flow from the earth to the sphere", "Nothing flows"]
answer: 1
right: Right. A negative rod repels the sphere's free electrons, and the earth gives them a way out. The sphere is left positive once the link is broken and the rod removed.
wrong: Only electrons move. A negative rod repels them, so they leave the sphere through the earth connection. The sphere ends positive, again opposite to the rod.
:::

## Why charged bodies attract neutral ones {lvl=2 id=s-polarisation label="Class 12"}

Back to the hook. The comb's charge acts on the charges inside the paper even though the paper is neutral overall.

- In a **conductor**, free electrons move: near a positive rod, they crowd onto the near side, leaving the far side positive.
- In an **insulator** no charge travels, but each molecule's electron cloud shifts a tiny distance relative to its nuclei. Each molecule becomes a small **dipole**, and the net effect is a thin layer of opposite charge on the near face and like charge on the far face.

Either way the body is **polarised**: it is still neutral, but its charges are no longer centred at the same place.

:::figure caption="A positive rod polarises a neutral body. The induced negative charge is closer to the rod than the induced positive charge, so the attraction (long arrow) beats the repulsion (short arrow)."
<svg viewBox="0 0 360 120" role="img" aria-label="Polarised neutral body near a positive rod, with unequal forces">
<rect class="ln" x="20" y="30" width="22" height="60" rx="4"/><text x="27" y="52">+</text><text x="27" y="68">+</text><text x="27" y="84">+</text>
<ellipse class="m2" cx="200" cy="60" rx="70" ry="34"/><ellipse class="ln" cx="200" cy="60" rx="70" ry="34"/>
<text x="140" y="56">−</text><text x="140" y="72">−</text><text x="252" y="56">+</text><text x="252" y="72">+</text>
<path class="ray" d="M140 102 L70 102 m8 -5 l-8 5 l8 5"/><text x="80" y="117">strong pull</text>
<path class="ray" d="M258 102 L290 102 m-8 -5 l8 5 l-8 5"/><text x="262" y="117">weak push</text>
</svg>
:::

Electric forces weaken with distance (Coulomb's law). The induced opposite charge is nearer the rod than the induced like charge, so the attraction is larger than the repulsion and the body is pulled in.

Two consequences:

- **Reverse the rod's charge** and every induced charge reverses too, so the force is still attractive. A charged body attracts a neutral one whatever its sign. That is why **attraction alone cannot prove that a body is charged**; only repulsion can.
- Conductors are attracted much more strongly than insulators of the same size, because their charges can move much further.

:::qc
q: A balloon rubbed on hair sticks to a neutral wall. If the balloon's charge were somehow reversed, it would
options: ["fall off, since it would now be repelled", "still stick", "stick only if the wall were negative", "stick only if the wall were a conductor"]
answer: 1
right: Right. The wall's induced charges reverse with the balloon's, so the nearer charge is again opposite to the balloon's and the force is still attractive.
wrong: Polarisation always puts the opposite charge on the near side, whatever the sign of the balloon. The force is attractive either way.
:::

## Charge sharing between conductors {lvl=3 id=s-sharing label="JEE"}

When two conductors touch, or are joined by a wire, charge flows between them until it stops. Conservation gives one equation: the total charge after equals the total before. A second fact decides how it is divided.

**Identical conductors** share the total equally, by symmetry: nothing distinguishes one from the other once they are in contact. Touch $+6\ \mu$C to $-2\ \mu$C and each ends with $+2\ \mu$C.

**Unequal conductors.** Charge flows until both reach the same **potential** (the subject of the Potential leaf). For an isolated sphere of radius $R$ carrying $q$, the potential is $kq/R$. So for two spheres **far apart, joined by a long thin wire**,

:::eq caption="Charge sharing between distant spheres joined by a wire: equal potentials, so charge in proportion to radius."
$$\frac{kq_1}{R_1} = \frac{kq_2}{R_2}\quad\Longrightarrow\quad \frac{q_1}{q_2} = \frac{R_1}{R_2},\qquad q_1 = \frac{R_1}{R_1+R_2}\,Q_{\text{total}}$$
:::

The bigger sphere takes more charge, but its **surface density** $\sigma = q/4\pi R^2$ is smaller: $\sigma_1/\sigma_2 = R_2/R_1$. Charge piles up most densely where a conductor is most sharply curved. This is why lightning conductors are pointed.

Spheres that actually **touch** do not share exactly in the ratio of radii, because each one's charge changes the other's distribution. For a very small sphere touching a large one, the small sphere gets much less than the radius ratio suggests: its share is of order $(r/R)^2$, and the surface densities differ by a factor close to $\pi^2/6$. [Unverified: this factor is quoted from memory of Maxwell's analysis.] In problems, "touched" means identical spheres sharing equally, and "joined by a long wire" means sharing by radius.

:::worked title="A chain of contacts"
A metal sphere A carries $Q = 64$ nC. It is touched in turn to $n$ identical neutral spheres, each touch separating cleanly.

Each touch halves A's charge: $Q, \tfrac Q2, \tfrac Q4, \dots$ After $n$ touches A has $Q/2^n$. After 6 touches, $64/64 = 1$ nC.

The neutral spheres carry $32, 16, 8, 4, 2, 1$ nC. The total $63 + 1 = 64$ nC: charge is conserved, and the shares form a geometric progression with ratio $\tfrac12$.

**Variation.** If A is instead **recharged** to $Q$ after each touch and touched to the **same** sphere B each time, B goes $\tfrac Q2, \tfrac{3Q}4, \tfrac{7Q}8, \dots$, that is $Q(1 - 2^{-n})$. It approaches $Q$ but never passes it: once B has $Q$, touching A to it moves nothing. The general rule: find the fixed point (where a step changes nothing), then the gap to it shrinks by the same ratio each step.
:::

:::qc
q: Spheres of radii 2 cm and 6 cm, far apart, are joined by a thin wire and given a total charge of 40 nC. How much sits on the smaller sphere?
options: ["20 nC", "10 nC", "30 nC", "13.3 nC"]
answer: 1
right: Right. q₁/q₂ = R₁/R₂ = 1/3, so the small sphere has 40 × 2/8 = 10 nC and the large one 30 nC.
wrong: Equal potentials give q ∝ R. The share of the 2 cm sphere is 2/(2 + 6) of 40 nC, which is 10 nC.
:::

## Millikan's idea: measuring e {lvl=3 id=s-millikan label="JEE"}

How do we know charge comes in lumps of $e$? Robert Millikan (around 1909–1913, [Unverified dates]) sprayed tiny oil drops between two horizontal metal plates. Spraying charges the drops by friction, each with some small number of electrons.

1. With the plates uncharged, a drop falls and soon reaches a steady speed, set by its weight and air drag. Stokes' law of drag then gives its radius, and so its mass $m$.
2. A field $E$ between the plates pushes on the drop with force $qE$ (the Electric field leaf). Adjust $E$ until the drop hangs still: $qE = mg$, so $q = mg/E$.
3. Repeat for many drops, and for the same drop after its charge changes (when it catches an ion from the air).

Every measured charge turned out to be a whole multiple of one value, $e \approx 1.6\times10^{-19}$ C. No drop ever carried $1.5e$.

:::worked title="Finding e from data (original numbers)"
Five drops give $q$ in units of $10^{-19}$ C: $4.8,\ 8.0,\ 11.2,\ 6.4,\ 14.4$.

Differences between values: $8.0 - 6.4 = 1.6$, $6.4 - 4.8 = 1.6$, $11.2 - 8.0 = 3.2$. The smallest step is $1.6$, and every value divides by it: $3, 5, 7, 4, 9$. So the data fit $e = 1.6\times10^{-19}$ C.

Data alone could also fit $0.8\times10^{-19}$ C (with twice the multiples). Choosing the **largest** common unit is the honest reading; it is backed by the fact that with many drops, no value ever falls halfway between the multiples of $1.6$.
:::

## Induction at work: the electrophorus {lvl=3 id=s-electrophorus label="JEE"}

The **electrophorus**, popularised by Volta in the 1770s ([Unverified date]), uses induction to draw charge again and again from one charged plate.

:::figure caption="The electrophorus. (a) A metal disc on an insulating handle rests on a negatively charged insulating plate. Electrons in the disc are pushed to its top. (b) Touching the top lets them escape to earth. (c) Lifted away, the disc is positive. The plate is unchanged, so the cycle can be repeated."
<svg viewBox="0 0 380 150" role="img" aria-label="Three steps of the electrophorus">
<g>
<rect class="m2" x="10" y="100" width="100" height="16"/><rect class="ln" x="10" y="100" width="100" height="16"/><text x="18" y="112">− − − − − − −</text>
<rect class="ln" x="20" y="80" width="80" height="18" rx="3"/><text x="28" y="94">+ + + + +</text><text x="28" y="77">− − − − −</text>
<line class="ln" x1="60" y1="80" x2="60" y2="50"/><text class="k" x="55" y="140">(a)</text>
</g>
<g>
<rect class="m2" x="135" y="100" width="100" height="16"/><rect class="ln" x="135" y="100" width="100" height="16"/><text x="143" y="112">− − − − − − −</text>
<rect class="ln" x="145" y="80" width="80" height="18" rx="3"/><text x="153" y="94">+ + + + +</text>
<line class="ln" x1="185" y1="80" x2="185" y2="50"/>
<path class="ray" d="M210 79 L226 52 m-1 7 l1 -7 l-6 4"/><text x="222" y="48">e⁻ to earth</text>
<text class="k" x="178" y="140">(b)</text>
</g>
<g>
<rect class="m2" x="265" y="100" width="100" height="16"/><rect class="ln" x="265" y="100" width="100" height="16"/><text x="273" y="112">− − − − − − −</text>
<rect class="ln" x="275" y="38" width="80" height="18" rx="3"/><text x="283" y="51">+ + + + +</text>
<line class="ln" x1="315" y1="38" x2="315" y2="12"/><text class="k" x="308" y="140">(c)</text>
</g>
</svg>
:::

The plate is an insulator and touches the disc at only a few points, so it hardly loses any charge. Each cycle gives the disc a fresh positive charge.

Does this make charge, or energy, from nothing? Charge: no. Each positive charge on the disc is matched by an electron sent to earth, so the total stays fixed. Energy: no. The positive disc is attracted to the negative plate, so you do work lifting it away. That work becomes the energy stored in the charged disc, which you can see when it gives a spark.

## The conductor at equilibrium: a preview {lvl=3 id=s-equilibrium label="JEE"}

Once charges in a conductor stop moving (electrostatic equilibrium, reached in a tiny fraction of a second), a few facts follow from the simple idea that free charges move whenever a force acts on them:

- The electric field **inside** the conductor material is zero. If it were not, free electrons would still be moving.
- Any **excess charge** lies on the outer surface. Gauss's law (the Gauss's law leaf) turns this into a proof.
- The whole conductor is at **one potential**. This is what decides charge sharing above (the Potential leaf).
- Just outside, the field is perpendicular to the surface; a sideways part would push surface charge along.

These four facts explain shielding, the electroscope, and why charge sits densest on sharp points. They are proved properly in the leaves named.

## Quarks, confinement and the limits of quantisation {lvl=4 id=s-quarks label="Olympiad"}

Protons and neutrons are not fundamental. Each is made of three **quarks**, which carry fractional charges:

$$u: +\tfrac23 e,\qquad d: -\tfrac13 e,\qquad \text{proton } uud: \tfrac23+\tfrac23-\tfrac13 = +1,\qquad \text{neutron } udd: \tfrac23-\tfrac13-\tfrac13 = 0.$$

So is $e$ really the smallest unit? Two facts save the rule $q = ne$ for anything we can isolate:

- Quarks are **confined**. The strong force between them does not weaken with distance, so pulling one out takes so much energy that new quark–antiquark pairs form instead. A free quark has never been observed, and searches for fractional charge on matter (Millikan-type experiments included) have found none that was confirmed. [Unverified: summary of experimental status from memory.]
- Every combination that **can** exist free (three quarks, or a quark with an antiquark) has an integer charge. Each quark's charge is $\tfrac23 e$ up to a whole number, so three of them give a whole number, and a quark with an antiquark cancels the fraction.

Why charge is quantised at all is still not fully explained. Dirac showed (1931, [Unverified date]) that if even one magnetic monopole existed anywhere, quantum mechanics would force all charges to be multiples of a basic unit. No monopole has been found. Some grand unified theories also predict quantisation. [Inference: both are offered here as possible explanations, not established ones.]

How exactly neutral is an atom? If the proton and electron charges differed by a fraction $\delta$, every kilogram of matter would carry a net charge of about $\delta\times5\times10^{7}$ C, and the electric repulsion between bodies would swamp gravity for $\delta$ above about $10^{-18}$ (problem o3 below). Experiments find $\delta$ far smaller than this, below about $10^{-21}$. [Unverified: the experimental bound is quoted from memory.]

## Conservation, locally and at any speed {lvl=4 id=s-local label="Olympiad"}

Conservation of charge is stronger than "the total stays fixed". Charge cannot vanish in one place and reappear far away at the same moment, even though the total would be unchanged. It is conserved **locally**: the charge inside any closed surface changes only by what flows through the surface.

:::eq caption="The continuity equation: local conservation of charge. ρ is charge per volume, J is current per area."
$$\frac{dQ_{\text{inside}}}{dt} = -\oint \vec J\cdot d\vec A\qquad\Longleftrightarrow\qquad \frac{\partial\rho}{\partial t} + \nabla\cdot\vec J = 0$$
:::

Kirchhoff's junction rule is the special case with nothing changing in time. Relativity demands local conservation anyway: observers moving relative to each other disagree about which distant events are simultaneous, so a "vanish here, appear there at the same instant" process would look like a violation to some of them.

**Charge invariance.** The charge of a particle does not depend on how fast it moves, unlike its apparent mass or length. The evidence is atomic neutrality. Electrons in different atoms and molecules move at very different speeds (much faster in heavy atoms than in hydrogen), yet atoms and molecules of every kind are neutral to extreme precision. If charge depended on speed, they could not all balance the same nuclear charge so exactly. (This argument follows Purcell and Morin, Ch. 5.)

So charge is a single number for each particle, the same for every observer, adding exactly, and conserved point by point. Mass has none of the first and third properties in relativity: a deuteron's mass is less than a proton's plus a neutron's (binding energy), but its charge is exactly $+e$. In the language of modern physics, charge conservation follows from a symmetry of the laws (gauge symmetry, through Noether's theorem); we note this without proof.

:::qc
q: A neutron (charge 0) decays inside a nucleus. Which set of products is allowed by charge conservation?
options: ["proton + positron", "proton + electron + antineutrino", "electron + antineutrino", "proton + antineutrino"]
answer: 1
right: Right. (+e) + (−e) + 0 = 0, the same as the neutron. This is beta decay.
wrong: The total charge of the products must be zero. Only proton + electron + antineutrino gives (+e) + (−e) + 0 = 0.
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. There are two kinds of charge, called positive and negative. Like charges repel, unlike attract. Only repulsion proves a body is charged. {lvl=1}
2. Charging by rubbing moves electrons only, from one body to the other; the two end with equal and opposite charges. {lvl=1}
3. Conductors have free electrons, so charge spreads and can drain to earth; insulators hold charge where it is put. {lvl=1}
4. Charge is additive (a scalar sum), conserved (in any isolated system), and quantised ($q = ne$, $e = 1.6\times10^{-19}$ C). Quantisation is invisible for macroscopic charges. {lvl=2}
5. Induction charges a conductor without contact, with the sign opposite to the inducing charge; polarisation explains why any charged body attracts neutral ones. {lvl=2}
6. Identical conductors in contact share charge equally; distant spheres joined by a wire share it in proportion to their radii (equal potentials). Repeated contacts give geometric progressions. {lvl=3}
7. Quarks carry $\pm\tfrac13 e$ and $\pm\tfrac23 e$ but are confined. Charge is conserved locally and is the same for every observer. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Protons never move in charging a solid. Explain every charging process in terms of electrons gained or lost. {lvl=1}
- Attraction does not prove a body is charged: neutral bodies are attracted too. Use repulsion as the test. {lvl=1}
- An electroscope's leaves closing as a body approaches does not prove opposite charge; a neutral conductor does it too. {lvl=1}
- Add charges with their signs. Touching $+6$ to $-2$ leaves $+2$ each, not $+4$ each. {lvl=2}
- In induction, break the earth connection before removing the rod, or the charge flows back. {lvl=2}
- "Touch" and "join by a long wire" are different: identical spheres share equally either way, but unequal spheres share by radius only when far apart. {lvl=3}
- For repeated-step problems, write $q_n$ in terms of $q_{n-1}$, find the fixed point, and use the geometric decay of the gap to it. {lvl=3}
- Fractional charges exist inside hadrons; quantisation in units of $e$ is a statement about free, isolatable charges. {lvl=4}
:::
