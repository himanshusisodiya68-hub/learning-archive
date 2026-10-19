# Working together on Learning Archive

Two people build this site, and each runs Claude on their own account. Usage limits can't be pooled. What works is splitting the work so that both budgets run at the same time, and having one person take over when the other runs out. GitHub is the only state the two of you share: issues say who is doing what, branches hold the work, and pull requests are where it gets reviewed.

Claude reads the short version of these rules from `CLAUDE.md` ("Working together"). This page is for the humans.

## One-time setup

**Owner (himanshusisodiya68-hub)**
1. Invite the collaborator: repo **Settings → Collaborators → Add people** → their GitHub username. They accept the invite from the email.
2. Protect `main`: **Settings → Branches → Add branch ruleset** (or "Add rule") for `main`. Tick *Require a pull request before merging* and *Require status checks to pass*, and add the `check` job. Neither of you can then push straight to `main` by accident.
3. Optional: share the site artifact with the collaborator (view access) so they can see what has been published.

**Collaborator**
1. Accept the invite.
2. Choose where to run Claude Code:
   - **Web** (claude.ai/code): connect GitHub and pick `himanshusisodiya68-hub/learning-archive`. You don't need to install anything.
   - **Desktop or CLI**: `git clone https://github.com/himanshusisodiya68-hub/learning-archive.git && cd learning-archive/site && npm ci`. NCERT work needs Node 20+, Python 3 and `poppler` (`pdftotext`, `pdftoppm`).
3. Nothing else to set up. `.claude/settings.json` picks Sonnet for the main session, and the `theory-writer` subagent uses Opus. Both run on **your own** plan's quota.

## The loop

1. **Claim.** Open an issue with the *Claim work* template, or pick an existing one, and assign it to yourself. Scope it to one chapter or a few leaves.
2. **Start a session** in Claude Code: *"Work on issue #12."* Claude makes a branch, does the work, runs `fix-yaml`, `check-answers` and `build`, then pushes and opens a PR with `Closes #12`.
3. **Review.** The other person reviews the PR, either by hand or by asking their own Claude to *"review PR #12 against CLAUDE.md"* (or `/code-review` on the PR). CI has to pass.
4. **Merge** (squash), then both of you `git pull` on `main`.
5. **Publish** (owner only): the site artifact lives on the owner's account, so the owner's session republishes after a pillar is complete.

## Splitting the work so both budgets count

- **In parallel, by branch of the tree.** Example: one person takes Kinematics while the other takes Newton's laws. Different leaves mean different files, so the two branches never conflict.
- **As a relay, when one of you runs out.** Before stopping, push the branch (a draft PR is fine) and comment on the issue: what's done, what's next. The other person starts a session on that branch with *"Continue issue #12 from branch X."* Work left only in a session is lost when the session ends. For example, the Mechanics drafts listed in `CLAUDE.md` were never pushed, and they aren't in the repo.
- **Writing and reviewing.** Reviewing a PR costs far fewer tokens than writing it. Whoever has less budget left this week reviews, and the other writes.
- **Routine work and deep lessons.** For a big chapter, one person can do the Sonnet work (transcribing NCERT, problems files, tree mapping) and hand the branch over. The other then runs `theory-writer` (Opus) for the lessons. Pass the issue along, not the files.

## Files you will both touch

Most files belong to one leaf and never collide. These are shared:

| File | How to avoid conflicts |
|---|---|
| `site/content/tree.yaml` | Pull `main` just before editing. Add or change only your own leaves. Merge small PRs quickly. |
| `site/content/ncert/*.yaml` | Same as `tree.yaml`. |
| `site/app/*`, `site/*.mjs` | Open a separate issue for any app or build change, and don't mix it into content PRs. |
| `CLAUDE.md` → "Build order and status" | Update it only in the PR that finishes a chapter or pillar. On a conflict, keep both sides' lines. |

When a PR shows a conflict, the PR's author resolves it: run `git pull origin main` on the branch, fix the conflict, then push again.

## Ground rules

- The owner's standing requirements in `CLAUDE.md` bind both of you: NCERT text word for word, no book problems from memory, and anything unverified gets a label.
- Commit under your own GitHub identity. Never commit as the other person.
- Questions for the owner go in the issue or the PR, so the answer stays on record for the next session.
