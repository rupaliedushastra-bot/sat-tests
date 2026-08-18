const QUESTIONS = [
  {
    "id": 1,
    "text": "If 3𝑥 + 5 = 26, what is the value of 𝑥?",
    "options": [
      "5",
      "7",
      "8",
      "9"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Subtract 5 from both sides: 3𝑥 = 21. Divide by 3: 𝑥 = 7.\n• Choice A is incorrect: 3(5) + 5 = 20 != 26.\n• Choice C is incorrect: 3(8) + 5 = 29 != 26.\n• Choice D is incorrect: 3(9) + 5 = 32 != 26.",
    "topic": "Algebra"
  },
  {
    "id": 2,
    "text": "Which of the following is equivalent to the expression 4(3𝑥 - 2) - 2(𝑥 + 5)?",
    "options": [
      "10𝑥 - 18",
      "10𝑥 - 3",
      "10𝑥 + 2",
      "14𝑥 - 18"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Expand both terms: 12𝑥 - 8 - 2𝑥 - 10 = (12𝑥 - 2𝑥) + (-8 - 10) = 10𝑥 - 18.\n• Choice B is incorrect: sign error on the second distribution.\n• Choice C is incorrect: added 10 instead of subtracting 10.\n• Choice D is incorrect: added 2x instead of subtracting 2x.",
    "topic": "Algebra"
  },
  {
    "id": 3,
    "text": "What is the slope of the line given by the equation 6𝑥 - 2𝑦 = 10?",
    "options": [
      "-3",
      "-2",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Rewrite in slope-intercept form: -2𝑦 = -6𝑥 + 10 => 𝑦 = 3𝑥 - 5. The slope is 3.\n• Choice A is incorrect: sign error.\n• Choice B is incorrect: used the y coefficient.\n• Choice C is incorrect: calculation error.",
    "topic": "Algebra"
  },
  {
    "id": 4,
    "text": "If 𝑓(𝑥) = 2𝑥² - 5𝑥 + 3, what is the value of 𝑓(4)?",
    "options": [
      "11",
      "15",
      "19",
      "25"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute 𝑥 = 4: 𝑓(4) = 2(4²) - 5(4) + 3 = 2(16) - 20 + 3 = 32 - 20 + 3 = 15.\n• Choice A is incorrect: arithmetic error.\n• Choice C is incorrect: forgot to subtract 20.\n• Choice D is incorrect: calculated 2(4) + 3.",
    "topic": "Advanced Math"
  },
  {
    "id": 5,
    "text": "What are the solutions to the quadratic equation 𝑥² - 9𝑥 + 20 = 0?",
    "options": [
      "𝑥 = 4 and 𝑥 = 5",
      "𝑥 = -4 and 𝑥 = -5",
      "𝑥 = 2 and 𝑥 = 10",
      "𝑥 = -2 and 𝑥 = -10"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Factor: (𝑥 - 4)(𝑥 - 5) = 0 => 𝑥 = 4 or 𝑥 = 5.\n• Choice B is incorrect: (𝑥 + 4)(𝑥 + 5) = 𝑥² + 9𝑥 + 20.\n• Choice C is incorrect: 2 * 10 = 20, but 2 + 10 = 12 != 9.\n• Choice D is incorrect: sign error.",
    "topic": "Advanced Math"
  },
  {
    "id": 6,
    "text": "If 3^(2𝑥 - 1) = 27, what is the value of 𝑥?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Write 27 as a power of 3: 27 = 3³. Then 2𝑥 - 1 = 3 => 2𝑥 = 4 => 𝑥 = 2.\n• Choice A is incorrect: 3^(2(1) - 1) = 3¹ = 3 != 27.\n• Choice C is incorrect: 3^(2(3) - 1) = 3⁵ = 243 != 27.\n• Choice D is incorrect: calculation error.",
    "topic": "Advanced Math"
  },
  {
    "id": 7,
    "text": "A tablet computer that originally costs $300 is on sale for 20% off. If sales tax is 8% on the discounted price, what is the total cost?",
    "options": [
      "$240.00",
      "$259.20",
      "$264.00",
      "$276.00"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Discounted price = 300 * 0.80 = $240. With 8% tax: 240 * 1.08 = $259.20.\n• Choice A is incorrect: price before tax.\n• Choice C is incorrect: applied 8% to original $300.\n• Choice D is incorrect: calculation error.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 8,
    "text": "The mean score of 4 test scores is 85. If a fifth test score of 95 is added, what is the new mean of the 5 scores?",
    "options": [
      "86",
      "87",
      "88",
      "90"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Sum of 4 scores = 4 * 85 = 340. New sum = 340 + 95 = 435. New mean = 435 / 5 = 87.\n• Choice A is incorrect: arithmetic error.\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: average of 85 and 95 is 90 (unweighted).",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 9,
    "text": "What is the area of a circle whose diameter is 12 cm?",
    "options": [
      "12π cm²",
      "24π cm²",
      "36π cm²",
      "144π cm²"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Radius 𝑟 = 12 / 2 = 6 cm. Area = π𝑟² = π(6²) = 36π cm².\n• Choice A is incorrect: used diameter directly.\n• Choice B is incorrect: 2πr = 12π (circumference).\n• Choice D is incorrect: squared diameter without dividing by 2 (π * 12² = 144π).",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 10,
    "text": "In a right triangle, the two legs have lengths 7 and 24. What is the length of the hypotenuse?",
    "options": [
      "25",
      "26",
      "28",
      "31"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. By Pythagorean theorem: 𝑐 = √(7² + 24²) = √(49 + 576) = √625 = 25.\n• Choice B is incorrect: calculation error.\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: 7 + 24 = 31 (linear sum).",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 11,
    "text": "If 5(𝑥 - 3) = 3(𝑥 + 1) + 4, what is the value of 𝑥?",
    "options": [
      "8",
      "10",
      "11",
      "12"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Expand: 5𝑥 - 15 = 3𝑥 + 3 + 4 => 5𝑥 - 15 = 3𝑥 + 7 => 2𝑥 = 22 => 𝑥 = 11.\n• Choice A is incorrect: 5(5) != 3(9) + 4 (25 != 31).\n• Choice B is incorrect: 5(7) != 3(11) + 4 (35 != 37).\n• Choice D is incorrect: calculation error.",
    "topic": "Algebra"
  },
  {
    "id": 12,
    "text": "The system of equations 3𝑥 - 2𝑦 = 7 and 2𝑥 + 𝑦 = 14 has solution (𝑥, 𝑦). What is the value of 𝑥?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Multiply the second equation by 2: 4𝑥 + 2𝑦 = 28. Add to first equation: (3𝑥 - 2𝑦) + (4𝑥 + 2𝑦) = 7 + 28 => 7𝑥 = 35 => 𝑥 = 5.\n• Choice A is incorrect: 3(3) - 2(8) = -7 != 7.\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: calculation error.",
    "topic": "Algebra"
  },
  {
    "id": 13,
    "text": "What is the minimum value of the quadratic function 𝑓(𝑥) = (𝑥 - 4)² - 8?",
    "options": [
      "-8",
      "-4",
      "4",
      "8"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Since (𝑥 - 4)² ≥ 0 for all real 𝑥, the minimum value occurs when 𝑥 = 4, where 𝑓(4) = 0 - 8 = -8.\n• Choice B is incorrect: -4 is the negative of the x-coordinate.\n• Choice C is incorrect: x-value where minimum occurs, not minimum value itself.\n• Choice D is incorrect: sign error.",
    "topic": "Advanced Math"
  },
  {
    "id": 14,
    "text": "If (2𝑥 + 1)/(𝑥 - 3) = 5, what is the value of 𝑥?",
    "options": [
      "4",
      "16/3",
      "6",
      "17/3"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Cross-multiply: 2𝑥 + 1 = 5(𝑥 - 3) => 2𝑥 + 1 = 5𝑥 - 15 => 16 = 3𝑥 => 𝑥 = 16/3.\n• Choice A is incorrect: (9)/(1) = 9 != 5.\n• Choice C is incorrect: (13)/(3) != 5.\n• Choice D is incorrect: arithmetic error.",
    "topic": "Advanced Math"
  },
  {
    "id": 15,
    "text": "A bag contains 5 red balls, 7 blue balls, and 8 yellow balls. If one ball is chosen at random, what is the probability that it is red or yellow?",
    "options": [
      "5/20",
      "12/20",
      "13/20",
      "15/20"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Total balls = 5 + 7 + 8 = 20. Number of red or yellow balls = 5 + 8 = 13. Probability = 13/20.\n• Choice A is incorrect: probability of only red (5/20).\n• Choice B is incorrect: 5 + 7 = 12 (red or blue).\n• Choice D is incorrect: 7 + 8 = 15 (blue or yellow).",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 16,
    "text": "The price of a stock increased by 20% on Monday and then decreased by 10% on Tuesday. Relative to its original price, the final price was:",
    "options": [
      "8% higher",
      "10% higher",
      "12% higher",
      "15% higher"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Let original price = 100. Monday: 100 * 1.20 = 120. Tuesday: 120 * 0.90 = 108. Final price is 8% higher than original.\n• Choice B is incorrect: simply subtracted 20% - 10% = 10% (neglecting compound base).\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: calculation error.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 17,
    "text": "In the 𝑥𝑦-plane, what is the midpoint of the line segment connecting (4, -2) and (10, 8)?",
    "options": [
      "(6, 3)",
      "(7, 3)",
      "(7, 5)",
      "(14, 6)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Midpoint formula: ((𝑥1 + 𝑥2)/2, (𝑦1 + 𝑦2)/2) = ((4 + 10)/2, (-2 + 8)/2) = (14/2, 6/2) = (7, 3).\n• Choice A is incorrect: calculation error.\n• Choice C is incorrect: calculation error on y.\n• Choice D is incorrect: forgot to divide by 2.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 18,
    "text": "If cos(𝑥) = 12/13 for an acute angle 𝑥, what is the value of tan(𝑥)?",
    "options": [
      "5/12",
      "5/13",
      "12/5",
      "13/5"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. For acute angle x, opposite side = √(13² - 12²) = √(169 - 144) = √25 = 5. Therefore tan(𝑥) = opposite / adjacent = 5/12.\n• Choice B is incorrect: sin(x) = 5/13.\n• Choice C is incorrect: cot(x) = 12/5.\n• Choice D is incorrect: csc(x) = 13/5.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 19,
    "text": "If 4(3𝑥 + 2) = 56, what is the value of 3𝑥?",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Divide by 4: 3𝑥 + 2 = 14 => 3𝑥 = 12.\n• Choice A is incorrect: arithmetic error.\n• Choice C is incorrect: value of 3x + 2.\n• Choice D is incorrect: added 2 instead of subtracting.",
    "topic": "Algebra"
  },
  {
    "id": 20,
    "text": "Which of the following lines is perpendicular to the line 𝑦 = -2𝑥 + 5?",
    "options": [
      "𝑦 = -2𝑥 - 3",
      "𝑦 = 2𝑥 + 5",
      "𝑦 = (1/2)𝑥 + 1",
      "𝑦 = (-1/2)𝑥 + 4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Perpendicular lines have negative reciprocal slopes. The negative reciprocal of -2 is +1/2. Thus 𝑦 = (1/2)𝑥 + 1 is perpendicular.\n• Choice A is incorrect: parallel line (slope -2).\n• Choice B is incorrect: negated without inverting.\n• Choice D is incorrect: inverted without negating sign.",
    "topic": "Algebra"
  },
  {
    "id": 21,
    "text": "If 𝑥² - 14𝑥 + 49 = 0, what is the value of 𝑥?",
    "options": [
      "-7",
      "0",
      "7",
      "14"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Factor as a perfect square: (𝑥 - 7)² = 0 => 𝑥 = 7.\n• Choice A is incorrect: sign error (𝑥 + 7)² = 𝑥² + 14𝑥 + 49.\n• Choice B is incorrect: 0² - 14(0) + 49 = 49 != 0.\n• Choice D is incorrect: calculation error.",
    "topic": "Advanced Math"
  },
  {
    "id": 22,
    "text": "If a line passes through (0, 4) and has a slope of -3/2, what is the equation of the line?",
    "options": [
      "𝑦 = (-3/2)𝑥 + 4",
      "𝑦 = (3/2)𝑥 + 4",
      "𝑦 = (-3/2)𝑥 - 4",
      "𝑦 = (-2/3)𝑥 + 4"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Using slope-intercept form 𝑦 = 𝑚𝑥 + 𝑏 with 𝑚 = -3/2 and 𝑏 = 4 yields 𝑦 = (-3/2)𝑥 + 4.\n• Choice B is incorrect: positive slope.\n• Choice C is incorrect: negative y-intercept.\n• Choice D is incorrect: reciprocal slope.",
    "topic": "Algebra"
  },
  {
    "id": 23,
    "text": "A population of bacteria doubles every 4 hours. If the initial population is 500, which function represents the population 𝑃(𝑡) after 𝑡 hours?",
    "options": [
      "𝑃(𝑡) = 500(2)^(4𝑡)",
      "𝑃(𝑡) = 500(2)^(𝑡/4)",
      "𝑃(𝑡) = 500(4)^(2𝑡)",
      "𝑃(𝑡) = 500 + 2^(𝑡/4)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Exponential growth doubling every 4 hours is modeled by 𝑃(𝑡) = 𝑃0(2)^(𝑡/𝑑) = 500(2)^(𝑡/4).\n• Choice A is incorrect: multiplies exponent by 4 instead of dividing.\n• Choice C is incorrect: base 4 used incorrectly.\n• Choice D is incorrect: additive structure.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 24,
    "text": "If 4/(3𝑥) = 8/15, what is the value of 𝑥?",
    "options": [
      "2",
      "5/2",
      "3",
      "10/3"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Cross-multiply: 4(15) = 8(3𝑥) => 60 = 24𝑥 => 𝑥 = 60/24 = 5/2 (or 2.5).\n• Choice A is incorrect: 4/(3*2) = 4/6 = 2/3 != 8/15.\n• Choice C is incorrect: 4/(9) != 8/15.\n• Choice D is incorrect: calculation error.",
    "topic": "Algebra"
  },
  {
    "id": 25,
    "text": "What is the total surface area of a cube with edge length 5 cm?",
    "options": [
      "25 cm²",
      "100 cm²",
      "125 cm²",
      "150 cm²"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. A cube has 6 congruent faces: Surface Area = 6 * 𝑠² = 6 * (5²) = 6 * 25 = 150 cm².\n• Choice A is incorrect: area of one face (25 cm²).\n• Choice B is incorrect: 4 * 25 = 100 cm² (lateral area only).\n• Choice C is incorrect: volume of the cube (5³ = 125 cm³).",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 26,
    "text": "If -3𝑥 + 7 ≤ -8, which inequality represents all solutions for 𝑥?",
    "options": [
      "𝑥 ≤ 5",
      "𝑥 ≥ 5",
      "𝑥 ≤ -5",
      "𝑥 ≥ -5"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Subtract 7: -3𝑥 ≤ -15. Divide by -3 and reverse the inequality sign: 𝑥 ≥ 5.\n• Choice A is incorrect: forgot to flip inequality when dividing by negative.\n• Choice C is incorrect: sign error on constant.\n• Choice D is incorrect: sign error on constant.",
    "topic": "Algebra"
  },
  {
    "id": 27,
    "text": "The function ℎ is defined by ℎ(𝑥) = 4𝑥 - 7. If ℎ(𝑘) = 25, what is the value of 𝑘?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 4𝑘 - 7 = 25 => 4𝑘 = 32 => 𝑘 = 8.\n• Choice A is incorrect: 4(6) - 7 = 17 != 25.\n• Choice B is incorrect: 4(7) - 7 = 21 != 25.\n• Choice D is incorrect: 4(9) - 7 = 29 != 25.",
    "topic": "Algebra"
  },
  {
    "id": 28,
    "text": "What is the 𝑦-intercept of the line that passes through (2, 5) with slope 4?",
    "options": [
      "(0, -3)",
      "(0, 3)",
      "(0, -5)",
      "(0, 5)"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In 𝑦 = 𝑚𝑥 + 𝑏: 5 = 4(2) + 𝑏 => 5 = 8 + 𝑏 => 𝑏 = -3. The y-intercept is (0, -3).\n• Choice B is incorrect: sign error.\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: used y-coordinate as intercept.",
    "topic": "Algebra"
  },
  {
    "id": 29,
    "text": "If √(2𝑥 + 1) = 5, what is the value of 𝑥?",
    "options": [
      "10",
      "12",
      "14",
      "24"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Square both sides: 2𝑥 + 1 = 25 => 2𝑥 = 24 => 𝑥 = 12.\n• Choice A is incorrect: √(2(10) + 1) = √21 != 5.\n• Choice C is incorrect: √(2(14) + 1) = √29 != 5.\n• Choice D is incorrect: forgot to divide 24 by 2.",
    "topic": "Advanced Math"
  },
  {
    "id": 30,
    "text": "A recipe that serves 4 people requires 6 cups of flour. How many cups of flour are needed to serve 10 people?",
    "options": [
      "12",
      "15",
      "18",
      "20"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Flour per person = 6 / 4 = 1.5 cups. For 10 people: 10 * 1.5 = 15 cups.\n• Choice A is incorrect: calculation error.\n• Choice C is incorrect: 3 * 6 = 18.\n• Choice D is incorrect: calculation error.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 31,
    "text": "In a right triangle, one acute angle measures 35°. What is the measure of the other acute angle?",
    "options": [
      "45°",
      "55°",
      "65°",
      "145°"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In a right triangle, the two acute angles are complementary: 90° - 35° = 55°.\n• Choice A is incorrect: 90 - 45 = 45.\n• Choice C is incorrect: 90 - 25 = 65.\n• Choice D is incorrect: 180 - 35 = 145 (supplementary).",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 32,
    "text": "If (3𝑥³)(4𝑥⁵) = 𝑎𝑥ᵇ, what is the value of 𝑎 + 𝑏?",
    "options": [
      "15",
      "19",
      "20",
      "27"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Multiply coefficients: 𝑎 = 3 * 4 = 12. Add exponents: 𝑏 = 3 + 5 = 8. Thus 𝑎 + 𝑏 = 12 + 8 = 20.\n• Choice A is incorrect: 7 + 8 = 15.\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: 12 + 15 = 27.",
    "topic": "Advanced Math"
  },
  {
    "id": 33,
    "text": "If |3𝑥 - 6| = 12, what is the sum of all possible solutions for 𝑥?",
    "options": [
      "0",
      "2",
      "4",
      "6"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Case 1: 3𝑥 - 6 = 12 => 3𝑥 = 18 => 𝑥 = 6. Case 2: 3𝑥 - 6 = -12 => 3𝑥 = -6 => 𝑥 = -2. Sum = 6 + (-2) = 4.\n• Choice A is incorrect: sum of symmetric roots centered at 0.\n• Choice B is incorrect: arithmetic error.\n• Choice D is incorrect: only counted positive root.",
    "topic": "Algebra"
  },
  {
    "id": 34,
    "text": "What is the 𝑥-intercept of the line 2𝑥 + 5𝑦 = 30?",
    "options": [
      "(0, 6)",
      "(6, 0)",
      "(15, 0)",
      "(0, 15)"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Set 𝑦 = 0: 2𝑥 = 30 => 𝑥 = 15. The x-intercept is (15, 0).\n• Choice A is incorrect: this is the y-intercept (0, 6).\n• Choice B is incorrect: swapped x and y values.\n• Choice D is incorrect: placed 15 on y-axis.",
    "topic": "Algebra"
  },
  {
    "id": 35,
    "text": "What is the sum of the roots of the quadratic equation 2𝑥² - 8𝑥 + 5 = 0?",
    "options": [
      "-4",
      "2.5",
      "4",
      "8"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. By Vieta's formulas, sum of roots = -𝑏/𝑎 = -(-8)/2 = 8/2 = 4.\n• Choice A is incorrect: sign error (-4).\n• Choice B is incorrect: product of roots 𝑐/𝑎 = 5/2 = 2.5.\n• Choice D is incorrect: forgot to divide by 𝑎 = 2.",
    "topic": "Advanced Math"
  },
  {
    "id": 36,
    "text": "A car travels 180 miles in 3 hours. At this constant speed, how many miles will it travel in 5 hours?",
    "options": [
      "240",
      "270",
      "300",
      "360"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Speed = 180 / 3 = 60 mph. Distance in 5 hours = 60 * 5 = 300 miles.\n• Choice A is incorrect: 60 * 4 = 240.\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: 60 * 6 = 360.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 37,
    "text": "What is the area of a square with a diagonal of length 10 cm?",
    "options": [
      "25 cm²",
      "50 cm²",
      "75 cm²",
      "100 cm²"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Area of a square from diagonal 𝑑 is 𝐴 = 𝑑² / 2 = 10² / 2 = 100 / 2 = 50 cm².\n• Choice A is incorrect: 50 / 2 = 25.\n• Choice C is incorrect: calculation error.\n• Choice D is incorrect: 𝑑² without dividing by 2.",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 38,
    "text": "If 𝑓(𝑥) = 3𝑥 - 2 and 𝑔(𝑥) = 2𝑥 + 5, what is the value of 𝑔(𝑓(2))?",
    "options": [
      "9",
      "11",
      "13",
      "17"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Evaluate 𝑓(2) = 3(2) - 2 = 6 - 2 = 4. Then 𝑔(4) = 2(4) + 5 = 8 + 5 = 13.\n• Choice A is incorrect: calculation error.\n• Choice B is incorrect: 𝑔(2) = 9.\n• Choice D is incorrect: 𝑓(𝑔(2)) = 𝑓(9) = 27 - 2 = 25.",
    "topic": "Advanced Math"
  },
  {
    "id": 39,
    "text": "If 3(2𝑥 - 1) + 4 = 25, what is the value of 𝑥?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Expand: 6𝑥 - 3 + 4 = 25 => 6𝑥 + 1 = 25 => 6𝑥 = 24 => 𝑥 = 4.\n• Choice A is incorrect: 3(5) + 4 = 19 != 25.\n• Choice C is incorrect: 3(9) + 4 = 31 != 25.\n• Choice D is incorrect: calculation error.",
    "topic": "Algebra"
  },
  {
    "id": 40,
    "text": "Which of the following represents the line passing through (0, -2) and (3, 4)?",
    "options": [
      "𝑦 = 2𝑥 - 2",
      "𝑦 = 2𝑥 + 2",
      "𝑦 = -2𝑥 - 2",
      "𝑦 = (1/2)𝑥 - 2"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Slope 𝑚 = (4 - (-2))/(3 - 0) = 6/3 = 2. Intercept 𝑏 = -2. Thus 𝑦 = 2𝑥 - 2.\n• Choice B is incorrect: wrong sign on intercept.\n• Choice C is incorrect: negative slope.\n• Choice D is incorrect: reciprocal slope.",
    "topic": "Algebra"
  },
  {
    "id": 41,
    "text": "If 3𝑥 + 2𝑦 = 18 and 𝑥 = 4, what is the value of 𝑦?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute 𝑥 = 4: 3(4) + 2𝑦 = 18 => 12 + 2𝑦 = 18 => 2𝑦 = 6 => 𝑦 = 3.\n• Choice A is incorrect: 12 + 2(2) = 16 != 18.\n• Choice C is incorrect: 12 + 2(4) = 20 != 18.\n• Choice D is incorrect: 12 + 2(5) = 22 != 18.",
    "topic": "Algebra"
  },
  {
    "id": 42,
    "text": "A set of data consists of the values 4, 8, 8, 10, 12, 14, 14, 14, 18. What is the mode of the dataset?",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The mode is the value that appears with highest frequency. 14 appears 3 times, which is more than any other value.\n• Choice A is incorrect: 8 appears only 2 times.\n• Choice B is incorrect: 10 appears 1 time.\n• Choice C is incorrect: 12 is the median, not the mode.",
    "topic": "Problem Solving & Data Analysis"
  },
  {
    "id": 43,
    "text": "What is the volume of a sphere with radius 3 cm?",
    "options": [
      "12π cm³",
      "24π cm³",
      "36π cm³",
      "108π cm³"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Volume of a sphere = (4/3)π𝑟³ = (4/3)π(3³) = (4/3)π(27) = 36π cm³.\n• Choice A is incorrect: 4πr = 12π.\n• Choice B is incorrect: calculation error.\n• Choice D is incorrect: 4πr³ = 108π (forgot factor of 1/3).",
    "topic": "Geometry & Trigonometry"
  },
  {
    "id": 44,
    "text": "If 2𝑥² - 50 = 0, what is the positive value of 𝑥?",
    "options": [
      "5",
      "10",
      "25",
      "50"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 2𝑥² = 50 => 𝑥² = 25 => 𝑥 = 5 (positive root).\n• Choice B is incorrect: 2(10²) = 200 != 50.\n• Choice C is incorrect: 𝑥² = 25, so 𝑥 = 5, not 25.\n• Choice D is incorrect: equals the constant.",
    "topic": "Advanced Math"
  }
];
