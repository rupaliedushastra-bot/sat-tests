const QUESTIONS = [
  {
    id: 1,
    topic: "Circle Equation – Center & Radius",
    text: "In the xy-plane, what is the radius of the circle with equation \\((x - 4)^2 + (y + 3)^2 = 49\\)?",
    options: ["7", "49", "4", "14"],
    answer: 0,
    explanation: "The standard equation of a circle is \\((x - h)^2 + (y - k)^2 = r^2\\). Here \\(r^2 = 49\\), so \\(r = \\sqrt{49} = 7\\)."
  },
  {
    id: 2,
    topic: "Circle Equation – Center Coordinates",
    text: "What are the coordinates of the center of the circle given by \\((x + 5)^2 + (y - 2)^2 = 36\\)?",
    options: ["\\((5, -2)\\)", "\\((-5, 2)\\)", "\\((-5, -2)\\)", "\\((5, 2)\\)"],
    answer: 1,
    explanation: "Rewriting as \\((x - (-5))^2 + (y - 2)^2 = 6^2\\), the center is \\((h, k) = (-5, 2)\\)."
  },
  {
    id: 3,
    topic: "Circle Area & Circumference",
    text: "If the circumference of a circle is \\(16\\pi\\), what is the area of the circle?",
    options: ["\\(16\\pi\\)", "\\(32\\pi\\)", "\\(64\\pi\\)", "\\(256\\pi\\)"],
    answer: 2,
    explanation: "From \\(C = 2\\pi r = 16\\pi\\), we get \\(r = 8\\). Thus, \\(A = \\pi r^2 = \\pi (8)^2 = 64\\pi\\)."
  },
  {
    id: 4,
    topic: "Completing the Square – Circle Center",
    text: "The equation \\(x^2 - 6x + y^2 + 8y = 0\\) defines a circle in the xy-plane. What is the radius of the circle?",
    options: ["3", "4", "5", "25"],
    answer: 2,
    explanation: "Complete the square: \\((x^2 - 6x + 9) + (y^2 + 8y + 16) = 9 + 16 \\Rightarrow (x - 3)^2 + (y + 4)^2 = 25\\). So \\(r = \\sqrt{25} = 5\\)."
  },
  {
    id: 5,
    topic: "Arc Length",
    text: "A circle has a radius of 12. What is the length of an arc intercepted by a central angle of \\(60^\\circ\\)?",
    options: ["\\(2\\pi\\)", "\\(4\\pi\\)", "\\(6\\pi\\)", "\\(12\\pi\\)"],
    answer: 1,
    explanation: "Arc length \\(s = \\frac{60}{360} \\cdot 2\\pi(12) = \\frac{1}{6} \\cdot 24\\pi = 4\\pi\\)."
  },
  {
    id: 6,
    topic: "Sector Area",
    text: "A sector of a circle with radius 6 has a central angle of \\(120^\\circ\\). What is the area of the sector?",
    options: ["\\(6\\pi\\)", "\\(12\\pi\\)", "\\(18\\pi\\)", "\\(24\\pi\\)"],
    answer: 1,
    explanation: "Sector area \\(= \\frac{120}{360} \\cdot \\pi(6)^2 = \\frac{1}{3} \\cdot 36\\pi = 12\\pi\\)."
  },
  {
    id: 7,
    topic: "Central & Inscribed Angles",
    text: "Points A, B, and C lie on a circle with center O. If the central angle \\(\\angle AOB = 104^\\circ\\), what is the measure of the inscribed angle \\(\\angle ACB\\)?",
    options: ["\\(26^\\circ\\)", "\\(52^\\circ\\)", "\\(104^\\circ\\)", "\\(208^\\circ\\)"],
    answer: 1,
    explanation: "An inscribed angle is half the measure of the central angle that subtends the same arc: \\(\\frac{104^\\circ}{2} = 52^\\circ\\)."
  },
  {
    id: 8,
    topic: "Tangent Line to a Circle",
    text: "Line segment PT is tangent to a circle with center O at point T. If \\(OT = 5\\) and \\(OP = 13\\), what is the length of PT?",
    options: ["8", "10", "12", "18"],
    answer: 2,
    explanation: "A radius drawn to the point of tangency is perpendicular to the tangent, so \\(\\triangle OTP\\) is a right triangle: \\(PT = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\)."
  },
  {
    id: 9,
    topic: "Circle Equation from Diameter Endpoints",
    text: "A circle in the xy-plane has a diameter with endpoints \\((2, 3)\\) and \\((8, 11)\\). What is the equation of the circle?",
    options: [
      "\\((x - 5)^2 + (y - 7)^2 = 25\\)",
      "\\((x - 5)^2 + (y - 7)^2 = 5\\)",
      "\\((x - 10)^2 + (y - 14)^2 = 100\\)",
      "\\((x + 5)^2 + (y + 7)^2 = 25\\)"
    ],
    answer: 0,
    explanation: "The center is the midpoint \\(\\left(\\frac{2+8}{2}, \\frac{3+11}{2}\\right) = (5, 7)\\). The radius is the distance from \\((5, 7)\\) to \\((8, 11)\\): \\(r = \\sqrt{(8-5)^2 + (11-7)^2} = \\sqrt{9 + 16} = 5\\). So \\(r^2 = 25\\)."
  },
  {
    id: 10,
    topic: "Radian Measure & Arc Length",
    text: "In a circle of radius 10, an arc has length \\(\\frac{5\\pi}{2}\\). What is the measure of the central angle, in radians, that intercepts this arc?",
    options: ["\\(\\frac{\\pi}{8}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{2\\pi}{5}\\)"],
    answer: 1,
    explanation: "Using \\(s = r\\theta\\), we have \\(\\frac{5\\pi}{2} = 10\\theta \\Rightarrow \\theta = \\frac{5\\pi}{20} = \\frac{\\pi}{4}\\)."
  },
  {
    id: 11,
    topic: "Point on a Circle",
    text: "Which of the following points lies on the circle with equation \\((x - 1)^2 + (y + 2)^2 = 25\\)?",
    options: ["\\((4, 2)\\)", "\\((5, 3)\\)", "\\((1, 5)\\)", "\\((0, 0)\\)"],
    answer: 0,
    explanation: "Test \\((4, 2)\\): \\((4 - 1)^2 + (2 + 2)^2 = 3^2 + 4^2 = 9 + 16 = 25\\), which satisfies the equation."
  },
  {
    id: 12,
    topic: "Completing the Square – General Form",
    text: "The equation \\(x^2 + y^2 + 10x - 4y + 13 = 0\\) represents a circle. What is its center and radius?",
    options: [
      "Center \\((-5, 2)\\), radius 4",
      "Center \\((5, -2)\\), radius 4",
      "Center \\((-5, 2)\\), radius 16",
      "Center \\((-10, 4)\\), radius 4"
    ],
    answer: 0,
    explanation: "Complete the square: \\((x^2 + 10x + 25) + (y^2 - 4y + 4) = -13 + 25 + 4 \\Rightarrow (x + 5)^2 + (y - 2)^2 = 16\\). Center is \\((-5, 2)\\) and radius is \\(\\sqrt{16} = 4\\)."
  },
  {
    id: 13,
    topic: "Inscribed Right Triangle",
    text: "Triangle ABC is inscribed in a circle such that side AC is a diameter of the circle. If \\(AB = 9\\) and \\(BC = 12\\), what is the radius of the circle?",
    options: ["7.5", "10.5", "15", "21"],
    answer: 0,
    explanation: "An angle inscribed in a semicircle is a right angle, so \\(\\angle B = 90^\\circ\\). By the Pythagorean theorem, \\(AC = \\sqrt{9^2 + 12^2} = 15\\). Since AC is the diameter, the radius is \\(\\frac{15}{2} = 7.5\\)."
  },
  {
    id: 14,
    topic: "Circle Tangent to Axes",
    text: "A circle in the first quadrant is tangent to both the x-axis and the y-axis, and has radius 6. What is the equation of the circle?",
    options: [
      "\\((x - 6)^2 + (y - 6)^2 = 6\\)",
      "\\((x - 6)^2 + (y - 6)^2 = 36\\)",
      "\\((x + 6)^2 + (y + 6)^2 = 36\\)",
      "\\((x - 3)^2 + (y - 3)^2 = 36\\)"
    ],
    answer: 1,
    explanation: "Since the circle is in the first quadrant and tangent to both axes with radius 6, its center is \\((6, 6)\\) and \\(r^2 = 36\\)."
  },
  {
    id: 15,
    topic: "Chord Length & Distance from Center",
    text: "A circle has a radius of 10. A chord of the circle is 6 units away from the center. What is the total length of the chord?",
    options: ["8", "12", "16", "20"],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord. Half the chord is \\(\\sqrt{10^2 - 6^2} = \\sqrt{64} = 8\\), so the full chord length is \\(2 \\times 8 = 16\\)."
  },
  {
    id: 16,
    topic: "Concentric Circles – Ring Area",
    text: "Two concentric circles have radii 5 and 9. What is the area of the region between the two circles?",
    options: ["\\(4\\pi\\)", "\\(16\\pi\\)", "\\(56\\pi\\)", "\\(106\\pi\\)"],
    answer: 2,
    explanation: "The area of the annulus (ring) is \\(\\pi(9^2 - 5^2) = \\pi(81 - 25) = 56\\pi\\)."
  },
  {
    id: 17,
    topic: "Sector Area in Radians",
    text: "A circle has radius 8. What is the area of a sector with a central angle of \\(\\frac{3\\pi}{4}\\) radians?",
    options: ["\\(6\\pi\\)", "\\(12\\pi\\)", "\\(24\\pi\\)", "\\(48\\pi\\)"],
    answer: 2,
    explanation: "Sector area in radians is \\(A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(8)^2\\left(\\frac{3\\pi}{4}\\right) = 32 \\cdot \\frac{3\\pi}{4} = 24\\pi\\)."
  },
  {
    id: 18,
    topic: "Circle Translation",
    text: "The circle \\((x - 2)^2 + (y + 5)^2 = 16\\) is translated 4 units to the left and 3 units up. What is the center of the resulting circle?",
    options: ["\\((-2, -2)\\)", "\\((6, -2)\\)", "\\((-2, -8)\\)", "\\((6, -8)\\)"],
    answer: 0,
    explanation: "Original center is \\((2, -5)\\). Translating 4 units left subtracts 4 from x (\\(2 - 4 = -2\\)) and 3 units up adds 3 to y (\\(-5 + 3 = -2\\)), giving \\((-2, -2)\\)."
  },
  {
    id: 19,
    topic: "Arc Length Ratio",
    text: "In a circle, arc AB has length \\(3\\pi\\) and corresponds to a central angle of \\(45^\\circ\\). What is the circumference of the circle?",
    options: ["\\(12\\pi\\)", "\\(18\\pi\\)", "\\(24\\pi\\)", "\\(36\\pi\\)"],
    answer: 2,
    explanation: "Since \\(45^\\circ\\) is \\(\\frac{45}{360} = \\frac{1}{8}\\) of the full circle, the total circumference is \\(8 \\times 3\\pi = 24\\pi\\)."
  },
  {
    id: 20,
    topic: "Quadrilateral Inscribed in a Circle",
    text: "Quadrilateral ABCD is inscribed in a circle. If \\(\\angle A = 78^\\circ\\), what is the measure of the opposite angle \\(\\angle C\\)?",
    options: ["\\(78^\\circ\\)", "\\(102^\\circ\\)", "\\(112^\\circ\\)", "\\(156^\\circ\\)"],
    answer: 1,
    explanation: "Opposite angles of a cyclic (inscribed) quadrilateral are supplementary: \\(\\angle C = 180^\\circ - 78^\\circ = 102^\\circ\\)."
  },
  {
    id: 21,
    topic: "Circle Equation with Scaled Terms",
    text: "What is the radius of the circle defined by \\(2x^2 + 2y^2 - 8x + 12y - 6 = 0\\)?",
    options: ["3", "4", "\\(\\sqrt{13}\\)", "\\(\\sqrt{16}\\)"],
    answer: 1,
    explanation: "Divide by 2: \\(x^2 - 4x + y^2 + 6y = 3\\). Complete the square: \\((x - 2)^2 + (y + 3)^2 = 3 + 4 + 9 = 16\\). So \\(r = \\sqrt{16} = 4\\)."
  },
  {
    id: 22,
    topic: "Tangent & Secant Angles",
    text: "Two tangents from an external point P touch a circle at points A and B. If the minor arc AB measures \\(130^\\circ\\), what is the measure of \\(\\angle APB\\)?",
    options: ["\\(40^\\circ\\)", "\\(50^\\circ\\)", "\\(65^\\circ\\)", "\\(130^\\circ\\)"],
    answer: 1,
    explanation: "The central angle \\(\\angle AOB = 130^\\circ\\). In quadrilateral OAPB, \\(\\angle OAP = \\angle OBP = 90^\\circ\\), so \\(\\angle APB = 180^\\circ - 130^\\circ = 50^\\circ\\)."
  },
  {
    id: 23,
    topic: "Square Inscribed in a Circle",
    text: "A square with side length \\(6\\sqrt{2}\\) is inscribed in a circle. What is the area of the circle?",
    options: ["\\(18\\pi\\)", "\\(36\\pi\\)", "\\(72\\pi\\)", "\\(144\\pi\\)"],
    answer: 1,
    explanation: "The diagonal of the square equals the diameter of the circle: \\(d = (6\\sqrt{2})\\sqrt{2} = 12\\). Thus \\(r = 6\\), and the area is \\(\\pi(6)^2 = 36\\pi\\)."
  },
  {
    id: 24,
    topic: "Interior vs Exterior Points",
    text: "A circle has center \\((3, -1)\\) and radius 5. Which of the following points lies strictly INSIDE the circle?",
    options: ["\\((7, 2)\\)", "\\((8, -1)\\)", "\\((6, 2)\\)", "\\((-2, -1)\\)"],
    answer: 2,
    explanation: "A point lies inside if its squared distance to \\((3, -1)\\) is less than \\(5^2 = 25\\). For \\((6, 2)\\): \\((6 - 3)^2 + (2 - (-1))^2 = 9 + 9 = 18 < 25\\)."
  },
  {
    id: 25,
    topic: "Circumference & Area Relationship",
    text: "If the area of a circle is increased from \\(16\\pi\\) to \\(64\\pi\\), by what factor does the circumference of the circle increase?",
    options: ["2", "4", "8", "16"],
    answer: 0,
    explanation: "The radius increases from \\(\\sqrt{16} = 4\\) to \\(\\sqrt{64} = 8\\), which is a factor of 2. Since circumference \\(C = 2\\pi r\\) is proportional to \\(r\\), it also increases by a factor of 2."
  }
];
