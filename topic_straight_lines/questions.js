// =============================================
// Digital SAT Practice Test - Straight Lines
// 18 Questions (Slope, Angle, Parallel, Perpendicular, Collinearity)
// Format: Authentic SAT Math Practice with LaTeX
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "What is the slope of a line that is equally inclined to the coordinate axes?",
    "options": [
      "$0$",
      "$1$",
      "$-1$",
      "$\\pm 1$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. A line equally inclined to the coordinate axes makes an angle of either $45^\\circ$ or $135^\\circ$ with the positive $x$-axis.\n- For $\\theta = 45^\\circ$: Slope $m = \\tan(45^\\circ) = 1$.\n- For $\\theta = 135^\\circ$: Slope $m = \\tan(135^\\circ) = -1$.\n\nTherefore, the possible slopes are $\\pm 1$ (Choice D).",
    "topic": "Slope & Inclination"
  },
  {
    "id": 2,
    "text": "Determine $x$ so that the inclination of the line containing the points $(x, -3)$ and $(2, 5)$ is $135^\\circ$.",
    "options": [
      "$5$",
      "$8$",
      "$10$",
      "$12$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The inclination is $\\theta = 135^\\circ$, so the slope is:\n$$m = \\tan(135^\\circ) = -1$$\n\nUsing the slope formula between $(x, -3)$ and $(2, 5)$:\n$$m = \\frac{5 - (-3)}{2 - x} = \\frac{8}{2 - x}$$\n\nEquating to $-1$:\n$$\\frac{8}{2 - x} = -1 \\implies 8 = -(2 - x) = x - 2 \\implies x = 8 + 2 = 10$$",
    "topic": "Slope & Inclination"
  },
  {
    "id": 3,
    "text": "The slope of a line joining the points $(7, 3)$ and $(K, 2)$ is $-4$. What is the value of $K$?",
    "options": [
      "$\\frac{25}{4}$",
      "$\\frac{29}{4}$",
      "$4$",
      "$-\\frac{29}{4}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Using the slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$:\n$$\\frac{2 - 3}{K - 7} = -4 \\implies \\frac{-1}{K - 7} = -4$$\n\nMultiply both sides by $-(K - 7)$:\n$$1 = 4(K - 7) = 4K - 28 \\implies 4K = 29 \\implies K = \\frac{29}{4}$$",
    "topic": "Slope Calculation"
  },
  {
    "id": 4,
    "text": "What is the value of $y$ so that the line through $(3, y)$ and $(2, 7)$ is parallel to the line through $(-1, 4)$ and $(0, 6)$?",
    "options": [
      "$5$",
      "$7$",
      "$9$",
      "$11$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Parallel lines have equal slopes.\n- Slope of the line through $(-1, 4)$ and $(0, 6)$:\n$$m_2 = \\frac{6 - 4}{0 - (-1)} = \\frac{2}{1} = 2$$\n\n- Slope of the line through $(3, y)$ and $(2, 7)$:\n$$m_1 = \\frac{y - 7}{3 - 2} = y - 7$$\n\nSetting $m_1 = m_2$:\n$$y - 7 = 2 \\implies y = 9$$",
    "topic": "Parallel Lines"
  },
  {
    "id": 5,
    "text": "What is the angle between the $x$-axis and the line joining the points $(3, -1)$ and $(4, -2)$?",
    "options": [
      "$45^\\circ$",
      "$90^\\circ$",
      "$120^\\circ$",
      "$135^\\circ$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Find the slope of the line:\n$$m = \\frac{-2 - (-1)}{4 - 3} = \\frac{-1}{1} = -1$$\n\nThe angle $\\theta$ that the line makes with the positive direction of the $x$-axis satisfies $\\tan \\theta = m = -1$.\nSince the inclination angle $\\theta \\in [0^\\circ, 180^\\circ)$:\n$$\\theta = 180^\\circ - 45^\\circ = 135^\\circ$$",
    "topic": "Angle of Inclination"
  },
  {
    "id": 6,
    "text": "What is the relationship between the line joining the points $(2, -3)$ and $(-5, 1)$ and the line joining the points $(7, -1)$ and $(0, 3)$?",
    "options": [
      "They are parallel.",
      "They are perpendicular.",
      "They intersect at a $45^\\circ$ angle.",
      "They are the same line."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Calculate the slopes of both lines:\n- First line slope: $m_1 = \\frac{1 - (-3)}{-5 - 2} = \\frac{4}{-7} = -\\frac{4}{7}$\n- Second line slope: $m_2 = \\frac{3 - (-1)}{0 - 7} = \\frac{4}{-7} = -\\frac{4}{7}$\n\nSince $m_1 = m_2 = -\\frac{4}{7}$, the two lines have equal slopes and are therefore parallel.",
    "topic": "Parallel & Perpendicular Lines"
  },
  {
    "id": 7,
    "text": "What is the relationship between the line joining the points $(2, -5)$ and $(-2, 5)$ and the line joining $(6, 3)$ and $(1, 1)$?",
    "options": [
      "They are parallel.",
      "They are perpendicular.",
      "They intersect at a $60^\\circ$ angle.",
      "They are the same line."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Calculate the slopes of both lines:\n- First line slope: $m_1 = \\frac{5 - (-5)}{-2 - 2} = \\frac{10}{-4} = -\\frac{5}{2}$\n- Second line slope: $m_2 = \\frac{1 - 3}{1 - 6} = \\frac{-2}{-5} = \\frac{2}{5}$\n\nCheck the product of their slopes:\n$$m_1 \\times m_2 = \\left(-\\frac{5}{2}\\right) \\times \\left(\\frac{2}{5}\\right) = -1$$\n\nBecause the product of their slopes is $-1$, the lines are perpendicular.",
    "topic": "Parallel & Perpendicular Lines"
  },
  {
    "id": 8,
    "text": "What is the tangent of the angle $\\theta$ between the lines joining the points $(-1, 2), (3, -5)$ and $(-2, 3), (5, 0)$?",
    "options": [
      "$\\tan \\theta = \\frac{49}{37}$",
      "$\\tan \\theta = \\frac{37}{49}$",
      "$\\tan \\theta = \\frac{12}{37}$",
      "$\\tan \\theta = 1$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Calculate both slopes:\n- $m_1 = \\frac{-5 - 2}{3 - (-1)} = \\frac{-7}{4} = -\\frac{7}{4}$\n- $m_2 = \\frac{0 - 3}{5 - (-2)} = \\frac{-3}{7} = -\\frac{3}{7}$\n\nUsing the angle between two lines formula $\\tan \\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$:\n$$m_1 - m_2 = -\\frac{7}{4} - \\left(-\\frac{3}{7}\\right) = -\\frac{7}{4} + \\frac{3}{7} = \\frac{-49 + 12}{28} = -\\frac{37}{28}$$\n$$1 + m_1 m_2 = 1 + \\left(-\\frac{7}{4}\\right)\\left(-\\frac{3}{7}\\right) = 1 + \\frac{3}{4} = \\frac{7}{4} = \\frac{49}{28}$$\n$$\\tan \\theta = \\left|\\frac{-37/28}{49/28}\\right| = \\frac{37}{49}$$",
    "topic": "Angle Between Two Lines"
  },
  {
    "id": 9,
    "text": "If the line through the points $(-2, 6)$ and $(4, 8)$ is perpendicular to the line through the points $(8, 12)$ and $(x, 24)$, what is the value of $x$?",
    "options": [
      "$2$",
      "$4$",
      "$6$",
      "$-4$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Find the slope of the first line:\n$$m_1 = \\frac{8 - 6}{4 - (-2)} = \\frac{2}{6} = \\frac{1}{3}$$\n\nFor the two lines to be perpendicular, the slope of the second line must be the negative reciprocal:\n$$m_2 = -\\frac{1}{m_1} = -3$$\n\nUsing the slope formula for the second line:\n$$\\frac{24 - 12}{x - 8} = -3 \\implies \\frac{12}{x - 8} = -3 \\implies x - 8 = -4 \\implies x = 4$$",
    "topic": "Perpendicular Lines"
  },
  {
    "id": 10,
    "text": "The points $(1, 2)$, $(4, 5)$ and $(6, 3)$ represent the vertices of which type of polygon?",
    "options": [
      "Scalene Triangle",
      "Equilateral Triangle",
      "Right Triangle",
      "Isosceles Triangle"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Let the vertices be $A(1, 2)$, $B(4, 5)$, and $C(6, 3)$.\nCalculate slopes of sides:\n- Slope of $AB = \\frac{5 - 2}{4 - 1} = \\frac{3}{3} = 1$\n- Slope of $BC = \\frac{3 - 5}{6 - 4} = \\frac{-2}{2} = -1$\n\nSince $m_{AB} \\times m_{BC} = (1)(-1) = -1$, side $AB$ is perpendicular to side $BC$ (angle $B = 90^\\circ$).\nAlternatively, by distances:\n- $AB^2 = (4-1)^2 + (5-2)^2 = 9 + 9 = 18$\n- $BC^2 = (6-4)^2 + (3-5)^2 = 4 + 4 = 8$\n- $AC^2 = (6-1)^2 + (3-2)^2 = 25 + 1 = 26$\n\nSince $AB^2 + BC^2 = 18 + 8 = 26 = AC^2$, the triangle is a Right Triangle.",
    "topic": "Geometric Figures & Slopes"
  },
  {
    "id": 11,
    "text": "Which of the following statements is true about the points $P(6, -1)$, $Q(5, 0)$ and $R(2, 3)$?",
    "options": [
      "They form a right triangle.",
      "They are collinear.",
      "They form an equilateral triangle.",
      "They are the vertices of a parabola."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Three points are collinear if the slope between any two pairs is identical:\n- Slope $m_{PQ} = \\frac{0 - (-1)}{5 - 6} = \\frac{1}{-1} = -1$\n- Slope $m_{QR} = \\frac{3 - 0}{2 - 5} = \\frac{3}{-3} = -1$\n\nSince $m_{PQ} = m_{QR} = -1$ and both line segments share the common point $Q$, the points $P, Q,$ and $R$ lie on the same straight line (they are collinear).",
    "topic": "Collinearity of Points"
  },
  {
    "id": 12,
    "text": "For what value of $x$ are the points $(x, -1)$, $(2, 1)$ and $(4, 5)$ collinear?",
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Collinear points have equal slopes between every pair:\n- Slope between $(2, 1)$ and $(4, 5)$:\n$$m = \\frac{5 - 1}{4 - 2} = \\frac{4}{2} = 2$$\n\n- Slope between $(x, -1)$ and $(2, 1)$:\n$$\\frac{1 - (-1)}{2 - x} = \\frac{2}{2 - x}$$\n\nEquating to $2$:\n$$\\frac{2}{2 - x} = 2 \\implies 2 - x = 1 \\implies x = 1$$",
    "topic": "Collinearity of Points"
  },
  {
    "id": 13,
    "text": "The points $(-2, -1)$, $(4, 0)$, $(3, 3)$ and $(-3, 2)$ are the vertices of a:",
    "options": [
      "Kite",
      "Trapezoid",
      "Parallelogram",
      "Regular Hexagon"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Let the vertices be $A(-2, -1), B(4, 0), C(3, 3), D(-3, 2)$.\nCalculate the slopes of all four sides:\n- Slope $AB = \\frac{0 - (-1)}{4 - (-2)} = \\frac{1}{6}$\n- Slope $CD = \\frac{2 - 3}{-3 - 3} = \\frac{-1}{-6} = \\frac{1}{6} \\implies AB \\parallel CD$\n- Slope $BC = \\frac{3 - 0}{3 - 4} = \\frac{3}{-1} = -3$\n- Slope $DA = \\frac{-1 - 2}{-2 - (-3)} = \\frac{-3}{1} = -3 \\implies BC \\parallel DA$\n\nSince both pairs of opposite sides are parallel, the quadrilateral is a Parallelogram.",
    "topic": "Quadrilaterals in Coordinate Plane"
  },
  {
    "id": 14,
    "text": "The points $P(2, -2)$, $Q(8, 4)$, $R(5, 7)$ and $S(-1, 1)$ are the vertices of a:",
    "options": [
      "Rhombus",
      "Trapezoid",
      "Rectangle",
      "Kite"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Calculate slopes of all four sides:\n- Slope $PQ = \\frac{4 - (-2)}{8 - 2} = \\frac{6}{6} = 1$\n- Slope $RS = \\frac{1 - 7}{-1 - 5} = \\frac{-6}{-6} = 1 \\implies PQ \\parallel RS$\n- Slope $QR = \\frac{7 - 4}{5 - 8} = \\frac{3}{-3} = -1$\n- Slope $SP = \\frac{-2 - 1}{2 - (-1)} = \\frac{-3}{3} = -1 \\implies QR \\parallel SP$\n\nAdjacent sides have slopes $1$ and $-1$, whose product is $1 \\times (-1) = -1$ (all angles are $90^\\circ$).\nLengths of adjacent sides:\n- $PQ = \\sqrt{(8-2)^2 + (4-(-2))^2} = \\sqrt{36 + 36} = \\sqrt{72} = 6\\sqrt{2}$\n- $QR = \\sqrt{(5-8)^2 + (7-4)^2} = \\sqrt{9 + 9} = \\sqrt{18} = 3\\sqrt{2}$\n\nSince opposite sides are parallel, all interior angles are right angles, and adjacent sides are unequal, $PQRS$ is a Rectangle.",
    "topic": "Quadrilaterals in Coordinate Plane"
  },
  {
    "id": 15,
    "text": "A quadrilateral has vertices at the points $(-4, 2)$, $(2, 6)$, $(8, 5)$ and $(9, -7)$. The midpoints of the sides of this quadrilateral form a:",
    "options": [
      "Rectangle",
      "Rhombus",
      "Square",
      "Parallelogram"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. According to Varignon's Theorem, the polygon formed by joining the midpoints of the sides of ANY quadrilateral (convex or concave) is ALWAYS a Parallelogram.\n\nVerification by midpoints:\n- $M_1 = \\left(\\frac{-4+2}{2}, \\frac{2+6}{2}\\right) = (-1, 4)$\n- $M_2 = \\left(\\frac{2+8}{2}, \\frac{6+5}{2}\\right) = (5, 5.5)$\n- $M_3 = \\left(\\frac{8+9}{2}, \\frac{5-7}{2}\\right) = (8.5, -1)$\n- $M_4 = \\left(\\frac{9-4}{2}, \\frac{-7+2}{2}\\right) = (2.5, -2.5)$\n\nSlopes:\n- Slope $M_1 M_2 = \\frac{5.5 - 4}{5 - (-1)} = \\frac{1.5}{6} = \\frac{1}{4}$\n- Slope $M_4 M_3 = \\frac{-1 - (-2.5)}{8.5 - 2.5} = \\frac{1.5}{6} = \\frac{1}{4} \\implies M_1 M_2 \\parallel M_4 M_3$\n- Slope $M_2 M_3 = \\frac{-1 - 5.5}{8.5 - 5} = \\frac{-6.5}{3.5} = -\\frac{13}{7}$\n- Slope $M_1 M_4 = \\frac{-2.5 - 4}{2.5 - (-1)} = \\frac{-6.5}{3.5} = -\\frac{13}{7} \\implies M_2 M_3 \\parallel M_1 M_4$\n\nHence, the figure is a Parallelogram.",
    "topic": "Varignon's Theorem & Midpoints"
  },
  {
    "id": 16,
    "text": "The slope of a line is three times the slope of another line. If the tangent of the angle between them is $\\frac{1}{2}$, what are the possible slopes of the lines?",
    "options": [
      "$\\frac{1}{2}, \\frac{3}{2}$ or $2, 6$",
      "$\\frac{1}{3}, 1$ or $1, 3$",
      "$\\frac{1}{4}, \\frac{3}{4}$ or $2, 3$",
      "$1, 3$ only"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let the slopes of the two lines be $m$ and $3m$.\nUsing the angle formula $\\tan \\theta = \\left|\\frac{m_2 - m_1}{1 + m_1 m_2}\\right|$:\n$$\\tan \\theta = \\left|\\frac{3m - m}{1 + (3m)(m)}\\right| = \\left|\\frac{2m}{1 + 3m^2}\\right| = \\frac{1}{2}$$\n\nCase 1: $\\frac{2m}{1 + 3m^2} = \\frac{1}{2}$\n$$1 + 3m^2 = 4m \\implies 3m^2 - 4m + 1 = 0 \\implies (3m - 1)(m - 1) = 0$$\n- If $m = \\frac{1}{3}$, the slopes are $m = \\frac{1}{3}$ and $3m = 1$.\n- If $m = 1$, the slopes are $m = 1$ and $3m = 3$.\n\nThus, the possible pairs of slopes are $\\frac{1}{3}, 1$ or $1, 3$ (Choice B).",
    "topic": "Angle Between Two Lines"
  },
  {
    "id": 17,
    "text": "If the angle between two lines is $\\frac{\\pi}{4}$ ($45^\\circ$) and the slope of one of the lines is $\\frac{1}{2}$, what is the possible slope of the other line?",
    "options": [
      "$2$ or $-\\frac{1}{2}$",
      "$3$ or $-\\frac{1}{3}$",
      "$1$ or $-1$",
      "$4$ or $-\\frac{1}{4}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. We know $\\theta = \\frac{\\pi}{4} \\implies \\tan \\theta = \\tan(45^\\circ) = 1$. Let $m_1 = \\frac{1}{2}$ and the other slope be $m$.\n$$\\left|\\frac{m - 1/2}{1 + (1/2)m}\\right| = 1 \\implies \\left|\\frac{2m - 1}{2 + m}\\right| = 1$$\n\n- Case 1: $\\frac{2m - 1}{2 + m} = 1 \\implies 2m - 1 = 2 + m \\implies m = 3$\n- Case 2: $\\frac{2m - 1}{2 + m} = -1 \\implies 2m - 1 = -2 - m \\implies 3m = -1 \\implies m = -\\frac{1}{3}$\n\nTherefore, the possible slopes are $3$ or $-\\frac{1}{3}$ (Choice B).",
    "topic": "Angle Between Two Lines"
  },
  {
    "id": 18,
    "text": "What is the acute angle between the $y$-axis and the line joining the points $(4, 3\\sqrt{3})$ and $(3, 2\\sqrt{3})$?",
    "options": [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Calculate the slope of the line:\n$$m = \\frac{2\\sqrt{3} - 3\\sqrt{3}}{3 - 4} = \\frac{-\\sqrt{3}}{-1} = \\sqrt{3}$$\n\nThe angle $\\theta$ that the line makes with the positive $x$-axis is:\n$$\\theta = \\tan^{-1}(\\sqrt{3}) = 60^\\circ$$\n\nBecause the $y$-axis is perpendicular to the $x$-axis ($90^\\circ$), the angle between this line and the $y$-axis is:\n$$\\text{Acute Angle with } y\\text{-axis} = 90^\\circ - 60^\\circ = 30^\\circ$$",
    "topic": "Angle with Coordinate Axes"
  }
];
