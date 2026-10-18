---
title: Text, images and sound as bits
summary: How one machine that only knows numbers can hold your Hindi message, a photo of the Taj Mahal and a song.
ncert: []
up_to: SDE-2
builds_on: [Bits and binary, How computers store numbers]
notes_prompt: Explain to a friend how a photo, a song and the word नमस्ते can all be stored as nothing but numbers, and why the file can be made smaller.
margin:
  - kind: history
    title: History
    text: ASCII was standardised in the 1960s, and UTF-8 was designed on a placemat by Ken Thompson and Rob Pike in 1992 (both [Unverified] from memory). Today the large majority of web pages use UTF-8 [Unverified].
  - kind: tip
    title: Interview favourite
    text: '"Compress a string like aaabcc into a3b1c2" is run-length encoding, a classic warm-up. The follow-up is the good part: when does the "compressed" string come out longer than the original?'
  - kind: olympiad
    title: Design link
    text: Video is the hardest case. Raw 1080p at 30 frames a second is about 187 MB every second, so streaming services store only what changes between frames and throw away detail the eye will not miss.
books:
  - { title: "C. Petzold, Code: The Hidden Language of Computer Hardware and Software", ref: "chapters on ASCII, and on images and sound as numbers [Unverified]" }
  - { title: "R. Bryant and D. O'Hallaron, Computer Systems: A Programmer's Perspective", ref: "Ch. 2 Representing and Manipulating Information: strings and encodings [Unverified]" }
  - { title: "T. Cover and J. Thomas, Elements of Information Theory", ref: "opening chapters on entropy and data compression (advanced, optional) [Unverified]" }
cards:
  - { front: "What is ASCII, and what is its limit?", back: "A 7-bit agreement giving each of 128 English letters, digits and symbols a number (A = 65, a = 97, 0 = 48). It has no room for Hindi, Tamil, accents or emoji." }
  - { front: "What is the difference between Unicode and UTF-8?", back: "Unicode is the numbered list of characters (code points, such as U+20B9 for ₹). UTF-8 is one way to store those numbers as bytes, using 1 to 4 bytes per character." }
  - { front: "How is a colour stored on screen?", back: "As three bytes, one each for red, green and blue (0 to 255), giving 256³ = 16,777,216 colours. A photo is a grid of such pixels." }
  - { front: "How is sound stored?", back: "By measuring the air pressure many times a second (sampling). CD audio takes 44,100 samples a second, 16 bits each, for two channels." }
  - { front: "Lossless versus lossy compression?", back: "Lossless gives back exactly the original (ZIP, PNG), by removing repetition. Lossy throws away detail people will hardly notice (JPEG, MP3) and cannot be undone." }
  - { front: "Why can no program shrink every file?", back: "There are 2ⁿ files of n bits but only 2ⁿ − 1 shorter ones, so two files would have to share a short code. Compression helps only on data with patterns." }
core:
  idea: 'Everything a computer holds is a list of numbers plus an agreement on what they mean: letters are numbered, pictures are grids of colour numbers, sound is a list of pressure measurements. Compression makes the list shorter by removing repetition (lossless) or detail nobody notices (lossy).'
  formulas:
    - tex: '\text{bytes} = \text{width} \times \text{height} \times 3'
      label: 'A raw colour image, one byte per red, green and blue'
    - tex: '\text{bits per second} = f_s \times b \times c'
      label: 'Raw sound: samples per second × bits per sample × channels'
  conditions:
    - 'Both sender and receiver use the same encoding, or the text comes out garbled'
    - 'Sound is sampled faster than twice its highest frequency, or it is distorted (aliasing)'
    - 'Lossless compression can only help when the data has patterns; random data cannot be shrunk'
  sign: 'Characters, bytes and code points are three different counts: नमस्ते is 6 code points but 18 bytes in UTF-8, and one emoji can be 4 bytes.'
outcomes:
  - 'Explain how letters, colours and sound become numbers, and compute raw sizes of images and audio'
  - 'Distinguish a character set (Unicode) from an encoding (UTF-8) and say why text sometimes shows as garbage'
  - 'Work out the UTF-8 bytes of a character by following the pattern'
  - 'Describe lossless and lossy compression, and run-length encoding by hand'
  - 'Explain why sampling needs more than twice the highest frequency, and why no compressor can shrink everything'
