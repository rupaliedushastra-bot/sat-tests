// ══════════════════════════════════════════════
// SUPABASE CONFIG — replace with your values
// ══════════════════════════════════════════════
const SUPABASE_URL = 'https://dyvvhmuegtzooijrtwyd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY';
// Table names in Supabase: sat_topic_user (for form fill) and sat_topic_report (for reports)

async function saveUserToSupabase(student) {
  if (SUPABASE_URL === 'YOUR_SUPABASE_URL') return;
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/sat_topic_user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        name: student.name,
        email: student.email,
        phone: student.phone,
        topic: 'Grammar & Usage',
        created_at: new Date().toISOString()
      })
    });
  } catch(e) {
    console.error('Failed to save user', e);
  }
}

async function saveToSupabase(result) {
  if (SUPABASE_URL === 'YOUR_SUPABASE_URL') return { ok: false, msg: 'Supabase not configured' };
  try {
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/sat_topic_report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        name:         result.student.name,
        email:        result.student.email,
        phone:        result.student.phone || '',
        topic:        'Grammar & Usage',
        topic_number: 3,
        correct:      result.correct,
        wrong:        result.wrong,
        unattempted:  result.unattempted,
        total:        result.total,
        pct:          result.pct,
        grade:        result.grade,
        scaled:       result.scaled,
        submit_time:  result.submitTime,
        answers_json: JSON.stringify(result.answers),
        details_json: JSON.stringify(result.details.map(d => ({
          id: d.id, status: d.status,
          chosen: d.chosen, answer: d.answer
        })))
      })
    });
    return { ok: resp.ok, status: resp.status };
  } catch(e) {
    return { ok: false, msg: e.message };
  }
}

// ══════════════════════════════════════════════
// APP STATE
// ══════════════════════════════════════════════
const LETTERS = ['A','B','C','D'];
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

// ── Registration ────────────────────────────
function startTest() {
  const name  = $('regName').value.trim();
  const email = $('regEmail').value.trim();
  const phoneVal = ($('regPhone').value || '').trim();
  const phone = phoneVal ? ($('regCC').value + ' ' + phoneVal).trim() : '';

  if (!name || name.length < 2) { 
    customAlert('Please enter a valid full name (at least 2 characters).'); 
    $('regName').focus(); 
    return; 
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) { 
    customAlert('Please enter a valid email address.'); 
    $('regEmail').focus(); 
    return; 
  }

  if (phoneVal && !/^\d{7,15}$/.test(phoneVal.replace(/[- ]/g, ''))) {
    customAlert('Please enter a valid phone number (7-15 digits).');
    $('regPhone').focus();
    return;
  }

  student = { name, email, phone };
  saveUserToSupabase(student); // Save to Supabase when user starts
  showPage('pageTest');
  buildPalette();
  renderQ();
  startTimer(32 * 60);
  $('timerBox').style.display = 'flex';
}

// ── Timer ───────────────────────────────────
function startTimer(s) {
  secsLeft = s;
  paintTimer();
  timerInt = setInterval(() => {
    secsLeft--;
    paintTimer();
    if (secsLeft <= 300) $('timerBox').classList.add('warn');
    if (secsLeft <= 0)   { clearInterval(timerInt); doSubmit(); }
  }, 1000);
}
function paintTimer() {
  const m = String(Math.floor(secsLeft/60)).padStart(2,'0');
  const s = String(secsLeft%60).padStart(2,'0');
  $('timerDisplay').textContent = `${m}:${s}`;
}

