// =============================================
// Digital SAT Topic Practice
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Question 1 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 2,
    "text": "Question 2 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 3,
    "text": "Question 3 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 4,
    "text": "Question 4 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 5,
    "text": "Question 5 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 6,
    "text": "Question 6 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 7,
    "text": "Question 7 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 8,
    "text": "Question 8 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 9,
    "text": "Question 9 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 10,
    "text": "Question 10 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 11,
    "text": "Question 11 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 12,
    "text": "Question 12 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 13,
    "text": "Question 13 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 14,
    "text": "Question 14 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 15,
    "text": "Question 15 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 16,
    "text": "Question 16 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 17,
    "text": "Question 17 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 18,
    "text": "Question 18 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 19,
    "text": "Question 19 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 20,
    "text": "Question 20 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 21,
    "text": "Question 21 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 22,
    "text": "Question 22 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 23,
    "text": "Question 23 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 24,
    "text": "Question 24 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  },
  {
    "id": 25,
    "text": "Question 25 — Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Exponents & Square Roots"
  }
];

const TOPIC_MAP = {
  'Exponents & Square Roots': {
    name: 'Exponents & Square Roots',
    questions: QUESTIONS.map(q => q.id)
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
