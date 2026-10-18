---
title: Linux and the shell
summary: How engineers run, inspect and fix a computer that has no screen, no mouse and no desktop, using only typed commands.
ncert: []
up_to: SDE-2
builds_on: [Git and the command line, Processes and threads, File systems]
notes_prompt: Explain to a friend why engineers type commands to control a server instead of clicking, and how small tools joined by pipes can answer big questions.
margin:
  - kind: history
    title: History
    text: Unix was built at Bell Labs around 1969, and Linus Torvalds released the first Linux kernel in 1991. The pipe, the idea of joining small programs end to end, was added to Unix in the early 1970s. [Unverified]
  - kind: tip
    title: Interview favourite
    text: '"The server is slow, what do you do?" The shell answer is a sequence: look at processes, disk, memory and logs. Knowing top, df, free and tail -f is a quick way to sound experienced.'
  - kind: olympiad
    title: Design link
    text: Every cloud server you will ever rent runs Linux and is reached through a shell. Containers, Kubernetes and CI pipelines are all driven by the commands in this lesson.
books:
  - { title: "A. Silberschatz et al., Operating System Concepts, or R. Arpaci-Dusseau, Operating Systems: Three Easy Pieces (OSTEP)", ref: "files, processes and permissions chapters [Unverified chapter numbers]" }
  - { title: "B. Kernighan and R. Pike, The Unix Programming Environment", ref: "the pipe and filter chapters [Unverified]" }
cards:
  - { front: "What does the shell do?", back: "It reads a line you type, finds the program named in it, runs that program with your arguments and shows the output. It is a program that launches programs." }
  - { front: "Read the permission string rwxr-x---", back: "Owner can read, write, execute; group can read and execute; everyone else gets nothing. As numbers: 750 (r=4, w=2, x=1, added per group)." }
  - { front: "What is a pipe?", back: "The | symbol sends the output of one program straight in as the input of the next, so small tools combine into big ones: cat log | grep ERROR | wc -l." }
  - { front: "What is an environment variable?", back: "A named setting (like PATH or HOME) that the shell hands to every program it starts. Child programs get a copy, so changing it in one program does not affect its parent." }
  - { front: "Why start a script with set -euo pipefail?", back: "Stop at the first failed command (-e), refuse unset variables (-u) and fail if any stage of a pipe fails (pipefail), instead of ploughing on after an error." }
  - { front: "What does exit code 0 mean?", back: "Success. Any other number means some kind of failure. Scripts and CI systems read this number to decide what to do next." }
core:
  idea: 'The shell lets you run programs by typing their names. Each program does one small job, reads text in and writes text out, and the pipe joins them, so a handful of simple tools can solve problems nobody planned for.'
  formulas:
    - tex: '\text{permission} = 4r + 2w + 1x'
      label: 'One digit per group (owner, group, others): r read, w write, x execute'
    - tex: '\text{cmd}_1 \;|\; \text{cmd}_2 \;|\; \text{cmd}_3'
      label: 'Pipeline: the output of each command is the input of the next'
  conditions:
    - 'Programs exchange plain text lines, so they can be joined without knowing about each other'
    - 'Every program reports success or failure through its exit code (0 means success)'
    - 'Access is decided by the permission bits against the user running the command'
  sign: 'The classic mistake is a blanket chmod 777 to make an error go away. It lets every user on the machine change your file. Find which user needs which permission instead.'
outcomes:
  - 'Move around the file system and read a permission string such as -rw-r-----'
  - 'List, stop and watch processes, and say what a process inherits from its parent'
  - 'Combine grep, sort, uniq and wc with pipes to answer a question about a log'
  - 'Use find, ssh and environment variables on a remote machine'
  - 'Write a short, safe script that fails loudly instead of silently'
