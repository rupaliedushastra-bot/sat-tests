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
    "explanation": "Choice D is correct.\n\n1. Expand both sides of the equation by distributing the coefficients:\n$$4(2x - 5) = 8x - 20$$\n$$3(x + 10) = 3x + 30$$\n\n2. Set the expressions equal and solve for $x$:\n$$8x - 20 = 3x + 30$$\n$$8x - 3x = 30 + 20$$\n$$5x = 50 \\implies x = 10$$",
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
    "explanation": "Choice C is correct.\n\nSubstitute the expression for $y$ ($y = 2x - 5$) into the first equation:\n$$3x + 2(2x - 5) = 18$$\n$$3x + 4x - 10 = 18$$\n$$7x - 10 = 18 \\implies 7x = 28 \\implies x = 4$$",
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
    "explanation": "Choice C is correct.\n\n1. Find the slope ($m$) using the points $(1, 4)$ and $(3, 10)$:\n$$m = \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3$$\n\n2. Use $(1, 4)$ to find the $y$-intercept ($b$):\n$$4 = 3(1) + b \\implies b = 1$$\nEquation: $g(x) = 3x + 1$\n\n3. Evaluate $g(5)$:\n$$g(5) = 3(5) + 1 = 15 + 1 = 16$$",
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
    "explanation": "Choice B is correct.\n\nAdd the two equations to eliminate $y$:\n$$(2x + y) + (x - y) = 10 + 2 \\implies 3x = 12 \\implies x = 4$$\n\nSubstitute $x = 4$ into $x - y = 2$:\n$$4 - y = 2 \\implies y = 2$$\n\nTherefore, the solution is $(4, 2)$.",
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
    "explanation": "Choice A is correct.\n\n- The inequality $y > 2x - 3$ contains a strict inequality ($>$ rather than $\\ge$), so the boundary line is dashed.\n- The $>$ symbol indicates that the region above the line (greater $y$-values) is shaded.\nTherefore: 'A dashed line with shading above'.",
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
    "explanation": "Choice C is correct.\n\n1. Expand both expressions:\n- $(x + 3)(2x - 1) = 2x^2 - x + 6x - 3 = 2x^2 + 5x - 3$\n- $(x - 2)(x + 4) = x^2 + 4x - 2x - 8 = x^2 + 2x - 8$\n\n2. Subtract the second expression from the first:\n$$(2x^2 + 5x - 3) - (x^2 + 2x - 8) = x^2 + 3x + 5$$\n\n3. Comparing with $ax^2 + bx + c$, we get $a = 1, b = 3, c = 5$:\n$$a + b + c = 1 + 3 + 5 = 9$$",
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
    "explanation": "Choice B is correct.\n\nFactor the quadratic equation (find two numbers whose product is $6$ and sum is $-5$, which are $-2$ and $-3$):\n$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$\n$$x - 2 = 0 \\implies x = 2$$\n$$x - 3 = 0 \\implies x = 3$$",
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
    "explanation": "Choice B is correct.\n\nThe function is in vertex form: $f(x) = a(x - h)^2 + k$, where the vertex is $(h, k) = (3, 8)$.\nBecause the leading coefficient $a = -2$ is negative, the parabola opens downward. This means the vertex is the maximum point $\\implies$ maximum value $= 8$.",
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
    "explanation": "Choice B is correct.\n\n1. Calculate the speed (rate):\n$$\\text{Speed} = \\frac{210\\text{ miles}}{3.5\\text{ hours}} = 60\\text{ miles/hour}$$\n\n2. Find the distance traveled in $5\\text{ hours}$:\n$$\\text{Distance} = 60 \\times 5 = 300\\text{ miles}$$",
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
    "explanation": "Choice B is correct.\n\n- **Step 1 (Discount):** A $25\\%$ discount on $\\$800$ means the price is $75\\%$ of original:\n$$800 \\times 0.75 = \\$600$$\n\n- **Step 2 (Sales Tax):** Adding $8\\%$ sales tax to $\\$600$:\n$$600 \\times 1.08 = \\$648$$",
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
    "explanation": "Choice C is correct.\n\nThere are 8 scores (an even count) already arranged in ascending order. The median is the average of the two middle scores (4th and 5th):\n$$\\text{Median} = \\frac{85 + 88}{2} = 86.5$$",
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
    "explanation": "Choice C is correct.\n\n1. Find the slope:\n$$m = \\frac{28 - 10}{8 - 2} = \\frac{18}{6} = 3$$\n\n2. Use $(2, 10)$ to find the $y$-intercept ($b$):\n$$10 = 3(2) + b \\implies b = 4$$\nLine equation: $y = 3x + 4$\n\n3. Substitute $x = 5$:\n$$y = 3(5) + 4 = 15 + 4 = 19$$",
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
    "explanation": "Choice C is correct.\n\nTotal marbles $= 5 + 3 + 2 = 10$.\nNumber of marbles that are 'not blue' $= 5\\text{ (red)} + 2\\text{ (green)} = 7$.\n$$\\text{Probability} = \\frac{7}{10}$$",
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
    "explanation": "Choice A is correct.\n\nSample proportion $= 60\\%$, Margin of error $= \\pm 4\\%$.\nConfidence interval $= 60\\% - 4\\%$ to $60\\% + 4\\% = 56\\% \\text{ to } 64\\%$.",
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
    "explanation": "Choice A is correct.\n\nCoffee drinkers in the study also tended to follow a healthier lifestyle (more exercise, healthier diet). This extraneous factor is linked to both coffee consumption and heart disease, making it unclear whether the benefit came from coffee or healthy habits. This is a classic **Confounding Variable**.",
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
    "explanation": "Choice B is correct.\n\nPythagorean Theorem: $\\text{length}^2 + \\text{width}^2 = \\text{diagonal}^2$\n$$12^2 + w^2 = 13^2 \\implies 144 + w^2 = 169 \\implies w^2 = 25 \\implies w = 5\\text{ cm}$$\n$$\\text{Area} = \\text{length} \\times \\text{width} = 12 \\times 5 = 60\\text{ cm}^2$$",
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
    "explanation": "Choice C is correct.\n\nWhen two parallel lines are cut by a transversal, alternate interior angles are congruent (equal).\nSince Angle 1 $= 115^\\circ$, Angle 2 is also $= 115^\\circ$.",
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
    "explanation": "Choice B is correct.\n\n$$\\tan(Z) = \\frac{\\text{Opposite Side}}{\\text{Adjacent Side}}$$\nFor angle $Z$, the opposite side is $XY = 8$, and the adjacent side is $YZ = 6$.\n$$\\tan(Z) = \\frac{8}{6} = \\frac{4}{3}$$",
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
    "explanation": "Choice C is correct.\n\n1. Area of the entire circle $= \\pi r^2 = 3.14 \\times 6^2 = 3.14 \\times 36 = 113.04$.\n2. Fraction of the circle corresponding to $60^\\circ$: $\\frac{60^\\circ}{360^\\circ} = \\frac{1}{6}$.\n3. Sector area $= 113.04 \\times \\frac{1}{6} = 18.84$.",
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
    "explanation": "Choice C is correct.\n\nMultiply the entire equation by $6$ (LCM of 3 and 2) to eliminate the fractions:\n$$6\\left(\\frac{2x}{3} + 5\\right) = 6\\left(\\frac{x}{2} + 9\\right)$$\n$$4x + 30 = 3x + 54$$\n$$4x - 3x = 54 - 30 \\implies x = 24$$",
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
    "explanation": "Choice B is correct.\n\n$$-2x + 5 > 11 \\implies -2x > 6$$\nDivide both sides by $-2$ — dividing by a negative number reverses the inequality sign:\n$$x < \\frac{6}{-2} \\implies x < -3$$",
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
    "explanation": "Choice A is correct.\n\nThe vertex form is $y = a(x - h)^2 + k$, where $(h, k)$ is the vertex.\nComparing with $y = (x - 2)^2 + 3$, we have $h = 2$ and $k = 3 \\implies \\text{Vertex} = (2, 3)$.",
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
    "explanation": "Choice B is correct.\n\n1. Find the slope: $m = \\frac{11 - 5}{4 - 2} = \\frac{6}{2} = 3$.\n2. Use the point $(2, 5)$ to find the $y$-intercept ($b$):\n$$5 = 3(2) + b \\implies 5 = 6 + b \\implies b = -1$$\n$y$-intercept $= -1$.",
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
    "explanation": "Choice C is correct.\n\n$$\\text{Speed} = \\frac{180}{3} = 60\\text{ mph}$$\nIn $5\\text{ hours}$: $60 \\times 5 = 300\\text{ miles}$.",
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
    "explanation": "Choice B is correct.\n\nThe 5 numbers are already arranged in ascending order. Since the count is odd, the median is the middle (3rd) value $\\implies 80$.",
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
    "explanation": "Choice C is correct.\n\nThe perpendicular line from the center $O$ to the midpoint of chord $AB$ forms a right triangle:\n- Half chord length $= \\frac{12}{2} = 6$\n- Distance from center $= 8$\n- Radius (hypotenuse) $r = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$\n$$\\text{Diameter} = 2r = 2 \\times 10 = 20$$",
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
    "explanation": "Choice B is correct.\n\nSince $\\sin(\\theta) = \\frac{3}{5}$, this is a 3-4-5 right triangle $\\implies \\cos(\\theta) = \\frac{4}{5} = 0.8$ and $\\tan(\\theta) = \\frac{3}{4} = 0.75$.\n$$\\frac{\\tan(\\theta)}{\\sin(\\theta)} = \\frac{3/4}{3/5} = \\frac{5}{4} = 1.25$$\n$$\\cos(\\theta) + \\frac{\\tan(\\theta)}{\\sin(\\theta)} = 0.8 + 1.25 = 2.05 \\approx 2.1$$",
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
    "explanation": "Choice C is correct.\n\nLet $\\angle B = x$. Then $\\angle A = 2x$ and $\\angle C = x + 30^\\circ$.\nThe sum of angles in a triangle is $180^\\circ$:\n$$x + 2x + (x + 30^\\circ) = 180^\\circ \\implies 4x + 30^\\circ = 180^\\circ \\implies 4x = 150^\\circ \\implies x = 37.5^\\circ$$\n$$\\angle A = 2(37.5^\\circ) = 75^\\circ$$",
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
    "explanation": "Choice B is correct.\n\n- Volume of the cone: $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi r^2(12) = 4\\pi r^2$\n- Volume of the sphere: $V = \\frac{4}{3}\\pi r^3$\n\nSet the two volumes equal:\n$$4\\pi r^2 = \\frac{4}{3}\\pi r^3 \\implies 1 = \\frac{1}{3}r \\implies r = 3$$",
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
    "explanation": "Choice B is correct (There is only 1 valid criticism).\n\n1. 'The study lacks random assignment' — False (the prompt clearly states participants were randomly assigned).\n2. 'The results may be confounded by baseline differences' — True (valid criticism) ✓\n3. 'The p-value of 0.03 means there is a 3% chance the drug is ineffective' — False interpretation of p-value.\n4. 'The placebo group should not have been included' — False (placebo control is necessary in clinical trials).\nTherefore, there is only 1 valid criticism.",
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
    "explanation": "Choice C is correct.\n\nFrom the 'Seniors' row in the table:\n- Total seniors $= 30$\n- Seniors who play a sport $= 20$\n$$\\text{Probability} = \\frac{20}{30} = \\frac{2}{3} \\approx 0.67$$",
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
    "explanation": "Choice B is correct.\n\n1. Calculate the predicted value at $x = 10$:\n$$\\hat{y} = 0.8(10) + 3.2 = 8 + 3.2 = 11.2$$\n\n2. $\\text{Residual} = \\text{Actual} - \\text{Predicted} = 12 - 11.2 = 0.8$.",
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
    "explanation": "Choice C is correct.\n\nThe mean of 7 numbers is $12$, so the total sum is $12 \\times 7 = 84$.\nSum of the given numbers: $4 + 6 + 10 + 20 = 40$.\nSum of the remaining numbers: $a + b + c = 84 - 40 = 44$.",
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
    "explanation": "Choice C is correct.\n\nSolve backwards from the final price:\n$$\\text{Cost} \\times 1.40\\text{ (markup)} \\times 0.70\\text{ (discount)} = 98$$\n$$\\text{Cost} \\times 0.98 = 98 \\implies \\text{Cost} = \\frac{98}{0.98} = \\$100$$",
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
    "explanation": "Choice A is correct.\n\nWall area $= 14 \\times 10 = 140\\text{ sq ft}$.\nFor 2 coats: $140 \\times 2 = 280\\text{ sq ft}$.\nOne gallon covers $350\\text{ sq ft}$ ($280 \\le 350$), so only $1\\text{ full gallon}$ is needed.\n$$\\text{Cost} = 1 \\times \\$24 = \\$24$$",
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
    "explanation": "Choice B is correct.\n\n1. Vertex $x$-coordinate formula: $-\\frac{b}{2a} = 4$, with $a = 2$:\n$$-\\frac{b}{4} = 4 \\implies b = -16$$\n\n2. Using the vertex $y$-coordinate $h(4) = -10$, solve for $c$:\n$$2(4^2) + (-16)(4) + c = -10$$\n$$32 - 64 + c = -10 \\implies c = 22$$\n\n$$b + c = -16 + 22 = 6$$",
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
    "explanation": "Choice B is correct.\n\nSet the two equations equal:\n$$x^2 + 4x + 7 = 2x + a \\implies x^2 + 2x + (7 - a) = 0$$\n\n'Exactly one solution' means the discriminant $\\Delta = b^2 - 4ac = 0$:\n$$2^2 - 4(1)(7 - a) = 0$$\n$$4 - 28 + 4a = 0 \\implies 4a = 24 \\implies a = 6$$",
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
    "explanation": "Choice B is correct.\n\n1. Simplify the first fraction:\n$$\\frac{2x^2 + 7x - 15}{x + 5} = \\frac{(2x - 3)(x + 5)}{x + 5} = 2x - 3$$\n\n2. Simplify the second fraction:\n$$\\frac{x^2 - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2} = x + 2$$\n\n3. Subtract:\n$$(2x - 3) - (x + 2) = x - 5$$\n$a = 1, b = -5 \\implies a + b = 1 + (-5) = -4$.",
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
    "explanation": "Choice B is correct.\n\nWe need integer coordinates $(x, y)$ that satisfy both inequalities:\n- $y \\le 2x + 1$\n- $y > -x + 4 \\implies x + y > 4$\nSince $x + y$ must be an integer strictly greater than $4$, the smallest possible value is $5$.\nTesting $(x, y) = (2, 3)$:\n- $3 \\le 2(2) + 1 = 5$ ✓ (True)\n- $3 > -(2) + 4 = 2$ ✓ (True)\nThus, the minimum value of $x + y$ is $2 + 3 = 5$.",
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
    "explanation": "Choice C is correct.\n\nFor a system to have 'infinitely many solutions', the two equations must be proportional (representing the same line).\nMultiply $5x + 2y = 8$ by $2$:\n$$10x + 4y = 16$$\nComparing with $ax + 4y = 16$, we find $a = 10$.",
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
    "explanation": "Choice B is correct.\n\n1. The $x$-intercept is $(4, 0)$ and the $y$-intercept is $(0, -6)$:\n$$\\text{Slope } m = \\frac{0 - (-6)}{4 - 0} = \\frac{6}{4} = \\frac{3}{2}$$\nEquation: $h(x) = \\frac{3}{2}x - 6$\n\n2. Solve $h(k) = 9$:\n$$9 = \\frac{3}{2}k - 6 \\implies 15 = \\frac{3}{2}k \\implies k = 10$$",
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
    "explanation": "Choice B is correct.\n\nFor infinitely many solutions, the two equations must be proportional:\nMultiply $2x - 3y = 7$ by $2$:\n$$4x - 6y = 14$$\nComparing with $ax - 6y = 14$, we get $a = 4$.",
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
    "explanation": "Choice B is correct.\n\nSimplify the equation:\n$$5x - 5a = 5x + 7a - 2$$\nSubtract $5x$ from both sides:\n$$-5a = 7a - 2 \\implies -12a = -2 \\implies a = \\frac{2}{12} = \\frac{1}{6}$$\n\nWhen $a = \\frac{1}{6}$, both sides are identical ($-5/6 = -5/6$), resulting in infinitely many solutions.",
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
    "explanation": "Choice B is correct.\n\nBoth ice cream sales and shark attacks increase during hot summer weather when more people are outdoors and swimming at the beach. Hot weather is the confounding variable; eating ice cream does not cause shark attacks.",
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
    "explanation": "Choice C is correct.\n\nThe correct interpretation of a $95\\%$ confidence interval: if repeated random samples were taken and intervals constructed, $95\\%$ of those intervals would contain the true population proportion.",
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
    "explanation": "Choice C is correct.\n\n1. Calculate total proportion of chess players:\n- Girls: $0.60 \\times 0.30 = 0.18$\n- Boys: $0.40 \\times 0.50 = 0.20$\n- Total $= 0.18 + 0.20 = 0.38$\n\n2. Probability of being a girl given the student plays chess:\n$$P(\\text{Girl} \\mid \\text{Chess}) = \\frac{0.18}{0.38} = \\frac{18}{38} = \\frac{9}{19} \\approx 0.4737$$",
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
    "explanation": "Choice C is correct.\n\nA 'strong negative correlation' requires $r$ to be negative and close to $-1$. A value of $r = 0.00$ indicates no linear correlation at all, so it cannot represent a strong negative correlation.",
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
    "explanation": "Choice B is correct.\n\nEvery number in Data set B is exactly $40$ greater than the corresponding number in Data set A (a constant shift). The spacing/spread between numbers is identical.\nTherefore, the mean is larger in B, but the standard deviation remains the same.",
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
    "explanation": "Choice C is correct.\n\nAssume the initial price is $\\$100$:\n- Monday: $+20\\% \\implies 100 \\times 1.20 = \\$120$.\n- Tuesday: $-20\\% \\implies 120 \\times 0.80 = \\$96$.\n\nNet change: From $100$ to $96 \\implies 4\\%\\text{ decrease}$.",
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
    "explanation": "Choice B is correct.\n\n1. Passes through the origin $(0, 0) \\implies f(0) = c = 0$.\n2. Maximum occurs at $x = 3$: $-\\frac{b}{2a} = 3 \\implies -\\frac{b}{2(-2)} = 3 \\implies \\frac{b}{4} = 3 \\implies b = 12$.\n\n$$b + c = 12 + 0 = 12$$",
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
    "explanation": "Choice A is correct.\n\n- 'At most 30 items' means the total count is less than or equal to 30: $x + y \\le 30$.\n- 'Earn at least $50' means the revenue is greater than or equal to 50: $2x + y \\ge 50$.\nTherefore: $x + y \\le 30,\\quad 2x + y \\ge 50$.",
    "topic": "Systems of Linear Inequalities"
  }
];
