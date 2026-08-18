const QUESTIONS = [
  {
    "id": 1,
    "text": "If 4𝑥 - 7 = 17, what is the value of 𝑥?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Add 7 to both sides: 4𝑥 = 24. Divide by 4: 𝑥 = 6.\n• Choice A is incorrect: 4(4) - 7 = 9 != 17.\n• Choice B is incorrect: 4(5) - 7 = 13 != 17.\n• Choice D is incorrect: 4(7) - 7 = 21 != 17.",
    "topic": "Algebra"
  },
  {
    "id": 2,
    "text": "Which of the following expressions is equivalent to 3(2𝑥 - 4) + 5𝑥?",
    "options": [
      "11𝑥 - 12",
      "11𝑥 - 4",
      "6𝑥 - 12",
      "11𝑥 + 12"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Distribute the 3: 3(2𝑥) - 3(4) + 5𝑥 = 6𝑥 - 12 + 5𝑥 = 11𝑥 - 12.\n• Choice B is incorrect: failed to distribute 3 to -4.\n• Choice C is incorrect: forgot to add 5𝑥.\n• Choice D is incorrect: sign error on constant.",
    "topic": "Algebra"
  },
  {
    "id": 3,
    "text": "A line passes through the points (1, 5) and (3, 11). What is the slope of the line?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The slope formula is 𝑚 = (𝑦2 - 𝑦1) / (𝑥2 - 𝑥1) = (11 - 5) / (3 - 1) = 6 / 2 = 3.\n• Choice A is incorrect: result of dividing by 3 instead of 2.\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: difference in y values without dividing by difference in x.",
    "topic": "Algebra"
  },
  {
    "id": 4,
    "text": "If 𝑓(𝑥) = 𝑥² - 4𝑥 + 7, what is the value of 𝑓(3)?",
    "options": [
      "2",
      "4",
      "7",
      "10"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute 𝑥 = 3: 𝑓(3) = 3² - 4(3) + 7 = 9 - 12 + 7 = 4.\n• Choice A is incorrect: arithmetic error.\n• Choice C is incorrect: evaluation at 0.\n• Choice D is incorrect: sign error on the linear term.",
    "topic": "Advanced Math"
  },
  {
    "id": 5,
    "text": "What are the solutions to the quadratic equation 𝑥² - 6𝑥 + 8 = 0?",
    "options": [
      "𝑥 = 2 and 𝑥 = 4",
      "𝑥 = -2 and 𝑥 = -4",
      "𝑥 = 1 and 𝑥 = 8",
      "𝑥 = -1 and 𝑥 = -8"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Factor the quadratic: (𝑥 - 2)(𝑥 - 4) = 0, so 𝑥 = 2 or 𝑥 = 4.\n• Choice B is incorrect: sign error in factors (𝑥 + 2)(𝑥 + 4) = 𝑥² + 6𝑥 + 8.\n• Choice C is incorrect: factors of 8 that sum to 9, not 6.\n• Choice D is incorrect: incorrect factors and signs.",
    "topic": "Advanced Math"
  },
  {
    "id": 6,
    "text": "If 2^(3𝑥) = 64, what is the value of 𝑥?",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Express 64 as a power of 2: 64 = 2^6. Thus 3𝑥 = 6, which gives 𝑥 = 2.\n• Choice A is incorrect: 2^(3*1) = 8 != 64.\n• Choice C is incorrect: 2^(3*3) = 512 != 64.\n• Choice D is incorrect: equates 3x to 18.",
    "topic": "Advanced Math"
  },
  {
    "id": 7,
    "text": "A jacket originally priced at $80 is discounted by 25%. What is the sale price of the jacket?",
    "options": [
      "$55",
      "$60",
      "$65",
      "$70"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Discount amount = 0.25 * $80 = $20. Sale price = $80 - $20 = $60.\n• Choice A is incorrect: equivalent to 31.25% discount.\n• Choice C is incorrect: arithmetic error.\n• Choice D is incorrect: 12.5% discount.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 8,
    "text": "In a survey of 200 students, 120 participate in sports and 80 participate in music clubs. If 40 students participate in both, how many students participate in neither?",
    "options": [
      "20",
      "40",
      "60",
      "80"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Total participating in at least one = 120 + 80 - 40 = 160. Students in neither = 200 - 160 = 40.\n• Choice A is incorrect: double-subtracted the overlap.\n• Choice C is incorrect: forgot to subtract the overlap of 40.\n• Choice D is incorrect: counted only music students.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 9,
    "text": "What is the area of a circle with a circumference of 10π?",
    "options": [
      "10π",
      "20π",
      "25π",
      "100π"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Circumference = 2π𝑟 = 10π, so 𝑟 = 5. Area = π𝑟² = π(5)² = 25π.\n• Choice A is incorrect: equals the circumference.\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: squared the diameter (10) instead of radius (5).",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 10,
    "text": "In a right triangle, the length of the hypotenuse is 13 and the length of one leg is 5. What is the length of the other leg?",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. By the Pythagorean theorem, 𝑎² + 5² = 13² => 𝑎² + 25 = 169 => 𝑎² = 144 => 𝑎 = 12.\n• Choice A is incorrect: 13 - 5 = 8 (subtracted lengths linearly).\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: added leg and 1.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 11,
    "text": "If 3(𝑥 + 2) = 2(𝑥 - 1) + 12, what is the value of 𝑥?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Expand: 3𝑥 + 6 = 2𝑥 - 2 + 12 => 3𝑥 + 6 = 2𝑥 + 10 => 𝑥 = 4.\n• Choice A is incorrect: 3(4) != 2(1) + 12 (12 != 14).\n• Choice C is incorrect: 3(8) = 24, 2(5) + 12 = 22 (24 != 22).\n• Choice D is incorrect: calculation error.",
    "topic": "Algebra"
  },
  {
    "id": 12,
    "text": "The system of equations 2𝑥 + 𝑦 = 9 and 𝑥 - 2𝑦 = -3 has solution (𝑥, 𝑦). What is the value of 𝑥 + 𝑦?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Multiply first eq by 2: 4𝑥 + 2𝑦 = 18. Add second eq: 5𝑥 = 15 => 𝑥 = 3. Then 2(3) + 𝑦 = 9 => 𝑦 = 3. Thus 𝑥 + 𝑦 = 3 + 3 = 6.\n• Choice A is incorrect: error in substitution.\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: added wrong variables.",
    "topic": "Algebra"
  },
  {
    "id": 13,
    "text": "Which of the following represents the vertex of the parabola 𝑦 = 2(𝑥 - 3)² + 5?",
    "options": [
      "(-3, 5)",
      "(3, -5)",
      "(3, 5)",
      "(-3, -5)"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In vertex form 𝑦 = 𝑎(𝑥 - ℎ)² + 𝑘, the vertex is (ℎ, 𝑘). Here ℎ = 3 and 𝑘 = 5, so the vertex is (3, 5).\n• Choice A is incorrect: wrong sign on h.\n• Choice B is incorrect: wrong sign on k.\n• Choice D is incorrect: wrong signs on both h and k.",
    "topic": "Advanced Math"
  },
  {
    "id": 14,
    "text": "If (𝑥 + 3)/(𝑥 - 2) = 4, what is the value of 𝑥?",
    "options": [
      "11/3",
      "11/4",
      "3",
      "5"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Cross-multiply: 𝑥 + 3 = 4(𝑥 - 2) => 𝑥 + 3 = 4𝑥 - 8 => 11 = 3𝑥 => 𝑥 = 11/3.\n• Choice B is incorrect: arithmetic error.\n• Choice C is incorrect: (6)/(1) = 6 != 4.\n• Choice D is incorrect: (8)/(3) != 4.",
    "topic": "Advanced Math"
  },
  {
    "id": 15,
    "text": "The average (arithmetic mean) of five numbers is 18. If four of the numbers are 12, 15, 20, and 25, what is the fifth number?",
    "options": [
      "16",
      "18",
      "20",
      "22"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Sum of 5 numbers = 5 * 18 = 90. Sum of 4 given numbers = 12 + 15 + 20 + 25 = 72. Fifth number = 90 - 72 = 18.\n• Choice A is incorrect: 72 + 16 = 88 != 90.\n• Choice C is incorrect: 72 + 20 = 92 != 90.\n• Choice D is incorrect: 72 + 22 = 94 != 90.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 16,
    "text": "A box contains 6 red, 4 blue, and 5 green marbles. If one marble is drawn at random, what is the probability that it is NOT blue?",
    "options": [
      "4/15",
      "11/15",
      "2/3",
      "3/5"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Total marbles = 6 + 4 + 5 = 15. Number of non-blue marbles = 6 + 5 = 11. Probability = 11/15.\n• Choice A is incorrect: probability that it IS blue (4/15).\n• Choice C is incorrect: 10/15 = 2/3.\n• Choice D is incorrect: 9/15 = 3/5.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 17,
    "text": "In the 𝑥𝑦-plane, what is the distance between the points (2, -1) and (6, 2)?",
    "options": [
      "3",
      "4",
      "5",
      "7"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Distance formula: 𝑑 = √((6 - 2)² + (2 - (-1))²) = √(4² + 3²) = √(16 + 9) = √25 = 5.\n• Choice A is incorrect: delta y.\n• Choice B is incorrect: delta x.\n• Choice D is incorrect: delta x + delta y.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 18,
    "text": "If sin(𝜃) = 3/5 for an acute angle 𝜃, what is the value of cos(𝜃)?",
    "options": [
      "3/4",
      "4/5",
      "5/4",
      "5/3"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Using sin²(𝜃) + cos²(𝜃) = 1: (3/5)² + cos²(𝜃) = 1 => 9/25 + cos²(𝜃) = 1 => cos²(𝜃) = 16/25 => cos(𝜃) = 4/5.\n• Choice A is incorrect: tan(theta) = 3/4.\n• Choice C is incorrect: sec(theta) = 5/4.\n• Choice D is incorrect: csc(theta) = 5/3.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 19,
    "text": "If 5(2𝑥 - 3) = 35, what is the value of 2𝑥?",
    "options": [
      "7",
      "8",
      "10",
      "14"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Divide by 5: 2𝑥 - 3 = 7 => 2𝑥 = 10.\n• Choice A is incorrect: value of 2x - 3.\n• Choice B is incorrect: arithmetic error.\n• Choice D is incorrect: multiplied by 2 twice.",
    "topic": "Algebra"
  },
  {
    "id": 20,
    "text": "Which of the following points lies on the graph of 3𝑥 - 2𝑦 = 12?",
    "options": [
      "(2, 3)",
      "(4, 0)",
      "(0, 6)",
      "(6, 2)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Test (4, 0): 3(4) - 2(0) = 12 - 0 = 12, which is true.\n• Choice A is incorrect: 3(2) - 2(3) = 0 != 12.\n• Choice C is incorrect: 3(0) - 2(6) = -12 != 12.\n• Choice D is incorrect: 3(6) - 2(2) = 14 != 12.",
    "topic": "Algebra"
  },
  {
    "id": 21,
    "text": "If 𝑥² - 𝑦² = 24 and 𝑥 - 𝑦 = 4, what is the value of 𝑥 + 𝑦?",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Factor difference of squares: 𝑥² - 𝑦² = (𝑥 - 𝑦)(𝑥 + 𝑦). Therefore 24 = 4(𝑥 + 𝑦) => 𝑥 + 𝑦 = 6.\n• Choice A is incorrect: value of x - y.\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: 24 / 2 = 12.",
    "topic": "Advanced Math"
  },
  {
    "id": 22,
    "text": "The graph of a line has equation 𝑦 = -2𝑥 + 6. What is the 𝑥-intercept of the line?",
    "options": [
      "(-3, 0)",
      "(0, 6)",
      "(3, 0)",
      "(6, 0)"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Set 𝑦 = 0: 0 = -2𝑥 + 6 => 2𝑥 = 6 => 𝑥 = 3. So the x-intercept is (3, 0).\n• Choice A is incorrect: sign error.\n• Choice B is incorrect: this is the y-intercept (0, 6).\n• Choice D is incorrect: set x to the constant value.",
    "topic": "Algebra"
  },
  {
    "id": 23,
    "text": "A bank offers an annual compound interest rate of 4%. If an initial deposit of $2,000 is left untouched for 3 years, which expression models the final balance?",
    "options": [
      "2000(1.04)³",
      "2000(0.04)³",
      "2000(1 + 0.4)³",
      "2000 + 3(0.04)"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Compound interest formula: 𝐴 = 𝑃(1 + 𝑟)^𝑡 = 2000(1 + 0.04)³ = 2000(1.04)³.\n• Choice B is incorrect: missing the base 1.\n• Choice C is incorrect: used 40% (0.4) instead of 4% (0.04).\n• Choice D is incorrect: linear simple interest structure.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 24,
    "text": "If 3/(2𝑥) = 9/10, what is the value of 𝑥?",
    "options": [
      "5/3",
      "3/5",
      "5/6",
      "6/5"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Cross-multiply: 3(10) = 9(2𝑥) => 30 = 18𝑥 => 𝑥 = 30/18 = 5/3.\n• Choice B is incorrect: inverted the fraction.\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: calculation error.",
    "topic": "Algebra"
  },
  {
    "id": 25,
    "text": "What is the volume of a right rectangular prism with length 6, width 4, and height 5?",
    "options": [
      "60",
      "100",
      "120",
      "140"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Volume = length * width * height = 6 * 4 * 5 = 120.\n• Choice A is incorrect: 6 * 10 = 60.\n• Choice B is incorrect: 4 * 25 = 100.\n• Choice D is incorrect: calculation error.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 26,
    "text": "If 2𝑥 + 3 > 11, which of the following describes all possible values of 𝑥?",
    "options": [
      "𝑥 > 4",
      "𝑥 < 4",
      "𝑥 > 7",
      "𝑥 < 7"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Subtract 3: 2𝑥 > 8. Divide by 2: 𝑥 > 4.\n• Choice B is incorrect: inverted the inequality sign.\n• Choice C is incorrect: subtracted 3 from 11 and forgot to divide by 2.\n• Choice D is incorrect: inverted inequality and calculation error.",
    "topic": "Algebra"
  },
  {
    "id": 27,
    "text": "The function 𝑔 is defined by 𝑔(𝑥) = 3𝑥 + 2. If 𝑔(𝑎) = 17, what is the value of 𝑎?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Set 3𝑎 + 2 = 17 => 3𝑎 = 15 => 𝑎 = 5.\n• Choice A is incorrect: 3(3) + 2 = 11 != 17.\n• Choice B is incorrect: 3(4) + 2 = 14 != 17.\n• Choice D is incorrect: 3(6) + 2 = 20 != 17.",
    "topic": "Algebra"
  },
  {
    "id": 28,
    "text": "What is the equation of the line parallel to 𝑦 = 3𝑥 - 5 that passes through the point (1, 2)?",
    "options": [
      "𝑦 = 3𝑥 - 1",
      "𝑦 = 3𝑥 + 1",
      "𝑦 = -3𝑥 + 5",
      "𝑦 = (1/3)𝑥 + 2"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Parallel lines have equal slope, so 𝑚 = 3. Use point-slope form: 𝑦 - 2 = 3(𝑥 - 1) => 𝑦 - 2 = 3𝑥 - 3 => 𝑦 = 3𝑥 - 1.\n• Choice B is incorrect: sign error on intercept.\n• Choice C is incorrect: negated the slope.\n• Choice D is incorrect: perpendicular reciprocal slope.",
    "topic": "Algebra"
  },
  {
    "id": 29,
    "text": "If √𝑥 + 4 = 7, what is the value of 𝑥?",
    "options": [
      "3",
      "9",
      "25",
      "49"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Subtract 4: √𝑥 = 3. Square both sides: 𝑥 = 3² = 9.\n• Choice A is incorrect: √3 + 4 != 7.\n• Choice C is incorrect: √25 + 4 = 5 + 4 = 9 != 7.\n• Choice D is incorrect: squared 7 directly.",
    "topic": "Advanced Math"
  },
  {
    "id": 30,
    "text": "A sample of 500 items was inspected, and 15 were found to be defective. Based on this sample, what percentage of items are defective?",
    "options": [
      "0.3%",
      "3%",
      "15%",
      "30%"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Percentage = (15 / 500) * 100% = 0.03 * 100% = 3%.\n• Choice A is incorrect: 0.3% would be 1.5 items.\n• Choice C is incorrect: used the raw count 15 as percentage.\n• Choice D is incorrect: off by a factor of 10.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 31,
    "text": "In triangle 𝐴𝐵𝐶, the measure of angle 𝐴 is 40° and the measure of angle 𝐵 is 65°. What is the measure of angle 𝐶?",
    "options": [
      "65°",
      "75°",
      "85°",
      "95°"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The sum of interior angles in a triangle is 180°. Angle 𝐶 = 180° - 40° - 65° = 75°.\n• Choice A is incorrect: 40 + 65 + 65 = 170 != 180.\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: calculation error.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 32,
    "text": "If (2𝑥²)(3𝑥⁴) = 𝑘𝑥⁶, what is the value of 𝑘?",
    "options": [
      "5",
      "6",
      "8",
      "9"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Multiply coefficients: 2 * 3 = 6. Add exponents: 𝑥^(2+4) = 𝑥⁶. Thus 𝑘 = 6.\n• Choice A is incorrect: added coefficients 2 + 3 = 5.\n• Choice C is incorrect: 2³ = 8.\n• Choice D is incorrect: 3² = 9.",
    "topic": "Advanced Math"
  },
  {
    "id": 33,
    "text": "If |2𝑥 - 4| = 10, what is the positive solution for 𝑥?",
    "options": [
      "3",
      "5",
      "7",
      "9"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 2𝑥 - 4 = 10 => 2𝑥 = 14 => 𝑥 = 7. (The negative solution is 2𝑥 - 4 = -10 => 2𝑥 = -6 => 𝑥 = -3).\n• Choice A is incorrect: |2(3) - 4| = 2 != 10.\n• Choice B is incorrect: |2(5) - 4| = 6 != 10.\n• Choice D is incorrect: |2(9) - 4| = 14 != 10.",
    "topic": "Algebra"
  },
  {
    "id": 34,
    "text": "A line in the 𝑥𝑦-plane has equation 4𝑥 - 5𝑦 = 20. What is the 𝑦-intercept of the line?",
    "options": [
      "(0, -4)",
      "(0, 4)",
      "(0, -5)",
      "(0, 5)"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Set 𝑥 = 0: -5𝑦 = 20 => 𝑦 = -4. Thus the y-intercept is (0, -4).\n• Choice B is incorrect: sign error.\n• Choice C is incorrect: used the y coefficient as intercept.\n• Choice D is incorrect: x-intercept is (5, 0).",
    "topic": "Algebra"
  },
  {
    "id": 35,
    "text": "If 𝑥² + 10𝑥 + 𝑐 is a perfect square trinomial, what is the value of 𝑐?",
    "options": [
      "5",
      "10",
      "20",
      "25"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. A perfect square trinomial (𝑥 + 𝑏/2)² has constant term (𝑏/2)². Here 𝑏 = 10, so (10/2)² = 5² = 25.\n• Choice A is incorrect: 10/2 = 5 (forgot to square).\n• Choice B is incorrect: equals the linear coefficient.\n• Choice C is incorrect: 2 * 10 = 20.",
    "topic": "Advanced Math"
  },
  {
    "id": 36,
    "text": "The ratio of boys to girls in a classroom is 3:5. If there are 15 boys, how many girls are in the classroom?",
    "options": [
      "20",
      "25",
      "30",
      "35"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Set up proportion: 3/5 = 15/𝐺 => 3𝐺 = 75 => 𝐺 = 25 girls.\n• Choice A is incorrect: calculation error.\n• Choice C is incorrect: 3 * 10 = 30.\n• Choice D is incorrect: calculation error.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 37,
    "text": "What is the perimeter of an equilateral triangle with a side length of 8 cm?",
    "options": [
      "16 cm",
      "24 cm",
      "32 cm",
      "64 cm"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. An equilateral triangle has three equal sides: Perimeter = 3 * 8 = 24 cm.\n• Choice A is incorrect: 2 * 8 = 16 cm.\n• Choice C is incorrect: 4 * 8 = 32 cm (perimeter of a square).\n• Choice D is incorrect: 8² = 64.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 38,
    "text": "If 𝑓(𝑥) = 2𝑥 + 1 and 𝑔(𝑥) = 𝑥² - 3, what is the value of 𝑓(𝑔(3))?",
    "options": [
      "9",
      "11",
      "13",
      "15"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. First evaluate 𝑔(3) = 3² - 3 = 9 - 3 = 6. Then evaluate 𝑓(6) = 2(6) + 1 = 12 + 1 = 13.\n• Choice A is incorrect: evaluated g(3) and added 3.\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: evaluated g(f(3)) = g(7) = 49 - 3 = 46.",
    "topic": "Advanced Math"
  },
  {
    "id": 39,
    "text": "If 4(𝑥 - 2) + 3 = 19, what is the value of 𝑥?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Expand: 4𝑥 - 8 + 3 = 19 => 4𝑥 - 5 = 19 => 4𝑥 = 24 => 𝑥 = 6.\n• Choice A is incorrect: 4(2) + 3 = 11 != 19.\n• Choice B is incorrect: 4(3) + 3 = 15 != 19.\n• Choice D is incorrect: 4(5) + 3 = 23 != 19.",
    "topic": "Algebra"
  },
  {
    "id": 40,
    "text": "Which of the following is an equation of the line with a slope of -3 and a 𝑦-intercept of (0, 7)?",
    "options": [
      "𝑦 = -3𝑥 + 7",
      "𝑦 = 3𝑥 + 7",
      "𝑦 = -3𝑥 - 7",
      "𝑦 = 7𝑥 - 3"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In slope-intercept form 𝑦 = 𝑚𝑥 + 𝑏, 𝑚 = -3 and 𝑏 = 7, giving 𝑦 = -3𝑥 + 7.\n• Choice B is incorrect: slope is positive 3.\n• Choice C is incorrect: y-intercept is -7.\n• Choice D is incorrect: swapped slope and intercept.",
    "topic": "Algebra"
  },
  {
    "id": 41,
    "text": "If 2𝑥 + 5𝑦 = 20 and 𝑦 = 2, what is the value of 𝑥?",
    "options": [
      "3",
      "5",
      "7",
      "10"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute 𝑦 = 2: 2𝑥 + 5(2) = 20 => 2𝑥 + 10 = 20 => 2𝑥 = 10 => 𝑥 = 5.\n• Choice A is incorrect: 2(3) + 10 = 16 != 20.\n• Choice C is incorrect: 2(7) + 10 = 24 != 20.\n• Choice D is incorrect: forgot to divide by 2.",
    "topic": "Algebra"
  },
  {
    "id": 42,
    "text": "The median of a set of 7 distinct numbers is 14. If the three largest numbers are increased by 5, what is the new median of the set?",
    "options": [
      "14",
      "17",
      "19",
      "Cannot be determined"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The median is the middle (4th) value in an ordered set of 7 numbers. Increasing the 3 largest numbers (5th, 6th, 7th values) does not change the position or value of the 4th number. The median remains 14.\n• Choice B is incorrect: median is not increased by 3.\n• Choice C is incorrect: 14 + 5 = 19 (the median itself was not increased).\n• Choice D is incorrect: the median is strictly determined by the 4th element.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 43,
    "text": "A cylinder has a radius of 3 cm and a height of 8 cm. What is the volume of the cylinder?",
    "options": [
      "24π cm³",
      "48π cm³",
      "72π cm³",
      "96π cm³"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Volume of a cylinder = π𝑟²ℎ = π(3²)(8) = π(9)(8) = 72π cm³.\n• Choice A is incorrect: 24π = 3 * 8 * π (forgot to square radius).\n• Choice B is incorrect: 2π(3)(8) = 48π (lateral surface area).\n• Choice D is incorrect: calculation error.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 44,
    "text": "If 𝑥² - 16 = 0, what is the positive value of 𝑥 + 4?",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 𝑥² = 16 => 𝑥 = 4 (positive root). Then 𝑥 + 4 = 4 + 4 = 8.\n• Choice A is incorrect: value of x itself.\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: calculation error.",
    "topic": "Advanced Math"
  }
];
