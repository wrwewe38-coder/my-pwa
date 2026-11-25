const CSS = `
.book-status-bar { display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--text-secondary); margin-bottom: 10px; padding: 0 4px; }
.mode-pills { display: flex; gap: 8px; margin-bottom: 14px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; padding-bottom: 2px; }
.mode-pills::-webkit-scrollbar { display: none; }
.mode-pill { flex: 0 0 auto; border: none; background: var(--bg-card); color: var(--text-secondary); padding: 8px 13px; border-radius: 10px; font-size: 13px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; }
.mode-pill.active { background: var(--accent); color: #FFFFFF; }
.badge-dot { background: var(--red); color: #FFFFFF; font-size: 11px; padding: 1px 6px; border-radius: 10px; font-weight: 700; }
.mode-pill.active .badge-dot { background: rgba(255, 255, 255, 0.28); }
.vocab-card { background: var(--bg-card); border-radius: 16px; padding: 20px; margin-bottom: 14px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04); }
.card-meta { display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: var(--text-secondary); margin-bottom: 14px; }
.master-badge { padding: 3px 8px; border-radius: 10px; font-size: 12px; font-weight: 600; background: var(--bg-subtle); color: var(--text-secondary); }
.master-badge.done { background: var(--green-bg); color: var(--green); }
.word-main { text-align: center; padding: 10px 0 16px; }
.word-text { font-size: 30px; font-weight: 700; letter-spacing: -0.4px; margin-bottom: 8px; word-break: break-word; }
.phonetic-row { display: inline-flex; align-items: center; gap: 8px; background: var(--bg-subtle); padding: 6px 14px; border-radius: 20px; font-size: 15px; color: var(--text-secondary); cursor: pointer; }
.speaker-icon { width: 18px; height: 18px; stroke: var(--accent); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.reveal-box { border-top: 0.5px solid var(--separator); padding-top: 14px; margin-top: 8px; }
.meaning-text { font-size: 17px; font-weight: 600; margin-bottom: 12px; line-height: 1.4; }
.pos-tag { display: inline-block; font-size: 12px; color: var(--accent); background: rgba(0, 122, 255, 0.12); padding: 2px 6px; border-radius: 6px; margin-right: 6px; font-weight: 600; }
.example-box { background: var(--bg-primary); border-radius: 12px; padding: 12px 14px; }
.example-en-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 6px; }
.example-en { font-size: 14px; line-height: 1.45; color: var(--text-primary); }
.example-cn { font-size: 13px; color: var(--text-secondary); line-height: 1.4; }
.icon-btn { background: none; border: none; padding: 4px; cursor: pointer; flex-shrink: 0; }
.card-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
.nav-arrows { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
.quiz-score { display: flex; justify-content: space-between; font-size: 13px; color: var(--text-secondary); margin-bottom: 12px; }
.listen-btn { width: 78px; height: 78px; border-radius: 39px; border: none; background: var(--accent); color: #FFFFFF; display: flex; align-items: center; justify-content: center; margin: 8px auto 10px; box-shadow: 0 6px 18px rgba(0, 122, 255, 0.3); cursor: pointer; }
.listen-btn:active { transform: scale(0.94); }
.listen-btn svg { width: 32px; height: 32px; stroke: #FFFFFF; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.speed-row { display: flex; justify-content: center; gap: 8px; margin-bottom: 8px; }
.speed-chip { border: none; background: var(--bg-subtle); color: var(--text-secondary); padding: 5px 12px; border-radius: 14px; font-size: 12px; font-weight: 600; cursor: pointer; }
.speed-chip.active { background: var(--accent); color: #FFFFFF; }
.quiz-options { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
.option-btn { width: 100%; text-align: left; padding: 13px 15px; border-radius: 12px; border: 1.5px solid transparent; background: var(--bg-card); color: var(--text-primary); font-size: 15px; line-height: 1.35; cursor: pointer; }
.option-btn.correct { background: var(--green-bg); border-color: var(--green); color: var(--green); font-weight: 600; }
.option-btn.wrong { background: var(--red-bg); border-color: var(--red); color: var(--red); }
.spell-input { width: 100%; padding: 14px 16px; font-size: 20px; font-weight: 600; text-align: center; letter-spacing: 1px; border-radius: 12px; border: 1.5px solid var(--separator); background: var(--bg-primary); color: var(--text-primary); outline: none; margin: 12px 0; user-select: text; -webkit-user-select: text; }
.spell-input:focus { border-color: var(--accent); }
.spell-input.correct { border-color: var(--green); background: var(--green-bg); color: var(--green); }
.spell-input.wrong { border-color: var(--red); background: var(--red-bg); color: var(--red); }
.quiz-reveal-card { margin-top: 12px; background: var(--bg-card); border-radius: 12px; padding: 14px 16px; }
.mistake-item { background: var(--bg-card); border-radius: 12px; padding: 14px 16px; margin-bottom: 10px; }
.mistake-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.mistake-word { font-size: 18px; font-weight: 700; }
.mistake-actions { display: flex; align-items: center; gap: 10px; }
.remove-tag { border: none; background: var(--green-bg); color: var(--green); font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 10px; cursor: pointer; }
`;

