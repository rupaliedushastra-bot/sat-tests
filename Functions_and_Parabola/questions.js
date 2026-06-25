// =============================================
// Digital SAT Topic Practice
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Question 1 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 2,
    "text": "Question 2 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 3,
    "text": "Question 3 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 4,
    "text": "Question 4 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 5,
    "text": "Question 5 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 6,
    "text": "Question 6 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 7,
    "text": "Question 7 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 8,
    "text": "Question 8 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 9,
    "text": "Question 9 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 10,
    "text": "Question 10 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 11,
    "text": "Question 11 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 12,
    "text": "Question 12 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 13,
    "text": "Question 13 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 14,
    "text": "Question 14 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 15,
    "text": "Question 15 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 16,
    "text": "Question 16 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 17,
    "text": "Question 17 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 18,
    "text": "Question 18 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 19,
    "text": "Question 19 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 20,
    "text": "Question 20 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 21,
    "text": "Question 21 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 22,
    "text": "Question 22 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 23,
    "text": "Question 23 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 24,
    "text": "Question 24 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  },
  {
    "id": 25,
    "text": "Question 25 — Functions & Parabola\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. See the solution image for detailed working.",
    "topic": "Functions & Parabola"
  }
];

const TOPIC_MAP = {
  'Functions & Parabola': {
    name: 'Functions & Parabola',
    questions: QUESTIONS.map(q => q.id)
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
