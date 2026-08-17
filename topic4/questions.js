// =============================================
// Digital SAT – Topic Test 4: Sentence Completion
// 25 Questions | Single Timed Module (32 min)
// answers: 0=A, 1=B, 2=C, 3=D
// Source: Comprehensive Digital SAT Study Guide (Bitwise Books)
//         Digital SAT Prep 2025/2026 For Dummies (Ron Woldoff)
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "The following excerpt is from Bacteria in Daily Life by Mrs. Percy Frankland (1903).\n\n\"Amongst some of the curiosities to be found on the shelves of microbe-museums may be mentioned bacteria which give out light, and thus, like glowworms, reveal themselves in the dark. These light-bacteria were originally discovered on the bodies of sea creatures, and cultures of them have been successfully photographed, the only source of light being that provided by the bacilli themselves. The amount of light _____ by a single bacillus might indeed defy detection by the most sensitive plate procurable.\"\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "evicted",
      "eliminated",
      "emitted",
      "entrusted"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. \"Emitted\" means given off or released — exactly what light does. \"Evicted\" means removed from a place, \"eliminated\" means abolished, and \"entrusted\" means handed over for safekeeping. None of these fit the context of light being produced by bacteria.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 2,
    "text": "The COVID-19 pandemic disrupted businesses across the United States. Some businesses _____ the pandemic by increasing telework, adding workplace flexibilities, or changing pay. A business's response to the pandemic often depended on a particular firm's policies, which were often extended to some or all employees regardless of individual establishment size.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "denied",
      "adjusted to",
      "conceded to",
      "disengaged from"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Adjusted to\" means adapted or modified in response — which matches businesses changing their practices (telework, flexibilities, pay). \"Denied\" contradicts the actions taken. \"Conceded to\" means surrendered, and \"disengaged from\" means withdrew — neither fits businesses that actively changed their operations.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 3,
    "text": "The following excerpt is from The Decline and Fall of the Roman Empire by Edward Gibbon (1776).\n\n\"The camp of a Roman legion presented the appearance of a fortified city. As soon as the space was marked out, the advanced guard carefully levelled the ground, and removed every _____ that might interrupt its perfect regularity. Its form was an exact quadrangle.\"\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "impediment",
      "uniformity",
      "stability",
      "obscurity"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The soldiers levelled the ground to remove things that would \"interrupt perfect regularity\" — meaning obstacles. \"Impediment\" means an obstacle or hindrance, which fits exactly. \"Uniformity\" and \"stability\" are positive qualities the camp had, not things removed. \"Obscurity\" means darkness or insignificance, which is unrelated.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 4,
    "text": "The prosecuting attorney tried to get the testimony of a neighbor who claimed to have heard a woman's cry excluded from the trial. He claimed that since there was no corroboration of this information, it had no _____ on the case.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "endurance",
      "conviction",
      "propaganda",
      "bearing"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. \"Bearing\" means relevance or connection — to \"have a bearing on\" something means to affect or relate to it. \"Endurance\" relates to persisting through hardship. \"Conviction\" means a strongly held belief or legal verdict. \"Propaganda\" means biased information. None of these fit \"relevance to the case\" as well as \"bearing.\"",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 5,
    "text": "The following is from a history of ancient Egypt.\n\n\"Hatshepsut was the daughter of the great warrior king, Thutmosis I, and was during her father's later years associated with him in the government. Along with Hatshepsut, he left two sons, and the elder of these, according to Egyptian law, _____ him. The son was, however, a mere youth, of a weak and amiable temper, while Hatshepsut, his senior by some years, was a woman of great energy.\"\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "succeeded",
      "evaluated",
      "criticized",
      "neglected"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The context describes what happened after Thutmosis I — his elder son \"according to Egyptian law\" took over the position. \"Succeeded\" means to follow in a position or role, which fits a king being followed by his heir. \"Evaluated\" (assessed), \"criticized\" (found fault), and \"neglected\" (ignored) are all unrelated to royal succession.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 6,
    "text": "The following excerpt is from Travels in the Upper Egyptian Deserts by Arthur Edward Weigall.\n\n\"The nights in the desert are as beautiful as the days, though in winter they are often bitterly cold. With the assistance of a warm bed and plenty of blankets, however, one may sleep in the open in comfort; and only those _____ this vast bedroom will understand how beautiful night may be.\"\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "whom know",
      "who have known",
      "whom will know",
      "who knew"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The pronoun needed here is the subject of the verb — \"who\" (not \"whom,\" which is an object pronoun). Additionally, the present perfect \"have known\" is correct because it refers to an experience that connects past and present. \"Who knew\" (D) uses the correct pronoun but the wrong tense — it implies a specific past moment rather than ongoing experience.",
    "topic": "Standard English Conventions"
  },
  {
    "id": 7,
    "text": "The International Space Station is an unprecedented achievement in global human endeavors to conceive, plan, build, operate, and utilize a research platform in space. With assembly of the station at completion, continuity of visiting vehicles, and support of a full-time crew of six, the era of utilization for research by a team of global scientists _____.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "advance",
      "advances",
      "have advanced",
      "will have advanced"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is \"the era,\" which is singular — so it requires the singular verb \"advances.\" \"Advance\" is plural. \"Have advanced\" and \"will have advanced\" use plural helping verbs (have) and shift the tense unnecessarily. \"Advances\" correctly agrees with the singular subject \"era.\"",
    "topic": "Standard English Conventions"
  },
  {
    "id": 8,
    "text": "After celebrating our cousin's birthday with a lavish three-hour dinner, we were dismayed to find that it had started snowing. We headed home immediately because of the inclement weather _____.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "and it was late.",
      "and we were worried about the fact that it was getting later and later.",
      "but the snow had us worried about it being late.",
      "and the lateness of the hour."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The sentence uses a prepositional phrase: \"because of the inclement weather.\" For parallel structure, what follows \"and\" must also be a noun phrase, not a clause. \"The lateness of the hour\" is a noun phrase that parallels \"the inclement weather.\" Options A, B, and C incorrectly attach independent clauses after the conjunction, breaking parallel structure.",
    "topic": "Parallel Structure"
  },
  {
    "id": 9,
    "text": "The following excerpt is from The Story of Mankind by Hendrik Willem van Loon (1921).\n\n\"We know very little about the first 'true' men. We have never seen their pictures. In the deepest layer of clay of an ancient soil, we have sometimes found pieces of their bones. These lay buried amidst the broken skeletons of other animals that have long since disappeared from the face of the _____ have taken these bones and have been able to reconstruct our earliest ancestors with a fair degree of accuracy.\"\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "earth, anthropologists",
      "earth and anthropologists",
      "earth, and anthropologists",
      "earth; and, anthropologists"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. \"Earth\" ends one independent clause, and \"anthropologists have taken these bones\" begins another. Two independent clauses must be joined with a comma + coordinating conjunction (and). Option A is a comma splice (no conjunction). Option B lacks the comma before \"and.\" Option D incorrectly places a comma after the semicolon + \"and\" together.",
    "topic": "Punctuation"
  },
  {
    "id": 10,
    "text": "This passage is from Into the House of the Ancestors by Karl Maier.\n\n\"Unlike those in some other major research centers in Africa, the scientists in Bamako are Africans, mostly Malians. This is not a case of Europeans and Americans taking a mobile First World lab and setting it up in the African bush. _____ it is a center of scientific excellence, which is administered by Malians, and where the most immediate benefits fall to Malians.\"\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Rather,",
      "Therefore,",
      "Furthermore,",
      "Accordingly,"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. \"Rather\" signals a contrast and correction — \"this is NOT X... Rather, it IS Y.\" The passage corrects a possible misconception (foreign-run lab) and replaces it with the truth (African-run center). \"Therefore\" and \"Accordingly\" imply consequence. \"Furthermore\" adds more of the same idea. Only \"Rather\" creates the corrective contrast the passage needs.",
    "topic": "Transitions"
  },
  {
    "id": 11,
    "text": "Breathing technique plays the most important part in the art of swimming; _____ no one ever becomes a good swimmer unless attention is paid to the matter of breathing, which must be done with regularity and precision.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "but,",
      "nonetheless,",
      "conversely,",
      "in fact,"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. \"In fact\" introduces a reinforcing statement — it strengthens and confirms the first claim by adding more evidence. The second half of the sentence is not a contrast to the first (ruling out \"but,\" \"nonetheless,\" and \"conversely\") — it elaborates and emphasizes the same point that breathing is essential.",
    "topic": "Transitions"
  },
  {
    "id": 12,
    "text": "The sequoia, a type of redwood, is the largest species of tree in the world, growing as tall as 280 feet. _____ the largest specimen is General Sherman, which can be found in California's Sequoia National Park.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Furthermore,",
      "Otherwise,",
      "Therefore,",
      "However,"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. \"Furthermore\" is a joining/additive transition — it introduces an additional example of the same point (the largest tree species → here is the largest specimen). \"Otherwise\" implies an alternative. \"Therefore\" implies the second sentence is a result of the first. \"However\" implies contrast. Only \"Furthermore\" correctly adds a supporting detail.",
    "topic": "Transitions"
  },
  {
    "id": 13,
    "text": "Raj was _____ about performing in the student talent show. Although he was pleased and honored about being chosen, he was nervous about performing before such a large audience of his classmates, friends, and family.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "cheerful",
      "proud",
      "fearful",
      "ambivalent"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The passage gives contradictory clues: Raj was pleased AND honored BUT ALSO nervous. When someone has conflicting feelings about something, the precise word is \"ambivalent\" — meaning having mixed or contradictory emotions. \"Cheerful\" and \"proud\" capture only the positive side; \"fearful\" captures only the negative side. Only \"ambivalent\" captures both.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 14,
    "text": "Images from the Hubble Space Telescope reveal a small galaxy labeled UGCA 307. It consists of a diffuse band of stars containing red bubbles of gas that mark regions of recent star formations. Appearing as just a small patch of stars, UGCA 307 is a diminutive dwarf galaxy without a _____ structure, resembling nothing more than a hazy patch of passing cloud.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "blurry",
      "brittle",
      "heavy",
      "defined"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The galaxy \"resembles a hazy patch of passing cloud\" — meaning it lacks a clear, sharp form. A galaxy WITHOUT a \"defined\" structure has no distinct shape. \"Blurry\" is what it looks like (not what it lacks). \"Brittle\" relates to physical fragility, and \"heavy\" relates to weight — neither is relevant to a galaxy's appearance.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 15,
    "text": "The U.S. Fish and Wildlife Service warns campers, hikers, and hunters to avoid encounters with bears. In any encounter with a bear in the wild, the behavior of the human matters. If a bear is rummaging through a trash can and takes little notice of you, then slowly leave the area and move to a safer location. If the bear appears to be more curious or aggressive and approaches, stand your ground and be prepared to use bear spray. The bear's behavior should _____ your response.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "ignore",
      "mimic",
      "determine",
      "follow"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The passage explains that different bear behaviors require different human responses. If your response changes based on what the bear does, then the bear's behavior \"determines\" (causes or dictates) your response. \"Ignore\" contradicts the entire passage. \"Mimic\" would mean copying the bear. \"Follow\" would mean the bear's behavior comes after your response — the opposite of what the passage says.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 16,
    "text": "The new policy aims to _____ the financial burden on low-income families by providing subsidized housing and expanded food assistance programs.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "increase",
      "worsen",
      "alleviate",
      "ignore"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. \"Alleviate\" means to reduce or lessen — the policy provides assistance programs to make the financial burden smaller. \"Increase\" and \"worsen\" are the opposite of what assistance programs do. \"Ignore\" means to disregard, which contradicts actively providing programs to help.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 17,
    "text": "Given the current trends in technology, it seems _____ that artificial intelligence will play a significant role in our future, given the rapid pace at which it is being adopted across industries.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "uncertain",
      "avoidable",
      "predictable",
      "unavoidable"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. \"Unavoidable\" means impossible to prevent — which fits the context of something that \"seems inevitable.\" \"Uncertain\" contradicts \"given the current trends\" which imply clarity. \"Avoidable\" contradicts the tone of certainty. \"Predictable\" could work but is weaker — the passage implies not just that AI's role can be predicted, but that it cannot be avoided.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 18,
    "text": "Despite the benefits, she was _____ to accept the new position because it required relocating her entire family to a city they had never visited.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "eager",
      "hesitant",
      "indifferent",
      "confident"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Despite the benefits\" signals that something is holding her back — she is unwilling or slow to decide. \"Hesitant\" means uncertain or reluctant, which fits exactly. \"Eager\" and \"confident\" are positive, contradicting \"despite the benefits.\" \"Indifferent\" means uncaring — but she has clear reasons for concern, so she is not indifferent.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 19,
    "text": "The committee was tasked to _____ the new policy thoroughly before implementation, examining every clause for potential loopholes or unintended consequences.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "approve",
      "implement",
      "reject",
      "scrutinize"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. \"Scrutinize\" means to examine closely and critically — exactly what \"examining every clause for loopholes\" describes. \"Approve\" and \"reject\" are final decisions, not the act of careful examination. \"Implement\" means to carry out, which is what happens after the review, not during it.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 20,
    "text": "Efforts to _____ the effects of climate change are essential for the future of our planet, including transitioning to renewable energy, reducing deforestation, and developing carbon capture technologies.\n\nWhich choice completes the text with the most logical and precise word?",
    "options": [
      "intensify",
      "mitigate",
      "ignore",
      "accept"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Mitigate\" means to lessen or reduce the severity of something — these efforts are aimed at making climate change effects less harmful. \"Intensify\" means to make worse, which is the opposite. \"Ignore\" and \"accept\" suggest inaction, which contradicts the list of specific actions provided.",
    "topic": "Vocabulary in Context"
  },
  {
    "id": 21,
    "text": "Which sentence best transitions from a discussion about the benefits of renewable energy to the challenges of its implementation?",
    "options": [
      "Renewable energy is critical for reducing carbon emissions.",
      "Many people support the use of solar and wind power.",
      "However, the cost and infrastructure required for renewable energy present significant challenges.",
      "It is important to invest in clean energy technologies."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. A transition sentence must bridge two topics — here from benefits TO challenges. Option C does exactly this: it uses \"however\" to signal a shift and introduces \"challenges\" as the new direction. Options A, B, and D continue discussing benefits or general support, never pivoting to challenges.",
    "topic": "Transitions"
  },
  {
    "id": 22,
    "text": "Which sentence best introduces a paragraph about the advantages of electric vehicles?",
    "options": [
      "Some people still prefer gasoline-powered cars.",
      "Electric vehicles are becoming increasingly popular due to their environmental benefits and cost savings.",
      "Many companies are investing in renewable energy sources.",
      "It is important to reduce our carbon footprint."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. An introductory sentence must directly state the paragraph's main claim. Option B names the subject (electric vehicles), specifies the focus (advantages), and provides specific examples (environmental benefits, cost savings). Option A focuses on gasoline cars. Option C shifts to companies and energy. Option D is a general statement with no specific connection to EVs.",
    "topic": "Rhetorical Skills"
  },
  {
    "id": 23,
    "text": "Which sentence would best support a paragraph discussing the importance of sleep for teenagers?",
    "options": [
      "Many teenagers enjoy staying up late to play video games.",
      "Studies show that adequate sleep improves cognitive function and academic performance in teenagers.",
      "Some schools start classes very early in the morning.",
      "Teenagers often have busy schedules with extracurricular activities."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. A supporting sentence must directly reinforce the paragraph's argument. Option B cites evidence (\"studies show\") and connects sleep directly to outcomes important for teenagers (cognitive function, academics). Options A, C, and D describe habits, scheduling, and activities — none of which directly argues for the importance of sleep.",
    "topic": "Rhetorical Skills"
  },
  {
    "id": 24,
    "text": "The following sentence contains an error in modifier placement. Choose the version that correctly places the modifier.\n\nOriginal Sentence: \"Walking through the park, the flowers were beautiful.\"\n\nWhich revision correctly attributes the action to a logical subject?",
    "options": [
      "Walking through the park, the flowers were beautiful.",
      "The flowers, walking through the park, were beautiful.",
      "Walking through the park, she admired the beautiful flowers.",
      "She admired the flowers, walking through the park, which were beautiful."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. \"Walking through the park\" is a participial phrase that must describe the subject immediately following it. In the original, it incorrectly modifies \"flowers\" — flowers cannot walk. Option C correctly places \"she\" as the subject who is walking. Option B moves the phrase inside the sentence but still has flowers walking. Option D is awkward and ambiguous about who is walking.",
    "topic": "Modifiers"
  },
  {
    "id": 25,
    "text": "Which sentence would best conclude a paragraph about the importance of sustainable agriculture?",
    "options": [
      "Sustainable agriculture can also lead to economic benefits for farmers.",
      "Some farmers are resistant to changing traditional farming methods.",
      "It is important to research sustainable practices before implementing them.",
      "Many consumers prefer to buy organic products."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A concluding sentence should reinforce and expand the paragraph's main argument. Option A adds the dimension of economic benefits, broadening the case for why sustainable agriculture matters — a strong conclusion. Option B introduces resistance (a counterpoint, not a conclusion). Options C and D shift focus to research caution and consumer preference, which do not conclude the paragraph's argument about importance.",
    "topic": "Rhetorical Skills"
  }
];

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP = {
  'Sentence Completion': {
    name: 'Sentence Completion',
    questions: QUESTIONS.map(q => q.id)
  }
};
