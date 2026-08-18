// =============================================
// Digital SAT Practice Test - Math Section (MT 1)
// 54 Questions (Module 1: 27 Qs, Module 2: 27 Qs)
// Format: Digital SAT Math Practice Test (with LaTeX)
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "module": 1,
    "module_q": 1,
    "useImage": true,
    "imageKey": "m1_q1_bargraph",
    "text": "A group of voters chose among five candidate designs for a new town logo. The bar graph shows the number of votes for each of the five designs. How many voters chose design 4?",
    "options": [
      "15",
      "35",
      "40",
      "50"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. According to the bar graph, the vertical axis represents the number of votes, and the horizontal axis represents the five designs. Locating design 4 on the horizontal axis, the bar for design 4 is the tallest bar and reaches the 50 mark on the vertical axis. Therefore, 50 voters chose design 4.\n\nDistractor Explanations:\n- Choice A (15) is incorrect; this corresponds to design 3.\n- Choice B (35) is incorrect; this corresponds to design 5.\n- Choice C (40) is incorrect; this corresponds to design 2.",
    "topic": "Data Interpretation"
  },
  {
    "id": 2,
    "module": 1,
    "module_q": 2,
    "useImage": false,
    "text": "What percentage of $500$ is $150$?",
    "options": [
      "15%",
      "30%",
      "33.3%",
      "300%"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. To find what percentage of 500 is equal to 150, divide 150 by 500 and multiply by 100%:\nPercentage = (150 / 500) × 100% = 0.30 × 100% = 30%.\n\nDistractor Explanations:\n- Choice A (15%) is incorrect; 15% of 500 is 0.15 × 500 = 75.\n- Choice C (33.3%) is incorrect; 33.3% is approximately 1/3 of 500 (≈166.7).\n- Choice D (300%) is incorrect; 300% of 500 is 3 × 500 = 1,500.",
    "topic": "Percentages"
  },
  {
    "id": 3,
    "module": 1,
    "module_q": 3,
    "useImage": false,
    "text": "$\\frac{y}{15} = 42$\n\nWhat is a solution to the given equation?",
    "options": [
      "7",
      "57",
      "630",
      "840"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. To solve for y in the equation y / 15 = 42, multiply both sides of the equation by 15:\ny = 42 × 15 = 630.\n\nDistractor Explanations:\n- Choice A (7) is incorrect; this results from dividing 42 by 6 or other operations.\n- Choice B (57) is incorrect; this results from adding 42 + 15 instead of multiplying.\n- Choice D (840) is incorrect; 840 = 42 × 20.",
    "topic": "Linear Equations in One Variable"
  },
  {
    "id": 4,
    "module": 1,
    "module_q": 4,
    "useImage": false,
    "text": "5 more than 6 times a number $n$ is equal to 77. Which equation represents this situation?",
    "options": [
      "$5(6n) = 77$",
      "$6 = 77 + 5n$",
      "$5 + 6n = 77$",
      "$6n + 5n = 77$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. '6 times a number n' is written as 6n. '5 more than' this quantity means adding 5, which gives 5 + 6n (or 6n + 5). Setting this expression equal to 77 gives the equation 5 + 6n = 77.\n\nDistractor Explanations:\n- Choice A represents 5 multiplied by 6n.\n- Choice B incorrectly equates 6 to 77 + 5n.\n- Choice D adds 6n and 5n rather than 6n and the constant 5.",
    "topic": "Linear Equation Modeling"
  },
  {
    "id": 5,
    "module": 1,
    "module_q": 5,
    "useImage": false,
    "text": "Elias deposits a fixed amount into his savings account each month. The function $g(m) = 200 + 40m$ gives the amount, in dollars, in Elias's account after $m$ monthly deposits. What is the best interpretation of $40$ in this context?",
    "options": [
      "With each monthly deposit, the amount in Elias's account increased by $\\$40$.",
      "Before Elias made any monthly deposits, the account balance was $\\$40$.",
      "After 1 monthly deposit, the account balance was $\\$40$.",
      "Elias made a total of 40 monthly deposits."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The given function g(m) = 200 + 40m is in slope-intercept form, where m represents the number of monthly deposits and g(m) represents the account balance in dollars. The coefficient 40 is the slope (rate of change), which indicates that each monthly deposit increases the account balance by $40.\n\nDistractor Explanations:\n- Choice B is incorrect; the initial amount before any deposits (m = 0) is $200, not $40.\n- Choice C is incorrect; after 1 monthly deposit (m = 1), the balance is g(1) = 200 + 40(1) = $240.\n- Choice D is incorrect; m is the variable representing the number of deposits, not fixed at 40.",
    "topic": "Linear Functions & Interpretation"
  },
  {
    "id": 6,
    "module": 1,
    "module_q": 6,
    "useImage": false,
    "text": "A customer spent $\\$32$ to purchase apples at $\\$4$ per pound. How many pounds of apples did the customer purchase?",
    "options": [
      "8",
      "12",
      "28",
      "128"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Let p be the number of pounds of apples purchased. The total cost is equal to the unit price multiplied by the number of pounds:\nTotal Cost = $4 × p\n32 = 4p\np = 32 / 4 = 8 pounds.\n\nDistractor Explanations:\n- Choice B (12) is incorrect; 12 × 4 = $48.\n- Choice C (28) is incorrect; 28 results from subtracting 32 - 4.\n- Choice D (128) is incorrect; 128 results from multiplying 32 × 4.",
    "topic": "Unit Rates & Proportions"
  },
  {
    "id": 7,
    "module": 1,
    "module_q": 7,
    "useImage": false,
    "text": "Clara bought 8 dining chairs that were each the same price. She used a coupon for $\\$50$ off the entire purchase. The cost for the entire purchase after using the coupon was $\\$110$. What was the original price, in dollars, for 1 chair?",
    "options": [
      "$\\$15$",
      "$\\$20$",
      "$\\$25$",
      "$\\$30$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let c be the original price of 1 chair. The total price for 8 chairs before the discount is 8c. After applying the $50 coupon, the cost is:\n8c - 50 = 110\nAdd 50 to both sides:\n8c = 160\nDivide both sides by 8:\nc = 160 / 8 = $20.\nTherefore, the original price of 1 chair was $20.\n\nDistractor Explanations:\n- Choice A ($15) gives 8(15) - 50 = 120 - 50 = $70 ≠ $110.\n- Choice C ($25) gives 8(25) - 50 = 200 - 50 = $150 ≠ $110.\n- Choice D ($30) gives 8(30) - 50 = 240 - 50 = $190 ≠ $110.",
    "topic": "Linear Equations in One Variable"
  },
  {
    "id": 8,
    "module": 1,
    "module_q": 8,
    "useImage": false,
    "text": "For the linear function $g$, the table shows three values of $x$ and their corresponding values of $g(x)$: $(0, 15)$, $(1, 20)$, $(2, 25)$. Which equation defines $g(x)$?",
    "options": [
      "$g(x) = 5x + 15$",
      "$g(x) = 15x + 5$",
      "$g(x) = 20x + 15$",
      "$g(x) = 5x + 20$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A linear function can be written as g(x) = mx + b. The y-intercept occurs at x = 0, where g(0) = 15, so b = 15. The slope m is calculated using the points (0, 15) and (1, 20):\nm = (20 - 15) / (1 - 0) = 5 / 1 = 5.\nThus, g(x) = 5x + 15. Checking for x = 2: g(2) = 5(2) + 15 = 25, which matches the table.\n\nDistractor Explanations:\n- Choice B reverses the slope and y-intercept.\n- Choice C incorrectly uses 20 as the slope.\n- Choice D incorrectly uses 20 as the y-intercept.",
    "topic": "Linear Functions"
  },
  {
    "id": 9,
    "module": 1,
    "module_q": 9,
    "useImage": false,
    "text": "Right triangles $ABC$ and $DEF$ are similar, where $B$ corresponds to $E$. If the measure of angle $A$ is $22^\\circ$, what is the measure of angle $D$?",
    "options": [
      "$22^\\circ$",
      "$68^\\circ$",
      "$90^\\circ$",
      "$158^\\circ$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In similar triangles, corresponding angles are equal in measure. Since triangle ABC is similar to triangle DEF, vertex A corresponds to vertex D, and vertex B corresponds to vertex E (the right angles). Therefore, the measure of angle D equals the measure of angle A, which is 22°.\n\nDistractor Explanations:\n- Choice B (68°) is the complementary angle (90° - 22° = 68°), which corresponds to angles C and F.\n- Choice C (90°) is the measure of the right angles B and E.\n- Choice D (158°) is the supplementary angle (180° - 22° = 158°).",
    "topic": "Similar Triangles & Angles"
  },
  {
    "id": 10,
    "module": 1,
    "module_q": 10,
    "useImage": true,
    "imageKey": "m1_q10_scatterplot",
    "text": "The scatterplot shows the relationship between two variables, $a$ and $b$. Which of the following equations is the most appropriate linear model for the data shown?",
    "options": [
      "$b = 1.2 + 8.5a$",
      "$b = 1.2 - 8.5a$",
      "$b = 8.5 + 1.2a$",
      "$b = 8.5 - 1.2a$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In the scatterplot, the data points and trend line display an upward positive slope from bottom-left to top-right, showing that as the variable a increases, the variable b also increases. A linear model for this data must have a positive slope. Choice C, b = 8.5 + 1.2a, is the only model with a positive slope (m = +1.2) that appropriately models this upward trend.\n\nDistractor Explanations:\n- Choices B and D are incorrect because they have negative slopes (-8.5 and -1.2), which contradict the positive upward trend in the scatterplot.\n- Choice A has a slope of +8.5 with a y-intercept of 1.2, which is far too steep for the data shown.",
    "topic": "Scatterplots & Linear Modeling"
  },
  {
    "id": 11,
    "module": 1,
    "module_q": 11,
    "useImage": false,
    "text": "$3.5c + 7d = 105$\n\nThe given equation describes the relationship between the number of cats, $c$, and the number of dogs, $d$, that can be cared for at an animal shelter on a given day. If the shelter cares for 10 dogs on a given day, how many cats can it care for on this day?",
    "options": [
      "5",
      "10",
      "20",
      "35"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute d = 10 into the given equation:\n3.5c + 7(10) = 105\n3.5c + 70 = 105\nSubtract 70 from both sides:\n3.5c = 35\nDivide both sides by 3.5:\nc = 35 / 3.5 = 10.\nTherefore, the shelter can care for 10 cats on that day.\n\nDistractor Explanations:\n- Choice A (5) gives 3.5(5) + 70 = 17.5 + 70 = 87.5 ≠ 105.\n- Choice C (20) gives 3.5(20) + 70 = 70 + 70 = 140 ≠ 105.\n- Choice D (35) is the value of 3.5c before dividing by 3.5.",
    "topic": "Linear Equations in Two Variables"
  },
  {
    "id": 12,
    "module": 1,
    "module_q": 12,
    "useImage": true,
    "imageKey": "m1_q12_line",
    "text": "What is an equation of the graph shown?",
    "options": [
      "$y = -3x - 6$",
      "$y = x - 6$",
      "$y = 3x - 6$",
      "$y = 3x + 6$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In the coordinate plane graph, the line slopes downward from upper-left to lower-right, which indicates a negative slope. It crosses the vertical y-axis at (0, -6) (y-intercept b = -6) and crosses the horizontal x-axis at (-2, 0). The slope m is calculated as:\nm = (0 - (-6)) / (-2 - 0) = 6 / -2 = -3.\nSubstituting the slope m = -3 and y-intercept b = -6 into the slope-intercept equation y = mx + b yields y = -3x - 6 (Choice A).\n\nDistractor Explanations:\n- Choices B, C, and D are incorrect because they all have positive slopes (m = +1 or m = +3), which represent lines that increase from lower-left to upper-right, contradicting the downward-sloping line shown in the graph.",
    "topic": "Linear Equations & Graphs"
  },
  {
    "id": 13,
    "module": 1,
    "module_q": 13,
    "useImage": false,
    "text": "If $x = \\frac{9}{4}$, what is the value of $12x$?",
    "options": [
      "24",
      "27",
      "36",
      "108"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute x = 9/4 into the expression 12x:\n12x = 12 × (9/4) = (12 / 4) × 9 = 3 × 9 = 27.\n\nDistractor Explanations:\n- Choice A (24) is 12 × 2.\n- Choice C (36) is 12 × 3.\n- Choice D (108) is 12 × 9 without dividing by 4.",
    "topic": "Algebraic Evaluation & Fractions"
  },
  {
    "id": 14,
    "module": 1,
    "module_q": 14,
    "useImage": false,
    "text": "$15x + y = 30$\n$5x + y = 40$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    "options": [
      "-1",
      "35",
      "45",
      "55"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Subtract the second equation from the first equation to eliminate y:\n(15x + y) - (5x + y) = 30 - 40\n10x = -10\nx = -1.\nSubstitute x = -1 into the second equation:\n5(-1) + y = 40\n-5 + y = 40\ny = 40 + 5 = 45.\nCheck with the first equation: 15(-1) + 45 = -15 + 45 = 30, which confirms y = 45.\n\nDistractor Explanations:\n- Choice A (-1) is the value of x, not y.\n- Choice B (35) results from 40 - 5 (assuming x = +1).\n- Choice D (55) results from an arithmetic error.",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 15,
    "module": 1,
    "module_q": 15,
    "useImage": false,
    "text": "Line $k$ in the $xy$-plane has a slope of $\\frac{1}{4}$ and passes through the point $(8, 12)$. Which equation defines line $k$?",
    "options": [
      "$y = \\frac{1}{4}x + 10$",
      "$y = 4x + 12$",
      "$y = \\frac{1}{4}x + 8$",
      "$y = \\frac{1}{4}x + 14$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Using point-slope form y - y₁ = m(x - x₁) with slope m = 1/4 and point (x₁, y₁) = (8, 12):\ny - 12 = 1/4(x - 8)\ny - 12 = 1/4 x - 2\ny = 1/4 x - 2 + 12\ny = 1/4 x + 10.\n\nDistractor Explanations:\n- Choice B uses the reciprocal slope 4 instead of 1/4.\n- Choice C sets the y-intercept to 8 (the x-coordinate of the point).\n- Choice D incorrectly adds 2 to 12 instead of subtracting 2.",
    "topic": "Linear Equations & Point-Slope Form"
  },
  {
    "id": 16,
    "module": 1,
    "module_q": 16,
    "useImage": false,
    "text": "The function $f(x) = 300(1.045)^x$ models the value, in dollars, of a certain investment account by the end of each year from 1960 through 1980, where $x$ is the number of years after 1960. Which of the following is the best interpretation of “$f(10)$ is approximately equal to $465$” in this context?",
    "options": [
      "The value of the account is estimated to be approximately 10 dollars greater in 1970 than in 1960.",
      "The value of the account is estimated to be approximately 465 dollars in 1970.",
      "The value, in dollars, of the account is estimated to be approximately 10 times greater in 1970 than in 1960.",
      "The value of the account is estimated to increase by approximately 465 dollars every 10 years between 1960 and 1980."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In the function f(x), x is defined as the number of years after 1960. When x = 10, the corresponding calendar year is 1960 + 10 = 1970. The function output f(10) represents the estimated dollar value of the investment account in that year. Thus, f(10) ≈ 465 means that the value of the account is estimated to be approximately $465 in 1970.\n\nDistractor Explanations:\n- Choice A confuses the 10-year input with a $10 dollar increase.\n- Choice C confuses the input 10 with a multiplier of 10 times.\n- Choice D misinterprets the single function value as a recurring 10-year rate of increase.",
    "topic": "Exponential Functions & Interpretation"
  },
  {
    "id": 17,
    "module": 1,
    "module_q": 17,
    "useImage": false,
    "text": "For a certain rectangular region, the ratio of its length to its width is $40$ to $12$. If the width of the rectangular region increases by $6$ units, how must the length change to maintain this ratio?",
    "options": [
      "It must decrease by 20 units.",
      "It must increase by 20 units.",
      "It must decrease by 6 units.",
      "It must increase by 6 units."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The ratio of length (L) to width (W) is L / W = 40 / 12 = 10 / 3, which gives L = (10/3)W. For any change in width ΔW, the required change in length ΔL to preserve the exact ratio is:\nΔL = (10/3) × ΔW.\nGiven that the width increases by 6 units (ΔW = +6):\nΔL = (10/3) × 6 = 20 units.\nTherefore, the length must increase by 20 units.\n\nDistractor Explanations:\n- Choice A incorrectly states a decrease rather than an increase.\n- Choices C and D incorrectly assume the length changes additively by the same amount (6 units) as the width.",
    "topic": "Ratios & Proportions"
  },
  {
    "id": 18,
    "module": 1,
    "module_q": 18,
    "useImage": false,
    "text": "Square A has a side length of $y$ inches. Square B has a perimeter that is $120$ inches greater than the perimeter of square A. The function $g$ gives the area of square B, in square inches. Which of the following defines $g$?",
    "options": [
      "$g(y) = (y + 30)^2$",
      "$g(y) = (y + 120)^2$",
      "$g(y) = (120y + 30)^2$",
      "$g(y) = (120y + 120)^2$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The perimeter of square A with side length y is 4y. The perimeter of square B is 120 inches greater, so Perimeter(B) = 4y + 120. Since all 4 sides of a square are equal, the side length of square B is:\nSide length of B = (4y + 120) / 4 = y + 30.\nThe area of square B is the square of its side length, which gives g(y) = (y + 30)².\n\nDistractor Explanations:\n- Choice B forgets to divide 120 by 4 to get the side length increase.\n- Choices C and D introduce incorrect multipliers of 120 on the variable y.",
    "topic": "Geometry & Quadratic Function Modeling"
  },
  {
    "id": 19,
    "module": 1,
    "module_q": 19,
    "useImage": false,
    "text": "$10a = \\frac{3b + 12}{5c}$\n\nThe given equation relates the distinct positive real numbers $a$, $b$, and $c$. Which equation correctly expresses $b$ in terms of $a$ and $c$?",
    "options": [
      "$b = 50ac - 12$",
      "$b = \\frac{50ac - 12}{3}$",
      "$b = 15ac - 4$",
      "$b = \\frac{10ac - 12}{3}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Multiply both sides by 5c to clear the fraction:\n10a × 5c = 3b + 12\n50ac = 3b + 12\nSubtract 12 from both sides:\n50ac - 12 = 3b\nDivide both sides by 3:\nb = (50ac - 12) / 3.\n\nDistractor Explanations:\n- Choice A forgets to divide by 3.\n- Choice C divides 50ac incorrectly by 3 as 15.\n- Choice D forgets to multiply 10a by 5 (multiplying only by c).",
    "topic": "Isolating Quantities & Algebraic Manipulation"
  },
  {
    "id": 20,
    "module": 1,
    "module_q": 20,
    "useImage": false,
    "text": "Point $O$ is the center of a circle. The measure of arc $XY$ on this circle is $110^\\circ$. What is the measure, in degrees, of its associated angle $XOY$?",
    "options": [
      "$55^\\circ$",
      "$70^\\circ$",
      "$110^\\circ$",
      "$220^\\circ$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Angle XOY is a central angle because its vertex is located at the circle's center O and its sides are radii of the circle. By fundamental circle geometry theorems, the measure of a central angle is equal to the degree measure of its intercepted arc. Since arc XY measures 110°, the central angle XOY measures 110°.\n\nDistractor Explanations:\n- Choice A (55°) is the measure of an inscribed angle intercepting the same arc (110° / 2 = 55°).\n- Choice B (70°) is the supplementary angle (180° - 110° = 70°).\n- Choice D (220°) is double the central angle measure.",
    "topic": "Circle Theorems & Central Angles"
  },
  {
    "id": 21,
    "module": 1,
    "module_q": 21,
    "useImage": false,
    "text": "The expression $\\frac{(x^4)(x^{36})}{(x^5)(x^7)}$ is equivalent to $x^{a/b}$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$?",
    "options": [
      "24",
      "28",
      "29",
      "56"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Simplify using exponent rules:\nNumerator: (x^4)(x^36) = x^(4 + 36) = x^40.\nDenominator: (x^5)(x^7) = x^(5 + 7) = x^12.\nDivide numerator by denominator: x^40 / x^12 = x^(40 - 12) = x^28.\nExpressing 28 as a fraction a/b in simplest form with positive integers gives a/b = 28/1, so a = 28 and b = 1.\nTherefore, a + b = 28 + 1 = 29.\n\nDistractor Explanations:\n- Choice A (24) is 36 - 12.\n- Choice B (28) is the value of a alone without adding b = 1.\n- Choice D (56) is 28 × 2.",
    "topic": "Exponents & Radicals"
  },
  {
    "id": 22,
    "module": 1,
    "module_q": 22,
    "useImage": false,
    "text": "A right triangle has sides of length $3\\sqrt{3}$, $4\\sqrt{3}$, and $\\sqrt{75}$ units. What is the area of the triangle, in square units?",
    "options": [
      "$7\\sqrt{3} + \\sqrt{75}$",
      "18",
      "36",
      "$12\\sqrt{3}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. First simplify √75: √75 = √(25 × 3) = 5√3. The three side lengths are 3√3, 4√3, and 5√3. Since (3√3)² + (4√3)² = 27 + 48 = 75 = (5√3)², this is a right triangle with legs of length 3√3 and 4√3, and hypotenuse 5√3. The area of the right triangle is:\nArea = (1/2) × base × height = (1/2) × (3√3) × (4√3) = (1/2) × 12 × 3 = 18 square units.\n\nDistractor Explanations:\n- Choice A is the perimeter of the triangle, not its area.\n- Choice C (36) forgets to multiply by 1/2 in the area formula.\n- Choice D (12√3) is an arithmetic error in multiplying radicals.",
    "topic": "Right Triangles & Radicals"
  },
  {
    "id": 23,
    "module": 1,
    "module_q": 23,
    "useImage": false,
    "text": "The expression $5x^2 + cx - 60$, where $c$ is a constant, can be rewritten as $(mx + p)(x + q)$, where $m$, $p$, and $q$ are integer constants. Which of the following must be an integer?",
    "options": [
      "$\\frac{c}{m}$",
      "$\\frac{c}{p}$",
      "$\\frac{60}{m}$",
      "$\\frac{60}{q}$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Expanding the factored form (mx + p)(x + q) gives mx² + (mq + p)x + pq. Equating coefficients with 5x² + cx - 60:\n1) m = 5\n2) pq = -60\n3) c = mq + p = 5q + p.\nSince p and q are integers and their product is -60, q must be an integer divisor of -60. Therefore, -60 / q = p is an integer, which implies that 60 / q is always an integer.\n\nDistractor Explanations:\n- Choice A (c/m = (5q + p)/5 = q + p/5) is not necessarily an integer because p is not necessarily a multiple of 5 (e.g., if p = 3, q = -20).\n- Choice B (c/p) is not necessarily an integer.\n- Choice C (60/m = 12) is a constant, but Choice D is the essential algebraic divisibility condition defining the factor q.",
    "topic": "Polynomial Factoring & Divisibility"
  },
  {
    "id": 24,
    "module": 1,
    "module_q": 24,
    "useImage": false,
    "text": "$y = 2x^2 - 15x + 40$\n$y = 4x + k$\n\nIn the given system of equations, $k$ is a constant. The graphs of the equations in the given system intersect at exactly one point, $(x, y)$, in the $xy$-plane. What is the value of $x$?",
    "options": [
      "$-4.75$",
      "$4.75$",
      "$9.5$",
      "$19$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Equate the two equations:\n2x² - 15x + 40 = 4x + k\n2x² - 19x + (40 - k) = 0.\nFor the line to intersect the parabola at exactly one point, this quadratic must have exactly one real solution (a double root), which means the discriminant is zero. The single root of a quadratic ax² + bx + c = 0 with zero discriminant is given by the vertex x-coordinate:\nx = -b / (2a) = -(-19) / (2 × 2) = 19 / 4 = 4.75.\n\nDistractor Explanations:\n- Choice A (-4.75) has a sign error.\n- Choice C (9.5) is 19 / 2.\n- Choice D (19) is the value of -b.",
    "topic": "Nonlinear Systems & Discriminant"
  },
  {
    "id": 25,
    "module": 1,
    "module_q": 25,
    "useImage": false,
    "text": "An isosceles right triangle has a hypotenuse of length $64\\text{ inches}$. What is the perimeter, in inches, of this triangle?",
    "options": [
      "$32\\sqrt{2}$",
      "$64\\sqrt{2}$",
      "$64 + 64\\sqrt{2}$",
      "$64 + 128\\sqrt{2}$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In an isosceles right triangle (a 45°-45°-90° triangle), if each leg has length s, the hypotenuse is s√2. Setting s√2 = 64 gives:\ns = 64 / √2 = (64√2) / 2 = 32√2 inches.\nThe perimeter is the sum of the two legs and the hypotenuse:\nPerimeter = s + s + hypotenuse = 32√2 + 32√2 + 64 = 64 + 64√2 inches.\n\nDistractor Explanations:\n- Choice A (32√2) is the length of one leg.\n- Choice B (64√2) is the sum of the two legs without adding the hypotenuse.\n- Choice D (64 + 128√2) incorrectly doubles the legs.",
    "topic": "Right Triangles & Perimeter"
  },
  {
    "id": 26,
    "module": 1,
    "module_q": 26,
    "useImage": false,
    "text": "In the $xy$-plane, a parabola has vertex $(7, -10)$ and intersects the $x$-axis at two points. If the equation of the parabola is written in the form $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are integers, which of the following could be the value of $a + b + c$?",
    "options": [
      "−46",
      "−28",
      "12",
      "26"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. In vertex form, the parabola is given by $y = a(x - 7)^2 - 10$. Since the vertex $(7, -10)$ lies below the $x$-axis and the parabola intersects the $x$-axis at two distinct points, the parabola must open upward, meaning $a > 0$.\n\nThe value of $a + b + c$ is obtained by evaluating the quadratic at $x = 1$:\n$$y(1) = a(1 - 7)^2 - 10 = a(-6)^2 - 10 = 36a - 10$$\n\nSince $a$ is a positive integer ($a \\in \\{1, 2, 3, \\dots\\}$):\n- For $a = 1$: $a + b + c = 36(1) - 10 = 26$.\n- For $a = 2$: $a + b + c = 36(2) - 10 = 62$.\n\nAmong the given options, only $26$ (Choice D) is possible.\n\nDistractor Explanations:\n- Choices A ($-46$) and B ($-28$) would require $a < 0$ ($a = -1$ and $a = -0.5$), which would mean the parabola opens downward and never intersects the $x$-axis.\n- Choice C ($12$) would require $36a - 10 = 12 \\implies a = \\frac{22}{36} = \\frac{11}{18}$, which contradicts the condition that $a$ is an integer.",
    "topic": "Quadratic Vertex Form & Properties"
  },
  {
    "id": 27,
    "module": 1,
    "module_q": 27,
    "useImage": false,
    "text": "Function $g$ is defined by $g(x) = -cx + d$, where $c$ and $d$ are constants. In the $xy$-plane, the graph of $y = g(x) - 20$ has a $y$-intercept at $(0, -100/3)$. The product of $c$ and $d$ is $85/3$. What is the value of $c$?",
    "options": [
      "$-\\frac{17}{8}$",
      "$-\\frac{8}{17}$",
      "$\\frac{17}{8}$",
      "$\\frac{85}{40}$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The equation of the transformed line is y = (-cx + d) - 20 = -cx + (d - 20). The y-intercept is the value when x = 0, which is d - 20. We are given that this y-intercept is -100/3:\nd - 20 = -100/3\nd = 20 - 100/3 = 60/3 - 100/3 = -40/3.\nWe are also given that cd = 85/3. Substituting d = -40/3:\nc × (-40/3) = 85/3\n-40c = 85\nc = -85 / 40 = -17 / 8 (or -2.125).\n\nDistractor Explanations:\n- Choice B (-8/17) is the reciprocal of c.\n- Choice C (17/8) has a positive sign error.\n- Choice D is unreduced and has a sign error.",
    "topic": "Linear Functions & Systems"
  },
  {
    "id": 28,
    "module": 2,
    "module_q": 1,
    "useImage": true,
    "imageKey": "m2_q1_linegraph",
    "text": "The line graph shows the estimated number of deer in a national park on May 1 of each year from 2000 to 2010. Based on the line graph, in which year was the estimated number of deer in the national park the lowest?",
    "options": [
      "2002",
      "2005",
      "2008",
      "2010"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In the line graph, the vertical axis represents the estimated deer population and the horizontal axis represents the years from 2000 to 2010. Finding the lowest point (global minimum) on the graph corresponds to the year 2005 on the horizontal axis.\n\nDistractor Explanations:\n- Choice A (2002) is a local dip but remains higher than the 2005 minimum.\n- Choice C (2008) is the peak (maximum population), not the lowest.\n- Choice D (2010) is significantly higher than the 2005 minimum.",
    "topic": "Data Interpretation & Graphs"
  },
  {
    "id": 29,
    "module": 2,
    "module_q": 2,
    "useImage": false,
    "text": "A runner ran a distance of 4,400 yards. How far did the runner travel, in miles? (1 mile = 1,760 yards)",
    "options": [
      "0.4",
      "2.5",
      "2,640",
      "7,744"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. To convert yards to miles, divide the total number of yards by 1,760:\nDistance = 4,400 / 1,760 = 2.5 miles.\n\nDistractor Explanations:\n- Choice A (0.4) is 1,760 / 4,400.\n- Choice C (2,640) is 4,400 - 1,760.\n- Choice D (7,744) is 1.76 × 4,400.",
    "topic": "Unit Conversions & Rates"
  },
  {
    "id": 30,
    "module": 2,
    "module_q": 3,
    "useImage": false,
    "text": "Which expression is equivalent to $15x^4 - 8x^2$?",
    "options": [
      "$7x^6$",
      "$7x^2$",
      "$x^2(15x^2 - 8)$",
      "$23x^6$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Factoring out the greatest common factor x² from both terms in the binomial 15x⁴ - 8x² gives:\n15x⁴ - 8x² = x²(15x² - 8).\n\nDistractor Explanations:\n- Choice A subtracts coefficients and adds exponents incorrectly.\n- Choice B subtracts unlike terms.\n- Choice D adds coefficients and exponents.",
    "topic": "Equivalent Expressions & Factoring"
  },
  {
    "id": 31,
    "module": 2,
    "module_q": 4,
    "useImage": false,
    "text": "$x + y = 24$\n$3x = y$\n\nWhat is the solution $(x, y)$ to the given system of equations?",
    "options": [
      "$(6, 18)$",
      "$(8, 24)$",
      "$(18, 6)$",
      "$(12, 12)$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Substitute y = 3x into the first equation:\nx + 3x = 24\n4x = 24\nx = 6.\nNow compute y:\ny = 3(6) = 18.\nTherefore, the solution (x, y) is (6, 18).\n\nDistractor Explanations:\n- Choice B ((8, 24)) gives x + y = 32 ≠ 24.\n- Choice C ((18, 6)) reverses x and y.\n- Choice D ((12, 12)) gives y = x instead of y = 3x.",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 32,
    "module": 2,
    "module_q": 5,
    "useImage": false,
    "text": "The point $(6, -3)$ in the $xy$-plane is a solution to which of the following systems of inequalities?",
    "options": [
      "$x > 0, y > 0$",
      "$x > 0, y < 0$",
      "$x < 0, y > 0$",
      "$x < 0, y < 0$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. For the coordinate point (6, -3), the x-coordinate is 6 (which is positive, so x > 0) and the y-coordinate is -3 (which is negative, so y < 0). Therefore, the point lies in Quadrant IV and satisfies the system x > 0, y < 0.\n\nDistractor Explanations:\n- Choice A corresponds to Quadrant I (both coordinates positive).\n- Choice C corresponds to Quadrant II (x negative, y positive).\n- Choice D corresponds to Quadrant III (both coordinates negative).",
    "topic": "Linear Inequalities & Quadrants"
  },
  {
    "id": 33,
    "module": 2,
    "module_q": 6,
    "useImage": false,
    "text": "$|y - 4| = 12$\n\nWhat is one possible solution to the given equation?",
    "options": [
      "8",
      "12",
      "16",
      "20"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The absolute value equation |y - 4| = 12 means either y - 4 = 12 or y - 4 = -12.\n- Solving y - 4 = 12 gives y = 16.\n- Solving y - 4 = -12 gives y = -8.\nAmong the given options, 16 is a valid solution.\n\nDistractor Explanations:\n- Choice A (8) gives |8 - 4| = 4 ≠ 12.\n- Choice B (12) gives |12 - 4| = 8 ≠ 12.\n- Choice D (20) gives |20 - 4| = 16 ≠ 12.",
    "topic": "Absolute Value Equations"
  },
  {
    "id": 34,
    "module": 2,
    "module_q": 7,
    "useImage": false,
    "text": "$g(n) = 8n + 2$\n\nThe function gives the total number of people attending a seminar with $n$ instructors. What is the total number of people attending a seminar with 9 instructors?",
    "options": [
      "72",
      "74",
      "80",
      "82"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute n = 9 into the function g(n):\ng(9) = 8(9) + 2 = 72 + 2 = 74.\nTherefore, 74 people attend the seminar with 9 instructors.\n\nDistractor Explanations:\n- Choice A (72) is 8 × 9 without adding the constant 2.\n- Choice C (80) is 8 × 10.\n- Choice D (82) is 8(9) + 10.",
    "topic": "Function Evaluation"
  },
  {
    "id": 35,
    "module": 2,
    "module_q": 8,
    "useImage": false,
    "text": "$g(x) = x^2 - 5$\n\nWhich table gives three values of $x$ and their corresponding values of $g(x)$ for the given function $g$?",
    "options": [
      "$x: 1, 2, 3 \\mid g(x): -4, -1, 4$",
      "$x: 1, 2, 3 \\mid g(x): -4, 1, 6$",
      "$x: 1, 2, 3 \\mid g(x): 4, 1, -4$",
      "$x: 1, 2, 3 \\mid g(x): -6, -9, -14$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Evaluate g(x) = x² - 5 at x = 1, 2, and 3:\n- g(1) = 1² - 5 = 1 - 5 = -4\n- g(2) = 2² - 5 = 4 - 5 = -1\n- g(3) = 3² - 5 = 9 - 5 = 4\nThis matches the table in Choice A: (-4, -1, 4).\n\nDistractor Explanations:\n- Choice B miscalculates g(2) and g(3).\n- Choice C inverts signs.\n- Choice D subtracts x² from -5 instead of 5 from x².",
    "topic": "Nonlinear Functions & Tables"
  },
  {
    "id": 36,
    "module": 2,
    "module_q": 9,
    "useImage": false,
    "text": "The function $h$ is defined by $h(x) = 350(0.2)^x$. What is the value of $h(0)$?",
    "options": [
      "0",
      "1",
      "70",
      "350"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Substitute x = 0 into h(x):\nh(0) = 350(0.2)⁰.\nBy the zero exponent rule, (0.2)⁰ = 1 for any non-zero base. Therefore:\nh(0) = 350 × 1 = 350.\n\nDistractor Explanations:\n- Choice A (0) incorrectly assumes multiplying by 0.\n- Choice B (1) is (0.2)⁰ without multiplying by 350.\n- Choice C (70) is h(1) = 350 × 0.2 = 70.",
    "topic": "Exponential Functions & Zero Exponents"
  },
  {
    "id": 37,
    "module": 2,
    "module_q": 10,
    "useImage": false,
    "text": "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.55, with an associated margin of error of 0.05. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    "options": [
      "It is plausible that the proportion is between 0.50 and 0.60.",
      "It is plausible that the proportion is less than 0.50.",
      "The proportion is exactly 0.55.",
      "It is plausible that the proportion is greater than 0.60."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A sample proportion of 0.55 with a margin of error of 0.05 creates a plausible confidence interval for the true population proportion: [0.55 - 0.05, 0.55 + 0.05] = [0.50, 0.60]. Thus, it is plausible that the true proportion is between 0.50 and 0.60.\n\nDistractor Explanations:\n- Choice B is incorrect; values below 0.50 lie outside the plausible range.\n- Choice C is incorrect; a sample estimate cannot prove the parameter is exactly 0.55.\n- Choice D is incorrect; values above 0.60 lie outside the plausible range.",
    "topic": "Margin of Error & Sample Statistics"
  },
  {
    "id": 38,
    "module": 2,
    "module_q": 11,
    "useImage": false,
    "text": "A cargo van can carry supplies if the combined weight of the containers is no more than $5,200\\text{ pounds}$. What is the maximum number of boxes this van can carry if a heavy generator weighing $600\\text{ pounds}$ is already inside, and each box weighs $100\\text{ pounds}$?",
    "options": [
      "45",
      "46",
      "52",
      "58"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let b be the number of boxes. The total weight in the van is 600 + 100b. Setting up the inequality:\n600 + 100b ≤ 5200\n100b ≤ 4600\nb ≤ 46.\nTherefore, the maximum number of boxes the van can carry is 46.\n\nDistractor Explanations:\n- Choice A (45) is less than the maximum possible.\n- Choice C (52) ignores the 600-lb generator (5200 / 100 = 52).\n- Choice D (58) incorrectly adds 600 instead of subtracting.",
    "topic": "Linear Inequalities in One Variable"
  },
  {
    "id": 39,
    "module": 2,
    "module_q": 12,
    "useImage": false,
    "text": "$-3x^2 - 8x = -35$\n\nWhat is the positive solution to the given equation?",
    "options": [
      "$\\frac{5}{3}$",
      "$\\frac{7}{3}$",
      "$5$",
      "$7$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Rearrange the quadratic equation into standard form:\n-3x² - 8x + 35 = 0\nMultiply by -1:\n3x² + 8x - 35 = 0.\nFactor the quadratic:\n(3x - 7)(x + 5) = 0.\nSetting each factor to zero yields:\n3x - 7 = 0 ⇒ x = 7/3\nx + 5 = 0 ⇒ x = -5.\nThe question asks for the POSITIVE solution, which is x = 7/3.\n\nDistractor Explanations:\n- Choice A (5/3) is an arithmetic error.\n- Choice C (5) is the absolute value of the negative root (-5).\n- Choice D (7) forgets to divide by 3.",
    "topic": "Quadratic Equations"
  },
  {
    "id": 40,
    "module": 2,
    "module_q": 13,
    "useImage": true,
    "imageKey": "m2_q13_table",
    "text": "The table summarizes the distribution of color and shape for 120 blocks of equal volume.\n\nIf one of these blocks is selected at random, what is the probability of selecting a green block? (Express your answer as a decimal or fraction, not as a percent.)",
    "options": [
      "$\\frac{1}{6}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. From the summary table, the total number of green blocks is 20 spheres + 20 cubes = 40 green blocks. The total number of blocks is 120. The probability of selecting a green block at random is:\nP(Green) = 40 / 120 = 1/3 (≈ 0.333).\n\nDistractor Explanations:\n- Choice A (1/6) is 20/120 (the probability of selecting a green sphere specifically).\n- Choice B (1/4) is an incorrect ratio.\n- Choice D (1/2) is 60/120 (the probability of selecting a sphere).",
    "topic": "Probability & Two-Way Tables"
  },
  {
    "id": 41,
    "module": 2,
    "module_q": 14,
    "useImage": false,
    "text": "$f(x) = 4x - 5$\n\nFor the given function $f$, the graph of $y = f(x)$ in the $xy$-plane is parallel to line $L$. What is the slope of line $L$?",
    "options": [
      "-5",
      "-4",
      "1/4",
      "4"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Parallel lines in the coordinate plane have identical slopes. The linear equation y = 4x - 5 has a slope of 4 (the coefficient of x). Therefore, line L must also have a slope of 4.\n\nDistractor Explanations:\n- Choice A (-5) is the y-intercept of the line.\n- Choice B (-4) has a sign error.\n- Choice C (1/4) would relate to perpendicular slope (-1/4).",
    "topic": "Linear Functions & Parallel Lines"
  },
  {
    "id": 42,
    "module": 2,
    "module_q": 15,
    "useImage": false,
    "text": "A proposal for a new park was included on a ballot. A news report stated that 4 times as many people voted in favor of the proposal as people who voted against it. A social media post reported that 18,000 more people voted in favor of the proposal than voted against it. Based on these data, how many people voted against the proposal?",
    "options": [
      "4,500",
      "6,000",
      "18,000",
      "24,000"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let F be the number of people voting in favor, and A be the number of people voting against. From the problem:\n1) F = 4A\n2) F = A + 18,000\nSubstitute F = 4A into the second equation:\n4A = A + 18,000\n3A = 18,000\nA = 18,000 / 3 = 6,000.\nTherefore, 6,000 people voted against the proposal.\n\nDistractor Explanations:\n- Choice A (4,500) is 18,000 / 4.\n- Choice C (18,000) is the difference in votes.\n- Choice D (24,000) is the number of votes in favor (4 × 6,000 = 24,000).",
    "topic": "Linear Systems Modeling"
  },
  {
    "id": 43,
    "module": 2,
    "module_q": 16,
    "useImage": true,
    "imageKey": "m2_q16_angles",
    "text": "In the figure below, lines $m$ and $n$ are parallel. If $x = 5k + 20$ and $y = 7k - 18$, what is the value of $z$?",
    "options": [
      "19",
      "65",
      "115",
      "130"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In the figure, lines m and n are parallel and cut by a transversal. Angles x and y are alternate interior angles, so x = y:\n5k + 20 = 7k - 18\n2k = 38\nk = 19.\nSubstituting k = 19 gives x = 5(19) + 20 = 95 + 20 = 115°. Since angle z is vertically opposite (or corresponding) to angle x, z = 115°.\n\nDistractor Explanations:\n- Choice A (19) is the value of k, not the angle z.\n- Choice B (65) is the supplementary angle (180° - 115° = 65°).\n- Choice D (130) is an arithmetic calculation error.",
    "topic": "Lines, Angles & Transversals"
  },
  {
    "id": 44,
    "module": 2,
    "module_q": 17,
    "useImage": false,
    "text": "$-4x + 16px = 96$\n\nIn the given equation, $p$ is a constant. The equation has no solution. What is the value of $p$?",
    "options": [
      "$0$",
      "$\\frac{1}{4}$",
      "$4$",
      "$6$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Factor out x on the left side:\n(-4 + 16p)x = 96.\nA linear equation Ax = B has NO solution if and only if the coefficient of x is zero (A = 0) and the constant term is non-zero (B ≠ 0). Setting the coefficient to zero:\n-4 + 16p = 0\n16p = 4\np = 4 / 16 = 1/4.\n\nDistractor Explanations:\n- Choice A (0) gives -4x = 96 ⇒ x = -24 (has a unique solution).\n- Choice C (4) gives 60x = 96 (has a unique solution).\n- Choice D (6) gives 92x = 96 (has a unique solution).",
    "topic": "Linear Equations with No Solution"
  },
  {
    "id": 45,
    "module": 2,
    "module_q": 18,
    "useImage": false,
    "text": "$g(x) = (x - 8)(x + 15)$\n\nThe function $g$ is defined by the given equation. For what value of $x$ does $g(x)$ reach its minimum?",
    "options": [
      "$-120$",
      "$-7$",
      "$-3.5$",
      "$3.5$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The quadratic function g(x) = (x - 8)(x + 15) has x-intercepts at x = 8 and x = -15. Since the parabola opens upward, the minimum occurs at the axis of symmetry (the vertex x-coordinate), which is the midpoint of the intercepts:\nx = (8 + (-15)) / 2 = -7 / 2 = -3.5.\n\nDistractor Explanations:\n- Choice A (-120) is the constant product -8 × 15.\n- Choice B (-7) is 8 + (-15) before dividing by 2.\n- Choice D (3.5) has a sign error.",
    "topic": "Quadratic Minima & Axis of Symmetry"
  },
  {
    "id": 46,
    "module": 2,
    "module_q": 19,
    "useImage": false,
    "text": "The function $f(x) = \\frac{1}{5}(x - 6)^2 + 4$ gives a drone's height above the ground $f(x)$, in meters, $x$ seconds after it started moving, where $0 \\le x \\le 20$. Which of the following is the best interpretation of the vertex of the graph of $y = f(x)$ in the $xy$-plane?",
    "options": [
      "The drone's minimum height was 4 meters above the ground.",
      "The drone's minimum height was 6 meters above the ground.",
      "The drone's height was 4 meters above the ground when it started moving.",
      "The drone's height was 6 meters above the ground when it started moving."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The quadratic function is given in vertex form f(x) = a(x - h)² + k, with vertex (h, k) = (6, 4). Since a = 1/5 > 0, the parabola opens upward, so the vertex represents the minimum height. Specifically, at x = 6 seconds, the drone achieves its minimum height of 4 meters above the ground.\n\nDistractor Explanations:\n- Choice B confuses the time of 6 seconds with the height of 4 meters.\n- Choices C and D refer to the initial height when x = 0, which is f(0) = (1/5)(36) + 4 = 11.2 meters.",
    "topic": "Quadratic Vertex Form & Context"
  },
  {
    "id": 47,
    "module": 2,
    "module_q": 20,
    "useImage": false,
    "text": "In triangle $DEF$, $\\cos(E) = \\frac{15}{39}$ and angle $D$ is a right angle. What is the value of $\\cos(F)$?",
    "options": [
      "$\\frac{5}{13}$",
      "$\\frac{12}{13}$",
      "$\\frac{15}{39}$",
      "$\\frac{13}{12}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In right triangle DEF with right angle at D, angles E and F are complementary (E + F = 90°), which means cos(F) = sin(E). Simplify cos(E) = 15/39 = 5/13. In a right triangle with adjacent leg 5 and hypotenuse 13, the opposite leg is:\nOpposite = √(13² - 5²) = √(169 - 25) = √144 = 12.\nThus, sin(E) = 12/13. Since cos(F) = sin(E), cos(F) = 12/13 (or 36/39).\n\nDistractor Explanations:\n- Choice A (5/13) is cos(E) or sin(F).\n- Choice C (15/39) is the unreduced cos(E).\n- Choice D (13/12) is sec(E), which cannot be a cosine value (must be ≤ 1).",
    "topic": "Right Triangle Trigonometry"
  },
  {
    "id": 48,
    "module": 2,
    "module_q": 21,
    "useImage": false,
    "text": "$-x^2 + cx - 900 = 0$\n\nIn the given equation, $c$ is a positive integer. The equation has no real solution. What is the greatest possible value of $c$?",
    "options": [
      "30",
      "59",
      "60",
      "120"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. For a quadratic equation ax² + bx + c_const = 0 to have no real solutions, its discriminant Δ must be strictly negative (Δ < 0). For -x² + cx - 900 = 0:\nΔ = c² - 4(-1)(-900) = c² - 3600 < 0.\nThis inequality yields c² < 3600, which means -60 < c < 60. Since c is specified to be a positive integer, the possible values of c are 1, 2, ..., 59. The greatest possible integer value is 59.\n\nDistractor Explanations:\n- Choice A (30) is a valid integer but not the greatest.\n- Choice C (60) gives Δ = 0, which would yield exactly one real solution.\n- Choice D (120) gives a positive discriminant with two real solutions.",
    "topic": "Discriminant & Number of Solutions"
  },
  {
    "id": 49,
    "module": 2,
    "module_q": 22,
    "useImage": false,
    "text": "Consider the system of equations consisting of two parallel lines:\n$x + 3y = 6$\n$2x + 6y = 24$\n\nIf a new graph of three linear equations is created using this system of equations and the equation $x + 3y = -12$, how many solutions $(x, y)$ will the resulting system of three equations have?",
    "options": [
      "Zero",
      "Exactly one",
      "Exactly two",
      "Infinitely many"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A solution to a system of three linear equations is a point (x, y) that lies on all three lines simultaneously. Writing each equation in slope-intercept form:\n1) x + 3y = 6 ⇒ y = -1/3 x + 2\n2) 2x + 6y = 24 ⇒ y = -1/3 x + 4\n3) x + 3y = -12 ⇒ y = -1/3 x - 4\nAll three lines have identical slopes of -1/3 but distinct y-intercepts (2, 4, and -4). Since distinct parallel lines never intersect, there is no point (x, y) that satisfies all three equations. Thus, the system has Zero solutions.\n\nDistractor Explanations:\n- Choices B, C, and D are incorrect because three parallel lines do not share any common intersection points.",
    "topic": "Systems of Three Linear Equations"
  },
  {
    "id": 50,
    "module": 2,
    "module_q": 23,
    "useImage": false,
    "text": "$V(t) = 6,200(0.72)^{t/12}$\n\nThe function $V$ gives the value, in dollars, of a certain vehicle after $t$ months of use. If the value of the vehicle decreases each year by $p\\%$ of its value the preceding year, what is the value of $p$?",
    "options": [
      "12",
      "28",
      "72",
      "100"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Since there are 12 months in a year, t / 12 represents the elapsed time Y in years. Rewriting the function in terms of years Y:\nV(Y) = 6,200(0.72)^Y = 6,200(1 - 0.28)^Y.\nIn this exponential decay model, the vehicle retains 72% of its value annually, meaning it decreases by (1 - 0.72) × 100% = 28% each year. Therefore, p = 28.\n\nDistractor Explanations:\n- Choice A (12) is the number of months in a year.\n- Choice C (72) is the remaining percentage of value, not the percentage decrease.\n- Choice D (100) is 100%.",
    "topic": "Exponential Decay & Percent Change"
  },
  {
    "id": 51,
    "module": 2,
    "module_q": 24,
    "useImage": true,
    "imageKey": "m2_q24_dotplot",
    "text": "The dot plot represents the 15 values in data set X. Data set Y is created by adding $45$ to each of the values in data set X. Which of the following correctly compares the medians and the ranges of data sets X and Y?",
    "options": [
      "The median of data set Y is equal to the median of data set X, and the range of data set Y is equal to the range of data set X.",
      "The median of data set Y is equal to the median of data set X, and the range of data set Y is greater than the range of data set X.",
      "The median of data set Y is greater than the median of data set X, and the range of data set Y is equal to the range of data set X.",
      "The median of data set Y is greater than the median of data set X, and the range of data set Y is greater than the range of data set X."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Adding a positive constant (45) to every value in a dataset shifts the entire distribution along the number line:\n1) Median: Every value increases by 45, so Median(Y) = Median(X) + 45. Thus, the median of data set Y is greater than the median of data set X.\n2) Range: Range is defined as Maximum - Minimum. In data set Y, Range(Y) = (Max + 45) - (Min + 45) = Max - Min = Range(X). Thus, the range of data set Y is equal to the range of data set X.\n\nDistractor Explanations:\n- Choices A and B incorrectly claim the median remains unchanged.\n- Choice D incorrectly claims the range increases.",
    "topic": "Statistics: Center & Spread Transformations"
  },
  {
    "id": 52,
    "module": 2,
    "module_q": 25,
    "useImage": false,
    "text": "The equation $(x - 2)^2 + (y + 3)^2 = 36$ represents circle A. Circle B is obtained by shifting circle A up 4 units in the $xy$-plane. Which of the following equations represents circle B?",
    "options": [
      "$(x - 2)^2 + (y - 1)^2 = 36$",
      "$(x - 2)^2 + (y + 7)^2 = 36$",
      "$(x + 2)^2 + (y + 3)^2 = 36$",
      "$(x - 6)^2 + (y + 3)^2 = 36$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The standard circle equation is (x - h)² + (y - k)² = r². Circle A has center (h, k) = (2, -3) and radius r = 6. Shifting circle A upward by 4 units adds 4 to the y-coordinate of its center:\nNew center = (2, -3 + 4) = (2, 1).\nSubstituting this new center (2, 1) and r² = 36 into the standard equation gives (x - 2)² + (y - 1)² = 36.\n\nDistractor Explanations:\n- Choice B ((y + 7)²) represents shifting down 4 units (-3 - 4 = -7).\n- Choice C represents shifting horizontally along the x-axis.\n- Choice D represents shifting horizontally to the right by 4 units.",
    "topic": "Circle Equations & Translations"
  },
  {
    "id": 53,
    "module": 2,
    "module_q": 26,
    "useImage": false,
    "text": "Two identical rectangular prisms each have a height of $80\\text{ centimeters (cm)}$. The base of each prism is a square, and the surface area of each prism is $M\\text{ cm}^2$. If the prisms are glued together along a square base, the resulting prism has a surface area of $\\frac{41}{21}M\\text{ cm}^2$. What is the side length, in $\\text{cm}$, of each square base?",
    "options": [
      "4",
      "8",
      "10",
      "16"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let $s$ be the side length in centimeters of the square base, and let the height be $h = 80\\text{ cm}$.\n\nEach individual prism has 2 square bases of area $s^2$ and 4 rectangular side faces of area $80s$. Thus, the surface area $M$ of one prism is:\n$$M = 2s^2 + 4(80)s = 2s^2 + 320s$$\n\nWhen the two prisms are glued together along one square base, the two contacting square bases are hidden inside the combined solid. The surface area of the resulting prism is:\n$$\\text{Combined Surface Area} = 2M - 2s^2 = 2(2s^2 + 320s) - 2s^2 = 2s^2 + 640s$$\n\nWe are given that this combined surface area is equal to $\\frac{41}{21}M$:\n$$2s^2 + 640s = \\frac{41}{21}(2s^2 + 320s)$$\n\nMultiply both sides by 21:\n$$21(2s^2 + 640s) = 41(2s^2 + 320s)$$\n$$42s^2 + 13,440s = 82s^2 + 13,120s$$\n\nRearrange and collect like terms:\n$$(82 - 42)s^2 = (13,440 - 13,120)s$$\n$$40s^2 = 320s$$\n\nSince the side length $s > 0$, divide both sides by $40s$:\n$$s = \\frac{320}{40} = 8\\text{ cm}$$\n\nTherefore, the side length of each square base is $8\\text{ cm}$ (Choice B).\n\nDistractor Explanations:\n- Choices A ($4$), C ($10$), and D ($16$) do not satisfy the surface area ratio of $\\frac{41}{21}$.",
    "topic": "3D Geometry & Surface Area"
  },
  {
    "id": 54,
    "module": 2,
    "module_q": 27,
    "useImage": false,
    "text": "$320$ is $p\\%$ greater than $40$. What is the value of $p$?",
    "options": [
      "280",
      "700",
      "750",
      "800"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. '320 is p% greater than 40' means the amount of increase over 40 is (p/100) × 40. Setting up the equation:\n320 = 40 + (p/100) × 40\nSubtract 40 from both sides:\n280 = (p/100) × 40\nDivide both sides by 40:\n280 / 40 = p / 100\n7 = p / 100\np = 7 × 100 = 700.\nCheck: 40 increased by 700% is 40 + 7(40) = 40 + 280 = 320.\n\nDistractor Explanations:\n- Choice A (280) is the absolute amount of increase (320 - 40), not the percentage.\n- Choice C (750) is an arithmetic miscalculation.\n- Choice D (800) is (320 / 40) × 100% = 800% (the total percentage that 320 is OF 40, not GREATER than 40).",
    "topic": "Percent Increase & Proportions"
  }
];
