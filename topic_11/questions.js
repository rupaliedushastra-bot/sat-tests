// =============================================
// Digital SAT – Topic Test: Functions & Graphs
// 25 Questions | Single Timed Module (35 min)
// answers: 0=A, 1=B, 2=C, 3=D
// Sourced from Comprehensive Digital SAT Study Guide (Practice Tests)
// =============================================

const QUESTIONS = [
  {
    id: 1,
    text: `If f(x) = 2x + 3, what is f(4)?`,
    options: ['5', '8', '10', '11'],
    answer: 3,
    explanation: 'Substitute x = 4 into the function: f(4) = 2(4) + 3 = 8 + 3 = 11. A) Incorrect; arbitrary value not related to the calculation. B) Incorrect; forgets to add 3. C) Incorrect; arithmetic error.',
    topic: 'Function Evaluation'
  },
  {
    id: 2,
    text: `If the function f(x) = 2x² − 3x + 1, what is f(2)?`,
    options: ['1', '3', '5', '7'],
    answer: 1,
    explanation: 'Substitute x = 2: f(2) = 2(2)² − 3(2) + 1 = 2(4) − 6 + 1 = 8 − 6 + 1 = 3. A) Incorrect; calculation error in the function. C) Incorrect; incorrect multiplication. D) Incorrect; adding wrong terms.',
    topic: 'Function Evaluation'
  },
  {
    id: 3,
    text: `If the function f(x) = x² + 2x − 3, what is f(−1)?`,
    options: ['-4', '-2', '0', '4'],
    answer: 0,
    explanation: 'Substitute x = −1: f(−1) = (−1)² + 2(−1) − 3 = 1 − 2 − 3 = −4. B) Incorrect; arithmetic mistake. C) Incorrect; misunderstanding function substitution. D) Incorrect; misunderstanding sign changes.',
    topic: 'Function Evaluation'
  },
  {
    id: 4,
    text: `If y = 2x² − 3 and x = 4, what is the value of y?`,
    options: ['25', '29', '31', '35'],
    answer: 1,
    explanation: 'Substitute x = 4 into the equation: y = 2(4)² − 3 = 2(16) − 3 = 32 − 3 = 29. A) Incorrect; error in multiplication. C) Incorrect; mistake in subtraction step. D) Incorrect; unrelated calculation error.',
    topic: 'Function Evaluation'
  },
  {
    id: 5,
    useImage: true,
    imageKey: 'q5_slope_pts',
    text: `What is the slope of the line that passes through the points (2, 3) and (4, 7)?`,
    options: ['1', '2', '3', '4'],
    answer: 1,
    explanation: 'Use the slope formula: slope = (7 − 3) / (4 − 2) = 4/2 = 2. A) Incorrect; calculation error in the slope formula. C) Incorrect; possible misunderstanding of the points. D) Incorrect; miscalculated slope.',
    topic: 'Slope of a Line'
  },
  {
    id: 6,
    useImage: true,
    imageKey: 'q6_slope_pts',
    text: `What is the slope of the line that passes through the points (2, 3) and (5, 11)?`,
    options: ['8/3', '10/3', '14/3', '16/3'],
    answer: 0,
    explanation: 'Use the slope formula: slope = (11 − 3) / (5 − 2) = 8/3 ≈ 2.667. B), C), D) Incorrect; arithmetic errors when computing the rise or run.',
    topic: 'Slope of a Line'
  },
  {
    id: 7,
    useImage: true,
    imageKey: 'q7_slope_pts',
    text: `What is the slope of the line that passes through the points (1, 2) and (3, 6)?`,
    options: ['1', '2', '3', '4'],
    answer: 1,
    explanation: 'Use the slope formula: slope = (6 − 2) / (3 − 1) = 4/2 = 2. A) Incorrect; arithmetic error. C) Incorrect; arithmetic error. D) Incorrect; uses the rise without dividing by the run.',
    topic: 'Slope of a Line'
  },
  {
    id: 8,
    useImage: true,
    imageKey: 'q8_line_graph',
    text: `What is the slope of the line y = 3x − 4?`,
    options: ['-4', '-3', '3', '4'],
    answer: 2,
    explanation: 'In slope-intercept form y = mx + b, m is the slope. Here m = 3. A) Incorrect; confusing slope with y-intercept. B) Incorrect; incorrect sign for the slope. D) Incorrect; confusing with y-intercept.',
    topic: 'Linear Functions'
  },
  {
    id: 9,
    useImage: true,
    imageKey: 'q9_yintercept',
    text: `If the equation of a line is y = 2x + 3, what is the y-intercept?`,
    options: ['1', '2', '3', '4'],
    answer: 2,
    explanation: 'In the equation y = mx + b, b is the y-intercept. Here b = 3. A) Incorrect; confusing with another point. B) Incorrect; mistaking the slope for the intercept. D) Incorrect; misunderstanding the equation.',
    topic: 'Linear Functions'
  },
  {
    id: 10,
    useImage: true,
    imageKey: 'q10_slope_meaning',
    text: `For the linear model y = 2x + 3, what does the slope of 2 indicate?`,
    options: [
      'For every increase of 1 in x, y increases by 2',
      'For every increase of 1 in x, y decreases by 2',
      'When x is 0, y is 2',
      'The line never crosses the x-axis'
    ],
    answer: 0,
    explanation: 'In a linear model y = mx + b, the slope m represents the rate of change: for every increase of 1 in x, y increases by m. Here m = 2, so y increases by 2 for every unit increase in x. B) Incorrect; the slope is positive, not negative. C) Incorrect; this describes the y-intercept, not the slope. D) Incorrect; this is unrelated to the slope value.',
    topic: 'Interpreting Linear Models'
  },
  {
    id: 11,
    text: `If y = 3x + 4 and y = 10, what is the value of x?`,
    options: ['2', '3', '4', '5'],
    answer: 0,
    explanation: 'Set y equal to 10 and solve for x: 10 = 3x + 4. Subtract 4: 6 = 3x. Divide by 3: x = 2. B) Incorrect; miscalculation in solving. C) Incorrect; result from wrong steps. D) Incorrect; unrelated to the equation.',
    topic: 'Linear Functions'
  },
  {
    id: 12,
    useImage: true,
    imageKey: 'q12_intersection',
    text: `If y = 2x + 3 and y = 4x − 1, what is the value of x?`,
    options: ['0', '1', '2', '3'],
    answer: 2,
    explanation: 'Set the two expressions for y equal to each other: 2x + 3 = 4x − 1. Subtract 2x from both sides: 3 = 2x − 1. Add 1 to both sides: 4 = 2x. Divide by 2: x = 2. A) Incorrect; error in solving for x. B) Incorrect; misunderstanding algebraic steps. D) Incorrect; incorrect subtraction.',
    topic: 'Intersection of Two Lines'
  },
  {
    id: 13,
    useImage: true,
    imageKey: 'q13_intersection',
    text: `If y = 2x + 1 and y = −x + 4, what is the value of x?`,
    options: ['1', '2', '3', '4'],
    answer: 0,
    explanation: 'Set the two expressions for y equal to each other: 2x + 1 = −x + 4. Add x to both sides: 3x + 1 = 4. Subtract 1 from both sides: 3x = 3. Divide by 3: x = 1. B) Incorrect; wrong steps in isolating x. C) Incorrect; misunderstanding addition or subtraction. D) Incorrect; error in calculation.',
    topic: 'Intersection of Two Lines'
  },
  {
    id: 14,
    text: `For the function f(x) = mx + b, what does "m" represent?`,
    options: ['The y-intercept', 'The slope', 'The x-intercept', 'The domain'],
    answer: 1,
    explanation: 'In the slope-intercept form f(x) = mx + b, the coefficient m represents the slope of the line, while b represents the y-intercept. A) Incorrect; b represents the y-intercept. C) Incorrect; the x-intercept is found by setting f(x) = 0, not represented directly by m. D) Incorrect; the domain refers to the set of input values, not a coefficient.',
    topic: 'Linear Functions'
  },
  {
    id: 15,
    useImage: true,
    imageKey: 'q15_domain',
    text: `What is the domain of a function?`,
    options: [
      'The set of all possible output (y) values',
      'The set of all possible input (x) values',
      'The slope of the function\'s graph',
      'The y-intercept of the function'
    ],
    answer: 1,
    explanation: 'The domain of a function is defined as the set of all possible input values (x-values) for which the function is defined. A) Incorrect; this describes the range, not the domain. C) Incorrect; the slope is unrelated to the domain. D) Incorrect; the y-intercept is a single point, not the domain.',
    topic: 'Domain and Range'
  },
  {
    id: 16,
    useImage: true,
    imageKey: 'q16_range',
    text: `What is the range of a function?`,
    options: [
      'The set of all possible input (x) values',
      'The distance between the highest and lowest x-values',
      'The set of all possible output (y) values',
      'The point where the graph crosses the y-axis'
    ],
    answer: 2,
    explanation: 'The range of a function is the set of all possible output values (y-values) that the function can produce. A) Incorrect; this describes the domain, not the range. B) Incorrect; this is not a standard definition of range. D) Incorrect; this describes the y-intercept.',
    topic: 'Domain and Range'
  },
  {
    id: 17,
    useImage: true,
    imageKey: 'q17_linear_graph',
    text: `A linear function has the form y = mx + b and produces what type of graph?`,
    options: ['A parabola', 'A circle', 'A straight line', 'A hyperbola'],
    answer: 2,
    explanation: 'Linear functions of the form y = mx + b always produce straight-line graphs, where m is the slope and b is the y-intercept. A) Incorrect; parabolas are produced by quadratic functions. B) Incorrect; circles are not produced by linear functions. D) Incorrect; hyperbolas arise from rational functions, not linear ones.',
    topic: 'Types of Functions'
  },
  {
    id: 18,
    useImage: true,
    imageKey: 'q18_quadratic_graph',
    text: `A quadratic function has the form y = ax² + bx + c and produces what type of graph?`,
    options: ['A straight line', 'A parabola', 'A circle', 'A horizontal line'],
    answer: 1,
    explanation: 'Quadratic functions of the form y = ax² + bx + c produce parabolic (U-shaped) graphs. A) Incorrect; straight lines come from linear functions. C) Incorrect; circles are not graphs of quadratic functions in this form. D) Incorrect; a horizontal line corresponds to a constant function, not a quadratic.',
    topic: 'Types of Functions'
  },
  {
    id: 19,
    text: `For the linear function y = 2x + 3, if x increases from 0 to 1, what happens to y?`,
    options: ['y increases by 2', 'y decreases by 2', 'y increases by 3', 'y stays the same'],
    answer: 0,
    explanation: 'The slope (m) is 2, meaning for every increase of 1 in x, y increases by 2. When x = 0, y = 3, and when x = 1, y = 5, an increase of 2. B) Incorrect; the slope is positive, so y increases, not decreases. C) Incorrect; an increase of 3 would correspond to the y-intercept value, not the slope. D) Incorrect; a slope of 2 means y does change.',
    topic: 'Interpreting Linear Models'
  },
  {
    id: 20,
    text: `If 5x − 7 = 3x + 5, what is the value of x?`,
    options: ['2', '3', '4', '5'],
    answer: 2,
    explanation: 'Subtract 3x from both sides: 2x − 7 = 5. Add 7 to both sides: 2x = 12. Divide by 2: x = 4. A) Incorrect; error in subtraction or division. B) Incorrect; mistake in algebraic manipulation. D) Incorrect; misunderstanding the equation-solving process.',
    topic: 'Linear Equations'
  },
  {
    id: 21,
    text: `If x² = 49, what are the possible values of x?`,
    options: ['-7 and 7', '-7 and 0', '0 and 7', '7 and 14'],
    answer: 0,
    explanation: 'To solve for x, take the square root of both sides: x = ±√49 = ±7. So the possible values are −7 and 7. B) Incorrect; misunderstanding square roots and values. C) Incorrect; incorrect roots. D) Incorrect; mistake in basic arithmetic.',
    topic: 'Quadratic Functions'
  },
  {
    id: 22,
    text: `What is the value of y if 3y − 2 = 4y + 1?`,
    options: ['-3', '-1', '1', '3'],
    answer: 0,
    explanation: 'Subtract 3y from both sides: −2 = y + 1. Subtract 1 from both sides: −3 = y. B) Incorrect; misunderstanding subtraction. C) Incorrect; error in isolating y. D) Incorrect; incorrect calculation.',
    topic: 'Linear Equations'
  },
  {
    id: 23,
    useImage: true,
    imageKey: 'q23_parabola_symmetry',
    text: `For a quadratic function y = ax² + bx + c, the graph is symmetric about which feature?`,
    options: [
      'The x-axis',
      'The vertex (axis of symmetry)',
      'The y-intercept only',
      'The origin always'
    ],
    answer: 1,
    explanation: 'A parabola is symmetric about a vertical line passing through its vertex, called the axis of symmetry. A) Incorrect; the x-axis is not generally an axis of symmetry for a parabola. C) Incorrect; the y-intercept is just one point on the graph, not a line of symmetry. D) Incorrect; the parabola is only symmetric about the origin in special cases (e.g., y = ax²).',
    topic: 'Quadratic Functions'
  },
  {
    id: 24,
    useImage: true,
    imageKey: 'q24_scatterplot',
    text: `If the graph of a function shows a positive correlation between x and y, what does this mean?`,
    options: [
      'As x increases, y decreases',
      'As x increases, y also increases',
      'x and y are unrelated',
      'The graph is a horizontal line'
    ],
    answer: 1,
    explanation: 'A positive correlation means that as one variable (x) increases, the other variable (y) also increases, often shown as an upward trend in a scatterplot or graph. A) Incorrect; this describes a negative correlation. C) Incorrect; unrelated variables would show no clear pattern (no correlation). D) Incorrect; a horizontal line indicates no change in y as x changes, which is not a positive correlation.',
    topic: 'Graph Interpretation'
  },
  {
    id: 25,
    useImage: true,
    imageKey: 'q25_inequality_graph',
    text: `What is the solution to the inequality 2x − 3 > 1, and how would it be represented on a graph of y = 2x − 3?`,
    options: [
      'x > 2; the graph of y = 2x − 3 is above the x-axis when x > 2',
      'x > 3; the graph of y = 2x − 3 is above the x-axis when x > 3',
      'x > 4; the graph of y = 2x − 3 is below the x-axis when x > 4',
      'x > 5; the graph of y = 2x − 3 is below the x-axis when x > 5'
    ],
    answer: 0,
    explanation: 'Add 3 to both sides: 2x > 4. Divide both sides by 2: x > 2. This means the line y = 2x − 3 lies above the x-axis (y > 0) for all x > 2. B), C), D) Incorrect; these result from arithmetic errors when solving the inequality.',
    topic: 'Linear Inequalities & Graphs'
  }
];
