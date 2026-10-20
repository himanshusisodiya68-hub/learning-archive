(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const escHTML = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const stripTags = s => String(s ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  /* ================= ICONS ================= */
  const ICONS = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    home: '<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
    tree: '<circle cx="12" cy="5" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 7v4M6 16v-2.5h12V16M12 11v5"/>',
    atom: '<path class="fl" d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/><path d="M12 2c4 0 6 4.5 6 10s-2 10-6 10-6-4.5-6-10 2-10 6-10z"/><path d="M3.3 7c2-3.5 6.8-3 11.6-.3s7.8 6.8 5.8 10.3-6.8 3-11.6.3S1.3 10.5 3.3 7z"/>',
    pi: '<path class="fl" d="M4 4h16v16H4z"/><path d="M17 5H7l6 7-6 7h10"/>',
    flask: '<path class="fl" d="M7.5 15h9l2.4 4.2a.8.8 0 0 1-.7 1.3H5.8a.8.8 0 0 1-.7-1.3z"/><path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3"/><path d="M7.5 15h9"/>',
    leaf: '<path class="fl" d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15z"/><path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19l8-8"/>',
    book: '<path class="fl" d="M12 6c3.5-2 6.5-2 9-.5V19c-2.5-1.5-5.5-1.5-9 .5z"/><path d="M3 5.5C5.5 4 8.5 4 12 6c3.5-2 6.5-2 9-.5V19c-2.5-1.5-5.5-1.5-9 .5-3.5-2-6.5-2-9-.5z"/><path d="M12 6v13.5"/>',
    logo: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
    navHome: '<path class="fl" d="M5 9l7-5.5L19 9v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M3 10.5L12 3l9 7.5M5 9v11a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9"/>',
    navLearn: '<path class="fl" d="M2 9l10-5 10 5-10 5z"/><path d="M2 9l10-5 10 5-10 5zM6 11v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5M22 9v6"/>',
    navPractice: '<path class="fl" d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>',
    navReview: '<path class="fl" d="M5 8h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"/><path d="M5 8h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zM8 4h11a2 2 0 0 1 2 2v10M8 14.5l1.8 1.8L13 13"/>',
    navNotebook: '<path class="fl" d="M9.5 3H18a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 18 21H9.5z"/><path d="M6 3h12a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 18 21H6zM9.5 3v18M3.5 7.5H6M3.5 12H6M3.5 16.5H6M13 8h3.5M13 11.5h3.5"/>',
    navProgress: '<path class="fl" d="M7.5 4h9v5a4.5 4.5 0 0 1-9 0z"/><path d="M7.5 4h9v5a4.5 4.5 0 0 1-9 0zM7.5 6H4.5a3 3 0 0 0 3 4.3M16.5 6h3a3 3 0 0 1-3 4.3M12 13.5V17M8 21h8M9.5 17h5"/>',
    navYou: '<path class="fl" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 21a7.5 7.5 0 0 1 15 0"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    check: '<path d="M5 12l4 4 10-10"/>',
    mechanics: '<path d="M3 20h18"/><path d="M3 20C7 6 15 6 21 20" stroke-dasharray="2 2.6"/><circle cx="12" cy="9.5" r="2" fill="currentColor"/>',
    'oscillations-and-waves': '<path d="M2 12C5 3 8 3 11 12S17 21 20 12"/><path d="M20 12h2"/>',
    'thermal-physics': '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 9v6"/><circle cx="12" cy="17" r="1.6" fill="currentColor"/>',
    'electricity-and-magnetism': '<path d="M13 2L5 13h6l-1 9 8-11h-6z"/>',
    optics: '<path d="M12 3c2 3 2 15 0 18-2-3-2-15 0-18z"/><path d="M2 8h10l10 4M2 16h10l10-4"/>',
    'modern-physics': '<circle cx="12" cy="12" r="2.2" fill="currentColor"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(-30 12 12)"/><circle cx="20.2" cy="7.25" r="1.2" fill="currentColor"/>',
    'tools-of-the-trade': '<rect x="2" y="8" width="20" height="8" rx="1.5"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4"/>',
    number: '<path d="M9 4L7 20M17 4l-2 16M4 9h17M3 15h17"/>',
    algebra: '<text x="3.5" y="18" font-size="15" font-style="italic" font-family="Source Serif 4, Georgia, serif" fill="currentColor" stroke="none">x</text><text x="13.5" y="11" font-size="9" font-family="Source Serif 4, Georgia, serif" fill="currentColor" stroke="none">2</text>',
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
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    alert: '<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17.5v.01"/>',
    code: '<path class="fl" d="M2 4h20v16H2z"/><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    chev: '<path d="M9 5l7 7-7 7"/>'
  };
  const ico = (name, cls = '') => `<svg viewBox="0 0 24 24" class="ic ${cls}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.lesson}</svg>`;
  const fillIcons = (root = document) => root.querySelectorAll('[data-icon]').forEach(el => { if (!el.firstElementChild) el.innerHTML = ico(el.dataset.icon); });
  const SUBJ_ICON = { phy: 'atom', mat: 'pi', chem: 'flask', bio: 'leaf', eng: 'book', cs: 'code' };
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
  const CS_LEVELS = { found: ['Warm-up', 'Check the idea itself', 'found'], board: ['Practice', 'Apply it once', 'board'], main: ['Interview', 'Typical coding-interview level', 'main'], adv: ['Advanced', 'Several ideas combined', 'adv'], oly: ['System design', 'SDE-3 level: design at scale', 'oly'] };
  const lvInfo = (lv, sid) => (sid === 'cs' && CS_LEVELS[lv]) || LEVELS[lv];
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
  // The promise is cached, so the lesson and its problems (same file) share one request.
  function getLesson(key) { return lessonCache[key] ||= fetchJSON(`data/lessons/${fileOf(key)}.json`).catch(e => { delete lessonCache[key]; throw e; }); }
  // One file per leaf holds the lesson and its problems (data/lessons/<subj>--<leaf>.json, field probs).
  async function getProblems(key) {
    if (problemCache[key]) return problemCache[key];
    const L = leafByKey(key); if (!L || !L.l.problems) return (problemCache[key] = []);
    return (problemCache[key] = (await getLesson(key)).probs || []);
  }
  // Problems from a few leaves only (never the whole archive): leaves picked at random, or by today's date.
  async function sampleProblems(n, keep = () => true, seeded = false) {
    let x = today() * 9301 + 49297; const rnd = seeded ? () => (x = (x * 9301 + 49297) % 233280) / 233280 : Math.random;
    const ks = liveLeaves().filter(y => y.l.problems && keep(y.l)).map(y => y.key).sort(() => rnd() - .5).slice(0, n);
    return (await Promise.all(ks.map(getProblems))).flat();
  }
  const liveLeaves = () => TREE.subjects.flatMap(s => (s.pillars || []).flatMap(p => p.branches.flatMap(b => b.leaves.filter(l => l.live || l.problems).map(l => ({ key: `${s.id}/${l.id}`, l, s })))));

  function lessonNeighbours(key) {
    const sid = key.split('/')[0], list = liveLeaves().filter(x => x.l.live && x.s.id === sid); const i = list.findIndex(x => x.key === key); // stay inside the subject
    return i < 0 ? {} : { prev: list[i - 1], next: list[i + 1] };
  }
  const lessonCard = (x, dir, cur) => {
    const L = leafByKey(x.key); const where = L.b.id !== cur.b.id ? `${escHTML(L.p.name)} · ${escHTML(L.b.name)}` : escHTML(L.b.name);
    return `<button class="lnav-b ${dir}" data-goto="${x.key}"><small>${dir === 'next' ? 'Next lesson →' : '← Previous lesson'}</small><b>${escHTML(x.l.name)}</b><span>${where}</span></button>`;
  };

  /* ================= PROGRESS (db per viewer, browser copy as fallback) ================= */
  const LS = 'la-progress-v1';
  const today = () => Math.floor(Date.now() / 86400000);
  let PG = { v: 1, updated: 0, problems: {}, cards: {}, notes: {}, lessons: {}, last: null, days: {} };
  try { const raw = localStorage.getItem(LS); if (raw) PG = Object.assign(PG, JSON.parse(raw)); } catch (e) {}
  let dbDoc = null, saveTimer = null, saving = false, pendingSave = false;
  function touch() {
    PG.updated = Date.now(); PG.days = PG.days || {}; PG.days[today()] = (PG.days[today()] || 0) + 1;
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
    if (PG.lessons[key] && PG.lessons[key].read) return .25; // read to the Wrap-up, not just opened
    return 0;
  }
  const streak = () => { const d = PG.days || {}; let n = 0, t = today(); if (!d[t]) t--; while (d[t]) { n++; t--; } return n; };
  const litLeaves = () => TREE.subjects.reduce((a, s) => a + (s.pillars || []).reduce((b, p) => b + p.branches.reduce((c, br) => c + br.leaves.filter(l => mastery(`${s.id}/${l.id}`) >= .5).length, 0), 0), 0);
  const branchMastery = b => { const ls = b.leaves; return ls.reduce((s, l, i) => s + mastery(`${b._sid}/${l.id}`), 0) / ls.length; };
  const pillarMastery = p => { const bs = p.branches; return bs.reduce((s, b) => s + branchMastery(b), 0) / bs.length; };

  /* Title Case for headings, card titles and labels: small words and single-letter symbols stay lowercase; maths and code untouched. */
  const SMALL = new Set(['a', 'an', 'the', 'and', 'or', 'but', 'nor', 'of', 'in', 'on', 'at', 'to', 'for', 'by', 'vs', 'via', 'as', 'with', 'from', 'into', 'per']);
  const TC_SEL = '.lesson-head h1, .prose .sec-h h2, .pc-name, .so-t b, .br-t h3, .tv-hero h2, .toc .t, .lmb button span:last-child, .rl-h b, .cmp-h button, .cmp-h b, .xl-t > b, .mm b, .lnav-b b, .cont h2, .sc-name, .rr-t b, .h1, .sec-title, .branch-nav button, details > summary, .ltabs button, .nq-f b, .tz-h b, .hb-link, .worked .wt, .about-title h2, .op-k, .lbegin h2';
  function tcWord(w, first) {
    const core = w.replace(/[^A-Za-z]/g, '');
    if (!core || /[A-Z]/.test(w)) return w;
    if (!first && (SMALL.has(core.toLowerCase()) || core.length === 1)) return w;
    return w.replace(/[a-z]/, c => c.toUpperCase());
  }
  function titleCase(root) {
    if (!root) return;
    root.querySelectorAll(TC_SEL).forEach(el => {
      const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest('.katex, .tx, code, .count, .lv, small') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      let first = true, n;
      while ((n = walk.nextNode())) n.textContent = n.textContent.split(/(\s+)/).map(w => { if (!w || /^\s+$/.test(w)) return w; const r = tcWord(w, first); first = false; return r; }).join('');
    });
  }


  /* ---------- maths: the data carries TeX (<span class="tx">); KaTeX (loaded once, then cached) draws it on screen ---------- */
  let katexP = null;
  const loadKatex = () => katexP ||= new Promise((res, rej) => { if (window.katex) return res(); const sc = document.createElement('script'); sc.src = 'katex.min.js'; sc.onload = () => res(); sc.onerror = () => { katexP = null; rej(); }; document.head.appendChild(sc); });
  function renderTex(root) {
    const els = [...root.querySelectorAll('.tx:not(.ok)')]; if (!els.length) return;
    loadKatex().then(() => els.forEach(el => { if (el.classList.contains('ok')) return; const t = el.textContent;
      try { window.katex.render(t, el, { displayMode: el.classList.contains('dm'), throwOnError: false, strict: 'ignore', output: 'html' }); el.classList.add('ok'); el.setAttribute('aria-label', t); } catch (e) { /* leave the TeX visible */ } })).catch(() => {});
  }
  new MutationObserver(ms => { for (const m of ms) for (const n of m.addedNodes) if (n.nodeType === 1 && !n.closest('.katex')) renderTex(n.parentElement || n); }).observe(document.body, { childList: true, subtree: true });

  /* ---------- a brainy loader: a fact while data arrives ---------- */
  const BRAINY = [
    ['f', 'Sunlight takes about 8 minutes 20 seconds to reach Earth, so you always see the Sun as it was a little in the past.'],
    ['f', 'Sound covers about 1 km in 3 seconds. Count the seconds between lightning and thunder, divide by 3, and you have the distance in km.'],
    ['f', 'Water is densest at about 4 °C. That is why lakes freeze from the top down and fish survive the winter below the ice.'],
    ['f', 'Electrons in a wire drift slower than a millimetre per second, yet a bulb lights at once: the electric field travels at nearly the speed of light.'],
    ['f', 'A 4-digit PIN has 10,000 possible values; a 6-digit PIN has a million. Two more digits, a hundred times harder to guess.'],
    ['f', 'Binary search on a sorted list of a million names needs at most 20 looks. Double the list and it needs just one more.'],
    ['f', 'The lens of your eye forms an upside-down image on the retina; your brain turns it the right way up.'],
    ['f', 'A rainbow is really a full circle. The ground hides the lower half; from an aeroplane you can sometimes see all of it.'],
    ['f', 'The sky is blue because air scatters short (blue) wavelengths several times more strongly than long (red) ones.'],
    ['f', 'There are more ways to shuffle a deck of 52 cards (about 8 × 10⁶⁷) than there are atoms making up the Earth.'],
    ['f', 'On the Moon you would weigh about one-sixth of what you weigh on Earth, though your mass would not change at all.'],
    ['f', 'Young Gauss is said to have added 1 to 100 in seconds: pair 1 + 100, 2 + 99, … that is 50 pairs of 101, so 5050.'],
    ['f', 'Drive somewhere at 40 km/h and back at 60 km/h, and your average speed is 48 km/h, not 50: you spend longer at the slower speed.'],
    ['f', 'A 1 km train going through a 1 km tunnel must travel 2 km before it is fully out: the tunnel plus its own length.'],
    ['f', 'Anything that doubles every day is only half done on the day before it finishes. Exponential growth stays hidden until the very end.'],
    ['f', 'In most programming languages 0.1 + 0.2 gives 0.30000000000000004, because computers store numbers in binary and 0.1 has no exact binary form.']
  ];
  let brainyI = Math.floor(Math.random() * BRAINY.length);
  const brainyCard = () => `<div class="bl-card"><span class="bl-k">Did you know?</span><p>${BRAINY[brainyI++ % BRAINY.length][1]}</p></div>`;
  const loaderHTML = label => `<div class="loading bl"><svg class="bl-orb" viewBox="-50 -50 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" opacity=".3"><ellipse rx="42" ry="14"/><ellipse rx="42" ry="14" transform="rotate(60)"/><ellipse rx="42" ry="14" transform="rotate(-60)"/></g><circle class="bl-core" r="7" fill="currentColor"/>
    ${[[0, 1.4, 'var(--eng)'], [60, 1.9, 'var(--mat)'], [-60, 2.4, 'var(--chem)']].map(([r, d, c]) => `<g transform="rotate(${r})"><circle r="4.5" fill="${c}"><animateMotion dur="${d}s" repeatCount="indefinite" path="M42,0 A42,14 0 1,1 -42,0 A42,14 0 1,1 42,0"/></circle></g>`).join('')}</svg>
    <div class="bl-l">${label}</div><div class="bl-slot">${brainyCard()}</div></div>`;
  // A long wait gets a new fact every 9 seconds.
  setInterval(() => document.querySelectorAll('.bl-slot').forEach(sl => { sl.innerHTML = brainyCard(); }), 9000);
  { const boot = document.getElementById('boot'); if (boot) boot.innerHTML = loaderHTML('Opening Polymath…'); }
  // Light/dark toggle: follows the device until the reader picks one; the choice is remembered in this browser.
  const darkNow = () => (document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark';
  function paintThemeBtns() { const d = darkNow();
    document.querySelectorAll('[data-theme-toggle]').forEach(b => { b.innerHTML = `${ico(d ? 'sun' : 'moon')}<span class="tb-l">${d ? 'Light mode' : 'Dark mode'}</span>`; b.setAttribute('aria-pressed', d); });
    const m = document.querySelector('meta[name="theme-color"]:not([media])'); if (m) m.content = d ? '#0E1124' : '#F7F7FB'; }
  document.addEventListener('click', e => { if (!e.target.closest('[data-theme-toggle]')) return; const t = darkNow() ? 'light' : 'dark';
    document.documentElement.dataset.theme = t; try { localStorage.setItem('pm-theme', t); } catch (err) {} paintThemeBtns(); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', paintThemeBtns);
  paintThemeBtns();
  // Google Fonts load without blocking the first paint (the link starts as media=print); system fonts show until they arrive.
  { const gf = document.getElementById('gfonts'); if (gf) { if (gf.sheet) gf.media = 'all'; else gf.addEventListener('load', () => { gf.media = 'all'; }); } }

  /* ================= STATE + ROUTER ================= */
  const S = { subj: 'phy', pillar: null, branch: null, leaf: null, mode: 'subject', cls: 10, ltab: 'learn', depth: 4, lessonKey: null,
    set: [], setName: '', from: 'practice', idx: 0, hintN: {}, solShown: {}, checked: {}, revQueue: [], revIdx: 0, revShown: false };
  const NAV_OF = { lesson: 'learn', play: 'practice' };
  const RENDER = {};
  let pendingSection = null;
  function parseHash() {
    const h = (location.hash || '#home').slice(1);
    if (h.startsWith('lesson~')) { const [, sid, lid] = h.split('~'); return { v: 'lesson', key: `${sid}/${lid}` }; }
    if (h.startsWith('learn~')) { const [, sid, pid] = h.split('~'); return { v: 'learn', sid, pid }; }
    return { v: ['home', 'learn', 'practice', 'play', 'review', 'lesson', 'progress', 'notebook'].includes(h) ? h : 'home' };
  }
  function route() {
    if (!TREE) return;
    { const boot = document.getElementById('boot'); if (boot) boot.remove(); }
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
    RENDER[v](); titleCase(document.querySelector('main'));
    if (!pendingSection) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  const go = v => { if (location.hash === '#' + v) route(); else location.hash = v; };
  const openLesson = (key, tab = 'learn', section = null) => { S.ltab = tab; S.tabSet = true; pendingSection = section; go('lesson~' + key.replace('/', '~')); };
  function rerender() { if (TREE) route(); }

  /* ================= HOME ================= */
  $('today-date').textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
  { const hr = new Date().getHours(); $('greet').textContent = (hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening') + '. One idea today?'; }
  // Home-page sparks live in extras.json, fetched the first time Home is shown.
  let extrasP = null;
  const loadExtras = () => extrasP ||= fetchJSON('data/extras.json').then(ex => { Object.entries(ex).forEach(([k, sp]) => { const L = leafByKey(k); if (L) L.l.sparks = sp; }); if (parseHash().v === 'home') { RENDER.home(); titleCase($('habits')); } }).catch(() => { extrasP = null; });
  RENDER.home = () => {
    loadExtras();
    const live = liveLeaves().filter(x => x.l.live);
    const lastKey = PG.last && leafByKey(PG.last) && leafByKey(PG.last).l.live ? PG.last : (live[0] && live[0].key);
    const C = $('continue');
    if (lastKey) {
      const L = leafByKey(lastKey), n = L.l.problems || 0;
      const got = Object.entries(PG.problems).filter(([k, v]) => k.startsWith(lastKey + '#') && v.r === 'got').length;
      const idx = L.b.leaves.findIndex(l => l.id === L.l.id), next = L.b.leaves[idx + 1];
      C.innerHTML = `<div class="cont s-${L.s.id}"><span class="tile cont-tile">${ico(SUBJ_ICON[L.s.id])}</span>
        <div class="eyebrow">${PG.last ? 'Continue where you left off' : 'Start here'}</div>
        <div class="cont-path">${escHTML(L.s.name)} › ${escHTML(L.p.name)} › ${escHTML(L.b.name)}</div>
        <h2>${escHTML(L.l.name)}</h2>
        ${L.l.summary ? `<p class="cont-sum">${escHTML(L.l.summary)}</p>` : ''}
        <div class="cont-row"><span class="meter"><i style="width:${n ? Math.round(got / n * 100) : 0}%"></i></span><span>${got} of ${n} problems solved</span>${next ? `<span class="muted">Next: ${escHTML(next.name)}</span>` : ''}</div>
        <div class="acts"><button class="btn" data-open="${lastKey}">${PG.last ? 'Resume lesson' : 'Open lesson'}</button><button class="btn ghost" data-open="${lastKey}" data-tab="practice">Practise it</button></div></div>`;
    } else C.innerHTML = '';
    const dc = dueCards().length, dp = dueProblems().length;
    $('due-title').textContent = dc + dp ? `${dc + dp} due for review` : 'Nothing due yet';
    $('due-text').textContent = dc + dp ? `${dc} cards and ${dp} problems, timed to come back just before you forget them.` : 'Memorise a core idea or rate problems, and they come back here at growing intervals.';
    const solved = Object.values(PG.problems).filter(v => v.r === 'got').length;
    const allLeaves = TREE.subjects.flatMap(s => (s.pillars || []).flatMap(leavesOf));
    const day = today(), pick = (arr, salt) => arr.length ? arr[(day * 7919 + salt) % arr.length] : null;
    const opened = live.filter(x => PG.lessons[x.key]);
    const loops = opened.filter(x => x.l.nextq && !PG.lessons[x.l.nextq.leaf]).map(x => ({ q: x.l.nextq.q, to: x.l.nextq.leaf, from: x.l.name }));
    const tease = pick(live.filter(x => !PG.lessons[x.key] && x.l.ask), 3);
    const loopHTML = loops.length ? loops.slice(0, 2).map(o => { const T = leafByKey(o.to), ok = T && T.l.live;
      return `<button class="loop" ${ok ? `data-open="${o.to}"` : 'disabled'}><span class="loop-q">${o.q}</span><span class="loop-f">left open by ${escHTML(o.from)} · ${ok ? 'close it →' : 'answer coming soon'}</span></button>`; }).join('')
      + (loops.length > 2 ? `<a class="hb-link hb-more" href="#progress">+ ${loops.length - 2} more open question${loops.length > 3 ? 's' : ''}</a>` : '')
      : tease ? `<button class="loop" data-open="${tease.key}"><span class="loop-q">${tease.l.ask}</span><span class="loop-f">${escHTML(tease.l.name)} · find out →</span></button>` : '';
    const sparks = live.flatMap(x => (x.l.sparks || []).map(s2 => ({ ...s2, key: x.key, name: x.l.name })));
    const sp = pick(sparks, 11), askx = pick(live.filter(x => x.s.id !== 'eng' && x.l.ask && x.l.ask.length > 45 && /\?\s*$/.test(x.l.ask.replace(/<[^>]+>/g, '')) && (!tease || x.key !== tease.key)), 5);
    const can = opened.flatMap(x => (x.l.can || []).slice(0, 1));
    $('habits').innerHTML = `
      <div class="hb loops"><div class="hb-k">${loops.length ? 'Questions you left open' : 'A question worth chasing'}</div><p class="hb-s">${loops.length ? 'Your mind keeps unfinished questions alive. Close one today.' : 'Pick it up, and the answer is one lesson away.'}</p>${loopHTML}</div>
      <div class="hb spark">${sp ? `<div class="hb-k">Today's spark · ${escHTML(sp.t)}</div><p class="sp-t">${sp.h}</p><button class="hb-link" data-open="${sp.key}">from ${escHTML(sp.name)} →</button>` : ''}${askx ? `<div class="ask"><b>Ask someone today</b><p>${askx.l.ask}</p><button class="hb-link" data-open="${askx.key}">the answer →</button></div>` : ''}</div>
      <div class="hb can"><div class="hb-k">You can now explain</div>${can.length ? `<div class="hb-n">${can.length}</div><ul>${can.slice(-4).reverse().map(c => `<li>${ico('check')}<span>${c}</span></li>`).join('')}</ul><a class="hb-link hb-more" href="#progress">Ideas you could teach a friend →</a>` : '<p class="hb-s">Every lesson you finish adds something here you can explain to anyone, at dinner, in an interview, to a curious kid.</p>'}</div>`;

    $('live-count').textContent = `${live.length} lessons live`;
    $('subj-list').innerHTML = TREE.subjects.map(s => {
      const ls = (s.pillars || []).flatMap(leavesOf), nLive = countLive(ls), pct = Math.round(avgMastery(s.id, ls) * 100);
      return `<button class="subj-card s-${s.id} ${s.pillars ? '' : 'soon'}" data-open-subj="${s.id}">
        <span class="sc-top"><span class="tile">${ico(SUBJ_ICON[s.id])}</span>${s.pillars ? `<span class="sc-pc" title="Your progress">${pct}%</span>` : ''}</span>
        <span class="sc-name">${escHTML(s.name)}</span>
        <span class="sc-sub">${s.pillars ? (nLive ? `${nLive} of ${ls.length} lessons` : `${ls.length} lessons mapped, coming soon`) : 'Coming soon'}</span><span class="meter" title="Your progress"><i style="width:${s.pillars ? Math.max(2, pct) : 0}%"></i></span></button>`;
    }).join('');
  };
  $('continue').addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openLesson(b.dataset.open, b.dataset.tab || 'learn'); });
  $('subj-list').addEventListener('click', e => { const b = e.target.closest('[data-open-subj]'); if (b) go('learn~' + b.dataset.openSubj); });
  $('habits').addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openLesson(b.dataset.open); });

  /* ================= PROGRESS ================= */
  const SUBJ_ORDER = ['phy', 'mat', 'chem', 'eng', 'cs', 'bio'];   // colour-blind-checked adjacency
  const RANKS = [[15, 'Polymath'], [10, 'Scholar'], [6, 'Adept'], [3, 'Apprentice'], [1, 'Curious']];
  const XP_LVL = { ncert: 10, found: 10, board: 15, main: 20, adv: 30, oly: 50 };
  const lvlOfId = id => /^ncert/.test(id) ? 'ncert' : ({ f: 'found', b: 'board', m: 'main', a: 'adv', o: 'oly' })[id[0]] || 'ncert';
  const dayOf = ts => Math.floor((ts || 0) / 86400000);
  const xpNeed = n => 50 * n * (n - 1);
  function stats() {
    const live = liveLeaves().filter(x => x.l.live);
    const opened = live.filter(x => PG.lessons[x.key]).map(x => ({ ...x, ts: PG.lessons[x.key].opened || PG.updated || Date.now() }));
    const probs = Object.entries(PG.problems).map(([k, v]) => ({ key: k.split('#')[0], id: k.split('#')[1] || '', ...v }));
    const got = probs.filter(p => p.r === 'got');
    const notes = Object.entries(PG.notes || {}).filter(([, t]) => t && t.trim());
    const seen = Object.values(PG.cards).reduce((a, c) => a + (c.seen || 0), 0);
    const xpOf = (lsn, gp, sh) => lsn.length * 10 + gp.reduce((a, p) => a + XP_LVL[lvlOfId(p.id)], 0) + sh.length * 4;
    const shaky = probs.filter(p => p.r === 'shaky');
    const xp = xpOf(opened.filter(x => PG.lessons[x.key].read), got, shaky) + seen * 2 + notes.length * 15;
    let level = 1; while (xpNeed(level + 1) <= xp) level++;
    const rank = RANKS.find(([n]) => level >= n)[1];
    const days = [...Object.keys(PG.days || {}).map(Number), ...opened.map(x => dayOf(x.ts)), ...probs.map(p => dayOf(p.at))].filter(Boolean);
    const start = days.length ? Math.min(...days) : today();
    const byDay1 = arr => arr.filter(x => dayOf(x.ts || x.at) <= start);
    const subjects = a => new Set(a.map(x => (x.s ? x.s.id : x.key.split('/')[0]))).size;
    const allLeaves = TREE.subjects.reduce((a, s2) => a + (s2.pillars || []).reduce((b, p) => b + leavesOf(p).length, 0), 0);
    const wk = today() - ((new Date().getDay() + 6) % 7);
    const weekXp = xpOf(opened.filter(x => dayOf(x.ts) >= wk), got.filter(p => dayOf(p.at) >= wk), shaky.filter(p => dayOf(p.at) >= wk));
    return { live, opened, got, notes, seen, xp, level, rank, start, byDay1, subjects, allLeaves, weekXp };
  }
  function starXY(key, sid) {
    const C = { phy: [70, 62], mat: [62, 150], chem: [130, 108], eng: [195, 52], cs: [192, 146], bio: [128, 172] }[sid] || [130, 100];
    let h = 2166136261; for (const ch of key) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    const a = ((h >>> 0) % 6283) / 1000, r = 8 + ((h >>> 12) % 34);
    return [C[0] + Math.cos(a) * r * 1.25, C[1] + Math.sin(a) * r * .85];
  }
  function sky(live, litSet, label) {
    const by = {}; live.forEach(x => (by[x.s.id] ||= []).push(x));
    let lines = '', dots = '';
    Object.entries(by).forEach(([sid, arr]) => {
      let prev = null;
      arr.forEach((x, i) => { const [cx, cy] = starXY(x.key, sid), lit = litSet.has(x.key);
        if (lit && prev && i % 3) lines += `<line x1="${prev[0].toFixed(1)}" y1="${prev[1].toFixed(1)}" x2="${cx.toFixed(1)}" y2="${cy.toFixed(1)}" stroke="var(--${sid})" stroke-opacity=".5"/>`;
        if (lit) prev = [cx, cy];
        dots += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${lit ? 2.4 : 1.1}" fill="${lit ? `var(--${sid})` : '#ECEEF8'}" fill-opacity="${lit ? 1 : .22}"/>`; });
    });
    return `<svg viewBox="0 0 260 200" role="img" aria-label="${label}"><rect width="260" height="200" rx="14" fill="#11142A"/>${lines}${dots}</svg>`;
  }
  RENDER.progress = () => {
    const st = stats(), live = st.live;
    const cur = xpNeed(st.level), nxt = xpNeed(st.level + 1), frac = (st.xp - cur) / (nxt - cur);
    const C = 2 * Math.PI * 52;
    const nextRank = (RANKS.slice().reverse().find(([n]) => n > st.level) || [null, null])[1];
    const d1 = { o: st.byDay1(st.opened), g: st.byDay1(st.got) };
    const pctLit = n => Math.round(n / st.allLeaves * 100);
    const tn = [
      ['Ideas you can explain', d1.o.length, st.opened.length],
      ['Problems solved', d1.g.length, st.got.length],
      ['Subjects explored', st.subjects(d1.o), st.subjects(st.opened)],
      ['Knowledge tree lit', pctLit(d1.o.length) + '%', pctLit(litLeaves() || st.opened.length) + '%']];
    const daysIn = today() - st.start + 1;
    // radar
    const R = 100, pt = (i, v) => { const a = (-90 + i * 60) * Math.PI / 180; return `${(Math.cos(a) * R * v).toFixed(1)},${(Math.sin(a) * R * v).toFixed(1)}`; };
    const share = (sid, arr) => { const n = live.filter(x => x.s.id === sid).length; return n ? arr.filter(x => x.s.id === sid).length / n : 0; };
    const poly = arr => SUBJ_ORDER.map((sid, i) => pt(i, Math.max(share(sid, arr), .03))).join(' ');
    const rings = [.25, .5, .75, 1].map(f => `<polygon points="${SUBJ_ORDER.map((_, i) => pt(i, f)).join(' ')}" fill="none" stroke="var(--rule)"/>`).join('');
    const axes = SUBJ_ORDER.map((sid, i) => { const [x, y] = pt(i, 1).split(','), [lx, ly] = pt(i, 1.22).split(','); return `<line x1="0" y1="0" x2="${x}" y2="${y}" stroke="var(--rule)"/><text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle">${({ phy: 'Physics', mat: 'Maths', chem: 'Chemistry', eng: 'English', cs: 'Computing', bio: 'Biology' })[sid]}</text>`; }).join('');
    // weekly chart
    const weeks = Math.max(2, Math.min(8, Math.ceil(daysIn / 7)));
    const vals = Array.from({ length: weeks }, (_, i) => { const end = today() - (weeks - 1 - i) * 7; return st.opened.filter(x => dayOf(x.ts) <= end).length; });
    const top = Math.max(4, ...vals), X = i => 50 + i * (580 / (weeks - 1)), Y = v => 160 - v / top * 140;
    const line = vals.map((v, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)} ${Y(v).toFixed(1)}`).join(' ');
    const ticks = [0, Math.round(top / 2), top].map(v => `<line x1="40" x2="636" y1="${Y(v).toFixed(1)}" y2="${Y(v).toFixed(1)}" stroke="var(--rule)"/><text x="32" y="${Y(v).toFixed(1)}" text-anchor="end" dominant-baseline="middle">${v}</text>`).join('');
    const wl = vals.map((_, i) => `<text x="${X(i).toFixed(1)}" y="184" text-anchor="middle">${i === weeks - 1 ? 'now' : 'W' + (i + 1)}</text>`).join('');
    // open questions
    const loops = st.opened.filter(x => x.l.nextq && !PG.lessons[x.l.nextq.leaf]).map(x => ({ q: x.l.nextq.q, to: x.l.nextq.leaf, from: x.l.name }));
    // badges
    const subjN = st.subjects(st.opened), olyGot = st.got.some(p => lvlOfId(p.id) === 'oly'), advGot = st.got.some(p => lvlOfId(p.id) === 'adv');
    const pillarDone = TREE.subjects.some(s2 => (s2.pillars || []).some(p => { const ls = leavesOf(p).filter(l => l.live); return ls.length >= 5 && ls.every(l => PG.lessons[`${s2.id}/${l.id}`]); }));
    const B = (name, how, icon, sid, ok, prog) => ({ name, how, icon, sid, ok, prog });
    const badges = [
      B('First step', 'Open your first lesson', 'navLearn', 'phy', st.opened.length >= 1, `${Math.min(st.opened.length, 1)}/1`),
      B('First principles', 'Finish 10 lessons', 'logo', 'phy', st.opened.length >= 10, `${Math.min(st.opened.length, 10)}/10`),
      B('Problem solver', 'Solve 25 problems', 'navPractice', 'mat', st.got.length >= 25, `${Math.min(st.got.length, 25)}/25`),
      B('Century', 'Solve 100 problems', 'navPractice', 'mat', st.got.length >= 100, `${Math.min(st.got.length, 100)}/100`),
      B('In your own words', 'Write 5 notes', 'navNotebook', 'eng', st.notes.length >= 5, `${Math.min(st.notes.length, 5)}/5`),
      B('Memory keeper', 'Recall 50 cards', 'navReview', 'cs', st.seen >= 50, `${Math.min(st.seen, 50)}/50`),
      B('Pillar complete', 'Open every lesson of one pillar', 'navProgress', 'chem', pillarDone, pillarDone ? 'done' : 'not yet'),
      B('Teacher', 'Explain 50 ideas', 'navYou', 'bio', st.opened.length >= 50, `${Math.min(st.opened.length, 50)}/50`),
      B('Polymath', 'Lessons in 4 subjects', 'atom', 'eng', subjN >= 4, `${Math.min(subjN, 4)}/4`),
      B('Deep end', 'Solve a JEE Advanced or SDE-2 problem', 'flask', 'chem', advGot, advGot ? 'done' : '0/1'),
      B('Olympian', 'Solve an Olympiad or system-design problem', 'navProgress', 'cs', olyGot, olyGot ? 'done' : '0/1'),
      B('Note master', 'Write 25 notes', 'navNotebook', 'bio', st.notes.length >= 25, `${Math.min(st.notes.length, 25)}/25`)];
    const earned = badges.filter(b => b.ok).length;
    $('prog').innerHTML = `
      <div class="pg-head"><div><div class="eyebrow">Progress · ${daysIn} day${daysIn > 1 ? 's' : ''} since you started</div><h1 class="h1">Look how far you have come</h1></div>
        <a class="btn ghost phone-only" href="#notebook">${ico('navNotebook')}Notebook</a></div>
      <div class="pg-row r3">
        <div class="pg-level"><div class="pg-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="10"/><circle cx="60" cy="60" r="52" fill="none" stroke="#9D8BFF" stroke-width="10" stroke-linecap="round" stroke-dasharray="${(C * Math.max(.02, frac)).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 60 60)"/></svg><div><b>${st.level}</b><small>LEVEL</small></div></div>
          <div class="pg-lv-t"><b>${st.rank}</b><span>${st.xp.toLocaleString('en-IN')} / ${nxt.toLocaleString('en-IN')} XP to level ${st.level + 1}${nextRank ? ` · next title: ${nextRank}` : ''}</span><small>XP comes from lessons, problems solved (more for harder levels), cards recalled and notes written. Never from time spent.</small></div></div>
        <div class="panel pg-then span2"><div class="pg-h"><h2>You on day 1 → you today</h2></div>
          <div class="pg-tn">${tn.map(([k, a, b]) => `<div><span>${k}</span><b>${b}</b><small>was ${a} on day 1</small></div>`).join('')}</div></div>
      </div>
      <div class="pg-row r2">
        <div class="pg-sky"><div class="pg-h"><h2>Your sky of ideas</h2><span>each star is a lesson; it lights up once you study it</span></div>
          <div class="pg-skies"><figure>${sky(live, new Set(d1.o.map(x => x.key)), 'Day 1')}<figcaption>Day 1 · ${d1.o.length} star${d1.o.length === 1 ? '' : 's'}</figcaption></figure><figure>${sky(live, new Set(st.opened.map(x => x.key)), 'Today')}<figcaption>Today · ${st.opened.length} of ${live.length} stars</figcaption></figure></div>
          <div class="pg-key">${SUBJ_ORDER.filter(sid => live.some(x => x.s.id === sid)).map(sid => `<span><i style="background:var(--${sid})"></i>${escHTML(subjOf(sid).name)}</span>`).join('')}</div></div>
        <div class="panel"><div class="pg-h"><h2>Your shape, then and now</h2><span>share of each subject's lessons studied</span></div>
          <div class="pg-radar"><svg viewBox="-150 -132 300 264" role="img" aria-label="Radar chart of subjects studied, day 1 compared with today">${rings}${axes}<polygon points="${poly(st.opened)}" fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/><polygon points="${poly(d1.o)}" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/></svg>
          <div class="pg-legend"><span><i class="dash"></i>Day 1</span><span><i class="fill"></i>Today</span></div></div></div>
      </div>
      <div class="pg-row r3">
        <div class="panel span2"><div class="pg-h"><h2>Ideas you can explain, week by week</h2><span>${st.opened.length} total</span></div>
          <svg class="pg-line" viewBox="0 0 650 194" role="img" aria-label="Line chart of lessons studied over the last ${weeks} weeks">${ticks}${wl}<path d="${line} L${X(weeks - 1).toFixed(1)} 160 L${X(0)} 160 Z" fill="var(--accent)" fill-opacity=".1"/><path d="${line}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="${X(weeks - 1).toFixed(1)}" cy="${Y(vals[weeks - 1]).toFixed(1)}" r="5" fill="var(--accent)" stroke="var(--surface)" stroke-width="2"/></svg></div>
        <div class="panel pg-league"><div class="pg-h"><h2>Weekly league</h2><span class="pill">this week</span></div>
          <div class="lg-row me"><span>1</span><i>You</i><b>You</b><em>${st.weekXp} XP</em></div>
          <p class="hb-s">Your league fills up when you share Polymath with friends: everyone's XP this week, ranked, reset every Monday. XP counts understanding, never hours online.</p></div>
      </div>
      ${loops.length ? `<div class="panel pg-loops"><div class="pg-h"><h2>Questions you left open</h2><span>${loops.length}</span></div><div class="pg-lq">${loops.map(o => { const T = leafByKey(o.to), ok = T && T.l.live; return `<button class="loop" ${ok ? `data-open="${o.to}"` : 'disabled'}><span class="loop-q">${o.q}</span><span class="loop-f">left open by ${escHTML(o.from)} · ${ok ? 'close it →' : 'answer coming soon'}</span></button>`; }).join('')}</div></div>` : ''}
      <div class="panel pg-badges"><div class="pg-h"><h2>Badges</h2><span>${earned} of ${badges.length} earned</span></div>
        <div class="bd-grid">${badges.map(b => `<div class="bd ${b.ok ? 'ok s-' + b.sid : ''}"><span class="bd-i">${ico(b.ok ? b.icon : 'lock')}</span><b>${b.name}</b><span>${b.how}</span><small>${b.ok ? 'earned' : b.prog}</small></div>`).join('')}</div></div>`;
  };
  $('prog').addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openLesson(b.dataset.open); });

  /* ================= NOTEBOOK ================= */
  RENDER.notebook = () => {
    const live = liveLeaves().filter(x => x.l.live);
    const notes = Object.entries(PG.notes || {}).filter(([k, t]) => t && t.trim() && leafByKey(k)).sort((a, b) => (PG.lessons[b[0]] || {}).opened - (PG.lessons[a[0]] || {}).opened);
    const todo = live.filter(x => PG.lessons[x.key] && !(PG.notes || {})[x.key]).slice(0, 6);
    $('nb').innerHTML = `
      <div class="head"><div class="eyebrow">Notebook</div><h1 class="h1">In your own words</h1><p class="lede">Explaining an idea yourself is the surest test that you understand it. Everything you write in a lesson's "My notes" tab collects here.</p></div>
      ${notes.length ? `<div class="nb-list">${notes.map(([k, t]) => { const L = leafByKey(k); return `<div class="nb-card s-${L.s.id}"><div class="nb-h"><span class="tile sm">${ico(SUBJ_ICON[L.s.id])}</span><div><b>${escHTML(L.l.name)}</b><span>${escHTML(L.s.name)} › ${escHTML(L.p.name)}</span></div><button class="btn quiet" data-open="${k}">Open lesson</button></div><textarea data-note="${k}" aria-label="Your note on ${escHTML(L.l.name)}">${escHTML(t)}</textarea></div>`; }).join('')}</div>`
        : `<div class="panel empty-card">${ico('navNotebook')}<p>No notes yet. Open any lesson, switch to its <b>My notes</b> tab, and explain the idea as if to a friend.</p></div>`}
      ${todo.length ? `<div class="sec-title">Explain one of these next</div><div class="nb-todo">${todo.map(x => `<button class="nb-t s-${x.s.id}" data-notes="${x.key}"><span class="tile sm">${ico(SUBJ_ICON[x.s.id])}</span><span>${escHTML(x.l.name)}</span>${ico('chev', 'chev')}</button>`).join('')}</div>` : ''}`;
  };
  let nbT; $('nb').addEventListener('input', e => { const t = e.target.closest('[data-note]'); if (!t) return; clearTimeout(nbT); nbT = setTimeout(() => { PG.notes[t.dataset.note] = t.value; touch(); }, 700); });
  $('nb').addEventListener('click', e => { const b = e.target.closest('[data-open],[data-notes]'); if (!b) return; if (b.dataset.notes) openLesson(b.dataset.notes, 'notes'); else openLesson(b.dataset.open); });

  /* ---------- search: a command palette (Ctrl/⌘ K, "/", or any search button), fuzzy over everything ---------- */
  let searchP = null, TOK = null;
  const tokens = t => t.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').split(/[^a-z0-9]+/).filter(w => w.length > 1);
  function loadSearch() {
    return searchP ||= fetchJSON('data/search.json').then(list => {
      SEARCH = list; TOK = new Map();
      list.forEach((x, i) => { x.lt = x.t.toLowerCase(); x.la = (x.t + ' ' + x.p + ' ' + x.x).toLowerCase();
        for (const w of new Set(tokens(x.t + ' ' + x.p + ' ' + x.x))) { let a = TOK.get(w); if (!a) TOK.set(w, a = []); a.push(i); } });
      if (!$('cmdk').hidden) paletteRender();
    }).catch(() => { searchP = null; });
  }
  function near(a, b, k) { // edit distance ≤ k (small k, short words)
    if (Math.abs(a.length - b.length) > k) return false;
    let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
    for (let i = 1; i <= a.length; i++) { const cur = [i]; let best = i;
      for (let j = 1; j <= b.length; j++) { cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); best = Math.min(best, cur[j]); }
      if (best > k) return false; prev = cur; }
    return prev[b.length] <= k;
  }
  // Entries matching one query word: any token that contains it, starts with it, or is one or two typos away.
  function wordHits(w) {
    const out = new Set(), k = w.length >= 7 ? 2 : w.length >= 4 ? 1 : 0;
    for (const [t, ids] of TOK) if (t.includes(w) || (k && t.length >= 3 && near(w, t.length > w.length + k ? t.slice(0, w.length + k) : t, k))) ids.forEach(i => out.add(i));
    return out;
  }
  function subseq(q, t) { // fzf-style: every letter of q in order; bonus for runs and word starts
    let j = 0, sc = 0, run = 0;
    for (let i = 0; i < t.length && j < q.length; i++) if (t[i] === q[j]) { run++; sc += 1 + run + (i === 0 || /[^a-z0-9]/.test(t[i - 1]) ? 3 : 0); j++; } else run = 0;
    return j === q.length ? sc : 0;
  }
  const PAGES = [['Home', 'home', 'navHome'], ['Learn', 'learn', 'navLearn'], ['Practice', 'practice', 'navPractice'], ['Review', 'review', 'navReview'], ['Notebook', 'notebook', 'navNotebook'], ['Progress', 'progress', 'navProgress']];
  function commands() {
    const cmds = PAGES.map(([t, v, i]) => ({ g: 'Go to', t, p: 'Page', i, run: () => go(v) }));
    cmds.push({ g: 'Go to', t: "Today's problem set", p: 'Practice · mixed topics and levels', i: 'shuffle', run: async () => startSet(dailySet(await sampleProblems(8, undefined, true)), "Today's mixed set", 0) });
    cmds.push({ g: 'Go to', t: 'Browse NCERT books by class', p: 'Learn · class view', i: 'chapter', run: () => { S.mode = 'class'; go('learn'); } });
    TREE.subjects.forEach(sj => cmds.push({ g: 'Go to', t: sj.name, p: 'Subject', i: SUBJ_ICON[sj.id], c: sj.id, run: () => { S.mode = 'subject'; go('learn~' + sj.id); } }));
    return cmds;
  }
  let HITS = [], ACT = 0;
  const hlw = (t, ws) => { let h = escHTML(t); ws.filter(w => w.length > 1).sort((a, b) => b.length - a.length).forEach(w => { h = h.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![^<]*>)', 'ig'), '<mark>$1</mark>'); }); return h; };
  function paletteResults(raw) {
    const q = raw.trim().toLowerCase(), ws = tokens(q), groups = [];
    const cmds = commands();
    if (!q) {
      const recent = Object.entries(PG.lessons).sort((a, b) => (b[1].opened || 0) - (a[1].opened || 0)).map(([k]) => k).filter(k => leafByKey(k) && leafByKey(k).l.live);
      if (PG.last && leafByKey(PG.last)) recent.unshift(PG.last);
      const rec = [...new Set(recent)].slice(0, 4).map(k => { const L = leafByKey(k); return { g: 'Recent lessons', t: L.l.name, p: `${L.s.name} › ${L.p.name}`, i: 'lesson', c: L.s.id, run: () => openLesson(k) }; });
      if (rec.length) groups.push(['Recent lessons', rec]);
      groups.push(['Go to', cmds]);
      return groups;
    }
    const scoreCmd = c => { const t = c.t.toLowerCase(); return t.startsWith(q) ? 90 : t.includes(q) ? 70 : subseq(q.replace(/\s+/g, ''), t); };
    const cm = cmds.map(c => [c, scoreCmd(c)]).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([c]) => c);
    if (cm.length) groups.push(['Go to', cm]);
    if (!TOK) { groups.push(['Searching', [{ g: '', t: 'Loading the search index…', p: 'One moment', i: 'search', run: () => {} }]]); return groups; }
    let ids = null;
    for (const w of ws.length ? ws : [q]) { const h = wordHits(w); ids = ids ? new Set([...ids].filter(i => h.has(i))) : h; if (!ids.size) break; }
    let cand = [...(ids || [])];
    if (!cand.length && q.replace(/\s+/g, '').length >= 3) { const qq = q.replace(/\s+/g, ''); cand = SEARCH.map((x, i) => i).filter(i => subseq(qq, SEARCH[i].lt) > qq.length * 2); }
    const scored = cand.map(i => { const x = SEARCH[i], t = x.lt;
      let sc = (t === q ? 120 : 0) + (t.startsWith(q) ? 60 : 0) + (t.includes(q) ? 40 : 0);
      ws.forEach(w => { if (new RegExp('\\b' + w.replace(/[^a-z0-9]/g, '')).test(t)) sc += 14; else if (t.includes(w)) sc += 8; else if (x.la.includes(w)) sc += 3; });
      sc += Math.min(12, subseq(q.replace(/\s+/g, ''), t) / 4) + (x.g === 'Lessons' && !x.go.section ? 10 : 0) - x.t.length / 60;
      return { x, sc }; }).sort((a, b) => b.sc - a.sc);
    const ORDER = [['Lessons', x => x.g === 'Lessons' && !x.go.section, 6], ['Inside lessons', x => x.g === 'Lessons' && x.go.section, 5], ['Topics', x => x.g === 'Topics', 5], ['NCERT chapters', x => x.g === 'NCERT chapters', 4], ['Problems', x => x.g === 'Problems', 5]];
    ORDER.forEach(([name, f, n]) => { const list = scored.filter(h => f(h.x)).slice(0, n).map(h => ({ t: h.x.t, p: h.x.p, x: h.x.go.section ? h.x.x : '', i: h.x.i || SUBJ_ICON[h.x.c], c: h.x.c, run: () => goHit(h.x) })); if (list.length) groups.push([name, list]); });
    return groups;
  }
  function paletteRender() {
    const raw = $('cmdk-q').value, groups = paletteResults(raw), ws = tokens(raw);
    HITS = groups.flatMap(([, l]) => l); ACT = Math.min(ACT, Math.max(0, HITS.length - 1));
    let n = 0;
    $('cmdk-list').innerHTML = groups.map(([g, l]) => `<div class="ck-g"><div class="ck-h">${escHTML(g)}</div>${l.map(h => { const k = n++;
      return `<button class="ck-i${h.c ? ' s-' + h.c : ''}" role="option" id="ck-${k}" data-ck="${k}" aria-selected="${k === ACT}"><span class="tile sm">${ico(h.i || 'search')}</span><span class="ck-t"><b>${hlw(h.t, ws)}</b><small>${escHTML(h.p || '')}${h.x ? ' · ' + hlw(h.x, ws) : ''}</small></span><span class="ck-go">↵</span></button>`; }).join('')}</div>`).join('')
      || `<div class="ck-empty">Nothing matches “${escHTML(raw)}”. Try another word, or fewer words.</div>`;
    $('cmdk-q').setAttribute('aria-activedescendant', HITS.length ? 'ck-' + ACT : '');
  }
  function paletteMove(d) { if (!HITS.length) return; ACT = (ACT + d + HITS.length) % HITS.length;
    $('cmdk-list').querySelectorAll('[data-ck]').forEach(b => b.setAttribute('aria-selected', +b.dataset.ck === ACT));
    const el = $('ck-' + ACT); if (el) el.scrollIntoView({ block: 'nearest' }); $('cmdk-q').setAttribute('aria-activedescendant', 'ck-' + ACT); }
  let lastFocus = null;
  function openPalette(q = '') {
    if (!TREE) return; loadSearch();
    const box = $('cmdk'); if (box.hidden) lastFocus = document.activeElement;
    box.hidden = false; document.documentElement.classList.add('ck-open');
    $('cmdk-q').value = q; ACT = 0; paletteRender(); $('cmdk-q').focus();
  }
  function closePalette() { $('cmdk').hidden = true; document.documentElement.classList.remove('ck-open'); if (lastFocus && lastFocus.focus && lastFocus !== $('q')) lastFocus.focus(); }
  function runHit(h) { if (!h) return; closePalette(); h.run(); }
  async function goHit(x) {
    const g = x.go;
    if (g.problem) { const ps = await getProblems(g.problem); return startSet(ps, leafByKey(g.problem).l.name, g.index); }
    if (g.lesson) return openLesson(g.lesson, 'learn', g.section || null);
    if (g.ncert) { Object.assign(S, { mode: 'class', cls: +g.ncert }); return go('learn'); }
    const sj = subjOf(g.subj), pl = g.pillar != null && sj && sj.pillars ? sj.pillars[g.pillar] : null;
    if (pl && g.branch != null) S.focusBranch = 'br-' + pl.branches[g.branch].id;
    S.mode = 'subject'; go('learn~' + g.subj + (pl ? '~' + pl.id : ''));
  }
  let ckT; $('cmdk-q').addEventListener('input', () => { ACT = 0; cancelAnimationFrame(ckT); ckT = requestAnimationFrame(paletteRender); });
  $('cmdk-q').addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); paletteMove(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); paletteMove(-1); }
    else if (e.key === 'Enter') { e.preventDefault(); runHit(HITS[ACT]); }
    else if (e.key === 'Escape') { e.preventDefault(); closePalette(); }
    else if (e.key === 'Tab') { e.preventDefault(); paletteMove(e.shiftKey ? -1 : 1); }
  });
  $('cmdk').addEventListener('click', e => { const b = e.target.closest('[data-ck]'); if (b) return runHit(HITS[+b.dataset.ck]); if (e.target.closest('[data-ck-close]')) closePalette(); });
  $('cmdk-list').addEventListener('mousemove', e => { const b = e.target.closest('[data-ck]'); if (b && +b.dataset.ck !== ACT) { ACT = +b.dataset.ck; $('cmdk-list').querySelectorAll('[data-ck]').forEach(x => x.setAttribute('aria-selected', x === b)); } });
  document.addEventListener('click', e => { if (e.target.closest('[data-search]')) { e.preventDefault(); openPalette(); } });
  $('q').addEventListener('focus', () => { const v = $('q').value; $('q').blur(); openPalette(v); });
  const IS_MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  document.querySelectorAll('[data-kbd]').forEach(k => k.textContent = IS_MAC ? '⌘K' : 'Ctrl K');
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === 'k') { e.preventDefault(); return $('cmdk').hidden ? openPalette() : closePalette(); }
    if (e.key === '/' && $('cmdk').hidden && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !document.activeElement.isContentEditable) { e.preventDefault(); openPalette(); }
  });

  /* ================= LEARN ================= */
  /* Two levels only: a subject page (pillar cards) and a pillar page (each branch once, as a numbered learning path). */
  const TAGS = { OLY: 'Olympiad', JEE: 'JEE', BEG: 'Foundations', INT: 'SDE-1', ADV: 'SDE-2', SDE: 'SDE-3', LIFE: 'Everyday' };
  const TOP = { sci: ['', 'Class 10', 'Class 12', 'JEE Adv.', 'Olympiad'], cs: ['', 'Foundations', 'SDE-1', 'SDE-2', 'SDE-3'], eng: ['', 'Foundation', 'Class 10', 'Beyond'] };
  // Where the topic starts (tree "from") → how deep the lesson goes (deepest section level).
  const lvlTag = (l, sid) => { const a = TAGS[l.from] || 'Class ' + String(l.from).slice(1), t = l.top ? (TOP[sid] || TOP.sci)[l.top] : '', b = t && t !== a ? t : '';
    const deep = l.top >= 4 || l.from === 'OLY' || l.from === 'SDE', mid = l.top === 3 || l.from === 'JEE' || l.from === 'ADV';
    return `<span class="lvl ${deep ? 'oly' : mid ? 'jee' : ''}" title="${b ? `Starts at ${a}, goes up to ${b}` : a}">${a}${b ? ` → ${b}` : ''}</span>`; };
  const leavesOf = p => p.branches.flatMap(b => b.leaves);
  const countLive = ls => ls.filter(l => l.live).length;
  const avgMastery = (sid, ls) => ls.length ? ls.reduce((a, l) => a + mastery(`${sid}/${l.id}`), 0) / ls.length : 0;
  const ring = (pct, size = 64) => `<span class="ring" style="--v:${pct};width:${size}px;height:${size}px"><b>${pct}%</b></span>`;
  const splitWhat = html => { const i = (html || '').indexOf('</p>'); return i < 0 ? [html || '', ''] : [html.slice(0, i + 4), html.slice(i + 4)]; };
  RENDER.learn = () => {
    const h = parseHash();
    if (h.sid && subjOf(h.sid)) { S.subj = h.sid; S.mode = 'subject'; }
    const s = subjOf(S.subj);
    S.pillar = h.pid && s.pillars ? s.pillars.findIndex(p => p.id === h.pid) : null;
    if (S.pillar < 0) S.pillar = null;
    document.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', b.dataset.mode === S.mode));
    $('by-subject').hidden = S.mode !== 'subject'; $('by-class').hidden = S.mode !== 'class'; $('subj-seg').hidden = S.mode !== 'subject';
    $('learn-head').hidden = S.mode === 'subject' && S.pillar != null;
    $('subj-seg').innerHTML = TREE.subjects.map(x => `<button aria-pressed="${S.subj === x.id}" data-subj="${x.id}"><span class="dot s-${x.id}"></span>${escHTML(x.name === 'Mathematics' ? 'Maths' : x.name)}</button>`).join('');
    if (S.mode === 'subject') renderTree(); else renderClasses();
    if (S.focusBranch) { const id = S.focusBranch; S.focusBranch = null; setTimeout(() => { const el = $(id); if (el) el.scrollIntoView({ block: 'start' }); }, 30); }
  };
  function mapSVG(s) {
    const T = s.pillars, cx = 190, cy = 150, R = 108, n = T.length;
    const pts = T.map((p, i) => { const a = (-90 + i * 360 / n) * Math.PI / 180; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
    const spokes = pts.map(([x, y]) => `<line class="spoke" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`).join('');
    const nodes = T.map((p, i) => { const [x, y] = pts[i], below = y > cy + 5;
      return `<g class="node" data-goto-pillar="${p.id}" tabindex="0" role="button" aria-label="${escHTML(p.name)}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="21"/>
        <svg class="glyphs" x="${(x - 11).toFixed(1)}" y="${(y - 11).toFixed(1)}" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.id] || ''}</svg>
        <text class="nl" x="${x.toFixed(1)}" y="${(below ? y + 35 : y - 28).toFixed(1)}" text-anchor="middle">${escHTML(SHORT[p.name] || p.name)}</text></g>`; }).join('');
    return `<div class="map"><svg viewBox="0 0 380 300" role="group" aria-label="Map of ${escHTML(s.name)}"><circle class="ring-c" cx="${cx}" cy="${cy}" r="${R}"/>${spokes}
      <circle class="hub" cx="${cx}" cy="${cy}" r="34"/><text class="hubt" x="${cx}" y="${cy + 4.5}" text-anchor="middle">${escHTML(s.name === 'Mathematics' ? 'Maths' : s.name)}</text>${nodes}</svg>
      <div class="map-cap">${RING[s.id] || ''}</div></div>`;
  }
  function renderTree() {
    const s = subjOf(S.subj), host = $('tree-view'), cr = $('crumbs');
    if (!s.pillars) { cr.innerHTML = `<span class="cur">${escHTML(s.name)}</span>`; host.innerHTML = `<div class="panel empty-card">The ${escHTML(s.name)} tree comes in a later phase. It will follow the same pattern as Physics.</div>`; return; }
    s.pillars.forEach(p => p.branches.forEach(b => { b._sid = s.id; }));
    const PL = S.pillar != null ? s.pillars[S.pillar] : null;
    cr.innerHTML = PL ? `<button data-goto-subj="${s.id}">${ico(SUBJ_ICON[s.id])}${escHTML(s.name)}</button><span class="sep">›</span><span class="cur">${escHTML(PL.name)}</span>` : '';
    host.innerHTML = PL ? pillarPage(s, PL) : subjectPage(s);
  }
  function subjectPage(s) {
    const all = s.pillars.flatMap(leavesOf), live = countLive(all), pct = Math.round(avgMastery(s.id, all) * 100);
    const [first, rest] = splitWhat(s.whatHtml);
    return `<div class="tv-hero s-${s.id}">
      <div class="tv-main"><div class="about-title"><span class="tile lg">${ico(SUBJ_ICON[s.id])}</span><div><div class="eyebrow">Subject</div><h2>What is ${escHTML(s.name.toLowerCase())}?</h2></div></div>
        <div class="what">${first}</div>
        <details class="more"><summary>Why these ${s.pillars.length} pillars, and how they connect</summary>
          <div class="more-grid"><div><div class="what">${rest}</div>${s.split ? `<p class="split"><b>How it splits.</b> ${escHTML(s.split)}</p>` : ''}${s.linksHtml ? `<div class="links">${s.linksHtml}</div>` : ''}</div>${mapSVG(s)}</div></details></div>
      <div class="tv-stats">${ring(pct, 76)}<div><b>${live}</b> of ${all.length} lessons written</div><div class="muted">${s.pillars.length} pillars · ${s.pillars.reduce((a, p) => a + p.branches.length, 0)} branches</div></div>
    </div>
    ${treeViz(s)}
    <div class="sec-title">Pillars <span class="eyebrow">open one to see its learning path</span></div>
    <div class="pil-grid">${s.pillars.map(p => { const ls = leavesOf(p), n = countLive(ls), m = Math.round(avgMastery(s.id, ls) * 100);
      return `<button class="pil-card s-${s.id} ${n ? '' : 'soon'}" data-goto-pillar="${p.id}">
        <span class="pc-top"><span class="tile">${ico(p.id)}</span><span class="pc-n">${n ? `${n} / ${ls.length} lessons` : 'coming later'}</span></span>
        <span class="pc-name">${escHTML(p.name)}</span><span class="pc-tag">${escHTML(p.tag || '')}</span>
        <span class="pc-br">${p.branches.map(b => `<span class="${countLive(b.leaves) ? 'on' : ''}">${escHTML(b.name)}</span>`).join('')}</span>
        <span class="pc-foot"><span class="meter"><i style="width:${m}%"></i></span><span>${m}%</span></span></button>`; }).join('')}</div>`;
  }
  /* Knowledge tree: trunk = subject, limbs = pillars, twigs = branches, dots = leaves (lessons). A leaf glows with mastery; a twig lights up when all its lessons are mastered. */
  function treeViz(s) {
    const W = 800, O = [400, 410], P = s.pillars, nb = P.reduce((a, p) => a + p.branches.length, 0), span = 168 * Math.PI / 180;
    const pt = (r, a) => [O[0] + r * Math.sin(a), O[1] - r * Math.cos(a)], f = n => n.toFixed(1);
    const st = m => m >= .75 ? 'mastered' : m > 0 ? 'started' : 'not started yet';
    let k = 0, groups = '', litB = 0, litL = 0, total = 0;
    P.forEach(p => {
      const a0 = -span / 2 + span * k / nb, a1 = -span / 2 + span * (k + p.branches.length) / nb, ap = (a0 + a1) / 2, F = pt(120, ap);
      const pl = leavesOf(p);
      let g = `<path class="tz-limb" d="M${O[0]} ${O[1] - 60} Q${f(pt(70, ap * .6)[0])} ${f(pt(70, ap * .6)[1])} ${f(F[0])} ${f(F[1])}"/>`, lv = '';
      p.branches.forEach(b => {
        const ab = -span / 2 + span * (k + .5) / nb, T = pt(390, ab), M = pt(255, ab); k++;
        const ms = b.leaves.map(l => mastery(`${s.id}/${l.id}`)), lit = ms.length && ms.every(m => m >= .75); if (lit) litB++;
        g += `<path class="tz-twig ${lit ? 'lit' : ''}" data-tip="${escHTML(p.name)} › ${escHTML(b.name)}: ${countLive(b.leaves)} of ${b.leaves.length} lessons written${lit ? ', all mastered' : ''}" d="M${f(F[0])} ${f(F[1])} Q${f(M[0])} ${f(M[1])} ${f(T[0])} ${f(T[1])}"/>`;
        b.leaves.forEach((l, i) => {
          total++; const t = .3 + .7 * (i + 1) / b.leaves.length, r = 120 + 270 * t, side = i % 2 ? 1 : -1, c = pt(r, ab), m = mastery(`${s.id}/${l.id}`); if (m >= .75) litL++;
          const x = c[0] + side * 7 * Math.cos(ab), y = c[1] + side * 7 * Math.sin(ab);
          lv += `<circle class="tz-leaf ${l.live ? 'live' : ''} ${m >= .75 ? 'lit' : m > 0 ? 'warm' : ''}" cx="${f(x)}" cy="${f(y)}" r="${l.live ? 5.5 : 3.5}" ${l.live ? `data-open-leaf="${s.id}/${l.id}"` : ''} data-tip="${i + 1}. ${escHTML(l.name)} (${escHTML(b.name)}): ${l.live ? st(m) + ' · click to open' : 'not written yet'}"/>`;
        });
      });
      const L = pt(132, ap);
      groups += `<g class="tz-p">${g}${lv}<text class="tz-pl" x="${f(L[0])}" y="${f(L[1] - 6)}" text-anchor="middle" data-goto-pillar="${p.id}" data-tip="${escHTML(p.name)}: ${countLive(pl)} of ${pl.length} lessons written · click for its learning path">${escHTML(SHORT[p.name] || p.name)}</text></g>`;
    });
    let open = false; try { open = localStorage.getItem('la-tree-open') === '1'; } catch (e) {}
    return `<details class="tz s-${s.id}" ${open ? 'open' : ''}><summary>Your knowledge tree<span>${litL} of ${total} lessons mastered · ${litB} of ${nb} branches lit</span></summary>
      <p class="tz-how">Each limb is a pillar, each twig a branch, each dot one lesson, numbered in reading order from the trunk outwards. Hover anything to see what it is; click a dot to open the lesson. Master every lesson on a twig and the twig lights up.</p>
      <div class="tz-box"><svg viewBox="0 0 ${W} 420" role="img" aria-label="Knowledge tree of ${escHTML(s.name)}"><path class="tz-trunk" d="M${O[0] - 10} ${O[1] + 10} Q${O[0] - 4} ${O[1] - 30} ${O[0]} ${O[1] - 60} Q${O[0] + 4} ${O[1] - 30} ${O[0] + 10} ${O[1] + 10}Z"/>${groups}</svg><div class="tz-tip" hidden></div></div>
      <div class="tz-key"><span><i class="k0"></i>not written</span><span><i class="k1"></i>ready to read</span><span><i class="k2"></i>started</span><span><i class="k3"></i>mastered</span></div></details>`;
  }
  function pillarPage(s, PL) {
    const ls = leavesOf(PL), pct = Math.round(avgMastery(s.id, ls) * 100);
    const nextLeaf = PL.branches.flatMap(b => b.leaves).find(l => l.live && !PG.lessons[`${s.id}/${l.id}`]);
    return `<div class="tv-hero s-${s.id}">
      <div class="tv-main"><div class="about-title"><span class="tile lg">${ico(PL.id)}</span><div><div class="eyebrow">Pillar of ${escHTML(s.name)}</div><h2>${escHTML(PL.name)}</h2></div></div>
        <p class="tv-tag">${escHTML(PL.tag || '')}</p>
        <details class="more"><summary>What is ${escHTML(PL.name.toLowerCase())}, and why these ${PL.branches.length} branches?</summary><div class="what">${PL.whatHtml || ''}</div>${PL.split ? `<p class="split"><b>How it splits.</b> ${escHTML(PL.split)}</p>` : ''}</details></div>
      <div class="tv-stats">${ring(pct, 76)}<div><b>${countLive(ls)}</b> of ${ls.length} lessons written</div>
        ${nextLeaf ? `<button class="btn" data-open-leaf="${s.id}/${nextLeaf.id}">Next up: ${escHTML(nextLeaf.name)}</button>` : ''}</div>
    </div>
    <nav class="branch-nav" aria-label="Branches">${PL.branches.map((b, i) => `<button data-to-branch="br-${b.id}"><span class="bn">${i + 1}</span>${escHTML(b.name)}<small>${countLive(b.leaves)}/${b.leaves.length}</small></button>`).join('')}</nav>
    ${PL.branches.map((b, bi) => { const m = Math.round(avgMastery(s.id, b.leaves) * 100);
      return `<section class="branch s-${s.id}" id="br-${b.id}">
      <header class="br-h"><span class="bnum">${bi + 1}</span><div class="br-t"><h3>${escHTML(b.name)}</h3><p>${escHTML(b.tag || '')}</p></div>
        <span class="br-s"><span class="meter"><i style="width:${m}%"></i></span>${countLive(b.leaves)} of ${b.leaves.length} written</span></header>
      ${b.whatHtml ? `<details class="more sm"><summary>Why this branch, from first principles</summary><div class="what">${b.whatHtml}</div>${b.split ? `<p class="split"><b>Order.</b> ${escHTML(b.split)}</p>` : ''}</details>` : ''}
      <ol class="path">${b.leaves.map((l, li) => { const k = `${s.id}/${l.id}`, mm = mastery(k);
        return `<li><button class="stone ${l.live ? 'live' : 'soon'}" ${l.live ? `data-open-leaf="${k}"` : 'disabled'}>
          <span class="so-n" style="--p:${mm}">${li + 1}</span>
          <span class="so-t"><b>${escHTML(l.name)}</b><span>${l.live ? escHTML(l.summary || '') : 'Not written yet'}</span></span>
          <span class="so-x">${lvlTag(l, s.id)}${l.live ? `<span class="pcount">${l.problems || 0} problems</span>` : ''}</span></button></li>`; }).join('')}</ol>
    </section>`; }).join('')}`;
  }
  $('tree-view').addEventListener('click', e => {
    const t = e.target.closest('[data-goto-pillar],[data-open-leaf],[data-to-branch]'); if (!t) return;
    if (t.dataset.gotoPillar) return go(`learn~${S.subj}~${t.dataset.gotoPillar}`);
    if (t.dataset.openLeaf) return openLesson(t.dataset.openLeaf);
    const el = $(t.dataset.toBranch); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  $('tree-view').addEventListener('keydown', e => { const n = e.target.closest('.node'); if (n && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); go(`learn~${S.subj}~${n.dataset.gotoPillar}`); } });
  $('tree-view').addEventListener('mousemove', e => { const box = e.target.closest('.tz-box'); if (!box) return; const tip = box.querySelector('.tz-tip'), t = e.target.closest('[data-tip]');
    if (!t) { tip.hidden = true; return; } const r = box.getBoundingClientRect(); tip.textContent = t.dataset.tip; tip.hidden = false;
    tip.style.left = Math.min(e.clientX - r.left + 14, r.width - 270) + 'px'; tip.style.top = (e.clientY - r.top + 14) + 'px'; });
  $('tree-view').addEventListener('mouseleave', () => document.querySelectorAll('.tz-tip').forEach(t => t.hidden = true), true);
  $('tree-view').addEventListener('toggle', e => { if (e.target.matches('details.tz')) try { localStorage.setItem('la-tree-open', e.target.open ? '1' : '0'); } catch (x) {} }, true);
  $('crumbs').addEventListener('click', e => { const b = e.target.closest('[data-goto-subj]'); if (b) go('learn~' + b.dataset.gotoSubj); });
  $('mode-seg').addEventListener('click', e => { const b = e.target.closest('[data-mode]'); if (b) { S.mode = b.dataset.mode; if (S.mode === 'class') go('learn'); RENDER.learn(); } });
  $('subj-seg').addEventListener('click', e => { const b = e.target.closest('[data-subj]'); if (b) go('learn~' + b.dataset.subj); });


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
  /* Decorative header art, chosen by branch; classes ln / ray / m2 are styled in app.css (.cover-art). */
  RENDER.lesson = async () => {
    const key = S.lessonKey, root = $('lesson-root');
    const L = leafByKey(key);
    if (!L || !L.l.live) { root.innerHTML = `<div class="empty-card panel">This lesson is not written yet.</div>`; return; }
    if (root.dataset.key !== key) {
      root.dataset.key = key; root.innerHTML = loaderHTML('Loading the lesson…');
      const [lesson, probs] = await Promise.all([getLesson(key), getProblems(key)]);
      if (S.lessonKey !== key) return;
      buildLesson(root, L, lesson, probs);
      if (!PG.lessons[key]) PG.lessons[key] = { opened: Date.now() };
      PG.last = key; touch();
    }
    showLessonTab();
    if (pendingSection) { const id = pendingSection; pendingSection = null; S.depth = 4; applyDepth(); setTimeout(() => { const el = $(id); if (el) el.scrollIntoView({ block: 'start' }); }, 40); }
  };
  const BANDS = {
    sci: { 1: ['Class 10', 'The foundation: every student needs this'], 2: ['Class 12 · JEE Main', 'Stop above this line if you only need Class 10'], 3: ['JEE Advanced · Irodov', 'Same core idea, harder situations'], 4: ['Olympiad', 'The idea at full depth'] },
    cs: { 1: ['Foundations', 'Anyone can follow this, no coding needed'], 2: ['SDE-1', 'What a junior engineer must know'], 3: ['SDE-2', 'Trade-offs a mid-level engineer weighs'], 4: ['SDE-3', 'Designing at scale and leading the decision'] },
    eng: { 1: ['Foundation', 'Classes 6 to 8: the rule itself'], 2: ['Class 10 board', 'What the board paper tests'], 3: ['Beyond the board', 'Style and nuance'] }
  };
  const ENG_DEPTH = [[1, 'Foundation'], [2, 'Class 10 board'], [3, 'Beyond the board']];
  const CS_DEPTH = [[1, 'Foundations'], [2, 'SDE-1'], [3, 'SDE-2'], [4, 'SDE-3']];
  /* Icons for "In real life" items, picked per item in content/life-icons.yaml. Compact form, segments split by '|':
     "c cx cy r" circle, "r x y w h rx" rect, "e cx cy rx ry deg" ellipse, anything else is a path. */
  const LIFE_ICONS = {
    phone: 'r 6 2 12 20 2|M11 18h2', laptop: 'r 4 5 16 11 1.5|M2 19h20', tv: 'r 3 4 18 12 1.5|M8 20h8M12 16v4',
    wifi: 'M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0|c 12 19.5 1', tower: 'M5 4a10 10 0 0 0 0 12M19 4a10 10 0 0 1 0 12M8 7a5 5 0 0 0 0 6M16 7a5 5 0 0 1 0 6M12 12v10|c 12 10 1.5',
    camera: 'M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z|c 12 13 4', mic: 'r 9 2 6 12 3|M5 11a7 7 0 0 0 14 0M12 18v4',
    speaker: 'M4 9h4l5-4v14l-5-4H4zM16 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12', music: 'M9 18V5l11-2v13|c 6.5 18 2.5|c 17.5 16 2.5',
    game: 'r 2 7 20 11 5|M7 10.5v4M5 12.5h4|c 15.5 11.5 1|c 17.5 14 1', film: 'r 3 5 18 14 2|M7 5v14M17 5v14M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4',
    car: 'M3 16H2v-3.5L5 11l2.5-4h8l3.5 4 3 1.5V16h-1M9 16h6|c 7 16.5 2|c 17 16.5 2', bike: 'M6 16l4-7h6l2 7M10 9l2 7M9 6h3|c 6 16 3.5|c 18 16 3.5',
    train: 'r 5 3 14 14 3|M5 10h14M8 21l1.5-4M16 21l-1.5-4|c 9 13.5 1|c 15 13.5 1', plane: 'M10.5 21l1.5-1 1.5 1v-5l7 2v-2l-7-5V4.5a1.5 1.5 0 0 0-3 0V11l-7 5v2l7-2z',
    ship: 'M3 15l2 5h14l2-5zM12 3v12M12 4l6 9h-6', rocket: 'M12 2c3 2.5 4.5 6 4.5 10l-2 4h-5l-2-4c0-4 1.5-7.5 4.5-10zM9.5 16L7 19v2l3-1.5M14.5 16l2.5 3v2l-3-1.5|c 12 9 1.7',
    satellite: 'M4 9l5-5 3 3-5 5zM12 17l5-5 3 3-5 5zM9.5 9.5l5 5M17 3a4 4 0 0 1 4 4', road: 'M8 3L4 21M16 3l4 18M12 4v3M12 10v3M12 16v3',
    traffic: 'r 8 2 8 17 3|c 12 6 1.5|c 12 10.5 1.5|c 12 15 1.5|M12 19v3', bridge: 'M2 9h20M2 9v11M22 9v11M2 17c4-5 16-5 20 0M7 9v5M12 9v4M17 9v5',
    bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z', plug: 'M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5',
    battery: 'r 2 7 17 10 2|M22 11v2M6 10v4M10 10v4', bolt: 'M13 2L4 14h7l-1 8 9-12h-7z',
    fan: 'M12 10.5C12 6 9 3 7 5s1 5 5 5.5M13.5 12c4.5 0 7.5-3 5.5-5s-5 1-5.5 5M12 13.5c0 4.5 3 7.5 5 5.5s-1-5-5-5.5M10.5 12c-4.5 0-7.5 3-5.5 5s5-1 5.5-5|c 12 12 1.5',
    fridge: 'r 6 2 12 20 2|M6 10h12M9 5v2M9 13v3', cooking: 'M4 10h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM2 10h20M9 6c0-1 1-1.5 1-2.5M14 6c0-1 1-1.5 1-2.5M8 21h8',
    tea: 'M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 11h1.5a2.5 2.5 0 0 1 0 5H16M8 5c0-1 1-1.5 1-2.5M12 5c0-1 1-1.5 1-2.5M3 22h14',
    food: 'M4 3v8M2.5 3v4a1.5 1.5 0 0 0 3 0V3M4 11v10M20 3c-2 0-3 2-3 6h3v12', bottle: 'M10 2h4M10 2v4L8 9v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9l-2-3V2M8 13h8',
    tap: 'M4 8h9a3 3 0 0 1 3 3v2M4 6v4M8 8V5h4M16 17s-1.5 1.7-1.5 2.7a1.5 1.5 0 0 0 3 0c0-1-1.5-2.7-1.5-2.7z', glasses: 'M10 14a2 2 0 0 1 4 0M3 14l1.5-7M21 14l-1.5-7|c 6.5 14 3.5|c 17.5 14 3.5',
    eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z|c 12 12 3', sun: 'M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4|c 12 12 4',
    moon: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z', star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z',
    cloud: 'M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5z', rain: 'M7 14a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 6.5a3.5 3.5 0 0 1-.5 7.5zM8 17l-1 3M12 17l-1 3M16 17l-1 3',
    snow: 'M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2', wind: 'M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7',
    rainbow: 'M2 18a10 10 0 0 1 20 0M5.5 18a6.5 6.5 0 0 1 13 0M9 18a3 3 0 0 1 6 0', sea: 'M2 8c2.5-2 5-2 7.5 0s5 2 7.5 0 3.5-1.5 5 0M2 13c2.5-2 5-2 7.5 0s5 2 7.5 0 3.5-1.5 5 0M2 18c2.5-2 5-2 7.5 0s5 2 7.5 0 3.5-1.5 5 0',
    mountain: 'M2 20l7-12 4 6 3-4 6 10z', tree: 'M12 22v-5M12 2L6 11h3l-4 6h14l-4-6h3z', leaf: 'M5 19C5 10 10 4 20 4c0 10-6 15-15 15zM5 19l8-8',
    sprout: 'M12 22V11M12 11C12 7 9 5 5 5c0 4 3 6 7 6zM12 14c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5z', paw: 'M12 12c-3 0-5 3-5 5.5 0 1.5 1.5 2.5 3 2l2-.5 2 .5c1.5.5 3-.5 3-2 0-2.5-2-5.5-5-5.5z|c 6.5 10 1.8|c 10 6.5 1.8|c 14 6.5 1.8|c 17.5 10 1.8',
    drop: 'M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z', fire: 'M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-2 2-5 5-5 8a7 7 0 0 0 7 7z',
    thermometer: 'M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0zM12 9v8', magnet: 'M6 3v8a6 6 0 0 0 12 0V3h-4v8a2 2 0 0 1-4 0V3zM6 7h4M14 7h4',
    compass: 'M15.5 8.5l-2 5-5 2 2-5z|c 12 12 9', clock: 'M12 7v5l3 2|c 12 12 9', stopwatch: 'M12 14v-4M10 2h4M12 2v3M18 7l1.5-1.5|c 12 14 7',
    calendar: 'r 3 5 18 16 2|M3 10h18M8 3v4M16 3v4', ball: 'M3.5 9.5c3 1 6 3.5 7.5 11M20.5 14.5c-3-1-6-3.5-7.5-11|c 12 12 9',
    run: 'M7 21l3-6 3 2v5M6 11l3-3h4l3 4h3M10 8l-1 6|c 14 4 2', swing: 'M3 3h18M8 3L6 16M16 3l2 13M5 16h14', lift: 'r 5 2 14 20 1.5|M12 2v20M7 9l1.5-2L10 9M14 15l1.5 2 1.5-2',
    pendulum: 'M4 3h16M12 3l5 12|c 17.8 17 2.2', spring: 'M12 2v3L7 7l10 3-10 3 10 3-10 3 5 2v3', sine: 'M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0',
    balance: 'M12 3v18M7 21h10M4 7h16M4 7l-3 7a3 3 0 0 0 6 0zM20 7l-3 7a3 3 0 0 0 6 0z', weight: 'M8 7a4 4 0 0 1 8 0M6 9h12l2 12H4z',
    ruler: 'M3 17L17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2', triangle: 'M12 3l9 16H3z', dice: 'r 4 4 16 16 3|c 8.5 8.5 1|c 15.5 8.5 1|c 12 12 1|c 8.5 15.5 1|c 15.5 15.5 1',
    calculator: 'r 5 2 14 20 2|M8 5h8v4H8z|c 9 13 .8|c 12 13 .8|c 15 13 .8|c 9 17 .8|c 12 17 .8|c 15 17 .8', grid: 'r 3 3 18 18 2|M3 9h18M3 15h18M9 3v18M15 3v18',
    chart: 'M3 3v18h18M7 15l4-4 3 3 6-6', bars: 'M4 20V10M10 20V4M16 20v-7M22 20H2', rupee: 'M7 4h10M7 8.5h10M10 4c4 0 5 2 5 4.5S13 13 10 13H8l7 8',
    card: 'r 2 5 20 14 2|M2 10h20M6 15h4', cart: 'M3 4h2l2.5 11h11L21 7H6.2|c 9 19.5 1.5|c 17 19.5 1.5', ticket: 'M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4zM14 7v10',
    briefcase: 'r 3 7 18 13 2|M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18', pin: 'M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z|c 12 10 2.5',
    globe: 'M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18|c 12 12 9', home: 'M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-6h4v6',
    building: 'M4 21V4h10v17M14 9h6v12M2 21h20M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1', factory: 'M2 21V10l6 4v-4l6 4V6h3l1-3h1l1 3h2v15zM2 21h20',
    school: 'M2 9l10-5 10 5-10 5zM6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5', heart: 'M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z',
    pulse: 'M2 12h4l2-5 4 10 2-5h8', pill: 'M10.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 0 1-7-7zM7 7l7 7', person: 'M5 21v-2a7 7 0 0 1 14 0v2|c 12 7 4',
    people: 'M3 20a6 6 0 0 1 12 0M15 14.5a5 5 0 0 1 6 5.5|c 9 8 3|c 17 9 2.5', brain: 'M12 4v16M12 4a3 3 0 0 0-5.5 1.5A3 3 0 0 0 4 10a3 3 0 0 0 1 5 3 3 0 0 0 3 4 3 3 0 0 0 4 1M12 4a3 3 0 0 1 5.5 1.5A3 3 0 0 1 20 10a3 3 0 0 1-1 5 3 3 0 0 1-3 4 3 3 0 0 1-4 1',
    dna: 'M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9M9 5h6M10.5 8.5h3M10.5 15.5h3M9 19h6', atom: 'e 12 12 10 4 0|e 12 12 10 4 60|e 12 12 10 4 -60|c 12 12 1.3',
    flask: 'M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10', chat: 'M4 5h16v11H9l-5 4z',
    mail: 'r 3 5 18 14 2|M3 7l9 6 9-6', book: 'M4 19V5a2 2 0 0 1 2-2h14v14H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h14', news: 'M4 4h13v16H6a2 2 0 0 1-2-2zM17 8h3v10a2 2 0 0 1-2 2M7 8h7M7 12h7M7 16h4',
    pen: 'M4 20l1-4L16 5l3 3L8 19zM14 7l3 3', type: 'M4 7V4h16v3M9 20h6M12 4v16', quote: 'M5 18c2-1 3-3 3-6H5V6h6v6c0 4-2 7-6 8zM14 18c2-1 3-3 3-6h-3V6h6v6c0 4-2 7-6 8z',
    mask: 'M4 5h16v6a8 8 0 0 1-16 0zM8 10h2M14 10h2M9 15a4 4 0 0 0 6 0', palette: 'M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.5-4-8-9-8z|c 7.5 11 1|c 10 7 1|c 15 7 1',
    lock: 'r 5 11 14 10 2|M8 11V7a4 4 0 0 1 8 0v4', key: 'M11 12.5L21 3M17 7l3 3M15 9l2 2|c 7.5 15.5 4.5', shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
    server: 'r 4 3 16 7 1.5|r 4 14 16 7 1.5|c 8 6.5 .8|c 8 17.5 .8', database: 'e 12 5 8 3 0|M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16', robot: 'r 5 8 14 11 2|M12 4v4M9.5 16h5M2 12v3M22 12v3|c 12 3.5 1|c 9.5 12.5 1|c 14.5 12.5 1',
    search: 'M20 20l-4-4|c 11 11 7', gear: 'M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1|c 12 12 3|c 12 12 7',
    wrench: 'M15 3a5 5 0 0 0-4.5 7L3 17.5 6.5 21l7.5-7.5A5 5 0 0 0 21 9l-3 3-3-3 3-3a5 5 0 0 0-3-3z', refresh: 'M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4',
    bell: 'M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4', target: 'c 12 12 9|c 12 12 5|c 12 12 1', question: 'M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.5-2.5 2-2.5 3.5M12 16.5v.5|c 12 12 9'
  };
  const lifeIcon = name => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(LIFE_ICONS[name] || LIFE_ICONS.pin).split('|').map(s => { const a = s.split(' ');
    return a[0] === 'c' ? `<circle cx="${a[1]}" cy="${a[2]}" r="${a[3]}"/>` : a[0] === 'r' ? `<rect x="${a[1]}" y="${a[2]}" width="${a[3]}" height="${a[4]}" rx="${a[5]}"/>` : a[0] === 'e' ? `<ellipse cx="${a[1]}" cy="${a[2]}" rx="${a[3]}" ry="${a[4]}" transform="rotate(${a[5]} ${a[1]} ${a[2]})"/>` : `<path d="${s}"/>`; }).join('')}</svg>`;
  const LIFE_TINTS = ['--chem', '--mat', '--phy', '--eng', '--cs', '--bio'];
  let spy = null;
  function buildLesson(root, L, lesson, probs) {
    const key = lesson.key, sid = L.s.id, isEng = sid === 'eng', B = BANDS[sid] || BANDS.sci, D = isEng ? ENG_DEPTH : sid === 'cs' ? CS_DEPTH : DEPTH;
    const wrap = ['s-keys', 's-traps'];
    const body = lesson.sections.filter(x => !wrap.includes(x.id)), tail = lesson.sections.filter(x => wrap.includes(x.id));
    const words = lesson.sections.reduce((a, x) => a + (x.text || '').split(/\s+/).length, 0), mins = Math.max(5, Math.round(words / 180 / 5) * 5);
    let num = 0, maxLvl = 0;
    const secHTML = sec => { num++; const n = String(num).padStart(2, '0'); sec._n = n;
      const cls = sec.id === 's-keys' ? ' sec-keys' : sec.id === 's-traps' ? ' sec-traps' : '';
      return `<section class="sec${cls}" data-lvl="${sec.lvl}" id="${sec.id}"><div class="sec-h"><span class="sec-n">${n}</span><h2>${sec.titleHtml}</h2>${cls ? '' : `<span class="lv l${sec.lvl}">${escHTML(sec.label)}</span>`}</div><div class="sec-b">${sec.html}</div></section>`; };
    let sections = '';
    body.forEach(sec => { if (sec.lvl > maxLvl) { maxLvl = sec.lvl; const [bn, bh] = B[sec.lvl] || ['', ''];
      sections += `<div class="band l${sec.lvl}" data-lvl="${sec.lvl}"><span class="band-n">${escHTML(bn)}</span><span class="band-h">${escHTML(bh)}</span></div>`; }
      sections += secHTML(sec); });
    const margin = (lesson.margin || []).map(m => `<div class="mn ${m.kind === 'tip' ? 'tip' : m.kind === 'olympiad' ? 'oly' : ''}"><b>${escHTML(m.title || m.kind)}</b>${m.html}</div>`).join('');
    const think = [];
    if (lesson.models && lesson.models.length) think.push(`<div class="mms">${lesson.models.map(m => `<div class="mm"><div class="mm-k">${ico('bulb')}Mental model</div><b>${m.name}</b><p>${m.html}</p></div>`).join('')}</div>`);
    // Same idea elsewhere: one compact list; each row shows the link and one line of what is shared, and opens to compare.
    if (lesson.links && lesson.links.length) think.push(`<div class="xl"><div class="xl-h"><b>Same idea elsewhere</b><span>${lesson.links.length} connection${lesson.links.length > 1 ? 's' : ''} · open one to compare</span></div>${lesson.links.map(x => {
      const T = x.leaf && leafByKey(x.leaf), nm = escHTML(x.name || (T ? T.l.name : x.leaf)), xs = T ? T.s.id : sid;
      return `<details class="xl-i s-${xs}"><summary><span class="tile sm">${ico(SUBJ_ICON[xs])}</span><span class="xl-t"><b>${nm}</b><small>${T ? escHTML(T.s.name) + ' · ' : ''}${x.same}</small></span><span class="xl-chev" aria-hidden="true"></span></summary>
        <div class="xl-b"><div class="cmp-c same"><b>What's common</b><p>${x.same}</p></div><div class="cmp-c diff"><b>What's different</b><p>${x.differs}</p></div>
        ${T && T.l.live ? `<button class="btn quiet sm" data-goto="${x.leaf}">Open ${nm} →</button>` : '<span class="xl-soon">Lesson coming soon</span>'}</div></details>`; }).join('')}</div>`);
    sections += '%%WRAPSTAGE%%';
    if (think.length) sections += `<div class="band wrap" data-lvl="1"><span class="band-n">Think with it</span><span class="band-h">Ideas to carry outside this subject</span></div>${think.join('')}`;
    if (margin) sections += `<div class="around"><div class="eyebrow">Around this idea</div><div class="around-g">${margin}</div></div>`;
    sections += `<div class="band wrap" data-lvl="1"><span class="band-n">Remember</span><span class="band-h">What to carry in your head</span></div>` + tail.map(secHTML).join('');
    const groups = []; body.forEach(sec => { let g = groups.find(x => x.lvl === sec.lvl); if (!g) groups.push(g = { lvl: sec.lvl, secs: [] }); g.secs.push(sec); });
    if (tail.length) groups.push({ lvl: 0, secs: tail });
    const c = lesson.core;
    const coreHTML = c ? `<div class="core">
        <div class="core-h"><span class="core-badge">${ico('bulb')}</span><div><div class="core-k">The one idea to keep</div><div class="core-s">Memorise this exactly. Every question on this topic is this idea under harder conditions.</div></div></div>
        <p class="core-idea">${c.ideaHtml}</p>
        ${c.formulas && c.formulas.length ? `<div class="core-f">${c.formulas.map(f => `<div class="cf">${f.html}${f.label ? `<small>${f.label}</small>` : ''}</div>`).join('')}</div>` : ''}
        ${c.patterns && c.patterns.length ? `<div class="core-f">${c.patterns.map(p => `<div class="cf pat"><code>${p.text}</code>${p.label ? `<small>${p.label}</small>` : ''}</div>`).join('')}</div>` : ''}
        ${c.conditions && c.conditions.length ? `<div class="core-c"><b>${isEng ? 'Use it when' : 'Holds exactly when (ideal conditions)'}</b><ul>${c.conditions.map(x => `<li>${x}</li>`).join('')}</ul></div>` : ''}
        ${c.signHtml ? `<div class="core-w">${ico('alert')}<span>${c.signHtml}</span></div>` : ''}
        <button class="btn quiet sm" data-add-core>${PG.cards[key + '#core'] ? 'In your review cards ✓' : '+ Add to my review cards'}</button>
      </div>` : '';
    const hasHook = /class="hook"/.test(lesson.introHtml || ''), op = lesson.opener || {};
    const openerHTML = (hasHook || op.story) ? `<div class="opener s-${sid}">${op.art ? `<div class="op-art">${op.art}</div>` : ''}<div class="op-k">A puzzle to start</div>${op.story ? `<div class="op-story">${op.story}</div>` : ''}<div id="op-q"></div></div>` : '';
    const symHTML = lesson.symbols && lesson.symbols.length ? `<div class="symbols"><div class="rl-h"><b>Symbols in this lesson</b><span>shorthand only: each one is a word you already know</span></div><div class="sym-g">${lesson.symbols.map(x => `<div class="sym"><span class="sym-s">${x.s}</span><span>${x.m}</span></div>`).join('')}</div></div>` : '';
    const lifeHTML = lesson.life && lesson.life.length ? `<div class="reallife"><div class="rl-h"><span class="rl-pin">${lifeIcon('pin')}</span><b>In real life</b><span>you have already met this idea</span></div><div class="rl-g">${lesson.life.map((x, i) => `<div class="rl" style="--t:var(${LIFE_TINTS[i % LIFE_TINTS.length]})"><span class="rl-ic">${lifeIcon((lesson.lifeIcons || [])[i])}</span><p>${x}</p></div>`).join('')}</div></div>` : '';
    const outHTML = lesson.outcomes && lesson.outcomes.length ? `<div class="outcomes"><div class="eyebrow">After this lesson you can</div><ol>${lesson.outcomes.map(o => `<li><span>${o}</span></li>`).join('')}</ol></div>` : '';
    const mapHTML = `<div class="lmap-g">${groups.map(g => `<div class="lmb l${g.lvl}" data-lvl="${g.lvl || 1}"><div class="lmb-h">${g.lvl ? escHTML((B[g.lvl] || [''])[0]) : 'Wrap-up'}</div>${g.secs.map(sec => `<button data-to="${sec.id}"><span class="n">${sec._n}</span><span>${escHTML(sec.title)}</span></button>`).join('')}</div>`).join('')}</div>`;
    const needs = (lesson.builds_on || []).map(b => `<span class="chip">${escHTML(b)}</span>`).join('');
    const hasWarm = !!(openerHTML || lifeHTML), stN = hasWarm ? [1, 2, 3] : [0, 1, 2];
    const stage = (n, k, note, id) => `<div class="stage st-${k.toLowerCase().replace(/[^a-z]+/g, '')}"${id ? ` id="${id}"` : ''}>${n ? `<span class="st-n">${n}</span>` : ''}<span class="st-k">${k}</span>${note ? `<span class="st-note">${note}</span>` : ''}<i></i></div>`;
    sections = sections.replace('%%WRAPSTAGE%%', stage(stN[2], 'Wrap-up', 'mental models, key ideas, traps and the question that leads on', 'st-wrap'));
    const first = body[0] || tail[0];
    const beginHTML = `<section class="lbegin" id="lbegin">
        <div class="lb-top"><div><div class="lb-k">The lesson begins here</div><h2>${escHTML(lesson.title || L.l.name)}</h2></div><div class="lb-meta">${body.length} sections<br>about ${mins} min at full depth</div></div>
        ${coreHTML}
        <div class="lb-row"><span class="lb-l">How deep today?</span><div class="seg" id="depth-seg">${D.map(([d, n]) => `<button data-depth="${d}">${n}</button>`).join('')}</div><span class="lb-sp"></span>${symHTML ? `<button class="lb-btn" data-lb="sym" aria-expanded="false">Symbols (${lesson.symbols.length})</button>` : ''}<button class="lb-btn" data-lb="inside" aria-expanded="false">What's inside</button></div>
        ${first ? `<button class="lb-go" data-to="${first.id}">Start section 1 ↓</button>` : ''}
      </section>
      ${symHTML ? `<div class="lb-panel" data-lbp="sym" hidden>${symHTML}</div>` : ''}
      <div class="lb-panel inside" data-lbp="inside" hidden>${outHTML}${needs ? `<div class="needs"><div class="eyebrow">Builds on</div>${needs}</div>` : ''}${mapHTML}</div>`;
    const tocBtn = sec => `<button data-to="${sec.id}" data-lvl-toc="${sec.lvl}"><span class="n">${sec._n}</span><span class="t">${escHTML(sec.title)}</span><span class="lv l${sec.lvl}">${isEng ? sec.lvl : sid === 'cs' ? ['', 'Fnd', 'SDE1', 'SDE2', 'SDE3'][sec.lvl] : LV_SHORT[sec.lvl]}</span></button>`;
    const trk = (n, k, sub, to) => `<button class="trk" data-trk="${to}" data-to="${to}"><span class="trk-d">${n || '•'}</span><b>${k}</b><span class="trk-s"${to === 'lbegin' ? ' id="trk-count"' : ''}>${sub}</span></button>`;
    const ncert = (lesson.ncert || []).map(n => `<span>${escHTML(n)}</span>`).join('<span>·</span>');
    root.innerHTML = `
      <div class="lesson-head s-${sid}">
        <button class="back" data-back>← ${escHTML(L.s.name)} · ${escHTML(L.p.name)} · ${escHTML(L.b.name)}</button>
        <h1>${escHTML(lesson.title || L.l.name)}</h1>
        ${lesson.summary ? `<p class="lh-sum">${escHTML(lesson.summary)}</p>` : ''}
        <div class="meta">${ncert ? `<span><b>NCERT</b></span>${ncert}` : '<span><b>Beyond NCERT</b></span>'}<span><b>Up to</b> ${escHTML(lesson.up_to || 'Olympiad')}</span><span><b>${probs.length}</b> problems</span></div>
      </div>
      <div class="ltabs" role="tablist" id="ltabs">
        <button role="tab" data-ltab="learn">Learn</button>
        <button role="tab" data-ltab="practice">Practice <span class="count">${probs.length}</span></button>
        <button role="tab" data-ltab="books">From books</button>
        <button role="tab" data-ltab="notes">My notes</button>
      </div>
      <div class="lpane s-${sid}" data-lpane="learn">
        <div class="read"><div class="read-main">
          ${hasWarm ? `<div id="st-warm">${stage(1, 'Warm-up', 'a puzzle and where you meet this idea, no notes needed')}</div>${openerHTML}${lifeHTML}` : ''}
          ${stage(stN[1], 'The lesson', '')}
          ${beginHTML}
          <div class="prose">${lesson.introHtml ? `<div class="intro">${lesson.introHtml}</div>` : ''}${sections}</div>
          ${lesson.next ? (() => { const T = lesson.next.leaf && leafByKey(lesson.next.leaf); return `<div class="nextq s-${sid}"><div class="eyebrow">The question that leads on</div><p class="nq">${lesson.next.q}</p><div class="nq-f">${T ? `<span>Answered in <b>${escHTML(T.l.name)}</b></span>${T.l.live ? `<button class="btn" data-goto="${lesson.next.leaf}">Find out →</button>` : '<span class="muted">(lesson coming soon)</span>'}` : ''}</div></div>`; })() : ''}
          <div class="next-step"><div><b>That's the lesson.</b><span>Now test it: ${probs.length} problems, from NCERT to Olympiad.</span></div><button class="btn" data-ltab-go="practice">Go to practice</button></div>
          ${(() => { const n = lessonNeighbours(key); return (n.prev || n.next) ? `<nav class="lnav" aria-label="Lessons">${n.prev ? lessonCard(n.prev, 'prev', L) : '<span></span>'}${n.next ? lessonCard(n.next, 'next', L) : '<span class="lnav-end">That is the last lesson written so far.</span>'}</nav>` : ''; })()}
        </div>
        <aside class="side"><div class="toc-wrap"><div class="toc-top"><b>Your path through this lesson</b><span id="read-pct">0%</span></div><div class="readbar"><i id="read-bar"></i></div>
          <nav class="toc" id="toc" aria-label="Sections">${hasWarm ? trk(1, 'Warm-up', 'puzzle', 'st-warm') : ''}${trk(stN[1], 'The lesson', `${body.length} sections`, 'lbegin')}<div class="toc-sub">${body.map(tocBtn).join('')}</div>${trk(stN[2], 'Wrap-up', 'key ideas, traps', 'st-wrap')}<div class="toc-sub">${tail.map(tocBtn).join('')}</div></nav></div>
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
    { const hk = root.querySelector('.intro .hook'), slot = $('op-q'); if (hk && slot) { slot.appendChild(hk); const intro = root.querySelector('.intro'); if (intro && !intro.textContent.trim()) intro.remove(); } }
    fillIcons(root);
    mountWidgets(root);
    const notes = $('notes'); notes.value = PG.notes[key] || '';
    let nt; notes.addEventListener('input', () => { clearTimeout(nt); nt = setTimeout(() => { PG.notes[key] = notes.value; touch(); }, 800); });
    renderLadder(key, probs);
    titleCase(root);
    if (S.depth > D.length) S.depth = D.length;
    applyDepth();
    startSpy(root);
    setTimeout(() => window.dispatchEvent(new Event('scroll')), 60);
  }
  function startSpy(root) {
    if (spy) spy.disconnect();
    const toc = $('toc'); if (!toc || !('IntersectionObserver' in window)) return;
    spy = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; toc.querySelectorAll('.toc-sub [data-to]').forEach(b => b.classList.toggle('on', b.dataset.to === en.target.id));
      const vis = [...toc.querySelectorAll('.toc-sub:first-of-type [data-to]')].filter(b => !b.hidden), i = vis.findIndex(b => b.dataset.to === en.target.id), c = $('trk-count'); if (c && i >= 0) c.textContent = `${i + 1} of ${vis.length}`; }), { rootMargin: '-15% 0px -75% 0px' });
    root.querySelectorAll('.sec').forEach(s => spy.observe(s));
  }
  window.addEventListener('scroll', () => {
    const bar = $('read-bar'); if (!bar || parseHash().v !== 'lesson' || S.ltab !== 'learn') return;
    const pr = document.querySelector('[data-lpane="learn"] .prose'); if (!pr) return;
    const r = pr.getBoundingClientRect(), p = Math.min(1, Math.max(0, (innerHeight * .4 - r.top) / r.height));
    bar.style.width = (p * 100).toFixed(1) + '%'; $('read-pct').textContent = Math.round(p * 100) + '%';
    const past = id => { const el = $(id); return el && el.getBoundingClientRect().top < innerHeight * .4; }, inL = past('lbegin'), inW = past('st-wrap');
    { const rec = PG.lessons[S.lessonKey]; if (inW && rec && !rec.read) { rec.read = Date.now(); touch(); } }
    document.querySelectorAll('.trk').forEach(t => { const k = t.dataset.trk, on = k === 'st-warm' ? !inL : k === 'lbegin' ? inL && !inW : inW;
      t.classList.toggle('on', on); t.classList.toggle('done', !on && (k === 'st-warm' ? inL : k === 'lbegin' && inW)); });
  }, { passive: true });
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
      const [name, desc, cls] = lvInfo(lv, key.split('/')[0]);
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
    { const lb = t.closest('[data-lb]'); if (lb) { const open = lb.getAttribute('aria-expanded') !== 'true';
      document.querySelectorAll('[data-lb]').forEach(b => { const me = b === lb && open; b.setAttribute('aria-expanded', me); const pnl = document.querySelector(`[data-lbp="${b.dataset.lb}"]`); if (pnl) pnl.hidden = !me; }); return; } }
    const to = t.closest('[data-to]'); if (to) return $(to.dataset.to).scrollIntoView({ behavior: 'smooth', block: 'start' });
    { const g = t.closest('[data-goto]'); if (g) { openLesson(g.dataset.goto); window.scrollTo(0, 0); return; } }
    if (t.closest('[data-back]')) { const L = leafByKey(S.lessonKey); S.focusBranch = 'br-' + L.b.id; return go(`learn~${L.s.id}~${L.p.id}`); }
    const qa = t.closest('[data-qa]');
    if (qa) { const box = qa.closest('.qc, .hook'), f = box.querySelector('.qf'), ok = qa.dataset.qa === '1';
      box.querySelectorAll('[data-qa]').forEach(x => x.classList.remove('right', 'wrong')); qa.classList.add(ok ? 'right' : 'wrong'); f.hidden = false; f.innerHTML = ok ? f.dataset.ok : f.dataset.no; return; }
    const ac = t.closest('[data-add-core]');
    if (ac) { const lesson = await getLesson(S.lessonKey), c = lesson.core, id = S.lessonKey + '#core';
      if (c && !PG.cards[id]) { PG.cards[id] = { front: `The core idea of <b>${escHTML(lesson.title)}</b>: state it exactly, with its formula and conditions.`,
        back: `<p>${c.ideaHtml}</p>${(c.formulas || []).map(f => f.html).join('')}${(c.patterns || []).map(x => `<p><code>${x.text}</code></p>`).join('')}${c.conditions && c.conditions.length ? `<ul>${c.conditions.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}`,
        where: lesson.title, c: leafByKey(S.lessonKey).s.id, due: today(), iv: 0 }; touch(); updateBadge(); }
      ac.textContent = 'In your review cards ✓'; ac.disabled = true; return; }
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

    // Young's double slit and single-slit diffraction: intensity on the screen and the fringe pattern.
    'fringes'(el, o) {
      const single = o.mode === 'single';
      el.innerHTML = `<div class="bench"><svg viewBox="0 0 600 230" role="img" aria-label="Interference and diffraction pattern on a screen"></svg>
        <div class="controls">
          <label>Wavelength λ: <b data-r="lv"></b><input data-r="l" type="range" min="400" max="700" value="${o.lambda || 550}"></label>
          ${single ? '' : `<label>Slit separation d: <b data-r="dv"></b><input data-r="d" type="range" min="0.1" max="1" step="0.01" value="0.3"></label>`}
          <label>Screen distance D: <b data-r="Dv"></b><input data-r="D" type="range" min="0.5" max="2.5" step="0.1" value="1"></label>
          <label>Slit width a: <b data-r="av"></b><input data-r="a" type="range" min="${single ? 0.02 : 0}" max="0.2" step="0.005" value="${single ? 0.1 : 0}"></label>
        </div><div class="readout" data-r="out"></div></div>`;
      const q = n => el.querySelector(`[data-r="${n}"]`), svg = el.querySelector('svg');
      function rgb(nm) { // rough wavelength-to-colour map for display
        let r = 0, g = 0, b = 0;
        if (nm < 440) { r = (440 - nm) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; } else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
        else if (nm < 580) { r = (nm - 510) / 70; g = 1; } else if (nm < 645) { r = 1; g = (645 - nm) / 65; } else r = 1;
        return [r, g, b].map(v => Math.round(255 * Math.pow(v, 0.8)));
      }
      function draw() {
        const lam = +q('l').value * 1e-9, d = single ? 0 : +q('d').value * 1e-3, D = +q('D').value, a = +q('a').value * 1e-3;
        q('lv').textContent = q('l').value + ' nm'; if (!single) q('dv').textContent = q('d').value + ' mm'; q('Dv').textContent = D.toFixed(1) + ' m'; q('av').textContent = a ? (a * 1e3).toFixed(3) + ' mm' : 'narrow';
        const Y = 0.015, N = 600, [cr, cg, cb] = rgb(+q('l').value);
        let path = '', strip = '';
        for (let k = 0; k <= N; k++) {
          const y = -Y + 2 * Y * k / N, th = y / D;
          let I = 1;
          if (!single) I *= Math.cos(Math.PI * d * th / lam) ** 2;
          if (a > 0) { const b = Math.PI * a * th / lam; I *= b === 0 ? 1 : (Math.sin(b) / b) ** 2; }
          const x = k, yy = 150 - I * 120;
          path += (k ? 'L' : 'M') + x.toFixed(1) + ' ' + yy.toFixed(1);
          if (k % 2 === 0) strip += `<rect x="${x}" y="160" width="2.2" height="60" fill="rgb(${cr},${cg},${cb})" opacity="${I.toFixed(3)}"/>`;
        }
        let g = `<rect x="0" y="160" width="600" height="60" style="fill:#05060a"/>${strip}<path d="${path}" style="fill:none;stroke:var(--phy);stroke-width:1.6"/>`;
        g += `<line x1="300" y1="20" x2="300" y2="152" style="stroke:var(--muted);stroke-dasharray:3 3"/><text x="304" y="30">centre</text><text x="2" y="14">intensity</text><text x="2" y="156">−15 mm</text><text x="548" y="156">+15 mm</text>`;
        svg.innerHTML = g;
        let out = '';
        if (!single) out += `<span>fringe width β = λD/d = <b>${(lam * D / d * 1e3).toFixed(2)} mm</b></span>`;
        if (a > 0) out += `<span>central ${single ? 'maximum' : 'diffraction envelope'} width 2λD/a = <b>${(2 * lam * D / a * 1e3).toFixed(1)} mm</b></span>`;
        q('out').innerHTML = out;
      }
      el.querySelectorAll('input').forEach(i => i.addEventListener('input', draw)); draw();
    },

    // Projectile from ground level: trajectory, range, maximum height and time of flight; ghost path at the complementary angle.
    'projectile'(el, o) {
      el.innerHTML = `<div class="bench"><svg viewBox="0 0 600 260" role="img" aria-label="Projectile trajectory"></svg>
        <div class="controls">
          <label>Launch speed u: <b data-r="uv"></b><input data-r="u" type="range" min="5" max="40" step="0.5" value="${o.u || 20}"></label>
          <label>Launch angle θ: <b data-r="tv"></b><input data-r="t" type="range" min="5" max="85" value="${o.angle || 40}"></label>
          <label>g: <b data-r="gv"></b><input data-r="g" type="range" min="1.6" max="25" step="0.1" value="${o.g || 9.8}"></label>
        </div><div class="readout" data-r="out"></div></div>`;
      const q = n => el.querySelector(`[data-r="${n}"]`), svg = el.querySelector('svg'), R = Math.PI / 180;
      function path(u, t, g, X, Y, s) { let d = ''; const T = 2 * u * Math.sin(t) / g;
        for (let i = 0; i <= 60; i++) { const tt = T * i / 60, x = u * Math.cos(t) * tt, y = u * Math.sin(t) * tt - g * tt * tt / 2; d += (i ? 'L' : 'M') + (X + x * s).toFixed(1) + ' ' + (Y - y * s).toFixed(1); }
        return d; }
      function draw() {
        const u = +q('u').value, th = +q('t').value, g = +q('g').value, t = th * R;
        q('uv').textContent = u + ' m/s'; q('tv').textContent = th + '°'; q('gv').textContent = g.toFixed(1) + ' m/s²';
        const T = 2 * u * Math.sin(t) / g, Rg = u * u * Math.sin(2 * t) / g, H = (u * Math.sin(t)) ** 2 / (2 * g), Rmax = u * u / g;
        const X = 30, Y = 230, s = Math.min(540 / Math.max(Rmax, 1), 200 / Math.max(Rmax / 2, 1));
        let gr = `<line class="axis" x1="${X}" y1="${Y}" x2="590" y2="${Y}" style="stroke-dasharray:none"/>`;
        if (Math.abs(th - 45) > 1) gr += `<path d="${path(u, (90 - th) * R, g, X, Y, s)}" style="fill:none;stroke:var(--muted);stroke-width:1.2;stroke-dasharray:4 4"/>`;
        gr += `<path d="${path(u, t, g, X, Y, s)}" style="fill:none;stroke:var(--phy);stroke-width:2.4"/>`;
        const xh = X + Rg / 2 * s, yh = Y - H * s;
        gr += `<line x1="${xh}" y1="${Y}" x2="${xh}" y2="${yh}" style="stroke:var(--chem);stroke-dasharray:3 3"/><circle cx="${xh}" cy="${yh}" r="3.5" style="fill:var(--chem)"/>`;
        gr += `<line x1="${X}" y1="${Y}" x2="${X + 40 * Math.cos(t)}" y2="${Y - 40 * Math.sin(t)}" style="stroke:var(--ink);stroke-width:2"/><circle cx="${X + Rg * s}" cy="${Y}" r="4" style="fill:var(--phy)"/>`;
        gr += `<text x="${xh + 6}" y="${(yh + Y) / 2}">H</text><text x="${X + Rg * s / 2 - 6}" y="${Y + 18}">R</text>${Math.abs(th - 45) > 1 ? `<text x="440" y="20" style="fill:var(--muted)">dashed: same u at ${90 - th}°</text>` : ''}`;
        svg.innerHTML = gr;
        q('out').innerHTML = `<span>range R = u²sin2θ/g = <b>${Rg.toFixed(1)} m</b></span><span>max height H = <b>${H.toFixed(1)} m</b></span><span>time of flight T = <b>${T.toFixed(2)} s</b></span><span>max range (45°) = <b>${Rmax.toFixed(1)} m</b></span>`;
      }
      el.querySelectorAll('input').forEach(i => i.addEventListener('input', draw)); draw();
    },

    // Uniformly accelerated motion in a line: linked x–t, v–t and a–t graphs, with the area under v–t shaded.
    'motion-graphs'(el, o) {
      el.innerHTML = `<div class="bench"><svg viewBox="0 0 600 230" role="img" aria-label="Position, velocity and acceleration graphs"></svg>
        <div class="controls">
          <label>Initial velocity u: <b data-r="uv"></b><input data-r="u" type="range" min="-10" max="10" step="0.5" value="${o.u ?? 4}"></label>
          <label>Acceleration a: <b data-r="av"></b><input data-r="a" type="range" min="-4" max="4" step="0.1" value="${o.a ?? -1}"></label>
          <label>Time t: <b data-r="tv"></b><input data-r="t" type="range" min="0" max="10" step="0.1" value="6"></label>
        </div><div class="readout" data-r="out"></div></div>`;
      const q = n => el.querySelector(`[data-r="${n}"]`), svg = el.querySelector('svg');
      function panel(x0, title, f, lo, hi, t, fill) {
        const W = 180, H = 150, Y0 = 40, sx = W / 10, sy = H / (hi - lo || 1), Y = v => Y0 + H - (v - lo) * sy;
        let d = '', area = '';
        for (let i = 0; i <= 100; i++) { const tt = i / 10; d += (i ? 'L' : 'M') + (x0 + tt * sx).toFixed(1) + ' ' + Y(f(tt)).toFixed(1); }
        if (fill) { area = `M${x0} ${Y(0)}`; for (let i = 0; i <= Math.round(t * 10); i++) { const tt = i / 10; area += `L${(x0 + tt * sx).toFixed(1)} ${Y(f(tt)).toFixed(1)}`; } area += `L${(x0 + t * sx).toFixed(1)} ${Y(0)}Z`; }
        return `<text x="${x0}" y="24" style="font-weight:700">${title}</text><rect x="${x0}" y="${Y0}" width="${W}" height="${H}" style="fill:none;stroke:var(--rule)"/>
          ${lo < 0 && hi > 0 ? `<line x1="${x0}" y1="${Y(0)}" x2="${x0 + W}" y2="${Y(0)}" style="stroke:var(--muted);stroke-dasharray:3 3"/>` : ''}
          ${area ? `<path d="${area}" style="fill:color-mix(in srgb, var(--phy) 18%, transparent)"/>` : ''}<path d="${d}" style="fill:none;stroke:var(--phy);stroke-width:2"/>
          <line x1="${x0 + t * sx}" y1="${Y0}" x2="${x0 + t * sx}" y2="${Y0 + H}" style="stroke:var(--chem)"/><circle cx="${x0 + t * sx}" cy="${Y(f(t))}" r="4" style="fill:var(--chem)"/>
          <text x="${x0 + W - 8}" y="${Y0 + H + 16}" style="fill:var(--muted)">t</text>`;
      }
      function draw() {
        const u = +q('u').value, a = +q('a').value, t = +q('t').value;
        q('uv').textContent = u + ' m/s'; q('av').textContent = a.toFixed(1) + ' m/s²'; q('tv').textContent = t.toFixed(1) + ' s';
        const x = tt => u * tt + a * tt * tt / 2, v = tt => u + a * tt;
        let xs = [], vs = []; for (let i = 0; i <= 100; i++) { xs.push(x(i / 10)); vs.push(v(i / 10)); }
        const pad = (lo, hi) => { const m = Math.max(Math.abs(lo), Math.abs(hi), 1); return [Math.min(lo, 0) - .1 * m, Math.max(hi, 0) + .1 * m]; };
        const [xl, xh] = pad(Math.min(...xs), Math.max(...xs)), [vl, vh] = pad(Math.min(...vs), Math.max(...vs));
        svg.innerHTML = panel(10, 'x–t: slope is v', x, xl, xh, t) + panel(210, 'v–t: slope a, area Δx', v, vl, vh, t, true) + panel(410, 'a–t: area is Δv', () => a, Math.min(a, 0) - 1, Math.max(a, 0) + 1, t, true);
        const dist = (() => { let s = 0; for (let i = 0; i < 200; i++) { const t0 = t * i / 200; s += Math.abs(v(t0 + t / 400)) * t / 200; } return s; })();
        q('out').innerHTML = `<span>x = ut + ½at² = <b>${x(t).toFixed(2)} m</b></span><span>v = u + at = <b>${v(t).toFixed(2)} m/s</b></span><span>distance travelled = <b>${dist.toFixed(2)} m</b></span>${a !== 0 && -u / a > 0 && -u / a < t ? `<span>turns around at t = <b>${(-u / a).toFixed(2)} s</b></span>` : ''}`;
      }
      el.querySelectorAll('input').forEach(i => i.addEventListener('input', draw)); draw();
    },

    // Unpolarised light through two or three polaroids: Malus' law at each sheet.
    'polarisers'(el) {
      el.innerHTML = `<div class="bench"><svg viewBox="0 0 600 200" role="img" aria-label="Light passing through polaroid sheets"></svg>
        <div class="controls">
          <label>Second polaroid at θ: <b data-r="tv"></b><input data-r="t" type="range" min="0" max="180" value="30"></label>
          <label><input data-r="three" type="checkbox"> add a third polaroid crossed with the first (at 90°)</label>
        </div><div class="readout" data-r="out"></div></div>`;
      const q = n => el.querySelector(`[data-r="${n}"]`), svg = el.querySelector('svg'), R = Math.PI / 180;
      function sheet(x, ang, label) {
        const dx = 26 * Math.sin(ang * R), dy = -26 * Math.cos(ang * R);
        return `<ellipse cx="${x}" cy="90" rx="16" ry="44" style="fill:color-mix(in srgb, var(--phy) 12%, transparent);stroke:var(--phy);stroke-width:1.6"/>
          <line x1="${x - dx}" y1="${90 - dy}" x2="${x + dx}" y2="${90 + dy}" style="stroke:var(--ink);stroke-width:2.4"/><text x="${x - 22}" y="160">${label}</text>`;
      }
      function beam(x1, x2, I, ang) { // beam segment whose opacity shows intensity; double arrow shows E direction
        let s = `<rect x="${x1}" y="82" width="${x2 - x1}" height="16" style="fill:var(--phy)" opacity="${(0.08 + 0.85 * I).toFixed(3)}"/>`;
        const cx = (x1 + x2) / 2;
        if (ang === null) s += `<text x="${cx - 10}" y="60">✳</text>`;
        else if (I > 0.005) { const L = 6 + 16 * Math.sqrt(I), dx = L * Math.sin(ang * R), dy = -L * Math.cos(ang * R);
          s += `<line x1="${cx - dx}" y1="${50 - dy}" x2="${cx + dx}" y2="${50 + dy}" style="stroke:var(--ink);stroke-width:2"/>`; }
        return s + `<text x="${cx - 18}" y="190">${(100 * I).toFixed(1)}%</text>`;
      }
      function draw() {
        const t = +q('t').value, three = q('three').checked;
        q('tv').textContent = t + '°';
        const I1 = 0.5, I2 = I1 * Math.cos(t * R) ** 2, I3 = three ? I2 * Math.cos((90 - t) * R) ** 2 : null;
        let g = beam(10, 150, 1, null) + sheet(160, 0, 'P₁ at 0°') + beam(176, 300, I1, 0) + sheet(310, t, `P₂ at ${t}°`);
        if (three) g += beam(326, 450, I2, t) + sheet(460, 90, 'P₃ at 90°') + beam(476, 590, I3, 90);
        else g += beam(326, 590, I2, t);
        svg.innerHTML = g;
        let out = `<span>after P₁: <b>I₀/2</b></span><span>after P₂: <b>(I₀/2) cos²θ = ${(100 * I2).toFixed(1)}% of I₀</b></span>`;
        if (three) out += `<span>after P₃: <b>(I₀/8) sin²2θ = ${(100 * I3).toFixed(1)}% of I₀</b></span>`;
        q('out').innerHTML = out;
      }
      q('t').addEventListener('input', draw); q('three').addEventListener('change', draw); draw();
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
  RENDER.practice = async () => {
    const leaves = liveLeaves().filter(x => x.l.problems);
    $('sets').innerHTML = `<div class="panel set"><span class="eyebrow">Recommended</span><h3>Today's mixed set</h3><p>6 problems across levels and topics, shuffled daily.</p><div><button class="btn" data-start="daily">Start</button></div></div>` +
      leaves.map(x => { const L = leafByKey(x.key); return `<div class="panel set s-${x.s.id}"><span class="eyebrow">${escHTML(L.p.name)} · ${escHTML(L.b.name)}</span><h3>${escHTML(x.l.name)}</h3><p>${x.l.problems} problems, NCERT first, then up to Olympiad.</p><div><button class="btn ghost" data-start-leaf="${x.key}">Start</button></div></div>`; }).join('');
    const count = k => leaves.reduce((a, x) => a + ((x.l.lv || {})[k] || 0), 0);
    $('level-row').innerHTML = LVL_ORDER.map(k => { const n = count(k); return n ? `<button data-level="${k}"><span class="tier ${LEVELS[k][2]}" style="padding:0;background:none;font-size:14px">${LEVELS[k][0]}</span><span>${n} problems</span></button>` : ''; }).join('');
  };
  document.addEventListener('click', async e => {
    const d = e.target.closest('[data-start="daily"]'); if (d) return startSet(dailySet(await sampleProblems(8, undefined, true)), "Today's mixed set", 0);
    const lf = e.target.closest('[data-start-leaf]'); if (lf) { const ps = await getProblems(lf.dataset.startLeaf); return startSet(ps, leafByKey(lf.dataset.startLeaf).l.name, 0); }
    const lv = e.target.closest('[data-level]'); if (lv) { const k = lv.dataset.level, ps = (await sampleProblems(10, l => (l.lv || {})[k])).filter(p => p.lvl === k).sort(() => Math.random() - .5).slice(0, 20); return startSet(ps, LEVELS[k][0], 0); }
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
        <div class="pmeta"><span class="tier ${LEVELS[p.lvl][2]}">${lvInfo(p.lvl, String(S.lessonKey || '').split('/')[0])[0]}</span><span class="src ${p.lvl.startsWith('ncert') ? 'src-ncert' : ''}">${escHTML(p.source || (L ? L.l.name : ''))}</span>${ver}</div>
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
  Promise.all([fetchJSON('data/tree.json'), fetchJSON('data/ncert.json')])
    .then(([t, n]) => { TREE = t; NCERT = n; route();
      // After the first paint: home-page sparks, then the search index (or sooner, when the palette opens).
      (window.requestIdleCallback || (f => setTimeout(f, 1200)))(() => { loadSearch(); loadKatex().catch(() => {}); }); })
    .catch(err => { document.querySelector('main .inner').innerHTML = `<div class="empty-card panel">The archive data could not be loaded (${escHTML(err.message)}). Reload the page to try again.</div>`; });
})();
