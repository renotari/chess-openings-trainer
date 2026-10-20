window.REPERTOIRES = window.REPERTOIRES || [];
window.REPERTOIRES.push({
  "id": "london",
  "name": "London System",
  "side": "w",
  "intro": "A solid system for White built on the pawn triangle d4–e3–c3. The dark-squared bishop goes to f4 BEFORE e3, so it is not locked inside the pawn chain. Then Nf3, Bd3, Nbd2, O-O, and later either a kingside attack (Ne5, Qf3/h4) or the central break e3–e4. You can play almost the same setup against everything, but the details (when to play c3, how to meet ...Qb6, what to do against ...Bd6) are what this trainer drills.",
  "lines": [
    {
      "id": "classical",
      "name": "Classical: ...d5, ...Nf6, ...e6, ...Bd6",
      "moves": "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3 Nc6 Nbd2",
      "plan": "Your setup is complete. Next: castle short. Plans: (1) Ne5 followed by f4, Rf3–h3 or Qf3 for a kingside attack — your Bd3 already aims at h7; (2) Qe2 and the e3–e4 break to open the center when Black's pieces are passive; (3) if Black ever plays ...Bxg3, recapture hxg3 and use the half-open h-file. Typical Black tricks: ...Qb6 hitting b2 (answer Qb3 or Qc2/Rb1), and ...c4 kicking the Bd3 (retreat Bc2 and prepare e4)."
    },
    {
      "id": "c5-qb6",
      "name": "Early ...c5 and ...Qb6",
      "moves": "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2",
      "plan": "Black released the pressure on d4 by playing ...c4, so the center is yours. Continue with Nd2, Ngf3 and Be2, then prepare e3–e4 — the queen on c2 supports it. The pawn on c4 can also be attacked with b3. Keep in mind: your b2-pawn is always a little loose in the London because the bishop left c1, so keep a piece watching it."
    },
    {
      "id": "c5-transposition",
      "name": "Early ...c5 with ...Nf6 and ...e6 (transposition)",
      "moves": "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3 Bd6 Bg3 O-O Bd3",
      "plan": "This is EXACTLY the same position as the Classical line, reached with a different move order — a transposition. Recognising known positions is a big part of opening knowledge. Same plans: castle, then Ne5 + f4 or Qe2 + e4."
    },
    {
      "id": "bf5",
      "name": "Black copies you: ...Bf5",
      "moves": "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 Nbd2",
      "plan": "Castle, then push e3–e4! Your queen on d3 and knight on d2 support it. Black traded away his light-squared bishop, so he has trouble controlling the light squares (e4, d5, h7). After e4 opens the center your pieces will be more active."
    },
    {
      "id": "kid-setup",
      "name": "King's Indian setup: ...g6, ...Bg7, ...d6",
      "moves": "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4 e5 Bh2",
      "plan": "Keep the central tension. Next: Nc3 and Qc2, or queenside expansion with b4–b5. If Black pushes ...e4, the knight goes to d2 (and later f3 can undermine e4). Your bishop on h2 is safe from ...Nh5 and keeps pressing on e5 and the long diagonal toward b8."
    },
    {
      "id": "early-qb6",
      "name": "Early ...Qb6 (before ...Nc6): 4.Nc3!",
      "kind": "sideline",
      "moves": "d4 d5 Bf4 c5 e3 Qb6 Nc3 e6 Nb5",
      "plan": "Black has to deal with the threat Nc7+, usually with ...Na6, which puts his knight on the rim. Continue with a4–a5 to kick the queen off b6, plus c3 and Nf3. Your knight on b5 is a thorn in Black's side, so don't retreat it without a reason. Take on c5 only when it gains something."
    },
    {
      "id": "trap-qxb2",
      "name": "Trap: 4...Qxb2? 5.Nxd5!",
      "kind": "trap",
      "moves": "d4 d5 Bf4 c5 e3 Qb6 Nc3 Qxb2 Nxd5",
      "plan": "Black is in big trouble: Nc7+ is threatened, and his queen on b2 is cut off from the defence. Keep up the pressure: Rb1 or Qb1 chases the queen, and Nc7+ hangs over Black's head. Count on winning at least the exchange. Don't rush to grab material if Black's king is in danger: attacking moves first.",
      "error": "d4 d5 Bf4 c5 e3 Qb6 Nc3 Qxb2"
    },
    {
      "id": "bxg3",
      "name": "Black takes on g3: ...Bxg3 hxg3",
      "kind": "sideline",
      "moves": "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3 hxg3 Nbd7 Bd3 c5 c3",
      "plan": "The half-open h-file is your trump. Ne5 and Qc2 (lining up with the Bd3 against h7) are typical, and once Black castles short, a rook lift or even Rxh7 can appear. Without the h-pawn your king isn't comfortable on g1, so don't rush to castle short: it's often fine in the center for a while, or on the queenside. Otherwise the plan is the usual one: Nbd2, Qe2 and e3–e4."
    },
    {
      "id": "nf6-c5",
      "name": "1...Nf6 2.Bf4 c5: 3.e3 cxd4 4.exd4",
      "kind": "sideline",
      "moves": "d4 Nf6 Bf4 c5 e3 cxd4 exd4 d5 Nf3 Nc6 c3",
      "plan": "Your setup is a London where the e-pawns have been exchanged: next come Bd3, Nbd2 and O-O. The half-open e-file is yours, so a rook on e1 and a knight on e5 are typical. If Black plays ...Bg4, h3 asks it to decide. Against ...Qb6 the answer is Qb3, just like in the main lines."
    },
    {
      "id": "trap-bg4",
      "name": "Trap: 3...Bg4? 4.Qxg4",
      "kind": "trap",
      "moves": "d4 d5 Bf4 c5 e3 Bg4 Qxg4",
      "plan": "You're a piece up. Play simply: develop (Nf3, c3, Bd3 or Be2, Nbd2), castle and trade pieces, since every trade brings you closer to a won endgame. Watch b2, because ...Qb6 is Black's only real try.",
      "error": "d4 d5 Bf4 c5 e3 Bg4"
    },
    {
      "id": "trap-nh5",
      "name": "Trap: 5...Nh5? 6.Qxh5",
      "kind": "trap",
      "moves": "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 Nh5 Qxh5",
      "plan": "A piece up. If the queen gets harassed on h5, bring it back (e2, f3 or d1), finish development with Ngf3 and Bd3, castle and trade pieces.",
      "error": "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 Nh5"
    },
    {
      "id": "trap-bf5-nbd7",
      "name": "Trap: 4...Nbd7? 5.Bxf5",
      "kind": "trap",
      "moves": "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Nbd7 Bxf5",
      "plan": "You're a piece up. Keep it simple: Nf3, Nbd2, O-O and c3. Don't chase pawns: develop, trade pieces, and the extra bishop will decide.",
      "error": "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Nbd7"
    }
  ],
  "notes": {
    "d4": "Every London game starts with 1.d4. The pawn takes a central square, controls e5 and c5, and opens the diagonal c1–h6 for the dark-squared bishop — the piece we develop next.",
    "d4 d5": "Black mirrors you and claims his share of the center. The most common reply.",
    "d4 d5 Bf4": "The signature London move: the dark-squared bishop comes out to f4 BEFORE you play e3. If you play e3 first, the bishop is stuck behind your own pawn (that's the Colle System). On f4 it controls e5 — the square our knight wants later — and the b8–h2 diagonal.",
    "d4 d5 Bf4 Nf6": "Black develops his king's knight, controlling e4.",
    "d4 d5 Bf4 Nf6 e3": "Now that the bishop is outside the chain, e3 is ideal: it supports d4 (the base of our whole setup), opens the way for the f1-bishop to d3, and gives the f4-bishop a safe pawn chain behind it.",
    "d4 d5 Bf4 Nf6 e3 e6": "Black chooses a Queen's Gambit-like setup. His light-squared bishop on c8 is now locked in behind the e6-pawn — a small long-term problem for Black.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3": "The king's knight goes to its best square. It controls e5 together with d4 and Bf4 — three pieces on e5, the key square for a later Ne5 jump — and prepares castling.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6": "Black offers to trade his dark-squared bishop for your London bishop — your best minor piece. His bishop on d6 also eyes your h2-pawn.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3": "Keep your bishop! On g3 it stays on the same b8–h2 diagonal, face to face with Black's bishop. If Black takes with ...Bxg3, you recapture hxg3: your pawn structure stays healthy and your h1-rook gets a half-open h-file for an attack. Never let Black take on f4 for free (exf4 would double your pawns) and don't trade on d6 yourself.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O": "Black castles.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3": "The light-squared bishop goes to its ideal diagonal b1–h7, aiming straight at Black's castled king on h7. Together with Ne5, Qf3 or h4–h5 this creates real kingside chances.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5": "Black hits your center with the typical ...c5 break, putting pressure on d4.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3": "Support d4 with c3, completing the London triangle d4–c3–e3. Now if ...cxd4 you recapture exd4 (or cxd4) and your center holds. c3 also opens the d1–a4 diagonal so your queen can come to b3 or c2 if Black plays ...Qb6.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3 Nc6": "Black adds the knight's pressure on d4.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3 Nc6 Nbd2": "The queen's knight goes to d2, not c3 (c3 is taken by the pawn anyway). From d2 it supports the e3–e4 break, can reroute to f3 or e5 later, and doesn't block anything. Your development is complete except castling.",
    "d4 d5 Bf4 c5": "The most testing reply: Black attacks d4 immediately. Note that with your bishop on f4, the b2-pawn is no longer protected by it — Black often follows with ...Qb6.",
    "d4 d5 Bf4 c5 e3": "Stay calm and support d4 with e3. Your pawn chain is solid and the f1-bishop is free to develop.",
    "d4 d5 Bf4 c5 e3 Nc6": "More pressure on d4: the c5-pawn and the knight both attack it, and ...Qb6 may follow.",
    "d4 d5 Bf4 c5 e3 Nc6 c3": "Reinforce d4 with c3. Now d4 is protected by c3, e3 and the queen. c3 also opens the d1–a4 diagonal for your queen, which is important against ...Qb6 (Qb3!).",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6": "The queen attacks b2. Remember: your bishop left c1, so b2 has no defender right now.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3": "Defend b2 by offering a queen trade. If ...Qxb3 axb3, your a1-rook gets the half-open a-file and your structure is still fine. If Black avoids the trade, your queen stays active on b3, also hitting d5 and b7.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4": "Black kicks your queen and gains space on the queenside — but by doing so he releases the pressure on d4.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2": "Retreat to c2: the queen still guards b2 along the second rank, supports the e3–e4 break, and is not exposed. Here the queen is even better placed than on d1.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6": "Black develops normally instead of going for ...Qb6.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2": "In this line the queen's knight comes out first. It supports a later e4, doesn't block your c-pawn, and keeps the d1–a4 diagonal open for Qb3 if Black plays ...Qb6. Ngf3 follows.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6": "Black solidifies d5 with ...e6.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3": "Now the king's knight to f3 — its best square, controlling e5 and protecting your kingside.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3 Bd6": "Again Black challenges your bishop.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3 Bd6 Bg3": "Same rule as always: keep the bishop with Bg3. If ...Bxg3, hxg3 opens the h-file for your rook.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3 Bd6 Bg3 O-O": "Black castles.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3 Bd6 Bg3 O-O Bd3": "The bishop to its attacking diagonal, aiming at h7. Look at the board: this is the same position as in the Classical line.",
    "d4 d5 Bf4 Nf6 e3 Bf5": "Black copies you: his light-squared bishop comes out to f5 before ...e6, so it won't be locked in.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3": "Challenge the active bishop at once. Your Bd3 is defended by the queen. If Black trades (...Bxd3 Qxd3), your queen lands on d3 where it supports e3–e4 and eyes h7 and b5. Black loses his best bishop and gets weaker on the light squares.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3": "Black accepts the trade.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3": "Recapture with the queen: it develops with no loss of time, supports the e4 break, and Black has no light-squared bishop left to harass it.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6": "Black solidifies his center.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3": "Develop the knight to f3, covering e5 and preparing castling. The e4 break needs more preparation first.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5": "The typical ...c5 strike against d4.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3": "Complete the triangle: c3 supports d4 and keeps your center stable.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6": "Black adds pressure on d4.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 Nbd2": "The knight goes to d2 to support e4 — your main plan in this line. After castling, e3–e4 will be backed by the queen and knight.",
    "d4 Nf6": "Black plays the flexible ...Nf6, keeping his options open (Indian-style defences).",
    "d4 Nf6 Bf4": "Same plan as always: bishop out to f4 before e3.",
    "d4 Nf6 Bf4 g6": "Black wants a King's Indian setup: ...g6, ...Bg7, ...d6, ...O-O, then ...e5 or ...c5.",
    "d4 Nf6 Bf4 g6 e3": "Support d4 and open the f1-bishop.",
    "d4 Nf6 Bf4 g6 e3 Bg7": "Black fianchettoes: the g7-bishop presses on the long diagonal toward d4 and b2.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3": "Develop the knight; it guards d4 and controls e5.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6": "Black prepares ...e5, the King's Indian central break, which would hit your bishop on f4 and challenge d4.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3": "A key prophylactic move against King's Indian setups: it gives your bishop a retreat on h2 (so ...e5 or ...Nh5 won't trap or trade it) and stops ...Ng4 and ...Bg4.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O": "Black castles.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2": "Modest but correct: against a King's Indian setup the bishop is safer on e2 than on d3, where it could be hit by ...e5–e4 with tempo.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7": "Black supports the coming ...e5 with the knight.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O": "Castle: king safe, rook connected.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8": "A typical King's Indian idea against the London: the queen leaves the d-file (so a central exchange won't trade queens or leave the d-file open against her) and supports ...e5 along the e-file.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4": "Gain space on the queenside. c4 fights for the center and prepares Nc3; if Black later plays ...exd4, exd4 gives you a strong central pawn.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4 e5": "Black finally plays the thematic ...e5, attacking your bishop on f4.",
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4 e5 Bh2": "Retreat to h2 — this is why you played h3! The bishop stays on the b8–h2 diagonal, keeps watching e5, and can no longer be hit by ...Nh5 or pawns.",
    "d4 d5 Bf4 c5 e3 Qb6": "Black attacks b2 straight away, before ...Nc6. That has a cost: with the queen gone from d8, nothing defends the d5-pawn any more. And since you haven't played c3 yet, Qb3 isn't available, so instead of defending b2 you hit back.",
    "d4 d5 Bf4 c5 e3 Qb6 Nc3": "Counter-attack instead of defending b2. The knight hits the undefended d5-pawn and heads for b5, where it threatens Nc7+. If Black grabs ...Qxb2 anyway, his queen is far from home while your pieces come at his king.",
    "d4 d5 Bf4 c5 e3 Qb6 Nc3 e6": "Black defends d5. His queen is still eyeing b2.",
    "d4 d5 Bf4 c5 e3 Qb6 Nc3 e6 Nb5": "Threat: Nc7+, forking king and rook. The c7-square is guarded only by the queen, so Nc7+ Qxc7 Bxc7 would win the queen for a knight. Black has to spend a move (usually ...Na6) while his queen stays awkward on b6.",
    "d4 d5 Bf4 c5 e3 Qb6 Nc3 Qxb2": "Greedy. The queen goes deep into your camp, and the d5-pawn is still undefended. Nxd5 takes it back and threatens Nc7+, a fork of king and rook. Black's queen is too far away to help.",
    "d4 d5 Bf4 c5 e3 Qb6 Nc3 Qxb2 Nxd5": "Take back the pawn, with a threat. Nc7+ now forks the king and the a8-rook, and the c7-square has no defender left because the queen went to b2. Black can't parry everything and loses material.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3": "Black trades bishops. That's fine for you, as long as you recapture the right way.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3 hxg3": "Recapture toward the center with the h-pawn. Your h1-rook now has a half-open file aimed at h7, and the g3-pawn controls f4 and h4. The doubled g-pawns aren't a weakness here: Black has no easy way to attack them.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3 hxg3 Nbd7": "Black develops and prepares ...c5 or ...e5.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3 hxg3 Nbd7 Bd3": "The bishop goes to its attacking diagonal. Together with the rook on h1, two of your pieces are already aimed at h7, which makes castling short dangerous for Black.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3 hxg3 Nbd7 Bd3 c5": "The usual ...c5 strike against d4.",
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3 hxg3 Nbd7 Bd3 c5 c3": "Same answer as always: c3 holds d4 and completes the triangle. Next comes Nbd2 with Qe2 or Qc2, and later the e3–e4 break.",
    "d4 Nf6 Bf4 c5": "Black hits d4 at once, before deciding where his d-pawn goes. Note that b2 is unguarded again, so ...Qb6 is often coming.",
    "d4 Nf6 Bf4 c5 e3": "The same calm answer as against 1...d5 2...c5: e3 supports d4 and frees your f1-bishop.",
    "d4 Nf6 Bf4 c5 e3 cxd4": "Black exchanges and asks how you'll recapture.",
    "d4 Nf6 Bf4 c5 e3 cxd4 exd4": "Recapture with the pawn. Qxd4 would be hit by ...Nc6 with tempo. After exd4 you keep a pawn on d4, the e-file opens for your rook and queen, and your f1-bishop still has the d3-square.",
    "d4 Nf6 Bf4 c5 e3 cxd4 exd4 d5": "Black claims his share of the center.",
    "d4 Nf6 Bf4 c5 e3 cxd4 exd4 d5 Nf3": "Develop: the knight guards d4 and controls e5.",
    "d4 Nf6 Bf4 c5 e3 cxd4 exd4 d5 Nf3 Nc6": "Black adds pressure on d4.",
    "d4 Nf6 Bf4 c5 e3 cxd4 exd4 d5 Nf3 Nc6 c3": "c3 holds d4 and opens the d1–a4 diagonal for your queen in case of ...Qb6 (Qb3). You get a solid structure with easy development.",
    "d4 d5 Bf4 c5 e3 Bg4": "A typical slip. ...Bg4 is the move Black plays when your knight is on f3, to pin it. Here there is no knight on f3, and e3 has opened the d1–h5 diagonal, so the bishop is simply hanging to your queen.",
    "d4 d5 Bf4 c5 e3 Bg4 Qxg4": "Take it! After e3 your queen sees g4 along the d1–h5 diagonal. Always check what a new piece attacks, and whether it's protected.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 Nh5": "Hunting the London bishop with ...Nh5 is a normal idea, but only when the knight on h5 is protected. Here your knight is on d2, not f3, so the d1–h5 diagonal is open and nothing defends h5.",
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 Nh5 Qxh5": "Free piece. This is one more point of the Nd2 move order: with the knight not on f3, the d1–h5 diagonal stays open. Before reacting to an attack on your bishop, check whether the attacker is protected.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Nbd7": "Natural-looking development, but it ignores your threat: the Bd3 attacks the f5-bishop, and nothing defends it.",
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Nbd7 Bxf5": "Take the free bishop. This is why Bd3 against ...Bf5 is so useful: Black must react (trade on d3, defend with ...e6, or retreat), and plenty of club players forget to."
  },
  "mistakes": {
    "": {
      "e4": "1.e4 is a great move, but it's not the London System. The London always starts with 1.d4.",
      "Nf3": "Nf3 can transpose, but the London repertoire here starts with 1.d4 to claim the center first."
    },
    "d4 d5": {
      "e3": "e3 locks your dark-squared bishop on c1 behind the e3-pawn — it can never reach f4 then. The whole point of the London is: Bf4 FIRST, e3 SECOND.",
      "Bg5": "Bg5 attacks nothing (there's no knight on f6 yet) and the bishop can be kicked by ...h6 or ...f6. On f4 it is safe and controls the important e5-square.",
      "c4": "That's the Queen's Gambit — a fine opening, but a different one. In the London the c-pawn goes to c3 to form the d4–c3–e3 triangle.",
      "Nc3": "In the London, the b1-knight goes to d2, not c3. On c3 it blocks your c-pawn, which you want on c3 to support d4 against ...c5.",
      "e4": "That's the Blackmar-Diemer Gambit: after ...dxe4 you are a pawn down for some activity. Not part of our solid repertoire."
    },
    "d4 d5 Bf4 Nf6": {
      "Nc3": "Nc3 blocks your c-pawn (the Jobava London is a different, sharper system). In our London, the queen's knight goes to d2 and the c-pawn to c3.",
      "Bxc7": "The c7-pawn is defended by Black's queen: after ...Qxc7 you've given your best minor piece for a single pawn.",
      "h3": "Too slow: nothing threatens your bishop yet. Develop first with e3, Nf3, Bd3."
    },
    "d4 d5 Bf4 Nf6 e3 e6": {
      "Nc3": "Blocks your c-pawn: against ...c5 you won't be able to support d4 with c3, and the knight on c3 is hit by ...Bb4 pins.",
      "Qd3": "The queen comes out too early: it can be hit by ...c5–c4 or ...Nb4. Develop minor pieces first."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6": {
      "Bxd6": "Trading on d6 helps Black: his queen recaptures on d6 developing with tempo, it eyes your kingside (h2), and you lose your best minor piece. Keep it with Bg3.",
      "Bd3": "This allows ...Bxf4 exf4: your bishop is gone and you get doubled f-pawns, with fewer pieces controlling e5. Better to keep the bishop with Bg3.",
      "Be5": "On e5 the bishop can be chased by ...Nbd7 or ...Nc6 and traded on Black's terms. Bg3 keeps it on the diagonal safely.",
      "Bg5": "The bishop leaves its b8–h2 diagonal and can be hit by ...h6. Bg3 keeps the bishop facing Black's and keeps e5 under control."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O": {
      "Be2": "Too passive: on e2 the bishop doesn't aim at Black's king. In the London it belongs on d3, on the b1–h7 diagonal toward h7.",
      "Bb5": "On b5 the bishop hits nothing (no knight on c6) and can be kicked by ...a6 or ...c6. d3 is its natural square."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5": {
      "dxc5": "Giving up the center: after ...Bxc5 Black develops with tempo, your d4-anchor disappears, and Black's ...e5 becomes possible.",
      "Nc3": "Blocks your c-pawn: you can no longer support d4 with c3, and ...c4 would kick your bishop and leave the knight looking at a closed position.",
      "Nbd2": "Not bad, but c3 first is more precise: d4 is under attack right now and c3 is the move that holds it."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3 Nc6": {
      "Na3": "A knight on the rim is a poor piece: from a3 it doesn't support e4 or e5. On d2 it supports the center.",
      "Ne5": "Too early: ...Nxe5 dxe5 (or Bxe5 Bxe5 dxe5) and then ...Nd7 or ...Ng4 attacks the e5-pawn. Finish development first."
    },
    "d4 d5 Bf4 c5": {
      "dxc5": "Taking gives up your central d-pawn. Black regains the pawn easily (...e6 and ...Bxc5, or ...Qa5+) with a good center and fast development.",
      "e4": "Black takes ...dxe4 and your center collapses — you're just losing a pawn. First e3 to support d4.",
      "Nc3": "Blocks your c-pawn; after ...cxd4 you can't recapture with a pawn on c3."
    },
    "d4 d5 Bf4 c5 e3 Nc6": {
      "dxc5": "Releases the tension and lets Black regain the pawn with ...e5 or ...e6 and ...Bxc5, getting a great center.",
      "Nc3": "Blocks your c-pawn, so d4 can never be supported by c3. After ...cxd4 exd4, ...Qb6 hits b2 and d4 at the same time.",
      "Bb5": "Pins the knight, but Black can play ...Qb6 attacking b5 and b2 at the same time. Support d4 first with c3."
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6": {
      "b3": "Defending with a pawn weakens c3 and the light squares on the queenside — Black can later aim ...Bf5, ...Nb4 or ...Ba3 at those holes. Defend with a piece: Qb3.",
      "Qc2": "It defends b2, but after ...Bf5 the bishop hits your queen and you lose a tempo. Qb3 is more active.",
      "Nd2": "Doesn't defend b2: ...Qxb2 simply wins a pawn and attacks c3 too.",
      "Qc1": "Passive: the queen defends b2 but blocks your a1-rook and does nothing else. Qb3 offers a trade from an active square.",
      "b4": "...cxb4 cxb4 and Black wins the pawn or opens lines against your weakened queenside (...Nxb4 or ...Qxb4+)."
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4": {
      "Qxc4": "...dxc4 — the c4-pawn is defended by d5, so you lose your queen for a pawn!",
      "Qd1": "On d1 the queen no longer defends b2: ...Qxb2 wins a pawn. Qc2 keeps b2 protected along the second rank.",
      "Qxb6": "Possible but not best: after ...axb6 Black's a8-rook gets the half-open a-file and his queenside pawns gain space. Qc2 keeps more tension."
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6": {
      "dxc5": "Gives up the center: Black will regain the pawn and have a big center with ...e5.",
      "Qb3": "Too early: after ...c4 the queen is kicked and you lose time. Develop first."
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6": {
      "Ne2": "Blocks your f1-bishop and doesn't control e5. f3 is the knight's best square.",
      "Nh3": "Knight on the rim: it doesn't control the center."
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3 Bd6": {
      "Bxd6": "Helps Black develop his queen with tempo; you also lose your best minor piece. Keep it with Bg3.",
      "Bd3": "Allows ...Bxf4 exf4 with doubled f-pawns. Keep the bishop with Bg3."
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3 Bd6 Bg3 O-O": {
      "Be2": "Passive: on d3 the bishop aims at h7 and supports e4; on e2 it does neither."
    },
    "d4 d5 Bf4 Nf6 e3 Bf5": {
      "Be2": "Passive. Black's bishop on f5 is his best piece — challenge it with Bd3.",
      "Bb5+": "A random check that achieves nothing: ...c6 kicks the bishop and Black gains time."
    },
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3": {
      "cxd3": "Damages your structure: your c-pawn can no longer go to c3 to support d4, and the d3-pawn blocks your pieces. Recapture with the queen."
    },
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6": {
      "e4": "Too early: after ...dxe4 your queen can't recapture because the f6-knight guards e4 (Qxe4?? Nxe4). You just lose a pawn. Prepare e4 with Nf3 and Nbd2 first.",
      "Nc3": "Blocks the c-pawn; you want c3 to support d4 against ...c5."
    },
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5": {
      "dxc5": "Gives up the center: ...Bxc5 develops Black's bishop with tempo and Black is very comfortable."
    },
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6": {
      "e4": "Still premature: ...dxe4 and the e4-pawn is attacked by the f6-knight but defended only by your queen — you can't recapture. Bring the knight to d2 first.",
      "Na3": "On the rim the knight doesn't support e4. d2 is its square."
    },
    "d4 Nf6": {
      "e3": "Locks your dark-squared bishop on c1. In the London it must come out to f4 before e3.",
      "c4": "Leads to Queen's Gambit / Indian main lines — not our system.",
      "Bg5": "That's the Trompowsky, a different opening. In the London the bishop goes to f4."
    },
    "d4 Nf6 Bf4 g6": {
      "e4": "...Nxe4: the knight on f6 simply takes your pawn for free.",
      "Nc3": "Blocks the c-pawn. Our London keeps the c-pawn free to go to c3 or c4."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6": {
      "Bd3": "Against a King's Indian setup the bishop on d3 is a target: ...e5 and ...e4 would kick it with tempo. Prepare a retreat for the f4-bishop with h3 first, and the f1-bishop goes to e2.",
      "c4": "Playable, but first h3 is important: without it, ...Nh5 or ...e5 can harass your f4-bishop and it has no safe retreat on h2.",
      "Nc3": "Blocks your c-pawn. Against the King's Indian setup you want c3 or c4 available."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O": {
      "Bd3": "On d3 the bishop gets hit by ...e5–e4 with tempo. Be2 is the right square against a King's Indian setup.",
      "Bc4": "On c4 the bishop bites on granite and can be harassed by ...Nb6 or ...d5. Be2 is solid and safe."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4 e5": {
      "dxe5": "This releases the tension and helps Black: after ...dxe5 the pawn attacks your bishop again (and if Nxe5 Nxe5 Bxe5, ...Qxe5 or ...Bxe5 regains everything). That's exactly why Black played ...Qe8.",
      "Bxe5": "You lose a piece: ...dxe5 and you only got a pawn for your bishop.",
      "Bg5": "The bishop leaves its diagonal and can be hit by ...h6. On h2 it keeps pressure on e5."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3": {
      "fxg3": "Recapturing away from the center weakens e3 and your king's position, and your h1-rook stays shut in. hxg3 keeps the pawns compact and opens the h-file for the rook."
    },
    "d4 Nf6 Bf4 c5 e3 cxd4": {
      "Qxd4": "...Nc6 attacks your queen with tempo, and you'll have to move it again while Black develops. Recapture with the pawn: exd4."
    }
  },
  "alts": {
    "d4 d5 Bf4 Nf6": {
      "Nf3": "A normal London move order too — e3 and Nf3 often swap. We prefer e3 first because it's the one move you play in every line: it supports d4 right away (so a quick ...c5 is less annoying) and opens the diagonal for the f1-bishop. Playing the always-useful move first never commits you to anything."
    },
    "d4 d5 Bf4 Nf6 e3 e6": {
      "Bd3": "A normal London move, but Nf3 first is more useful right now: Black's next idea is ...Bd6, aiming at your h2-pawn and offering to trade bishops. The knight on f3 guards h2 and e5 before that happens, and it's a move you'll play in every line anyway.",
      "c3": "c3 is a standard London move, but it isn't urgent yet: Black hasn't played ...c5, so d4 is not under pressure. Use the tempo to develop a piece instead — Nf3 covers e5 and h2 (ready for ...Bd6) and brings you closer to castling. Play c3 when ...c5 actually arrives."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O": {
      "Nbd2": "A good move — many games play it here. We prefer Bd3 first because the bishop's best square is already clear (the b1–h7 diagonal, aiming at Black's castled king) and it lets you castle next move. The knight's job (supporting e4 or Ne5) only matters later, so it can wait."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3 Nc6": {
      "O-O": "Castling is fine, but Nbd2 first completes your development. Black has no threat against your king, so castling can wait one move, while the knight needs to be on d2 before any plan (e4 break, Ne5) can start."
    },
    "d4 d5 Bf4 c5": {
      "c3": "Solid, but e3 is more useful first: it supports d4 a second time and frees the f1-bishop, while c3 only becomes necessary once Black adds more pressure (...Nc6). And if Black takes ...cxd4, with e3 played you can recapture exd4 and keep your c-pawn flexible."
    },
    "d4 d5 Bf4 c5 e3 Nc6": {
      "Nf3": "Playable, but it allows ...Qb6, hitting b2 while d4 is attacked by both the c5-pawn and the knight — holding everything becomes awkward. c3 first holds d4 and opens the d1–a4 diagonal, so ...Qb6 can be met calmly with Qb3."
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6": {
      "Nf3": "It usually transposes, but here Black hasn't played ...e6, so his light-squared bishop is still free: after Nf3, ...Bg4 pins the knight to your queen. With Nd2 first you wait to see where that bishop goes, and the knight already supports a future e4.",
      "Bd3": "A normal London move, but Black's c8-bishop is still free and could challenge yours with ...Bg4 or ...Bf5. Nd2 first is a move you always need (it supports e4 and keeps the c-pawn free) and it lets you place the bishops once Black has shown his setup."
    },
    "d4 d5 Bf4 Nf6 e3 Bf5": {
      "Nf3": "Playable, but it lets Black keep his best piece. If you delay, Black follows with ...e6 and ...Bd6 and gets an ideal setup with both bishops outside his pawn chain. Bd3 now forces the issue: Black must trade (giving up control of the light squares) or retreat.",
      "c4": "A good, aggressive move (attacking d5, with Qb3 ideas against b7), but it changes the pawn structure into Queen's Gambit positions with different plans. Bd3 keeps the London structure you know and still fights Black's best piece."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6": {
      "Be2": "It often transposes, but h3 first is more precise: right now Black could play ...Nh5, attacking your f4-bishop, and without h3 the bishop has no safe h2 retreat — Black would win the bishop pair. h3 also prevents ...Bg4 pinning your knight."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7": {
      "c4": "Also good, but castling first gets your king safe before the center opens. After c4, Black's ...e5 can quickly open lines (...exd4 exd4) while your king would still be on e1."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8": {
      "Bh2": "A very typical move too. We play c4 first because it uses the tempo to grab queenside space; the bishop only needs to retreat once ...e5 actually attacks it, and then Bh2 comes without losing anything."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4 e5": {
      "Bg3": "Playable, but on g3 the bishop can be hit by ...Nh5 and traded for a knight, giving Black the bishop pair. On h2 nothing can reach it — that's exactly why you played h3 earlier."
    },
    "d4 d5 Bf4 c5 e3 Qb6": {
      "c4": "Also good: it hits d5 too. But Nc3 hits d5 AND prepares Nb5 with the Nc7+ threat, so Black has more problems to solve, and ...Qxb2 becomes very risky."
    },
    "d4 d5 Bf4 c5 e3 Qb6 Nc3 e6": {
      "Nf3": "Solid, but it lets Black off the hook. Nb5 creates the immediate threat Nc7+ and forces Black's knight to the rim (…Na6)."
    },
    "d4 d5 Bf4 c5 e3 Qb6 Nc3 Qxb2": {
      "Bb5+": "Also very strong: Black's best reply is to move his king, since blocking with ...Bd7 or ...Nc6 is even worse. But Nxd5 is simpler: it wins back the pawn, threatens Nc7+ and keeps all your pieces aimed at Black's king.",
      "Nb5": "Also good: it threatens Nc7+ and Rb1. But Nxd5 does the same job and wins back the central pawn as well."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 Bxg3 hxg3 Nbd7": {
      "c4": "A good move (Stockfish's favourite): it hits d5 and grabs space. Bd3 keeps the familiar London setup and adds a second piece aimed at h7 next to your h-file rook. Both are fine; Bd3 is easier to play.",
      "Nc3": "Playable, and it prepares e4. But the knight blocks your c-pawn, and against ...c5 you want c3 to hold d4. Bd3 develops toward h7 and keeps the London structure."
    },
    "d4 Nf6 Bf4 c5": {
      "d5": "A good, sharper move (Stockfish's choice): it grabs space and keeps Black cramped. e3 keeps the familiar London structure and is fully sound. Learn d5 later, once the London setup feels automatic."
    },
    "d4 Nf6 Bf4 c5 e3 cxd4 exd4 d5 Nf3 Nc6": {
      "Nbd2": "Also good, and it supports Ne5 or Nf1–e3 later. c3 first is the safer habit: it holds d4 for good and prepares Qb3 against ...Qb6."
    }
  },
  "quizzes": {
    "d4 d5 Bf4": {
      "q": "Why does the bishop come out to f4 BEFORE you play e3?",
      "options": [
        {
          "text": "Because after e3 it would be locked behind its own pawn",
          "ok": true,
          "why": "e3 closes the c1–h6 diagonal. Getting the bishop out first is the whole point of the London: it ends up active on f4 instead of buried on c1, as in the Colle System."
        },
        {
          "text": "To attack the c7-pawn right away",
          "why": "Bxc7 isn't a real threat (the queen guards c7). The bishop is aimed at e5 and the b8–h2 diagonal for the long term, not at a quick pawn grab."
        },
        {
          "text": "To prepare queenside castling",
          "why": "London players almost always castle short. Freeing c1 is a side effect; the real reason is keeping the bishop outside the e3–d4 pawn chain."
        }
      ]
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3": {
      "q": "Black offered a bishop trade with ...Bd6. Why Bg3 instead of taking on d6?",
      "options": [
        {
          "text": "To keep your best minor piece; if ...Bxg3, hxg3 opens the h-file for your rook",
          "ok": true,
          "why": "The f4-bishop is the soul of the London. On g3 it stays on the same diagonal, and if Black takes, the h-pawn recaptures and your rook gets a half-open file toward h7."
        },
        {
          "text": "Because Bxd6 loses a pawn",
          "why": "Bxd6 Qxd6 loses nothing: it's just a trade. The problem is that it gives away your good bishop and brings Black's queen to an active square for free."
        },
        {
          "text": "To attack Black's king along the g-file",
          "why": "Nothing is on the g-file to attack. g3 is simply where the bishop stays on its b8–h2 diagonal, protected by the h- and f-pawns."
        }
      ]
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3 Nc6 Nbd2": {
      "q": "Your setup is complete. What's the typical plan from here?",
      "options": [
        {
          "text": "Castle, then Ne5 with f4 or Qf3 on the kingside, or Qe2 and the e3–e4 break",
          "ok": true,
          "why": "Your pieces point at the kingside (Bd3 at h7) and the center (Nd2 and the queen behind e4). Those are the two London plans."
        },
        {
          "text": "Push b4–b5 on the queenside right away",
          "why": "Black is strongest on the queenside (…c5, …Nc6, …Qb6 ideas). b4 just creates targets, for example ...cxb4 cxb4 Nxb4. Your play is in the center and on the kingside."
        },
        {
          "text": "Trade everything with dxc5 and Bxd6",
          "why": "Giving up d4 and your dark-squared bishop removes the two pillars of the London. Black would get a free, comfortable position with a strong center."
        }
      ]
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3": {
      "q": "Black's queen attacks b2. Why defend with Qb3 rather than b3?",
      "options": [
        {
          "text": "Qb3 guards b2 with a piece and offers a trade; b3 would leave holes on the queenside",
          "ok": true,
          "why": "After ...Qxb3 axb3 your rook even gets the a-file. A pawn move like b3 creates lasting weaknesses (c3, the light squares) that Black can aim at with ...Nb4, ...Bf5 or ...Ba3."
        },
        {
          "text": "Because Qb3 attacks b7 and wins a pawn",
          "why": "Qxb7 isn't possible: Black's queen on b6 defends b7. Qb3's job is to defend b2 actively and offer the trade."
        },
        {
          "text": "To prepare queenside castling",
          "why": "White castles short in the London almost every time. Qb3 is about b2 and the queen trade, not about castling."
        }
      ]
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2": {
      "q": "Black has played ...c4. What's your plan now?",
      "options": [
        {
          "text": "The pressure on d4 is gone: develop (Nd2, Ngf3, Be2) and prepare e3–e4",
          "ok": true,
          "why": "With ...c4 Black released the tension on d4, so your center is safe. The queen on c2 already supports e4, and b3 can later hit the c4-pawn."
        },
        {
          "text": "Storm the kingside with g4 and h4",
          "why": "Your king is still in the center and your pieces aren't developed. The target is the center, which Black just gave up."
        },
        {
          "text": "Bring the queen back to d1 to keep things solid",
          "why": "On c2 the queen guards b2 along the 2nd rank and supports e4. It's better there than on d1."
        }
      ]
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2": {
      "q": "Why Nd2 here, before Ngf3?",
      "options": [
        {
          "text": "Black's c8-bishop is still free: after Nf3, ...Bg4 would pin the knight",
          "ok": true,
          "why": "Black hasn't played ...e6 yet, so ...Bg4 is possible. Nd2 is a move you need anyway (it supports e4) and lets you see where that bishop goes first."
        },
        {
          "text": "Because Nf3 would block your f-pawn",
          "why": "The f-pawn isn't part of the plan right now. The issue is the pin ...Bg4."
        },
        {
          "text": "To defend the b2-pawn",
          "why": "A knight on d2 doesn't defend b2 at all. Against ...Qb6 your answer is Qb3."
        }
      ]
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6 Nd2 e6 Ngf3 Bd6 Bg3 O-O Bd3": {
      "q": "Look at the board. Which position is this?",
      "options": [
        {
          "text": "The Classical line, reached by a different move order",
          "ok": true,
          "why": "It's exactly the position from 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 Bd6 5.Bg3 O-O 6.Bd3 c5 7.c3 Nc6 8.Nbd2. Recognising transpositions saves memorising: same plans (castle, then Ne5 + f4 or Qe2 + e4)."
        },
        {
          "text": "A Colle System",
          "why": "In the Colle the c1-bishop stays behind e3. Here it got out first, to f4 and then g3, which makes it a London."
        },
        {
          "text": "A brand-new position to memorise separately",
          "why": "That's exactly what spotting a transposition saves you: it's the Classical line, with the same plans."
        }
      ]
    },
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3": {
      "q": "Why challenge Black's f5-bishop with Bd3 right away?",
      "options": [
        {
          "text": "It's Black's good bishop: trading it weakens his light squares, and after ...Bxd3 Qxd3 your queen supports e4",
          "ok": true,
          "why": "Black's bishop got outside his pawn chain, so it's worth trading off. Your queen lands on d3 with no loss of time and backs up the e3–e4 break."
        },
        {
          "text": "To win the f5-bishop, which is undefended",
          "why": "It is undefended right now, but Black simply trades or defends with ...e6. Bd3 is a positional move, not a trap (though the trap line shows some players forget to react!)."
        },
        {
          "text": "To prepare Bxh7",
          "why": "There's nothing to attack on h7 yet: Black hasn't castled. The point is the bishop trade and the light squares."
        }
      ]
    },
    "d4 d5 Bf4 Nf6 e3 Bf5 Bd3 Bxd3 Qxd3 e6 Nf3 c5 c3 Nc6 Nbd2": {
      "q": "What's your main plan in this line?",
      "options": [
        {
          "text": "Castle, then push e3–e4, backed by the queen on d3 and the knight on d2",
          "ok": true,
          "why": "Black traded his light-squared bishop, so he's weaker on e4 and the light squares. e4 is the break your pieces were placed for."
        },
        {
          "text": "A queenside attack with b4",
          "why": "Black's pieces (…c5, …Nc6, …Qb6 ideas) are strongest on the queenside. Your pieces point to the center."
        },
        {
          "text": "g4–g5 to chase the f6-knight",
          "why": "With your king still in the center, a pawn storm is premature. The light squares in the center (e4) are where you gain from Black's missing bishop."
        }
      ]
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3": {
      "q": "Why play h3 now?",
      "options": [
        {
          "text": "To give the f4-bishop a retreat on h2, so ...Nh5 or ...e5 can't harass it",
          "ok": true,
          "why": "Against a King's Indian setup Black's ideas are ...Nh5 (hunting your bishop) and ...e5 with tempo. h3 prepares Bh2, and it also stops ...Ng4 and ...Bg4."
        },
        {
          "text": "To prepare g4 and a kingside attack",
          "why": "Against a fianchettoed setup g4 only weakens your own king. h3 is prophylaxis for the bishop."
        },
        {
          "text": "To stop Black's bishop from coming to h6",
          "why": "Black's bishop is on g7 and ...Bh6 isn't his plan. What h3 stops is ...Nh5, ...Ng4 and ...Bg4."
        }
      ]
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4 e5 Bh2": {
      "q": "Black played ...e5 and your bishop is safe on h2. What now?",
      "options": [
        {
          "text": "Keep the tension: Nc3 and Qc2, or b4–b5; if ...e4, the knight goes to d2",
          "ok": true,
          "why": "Holding the tension keeps Black's g7-bishop blocked and your options open. If Black pushes ...e4, Nd2 (and later f3) attacks the e4-pawn."
        },
        {
          "text": "Take dxe5 at once",
          "why": "Releasing the tension helps Black: after dxe5 dxe5 his e5-pawn is solid and the g7-bishop wakes up. And with his queen on e8 there's no queen trade either."
        },
        {
          "text": "Push d5 to close the center",
          "why": "d5 gives Black the e5-square and a free ...f5 kingside attack, exactly what King's Indian players want."
        }
      ]
    }
  }
});
