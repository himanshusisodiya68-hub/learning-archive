---
title: File systems
summary: How a pile of numbered blocks on a disk becomes named files and folders, and how your work survives a sudden power cut.
ncert: []
up_to: SDE-3
builds_on: [Virtual memory, Memory hierarchy and caches, Hash tables]
notes_prompt: Explain to a friend how "holiday.jpg" is found on a disk that has no names at all, and what the computer does so that a power cut does not leave the disk in a mess.
margin:
  - kind: history
    title: History
    text: The inode idea (a small record per file, separate from its name) comes from early Unix in the 1970s [Unverified]. Linux's ext4, Apple's APFS and Windows' NTFS are all descendants of the same thinking about names, metadata and blocks.
  - kind: tip
    title: Interview favourite
    text: '"How do you save a file so a crash never leaves it half-written?" Write to a temporary file, flush it to disk, then rename it over the old one. Rename is atomic.'
  - kind: olympiad
    title: Design link
    text: 'Every database promises "committed means durable", and keeps that promise with the same two tools you meet here: a log written first, and an explicit flush to the device.'
books:
  - { title: "R. Arpaci-Dusseau and A. Arpaci-Dusseau, Operating Systems: Three Easy Pieces (OSTEP)", ref: "the file-system chapters: inodes and directories, crash consistency with fsck and journaling, SSDs [Unverified chapter numbers]" }
  - { title: "M. Kleppmann, Designing Data-Intensive Applications", ref: "the storage chapters, and the section on durability and write-ahead logs [Unverified section names]" }
  - { title: "A. Silberschatz et al., Operating System Concepts", ref: "the file-system chapters [Unverified chapter numbers]" }
cards:
  - { front: "What is a file, as the OS sees it?", back: "A sequence of bytes plus metadata (size, owner, permissions, times, and where its blocks are). The name is not part of the file; it lives in a directory." }
  - { front: "What is an inode?", back: "The record that holds a file's metadata and the locations of its data blocks. A directory entry maps a name to an inode number." }
  - { front: "What is a directory?", back: "A special file whose contents are a table of names and inode numbers. A path like /home/asha/notes.txt is looked up one directory at a time." }
  - { front: "Why can a write succeed and yet the data be lost in a power cut?", back: "The OS keeps writes in memory (the page cache) and writes them to the device later. Only fsync, which waits until the device confirms, makes the data durable." }
  - { front: "How does journaling make crashes safe?", back: "Write a note of the planned changes to a log and mark it committed before touching the real structures. After a crash, replay committed notes and ignore incomplete ones." }
  - { front: "How is an SSD different from a spinning disk for files?", back: "No moving parts, so random reads are about a hundred times quicker. But flash is erased in big blocks, so the drive remaps and rewrites internally, and writes wear it out." }
core:
  idea: 'A file system turns a numbered row of raw blocks into named files and folders: each file is bytes plus a small metadata record (the inode), and a directory maps names to inodes. Because one change touches several places on the disk, it keeps a log (a journal) of intended changes so a crash never leaves it half-done, and data is only durable after an explicit flush.'
  formulas:
    - tex: '\text{blocks used} = \lceil \text{size} / B \rceil'
      label: 'Space a file takes (B = block size; the last block is partly wasted)'
    - tex: '\text{max size} = (D + B/p) \times B'
      label: 'Direct + single-indirect limit (D direct pointers, p bytes per pointer)'
  conditions:
    - 'The disk can only read and write whole blocks, so everything is built from blocks'
    - 'A single logical change (create a file, append) needs several block writes that cannot all happen at one instant'
    - 'The OS buffers writes in memory for speed, so completing a write call does not mean the data is on the device'
    - 'The device itself obeys flush commands (some cheap drives cache and lie)'
  sign: 'The commonest mistake is believing that a finished write, or even a closed file, is safe on disk. Only fsync (plus a trustworthy device) says so.'
outcomes:
  - 'Describe the difference between a file, its name, its inode and its blocks'
  - 'Trace how a path such as /home/asha/notes.txt is resolved, and compute how large a file the pointer scheme allows'
  - 'Explain why a power cut mid-update can corrupt a disk, and how journaling and fsck differ'
  - 'Save a file safely, atomically and durably, in Python'
  - 'Compare an SSD with a hard disk and reason about durability across machines'
