// =============================================
// Digital SAT – Topic Test 8: Research Notes Questions
// 25 Questions | Single Timed Module (32 min)
// answers: 0=A, 1=B, 2=C, 3=D
// Source: Comprehensive Digital SAT Study Guide (Bitwise Books)
// =============================================

const QUESTIONS = [

  // ── SET 1: Climate Change & Renewable Energy (Q1–5) ──────────────
  {
    id: 1,
    text: `A student is researching the relationship between fossil fuels and climate change. The student has taken the following notes:

• Many countries continue to rely heavily on fossil fuels for electricity generation.
• Fossil fuel combustion releases carbon dioxide and other greenhouse gases.
• Rising global temperatures are linked to increased greenhouse gas concentrations.
• Governments are encouraging adoption of renewable energy through subsidies.
• Renewable sources like solar and wind produce little to no greenhouse gas emissions.

The student wants to write a sentence that explains WHY fossil fuels contribute to climate change. Which choice best accomplishes this goal?`,
    options: [
      'Fossil fuels are widely used around the world for electricity generation.',
      'Governments have introduced subsidies to encourage the use of renewable energy sources.',
      'When burned, fossil fuels release greenhouse gases such as carbon dioxide, which trap heat in the atmosphere and raise global temperatures.',
      'Renewable energy sources like solar and wind power are becoming increasingly popular alternatives.'
    ],
    answer: 2,
    explanation: 'The student wants to explain the causal mechanism — WHY fossil fuels contribute to climate change. Only option C links combustion → greenhouse gas release → temperature rise in a single logical chain.',
    topic: 'Identify Purpose & Goal'
  },
  {
    id: 2,
    text: `A student is researching the relationship between fossil fuels and climate change. The student has taken the following notes:

• Many countries continue to rely heavily on fossil fuels for electricity generation.
• Fossil fuel combustion releases carbon dioxide and other greenhouse gases.
• Rising global temperatures are linked to increased greenhouse gas concentrations.
• Governments are encouraging adoption of renewable energy through subsidies.
• Renewable sources like solar and wind produce little to no greenhouse gas emissions.

The student wants to highlight the contrast between fossil fuels and renewable energy in terms of environmental impact. Which choice best accomplishes this goal?`,
    options: [
      'Both fossil fuels and renewable energy are used to generate electricity around the world.',
      'Fossil fuels release harmful greenhouse gases when burned, while renewable sources like solar and wind produce little to no emissions.',
      'Governments are providing financial incentives to help consumers switch to cleaner energy sources.',
      'Climate change is one of the most pressing global challenges of the twenty-first century.'
    ],
    answer: 1,
    explanation: 'The goal is to highlight a contrast in environmental impact. Option B directly juxtaposes the two: fossil fuels (harmful emissions) vs. renewables (little to no emissions).',
    topic: 'Contrast & Comparison'
  },
  {
    id: 3,
    text: `A student is researching the relationship between fossil fuels and climate change. The student has taken the following notes:

• Many countries continue to rely heavily on fossil fuels for electricity generation.
• Fossil fuel combustion releases carbon dioxide and other greenhouse gases.
• Rising global temperatures are linked to increased greenhouse gas concentrations.
• Governments are encouraging adoption of renewable energy through subsidies.
• Renewable sources like solar and wind produce little to no greenhouse gas emissions.

The student wants to write an introductory sentence for a paragraph about government policy responses to climate change. Which choice best accomplishes this goal?`,
    options: [
      'Fossil fuels remain the dominant source of energy in many nations worldwide.',
      'The link between greenhouse gas emissions and rising temperatures is well established.',
      'Recognizing the environmental damage caused by fossil fuels, many governments have begun offering subsidies to accelerate the transition to renewable energy.',
      'Solar and wind power produce no carbon emissions, making them environmentally preferable to coal and oil.'
    ],
    answer: 2,
    explanation: 'An introduction to a policy paragraph should mention both the problem (environmental damage from fossil fuels) and the policy response (government subsidies for renewables). Option C does both.',
    topic: 'Synthesis & Organization'
  },
  {
    id: 4,
    text: `A student is researching the relationship between fossil fuels and climate change. The student has taken the following notes:

• Many countries continue to rely heavily on fossil fuels for electricity generation.
• Fossil fuel combustion releases carbon dioxide and other greenhouse gases.
• Rising global temperatures are linked to increased greenhouse gas concentrations.
• Governments are encouraging adoption of renewable energy through subsidies.
• Renewable sources like solar and wind produce little to no greenhouse gas emissions.

Which of the following most accurately represents the overall argument supported by the student's notes?`,
    options: [
      'Fossil fuels are too expensive to replace with renewable alternatives.',
      'Fossil fuel use drives climate change through greenhouse gas emissions, and transitioning to renewables is a key solution.',
      'Climate change affects all countries equally, regardless of their energy sources.',
      'Government subsidies have already solved the problem of fossil fuel dependence.'
    ],
    answer: 1,
    explanation: 'The notes cover: fossil fuel dependence → emissions → climate impact → government response → renewables as alternative. Option B accurately captures this cause-problem-solution arc.',
    topic: 'Summarize Main Argument'
  },
  {
    id: 5,
    text: `A student is researching the relationship between fossil fuels and climate change. The student has taken the following notes:

• Many countries continue to rely heavily on fossil fuels for electricity generation.
• Fossil fuel combustion releases carbon dioxide and other greenhouse gases.
• Rising global temperatures are linked to increased greenhouse gas concentrations.
• Governments are encouraging adoption of renewable energy through subsidies.
• Renewable sources like solar and wind produce little to no greenhouse gas emissions.

The student wants to add a concluding sentence emphasizing the urgency of transitioning away from fossil fuels. Which choice best accomplishes this goal?`,
    options: [
      'More research is needed before any definitive conclusions can be drawn about the effects of fossil fuels.',
      'Given that fossil fuel emissions drive rising temperatures, and renewable alternatives are already available, the transition to clean energy is not merely desirable — it is necessary.',
      'Some countries have made progress in adopting solar panels for residential use.',
      'Fossil fuels will likely remain part of the global energy mix for many decades to come.'
    ],
    answer: 1,
    explanation: 'A concluding sentence about urgency should synthesize the problem, the availability of solutions, and a strong call to action. Option B does all three while conveying urgency through "not merely desirable — it is necessary."',
    topic: 'Conclusion & Emphasis'
  },

  // ── SET 2: Sleep & Cognitive Function (Q6–10) ──────────────
  {
    id: 6,
    text: `A student is writing a report on the effects of sleep on academic performance. The student has taken the following notes:

• A study of 1,000 participants found that 7–8 hours of sleep is linked to peak cognitive function.
• Sleeping fewer than 7 hours reduces memory consolidation and attention span.
• Sleeping more than 8 hours is also associated with lower cognitive scores.
• Teenagers on average get only 6.5 hours of sleep on school nights.
• Schools that shifted to later start times saw improved student GPA and attendance.

The student wants to write a sentence explaining the practical implication of this research for school policy. Which choice best accomplishes this goal?`,
    options: [
      'Most teenagers do not get the sleep they need due to early school start times.',
      'Sleeping too much can be just as harmful to cognition as sleeping too little.',
      'Since teenagers chronically undersleep and later start times have improved academic outcomes, research supports shifting school schedules to allow for adequate rest.',
      'Memory consolidation is one of the most important cognitive processes affected by sleep deprivation.'
    ],
    answer: 2,
    explanation: 'The student wants a practical implication for policy. Option C connects the data points (teen sleep deficit + evidence from later start times) and draws a policy conclusion — the exact goal.',
    topic: 'Identify Purpose & Goal'
  },
  {
    id: 7,
    text: `A student is writing a report on the effects of sleep on academic performance. The student has taken the following notes:

• A study of 1,000 participants found that 7–8 hours of sleep is linked to peak cognitive function.
• Sleeping fewer than 7 hours reduces memory consolidation and attention span.
• Sleeping more than 8 hours is also associated with lower cognitive scores.
• Teenagers on average get only 6.5 hours of sleep on school nights.
• Schools that shifted to later start times saw improved student GPA and attendance.

The student wants to present a finding that might surprise readers who assume that more sleep is always better. Which choice best accomplishes this goal?`,
    options: [
      'Research has consistently confirmed that adequate sleep improves academic performance.',
      'Teenagers should aim for between 7 and 8 hours of sleep each night.',
      'Counterintuitively, sleeping more than 8 hours per night is also associated with lower cognitive performance, suggesting that sleep quality and consistency matter as much as quantity.',
      'Early school start times are one factor that prevents teenagers from getting enough sleep.'
    ],
    answer: 2,
    explanation: 'The surprising finding in the notes is that too much sleep (>8 hours) is also harmful. Option C presents this unexpected result while framing it as counterintuitive — the ideal approach to surprise the reader.',
    topic: 'Select Surprising Detail'
  },
  {
    id: 8,
    text: `A student is writing a report on the effects of sleep on academic performance. The student has taken the following notes:

• A study of 1,000 participants found that 7–8 hours of sleep is linked to peak cognitive function.
• Sleeping fewer than 7 hours reduces memory consolidation and attention span.
• Sleeping more than 8 hours is also associated with lower cognitive scores.
• Teenagers on average get only 6.5 hours of sleep on school nights.
• Schools that shifted to later start times saw improved student GPA and attendance.

The student wants to write a sentence that uses data from the notes to argue that there is a current problem affecting teenagers specifically. Which choice best accomplishes this goal?`,
    options: [
      'Sleep research has been conducted on a wide variety of age groups and populations.',
      'Optimal cognitive performance requires a consistent and healthy sleep schedule.',
      'With teenagers averaging only 6.5 hours of sleep on school nights — well below the 7–8 hour optimal range — sleep deprivation is a widespread problem among adolescents.',
      'Schools have been slow to adopt policy changes despite evidence supporting later start times.'
    ],
    answer: 2,
    explanation: 'To argue there is a current problem specifically for teenagers, the sentence needs specific data (6.5 hours average) and the benchmark (7–8 hours optimal). Option C combines both to frame the gap as a problem.',
    topic: 'Use Evidence for Argument'
  },
  {
    id: 9,
    text: `A student is writing a report on the effects of sleep on academic performance. The student has taken the following notes:

• A study of 1,000 participants found that 7–8 hours of sleep is linked to peak cognitive function.
• Sleeping fewer than 7 hours reduces memory consolidation and attention span.
• Sleeping more than 8 hours is also associated with lower cognitive scores.
• Teenagers on average get only 6.5 hours of sleep on school nights.
• Schools that shifted to later start times saw improved student GPA and attendance.

Which note provides the strongest evidence that changing school policy can produce measurable academic benefits?`,
    options: [
      'A study of 1,000 participants found that 7–8 hours of sleep is linked to peak cognitive function.',
      'Sleeping fewer than 7 hours reduces memory consolidation and attention span.',
      'Teenagers on average get only 6.5 hours of sleep on school nights.',
      'Schools that shifted to later start times saw improved student GPA and attendance.'
    ],
    answer: 3,
    explanation: 'The question asks for evidence specifically that a policy change (later start times) produced measurable academic outcomes (GPA and attendance). Only the final note directly supports this.',
    topic: 'Evaluate Evidence'
  },
  {
    id: 10,
    text: `A student is writing a report on the effects of sleep on academic performance. The student has taken the following notes:

• A study of 1,000 participants found that 7–8 hours of sleep is linked to peak cognitive function.
• Sleeping fewer than 7 hours reduces memory consolidation and attention span.
• Sleeping more than 8 hours is also associated with lower cognitive scores.
• Teenagers on average get only 6.5 hours of sleep on school nights.
• Schools that shifted to later start times saw improved student GPA and attendance.

The student wants to write a thesis statement for the report. Which choice most effectively synthesizes the key points of the notes?`,
    options: [
      'Sleep is an important part of daily life for people of all ages.',
      'Teenagers need to go to bed earlier to perform better in school.',
      'Because adequate sleep is essential for cognitive performance and most teenagers are chronically sleep-deprived, schools should consider adopting later start times to improve student outcomes.',
      'The amount of sleep a person gets each night affects many aspects of their health and well-being.'
    ],
    answer: 2,
    explanation: 'A strong thesis synthesizes the main points: sleep matters for cognition + teens are sleep-deprived + a specific policy response. Option C does all three concisely.',
    topic: 'Synthesis & Organization'
  },

  // ── SET 3: Bioluminescence & Marine Biology (Q11–15) ──────────────
  {
    id: 11,
    text: `A student is researching bioluminescence for a biology class presentation. The student has taken the following notes:

• Bioluminescence is the production of light by living organisms through chemical reactions.
• It occurs in marine vertebrates, invertebrates, some fungi, and certain bacteria.
• Functions include: counter-illumination camouflage, attracting mates, deterring predators, and luring prey.
• Deep-sea organisms use bioluminescence because sunlight does not penetrate below 200 meters.
• Some bioluminescent bacteria form symbiotic relationships with fish, providing light in exchange for nutrients.

The student wants to write an opening sentence that introduces bioluminescence to a general audience. Which choice best accomplishes this goal?`,
    options: [
      'Deep-sea organisms cannot survive without some form of light production.',
      'Bioluminescence — the ability of living organisms to produce their own light through chemical reactions — is found across a wide range of species, from deep-sea fish to certain fungi and bacteria.',
      'Some bacteria are able to form symbiotic relationships with other organisms in order to survive.',
      'Counter-illumination camouflage is one of the most fascinating uses of bioluminescence in marine life.'
    ],
    answer: 1,
    explanation: 'An introductory sentence for a general audience should define the term and give a sense of its scope. Option B defines bioluminescence clearly and mentions the range of species — ideal for an introduction.',
    topic: 'Identify Purpose & Goal'
  },
  {
    id: 12,
    text: `A student is researching bioluminescence for a biology class presentation. The student has taken the following notes:

• Bioluminescence is the production of light by living organisms through chemical reactions.
• It occurs in marine vertebrates, invertebrates, some fungi, and certain bacteria.
• Functions include: counter-illumination camouflage, attracting mates, deterring predators, and luring prey.
• Deep-sea organisms use bioluminescence because sunlight does not penetrate below 200 meters.
• Some bioluminescent bacteria form symbiotic relationships with fish, providing light in exchange for nutrients.

The student wants to explain to the audience WHY deep-sea creatures specifically rely on bioluminescence. Which choice best accomplishes this goal?`,
    options: [
      'Bioluminescence is a fascinating example of evolutionary adaptation across many species.',
      'Deep-sea organisms have developed bioluminescence as an adaptation to lightless environments, since solar light cannot reach depths below 200 meters.',
      'Bioluminescence serves many functions, including attracting mates and luring prey.',
      'Some organisms produce bioluminescent chemicals as a byproduct of metabolic processes.'
    ],
    answer: 1,
    explanation: 'The goal is to explain WHY deep-sea creatures rely on bioluminescence. Option B gives the reason directly: no sunlight below 200 meters, so bioluminescence is an adaptation to the dark environment.',
    topic: 'Causal Explanation'
  },
  {
    id: 13,
    text: `A student is researching bioluminescence for a biology class presentation. The student has taken the following notes:

• Bioluminescence is the production of light by living organisms through chemical reactions.
• It occurs in marine vertebrates, invertebrates, some fungi, and certain bacteria.
• Functions include: counter-illumination camouflage, attracting mates, deterring predators, and luring prey.
• Deep-sea organisms use bioluminescence because sunlight does not penetrate below 200 meters.
• Some bioluminescent bacteria form symbiotic relationships with fish, providing light in exchange for nutrients.

The student wants to highlight a detail from the notes that shows bioluminescence can benefit multiple organisms at once. Which note supports this goal?`,
    options: [
      'Bioluminescence is the production of light by living organisms through chemical reactions.',
      'Functions include: counter-illumination camouflage, attracting mates, deterring predators, and luring prey.',
      'Some bioluminescent bacteria form symbiotic relationships with fish, providing light in exchange for nutrients.',
      'It occurs in marine vertebrates, invertebrates, some fungi, and certain bacteria.'
    ],
    answer: 2,
    explanation: 'A symbiotic relationship benefits two organisms simultaneously — the bacteria provide light, the fish provide nutrients. This is the only note showing mutual benefit.',
    topic: 'Select Supporting Detail'
  },
  {
    id: 14,
    text: `A student is researching bioluminescence for a biology class presentation. The student has taken the following notes:

• Bioluminescence is the production of light by living organisms through chemical reactions.
• It occurs in marine vertebrates, invertebrates, some fungi, and certain bacteria.
• Functions include: counter-illumination camouflage, attracting mates, deterring predators, and luring prey.
• Deep-sea organisms use bioluminescence because sunlight does not penetrate below 200 meters.
• Some bioluminescent bacteria form symbiotic relationships with fish, providing light in exchange for nutrients.

The student wants to write a sentence that conveys that bioluminescence serves multiple distinct survival purposes. Which choice best accomplishes this goal?`,
    options: [
      'Bioluminescence is most commonly observed in deep-sea marine organisms.',
      'The chemical reactions that produce bioluminescence are still not fully understood by scientists.',
      'Bioluminescence is not a single-purpose trait — organisms use it for camouflage, to attract mates, to repel predators, and even to lure prey, demonstrating its versatility as a survival tool.',
      'Symbiotic bacteria that produce light in exchange for nutrients represent one specific form of bioluminescence.'
    ],
    answer: 2,
    explanation: 'The goal is to convey multiple distinct survival purposes. Option C lists four specific functions from the notes and explicitly frames the trait as versatile — directly matching the goal.',
    topic: 'Identify Purpose & Goal'
  },
  {
    id: 15,
    text: `A student is researching bioluminescence for a biology class presentation. The student has taken the following notes:

• Bioluminescence is the production of light by living organisms through chemical reactions.
• It occurs in marine vertebrates, invertebrates, some fungi, and certain bacteria.
• Functions include: counter-illumination camouflage, attracting mates, deterring predators, and luring prey.
• Deep-sea organisms use bioluminescence because sunlight does not penetrate below 200 meters.
• Some bioluminescent bacteria form symbiotic relationships with fish, providing light in exchange for nutrients.

Which statement is NOT directly supported by the student's notes?`,
    options: [
      'Bioluminescence is produced through chemical reactions within organisms.',
      'Deep-sea organisms depend on bioluminescence because of the absence of natural sunlight.',
      'Humans have successfully engineered bioluminescent crops using genes from marine bacteria.',
      'Certain bacteria that produce light can form cooperative relationships with fish.'
    ],
    answer: 2,
    explanation: 'Options A, B, and D are all directly supported by specific notes. Option C — about humans engineering bioluminescent crops — appears nowhere in the notes and cannot be supported.',
    topic: 'Unsupported Claim'
  },

  // ── SET 4: Urban Gardening & Sustainability (Q16–20) ──────────────
  {
    id: 16,
    text: `A student is writing an essay about the benefits of urban gardening. The student has taken the following notes:

• Urban gardening involves growing food on rooftops, balconies, and in community spaces within cities.
• It provides fresh produce to urban residents who may lack access to grocery stores.
• Green spaces reduce the urban heat island effect by absorbing heat and cooling the air.
• Community gardens strengthen neighborhood bonds and increase social cohesion.
• Studies show that urban gardening participants report lower stress levels than non-participants.

The student wants to write a topic sentence for a paragraph focused on social and mental health benefits. Which choice best accomplishes this goal?`,
    options: [
      'Urban gardens allow city residents to grow their own vegetables and herbs without leaving their neighborhoods.',
      'The urban heat island effect is a well-documented consequence of dense construction and limited green space.',
      'Beyond providing food, urban gardening offers significant social and mental health benefits, including stronger community bonds and reduced stress.',
      'Many cities have introduced rooftop gardening programs to help residents access fresh produce.'
    ],
    answer: 2,
    explanation: 'A topic sentence for a paragraph on social and mental health benefits should introduce exactly those themes. Option C introduces both social (community bonds) and mental health (stress reduction) — the two themes the paragraph will cover.',
    topic: 'Synthesis & Organization'
  },
  {
    id: 17,
    text: `A student is writing an essay about the benefits of urban gardening. The student has taken the following notes:

• Urban gardening involves growing food on rooftops, balconies, and in community spaces within cities.
• It provides fresh produce to urban residents who may lack access to grocery stores.
• Green spaces reduce the urban heat island effect by absorbing heat and cooling the air.
• Community gardens strengthen neighborhood bonds and increase social cohesion.
• Studies show that urban gardening participants report lower stress levels than non-participants.

The student wants to write a sentence that addresses a food access problem specific to urban environments. Which choice best accomplishes this goal?`,
    options: [
      'Urban gardens are typically located on rooftops or in unused community lots.',
      'For residents of urban food deserts — neighborhoods with limited grocery store access — community gardens can serve as a critical local source of fresh produce.',
      'Green spaces in cities have multiple environmental benefits beyond food production.',
      'Stress reduction is an increasingly recognized benefit of time spent in natural settings.'
    ],
    answer: 1,
    explanation: 'The note about providing produce to those who "lack access to grocery stores" describes a food access problem. Option B introduces the concept of food deserts and directly connects urban gardening to solving that problem.',
    topic: 'Use Evidence for Argument'
  },
  {
    id: 18,
    text: `A student is writing an essay about the benefits of urban gardening. The student has taken the following notes:

• Urban gardening involves growing food on rooftops, balconies, and in community spaces within cities.
• It provides fresh produce to urban residents who may lack access to grocery stores.
• Green spaces reduce the urban heat island effect by absorbing heat and cooling the air.
• Community gardens strengthen neighborhood bonds and increase social cohesion.
• Studies show that urban gardening participants report lower stress levels than non-participants.

The student wants to emphasize that urban gardening benefits the entire city, not just individual gardeners. Which choice best accomplishes this goal?`,
    options: [
      'Individual participants in urban gardening programs report feeling healthier and less stressed.',
      'Rooftop gardens require significant investment in waterproofing and structural reinforcement.',
      'By cooling the air, supporting social cohesion, and improving food access, urban gardens benefit not just individual gardeners but the entire urban ecosystem and its residents.',
      'Community gardens give people a sense of purpose and a connection to the natural world.'
    ],
    answer: 2,
    explanation: 'The goal is to show city-wide benefits. Option C lists multiple types of benefits (environmental, social, nutritional) and explicitly extends them to "the entire urban ecosystem and its residents" — precisely matching the goal.',
    topic: 'Identify Purpose & Goal'
  },
  {
    id: 19,
    text: `A student is writing an essay about the benefits of urban gardening. The student has taken the following notes:

• Urban gardening involves growing food on rooftops, balconies, and in community spaces within cities.
• It provides fresh produce to urban residents who may lack access to grocery stores.
• Green spaces reduce the urban heat island effect by absorbing heat and cooling the air.
• Community gardens strengthen neighborhood bonds and increase social cohesion.
• Studies show that urban gardening participants report lower stress levels than non-participants.

Which of the following sentences uses information from the notes to make a claim that is NOT directly supported by the notes?`,
    options: [
      'Urban gardening has been shown to reduce stress levels among participants.',
      'Community gardens contribute to stronger social ties within neighborhoods.',
      'Urban gardens can help reduce city temperatures by absorbing heat.',
      'Urban gardening programs have been proven to reduce rates of urban crime.'
    ],
    answer: 3,
    explanation: 'The notes mention stress reduction, social cohesion, heat absorption, and food access — but crime reduction is never mentioned. Option D makes a claim entirely unsupported by the notes.',
    topic: 'Unsupported Claim'
  },
  {
    id: 20,
    text: `A student is writing an essay about the benefits of urban gardening. The student has taken the following notes:

• Urban gardening involves growing food on rooftops, balconies, and in community spaces within cities.
• It provides fresh produce to urban residents who may lack access to grocery stores.
• Green spaces reduce the urban heat island effect by absorbing heat and cooling the air.
• Community gardens strengthen neighborhood bonds and increase social cohesion.
• Studies show that urban gardening participants report lower stress levels than non-participants.

The student wants to write a concluding sentence that synthesizes the environmental, social, and health benefits described in the notes. Which choice best accomplishes this goal?`,
    options: [
      'Urban gardening is a growing trend in cities around the world.',
      'More research is needed to fully understand all the benefits of urban food production.',
      'From cooling city temperatures and feeding underserved communities to building neighborhood bonds and reducing stress, urban gardening offers a multidimensional solution to some of the most pressing challenges of urban life.',
      'Some residents are still reluctant to participate in community gardening programs due to time constraints.'
    ],
    answer: 2,
    explanation: 'A synthesizing conclusion should touch on all major categories. Option C covers environmental (cooling temperatures), food access (underserved communities), social (neighborhood bonds), and mental health (reducing stress) — all four dimensions from the notes.',
    topic: 'Conclusion & Emphasis'
  },

  // ── SET 5: Artificial Intelligence & Ethics (Q21–25) ──────────────
  {
    id: 21,
    text: `A student is writing a paper on the ethical implications of artificial intelligence. The student has taken the following notes:

• AI automates routine tasks, improving efficiency in industries from healthcare to finance.
• AI systems can analyze vast datasets to identify patterns humans might miss.
• Widespread AI adoption may displace workers in roles involving repetitive tasks.
• AI algorithms can reflect and amplify biases present in training data.
• Regulatory frameworks for AI are still in early stages in most countries.

The student wants to write a sentence that presents both a major benefit and a major risk of AI in a balanced way. Which choice best accomplishes this goal?`,
    options: [
      'Artificial intelligence is a rapidly developing technology with many applications across multiple industries.',
      'AI can dramatically improve efficiency and uncover valuable insights from data, but these benefits must be weighed against risks such as job displacement and algorithmic bias.',
      'Governments around the world are working to develop regulatory frameworks that can keep pace with AI development.',
      'AI systems require large quantities of high-quality training data to function accurately and fairly.'
    ],
    answer: 1,
    explanation: 'The goal is balance — one benefit and one risk. Option B names a clear benefit (efficiency and insights) and two concrete risks (job displacement and algorithmic bias) from the notes, presenting them as things to be "weighed against" each other.',
    topic: 'Contrast & Comparison'
  },
  {
    id: 22,
    text: `A student is writing a paper on the ethical implications of artificial intelligence. The student has taken the following notes:

• AI automates routine tasks, improving efficiency in industries from healthcare to finance.
• AI systems can analyze vast datasets to identify patterns humans might miss.
• Widespread AI adoption may displace workers in roles involving repetitive tasks.
• AI algorithms can reflect and amplify biases present in training data.
• Regulatory frameworks for AI are still in early stages in most countries.

The student wants to write a sentence warning policymakers about a specific danger of deploying biased AI systems. Which choice best accomplishes this goal?`,
    options: [
      'AI has the potential to revolutionize how companies in many sectors operate.',
      'Because AI algorithms can absorb and amplify biases embedded in training data, deploying them without oversight risks entrenching and scaling existing social inequalities.',
      'Regulatory frameworks are important tools for ensuring that new technologies are developed responsibly.',
      'The automation of routine tasks has long been a feature of industrial and technological progress.'
    ],
    answer: 1,
    explanation: 'A warning to policymakers needs to name the specific danger: biased training data → amplified bias → social harm. Option B traces this chain and specifically warns that unregulated deployment could entrench inequalities.',
    topic: 'Use Evidence for Argument'
  },
  {
    id: 23,
    text: `A student is writing a paper on the ethical implications of artificial intelligence. The student has taken the following notes:

• AI automates routine tasks, improving efficiency in industries from healthcare to finance.
• AI systems can analyze vast datasets to identify patterns humans might miss.
• Widespread AI adoption may displace workers in roles involving repetitive tasks.
• AI algorithms can reflect and amplify biases present in training data.
• Regulatory frameworks for AI are still in early stages in most countries.

The student wants to use one note to argue that there is a regulatory gap that needs to be addressed. Which note best supports this argument?`,
    options: [
      'AI automates routine tasks, improving efficiency in industries from healthcare to finance.',
      'AI systems can analyze vast datasets to identify patterns humans might miss.',
      'AI algorithms can reflect and amplify biases present in training data.',
      'Regulatory frameworks for AI are still in early stages in most countries.'
    ],
    answer: 3,
    explanation: 'A regulatory gap means regulation has not kept up with the technology. The note that "regulatory frameworks are still in early stages in most countries" directly identifies this gap.',
    topic: 'Evaluate Evidence'
  },
  {
    id: 24,
    text: `A student is writing a paper on the ethical implications of artificial intelligence. The student has taken the following notes:

• AI automates routine tasks, improving efficiency in industries from healthcare to finance.
• AI systems can analyze vast datasets to identify patterns humans might miss.
• Widespread AI adoption may displace workers in roles involving repetitive tasks.
• AI algorithms can reflect and amplify biases present in training data.
• Regulatory frameworks for AI are still in early stages in most countries.

The student wants to write a thesis statement arguing that AI development must be accompanied by ethical safeguards. Which choice best accomplishes this goal?`,
    options: [
      'Artificial intelligence is one of the most transformative technologies of the modern era.',
      'While AI offers substantial benefits in efficiency and data analysis, its risks — including job displacement, algorithmic bias, and inadequate regulation — demand the development of robust ethical and legal safeguards.',
      'The use of AI in healthcare and finance has already demonstrated its practical value for businesses and institutions.',
      'Training data quality is the most important factor in determining the reliability of AI systems.'
    ],
    answer: 1,
    explanation: 'A thesis for the argument that AI needs ethical safeguards should acknowledge benefits AND name specific risks that make safeguards necessary. Option B does exactly this: acknowledges benefits, names three specific risks, and calls for safeguards.',
    topic: 'Synthesis & Organization'
  },
  {
    id: 25,
    text: `A student is writing a paper on the ethical implications of artificial intelligence. The student has taken the following notes:

• AI automates routine tasks, improving efficiency in industries from healthcare to finance.
• AI systems can analyze vast datasets to identify patterns humans might miss.
• Widespread AI adoption may displace workers in roles involving repetitive tasks.
• AI algorithms can reflect and amplify biases present in training data.
• Regulatory frameworks for AI are still in early stages in most countries.

The student wants to write a concluding sentence that calls for urgent action without overstating what the notes support. Which choice best accomplishes this goal?`,
    options: [
      'Artificial intelligence will inevitably replace all human workers within the next decade.',
      'For these reasons, AI development has already caused irreparable harm to millions of workers worldwide.',
      'Given the documented risks of bias, displacement, and regulatory gaps, proactive investment in ethical AI frameworks is essential before these technologies become more deeply embedded in critical systems.',
      'AI regulation is unnecessary because the technology will naturally self-correct over time.'
    ],
    answer: 2,
    explanation: 'The conclusion must call for action based on what the notes actually support — not overstating or understating. Option C names risks from the notes (bias, displacement, regulatory gaps) and calls for proactive frameworks without making claims the notes do not support.',
    topic: 'Conclusion & Emphasis'
  }

];

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP = {
  'Identify Purpose & Goal':    { name: 'Identify Purpose & Goal',    questions: [1, 6, 11, 14, 18] },
  'Contrast & Comparison':      { name: 'Contrast & Comparison',      questions: [2, 21] },
  'Synthesis & Organization':   { name: 'Synthesis & Organization',   questions: [3, 10, 16, 24] },
  'Summarize Main Argument':    { name: 'Summarize Main Argument',    questions: [4] },
  'Conclusion & Emphasis':      { name: 'Conclusion & Emphasis',      questions: [5, 20, 25] },
  'Select Surprising Detail':   { name: 'Select Surprising Detail',   questions: [7] },
  'Use Evidence for Argument':  { name: 'Use Evidence for Argument',  questions: [8, 17, 22] },
  'Evaluate Evidence':          { name: 'Evaluate Evidence',          questions: [9, 23] },
  'Causal Explanation':         { name: 'Causal Explanation',         questions: [12] },
  'Select Supporting Detail':   { name: 'Select Supporting Detail',   questions: [13] },
  'Unsupported Claim':          { name: 'Unsupported Claim',          questions: [15, 19] }
};
