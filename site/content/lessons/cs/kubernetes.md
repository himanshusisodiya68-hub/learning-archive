---
title: Orchestration and Kubernetes
summary: How a system keeps hundreds of containers alive across many machines, replacing the dead and rolling out updates while everyone is asleep.
ncert: []
up_to: SDE-3
builds_on: [Containers and Docker, Linux and the shell, Scalability]
notes_prompt: Explain to a friend what "desired state" means, and why a system that keeps checking and correcting itself is more reliable than one that follows a list of steps.
margin:
  - kind: history
    title: History
    text: Kubernetes was released as open source by Google in 2014 and was inspired by Google's internal cluster managers (Borg, and later Omega). The name is Greek for "helmsman". [Unverified]
  - kind: tip
    title: Interview favourite
    text: '"What happens when a pod crashes?" The answer is the reconciliation loop: a controller sees fewer pods than the desired count and creates a new one. Nobody gets paged for that.'
  - kind: olympiad
    title: Design link
    text: The "declare the goal, let controllers converge" idea appears in thermostats, cruise control and database schedulers. It is the control-loop idea from engineering, applied to servers.
books:
  - { title: "B. Burns, J. Beda, K. Hightower, Kubernetes: Up and Running", ref: "pods, replica sets, deployments and services chapters [Unverified chapter numbers]" }
  - { title: "Kubernetes documentation", ref: "Concepts: Workloads, Services, Cluster Architecture (online; read the current version)" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "background on failures and replication, Part II" }
cards:
  - { front: "What does an orchestrator do that a human with SSH cannot?", back: "It continuously compares what you asked for with what is actually running and fixes the difference, around the clock, across hundreds of machines." }
  - { front: "What is the reconciliation loop?", back: "Observe the actual state, compare it with the desired state, act to close the gap, repeat forever. It is how Kubernetes heals itself." }
  - { front: "Pod, Deployment, Service: one line each?", back: "Pod: one or more containers that run together on one machine. Deployment: 'keep N copies of this pod, updated safely'. Service: a stable address that spreads traffic over the current pods." }
  - { front: "Why do pods need a Service in front of them?", back: "Pods are temporary and their IP addresses change whenever they are replaced. A Service gives clients one stable name and finds the live pods by label." }
  - { front: "Liveness versus readiness probe?", back: "Liveness asks 'is it stuck? restart it'. Readiness asks 'can it take traffic now?'. A not-ready pod is kept out of the Service but not killed." }
  - { front: "When is Kubernetes overkill?", back: "A handful of services with modest traffic and a small team. The cluster itself needs learning, upgrades and money. A single server, or a managed platform, may do the job with far less effort." }
core:
  idea: 'You tell Kubernetes the state you want (for example, "run 5 copies of this container"). Controllers then keep comparing that wish with reality and correct any difference, so crashed copies are replaced, load is spread and updates roll out without a person doing each step.'
  formulas:
    - tex: '\text{actual state} \;\to\; \text{compare with desired state} \;\to\; \text{act} \;\to\; \text{repeat}'
      label: 'The reconciliation loop'
    - tex: '\text{desired pods} = \left\lceil \text{current pods} \times \frac{\text{current metric}}{\text{target metric}} \right\rceil'
      label: 'How the horizontal autoscaler picks a count'
  conditions:
    - 'Applications run in containers and tolerate being stopped and replaced at any time'
    - 'Pods are interchangeable: any copy can serve any request (state lives in a database or volume)'
    - 'The control plane itself stays available (it holds the desired state)'
  sign: 'Self-healing replaces a crashed pod, but it does not fix the bug that crashes it. A pod that starts, fails and is restarted again and again is shown as CrashLoopBackOff: read the logs.'
outcomes:
  - 'Explain why running containers at scale needs an orchestrator, and what desired state means'
  - 'Describe a pod, a Deployment and a Service and how they fit together'
  - 'Read a short Deployment and Service manifest and say what it asks for'
  - 'Trace what Kubernetes does when a pod crashes, a node dies or load rises'
  - 'Compute rolling-update limits and autoscaler targets, and judge when Kubernetes is overkill'
