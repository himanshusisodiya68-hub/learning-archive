---
title: Photosynthesis
summary: "How a seed becomes a tree out of air and water and sunlight, and why maize copes with a heatwave better than wheat."
ncert: ["Class 11 Biology · Ch 11 Photosynthesis in Higher Plants (§11.1–11.10)", "Class 10 Science · Ch 5 Life Processes (§5.2.1 Autotrophic nutrition)"]
up_to: "Class 12"
builds_on: [Anatomy of flowering plants, Cell organelles (the chloroplast), Enzymes, Oxidation and reduction]
notes_prompt: Explain to a friend how a mango tree, which you never feed, gets its weight, and why the oxygen it gives out comes from water and not from carbon dioxide.
margin:
  - kind: history
    title: History
    text: "Melvin Calvin labelled carbon dioxide with radioactive carbon-14 and followed where it went in algae, working out the whole pathway of carbon fixation; NCERT notes this earned him the Nobel Prize in 1961. Priestley's mouse-and-mint-plant experiment dates from 1770."
  - kind: tip
    title: Exam favourite
    text: "The number in the name is the carbon count of the first stable product: C3 gives PGA (3 carbons), C4 gives OAA (4 carbons). Mesophyll fixes with PEP carboxylase, bundle sheath with RuBisCO. Per glucose: 6 CO₂, 18 ATP, 12 NADPH."
  - kind: olympiad
    title: NEET link
    text: "Graph questions on light intensity, CO₂ and temperature are all Blackman's law in disguise: find the factor nearest its minimum. Statement questions love three traps: O₂ comes from water, cyclic flow gives no NADPH, and PS II works before PS I."
books:
  - { title: "NCERT Biology Class XI", ref: "Ch 11 Photosynthesis in Higher Plants (reprint 2026-27)" }
  - { title: "NCERT Science Class X", ref: "Ch 5 Life Processes, §5.2.1 Autotrophic nutrition" }
  - { title: "Campbell Biology (Urry et al.)", ref: "the Photosynthesis chapter, light reactions, Calvin cycle and C4/CAM [Unverified: chapter number depends on the edition]" }
cards:
  - { front: "Overall equation of photosynthesis?", back: "$6\\,\\mathrm{CO_2} + 12\\,\\mathrm{H_2O} \\xrightarrow{\\text{light}} \\mathrm{C_6H_{12}O_6} + 6\\,\\mathrm{H_2O} + 6\\,\\mathrm{O_2}$. The O₂ comes from water." }
  - { front: "Where do the light reaction and the Calvin cycle happen in the chloroplast?", back: "Light reaction: thylakoid membranes (grana and stroma lamellae). Calvin cycle: the stroma." }
  - { front: "What do PS II and PS I have at their reaction centres?", back: "A chlorophyll a molecule: P680 in PS II, P700 in PS I. Both are named for the wavelength (nm) of their absorption peak." }
  - { front: "Name the three stages of the Calvin cycle.", back: "Carboxylation (RuBisCO adds CO₂ to RuBP, giving 2 PGA), reduction (uses ATP and NADPH to make sugar), regeneration (RuBP is rebuilt, 1 ATP)." }
  - { front: "Why are C4 plants more productive in hot, bright places?", back: "Mesophyll PEP carboxylase pumps CO₂ into the bundle sheath as C4 acids, so RuBisCO works as a carboxylase and photorespiration is negligible." }
  - { front: "What does Blackman's law of limiting factors say?", back: "If a process depends on several factors, its rate is set by the one nearest its minimum value." }
core:
  idea: 'Green plants use light absorbed by chlorophyll to turn carbon dioxide and water into sugar and oxygen. In the thylakoid membranes the light reaction splits water and makes ATP and NADPH; in the stroma the Calvin cycle uses them to fix CO₂ into sugar.'
  formulas:
    - tex: '6\,\mathrm{CO_2} + 12\,\mathrm{H_2O} \xrightarrow{\text{light}} \mathrm{C_6H_{12}O_6} + 6\,\mathrm{H_2O} + 6\,\mathrm{O_2}'
      label: 'Overall equation (the O₂ comes from water)'
    - tex: '6\,\mathrm{CO_2} + 18\,\mathrm{ATP} + 12\,\mathrm{NADPH} \longrightarrow \text{1 glucose}'
      label: 'What the Calvin cycle needs for one glucose'
  conditions:
    - 'Chlorophyll, light, CO₂ and water must all be present'
    - 'Light reaction needs an intact thylakoid membrane (a proton gradient and ATP synthase)'
    - 'The rate is set by the factor nearest its minimum (Blackman)'
  sign: 'The oxygen released comes from water, not from carbon dioxide. Cyclic flow makes ATP only, never NADPH.'
outcomes:
  - 'Write the overall equation and say where the O₂ comes from, and where each stage happens in the chloroplast'
  - 'Trace electrons through the Z scheme and explain how a proton gradient makes ATP'
  - 'Describe the three stages of the Calvin cycle and count the ATP and NADPH for one glucose'
  - 'Compare C3 and C4 plants (anatomy, enzymes, photorespiration, temperature) and explain why C4 is more productive'
  - 'Predict which factor limits photosynthesis in a given situation using Blackman’s law'
opener:
  story: |
    A mango stone weighs a few grams. Plant it, and in forty years it is a tree of several tonnes, with a trunk you cannot hug and fruit by the basketful. Nobody ever fed it a tonne of food. The soil it stands in is barely lighter than before.

    So here is a question that stumped people for a long time: **where did all that wood come from?** Not from the soil, you might say, since the soil did not vanish. From the rain, then? A little, but water alone does not make wood.

    The real answer is stranger. Most of a tree is built from **the air**: from the thin 0.04 per cent of carbon dioxide that you and I breathe out. Every leaf is a tiny factory that catches sunlight and uses it to stitch that gas into sugar.
  art: '<svg viewBox="0 0 320 220" role="img" aria-label="A leaf in sunlight takes in carbon dioxide and water, releases oxygen and makes sugar"><defs><marker id="ao" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><marker id="ab" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--c)"/></marker><marker id="ay" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker></defs><circle cx="262" cy="46" r="20" style="fill:var(--chem);opacity:.85"/><line x1="289.0" y1="46.0" x2="298.0" y2="46.0" style="stroke:var(--chem);stroke-width:2"/><line x1="281.1" y1="65.1" x2="287.5" y2="71.5" style="stroke:var(--chem);stroke-width:2"/><line x1="262.0" y1="73.0" x2="262.0" y2="82.0" style="stroke:var(--chem);stroke-width:2"/><line x1="242.9" y1="65.1" x2="236.5" y2="71.5" style="stroke:var(--chem);stroke-width:2"/><line x1="235.0" y1="46.0" x2="226.0" y2="46.0" style="stroke:var(--chem);stroke-width:2"/><line x1="242.9" y1="26.9" x2="236.5" y2="20.5" style="stroke:var(--chem);stroke-width:2"/><line x1="262.0" y1="19.0" x2="262.0" y2="10.0" style="stroke:var(--chem);stroke-width:2"/><line x1="281.1" y1="26.9" x2="287.5" y2="20.5" style="stroke:var(--chem);stroke-width:2"/><line x1="236" y1="66" x2="196" y2="104" marker-end="url(#ay)" style="stroke:var(--chem);stroke-width:2.2"/><line x1="250" y1="70" x2="226" y2="112" marker-end="url(#ay)" style="stroke:var(--chem);stroke-width:2.2"/><path d="M70 150 Q110 70 200 96 Q214 150 150 176 Q100 186 70 150 Z" style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c);stroke-width:2"/><path d="M70 150 Q140 128 200 96" style="fill:none;stroke:var(--c);stroke-width:1.6"/><path d="M66 154 Q44 176 40 206" style="fill:none;stroke:var(--c);stroke-width:3"/><line x1="18" y1="92" x2="70" y2="118" marker-end="url(#ao)" style="stroke:var(--ink);stroke-width:1.6"/><text x="14" y="84" style="font-size:10px;">CO2 in</text><line x1="150" y1="100" x2="120" y2="42" marker-end="url(#ao)" style="stroke:var(--ink);stroke-width:1.6"/><text x="60" y="38" style="font-size:10px;">O2 out</text><line x1="190" y1="150" x2="236" y2="190" marker-end="url(#ab)" style="stroke:var(--c);stroke-width:2"/><text x="224" y="205" style="font-size:11px;fill:var(--c)">sugar</text><text x="56" y="212" style="font-size:10px;">water from roots</text><text x="236" y="100" style="font-size:11px;fill:var(--chem)">light</text></svg>'
life:
  - 'Every roti, bowl of rice and dal, and every sugarcane stalk is stored sunlight: sugar made by photosynthesis and then turned into starch and protein.'
  - 'A potato sprouting in a dark kitchen cupboard grows pale and yellowish: with no light it makes little chlorophyll, so the yellow pigments show.'
  - 'Maize, sugarcane and sorghum, all C4 plants, stay lush through a hot Indian summer when many C3 crops struggle.'
  - 'Greenhouse growers of tomato and bell pepper raise the CO₂ in the air, because C3 plants make more sugar when it is higher.'
  - 'On a heavily clouded monsoon day or in dense forest shade, light is the limiting factor, which is why shade-loving plants have big dark leaves.'
