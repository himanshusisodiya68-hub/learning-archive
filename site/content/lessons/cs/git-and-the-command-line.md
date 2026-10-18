---
title: Git and the command line
summary: How teams keep every version of a project, let many people edit at once, and still end up with one working program.
ncert: []
up_to: SDE-2
builds_on: [The language landscape, Compilers and interpreters]
notes_prompt: Explain to a friend why git is better than saving essay_final_v2_REAL.docx, using the words snapshot, branch and merge.
margin:
  - kind: history
    title: History
    text: 'Linus Torvalds wrote the first version of git in 2005 in a matter of days, after the Linux kernel team lost access to its old version-control tool [Unverified details]. He wanted it fast, distributed and hard to corrupt.'
  - kind: tip
    title: Interview favourite
    text: 'Be ready to explain the difference between merge and rebase, and between revert and reset. Clear, small commits with good messages are a signal of professionalism in a team.'
  - kind: olympiad
    title: Design link
    text: 'Git is a content-addressed store: every object is named by the hash of its contents. The same idea powers deduplication in backup systems and the blocks of many distributed storage designs.'
books:
  - { title: "Chacon and Straub, Pro Git (free online)", ref: "Ch. 1 Getting Started, Ch. 2 Git Basics, Ch. 3 Git Branching [Unverified]" }
  - { title: "Shotts, The Linux Command Line (free online)", ref: "Part 1 Learning the Shell [Unverified]" }
cards:
  - { front: "What is a commit?", back: "A saved snapshot of the whole project at one moment, with a message, an author and a pointer to the commit that came before it." }
  - { front: "What does git add do, and why is it separate from commit?", back: "It puts chosen changes into the staging area, the basket for the next snapshot. That lets you commit related changes together even if you edited many things." }
  - { front: "What is a branch?", back: "Just a movable label pointing at one commit. Making a branch is nearly free, so every feature can have its own line of work." }
  - { front: "What happens in a merge conflict?", back: "Two branches changed the same lines differently. Git marks both versions in the file and asks you to choose, then you commit the result." }
  - { front: "Difference between clone, fetch, pull and push?", back: "Clone copies a whole remote repository. Fetch downloads new commits without touching your files. Pull is fetch plus merge. Push uploads your commits." }
  - { front: "Shell: what do |, > and cd do?", back: "The pipe | sends one command's output to the next. > writes output to a file. cd changes the current folder." }
core:
  idea: 'Git saves a project as a chain of snapshots called commits. A branch is a label on one commit, so you can work on several ideas at once, then merge them. Every copy of the repository holds the full history, so you can work offline and share by pushing and pulling.'
  formulas:
    - tex: '\text{working files} \to \text{staging area} \to \text{commit} \to \text{remote}'
      label: 'The path a change takes: edit, add, commit, push'
  conditions:
    - 'Git tracks text well (each line change can be compared); big binary files such as videos are poor fits'
    - 'Commits are permanent once shared: other people may have built on them'
    - 'Secrets such as passwords must never be committed, because history keeps them forever'
  sign: 'The commonest mistake is a huge commit with a message like "fix". Small commits with clear messages make history readable and mistakes easy to undo.'
outcomes:
  - 'Move around a computer and combine small tools using shell commands'
  - 'Create a repository and save snapshots with add and commit'
  - 'Explain what a branch is and use branches and merges'
  - 'Resolve a simple merge conflict'
  - 'Share work through a remote repository and choose between merge and rebase, revert and reset'
opener:
  story: |
    You are writing a school project. Monday night: `essay.docx`. Tuesday: `essay_v2.docx`. Wednesday, after a bad idea: `essay_final.docx`, then `essay_final_REAL.docx`, then `essay_final_REAL_USE_THIS.docx`. Then your teammate sends *her* edits, and you have to work out by eye which sentences are new.

    Now imagine this with 2,000 engineers, each changing some of the same 10 million lines of a program, every day. Nobody could survive it by renaming files.

    There is a tool that makes the whole mess disappear, and nearly every software team in the world uses it. It is called git, and the secret is simpler than its reputation: it takes photographs.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A row of file icons named essay_v2, essay_final and essay_REAL, replaced by a neat chain of three commit circles"><g style="font-size:9px;fill:var(--muted)"><rect x="14" y="26" width="64" height="30" rx="4" style="fill:var(--surface);stroke:var(--rule)"/><text x="20" y="45">essay_v2</text><rect x="14" y="62" width="64" height="30" rx="4" style="fill:var(--surface);stroke:var(--rule)"/><text x="20" y="81">essay_final</text><rect x="14" y="98" width="64" height="30" rx="4" style="fill:var(--surface);stroke:var(--rule)"/><text x="20" y="117">essay_REAL</text></g><text x="14" y="148" style="font-size:10px;fill:var(--bad)">before: a mess</text><path d="M92 76 L128 120" style="stroke:var(--c);stroke-width:2;fill:none"/><path d="M121 118 L129 121 L125 113" style="stroke:var(--c);stroke-width:2;fill:none"/><g style="stroke:var(--c);stroke-width:2;fill:color-mix(in srgb,var(--c) 16%,var(--surface))"><circle cx="150" cy="160" r="14"/><circle cx="210" cy="160" r="14"/><circle cx="270" cy="160" r="14"/></g><path d="M164 160 L196 160 M224 160 L256 160" style="stroke:var(--ink);stroke-width:1.5"/><text x="150" y="190" style="font-size:9px;fill:var(--ink);text-anchor:middle">Mon</text><text x="210" y="190" style="font-size:9px;fill:var(--ink);text-anchor:middle">Tue</text><text x="270" y="190" style="font-size:9px;fill:var(--ink);text-anchor:middle">Wed</text><text x="210" y="218" style="font-size:10px;fill:var(--c);text-anchor:middle">after: one chain of snapshots</text></svg>'