opener:
  story: |
    You send your friend a message: **नमस्ते 🙏**. It crosses the country in a blink and arrives looking exactly as you typed it, with the right Hindi letters and the folded hands.

    But you know what is inside the phone: switches, numbers, nothing else. There is no letter न in there, no little emoji picture. Then why does one old website show an apostrophe as the three strange characters **â€™**, while your message arrives perfectly?

    The answer is an agreement. Everything on a screen, from letters to photographs to songs, is a list of numbers plus a rule for reading them. Whether it reads correctly depends on both sides using the same rule.
  art: '<svg viewBox="0 0 320 240" role="img" aria-label="A chat bubble saying Hi and a folded-hands emoji above seven boxes holding the numbers 48, 69, 20, f0, 9f, 99, 8f"><rect x="90" y="24" width="140" height="48" rx="14" style="fill:color-mix(in srgb,var(--c) 14%,var(--surface));stroke:var(--ink);stroke-width:1.5"/><text x="160" y="56" text-anchor="middle" style="font-size:22px;fill:var(--ink)">Hi 🙏</text><path d="M160 80 L160 110" style="stroke:var(--c);stroke-width:2;fill:none"/><path d="M154 104 L160 112 L166 104" style="stroke:var(--c);stroke-width:2;fill:none"/><text x="172" y="102" style="font-size:11px;fill:var(--muted)">agreed code</text><g style="fill:var(--surface);stroke:var(--ink);stroke-width:1.5"><rect x="22" y="124" width="36" height="34"/><rect x="62" y="124" width="36" height="34"/><rect x="102" y="124" width="36" height="34"/><rect x="152" y="124" width="36" height="34"/><rect x="192" y="124" width="36" height="34"/><rect x="232" y="124" width="36" height="34"/><rect x="272" y="124" width="36" height="34"/></g><g style="font-size:15px;fill:var(--ink)" text-anchor="middle"><text x="40" y="146">48</text><text x="80" y="146">69</text><text x="120" y="146">20</text><text x="170" y="146">f0</text><text x="210" y="146">9f</text><text x="250" y="146">99</text><text x="290" y="146">8f</text></g><g style="font-size:12px;fill:var(--muted)" text-anchor="middle"><text x="40" y="176">H</text><text x="80" y="176">i</text><text x="120" y="176">space</text><text x="230" y="176">🙏 (4 bytes)</text></g><text x="160" y="214" text-anchor="middle" style="font-size:12px;fill:var(--muted)">seven bytes, written in hex</text></svg>'
life:
  - 'Every WhatsApp message, web page and email is text stored as bytes; Hindi, Tamil and emoji work everywhere because phones and servers agree on Unicode and UTF-8.'
  - 'A 12-megapixel phone photo is 12 million coloured dots; the file is a few megabytes, not the 36 MB of raw dots, because JPEG compression drops detail you cannot see.'
  - 'A song on Spotify or YouTube Music is a stream of sampled sound, compressed so that a minute takes about one megabyte instead of ten.'
  - 'The tricolour you see in an emoji or on a website is three numbers per pixel: saffron is #FF9933, which is red 255, green 153, blue 51.'
  - 'ZIP files, WhatsApp photo "compression" and video calls all trade quality against size, for the same reasons.'
models:
  - name: 'Data is numbers plus a rule'
    text: 'The same number can be a letter, a colour or a loudness. The meaning is in the agreement, never in the number. Money, maps, languages and legal contracts all work this way, and fail when the two sides use different rules.'
  - name: 'Keep what matters, drop what does not'
    text: 'Lossy compression works because people do not notice every detail. Good summaries, maps and budgets do the same: decide what the reader needs and drop the rest on purpose.'
  - name: 'Predictable things are cheap to describe'
    text: 'A long run of the same colour costs almost nothing to say ("500 white dots"); surprising data costs a lot. A story with no surprises can be told briefly, and the information in a message is its surprise.'
