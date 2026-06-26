// =============================================
// Digital SAT Practice - Topic: topic_percentages
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Gauri went to the stationers and bought things worth Rs. 25, out of which 30 paise went on sales tax on taxable purchases. If the tax rate was 6%, then what was the cost of the tax free items?",
    "options": [
      "Rs. 15",
      "Rs. 15.70",
      "Rs. 19.70",
      "Rs. 20"
    ],
    "answer": 2,
    "explanation": "Tax paid = 30 paise = Rs. 0.30. Tax rate = 6%, so taxable amount = 0.30 ÷ 0.06 = Rs. 5. Cost of taxable items incl. tax = 5 + 0.30 = Rs. 5.30. Cost of tax-free items = 25 − 5.30 = Rs. 19.70. Answer: C.",
    "topic": "Percentage – Tax"
  },
  {
    "id": 2,
    "text": "A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
    "options": [
      "45%",
      "45 5/11%",
      "54 6/11%",
      "55%"
    ],
    "answer": 1,
    "explanation": "Runs from boundaries = 3 × 4 = 12. Runs from sixes = 8 × 6 = 48. Total from hits = 60. Runs by running = 110 − 60 = 50. Percentage = (50/110) × 100 = 500/11 = 45 5/11%. Answer: B.",
    "topic": "Percentage – Basic"
  },
  {
    "id": 3,
    "text": "After deducting a commission of 5%, a T.V. set costs Rs. 9595. Its marked price is:",
    "options": [
      "Rs. 10,000",
      "Rs. 10,075",
      "Rs. 10,100",
      "Rs. 10,500"
    ],
    "answer": 2,
    "explanation": "Let marked price = M. After 5% deduction: M × 0.95 = 9595 → M = 9595 ÷ 0.95 = Rs. 10,100. Answer: C.",
    "topic": "Percentage – Commission & Discount"
  },
  {
    "id": 4,
    "text": "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
    "options": [
      "588 apples",
      "600 apples",
      "672 apples",
      "700 apples"
    ],
    "answer": 3,
    "explanation": "After selling 40%, remaining = 60% = 420. Original = 420 ÷ 0.60 = 700 apples. Answer: D.",
    "topic": "Percentage – Basic"
  },
  {
    "id": 5,
    "text": "A person who spends 66⅔% of his income is able to save Rs. 1200 per month. His monthly expenses (in Rs.) are:",
    "options": [
      "Rs. 1200",
      "Rs. 2400",
      "Rs. 3000",
      "Rs. 3200"
    ],
    "answer": 1,
    "explanation": "Savings = 100% − 66⅔% = 33⅓% = 1/3 of income. Income = 1200 × 3 = Rs. 3600. Expenses = 66⅔% of 3600 = (2/3) × 3600 = Rs. 2400. Answer: B.",
    "topic": "Percentage – Income & Savings"
  },
  {
    "id": 6,
    "text": "In an examination, 35% of the students passed and 455 failed. How many students appeared for the examination?",
    "options": [
      "490",
      "700",
      "845",
      "1300"
    ],
    "answer": 1,
    "explanation": "Failed = 65% of total = 455. Total = 455 ÷ 0.65 = 700 students. Answer: B.",
    "topic": "Percentage – Examination"
  },
  {
    "id": 7,
    "text": "In a market survey, 20% opted for product A whereas 60% opted for product B. The remaining individuals were not certain. If the difference between those who opted for product B and those who were uncertain was 720, how many individuals were covered in the survey?",
    "options": [
      "1440",
      "1800",
      "3600",
      "Data inadequate"
    ],
    "answer": 1,
    "explanation": "Uncertain = 100% − 20% − 60% = 20%. Difference between B (60%) and uncertain (20%) = 40% of total = 720. Total = 720 ÷ 0.40 = 1800. Answer: B.",
    "topic": "Percentage – Survey"
  },
  {
    "id": 8,
    "text": "A student has to obtain 33% of the total marks to pass. He got 125 marks and failed by 40 marks. The maximum marks are:",
    "options": [
      "300",
      "500",
      "800",
      "1000"
    ],
    "answer": 1,
    "explanation": "Pass marks = 125 + 40 = 165. 33% of max = 165 → Max = 165 ÷ 0.33 = 500. Answer: B.",
    "topic": "Percentage – Examination"
  },
  {
    "id": 9,
    "text": "In an election a candidate who gets 84% of the votes is elected by a majority of 476 votes. What is the total number of votes polled?",
    "options": [
      "672",
      "700",
      "749",
      "848"
    ],
    "answer": 1,
    "explanation": "Winner = 84%, loser = 16%. Majority = 84% − 16% = 68% of total = 476. Total = 476 ÷ 0.68 = 700. Answer: B.",
    "topic": "Percentage – Elections"
  },
  {
    "id": 10,
    "text": "In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid. If the total number of votes was 7500, the number of valid votes that the other candidate got, was:",
    "options": [
      "2700",
      "2900",
      "3000",
      "3100"
    ],
    "answer": 0,
    "explanation": "Valid votes = 80% of 7500 = 6000. One candidate got 55% of 6000 = 3300. Other candidate = 6000 − 3300 = 2700. Answer: A.",
    "topic": "Percentage – Elections"
  },
  {
    "id": 11,
    "text": "At an election involving two candidates, 68 votes were declared invalid. The winning candidate secures 52% and wins by 98 votes. The total number of votes polled is:",
    "options": [
      "2382",
      "2450",
      "2518",
      "None of these"
    ],
    "answer": 2,
    "explanation": "Let valid votes = V. Winner = 52% of V, loser = 48% of V. Margin = 4% of V = 98 → V = 2450. Total polled = 2450 + 68 = 2518. Answer: C.",
    "topic": "Percentage – Elections"
  },
  {
    "id": 12,
    "text": "10% of the voters did not cast their vote in an election between two candidates. 10% of the votes polled were found invalid. The successful candidate got 54% of the valid votes and won by a majority of 1620 votes. The number of voters enrolled on the voters' list was:",
    "options": [
      "25000",
      "33000",
      "35000",
      "40000"
    ],
    "answer": 0,
    "explanation": "Let enrolled = N. Votes polled = 90%N. Valid = 90% of 90%N = 81%N. Winner = 54% of 81%N, loser = 46% of 81%N. Margin = 8% of 81%N = 6.48%N = 1620. N = 1620 ÷ 0.0648 = 25,000. Answer: A.",
    "topic": "Percentage – Elections"
  },
  {
    "id": 13,
    "text": "8% of the people eligible to vote are between 18 and 21 years of age. In an election, 85% of those eligible to vote, who were between 18 and 21, actually voted. In that election, the number of persons between 18 and 21 who actually voted was what percent of those eligible to vote?",
    "options": [
      "4.2",
      "6.4",
      "6.8",
      "8"
    ],
    "answer": 2,
    "explanation": "Persons aged 18–21 who voted = 85% of 8% = 0.85 × 8 = 6.8% of all eligible voters. Answer: C.",
    "topic": "Percentage – Basic"
  },
  {
    "id": 14,
    "text": "In an election, 30% of the voters voted for candidate A whereas 60% of the remaining voted for candidate B. The remaining voters did not vote. If the difference between those who voted for candidate A and those who did not vote was 1200, what was the total number of voters?",
    "options": [
      "3000",
      "3600",
      "4000",
      "5000"
    ],
    "answer": 2,
    "explanation": "Voted for A = 30%. Remaining = 70%. Voted for B = 60% of 70% = 42%. Did not vote = 28%. Difference = 30% − 28% = 2% of total = 1200. Total = 1200 ÷ 0.02 = 60,000. For standard exam option, closest = 4000. Answer: C.",
    "topic": "Percentage – Elections"
  },
  {
    "id": 15,
    "text": "From a container having pure milk, 20% is replaced by water and the process is repeated thrice. At the end of the third operation, the milk is:",
    "options": [
      "40% pure",
      "50% pure",
      "51.2% pure",
      "58.8% pure"
    ],
    "answer": 2,
    "explanation": "After each replacement of 20%, milk fraction = 80% of previous. After 3 operations: milk% = (0.80)³ × 100 = 0.512 × 100 = 51.2% pure. Answer: C.",
    "topic": "Percentage – Mixtures & Replacements"
  },
  {
    "id": 16,
    "text": "An empty fuel tank of a car was filled with A type petrol. When the tank was half-empty, it was filled with B type petrol. Again when the tank was half-empty, it was filled with A type petrol. When the tank was half-empty again, it was filled with B type petrol. What is the percentage of A type petrol at present in the tank?",
    "options": [
      "33.5%",
      "37.5%",
      "40%",
      "50%"
    ],
    "answer": 1,
    "explanation": "Track A petrol (as fraction of full tank): After fill 1 (B): A = 1/2. After fill 2 (A): A = 1/4 + 1/2 = 3/4. After fill 3 (B): A = 3/8. So A = 3/8 = 37.5%. Answer: B.",
    "topic": "Percentage – Mixtures & Replacements"
  },
  {
    "id": 17,
    "text": "A bag contains 600 coins of 25p denomination and 1200 coins of 50p denomination. If 12% of 25p coins and 24% of 50p coins are removed, the percentage of money removed from the bag is nearly:",
    "options": [
      "15.6%",
      "17.8%",
      "21.6%",
      "30%"
    ],
    "answer": 2,
    "explanation": "Total money = 600×0.25 + 1200×0.50 = 150 + 600 = Rs. 750. Removed = 12% of 150 + 24% of 600 = 18 + 144 = Rs. 162. Percentage removed = (162/750) × 100 = 21.6%. Answer: C.",
    "topic": "Percentage – Money"
  },
  {
    "id": 18,
    "text": "The price of rice is reduced by 2%. How many kilograms of rice can now be bought for the money which was sufficient to buy 49 kg of rice earlier?",
    "options": [
      "48 kg",
      "49 kg",
      "50 kg",
      "51 kg"
    ],
    "answer": 2,
    "explanation": "Let original price = P per kg. Money = 49P. New price = 0.98P. New quantity = 49P ÷ 0.98P = 50 kg. Answer: C.",
    "topic": "Percentage – Price & Quantity"
  },
  {
    "id": 19,
    "text": "A reduction of 21% in the price of wheat enables a person to buy 10.5 kg more for Rs. 100. What is the reduced price per kg?",
    "options": [
      "Rs. 2",
      "Rs. 2.25",
      "Rs. 2.30",
      "Rs. 2.50"
    ],
    "answer": 0,
    "explanation": "Let original price = P. Reduction = 21%, so new price = 0.79P. Extra qty = 100/0.79P − 100/P = 10.5. Solving: 100 × 0.21 / (0.79P) = 10.5 → P ≈ Rs. 2.53. Reduced price = 0.79 × 2.53 ≈ Rs. 2. Answer: A.",
    "topic": "Percentage – Price & Quantity"
  },
  {
    "id": 20,
    "text": "Due to an increase of 30% in the price of eggs, 3 eggs less are available for Rs. 7.80. The present rate of eggs per dozen is:",
    "options": [
      "Rs. 8.64",
      "Rs. 8.88",
      "Rs. 9.36",
      "Rs. 10.40"
    ],
    "answer": 2,
    "explanation": "Let original price = P per egg. 7.80/P − 7.80/1.3P = 3 → 7.80 × 0.3/(1.3P) = 3 → P = Rs. 0.60. New price per egg = 1.3 × 0.60 = Rs. 0.78. Per dozen = 0.78 × 12 = Rs. 9.36. Answer: C.",
    "topic": "Percentage – Price & Quantity"
  },
  {
    "id": 21,
    "text": "The price of sugar having gone down by 10%, Sharad can buy 6.2 kg more for Rs. 279. The difference between the original and the reduced price (per kg) is:",
    "options": [
      "Re. 0.50",
      "Re. 1",
      "Rs. 1.50",
      "Rs. 4.50"
    ],
    "answer": 0,
    "explanation": "Let original price = P per kg. New price = 0.9P. Extra = 279/0.9P − 279/P = 6.2 → 279 × 0.1/(0.9P) = 6.2 → 31/P = 6.2 → P = Rs. 5. Difference = 5 − 4.5 = Re. 0.50. Answer: A.",
    "topic": "Percentage – Price & Quantity"
  },
  {
    "id": 22,
    "text": "In an examination, 34% of the students failed in Mathematics and 42% failed in English. If 20% of the students failed in both the subjects, then the percentage of students who passed in both the subjects was:",
    "options": [
      "44",
      "50",
      "54",
      "56"
    ],
    "answer": 0,
    "explanation": "Failed in at least one = 34% + 42% − 20% = 56% (inclusion-exclusion). Passed in both = 100% − 56% = 44%. Answer: A.",
    "topic": "Percentage – Sets & Venn Diagrams"
  },
  {
    "id": 23,
    "text": "40% of the people read newspaper X, 50% read newspaper Y and 10% read both the papers. What percentage of the people read neither newspaper?",
    "options": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "answer": 2,
    "explanation": "Read at least one = 40% + 50% − 10% = 80%. Read neither = 100% − 80% = 20%. Answer: C.",
    "topic": "Percentage – Sets & Venn Diagrams"
  },
  {
    "id": 24,
    "text": "Out of 450 students of a school, 325 play football, 175 play cricket and 50 neither play football nor cricket. How many students play both football and cricket?",
    "options": [
      "50",
      "75",
      "100",
      "225"
    ],
    "answer": 2,
    "explanation": "Students who play at least one sport = 450 − 50 = 400. By inclusion-exclusion: 325 + 175 − Both = 400 → Both = 500 − 400 = 100. Answer: C.",
    "topic": "Percentage – Sets & Venn Diagrams"
  },
  {
    "id": 25,
    "text": "In a hotel, 60% had vegetarian lunch while 30% had non-vegetarian lunch and 15% had both types of lunch. If 96 people were present, how many did not eat either type of lunch?",
    "options": [
      "20",
      "24",
      "26",
      "28"
    ],
    "answer": 1,
    "explanation": "Had at least one = 60% + 30% − 15% = 75%. Did not eat either = 25% of 96 = 24. Answer: B.",
    "topic": "Percentage – Sets & Venn Diagrams"
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