opener:
  story: |
    You are typing a long email and press **Save draft**. A split second later, the power goes out. When you power on again, is your draft there? Half of it? A garbled mess? Or has your whole laptop forgotten how to find any of its files?

    Behind the scenes it is a harder job than it looks. A disk has no folders and no names, just billions of numbered blocks. Your phone has 50,000 photos on one, and it finds "IMG_2041.jpg" almost instantly. And saving even one file means changing several different places on the disk, which cannot all happen at the same instant.

    So how does a pile of anonymous blocks become folders and files, and what has to happen so a power cut at the worst moment does not wreck them?
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A folder tree on the left points to numbered blocks on a disk strip; a lightning bolt interrupts the middle of a save"><g style="fill:none;stroke:var(--ink);stroke-width:1.5"><rect x="14" y="20" width="62" height="24" rx="4" style="fill:color-mix(in srgb,var(--c) 30%,var(--surface))"/><rect x="40" y="62" width="62" height="24" rx="4" style="fill:color-mix(in srgb,var(--c) 20%,var(--surface))"/><rect x="66" y="104" width="86" height="24" rx="4" style="fill:var(--surface)"/><path d="M28 44 V74 H40"/><path d="M54 86 V116 H66"/></g><text x="22" y="36" style="font-size:10px;fill:var(--ink)">/home</text><text x="48" y="78" style="font-size:10px;fill:var(--ink)">asha</text><text x="72" y="120" style="font-size:10px;fill:var(--ink)">draft.txt</text><path d="M152 116 C190 116 200 150 214 160" style="fill:none;stroke:var(--c);stroke-width:1.5"/><g style="stroke:var(--ink);stroke-width:1"><rect x="14" y="170" width="292" height="34" style="fill:var(--surface)"/><rect x="14" y="170" width="36" height="34" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/><rect x="50" y="170" width="36" height="34" style="fill:var(--surface)"/><rect x="86" y="170" width="36" height="34" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/><rect x="122" y="170" width="36" height="34" style="fill:var(--surface)"/><rect x="158" y="170" width="36" height="34" style="fill:var(--surface)"/><rect x="194" y="170" width="36" height="34" style="fill:color-mix(in srgb,var(--c) 45%,var(--surface))"/><rect x="230" y="170" width="36" height="34" style="fill:var(--surface)"/><rect x="266" y="170" width="40" height="34" style="fill:var(--surface)"/></g><text x="198" y="190" style="font-size:10px;fill:var(--ink)">block</text><text x="14" y="222" style="font-size:10px;fill:var(--muted)">blocks 0, 1, 2 ... numbers only, no names</text><path d="M262 30 L244 70 L260 70 L246 108 L282 58 L266 58 L280 30 Z" style="fill:var(--bad);stroke:var(--ink);stroke-width:1"/><text x="236" y="126" style="font-size:10px;fill:var(--bad)">power cut mid-save</text></svg>'
life:
  - 'Every photo, song and document you own is a file; the folder tree you click through is a directory structure kept by a file system.'
  - 'Deleting a 5 GB movie is instant because only the record (the inode and the list of free blocks) changes. The bytes stay on the disk until something overwrites them.'
  - 'After a crash or a forced shutdown, your computer starts normally in seconds, because a journal tells it what to finish or undo, instead of checking the whole disk.'
  - 'Google Drive, WhatsApp backups and a bank''s transaction log all depend on one promise: once told "saved", the data survives a power cut.'
  - 'A phone with an SSD-like flash chip opens apps far quicker than an old laptop with a spinning disk, with no moving parts to wait for.'
models:
  - name: 'Name, handle, thing'
    text: 'A file''s name, its inode and its bytes are three different things, like a person''s nickname, their Aadhaar number and the person. Because names point to a stable ID, one thing can have several names (links), and you can rename without moving anything.'
  - name: 'Write the plan before the work'
    text: 'Journaling is the idea behind a builder''s checklist, an airline''s flight plan and a bank''s ledger: record the intent first, so that if you are interrupted you can tell which steps are finished. Any multi-step job that can be interrupted wants a plan on paper.'
  - name: 'Acknowledged is not the same as done'
    text: 'A courier saying "delivered" and the parcel being in your hands are different. Many systems answer "OK" when they have accepted a request, not when it is permanent. Ask which one a promise really means.'
