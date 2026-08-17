// =============================================
// Digital SAT Practice - Topic: topic_lines_angles_and_triangles
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "The measures of the three angles in a triangle form an arithmetic progression. The measure of the largest angle is ( 80^circ ) greater than the measure of the smallest angle. What is the measure, in degrees, of the largest angle?",
    "options": [
      "( 100^circ )",
      "( 120^circ )",
      "( 80^circ )",
      "( 90^circ )"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Let the three angles in AP be (a - d), a, (a + d). Their sum = ( 180^circ ), so 3a = ( 180^circ ), giving a = ( 60^circ ). The difference between largest and smallest = 2d = ( 80^circ ), so d = ( 40^circ ). Largest angle = ( 60^circ ) + ( 40^circ ) = ( 100^circ ).",
    "topic": "Triangles – Angle Sum"
  },
  {
    "id": 2,
    "text": "In a figure, two horizontal lines are parallel and are intersected by a transversal. The angle measures are given as ( x = 20q + 90 ) and ( y = 10q + 60 ). If x and y are corresponding angles, and z is vertically opposite to y, what is the value of z?",
    "options": [
      "( 3^circ )",
      "( 150^circ )",
      "( 30^circ )",
      "( 110^circ )"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Corresponding angles are equal: ( 20q + 90 = 10q + 60 ) → ( 10( q = -3 )0 ) → ( q = -3 ). Then ( y = 10(-3) + 60 ) = ( 30^circ ). Since z is vertically opposite to y, ( z = y = 30^circ ).",
    "topic": "Parallel Lines – Corresponding & Vertical Angles"
  },
  {
    "id": 3,
    "text": "Three lines p, q, and r intersect to form a triangle. If two of the exterior angles formed at the vertices are ( 124^circ ) and ( 138^circ ), what is the measure of the interior angle at the third vertex?",
    "options": [
      "( 14^circ )",
      "( 82^circ )",
      "( 98^circ )",
      "( 76^circ )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Interior angle = ( 180^circ ) − exterior angle. So two interior angles are ( 180^circ - 124^circ = 56^circ ) and ( 180^circ - 138^circ = 42^circ ). Third interior angle = ( 180^circ - 56^circ - 42^circ = 82^circ ).",
    "topic": "Triangles – Exterior Angles"
  },
  {
    "id": 4,
    "text": "A transversal line intersects two parallel lines. An acute angle formed is ( 44^circ ). What is the measure of consecutive interior angle r?",
    "options": [
      "( 44^circ )",
      "( 46^circ )",
      "( 136^circ )",
      "( 146^circ )"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Consecutive interior angles (co-interior / same-side interior angles) are supplementary when lines are parallel. So r = ( 180^circ - 44^circ = 136^circ ).",
    "topic": "Parallel Lines – Consecutive Interior Angles"
  },
  {
    "id": 5,
    "text": "In a circle, AB and CD are diameters. The circumference of the circle is 60 units. The length of arc AD is twice the length of arc DB. What is the length of arc BC?",
    "options": [
      "10",
      "15",
      "20",
      "30"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. AB is a diameter, so arc ADB = half the circumference = 30. Let arc DB = x, then arc AD = 2x. So ( 2x + x = 30 ) → ( x = 10 ). Arc DB = 10, arc AD = 20. Since CD is also a diameter, arc BC = arc AD = 20 (opposite arcs).",
    "topic": "Circle – Arc Length"
  },
  {
    "id": 6,
    "text": "In triangle ABC, angle C is a right angle. The length of side AC is 6 units, and the length of side BC is 8 units. What is the value of sin(A)?",
    "options": [
      "( \frac{3}{5} )",
      "( \frac{4}{5} )",
      "( \frac{3}{4} )",
      "( \frac{4}{3} )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Hypotenuse AB = ( sqrt{6^2 + 8^2} ) = ( sqrt{36 + 64} ) = ( sqrt{100} = 10 ). sin(A) = opposite/hypotenuse = BC/AB = ( \\frac{8}{10} ) = ( \\frac{4}{5} ).",
    "topic": "Trigonometry – sin, cos, tan"
  },
  {
    "id": 7,
    "text": "In a right triangle, the lengths of the legs are 4 and ( 4sqrt{3} ), and the hypotenuse is 8. What is the measure of the angle opposite to the shortest side?",
    "options": [
      "( 30^circ )",
      "( 45^circ )",
      "( 60^circ )",
      "( 90^circ )"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The shortest side is 4 (the smaller leg). sin(θ) = ( \\frac{4}{8} ) = ( \\frac{1}{2} ), so θ = ( 30^circ ). This is a 30-60-90 triangle (sides in ratio 1 : √3 : 2).",
    "topic": "Triangles – Special Right Triangles"
  },
  {
    "id": 8,
    "text": "Two parallel lines are cut by a transversal. If one of the alternate interior angles is ( 49^circ ), what is the measure of the consecutive interior angle on the same side of the transversal?",
    "options": [
      "( 41^circ )",
      "( 49^circ )",
      "( 131^circ )",
      "( 311^circ )"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Alternate interior angles are equal, so the other alternate interior angle is also ( 49^circ ). Consecutive interior angles on the same side are supplementary: ( 180^circ - 49^circ = 131^circ ).",
    "topic": "Parallel Lines – Alternate & Consecutive Interior Angles"
  },
  {
    "id": 9,
    "text": "Points P, Q, and R form a straight line. If the measure of angle PQS is ( 90^circ ) larger than the measure of angle TQR, and the measures of angles SQT and TQR are equal, then what is the measure, in degrees, of angle PQS?",
    "options": [
      "( 60^circ )",
      "( 90^circ )",
      "( 120^circ )",
      "( 150^circ )"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. P, Q, R on a straight line → angles PQS + SQT + TQR = ( 180^circ ). Let TQR = x. Then SQT = x and PQS = x + ( 90^circ ). So ( (x + 90^circ) + x + x = 180^circ ) → ( 3x = 90^circ ) → ( x = 30^circ ). PQS = ( 30^circ + 90^circ = 120^circ ).",
    "topic": "Lines & Angles – Linear Pair"
  },
  {
    "id": 10,
    "text": "In a triangle, the second angle is twice as large as the first angle, and the third angle is ( 20^circ ) less than the second angle. What is the measure of the first angle?",
    "options": [
      "( 36^circ )",
      "( 40^circ )",
      "( 60^circ )",
      "( 80^circ )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let first angle = x. Second = 2x. Third = 2x − ( 20^circ ). Sum = ( 180^circ ): ( x + 2x + (2x - 20^circ) = 180^circ ) → ( 5x = 200^circ ) → ( x = 40^circ ).",
    "topic": "Triangles – Angle Sum"
  },
  {
    "id": 11,
    "text": "Two parallel lines are intersected by a transversal. If one of the acute angles formed measures (3x − 15)° and one of the obtuse angles formed measures (4x + 20)°, what is the value of x?",
    "options": [
      "20",
      "25",
      "35",
      "60"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. An acute and an obtuse angle formed by a transversal on parallel lines are supplementary (co-interior) or one is alternate. Since acute + obtuse on the same side are supplementary: ( (3x - 15) + (4x + 20) = 180^circ ) → ( 7x + 5 = 180^circ ) → ( 7x = 175 )^circ ) → ( x = 25 ).",
    "topic": "Parallel Lines – Angle Equations"
  },
  {
    "id": 12,
    "text": "In an isosceles triangle, the vertex angle is ( 50^circ ). What is the measure of one of the base angles?",
    "options": [
      "( 50^circ )",
      "( 65^circ )",
      "( 80^circ )",
      "( 130^circ )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Sum of angles = ( 180^circ ). The two base angles are equal. ( 50^circ ) + 2b = ( 180^circ ) → 2b = ( 130^circ ) → b = ( 65^circ ).",
    "topic": "Triangles – Isosceles Triangle"
  },
  {
    "id": 13,
    "text": "The exterior angle of a regular polygon is ( 24^circ ). How many sides does the polygon have?",
    "options": [
      "10",
      "12",
      "15",
      "18"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Sum of exterior angles of any polygon = ( 360^circ ). Number of sides = ( 360^circ ) ÷ ( 24^circ ) = 15.",
    "topic": "Polygons – Exterior Angles"
  },
  {
    "id": 14,
    "text": "Two angles of a triangle measure ( 42^circ ) and ( 84^circ ). What type of triangle is this?",
    "options": [
      "Right",
      "Scalene and obtuse",
      "Isosceles and acute",
      "Scalene and acute"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Third angle = ( 180^circ ) − ( 42^circ ) − ( 84^circ ) = ( 54^circ ). All three angles (( 42^circ ), ( 54^circ ), ( 84^circ )) are different → scalene. All angles < ( 90^circ ) → acute.",
    "topic": "Triangles – Classification"
  },
  {
    "id": 15,
    "text": "In a right triangle, the measure of one acute angle is 4 times the measure of the other acute angle. What is the measure of the larger acute angle?",
    "options": [
      "( 18^circ )",
      "( 72^circ )",
      "( 75^circ )",
      "( 80^circ )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Two acute angles in a right triangle sum to ( 90^circ ). Let smaller = x, larger = 4x. x + 4x = ( 90^circ ) → 5x = ( 90^circ ) → x = ( 18^circ ). Larger = 4 × ( 18^circ ) = ( 72^circ ).",
    "topic": "Triangles – Right Triangle Angles"
  },
  {
    "id": 16,
    "text": "An angle measures ( 12^circ ) more than twice its complement. What is the measure of the angle?",
    "options": [
      "( 26^circ )",
      "( 64^circ )",
      "( 72^circ )",
      "( 124^circ )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Complement of angle θ = ( 90^circ ) − θ. Given: θ = 2(( 90^circ ) − θ) + ( 12^circ ) → θ = ( 180^circ ) − 2θ + ( 12^circ ) → 3θ = ( 192^circ ) → θ = ( 64^circ ).",
    "topic": "Angles – Complementary Angles"
  },
  {
    "id": 17,
    "text": "If the sides of a triangle are 5, 12, and x, which of the following is a possible value for x?",
    "options": [
      "7",
      "13",
      "17",
      "18"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Triangle Inequality: the sum of any two sides must be greater than the third side. |12 − 5| < x < 12 + 5 → 7 < x < 17. Only x = 13 falls in this range. x = 7 is not strictly greater than 7; x = 17 and 18 exceed 17.",
    "topic": "Triangles – Triangle Inequality"
  },
  {
    "id": 18,
    "text": "A right triangle has legs of lengths 9 and 12. What is the perimeter of this triangle?",
    "options": [
      "15",
      "21",
      "36",
      "54"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Hypotenuse = √(9² + 12²) = √(81 + 144) = √225 = 15. Perimeter = 9 + 12 + 15 = 36.",
    "topic": "Triangles – Pythagorean Theorem"
  },
  {
    "id": 19,
    "text": "In △ABC, ∠A = ( 50^circ ) and ∠B = ( 70^circ ). Which side of the triangle is the longest?",
    "options": [
      "Side AB",
      "Side BC",
      "Side AC",
      "All sides are equal"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. ∠C = ( 180^circ ) − ( 50^circ ) − ( 70^circ ) = ( 60^circ ). The largest side is opposite the largest angle. The largest angle is ∠B = ( 70^circ ), and the side opposite ∠B is AC.",
    "topic": "Triangles – Sides & Angles Relationship"
  },
  {
    "id": 20,
    "text": "Line L1 and Line L2 are parallel. A transversal line intersects them. If the sum of two corresponding angles is ( 150^circ ), what is the measure of each angle?",
    "options": [
      "( 30^circ )",
      "( 75^circ )",
      "( 105^circ )",
      "Cannot be determined"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Corresponding angles on parallel lines are equal. If both are equal and their sum is ( 150^circ ), each angle = ( 150^circ ) ÷ 2 = ( 75^circ ).",
    "topic": "Parallel Lines – Corresponding Angles"
  },
  {
    "id": 21,
    "text": "The exterior angle of a triangle is ( 110^circ ). If one of the opposite interior angles is ( 45^circ ), what is the measure of the other opposite interior angle?",
    "options": [
      "( 45^circ )",
      "( 65^circ )",
      "( 70^circ )",
      "( 155^circ )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Exterior Angle Theorem: an exterior angle of a triangle equals the sum of the two non-adjacent interior angles. ( 110^circ ) = ( 45^circ ) + other angle → other angle = ( 65^circ ).",
    "topic": "Triangles – Exterior Angle Theorem"
  },
  {
    "id": 22,
    "text": "An angle is 1/5 the measure of its supplement. What is the measure of the angle?",
    "options": [
      "( 15^circ )",
      "( 30^circ )",
      "( 36^circ )",
      "( 150^circ )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Supplementary angles sum to ( 180^circ ). Let angle = x. Then x = (1/5)(( 180^circ ) − x) → 5x = ( 180^circ ) − x → 6x = ( 180^circ ) → ( x = 30^circ ).",
    "topic": "Angles – Supplementary Angles"
  },
  {
    "id": 23,
    "text": "In a triangle, the ratio of the three angles is 2 : 3 : 4. What is the measure of the largest angle?",
    "options": [
      "( 40^circ )",
      "( 60^circ )",
      "( 80^circ )",
      "( 100^circ )"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Sum of ratio parts = 2 + 3 + 4 = 9. Each part = ( 180^circ ) ÷ 9 = ( 20^circ ). Largest angle = 4 × ( 20^circ ) = ( 80^circ ).",
    "topic": "Triangles – Angle Ratios"
  },
  {
    "id": 24,
    "text": "Two sides of an isosceles triangle have lengths of 6 and 14. What must be the length of the third side?",
    "options": [
      "6",
      "10",
      "14",
      "20"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The two possible configurations: (a) equal sides are 6 and 6 → third side 14. Check triangle inequality: 6 + 6 = 12 < 14 → invalid. (b) Equal sides are 14 and 14 → third side 6. Check: 14 + 6 > 14 ✓, 6 + 14 > 14 ✓ → valid. So third side = 14.",
    "topic": "Triangles – Isosceles & Triangle Inequality"
  },
  {
    "id": 25,
    "text": "In a right triangle, the hypotenuse is 10 and one leg is x. If the perimeter of the triangle is 24, what is the value of x?",
    "options": [
      "5",
      "7",
      "6 or 8",
      "14"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Let legs be x and y. Hypotenuse = 10. Perimeter: x + y + 10 = 24 → x + y = 14. Pythagorean theorem: x² + y² = 100. From x + y = 14: (x + y)² = x² + 2xy + y² = 196 → 100 + 2xy = 196 → xy = 48. So x and y are roots of t² − 14t + 48 = 0 → (t − 6)(t − 8) = 0 → t = 6 or t = 8. So x = 6 or x = 8.",
    "topic": "Triangles – Pythagorean Theorem"
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
