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
- **Smart pick** chooses lines with a simple spaced-repetition scheme: each line has a mastery
  level 0–5. A perfect practice run raises it by 1, a run with mistakes or hints drops it by 2,
  and weaker lines come up more often.
- Shortcuts: `H` hint, `R` restart line, `N` next line.

Mistake explanations come from two sources: hand-written ones in the repertoire files, and an
automatic fallback that detects hanging pieces, pieces attacked by cheaper ones, allowing mate
in one, early queen/king moves, moving a piece twice, knights on the rim, locking in a bishop,
and early flank/f-pawn moves.

## Repertoires

`data/london.js` (White), `data/caro-kann.js` and `data/kings-indian.js` (Black). Each file has:

- `lines`: the moves of each line in SAN, plus the `plan` shown when the line is complete.
  A line must end on your own move.
- `notes`: an explanation for every move, keyed by the moves played so far including that move
  (`"d4 d5 Bf4"`). Shared prefixes between lines only need one note.
- `mistakes`: for a position (moves played so far, `""` for the start), wrong moves and why
  they're wrong.
- `alts`: playable non-repertoire moves, with a note on why the repertoire prefers its move.

To add a line, append it to `lines` and add notes for any new moves. If a move in `lines`
is illegal, the browser console reports it when the page loads.
