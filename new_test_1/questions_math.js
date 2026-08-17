const QUESTIONS = [
  {
    "id": 1,
    "text": "If 𝑥 + 3 = 7, what is the value of 𝑥?",
    "options": [
      "3",
      "4",
      "-3",
      "-4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. To find 𝑥, subtract 3 from both sides of the equation:\n𝑥 + 3 – 3 = 7 − 3\n𝑥 = 4\nA) Incorrect; result of incorrect subtraction.\nC) Incorrect; possible misinterpretation of subtraction.\nD) Incorrect; does not match any logical step in the equation.",
    "topic": "Math"
  },
  {
    "id": 2,
    "text": "Which of the following is equivalent to 2(𝑥 + 5)?",
    "options": [
      "2𝑥 + 10",
      "2𝑥 + 5",
      "2𝑥 + 25",
      "𝑥 + 10"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Use the distributive property:\n2(𝑥 + 5) = 2 * 𝑥 + 2 * 5 = 2𝑥 + 10\nB) Incorrect; fails to distribute to both terms.\nC) Incorrect; multiplies the wrong terms.\nD) Incorrect; only partially distributes the terms.",
    "topic": "Math"
  },
  {
    "id": 3,
    "text": "If 𝑦 = 3𝑥 + 4 and 𝑦 = 10, what is the value of 𝑥?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Set 𝑦 equal to 10 and solve for 𝑥:\n10 = 3𝑥 + 4\nSubtract 4 from both sides:\n6 = 3𝑥\nDivide both sides by 3:\n𝑥 = 2\nB) Incorrect; miscalculation in solving.\nC) Incorrect; result from wrong steps.\nD) Incorrect; unrelated to the equation.",
    "topic": "Math"
  },
  {
    "id": 4,
    "text": "What is the slope of the line that passes through the points (2, 3) and (4, 7)?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Use the slope formula \nA) Incorrect; calculation error in the slope formula.\nC) Incorrect; possible misunderstanding of the points.\nD) Incorrect; miscalculated slope.",
    "topic": "Math"
  },
  {
    "id": 5,
    "text": "If 𝑎 = 2 and 𝑏 = 3, what is the value of 2𝑎 + 3𝑏?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Substitute the values into the expression:\n2(2) + 3(3) = 4 + 9 = 13\nA) Incorrect; mistake in arithmetic.\nB) Incorrect; misunderstanding the addition.\nC) Incorrect; miscalculated addition.",
    "topic": "Math"
  },
  {
    "id": 6,
    "text": "If \n, what is 𝑓(3)?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Substitute 3 into the function:\nA) Incorrect; error in squaring.\nB) Incorrect; result from incorrect addition.\nC) Incorrect; neglects adding 1.",
    "topic": "Math"
  },
  {
    "id": 7,
    "text": "Solve for 𝑥: 5𝑥 – 2 = 3𝑥 + 4",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. First, subtract 3𝑥 from both sides:\n5𝑥 − 3𝑥 – 2 = 4\n2𝑥 – 2 = 4\nAdd 2 to both sides:\n2𝑥 = 6\nDivide by 2:\n𝑥 = 3\nA) Incorrect; error in subtraction step.\nB) Incorrect; mistake in addition.\nD) Incorrect; misstep in solving.",
    "topic": "Math"
  },
  {
    "id": 8,
    "text": "What is the value of \n?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The square root of 49 is 7 because 72 = 49.\nA) Incorrect; not the square root of 49.\nB) Incorrect; also not the square root of 49.\nD) Incorrect; miscalculation of square root.",
    "topic": "Math"
  },
  {
    "id": 9,
    "text": "What is the greatest common divisor (GCD) of 24 and 36?",
    "options": [
      "4",
      "6",
      "8",
      "of 24 and 36?\nA) 4\nB) 6\nC) 8\nD) 12"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The GCD of 24 and 36 is the largest number that divides both without\nleaving a remainder. The divisors of 24 (1, 2, 3, 4, 6, 8, 12, 24) and 36 (1, 2,\n3, 4, 6, 9, 12, 18, 36) have 12 as the greatest common divisor.\nA) Incorrect; lower common divisor.\nB) Incorrect; common divisor but not greatest.\nC) Incorrect; divides 24 but not 36.",
    "topic": "Math"
  },
  {
    "id": 10,
    "text": "If a triangle has sides of lengths 3, 4, and 5, what is the triangle's area?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. This is a right triangle (3-4-5), and the area can be calculated as:\nArea = \nB) Incorrect; calculation error in area formula.\nC) Incorrect; also miscalculation.\nD) Incorrect; misunderstanding of formula.",
    "topic": "Math"
  },
  {
    "id": 11,
    "text": "If 3𝑥 – 7 = 11, what is the value of 𝑥?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. To solve for 𝑥, add 7 to both sides of the equation:\n3𝑥 – 7 + 7 = 11 + 7\n3𝑥 = 18\nThen, divide both sides by 3:\n𝑥 = \\frac{18}{3}\n𝑥 = 6\nA) Incorrect; result from incorrect addition.\nB) Incorrect; mistake in dividing step.\nD) Incorrect; unrelated calculation error.",
    "topic": "Math"
  },
  {
    "id": 12,
    "text": "If \n and 𝑥 = 4, what is the value of 𝑦?",
    "options": [
      "25",
      "29",
      "31",
      "35"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute 4 for 𝑥 in the equation:\n𝑦 = 2(4)2 − 3\n𝑦 = 2(16) − 3\n𝑦 = 32 − 3\n𝑦 = 29\nA) Incorrect; error in multiplication.\nC) Incorrect; mistake in subtraction step.\nD) Incorrect; unrelated calculation error.",
    "topic": "Math"
  },
  {
    "id": 13,
    "text": "A rectangle has a length of 8 and a width of 5. What is its perimeter?",
    "options": [
      "26",
      "30",
      "34",
      "40"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The perimeter of a rectangle is given by:\n2 × (length + width)\n2 × (8 + 5) = 2 × 13 = 26\nB) Incorrect; double the length.\nC) Incorrect; addition error.\nD) Incorrect; multiplying the length and width.",
    "topic": "Math"
  },
  {
    "id": 14,
    "text": "If the area of a circle is 16𝜋, what is the radius?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The area of a circle is given by 𝜋𝑟2. Setting this equal to 16𝜋:\n𝜋𝑟2 = 16𝜋\nDivide both sides by\n𝑟2 =16\nTaking the square root of both sides:\n𝑟 = 4\nA) Incorrect; misunderstanding the area formula.\nB) Incorrect; wrong square root.\nD) Incorrect; overestimating the radius.",
    "topic": "Math"
  },
  {
    "id": 15,
    "text": "Solve for 𝑥 in the equation 4(𝑥 − 2) = 12",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. First, distribute 4 to both terms inside the parentheses:\n4𝑥 – 8 = 12\nAdd 8 to both sides:\n4𝑥 = 20\nDivide both sides by 4:\n𝑥 = 5\nA) Incorrect; miscalculation in distribution.\nB) Incorrect; mistake in addition.\nC) Incorrect; misunderstanding in division.",
    "topic": "Math"
  },
  {
    "id": 16,
    "text": "What is the value of (1/2) ÷ (2/3)?",
    "options": [
      "1/3",
      "1/2",
      "3/4",
      "1"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Dividing fractions involves multiplying by the reciprocal of the divisor: (1/2) ÷ (2/3) = (1/2) × (3/2) = 3/4. Choices A, B, and D are incorrect arithmetic errors.",
    "topic": "Math"
  },
  {
    "id": 17,
    "text": "If 5𝑦 + 2 = 17, what is the value of 𝑦?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. First, subtract 2 from both sides:\n5𝑦 + 2 – 2 = 17 − 2\n5𝑦 = 15\nThen, divide both sides by 5:\n𝑦 = \\frac{15}{5}\n𝑦 = 3\nA) Incorrect; misunderstanding subtraction.\nC) Incorrect; mistake in division.\nD) Incorrect; unrelated result.",
    "topic": "Math"
  },
  {
    "id": 18,
    "text": "What is the value of 23 × 32?",
    "options": [
      "24",
      "36",
      "72",
      "108"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. First, calculate each exponent:\n23 = 8\n32 = 9\nThen, multiply the results:\n8 × 9 = 72\nA) Incorrect; adding exponents.\nB) Incorrect; incorrect multiplication.\nD) Incorrect; multiplying incorrectly.",
    "topic": "Math"
  },
  {
    "id": 19,
    "text": "If 𝑥 + 𝑦 = 10 and 𝑦 = 6, what is the value of 𝑥?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute 6 for 𝑦 in the equation:\n𝑥 + 6 = 10\nSubtract 6 from both sides:\n𝑥 = 10 − 6\n𝑥 = 4\nA) Incorrect; mistake in subtraction.\nC) Incorrect; misunderstanding addition.\nD) Incorrect; incorrect subtraction.",
    "topic": "Math"
  },
  {
    "id": 20,
    "text": "What is the solution to 3(2𝑥 − 1) = 18?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. First, distribute the 3:\n6𝑥 – 3 = 18\nAdd 3 to both sides:\n6𝑥 = 21\nDivide by 6:\n𝑥 = \\frac{21}{6} = 3.5\nA) Incorrect; mistake in distributing.\nB) Incorrect; error in adding step.\nD) Incorrect; misunderstanding division.",
    "topic": "Math"
  },
  {
    "id": 21,
    "text": "If 2(𝑥 − 4) + 3 = 5, what is the value of 𝑥?",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. First, simplify inside the parentheses:\n2(𝑥 − 4) + 3 = 5\n2𝑥 – 8 + 3 = 5\nCombine like terms:\n2𝑥 – 5 = 5\nAdd 5 to both sides:\n2𝑥 = 10\nDivide by 2:\n𝑥 = 5\nA) Incorrect; mistake in combining terms.\nB) Incorrect; incorrect distribution.\nC) Incorrect; error in solving for 𝑥.",
    "topic": "Math"
  },
  {
    "id": 22,
    "text": "What is the value of \n?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. First, find the square roots:\n= 7\n= 5\nThen, add them:\n7 + 5 = 12\nB) Incorrect; correct calculation but selecting wrong answer.\nC) Incorrect; adding wrong values.\nD) Incorrect; mistake in calculating square roots.",
    "topic": "Math"
  },
  {
    "id": 23,
    "text": "A rectangle has a length of 10 units and a width of 6 units. What is its area?",
    "options": [
      "60 square units",
      "80 square units",
      "100 square units",
      "120 square units"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The area of a rectangle is given by:\nArea = length × width\nArea = 10 × 6\nArea = 60 square units\nB) Incorrect; misunderstanding the formula.\nC) Incorrect; mistaking length and width multiplication.\nD) Incorrect; incorrect calculation.",
    "topic": "Math"
  },
  {
    "id": 24,
    "text": "Solve for 𝑦 in the equation 7𝑦 – 9 = 12.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. First, add 9 to both sides:\n7𝑦 – 9 + 9 = 12 + 9\n7𝑦 = 21\nDivide by 7:\n𝑦 = \\frac{21}{7}\n𝑦 = 3\nA) Incorrect; mistake in addition.\nB) Incorrect; error in division.\nD) Incorrect; wrong arithmetic.",
    "topic": "Math"
  },
  {
    "id": 25,
    "text": "What is the value of 52 − 42?",
    "options": [
      "9",
      "21",
      "25",
      "41"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. First, calculate each square:\n52 = 25\n42 = 16\nThen, subtract:\n25 – 16 = 9\nB) Incorrect; mistake in calculating squares.\nC) Incorrect; miscalculation.\nD) Incorrect; adding instead of subtracting.",
    "topic": "Math"
  },
  {
    "id": 26,
    "text": "If 𝑎 = 3 and 𝑏 = 4, what is the value of 𝑎2 + 𝑏2?",
    "options": [
      "12",
      "13",
      "25",
      "29"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. First, calculate each square:\n𝑎2 = 32 = 9\n𝑏2 = 42 = 16\nThen, add them:\n9 + 16 = 25\nA) Incorrect; incorrect addition.\nB) Incorrect; mistake in calculation.\nD) Incorrect; unrelated calculation.",
    "topic": "Math"
  },
  {
    "id": 27,
    "text": "If the perimeter of a square is 20, what is the length of one side?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The perimeter of a square is given by:\n4 × side length\nSet up the equation:\n4 × side length = 20\nDivide by 4:\nside length = \\frac{20}{4} = 5\nA) Incorrect; misunderstanding the perimeter formula.\nC) Incorrect; wrong arithmetic.\nD) Incorrect; unrelated result.",
    "topic": "Math"
  },
  {
    "id": 28,
    "text": "What is the slope of the line passing through the points (2,3) and (4,7)?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The slope of a line is given by:\nSubstitute the points:\nA) Incorrect; mistake in subtraction.\nC) Incorrect; misunderstanding the formula.\nD) Incorrect; error in calculation.",
    "topic": "Math"
  },
  {
    "id": 29,
    "text": "Solve for 𝑥 in the equation 𝑥2 − 4𝑥 – 5 = 0.",
    "options": [
      "-5, 1",
      "-1, 5",
      "1, 5",
      "-5, -1"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Factor the quadratic equation:\n(𝑥 − 5)(𝑥 + 1) = 0\nSet each factor to zero:\n𝑥 – 5 = 0 or 𝑥 + 1 = 0\n𝑥 = 5 or 𝑥 = −1\nA) Incorrect; misunderstanding factoring.\nC) Incorrect; incorrect signs.\nD) Incorrect; incorrect signs and factors.",
    "topic": "Math"
  },
  {
    "id": 30,
    "text": "If 3𝑎 + 4𝑏 = 12 and 𝑎 = 2, what is the value of 𝑏?",
    "options": [
      "1.5",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Substitute a = 2 into the equation:\n3(2) + 4b = 12\n6 + 4b = 12\nSubtract 6 from both sides:\n4b = 6\nDivide by 4:\nb = 6/4 = 1.5.\nChoices B, C, and D are incorrect calculation errors.",
    "topic": "Math"
  },
  {
    "id": 31,
    "text": "What is the value of 1/2 + 1/4?",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "1"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. To add 1/2 and 1/4, find a common denominator of 4: 1/2 = 2/4. Then 2/4 + 1/4 = 3/4. Choices A, B, and D are incorrect arithmetic results.",
    "topic": "Math"
  },
  {
    "id": 32,
    "text": "If the function 𝑓(𝑥) = 2𝑥2 − 3𝑥 + 1, what is 𝑓(2)?",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute 𝑥 = 2 into the function:\n𝑓(2) = 2(2)2 − 3(2) + 1\n𝑓(2) = 2(4) – 6 + 1\n𝑓(2) = 8 – 6 + 1 = 3\nA) Incorrect; calculation error in the function.\nC) Incorrect; incorrect multiplication.\nD) Incorrect; adding wrong terms.",
    "topic": "Math"
  },
  {
    "id": 33,
    "text": "Solve for 𝑥 in the equation 5𝑥 – 7 = 3𝑥 + 5.",
    "options": [
      "-6",
      "-1",
      "1",
      "6"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. First, subtract 3𝑥 from both sides:\n5𝑥 − 3𝑥 – 7 = 5\n2𝑥 – 7 = 5\nAdd 7 to both sides:\n2𝑥 = 12\nDivide by 2:\n𝑥 = 6\nA) Incorrect; incorrect subtraction.\nB) Incorrect; misunderstanding the equation.\nC) Incorrect; error in algebraic steps.",
    "topic": "Math"
  },
  {
    "id": 34,
    "text": "If a triangle has sides of lengths 5, 12, and 13, is it a right triangle?",
    "options": [
      "Yes",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Check if it satisfies the Pythagorean theorem:\n52 + 122 = 132\n25 + 144 = 169\nSince 169 = 169, it is a right triangle.\nB) Incorrect; misunderstanding of the Pythagorean theorem.",
    "topic": "Math"
  },
  {
    "id": 35,
    "text": "What is the value of 7! (7 factorial)?",
    "options": [
      "5040",
      "40320",
      "362880",
      "720"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Calculate the factorial:\n7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040\nB) Incorrect; miscalculation in factorial steps.\nC) Incorrect; confusing with larger factorial.\nD) Incorrect; incorrect multiplication steps.",
    "topic": "Math"
  },
  {
    "id": 36,
    "text": "If 3(𝑥 − 2) = 2𝑥 + 5, what is the value of 𝑥?",
    "options": [
      "-11",
      "-7",
      "7",
      "11"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. First, distribute the 3:\n3𝑥 – 6 = 2𝑥 + 5\nSubtract 2x from both sides:\n𝑥 – 6 = 5\nAdd 6 to both sides:\n𝑥 = 11\nA) Incorrect; mistake in distribution.\nB) Incorrect; incorrect subtraction.\nC) Incorrect; misunderstanding the algebraic steps.",
    "topic": "Math"
  },
  {
    "id": 37,
    "text": "What is the slope of the line 𝑦 = 3𝑥 − 4?",
    "options": [
      "-4",
      "-3",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In the slope-intercept form 𝑦 = 𝑚𝑥 + 𝑏, 𝑚 is the slope. Here, 𝑚 = 3.\nA) Incorrect; confusing slope with y-intercept.\nB) Incorrect; incorrect sign for the slope.\nD) Incorrect; confusing with y-intercept.",
    "topic": "Math"
  },
  {
    "id": 38,
    "text": "If the area of a circle is 25π square units, what is the radius?",
    "options": [
      "5",
      "10",
      "25",
      "50"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Area of a circle formula:\n𝐴 = 𝜋𝑟2\nSet up the equation:\n25𝜋 = 𝜋𝑟2\nDivide by 𝜋:\n25 = 𝑟2\nTake the square root:\n𝑟 = 5\nB) Incorrect; misunderstanding the area formula.\nC) Incorrect; incorrect square root calculation.\nD) Incorrect; irrelevant multiplication.",
    "topic": "Math"
  },
  {
    "id": 39,
    "text": "If the equation of a line is 𝑦 = 2𝑥 + 3, what is the y-intercept?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In the equation 𝑦 = 𝑚𝑥 + 𝑏, 𝑏 is the y-intercept. Here, 𝑏 = 3.\nA) Incorrect; confusing with another point.\nB) Incorrect; mistaking the slope for the intercept.\nD) Incorrect; misunderstanding the equation.",
    "topic": "Math"
  },
  {
    "id": 40,
    "text": "What is the solution to the inequality 2𝑥 – 3 > 1?",
    "options": [
      "𝑥 > 2",
      "𝑥 > 3",
      "𝑥 > 4",
      "𝑥 > 5"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. First, add 3 to both sides:\n2𝑥 – 3 + 3 > 1 + 3\n2𝑥 > 4\nDivide by 2:\n𝑥 > 2\nB) Incorrect; misunderstanding the inequality.\nC) Incorrect; incorrect steps in solving.\nD) Incorrect; wrong arithmetic.",
    "topic": "Math"
  },
  {
    "id": 41,
    "text": "If 3𝑥 – 4 = 2𝑥 + 5, what is the value of 𝑥?",
    "options": [
      "1",
      "5",
      "9",
      "-1"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. First, subtract 2𝑥 from both sides:\n3𝑥 − 2𝑥 – 4 = 5\n𝑥 – 4 = 5\nThen, add 4 to both sides:\n𝑥 = 9\nA) Incorrect; incorrect subtraction.\nB) Incorrect; misunderstanding the algebraic steps.\nD) Incorrect; calculation error in the solution process.",
    "topic": "Math"
  },
  {
    "id": 42,
    "text": "What is the area of a triangle with a base of 10 units and a height of 5 units?",
    "options": [
      "25 square units",
      "30 square units",
      "35 square units",
      "40 square units"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Area of a triangle formula:\nSubstitute the values:\n= 25 square units\nB) Incorrect; misunderstanding the formula.\nC) Incorrect; incorrect multiplication.\nD) Incorrect; error in calculation.",
    "topic": "Math"
  },
  {
    "id": 43,
    "text": "What is the volume of a cube with side length 3 units?",
    "options": [
      "9 cubic units",
      "18 cubic units",
      "27 cubic units",
      "36 cubic units"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Volume of a cube formula:\n𝑉 = 𝑠3\nSubstitute 𝑠 = 3:\n𝑉 = 33\n𝑉 = 27 cubic units\nA) Incorrect; squaring instead of cubing.\nB) Incorrect; incorrect multiplication.\nD) Incorrect; misunderstanding the formula.",
    "topic": "Math"
  },
  {
    "id": 44,
    "text": "If the perimeter of a rectangle is 24 units and the length is 8 units, what is\nthe width?",
    "options": [
      "2 units",
      "4 units",
      "6 units",
      "8 units"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Perimeter of a rectangle formula:\n𝑃 = 2(𝑙 + 𝑤)\nGiven 𝑃 = 24 and 𝑙 = 8:\n24 = 2(8 + 𝑤)\n24 = 16 + 2𝑤\nSubtract 16 from both sides:\n8 = 2𝑤\nDivide by 2:\n𝑤 = 4\nA) Incorrect; misunderstanding the perimeter formula.\nC) Incorrect; error in subtraction.\nD) Incorrect; confusing length with width.\nAPPENDIX IX: DIGITAL SAT",
    "topic": "Math"
  }
];
