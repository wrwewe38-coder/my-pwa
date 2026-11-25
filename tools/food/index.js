const CSS = `
.csgo-stage { position: relative; background: linear-gradient(180deg, #161822 0%, #0D0F16 100%); border-radius: 16px; padding: 16px 0; margin-bottom: 14px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: inset 0 0 28px rgba(0, 0, 0, 0.75), 0 6px 20px rgba(0, 0, 0, 0.16); }
.csgo-stage::before, .csgo-stage::after { content: ""; position: absolute; top: 0; bottom: 0; width: 44px; z-index: 5; pointer-events: none; }
.csgo-stage::before { left: 0; background: linear-gradient(90deg, #0E1018, transparent); }
.csgo-stage::after { right: 0; background: linear-gradient(270deg, #0E1018, transparent); }
.csgo-pointer { position: absolute; top: 0; bottom: 0; left: 50%; width: 2.5px; transform: translateX(-50%); background: linear-gradient(180deg, #FFD60A, #FF9500, #FFD60A); z-index: 10; box-shadow: 0 0 10px rgba(255, 204, 0, 0.9); pointer-events: none; }
.csgo-pointer::before, .csgo-pointer::after { content: ""; position: absolute; left: 50%; transform: translateX(-50%); border-left: 7px solid transparent; border-right: 7px solid transparent; }
.csgo-pointer::before { top: 0; border-top: 9px solid #FFD60A; }
.csgo-pointer::after { bottom: 0; border-bottom: 9px solid #FFD60A; }
.csgo-track { display: flex; gap: 8px; will-change: transform; }
.csgo-card { flex: 0 0 116px; height: 136px; background: #232736; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; border: 1px solid rgba(255, 255, 255, 0.08); }
.csgo-card-img { width: 100%; height: 94px; object-fit: cover; display: block; background: #1B1E2B; }
.csgo-card-name { flex: 1; display: flex; align-items: center; justify-content: center; padding: 0 6px; font-size: 13px; font-weight: 600; color: #FFFFFF; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; background: #1C1F2B; }
.csgo-card-bar { height: 4px; width: 100%; }
.food-winner-card { background: var(--bg-card); border-radius: 16px; padding: 16px; margin-bottom: 14px; display: flex; align-items: center; gap: 14px; border: 1.5px solid var(--orange); animation: fadeIn 0.25s ease-out; }
.food-winner-img { width: 72px; height: 72px; border-radius: 12px; object-fit: cover; flex-shrink: 0; }
.food-add-card { background: var(--bg-card); border-radius: 14px; padding: 14px 16px; margin-bottom: 16px; }
.photo-picker-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.photo-preview { width: 48px; height: 48px; border-radius: 10px; object-fit: cover; background: var(--bg-subtle); display: none; flex-shrink: 0; }
.photo-upload-label { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 12px; border-radius: 10px; background: var(--bg-subtle); color: var(--accent); font-size: 14px; font-weight: 600; cursor: pointer; }
.food-pool-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.food-pool-item { background: var(--bg-card); border-radius: 12px; overflow: hidden; display: flex; align-items: center; gap: 10px; padding: 8px; }
.food-pool-thumb { width: 46px; height: 46px; border-radius: 8px; object-fit: cover; flex-shrink: 0; }
.food-pool-info { flex: 1; min-width: 0; }
.food-pool-name { font-size: 14px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.food-pool-prob { font-size: 11px; color: var(--text-secondary); margin-top: 2px; }
.food-del-btn { border: none; background: none; color: var(--text-secondary); font-size: 18px; padding: 4px; cursor: pointer; }
`;

const CSGO_COLORS = ['#4B69FF', '#8847FF', '#D32CE6', '#EB4B4B', '#E4AE39', '#34C759', '#00B4D8', '#FF7A00'];

