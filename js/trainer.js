(function () {
  const REPS = window.REPERTOIRES || [];
  const STORE_KEY = 'opening-trainer.v1';
  const MAX_BOX = 5;
  const OPP_DELAY = 550;
  const UNDO_DELAY = 1100;

  // ---------- persistence ----------
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  const store = loadStore();
  store.settings = Object.assign({ opening: REPS[0] && REPS[0].id, mode: 'learn', lineChoice: {} }, store.settings);
  store.stats = store.stats || {};
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* private mode: progress just isn't kept */ }
  }
  function lineStats(repId, lineId) {
    store.stats[repId] = store.stats[repId] || {};
    return (store.stats[repId][lineId] = store.stats[repId][lineId] || { box: 0, runs: 0, clean: 0 });
  }

  // ---------- repertoire trees ----------
  function buildTree(rep) {
    const root = { path: '', children: {}, lines: new Set(rep.lines.map((l) => l.id)) };
    for (const line of rep.lines) {
      const chess = new Chess();
      let node = root;
      for (const token of line.moves.trim().split(/\s+/)) {
        const m = chess.move(token);
        if (!m) { console.error(`[${rep.id}/${line.id}] illegal move "${token}"`); break; }
        if (!node.children[m.san]) {
          node.children[m.san] = {
            path: node.path ? node.path + ' ' + m.san : m.san,
            san: m.san, from: m.from, to: m.to, children: {}, lines: new Set(), parent: node,
          };
        }
        node = node.children[m.san];
        node.lines.add(line.id);
      }
      node.endOf = (node.endOf || []).concat(line.id);
    }
    return root;
  }
  const TREES = {};
  for (const rep of REPS) TREES[rep.id] = buildTree(rep);

  // ---------- state ----------
  let rep, tree, game, node, run, lastMove = null;
  let timers = [];
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const board = new Board($('board'), {
    pieceUrl: (p) => `vendor/pieces/${p}.svg`,
    canDrag: (sq) => {
      const p = game.get(sq);
      return isUserTurn() && !run.done && !run.busy && p && p.color === rep.side;
    },
    targets: (sq) => game.moves({ square: sq, verbose: true }).map((m) => m.to),
    onMove: onUserMove,
  });

  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function isUserTurn() { return game.turn() === rep.side; }
  function sideName(c) { return c === 'w' ? 'White' : 'Black'; }
  function lineById(id) { return rep.lines.find((l) => l.id === id); }
  function note(path) { return (rep.notes && rep.notes[path]) || ''; }
  function moveLabel(fen, san) {
    const [, turn, , , , num] = fen.split(' ');
    return turn === 'w' ? `${num}.${san}` : `${num}...${san}`;
  }

  // ---------- line selection (Leitner-style spaced repetition) ----------
  function pickLine() {
    const choice = store.settings.lineChoice[rep.id] || 'smart';
    if (choice !== 'smart' && lineById(choice)) return choice;
    const last = store.settings.lastLine && store.settings.lastLine[rep.id];
    let pool = rep.lines.filter((l) => rep.lines.length === 1 || l.id !== last);
    const weights = pool.map((l) => {
      const s = lineStats(rep.id, l.id);
      return Math.pow(2, MAX_BOX - s.box) * (s.runs === 0 ? 2 : 1);
    });
    let r = Math.random() * weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < pool.length; i++) {
      r -= weights[i];
      if (r <= 0) return pool[i].id;
    }
    return pool[pool.length - 1].id;
  }

  function chooseOpponentMove() {
    const kids = Object.values(node.children);
    const onTarget = kids.find((k) => k.lines.has(run.target));
    if (onTarget) return onTarget;
    // left the target line (e.g. transposition): pick weighted by how much the reachable lines need practice
    const weights = kids.map((k) => [...k.lines].reduce((a, id) => a + Math.pow(2, MAX_BOX - lineStats(rep.id, id).box), 0));
    let r = Math.random() * weights.reduce((a, b) => a + b, 0);
    for (let i = 0; i < kids.length; i++) { r -= weights[i]; if (r <= 0) return kids[i]; }
    return kids[kids.length - 1];
  }

  // ---------- flow ----------
  function selectOpening(id) {
    rep = REPS.find((r) => r.id === id) || REPS[0];
    tree = TREES[rep.id];
    store.settings.opening = rep.id;
    save();
    board.setOrientation(rep.side);
    renderOpenings();
    renderLineSelect();
    renderLines();
    $('intro').textContent = rep.intro;
    startLine();
  }

  function startLine(lineId) {
    clearTimers();
    game = new Chess();
    node = tree;
    lastMove = null;
    run = { target: lineId || pickLine(), mistakes: 0, hints: 0, revealed: false, revealedAny: false, wrongHere: 0, erroredAt: new Set(), done: false, busy: false };
    store.settings.lastLine = store.settings.lastLine || {};
    store.settings.lastLine[rep.id] = run.target;
    save();
    $('feed').innerHTML = '';
    board.setPosition(game);
    board.setLastMove(null);
    board.setMarks({});
    board.setArrows([]);
    renderMoves();
    const line = lineById(run.target);
    if (store.settings.mode === 'learn') {
      addFeed('info', `Learning: ${line.name}`, 'The book move is shown with a green arrow and explained before you play it. Switch to Practice to test yourself without hints.');
    } else {
      addFeed('info', `Practice: ${rep.name}, as ${sideName(rep.side)}`, 'Play the repertoire moves from memory. The line is revealed at the end.');
    }
    if (isUserTurn()) promptUser();
    else { setStatus('Opponent is thinking…'); later(opponentMove, OPP_DELAY); }
  }

  function promptUser() {
    run.revealed = false;
    run.hintShown = false;
    run.wrongHere = 0;
    board.setArrows([]);
    board.setMarks({});
    setStatus(`Your move (${sideName(rep.side)})`, 'turn');
    if (store.settings.mode === 'learn') reveal(false);
  }

  function expected() { return Object.values(node.children); }

  // fen: the position the user has to move in (the board may still show a wrong move being taken back)
  function reveal(countIt, fen = game.fen()) {
    const kids = expected();
    if (!kids.length) return;
    if (countIt && !run.revealed) run.revealedAny = true;
    run.revealed = true;
    board.setArrows(kids.map((k) => ({ from: k.from, to: k.to, color: 'green' })));
    const k = kids[0];
    addFeed('book', `Book move: ${moveLabel(fen, k.san)}`, note(k.path));
  }

  function onUserMove(from, to) {
    if (!isUserTurn() || run.done || run.busy) return;
    const fenBefore = game.fen();
    const m = game.move({ from, to, promotion: 'q' });
    if (!m) return;
    const child = node.children[m.san];
    if (child) return acceptUserMove(child, fenBefore, m);

    // Not the repertoire move: show it, explain, take it back.
    run.busy = true;
    board.setPosition(game);
    board.setLastMove({ from, to });
    board.setArrows([]);
    const label = moveLabel(fenBefore, m.san);
    const alt = rep.alts && rep.alts[node.path] && rep.alts[node.path][m.san];
    if (alt) {
      board.setMarks({ [to]: 'alt' });
      addFeed('alt', `${label} is playable, but not our line`, alt + '<p class="muted">Try again with the repertoire move.</p>', true);
    } else {
      board.setMarks({ [to]: 'bad' });
      if (!run.erroredAt.has(node.path)) { run.erroredAt.add(node.path); run.mistakes++; }
      run.wrongHere++;
      const specific = rep.mistakes && rep.mistakes[node.path] && rep.mistakes[node.path][m.san];
      // Hand-written explanations already cover the tactics; the automatic checks are the fallback.
      const auto = specific ? [] : MoveAnalysis.explain(fenBefore, m.san);
      let body = '';
      if (specific) body += `<p>${esc(specific)}</p>`;
      if (auto.length) body += '<ul>' + auto.map((r) => `<li>${esc(r)}</li>`).join('') + '</ul>';
      const mustReveal = (!specific && !auto.length) || run.wrongHere >= 2;
      if (!specific && !auto.length) {
        body += '<p>It doesn\'t lose material immediately, but it isn\'t part of this opening\'s plan. Here is what the repertoire wants and why:</p>';
      }
      if (!mustReveal && !run.revealed) body += '<p class="muted">Try again — or press <b>Show answer</b>.</p>';
      addFeed('mistake', `✗ ${label} is a mistake`, body, true);
      if (mustReveal && !run.revealed) reveal(true, fenBefore);
    }
    later(() => {
      game.undo();
      board.setPosition(game);
      board.setLastMove(lastMove);
      board.setMarks({});
      if (run.revealed) board.setArrows(expected().map((k) => ({ from: k.from, to: k.to, color: 'green' })));
      run.busy = false;
    }, UNDO_DELAY);
  }

  function acceptUserMove(child, fenBefore, m) {
    node = child;
    lastMove = { from: m.from, to: m.to };
    board.setPosition(game);
    board.setLastMove(lastMove);
    board.setMarks({});
    board.setArrows([]);
    renderMoves();
    const label = moveLabel(fenBefore, m.san);
    if (run.revealed) addFeed('good', `✓ ${label}`, '');
    else addFeed('good', `✓ ${label}`, note(node.path));
    if (!Object.keys(node.children).length) return finishLine();
    setStatus('Opponent is thinking…');
    later(opponentMove, OPP_DELAY);
  }

  function opponentMove() {
    const k = chooseOpponentMove();
    const fenBefore = game.fen();
    const m = game.move(k.san);
    node = k;
    lastMove = { from: m.from, to: m.to };
    board.setPosition(game);
    board.setLastMove(lastMove);
    renderMoves();
    addFeed('opp', `${sideName(fenBefore.split(' ')[1])}: ${moveLabel(fenBefore, m.san)}`, note(node.path));
    if (!Object.keys(node.children).length) return finishLine();
    promptUser();
  }

  function finishLine() {
    run.done = true;
    board.setArrows([]);
    const ids = node.endOf || [run.target];
    const lineId = ids.includes(run.target) ? run.target : ids[0];
    const line = lineById(lineId);
    const s = lineStats(rep.id, lineId);
    const before = s.box;
    let result;
    if (store.settings.mode === 'practice') {
      s.runs++;
      const clean = run.mistakes === 0 && run.hints === 0 && !run.revealedAny;
      if (clean) {
        s.clean++;
        s.box = Math.min(MAX_BOX, s.box + 1);
        result = `Perfect run! Mastery ${before} → ${s.box} / ${MAX_BOX}. This line will come up less often.`;
      } else {
        s.box = Math.max(0, s.box - 2);
        const parts = [];
        if (run.mistakes) parts.push(`${run.mistakes} mistake${run.mistakes > 1 ? 's' : ''}`);
        if (run.hints || run.revealedAny) parts.push('used hints');
        result = `${parts.join(', ')}. Mastery ${before} → ${s.box} / ${MAX_BOX}. This line will come back soon.`;
      }
    } else {
      s.seen = (s.seen || 0) + 1;
      result = 'Learn mode doesn\'t change mastery. When it feels familiar, switch to Practice and play it from memory.';
    }
    save();
    renderLines();
    renderOpenings();
    setStatus('Line complete', 'done');
    addFeed('done', `🏁 ${line.name}`, `<p><b>What now?</b> ${esc(line.plan || '')}</p><p class="muted">${esc(result)}</p>` +
      '<div class="feed-actions"><button class="primary" data-act="next">Next line</button><button data-act="restart">Repeat this line</button></div>', true);
  }

  // ---------- rendering ----------
  function setStatus(text, kind) {
    const el = $('status');
    el.textContent = text;
    el.className = 'status' + (kind ? ' ' + kind : '');
  }

  function addFeed(kind, title, body, bodyIsHtml) {
    const el = document.createElement('div');
    el.className = 'entry ' + kind;
    const bodyHtml = !body ? '' : bodyIsHtml ? body : `<p>${esc(body)}</p>`;
    el.innerHTML = `<div class="entry-title">${esc(title)}</div>${bodyHtml}`;
    const feed = $('feed');
    feed.appendChild(el);
    feed.scrollTop = feed.scrollHeight;
  }

  function renderMoves() {
    const h = game.history();
    let html = '';
    for (let i = 0; i < h.length; i += 2) {
      html += `<span class="pair"><span class="mv-num">${i / 2 + 1}.</span> ${esc(h[i])} ${h[i + 1] ? esc(h[i + 1]) : ''}</span>`;
    }
    $('moves').innerHTML = html || '<span class="muted">No moves yet</span>';
  }

  function mastery(r) {
    if (!r.lines.length) return 0;
    const total = r.lines.reduce((a, l) => a + lineStats(r.id, l.id).box, 0);
    return Math.round((100 * total) / (r.lines.length * MAX_BOX));
  }

  function renderOpenings() {
    $('openings').innerHTML = REPS.map((r) => `
      <button class="opening ${r.id === rep.id ? 'active' : ''}" data-id="${r.id}">
        <span class="op-name">${esc(r.name)}</span>
        <span class="op-meta">as ${sideName(r.side)} · ${r.lines.length} lines · ${mastery(r)}% mastered</span>
        <span class="op-bar"><span style="width:${mastery(r)}%"></span></span>
      </button>`).join('');
  }

  function renderLineSelect() {
    const cur = store.settings.lineChoice[rep.id] || 'smart';
    $('line-select').innerHTML = `<option value="smart">Smart pick (weakest lines first)</option>` +
      rep.lines.map((l) => `<option value="${l.id}" ${l.id === cur ? 'selected' : ''}>${esc(l.name)}</option>`).join('');
    $('line-select').value = cur;
  }

  function renderLines() {
    $('lines').innerHTML = rep.lines.map((l) => {
      const s = lineStats(rep.id, l.id);
      const dots = Array.from({ length: MAX_BOX }, (_, i) => `<i class="${i < s.box ? 'on' : ''}"></i>`).join('');
      return `<div class="line-row">
        <div class="line-info"><div class="line-name">${esc(l.name)}</div>
        <div class="line-meta"><span class="dots" title="Mastery ${s.box}/${MAX_BOX}">${dots}</span>${s.runs ? `${s.clean}/${s.runs} clean` : 'not practised yet'}</div></div>
        <button data-line="${l.id}">Train</button></div>`;
    }).join('');
  }

  function renderMode() {
    for (const b of document.querySelectorAll('#mode button')) {
      b.classList.toggle('active', b.dataset.mode === store.settings.mode);
    }
  }

  // ---------- controls ----------
  function hint() {
    if (run.done || !isUserTurn() || run.busy) return;
    const kids = expected();
    if (!kids.length) return;
    if (!run.revealed && !run.hintShown) {
      run.hints++;
      run.hintShown = true;
      board.setMarks({ [kids[0].from]: 'hint' });
      const p = game.get(kids[0].from);
      addFeed('hint', 'Hint', `Move your ${{ p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' }[p.type]} on ${kids[0].from}.`);
    } else if (!run.revealed) {
      reveal(true);
    }
  }

  $('openings').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-id]');
    if (b && b.dataset.id !== rep.id) selectOpening(b.dataset.id);
  });
  $('mode').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-mode]');
    if (!b || b.dataset.mode === store.settings.mode) return;
    store.settings.mode = b.dataset.mode;
    save();
    renderMode();
    startLine(run.target);
  });
  $('line-select').addEventListener('change', (e) => {
    store.settings.lineChoice[rep.id] = e.target.value;
    save();
    startLine();
  });
  $('lines').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-line]');
    if (b) startLine(b.dataset.line);
  });
  $('feed').addEventListener('click', (e) => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    if (b.dataset.act === 'next') startLine();
    else startLine(run.target);
  });
  $('btn-hint').addEventListener('click', hint);
  $('btn-answer').addEventListener('click', () => {
    if (!run.done && isUserTurn() && !run.revealed && !run.busy) reveal(true);
  });
  $('btn-restart').addEventListener('click', () => startLine(run.target));
  $('btn-next').addEventListener('click', () => startLine());
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, select, textarea')) return;
    if (e.key === 'h') hint();
    else if (e.key === 'n') startLine();
    else if (e.key === 'r') startLine(run.target);
  });

  if (!REPS.length) {
    document.body.innerHTML = '<p style="padding:2rem">No repertoires loaded — check the data/ scripts.</p>';
    return;
  }
  renderMode();
  selectOpening(store.settings.opening);
})();
