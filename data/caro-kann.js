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
    "e4 c6 d4 d5 f3 e6 Nc3 Bb4": "Pin the c3-knight: it no longer really defends e4, and ...dxe4 becomes a threat."
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
      "g6": "That's a Modern Defence: playable, but White gets a huge center. Our repertoire strikes immediately with ...d5.",
      "Nf6": "e5 kicks your knight with tempo. Play ...d5 first."
    },
    "e4 c6 d4 d5 e5": {
      "e6": "This locks your bishop on c8 behind the e6-pawn — the 'bad French bishop'. Golden rule: get the bishop out with ...Bf5 first, THEN play ...e6.",
      "c5": "A real line (it costs a tempo since the c-pawn moves twice), but our repertoire first develops the bishop with ...Bf5.",
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
      "dxc4": "Bxc4: White develops with tempo and has a free, active game. Defend d5 with ...Nf6.",
      "e6": "Playable, but after ...e6 the c8-bishop is locked in and White can choose Nc3/Nf3 setups easily. Our repertoire plays ...Nf6."
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
    "e4 c6 Nc3": {
      "e5": "Playable, but not our repertoire. Stick to ...d5."
    },
    "e4 c6 Nc3 d5 Nf3": {
      "Nf6": "e5 kicks the knight with tempo (Ne4 or Nfd7) and White gains space.",
      "Bf5": "exd5 cxd5 Bb5+ and White gets annoying pressure; also Nh4 can chase the bishop. On g4 it pins the knight instead."
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3": {
      "Bh5": "Playable, but it allows g4 and Ne5 ideas where your bishop gets harassed and your position becomes uncomfortable. Our repertoire simply takes on f3.",
      "Bf5": "exd5 cxd5 and Bb5+ or Nh4 hits the bishop again. Take on f3."
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3": {
      "d4": "Playable (Ne2 next), but it releases central tension. Our repertoire supports d5 with ...e6.",
      "dxe4": "Nxe4 and White's pieces become active; your center disappears. Support d5 with ...e6."
    },
    "e4 c6 c4": {
      "e5": "Solid too, but not our repertoire. Strike the center with ...d5."
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
    }
  },
  "alts": {
    "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2": {
      "c5": "A modern, good move (...c5 directly). Our repertoire develops ...Nd7 first.",
      "Ne7": "Also played. Our repertoire plays ...Nd7 first."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3": {
      "Bg6": "Playable — after Bxg6 hxg6 your h8-rook gets a half-open file. Our repertoire simply trades with ...Bxd3."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3": {
      "Qb6": "Also a good French-style move. Our repertoire strikes with ...c5 first."
    },
    "e4 c6 d4 d5 e5 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 O-O": {
      "cxd4": "A reasonable move too, but our repertoire plays ...Qb6 first to add pressure."
    },
    "e4 c6 d4 d5 e5 Bf5 h4": {
      "h6": "Also a main line (keeping h7 for the bishop). Our repertoire uses ...h5 to stop g4 completely."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3": {
      "Nf6": "Also fine; it often transposes. Our repertoire plays ...Nc6 first."
    },
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3": {
      "Na5": "Also a known move (Qa4+ Bd7 Qc2). Our repertoire defends with ...Qd7."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3": {
      "Nc6": "A sharp main line too. Our repertoire plays the solid ...e6."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3": {
      "Bb4": "Also a main move (pinning the knight). Our repertoire plays the simpler ...Be7."
    },
    "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 Bd3": {
      "O-O": "Fine too. Our repertoire develops ...Nc6 first."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4": {
      "Nd7": "The Karpov Variation — also excellent! Our repertoire plays the Classical ...Bf5.",
      "Nf6": "A valid line (Nxf6+ and you recapture with a pawn). Our repertoire plays ...Bf5."
    },
    "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4": {
      "h5": "Also playable, but it weakens g5. Our repertoire plays ...h6."
    },
    "e4 c6 d4 d5 Nd2 dxe4 Nxe4": {
      "Nd7": "The Karpov Variation — also excellent. Our repertoire plays ...Bf5."
    },
    "e4 c6 Nc3 d5 Nf3": {
      "dxe4": "Playable (Nxe4 and ...Nf6 or ...Bf5). Our repertoire plays ...Bg4."
    },
    "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3": {
      "Nf6": "Also fine. Our repertoire plays ...e6 first."
    },
    "e4 c6 d3 d5 Nd2 e5 Ngf3": {
      "Nd7": "Also defends e5. Our repertoire uses the bishop: ...Bd6."
    },
    "e4 c6 d4 d5 f3": {
      "dxe4": "A main alternative (fxe4 e5!). Our repertoire plays ...e6.",
      "g6": "Also a good system against the Fantasy. Our repertoire plays ...e6."
    }
  }
});
