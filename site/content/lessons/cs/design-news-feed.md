---
title: Designing a news feed
summary: 'How an app builds your personal post list in a blink, doing the work when friends post, not when you look.'
ncert: []
up_to: SDE-3
builds_on: [Caching, Message queues and events, Partitioning (sharding), Hash tables]
notes_prompt: Explain to a friend why a feed is usually built when your friends post rather than when you open the app, and what goes wrong for accounts with millions of followers.
margin:
  - kind: history
    title: A famous trade-off
    text: 'Twitter engineers have publicly described moving between building timelines on read and on write, and the book Designing Data-Intensive Applications uses that example to teach the trade-off. The exact numbers change over the years, so treat any you hear as [Unverified].'
  - kind: tip
    title: Interview favourite
    text: 'The "celebrity problem" is the expected follow-up. Say "hybrid: push for ordinary accounts, pull for the very popular ones, merge at read time" and you have answered it.'
  - kind: olympiad
    title: Same idea, different field
    text: 'Pushing the work to the time of writing is called precomputation. Spreadsheets, search indexes and printed timetables all do it: pay once, when the data changes, so every reader is fast.'
books:
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "Ch. 1 describes the social-network timeline example (fan-out); Ch. 11 on streams and events [Unverified chapter numbers]" }
  - { title: "A. Xu, System Design Interview", ref: "chapter on designing a news feed system [Unverified]" }
cards:
  - { front: "Fan-out on write versus fan-out on read?", back: "On write: when someone posts, copy the post id into every follower's timeline, so reading is one cheap fetch. On read: store posts once, and build the list by querying everyone you follow when you open the app." }
  - { front: "What is the celebrity problem?", back: "An account with 100 million followers makes one post cost 100 million timeline writes, delaying everyone and wasting work. Fix: do not push such accounts; merge their recent posts in at read time (hybrid)." }
  - { front: "Why does offset pagination break in a live feed?", back: "New posts arrive at the top, so 'skip the first 20' shifts the list and repeats or skips items. Use a cursor: 'items older than this (time, id)'." }
  - { front: "What are the stages of ranking a feed?", back: "Gather candidates, score them (engagement, recency, closeness), remove or demote unwanted ones, then show the top few. Cheap scoring first, expensive scoring on fewer items." }
  - { front: "How can a feed degrade gracefully?", back: "If the ranking service is slow or down, show a plain newest-first list from the timeline cache. A worse feed beats an error page." }
  - { front: "What should a timeline store?", back: "Only post ids (about 8 bytes each). The text and images are fetched afterwards from a post store by id, so one post is stored once, not copied into millions of lists." }
core:
  idea: 'A feed is a list that is expensive to build and cheap to read, or cheap to build and expensive to read. Most systems build it ahead of time when a post is made (fan-out on write), except for accounts so popular that pushing is too costly, which are merged in when you open the app (hybrid).'
  formulas:
    - tex: 'W = P \cdot f'
      label: 'Timeline writes per day: posts per day times average followers'
    - tex: '\text{score} = e \cdot 2^{-t/h}'
      label: 'A simple ranking score: engagement e fading with age t, halving every h'
  conditions:
    - 'Reads of the feed are far more frequent than posts, so paying at write time is worth it'
    - 'Most accounts have a modest number of followers (hundreds, not millions)'
    - 'A feed that is a few seconds stale is acceptable, apart from your own posts'
    - 'Timelines hold post ids only; the post itself lives in one place'
  sign: 'The commonest mistake is to push a celebrity post to every follower. One post becomes tens of millions of writes.'
outcomes:
  - 'Compare fan-out on write and on read using numbers, and say when each wins'
  - 'Explain the celebrity problem and the hybrid design that solves it'
  - 'Paginate a changing feed with a cursor instead of an offset'
  - 'Describe a simple ranking score and a staged ranking pipeline'
  - 'Plan graceful degradation, caching and read-your-own-writes for a feed'
