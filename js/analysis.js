// Automatic "why is this move bad?" checks, used when the repertoire has no hand-written explanation
// (and as extra detail when it has one). Pure functions over chess.js positions.
(function () {
  const VALUE = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
  const NAME = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
  const COLOR = { w: 'White', b: 'Black' };

  function withTurn(fen, turn) {
    const parts = fen.split(' ');
    parts[1] = turn;
    parts[3] = '-';
    return parts.join(' ');
  }

  // Pieces of `victim` color that the side to move can win: either undefended, or attacked by something cheaper.
  function losses(chess, victim) {
    const out = {};
    for (const m of chess.moves({ verbose: true })) {
      if (!m.captured) continue;
      const vVal = VALUE[m.captured];
      const aVal = VALUE[m.piece];
      const probe = new Chess(chess.fen());
      probe.move(m);
      const defended = probe.moves({ verbose: true }).some((r) => r.to === m.to);
      const loss = defended ? vVal - aVal : vVal;
      if (loss <= 0) continue;
      if (!out[m.to] || out[m.to].loss < loss) {
        out[m.to] = { sq: m.to, piece: m.captured, loss, san: m.san, defended, attacker: m.piece };
      }
    }
    return out;
  }

  function bishopMobility(chess, sq) {
    const files = 'abcdefgh';
    let f = files.indexOf(sq[0]), r = +sq[1], n = 0;
    for (const [df, dr] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      let x = f + df, y = r + dr;
      while (x >= 0 && x < 8 && y >= 1 && y <= 8) {
        if (chess.get(files[x] + y)) break;
        n++;
        x += df; y += dr;
      }
    }
    return n;
  }

  function moveNumber(fen) { return +fen.split(' ')[5]; }

  // Returns a list of explanation strings for `san` played in `fenBefore`.
  function explain(fenBefore, san) {
    const before = new Chess(fenBefore);
    const me = before.turn();
    const them = me === 'w' ? 'b' : 'w';
    const after = new Chess(fenBefore);
    const mv = after.move(san);
    if (!mv) return [];
    const reasons = [];
    const opp = COLOR[them];

    // 1. Mate in one
    for (const reply of after.moves({ verbose: true })) {
      const probe = new Chess(after.fen());
      probe.move(reply);
      if (probe.in_checkmate()) {
        reasons.push(`It allows checkmate in one: ${reply.san}!`);
        return reasons;
      }
    }

    // 2. Material: pieces left hanging or attacked by cheaper pieces
    const now = losses(after, me);
    let baseline = {};
    const flipped = new Chess();
    if (flipped.load(withTurn(fenBefore, them))) baseline = losses(flipped, me);
    const gained = mv.captured ? VALUE[mv.captured] : 0;
    let worst = null;
    for (const sq in now) {
      const l = now[sq];
      const wasAlready = baseline[sq] && baseline[sq].loss >= l.loss && sq !== mv.to;
      if (wasAlready) continue;
      if (!worst || l.loss > worst.loss) worst = l;
    }
    if (worst && worst.loss - (worst.sq === mv.to ? gained : 0) > 0) {
      const what = `your ${NAME[worst.piece]} on ${worst.sq}`;
      const reply = them === 'b' ? '...' + worst.san : worst.san;
      if (worst.sq === mv.to && gained) {
        reasons.push(`You win a ${NAME[mv.captured]}, but ${opp} answers ${reply} and takes ${what} — a net loss of material.`);
      } else if (!worst.defended) {
        reasons.push(`It leaves ${what} undefended: ${opp} simply takes it with ${reply}.`);
      } else {
        reasons.push(`${what[0].toUpperCase() + what.slice(1)} can be captured by a ${NAME[worst.attacker]} (${reply}) — you lose material even after recapturing.`);
      }
    }

    // 3. Opening principles
    const n = moveNumber(fenBefore);
    const homeRank = me === 'w' ? '1' : '8';
    if (n <= 12) {
      if (mv.piece === 'k' && !mv.flags.includes('k') && !mv.flags.includes('q')) {
        reasons.push('Moving the king in the opening throws away your right to castle, leaving the king stuck in the center.');
      }
      if (mv.piece === 'q' && n <= 6 && !mv.captured) {
        reasons.push(`Bringing the queen out this early lets ${opp} develop pieces with tempo by attacking it.`);
      }
      if ((mv.piece === 'n' || mv.piece === 'b') && mv.from[1] !== homeRank && !mv.captured) {
        const home = me === 'w' ? ['b1', 'g1', 'c1', 'f1'] : ['b8', 'g8', 'c8', 'f8'];
        const undeveloped = home.filter((s) => {
          const p = before.get(s);
          return p && p.color === me && (p.type === 'n' || p.type === 'b');
        });
        if (undeveloped.length >= 2) {
          reasons.push(`It moves the same piece twice while ${undeveloped.length} of your minor pieces are still at home — in the opening every tempo should bring a new piece into play.`);
        }
      }
      if (mv.piece === 'n' && (mv.to[0] === 'a' || mv.to[0] === 'h')) {
        reasons.push('A knight on the rim is dim: from the edge it controls only half as many squares and doesn\'t fight for the center.');
      }
      if (mv.piece === 'p' && !mv.captured) {
        for (const s of me === 'w' ? ['c1', 'f1'] : ['c8', 'f8']) {
          const p = before.get(s);
          if (p && p.color === me && p.type === 'b' && bishopMobility(before, s) > 0 && bishopMobility(after, s) === 0) {
            reasons.push(`It locks your bishop on ${s} inside your own pawn chain — it has no squares left to develop to.`);
          }
        }
        if (mv.from[0] === 'f' && n <= 10) {
          reasons.push('Moving the f-pawn early weakens the diagonal toward your king and takes the best square away from your knight.');
        } else if ('abgh'.includes(mv.from[0]) && n <= 6) {
          reasons.push('A flank pawn move doesn\'t develop a piece or fight for the center — it costs a tempo in the opening.');
        }
      }
    }
    return reasons;
  }

  window.MoveAnalysis = { explain };
})();
