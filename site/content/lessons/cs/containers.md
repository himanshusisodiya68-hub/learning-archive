---
title: Containers and Docker
summary: How software gets packed with everything it needs into a sealed box that runs the same on your laptop, a colleague's, and a server.
ncert: []
up_to: SDE-2
builds_on: [Linux and the shell, Processes and threads, Virtual memory]
notes_prompt: Explain to a friend why a container is not a tiny computer, and why shipping the app together with its surroundings ends "works on my machine".
margin:
  - kind: history
    title: History
    text: Docker was released as open source in 2013 and made containers easy for ordinary developers. The Linux features underneath (namespaces and cgroups) had been added to the kernel years earlier. [Unverified]
  - kind: tip
    title: Interview favourite
    text: '"What is the difference between a container and a virtual machine?" Answer in one breath: a VM carries its own operating system kernel; containers share the host''s kernel and are only isolated processes.'
  - kind: olympiad
    title: Design link
    text: Containers make every copy of a service identical, which is the precondition for running many copies, restarting them freely and scaling them up and down. That is the next lesson.
books:
  - { title: "A. Silberschatz et al., Operating System Concepts, or OSTEP", ref: "virtualisation and process isolation chapters [Unverified chapter numbers]" }
  - { title: "Docker documentation", ref: "Dockerfile reference and best practices (online; read the current version)" }
cards:
  - { front: "What does 'works on my machine' really mean?", back: "The app depends on things outside the code (language version, libraries, settings) and the other machine has different ones. The code is the same, the surroundings differ." }
  - { front: "Image versus container?", back: "An image is a frozen, read-only recipe plus ingredients (the files). A container is a running instance of an image. One image can start many containers, like one class and many objects." }
  - { front: "What is a layer, and why does it matter?", back: "Each Dockerfile step adds a read-only layer of file changes. Unchanged layers are reused from cache and shared between images, so rebuilds and downloads are fast." }
  - { front: "How is a container isolated?", back: "Namespaces limit what a process can see (its own process list, network, file tree). Cgroups limit what it can use (CPU, memory). It is still an ordinary process on the host kernel." }
  - { front: "Container or virtual machine: which starts faster and why?", back: "A container, usually in under a second: it starts a process on the running kernel. A VM boots a whole operating system first." }
  - { front: "Why order Dockerfile steps from least to most often changed?", back: "Once a layer changes, every later layer is rebuilt. Install dependencies first (rarely change) and copy your code last (changes every commit)." }
core:
  idea: 'A container packs a program together with its files, libraries and settings into an image, and runs it as an isolated process on a shared kernel. Because the surroundings travel with the program, it behaves the same everywhere it runs.'
  formulas:
    - tex: '\text{image} \xrightarrow{\text{run}} \text{container}_1, \text{container}_2, \dots'
      label: 'One image, as many running containers as you like'
    - tex: '\text{image} = \text{layer}_1 + \text{layer}_2 + \dots + \text{layer}_k'
      label: 'An image is a stack of read-only layers, one per build step'
  conditions:
    - 'The container uses the host''s kernel, so a Linux container needs a Linux kernel underneath'
    - 'Anything written inside a running container is lost when it is removed, unless it is stored in a volume'
    - 'Isolation is by the kernel (namespaces and cgroups), so it is lighter than a virtual machine but not a stronger wall'
  sign: 'A container is not a small virtual machine. It has no kernel of its own. Treating it as a safe sandbox for untrusted code, or as a place to keep data, are the two classic mistakes.'
outcomes:
  - 'Explain what "works on my machine" means and how an image fixes it'
  - 'Tell an image from a container, and a container from a virtual machine'
  - 'Read and write a short Dockerfile and order its steps for fast rebuilds'
  - 'Describe how namespaces and cgroups isolate a process'
  - 'Pass settings in with environment variables and keep data in volumes'
opener:
  story: |
    A friend sends you her small web app. "Works perfectly," she says. You copy the code, run it, and get a red wall of errors. It wants Python 3.12 and you have 3.9. Then a library is missing. Then a setting file you never knew about.

    The code is identical. The only thing that changed is the **machine around it**. Every developer team has lost days to this, and the old joke is a sentence everyone knows: "but it works on my machine!"

    What if, instead of sending only the app, she sent the app **plus the exact room it likes to live in**, sealed in a box that runs the same wherever you open it?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A box labelled app plus libraries plus settings is carried between a laptop and a server and runs the same on both"><rect x="14" y="150" width="82" height="56" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="30" y="182" style="font-size:11px;fill:var(--ink)">laptop</text><rect x="224" y="150" width="82" height="56" rx="6" style="fill:var(--surface);stroke:var(--ink);stroke-width:2"/><text x="240" y="182" style="font-size:11px;fill:var(--ink)">server</text><rect x="104" y="30" width="112" height="84" rx="8" style="fill:color-mix(in srgb,var(--c) 12%,var(--surface));stroke:var(--c);stroke-width:2.5"/><text x="116" y="54" style="font-size:11px;fill:var(--ink)">the app</text><text x="116" y="72" style="font-size:11px;fill:var(--ink)">+ Python 3.12</text><text x="116" y="90" style="font-size:11px;fill:var(--ink)">+ libraries</text><text x="116" y="106" style="font-size:11px;fill:var(--ink)">+ settings</text><path d="M104 100 C70 110 60 130 56 148" style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3"/><path d="M216 100 C250 110 258 130 262 148" style="fill:none;stroke:var(--muted);stroke-width:1.5;stroke-dasharray:4 3"/><text x="96" y="226" style="font-size:10px;fill:var(--muted)">same box, same behaviour</text></svg>'
