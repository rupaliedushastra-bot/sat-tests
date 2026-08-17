// =============================================
// Digital SAT Practice - Topic: topic_probability_and_conditional_probability
// 25 Questions
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "useImage": true,
    "imageKey": "q1_dotplot",
    "text": "The dot plot shows a data set: 2, 3, 3, 5, 7, 7, 7, 9. What is the mean of this data set?",
    "options": [
      "5",
      "5.375",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The mean is the sum of all values divided by the number of values: ( \\frac{2+3+3+5+7+7+7+9}{8} ) = (\\frac{43}{8}) = 5.375. A) Incorrect; this would be the median, not the mean. C) Incorrect; rounds incorrectly. D) Incorrect; this is the mode, not the mean.",
    "topic": "Mean"
  },
  {
    "id": 2,
    "text": "What is the median of the data set: 4, 8, 1, 9, 5?",
    "options": [
      "4",
      "5",
      "8",
      "9"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. To find the median, first arrange the values in order: 1, 4, 5, 8, 9. Since there are 5 values (an odd number), the median is the middle value, which is 5. A) Incorrect; this is the second value in the ordered list, not the middle. C), D) Incorrect; these are values to the right of the middle, not the median.",
    "topic": "Median"
  },
  {
    "id": 3,
    "text": "What is the median of the data set: 3, 7, 9, 12, 18, 20?",
    "options": [
      "9",
      "10.5",
      "12",
      "15"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Since there are 6 values (an even number), the median is the average of the two middle values (9 and 12): ( \\frac{9 + 12}{2} ) = (\\frac{21}{2}) = 10.5. A) Incorrect; this is only one of the two middle values. C) Incorrect; this is the other middle value alone. D) Incorrect; arithmetic error in averaging the two middle values.",
    "topic": "Median"
  },
  {
    "id": 4,
    "text": "What is the mode of the data set: 2, 4, 4, 6, 8, 4, 10?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The mode is the value that appears most frequently in the data set. The value 4 appears three times, more than any other value, so the mode is 4. A), C), D) Incorrect; each of these values appears only once in the data set.",
    "topic": "Mode"
  },
  {
    "id": 5,
    "useImage": true,
    "imageKey": "q5_boxplot",
    "text": "The box plot shows the distribution of test scores. The box (interquartile range) extends from 22 to 40, with a median line at 28. What does the median of 28 represent?",
    "options": [
      "The average of all the test scores",
      "The most frequently occurring test score",
      "The middle value when all test scores are arranged in order",
      "The difference between the highest and lowest test scores"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The median is the middle value of a data set when arranged in order from least to greatest, dividing the data into two equal halves. A) Incorrect; this describes the mean, not the median. B) Incorrect; this describes the mode. D) Incorrect; this describes the range.",
    "topic": "Median & Box Plots"
  },
  {
    "id": 6,
    "text": "What is the range of the data set: 12, 45, 23, 8, 36?",
    "options": [
      "8",
      "23",
      "37",
      "45"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The range is the difference between the maximum and minimum values in a data set: ( 45 - 8 = 37 ). A) Incorrect; this is the minimum value alone. B) Incorrect; this is a value within the data set, not a difference. D) Incorrect; this is the maximum value alone, not the range.",
    "topic": "Range"
  },
  {
    "id": 7,
    "text": "If the average (arithmetic mean) of three numbers is 15, and the first two numbers are 12 and 18, what is the third number?",
    "options": [
      "12",
      "15",
      "18",
      "20"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let the third number be x. The average of the three numbers is ( \\frac{12 + 18 + x}{3} = 15 ). Multiplying both sides by 3 gives ( 30 + x = 45 ), so ( x = 15 ). A) Incorrect; results from misunderstanding the average calculation. C) Incorrect; this is one of the numbers given in the problem, not the unknown third number. D) Incorrect; arbitrary value not related to the calculation.",
    "topic": "Mean & Word Problems"
  },
  {
    "id": 8,
    "text": "Which measure of central tendency is most affected by an extreme outlier in a data set?",
    "options": [
      "Mean",
      "Median",
      "Mode",
      "Range"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The mean is calculated using the sum of all values, so a single extremely large or small value (an outlier) can significantly shift the mean. B) Incorrect; the median depends only on the position of values, not their exact magnitude, so it is resistant to outliers. C) Incorrect; the mode depends on frequency, not magnitude, so it is generally unaffected by a single outlier. D) Incorrect; the range is a measure of spread, not central tendency, though it is also affected by outliers — but the question specifically asks about central tendency.",
    "topic": "Mean vs. Median (Outliers)"
  },
  {
    "id": 9,
    "useImage": true,
    "imageKey": "q9_barchart",
    "text": "The bar chart shows the results of a survey of 30 students about their favorite color. Based on the chart, what is the mode of this data set?",
    "options": [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The mode is the category with the highest frequency. According to the bar chart, \"Blue\" has the tallest bar (7 students), more than any other color, making it the mode. A), C), D) Incorrect; these colors have lower frequencies than \"Blue\" according to the chart.",
    "topic": "Mode & Data Displays"
  },
  {
    "id": 10,
    "text": "A standard six-sided die is rolled once. What is the probability of rolling a number greater than 4?",
    "options": [
      "(\frac{1}{6})",
      "(\frac{1}{3})",
      "(\frac{1}{2})",
      "(\frac{2}{3})"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. A standard die has the numbers 1 through 6. The numbers greater than 4 are 5 and 6, which is 2 out of 6 possible outcomes. The probability is (\\frac{2}{6}) = (\\frac{1}{3}). A) Incorrect; this would be the probability of rolling a single specific number. C), D) Incorrect; overcounts the favorable outcomes greater than 4.",
    "topic": "Basic Probability"
  },
  {
    "id": 11,
    "text": "A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. If one marble is drawn at random, what is the probability that it is blue?",
    "options": [
      "(\frac{1}{10})",
      "(\frac{3}{10})",
      "(\frac{1}{5})",
      "(\frac{1}{2})"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. There are 5 + 3 + 2 = 10 marbles total, and 3 of them are blue. The probability of drawing a blue marble is (\\frac{3}{10}). A) Incorrect; this would be the probability of drawing a green marble divided incorrectly. C) Incorrect; this equals (\\frac{2}{10}), the probability of drawing green, not blue. D) Incorrect; overestimates the proportion of blue marbles.",
    "topic": "Basic Probability"
  },
  {
    "id": 12,
    "useImage": true,
    "imageKey": "q12_scatterplot",
    "text": "The scatterplot shows the relationship between hours studied and test scores, along with a line of best fit. Based on the scatterplot, what type of correlation exists between hours studied and test score?",
    "options": [
      "Strong positive correlation",
      "Strong negative correlation",
      "No correlation",
      "Strong negative, then positive correlation"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. As the number of hours studied increases, the test scores also tend to increase, and the points cluster fairly closely around an upward-sloping line of best fit, indicating a strong positive correlation. B) Incorrect; a negative correlation would show test scores decreasing as hours studied increases, which is not the pattern shown. C) Incorrect; the points show a clear upward trend, not a random scatter. D) Incorrect; this describes a non-linear pattern, which does not match the scatterplot.",
    "topic": "Scatterplots & Correlation"
  },
  {
    "id": 13,
    "text": "Two coins are flipped. What is the probability that both coins land on heads?",
    "options": [
      "(\frac{1}{2})",
      "(\frac{1}{3})",
      "(\frac{1}{4})",
      "(\frac{1}{8})"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Each coin has 2 possible outcomes (heads or tails), so flipping two coins gives 2 × 2 = 4 total equally likely outcomes: HH, HT, TH, TT. Only one of these (HH) has both coins landing on heads, so the probability is (\\frac{1}{4}). A) Incorrect; this is the probability of getting heads on a single coin flip. B) Incorrect; does not correspond to any standard outcome calculation here. D) Incorrect; this would be the probability for three independent events, not two.",
    "topic": "Compound Probability"
  },
  {
    "id": 14,
    "text": "A spinner is divided into 4 equal sections numbered 1 through 4. What is the probability of NOT spinning a 2?",
    "options": [
      "(\frac{1}{4})",
      "(\frac{1}{3})",
      "(\frac{1}{2})",
      "(\frac{3}{4})"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The probability of spinning a 2 is (\\frac{1}{4}) (one favorable outcome out of four equally likely sections). The probability of NOT spinning a 2 is the complement: 1 − (\\frac{1}{4}) = (\\frac{3}{4}). A) Incorrect; this is the probability of spinning a 2, not the complement. B), C) Incorrect; do not correctly apply the complement rule for this scenario.",
    "topic": "Complementary Probability"
  },
  {
    "id": 15,
    "useImage": true,
    "imageKey": "q15_twowaytable",
    "text": "The two-way table shows the results of a survey about pizza preference among 50 students. Based on the table, what is the probability that a randomly selected student is a girl who likes pizza?",
    "options": [
      "(\frac{18}{50})",
      "(\frac{20}{50})",
      "(\frac{20}{25})",
      "(\frac{38}{50})"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. According to the table, 20 girls like pizza out of a total of 50 students surveyed. The probability is (\\frac{20}{50}). A) Incorrect; this is the number of boys who like pizza, not girls. C) Incorrect; this gives the probability that a girl likes pizza given that the student is a girl (a conditional probability), not the overall probability among all 50 students. D) Incorrect; this is the total number of students (boys and girls) who like pizza, not just girls.",
    "topic": "Two-Way Tables & Probability"
  },
  {
    "id": 16,
    "text": "In the same pizza preference survey of 50 students (38 like pizza, 12 dislike pizza), if a student is selected at random and it is known that the student likes pizza, what additional information would be needed to find the conditional probability that the student is a girl?",
    "options": [
      "The total number of students surveyed",
      "The number of girls who like pizza and the total number of students who like pizza",
      "The number of boys who dislike pizza",
      "No additional information is needed; it is the same as the unconditional probability"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Conditional probability P(girl | likes pizza) = (number of girls who like pizza) / (total number of students who like pizza). To calculate this, both the number of girls who like pizza and the total number of students who like pizza are needed. A) Incorrect; the total number of students surveyed is not used in this conditional probability calculation. C) Incorrect; the number of boys who dislike pizza is not relevant to this particular conditional probability. D) Incorrect; conditional probability restricts the sample space to only those who like pizza, which generally changes the probability compared to the unconditional case.",
    "topic": "Conditional Probability"
  },
  {
    "id": 17,
    "text": "If the standard deviation of a data set is small, what does this indicate about the data?",
    "options": [
      "The values are spread far apart from the mean",
      "The values are close to the mean",
      "The data set has many outliers",
      "The mean of the data set is small"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Standard deviation measures the amount of variation or dispersion in a data set. A small standard deviation means the values are clustered close to the mean. A) Incorrect; this describes a large standard deviation, not a small one. C) Incorrect; many outliers would tend to increase the standard deviation, not keep it small. D) Incorrect; the standard deviation describes spread, and is independent of the actual value of the mean.",
    "topic": "Standard Deviation"
  },
  {
    "id": 18,
    "useImage": true,
    "imageKey": "q18_spinner",
    "text": "The spinner shown is divided into 4 equal sections labeled 1, 2, 3, and 4. If the spinner is spun once, what is the probability of landing on an even number?",
    "options": [
      "(\frac{1}{4})",
      "(\frac{1}{2})",
      "(\frac{3}{4})",
      "1"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The even numbers on the spinner are 2 and 4, which is 2 out of 4 equally likely sections. The probability is (\\frac{2}{4}) = (\\frac{1}{2}). A) Incorrect; this would be the probability of landing on a single specific number. C), D) Incorrect; overestimates the proportion of even-numbered sections.",
    "topic": "Basic Probability"
  },
  {
    "id": 19,
    "text": "A jar contains 4 red candies and 6 blue candies. If one candy is drawn and eaten (not replaced), and then a second candy is drawn, what is the probability that both candies are red?",
    "options": [
      "(\frac{4}{10}) × (\frac{4}{10})",
      "(\frac{4}{10}) × (\frac{3}{9})",
      "(\frac{4}{10}) × (\frac{4}{9})",
      "(\frac{6}{10}) × (\frac{5}{9})"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Since the first candy is not replaced, the probability of drawing red the first time is (\\frac{4}{10}), and after one red candy is removed, there are 3 red candies left out of 9 total. So the probability of both being red is (\\frac{4}{10}) × (\\frac{3}{9}). A) Incorrect; this assumes replacement, which is not the case here (\"without replacement\"). C) Incorrect; uses the wrong total for the second draw. D) Incorrect; this calculates the probability for blue candies, not red.",
    "topic": "Probability Without Replacement"
  },
  {
    "id": 20,
    "useImage": true,
    "imageKey": "q20_dice",
    "text": "Two six-sided dice are rolled, as shown. What is the probability that the sum of the two dice equals 8?",
    "options": [
      "(\frac{1}{36})",
      "(\frac{5}{36})",
      "(\frac{6}{36})",
      "(\frac{1}{6})"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. There are 6 × 6 = 36 total equally likely outcomes when rolling two dice. The combinations that sum to 8 are: (2,6), (3,5), (4,4), (5,3), (6,2) — a total of 5 outcomes. The probability is (\\frac{5}{36}). A) Incorrect; this would be the probability of a single specific outcome (e.g., rolling exactly (4,4)). C) Incorrect; overcounts the number of combinations that sum to 8. D) Incorrect; this is approximately (\\frac{6}{36}), but the actual count of favorable outcomes for a sum of 8 is 5, not 6.",
    "topic": "Compound Probability (Dice)"
  },
  {
    "id": 21,
    "text": "If a data set has a mean of 50 and a standard deviation of 5, which value is most likely to be considered an outlier?",
    "options": [
      "48",
      "52",
      "55",
      "75"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. A common rule of thumb is that values more than 2-3 standard deviations from the mean are considered outliers. With a mean of 50 and a standard deviation of 5, a value of 75 is 5 standard deviations away from the mean (75 = 50 + 5×5), making it far more extreme than the other options and most likely to be an outlier. A), B), C) Incorrect; these values are within 1 standard deviation of the mean (between 45 and 55) and would not typically be considered outliers.",
    "topic": "Standard Deviation & Outliers"
  },
  {
    "id": 22,
    "useImage": true,
    "imageKey": "q22_histogram",
    "text": "The histogram shows the distribution of test scores for 28 students. Based on the histogram, how many students scored in the range of 80-89?",
    "options": [
      "3",
      "8",
      "12",
      "5"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. According to the histogram, the bar corresponding to the score range 80-89 has a height of 12, indicating that 12 students scored in this range. A), B), D) Incorrect; these values correspond to the heights of the other bars (60-69, 70-79, and 90-99 respectively), not the 80-89 range.",
    "topic": "Histograms"
  },
  {
    "id": 23,
    "text": "A survey asked 200 people whether they prefer coffee or tea, and 120 people said they prefer coffee. If one person from this survey is selected at random, what is the probability that the person prefers tea?",
    "options": [
      "(\frac{2}{5})",
      "(\frac{3}{5})",
      "(\frac{3}{10})",
      "(\frac{6}{10})"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Since 120 out of 200 people prefer coffee, the remaining 200 − 120 = 80 people prefer tea. The probability of selecting someone who prefers tea is (\\frac{80}{200}) = (\\frac{2}{5}). B) Incorrect; this is the probability of selecting someone who prefers coffee ((\\frac{120}{200}) = (\\frac{3}{5})), not tea. C) Incorrect; does not correctly represent the proportion of tea drinkers. D) Incorrect; this equals (\\frac{3}{5}), the same as the probability for coffee, not tea.",
    "topic": "Basic Probability & Complements"
  },
  {
    "id": 24,
    "useImage": true,
    "imageKey": "q24_piechart",
    "text": "The pie chart shows the distribution of favorite subjects among 200 students. Based on the pie chart, how many students chose Science as their favorite subject?",
    "options": [
      "40",
      "50",
      "70",
      "80"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. According to the pie chart, Science accounts for 25% of the 200 students. Calculating 25% of 200: 0.25 × 200 = 50 students. A) Incorrect; this would correspond to 20% of 200, not the 25% shown for Science. C) Incorrect; this would correspond to 35% of 200, which is the percentage shown for Math. D) Incorrect; this would correspond to 40% of 200, which does not match any single category shown.",
    "topic": "Pie Charts & Percentages"
  },
  {
    "id": 25,
    "text": "A survey of 100 people found that 60 own a car, 45 own a bicycle, and 25 own both a car and a bicycle. If one person from the survey is selected at random, what is the probability that the person owns a car or a bicycle (or both)?",
    "options": [
      "0.60",
      "0.70",
      "0.80",
      "1.05"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Using the addition rule for probability: P(car or bicycle) = P(car) + P(bicycle) − P(car and bicycle) = (\\frac{60}{100}) + (\\frac{45}{100}) − (\\frac{25}{100}) = (60 + 45 − 25)/100 = (\\frac{80}{100}) = 0.80. A) Incorrect; this is just P(car) alone. B) Incorrect; arithmetic error in applying the addition rule. D) Incorrect; this results from forgetting to subtract the overlap (the people who own both), leading to double-counting.",
    "topic": "Addition Rule for Probability"
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
