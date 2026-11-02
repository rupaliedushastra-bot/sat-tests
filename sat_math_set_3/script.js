// =============================================
// SAT-style Practice Set 3: Lines & Coordinate Geometry
// Interactive Test Runner & Reporting Logic
// =============================================

const LETTERS = ['A', 'B', 'C', 'D'];
const $ = id => document.getElementById(id);
const getQuestions = () => (typeof window !== 'undefined' && window.QUESTIONS) || (typeof QUESTIONS !== 'undefined' ? QUESTIONS : []);

let student = {};
let answers = {};
let flagged = {};
let currentQ = 0;
let timerInt = null;
let secsLeft = 25 * 60; // 25 minutes
let currentFilter = 'all';

// Initialize Country Codes
function initCountryCodes() {
  const sel = document.getElementById('regCC');
  if (!sel) return;
  const currentVal = sel.value;
  sel.innerHTML = '';

  const topCountries = [
    { name: 'India', dial_code: '+91', code: 'IN', flag: '🇮🇳' },
    { name: 'United States', dial_code: '+1', code: 'US', flag: '🇺🇸' },
    { name: 'United Kingdom', dial_code: '+44', code: 'GB', flag: '🇬🇧' },
    { name: 'United Arab Emirates', dial_code: '+971', code: 'AE', flag: '🇦🇪' },
    { name: 'Canada', dial_code: '+1', code: 'CA', flag: '🇨🇦' },
    { name: 'Australia', dial_code: '+61', code: 'AU', flag: '🇦🇺' },
    { name: 'Singapore', dial_code: '+65', code: 'SG', flag: '🇸🇬' },
    { name: 'Germany', dial_code: '+49', code: 'DE', flag: '🇩🇪' },
    { name: 'France', dial_code: '+33', code: 'FR', flag: '🇫🇷' },
    { name: 'Saudi Arabia', dial_code: '+966', code: 'SA', flag: '🇸🇦' },
    { name: 'Qatar', dial_code: '+974', code: 'QA', flag: '🇶🇦' }
  ];

  topCountries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.dial_code;
    opt.textContent = `${c.flag} ${c.dial_code} (${c.name})`;
    if (c.code === 'IN') opt.selected = true;
    sel.appendChild(opt);
  });

  const divider = document.createElement('option');
  divider.disabled = true;
  divider.textContent = '──────────';
  sel.appendChild(divider);

  const list = (typeof COUNTRY_CODES !== 'undefined') ? COUNTRY_CODES : ((typeof COUNTRIES !== 'undefined') ? COUNTRIES : []);
  if (Array.isArray(list) && list.length > 0) {
    list.forEach(c => {
      const dial = c.code || c.dial_code;
      const opt = document.createElement('option');
      opt.value = dial;
      opt.textContent = `${c.name} (${dial})`;
      sel.appendChild(opt);
    });
  }

  if (currentVal) sel.value = currentVal;
}

initCountryCodes();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountryCodes);
}