opener:
  story: |
    A food-delivery app runs on 300 containers spread over 40 servers. At 8 p.m. on a Friday, one server's power supply fails. Thirty containers vanish at once. Orders keep coming in, and the app does not even blink.

    Nobody woke up. No engineer typed a command. A few seconds later, thirty fresh copies were running on healthy machines, and the traffic had already been steered away from the dead ones.

    A container can be started with one command, but who notices thirty are missing, and who decides where the replacements go?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A control loop box watches three servers; one server fails and its containers reappear on the others"><rect x="85" y="14" width="150" height="40" rx="8" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="160" y="32" style="font-size:11px;fill:var(--ink);text-anchor:middle">want: 6 copies</text><text x="160" y="46" style="font-size:10px;fill:var(--muted);text-anchor:middle">compare, fix, repeat</text><g style="fill:var(--surface);stroke:var(--ink);stroke-width:2"><rect x="12" y="110" width="90" height="90" rx="6"/><rect x="115" y="110" width="90" height="90" rx="6"/><rect x="218" y="110" width="90" height="90" rx="6" style="stroke:var(--bad);stroke-dasharray:5 4"/></g><g style="fill:var(--c)"><rect x="22" y="122" width="30" height="20" rx="3"/><rect x="62" y="122" width="30" height="20" rx="3"/><rect x="125" y="122" width="30" height="20" rx="3"/><rect x="165" y="122" width="30" height="20" rx="3"/></g><g style="fill:none;stroke:var(--c);stroke-width:2;stroke-dasharray:4 3"><rect x="22" y="152" width="30" height="20" rx="3"/><rect x="125" y="152" width="30" height="20" rx="3"/></g><g style="fill:none;stroke:var(--bad);stroke-width:1.5"><rect x="228" y="122" width="30" height="20" rx="3"/><rect x="268" y="122" width="30" height="20" rx="3"/><path d="M228 122 L258 142 M258 122 L228 142 M268 122 L298 142 M298 122 L268 142"/></g><path d="M160 54 L57 108 M160 54 L160 108 M160 54 L263 108" style="fill:none;stroke:var(--muted);stroke-width:1.2"/><text x="226" y="218" style="font-size:10px;fill:var(--bad)">server died</text><text x="14" y="218" style="font-size:10px;fill:var(--muted)">dashed: replacements started</text></svg>'
life:
  - 'Large online services (shopping, streaming, ride-hailing) run many identical copies of each service behind one address, so a failed copy goes unnoticed. [Inference: common practice, individual companies rarely publish details]'
  - 'During a sale or a cricket final, traffic jumps several times. Extra copies are started automatically and removed when the rush ends.'
  - 'Apps get new versions during the day without a "down for maintenance" page, because copies are replaced a few at a time.'
  - 'A thermostat does not follow a list of steps. It compares the room with your set temperature and corrects the difference all day. Kubernetes does the same for servers.'
models:
  - name: 'Declare the goal, not the steps'
    text: 'Telling a taxi "go to the airport" beats dictating every turn, because the driver can adapt to the traffic. Systems described by the goal can repair themselves. Systems described by a script break when reality surprises them.'
  - name: 'Control loops'
    text: 'Measure, compare with the target, correct, repeat. This is a thermostat, cruise control, a pilot, a central bank adjusting rates. Look for a loop whenever something stays on target without anybody holding it there.'
  - name: 'Pay for the complexity you need'
    text: 'A truck is powerful and also needs a driver, fuel and parking. For a short errand a bicycle is better. Every tool carries running costs. Choose the smallest one that solves the actual problem.'
links:
  - leaf: 'cs/containers'
    name: 'Containers and Docker'
    same: 'Kubernetes runs containers. Every pod is made of the same images and settings you built there.'
    differs: 'Docker starts a container on one machine. Kubernetes decides on which of many machines, and keeps the right number running.'
  - leaf: 'cs/scalability'
    name: 'Scalability'
    same: 'Scaling out means adding more identical copies behind a load balancer, which is what a Deployment and a Service do.'
    differs: 'Scalability is the idea. Kubernetes is one tool that automates it.'
  - leaf: 'cs/reliability-and-sre'
    name: 'Reliability, failures and on-call'
    same: 'Both assume parts will fail and design so that the whole survives.'
    differs: 'Self-healing handles the routine failures automatically. On-call humans handle what automation cannot.'
next:
  q: 'Kubernetes needs machines to run on, and renting a hundred servers for an evening was once unthinkable. Where do those machines, disks and networks actually come from, and how do you pay for them by the minute?'
  leaf: 'cs/cloud-basics'
  name: 'The cloud: compute, storage, networking'
