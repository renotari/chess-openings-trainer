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
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4 e5 Bh2": "Retreat to h2 — this is why you played h3! The bishop stays on the b8–h2 diagonal, keeps watching e5, and can no longer be hit by ...Nh5 or pawns."
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
    }
  },
  "alts": {
    "d4 d5 Bf4 Nf6": {
      "Nf3": "Also a normal London move order — e3 and Nf3 can be swapped. Our repertoire plays e3 here to support d4 first."
    },
    "d4 d5 Bf4 Nf6 e3 e6": {
      "Bd3": "Playable, but Nf3 first is more flexible and covers e5. Our repertoire plays Nf3.",
      "c3": "Fine London move too. Our repertoire develops the knight first with Nf3."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O": {
      "Nbd2": "A good move — many games play Nbd2 here. Our repertoire puts the bishop on d3 first."
    },
    "d4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O Bd3 c5 c3 Nc6": {
      "O-O": "Castling is fine too, but our repertoire brings the knight to d2 first to complete development."
    },
    "d4 d5 Bf4 c5": {
      "c3": "Also playable and solid. Our repertoire plays e3 first."
    },
    "d4 d5 Bf4 c5 e3 Nc6": {
      "Nf3": "Playable, but after ...Qb6 the b2-pawn is attacked while d4 is under pressure. Our repertoire plays c3 first to hold d4 and open the queen's diagonal."
    },
    "d4 d5 Bf4 c5 e3 Nc6 c3 Nf6": {
      "Nf3": "Fine — it transposes. Our repertoire plays Nd2 first, keeping Qb3 ideas ready.",
      "Bd3": "A normal London move. Our repertoire plays Nd2 first."
    },
    "d4 d5 Bf4 Nf6 e3 Bf5": {
      "Nf3": "Playable, but Bd3 immediately challenges Black's best piece. Our repertoire plays Bd3.",
      "c4": "A good, aggressive move (attacking d5, with Qb3 ideas), but it leads to Queen's Gambit-type positions. Our repertoire stays with Bd3."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6": {
      "Be2": "Also fine — it usually transposes after h3. Our repertoire plays h3 first to give the bishop the h2 retreat."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7": {
      "c4": "Also good. Our repertoire castles first."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8": {
      "Bh2": "Also a very typical move here (pre-emptive retreat). Our repertoire plays c4 first."
    },
    "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2 Nbd7 O-O Qe8 c4 e5": {
      "Bg3": "Playable, but on g3 the bishop can be hit by ...Nh5. That's why you played h3: Bh2."
    }
  }
});