symbols:
  - s: 'repository'
    means: 'a project folder together with its entire saved history'
  - s: 'commit'
    means: 'one saved snapshot of the project, with a message and a pointer to the previous commit'
  - s: 'staging area'
    means: 'the basket where you place changes before committing them'
  - s: 'branch'
    means: 'a movable label that points at one commit'
  - s: 'merge'
    means: 'combining the work of two branches into one'
  - s: 'remote'
    means: 'a copy of the repository on another machine, such as a shared server'
  - s: 'shell'
    means: 'the text window where you type commands to the computer'
life:
  - 'Every app on your phone was built by a team that used a tool like git to combine hundreds of people''s changes without overwriting each other.'
  - 'Google Docs "version history" and the undo history in a photo editor are the same idea: keep every earlier state so you can go back.'
  - 'Open-source projects such as Linux and Python accept contributions from strangers across the world through branches and pull requests.'
  - 'Writing a book or thesis with several authors is easier if every author works on a copy, and the copies are merged at the end.'
  - 'System administrators run servers entirely from the shell, because typing a command can be repeated and automated, while clicking cannot.'
models:
  - name: 'Take snapshots, not notes'
    text: 'Keeping the whole state at each moment is simpler and safer than keeping a list of edits. Photographs of a building site tell you more than a diary does. Look for places where saving the state is cheaper than describing the change.'
  - name: 'Make mistakes cheap'
    text: 'Branches cost almost nothing, so you can try a risky idea knowing you can drop it. Savings, rehearsals and prototypes work the same way: lower the price of being wrong and you will try more.'
  - name: 'Work in parallel, then reconcile'
    text: 'Let people work independently and merge at defined points, instead of waiting turns. Shared documents, cabinet decisions and relay races use this pattern, and all must handle the moment two changes disagree.'
links:
  - leaf: 'cs/linux-and-shell'
    name: 'Linux and the shell'
    same: 'The commands here (cd, ls, pipes) are the same ones used to run Linux servers.'
    differs: 'This lesson covers the first few commands; the Linux lesson goes into files, permissions, processes and scripting.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'A hash turns content into a short fixed-size name; git names every commit and file by the hash of its content.'
    differs: 'A hash table needs fast lookup and tolerates collisions; git picks hashes long enough that a collision is not expected in practice.'
  - leaf: 'cs/graphs'
    name: 'Graphs and their representations'
    same: 'A repository''s history is a graph of commits, each one pointing back to its parent or parents.'
    differs: 'It has direction and no cycles (a commit cannot descend from itself), which makes it a special kind of graph.'
  - leaf: 'cs/ci-cd'
    name: 'CI/CD and deployment'
    same: 'Pushing a commit is usually what triggers automated tests and deployment.'
    differs: 'Git manages the history of the code; CI/CD manages what happens to each new version of it.'
next:
  q: 'Git has to list thousands of files and the 500th line of a file instantly. How does a computer store a long row of things so that it can jump straight to the 500th without counting from the start?'
  leaf: 'cs/arrays'
  name: 'Arrays and dynamic arrays'
---

:::hook
q: Git remembers every version of your project. Roughly, what does it store for each commit?
options: ["A list of lines that changed", "A snapshot of every file as it was, with identical content shared between commits", "A video of you typing"]
answer: 1
right: Right. Conceptually each commit is a full snapshot. Files that did not change are not copied again; the new commit just points to the same stored content. (Git also compresses stored objects, so a repository stays small. [Unverified detail])
wrong: Many older tools stored a list of changes. Git thinks in photographs of the whole project, and avoids waste by reusing files that are identical.
:::

## The shell in ten minutes {lvl=1 id=s-shell label="Foundations"}

The **shell** is a window where you type a command and press Enter. It looks old-fashioned, and programmers love it for one reason: a typed command can be saved, repeated, shared and combined, and a mouse click cannot.

