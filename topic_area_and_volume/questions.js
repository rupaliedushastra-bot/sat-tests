// =============================================
// Digital SAT Practice - Topic: topic_area_and_volume
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "If the circumference of a circle is ( 10pi ), what is its area?",
    "options": [
      "( 25pi )",
      "( 50pi )",
      "( 100pi )",
      "( 10pi )"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Circumference = 2πr = ( 10pi ) → ( r = 5 ). Area = πr² = π(5)² = ( 25pi ).",
    "topic": "Circles – Area & Circumference"
  },
  {
    "id": 2,
    "text": "A rectangle has a length of 12 and a width of 5. What is the length of its diagonal?",
    "options": [
      "13",
      "17",
      "60",
      "144"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. ( \text{Diagonal} = sqrt{ \text{length}^2 + \text{width}^2} = sqrt{12^2 + 5^2} = sqrt{144 + 25} = sqrt{169} = 13 ).",
    "topic": "Rectangles – Diagonal"
  },
  {
    "id": 3,
    "text": "A right circular cylinder has a base radius of 3 and a height of 8. What is its volume?",
    "options": [
      "( 24pi )",
      "( 48pi )",
      "( 72pi )",
      "( 144pi )"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Volume of cylinder = πr²h = π(3²)(8) = π(9)(8) = ( 72pi ).",
    "topic": "3D Solids – Cylinder Volume"
  },
  {
    "id": 4,
    "text": "What is the area of an equilateral triangle with a side length of 6?",
    "options": [
      "18",
      "( 9sqrt{3} )",
      "( 18sqrt{3} )",
      "36"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Area of equilateral triangle = (√3/4)s² = (√3/4)(6²) = (√3/4)(36) = ( 9sqrt{3} ).",
    "topic": "Triangles – Equilateral Triangle Area"
  },
  {
    "id": 5,
    "text": "The volume of a cube is 64. What is its total surface area?",
    "options": [
      "16",
      "64",
      "96",
      "256"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. ( \text{Volume} = s^3 = 64 ) → ( s = 4 ). ( \text{Total surface area} = 6s^2 = 6(4^2) = 6(16) = 96 ).",
    "topic": "3D Solids – Cube"
  },
  {
    "id": 6,
    "text": "If the volume of a sphere is ( 36pi ), what is its radius?",
    "options": [
      "3",
      "6",
      "9",
      "27"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Volume of sphere = (4/3)πr³ = ( 36pi ) → ( r^3 = 36 \times \\frac{3}{4} = 27 ) → ( r = 3 ).",
    "topic": "3D Solids – Sphere Volume"
  },
  {
    "id": 7,
    "text": "A trapezoid has parallel bases of 8 and 14, and a height of 5. What is its area?",
    "options": [
      "55",
      "110",
      "22",
      "40"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. ( \text{Area of trapezoid} = \\frac{1}{2}(b_1 + b_2) \times h = \\frac{1}{2}(8 + 14) \times 5 = \\frac{1}{2}(22)(5) = 55 ).",
    "topic": "Quadrilaterals – Trapezoid Area"
  },
  {
    "id": 8,
    "text": "A right circular cone has a base radius of 4 and a slant height of 5. What is its volume?",
    "options": [
      "( 12pi )",
      "( 16pi )",
      "( 20pi )",
      "( 48pi )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. First find height using Pythagoras: ( h = sqrt{ \text{slant}^2 - r^2} = sqrt{5^2 - 4^2} = sqrt{25 - 16} = sqrt{9} = 3 ). Volume of cone = (1/3)πr²h = (1/3)π(16)(3) = ( 16pi ).",
    "topic": "3D Solids – Cone Volume"
  },
  {
    "id": 9,
    "text": "A circle has a radius of 12. What is the area of a sector with a central angle of ( 60^circ )?",
    "options": [
      "( 12pi )",
      "( 24pi )",
      "( 48pi )",
      "( 144pi )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Area of sector = (θ/3( 60^circ )) × πr² = (60/360) × π(12²) = (1/6) × ( 144pi ) = ( 24pi ).",
    "topic": "Circles – Sector Area"
  },
  {
    "id": 10,
    "text": "In a circle with a radius of 9, what is the length of an arc intercepted by a central angle of ( 40^circ )?",
    "options": [
      "π",
      "2π",
      "4π",
      "9π"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Arc length = (θ/3( 60^circ )) × 2πr = (40/360) × 2π(9) = (1/9) × 18π = 2π.",
    "topic": "Circles – Arc Length"
  },
  {
    "id": 11,
    "text": "Two similar triangles have a scale factor of 2 : 3. If the area of the smaller triangle is 20, what is the area of the larger triangle?",
    "options": [
      "30",
      "40",
      "45",
      "60"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. When the scale factor of similar figures is k, the ratio of their areas is k². Here scale factor = ( 2:3 ), so area ratio = ( 4:9 ). ( \text{Larger area} = 20 \times left(\\frac{9}{4}\right) = 45 ).",
    "topic": "Similar Figures – Area Ratio"
  },
  {
    "id": 12,
    "text": "A rectangular prism has a volume of 120. If its length is 6 and its width is 4, what is its height?",
    "options": [
      "5",
      "10",
      "12",
      "24"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Volume = l × w × h → 120 = 6 × 4 × h → 120 = 24h → h = 5.",
    "topic": "3D Solids – Rectangular Prism"
  },
  {
    "id": 13,
    "text": "What is the sum of the interior angles of a regular hexagon?",
    "options": [
      "3( 60^circ )",
      "5( 40^circ )",
      "720°",
      "1080°"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Sum of interior angles of a polygon = (n − 2) × 180°. For hexagon: (6 − 2) × 180° = 4 × 180° = 720°.",
    "topic": "Polygons – Interior Angle Sum"
  },
  {
    "id": 14,
    "text": "A square is inscribed in a circle of radius 5√2. What is the area of the square?",
    "options": [
      "50",
      "100",
      "150",
      "200"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The diagonal of the inscribed square = diameter of circle = 2 × 5√2 = 10√2. For a square with diagonal d, side = d/√2 = 10√2/√2 = 10. Area = 10² = 100.",
    "topic": "Circles – Inscribed Square"
  },
  {
    "id": 15,
    "text": "A solid is formed by attaching a hemisphere to the top of a right circular cylinder. Both the hemisphere and the cylinder have a radius of 3. If the height of the cylinder is 10, what is the total volume of the solid?",
    "options": [
      "99π",
      "108π",
      "117π",
      "126π"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Volume of cylinder = πr²h = π(9)(10) = 90π. Volume of hemisphere = (2/3)πr³ = (2/3)π(27) = 18π. Total = 90π + 18π = 108π.",
    "topic": "3D Solids – Composite Solids"
  },
  {
    "id": 16,
    "text": "A square pyramid has a base side length of 6 and a height of 8. What is its volume?",
    "options": [
      "96",
      "144",
      "288",
      "384"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Volume of pyramid = (1/3) × base area × height = (1/3) × 6² × 8 = (1/3) × 36 × 8 = (1/3)(288) = 96.",
    "topic": "3D Solids – Pyramid Volume"
  },
  {
    "id": 17,
    "text": "The diagonals of a rhombus have lengths 10 and 24. What is the perimeter of the rhombus?",
    "options": [
      "34",
      "52",
      "68",
      "120"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Diagonals of a rhombus bisect each other at right angles. Half-diagonals: 5 and 12. Side of rhombus = √(5² + 12²) = √(25 + 144) = √169 = 13. Perimeter = 4 × 13 = 52.",
    "topic": "Quadrilaterals – Rhombus"
  },
  {
    "id": 18,
    "text": "A circle is inscribed in a square with a side length of 8. What is the area of the region inside the square but outside the circle?",
    "options": [
      "64 − 8π",
      "64 − ( 16pi )",
      "64 − 32π",
      "64 − 64π"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Inscribed circle radius = half the side length = 4. Area of square = 8² = 64. Area of circle = π(4²) = ( 16pi ). Shaded area = 64 − ( 16pi ).",
    "topic": "Circles – Inscribed in Square"
  },
  {
    "id": 19,
    "text": "What is the lateral surface area of a right circular cylinder with a base radius of 5 and a height of 12?",
    "options": [
      "60π",
      "85π",
      "1( 20pi )",
      "170π"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Lateral surface area of cylinder = 2πrh = 2π(5)(12) = 1( 20pi ).",
    "topic": "3D Solids – Cylinder Surface Area"
  },
  {
    "id": 20,
    "text": "If the radius of a sphere is doubled, by what factor does its volume increase?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Volume of sphere = (4/3)πr³. If r → 2r: V_new = (4/3)π(2r)³ = (4/3)π(8r³) = 8 × original volume. The volume increases by a factor of 8.",
    "topic": "3D Solids – Sphere Scaling"
  },
  {
    "id": 21,
    "text": "A parallelogram has a base of 15 and a corresponding height of 8. What is its area?",
    "options": [
      "60",
      "120",
      "150",
      "240"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Area of parallelogram = base × height = 15 × 8 = 120.",
    "topic": "Quadrilaterals – Parallelogram Area"
  },
  {
    "id": 22,
    "text": "A regular hexagon has a side length of 4. What is its exact area?",
    "options": [
      "24√3",
      "48",
      "48√3",
      "96"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A regular hexagon consists of 6 equilateral triangles. Area of one equilateral triangle = (√3/4)s² = (√3/4)(16) = 4√3. Total area = 6 × 4√3 = 24√3.",
    "topic": "Polygons – Regular Hexagon Area"
  },
  {
    "id": 23,
    "text": "A rectangle has a perimeter of 40. What is its maximum possible area?",
    "options": [
      "80",
      "100",
      "400",
      "1600"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Perimeter = 2(l + w) = 40 → l + w = 20. Area is maximised when l = w (square). So l = w = 10. Maximum area = 10 × 10 = 100.",
    "topic": "Rectangles – Optimisation"
  },
  {
    "id": 24,
    "text": "Two sides of a triangle have lengths 7 and 10. Which of the following CANNOT be the perimeter of the triangle?",
    "options": [
      "22",
      "28",
      "30",
      "19"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Triangle inequality: third side must satisfy |10 − 7| < s < 10 + 7 → 3 < s < 17. Perimeter = 7 + 10 + s = 17 + s. So perimeter must be between 17 + 3 = 20 and 17 + 17 = 34 (exclusive). Perimeter 19 < 20, so it is impossible.",
    "topic": "Triangles – Triangle Inequality & Perimeter"
  },
  {
    "id": 25,
    "text": "What is the length of the longest diagonal in a rectangular solid with dimensions 3, 4, and 12?",
    "options": [
      "13",
      "15",
      "17",
      "19"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Space diagonal = √(l² + w² + h²) = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13.",
    "topic": "3D Solids – Space Diagonal"
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