life:
  - 'Most modern web services you use run inside containers on cloud servers. [Inference: widely reported, individual companies do not all publish details]'
  - 'A new developer joining a team runs one command and gets the whole app, database and tools running, instead of a day of setup.'
  - 'Shipping containers on a port: the crane does not care what is inside because the box has a standard shape. Software containers do the same for programs.'
  - 'Students trying a database or a machine-learning tool can start it in seconds and delete it without leaving traces on their laptop.'
models:
  - name: 'Ship the environment, not just the thing'
    text: 'A recipe that says "bake until done" works only in your oven. A meal kit with exact weights and timings works in anyone''s. When results depend on surroundings, package the surroundings with the work.'
  - name: 'Standard interface, free choice inside'
    text: 'Cranes, trucks and ships handle any container because the outside is standard. A clean outer contract lets the inside change freely. Plugs and sockets, UPI, and USB-C all follow this pattern.'
  - name: 'Cattle, not pets'
    text: 'If a container breaks, you do not nurse it back to health. You delete it and start a fresh identical one. Anything easily replaced can be treated roughly, and that makes the whole system sturdier. [Inference: a popular saying among operations engineers]'
links:
  - leaf: 'cs/processes-and-threads'
    name: 'Processes and threads'
    same: 'A container is really a process (or a few) on the host. You will see it in the host''s process list.'
    differs: 'A normal process sees the whole machine. A containerised process is given a restricted view and limited resources.'
  - leaf: 'cs/virtual-memory'
    name: 'Virtual memory'
    same: 'Both give a program the illusion of having a machine of its own, while the real hardware is shared.'
    differs: 'Virtual memory fakes private memory. Containers fake a private process list, network and file tree on top of it.'
  - leaf: 'cs/linux-and-shell'
    name: 'Linux and the shell'
    same: 'Everything here is driven by shell commands, and environment variables are the main way to configure a container.'
    differs: 'The shell controls one machine as you find it. A container controls the machine as the image describes it.'
next:
  q: 'One container is easy. But a real service runs hundreds, across dozens of servers, and machines die at night. Who starts the replacements, spreads the load and rolls out updates, when no human is awake?'
  leaf: 'cs/kubernetes'
  name: 'Orchestration and Kubernetes'
symbols:
  - s: 'image'
    means: 'a read-only package of files (program, libraries, settings) from which containers are started'
  - s: 'container'
    means: 'a running, isolated instance of an image'
  - s: 'layer'
    means: 'one step''s set of file changes inside an image; layers are cached and shared'
  - s: 'Dockerfile'
    means: 'a short text file of build steps that produces an image'
  - s: 'namespace'
    means: 'a kernel feature that gives a process its own private view of something (processes, network, files)'
  - s: 'cgroup'
    means: 'a kernel feature that limits how much CPU, memory or disk a group of processes may use'
  - s: 'volume'
    means: 'storage that lives outside the container and survives its removal'
---

:::hook
q: Your laptop has 16 GB of memory. How many separate containers, each running its own copy of a small web service, can you plausibly start at once?
options: ["About 3, one per CPU core", "Dozens", "Exactly one, because containers need the whole machine"]
answer: 1
right: Right. A container is only an isolated process, not a whole machine, so a small service may need tens of megabytes. Dozens fit comfortably, and each starts in about a second. The same laptop could hold only a handful of full virtual machines. (Exact numbers depend on the service. [Inference])
wrong: That would be true if each container carried its own operating system. It does not. It shares the host's kernel, which is why containers are so light.
:::

## The problem: your machine is not mine {lvl=1 id=s-problem label="Foundations"}

A program is more than its code. It also needs the right version of a language, the right libraries, certain folders, certain environment variables and certain operating-system settings. Call all of that the **environment**. When the environment differs between your laptop, a teammate's laptop and the production server, the same code behaves differently, and bugs appear that nobody can reproduce.