models:
  - name: 'Two departments of one factory'
    text: 'The light reaction is the power station (it turns light into ATP and NADPH); the Calvin cycle is the assembly line (it uses that power to build sugar). Neither works alone. Complex systems often split into an energy-capture part and a building part.'
  - name: 'The weakest link sets the pace'
    text: 'Blackman’s law: the rate of a process is set by the factor nearest its minimum. A bakery with plenty of flour and ovens but one baker is limited by the baker. To speed anything up, first find the limiting factor.'
  - name: 'Concentrate the scarce input'
    text: 'C4 plants do not fix CO₂ faster everywhere; they build a small chamber where CO₂ is pumped to a high level. When one input is scarce, a pump that concentrates it beats a bigger version of the same machine.'
links:
  - leaf: 'bio/respiration-in-plants'
    name: 'Respiration in plants'
    same: 'Both make ATP by chemiosmosis: an electron transport chain pumps protons across a membrane, and ATP synthase lets them flow back. Both use cytochromes and NAD-type carriers, and both have a cycle that processes carbon (Calvin, Krebs).'
    differs: 'Photosynthesis builds sugar and stores light energy; respiration breaks sugar down to release it. Protons collect in the thylakoid lumen here, but in the intermembrane space of the mitochondrion there.'
  - leaf: 'bio/ecosystem'
    name: 'Ecosystem'
    same: 'Photosynthesis is the entry point of energy into an ecosystem: producers capture sunlight and every food chain runs on their sugar.'
    differs: 'This lesson follows the chemistry inside one leaf; the ecosystem lesson follows the energy and matter as it moves between organisms.'
next:
  q: 'Making glucose stores sunlight in a bond. But a cell cannot use a lump of sugar directly: what does a root cell in dark soil, with no lungs, do to turn that glucose into ATP it can spend?'
  leaf: 'bio/respiration-in-plants'
  name: 'Respiration in plants'
symbols:
  - s: 'ATP'
    means: "adenosine triphosphate, the cell's energy currency"
  - s: 'ADP, Pi'
    means: 'adenosine diphosphate and inorganic phosphate, the used-up forms that ATP is rebuilt from'
  - s: 'NADP+, NADPH'
    means: 'a carrier that picks up electrons and hydrogen: NADP+ is the empty form, NADPH the loaded form (reducing power)'
  - s: 'PS I, PS II'
    means: 'photosystem I and II, protein complexes holding the pigments; named in order of discovery, not of working'
  - s: 'P680, P700'
    means: 'the reaction-centre chlorophyll a of PS II and PS I, absorbing at 680 nm and 700 nm'
  - s: 'LHC'
    means: 'light-harvesting complex (the antenna of pigments around a reaction centre)'
  - s: 'RuBP'
    means: 'ribulose-1,5-bisphosphate, the 5-carbon acceptor of CO₂ in the Calvin cycle'
  - s: 'PGA'
    means: '3-phosphoglyceric acid, the 3-carbon first product of CO₂ fixation in C3 plants'
  - s: 'RuBisCO'
    means: 'RuBP carboxylase-oxygenase, the enzyme that adds CO₂ (or O₂) to RuBP'
  - s: 'PEP, OAA'
    means: 'phosphoenol pyruvate (3C acceptor) and oxaloacetic acid (4C first product) in C4 plants'
  - s: 'CF0, CF1'
    means: 'the two parts of chloroplast ATP synthase: CF0 the proton channel in the membrane, CF1 the ATP-making head facing the stroma'
  - s: 'nm'
    means: 'nanometre, 10^-9 m, the unit for the wavelength of light'
---

:::hook
q: So what's your guess? Where does most of a tree's weight come from?
options: ["From the soil it grew in", "Mostly from the air (carbon dioxide)", "From the sunlight itself"]
answer: 1
right: Right. The carbon in wood, sugar and starch was fixed from atmospheric carbon dioxide; water supplies the hydrogen, and sunlight supplies the energy to join them. The soil gives only small amounts of minerals.
wrong: Weigh a tree and its soil and the soil has barely changed. Sunlight is energy, not matter, so it cannot be the stuff of wood. The building material is carbon dioxide taken from the air.
:::

## Plants make their own food {lvl=1 id=s-food label="Class 9–10"}

You eat to get two things: **energy** to move and think, and **raw materials** to grow. A green plant needs the same two things, but it has no mouth. How does it get them?

Living things have two ways of getting food. **Heterotrophs** (animals, fungi, and you) take in complex substances made by other living things and break them down. **Autotrophs** (green plants and some bacteria) build their own food from simple substances taken from outside: carbon dioxide and water. The process is **photosynthesis**. All heterotrophs depend, directly or indirectly, on autotrophs.

In words, the whole of it is:

carbon dioxide + water, in sunlight and in the presence of chlorophyll, gives carbohydrate + oxygen.

Three things happen, in order: (i) **chlorophyll**, the green pigment, absorbs light energy; (ii) the light energy is converted to chemical energy and water is split into hydrogen and oxygen; (iii) carbon dioxide is **reduced** (hydrogen is added to it) to carbohydrate. The carbohydrate that is not used at once is stored as **starch**, the plant's reserve of energy, much as we store energy as glycogen.

Class X gives two classic activities. In **Activity 5.1**, a potted plant with variegated leaves (money plant, croton) is kept in the dark for three days to use up its starch, then in sunlight for about six hours. The leaf is boiled in water, then in alcohol (which removes the green colour) and dipped in dilute iodine. Only the parts that were green turn blue-black: starch was made only where there was chlorophyll. In **Activity 5.2**, two plants sit under bell-jars, one with a dish of potassium hydroxide (which absorbs CO₂). Only the leaf of the plant with CO₂ turns blue-black with iodine, so CO₂ is needed.

:::qc lvl=1
q: In Activity 5.2, why is potassium hydroxide placed in one of the bell-jars?
options: ["To supply extra water", "To absorb carbon dioxide", "To absorb oxygen"]
answer: 1
right: Right. Potassium hydroxide absorbs CO₂, so the leaf in that jar has none to work with and makes no starch, which shows CO₂ is needed.
wrong: Think about which raw material the experiment is testing. KOH absorbs carbon dioxide.
:::

## How the raw materials get in {lvl=1 id=s-leaf label="Class 9–10"}

Look at a leaf cut across (Fig. 5.1 in Class X). Some cells contain green dots: **chloroplasts**, the organelles that contain chlorophyll. Where does each raw material arrive from?

- **Carbon dioxide** enters through **stomata**, tiny pores on the leaf surface. A pair of **guard cells** controls each pore: when water flows in they swell and the pore opens; when they shrink it closes. Since a lot of water can also escape through the pores, the plant closes them when it does not need CO₂. (Some gas exchange also happens across stems and roots.)
- **Water** is taken up from the soil by the roots and carried up to the leaves.
- **Other materials** (nitrogen, phosphorus, iron, magnesium) come from the soil. Nitrogen, needed for proteins, is taken up as inorganic nitrates or nitrites, or as organic compounds made by bacteria from atmospheric nitrogen.
- **Oxygen** is the by-product that leaves through the stomata.