const FALLBACK_DB = {
  cet4: [
    { word: 'abandon', phonetic: '/əˈbændən/', pos: 'v.', meaning: '放弃，遗弃，抛弃', example: 'They had to abandon the car and walk the rest of the way.', exampleCn: '他们不得不弃车步行走完剩下的路。' },
    { word: 'adequate', phonetic: '/ˈædɪkwət/', pos: 'adj.', meaning: '足够的，充分的，胜任的', example: 'Make sure you have adequate time to prepare for the exam.', exampleCn: '确保你有足够的时间来准备考试。' },
    { word: 'candidate', phonetic: '/ˈkændɪdət/', pos: 'n.', meaning: '候选人，求职者，应试者', example: 'There are three candidates competing for the leadership role.', exampleCn: '有三位候选人正在角逐这个领导职位。' },
    { word: 'efficient', phonetic: '/ɪˈfɪʃnt/', pos: 'adj.', meaning: '效率高的，有能力的', example: 'The new software provides a much more efficient workflow.', exampleCn: '这款新软件提供了高效得多的工作流程。' },
    { word: 'hesitate', phonetic: '/ˈhezɪteɪt/', pos: 'v.', meaning: '犹豫，踌躇，迟疑', example: 'Please do not hesitate to contact me if you have questions.', exampleCn: '如果你有任何疑问，请随时联系我。' },
    { word: 'promote', phonetic: '/prəˈməʊt/', pos: 'v.', meaning: '促进，晋升，推广', example: 'Regular exercise helps promote both physical and mental health.', exampleCn: '规律运动有助于促进身心健康。' }
  ],
  cet6: [
    { word: 'ambiguous', phonetic: '/æmˈbɪɡjuəs/', pos: 'adj.', meaning: '模棱两可的，含糊不清的', example: 'His reply to my question was somewhat ambiguous.', exampleCn: '他对我问题的回答有些含糊其辞。' },
    { word: 'coherent', phonetic: '/kəʊˈhɪərənt/', pos: 'adj.', meaning: '连贯的，有条理的，一致的', example: 'She presented a clear and coherent argument in her paper.', exampleCn: '她在论文中提出了清晰且连贯的论点。' },
    { word: 'deteriorate', phonetic: '/dɪˈtɪəriəreɪt/', pos: 'v.', meaning: '恶化，变坏，退化', example: 'Weather conditions began to deteriorate rapidly after sunset.', exampleCn: '日落后天气状况开始迅速恶化。' },
    { word: 'incentive', phonetic: '/ɪnˈsentɪv/', pos: 'n.', meaning: '激励，刺激，动机', example: 'Bonus payments provide an incentive to work harder.', exampleCn: '奖金制度为更努力工作提供了激励。' },
    { word: 'paradigm', phonetic: '/ˈpærədaɪm/', pos: 'n.', meaning: '范式，典范，模式', example: 'Artificial intelligence is creating a new paradigm in research.', exampleCn: '人工智能正在科研领域创造一种新的范式。' },
    { word: 'vulnerable', phonetic: '/ˈvʌlnərəbl/', pos: 'adj.', meaning: '脆弱的，易受伤害的', example: 'Coastal cities are particularly vulnerable to rising sea levels.', exampleCn: '沿海城市尤其容易受到海平面上升的影响。' }
  ],
  ielts: [
    { word: 'ubiquitous', phonetic: '/juːˈbɪkwɪtəs/', pos: 'adj.', meaning: '无处不在的，普遍存在的', example: 'Smartphones have become ubiquitous in modern daily life.', exampleCn: '智能手机在现代日常生活中已变得无处不在。' },
    { word: 'mitigate', phonetic: '/ˈmɪtɪɡeɪt/', pos: 'v.', meaning: '缓解，减轻，缓和', example: 'Planting trees can help mitigate the effects of urban heat.', exampleCn: '植树有助于缓解城市热岛效应。' },
    { word: 'resilient', phonetic: '/rɪˈzɪliənt/', pos: 'adj.', meaning: '有韧性的，能迅速恢复的', example: 'Local economies proved remarkably resilient after the crisis.', exampleCn: '危机过后，当地经济展现出了惊人的韧性。' },
    { word: 'unprecedented', phonetic: '/ʌnˈpresɪdentɪd/', pos: 'adj.', meaning: '史无前例的，空前的', example: 'Global temperatures reached an unprecedented level this summer.', exampleCn: '今年夏天全球气温达到了史无前例的水平。' },
    { word: 'pragmatic', phonetic: '/præɡˈmætɪk/', pos: 'adj.', meaning: '务实的，实用主义的', example: 'We need a pragmatic approach to solve this engineering problem.', exampleCn: '我们需要一种务实的方法来解决这个工程问题。' },
    { word: 'fluctuate', phonetic: '/ˈflʌktʃueɪt/', pos: 'v.', meaning: '波动，起伏，变动', example: 'Energy prices tend to fluctuate significantly across seasons.', exampleCn: '能源价格在不同季节往往会有显著波动。' }
  ]
};

