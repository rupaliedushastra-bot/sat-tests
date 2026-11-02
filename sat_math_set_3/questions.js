// =============================================
// SAT-style Practice Set 3: Mathematics Module 1
// Lines and Coordinate Geometry (15 Questions)
// Full LaTeX, Options, Explanations, and Accepted Answers
// =============================================

const QUESTIONS = [
  {
    id: 1,
    qnum: 1,
    section: 'math',
    module: 1,
    topic: 'Coordinate Geometry (Reflection & Perpendicular Bisectors)',
    difficulty: 'Hard',
    isFillIn: true,
    text: '<p>In the $xy$-plane, point $P(1, 7)$ is the reflection of point $Q(9, 1)$ across line $L$. If the equation of line $L$ is written in the form $ax + by = c$, where $a, b,$ and $c$ are integers with no common factor greater than $1$ and $a > 0$, what is the value of $a + b + c$?</p>',
    options: [],
    answer: '9',
    acceptedAnswers: ['9', '9.0'],
    explanation: 'Line $L$ is the perpendicular bisector of segment $PQ$.<br>1) The midpoint of $PQ$ is $\\left(\\frac{1 + 9}{2}, \\frac{7 + 1}{2}\\right) = (5, 4)$.<br>2) The slope of segment $PQ$ is $\\frac{1 - 7}{9 - 1} = \\frac{-6}{8} = -\\frac{3}{4}$, so the perpendicular slope is $m = \\frac{4}{3}$.<br>3) Using point-slope form: $$y - 4 = \\frac{4}{3}(x - 5) \\implies 3(y - 4) = 4(x - 5) \\implies 4x - 3y = 8$$<br>Here $a = 4, b = -3, c = 8$ with $\\gcd(4, -3, 8) = 1$ and $a > 0$.<br>Therefore, $a + b + c = 4 + (-3) + 8 = 9$.'
  },
  {
    id: 2,
    qnum: 2,
    section: 'math',
    module: 1,
    topic: 'Linear Functions (Intercepts & Slope)',
    difficulty: 'Hard',
    isFillIn: false,
    text: '<p>A line with a negative slope passes through the point $(4, 9)$. The line intersects the positive $x$-axis at $(p, 0)$ and the positive $y$-axis at $(0, q)$. If the sum of the intercepts $p + q = 25$, what is the slope of the line?</p>',
    options: ['-\\frac{3}{4}', '-\\frac{3}{2}', '-\\frac{9}{4}', '-3'],
    answer: 1,
    explanation: 'Choice B is correct. Let the slope be $m < 0$. The equation of the line is $y - 9 = m(x - 4)$.<br>1) The $x$-intercept $(p, 0)$ gives $0 - 9 = m(p - 4) \\implies p = 4 - \\frac{9}{m}$.<br>2) The $y$-intercept $(0, q)$ gives $q - 9 = m(0 - 4) \\implies q = 9 - 4m$.<br>3) Setting $p + q = 25$: $$\\left(4 - \\frac{9}{m}\\right) + (9 - 4m) = 25 \\implies 13 - \\frac{9}{m} - 4m = 25 \\implies -4m - \\frac{9}{m} = 12$$ Multiply by $m$: $$-4m^2 - 9 = 12m \\implies 4m^2 + 12m + 9 = 0 \\implies (2m + 3)^2 = 0 \\implies m = -\\frac{3}{2}$$ Checking intercepts: $p = 4 - \\frac{9}{-3/2} = 4 + 6 = 10 > 0$ and $q = 9 - 4(-3/2) = 9 + 6 = 15 > 0$, giving $p + q = 25$.'
  },
  {
    id: 3,
    qnum: 3,
    section: 'math',
    module: 1,
    topic: 'Coordinate Geometry (Shortest Distance to a Line)',
    difficulty: 'Medium',
    isFillIn: false,
    text: '<p>In the $xy$-plane, line $m$ passes through the points $(0, 15)$ and $(8, 0)$. What is the shortest distance from the origin $(0, 0)$ to line $m$?</p>',
    options: ['\\frac{60}{17}', '\\frac{120}{17}', '\\frac{15}{2}', '8'],
    answer: 1,
    explanation: 'Choice B is correct. The triangle formed by the origin and the axes intercepts has perpendicular legs $a = 8$ and $b = 15$. By the Pythagorean theorem, the hypotenuse along line $m$ is $c = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$.<br>The area of this right triangle can be expressed two ways: $$\\text{Area} = \\frac{1}{2} \\times 8 \\times 15 = 60$$ Also, $\\text{Area} = \\frac{1}{2} \\times 17 \\times d$, where $d$ is the perpendicular distance from the origin to the hypotenuse: $$60 = \\frac{17}{2} d \\implies d = \\frac{120}{17}$$.'
  },
  {
    id: 4,
    qnum: 4,
    section: 'math',
    module: 1,
    topic: 'Coordinate Geometry (Triangular Regions & Areas)',
    difficulty: 'Hard',
    isFillIn: false,
    text: '<p>In the $xy$-plane, a triangular region is bounded by the $x$-axis, the line $3x - 4y = -12$, and the line $ax + 4y = 60$, where $a$ is a positive constant. If the area of this triangular region is $108$, what is the value of $a$?</p>',
    options: ['2', '3', '4', '6'],
    answer: 1,
    explanation: 'Choice B is correct.<br>1) Find $x$-intercepts (where $y = 0$):<br>- For $3x - 4(0) = -12 \\implies x = -4$. Point is $(-4, 0)$.<br>- For $ax + 4(0) = 60 \\implies x = \\frac{60}{a}$. Point is $\\left(\\frac{60}{a}, 0\\right)$.<br>Base along the $x$-axis is $\\frac{60}{a} - (-4) = \\frac{60 + 4a}{a} = \\frac{4(15 + a)}{a}$.<br>2) Find the vertex $(x, y)$ by adding equations: $$(3 + a)x = 48 \\implies x = \\frac{48}{3 + a}$$ Then $4y = 3x + 12 = 3\\left(\\frac{48}{3 + a}\\right) + 12 = \\frac{180 + 12a}{3 + a} \\implies y = \\frac{3(15 + a)}{3 + a}$.<br>3) Setting the area to $108$: $$\\frac{1}{2} \\times \\frac{4(15 + a)}{a} \\times \\frac{3(15 + a)}{3 + a} = 108 \\implies \\frac{6(15 + a)^2}{a(3 + a)} = 108 \\implies \\frac{(15 + a)^2}{a(3 + a)} = 18$$ $$a^2 + 30a + 225 = 18a^2 + 54a \\implies 17a^2 + 24a - 225 = 0 \\implies (a - 3)(17a + 75) = 0$$ Since $a > 0$, $a = 3$.'
  },
  {
    id: 5,
    qnum: 5,
    section: 'math',
    module: 1,
    topic: 'Linear Functions (Quadrant Analysis)',
    difficulty: 'Hard',
    isFillIn: false,
    text: '<p>The line $y = (3k - 15)x + (2k - 2)$ is graphed in the $xy$-plane, where $k$ is a constant. If the line does not pass through Quadrant III, and both its slope and $y$-intercept are non-zero, how many integer values can $k$ take?</p>',
    options: ['1', '2', '3', '4'],
    answer: 2,
    explanation: 'Choice C is correct. In the $xy$-plane, Quadrant III is the region where $x < 0$ and $y < 0$.<br>A line with non-zero slope and $y$-intercept never enters Quadrant III if and only if its slope is strictly negative ($m < 0$) and its $y$-intercept is strictly positive ($b > 0$).<br>1) Slope: $3k - 15 < 0 \\implies 3k < 15 \\implies k < 5$.<br>2) $y$-intercept: $2k - 2 > 0 \\implies 2k > 2 \\implies k > 1$.<br>Thus, $1 < k < 5$. The integer values of $k$ are $2, 3, 4$, which gives exactly $3$ integer values.'
  },
  {
    id: 6,
    qnum: 6,
    section: 'math',
    module: 1,
    topic: 'Coordinate Geometry (Section Formula & Perpendicular Lines)',
    difficulty: 'Medium',
    isFillIn: true,
    text: '<p>In the $xy$-plane, a line segment has endpoints $R(-6, -5)$ and $T(9, 10)$. Point $S$ lies on segment $RT$ such that the ratio of the length of $RS$ to the length of $ST$ is $2:3$. A line passing through point $S$ is perpendicular to segment $RT$. What is the $y$-intercept of this perpendicular line?</p>',
    options: [],
    answer: '1',
    acceptedAnswers: ['1', '1.0'],
    explanation: '1) Point $S$ partitions segment $RT$ in ratio $2:3$, so it lies $\\frac{2}{2 + 3} = \\frac{2}{5}$ of the distance from $R$ to $T$: $$S = \\left(-6 + \\frac{2}{5}(9 - (-6)), -5 + \\frac{2}{5}(10 - (-5))\\right) = (-6 + 6, -5 + 6) = (0, 1)$$<br>2) Slope of segment $RT = \\frac{10 - (-5)}{9 - (-6)} = \\frac{15}{15} = 1$.<br>3) The perpendicular line has slope $m_\\perp = -1$ and passes through $(0, 1)$.<br>Since the point has $x = 0$, its $y$-coordinate $1$ is directly the $y$-intercept.'
  },
  {
    id: 7,
    qnum: 7,
    section: 'math',
    module: 1,
    topic: 'Collinear Points & Intercepts',
    difficulty: 'Medium',
    isFillIn: true,
    text: '<p>In the $xy$-plane, the points $(a, 3)$, $(5, b)$, and $(2a, 9)$ lie on a straight line, where $a$ and $b$ are non-zero constants. What is the value of $b$ if the $x$-intercept of a second line $3x - ay = 12$ is equal to $a$?</p>',
    options: [],
    answer: '4.5',
    acceptedAnswers: ['4.5', '9/2', '4.50'],
    explanation: '1) Find $a$: The $x$-intercept of $3x - ay = 12$ occurs when $y = 0$, giving $3x = 12 \\implies x = 4$. Since this equals $a$, we have $a = 4$.<br>2) The points are $(4, 3)$, $(5, b)$, and $(8, 9)$.<br>The slope between $(4, 3)$ and $(8, 9)$ is $m = \\frac{9 - 3}{8 - 4} = \\frac{6}{4} = \\frac{3}{2}$.<br>3) Since $(5, b)$ lies on the line: $$\\frac{b - 3}{5 - 4} = \\frac{3}{2} \\implies b - 3 = 1.5 \\implies b = 4.5 = \\frac{9}{2}$$.'
  },
  {
    id: 8,
    qnum: 8,
    section: 'math',
    module: 1,
    topic: 'Linear Functions (Function Notation & Differences)',
    difficulty: 'Medium',
    isFillIn: false,
    text: '<p>The linear function $f$ is defined by $f(x) = cx + d$, where $c$ and $d$ are constants. If $f(3a) - f(a) = 12a$ for all non-zero values of $a$, and $f(5) = 23$, what is the value of $f(-2)$?</p>',
    options: ['-19', '-13', '-7', '11'],
    answer: 0,
    explanation: 'Choice A is correct.<br>1) Evaluate $f(3a) - f(a)$: $$f(3a) - f(a) = (3ca + d) - (ca + d) = 2ca$$ Given $2ca = 12a$, we find $2c = 12 \\implies c = 6$.<br>2) Use $f(5) = 23$: $$f(5) = 6(5) + d = 23 \\implies 30 + d = 23 \\implies d = -7$$<br>3) Now calculate $f(-2)$: $$f(-2) = 6(-2) - 7 = -12 - 7 = -19$$.'
  },
  {
    id: 9,
    qnum: 9,
    section: 'math',
    module: 1,
    topic: 'Systems of Linear Equations (Quadrant I Intersection)',
    difficulty: 'Hard',
    isFillIn: false,
    text: '<p>$$2x + 3y = 18$$<br>$$kx - y = 4$$<br>In the system of equations above, $k$ is a constant. If the lines intersect at a point $(x, y)$ where $x > 0$ and $y > 0$, which of the following represents all possible values of $k$?</p>',
    options: ['k > -\\frac{2}{3}', 'k > \\frac{4}{9}', '-\\frac{2}{3} < k < \\frac{4}{9}', 'k < -\\frac{2}{3} \\text{ or } k > \\frac{4}{9}'],
    answer: 1,
    explanation: 'Choice B is correct.<br>From the second equation, $y = kx - 4$. Substitute into the first equation: $$2x + 3(kx - 4) = 18 \\implies (2 + 3k)x = 30 \\implies x = \\frac{30}{2 + 3k}$$ For $x > 0$, the denominator must be positive: $2 + 3k > 0 \\implies k > -\\frac{2}{3}$.<br>Next, substitute $x$ into $y$: $$y = \\frac{30k}{2 + 3k} - 4 = \\frac{30k - 8 - 12k}{2 + 3k} = \\frac{18k - 8}{2 + 3k}$$ Since $2 + 3k > 0$, $y > 0$ requires $18k - 8 > 0 \\implies k > \\frac{8}{18} = \\frac{4}{9}$.<br>Since $\\frac{4}{9} > -\\frac{2}{3}$, the condition $k > \\frac{4}{9}$ satisfies both requirements.'
  },
  {
    id: 10,
    qnum: 10,
    section: 'math',
    module: 1,
    topic: 'Coordinate Geometry (Perpendicular Bisector)',
    difficulty: 'Medium',
    isFillIn: true,
    text: '<p>In the $xy$-plane, line $l$ is the perpendicular bisector of the line segment joining point $A(-3, 8)$ and point $B(5, -4)$. Line $l$ passes through the point $(13, k)$. What is the value of $k$?</p>',
    options: [],
    answer: '10',
    acceptedAnswers: ['10', '10.0'],
    explanation: '1) Midpoint of $AB$: $M = \\left(\\frac{-3 + 5}{2}, \\frac{8 + (-4)}{2}\\right) = (1, 2)$.<br>2) Slope of $AB$: $m_{AB} = \\frac{-4 - 8}{5 - (-3)} = \\frac{-12}{8} = -\\frac{3}{2}$.<br>3) Slope of line $l$ is the negative reciprocal: $m_l = \\frac{2}{3}$.<br>4) Line equation: $y - 2 = \\frac{2}{3}(x - 1)$.<br>Substituting $(13, k)$: $$k - 2 = \\frac{2}{3}(13 - 1) = \\frac{2}{3}(12) = 8 \\implies k = 10$$.'
  },
  {
    id: 11,
    qnum: 11,
    section: 'math',
    module: 1,
    topic: 'Systems of Equations (Infinitely Many Solutions & Ratio of Constants)',
    difficulty: 'Hard',
    isFillIn: false,
    text: '<p>$$\\frac{3}{4}kx - \\frac{2}{3}y = 12$$<br>$$9x - \\frac{8}{5}ty = 36$$<br>In the system of linear equations above, $k$ and $t$ are constants. If the system has infinitely many solutions, what is the value of $\\frac{k}{t}$?</p>',
    options: ['\\frac{3}{5}', '\\frac{5}{6}', '\\frac{6}{5}', '\\frac{16}{5}'],
    answer: 3,
    explanation: 'Choice D is correct. Divide the second equation by $3$: $$3x - \\frac{8t}{15}y = 12$$ For infinitely many solutions, the coefficients must match the first equation $\\frac{3}{4}kx - \\frac{2}{3}y = 12$:<br>1) $\\frac{3}{4}k = 3 \\implies k = 4$.<br>2) $\\frac{8t}{15} = \\frac{2}{3} \\implies t = \\frac{2}{3} \\times \\frac{15}{8} = \\frac{5}{4}$.<br>3) Ratio $\\frac{k}{t} = \\frac{4}{5/4} = 4 \\times \\frac{4}{5} = \\frac{16}{5}$.'
  },
  {
    id: 12,
    qnum: 12,
    section: 'math',
    module: 1,
    topic: 'Family of Lines (Fixed Point / Concurrency)',
    difficulty: 'Hard',
    isFillIn: true,
    text: '<p>$$(2 + 3k)x + (1 - 2k)y = 7 + 4k$$<br>The equation above represents a line in the $xy$-plane for any real constant $k$. Regardless of the value of $k$, all such lines pass through a single fixed point $(x_0, y_0)$. What is the value of $7(x_0 + y_0)$?</p>',
    options: [],
    answer: '31',
    acceptedAnswers: ['31', '31.0'],
    explanation: 'Rewrite the equation grouping terms with and without $k$: $$(2x + y - 7) + k(3x - 2y - 4) = 0$$ For this identity to hold for all $k$, both bracketed expressions must equal zero simultaneously:<br>1) $2x + y = 7$<br>2) $3x - 2y = 4$<br>Multiply (1) by $2$: $4x + 2y = 14$. Adding to (2): $$7x = 18 \\implies x_0 = \\frac{18}{7}$$ Then $y_0 = 7 - 2\\left(\\frac{18}{7}\\right) = \\frac{13}{7}$.<br>Therefore, $7(x_0 + y_0) = 7\\left(\\frac{18}{7} + \\frac{13}{7}\\right) = 18 + 13 = 31$.'
  },
  {
    id: 13,
    qnum: 13,
    section: 'math',
    module: 1,
    topic: 'Linear Functions (Composition of Functions)',
    difficulty: 'Hard',
    isFillIn: false,
    text: '<p>Let $g(x) = mx + b$, where $m$ and $b$ are constants and $m < 0$. If $g(g(x)) = 9x - 16$ for all real values of $x$, what is the $x$-intercept of the graph of $y = g(x)$ in the $xy$-plane?</p>',
    options: ['(-4, 0)', '(-\\frac{8}{3}, 0)', '(\\frac{8}{3}, 0)', '(4, 0)'],
    answer: 2,
    explanation: 'Choice C is correct.<br>Find the composite function: $$g(g(x)) = m(mx + b) + b = m^2x + bm + b = m^2x + b(m + 1)$$ Comparing coefficients with $9x - 16$:<br>1) $m^2 = 9$. Since $m < 0$, we have $m = -3$.<br>2) $b(-3 + 1) = -16 \\implies -2b = -16 \\implies b = 8$.<br>So $g(x) = -3x + 8$. Setting $g(x) = 0 \\implies -3x + 8 = 0 \\implies x = \\frac{8}{3}$. The $x$-intercept is $\\left(\\frac{8}{3}, 0\\right)$.'
  },
  {
    id: 14,
    qnum: 14,
    section: 'math',
    module: 1,
    topic: 'Systems of Equations (Parallel Lines & No Solution)',
    difficulty: 'Hard',
    isFillIn: false,
    text: '<p>$$(2m - 1)x + 6y = 15$$<br>$$2x + (m + 2)y = 10$$<br>In the system of equations above, $m$ is a constant. For which of the following values of $m$ does the system have no solution?</p>',
    options: ['-\\frac{7}{2}', '2', '\\text{Both } -\\frac{7}{2} \\text{ and } 2', '\\text{Neither } -\\frac{7}{2} \\text{ nor } 2'],
    answer: 0,
    explanation: 'Choice A is correct. A system of linear equations has no solution if the lines are parallel and distinct.<br>1) Slopes must be equal: $$\\frac{2m - 1}{2} = \\frac{6}{m + 2} \\implies (2m - 1)(m + 2) = 12 \\implies 2m^2 + 3m - 14 = 0 \\implies (2m + 7)(m - 2) = 0$$ So $m = 2$ or $m = -\\frac{7}{2}$.<br>2) For $m = 2$: $3x + 6y = 15$ and $2x + 4y = 10$. Both simplify to $x + 2y = 5$, giving infinitely many solutions.<br>3) For $m = -\\frac{7}{2}$: $-8x + 6y = 15$ and $2x - 1.5y = 10 \\implies -8x + 6y = -40$. Slopes are equal but constant terms differ, giving no solution.<br>Thus, the system has no solution only for $m = -\\frac{7}{2}$.'
  },
  {
    id: 15,
    qnum: 15,
    section: 'math',
    module: 1,
    topic: 'Line Transformations (Translations & Intercepts)',
    difficulty: 'Hard',
    isFillIn: false,
    text: '<p>In the $xy$-plane, the graph of line $p$ has a slope of $-\\frac{5}{3}$ and an $x$-intercept of $(6, 0)$. Line $q$ is formed by translating line $p$ left $4$ units and up $3$ units. What is the $y$-intercept of line $q$?</p>',
    options: ['(0, \\frac{19}{3})', '(0, \\frac{29}{3})', '(0, 10)', '(0, 13)'],
    answer: 0,
    explanation: 'Choice A is correct.<br>1) Line $p$ passes through $(6, 0)$ with slope $-\\frac{5}{3}$: $$y = -\\frac{5}{3}(x - 6) = -\\frac{5}{3}x + 10$$<br>2) Translating left $4$ units replaces $x$ with $(x + 4)$, and up $3$ units adds $3$ to $y$: $$y = -\\frac{5}{3}(x + 4) + 10 + 3 = -\\frac{5}{3}x - \\frac{20}{3} + 13 = -\\frac{5}{3}x + \\frac{19}{3}$$<br>3) Setting $x = 0$ gives $y = \\frac{19}{3}$, so the $y$-intercept is $\\left(0, \\frac{19}{3}\\right)$.'
  }
];

// Topic Map for Analytics
const TOPIC_MAP = {};
QUESTIONS.forEach(q => {
  const t = q.topic || 'General Math';
  if (!TOPIC_MAP[t]) {
    TOPIC_MAP[t] = { name: t, questions: [] };
  }
  TOPIC_MAP[t].questions.push(q.id);
});

if (typeof window !== 'undefined') {
  window.QUESTIONS = QUESTIONS;
  window.TOPIC_MAP = TOPIC_MAP;
}

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
