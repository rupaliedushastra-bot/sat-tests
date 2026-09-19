// =========================================================
// SAT Topic Test Runner Logic
// Digital SAT Format | EduQuest Practice Platform
// =========================================================

const topicName = "Inferences";
const TIMER_KEY = "eduquest_topic_timer_" + topicName;
const ANSWERS_KEY = "eduquest_topic_answers_" + topicName;
const REVIEW_KEY = "eduquest_topic_reviews_" + topicName;

let currentQuestion = 0;
let userAnswers = [];
let reviewMarked = [];
let timeRemaining = 35 * 60; // 35 minutes default
let timerInterval = null;
let isSubmitted = false;

// DOM Elements
let qText, optContainer, currQNum, totalQNum, prevBtn, nextBtn, submitBtn;
let gridBtn, gridModal, closeGrid, qGrid, markReviewBtn, timeLeftDisplay;

function initTest() {
  if (typeof QUESTIONS === 'undefined' || !Array.isArray(QUESTIONS) || QUESTIONS.length === 0) {
    console.error("QUESTIONS array not loaded or empty.");
    return;
  }

  qText = document.getElementById('question-text');
  optContainer = document.getElementById('options-container');
  currQNum = document.getElementById('current-q-num');
  totalQNum = document.getElementById('total-q-num');
  prevBtn = document.getElementById('prev-btn');
  nextBtn = document.getElementById('next-btn');
  submitBtn = document.getElementById('submit-btn');
  gridBtn = document.getElementById('grid-btn');
  gridModal = document.getElementById('grid-modal');
  closeGrid = document.getElementById('close-grid');
  qGrid = document.getElementById('question-grid');
  markReviewBtn = document.getElementById('mark-review');
  timeLeftDisplay = document.getElementById('time-left');

  totalQNum.textContent = QUESTIONS.length;

  // Restore State from sessionStorage if available
  try {
    const savedAnswers = sessionStorage.getItem(ANSWERS_KEY);
    userAnswers = savedAnswers ? JSON.parse(savedAnswers) : new Array(QUESTIONS.length).fill(null);
    if (!Array.isArray(userAnswers) || userAnswers.length !== QUESTIONS.length) {
      userAnswers = new Array(QUESTIONS.length).fill(null);
    }
  } catch (e) {
    userAnswers = new Array(QUESTIONS.length).fill(null);
  }

  try {
    const savedReview = sessionStorage.getItem(REVIEW_KEY);
    reviewMarked = savedReview ? JSON.parse(savedReview) : new Array(QUESTIONS.length).fill(false);
    if (!Array.isArray(reviewMarked) || reviewMarked.length !== QUESTIONS.length) {
      reviewMarked = new Array(QUESTIONS.length).fill(false);
    }
  } catch (e) {
    reviewMarked = new Array(QUESTIONS.length).fill(false);
  }

  loadQuestion(0);
  buildGrid();
  initTimer();

  // Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to submit your test?")) {
        submitTest();
      }
    });
  }

  if (gridBtn && gridModal) {
    gridBtn.addEventListener('click', () => {
      updateGrid();
      gridModal.classList.add('active');
    });
  }

  if (closeGrid && gridModal) {
    closeGrid.addEventListener('click', () => {
      gridModal.classList.remove('active');
    });
  }

  if (markReviewBtn) {
    markReviewBtn.addEventListener('click', () => {
      reviewMarked[currentQuestion] = !reviewMarked[currentQuestion];
      markReviewBtn.classList.toggle('active', reviewMarked[currentQuestion]);
      try {
        sessionStorage.setItem(REVIEW_KEY, JSON.stringify(reviewMarked));
      } catch (e) {}
      updateGrid();
    });
  }
}

function initTimer() {
  const savedTimer = sessionStorage.getItem(TIMER_KEY);
  if (savedTimer) {
    const parsed = parseInt(savedTimer, 10);
    if (!isNaN(parsed) && parsed > 0) {
      timeRemaining = parsed;
    }
  }

  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      sessionStorage.setItem(TIMER_KEY, timeRemaining.toString());
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      alert("Time is up! Submitting test now.");
      submitTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  if (!timeLeftDisplay) return;
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  timeLeftDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  const timerParent = timeLeftDisplay.closest('.timer');
  if (timerParent) {
    if (timeRemaining <= 300) {
      timerParent.classList.add('warn');
    } else {
      timerParent.classList.remove('warn');
    }
  }
}

