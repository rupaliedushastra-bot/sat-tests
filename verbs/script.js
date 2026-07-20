
let lastResultObj = null;
let lastResultDetails = [];

function generateCleanReportHTML(t, details, emailStr, studentNameStr) {
  const letters = ['A', 'B', 'C', 'D'];
  const testTitle = t.exam_name || t.topic || 'Practice Test Performance Report';
  const name = studentNameStr || t.name || t.student_name || (emailStr || t.email || 'Student').split('@')[0];
  const email = emailStr || t.email || '';
  const dateStr = (t.submit_time || t.submitted_at || t.submitTime) 
    ? new Date(t.submit_time || t.submitted_at || t.submitTime).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }) 
    : new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });

  const total = t.total || (details ? details.length : 0);
  const correct = t.correct || 0;
  const wrong = t.wrong || 0;
  const unattempted = t.unattempted !== undefined ? t.unattempted : Math.max(0, total - correct - wrong);
  const pct = t.percentage || t.pct || (total > 0 ? Math.round((correct / total) * 100) : 0);
  const scoreDisplay = t.composite_score || t.scaled || `${pct}%`;

  let qCards = '';
  if (details && details.length > 0) {
    qCards = details.map((d, i) => {
      const qId = d.id || (i + 1);
      const qText = d.text || d.question || d.prompt || '';
      const hasText = !!qText;
      const status = d.status || (d.chosen === d.answer ? 'correct' : (d.chosen !== undefined && d.chosen !== null && d.chosen !== -1 ? 'wrong' : 'unattempted'));
      
      const statusBadge = status === 'correct'
        ? '<span style="background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; padding:4px 12px; border-radius:20px; font-weight:700; font-size:0.8rem;">✅ Correct</span>'
        : status === 'wrong'
        ? '<span style="background:#fee2e2; color:#991b1b; border:1px solid #fca5a5; padding:4px 12px; border-radius:20px; font-weight:700; font-size:0.8rem;">❌ Wrong</span>'
        : '<span style="background:#fef3c7; color:#92400e; border:1px solid #fde68a; padding:4px 12px; border-radius:20px; font-weight:700; font-size:0.8rem;">⏭ Skipped</span>';

      let optsHTML = '';
      if (hasText && d.options && d.options.length > 0) {
        optsHTML = d.options.map((optText, optIdx) => {
          let optStyle = "background:#f8fafc; border:1.5px solid #e2e8f0; color:#334155;";
          let badgeIcon = "";

          if (optIdx === d.answer) {
            optStyle = "background:#f0fdf4; border:1.5px solid #22c55e; color:#15803d; font-weight:600;";
            badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#16a34a;">✓ Correct Answer</span>';
          }

          if (status === 'wrong' && optIdx === d.chosen) {
            optStyle = "background:#fef2f2; border:1.5px solid #ef4444; color:#b91c1c; font-weight:600;";
            badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#dc2626;">✗ Student Choice</span>';
          } else if (status === 'correct' && optIdx === d.chosen) {
            badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#16a34a;">✓ Student Choice</span>';
          }

          return `
            <div style="display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:8px; font-size:0.9rem; margin-bottom:8px; ${optStyle}">
              <div style="width:26px; height:26px; border-radius:50%; background:rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem; flex-shrink:0;">${letters[optIdx] || optIdx + 1}</div>
              <div style="flex:1;">${optText}</div>
              ${badgeIcon}
            </div>
          `;
        }).join('');
      } else {
        optsHTML = `
          <div style="font-size:0.88rem; color:#475569; margin-bottom:8px;">
            ${status === 'wrong' ? `Student answer: <strong>${letters[d.chosen] || '–'}</strong> · Correct answer: <strong>${letters[d.answer] || '–'}</strong>` : ''}
            ${status === 'unattempted' ? `Correct answer: <strong>${letters[d.answer] || '–'}</strong>` : ''}
          </div>
        `;
      }

      const expText = d.explanation || 'No detailed explanation available for this question. Please review the relevant concept or consult the solution guide.';

      return `
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:20px; box-shadow:0 2px 8px rgba(0,0,0,0.04); page-break-inside:avoid;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #f1f5f9; padding-bottom:10px;">
            <div>
              <span style="font-weight:800; font-size:1rem; font-family:'Courier New', monospace; color:#0f172a;">Question ${qId}</span>
            </div>
            ${statusBadge}
          </div>
          
          ${hasText ? `<div style="font-size:0.95rem; line-height:1.65; color:#1e293b; margin-bottom:16px; white-space:pre-wrap;">${qText}</div>` : ''}
          
          <div style="margin-bottom:16px;">
            ${optsHTML}
          </div>

          <div style="padding:12px 16px; background:#f0f9ff; border-left:4px solid #0284c7; border-radius:0 8px 8px 0; font-size:0.88rem; line-height:1.5; color:#0c4a6e;">
            <strong style="color:#0369a1; display:block; margin-bottom:4px;">💡 Solution & Explanation:</strong>
            ${expText}
          </div>
        </div>
      `;
    }).join('');
  } else {
    qCards = '<p style="color:#64748b; text-align:center; padding:20px;">No detailed questions available.</p>';
  }

  return `
    <div class="pdf-export-container" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; background:#f8fafc; color:#0f172a; padding:24px; max-width:900px; margin:0 auto;">
      <div style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color:#ffffff; padding:28px 32px; border-radius:16px; margin-bottom:24px; text-align:center;">
        <h1 style="margin:0 0 6px 0; font-size:1.8rem; letter-spacing:-0.02em; color:#ffffff;">EduQuest Performance Report</h1>
        <p style="margin:4px 0; opacity:0.85; font-size:0.95rem; color:#e2e8f0;"><strong>${testTitle}</strong></p>
        <div style="font-size:3.2rem; font-weight:900; color:#38bdf8; margin:12px 0 6px 0;">${scoreDisplay}</div>
        <p style="margin:4px 0; font-size:0.9rem; color:#cbd5e1;">Student: <strong>${name}</strong> ${email ? `(${email})` : ''} &nbsp;•&nbsp; Date: ${dateStr}</p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:24px;">
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#16a34a;">${correct}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Correct</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#dc2626;">${wrong}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Wrong</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#d97706;">${unattempted}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Skipped</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#0284c7;">${pct}%</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Percentage</div>
        </div>
      </div>

      <div style="font-size:1.3rem; font-weight:800; margin:28px 0 16px 0; color:#0f172a; border-bottom:2px solid #e2e8f0; padding-bottom:8px;">📋 Complete Question & Answer Review (${total} Questions)</div>

      ${qCards}
    </div>
  `;
}