opener:
  story: |
    You have rented a small computer in a data centre somewhere. It has no screen, no keyboard, no mouse, and you will never see it. It is serving your website, and at 2 a.m. the website stops answering.

    You can't open a folder or double-click anything. All you have is a **text prompt** on your laptop that is somehow connected to that machine. You type a few words, and it types back. Within a minute you find the program that has eaten all the memory and stop it.

    How can a plain line of text be enough to see everything a machine is doing, and to change it?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A laptop terminal connects over a wire to a screenless server in a data centre"><rect x="14" y="40" width="130" height="92" rx="8" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><rect x="22" y="48" width="114" height="74" rx="3" style="fill:color-mix(in srgb,var(--c) 10%,var(--surface));stroke:var(--rule)"/><text x="28" y="66" style="font-size:10px;fill:var(--c)">&#36; ssh me@server</text><text x="28" y="82" style="font-size:10px;fill:var(--ink)">&#36; top</text><text x="28" y="98" style="font-size:10px;fill:var(--bad)">app  98% memory</text><text x="28" y="114" style="font-size:10px;fill:var(--ink)">&#36; kill 4121_</text><path d="M4 140 L154 140 L140 152 L18 152 Z" style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"/><path d="M146 86 C180 86 190 120 220 120" style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:5 4"/><text x="158" y="76" style="font-size:10px;fill:var(--muted)">text over the internet</text><g style="fill:var(--surface);stroke:var(--ink);stroke-width:2"><rect x="220" y="60" width="86" height="26" rx="3"/><rect x="220" y="90" width="86" height="26" rx="3"/><rect x="220" y="120" width="86" height="26" rx="3"/><rect x="220" y="150" width="86" height="26" rx="3"/></g><g style="fill:var(--c)"><circle cx="232" cy="73" r="3"/><circle cx="232" cy="103" r="3"/><circle cx="232" cy="133" r="3"/><circle cx="232" cy="163" r="3"/></g><text x="222" y="198" style="font-size:10px;fill:var(--muted)">no screen, no mouse,</text><text x="222" y="212" style="font-size:10px;fill:var(--muted)">only a text prompt</text></svg>'
life:
  - 'Almost every website, app backend and cloud server you use runs on Linux, and engineers reach it through a shell.'
  - 'Android phones are built on the Linux kernel, so the ideas here are inside your pocket too.'
  - 'When a deploy runs automatically after you push code, a script of shell commands is usually doing the work.'
  - 'Shared lab or college servers use permissions so one student cannot read or delete another student''s files.'
  - 'Searching thousands of files for one word in a second (grep) is the same trick as a bank looking through logs for a suspicious transaction.'
models:
  - name: 'Small pieces, loosely joined'
    text: 'Unix tools do one job well and agree on one shared format, text. Big capabilities come from combining small, simple parts. Lego bricks, kitchen knives and UPI apps all work the same way: agree on the connector, and anyone can build something new.'
  - name: 'Least privilege'
    text: 'Give each person and program only the access they need and no more. A leaked key that can only read one folder is a small problem. A leaked key that can do everything is a disaster.'
  - name: 'Fail loudly'
    text: 'A script that stops at the first error is better than one that keeps going and does damage. In finance, medicine and engineering, a visible failure you can fix beats a hidden one that spreads.'
links:
  - leaf: 'cs/processes-and-threads'
    name: 'Processes and threads'
    same: 'Every command you run becomes a process with an id, memory and a parent. The shell is the parent that starts it.'
    differs: 'That lesson explains processes inside the operating system. This one shows how you list, watch and stop them by hand.'
  - leaf: 'cs/file-systems'
    name: 'File systems'
    same: 'Paths, directories and permissions in the shell are the file system''s tree and metadata made visible.'
    differs: 'The file-systems lesson covers how bytes are laid out on disk. The shell only sees names, sizes and permissions.'
  - leaf: 'cs/git-and-the-command-line'
    name: 'Git and the command line'
    same: 'Both are driven by typing short commands and reading text output.'
    differs: 'Git manages the history of your files. The shell manages the machine they live on.'
next:
  q: 'Your app works on your laptop, but on the server a library is missing, or the wrong version is installed. Could we ship the app together with everything it needs, so that it runs the same everywhere?'
  leaf: 'cs/containers'
  name: 'Containers and Docker'
symbols:
  - s: 'r, w, x'
    means: 'read (4), write (2) and execute (1): the three permission bits of a file'
  - s: '|'
    means: 'pipe: send one command''s output into the next command''s input'
  - s: '\$'
    means: 'the shell prompt, shown before each command you type (not part of the command)'
  - s: 'PATH'
    means: 'environment variable listing the folders where the shell looks for programs'
  - s: 'exit code'
    means: 'a number a program returns when it ends: 0 means success, anything else means failure'
  - s: 'pid'
    means: 'process id: the number the system gives each running program'
---

:::hook
q: The server is crawling. You have 30 seconds and one text prompt. What do you check first?
options: ["Reboot it straight away", "List the processes sorted by memory and CPU", "Reinstall the operating system"]
answer: 1
right: Right. Rebooting hides the evidence and fixes nothing. Look first (top or ps), find what is using the machine, then decide. Almost every incident starts with that question: what is running, and what is it doing?
wrong: Those throw away information. The machine is telling you what is wrong, and one command (top) shows which program is hungry. Look before you act.
:::

## Why type instead of click {lvl=1 id=s-why label="Foundations"}

A graphical desktop costs memory and needs a screen. A server in a data centre has neither, and an engineer may run hundreds of them. Typing has two other advantages: it can be **saved** (write the commands in a file and replay them), and it can be **shared** (paste them to a colleague). Clicking cannot do either.