The old fix was a long setup document ("install this, then that"). Nobody follows a long document exactly. The better fix is to make the environment a **file you can run**.

## Image and container {lvl=1 id=s-image label="Foundations"}

An **image** is a frozen snapshot: your program plus its libraries and files, packed into one read-only bundle. A **container** is what you get when you *run* an image: a live, isolated process started from it. The relationship is that of a recipe and a meal, or a class and its objects. One image can start a hundred identical containers.

```bash
docker pull python:3.12-slim        # download an image
docker run --rm python:3.12-slim python -c "print(2**100)"
docker ps                           # list running containers
```

The second command starts a container, runs one line of Python inside it, prints the answer and removes the container. Python 3.12 did not need to be installed on your machine. The image brought it.

:::qc lvl=1
q: You start 5 containers from the same image. How many images are there?
options: ["5, one per container", "1", "0, containers do not need images"]
answer: 1
right: Right. The image is the shared, read-only recipe. Each container is a separate running copy with its own small writable area.
wrong: Think of a cake recipe and five cakes baked from it. How many recipes are there?
:::

## Container or virtual machine? {lvl=1 id=s-vm label="Foundations"}

A **virtual machine** (VM) pretends to be a whole computer. It runs its own complete operating system, including its own kernel (the core of the operating system), on pretend hardware. Strong separation, but each VM carries gigabytes and takes tens of seconds to boot.

A **container** shares the host's kernel. It adds only the program and its files, and uses kernel features to keep it apart from its neighbours.

| | Virtual machine | Container |
|---|---|---|
| Has its own kernel | Yes | No, shares the host's |
| Typical size | Gigabytes | Megabytes to a few hundred MB |
| Start time | Tens of seconds | About a second or less |
| Isolation | Stronger (separate kernels) | Lighter (one shared kernel) |
| Use it for | Different operating systems, hard separation | Many copies of apps, fast and dense |

[Inference: the size and time figures are typical orders of magnitude, not guarantees.]

:::figure caption="Left: each virtual machine carries a full operating system. Right: containers share one kernel and add only the app and its libraries."
<svg viewBox="0 0 360 170" role="img" aria-label="Two stacks: virtual machines each with their own OS, and containers sharing one kernel">
<g style="font-size:10px;text-anchor:middle">
<text x="90" y="14" style="fill:var(--ink)">Virtual machines</text><text x="270" y="14" style="fill:var(--ink)">Containers</text>
<g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"><rect x="14" y="24" width="72" height="60" rx="3"/><rect x="94" y="24" width="72" height="60" rx="3"/></g>
<g style="fill:var(--surface);stroke:var(--ink)"><rect x="18" y="28" width="64" height="18" rx="2"/><rect x="18" y="50" width="64" height="30" rx="2"/><rect x="98" y="28" width="64" height="18" rx="2"/><rect x="98" y="50" width="64" height="30" rx="2"/></g>
<g style="fill:var(--ink)"><text x="50" y="41">app</text><text x="50" y="68">own OS + kernel</text><text x="130" y="41">app</text><text x="130" y="68">own OS + kernel</text></g>
<rect x="14" y="92" width="152" height="22" rx="3" style="fill:var(--surface);stroke:var(--ink)"/><text x="90" y="107" style="fill:var(--ink)">hypervisor</text>
<rect x="14" y="120" width="152" height="22" rx="3" style="fill:var(--surface);stroke:var(--ink)"/><text x="90" y="135" style="fill:var(--ink)">host hardware</text>
<g style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"><rect x="194" y="24" width="50" height="50" rx="3"/><rect x="250" y="24" width="50" height="50" rx="3"/><rect x="306" y="24" width="46" height="50" rx="3"/></g>
<g style="fill:var(--ink)"><text x="219" y="46">app</text><text x="219" y="62">libs</text><text x="275" y="46">app</text><text x="275" y="62">libs</text><text x="329" y="46">app</text><text x="329" y="62">libs</text></g>
<rect x="194" y="82" width="158" height="22" rx="3" style="fill:var(--surface);stroke:var(--ink)"/><text x="273" y="97" style="fill:var(--ink)">container runtime</text>
<rect x="194" y="108" width="158" height="22" rx="3" style="fill:var(--surface);stroke:var(--ink)"/><text x="273" y="123" style="fill:var(--ink)">one shared kernel</text>
<rect x="194" y="134" width="158" height="22" rx="3" style="fill:var(--surface);stroke:var(--ink)"/><text x="273" y="149" style="fill:var(--ink)">host hardware</text>
</g></svg>
:::

## The Dockerfile and layers {lvl=2 id=s-dockerfile label="SDE-1"}

You describe an image in a short text file called a **Dockerfile**. Each line is a build step.