opener:
  story: |
    You open the app. In under a second you see forty posts from the people you follow: your cousin's holiday, a cricketer's match photo, a school friend's new haircut. Yours is a different list from anyone else's in the world, and half a billion other people are opening theirs at the same time.

    Think about what that means. Your list could be built when you open the app: ask all two hundred people you follow for their latest post, merge, sort. Or it could be built earlier, at the moment each friend posted, by quietly dropping a note into your inbox. Either way, someone does a lot of work. The only question is when.

    And then there is the cricketer, who has a hundred million followers. When he posts a photo, whose inbox gets the note?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="One post is copied into many mailboxes of followers, with a large star account sending to a crowd"><circle cx="60" cy="70" r="20" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface));stroke:var(--c);stroke-width:2"/><text x="52" y="75" style="font-size:12px;fill:var(--ink)">you</text><g style="stroke:var(--c);stroke-width:1.5;fill:none"><path d="M80 66 L190 40"/><path d="M80 70 L190 80"/><path d="M80 74 L190 120"/></g><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><rect x="190" y="28" width="36" height="24" rx="3"/><rect x="190" y="68" width="36" height="24" rx="3"/><rect x="190" y="108" width="36" height="24" rx="3"/></g><text x="196" y="44" style="font-size:9px;fill:var(--muted)">inbox</text><text x="196" y="84" style="font-size:9px;fill:var(--muted)">inbox</text><text x="196" y="124" style="font-size:9px;fill:var(--muted)">inbox</text><text x="236" y="84" style="font-size:10px;fill:var(--muted)">200 notes</text><path d="M60 100 V170" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:3 3;fill:none"/><circle cx="60" cy="190" r="26" style="fill:color-mix(in srgb,var(--bad) 15%,var(--surface));stroke:var(--bad);stroke-width:2"/><text x="40" y="194" style="font-size:11px;fill:var(--ink)">star</text><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1"><rect x="150" y="165" width="12" height="9"/><rect x="166" y="165" width="12" height="9"/><rect x="182" y="165" width="12" height="9"/><rect x="198" y="165" width="12" height="9"/><rect x="214" y="165" width="12" height="9"/><rect x="230" y="165" width="12" height="9"/><rect x="150" y="178" width="12" height="9"/><rect x="166" y="178" width="12" height="9"/><rect x="182" y="178" width="12" height="9"/><rect x="198" y="178" width="12" height="9"/><rect x="214" y="178" width="12" height="9"/><rect x="230" y="178" width="12" height="9"/></g><path d="M88 190 H146" style="stroke:var(--bad);stroke-width:2;fill:none"/><text x="150" y="212" style="font-size:10px;fill:var(--bad)">100 million notes?</text></svg>'
life:
  - 'A newspaper boy drops the paper at each house before you wake (fan-out on write); walking to the shop to read the day''s papers is fan-out on read.'
  - 'WhatsApp group messages are delivered to each member''s device inbox when sent, not fetched from the group when you open the chat. [Inference: general behaviour, internals not public]'
  - 'YouTube subscriptions, Instagram, X (Twitter), LinkedIn and Facebook all show a personal, ranked list built from the accounts you follow.'
  - 'A school notice board: teachers pin once, every student reads (cheap write, cheap read, because it is one shared list). Personal feeds lose this because every reader sees a different list.'
models:
  - name: 'Pay at write or pay at read'
    text: 'Any information system must decide when to do the work. Precompute and reads are cheap but writes are expensive; compute on demand and the reverse. Pick by which happens more often, and by whether anyone ever needs the work done at all.'
  - name: 'Exceptions need their own path'
    text: 'A rule that suits 99.9% of cases can break on the extreme 0.1%. Design a different path for the outliers (very large accounts, very large orders, very rare diseases) instead of bending the main one.'
  - name: 'Degrade, do not fall over'
    text: 'When a part fails, offer a simpler version of the service instead of an error. Lifts that become slower, railways that run fewer trains and hospitals that triage all work this way.'
links:
  - leaf: 'cs/caching'
    name: 'Caching'
    same: 'A timeline cache is precomputed answers kept in fast memory so reads are cheap.'
    differs: 'A normal cache holds copies of data that exists elsewhere; a timeline is built and stored on purpose, and rebuilding it is costly.'
  - leaf: 'cs/message-queues'
    name: 'Message queues and events'
    same: 'The fan-out job is queued and done by many workers in the background, so the poster does not wait.'
    differs: 'The queue delivers each job once to a worker; here one post creates a huge number of small jobs.'
  - leaf: 'cs/partitioning'
    name: 'Partitioning'
    same: 'Timelines are spread over machines by user id, so each machine holds a share.'
    differs: 'A very popular account makes one partition "hot"; the usual hashing cannot spread a single key.'
  - leaf: 'cs/design-username-check'
    name: 'Checking a username'
    same: 'Both split a request into a cheap, stale-tolerant path and an exact one.'
    differs: 'A feed has no single exact answer: the order is a judgement, so stale and approximate are acceptable almost everywhere.'