// =============================================
// script.js – Verb Tense and Forms
// Digital SAT Practice | EduQuest
// 35 Questions | Standard English Conventions
// =============================================

async function saveUserToSupabase(student) {
    if (!window.SUPABASE_CONFIG || SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') return;
    try {
        await fetch(`${SUPABASE_CONFIG.url}/rest/v1/sat_topic_user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                name: student.name,
                email: student.email,
                phone: student.phone,
                topic: 'Verb Tense and Forms',
                created_at: new Date().toISOString()
            })
        });
    } catch (e) { console.error('Failed to save user', e); }
}

async function saveToSupabase(result) {
    if (!window.SUPABASE_CONFIG || SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL')
        return { ok: false, msg: 'Supabase not configured' };
    try {
        const resp = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/sat_topic_report`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                name: result.student.name,
                email: result.student.email,
                phone: result.student.phone || '',
                topic: 'Verb Tense and Forms',
                topic_number: 21,
                correct: result.correct,
                wrong: result.wrong,
                unattempted: result.unattempted,
                total: result.total,
                pct: result.pct,
                grade: result.grade,
                scaled: result.scaled,
                submit_time: result.submitTime,
                answers_json: JSON.stringify(result.answers),
                details_json: JSON.stringify(result.details.map(d => ({
          id: d.id,
          status: d.status,
          chosen: d.chosen,
          answer: d.answer !== undefined ? d.answer : d.correctAnswer,
          text: d.text || d.question || d.prompt || '',
          options: d.options || d.choices || [],
          explanation: d.explanation || d.solution || '',
          useImage: d.useImage || false,
          imageKey: d.imageKey || ''
        })))
            })
        });
        return { ok: resp.ok, status: resp.status };
    } catch (e) { return { ok: false, msg: e.message }; }
}

