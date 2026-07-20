// =============================================
// Digital SAT – Topic: Advanced Problem Set
// questions.js
// 15 Questions
// =============================================

const QUESTIONS = [
  {
    id: 1,
    text: `From a point in the interior of an equilateral triangle, the perpendicular distance of the sides are \( \sqrt{3} \text{ cm} \), 2\( \sqrt{3} \text{ cm} \) and 5\( \sqrt{3} \text{ cm} \). The perimeter (in cm) of the triangle is:`,
    options: ["24", "32", "48", "64"],
    answer: 2,
    explanation: `According to Viviani's theorem, the sum of the perpendicular distances from any interior point to the sides of an equilateral triangle is equal to the altitude (height) of the triangle.
Altitude h = √3 + 2√3 + 5√3 = 8\( \sqrt{3} \text{ cm} \).
For an equilateral triangle, the altitude h is related to side length s by:
\( h = \frac{\sqrt{3}}{2} \times s \)
\( 8\sqrt{3} = \frac{\sqrt{3}}{2} \times s \) => \( s = 16 \text{ cm} \).
The perimeter is \( 3s = 3 \times 16 = 48 \text{ cm} \).`,
    topic: "Geometry & Mensuration"
  },
  {
    id: 2,
    text: `ABC is a right-angled triangle with right angle at B. If the semi-circle on AB with AB as diameter encloses an area of 81 sq. cm and the semi-circle on BC with BC as diameter encloses an area of 36 sq. cm, then the area of the semi-circle on AC with AC as diameter will be:`,
    options: ["\( 117 \text{ cm}^2 \)", "\( 121 \text{ cm}^2 \)", "\( 217 \text{ cm}^2 \)", "\( 221 \text{ cm}^2 \)"],
    answer: 0,
    explanation: `By the Pythagorean theorem for the right triangle ABC, \( AB^2 + BC^2 = AC^2 \).
The area of a semi-circle with diameter d is given by \( A = \frac{1}{2} \pi \left(\frac{d}{2}\right)^2 = \frac{\pi}{8} d^2 \).
Thus:
- Area of semi-circle on AB: \( \frac{\pi}{8} AB^2 = 81 \)
- Area of semi-circle on BC: \( \frac{\pi}{8} BC^2 = 36 \)
- Area of semi-circle on AC: \( \frac{\pi}{8} AC^2 = \frac{\pi}{8} (AB^2 + BC^2) = \frac{\pi}{8} AB^2 + \frac{\pi}{8} BC^2 = 81 + 36 = 117 \text{ cm}^2 \).`,
    topic: "Geometry & Mensuration"
  },
  {
    id: 3,
    text: `A circular swimming pool is surrounded by a concrete wall 4 ft. wide. If the area of the concrete wall surrounding the pool is \( \frac{11}{25} \) that of the pool, then the radius of the pool is:`,
    options: ["8 ft", "16 ft", "20 ft", "30 ft"],
    answer: 2,
    explanation: `Let the radius of the pool be r. The outer radius including the wall is r + 4.
The area of the concrete wall is:
\( \text{Area}_{\text{wall}} = \pi(r + 4)^2 - \pi r^2 = \pi(r^2 + 8r + 16 - r^2) = \pi(8r + 16) \).
The area of the pool is:
\( \text{Area}_{\text{pool}} = \pi r^2 \).
We are given that the wall's area is \( \frac{11}{25} \) of the pool's area:
π(8r + 16) / (πr²) = \( \frac{11}{25} \)
(8r + 16) / r² = \( \frac{11}{25} \)
\( 25(8r + 16) = 11r^2 \)
\( 200r + 400 = 11r^2 \)
\( 11r^2 - 200r - 400 = 0 \).
Solving this quadratic equation:
(\( (11r + 20)(r - 20) = 0 \).
Since radius r must be positive, r = 20 ft.`,
    topic: "Geometry & Mensuration"
  },
  {
    id: 4,
    text: `Two guns were fired from the same place at an interval of 10 minutes and 30 seconds, but a person in the train approaching the place hears the second shot 10 minutes after the first. The speed of the train (in km/hr), supposing that speed travels at 330 metres per second, is:`,
    options: ["19.8", "58.6", "59.4", "111.80"],
    answer: 2,
    explanation: `The gunshots are fired at an interval of 10 min 30 s = 630 seconds.
The train passenger hears the second shot 10 min = 600 seconds after the first.
This means that the distance traveled by the train in 600 seconds is equal to the distance that the second sound wave would have traveled in the remaining (630 - 600) = 30 seconds.
Let the train's speed be v (in m/s).
v * 600 = 330 * 30
v = (330 * 30) / 600 = 16.5 m/s.
Converting to km/hr:
16.5 * 18/5 = 59.4 km/hr.`,
    topic: "Algebra, Speed & Time"
  },
  {
    id: 5,
    text: `A car travels from P to Q at a constant speed. If its speed were increased by 10 km/hr, it would have taken one hour lesser to cover the distance. It would have taken further 45 minutes lesser if the speed was further increased by 10 km/hr. What is the distance between the two cities?`,
    options: ["420 km", "540 km", "600 km", "650 km"],
    answer: 0,
    explanation: `Let the distance be d and the original speed be v. Original time t = d/v.
From the first condition:
d / (v + 10) = t - 1 => d = (v + 10)(t - 1)
Since d = vt, we get:
vt = vt - v + 10t - 10 => v = 10t - 10.
From the second condition:
d / (v + 20) = t - 1.75 (since 1 hour + 45 minutes = 1.75 hours)
d = (v + 20)(t - 1.75)
vt = vt + 20t - 1.75v - 35 => 20t - 1.75v - 35 = 0.
Substitute v = 10t - 10:
20t - 1.75(10t - 10) - 35 = 0
20t - 17.5t + 17.5 - 35 = 0
2.5t = 17.5 => t = 7 hours.
Now, original speed v = 10(7) - 10 = 60 km/hr.
Distance d = v * t = 60 * 7 = 420 km.`,
    topic: "Algebra, Speed & Time"
  },
  {
    id: 6,
    text: `Three containers have their volumes in the ratio 3 : 4 : 5. They are full of mixtures of milk and water. The mixtures contain milk and water in the ratio of (4 : 1), (3 : 1) and (5 : 2) respectively. The contents of all these three containers are poured into a fourth container. The ratio of milk and water in the fourth container is:`,
    options: ["4 : 1", "151 : 48", "157 : 53", "5 : 2"],
    answer: 2,
    explanation: `Let the volumes of the three containers be 3V, 4V, and 5V respectively.
Container 1 (Ratio 4:1):
- Milk = 3V * (4/5) = 2.4V
- Water = 3V * (1/5) = 0.6V
Container 2 (Ratio 3:1):
- Milk = 4V * (3/4) = 3V
- Water = 4V * (1/4) = 1V
Container 3 (Ratio 5:2):
- Milk = 5V * (5/7) = 25/7 V
- Water = 5V * (2/7) = 10/7 V

Adding the mixtures together:
Total Milk = 2.4V + 3V + (25/7)V = 5.4V + (25/7)V = (27/5 + 25/7)V = (189 + 125)/35 V = 314/35 V.
Total Water = 0.6V + 1V + (10/7)V = 1.6V + (10/7)V = (8/5 + 10/7)V = (56 + 50)/35 V = 106/35 V.

The ratio of Milk to Water in the combined container is:
(314/35) / (106/35) = 314 : 106 = 157 : 53.`,
    topic: "Algebra, Mixtures"
  },
  {
    id: 7,
    text: `Eight people are planning to share equally the cost of a rental car. If one person withdraws from the arrangement and the others share equally the entire cost of the car, then the share of each of the remaining persons increased by:`,
    options: ["1/7", "1/8", "1/9", "7/8"],
    answer: 0,
    explanation: `Let the total cost of the car be C.
Original share per person = C / 8.
If one person withdraws, the new share for the remaining 7 people is C / 7.
The absolute increase in share is:
C/7 - C/8 = C/56.
The fractional increase in the share relative to the original share is:
(C/56) / (C/8) = 8/56 = 1/7.`,
    topic: "Algebra"
  },
  {
    id: 8,
    text: `A data set of 50 (x, y) coordinate pairs is plotted on a scatter plot. The correlation coefficient is r = -0.96. A box plot for the x-values reveals a mean of 45, a median of 32, and an interquartile range of 15. If a line of best fit y = mx + b is calculated, which of the following statements about the distribution of the y-values must be true?`,
    options: [
      "The distribution of the y-values is significantly right-skewed.",
      "The mean of the y-values is less than the median of the y-values.",
      "The IQR of the y-values is negative.",
      "The median of the y-values is equal to the median of the x-values."
    ],
    answer: 1,
    explanation: `Since r = -0.96, there is a strong negative linear correlation between x and y, implying the slope of the best fit line is negative (m < 0).
For the x-values, the mean (45) is greater than the median (32), which means the distribution of x is right-skewed.
Under a linear transformation y = mx + b with negative slope (m < 0), the relative positions of data points are reversed. A right-skewed distribution becomes left-skewed, meaning the mean of y will be less than the median of y (Mean(y) < Median(y)).
Proof: Mean(y) = m*Mean(x) + b. Median(y) = m*Median(x) + b. Since Mean(x) > Median(x) and m < 0, m*Mean(x) < m*Median(x), hence Mean(y) < Median(y).`,
    topic: "Data Analysis & Statistics"
  },
  {
    id: 9,
    text: `The stem-and-leaf plot shows points scored in 14 games. One leaf is unknown (variable x).

Stem | Leaf
5 | 2, 4, 8
6 | 1, 3, 3, x
7 | 0, 2, 5, 9
8 | 4, 7
9 | 1
Key: 5 | 2 means 52 points.

If x is a single-digit integer from 0 to 9, what is the positive difference between the maximum possible median score and the minimum possible median score?`,
    options: ["1.0", "1.5", "2.5", "3.0"],
    answer: 3,
    explanation: `With 14 data points, the median is the average of the 7th and 8th values in sorted order.
If we sort the known values:
Stem 5: 52, 54, 58
Stem 6: 61, 63, 63, and (60+x)
Stem 7: 70, 72, 75, 79
Stem 8: 84, 87
Stem 9: 91

Case 1 (Minimum Median): When x is small (x = 0, 1, 2, 3), the value (60+x) is at most 63.
The sorted order for the first 8 numbers begins: 52, 54, 58, (60+x), 61, 63, 63, 70.
The 7th number is 63, and the 8th is 70.
Minimum Median = (63 + 70) / 2 = 66.5.

Case 2 (Maximum Median): When x = 9, the value is 69.
The sorted list of the first 8 numbers is: 52, 54, 58, 61, 63, 63, 69, 70.
The 7th number is 69, and the 8th is 70.
Maximum Median = (69 + 70) / 2 = 69.5.

Positive Difference = 69.5 - 66.5 = 3.0.`,
    topic: "Data Analysis & Statistics"
  },
  {
    id: 10,
    text: `A researcher models time vs. reaction rate on a scatter plot. She organizes residuals (actual minus predicted) into this stem-and-leaf plot:

Stem | Leaf
-1 | 8, 4, 2, 2
-0 | 9, 6, 4, 1
0 | 2, 3, 5, 5, 8
1 | 1, 4, 7
Key: -1 | 8 means -1.8

Based on this, how many actual data points lie strictly below the line of best fit?`,
    options: ["4", "6", "8", "10"],
    answer: 2,
    explanation: `A data point lies strictly below the line of best fit if its actual value is less than the predicted value, which corresponds to a negative residual (Residual = Actual - Predicted < 0).
From the stem-and-leaf plot:
- Stem -1 has leaves: 8, 4, 2, 2 (representing residuals -1.8, -1.4, -1.2, -1.2) => 4 points.
- Stem -0 has leaves: 9, 6, 4, 1 (representing residuals -0.9, -0.6, -0.4, -0.1) => 4 points.
All other stems (0 and 1) have positive residuals.
Total points below the line = 4 + 4 = 8.`,
    topic: "Data Analysis & Statistics"
  },
  {
    id: 11,
    text: `Line L₁ is 3x + 4y = k, and L₂ is 6x + 8y = m. The shortest distance between these parallel lines is exactly 5 units, and 2k > m. What is the value of 2k − m?`,
    options: ["10", "25", "50", "100"],
    answer: 2,
    explanation: `Rewrite L₁ to match the coefficients of L₂:
2 * (3x + 4y) = 2 * k => 6x + 8y = 2k.
So the lines are:
L₁: 6x + 8y - 2k = 0
L₂: 6x + 8y - m = 0
The shortest distance d between two parallel lines Ax + By + C₁ = 0 and Ax + By + C₂ = 0 is:
d = |C₁ - C₂| / √(A² + B²)
Here, A = 6, B = 8, so √(A² + B²) = √(36 + 64) = 10.
Distance d = 5 => |-2k - (-m)| / 10 = 5
|m - 2k| / 10 = 5 => |2k - m| = 50.
Given 2k > m, we have 2k - m > 0.
Thus, 2k - m = 50.`,
    topic: "Advanced Coordinate Geometry"
  },
  {
    id: 12,
    text: `Circle equation x² + y² + ax + by + c = 0 passes through (0, 0) and has area 50π. Center is on line y = x in the third quadrant. What is a + b + c?`,
    options: ["-10", "-20", "10", "20"],
    answer: 3,
    explanation: `Since the circle passes through (0, 0), substituting (0,0) into the equation gives c = 0.
The area of the circle is πR² = 50π => R² = 50.
The center of the circle (h, k) lies on the line y = x, which means h = k.
Since the circle passes through (0,0), the distance from the center (h, k) to (0,0) is equal to radius R:
(h - 0)² + (k - 0)² = R² => h² + k² = 50.
Since h = k:
2h² = 50 => h² = 25 => h = ±5.
The center lies in the third quadrant, so both coordinates must be negative: h = -5, k = -5.
Thus, the equation is:
(x + 5)² + (y + 5)² = 50 => x² + 10x + 25 + y² + 10y + 25 = 50 => x² + y² + 10x + 10y = 0.
Comparing with the general form: a = 10, b = 10, c = 0.
Therefore, a + b + c = 10 + 10 + 0 = 20.`,
    topic: "Advanced Coordinate Geometry"
  },
  {
    id: 13,
    text: `In right triangle ABC, angle B is 90°. If tan(A) = (x² − y²) / 2xy, where x > y > 0, what is the expression for sec(A) − tan(A)?`,
    options: ["x/y", "y/x", "(x-y)/(x+y)", "(x+y)/(x-y)"],
    answer: 1,
    explanation: `In right triangle ABC, let the side opposite to angle A be (x² - y²) and the side adjacent to angle A be 2xy.
By Pythagorean theorem, the hypotenuse is:
Hypotenuse = √((x² - y²)² + (2xy)²) = √(x⁴ - 2x²y² + y⁴ + 4x²y²) = √(x⁴ + 2x²y² + y⁴) = √(x² + y²)² = x² + y².
Now, sec(A) = Hypotenuse / Adjacent = (x² + y²) / 2xy.
sec(A) - tan(A) = (x² + y²) / 2xy - (x² - y²) / 2xy = (x² + y² - x² + y²) / 2xy = 2y² / 2xy = y/x.`,
    topic: "Trigonometry"
  },
  {
    id: 14,
    text: `A 50-liter tank is filled with a 20% alcohol solution. Exactly x liters are drawn off and replaced with pure alcohol twice. If the final mixture is 71.2% alcohol, what is x?`,
    options: ["10", "15", "20", "25"],
    answer: 2,
    explanation: `It is simpler to track the water content.
Initial alcohol concentration = 20% => Initial water concentration = 80%.
Initial water volume = 50 * 0.8 = 40 liters.
In each step, drawing off x liters and replacing with pure alcohol (which has 0% water) multiplies the remaining water volume by a factor of (1 - x/50).
Since the process is done twice:
Final water volume = 40 * (1 - x/50)².
The final mixture has 71.2% alcohol => Water percentage = 100% - 71.2% = 28.8%.
Final water volume = 50 * 0.288 = 14.4 liters.
So:
14.4 = 40 * (1 - x/50)²
(1 - x/50)² = 14.4 / 40 = 0.36
1 - x/50 = √0.36 = 0.6
x/50 = 0.4 => x = 20.`,
    topic: "Advanced Math"
  },
  {
    id: 15,
    text: `If abc = 1, then 1/(1+a+b⁻¹) + 1/(1+b+c⁻¹) + 1/(1+c+a⁻¹) = ?`,
    options: ["0", "1", "1/ab", "ab"],
    answer: 1,
    explanation: `Let the three terms be T₁, T₂, T₃. Given abc = 1 => c = 1/(ab), c⁻¹ = ab, b⁻¹ = 1/b.
T₁ = 1 / (1 + a + 1/b) = b / (b + ab + 1)
T₂ = 1 / (1 + b + ab) = 1 / (ab + b + 1)
T₃ = 1 / (1 + c + 1/a) = 1 / (1 + 1/ab + 1/a) = ab / (ab + b + 1)
Summing them:
T₁ + T₂ + T₃ = (b + 1 + ab) / (ab + b + 1) = 1.`,
    topic: "Advanced Math"
  }
];
