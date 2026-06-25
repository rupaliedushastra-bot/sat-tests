const QUESTIONS = [
  {
    "id": 1,
    "text": "If \ud835\udc65 + 3 = 7, what is the value of \ud835\udc65?",
    "options": [
      "3",
      "4",
      "-3",
      "-4"
    ],
    "answer": 1,
    "explanation": "To find \ud835\udc65, subtract 3 from both sides of the equation:\n\ud835\udc65 + 3 \u2013 3 = 7 \u2212 3\n\ud835\udc65 = 4\nA) Incorrect; result of incorrect subtraction.\nC) Incorrect; possible misinterpretation of subtraction.\nD) Incorrect; does not match any logical step in the equation.",
    "topic": "Math"
  },
  {
    "id": 2,
    "text": "Which of the following is equivalent to 2(\ud835\udc65 + 5)?",
    "options": [
      "2\ud835\udc65 + 10",
      "2\ud835\udc65 + 5",
      "2\ud835\udc65 + 25",
      "\ud835\udc65 + 10"
    ],
    "answer": 0,
    "explanation": "Use the distributive property:\n2(\ud835\udc65 + 5) = 2 * \ud835\udc65 + 2 * 5 = 2\ud835\udc65 + 10\nB) Incorrect; fails to distribute to both terms.\nC) Incorrect; multiplies the wrong terms.\nD) Incorrect; only partially distributes the terms.",
    "topic": "Math"
  },
  {
    "id": 3,
    "text": "If \ud835\udc66 = 3\ud835\udc65 + 4 and \ud835\udc66 = 10, what is the value of \ud835\udc65?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "Set \ud835\udc66 equal to 10 and solve for \ud835\udc65:\n10 = 3\ud835\udc65 + 4\nSubtract 4 from both sides:\n6 = 3\ud835\udc65\nDivide both sides by 3:\n\ud835\udc65 = 2\nB) Incorrect; miscalculation in solving.\nC) Incorrect; result from wrong steps.\nD) Incorrect; unrelated to the equation.",
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
    "explanation": "Use the slope formula \nA) Incorrect; calculation error in the slope formula.\nC) Incorrect; possible misunderstanding of the points.\nD) Incorrect; miscalculated slope.",
    "topic": "Math"
  },
  {
    "id": 5,
    "text": "If \ud835\udc4e = 2 and \ud835\udc4f = 3, what is the value of 2\ud835\udc4e + 3\ud835\udc4f?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": 3,
    "explanation": "Substitute the values into the expression:\n2(2) + 3(3) = 4 + 9 = 13\nA) Incorrect; mistake in arithmetic.\nB) Incorrect; misunderstanding the addition.\nC) Incorrect; miscalculated addition.",
    "topic": "Math"
  },
  {
    "id": 6,
    "text": "If \n, what is \ud835\udc53(3)?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 3,
    "explanation": "Substitute 3 into the function:\nA) Incorrect; error in squaring.\nB) Incorrect; result from incorrect addition.\nC) Incorrect; neglects adding 1.",
    "topic": "Math"
  },
  {
    "id": 7,
    "text": "Solve for \ud835\udc65: 5\ud835\udc65 \u2013 2 = 3\ud835\udc65 + 4",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "First, subtract 3\ud835\udc65 from both sides:\n5\ud835\udc65 \u2212 3\ud835\udc65 \u2013 2 = 4\n2\ud835\udc65 \u2013 2 = 4\nAdd 2 to both sides:\n2\ud835\udc65 = 6\nDivide by 2:\n\ud835\udc65 = 3\nA) Incorrect; error in subtraction step.\nB) Incorrect; mistake in addition.\nD) Incorrect; misstep in solving.",
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
    "explanation": "The square root of 49 is 7 because 72 = 49.\nA) Incorrect; not the square root of 49.\nB) Incorrect; also not the square root of 49.\nD) Incorrect; miscalculation of square root.",
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
    "explanation": "The GCD of 24 and 36 is the largest number that divides both without\nleaving a remainder. The divisors of 24 (1, 2, 3, 4, 6, 8, 12, 24) and 36 (1, 2,\n3, 4, 6, 9, 12, 18, 36) have 12 as the greatest common divisor.\nA) Incorrect; lower common divisor.\nB) Incorrect; common divisor but not greatest.\nC) Incorrect; divides 24 but not 36.",
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
    "explanation": "This is a right triangle (3-4-5), and the area can be calculated as:\nArea = \nB) Incorrect; calculation error in area formula.\nC) Incorrect; also miscalculation.\nD) Incorrect; misunderstanding of formula.",
    "topic": "Math"
  },
  {
    "id": 11,
    "text": "If 3\ud835\udc65 \u2013 7 = 11, what is the value of \ud835\udc65?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "To solve for \ud835\udc65, add 7 to both sides of the equation:\n3\ud835\udc65 \u2013 7 + 7 = 11 + 7\n3\ud835\udc65 = 18\nThen, divide both sides by 3:\n\ud835\udc65 = 18/3\n\ud835\udc65 = 6\nA) Incorrect; result from incorrect addition.\nB) Incorrect; mistake in dividing step.\nD) Incorrect; unrelated calculation error.",
    "topic": "Math"
  },
  {
    "id": 12,
    "text": "If \n and \ud835\udc65 = 4, what is the value of \ud835\udc66?",
    "options": [
      "25",
      "29",
      "31",
      "35"
    ],
    "answer": 1,
    "explanation": "Substitute 4 for \ud835\udc65 in the equation:\n\ud835\udc66 = 2(4)2 \u2212 3\n\ud835\udc66 = 2(16) \u2212 3\n\ud835\udc66 = 32 \u2212 3\n\ud835\udc66 = 29\nA) Incorrect; error in multiplication.\nC) Incorrect; mistake in subtraction step.\nD) Incorrect; unrelated calculation error.",
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
    "explanation": "The perimeter of a rectangle is given by:\n2 \u00d7 (length + width)\n2 \u00d7 (8 + 5) = 2 \u00d7 13 = 26\nB) Incorrect; double the length.\nC) Incorrect; addition error.\nD) Incorrect; multiplying the length and width.",
    "topic": "Math"
  },
  {
    "id": 14,
    "text": "If the area of a circle is 16\ud835\udf0b, what is the radius?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "The area of a circle is given by \ud835\udf0b\ud835\udc5f2. Setting this equal to 16\ud835\udf0b:\n\ud835\udf0b\ud835\udc5f2 = 16\ud835\udf0b\nDivide both sides by\n\ud835\udc5f2 =16\nTaking the square root of both sides:\n\ud835\udc5f = 4\nA) Incorrect; misunderstanding the area formula.\nB) Incorrect; wrong square root.\nD) Incorrect; overestimating the radius.",
    "topic": "Math"
  },
  {
    "id": 15,
    "text": "Solve for \ud835\udc65 in the equation 4(\ud835\udc65 \u2212 2) = 12",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 3,
    "explanation": "First, distribute 4 to both terms inside the parentheses:\n4\ud835\udc65 \u2013 8 = 12\nAdd 8 to both sides:\n4\ud835\udc65 = 20\nDivide both sides by 4:\n\ud835\udc65 = 5\nA) Incorrect; miscalculation in distribution.\nB) Incorrect; mistake in addition.\nC) Incorrect; misunderstanding in division.",
    "topic": "Math"
  },
  {
    "id": 16,
    "text": "What is the value of \n?",
    "options": [
      "B) \nC) \nD) 1\nCorrect Answer: C\nExplanation:\nDividing fractions involves multiplying by the reciprocal:\nA) Incorrect; multiplying instead of dividing.",
      "",
      "D) 1\nCorrect Answer: C\nExplanation:\nDividing fractions involves multiplying by the reciprocal:\nA) Incorrect; multiplying instead of dividing.\nB) Incorrect; wrong reciprocal.",
      "1"
    ],
    "answer": 2,
    "explanation": "Dividing fractions involves multiplying by the reciprocal:\nA) Incorrect; multiplying instead of dividing.\nB) Incorrect; wrong reciprocal.\nD) Incorrect; simplifying incorrectly.",
    "topic": "Math"
  },
  {
    "id": 17,
    "text": "If 5\ud835\udc66 + 2 = 17, what is the value of \ud835\udc66?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "First, subtract 2 from both sides:\n5\ud835\udc66 + 2 \u2013 2 = 17 \u2212 2\n5\ud835\udc66 = 15\nThen, divide both sides by 5:\n\ud835\udc66 = 15/5\n\ud835\udc66 = 3\nA) Incorrect; misunderstanding subtraction.\nC) Incorrect; mistake in division.\nD) Incorrect; unrelated result.",
    "topic": "Math"
  },
  {
    "id": 18,
    "text": "What is the value of 23 \u00d7 32?",
    "options": [
      "24",
      "36",
      "72",
      "108"
    ],
    "answer": 2,
    "explanation": "First, calculate each exponent:\n23 = 8\n32 = 9\nThen, multiply the results:\n8 \u00d7 9 = 72\nA) Incorrect; adding exponents.\nB) Incorrect; incorrect multiplication.\nD) Incorrect; multiplying incorrectly.",
    "topic": "Math"
  },
  {
    "id": 19,
    "text": "If \ud835\udc65 + \ud835\udc66 = 10 and \ud835\udc66 = 6, what is the value of \ud835\udc65?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "explanation": "Substitute 6 for \ud835\udc66 in the equation:\n\ud835\udc65 + 6 = 10\nSubtract 6 from both sides:\n\ud835\udc65 = 10 \u2212 6\n\ud835\udc65 = 4\nA) Incorrect; mistake in subtraction.\nC) Incorrect; misunderstanding addition.\nD) Incorrect; incorrect subtraction.",
    "topic": "Math"
  },
  {
    "id": 20,
    "text": "What is the solution to 3(2\ud835\udc65 \u2212 1) = 18?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "First, distribute the 3:\n6\ud835\udc65 \u2013 3 = 18\nAdd 3 to both sides:\n6\ud835\udc65 = 21\nDivide by 6:\n\ud835\udc65 = 21/6 = 3.5\nA) Incorrect; mistake in distributing.\nB) Incorrect; error in adding step.\nD) Incorrect; misunderstanding division.",
    "topic": "Math"
  },
  {
    "id": 21,
    "text": "If 2(\ud835\udc65 \u2212 4) + 3 = 5, what is the value of \ud835\udc65?",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": 3,
    "explanation": "First, simplify inside the parentheses:\n2(\ud835\udc65 \u2212 4) + 3 = 5\n2\ud835\udc65 \u2013 8 + 3 = 5\nCombine like terms:\n2\ud835\udc65 \u2013 5 = 5\nAdd 5 to both sides:\n2\ud835\udc65 = 10\nDivide by 2:\n\ud835\udc65 = 5\nA) Incorrect; mistake in combining terms.\nB) Incorrect; incorrect distribution.\nC) Incorrect; error in solving for \ud835\udc65.",
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
    "explanation": "First, find the square roots:\n = 7\n = 5\nThen, add them:\n7 + 5 = 12\nB) Incorrect; correct calculation but selecting wrong answer.\nC) Incorrect; adding wrong values.\nD) Incorrect; mistake in calculating square roots.",
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
    "explanation": "The area of a rectangle is given by:\nArea = length \u00d7 width\nArea = 10 \u00d7 6\nArea = 60 square units\nB) Incorrect; misunderstanding the formula.\nC) Incorrect; mistaking length and width multiplication.\nD) Incorrect; incorrect calculation.",
    "topic": "Math"
  },
  {
    "id": 24,
    "text": "Solve for \ud835\udc66 in the equation 7\ud835\udc66 \u2013 9 = 12.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "First, add 9 to both sides:\n7\ud835\udc66 \u2013 9 + 9 = 12 + 9\n7\ud835\udc66 = 21\nDivide by 7:\n\ud835\udc66 = 21/7\n\ud835\udc66 = 3\nA) Incorrect; mistake in addition.\nB) Incorrect; error in division.\nD) Incorrect; wrong arithmetic.",
    "topic": "Math"
  },
  {
    "id": 25,
    "text": "What is the value of 52 \u2212 42?",
    "options": [
      "9",
      "21",
      "25",
      "41"
    ],
    "answer": 0,
    "explanation": "First, calculate each square:\n52 = 25\n42 = 16\nThen, subtract:\n25 \u2013 16 = 9\nB) Incorrect; mistake in calculating squares.\nC) Incorrect; miscalculation.\nD) Incorrect; adding instead of subtracting.",
    "topic": "Math"
  },
  {
    "id": 26,
    "text": "If \ud835\udc4e = 3 and \ud835\udc4f = 4, what is the value of \ud835\udc4e2 + \ud835\udc4f2?",
    "options": [
      "12",
      "13",
      "25",
      "29"
    ],
    "answer": 2,
    "explanation": "First, calculate each square:\n\ud835\udc4e2 = 32 = 9\n\ud835\udc4f2 = 42 = 16\nThen, add them:\n9 + 16 = 25\nA) Incorrect; incorrect addition.\nB) Incorrect; mistake in calculation.\nD) Incorrect; unrelated calculation.",
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
    "explanation": "The perimeter of a square is given by:\n4 \u00d7 side length\nSet up the equation:\n4 \u00d7 side\u00a0length = 20\nDivide by 4:\nside\u00a0length = 20/4 = 5\nA) Incorrect; misunderstanding the perimeter formula.\nC) Incorrect; wrong arithmetic.\nD) Incorrect; unrelated result.",
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
    "explanation": "The slope of a line is given by:\nSubstitute the points:\nA) Incorrect; mistake in subtraction.\nC) Incorrect; misunderstanding the formula.\nD) Incorrect; error in calculation.",
    "topic": "Math"
  },
  {
    "id": 29,
    "text": "Solve for \ud835\udc65 in the equation \ud835\udc652 \u2212 4\ud835\udc65 \u2013 5 = 0.",
    "options": [
      "-5, 1",
      "-1, 5",
      "1, 5",
      "-5, -1"
    ],
    "answer": 1,
    "explanation": "Factor the quadratic equation:\n(\ud835\udc65 \u2212 5)(\ud835\udc65 + 1) = 0\nSet each factor to zero:\n\ud835\udc65 \u2013 5 = 0 or \ud835\udc65 + 1 = 0\n\ud835\udc65 = 5 or \ud835\udc65 = \u22121\nA) Incorrect; misunderstanding factoring.\nC) Incorrect; incorrect signs.\nD) Incorrect; incorrect signs and factors.",
    "topic": "Math"
  },
  {
    "id": 30,
    "text": "If 3\ud835\udc4e + 4\ud835\udc4f = 12 and \ud835\udc4e = 2, what is the value of \ud835\udc4f?",
    "options": [
      "1.5",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Substitute \ud835\udc4e = 2 into the equation:\n3(2) + 4\ud835\udc4f = 12\n6 + 4\ud835\udc4f = 12\nSubtract 6 from both sides:\n4\ud835\udc4f = 6\nDivide by 4:\n\ud835\udc4f = 6/4\n\ud835\udc4f = 1.5\nA) Incorrect; mistake in solving for \ud835\udc4f.\nB) Incorrect; misunderstanding the equation.\nD) Incorrect; unrelated calculation.",
    "topic": "Math"
  },
  {
    "id": 31,
    "text": "What is the value of \n?",
    "options": [
      "B) \nC) \nD) \nCorrect Answer: C\nExplanation:\nFirst, find a common denominator for the fractions, which is 4:\nA) Incorrect; subtracting instead of adding.",
      "",
      "D) \nCorrect Answer: C\nExplanation:\nFirst, find a common denominator for the fractions, which is 4:\nA) Incorrect; subtracting instead of adding.\nB) Incorrect; adding with the wrong denominator.",
      ""
    ],
    "answer": 2,
    "explanation": "First, find a common denominator for the fractions, which is 4:\nA) Incorrect; subtracting instead of adding.\nB) Incorrect; adding with the wrong denominator.\nD) Incorrect; misunderstanding the addition process.",
    "topic": "Math"
  },
  {
    "id": 32,
    "text": "If the function \ud835\udc53(\ud835\udc65) = 2\ud835\udc652 \u2212 3\ud835\udc65 + 1, what is \ud835\udc53(2)?",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "answer": 1,
    "explanation": "Substitute \ud835\udc65 = 2 into the function:\n\ud835\udc53(2) = 2(2)2 \u2212 3(2) + 1\n\ud835\udc53(2) = 2(4) \u2013 6 + 1\n\ud835\udc53(2) = 8 \u2013 6 + 1 = 3\nA) Incorrect; calculation error in the function.\nC) Incorrect; incorrect multiplication.\nD) Incorrect; adding wrong terms.",
    "topic": "Math"
  },
  {
    "id": 33,
    "text": "Solve for \ud835\udc65 in the equation 5\ud835\udc65 \u2013 7 = 3\ud835\udc65 + 5.",
    "options": [
      "-6",
      "-1",
      "1",
      "6"
    ],
    "answer": 3,
    "explanation": "First, subtract 3\ud835\udc65 from both sides:\n5\ud835\udc65 \u2212 3\ud835\udc65 \u2013 7 = 5\n2\ud835\udc65 \u2013 7 = 5\nAdd 7 to both sides:\n2\ud835\udc65 = 12\nDivide by 2:\n\ud835\udc65 = 6\nA) Incorrect; incorrect subtraction.\nB) Incorrect; misunderstanding the equation.\nC) Incorrect; error in algebraic steps.",
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
    "explanation": "Check if it satisfies the Pythagorean theorem:\n52 + 122 = 132\n25 + 144 = 169\nSince 169 = 169, it is a right triangle.\nB) Incorrect; misunderstanding of the Pythagorean theorem.",
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
    "explanation": "Calculate the factorial:\n7! = 7 \u00d7 6 \u00d7 5 \u00d7 4 \u00d7 3 \u00d7 2 \u00d7 1 = 5040\nB) Incorrect; miscalculation in factorial steps.\nC) Incorrect; confusing with larger factorial.\nD) Incorrect; incorrect multiplication steps.",
    "topic": "Math"
  },
  {
    "id": 36,
    "text": "If 3(\ud835\udc65 \u2212 2) = 2\ud835\udc65 + 5, what is the value of \ud835\udc65?",
    "options": [
      "-11",
      "-7",
      "7",
      "11"
    ],
    "answer": 3,
    "explanation": "First, distribute the 3:\n3\ud835\udc65 \u2013 6 = 2\ud835\udc65 + 5\nSubtract 2x from both sides:\n\ud835\udc65 \u2013 6 = 5\nAdd 6 to both sides:\n\ud835\udc65 = 11\nA) Incorrect; mistake in distribution.\nB) Incorrect; incorrect subtraction.\nC) Incorrect; misunderstanding the algebraic steps.",
    "topic": "Math"
  },
  {
    "id": 37,
    "text": "What is the slope of the line \ud835\udc66 = 3\ud835\udc65 \u2212 4?",
    "options": [
      "-4",
      "-3",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "In the slope-intercept form \ud835\udc66 = \ud835\udc5a\ud835\udc65 + \ud835\udc4f, \ud835\udc5a is the slope. Here, \ud835\udc5a = 3.\nA) Incorrect; confusing slope with y-intercept.\nB) Incorrect; incorrect sign for the slope.\nD) Incorrect; confusing with y-intercept.",
    "topic": "Math"
  },
  {
    "id": 38,
    "text": "If the area of a circle is 25\u03c0 square units, what is the radius?",
    "options": [
      "5",
      "10",
      "25",
      "50"
    ],
    "answer": 0,
    "explanation": "Area of a circle formula:\n\ud835\udc34 = \ud835\udf0b\ud835\udc5f2\nSet up the equation:\n25\ud835\udf0b = \ud835\udf0b\ud835\udc5f2\nDivide by \ud835\udf0b:\n25 = \ud835\udc5f2\nTake the square root:\n\ud835\udc5f = 5\nB) Incorrect; misunderstanding the area formula.\nC) Incorrect; incorrect square root calculation.\nD) Incorrect; irrelevant multiplication.",
    "topic": "Math"
  },
  {
    "id": 39,
    "text": "If the equation of a line is \ud835\udc66 = 2\ud835\udc65 + 3, what is the y-intercept?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "explanation": "In the equation \ud835\udc66 = \ud835\udc5a\ud835\udc65 + \ud835\udc4f, \ud835\udc4f is the y-intercept. Here, \ud835\udc4f = 3.\nA) Incorrect; confusing with another point.\nB) Incorrect; mistaking the slope for the intercept.\nD) Incorrect; misunderstanding the equation.",
    "topic": "Math"
  },
  {
    "id": 40,
    "text": "What is the solution to the inequality 2\ud835\udc65 \u2013 3 > 1?",
    "options": [
      "\ud835\udc65 > 2",
      "\ud835\udc65 > 3",
      "\ud835\udc65 > 4",
      "\ud835\udc65 > 5"
    ],
    "answer": 0,
    "explanation": "First, add 3 to both sides:\n2\ud835\udc65 \u2013 3 + 3 > 1 + 3\n2\ud835\udc65 > 4\nDivide by 2:\n\ud835\udc65 > 2\nB) Incorrect; misunderstanding the inequality.\nC) Incorrect; incorrect steps in solving.\nD) Incorrect; wrong arithmetic.",
    "topic": "Math"
  },
  {
    "id": 41,
    "text": "If 3\ud835\udc65 \u2013 4 = 2\ud835\udc65 + 5, what is the value of \ud835\udc65?",
    "options": [
      "1",
      "5",
      "9",
      "-1"
    ],
    "answer": 2,
    "explanation": "First, subtract 2\ud835\udc65 from both sides:\n3\ud835\udc65 \u2212 2\ud835\udc65 \u2013 4 = 5\n\ud835\udc65 \u2013 4 = 5\nThen, add 4 to both sides:\n\ud835\udc65 = 9\nA) Incorrect; incorrect subtraction.\nB) Incorrect; misunderstanding the algebraic steps.\nD) Incorrect; calculation error in the solution process.",
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
    "explanation": "Area of a triangle formula:\nSubstitute the values:\n = 25 square units\nB) Incorrect; misunderstanding the formula.\nC) Incorrect; incorrect multiplication.\nD) Incorrect; error in calculation.",
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
    "explanation": "Volume of a cube formula:\n\ud835\udc49 = \ud835\udc603\nSubstitute \ud835\udc60 = 3:\n\ud835\udc49 = 33\n\ud835\udc49 = 27 cubic units\nA) Incorrect; squaring instead of cubing.\nB) Incorrect; incorrect multiplication.\nD) Incorrect; misunderstanding the formula.",
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
    "explanation": "Perimeter of a rectangle formula:\n\ud835\udc43 = 2(\ud835\udc59 + \ud835\udc64)\nGiven \ud835\udc43 = 24 and \ud835\udc59 = 8:\n24 = 2(8 + \ud835\udc64)\n24 = 16 + 2\ud835\udc64\nSubtract 16 from both sides:\n8 = 2\ud835\udc64\nDivide by 2:\n\ud835\udc64 = 4\nA) Incorrect; misunderstanding the perimeter formula.\nC) Incorrect; error in subtraction.\nD) Incorrect; confusing length with width.\nAPPENDIX IX: DIGITAL SAT",
    "topic": "Math"
  }
];