The program that reads your typed line is the **shell**. It splits the line into words, treats the first as a program name, runs it with the rest as arguments, and prints what comes back. The common shell is called bash.

```bash
pwd                 # where am I? prints the current directory
ls -l               # list files, long format
cd /var/log         # go to another directory
echo "hello"        # run a program that prints its argument
```

## Files and permissions {lvl=1 id=s-files label="Foundations"}

Linux keeps everything in one tree that starts at `/` (the root). Your files live under `/home/you`; logs under `/var/log`; programs under `/usr/bin`. Even devices and running processes appear as files. That single idea (**everything is a file**) is why the same tools work on so many things.

Every file has an **owner**, a **group**, and a rule for each of three kinds of people: the owner, the group, and everyone else. Run `ls -l` and you see a string like this:

```bash
$ ls -l report.txt
-rw-r----- 1 asha team 2048 Oct 18 09:30 report.txt
```

Read it in groups of three after the first dash: `rw-` owner can read and write; `r--` the group can only read; `---` everyone else has nothing. Each letter has a number: **r** is 4, **w** is 2, **x** is 1. Add them per group and you get 6, 4, 0, so this file is mode **640**. Read it as: owner 4 plus 2, group 4, others nothing.

```bash
chmod 640 report.txt     # set the mode
chmod +x deploy.sh       # make a script runnable
chown asha:team report.txt
```

:::qc lvl=1
q: A script has mode 755. Who can run it?
options: ["Only the owner", "Everyone who can reach the file", "Nobody, it is not executable"]
answer: 1
right: Right. 7 means the owner has read, write and execute; each 5 means read and execute for the group and for others. Everyone can run it, but only the owner can edit it.
wrong: Work it out digit by digit. 7 = 4+2+1 and 5 = 4+1. The last digit is for others, and it includes the 1 for execute.
:::

## Processes {lvl=2 id=s-processes label="SDE-1"}

Each running program is a **process**, with its own number, the **pid**. When you type a command, the shell starts a new process (a child) for it and waits. You can look at all of them and talk to them.

```bash
ps aux | head            # a snapshot of processes
top                      # live view, press q to quit
sleep 300 &              # run in the background
jobs                     # list background jobs
kill 4121                # politely ask pid 4121 to stop
kill -9 4121             # force it, with no chance to clean up
```

`kill` does not always kill. It **sends a signal**. The default signal (SIGTERM) asks the program to finish and tidy up; signal 9 (SIGKILL) cannot be caught and ends the program at once, which can leave half-written files. Try the polite one first.

Each process ends with an **exit code**: 0 for success, anything else for failure. The shell keeps the last one in `$?`. Scripts and CI systems make decisions based on that number.

```bash
ls /nonexistent; echo $?     # prints 2: failure
ls /tmp; echo $?             # prints 0: success
```

## Pipes and the Unix philosophy {lvl=2 id=s-pipes label="SDE-1"}

Here is the idea that made Unix famous. Write tiny programs that each do **one thing well**, make them read lines of text and write lines of text, and let the user connect them. The connector is the **pipe**, written `|`.

Suppose a web server writes one line per request into `access.log`, with the page address in the seventh word. Which five pages are most popular?

```bash
cut -d' ' -f7 access.log |   # take the 7th word of each line
  sort |                     # group identical pages together
  uniq -c |                  # count each group
  sort -rn |                 # biggest count first
  head -5                    # keep the top five
```

No single tool knows about web traffic. Together they answer the question in one line. The figure shows how each stage hands its output to the next.

:::figure caption="A pipeline. Each small program reads lines, does one job and passes lines on. The log is never loaded as a whole."
<svg viewBox="0 0 360 120" role="img" aria-label="Log file flowing through cut, sort, uniq and head to a short list">
<g style="font-size:11px;text-anchor:middle">
<rect x="6" y="40" width="54" height="38" rx="5" style="fill:var(--surface);stroke:var(--ink)"/><text x="33" y="63" style="fill:var(--ink)">log file</text>
<rect x="84" y="40" width="54" height="38" rx="5" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="111" y="63" style="fill:var(--ink)">cut</text>
<rect x="162" y="40" width="54" height="38" rx="5" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="189" y="63" style="fill:var(--ink)">sort</text>
<rect x="240" y="40" width="54" height="38" rx="5" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c)"/><text x="267" y="63" style="fill:var(--ink)">uniq -c</text>
<rect x="318" y="40" width="40" height="38" rx="5" style="fill:var(--surface);stroke:var(--ink)"/><text x="338" y="63" style="fill:var(--ink)">top 5</text>
<g style="fill:none;stroke:var(--muted);stroke-width:1.6"><path d="M60 59 L82 59"/><path d="M138 59 L160 59"/><path d="M216 59 L238 59"/><path d="M294 59 L316 59"/></g>
<text x="180" y="20" style="fill:var(--muted)">text lines flow left to right</text>
<text x="180" y="104" style="fill:var(--muted)">| joins the output of one to the input of the next</text>
</g></svg>
:::

