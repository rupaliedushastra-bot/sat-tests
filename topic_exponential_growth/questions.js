// =============================================
// Digital SAT Practice Test - Exponential Growth & Decay
// 20 Questions (Easy, Moderate, Super Toughest)
// Format: Authentic SAT Math Practice with LaTeX
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "difficulty": "EASY",
    "text": "The function $f(x) = 450(1.08)^x$ models the number of employees at a company $x$ years after it was founded. How many employees did the company have when it was founded?",
    "options": [
      "$1.08$",
      "$8$",
      "$108$",
      "$450$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. When the company was founded, $x = 0$ years have passed.\nSubstitute $x = 0$ into the function:\n$$f(0) = 450(1.08)^0 = 450(1) = 450$$\nThus, the company had $450$ employees when founded (represented by the initial value $a$ in $f(x) = ab^x$).",
    "topic": "Exponential Initial Value"
  },
  {
    "id": 2,
    "difficulty": "EASY",
    "text": "A new computer was purchased for $\\$1,200$. It depreciates in value by $20\\%$ each year. Which equation models the value, $V(t)$, in dollars, of the computer $t$ years after it was purchased?",
    "options": [
      "$V(t) = 1200(0.20)^t$",
      "$V(t) = 1200(0.80)^t$",
      "$V(t) = 1200(1.20)^t$",
      "$V(t) = 1200 - 20t$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. An exponential decay model has the form $V(t) = P(1 - r)^t$, where $P$ is the initial price and $r$ is the annual decay rate.\nHere $P = 1200$ and $r = 0.20$:\n$$V(t) = 1200(1 - 0.20)^t = 1200(0.80)^t$$",
    "topic": "Exponential Decay Modeling"
  },
  {
    "id": 3,
    "difficulty": "EASY",
    "text": "The function $P(t) = 50(1.15)^t$ models a population of insects after $t$ days. What does the value $1.15$ represent in this context?",
    "options": [
      "The population increases by 15 insects every day.",
      "The population increases by 1.15% every day.",
      "The population increases by 15% every day.",
      "The population increases by 115% every day."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The growth factor is $b = 1.15 = 1 + 0.15 = 1 + 15\\%$. This means the insect population increases by $15\\%$ of its current value every day.",
    "topic": "Growth Factor Interpretation"
  },
  {
    "id": 4,
    "difficulty": "EASY",
    "text": "Which of the following functions represents an exponential decay model?",
    "options": [
      "$y = 100(1.01)^x$",
      "$y = 50(0.95)^x$",
      "$y = 0.5(1.5)^x$",
      "$y = 20(2)^x$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. An exponential function $y = ab^x$ (with $a > 0$) represents exponential decay if and only if $0 < b < 1$.\nIn Choice B, $b = 0.95 < 1$, which represents a $5\\%$ decrease per period. All other options have $b > 1$, which represent exponential growth.",
    "topic": "Exponential Decay Identification"
  },
  {
    "id": 5,
    "difficulty": "EASY",
    "text": "A population of rabbits doubles every year. If the initial population is $10$ rabbits, which expression gives the population after $4$ years?",
    "options": [
      "$10(2)^4$",
      "$10 + 2^4$",
      "$4(10)^2$",
      "$10(4)^2$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Doubling means the growth factor is $2$. With initial value $P_0 = 10$, the population after $t$ years is modeled by $P(t) = 10(2)^t$.\nAfter $t = 4$ years, the population is $10(2)^4 = 10(16) = 160$.",
    "topic": "Exponential Doubling"
  },
  {
    "id": 6,
    "difficulty": "MODERATE",
    "text": "A certain radioactive isotope has a half-life of $8\\text{ days}$. If the initial mass of the sample is $300\\text{ grams}$, which function models the mass $M(t)$ remaining after $t$ days?",
    "options": [
      "$M(t) = 300(0.5)^{8t}$",
      "$M(t) = 300(0.5)^{t/8}$",
      "$M(t) = 300(2)^{t/8}$",
      "$M(t) = 8(0.5)^{t/300}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. For a substance with half-life $h$, the remaining mass after $t$ time units is modeled by $M(t) = M_0(0.5)^{t/h}$.\nWith initial mass $M_0 = 300$ and half-life $h = 8\\text{ days}$, the equation is $M(t) = 300(0.5)^{t/8}$.",
    "topic": "Half-Life Modeling"
  },
  {
    "id": 7,
    "difficulty": "MODERATE",
    "text": "The number of bacteria in a petri dish triples every $5\\text{ hours}$. If the initial count is $C_0$, which equation models the count $C(t)$ after $t$ hours?",
    "options": [
      "$C(t) = C_0(3)^{5t}$",
      "$C(t) = C_0(3)^{t/5}$",
      "$C(t) = C_0(5)^{t/3}$",
      "$C(t) = C_0(1/3)^{t/5}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Tripling every 5 hours means the count multiplies by 3 every time $t$ increases by 5 units. The number of 5-hour intervals elapsed in $t$ hours is $\\frac{t}{5}$.\nTherefore, the model is $C(t) = C_0(3)^{t/5}$.",
    "topic": "Exponential Growth Modeling"
  },
  {
    "id": 8,
    "difficulty": "MODERATE",
    "text": "An exponential function is given by $y = ab^x$, where $a$ and $b$ are constants. If the graph of the function passes through the points $(0, 5)$ and $(2, 45)$, what is the value of $b$ assuming $b > 0$?",
    "options": [
      "$3$",
      "$5$",
      "$9$",
      "$40$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Substitute $(0, 5)$ into $y = ab^x$:\n$$5 = a b^0 = a(1) \\implies a = 5$$\n\nNow substitute $(2, 45)$ and $a = 5$:\n$$45 = 5 b^2 \\implies b^2 = \\frac{45}{5} = 9$$\n\nSince $b > 0$, $b = \\sqrt{9} = 3$.",
    "topic": "Finding Exponential Parameters"
  },
  {
    "id": 9,
    "difficulty": "MODERATE",
    "text": "The amount of medication in a patient's bloodstream is modeled by the function $A(t) = 200(0.9)^t$, where $t$ is the number of hours since administration. By what approximate percentage does the medication decrease every 2 hours?",
    "options": [
      "$10\\%$",
      "$18\\%$",
      "$19\\%$",
      "$20\\%$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Every 2 hours ($\\\\Delta t = 2$), the medication amount is multiplied by $(0.9)^2 = 0.81$.\nSince $0.81 = 1 - 0.19$, retaining $81\\%$ of the medication means it decreases by $19\\%$ every 2 hours.",
    "topic": "Multi-period Rate of Change"
  },
  {
    "id": 10,
    "difficulty": "MODERATE",
    "text": "A city's population $P$ is modeled by the equation $P(t) = 15000(1.2)^{t/3}$, where $t$ is in years. The equation can be rewritten in the form $P(t) = 15000(b)^t$. Which of the following is equivalent to $b$?",
    "options": [
      "$1.2$",
      "$0.4$",
      "$(1.2)^3$",
      "$(1.2)^{1/3}$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Using exponent rules $(x^{mn} = (x^m)^n)$:\n$$P(t) = 15000(1.2)^{t/3} = 15000\\left((1.2)^{1/3}\\right)^t$$\nComparing with $P(t) = 15000(b)^t$, we find $b = (1.2)^{1/3}$.",
    "topic": "Equivalent Exponential Forms"
  },
  {
    "id": 11,
    "difficulty": "MODERATE",
    "text": "Two investment accounts are opened at the same time. Account A starts with $\\$100$ and grows by $10\\%$ annually. Account B starts with $\\$200$ and grows by $5\\%$ annually. Which expression represents the ratio of the balance in Account A to the balance in Account B after $t$ years?",
    "options": [
      "$0.5(1.05)^t$",
      "$0.5\\left(\\frac{1.10}{1.05}\\right)^t$",
      "$2\\left(\\frac{1.10}{1.05}\\right)^t$",
      "$0.5(0.05)^t$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The balance functions are:\n- Account A: $A(t) = 100(1 + 0.10)^t = 100(1.10)^t$\n- Account B: $B(t) = 200(1 + 0.05)^t = 200(1.05)^t$\n\nThe ratio $\\frac{A(t)}{B(t)}$ is:\n$$\\frac{A(t)}{B(t)} = \\frac{100(1.10)^t}{200(1.05)^t} = \\frac{100}{200}\\left(\\frac{1.10}{1.05}\\right)^t = 0.5\\left(\\frac{1.10}{1.05}\\right)^t$$",
    "topic": "Ratio of Exponential Models"
  },
  {
    "id": 12,
    "difficulty": "MODERATE",
    "text": "A car's value $V$ depreciates according to $V(t) = 25000(0.85)^t$. What does the term $0.85$ represent?",
    "options": [
      "The car loses 85% of its value each year.",
      "The car retains 85% of its value from the previous year.",
      "The car's value decreases by $85 each year.",
      "The car is worth 85% of its original price forever."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In $V(t) = 25000(0.85)^t$, the decay factor is $0.85$. Each year ($t \\to t+1$), the car's value is multiplied by $0.85$, meaning it retains $85\\%$ of its value from the previous year (equivalent to losing $15\\%$ per year).",
    "topic": "Decay Factor Interpretation"
  },
  {
    "id": 13,
    "difficulty": "SUPER TOUGHEST",
    "text": "An asset's value is determined by the function $f(t) = 1000(1.44)^{t/2}$, where $t$ is the number of years. This function shows that the asset's value increases by what percentage each year?",
    "options": [
      "$20\\%$",
      "$22\\%$",
      "$44\\%$",
      "$72\\%$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Rewrite the function with an exponent of $t$:\n$$f(t) = 1000(1.44)^{t/2} = 1000\\left((1.44)^{1/2}\\right)^t = 1000(\\sqrt{1.44})^t = 1000(1.20)^t$$\nSince $1.20 = 1 + 0.20 = 1 + 20\\%$, the asset increases by $20\\%$ each year.",
    "topic": "Annual Growth Rate Conversion"
  },
  {
    "id": 14,
    "difficulty": "SUPER TOUGHEST",
    "text": "A colony of algae on a pond doubles in area every $6\\text{ days}$. If its initial area is $10\\text{ square meters}$, which of the following functions gives the area $A(m)$ of the algae after $m$ months? (Assume $1\\text{ month} = 30\\text{ days}$).",
    "options": [
      "$A(m) = 10(2)^{5m}$",
      "$A(m) = 10(2)^{m/5}$",
      "$A(m) = 10(2)^{30m}$",
      "$A(m) = 10(32)^{m/6}$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In $m$ months, the number of days elapsed is $30m$.\nSince the algae doubles every 6 days, the number of doubling periods is $\\frac{30m}{6} = 5m$.\nTherefore, the area after $m$ months is $A(m) = 10(2)^{5m}$.",
    "topic": "Unit Conversion in Exponents"
  },
  {
    "id": 15,
    "difficulty": "SUPER TOUGHEST",
    "text": "A population grows by $r\\%$ every year. Exactly $10\\text{ years}$ later, the population is exactly $3$ times its initial size. Which of the following equations correctly expresses $r$?",
    "options": [
      "$r = 30$",
      "$r = 100(3^{1/10} - 1)$",
      "$r = 100(3^{10} - 1)$",
      "$r = 100(1 - 3^{1/10})$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let the initial population be $P_0$. The population after 10 years is:\n$$P(10) = P_0\\left(1 + \\frac{r}{100}\\right)^{10} = 3P_0$$\n\nDivide by $P_0$:\n$$\\left(1 + \\frac{r}{100}\\right)^{10} = 3 \\implies 1 + \\frac{r}{100} = 3^{1/10} \\implies \\frac{r}{100} = 3^{1/10} - 1 \\implies r = 100(3^{1/10} - 1)$$",
    "topic": "Solving Exponential Rates"
  },
  {
    "id": 16,
    "difficulty": "SUPER TOUGHEST",
    "text": "The balance of a savings account is modeled by $B(t) = 500(1.03)^{12t}$, where $t$ is the number of years since the deposit. Which of the following is the best interpretation of this model?",
    "options": [
      "The account earns 3% interest per year, compounded monthly.",
      "The account earns 3% interest every month.",
      "The account earns 36% interest compounded annually.",
      "The account earns 1.03% interest every month."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In $B(t) = 500(1.03)^{12t}$, the exponent $12t$ represents the total number of months in $t$ years. For every 1 month increase in time, the account balance is multiplied by $1.03 = 1 + 0.03 = 1 + 3\\%$. Thus, the account earns $3\\%$ interest every month.",
    "topic": "Compound Interest Interpretation"
  },
  {
    "id": 17,
    "difficulty": "SUPER TOUGHEST",
    "text": "A liquid evaporates by $5\\%$ every $4\\text{ hours}$. Which function best models the amount of liquid remaining from an initial sample of $100\\text{ mL}$ after $d$ days?",
    "options": [
      "$L(d) = 100(0.95)^{d/6}$",
      "$L(d) = 100(0.95)^{4d}$",
      "$L(d) = 100(0.95)^{6d}$",
      "$L(d) = 100(0.95)^{24d}$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Losing $5\\%$ every 4 hours means the remaining fraction is $1 - 0.05 = 0.95$ per 4-hour cycle.\nIn $d$ days, there are $24d$ hours. The number of 4-hour cycles is $\\frac{24d}{4} = 6d$.\nThus, the function is $L(d) = 100(0.95)^{6d}$.",
    "topic": "Time Scaling in Exponents"
  },
  {
    "id": 18,
    "difficulty": "SUPER TOUGHEST",
    "text": "Which of the following expressions is equivalent to the exponential function $C(t) = 100(1.05)^{t+2}$?",
    "options": [
      "$C(t) = 102(1.05)^t$",
      "$C(t) = 110.25(1.05)^t$",
      "$C(t) = 100(1.05)^t + 100(1.05)^2$",
      "$C(t) = 200(1.05)^t$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Use the exponent product rule $a^{x+y} = a^x \\cdot a^y$:\n$$C(t) = 100(1.05)^{t+2} = 100 \\cdot (1.05)^2 \\cdot (1.05)^t$$\nSince $(1.05)^2 = 1.1025$:\n$$C(t) = 100 \\cdot 1.1025 \\cdot (1.05)^t = 110.25(1.05)^t$$",
    "topic": "Exponent Properties"
  },
  {
    "id": 19,
    "difficulty": "SUPER TOUGHEST",
    "text": "The population of a specific town decreases exponentially. If the population was $40,000$ in $2010$ and $32,400$ in $2012$, which of the following models the population $P$, $t$ years after $2010$?",
    "options": [
      "$P(t) = 40000(0.81)^t$",
      "$P(t) = 40000(0.9)^t$",
      "$P(t) = 40000(0.9)^{t/2}$",
      "$P(t) = 40000 - 3800t$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let $t = 0$ represent the year 2010, so $P(0) = 40000$. In 2012, $t = 2$ and $P(2) = 32400$.\nUsing $P(t) = 40000(b)^t$:\n$$32400 = 40000(b^2) \\implies b^2 = \\frac{32400}{40000} = \\frac{324}{400} = 0.81 \\implies b = \\sqrt{0.81} = 0.9$$\nThus, the population model is $P(t) = 40000(0.9)^t$.",
    "topic": "Exponential Decay Modeling"
  },
  {
    "id": 20,
    "difficulty": "SUPER TOUGHEST",
    "text": "A stock drops in value by $20\\%$ in its first year. For the next two years, it grows by a constant annual rate $r$ (expressed as a decimal) until it reaches its original starting value. What is the value of $r$?",
    "options": [
      "$r = 0.10$",
      "$r = \\sqrt{1.2} - 1$",
      "$r = \\sqrt{1.25} - 1$",
      "$r = 0.125$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Let $V_0$ be the original starting value.\n- After Year 1 (20% drop): $V_1 = V_0(1 - 0.20) = 0.80 V_0$\n- After Year 3 (grows at rate $r$ for 2 years): $V_3 = 0.80 V_0(1 + r)^2$\n\nSet $V_3 = V_0$:\n$$0.80 V_0(1 + r)^2 = V_0 \\implies 0.80(1 + r)^2 = 1 \\implies (1 + r)^2 = \\frac{1}{0.80} = 1.25$$\n$$1 + r = \\sqrt{1.25} \\implies r = \\sqrt{1.25} - 1$$\n(Note: $\\sqrt{1.25} \\approx 1.118 \\implies r \\approx 11.8\\%$ per year).",
    "topic": "Multi-year Rate Balancing"
  }
];
