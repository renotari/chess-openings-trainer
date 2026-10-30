# Opening Trainer

Drill your chess opening repertoire against a computer that plays the typical replies.
Every move — yours and the opponent's — comes with an explanation, and when you go wrong
the trainer tells you **why** the move is a mistake.

## Run it

Open `index.html` in a browser (double-click works, no server or install needed).
Progress is saved in the browser's local storage.

## How it works

- **Learn** mode shows the book move with a green arrow and explains it before you play.
- **Practice** mode hides everything: play from memory. A wrong move is shown, explained and
  taken back so you can try again. Two misses at the same position reveal the answer.
- Moves that are fine but not part of the repertoire are marked as *playable* (yellow) and don't
  count as mistakes.
- **Why? questions**: in Learn mode, key moves and the end of each line come with a multiple-choice
  question about the idea behind the move or the plan. Every answer, right or wrong, is explained.
  Questions you keep getting right come back only now and then.
- **Sidelines and traps**: besides the main lines, each opening has sidelines (typical deviations)
  and traps (the opponent makes a common mistake and you have to punish it). In a trap, the
  explanation of the opponent's mistake is held back until you've found the punishment.
- **Surprise me** (Practice): a main-line run sometimes turns into one of the sidelines or traps
  that branch off it, the way real opponents leave the book.
- **Smart pick** chooses lines with a simple spaced-repetition scheme: each line has a mastery
  level 0–5. A perfect Practice run raises it by 1, and a run with mistakes or hints drops it by 2.
  Weaker lines come up more often.
- Shortcuts: `H` hint, `R` restart line, `N` next line, `1`–`4` answer a question, `Enter` continue.

Mistake explanations come from two sources: hand-written ones in the repertoire files, and an
automatic fallback that detects hanging pieces, pieces attacked by cheaper ones, allowing mate
in one, early queen/king moves, moving a piece twice, knights on the rim, locking in a bishop,
and early flank/f-pawn moves.

## Repertoires

`data/london.js` and `data/italian.js` (White), `data/caro-kann.js` and `data/kings-indian.js` (Black). Each file has:

- `lines`: the moves of each line in SAN, plus the `plan` shown when the line is complete.
  A line must end on your own move. `kind` is `"sideline"` or `"trap"` (main lines leave it out);
  a trap also has `error`, the moves up to and including the opponent's mistake.
- `notes`: an explanation for every move, keyed by the moves played so far including that move
  (`"d4 d5 Bf4"`). Shared prefixes between lines only need one note.
- `mistakes`: for a position (moves played so far, `""` for the start), wrong moves and why
  they're wrong.
- `alts`: playable non-repertoire moves. The note must give a concrete reason why the repertoire
  move is preferred (a tempo, a weakness, a plan it fits); "our repertoire plays X" alone isn't
  enough.
- `quizzes`: questions asked after the move at that path, as
  `{"q": "...", "options": [{"text": "...", "ok": true, "why": "..."}, {"text": "...", "why": "..."}]}`
  with 2–4 options and exactly one `ok`. Every option needs a `why`, including the wrong ones.
  Don't put questions inside a trap: they would give the punishment away.

To add a line, append it to `lines` and add notes for any new moves. If a move in `lines`
is illegal, the browser console reports it when the page loads.