function makeFoodArt(bg1, bg2, emoji, subLabel) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="200" viewBox="0 0 240 200"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${bg1}"/><stop offset="100%" stop-color="${bg2}"/></linearGradient></defs><rect width="240" height="200" fill="url(#g)"/><circle cx="195" cy="35" r="48" fill="rgba(255,255,255,0.12)"/><circle cx="40" cy="175" r="56" fill="rgba(0,0,0,0.12)"/><circle cx="120" cy="96" r="56" fill="rgba(255,255,255,0.22)"/><text x="120" y="114" font-size="68" text-anchor="middle">${emoji}</text><text x="120" y="180" font-family="-apple-system,sans-serif" font-size="16" font-weight="700" fill="rgba(255,255,255,0.88)" text-anchor="middle">${subLabel}</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function getDefaultFoods() {
  return [
    { id: 'f_1', name: '杂酱面', color: '#FF9500', img: makeFoodArt('#FF9A44', '#FC6076', '🍜', '经典酱香') },
    { id: 'f_2', name: '抄手', color: '#EB4B4B', img: makeFoodArt('#F857A6', '#FF5858', '🥟', '红油鲜香') },
    { id: 'f_3', name: '黄焖鸡', color: '#E4AE39', img: makeFoodArt('#F7971E', '#B76E00', '🍲', '浓郁下饭') },
    { id: 'f_4', name: '干锅', color: '#D32CE6', img: makeFoodArt('#D31027', '#EA384D', '🥘', '麻辣焦香') },
    { id: 'f_5', name: '麻辣烫', color: '#8847FF', img: makeFoodArt('#FF512F', '#DD2476', '🍢', '自选百搭') },
    { id: 'f_6', name: '烤肉拌饭', color: '#4B69FF', img: makeFoodArt('#C79081', '#DFA579', '🍚', '肉香满足') },
    { id: 'f_7', name: '兰州拉面', color: '#34C759', img: makeFoodArt('#11998E', '#38EF7D', '🥢', '清汤劲道') },
    { id: 'f_8', name: '汉堡薯条', color: '#00B4D8', img: makeFoodArt('#F2994A', '#F2C94C', '🍔', '快乐碳水') }
  ];
}

let appRef, viewEl, audioCtx = null;
const state = {
  items: JSON.parse(localStorage.getItem('food_items_v1') || 'null') || getDefaultFoods(),
  soundOn: localStorage.getItem('food_sound') !== 'off',
  isSpinning: false,
  pendingImg: null,
  rafId: null
};

function playTick() {
  if (!state.soundOn) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(760, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(280, audioCtx.currentTime + 0.028);
    gain.gain.setValueAtTime(0.14, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + 0.032);
  } catch {}
}

function playWin() {
  if (!state.soundOn) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
      const t = audioCtx.currentTime + i * 0.07;
      osc.type = 'sine'; osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.12, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(t); osc.stop(t + 0.26);
    });
  } catch {}
}

function buildIdleTrack() {
  const track = viewEl.querySelector('#csgo-track');
  track.style.transition = 'none';
  track.style.transform = 'translateX(0px)';
  const cards = [];
  for (let i = 0; i < 12; i++) cards.push(state.items[i % state.items.length]);
  track.innerHTML = cards.map(item => `<div class="csgo-card"><img class="csgo-card-img" src="${item.img}" alt="${item.name}" /><div class="csgo-card-name">${item.name}</div><div class="csgo-card-bar" style="background:${item.color};"></div></div>`).join('');
}

function renderUI() {
  const count = state.items.length;
  const prob = count > 0 ? (100 / count).toFixed(1) : '0';
  appRef.updateToolBadge('food', `${count} 种美食`);
  viewEl.querySelector('#food-pool-title').textContent = `当前奖池 · 共 ${count} 项（每项概率 ${prob}%）`;

  const listEl = viewEl.querySelector('#food-pool-list');
  listEl.innerHTML = state.items.map(item => `
    <div class="food-pool-item">
      <img class="food-pool-thumb" src="${item.img}" alt="${item.name}" />
      <div class="food-pool-info"><div class="food-pool-name">${item.name}</div><div class="food-pool-prob">概率 ${prob}%</div></div>
      <button class="food-del-btn" data-id="${item.id}">×</button>
    </div>
  `).join('');

  listEl.querySelectorAll('.food-del-btn').forEach(btn => {
    btn.onclick = () => {
      if (state.isSpinning) return;
      if (state.items.length <= 2) { alert('奖池里至少需要保留 2 种食物才能抽奖'); return; }
      if (confirm('从滑盘中移除这项食物？')) {
        state.items = state.items.filter(f => f.id !== btn.dataset.id);
        save();
      }
    };
  });

  if (!state.isSpinning) buildIdleTrack();
}

