window.REPERTOIRES = window.REPERTOIRES || [];
window.REPERTOIRES.push({
  "id": "kings-indian",
  "name": "King's Indian Defence",
  "side": "b",
  "intro": "A fighting defence against 1.d4: you let White build a big pawn center (c4, d4, e4), then attack it. The setup is ...Nf6, ...g6, ...Bg7, ...d6, ...O-O, and then the key central strike ...e5 (sometimes ...c5). When White closes the center with d5, the game becomes a race: White attacks on the queenside, you attack on the kingside with ...f5, ...f4, ...g5. The g7-bishop is your soul — never trade it lightly.",
  "lines": [
    {
      "id": "mar-del-plata",
      "name": "Classical: Mar del Plata (9.Ne1)",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5",
      "plan": "The famous kingside pawn storm. Continue ...Ng6, ...Rf7 (or ...Rf6–h6), ...h5 and ...g4 to rip open White's king. Meanwhile White attacks on the queenside with c5. It's a race: don't defend the queenside passively — the kingside attack is your counterplay. A key idea is ...g4 followed by ...g3 or ...gxf3, and pieces flowing toward h2/g2."
    },
    {
      "id": "bayonet",
      "name": "Classical: Bayonet Attack (9.b4)",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1 f5 Ng5 Nf6",
      "plan": "Your knight returns to f6 to defend h7 and hit e4. Next ...h6 to kick the g5-knight, or ...c6 to fight on the queenside, or ...fxe4 to open the f-file. White's b4–c5 queenside push is fast, so look for active counterplay rather than passive defence."
    },
    {
      "id": "exchange",
      "name": "Exchange Variation (7.dxe5)",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8 Nd5 Nxd5 cxd5 c6",
      "plan": "The queens are off but the game is not a draw. Undermine the d5-pawn (...cxd5 at the right moment), develop with ...Nd7 and ...f6 or ...Nd7–c5, and use your king in the center. The g7-bishop and your solid e5-pawn give you a comfortable endgame — many club players think this line is 'drawish', but Black is often the one pressing."
    },
    {
      "id": "petrosian",
      "name": "Petrosian System (7.d5)",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5 Bg5 h6 Bh4 Na6",
      "plan": "Your knight goes to c5, a dream square: it attacks e4 and can't be kicked by b4 because of ...a5. Then ...Qe8 or ...Bd7, and eventually ...Nh7 (or ...g5 + ...Nh5) to prepare the ...f5 break. Be careful with ...g5: it permanently weakens f5."
    },
    {
      "id": "samisch",
      "name": "Sämisch (5.f3) with ...e5 and ...Nh5",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2 f5 O-O-O Nd7",
      "plan": "Kings on opposite sides — speed is everything. White's king is on c1, so open lines on the QUEENSIDE: ...a6 and ...b5 (often as a pawn sacrifice), ...Ndf6, ...Bd7 and ...Qe8–a4 ideas. Keep ...f4 in reserve to gain space and lock the e3-bishop out."
    },
    {
      "id": "samisch-nge2",
      "name": "Sämisch with 7.Nge2",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 Nge2 c6 Qd2 Nbd7",
      "plan": "Keep the central tension. Ideas: ...a6 and ...b5 to open the queenside (especially if White castles long), ...exd4 Nxd4 followed by ...Re8 and ...Ne5 hitting the weak squares created by f3, and ...Qa5 pressure. The f3-pawn weakened e3 and g3: your dark-squared bishop loves that."
    },
    {
      "id": "four-pawns",
      "name": "Four Pawns Attack (5.f4)",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5 e6 Be2 exd5 cxd5 Re8",
      "plan": "White's e4-pawn is under pressure from your rook and knight, and White wants to push e5. Typical continuations: ...Bg4 (removing the f3-knight that supports e5), ...b5 (a pawn sacrifice opening the queenside), ...Nbd7 and ...a6. If White plays e5, look for ...dxe5 fxe5 ...Ng4 hitting the e5-pawn."
    },
    {
      "id": "averbakh",
      "name": "Averbakh (5.Be2 and 6.Bg5)",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 d5 h6 Be3 e6",
      "plan": "After ...exd5 you get a Benoni-type structure: your g7-bishop is strong on the long diagonal and you have a queenside pawn majority. Continue with ...exd5, ...Re8, ...a6 and ...b5. Watch out for e4–e5 breaks; your rook on e8 helps control them."
    },
    {
      "id": "fianchetto",
      "name": "Fianchetto Variation (g3)",
      "moves": "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3 e5 e4 c6",
      "plan": "A slower, positional game. Ideas: ...Re8 and ...exd4 (then pressure e4 with ...Re8 and ...Nc5), ...Qb6 or ...Qa5, and ...a5 to secure c5. Don't rush ...exd4 unless you can follow up with pressure on e4."
    },
    {
      "id": "vs-london",
      "name": "Against the London System",
      "moves": "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8",
      "plan": "Next: ...e5! Now if dxe5 dxe5, the e5-pawn is protected by the queen along the e-file, and Nxe5 Nxe5 Bxe5 is met by recapturing. After ...e5 you can follow with ...Nh5 to hunt the London bishop, ...f5 for kingside play, or ...e4 to gain space and kick the f3-knight."
    }
  ],
  "notes": {
    "d4": "White opens with 1.d4.",
    "d4 Nf6": "The flexible King's Indian start: the knight controls e4 and doesn't commit your pawns yet.",
    "d4 Nf6 c4": "White grabs space with c4 — the main lines.",
    "d4 Nf6 c4 g6": "Prepare the fianchetto: the bishop on g7 will be a monster on the long a1–h8 diagonal, hitting d4 and the queenside.",
    "d4 Nf6 c4 g6 Nc3": "White develops and prepares e4.",
    "d4 Nf6 c4 g6 Nc3 Bg7": "Complete the fianchetto.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4": "White builds a big center (c4, d4, e4). The King's Indian philosophy: let White have it, then attack it with ...e5 (or ...c5).",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6": "Stop e4–e5 (which would kick your knight) and prepare ...e5. Always play ...d6 before castling here.",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3": "The Classical: natural development.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O": "Castle: your king is safe behind the fianchetto and ...e5 comes next.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2": "The Classical Variation.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5": "THE King's Indian move: strike the center. If White trades on e5, the queens come off with a fine game for you; if White plays d5, the center closes and you attack on the kingside with ...f5. (It's not a pawn loss: after dxe5 dxe5 Qxd8 Rxd8 Nxe5? ...Nxe4! regains it.)",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O": "White castles and keeps the tension.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6": "Pressure d4. The knight attacks d4 together with the e5-pawn and the g7-bishop (x-ray), forcing White to decide about the center.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5": "White closes the center with tempo. Now the race begins: White on the queenside (c5, b4), you on the kingside (...f5–f4, ...g5–g4).",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7": "The knight retreats to e7, heading toward the kingside (g6) and supporting the ...f5 break.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1": "White's knight heads to d3 to support c5, and it uncovers f2–f3 to block your kingside play.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7": "Clear the way for the f-pawn: with the knight off f6, ...f5 is possible. From d7 the knight can also come to f6 again later.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3": "White develops and eyes your queenside.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5": "The main break: attack the e4-pawn and start the kingside storm.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3": "White solidifies e4.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4": "Gain space with tempo on the e3-bishop and lock the kingside: now ...g5–g4 is coming.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2": "The bishop retreats.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5": "The pawn storm starts: ...g5, then ...g4 to break open White's king.",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4": "The Bayonet Attack: White rushes the queenside with b4 and c5.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5": "The knight jumps to h5 to free the f-pawn for ...f5 — faster than ...Nd7 — and it eyes the f4-square.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1": "White prepares Bf1 and makes room for his pieces.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1 f5": "The break: attack e4.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1 f5 Ng5": "The knight jumps to g5, eyeing e6 and h7.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1 f5 Ng5 Nf6": "The knight returns to f6: it covers h7 and the e4-pawn is attacked twice (Nf6, f5).",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5": "The Exchange Variation: White trades in the center hoping for a quiet game.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5": "Recapture with the pawn and keep your strong point on e5.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8": "White trades queens.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8": "Recapture with the rook — it lands on the open d-file.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5": "The bishop pins your f6-knight against the d8-rook.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8": "Unpin: the rook goes to e8 where it supports e5. Now the f6-knight is free.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8 Nd5": "The knight jumps to d5, hitting f6 and the c7-pawn.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8 Nd5 Nxd5": "Trade off the annoying knight.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8 Nd5 Nxd5 cxd5": "White recaptures toward the center.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8 Nd5 Nxd5 cxd5 c6": "Challenge the d5-pawn right away: after ...cxd5 White's center dissolves, and if White keeps it supported it can become a target.",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5": "The Petrosian System: White closes the center immediately.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5": "Stop b4 (White's main queenside plan) and secure the c5-square for your knight.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5 Bg5": "White pins the f6-knight, which makes ...f5 harder.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5 Bg5 h6": "Ask the bishop to decide. If it retreats to h4, the pin remains but you can break it later with ...g5.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5 Bg5 h6 Bh4": "The bishop keeps the pin.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5 Bg5 h6 Bh4 Na6": "The knight heads to c5 via a6: there it attacks e4 and can't be kicked by b4 (thanks to ...a5).",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3": "The Sämisch: White supports e4 with f3 and plans Be3, Qd2, O-O-O and a kingside pawn storm (g4, h4–h5).",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O": "Castle first, as always in the King's Indian.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3": "White develops the bishop to e3, preparing Qd2.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5": "Strike the center straight away.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5": "White closes the center.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5": "The knight goes to h5 to prepare ...f5. It's safe there for now: g4 would chase it but seriously weaken White's own kingside.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2": "White connects queen and bishop, ready to castle long.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2 f5": "Break immediately with ...f5.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2 f5 O-O-O": "White castles long: kings on opposite sides.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2 f5 O-O-O Nd7": "Develop the last minor piece; it can come to f6 or c5 next.",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 Nge2": "White keeps the tension and develops the knight to e2 (f3 is occupied by the pawn).",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 Nge2 c6": "Prepare ...b5 and ...cxd5 ideas to open the queenside, and give your queen access to a5/b6.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 Nge2 c6 Qd2": "White prepares to castle long.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 Nge2 c6 Qd2 Nbd7": "Develop the queen's knight: it supports e5 and can come to b6 or e5 (after ...exd4).",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4": "The Four Pawns Attack: White's most aggressive try, aiming for e4–e5.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O": "Castle first.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3": "White develops, supporting e5.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5": "Hit the center immediately: White's four-pawn center is overextended and his development is lagging.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5": "White advances; now a Benoni structure arises.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5 e6": "Undermine d5 at once to open the e-file against White's center and king.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5 e6 Be2": "White develops.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5 e6 Be2 exd5": "Open the e-file.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5 e6 Be2 exd5 cxd5": "White recaptures with the c-pawn, keeping the e4–d5 center.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5 e6 Be2 exd5 cxd5 Re8": "The rook on the open e-file attacks e4 (with the f6-knight) and makes White's e5 push harder.",

    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2": "The Averbakh: White plays Be2 and plans Bg5, delaying Nf3.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O": "Castle.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5": "The bishop pins your knight and discourages ...e5.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5": "Strike from the side: ...c5 is the most popular answer to the Averbakh.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 d5": "White advances.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 d5 h6": "Kick the bishop first, so the pin doesn't bother you when the center opens.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 d5 h6 Be3": "The bishop retreats, eyeing your c5-pawn and h6.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 d5 h6 Be3 e6": "Undermine d5: after ...exd5 you get open lines and a Benoni structure with active pieces.",

    "d4 Nf6 c4 g6 Nf3": "White develops the knight before Nc3.",
    "d4 Nf6 c4 g6 Nf3 Bg7": "Fianchetto as usual.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3": "The Fianchetto Variation: White also fianchettoes, a quiet positional approach.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O": "Castle.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2": "White completes his fianchetto.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6": "Prepare ...e5.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O": "White castles.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7": "The knight supports ...e5, so it won't be lost to dxe5 and Nxe5.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3": "White develops.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3 e5": "Now ...e5 is well supported.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3 e5 e4": "White builds a center.",
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3 e5 e4 c6": "Control d5 and b5, and open the d8–a5 diagonal for your queen. You keep the option of ...exd4 followed by ...Re8 pressure on e4.",

    "d4 Nf6 Bf4": "The London System! Your own opening, now from the other side.",
    "d4 Nf6 Bf4 g6": "The King's Indian setup works well against the London.",
    "d4 Nf6 Bf4 g6 e3": "White builds the London structure.",
    "d4 Nf6 Bf4 g6 e3 Bg7": "Fianchetto.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3": "White develops.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6": "Prepare ...e5, which would hit the f4-bishop.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3": "White prepares a retreat on h2 for his bishop.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O": "Castle.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2": "White develops modestly.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7": "Support the coming ...e5.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O": "White castles.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8": "The key move against the London: the queen leaves the d-file (so dxe5 dxe5 doesn't open it against her) and supports ...e5 along the e-file. Now ...e5 is ready."
  },
  "mistakes": {
    "d4": {
      "d5": "That leads to Queen's Gambit / London positions, not the King's Indian. Start with ...Nf6.",
      "f5": "That's the Dutch Defence — a different opening.",
      "e5": "The Englund Gambit: dxe5 and you're simply a pawn down."
    },
    "d4 Nf6 c4": {
      "e6": "That leads to the Nimzo-Indian or Queen's Gambit — good openings, but not ours. Prepare the fianchetto with ...g6.",
      "d5": "...d5 here gives White cxd5 Nxd5 e4 with a big center and tempo on your knight. Stick to ...g6.",
      "c5": "That's the Benoni — a cousin of the King's Indian, but not our repertoire."
    },
    "d4 Nf6 c4 g6 Nc3": {
      "d5": "That's the Grünfeld Defence — a great opening, but a different one. Complete the fianchetto with ...Bg7."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4": {
      "O-O": "e5! kicks your knight (to e8 or h5) with tempo and White gains a lot of space. Play ...d6 first so e5 is controlled.",
      "d5": "exd5 or cxd5 — you just lose the d-pawn or give White a huge center. In the King's Indian you play ...d6, not ...d5.",
      "Nxe4": "Nxe4 — the e4-pawn is defended by the c3-knight. You lose your knight for a pawn.",
      "c5": "d5 and White has a massive space advantage; your knight can be kicked by e5. Play ...d6 first."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3": {
      "e5": "Premature: dxe5 dxe5 Qxd8+ Kxd8 and you've lost the right to castle. Castle first, then ...e5.",
      "Nxe4": "Nxe4 — the e4-pawn is protected by the c3-knight. You lose a piece."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2": {
      "Nxe4": "Nxe4 — the e4-pawn is defended by the c3-knight. You lose a piece for a pawn.",
      "Bg4": "Trades your light-squared bishop for no reason and doesn't challenge the center. ...e5 is the thematic move.",
      "d5": "cxd5 or exd5 and you've lost a pawn. The break in the King's Indian is ...e5."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O": {
      "Nxe4": "Nxe4 — the c3-knight defends e4. You lose a piece.",
      "exd4": "A real line, but it gives White a free hand in the center after Nxd4. Our repertoire keeps the tension with ...Nc6."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5": {
      "Nd4": "Nxd4 exd4 Nb5 (or Qxd4) and your d4-pawn becomes a target. You've also traded the knight you need for the kingside attack. ...Ne7 heads for g6 and supports ...f5.",
      "Na5": "The knight is offside with no good squares (c6 is covered by the d5-pawn, c4 by the e2-bishop), and White can chase it with Qa4. Ne7 brings it toward the kingside.",
      "Nb8": "Too passive: the knight is undeveloped. Ne7 supports ...f5 and heads to g6."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1": {
      "Nxe4": "Nxe4 — the c3-knight protects e4. You lose your knight."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3": {
      "f6": "Too passive: it blocks your g7-bishop and doesn't challenge e4. The King's Indian break is ...f5.",
      "c5": "dxc6 bxc6 and your d6-pawn becomes weak. The play is on the kingside: ...f5."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3": {
      "fxe4": "Possible, but after fxe4 White gets the f-file too and the e4-pawn is solid. The aggressive ...f4 gains space with tempo and starts the kingside storm."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5": {
      "Nxe4": "Nxe4 — the c3-knight defends e4. Recapture on e5 with the pawn first.",
      "Ng4": "Too fancy: ...Ng4 tries to win the pawn back later, but White can defend it with Bf4 and keep the extra pawn. Just recapture ...dxe5."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5": {
      "Rd7": "Passive: the rook blocks your c8-bishop. Unpin with ...Re8, where the rook also defends e5.",
      "Rf8": "Wastes the tempo you gained; on e8 the rook defends e5 and unpins equally well.",
      "Nbd7": "Doesn't break the pin and leaves the rook on d8 tied up. After Nd5 White is very active. ...Re8 is cleaner."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8 Nd5": {
      "Nxe4": "Nxc7! forks your rooks on e8 and a8 — you lose an exchange.",
      "Na6": "Your f6-knight is attacked twice (Nd5 and Bg5) and defended once: Nxf6+ Bxf6 Bxf6 and you've lost a piece. Trade the d5-knight: ...Nxd5."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5": {
      "Nxe4": "Nxe4 — the c3-knight protects e4. You lose a piece."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3": {
      "e5": "dxe5 dxe5 Qxd8+ Kxd8 and you lose castling rights. Castle first.",
      "Nxe4": "...Nxe4 is no good: the e4-pawn is protected by the c3-knight and the f3-pawn."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3": {
      "Nxe4": "Nxe4 and fxe4 — e4 is defended twice. You lose a piece."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4": {
      "e5": "dxe5 dxe5 Qxd8+ Kxd8 and you've lost the right to castle (or fxe5 dxe5 d5 with a big space advantage for White). Castle first, then hit the center with ...c5."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3": {
      "e5": "White's f4-pawn attacks e5 directly: after dxe5 dxe5 Qxd8 Rxd8 fxe5 (or Nxe5) your e5-pawn falls and you have to scramble to win it back. ...c5 is the principled strike.",
      "Nbd7": "Too slow: e5! kicks your knight and White's space advantage becomes crushing. Strike first with ...c5."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5": {
      "e5": "dxe5 dxe5 Qxd8 Rxd8 Nd5! and the pin plus the threats on c7 and f6 are very unpleasant. ...c5 is the right reaction.",
      "Nxe4": "...Nxe4? Nxe4 and you've lost a piece — e4 is protected by the c3-knight."
    },
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O": {
      "e5": "...e5 right now runs into dxe5 dxe5 Qxd8 Rxd8 Nxe5: nothing defends your e5-pawn. Support it first with ...Nbd7."
    },
    "d4 Nf6 Bf4 g6 e3": {
      "Nh5": "Too early: Bg5 h6 Bh4 g5 Bg3 and you've weakened your kingside just to trade a bishop. Finish your setup first."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2": {
      "e5": "dxe5 dxe5 Qxd8 Rxd8 Nxe5 (or Bxe5): your e5-pawn is attacked by the f3-knight and the f4-bishop and defended by nothing. You lose a pawn."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O": {
      "e5": "dxe5 dxe5 Nxe5! Nxe5 Bxe5 and you're a pawn down: your queen can't help on e5 from d8. Prepare ...e5 with ...Qe8 (or ...Re8) first.",
      "c5": "Playable, but it doesn't fit the ...e5 plan: c3 holds d4 and your d6 can become weak. Our repertoire prepares ...e5 with ...Qe8."
    }
  },
  "alts": {
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2": {
      "Nbd7": "The old main line — also fine. Our repertoire plays ...e5 immediately.",
      "c5": "A Benoni-style approach that's perfectly playable. Our repertoire plays ...e5.",
      "Na6": "A modern, respected move. Our repertoire plays ...e5 directly."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O": {
      "Na6": "A good modern alternative. Our repertoire plays ...Nc6.",
      "Nbd7": "Also playable. Our repertoire plays ...Nc6."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1": {
      "Ne8": "Also a standard move! Our repertoire plays ...Nd7."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4": {
      "Nd7": "Playable but slower. Our repertoire plays ...Nh5, which frees the f-pawn and eyes f4.",
      "Ne8": "Playable but slow against b4. Our repertoire plays ...Nh5, freeing the f-pawn while eyeing f4."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5": {
      "Nbd7": "Also fine. Our repertoire plays ...a5 first to stop b4.",
      "Na6": "A good move too. Our repertoire plays ...a5 first."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5 Bg5 h6 Bh4": {
      "g5": "A real idea (Bg3 Nh5), but it weakens f5 permanently. Our repertoire develops ...Na6 first."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3": {
      "c5": "The Sämisch Gambit — a strong option! Our repertoire plays ...e5.",
      "Nc6": "A popular plan too (...a6, ...Rb8, ...b5). Our repertoire plays ...e5."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5": {
      "c6": "Also playable. Our repertoire plays ...Nh5 to prepare ...f5.",
      "Ne8": "Also prepares ...f5, but the knight is more passive on e8. Our repertoire plays ...Nh5."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5": {
      "h6": "Playable (Be3 or Bf4). Our repertoire strikes with ...c5."
    },
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O": {
      "Nc6": "The Panno-style setup is also good. Our repertoire plays ...Nbd7."
    },
    "d4 Nf6 Bf4": {
      "d5": "Solid too, but our repertoire plays the King's Indian setup with ...g6."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O": {
      "Re8": "Also prepares ...e5 (the rook supports it along the e-file). Our repertoire uses ...Qe8."
    }
  }
});
