let currentQuestion = 0;
let userAnswers = new Array(QUESTIONS.length).fill(null);
let reviewMarked = new Array(QUESTIONS.length).fill(false);

const topicName = "Words In Context";

const qText = document.getElementById('question-text');
const optContainer = document.getElementById('options-container');
const currQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const gridBtn = document.getElementById('grid-btn');
const gridModal = document.getElementById('grid-modal');
const closeGrid = document.getElementById('close-grid');
const qGrid = document.getElementById('question-grid');
const markReviewBtn = document.getElementById('mark-review');

function initTest() {
  document.getElementById('total-q-num').textContent = QUESTIONS.length;
  loadQuestion(0);
  buildGrid();
  
  prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) { currentQuestion--; loadQuestion(currentQuestion); }
  });

  nextBtn.addEventListener('click', () => {
    if (currentQuestion < QUESTIONS.length - 1) { currentQuestion++; loadQuestion(currentQuestion); }
  });

  submitBtn.addEventListener('click', submitTest);

  gridBtn.addEventListener('click', () => { updateGrid(); gridModal.classList.add('active'); });
  closeGrid.addEventListener('click', () => { gridModal.classList.remove('active'); });

  markReviewBtn.addEventListener('click', () => {
    reviewMarked[currentQuestion] = !reviewMarked[currentQuestion];
    markReviewBtn.classList.toggle('active', reviewMarked[currentQuestion]);
    updateGrid();
  });
}

function loadQuestion(index) {
  const q = QUESTIONS[index];
  currQNum.textContent = index + 1;
  qText.innerHTML = q.text;
  optContainer.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = `option-btn ${userAnswers[index] === i ? 'selected' : ''}`;
    btn.innerHTML = `<span class="option-label">${labels[i]}</span> <span class="option-text">${opt}</span>`;
    btn.onclick = () => selectOption(i);
    optContainer.appendChild(btn);
  });
  prevBtn.disabled = index === 0;
  if (index === QUESTIONS.length - 1) { nextBtn.style.display = 'none'; submitBtn.style.display = 'block'; } 
  else { nextBtn.style.display = 'block'; submitBtn.style.display = 'none'; }
  markReviewBtn.classList.toggle('active', reviewMarked[index]);
}

function selectOption(optIndex) { userAnswers[currentQuestion] = optIndex; loadQuestion(currentQuestion); }

function buildGrid() {
  qGrid.innerHTML = '';
  for (let i = 0; i < QUESTIONS.length; i++) {
    const div = document.createElement('div');
    div.className = 'grid-item'; div.textContent = i + 1;
    div.onclick = () => { currentQuestion = i; loadQuestion(i); gridModal.classList.remove('active'); };
    qGrid.appendChild(div);
  }
  updateGrid();
}

function updateGrid() {
  const items = qGrid.children;
  for (let i = 0; i < QUESTIONS.length; i++) {
    items[i].className = 'grid-item';
    if (i === currentQuestion) items[i].classList.add('current');
    else if (userAnswers[i] !== null) items[i].classList.add('answered');
    if (reviewMarked[i]) items[i].classList.add('review');
  }
}

async function submitTest() {
  let score = 0;
  let wrong = 0;
  let unattempted = 0;
  const details = QUESTIONS.map((q, i) => {
    const chosen = userAnswers[i];
    const isCorrect = chosen === q.answer;
    if (isCorrect) score++;
    else if (chosen !== null && chosen !== undefined && chosen !== -1) wrong++;
    else unattempted++;
    return {
      id: q.id || (i + 1),
      status: isCorrect ? 'correct' : (chosen !== null && chosen !== undefined && chosen !== -1 ? 'wrong' : 'unattempted'),
      chosen: chosen !== null ? chosen : -1,
      answer: q.answer,
      text: q.question || q.text || '',
      options: q.options || q.choices || [],
      explanation: q.explanation || q.solution || ''
    };
  });
  const total = QUESTIONS.length;
  const pct = Math.round((score / total) * 100);

  const resultPayload = {
    examName: topicName,
    correct: score,
    wrong: wrong,
    unattempted: unattempted,
    total: total,
    pct: pct,
    scaled: pct + '%',
    submitTime: new Date().toISOString(),
    answers: userAnswers,
    details: details
  };

  if (typeof window !== 'undefined' && window._masterSaveToSupabase) {
    await window._masterSaveToSupabase(resultPayload);
  } else {
    const savedUrl = (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url) || localStorage.getItem('supabaseUrl') || '';
    const savedKey = (window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.anonKey) || localStorage.getItem('supabaseKey') || '';
    if (savedUrl && savedKey && window.supabase) {
      const client = window.supabase.createClient(savedUrl, savedKey);
      try {
        await client.from('sat_topic_report').insert([{
          topic: topicName, correct: score, wrong: wrong, unattempted: unattempted, total: total, pct: pct, submit_time: new Date().toISOString()
        }]);
      } catch (e) { console.error(e); }
    }
  }

  alert(`Test Submitted! You scored ${score} out of ${total}`);
  window.location.href = '../dashboard.html';
}

document.addEventListener('DOMContentLoaded', initTest);
