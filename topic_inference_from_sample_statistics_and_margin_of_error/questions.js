// =============================================
// Digital SAT Practice - Topic: topic_inference_from_sample_statistics_and_margin_of_error
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Using the quadratic formula, what are the solutions to 2x² − 4x − 6 = 0?",
    "options": [
      "x = 3, -1",
      "x = -3, 1",
      "x = 3, 1",
      "x = -3, -1"
    ],
    "answer": 0,
    "explanation": "For 2x² − 4x − 6 = 0, a = 2, b = −4, c = −6. The quadratic formula gives x = (−b ± √(b² − 4ac)) / (2a) = (4 ± √(16 + 48)) / 4 = (4 ± √64) / 4 = (4 ± 8) / 4. This gives x = 12/4 = 3 or x = −4/4 = −1. B), C), D) Incorrect; sign errors when applying the quadratic formula.",
    "topic": "The Quadratic Formula"
  },
  {
    "id": 2,
    "text": "What is the discriminant (b² − 4ac) for the equation x² + 6x + 9 = 0, and how many real solutions does it have?",
    "options": [
      "Discriminant = 0; one real solution",
      "Discriminant = 36; two real solutions",
      "Discriminant = -36; no real solutions",
      "Discriminant = 9; two real solutions"
    ],
    "answer": 0,
    "explanation": "For x² + 6x + 9 = 0, a = 1, b = 6, c = 9. The discriminant is b² − 4ac = 6² − 4(1)(9) = 36 − 36 = 0. A discriminant of 0 means the equation has exactly one real (repeated) solution. B), C), D) Incorrect; result from arithmetic errors when computing b² − 4ac.",
    "topic": "The Discriminant"
  },
  {
    "id": 3,
    "text": "By completing the square, rewrite x² + 8x + 10 in the form (x + h)² + k.",
    "options": [
      "(x + 4)² − 6",
      "(x + 4)² + 6",
      "(x + 8)² − 6",
      "(x + 4)² − 10"
    ],
    "answer": 0,
    "explanation": "To complete the square for x² + 8x + 10, take half of 8 (which is 4), square it (16), and rewrite: x² + 8x + 16 − 16 + 10 = (x + 4)² − 6. B) Incorrect; sign error on the constant. C) Incorrect; uses 8 instead of half of 8 inside the parentheses. D) Incorrect; subtracts the original constant instead of (16 − 10).",
    "topic": "Completing the Square"
  },
  {
    "id": 4,
    "text": "An exponential function is given by f(x) = a · bˣ. Under what condition does this function represent exponential growth?",
    "options": [
      "b > 1",
      "0 < b < 1",
      "b = 1",
      "b < 0"
    ],
    "answer": 0,
    "explanation": "For an exponential function f(x) = a · bˣ with a > 0, exponential growth occurs when the base b is greater than 1, since the function values increase as x increases. B) Incorrect; this condition describes exponential decay, where the function values decrease as x increases. C) Incorrect; if b = 1, the function is constant (f(x) = a) and does not grow or decay. D) Incorrect; a negative base would cause the function to oscillate in sign and is not typically considered for standard exponential growth/decay models.",
    "topic": "Exponential Growth & Decay"
  },
  {
    "id": 5,
    "useImage": true,
    "imageKey": "q5_exp_growth",
    "text": "The graph shows the function y = 1000(1.05)ˣ, which models a population that grows by 5% each year. Based on the shape of this graph, what type of function is shown?",
    "options": [
      "Linear function (constant rate of change)",
      "Quadratic function (parabola)",
      "Exponential growth function",
      "Exponential decay function"
    ],
    "answer": 2,
    "explanation": "Since the base (1.05) is greater than 1, the function y = 1000(1.05)ˣ represents exponential growth, shown by the curve that increases at an accelerating rate as x increases. A) Incorrect; a linear function would produce a straight line with a constant rate of change, not a curve. B) Incorrect; a quadratic function would produce a parabola (U-shaped curve), not this increasing curve. D) Incorrect; exponential decay would show the curve decreasing toward zero, not increasing.",
    "topic": "Exponential Growth & Decay"
  },
  {
    "id": 6,
    "useImage": true,
    "imageKey": "q6_exp_decay",
    "text": "The graph shows the function y = 100(0.5)ˣ (scaled), which models radioactive decay. Based on the value of the base (0.5), what does this function represent?",
    "options": [
      "Exponential growth, since 0.5 > 0",
      "Exponential decay, since 0 < 0.5 < 1",
      "Linear decrease, since the base is less than 1",
      "No change over time, since the base is constant"
    ],
    "answer": 1,
    "explanation": "Since the base (0.5) is between 0 and 1, the function y = 100(0.5)ˣ represents exponential decay, where the value decreases toward zero over time, as shown by the curve in the graph. A) Incorrect; the condition for growth requires the base to be greater than 1, not simply positive. C) Incorrect; the curve shown is not a straight line, so it does not represent a linear decrease. D) Incorrect; the graph clearly shows the value changing (decreasing) over time, not remaining constant.",
    "topic": "Exponential Growth & Decay"
  },
  {
    "id": 7,
    "text": "Solve the system of equations using substitution: 2x + 3y = 6 and x − y = 2. What is the value of y?",
    "options": [
      "0.2",
      "0.4",
      "0.6",
      "0.8"
    ],
    "answer": 1,
    "explanation": "From the second equation, solve for x: x = y + 2. Substitute into the first equation: 2(y + 2) + 3y = 6, which gives 2y + 4 + 3y = 6, so 5y + 4 = 6. Subtracting 4 gives 5y = 2, so y = 0.4. A), C), D) Incorrect; arithmetic errors when solving the resulting linear equation for y.",
    "topic": "Systems of Equations (Substitution)"
  },
  {
    "id": 8,
    "text": "Using the system from the previous problem (2x + 3y = 6 and x − y = 2, with y = 0.4), what is the value of x?",
    "options": [
      "1.6",
      "2.0",
      "2.4",
      "2.8"
    ],
    "answer": 2,
    "explanation": "Substitute y = 0.4 into x = y + 2: x = 0.4 + 2 = 2.4. A), B), D) Incorrect; arithmetic errors when substituting the value of y back into the equation for x.",
    "topic": "Systems of Equations (Substitution)"
  },
  {
    "id": 9,
    "text": "Solve the system of equations using elimination: 3x + 2y = 16 and 3x − y = 4. What is the value of y?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "Subtract the second equation from the first to eliminate x: (3x + 2y) − (3x − y) = 16 − 4, which gives 3y = 12, so y = 4. A), B), D) Incorrect; arithmetic errors when subtracting the equations or solving for y.",
    "topic": "Systems of Equations (Elimination)"
  },
  {
    "id": 10,
    "text": "A system of equations consists of one linear equation and one quadratic equation. What is the maximum number of solutions (intersection points) this system can have?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 2,
    "explanation": "A line and a parabola can intersect at a maximum of 2 points, since substituting the linear equation into the quadratic equation results in a quadratic equation, which has at most 2 real solutions. A), B) Incorrect; while these numbers of solutions are possible (e.g., 0 if the line doesn't touch the parabola, or 1 if it's tangent), they are not the maximum. D) Incorrect; a line cannot intersect a parabola at more than 2 points.",
    "topic": "Nonlinear Systems of Equations"
  },
  {
    "id": 11,
    "useImage": true,
    "imageKey": "q11_nonlinear_system",
    "text": "The graph shows the system of equations y = x² − 1 and y = x + 1. Based on the graph, what are the solutions (intersection points) to this system?",
    "options": [
      "(2, 3) and (-1, 0)",
      "(2, 3) only",
      "(-1, 0) only",
      "(1, 0) and (-2, -1)"
    ],
    "answer": 0,
    "explanation": "To solve algebraically, set x² − 1 = x + 1, which gives x² − x − 2 = 0. Factoring: (x − 2)(x + 1) = 0, so x = 2 or x = −1. Substituting back: when x = 2, y = 3; when x = −1, y = 0. These intersection points, (2, 3) and (−1, 0), match the points shown on the graph. B), C) Incorrect; each gives only one of the two valid intersection points. D) Incorrect; these points do not satisfy both equations.",
    "topic": "Nonlinear Systems of Equations"
  },
  {
    "id": 12,
    "text": "Simplify the rational expression (x² − 4) / (x − 2), for x ≠ 2.",
    "options": [
      "x − 2",
      "x + 2",
      "x² − 2",
      "2x − 4"
    ],
    "answer": 1,
    "explanation": "Factor the numerator as a difference of squares: x² − 4 = (x + 2)(x − 2). Then cancel the common factor (x − 2) from the numerator and denominator (since x ≠ 2): (x + 2)(x − 2)/(x − 2) = x + 2. A) Incorrect; this is the factor that gets canceled, not the simplified result. C) Incorrect; does not correctly factor or simplify the expression. D) Incorrect; this is the original numerator multiplied by 2, not the simplified expression.",
    "topic": "Rational Expressions"
  },
  {
    "id": 13,
    "text": "Simplify the rational expression (x² + 5x + 6) / (x + 2), for x ≠ -2.",
    "options": [
      "x + 2",
      "x + 3",
      "x + 6",
      "x − 3"
    ],
    "answer": 1,
    "explanation": "Factor the numerator: x² + 5x + 6 = (x + 2)(x + 3). Cancel the common factor (x + 2) from the numerator and denominator (since x ≠ −2): (x + 2)(x + 3)/(x + 2) = x + 3. A) Incorrect; this is the factor that gets canceled, not the simplified result. C), D) Incorrect; do not correctly factor the numerator.",
    "topic": "Rational Expressions"
  },
  {
    "id": 14,
    "text": "What value(s) of x must be excluded from the domain of the rational expression 5 / (x − 3)?",
    "options": [
      "x = 0",
      "x = 3",
      "x = 5",
      "x = -3"
    ],
    "answer": 1,
    "explanation": "A rational expression is undefined when its denominator equals zero. Setting x − 3 = 0 gives x = 3, so x = 3 must be excluded from the domain. A), C), D) Incorrect; none of these values make the denominator (x − 3) equal to zero.",
    "topic": "Domain of Rational Expressions"
  },
  {
    "id": 15,
    "useImage": true,
    "imageKey": "q15_rational_asymptote",
    "text": "The graph shows the function y = 1/(x − 2). The dashed vertical line represents a vertical asymptote. What is the equation of this vertical asymptote, and why does it occur there?",
    "options": [
      "x = 2, because the function is undefined when the denominator equals zero",
      "x = 1, because that is the y-intercept of the function",
      "x = 0, because that is where the numerator equals zero",
      "x = -2, because of the negative sign in the denominator"
    ],
    "answer": 0,
    "explanation": "A vertical asymptote occurs where the denominator of a rational function equals zero (making the function undefined). For y = 1/(x − 2), setting x − 2 = 0 gives x = 2, which matches the dashed line shown in the graph. B) Incorrect; the y-intercept occurs at x = 0, not x = 1, and is unrelated to the vertical asymptote. C) Incorrect; the numerator (1) never equals zero, so this is not the source of the asymptote. D) Incorrect; x = −2 does not make the denominator (x − 2) equal to zero.",
    "topic": "Rational Functions & Asymptotes"
  },
  {
    "id": 16,
    "text": "Simplify (x²y³)² · (x³y)².",
    "options": [
      "x¹⁰y⁸",
      "x⁵y⁴",
      "x⁶y⁶",
      "x¹²y¹⁰"
    ],
    "answer": 0,
    "explanation": "First simplify each factor: (x²y³)² = x⁴y⁶, and (x³y)² = x⁶y². Then multiply, adding the exponents of like bases: x⁴y⁶ · x⁶y² = x^(4+6)·y^(6+2) = x¹⁰y⁸. B), C), D) Incorrect; arithmetic errors when applying the power rule and product rule for exponents.",
    "topic": "Exponent Rules"
  },
  {
    "id": 17,
    "text": "Simplify x⁻³ · x⁵.",
    "options": [
      "x²",
      "x⁻²",
      "x⁸",
      "x⁻¹⁵"
    ],
    "answer": 0,
    "explanation": "When multiplying powers with the same base, add the exponents: x⁻³ · x⁵ = x^(−3+5) = x². B) Incorrect; sign error when adding the exponents. C) Incorrect; this would result from incorrectly subtracting (5 − (−3)) and treating the result as a positive multiplication exponent rather than the sum −3+5. D) Incorrect; this would result from incorrectly multiplying the exponents instead of adding them.",
    "topic": "Exponent Rules"
  },
  {
    "id": 18,
    "text": "If √(x + 5) = 3, what is the value of x?",
    "options": [
      "-2",
      "2",
      "4",
      "9"
    ],
    "answer": 1,
    "explanation": "To solve √(x + 5) = 3, square both sides: x + 5 = 3² = 9. Subtracting 5 from both sides gives x = 4. Checking: √(4+5) = √9 = 3, which confirms the solution. A), C), D) Incorrect; do not satisfy the original equation when substituted back.",
    "topic": "Radical Equations"
  },
  {
    "id": 19,
    "text": "Solve the radical equation √(2x − 3) = 5.",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": 2,
    "explanation": "Square both sides of √(2x − 3) = 5 to get 2x − 3 = 25. Adding 3 to both sides gives 2x = 28. Dividing by 2 gives x = 14. Checking: √(2(14)−3) = √25 = 5, which confirms the solution. A), B), C) Incorrect; arithmetic errors when isolating x after squaring both sides.",
    "topic": "Radical Equations"
  },
  {
    "id": 20,
    "useImage": true,
    "imageKey": "q20_composition",
    "text": "If f(x) = x² and g(x) = x + 1, what is f(g(x))?",
    "options": [
      "x² + 1",
      "(x + 1)²",
      "x² + x + 1",
      "2x + 1"
    ],
    "answer": 1,
    "explanation": "To find f(g(x)), substitute g(x) = x + 1 into f(x) = x² in place of x: f(g(x)) = f(x + 1) = (x + 1)². A) Incorrect; this would be g(f(x)) = f(x) + 1 = x² + 1, applying the functions in the wrong order. C) Incorrect; this is the expanded form of (x+1)² with an error (the correct expansion is x² + 2x + 1). D) Incorrect; this does not correctly apply either function.",
    "topic": "Function Composition"
  },
  {
    "id": 21,
    "text": "If f(x) = x + 1 and g(x) = x², what is g(f(x))?",
    "options": [
      "x² + 1",
      "(x + 1)²",
      "x + 1²",
      "x²+ x"
    ],
    "answer": 1,
    "explanation": "To find g(f(x)), substitute f(x) = x + 1 into g(x) = x² in place of x: g(f(x)) = g(x + 1) = (x + 1)². A) Incorrect; this would be f(g(x)) = g(x) + 1 = x² + 1, applying the functions in the wrong order. C), D) Incorrect; do not correctly apply the composition of functions.",
    "topic": "Function Composition"
  },
  {
    "id": 22,
    "text": "For the function f(x) = x², what is the domain of the function?",
    "options": [
      "All real numbers",
      "x ≥ 0 only",
      "x ≤ 0 only",
      "All real numbers except 0"
    ],
    "answer": 0,
    "explanation": "The function f(x) = x² is defined for every real number input — there are no restrictions, since squaring any real number is always possible. B), C) Incorrect; the domain (input values) is not restricted to non-negative or non-positive numbers; it is the range (output values) that is restricted to y ≥ 0. D) Incorrect; x = 0 is a valid input (f(0) = 0), so it should not be excluded.",
    "topic": "Domain and Range"
  },
  {
    "id": 23,
    "useImage": true,
    "imageKey": "q23_range_parabola",
    "text": "For the function f(x) = (x − 2)² − 1, shown in the graph, what is the range of the function?",
    "options": [
      "y ≥ -1",
      "y ≤ -1",
      "All real numbers",
      "y ≥ 2"
    ],
    "answer": 0,
    "explanation": "The function f(x) = (x − 2)² − 1 is a parabola that opens upward with its vertex (minimum point) at (2, −1), as shown in the graph. Since the parabola opens upward, the minimum y-value is −1, and y can take any value greater than or equal to −1. Therefore, the range is y ≥ −1. B) Incorrect; this would be the range if the parabola opened downward. C) Incorrect; while the domain of this function is all real numbers, the range is restricted because the parabola has a minimum value. D) Incorrect; 2 is the x-coordinate of the vertex, not a bound on the y-values.",
    "topic": "Domain and Range"
  },
  {
    "id": 24,
    "text": "A logarithmic function is the inverse of which type of function?",
    "options": [
      "Linear function",
      "Quadratic function",
      "Exponential function",
      "Rational function"
    ],
    "answer": 2,
    "explanation": "Logarithmic functions are defined as the inverse of exponential functions. For example, if y = bˣ (an exponential function), then x = log_b(y) (a logarithmic function). A) Incorrect; the inverse of a linear function (with nonzero slope) is also a linear function. B) Incorrect; the inverse of a quadratic function (restricted to make it one-to-one) is a square root function, not a logarithm. D) Incorrect; the inverse of many rational functions is also rational, not logarithmic.",
    "topic": "Logarithmic & Exponential Functions"
  },
  {
    "id": 25,
    "text": "If 2ˣ = 32, what is the value of x?",
    "options": [
      "4",
      "5",
      "6",
      "16"
    ],
    "answer": 1,
    "explanation": "Since 32 = 2⁵ (2 × 2 × 2 × 2 × 2 = 32), and 2ˣ = 32 = 2⁵, the exponents must be equal: x = 5. A), C) Incorrect; do not satisfy 2ˣ = 32 (2⁴ = 16 and 2⁶ = 64). D) Incorrect; this confuses the value 32 with the exponent x itself.",
    "topic": "Exponential Equations"
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