next:
  q: 'All these layers (cache, queue, ranking service, database) each fail sometimes. A system with ten parts that each work 99.9% of the time works less than that. How do the companies that stay up for years do it, and how do they learn when something breaks?'
  leaf: 'cs/reliability-and-sre'
  name: 'Reliability, failures and on-call'
symbols:
  - s: 'P'
    means: 'posts made per day (count per day)'
  - s: 'f'
    means: 'average number of followers of a poster (count)'
  - s: 'W'
    means: 'timeline writes per day caused by posting (count per day)'
  - s: 'e'
    means: 'engagement of a post: a weighted count of likes, comments and shares (a number)'
  - s: 't'
    means: 'age of the post (hours)'
  - s: 'h'
    means: 'half-life: hours after which the score has halved (hours)'
  - s: 'QPS'
    means: 'requests per second'
---

:::hook
q: Here's the puzzle. A star with 100 million followers posts one photo. Which design handles it best?
options: ["Copy the post into each of the 100 million follower inboxes right away", "Skip the star when pushing, and add their latest posts to each follower's feed when it is opened", "Ask followers to refresh until it shows"]
answer: 1
right: Right. Followers of a star open the app at different times, and many never open it that day. Merging the star's few recent posts at read time costs a little per read, instead of a hundred million writes at once. (How real apps handle this internally is not fully public; this is the commonly taught hybrid. [Inference])
wrong: Think about the work. One copy per follower is a hundred million writes for one photo, and many of those followers will not open the app today. What could be done only for the followers who actually show up?
:::

## When do we do the work? {lvl=1 id=s-when label="Foundations"}

You follow 200 people. Your feed should show their newest posts together. There are two ways to do it.

**Fan-out on read** (build when you look). Store each post once, under its author. When you open the app, ask for the recent posts of each of your 200 people, merge them by time, and show the top 40. Cheap to post: one write. Expensive to read: about 200 lookups for every opening of the app.

**Fan-out on write** (build when they post). Every user has an **inbox**, a short list of post ids. When someone posts, add that post's id to the inbox of each follower. Expensive to post: one write per follower. Cheap to read: open your inbox, take the top 40.

The word **fan-out** is that one action spreads to many places, like the ribs of a fan. Think of the newspaper boy who delivers to every house (fan-out on write) against everyone walking to the news stand (fan-out on read).

Which is better? It depends on how often each side happens.

:::qc lvl=1
q: Which design makes opening the app cheapest?
options: ["Fan-out on read", "Fan-out on write", "They cost the same"]
answer: 1
right: Right. With fan-out on write the list is already built, so reading is one fetch from your inbox.
wrong: In which design is the merging already done before you open the app?
:::

## How big is it? {lvl=1 id=s-numbers label="Foundations"}

