const QUESTIONS = [
  {
    id: 1,
    topic: "Basic Probability",
    text: "A bag contains 5 red marbles, 7 blue marbles, and 8 green marbles. If one marble is selected at random, what is the probability that it is blue?",
    options: ["\\(\\frac{7}{20}\\)", "\\(\\frac{7}{13}\\)", "\\(\\frac{1}{7}\\)", "\\(\\frac{13}{20}\\)"],
    answer: 0,
    explanation: "Total marbles = \\(5 + 7 + 8 = 20\\). There are 7 blue marbles, so \\(P(\\text{blue}) = \\frac{7}{20}\\)."
  },
  {
    id: 2,
    topic: "Complementary Probability",
    text: "The probability that it will rain tomorrow is 0.35. What is the probability that it will NOT rain tomorrow?",
    options: ["0.35", "0.55", "0.65", "0.75"],
    answer: 2,
    explanation: "Using the complement rule, \\(P(\\text{not rain}) = 1 - 0.35 = 0.65\\)."
  },
  {
    id: 3,
    topic: "Conditional Probability – Two-Way Table",
    text: "In a survey of 100 students, 60 play a sport, 45 play an instrument, and 20 play both. If a student who plays a sport is chosen at random, what is the probability that the student also plays an instrument?",
    options: ["\\(\\frac{1}{5}\\)", "\\(\\frac{1}{3}\\)", "\\(\\frac{4}{9}\\)", "\\(\\frac{3}{5}\\)"],
    answer: 1,
    explanation: "Given the student plays a sport (60 students total), 20 also play an instrument. Thus \\(P(\\text{instrument} \\mid \\text{sport}) = \\frac{20}{60} = \\frac{1}{3}\\)."
  },
  {
    id: 4,
    topic: "Conditional Probability Formula",
    text: "For two events A and B, \\(P(A) = 0.4\\), \\(P(B) = 0.5\\), and \\(P(A \\text{ and } B) = 0.2\\). What is \\(P(B \\mid A)\\)?",
    options: ["0.2", "0.4", "0.5", "0.8"],
    answer: 2,
    explanation: "By definition, \\(P(B \\mid A) = \\frac{P(A \\text{ and } B)}{P(A)} = \\frac{0.2}{0.4} = 0.5\\)."
  },
  {
    id: 5,
    topic: "Independent Events",
    text: "A fair coin is flipped and a fair 6-sided die is rolled. What is the probability of getting heads and rolling a number greater than 4?",
    options: ["\\(\\frac{1}{12}\\)", "\\(\\frac{1}{6}\\)", "\\(\\frac{1}{3}\\)", "\\(\\frac{5}{6}\\)"],
    answer: 1,
    explanation: "\\(P(\\text{heads}) = \\frac{1}{2}\\) and \\(P(>4) = \\frac{2}{6} = \\frac{1}{3}\\). Since the events are independent, \\(P = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}\\)."
  },
  {
    id: 6,
    topic: "Probability Without Replacement",
    text: "A box has 4 defective bulbs and 6 good bulbs. Two bulbs are drawn one after another without replacement. What is the probability that both bulbs are good?",
    options: ["\\(\\frac{1}{3}\\)", "\\(\\frac{9}{25}\\)", "\\(\\frac{2}{5}\\)", "\\(\\frac{3}{5}\\)"],
    answer: 0,
    explanation: "First draw: \\(\\frac{6}{10}\\). Second draw: \\(\\frac{5}{9}\\). Combined: \\(\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}\\)."
  },
  {
    id: 7,
    topic: "Union of Two Events",
    text: "If \\(P(A) = 0.6\\), \\(P(B) = 0.5\\), and \\(P(A \\cap B) = 0.3\\), what is \\(P(A \\cup B)\\)?",
    options: ["0.8", "0.9", "1.1", "0.2"],
    answer: 0,
    explanation: "Using the addition rule: \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.6 + 0.5 - 0.3 = 0.8\\)."
  },
  {
    id: 8,
    topic: "Two-Way Table – Relative Frequency",
    text: "A school club has 30 juniors (18 girls, 12 boys) and 20 seniors (8 girls, 12 boys). If a girl is selected at random from the club, what is the probability that she is a senior?",
    options: ["\\(\\frac{4}{25}\\)", "\\(\\frac{4}{13}\\)", "\\(\\frac{2}{5}\\)", "\\(\\frac{8}{20}\\)"],
    answer: 1,
    explanation: "Total girls = \\(18 + 8 = 26\\). Of these, 8 are seniors. So \\(P(\\text{senior} \\mid \\text{girl}) = \\frac{8}{26} = \\frac{4}{13}\\)."
  },
  {
    id: 9,
    topic: "At Least One Probability",
    text: "A fair coin is tossed 3 times. What is the probability of getting at least one tail?",
    options: ["\\(\\frac{1}{8}\\)", "\\(\\frac{3}{8}\\)", "\\(\\frac{7}{8}\\)", "\\(\\frac{3}{4}\\)"],
    answer: 2,
    explanation: "\\(P(\\text{at least 1 tail}) = 1 - P(\\text{all heads}) = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}\\)."
  },
  {
    id: 10,
    topic: "Testing Independence",
    text: "Two events X and Y have \\(P(X) = 0.3\\), \\(P(Y) = 0.4\\), and \\(P(X \\text{ and } Y) = 0.12\\). Are X and Y independent?",
    options: [
      "Yes, because \\(P(X) \\cdot P(Y) = P(X \\text{ and } Y)\\)",
      "No, because \\(P(X) + P(Y) \\neq 1\\)",
      "No, because \\(P(X \\text{ and } Y) \\neq 0\\)",
      "Yes, because \\(P(X) < P(Y)\\)"
    ],
    answer: 0,
    explanation: "Events are independent if and only if \\(P(X \\text{ and } Y) = P(X) \\cdot P(Y)\\). Here \\(0.3 \\times 0.4 = 0.12\\), so they are independent."
  },
  {
    id: 11,
    topic: "Dice Sum Probability",
    text: "Two fair 6-sided dice are rolled. What is the probability that the sum of the two numbers rolled is 7?",
    options: ["\\(\\frac{1}{12}\\)", "\\(\\frac{1}{6}\\)", "\\(\\frac{7}{36}\\)", "\\(\\frac{5}{36}\\)"],
    answer: 1,
    explanation: "Out of 36 outcomes, 6 give a sum of 7: \\((1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\). Probability = \\(\\frac{6}{36} = \\frac{1}{6}\\)."
  },
  {
    id: 12,
    topic: "Conditional Probability – Medical Test",
    text: "In a clinic, 80 patients tested positive and 120 tested negative. Among those who tested positive, 64 actually had the condition. What is the probability that a patient who tested positive actually has the condition?",
    options: ["0.32", "0.64", "0.80", "0.53"],
    answer: 2,
    explanation: "Restricting to the 80 patients who tested positive, 64 have the condition: \\(\\frac{64}{80} = 0.80\\)."
  },
  {
    id: 13,
    topic: "Expected Value / Frequency",
    text: "A spinner has a 0.25 probability of landing on red. If the spinner is spun 120 times, how many times is it expected to land on red?",
    options: ["20", "25", "30", "40"],
    answer: 2,
    explanation: "Expected count = \\(120 \\times 0.25 = 30\\)."
  },
  {
    id: 14,
    topic: "Mutually Exclusive Events",
    text: "Events M and N are mutually exclusive, with \\(P(M) = 0.28\\) and \\(P(N) = 0.45\\). What is \\(P(M \\text{ or } N)\\)?",
    options: ["0.126", "0.17", "0.73", "0.85"],
    answer: 2,
    explanation: "For mutually exclusive events, \\(P(M \\text{ and } N) = 0\\), so \\(P(M \\text{ or } N) = 0.28 + 0.45 = 0.73\\)."
  },
  {
    id: 15,
    topic: "Geometric Probability",
    text: "A point is chosen at random inside a square of side 10 that contains a circle of radius 3. What is the probability that the point lies inside the circle?",
    options: ["\\(\\frac{9\\pi}{100}\\)", "\\(\\frac{3\\pi}{10}\\)", "\\(\\frac{9\\pi}{10}\\)", "\\(\\frac{6\\pi}{100}\\)"],
    answer: 0,
    explanation: "Area of circle = \\(\\pi(3)^2 = 9\\pi\\). Area of square = \\(10^2 = 100\\). Ratio = \\(\\frac{9\\pi}{100}\\)."
  },
  {
    id: 16,
    topic: "Conditional Probability – Cards",
    text: "A card is drawn from a standard 52-card deck. Given that the card is a heart (13 hearts in a deck), what is the probability that it is a face card (Jack, Queen, or King)?",
    options: ["\\(\\frac{3}{52}\\)", "\\(\\frac{3}{13}\\)", "\\(\\frac{12}{52}\\)", "\\(\\frac{1}{4}\\)"],
    answer: 1,
    explanation: "There are 13 hearts, and 3 of them are face cards (J, Q, K of hearts). So \\(P(\\text{face} \\mid \\text{heart}) = \\frac{3}{13}\\)."
  },
  {
    id: 17,
    topic: "Compound Probability – With Replacement",
    text: "A jar contains 3 white and 5 black balls. Two balls are drawn one at a time WITH replacement. What is the probability that both are black?",
    options: ["\\(\\frac{25}{64}\\)", "\\(\\frac{5}{14}\\)", "\\(\\frac{9}{64}\\)", "\\(\\frac{5}{8}\\)"],
    answer: 0,
    explanation: "With replacement, each draw has \\(P(\\text{black}) = \\frac{5}{8}\\). So \\(\\frac{5}{8} \\times \\frac{5}{8} = \\frac{25}{64}\\)."
  },
  {
    id: 18,
    topic: "Conditional Probability – Union Given",
    text: "If \\(P(A) = 0.5\\), \\(P(B) = 0.4\\), and \\(P(A \\cup B) = 0.7\\), what is \\(P(A \\mid B)\\)?",
    options: ["0.2", "0.4", "0.5", "0.6"],
    answer: 2,
    explanation: "First find \\(P(A \\cap B) = 0.5 + 0.4 - 0.7 = 0.2\\). Then \\(P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.4} = 0.5\\)."
  },
  {
    id: 19,
    topic: "Number Selection Probability",
    text: "An integer is chosen at random from 1 to 20, inclusive. What is the probability that the integer is divisible by 3 or 5?",
    options: ["\\(\\frac{9}{20}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{2}{5}\\)", "\\(\\frac{11}{20}\\)"],
    answer: 0,
    explanation: "Multiples of 3: 3, 6, 9, 12, 15, 18 (6). Multiples of 5: 5, 10, 15, 20 (4). Overlap (15): 1. Total = \\(6 + 4 - 1 = 9\\). Probability = \\(\\frac{9}{20}\\)."
  },
  {
    id: 20,
    topic: "Conditional Probability – Reverse",
    text: "At a company, 70% of employees work full-time. Of the full-time employees, 40% work remotely. What percent of all employees are full-time AND work remotely?",
    options: ["28%", "30%", "40%", "57%"],
    answer: 0,
    explanation: "\\(P(\\text{full-time and remote}) = P(\\text{full-time}) \\times P(\\text{remote} \\mid \\text{full-time}) = 0.70 \\times 0.40 = 0.28 = 28\\%\\)."
  },
  {
    id: 21,
    topic: "Complement & Conditional",
    text: "In a class of 40 students, 24 passed math, 28 passed science, and 18 passed both. If a student who passed science is selected, what is the probability they did NOT pass math?",
    options: ["\\(\\frac{5}{14}\\)", "\\(\\frac{9}{14}\\)", "\\(\\frac{1}{4}\\)", "\\(\\frac{3}{7}\\)"],
    answer: 0,
    explanation: "Out of 28 students who passed science, 18 passed math, so \\(28 - 18 = 10\\) did not pass math. Probability = \\(\\frac{10}{28} = \\frac{5}{14}\\)."
  },
  {
    id: 22,
    topic: "Binomial Probability – Exact Count",
    text: "A fair coin is flipped 4 times. What is the probability of getting exactly 2 heads?",
    options: ["\\(\\frac{1}{4}\\)", "\\(\\frac{3}{8}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{5}{16}\\)"],
    answer: 1,
    explanation: "There are \\(\\binom{4}{2} = 6\\) ways to get 2 heads out of \\(2^4 = 16\\) outcomes. Probability = \\(\\frac{6}{16} = \\frac{3}{8}\\)."
  },
  {
    id: 23,
    topic: "Tree Diagram / Dependent Probability",
    text: "Bag A has 3 red and 2 blue chips. Bag B has 1 red and 4 blue chips. A bag is chosen at random (50% each) and one chip is drawn. What is the probability the chip is red?",
    options: ["0.2", "0.4", "0.5", "0.8"],
    answer: 1,
    explanation: "\\(P(\\text{red}) = \\frac{1}{2}\\left(\\frac{3}{5}\\right) + \\frac{1}{2}\\left(\\frac{1}{5}\\right) = \\frac{3}{10} + \\frac{1}{10} = \\frac{4}{10} = 0.4\\)."
  },
  {
    id: 24,
    topic: "Two-Way Table – Solving for Unknown",
    text: "In a survey of 60 people, 35 like coffee. Of those who like coffee, 20 also like tea. If 15 people like neither coffee nor tea, how many people like tea?",
    options: ["20", "25", "30", "35"],
    answer: 2,
    explanation: "People who like at least one = \\(60 - 15 = 45\\). Using \\(|C \\cup T| = |C| + |T| - |C \\cap T|\\): \\(45 = 35 + |T| - 20 \\Rightarrow |T| = 30\\)."
  },
  {
    id: 25,
    topic: "Conditional Probability – Dice",
    text: "A fair 6-sided die is rolled. Given that the number rolled is even, what is the probability that it is a prime number?",
    options: ["\\(\\frac{1}{6}\\)", "\\(\\frac{1}{3}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{2}{3}\\)"],
    answer: 1,
    explanation: "The even outcomes are \\(\\{2, 4, 6\\}\\) (3 outcomes). Only 2 is prime, so the conditional probability is \\(\\frac{1}{3}\\)."
  }
];
