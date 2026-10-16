(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const escHTML = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const stripTags = s => String(s ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  /* ================= ICONS ================= */
  const ICONS = {
    home: '<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
    tree: '<circle cx="12" cy="5" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 7v4M6 16v-2.5h12V16M12 11v5"/>',
    atom: '<ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>',
    pi: '<path d="M4 7h16M8.5 7v12M15 7v9a3 3 0 0 0 3 3"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
    leaf: '<path d="M5 19c0-9 6-15 15-15 0 9-6 15-15 15z"/><path d="M5 19l9-9"/>',
    book: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
    mechanics: '<path d="M3 20h18"/><path d="M3 20C7 6 15 6 21 20" stroke-dasharray="2 2.6"/><circle cx="12" cy="9.5" r="2" fill="currentColor"/>',
    'oscillations-and-waves': '<path d="M2 12C5 3 8 3 11 12S17 21 20 12"/><path d="M20 12h2"/>',
    'thermal-physics': '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 9v6"/><circle cx="12" cy="17" r="1.6" fill="currentColor"/>',
    'electricity-and-magnetism': '<path d="M13 2L5 13h6l-1 9 8-11h-6z"/>',
    optics: '<path d="M12 3c2 3 2 15 0 18-2-3-2-15 0-18z"/><path d="M2 8h10l10 4M2 16h10l10-4"/>',
    'modern-physics': '<circle cx="12" cy="12" r="2.2" fill="currentColor"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(-30 12 12)"/><circle cx="20.2" cy="7.25" r="1.2" fill="currentColor"/>',
    'tools-of-the-trade': '<rect x="2" y="8" width="20" height="8" rx="1.5"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4"/>',
    number: '<path d="M9 4L7 20M17 4l-2 16M4 9h17M3 15h17"/>',
    algebra: '<text x="3.5" y="18" font-size="15" font-style="italic" font-family="Literata, Georgia, serif" fill="currentColor" stroke="none">x</text><text x="13.5" y="11" font-size="9" font-family="Literata, Georgia, serif" fill="currentColor" stroke="none">2</text>',
    geometry: '<circle cx="12" cy="12" r="9"/><path d="M12 3L4.2 16.5h15.6z"/>',
    trigonometry: '<path d="M3 20h17V6z"/><path d="M8 20A5 5 0 0 0 6.86 16.82"/><path d="M17 20v-3h3"/>',
    calculus: '<path d="M3 20Q12 20 20 4"/><path d="M6 21.5L17.6 10.5"/><circle cx="11.75" cy="16" r="1.4" fill="currentColor"/>',
    'data-and-chance': '<rect x="4" y="12" width="3.5" height="8"/><rect x="10.2" y="6" width="3.5" height="14"/><rect x="16.4" y="9" width="3.5" height="11"/>',
    'olympiad-toolkit': '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    review: '<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v5h-5"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7"/><circle cx="12" cy="16.8" r=".9" fill="currentColor"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    shuffle: '<path d="M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4M18 4l3 3-3 3M18 14l3 3-3 3"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M3 18l6-5 4 3 3-2 5 4"/>',
    pen: '<path d="M15 4l5 5L9 20H4v-5z"/><path d="M13 6l5 5"/>',
    lesson: '<path d="M4 4h11l5 5v11H4z"/><path d="M15 4v5h5M8 13h8M8 17h5"/>',
    chapter: '<path d="M5 3h12a2 2 0 0 1 2 2v16l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2z"/>',
    chev: '<path d="M9 5l7 7-7 7"/>'
  };
  const ico = (name, cls = '') => `<svg viewBox="0 0 24 24" class="ic ${cls}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.lesson}</svg>`;
  const fillIcons = (root = document) => root.querySelectorAll('[data-icon]').forEach(el => { if (!el.firstElementChild) el.innerHTML = ico(el.dataset.icon); });
  const SUBJ_ICON = { phy: 'atom', mat: 'pi', chem: 'flask', bio: 'leaf', eng: 'book' };
  const SHORT = { 'Oscillations and waves': 'Waves', 'Thermal physics': 'Thermal', 'Electricity and magnetism': 'E & M', 'Modern physics': 'Modern', 'Tools of the trade': 'Tools', 'Data and chance': 'Data', 'Olympiad toolkit': 'Olympiad', 'Trigonometry': 'Trig' };
  const RING = { phy: 'Dashed ring: energy conservation runs through every pillar.', mat: 'Dashed ring: proof from definitions links every pillar.' };

  /* ================= LEVELS ================= */
  const LEVELS = {
    'ncert-intext': ['NCERT in-text', 'Questions inside the chapter, word for word', 'ncert'],
    'ncert-ex': ['NCERT exercises', 'End-of-chapter exercises, word for word', 'ncert'],
    found: ['Foundation', 'Check the idea itself', 'found'],
    board: ['Board', 'CBSE Class 10 and 12 style', 'board'],
    main: ['JEE Main', 'One or two steps beyond NCERT', 'main'],
    adv: ['JEE Advanced', 'Several ideas combined, Irodov style', 'adv'],
    oly: ['Olympiad', 'NSEP, INPhO and beyond', 'oly']
  };
  const LVL_ORDER = Object.keys(LEVELS);
  const DEPTH = [[1, 'Class 10'], [2, 'Class 12 · JEE Main'], [3, 'JEE Adv. · Irodov'], [4, 'Olympiad']];
  const LV_SHORT = { 1: 'C10', 2: 'C12', 3: 'Adv', 4: 'Oly' };

  /* ================= DATA ================= */
  let TREE = null, NCERT = [], SEARCH = [];
  const lessonCache = {}, problemCache = {};
  const fileOf = key => key.replace('/', '--');
  async function fetchJSON(rel) { const r = await fetch(rel, { cache: 'no-cache' }); if (!r.ok) throw new Error(rel + ' ' + r.status); return r.json(); }
  const subjOf = id => TREE.subjects.find(s => s.id === id);
  function leafByKey(key) {
    const [sid, lid] = key.split('/'); const s = subjOf(sid); if (!s || !s.pillars) return null;
    for (let pi = 0; pi < s.pillars.length; pi++) for (let bi = 0; bi < s.pillars[pi].branches.length; bi++) {
      const li = s.pillars[pi].branches[bi].leaves.findIndex(l => l.id === lid);
      if (li >= 0) return { s, p: s.pillars[pi], b: s.pillars[pi].branches[bi], l: s.pillars[pi].branches[bi].leaves[li], pi, bi, li };
    }
    return null;
  }
  async function getLesson(key) { return lessonCache[key] ||= await fetchJSON(`data/lessons/${fileOf(key)}.json`); }
  async function getProblems(key) {
    if (problemCache[key]) return problemCache[key];
    const L = leafByKey(key); if (!L || !L.l.problems) return (problemCache[key] = []);
    return (problemCache[key] = await fetchJSON(`data/problems/${fileOf(key)}.json`));
  }
  const liveLeaves = () => TREE.subjects.flatMap(s => (s.pillars || []).flatMap(p => p.branches.flatMap(b => b.leaves.filter(l => l.live || l.problems).map(l => ({ key: `${s.id}/${l.id}`, l, s })))));

  /* ================= PROGRESS (db per viewer, browser copy as fallback) ================= */
  const LS = 'la-progress-v1';
  const today = () => Math.floor(Date.now() / 86400000);
  let PG = { v: 1, updated: 0, problems: {}, cards: {}, notes: {}, lessons: {}, last: null };
  try { const raw = localStorage.getItem(LS); if (raw) PG = Object.assign(PG, JSON.parse(raw)); } catch (e) {}
  let dbDoc = null, saveTimer = null, saving = false, pendingSave = false;
  function touch() {
    PG.updated = Date.now();
    try { localStorage.setItem(LS, JSON.stringify(PG)); } catch (e) {}
    clearTimeout(saveTimer); saveTimer = setTimeout(pushRemote, 1500);
    updateBadge();
  }
  async function pushRemote() {
    if (!dbDoc) return;
    if (saving) { pendingSave = true; return; }
    saving = true;
    try { await dbDoc.set(JSON.parse(JSON.stringify(PG))); setSync(true); }
    catch (e) { setSync(false, e && e.code); }
    saving = false;
    if (pendingSave) { pendingSave = false; pushRemote(); }
  }
  function setSync(ok, code) {
    const el = $('sync-state'); if (!el) return;
    el.innerHTML = ok ? '<b>●</b> Progress saved to your account, on every device.' : (code ? 'Progress saved in this browser only.' : 'Progress saved in this browser.');
  }
  (async function connectDb() {
    try {
      if (!window.claude || typeof window.claude.use !== 'function') return;
      const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      if (!db || !user) return;
      const uid = await user.id(); if (!uid) return;
      dbDoc = db.doc('data/users/' + uid + '/progress');
      const snap = await dbDoc.get();
      const remote = snap.exists ? snap.data() : null;
      if (remote && (remote.updated || 0) > (PG.updated || 0)) { PG = Object.assign({ problems: {}, cards: {}, notes: {}, lessons: {} }, JSON.parse(JSON.stringify(remote))); try { localStorage.setItem(LS, JSON.stringify(PG)); } catch (e) {} rerender(); }
      else if (PG.updated) await pushRemote();
      setSync(true);
    } catch (e) { setSync(false, 'x'); }
  })();

  const pk = (leaf, id) => `${leaf}#${id}`;
  const INTERVAL = { missed: 1, shaky: 3, got: 14 };
  function rateProblem(leaf, id, r) {
    const prev = PG.problems[pk(leaf, id)];
    const iv = r === 'got' ? Math.max(INTERVAL.got, prev && prev.r === 'got' ? Math.round((prev.iv || 14) * 2.2) : 0) : INTERVAL[r];
    PG.problems[pk(leaf, id)] = { r, iv, due: today() + iv, at: Date.now() };
    touch();
  }
  function rateCard(id, grade) {
    const c = PG.cards[id]; if (!c) return;
    const iv = c.iv || 0;
    const next = grade === 1 ? 0 : grade === 2 ? Math.max(1, Math.round(iv * 1.2)) : grade === 3 ? Math.max(2, Math.round(iv * 2.5) || 2) : Math.max(4, Math.round(iv * 3.5) || 4);
    Object.assign(c, { iv: next, due: today() + next, seen: (c.seen || 0) + 1 });
    touch();
  }
  const dueCards = () => Object.entries(PG.cards).filter(([, c]) => c.due <= today());
  const dueProblems = () => Object.entries(PG.problems).filter(([, p]) => p.due <= today());
  function updateBadge() { const n = dueCards().length + dueProblems().length; const b = $('rev-badge'); if (b) { b.textContent = n; b.hidden = n === 0; } }
  function mastery(key) {
    const L = leafByKey(key); if (!L) return 0;
    const n = L.l.problems || 0;
    const got = Object.entries(PG.problems).filter(([k, v]) => k.startsWith(key + '#') && v.r === 'got').length;
    if (n && got / n >= .9) return 1;
    if (n && got / n >= .5) return .75;
    if (got) return .5;
    if (PG.lessons[key]) return .25;
    return 0;
  }
  const branchMastery = b => { const ls = b.leaves; return ls.reduce((s, l, i) => s + mastery(`${b._sid}/${l.id}`), 0) / ls.length; };
  const pillarMastery = p => { const bs = p.branches; return bs.reduce((s, b) => s + branchMastery(b), 0) / bs.length; };

  /* ================= STATE + ROUTER ================= */
  const S = { subj: 'phy', pillar: null, branch: null, leaf: null, mode: 'subject', cls: 10, ltab: 'learn', depth: 4, lessonKey: null,
    set: [], setName: '', from: 'practice', idx: 0, hintN: {}, solShown: {}, checked: {}, revQueue: [], revIdx: 0, revShown: false };
  const NAV_OF = { lesson: 'learn', play: 'practice' };
  const RENDER = {};
  let pendingSection = null;
  function parseHash() {
    const h = (location.hash || '#home').slice(1);
    if (h.startsWith('lesson~')) { const [, sid, lid] = h.split('~'); return { v: 'lesson', key: `${sid}/${lid}` }; }
    return { v: ['home', 'learn', 'practice', 'play', 'review', 'lesson'].includes(h) ? h : 'home' };
  }
  function route() {
    if (!TREE) return;
    let { v, key } = parseHash();
    if (v === 'play' && !S.set.length) v = 'practice';
    if (v === 'lesson') {
      if (key && key !== S.lessonKey && !S.tabSet) S.ltab = 'learn';
      S.tabSet = false;
      if (key) S.lessonKey = key; if (!S.lessonKey) v = 'learn';
    }
    document.querySelectorAll('section[data-view]').forEach(s => s.classList.toggle('on', s.dataset.view === v));
    const nav = NAV_OF[v] || v;
    document.querySelectorAll('.nav').forEach(a => a.dataset.nav === nav ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
    RENDER[v]();
    if (!pendingSection) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  const go = v => { if (location.hash === '#' + v) route(); else location.hash = v; };
  const openLesson = (key, tab = 'learn', section = null) => { S.ltab = tab; S.tabSet = true; pendingSection = section; go('lesson~' + key.replace('/', '~')); };
  function rerender() { if (TREE) route(); }

  /* ================= HOME ================= */
  $('today-date').textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
  RENDER.home = () => {
    const live = liveLeaves().filter(x => x.l.live);
    const lastKey = PG.last && leafByKey(PG.last) && leafByKey(PG.last).l.live ? PG.last : (live[0] && live[0].key);
    const C = $('continue');
    if (lastKey) {
      const L = leafByKey(lastKey), n = L.l.problems || 0;
      const got = Object.entries(PG.problems).filter(([k, v]) => k.startsWith(lastKey + '#') && v.r === 'got').length;
      const idx = L.b.leaves.findIndex(l => l.id === L.l.id), next = L.b.leaves[idx + 1];
      C.innerHTML = `<div class="panel hero s-${L.s.id} tinted"><div>
        <div style="display:flex;gap:12px;align-items:center;margin-bottom:4px"><span class="tile sm">${ico(L.p.id)}</span><div class="eyebrow">${PG.last ? 'Continue' : 'Start here'} · ${escHTML(L.s.name)} · ${escHTML(L.p.name)} · ${escHTML(L.b.name)}</div></div>
        <h2>${escHTML(L.l.name)}</h2>
        <div class="stats"><span><b>Problems</b> ${got} of ${n} solved</span>${next ? `<span><b>Next</b> ${escHTML(next.name)}</span>` : ''}</div>
        <div class="meter"><i style="width:${n ? Math.round(got / n * 100) : 0}%"></i></div></div>
        <div class="acts"><button class="btn" data-open="${lastKey}">Open lesson</button><button class="btn ghost" data-open="${lastKey}" data-tab="practice">Practise it</button></div></div>`;
    } else C.innerHTML = '';
    const dc = dueCards().length, dp = dueProblems().length;
    $('due-title').textContent = dc + dp ? `${dc + dp} due for review` : 'Nothing due yet';
    $('due-text').textContent = dc + dp ? `${dc} cards and ${dp} problems, timed to come back just before you forget them.` : 'Add key ideas from a lesson, or rate problems, and they come back here at growing intervals.';
    $('live-count').textContent = `${live.length} lessons live`;
    $('subj-list').innerHTML = TREE.subjects.map(s => {
      const allLeaves = (s.pillars || []).flatMap(p => p.branches.flatMap(b => b.leaves.map(l => `${s.id}/${l.id}`)));
      const pct = allLeaves.length ? Math.round(allLeaves.reduce((a, k) => a + mastery(k), 0) / allLeaves.length * 100) : 0;
      const nLive = allLeaves.filter(k => leafByKey(k).l.live).length;
      return `<button class="scard s-${s.id}" data-open-subj="${s.id}"><span class="tile">${ico(SUBJ_ICON[s.id])}</span>
        <span><span class="nm">${escHTML(s.name)}</span><span class="nx" style="display:block">${s.pillars ? `${allLeaves.length} ideas mapped · ${nLive} lessons live` : 'Tree coming in a later phase'}</span></span>
        <span class="row2"><span class="meter"><i style="width:${pct}%"></i></span>${pct}%</span></button>`;
    }).join('');
  };
  $('continue').addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openLesson(b.dataset.open, b.dataset.tab || 'learn'); });
  $('subj-list').addEventListener('click', e => {
    const b = e.target.closest('[data-open-subj]'); if (!b) return;
    Object.assign(S, { subj: b.dataset.openSubj, pillar: null, branch: null, leaf: null, mode: 'subject' }); go('learn');
  });

  /* ---------- search ---------- */
  const GROUPS = ['Lessons', 'Topics', 'Problems', 'NCERT chapters'];
  const SUGGEST = ['focal length', 'power of a lens', 'mirage', 'critical angle', 'mirror formula', 'Fermat', 'projectile', 'quadratic'];
  $('suggest').insertAdjacentHTML('beforeend', SUGGEST.map(t => `<button data-sug="${escHTML(t)}">${t}</button>`).join(''));
  $('suggest').addEventListener('click', e => { const b = e.target.closest('[data-sug]'); if (b) { $('q').value = b.dataset.sug; runSearch(); $('q').focus(); } });
  const hl = (t, q) => { const i = t.toLowerCase().indexOf(q); return i < 0 ? escHTML(t) : escHTML(t.slice(0, i)) + '<mark>' + escHTML(t.slice(i, i + q.length)) + '</mark>' + escHTML(t.slice(i + q.length)); };
  let HITS = [];
  function runSearch() {
    const raw = $('q').value.trim(), q = raw.toLowerCase(), r = $('results');
    if (q.length < 2) { r.hidden = true; HITS = []; return; }
    const words = q.split(/\s+/);
    const scored = SEARCH.map(x => {
      const t = x.title.toLowerCase(), all = (x.title + ' ' + x.path + ' ' + x.text).toLowerCase();
      if (!words.every(w => all.includes(w))) return null;
      return { x, s: (t.includes(q) ? 10 : 0) + (t.startsWith(q) ? 5 : 0) + words.filter(w => t.includes(w)).length * 2 + (x.g === 'Lessons' ? 1 : 0) };
    }).filter(Boolean).sort((a, b) => b.s - a.s);
    HITS = [];
    const html = GROUPS.map(g => { const list = scored.filter(h => h.x.g === g).slice(0, g === 'Topics' ? 6 : 5); if (!list.length) return '';
      return `<div class="sgroup"><h4>${g}</h4>${list.map(h => { HITS.push(h.x); const iconName = h.x.icon || SUBJ_ICON[h.x.c];
        return `<button class="shit s-${h.x.c}" data-hit="${HITS.length - 1}"><span class="tile sm">${ico(iconName)}</span><span style="min-width:0"><span class="t">${hl(h.x.title, q)}</span><span class="p">${escHTML(h.x.path)}</span></span><span class="src">open →</span></button>`; }).join('')}</div>`; }).join('');
    r.hidden = false;
    r.innerHTML = html || `<div class="sempty">Nothing matches “${escHTML(raw)}” yet. The archive grows chapter by chapter; try a broader word such as “light” or “motion”.</div>`;
  }
  async function goHit(x) {
    const g = x.go;
    if (g.problem) { const ps = await getProblems(g.problem); return startSet(ps, leafByKey(g.problem).l.name, g.index); }
    if (g.lesson) return openLesson(g.lesson, 'learn', g.section || null);
    if (g.ncert) { Object.assign(S, { mode: 'class', cls: +g.ncert }); return go('learn'); }
    Object.assign(S, { subj: g.subj, pillar: g.pillar ?? null, branch: g.branch ?? null, leaf: g.leaf ?? null, mode: 'subject' }); go('learn');
  }
  $('q').addEventListener('input', runSearch);
  $('q').addEventListener('keydown', e => { if (e.key === 'Enter' && HITS[0]) { e.preventDefault(); goHit(HITS[0]); } if (e.key === 'Escape') { $('q').value = ''; runSearch(); } });
  $('results').addEventListener('click', e => { const b = e.target.closest('[data-hit]'); if (b) goHit(HITS[+b.dataset.hit]); });
  document.addEventListener('keydown', e => {
    if (e.key !== '/' || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
    e.preventDefault(); if (parseHash().v !== 'home') go('home'); setTimeout(() => $('q').focus(), 0);
  });

  /* ================= LEARN ================= */
  const lvlTag = l => `<span class="lvl ${l === 'JEE' ? 'jee' : l === 'OLY' ? 'oly' : ''}">${l === 'OLY' ? 'Olympiad' : l === 'JEE' ? 'JEE' : 'Class ' + String(l).slice(1)}</span>`;
  RENDER.learn = () => {
    document.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', b.dataset.mode === S.mode));
    $('by-subject').hidden = S.mode !== 'subject'; $('by-class').hidden = S.mode !== 'class'; $('subj-seg').hidden = S.mode !== 'subject';
    $('subj-seg').innerHTML = TREE.subjects.map(s => `<button aria-pressed="${S.subj === s.id}" data-subj="${s.id}"><span class="dot s-${s.id}"></span>${escHTML(s.name === 'Mathematics' ? 'Maths' : s.name)}</button>`).join('');
    if (S.mode === 'subject') renderCols(); else renderClasses();
  };
  function mapSVG(s) {
    const T = s.pillars, cx = 190, cy = 150, R = 108, n = T.length;
    const pts = T.map((p, i) => { const a = (-90 + i * 360 / n) * Math.PI / 180; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
    const spokes = pts.map(([x, y]) => `<line class="spoke" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`).join('');
    const nodes = T.map((p, i) => { const [x, y] = pts[i], below = y > cy + 5;
      return `<g class="node" data-pillar="${i}" tabindex="0" role="button" aria-label="${escHTML(p.name)}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="21"/>
        <svg class="glyphs" x="${(x - 11).toFixed(1)}" y="${(y - 11).toFixed(1)}" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.id] || ''}</svg>
        <text class="nl" x="${x.toFixed(1)}" y="${(below ? y + 35 : y - 28).toFixed(1)}" text-anchor="middle">${escHTML(SHORT[p.name] || p.name)}</text></g>`; }).join('');
    return `<div class="map"><svg viewBox="0 0 380 300" role="group" aria-label="Map of ${escHTML(s.name)}"><circle class="ring" cx="${cx}" cy="${cy}" r="${R}"/>${spokes}
      <circle class="hub" cx="${cx}" cy="${cy}" r="34"/><text class="hubt" x="${cx}" y="${cy + 4.5}" text-anchor="middle">${escHTML(s.name === 'Mathematics' ? 'Maths' : s.name)}</text>${nodes}</svg>
      <div class="map-cap">Tap a pillar to open it. ${RING[s.id] || ''}</div></div>`;
  }
  function renderAbout(s, PL, BR) {
    const el = $('about'); el.hidden = false; el.className = 'panel about s-' + s.id;
    let eyebrow, title, what, links = '', right, icn;
    if (!PL) { eyebrow = 'Start here'; title = `What is ${s.name.toLowerCase()}?`; what = s.whatHtml; links = s.linksHtml; icn = SUBJ_ICON[s.id];
      right = `<h4>Why these ${s.pillars.length} pillars</h4><p class="lede" style="margin:0 0 8px;font-size:13px">${escHTML(s.split || '')}</p>${mapSVG(s)}`; }
    else if (!BR) { eyebrow = `Pillar of ${s.name}`; title = `What is ${PL.name.toLowerCase()}?`; what = PL.whatHtml; icn = PL.id;
      right = `<h4>Its ${PL.branches.length} branches</h4><p class="lede" style="margin:0 0 8px;font-size:13px">${escHTML(PL.split || '')}</p><ul class="parts">${PL.branches.map((b, i) => `<li><button data-branch="${i}"><b>${escHTML(b.name)}</b><span>${escHTML(b.tag || '')}</span></button></li>`).join('')}</ul>`; }
    else { eyebrow = `Branch of ${PL.name}`; title = BR.name; what = BR.whatHtml; icn = PL.id;
      right = `<h4>Read the ${BR.leaves.length} leaves in this order</h4><ul class="parts">${BR.leaves.map((l, i) => `<li><button data-leaf="${i}"><b>${i + 1}. ${escHTML(l.name)}${l.live ? ' →' : ''}</b><span>${l.from === 'OLY' ? 'Olympiad' : l.from === 'JEE' ? 'JEE' : 'from Class ' + String(l.from).slice(1)}${l.live ? ` · lesson and ${l.problems || 0} problems` : ' · not written yet'}</span></button></li>`).join('')}</ul>`; }
    el.innerHTML = `<div><div class="eyebrow">${eyebrow}</div><div class="about-title"><span class="tile lg">${ico(icn)}</span><h2>${escHTML(title)}</h2></div><div class="what">${what || '<p>Not written yet.</p>'}</div>${links ? `<div class="links">${links}</div>` : ''}</div><div>${right}</div>`;
  }
  function renderCols() {
    const s = subjOf(S.subj), cr = $('crumbs'), cols = $('cols');
    if (!s.pillars) { $('about').hidden = true; cr.innerHTML = `<span class="cur">${escHTML(s.name)}</span>`;
      cols.innerHTML = `<div class="col active" style="grid-column:1/-1"><div class="col-empty">The ${escHTML(s.name)} tree comes in a later phase. It will follow the same pattern as Physics and Maths.</div></div>`; return; }
    s.pillars.forEach(p => p.branches.forEach(b => { b._sid = s.id; }));
    const PL = S.pillar != null ? s.pillars[S.pillar] : null, BR = PL && S.branch != null ? PL.branches[S.branch] : null;
    let c = PL ? `<button data-crumb="root">${escHTML(s.name)}</button>` : `<span class="cur">${escHTML(s.name)}</span>`;
    if (PL) c += `<span class="sep">›</span>` + (BR ? `<button data-crumb="pillar">${escHTML(PL.name)}</button>` : `<span class="cur">${escHTML(PL.name)}</span>`);
    if (BR) c += `<span class="sep">›</span><span class="cur">${escHTML(BR.name)}</span>`;
    cr.innerHTML = c;
    renderAbout(s, PL, BR);
    const deepest = BR ? 2 : PL ? 1 : 0;
    const col1 = `<div class="col ${deepest === 0 ? 'active' : ''}"><div class="col-h eyebrow">Pillars</div><ul class="col-list">${s.pillars.map((p, i) => `<li><button class="row pil s-${s.id}" data-pillar="${i}" aria-selected="${S.pillar === i}"><span class="tile sm">${ico(p.id)}</span><span><span class="t">${escHTML(p.name)}</span><span class="s">${escHTML(p.tag || '')}</span></span><span class="meter"><i style="width:${Math.round(pillarMastery(p) * 100)}%"></i></span>${ico('chev', 'chev')}</button></li>`).join('')}</ul></div>`;
    const col2 = `<div class="col ${deepest === 1 ? 'active' : ''}"><div class="col-h eyebrow">Branches</div>${PL ? `<ul class="col-list">${PL.branches.map((b, i) => `<li><button class="row s-${s.id}" data-branch="${i}" aria-selected="${S.branch === i}"><span><span class="t">${escHTML(b.name)}</span><span class="s">${escHTML(b.tag || '')}</span></span><span class="meter"><i style="width:${Math.round(branchMastery(b) * 100)}%"></i></span>${ico('chev', 'chev')}</button></li>`).join('')}</ul>` : '<div class="col-empty">Choose a pillar.</div>'}</div>`;
    let col3 = '<div class="col-empty">Choose a branch.</div>';
    if (BR) {
      const sel = S.leaf != null ? BR.leaves[S.leaf] : null;
      col3 = `<ul class="col-list">${BR.leaves.map((l, i) => `<li><button class="row leafrow s-${s.id} ${l.live ? 'has' : ''}" data-leaf="${i}" aria-selected="${S.leaf === i}"><i class="glyph" style="--p:${mastery(`${s.id}/${l.id}`)}"></i><span class="t">${escHTML(l.name)}</span>${lvlTag(l.from)}</button></li>`).join('')}</ul>`;
      if (sel) col3 += `<div class="leaf-preview"><h3>${escHTML(sel.name)}</h3>${sel.live
        ? `<p>Lesson from first principles to Olympiad, with ${sel.problems || 0} problems including every NCERT question on it.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-open-lesson="learn">Open lesson</button><button class="btn ghost" data-open-lesson="practice">Practise</button></div>`
        : `<p>This lesson is not written yet.</p>`}</div>`;
    }
    col3 = `<div class="col ${deepest === 2 ? 'active' : ''}"><div class="col-h eyebrow">Leaves · one lesson each</div>${col3}</div>`;
    cols.innerHTML = col1 + col2 + col3;
  }
  function pickNode(t) {
    const s = subjOf(S.subj);
    if (t.dataset.openLesson) return openLesson(`${s.id}/${s.pillars[S.pillar].branches[S.branch].leaves[S.leaf].id}`, t.dataset.openLesson);
    if (t.dataset.pillar != null) { S.pillar = +t.dataset.pillar; S.branch = S.leaf = null; }
    else if (t.dataset.branch != null) { S.branch = +t.dataset.branch; S.leaf = null; }
    else if (t.dataset.leaf != null) {
      S.leaf = +t.dataset.leaf; const l = s.pillars[S.pillar].branches[S.branch].leaves[S.leaf];
      if (l.live && (t.closest('#about') || matchMedia('(max-width: 860px)').matches)) return openLesson(`${s.id}/${l.id}`);
    }
    renderCols();
  }
  $('cols').addEventListener('click', e => { const t = e.target.closest('[data-pillar],[data-branch],[data-leaf],[data-open-lesson]'); if (t) pickNode(t); });
  $('about').addEventListener('click', e => { const t = e.target.closest('[data-pillar],[data-branch],[data-leaf]'); if (t) pickNode(t); });
  $('about').addEventListener('keydown', e => { const n = e.target.closest('.node'); if (n && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pickNode(n); } });
  $('mode-seg').addEventListener('click', e => { const b = e.target.closest('[data-mode]'); if (b) { S.mode = b.dataset.mode; RENDER.learn(); } });
  $('subj-seg').addEventListener('click', e => { const b = e.target.closest('[data-subj]'); if (b) { S.subj = b.dataset.subj; S.pillar = S.branch = S.leaf = null; RENDER.learn(); } });
  $('crumbs').addEventListener('click', e => { const b = e.target.closest('[data-crumb]'); if (!b) return; if (b.dataset.crumb === 'root') S.pillar = S.branch = S.leaf = null; else S.branch = S.leaf = null; renderCols(); });

  function renderClasses() {
    const classes = [6, 7, 8, 9, 10, 11, 12];
    $('class-pills').innerHTML = classes.map(c => `<button aria-pressed="${c === S.cls}" data-c="${c}">Class ${c}<small>${NCERT.some(b => b.class === c) ? 'in progress' : c >= 10 ? 'phase 1' : 'later'}</small></button>`).join('');
    const books = NCERT.filter(b => b.class === S.cls);
    let n = 0;
    $('books').innerHTML = books.length ? books.map(b => `<div class="panel s-${b.subject}"><h3><span>${escHTML(b.name)}</span><span class="eyebrow">${b.chapters.filter(c => !c.restored).length} chapters${b.chapters.some(c => c.restored) ? ` + ${b.chapters.filter(c => c.restored).length} restored` : ''}</span></h3>
      <ol class="chap">${b.chapters.map(ch => `<li class="${ch.restored ? 'restored' : ''}">${ch.live ? `<a class="live" href="#" data-open="${ch.leaves[0]}">${escHTML(ch.title)} →</a>` : `<span>${escHTML(ch.title)}</span>`}<span class="st ${ch.live ? 'live' : ch.restored ? 'restored' : ''}">${ch.live ? 'live' : ch.restored ? 'restored' : 'coming'}</span></li>`).join('')}</ol></div>`).join('')
      : `<div class="panel"><p style="color:var(--muted)">Class ${S.cls} books are added in a later step.</p></div>`;
  }
  $('class-pills').addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (b) { S.cls = +b.dataset.c; renderClasses(); } });
  $('books').addEventListener('click', e => { const a = e.target.closest('[data-open]'); if (a) { e.preventDefault(); openLesson(a.dataset.open); } });

  /* ================= LESSON ================= */
  function coverArt() {
    return `<svg class="cover-art" viewBox="0 0 300 160" aria-hidden="true"><rect class="m2" x="0" y="80" width="300" height="80"/><line class="ln" x1="0" y1="80" x2="300" y2="80"/><polyline class="ray" points="40,0 150,80 200,160"/><line class="ln" x1="77" y1="0" x2="51" y2="35"/><line class="ln" x1="101" y1="18" x2="75" y2="53"/><line class="ln" x1="125" y1="35" x2="100" y2="71"/><line class="ln" x1="181" y1="85" x2="140" y2="109"/><line class="ln" x1="191" y1="102" x2="151" y2="126"/></svg>`;
  }
  RENDER.lesson = async () => {
    const key = S.lessonKey, root = $('lesson-root');
    const L = leafByKey(key);
    if (!L || !L.l.live) { root.innerHTML = `<div class="empty-card panel">This lesson is not written yet.</div>`; return; }
    if (root.dataset.key !== key) {
      root.dataset.key = key; root.innerHTML = '<div class="loading">Loading lesson…</div>';
      const [lesson, probs] = await Promise.all([getLesson(key), getProblems(key)]);
      if (S.lessonKey !== key) return;
      buildLesson(root, L, lesson, probs);
      if (!PG.lessons[key]) PG.lessons[key] = { opened: Date.now() };
      PG.last = key; touch();
    }
    showLessonTab();
    if (pendingSection) { const id = pendingSection; pendingSection = null; S.depth = 4; applyDepth(); setTimeout(() => { const el = $(id); if (el) el.scrollIntoView({ block: 'start' }); }, 40); }
  };
  function buildLesson(root, L, lesson, probs) {
    const key = lesson.key;
    const sections = lesson.sections.map(sec => `<section data-lvl="${sec.lvl}" id="${sec.id}" data-toc="${escHTML(sec.title)}"><h2>${sec.titleHtml} <span class="lv l${sec.lvl}">${escHTML(sec.label)}</span></h2>${sec.html}</section>`).join('');
    const needs = (lesson.builds_on || []).map(b => `<span class="chip">${escHTML(b)}</span>`).join('');
    const ncert = (lesson.ncert || []).map(n => `<span>${escHTML(n)}</span>`).join('<span>·</span>');
    root.innerHTML = `
      <div class="lesson-head s-${L.s.id}">${coverArt()}
        <button class="back" data-back>← ${escHTML(L.s.name)} · ${escHTML(L.p.name)} · ${escHTML(L.b.name)}</button>
        <h1>${escHTML(lesson.title || L.l.name)}</h1>
        <div class="meta"><span><b>NCERT</b></span>${ncert}<span><b>Goes up to</b> ${escHTML(lesson.up_to || 'Olympiad')}</span></div>
      </div>
      <div class="ltabs" role="tablist" id="ltabs">
        <button role="tab" data-ltab="learn">Learn</button>
        <button role="tab" data-ltab="practice">Practice <span class="count">${probs.length}</span></button>
        <button role="tab" data-ltab="books">From books</button>
        <button role="tab" data-ltab="notes">My notes</button>
      </div>
      <div class="lpane s-${L.s.id}" data-lpane="learn">
        <div class="depth"><span>Show depth up to</span><div class="seg" id="depth-seg">${DEPTH.map(([d, n]) => `<button data-depth="${d}">${n}</button>`).join('')}</div></div>
        <div class="read"><div>
          ${needs ? `<div class="needs"><span class="eyebrow" style="margin-right:4px">Builds on</span>${needs}</div>` : ''}
          <div class="prose">${lesson.introHtml}${sections}</div>
          <div class="next-step"><div><b>That's the lesson.</b><span>Now test it: ${probs.length} problems, from NCERT to Olympiad.</span></div><button class="btn" data-ltab-go="practice">Go to practice</button></div>
        </div>
        <aside class="margin">${(lesson.margin || []).map(m => `<div class="mn ${m.kind === 'tip' ? 'tip' : m.kind === 'olympiad' ? 'oly' : ''}"><b>${escHTML(m.title || m.kind)}</b>${m.html}</div>`).join('')}
          <div class="toc-wrap"><div class="eyebrow" style="margin-bottom:6px">On this page</div><nav class="toc" id="toc" aria-label="Sections">${lesson.sections.map(sec => `<button data-to="${sec.id}" data-lvl-toc="${sec.lvl}">${escHTML(sec.title)}<span class="lv l${sec.lvl}">${LV_SHORT[sec.lvl]}</span></button>`).join('')}</nav></div>
        </aside></div>
      </div>
      <div class="lpane" data-lpane="practice" hidden>
        <div class="toolbar"><p class="lede" style="margin:0">Work up the ladder: NCERT first, then each level above it.</p><button class="btn" data-start-lesson>Practise all in order</button></div>
        <div class="ladder" id="ladder"></div>
      </div>
      <div class="lpane" data-lpane="books" hidden>
        <div class="panel" style="max-width:760px"><p class="lede" style="margin:0 0 12px">Where this idea appears in your reference books. Problems from your copies, word for word, join the ladder once the PDFs are shared.</p>
        <ul class="chap" style="counter-reset:none">${(lesson.books || []).map(b => `<li style="grid-template-columns:minmax(0,1fr) auto"><span><b>${escHTML(b.title)}</b> · ${escHTML(b.ref)}</span><span class="st">awaiting PDF</span></li>`).join('')}</ul></div>
      </div>
      <div class="lpane" data-lpane="notes" hidden>
        <div style="max-width:760px"><label for="notes" class="lede" style="display:block;margin:0 0 10px">${escHTML(lesson.notes_prompt || 'Explain this idea as if teaching a Class 8 student.')} Putting it in your own words is one of the strongest ways to remember it.</label>
        <textarea id="notes" placeholder="Start writing…"></textarea><p class="note">Saved with your progress.</p></div>
      </div>`;
    fillIcons(root);
    mountWidgets(root);
    const notes = $('notes'); notes.value = PG.notes[key] || '';
    let nt; notes.addEventListener('input', () => { clearTimeout(nt); nt = setTimeout(() => { PG.notes[key] = notes.value; touch(); }, 800); });
    renderLadder(key, probs);
    applyDepth();
  }
  function showLessonTab() {
    document.querySelectorAll('#ltabs [data-ltab]').forEach(b => b.setAttribute('aria-selected', b.dataset.ltab === S.ltab));
    document.querySelectorAll('[data-lpane]').forEach(p => p.hidden = p.dataset.lpane !== S.ltab);
    if (S.ltab === 'practice') getProblems(S.lessonKey).then(ps => renderLadder(S.lessonKey, ps));
  }
  function applyDepth() {
    document.querySelectorAll('#depth-seg [data-depth]').forEach(b => b.setAttribute('aria-pressed', +b.dataset.depth === S.depth));
    document.querySelectorAll('[data-lpane="learn"] [data-lvl]').forEach(el => el.hidden = +el.dataset.lvl > S.depth);
    document.querySelectorAll('#toc [data-lvl-toc]').forEach(b => b.hidden = +b.dataset.lvlToc > S.depth);
  }
  const stateDot = (leaf, id) => { const r = (PG.problems[pk(leaf, id)] || {}).r; return `<span class="state ${r || ''}">${r === 'got' ? '✓' : r === 'missed' ? '✕' : r === 'shaky' ? '~' : ''}</span>`; };
  function renderLadder(key, probs) {
    const el = $('ladder'); if (!el) return;
    el.innerHTML = LVL_ORDER.map(lv => {
      const ps = probs.map((p, i) => [p, i]).filter(([p]) => p.lvl === lv); if (!ps.length) return '';
      const [name, desc, cls] = LEVELS[lv];
      const done = ps.filter(([p]) => (PG.problems[pk(key, p.id)] || {}).r === 'got').length;
      return `<div class="rung"><div class="rung-h"><span class="tier ${cls}">${name}</span><div><p>${desc}</p></div><span class="src">${done}/${ps.length} solved</span></div>
        <ol>${ps.map(([p, i]) => `<li><button data-open-p="${i}"><span class="num">${p.num || i + 1}</span><span class="preview">${escHTML(p.plain)}</span>${stateDot(key, p.id)}</button></li>`).join('')}</ol></div>`;
    }).join('') || '<div class="empty-card panel">No problems yet.</div>';
  }
  $('lesson-root').addEventListener('click', async e => {
    const t = e.target;
    const tab = t.closest('[data-ltab]'); if (tab) { S.ltab = tab.dataset.ltab; return showLessonTab(); }
    if (t.closest('[data-ltab-go]')) { S.ltab = 'practice'; showLessonTab(); return window.scrollTo(0, 0); }
    const d = t.closest('[data-depth]'); if (d) { S.depth = +d.dataset.depth; return applyDepth(); }
    const to = t.closest('[data-to]'); if (to) return $(to.dataset.to).scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (t.closest('[data-back]')) { const L = leafByKey(S.lessonKey); Object.assign(S, { subj: L.s.id, pillar: L.pi, branch: L.bi, leaf: L.li, mode: 'subject' }); return go('learn'); }
    const qa = t.closest('[data-qa]');
    if (qa) { const box = qa.closest('.qc, .hook'), f = box.querySelector('.qf'), ok = qa.dataset.qa === '1';
      box.querySelectorAll('[data-qa]').forEach(x => x.classList.remove('right', 'wrong')); qa.classList.add(ok ? 'right' : 'wrong'); f.hidden = false; f.innerHTML = ok ? f.dataset.ok : f.dataset.no; return; }
    const ak = t.closest('[data-add-keys]');
    if (ak) { const lesson = await getLesson(S.lessonKey); let n = 0;
      (lesson.cards || []).forEach((c, i) => { const id = `${S.lessonKey}#c${i}`; if (!PG.cards[id]) { PG.cards[id] = { front: c.front, back: c.back, where: lesson.title, c: leafByKey(S.lessonKey).s.id, due: today(), iv: 0 }; n++; } });
      touch(); ak.textContent = n ? `Added ${n} cards to your review queue ✓` : 'Already in your review queue ✓'; ak.disabled = true; return; }
    const op = t.closest('[data-open-p]'); if (op) { const ps = await getProblems(S.lessonKey); return startSet(ps, leafByKey(S.lessonKey).l.name, +op.dataset.openP); }
    if (t.closest('[data-start-lesson]')) { const ps = await getProblems(S.lessonKey); return startSet(ps, leafByKey(S.lessonKey).l.name, 0); }
  });

  /* ================= WIDGETS ================= */
  function mountWidgets(root) {
    root.querySelectorAll('[data-widget]').forEach(el => { const f = WIDGETS[el.dataset.widget]; if (f) f(el, JSON.parse(el.dataset.opts || '{}')); });
  }
  const WIDGETS = {
    'refraction-sim'(el) {
      el.innerHTML = `<div class="sim"><svg viewBox="0 0 360 230" role="img" aria-label="Ray diagram: a light ray bending at the boundary between two media">
        <rect class="m1" x="0" y="0" width="360" height="115"/><rect class="m2" x="0" y="115" width="360" height="115"/>
        <line class="iface" x1="0" y1="115" x2="360" y2="115"/><line class="normal" x1="180" y1="8" x2="180" y2="222"/>
        <path class="arc" data-r="arc1"/><path class="arc" data-r="arc2"/>
        <line class="ray" data-r="refl" x1="180" y1="115" style="stroke-width:2"/><line class="ray" data-r="in" x2="180" y2="115"/><line class="ray" data-r="out" x1="180" y1="115"/>
        <text class="lbl" data-r="lab1" x="10" y="20"></text><text class="lbl" data-r="lab2" x="10" y="220"></text><text class="lbl" x="186" y="18">normal</text></svg>
        <div class="controls"><label>Angle of incidence θ₁: <b data-r="angv">40°</b></label>
          <select data-r="pair" aria-label="Media"><option value="0">Air → Water</option><option value="1">Air → Glass</option><option value="2">Water → Air</option><option value="3">Glass → Air</option><option value="4">Water → Glass</option></select>
          <input data-r="ang" type="range" min="0" max="89" value="40" aria-label="Angle of incidence"></div><div class="readout" data-r="out-txt"></div></div>`;
      const q = n => el.querySelector(`[data-r="${n}"]`);
      const PAIRS = [['Air', 'Water', 1.00, 1.33], ['Air', 'Glass', 1.00, 1.50], ['Water', 'Air', 1.33, 1.00], ['Glass', 'Air', 1.50, 1.00], ['Water', 'Glass', 1.33, 1.50]];
      const O = { x: 180, y: 115 }, L = 125, deg = Math.PI / 180;
      function draw() {
        const t1 = +q('ang').value * deg, [m1, m2, n1, n2] = PAIRS[+q('pair').value];
        q('angv').textContent = q('ang').value + '°'; q('lab1').textContent = `${m1} · n = ${n1.toFixed(2)}`; q('lab2').textContent = `${m2} · n = ${n2.toFixed(2)}`;
        el.querySelector('.m1').style.fill = n1 > n2 ? 'color-mix(in srgb, var(--phy) 12%, var(--surface))' : '';
        el.querySelector('.m2').style.fill = n2 > n1 ? '' : 'var(--sunk)';
        q('in').setAttribute('x1', O.x - L * Math.sin(t1)); q('in').setAttribute('y1', O.y - L * Math.cos(t1));
        q('refl').setAttribute('x2', O.x + L * Math.sin(t1)); q('refl').setAttribute('y2', O.y - L * Math.cos(t1));
        q('arc1').setAttribute('d', `M${O.x},${O.y - 34} A34,34 0 0 0 ${O.x - 34 * Math.sin(t1)},${O.y - 34 * Math.cos(t1)}`);
        const s2 = n1 * Math.sin(t1) / n2, crit = n1 > n2 ? Math.asin(n2 / n1) / deg : null;
        let out = `<span>θ<sub>1</sub> = <b>${q('ang').value}°</b></span>`;
        if (s2 > 1) { q('out').style.display = q('arc2').style.display = 'none'; q('refl').style.opacity = 1; out += `<span class="tir">total internal reflection</span>`; }
        else { const t2 = Math.asin(s2); q('out').style.display = q('arc2').style.display = '';
          q('out').setAttribute('x2', O.x + L * Math.sin(t2)); q('out').setAttribute('y2', O.y + L * Math.cos(t2));
          q('arc2').setAttribute('d', `M${O.x},${O.y + 34} A34,34 0 0 0 ${O.x + 34 * Math.sin(t2)},${O.y + 34 * Math.cos(t2)}`);
          q('refl').style.opacity = .22; out += `<span>θ<sub>2</sub> = <b>${(t2 / deg).toFixed(1)}°</b></span>`; }
        out += `<span>n<sub>1</sub> sin θ<sub>1</sub> = <b>${(n1 * Math.sin(t1)).toFixed(3)}</b></span>`;
        if (crit) out += `<span>critical angle <b>${crit.toFixed(1)}°</b></span>`;
        q('out-txt').innerHTML = out;
      }
      q('ang').addEventListener('input', draw); q('pair').addEventListener('change', draw); draw();
    },

    // A ray through a triangular prism: vector Snell's law at each face.
    'prism-sim'(el) {
      el.innerHTML = `<div class="bench"><svg viewBox="0 0 400 250" role="img" aria-label="A ray refracting through a prism"></svg>
        <div class="controls">
          <label>Angle of incidence i: <b data-r="iv"></b><input data-r="i" type="range" min="0" max="89" value="49"></label>
          <label>Prism angle A: <b data-r="av"></b><input data-r="a" type="range" min="20" max="80" value="60"></label>
          <label>Refractive index n: <b data-r="nv"></b><input data-r="n" type="range" min="1.30" max="1.90" step="0.01" value="1.50"></label>
        </div><div class="readout" data-r="out"></div></div>`;
      const q = n => el.querySelector(`[data-r="${n}"]`), svg = el.querySelector('svg'), D = 180 / Math.PI;
      const rot = ([x, y], t) => [x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t)];
      const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
      function refract(d, N, n1, n2) { // N: unit normal pointing back into the incident medium
        const ci = -dot(d, N), k = n1 / n2, s2 = k * k * (1 - ci * ci);
        if (s2 > 1) return null;
        const ct = Math.sqrt(1 - s2); return [k * d[0] + (k * ci - ct) * N[0], k * d[1] + (k * ci - ct) * N[1]];
      }
      function hitLine(p, d, a, b) { // ray p + t d against segment a-b
        const ex = b[0] - a[0], ey = b[1] - a[1], den = d[0] * ey - d[1] * ex;
        if (Math.abs(den) < 1e-9) return null;
        const t = ((a[0] - p[0]) * ey - (a[1] - p[1]) * ex) / den, s = ((a[0] - p[0]) * d[1] - (a[1] - p[1]) * d[0]) / den;
        return t > 0 && s >= 0 && s <= 1 ? [p[0] + t * d[0], p[1] + t * d[1]] : null;
      }
      function draw() {
        const i = +q('i').value / D, A = +q('a').value / D, n = +q('n').value;
        q('iv').textContent = q('i').value + '°'; q('av').textContent = q('a').value + '°'; q('nv').textContent = n.toFixed(2);
        const apex = [200, 40], h = 170, w = h * Math.tan(A / 2), B1 = [200 - w, 40 + h], B2 = [200 + w, 40 + h];
        const len = Math.hypot(w, h), N1 = [-h / len, -w / len], N2 = [h / len, -w / len]; // outward normals of left and right faces
        const H1 = [apex[0] + (B1[0] - apex[0]) * 0.55, apex[1] + (B1[1] - apex[1]) * 0.55];
        const d = rot([-N1[0], -N1[1]], -i); // incident ray tilted from the inward normal towards the apex side
        let g = `<path d="M${apex} L${B1} L${B2}Z" class="optic-fill"/>`;
        const n1end = [H1[0] - d[0] * 140, H1[1] - d[1] * 140];
        g += `<line class="axis" x1="${H1[0] - N1[0] * 40}" y1="${H1[1] - N1[1] * 40}" x2="${H1[0] + N1[0] * 40}" y2="${H1[1] + N1[1] * 40}" style="stroke-dasharray:3 3"/>`;
        g += `<line class="ray r1" x1="${n1end[0]}" y1="${n1end[1]}" x2="${H1[0]}" y2="${H1[1]}"/>`;
        const t1 = refract(d, N1, 1, n);
        let out = `<span>i = <b>${(i * D).toFixed(0)}°</b></span>`;
        const r1 = Math.asin(Math.sin(i) / n), r2 = A - r1;
        const H2 = t1 && hitLine(H1, t1, apex, B2);
        if (!H2) { out += `<span class="tir">the ray hits the base; widen A or increase i</span>`; }
        else {
          g += `<line class="ray r1" x1="${H1[0]}" y1="${H1[1]}" x2="${H2[0]}" y2="${H2[1]}"/>`;
          g += `<line class="axis" x1="${H2[0] - N2[0] * 40}" y1="${H2[1] - N2[1] * 40}" x2="${H2[0] + N2[0] * 40}" y2="${H2[1] + N2[1] * 40}" style="stroke-dasharray:3 3"/>`;
          const t2 = refract(t1, [-N2[0], -N2[1]], n, 1);
          out += `<span>r₁ = <b>${(r1 * D).toFixed(1)}°</b></span><span>r₂ = <b>${(r2 * D).toFixed(1)}°</b></span>`;
          if (!t2) {
            const rf = [t1[0] - 2 * dot(t1, N2) * N2[0], t1[1] - 2 * dot(t1, N2) * N2[1]];
            g += `<line class="ray r3" x1="${H2[0]}" y1="${H2[1]}" x2="${H2[0] + rf[0] * 60}" y2="${H2[1] + rf[1] * 60}"/>`;
            out += `<span class="tir">total internal reflection at the second face</span>`;
          } else {
            g += `<line class="ray r1" x1="${H2[0]}" y1="${H2[1]}" x2="${H2[0] + t2[0] * 160}" y2="${H2[1] + t2[1] * 160}"/>`;
            g += `<line class="axis" x1="${H1[0]}" y1="${H1[1]}" x2="${H1[0] + d[0] * 300}" y2="${H1[1] + d[1] * 300}" style="stroke-dasharray:2 5;opacity:.6"/>`;
            const e = Math.asin(Math.min(1, n * Math.sin(r2))), dev = i + e - A;
            out += `<span>e = <b>${(e * D).toFixed(1)}°</b></span><span>deviation δ = <b>${(dev * D).toFixed(1)}°</b></span>`;
          }
        }
        const dm = 2 * Math.asin(Math.min(1, n * Math.sin(A / 2))) - A;
        if (n * Math.sin(A / 2) < 1) out += `<span>minimum deviation δₘ = <b>${(dm * D).toFixed(1)}°</b> at i = <b>${((A + dm) / 2 * D).toFixed(1)}°</b></span>`;
        svg.innerHTML = g; q('out').innerHTML = out;
      }
      ['i', 'a', 'n'].forEach(k => q(k).addEventListener('input', draw)); draw();
    },

    // Mirrors and thin lenses with the New Cartesian sign convention: light travels left to right, distances from the pole/optical centre.
    'optics-bench'(el, o) {
      const types = { 'concave-mirror': 'Concave mirror', 'convex-mirror': 'Convex mirror', 'convex-lens': 'Convex lens', 'concave-lens': 'Concave lens' };
      const only = o.types ? o.types.split(',') : Object.keys(types);
      el.innerHTML = `<div class="bench"><svg viewBox="0 0 640 300" role="img" aria-label="Ray diagram for a mirror or lens"></svg>
        <div class="controls">
          <label>Optic<select data-r="type">${only.map(t => `<option value="${t}">${types[t]}</option>`).join('')}</select></label>
          <label>Object distance |u|: <b data-r="uv"></b><input data-r="u" type="range" min="4" max="70" step="1" value="${o.u || 30}"></label>
          <label>Focal length |f|: <b data-r="fv"></b><input data-r="f" type="range" min="5" max="30" step="1" value="${o.f || 15}"></label>
        </div><div class="readout" data-r="out"></div></div>`;
      const q = n => el.querySelector(`[data-r="${n}"]`), svg = el.querySelector('svg');
      const X0 = 330, Y0 = 150, SC = 4, H = 8; // optic at X0; 1 cm = 4 px; object height 8 cm (drawn as 32 px)
      const fmt = x => (Math.abs(x) < 0.05 ? '0' : (x > 0 ? '+' : '−') + Math.abs(x).toFixed(1));
      function lineTo(x1, y1, dx, dy) { // extend from (x1,y1) along (dx,dy) to the frame
        const ts = []; if (dx > 0) ts.push((640 - x1) / dx); if (dx < 0) ts.push(-x1 / dx); if (dy > 0) ts.push((300 - y1) / dy); if (dy < 0) ts.push(-y1 / dy);
        const t = Math.min(...ts.filter(v => v > 0)); return [x1 + dx * t, y1 + dy * t];
      }
      function draw() {
        const type = q('type').value, U = +q('u').value, F = +q('f').value;
        const mirror = type.endsWith('mirror'), converging = type === 'concave-mirror' || type === 'convex-lens';
        q('uv').textContent = U + ' cm'; q('fv').textContent = F + ' cm';
        const u = -U;
        const f = mirror ? (converging ? -F : F) : (converging ? F : -F);
        let v, m, inf = false;
        if (mirror) { const inv = 1 / f - 1 / u; if (Math.abs(inv) < 1e-6) inf = true; else v = 1 / inv; m = inf ? Infinity : -v / u; }
        else { const inv = 1 / f + 1 / u; if (Math.abs(inv) < 1e-6) inf = true; else v = 1 / inv; m = inf ? Infinity : v / u; }
        const xo = X0 + u * SC, yo = Y0 - H * SC;
        const real = !inf && (mirror ? v < 0 : v > 0);
        const xi = inf ? null : X0 + v * SC, yi = inf ? null : Y0 - m * H * SC;
        const fEff = converging ? F : -F; // positive = converging
        const xFfront = mirror ? X0 - fEff * SC : X0 - fEff * SC; // ray aimed through this point leaves parallel
        let g = `<line class="axis" x1="0" y1="${Y0}" x2="640" y2="${Y0}"/>`;
        // optic drawing
        if (mirror) { // concave bulges away from the object: ')' ; convex: '('
          const e = converging ? -10 : 10;
          g += `<path class="optic" d="M${X0 + e},${Y0 - 110} Q${X0 - e},${Y0} ${X0 + e},${Y0 + 110}"/>`;
          for (let y = Y0 - 100; y <= Y0 + 100; y += 14) { const t = (y - (Y0 - 110)) / 220, xm = (1 - t) * (1 - t) * (X0 + e) + 2 * t * (1 - t) * (X0 - e) + t * t * (X0 + e);
            g += `<line class="axis" x1="${xm + 2}" y1="${y}" x2="${xm + 10}" y2="${y - 7}" style="stroke-dasharray:none;opacity:.6"/>`; }
        } else if (converging) {
          g += `<path class="optic-fill" d="M${X0},${Y0 - 110} Q${X0 + 22},${Y0} ${X0},${Y0 + 110} Q${X0 - 22},${Y0} ${X0},${Y0 - 110}z"/>`;
        } else {
          g += `<path class="optic-fill" d="M${X0 - 12},${Y0 - 110} L${X0 + 12},${Y0 - 110} Q${X0 + 2},${Y0} ${X0 + 12},${Y0 + 110} L${X0 - 12},${Y0 + 110} Q${X0 - 2},${Y0} ${X0 - 12},${Y0 - 110}z"/>`;
        }
        // focal points and centre of curvature
        const pts = mirror ? [['F', X0 + f * SC], ['C', X0 + 2 * f * SC]] : [['F₁', X0 - F * SC], ['F₂', X0 + F * SC], ['2F₁', X0 - 2 * F * SC], ['2F₂', X0 + 2 * F * SC]];
        pts.forEach(([n, x]) => { if (x > 4 && x < 636) g += `<circle class="pt" cx="${x}" cy="${Y0}" r="2.6"/><text x="${x - 6}" y="${Y0 + 16}">${n}</text>`; });
        g += `<text x="${X0 - 4}" y="${Y0 + 16}">${mirror ? 'P' : 'O'}</text>`;
        // three rays from the object tip; outgoing rays pass (really or virtually) through the image
        const hits = [yo, Y0];
        if (Math.abs(xFfront - xo) > 0.5) hits.push(yo + (X0 - xo) * (Y0 - yo) / (xFfront - xo));
        hits.forEach((hy, i) => {
          if (Math.abs(hy - Y0) > 140) return;
          const cls = 'r' + (i + 1);
          g += `<line class="ray ${cls}" x1="${xo}" y1="${yo}" x2="${X0}" y2="${hy}"/>`;
          let dx, dy;
          if (inf) { // object at the focus: rays leave parallel to the ray through the pole / optical centre
            dx = mirror ? xo - X0 : X0 - xo; dy = Y0 - yo;
          } else if (real) { dx = xi - X0; dy = yi - hy; }
          else { dx = X0 - xi; dy = hy - yi; }
          const len = Math.hypot(dx, dy); dx /= len; dy /= len;
          const [ex, ey] = lineTo(X0, hy, dx, dy);
          g += `<line class="ray ${cls}" x1="${X0}" y1="${hy}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}"/>`;
          if (!inf && !real) g += `<line class="virt ${cls}" x1="${X0}" y1="${hy}" x2="${xi.toFixed(1)}" y2="${yi.toFixed(1)}"/>`;
        });
        g += `<line class="objarrow" x1="${xo}" y1="${Y0}" x2="${xo}" y2="${yo}"/><path d="M${xo - 5},${yo + 8}L${xo},${yo}L${xo + 5},${yo + 8}" class="objarrow" fill="none"/><text x="${xo - 18}" y="${yo - 8}">object</text>`;
        let out;
        if (inf) out = `<span>u = <b>${fmt(u)} cm</b></span><span>f = <b>${fmt(f)} cm</b></span><span><b>Image at infinity</b>: the rays leave parallel.</span>`;
        else {
          if (xi > 0 && xi < 640 && Math.abs(yi - Y0) < 150) {
            const tip = yi, dir = tip < Y0 ? 8 : -8;
            g += `<line class="imgarrow ${real ? '' : 'v'}" x1="${xi}" y1="${Y0}" x2="${xi}" y2="${tip}"/><path d="M${xi - 5},${tip + dir}L${xi},${tip}L${xi + 5},${tip + dir}" class="imgarrow" fill="none"/><text x="${xi + 6}" y="${tip + (tip < Y0 ? -6 : 14)}">image</text>`;
          }
          const am = Math.abs(m);
          const nature = `${real ? 'real' : 'virtual'}, ${m < 0 ? 'inverted' : 'erect'}, ${Math.abs(am - 1) < 0.02 ? 'same size' : am > 1 ? 'magnified' : 'diminished'}`;
          out = `<span>u = <b>${fmt(u)} cm</b></span><span>f = <b>${fmt(f)} cm</b></span><span>v = <b>${fmt(v)} cm</b></span><span>m = <b>${fmt(m)}</b></span><span>image: <b>${nature}</b></span>`;
          if (!(xi > 0 && xi < 640)) out += `<span>(image is off the bench)</span>`;
        }
        svg.innerHTML = g; q('out').innerHTML = out;
      }
      ['type', 'u', 'f'].forEach(n => q(n).addEventListener('input', draw)); draw();
    }
  };

  /* ================= PRACTICE ================= */
  function dailySet(all) {
    const seed = today(); let x = seed * 9301 + 49297;
    const rnd = () => (x = (x * 9301 + 49297) % 233280) / 233280;
    const pool = all.filter(p => (PG.problems[pk(p.leaf, p.id)] || {}).r !== 'got');
    const src = (pool.length >= 6 ? pool : all).slice().sort(() => rnd() - .5);
    const picked = [], seen = new Set();
    for (const p of src) { if (!seen.has(p.lvl) || picked.length >= 4) { picked.push(p); seen.add(p.lvl); } if (picked.length === 6) break; }
    return picked;
  }
  async function allProblems() { const ks = liveLeaves().filter(x => x.l.problems).map(x => x.key); const arr = await Promise.all(ks.map(getProblems)); return arr.flat(); }
  RENDER.practice = async () => {
    const leaves = liveLeaves().filter(x => x.l.problems);
    $('sets').innerHTML = `<div class="panel set"><span class="eyebrow">Recommended</span><h3>Today's mixed set</h3><p>6 problems across levels and topics, shuffled daily.</p><div><button class="btn" data-start="daily">Start</button></div></div>` +
      leaves.map(x => { const L = leafByKey(x.key); return `<div class="panel set s-${x.s.id}"><span class="eyebrow">${escHTML(L.p.name)} · ${escHTML(L.b.name)}</span><h3>${escHTML(x.l.name)}</h3><p>${x.l.problems} problems, NCERT first, then up to Olympiad.</p><div><button class="btn ghost" data-start-leaf="${x.key}">Start</button></div></div>`; }).join('');
    const all = await allProblems();
    $('level-row').innerHTML = LVL_ORDER.map(k => { const n = all.filter(p => p.lvl === k).length; return n ? `<button data-level="${k}"><span class="tier ${LEVELS[k][2]}" style="padding:0;background:none;font-size:14px">${LEVELS[k][0]}</span><span>${n} problems</span></button>` : ''; }).join('');
  };
  document.addEventListener('click', async e => {
    const d = e.target.closest('[data-start="daily"]'); if (d) { const all = await allProblems(); return startSet(dailySet(all), "Today's mixed set", 0); }
    const lf = e.target.closest('[data-start-leaf]'); if (lf) { const ps = await getProblems(lf.dataset.startLeaf); return startSet(ps, leafByKey(lf.dataset.startLeaf).l.name, 0); }
    const lv = e.target.closest('[data-level]'); if (lv) { const all = await allProblems(); return startSet(all.filter(p => p.lvl === lv.dataset.level), LEVELS[lv.dataset.level][0], 0); }
  });
  function startSet(list, name, idx) {
    if (!list.length) return;
    S.set = list; S.setName = name; S.idx = idx || 0; const h = parseHash(); S.from = h.v === 'lesson' ? 'lesson' : h.v;
    go('play');
  }

  /* ================= PLAYER ================= */
  RENDER.play = renderPlay;
  const pid = p => pk(p.leaf, p.id);
  function renderPlay() {
    const el = $('player');
    if (S.idx >= S.set.length) { el.innerHTML = summaryHTML(); return; }
    const p = S.set[S.idx], id = pid(p), hn = S.hintN[id] || 0, chk = S.checked[id], sol = S.solShown[id];
    const L = leafByKey(p.leaf);
    let body = '';
    if (p.kind === 'mcq') {
      body = `<div class="opts">${p.opts.map((o, i) => { let cls = ''; if (chk) { if (i === p.ans && chk.ok) cls = 'right'; else if (i === chk.pick) cls = 'wrong'; }
        return `<button class="opt ${cls}" data-pick="${i}" ${chk && chk.ok ? 'disabled' : ''}>${o}</button>`; }).join('')}</div>`;
    } else if (p.kind === 'num') {
      body = `<div class="ansrow"><label for="ans" class="src">${escHTML(p.ask || 'Your answer')}</label><input id="ans" inputmode="decimal" autocomplete="off" value="${chk ? escHTML(chk.val) : ''}" ${chk && chk.ok ? 'disabled' : ''}><span class="unit">${escHTML(p.unit || '')}</span><button class="btn" data-act="check" ${chk && chk.ok ? 'disabled' : ''}>Check</button></div>`;
    } else body = `<p class="src">${p.kind === 'proof' ? 'Work it out on paper' : 'Answer in your head or on paper'}, then compare with the solution.</p>`;
    if (chk) body += `<div class="verdict ${chk.ok ? 'good' : 'bad'}" aria-live="polite">${chk.ok ? 'Correct.' + (p.kind === 'num' ? ` The answer is ${p.ans}${p.unit ? ' ' + escHTML(p.unit) : ''}.` : '') : chk.nan ? 'Enter a number.' : 'Not right yet. Try again or take a hint.'}</div>`;
    const hints = (p.hints || []).slice(0, hn).map((h, i) => `<div class="hint"><b>Hint ${i + 1}</b>${h}</div>`).join('');
    const nh = (p.hints || []).length;
    const helps = `<div class="helps">${nh ? `<button class="btn quiet" data-act="hint" ${hn >= nh ? 'disabled' : ''}>${hn >= nh ? 'No more hints' : `Show hint ${hn + 1} of ${nh}`}</button>` : ''}<button class="btn quiet" data-act="sol" ${sol ? 'disabled' : ''}>Show solution</button></div>`;
    const solution = sol ? `<div class="solution"><b>Solution</b>${p.sol}${p.answer_key ? `<div class="ans-key"><b>NCERT answer key:</b> ${p.answer_key}</div>` : ''}</div>` : '';
    const done = (chk && chk.ok) || sol;
    const rate = done ? `<div class="rate-box"><p>How did that go? Your rating decides when this problem comes back.</p><div class="rate3">
      <button data-r="missed">Missed it<span>back tomorrow</span></button><button data-r="shaky">Shaky<span>back in 3 days</span></button><button data-r="got">Got it<span>back in 2 weeks</span></button></div></div>` : '';
    const ver = p.check === 'code' ? '<span class="ver ok">✓ answer checked by code</span>' : p.check === 'ncert-key' ? '<span class="ver ok">✓ matches NCERT answer key</span>' : p.check === 'both' ? '<span class="ver ok">✓ NCERT key and code agree</span>' : '<span class="ver">solution not independently checked</span>';
    el.innerHTML = `
      <div class="play-top"><button class="back" data-act="exit" style="margin:0">← ${escHTML(S.setName)}</button><span class="count">${S.idx + 1} / ${S.set.length}</span></div>
      <div class="dots">${S.set.map((q, i) => `<button aria-label="Problem ${i + 1}" data-jump="${i}" class="${i === S.idx ? 'cur' : ((PG.problems[pid(q)] || {}).r || '')}"></button>`).join('')}</div>
      <article class="pcard s-${L ? L.s.id : 'phy'}">
        <div class="pmeta"><span class="tier ${LEVELS[p.lvl][2]}">${LEVELS[p.lvl][0]}</span><span class="src ${p.lvl.startsWith('ncert') ? 'src-ncert' : ''}">${escHTML(p.source || (L ? L.l.name : ''))}</span>${ver}</div>
        <div class="stmt">${p.q}</div>${body}${hints}${helps}${solution}${rate}
      </article>
      <div class="play-nav"><button class="btn ghost" data-act="prev" ${S.idx === 0 ? 'disabled' : ''}>← Previous</button><button class="btn ghost" data-act="next">${S.idx === S.set.length - 1 ? 'Finish' : 'Skip →'}</button></div>`;
    const inp = $('ans'); if (inp && !inp.disabled) inp.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
  }
  function check(pick) {
    const p = S.set[S.idx], id = pid(p);
    if (p.kind === 'mcq') S.checked[id] = { pick, ok: pick === p.ans };
    else { const raw = $('ans').value.trim(), v = parseFloat(raw.replace(',', '.').replace('−', '-'));
      S.checked[id] = isNaN(v) ? { val: raw, ok: false, nan: true } : { val: raw, ok: Math.abs(v - p.ans) <= p.tol }; }
    renderPlay();
    if (p.kind === 'num' && !S.checked[id].ok) { const i = $('ans'); if (i) { i.focus(); i.select(); } }
  }
  function summaryHTML() {
    const ids = S.set.map(pid), c = k => ids.filter(i => (PG.problems[i] || {}).r === k).length;
    return `<article class="pcard summary"><div class="eyebrow">${escHTML(S.setName)}</div><div class="big">${c('got')} / ${ids.length}</div><div>rated “Got it”</div>
      <div class="split"><span><span class="state got">✓</span> Got it ${c('got')}</span><span><span class="state shaky">~</span> Shaky ${c('shaky')}</span><span><span class="state missed">✕</span> Missed ${c('missed')}</span></div>
      <p style="color:var(--muted);margin-bottom:18px">Shaky and missed problems come back in your review queue.</p>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn" data-act="restart">Go through again</button><button class="btn ghost" data-act="exit">Done</button></div></article>`;
  }
  $('player').addEventListener('click', e => {
    const t = e.target.closest('button'); if (!t || t.disabled) return;
    const p = S.set[S.idx];
    if (t.dataset.pick != null) return check(+t.dataset.pick);
    if (t.dataset.jump != null) { S.idx = +t.dataset.jump; return renderPlay(); }
    if (t.dataset.r) { rateProblem(p.leaf, p.id, t.dataset.r); S.idx++; window.scrollTo(0, 0); return renderPlay(); }
    switch (t.dataset.act) {
      case 'check': return check();
      case 'hint': S.hintN[pid(p)] = (S.hintN[pid(p)] || 0) + 1; return renderPlay();
      case 'sol': S.solShown[pid(p)] = true; return renderPlay();
      case 'prev': S.idx = Math.max(0, S.idx - 1); return renderPlay();
      case 'next': S.idx++; return renderPlay();
      case 'restart': S.idx = 0; S.checked = {}; S.solShown = {}; S.hintN = {}; return renderPlay();
      case 'exit': if (S.from === 'lesson') { S.ltab = 'practice'; return openLesson(S.lessonKey, 'practice'); } return go(['home', 'practice', 'review'].includes(S.from) ? S.from : 'practice');
    }
  });

  /* ================= REVIEW ================= */
  RENDER.review = () => {
    if (!S.revQueue.length || S.revIdx >= S.revQueue.length) { S.revQueue = dueCards().map(([id]) => id); S.revIdx = 0; S.revShown = false; }
    renderReview();
  };
  async function startDueProblems() {
    const due = dueProblems().map(([k]) => k);
    const byLeaf = {}; due.forEach(k => { const [leaf, id] = k.split('#'); (byLeaf[leaf] ||= []).push(id); });
    const list = []; for (const leaf of Object.keys(byLeaf)) { const ps = await getProblems(leaf); ps.forEach(p => { if (byLeaf[leaf].includes(p.id)) list.push(p); }); }
    startSet(list, 'Problems due for review', 0);
  }
  function renderReview() {
    const el = $('rev'), dp = dueProblems().length;
    const probBtn = dp ? `<div class="panel" style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px"><div><b>${dp} problem${dp > 1 ? 's' : ''} due</b><p class="lede" style="margin:2px 0 0;font-size:13px">Ones you rated Shaky or Missed, back for another go.</p></div><button class="btn" data-rv="problems">Solve them</button></div>` : '';
    if (S.revIdx >= S.revQueue.length) {
      el.innerHTML = `<div class="head"><div class="eyebrow">Review</div><h1 class="h1">${S.revQueue.length ? 'All caught up' : 'Nothing due'}</h1><p class="lede">${S.revQueue.length ? 'That was everything due today.' : 'Open a lesson and press “Add these to my review cards” under Key ideas. Cards appear here when they are due.'}</p></div>${probBtn}<div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn quiet" href="#practice">Solve some problems</a></div>`;
      updateBadge(); return;
    }
    const id = S.revQueue[S.revIdx], c = PG.cards[id];
    if (!c) { S.revIdx++; return renderReview(); }
    const left = S.revQueue.length - S.revIdx;
    const iv = c.iv || 0, nx = g => { const n = g === 1 ? 0 : g === 2 ? Math.max(1, Math.round(iv * 1.2)) : g === 3 ? Math.max(2, Math.round(iv * 2.5) || 2) : Math.max(4, Math.round(iv * 3.5) || 4); return n === 0 ? 'today' : n === 1 ? '1 day' : n + ' days'; };
    el.innerHTML = `<div class="head"><div class="eyebrow">Review</div><h1 class="h1">${left} card${left > 1 ? 's' : ''} left today</h1><p class="lede">Answer in your head first, then reveal. Rate yourself honestly: the rating sets when the card comes back.</p></div>${probBtn}
      <div class="dots" style="margin-bottom:14px">${S.revQueue.map((x, i) => `<button tabindex="-1" aria-hidden="true" class="${i === S.revIdx ? 'cur' : i < S.revIdx ? 'got' : ''}" style="cursor:default"></button>`).join('')}</div>
      <article class="fcard s-${c.c || 'phy'}"><div class="pmeta" style="margin:0"><span class="dot"></span><span class="src">${escHTML(c.where || '')}</span><span class="ver">${S.revIdx + 1} of ${S.revQueue.length}</span></div>
        <div class="front">${c.front}</div>
        ${S.revShown ? `<div class="back">${c.back}</div><div class="rate4"><button data-rv="1">Again<span>${nx(1)}</span></button><button data-rv="2">Hard<span>${nx(2)}</span></button><button data-rv="3">Good<span>${nx(3)}</span></button><button data-rv="4">Easy<span>${nx(4)}</span></button></div>`
        : `<div style="margin-top:auto"><button class="btn" data-rv="show">Show answer</button></div>`}</article>`;
  }
  $('rev').addEventListener('click', e => {
    const b = e.target.closest('[data-rv]'); if (!b) return; const v = b.dataset.rv;
    if (v === 'problems') return startDueProblems();
    if (v === 'show') S.revShown = true;
    else { rateCard(S.revQueue[S.revIdx], +v); if (+v === 1) S.revQueue.push(S.revQueue[S.revIdx]); S.revIdx++; S.revShown = false; }
    renderReview();
  });

  /* ================= START ================= */
  fillIcons();
  updateBadge();
  Promise.all([fetchJSON('data/tree.json'), fetchJSON('data/ncert.json'), fetchJSON('data/search.json')])
    .then(([t, n, s]) => { TREE = t; NCERT = n; SEARCH = s; route(); })
    .catch(err => { document.querySelector('main .inner').innerHTML = `<div class="empty-card panel">The archive data could not be loaded (${escHTML(err.message)}). Reload the page to try again.</div>`; });
})();
