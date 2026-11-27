const QUESTIONS = [
  {
    id: 1,
    topic: "Function Evaluation",
    text: "If the linear function \\(f\\) is defined by \\(f(x) = 3x - 7\\), what is the value of \\(f(5)\\)?",
    options: ["8", "12", "15", "22"],
    answer: 0,
    explanation: "Substitute \\(x = 5\\): \\(f(5) = 3(5) - 7 = 15 - 7 = 8\\)."
  },
  {
    id: 2,
    topic: "Slope from Two Points",
    text: "A linear function \\(g\\) satisfies \\(g(2) = 5\\) and \\(g(6) = 17\\). What is the slope of the graph of \\(y = g(x)\\) in the xy-plane?",
    options: ["2", "3", "4", "12"],
    answer: 1,
    explanation: "Slope \\(m = \\frac{17 - 5}{6 - 2} = \\frac{12}{4} = 3\\)."
  },
  {
    id: 3,
    topic: "Interpreting Slope in Context",
    text: "A plumber charges a flat fee plus an hourly rate, modeled by \\(C(h) = 45h + 60\\), where \\(C(h)\\) is the total cost in dollars for \\(h\\) hours. What does 45 represent?",
    options: [
      "The flat consultation fee",
      "The hourly rate in dollars per hour",
      "The total cost for 1 hour",
      "The maximum number of hours"
    ],
    answer: 1,
    explanation: "In \\(C(h) = mh + b\\), the coefficient \\(m = 45\\) is the rate of change, which represents the hourly rate of $45 per hour."
  },
  {
    id: 4,
    topic: "Interpreting Y-Intercept in Context",
    text: "A tank initially contains water and is being drained at a constant rate. The volume \\(V(t)\\), in gallons, after \\(t\\) minutes is \\(V(t) = 250 - 12t\\). What is the meaning of 250?",
    options: [
      "The tank drains 250 gallons per minute",
      "The tank is empty after 250 minutes",
      "The initial volume of water in the tank is 250 gallons",
      "The volume after 1 minute is 250 gallons"
    ],
    answer: 2,
    explanation: "When \\(t = 0\\), \\(V(0) = 250\\), so 250 gallons is the initial volume of water in the tank."
  },
  {
    id: 5,
    topic: "Finding Linear Function Equation",
    text: "A linear function \\(f\\) has slope \\(-2\\) and passes through the point \\((3, 4)\\). Which of the following defines \\(f(x)\\)?",
    options: [
      "\\(f(x) = -2x + 10\\)",
      "\\(f(x) = -2x - 2\\)",
      "\\(f(x) = -2x + 4\\)",
      "\\(f(x) = 2x - 2\\)"
    ],
    answer: 0,
    explanation: "Using \\(f(x) = -2x + b\\) and \\(f(3) = 4\\): \\(4 = -2(3) + b \\Rightarrow b = 10\\). Thus \\(f(x) = -2x + 10\\)."
  },
  {
    id: 6,
    topic: "X-Intercept of a Linear Function",
    text: "What is the x-intercept of the graph of \\(f(x) = \\frac{2}{3}x - 8\\) in the xy-plane?",
    options: ["\\((12, 0)\\)", "\\((8, 0)\\)", "\\((0, -8)\\)", "\\((-12, 0)\\)"],
    answer: 0,
    explanation: "Set \\(f(x) = 0\\): \\(\\frac{2}{3}x - 8 = 0 \\Rightarrow \\frac{2}{3}x = 8 \\Rightarrow x = 12\\). The x-intercept is \\((12, 0)\\)."
  },
  {
    id: 7,
    topic: "Parallel Linear Functions",
    text: "The graph of linear function \\(h\\) is parallel to the line \\(4x - 2y = 10\\) and passes through \\((0, -3)\\). What is \\(h(x)\\)?",
    options: [
      "\\(h(x) = 2x - 3\\)",
      "\\(h(x) = -2x - 3\\)",
      "\\(h(x) = \\frac{1}{2}x - 3\\)",
      "\\(h(x) = 4x - 3\\)"
    ],
    answer: 0,
    explanation: "Rewrite \\(4x - 2y = 10\\) as \\(y = 2x - 5\\), which has slope 2. Parallel lines have the same slope, and y-intercept is \\(-3\\), so \\(h(x) = 2x - 3\\)."
  },
  {
    id: 8,
    topic: "Perpendicular Linear Functions",
    text: "Line \\(p\\) is perpendicular to the graph of \\(f(x) = \\frac{3}{4}x + 2\\) and passes through \\((3, 1)\\). What is the y-intercept of line \\(p\\)?",
    options: ["5", "3", "\\(-3\\)", "\\(-\\frac{5}{4}\\)"],
    answer: 0,
    explanation: "The perpendicular slope is \\(-\\frac{4}{3}\\). Using \\(1 = -\\frac{4}{3}(3) + b \\Rightarrow 1 = -4 + b \\Rightarrow b = 5\\)."
  },
  {
    id: 9,
    topic: "Linear Function from Table",
    text: "For a linear function \\(f\\), \\(f(1) = 7\\), \\(f(3) = 13\\), and \\(f(5) = 19\\). What is the value of \\(f(10)\\)?",
    options: ["31", "34", "37", "40"],
    answer: 1,
    explanation: "Slope is \\(\\frac{13 - 7}{3 - 1} = 3\\). Thus \\(f(x) = 3x + 4\\). At \\(x = 10\\), \\(f(10) = 3(10) + 4 = 34\\)."
  },
  {
    id: 10,
    topic: "Solving for Input",
    text: "If \\(f(x) = -4x + 9\\) and \\(f(a) = -11\\), what is the value of \\(a\\)?",
    options: ["\\(-5\\)", "5", "\\(\\frac{1}{2}\\)", "20"],
    answer: 1,
    explanation: "Set \\(-4a + 9 = -11 \\Rightarrow -4a = -20 \\Rightarrow a = 5\\)."
  },
  {
    id: 11,
    topic: "Rate of Change Comparison",
    text: "Linear function \\(f\\) is defined by \\(f(x) = 5x - 2\\). If \\(x\\) increases by 4, by how much does \\(f(x)\\) increase?",
    options: ["4", "5", "18", "20"],
    answer: 3,
    explanation: "Since the slope is 5, every 1-unit increase in \\(x\\) increases \\(f(x)\\) by 5. A 4-unit increase in \\(x\\) increases \\(f(x)\\) by \\(4 \\times 5 = 20\\)."
  },
  {
    id: 12,
    topic: "Function Shift",
    text: "If \\(f(x) = 2x + 3\\) and \\(g(x) = f(x) - 5\\), what is the y-intercept of the graph of \\(y = g(x)\\)?",
    options: ["\\((0, -2)\\)", "\\((0, 8)\\)", "\\((0, 3)\\)", "\\((0, -5)\\)"],
    answer: 0,
    explanation: "\\(g(x) = (2x + 3) - 5 = 2x - 2\\). Setting \\(x = 0\\) gives \\(g(0) = -2\\)."
  },
  {
    id: 13,
    topic: "Horizontal Shift of Linear Function",
    text: "Let \\(f(x) = 4x - 1\\). What is the simplified expression for \\(f(x + 2)\\)?",
    options: ["\\(4x + 1\\)", "\\(4x + 7\\)", "\\(4x - 9\\)", "\\(4x + 8\\)"],
    answer: 1,
    explanation: "\\(f(x + 2) = 4(x + 2) - 1 = 4x + 8 - 1 = 4x + 7\\)."
  },
  {
    id: 14,
    topic: "Intersection of Two Linear Functions",
    text: "For what value of \\(x\\) are the functions \\(f(x) = 5x - 4\\) and \\(g(x) = 2x + 11\\) equal?",
    options: ["3", "5", "7", "15"],
    answer: 1,
    explanation: "Set \\(5x - 4 = 2x + 11 \\Rightarrow 3x = 15 \\Rightarrow x = 5\\)."
  },
  {
    id: 15,
    topic: "Linear Model – Break-Even",
    text: "A subscription service offers Plan A for \\(C_A(m) = 15m + 20\\) dollars and Plan B for \\(C_B(m) = 10m + 50\\) dollars over \\(m\\) months. After how many months do both plans cost the same?",
    options: ["4", "5", "6", "10"],
    answer: 2,
    explanation: "Solve \\(15m + 20 = 10m + 50 \\Rightarrow 5m = 30 \\Rightarrow m = 6\\) months."
  },
  {
    id: 16,
    topic: "Collinear Points",
    text: "The points \\((1, 3)\\), \\((4, 9)\\), and \\((7, k)\\) all lie on the graph of the same linear function. What is the value of \\(k\\)?",
    options: ["12", "15", "18", "21"],
    answer: 1,
    explanation: "Slope between \\((1, 3)\\) and \\((4, 9)\\) is \\(\\frac{9-3}{4-1} = 2\\). From \\((4, 9)\\) to \\((7, k)\\): \\(\\frac{k - 9}{7 - 4} = 2 \\Rightarrow k - 9 = 6 \\Rightarrow k = 15\\)."
  },
  {
    id: 17,
    topic: "Constant Linear Function",
    text: "A linear function \\(f\\) satisfies \\(f(-2) = 8\\) and \\(f(5) = 8\\). What is the value of \\(f(100)\\)?",
    options: ["0", "8", "100", "200"],
    answer: 1,
    explanation: "Since \\(f(-2) = f(5) = 8\\), the slope is 0, meaning \\(f(x) = 8\\) for all \\(x\\). Thus \\(f(100) = 8\\)."
  },
  {
    id: 18,
    topic: "Converting Standard Form to Slope-Intercept",
    text: "If the linear equation \\(6x + 3y = 24\\) is written as a function \\(y = f(x)\\), what is \\(f(2)\\)?",
    options: ["2", "4", "6", "8"],
    answer: 1,
    explanation: "Solve for \\(y\\): \\(3y = -6x + 24 \\Rightarrow f(x) = -2x + 8\\). Then \\(f(2) = -2(2) + 8 = 4\\)."
  },
  {
    id: 19,
    topic: "Composite Linear Functions",
    text: "If \\(f(x) = 2x + 1\\) and \\(g(x) = 3x - 4\\), what is the value of \\(f(g(3))\\)?",
    options: ["5", "11", "17", "21"],
    answer: 1,
    explanation: "First compute \\(g(3) = 3(3) - 4 = 5\\). Then \\(f(5) = 2(5) + 1 = 11\\)."
  },
  {
    id: 20,
    topic: "Quadrant Analysis",
    text: "If \\(f(x) = mx + b\\) has \\(m > 0\\) and \\(b < 0\\), which quadrant does the graph of \\(y = f(x)\\) NOT pass through?",
    options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    answer: 1,
    explanation: "A line with positive slope and negative y-intercept starts in Quadrant III, crosses the y-axis below the origin into Quadrant IV, and crosses the x-axis into Quadrant I. It never enters Quadrant II."
  },
  {
    id: 21,
    topic: "Unit Conversion in Linear Model",
    text: "A car travels at a constant speed, and its remaining fuel \\(F(d)\\) in liters after \\(d\\) kilometers is \\(F(d) = 50 - 0.08d\\). How many kilometers can the car travel before running out of fuel?",
    options: ["400", "500", "625", "800"],
    answer: 2,
    explanation: "Set \\(F(d) = 0\\): \\(50 - 0.08d = 0 \\Rightarrow d = \\frac{50}{0.08} = 625\\) km."
  },
  {
    id: 22,
    topic: "Linear Function Difference",
    text: "For a linear function \\(f\\), \\(f(7) - f(3) = 16\\). What is the slope of the graph of \\(y = f(x)\\)?",
    options: ["2", "4", "8", "16"],
    answer: 1,
    explanation: "The slope is \\(\\frac{f(7) - f(3)}{7 - 3} = \\frac{16}{4} = 4\\)."
  },
  {
    id: 23,
    topic: "Inverse of a Linear Function",
    text: "If \\(f(x) = 3x - 6\\) and \\(f^{-1}\\) is the inverse function of \\(f\\), what is \\(f^{-1}(9)\\)?",
    options: ["3", "5", "21", "\\(\\frac{1}{3}\\)"],
    answer: 1,
    explanation: "\\(f^{-1}(9)\\) is the value of \\(x\\) such that \\(f(x) = 9\\). Solving \\(3x - 6 = 9 \\Rightarrow 3x = 15 \\Rightarrow x = 5\\)."
  },
  {
    id: 24,
    topic: "Domain & Range of Restricted Linear Function",
    text: "A function \\(f(x) = -2x + 10\\) is defined for \\(1 \\leq x \\leq 4\\). What is the range of \\(f\\)?",
    options: [
      "\\(2 \\leq f(x) \\leq 8\\)",
      "\\(1 \\leq f(x) \\leq 4\\)",
      "\\(2 \\leq f(x) \\leq 10\\)",
      "\\(-8 \\leq f(x) \\leq -2\\)"
    ],
    answer: 0,
    explanation: "Since \\(f\\) is decreasing, the maximum is at \\(x = 1\\): \\(f(1) = 8\\), and the minimum is at \\(x = 4\\): \\(f(4) = 2\\). Thus \\(2 \\leq f(x) \\leq 8\\)."
  },
  {
    id: 25,
    topic: "Finding Parameter in Linear Function",
    text: "The graph of \\(f(x) = kx + 5\\) passes through the point \\((4, -7)\\). What is the value of \\(k\\)?",
    options: ["\\(-3\\)", "\\(-\\frac{1}{2}\\)", "3", "12"],
    answer: 0,
    explanation: "Substitute \\((4, -7)\\): \\(-7 = 4k + 5 \\Rightarrow 4k = -12 \\Rightarrow k = -3\\)."
  }
];
