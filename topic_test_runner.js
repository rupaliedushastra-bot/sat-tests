/**
 * Shared runner for Digital SAT Topic Tests.
 * Provides registration form, test player, timer, question navigator,
 * Supabase persistence, Chart.js analytics, and PDF report export.
 */
(function () {
  const cfg = window.TOPIC_CONFIG || {
    title: document.title || 'SAT Topic Test',
    icon: '📝',
    isMath: false,
    durationMinutes: 35
  };

  const LETTERS = ['A', 'B', 'C', 'D'];
  const $ = (id) => document.getElementById(id);

  let student = {};
  let answers = {};
  let currentQ = 0;
  let timerInt = null;
  let secsLeft = 0;
  let lastResultObj = null;

  function renderMath(elements) {
    if (typeof window !== 'undefined' && window.MathJax && typeof MathJax.typesetPromise === 'function') {
      const targets = Array.isArray(elements)
        ? elements.filter(Boolean)
        : (elements ? [elements] : [document.body]);
      if (targets.length > 0) {
        MathJax.typesetPromise(targets).catch((err) => console.warn('MathJax warning:', err));
      }
    }
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function getQuestionImage(q) {
    if (!q) return '';
    if (q.image) return q.image;
    if (q.useImage && q.imageKey) return `assets/images/${q.imageKey}.png`;
    return '';
  }

  function customAlert(msg) {
    if ($('alertMsg') && $('alertBg')) {
      $('alertMsg').textContent = msg;
      $('alertBg').classList.add('open');
    } else {
      alert(msg);
    }
  }

  function showPage(id) {
    document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
    const target = $(id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startTest() {
    if (typeof QUESTIONS === 'undefined' || !Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
      customAlert('Questions could not be loaded for this test.');
      return;
    }

    const name = ($('regName')?.value || '').trim();
    const email = ($('regEmail')?.value || '').trim();
    const phoneVal = ($('regPhone')?.value || '').trim();
    const cc = $('regCC') ? $('regCC').value : '';
    const phone = phoneVal ? `${cc} ${phoneVal}`.trim() : '';

    if (!name || name.length < 2) {
      customAlert('Please enter a valid full name (at least 2 characters).');
      $('regName')?.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      customAlert('Please enter a valid email address.');
      $('regEmail')?.focus();
      return;
    }

    if (phoneVal && !/^\d{7,15}$/.test(phoneVal.replace(/[- ]/g, ''))) {
      customAlert('Please enter a valid phone number (7-15 digits).');
      $('regPhone')?.focus();
      return;
    }

    student = { name, email, phone };

    if (typeof saveRegistration === 'function') {
      saveRegistration(student, cfg.title).catch((err) => console.warn('Registration save warning:', err));
    }

    showPage('pageTest');
    buildPalette();
    renderQ();
    startTimer((cfg.durationMinutes || 35) * 60);
    if ($('timerBox')) $('timerBox').style.display = 'flex';
  }

  function startTimer(seconds) {
    secsLeft = seconds;
    paintTimer();
    if (timerInt) clearInterval(timerInt);
    timerInt = setInterval(() => {
      secsLeft--;
      paintTimer();
      if (secsLeft <= 300 && $('timerBox')) $('timerBox').classList.add('warn');
      if (secsLeft <= 0) {
        clearInterval(timerInt);
        doSubmit();
      }
    }, 1000);
  }

  function paintTimer() {
    const m = String(Math.floor(secsLeft / 60)).padStart(2, '0');
    const s = String(secsLeft % 60).padStart(2, '0');
    if ($('timerDisplay')) $('timerDisplay').textContent = `${m}:${s}`;
  }

  function renderQ() {
    const q = QUESTIONS[currentQ];
    if (!q) return;

    const qId = q.id || (currentQ + 1);
    if ($('qBadge')) $('qBadge').textContent = `Q ${qId}`;
    if ($('qTopicTag')) $('qTopicTag').textContent = q.topic || cfg.title;
    if ($('modProgress')) $('modProgress').textContent = `Q ${currentQ + 1} of ${QUESTIONS.length}`;
    if ($('btnPrev')) $('btnPrev').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
    if ($('btnNext')) $('btnNext').textContent = currentQ < QUESTIONS.length - 1 ? 'Next →' : '🏁 Submit';

    const imgSrc = getQuestionImage(q);
    const qTextEl = $('qText');
    if (qTextEl) {
      qTextEl.innerHTML = (imgSrc
        ? `<div style="text-align:center;margin-bottom:16px;"><img src="${imgSrc}" alt="Question Diagram" style="max-width:100%;max-height:360px;object-fit:contain;border-radius:8px;border:1px solid #e2e8f0;"></div>`
        : '') + escapeHtml(q.text || '');
    }

    const opts = $('qOpts');
    if (opts) {
      opts.innerHTML = '';
      (q.options || []).forEach((txt, i) => {
        const d = document.createElement('div');
        d.className = 'opt' + (answers[qId] === i ? ' selected' : '');
        d.onclick = () => {
          answers[qId] = i;
          renderQ();
        };
        d.innerHTML = `<div class="opt-letter">${LETTERS[i] || (i + 1)}</div><div class="opt-text">${escapeHtml(txt)}</div>`;
        opts.appendChild(d);
      });
    }

    updatePalette();
    updateProg();
    renderMath([$('qText'), $('qOpts')]);
  }

  function prevQ() {
    if (currentQ > 0) {
      currentQ--;
      renderQ();
    }
  }

  function nextQ() {
    if (currentQ < QUESTIONS.length - 1) {
      currentQ++;
      renderQ();
    } else {
      confirmSubmit();
    }
  }

  function buildPalette() {
    const g = $('palette');
    if (!g) return;
    g.innerHTML = '';
    QUESTIONS.forEach((q, i) => {
      const qId = q.id || (i + 1);
      const b = document.createElement('button');
      b.id = `pb${i}`;
      b.className = 'pb';
      b.textContent = qId;
      b.onclick = () => {
        currentQ = i;
        renderQ();
      };
      g.appendChild(b);
    });
  }

  function updatePalette() {
    QUESTIONS.forEach((q, i) => {
      const qId = q.id || (i + 1);
      const b = $(`pb${i}`);
      if (!b) return;
      b.className = 'pb' +
        (answers[qId] !== undefined ? ' done' : '') +
        (i === currentQ ? ' cur' : '');
    });
  }

  function updateProg() {
    const done = Object.keys(answers).length;
    const pct = QUESTIONS.length > 0 ? Math.round((done / QUESTIONS.length) * 100) : 0;
    if ($('progFill')) $('progFill').style.width = `${pct}%`;
    if ($('progLbl')) $('progLbl').textContent = `${done} / ${QUESTIONS.length} answered`;
  }

  function confirmSubmit() {
    const skip = QUESTIONS.length - Object.keys(answers).length;
    if ($('modalMsg')) {
      $('modalMsg').textContent = skip > 0
        ? `You have ${skip} unanswered question${skip > 1 ? 's' : ''}. Submit anyway?`
        : 'Submit your test? This cannot be undone.';
    }
    $('modalBg')?.classList.add('open');
  }

  function closeModal() {
    $('modalBg')?.classList.remove('open');
  }

  async function doSubmit() {
    clearInterval(timerInt);
    closeModal();

    if ($('savingOverlay')) $('savingOverlay').classList.add('show');
    if ($('savingMsg')) $('savingMsg').textContent = 'Saving your result to database...';

    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    const details = QUESTIONS.map((q, i) => {
      const qId = q.id || (i + 1);
      const chosen = answers[qId];
      let status;
      if (chosen === undefined) {
        unattempted++;
        status = 'unattempted';
      } else if (chosen === q.answer) {
        correct++;
        status = 'correct';
      } else {
        wrong++;
        status = 'wrong';
      }
      return { ...q, id: qId, chosen, status };
    });

    const total = QUESTIONS.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : 'D';
    const scaled = total > 0 ? Math.round(200 + (correct / total) * 600) : 200;

    const result = {
      student,
      examName: cfg.title,
      topic: cfg.title,
      correct,
      wrong,
      unattempted,
      total,
      pct,
      grade,
      scaled,
      details,
      answers,
      submitTime: new Date().toISOString()
    };

    let saveResult = { ok: false };
    if (typeof saveToSupabase === 'function') {
      try {
        saveResult = await saveToSupabase(result);
      } catch (e) {
        console.warn('Supabase save warning:', e);
      }
    }

    if ($('savingOverlay')) $('savingOverlay').classList.remove('show');
    showPage('pageResult');
    if ($('timerBox')) $('timerBox').style.display = 'none';
    renderResults(result, saveResult);
  }

  function renderResults(result, saveRes) {
    lastResultObj = result;
    const { correct, wrong, unattempted, total, pct, grade, scaled, details } = result;
    const wrap = $('resWrap');
    if (!wrap) return;

    const scoreColor = pct >= 70 ? '#059669' : pct >= 50 ? '#d97706' : '#dc2626';
    const savedBadge = saveRes && saveRes.ok
      ? `<div class="saved-badge">✅ Result saved to database</div>`
      : '';

    wrap.innerHTML = `
      <div class="res-hero">
        <div style="font-size:0.8rem;opacity:.65;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;position:relative">${escapeHtml(cfg.title)}</div>
        <div class="sat-score" style="color:${scoreColor}">${scaled}</div>
        <div class="score-line">Section Score · ${correct} / ${total} correct (${pct}%) · Grade: ${grade}</div>
        <div class="score-sub">${escapeHtml(student.name)} &nbsp;·&nbsp; ${new Date(result.submitTime).toLocaleString()}</div>
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

      <div class="res-actions" style="margin-bottom:24px;">
        <button class="btn btn-primary" style="width:auto;" onclick="downloadPDFReport()">📄 Download PDF Report</button>
        <button class="btn btn-outline" onclick="window.location.reload()">🔄 Retake Test</button>
        <a class="btn btn-outline" href="../index.html" style="text-decoration:none;">← Back to Home</a>
      </div>

      <div class="q-review-section" style="margin-top:24px; text-align:left;">
        <h3 style="font-family:'Syne',sans-serif; font-size:1.1rem; font-weight:700; margin-bottom:16px; color:var(--ink2);">📋 Detailed Question Review (${details.length} questions)</h3>
        <div class="q-review-list">
          ${details.map((q, i) => {
            const statusText = q.status === 'correct'
              ? '✅ Correct'
              : q.status === 'wrong'
              ? '❌ Wrong'
              : '⏭ Skipped';
            const badgeStyle = q.status === 'correct'
              ? 'background:rgba(5,150,105,0.1);color:#059669;'
              : q.status === 'wrong'
              ? 'background:rgba(220,38,38,0.1);color:#dc2626;'
              : 'background:rgba(217,119,6,0.1);color:#d97706;';
            const imgSrc = getQuestionImage(q);

            return `
              <div class="q-card" style="background:#fff; border:1px solid var(--border); border-radius:12px; padding:20px; margin-bottom:16px; box-shadow:var(--shadow);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                  <span style="font-weight:700; font-size:0.95rem; font-family:'IBM Plex Mono',monospace;">Question ${q.id || (i + 1)}</span>
                  <span style="font-size:0.8rem; font-weight:600; padding:4px 10px; border-radius:20px; ${badgeStyle}">${statusText}</span>
                </div>
                ${imgSrc ? `<div style="text-align:center; margin-bottom:14px;"><img src="${imgSrc}" style="max-width:100%; max-height:320px; border-radius:8px; border:1px solid var(--border);" alt="Question Diagram" /></div>` : ''}
                ${q.text ? `<div style="font-size:0.92rem; line-height:1.6; color:var(--ink2); margin-bottom:14px; white-space:pre-wrap;">${escapeHtml(q.text)}</div>` : ''}
                ${q.options ? `
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
                        badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#059669;">✓ Correct</span>';
                      } else if (q.status === 'wrong' && optIdx === q.chosen) {
                        badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#dc2626;">✗ Your Choice</span>';
                      } else if (q.status === 'correct' && optIdx === q.chosen) {
                        badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#059669;">✓ Your Choice</span>';
                      }

                      return `
                        <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; font-size:0.88rem; ${optStyle}">
                          <div style="width:24px; height:24px; border-radius:50%; background:rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.78rem; flex-shrink:0;">${LETTERS[optIdx] || (optIdx + 1)}</div>
                          <div>${escapeHtml(optText)}</div>
                          ${badgeIcon}
                        </div>
                      `;
                    }).join('')}
                  </div>
                ` : ''}
                <div style="margin-top:12px; padding:12px 14px; background:rgba(124,58,237,0.05); border-left:3px solid var(--accent); border-radius:0 8px 8px 0; font-size:0.85rem; line-height:1.5; color:var(--ink2);">
                  <strong style="color:var(--accent); display:block; margin-bottom:4px;">💡 Explanation:</strong>
                  ${escapeHtml(q.explanation || 'No detailed explanation provided.')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    renderCharts(result);
    renderMath(wrap);
  }

  function renderCharts(result) {
    if (typeof Chart === 'undefined') return;
    try {
      const pieCanvas = $('pieChart');
      if (pieCanvas) {
        new Chart(pieCanvas, {
          type: 'doughnut',
          data: {
            labels: ['Correct', 'Wrong', 'Skipped'],
            datasets: [{
              data: [result.correct, result.wrong, result.unattempted],
              backgroundColor: ['#059669', '#dc2626', '#d97706'],
              borderWidth: 0
            }]
          },
          options: { plugins: { legend: { position: 'bottom' } }, cutout: '62%' }
        });
      }

      const barCanvas = $('barChart');
      if (barCanvas) {
        const topicMap = {};
        (result.details || []).forEach((d) => {
          const t = d.topic || cfg.title;
          if (!topicMap[t]) topicMap[t] = { ok: 0, tot: 0 };
          topicMap[t].tot++;
          if (d.status === 'correct') topicMap[t].ok++;
        });
        const labels = Object.keys(topicMap);
        const values = labels.map((k) => Math.round((topicMap[k].ok / topicMap[k].tot) * 100));
        new Chart(barCanvas, {
          type: 'bar',
          data: {
            labels,
            datasets: [{
              label: 'Accuracy %',
              data: values,
              backgroundColor: cfg.isMath ? '#059669' : '#7c3aed',
              borderRadius: 6
            }]
          },
          options: {
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: { legend: { display: false } }
          }
        });
      }
    } catch (e) {
      console.warn('Chart rendering skipped:', e);
    }
  }

  function downloadPDFReport() {
    if (!lastResultObj) return;
    if (typeof generatePDFReport === 'function') {
      generatePDFReport(lastResultObj, true);
    } else {
      window.print();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const ccSel = $('regCC');
    if (ccSel && typeof COUNTRY_CODES !== 'undefined' && Array.isArray(COUNTRY_CODES)) {
      ccSel.innerHTML = '';
      COUNTRY_CODES.forEach((c) => {
        const opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = `${c.iso} (${c.code})`;
        if (c.code === '+91') opt.selected = true;
        ccSel.appendChild(opt);
      });
    }

    try {
      const custom = localStorage.getItem('eduquest_custom_session');
      if (custom) {
        const parsed = JSON.parse(custom);
        if (parsed?.user?.email && $('regEmail') && !$('regEmail').value) {
          $('regEmail').value = parsed.user.email;
        }
        const fullName = parsed?.user?.user_metadata?.full_name || parsed?.user?.user_metadata?.name;
        if (fullName && $('regName') && !$('regName').value) {
          $('regName').value = fullName;
        }
      }
    } catch (e) {}
  });

  window.startTest = startTest;
  window.prevQ = prevQ;
  window.nextQ = nextQ;
  window.confirmSubmit = confirmSubmit;
  window.closeModal = closeModal;
  window.doSubmit = doSubmit;
  window.downloadPDFReport = downloadPDFReport;
})();
