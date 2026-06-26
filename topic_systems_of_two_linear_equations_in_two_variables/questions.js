// =============================================
// Digital SAT Practice - Topic: topic_systems_of_two_linear_equations_in_two_variables
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Solve the quadratic equation: x² − 5x + 6 = 0",
    "options": [
      "x = 2, 3",
      "x = -2, -3",
      "x = 1, 6",
      "x = -1, -6"
    ],
    "answer": 0,
    "explanation": "Factor the quadratic: (x − 2)(x − 3) = 0. Setting each factor to zero gives x = 2 or x = 3. B) Incorrect; incorrect signs from factoring. C) Incorrect; these factors would not give a middle term of -5x. D) Incorrect; incorrect signs and factors.",
    "topic": "Solving by Factoring"
  },
  {
    "id": 2,
    "text": "Solve for x in the equation x² − 4x − 5 = 0.",
    "options": [
      "-5, 1",
      "-1, 5",
      "1, 5",
      "-5, -1"
    ],
    "answer": 1,
    "explanation": "Factor the quadratic equation: (x − 5)(x + 1) = 0. Set each factor to zero: x − 5 = 0 or x + 1 = 0, so x = 5 or x = −1. A) Incorrect; misunderstanding factoring. C) Incorrect; incorrect signs. D) Incorrect; incorrect signs and factors.",
    "topic": "Solving by Factoring"
  },
  {
    "id": 3,
    "text": "Solve for x: x² − 9 = 0.",
    "options": [
      "-3",
      "0",
      "3",
      "±3"
    ],
    "answer": 3,
    "explanation": "Add 9 to both sides: x² = 9. Take the square root of both sides: x = ±3. A) Incorrect; missing the positive solution. B) Incorrect; misunderstanding square root properties. C) Incorrect; missing the negative solution.",
    "topic": "Solving by Square Roots"
  },
  {
    "id": 4,
    "text": "Solve for x in the equation x² − 4 = 0.",
    "options": [
      "0",
      "2",
      "±2",
      "4"
    ],
    "answer": 2,
    "explanation": "Add 4 to both sides: x² = 4. Take the square root of both sides: x = ±2. A) Incorrect; misunderstanding square root properties. B) Incorrect; missing the negative solution. D) Incorrect; this is x² itself, not x.",
    "topic": "Solving by Square Roots"
  },
  {
    "id": 5,
    "text": "If x² = 49, what are the possible values of x?",
    "options": [
      "-7 and 7",
      "-7 and 0",
      "0 and 7",
      "7 and 14"
    ],
    "answer": 0,
    "explanation": "To solve for x, take the square root of both sides: x = ±√49 = ±7. So the possible values are −7 and 7. B) Incorrect; misunderstanding square roots and values. C) Incorrect; incorrect roots. D) Incorrect; mistake in basic arithmetic.",
    "topic": "Solving by Square Roots"
  },
  {
    "id": 6,
    "text": "What are the roots of the equation x² + x − 6 = 0?",
    "options": [
      "x = 2, -3",
      "x = -2, 3",
      "x = 2, 3",
      "x = -2, -3"
    ],
    "answer": 0,
    "explanation": "Factor the quadratic: (x − 2)(x + 3) = 0. Setting each factor to zero gives x = 2 or x = −3. B), C), D) Incorrect; these pairs of roots would not produce a middle term of +x and a constant term of −6 when expanded.",
    "topic": "Solving by Factoring"
  },
  {
    "id": 7,
    "text": "If f(x) = 2x² − 3x + 1, what is f(2)?",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "answer": 1,
    "explanation": "Substitute x = 2: f(2) = 2(2)² − 3(2) + 1 = 2(4) − 6 + 1 = 8 − 6 + 1 = 3. A) Incorrect; calculation error in the function. C) Incorrect; incorrect multiplication. D) Incorrect; adding wrong terms.",
    "topic": "Evaluating Quadratic Functions"
  },
  {
    "id": 8,
    "text": "If f(x) = 2x² − 3x + 4, what is f(2)?",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "answer": 1,
    "explanation": "Substitute x = 2: f(2) = 2(2)² − 3(2) + 4 = 2(4) − 6 + 4 = 8 − 6 + 4 = 6. A) Incorrect; arithmetic error in the calculation. C) Incorrect; incorrect multiplication. D) Incorrect; adding wrong terms.",
    "topic": "Evaluating Quadratic Functions"
  },
  {
    "id": 9,
    "text": "If the function f(x) = x² + 2x − 3, what is f(−1)?",
    "options": [
      "-4",
      "-2",
      "0",
      "4"
    ],
    "answer": 0,
    "explanation": "Substitute x = −1: f(−1) = (−1)² + 2(−1) − 3 = 1 − 2 − 3 = −4. B) Incorrect; arithmetic mistake. C) Incorrect; misunderstanding function substitution. D) Incorrect; misunderstanding sign changes.",
    "topic": "Evaluating Quadratic Functions"
  },
  {
    "id": 10,
    "text": "Simplify (x²y³)².",
    "options": [
      "x⁴y⁶",
      "x³y⁵",
      "x²y²",
      "x⁶y⁶"
    ],
    "answer": 0,
    "explanation": "Use the properties of exponents: (x²y³)² = x^(2×2)·y^(3×2) = x⁴y⁶. B) Incorrect; misunderstanding exponent multiplication. C) Incorrect; incorrect exponent application. D) Incorrect; arbitrary value not related to the calculation.",
    "topic": "Polynomial Exponent Rules"
  },
  {
    "id": 11,
    "text": "What is the result of multiplying the binomials (x + 2)(x + 3)?",
    "options": [
      "x² + 5x + 6",
      "x² + 6x + 5",
      "x² + x + 6",
      "x² + 5x + 5"
    ],
    "answer": 0,
    "explanation": "Use the FOIL method: (x + 2)(x + 3) = x·x + x·3 + 2·x + 2·3 = x² + 3x + 2x + 6 = x² + 5x + 6. B) Incorrect; swaps the coefficient and constant. C) Incorrect; fails to combine the middle terms correctly. D) Incorrect; arithmetic error in the constant term.",
    "topic": "Multiplying Polynomials"
  },
  {
    "id": 12,
    "text": "Which of the following is the factored form of x² − 16?",
    "options": [
      "(x − 4)(x − 4)",
      "(x + 4)(x − 4)",
      "(x + 8)(x − 8)",
      "(x − 16)(x + 1)"
    ],
    "answer": 1,
    "explanation": "x² − 16 is a difference of squares: x² − 4² = (x + 4)(x − 4). A) Incorrect; this would expand to x² − 8x + 16. C) Incorrect; this would expand to x² − 64. D) Incorrect; this would not produce x² − 16 when expanded.",
    "topic": "Factoring Polynomials"
  },
  {
    "id": 13,
    "text": "Solve for x: 4(x + 1) = 2(x + 5).",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 3,
    "explanation": "Distribute both sides: 4x + 4 = 2x + 10. Subtract 2x from both sides: 2x + 4 = 10. Subtract 4: 2x = 6. Divide by 2: x = 3. A) Incorrect; arithmetic error in distribution. B) Incorrect; mistake in combining terms. C) Incorrect; error in final division.",
    "topic": "Equations with Distribution"
  },
  {
    "id": 14,
    "text": "What is the standard form of a quadratic equation?",
    "options": [
      "ax + b = 0",
      "ax² + bx + c = 0",
      "ax³ + bx² + cx + d = 0",
      "a/x + b = 0"
    ],
    "answer": 1,
    "explanation": "A quadratic equation is a second-degree polynomial equation in the standard form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0. A) Incorrect; this is the standard form of a linear equation. C) Incorrect; this is the standard form of a cubic equation. D) Incorrect; this represents a rational expression, not a quadratic equation.",
    "topic": "Quadratic Equation Basics"
  },
  {
    "id": 15,
    "text": "What is the discriminant of the quadratic equation x² − 5x + 6 = 0, given by b² − 4ac?",
    "options": [
      "1",
      "-1",
      "25",
      "49"
    ],
    "answer": 0,
    "explanation": "For x² − 5x + 6 = 0, a = 1, b = −5, c = 6. The discriminant is b² − 4ac = (−5)² − 4(1)(6) = 25 − 24 = 1. B) Incorrect; sign error in the calculation. C) Incorrect; this is b² alone, without subtracting 4ac. D) Incorrect; arithmetic error.",
    "topic": "The Discriminant"
  },
  {
    "id": 16,
    "useImage": true,
    "imageKey": "q16_roots",
    "text": "The graph shows the parabola y = x² − 5x + 6. What are the x-intercepts (roots) of this function?",
    "options": [
      "x = 2 and x = 3",
      "x = -2 and x = -3",
      "x = 1 and x = 6",
      "x = 0 and x = 5"
    ],
    "answer": 0,
    "explanation": "The x-intercepts are the points where the graph crosses the x-axis (where y = 0). From the graph, the parabola crosses the x-axis at x = 2 and x = 3, which matches the factored form (x − 2)(x − 3) = 0. B), C), D) Incorrect; these do not match the points where the curve crosses the x-axis in the graph.",
    "topic": "Reading Graphs of Parabolas"
  },
  {
    "id": 17,
    "useImage": true,
    "imageKey": "q17_vertex",
    "text": "The graph shows a parabola in the form y = (x − 1)² − 4. What are the coordinates of the vertex shown on the graph?",
    "options": [
      "(1, -4)",
      "(-1, 4)",
      "(4, 1)",
      "(-1, -4)"
    ],
    "answer": 0,
    "explanation": "The vertex of a parabola in vertex form y = a(x − h)² + k is at the point (h, k). Here h = 1 and k = −4, so the vertex is (1, −4), which matches the lowest point of the curve shown in the graph. B), C), D) Incorrect; these do not match the marked point on the graph or the form y = (x − 1)² − 4.",
    "topic": "Vertex of a Parabola"
  },
  {
    "id": 18,
    "useImage": true,
    "imageKey": "q18_axis_symmetry",
    "text": "The graph shows a parabola with its axis of symmetry marked. Based on the graph, what is the equation of the axis of symmetry?",
    "options": [
      "x = 2",
      "y = 2",
      "x = -2",
      "y = -2"
    ],
    "answer": 0,
    "explanation": "The axis of symmetry of a parabola is a vertical line that passes through the vertex, dividing the parabola into two mirror-image halves. The dashed line in the graph is at x = 2. B) Incorrect; the axis of symmetry of a parabola is always a vertical line (x = constant), not horizontal. C), D) Incorrect; do not match the line shown in the graph.",
    "topic": "Axis of Symmetry"
  },
  {
    "id": 19,
    "useImage": true,
    "imageKey": "q19_opens_down",
    "text": "The graph shows a parabola y = ax² + bx + c. Based on the direction the parabola opens, what can be concluded about the value of a?",
    "options": [
      "a > 0",
      "a < 0",
      "a = 0",
      "a = 1 always"
    ],
    "answer": 1,
    "explanation": "When the leading coefficient a is negative, the parabola opens downward, as shown in the graph. A) Incorrect; a positive a would cause the parabola to open upward. C) Incorrect; if a = 0, the equation would not be quadratic at all. D) Incorrect; a = 1 would make the parabola open upward, not downward.",
    "topic": "Direction of Opening"
  },
  {
    "id": 20,
    "useImage": true,
    "imageKey": "q20_opens_up",
    "text": "The graph shows a parabola y = ax² + bx + c. Based on the direction the parabola opens, what can be concluded about the value of a?",
    "options": [
      "a > 0",
      "a < 0",
      "a = 0",
      "The parabola has no minimum"
    ],
    "answer": 0,
    "explanation": "When the leading coefficient a is positive, the parabola opens upward, as shown in the graph, and the vertex represents a minimum point. B) Incorrect; a negative a would cause the parabola to open downward. C) Incorrect; if a = 0, the equation would not be quadratic at all. D) Incorrect; an upward-opening parabola does have a minimum at its vertex.",
    "topic": "Direction of Opening"
  },
  {
    "id": 21,
    "useImage": true,
    "imageKey": "q21_yintercept",
    "text": "The graph shows the parabola y = x² + 2x − 3. What is the y-intercept of this function, as shown on the graph?",
    "options": [
      "(0, -3)",
      "(0, 3)",
      "(-3, 0)",
      "(2, 0)"
    ],
    "answer": 0,
    "explanation": "The y-intercept occurs where the graph crosses the y-axis (where x = 0). Substituting x = 0 into y = x² + 2x − 3 gives y = 0 + 0 − 3 = −3, which matches the marked point (0, −3) on the graph. B) Incorrect; sign error. C), D) Incorrect; these are x-intercepts (roots), not the y-intercept.",
    "topic": "Y-Intercept of a Parabola"
  },
  {
    "id": 22,
    "useImage": true,
    "imageKey": "q22_two_roots",
    "text": "The graph shows a parabola that crosses the x-axis at two distinct points. Based on this graph, what can be said about the discriminant (b² − 4ac) of the corresponding quadratic equation?",
    "options": [
      "b² − 4ac > 0",
      "b² − 4ac = 0",
      "b² − 4ac < 0",
      "The discriminant cannot be determined"
    ],
    "answer": 0,
    "explanation": "When a parabola crosses the x-axis at two distinct points, the corresponding quadratic equation has two distinct real roots, which occurs when the discriminant is positive (b² − 4ac > 0). B) Incorrect; a discriminant of 0 would mean the parabola is tangent to the x-axis at exactly one point. C) Incorrect; a negative discriminant means the parabola does not touch the x-axis at all. D) Incorrect; the number of x-intercepts directly indicates the sign of the discriminant.",
    "topic": "The Discriminant & Graphs"
  },
  {
    "id": 23,
    "useImage": true,
    "imageKey": "q23_one_root",
    "text": "The graph shows a parabola that touches the x-axis at exactly one point (the vertex). Based on this graph, what can be said about the discriminant (b² − 4ac) of the corresponding quadratic equation?",
    "options": [
      "b² − 4ac > 0",
      "b² − 4ac = 0",
      "b² − 4ac < 0",
      "The discriminant must be negative"
    ],
    "answer": 1,
    "explanation": "When a parabola touches the x-axis at exactly one point (its vertex), the corresponding quadratic equation has exactly one repeated real root, which occurs when the discriminant equals zero (b² − 4ac = 0). A) Incorrect; a positive discriminant would mean two distinct x-intercepts. C), D) Incorrect; a negative discriminant means the parabola never touches the x-axis.",
    "topic": "The Discriminant & Graphs"
  },
  {
    "id": 24,
    "useImage": true,
    "imageKey": "q24_no_roots",
    "text": "The graph shows a parabola that does not cross or touch the x-axis at all. Based on this graph, what can be said about the discriminant (b² − 4ac) of the corresponding quadratic equation?",
    "options": [
      "b² − 4ac > 0",
      "b² − 4ac = 0",
      "b² − 4ac < 0",
      "The equation has two real solutions"
    ],
    "answer": 2,
    "explanation": "When a parabola does not intersect the x-axis at all, the corresponding quadratic equation has no real roots (only complex roots), which occurs when the discriminant is negative (b² − 4ac < 0). A) Incorrect; a positive discriminant would mean two x-intercepts. B) Incorrect; a discriminant of 0 would mean the parabola touches the x-axis at one point. D) Incorrect; with a negative discriminant, there are no real solutions.",
    "topic": "The Discriminant & Graphs"
  },
  {
    "id": 25,
    "useImage": true,
    "imageKey": "q25_cubic",
    "text": "The graph shows the cubic polynomial function y = x³ − 3x. Based on the graph, how many times does the function cross the x-axis?",
    "options": [
      "One time",
      "Two times",
      "Three times",
      "Zero times"
    ],
    "answer": 2,
    "explanation": "The graph of y = x³ − 3x crosses the x-axis three times, corresponding to its three real roots: x = −√3, x = 0, and x = √3 (factoring: x(x² − 3) = 0). A), B) Incorrect; undercount the visible crossings shown in the graph. D) Incorrect; the graph clearly intersects the x-axis multiple times.",
    "topic": "Polynomial Graphs"
  }
];

const TOPIC_MAP = {};
QUESTIONS.forEach(q => {
  const key = q.topic || 'General';
  if (!TOPIC_MAP[key]) {
    TOPIC_MAP[key] = { name: key, questions: [] };
  }
  TOPIC_MAP[key].questions.push(q.id);
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