links:
  - leaf: 'cs/virtual-memory'
    name: 'Virtual memory'
    same: 'Both treat the disk as slow backing storage for a faster layer in RAM: swap and the page cache use the same pages and the same "evict the least recently used" thinking.'
    differs: 'Swap is scratch space that may vanish at reboot; a file system must keep names and data permanently and consistently across crashes.'
  - leaf: 'cs/transactions'
    name: 'Transactions and isolation'
    same: 'A journal is a write-ahead log: log the change, commit, then apply, so a multi-step update is all-or-nothing after a crash.'
    differs: 'A database transaction also provides isolation between concurrent users; a file-system journal mainly protects the structure of the disk.'
  - leaf: 'cs/git-and-the-command-line'
    name: 'Git and the command line'
    same: 'Git stores its objects as files, and names each one by a hash of its content, so a name is a stable handle for the data.'
    differs: 'An ordinary file system names by a path you choose; git''s name is computed from the content itself.'
  - leaf: 'cs/hash-tables'
    name: 'Hash tables'
    same: 'A directory is a table from name to inode number, and big directories use hashed or tree indexes to avoid scanning every entry.'
    differs: 'A hash table lives in RAM and can be rebuilt; a directory lives on disk and must stay valid after any crash.'
next:
  q: 'You have saved the file safely on your own disk. Now you open a web page, and the bytes you want live on a computer in another country. How does a request find that machine and bring the bytes back across a hundred networks?'
  leaf: 'cs/how-the-internet-works'
  name: 'How the internet works'
symbols:
  - s: 'B'
    means: 'block size: the smallest chunk the disk reads or writes (usually 4096 bytes)'
  - s: 'D'
    means: 'number of direct pointers in an inode, each naming one data block (12 in the classic design)'
  - s: 'p'
    means: 'size of one block pointer (4 bytes in the classic design)'
  - s: '\lceil x \rceil'
    means: 'x rounded up to a whole number'
  - s: '\text{inode}'
    means: 'a file''s record: owner, size, times, permissions, and where its blocks are (a term, not a number)'
  - s: '\text{fsync}'
    means: 'the call that waits until the data is on the device (a term, not a number)'
---

:::hook
q: Here's the puzzle. Your program writes a file, the call returns without error, and one millisecond later the power fails. When is that data actually safe?
options: ["The moment the write call returns", "Only after the program asks the OS to flush it and the device confirms", "Only after you shut the computer down properly"]
answer: 1
right: Right. A returned write usually means the OS has taken the bytes into memory, not that they reached the disk. The flush call (fsync) waits for the device. Good programs, and every database, use it deliberately.
wrong: A finished write call is only a promise to write soon. Where do the bytes sit in the meantime, and what happens to memory when the power goes?
:::

## The problem: names on a nameless disk {lvl=1 id=s-problem label="Foundations"}

A disk is like a huge wall of numbered lockers, all the same size, called **blocks** (usually 4096 bytes each). You can say "give me block 7,381,200" and nothing else. There are no names, no folders, no idea which lockers belong together.

A **file system** is the librarian that builds order on top of that wall. Think of a library. Each book has a **catalogue card** that says who wrote it, how long it is, and which shelves hold its pages. The shelves hold the pages. And a **directory** (the index by title) says that "Asha's notes" is catalogue card number 2041.

That is nearly the whole design:

- A **file** is a run of bytes, plus **metadata**: its size, owner, permissions, times, and where its blocks are.
- A **directory** is a special file containing a table: name, then the number of the file's record.
- Folders inside folders are directories listed in directories, down from the **root** (`/`).

To open `/home/asha/notes.txt`, the system looks up `home` in the root directory, then `asha` in that, then `notes.txt` in that. Each step is one table lookup.

:::qc lvl=1
q: You delete a huge video file and the delete takes a fraction of a second. Why so fast?
options: ["The system overwrites the video with zeros very quickly", "Only the record and the list of free blocks change; the bytes stay until reused", "Videos are stored in memory, not on disk"]
answer: 1
right: Right. Deleting changes bookkeeping, not the data. (That is also why deleted files can sometimes be recovered, and why secure erase is a separate job.)
wrong: Writing zeros over gigabytes would take far longer than a blink. What small piece of information says "these blocks are free now"?
:::

## Inodes: the file's real identity {lvl=2 id=s-inodes label="SDE-1"}

The catalogue card is called an **inode** (index node). It holds everything about the file except its name: size, owner, permissions, times, and pointers to the data blocks. A directory entry maps a **name to an inode number**.

