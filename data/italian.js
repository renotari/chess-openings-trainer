window.REPERTOIRES = window.REPERTOIRES || [];
window.REPERTOIRES.push({
  "id": "italian",
  "name": "1.e4: Italian & Alapin",
  "side": "w",
  "intro": "1.e4 e5 2.Nf3 Nc6 3.Bc4: the bishop goes straight for f7, the weakest square in Black's camp (only the king defends it). We play the modern, quiet version, the Giuoco Pianissimo: c3 and d3 build a solid pawn base that protects e4 and keeps d4 in reserve, then O-O, Re1, and the knight's journey Nbd2–f1–g3 toward the kingside. Like the London, it is a SETUP you can play against almost everything Black does, so you learn plans instead of long forced lines. The file also covers Black's main 2nd-move alternatives: the Petrov (2...Nf6), the Stafford Gambit, the Philidor (2...d6) and the Blackburne Shilling trap (3...Nd4). Against the Sicilian (1...c5) we use the same idea as in the Italian: 2.c3, the Alapin. The pawn on c3 prepares d4, so you get the classical pawn center and avoid the huge theory of the Open Sicilian (Najdorf, Dragon and friends).",
  "lines": [
    {
      "id": "pianissimo",
      "name": "Giuoco Pianissimo: 3...Bc5 4.c3 Nf6 5.d3",
      "moves": "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7 Nbd2",
      "plan": "The classic manoeuvre comes next: Nf1 and Ng3 (or Ne3), bringing the knight toward f5 and h5 near Black's king. Add h3 to stop ...Bg4 and ...Ng4, and then choose: Bg5 or Be3 to fight the a7-bishop, or the central break d3–d4 when your pieces are ready. On the queenside, a4 gains space if Black plays ...b5. Don't rush: this opening rewards patience."
    },
    {
      "id": "pianissimo-d6",
      "name": "4...d6 first (transposition)",
      "moves": "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6 d3 Nf6 O-O",
      "plan": "This is the same position as the main line after 6.O-O, reached with a different move order. Same plans: Re1, Bb3 (before ...Na5 or ...b5 can hit the bishop), Nbd2–f1–g3 and h3."
    },
    {
      "id": "two-knights-be7",
      "name": "Two Knights: 3...Nf6 4.d3 Be7",
      "moves": "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6 c3",
      "plan": "The structure is the same as in the Giuoco Pianissimo, only Black's bishop sits more modestly on e7. Plans: Nbd2–f1–g3, h3, Bb3 to keep the bishop safe from ...Na5, and later d3–d4. Black's typical freeing tries are ...d5 and ...Na5 hunting your bishop: meet ...Na5 with Bb5 or Bc2 (after Bb3) and keep the bishop."
    },
    {
      "id": "two-knights-bc5",
      "name": "Two Knights: 4...Bc5 5.c3 (transposition)",
      "moves": "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5 c3",
      "plan": "Look at the board: this is exactly the Giuoco Pianissimo position after 5.d3. Continue as in the main line: O-O, Re1, Bb3, Nbd2–f1–g3."
    },
    {
      "id": "hungarian",
      "name": "Hungarian Defence: 3...Be7",
      "kind": "sideline",
      "moves": "e4 e5 Nf3 Nc6 Bc4 Be7 d3 Nf6 O-O",
      "plan": "We have transposed to the Two Knights with ...Be7. Next: Re1, c3 and Nbd2–f1–g3. Black's setup is solid but passive, so there's no hurry: build up and prepare d3–d4."
    },
    {
      "id": "d5-break",
      "name": "Black breaks early: 5...d5",
      "kind": "sideline",
      "moves": "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d5 exd5 Nxd5 O-O O-O Re1",
      "plan": "Black's e5-pawn is the target: Nf3 and Re1 hit it, and only the Nc6 defends it. Black usually answers ...f6 (weakening his king's diagonal: your Bc4 now aims at g8!) or ...Bg4 pinning your knight. Next: Nbd2–e4 to hit the Bc5, Bb3 to keep the bishop safe from ...Nb6 or ...Na5, and h3 against ...Bg4. Watch out for ...Nf4 jumping into your kingside."
    },
    {
      "id": "blackburne",
      "name": "Blackburne Shilling: 3...Nd4 (don't take on e5!)",
      "kind": "sideline",
      "moves": "e4 e5 Nf3 Nc6 Bc4 Nd4 Nxd4 exd4 O-O",
      "plan": "Black has moved one knight three times only to trade it, and now has a weak pawn on d4. Next: c3 to open the c-file and trade off the d4-pawn (if ...dxc3, Nxc3 and you're well ahead in development), d3, Re1 and Nbd2. Your lead in development is the advantage: open the position."
    },
    {
      "id": "philidor",
      "name": "Philidor: 2...d6 3.d4",
      "kind": "sideline",
      "moves": "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Be2 O-O O-O",
      "plan": "You have more space and a strong knight on d4, Black has a cramped position with a d6-pawn that limits his pieces. Next: f4 (gaining even more space and preparing e5), Bf3 or Re1, Be3. Avoid unnecessary trades: the side with less space suffers more when pieces stay on the board."
    },
    {
      "id": "petrov",
      "name": "Petrov: 2...Nf6 3.Nxe5 d6",
      "kind": "sideline",
      "moves": "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3",
      "plan": "Castle, then put pressure on Black's well-placed knight on e4: Re1, c4 (attacking d5, its support) and Nc3 to challenge it. Black's position is solid, so play for a small lasting edge and develop quickly."
    },
    {
      "id": "stafford",
      "name": "Stafford Gambit: 3...Nc6",
      "kind": "sideline",
      "moves": "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Be2",
      "plan": "You're a clean pawn up, and Black's only compensation is quick tricks against f2 and your king. Next: Nc3 or Nd2–f3, c3, O-O, Be3 to trade off the dangerous Bc5. If Black plays ...h5 and ...Ng4, don't grab the knight with h3xg4: that opens the h-file for his rook. Every trade takes away his attack and brings you closer to a won endgame."
    },
    {
      "id": "trap-petrov-nf6",
      "name": "Trap: 3...Nxe4 4.Qe2 Nf6?? 5.Nc6+",
      "kind": "trap",
      "moves": "e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Nf6 Nc6+",
      "plan": "Discovered check! Black has to answer the check from your queen (...Be7 or ...Qe7), and then your knight takes his queen (Nxd8, or Nxe7 if the queen blocked). You'll be a queen up: trade pieces and finish development.",
      "error": "e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Nf6"
    },
    {
      "id": "stafford-h5",
      "name": "Stafford: 6.Be2 h5 7.c3",
      "kind": "sideline",
      "moves": "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Be2 h5 c3",
      "plan": "Black played ...h5 to support ...Ng4 and to use the h-file. Stay calm: c3 prepares d4 and gives your queen the a4/b3 squares. Castle only when ...Ng4 and ...Qh4 no longer work, Be3 to trade off the Bc5, and never take a knight on g4 with h3xg4 when the h-file would open."
    },
    {
      "id": "alapin-d5",
      "name": "Sicilian Alapin: 2.c3 d5",
      "moves": "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 e6 Be2 Nc6 O-O",
      "plan": "Sooner or later Black plays ...cxd4 and after cxd4 you get an isolated d-pawn (no pawns on the c- or e-file next to it). It is weak in an endgame but gives you space and activity in the middlegame: Nc3 with tempo on the queen, Be3, Bd3, Qe2, rooks to d1 and c1. Your outpost is e5 for the knight, and the d4–d5 break opens the position when your pieces are ready. Keep pieces on the board and play actively."
    },
    {
      "id": "alapin-nf6",
      "name": "Sicilian Alapin: 2.c3 Nf6 3.e5",
      "moves": "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 Bc4 Nb6 Bb3",
      "plan": "Recapture on d4 with the c-pawn at the right moment: d4 + e5 give you a big space advantage. Then O-O, Nc3, Qe2 and Rd1. Black will hit e5 with ...d6: support it if you can, or take exd6 and use your lead in development. Your Bb3 keeps aiming at f7. If Black ever takes ...dxc3, recapture Nxc3: you're a pawn down but way ahead in development."
    },
    {
      "id": "alapin-e6",
      "name": "Sicilian Alapin: 2...e6 (French Advance)",
      "kind": "sideline",
      "moves": "e4 c5 c3 e6 d4 d5 e5 Nc6 Nf3 Qb6 a3",
      "plan": "This is a French Defence, Advance Variation, reached through the Sicilian. Next: b4 to gain queenside space and question the c5-pawn, then Bd3, O-O and Nbd2. If Black closes the queenside with ...c4, it's locked: switch to the kingside, where your e5-pawn cramps Black (Nbd2–f1–g3, h4)."
    },
    {
      "id": "alapin-d6",
      "name": "Sicilian Alapin: 2...d6",
      "kind": "sideline",
      "moves": "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O",
      "plan": "You got the ideal two-pawn center (d4 + e4). Keep it solid and well protected: h3 (against ...Bg4), Be3, Qd2, rooks to the center. Later a pawn break opens the game: d4–d5 to gain space, or e4–e5 to kick the knight on f6. Black's counterplay is ...Bg4 and ...Nc6 hitting d4, so keep an eye on that pawn."
    },
    {
      "id": "trap-alapin-ne4",
      "name": "Trap: 3...Ne4? 4.d3, the knight is trapped",
      "kind": "trap",
      "moves": "e4 c5 c3 Nf6 e5 Ne4 d3 Ng5 Bxg5",
      "plan": "You won a knight for nothing. Finish development (Nf3, Be2, O-O, d4) and trade pieces: with an extra piece, simple chess wins.",
      "error": "e4 c5 c3 Nf6 e5 Ne4"
    }
  ],
  "notes": {
    "e4": "1.e4: the pawn grabs the center, controls d5 and f5, and opens two diagonals at once: one for the queen and one for the f1-bishop, which in the Italian goes to c4.",
    "e4 e5": "Black copies you and claims his share of the center.",
    "e4 e5 Nf3": "Develop with a threat: the knight attacks the e5-pawn, so Black has to spend his next move defending it. Nf3 also guards d4 and h2 and prepares castling.",
    "e4 e5 Nf3 Nc6": "The most natural defence: the knight protects e5 and develops toward the center.",
    "e4 e5 Nf3 Nc6 Bc4": "The Italian Game. The bishop takes the a2–g8 diagonal and aims at f7, the weakest square in Black's camp: only the king defends it. It also controls d5, so Black can't easily play ...d5.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5": "Black mirrors you: his bishop goes to c5 and aims at YOUR weak square, f2. This is the Giuoco Piano, the 'quiet game'.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3": "c3 has two jobs. It prepares d4 to build a big center later, and it takes the d4-square away from Black's knight and bishop. It also gives your bishop a retreat path (b3–c2) if it ever gets chased.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6": "Black develops and attacks your e4-pawn. Right now nothing defends it.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3": "Defend e4 with a pawn: d3. This is the Giuoco Pianissimo ('very quiet game'): a solid, flexible setup where you keep d3–d4 in reserve. Your dark-squared bishop can now come out too.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6": "Black also builds a solid center: d6 supports e5 and opens the c8-bishop.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O": "Get your king safe before anything else. Your rook comes toward the center, ready for Re1.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O": "Black castles as well.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1": "The rook goes to e1 to support e4 and, just as important, to free f1 for the knight: the plan is Nbd2–f1–g3, bringing it toward the kingside.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6": "A useful waiting move: ...a6 prepares ...Ba7 (so the bishop can't be hit by d4 or b4) and ...b5 to chase your bishop.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3": "Retreat the bishop BEFORE Black can hit it: after ...b5 or ...Na5 it would have to move anyway, losing a tempo. On b3 it still aims at f7 along the same diagonal.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7": "Black does the same with his bishop: on a7 it's safe from d3–d4 and keeps aiming at f2.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7 Nbd2": "The queen's knight starts its journey: d2, then f1 and g3. It can't go to c3 (your pawn is there), and on d2 it doesn't block anything: the c1-bishop's diagonal stays open.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6": "Black protects e5 first and keeps ...Nf6 for later.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6 d3": "Same setup as always: d3 builds the solid center and keeps the structure you know from the main line.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6 d3 Nf6": "Black develops. We're back in the main-line position by transposition.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6 d3 Nf6 O-O": "Castle, exactly as in the main line.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6": "The Two Knights Defence: instead of copying with ...Bc5, Black counterattacks your e4-pawn right away.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3": "Defend e4 calmly with d3. 4.Ng5 attacking f7 is famous, but after 4...d5 it leads to sharp, heavily analysed positions where Black gets lots of play for a pawn. d3 keeps the game in our familiar Pianissimo structure.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7": "Black chooses a modest but solid setup: the bishop stays on e7, ready to castle.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O": "King safety first. Castling also connects your pieces and gets the rook ready for e1.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O": "Black castles too.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1": "Rook to e1: it protects e4 and frees f1 for the knight's trip Nbd2–f1–g3.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6": "Black supports e5 and opens his light-squared bishop.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6 c3": "The usual c3: it prepares d4, takes d4 from Black's knight, and gives your bishop the b3–c2 retreat path if Black plays ...Na5.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5": "Black puts the bishop on c5 after all.",
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5 c3": "c3, and we have reached the Giuoco Pianissimo with a different move order (a transposition).",
    "e4 e5 Nf3 Nc6 Bc4 Be7": "The Hungarian Defence: a very solid, rather passive setup. The bishop on e7 doesn't put any pressure on f2.",
    "e4 e5 Nf3 Nc6 Bc4 Be7 d3": "Keep the same structure as in the other lines: d3 supports e4 and opens the c1-bishop.",
    "e4 e5 Nf3 Nc6 Bc4 Be7 d3 Nf6": "Black develops his knight, attacking e4 (which is already defended by d3).",
    "e4 e5 Nf3 Nc6 Bc4 Be7 d3 Nf6 O-O": "Castle. The position is now the same as in the Two Knights with ...Be7.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d5": "Black strikes in the center at once, hitting e4 and your Bc4's diagonal.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d5 exd5": "Take: after exd5 Black's e5-pawn loses its friend on d5, and your Bc4 attacks d5 again.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d5 exd5 Nxd5": "Black recaptures with the knight, which now stands in the center but can be hit.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d5 exd5 Nxd5 O-O": "Castle first. Your king is safe, and the rook gets ready to come to e1 against the e5-pawn.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d5 exd5 Nxd5 O-O O-O": "Black castles too.",
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d5 exd5 Nxd5 O-O O-O Re1": "Now e5 is attacked twice (Nf3 and Re1) and defended only once (Nc6). Black has to spend time on it, for example with ...f6, which weakens the a2–g8 diagonal toward his king.",
    "e4 e5 Nf3 Nc6 Bc4 Nd4": "The Blackburne Shilling Gambit: the knight jumps forward a second time and leaves e5 defended by nothing. It's a trap: it looks like a free pawn.",
    "e4 e5 Nf3 Nc6 Bc4 Nd4 Nxd4": "Trade off the knight. Black has moved it twice only to swap it, so you gain time, and after ...exd4 his pawn on d4 is overextended.",
    "e4 e5 Nf3 Nc6 Bc4 Nd4 Nxd4 exd4": "Black recaptures. His pawn on d4 cramps you a little, but it's weak and alone.",
    "e4 e5 Nf3 Nc6 Bc4 Nd4 Nxd4 exd4 O-O": "Castle and get ready to open the position with c3. With more pieces out, opening lines favours you.",
    "e4 e5 Nf3 d6": "The Philidor Defence: Black protects e5 with a pawn. Solid, but the d6-pawn blocks the f8-bishop.",
    "e4 e5 Nf3 d6 d4": "Challenge the center at once. Black must decide: give up the center with ...exd4, or hold it and accept a cramped position.",
    "e4 e5 Nf3 d6 d4 exd4": "Black gives up the center.",
    "e4 e5 Nf3 d6 d4 exd4 Nxd4": "Recapture with the knight: it stands beautifully in the center and doesn't get kicked like a queen would (...Nc6).",
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6": "Black develops and attacks e4.",
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3": "Develop and defend e4 at the same time.",
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7": "Black gets ready to castle.",
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Be2": "Quiet and safe: the bishop gets out of the way so you can castle next move, and it doesn't stand on c4 where ...Nxe4 and ...d5 could hit it with a fork.",
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Be2 O-O": "Black castles.",
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Be2 O-O O-O": "Castle too. Development is complete, and you have a nice space advantage.",
    "e4 e5 Nf3 Nf6": "The Petrov (or Russian) Defence: instead of defending e5, Black counterattacks your e4-pawn.",
    "e4 e5 Nf3 Nf6 Nxe5": "Take the pawn. Black can't simply take back on e4: 3...Nxe4? 4.Qe2! is a trap we'll see.",
    "e4 e5 Nf3 Nf6 Nxe5 d6": "The correct move: Black kicks your knight before recovering his pawn.",
    "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3": "Retreat to f3, the knight's natural square, where it protects your kingside. (Never 4.Nxf7?: you give a knight for a pawn.)",
    "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4": "Black wins back his pawn. Material is equal.",
    "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4": "Take the center: d4 controls e5 and c5 and opens your c1-bishop.",
    "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5": "Black supports his knight on e4 with ...d5.",
    "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3": "Develop with pressure: the bishop attacks the knight on e4 and prepares castling.",
    "e4 e5 Nf3 Nf6 Nxe5 Nc6": "The Stafford Gambit: Black gives a pawn for quick development and some tricky traps. Popular online, but objectively unsound if you know what to do.",
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6": "Take the knight. Your knight was attacked, and this keeps the extra pawn.",
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6": "Black recaptures toward the center, opening lines for his queen and c8-bishop.",
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3": "The key move: d3 protects e4 with a pawn, so ...Nxe4 never works, and it opens the c1-bishop. Don't play e5?, which lets the knight jump to e4 with many tricks against f2.",
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5": "The Stafford bishop aims at f2. Black's ideas are ...Ng4 and ...Qh4 or ...Qd4 against f2.",
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Be2": "Develop and get ready to castle. The bishop on e2 also stops a pin with ...Bg4 and covers g4 against ...Ng4 ideas.",
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Be2 h5": "Typical Stafford: the h-pawn supports ...Ng4 and opens the h-file for the rook if you ever play h3xg4.",
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Be2 h5 c3": "Calm: c3 prepares d4 (hitting the Bc5) and lets your queen come to b3 or a4. Don't play h3?: after ...Ng4 you can't take with the pawn without opening the h-file.",
    "e4 e5 Nf3 Nf6 Nxe5 Nxe4": "Black copies you, but it's a mistake: your queen can attack the knight on the e-file.",
    "e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2": "Attack the knight. If it moves away, Nc6+ (or another knight move) uncovers a check from your queen on Black's king, and Nc6 also hits his queen on d8. Black's best is ...Qe7, with a slightly worse position.",
    "e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Nf6": "Black's knight retreated. It's a blunder: the e-file between your queen and his king is now open, with only your own knight in the way.",
    "e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Nf6 Nc6+": "Discovered check! The knight moves out of the way, your queen gives check on the e-file, and the knight on c6 attacks Black's queen on d8. Black has to deal with the check, so he loses the queen.",
    "e4 c5": "The Sicilian Defence, the most popular answer to 1.e4. Black fights for d4 from the side, with a flank pawn instead of a central one.",
    "e4 c5 c3": "The Alapin: 2.c3 prepares d4 so that, if Black ever takes on d4, you recapture with a pawn and keep a full pawn center. It also avoids the Open Sicilian, where Black gets very rich and theoretical counterplay.",
    "e4 c5 c3 d5": "Black strikes the center at once, before you get d4 in.",
    "e4 c5 c3 d5 exd5": "Take: otherwise ...dxe4 removes your center pawn.",
    "e4 c5 c3 d5 exd5 Qxd5": "Black recaptures with the queen. Normally that costs a tempo when a knight hits it, but here your c3-pawn takes away the c3-square from your knight, so the queen sits safely in the center.",
    "e4 c5 c3 d5 exd5 Qxd5 d4": "Build the center you prepared with c3. d4 also opens the c1-bishop.",
    "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6": "Black develops.",
    "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3": "Develop the king's knight: it guards d4 and prepares castling.",
    "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 e6": "Black solidifies his position and opens the f8-bishop.",
    "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 e6 Be2": "A quiet, safe square: the bishop prepares castling and doesn't stand on d3 where ...Nb4 or ...c4 could hit it.",
    "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 e6 Be2 Nc6": "Black adds a third attacker on d4 (knight, queen, c5-pawn).",
    "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 e6 Be2 Nc6 O-O": "Castle. d4 is defended enough (Nf3, c3, Qd1) and your king is safe before the center opens.",
    "e4 c5 c3 Nf6": "Black attacks e4 at once. Since the c3-pawn stops you from defending it with Nc3, you push it.",
    "e4 c5 c3 Nf6 e5": "Gain space and kick the knight. Your e5-pawn takes d6 and f6 away from Black's pieces.",
    "e4 c5 c3 Nf6 e5 Nd5": "The knight's best square, in the center.",
    "e4 c5 c3 Nf6 e5 Nd5 d4": "Build the big center. If ...cxd4, you can take back with the c-pawn.",
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4": "Black exchanges in the center.",
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3": "Develop first: the pawn on d4 isn't going anywhere, and the knight protects d4 and e5.",
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6": "Black develops and adds pressure on d4 and e5.",
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 Bc4": "Attack the knight on d5. Your bishop also aims at f7 again, just like in the Italian.",
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 Bc4 Nb6": "The knight retreats and hits your bishop.",
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 Bc4 Nb6 Bb3": "Keep the bishop on the a2–g8 diagonal. On b3 it's safe and still points at f7.",
    "e4 c5 c3 Nf6 e5 Ne4": "A mistake: the knight goes forward into your camp, where it has no safe way back.",
    "e4 c5 c3 Nf6 e5 Ne4 d3": "Kick the knight. Look at its escape squares: d6 and f6 are covered by your e5-pawn, g5 by your Bc1 (now that d3 opened the diagonal), c5 is blocked by Black's own pawn, and every other square is defended. The knight is trapped!",
    "e4 c5 c3 Nf6 e5 Ne4 d3 Ng5": "The knight tries g5, but it isn't safe there.",
    "e4 c5 c3 Nf6 e5 Ne4 d3 Ng5 Bxg5": "Take it. You're a whole piece up.",
    "e4 c5 c3 e6": "Black prepares ...d5, French style.",
    "e4 c5 c3 e6 d4": "Take the center: d4 is exactly what c3 prepared.",
    "e4 c5 c3 e6 d4 d5": "Black attacks e4.",
    "e4 c5 c3 e6 d4 d5 e5": "Push past: e5 gains space and keeps the center closed. This is a French Advance, where your c3-pawn is already in the right place.",
    "e4 c5 c3 e6 d4 d5 e5 Nc6": "Black attacks d4 again.",
    "e4 c5 c3 e6 d4 d5 e5 Nc6 Nf3": "Develop and defend d4.",
    "e4 c5 c3 e6 d4 d5 e5 Nc6 Nf3 Qb6": "The queen attacks d4 and b2. A typical French move.",
    "e4 c5 c3 e6 d4 d5 e5 Nc6 Nf3 Qb6 a3": "a3 prepares b4, gaining queenside space and taking c5 and b4 away from Black. It also stops ...Nb4 or ...Bb4 forever.",
    "e4 c5 c3 d6": "Black plays a quiet move, keeping ...Nf6 for later.",
    "e4 c5 c3 d6 d4": "Take the center right away.",
    "e4 c5 c3 d6 d4 cxd4": "Black exchanges.",
    "e4 c5 c3 d6 d4 cxd4 cxd4": "Recapture with the pawn: this is exactly why you played c3. Now you have the ideal center with pawns on d4 and e4.",
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6": "Black attacks e4.",
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3": "Now the knight can go to c3 (the c-pawn is gone from there): it defends e4 and develops.",
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6": "Black fianchettoes: his bishop will press on d4 from g7.",
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6 Nf3": "Develop and protect d4.",
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6 Nf3 Bg7": "The bishop takes the long diagonal toward d4 and b2.",
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6 Nf3 Bg7 Be2": "A solid square: the bishop prepares castling and doesn't block the queen's protection of d4.",
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O": "Black castles.",
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O": "Castle too: development done, center intact."
  },
  "mistakes": {
    "": {
      "d4": "1.d4 is a great move, and it's how your London starts! But this drill is the Italian Game, which begins with 1.e4."
    },
    "e4 e5": {
      "Qh5": "Bringing the queen out on move 2 is a beginner's trick: after ...Nc6 (defending e5) and ...g6 or ...Nf6, Black develops while kicking your queen around, and you lose time.",
      "Bd3": "The bishop blocks your d-pawn: your d2-pawn can't move, so your c1-bishop is stuck too."
    },
    "e4 e5 Nf3 Nc6": {
      "Bd3": "The bishop blocks your d-pawn, and with it your c1-bishop. On c4 it's much more active and aims at f7.",
      "Nxe5": "The pawn is defended: ...Nxe5 and you've given a knight for a pawn."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5": {
      "Nxe5": "e5 is defended by the knight on c6: ...Nxe5 and you've lost a knight for a pawn.",
      "Bxf7+": "...Kxf7 and you've given a bishop for a pawn. The follow-up Ng5+ doesn't work: ...Qxg5 just takes the knight, because the e7-square is empty and the queen's diagonal d8–g5 is open."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6": {
      "O-O": "Your e4-pawn is attacked by the Nf6 and nothing defends it any more (c3 took the c3-square from your knight). ...Nxe4 wins a central pawn. Defend it first with d3.",
      "Ng5": "The knight moves twice in the opening, and f7 is easily covered: Black castles (the rook defends f7) and later ...h6 kicks the knight back. Meanwhile e4 is still hanging."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6": {
      "Ng5": "Moving the knight twice doesn't threaten anything real: ...O-O covers f7 with the rook, then ...h6 sends it back. You lose two tempi."
    },
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5": {
      "Ng5": "...O-O and f7 is covered by the rook. Your knight is out of play and will be kicked by ...h6, while the Bc5 still points at your f2."
    },
    "e4 e5 Nf3 Nc6 Bc4 Nd4": {
      "Nxe5": "That's exactly what Black wants! 4...Qg5! attacks your knight and the g2-pawn at once. If 5.Nxf7?? Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3#: smothered checkmate. Even after better moves Black wins material. Take the knight with Nxd4 instead."
    },
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6": {
      "Bc4": "Your e4-pawn is attacked by the Nf6 and nothing defends it: ...Nxe4 wins it. Nc3 develops and defends at the same time."
    },
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7": {
      "Bc4": "The fork trick: 7...Nxe4! 8.Nxe4 d5! and the pawn attacks your bishop on c4 and your knight on e4 at the same time. Black gets his piece back and frees his game. Be2 avoids it."
    },
    "e4 e5 Nf3 Nf6 Nxe5 d6": {
      "Nxf7": "The Cochrane Gambit: after ...Kxf7 you have just two pawns for a knight, and Black's king is not in real danger. Retreat the knight with Nf3."
    },
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6": {
      "e5": "This is exactly what the Stafford player hopes for: 5...Ne4! and if 6.d3 Bc5! 7.dxe4?? Bxf2+ 8.Ke2 Bg4+ wins your queen. Defend e4 with d3 and keep the e5-pawn at home.",
      "Bc4": "...Nxe4! and if Bxf7+? Kxf7: your e4-pawn disappears and Black's pieces flood in (...Bc5 against f2). d3 keeps e4 safe for good."
    },
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5": {
      "Bg5": "The famous Stafford trap: 6...Nxe4! 7.Bxd8?? Bxf2+ 8.Ke2 Bg4#. The knight leaves f6 with a hit on f2 and Black's minor pieces mate your king. Even without taking the queen you just lost the e4-pawn. Develop with Be2 instead.",
      "h3": "Prevents ...Ng4, but Black answers ...h5 and the knight comes to g4 anyway: you can't take with the pawn, because hxg4 hxg4 opens the h-file for Black's rook against your king. Be2 covers g4 instead."
    },
    "e4 c5 c3 d5 exd5 Qxd5": {
      "Bc4": "It hits the queen, but ...Qxg2! grabs your g-pawn with an attack on the h1-rook. Build the center with d4 first."
    },
    "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6": {
      "dxc5": "...Qxd1+ Kxd1: the queens come off, you lose the right to castle, and Black wins the pawn back with ...e5 or ...Nbd7. Develop with Nf3 instead."
    },
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4": {
      "Qxd4": "The queen comes out too early: ...Nc6 hits it and it has to move again, and the e5-pawn needs defending. Develop with Nf3."
    },
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 Bc4 Nb6": {
      "Bxf7+": "...Kxf7 and you've given a bishop for a pawn. Black's king walks to g8 and you have no attack to show for it."
    },
    "e4 c5 c3 Nf6 e5 Ne4": {
      "Nf3": "Natural, but it misses the chance: the knight on e4 has no retreat, and d3 would trap it."
    }
  },
  "alts": {
    "e4 e5": {
      "Bc4": "The Bishop's Opening is fine, but 2.Nf3 first is more useful: it attacks e5, so Black has to answer that threat instead of choosing his setup freely, and it prepares castling.",
      "Nc3": "The Vienna is a fine opening, but the knight on c3 blocks your c-pawn, so you can't build the c3 + d3 (and later d4) structure that our Italian is built on. 2.Nf3 also attacks e5 right away.",
      "f4": "The King's Gambit: you give a pawn for the center and open lines, but f4 also weakens your own king's diagonal e1–h4 (watch ...Qh4+) and the position becomes very sharp. Nf3 develops with a threat and keeps your king safe.",
      "d4": "The Center Game: after ...exd4 Qxd4 Nc6, the queen gets kicked and you lose a tempo. Nf3 develops first and keeps the d4 push for later, when it's well prepared."
    },
    "e4 e5 Nf3 Nc6": {
      "Bb5": "The Ruy Lopez is excellent, but it's the most theory-heavy opening in chess: Black has dozens of setups and the plans are slow and subtle. Bc4 hits f7 directly, and its plans (c3, d3, Nbd2–f1–g3) are easier to learn.",
      "d4": "The Scotch: good, but it opens the center at once and the pieces get traded early. Bc4 develops a piece and keeps the tension, which suits the slow c3/d3 plan.",
      "Nc3": "The Four Knights: solid, but the knight on c3 blocks your c-pawn, so the c3 + d3 + d4 plan is impossible. Bc4 develops while aiming at f7."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5": {
      "d3": "Also good and very common. We play c3 first because it prepares d4 and takes the d4-square away from Black's knight (no ...Nd4 jumps). d3 comes next anyway.",
      "O-O": "Fine, but c3 first keeps more options: it prepares d4, and if Black plays ...Nf6 you defend e4 with d3. After O-O, ...Nf6 and ...Nxe4 tricks appear on your e4-pawn.",
      "Nc3": "The knight on c3 blocks your c-pawn, so d4 can never be supported by c3. It also allows the fork trick ...Nxe4! Nxe4 d5, regaining the piece with a freer game.",
      "b4": "The Evans Gambit: you give the b-pawn to win time for c3 and d4. Exciting, but it's a real sacrifice, and Black can return the pawn at the right moment. c3 prepares d4 without giving anything away."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6": {
      "d4": "The classical Giuoco Piano: more ambitious, but after ...exd4 cxd4 Bb4+ the position opens up fast and you need to know concrete lines (and the e4-pawn can drop). d3 defends e4 safely and keeps the position under control."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6": {
      "Bb3": "A good move that you'll play soon anyway. Castling first is more urgent: your king is still in the center, while Black hasn't played ...a6 or ...Na5 yet, so the bishop isn't under any threat.",
      "Nbd2": "Playable, but castling first comes first: the knight's best route is d2–f1–g3, and f1 only becomes free after O-O and Re1.",
      "Bg5": "A normal pin, but with your king still in the center Black can answer ...h6 and ...g5, gaining space with tempo. Castle first so that ...g5 would only weaken HIS king."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O": {
      "Bb3": "Good and common. Re1 first is a bit more useful: it supports e4 and frees f1 for the knight's journey Nbd2–f1–g3, which is the main plan.",
      "h3": "A useful move (it stops ...Bg4 and ...Ng4), but not urgent yet. Re1 first: it protects e4 and makes room for the knight on f1.",
      "Nbd2": "Natural, but the knight wants to continue to f1, and that square is still taken by your rook. Re1 first, then Nbd2–f1."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6": {
      "a4": "A good alternative: it stops ...b5. But it doesn't stop ...Ba7 or ...Na5 hitting your bishop. Bb3 is the simplest way to keep the bishop safe and on its diagonal.",
      "Nbd2": "Playable, but after ...b5 your bishop is chased to b3 anyway, and Black gains queenside space with tempo. Retreat it in advance with Bb3."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7": {
      "h3": "A very normal move that takes g4 away from Black's pieces. Nbd2 first gets the knight's journey going; h3 can come after Nf1, since it fits both orders."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6": {
      "d4": "A strong, ambitious move: after ...exd4 cxd4 Bb6 you have a big center. But it requires concrete knowledge, and d3 keeps the same structure as all our other lines, so the same plans work everywhere."
    },
    "e4 e5 Nf3 Nc6 Bc4 Nf6": {
      "Ng5": "The famous attack on f7. After 4...d5 5.exd5 Na5 (not 5...Nxd5?! 6.Nxf7, the Fried Liver) Black gives a pawn for very active play, or he can try the Traxler 4...Bc5!?. It's a forest of sharp theory. d3 defends e4 and keeps the game in familiar Pianissimo territory.",
      "d4": "Leads to sharp lines (the Scotch Gambit / Max Lange) where you must know a lot of moves. d3 is calmer and keeps our c3/d3 structure.",
      "Nc3": "Allows the fork trick 4...Nxe4! 5.Nxe4 d5, when Black regains the piece with a free game. It also blocks your c-pawn. d3 simply protects e4.",
      "O-O": "Playable (after 4...Nxe4 5.Re1 or 5.d4 you get activity), but it gives the e4-pawn away. d3 defends it and keeps things simple."
    },
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7": {
      "c3": "Fine too, but castling first is more natural: there's nothing to prepare with c3 yet, while your king is still in the center."
    },
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O": {
      "c3": "Normal as well. Re1 first protects e4 and frees f1 for the knight, which is the first step of the main plan."
    },
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5": {
      "O-O": "Playable, but c3 first prepares d4, gives the bishop a b3–c2 retreat, and transposes straight into our main line, so you play positions you already know."
    },
    "e4 e5 Nf3 Nc6 Bc4 Be7": {
      "d4": "Objectively the strongest: Black's passive setup allows you to grab the center. But after ...exd4 the position opens up. d3 keeps the same Pianissimo structure as in the other lines and you still get a pleasant game."
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d5 exd5 Nxd5": {
      "Qb3": "Tempting (it attacks the d5-knight and f7), but ...Na5! hits the queen and gets rid of your Bc4. Castle first and play against e5."
    },
    "e4 e5 Nf3 Nc6 Bc4 Nd4": {
      "c3": "Kicking the knight is also good (...Nxf3+ Qxf3 and you're developing fast). Nxd4 is simpler: it trades the knight Black moved twice and leaves him a weak d4-pawn.",
      "O-O": "Safe, but it lets Black keep his knight on d4 and choose when to trade. Nxd4 forces the issue and leaves him with a weak pawn on d4."
    },
    "e4 e5 Nf3 Nc6 Bc4 Nd4 Nxd4 exd4": {
      "c3": "A great move too, attacking d4 at once. Castling first is simpler: your king is safe before the position opens, and c3 comes next."
    },
    "e4 e5 Nf3 d6": {
      "Bc4": "Natural, but it lets Black keep a solid center with ...Nf6 and ...Be7. 3.d4 challenges e5 right away and forces Black to choose between giving up the center or a cramped position."
    },
    "e4 e5 Nf3 d6 d4 exd4": {
      "Qxd4": "Playable, but ...Nc6 attacks your queen and she has to move again. The knight takes back without that problem."
    },
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7": {
      "Bf4": "A good, active move. Be2 is simpler: it lets you castle at once while the center is still opening, and the bishop on f4 can be hit by ...Nh5.",
      "Be3": "A good move too. Be2 first lets you castle straight away; Be3 can come later."
    },
    "e4 e5 Nf3 Nf6": {
      "Nc3": "Playable (it often transposes to the Four Knights), but it blocks your c-pawn. Nxe5 takes a pawn and makes Black prove he can win it back.",
      "d4": "A good alternative, but it opens the center while your pieces are still at home. Nxe5 is more direct: Black must find ...d6 first, and many players at your level go wrong with 3...Nxe4? or 3...Nc6."
    },
    "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4": {
      "Qe2": "Playable: ...Qe7 d3 Nf6 and the queens often come off. It's safe, but very drawish. d4 keeps more pieces and more central space.",
      "Nc3": "Good too: after ...Nxc3 dxc3 you get quick development. d4 is the main move: it grabs space and keeps your pawn structure healthy."
    },
    "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5": {
      "c4": "Possible, but your pieces aren't developed yet. Bd3 develops with pressure on e4 and gets you ready to castle."
    },
    "e4 e5 Nf3 Nf6 Nxe5 Nc6": {
      "Nf3": "Also safe, but after ...Nxe4 Black wins his pawn back. Nxc6 keeps the extra pawn: Black's only compensation is development."
    },
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6": {
      "Nc3": "Also defends e4, but after ...Bc5 and ...Ng4 the knight on c3 doesn't help defend f2. d3 protects e4 with a pawn and opens the c1-bishop."
    },
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3 Bc5 Be2 h5": {
      "Nc3": "Fine too. c3 is more flexible: it takes d4 from Black's queen, prepares d4 to hit the Bc5, and opens a4 and b3 for your queen."
    },
    "e4 c5": {
      "Nf3": "Leads to the Open Sicilian after d4 cxd4 Nxd4: Black gets the half-open c-file and a choice of huge theory (Najdorf, Dragon, Sveshnikov...). 2.c3 prepares d4 so you can recapture with a pawn and keep a full center.",
      "Nc3": "The Closed Sicilian: solid, but slow, and it gives up the fight for d4. 2.c3 prepares d4 so that you take the center with pawns.",
      "d4": "After ...cxd4 c3 you get the Smith-Morra Gambit: you give a pawn for development. 2.c3 first gets d4 in without giving anything away.",
      "Bc4": "Black answers ...e6 and ...d5, kicking the bishop with tempo. In the Sicilian f7 is well covered: 2.c3 and d4 is the plan."
    },
    "e4 c5 c3 d5": {
      "e5": "Playable, but after ...Bf5 or ...Nc6 Black gets a French-like position where his light-squared bishop is free. exd5 keeps the game open and you'll get the d4-center."
    },
    "e4 c5 c3 d5 exd5 Qxd5": {
      "Nf3": "Also good and common. d4 first takes the center right away: it's the move c3 prepared."
    },
    "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 e6": {
      "Bd3": "A good, more aggressive square. But after ...cxd4 cxd4 Nc6 and ...Nb4 the bishop gets chased. Be2 is safe from those hits.",
      "Na3": "Common in theory (heading for b5 or c4), but the knight on the rim does little at first. Be2 develops simply and prepares castling.",
      "Be3": "Fine too: it supports d4. Be2 first lets you castle next move, and Be3 can follow."
    },
    "e4 c5 c3 Nf6 e5 Nd5": {
      "Nf3": "Also good. d4 first builds the center at once: then if ...cxd4 you can recapture with a pawn."
    },
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4": {
      "cxd4": "The other main move, and good. Nf3 first develops and keeps the choice: you can recapture on d4 later."
    },
    "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6": {
      "cxd4": "Fine too. Bc4 develops with a threat (on the d5-knight) and gets the bishop to its Italian diagonal; you can still recapture on d4 later."
    },
    "e4 c5 c3 e6": {
      "Nf3": "Good too. d4 right away grabs the center before Black can play ...d5 comfortably."
    },
    "e4 c5 c3 e6 d4 d5": {
      "exd5": "Playable: ...exd5 Nf3 gives an open, symmetrical game. e5 gains space and closes the center, so Black's light-squared bishop stays locked in behind e6."
    },
    "e4 c5 c3 e6 d4 d5 e5 Nc6 Nf3 Qb6": {
      "Be2": "A main-line move too. a3 is more ambitious: it prepares b4 to gain space, and takes b4 away from Black's knight and bishop.",
      "Bd3": "The Milner-Barry Gambit: after ...cxd4 cxd4 Bd7 you give the d4-pawn for activity. a3 keeps the material."
    },
    "e4 c5 c3 d6 d4 cxd4": {
      "Qxd4": "...Nc6 hits the queen and you lose a tempo. cxd4 is the whole point of 2.c3: recapture with a pawn and keep the center."
    },
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6": {
      "Bd3": "Also defends e4, but it blocks the d-file, so d4 loses the queen's protection. Nc3 develops a piece and defends e4."
    },
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6": {
      "f4": "An aggressive setup with a big pawn center, but it weakens your king and needs precise play. Nf3 develops and protects d4 calmly."
    },
    "e4 c5 c3 d6 d4 cxd4 cxd4 Nf6 Nc3 g6 Nf3 Bg7": {
      "Bd3": "Possible, but it blocks the queen's protection of d4, and ...Bg4 pinning the Nf3 adds pressure. Be2 keeps d4 covered and prepares castling.",
      "Bc4": "The bishop is a target there: ...Nxe4! Nxe4 d5 is the fork trick. Be2 is safer."
    }
  },
  "quizzes": {
    "e4 e5 Nf3 Nc6 Bc4": {
      "q": "Why does the bishop go to c4?",
      "options": [
        {
          "text": "It aims at f7, the square only Black's king defends",
          "why": "f7 is the weak spot of Black's position at the start. The bishop on c4 also controls d5, making ...d5 harder.",
          "ok": true
        },
        {
          "text": "To protect the e4-pawn",
          "why": "The bishop on c4 doesn't defend e4 at all: that's a job for d3 later."
        },
        {
          "text": "To prepare queenside castling",
          "why": "We castle short in the Italian: Bc4 actually clears f1 for kingside castling."
        }
      ]
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3": {
      "q": "What is c3 for?",
      "options": [
        {
          "text": "It prepares d4 and takes d4 away from Black's pieces",
          "why": "With c3, a later d4 is supported by a pawn, and Black's knight or bishop can't land on d4.",
          "ok": true
        },
        {
          "text": "It frees c3 for the knight",
          "why": "The opposite: the pawn now occupies c3, so the knight develops via d2 instead."
        },
        {
          "text": "It defends the e4-pawn",
          "why": "c3 doesn't touch e4. That's why d3 follows after ...Nf6."
        }
      ]
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3": {
      "q": "Why d3 rather than the more ambitious d4?",
      "options": [
        {
          "text": "It defends e4 safely and keeps the position calm",
          "why": "After d4 exd4 cxd4 Bb4+ the game opens up and you need concrete lines. d3 holds e4 and keeps d4 in reserve for later.",
          "ok": true
        },
        {
          "text": "Because d4 loses a pawn by force",
          "why": "d4 is a perfectly good move (the classical Giuoco Piano); it's just much sharper."
        },
        {
          "text": "To prepare Qd2",
          "why": "The queen doesn't need d2. d3 is about protecting e4 and opening the c1-bishop."
        }
      ]
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1": {
      "q": "Besides supporting e4, why does the rook go to e1?",
      "options": [
        {
          "text": "To free f1 for the knight's trip Nbd2–f1–g3",
          "why": "That's the key Pianissimo manoeuvre: the knight reroutes toward the kingside, and it needs f1 to be empty.",
          "ok": true
        },
        {
          "text": "To attack Black's queen on the e-file",
          "why": "There's nothing on the e-file to attack: Black's queen is on d8."
        },
        {
          "text": "To prepare Re3 and a rook lift",
          "why": "A rook lift isn't the plan here. The rook supports e4 and makes room on f1."
        }
      ]
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3": {
      "q": "Nothing attacks the bishop yet. Why retreat it to b3 now?",
      "options": [
        {
          "text": "Black was ready to hit it with ...b5 or ...Na5; moving now doesn't lose a tempo",
          "why": "If you wait, ...b5 would chase it while Black gains space. Going to b3 in advance keeps it on the a2–g8 diagonal.",
          "ok": true
        },
        {
          "text": "To protect the a2-pawn",
          "why": "a2 isn't attacked. The point is to anticipate ...b5 and ...Na5."
        },
        {
          "text": "To prepare c4",
          "why": "We don't play c4 in this structure; the c-pawn stays on c3."
        }
      ]
    },
    "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Re1 a6 Bb3 Ba7 Nbd2": {
      "q": "What is the knight's typical route from d2?",
      "options": [
        {
          "text": "f1, then g3 (or e3), toward the kingside",
          "why": "From g3 it eyes f5 and h5 near Black's king. That's why the rook went to e1: to empty f1.",
          "ok": true
        },
        {
          "text": "b3, to support c4",
          "why": "The knight has no business on b3; the action is on the kingside."
        },
        {
          "text": "c4, to attack d6",
          "why": "From c4 it can be kicked by ...b5. The main route is f1–g3."
        }
      ]
    },
    "e4 e5 Nf3 Nc6 Bc4 Nf6 d3": {
      "q": "Why 4.d3 instead of the famous attack 4.Ng5?",
      "options": [
        {
          "text": "It keeps the game in our solid Pianissimo structure, without sharp theory",
          "why": "After 4.Ng5 d5 Black gives a pawn for lots of activity, and you need to know a forest of forced lines. d3 defends e4 calmly.",
          "ok": true
        },
        {
          "text": "Because 4.Ng5 loses a piece",
          "why": "4.Ng5 doesn't lose anything by force; it's a legitimate, very sharp line."
        },
        {
          "text": "To prepare Qd2 and long castling",
          "why": "We castle short. d3 is about protecting e4."
        }
      ]
    },
    "e4 e5 Nf3 Nc6 Bc4 Nd4 Nxd4": {
      "q": "The e5-pawn was undefended. Why not grab it with Nxe5?",
      "options": [
        {
          "text": "Because of ...Qg5!, hitting the knight and g2 at once",
          "why": "After 4.Nxe5? Qg5 5.Nxf7?? Qxg2 6.Rf1 Qxe4+ 7.Be2 Nf3# Black mates. Trading the knight on d4 is safe and good.",
          "ok": true
        },
        {
          "text": "Because Nxe5 hangs the bishop on c4",
          "why": "The Bc4 isn't attacked. The danger is ...Qg5 against your knight and g2."
        },
        {
          "text": "Because e5 was poisoned by ...Bb4+",
          "why": "There's no check: the problem is the double attack ...Qg5."
        }
      ]
    },
    "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Be2": {
      "q": "Why Be2 here and not the more active Bc4?",
      "options": [
        {
          "text": "Because of the fork trick ...Nxe4! Nxe4 d5",
          "why": "With the bishop on c4, Black gives back a knight on e4 and the d5-pawn attacks bishop and knight at once, winning the piece back. Be2 avoids it.",
          "ok": true
        },
        {
          "text": "Because Bc4 runs into ...b5",
          "why": "...b5 isn't the problem: the fork trick on e4 is."
        },
        {
          "text": "To protect the knight on d4",
          "why": "Be2 doesn't touch d4. It avoids the fork trick and prepares castling."
        }
      ]
    },
    "e4 e5 Nf3 Nf6 Nxe5 Nc6 Nxc6 dxc6 d3": {
      "q": "Why d3 in the Stafford, instead of e5?",
      "options": [
        {
          "text": "d3 protects e4 for good; e5 lets the knight jump to e4 with traps against f2",
          "why": "After 5.e5? Ne4 6.d3 Bc5! 7.dxe4?? Bxf2+ 8.Ke2 Bg4+ Black wins your queen. d3 kills all the ...Nxe4 tricks.",
          "ok": true
        },
        {
          "text": "To prepare Qd2 and O-O-O",
          "why": "No long castling here: d3 is about the e4-pawn."
        },
        {
          "text": "To attack Black's queen",
          "why": "d3 doesn't attack anything; it's a defensive move that takes away Black's tricks."
        }
      ]
    },
    "e4 c5 c3": {
      "q": "What's the main point of 2.c3 against the Sicilian?",
      "options": [
        {
          "text": "To play d4 and recapture with a pawn, keeping a full center",
          "why": "In the Open Sicilian you recapture with the knight and Black gets the c-file and lots of theory. With c3, cxd4 keeps two center pawns.",
          "ok": true
        },
        {
          "text": "To develop the queen to b3 or a4",
          "why": "The queen may use those squares later, but c3 is about d4."
        },
        {
          "text": "To stop ...Nc6",
          "why": "c3 doesn't stop ...Nc6; it prepares d4."
        }
      ]
    },
    "e4 c5 c3 d5 exd5 Qxd5": {
      "q": "Black brought his queen out early. Why isn't that just a lost tempo?",
      "options": [
        {
          "text": "Your c3-pawn takes c3 away from your knight, so you can't hit the queen with Nc3",
          "why": "Usually Nc3 would gain time on the queen. In the Alapin the queen is safe in the center for a while.",
          "ok": true
        },
        {
          "text": "Because the queen is protected by the Nf6",
          "why": "There's no knight on f6 yet. The reason is the c3-pawn blocking your knight."
        },
        {
          "text": "Because d5 is a very weak square for White",
          "why": "d5 isn't the issue: the queen can stay because Nc3 isn't possible."
        }
      ]
    },
    "e4 c5 c3 Nf6 e5": {
      "q": "Why push e5 instead of defending e4?",
      "options": [
        {
          "text": "Nc3 isn't possible, and e5 gains space while kicking the knight",
          "why": "Your c3-pawn takes the knight's natural square. e5 turns the problem into a plus: space and time.",
          "ok": true
        },
        {
          "text": "To prepare an immediate attack on Black's king",
          "why": "There's no attack yet: e5 is about space and tempo."
        },
        {
          "text": "Because e4 was defended by nothing and couldn't be defended",
          "why": "d3 could defend e4, but it's passive. e5 is more active."
        }
      ]
    }
  }
});
