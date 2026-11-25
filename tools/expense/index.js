const CSS = `
.alert-banner { background: var(--red-bg); border: 1px solid rgba(255, 59, 48, 0.35); color: var(--red); border-radius: 12px; padding: 11px 14px; font-size: 13px; font-weight: 600; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; line-height: 1.4; }
.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 14px; }
.stat-box { background: var(--bg-card); border-radius: 12px; padding: 12px 10px; text-align: center; }
.stat-label { font-size: 12px; color: var(--text-secondary); margin-bottom: 4px; }
.stat-num { font-size: 17px; font-weight: 700; margin-bottom: 4px; }
.stat-num.over { color: var(--red); }
.stat-sub { font-size: 11px; color: var(--text-secondary); }
.progress-track { height: 4px; background: var(--bg-subtle); border-radius: 2px; overflow: hidden; margin-top: 6px; }
.progress-fill { height: 100%; background: var(--accent); border-radius: 2px; transition: width 0.25s ease; }
.progress-fill.over { background: var(--red); }
.expense-form-card { background: var(--bg-card); border-radius: 14px; padding: 16px; margin-bottom: 16px; }
.amount-input-wrap { display: flex; align-items: center; border-bottom: 1px solid var(--separator); padding-bottom: 8px; margin-bottom: 14px; }
.currency-symbol { font-size: 26px; font-weight: 700; color: var(--text-primary); margin-right: 8px; }
.amount-input { flex: 1; border: none; background: transparent; font-size: 30px; font-weight: 700; color: var(--text-primary); outline: none; width: 100%; user-select: text; -webkit-user-select: text; }
.cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 12px; }
.cat-chip { border: 1px solid transparent; background: var(--bg-subtle); color: var(--text-primary); border-radius: 10px; padding: 8px 4px; font-size: 12px; font-weight: 500; text-align: center; cursor: pointer; }
.cat-chip.active { background: rgba(0, 122, 255, 0.14); border-color: var(--accent); color: var(--accent); font-weight: 600; }
.cat-stats-card { background: var(--bg-card); border-radius: 14px; padding: 14px 16px; margin-bottom: 12px; }
.cat-stats-header { display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 600; margin-bottom: 10px; }
.stacked-bar { display: flex; height: 10px; border-radius: 5px; overflow: hidden; background: var(--bg-subtle); gap: 1.5px; margin-bottom: 14px; }
.stacked-seg { height: 100%; min-width: 3px; transition: width 0.25s ease; }
.cat-stat-row { margin-bottom: 10px; }
.cat-stat-row:last-child { margin-bottom: 0; }
.cat-stat-top { display: flex; justify-content: space-between; align-items: center; font-size: 13px; margin-bottom: 5px; }
.cat-stat-name { display: flex; align-items: center; gap: 6px; font-weight: 500; }
.cat-dot { width: 8px; height: 8px; border-radius: 4px; flex-shrink: 0; }
.cat-stat-nums { display: flex; align-items: center; gap: 8px; }
.cat-stat-pct { font-size: 12px; color: var(--text-secondary); }
.cat-stat-amt { font-weight: 600; min-width: 62px; text-align: right; }
.cat-mini-track { height: 4px; border-radius: 2px; background: var(--bg-subtle); overflow: hidden; }
.cat-mini-fill { height: 100%; border-radius: 2px; }
.record-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; background: var(--bg-card); border-radius: 12px; margin-bottom: 8px; }
.record-item.clickable { cursor: pointer; }
.record-item.clickable:active { opacity: 0.72; }
.record-left { display: flex; flex-direction: column; gap: 3px; }
.record-title { font-size: 15px; font-weight: 600; display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.record-cat-tag { font-size: 11px; padding: 2px 6px; border-radius: 6px; background: var(--bg-subtle); color: var(--text-secondary); font-weight: 600; }
.over-tag { font-size: 11px; padding: 2px 6px; border-radius: 6px; background: var(--red-bg); color: var(--red); font-weight: 600; }
.record-time { font-size: 12px; color: var(--text-secondary); }
.record-right { display: flex; align-items: center; gap: 8px; }
.record-amount { font-size: 16px; font-weight: 700; color: var(--text-primary); }
.record-amount.over { color: var(--red); }
.record-del { border: none; background: none; color: var(--text-secondary); font-size: 18px; padding: 2px 6px; cursor: pointer; }
.drill-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; padding: 4px 2px; }
.drill-back-btn { background: var(--bg-subtle); color: var(--accent); border: none; border-radius: 14px; padding: 5px 12px; font-size: 13px; font-weight: 600; cursor: pointer; }
.drill-title { font-size: 13px; font-weight: 600; color: var(--text-secondary); }
.query-date-input { width: 100%; padding: 11px 12px; border-radius: 10px; border: 1px solid var(--separator); background: var(--bg-primary); color: var(--text-primary); font-size: 15px; font-family: inherit; outline: none; margin-bottom: 12px; }
.query-summary-card { background: var(--bg-card); border-radius: 14px; padding: 14px 16px; margin-bottom: 14px; }
.query-stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
`;

