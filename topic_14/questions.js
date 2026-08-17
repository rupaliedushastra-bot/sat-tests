// =============================================
// Digital SAT – Topic Test: Trigonometry
// 25 Questions | Single Timed Module (35 min)
// answers: 0=A, 1=B, 2=C, 3=D
// Sourced from Comprehensive Digital SAT Study Guide concepts
// (SOH-CAH-TOA, special right triangles, unit circle, inverse trig)
// Several questions include diagrams
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "useImage": true,
    "imageKey": "q1_soh_cah_toa",
    "text": "In the right triangle shown, the side of length 3 is opposite angle θ, the side of length 4 is adjacent to θ, and the hypotenuse is 5. What is sin(θ)?",
    "options": [
      "3/5",
      "4/5",
      "3/4",
      "4/3"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. By definition, sine is the ratio of the opposite side to the hypotenuse (SOH): sin(θ) = opposite/hypotenuse = 3/5. B) Incorrect; this is cos(θ) = adjacent/hypotenuse. C) Incorrect; this is tan(θ) = opposite/adjacent. D) Incorrect; this is the reciprocal of tan(θ).",
    "topic": "Trigonometric Ratios (SOH-CAH-TOA)"
  },
  {
    "id": 2,
    "useImage": true,
    "imageKey": "q2_triangle_5_12_13",
    "text": "In the right triangle shown, the legs have lengths 5 and 12, and the hypotenuse has length 13. The angle θ is opposite the side of length 5. What is cos(θ)?",
    "options": [
      "5/13",
      "12/13",
      "5/12",
      "12/5"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. By definition, cosine is the ratio of the adjacent side to the hypotenuse (CAH). Since θ is opposite the side of length 5, the adjacent side has length 12, so cos(θ) = 12/13. A) Incorrect; this is sin(θ) = opposite/hypotenuse. C) Incorrect; this is tan(θ) = opposite/adjacent. D) Incorrect; this is the reciprocal of tan(θ).",
    "topic": "Trigonometric Ratios (SOH-CAH-TOA)"
  },
  {
    "id": 3,
    "text": "Which of the following correctly defines the tangent of an angle in a right triangle?",
    "options": [
      "tan(θ) = opposite / hypotenuse",
      "tan(θ) = adjacent / hypotenuse",
      "tan(θ) = opposite / adjacent",
      "tan(θ) = hypotenuse / opposite"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. According to the mnemonic SOH-CAH-TOA, tangent is the ratio of the opposite side to the adjacent side: tan(θ) = opposite/adjacent. A) Incorrect; this defines sine, not tangent. B) Incorrect; this defines cosine, not tangent. D) Incorrect; this is the reciprocal of tangent (cotangent).",
    "topic": "Trigonometric Ratios (SOH-CAH-TOA)"
  },
  {
    "id": 4,
    "text": "In a right triangle, if sin(θ) = 0.6, what is the value of cos(90° − θ)?",
    "options": [
      "0.4",
      "0.6",
      "0.8",
      "1.0"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. By the cofunction identity, cos(90° − θ) = sin(θ). Since sin(θ) = 0.6, it follows that cos(90° − θ) = 0.6. A), C), D) Incorrect; do not apply the cofunction (complementary angle) identity correctly.",
    "topic": "Cofunction Identities"
  },
  {
    "id": 5,
    "useImage": true,
    "imageKey": "q5_45_45_90",
    "text": "In a 45°-45°-90° triangle, both legs have length 1. What is the length of the hypotenuse, as shown in the diagram?",
    "options": [
      "1",
      "√2",
      "2",
      "√3"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In a 45°-45°-90° triangle, the hypotenuse is √2 times the length of a leg. Since each leg has length 1, the hypotenuse has length 1 × √2 = √2. A) Incorrect; this would mean the hypotenuse equals a leg, which is impossible in a right triangle. C) Incorrect; this would only be true if the legs were longer. D) Incorrect; √3 is associated with the 30°-60°-90° triangle, not the 45°-45°-90° triangle.",
    "topic": "Special Right Triangles (45-45-90)"
  },
  {
    "id": 6,
    "text": "In a 45°-45°-90° triangle, if the hypotenuse has length 6√2, what is the length of each leg?",
    "options": [
      "3",
      "6",
      "6√2",
      "12"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In a 45°-45°-90° triangle, the hypotenuse equals leg × √2. Setting leg × √2 = 6√2 and dividing both sides by √2 gives leg = 6. A) Incorrect; this is half the correct value. C) Incorrect; this is the hypotenuse, not the leg. D) Incorrect; this is double the correct value.",
    "topic": "Special Right Triangles (45-45-90)"
  },
  {
    "id": 7,
    "useImage": true,
    "imageKey": "q7_30_60_90",
    "text": "In the 30°-60°-90° triangle shown, the side opposite the 30° angle has length 1. What is the length of the side opposite the 60° angle?",
    "options": [
      "1",
      "√2",
      "√3",
      "2"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In a 30°-60°-90° triangle, the side opposite the 60° angle (the longer leg) is √3 times the side opposite the 30° angle (the shorter leg). Since the shorter leg is 1, the longer leg is √3. A) Incorrect; this would mean the two legs are equal, which only happens in a 45°-45°-90° triangle. B) Incorrect; √2 is associated with the 45°-45°-90° triangle. D) Incorrect; this is the length of the hypotenuse, not the longer leg.",
    "topic": "Special Right Triangles (30-60-90)"
  },
  {
    "id": 8,
    "text": "In a 30°-60°-90° triangle, the hypotenuse has length 10. What is the length of the side opposite the 30° angle?",
    "options": [
      "5",
      "5√3",
      "10",
      "10√3"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In a 30°-60°-90° triangle, the side opposite the 30° angle (the shorter leg) is half the length of the hypotenuse. Setting hypotenuse = 10, the shorter leg is 10/2 = 5. B) Incorrect; this is the length of the longer leg, opposite the 60° angle. C) Incorrect; this is the hypotenuse itself. D) Incorrect; this value is too large for any side of this triangle.",
    "topic": "Special Right Triangles (30-60-90)"
  },
  {
    "id": 9,
    "text": "What is the value of sin(30°)?",
    "options": [
      "1/2",
      "√2/2",
      "√3/2",
      "1"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In a 30°-60°-90° triangle, the side opposite the 30° angle is half the hypotenuse, so sin(30°) = opposite/hypotenuse = (1/2 × hypotenuse)/hypotenuse = 1/2. B) Incorrect; this is the value of sin(45°). C) Incorrect; this is the value of sin(60°). D) Incorrect; this would be the value of sin(90°).",
    "topic": "Common Trigonometric Values"
  },
  {
    "id": 10,
    "text": "What is the value of cos(60°)?",
    "options": [
      "1/2",
      "√2/2",
      "√3/2",
      "1"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Using the cofunction identity, cos(60°) = sin(30°) = 1/2. B) Incorrect; this is the value of cos(45°) (or sin(45°)). C) Incorrect; this is the value of cos(30°) (or sin(60°)). D) Incorrect; this would be the value of cos(0°).",
    "topic": "Common Trigonometric Values"
  },
  {
    "id": 11,
    "useImage": true,
    "imageKey": "q11_unit_circle_45",
    "text": "On the unit circle, the point shown corresponds to an angle of 45°. Based on the coordinates shown, what is sin(45°)?",
    "options": [
      "√2/2",
      "1/2",
      "√3/2",
      "1"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. On the unit circle, the y-coordinate of the point where the angle intersects the circle gives the sine of that angle. For 45°, the point is (√2/2, √2/2), so sin(45°) = √2/2. B) Incorrect; this is the value of sin(30°). C) Incorrect; this is the value of sin(60°). D) Incorrect; this would only occur at 90°.",
    "topic": "The Unit Circle"
  },
  {
    "id": 12,
    "useImage": true,
    "imageKey": "q12_unit_circle_30",
    "text": "On the unit circle, the point shown corresponds to an angle of 30°. Based on the coordinates shown, what is cos(30°)?",
    "options": [
      "1/2",
      "√2/2",
      "√3/2",
      "0"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. On the unit circle, the x-coordinate of the point where the angle intersects the circle gives the cosine of that angle. For 30°, the point is (√3/2, 1/2), so cos(30°) = √3/2. A) Incorrect; this is the value of cos(60°) (or sin(30°)). B) Incorrect; this is the value of cos(45°). D) Incorrect; this would only occur at 90°.",
    "topic": "The Unit Circle"
  },
  {
    "id": 13,
    "text": "According to the Pythagorean identity, what does sin²(θ) + cos²(θ) equal?",
    "options": [
      "0",
      "1",
      "2",
      "tan(θ)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The Pythagorean identity states that for any angle θ, sin²(θ) + cos²(θ) = 1, derived directly from the Pythagorean theorem applied to the unit circle. A), C), D) Incorrect; none of these match the fundamental Pythagorean identity in trigonometry.",
    "topic": "Pythagorean Identity"
  },
  {
    "id": 14,
    "useImage": true,
    "imageKey": "q14_triangle_6_8_10",
    "text": "In the right triangle shown, the legs have lengths 6 and 8, and the hypotenuse has length 10. What is sin(θ)?",
    "options": [
      "3/5",
      "4/5",
      "3/4",
      "4/3"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The side opposite θ has length 6 and the hypotenuse has length 10, so sin(θ) = opposite/hypotenuse = 6/10 = 3/5. B) Incorrect; this is cos(θ) = adjacent/hypotenuse = 8/10 = 4/5. C) Incorrect; this is tan(θ) = opposite/adjacent = 6/8 = 3/4. D) Incorrect; this is the reciprocal of tan(θ).",
    "topic": "Trigonometric Ratios (SOH-CAH-TOA)"
  },
  {
    "id": 15,
    "text": "If tan(θ) = 3/4 in a right triangle, and the side adjacent to θ has length 8, what is the length of the side opposite θ?",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Since tan(θ) = opposite/adjacent = 3/4, and the adjacent side has length 8, set up the proportion: opposite/8 = 3/4. Cross-multiplying gives 4 × opposite = 24, so opposite = 6. A) Incorrect; this would result from an incorrect ratio setup. C) Incorrect; this is the adjacent side, not the opposite side. D) Incorrect; this would be the hypotenuse if the triangle were a 6-8-10 right triangle, not the opposite side.",
    "topic": "Solving with Trigonometric Ratios"
  },
  {
    "id": 16,
    "text": "An inverse trigonometric function, such as arcsin or sin⁻¹, is used to find which of the following?",
    "options": [
      "The length of a side, given an angle and another side",
      "The measure of an angle, given the ratio of two sides",
      "The area of a triangle, given two sides",
      "The perimeter of a triangle, given all three sides"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Inverse trigonometric functions (such as sin⁻¹, cos⁻¹, and tan⁻¹) are used to find the measure of an angle when the ratio of two sides of a right triangle is known. A) Incorrect; this describes using a regular trigonometric ratio (sine, cosine, or tangent), not its inverse. C) Incorrect; this would require a different formula, such as (1/2)ab·sin(C). D) Incorrect; the perimeter is found by simply summing the side lengths, not using inverse trig functions.",
    "topic": "Inverse Trigonometric Functions"
  },
  {
    "id": 17,
    "useImage": true,
    "imageKey": "q17_30deg_hyp10",
    "text": "In the right triangle shown, one angle is 30° and the hypotenuse has length 10 units. What is the length of the side opposite the 30° angle?",
    "options": [
      "5",
      "5√2",
      "5√3",
      "10"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Using the sine function, sin(30°) = opposite/hypotenuse. Since sin(30°) = 1/2, set up the equation: 1/2 = opposite/10. Multiplying both sides by 10 gives opposite = 5. B) Incorrect; this would use sin(45°) instead of sin(30°). C) Incorrect; this is the length of the adjacent side, not the opposite side. D) Incorrect; this is the hypotenuse, not the opposite side.",
    "topic": "Solving with Trigonometric Ratios"
  },
  {
    "id": 18,
    "text": "If cos(θ) = 5/13 in a right triangle, what is sin(θ), assuming the triangle is a 5-12-13 right triangle and θ is one of its acute angles?",
    "options": [
      "5/13",
      "12/13",
      "5/12",
      "12/5"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In a 5-12-13 right triangle, if cos(θ) = adjacent/hypotenuse = 5/13, then the adjacent side is 5 and the hypotenuse is 13. The remaining leg (opposite side) must be 12. Therefore, sin(θ) = opposite/hypotenuse = 12/13. A) Incorrect; this is cos(θ), not sin(θ). C) Incorrect; this is tan(θ), not sin(θ). D) Incorrect; this is the reciprocal of tan(θ).",
    "topic": "Trigonometric Ratios (SOH-CAH-TOA)"
  },
  {
    "id": 19,
    "text": "What is the value of tan(45°)?",
    "options": [
      "0",
      "1/2",
      "1",
      "√2"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In a 45°-45°-90° triangle, the two legs are equal in length. Since tan(θ) = opposite/adjacent, and the opposite and adjacent sides are equal for a 45° angle, tan(45°) = 1. A) Incorrect; this would be the value of tan(0°). B) Incorrect; this does not correspond to any standard angle's tangent value. D) Incorrect; √2 is the ratio of the hypotenuse to a leg in a 45°-45°-90° triangle, not the tangent of 45°.",
    "topic": "Common Trigonometric Values"
  },
  {
    "id": 20,
    "text": "If a right triangle has an angle θ such that cos(θ) = 0, what is the measure of θ?",
    "options": [
      "0°",
      "45°",
      "60°",
      "90°"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. On the unit circle, cosine represents the x-coordinate of a point. The x-coordinate is 0 when the angle is 90° (the point is directly on the y-axis). A) Incorrect; cos(0°) = 1, not 0. B) Incorrect; cos(45°) = √2/2, not 0. C) Incorrect; cos(60°) = 1/2, not 0.",
    "topic": "The Unit Circle"
  },
  {
    "id": 21,
    "useImage": true,
    "imageKey": "q21_angle_elevation",
    "text": "A person stands 100 meters from the base of a building and measures the angle of elevation to the top of the building as θ. Which trigonometric ratio should be used to find the height (h) of the building?",
    "options": [
      "h = 100 × sin(θ)",
      "h = 100 × cos(θ)",
      "h = 100 × tan(θ)",
      "h = 100 / tan(θ)"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In this scenario, the height (h) of the building is the side opposite the angle of elevation θ, and the distance of 100 meters is the side adjacent to θ. Since tan(θ) = opposite/adjacent, we get tan(θ) = h/100, so h = 100 × tan(θ). A) Incorrect; using sine would require knowing the hypotenuse (the line of sight distance), not the adjacent side. B) Incorrect; cosine relates the adjacent side to the hypotenuse, not to the opposite side. D) Incorrect; this rearranges the cotangent relationship incorrectly for this setup.",
    "topic": "Applications: Angle of Elevation"
  },
  {
    "id": 22,
    "text": "A ladder leans against a wall, making a 60° angle with the ground. If the foot of the ladder is 4 feet from the wall, which expression gives the length of the ladder?",
    "options": [
      "4 × sin(60°)",
      "4 / cos(60°)",
      "4 × tan(60°)",
      "4 / sin(60°)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The distance from the wall (4 feet) is the side adjacent to the 60° angle, and the ladder itself is the hypotenuse. Since cos(θ) = adjacent/hypotenuse, we have cos(60°) = 4/length, so length = 4/cos(60°). A) Incorrect; sine relates the opposite side to the hypotenuse, not the adjacent side. C) Incorrect; tangent relates the opposite side to the adjacent side, and would give the height of the wall, not the ladder length. D) Incorrect; this would be used if 4 feet represented the side opposite the angle, not the adjacent side.",
    "topic": "Applications: Right Triangle Word Problems"
  },
  {
    "id": 23,
    "useImage": true,
    "imageKey": "q23_complementary",
    "text": "In the right triangle shown, the two acute angles are labeled x and y. What is the relationship between x and y?",
    "options": [
      "x + y = 90°",
      "x + y = 180°",
      "x = y always",
      "x − y = 90°"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Since the sum of all three angles in a triangle is 180° and one angle is the right angle (90°), the two acute angles must sum to 180° − 90° = 90°. This means x and y are complementary angles. B) Incorrect; this would be true for the sum of all three angles, not just the two acute angles. C) Incorrect; the two acute angles are equal only in an isosceles right triangle (45°-45°-90°), not in general. D) Incorrect; this does not represent a valid relationship between two acute angles in a right triangle.",
    "topic": "Cofunction Identities"
  },
  {
    "id": 24,
    "text": "If sin(θ) = 0.5 and θ is an acute angle, what is the measure of θ?",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Since sin(30°) = 1/2 = 0.5, and θ is given as acute (between 0° and 90°), θ = 30°. B) Incorrect; sin(45°) = √2/2 ≈ 0.707, not 0.5. C) Incorrect; sin(60°) = √3/2 ≈ 0.866, not 0.5. D) Incorrect; sin(90°) = 1, not 0.5.",
    "topic": "Inverse Trigonometric Functions"
  },
  {
    "id": 25,
    "useImage": true,
    "imageKey": "q25_sine_graph",
    "text": "The graph shows the function y = sin(x) over the interval from 0 to 2π. Based on the graph, what is the maximum value of y = sin(x)?",
    "options": [
      "0",
      "1",
      "2",
      "π"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The graph of y = sin(x) oscillates between a minimum value of −1 and a maximum value of 1. The peak of the curve, reached at x = π/2, shows y = 1. A) Incorrect; this is the value of sin(x) at x = 0, π, and 2π, not the maximum. C) Incorrect; the sine function never exceeds 1. D) Incorrect; π is a value on the x-axis (an input), not a possible output (y-value) of the sine function.",
    "topic": "Graphs of Trigonometric Functions"
  }
];
