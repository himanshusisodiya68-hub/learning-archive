# Mechanics: reading notes for lesson writers

Read once, reuse. All hooks are paraphrased; no problem text is copied. Follow the tree branches in `site/content/tree.yaml`.

## Sources and how reliable these notes are

- **Resnick/Halliday/Walker, Fundamentals of Physics Extended, 10th ed.** (Drive file 1GuELpXLHeuUVXczLE1SMrhGNv8GDUhwW; 1450 pp; text extracts cleanly with `pdftotext`). Read: the contents pages, every chapter's "What Is Physics?" opener, section headings, Sample Problem titles, figure captions. Referred to as **HRW**. Pointers look like `HRW 5-3` (chapter-section) or `HRW SP 9.07` (Sample Problem; titles only). End-of-chapter pointers look like `HRW 6 P36` (chapter, problem number). The extracted text lost no problem numbers, but difficulty dots were not checked.
- To find a page: pdf page = book page + 26 (ch 2 starts book p13 = pdf p39). Chapter starts (book pages): 2:13, 3:40, 4:62, 5:94, 6:124, 7:149, 8:177, 9:214, 10:257, 11:295, 12:327, 13:354, 14:386. Extract with `pdftotext -f <pdfpage> -l <pdfpage> resnick.pdf -` (without `-layout`; the two-column layout garbles with it).
- **Feynman Lectures Vol I: NOT READ.** `feynmanlectures.caltech.edu` is blocked from this environment (Cloudflare "Sorry, you have been blocked" page via curl; WebFetch cannot resolve the host). The Feynman remarks below are from memory and marked **[Unverified]**: chapter order and themes only, no quotes. Re-check from a machine with access, or ask the owner to upload the Vol I PDF to Drive, before anyone cites section numbers.
- **Edition warning:** HRW sample-problem numbers belong to the 10th edition. Other editions differ.

## Feynman Vol I: order of mechanics chapters [Unverified, from memory]

Ch 5 Time and Distance, 7 The Theory of Gravitation, 8 Motion, 9 Newton's Laws of Dynamics, 10 Conservation of Momentum, 11 Vectors, 12 Characteristics of Force, 13 Work and Potential Energy (A), 14 Work and Potential Energy (conclusion), 18 Rotation in Two Dimensions, 19 Center of Mass; Moment of Inertia, 20 Rotation in Space. Notable shape: Feynman puts **gravitation first** (Ch 7, planets, Kepler, then Newton), before he has defined motion carefully, so that "a law of nature that predicts the sky" motivates everything else. He then does kinematics (Ch 8) by asking "what is speed, really?" with a car speedometer and a limit argument. Momentum conservation (Ch 10) precedes the energy chapters, and he derives work and potential energy from the idea of lifting weights with machines that cannot gain energy [Unverified].

---

## 1. kinematics (HRW 2, 3, 4)

**Order in HRW.** 1D motion: position and displacement, average velocity vs average speed (2-1), instantaneous velocity and slope (2-2), acceleration (2-3), constant-acceleration equations (2-4), free fall (2-5), graphical integration (2-6). Then vectors (3: components, unit vectors, products). Then 2D/3D: position vector, velocity, acceleration (4-1 to 4-3), projectile motion (4-4), uniform circular motion (4-5), relative motion in 1D and 2D (4-6, 4-7).

**Order in Feynman [Unverified].** Ch 8 first asks what "speed" means, builds derivative from a speedometer-style limit, and treats the motion of a falling ball and of a distance-vs-time table; vectors come separately (Ch 11), after Newton's laws, because he wants vector equations ready for forces.