// ── App State ────────────────────────────────
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const $ = id => document.getElementById(id);
let student = {}, answers = {}, currentQ = 0, timerInt, secsLeft = 0;

function customAlert(msg) {
    $('alertMsg').textContent = msg;
    $('alertBg').classList.add('open');
}
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    $(id).classList.add('active');
}

// ── Registration ─────────────────────────────
function startTest() {
    const name = $('regName').value.trim();
    const email = $('regEmail').value.trim();
    const phoneVal = ($('regPhone').value || '').trim();
    const phone = phoneVal ? ($('regCC').value + ' ' + phoneVal).trim() : '';

    if (!name || name.length < 2) { customAlert('Please enter a valid full name.'); $('regName').focus(); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) { customAlert('Please enter a valid email address.'); $('regEmail').focus(); return; }
    if (phoneVal && !/^\d{7,15}$/.test(phoneVal.replace(/[- ]/g, ''))) { customAlert('Please enter a valid phone number.'); $('regPhone').focus(); return; }

    student = { name, email, phone };
    saveUserToSupabase(student);
    showPage('pageTest');
    buildPalette();
    renderQ();
    startTimer(53 * 60);
    $('timerBox').style.display = 'flex';
}

// ── Timer ────────────────────────────────────
function startTimer(s) {
    secsLeft = s;
    paintTimer();
    timerInt = setInterval(() => {
        secsLeft--;
        paintTimer();
        if (secsLeft <= 300) $('timerBox').classList.add('warn');
        if (secsLeft <= 0) { clearInterval(timerInt); doSubmit(); }
    }, 1000);
}
function paintTimer() {
    const m = String(Math.floor(secsLeft / 60)).padStart(2, '0');
    const s = String(secsLeft % 60).padStart(2, '0');
    $('timerDisplay').textContent = `${m}:${s}`;
}

// ── Render Question ───────────────────────────
function renderQ() {
    const q = QUESTIONS[currentQ];
    $('qBadge').textContent = `Q ${q.id}`;
    if ($('qTopic')) $('qTopic').textContent = q.topic || 'Verb Tense and Forms';
    $('modProgress').textContent = `Q ${currentQ + 1} of ${QUESTIONS.length}`;
    $('btnPrev').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
    $('btnNext').textContent = currentQ < QUESTIONS.length - 1 ? 'Next →' : '🏁 Submit';

    const qTextEl = $('qText');
    qTextEl.innerHTML = `<div class="q-stem" style="font-size:0.97rem;line-height:1.8;white-space:pre-wrap;">${q.text}</div>`;

    const imgBox = $('qImgContainer');
    const imgEl = $('qImg');
    if (imgBox && imgEl) {
        if (q.useImage && window.QUESTION_IMAGES && QUESTION_IMAGES[q.imageKey]) {
            imgEl.src = QUESTION_IMAGES[q.imageKey];
            imgBox.style.display = 'block';
        } else {
            imgBox.style.display = 'none';
        }
    }

    const opts = $('qOpts');
    opts.innerHTML = '';
    q.options.forEach((txt, i) => {
        const d = document.createElement('div');
        d.className = 'opt' + (answers[q.id] === i ? ' selected' : '');
        d.onclick = () => { answers[q.id] = i; renderQ(); };
        d.innerHTML = `<div class="opt-letter">${LETTERS[i]}</div><div class="opt-text">${txt}</div>`;
        opts.appendChild(d);
    });

    updatePalette();
    updateProg();
}

function prevQ() { if (currentQ > 0) { currentQ--; renderQ(); } }
function nextQ() {
    if (currentQ < QUESTIONS.length - 1) { currentQ++; renderQ(); }
    else confirmSubmit();
}

