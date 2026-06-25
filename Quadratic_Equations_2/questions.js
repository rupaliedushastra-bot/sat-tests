// =============================================
// Digital SAT Topic Practice
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Question 1 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 2,
    "text": "Question 2 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 3,
    "text": "Question 3 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 4,
    "text": "Question 4 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 5,
    "text": "Question 5 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 6,
    "text": "Question 6 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 7,
    "text": "Question 7 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 8,
    "text": "Question 8 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 9,
    "text": "Question 9 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 10,
    "text": "Question 10 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 11,
    "text": "Question 11 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 12,
    "text": "Question 12 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 13,
    "text": "Question 13 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 14,
    "text": "Question 14 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 15,
    "text": "Question 15 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 16,
    "text": "Question 16 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 17,
    "text": "Question 17 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 18,
    "text": "Question 18 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 19,
    "text": "Question 19 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 20,
    "text": "Question 20 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 21,
    "text": "Question 21 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 22,
    "text": "Question 22 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 23,
    "text": "Question 23 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 24,
    "text": "Question 24 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  },
  {
    "id": 25,
    "text": "Question 25 — Quadratic Equations (Set 2)\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations (Set 2)"
  }
];

const TOPIC_MAP = {
  'Quadratic Equations (Set 2)': {
    name: 'Quadratic Equations (Set 2)',
    questions: QUESTIONS.map(q => q.id)
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