**Hooks and puzzles**
1. Everything moves: the road under your feet is turning with Earth, orbiting the Sun, circling the galaxy; so "at rest" always means "relative to something". HRW 2-1 "Motion".
2. An armadillo's x(t) graph with the path drawn beside it: one picture linking a curve to a creature that walks, stops and turns back. HRW 2-1, Fig 2-3. Good opener for graphs.
3. Average velocity can be zero for a long journey (go and return); average speed cannot. HRW 2-1.
4. Whiplash: a head and torso acceleration graph, and area under a(t) gives velocity change. HRW 2-6, SP 2.06.
5. Drag race, car vs motorcycle: who is ahead at 3 s, and who at the finish? Two x(t) parabolas cross twice. HRW SP 2.04.
6. Feather and apple dropped in a vacuum fall together. HRW 2-5, Fig 2-12 (a photo-style demo).
7. Two golf balls, one dropped and one launched sideways, photographed in strobe: equal heights at every flash. The cleanest proof that horizontal and vertical motions are independent. HRW 4-4, Fig 4-10.
8. Fighter pilots black out in tight turns (centripetal acceleration in g), and a free-throw: push shot vs underhand loop. HRW 4 opener and SP 4.06.
9. A plane flying in a crosswind; Alex and Barbara in cars, one moving frame measured from the other. HRW 4-6, 4-7, SP 4.07, SP 4.08.

**Intuitions worth borrowing**
- Acceleration is the "change of change": position, velocity, acceleration are one staircase; going down is slope, going up is area (HRW 2-6).
- Split a curved motion into two straight ones and the curve stops being scary (HRW 4-4).
- A frame is just a choice of who counts as standing still; velocities in two frames differ by the frame's own velocity (HRW 4-6).
- HRW's own "caution" style: say which direction is positive before any sign matters.

**Sample-problem pointers**
- HRW SP 2.01 average velocity of a beat-up pickup truck (title only; details from memory [Unverified]).
- HRW SP 2.03 acceleration from a given x(t) polynomial (derivative practice).
- HRW SP 2.05 full up-and-down flight of a tossed baseball (time symmetry in free fall).
- HRW SP 4.04 projectile dropped from an airplane (horizontal speed carried along).
- HRW SP 4.05 launch off a water slide into a pool.
- HRW SP 4.01 to 4.03 one rabbit path used three times for r, v, a vectors (nice running example).
- HRW 2 P6 world cycling record; HRW 2 P53 key falling from a bridge; HRW 2 P50 two apples (drop and throw); HRW 4 P37 high diver pushing off horizontally; HRW 4 P77 snow falling past a moving car (relative velocity).

---

## 2. newtons-laws (HRW 5, 6, and the momentum chapter 9)

Tree leaves here: inertia, momentum and the second law, third law, free-body diagrams, friction, circular dynamics, constraint relations, pseudo-forces. Momentum and collisions sit in the **rotation** branch of our tree (leaf `collisions`, `centre-of-mass`), so HRW 9 is cross-referenced in section 4 below.

**Order in HRW.** What forces do (5 opener), "Newtonian mechanics" and its limits (fast: relativity; tiny: quantum), first law with the "natural state" history (5-1), force and mass, second law, particular forces: gravity, weight, normal force, friction, tension (5-2), third law and applying the laws (5-3), then friction with static and kinetic (6-1), drag and terminal speed (6-2), uniform circular motion as dynamics (6-3).

**Order in Feynman [Unverified].** Ch 9 is Newton's law with numerical step-by-step integration: given a force law, compute the motion in tiny time steps (a spring and a planet), i.e. dynamics as a computation rather than an algebra puzzle. Ch 10 conservation of momentum comes straight after as a consequence of the third law. Ch 12 "characteristics of force" covers friction, molecular forces, fundamental forces, pseudo forces, nuclear forces.

**Hooks and puzzles**
1. For centuries people believed a moving thing needs a continuing push, and it looks reasonable: push a puck on wood and it stops. Slide it on ice, then on an air table, and it goes farther each time. Imagine the limit. HRW 5-1 "Newton's First Law". The best narrative bridge from experience to inertia.
2. A dragster, a quarterback tackled, a car hitting a pole: each acceleration needs a force from something specific. HRW 5 opener.
3. Three thought experiments with a book and a heavy crate: slide, push at constant velocity, push without moving. Each forces a hidden friction force to exist; pushing harder and the crate still sits still shows friction adjusts itself up to a limit. HRW 6-1 (very usable, almost a lesson skeleton).
4. Why friction exists: two surfaces touch only at tiny high points (Alps of Switzerland turned over onto the Alps of Austria); those points cold-weld, and sliding is tearing and re-forming welds. Contact area really touching is maybe 10,000 times smaller than the apparent area. HRW 6-1 "Properties of Friction". Also: polished gauge blocks stick together.
5. Without friction no walking, no pencils, no screws, knots untie; yet about a fifth of a car's fuel just fights friction in the engine and drivetrain. HRW 6-1.
6. Terminal speed: a skydiver reaches about 160 km/h spread-eagle and about 310 km/h nosedive. Drag grows until it equals weight, then acceleration stops. HRW 6-2; HRW 6 P36 asks the ratio. Also a raindrop (SP 6.03).
7. An elevator scale reading: your apparent weight changes while your real mass does not. HRW SP 5.06, Fig 5-17.
8. A car in a flat turn on an Indy track needs friction as the centripetal force; an oil slick removes it; banked turn removes the need. HRW 6 opener, SP 6.05, SP 6.06.
9. The old Diavolo bicycle loop: why you do not fall off at the top. HRW SP 6.04.

