// =============================================
// Digital SAT Practice - Topic: topic_circles
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "useImage": true,
    "imageKey": "q1_triangle_345",
    "text": "If a triangle has sides of lengths 3, 4, and 5, what is the triangle's area?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. This is a right triangle (3-4-5), with the legs of lengths 3 and 4 acting as the base and height. Area = (1/2) × base × height = (1/2) × 3 × 4 = 6. B), C), D) Incorrect; calculation errors in applying the area formula.",
    "topic": "Triangle Area"
  },
  {
    "id": 2,
    "useImage": true,
    "imageKey": "q2_rect_8x5",
    "text": "A rectangle has a length of 8 and a width of 5. What is its perimeter?",
    "options": [
      "26",
      "30",
      "34",
      "40"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The perimeter of a rectangle is given by 2 × (length + width) = 2 × (8 + 5) = 2 × 13 = 26. B) Incorrect; doubles only the length. C) Incorrect; addition error. D) Incorrect; multiplies the length and width instead of adding them.",
    "topic": "Rectangle Perimeter"
  },
  {
    "id": 3,
    "useImage": true,
    "imageKey": "q3_circle_16pi",
    "text": "If the area of a circle is ( 16pi ), what is the radius?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The area of a circle is given by ( A = pi r^2 ). Setting πr² = ( 16pi ) and dividing both sides by π gives ( r^2 = 16 ). Taking the square root gives ( r = 4 ). A) Incorrect; misunderstanding the area formula. B) Incorrect; wrong square root. D) Incorrect; overestimating the radius.",
    "topic": "Circle Area & Radius"
  },
  {
    "id": 4,
    "useImage": true,
    "imageKey": "q4_circle_25pi",
    "text": "If the area of a circle is ( 25pi ) square units, what is the radius?",
    "options": [
      "5",
      "10",
      "25",
      "50"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The area of a circle is given by ( A = pi r^2 ). Setting πr² = ( 25pi ) and dividing both sides by π gives ( r^2 = 25 ). Taking the square root gives ( r = 5 ). B), C), D) Incorrect; arithmetic errors in solving for r, such as forgetting to take the square root.",
    "topic": "Circle Area & Radius"
  },
  {
    "id": 5,
    "useImage": true,
    "imageKey": "q5_triangle_b10h5",
    "text": "What is the area of a triangle with a base of 10 units and a height of 5 units?",
    "options": [
      "25 square units",
      "30 square units",
      "35 square units",
      "40 square units"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The area of a triangle is given by ( A = \\frac{1}{2} imes ext{base} imes ext{height} = \\frac{1}{2} imes 10 imes 5 = 25 ) square units. B) Incorrect; misunderstanding the formula. C) Incorrect; incorrect multiplication. D) Incorrect; error in calculation (e.g., forgetting the 1/2 factor).",
    "topic": "Triangle Area"
  },
  {
    "id": 6,
    "useImage": true,
    "imageKey": "q6_cube_side3",
    "text": "What is the volume of a cube with side length 3 units?",
    "options": [
      "9 cubic units",
      "18 cubic units",
      "27 cubic units",
      "36 cubic units"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The volume of a cube is given by ( V = s^3 ). Substituting s = 3 gives ( V = 3^3 = 27 ) cubic units. A) Incorrect; squares the side instead of cubing it. B) Incorrect; incorrect multiplication. D) Incorrect; misunderstanding the formula.",
    "topic": "Cube Volume"
  },
  {
    "id": 7,
    "text": "If the perimeter of a rectangle is 24 units and the length is 8 units, what is the width?",
    "options": [
      "2 units",
      "4 units",
      "6 units",
      "8 units"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The perimeter of a rectangle is ( P = 2(l + w) ). Given P = 24 and l = 8: 24 = ( 2(8 + w) ), so 24 = ( 16 + 2w ). Subtracting 16 from both sides gives ( 2w = 8 ), so ( w = 4 ) units. A) Incorrect; misunderstanding the perimeter formula. C) Incorrect; error in subtraction. D) Incorrect; confuses length with width.",
    "topic": "Rectangle Perimeter"
  },
  {
    "id": 8,
    "text": "If the perimeter of a square is 20, what is the length of one side?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The perimeter of a square is given by ( 4 imes ext{side length} ). Setting ( 4 imes ext{side length} ) = 20 and dividing by 4 gives side length = 5. A) Incorrect; misunderstanding the perimeter formula. C), D) Incorrect; results from incorrect division.",
    "topic": "Square Perimeter"
  },
  {
    "id": 9,
    "text": "If the area of a rectangle is 24 square units and its length is 8 units, what is its width?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The area of a rectangle is given by Area = length × width. Setting ( 24 = 8 imes ext{width} ) and dividing both sides by 8 gives ( ext{width} = 3 ). A) Incorrect; results from incorrect division. C), D) Incorrect; arithmetic errors when dividing 24 by 8.",
    "topic": "Rectangle Area"
  },
  {
    "id": 10,
    "text": "If the circumference of a circle is given by ( 2pi r ) and the radius is 5, what is the circumference?",
    "options": [
      "( 5pi )",
      "( 10pi )",
      "1( 5pi )",
      "( 20pi )"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute ( r = 5 ) into the formula: Circumference = ( 2pi(5) = 10pi ). A) Incorrect; incorrect multiplication. C) Incorrect; misunderstanding the formula. D) Incorrect; arbitrary value not related to the calculation.",
    "topic": "Circle Circumference"
  },
  {
    "id": 11,
    "text": "If the volume of a cube is 64 cubic units, what is the length of one side?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The volume of a cube is given by side³. Setting side³ = 64 and taking the cube root of both sides gives side = 4 (since 4³ = 64). A) Incorrect; misunderstanding the cube root. B) Incorrect; incorrect cube root calculation. D) Incorrect; arbitrary value not related to the calculation.",
    "topic": "Cube Volume"
  },
  {
    "id": 12,
    "text": "If the area of a rectangle is 24 square units and the length is 6 units, what is the width?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Use the area formula Area = length × width: 24 = 6 × width. Dividing both sides by 6 gives width = 4. A) Incorrect; misunderstanding the division process. B) Incorrect; incorrect division. D) Incorrect; arithmetic error.",
    "topic": "Rectangle Area"
  },
  {
    "id": 13,
    "text": "What is the sum of the angles in a triangle?",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The sum of the interior angles in any triangle is always 180°. A) Incorrect; this is the measure of a right angle. C) Incorrect; misunderstanding the sum of angles in a polygon. D) Incorrect; this is the sum of angles in a circle (or a quadrilateral).",
    "topic": "Triangle Angle Sum"
  },
  {
    "id": 14,
    "useImage": true,
    "imageKey": "q14_right_tri_34",
    "text": "A right triangle has legs of lengths 3 and 4. What is the length of the hypotenuse?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Use the Pythagorean theorem: a² + b² = c². Substituting a = 3 and b = 4: 3² + 4² = c², so 9 + 16 = c², giving c² = 25. Taking the square root gives c = 5. B), C), D) Incorrect; do not satisfy the Pythagorean theorem with legs of 3 and 4.",
    "topic": "Pythagorean Theorem"
  },
  {
    "id": 15,
    "text": "If the area of a square is 49 square units, what is the length of one side?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The area of a square is given by side². Setting side² = 49 and taking the square root of both sides gives side = 7 (since 7² = 49). A), C), D) Incorrect; do not satisfy side² = 49.",
    "topic": "Square Area"
  },
  {
    "id": 16,
    "useImage": true,
    "imageKey": "q16_rect_8x6",
    "text": "A rectangle has a length of 8 units and a width of 6 units. What is the perimeter of the rectangle?",
    "options": [
      "14 units",
      "24 units",
      "28 units",
      "48 units"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The perimeter of a rectangle is given by 2(length + width) = 2(8 + 6) = 2 × 14 = 28 units. A) Incorrect; misunderstanding the perimeter formula (this is just the sum of length and width). B) Incorrect; incorrect multiplication. D) Incorrect; multiplies the length and width instead of finding the perimeter.",
    "topic": "Rectangle Perimeter"
  },
  {
    "id": 17,
    "text": "If the area of a rectangle is 24 square units and the width is 4 units, what is the length of the rectangle?",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The area A of a rectangle is given by A = length × width. Therefore: 24 = length × 4. Dividing both sides by 4 gives length = 6. B), C), D) Incorrect; arithmetic errors when dividing 24 by 4.",
    "topic": "Rectangle Area"
  },
  {
    "id": 18,
    "text": "If the perimeter of a square is 20 units, what is the length of one side?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The perimeter P of a square is given by P = ( 4 imes ext{side length} ). Therefore: 20 = ( 4 imes ext{side length} ). Dividing both sides by 4 gives side length = 5. A) Incorrect; miscalculation in dividing by 4. C), D) Incorrect; errors in understanding the perimeter formula.",
    "topic": "Square Perimeter"
  },
  {
    "id": 19,
    "text": "A right triangle has one angle of 30° and a right angle (90°). What is the measure of the third angle?",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Since the sum of the angles in a triangle is always 180°, the third angle is 180° − 90° − 30° = 60°. A) Incorrect; this is the value of the given angle, not the missing one. B) Incorrect; does not result from 180° − 90° − 30°. D) Incorrect; this is the measure of the right angle that is already given.",
    "topic": "Triangle Angle Sum"
  },
  {
    "id": 20,
    "useImage": true,
    "imageKey": "q20_cylinder",
    "text": "A cylinder has a radius of 3 units and a height of 4 units. What is the volume of the cylinder?",
    "options": [
      "12π cubic units",
      "24π cubic units",
      "36π cubic units",
      "48π cubic units"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The volume V of a cylinder is given by V = πr²h. Therefore: V = π × 3² × 4 = π × 9 × 4 = 36π cubic units. A) Incorrect; misunderstanding the formula. B) Incorrect; error in squaring the radius. D) Incorrect; arithmetic error in multiplication.",
    "topic": "Cylinder Volume"
  },
  {
    "id": 21,
    "useImage": true,
    "imageKey": "q21_tri_perimeter",
    "text": "A triangle has sides of lengths 3, 4, and 5. What is the perimeter of the triangle?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The perimeter of a triangle is the sum of the lengths of its sides: 3 + 4 + 5 = 12. A) Incorrect; misunderstanding of perimeter calculation. B) Incorrect; adding only two of the three sides. C) Incorrect; arithmetic error in addition.",
    "topic": "Triangle Perimeter"
  },
  {
    "id": 22,
    "useImage": true,
    "imageKey": "q22_circle_r7",
    "text": "If the radius of a circle is 7 units, what is the circumference of the circle?",
    "options": [
      "14π",
      "21π",
      "28π",
      "49π"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The circumference of a circle is given by C = ( 2pi r ). Substituting r = 7: C = 2π(7) = 14π. B) Incorrect; incorrect multiplication. C), D) Incorrect; confuse the circumference formula with the area formula or apply incorrect arithmetic.",
    "topic": "Circle Circumference"
  },
  {
    "id": 23,
    "text": "A circle has a radius of 5 units. What is the circumference of the circle?",
    "options": [
      "( 10pi )",
      "1( 5pi )",
      "( 20pi )",
      "( 25pi )"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The circumference of a circle is given by C = ( 2pi r ). Substituting ( r = 5 ): C = ( 2pi(5) = 10pi ). B), C) Incorrect; arithmetic errors in multiplying 2 and 5. D) Incorrect; this would be the area formula result (πr²) rather than the circumference.",
    "topic": "Circle Circumference"
  },
  {
    "id": 24,
    "useImage": true,
    "imageKey": "q24_square_81",
    "text": "If the area of a square is 81 square units, what is the length of one side?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The area of a square is given by side². Setting side² = 81 and taking the square root of both sides gives side = 9 (since 9² = 81). A), B), D) Incorrect; misunderstanding or incorrect calculation of the square root.",
    "topic": "Square Area"
  },
  {
    "id": 25,
    "useImage": true,
    "imageKey": "q25_triangle_area24",
    "text": "If the area of a triangle is 24 square units and the base is 8 units, what is the height of the triangle?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The area A of a triangle is given by A = (1/2) × base × height. Substituting A = 24 and base = 8: 24 = (1/2) × 8 × height, so 24 = 4 × height. Dividing both sides by 4 gives height = 6. A), B), C) Incorrect; arithmetic errors when solving for the height.",
    "topic": "Triangle Area"
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