function customAlert(msg) {
  const alertMsg = $('alertMsg');
  const alertBg = $('alertBg');
  if (alertMsg) alertMsg.textContent = msg;
  if (alertBg) alertBg.classList.add('open');
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = $(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function toggleCalc() {
  const modal = $('calcModal');
  if (modal) modal.classList.toggle('active');
}

function renderMath(elements) {
  if (typeof window !== 'undefined' && window.MathJax && typeof MathJax.typesetPromise === 'function') {
    const targets = Array.isArray(elements) ? elements.filter(Boolean) : (elements ? [elements] : [document.body]);
    if (targets.length > 0) {
      MathJax.typesetPromise(targets).catch(err => console.warn('MathJax warning:', err));
    }
  }
}

function sanitizeExplanation(str) {
  if (!str) return 'No detailed explanation provided.';
  return String(str).trim();
}

function escapeHtml(str) {
  if (typeof str !== 'string') return String(str || '');
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function startTest() {
  const name = ($('regName').value || '').trim();
  const email = ($('regEmail').value || '').trim();
  const phoneVal = ($('regPhone').value || '').trim();
  const phone = phoneVal ? (($('regCC') ? $('regCC').value : '') + ' ' + phoneVal).trim() : '';

  if (!name || name.length < 2) {
    customAlert('Please enter your full name (at least 2 characters).');
    $('regName').focus();
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    customAlert('Please enter a valid email address.');
    $('regEmail').focus();
    return;
  }

  student = { name, email, phone, startTime: new Date().toISOString() };
  sessionStorage.setItem('sat_math_set3_student', JSON.stringify(student));

  showPage('pageTest');
  buildPalette();
  renderQ();
  startTimer(25 * 60);
  $('timerBox').style.display = 'flex';
}

function startTimer(s) {
  secsLeft = s;
  paintTimer();
  timerInt = setInterval(() => {
    secsLeft--;
    paintTimer();
    if (secsLeft <= 300) $('timerBox').classList.add('warn');
    if (secsLeft <= 0) {
      clearInterval(timerInt);
      doSubmit();
    }
  }, 1000);
}

function paintTimer() {
  const m = String(Math.floor(secsLeft / 60)).padStart(2, '0');
  const s = String(secsLeft % 60).padStart(2, '0');
  $('timerDisplay').textContent = `${m}:${s}`;
}

function buildPalette() {
  const pal = $('palette');
  if (!pal) return;
  pal.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'pal-btn';
    btn.textContent = i + 1;
    btn.id = `palBtn_${i}`;
    btn.onclick = () => jumpTo(i);
    pal.appendChild(btn);
  });
  updatePalette();
}

function updatePalette() {
  let answeredCount = 0;
  QUESTIONS.forEach((q, i) => {
    const btn = $(`palBtn_${i}`);
    if (!btn) return;
    btn.className = 'pal-btn';
    if (i === currentQ) btn.classList.add('cur');
    if (flagged[q.id]) btn.classList.add('flag');

    const ans = answers[q.id];
    if (ans !== undefined && ans !== null && String(ans).trim() !== '' && ans !== -1) {
      btn.classList.add('ans');
      answeredCount++;
    }
  });

  const pct = Math.round((answeredCount / QUESTIONS.length) * 100);
  if ($('progFill')) $('progFill').style.width = `${pct}%`;
  if ($('progLbl')) $('progLbl').textContent = `${answeredCount} / ${QUESTIONS.length} answered`;
}

function renderQ() {
  const q = QUESTIONS[currentQ];
  if (!q) return;

  $('qBadge').textContent = `Q ${q.qnum}`;
  $('qTopicTag').textContent = q.topic || 'Lines & Coordinate Geometry';
  $('modProgress').textContent = `Q ${currentQ + 1} of ${QUESTIONS.length}`;

  const btnFlag = $('btnFlag');
  if (btnFlag) {
    if (flagged[q.id]) {
      btnFlag.textContent = '🚩 Flagged';
      btnFlag.style.background = '#fee2e2';
      btnFlag.style.borderColor = '#ef4444';
      btnFlag.style.color = '#dc2626';
    } else {
      btnFlag.textContent = '🏳️ Flag';
      btnFlag.style.background = 'none';
      btnFlag.style.borderColor = '#cbd5e1';
      btnFlag.style.color = '#475569';
    }
  }

  $('qText').innerHTML = q.text || '';

  const optsBox = $('qOpts');
  const sprBox = $('qSpr');

  if (q.isFillIn) {
    optsBox.style.display = 'none';
    sprBox.style.display = 'block';
    const sprInput = $('sprInput');
    sprInput.value = answers[q.id] !== undefined ? answers[q.id] : '';
  } else {
    sprBox.style.display = 'none';
    optsBox.style.display = 'flex';
    optsBox.innerHTML = '';

    (q.options || []).forEach((optText, idx) => {
      const optEl = document.createElement('div');
      optEl.className = 'opt' + (answers[q.id] === idx ? ' sel' : '');
      optEl.onclick = () => selectOpt(idx);
      optEl.innerHTML = `
        <div class="opt-letter">${LETTERS[idx]}</div>
        <div class="opt-text">${optText}</div>
      `;
      optsBox.appendChild(optEl);
    });
  }

  $('btnPrev').style.visibility = currentQ > 0 ? 'visible' : 'hidden';
  $('btnNext').textContent = currentQ < QUESTIONS.length - 1 ? 'Next →' : '🏁 Submit';

  updatePalette();
  renderMath([$('qText'), optsBox]);
}

function selectOpt(idx) {
  const q = QUESTIONS[currentQ];
  if (!q) return;
  answers[q.id] = idx;
  renderQ();
}

function onSprChange(val) {
  const q = QUESTIONS[currentQ];
  if (!q) return;
  answers[q.id] = val.trim();
  updatePalette();
}

function prevQ() {
  if (currentQ > 0) {
    currentQ--;
    renderQ();
    window.scrollTo(0, 0);
  }
}

function nextQ() {
  if (currentQ < QUESTIONS.length - 1) {
    currentQ++;
    renderQ();
    window.scrollTo(0, 0);
  } else {
    confirmSubmit();
  }
}

function jumpTo(i) {
  if (i >= 0 && i < QUESTIONS.length) {
    currentQ = i;
    renderQ();
    window.scrollTo(0, 0);
  }
}

function toggleFlag() {
  const q = QUESTIONS[currentQ];
  if (!q) return;
  flagged[q.id] = !flagged[q.id];
  renderQ();
}

function confirmSubmit() {
  let answered = 0;
  QUESTIONS.forEach(q => {
    const a = answers[q.id];
    if (a !== undefined && a !== null && String(a).trim() !== '' && a !== -1) answered++;
  });
  const unanswered = QUESTIONS.length - answered;
  let msg = 'Are you ready to submit your test?';
  if (unanswered > 0) {
    msg = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Do you want to submit anyway?`;
  }
  $('modalMsg').textContent = msg;
  $('modalBg').classList.add('open');
}

function closeModal() {
  $('modalBg').classList.remove('open');
}

async function doSubmit() {
  closeModal();
  clearInterval(timerInt);
  $('timerBox').style.display = 'none';

  const overlay = $('savingOverlay');
  if (overlay) overlay.classList.add('active');

  const details = QUESTIONS.map(q => {
    const chosen = answers[q.id];
    let status = 'unattempted';
    let isCorrect = false;

    if (q.isFillIn) {
      if (chosen !== undefined && chosen !== null && String(chosen).trim() !== '') {
        const userStr = String(chosen).trim().toLowerCase();
        const officialStr = String(q.answer).trim().toLowerCase();
        const accepted = (q.acceptedAnswers || []).map(a => String(a).trim().toLowerCase());
        if (userStr === officialStr || accepted.includes(userStr)) {
          status = 'correct';
          isCorrect = true;
        } else {
          status = 'wrong';
        }
      }
    } else {
      if (chosen !== undefined && chosen !== null && chosen !== -1) {
        if (chosen === q.answer) {
          status = 'correct';
          isCorrect = true;
        } else {
          status = 'wrong';
        }
      }
    }

    return {
      id: q.id,
      qnum: q.qnum,
      topic: q.topic,
      difficulty: q.difficulty,
      text: q.text,
      options: q.options || [],
      answer: q.answer,
      acceptedAnswers: q.acceptedAnswers,
      isFillIn: q.isFillIn,
      chosen: chosen,
      status: status,
      isCorrect: isCorrect,
      explanation: q.explanation
    };
  });

  const correct = details.filter(d => d.status === 'correct').length;
  const wrong = details.filter(d => d.status === 'wrong').length;
  const unattempted = details.filter(d => d.status === 'unattempted').length;
  const total = details.length;
  const pct = Math.round((correct / total) * 100);

  // Scaled score between 200 and 800
  const mathScore = Math.min(800, Math.max(200, Math.round((200 + (correct / total) * 600) / 10) * 10));

  const result = {
    student,
    correct,
    wrong,
    unattempted,
    total,
    pct,
    scaled: mathScore,
    mathScore: mathScore,
    details,
    examName: 'SAT Math Practice Set 3: Lines & Coordinate Geometry',
    submitTime: new Date().toISOString()
  };

  // Build Topic breakdown
  result.topicAnalysis = buildTopics(details);

  sessionStorage.setItem('sat_math_set3_result', JSON.stringify(result));

  // Save to Supabase
  let saveRes = null;
  try {
    saveRes = await saveToSupabase(result);
  } catch (e) {
    console.warn('Supabase save warning:', e);
  }

  if (overlay) overlay.classList.remove('active');
  showPage('pageResult');
  renderResults(result, saveRes);
}

function buildTopics(details) {
  const map = (typeof TOPIC_MAP !== 'undefined') ? TOPIC_MAP : {};
  if (Object.keys(map).length === 0 && Array.isArray(details)) {
    details.forEach(d => {
      const t = d.topic || 'General Math';
      if (!map[t]) map[t] = { name: t, questions: [] };
      map[t].questions.push(d.id);
    });
  }
  return Object.entries(map).map(([key, { name, questions: qIds }]) => {
    const rows = details.filter(d => (qIds || []).includes(d.id));
    const attempted = rows.filter(d => d.status !== 'unattempted').length;
    const correct = rows.filter(d => d.status === 'correct').length;
    const wrong = rows.filter(d => d.status === 'wrong').length;
    const acc = attempted ? Math.round((correct / attempted) * 100) : 0;
    return { key, name: name || key, total: rows.length, attempted, correct, wrong, acc };
  });
}

async function saveToSupabase(result) {
  if (typeof SUPABASE_CONFIG === 'undefined' || !SUPABASE_CONFIG.url) {
    console.warn('Supabase config not found.');
    return { ok: false };
  }

  const client = window.supabase ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey) : null;
  if (!client) return { ok: false };

  const studentObj = result.student || {};
  const emailStr = (studentObj.email || '').toLowerCase().trim();
  const nameStr = studentObj.name || 'Student';

  // 1. Save into sat_results
  const payloadResults = {
    student_name: nameStr,
    student_email: emailStr,
    email: emailStr,
    exam_name: result.examName,
    test_id: 'sat_math_set_3',
    sat_score: result.scaled,
    math_score: result.mathScore,
    total_score: result.scaled,
    correct_count: result.correct,
    incorrect_count: result.wrong,
    unattempted_count: result.unattempted,
    percentage: result.pct,
    total_questions: result.total,
    score_details: result.topicAnalysis,
    details_json: result.details,
    student_answers: answers,
    submitted_at: result.submitTime
  };

  try {
    const { error: err1 } = await client.from('sat_results').insert([payloadResults]);
    if (err1) console.warn('Insert into sat_results:', err1.message);
  } catch (e) {
    console.warn('Error saving to sat_results:', e);
  }

  // 2. Also save into sat_topic_report for topic dashboard tracking
  try {
    const topicPayload = {
      student_name: nameStr,
      email: emailStr,
      topic_name: 'Lines & Coordinate Geometry (Set 3)',
      score: result.correct,
      total_questions: result.total,
      percentage: result.pct,
      scaled_score: result.scaled,
      answers: answers,
      submitted_at: result.submitTime
    };
    await client.from('sat_topic_report').insert([topicPayload]);
  } catch (e) {
    // optional table
  }

  return { ok: true };
}

function renderResults(result, saveRes) {
  try {
    const wrap = $('resWrap');
    if (!wrap) return;

    const { correct, wrong, unattempted, total, pct, scaled, topicAnalysis, details, student: st } = result;
    const scoreColor = pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';

    wrap.innerHTML = `
      <div class="res-hero">
        <div class="sat-score" style="color:${scoreColor}">${scaled}</div>
        <div class="score-line">Estimated Math Scaled Score &nbsp;·&nbsp; ${correct} / ${total} Correct (${pct}%)</div>
        <div class="score-sub">${escapeHtml(st.name || 'Student')} &nbsp;·&nbsp; ${escapeHtml(st.email || '')} &nbsp;·&nbsp; ${new Date(result.submitTime).toLocaleString()}</div>
        ${saveRes && saveRes.ok 
          ? '<div style="margin-top:12px;display:inline-block;background:#dcfce7;color:#15803d;padding:4px 14px;border-radius:20px;font-size:0.8rem;font-weight:700;">✅ Score Saved to Student &amp; Admin Dashboard</div>'
          : '<div style="margin-top:12px;display:inline-block;background:#fef3c7;color:#b45309;padding:4px 14px;border-radius:20px;font-size:0.8rem;font-weight:700;">⚠️ Saved to Local Session</div>'
        }
      </div>

      <div class="stats-row" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:14px;margin:24px 0;">
        <div class="stat-card" style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;"><div style="font-size:1.6rem;font-weight:800;color:#0f172a;">${correct + wrong}</div><div style="font-size:0.8rem;color:#64748b;font-weight:600;margin-top:4px;">Attempted</div></div>
        <div class="stat-card" style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;"><div style="font-size:1.6rem;font-weight:800;color:#10b981;">${correct}</div><div style="font-size:0.8rem;color:#64748b;font-weight:600;margin-top:4px;">Correct (+1 Mark)</div></div>
        <div class="stat-card" style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;"><div style="font-size:1.6rem;font-weight:800;color:#ef4444;">${wrong}</div><div style="font-size:0.8rem;color:#64748b;font-weight:600;margin-top:4px;">Wrong (0 Marks)</div></div>
        <div class="stat-card" style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;"><div style="font-size:1.6rem;font-weight:800;color:#f59e0b;">${unattempted}</div><div style="font-size:0.8rem;color:#64748b;font-weight:600;margin-top:4px;">Skipped</div></div>
        <div class="stat-card" style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;text-align:center;"><div style="font-size:1.6rem;font-weight:800;color:#7c3aed;">${pct}%</div><div style="font-size:0.8rem;color:#64748b;font-weight:600;margin-top:4px;">Accuracy</div></div>
      </div>

      <!-- Charts & Topic Breakdown -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;margin:28px 0;">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;">
          <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:14px;color:#1e293b;">Performance Overview</h3>
          <div style="max-width:240px;margin:0 auto;"><canvas id="pieChart"></canvas></div>
        </div>
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:20px;">
          <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:14px;color:#1e293b;">Skill &amp; Concept Accuracy</h3>
          <table style="width:100%;border-collapse:collapse;font-size:0.88rem;">
            <thead>
              <tr style="border-bottom:2px solid #e2e8f0;text-align:left;">
                <th style="padding:6px 8px;">Concept</th>
                <th style="padding:6px 8px;">Total</th>
                <th style="padding:6px 8px;">✓</th>
                <th style="padding:6px 8px;">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              ${(topicAnalysis || []).map(t => `
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:8px;font-weight:600;color:#334155;">${escapeHtml(t.name)}</td>
                  <td style="padding:8px;">${t.total}</td>
                  <td style="padding:8px;color:#10b981;font-weight:700;">${t.correct}</td>
                  <td style="padding:8px;font-weight:700;color:${t.acc >= 70 ? '#10b981' : t.acc >= 40 ? '#f59e0b' : '#ef4444'};">${t.acc}%</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Detailed Question Review -->
      <div style="margin-top:36px;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
          <h3 style="font-size:1.25rem;font-weight:800;color:#0f172a;">Detailed Question-by-Question Review</h3>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="filter-btn ${currentFilter==='all'?'active':''}" onclick="filterReview('all', this)">All (${details.length})</button>
            <button class="filter-btn ${currentFilter==='wrong'?'active':''}" onclick="filterReview('wrong', this)">Incorrect (${wrong})</button>
            <button class="filter-btn ${currentFilter==='unattempted'?'active':''}" onclick="filterReview('unattempted', this)">Skipped (${unattempted})</button>
            <button class="filter-btn ${currentFilter==='correct'?'active':''}" onclick="filterReview('correct', this)">Correct (${correct})</button>
          </div>
        </div>

        <div id="reviewContainer">
          ${details.map((d, idx) => renderReviewCard(d, idx)).join('')}
        </div>
      </div>

      <div style="display:flex;gap:14px;justify-content:center;margin:36px 0 60px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="downloadPDF()" style="background:#7c3aed;padding:12px 24px;border-radius:8px;">📄 Download PDF Report</button>
        <button class="btn btn-outline" onclick="location.reload()" style="padding:12px 24px;border-radius:8px;">🔄 Retake Math Test</button>
        <a href="../index.html" class="btn btn-outline" style="text-decoration:none;padding:12px 24px;border-radius:8px;">🏠 Back to Home</a>
      </div>
    `;

    // Initialize Donut Chart
    try {
      if (typeof Chart !== 'undefined' && $('pieChart')) {
        new Chart($('pieChart'), {
          type: 'doughnut',
          data: {
            labels: ['Correct', 'Wrong', 'Skipped'],
            datasets: [{
              data: [correct, wrong, unattempted],
              backgroundColor: ['#10b981', '#ef4444', '#f59e0b'],
              borderWidth: 0,
              hoverOffset: 4
            }]
          },
          options: {
            plugins: { legend: { position: 'bottom' } },
            cutout: '70%'
          }
        });
      }
    } catch (e) {
      console.warn('Chart render warning:', e);
    }

    renderMath($('resWrap'));

  } catch (err) {
    console.error('Error rendering review dashboard:', err);
    if ($('resWrap')) {
      $('resWrap').innerHTML = `<p style="color:#ef4444;font-weight:600;">Could not render interactive review: ${escapeHtml(err.message)}</p>`;
    }
  }
}

function renderReviewCard(d, idx) {
  let ansHtml = '';
  const isCorrect = d.status === 'correct';
  const isWrong = d.status === 'wrong';

  if (d.isFillIn) {
    const chosenStr = d.chosen !== undefined && d.chosen !== null && String(d.chosen).trim() !== '' ? String(d.chosen) : 'Skipped';
    ansHtml = `
      <div style="background:#f8fafc;border:1.5px solid ${isCorrect ? '#10b981' : isWrong ? '#ef4444' : '#f59e0b'};border-radius:8px;padding:12px 16px;margin:12px 0;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:0.92rem;">
        <div>
          <span style="color:#64748b;font-weight:600;">Your Marked Answer:</span>
          <span style="font-family:'IBM Plex Mono',monospace;font-weight:700;color:${isCorrect ? '#059669' : '#dc2626'};">${escapeHtml(chosenStr)}</span>
          ${isCorrect 
            ? '<span style="margin-left:8px;background:#dcfce7;color:#15803d;font-size:0.75rem;font-weight:700;padding:2px 8px;border-radius:4px;">✓ Correct (+1 Mark)</span>'
            : isWrong 
            ? '<span style="margin-left:8px;background:#fee2e2;color:#b91c1c;font-size:0.75rem;font-weight:700;padding:2px 8px;border-radius:4px;">✗ Incorrect (0 Marks)</span>'
            : '<span style="margin-left:8px;background:#fef3c7;color:#92400e;font-size:0.75rem;font-weight:700;padding:2px 8px;border-radius:4px;">➖ Skipped (0 Marks)</span>'
          }
        </div>
        <div>
          <span style="color:#64748b;font-weight:600;">Official Correct Answer:</span>
          <span style="font-family:'IBM Plex Mono',monospace;font-weight:700;color:#059669;">${escapeHtml(d.answer)}</span>
          ${d.acceptedAnswers && d.acceptedAnswers.length > 1 ? `<span style="color:#64748b;font-size:0.8rem;margin-left:4px;">(Accepted: ${d.acceptedAnswers.join(', ')})</span>` : ''}
        </div>
      </div>
    `;
  } else {
    const chosenLetter = d.chosen !== undefined && d.chosen !== null && d.chosen !== -1 ? LETTERS[d.chosen] : 'None';
    const correctLetter = LETTERS[d.answer] || '–';

    ansHtml = `
      <div style="background:#f1f5f9;border-radius:8px;padding:10px 16px;margin:12px 0;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:0.88rem;">
        <div>
          <span style="color:#475569;font-weight:600;">Your Marked Answer:</span>
          ${isCorrect 
            ? `<strong style="color:#059669;margin-left:6px;">Choice ${chosenLetter} ✓ (Correct, +1 Mark)</strong>`
            : isWrong
            ? `<strong style="color:#dc2626;margin-left:6px;">Choice ${chosenLetter} ✗ (Incorrect, 0 Marks)</strong>`
            : `<strong style="color:#d97706;margin-left:6px;">Skipped / Unattempted (0 Marks)</strong>`
          }
        </div>
        <div>
          <span style="color:#475569;font-weight:600;">Official Correct Answer:</span>
          <strong style="color:#059669;margin-left:6px;">Choice ${correctLetter} ✓</strong>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px;">
        ${(d.options || []).map((opt, i) => {
          const isRight = i === d.answer;
          const isChosen = i === d.chosen;
          let cls = 'rev-opt';
          let badge = '';
          if (isRight) {
            cls += ' correct';
            badge = '<span style="margin-left:auto;background:#16a34a;color:#fff;font-size:0.75rem;font-weight:700;padding:2px 8px;border-radius:4px;">✓ Official Correct Answer</span>';
          } else if (isChosen) {
            cls += ' wrong-chosen';
            badge = '<span style="margin-left:auto;background:#dc2626;color:#fff;font-size:0.75rem;font-weight:700;padding:2px 8px;border-radius:4px;">✗ Your Marked Choice</span>';
          }
          return `
            <div class="${cls}">
              <span style="font-weight:700;width:24px;">${LETTERS[i]}</span>
              <span class="latex-content">${opt}</span>
              ${badge}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  const borderCol = isCorrect ? '#10b981' : isWrong ? '#ef4444' : '#f59e0b';
  const statusBadge = isCorrect 
    ? '<span style="background:#dcfce7;color:#15803d;font-weight:700;padding:4px 10px;border-radius:6px;font-size:0.8rem;">✓ Correct</span>'
    : isWrong 
    ? '<span style="background:#fee2e2;color:#b91c1c;font-weight:700;padding:4px 10px;border-radius:6px;font-size:0.8rem;">✗ Incorrect</span>'
    : '<span style="background:#fef3c7;color:#92400e;font-weight:700;padding:4px 10px;border-radius:6px;font-size:0.8rem;">➖ Skipped</span>';

  return `
    <div class="rev-card review-item" data-status="${d.status}" style="background:#fff;border:1px solid #e2e8f0;border-left:5px solid ${borderCol};border-radius:10px;padding:20px;margin-bottom:18px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-weight:800;font-size:1.05rem;color:#0f172a;">Question ${d.qnum}</span>
          <span style="background:#f1f5f9;color:#475569;font-size:0.78rem;font-weight:600;padding:3px 8px;border-radius:4px;">${escapeHtml(d.topic)}</span>
          <span style="background:#ede9fe;color:#7c3aed;font-size:0.75rem;font-weight:600;padding:3px 8px;border-radius:4px;">${escapeHtml(d.difficulty)}</span>
        </div>
        ${statusBadge}
      </div>

      <div style="font-size:1rem;color:#1e293b;line-height:1.65;margin-bottom:12px;">
        ${d.text}
      </div>

      ${ansHtml}

      <div style="background:#f8fafc;border-left:3px solid #7c3aed;padding:12px 16px;border-radius:6px;margin-top:14px;">
        <strong style="color:#7c3aed;font-size:0.88rem;display:block;margin-bottom:4px;">Official Step-by-Step Explanation:</strong>
        <div style="font-size:0.92rem;color:#334155;line-height:1.6;">
          ${sanitizeExplanation(d.explanation)}
        </div>
      </div>
    </div>
  `;
}

function filterReview(type, btn) {
  currentFilter = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const cards = document.querySelectorAll('.review-item');
  cards.forEach(c => {
    if (type === 'all') {
      c.style.display = 'block';
    } else {
      c.style.display = c.getAttribute('data-status') === type ? 'block' : 'none';
    }
  });
}

function downloadPDF() {
  const resultStr = sessionStorage.getItem('sat_math_set3_result');
  if (!resultStr) {
    customAlert('No test result found to generate PDF.');
    return;
  }
  const result = JSON.parse(resultStr);

  const { jsPDF } = window.jspdf || {};
  if (!jsPDF) {
    alert('PDF generator library is loading, please try again in a moment.');
    return;
  }

  const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'letter' });
  const margin = 40;
  let y = 50;

  doc.setFillColor(124, 58, 237);
  doc.rect(0, 0, 612, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('EduQuest SAT · Score Report', margin, 26);

  y = 75;
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(18);
  doc.text('SAT Math Practice Set 3: Lines & Coordinate Geometry', margin, y);

  y += 22;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Student: ${result.student?.name || 'Student'}  |  Email: ${result.student?.email || 'N/A'}  |  Date: ${new Date(result.submitTime).toLocaleDateString()}`, margin, y);

  y += 28;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(1);
  doc.line(margin, y, 612 - margin, y);

  y += 30;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(`Estimated Scaled Score: ${result.scaled} / 800`, margin, y);
  y += 18;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Correct: ${result.correct}/${result.total} (${result.pct}%)  |  Wrong: ${result.wrong}  |  Skipped: ${result.unattempted}`, margin, y);

  y += 30;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Question Summary:', margin, y);
  y += 18;

  result.details.forEach((d, i) => {
    if (y > 720) {
      doc.addPage();
      y = 50;
    }
    const statusMark = d.status === 'correct' ? '[CORRECT]' : d.status === 'wrong' ? '[WRONG]' : '[SKIPPED]';
    const chosenVal = d.isFillIn ? (d.chosen || 'None') : (d.chosen !== undefined && d.chosen !== -1 ? LETTERS[d.chosen] : 'None');
    const correctVal = d.isFillIn ? d.answer : LETTERS[d.answer];

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`Q${d.qnum} (${d.topic}) - ${statusMark}`, margin, y);
    y += 13;
    doc.setFont('helvetica', 'normal');
    doc.text(`Marked: ${chosenVal}  |  Official: ${correctVal}`, margin + 15, y);
    y += 16;
  });

  doc.save(`SAT_Math_Set3_Report_${result.student?.name ? result.student.name.replace(/\s+/g, '_') : 'Student'}.pdf`);
}