**Intuitions worth borrowing**
- Newton's second law as the one tool: HRW says nearly every chapter-5 problem needs only F_net = ma, applied component by component after a free-body diagram. The skill is drawing the diagram and choosing axes, not new physics (HRW 5 opener "A Heads Up").
- Net force zero means constant velocity, not zero velocity (HRW 5-1).
- Tension in a massless cord is the same at both ends; a string transmits force but a pulley redirects it (HRW 5-2).
- Third-law pairs act on different bodies, so they never cancel in one body's free-body diagram (HRW 5-3, apple and Earth, Fig 5-11 cantaloupe on table).
- Friction is a responder: static friction takes whatever value is needed up to a maximum; kinetic friction is roughly constant (HRW 6-1).
- The first law only holds in inertial frames; HRW 5-1 "Inertial Reference Frames" is a good bridge to pseudo-forces.

**Sample-problem pointers**
- HRW SP 5.01 forces on a puck in one and in two dimensions; SP 5.02 cookie tin pulled in three directions.
- HRW SP 5.03 block on table and block hanging (the Atwood-like two-body workhorse; Figs 5-12 to 5-14).
- HRW SP 5.04 cord pulling a box up a ramp; SP 5.05 reading a force-vs-time graph; SP 5.07 block pushing a block.
- HRW SP 6.01 angled push on a stationary block (when does it start moving); SP 6.02 stopping on an icy road, level versus inclined.
- HRW 5 P20 car hitting a bridge abutment, passenger stopping distance (seat-belt story); HRW 5 P25 "sunjamming" solar sail; HRW 5 P19 rocket sled.
- HRW 6 P41 cat on a merry-go-round (largest radius at which it stays).

---

## 3. work-energy-and-power (HRW 7, 8)

**Order in HRW.** "What is energy?" with the money-in-many-accounts analogy, kinetic energy (7-1), work and the work-kinetic energy theorem (7-2), work done by gravity (7-3), by a spring (7-4), by a general variable force with integration (7-5), power (7-6). Then potential energy: work and potential energy, path independence of conservative forces, finding U (8-1), conservation of mechanical energy (8-2), reading a potential-energy curve with turning points and equilibrium (8-3), work by an external force on a system (8-4), conservation of energy including friction and thermal energy (8-5).