This split has handy consequences:

- **Rename** only edits the directory entry; the file does not move.
- **Hard links**: two names can point at the same inode. The file disappears when the last name is removed (the inode keeps a count).
- **Symbolic links** are small files that just contain another path.

How does the inode find the blocks? In the classic Unix design it holds 12 **direct pointers** (each names one data block) and then a pointer to an **indirect block**, a block filled with more pointers. With 4 KiB blocks and 4-byte pointers, one indirect block holds $4096/4 = 1024$ pointers. So the largest file reachable with direct plus single-indirect is:

$$\text{max size} = (D + B/p)\times B = (12 + 1024) \times 4096 \approx 4.05\ \text{MiB}$$

Read it as: "the direct blocks plus the blocks the indirect block can name, times the block size". Bigger files add a second level (a block of pointers to blocks of pointers) and then a third. Modern file systems such as ext4 usually store **extents** instead: "start at block X, run for N blocks", which is far more compact for large files [Unverified detail].

Small files waste space. Blocks are the unit, so a 1-byte file still takes a whole 4 KiB block: $\lceil 1/4096 \rceil = 1$ block.

```python
import os
os.link("notes.txt", "backup.txt")     # a second name, same inode
a, b = os.stat("notes.txt"), os.stat("backup.txt")
print(a.st_ino == b.st_ino)            # True: one file, two names
print(a.st_size, a.st_nlink)           # size in bytes, number of names
```

:::figure caption="An inode holds metadata and pointers. Small files use direct pointers; large ones go through an indirect block full of more pointers."
<svg viewBox="0 0 420 170" role="img" aria-label="A directory entry points to an inode; the inode has direct pointers to data blocks and one pointer to an indirect block that points to more data blocks">
<g style="stroke:var(--ink);stroke-width:1.3">
<rect x="10" y="20" width="96" height="40" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/>
<rect x="140" y="14" width="96" height="140" style="fill:var(--surface)"/>
<rect x="150" y="48" width="76" height="16" style="fill:color-mix(in srgb,var(--c) 35%,var(--surface))"/>
<rect x="150" y="68" width="76" height="16" style="fill:color-mix(in srgb,var(--c) 35%,var(--surface))"/>
<rect x="150" y="88" width="76" height="16" style="fill:color-mix(in srgb,var(--c) 35%,var(--surface))"/>
<rect x="150" y="118" width="76" height="16" style="fill:color-mix(in srgb,var(--bad) 35%,var(--surface))"/>
<rect x="300" y="28" width="46" height="18" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/>
<rect x="300" y="56" width="46" height="18" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/>
<rect x="300" y="84" width="46" height="18" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/>
<rect x="300" y="120" width="46" height="34" style="fill:color-mix(in srgb,var(--bad) 15%,var(--surface))"/>
<rect x="364" y="112" width="42" height="14" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/>
<rect x="364" y="132" width="42" height="14" style="fill:color-mix(in srgb,var(--c) 15%,var(--surface))"/>
</g>
<text x="16" y="36" style="font-size:10px;fill:var(--ink)">directory entry</text>
<text x="16" y="52" style="font-size:10px;fill:var(--ink)">notes.txt -> 2041</text>
<text x="146" y="10" style="font-size:10px;fill:var(--muted)">inode 2041</text>
<text x="150" y="40" style="font-size:9px;fill:var(--muted)">size, owner, times</text>
<text x="156" y="60" style="font-size:10px;fill:var(--ink)">direct 1</text>
<text x="156" y="80" style="font-size:10px;fill:var(--ink)">direct 2</text>
<text x="156" y="100" style="font-size:10px;fill:var(--ink)">... 12</text>
<text x="156" y="130" style="font-size:10px;fill:var(--ink)">indirect</text>
<text x="304" y="40" style="font-size:9px;fill:var(--ink)">data</text>
<text x="304" y="68" style="font-size:9px;fill:var(--ink)">data</text>
<text x="304" y="96" style="font-size:9px;fill:var(--ink)">data</text>
<text x="304" y="140" style="font-size:9px;fill:var(--ink)">pointers</text>
<text x="370" y="123" style="font-size:9px;fill:var(--ink)">data</text>
<text x="370" y="143" style="font-size:9px;fill:var(--ink)">data</text>
<path d="M106 40 H140" style="fill:none;stroke:var(--c);stroke-width:1.5"/>
<path d="M226 56 H300 M226 76 H300 M226 96 H300" style="fill:none;stroke:var(--c);stroke-width:1.2"/>
<path d="M226 126 H300" style="fill:none;stroke:var(--bad);stroke-width:1.5"/>
<path d="M346 130 H364 M346 142 H364" style="fill:none;stroke:var(--bad);stroke-width:1.2"/>
</svg>
:::

