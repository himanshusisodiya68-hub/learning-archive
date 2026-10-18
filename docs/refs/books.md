# Reference books (owner's Drive folder "Learning", owned by himanshu@atishmathur.com, shared with the connector account)

**How to read a book cheaply:** never pull a PDF through the Drive connector (the content would flow through the model's context). Download it straight into the scratchpad (token-free) and extract only the pages you need:

```
curl -sL -o book.pdf "https://drive.usercontent.google.com/download?id=<FILE_ID>&export=download&confirm=t"
pdftotext -layout -f <first> -l <last> book.pdf - | less     # or grep -n for a topic
```
Read a chapter once, then write short notes (order of ideas, key examples, problem numbers) in `docs/refs/<subject>/<branch>.md` so later sessions read the notes, not the book. Problems are copied word for word from these books only (label the source: book, chapter, problem number).

| Subject | Book | File id |
|---|---|---|
| Physics | The Feynman Lectures on Physics, Vol II (electromagnetism) | 1bIC91VQoEWiwA0OUd7IRsfrpLqJnHqwh |
| Physics | Feynman Lectures, all volumes, free online (preferred for Vol I and III): https://www.feynmanlectures.caltech.edu/ | — |
| Physics | I. E. Irodov, Problems in General Physics | 1NvgcrDx7wlPIv8RUxNnBIIWwIx-u0-KH (tested: text extracts cleanly) |
| Physics | Resnick & Halliday, Vol 1 and 2 (54 MB) | 1GuELpXLHeuUVXczLE1SMrhGNv8GDUhwW |
| Physics | H. C. Verma, Concepts of Physics Vol 2 (162 MB; may be scanned images, check pdftotext first) | 1a9l2WZF0Pj83HSXJefuBt7vuOkSO70bS |
| Maths | Paul Zeitz, The Art and Craft of Problem Solving | 1JcSbOEjUN7kl0BbwaHC7wtedOZmyzI1Z |
| Maths | Arthur Engel, Problem-Solving Strategies | 1AUNcKYXKRG_EzP8qWXRKdTsbyS1ip13b |
| Maths | John Bird, Engineering Mathematics | 1VnXmr6f1iCPDOHJX5g0SHJtNnPL_WHaL |
| CS | Martin Kleppmann, Designing Data-Intensive Applications | 16F4KlsnH32Rlzv56c3ejVcWRw1lgEQVx |

Not yet in the folder: H. C. Verma Vol 1, Six Easy Pieces (use the Feynman Lectures website instead), Chemistry and Biology references.