**Order in Feynman [Unverified].** Ch 13 builds work and potential energy by the "lifting machines" argument: a reversible machine cannot lift more than another reversible one, which forces the idea of a conserved quantity, mgh. Ch 14 finishes with general force fields, gradients and the conservative force. Energy-conservation-as-bookkeeping (a child's blocks that always add up) is a recurring Feynman picture [Unverified].

**Hooks and puzzles**
1. Energy is like money in many bank accounts: transfers happen, the grand total never changes; kinetic energy and work are just the first account and the first way of transferring. HRW 7 opener. Strongest single analogy in the book.
2. A train crash in 1896 (staged locomotive collision) used to ask how much energy two engines carry. HRW 7-1, Fig 7-1, SP 7.01.
3. Bed race: pushing a bed with a person on it; only the component of the force along the motion does work. HRW 7-2, Fig 7-3.
4. Bungee jumper: the platform, the free fall, then the cord stretching. Gravity's potential energy first falls, then the cord's elastic potential energy rises and the jumper slows. An engineer must pick the right cord or the jump is fatal rather than thrilling. HRW 8 opener, Fig 8-1.
5. Throw a tomato upward: rising, gravity does negative work, the energy goes into the tomato-Earth system rather than vanishing. HRW 8-1, Fig 8-2.
6. A block of cheese sliding down a track: the work gravity does depends only on height drop, not on the path. HRW 8-1 and SP 8.01.
7. A sloth in a tree: change the zero of potential energy and nothing physical changes, only differences matter. HRW SP 8.02.
8. Water slide with a spring-loaded launch: every energy form in one problem (kinetic, gravitational, elastic, thermal). HRW SP 8.06 and Fig 8-17.
9. A rock climber descending by rope and a car accelerating on a road: where is the energy really coming from? External work on a system, not just internal conversion. HRW 8-4, Fig 8-14, Fig 8-16.

**Intuitions worth borrowing**
- Work is energy in transit; kinetic energy is what the object has, work is how it got there (HRW 7-2).
- A force is conservative exactly when the work it does around any closed loop is zero, equivalently when work between two points is path independent (HRW 8-1).
- A potential-energy curve U(x): slope is minus the force, valleys are stable equilibria, hills unstable, and total energy sets the turning points (HRW 8-3, SP 8.04). Great for Olympiad-level intuition.
- Friction turns mechanical energy into thermal energy; total energy still conserved (HRW 8-5, SP 8.05).
- Power as rate: force times velocity (HRW 7-6, SP 7.09).

**Sample-problem pointers**
- HRW SP 7.02 two constant forces and spies (net work as vector sum); SP 7.03 work in unit-vector notation; SP 7.04 sleigh up a snowy slope; SP 7.05 accelerating elevator cab (work by the cable versus by gravity).
- HRW SP 7.06 work by a spring changes kinetic energy of a canister; SP 7.07 work by graphical integration; SP 7.08 work with a 2D integral.
- HRW SP 8.03 conservation of mechanical energy on a water slide; SP 8.05 friction and thermal energy (cabbage heads on a table); SP 8.04 reading a U graph.

---

## 4. rotation (HRW 9, 10, 11; tree leaves: centre of mass, collisions, torque, moment of inertia, rolling, angular momentum)

**Order in HRW.** Chapter 9 first: centre of mass for particles and solids (9-1), Newton's second law for a system, so the com moves as if all external force acted on a point (9-2), linear momentum (9-3), collisions and impulse (9-4), conservation of momentum (9-5), momentum versus kinetic energy in collisions (9-6), inelastic collisions in 1D (9-6), elastic collisions in 1D (9-7), 2D collisions (9-8), rockets (9-9). Chapter 10: rotational variables (angle, angular velocity, angular acceleration; "are angular quantities vectors?"), constant angular acceleration, linear versus angular variables, rotational kinetic energy, rotational inertia (parallel-axis, integration), torque, second law for rotation, work and rotational kinetic energy. Chapter 11: rolling as translation plus rotation, kinetic energy and forces of rolling, yo-yo, torque as a cross product, angular momentum, second law in angular form, rigid body about a fixed axis, conservation, gyroscope precession.

**Order in Feynman [Unverified].** Ch 10 momentum conservation (from the third law, with collisions, including a "tennis ball hits wall" idea), Ch 18 rotation in two dimensions (rotation as translation's twin: angle, torque, angular momentum, via a lever and Kepler's equal-areas law), Ch 19 centre of mass and moment of inertia (parallel-axis and perpendicular-axis theorems), Ch 20 rotation in space (the gyroscope, torque and angular momentum as vectors, bicycle wheel on a stool).

**Hooks and puzzles**
1. Toss a baseball and a spinning bat: the ball traces a clean parabola; the bat wobbles wildly but one special point (its centre of mass) still follows a clean parabola. Balance the bat on a finger to find it. HRW 9 opener, Fig 9-1.
2. A firework rocket explodes mid-air and the debris flies in all directions, yet the centre of mass keeps on the original path. HRW 9-2, Fig 9-5.
3. Grand jeté in ballet: the dancer's head seems to float because the com follows a parabola while the body shape changes. HRW 9-2, Fig 9-6 (from "The Physics of Dance").
4. Race car hitting a wall: force against time during a crash, impulse as area, and why a longer crash time means lower force. HRW 9-4, SP 9.04, Figs 9-8 and 9-9.
5. Ballistic pendulum: a bullet embeds in a block, momentum is conserved but kinetic energy mostly is not, then the swing converts what is left. HRW 9-6, SP 9.07, Fig 9-17; also HRW 9 P49, P50.
6. Newton's-cradle style chain of elastic collisions. HRW SP 9.08.
7. Rocket thrust: a rocket in deep space with no external force speeds up by throwing mass backward. HRW 9-9, SP 9.09, HRW 9 P78 and P79.
8. Why a long rod is easier to turn about its middle than its end: rotational inertia depends on where the mass sits, not only on how much. HRW 10-5, Fig 10-11.
9. The Rotor ride (riders pinned to the wall) and the Giant Ring ride: constant angular acceleration with real amusement-park numbers. HRW SP 10.04, SP 10.05.
10. Judo hip throw: pulling the opponent's centre of mass in front of your hip creates a torque that rotates them over. HRW 10-7, SP 10.09, Fig 10-18. A fine torque story.
11. Rolling: a lit point on a wheel rim traced by time-exposure photo (the cycloid); the bottom point is momentarily at rest; rolling = translation of the com + rotation about it. HRW 11-1, Figs 11-2 to 11-6.
12. Skater, diver, ballerina pulling in the arms: angular momentum conserved so spin speeds up when the moment of inertia drops. Also a student on a rotating stool holding a bicycle wheel. HRW 11-8, Figs 11-16 to 11-20; SP 11.05 rotating wheel demo; SP 11.06 cockroach on a disk.
13. Gyroscope that does not fall but circles: precession. HRW 11-9, Fig 11-22. Easter Island statues moved on log rollers and the Segway as opening stories. HRW 11 opener.
14. A yo-yo as a rolling wheel that rolls on its axle string. HRW 11-3, Fig 11-9.

**Intuitions worth borrowing**
- Rotation is translation's twin with a dictionary: x to angle, v to omega, a to alpha, m to I, F to torque, p to L (HRW 10 opener lists this explicitly). Many students find ch 10 and 11 hard because of the many new symbols, HRW says so itself, so keep one new symbol per paragraph.
- Centre of mass is "where the net external force may be imagined to act, and where the mass may be imagined to sit", for the purpose of the whole body's translation (HRW 9-1, 9-2).
- Momentum is conserved whenever the net external force is zero, even when you cannot describe the internal forces (explosions, collisions); this is why momentum is the right tool for collisions and energy is not (HRW 9-5, 9-6).
- Elastic versus inelastic: in a perfectly inelastic collision the bodies move together and lose the most kinetic energy but still conserve momentum (HRW 9-6).
- Torque is "force times the lever arm": the same force at a longer lever or at a better angle turns more (HRW 10-6, 11-4).
- A rolling object's kinetic energy is K(com) plus K(rotation about com), so a hoop is slower than a disc down a ramp because more of its mass is at the rim (HRW 11-2, SP 11.01).
- Angular momentum can belong to a particle moving in a straight line (r cross p), not only to spinning things (HRW 11-5, Fig 11-14).

**Sample-problem pointers**
- Centre of mass: HRW SP 9.01 three particles; SP 9.02 plate with a missing piece (the subtraction trick, Fig 9-4); SP 9.03 how the com of three particles moves.
- Momentum: HRW SP 9.05 one-dimensional explosion with relative velocity, space hauler; SP 9.06 two-dimensional explosion, coconut.
- Rotation: HRW SP 10.06 rotational inertia of two particles; SP 10.07 uniform rod by integration; SP 10.08 spin-test explosion (kinetic energy of a rotor); SP 10.10 falling block turning a disk (Fig 10-19); SP 10.11 work and rotational K.
- Rolling and angular momentum: HRW SP 11.01 ball rolling down a ramp; SP 11.02 torque as a cross product; SP 11.03 angular momentum of a two-particle system; SP 11.04 torque equals dL/dt.

---

## 5. gravitation (HRW 13)

**Order in HRW.** Newton's law of gravitation (13-1), superposition and the shell theorems (13-2), gravitation near Earth's surface and why g varies with latitude and rotation (13-3), inside Earth (13-4), gravitational potential energy and escape speed (13-5), Kepler's laws (13-6), satellites: orbits and energy (13-7), Einstein and gravitation as curved space (13-8).

**Order in Feynman [Unverified].** Ch 7 starts with the history: Tycho's measurements, Kepler's laws, Galileo, Newton, then the Moon as "a falling body", the Cavendish experiment weighing the Earth, tides, and a nod to how far the law reaches.

**Hooks and puzzles**
1. The same force holds you on the ground, the Moon around Earth, Earth around the Sun, and reaches across the galaxy, to Andromeda (2.3 million light years) and the Great Attractor; it even tries to hold the expanding universe together. HRW 13 opener. Use the scale ladder as a hook.
2. Black holes: when a very heavy star collapses, gravity at the surface becomes so strong that not even light escapes. HRW 13 opener.
3. Why the head weighs a hair less than the feet in a tall person: the tidal difference in g, a very small number. HRW SP 13.02.
4. You weigh slightly less on a scale at the equator, partly because the Earth is spinning and partly because it bulges. HRW 13-3, Fig 13-6.
5. Dig a tunnel straight through Earth and drop a capsule: how does the force change as it falls, and how long does the trip take? HRW 13-4, Fig 13-7. Pairs with the shell theorem (a uniform shell pulls with zero net force on anything inside, though each piece still pulls).
6. An apple pulls up on Earth as hard as Earth pulls down on the apple; only the accelerations differ. HRW 13-1, Fig 13-3.
7. An asteroid falling in from deep space: conservation of energy gives the impact speed. HRW SP 13.03.
8. Comet Halley: period from the long axis alone, 76 years, Kepler's law of periods. HRW SP 13.04. Planetary orbits as ellipses with eccentricity e. HRW Fig 13-15.
9. A bowling ball in orbit and how to change a circular orbit into an elliptical one with a short burn. HRW SP 13.05, SP 13.06.
10. A physicist in a closed box cannot tell gravity from an accelerating rocket; light bends near a quasar's lens; two travellers going south along meridians converge without any force: gravity as curved space. HRW 13-8, Figs 13-18 to 13-20.

**Intuitions worth borrowing**
- Gravity obeys superposition: add vector forces from each mass (HRW 13-2, SP 13.01).
- A uniform sphere acts as if all its mass were at the centre (for outside points); a uniform shell has no pull inside (HRW 13-2, 13-4). A topic where a one-line justification with symmetry beats an integral for first readers.
- Escape speed from energy: the object needs zero total energy to just reach infinity (HRW 13-5).
- Kepler's second law (equal areas in equal times) is angular momentum conservation under a central force (HRW 13-6, Fig 13-13); links to rotation branch.
- In a circular orbit kinetic energy is half the magnitude of the potential energy, total energy is negative (HRW 13-7, Fig 13-16).
- Weight versus gravitational force: a scale measures the contact force, so it reads differently in an elevator, in orbit, or on a spinning planet (HRW 13-3, 5-2).

**Sample-problem pointers**
- HRW SP 13.01 net force on a particle from three others in 2D; SP 13.02 head versus feet; SP 13.03 asteroid and mechanical energy; SP 13.04 Halley and the period law; SP 13.05 energy of an orbiting bowling ball; SP 13.06 circular to elliptical orbit.
- HRW 13 P17 weight on the Moon; HRW 13 P33 multiple of Earth's escape energy; HRW 13 P24 two concentric shells (shell theorem); HRW 13 P38 and P40 projectile shot straight up from Earth.

---

## 6. properties-of-matter (HRW 12 and 14; tree leaves: pressure and buoyancy, elasticity, Bernoulli, viscosity, surface tension, SHM)

HRW has **no** chapter on viscosity or surface tension. Use another source (not yet read). HRW 15 (Oscillations: SHM, energy, pendulums, damped and forced) is outside the pages read for these notes; only its section list was seen (15-1 to 15-6).

**Order in HRW.** Chapter 12: equilibrium needs both net force and net torque zero, centre of gravity (12-1); worked static examples: beam, boom, ladder, Tower of Pisa (12-2); indeterminate structures (wobbly table), then elasticity: tension, shear and volume stress and strain, Young's modulus, stress-strain curve to yield and fracture (12-3). Chapter 14: what a fluid is (cannot hold a shear), density and pressure (14-1), pressure at depth (14-2), barometers and manometers (14-3), Pascal's principle and the hydraulic lever (14-4), Archimedes (14-5), equation of continuity (14-6), Bernoulli (14-7).

**Order in Feynman [Unverified].** Elasticity and fluids are mostly in Vol II (Ch 38 elasticity, Ch 39 elastic materials, Ch 40 the flow of dry water, Ch 41 the flow of wet water); Vol I only touches fluids in the context of the mass and density of matter [Unverified].

**Hooks and puzzles**
1. A balancing rock, a domino on one corner, a worker balanced on a beam: stability means no net force and no net torque; but "balanced" is not the same as "stable" (HRW 12-1, Figs 12-1 to 12-3).
2. The leaning ladder with a firefighter climbing: where does the ladder start to slip, as a function of how high she climbs? HRW 12-2, SP 12.03, Fig 12-7; HRW 12 P7 window cleaner on a ladder.
3. Why does a four-legged table never wobble on a perfectly flat floor, but a table on an uneven floor does? Four unknown supports, only three equations: statically indeterminate. HRW 12-3, SP 12.06, Fig 12-9.
4. The leaning Tower of Pisa as a tilted cylinder: how far can it lean before it falls over? HRW SP 12.04, Fig 12-8.
5. Atoms in a metal as balls joined by springs: stretching a wire stretches the springs and Young's modulus is their stiffness at large scale. HRW 12-3, Fig 12-10. Strain gauge photo for practical measurement, Fig 12-14.
6. Fluids cannot sustain a shear, which is why they take the container's shape; even pitch flows, just slowly. And liquid water, ice and steam are not so different at the atomic level; ice is a rigid lattice, liquid and gas are not. HRW 14-1.
7. Atmospheric pressure acts on every surface, yet nothing collapses because it presses from both sides. HRW SP 14.01 (title: atmospheric pressure and force). Scuba diver and gauge pressure: HRW SP 14.02.
8. The hydraulic lever: push a little on a small piston and lift a car on a big one (force gain, same work). HRW 14-4, Fig 14-8.
9. Imagine replacing a ball of water in a pool with a rock: the water around it pushes up with the same force as before, which is the weight of the water displaced; that is Archimedes. HRW 14-5, Figs 14-9 and 14-10; the thin plastic sack of water floating in a pool is the sharpest visual. HRW SP 14.04 floating and density; HRW 14 P41 fraction of an iceberg underwater.
10. A water stream from a tap narrows as it falls, because the speed rises and continuity demands a smaller cross-section. HRW 14-6, Fig 14-18, SP 14.05. Bernoulli through a narrowing pipe and a leaky tank. HRW SP 14.06, SP 14.07. HRW 14 P51 garden hose.

**Intuitions worth borrowing**
- Equilibrium has two independent conditions (force and torque); torque can be taken about any point, so pick the point that kills an unknown force (HRW 12-1, 12-2).
- Stress is force per area (the cause), strain is fractional deformation (the effect); the ratio is a property of the material, not of the sample (HRW 12-3).
- Pressure in a fluid at rest depends only on depth (and density), not on the container shape (HRW 14-2).
- Continuity is conservation of mass for a flowing fluid; Bernoulli is conservation of energy per unit volume for it (HRW 14-6, 14-7). Link to the work-energy branch.
- A fluid exerts only perpendicular force on a surface (HRW 14-1).

**Sample-problem pointers**
- HRW SP 12.01 horizontal beam; SP 12.02 leaning boom; SP 12.03 ladder; SP 12.05 stress and strain of a stretched rod.
- HRW SP 14.03 balancing pressure in a U-tube with two liquids; SP 14.04 float; SP 14.05 narrowing stream; SP 14.06 and 14.07 Bernoulli.
- HRW 14 P67 water behind a dam (force and torque on a wall).

---

## Using these notes

- Each branch's "hooks" list is for the lesson **opener card**; keep to 3 or 4 per lesson and phrase them in our own words.
- Do not copy HRW problem text. The pointers above are for orientation; classic-book problems are copied only from uploaded PDFs per CLAUDE.md, and Resnick is in the Drive folder, so copying with a source label (book, chapter, problem number) is allowed after checking the problem in the PDF.
- Still unread (not covered here): HRW 15 (oscillations), viscosity and surface tension (no HRW source), H. C. Verma Vol 1 (not uploaded), Feynman Vol I (blocked).