You are always "standing" in a folder. These few commands cover most of what you need to start:

| Command | What it does |
|---|---|
| `pwd` | print where you are |
| `ls` | list what is in this folder |
| `cd notes` | go into the folder named notes (`cd ..` goes up one) |
| `mkdir project` | make a new folder |
| `cat file.txt` | show a file |
| `man ls` or `ls --help` | read the manual for a command |

Two small symbols turn these into a toolbox. `>` sends a command's output into a file instead of the screen, and `|` (pipe) feeds one command's output into the next:

```bash
mkdir project && cd project        # make a folder and go in
echo "hello" > notes.txt           # write a line into a file
ls | wc -l                         # count the files here
cat notes.txt | grep hello         # search a file's text
```

Read the last line as: show the file, and pass it on to a program that prints only the lines containing "hello". Small tools, each doing one job, joined by pipes: that is the shell's way of thinking.

:::qc lvl=1
q: What does `ls | wc -l` do?
options: ["Deletes all files", "Lists the files and counts how many lines of output there are", "Opens the manual"]
answer: 1
right: Right. ls prints one name per line, the pipe hands that to wc, and the -l option counts lines, so you get the number of files.
wrong: The pipe connects two commands. What does the first print, and what does the second do with it?
:::

## Git as snapshots {lvl=1 id=s-snapshots label="Foundations"}

A **repository** (repo) is your project folder plus its saved history. A **commit** is one entry in that history: a snapshot of every file at one moment, with a short message saying why.

Between editing and saving there is a middle step, the **staging area**. Think of a shop: you pick items into a basket (`add`), then pay and walk out (`commit`). The basket lets you decide exactly which changes belong in this snapshot, so one commit can be "fix the login bug" even if you also touched two unrelated files.

```bash
git init                          # start tracking this folder
git add notes.txt                 # put the file in the basket
git commit -m "Add first notes"   # take the snapshot
git status                        # what has changed since?
git log --oneline                 # the history, newest first
```

Every commit gets a long hexadecimal name that is the **hash** of its contents (the idea from the hash tables lesson), such as `a1b2c3d`. If one letter in any file changed, the name would be completely different, and this is how git notices tampering or corruption. Git's first versions used the SHA-1 hash; a move to a stronger one is under way [Unverified details].

Going back is just as easy. `git restore notes.txt` throws away edits you have not yet committed; `git switch --detach a1b2c3d` lets you look at the project as it was in an old commit.

:::qc lvl=1
q: You edited three files but only two belong together in one commit. What do you do?
options: ["Commit everything and explain in the message", "git add the two files, then git commit", "Delete the third file"]
answer: 1
right: Right. Staging lets you pick. The third file stays changed on disk but is not part of this snapshot.
wrong: That is what the staging area is for. How can you tell git which files go into the next snapshot?
:::

## Branches and merging {lvl=2 id=s-branches label="SDE-1"}

Each commit points back to the one before it, like beads on a string. A **branch** is just a sticky label on one bead. By default there is one, usually called `main`; each new commit moves the label forward.

To try an idea without risk, make a second label. Work on it, and `main` stays untouched. When the idea works, **merge** it back.

:::figure caption="Two branches. Commits C and D live on feature while E lands on main. The merge commit M has two parents."
<svg viewBox="0 0 360 150" role="img" aria-label="Commit graph: A and B on main, C and D on a feature branch, E on main, and a merge commit M with two parents">
<g style="stroke:var(--ink);stroke-width:1.5;fill:none">
<line x1="50" y1="40" x2="110" y2="40"/><line x1="110" y1="40" x2="190" y2="40"/><line x1="190" y1="40" x2="270" y2="40"/>
<path d="M110 40 L150 100 L220 100 L270 40"/>
</g>
<g style="font-size:11px;fill:var(--ink);text-anchor:middle">
<circle cx="50" cy="40" r="13" style="fill:color-mix(in srgb,var(--mat) 18%,var(--surface));stroke:var(--mat)"/><text x="50" y="44">A</text>
<circle cx="110" cy="40" r="13" style="fill:color-mix(in srgb,var(--mat) 18%,var(--surface));stroke:var(--mat)"/><text x="110" y="44">B</text>
<circle cx="190" cy="40" r="13" style="fill:color-mix(in srgb,var(--mat) 18%,var(--surface));stroke:var(--mat)"/><text x="190" y="44">E</text>
<circle cx="270" cy="40" r="13" style="fill:color-mix(in srgb,var(--phy) 24%,var(--surface));stroke:var(--phy)"/><text x="270" y="44">M</text>
<circle cx="150" cy="100" r="13" style="fill:color-mix(in srgb,var(--phy) 18%,var(--surface));stroke:var(--phy)"/><text x="150" y="104">C</text>
<circle cx="220" cy="100" r="13" style="fill:color-mix(in srgb,var(--phy) 18%,var(--surface));stroke:var(--phy)"/><text x="220" y="104">D</text>
</g>
<text x="300" y="30" style="font-size:10px;fill:var(--muted)">main</text>
<text x="240" y="130" style="font-size:10px;fill:var(--muted)">feature</text>
</svg>
:::