links:
  - leaf: 'phy/sound-as-a-wave'
    name: 'Sound as a wave'
    same: 'Sampling measures a sound wave''s pressure many times a second; how often you must measure depends on the wave''s frequency.'
    differs: 'A real wave is continuous; a sampled version has gaps between measurements and finite precision at each one.'
  - leaf: 'cs/bits-and-binary'
    name: 'Bits and binary'
    same: 'Every character, pixel and sample is a pattern of bits, read with place values just as before.'
    differs: 'Here the pattern is read through an encoding (a table or a layout), not as a plain number.'
  - leaf: 'cs/numbers-in-a-computer'
    name: 'How computers store numbers'
    same: 'A sound sample is a whole number in a fixed-size box, and a fixed number of bits limits its precision just as it does for any number.'
    differs: 'A float spends its bits on sign, exponent and fraction; a sample spends all its bits on the level of the measurement.'
next:
  q: 'We keep saying a computer works on bits. But what is physically happening to those bits when it adds two numbers? How can a few switches wired together do arithmetic and make decisions?'
  leaf: 'cs/logic-gates'
  name: 'Logic gates and Boolean algebra'
symbols:
  - s: '\text{pixel}'
    means: 'one coloured dot of an image; colour is 3 bytes (red, green, blue)'
  - s: 'U+20B9'
    means: 'a Unicode code point: the character number written in hex (here the rupee sign)'
  - s: 'f_s'
    means: 'sampling rate: measurements per second (hertz, Hz)'
  - s: 'b'
    means: 'bits per sample, the precision of each measurement (bits)'
  - s: 'c'
    means: 'channels: 1 for mono, 2 for stereo (count)'
  - s: 'H'
    means: 'entropy: the average number of bits needed per symbol, given how often each symbol appears (bits)'
  - s: 'p_i'
    means: 'the probability (chance between 0 and 1) of symbol number i'
---

:::hook
q: Here's the puzzle. The emoji 🙏 has to be sent as bytes. How many bytes do you think it takes?
options: ["1", "2", "4"]
answer: 2
right: Right: 4 bytes in UTF-8 (f0 9f 99 8f). Plain English letters take 1 byte, Hindi letters take 3, and most emoji take 4. That is why a short emoji message can be larger than you would expect.
wrong: One byte only has 256 patterns, while Unicode lists over 150,000 characters. A single byte cannot name an emoji. How many bytes would it take to cover that many?
:::

## A letter is a number we agreed on {lvl=1 id=s-letters label="Foundations"}

Suppose you and a friend invent a code: A is 1, B is 2, and so on. You can now send a message as numbers, and each number is a pattern of bits. Early computers did the same, and in the 1960s the world agreed on one table called **ASCII**. It uses 7 bits, so it has room for 128 symbols: English letters, digits, punctuation and a few control codes.

| Character | Number | Bits |
|---|---|---|
| space | 32 | 0100000 |
| `0` | 48 | 0110000 |
| `A` | 65 | 1000001 |
| `a` | 97 | 1100001 |

Look at `A` (65) and `a` (97): they differ by exactly 32, which is a single bit. Flipping that bit changes the case. In Python:

```python
ord("A")       # 65   the number of a character
chr(97)        # 'a'  the character with that number
chr(ord("A") + 32)   # 'a'
```

ASCII has no room for न, ₹ or é, and that was a problem for most of the world. We come back to the fix in a moment.

## A photograph is a grid of numbers {lvl=1 id=s-pixels label="Foundations"}

Zoom into any digital picture far enough and you see small squares: **pixels**. A picture is a grid of them, and each pixel has one colour. Mix red, green and blue light in different amounts and you can make nearly any colour, so a pixel stores three amounts, each a byte from 0 (none) to 255 (full).

Three bytes give $256 \times 256 \times 256 = 16{,}777{,}216$ colours. Saffron is red 255, green 153, blue 51, which in hex (two digits per byte) is `#FF9933`.

The smallest picture is black and white with one bit per pixel. Here is a tiny heart, 5 dots across and 5 down, and the bits that describe it, row by row:

:::figure caption="A 5 by 5 black-and-white picture and its 25 bits: each row is five bits (1 = dark)."
<svg viewBox="0 0 320 170" role="img" aria-label="A five by five pixel heart and its rows of bits 01010, 11111, 11111, 01110, 00100">
<rect x="30" y="14" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<rect x="56" y="14" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="82" y="14" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<rect x="108" y="14" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="134" y="14" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<text x="190" y="33" style="font-size:16px;fill:var(--ink);font-family:monospace">01010</text>
<rect x="30" y="40" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="56" y="40" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="82" y="40" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="108" y="40" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="134" y="40" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<text x="190" y="59" style="font-size:16px;fill:var(--ink);font-family:monospace">11111</text>
<rect x="30" y="66" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="56" y="66" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="82" y="66" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="108" y="66" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="134" y="66" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<text x="190" y="85" style="font-size:16px;fill:var(--ink);font-family:monospace">11111</text>
<rect x="30" y="92" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<rect x="56" y="92" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="82" y="92" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="108" y="92" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="134" y="92" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<text x="190" y="111" style="font-size:16px;fill:var(--ink);font-family:monospace">01110</text>
<rect x="30" y="118" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<rect x="56" y="118" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<rect x="82" y="118" width="26" height="26" style="fill:var(--mat);stroke:var(--ink);stroke-width:1"/>
<rect x="108" y="118" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<rect x="134" y="118" width="26" height="26" style="fill:var(--surface);stroke:var(--ink);stroke-width:1"/>
<text x="190" y="137" style="font-size:16px;fill:var(--ink);font-family:monospace">00100</text>
<text x="190" y="158" style="font-size:11px;fill:var(--muted)">25 bits in all</text></svg>
:::

A real photo is the same idea, only bigger. A 12-megapixel photo is 4,000 by 3,000 pixels:

$$4000 \times 3000 \times 3 \text{ bytes} = 36{,}000{,}000 \text{ bytes} = 36 \text{ MB}$$

Read it as: "width times height times three bytes of colour." That is the **raw** size, before any squeezing.

## Sound is a list of measurements {lvl=1 id=s-sound label="Foundations"}

Sound is air pressure rising and falling. A microphone turns that into a changing voltage, and the computer measures the voltage again and again, very fast. Each measurement is a **sample**, stored as a whole number. The list of samples is the sound.

For a music CD the rule is: 44,100 samples every second, 16 bits per sample, and two channels (left and right). That is

$$44{,}100 \times 16 \times 2 = 1{,}411{,}200 \text{ bits per second}$$

Read it as: "samples per second, times bits per sample, times channels." One minute is about 10.6 MB.

How often must we measure? If you check a swinging pendulum too rarely you miss its motion. Our ears hear up to about 20,000 vibrations a second, and a good rule (explained below) is to sample **more than twice as fast** as the highest frequency you want. Twice 20,000 is 40,000, and 44,100 clears that with a little room.

:::qc lvl=1
q: A 4,000 by 3,000 photo is stored raw with 3 bytes per pixel. A phone saves it as a 3 MB JPEG. Roughly how many times smaller is the file?
options: ["About 3 times", "About 12 times", "About 120 times"]
answer: 1
right: Right. 36 MB divided by 3 MB is 12. JPEG does this by discarding detail the eye barely notices.
wrong: Divide the raw size, 36 MB, by the file size, 3 MB.
:::

## Squeezing the list: compression {lvl=1 id=s-compress label="Foundations"}

Raw files are big, so we **compress** them: store the same information in fewer bits. There are two families.

**Lossless** compression gives back exactly what you put in. The idea is to remove repetition. Take a row of dots: `WWWWWWWWWWBWWW` (ten whites, one black, three whites, 14 characters). Say it as counts: `10W1B3W`, only 7 characters. This is **run-length encoding**. ZIP, PNG and many other tools are cleverer versions of "do not repeat yourself."

```python
def rle(s):
    out, i = [], 0
    while i < len(s):
        j = i
        while j < len(s) and s[j] == s[i]:
            j += 1
        out.append(f"{j - i}{s[i]}")
        i = j
    return "".join(out)
```

**Lossy** compression throws information away on purpose, picking what you are least likely to notice. JPEG blurs fine colour detail; MP3 drops sounds that a louder neighbour would hide anyway. The saving is large (a song falls from about 10.6 MB a minute to about 1 MB at 128 kilobits a second) but you cannot get the original back.

Note that run-length encoding turns `abc` into `1a1b1c`, which is *longer*. Compression helps only when the data has patterns to exploit.

:::qc lvl=1
q: Which compression can recover the exact original file?
options: ["JPEG for a photo", "MP3 for a song", "ZIP for a document"]
answer: 2
right: Right. ZIP is lossless: it removes repetition and the original comes back bit for bit. JPEG and MP3 discard detail.
wrong: Think about which tools are meant for files where every character must survive, such as a document or a program.
:::