:::qc lvl=2
q: How many 4 KiB blocks does a 10,000-byte file occupy?
options: ["2", "3", "10"]
answer: 1
right: Right. $\lceil 10000/4096 \rceil = 3$ blocks, about 12 KB reserved for 10 KB of data.
wrong: Divide 10,000 by 4,096 and round up, since a partly used block still belongs to the file.
:::

## Reading, writing and the page cache {lvl=2 id=s-cache label="SDE-1"}

Disks are slow compared with memory, so the OS keeps recently used file blocks in RAM, the **page cache**, the same pages you met in virtual memory. A read first looks there. A **write** is usually copied into the cache and the call returns at once; the OS writes it to the device a little later (every few seconds is typical [Unverified]).

That is fast, and it is also dangerous: a power cut loses everything still waiting in memory. Closing a file does not change this. To force the data out, a program calls **fsync**, which waits until the device reports the bytes are stored.

```python
with open("draft.txt", "w") as f:
    f.write("Dear Asha ...")
    f.flush()              # Python's own buffer -> the OS
    os.fsync(f.fileno())   # the OS -> the device, wait for it
```

Two layers of buffering exist: the program's (cleared by `flush`) and the OS's (cleared by `fsync`). You need both.

:::qc lvl=2
q: A program writes a file, closes it, and the machine loses power two seconds later. Which is true?
options: ["The data is certainly safe, because the file was closed", "The data may be lost unless fsync was called", "The data is always lost"]
answer: 1
right: Right. Closing does not force data to the device. Without fsync, it may or may not have reached the disk.
wrong: Closing hands the file back to the OS, which may still be holding the bytes in memory. What call waits for the device?
:::

## Crashes and journaling {lvl=3 id=s-journal label="SDE-2"}

Appending one block to a file means changing three separate places: the **data block** itself, the **inode** (new size and a pointer), and the **bitmap** that records which blocks are in use. The disk writes them one at a time, and a crash can land between any two:

| Which writes got through | What is left behind |
|---|---|
| Only the data block | Data nobody points to; the append is simply lost (harmless) |
| Only the inode | Inode points to a block holding garbage, and the bitmap says it is free (dangerous) |
| Only the bitmap | A block marked used that nobody owns: a space leak |
| Inode and bitmap, no data | The file now ends with old junk from that block |

The old cure was **fsck** (file system check): after a crash, scan the whole disk and repair contradictions. On a large disk this took hours.

The modern cure is **journaling**, the same idea as a write-ahead log in a database:

1. Write a note to a reserved **journal** area: "I am about to change these three things."
2. Write a **commit** mark and wait for it to reach the disk.
3. Now do the real writes.
4. After they finish, free the journal entry.

After a crash, the system reads the short journal: any **committed** note is replayed (finishing the job), and any note without a commit mark is ignored (the job never happened). Recovery takes seconds, however large the disk. [Unverified detail: ext4 normally journals metadata only, and offers a mode that journals file data too, at a speed cost.]

A different design, **copy-on-write** file systems (ZFS, Btrfs, APFS), never overwrite in place: they write new versions elsewhere and then flip one pointer. The flip is a single small write, so the disk is always consistent.

You can borrow the same trick in your own code to save a file **atomically**:

```python
def safe_save(path, text):
    tmp = path + ".tmp"
    with open(tmp, "w") as f:
        f.write(text); f.flush(); os.fsync(f.fileno())
    os.replace(tmp, path)         # atomic swap of the name
    d = os.open(os.path.dirname(path) or ".", os.O_RDONLY)
    os.fsync(d); os.close(d)      # make the rename itself durable
```

A reader sees either the whole old file or the whole new one, never a mixture.

:::qc lvl=3
q: Why does the journal need its commit mark written and confirmed before the real writes begin?
options: ["So recovery can tell a complete note from a half-written one", "To make the disk run faster", "So the real writes can be skipped"]
answer: 0
right: Right. Without a trustworthy commit mark, recovery could replay a note that was only half written and corrupt the disk.
wrong: Imagine the power fails while the note itself is being written. How would recovery know whether to trust it?
:::