Assume (these are our numbers, not any company's [Inference]) 500 million people open the feed 10 times a day, 100 million posts are made a day, and an average poster has 200 followers.

| Quantity | Working | Result |
|---|---|---|
| Feed opens per day | 500 M × 10 | 5 billion |
| Average opens per second | 5 × 10⁹ ÷ 86,400 | about 58,000 |
| Peak opens per second (3×) | 3 × 58,000 | about 174,000 |
| Posts per second (average) | 100 M ÷ 86,400 | about 1,160 |
| Timeline writes per day if we push | 100 M × 200 | 20 billion |
| Timeline writes per second (average) | 2 × 10¹⁰ ÷ 86,400 | about 231,000 |

Compare the two. Fan-out on read means each of 174,000 peak opens triggers about 200 lookups, which is about 35 million lookups a second. Fan-out on write means about 231,000 small writes a second on average. Writes are many, but they are tiny (add an 8-byte id to a list), can wait a few seconds, and can be spread out by queues. The reads are the thing users feel, and they are now one lookup each. That is why most large feeds precompute, a choice our numbers support.

## The basic design {lvl=2 id=s-basic label="SDE-1"}

Keep three stores:

1. **Post store**: each post once (author, text, media link, time), looked up by post id.
2. **Follow graph**: who follows whom (a table or a graph-shaped store).
3. **Timeline store**: for each user, a list of the latest few hundred post ids, kept in memory (a cache such as a key-value store).

**Posting.** Save the post in the post store. Put a job on a **queue**: "fan out post 9001 from author 42". Workers read the author's follower list and add the id to each inbox.

**Reading.** Fetch the id list from the timeline store, then fetch the posts by id in one batch (this step is called **hydrating** the ids). Show them.

```python
def fan_out(post_id, author, followers, timelines):
    for uid in followers(author):
        tl = timelines[uid]               # list of post ids
        tl.insert(0, post_id)             # newest first
        del tl[800:]                      # keep latest 800 only
```

Why only ids? A timeline of 800 ids is 800 × 8 B = 6.4 KB. For 500 million users that is 3.2 TB, which a cluster holds in memory. If we copied whole posts, the same photo would be stored millions of times.

:::qc lvl=2
q: Why do timelines store post ids and not whole posts?
options: ["Ids are easier to type", "So each post is stored once and timelines stay small", "Posts cannot be copied"]
answer: 1
right: Right. A post is copied by reference. Edits and deletions then happen in one place.
wrong: Imagine editing a post that is copied into 5 million timelines. What would you prefer to update?
:::

## Pagination {lvl=2 id=s-pages label="SDE-1"}

The feed is endless, so you load it in pages. The obvious way is **offset**: "skip 40, give me 40". It breaks in a live feed. While you read page one, three new posts arrive at the top, so "skip 40" now starts three posts earlier, and you see three posts twice.

A **cursor** fixes this. The server says "give me the 40 posts older than this one": the cursor is the (time, id) of the last post you saw. Nothing that arrives at the top can move it.

```python
def next_page(timeline, cursor, size=40):
    # timeline: list of (time, post_id), newest first
    older = [p for p in timeline if p < cursor]   # tuples compare by time, then id
    return older[:size]
```

Real stores do this with an index range query, not a scan. Including the id in the cursor breaks ties between posts made in the same second.

## The celebrity problem {lvl=3 id=s-celeb label="SDE-2"}

Now the star. One post by an account with 100 million followers triggers 100 million inbox writes. If the cluster can do 100,000 writes a second for this job, that one post takes 100,000,000 ÷ 100,000 = 1,000 seconds, about 17 minutes, and delays everyone else's fan-out in the queue. And most of those inboxes belong to people who will not open the app today.

The usual answer is a **hybrid**:

- For ordinary accounts, push to followers (fan-out on write).
- For accounts above a threshold (say 100,000 followers), do not push. Keep their posts only in the post store.
- At read time, take your inbox, find the few very popular accounts you follow, fetch their recent posts, and merge both lists.

You pay a little extra on each read, but only for the handful of celebrities you follow, not for all 200 accounts. Cost for a reader: 1 inbox fetch plus a handful of lookups, instead of 200.

**Inactive users.** Do not push to people who have not opened the app in 30 days; build their timeline from scratch when they return. This can cut pushes by a large fraction. [Inference: the share depends on the product.]

**Unfollow, delete and block.** When you unfollow someone, their ids still sit in your inbox. Either remove them in a background job, or (simpler) filter at read time, checking each hydrated post against your current follow list and the post's deleted flag. Filtering at read is cheap because you are only checking about 40 items.

:::qc lvl=3
q: A user follows 300 ordinary accounts and 3 celebrities (hybrid design). How many sources does a feed read merge?
options: ["303 queries", "1 inbox plus 3 celebrity lookups", "3 queries"]
answer: 1
right: Right. The 300 ordinary accounts were already merged into the inbox when they posted. Only the 3 celebrities are merged at read time.
wrong: In the hybrid, whose posts are pushed into the inbox and whose are fetched at read time?
:::

## Ranking basics {lvl=3 id=s-rank label="SDE-2"}

A newest-first list is a fine start. Most apps instead **rank** the posts, putting what you are most likely to care about first. The simplest score has two parts: how much people engaged with a post, and how fresh it is.

$$\text{score} = e \cdot 2^{-t/h}$$

Read it as: take the post's engagement $e$ and halve it every $h$ hours of age. With a half-life of 3 hours, a post with 100 likes and age 6 hours scores $100 \cdot 2^{-2} = 25$, and a fresh post with 30 likes and age 1 hour scores about $30 \cdot 2^{-1/3} \approx 23.8$. Fresh posts rise quickly; old ones sink even when popular.

```python
def score(likes, comments, shares, age_hours, half_life=3.0):
    e = likes + 3 * comments + 5 * shares      # comments say more than likes
    return e * 0.5 ** (age_hours / half_life)
```

The weights (3 and 5) are **made-up** here; real systems learn them from data. Further signals are your closeness to the author, whether you usually watch their videos, and the type of post. After scoring, apply rules: drop posts you have already seen, limit repeats from one author, hide anything reported.

:::qc lvl=3
q: With half-life 3 hours and equal engagement, how much lower is the score of a 9-hour-old post than a brand-new one?
options: ["Half", "One quarter", "One eighth"]
answer: 2
right: Right. 9 hours is three half-lives, so the score is multiplied by (1/2)³ = 1/8.
wrong: How many half-lives fit in 9 hours? Halve once for each.
:::

## A ranking pipeline at scale {lvl=4 id=s-pipeline label="SDE-3"}

Scoring every candidate with a heavy machine-learned model is too slow. So ranking is staged, narrowing the field at each step [Inference: a common pattern in published talks, not any company's exact design]:

1. **Candidate generation.** Gather a few thousand posts: the inbox, merged celebrity posts, and maybe recommended content from accounts you do not follow.
2. **Light ranker.** A cheap score (like the formula above) cuts thousands to a few hundred.
3. **Heavy ranker.** An expensive model scores the few hundred.
4. **Re-ranking.** Apply rules for variety, safety and ads, and cut to the page size.

The expensive step runs on a few hundred items, not thousands, which is how it fits in a time budget of perhaps 200 ms in total. That budget is split among steps, each with its own timeout.

**Graceful degradation.** If the heavy ranker is slow or down, skip it and return the light-ranked list. If that fails too, return the inbox newest-first. A plainer feed beats an error page. Each fallback should be tested often, since an untested fallback usually does not work when needed.

**Read your own writes.** You post, refresh, and your post is missing, because the fan-out is still queued. The fix is to merge your own recent posts into your feed at read time, as if you were a celebrity to yourself. It guarantees that you see what you just wrote, while other people may see it a few seconds later.

**Hot keys and stampedes.** A viral post is read millions of times a minute from one key. Replicate hot entries across cache machines, and let a short in-process cache absorb the repeats. If a popular timeline entry expires, thousands of requests rebuild it at once (a **cache stampede**); let one request rebuild it while the others wait or use the old copy.

**Following someone new.** Their old posts are not in your inbox. When you follow, backfill: fetch their last 20 posts and merge them into your inbox in the background.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A feed is expensive somewhere: build it when someone posts (fan-out on write) or when you open the app (fan-out on read). {lvl=1}
2. Do the arithmetic: when reads far outnumber posts, precompute. Our numbers gave 174,000 peak opens a second against 231,000 tiny writes a second. {lvl=1}
3. Timelines hold post ids only; posts are stored once and hydrated at read time. {lvl=2}
4. Use cursor pagination (items older than a given time and id), never offsets, on a live list. {lvl=2}
5. The celebrity problem is solved by a hybrid: push for ordinary accounts, merge popular accounts at read time. {lvl=3}
6. A simple score is engagement times a fade with age: $e\cdot 2^{-t/h}$. {lvl=3}
7. Rank in stages, cheap first, expensive on fewer items. {lvl=4}
8. Degrade gracefully, and merge your own posts at read time so you see what you just wrote. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Pushing posts of accounts with millions of followers to every inbox. {lvl=3}
- Offset pagination on a list that changes while you read it. {lvl=2}
- Copying whole posts into timelines, so edits and deletions need millions of updates. {lvl=2}
- Doing the fan-out inside the posting request, so the poster waits (use a queue). {lvl=2}
- Forgetting deletes, blocks and unfollows, so removed posts still appear. {lvl=3}
- A fallback path that was never tested, so degradation fails exactly when needed. {lvl=4}
- Reading too much into numbers from companies' talks: they change often, and many are [Unverified]. {lvl=1}
:::
