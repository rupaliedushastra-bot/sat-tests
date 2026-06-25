// =============================================
// SAT Math – Topic Test: Exponents & Square Roots
// 16 Questions | Single Timed Module
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Question 1 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 2 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 3 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 4 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 5 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 6 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 7 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 8 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 9 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 10 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 11 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 12 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 13 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 14 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 15 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
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
    "text": "Question 16 \u2014 Exponents & Square Roots\n\nRefer to the question image below. Select the correct answer.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. See the solution image for detailed working.",
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
