// =============================================
// Digital SAT Topic Practice
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Question 1 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 2,
    "text": "Question 2 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 3,
    "text": "Question 3 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 4,
    "text": "Question 4 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 5,
    "text": "Question 5 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 6,
    "text": "Question 6 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 7,
    "text": "Question 7 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 8,
    "text": "Question 8 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 9,
    "text": "Question 9 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 10,
    "text": "Question 10 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 11,
    "text": "Question 11 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 12,
    "text": "Question 12 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 13,
    "text": "Question 13 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 14,
    "text": "Question 14 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 15,
    "text": "Question 15 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 16,
    "text": "Question 16 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 17,
    "text": "Question 17 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 18,
    "text": "Question 18 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 19,
    "text": "Question 19 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 20,
    "text": "Question 20 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 21,
    "text": "Question 21 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 22,
    "text": "Question 22 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 23,
    "text": "Question 23 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 24,
    "text": "Question 24 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Polynomials"
  },
  {
    "id": 25,
    "text": "Question 25 — Polynomials\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Polynomials"
  }
];

const TOPIC_MAP = {
  'Polynomials': {
    name: 'Polynomials',
    questions: QUESTIONS.map(q => q.id)
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