## Unicode and UTF-8 {lvl=2 id=s-unicode label="SDE-1"}

ASCII served English. The world needs Devanagari, Tamil, Chinese, Arabic and emoji. **Unicode** is one huge numbered list covering all of them: every character gets a number called a **code point**, written like `U+0041` for A, `U+0928` for न, `U+20B9` for ₹. Unicode lists well over 150,000 characters. [Unverified: exact count depends on the version.]

Unicode says which number each character has. It does not say how to store that number as bytes. That is the job of an **encoding**, and the winner is **UTF-8**: it uses 1 to 4 bytes per character, with a clever pattern in the leading bits.

| Code point range | Bytes | Byte pattern (x = bits of the number) |
|---|---|---|
| U+0000 to U+007F | 1 | 0xxxxxxx |
| U+0080 to U+07FF | 2 | 110xxxxx 10xxxxxx |
| U+0800 to U+FFFF | 3 | 1110xxxx 10xxxxxx 10xxxxxx |
| U+10000 to U+10FFFF | 4 | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

Read it as: "the first byte says how long the character is; every following byte starts with 10." Work one out. ₹ is U+20B9, which is 0010 0000 1011 1001 in 16 bits. Pour them into the 3-byte pattern, 0010 / 000010 / 111001, and you get 11100010 10000010 10111001, which is `e2 82 b9`.

Two wins explain its success: plain ASCII text is *unchanged* (every ASCII letter is the same single byte), and you can find where a character starts by looking for a byte that does not begin with 10.

```python
s = "नमस्ते"
len(s)                  # 6   code points
len(s.encode("utf-8"))  # 18  bytes (3 each)
"₹".encode("utf-8")     # b'\xe2\x82\xb9'
```

**Garbled text** (called *mojibake*) happens when bytes are read with the wrong rule. The apostrophe ’ is stored as `e2 80 99`; a page that wrongly reads those bytes as an old Windows encoding shows `â€™`. The name José stored in UTF-8 and read as Latin-1 shows `JosÃ©`. The fix is not to patch the text but to **read it with the encoding it was written in**. In Python, say it out loud: `open(path, encoding="utf-8")`.

:::qc lvl=2
q: The text "Hi 🙏" is sent in UTF-8. How many bytes is it?
options: ["3", "5", "7"]
answer: 2
right: Right. H, i and space take 1 byte each (3 bytes), and the emoji takes 4: 3 + 4 = 7.
wrong: Count each plain ASCII character as 1 byte. The emoji is a code point above U+FFFF.
:::

## Images and sound in practice {lvl=2 id=s-practice label="SDE-1"}

| Kind | Lossless | Lossy | Good for |
|---|---|---|---|
| Image (pixels) | PNG | JPEG, WebP | PNG: logos, screenshots; JPEG: photos |
| Image (shapes) | SVG (drawing instructions) | none | icons that scale to any size |
| Sound | WAV, FLAC | MP3, AAC | music you stream |
| Video | rarely used | H.264 and others | everything you watch |

A **bitmap** stores every pixel, so it gets blurry when enlarged. A **vector** image such as SVG stores drawing instructions ("a circle here, a line there"), so it stays sharp at any size.

Video shows why compression is not optional. One raw full-HD frame (1920 by 1080 by 3 bytes) is 6.2 MB. At 30 frames a second that is about 187 MB every second, far more than any phone connection can carry. Video formats keep one full picture every so often and store only what *changes* in between, since most of the screen stays the same from frame to frame.

## Why sampling works {lvl=3 id=s-sampling label="SDE-2"}

Two numbers control sound quality: how **often** we measure (the sampling rate $f_s$) and how **finely** we measure each time (the bits per sample $b$).

**Rate.** To capture a pure tone you need more than two samples per cycle: roughly one near the top and one near the bottom of each wave, and a little more to be safe. So $f_s$ must be more than twice the highest frequency. Sample slower and a high tone gets recorded as a false lower one, called **aliasing**. You have seen it in films, where a fast-spinning wheel appears to turn slowly or backwards: the camera samples the wheel too rarely.

**Precision.** With $b$ bits each sample has $2^b$ possible levels. 8 bits give 256 levels, which sound grainy; 16 bits give 65,536 levels, with a range between faintest and loudest of about 96 decibels (each bit adds roughly 6 dB). The gaps between levels cause a faint background hiss called quantisation noise.

