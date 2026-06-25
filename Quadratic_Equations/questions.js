// =============================================
// Digital SAT Topic Practice
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Question 1 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 2,
    "text": "Question 2 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 3,
    "text": "Question 3 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 4,
    "text": "Question 4 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 5,
    "text": "Question 5 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 6,
    "text": "Question 6 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 7,
    "text": "Question 7 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 8,
    "text": "Question 8 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 9,
    "text": "Question 9 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 10,
    "text": "Question 10 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 11,
    "text": "Question 11 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 12,
    "text": "Question 12 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 13,
    "text": "Question 13 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 14,
    "text": "Question 14 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 15,
    "text": "Question 15 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 16,
    "text": "Question 16 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 17,
    "text": "Question 17 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 18,
    "text": "Question 18 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 19,
    "text": "Question 19 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 20,
    "text": "Question 20 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 21,
    "text": "Question 21 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 22,
    "text": "Question 22 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 23,
    "text": "Question 23 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 24,
    "text": "Question 24 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 25,
    "text": "Question 25 — Quadratic Equations\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Quadratic Equations"
  }
];

const TOPIC_MAP = {
  'Quadratic Equations': {
    name: 'Quadratic Equations',
    questions: QUESTIONS.map(q => q.id)
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