const DAILY_LIMIT = 40;
const MONTHLY_LIMIT = 1200;
const CAT_COLORS = { '餐饮': '#FF9500', '零食饮品': '#FF2D55', '交通出行': '#007AFF', '日用购物': '#AF52DE', '娱乐休闲': '#5856D6', '学习办公': '#34C759', '医疗健康': '#FF3B30', '其他支出': '#8E8E93' };
const RANGE_LABELS = { day: '今日', month: '本月', year: '本年', all: '全部' };

let appRef, viewEl, queryViewEl;
const state = {
  records: JSON.parse(localStorage.getItem('expense_records_v1') || '[]'),
  selectedCat: '餐饮',
  filterRange: 'day',
  drillMonth: null,
  drillDay: null
};

function getLocalDateParts(ts) {
  const d = new Date(ts);
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0'), mm = String(d.getMinutes()).padStart(2, '0');
  return { yearStr: `${y}`, monthStr: `${y}-${m}`, dayStr: `${y}-${m}-${day}`, displayTime: `${m}-${day} ${hh}:${mm}`, hm: `${hh}:${mm}` };
}

function calcTotals() {
  const now = getLocalDateParts(Date.now());
  let daySum = 0, monthSum = 0, yearSum = 0;
  state.records.forEach(r => {
    const p = getLocalDateParts(r.ts);
    if (p.yearStr === now.yearStr) yearSum += r.amount;
    if (p.monthStr === now.monthStr) monthSum += r.amount;
    if (p.dayStr === now.dayStr) daySum += r.amount;
  });
  return { daySum, monthSum, yearSum };
}