## Why compression works {lvl=3 id=s-entropy label="SDE-2"}

Why can ZIP shrink a text file but not a photo already saved as JPEG? Because compression feeds on **predictability**.

Suppose a message uses four symbols, appearing with chances 1/2, 1/4, 1/8 and 1/8. A fixed-length code spends 2 bits on every symbol. A smarter code gives the common symbol a short code and the rare ones longer codes: `0`, `10`, `110`, `111` (this is **Huffman coding**). The average length is

$$\tfrac12(1) + \tfrac14(2) + \tfrac18(3) + \tfrac18(3) = 1.75 \text{ bits}$$

Read it as: "each symbol's length times how often it appears, added up." Claude Shannon showed the best any code can do is the **entropy**

$$H = -\sum_i p_i \log_2 p_i$$

Read it as: "for each symbol, its chance times the number of bits of surprise it carries, added up." Here that comes to exactly 1.75 bits, so the code above is perfect.

This also shows a hard limit. There are $2^n$ files of exactly $n$ bits but only $2^n - 1$ files that are shorter, so no lossless compressor can shrink every file; if it shrinks some, it must grow others. Data that is already compressed, or random, looks patternless and cannot be squeezed again. (It is also why you compress *before* encrypting: encrypted data looks random.)

:::qc lvl=3
q: A song is compressed to 128 kilobits a second. Roughly how many bytes is one minute of it?
options: ["About 100 KB", "About 1 MB", "About 10 MB"]
answer: 1
right: Right. 128,000 bits a second times 60 seconds is 7,680,000 bits, which is 960,000 bytes, close to 1 MB.
wrong: Multiply 128,000 bits by 60 seconds, then divide by 8 to turn bits into bytes.
:::

## Traps with text {lvl=3 id=s-text-traps label="SDE-2"}

- **The same-looking text can be different bytes.** é can be one code point (U+00E9) or an e followed by a combining accent (U+0065 U+0301). They look identical but compare unequal. Use Unicode *normalisation* (`unicodedata.normalize("NFC", s)`) before comparing.
- **Length is not obvious.** One emoji with a skin tone, such as 👍🏽, is two code points and 8 bytes. What a reader sees as one "character" can be many code points.
- **Look-alike letters.** The Cyrillic а (U+0430) looks like the Latin a (U+0061). Attackers register web addresses that look the same but are not, a *homograph* attack. Browsers show such names in a safer form. [Inference: exact policies differ by browser.]
- **Sorting is cultural.** Alphabetical order differs by language, so sorting by code point is not the same as sorting for people.

## Key ideas to remember {lvl=1 id=s-keys}

:::keys
1. Everything stored is numbers plus an agreement on how to read them: ASCII gives each English character a number (A = 65), Unicode does the same for the whole world. {lvl=1}
2. A picture is a grid of pixels, each three bytes of red, green and blue: a raw 12-megapixel photo is 36 MB. {lvl=1}
3. Sound is sampled: CD audio takes 44,100 samples a second, 16 bits each, two channels, about 1.4 million bits a second. {lvl=1}
4. Lossless compression (ZIP, PNG) removes repetition and is reversible; lossy compression (JPEG, MP3) drops unnoticed detail and is not. {lvl=1}
5. Unicode numbers the characters; UTF-8 stores them in 1 to 4 bytes, leaves ASCII unchanged, and garbled text means the wrong encoding was used to read it. {lvl=2}
6. Sample at more than twice the top frequency; compression feeds on predictability (entropy), and no lossless method can shrink every file. {lvl=3}
:::

## Toolkit and traps {lvl=1 id=s-traps}

:::traps
- Characters, code points and bytes are three different counts: नमस्ते is 6 code points and 18 bytes. {lvl=2}
- Always state the encoding when reading or writing text files; do not rely on the default. {lvl=2}
- Run-length encoding can make data longer; only use compression when the data has patterns. {lvl=1}
- Do not compress already-compressed files (JPEG, MP3, ZIP) expecting big savings. {lvl=2}
- Lossy compression repeated many times (re-saving a JPEG again and again) keeps losing quality. {lvl=2}
- Normalise Unicode text before comparing or deduplicating it. {lvl=3}
:::
