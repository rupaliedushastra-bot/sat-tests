// =============================================
// Digital SAT Practice - Topic: topic_linear_inequalities_in_one_or_two_variables
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "4x + 6 = 8 \nWhich equation has the same solution as the given equation?",
    "options": [
      "4x = 108",
      "4x = 24",
      "4x = 12",
      "4x = 3"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 2,
    "text": "√𝑥+ 4 = 12  \nWhich of the following is the solution to the equation above?",
    "options": [
      "8",
      "16",
      "64",
      "140"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 3,
    "text": "If 4x + 2 = 12, what is the value of 16x + 8?",
    "options": [
      "40",
      "48",
      "56",
      "60"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 4,
    "text": "5 (x - 3) = 10x + 5 \nWhat value of x satisfies the equation above?",
    "options": [
      "-4",
      "1",
      "5",
      "15"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 5,
    "text": "k + 12 = 336 \nWhat is the solution to the given equation?",
    "options": [
      "28",
      "324",
      "348",
      "4,032"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 6,
    "text": "C = 10x + 4y \nThe formula above gives the monthly cost C, in dollars, of operating a delivery \ntruck when the driver works a total of x hours and when y gallons of gasoline are \nused. If, in a particular month, it cost no more than $2,000 to operate the truck and \nat least 150 gallons of gas were used, what is the maximum number of hours the \ndriver could have worked?",
    "options": [
      "125",
      "140",
      "500",
      "1,400"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 7,
    "text": "8\n𝑡",
    "options": [
      "p = t – 0.8",
      "p = 0.8t",
      "p = \n0.8\n𝑡",
      "p = \n𝑡\n0.8"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 8,
    "text": "If 2√2𝑥= 𝑎, what is 2x in terms of a?",
    "options": [
      "𝑎\n2",
      "𝑎\n4\n2",
      "𝑎\n2\n2",
      "4𝑎2"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 9,
    "text": "Jamila plans to invest $300 by buying shares of two different stocks. Stock A \ncosts $5.62 per share and Stock B costs $12.97 per share. Which equation \nrepresents the number of shares of these stocks Jamila can buy, where a is the \nnumber of shares of Stock A and b is the number of shares of Stock B? \n(Assume that there are no fees.)",
    "options": [
      "12.97a + 5.62b = 300",
      "12.97a - 5.62b = 300",
      "5.62a + 12.97b = 300",
      "5.62a - 12.97b = 300"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 10,
    "text": "Which of the following is the graph of the equation y = 2x + 3 in the xy - plane?",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 11,
    "text": "The boiling point of water at sea level is 212 degrees Fahrenheit (°F). For every \nincrease of 1,000 feet above sea level, the boiling point of water drops \n \napproximately 1.84°F. Which of the following equations gives the approximate \nboiling point B, in °F, at h feet above sea level?",
    "options": [
      "B = 212 – 1.84h",
      "B = 212 – (0.00184)h",
      "B = 212h",
      "B = 1.84(212) – 1,000h"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 12,
    "text": "A pool initially contains 1,385 cubic feet of water. A pump begins emptying the \nwater at a constant rate of 20 cubic feet per minute. Which of the following \nfunctions best approximates the volume v(t), in cubic feet, of water in the pool t \nminutes after pumping begins, for 0 ≤ t ≤ 69?",
    "options": [
      "v(t) = 1,385 – 20t",
      "v(t) = 1,385 – 69t",
      "v(t) = 1,385 + 20t",
      "v(t) = 1,385 + 69t"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 13,
    "text": "In the xy - plane, line l passes through the points (0,1) and (1,4). Which of the \nfollowing is an equation of line l?",
    "options": [
      "y = \n1\n3x + 1",
      "y = \n1\n3x - 1",
      "y = 3x + 1",
      "y = 3x – 1"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 14,
    "text": "The graph of the linear function f is shown. Which of the following defines f?",
    "options": [
      "F (x) = -4x + 2",
      "f (x) = -4x + 8",
      "f (x) = -\n1\n4x + 2",
      "f (x) = -\n1\n4x + 8"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 15,
    "text": "x + 2y = 16 \n    0.5x – y = 10 \nThe solution to the system of equations above is (x, y). What is the value of x?",
    "options": [
      "-2",
      "2",
      "18",
      "36"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 16,
    "text": "x + y = 21 \n    x – 2y = -3 \nAccording to the system of equations above, what is the value of x?",
    "options": [
      "6",
      "8",
      "13",
      "15"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 17,
    "text": "2x – y = -4 \n     2x + y = 4 \nFor the solution of the system of equations above, what is the value of x?",
    "options": [
      "-4",
      "-2",
      "0",
      "2"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 18,
    "text": "y ≥ -2x + 11 \n       y > 3x – 9 \nIn the xy-plane, point A is contained in the graph of the solution set of the system \nof inequalities above. Which of the following could be the coordinates of point A?",
    "options": [
      "(2, 1)",
      "(4, 1)",
      "(4, 5)",
      "(6, 6)"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 19,
    "text": "Jonathan needs to earn at least $175 next week and can work at most 20 \nhours. He earns $10 per hour at his lawn service job and $8 per hour at his job at \nthe gym. Which of the following systems of inequalities represents this situation in \nterms of the number of hours he will work at his lawn service job, l, and the \nnumber of hours he will work at his job at the gym, g, next week?",
    "options": [
      "10l + 8g ≤ 175 \nl + g ≤ 20",
      "10l + 8g ≤ 175 \nl + g ≥ 20",
      "10l + 8g ≥ 175 \nl + g ≤ 20",
      "10l + 8g ≥ 20 \nl + g ≥ 175"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 20,
    "text": "During an ice age, the average annual global temperature was at least 4 \ndegrees Celsius lower than the modern average. If the average annual \ntemperature of an ice age is y degrees Celsius and the modern average annual \ntemperature is x degrees Celsius, which of the following must be true?",
    "options": [
      "y = x – 4",
      "y ≤ x + 4",
      "y ≥ x – 4",
      "y ≤ x – 4"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 21,
    "text": "If x > 0, which of the following is equivalent to \n1\n𝑥 + \n1\n2𝑥 ?",
    "options": [
      "1\n𝑥",
      "1\n2𝑥",
      "3\n2𝑥",
      "2\n3𝑥"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 22,
    "text": "Which expression is equivalent to (2𝑥2 + 3x – 2) – (5𝑥2 – x – 7)?",
    "options": [
      "7𝑥2 + 4x + 9",
      "3𝑥2 + 4x + 5",
      "-3𝑥2 + 2x - 9",
      "-3𝑥2 + 4x + 5"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 23,
    "text": "Which expression is equivalent to √𝑥3\n5\n. √𝑥  \n5\n, where x > 0?",
    "options": [
      "𝑥\n4\n5",
      "𝑥\n5\n4",
      "𝑥\n3\n25",
      "𝑥\n25\n3"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 24,
    "text": "x (x + 2) = 8 \nWhich of the following lists all solutions to the quadratic equation above?",
    "options": [
      "8 and 6",
      "4 and - 2",
      "- 4 and 2",
      "√6"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
  },
  {
    "id": 25,
    "text": "𝑥2 – 6x + 11 = y \n       x = y + 1 \nThe system of equations above is graphed in the xy-plane. Which of the following is \nthe y-coordinate of an intersection point (x, y) of the graphs of the two equations?",
    "options": [
      "-4",
      "-2",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "Explanation not fully parsed.",
    "topic": "LINEAR EQUATION IN ONE VARIABLE & LINEAR EQUATION IN TWO VARIABLES"
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