symbols:
  - s: 'cluster'
    means: 'a set of machines (nodes) managed together as one pool'
  - s: 'node'
    means: 'one machine in the cluster that runs pods'
  - s: 'pod'
    means: 'the smallest unit Kubernetes runs: one or more containers sharing a network address and storage'
  - s: 'Deployment'
    means: 'a declaration of how many copies of a pod to keep running and how to update them'
  - s: 'Service'
    means: 'a stable address that spreads traffic over the pods matching a label'
  - s: 'desired state'
    means: 'what you asked for (for example, 3 replicas), stored by the control plane'
  - s: '\lceil x \rceil'
    means: 'round x up to the next whole number (ceiling)'
---

:::hook
q: Three copies of your web app are running. One server dies and two copies go with it. Who starts the replacements?
options: ["You, after the alert wakes you up", "Kubernetes, because a controller notices 1 pod where 3 were requested", "Nobody, the app is simply down until the next deploy"]
answer: 1
right: Right. You declared "3 replicas". A controller sees 1, so it asks the scheduler to start 2 more on healthy machines. The loop runs all the time, which is why nobody needs to be awake.
wrong: A person is far too slow at 3 a.m. The point of an orchestrator is that the wish "3 copies" is stored, and software keeps comparing it with the truth.
:::

## The problem: too many boxes for a human {lvl=1 id=s-problem label="Foundations"}

One container on one laptop is easy. A real service is different. It might need 50 copies (to handle the traffic), spread over 10 machines (so one failure does not stop it), updated several times a day (without downtime), and talking to a dozen other services. Servers fail, load changes, and new versions arrive. A person with a terminal cannot keep that straight.

You could write a script: "start 50 containers, one on each of 10 machines". But a script describes steps taken *once*. After a machine dies, the script has no idea. What you need is something that keeps watching and keeps correcting. That is an **orchestrator**, and the common one is **Kubernetes**.

## Desired state and the reconciliation loop {lvl=1 id=s-loop label="Foundations"}

The core idea is simple. You do not tell Kubernetes *what to do*. You tell it *what you want*: "5 copies of this container, always". This is the **desired state**. Kubernetes stores it. Programs called **controllers** then run the same loop forever:

1. Look at the **actual state** (how many copies are really running?).
2. Compare with the **desired state** (5).
3. If they differ, **act** to close the gap (start or stop copies).
4. Repeat.

In pseudo-code, the whole idea is this short:

```python
# a sketch of a controller, not real Kubernetes code
while True:
    actual = count_running_pods("web")
    desired = read_desired_replicas("web")     # 5
    if actual < desired:
        start_pods(desired - actual)
    elif actual > desired:
        stop_pods(actual - desired)
    wait_a_moment()
```

Read it as: keep counting, and whenever the count is wrong, fix it. A pod crashes, a server dies, someone deletes a pod by mistake: all look the same to the loop. The count is below the wish, so a replacement is started. This is **self-healing**, and it is not a special feature added on top. It is just what the loop does.

:::qc lvl=1
q: You change the desired count from 5 to 8. What does the controller do?
options: ["Nothing until you restart Kubernetes", "Starts 3 more pods", "Deletes all 5 and starts 8 new ones"]
answer: 1
right: Right. The gap is 8 minus 5 = 3, so it starts 3 more. It only closes the difference.
wrong: The controller compares the wish with reality and acts on the difference. How big is the difference?
:::

## The building blocks {lvl=2 id=s-blocks label="SDE-1"}

A **cluster** is a pool of machines called **nodes**. Four objects do most of the everyday work.

- **Pod**: the smallest unit. One container (sometimes a few that must stay together) with one shared network address. Pods are **temporary**: when one dies it is replaced by a new one, with a new address.
- **Deployment**: "keep N copies of this pod, and update them safely". It creates the pods and replaces them when they fail.
- **Service**: because pod addresses keep changing, a Service gives clients one **stable name and address**, and spreads the traffic over whichever pods currently match a **label** (like `app: web`).
- **Namespace**, **ConfigMap** and **Secret**: folders to separate teams, plus settings and passwords passed in from outside, just as environment variables were in the container lesson.

You write each object as a short YAML file. This one says "keep 3 copies of this image":

```yaml
apiVersion: apps/v1
kind: Deployment
metadata: { name: web }
spec:
  replicas: 3
  selector: { matchLabels: { app: web } }
  template:                      # the pod blueprint
    metadata: { labels: { app: web } }
    spec:
      containers:
        - name: web
          image: myapp:1.0
          ports: [{ containerPort: 8000 }]
```

