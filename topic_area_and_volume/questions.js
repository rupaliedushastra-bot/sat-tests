// =============================================
// Digital SAT Practice - Topic: topic_area_and_volume
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "If the circumference of a circle is 10π, what is its area?",
    "options": [
      "25π",
      "50π",
      "100π",
      "10π"
    ],
    "answer": 0,
    "explanation": "Circumference = 2πr = 10π → r = 5. Area = πr² = π(5)² = 25π. Answer: A.",
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
    "explanation": "Diagonal = √(length² + width²) = √(12² + 5²) = √(144 + 25) = √169 = 13. Answer: A.",
    "topic": "Rectangles – Diagonal"
  },
  {
    "id": 3,
    "text": "A right circular cylinder has a base radius of 3 and a height of 8. What is its volume?",
    "options": [
      "24π",
      "48π",
      "72π",
      "144π"
    ],
    "answer": 2,
    "explanation": "Volume of cylinder = πr²h = π(3²)(8) = π(9)(8) = 72π. Answer: C.",
    "topic": "3D Solids – Cylinder Volume"
  },
  {
    "id": 4,
    "text": "What is the area of an equilateral triangle with a side length of 6?",
    "options": [
      "18",
      "9√3",
      "18√3",
      "36"
    ],
    "answer": 1,
    "explanation": "Area of equilateral triangle = (√3/4)s² = (√3/4)(6²) = (√3/4)(36) = 9√3. Answer: B.",
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
    "explanation": "Volume = s³ = 64 → s = 4. Total surface area = 6s² = 6(4²) = 6(16) = 96. Answer: C.",
    "topic": "3D Solids – Cube"
  },
  {
    "id": 6,
    "text": "If the volume of a sphere is 36π, what is its radius?",
    "options": [
      "3",
      "6",
      "9",
      "27"
    ],
    "answer": 0,
    "explanation": "Volume of sphere = (4/3)πr³ = 36π → r³ = 36 × (3/4) = 27 → r = 3. Answer: A.",
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
    "explanation": "Area of trapezoid = ½(b₁ + b₂) × h = ½(8 + 14) × 5 = ½(22)(5) = 55. Answer: A.",
    "topic": "Quadrilaterals – Trapezoid Area"
  },
  {
    "id": 8,
    "text": "A right circular cone has a base radius of 4 and a slant height of 5. What is its volume?",
    "options": [
      "12π",
      "16π",
      "20π",
      "48π"
    ],
    "answer": 1,
    "explanation": "First find height using Pythagoras: h = √(slant² − r²) = √(5² − 4²) = √(25 − 16) = √9 = 3. Volume of cone = (1/3)πr²h = (1/3)π(16)(3) = 16π. Answer: B.",
    "topic": "3D Solids – Cone Volume"
  },
  {
    "id": 9,
    "text": "A circle has a radius of 12. What is the area of a sector with a central angle of 60°?",
    "options": [
      "12π",
      "24π",
      "48π",
      "144π"
    ],
    "answer": 1,
    "explanation": "Area of sector = (θ/360°) × πr² = (60/360) × π(12²) = (1/6) × 144π = 24π. Answer: B.",
    "topic": "Circles – Sector Area"
  },
  {
    "id": 10,
    "text": "In a circle with a radius of 9, what is the length of an arc intercepted by a central angle of 40°?",
    "options": [
      "π",
      "2π",
      "4π",
      "9π"
    ],
    "answer": 1,
    "explanation": "Arc length = (θ/360°) × 2πr = (40/360) × 2π(9) = (1/9) × 18π = 2π. Answer: B.",
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
    "explanation": "When the scale factor of similar figures is k, the ratio of their areas is k². Here scale factor = 2:3, so area ratio = 4:9. Larger area = 20 × (9/4) = 45. Answer: C.",
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
    "explanation": "Volume = l × w × h → 120 = 6 × 4 × h → 120 = 24h → h = 5. Answer: A.",
    "topic": "3D Solids – Rectangular Prism"
  },
  {
    "id": 13,
    "text": "What is the sum of the interior angles of a regular hexagon?",
    "options": [
      "360°",
      "540°",
      "720°",
      "1080°"
    ],
    "answer": 2,
    "explanation": "Sum of interior angles of a polygon = (n − 2) × 180°. For hexagon: (6 − 2) × 180° = 4 × 180° = 720°. Answer: C.",
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
    "explanation": "The diagonal of the inscribed square = diameter of circle = 2 × 5√2 = 10√2. For a square with diagonal d, side = d/√2 = 10√2/√2 = 10. Area = 10² = 100. Answer: B.",
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
    "explanation": "Volume of cylinder = πr²h = π(9)(10) = 90π. Volume of hemisphere = (2/3)πr³ = (2/3)π(27) = 18π. Total = 90π + 18π = 108π. Answer: B.",
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
    "explanation": "Volume of pyramid = (1/3) × base area × height = (1/3) × 6² × 8 = (1/3) × 36 × 8 = (1/3)(288) = 96. Answer: A.",
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
    "explanation": "Diagonals of a rhombus bisect each other at right angles. Half-diagonals: 5 and 12. Side of rhombus = √(5² + 12²) = √(25 + 144) = √169 = 13. Perimeter = 4 × 13 = 52. Answer: B.",
    "topic": "Quadrilaterals – Rhombus"
  },
  {
    "id": 18,
    "text": "A circle is inscribed in a square with a side length of 8. What is the area of the region inside the square but outside the circle?",
    "options": [
      "64 − 8π",
      "64 − 16π",
      "64 − 32π",
      "64 − 64π"
    ],
    "answer": 1,
    "explanation": "Inscribed circle radius = half the side length = 4. Area of square = 8² = 64. Area of circle = π(4²) = 16π. Shaded area = 64 − 16π. Answer: B.",
    "topic": "Circles – Inscribed in Square"
  },
  {
    "id": 19,
    "text": "What is the lateral surface area of a right circular cylinder with a base radius of 5 and a height of 12?",
    "options": [
      "60π",
      "85π",
      "120π",
      "170π"
    ],
    "answer": 2,
    "explanation": "Lateral surface area of cylinder = 2πrh = 2π(5)(12) = 120π. Answer: C.",
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
    "explanation": "Volume of sphere = (4/3)πr³. If r → 2r: V_new = (4/3)π(2r)³ = (4/3)π(8r³) = 8 × original volume. The volume increases by a factor of 8. Answer: C.",
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
    "explanation": "Area of parallelogram = base × height = 15 × 8 = 120. Answer: B.",
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
    "explanation": "A regular hexagon consists of 6 equilateral triangles. Area of one equilateral triangle = (√3/4)s² = (√3/4)(16) = 4√3. Total area = 6 × 4√3 = 24√3. Answer: A.",
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
    "explanation": "Perimeter = 2(l + w) = 40 → l + w = 20. Area is maximised when l = w (square). So l = w = 10. Maximum area = 10 × 10 = 100. Answer: B.",
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
    "explanation": "Triangle inequality: third side must satisfy |10 − 7| < s < 10 + 7 → 3 < s < 17. Perimeter = 7 + 10 + s = 17 + s. So perimeter must be between 17 + 3 = 20 and 17 + 17 = 34 (exclusive). Perimeter 19 < 20, so it is impossible. Answer: D.",
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
    "explanation": "Space diagonal = √(l² + w² + h²) = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13. Answer: A.",
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