// ── Palette & Progress ────────────────────────
function buildPalette() {
    const g = $('palette');
    g.innerHTML = '';
    QUESTIONS.forEach((q, i) => {
        const b = document.createElement('button');
        b.id = `pb${q.id}`; b.className = 'pb'; b.textContent = q.id;
        b.onclick = () => { currentQ = i; renderQ(); };
        g.appendChild(b);
    });
}
function updatePalette() {
    QUESTIONS.forEach((q, i) => {
        const b = $(`pb${q.id}`);
        if (!b) return;
        b.className = 'pb' +
            (answers[q.id] !== undefined ? ' done' : '') +
            (i === currentQ ? ' cur' : '');
    });
}
function updateProg() {
    const done = Object.keys(answers).length;
    const pct = Math.round(done / QUESTIONS.length * 100);
    $('progFill').style.width = pct + '%';
    $('progLbl').textContent = `${done} / ${QUESTIONS.length} answered`;
}

// ── Modal ─────────────────────────────────────
function confirmSubmit() {
    const skip = QUESTIONS.length - Object.keys(answers).length;
    $('modalMsg').textContent = skip > 0
        ? `You have ${skip} unanswered question${skip > 1 ? 's' : ''}. Submit anyway?`
        : 'Submit your test? This cannot be undone.';
    $('modalBg').classList.add('open');
}
function closeModal() { $('modalBg').classList.remove('open'); }

// ── Submit ────────────────────────────────────
async function doSubmit() {
    clearInterval(timerInt);
    closeModal();

    $('savingOverlay').classList.add('show');
    $('savingMsg').textContent = 'Saving your result to database...';

    let correct = 0, wrong = 0, unattempted = 0;
    const details = QUESTIONS.map(q => {
        const chosen = answers[q.id];
        let status;
        if (chosen === undefined) { unattempted++; status = 'unattempted'; }
        else if (chosen === q.answer) { correct++; status = 'correct'; }
        else { wrong++; status = 'wrong'; }
        return { ...q, chosen, status };
    });

    const total = QUESTIONS.length;
    const pct = Math.round(correct / total * 100);
    const grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : 'D';
    const scaled = Math.round(200 + (correct / total) * 600);

    const result = {
        student, correct, wrong, unattempted, total, pct, grade, scaled, details, answers,
        submitTime: new Date().toISOString(),
        examName: 'Verb Tense and Forms',
        topicNumber: 21
    };
    const saveResult = await saveToSupabase(result);

    $('savingOverlay').classList.remove('show');
    showPage('pageResult');
    $('timerBox').style.display = 'none';
    renderResults(result, saveResult);
}

