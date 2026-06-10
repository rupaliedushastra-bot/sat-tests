// =============================================
// Digital SAT – Topic Test 5: Rhetorical Skills
// 25 Questions | Single Timed Module (32 min)
// answers: 0=A, 1=B, 2=C, 3=D
// Source: Comprehensive Digital SAT Study Guide (Bitwise Books)
//         Digital SAT Prep 2025/2026 For Dummies (Ron Woldoff)
// =============================================

const QUESTIONS = [
  {
    id: 1,
    text: `Which sentence would best introduce a paragraph about the importance of exercise for mental health?`,
    options: [
      'Exercise can help people lose weight and improve cardiovascular health.',
      'Many people enjoy running as a form of exercise.',
      'Regular physical activity has been shown to significantly improve mental well-being.',
      'It is important to find an exercise routine that fits your schedule.'
    ],
    answer: 2,
    explanation: 'An introductory sentence must state the paragraph\'s main claim. Option C directly links exercise ("regular physical activity") to the paragraph\'s topic ("mental well-being"). Option A shifts to physical health benefits. Option B is a general observation about habits. Option D focuses on scheduling, not the importance of exercise for mental health.',
    topic: 'Topic Sentence'
  },
  {
    id: 2,
    text: `Which sentence would best introduce a paragraph about the benefits of learning a second language?`,
    options: [
      'Learning a second language can open up numerous career opportunities and enhance cognitive abilities.',
      'Many people struggle to learn a second language.',
      'Some people start learning a new language at an early age.',
      'It\'s important to practice speaking a new language regularly.'
    ],
    answer: 0,
    explanation: 'Option A directly states the topic (second language) and the paragraph\'s focus (benefits: career opportunities and cognitive abilities). Option B addresses challenges, not benefits. Options C and D discuss timing and practice — neither introduces the benefits a paragraph would argue.',
    topic: 'Topic Sentence'
  },
  {
    id: 3,
    text: `Which sentence would best introduce a paragraph about the advantages of electric vehicles?`,
    options: [
      'Some people still prefer gasoline-powered cars.',
      'Electric vehicles are becoming increasingly popular due to their environmental benefits and cost savings.',
      'Many companies are investing in renewable energy sources.',
      'It is important to reduce our carbon footprint.'
    ],
    answer: 1,
    explanation: 'Option B names the subject (electric vehicles), signals the focus (advantages), and gives specific examples (environmental benefits, cost savings). Option A focuses on gasoline cars. Option C shifts to companies and energy broadly. Option D makes a general environmental appeal with no connection to electric vehicles specifically.',
    topic: 'Topic Sentence'
  },
  {
    id: 4,
    text: `Which sentence would best conclude a paragraph about the benefits of regular exercise?`,
    options: [
      'Regular exercise can also improve mental health and boost mood.',
      'Some people find it difficult to maintain an exercise routine.',
      'It is important to consult a doctor before starting any new exercise program.',
      'Many people prefer to exercise outdoors.'
    ],
    answer: 0,
    explanation: 'A concluding sentence reinforces and expands the paragraph\'s argument. Option A adds the dimension of mental health to the case for regular exercise — a strong, on-topic conclusion. Options B, C, and D introduce challenges, caution, and preferences that shift away from arguing for exercise benefits.',
    topic: 'Concluding Sentence'
  },
  {
    id: 5,
    text: `Which sentence would best conclude a paragraph about the benefits of a plant-based diet?`,
    options: [
      'Many people find it difficult to maintain a plant-based diet.',
      'It\'s important to consult a doctor before making any major dietary changes.',
      'In summary, a plant-based diet can lead to numerous health benefits, including lower cholesterol and reduced risk of heart disease.',
      'Some people prefer to eat meat and dairy products.'
    ],
    answer: 2,
    explanation: 'Option C is explicitly a summary ("In summary") and restates the paragraph\'s main claim with specific supporting details (lower cholesterol, reduced heart disease risk). Options A, B, and D each introduce a new angle — difficulty, medical advice, or personal preference — none of which conclude the argument about plant-based diet benefits.',
    topic: 'Concluding Sentence'
  },
  {
    id: 6,
    text: `Which sentence would best conclude a paragraph about the importance of sustainable agriculture?`,
    options: [
      'Sustainable agriculture can also lead to economic benefits for farmers.',
      'Some farmers are resistant to changing traditional farming methods.',
      'It is important to research sustainable practices before implementing them.',
      'Many consumers prefer to buy organic products.'
    ],
    answer: 0,
    explanation: 'Option A broadens the argument by adding economic benefits to the case — a strong conclusion that reinforces importance. Option B introduces resistance (a counterpoint, not a conclusion). Options C and D pivot to research caution and consumer behavior, shifting focus away from the paragraph\'s central argument about importance.',
    topic: 'Concluding Sentence'
  },
  {
    id: 7,
    text: `Which sentence would best support a paragraph discussing the importance of sleep for teenagers?`,
    options: [
      'Many teenagers enjoy staying up late to play video games.',
      'Studies show that adequate sleep improves cognitive function and academic performance in teenagers.',
      'Some schools start classes very early in the morning.',
      'Teenagers often have busy schedules with extracurricular activities.'
    ],
    answer: 1,
    explanation: 'A supporting sentence must directly reinforce the paragraph\'s argument. Option B cites evidence ("studies show") and connects sleep to concrete outcomes relevant to teenagers (cognitive function, academic performance). Options A, C, and D describe habits, scheduling issues, and activities — none directly argue for the importance of sleep.',
    topic: 'Supporting Evidence'
  },
  {
    id: 8,
    text: `Which sentence would best support a paragraph about the impact of social media on communication?`,
    options: [
      'Many people use social media platforms daily.',
      'Some people prefer face-to-face communication over social media.',
      'It is important to use social media responsibly.',
      'Social media has revolutionized the way people communicate, allowing instant and widespread sharing of information.'
    ],
    answer: 3,
    explanation: 'Option D directly addresses the paragraph\'s claim — the impact of social media on communication — with a specific and strong assertion ("revolutionized") and a supporting detail (instant, widespread sharing). Options A and C are too vague or advisory. Option B introduces a contrasting preference, not support for the paragraph\'s argument about impact.',
    topic: 'Supporting Evidence'
  },
  {
    id: 9,
    text: `Which sentence would best support a paragraph about the benefits of regular exercise?`,
    options: [
      'Many people go to the gym to work out.',
      'Regular exercise has been shown to improve mental health, boost energy levels, and reduce the risk of chronic diseases.',
      'Some people prefer jogging in the park.',
      'It is important to wear proper footwear when exercising.'
    ],
    answer: 1,
    explanation: 'Option B makes a direct, evidence-based claim listing three specific benefits (mental health, energy levels, reduced disease risk). Options A and C describe preferences and habits without supporting any argument. Option D shifts to safety advice — tangential to exercise benefits.',
    topic: 'Supporting Evidence'
  },
  {
    id: 10,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "To ensure fairness, all candidates were given the same set of questions."

Underlined: "To ensure fairness"`,
    options: [
      'It provides an example.',
      'It explains the purpose of an action.',
      'It contrasts with the previous statement.',
      'It introduces a new topic.'
    ],
    answer: 1,
    explanation: '"To ensure fairness" is an infinitive phrase that explains WHY all candidates received the same questions — it states the purpose or reason behind the action. It is not an example (no specific instance is given), not a contrast (no opposing idea), and not a new topic (it directly relates to the main clause).',
    topic: 'Sentence Function'
  },
  {
    id: 11,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "By analyzing the data thoroughly, the scientists were able to draw accurate conclusions."

Underlined: "By analyzing the data thoroughly"`,
    options: [
      'It provides an example.',
      'It explains the method behind an action.',
      'It contrasts with the previous statement.',
      'It introduces a new topic.'
    ],
    answer: 1,
    explanation: '"By analyzing the data thoroughly" is a prepositional phrase explaining HOW (the method by which) the scientists drew accurate conclusions. It describes the means or process, not an example, a contrast, or a new topic.',
    topic: 'Sentence Function'
  },
  {
    id: 12,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "Despite the rain, the festival continued as planned."

Underlined: "Despite the rain"`,
    options: [
      'It provides an example of bad weather.',
      'It explains why the festival was cancelled.',
      'It introduces a contrasting condition.',
      'It adds supporting details.'
    ],
    answer: 2,
    explanation: '"Despite the rain" is a concession phrase — it introduces a condition that would normally prevent the festival from continuing, yet the festival happened anyway. This is a classic contrast/concession structure. It does not explain a cancellation (the festival continued) and is not an example or supporting detail.',
    topic: 'Sentence Function'
  },
  {
    id: 13,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "Because of her dedication, the team was able to meet its deadlines."

Underlined: "Because of her dedication"`,
    options: [
      'It provides an example.',
      'It explains the cause of an outcome.',
      'It contrasts with the previous statement.',
      'It introduces a new topic.'
    ],
    answer: 1,
    explanation: '"Because of her dedication" is a causal phrase that directly states the reason why the team met its deadlines. "Because of" is one of the clearest cause-effect signals in English. It is not an example, contrast, or new topic — it explains the cause of the stated result.',
    topic: 'Sentence Function'
  },
  {
    id: 14,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "In addition to her many talents, she is also a dedicated volunteer."

Underlined: "In addition to her many talents"`,
    options: [
      'It provides an example of her volunteering.',
      'It explains the reason for volunteering.',
      'It contrasts with the previous statement.',
      'It adds supplementary information.'
    ],
    answer: 3,
    explanation: '"In addition to her many talents" is an additive phrase — it signals that what follows is extra information layered on top of what is already known about her. It does not provide an example of volunteering, explain a reason, or introduce a contrast.',
    topic: 'Sentence Function'
  },
  {
    id: 15,
    text: `Which choice best describes the function of the underlined portion in the sentence?

Sentence: "By conducting a thorough review, the researcher ensured that all data was accurate."

Underlined: "By conducting a thorough review"`,
    options: [
      'It explains the method used to achieve an outcome.',
      'It introduces a contrasting approach.',
      'It provides a specific example of inaccurate data.',
      'It presents a new argument.'
    ],
    answer: 0,
    explanation: '"By conducting a thorough review" describes HOW the researcher ensured accuracy — it is a method phrase. "By + gerund" constructions in English typically explain the means or method used. It does not introduce contrast, give a specific data example, or present a new argument.',
    topic: 'Sentence Function'
  },
  {
    id: 16,
    text: `Which sentence best transitions from a discussion about the benefits of renewable energy to the challenges of its implementation?`,
    options: [
      'Renewable energy is critical for reducing carbon emissions.',
      'Many people support the use of solar and wind power.',
      'However, the cost and infrastructure required for renewable energy present significant challenges.',
      'It is important to invest in clean energy technologies.'
    ],
    answer: 2,
    explanation: 'A transition sentence must bridge two different ideas. Option C uses "However" to signal a pivot from benefits to challenges, and it explicitly introduces challenges (cost, infrastructure). Options A, B, and D all stay within the benefits/support territory and never pivot to challenges.',
    topic: 'Transitions Between Ideas'
  },
  {
    id: 17,
    text: `Which sentence best transitions from a paragraph about urban air pollution to one about solutions for cleaner cities?`,
    options: [
      'Air pollution in cities has been worsening for decades.',
      'Many urban residents suffer from respiratory issues caused by pollution.',
      'Addressing these challenges, however, requires innovative urban planning and stricter emissions standards.',
      'Scientists continue to study the long-term effects of urban pollution.'
    ],
    answer: 2,
    explanation: 'Option C signals a pivot ("however") from the problem (challenges) to the solution territory (innovative planning, emissions standards). Options A and B continue describing the problem. Option D introduces ongoing research — a continuation, not a pivot toward solutions.',
    topic: 'Transitions Between Ideas'
  },
  {
    id: 18,
    text: `The following passage is from a study on workplace productivity.

"Open-plan offices were introduced to encourage collaboration and communication between employees. Studies initially showed increased interaction among workers. _______ recent research has found that the constant noise and lack of privacy in open offices actually reduces focus and individual productivity."

Which transition best completes the passage?`,
    options: [
      'Furthermore,',
      'As a result,',
      'However,',
      'In addition,'
    ],
    answer: 2,
    explanation: '"However" is the correct transition because it signals a contrast: the passage moves from initial positive findings (increased interaction) to contradictory recent findings (reduced productivity). "Furthermore" and "In addition" would add more of the same point. "As a result" would imply the noise causes more interaction, which contradicts the passage.',
    topic: 'Transitions Between Ideas'
  },
  {
    id: 19,
    text: `The following passage is about the Mediterranean diet.

"The Mediterranean diet, rich in fruits, vegetables, whole grains, and healthy fats, has been associated with numerous health benefits. Research suggests that this diet can lower the risk of heart disease, improve brain function, and promote longevity."

Which sentence would best support the paragraph's main claim?`,
    options: [
      'Many people in Mediterranean countries eat large amounts of pasta.',
      'A 2020 study found that adherents of this diet had a 25% lower risk of cardiovascular disease compared to those on Western diets.',
      'The Mediterranean diet can be expensive to follow for low-income families.',
      'Some nutritionists debate whether olive oil is truly healthy.'
    ],
    answer: 1,
    explanation: 'Option B directly supports the claim that the Mediterranean diet lowers heart disease risk, with a specific statistic (25% lower risk) and a comparison to a control group — the strongest form of evidence. Option A is a stereotypical observation, not a health benefit. Options C and D introduce objections that would weaken, not support, the paragraph.',
    topic: 'Supporting Evidence'
  },
  {
    id: 20,
    text: `Read the following passage and answer the question.

"Volunteerism plays a crucial role in building strong communities. By dedicating their time and skills to various causes, volunteers help address social issues, support local organizations, and foster a sense of community. The impact of volunteer work can be seen in improved services and stronger social ties."

Which sentence would best support this paragraph?`,
    options: [
      'Volunteering takes time away from personal responsibilities.',
      'Some volunteers find the work emotionally exhausting.',
      'Research shows that communities with high volunteer participation report greater social cohesion and lower crime rates.',
      'Not all volunteers have the necessary skills for their assigned roles.'
    ],
    answer: 2,
    explanation: 'Option C directly reinforces the paragraph\'s claim that volunteerism builds strong communities by citing research evidence (social cohesion, lower crime rates). Options A, B, and D all introduce weaknesses or limitations of volunteering — they would undermine the paragraph\'s argument rather than support it.',
    topic: 'Supporting Evidence'
  },
  {
    id: 21,
    text: `Read the following passage and answer the question.

"Space exploration has led to numerous technological advancements. Innovations developed for space missions, such as satellite technology, have found applications in everyday life. These advancements have improved communication, navigation, and weather forecasting."

What is the main idea of this passage?`,
    options: [
      'Space exploration is too expensive to justify.',
      'Satellite technology is the only benefit of space missions.',
      'Space exploration has produced technological benefits that improve everyday life.',
      'Communication technology was invented entirely by space agencies.'
    ],
    answer: 2,
    explanation: 'The passage states that space exploration led to advancements (satellite technology) that now improve communication, navigation, and weather forecasting. Option C captures this main idea accurately. Option A contradicts the positive tone. Option B is too narrow (the passage mentions multiple benefits). Option D overstates — it says space agencies invented all communication technology.',
    topic: 'Main Idea'
  },
  {
    id: 22,
    text: `Read the following passage and answer the question.

"Online education has revolutionized the way people learn. It offers flexibility, allowing students to study at their own pace and from any location. This accessibility has made education more attainable for many individuals who might not have had the opportunity otherwise."

What is the central claim of this passage?`,
    options: [
      'Online education is inferior to traditional classroom learning.',
      'Only students in remote areas benefit from online education.',
      'Online education has expanded access to learning through flexibility and accessibility.',
      'Most students prefer online education to in-person schooling.'
    ],
    answer: 2,
    explanation: 'The passage argues that online education has changed learning by offering flexibility and accessibility, making education more attainable. Option C captures this claim precisely. Option A contradicts the passage\'s positive framing. Option B is too narrow. Option D makes a preference claim the passage never makes.',
    topic: 'Main Idea'
  },
  {
    id: 23,
    text: `Read the following passage and answer the question.

"Public transportation systems, such as buses and trains, play a crucial role in urban areas. They reduce traffic congestion, lower pollution levels, and provide an affordable mode of transportation for many people. Investing in public transportation infrastructure is essential for sustainable city development."

Which sentence would WEAKEN the argument made in this passage?`,
    options: [
      'A recent report showed that cities with expanded metro systems saw a 30% reduction in car usage.',
      'Public transportation is used daily by millions of commuters in major cities worldwide.',
      'Studies indicate that in low-density suburban areas, public transit is underutilized and often runs at a financial loss.',
      'Electric buses produce zero direct emissions, making them an environmentally friendly option.'
    ],
    answer: 2,
    explanation: 'The passage argues that public transportation is essential for sustainable city development. Option C weakens this by showing that in some areas (low-density suburbs), public transit is ineffective and financially unsustainable — directly challenging the claim that it is broadly essential. Options A, B, and D all support the passage\'s argument.',
    topic: 'Strengthen / Weaken'
  },
  {
    id: 24,
    text: `Read the following passage and answer the question.

"Reading fiction has numerous benefits for the mind. It can improve empathy by allowing readers to experience different perspectives. Additionally, reading fiction enhances creativity and reduces stress, making it a valuable activity for overall mental well-being."

Which sentence would most STRENGTHEN the argument in this passage?`,
    options: [
      'Some people find fiction unrealistic and prefer nonfiction.',
      'A neuroscience study found that reading literary fiction activates the same brain regions involved in real-life social reasoning.',
      'Many popular fiction novels are adapted into films each year.',
      'Reading habits have declined with the rise of digital media.'
    ],
    answer: 1,
    explanation: 'Option B directly strengthens the claim that reading fiction benefits the mind — specifically the claim about empathy — by citing neuroscience research showing that fiction activates social reasoning areas of the brain. Option A weakens the argument. Options C and D are tangential observations with no direct connection to the passage\'s benefits claims.',
    topic: 'Strengthen / Weaken'
  },
  {
    id: 25,
    text: `A student is writing a paragraph arguing that schools should extend the school year. The student wants to include a sentence that most effectively supports this argument.

Which of the following would be the best choice?`,
    options: [
      'Many students enjoy having long summer breaks to relax and travel with their families.',
      'Some teachers have expressed concerns about burnout from extended academic calendars.',
      'Research from several countries shows that students in longer school-year systems consistently outperform peers in core academic subjects.',
      'Extending the school year would require significant budget increases that many districts cannot afford.'
    ],
    answer: 2,
    explanation: 'Option C directly supports the argument for extending the school year by citing research evidence showing academic benefits (higher performance in core subjects). Options A, B, and D each provide reasons to oppose the extension — they would weaken the argument. A supporting sentence must align with and reinforce the paragraph\'s central claim.',
    topic: 'Supporting Evidence'
  }
];

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP = {
  'Rhetorical Skills': {
    name: 'Rhetorical Skills',
    questions: QUESTIONS.map(q => q.id)
  }
};