## Finding things, and reaching other machines {lvl=2 id=s-find label="SDE-1"}

Three tools cover most daily needs. **grep** searches inside files for a pattern; **find** searches for files by name, size or age; **ssh** gives you a shell on another machine over an encrypted connection.

```bash
grep -rn "TimeoutError" /var/log/app/     # which files and lines mention it
grep -c ERROR app.log                      # how many error lines
find . -name "*.py" -mtime -1              # Python files changed in the last day
tail -f app.log                            # follow a log as it grows
ssh asha@203.0.113.10                      # open a shell on the server
scp build.zip asha@203.0.113.10:/tmp/      # copy a file to it
```

`ssh` proves who you are with a **key pair** instead of a password: a private key stays on your laptop, and the matching public key is placed on the server. [Unverified detail: the exact setup file and steps differ by system.]

:::qc lvl=2
q: Which command shows how many lines of app.log contain the word ERROR?
options: ["find ERROR app.log", "grep -c ERROR app.log", "ssh ERROR app.log"]
answer: 1
right: Right. grep searches inside files and -c prints the count of matching lines. find looks for file names, not text inside files.
wrong: Which of these tools looks at the text inside a file? One finds file names, one connects to another machine.
:::

## Environment variables {lvl=2 id=s-env label="SDE-1"}

Programs need settings: where is the database, which language, which folders hold programs. Rather than build these into the code, the system passes them as **environment variables**, named values that every process inherits from its parent.

```bash
echo $HOME                     # /home/asha
echo $PATH                     # folders searched for programs, split by :
export DB_URL="postgres://localhost/shop"   # visible to programs we start
python app.py                  # app.py can read DB_URL
```

The child gets a **copy**. A program that changes its own variables does not change yours. This is also how apps get **secrets** such as passwords and API keys without writing them into code. The same trick returns in containers, where the settings are the only difference between a test and a production copy.

## A few scripts, and writing them safely {lvl=3 id=s-scripts label="SDE-2"}

A **script** is just commands saved in a file. The first line says which program runs it. Here is a backup script with a few safety habits.

```bash
#!/usr/bin/env bash
set -euo pipefail                  # stop on error, unset var, failed pipe
src="${1:?usage: backup.sh DIR}"   # first argument, required
dest="/backups/$(date +%F).tar.gz"
tar -czf "$dest" "$src"            # quotes protect names with spaces
echo "saved $dest"
```

Why the safety line? Without it a script keeps going after a failure. Imagine `cd /app/cache && rm -rf *` written on two lines, with the `cd` failing: the `rm` would run in whatever directory you were in. **Quote** variables (`"$src"`) because a name with a space would otherwise be split into two arguments. Use `$(command)` to capture output into a variable.

A loop and a test, together:

```bash
for f in *.log; do
  if [ ! -s "$f" ]; then       # -s: file exists and is non-empty
    echo "empty: $f"
  fi
done
```

Shell scripts are best for gluing programs together. Once the logic gets complex (many branches, data structures, error handling), switch to Python. [Inference: a widely shared rule of thumb, not a hard line.]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. The shell reads typed commands and launches programs; typed commands can be saved, shared and automated, clicks cannot. {lvl=1}
2. Everything lives in one tree under /. Permissions are read, write and execute for owner, group and others: r=4, w=2, x=1. {lvl=1}
3. Each running program is a process with a pid and an exit code (0 means success); kill sends signals. {lvl=2}
4. Small tools that read and write text, joined by pipes, answer big questions. {lvl=2}
5. grep searches inside files, find searches for files, ssh opens a shell on another machine. {lvl=2}
6. Environment variables carry settings and secrets into programs; children get a copy. {lvl=2}
7. Safe scripts start with set -euo pipefail and quote their variables. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- chmod 777 is a way of hiding a problem, not solving it. Work out who needs what. {lvl=1}
- rm has no recycle bin. Check the path with ls first, especially with rm -rf and a variable in the path. {lvl=1}
- kill -9 gives the program no chance to tidy up. Try plain kill first. {lvl=2}
- Spaces in file names break unquoted variables. Always write `"$var"`. {lvl=3}
- Never put passwords in a command line (they show in process lists and history) or in a script you commit to git. {lvl=2}
- For an unknown machine: top (CPU and memory), df -h (disk space), tail -f on the log. Look before you change anything. {lvl=2}
:::
