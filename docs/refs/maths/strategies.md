# Zeitz: problem-solving strategies (reading notes)

**Book:** Paul Zeitz, *The Art and Craft of Problem Solving*, 2nd edition (Wiley, 2007), the owner's Drive copy.
**Read:** Chapter 2 in full (§2.1 Psychological strategies pp. 14–25, §2.2 Strategies for getting started pp. 25–39, §2.3 Methods of argument pp. 39–52, §2.4 Other important strategies pp. 52–60); the opening pages of §3.1 (p. 62), §3.2 (pp. 73–74), §3.3 (p. 84), §3.4 (p. 92); Example 1.2.1 (pp. 4–5) because Ch 2 refers back to it.
**Page numbers** are the printed ones (PDF page = printed + 17). Problem wording below was checked against page images.
**Rules for use:** the notes are in our own words. The book's solutions are not copied; only the problem statements in the last section are, word for word. Where a strategy's name is the book's own it is in bold. Anything marked [Inference] is our mapping, not the book's claim.

Zeitz's frame: a solution has two parts, the **investigation** (finding out what is going on) and the **argument** (convincing others). Strategies are about the investigation; "tactics" (Ch 3) are mathematical tools. "Anything that stimulates investigation is good" (p. 25).

## A. Psychological strategies (§2.1)

**Mental toughness: learn from Pólya's mouse** (p. 14). Keep trying, but vary each attempt; confidence and concentration both grow if you work on problems that cost real effort but are solvable, and raise the load gradually. Do not give up after a glance, and do not declare "impossible" early. Example 2.1.1 (p. 15, joining lettered boxes with non-crossing paths): moving the boxes to easy positions, then pushing them back. A school student reaches for it whenever a problem "looks impossible" and they feel like stopping.

**Wishful thinking** (p. 16, again p. 27). Pretend the hard part is not there, solve that, then put the difficulty back in steps. Example 2.1.1 again (p. 16): drag the boxes to convenient places first. Example 2.3.10 (p. 49) shows the risk: a wishful inequality was false and the hypothesis had to be strengthened. Use it when one feature (big numbers, a root, an integral) blocks you.

**Make it easier** (p. 16, again p. 27). If the problem is too hard, solve an easier one: smaller numbers, fewer objects, a special case. Example 2.2.3 (p. 29, lockers 1 to 1000): try 10 lockers and tabulate. Use it first on any problem with a large or general parameter.

**Peripheral vision and rule-breaking** (creativity, pp. 17–20). Do not lock onto one method; ask whether you are imposing a rule that the problem never stated. Example 2.1.3 (p. 18, nine dots, four lines): the lines may leave the square of dots. Example 2.1.2 (p. 17, the monk): invent a second monk walking the other way. Use it when every direct attempt fails, especially on puzzle-style and trick questions.

**Appropriate ideas shamelessly** (p. 18). A good trick seen once is yours to reuse; study each solution for its "novel idea". Use it in review: after any solved problem, write the one idea down.

## B. Getting started (§2.2)

**Orientation** (pp. 25–26). Before anything: read carefully (positive or negative, finite or infinite), classify as "find" or "prove", name the hypothesis and conclusion, try notation, restate in your own words, even guess a fantasy answer and see why it is wrong. Example 2.1.7 (p. 20, 1, 11, 21, 1211, ...): reading the terms aloud ("one-two-one-one") reveals the rule. Always the first step; for word problems it is where most errors are caught.

**Get your hands dirty** (p. 26). Plug in many numbers, tabulate, keep going until a pattern shows, then ask why it holds. "Don't skimp on experimentation" (p. 32). Example 2.2.2 (p. 28, AIME 1985, gcd of consecutive terms 100 + n²): replace 100 by a parameter u and make a table. Use it whenever the problem has an integer parameter or a process that can be run by hand.

