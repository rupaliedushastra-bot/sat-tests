// =============================================
// Digital SAT – Topic Test 9: Numbers & Operations
// 25 Questions | Single Timed Module (35 min)
// answers: 0=A, 1=B, 2=C, 3=D
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
    "topic": "Basic Operations"
  },
  {
    "id": 2,
    "text": "What is the value of 2a − 3b if a = 4 and b = 2?",
    "options": [
      "2",
      "5",
      "6",
      "10"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Substitute a = 4 and b = 2: 2(4) − 3(2) = 8 − 6 = 2. B) Incorrect; incorrect substitution or calculation. C) Incorrect; adding instead of subtracting. D) Incorrect; arbitrary value.",
    "topic": "Substitution & Evaluation"
  },
  {
    "id": 3,
    "text": "What is the value of 3² − 2³?",
    "options": [
      "1",
      "3",
      "5",
      "9"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Calculate 3² = 9 and 2³ = 8, then subtract: 9 − 8 = 1. B) Incorrect; misunderstanding exponentiation. C) Incorrect; incorrect subtraction. D) Incorrect; considering only one exponentiation.",
    "topic": "Exponents"
  },
  {
    "id": 4,
    "text": "If the average of three numbers is 15 and the first two numbers are 12 and 18, what is the third number?",
    "options": [
      "12",
      "15",
      "18",
      "20"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let the third number be x. (12 + 18 + x) / 3 = 15 → 30 + x = 45 → x = 15. A) Incorrect; misunderstanding average calculation. C) Incorrect; one of the given numbers but not the answer. D) Incorrect; arbitrary value.",
    "topic": "Averages"
  },
  {
    "id": 5,
    "useImage": true,
    "imageKey": "q65_frac_add",
    "text": "What is the value of 5/2 + 3/4?",
    "options": [
      "11/4",
      "13/4",
      "14/4",
      "15/4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Convert to common denominator: 5/2 = 10/4. Then 10/4 + 3/4 = 13/4. A) Incorrect; incorrect addition. C) Incorrect; incorrect numerator. D) Incorrect; misunderstanding fraction addition.",
    "topic": "Fractions"
  },
  {
    "id": 6,
    "text": "If 4x − 5 = 3, what is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Add 5 to both sides: 4x = 8. Divide by 4: x = 2. A) Incorrect; incorrect division. C) Incorrect; misunderstanding operations. D) Incorrect; arbitrary value.",
    "topic": "Basic Operations"
  },
  {
    "id": 7,
    "useImage": true,
    "imageKey": "q71_frac_mul",
    "text": "What is the value of (2/3) × (3/4)?",
    "options": [
      "1/2",
      "1/3",
      "1/4",
      "1/6"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Multiply numerators and denominators: (2×3)/(3×4) = 6/12 = 1/2. B) Incorrect; incorrect multiplication. C) Incorrect; misunderstanding fraction multiplication. D) Incorrect; arbitrary value.",
    "topic": "Fractions"
  },
  {
    "id": 8,
    "text": "What is the value of 7 − 2(3 − 1)?",
    "options": [
      "1",
      "3",
      "5",
      "9"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Apply order of operations: solve inside parentheses first: 3 − 1 = 2. Then multiply: 2 × 2 = 4. Finally subtract: 7 − 4 = 3. A) Incorrect; incorrect order of operations. C) Incorrect; misunderstanding the expression. D) Incorrect; misunderstanding subtraction.",
    "topic": "Order of Operations"
  },
  {
    "id": 9,
    "useImage": true,
    "imageKey": "q74_fraction_expr",
    "text": "If y = (x + 2) / 3, what is the value of y when x = 4?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Substitute x = 4: y = (4 + 2) / 3 = 6/3 = 2. B) Incorrect; incorrect substitution. C) Incorrect; misunderstanding the equation. D) Incorrect; arbitrary value.",
    "topic": "Substitution & Evaluation"
  },
  {
    "id": 10,
    "text": "A car travels 60 miles in 1.5 hours. What is the average speed of the car in miles per hour?",
    "options": [
      "40",
      "45",
      "50",
      "60"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Speed = Distance ÷ Time = 60 ÷ 1.5 = 40 miles per hour. B) Incorrect; incorrect division. C) Incorrect; misunderstanding the division process. D) Incorrect; arbitrary value.",
    "topic": "Rates & Ratios"
  },
  {
    "id": 11,
    "text": "If f(x) = 2x + 3, what is f(4)?",
    "options": [
      "5",
      "8",
      "10",
      "11"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Substitute x = 4: f(4) = 2(4) + 3 = 8 + 3 = 11. A) Incorrect; incorrect substitution. B) Incorrect; forgetting to add 3. C) Incorrect; misunderstanding the function.",
    "topic": "Substitution & Evaluation"
  },
  {
    "id": 12,
    "text": "Solve for x in the equation 3x − 7 = 2.",
    "options": [
      "1",
      "3",
      "5",
      "9"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Add 7 to both sides: 3x = 9. Divide by 3: x = 3. A) Incorrect; misunderstanding operations. C) Incorrect; incorrect operations. D) Incorrect; arbitrary value.",
    "topic": "Basic Operations"
  },
  {
    "id": 13,
    "useImage": true,
    "imageKey": "q78_sqrt",
    "text": "What is the value of √81?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The square root of 81 is 9, since 9 × 9 = 81. A) Incorrect; not the square root of 81. B) Incorrect; misunderstanding square root. D) Incorrect; arbitrary value.",
    "topic": "Roots & Radicals"
  },
  {
    "id": 14,
    "text": "If x + y = 10 and x − y = 6, what are the values of x and y?",
    "options": [
      "x = 7, y = 3",
      "x = 8, y = 2",
      "x = 9, y = 1",
      "x = 6, y = 4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Add the equations: 2x = 16, so x = 8. Substitute back: 8 + y = 10, so y = 2. A) Incorrect; incorrect addition. C) Incorrect; misunderstanding the solution process. D) Incorrect; arbitrary values.",
    "topic": "Systems of Equations"
  },
  {
    "id": 15,
    "useImage": true,
    "imageKey": "q80_frac_div",
    "text": "What is the value of (4/5) ÷ (2/3)?",
    "options": [
      "5/6",
      "6/5",
      "8/15",
      "15/8"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. To divide fractions, multiply by the reciprocal: 4/5 × 3/2 = 12/10 = 6/5. A) Incorrect; incorrect multiplication. C) Incorrect; multiplying instead of using reciprocal. D) Incorrect; misunderstanding the reciprocal process.",
    "topic": "Fractions"
  },
  {
    "id": 16,
    "text": "If a = 3 and b = 4, what is a² − b²?",
    "options": [
      "-7",
      "7",
      "-25",
      "25"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Substitute: a² − b² = 3² − 4² = 9 − 16 = −7. B) Incorrect; misunderstanding operations. C) Incorrect; misunderstanding the negative sign. D) Incorrect; misunderstanding subtraction.",
    "topic": "Exponents"
  },
  {
    "id": 17,
    "useImage": true,
    "imageKey": "q82_expr",
    "text": "What is the value of (7 + 5) / 3?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Simplify the numerator first: 7 + 5 = 12. Then divide: 12 / 3 = 4. A) Incorrect; incorrect addition or division. C) Incorrect; misunderstanding the calculation. D) Incorrect; arbitrary value.",
    "topic": "Order of Operations"
  },
  {
    "id": 18,
    "text": "What is the perimeter of a square with side length 5 units?",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Perimeter of a square = 4 × side = 4 × 5 = 20. A) Incorrect; multiplied by 2 instead of 4. B) Incorrect; multiplied by 3. D) Incorrect; calculated area instead.",
    "topic": "Measurement"
  },
  {
    "id": 19,
    "text": "A store sells apples for $1 each and oranges for $1.50 each. If a customer buys 3 apples and 4 oranges, how much does the customer spend in total?",
    "options": [
      "$7.50",
      "$8.00",
      "$9.00",
      "$10.50"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Cost of apples: 3 × $1 = $3. Cost of oranges: 4 × $1.50 = $6. Total = $3 + $6 = $9. A) Incorrect; incorrect multiplication. B) Incorrect; arithmetic error. D) Incorrect; overcounting.",
    "topic": "Word Problems"
  },
  {
    "id": 20,
    "text": "If x² = 49, what are the possible values of x?",
    "options": [
      "7 only",
      "−7 only",
      "7 and −7",
      "0"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Taking the square root of both sides: x = ±√49 = ±7. Both 7 and −7 are valid since both squared give 49. A) Incorrect; only one of two values. B) Incorrect; only one of two values. D) Incorrect; 0² = 0, not 49.",
    "topic": "Roots & Radicals"
  },
  {
    "id": 21,
    "text": "If the area of a square is 81 square units, what is the length of one side?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Area = side². So side² = 81, meaning side = √81 = 9. A) Incorrect; misunderstanding square root. B) Incorrect; incorrect square root. D) Incorrect; arbitrary value.",
    "topic": "Roots & Radicals"
  },
  {
    "id": 22,
    "useImage": true,
    "imageKey": "q92_simplify",
    "text": "What is 8/12 in simplest form?",
    "options": [
      "1/2",
      "2/3",
      "3/4",
      "4/5"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The GCD of 8 and 12 is 4. Divide both by 4: 8/12 = (8÷4)/(12÷4) = 2/3. A) Incorrect; incorrect simplification. C) Incorrect; misunderstanding the GCD. D) Incorrect; arbitrary value.",
    "topic": "Fractions"
  },
  {
    "id": 23,
    "text": "What is the value of 5! (5 factorial)?",
    "options": [
      "20",
      "60",
      "100",
      "120"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 5! = 5 × 4 × 3 × 2 × 1 = 120. A) Incorrect; misunderstanding factorial. B) Incorrect; incorrect multiplication. C) Incorrect; arbitrary value.",
    "topic": "Number Theory"
  },
  {
    "id": 24,
    "text": "A right triangle has legs of lengths 3 and 4. What is the length of the hypotenuse?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Use the Pythagorean theorem: a² + b² = c². So 3² + 4² = c² → 9 + 16 = 25 = c² → c = 5. A) Incorrect; one of the legs. C) Incorrect; misunderstanding theorem. D) Incorrect; arbitrary value.",
    "topic": "Number Theory"
  },
  {
    "id": 25,
    "text": "If the circumference of a circle is 2πr and the radius is 5, what is the circumference?",
    "options": [
      "5π",
      "10π",
      "15π",
      "20π"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute r = 5: Circumference = 2π(5) = 10π. A) Incorrect; multiplied by 1 instead of 2. C) Incorrect; misunderstanding the formula. D) Incorrect; arbitrary value.",
    "topic": "Measurement"
  }
];

const TOPIC_MAP = {
  'Numbers & Operations': { name: 'Numbers & Operations', questions: QUESTIONS.map(q => q.id) }
};
