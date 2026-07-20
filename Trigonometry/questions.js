// =============================================
// Digital SAT – Topic: Trigonometry
// questions.js | SAT_Trigonometry_Quiz.pdf
// 25 Questions
// =============================================

const QUESTIONS = [
    {
        id: 1,
        text: `In triangle ABC, angle C is a right angle. The length of side AC is 6 units, and the length of side BC is 8 units. What is the value of sin(A)?`,
        options: [" \(\frac{3}{5}\) ", " \(\frac{4}{5}\) ", " \(\frac{4}{3}\) ", " \(\frac{3}{4}\) "],
        answer: 1,
        explanation: "Hypotenuse AB = \( \sqrt{AC^2 + BC^2} \) = \( \sqrt{6^2 + 8^2} \) = \( \sqrt{36 + 64} \) = \( \sqrt{100} = 10 \). sin(A) = opposite/hypotenuse = BC/AB = \(\frac{8}{10}\) = \(\frac{4}{5}\) . Answer: B.",
        topic: "Trig Ratios – sin, cos, tan"
    },
    {
        id: 2,
        text: `In triangle ABC, angle C is a right angle. If tan(A) = \(\frac{3}{4}\) , what is the value of cos(B)?`,
        options: [" \(\frac{4}{5}\) ", " \(\frac{3}{4}\) ", " \(\frac{3}{5}\) ", " \(\frac{4}{3}\) "],
        answer: 2,
        explanation: "tan(A) = opposite/adjacent = \(\frac{3}{4}\) . So sides opposite A and adjacent A are 3 and 4; hypotenuse = \( \sqrt{3^2 + 4^2} \) = 5. In a right triangle, \( A + B = 90^\circ \), so \( B = 90^\circ - A \). cos(B) = cos(90° − A) = sin(A) = \(\frac{3}{5}\) . Answer: C.",
        topic: "Trig Ratios – Complementary Angles"
    },
    {
        id: 3,
        text: `In a right triangle ABC with a right angle at C, the hypotenuse AB = 25. If sin(A) = \(\frac{4}{5}\) , find the length of side BC.`,
        options: ["15", "25", "31.25", "20"],
        answer: 3,
        explanation: "sin(A) = BC/AB = BC/25 = \(\frac{4}{5}\) . So BC = 25 × ( \(\frac{4}{5}\) ) = 20. Answer: D.",
        topic: "Trig Ratios – Finding Side Lengths"
    },
    {
        id: 4,
        text: `In a right triangle, the tangent of an acute angle θ is \(\frac{4}{7}\) . If the side adjacent to θ has a length of 35, what is the area of the triangle in square units?`,
        options: ["350", "700", "140", "1225"],
        answer: 0,
        explanation: "tan(θ) = opposite/adjacent = \(\frac{4}{7}\) . Adjacent = 35, so opposite = ( \(\frac{4}{7}\) ) × 35 = 20. Area = ( \(\frac{1}{2}\) ) × base × height = ( \(\frac{1}{2}\) ) × 35 × 20 = 350. Answer: A.",
        topic: "Trig Ratios – Area of Triangle"
    },
    {
        id: 5,
        text: `What is the area of triangle ABC if AC = 8, BC = 10, and the included angle C is 30°?`,
        options: ["40", "20", "80", "34.6"],
        answer: 1,
        explanation: "Area = ( \(\frac{1}{2}\) ) × AC × BC × sin(C) = ( \(\frac{1}{2}\) ) × 8 × 10 × sin(30°) = ( \(\frac{1}{2}\) ) × 8 × 10 × 0.5 = 20. Answer: B.",
        topic: "Trig – Area Using Two Sides & Included Angle"
    },
    {
        id: 6,
        text: `A student stands 40 ft from a tree. The angle of elevation from the ground to the top of the tree is 30°. What is the height of the tree? (Round to the nearest tenth).`,
        options: ["20.0 ft", "34.6 ft", "23.1 ft", "69.3 ft"],
        answer: 2,
        explanation: "tan(30°) = height/40 → height = 40 × tan(30°) = 40 × (\( \frac{1}{\sqrt{3}} \)) ≈ 40 × 0.5774 ≈ 23.1 ft. Answer: C.",
        topic: "Trig – Angle of Elevation"
    },
    {
        id: 7,
        text: `In a right triangle, the lengths of the legs are 8 and 15. What is the value of the sine of the smallest angle?`,
        options: [" \(\frac{15}{17}\) ", " \(\frac{8}{15}\) ", " \(\frac{17}{8}\) ", " \(\frac{8}{17}\) "],
        answer: 3,
        explanation: "Hypotenuse = \( \sqrt{8^2 + 15^2} \) = \( \sqrt{64 + 225} \) = \( \sqrt{289} = 17 \). The smallest angle is opposite the shortest side (8). sin(smallest angle) = \(\frac{8}{17}\) . Answer: D.",
        topic: "Trig Ratios – sin, cos, tan"
    },
    {
        id: 8,
        text: `In a right triangle, one angle measures x°, where sin(x°) = \(\frac{4}{5}\) . What is cos(90° − x°)?`,
        options: [" \(\frac{4}{5}\) ", " \(\frac{3}{5}\) ", " \(\frac{3}{4}\) ", " \(\frac{5}{4}\) "],
        answer: 0,
        explanation: "Using the co-function identity: cos(90° − x°) = sin(x°) = \(\frac{4}{5}\) . Answer: A.",
        topic: "Trig – Co-function Identities"
    },
    {
        id: 9,
        text: `In a right triangle, the acute angles measure a and b degrees. If sin(a) = \(\frac{5}{13}\) , what is the value of cos(b)?`,
        options: [" \(\frac{12}{13}\) ", " \(\frac{5}{13}\) ", " \(\frac{13}{5}\) ", " \(\frac{5}{12}\) "],
        answer: 1,
        explanation: "In a right triangle, \( a + b = 90^\circ \), so \( b = 90^\circ - a \). Therefore cos(b) = cos(90° − a) = sin(a) = \(\frac{5}{13}\) . Answer: B.",
        topic: "Trig – Co-function Identities"
    },
    {
        id: 10,
        text: `An angle has a measure of \( \frac{5\pi}{6} \) radians. What is the measure of this angle in degrees?`,
        options: ["120°", "210°", "150°", "300°"],
        answer: 2,
        explanation: "Degrees = radians × (\( \frac{180^\circ}{\pi} \)) = (\( \frac{5\pi}{6} \)) × (\( \frac{180^\circ}{\pi} \)) = 5 × 30° = 150°. Answer: C.",
        topic: "Trig – Radians to Degrees"
    },
    {
        id: 11,
        text: `The terminal side of an angle θ in standard position intersects the unit circle at the point (−√ \(\frac{3}{2}\) , \(\frac{1}{2}\) ). What is the value of sin(θ)?`,
        options: ["−√ \(\frac{3}{2}\) ", "−\( \frac{1}{\sqrt{3}} \)", "√3", " \(\frac{1}{2}\) "],
        answer: 3,
        explanation: "On the unit circle, for a point (x, y): sin(θ) = y. The y-coordinate is \(\frac{1}{2}\) , so sin(θ) = \(\frac{1}{2}\) . Answer: D.",
        topic: "Trig – Unit Circle"
    },
    {
        id: 12,
        text: `For an acute angle x, it is given that cos(x) = 0.6. What is the value of sin²(x)?`,
        options: ["0.64", "0.36", "0.8", "1.0"],
        answer: 0,
        explanation: "Using the Pythagorean identity: \( \sin^2(x) + \cos^2(x) = 1 \). \( \sin^2(x) = 1 - \cos^2(x) \) = 1 − (0.6)² = 1 − 0.36 = 0.64. Answer: A.",
        topic: "Trig – Pythagorean Identity"
    },
    {
        id: 13,
        text: `In right triangle PQR with a right angle at Q, PQ = 5 and PR = 13. What is the value of tan(P)?`,
        options: [" \(\frac{5}{12}\) ", " \(\frac{12}{5}\) ", " \(\frac{12}{13}\) ", " \(\frac{5}{13}\) "],
        answer: 1,
        explanation: "QR = √(PR² − PQ²) = \( \sqrt{13^2 - 5^2} \) = \( \sqrt{169 - 25} \) = \( \sqrt{144} = 12 \). tan(P) = opposite/adjacent = QR/PQ = \(\frac{12}{5}\) . Answer: B.",
        topic: "Trig Ratios – sin, cos, tan"
    },
    {
        id: 14,
        text: `Triangles ABC and DEF are similar right triangles, where ∠C and ∠F are right angles. If sin(A) = \(\frac{7}{25}\) , what is the value of sin(D)?`,
        options: [" \(\frac{24}{25}\) ", " \(\frac{7}{24}\) ", " \(\frac{7}{25}\) ", "Cannot be determined"],
        answer: 2,
        explanation: "In similar triangles, corresponding angles are equal. ∠A corresponds to ∠D (both are non-right, non-matching angles). Therefore sin(D) = sin(A) = \(\frac{7}{25}\) . Answer: C.",
        topic: "Trig – Similar Triangles"
    },
    {
        id: 15,
        text: `If sin(x) = a/c and cos(x) = b/c, which of the following is equivalent to tan(x)?`,
        options: ["b/a", "a/c", "c/b", "a/b"],
        answer: 3,
        explanation: "tan(x) = sin(x)/cos(x) = (a/c) ÷ (b/c) = a/b. Answer: D.",
        topic: "Trig – Identities"
    },
    {
        id: 16,
        text: `A right triangle has legs of length 8 and 15. What is the cosine of the smallest angle in the triangle?`,
        options: [" \(\frac{15}{17}\) ", " \(\frac{8}{17}\) ", " \(\frac{8}{15}\) ", " \(\frac{15}{8}\) "],
        answer: 0,
        explanation: "Hypotenuse = \( \sqrt{8^2 + 15^2} \) = \( \sqrt{64 + 225} \) = \( \sqrt{289} = 17 \). The smallest angle is opposite the shortest side (8). cos(smallest angle) = adjacent/hypotenuse = \(\frac{15}{17}\) . Answer: A.",
        topic: "Trig Ratios – sin, cos, tan"
    },
    {
        id: 17,
        text: `What is the maximum value of the function f(x) = 3 sin(x) + 2?`,
        options: ["3", "5", "2", "1"],
        answer: 1,
        explanation: "The maximum value of sin(x) is 1. So maximum of f(x) = 3(1) + 2 = 5. Answer: B.",
        topic: "Trig – Graphs & Transformations"
    },
    {
        id: 18,
        text: `What is the value of \( \cos^2(25^\circ) + \cos^2(65^\circ) \)?`,
        options: ["0", " \(\frac{1}{2}\) ", "1", "Cannot be determined"],
        answer: 2,
        explanation: "Note that 65° = \( 90^\circ - 25^\circ \), so cos(65°) = sin(25°). Therefore \( \cos^2(25^\circ) + \cos^2(65^\circ) \) = \( \cos^2(25^\circ) + \sin^2(25^\circ) = 1 \) (Pythagorean identity). Answer: C.",
        topic: "Trig – Pythagorean Identity"
    },
    {
        id: 19,
        text: `If 2 sin(x) − 1 = 0 and 0° < x < 90°, what is the value of x?`,
        options: ["45°", "60°", "90°", "30°"],
        answer: 3,
        explanation: "2 sin(x) − 1 = 0 → sin(x) = \(\frac{1}{2}\) → x = 30°. (sin 30° = \(\frac{1}{2}\) is a standard value.) Answer: D.",
        topic: "Trig – Solving Equations"
    },
    {
        id: 20,
        text: `In a right triangle, one of the acute angles is 45°. If the hypotenuse has a length of 10√2, what is the length of one of the legs?`,
        options: ["10", "5√2", "20", "10√3"],
        answer: 0,
        explanation: "A 45-45-90 triangle has sides in ratio 1 : 1 : √2. If hypotenuse = 10√2, then each leg = 10√2/√2 = 10. Answer: A.",
        topic: "Trig – Special Angles (45-45-90)"
    },
    {
        id: 21,
        text: `If tan(x) = z, what is tan(90° − x) in terms of z?`,
        options: ["z", "1/z", "−z", "1 − z"],
        answer: 1,
        explanation: "Using co-function identity: tan(90° − x) = cot(x) = 1/tan(x) = 1/z. Answer: B.",
        topic: "Trig – Co-function Identities"
    },
    {
        id: 22,
        text: `A circle has a radius of 6. What is the length of an arc intercepted by a central angle of π/3 radians?`,
        options: ["3π", "6π", "2π", "18π"],
        answer: 2,
        explanation: "Arc length = r × θ = 6 × π/3 = 6π/3 = 2π. Answer: C.",
        topic: "Trig – Arc Length in Radians"
    },
    {
        id: 23,
        text: `A ladder leans against a building, forming an angle of 60° with the ground. If the base of the ladder is 12 feet from the building, how long is the ladder?`,
        options: ["12√3", "12", "24√3", "24"],
        answer: 3,
        explanation: "cos(60°) = adjacent/hypotenuse = 12/ladder → ladder = 12/cos(60°) = 12/( \(\frac{1}{2}\) ) = 24 feet. Answer: D.",
        topic: "Trig – Angle of Elevation/Depression"
    },
    {
        id: 24,
        text: `In right triangle XYZ with right angle Y, sin(X) = \(\frac{3}{5}\) . What is tan(Z)?`,
        options: [" \(\frac{4}{3}\) ", " \(\frac{3}{4}\) ", " \(\frac{3}{5}\) ", " \(\frac{4}{5}\) "],
        answer: 0,
        explanation: "sin(X) = opposite/hypotenuse = YZ/XZ = \(\frac{3}{5}\) . So YZ = 3k, XZ = 5k, and XY = √(5² − 3²)k = 4k. Since Z and X are complementary, tan(Z) = opposite/adjacent = XY/YZ = 4k/3k = \(\frac{4}{3}\) . Answer: A.",
        topic: "Trig Ratios – sin, cos, tan"
    },
    {
        id: 25,
        text: `What is the exact value of sin(30°) + cos(60°)?`,
        options: [" \(\frac{1}{2}\) ", "1", "√ \(\frac{3}{2}\) ", "√2"],
        answer: 1,
        explanation: "sin(30°) = \(\frac{1}{2}\) and cos(60°) = \(\frac{1}{2}\) . So sin(30°) + cos(60°) = \(\frac{1}{2}\) + \(\frac{1}{2}\) = 1. Answer: B.",
        topic: "Trig – Special Angles"
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