**Penultimate step** (p. 27; introduced in Example 1.2.1, pp. 4–5). Ask "what single fact would give the conclusion at once?", then aim at that fact. To show A = B, show A ≥ B and B ≥ A; to show A ≠ B, show one is always even and the other odd. Example 2.2.6 (p. 34, Putnam 1991): invertibility is hard to show directly, so look for a vector the matrix sends to zero. Use it on every "prove" question. [Inference] The book does not name a separate "work backwards" strategy; this is the closest thing, and it is the right tool for "find the starting balance / the original number" problems.

**Conjecture, then test, then prove** (pp. 27–33; partly the book's "cautionary tales", p. 39). Experiments suggest a formula; a false conjecture still teaches something. Example 2.2.5 (p. 31, Putnam 1983, n + ⌊√n⌋): the tidy conjecture was false, yet it pointed to the right quantity (the remainder b in n² + b). Cautionary Tales 2.2.35 (p. 39): n² + n + 41 is prime for a long run of n but not all; the regions of a circle go 1, 2, 4, 8, 16, then 31. Use it as a warning: a pattern from five cases is not a proof.

**Simplify by factoring or differentiating** (Examples 2.2.7, 2.2.8, pp. 34–36). Make the ugly expression into a known shape (factor, substitute, differentiate away an integral). Mostly Class 12 and above; the habit of asking "what is the worst part of this?" applies from Class 9.

## C. Methods of argument (§2.3)

**Direct deduction, converse, contrapositive** (p. 41). A proof is "if P then Q". The converse is a different statement; the contrapositive (not Q ⇒ not P) is equivalent. Use it when "not Q" is easier to start from than P. Always; it is the cheapest check on a proof's direction.

**Argument by contradiction** (pp. 41–44). Assume the conclusion false and reach an absurdity. Best for "cannot happen" and "does not exist". Example 2.3.2 (p. 42, √2 is irrational): write √2 = a/b with the smallest possible b, then show both a and b are even. Advice (p. 43): ask "what happens if we negate the conclusion; is that easier to work with?" Use it for irrationality, impossibility, "no solutions", infinitely many primes (exercise 2.3.21).

**Mathematical induction, standard** (pp. 45–47). Base case, then "P(n) implies P(n+1)", like dominoes. Example 2.3.6 (p. 46, n! > 2ⁿ for n ≥ 4): multiply the inductive hypothesis by n + 1 and compare. Example 2.3.7 (p. 46): colour regions made by n lines in two colours, adding the (n+1)th line and flipping colours on one side. Use it for sums, divisibility, inequalities, and any statement indexed by n; also whenever Get your hands dirty gives a formula.

**Strong induction** (pp. 47–50). Assume P true for all earlier cases. Example 2.3.9 (p. 48): any triangulated polygon can be 3-coloured. Example 2.3.10 (p. 49): when the plain statement will not go through, prove a stronger one. Use it when the next case depends on several earlier ones (recurrences, splitting into two parts).

**Style conventions** (pp. 40–41). State hypothesis and conclusion; write complete sentences; "TS" or "ISTS" mark the step you are aiming at; ":=" for definitions; "WLOG" only when the specific case really covers the general one. Worth teaching as a marking checklist.

## D. Other strategies (§2.4)

**Draw a picture** (p. 53). Turn the story into a diagram or graph. The monk problem again with two distance-time graphs: the two paths must cross. Example 2.4.1 (p. 53, counting (s,t) with 3s+7t and 5s+t integers): treat (3s+7t, 5s+t) as a point and count lattice points in a parallelogram. Use it for motion, geometry, sums of consecutive terms (exercises 2.4.8, 2.4.13 to 2.4.15).

**Recast the problem** (pp. 54–58). Re-express it as another kind of problem. Example 2.4.2 (p. 54, chessboard with two opposite corners removed, dominoes): colour the squares and count. Example 2.4.3 (p. 55, the art-gallery problem): triangulate and colour. Example 2.4.4 (p. 56): an ugly radical equation becomes trigonometry. Use it when the problem has "too many cases"; ask what else it could be.

**Change your point of view** (p. 58). Move the observer to where the problem is simple. Example 2.4.6 (p. 58, swimmer and hat): from the hat's frame the river is still, so out and back take equal time. Use it for relative motion, rates, and anything where a quantity "cancels" in the right frame.

## E. Tactics previewed in Ch 3 (one line each, only the openings read)

- **Symmetry** (§3.1, p. 62). An object is symmetric if some action leaves it unchanged; symmetry gives free information (study one quarter, and the centre is special). Example 3.1.1: a square under reflection and 90° rotation. Reach for it in geometry and in expressions that stay the same when variables swap.
- **Extreme principle** (§3.2, pp. 73–74). Assume the elements are ordered and look at the largest or smallest. Example 3.2.1 (p. 74, black and white points): take the smallest-area triangle, then find a smaller one. Reach for it with finite collections and "prove that some element exists"; works well with contradiction.
- **Pigeonhole principle** (§3.3, p. 84). More pigeons than holes means some hole has two. Example 3.3.1 (two-colouring of the plane): three corners of a mile-long equilateral triangle, two colours. Example 3.3.2: five points in a unit square, four sub-squares. The work is choosing pigeons and holes; use it for "two of these must be alike" claims.
- **Invariants** (§3.4, p. 92). Find a quantity that does not change while everything else does. Example 3.4.1: the motel paradox, where g − p − d is always zero. Use it for processes (moves, swaps, pours) and for catching false accounting; the chessboard colouring in Example 2.4.2 is an invariant in disguise.

## F. Mapping to our everyday-maths topics [Inference: our judgement, not Zeitz's]

| Topic | Strategies that fit | Why |
|---|---|---|
| Compound interest and EMIs | Get your hands dirty; make it easier; penultimate step; induction | Tabulate year by year at a small rate. For an EMI the penultimate step is "the balance after the last payment is zero", which is how the formula is found backwards. Induction proves the geometric-series formula (2.3.28) and Bernoulli's inequality (2.3.33), which says compound growth beats simple interest. |
| Fermi estimation | Orientation; make it easier; wishful thinking; extreme principle; change your point of view | Round to powers of ten (make the hard numbers easy); check units first; bound the answer from above and below (largest and smallest plausible values); count per person or per household instead of in total. |
| Exponential growth and doubling | Get your hands dirty; induction; conjecture then test; pigeonhole | A doubling table shows the pattern; induction proves 2ⁿ subsets (2.3.27); the circle-regions story (2.2.35b) warns that a doubling pattern can fail at n = 6; pigeonhole shows growth must stop in a finite space. |
| Expected value | Change your point of view; make it easier; penultimate step; recast | Score each prize or each person separately and add (the point of view that makes the sum easy); try a coin or a die first; the penultimate step is "value times probability, summed". Trick questions 2.1.27(b),(c) train careful reading of "at least" and of percentages of percentages. |

## G. Problems to use (copied word for word)

Statements are copied exactly as printed, including numbering. Solutions are not given here. Suggested use: Class 10 (C10), Class 11–12 (C12), or both.

**Zeitz 2.1.22** (p. 24, C10). "Bottle A contains a quart of milk and bottle B contains a quart of black coffee. Pour a small amount from B into A, mix well, and then pour back from A into B until both bottles again each contain a quart of liquid. What is the relationship between the fraction of coffee in A and the fraction of milk in B?" *Trains:* change your point of view (what is conserved).

**Zeitz 2.1.27(c)** (p. 25, C10–12). "At least how many times must you flip a fair coin before there is at least a 50% probability that you will get at least three heads?" *Trains:* orientation (read "at least" twice), get your hands dirty; fits expected value and probability.

**Zeitz 2.2.13** (p. 37, C10). "Into how many regions is the plane divided by n lines in general position (no two lines parallel; no three lines meet in a point)?" *Trains:* get your hands dirty (tabulate n = 1, 2, 3, 4), then conjecture; prove with 2.3.25 (induction).

**Zeitz 2.2.19** (p. 38, C10–12). "Bay Area Rapid Food sells chicken nuggets. You can buy packages of seven or packages of 11. What is the largest integer n such that there is no way to buy exactly n nuggets? Can you generalize this?" *Trains:* make it easier (packs of 2 and 3, then 3 and 5), conjecture; links to EMI-style "which amounts can be paid exactly".

**Zeitz 2.2.35(b)** (p. 39, C10–12). "Let t(n) be the maximum number of different areas that you can divide a circle into when you place n points on the circumference and draw all the possible line segments connecting the points. It is easy to check (verify!) that t(1) = 1, t(2) = 2, t(3) = 4, t(4) = 8, t(5) = 16. The conjecture that t(n) = 2^(n−1) is practically inescapable. Yet t(6) is equal to 31, not 32 (again, verify!), so something else is going on. Anyway, can you deduce the correct formula for t(n)?" *Trains:* a pattern is not a proof; essential for the doubling lesson. (The printed exponent is n − 1.)

**Zeitz 2.3.17** (p. 51, C10–12). "Prove that if a is rational and b is irrational, then a + b is irrational." *Trains:* argument by contradiction (negate the conclusion).

**Zeitz 2.3.27** (p. 51, C11–12). "Prove that a set with n elements has 2^n subsets, including the empty set and the set itself. For example, the set {a, b, c} has the eight subsets ∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}." *Trains:* induction on n; the cleanest "doubling" proof.

**Zeitz 2.3.28** (p. 51, C10–12). "Prove the formula for the sum of a geometric series: a^(n−1) + a^(n−2) + ... + 1 = (a^n − 1)/(a − 1)." *Trains:* induction; the formula behind compound interest and EMIs.

**Zeitz 2.3.33** (p. 51, C11–12). "Prove Bernoulli's Inequality, which states that if x > −1, x ≠ 0 and n is a positive integer greater than 1, then (1 + x)^n > 1 + nx." *Trains:* induction with an inequality (compare Example 2.3.6); compound versus simple interest.

**Zeitz 2.4.7** (p. 59, C10–12). "Pat works in the city and lives in the suburbs with Sal. Every afternoon, Pat gets on a train that arrives at the suburban station at exactly 5PM. Sal leaves the house before 5 and drives at a constant speed so as to arrive at the train station at exactly 5PM to pick up Pat. The route that Sal drives never changes. One day, this routine is interrupted, because there is a power failure at work. Pat gets to leave early, and catches a train which arrives at the suburban station at 4PM. Instead of phoning Sal to ask for an earlier pickup, Pat decides to get a little exercise, and begins walking home along the route that Sal drives, knowing that eventually Sal will intercept Pat, and then will make a V-turn, and they will head home together in the car. This is indeed what happens, and Pat ends up arriving at home 10 minutes earlier than on a normal day. Assuming that Pat's walking speed is constant, that the V-turn takes no time, and that Sal's driving speed is constant, for how many minutes did Pat walk?" *Trains:* change your point of view (what time did the car save, and where?).

**Zeitz 2.4.8** (p. 59, C10). "Prove, without algebra, that the sum of the first n positive odd integers is n²." *Trains:* draw a picture.

**Zeitz 2.4.12** (p. 59, C10–12). "Sonia walks up an escalator which is going up. When she walks at one step per second, it takes her 20 steps to get to the top. If she walks at two steps per second, it takes her 32 steps to get to the top. She never skips over any steps. How many steps does the escalator have?" *Trains:* change your point of view, make it easier (rates per step); fits Fermi-style rate thinking.

## H. Not read, for later

Chapter 2 exercise sets that were skimmed but not used: 2.2.9 to 2.2.34 (many "experiment and conjecture" prompts), 2.3.11 to 2.3.41 (proof exercises), 2.4.9 to 2.4.24 (modelling and pictures). Worth reading for further problems if the lessons need more.