## Spinning disk or SSD {lvl=3 id=s-ssd label="SDE-2"}

| | Spinning disk (HDD) | Solid-state drive (SSD) |
|---|---|---|
| Moving parts | Platters spin, a head swings over them | None, it is flash memory |
| Random read | about 5 to 10 ms (head must move) | about 0.1 ms |
| Sequential speed | good (about 100 to 200 MB/s) | much higher |
| Weak spot | seeks | wear and write amplification |

(Figures are rough, typical orders of magnitude.)

On a hard disk the great enemy is the **seek**, so file systems try to keep a file's blocks together and write sequentially. On an SSD, reading anywhere is cheap, but flash has a quirk: it can be written in small pages yet can only be **erased in large blocks**, and each cell survives a limited number of erases. Inside the drive, a layer called the **flash translation layer** remaps addresses, shuffles data to spread wear (**wear levelling**), and rewrites more than you asked (**write amplification**). The `TRIM` command lets the OS tell the drive which blocks are free so it can tidy in advance.

Practical effects: sequential, log-style writes suit both devices; the cost of an `fsync` on an SSD is far smaller than on a disk, but it is still not free. Some drives keep a volatile write cache, so an acknowledged flush must really mean "on stable storage"; enterprise drives often add capacitors so cached writes survive a power cut [Unverified: varies by model].

## Durability at scale {lvl=4 id=s-scale label="SDE-3"}

One disk, however carefully used, is one failure away from losing everything. Real systems layer the ideas:

- **Group commit.** A flush on a hard disk takes about 8 ms, so one transaction per flush caps you near 125 commits a second. A database gathers many waiting commits and flushes once for the whole group, so throughput rises many times over for a small rise in latency.
- **Log on its own device.** Sequential log writes on a dedicated fast device avoid fighting with random data writes.
- **Do not trust, verify.** Disks can silently return wrong bytes. Systems store a **checksum** with each block and repair from a copy when it fails.
- **Errors are information.** A failed `fsync` may mean pages were dropped. Retrying and trusting the second "success" can hide data loss. A well-known 2018 report about a popular database found exactly this class of bug [Unverified: details from memory].
- **Copies beat care.** The real durability tool is **replication**: keep copies on different machines, racks or regions, so independent failures are unlikely to coincide. A write counts as durable once enough replicas acknowledge it.
- **Not everything is a file system.** Object stores such as Amazon S3 offer a flat key-to-bytes namespace with no atomic rename and no append in place. Design for that: write whole new objects, then switch a pointer. Log-structured storage (LSM-trees) was built for the same append-friendly, flash-friendly pattern [Inference: widely stated, I have not checked a source].
- **Limits to watch.** Running out of inodes while space remains, a directory with millions of entries, and slow `fsync` on shared disks are classic production surprises.

Design question to practise: a notes app promises "once you see the tick, your note survives any single machine failure". What do you do on the write path, and when exactly do you show the tick?

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. A disk is only numbered blocks; the file system builds names, folders and files on top. {lvl=1}
2. A file is bytes plus metadata; a directory maps names to inode numbers; the name is not part of the file. {lvl=1}
3. The inode holds metadata and pointers (direct, then indirect), and that fixes the largest file size. {lvl=2}
4. Writes sit in the page cache; only fsync (after flush) makes data durable. {lvl=2}
5. One update touches several places, so a crash can leave a mess; journaling (log, commit, apply) repairs this in seconds, where fsck scans everything. {lvl=3}
6. To save atomically: write a temp file, fsync it, rename over the old one, fsync the directory. {lvl=3}
7. HDDs fear seeks, SSDs fear wear; real durability comes from checksums and copies on independent machines. {lvl=4}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Writing, even closing, a file does not make it durable; call fsync when the data matters. {lvl=2}
- A file's name is not its identity: renaming does not move data, and two names can point to one file. {lvl=2}
- Saving a file by overwriting it in place can leave it half-written after a crash; write a new file and rename. {lvl=3}
- "Deleted" files are still on the disk until overwritten; use proper secure-erase tools if that matters. {lvl=2}
- Do not assume a drive always tells the truth about flushes; test power-loss behaviour for important systems. {lvl=3}
- One disk is one failure; durability means copies in independent places. {lvl=4}
:::