function renderCategoryStats(filtered) {
  const container = viewEl.querySelector('#expense-cat-stats');
  if (filtered.length === 0) { container.innerHTML = ''; return; }
  const totals = {}; let grand = 0;
  filtered.forEach(r => { totals[r.category] = (totals[r.category] || 0) + r.amount; grand += r.amount; });
  const sorted = Object.entries(totals).map(([cat, sum]) => ({ cat, sum, pct: grand > 0 ? (sum / grand) * 100 : 0, color: CAT_COLORS[cat] || '#8E8E93' })).sort((a, b) => b.sum - a.sum);

  container.innerHTML = `
    <div class="cat-stats-card">
      <div class="cat-stats-header"><span>${RANGE_LABELS[state.filterRange]}分类占比</span><span style="color:var(--text-secondary);">共 ¥${grand.toFixed(2)}</span></div>
      <div class="stacked-bar">${sorted.map(i => `<div class="stacked-seg" style="width:${i.pct.toFixed(2)}%;background:${i.color};"></div>`).join('')}</div>
      ${sorted.map(i => `
        <div class="cat-stat-row">
          <div class="cat-stat-top">
            <div class="cat-stat-name"><span class="cat-dot" style="background:${i.color};"></span><span>${i.cat}</span></div>
            <div class="cat-stat-nums"><span class="cat-stat-pct">${i.pct.toFixed(1)}%</span><span class="cat-stat-amt">¥${i.sum.toFixed(2)}</span></div>
          </div>
          <div class="cat-mini-track"><div class="cat-mini-fill" style="width:${i.pct.toFixed(1)}%;background:${i.color};"></div></div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderItemizedList(records, showDate = true) {
  return records.map(r => {
    const p = getLocalDateParts(r.ts);
    const color = CAT_COLORS[r.category] || '#8E8E93';
    return `
      <div class="record-item">
        <div class="record-left">
          <div class="record-title"><span class="cat-dot" style="background:${color};"></span><span class="record-cat-tag">${r.category}</span><span>${r.note || r.category}</span></div>
          <div class="record-time">${showDate ? p.displayTime : p.hm}</div>
        </div>
        <div class="record-right"><span class="record-amount">-¥${r.amount.toFixed(2)}</span><button class="record-del" data-id="${r.id}">×</button></div>
      </div>
    `;
  }).join('');
}

function bindDeleteButtons(container) {
  container.querySelectorAll('.record-del').forEach(btn => {
    btn.onclick = () => {
      if (confirm('删除这笔消费记录？')) {
        state.records = state.records.filter(r => String(r.id) !== btn.dataset.id);
        save();
      }
    };
  });
}

function renderDailyGroups(records, listEl, backLabel = null, onBack = null, titleText = '') {
  const byDay = {};
  records.forEach(r => {
    const day = getLocalDateParts(r.ts).dayStr;
    if (!byDay[day]) byDay[day] = { day, sum: 0, count: 0 };
    byDay[day].sum += r.amount;
    byDay[day].count += 1;
  });
  const days = Object.values(byDay).sort((a, b) => b.day.localeCompare(a.day));

  let html = '';
  if (backLabel) {
    html += `<div class="drill-bar"><button class="drill-back-btn" id="btn-drill-back">‹ ${backLabel}</button><span class="drill-title">${titleText}</span></div>`;
  }
  if (days.length === 0) {
    listEl.innerHTML = html + `<div class="empty-state">该时间段内还没有消费记录</div>`;
  } else {
    html += days.map(d => {
      const over = d.sum > DAILY_LIMIT;
      return `
        <div class="record-item clickable" data-day="${d.day}">
          <div class="record-left">
            <div class="record-title">
              <span>${d.day}</span>
              ${over ? `<span class="over-tag">超 ¥${(d.sum - DAILY_LIMIT).toFixed(2)}</span>` : ''}
            </div>
            <div class="record-time">共 ${d.count} 笔消费</div>
          </div>
          <div class="record-right">
            <span class="record-amount ${over ? 'over' : ''}">-¥${d.sum.toFixed(2)}</span>
            <span style="color:var(--text-secondary);font-size:18px;opacity:0.5;">›</span>
          </div>
        </div>
      `;
    }).join('');
    listEl.innerHTML = html;
  }

  if (backLabel && onBack) {
    const backBtn = listEl.querySelector('#btn-drill-back');
    if (backBtn) backBtn.onclick = onBack;
  }
  listEl.querySelectorAll('[data-day]').forEach(el => {
    el.onclick = () => { state.drillDay = el.dataset.day; renderDashboard(); };
  });
}

function renderMonthlyGroups(records, listEl) {
  const byMonth = {};
  records.forEach(r => {
    const m = getLocalDateParts(r.ts).monthStr;
    if (!byMonth[m]) byMonth[m] = { month: m, sum: 0, count: 0 };
    byMonth[m].sum += r.amount;
    byMonth[m].count += 1;
  });
  const months = Object.values(byMonth).sort((a, b) => b.month.localeCompare(a.month));

  if (months.length === 0) {
    listEl.innerHTML = `<div class="empty-state">本年还没有消费记录</div>`;
    return;
  }

  listEl.innerHTML = months.map(m => {
    const over = m.sum > MONTHLY_LIMIT;
    const [yy, mm] = m.month.split('-');
    return `
      <div class="record-item clickable" data-month="${m.month}">
        <div class="record-left">
          <div class="record-title">
            <span>${yy}年${mm}月</span>
            ${over ? `<span class="over-tag">超 ¥${(m.sum - MONTHLY_LIMIT).toFixed(2)}</span>` : ''}
          </div>
          <div class="record-time">共 ${m.count} 笔消费</div>
        </div>
        <div class="record-right">
          <span class="record-amount ${over ? 'over' : ''}">-¥${m.sum.toFixed(2)}</span>
          <span style="color:var(--text-secondary);font-size:18px;opacity:0.5;">›</span>
        </div>
      </div>
    `;
  }).join('');

  listEl.querySelectorAll('[data-month]').forEach(el => {
    el.onclick = () => { state.drillMonth = el.dataset.month; state.drillDay = null; renderDashboard(); };
  });
}

function renderDashboard() {
  const { daySum, monthSum, yearSum } = calcTotals();
  const dayOver = daySum > DAILY_LIMIT, monthOver = monthSum > MONTHLY_LIMIT;

  appRef.updateToolBadge('expense', `今日 ¥${daySum.toFixed(1)}`);
  const hDay = document.getElementById('home-today-spend');
  const hMonth = document.getElementById('home-month-spend');
  if (hDay) { hDay.textContent = `¥${daySum.toFixed(2)}${dayOver ? ' (超支)' : ''}`; hDay.style.color = dayOver ? 'var(--red)' : 'var(--text-secondary)'; }
  if (hMonth) { hMonth.textContent = `¥${monthSum.toFixed(2)}${monthOver ? ' (超支)' : ''}`; hMonth.style.color = monthOver ? 'var(--red)' : 'var(--text-secondary)'; }

  let alertHtml = '';
  if (dayOver) alertHtml += `<div class="alert-banner">⚠️ 今日消费预警：已花费 ¥${daySum.toFixed(2)}，超出每日 ¥${DAILY_LIMIT} 限额（超支 ¥${(daySum - DAILY_LIMIT).toFixed(2)}）</div>`;
  if (monthOver) alertHtml += `<div class="alert-banner">🚨 本月消费预警：已花费 ¥${monthSum.toFixed(2)}，超出每月 ¥${MONTHLY_LIMIT} 限额（超支 ¥${(monthSum - MONTHLY_LIMIT).toFixed(2)}）</div>`;
  viewEl.querySelector('#expense-alerts').innerHTML = alertHtml;

  const dayPct = Math.min(100, (daySum / DAILY_LIMIT) * 100);
  const monthPct = Math.min(100, (monthSum / MONTHLY_LIMIT) * 100);
  viewEl.querySelector('#expense-stats').innerHTML = `
    <div class="stat-box"><div class="stat-label">今日消费</div><div class="stat-num ${dayOver ? 'over' : ''}">¥${daySum.toFixed(2)}</div><div class="stat-sub">限额 ¥${DAILY_LIMIT}</div><div class="progress-track"><div class="progress-fill ${dayOver ? 'over' : ''}" style="width:${dayPct}%"></div></div></div>
    <div class="stat-box"><div class="stat-label">本月消费</div><div class="stat-num ${monthOver ? 'over' : ''}">¥${monthSum.toFixed(2)}</div><div class="stat-sub">限额 ¥${MONTHLY_LIMIT}</div><div class="progress-track"><div class="progress-fill ${monthOver ? 'over' : ''}" style="width:${monthPct}%"></div></div></div>
    <div class="stat-box"><div class="stat-label">本年消费</div><div class="stat-num">¥${yearSum.toFixed(2)}</div><div class="stat-sub">${new Date().getFullYear()} 年</div></div>
  `;

  const now = getLocalDateParts(Date.now());
  const filtered = state.records.filter(r => {
    const p = getLocalDateParts(r.ts);
    if (state.filterRange === 'day') return p.dayStr === now.dayStr;
    if (state.filterRange === 'month') return p.monthStr === now.monthStr;
    if (state.filterRange === 'year') return p.yearStr === now.yearStr;
    return true;
  });

  // 分类占比保持与当前选中的时间段一致
  renderCategoryStats(filtered);

  const listEl = viewEl.querySelector('#expense-list');

  // 1. 今日 & 全部：直接显示明细
  if (state.filterRange === 'day' || state.filterRange === 'all') {
    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="empty-state">当前时间范围内还没有消费记录</div>`;
    } else {
      listEl.innerHTML = renderItemizedList(filtered, true);
      bindDeleteButtons(listEl);
    }
    return;
  }

  // 2. 本月：按天汇总 -> 点击某天看明细
  if (state.filterRange === 'month') {
    if (state.drillDay) {
      const dayRecords = filtered.filter(r => getLocalDateParts(r.ts).dayStr === state.drillDay);
      const sum = dayRecords.reduce((s, r) => s + r.amount, 0);
      listEl.innerHTML = `
        <div class="drill-bar">
          <button class="drill-back-btn" id="btn-drill-back">‹ 返回本月每天</button>
          <span class="drill-title">${state.drillDay} · 共 ¥${sum.toFixed(2)}</span>
        </div>
        ${dayRecords.length ? renderItemizedList(dayRecords, false) : '<div class="empty-state">当天已无消费记录</div>'}
      `;
      listEl.querySelector('#btn-drill-back').onclick = () => { state.drillDay = null; renderDashboard(); };
      bindDeleteButtons(listEl);
    } else {
      renderDailyGroups(filtered, listEl);
    }
    return;
  }

  // 3. 本年：按月汇总 -> 点击某月看每天 -> 点击某天看明细
  if (state.filterRange === 'year') {
    if (state.drillMonth && state.drillDay) {
      const dayRecords = filtered.filter(r => getLocalDateParts(r.ts).dayStr === state.drillDay);
      const sum = dayRecords.reduce((s, r) => s + r.amount, 0);
      listEl.innerHTML = `
        <div class="drill-bar">
          <button class="drill-back-btn" id="btn-drill-back">‹ 返回 ${state.drillMonth}</button>
          <span class="drill-title">${state.drillDay} · 共 ¥${sum.toFixed(2)}</span>
        </div>
        ${dayRecords.length ? renderItemizedList(dayRecords, false) : '<div class="empty-state">当天已无消费记录</div>'}
      `;
      listEl.querySelector('#btn-drill-back').onclick = () => { state.drillDay = null; renderDashboard(); };
      bindDeleteButtons(listEl);
    } else if (state.drillMonth) {
      const monthRecords = filtered.filter(r => getLocalDateParts(r.ts).monthStr === state.drillMonth);
      const sum = monthRecords.reduce((s, r) => s + r.amount, 0);
      renderDailyGroups(monthRecords, listEl, '返回本年各月', () => { state.drillMonth = null; renderDashboard(); }, `${state.drillMonth} · 共 ¥${sum.toFixed(2)}`);
    } else {
      renderMonthlyGroups(filtered, listEl);
    }
  }
}

/* ================= 查询页面逻辑 ================= */
function renderQueryDateResult(dateStr) {
  const box = queryViewEl.querySelector('#query-date-result');
  if (!dateStr) { box.innerHTML = ''; return; }
  const recs = state.records.filter(r => getLocalDateParts(r.ts).dayStr === dateStr);
  const sum = recs.reduce((s, r) => s + r.amount, 0);
  const over = sum > DAILY_LIMIT;

  if (recs.length === 0) {
    box.innerHTML = `<div class="empty-state" style="padding:18px 0;">${dateStr} 当天没有消费记录</div>`;
    return;
  }

  box.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding:0 2px;">
      <span style="font-size:14px;font-weight:600;">${dateStr} 共 ${recs.length} 笔</span>
      <span style="font-size:15px;font-weight:700;color:${over ? 'var(--red)' : 'var(--text-primary)'};">
        ¥${sum.toFixed(2)} ${over ? `(超额 ¥${(sum - DAILY_LIMIT).toFixed(2)})` : '(未超额)'}
      </span>
    </div>
    ${recs.map(r => {
      const p = getLocalDateParts(r.ts);
      const color = CAT_COLORS[r.category] || '#8E8E93';
      return `
        <div class="record-item" style="background:var(--bg-primary);margin-bottom:6px;">
          <div class="record-left">
            <div class="record-title"><span class="cat-dot" style="background:${color};"></span><span class="record-cat-tag">${r.category}</span><span>${r.note || r.category}</span></div>
            <div class="record-time">${p.hm}</div>
          </div>
          <div class="record-right"><span class="record-amount">-¥${r.amount.toFixed(2)}</span></div>
        </div>
      `;
    }).join('')}
  `;
}

function renderQueryPage() {
  const dateInput = queryViewEl.querySelector('#exp-query-date');
  if (!dateInput.value) dateInput.value = getLocalDateParts(Date.now()).dayStr;
  renderQueryDateResult(dateInput.value);

  // 汇总所有历史天、月
  const byDay = {}, byMonth = {};
  state.records.forEach(r => {
    const p = getLocalDateParts(r.ts);
    byDay[p.dayStr] = (byDay[p.dayStr] || 0) + r.amount;
    byMonth[p.monthStr] = (byMonth[p.monthStr] || 0) + r.amount;
  });

  const overDays = Object.entries(byDay)
    .filter(([, sum]) => sum > DAILY_LIMIT)
    .sort((a, b) => b[0].localeCompare(a[0]));

  const overMonths = Object.entries(byMonth)
    .filter(([, sum]) => sum > MONTHLY_LIMIT)
    .sort((a, b) => b[0].localeCompare(a[0]));

  // 渲染超额天数
  queryViewEl.querySelector('#query-over-days-title').textContent = `超额消费天数（> ¥${DAILY_LIMIT}）· 共 ${overDays.length} 天`;
  const daysBox = queryViewEl.querySelector('#query-over-days-list');
  if (overDays.length === 0) {
    daysBox.innerHTML = `<div class="empty-state" style="padding:20px;">太棒了，还没有单日超额消费记录</div>`;
  } else {
    daysBox.innerHTML = overDays.map(([day, sum]) => `
      <div class="record-item clickable" data-pick-day="${day}">
        <div class="record-left">
          <div class="record-title"><span>${day}</span><span class="over-tag">超额 ¥${(sum - DAILY_LIMIT).toFixed(2)}</span></div>
          <div class="record-time">点击查看当天消费明细</div>
        </div>
        <div class="record-right"><span class="record-amount over">¥${sum.toFixed(2)}</span></div>
      </div>
    `).join('');
    daysBox.querySelectorAll('[data-pick-day]').forEach(el => {
      el.onclick = () => {
        dateInput.value = el.dataset.pickDay;
        renderQueryDateResult(el.dataset.pickDay);
        queryViewEl.querySelector('.sub-content').scrollTo({ top: 0, behavior: 'smooth' });
      };
    });
  }

  // 渲染超额月份
  queryViewEl.querySelector('#query-over-months-title').textContent = `超额消费月份（> ¥${MONTHLY_LIMIT}）· 共 ${overMonths.length} 个月`;
  const monthsBox = queryViewEl.querySelector('#query-over-months-list');
  if (overMonths.length === 0) {
    monthsBox.innerHTML = `<div class="empty-state" style="padding:20px;">太棒了，还没有单月超额消费记录</div>`;
  } else {
    monthsBox.innerHTML = overMonths.map(([month, sum]) => {
      const [yy, mm] = month.split('-');
      return `
        <div class="record-item">
          <div class="record-left">
            <div class="record-title"><span>${yy}年${mm}月</span><span class="over-tag">超额 ¥${(sum - MONTHLY_LIMIT).toFixed(2)}</span></div>
            <div class="record-time">月度限额 ¥${MONTHLY_LIMIT}</div>
          </div>
          <div class="record-right"><span class="record-amount over">¥${sum.toFixed(2)}</span></div>
        </div>
      `;
    }).join('');
  }
}

function save() {
  localStorage.setItem('expense_records_v1', JSON.stringify(state.records));
  renderDashboard();
}

function close() {
  viewEl.classList.remove('open');
  viewEl.setAttribute('aria-hidden', 'true');
}

function openQuery() {
  queryViewEl.classList.add('open');
  queryViewEl.setAttribute('aria-hidden', 'false');
  renderQueryPage();
}

function closeQuery() {
  queryViewEl.classList.remove('open');
  queryViewEl.setAttribute('aria-hidden', 'true');
}

export default {
  id: 'expense',
  name: '日常记账本（每日 / 每月预警）',
  shortName: '记一笔',
  btnClass: 'green',
  resetLabel: '清空所有记账消费记录',
  init(app) {
    appRef = app;
    app.mountStyle('expense', CSS);
    viewEl = app.mountView(`
      <div id="expense-view" class="sub-view" aria-hidden="true">
        <header class="ios-header">
          <div class="header-left"><button class="nav-text-btn" id="close-expense-app"><span style="font-size:22px;line-height:1;">‹</span> 返回</button></div>
          <h1>日常记账本</h1>
          <div class="header-right"><button class="accent-pill" id="btn-open-exp-query">查询</button></div>
        </header>
        <div class="sub-content">
          <div id="expense-alerts"></div>
          <div class="stats-grid" id="expense-stats"></div>
          <div class="expense-form-card">
            <div class="amount-input-wrap"><span class="currency-symbol">¥</span><input type="number" inputmode="decimal" step="0.01" id="exp-amount" class="amount-input" placeholder="0.00" /></div>
            <div class="cat-grid" id="exp-categories">
              <button class="cat-chip active" data-cat="餐饮">🍜 餐饮</button>
              <button class="cat-chip" data-cat="零食饮品">🧋 饮品</button>
              <button class="cat-chip" data-cat="交通出行">🚇 交通</button>
              <button class="cat-chip" data-cat="日用购物">🛒 购物</button>
              <button class="cat-chip" data-cat="娱乐休闲">🎮 娱乐</button>
              <button class="cat-chip" data-cat="学习办公">📚 学习</button>
              <button class="cat-chip" data-cat="医疗健康">💊 医疗</button>
              <button class="cat-chip" data-cat="其他支出">📦 其他</button>
            </div>
            <input type="text" id="exp-note" class="note-input" placeholder="买了什么？（例如：午饭、拿铁、打车）" />
            <button class="ios-btn" id="btn-add-expense">记一笔</button>
          </div>
          <div class="segmented" id="exp-filter">
            <button class="seg-btn active" data-range="day">今日</button>
            <button class="seg-btn" data-range="month">本月</button>
            <button class="seg-btn" data-range="year">本年</button>
            <button class="seg-btn" data-range="all">全部</button>
          </div>
          <div id="expense-cat-stats"></div>
          <div id="expense-list"></div>
        </div>
      </div>
    `);

    queryViewEl = app.mountView(`
      <div id="expense-query-view" class="sub-view" style="z-index: 210;" aria-hidden="true">
        <header class="ios-header">
          <div class="header-left"><button class="nav-text-btn" id="close-exp-query"><span style="font-size:22px;line-height:1;">‹</span> 返回</button></div>
          <h1>消费查询</h1>
        </header>
        <div class="sub-content">
          <div class="section-title">查询某天消费情况</div>
          <div class="query-summary-card">
            <input type="date" id="exp-query-date" class="query-date-input" />
            <div id="query-date-result"></div>
          </div>

          <div class="section-title" id="query-over-days-title">超额消费天数</div>
          <div id="query-over-days-list" style="margin-bottom: 18px;"></div>

          <div class="section-title" id="query-over-months-title">超额消费月份</div>
          <div id="query-over-months-list"></div>
        </div>
      </div>
    `);

    viewEl.querySelector('#close-expense-app').onclick = close;
    viewEl.querySelector('#btn-open-exp-query').onclick = openQuery;
    app.bindSwipe(viewEl, close);

    queryViewEl.querySelector('#close-exp-query').onclick = closeQuery;
    queryViewEl.querySelector('#exp-query-date').onchange = (e) => renderQueryDateResult(e.target.value);
    app.bindSwipe(queryViewEl, closeQuery);

    viewEl.querySelector('#exp-categories').onclick = (e) => {
      const btn = e.target.closest('.cat-chip');
      if (!btn) return;
      viewEl.querySelectorAll('#exp-categories .cat-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedCat = btn.dataset.cat;
    };

    viewEl.querySelector('#btn-add-expense').onclick = () => {
      const amtEl = viewEl.querySelector('#exp-amount');
      const noteEl = viewEl.querySelector('#exp-note');
      const val = parseFloat(amtEl.value);
      if (isNaN(val) || val <= 0) { alert('请输入有效的消费金额'); return; }
      const amount = Math.round(val * 100) / 100;
      const note = noteEl.value.trim();
      state.records.unshift({ id: Date.now(), ts: Date.now(), amount, category: state.selectedCat, note });
      amtEl.value = ''; noteEl.value = '';
      save();

      const { daySum, monthSum } = calcTotals();
      const isOver = daySum > DAILY_LIMIT || monthSum > MONTHLY_LIMIT;
      app.toast(isOver ? `超支预警 · 今日 ¥${daySum.toFixed(1)}` : `${note || state.selectedCat} · 今日 ¥${daySum.toFixed(1)}`, `-¥${amount.toFixed(2)}`, isOver);
    };

    viewEl.querySelector('#exp-filter').onclick = (e) => {
      const btn = e.target.closest('.seg-btn');
      if (!btn) return;
      viewEl.querySelectorAll('#exp-filter .seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterRange = btn.dataset.range;
      state.drillMonth = null;
      state.drillDay = null;
      renderDashboard();
    };

    renderDashboard();
  },
  open() {
    viewEl.classList.add('open');
    viewEl.setAttribute('aria-hidden', 'false');
    renderDashboard();
  },
  reset() {
    if (confirm('确定要清空所有记账消费记录吗？')) {
      state.records = [];
      state.drillMonth = null;
      state.drillDay = null;
      save(); alert('已清空记账数据');
    }
  }
};
