// =============================================
// Digital SAT Topic Practice
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "If (\text{Rs. } 510) be divided among A, B, C in such a way that A gets (\frac{2}{3}) of what B gets and B gets (\frac{1}{4}) of what C gets, then their shares are respectively:",
    "options": [
      "(\text{Rs. } 120), (\text{Rs. } 240), (\text{Rs. } 150)",
      "(\text{Rs. } 60), (\text{Rs. } 90), (\text{Rs. } 360)",
      "(\text{Rs. } 150), (\text{Rs. } 300), (\text{Rs. } 60)",
      "None of these"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let C = 4k, B = k, A = 2k/3. Sum = 4k + k + 2k/3 = 17k/3 = 510 → k = 90. A = 60, B = 90, C = 360.",
    "topic": "Division of Amount"
  },
  {
    "id": 2,
    "text": "The sum of three numbers is 98. If the ratio of the first to the second is (2 : 3) and that of the second to the third is (5 : 8), then the second number is:",
    "options": [
      "20",
      "30",
      "48",
      "58"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. First : Second : Third = (10 : 15 : 24) (combined ratio). Sum of parts = 49. Total = 98, each part = 2. Second = 15 × 2 = 30.",
    "topic": "Three Numbers"
  },
  {
    "id": 3,
    "text": "A fraction which bears the same ratio to (\frac{1}{27}) that (\frac{3}{11}) does to (\frac{5}{9}), is equal to:",
    "options": [
      "(\frac{1}{55})",
      "(\frac{1}{11})",
      "(\frac{3}{11})",
      "55"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. x / ((\\frac{1}{27})) = ((\\frac{3}{11})) / ((\\frac{5}{9})). x = ((\\frac{1}{27})) × ((\\frac{3}{11})) × ((\\frac{9}{5})) = (\\frac{1}{55}).",
    "topic": "Fourth Proportional"
  },
  {
    "id": 4,
    "text": "(\text{Rs. } 366) are divided amongst A, B and C so that A may get (\frac{1}{2}) as much as B and C together, B may get (\frac{2}{3}) as much as A and C together. The share of A is:",
    "options": [
      "(\text{Rs. } 122)",
      "(\text{Rs. } 129.60)",
      "(\text{Rs. } 146.60)",
      "(\text{Rs. } 183)"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A = ((\\frac{1}{2}))(B+C) → A : (B+C) = (1 : 2) → A = (\\frac{366}{3}) = ( \text{Rs. } 122).",
    "topic": "Division of Amount"
  },
  {
    "id": 5,
    "text": "A sum of (\text{Rs. } 1300) is divided amongst P, Q, R and S such that P's share / Q's share = Q's share / R's share = R's share / S's share = (\frac{2}{3}). Then P's share is:",
    "options": [
      "(\text{Rs. } 140)",
      "(\text{Rs. } 160)",
      "(\text{Rs. } 240)",
      "(\text{Rs. } 320)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. P:Q:R:S = 8:12:18:27. Sum = 65. P = ((\\frac{8}{65})) × 1300 = ( \text{Rs. } 160).",
    "topic": "Four Quantities"
  },
  {
    "id": 6,
    "text": "A and B together have (\text{Rs. } 1210). If (\frac{4}{15}) of A's amount is equal to (\frac{2}{5}) of B's amount, how much amount does B have?",
    "options": [
      "(\text{Rs. } 460)",
      "(\text{Rs. } 484)",
      "(\text{Rs. } 550)",
      "(\text{Rs. } 664)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. ((\\frac{4}{15}))A = ((\\frac{2}{5}))B → A:B = 3:2. B = ((\\frac{2}{5})) × 1210 = ( \text{Rs. } 484).",
    "topic": "Two Quantities"
  },
  {
    "id": 7,
    "text": "Two numbers are respectively (20%) and (50%) more than a third number. The ratio of the two numbers is:",
    "options": [
      "(2 : 5)",
      "(3 : 5)",
      "(4 : 5)",
      "(6 : 7)"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Let third = 100. First = 120, Second = 150. Ratio = 120:150 = 4:5.",
    "topic": "Percentage Relation"
  },
  {
    "id": 8,
    "text": "Two whole numbers whose sum is 72 cannot be in the ratio:",
    "options": [
      "(5 : 7)",
      "(3 : 5)",
      "(3 : 4)",
      "(4 : 5)"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Sum of ratio parts must divide 72. 5+7=12 ✓; 3+5=8 ✓; 3+4=7 → 72÷7 is not integer ✗; 4+5=9 ✓. So 3:4 is impossible.",
    "topic": "Whole Number Constraint"
  },
  {
    "id": 9,
    "text": "If a carton containing a dozen mirrors is dropped, which of the following cannot be the ratio of broken mirrors to unbroken mirrors?",
    "options": [
      "(2 : 1)",
      "(3 : 1)",
      "(3 : 2)",
      "(7 : 5)"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Total = 12. Sum of parts must divide 12. 2+1=3 ✓; 3+1=4 ✓; 3+2=5 → 12÷5=2.4 ✗; 7+5=12 ✓. So 3:2 is impossible.",
    "topic": "Whole Number Constraint"
  },
  {
    "id": 10,
    "text": "Seats for Mathematics, Physics and Biology in a school are in the ratio (5 : 7 : 8). There is a proposal to increase these seats by (40%), (50%) and (75%) respectively. What will be the ratio of increased seats?",
    "options": [
      "(2 : 3 : 4)",
      "(6 : 7 : 8)",
      "(6 : 8 : 9)",
      "None of these"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. New seats: Maths=5×1.4=7, Physics=7×1.5=10.5, Bio=8×1.75=14. Ratio = 7:10.5:14 = 2:3:4.",
    "topic": "Percentage Increase"
  },
  {
    "id": 11,
    "text": "The ratio of the number of boys and girls in a college is (7 : 8). If the percentage increase in the number of boys and girls be (20%) and (10%) respectively, what will be the new ratio?",
    "options": [
      "(8 : 9)",
      "(17 : 18)",
      "(21 : 22)",
      "Cannot be determined"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Boys = 7k×1.2 = 8.4k, Girls = 8k×1.1 = 8.8k. Ratio = 8.4:8.8 = 21:22.",
    "topic": "Percentage Increase"
  },
  {
    "id": 12,
    "text": "A sum of money is to be distributed among A, B, C, D in the proportion of (5 : 2 : 4) : 3. If C gets (\text{Rs. } 1000) more than D, what is B's share?",
    "options": [
      "(\text{Rs. } 500)",
      "(\text{Rs. } 1500)",
      "(\text{Rs. } 2000)",
      "None of these"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. C−D = 4−3 = 1 part = ( \text{Rs. } 1000). Total = 14 parts = ( \text{Rs. } 14),000. B = 2 × 1000 = ( \text{Rs. } 2000).",
    "topic": "Division with Condition"
  },
  {
    "id": 13,
    "text": "If (40%) of a number is equal to two-third of another number, what is the ratio of first number to the second number?",
    "options": [
      "(2 : 5)",
      "(3 : 7)",
      "(5 : 3)",
      "(7 : 3)"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 0.4A = ((\\frac{2}{3}))B → A/B = ((\\frac{2}{3}))/((\\frac{2}{5})) = (\\frac{5}{3}). Ratio A:B = 5:3.",
    "topic": "Percentage Relation"
  },
  {
    "id": 14,
    "text": "Ratio of the earnings of A and B is (4 : 7). If the earnings of A increase by (50%) and those of B decrease by (25%), the new ratio of their earnings becomes (8 : 7). What are A's earnings?",
    "options": [
      "(\text{Rs. } 21),000",
      "(\text{Rs. } 26),000",
      "(\text{Rs. } 28),000",
      "Data inadequate"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Let A=4k, B=7k. New A=6k, new B=5.25k. Ratio=6:5.25=8:7 ✓. But actual value of k is unknown — only the ratio is given, not any absolute amount. Answer: D (Data inadequate).",
    "topic": "Earnings & Ratio"
  },
  {
    "id": 15,
    "text": "What least number must be subtracted from each of the numbers 14, 17, 34 and 42 so that the remainders may be proportional?",
    "options": [
      "0",
      "1",
      "2",
      "7"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. (14−x)(42−x) = (17−x)(34−x) → 588−56x = 578−51x → 10 = 5x → x = 2.",
    "topic": "Subtraction for Proportionality"
  },
  {
    "id": 16,
    "text": "In a mixture of 60 litres, the ratio of milk and water is (2 : 1). If this ratio is to be (1 : 2), then the quantity of water to be further added is:",
    "options": [
      "20 litres",
      "30 litres",
      "40 litres",
      "60 litres"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Milk = 40 L, Water = 20 L. For ratio 1:2, water needed = 2×40 = 80 L. Water to add = 80−20 = 60 L.",
    "topic": "Mixtures"
  },
  {
    "id": 17,
    "text": "The fourth proportional to 5, 8, 15 is:",
    "options": [
      "18",
      "24",
      "19",
      "20"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 5:8 = 15:x → x = (8×15)/5 = 24.",
    "topic": "Fourth Proportional"
  },
  {
    "id": 18,
    "text": "The mean proportional between 234 and 104 is:",
    "options": [
      "12",
      "39",
      "54",
      "None of these"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Mean proportional = √(234×104) = √24336 = 156. Since 156 is not among options A, B, or C, the answer is None of these.",
    "topic": "Mean Proportional"
  },
  {
    "id": 19,
    "text": "The third proportional to 0.36 and 0.48 is:",
    "options": [
      "0.64",
      "0.1728",
      "0.42",
      "0.94"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 0.36:0.48 = 0.48:x → x = (0.48×0.48)/0.36 = 0.(\\frac{2304}{0}).36 = 0.64.",
    "topic": "Third Proportional"
  },
  {
    "id": 20,
    "text": "The third proportional to (x² − y²) and (x − y) is:",
    "options": [
      "(x + y)",
      "(x − y)",
      "(x + y) / (x − y)",
      "(x − y) / (x + y)"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. (x²−y²):(x−y) = (x−y):z → z = (x−y)²/(x²−y²) = (x−y)/((x+y)) = (x−y)/(x+y).",
    "topic": "Algebraic Proportional"
  },
  {
    "id": 21,
    "text": "The ratio of third proportional to 12 and 30 and the mean proportional between 9 and 25 is:",
    "options": [
      "(2 : 1)",
      "(5 : 1)",
      "(7 : 15)",
      "(9 : 14)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Third proportional to 12 & 30: 12:30=30:x → x=75. Mean proportional of 9 & 25 = √225 = 15. Ratio = 75:15 = 5:1.",
    "topic": "Third & Mean Proportional"
  },
  {
    "id": 22,
    "text": "In a ratio which is equal to (3 : 4), if the antecedent is 12, then the consequent is:",
    "options": [
      "9",
      "16",
      "20",
      "24"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. (\\frac{3}{4}) = 12/x → x = (12×4)/3 = 16.",
    "topic": "Antecedent & Consequent"
  },
  {
    "id": 23,
    "text": "The prices of a scooter and a T.V. are in the ratio (7 : 5). If the scooter costs (\text{Rs. } 8000) more than a T.V. set, then the price of a T.V. set is:",
    "options": [
      "(\text{Rs. } 20),000",
      "(\text{Rs. } 24),000",
      "(\text{Rs. } 28),000",
      "(\text{Rs. } 32),000"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Difference = 2 parts = ( \text{Rs. } 8000) → 1 part = ( \text{Rs. } 4000). T.V. = 5×4000 = ( \text{Rs. } 20),000.",
    "topic": "Price Problems"
  },
  {
    "id": 24,
    "text": "An amount of (\text{Rs. } 735) was divided between A, B and C. If each of them had received (\text{Rs. } 25) less, their shares would have been in the ratio (1 : 3 : 2). The money received by C was:",
    "options": [
      "(\text{Rs. } 195)",
      "(\text{Rs. } 200)",
      "(\text{Rs. } 225)",
      "(\text{Rs. } 245)"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Reduced total = 735−75 = 660. C's reduced share = ((\\frac{2}{6}))×660 = 220. C's actual = 220+25 = ( \text{Rs. } 245).",
    "topic": "Division with Reduction"
  },
  {
    "id": 25,
    "text": "An amount of (\text{Rs. } 2430) is divided among A, B and C such that if their shares be reduced by (\text{Rs. } 5), (\text{Rs. } 10) and (\text{Rs. } 15) respectively, the remainders shall be in the ratio of (3 : 4 : 5). Then B's share was:",
    "options": [
      "(\text{Rs. } 605)",
      "(\text{Rs. } 790)",
      "(\text{Rs. } 800)",
      "(\text{Rs. } 810)"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Reduced total = 2430−30 = 2400. B's reduced = ((\\frac{4}{12}))×2400 = 800. B's actual = 800+10 = ( \text{Rs. } 810).",
    "topic": "Division with Reduction"
  }
];

const TOPIC_MAP = {
    'Ratio & Proportion': {
        name: 'Ratio & Proportion',
        questions: QUESTIONS.map(q => q.id)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, TOPIC_MAP };
}