function loadQuestion(index) {
  currentQuestion = index;
  const q = QUESTIONS[index];
  if (!q) return;

  currQNum.textContent = index + 1;
  qText.innerHTML = q.text;

  optContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  if (Array.isArray(q.options)) {
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `option-btn ${userAnswers[index] === i ? 'selected' : ''}`;
      btn.innerHTML = `<span class="option-label">${labels[i] || i + 1}</span> <span class="option-text">${opt}</span>`;
      btn.onclick = () => selectOption(i);
      optContainer.appendChild(btn);
    });
  }

  prevBtn.disabled = (index === 0);

  if (index === QUESTIONS.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    submitBtn.style.display = 'none';
  }

  markReviewBtn.classList.toggle('active', !!reviewMarked[index]);
}

function selectOption(optIndex) {
  userAnswers[currentQuestion] = optIndex;
  try {
    sessionStorage.setItem(ANSWERS_KEY, JSON.stringify(userAnswers));
  } catch (e) {}
  loadQuestion(currentQuestion);
}

function buildGrid() {
  if (!qGrid) return;
  qGrid.innerHTML = '';
  for (let i = 0; i < QUESTIONS.length; i++) {
    const div = document.createElement('div');
    div.className = 'grid-item';
    div.textContent = i + 1;
    div.onclick = () => {
      currentQuestion = i;
      loadQuestion(i);
      if (gridModal) gridModal.classList.remove('active');
    };
    qGrid.appendChild(div);
  }
  updateGrid();
}

function updateGrid() {
  if (!qGrid) return;
  const items = qGrid.children;
  for (let i = 0; i < QUESTIONS.length; i++) {
    if (!items[i]) continue;
    items[i].className = 'grid-item';
    if (i === currentQuestion) items[i].classList.add('current');
    else if (userAnswers[i] !== null && userAnswers[i] !== undefined) items[i].classList.add('answered');
    if (reviewMarked[i]) items[i].classList.add('review');
  }
}

async function submitTest() {
  if (isSubmitted) return;
  isSubmitted = true;
  if (timerInterval) clearInterval(timerInterval);

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  const details = QUESTIONS.map((q, i) => {
    const chosen = userAnswers[i];
    const isAttempted = chosen !== null && chosen !== undefined && chosen !== -1;
    const isCorrect = isAttempted && chosen === q.answer;
    
    if (isCorrect) correctCount++;
    else if (isAttempted) wrongCount++;
    else unattemptedCount++;

    return {
      id: q.id || i + 1,
      text: q.text,
      options: q.options || [],
      answer: q.answer,
      chosen: isAttempted ? chosen : null,
      status: isCorrect ? 'correct' : (isAttempted ? 'wrong' : 'unattempted'),
      explanation: q.explanation || ''
    };
  });

  const total = QUESTIONS.length;
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  // Retrieve user credentials
  let studentName = 'Student';
  let studentEmail = '';
  try {
    const storedUser = localStorage.getItem('eduquest_user') || localStorage.getItem('sat_user');
    if (storedUser) {
      const u = JSON.parse(storedUser);
      studentName = u.name || u.student_name || 'Student';
      studentEmail = u.email || u.student_email || '';
    }
  } catch (e) {}

  const resultPayload = {
    student: { name: studentName, email: studentEmail },
    examName: topicName,
    topic: topicName,
    score: correctCount,
    total: total,
    correct: correctCount,
    wrong: wrongCount,
    unattempted: unattemptedCount,
    pct: percentage,
    details: details,
    answers: userAnswers
  };

  // Save to Supabase using central wrapper
  try {
    if (typeof saveToSupabase === 'function') {
      await saveToSupabase(resultPayload);
    } else if (window.saveToSupabase && typeof window.saveToSupabase === 'function') {
      await window.saveToSupabase(resultPayload);
    }
  } catch (e) {
    console.warn("Could not save result to Supabase:", e);
  }

  // Clear session storage so future attempts are clean
  sessionStorage.removeItem(TIMER_KEY);
  sessionStorage.removeItem(ANSWERS_KEY);
  sessionStorage.removeItem(REVIEW_KEY);

  // Render complete report view
  renderReportView(resultPayload);
}