```bash
git switch -c feature        # make a branch called feature and move onto it
# ...edit, git add, git commit...
git switch main              # go back to main
git merge feature            # bring the feature's commits in
```

If the two branches changed **different** parts of files, git combines them by itself. If both changed **the same lines**, you get a **conflict**: git stops and marks both versions in the file between lines of `<<<<<<<` and `>>>>>>>`. You open the file, keep the right text (or a mix), remove the markers, then `git add` the file and `git commit`. Conflicts feel frightening at first, but they are git being honest: two people disagreed, and only a human can decide who is right.

:::qc lvl=2
q: A branch in git is best described as
options: ["A full copy of the project folder", "A label pointing at a commit", "A backup on another computer"]
answer: 1
right: Right. Because it is only a pointer, creating a branch takes almost no time or space, which is why branching is encouraged.
wrong: If branches were copies, large projects would take minutes to branch. What small thing could git be storing instead?
:::

## Sharing through a remote {lvl=2 id=s-remote label="SDE-1"}

Every clone of a repository contains the **full history**, so you can commit, branch and browse the log on a plane with no internet. To share, you connect to a **remote**: another copy, usually on a server such as GitHub or GitLab.

| Command | Meaning |
|---|---|
| `git clone <url>` | copy a remote repository to your machine |
| `git fetch` | download new commits, change nothing in your files |
| `git pull` | fetch, then merge into your current branch |
| `git push` | upload your commits to the remote |

A common team workflow: make a branch, push it, and open a **pull request** asking teammates to review it. Automated tests usually run on every push (see the CI/CD lesson), and only when the reviewers and tests are happy is the branch merged into `main`.

## Undoing things safely {lvl=3 id=s-undo label="SDE-2"}

Most of git's reputation for being scary comes from undoing. The key question is whether the commit has been **shared**.

- **Not yet pushed, a wrong commit message?** `git commit --amend` rewrites it.
- **Already shared, but wrong?** Use `git revert <commit>`: it adds a **new** commit that undoes the old one, leaving history intact for everyone.
- **Local only, want to throw commits away?** `git reset` moves the branch label backwards. Rewriting history others have already pulled makes their copies disagree with yours, so avoid it on shared branches.

**Merge or rebase?** A merge keeps the true history, with a merge commit joining the branches. A **rebase** replays your commits on top of the latest `main`, producing a straight line that is easier to read, but it creates new commits (new hashes), so it is only safe on branches that nobody else has built on.

Three habits that save you:

```bash
# never commit secrets or build output: list them in .gitignore
echo ".env" >> .gitignore
echo "dist/" >> .gitignore
# a leaked password stays in history even after you delete the file
```

Write commit messages as a sentence that completes "If applied, this commit will...": for example, "Fix crash when username is empty". Future you, reading the log at midnight during an outage, will be grateful.

:::qc lvl=3
q: You pushed a commit with a bug and teammates have already pulled it. The safest fix is
options: ["git reset and force-push", "git revert, which adds a new commit undoing it", "Delete the repository and start again"]
answer: 1
right: Right. Revert adds to history instead of rewriting it, so everyone's copies stay consistent.
wrong: Rewriting shared history leaves your teammates' copies disagreeing with the server. Which command undoes a change by adding, not erasing?
:::

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The shell runs typed commands; pipes and redirects combine small tools. {lvl=1}
2. A commit is a snapshot of the whole project, named by the hash of its contents. {lvl=1}
3. Edit, then git add (staging), then git commit: the staging area chooses what goes in a snapshot. {lvl=1}
4. A branch is just a label on a commit, so branching is cheap; merge brings branches together. {lvl=2}
5. A merge conflict means two branches changed the same lines; you decide the result. {lvl=2}
6. Every clone holds the full history; share with push, pull and pull requests. {lvl=2}
7. Revert adds a new commit that undoes an old one; reset and rebase rewrite history and are for unshared work. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Check where you are (`pwd`) and what a command will touch before you run it; `rm` in the shell has no recycle bin. {lvl=1}
- Never commit passwords, keys or large generated files; add them to `.gitignore` before the first commit. {lvl=2}
- `git pull` can start a merge you did not expect; run `git fetch` and `git status` first if you are unsure. {lvl=2}
- Do not rewrite (reset, rebase, force-push) commits other people already have. {lvl=3}
- Commit small and often, with a message that explains why; one giant commit named "fix" hides what changed. {lvl=1}
:::
