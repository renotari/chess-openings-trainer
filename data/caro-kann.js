window.REPERTOIRES = window.REPERTOIRES || [];
window.REPERTOIRES.push({
  "id": "caro-kann",
  "name": "Caro-Kann Defence",
  "side": "b",
  "intro": "1.e4 c6 prepares ...d5 with pawn support, so if White exchanges on d5 you recapture with the c-pawn and keep a pawn in the center. The golden rule of the Caro-Kann: develop the light-squared bishop (to f5 or g4) BEFORE playing ...e6, so it doesn't get locked in like in the French. Then ...e6, ...Nd7, ...Ngf6/...Ne7 and the ...c5 break. It's solid, hard to crack, and the endgames are usually good for Black.",
  "lines": [
    {
      "id": "advance-short",
      "name": "Advance: Short System (4.Nf3 and 5.Be2)",
      "moves": "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Nd7 O-O Ne7",
      "plan": "Typical plan: ...h6 (giving your bishop a retreat on h7 if White plays Nh4), then the ...c5 break against d4 — the base of White's pawn chain. Your e7-knight goes to f5 (a great square, hitting d4) or c6/g6. Sometimes ...f6 challenges e5 from the other side. Don't rush ...c5 if it loses a pawn: make sure d4 can't be defended comfortably first."
    },
    {
      "id": "advance-bd3",
      "name": "Advance: 4.Bd3 bishop trade",
      "moves": "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 O-O Qb6",
      "plan": "You get a good French-type position where your 'bad' light-squared bishop is already traded. Pile up on d4: ...cxd4 at the right moment, ...Nge7–f5 and ...Rc8 on the open c-file. Your queen on b6 eyes b2, and after ...cxd4 cxd4 it presses d4 directly."
    },
    {
      "id": "advance-h4",
      "name": "Advance: aggressive 4.h4",
      "moves": "e4 c6 d4 d5 e5 Bf5 h4 h5",
      "plan": "Now g4 is no longer possible without losing a pawn, and your bishop has the g4 square available later (it's protected by the h5-pawn). Continue with ...e6, ...c5, ...Nc6/...Nd7 and ...Ne7. The price is a hole on g5 — keep an eye on White's Bg5 and Ng5 ideas."
    },
    {
      "id": "exchange",
      "name": "Exchange Variation (4.Bd3)",
      "moves": "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7 Nd2 e6 Ngf3 Bd6",
      "plan": "Offer to trade dark-squared bishops (White's f4-bishop is his best minor piece). Then castle short and start the 'minority attack': ...Rab8, ...b5, ...b4 against White's c3-pawn to create a weakness on the queenside. Your bishop on g4 can take on f3 when convenient."
    },
    {
      "id": "panov",
      "name": "Panov–Botvinnik Attack (4.c4)",
      "moves": "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3 Nc6 O-O O-O",
      "plan": "White has an isolated queen's pawn (IQP) on d4. Your recipe: blockade the d5 square, pressure d4 (...Bf6, ...Nb4, ...b6 and ...Bb7, rooks to c8 and d8), and TRADE PIECES — every trade makes the isolated pawn weaker and White's attacking chances smaller. Watch out for White's kingside attack with Qe2/Qe3, Rad1, Ne5 and Bc2/Qd3 batteries against h7."
    },
    {
      "id": "classical",
      "name": "Classical Main Line (3.Nc3 dxe4 4.Nxe4 Bf5)",
      "moves": "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2 Ngf6 O-O-O Be7",
      "plan": "Opposite-side castling is typical here. Castle short (or long, if White's attack looks dangerous), play ...Qc7 and ...c5 to open lines toward White's king on c1, and ...Rd8 against the d4-pawn. The h5-pawn can become weak in the endgame — target it later with ...Qd5 or ...Bf6-type maneuvers."
    },
    {
      "id": "classical-nd2",
      "name": "Classical via 3.Nd2, White delays h4",
      "moves": "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6 Nf3 Nd7",
      "plan": "Continue ...Ngf6, ...e6, ...Bd6 or ...Be7 and castle. If White plays h4, answer ...h6 so your bishop always has h7 to retreat to; if Ne5, trade ...Nxe5 dxe5 and enjoy the solid position."
    },
    {
      "id": "two-knights",
      "name": "Two Knights (2.Nc3 d5 3.Nf3)",
      "moves": "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 Bd2 Nbd7",
      "plan": "You have a very solid position with pawns on light squares (c6, d5, e6). Next ...Bc5 or ...Be7 and castle; ...d4 can gain space and kick the c3-knight, or ...dxe4 followed by ...Ne5 can harass White's queen. White has the bishop pair, so avoid opening the position carelessly."
    },
    {
      "id": "accelerated-panov",
      "name": "2.c4 (Accelerated Panov)",
      "moves": "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6 Nc3 Nxd5 Nf3 Nc6",
      "plan": "You regained the pawn with a piece and have easy development: ...e6 or ...g6, ...Be7/...Bg7 and castle. If White plays Bb5, consider ...e6 and ...Bd7, or ...Nxc3 to damage White's structure. Your knight on d5 is beautifully centralised."
    },
    {
      "id": "kia",
      "name": "2.d3 (King's Indian Attack setup)",
      "moves": "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3 Nf6 Bg2 O-O O-O Re8",
      "plan": "You have a big center (d5 + e5). Typical plans: ...Nbd7, ...a5–a4 to gain queenside space, ...Bc7 to keep the bishop safe, and ...dxe4 when it's useful to open the d-file. Don't let White play e4–e5 comfortably — the rook on e8 and the d6-bishop keep e5 well defended."
    },
    {
      "id": "fantasy",
      "name": "Fantasy Variation (3.f3)",
      "moves": "e4 c6 d4 d5 f3 e6 Nc3 Bb4",
      "plan": "The pin on c3 pressures e4. Next: ...c5 to hit d4, ...Ne7 and ...Nbc6 (the knight goes to e7, not f6 where e5 would kick it). If White plays a3, you can take ...Bxc3+ and bxc3 leaves doubled pawns. White's f3 weakened the dark squares around his king (e3, g3) — your dark-squared pieces love that."
    },
    {
      "id": "bc4",
      "name": "2.Bc4: hit it with ...d5",
      "kind": "sideline",
      "moves": "e4 c6 Bc4 d5 exd5 cxd5 Bb5+ Bd7 Bxd7+ Nxd7",
      "plan": "Develop with ...Ngf6, ...e6 and ...Bd6 (or ...Be7), then castle. Your d5-pawn controls e4 and c4, while White has no pawn in the center at all. ...Qc7 or ...Qb6 and ...Rc8 on the half-open c-file come next."
    },
    {
      "id": "advance-nc3-g4",
      "name": "Advance 4.Nc3 and g4: hit d4 with ...c5",
      "kind": "sideline",
      "moves": "e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4 Bg6 Nge2 c5",
      "plan": "Next come ...Nc6, and ...cxd4 with ...Qb6 against d4, plus ...h5 to attack the g4-pawn. Your king can stay in the center for now, since castling short into White's advancing pawns isn't urgent. Don't panic about h4–h5: the bishop always has h7. The more White pushes his kingside pawns, the weaker his center and king become."
    },
    {
      "id": "trap-bc4",
      "name": "Trap: 3.Bc4? dxc4",
      "kind": "trap",
      "moves": "e4 c6 d4 d5 Bc4 dxc4",
      "plan": "A full piece up. White will look for quick development and play against f7 (Qf3, Ne2–f4). Just develop calmly with ...Nf6, ...e6 or ...Bf5, and castle. Trades favour you.",
      "error": "e4 c6 d4 d5 Bc4"
    },
    {
      "id": "trap-be3-d4",
      "name": "Trap: 7.Be3? d4!",
      "kind": "trap",
      "moves": "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 Be3 d4",
      "plan": "After 8.Bd2 dxc3 (or a bishop move and ...dxc3) you're a piece up. Develop fast (...Bb4 or ...Be7, ...Nbd7, castle) and don't grab more pawns: trades favour the side with the extra piece.",
      "error": "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 Be3"
    },
    {
      "id": "trap-nh5",
      "name": "Trap: 6.Nh5? Qa5+!",
      "kind": "trap",
      "moves": "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh5 Qa5+ Bd2 Qxh5",
      "plan": "You're a piece up. Your queen on h5 is a bit exposed, so bring it back toward the center (…Qd5 is a good square) and develop: ...Nf6, ...e6, ...Nd7 and castle.",
      "error": "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh5"
    },
    {
      "id": "trap-kia-nc4",
      "name": "Trap: 5.Nc4? dxc4",
      "kind": "trap",
      "moves": "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 Nc4 dxc4",
      "plan": "You're a piece for a pawn up after White recaptures on c4. White will try to win back material with d4 or Nxe5, so keep e5 protected and develop: ...Nf6, ...O-O, ...Re8.",
      "error": "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 Nc4"
    }
  ],
  "notes": {
    "e4": "White opens with 1.e4.",
    "e4 c6": "The Caro-Kann. ...c6 prepares ...d5 with pawn support: if White exchanges on d5, you recapture with the c-pawn and keep a pawn in the center. Unlike the French (1...e6), your light-squared bishop on c8 stays free to develop.",
    "e4 c6 d4": "White takes the full center with two pawns.",
    "e4 c6 d4 d5": "Now ...d5 attacks e4, backed by the c6-pawn. White must decide: advance (e5), exchange (exd5) or defend e4 (Nc3, Nd2, f3).",
    "e4 c6 d4 d5 e5": "The Advance Variation: White gains space and closes the center.",
    "e4 c6 d4 d5 e5 Bf5": "The key Caro-Kann idea: develop the light-squared bishop OUTSIDE the pawn chain BEFORE ...e6. After ...e6 it would be stuck on c8. On f5 it's active and controls e4 and the b1–h7 diagonal.",
    "e4 c6 d4 d5 e5 Bf5 Nf3": "The Short System: quiet development, aiming to castle and play c3/Be3.",
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6": "Now that the bishop is out, ...e6 is perfect: it supports d5, opens the f8-bishop and prepares ...c5, attacking the base (d4) of White's pawn chain.",
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2": "White prepares to castle.",
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Nd7": "A flexible developing move: the knight on d7 supports ...c5, can go to b6, and keeps f6 free for ...f6 breaks. Note that the g8-knight can't go to f6 (the e5-pawn controls it), so it will go to e7.",
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Nd7 O-O": "White castles.",
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Nd7 O-O Ne7": "The king's knight goes to e7 because f6 is attacked by the e5-pawn. From e7 it heads to f5 (a great outpost attacking d4), g6 or c6. Next you can play ...h6, ...c5 and castle.",
    "e4 c6 d4 d5 e5 Bf5 Bd3": "White challenges your active bishop. Careful: your bishop on f5 is attacked and NOT defended.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3": "Take it! Your bishop is attacked and undefended, and trading is fine: after Qxd3 you play ...e6 and you'll have a good French-type position where your problem bishop is already gone.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3": "White recaptures with the queen.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6": "Now ...e6: solid, opens the f8-bishop and prepares ...c5. All your pawns stand on light squares, which is ideal now that your light-squared bishop is gone and the dark-squared bishop remains.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3": "White develops.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5": "The thematic break: attack d4, the base of White's pawn chain. If the base falls, e5 becomes weak too.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3": "White supports d4.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6": "Pile up on d4: the c5-pawn and the knight both attack it now.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 O-O": "White castles.",
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 O-O Qb6": "The queen goes to b6, the classic French-Advance square: it attacks b2 and, after ...cxd4 cxd4, it will press on d4 along the diagonal.",
    "e4 c6 d4 d5 e5 Bf5 h4": "An aggressive try: White threatens g4 and h5 to trap your bishop with pawns.",
    "e4 c6 d4 d5 e5 Bf5 h4 h5": "Stop the pawns! After ...h5, White can't play g4 without losing a pawn on g4 and your bishop is safe. The g4 square also becomes available to your bishop, protected by the h5-pawn.",
    "e4 c6 d4 d5 exd5": "The Exchange Variation: White releases the central tension.",
    "e4 c6 d4 d5 exd5 cxd5": "Recapture with the c-pawn — that's the point of 1...c6. You keep a pawn in the center and get the half-open c-file.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3": "White aims his bishop at h7 and stops ...Bf5.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6": "Develop with tempo-free pressure on d4. The knight also controls e5.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3": "White solidifies d4 (a reversed Carlsbad structure).",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6": "Natural development: the knight guards d5 and h7 and controls e4.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4": "White develops his dark-squared bishop actively.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4": "Get the light-squared bishop out before ...e6. On g4 it pins the knight when it comes to f3 and annoys White's queen.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3": "White's queen attacks b7 (and adds pressure on d5).",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7": "Defend b7 along the 7th rank. The queen on d7 also supports d5 and keeps your pieces coordinated. Next ...e6 and ...Bd6.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7 Nd2": "White develops.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7 Nd2 e6": "Now ...e6 is perfect: your light-squared bishop is already outside, and the f8-bishop is ready to come out.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7 Nd2 e6 Ngf3": "White develops the last minor piece.",
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7 Nd2 e6 Ngf3 Bd6": "Offer to trade dark-squared bishops. White's bishop on f4 is his best minor piece; after the trade you castle comfortably.",
    "e4 c6 d4 d5 exd5 cxd5 c4": "The Panov–Botvinnik Attack: White wants an open, attacking game with an isolated pawn on d4.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6": "Develop and defend d5 with a piece.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3": "White adds pressure on d5.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6": "Solid: support d5 with ...e6 and open the f8-bishop. In the Panov, ...e6 is fine because the position is about to open anyway.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3": "White develops.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7": "Simple development, ready to castle.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5": "White exchanges, leaving himself an isolated d4-pawn.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5": "Recapture with the knight: d5 is the perfect blockade square right in front of the isolated pawn. A blockading knight can't be kicked by pawns.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3": "White aims his bishop at your kingside.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3 Nc6": "Develop and attack the isolated d4-pawn.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3 Nc6 O-O": "White castles.",
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3 Nc6 O-O O-O": "Castle and get your king safe — White's pieces are aiming at your kingside, so don't delay it.",
    "e4 c6 d4 d5 Nc3": "The main line: White defends e4 with the knight.",
    "e4 c6 d4 d5 Nc3 dxe4": "Take on e4. Keeping the tension lets White choose e5 or exd5 on his terms; capturing gives you free, easy development for your light-squared bishop.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4": "White recaptures.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5": "The Classical Variation: the bishop develops WITH TEMPO, attacking the e4-knight.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3": "White moves the knight and attacks your bishop.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6": "Retreat to g6 — the bishop stays on the b1–h7 diagonal, outside the pawn chain.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4": "White threatens h5, kicking your bishop off the diagonal (or trapping it).",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6": "Create an escape square: after h5, the bishop retreats to h7 and stays safe on the diagonal.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3": "White develops; Ne5 is a possible idea.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7": "Control e5! This stops Ne5, which would hit your g6-bishop. The knight also prepares ...Ngf6.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5": "White gains space and attacks the bishop.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7": "Retreat to h7, the square you prepared with ...h6.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3": "White offers a bishop trade.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3": "Trade. Your bishop has done its job and the trade reduces White's attacking potential.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3": "White recaptures with the queen.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6": "Now the solid ...e6, opening the f8-bishop.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2": "White prepares long castling.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2 Ngf6": "Develop the knight: it controls e4 and d5 and defends your kingside.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2 Ngf6 O-O-O": "White castles queenside.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2 Ngf6 O-O-O Be7": "Calm development; you're ready to castle.",
    "e4 c6 d4 d5 Nd2": "White defends e4 with the knight from d2 (keeping the c-pawn free).",
    "e4 c6 d4 d5 Nd2 dxe4": "Same idea as against 3.Nc3: take on e4 and develop freely.",
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4": "White recaptures.",
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5": "The Classical: develop the bishop with tempo on the knight.",
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3": "The knight attacks your bishop.",
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6": "Retreat to g6 and stay on the diagonal.",
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6 Nf3": "White develops first, keeping h4 in reserve.",
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6 Nf3 Nd7": "Same principle: control e5 to stop Ne5, which would hit your bishop.",
    "e4 c6 Nc3": "White develops first instead of playing d4.",
    "e4 c6 Nc3 d5": "Still ...d5, the Caro-Kann move.",
    "e4 c6 Nc3 d5 Nf3": "The Two Knights Variation.",
    "e4 c6 Nc3 d5 Nf3 Bg4": "Develop the bishop outside the chain and pin the f3-knight. You're happy to give the bishop for the knight.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3": "White asks the bishop.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3": "Take the knight. In return White gets the bishop pair, but you get a rock-solid light-square setup, and White's queen has to come out early.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3": "White recaptures with the queen.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6": "Support d5. With your light-squared bishop gone, pawns on light squares (c6, d5, e6) are exactly right.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3": "White keeps the center flexible.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6": "Develop the king's knight.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 Bd2": "White prepares long castling.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 Bd2 Nbd7": "The knight goes to d7, supporting ...e5 or ...Ne5 later and keeping c6 solid.",
    "e4 c6 c4": "White plays c4 immediately.",
    "e4 c6 c4 d5": "Strike the center anyway.",
    "e4 c6 c4 d5 exd5": "White exchanges.",
    "e4 c6 c4 d5 exd5 cxd5": "Recapture with the c-pawn.",
    "e4 c6 c4 d5 exd5 cxd5 cxd5": "White takes again and is temporarily a pawn up.",
    "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6": "Win the pawn back with a piece: ...Nf6 and ...Nxd5 next. This develops a piece at the same time.",
    "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6 Nc3": "White defends d5 for now.",
    "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6 Nc3 Nxd5": "Take back the pawn. Material is equal and your knight is in the center.",
    "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6 Nc3 Nxd5 Nf3": "White develops.",
    "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6 Nc3 Nxd5 Nf3 Nc6": "Natural development: the knight controls d4 and e5.",
    "e4 c6 d3": "White chooses a quiet King's Indian Attack setup.",
    "e4 c6 d3 d5": "Take central space.",
    "e4 c6 d3 d5 Nd2": "White supports e4.",
    "e4 c6 d3 d5 Nd2 e5": "Grab the full center with pawns on d5 and e5. Against a slow setup, you can afford a big center.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3": "White attacks e5.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6": "Defend e5 with the bishop. From d6 it also eyes the kingside.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3": "White fianchettoes.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3 Nf6": "Develop the king's knight; now it's safe since e5 is protected.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3 Nf6 Bg2": "White completes the fianchetto.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3 Nf6 Bg2 O-O": "Castle.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3 Nf6 Bg2 O-O O-O": "White castles.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3 Nf6 Bg2 O-O O-O Re8": "The rook supports e5 and prepares for the center to open. Now you can follow with ...Nbd7 and ...Bc7.",
    "e4 c6 d4 d5 f3": "The Fantasy Variation: White supports e4 with the f-pawn.",
    "e4 c6 d4 d5 f3 e6": "Solid: support d5 and open the f8-bishop toward b4 (pin on c3). The usual bishop-first rule has an exception here: ...Bf5 and ...Bg4 are impossible (the pawns on e4 and f3 cover those squares).",
    "e4 c6 d4 d5 f3 e6 Nc3": "White defends e4 again.",
    "e4 c6 d4 d5 f3 e6 Nc3 Bb4": "Pin the c3-knight: it no longer really defends e4, and ...dxe4 becomes a threat.",
    "e4 c6 Bc4": "A common club move: the bishop aims at f7. But against the Caro-Kann it runs straight into ...d5.",
    "e4 c6 Bc4 d5": "Strike with tempo: ...d5 attacks the bishop and the e4-pawn at the same time, and your c6-pawn backs it up.",
    "e4 c6 Bc4 d5 exd5": "White exchanges to avoid losing time.",
    "e4 c6 Bc4 d5 exd5 cxd5": "Recapture with the pawn, and the bishop is attacked again.",
    "e4 c6 Bc4 d5 exd5 cxd5 Bb5+": "White gives a check so the bishop can move with tempo.",
    "e4 c6 Bc4 d5 exd5 cxd5 Bb5+ Bd7": "Block with the bishop and offer a trade. White's bishop has moved three times and now gets exchanged for your undeveloped c8-bishop, a net gain of time for you.",
    "e4 c6 Bc4 d5 exd5 cxd5 Bb5+ Bd7 Bxd7+": "White trades.",
    "e4 c6 Bc4 d5 exd5 cxd5 Bb5+ Bd7 Bxd7+ Nxd7": "Recapture with the knight, developing a piece. You have a pawn on d5, quick development ahead (…Ngf6, …e6, …Bd6), and White has spent three moves on a bishop that's now gone.",
    "e4 c6 d4 d5 e5 Bf5 Nc3": "A sharp Advance line: White develops and prepares g4 to chase your bishop.",
    "e4 c6 d4 d5 e5 Bf5 Nc3 e6": "Open the f8-bishop and support d5. If the bishop on f5 gets chased, it has g6 and h7.",
    "e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4": "Here it comes: your bishop is attacked.",
    "e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4 Bg6": "Retreat to g6. It's safe here, and later ...h5 can hit the g4-pawn.",
    "e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4 Bg6 Nge2": "White guards d4 with the knight and prepares h4–h5 or Nf4.",
    "e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4 Bg6 Nge2 c5": "Counter-attack in the center! When White throws his kingside pawns forward, the answer is to open the center: ...c5 hits d4, the base of his pawn chain. White's advanced pawns (g4, e5) become weaknesses once the center opens.",
    "e4 c6 d4 d5 Bc4": "A beginner's habit, putting the bishop on c4 to aim at f7. But c4 is attacked by your d5-pawn.",
    "e4 c6 d4 d5 Bc4 dxc4": "Take the bishop. This is one of the points of ...c6 and ...d5: the d5-pawn controls both c4 and e4.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 Be3": "Natural development, but now the c3-knight and the e3-bishop stand side by side on the 3rd rank, right in front of your d-pawn.",
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 Be3 d4": "A pawn fork: ...d4 attacks the knight on c3 and the bishop on e3 at once. White can save only one of them.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh5": "White attacks the bishop again, hoping to win the bishop pair. But a knight on h5 is loose: nothing defends it.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh5 Qa5+": "Check, and the queen also attacks h5 along the 5th rank. White has to answer the check, and then the knight falls.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh5 Qa5+ Bd2": "White blocks the check.",
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh5 Qa5+ Bd2 Qxh5": "Take the knight. A queen check that also hits a loose piece (a double attack) is one of the most common ways to win material.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 Nc4": "The knight attacks your d6-bishop and the e5-pawn, but it has jumped onto a square your d5-pawn controls.",
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 Nc4 dxc4": "Take it. Before worrying about what an attacking piece threatens, check whether you can simply capture it."
  },
  "mistakes": {
    "e4": {
      "e6": "That's the French Defence — it locks your c8-bishop behind the e6-pawn, exactly the problem the Caro-Kann solves. Play 1...c6.",
      "d5": "That's the Scandinavian: after exd5 Qxd5 Nc3 your queen gets chased. In the Caro-Kann you prepare ...d5 with ...c6 first.",
      "c5": "That's the Sicilian — a different opening.",
      "e5": "A good move, but not the Caro-Kann!"
    },
    "e4 c6 d4": {
      "e6": "Now your c8-bishop gets locked in behind e6 — you've transposed into a bad French. Play ...d5 first and develop the bishop before ...e6.",
      "Nf6": "e5 kicks your knight with tempo. Play ...d5 first."
    },
    "e4 c6 d4 d5 e5": {
      "e6": "This locks your bishop on c8 behind the e6-pawn — the 'bad French bishop'. Golden rule: get the bishop out with ...Bf5 first, THEN play ...e6.",
      "Bg4": "Less good: the bishop can be hit by f3 or h3 and it doesn't control e4 and the b1–h7 diagonal like on f5.",
      "Nd7": "Blocks your c8-bishop's path to f5 for no reason. Play ...Bf5."
    },
    "e4 c6 d4 d5 e5 Bf5 Nf3": {
      "Nf6": "The e5-pawn controls f6: exf6 wins your knight!",
      "Nd7": "Playable, but ...e6 first is the standard: the bishop is already out, so ...e6 is perfectly safe and prepares ...c5."
    },
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2": {
      "Nf6": "exf6 — the e5-pawn takes your knight! f6 is controlled by the pawn."
    },
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Nd7 O-O": {
      "Nh6": "On h6 the knight is on the rim and controls few useful squares. From e7 it can go to f5 (hitting d4), g6 or c6, and it supports ...c5.",
      "Ngf6": "The e5-pawn takes it: exf6. Remember, f6 is off-limits for your knights while the pawn is on e5."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3": {
      "e6": "Your bishop on f5 is attacked and undefended: after Bxf5 exf5 you get doubled f-pawns and lose control of the light squares.",
      "Qd7": "Defends the bishop, but Bxf5 Qxf5 and the queen is exposed to Ne2–g3 or g4 with tempo. Just trade with ...Bxd3."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3": {
      "Nf6": "exf6 wins your knight: the e5-pawn controls f6."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3": {
      "f6": "Too early: after exf6 Nxf6 your e6-pawn becomes weak and backward, and White's pieces jump to e5. ...c5 is the main break.",
      "Nf6": "exf6 wins your knight."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3": {
      "cxd4": "Releasing the tension too early: after cxd4 White has a stable center and easy Nc3. Keep the tension and add pressure with ...Nc6 first.",
      "c4": "Releases the pressure on d4 and kicks the queen to a good square (Qe2/Qc2). Your break should keep attacking d4."
    },
    "e4 c6 d4 d5 e5 Bf5 h4": {
      "e6": "g4! hits your bishop: after ...Bg6 h5 it has to run (...Be4 f3 ...Bh7) and gets buried, or is simply trapped in some lines. Stop the pawns with ...h5.",
      "Nd7": "g4! attacks the bishop, and after ...Bg6 h5 it's chased again. Stop the pawn storm with ...h5 right away."
    },
    "e4 c6 d4 d5 exd5": {
      "Qxd5": "Your queen comes out early: Nc3 or Nf3 and c4 gain time by attacking it. Recapture with the c-pawn — that's why you played ...c6."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3": {
      "Bf5": "Bxf5 — your bishop is undefended and simply lost! Nothing protects f5.",
      "e6": "Locks your light-squared bishop behind the pawns. Develop it (to g4) before ...e6."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3": {
      "Bg4": "Premature: Qb3! attacks b7 and d5, and you have to scramble. Play ...Nf6 first so d5 is protected.",
      "e5": "dxe5 and the d5-pawn becomes isolated and weak, with no compensation. Develop first."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4": {
      "Bf5": "Bxf5 — your bishop is undefended on f5 and simply lost.",
      "e6": "Locks your c8-bishop behind the pawns. Get it out first with ...Bg4."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3": {
      "Qc7": "Bxc7 — the bishop on f4 controls c7, you lose your queen!",
      "b6": "Weakens c6: Bb5 pins and attacks your knight, and the long diagonal gets loose. Defend b7 with the queen instead.",
      "Qb6": "Possible, but after Qxb6 axb6 your structure is damaged a bit; the main move ...Qd7 keeps the queens on."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7 Nd2 e6 Ngf3": {
      "Bxf3": "Not a mistake in itself, but it gives up your good bishop without need. First trade dark-squared bishops with ...Bd6.",
      "Be7": "Passive: ...Bd6 challenges White's strong f4-bishop directly."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4": {
      "dxc4": "Bxc4: White develops with tempo and has a free, active game. Defend d5 with ...Nf6."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3": {
      "dxc4": "Bxc4: White develops with tempo and gets a very active position.",
      "Bf5": "cxd5! and the d5-pawn is gone: ...Nxd5 Qb3 hits b7 and d5. Keep d5 solid with ...e6."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5": {
      "exd5": "This gives up the ideal blockade. Recapturing with the knight puts a piece on d5, right in front of White's isolated pawn — a square White can never attack with a pawn."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3 Nc6 O-O": {
      "Nxd4": "Nxd4 — the d4-pawn is defended by the f3-knight, and your queen can't recapture because your own knight on d5 blocks the d-file. You lose a piece.",
      "Nf6": "Retreating the blockader for no reason. Castle and keep the knight on d5."
    },
    "e4 c6 d4 d5 Nc3": {
      "e6": "French-style: now your c8-bishop is locked in. Take on e4 and develop it.",
      "Nf6": "e5 kicks the knight with tempo and White gets a French Advance-type space edge.",
      "Bg4": "f3 or Qd3 hits the bishop and keeps e4 defended. Release the tension first with ...dxe4."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4": {
      "Qxd4": "Qxd4 — White's queen protects d4: you lose your queen!",
      "Bg4": "f3 kicks the bishop and gains time; it was better to develop it with tempo on the knight from f5.",
      "e5": "dxe5 and you are simply a pawn down — trading queens with ...Qxd1+ doesn't win it back."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3": {
      "Bxc2": "Qxc2 — your bishop is lost for a pawn.",
      "Be6": "Blocks your e-pawn and the bishop is passive there. Bg6 stays on the good diagonal.",
      "Bg4": "f3 or h3 kicks it again and gains time. On g6 it stays on its best diagonal.",
      "Bd7": "Very passive and it blocks your knight. Keep the bishop active on g6."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4": {
      "Nf6": "h5! attacks the bishop and it has no good square: f5 and e4 are covered by the g3-knight, and h7 is blocked by your own pawn. You lose material. Make room with ...h6 (or ...h5).",
      "e6": "h5! hits the bishop and it has nowhere safe to go: h7 is occupied by your pawn and f5/e4 are covered by Ng3. Play ...h6 first.",
      "Nd7": "h5! attacks the bishop and it has no safe square: h7 is blocked by your own pawn, f5 and e4 are covered by the g3-knight. Play ...h6 first."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3": {
      "Nf6": "Ne5! hits your g6-bishop, and with h5 coming it can be chased off its diagonal or force structural damage (Nxg6). Cover e5 first with ...Nd7.",
      "e6": "Ne5! hits the g6-bishop; combined with h5 White wins space and time. ...Nd7 stops it."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5": {
      "Bxh5": "The h5-pawn is defended by the g3-knight and the h1-rook: Nxh5 or Rxh5 and you lose a piece for a pawn.",
      "Bf5": "Nxf5 — the g3-knight controls f5.",
      "Be4": "Nxe4 — the g3-knight controls e4.",
      "Bd3": "Bxd3 or cxd3 — you just lose the bishop."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3": {
      "e6": "Bxh7 Rxh7: the trade happens anyway but now your rook is misplaced on h7. Simply trade with ...Bxd3."
    },
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4": {
      "Qxd4": "White's queen protects d4: Qxd4 and you lose your queen!",
      "Bg4": "f3 kicks it. Develop with tempo on the knight: ...Bf5."
    },
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3": {
      "Bxc2": "Qxc2 — you lose your bishop.",
      "Be6": "Passive and blocks your e-pawn. Stay on the diagonal with Bg6."
    },
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6 Nf3": {
      "Nf6": "Ne5! hits your bishop on g6; with h4–h5 coming, it gets harassed. Cover e5 with ...Nd7.",
      "e6": "Ne5 hits the g6-bishop and gains time. ...Nd7 prevents it."
    },
    "e4 c6 Nc3 d5 Nf3": {
      "Nf6": "e5 kicks the knight with tempo (Ne4 or Nfd7) and White gains space.",
      "Bf5": "exd5 cxd5 Bb5+ and White gets annoying pressure; also Nh4 can chase the bishop. On g4 it pins the knight instead."
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3": {
      "Bf5": "exd5 cxd5 and Bb5+ or Nh4 hits the bishop again. Take on f3."
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3": {
      "dxe4": "Nxe4 and White's pieces become active; your center disappears. Support d5 with ...e6."
    },
    "e4 c6 c4 d5 exd5": {
      "Qxd5": "Nc3 hits the queen with tempo and White gets a lead in development. Recapture with the c-pawn."
    },
    "e4 c6 c4 d5 exd5 cxd5 cxd5": {
      "Qxd5": "Nc3 attacks your queen and gains time; you'll be behind in development. Win the pawn back with a piece: ...Nf6 and ...Nxd5.",
      "e6": "A gambit: dxe6 Bxe6 and you're a pawn down. Not our repertoire — regain the pawn with ...Nf6."
    },
    "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6 Nc3": {
      "g6": "A gambit line — the pawn stays on d5 and White can keep it. Simply take it back with ...Nxd5.",
      "e6": "dxe6 and you've given up a pawn. Take back with ...Nxd5."
    },
    "e4 c6 d3 d5 Nd2": {
      "dxe4": "Releases the tension and lets White recapture with a piece comfortably. Take more space with ...e5."
    },
    "e4 c6 d3 d5 Nd2 e5 Ngf3": {
      "Nf6": "Your e5-pawn is attacked by the f3-knight and defended by nothing: Nxe5 wins a pawn. Defend it with ...Bd6.",
      "Bc5": "Doesn't defend e5: Nxe5 wins a pawn.",
      "f6": "Defends e5, but weakens your king (the a2–g8 and e8–h5 diagonals) and takes f6 away from your knight."
    },
    "e4 c6 d4 d5 f3": {
      "Bf5": "exf5 — the e4-pawn takes your bishop!",
      "Bg4": "fxg4 — the f3-pawn takes your bishop!"
    },
    "e4 c6 d4 d5 f3 e6 Nc3": {
      "Nf6": "e5 kicks the knight with tempo. In the Fantasy, the g8-knight usually goes to e7.",
      "dxe4": "fxe4 gives White a strong center and an open f-file. Pin with ...Bb4 first."
    },
    "e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4": {
      "Be4": "Nxe4! dxe4 and your new e4-pawn is weak: White plays Bg2 and wins it. Retreat to g6 instead, where the bishop is safe."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh5": {
      "Bxh5": "Bxh5 Qxh5 only trades your good bishop for the knight, and material stays equal. Look for a check that also attacks h5."
    }
  },
  "alts": {
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2": {
      "c5": "A modern, good move. We prefer ...Nd7 first because it keeps the choice between the two breaks (...c5 and ...f6) open and prepares ...Ne7. Playing ...c5 now commits you and gives White setups with Be3 and dxc5 before your pieces are ready.",
      "Ne7": "Also played, but ...Nd7 is the more useful move first: it supports the ...c5 break and keeps your options, while ...Ne7 now blocks your f8-bishop earlier than necessary."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3": {
      "Bg6": "Playable, but after Bxg6 hxg6 your kingside pawns are doubled, and the h-file opens toward your own king if you castle short. ...Bxd3 is simpler: you get a French-type structure where your problem bishop is already gone."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3": {
      "Qb6": "A good French-style move, but ...c5 first is more direct: the queen on b6 works best together with ...c5, both aiming at d4. Before ...c5 it only hits b2, which White can cover easily."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 O-O": {
      "cxd4": "Reasonable, but releasing the tension lets White recapture cxd4 and get a stable center plus the c3-square for his knight. ...Qb6 first adds more pressure and keeps the option to take later, at the moment that suits you."
    },
    "e4 c6 d4 d5 e5 Bf5 h4": {
      "h6": "Also a main line (it keeps h7 for the bishop), but White can then play g4 and gain a lot of kingside space, pushing your bishop around. ...h5 stops g4 completely; the cost is a hole on g5, which is easier to live with."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3": {
      "Nf6": "Also fine, and it often transposes. ...Nc6 first attacks d4 immediately, so White has to spend a move on c3 — which also takes the c3-square away from his knight."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3": {
      "Na5": "A known move (Qa4+ Bd7 Qc2), but your knight ends up on the edge and White's queen lands safely on c2. ...Qd7 defends b7 while keeping all your pieces centralised and ready for ...e6 and ...Bd6."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3": {
      "Nc6": "A sharp main line, but it leads to forcing play where White's initiative is dangerous and you must know concrete moves. ...e6 is simpler: it secures d5 and heads for an isolated-pawn position with clear plans."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3": {
      "Bb4": "Also a main move (pinning the knight), but it leads to sharper lines and the bishop can end up far from your king. ...Be7 is simpler: it heads straight for castling and keeps the bishop near your kingside, where White will attack."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3": {
      "O-O": "Fine too, but ...Nc6 first adds pressure on the isolated d4-pawn, so White must keep defending it before he can start an attack. Castling can come next move — White has no immediate threat."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4": {
      "Nd7": "The Karpov Variation — also excellent, but it's a separate system with its own theory. ...Bf5 develops the bishop with tempo on the knight and follows the core Caro-Kann rule (bishop out before ...e6), so your whole repertoire stays consistent.",
      "Nf6": "A valid line, but after Nxf6+ you must recapture with a pawn (exf6 or gxf6) and accept a damaged structure in exchange for activity. ...Bf5 keeps your pawns healthy."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4": {
      "h5": "Also playable, but it gives White the g5-square for a knight or bishop for the rest of the game. ...h6 keeps your pawns compact and still gives the bishop the h7 retreat."
    },
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4": {
      "Nd7": "The Karpov Variation — also excellent, but it's a separate system with its own theory. ...Bf5 develops the bishop with tempo on the knight and follows the core Caro-Kann rule (bishop out before ...e6), so your whole repertoire stays consistent."
    },
    "e4 c6 Nc3 d5 Nf3": {
      "dxe4": "Playable, but it hands White a free center and an easy lead in development after Nxe4. ...Bg4 develops the bishop before ...e6 and prepares ...Bxf3, removing White's best attacking knight."
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3": {
      "Nf6": "Also fine, but ...e6 first makes d5 rock-solid and means e4–e5 can't come with tempo on a knight. It also opens your f8-bishop; then ...Nf6 follows without any tricks.",
      "d4": "Playable (Ne2 next), but it releases the central tension and gives White a free hand with f4 and his e4-pawn. ...e6 supports d5 and keeps your center flexible: you can still choose ...d4 or ...dxe4 later."
    },
    "e4 c6 d3 d5 Nd2 e5 Ngf3": {
      "Nd7": "Also defends e5, but on d7 the knight blocks your c8-bishop. ...Bd6 develops a piece toward the kingside and keeps d7 free."
    },
    "e4 c6 d4 d5 f3": {
      "dxe4": "A main alternative (fxe4 e5!), but it opens the position and leads to sharp lines you must know move by move. ...e6 is calmer: your center stays solid, and ...Bb4 and ...c5 exploit the dark squares White weakened with f3.",
      "g6": "Also a good system (...Bg7 pressing d4), but it's a different setup to learn. ...e6 and ...Bb4 use the same idea — f3 weakened White's dark squares — with simpler, more familiar pawn structures."
    },
    "e4 c6 d4": {
      "g6": "The Modern Defence is playable, but it lets White build a huge center (Nc3, f4, Nf3) without any challenge. ...d5 attacks e4 immediately — that's the whole point of 1...c6."
    },
    "e4 c6 d4 d5 e5": {
      "c5": "A real line, but the c-pawn moves twice (c6, then c5), costing a tempo while your c8-bishop is still inside. ...Bf5 first gets the bishop out; the ...c5 break comes later, supported by ...e6."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4": {
      "e6": "Playable, but ...e6 locks your c8-bishop in before it has developed, and White gets easy development. ...Nf6 defends d5 with a piece and keeps the bishop's options open."
    },
    "e4 c6 Nc3": {
      "e5": "Playable, but it leads to an open game where your ...c6 is a wasted tempo (it even takes c6 away from your knight). ...d5 is the Caro-Kann way: hit e4 at once with pawn support."
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3": {
      "Bh5": "Playable, but it allows g4 and Ne5 ideas where your bishop gets harassed and your kingside loosened. Taking on f3 gives White the bishop pair, but it removes his best attacking knight and gives you a rock-solid light-square setup (c6, d5, e6)."
    },
    "e4 c6 c4": {
      "e5": "Solid, but it leaves a hole on d5, and your c6-pawn no longer does its job of supporting ...d5. Strike the center with ...d5 at once: if White exchanges, you get free, active development."
    },
    "e4 c6 Bc4 d5 exd5 cxd5 Bb5+": {
      "Nc6": "Also fine: it develops. But the knight can then be pinned and hit (d4, Nf3–e5), and White keeps his active bishop. ...Bd7 trades off the piece White spent three moves on."
    },
    "e4 c6 Bc4 d5 exd5 cxd5 Bb5+ Bd7 Bxd7+": {
      "Qxd7": "Equal, and also fine. Nxd7 develops a piece instead of the queen, and the queen can still choose c7 or b6 later."
    }
  },
  "quizzes": {
    "e4 c6": {
      "q": "Why 1...c6, rather than 1...e6 (the French)?",
      "options": [
        {
          "text": "It prepares ...d5 with pawn support while keeping the c8-bishop's diagonal open",
          "ok": true,
          "why": "In the French, ...e6 shuts in the light-squared bishop. ...c6 supports ...d5 just as well, and your bishop stays free to go to f5 or g4."
        },
        {
          "text": "It prepares ...b5 and a queenside attack",
          "why": "That's not the idea. ...c6 is there to back up ...d5."
        },
        {
          "text": "It stops White from playing d4",
          "why": "...c6 doesn't control d4, and White usually plays 2.d4 anyway. Its job is to support ...d5."
        }
      ]
    },
    "e4 c6 d4 d5 e5 Bf5": {
      "q": "Why does the bishop come out to f5 BEFORE ...e6?",
      "options": [
        {
          "text": "After ...e6 it would be locked inside the pawn chain",
          "ok": true,
          "why": "Once ...e6 is played, the c8-bishop is stuck behind pawns on e6 and d5, the 'bad French bishop'. Out on f5 it's active and controls e4 and the b1–h7 diagonal."
        },
        {
          "text": "To attack the e5-pawn",
          "why": "Bf5 doesn't attack e5 at all. The point is getting the bishop outside before ...e6 closes the door."
        },
        {
          "text": "To prepare queenside castling",
          "why": "Castling isn't the point. The bishop has to get out before ...e6 shuts it in."
        }
      ]
    },
    "e4 c6 d4 d5 e5 Bf5 h4 h5": {
      "q": "Why answer h4 with ...h5?",
      "options": [
        {
          "text": "To stop g4, so White's pawns can't chase your bishop",
          "ok": true,
          "why": "With ...h5, g4 would just lose a pawn. Your bishop is safe and can even use g4 later. The price is a hole on g5."
        },
        {
          "text": "To prepare ...g5 and attack White's king",
          "why": "...h5 is purely defensive: it stops the g4 push for good."
        },
        {
          "text": "To give the bishop a retreat on h7",
          "why": "That's what ...h6 does (in the Classical). ...h5 does something different: it stops the pawn from ever reaching g4."
        }
      ]
    },
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Nd7 O-O Ne7": {
      "q": "What's your plan in this Short System position?",
      "options": [
        {
          "text": "...h6, then the ...c5 break against d4, with the knight heading for f5",
          "ok": true,
          "why": "d4 is the base of White's pawn chain. ...c5 attacks it, and a knight on f5 hits it too. ...h6 first gives your bishop h7 if White plays Nh4."
        },
        {
          "text": "Castle long and push your kingside pawns",
          "why": "White has the space on the kingside (the e5-pawn). Your play is against d4."
        },
        {
          "text": "Trade your bishop for the f3-knight with ...Bg4 and ...Bxf3",
          "why": "Your light-squared bishop is a good piece outside the chain. Giving it up for a knight without a reason only helps White. The fight is about d4."
        }
      ]
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3": {
      "q": "Why take on d3 right away?",
      "options": [
        {
          "text": "Your bishop was attacked and undefended, and trading suits your pawn structure",
          "ok": true,
          "why": "After Qxd3 and ...e6 all your pawns stand on light squares, so the light-squared bishop was the piece you needed least. It's a good French-type position with the problem bishop already gone."
        },
        {
          "text": "To double White's pawns",
          "why": "White recaptures with the queen, so no pawns get doubled."
        },
        {
          "text": "Because ...Bg6 would lose a piece",
          "why": "...Bg6 is playable (Bxg6 hxg6 opens your h-file). Trading on d3 is just cleaner."
        }
      ]
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 O-O Qb6": {
      "q": "What's the plan from here?",
      "options": [
        {
          "text": "Pile up on d4: ...cxd4 at the right moment, ...Nge7–f5 and ...Rc8",
          "ok": true,
          "why": "d4 is the base of White's chain. Your c-pawn, knights and the b6-queen all aim at it, and the c-file opens after ...cxd4."
        },
        {
          "text": "Attack White's king with ...h5–h4",
          "why": "Your king isn't castled and White's center is strong. The target is d4, not the king."
        },
        {
          "text": "Grab the b2-pawn with ...Qxb2",
          "why": "The c1-bishop still guards b2: ...Qxb2?? Bxb2 loses your queen."
        }
      ]
    },
    "e4 c6 d4 d5 exd5 cxd5": {
      "q": "Why recapture with the c-pawn?",
      "options": [
        {
          "text": "To keep a pawn in the center and get the half-open c-file",
          "ok": true,
          "why": "That's the point of 1...c6: after the exchange you still have a central pawn on d5."
        },
        {
          "text": "Because ...Qxd5 would lose the queen",
          "why": "...Qxd5 doesn't lose the queen, but Nc3 hits it with tempo and you've given up your central pawn."
        },
        {
          "text": "To open the f8-bishop",
          "why": "The c-pawn doesn't block the f8-bishop. cxd5 is about the central pawn."
        }
      ]
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7 Nd2 e6 Ngf3 Bd6": {
      "q": "What's the plan in this Exchange structure?",
      "options": [
        {
          "text": "Trade dark-squared bishops, castle short, then the minority attack ...b5–b4",
          "ok": true,
          "why": "White's f4-bishop is his best minor piece. After the trade you castle and push ...b5–b4 against c3 to leave White with a weak pawn."
        },
        {
          "text": "Castle long and attack with ...g5",
          "why": "White's Bd3 and the structure point the other way. Your play is on the queenside, with the minority attack."
        },
        {
          "text": "Take on f3 at once with ...Bxf3",
          "why": "Possible when it helps, but there's no reason yet: the g4-bishop annoys White. First trade on d6 and castle."
        }
      ]
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5": {
      "q": "Why recapture on d5 with the knight?",
      "options": [
        {
          "text": "d5 is the ideal blockade square right in front of the isolated pawn",
          "ok": true,
          "why": "A piece on the square in front of an isolated pawn can't be kicked by pawns, and it stops the pawn from advancing."
        },
        {
          "text": "...exd5 would hang a pawn",
          "why": "...exd5 doesn't hang anything; it just gives a different, symmetrical structure. Nxd5 blockades the isolated d4-pawn."
        },
        {
          "text": "To attack the c3-knight",
          "why": "The knight does eye c3, but that's a bonus. The main reason is the blockade."
        }
      ]
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3 Nc6 O-O O-O": {
      "q": "White has an isolated d4-pawn. What's your recipe?",
      "options": [
        {
          "text": "Blockade d5, pressure d4 and trade pieces",
          "ok": true,
          "why": "Every trade makes the isolated pawn weaker and takes away White's attacking chances. Your pieces go to f6, b4, b7 and the c- and d-files."
        },
        {
          "text": "Avoid trades and attack on the kingside",
          "why": "That's White's plan with the isolated pawn! Trades favour you."
        },
        {
          "text": "Win the d4-pawn straight away",
          "why": "d4 is defended by the f3-knight with the queen behind it. You can't just grab it: pile up on it with pieces and trade."
        }
      ]
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5": {
      "q": "Why ...Bf5 here?",
      "options": [
        {
          "text": "It develops the bishop outside the pawn chain, with tempo on the e4-knight",
          "ok": true,
          "why": "The knight is attacked, so White must spend a move on it while your bishop is already out, before ...e6."
        },
        {
          "text": "It pins the e4-knight",
          "why": "It's an attack, not a pin: nothing stands behind the knight."
        },
        {
          "text": "To stop White from castling",
          "why": "It has nothing to do with castling. It's about developing the bishop with tempo."
        }
      ]
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6": {
      "q": "Why ...h6 against h4?",
      "options": [
        {
          "text": "So the bishop has h7 to go to when h5 comes",
          "ok": true,
          "why": "Without ...h6, h5 would hit the g6-bishop, and it would have no safe square (f5 and e4 are covered by the g3-knight)."
        },
        {
          "text": "To stop h5",
          "why": "...h6 doesn't stop h5; White plays it next move. It makes sure the bishop has h7."
        },
        {
          "text": "To prepare ...g5",
          "why": "...g5 would badly weaken your king's side. ...h6 is only about the bishop's escape square."
        }
      ]
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2 Ngf6 O-O-O Be7": {
      "q": "White castled long. What's your plan?",
      "options": [
        {
          "text": "Castle, then ...Qc7 and ...c5 to open lines toward White's king on c1",
          "ok": true,
          "why": "With kings on different wings, open lines in front of the enemy king. ...c5 also hits d4."
        },
        {
          "text": "Push ...g5 to attack White's h5-pawn",
          "why": "hxg6 en passant would open the h-file toward your own king. Leave the kingside alone."
        },
        {
          "text": "Open the center with ...e5 right now",
          "why": "Your king isn't castled yet, and opening the center while White is better developed helps him. Castle first."
        }
      ]
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3": {
      "q": "Why give the bishop for the knight?",
      "options": [
        {
          "text": "It leaves you a rock-solid light-square setup, and White's queen comes out early",
          "ok": true,
          "why": "With pawns on c6, d5 and e6 the light squares are covered by pawns, so you hardly miss the bishop. White gets the bishop pair but no easy targets."
        },
        {
          "text": "To double White's pawns",
          "why": "White recaptures with the queen, so there are no doubled pawns."
        },
        {
          "text": "Because the bishop was trapped",
          "why": "It wasn't: ...Bh5 is playable. The trade is a choice for a solid structure."
        }
      ]
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d3 Nf6 Bd2 Nbd7": {
      "q": "What's the plan from here?",
      "options": [
        {
          "text": "Develop (...Bc5 or ...Be7), castle, then ...d4 or ...dxe4 and ...Ne5 to harass the queen",
          "ok": true,
          "why": "Your position is solid. White has the bishop pair, so you play with your knights against his queen and keep the position under control."
        },
        {
          "text": "Open the position quickly",
          "why": "White has the two bishops, and open positions favour bishops. Keep it controlled."
        },
        {
          "text": "Push ...h5–h4 to gain space",
          "why": "Your pieces aren't fully developed and your king isn't castled. Finish development first."
        }
      ]
    },
    "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6": {
      "q": "Why ...Nf6 instead of recapturing with the queen?",
      "options": [
        {
          "text": "...Qxd5 lets Nc3 hit the queen with tempo; ...Nf6 develops and takes on d5 next",
          "ok": true,
          "why": "You get the pawn back anyway (…Nxd5), but with a developed piece instead of an exposed queen."
        },
        {
          "text": "It's a gambit: you give up the pawn for development",
          "why": "It isn't a gambit: the d5-pawn falls next move."
        },
        {
          "text": "To prepare ...g6",
          "why": "A fianchetto is possible later. The point now is winning back the pawn with a piece."
        }
      ]
    },
    "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6 Nc3 Nxd5 Nf3 Nc6": {
      "q": "What's your plan in this position?",
      "options": [
        {
          "text": "Develop with ...e6 or ...g6, the bishop to e7 or g7, and castle",
          "ok": true,
          "why": "You've won the pawn back, your d5-knight is centralised, and nothing is weak. Finish development."
        },
        {
          "text": "Win a pawn with ...Nxc3",
          "why": "...Nxc3 bxc3 is a trade, not a pawn win. It can be useful to damage White's structure, but nothing is gained for free."
        },
        {
          "text": "Move the d5-knight again, to b4",
          "why": "Moving the same piece again and again loses time. Finish development first."
        }
      ]
    },
    "e4 c6 d3 d5 Nd2 e5": {
      "q": "Why ...e5 against White's quiet d3 setup?",
      "options": [
        {
          "text": "Against a slow setup you can afford a big center: pawns on d5 and e5",
          "ok": true,
          "why": "White isn't challenging the center, so you take space with both central pawns."
        },
        {
          "text": "To open the f8-bishop toward c5",
          "why": "The f8-bishop goes to d6 in this line. The real reason is central space."
        },
        {
          "text": "To prepare kingside castling quickly",
          "why": "You'll castle soon, but ...e5 is about the center."
        }
      ]
    },
    "e4 c6 d3 d5 Nd2 e5 Ngf3 Bd6 g3 Nf6 Bg2 O-O O-O Re8": {
      "q": "What's the plan against the King's Indian Attack?",
      "options": [
        {
          "text": "Gain queenside space (...Nbd7, ...a5–a4), tuck the bishop on c7, and keep e4–e5 under control",
          "ok": true,
          "why": "White's play is e4–e5 and a kingside attack. Your rook and bishop control e5, and your space grows on the queenside."
        },
        {
          "text": "Attack on the kingside with ...g5 and ...h5",
          "why": "Your own king lives there, and White's fianchetto is solid. Your space is on the queenside."
        },
        {
          "text": "Play ...dxe4 straight away",
          "why": "It can be useful later, but now it releases your central grip for nothing. Keep the tension and gain space on the queenside."
        }
      ]
    },
    "e4 c6 d4 d5 f3 e6": {
      "q": "Why ...e6 here, breaking the 'bishop first' rule?",
      "options": [
        {
          "text": "Because ...Bf5 and ...Bg4 aren't possible: e4 and f3 cover those squares",
          "ok": true,
          "why": "Rules have exceptions. Here the bishop has no good square anyway, so ...e6 supports d5 and opens the f8-bishop toward b4."
        },
        {
          "text": "Because ...dxe4 would lose a pawn",
          "why": "...dxe4 fxe4 e5 is a playable alternative. It's not about losing a pawn."
        },
        {
          "text": "To prepare a kingside fianchetto",
          "why": "...g6 is another option, but ...e6 is about opening the f8-bishop and supporting d5."
        }
      ]
    },
    "e4 c6 d4 d5 f3 e6 Nc3 Bb4": {
      "q": "What's next in the Fantasy?",
      "options": [
        {
          "text": "...c5 against d4, ...Ne7 and ...Nbc6, using the dark squares f3 weakened",
          "ok": true,
          "why": "The pin on c3 weakens e4, ...c5 hits d4, and the knight goes to e7 (not f6, where e5 would kick it)."
        },
        {
          "text": "...Nf6 to add pressure on e4",
          "why": "e5 would kick the knight. In this line it goes to e7."
        },
        {
          "text": "...Bxc3+ at once",
          "why": "Keep the pin until it pays: take on c3 when White plays a3, or when it leaves him with weak doubled pawns."
        }
      ]
    }
  }
});