// ── Render question ──────────────────────────
function renderQ() {
  const q = QUESTIONS[currentQ];
  $('qBadge').textContent = `Q ${q.id}`;
  if ($('qTopic')) $('qTopic').textContent = q.topic || 'Grammar & Usage';
  $('qText').textContent  = q.text;
  $('modProgress').textContent = `Q ${currentQ+1} of ${QUESTIONS.length}`;
  $('btnPrev').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
  $('btnNext').textContent = currentQ < QUESTIONS.length-1 ? 'Next →' : '🏁 Submit';

  const opts = $('qOpts');
  opts.innerHTML = '';
  q.options.forEach((txt, i) => {
    const d = document.createElement('div');
    d.className = 'opt' + (answers[q.id] === i ? ' selected' : '');
    d.onclick   = () => { answers[q.id] = i; renderQ(); };
    d.innerHTML = `<div class="opt-letter">${LETTERS[i]}</div><div class="opt-text">${txt}</div>`;
    opts.appendChild(d);
  });
  updatePalette();
  updateProg();
}

function prevQ() { if (currentQ > 0) { currentQ--; renderQ(); } }
function nextQ() {
  if (currentQ < QUESTIONS.length-1) { currentQ++; renderQ(); }
  else confirmSubmit();
}

// ── Palette & progress ───────────────────────
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
  const pct  = Math.round(done / QUESTIONS.length * 100);
  $('progFill').style.width = pct + '%';
  $('progLbl').textContent  = `${done} / ${QUESTIONS.length} answered`;
}

// ── Modal ────────────────────────────────────
function confirmSubmit() {
  const skip = QUESTIONS.length - Object.keys(answers).length;
  $('modalMsg').textContent = skip > 0
    ? `You have ${skip} unanswered question${skip>1?'s':''}. Submit anyway?`
    : 'Submit your test? This cannot be undone.';
  $('modalBg').classList.add('open');
}
function closeModal() { $('modalBg').classList.remove('open'); }

// ── Final submit ─────────────────────────────
async function doSubmit() {
  clearInterval(timerInt);
  closeModal();

  // Show saving overlay
  $('savingOverlay').classList.add('show');
  $('savingMsg').textContent = 'Saving your result to database...';

  let correct=0, wrong=0, unattempted=0;
  const details = QUESTIONS.map(q => {
    const chosen = answers[q.id];
    let status;
    if (chosen === undefined) { unattempted++; status='unattempted'; }
    else if (chosen === q.answer) { correct++; status='correct'; }
    else { wrong++; status='wrong'; }
    return { ...q, chosen, status };
  });

  const total  = QUESTIONS.length;
  const pct    = Math.round(correct/total*100);
  const grade  = pct>=90?'A+':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';
  const scaled = Math.round(200 + (correct/total)*600);

  const result = { student, correct, wrong, unattempted, total, pct, grade, scaled, details,
    answers, submitTime: new Date().toISOString() };

  // Save to Supabase
  const saveResult = await saveToSupabase(result);

  // Hide saving overlay
  $('savingOverlay').classList.remove('show');

  showPage('pageResult');
  $('timerBox').style.display = 'none';
  renderResults(result, saveResult);
}

