// =============================================
// Digital SAT – Topic Test: Linear Algebra (Heart of Algebra)
// 25 Questions | Single Timed Module (35 min)
// answers: 0=A, 1=B, 2=C, 3=D
// Sourced from Comprehensive Digital SAT Study Guide (Practice Tests)
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "If x + 2 = 7, what is the value of x?",
    "options": [
      "3",
      "5",
      "7",
      "9"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Subtract 2 from both sides: x + 2 − 2 = 7 − 2, so x = 5. A) Incorrect; misunderstanding the operation needed. C) Incorrect; assuming x equals the total sum. D) Incorrect; arbitrary value.",
    "topic": "Linear Equations"
  },
  {
    "id": 2,
    "text": "If 4x − 5 = 3, what is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Add 5 to both sides: 4x = 8. Divide by 4: x = 2. A) Incorrect; incorrect division. C) Incorrect; misunderstanding operations. D) Incorrect; arbitrary value.",
    "topic": "Linear Equations"
  },
  {
    "id": 3,
    "text": "If 3x + 5 = 20, what is the value of x?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5. A) Incorrect; arithmetic error in division. B) Incorrect; arithmetic error. D) Incorrect; arbitrary value.",
    "topic": "Linear Equations"
  },
  {
    "id": 4,
    "text": "Solve for x: 5x − 2 = 3x + 4",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Subtract 3x from both sides: 2x − 2 = 4. Add 2 to both sides: 2x = 6. Divide by 2: x = 3. A) Incorrect; error in subtraction step. B) Incorrect; mistake in addition. D) Incorrect; misstep in solving.",
    "topic": "Linear Equations"
  },
  {
    "id": 5,
    "text": "Solve for x in the equation 5x − 7 = 3x + 5.",
    "options": [
      "-6",
      "-1",
      "1",
      "6"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Subtract 3x from both sides: 2x − 7 = 5. Add 7 to both sides: 2x = 12. Divide by 2: x = 6. A) Incorrect; incorrect subtraction. B) Incorrect; misunderstanding the equation. C) Incorrect; error in algebraic steps.",
    "topic": "Linear Equations"
  },
  {
    "id": 6,
    "text": "If 3x − 4 = 2x + 5, what is the value of x?",
    "options": [
      "1",
      "5",
      "9",
      "-1"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Subtract 2x from both sides: x − 4 = 5. Add 4 to both sides: x = 9. A) Incorrect; incorrect subtraction. B) Incorrect; misunderstanding the algebraic steps. D) Incorrect; calculation error.",
    "topic": "Linear Equations"
  },
  {
    "id": 7,
    "text": "Solve for x in the equation 4(x − 2) = 12.",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Distribute 4: 4x − 8 = 12. Add 8 to both sides: 4x = 20. Divide by 4: x = 5. A) Incorrect; miscalculation in distribution. B) Incorrect; mistake in addition. C) Incorrect; misunderstanding in division.",
    "topic": "Linear Equations with Distribution"
  },
  {
    "id": 8,
    "text": "What is the solution to 3(2x − 1) = 18?",
    "options": [
      "2",
      "3",
      "3.5",
      "5"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Distribute the 3: 6x − 3 = 18. Add 3 to both sides: 6x = 21. Divide by 6: x = 21/6 = 3.5. A) Incorrect; mistake in distributing. B) Incorrect; error in adding step. D) Incorrect; misunderstanding division.",
    "topic": "Linear Equations with Distribution"
  },
  {
    "id": 9,
    "text": "If 2(x − 4) + 3 = 5, what is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Distribute: 2x − 8 + 3 = 5. Combine like terms: 2x − 5 = 5. Add 5 to both sides: 2x = 10. Divide by 2: x = 5. A) Incorrect; mistake in combining terms. B) Incorrect; incorrect distribution. C) Incorrect; error in solving for x.",
    "topic": "Linear Equations with Distribution"
  },
  {
    "id": 10,
    "text": "If 3(x − 2) = 2x + 5, what is the value of x?",
    "options": [
      "-11",
      "-7",
      "7",
      "11"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Distribute the 3: 3x − 6 = 2x + 5. Subtract 2x from both sides: x − 6 = 5. Add 6 to both sides: x = 11. A) Incorrect; mistake in distribution. B) Incorrect; incorrect subtraction. C) Incorrect; misunderstanding the algebraic steps.",
    "topic": "Linear Equations with Distribution"
  },
  {
    "id": 11,
    "text": "Which of the following is equivalent to 2(x + 5)?",
    "options": [
      "2x + 10",
      "2x + 5",
      "2x + 25",
      "x + 10"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Use the distributive property: 2(x + 5) = 2·x + 2·5 = 2x + 10. B) Incorrect; fails to distribute to both terms. C) Incorrect; multiplies the wrong terms. D) Incorrect; only partially distributes the terms.",
    "topic": "Distributive Property"
  },
  {
    "id": 12,
    "text": "Solve for y in the equation 7y − 9 = 12.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Add 9 to both sides: 7y = 21. Divide by 7: y = 3. A) Incorrect; mistake in addition. B) Incorrect; error in division. D) Incorrect; wrong arithmetic.",
    "topic": "Linear Equations"
  },
  {
    "id": 13,
    "text": "Solve for y in the equation 5y + 2 = 17.",
    "options": [
      "2",
      "3",
      "5",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Subtract 2 from both sides: 5y = 15. Divide by 5: y = 3. A) Incorrect; misunderstanding subtraction. C) Incorrect; mistake in division. D) Incorrect; unrelated result.",
    "topic": "Linear Equations"
  },
  {
    "id": 14,
    "text": "Solve for y in the equation 2y + 3 = 11.",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Subtract 3 from both sides: 2y = 8. Divide by 2: y = 4. A) Incorrect; arithmetic error. C) Incorrect; arithmetic error. D) Incorrect; arbitrary value.",
    "topic": "Linear Equations"
  },
  {
    "id": 15,
    "text": "Solve for x in the equation 3x − 7 = 2.",
    "options": [
      "1",
      "3",
      "5",
      "9"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Add 7 to both sides: 3x = 9. Divide by 3: x = 3. A) Incorrect; arithmetic error. C) Incorrect; arithmetic error. D) Incorrect; arbitrary value.",
    "topic": "Linear Equations"
  },
  {
    "id": 16,
    "text": "If y = 3x + 4 and y = 10, what is the value of x?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Set y equal to 10 and solve for x: 10 = 3x + 4. Subtract 4: 6 = 3x. Divide by 3: x = 2. B) Incorrect; miscalculation in solving. C) Incorrect; result from wrong steps. D) Incorrect; unrelated to the equation.",
    "topic": "Linear Equations & Substitution"
  },
  {
    "id": 17,
    "text": "If x + y = 10 and y = 6, what is the value of x?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute 6 for y in the equation: x + 6 = 10. Subtract 6 from both sides: x = 4. A) Incorrect; mistake in subtraction. C) Incorrect; misunderstanding addition. D) Incorrect; incorrect subtraction.",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 18,
    "text": "If x + y = 10 and x − y = 6, what are the values of x and y?",
    "options": [
      "x = 7, y = 3",
      "x = 8, y = 2",
      "x = 9, y = 1",
      "x = 6, y = 4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Add the two equations: (x + y) + (x − y) = 10 + 6, so 2x = 16, giving x = 8. Substitute into x + y = 10 to get y = 2. A), C), D) Incorrect; do not satisfy both equations simultaneously.",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 19,
    "text": "What is the solution to the system of equations: x + y = 5 and x − y = 1?",
    "options": [
      "x = 2, y = 3",
      "x = 3, y = 2",
      "x = 4, y = 1",
      "x = 1, y = 4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Add the equations: (x + y) + (x − y) = 5 + 1, so 2x = 6, giving x = 3. Substitute into x + y = 5 to get y = 2. A), C), D) Incorrect; do not satisfy both equations.",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 20,
    "text": "What is the slope of the line that passes through the points (2, 3) and (4, 7)?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Use the slope formula: slope = (7 − 3) / (4 − 2) = 4/2 = 2. A) Incorrect; calculation error in the slope formula. C) Incorrect; possible misunderstanding of the points. D) Incorrect; miscalculated slope.",
    "topic": "Slope of a Line"
  },
  {
    "id": 21,
    "text": "What is the slope of the line that passes through the points (2, 3) and (5, 11)?",
    "options": [
      "8/3",
      "10/3",
      "14/3",
      "16/3"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Use the slope formula: slope = (11 − 3) / (5 − 2) = 8/3 ≈ 2.667. B), C), D) Incorrect; arithmetic errors when computing the rise or run.",
    "topic": "Slope of a Line"
  },
  {
    "id": 22,
    "text": "What is the slope of the line that passes through the points (1, 2) and (3, 6)?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Use the slope formula: slope = (6 − 2) / (3 − 1) = 4/2 = 2. A) Incorrect; arithmetic error. C) Incorrect; arithmetic error. D) Incorrect; uses the rise without dividing by the run.",
    "topic": "Slope of a Line"
  },
  {
    "id": 23,
    "text": "What is the slope of the line y = 3x − 4?",
    "options": [
      "-4",
      "-3",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In slope-intercept form y = mx + b, m is the slope. Here m = 3. A) Incorrect; confusing slope with y-intercept. B) Incorrect; incorrect sign for the slope. D) Incorrect; confusing with y-intercept.",
    "topic": "Linear Functions"
  },
  {
    "id": 24,
    "text": "If the equation of a line is y = 2x + 3, what is the y-intercept?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In the equation y = mx + b, b is the y-intercept. Here b = 3. A) Incorrect; confusing with another point. B) Incorrect; mistaking the slope for the intercept. D) Incorrect; misunderstanding the equation.",
    "topic": "Linear Functions"
  },
  {
    "id": 25,
    "text": "What is the solution to the inequality 2x − 3 > 1?",
    "options": [
      "x > 2",
      "x > 3",
      "x > 4",
      "x > 5"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Add 3 to both sides: 2x > 4. Divide both sides by 2: x > 2. B) Incorrect; misunderstanding the inequality. C) Incorrect; incorrect steps in solving. D) Incorrect; wrong arithmetic.",
    "topic": "Linear Inequalities"
  }
];