function renderReportView(res) {
  const container = document.querySelector('.test-container');
  if (!container) return;

  const letters = ['A', 'B', 'C', 'D'];
  const timerEl = document.querySelector('.timer');
  if (timerEl) timerEl.style.display = 'none';

  let qCards = res.details.map((d, i) => {
    const statusBadge = d.status === 'correct'
      ? '<span class="badge-status badge-correct">✓ Correct</span>'
      : d.status === 'wrong'
      ? '<span class="badge-status badge-wrong">✗ Incorrect</span>'
      : '<span class="badge-status badge-skipped">⏭ Skipped</span>';

    const optsHtml = d.options.map((opt, optIdx) => {
      let optStyle = "padding:10px 14px; border-radius:8px; border:1px solid #e2e8f0; margin-bottom:8px; display:flex; align-items:center; gap:10px; font-size:0.92rem;";
      let badge = "";

      if (optIdx === d.answer) {
        optStyle += "background:#f0fdf4; border-color:#22c55e; color:#15803d; font-weight:600;";
        badge = '<span style="margin-left:auto; color:#16a34a; font-weight:700;">✓ Correct Answer</span>';
      } else if (optIdx === d.chosen && d.status === 'wrong') {
        optStyle += "background:#fef2f2; border-color:#ef4444; color:#b91c1c; font-weight:600;";
        badge = '<span style="margin-left:auto; color:#dc2626; font-weight:700;">✗ Your Answer</span>';
      } else if (optIdx === d.chosen && d.status === 'correct') {
        badge = '<span style="margin-left:auto; color:#16a34a; font-weight:700;">✓ Your Answer</span>';
      } else {
        optStyle += "background:#ffffff; color:#334155;";
      }

      return `<div style="${optStyle}">
        <div style="width:24px; height:24px; border-radius:50%; background:rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem;">${letters[optIdx] || optIdx + 1}</div>
        <div>${opt}</div>
        ${badge}
      </div>`;
    }).join('');

    return `
      <div class="report-q-card">
        <div class="report-q-header">
          <strong style="font-family:var(--font-mono); color:var(--text-main);">Question ${i + 1}</strong>
          ${statusBadge}
        </div>
        <div style="margin-bottom:14px; color:#1e293b; line-height:1.65; white-space:pre-wrap;">${d.text}</div>
        <div style="margin-bottom:12px;">${optsHtml}</div>
        <div class="report-explanation">
          <strong style="display:block; margin-bottom:4px;">💡 Explanation:</strong>
          ${d.explanation || 'No detailed explanation provided.'}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="report-view">
      <div class="report-hero">
        <span style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); font-weight:700;">Performance Report</span>
        <h1>${res.topic}</h1>
        <div class="report-score-box">${res.score} / ${res.total}</div>
        <p style="color:var(--text-muted); font-size:1.05rem;">Accuracy: <strong>${res.pct}%</strong></p>
      </div>

      <div class="report-stats-grid">
        <div class="stat-box c-green">
          <div class="val">${res.correct}</div>
          <div class="lbl">Correct</div>
        </div>
        <div class="stat-box c-red">
          <div class="val">${res.wrong}</div>
          <div class="lbl">Incorrect</div>
        </div>
        <div class="stat-box c-amber">
          <div class="val">${res.unattempted}</div>
          <div class="lbl">Skipped</div>
        </div>
        <div class="stat-box c-blue">
          <div class="val">${res.pct}%</div>
          <div class="lbl">Score</div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <h2 style="font-size:1.25rem;">Question Breakdown & Solutions</h2>
        <div style="display:flex; gap:10px;">
          <button onclick="window.location.reload()" class="nav-btn">Retake Test</button>
          <a href="../dashboard.html" class="submit-btn" style="text-decoration:none; display:inline-block;">Go to Dashboard</a>
        </div>
      </div>

      <div class="report-q-list">
        ${qCards}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', initTest);