// ── Results ──────────────────────────────────
function renderResults(result, saveRes) {
  const { student, correct, wrong, unattempted, total, pct, grade, scaled, details } = result;
  const wrap = $('resWrap');
  const scoreColor = pct>=70?'#059669':pct>=50?'#d97706':'#dc2626';
  const savedBadge = saveRes && saveRes.ok
    ? `<div class="saved-badge">✅ Result saved to database</div>`
    : (SUPABASE_URL !== 'YOUR_SUPABASE_URL' ? `<div class="saved-badge" style="color:#dc2626;border-color:rgba(220,38,38,0.3);background:rgba(220,38,38,0.08)">⚠️ Save failed — check Supabase config</div>` : '');

  wrap.innerHTML = `
    <div class="res-hero">
      <div style="font-size:0.8rem;opacity:.55;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;position:relative">Topic 3 · Grammar & Usage</div>
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

    ${wrong > 0 || unattempted > 0 ? `
    <div class="inc-review">
      <h3>⚠️ Review: ${wrong} Wrong &nbsp;+&nbsp; ${unattempted} Skipped</h3>
      ${details.filter(d=>d.status!=='correct').map(q=>`
        <div class="inc-q">
          <div class="inc-q-text">Q${q.id}: ${q.text.substring(0,160)}${q.text.length>160?'…':''}</div>
          ${q.status==='wrong'
            ?`<div class="inc-row wrong"><span class="label">❌ Your answer:</span><span>(${LETTERS[q.chosen]}) ${q.options[q.chosen]}</span></div>`
            :`<div class="inc-row" style="color:var(--amber)"><span class="label">⏭ Skipped</span></div>`}
          <div class="inc-row right"><span class="label">✅ Correct:</span><span>(${LETTERS[q.answer]}) ${q.options[q.answer]}</span></div>
        </div>`).join('')}
    </div>` : `<div class="inc-review" style="text-align:center;padding:32px"><div style="font-size:3rem;margin-bottom:8px">🎉</div><h3 style="color:var(--green);border:none;padding:0">Perfect Score!</h3></div>`}

    <div class="res-actions" id="resActions">
      <button class="btn btn-primary" style="width:auto" onclick="location.reload()">🔄 Retake This Test</button>
      <a href="../index.html" class="btn btn-outline" style="text-decoration:none">🏠 All Topics</a>
      <button class="btn btn-primary" style="width:auto" onclick="downloadPDF()" id="downloadPdfBtn">📄 Download PDF</button>
    </div>`;

  new Chart($('pieChart'), {
    type:'doughnut',
    data:{ labels:['Correct','Wrong','Skipped'],
      datasets:[{ data:[correct,wrong,unattempted],
        backgroundColor:['#059669','#dc2626','#d97706'], borderWidth:0, hoverOffset:4 }] },
    options:{ plugins:{ legend:{ position:'bottom', labels:{ font:{ family:'IBM Plex Sans' } } } }, cutout:'68%' }
  });

  const bands = [
    { label:'Punctuation', qs: details.filter(d=>d.topic==='Punctuation') },
    { label:'Rhetorical', qs: details.filter(d=>d.topic==='Rhetorical Skills') },
    { label:'Sent. Function', qs: details.filter(d=>d.topic==='Sentence Function') },
    { label:'Reading Comp.', qs: details.filter(d=>d.topic==='Reading Comprehension') },
    { label:'Others', qs: details.filter(d=>!['Punctuation','Rhetorical Skills','Sentence Function','Reading Comprehension'].includes(d.topic)) },
  ];
  const bScores = bands.map(b => b.qs.filter(d=>d.status==='correct').length);
  const bTotals = bands.map(b => b.qs.length || 1);
  const maxTotal = Math.max(...bTotals);
  
  const bColors = bands.map((b, i) => {
    const pct = bScores[i] / bTotals[i];
    return pct >= 0.7 ? '#059669' : pct >= 0.4 ? '#d97706' : '#dc2626';
  });

  new Chart($('barChart'), {
    type:'bar',
    data:{ labels: bands.map(b=>b.label),
      datasets:[{ label:'Correct', data: bScores,
        backgroundColor: bColors.map(c=>c+'33'), borderColor: bColors,
        borderWidth:2, borderRadius:6 }] },
    options:{ plugins:{ legend:{display:false} },
      scales:{ y:{ max: Math.max(8, maxTotal), ticks:{ stepSize:1, font:{family:'IBM Plex Mono'} } },
        x:{ ticks:{ font:{family:'IBM Plex Sans', size:10} } } } }
  });
}

function downloadPDF() {
  const element = document.getElementById('resWrap');
  const actions = document.getElementById('resActions');
  
  // Hide actions temporarily so they don't appear in the PDF
  if (actions) actions.style.display = 'none';

  const opt = {
    margin:       [10, 10, 10, 10],
    filename:     `EduQuest_Report_${student.name.replace(/[^a-zA-Z0-9]/g, '_')}_Topic3.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    if (actions) actions.style.display = 'flex';
  }).catch(err => {
    console.error("PDF generation failed", err);
    if (actions) actions.style.display = 'flex';
  });
}
