
const QUESTIONS = [
  {
    id: 1,
    text: `Read the following sentence and choose the best version of the underlined part.

Original Sentence: "The committee discussed the plan for more than three hours, but they couldn't reach a consensus."

Which choice correctly uses pronoun-antecedent agreement?`,
    options: [
      'but they couldn\'t reach a consensus.',
      'but it couldn\'t reach a consensus.',
      'however they couldn\'t reach a consensus.',
      'yet they couldn\'t reach a consensus.'
    ],
    answer: 1,
    explanation: '"Committee" is a collective noun and takes the singular pronoun "it." Option C adds an unnecessary connector, and D is redundant with "but."',
    topic: 'Pronoun Agreement'
  },
  {
    id: 2,
    text: `Read the following sentence and choose the best version of the underlined part.

Original Sentence: "If the weather is nice, we can have the picnic outside, otherwise, we will stay indoors."

Which choice correctly uses punctuation to join these two independent clauses?`,
    options: [
      'outside, otherwise, we will stay indoors.',
      'outside; otherwise, we will stay indoors.',
      'outside otherwise, we will stay indoors.',
      'outside. Otherwise we will stay indoors.'
    ],
    answer: 1,
    explanation: 'A semicolon before a conjunctive adverb like "otherwise" correctly joins two independent clauses. A comma alone creates a comma splice (A), and C omits necessary punctuation entirely.',
    topic: 'Punctuation'
  },
  {
    id: 3,
    text: `Read the following sentence and choose the best version of the underlined part.

Original Sentence: "She likes to jog every morning; however, she enjoys the fresh air and quietness."

The semicolon usage here is problematic because the second clause does not contrast with the first. Which revision best fixes the logical and punctuation issue?`,
    options: [
      'morning; however, she enjoys',
      'morning; she enjoys',
      'morning, however, she enjoys',
      'morning; however she enjoys'
    ],
    answer: 1,
    explanation: '"However" implies contrast, but both clauses say the same thing. Removing "however" and using just a semicolon creates a correct compound sentence without false contrast. Option C creates a comma splice with "however" used as an interrupter.',
    topic: 'Punctuation'
  },
  {
    id: 4,
    text: `Read the following sentence and choose the best version of the underlined part.

Original Sentence: "Sheila and her friend visited the museum, and they found it to be both educational and fun."

Which choice most effectively combines the ideas while maintaining clarity and correct grammar?`,
    options: [
      'Sheila and her friend visited the museum, and they found it to be both educational and fun.',
      'Sheila and her friend visited the museum; they found it to be both educational and fun.',
      'Sheila and her friend visited the museum: they found it to be both educational and fun.',
      'Sheila and her friend visited the museum because they found it to be both educational and fun.'
    ],
    answer: 1,
    explanation: 'A semicolon correctly joins two related independent clauses without a coordinator. Option C (colon) is incorrect as the second clause does not explain the first. Option D changes the meaning by implying the reason for visiting.',
    topic: 'Punctuation'
  },
  {
    id: 5,
    text: `Read the following sentence and choose the best version of the underlined part.

Original Sentence: "The manager's feedback was valuable it helped the employees improve their performance."

This sentence contains a run-on error. Which choice correctly fixes it?`,
    options: [
      'valuable it helped',
      'valuable; it helped',
      'valuable: it helped',
      'valuable, and it helped'
    ],
    answer: 1,
    explanation: 'A semicolon correctly separates two independent clauses. Option C (colon) works only if the second clause explains the first directly — here a semicolon is more natural. Option D (comma + conjunction) is also acceptable but B is the most concise correction.',
    topic: 'Punctuation'
  },
  {
    id: 6,
    text: `Read the following sentence and choose the best version of the underlined part.

Original Sentence: "After the meeting ended, the team members discussed their strategies in the conference room."

Which version uses the correct verb form in the introductory clause?`,
    options: [
      'ended, the team members discussed',
      'ending, the team members discussed',
      'ended the team members discussed',
      'ended; the team members discussed'
    ],
    answer: 0,
    explanation: '"After the meeting ended" is a correctly formed subordinate clause using the past tense verb "ended." Option B creates a dangling modifier. Option C omits the comma needed after an introductory clause.',
    topic: 'Sentence Structure'
  },
  {
    id: 7,
    text: `Read the following sentence and choose the best version of the underlined part.

Original Sentence: "The new policy was implemented, but it had a significant impact on employee morale."

The conjunction "but" implies contrast. Which revision better expresses the intended meaning — that the impact was a consequence of the policy?`,
    options: [
      'but it had a significant impact',
      'and it had a significant impact',
      'however it had a significant impact',
      'while it had a significant impact'
    ],
    answer: 1,
    explanation: '"And" correctly joins two related events without implying contrast. "But" (A) wrongly implies surprise or opposition. "However" (C) without a comma is incorrect. "While" (D) implies simultaneity, not consequence.',
    topic: 'Transitions & Conjunctions'
  },
  {
    id: 8,
    text: `Which sentence would best introduce a paragraph about the importance of exercise for mental health?`,
    options: [
      'Exercise can help people lose weight and improve cardiovascular health.',
      'Many people enjoy running as a form of exercise.',
      'Regular physical activity has been shown to significantly improve mental well-being.',
      'It is important to find an exercise routine that fits your schedule.'
    ],
    answer: 2,
    explanation: 'Option C directly states the main claim of the paragraph — that exercise improves mental health. Options A and B are off-topic (physical health and preference, respectively), and D focuses on scheduling rather than the mental health benefits.',
    topic: 'Rhetorical Skills'
  },
  {
    id: 9,
    text: `Which sentence would best conclude a paragraph about the benefits of a plant-based diet?`,
    options: [
      'Many people find it difficult to maintain a plant-based diet.',
      'It\'s important to consult a doctor before making any major dietary changes.',
      'In summary, a plant-based diet can lead to numerous health benefits, including lower cholesterol and reduced risk of heart disease.',
      'Some people prefer to eat meat and dairy products.'
    ],
    answer: 2,
    explanation: 'A concluding sentence should summarize the paragraph\'s main point. Option C does this directly. Options A, B, and D introduce new ideas or shift focus rather than concluding the paragraph\'s argument.',
    topic: 'Rhetorical Skills'
  },
  {
    id: 10,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "To ensure fairness, all candidates were given the same set of questions."

The underlined portion is: "To ensure fairness"`,
    options: [
      'It provides an example.',
      'It explains the reason for an action.',
      'It contrasts with the previous statement.',
      'It introduces a new topic.'
    ],
    answer: 1,
    explanation: '"To ensure fairness" is an infinitive phrase that explains the purpose (reason) behind the action — giving all candidates the same questions. It is a reason/purpose, not an example, contrast, or new topic.',
    topic: 'Sentence Function'
  },
  {
    id: 11,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "By conducting a thorough review, the researcher ensured that all data was accurate."

The underlined portion is: "By conducting a thorough review"`,
    options: [
      'It explains the reason for an action.',
      'It provides an example.',
      'It contrasts with the previous statement.',
      'It introduces a new topic.'
    ],
    answer: 0,
    explanation: '"By conducting a thorough review" is a prepositional phrase explaining HOW (and thus WHY) the researcher ensured accuracy — it describes the method/reason for the action.',
    topic: 'Sentence Function'
  },
  {
    id: 12,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "Despite the rain, the festival continued as planned."

The underlined portion is: "Despite the rain"`,
    options: [
      'It provides an example.',
      'It explains the reason for an action.',
      'It contrasts with the previous statement.',
      'It introduces a new topic.'
    ],
    answer: 2,
    explanation: '"Despite the rain" introduces a contrasting condition — we would expect rain to cancel the festival, but it continued anyway. This is a classic contrast/concession structure.',
    topic: 'Sentence Function'
  },
  {
    id: 13,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "Despite the initial setbacks, the project was completed on time."

The underlined portion is: "Despite the initial setbacks"`,
    options: [
      'It introduces a contrast.',
      'It provides an example.',
      'It explains a cause.',
      'It offers a solution.'
    ],
    answer: 0,
    explanation: '"Despite" signals concession/contrast. The setbacks would normally prevent completion, yet the project finished on time. This is a contrast, not a cause or solution.',
    topic: 'Sentence Function'
  },
  {
    id: 14,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "Given the limited budget, the team decided to focus on the most critical issues first."

The underlined portion is: "Given the limited budget"`,
    options: [
      'It introduces a consequence.',
      'It provides a contrast.',
      'It explains a reason.',
      'It introduces a new argument.'
    ],
    answer: 2,
    explanation: '"Given the limited budget" is an absolute phrase that provides the reason or condition explaining why the team prioritized critical issues. It is not a contrast — the decision logically follows from the constraint.',
    topic: 'Sentence Function'
  },
  {
    id: 15,
    text: `Which choice best completes the sentence with relevant and precise information?

Sentence: "The new software update improved the system's security, ______________."`,
    options: [
      'which was very helpful.',
      'reducing the risk of data breaches.',
      'and everyone liked it.',
      'although some features were not fixed.'
    ],
    answer: 1,
    explanation: 'Option B adds specific, relevant detail directly tied to security improvement. Options A and C are vague and add little meaning. Option D shifts tone and introduces an unrelated idea about features.',
    topic: 'Precision & Word Choice'
  },
  {
    id: 16,
    text: `Which sentence best transitions from a discussion about the challenges of climate change to potential solutions?`,
    options: [
      'Climate change is a pressing issue affecting all parts of the world.',
      'It is important to understand the causes of climate change.',
      'Many scientists are working on innovative solutions to mitigate the effects of climate change.',
      'Some regions are more vulnerable to climate change impacts.'
    ],
    answer: 2,
    explanation: 'Option C pivots from the problem (challenges) to the solution (scientists working on fixes), making it the ideal transition. Options A, B, and D stay in the "problem/background" territory without moving toward solutions.',
    topic: 'Transitions & Conjunctions'
  },
  {
    id: 17,
    text: `Which sentence would best support a paragraph discussing the impact of social media on communication?`,
    options: [
      'Many people use social media platforms daily.',
      'Some people prefer face-to-face communication over social media.',
      'It is important to use social media responsibly.',
      'Social media has revolutionized the way people communicate, allowing instant and widespread sharing of information.'
    ],
    answer: 3,
    explanation: 'Option D directly addresses the impact of social media on communication with specific detail. The other options are either too vague (A, C) or tangentially related (B) without supporting the paragraph\'s central claim.',
    topic: 'Rhetorical Skills'
  },
  {
    id: 18,
    text: `Which sentence would best support a paragraph about the importance of sleep for overall health?`,
    options: [
      'Many people struggle to get enough sleep each night.',
      'Adequate sleep is essential for maintaining cognitive function, emotional stability, and physical health.',
      'Some individuals can function well on less sleep than others.',
      'It is recommended to establish a regular sleep schedule.'
    ],
    answer: 1,
    explanation: 'Option B makes the strongest direct claim about sleep\'s importance with specific health dimensions. Options A, C, and D are either anecdotal, exceptions, or general advice that don\'t directly support a claim about health importance.',
    topic: 'Rhetorical Skills'
  },
  {
    id: 19,
    text: `Which sentence would best introduce a paragraph about the benefits of learning a second language?`,
    options: [
      'Learning a second language can open up numerous career opportunities and enhance cognitive abilities.',
      'Many people struggle to learn a second language.',
      'Some people start learning a new language at an early age.',
      'It\'s important to practice speaking a new language regularly.'
    ],
    answer: 0,
    explanation: 'Option A directly states the main point of the paragraph (benefits: career and cognitive). It serves as a clear topic sentence. Options B, C, and D address challenges, timing, and practice — not benefits.',
    topic: 'Rhetorical Skills'
  },
  {
    id: 20,
    text: `Which sentence would best support a paragraph about the benefits of regular exercise?`,
    options: [
      'Many people go to the gym to work out.',
      'Regular exercise has been shown to improve mental health, boost energy levels, and reduce the risk of chronic diseases.',
      'Some people prefer jogging in the park.',
      'It is important to wear proper footwear when exercising.'
    ],
    answer: 1,
    explanation: 'Option B directly supports the topic of exercise benefits with three specific, evidence-based claims. Options A, C, and D are observations about habits or tangential advice, not arguments about benefits.',
    topic: 'Rhetorical Skills'
  },
  {
    id: 21,
    text: `Which sentence best concludes a paragraph about the importance of sustainable agriculture?`,
    options: [
      'Sustainable agriculture can also lead to economic benefits for farmers.',
      'Some farmers are resistant to changing traditional farming methods.',
      'It is important to research sustainable practices before implementing them.',
      'Many consumers prefer to buy organic products.'
    ],
    answer: 0,
    explanation: 'Option A reinforces the paragraph\'s argument by adding that economic benefits — in addition to environmental ones — make sustainable agriculture important. It broadens the case. Options B, C, and D introduce resistance, caution, and consumer preference that don\'t conclude the argument.',
    topic: 'Rhetorical Skills'
  },
  {
    id: 22,
    text: `Read the passage and answer the question.

Passage: "In recent years, the popularity of electric cars has surged. This increase can be attributed to advancements in battery technology, government incentives, and growing environmental awareness among consumers."

What is the main idea of this passage?`,
    options: [
      'Electric cars are too expensive for most consumers.',
      'Battery technology has not improved in recent years.',
      'Government incentives have decreased interest in electric cars.',
      'The popularity of electric cars is increasing due to several factors.'
    ],
    answer: 3,
    explanation: 'The passage states that electric car popularity has "surged" and gives three reasons. Option D accurately captures this main idea. Options A, B, and C contradict or distort what the passage actually says.',
    topic: 'Reading Comprehension'
  },
  {
    id: 23,
    text: `Read the passage and answer the question.

Passage: "The rapid growth of e-commerce has transformed the retail industry. Online shopping platforms offer convenience, a wide range of products, and competitive prices. However, this shift has also led to challenges for traditional brick-and-mortar stores, which must adapt to remain competitive."

What is one advantage of e-commerce mentioned in the passage?`,
    options: [
      'Limited product selection.',
      'Higher costs for consumers.',
      'Increased foot traffic in physical stores.',
      'Convenience and competitive prices.'
    ],
    answer: 3,
    explanation: 'The passage explicitly lists "convenience" and "competitive prices" as advantages of online shopping. Options A, B, and C either contradict the passage or mention things not stated as advantages.',
    topic: 'Reading Comprehension'
  },
  {
    id: 24,
    text: `Read the passage and answer the question.

Passage: "The field of renewable energy is rapidly evolving, with significant advancements in solar, wind, and hydropower technologies. These renewable sources are essential for reducing greenhouse gas emissions and combating climate change. Governments and private companies are investing heavily in renewable energy projects to ensure a sustainable future."

What is one reason renewable energy sources are important according to the passage?`,
    options: [
      'They are more expensive than fossil fuels.',
      'They help reduce greenhouse gas emissions.',
      'They are the only energy sources available.',
      'They rely on non-renewable resources.'
    ],
    answer: 1,
    explanation: 'The passage directly states that renewable sources "are essential for reducing greenhouse gas emissions." Option A contradicts cost advantages implied, C is too absolute, and D is factually wrong — renewables are the opposite of non-renewable.',
    topic: 'Reading Comprehension'
  },
  {
    id: 25,
    text: `The following sentence contains an error in modifier placement. Choose the version that correctly places the modifier.

Original Sentence: "Walking through the park, the flowers were beautiful."

Which revision correctly attributes the action to a logical subject?`,
    options: [
      'Walking through the park, the flowers were beautiful.',
      'The flowers, walking through the park, were beautiful.',
      'Walking through the park, she admired the beautiful flowers.',
      'She admired the flowers, walking through the park, which were beautiful.'
    ],
    answer: 2,
    explanation: 'The original sentence has a dangling modifier — "walking through the park" must refer to a person, not flowers. Option C correctly places "she" as the subject performing the action. Options A and B retain the dangling modifier; D is awkward and ambiguous.',
    topic: 'Modifiers'
  }
];

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP = {
  'Grammar & Usage': {
    name: 'Grammar & Usage',
    questions: QUESTIONS.map(q => q.id)
  }
};