function save() {
  localStorage.setItem('food_items_v1', JSON.stringify(state.items));
  renderUI();
}

function close() {
  viewEl.classList.remove('open');
  viewEl.setAttribute('aria-hidden', 'true');
}

export default {
  id: 'food',
  name: '今天吃什么（CS:GO 抽箱）',
  shortName: '抽美食',
  btnClass: 'orange',
  resetLabel: '恢复默认美食抽箱列表',
  init(app) {
    appRef = app;
    app.mountStyle('food', CSS);
    viewEl = app.mountView(`
      <div id="food-view" class="sub-view" aria-hidden="true">
        <header class="ios-header">
          <div class="header-left"><button class="nav-text-btn" id="close-food-app"><span style="font-size:22px;line-height:1;">‹</span> 返回</button></div>
          <h1>今天吃什么</h1>
          <div class="header-right"><button class="accent-pill" id="btn-food-sound">${state.soundOn ? '音效 开' : '音效 关'}</button></div>
        </header>
        <div class="sub-content">
          <div class="csgo-stage" id="csgo-viewport"><div class="csgo-pointer"></div><div class="csgo-track" id="csgo-track"></div></div>
          <button class="ios-btn orange" id="btn-spin-food" style="margin-bottom:14px;">开始抽箱（等概率）</button>
          <div id="food-winner-box"></div>
          <div class="section-title">添加新美食到滑盘</div>
          <div class="food-add-card">
            <input type="text" id="food-name-input" class="note-input" placeholder="输入食物名称（如：螺蛳粉、烤冷面、寿司）" />
            <div class="photo-picker-row">
              <img id="food-photo-preview" class="photo-preview" alt="预览" />
              <label class="photo-upload-label" for="food-photo-input"><span id="food-photo-label-text">📷 从相册选择配图（可选）</span></label>
              <input type="file" id="food-photo-input" accept="image/*" style="display:none;" />
            </div>
            <button class="ios-btn" id="btn-add-food">添加到滑盘</button>
          </div>
          <div class="section-title" id="food-pool-title">当前奖池</div>
          <div class="food-pool-grid" id="food-pool-list"></div>
        </div>
      </div>
    `);

    viewEl.querySelector('#close-food-app').onclick = close;
    app.bindSwipe(viewEl, close);

    const soundBtn = viewEl.querySelector('#btn-food-sound');
    soundBtn.onclick = () => {
      state.soundOn = !state.soundOn;
      localStorage.setItem('food_sound', state.soundOn ? 'on' : 'off');
      soundBtn.textContent = state.soundOn ? '音效 开' : '音效 关';
    };

    viewEl.querySelector('#btn-spin-food').onclick = () => {
      if (state.isSpinning || state.items.length < 2) return;
      state.isSpinning = true;
      const spinBtn = viewEl.querySelector('#btn-spin-food');
      spinBtn.disabled = true; spinBtn.textContent = '抽箱中...';
      viewEl.querySelector('#food-winner-box').innerHTML = '';

      const items = state.items;
      const winner = items[Math.floor(Math.random() * items.length)];
      const TOTAL = 62, WIN = 50, CARD_W = 116, STRIDE = 124;
      const strip = [];
      for (let i = 0; i < TOTAL; i++) {
        if (i === WIN) strip.push(winner);
        else {
          let pick = items[Math.floor(Math.random() * items.length)];
          if (i > 0 && items.length > 1 && pick.id === strip[i - 1].id) pick = items[(items.indexOf(pick) + 1) % items.length];
          strip.push(pick);
        }
      }

      const viewport = viewEl.querySelector('#csgo-viewport');
      const track = viewEl.querySelector('#csgo-track');
      track.style.transition = 'none';
      track.style.transform = 'translateX(0px)';
      track.innerHTML = strip.map(item => `<div class="csgo-card"><img class="csgo-card-img" src="${item.img}" alt="${item.name}" /><div class="csgo-card-name">${item.name}</div><div class="csgo-card-bar" style="background:${item.color};"></div></div>`).join('');
      void track.offsetWidth;

      const center = viewport.clientWidth / 2;
      const jitter = (Math.random() - 0.5) * 76;
      const targetX = -(WIN * STRIDE + CARD_W / 2 + jitter - center);
      track.style.transition = 'transform 4.8s cubic-bezier(0.08, 0.88, 0.12, 1)';
      track.style.transform = `translateX(${targetX}px)`;

      let lastSlot = -1;
      function watch() {
        if (!state.isSpinning) return;
        const m = new DOMMatrix(getComputedStyle(track).transform);
        const slot = Math.floor((-m.m41 + center) / STRIDE);
        if (slot !== lastSlot && slot >= 0) { lastSlot = slot; playTick(); }
        state.rafId = requestAnimationFrame(watch);
      }
      state.rafId = requestAnimationFrame(watch);

      setTimeout(() => {
        state.isSpinning = false;
        if (state.rafId) cancelAnimationFrame(state.rafId);
        spinBtn.disabled = false; spinBtn.textContent = '再来一发（等概率）';
        playWin();
        viewEl.querySelector('#food-winner-box').innerHTML = `
          <div class="food-winner-card">
            <img class="food-winner-img" src="${winner.img}" alt="${winner.name}" />
            <div><div style="font-size:12px;color:var(--orange);font-weight:700;margin-bottom:4px;">🎉 抽箱结果已出炉</div><div style="font-size:22px;font-weight:700;">今天就吃：${winner.name}</div></div>
          </div>
        `;
        app.toast('美食抽箱结果', winner.name, false);
      }, 4900);
    };

    viewEl.querySelector('#food-photo-input').onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 240; canvas.height = 240;
          const ctx = canvas.getContext('2d');
          const minSide = Math.min(img.width, img.height);
          ctx.drawImage(img, (img.width - minSide) / 2, (img.height - minSide) / 2, minSide, minSide, 0, 0, 240, 240);
          state.pendingImg = canvas.toDataURL('image/jpeg', 0.72);
          const preview = viewEl.querySelector('#food-photo-preview');
          preview.src = state.pendingImg; preview.style.display = 'block';
          viewEl.querySelector('#food-photo-label-text').textContent = '✅ 已选配图（点击更换）';
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    };

    viewEl.querySelector('#btn-add-food').onclick = () => {
      if (state.isSpinning) return;
      const nameEl = viewEl.querySelector('#food-name-input');
      const name = nameEl.value.trim();
      if (!name) { alert('请先输入食物名称'); return; }
      const color = CSGO_COLORS[state.items.length % CSGO_COLORS.length];
      const img = state.pendingImg || makeFoodArt(color, '#1C1C1E', '🍽️', name.slice(0, 4));
      state.items.push({ id: 'f_' + Date.now(), name, color, img });
      nameEl.value = ''; state.pendingImg = null;
      viewEl.querySelector('#food-photo-input').value = '';
      viewEl.querySelector('#food-photo-preview').style.display = 'none';
      viewEl.querySelector('#food-photo-label-text').textContent = '📷 从相册选择配图（可选）';
      save();
      app.toast('已添加到美食滑盘', name, false);
    };

    renderUI();
  },
  open() {
    viewEl.classList.add('open');
    viewEl.setAttribute('aria-hidden', 'false');
    renderUI();
  },
  reset() {
    if (confirm('确定恢复为默认的 8 种美食列表吗？')) {
      state.items = getDefaultFoods();
      save(); alert('已恢复默认美食列表');
    }
  }
};