:::figure caption="A leaf in cross-section. CO₂ enters and O₂ leaves through the stoma between two guard cells. Water arrives through the vein (xylem), and sugar leaves through it (phloem). Chloroplasts sit mostly in the palisade cells just under the upper epidermis."
<svg viewBox="0 0 460 262" role="img" aria-label="Cross-section of a leaf showing epidermis, palisade and spongy mesophyll cells with chloroplasts, a vein and a stoma with two guard cells"><defs><marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker><marker id="a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--c)"/></marker></defs><line x1="70" y1="10" x2="70" y2="36" marker-end="url(#a2)" style="stroke:var(--chem);stroke-width:2"/><line x1="140" y1="10" x2="140" y2="36" marker-end="url(#a2)" style="stroke:var(--chem);stroke-width:2"/><line x1="210" y1="10" x2="210" y2="36" marker-end="url(#a2)" style="stroke:var(--chem);stroke-width:2"/><text x="250" y="26" style="font-size:10px;fill:var(--chem)">sunlight</text><rect x="20" y="40" width="300" height="10" rx="0" style="fill:color-mix(in srgb,var(--muted) 18%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><rect x="20" y="50" width="300" height="44" rx="0" style="fill:color-mix(in srgb,var(--bio) 14%,var(--surface));stroke:var(--ink);stroke-width:1.2"/><rect x="20" y="94" width="300" height="56" rx="0" style="fill:color-mix(in srgb,var(--bio) 7%,var(--surface));stroke:var(--ink);stroke-width:1.2"/><ellipse cx="40" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="68" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="96" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="124" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="152" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="180" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="208" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="236" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="264" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="292" cy="60" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="40" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="68" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="96" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="124" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="152" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="180" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="208" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="236" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="264" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="292" cy="72" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="40" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="68" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="96" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="124" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="152" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="180" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="208" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="236" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="264" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="292" cy="84" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="18" cy="108" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="63" cy="108" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="108" cy="108" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="153" cy="108" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="198" cy="108" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="243" cy="108" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="50" cy="124" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="95" cy="124" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="140" cy="124" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="185" cy="124" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="230" cy="124" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="275" cy="124" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="22" cy="140" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="67" cy="140" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="112" cy="140" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="157" cy="140" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="202" cy="140" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><ellipse cx="247" cy="140" rx="6" ry="3.5" style="fill:var(--bio);stroke:var(--bio);stroke-width:1;opacity:0.85"/><rect x="20" y="150" width="110" height="10" rx="0" style="fill:color-mix(in srgb,var(--muted) 18%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><rect x="160" y="150" width="160" height="10" rx="0" style="fill:color-mix(in srgb,var(--muted) 18%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><ellipse cx="138" cy="155" rx="8" ry="9" style="fill:color-mix(in srgb,var(--bio) 30%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><ellipse cx="152" cy="155" rx="8" ry="9" style="fill:color-mix(in srgb,var(--bio) 30%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><circle cx="262" cy="118" r="20" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/><circle cx="254" cy="112" r="6" style="fill:var(--mat);opacity:.55;stroke:var(--ink);stroke-width:1"/><circle cx="270" cy="124" r="5" style="fill:var(--chem);opacity:.6;stroke:var(--ink);stroke-width:1"/><line x1="320" y1="45" x2="336" y2="45" style="stroke:var(--muted);stroke-width:1"/><text x="340" y="49" style="font-size:10px;">epidermis</text><line x1="320" y1="72" x2="336" y2="72" style="stroke:var(--muted);stroke-width:1"/><text x="340" y="76" style="font-size:10px;">palisade cells</text><line x1="320" y1="108" x2="336" y2="108" style="stroke:var(--muted);stroke-width:1"/><text x="340" y="112" style="font-size:10px;">spongy cells</text><line x1="282" y1="118" x2="336" y2="134" style="stroke:var(--muted);stroke-width:1"/><text x="340" y="138" style="font-size:10px;">vein</text><line x1="320" y1="155" x2="336" y2="160" style="stroke:var(--muted);stroke-width:1"/><text x="340" y="164" style="font-size:10px;">epidermis</text><line x1="150" y1="214" x2="150" y2="168" marker-end="url(#a1)" style="stroke:var(--ink);stroke-width:1.8"/><text x="158" y="204" style="font-size:10px;">CO2 in</text><line x1="128" y1="168" x2="128" y2="214" marker-end="url(#a1)" style="stroke:var(--ink);stroke-width:1.8"/><text x="70" y="204" style="font-size:10px;">O2 out</text><line x1="254" y1="214" x2="254" y2="140" marker-end="url(#a1)" style="stroke:var(--mat);stroke-width:1.8"/><text x="246" y="204" text-anchor="end" style="font-size:10px;">water</text><line x1="272" y1="142" x2="272" y2="214" marker-end="url(#a1)" style="stroke:var(--chem);stroke-width:1.8"/><text x="280" y="204" style="font-size:10px;">sugar</text><text x="140" y="236" text-anchor="middle" style="font-size:10px;">stoma between two guard cells</text><text x="20" y="254" style="font-size:10px;">green dots = chloroplasts</text></svg>
:::

Some desert plants take up carbon dioxide at night and make an intermediate, which is then acted upon by the energy absorbed by chlorophyll during the day. The steps need not happen one after the other immediately. We meet these plants again at the end.

## What we already know, and who found it {lvl=2 id=s-history label="Class 11–12"}

From earlier classes you know that chlorophyll, light and CO₂ are needed for photosynthesis. The starch test on a half-covered or variegated leaf shows it happens only in the green parts in light. A leaf half enclosed in a tube with KOH-soaked cotton tests negative for starch in that half, showing CO₂ is needed.

How did we find all this out? Slowly, and one experiment at a time:

| Who | What they showed |
|---|---|
| **Joseph Priestley** (1770) | A candle burning in a closed bell jar goes out and a mouse suffocates. With a mint plant in the jar, the mouse lived and the candle burned. Plants restore to the air whatever breathing animals and burning candles remove. |
| **Jan Ingenhousz** | Repeated this in dark and in sunlight: **sunlight is essential**. In an aquatic plant, bubbles (later identified as oxygen) formed round the green parts in bright light only. |
| **Julius von Sachs** (about 1854) | Glucose is made when plants grow, and it is usually stored as **starch**. Chlorophyll is located in special bodies, the chloroplasts. |
| **T. W. Engelmann** | Split light with a prism onto the alga *Cladophora* placed among aerobic bacteria. Bacteria gathered at blue and red light, where O₂ was released: the first **action spectrum**. |
| **Cornelius van Niel** | Studying purple and green sulphur bacteria, which use H₂S and give out sulphur, not O₂, he showed that photosynthesis is a light-driven reaction in which hydrogen from a suitable compound reduces CO₂. So the O₂ of green plants must come from **water**. Radioisotopes later proved it. |

Van Niel's general equation is $2\mathrm{H_2A} + \mathrm{CO_2} \rightarrow 2\mathrm{A} + \mathrm{CH_2O} + \mathrm{H_2O}$. For green plants, H₂A is water and A is oxygen. That gives the correct overall equation:

$$6\,\mathrm{CO_2} + 12\,\mathrm{H_2O} \xrightarrow{\text{light}} \mathrm{C_6H_{12}O_6} + 6\,\mathrm{H_2O} + 6\,\mathrm{O_2}$$

Why twelve waters on the left, and six on the right? Because the six O₂ molecules must all come from water, and each O₂ needs two water molecules (2 × 6 = 12). Six waters are then made again, so the *net* use of water is six. This is not a single reaction but a description of a multistep process.

:::qc lvl=2
q: Which experiment led to the conclusion that the O₂ released by green plants comes from water, not CO₂?
options: ["Priestley's mouse and mint plant", "Van Niel's study of sulphur bacteria, later confirmed with radioisotopes", "Engelmann's prism experiment"]
answer: 1
right: Right. Sulphur bacteria use H₂S as the hydrogen donor and release sulphur; by analogy, the O₂ of green plants comes from the donor, water.
wrong: Priestley showed plants restore air and Engelmann showed which colours work best. Neither identified the source of O₂. That was van Niel's inference.
:::

## Where it happens: the chloroplast {lvl=2 id=s-where label="Class 11–12"}

Photosynthesis takes place in green leaves and also in other green parts of the plant. In the leaf, the **mesophyll cells** hold a large number of chloroplasts, usually lined up along the cell walls so that they catch the best amount of incoming light.

Inside a chloroplast is a system of membranes: flat sacs called **thylakoids**, stacked like coins into **grana** (singular: granum), joined by **stroma lamellae**, all bathed in a fluid called the **stroma**. There is a clear division of labour.

- The **membrane system** traps light energy and makes **ATP and NADPH**. These reactions are directly light-driven: the **light reactions** (photochemical reactions).
- In the **stroma**, enzymes use the ATP and NADPH to make **sugar**, which in turn forms starch. These are the **carbon reactions**, called "dark reactions" by convention. That does not mean they happen in darkness, or that they do not depend on light, as we will see.

:::figure caption="A chloroplast: double membrane, grana (stacks of thylakoids) joined by stroma lamellae, and the stroma. The light reaction happens in the thylakoid membranes; the Calvin cycle in the stroma."
<svg viewBox="0 0 480 262" role="img" aria-label="Chloroplast with double membrane, grana stacks of thylakoids joined by stroma lamellae, stroma, starch granule and lipid droplet"><ellipse cx="185" cy="115" rx="165" ry="88" style="fill:color-mix(in srgb,var(--bio) 8%,var(--surface));stroke:var(--ink);stroke-width:1.8"/><ellipse cx="185" cy="115" rx="155" ry="78" style="fill:none;stroke:var(--ink);stroke-width:1.2"/><rect x="59.0" y="88" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="59.0" y="96" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="59.0" y="104" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="59.0" y="112" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="59.0" y="120" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="149.0" y="70" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="149.0" y="78" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="149.0" y="86" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="149.0" y="94" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="149.0" y="102" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="239.0" y="92" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="239.0" y="100" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="239.0" y="108" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="239.0" y="116" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="239.0" y="124" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="109.0" y="128" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="109.0" y="136" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="109.0" y="144" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="109.0" y="152" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="109.0" y="160" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="199.0" y="130" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="199.0" y="138" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="199.0" y="146" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="199.0" y="154" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><rect x="199.0" y="162" width="52" height="6" rx="3" style="fill:color-mix(in srgb,var(--bio) 45%,var(--surface));stroke:var(--bio);stroke-width:1.2"/><line x1="111" y1="100" x2="149" y2="134" style="stroke:var(--bio);stroke-width:1.4"/><line x1="111" y1="95" x2="149" y2="76" style="stroke:var(--bio);stroke-width:1.4"/><line x1="201" y1="76" x2="239" y2="98" style="stroke:var(--bio);stroke-width:1.4"/><line x1="161" y1="134" x2="199" y2="136" style="stroke:var(--bio);stroke-width:1.4"/><line x1="251" y1="130" x2="239" y2="128" style="stroke:var(--bio);stroke-width:1.4"/><line x1="201" y1="76" x2="160" y2="128" style="stroke:var(--bio);stroke-width:1.4"/><ellipse cx="300" cy="150" rx="13" ry="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.2"/><circle cx="62" cy="138" r="6" style="fill:var(--chem);opacity:.6;stroke:var(--ink);stroke-width:1"/><circle cx="300" cy="100" r="1.8" style="fill:var(--ink)"/><circle cx="310" cy="108" r="1.8" style="fill:var(--ink)"/><circle cx="295" cy="112" r="1.8" style="fill:var(--ink)"/><circle cx="55" cy="100" r="1.8" style="fill:var(--ink)"/><circle cx="70" cy="150" r="1.8" style="fill:var(--ink)"/><line x1="320" y1="70" x2="368" y2="36" style="stroke:var(--muted);stroke-width:1"/><text x="372" y="40" style="font-size:10px;">outer membrane</text><line x1="335" y1="92" x2="368" y2="66" style="stroke:var(--muted);stroke-width:1"/><text x="372" y="70" style="font-size:10px;">inner membrane</text><line x1="278" y1="85" x2="368" y2="100" style="stroke:var(--muted);stroke-width:1"/><text x="372" y="104" style="font-size:10px;">granum (stack)</text><line x1="180" y1="135" x2="168" y2="206" style="stroke:var(--muted);stroke-width:1"/><text x="118" y="217" style="font-size:10px;">stroma lamella</text><line x1="313" y1="150" x2="368" y2="168" style="stroke:var(--muted);stroke-width:1"/><text x="372" y="172" style="font-size:10px;">starch granule</text><line x1="62" y1="144" x2="30" y2="203" style="stroke:var(--muted);stroke-width:1"/><text x="4" y="214" style="font-size:10px;">lipid droplet</text><line x1="300" y1="110" x2="368" y2="200" style="stroke:var(--muted);stroke-width:1"/><text x="372" y="204" style="font-size:10px;">ribosomes</text><line x1="190" y1="175" x2="368" y2="236" style="stroke:var(--muted);stroke-width:1"/><text x="372" y="240" style="font-size:10px;">stroma (fluid)</text><text x="20" y="232" style="font-size:10px;">Membranes (grana + lamellae): light reaction</text><text x="20" y="248" style="font-size:10px;">Stroma: Calvin cycle makes sugar and starch</text></svg>
:::

:::qc lvl=2
q: In which part of the chloroplast are sugars made?
options: ["Thylakoid lumen", "Stroma", "Outer membrane"]
answer: 1
right: Right. The enzymes of the carbon-fixing (Calvin) cycle are in the stroma. The membranes supply the ATP and NADPH it needs.
wrong: The membranes capture light and make ATP and NADPH, but the enzymes that build sugar float in the fluid around the stacks, the stroma.
:::

## Pigments and the colours of light {lvl=2 id=s-pigments label="Class 11–12"}

The green of a leaf is not one pigment but four, which you can separate by **paper chromatography**:

| Pigment | Colour on the chromatogram |
|---|---|
| Chlorophyll a | bright or blue green |
| Chlorophyll b | yellow green |
| Xanthophylls | yellow |
| Carotenoids | yellow to yellow-orange |

A pigment is a substance that absorbs light at particular wavelengths. A graph of how much light it absorbs at each wavelength is its **absorption spectrum**. Chlorophyll a absorbs best in the **blue and red** regions. A graph of the rate of photosynthesis at each wavelength is the **action spectrum**. It follows the absorption of chlorophyll a closely, which tells us chlorophyll a is the chief pigment. But the match is not one-to-one: some photosynthesis also occurs at other wavelengths.

Why? Because of the **accessory pigments**: chlorophyll b, xanthophylls and carotenoids absorb light too, and pass the energy to chlorophyll a. They let a wider range of wavelengths be used, and they protect chlorophyll a from **photo-oxidation**.

:::figure caption="Schematic absorption spectrum of chlorophyll a (solid) and action spectrum of photosynthesis (dashed). Both peak in blue and red; the action spectrum stays higher in the middle because accessory pigments pass on the energy they catch. [Unverified: curve shapes are drawn by hand to show the idea, not measured data.]"
<svg viewBox="0 0 460 236" role="img" aria-label="Schematic absorption spectrum of chlorophyll a and action spectrum of photosynthesis, both with a blue and a red peak"><defs><marker id="sx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><linearGradient id="spg" x1="0" x2="1"><stop offset="0" stop-color="#6a2ccf"/><stop offset=".2" stop-color="#2b5bd7"/><stop offset=".4" stop-color="#2ca44a"/><stop offset=".55" stop-color="#e4d12a"/><stop offset=".7" stop-color="#f08a1d"/><stop offset="1" stop-color="#d1241b"/></linearGradient></defs><rect x="50.0" y="176" width="380.0" height="8" style="fill:url(#spg);opacity:.85"/><line x1="50" y1="170" x2="440" y2="170" style="stroke:var(--ink);stroke-width:1.2"/><line x1="50" y1="170" x2="50" y2="24" style="stroke:var(--ink);stroke-width:1.2"/><line x1="50.0" y1="170" x2="50.0" y2="174" style="stroke:var(--ink);stroke-width:1.2"/><text x="50.0" y="204" text-anchor="middle" style="font-size:10px;">400</text><line x1="176.66666666666666" y1="170" x2="176.66666666666666" y2="174" style="stroke:var(--ink);stroke-width:1.2"/><text x="176.7" y="204" text-anchor="middle" style="font-size:10px;">500</text><line x1="303.3333333333333" y1="170" x2="303.3333333333333" y2="174" style="stroke:var(--ink);stroke-width:1.2"/><text x="303.3" y="204" text-anchor="middle" style="font-size:10px;">600</text><line x1="430.0" y1="170" x2="430.0" y2="174" style="stroke:var(--ink);stroke-width:1.2"/><text x="430.0" y="204" text-anchor="middle" style="font-size:10px;">700</text><path d="M50.0,123.9 L56.3,108.1 L62.7,90.5 L69.0,72.9 L75.3,57.7 L81.7,47.4 L88.0,43.8 L94.3,47.4 L100.7,57.7 L107.0,72.9 L113.3,90.5 L119.7,108.1 L126.0,123.9 L132.3,136.8 L138.7,146.4 L145.0,153.1 L151.3,157.3 L157.7,159.8 L164.0,161.2 L170.3,161.9 L176.7,162.2 L183.0,162.4 L189.3,162.5 L195.7,162.5 L202.0,162.5 L208.3,162.5 L214.7,162.5 L221.0,162.5 L227.3,162.5 L233.7,162.5 L240.0,162.5 L246.3,162.5 L252.7,162.5 L259.0,162.5 L265.3,162.5 L271.7,162.5 L278.0,162.5 L284.3,162.5 L290.7,162.5 L297.0,162.5 L303.3,162.4 L309.7,162.2 L316.0,161.7 L322.3,160.5 L328.7,158.2 L335.0,154.1 L341.3,147.2 L347.7,137.0 L354.0,123.5 L360.3,107.9 L366.7,92.3 L373.0,79.8 L379.3,73.1 L385.7,73.9 L392.0,81.9 L398.3,95.3 L404.7,111.1 L411.0,126.5 L417.3,139.3 L423.7,148.8 L430.0,155.1" style="fill:none;stroke:var(--bio);stroke-width:2.4"/><path d="M50.0,130.1 L56.3,122.3 L62.7,114.0 L69.0,105.4 L75.3,96.9 L81.7,89.0 L88.0,82.2 L94.3,76.8 L100.7,73.2 L107.0,71.6 L113.3,72.1 L119.7,74.7 L126.0,78.9 L132.3,84.6 L138.7,91.2 L145.0,98.3 L151.3,105.5 L157.7,112.3 L164.0,118.4 L170.3,123.7 L176.7,128.0 L183.0,131.4 L189.3,133.8 L195.7,135.5 L202.0,136.6 L208.3,137.1 L214.7,137.4 L221.0,137.6 L227.3,137.8 L233.7,138.0 L240.0,138.4 L246.3,138.9 L252.7,139.5 L259.0,140.2 L265.3,140.9 L271.7,141.4 L278.0,141.6 L284.3,141.3 L290.7,140.3 L297.0,138.3 L303.3,135.2 L309.7,130.8 L316.0,125.2 L322.3,118.5 L328.7,111.0 L335.0,103.2 L341.3,95.6 L347.7,88.9 L354.0,83.7 L360.3,80.4 L366.7,79.6 L373.0,81.3 L379.3,85.4 L385.7,91.6 L392.0,99.3 L398.3,108.0 L404.7,117.0 L411.0,125.8 L417.3,133.9 L423.7,141.0 L430.0,146.9" style="fill:none;stroke:var(--eng);stroke-width:2.2;stroke-dasharray:5 3"/><text x="245" y="222" text-anchor="middle" style="font-size:10px;">wavelength of light (nm)</text><text x="56" y="14" style="font-size:10px;">rate / absorption</text><line x1="150" y1="34" x2="176" y2="34" style="stroke:var(--bio);stroke-width:2.4"/><text x="182" y="37" style="font-size:10px;">absorption, chlorophyll a</text><line x1="150" y1="50" x2="176" y2="50" style="stroke:var(--eng);stroke-width:2.2;stroke-dasharray:5 3"/><text x="182" y="53" style="font-size:10px;">action spectrum</text><text x="88" y="150" text-anchor="middle" style="font-size:10px;fill:var(--ink)">blue</text><text x="387" y="150" text-anchor="middle" style="font-size:10px;fill:var(--ink)">red</text><text x="246" y="122" text-anchor="middle" style="font-size:10px;">green: least used</text></svg>
:::

:::qc lvl=2
q: Which statement about accessory pigments is correct?
options: ["They are the reaction centre of each photosystem", "They absorb light and pass the energy to chlorophyll a, and protect it from photo-oxidation", "They are found only in the stroma"]
answer: 1
right: Right. Chlorophyll b, xanthophylls and carotenoids are part of the antenna and widen the range of light used.
wrong: Only a single chlorophyll a molecule forms each reaction centre. Accessory pigments are in the thylakoid membranes, collecting light for it.
:::

## The light reaction and the photosystems {lvl=2 id=s-light label="Class 11–12"}

The **light reaction** (the photochemical phase) includes light absorption, water splitting, oxygen release and the formation of the high-energy chemical intermediates **ATP and NADPH**.

The pigments are organised into two discrete **light-harvesting complexes (LHC)**, within **Photosystem I (PS I)** and **Photosystem II (PS II)**. They are named in the order of their discovery, not in the order in which they work. Each LHC is made of hundreds of pigment molecules bound to proteins. Each photosystem has all its pigments (except one molecule of chlorophyll a) forming a light-harvesting system, the **antennae**. They absorb different wavelengths and funnel the energy to the one chlorophyll a molecule that forms the **reaction centre**.

The reaction centres differ: in **PS I** the reaction-centre chlorophyll a has an absorption peak at **700 nm**, so it is called **P700**; in **PS II** it is at **680 nm**, **P680**.

## Electron transport and the Z scheme {lvl=2 id=s-z label="Class 11–12"}

In PS II, the reaction centre absorbs 680 nm red light. Its electrons are excited and jump to a higher energy level, where an electron acceptor picks them up. The acceptor passes them to an **electron transport system** of cytochromes. The movement is **downhill** on a redox-potential scale. The electrons are not used up; they are handed to the pigments of PS I.

Meanwhile, electrons in PS I are excited too (700 nm), and go to another acceptor of higher redox potential. They move downhill again, this time to **NADP⁺**, which is reduced to **NADPH + H⁺**.

The whole scheme (PS II uphill to its acceptor, down the chain to PS I, uphill again, then down to NADP⁺) is called the **Z scheme**, from the characteristic shape formed when the carriers are placed on a redox scale.

:::figure caption="The Z scheme. Light lifts electrons uphill at P680 (PS II) and again at P700 (PS I). Between them the electrons roll downhill through the transport chain, which pumps protons and makes ATP. At the end they reduce NADP⁺ to NADPH. Water replaces the electrons lost by PS II."
<svg viewBox="0 0 480 300" role="img" aria-label="Z scheme: electrons from water pass through PS II, a transport chain and PS I to NADP+, each photosystem lifting them with light"><defs><marker id="zk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><marker id="zc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker><marker id="zb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--bio)"/></marker></defs><line x1="22" y1="284" x2="22" y2="22" marker-end="url(#zk)" style="stroke:var(--muted);stroke-width:1.2"/><text x="30" y="16" style="font-size:10px;">higher energy (more negative redox potential)</text><text x="30" y="296" style="font-size:10px;">lower energy</text><rect x="60" y="216" width="84" height="24" rx="5" style="fill:color-mix(in srgb,var(--bio) 14%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="102" y="232" text-anchor="middle" style="font-size:10px;">P680 (PS II)</text><rect x="60" y="84" width="84" height="24" rx="5" style="fill:color-mix(in srgb,var(--bio) 14%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="102" y="100" text-anchor="middle" style="font-size:10px;">P680*</text><line x1="102" y1="214" x2="102" y2="110" marker-end="url(#zc)" style="stroke:var(--chem);stroke-width:3"/><text x="40" y="166" style="font-size:10px;fill:var(--chem)">680 nm</text><text x="40" y="178" style="font-size:10px;fill:var(--chem)">light</text><line x1="60" y1="262" x2="86" y2="244" marker-end="url(#zk)" style="stroke:var(--ink);stroke-width:1.4"/><text x="30" y="276" style="font-size:10px;">H2O → 2H+ + O + 2e-</text><path d="M144,96 L170,108 L196,128 L222,150 L248,172 L280,180" marker-end="url(#zb)" style="fill:none;stroke:var(--bio);stroke-width:2.2"/><text x="172" y="214" style="font-size:10px;">electron transport chain</text><text x="172" y="227" style="font-size:10px;">(pumps H+, makes ATP)</text><rect x="280" y="166" width="84" height="24" rx="5" style="fill:color-mix(in srgb,var(--bio) 14%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="322" y="182" text-anchor="middle" style="font-size:10px;">P700 (PS I)</text><rect x="280" y="36" width="84" height="24" rx="5" style="fill:color-mix(in srgb,var(--bio) 14%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="322" y="52" text-anchor="middle" style="font-size:10px;">P700*</text><line x1="322" y1="164" x2="322" y2="62" marker-end="url(#zc)" style="stroke:var(--chem);stroke-width:3"/><text x="332" y="120" style="font-size:10px;fill:var(--chem)">700 nm</text><text x="332" y="132" style="font-size:10px;fill:var(--chem)">light</text><path d="M364,48 L392,56 L416,76 L430,104" marker-end="url(#zb)" style="fill:none;stroke:var(--bio);stroke-width:2.2"/><rect x="396" y="110" width="80" height="30" rx="5" style="fill:color-mix(in srgb,var(--chem) 18%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="436" y="124" text-anchor="middle" style="font-size:10px;">NADP+</text><text class="k" x="436" y="135" text-anchor="middle" style="font-size:10px;">→ NADPH</text></svg>
:::

**Splitting of water.** Where do PS II's lost electrons come from? From water. The water-splitting is associated with PS II, which sits on the inner (lumen) side of the thylakoid membrane:

$$2\mathrm{H_2O} \rightarrow 4\mathrm{H^+} + \mathrm{O_2} + 4e^-$$

This is the source of the oxygen. The protons and O₂ are released on the **lumen** side. The electrons that replace those lost by PS I are provided by PS II.

:::qc lvl=2
q: Which statement about the Z scheme is correct?
options: ["It starts with PS I because PS I was discovered first", "Electrons flow from PS II to PS I downhill, and end up on NADP⁺", "O₂ is released when NADP⁺ is reduced"]
answer: 1
right: Right. The scheme starts at PS II (P680), the electrons run down the chain to PS I, are lifted again, and finally reduce NADP⁺. O₂ comes from splitting water at PS II.
wrong: The names are by order of discovery, but the working order is PS II first, then PS I. O₂ comes from the splitting of water, not from NADP⁺.
:::

## Cyclic and non-cyclic photophosphorylation {lvl=2 id=s-cyclic label="Class 11–12"}

**Phosphorylation** is the synthesis of ATP (from ADP and inorganic phosphate). **Photo-phosphorylation** is when it is driven by light. There are two kinds.

- **Non-cyclic**: PS II and PS I work in series (the Z scheme). Both **ATP and NADPH + H⁺** are made, and O₂ is released.
- **Cyclic**: only PS I works. The excited electron does not go to NADP⁺; it cycles back to PS I through the transport chain. This gives **ATP only**, no NADPH, no O₂.

| | Non-cyclic | Cyclic |
|---|---|---|
| Photosystems | PS II and PS I | PS I only |
| Electron path | Water → PS II → chain → PS I → NADP⁺ | PS I → chain → back to PS I |
| Products | ATP, NADPH, O₂ | ATP only |
| Where | Grana | Possibly the stroma lamellae, which lack PS II and NADP reductase |

Cyclic flow also occurs when only light of wavelength longer than 680 nm is available. And it probably has a job: the Calvin cycle needs 3 ATP for every 2 NADPH, a ratio that non-cyclic flow alone does not give, so cyclic flow tops up the ATP.

## Chemiosmosis: how ATP is made {lvl=2 id=s-chemi label="Class 11–12"}

How does the electron flow make ATP? By the **chemiosmotic hypothesis**: ATP synthesis is linked to the development of a **proton gradient** across a membrane. As in respiration, but here protons accumulate *inside* the thylakoid (the lumen), whereas in the mitochondrion they pile up in the intermembrane space.

Three things build up the gradient:
1. Water is split on the lumen side, so its protons stay in the **lumen**.
2. As electrons pass through the photosystems, a carrier takes up a proton from the stroma along with the electron, and releases it into the lumen when it hands the electron on. Protons are thus **transported across** the membrane.
3. **NADP reductase** sits on the stroma side. It uses protons from the stroma to reduce NADP⁺ to NADPH + H⁺, so stromal protons decrease.

So protons are scarce in the stroma and abundant in the lumen (a measurable fall in lumen pH). This gradient is a stored-up energy, like water behind a dam. It breaks down when protons flow through **ATP synthase**: the **CF₀** part is a transmembrane channel, and the energy of the flow changes the shape of the **CF₁** part, which sticks out on the stroma side, so that it makes several ATP from ADP and Pi.

Chemiosmosis needs four things: a **membrane**, a **proton pump**, a **proton gradient** and **ATP synthase**. The ATP and NADPH made are used at once in the stroma to fix CO₂.

:::figure caption="Thylakoid membrane in cross-section. Water splitting and the proton pump fill the lumen with H⁺. The protons flow back to the stroma through the CF0 channel of ATP synthase, and CF1 makes ATP. NADP reductase uses stromal H⁺ and the electrons from PS I to make NADPH."
<svg viewBox="0 0 480 290" role="img" aria-label="Thylakoid membrane with PS II, cytochrome complex, PS I, NADP reductase and ATP synthase; protons build up in the lumen and flow out through ATP synthase"><defs><marker id="mk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><marker id="mc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker><marker id="mb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--bio)"/></marker><marker id="me" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--eng)"/></marker></defs><rect x="10" y="128" width="460" height="30" rx="0" style="fill:color-mix(in srgb,var(--bio) 12%,var(--surface));stroke:var(--bio);stroke-width:1.6"/><text x="14" y="60" style="font-size:10px;fill:var(--muted)">STROMA (outside)</text><text x="14" y="282" style="font-size:10px;fill:var(--muted)">LUMEN (inside the thylakoid)</text><rect x="30" y="118" width="64" height="50" rx="6" style="fill:color-mix(in srgb,var(--bio) 30%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="62.0" y="147" text-anchor="middle" style="font-size:10px;">PS II</text><rect x="130" y="118" width="64" height="50" rx="6" style="fill:color-mix(in srgb,var(--bio) 30%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="162.0" y="147" text-anchor="middle" style="font-size:10px;">Cyt b6f</text><rect x="220" y="118" width="56" height="50" rx="6" style="fill:color-mix(in srgb,var(--bio) 30%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="248.0" y="147" text-anchor="middle" style="font-size:10px;">PS I</text><rect x="292" y="98" width="62" height="26" rx="5" style="fill:color-mix(in srgb,var(--chem) 25%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="323" y="115" text-anchor="middle" style="font-size:10px;">NADP red.</text><rect x="392" y="122" width="40" height="42" rx="4" style="fill:color-mix(in srgb,var(--eng) 20%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="412" y="148" text-anchor="middle" style="font-size:10px;">CF0</text><circle cx="412" cy="106" r="15" style="fill:color-mix(in srgb,var(--eng) 30%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="412" y="110" text-anchor="middle" style="font-size:10px;">CF1</text><path d="M94,128 Q112,100 130,122" marker-end="url(#mb)" style="fill:none;stroke:var(--bio);stroke-width:2;stroke-dasharray:4 3"/><path d="M194,122 Q207,100 220,120" marker-end="url(#mb)" style="fill:none;stroke:var(--bio);stroke-width:2;stroke-dasharray:4 3"/><path d="M276,120 Q284,100 292,108" marker-end="url(#mb)" style="fill:none;stroke:var(--bio);stroke-width:2;stroke-dasharray:4 3"/><text x="112" y="92" text-anchor="middle" style="font-size:10px;fill:var(--bio)">e-</text><text x="207" y="92" text-anchor="middle" style="font-size:10px;fill:var(--bio)">e-</text><text x="30" y="208" style="font-size:10px;">2H2O → 4H+ + O2 + 4e-</text><text x="30" y="221" style="font-size:10px;fill:var(--eng)">(H+ stay in the lumen)</text><line x1="62" y1="196" x2="62" y2="172" marker-end="url(#mk)" style="stroke:var(--ink);stroke-width:1.4"/><line x1="162" y1="80" x2="162" y2="112" style="stroke:var(--eng);stroke-width:2.2"/><line x1="162" y1="172" x2="162" y2="226" marker-end="url(#me)" style="stroke:var(--eng);stroke-width:2.2"/><text x="170" y="238" style="font-size:10px;fill:var(--eng)">H+ pumped into lumen</text><line x1="412" y1="236" x2="412" y2="172" marker-end="url(#me)" style="stroke:var(--eng);stroke-width:2.4"/><text x="412" y="250" text-anchor="middle" style="font-size:10px;fill:var(--eng)">H+ flow back</text><text x="292" y="78" style="font-size:10px;fill:var(--chem)">NADP+ + H+ → NADPH</text><line x1="323" y1="84" x2="323" y2="98" style="stroke:var(--chem);stroke-width:1.6"/><text x="372" y="60" style="font-size:10px;fill:var(--eng)">ADP + Pi → ATP</text><line x1="412" y1="66" x2="412" y2="90" marker-end="url(#me)" style="stroke:var(--eng);stroke-width:1.4"/><text x="196" y="262" style="font-size:10px;">many H+ in lumen: high H+, low pH</text></svg>
:::

:::qc lvl=2
q: On which side of the thylakoid membrane do protons accumulate during the light reaction?
options: ["The stroma side", "The lumen (inside the thylakoid)", "Equally on both sides"]
answer: 1
right: Right. Water splitting adds H⁺ inside, the carrier pumps H⁺ in, and NADP reductase removes H⁺ from the stroma. The lumen becomes acidic.
wrong: Three processes (water splitting, proton transport, NADP⁺ reduction) all raise H⁺ in the lumen and lower it in the stroma.
:::

## The Calvin cycle: where ATP and NADPH are used {lvl=2 id=s-calvin label="Class 11–12"}

The light reaction gives **ATP, NADPH and O₂**. The O₂ diffuses out of the chloroplast. The ATP and NADPH drive the **biosynthetic phase**, which makes sugar. It does not directly need light, but it needs the products of the light reaction. Test: if light is cut off, the synthesis continues for a while, and then stops; when light returns, it starts again. So "dark reaction" is a misnomer.

**The first product.** After the Second World War, Melvin Calvin used radioactive ¹⁴C in algae and found that the first product of CO₂ fixation was a 3-carbon acid, **3-phosphoglyceric acid (PGA)**. Later, a second group of plants was found where the first stable product is a **4-carbon** acid, oxaloacetic acid (OAA). So CO₂ assimilation is of two types: the **C3 pathway** (first product PGA) and the **C4 pathway** (first product OAA).

**The acceptor.** Which molecule takes up CO₂ to give a 3-carbon acid? Scientists expected a 2-carbon compound and searched for years. The surprise was a **5-carbon** sugar, **ribulose bisphosphate (RuBP)**: 5 + 1 = 6 carbons, which ends up as two 3-carbon PGA.

**The cycle.** Calvin and co-workers showed that the pathway is a *cycle*: the RuBP is regenerated. It happens in all photosynthetic plants, whether C3, C4 or otherwise. It has three stages:

1. **Carboxylation**: CO₂ is fixed into a stable organic intermediate. CO₂ combines with RuBP to give 2 molecules of PGA, catalysed by **RuBP carboxylase**. Since the enzyme can also add O₂, it is properly called **RuBisCO** (RuBP carboxylase-oxygenase).
2. **Reduction**: a series of reactions leading to sugar, using **2 ATP** (for phosphorylation) and **2 NADPH** (for reduction) per CO₂ fixed.
3. **Regeneration**: RuBP is rebuilt so the cycle can continue; this needs **1 ATP** per CO₂.

So each CO₂ fixed costs **3 ATP and 2 NADPH**. Six CO₂ and six turns are needed for one glucose:

| In | Out |
|---|---|
| 6 CO₂ | 1 glucose |
| 18 ATP | 18 ADP |
| 12 NADPH | 12 NADP⁺ |

:::figure caption="The Calvin cycle in the stroma. (1) RuBisCO adds CO₂ to RuBP: 2 PGA. (2) PGA is reduced with ATP and NADPH to triose phosphate, which leaves as sugar and starch. (3) Most triose phosphate rebuilds RuBP, using ATP."
<svg viewBox="0 0 460 300" role="img" aria-label="Calvin cycle: CO2 joins RuBP to give 3-PGA (carboxylation), PGA is reduced to triose phosphate using ATP and NADPH, and RuBP is regenerated"><defs><marker id="ck" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><marker id="cb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--bio)"/></marker><marker id="cc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker></defs><rect x="180.0" y="56.0" width="100" height="28" rx="6" style="fill:color-mix(in srgb,var(--bio) 16%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="230" y="73.5" text-anchor="middle" style="font-size:10px;">RuBP (5C)</text><rect x="325.0" y="146.0" width="110" height="28" rx="6" style="fill:color-mix(in srgb,var(--bio) 16%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="380" y="163.5" text-anchor="middle" style="font-size:10px;">2 x 3-PGA (3C)</text><rect x="170.0" y="236.0" width="120" height="28" rx="6" style="fill:color-mix(in srgb,var(--bio) 16%,var(--surface));stroke:var(--ink);stroke-width:1.4"/><text class="k" x="230" y="253.5" text-anchor="middle" style="font-size:10px;">Triose phosphate</text><text x="56" y="40" style="font-size:10px;">CO2 (from air)</text><line x1="100" y1="48" x2="176" y2="62" marker-end="url(#ck)" style="stroke:var(--ink);stroke-width:1.8"/><path d="M282,76 Q360,84 372,144" marker-end="url(#cb)" style="fill:none;stroke:var(--bio);stroke-width:2.4"/><text x="300" y="36" style="font-size:10px;fill:var(--bio)">1 Carboxylation</text><text x="300" y="49" style="font-size:10px;">(RuBisCO)</text><path d="M372,176 Q360,236 296,250" marker-end="url(#cb)" style="fill:none;stroke:var(--bio);stroke-width:2.4"/><text x="385" y="196" style="font-size:10px;fill:var(--bio)">2 Reduction</text><text x="385" y="209" style="font-size:10px;fill:var(--chem)">2 ATP +</text><text x="385" y="222" style="font-size:10px;fill:var(--chem)">2 NADPH</text><text x="385" y="235" style="font-size:10px;fill:var(--chem)">per CO2</text><path d="M170,250 Q40,230 60,130 Q70,80 178,72" marker-end="url(#cb)" style="fill:none;stroke:var(--bio);stroke-width:2.4"/><text x="78" y="140" style="font-size:10px;fill:var(--bio)">3 Regeneration</text><text x="78" y="153" style="font-size:10px;fill:var(--chem)">(1 ATP per CO2)</text><line x1="230" y1="236" x2="230" y2="196" style="stroke:var(--ink);stroke-width:1.8"/><line x1="230" y1="196" x2="160" y2="196" marker-end="url(#ck)" style="stroke:var(--ink);stroke-width:1.8"/><text x="154" y="186" text-anchor="end" style="font-size:10px;">sugar, starch</text><text class="k" x="230" y="292" text-anchor="middle" style="font-size:10px;">6 CO2 + 18 ATP + 12 NADPH → 1 glucose</text></svg>
:::

:::worked title="Counting the cost of two glucose molecules"
**Problem.** How many ATP and NADPH does the Calvin cycle use to make 2 glucose?

One glucose needs 6 CO₂. Each CO₂ costs 3 ATP and 2 NADPH, so one glucose costs $6 \times 3 = 18$ ATP and $6 \times 2 = 12$ NADPH. For two glucose: **36 ATP and 24 NADPH**.
:::

:::qc lvl=2
q: How many turns of the Calvin cycle are needed to make one glucose?
options: ["1", "3", "6"]
answer: 2
right: Right. Each turn fixes one CO₂, and glucose has six carbons, so six turns (6 CO₂, 18 ATP, 12 NADPH).
wrong: Each turn fixes only one CO₂. How many carbons does glucose have?
:::

## The C4 pathway {lvl=2 id=s-c4 label="Class 11–12"}

Plants adapted to dry tropical regions (maize, sugarcane, sorghum) have a different way of getting CO₂ to the Calvin cycle. Their first fixation product is the 4-carbon acid OAA, yet they still use the Calvin cycle for making sugar. What is different is the **leaf anatomy** and the **place** of each step. C4 plants tolerate higher temperatures, respond to high light, lack photorespiration and have greater biomass productivity.

**Kranz anatomy.** The cells around the vascular bundles are particularly large **bundle sheath cells**, with many chloroplasts, thick walls impervious to gases and no intercellular spaces. *Kranz* means "wreath". You can see it by cutting a thin section of a maize or sorghum leaf.

**The Hatch and Slack pathway** is a cycle, in these steps:
1. In the **mesophyll** cells the primary CO₂ acceptor is the 3-carbon **phosphoenol pyruvate (PEP)**, and the enzyme is **PEP carboxylase (PEPcase)**. The mesophyll lacks RuBisCO. The product is OAA.
2. OAA is turned into other 4-carbon acids (malic or aspartic acid) in the mesophyll, which move to the bundle sheath.
3. In the **bundle sheath** these C4 acids are broken down, releasing **CO₂** and a 3-carbon molecule.
4. The 3-carbon molecule returns to the mesophyll and becomes PEP again.
5. The CO₂ enters the **Calvin cycle** in the bundle sheath, which is rich in RuBisCO but lacks PEPcase.

So the Calvin cycle is common to C3 and C4; the difference is that in C4 plants it works only in the bundle sheath, never in the mesophyll.

:::figure caption="The Hatch and Slack pathway. PEP carboxylase in the mesophyll fixes CO2 into 4-carbon acids; these move to the bundle sheath, where they release CO2 for RuBisCO and the Calvin cycle. The 3-carbon remainder goes back to make PEP."
<svg viewBox="0 0 460 290" role="img" aria-label="C4 pathway: CO2 is fixed into a 4-carbon acid in a mesophyll cell, moved to a bundle sheath cell where it is released and enters the Calvin cycle"><defs><marker id="4k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><marker id="4b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--bio)"/></marker><marker id="4c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--chem)"/></marker></defs><rect x="14" y="34" width="198" height="214" rx="12" style="fill:color-mix(in srgb,var(--bio) 8%,var(--surface));stroke:var(--bio);stroke-width:1.8"/><rect x="248" y="34" width="198" height="214" rx="12" style="fill:color-mix(in srgb,var(--chem) 8%,var(--surface));stroke:var(--chem);stroke-width:1.8"/><text class="k" x="113" y="24" text-anchor="middle" style="font-size:10px;">MESOPHYLL CELL</text><text class="k" x="347" y="24" text-anchor="middle" style="font-size:10px;">BUNDLE SHEATH CELL</text><rect x="58.0" y="60" width="84" height="24" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/><text class="k" x="100" y="75.5" text-anchor="middle" style="font-size:10px;">PEP (3C)</text><rect x="58.0" y="120" width="84" height="24" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/><text class="k" x="100" y="135.5" text-anchor="middle" style="font-size:10px;">OAA (4C)</text><rect x="50.0" y="174" width="100" height="24" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/><text class="k" x="100" y="189.5" text-anchor="middle" style="font-size:10px;">malate (4C)</text><line x1="100" y1="36" x2="100" y2="58" marker-end="url(#4k)" style="stroke:var(--ink);stroke-width:1.6"/><text x="108" y="52" style="font-size:10px;">CO2</text><line x1="100" y1="84" x2="100" y2="118" marker-end="url(#4b)" style="stroke:var(--bio);stroke-width:2"/><text x="108" y="104" style="font-size:10px;fill:var(--bio)">PEP carboxylase</text><line x1="100" y1="144" x2="100" y2="172" marker-end="url(#4b)" style="stroke:var(--bio);stroke-width:2"/><line x1="150" y1="186" x2="296" y2="186" marker-end="url(#4b)" style="stroke:var(--bio);stroke-width:2.4"/><text x="223" y="178" text-anchor="middle" style="font-size:10px;">C4 acid</text><rect x="300.0" y="174" width="84" height="24" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/><text class="k" x="342" y="189.5" text-anchor="middle" style="font-size:10px;">C4 acid</text><rect x="300.0" y="120" width="84" height="24" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/><text class="k" x="342" y="135.5" text-anchor="middle" style="font-size:10px;">CO2</text><rect x="287.0" y="60" width="110" height="24" rx="5" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.4"/><text class="k" x="342" y="75.5" text-anchor="middle" style="font-size:10px;">Calvin cycle</text><line x1="342" y1="174" x2="342" y2="146" marker-end="url(#4b)" style="stroke:var(--bio);stroke-width:2"/><text x="350" y="164" style="font-size:10px;">breaks down</text><line x1="342" y1="120" x2="342" y2="86" marker-end="url(#4b)" style="stroke:var(--bio);stroke-width:2"/><text x="350" y="106" style="font-size:10px;fill:var(--bio)">RuBisCO</text><line x1="397" y1="72" x2="440" y2="72" marker-end="url(#4k)" style="stroke:var(--ink);stroke-width:1.6"/><text x="400" y="62" style="font-size:10px;">sugar</text><path d="M342,200 L342,226 L40,226 L40,72 L56,72" marker-end="url(#4c)" style="fill:none;stroke:var(--chem);stroke-width:2;stroke-dasharray:5 3"/><text x="60" y="242" style="font-size:10px;fill:var(--chem)">3C returns, makes PEP</text><text x="350" y="222" style="font-size:10px;fill:var(--chem)">3C</text></svg>
:::

| | C3 plants | C4 plants |
|---|---|---|
| First stable product | PGA (3C) | OAA (4C) |
| Primary CO₂ acceptor | RuBP (5C) | PEP (3C) |
| Enzyme of first fixation | RuBisCO | PEP carboxylase |
| Calvin cycle in | Mesophyll | Bundle sheath only |
| Kranz anatomy | No | Yes |
| Photorespiration | Present | Negligible |
| Temperature optimum | Lower | Higher |
| Examples | Wheat, rice, potato | Maize, sugarcane, sorghum |

:::qc lvl=2
q: In a maize leaf, where is the Calvin cycle carried out?
options: ["In all mesophyll cells", "Only in the bundle sheath cells", "Only in guard cells"]
answer: 1
right: Right. The mesophyll cells do the first fixation with PEPcase and have no RuBisCO. The Calvin cycle runs in the bundle sheath.
wrong: In C4 plants the Calvin cycle does not take place in the mesophyll; it is confined to the bundle sheath, which holds RuBisCO.
:::

## Photorespiration {lvl=2 id=s-photoresp label="Class 11–12"}

RuBisCO, said to be the most abundant enzyme in the world, has an active site that can bind **either CO₂ or O₂**. That is why it is called carboxylase-oxygenase. The binding is **competitive**: the relative concentrations of the two gases decide which wins. RuBisCO has a much greater affinity for CO₂ when the CO₂ : O₂ ratio is nearly equal. Imagine what would happen if this were not so.

In **C3 plants** some O₂ does bind. Instead of making 2 PGA, RuBP combines with O₂ to give one PGA and one 2-carbon **phosphoglycolate**, in a pathway called **photorespiration**. In it there is **no synthesis of sugar, and no synthesis of ATP or NADPH**; instead CO₂ is released and ATP is used. NCERT states that the biological function of photorespiration is not yet known.

In **C4 plants** photorespiration does not occur, because the bundle sheath has a high CO₂ concentration (from the broken-down C4 acids), so RuBisCO works as a carboxylase. That is why C4 plants are more productive, and tolerant of high temperature.

:::qc lvl=2
q: Why is photorespiration called a wasteful pathway?
options: ["It makes extra sugar but uses light", "It makes no sugar and no ATP or NADPH, releases CO₂ and uses ATP", "It occurs only in the dark in C4 plants"]
answer: 1
right: Right. RuBP is partly lost to O₂ instead of fixing CO₂, so carbon is released and ATP is spent for no gain.
wrong: Photorespiration is the oxygenase side-reaction of RuBisCO in C3 plants. Nothing useful is built, and CO₂ and ATP are lost.
:::

## Factors affecting photosynthesis {lvl=2 id=s-factors label="Class 11–12"}

The rate of photosynthesis decides crop yield, so we must know what controls it. **Internal (plant) factors** include the number, size, age and orientation of leaves, mesophyll cells and chloroplasts, internal CO₂ concentration and the amount of chlorophyll. **External factors** are sunlight, temperature, CO₂ concentration and water.

Many factors act together, but usually one is the limiting factor. **Blackman's law of limiting factors (1905)**: if a chemical process is affected by more than one factor, its rate is determined by the factor which is nearest to its minimal value. For example, a green leaf with optimal light and CO₂ may not photosynthesise if the temperature is very low; give it the optimal temperature and it starts.

| Factor | Effect |
|---|---|
| **Light** | The rate rises linearly with light at low intensity, then levels off as other factors become limiting. Light saturation occurs at about **10 per cent of full sunlight**, so except for plants in shade or dense forest, light is rarely limiting. Too much light breaks down chlorophyll and lowers photosynthesis. |
| **CO₂** | The major limiting factor: the air has only 0.03 to 0.04 per cent. Raising it up to about 0.05 per cent raises fixation; far above, it can damage over longer periods. At high light, C4 plants saturate at about 360 µL/L, while C3 plants keep responding beyond 450 µL/L, so today's CO₂ is limiting for C3 plants. Greenhouse tomato and bell pepper are grown in CO₂-enriched air. |
| **Temperature** | The carbon reactions are enzymatic and strongly temperature-controlled; the light reactions less so. C4 plants have a higher temperature optimum than C3. Tropical plants have a higher optimum than temperate ones. |
| **Water** | Water stress closes stomata, reducing CO₂, and makes leaves wilt, reducing area and metabolic activity. Its effect is mostly indirect. |

:::figure caption="Rate of photosynthesis against light intensity (schematic, after the idea of NCERT Fig. 11.10). The rate rises with light, then flattens at about 10 per cent of full sunlight; a higher CO2 level (dashed) lifts the plateau. [Unverified: curve drawn by hand.]"
<svg viewBox="0 0 460 240" role="img" aria-label="Graph of rate of photosynthesis against light intensity: rises then levels off; a higher plateau with more CO2"><defs><marker id="gk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs><line x1="56" y1="190" x2="444" y2="190" marker-end="url(#gk)" style="stroke:var(--ink);stroke-width:1.4"/><line x1="56" y1="190" x2="56" y2="26" marker-end="url(#gk)" style="stroke:var(--ink);stroke-width:1.4"/><path d="M56.0,190.0 L59.8,174.5 L63.6,162.5 L67.4,153.1 L71.2,145.8 L75.0,140.1 L78.8,135.6 L82.6,132.2 L86.4,129.5 L94.0,125.7 L101.6,123.5 L113.0,121.6 L132.0,120.5 L170.0,120.0 L208.0,120.0 L284.0,120.0 L360.0,120.0 L436.0,120.0" style="fill:none;stroke:var(--bio);stroke-width:2.6"/><path d="M56.0,190.0 L59.8,163.9 L63.6,143.6 L67.4,127.7 L71.2,115.4 L75.0,105.8 L78.8,98.3 L82.6,92.5 L86.4,88.0 L94.0,81.7 L101.6,77.9 L113.0,74.8 L132.0,72.8 L170.0,72.1 L208.0,72.0 L284.0,72.0 L360.0,72.0 L436.0,72.0" style="fill:none;stroke:var(--eng);stroke-width:2.2;stroke-dasharray:5 3"/><line x1="94.0" y1="190" x2="94.0" y2="110" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:3 3"/><text x="60" y="206" style="font-size:10px;">0</text><text x="94.0" y="206" text-anchor="middle" style="font-size:10px;">10%</text><text x="436" y="206" text-anchor="end" style="font-size:10px;">full sunlight</text><text x="246.0" y="222" text-anchor="middle" style="font-size:10px;">light intensity</text><text x="64" y="26" style="font-size:10px;">rate of photosynthesis</text><text x="124" y="150" style="font-size:10px;">light limits</text><text x="124" y="163" style="font-size:10px;">(rising part)</text><text x="430" y="114" text-anchor="end" style="font-size:10px;">CO2 / temperature limit (plateau)</text><text x="430" y="62" text-anchor="end" style="font-size:10px;fill:var(--eng)">same light, more CO2: higher plateau</text></svg>
:::

:::qc lvl=2
q: A potted C3 plant sits in strong sunlight, at 25 °C, well watered, in ordinary air. What is most likely limiting its photosynthesis?
options: ["Light intensity", "CO₂ concentration", "Chlorophyll b"]
answer: 1
right: Right. Light is already past saturation, and ordinary air (0.03 to 0.04 per cent CO₂) is below what a C3 plant can use. CO₂ is the limiting factor.
wrong: Light saturates at about 10 per cent of full sunlight, so strong sun is not limiting. Blackman's law points to the scarce one: CO₂.
:::

## CAM plants: a night shift {lvl=3 id=s-cam label="NEET · beyond"}

Class X mentions desert plants that take up carbon dioxide at night. This is **CAM** (crassulacean acid metabolism). It is not in the NCERT Class XI chapter, so what follows is from general biology [Unverified].

A desert plant such as a cactus or pineapple loses a lot of water if it opens its stomata in the hot day. So it opens them at **night**. PEP carboxylase fixes the CO₂ into a 4-carbon acid (malic acid), which is stored in the vacuole. By day the stomata are closed; the acid releases CO₂ inside the leaf and the Calvin cycle uses it, powered by the light reaction.

C4 plants separate the two steps in **space** (mesophyll and bundle sheath); CAM plants separate them in **time** (night and day). Both use PEP carboxylase first, and both use the Calvin cycle last.

## Compensation point and two lights {lvl=3 id=s-comp label="NEET · beyond"}

Two ideas often appear in NEET, though not in the NCERT text [Unverified: from general biology].

- The **light compensation point** is the light intensity at which the CO₂ taken in by photosynthesis exactly equals the CO₂ given out by respiration, so there is no net exchange. Below it the plant loses carbon. Similarly, the CO₂ concentration at which uptake equals release (the CO₂ compensation point) is higher in C3 plants than in C4 plants, because of photorespiration.
- **Emerson's enhancement effect:** photosynthesis in far-red light (beyond about 680 nm) alone is poor, but when shorter-wavelength red light is added, the rate is more than the sum of the two. This supported the idea that two light reactions work in series, which became the two photosystems of the Z scheme.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Autotrophs make food from CO₂ and water using light and chlorophyll; the by-product is O₂, which comes from water. {lvl=1}
2. Stomata let CO₂ in; roots supply water; starch is the stored product. {lvl=1}
3. Priestley, Ingenhousz, Sachs, Engelmann and van Niel built up the picture; the correct equation is 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂. {lvl=2}
4. Light reaction: thylakoid membranes (ATP, NADPH, O₂). Calvin cycle: stroma (sugar). {lvl=2}
5. Four pigments (chlorophyll a, b, xanthophylls, carotenoids); chlorophyll a is the chief one; the accessory pigments widen the light used and protect it. {lvl=2}
6. PS I (P700) and PS II (P680) work in the order PS II then PS I; electrons run along the Z scheme to NADP⁺. {lvl=2}
7. Cyclic flow (PS I only) makes ATP only; non-cyclic makes ATP, NADPH and O₂. {lvl=2}
8. Chemiosmosis: protons build up in the lumen and flow out through CF₀ of ATP synthase, which makes ATP in CF₁. {lvl=2}
9. Calvin cycle: carboxylation (RuBisCO), reduction, regeneration; per glucose 6 CO₂, 18 ATP, 12 NADPH. {lvl=2}
10. C4 plants have Kranz anatomy, fix CO₂ first with PEPcase in the mesophyll, run the Calvin cycle in the bundle sheath, and have no photorespiration. {lvl=2}
11. Photorespiration is the oxygenase activity of RuBisCO in C3 plants: wasteful. {lvl=2}
12. The rate is set by the factor nearest its minimum (Blackman); light saturates at about 10 per cent of full sunlight; CO₂ is the major limiting factor. {lvl=2}
13. CAM plants fix CO₂ at night; C4 plants separate the two steps in space, CAM plants in time. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- The O₂ comes from water, not from CO₂. That is why the equation shows 12 H₂O on the left. {lvl=1}
- "Dark reaction" does not mean it happens in the dark: it stops soon after the light is switched off. {lvl=1}
- The photosystems are named by order of discovery. In working order, PS II comes first, then PS I. {lvl=2}
- Cyclic photophosphorylation gives ATP only: no NADPH, no O₂. {lvl=2}
- Protons build up in the thylakoid lumen, not the stroma; in mitochondria they build up in the intermembrane space. {lvl=2}
- In C4 plants the Calvin cycle is in the bundle sheath, not the mesophyll; the first fixation (PEPcase, OAA) is in the mesophyll. {lvl=2}
- "Which factor limits?" is answered by the one nearest its minimum, not the one you can easily change. {lvl=2}
- Count per CO₂ (3 ATP, 2 NADPH) or per glucose (18 ATP, 12 NADPH, six CO₂); mixing the two is a common slip. {lvl=2}
:::