And this gives them a stable front door:

```yaml
apiVersion: v1
kind: Service
metadata: { name: web }
spec:
  selector: { app: web }         # any pod with this label
  ports: [{ port: 80, targetPort: 8000 }]
```

```bash
kubectl apply -f web.yaml        # tell Kubernetes the desired state
kubectl get pods                 # see what is actually running
kubectl scale deployment web --replicas=5
kubectl logs deploy/web          # why is it unhappy?
```

:::figure caption="A Service fronts a Deployment. The Deployment keeps three pods running across nodes; the Service sends each request to one of the live pods."
<svg viewBox="0 0 360 180" role="img" aria-label="Clients reach a Service which spreads requests to three pods owned by a Deployment on two nodes">
<g style="font-size:10px;text-anchor:middle">
<rect x="6" y="66" width="52" height="40" rx="5" style="fill:var(--surface);stroke:var(--ink)"/><text x="32" y="90" style="fill:var(--ink)">clients</text>
<rect x="68" y="66" width="102" height="40" rx="5" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--c)"/><text x="119" y="84" style="fill:var(--ink)">Service</text><text x="119" y="98" style="fill:var(--muted)">stable address</text>
<rect x="176" y="16" width="176" height="148" rx="8" style="fill:none;stroke:var(--muted);stroke-dasharray:5 4"/><text x="264" y="30" style="fill:var(--muted)">Deployment: replicas = 3</text>
<rect x="190" y="40" width="70" height="56" rx="5" style="fill:var(--surface);stroke:var(--ink)"/><text x="225" y="54" style="fill:var(--muted)">node A</text>
<rect x="268" y="40" width="70" height="56" rx="5" style="fill:var(--surface);stroke:var(--ink)"/><text x="303" y="54" style="fill:var(--muted)">node B</text>
<g style="fill:color-mix(in srgb,var(--c) 22%,var(--surface));stroke:var(--c)"><rect x="196" y="62" width="26" height="24" rx="3"/><rect x="228" y="62" width="26" height="24" rx="3"/><rect x="284" y="62" width="26" height="24" rx="3"/></g>
<g style="fill:var(--ink)"><text x="209" y="83">pod</text><text x="241" y="83">pod</text><text x="297" y="83">pod</text></g>
<g style="fill:none;stroke:var(--muted);stroke-width:1.5"><path d="M58 86 L66 86"/><path d="M170 70 L195 66"/><path d="M170 72 L227 65"/><path d="M170 74 L283 65"/></g>
<text x="264" y="140" style="fill:var(--muted)">pod dies: a new one is made</text>
</g></svg>
:::

## Scaling, updating and healing {lvl=2 id=s-ops label="SDE-1"}

**Scaling.** Change `replicas` and the loop does the rest. A **horizontal autoscaler** can change it for you, by watching a metric such as CPU use. Its rule is a single line:

$$\text{desired pods} = \left\lceil \text{current pods} \times \frac{\text{current metric}}{\text{target metric}} \right\rceil$$

Read it as: scale the number of pods in proportion to how far the metric is from its target, and round up. With 4 pods running at 90% CPU against a target of 60%, you get $\lceil 4 \times 90/60 \rceil = \lceil 6 \rceil = 6$ pods.

**Rolling updates.** Changing the image in a Deployment does not stop everything. Kubernetes starts a few new pods, waits until they are ready, then retires a few old ones, and repeats. Two settings control the pace: **maxSurge** (how many extra pods are allowed above the desired count) and **maxUnavailable** (how many may be missing). With 10 replicas and 25% for both, up to $\lceil 2.5 \rceil = 3$ extra pods may exist (surge rounds up) and up to $\lfloor 2.5 \rfloor = 2$ may be missing (unavailable rounds down). [Unverified: the rounding directions are as I recall the documentation; check the current docs.]

```bash
kubectl set image deployment/web web=myapp:1.1   # start a rolling update
kubectl rollout status deployment/web            # watch it progress
kubectl rollout undo deployment/web              # go back if it goes wrong
```

**Health probes.** Two small checks tell Kubernetes about each pod. A **liveness probe** asks "are you stuck?", and a failure means restart it. A **readiness probe** asks "can you serve traffic now?", and a failure means keep it out of the Service for a while but leave it alone. Without a readiness probe, users may be sent to a pod that is still warming up.

