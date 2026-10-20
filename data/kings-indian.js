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
    },
    {
      "id": "london-no-h3",
      "name": "London without h3: ...Nh5!",
      "kind": "sideline",
      "moves": "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 Be2 O-O O-O Nh5 Bg5 h6",
      "plan": "If Bh4, ...g5 pushes the bishop to g3, where ...Nxg3 hxg3 wins you the bishop pair: a lasting plus. The cost is some looseness around your king (h6, g5), so follow up with ...e5 and ...Nd7 calmly before going for ...f5. The lesson: against the London, always check whether White has played h3."
    },
    {
      "id": "classical-nd2",
      "name": "Classical 9.Nd2: ...a5 first",
      "kind": "sideline",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Nd2 a5",
      "plan": "Next come ...Nd7 and ...f5, as in the Mar del Plata. White will spend moves on a3, Rb1 and b4 to break through on the queenside, and ...a5 makes that slower, buying time for your kingside attack. If the knight comes to b3, ...b6 keeps c5 under control."
    },
    {
      "id": "bd3-nge2",
      "name": "5.Bd3 and Nge2: hit d4 with ...Nc6",
      "kind": "sideline",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Bd3 O-O Nge2 Nc6",
      "plan": "Follow up with ...e5. If White closes with d5, the knight jumps to d4 or b4 (hitting the d3-bishop) and you get the usual ...f5 plan. If White takes on e5, recapture ...dxe5 and the d4-square is yours for the knight."
    },
    {
      "id": "trap-london-ne5",
      "name": "Trap: the London's Ne5? dxe5",
      "kind": "trap",
      "moves": "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 Ne5 dxe5",
      "plan": "You're a piece for a pawn up. After dxe5, move the f6-knight to a safe central square (…Nd5 or …Ne4), then untangle with ...Nc5 or ...Nb6 and ...c6. Keep your pieces protected: White's only hope is tactics against loose pieces.",
      "error": "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 Ne5"
    },
    {
      "id": "trap-classical-nxe5",
      "name": "Trap: 7.Nxe5? dxe5",
      "kind": "trap",
      "moves": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Nxe5 dxe5 dxe5 Nfd7",
      "plan": "You're a piece for two pawns up, and the e5-pawn is weak. White can hold it for a while with f4, but his center is overextended and his king is still in the middle. Develop (…Nc6, …Re8), and look for ...g5 or ...Nxe5 to break the e5-f4 chain.",
      "error": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Nxe5"
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
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8": "The key move against the London: the queen leaves the d-file (so dxe5 dxe5 doesn't open it against her) and supports ...e5 along the e-file. Now ...e5 is ready.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 Be2": "White skips h3. That means his f4-bishop has no safe retreat on h2.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 Be2 O-O": "Castle. If White now plays h3, you're back in the main line; if not, ...Nh5 is coming.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 Be2 O-O O-O": "White castles, still without h3.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 Be2 O-O O-O Nh5": "Hunt the London bishop. It's attacked and has no comfortable square: Bg3 runs into ...Nxg3 hxg3 (the bishop pair for you), h2 is blocked by White's own pawn, and Be5 loses it to ...dxe5. Only Bg5 keeps it.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 Be2 O-O O-O Nh5 Bg5": "The bishop runs to g5.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 Be2 O-O O-O Nh5 Bg5 h6": "Kick it again. After Bh4 g5 it is driven to g3, and ...Nxg3 is always there.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Nd2": "Instead of Ne1, the knight goes to d2, heading for b3 or c4 to support the c4–c5 push.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Nd2 a5": "Slow down White's queenside play: ...a5 stops b4 for now, so White needs a3 and Rb1 first. Then you turn to the kingside with ...Nd7 and ...f5.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Bd3": "A setup club players like: Bd3 and Nge2, keeping f2–f4 possible. But the bishop on d3 cuts the queen's line to d4.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Bd3 O-O": "Castle, as usual.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Bd3 O-O Nge2": "The knight goes to e2, so d4 now has just one defender: the e2-knight.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Bd3 O-O Nge2 Nc6": "Attack d4 at once. With the queen's line blocked by the d3-bishop, d4 is short of defenders. If d5, the knight jumps to b4 or e5 and hits the d3-bishop.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 Ne5": "The London player's favourite jump, but here your d6-pawn controls e5. White probably expected ...Nxe5 dxe5 with an attack on your f6-knight.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 Ne5 dxe5": "Just take it with the pawn. After dxe5 your f6-knight is attacked, but it simply moves away and you're a piece for a pawn up.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Nxe5": "White grabs the e5-pawn, which looks attacked twice (d4 and Nf3) and defended only once. But the count is wrong: after ...dxe5 dxe5 your knight moves away and attacks e5 again.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Nxe5 dxe5": "Take the knight.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Nxe5 dxe5 dxe5": "White recaptures and attacks your f6-knight. He has two pawns for the knight, and hopes to keep them.",
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Nxe5 dxe5 dxe5 Nfd7": "Move the knight with an attack: e5 is now hit by the d7-knight and the g7-bishop. White has to spend moves defending a weak pawn while you develop."
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
      "Nxe4": "Nxe4 — the c3-knight defends e4. You lose a piece."
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
      "e5": "dxe5 dxe5 Nxe5! Nxe5 Bxe5 and you're a pawn down: your queen can't help on e5 from d8. Prepare ...e5 with ...Qe8 (or ...Re8) first."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 Ne5": {
      "Nxe5": "...Nxe5 dxe5 (or Bxe5) is just a trade of knights. ...dxe5! wins a piece: after dxe5 your f6-knight steps away and White has only a pawn for his knight."
    }
  },
  "alts": {
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2": {
      "Nbd7": "The old main line — fine, but slower. ...e5 right away strikes the center before White finishes development, and it isn't a pawn sacrifice: after dxe5 dxe5 Qxd8 Rxd8 Nxe5?, ...Nxe4 wins it back.",
      "c5": "Perfectly playable, but after d5 it leads to Benoni structures with different plans. ...e5 keeps you in the classic King's Indian structures you're learning (closed center, ...f5 attack).",
      "Na6": "A respected modern move, but it's a semi-waiting move with its own subtleties. ...e5 immediately is the most direct: it challenges the center now and keeps your plans simple."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O": {
      "Na6": "A good modern alternative, but ...Nc6 hits d4 directly and forces White to decide right now: d5 closes the center and gives you the clear ...Ne7 / ...f5 kingside plan.",
      "Nbd7": "Also playable, but it lets White keep the central tension and improve (Re1, Bf1). ...Nc6 attacks d4 and forces White to commit.",
      "exd4": "A real line, but after Nxd4 White's pieces get free central squares and your d6-pawn can become a target. ...Nc6 keeps the tension, and if White closes with d5 you get the clear ...Ne7 / ...f5 kingside plan."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1": {
      "Ne8": "Also a standard move. We prefer ...Nd7 because from d7 the knight also watches c5 (White's main queenside break) and can return to f6; on e8 it mostly just defends d6 and c7."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4": {
      "Nd7": "Playable but slower. In the Bayonet White's queenside attack (b4–c5) is very fast, so you need counterplay quickly: ...Nh5 frees the f-pawn for ...f5 immediately and also eyes the f4-square.",
      "Ne8": "Playable but slow: in the Bayonet White's b4–c5 is fast, and you need ...f5 quickly. ...Nh5 frees the f-pawn at once and also eyes f4."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5": {
      "Nbd7": "Also fine, but ...a5 first stops b4 — White's main queenside plan — and secures c5 for your knight. Without ...a5, White plays b4 and the c5-square is gone.",
      "Na6": "A good move too (the knight heads for c5), but without ...a5 first White can answer b4 and take the c5-square away from it."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5 Bg5 h6 Bh4": {
      "g5": "A real idea (Bg3 Nh5), but it permanently weakens f5, a great square for a white knight. ...Na6 first improves a piece without creating weaknesses; ...g5 can still come later if needed."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3": {
      "c5": "The Sämisch Gambit — a strong option, but it's a pawn sacrifice with lots of concrete theory. ...e5 is the classical approach: the same King's Indian ideas, with no material invested.",
      "Nc6": "A popular plan (...a6, ...Rb8, ...b5), but it relies on precise timing against White's kingside attack. ...e5 challenges the center immediately and leads to the standard King's Indian structure."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5": {
      "c6": "Playable, but it doesn't help your main plan. With the center closed, your play is ...f5: ...Nh5 prepares it immediately and eyes f4.",
      "Ne8": "Also prepares ...f5, but on e8 the knight is passive and gets in the way of your rook and queen. From h5 it stays active and eyes f4."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5": {
      "h6": "Playable, but ...c5 first hits the center right away, before White finishes developing. Kicking the bishop with ...h6 is more useful after d5, when it frees you to play ...e6 without worrying about the pin."
    },
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O": {
      "Nc6": "The Panno setup is also good, but it aims at queenside play (...a6, ...Rb8, ...b5) — a different plan. ...Nbd7 supports ...e5 and keeps you in the standard King's Indian structure."
    },
    "d4 Nf6 Bf4": {
      "d5": "Solid, but it gives White exactly the London structure he wants and plays best against. The King's Indian setup keeps more tension: ...e5 or ...Nh5 will later harass the f4-bishop."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O": {
      "Re8": "Also prepares ...e5. ...Qe8 is preferred because it also takes your queen off the d-file (so a central exchange doesn't open it against her) and keeps the rook on f8, ready to support ...f5 later.",
      "c5": "Playable, but after c3 White's d4 holds and the move doesn't fit your plan. ...Qe8 prepares ...e5, the King's Indian break that hits the f4-bishop and fights for the center."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 Be2": {
      "Nh5": "Also good: Stockfish even slightly prefers hunting the bishop at once. Castling first is simpler: the ...Nh5 idea doesn't run away, and if White plays h3 you're back in the main line."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Nd2": {
      "Ne8": "Also prepares ...f5, but it lets White play b4 and c5 at full speed. ...a5 first makes White spend extra moves (a3, Rb1) before b4 is possible."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Bd3 O-O Nge2": {
      "e5": "Also a good King's Indian move. ...Nc6 first is more precise here: it hits d4 while only the e2-knight defends it, and ...e5 follows next."
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Nxe5 dxe5 dxe5": {
      "Qxd1+": "Also wins: after Bxd1 Nfd7 the e5-pawn is weak in an endgame. But ...Nfd7 keeps the queens on, which is even stronger: White's king is still in the center."
    }
  },
  "quizzes": {
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6": {
      "q": "Why ...d6 before castling?",
      "options": [
        {
          "text": "To stop e4–e5, which would kick your f6-knight",
          "ok": true,
          "why": "Without ...d6, e5 hits the knight with tempo and White gains lots of space. ...d6 controls e5."
        },
        {
          "text": "To open the c8-bishop",
          "why": "That's a side effect. The urgent reason is to stop e5."
        },
        {
          "text": "To prepare ...d5 later",
          "why": "In the King's Indian you hit the center with ...e5 or ...c5, not ...d5."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5": {
      "q": "Why is ...e5 not a pawn loss?",
      "options": [
        {
          "text": "After dxe5 dxe5 Qxd8 Rxd8 Nxe5?, ...Nxe4 wins the pawn back",
          "ok": true,
          "why": "The e4-pawn is your counter-target. If White wins e5, ...Nxe4 grabs his e4-pawn back, and after Nxe4 Bxe5 material is level again."
        },
        {
          "text": "It is a gambit: you give a pawn for the attack",
          "why": "It isn't a gambit: if White grabs e5, you get the pawn back with ...Nxe4."
        },
        {
          "text": "Because White can't take on e5 at all",
          "why": "White can take (dxe5); you just recapture. And if he takes twice, ...Nxe4 restores the balance."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7": {
      "q": "Why does the knight go to e7 after d5?",
      "options": [
        {
          "text": "To head for the kingside (g6) and support ...f5",
          "ok": true,
          "why": "The center is closed now, so your play is the ...f5 break and a kingside attack. The knight is needed there."
        },
        {
          "text": "To win the d5-pawn",
          "why": "The knight does eye d5, but d5 is protected by c4, e4 and the c3-knight. That's not the point."
        },
        {
          "text": "Because ...Nd4 would lose a pawn",
          "why": "...Nd4 doesn't lose a pawn on the spot, but after Nxd4 exd4 your d4-pawn becomes a target and you've traded a key attacking piece."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7": {
      "q": "Why ...Nd7 here?",
      "options": [
        {
          "text": "It clears the f-pawn's path, so ...f5 is possible",
          "ok": true,
          "why": "With the knight on f6, the f-pawn is blocked. From d7 the knight can return to f6 later."
        },
        {
          "text": "To defend e5",
          "why": "e5 is solid already. The knight leaves f6 for the pawn break."
        },
        {
          "text": "To go to c5",
          "why": "...Nc5 is an idea later. Right now the reason is ...f5."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5": {
      "q": "What's the plan in the Mar del Plata?",
      "options": [
        {
          "text": "A pawn race: ...Ng6, ...Rf7, ...h5 and ...g4 against White's king",
          "ok": true,
          "why": "White attacks on the queenside with c5; you go for his king. Speed matters more than material."
        },
        {
          "text": "Defend the queenside carefully against c5 first",
          "why": "Passive defence loses the race. Your counterplay is on the kingside."
        },
        {
          "text": "Open the center with ...c6",
          "why": "The center is locked. ...c6 helps White open the queenside, where he is stronger."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5": {
      "q": "Why ...Nh5 against the Bayonet?",
      "options": [
        {
          "text": "It frees the f-pawn for ...f5 faster than ...Nd7, and eyes f4",
          "ok": true,
          "why": "Against b4 every move counts. ...Nh5 opens the way for ...f5 immediately, and the knight can jump to f4 later."
        },
        {
          "text": "To trade the knight for White's dark-squared bishop",
          "why": "That bishop is still on c1. The main point of ...Nh5 is ...f5."
        },
        {
          "text": "To defend g7",
          "why": "Nothing attacks g7. ...Nh5 clears f6 for the pawn break."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1 f5 Ng5 Nf6": {
      "q": "What now in the Bayonet?",
      "options": [
        {
          "text": "Active counterplay: ...h6 to kick the g5-knight, ...c6, or ...fxe4 to open the f-file",
          "ok": true,
          "why": "White's b4–c5 is fast, so you need threats of your own."
        },
        {
          "text": "Wait with quiet moves like ...b6",
          "why": "Passive play loses: White's queenside push comes much faster than your defence."
        },
        {
          "text": "Trade queens to stop White's attack",
          "why": "Queens can't easily come off here, and the game is a race."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8": {
      "q": "Why ...Re8 after Bg5?",
      "options": [
        {
          "text": "It unpins the f6-knight and supports e5",
          "ok": true,
          "why": "Bg5 pinned the knight against the d8-rook. On e8 the rook breaks the pin and guards your e5 strong point."
        },
        {
          "text": "To trap the g5-bishop",
          "why": "The bishop isn't in danger. ...Re8 is about the pin and e5."
        },
        {
          "text": "Because the rook was attacked on d8",
          "why": "It wasn't. The issue was the pin on the f6-knight."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5 dxe5 Qxd8 Rxd8 Bg5 Re8 Nd5 Nxd5 cxd5 c6": {
      "q": "The queens are off. What's your plan?",
      "options": [
        {
          "text": "Undermine d5 (…cxd5), regroup with ...Nd7–c5 or ...f6, and use your king in the center",
          "ok": true,
          "why": "The endgame is not dead: the g7-bishop and the e5-pawn give you a comfortable game, and often you're the one pressing."
        },
        {
          "text": "Agree to a draw: the position is dead equal",
          "why": "Many club players think so, but Black is often the one with chances here."
        },
        {
          "text": "Tuck your king away on h8",
          "why": "With queens off, the king is a fighting piece. It belongs near the center (f8–e7), not in a corner."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5": {
      "q": "Why ...a5 against the Petrosian?",
      "options": [
        {
          "text": "It stops b4 and secures the c5-square for your knight",
          "ok": true,
          "why": "b4 is White's main queenside plan. With ...a5, a knight on c5 can't be kicked by b4."
        },
        {
          "text": "To prepare ...b5",
          "why": "...a5 is about stopping b4, not about ...b5."
        },
        {
          "text": "To open the a-file for your rook",
          "why": "The a-file stays closed. The move is about b4 and c5."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5 Bg5 h6 Bh4 Na6": {
      "q": "What's the plan in the Petrosian?",
      "options": [
        {
          "text": "Knight to c5, then ...Qe8 or ...Bd7, and prepare ...f5",
          "ok": true,
          "why": "From c5 the knight attacks e4 and can't be kicked. Then you get the ...f5 break in, as usual."
        },
        {
          "text": "Break the pin with ...g5 straight away",
          "why": "Possible, but ...g5 permanently weakens f5. Don't rush it."
        },
        {
          "text": "Open the queenside with ...c6",
          "why": "White is stronger on the queenside. Your play is ...f5."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5": {
      "q": "Why ...Nh5 in the Sämisch?",
      "options": [
        {
          "text": "To prepare ...f5; chasing it with g4 would weaken White's own king",
          "ok": true,
          "why": "With the center closed, ...f5 is your break. The knight on f6 was in the way."
        },
        {
          "text": "To stop Qd2",
          "why": "...Nh5 doesn't prevent Qd2; White plays it next. It's about ...f5."
        },
        {
          "text": "To attack the d5-pawn",
          "why": "A knight on h5 doesn't touch d5. It clears the f-pawn's path."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2 f5 O-O-O Nd7": {
      "q": "White's king is on c1. Where do you attack?",
      "options": [
        {
          "text": "On the queenside: ...a6 and ...b5, even as a pawn sacrifice, to open lines",
          "ok": true,
          "why": "With kings on opposite wings, speed is everything, and you attack where the enemy king is."
        },
        {
          "text": "On the kingside with ...f4 and ...g5",
          "why": "White's king isn't there any more. Pawn storms only make sense against the king."
        },
        {
          "text": "Trade pieces to slow the game down",
          "why": "In opposite-castling positions the faster attack wins. Trading doesn't stop White's attack on your king."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 Nge2 c6 Qd2 Nbd7": {
      "q": "White keeps the center tension. What's your plan?",
      "options": [
        {
          "text": "Keep the tension: ...a6 and ...b5, or ...exd4 Nxd4 then ...Re8 and ...Ne5 hitting the squares f3 weakened",
          "ok": true,
          "why": "f3 weakened e3 and g3, and your dark-squared pieces love that. Queenside expansion also works, especially if White castles long."
        },
        {
          "text": "Play ...f5 at once",
          "why": "...f5 works when the center is closed (after d5). With the tension still there, opening lines helps White's better-placed pieces."
        },
        {
          "text": "Attack White's kingside with ...h5–h4",
          "why": "White's king isn't castled yet, and may go to c1. Play in the center and on the queenside first."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5": {
      "q": "Why ...c5 against the Four Pawns?",
      "options": [
        {
          "text": "White's big center is overextended and he's behind in development: hit it at once",
          "ok": true,
          "why": "Four center pawns look scary but need support. ...c5 attacks before White finishes developing."
        },
        {
          "text": "To prepare ...b5",
          "why": "That comes later. ...c5 is about the center now."
        },
        {
          "text": "To stop White from castling",
          "why": "It has nothing to do with castling. It's about hitting the center."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5 e6 Be2 exd5 cxd5 Re8": {
      "q": "What's the plan against the Four Pawns?",
      "options": [
        {
          "text": "...Bg4 to remove the f3-knight (e5's supporter), ...Nbd7, ...a6 and ...b5; meet e5 with ...dxe5 fxe5 Ng4",
          "ok": true,
          "why": "White wants e4–e5. Take away its support and keep the pressure on e4 with the rook and knight."
        },
        {
          "text": "Wait: the center will collapse on its own",
          "why": "It won't, unless you put pressure on it. Passive play lets White push e5 with an attack."
        },
        {
          "text": "Play ...f5 to attack e4",
          "why": "...f5 weakens your king and e6. The e4-pawn is already under pressure from the rook and the f6-knight."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5": {
      "q": "Why ...c5 against the Averbakh?",
      "options": [
        {
          "text": "Bg5 pins the f6-knight and discourages ...e5, so you strike from the side",
          "ok": true,
          "why": "...c5 hits d4 without needing the knight, and leads to Benoni-type play where your g7-bishop shines."
        },
        {
          "text": "To trap the g5-bishop",
          "why": "...c5 doesn't affect the bishop. It's about challenging d4."
        },
        {
          "text": "To win the d4-pawn",
          "why": "White simply pushes d5 or defends. The point is to challenge the center, not to win a pawn."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 d5 h6 Be3 e6": {
      "q": "What's the plan in the Averbakh?",
      "options": [
        {
          "text": "...exd5 for a Benoni structure, then ...Re8, ...a6 and ...b5",
          "ok": true,
          "why": "Your g7-bishop rakes the long diagonal and you have a queenside majority. ...Re8 also watches the e4–e5 break."
        },
        {
          "text": "Close everything with ...e5",
          "why": "After ...e6 you've chosen to open lines. ...e5 would lose a tempo and leave d6 weak with the c5-pawn already pushed."
        },
        {
          "text": "Attack on the kingside with ...g5 and ...f5",
          "why": "Your pieces and pawns point to the queenside in this structure. ...g5 would only weaken your king."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7": {
      "q": "Why ...Nbd7 before ...e5 in the Fianchetto line?",
      "options": [
        {
          "text": "So that ...e5 is protected and dxe5 dxe5 Nxe5 doesn't win a pawn",
          "ok": true,
          "why": "With the knight on d7, e5 has a second defender, and after an exchange on e5 you recapture with a piece."
        },
        {
          "text": "To go to b6 and attack c4",
          "why": "...Nb6 is rare here. The knight supports ...e5."
        },
        {
          "text": "To prepare ...c5",
          "why": "...c5 is a different setup. Here the knight prepares ...e5."
        }
      ]
    },
    "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3 e5 e4 c6": {
      "q": "What's the plan against the Fianchetto?",
      "options": [
        {
          "text": "...Re8 and ...exd4 to pressure e4, ...Qb6 or ...Qa5, and ...a5 to secure c5",
          "ok": true,
          "why": "It's a slower, positional game. The e4-pawn is your target; ...exd4 opens the e-file against it."
        },
        {
          "text": "Take ...exd4 right now and sit back",
          "why": "Taking without follow-up just gives White a free center. ...exd4 needs ...Re8 and ...Nc5 behind it."
        },
        {
          "text": "A quick ...f5 kingside attack",
          "why": "The center isn't closed, so ...f5 only weakens your king. Pressure e4 first."
        }
      ]
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8": {
      "q": "Why ...Qe8 against the London?",
      "options": [
        {
          "text": "It takes the queen off the d-file and supports ...e5 along the e-file",
          "ok": true,
          "why": "After ...e5 and an exchange on e5, the d-file opens. With the queen on e8 it isn't exposed there, and it backs up e5."
        },
        {
          "text": "To defend the e7-pawn",
          "why": "Nothing attacks e7. The queen supports the coming ...e5."
        },
        {
          "text": "To castle queenside",
          "why": "You've already castled. ...Qe8 is about ...e5."
        }
      ]
    }
  }
});