const BOOK_FILES = { cet4: './data/cet4.json', cet6: './data/cet6.json', ielts: './data/ielts.json' };
const SPEAKER_SVG = `<svg class="speaker-icon" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;

let appRef, viewEl, stageEl;
const loadedBooks = {};
const bookMeta = {};

const state = {
  book: 'cet4',
  mode: 'card',
  accent: localStorage.getItem('vocab_accent') || 'en-US',
  rate: 1.0,
  bookIndices: JSON.parse(localStorage.getItem('vocab_indices') || '{"cet4":0,"cet6":0,"ielts":0}'),
  revealed: false,
  mastered: new Set(JSON.parse(localStorage.getItem('vocab_mastered_v2') || '[]')),
  mistakes: JSON.parse(localStorage.getItem('vocab_mistakes') || '{}'),
  quiz: { word: null, options: [], selectedKey: null, correct: 0, wrong: 0 },
  spell: { word: null, submitted: false, isCorrect: false, userInput: '', showHint: false, correct: 0, wrong: 0 }
};

function normalizeEntry(raw) {
  const word = (raw.word || raw.headWord || raw.name || '').trim();
  const phonetic = raw.phonetic || raw.usphone || raw.ukphone || '';
  const pos = raw.pos || (raw.translations && raw.translations[0]?.type) || '';
  const meaning = raw.meaning
    || (Array.isArray(raw.trans) ? raw.trans.join('；') : raw.trans)
    || (raw.translations && raw.translations.map(t => t.translation).join('；'))
    || '暂无释义';
  const example = raw.example || (raw.sentences && raw.sentences[0]?.sentence) || '';
  const exampleCn = raw.exampleCn || (raw.sentences && raw.sentences[0]?.translation) || '';
  return { key: word.toLowerCase(), word, phonetic: phonetic ? (phonetic.startsWith('/') ? phonetic : `/${phonetic}/`) : '', pos, meaning, example, exampleCn };
}

async function loadBook(bookId) {
  if (loadedBooks[bookId]) return loadedBooks[bookId];
  try {
    const res = await fetch(BOOK_FILES[bookId]);
    if (!res.ok) throw new Error('Not found');
    const json = await res.json();
    const arr = Array.isArray(json) ? json : (json.words || []);
    if (arr.length === 0) throw new Error('Empty');
    loadedBooks[bookId] = arr.map(normalizeEntry).filter(w => w.word);
    bookMeta[bookId] = `完整词库 · 共 ${loadedBooks[bookId].length} 词`;
  } catch {
    loadedBooks[bookId] = FALLBACK_DB[bookId].map(normalizeEntry);
    bookMeta[bookId] = `内置示例 · 共 ${loadedBooks[bookId].length} 词`;
  }
  return loadedBooks[bookId];
}

function speak(text, customRate) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = state.accent;
  utter.rate = customRate || 1.0;
  window.speechSynthesis.speak(utter);
}

function updateBadges() {
  const mCount = state.mastered.size;
  const errCount = Object.keys(state.mistakes).length;
  appRef.updateToolBadge('vocab', `${mCount} 词`);
  const homeP = document.getElementById('home-vocab-progress');
  const homeM = document.getElementById('home-mistake-count');
  if (homeP) homeP.textContent = `${mCount} 词`;
  if (homeM) homeM.textContent = `${errCount} 词`;

  const pillDot = viewEl.querySelector('#mistake-pill-count');
  if (pillDot) {
    pillDot.textContent = errCount;
    pillDot.style.display = errCount > 0 ? 'inline-block' : 'none';
  }
  const list = loadedBooks[state.book] || [];
  const bookMastered = list.filter(w => state.mastered.has(w.key)).length;
  viewEl.querySelector('#book-source-info').textContent = bookMeta[state.book] || '';
  viewEl.querySelector('#book-master-info').textContent = `已掌握 ${bookMastered} / ${list.length}`;
}

function saveProgress() {
  localStorage.setItem('vocab_mastered_v2', JSON.stringify([...state.mastered]));
  localStorage.setItem('vocab_mistakes', JSON.stringify(state.mistakes));
  localStorage.setItem('vocab_indices', JSON.stringify(state.bookIndices));
  updateBadges();
}

async function renderStage() {
  stageEl.innerHTML = `<div class="empty-state">正在加载词库...</div>`;
  const list = await loadBook(state.book);
  updateBadges();
  if (state.mode === 'card') renderCardMode(list);
  else if (state.mode === 'quiz' || state.mode === 'listen') {
    if (!state.quiz.word) prepareQuiz(list);
    renderQuizMode(list);
  } else if (state.mode === 'spell') {
    if (!state.spell.word) prepareSpell(list);
    renderSpellMode(list);
  } else if (state.mode === 'mistakes') renderMistakesMode();
}

function renderCardMode(list) {
  let idx = state.bookIndices[state.book] || 0;
  if (idx >= list.length) idx = 0;
  state.bookIndices[state.book] = idx;
  const item = list[idx];
  const isMastered = state.mastered.has(item.key);

  stageEl.innerHTML = `
    <div class="vocab-card">
      <div class="card-meta"><span>第 ${idx + 1} / ${list.length} 词</span><span class="master-badge ${isMastered ? 'done' : ''}">${isMastered ? '已掌握' : '学习中'}</span></div>
      <div class="word-main"><div class="word-text">${item.word}</div><div class="phonetic-row" id="btn-speak-word">${SPEAKER_SVG}<span>${item.phonetic || '点击发音'}</span></div></div>
      ${state.revealed ? `
        <div class="reveal-box">
          <div class="meaning-text">${item.pos ? `<span class="pos-tag">${item.pos}</span>` : ''}${item.meaning}</div>
          ${item.example ? `<div class="example-box"><div class="example-en-row"><div class="example-en">${item.example}</div><button class="icon-btn" id="btn-speak-example">${SPEAKER_SVG}</button></div><div class="example-cn">${item.exampleCn}</div></div>` : ''}
        </div>
      ` : `<button class="ios-btn secondary" id="btn-reveal" style="margin-top:8px;">点击查看释义与例句</button>`}
    </div>
    <div class="card-actions">
      <button class="ios-btn secondary" id="btn-unmaster">${isMastered ? '取消掌握' : '加入错题本'}</button>
      <button class="ios-btn green" id="btn-master">已掌握</button>
    </div>
    <div class="nav-arrows">
      <button class="ios-btn secondary" id="btn-prev">上一个</button>
      <button class="ios-btn secondary" id="btn-rand">随机跳词</button>
      <button class="ios-btn" id="btn-next">下一个</button>
    </div>
  `;

  stageEl.querySelector('#btn-speak-word').onclick = () => speak(item.word);
  if (state.revealed) {
    const exBtn = stageEl.querySelector('#btn-speak-example');
    if (exBtn) exBtn.onclick = () => speak(item.example, 0.95);
  } else {
    stageEl.querySelector('#btn-reveal').onclick = () => { state.revealed = true; renderCardMode(list); };
  }
  stageEl.querySelector('#btn-unmaster').onclick = () => {
    if (isMastered) state.mastered.delete(item.key); else state.mistakes[item.key] = item;
    saveProgress(); state.revealed = true; renderCardMode(list);
  };
  stageEl.querySelector('#btn-master').onclick = () => {
    state.mastered.add(item.key); state.bookIndices[state.book] = (idx + 1) % list.length; state.revealed = false; saveProgress(); renderCardMode(list);
  };
  stageEl.querySelector('#btn-prev').onclick = () => { state.bookIndices[state.book] = (idx - 1 + list.length) % list.length; state.revealed = false; saveProgress(); renderCardMode(list); };
  stageEl.querySelector('#btn-rand').onclick = () => { state.bookIndices[state.book] = Math.floor(Math.random() * list.length); state.revealed = false; saveProgress(); renderCardMode(list); };
  stageEl.querySelector('#btn-next').onclick = () => { state.bookIndices[state.book] = (idx + 1) % list.length; state.revealed = false; saveProgress(); renderCardMode(list); };
}

function prepareQuiz(list) {
  const target = list[Math.floor(Math.random() * list.length)];
  const others = [];
  const used = new Set([target.key]);
  while (others.length < Math.min(3, list.length - 1)) {
    const cand = list[Math.floor(Math.random() * list.length)];
    if (!used.has(cand.key)) { used.add(cand.key); others.push(cand); }
  }
  state.quiz.word = target;
  state.quiz.options = [target, ...others].sort(() => Math.random() - 0.5);
  state.quiz.selectedKey = null;
}

function renderQuizMode(list) {
  const isListen = state.mode === 'listen';
  const q = state.quiz;
  const item = q.word;
  const answered = q.selectedKey !== null;

  stageEl.innerHTML = `
    <div class="quiz-score"><span>${isListen ? '听发音选择中文释义' : '看单词选择中文释义'}</span><span>对 ${q.correct} / 错 ${q.wrong}</span></div>
    <div class="vocab-card" style="text-align:center;">
      ${isListen ? `
        <button class="listen-btn" id="btn-listen-play"><svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></button>
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">点击喇叭播放发音</div>
        <div class="speed-row">
          <button class="speed-chip ${state.rate === 1.0 ? 'active' : ''}" data-rate="1">正常语速</button>
          <button class="speed-chip ${state.rate === 0.75 ? 'active' : ''}" data-rate="0.75">0.75x 慢速</button>
        </div>
      ` : `<div class="word-text" style="margin-top:6px;">${item.word}</div><div class="phonetic-row" id="btn-quiz-speak">${SPEAKER_SVG}<span>${item.phonetic || '点击发音'}</span></div>`}
    </div>
    <div class="quiz-options">
      ${q.options.map(opt => {
        let cls = 'option-btn';
        if (answered) { if (opt.key === item.key) cls += ' correct'; else if (opt.key === q.selectedKey) cls += ' wrong'; }
        return `<button class="${cls}" data-key="${opt.key}" ${answered ? 'disabled' : ''}>${opt.pos ? `<span class="pos-tag">${opt.pos}</span>` : ''}${opt.meaning}</button>`;
      }).join('')}
    </div>
    ${answered ? `
      <div class="quiz-reveal-card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <strong style="font-size:18px;">${item.word} <span style="font-weight:400;font-size:14px;color:var(--text-secondary);">${item.phonetic}</span></strong>
          <button class="icon-btn" id="btn-reveal-speak">${SPEAKER_SVG}</button>
        </div>
        ${q.selectedKey !== item.key ? `<div style="font-size:12px;color:var(--red);margin-bottom:6px;">已自动加入错题本</div>` : ''}
        ${item.example ? `<div class="example-en" style="margin-bottom:4px;">${item.example}</div><div class="example-cn">${item.exampleCn}</div>` : ''}
      </div>
      <button class="ios-btn" id="btn-next-quiz" style="margin-top:12px;">下一题</button>
    ` : ''}
  `;

  if (isListen) {
    stageEl.querySelector('#btn-listen-play').onclick = () => speak(item.word, state.rate);
    stageEl.querySelectorAll('.speed-chip').forEach(btn => {
      btn.onclick = () => { state.rate = Number(btn.dataset.rate); renderQuizMode(list); speak(item.word, state.rate); };
    });
  } else {
    stageEl.querySelector('#btn-quiz-speak').onclick = () => speak(item.word);
  }
  stageEl.querySelectorAll('.option-btn').forEach(btn => {
    btn.onclick = () => {
      if (state.quiz.selectedKey !== null) return;
      state.quiz.selectedKey = btn.dataset.key;
      if (btn.dataset.key === item.key) state.quiz.correct += 1;
      else { state.quiz.wrong += 1; state.mistakes[item.key] = item; saveProgress(); }
      renderQuizMode(list);
    };
  });
  if (answered) {
    stageEl.querySelector('#btn-reveal-speak').onclick = () => speak(item.word);
    stageEl.querySelector('#btn-next-quiz').onclick = () => {
      prepareQuiz(list); renderQuizMode(list);
      if (isListen) speak(state.quiz.word.word, state.rate);
    };
  }
}

function prepareSpell(list) {
  state.spell.word = list[Math.floor(Math.random() * list.length)];
  state.spell.submitted = false; state.spell.isCorrect = false; state.spell.userInput = ''; state.spell.showHint = false;
}

function renderSpellMode(list) {
  const sp = state.spell;
  const item = sp.word;
  const hintMask = item.word[0] + ' ' + '_ '.repeat(Math.max(0, item.word.length - 1)).trim();

  stageEl.innerHTML = `
    <div class="quiz-score"><span>听发音并拼写出完整英文单词</span><span>对 ${sp.correct} / 错 ${sp.wrong}</span></div>
    <div class="vocab-card" style="text-align:center;">
      <button class="listen-btn" id="btn-spell-play"><svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></button>
      <div class="speed-row">
        <button class="speed-chip ${state.rate === 1.0 ? 'active' : ''}" data-rate="1">正常语速</button>
        <button class="speed-chip ${state.rate === 0.75 ? 'active' : ''}" data-rate="0.75">0.75x 慢速</button>
      </div>
      <div style="font-size:15px;font-weight:600;margin-top:10px;">${item.pos ? `<span class="pos-tag">${item.pos}</span>` : ''}${item.meaning}</div>
      ${sp.showHint && !sp.submitted ? `<div style="margin-top:8px;font-size:16px;letter-spacing:2px;color:var(--accent);font-weight:600;">${hintMask} (${item.word.length} 字母)</div>` : ''}
      <input type="text" id="spell-input" class="spell-input ${sp.submitted ? (sp.isCorrect ? 'correct' : 'wrong') : ''}" placeholder="输入英文单词..." value="${sp.userInput}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" ${sp.submitted ? 'disabled' : ''} />
      ${!sp.submitted ? `<div class="card-actions" style="margin-bottom:0;"><button class="ios-btn secondary" id="btn-spell-hint">首字母提示</button><button class="ios-btn" id="btn-spell-submit">提交检查</button></div>` : ''}
    </div>
    ${sp.submitted ? `
      <div class="quiz-reveal-card">
        <div style="font-size:14px;font-weight:600;color:${sp.isCorrect ? 'var(--green)' : 'var(--red)'};margin-bottom:6px;">${sp.isCorrect ? '拼写正确！' : '拼写有误，已自动加入错题本'}</div>
        <div style="font-size:20px;font-weight:700;margin-bottom:6px;">${item.word} <span style="font-weight:400;font-size:14px;color:var(--text-secondary);">${item.phonetic}</span></div>
        ${item.example ? `<div class="example-en" style="margin-bottom:4px;">${item.example}</div><div class="example-cn">${item.exampleCn}</div>` : ''}
      </div>
      <button class="ios-btn" id="btn-next-spell" style="margin-top:12px;">下一题</button>
    ` : ''}
  `;

  stageEl.querySelector('#btn-spell-play').onclick = () => speak(item.word, state.rate);
  stageEl.querySelectorAll('.speed-chip').forEach(btn => {
    btn.onclick = () => { state.rate = Number(btn.dataset.rate); renderSpellMode(list); speak(item.word, state.rate); };
  });

  if (!sp.submitted) {
    const inputEl = stageEl.querySelector('#spell-input');
    const doSubmit = () => {
      const val = inputEl.value.trim();
      if (!val) return;
      sp.userInput = val; sp.submitted = true;
      sp.isCorrect = val.toLowerCase() === item.word.toLowerCase();
      if (sp.isCorrect) sp.correct += 1; else { sp.wrong += 1; state.mistakes[item.key] = item; saveProgress(); }
      renderSpellMode(list);
    };
    stageEl.querySelector('#btn-spell-submit').onclick = doSubmit;
    inputEl.onkeydown = (e) => { if (e.key === 'Enter') doSubmit(); };
    stageEl.querySelector('#btn-spell-hint').onclick = () => { sp.userInput = inputEl.value; sp.showHint = true; renderSpellMode(list); };
  } else {
    stageEl.querySelector('#btn-next-spell').onclick = () => { prepareSpell(list); renderSpellMode(list); speak(state.spell.word.word, state.rate); };
  }
}

function renderMistakesMode() {
  const items = Object.values(state.mistakes);
  if (items.length === 0) { stageEl.innerHTML = `<div class="empty-state">错题本目前是空的。<br/>在测验中答错的单词会自动收录到这里。</div>`; return; }
  stageEl.innerHTML = `
    <div class="quiz-score"><span>共收录 ${items.length} 个错词</span><button style="background:none;border:none;color:var(--red);font-size:13px;cursor:pointer;" id="btn-clear-mistakes">清空全部</button></div>
    ${items.map(item => `
      <div class="mistake-item">
        <div class="mistake-top">
          <div><span class="mistake-word">${item.word}</span><span style="font-size:13px;color:var(--text-secondary);margin-left:6px;">${item.phonetic}</span></div>
          <div class="mistake-actions"><button class="icon-btn btn-m-speak" data-word="${item.word}">${SPEAKER_SVG}</button><button class="remove-tag btn-m-remove" data-key="${item.key}">已掌握</button></div>
        </div>
        <div style="font-size:14px;margin-bottom:4px;">${item.pos ? `<span class="pos-tag">${item.pos}</span>` : ''}${item.meaning}</div>
        ${item.example ? `<div class="example-cn">${item.example}</div>` : ''}
      </div>
    `).join('')}
  `;
  stageEl.querySelector('#btn-clear-mistakes').onclick = () => { if (confirm('确定清空所有错题吗？')) { state.mistakes = {}; saveProgress(); renderMistakesMode(); } };
  stageEl.querySelectorAll('.btn-m-speak').forEach(btn => btn.onclick = () => speak(btn.dataset.word));
  stageEl.querySelectorAll('.btn-m-remove').forEach(btn => btn.onclick = () => { delete state.mistakes[btn.dataset.key]; saveProgress(); renderMistakesMode(); });
}

function close() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  viewEl.classList.remove('open');
  viewEl.setAttribute('aria-hidden', 'true');
}

export default {
  id: 'vocab',
  name: '背单词（四六级 / 雅思）',
  shortName: '背单词',
  btnClass: '',
  resetLabel: '清空背单词掌握记录与错题本',
  init(app) {
    appRef = app;
    app.mountStyle('vocab', CSS);
    viewEl = app.mountView(`
      <div id="vocab-view" class="sub-view" aria-hidden="true">
        <header class="ios-header">
          <div class="header-left"><button class="nav-text-btn" id="close-vocab-app"><span style="font-size:22px;line-height:1;">‹</span> 返回</button></div>
          <h1>背单词</h1>
          <div class="header-right"><button class="accent-pill" id="btn-accent">${state.accent === 'en-US' ? '美音 US' : '英音 UK'}</button></div>
        </header>
        <div class="sub-content">
          <div class="segmented" id="book-switcher">
            <button class="seg-btn active" data-book="cet4">四级 CET-4</button>
            <button class="seg-btn" data-book="cet6">六级 CET-6</button>
            <button class="seg-btn" data-book="ielts">雅思 IELTS</button>
          </div>
          <div class="book-status-bar"><span id="book-source-info">加载中...</span><span id="book-master-info">已掌握 0</span></div>
          <div class="mode-pills" id="mode-switcher">
            <button class="mode-pill active" data-mode="card">卡片背诵</button>
            <button class="mode-pill" data-mode="quiz">看词选义</button>
            <button class="mode-pill" data-mode="listen">听力测试</button>
            <button class="mode-pill" data-mode="spell">听音拼写</button>
            <button class="mode-pill" data-mode="mistakes">错题本 <span class="badge-dot" id="mistake-pill-count" style="display:none;">0</span></button>
          </div>
          <div id="vocab-stage"></div>
        </div>
      </div>
    `);
    stageEl = viewEl.querySelector('#vocab-stage');
    viewEl.querySelector('#close-vocab-app').onclick = close;
    app.bindSwipe(viewEl, close);

    const accentBtn = viewEl.querySelector('#btn-accent');
    accentBtn.onclick = () => {
      state.accent = state.accent === 'en-US' ? 'en-GB' : 'en-US';
      localStorage.setItem('vocab_accent', state.accent);
      accentBtn.textContent = state.accent === 'en-US' ? '美音 US' : '英音 UK';
    };

    viewEl.querySelector('#book-switcher').onclick = (e) => {
      const btn = e.target.closest('.seg-btn');
      if (!btn) return;
      viewEl.querySelectorAll('#book-switcher .seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.book = btn.dataset.book; state.revealed = false; state.quiz.word = null; state.spell.word = null;
      renderStage();
    };

    viewEl.querySelector('#mode-switcher').onclick = (e) => {
      const btn = e.target.closest('.mode-pill');
      if (!btn) return;
      viewEl.querySelectorAll('#mode-switcher .mode-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = btn.dataset.mode; state.quiz.word = null; state.spell.word = null;
      renderStage();
    };

    updateBadges();
  },
  open() {
    viewEl.classList.add('open');
    viewEl.setAttribute('aria-hidden', 'false');
    renderStage();
  },
  reset() {
    if (confirm('确定要清空所有掌握记录和错题本吗？')) {
      state.mastered.clear(); state.mistakes = {}; state.bookIndices = { cet4: 0, cet6: 0, ielts: 0 };
      saveProgress(); alert('已重置背单词数据');
    }
  }
};
