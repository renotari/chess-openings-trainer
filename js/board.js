// Minimal interactive chessboard: click-to-move and drag-and-drop, arrows and square marks.
(function () {
  const FILES = 'abcdefgh';

  class Board {
    constructor(el, opts) {
      this.el = el;
      this.opts = opts; // { pieceUrl(p), canDrag(sq), targets(sq) -> [sq], onMove(from, to) }
      this.orientation = 'w';
      this.position = {}; // sq -> 'wN'
      this.lastMove = null;
      this.marks = {}; // sq -> class
      this.arrows = [];
      this.selected = null;
      this.drag = null;
      this.interactive = true;

      el.classList.add('board');
      this.grid = document.createElement('div');
      this.grid.className = 'board-grid';
      el.appendChild(this.grid);
      this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svg.setAttribute('viewBox', '0 0 100 100');
      this.svg.classList.add('board-arrows');
      el.appendChild(this.svg);

      this.squares = {};
      for (let i = 0; i < 64; i++) {
        const sq = document.createElement('div');
        sq.className = 'sq';
        this.grid.appendChild(sq);
      }
      el.addEventListener('pointerdown', (e) => this._down(e));
      window.addEventListener('pointermove', (e) => this._move(e));
      window.addEventListener('pointerup', (e) => this._up(e));
      this.render();
    }

    setPosition(chess) {
      this.position = {};
      const b = chess.board();
      for (let r = 0; r < 8; r++) {
        for (let f = 0; f < 8; f++) {
          const p = b[r][f];
          if (p) this.position[FILES[f] + (8 - r)] = p.color + p.type.toUpperCase();
        }
      }
      this.render();
    }

    setOrientation(c) { this.orientation = c; this.render(); }
    setLastMove(m) { this.lastMove = m; this.render(); }
    setMarks(m) { this.marks = m || {}; this.render(); }
    setArrows(a) { this.arrows = a || []; this.renderArrows(); }
    setInteractive(v) { this.interactive = v; if (!v) this.selected = null; this.render(); }

    // index 0 is the top-left square from the viewer's perspective
    squareAt(i) {
      const row = Math.floor(i / 8), col = i % 8;
      return this.orientation === 'w'
        ? FILES[col] + (8 - row)
        : FILES[7 - col] + (row + 1);
    }

    coords(sq) {
      const f = FILES.indexOf(sq[0]), r = +sq[1] - 1;
      return this.orientation === 'w' ? { x: f, y: 7 - r } : { x: 7 - f, y: r };
    }

    render() {
      const targets = this.selected ? this.opts.targets(this.selected) : [];
      const kids = this.grid.children;
      for (let i = 0; i < 64; i++) {
        const el = kids[i];
        const sq = this.squareAt(i);
        const f = FILES.indexOf(sq[0]), r = +sq[1];
        const cls = ['sq', (f + r) % 2 === 0 ? 'light' : 'dark'];
        if (this.lastMove && (this.lastMove.from === sq || this.lastMove.to === sq)) cls.push('last');
        if (this.selected === sq) cls.push('selected');
        if (this.marks[sq]) cls.push('mark-' + this.marks[sq]);
        const piece = this.position[sq];
        if (targets.includes(sq)) cls.push(piece ? 'target-capture' : 'target');
        el.className = cls.join(' ');
        el.dataset.sq = sq;

        let html = '';
        if (piece && !(this.drag && this.drag.from === sq && this.drag.moved)) {
          html += `<img class="piece" draggable="false" src="${this.opts.pieceUrl(piece)}" alt="${piece}">`;
        }
        const row = Math.floor(i / 8), col = i % 8;
        if (col === 0) html += `<span class="coord rank">${sq[1]}</span>`;
        if (row === 7) html += `<span class="coord file">${sq[0]}</span>`;
        el.innerHTML = html;
      }
      this.renderArrows();
    }

    renderArrows() {
      const parts = ['<defs>'];
      const colors = new Set(this.arrows.map((a) => a.color || 'green'));
      for (const c of colors) {
        parts.push(`<marker id="ah-${c}" class="arrow-${c}" markerWidth="3" markerHeight="3" refX="1.4" refY="1.5" orient="auto"><path d="M0,0 L3,1.5 L0,3 z"/></marker>`);
      }
      parts.push('</defs>');
      for (const a of this.arrows) {
        const c = a.color || 'green';
        const p1 = this.coords(a.from), p2 = this.coords(a.to);
        const x1 = p1.x * 12.5 + 6.25, y1 = p1.y * 12.5 + 6.25;
        let x2 = p2.x * 12.5 + 6.25, y2 = p2.y * 12.5 + 6.25;
        const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
        x2 -= (dx / len) * 4; y2 -= (dy / len) * 4; // stop short so the head lands on the square center
        parts.push(`<line class="arrow-${c}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="2.2" stroke-linecap="round" marker-end="url(#ah-${c})"/>`);
      }
      this.svg.innerHTML = parts.join('');
    }

    _sqFromEvent(e) {
      const rect = this.grid.getBoundingClientRect();
      const col = Math.floor(((e.clientX - rect.left) / rect.width) * 8);
      const row = Math.floor(((e.clientY - rect.top) / rect.height) * 8);
      if (col < 0 || col > 7 || row < 0 || row > 7) return null;
      return this.squareAt(row * 8 + col);
    }

    _down(e) {
      if (!this.interactive || e.button > 0) return;
      const sq = this._sqFromEvent(e);
      if (!sq) return;
      e.preventDefault();
      if (this.selected && this.selected !== sq && this.opts.targets(this.selected).includes(sq)) {
        const from = this.selected;
        this.selected = null;
        this.render();
        this.opts.onMove(from, sq);
        return;
      }
      if (this.position[sq] && this.opts.canDrag(sq)) {
        const wasSelected = this.selected === sq;
        this.selected = sq;
        const size = this.grid.getBoundingClientRect().width / 8;
        const ghost = document.createElement('img');
        ghost.src = this.opts.pieceUrl(this.position[sq]);
        ghost.className = 'drag-ghost';
        ghost.style.width = ghost.style.height = size + 'px';
        this.drag = { from: sq, ghost, size, moved: false, wasSelected, x0: e.clientX, y0: e.clientY };
        this.render();
      } else {
        this.selected = null;
        this.render();
      }
    }

    _move(e) {
      const d = this.drag;
      if (!d) return;
      if (!d.moved && Math.hypot(e.clientX - d.x0, e.clientY - d.y0) < 4) return;
      if (!d.moved) {
        d.moved = true;
        document.body.appendChild(d.ghost);
        this.render();
      }
      d.ghost.style.left = e.clientX - d.size / 2 + 'px';
      d.ghost.style.top = e.clientY - d.size / 2 + 'px';
    }

    _up(e) {
      const d = this.drag;
      if (!d) return;
      this.drag = null;
      d.ghost.remove();
      const sq = this._sqFromEvent(e);
      if (d.moved) {
        if (sq && sq !== d.from && this.opts.targets(d.from).includes(sq)) {
          this.selected = null;
          this.render();
          this.opts.onMove(d.from, sq);
          return;
        }
        this.render();
      } else if (d.wasSelected) {
        // second click on the same piece deselects it
        this.selected = null;
        this.render();
      }
    }
  }

  window.Board = Board;
})();