// ── Results ───────────────────────────────────
function renderResults(result, saveRes) {
  lastResultObj = result;
  lastResultDetails = result.details || [];
    const { student, correct, wrong, unattempted, total, pct, grade, scaled, details } = result;
    const wrap = $('resWrap');
    const scoreColor = pct >= 70 ? '#059669' : pct >= 50 ? '#d97706' : '#dc2626';
    const savedBadge = saveRes && saveRes.ok
        ? `<div class="saved-badge">✅ Result saved to database</div>`
        : `<div class="saved-badge" style="color:#dc2626;border-color:rgba(220,38,38,0.3);background:rgba(220,38,38,0.08)">⚠️ Save failed — check Supabase config</div>`;

    wrap.innerHTML = `
    <div class="res-hero">
      <div style="font-size:0.8rem;opacity:.55;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Verb Tense and Forms · Topic Test</div>
      <div class="sat-score" style="color:${scoreColor}">${scaled}</div>
      <div class="score-line">Section Score · ${correct} / ${total} correct (${pct}%) · Grade: ${grade}</div>
      <div class="score-sub">${student.name} &nbsp;·&nbsp; ${new Date(result.submitTime).toLocaleString()}</div>
      ${savedBadge}
    </div>
    <div class="stats-row">
      <div class="stat-card c"><div class="num">${correct}</div><div class="lbl">Correct</div></div>
      <div class="stat-card w"><div class="num">${wrong}</div><div class="lbl">Wrong</div></div>
      <div class="stat-card s"><div class="num">${unattempted}</div><div class="lbl">Skipped</div></div>
      <div class="stat-card"><div class="num">${pct}%</div><div class="lbl">Score</div></div>
    </div>
    <div class="charts-row">
      <div class="chart-card"><h3>📊 Score Breakdown</h3><canvas id="pieChart" height="220"></canvas></div>
      <div class="chart-card"><h3>📈 Sub-skill Performance</h3><canvas id="barChart" height="220"></canvas></div>
    </div>
    <div class="q-review-section" style="margin-top:24px; text-align:left;">
      <h3 style="font-family:'Syne',sans-serif; font-size:1.1rem; font-weight:700; margin-bottom:16px; color:var(--ink2);">📋 Detailed Question Review (${details.length} questions)</h3>
      <div class="q-review-list">
        ${details.map((q, i) => {
          const qText = q.text || q.question || q.prompt || '';
          const hasText = !!qText;
          const statusClass = q.status === 'correct' ? 'correct' : q.status === 'wrong' ? 'wrong' : 'unattempted';
          const statusText = q.status === 'correct' ? '✅ Correct' : q.status === 'wrong' ? '❌ Wrong' : '⏭ Skipped';
          
          let imgSrc = '';
          if (q.useImage && q.imageKey && typeof QUESTION_IMAGES !== 'undefined' && QUESTION_IMAGES[q.imageKey]) {
            const val = QUESTION_IMAGES[q.imageKey];
            imgSrc = (val.startsWith('data:') || val.startsWith('http')) ? val : val;
          }

          return `
            <div class="q-card" style="background:#fff; border:1px solid var(--border); border-radius:12px; padding:20px; margin-bottom:16px; box-shadow:var(--shadow);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <span style="font-weight:700; font-size:0.95rem; font-family:'IBM Plex Mono',monospace;">Question ${q.id || (i+1)}</span>
                <span style="font-size:0.8rem; font-weight:600; padding:4px 10px; border-radius:20px; ${q.status==='correct'?'background:rgba(5,150,105,0.1);color:#059669;':q.status==='wrong'?'background:rgba(220,38,38,0.1);color:#dc2626;':'background:rgba(217,119,6,0.1);color:#d97706;'}">${statusText}</span>
              </div>
              
              ${hasText ? `<div style="font-size:0.92rem; line-height:1.6; color:var(--ink2); margin-bottom:14px; white-space:pre-wrap;">${qText}</div>` : ''}
              ${imgSrc ? `<div style="text-align:center; margin-bottom:14px;"><img src="${imgSrc}" style="max-width:100%; border-radius:8px;" alt="Question Image" /></div>` : ''}

              ${hasText && q.options ? `
                <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
                  ${q.options.map((optText, optIdx) => {
                    let optStyle = 'background:var(--surface); border:1px solid var(--border); color:var(--ink2);';
                    if (optIdx === q.answer) {
                      optStyle = 'background:rgba(5,150,105,0.1); border:1px solid #059669; color:#059669; font-weight:600;';
                    }
                    if (q.status === 'wrong' && optIdx === q.chosen) {
                      optStyle = 'background:rgba(220,38,38,0.1); border:1px solid #dc2626; color:#dc2626; font-weight:600;';
                    }

                    let badgeIcon = '';
                    if (optIdx === q.answer) {
                      badgeIcon = ' <span style="margin-left:auto; font-weight:bold; color:#059669;">✓ Correct</span>';
                    } else if (q.status === 'wrong' && optIdx === q.chosen) {
                      badgeIcon = ' <span style="margin-left:auto; font-weight:bold; color:#dc2626;">✗ Your Choice</span>';
                    } else if (q.status === 'correct' && optIdx === q.chosen) {
                      badgeIcon = ' <span style="margin-left:auto; font-weight:bold; color:#059669;">✓ Your Choice</span>';
                    }

                    return `
                      <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; font-size:0.88rem; ${optStyle}">
                        <div style="width:24px; height:24px; border-radius:50%; background:rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.78rem; flex-shrink:0;">${LETTERS[optIdx]}</div>
                        <div>${optText}</div>
                        ${badgeIcon}
                      </div>
                    `;
                  }).join('')}
                </div>
              ` : ''}

              <div style="margin-top:12px; padding:12px 14px; background:rgba(124,58,237,0.05); border-left:3px solid var(--accent); border-radius:0 8px 8px 0; font-size:0.85rem; line-height:1.5; color:var(--ink2);">
                <strong style="color:var(--accent); display:block; margin-bottom:4px;">💡 Explanation:</strong> 
                ${q.explanation ? q.explanation : 'No detailed explanation available for this question.'}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    <div class="res-actions" id="resActions">
      <button class="btn btn-primary" style="width:auto" onclick="location.reload()">🔄 Retake This Test</button>
      <a href="../index.html" class="btn btn-outline" style="text-decoration:none">🏠 All Topics</a>
      <button class="btn btn-primary" style="width:auto" onclick="downloadPDF()">📄 Download PDF</button>
    </div>`;

    new Chart($('pieChart'), {
        type: 'doughnut',
        data: { labels: ['Correct', 'Wrong', 'Skipped'], datasets: [{ data: [correct, wrong, unattempted], backgroundColor: ['#059669', '#dc2626', '#d97706'], borderWidth: 0, hoverOffset: 4 }] },
        options: { plugins: { legend: { position: 'bottom', labels: { font: { family: 'IBM Plex Sans' } } } }, cutout: '68%' }
    });

    const topicGroups = {};
    details.forEach(d => {
        const tKey = d.topic || 'General';
        if (!topicGroups[tKey]) topicGroups[tKey] = { correct: 0, total: 0 };
        topicGroups[tKey].total++;
        if (d.status === 'correct') topicGroups[tKey].correct++;
    });
    const bands = Object.entries(topicGroups).map(([label, data]) => ({
        label: label.length > 18 ? label.substring(0, 18) + '…' : label,
        score: data.correct, total: data.total || 1
    }));
    const bScores = bands.map(b => b.score);
    const bTotals = bands.map(b => b.total);
    const bColors = bands.map((b, i) => { const p = bScores[i] / bTotals[i]; return p >= 0.7 ? '#059669' : p >= 0.4 ? '#d97706' : '#dc2626'; });

    new Chart($('barChart'), {
        type: 'bar',
        data: { labels: bands.map(b => b.label), datasets: [{ label: 'Correct', data: bScores, backgroundColor: bColors.map(c => c + '33'), borderColor: bColors, borderWidth: 2, borderRadius: 6 }] },
        options: { plugins: { legend: { display: false } }, scales: { y: { max: Math.max(...bTotals, 6), ticks: { stepSize: 1, font: { family: 'IBM Plex Mono' } } }, x: { ticks: { font: { family: 'IBM Plex Sans', size: 10 } } } } }
    });
}

// ── PDF Download ──────────────────────────────
function downloadPDF() {
  if (!lastResultObj) {
    const element = document.getElementById('resWrap');
    const actions = document.getElementById('resActions');
    if (actions) actions.style.display = 'none';
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `EduQuest_Report_${(typeof student !== 'undefined' && student.name ? student.name : 'Student').replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#f8fafc', scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save().then(() => {
      if (actions) actions.style.display = 'flex';
    }).catch(err => {
      if (actions) actions.style.display = 'flex';
    });
    return;
  }

  const sName = typeof student !== 'undefined' && student.name ? student.name : 'Student';
  const sEmail = typeof student !== 'undefined' && student.email ? student.email : '';

  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'fixed';
  tempContainer.style.left = '-9999px';
  tempContainer.style.top = '0';
  tempContainer.style.width = '800px';
  tempContainer.innerHTML = generateCleanReportHTML(lastResultObj, lastResultDetails, sEmail, sName);
  document.body.appendChild(tempContainer);

  const opt = {
    margin: [10, 10, 10, 10],
    filename: `EduQuest_Report_${sName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: '#f8fafc', scrollY: 0 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(tempContainer).save().then(() => {
    if (document.body.contains(tempContainer)) document.body.removeChild(tempContainer);
  }).catch(err => {
    console.error('PDF generation failed', err);
    if (document.body.contains(tempContainer)) document.body.removeChild(tempContainer);
  });
}