```dockerfile
FROM python:3.12-slim          # start from a ready-made base image
WORKDIR /app
COPY requirements.txt .        # copy only the dependency list first
RUN pip install -r requirements.txt
COPY . .                       # then copy the code
CMD ["python", "app.py"]       # what to run when the container starts
```

```bash
docker build -t myapp:1.0 .    # build the image from this folder
docker run -d -p 8080:8000 myapp:1.0   # run it; host port 8080 to container port 8000
```

Each step creates a **layer**, a read-only record of the files that step changed. Docker **caches** layers. If a step and everything before it are unchanged, the old layer is reused. That is why the order matters. Dependencies change rarely and code changes constantly, so we install dependencies first. After a one-line code edit, only the last `COPY` and later steps are redone, and the slow `pip install` is skipped. If we had copied the whole project first, every edit would reinstall everything.

Layers are also **shared**. Twenty images built on `python:3.12-slim` store that base layer once, not twenty times.

:::qc lvl=2
q: You edit one line of app.py. In the Dockerfile above, which steps are rebuilt?
options: ["All of them, from FROM", "Only the COPY . . step and what follows it", "None, Docker ignores code changes"]
answer: 1
right: Right. The base image, the dependency list and the pip install layers are unchanged, so they come from the cache. The change starts at the copy of the code.
wrong: Docker reuses each layer as long as that step and all earlier steps are unchanged. Where does the first change appear?
:::

## Settings, data and volumes {lvl=2 id=s-state label="SDE-1"}

The writable area inside a running container is **thrown away** when the container is removed. That is a feature (every start is clean) and a trap (your database is gone). Two rules follow.

**Settings travel in from outside**, as environment variables, so the same image can run in testing and production with different databases. Never bake passwords into an image: anyone who can read the image can read them.

**Data lives in volumes**, storage managed outside the container that survives it.

```bash
docker run -d --name db \
  -e POSTGRES_PASSWORD=changeme \
  -v dbdata:/var/lib/postgresql/data \
  postgres:16
docker logs db            # the container's output is its log
docker exec -it db bash   # open a shell inside it
```

A container should do **one job**, write its logs to standard output (so tools can collect them), and be safe to kill and restart at any moment.

## How the isolation really works {lvl=3 id=s-isolation label="SDE-2"}

There is no "container" object in the Linux kernel. A container is an ordinary process with two kinds of restriction.

**Namespaces limit what it can see.** Give a process its own *process-id namespace* and it sees only its own children (its first process thinks it is pid 1). Give it its own *network namespace* and it has its own network cards and ports. A *mount namespace* gives it its own file tree built from the image. There are also namespaces for hostname, inter-process communication and user ids. Namespaces are the walls of a room: you cannot see into the next room.

**Control groups (cgroups) limit what it can use.** You can cap memory at 256 MB or CPU at half a core. A program that leaks memory is killed at its cap instead of taking down the whole machine.

```bash
docker run --memory=256m --cpus=0.5 myapp:1.0
```

Because every container shares one kernel, a kernel bug can in principle let a process escape. For untrusted code, a VM (or a VM-backed sandbox) is the safer wall. Running the app as a non-root user inside the container reduces the risk further. [Unverified detail: the list of kernel namespaces and the exact limits vary across kernel versions.]

## Good habits for images {lvl=3 id=s-habits label="SDE-2"}

- **Small base images** (such as `-slim`) download faster and have less to attack.
- **Pin versions** (`python:3.12-slim`, not `latest`), or a rebuild next month may quietly give you a different environment.
- **One process per container**; scale by running more containers.
- **Run as a non-root user** and keep secrets out of the image.
- **Add a `.dockerignore`** so that your `.git` folder and local junk are not copied into the build.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. "Works on my machine" happens when the surroundings differ; an image packs the surroundings with the app. {lvl=1}
2. An image is a read-only package; a container is a running instance of it. One image, many containers. {lvl=1}
3. A container shares the host's kernel; a VM carries its own. Containers are lighter, VMs are separated more strongly. {lvl=1}
4. A Dockerfile lists build steps; each step is a cached, shared layer, so put rarely changing steps first. {lvl=2}
5. Container storage is temporary: pass settings in as environment variables, keep data in volumes. {lvl=2}
6. Namespaces limit what a process can see; cgroups limit what it can use. A container is just a restricted process. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- A container is not a virtual machine: no kernel of its own, and not a hard security boundary. {lvl=1}
- Data written inside a container disappears with it. Use a volume or an external database. {lvl=2}
- Putting COPY . . before the dependency install makes every code edit reinstall everything. {lvl=2}
- Never bake passwords or keys into an image or commit them in a Dockerfile; pass them in at run time. {lvl=2}
- The tag latest moves. Pin the version so builds are repeatable. {lvl=2}
- Running as root inside the container makes a break-out far worse. {lvl=3}
:::