:::qc lvl=2
q: A pod is slow to load its data at start. Which probe stops traffic reaching it before it is ready?
options: ["Liveness probe", "Readiness probe", "Neither, Services always wait"]
answer: 1
right: Right. Readiness decides whether the pod is in the Service's list. Failing it removes the pod from traffic without killing it.
wrong: One probe restarts a stuck pod; the other only decides whether the pod receives requests. Which is which?
:::

## Inside the cluster {lvl=3 id=s-inside label="SDE-2"}

The **control plane** is the brain of the cluster. Its parts (names as in the Kubernetes documentation):

| Part | Job |
|---|---|
| API server | The front door. Every command and every controller talks to it. |
| etcd | A small, consistent key-value store that holds the desired state. |
| Scheduler | Picks a node for each new pod, based on the pod's requests and node space. |
| Controller manager | Runs the control loops (Deployments, nodes, and others). |
| kubelet (on each node) | Starts the containers the node was assigned and reports their health. |

No part tells another what to do step by step. They all watch the API server for changes and each reacts to its own piece. That is why the system keeps working when pieces restart.

Each container should declare **requests** (what the scheduler reserves for it) and **limits** (the most it may use, enforced with the cgroups from the container lesson):

```yaml
resources:
  requests: { cpu: "250m", memory: "256Mi" }   # 250m = a quarter of one core
  limits:   { cpu: "500m", memory: "512Mi" }
```

Go over the memory limit and the container is killed and restarted. Set requests too low and a node gets crowded, too high and you pay for machines that sit idle.

Pods are interchangeable only if they hold no precious state. For databases, Kubernetes offers **StatefulSets** (stable names and disks per pod), but running a database well is still hard, and many teams use a managed database instead. [Inference: common industry advice.]

## Running it for real {lvl=4 id=s-real label="SDE-3"}

Kubernetes moves problems, it does not remove them. Questions a senior engineer asks:

- **Who runs the control plane?** A self-built cluster means you handle upgrades, certificates and etcd backups. Most teams choose a **managed** service from a cloud provider and run only their workloads.
- **What is the blast radius?** One bad change to a shared cluster can hurt every team. Namespaces, quotas, access rules (RBAC) and separate clusters for production and testing limit the damage.
- **How does a change reach the cluster?** Store the YAML in git and let a pipeline (or a tool that syncs the cluster to the repository) apply it. The repository becomes the desired state, with history and review. This is often called GitOps.
- **Can you see inside?** Logs, metrics and traces need to be collected, because pods come and go (a later lesson).
- **What does it cost?** Nodes are rented machines. Requests that are too generous waste money, and idle capacity is billed all the same.

**When is Kubernetes overkill?** If you have a handful of services, steady traffic and a small team, the cluster costs more attention than it saves. A single server running containers with a process manager, or a platform that runs your container for you, does the job with far less to learn and maintain. Kubernetes starts to pay off when you have many services and teams, uneven traffic, and an ongoing need for safe rollouts and self-healing. [Inference: a judgement, not a measured threshold.]

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. At scale, someone must start, replace, place and update containers around the clock; that is an orchestrator's job. {lvl=1}
2. You declare the desired state; controllers loop forever, comparing it with the actual state and closing the gap. {lvl=1}
3. Self-healing is just the reconciliation loop doing its normal work. {lvl=1}
4. Pods are temporary; a Deployment keeps N of them; a Service gives them one stable address. {lvl=2}
5. Scaling, rolling updates and probes are all adjustments to the same declared state. {lvl=2}
6. The control plane (API server, etcd, scheduler, controllers) holds and enforces the state; kubelets run the pods. {lvl=3}
7. Kubernetes adds operating cost: use a managed cluster, limit the blast radius, and skip it when a simpler platform suffices. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Self-healing replaces a crashed pod but does not fix the bug. Repeated restarts show as CrashLoopBackOff: read the logs first. {lvl=1}
- Never keep important data inside a pod's own storage; it goes when the pod goes. {lvl=2}
- Without a readiness probe, users get sent to pods that are not ready yet. {lvl=2}
- Do not use the tag latest in a Deployment; pin versions so a rollback means something. {lvl=2}
- Missing resource requests and limits let one greedy pod starve its neighbours. {lvl=3}
- Reaching for Kubernetes on day one of a small project is the commonest mistake of all. {lvl=4}
:::
