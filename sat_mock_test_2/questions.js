// =============================================
// Digital SAT Mock Test 2
// 54 Questions (Module 1: 27 Qs, Module 2: 27 Qs)
// Format: Authentic Digital SAT Mock Test (with LaTeX & Explanations)
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "module": 1,
    "text": "If $4(2x - 5) = 3(x + 10)$, what is the value of $x$?",
    "options": [
      "$2$",
      "$5$",
      "$8$",
      "$10$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct.\n\n1. Pehle dono brackets expand karo:\n$$4(2x - 5) = 8x - 20$$\n$$3(x + 10) = 3x + 30$$\n\n2. Equation ko solve karo ($x$ wale terms ek side, constants doosri side):\n$$8x - 20 = 3x + 30$$\n$$8x - 3x = 30 + 20$$\n$$5x = 50 \\implies x = 10$$",
    "topic": "Linear Equations in One Variable"
  },
  {
    "id": 2,
    "module": 1,
    "text": "If $3x + 2y = 18$ and $y = 2x - 5$, what is the value of $x$?",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n$y$ ki value ($y = 2x - 5$) pehle equation mein substitute kar do:\n$$3x + 2(2x - 5) = 18$$\n$$3x + 4x - 10 = 18$$\n$$7x - 10 = 18 \\implies 7x = 28 \\implies x = 4$$",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 3,
    "module": 1,
    "text": "The linear function $g$ passes through the points $(1, 4)$ and $(3, 10)$. If $g(x) = mx + b$, what is the value of $g(5)$?",
    "options": [
      "$13$",
      "$15$",
      "$16$",
      "$18$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n1. Do points $(1, 4)$ aur $(3, 10)$ se slope ($m$) nikalo:\n$$m = \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3$$\n\n2. Point $(1, 4)$ use karke $y$-intercept ($b$) nikalo:\n$$4 = 3(1) + b \\implies b = 1$$\nEquation: $g(x) = 3x + 1$\n\n3. Ab $x = 5$ evaluate karo:\n$$g(5) = 3(5) + 1 = 15 + 1 = 16$$",
    "topic": "Linear Functions"
  },
  {
    "id": 4,
    "module": 1,
    "text": "What is the solution $(x, y)$ to the system of equations below?\n$$2x + y = 10$$\n$$x - y = 2$$",
    "options": [
      "$(2, 6)$",
      "$(4, 2)$",
      "$(6, -2)$",
      "$(3, 4)$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nDono equations ko add kar do ($y$ cancel ho jayega):\n$$(2x + y) + (x - y) = 10 + 2 \\implies 3x = 12 \\implies x = 4$$\n\nAb $x = 4$ ko $x - y = 2$ mein daalo:\n$$4 - y = 2 \\implies y = 2$$\n\nSolution is $(4, 2)$.",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 5,
    "module": 1,
    "text": "Which of the following is the graph of the inequality $y > 2x - 3$ in the $xy$-plane?",
    "options": [
      "A dashed line with shading above",
      "A solid line with shading above",
      "A dashed line with shading below",
      "A solid line with shading below"
    ],
    "answer": 0,
    "explanation": "Choice A is correct.\n\n- '$y > 2x - 3$' mein strict inequality ($>$) hai ($\\ge$ nahi), isliye boundary line dashed hogi.\n- '$y >$' ka matlab hai boundary line ke upar wala region (greater $y$-values) shade hoga.\nIsliye: 'A dashed line with shading above'.",
    "topic": "Linear Inequalities in Two Variables"
  },
  {
    "id": 6,
    "module": 1,
    "text": "The expression $(x + 3)(2x - 1) - (x - 2)(x + 4)$ is equivalent to $ax^2 + bx + c$. What is the value of $a + b + c$?",
    "options": [
      "$7$",
      "$8$",
      "$9$",
      "$10$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n1. Pehle dono brackets ko expand karo:\n- $(x + 3)(2x - 1) = 2x^2 - x + 6x - 3 = 2x^2 + 5x - 3$\n- $(x - 2)(x + 4) = x^2 + 4x - 2x - 8 = x^2 + 2x - 8$\n\n2. Subtract karo:\n$$(2x^2 + 5x - 3) - (x^2 + 2x - 8) = x^2 + 3x + 5$$\n\n3. Yahan $a = 1, b = 3, c = 5$:\n$$a + b + c = 1 + 3 + 5 = 9$$",
    "topic": "Polynomial Operations"
  },
  {
    "id": 7,
    "module": 1,
    "text": "What are the solutions to the equation $x^2 - 5x + 6 = 0$?",
    "options": [
      "$x = -2$ and $x = -3$",
      "$x = 2$ and $x = 3$",
      "$x = -2$ and $x = 3$",
      "$x = 2$ and $x = -3$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nQuadratic equation ko factor karo (product $= 6$, sum $= -5$, jo $-2$ aur $-3$ hain):\n$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$\n$$x - 2 = 0 \\implies x = 2$$\n$$x - 3 = 0 \\implies x = 3$$",
    "topic": "Quadratic Equations"
  },
  {
    "id": 8,
    "module": 1,
    "text": "The function $f(x) = -2(x - 3)^2 + 8$ is graphed in the $xy$-plane. What is the maximum value of $f(x)$?",
    "options": [
      "$3$",
      "$8$",
      "$-2$",
      "$10$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nFunction vertex form mein hai: $f(x) = a(x - h)^2 + k$, jahan vertex $(h, k) = (3, 8)$ hai.\nCoefficient $a = -2$ negative hai, matlab parabola neeche ki taraf khulta hai (opens downward). Isliye vertex hi maximum point hai $\\implies$ maximum value $= 8$.",
    "topic": "Quadratic Functions & Vertex"
  },
  {
    "id": 9,
    "module": 1,
    "text": "A car travels $210\\text{ miles}$ in $3.5\\text{ hours}$. At this rate, how many miles will the car travel in $5\\text{ hours}$?",
    "options": [
      "$280$",
      "$300$",
      "$320$",
      "$350$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n1. Speed (rate) nikalo:\n$$\\text{Speed} = \\frac{210\\text{ miles}}{3.5\\text{ hours}} = 60\\text{ miles/hour}$$\n\n2. Ab $5\\text{ hours}$ mein:\n$$\\text{Distance} = 60 \\times 5 = 300\\text{ miles}$$",
    "topic": "Rates & Proportions"
  },
  {
    "id": 10,
    "module": 1,
    "text": "A laptop originally priced at $\\$800$ is on sale for $25\\%$ off. After the discount, an $8\\%$ sales tax is applied to the sale price. What is the final price of the laptop?",
    "options": [
      "$\\$600$",
      "$\\$648$",
      "$\\$660$",
      "$\\$700$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n- **Step 1 (Discount):** $\\$800$ pe $25\\%$ off matlab $75\\%$ price rahega:\n$$800 \\times 0.75 = \\$600$$\n\n- **Step 2 (Sales Tax):** $\\$600$ pe $8\\%$ tax add hoga:\n$$600 \\times 1.08 = \\$648$$",
    "topic": "Percentages & Discounts"
  },
  {
    "id": 11,
    "module": 1,
    "text": "The test scores of 8 students are: $72, 78, 82, 85, 88, 90, 94, 99$. What is the median score?",
    "options": [
      "$85$",
      "$86$",
      "$86.5$",
      "$88$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n8 numbers hain (even count) jo already sorted hain. Median beech ke 2 numbers (4th aur 5th) ka average hoga:\n$$\\text{Median} = \\frac{85 + 88}{2} = 86.5$$",
    "topic": "Statistics & Measures of Center"
  },
  {
    "id": 12,
    "module": 1,
    "text": "A scatterplot has points with a strong positive linear correlation. The line of best fit passes through the points $(2, 10)$ and $(8, 28)$. What is the predicted value of $y$ when $x = 5$?",
    "options": [
      "$17$",
      "$18$",
      "$19$",
      "$20$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n1. Slope nikalo:\n$$m = \\frac{28 - 10}{8 - 2} = \\frac{18}{6} = 3$$\n\n2. Point $(2, 10)$ use karke $y$-intercept ($b$) nikalo:\n$$10 = 3(2) + b \\implies b = 4$$\nLine equation: $y = 3x + 4$\n\n3. Ab $x = 5$ substitute karo:\n$$y = 3(5) + 4 = 15 + 4 = 19$$",
    "topic": "Scatterplots & Linear Modeling"
  },
  {
    "id": 13,
    "module": 1,
    "text": "A bag contains $5$ red marbles, $3$ blue marbles, and $2$ green marbles. If one marble is randomly selected from the bag, what is the probability that it is not blue?",
    "options": [
      "$\\frac{3}{10}$",
      "$\\frac{2}{5}$",
      "$\\frac{7}{10}$",
      "$\\frac{3}{5}$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nTotal marbles $= 5 + 3 + 2 = 10$.\n'Not blue' wale marbles $= 5\\text{ (red)} + 2\\text{ (green)} = 7$.\n$$\\text{Probability} = \\frac{7}{10}$$",
    "topic": "Probability"
  },
  {
    "id": 14,
    "module": 1,
    "text": "A survey of $500$ randomly selected voters in a city found that $60\\%$ support a new park proposal. The margin of error for the survey is $\\pm 4\\%$. Which of the following is the correct $95\\%$ confidence interval for the true proportion of all voters in the city who support the proposal?",
    "options": [
      "$56\\%$ to $64\\%$",
      "$58\\%$ to $62\\%$",
      "$56\\%$ to $60\\%$",
      "$60\\%$ to $64\\%$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct.\n\nSample proportion $= 60\\%$, Margin of error $= \\pm 4\\%$.\nConfidence interval $= 60\\% - 4\\%$ se $60\\% + 4\\%$ tak $= 56\\% \\text{ to } 64\\%$.",
    "topic": "Margin of Error & Confidence Intervals"
  },
  {
    "id": 15,
    "module": 1,
    "text": "A study found that people who drink at least 2 cups of coffee per day have a $20\\%$ lower risk of heart disease compared to non-coffee drinkers. However, coffee drinkers in this study also tended to exercise more and eat healthier diets. Based on this information, what type of error in statistical claims does this represent?",
    "options": [
      "Confounding variable",
      "Nonresponse bias",
      "Selection bias",
      "Placebo effect"
    ],
    "answer": 0,
    "explanation": "Choice A is correct.\n\nCoffee peene wale log healthy lifestyle (exercise, healthier diets) bhi follow karte the. Yeh extra factor coffee aur heart disease dono ke sath linked hai, isliye clear nahi hai ki fayda coffee se hua ya healthy habits se. Yeh classic **Confounding Variable** hai.",
    "topic": "Statistical Study Design & Bias"
  },
  {
    "id": 16,
    "module": 1,
    "text": "A rectangle has a length of $12\\text{ cm}$ and a diagonal of $13\\text{ cm}$. What is the area of the rectangle?",
    "options": [
      "$30\\text{ cm}^2$",
      "$60\\text{ cm}^2$",
      "$65\\text{ cm}^2$",
      "$156\\text{ cm}^2$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nPythagoras Theorem: $\\text{length}^2 + \\text{width}^2 = \\text{diagonal}^2$\n$$12^2 + w^2 = 13^2 \\implies 144 + w^2 = 169 \\implies w^2 = 25 \\implies w = 5\\text{ cm}$$\n$$\\text{Area} = \\text{length} \\times \\text{width} = 12 \\times 5 = 60\\text{ cm}^2$$",
    "topic": "Geometry & Area"
  },
  {
    "id": 17,
    "module": 1,
    "text": "Two parallel lines $L_1 \\parallel L_2$ are cut by a transversal. If $\\angle 1 = 115^\\circ$, what is the measure of $\\angle 2$ (an alternate interior angle on the opposite side of the transversal)?",
    "options": [
      "$65^\\circ$",
      "$75^\\circ$",
      "$115^\\circ$",
      "$180^\\circ$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nJab do parallel lines ek transversal se cut hoti hain, to alternate interior angles hamesha equal hote hain.\nAngle 1 $= 115^\\circ$, isliye Angle 2 bhi $= 115^\\circ$.",
    "topic": "Lines & Angles"
  },
  {
    "id": 18,
    "module": 1,
    "text": "In right triangle $XYZ$, $\\angle Y = 90^\\circ$. Side $XY = 8$ and side $YZ = 6$. What is the value of $\\tan(Z)$?",
    "options": [
      "$\\frac{3}{4}$",
      "$\\frac{4}{3}$",
      "$\\frac{4}{5}$",
      "$\\frac{3}{5}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n$$\\tan(Z) = \\frac{\\text{Opposite Side}}{\\text{Adjacent Side}}$$\nAngle $Z$ ke opposite side $XY = 8$ hai, aur adjacent side $YZ = 6$ hai.\n$$\\tan(Z) = \\frac{8}{6} = \\frac{4}{3}$$",
    "topic": "Right Triangle Trigonometry"
  },
  {
    "id": 19,
    "module": 1,
    "text": "A circle has a radius of $6$. What is the area of a sector of this circle that has a central angle of $60^\\circ$? (Use $\\pi \\approx 3.14$)",
    "options": [
      "$6.28$",
      "$12.56$",
      "$18.84$",
      "$37.68$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n1. Pure circle ka area $= \\pi r^2 = 3.14 \\times 6^2 = 3.14 \\times 36 = 113.04$.\n2. $60^\\circ$ pure circle ($360^\\circ$) ka fraction: $\\frac{60^\\circ}{360^\\circ} = \\frac{1}{6}$.\n3. Sector area $= 113.04 \\times \\frac{1}{6} = 18.84$.",
    "topic": "Circles & Sector Area"
  },
  {
    "id": 20,
    "module": 1,
    "text": "What is the slope of the line that passes through the points $(2, 3)$ and $(5, 9)$?",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n$$\\text{Slope } m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{5 - 2} = \\frac{6}{3} = 2$$",
    "topic": "Slope Calculation"
  },
  {
    "id": 21,
    "module": 1,
    "text": "If $\\frac{2x}{3} + 5 = \\frac{x}{2} + 9$, what is the value of $x$?",
    "options": [
      "$18$",
      "$20$",
      "$24$",
      "$28$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nFractions hatane ke liye poori equation ko $6$ se multiply karo (LCM of 3 and 2):\n$$6\\left(\\frac{2x}{3} + 5\\right) = 6\\left(\\frac{x}{2} + 9\\right)$$\n$$4x + 30 = 3x + 54$$\n$$4x - 3x = 54 - 30 \\implies x = 24$$",
    "topic": "Linear Equations in One Variable"
  },
  {
    "id": 22,
    "module": 1,
    "text": "Which of the following represents the solution to $-2x + 5 > 11$?",
    "options": [
      "$x > -3$",
      "$x < -3$",
      "$x > 3$",
      "$x < 3$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n$$-2x + 5 > 11 \\implies -2x > 6$$\nAb dono taraf $-2$ se divide karo — negative number se divide karne par inequality ka sign ulta ho jaata hai:\n$$x < \\frac{6}{-2} \\implies x < -3$$",
    "topic": "Linear Inequalities"
  },
  {
    "id": 23,
    "module": 1,
    "text": "What is the vertex of the parabola $y = (x - 2)^2 + 3$?",
    "options": [
      "$(2, 3)$",
      "$(-2, 3)$",
      "$(2, -3)$",
      "$(-2, -3)$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct.\n\nVertex form hoti hai: $y = (x - h)^2 + k$, jahan $(h, k)$ vertex hai.\nComparing $y = (x - 2)^2 + 3$, we have $h = 2$ aur $k = 3 \\implies \\text{Vertex} = (2, 3)$.",
    "topic": "Quadratic Vertex Form"
  },
  {
    "id": 24,
    "module": 1,
    "text": "A line passes through the points $(2, 5)$ and $(4, 11)$. What is the value of the $y$-intercept of this line?",
    "options": [
      "$-3$",
      "$-1$",
      "$1$",
      "$3$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n1. Slope nikalo: $m = \\frac{11 - 5}{4 - 2} = \\frac{6}{2} = 3$.\n2. Point $(2, 5)$ use karke $y$-intercept ($b$) nikalo:\n$$5 = 3(2) + b \\implies 5 = 6 + b \\implies b = -1$$\n$y$-intercept $= -1$.",
    "topic": "Linear Equations & Intercepts"
  },
  {
    "id": 25,
    "module": 1,
    "text": "A car travels $180\\text{ miles}$ in $3\\text{ hours}$. At this rate, how far will it travel in $5\\text{ hours}$?",
    "options": [
      "$240\\text{ miles}$",
      "$270\\text{ miles}$",
      "$300\\text{ miles}$",
      "$360\\text{ miles}$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nSpeed $= \\frac{180}{3} = 60\\text{ mph}$.\n$5\\text{ hours}$ mein: $60 \\times 5 = 300\\text{ miles}$.",
    "topic": "Rates & Proportions"
  },
  {
    "id": 26,
    "module": 1,
    "text": "The test scores are: $70, 75, 80, 85, 90$. What is the median?",
    "options": [
      "$75$",
      "$80$",
      "$82.5$",
      "$85$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n5 numbers already sorted hain. Odd count hone ki wajah se median seedha beech ka 3rd number hoga $\\implies 80$.",
    "topic": "Statistics"
  },
  {
    "id": 27,
    "module": 1,
    "text": "The linear function $g$ passes through the points $(1, 4)$ and $(3, 10)$. If $g(x) = mx + b$, what is the value of $g(5)$?",
    "options": [
      "$13$",
      "$15$",
      "$16$",
      "$18$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nSlope $m = \\frac{10 - 4}{3 - 1} = 3$. Equation: $g(x) = 3x + 1$.\n$$g(5) = 3(5) + 1 = 15 + 1 = 16$$",
    "topic": "Linear Functions"
  },
  {
    "id": 28,
    "module": 2,
    "text": "In a circle with center $O$, chord $AB$ has length $12$ and is $8\\text{ units}$ away from the center of the circle. What is the diameter of the circle?",
    "options": [
      "$10$",
      "$16$",
      "$20$",
      "$24$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nChord ka midpoint se perpendicular line center $O$ tak right triangle banata hai:\n- Half chord $= \\frac{12}{2} = 6$\n- Distance from center $= 8$\n- Radius (hypotenuse) $r = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$\n$$\\text{Diameter} = 2r = 2 \\times 10 = 20$$",
    "topic": "Circles & Chords"
  },
  {
    "id": 29,
    "module": 2,
    "text": "A right triangle has an acute angle $\\theta$ such that $\\sin(\\theta) = \\frac{3}{5}$. What is the value of $\\cos(\\theta) + \\frac{\\tan(\\theta)}{\\sin(\\theta)}$? (Round to the nearest tenth.)",
    "options": [
      "$1.8$",
      "$2.1$",
      "$2.5$",
      "$3.0$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n$\\sin(\\theta) = \\frac{3}{5}$ se yeh 3-4-5 right triangle hai $\\implies \\cos(\\theta) = \\frac{4}{5} = 0.8$ aur $\\tan(\\theta) = \\frac{3}{4} = 0.75$.\n$$\\frac{\\tan(\\theta)}{\\sin(\\theta)} = \\frac{3/4}{3/5} = \\frac{5}{4} = 1.25$$\n$$\\cos(\\theta) + \\frac{\\tan(\\theta)}{\\sin(\\theta)} = 0.8 + 1.25 = 2.05 \\approx 2.1$$",
    "topic": "Trigonometric Identities"
  },
  {
    "id": 30,
    "module": 2,
    "text": "In triangle $ABC$, the measure of angle $A$ is twice the measure of angle $B$, and the measure of angle $C$ is $30^\\circ$ more than the measure of angle $B$. What is the measure of angle $A$ (in degrees)?",
    "options": [
      "$60^\\circ$",
      "$70^\\circ$",
      "$75^\\circ$",
      "$85^\\circ$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nLet $\\angle B = x$. To $\\angle A = 2x$ aur $\\angle C = x + 30^\\circ$.\nTriangle ke angles ka sum $= 180^\\circ$:\n$$x + 2x + (x + 30^\\circ) = 180^\\circ \\implies 4x + 30^\\circ = 180^\\circ \\implies 4x = 150^\\circ \\implies x = 37.5^\\circ$$\n$$\\angle A = 2(37.5^\\circ) = 75^\\circ$$",
    "topic": "Triangle Angle Theorems"
  },
  {
    "id": 31,
    "module": 2,
    "text": "A right circular cone and a sphere have the same radius $r$. The cone has a height of $12$. If the volume of the cone is equal to the volume of the sphere, what is the value of $r$?",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n- Cone volume: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi r^2(12) = 4\\pi r^2$\n- Sphere volume: $V = \\frac{4}{3}\\pi r^3$\n\nDono ko equal karo:\n$$4\\pi r^2 = \\frac{4}{3}\\pi r^3 \\implies 1 = \\frac{1}{3}r \\implies r = 3$$",
    "topic": "3D Geometry & Volumes"
  },
  {
    "id": 32,
    "module": 2,
    "text": "A researcher conducts an experiment to test a new drug for reducing blood pressure with 200 participants randomly assigned to treatment or placebo. Average reduction: Treatment $= 12\\text{ mmHg}$, Placebo $= 8\\text{ mmHg}$ ($p = 0.03$). A critic points out that the treatment group had a higher average baseline blood pressure. What is the minimum number of the following issues that are valid criticisms of this study?\n1. The study lacks random assignment.\n2. The results may be confounded by baseline differences.\n3. The p-value of 0.03 means there is a 3% chance the drug is ineffective.\n4. The placebo group should not have been included.",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct (Sirf 1 valid criticism hai).\n\n1. 'Random assignment nahi tha' — Galat (question clearly says randomly assigned).\n2. 'Baseline difference se confound ho sakta hai' — Sahi criticism hai (valid) ✓\n3. 'p=0.03 ka matlab 3% chance drug fail hai' — Galat interpretation hai.\n4. 'Placebo group nahi hona chahiye tha' — Galat, placebo control zaroori hota hai.\nIsliye sirf 1 valid criticism hai.",
    "topic": "Statistical Inference & Critiques"
  },
  {
    "id": 33,
    "module": 2,
    "text": "A polling company estimates the true proportion of residents who favor a new policy. In a random sample of $n = 400$ residents, $240$ favor the policy. The margin of error is calculated as $ME = 1.96 \\times \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$. What is the margin of error (rounded to three decimal places)?",
    "options": [
      "$0.024$",
      "$0.048$",
      "$0.052$",
      "$0.060$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n$$\\hat{p} = \\frac{240}{400} = 0.60$$\n$$ME = 1.96 \\times \\sqrt{\\frac{0.60 \\times 0.40}{400}} = 1.96 \\times \\sqrt{\\frac{0.24}{400}} = 1.96 \\times 0.0245 = 0.048$$",
    "topic": "Margin of Error Calculation"
  },
  {
    "id": 34,
    "module": 2,
    "text": "The table shows the distribution of 200 students by grade level and whether they play a sport.\n\nIf a student is selected at random from the seniors, what is the probability that the student plays a sport? Express your answer as a decimal rounded to the nearest hundredth.",
    "options": [
      "$0.17$",
      "$0.33$",
      "$0.67$",
      "$0.85$"
    ],
    "answer": 2,
    "useImage": true,
    "imageKey": "m2_q7_table",
    "explanation": "Choice C is correct.\n\nTable se Seniors row dekho:\n- Total seniors $= 30$\n- Seniors jo sport khelte hain $= 20$\n$$\\text{Probability} = \\frac{20}{30} = \\frac{2}{3} \\approx 0.67$$",
    "topic": "Conditional Probability & Tables"
  },
  {
    "id": 35,
    "module": 2,
    "text": "A scatterplot shows the relationship between the number of days since a plant was purchased ($x$) and its height in inches ($y$). The line of best fit is $y = 0.8x + 3.2$. The actual height of the plant on day 10 was $12\\text{ inches}$. What is the residual for this data point? $(\\text{Residual} = \\text{Actual} - \\text{Predicted})$",
    "options": [
      "$-0.8$",
      "$0.8$",
      "$1.2$",
      "$2.0$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n1. Predicted value nikalo at $x = 10$:\n$$\\hat{y} = 0.8(10) + 3.2 = 8 + 3.2 = 11.2$$\n\n2. $\\text{Residual} = \\text{Actual} - \\text{Predicted} = 12 - 11.2 = 0.8$.",
    "topic": "Residuals & Linear Regression"
  },
  {
    "id": 36,
    "module": 2,
    "text": "A data set of 7 numbers has a mean of $12$ and a median of $10$. The numbers are listed in ascending order: $4, 6, a, 10, b, c, 20$. If the range of the data set is $16$, what is the value of the sum $a + b + c$?",
    "options": [
      "$38$",
      "$40$",
      "$44$",
      "$48$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n7 numbers ka mean $= 12$, to total sum $= 12 \\times 7 = 84$.\nDiye gaye numbers ka sum: $4 + 6 + 10 + 20 = 40$.\nBaaki sum $(a + b + c) = 84 - 40 = 44$.",
    "topic": "Statistics & Mean"
  },
  {
    "id": 37,
    "module": 2,
    "text": "A store owner marks up the cost of an item by $40\\%$ to get the selling price. During a clearance sale, the store offers a $30\\%$ discount on the selling price. If the item sells for $\\$98$ during the clearance sale, what was the original cost of the item to the store owner?",
    "options": [
      "$\\$90$",
      "$\\$98$",
      "$\\$100$",
      "$\\$110$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nReverse mein solve karo:\n$$\\text{Cost} \\times 1.40\\text{ (markup)} \\times 0.70\\text{ (discount)} = 98$$\n$$\\text{Cost} \\times 0.98 = 98 \\implies \\text{Cost} = \\frac{98}{0.98} = \\$100$$",
    "topic": "Percentages & Multi-step Markup"
  },
  {
    "id": 38,
    "module": 2,
    "text": "A certain brand of paint costs $\\$24\\text{ per gallon}$. One gallon covers $350\\text{ square feet}$. A rectangular wall is $14\\text{ feet wide}$ and $10\\text{ feet tall}$. If the wall needs two coats of paint, and paint can only be purchased in full gallons, what is the total cost (in dollars) of the paint needed?",
    "options": [
      "$\\$24$",
      "$\\$48$",
      "$\\$72$",
      "$\\$96$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct.\n\nWall area $= 14 \\times 10 = 140\\text{ sq ft}$.\n2 coats chahiye $\\implies 140 \\times 2 = 280\\text{ sq ft}$.\nEk gallon $350\\text{ sq ft}$ cover karta hai ($280 \\le 350$), isliye sirf $1\\text{ full gallon}$ zaroori hai.\n$$\\text{Cost} = 1 \\times \\$24 = \\$24$$",
    "topic": "Unit Rates & Area Applications"
  },
  {
    "id": 39,
    "module": 2,
    "text": "The function $h(x) = 2x^2 + bx + c$ has its vertex at $(4, -10)$. What is the value of $b + c$?",
    "options": [
      "$-6$",
      "$6$",
      "$12$",
      "$16$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n1. Vertex $x$-coordinate formula: $-\\frac{b}{2a} = 4$, yahan $a = 2$:\n$$-\\frac{b}{4} = 4 \\implies b = -16$$\n\n2. Vertex $y$-coordinate $h(4) = -10$ se $c$ nikalo:\n$$2(4^2) + (-16)(4) + c = -10$$\n$$32 - 64 + c = -10 \\implies c = 22$$\n\n$$b + c = -16 + 22 = 6$$",
    "topic": "Quadratic Vertex Form"
  },
  {
    "id": 40,
    "module": 2,
    "text": "The system of equations below has exactly one real solution $(x, y)$. What is the value of $a$?\n$$y = x^2 + 4x + 7$$\n$$y = 2x + a$$",
    "options": [
      "$4$",
      "$6$",
      "$7$",
      "$8$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nDono equations barabar karo:\n$$x^2 + 4x + 7 = 2x + a \\implies x^2 + 2x + (7 - a) = 0$$\n\n'Exactly one solution' ka matlab discriminant $\\Delta = b^2 - 4ac = 0$:\n$$2^2 - 4(1)(7 - a) = 0$$\n$$4 - 28 + 4a = 0 \\implies 4a = 24 \\implies a = 6$$",
    "topic": "Nonlinear Systems & Discriminant"
  },
  {
    "id": 41,
    "module": 2,
    "text": "The expression $\\frac{2x^2 + 7x - 15}{x + 5} - \\frac{x^2 - 4}{x - 2}$ is equivalent to $ax + b$ for all values of $x$ where defined. What is the value of $a + b$?",
    "options": [
      "$-6$",
      "$-4$",
      "$4$",
      "$6$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n1. Pehla fraction simplify karo:\n$$\\frac{2x^2 + 7x - 15}{x + 5} = \\frac{(2x - 3)(x + 5)}{x + 5} = 2x - 3$$\n\n2. Doosra fraction simplify karo:\n$$\\frac{x^2 - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2} = x + 2$$\n\n3. Subtract karo:\n$$(2x - 3) - (x + 2) = x - 5$$\n$a = 1, b = -5 \\implies a + b = 1 + (-5) = -4$.",
    "topic": "Rational Expressions & Factoring"
  },
  {
    "id": 42,
    "module": 2,
    "text": "A system of inequalities is shown below:\n$$y \\le 2x + 1$$\n$$y > -x + 4$$\nIf $(x, y)$ is a point in the solution set and both $x$ and $y$ are integers, what is the smallest possible value of $x + y$?",
    "options": [
      "$4$",
      "$5$",
      "$6$",
      "$7$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nDono inequalities satisfy karne wale integer points try karo:\nJaise $x = 2, y = 3$:\n- $3 \\le 2(2) + 1 = 5$ ✓ (True)\n- $3 > -(2) + 4 = 2$ ✓ (True)\n\n$x + y = 2 + 3 = 5$ hi minimum possible value milta hai.",
    "topic": "Systems of Linear Inequalities"
  },
  {
    "id": 43,
    "module": 2,
    "text": "The system of equations below has infinitely many solutions. What is the value of $a$?\n$$5x + 2y = 8$$\n$$ax + 4y = 16$$",
    "options": [
      "$5$",
      "$8$",
      "$10$",
      "$12$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n'Infinitely many solutions' ke liye dono equations proportional (coincident lines) honi chahiye.\n$5x + 2y = 8$ ko $2$ se multiply karo:\n$$10x + 4y = 16$$\nAb $ax + 4y = 16$ se compare karne par: $a = 10$.",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 44,
    "module": 2,
    "text": "A linear function $h(x)$ has an $x$-intercept of $4$ and a $y$-intercept of $-6$. If $h(k) = 9$, what is the value of $k$?",
    "options": [
      "$8$",
      "$10$",
      "$12$",
      "$15$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n1. $x$-intercept $= 4$ matlab point $(4, 0)$, $y$-intercept $= -6$ matlab point $(0, -6)$:\n$$\\text{Slope } m = \\frac{0 - (-6)}{4 - 0} = \\frac{6}{4} = \\frac{3}{2}$$\nEquation: $h(x) = \\frac{3}{2}x - 6$\n\n2. $h(k) = 9$ solve karo:\n$$9 = \\frac{3}{2}k - 6 \\implies 15 = \\frac{3}{2}k \\implies k = 10$$",
    "topic": "Linear Functions & Intercepts"
  },
  {
    "id": 45,
    "module": 2,
    "text": "The system of equations below has infinitely many solutions:\n$$2x - 3y = 7$$\n$$ax - 6y = 14$$\nWhat is the value of $a$?",
    "options": [
      "$2$",
      "$4$",
      "$6$",
      "$8$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nInfinitely many solutions ke liye dono equations proportional honi chahiye:\n$2x - 3y = 7$ ko $2$ se multiply karo:\n$$4x - 6y = 14$$\nCompare karo $ax - 6y = 14$ se $\\implies a = 4$.",
    "topic": "Systems of Linear Equations"
  },
  {
    "id": 46,
    "module": 2,
    "text": "The equation $5(x - a) = 5x + 7a - 2$ is an identity with solutions for all $x$. What is the value of the constant $a$?",
    "options": [
      "$\\frac{1}{12}$",
      "$\\frac{1}{6}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{2}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nEquation ko simplify karo:\n$$5x - 5a = 5x + 7a - 2$$\n$5x$ dono sides se subtract ho jaata hai:\n$$-5a = 7a - 2 \\implies -12a = -2 \\implies a = \\frac{2}{12} = \\frac{1}{6}$$\n\nJab $a = \\frac{1}{6}$ hota hai, tab dono sides exactly identical banti hain ($-5(1/6) = 7(1/6)-2 = -5/6$), jisse infinite solutions hote hain.",
    "topic": "Linear Equations & Identities"
  },
  {
    "id": 47,
    "module": 2,
    "text": "A study finds that ice cream sales and shark attacks are strongly correlated. A news headline claims 'Eating ice cream causes shark attacks.' This is an error because:",
    "options": [
      "Correlation implies causation only if $r > 0.9$.",
      "There is likely a confounding variable (e.g., hot weather/summer).",
      "The sample size was too small.",
      "Correlation can never be used to make any claim."
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nIce cream aur shark attacks dono garmi (hot summer weather) ke season mein badhte hain jab zyada log beach par swimming karte hain. Garmi hi asli confounding variable hai, causation nahi.",
    "topic": "Correlation vs Causation"
  },
  {
    "id": 48,
    "module": 2,
    "text": "A $95\\%$ confidence interval for a population proportion is $(0.44, 0.56)$. Which of the following statements is correct?",
    "options": [
      "95% of the data falls between 0.44 and 0.56.",
      "There is a 95% chance the true proportion is in this interval.",
      "If repeated samples were taken, 95% of the resulting intervals would contain the true proportion.",
      "The sample proportion is definitely 0.50."
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n$95\\%$ confidence interval ka sahi interpretation: agar bohot saare random samples lekar intervals banaye jaayein, to unme se $95\\%$ intervals true population proportion ko cover karenge.",
    "topic": "Confidence Interval Interpretation"
  },
  {
    "id": 49,
    "module": 2,
    "text": "In a class, $60\\%$ are girls and $40\\%$ are boys. Among girls, $30\\%$ play chess. Among boys, $50\\%$ play chess. If a randomly selected student plays chess, what is the probability that the student is a girl?",
    "options": [
      "$0.18$",
      "$0.30$",
      "$0.4737$",
      "$0.5263$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n1. Total chess players nikalo:\n- Girls: $0.60 \\times 0.30 = 0.18$\n- Boys: $0.40 \\times 0.50 = 0.20$\n- Total $= 0.18 + 0.20 = 0.38$\n\n2. Girl hone ki probability (given chess plays):\n$$P(\\text{Girl} \\mid \\text{Chess}) = \\frac{0.18}{0.38} = \\frac{18}{38} = \\frac{9}{19} \\approx 0.4737$$",
    "topic": "Conditional Probability & Bayes Theorem"
  },
  {
    "id": 50,
    "module": 2,
    "text": "A scatterplot shows a strong negative correlation. Which of the following could not be the correlation coefficient $r$?",
    "options": [
      "$-0.95$",
      "$-0.50$",
      "$0.00$",
      "$-0.75$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\n'Strong negative correlation' ka matlab $r$ value negative aur $-1$ ke kareeb honi chahiye. $r = 0.00$ ka matlab koi linear correlation nahi hai, isliye yeh strong negative correlation nahi ho sakta.",
    "topic": "Correlation Coefficients"
  },
  {
    "id": 51,
    "module": 2,
    "text": "Data set A: $10, 12, 14, 16, 18$\nData set B: $50, 52, 54, 56, 58$\nWhich statement is true?",
    "options": [
      "Both mean and standard deviation are larger in B.",
      "Mean is larger in B, but standard deviation is the same.",
      "Mean is larger in B, but standard deviation is smaller.",
      "Both mean and standard deviation are the same."
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\nData set B ke saare numbers Data set A se $+40$ zyada hain (shift hua hai). Spacing/gap dono mein bilkul same hai.\nIsliye: Mean B mein zyada hoga, lekin Standard Deviation (spread) same rahega.",
    "topic": "Statistics & Transformations"
  },
  {
    "id": 52,
    "module": 2,
    "text": "The price of a stock increased by $20\\%$ on Monday and then decreased by $20\\%$ on Tuesday. What is the net percentage change from Monday morning to Tuesday evening?",
    "options": [
      "$0\\%$",
      "$2\\%\\text{ decrease}$",
      "$4\\%\\text{ decrease}$",
      "$4\\%\\text{ increase}$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct.\n\nShuru mein price $\\$100$ maan lo:\n- Monday: $+20\\% \\implies 100 \\times 1.20 = \\$120$.\n- Tuesday: $-20\\% \\implies 120 \\times 0.80 = \\$96$.\n\nNet change: $100$ se $96 \\implies 4\\%\\text{ decrease}$.",
    "topic": "Successive Percent Changes"
  },
  {
    "id": 53,
    "module": 2,
    "text": "The function $f(x) = -2x^2 + bx + c$ has its maximum at $x = 3$ and passes through the origin. What is the value of $b + c$?",
    "options": [
      "$6$",
      "$12$",
      "$18$",
      "$24$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct.\n\n1. Origin $(0, 0)$ se pass karta hai $\\implies f(0) = c = 0$.\n2. Maximum $x = 3$ par hai: $-\\frac{b}{2a} = 3 \\implies -\\frac{b}{2(-2)} = 3 \\implies \\frac{b}{4} = 3 \\implies b = 12$.\n\n$$b + c = 12 + 0 = 12$$",
    "topic": "Quadratic Vertex Form"
  },
  {
    "id": 54,
    "module": 2,
    "text": "A company sells pens for $\\$2\\text{ each}$ and pencils for $\\$1\\text{ each}$. It wants to earn at least $\\$50$ from selling at most $30\\text{ items total}$. Which system of inequalities represents this situation? (Let $x = \\text{pens}, y = \\text{pencils}$)",
    "options": [
      "$x + y \\le 30,\\quad 2x + y \\ge 50$",
      "$x + y \\ge 30,\\quad 2x + y \\le 50$",
      "$x + y \\le 30,\\quad 2x + y \\le 50$",
      "$x + y \\ge 30,\\quad 2x + y \\ge 50$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct.\n\n- 'At most 30 items' matlab total items 30 se kam ya barabar: $x + y \\le 30$.\n- 'Earn at least $50' matlab earning $50 ya usse zyada: $2x + y \\ge 50$.\nIsliye: $x + y \\le 30,\\quad 2x + y \\ge 50$.",
    "topic": "Systems of Linear Inequalities"
  }
];
