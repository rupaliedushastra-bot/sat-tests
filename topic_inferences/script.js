let currentQuestion = 0;
let userAnswers = new Array(QUESTIONS.length).fill(null);
let reviewMarked = new Array(QUESTIONS.length).fill(false);

const topicName = "Inferences";

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
  userAnswers.forEach((ans, i) => { if (ans === QUESTIONS[i].answer) score++; });
  const total = QUESTIONS.length;
  
  const savedUrl = localStorage.getItem('supabaseUrl') || '';
  const savedKey = localStorage.getItem('supabaseKey') || '';
  
  if (savedUrl && savedKey) {
    const client = supabase.createClient(savedUrl, savedKey);
    try {
      const { error } = await client.from('sat_topic_report').insert([{
        user_id: 'test_user_01', topic: topicName, score: score, total_questions: total
      }]);
      if (error) console.error(error);
    } catch (e) { console.error(e); }
  } else { console.warn("Supabase not configured in localStorage. Result not saved."); }
  
  alert(`Test Submitted! You scored ${score} out of ${total}`);
  window.location.href = '../dashboard.html';
}

document.addEventListener('DOMContentLoaded', initTest);
