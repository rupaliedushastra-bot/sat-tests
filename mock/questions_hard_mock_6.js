// =============================================
// SAT Hard Full Mock 6
// Full 98 Questions (RW M1: 27, RW M2: 27, Math M1: 22, Math M2: 22)
// Complete with LaTeX, Diagrams, Official Explanations and Options
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "code": "H6-RW1",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 1,
    "topic": "Transitions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Dr. Aris Thorne argues that modern architecture overly prioritizes aesthetics over functionality. _______ he points to the newly constructed City Hall, which features a stunning glass facade but suffers from terrible interior acoustics and poor insulation.</p><p>Which choice completes the text with the most logical transition?</p>",
    "options": [
      "As a result,",
      "Regardless,",
      "To illustrate,",
      "Meanwhile,"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The author mentions City Hall as a concrete example demonstrating Dr. Thorne's argument that aesthetics are prioritized over functionality. \"To illustrate\" logically signals this exemplary relationship."
  },
  {
    "id": 2,
    "code": "H6-RW2",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 2,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>When questioned by reporters about the controversial new policy, the mayor’s answers were intentionally _______, frustrating journalists who were seeking a clear and direct explanation.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "straightforward",
      "eloquent",
      "evasive",
      "comprehensive"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The journalists were seeking a \"clear and direct explanation\" and were \"frustrated,\" which indicates the mayor avoided giving direct answers. \"Evasive\" means tending to avoid commitment or self-revelation, especially by responding only indirectly."
  },
  {
    "id": 3,
    "code": "H6-RW3",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 3,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>While reviewing the ancient manuscripts, the historian was incredibly _______; she examined every single word and punctuation mark to ensure her translation was perfectly accurate.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "dismissive",
      "meticulous",
      "impulsive",
      "lethargic"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The context describes examining \"every single word and punctuation mark\" to ensure accuracy. \"Meticulous\" means showing great attention to detail; very careful and precise."
  },
  {
    "id": 4,
    "code": "H6-RW4",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 4,
    "topic": "Transitions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Many early twentieth-century physicists believed the universe was static and unchanging. _______, Edwin Hubble's observations in 1929 proved that galaxies are actually moving away from one another, indicating that the universe is expanding.</p><p>Which choice completes the text with the most logical transition?</p>",
    "options": [
      "Indeed",
      "However",
      "For example",
      "Consequently"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The belief that the universe was static directly contrasts with Hubble's discovery that it is expanding. \"However\" signals this contrast."
  },
  {
    "id": 5,
    "code": "H6-RW5",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 5,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Before the advent of modern refrigeration, preserving food was a labor-intensive process. Meats had to be salted or smoked, and vegetables _______ pickled or canned to survive the winter months.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "was",
      "are",
      "has been",
      "were"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The subject \"vegetables\" is plural and the sentence describes past historical conditions (\"had to be\"), requiring the plural past tense verb \"were\"."
  },
  {
    "id": 6,
    "code": "H6-RW6",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 6,
    "topic": "Command of Evidence",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>To test the effect of classical music on plant growth, a high school biology class conducted an experiment. They placed ten bean plants in a silent greenhouse and ten identical bean plants in a greenhouse where Mozart symphonies played constantly. After a month, the students found that the plants exposed to music grew, on average, two inches taller than the plants in silence. However, the teacher pointed out a flaw: the greenhouse with the music also received two extra hours of direct sunlight each day.</p><p>Which finding, if true, would most directly undermine the students' conclusion that music caused the plants to grow taller?</p>",
    "options": [
      "Bean plants are known to be highly responsive to changes in soil acidity.",
      "Classical music has been shown to reduce stress in domestic animals.",
      "Increased sunlight exposure is proven to significantly accelerate bean plant growth.",
      "The students used Mozart rather than Beethoven for their experiment."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. If increased sunlight exposure accelerates bean plant growth, the extra two hours of sunlight provides an alternative, confounding explanation for the observed growth difference, directly undermining the conclusion that music was the cause."
  },
  {
    "id": 7,
    "code": "H6-RW7",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 7,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Deep in the Mariana Trench, researchers discovered a new species of _______ bioluminescent scales allow it to attract prey in total darkness.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "fish, its",
      "fish, their",
      "fish whose",
      "fish, who's"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The possessive relative pronoun \"whose\" introduces the relative clause describing the fish without creating a comma splice or grammatical error."
  },
  {
    "id": 8,
    "code": "H6-RW8",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 8,
    "topic": "Inferences",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>The city's underground pipes, installed in the early 1920s, are made of cast iron. While cast iron is durable, it is highly susceptible to internal corrosion over decades, which restricts water flow and increases pressure. Given that the city's population has doubled in the last twenty years, requiring massive increases in daily water usage, city engineers warn that _______</p><p>Which choice most logically completes the text?</p>",
    "options": [
      "the cast iron pipes will likely heal their own corrosion over time.",
      "the water pressure in the pipes will drop significantly due to lack of use.",
      "the aging pipes face a severe risk of bursting due to increased demand and restricted flow.",
      "the city should replace the pipes with wood, as was done in the 1800s."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Restricted flow combined with increased water pressure and massive increases in daily usage logically leads to a severe risk of pipe failure or bursting."
  },
  {
    "id": 9,
    "code": "H6-RW9",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 9,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The artist’s latest installation is highly _______ it features thousands of suspended glass shards that reflect light across the gallery walls.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "unusual,",
      "unusual;",
      "unusual",
      "unusual: and"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Semicolons are used to link two independent clauses that are closely related in thought when no coordinating conjunction is used."
  },
  {
    "id": 10,
    "code": "H6-RW10",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 10,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>While analyzing the soil samples from the impact crater, _______ traces of a rare iridium isotope.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "the discovery was made of",
      "researchers found",
      "it was found by researchers",
      "traces were found of"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The introductory participial phrase \"While analyzing the soil samples...\" must logically modify the subject that follows immediately: \"researchers\". Any other choice results in a dangling modifier."
  },
  {
    "id": 11,
    "code": "H6-RW11",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 11,
    "topic": "Text Structure & Purpose",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>In her poem \"The New Colossus,\" Emma Lazarus writes of the Statue of Liberty not as a warrior of conquest, but as a \"Mother of Exiles.\" She describes the statue’s beacon as offering a \"world-welcoming\" light to those fleeing hardship. The poem was written in 1883 to raise funds for the construction of the statue's pedestal, but it ultimately transformed the monument’s meaning in the public consciousness from a symbol of international friendship to a symbol of American immigration.</p><p>Which choice best states the main purpose of the text?</p>",
    "options": [
      "To argue that the Statue of Liberty should have been designed as a warrior.",
      "To explain how a specific poem changed the cultural significance of a monument.",
      "To detail the financial struggles involved in building the Statue of Liberty's pedestal.",
      "To compare Emma Lazarus's poetry to other 19th-century American literary works."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The text explains how Emma Lazarus's poem \"The New Colossus\" altered the monument's meaning from a symbol of international friendship to one of American immigration."
  },
  {
    "id": 12,
    "code": "H6-RW12",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 12,
    "topic": "Central Ideas & Details",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Many historical accounts of the Industrial Revolution focus heavily on the invention of the steam engine, treating it as the singular catalyst for modernization. However, economic historian Maxine Berg argues that this narrative is incomplete. She emphasizes that an accompanying \"consumer revolution\"—a massive increase in the public’s desire for varied, accessible household goods—was equally necessary. Without this unprecedented demand, the mass production enabled by steam power would have had no market.</p><p>According to the text, what is Maxine Berg's view on the Industrial Revolution?</p>",
    "options": [
      "The steam engine was actually invented much later than historians claim.",
      "Mass production was less important than agricultural development.",
      "The desire for consumer goods was just as critical as technological innovation.",
      "The consumer revolution was a direct result of the steam engine's failure."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Berg emphasizes that the consumer revolution (the desire for household goods) was \"equally necessary\" alongside technological catalysts like steam power."
  },
  {
    "id": 13,
    "code": "H6-RW13",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 13,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>By the time the spacecraft reaches Mars in 2035, the engineering team on Earth _______ software updates for over a decade.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "will be broadcasting",
      "broadcasts",
      "will have been broadcasting",
      "broadcasted"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The time marker \"By the time [future event]... for over a decade\" requires the future perfect continuous tense \"will have been broadcasting\" to indicate an ongoing action that will be completed in reference to a future moment."
  },
  {
    "id": 14,
    "code": "H6-RW14",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 14,
    "topic": "Rhetorical Synthesis",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li><i>The Great Gatsby</i> is a novel written by F. Scott Fitzgerald.</li><li>It was published in 1925.</li><li>It is set in New York during the \"Roaring Twenties,\" an era of jazz music and economic prosperity.</li><li>The story follows Jay Gatsby, a mysterious millionaire who throws lavish parties.</li><li>Gatsby is desperately in love with Daisy Buchanan, a married woman.</li></ul><p>The student wants to introduce the novel's historical setting to a reader unfamiliar with the book. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
    "options": [
      "F. Scott Fitzgerald's novel The Great Gatsby, published in 1925, is about a millionaire named Jay Gatsby and his love for Daisy Buchanan.",
      "Set in New York during a prosperous era of jazz music known as the \"Roaring Twenties,\" The Great Gatsby is a 1925 novel by F. Scott Fitzgerald.",
      "Jay Gatsby, the protagonist of The Great Gatsby, throws lavish parties in hopes of attracting Daisy Buchanan.",
      "In 1925, F. Scott Fitzgerald wrote a book about a mysterious millionaire living in New York."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. It directly highlights the novel's historical setting (\"Set in New York during a prosperous era of jazz music known as the 'Roaring Twenties'\") while introducing the book to an unfamiliar reader."
  },
  {
    "id": 15,
    "code": "H6-RW15",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 15,
    "topic": "Standard English Conventions",
    "difficulty": "Easy",
    "isFillIn": false,
    "text": "<p>Every year, the board of directors votes on the new budget. The board must submit _______ final approval by Friday.</p>",
    "options": [
      "their",
      "it's",
      "its",
      "they're"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. \"The board\" is a singular collective noun requiring the singular possessive pronoun \"its\". \"It's\" is a contraction for \"it is\"."
  },
  {
    "id": 16,
    "code": "H6-RW16",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 16,
    "topic": "Transitions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The ancient library of Alexandria was renowned throughout the Mediterranean. _______ it was ultimately destroyed, its legacy as a center of early global scholarship remains intact today.</p><p>Which choice completes the text with the most logical transition?</p>",
    "options": [
      "Therefore,",
      "Furthermore,",
      "Similarly,",
      "Although"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. \"Although\" is a subordinating conjunction introducing the concessive clause about the library's destruction, contrasting with its intact legacy today."
  },
  {
    "id": 17,
    "code": "H6-RW17",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 17,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Despite its harsh, freezing climate, the Arctic tundra is home to several _______ species of flora and fauna that have evolved specialized traits to survive the extreme cold.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "resilient",
      "vulnerable",
      "temporary",
      "aggressive"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. \"Resilient\" means able to withstand or recover quickly from difficult conditions, perfectly matching organisms that have evolved traits to survive extreme cold."
  },
  {
    "id": 18,
    "code": "H6-RW18",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 18,
    "topic": "Cross-Text Connections",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p><b>Text 1</b><br>Ecologist Mario Alvarez argues that urban green spaces, such as rooftop gardens, are essential for preserving biodiversity in cities. His research indicates that these spaces provide critical habitats for migratory birds and pollinating insects, effectively turning concrete jungles into viable ecosystems.</p><p><b>Text 2</b><br>Urban planner Sarah Jenkins agrees that green spaces are beneficial, but cautions that rooftop gardens are highly inefficient. She points out that the structural reinforcement, water transport systems, and maintenance required for rooftop habitats consume far more energy and resources than ground-level community parks.</p><p>Based on the texts, how would Jenkins (Text 2) most likely respond to Alvarez (Text 1)?</p>",
    "options": [
      "By arguing that migratory birds do not actually benefit from urban green spaces.",
      "By suggesting that while the ecological goal is valid, the specific method Alvarez praises is practically flawed.",
      "By asserting that biodiversity is not a relevant concern for modern urban planners.",
      "By agreeing completely that rooftop gardens are the only way to save pollinating insects."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Jenkins agrees green spaces are beneficial (valid goal) but points out rooftop gardens consume excessive energy and resources (practically flawed compared to ground-level parks)."
  },
  {
    "id": 19,
    "code": "H6-RW19",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 19,
    "topic": "Transitions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>During the dry season, the savanna grass turns brown and nutrient-poor, forcing herbivores to migrate. _______, predators like lions and cheetahs must follow these herds to ensure their own survival.</p><p>Which choice completes the text with the most logical transition?</p>",
    "options": [
      "Consequently",
      "Previously",
      "In contrast",
      "Nevertheless"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The predators following the herds is a direct cause-and-effect result of herbivores migrating. \"Consequently\" signals this result."
  },
  {
    "id": 20,
    "code": "H6-RW20",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 20,
    "topic": "Inferences",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>When a bee discovers a rich food source, it returns to the hive and performs a \"waggle dance\" to communicate the location to the other bees. The angle of the dance relative to the hive's honeycomb indicates the direction of the food relative to the sun, while the duration of the waggle phase indicates the distance. If a bee performs an unusually long waggle phase, it can be logically concluded that _______</p><p>Which choice most logically completes the text?</p>",
    "options": [
      "the food source is located exceptionally far from the hive.",
      "the food source is located directly beneath the sun.",
      "the bee is warning the hive about a nearby predator.",
      "the bee has forgotten the exact location of the nectar."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The text explicitly states that the duration of the waggle phase indicates distance. An unusually long waggle phase therefore indicates an unusually large distance."
  },
  {
    "id": 21,
    "code": "H6-RW21",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 21,
    "topic": "Command of Evidence",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p><b>Survey of Employee Work Preferences (2023)</b><br>Fully Remote: 45%<br>Hybrid (3 days office, 2 days remote): 35%<br>Fully In-Office: 15%<br>No Preference: 5%</p><p>A recent corporate study investigated employee preferences regarding work environments in the post-pandemic era. The researchers concluded that the traditional five-day in-office work week is no longer favored by the vast majority of the workforce. According to the survey data, _______</p><p>Which choice most effectively uses data from the survey to complete the statement?</p>",
    "options": [
      "45% of employees prefer a hybrid schedule.",
      "more employees prefer being fully in-office than have no preference.",
      "a combined 80% of employees prefer working remotely at least part of the time.",
      "only 15% of employees are currently working fully remote."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Combining fully remote (45%) and hybrid (35%) shows that 80% of employees prefer working remotely at least part of the week, supporting the conclusion."
  },
  {
    "id": 22,
    "code": "H6-RW22",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 22,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The architect proposed a _______ design for the new bridge, arguing that it could be easily dismantled and moved to a different location if the city’s traffic patterns changed in the future.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "permanent",
      "conventional",
      "modular",
      "fragile"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. \"Modular\" means constructed with standardized units or dimensions for flexibility and easy rearrangement or dismantling."
  },
  {
    "id": 23,
    "code": "H6-RW23",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 23,
    "topic": "Command of Evidence",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Linguist Dr. Elena Rostova hypothesized that bilingual individuals process ambiguous sentences more quickly than monolingual individuals. To test this, she timed participants as they read sentences with confusing grammatical structures.</p><p>Which finding from Dr. Rostova's study would most directly support her hypothesis?</p>",
    "options": [
      "Monolingual participants reported feeling more frustrated by the sentences than bilingual participants did.",
      "Bilingual participants correctly parsed the ambiguous sentences in an average of 3.2 seconds, while monolinguals took 4.8 seconds.",
      "Both monolingual and bilingual participants struggled equally with sentences containing obscure vocabulary.",
      "Bilingual participants preferred reading sentences in their first language rather than their second."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Quantitative evidence showing bilinguals took 3.2 seconds versus 4.8 seconds for monolinguals directly proves they processed ambiguous sentences more quickly."
  },
  {
    "id": 24,
    "code": "H6-RW24",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 24,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>In the 19th century, the discovery of anesthesia helped to _______ the excruciating pain patients experienced during surgery, revolutionizing medical practices worldwide.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "aggravate",
      "alleviate",
      "measure",
      "simulate"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Alleviate\" means to make suffering or pain less severe."
  },
  {
    "id": 25,
    "code": "H6-RW25",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 25,
    "topic": "Rhetorical Synthesis",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>Marie Curie was a physicist and chemist born in Poland in 1867.</li><li>She conducted pioneering research on radioactivity.</li><li>She was the first woman to win a Nobel Prize (Physics in 1903).</li><li>She is also the only person to win a Nobel Prize in two different scientific fields (Chemistry in 1911).</li><li>Her work led to the development of mobile X-ray units used in WWI.</li></ul><p>The student wants to emphasize Marie Curie's unique distinction in the history of the Nobel Prize. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
    "options": [
      "Born in Poland in 1867, Marie Curie conducted groundbreaking research on radioactivity that led to the use of X-rays in WWI.",
      "Marie Curie was a pioneering physicist and chemist whose work was recognized with a Nobel Prize in Physics in 1903.",
      "Not only was Marie Curie the first woman to win a Nobel Prize, but she also remains the only person to win the award in two different scientific fields.",
      "Marie Curie won a Nobel Prize in 1903 for her work in physics, and later won again in 1911 for chemistry."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. It directly focuses on and emphasizes her unique distinction: being the first woman to win, and remaining the only person to win across two different scientific fields."
  },
  {
    "id": 26,
    "code": "H6-RW26",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 26,
    "topic": "Central Ideas & Details",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>In recent years, astronomers have discovered dozens of \"Rogue Planets\"—planets that do not orbit a star but instead drift aimlessly through interstellar space. These celestial bodies were likely ejected from their original solar systems due to gravitational interactions with other planets. Because they have no star to warm them, rogue planets are entirely frozen on the surface, though scientists hypothesize that geothermal activity could keep their internal cores warm.</p><p>Which choice best states the main idea of the text?</p>",
    "options": [
      "Rogue planets are uniquely difficult for astronomers to locate in space.",
      "Rogue planets are frozen, starless worlds that may still possess internal heat.",
      "Gravitational interactions frequently cause stars to collapse into black holes.",
      "Solar systems are highly unstable and constantly lose planets."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. It accurately summarizes the passage: rogue planets drift without stars and are frozen, but may harbor internal geothermal heat."
  },
  {
    "id": 27,
    "code": "H6-RW27",
    "prefix": "H6",
    "section": "rw",
    "module": 1,
    "qnum": 27,
    "topic": "Text Structure & Purpose",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>The following text is adapted from Oscar Wilde's 1890 novel, <i>The Picture of Dorian Gray</i>.<br>\"The studio was filled with the rich odour of roses, and <u>when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.</u>\"</p><p>Which choice best describes the function of the underlined portion in the text as a whole?</p>",
    "options": [
      "It introduces the main characters of the novel.",
      "It establishes a sensory, atmospheric setting.",
      "It creates a sense of impending danger and suspense.",
      "It provides historical context for the story's time period."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The sensory descriptions of scents, wind, and flowers serve to establish a rich, sensory, and atmospheric aesthetic setting."
  },
  {
    "id": 28,
    "code": "H6-RW28",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 1,
    "topic": "Central Ideas & Details",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Discovered in a shipwreck in 1901, the Antikythera mechanism is an ancient Greek device dated to around 100 BCE. Featuring a complex system of over thirty interlocking bronze gears, it was used to predict astronomical positions and eclipses decades in advance. The level of engineering precision required to build it was not seen again until the development of mechanical clocks in 14th-century Europe, forcing historians to drastically reevaluate the technological capabilities of the ancient world.</p><p>Which choice best states the central idea of the text?</p>",
    "options": [
      "The Antikythera mechanism was primarily used to navigate ships across the Mediterranean Sea.",
      "The discovery of the Antikythera mechanism proves that time travel existed in ancient Greece.",
      "Modern mechanical clocks are direct descendants of ancient Greek astronomical devices.",
      "The Antikythera mechanism demonstrates an advanced level of ancient technological sophistication that was previously thought impossible."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The text focuses on how the Antikythera mechanism forced historians to reevaluate ancient technological capabilities due to its intricate gears and precision not matched for over a millennium."
  },
  {
    "id": 29,
    "code": "H6-RW29",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 2,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The software company released a major update to patch the security _______ many users still experienced data breaches due to poorly configured firewalls.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "vulnerability, nevertheless,",
      "vulnerability; nevertheless,",
      "vulnerability nevertheless",
      "vulnerability, nevertheless"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"vulnerability; nevertheless,\" links two independent clauses using a semicolon before the conjunctive adverb \"nevertheless,\" followed by a comma."
  },
  {
    "id": 30,
    "code": "H6-RW30",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 3,
    "topic": "Central Ideas & Details",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Chameleons are famous for their ability to change color, a trait long thought to be achieved by dispersing pigment within their skin cells. However, biologists recently discovered that chameleons actually change color by manipulating a structural layer of skin containing specialized guanine nanocrystals. By relaxing or exciting their skin, chameleons change the spacing between these microscopic crystals, which alters the wavelength of light reflected, shifting their appearance from green to yellow to red.</p><p>According to the text, what is the actual mechanism by which chameleons change color?</p>",
    "options": [
      "By absorbing pigments from the plants in their immediate environment.",
      "By injecting chemical dyes directly into their outer scales.",
      "By adjusting the distance between structural crystals in their skin to reflect different light wavelengths.",
      "By regulating their internal body temperature to produce different colors."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The passage explicitly states that by changing the spacing between structural guanine nanocrystals, chameleons alter the wavelength of light reflected."
  },
  {
    "id": 31,
    "code": "H6-RW31",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 4,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>In 1997, the Mars Pathfinder mission successfully landed the Sojourner rover on the _______ a major milestone in space exploration that proved the viability of mobile robotic vehicles on other planets.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "planet, marking",
      "planet; marking",
      "planet. Marking",
      "planet marking"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A comma followed by the participial phrase \"marking a major milestone...\" correctly modifies the preceding clause without introducing a comma splice or sentence fragment."
  },
  {
    "id": 32,
    "code": "H6-RW32",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 5,
    "topic": "Inferences",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>In economics, the \"sunk cost fallacy\" occurs when individuals continue a behavior or endeavor as a result of previously invested resources (time, money, or effort), even if the current costs outweigh the future benefits. For example, a theatergoer realizes thirty minutes into a play that they strongly dislike it. If the theatergoer decides to stay until the end solely because they paid fifty dollars for the ticket, it can be logically concluded that they _______</p><p>Which choice most logically completes the text?</p>",
    "options": [
      "are hoping the play will drastically improve in the second act.",
      "are demonstrating the sunk cost fallacy by prioritizing past expenditure over their current enjoyment.",
      "believe fifty dollars is an insignificant amount of money to lose.",
      "will demand a refund from the theater management after the show."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Deciding to endure an unpleasant experience solely because the money cannot be recovered directly exemplifies the sunk cost fallacy by placing past financial outlay above present welfare."
  },
  {
    "id": 33,
    "code": "H6-RW33",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 6,
    "topic": "Rhetorical Synthesis",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>In 1912, Alfred Wegener proposed the theory of continental drift.</li><li>He suggested that the continents were once joined in a single supercontinent called Pangea.</li><li>He pointed to the jigsaw-puzzle fit of South America and Africa as evidence.</li><li>Wegener was ridiculed by geologists at the time because he could not explain how the continents moved.</li><li>The theory was widely accepted in the 1960s after the discovery of plate tectonics provided the missing mechanism.</li></ul><p>The student wants to emphasize why Wegener's theory was initially rejected. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
    "options": [
      "Alfred Wegener proposed that South America and Africa were once joined in a supercontinent called Pangea, a theory accepted in the 1960s.",
      "Although the jigsaw-puzzle fit of the continents was compelling, Wegener's theory was accepted only after plate tectonics were discovered.",
      "Wegener's theory of continental drift was initially rejected because he was unable to explain the physical mechanism by which continents moved.",
      "In 1912, Alfred Wegener was ridiculed by geologists despite his accurate evidence about South America and Africa."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. It directly addresses the goal of explaining the reason for the initial rejection—his inability to account for the physical mechanism of movement."
  },
  {
    "id": 34,
    "code": "H6-RW34",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 7,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>When the committee voted on the proposed environmental regulations, the decision was entirely _______; not a single member voiced an objection or cast a dissenting vote.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "ambiguous",
      "unanimous",
      "unprecedented",
      "contentious"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Unanimous\" means held or arrived at by the agreement of all parties involved, which matches having no dissenting votes."
  },
  {
    "id": 35,
    "code": "H6-RW35",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 8,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>By the time the famous author finally published her second novel in 1960, her devoted fans _______ over a decade for a continuation of the story.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "waited",
      "wait",
      "had been waiting",
      "will wait"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The past action occurring over a duration before another past action (\"in 1960\") requires the past perfect continuous tense \"had been waiting\"."
  },
  {
    "id": 36,
    "code": "H6-RW36",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 9,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>To secure the bridge against hurricane-force winds, the _______ calculations regarding tension and aerodynamic stability had to be flawless.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "engineers",
      "engineers'",
      "engineer's",
      "engineers's"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The plural possessive \"engineers'\" correctly indicates that the calculations belonged to multiple engineers."
  },
  {
    "id": 37,
    "code": "H6-RW37",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 10,
    "topic": "Words in Context",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Despite the intense emotional pressure of the trial, the defendant remained surprisingly _______, maintaining a neutral expression and calm demeanor as the verdict was read.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "stoic",
      "exuberant",
      "vindicated",
      "perplexed"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. \"Stoic\" describes a person who can endure pain or hardship without showing feelings or complaining, matching \"neutral expression and calm demeanor\"."
  },
  {
    "id": 38,
    "code": "H6-RW38",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 11,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The orchestra conductor demanded three things from her musicians: absolute attention to the tempo, rigorous daily practice, and _______.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "that they passionately performed the music",
      "performing with passion",
      "passionate performance",
      "to perform passionately"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The series consists of noun phrases: \"absolute attention...\", \"rigorous daily practice...\", and \"passionate performance\". Parallel structure requires a noun phrase."
  },
  {
    "id": 39,
    "code": "H6-RW39",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 12,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>A flock of migratory monarch butterflies, which can travel thousands of miles across North America to reach their wintering grounds in Mexico, _______ a remarkable feat of navigation relying on the earth’s magnetic field.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "perform",
      "performs",
      "performing",
      "have performed"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is \"A flock\" (singular collective noun), which requires the singular verb \"performs\"."
  },
  {
    "id": 40,
    "code": "H6-RW40",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 13,
    "topic": "Text Structure & Purpose",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Marine biologists have long puzzled over the \"blooming\" of certain deep-sea coral reefs. Initially, they hypothesized that the corals relied entirely on organic detritus falling from the ocean surface. However, recent submersible expeditions revealed a different mechanism: the corals are situated near hydrothermal vents, utilizing chemical compounds expelled by the vents to sustain a unique symbiotic bacteria. This discovery requires a fundamental rewriting of deep-sea ecological models.</p><p>Which choice best describes the overall structure of the text?</p>",
    "options": [
      "It presents a historical mystery, offers a traditional hypothesis, introduces new evidence that refutes it, and states the broader implications.",
      "It defines a scientific term, lists several examples of the phenomenon, and argues for increased funding for future research.",
      "It introduces a biological mechanism, compares it to a similar mechanism in terrestrial plants, and concludes with a warning about climate change.",
      "It states a controversial theory, attacks the credibility of the scientists who proposed it, and offers an alternative theory."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The text introduces a puzzle (mystery), notes the initial hypothesis, presents new findings from submersible dives that refute it, and discusses the broader implications for ecological models."
  },
  {
    "id": 41,
    "code": "H6-RW41",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 14,
    "topic": "Transitions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>In highly competitive markets, companies often drastically lower their prices to drive rival businesses out of the industry. _______, once they achieve a monopoly, they usually raise their prices significantly higher than the original market rate.</p><p>Which choice completes the text with the most logical transition?</p>",
    "options": [
      "Similarly",
      "In other words",
      "However",
      "As a result"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The contrast between initially slashing prices and subsequent extreme price increases after attaining dominance is signaled by \"However\"."
  },
  {
    "id": 42,
    "code": "H6-RW42",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 15,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The Pacific Ring of Fire is home to approximately 75 percent of the world's active _______ it is also the site of most of the planet's major earthquakes.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "volcanoes, furthermore,",
      "volcanoes; furthermore,",
      "volcanoes furthermore",
      "volcanoes,"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"volcanoes; furthermore,\" links two complete independent clauses with a semicolon before the conjunctive adverb and a comma after it."
  },
  {
    "id": 43,
    "code": "H6-RW43",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 16,
    "topic": "Cross-Text Connections",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p><b>Text 1</b><br>Proponents of vertical farming argue that growing crops in stacked layers indoors is the ultimate solution to global food shortages. By utilizing hydroponics and LED lighting, vertical farms can produce high yields year-round in urban centers, drastically reducing the carbon footprint associated with transporting food from rural farms to city supermarkets.</p><p><b>Text 2</b><br>While vertical farming excels at growing leafy greens, agricultural economist Dr. Lin notes a critical limitation. Calorie-dense staple crops like wheat, corn, and rice require vastly more space and light than vertical systems can efficiently provide. Relying on vertical farming to feed the world ignores the immense energy costs required to artificially replicate the intense sunlight these foundational crops need.</p><p>Based on the texts, how would Dr. Lin (Text 2) most likely respond to the claims in Text 1?</p>",
    "options": [
      "By agreeing that vertical farming completely eliminates the need for rural agriculture.",
      "By arguing that transporting food into cities is actually environmentally beneficial.",
      "By pointing out that the proposed solution is inadequate for producing the crops most essential to global food security.",
      "By suggesting that LED lighting is harmful to the nutritional value of leafy greens."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Dr. Lin points out that vertical farms cannot efficiently support calorie-dense staple crops (wheat, corn, rice), which are foundational for feeding the world."
  },
  {
    "id": 44,
    "code": "H6-RW44",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 17,
    "topic": "Text Structure & Purpose",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The following text is adapted from Nathaniel Hawthorne's 1851 novel, <i>The House of the Seven Gables</i>.<br>\"Halfway down a by-street of one of our New England towns stands a rusty wooden house, with seven acutely peaked gables, facing towards various points of the compass, and a huge, clustered chimney in the midst. The street is Pyncheon Street; the house is the old Pyncheon House; and an elm-tree, of wide circumference, rooted before the door, is familiar to every town-born child by the title of the Pyncheon Elm.\"</p><p>Which choice best states the main purpose of the text?</p>",
    "options": [
      "To argue for the preservation of historical New England architecture.",
      "To introduce the primary setting and its deep integration into the local town.",
      "To foreshadow the tragic downfall of the Pyncheon family.",
      "To explain how the Pyncheon Elm was planted by the town's founders."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Hawthorne introduces the architectural details of the Pyncheon House and Elm tree, grounding the narrative in its specific physical and community setting."
  },
  {
    "id": 45,
    "code": "H6-RW45",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 18,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Before the city council approves the construction of the new highway, _______ must review the environmental impact report submitted by the independent consulting firm.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "it",
      "they",
      "he or she",
      "its"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. \"The city council\" is a singular collective noun, requiring the singular pronoun \"it\"."
  },
  {
    "id": 46,
    "code": "H6-RW46",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 19,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>While excavating the ruins of the ancient Mesopotamian city, _______ buried beneath layers of sediment.</p><p>Which choice completes the text so that it conforms to the conventions of Standard English?</p>",
    "options": [
      "a collection of clay tablets was discovered by the archaeologists",
      "the clay tablets were found by the archaeologists",
      "the archaeologists discovered a collection of clay tablets",
      "discovery of the clay tablets was made by the archaeologists"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The introductory participial modifier \"While excavating...\" must directly precede the subject performing the action (\"the archaeologists\")."
  },
  {
    "id": 47,
    "code": "H6-RW47",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 20,
    "topic": "Inferences",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>The urbanization of natural landscapes frequently results in the \"heat island effect,\" where city centers experience significantly higher ambient temperatures than surrounding rural areas. This is primarily caused by asphalt and concrete absorbing and retaining solar radiation. To mitigate this, urban planners in City Y have proposed replacing several large concrete plazas with dense, soil-based botanical gardens. If this proposal is enacted, it is highly probable that _______</p><p>Which choice most logically completes the text?</p>",
    "options": [
      "the overall population of City Y will begin to decline rapidly.",
      "the localized ambient temperatures around the new gardens will decrease.",
      "the concrete plazas will absorb even more solar radiation than before.",
      "rural areas surrounding City Y will experience a sudden spike in temperature."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Replacing heat-retaining concrete with soil-based botanical gardens directly addresses the cause of the heat island effect, leading to lower localized temperatures."
  },
  {
    "id": 48,
    "code": "H6-RW48",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 21,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Restoring Renaissance paintings is a notoriously _______ process; the restorers must use specialized chemical solvents and microscopic brushes to remove centuries of grime without stripping away the original paint.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "superficial",
      "abrasive",
      "delicate",
      "erratic"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. \"Delicate\" means requiring sensitive or careful handling, perfectly fitting work with microscopic brushes and chemical solvents on centuries-old paint."
  },
  {
    "id": 49,
    "code": "H6-RW49",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 22,
    "topic": "Rhetorical Synthesis",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>Polar bears are marine mammals native to the Arctic Circle.</li><li>They rely entirely on sea ice as a platform to hunt ringed seals, their primary food source.</li><li>Due to global warming, Arctic sea ice is melting earlier in the spring and forming later in the fall.</li><li>This forces polar bears to spend longer periods on land, where food is scarce.</li><li>As a result, polar bear populations are experiencing rapid nutritional stress and decline.</li></ul><p>The student wants to explain the specific mechanism by which climate change is harming polar bears. Which choice most effectively uses relevant information from the notes to accomplish this goal?</p>",
    "options": [
      "Polar bears, which are native to the Arctic Circle, are experiencing rapid population decline due to global warming.",
      "Because global warming is melting the Arctic sea ice they use as hunting platforms, polar bears are forced onto land for longer periods, leading to starvation.",
      "Polar bears rely entirely on ringed seals for food, which they hunt from sea ice platforms in the Arctic.",
      "As sea ice melts earlier in the spring, polar bears—marine mammals native to the Arctic—are suffering nutritional stress."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. It precisely articulates the cause-and-effect mechanism: melted ice platforms -> longer time on land -> food scarcity and starvation."
  },
  {
    "id": 50,
    "code": "H6-RW50",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 23,
    "topic": "Words in Context",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>The CEO’s claim that the corporate merger would be a seamless transition turned out to be a mere _______; behind closed doors, the integration of the two companies was chaotic and fiercely contested.</p><p>Which choice completes the text with the most logical and precise word or phrase?</p>",
    "options": [
      "mandate",
      "facade",
      "synergy",
      "premonition"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Facade\" refers to an outward appearance that is maintained to conceal a less pleasant reality."
  },
  {
    "id": 51,
    "code": "H6-RW51",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 24,
    "topic": "Transitions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>During the Apollo 11 mission, Neil Armstrong and Buzz Aldrin spent over two hours exploring the lunar surface. _______, Michael Collins remained in lunar orbit aboard the Command Module, ensuring their eventual safe return to Earth.</p><p>Which choice completes the text with the most logical transition?</p>",
    "options": [
      "Meanwhile",
      "For example",
      "Consequently",
      "Specifically"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. \"Meanwhile\" indicates that an event was occurring concurrently at another location."
  },
  {
    "id": 52,
    "code": "H6-RW52",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 25,
    "topic": "Command of Evidence",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>For decades, anthropologists assumed that Neanderthals lacked the cognitive capacity for symbolic thought, a trait believed to be exclusive to <i>Homo sapiens</i>. However, researcher Dirk Hoffmann recently analyzed cave paintings in Spain, finding red geometric shapes and hand stencils. Using uranium-thorium dating, Hoffmann’s team determined the age of the paintings.</p><p>Which finding, if true, would most strongly support Hoffmann's conclusion that Neanderthals engaged in symbolic art?</p>",
    "options": [
      "The paintings were dated to 20,000 years ago, a time when only Homo sapiens lived in Spain.",
      "The paintings were dated to 65,000 years ago, which is 20,000 years before Homo sapiens arrived in Europe.",
      "The pigments used in the paintings were derived from minerals found exclusively in North Africa.",
      "Similar geometric cave paintings have been discovered in modern-day France and Italy."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Dating the art to 65,000 years ago—well before Homo sapiens arrived in Europe—demonstrates that Neanderthals were the creators, proving their capacity for symbolic art."
  },
  {
    "id": 53,
    "code": "H6-RW53",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 26,
    "topic": "Transitions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Regular exercise is widely known to improve cardiovascular health and muscular strength. _______, recent neuroscientific studies demonstrate that it also stimulates the release of brain-derived neurotrophic factor (BDNF), a protein that promotes memory retention and cognitive function.</p><p>Which choice completes the text with the most logical transition?</p>",
    "options": [
      "Previously",
      "Furthermore",
      "Regardless",
      "On the contrary"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Furthermore\" adds complementary supporting evidence about another benefit of regular exercise."
  },
  {
    "id": 54,
    "code": "H6-RW54",
    "prefix": "H6",
    "section": "rw",
    "module": 2,
    "qnum": 27,
    "topic": "Command of Evidence",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p><b>Vitamin C Retention in Orange Juice After 14 Days</b></p><table style=\"margin: 8px 0; border-collapse: collapse; font-size: 0.9rem;\"><thead><tr style=\"background: #e2e8f0;\"><th style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">Storage Condition</th><th style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">Temperature</th><th style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">Retention (%)</th></tr></thead><tbody><tr><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">Refrigerated</td><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">4°C</td><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">85%</td></tr><tr><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">Room Temperature</td><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">20°C</td><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">52%</td></tr><tr><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">Warm</td><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">35°C</td><td style=\"padding: 4px 10px; border: 1px solid #cbd5e1;\">28%</td></tr></tbody></table><p>A nutritionist is writing an article on the importance of proper food storage. She asserts that storing citrus juices at room temperature significantly accelerates the degradation of essential nutrients compared to refrigeration. According to the data provided, _______</p><p>Which choice most effectively uses data from the table to complete the statement?</p>",
    "options": [
      "orange juice stored at 20°C retains only 52% of its Vitamin C after 14 days, whereas juice kept at 4°C retains 85%.",
      "keeping orange juice at 35°C will cause it to lose exactly half of its Vitamin C after just one week.",
      "storing orange juice in a refrigerator ensures it will never lose more than 8% of its original Vitamin C content.",
      "orange juice stored at room temperature has a higher retention rate after 14 days than juice stored at 35°C after 7 days."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. It accurately cites the data showing that room temperature storage results in only 52% retention compared to 85% retention under refrigeration."
  },
  {
    "id": 55,
    "code": "H6-M55",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 1,
    "topic": "Circles & Angles",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>In a circle with center $O$, a central angle $\\theta$ intercepts an arc of length $3\\pi$. If the radius of the circle is $6$, what is the measure of angle $\\theta$ in degrees?</p>",
    "options": [
      "30^\\circ",
      "45^\\circ",
      "90^\\circ",
      "180^\\circ"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The arc length formula is $s = r\\theta$ (where $\\theta$ is in radians), so $3\\pi = 6\\theta \\implies \\theta = \\frac{3\\pi}{6} = \\frac{\\pi}{2}$ radians. Converting to degrees: $\\frac{\\pi}{2} \\times \\frac{180^\\circ}{\\pi} = 90^\\circ$."
  },
  {
    "id": 56,
    "code": "H6-M56",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 2,
    "topic": "Trigonometry",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>A right triangle has legs of length $6$ units and $8$ units. What is the cosine of the smallest angle in the triangle?</p>",
    "options": [
      "0.6",
      "0.75",
      "0.8",
      "1.33"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Using the Pythagorean theorem, the hypotenuse is $\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10$. In any triangle, the smallest angle is opposite the shortest side ($6$). The side adjacent to the smallest angle is $8$. Thus, $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{8}{10} = 0.8$."
  },
  {
    "id": 57,
    "code": "H6-M57",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 3,
    "topic": "Lines & Angles",
    "difficulty": "Easy",
    "isFillIn": false,
    "text": "<p>Two parallel lines are intersected by a transversal. If one of the acute interior angles measures $(3x+10)^\\circ$ and the corresponding acute angle measures $(5x-30)^\\circ$, what is the value of $x$?</p>",
    "options": [
      "10",
      "15",
      "20",
      "25"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Corresponding angles formed by parallel lines cut by a transversal are equal in measure. Set the expressions equal: $$3x + 10 = 5x - 30$$ Subtract $3x$ from both sides: $$10 = 2x - 30$$ Add $30$: $$2x = 40 \\implies x = 20$$."
  },
  {
    "id": 58,
    "code": "H6-M58",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 4,
    "topic": "Systems of Inequalities",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Which of the following points $(x,y)$ is a solution to the system of inequalities below?<br>$$y \\le -2x + 5$$<br>$$y > x - 4$$</p>",
    "options": [
      "(4, -2)",
      "(0, 0)",
      "(5, 3)",
      "(-3, 12)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Test $(0, 0)$: for the first inequality, $0 \\le -2(0) + 5 \\implies 0 \\le 5$ (True). For the second inequality, $0 > 0 - 4 \\implies 0 > -4$ (True). Both conditions hold."
  },
  {
    "id": 59,
    "code": "H6-M59",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 5,
    "topic": "Ratios & Proportions",
    "difficulty": "Easy",
    "isFillIn": false,
    "text": "<p>At an animal shelter, the ratio of cats to dogs is $5$ to $3$. If there is a total of $120$ cats and dogs at the shelter, how many more cats are there than dogs?</p>",
    "options": [
      "15",
      "30",
      "45",
      "75"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Total ratio parts $= 5 + 3 = 8$. Each part represents $\\frac{120}{8} = 15$ animals. Number of cats $= 5 \\times 15 = 75$. Number of dogs $= 3 \\times 15 = 45$. Difference $= 75 - 45 = 30$ more cats."
  },
  {
    "id": 60,
    "code": "H6-M60",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 6,
    "topic": "Statistics",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The average (arithmetic mean) of four numbers is $15$. If a fifth number is added to the set, the new average becomes $17$. What is the value of the fifth number?</p>",
    "options": [
      "17",
      "21",
      "25",
      "32"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The sum of the original four numbers is $4 \\times 15 = 60$. The sum of all five numbers is $5 \\times 17 = 85$. The fifth number is $85 - 60 = 25$."
  },
  {
    "id": 61,
    "code": "H6-M61",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 7,
    "topic": "Exponential Functions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>A biologist is studying a population of bacteria that doubles every $4$ hours. If the initial population is $500$ bacteria, which of the following equations models the population, $P$, after $t$ hours?</p>",
    "options": [
      "P(t) = 500(2)^{4t}",
      "P(t) = 500(2)^{t/4}",
      "P(t) = 500(4)^{t/2}",
      "P(t) = 500(4)^{2t}"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. For exponential doubling with a doubling period of $d$ hours, the model is $P(t) = P_0(2)^{t/d}$. Here $P_0 = 500$ and $d = 4$, so $P(t) = 500(2)^{t/4}$."
  },
  {
    "id": 62,
    "code": "H6-M62",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 8,
    "topic": "Functions & Polynomials",
    "difficulty": "Easy",
    "isFillIn": false,
    "text": "<p>The function $f$ is defined by $f(x) = 2x^2 - 3x + 1$. What is the value of $f(-2)$?</p>",
    "options": [
      "3",
      "7",
      "11",
      "15"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Substitute $x = -2$: $$f(-2) = 2(-2)^2 - 3(-2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15$$."
  },
  {
    "id": 63,
    "code": "H6-M63",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 9,
    "topic": "Linear Equations & Rates",
    "difficulty": "Medium",
    "isFillIn": true,
    "text": "<p>A large industrial tank currently contains $40$ gallons of chemical solvent. The solvent is draining out of the tank at a constant rate of $2.5$ gallons per minute. How many minutes will it take for the tank to contain exactly $15$ gallons?</p>",
    "answer": "10",
    "acceptedAnswers": [
      "10",
      "10.0"
    ],
    "explanation": "The volume in the tank after $m$ minutes is $V(m) = 40 - 2.5m$. Setting $V(m) = 15$: $$40 - 2.5m = 15 \\implies 2.5m = 25 \\implies m = 10$$ minutes."
  },
  {
    "id": 64,
    "code": "H6-M64",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 10,
    "topic": "Systems of Equations",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>If $(x,y)$ is the solution to the system of equations below, what is the value of $x+y$?<br>$$2x + 3y = 12$$<br>$$4x - y = 10$$</p>",
    "options": [
      "2",
      "3",
      "5",
      "7"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. From the second equation, $y = 4x - 10$. Substitute into the first: $$2x + 3(4x - 10) = 12 \\implies 2x + 12x - 30 = 12 \\implies 14x = 42 \\implies x = 3$$ Then $y = 4(3) - 10 = 2$. Therefore, $x + y = 3 + 2 = 5$."
  },
  {
    "id": 65,
    "code": "H6-M65",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 11,
    "topic": "Quadratic Equations",
    "difficulty": "Hard",
    "isFillIn": true,
    "text": "<p>The quadratic equation $3x^2 - 12x + k = 0$ has exactly one real solution. What is the value of the constant $k$?</p>",
    "answer": "12",
    "acceptedAnswers": [
      "12",
      "12.0"
    ],
    "explanation": "A quadratic equation $ax^2 + bx + c = 0$ has exactly one real solution if and only if its discriminant equals zero: $b^2 - 4ac = 0$. Here $a = 3$, $b = -12$, and $c = k$: $$(-12)^2 - 4(3)(k) = 0 \\implies 144 - 12k = 0 \\implies 12k = 144 \\implies k = 12$$."
  },
  {
    "id": 66,
    "code": "H6-M66",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 12,
    "topic": "Quadratic Functions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The graph of the quadratic equation $y = -2(x-3)^2 + 8$ is a parabola in the $xy$-plane. What is the maximum value of $y$ on this graph?</p>",
    "options": [
      "-2",
      "3",
      "8",
      "18"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In vertex form $y = a(x - h)^2 + k$, because $a = -2 < 0$, the parabola opens downward and attains its absolute maximum at the vertex $(h, k) = (3, 8)$. Thus, the maximum value of $y$ is $8$."
  },
  {
    "id": 67,
    "code": "H6-M67",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 13,
    "topic": "3D Geometry",
    "difficulty": "Medium",
    "isFillIn": true,
    "text": "<p>A solid rectangular prism has a length of $5$ inches, a width of $4$ inches, and a height of $h$ inches. If the total surface area of the prism is $148$ square inches, what is the value of $h$?</p>",
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "6.0"
    ],
    "explanation": "The surface area of a rectangular prism is $A = 2(lw + lh + wh)$. Substituting the given values: $$2(5 \\times 4 + 5h + 4h) = 148 \\implies 2(20 + 9h) = 148 \\implies 40 + 18h = 148 \\implies 18h = 108 \\implies h = 6$$ inches."
  },
  {
    "id": 68,
    "code": "H6-M68",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 14,
    "topic": "Systems of Equations",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The system of equations below has infinitely many solutions.<br>$$cx + 4y = 10$$<br>$$3x + 2y = 5$$<br>What is the value of the constant $c$?</p>",
    "options": [
      "1.5",
      "3",
      "6",
      "12"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. For a linear system to have infinitely many solutions, the equations must be proportional multiples of each other. Multiplying the second equation $3x + 2y = 5$ by $2$ gives $6x + 4y = 10$. Comparing this with $cx + 4y = 10$ yields $c = 6$."
  },
  {
    "id": 69,
    "code": "H6-M69",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 15,
    "topic": "Polynomials",
    "difficulty": "Medium",
    "isFillIn": true,
    "text": "<p>The function $f$ is defined by the polynomial $f(x) = (x-2)(x+5)(x-c)$. If $f(4) = 0$ and $c > 0$, what is the value of $c$?</p>",
    "answer": "4",
    "acceptedAnswers": [
      "4",
      "4.0"
    ],
    "explanation": "Evaluate $f(4)$: $$f(4) = (4 - 2)(4 + 5)(4 - c) = (2)(9)(4 - c) = 18(4 - c)$$. Setting $f(4) = 0 \\implies 18(4 - c) = 0 \\implies 4 - c = 0 \\implies c = 4$."
  },
  {
    "id": 70,
    "code": "H6-M70",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 16,
    "topic": "Percentages & Discounts",
    "difficulty": "Easy",
    "isFillIn": false,
    "text": "<p>A sporting goods store is having a sale where all winter jackets are discounted by $25\\%$. If the original price of a jacket is $\\$80$, what is the sale price?</p>",
    "options": [
      "\\$20",
      "\\$55",
      "\\$60",
      "\\$105"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. A $25\\%$ discount means the customer pays $100\\% - 25\\% = 75\\%$ of the original price. $\\$80 \\times 0.75 = \\$60$."
  },
  {
    "id": 71,
    "code": "H6-M71",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 17,
    "topic": "Linear Equations",
    "difficulty": "Easy",
    "isFillIn": false,
    "text": "<p>If $3(x-4) = 15$, what is the value of $x$?</p>",
    "options": [
      "1",
      "5",
      "9",
      "19"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Divide both sides by $3$: $x - 4 = 5$. Add $4$ to both sides: $x = 9$."
  },
  {
    "id": 72,
    "code": "H6-M72",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 18,
    "topic": "Coordinate Geometry (Circles)",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>In the $xy$-plane, the graph of the equation $x^2 + y^2 - 6x + 8y = 11$ is a circle. What is the radius of the circle?</p>",
    "options": [
      "\\sqrt{11}",
      "5",
      "6",
      "36"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Complete the square for both $x$ and $y$: $$(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16 \\implies (x - 3)^2 + (y + 4)^2 = 36$$ The standard equation is $(x-h)^2 + (y-k)^2 = r^2$, so $r^2 = 36 \\implies r = 6$."
  },
  {
    "id": 73,
    "code": "H6-M73",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 19,
    "topic": "Linear Equations",
    "difficulty": "Easy",
    "isFillIn": true,
    "text": "<p>If $4x - 7 = 21$, what is the value of $x$?</p>",
    "answer": "7",
    "acceptedAnswers": [
      "7",
      "7.0"
    ],
    "explanation": "Add $7$ to both sides: $4x = 28$. Divide by $4$: $x = 7$."
  },
  {
    "id": 74,
    "code": "H6-M74",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 20,
    "topic": "Linear Functions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>In the $xy$-plane, the graph of the linear function $y = mx + b$ passes through the points $(0,5)$ and $(4,17)$. What is the value of $m$?</p>",
    "options": [
      "3",
      "4",
      "5",
      "12"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The slope $m$ between $(x_1, y_1) = (0, 5)$ and $(x_2, y_2) = (4, 17)$ is $$m = \\frac{17 - 5}{4 - 0} = \\frac{12}{4} = 3$$."
  },
  {
    "id": 75,
    "code": "H6-M75",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 21,
    "topic": "Linear Function Interpretation",
    "difficulty": "Easy",
    "isFillIn": false,
    "text": "<p>The cost $C$, in dollars, to rent a piece of landscaping equipment for $h$ hours is given by the equation $C = 45h + 100$. What does the number $100$ represent in this equation?</p>",
    "options": [
      "The cost per hour to rent the equipment.",
      "The total cost to rent the equipment for one hour.",
      "The maximum number of hours the equipment can be rented.",
      "The base fee charged to rent the equipment, regardless of hours used."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. In a linear model $C = mh + b$, the constant term $b = 100$ is the $y$-intercept, representing the fixed initial charge or base rental fee before any hours are accumulated ($h=0$)."
  },
  {
    "id": 76,
    "code": "H6-M76",
    "prefix": "H6",
    "section": "math",
    "module": 1,
    "qnum": 22,
    "topic": "Radical Equations",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>What is the solution set to the equation $\\sqrt{2x+7} - x = 2$?</p>",
    "options": [
      "\\{1\\}",
      "\\{-3, 1\\}",
      "\\{-3\\}",
      "The equation has no real solutions."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Isolate the radical: $\\sqrt{2x+7} = x + 2$. Squaring both sides: $$2x + 7 = (x + 2)^2 = x^2 + 4x + 4 \\implies x^2 + 2x - 3 = 0 \\implies (x + 3)(x - 1) = 0$$. Testing $x = -3$: $\\sqrt{2(-3)+7} - (-3) = \\sqrt{1} + 3 = 4 \\ne 2$ (extraneous). Testing $x = 1$: $\\sqrt{2(1)+7} - 1 = \\sqrt{9} - 1 = 2$ (valid). Thus, the only true solution is $\\{1\\}$."
  },
  {
    "id": 77,
    "code": "H6-M77",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 1,
    "topic": "Quadratic Optimization",
    "difficulty": "Medium",
    "isFillIn": true,
    "text": "<p>A company sells a specialty product. The daily profit, $P(x)$, in dollars, from selling $x$ units of the product is modeled by the equation $P(x) = -2x^2 + 120x - 800$. How many units must be sold daily to maximize the profit?</p>",
    "answer": "30",
    "acceptedAnswers": [
      "30",
      "30.0"
    ],
    "explanation": "The profit function is a downward-opening parabola ($a = -2 < 0$). The maximum profit occurs at the vertex: $$x = -\\frac{b}{2a} = -\\frac{120}{2(-2)} = \\frac{120}{4} = 30$$ units."
  },
  {
    "id": 78,
    "code": "H6-M78",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 2,
    "topic": "Statistics & Confidence Intervals",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>A researcher surveys a random sample of $400$ households in a city and finds that the mean number of smart devices per household is $4.2$, with a margin of error of $0.5$ at a $95\\%$ confidence level. Which of the following is the most appropriate conclusion?</p>",
    "options": [
      "Exactly 95% of the households in the city own between 3.7 and 4.7 smart devices.",
      "The true mean number of smart devices for all households in the city is likely between 3.7 and 4.7.",
      "If the survey were conducted again, the new sample mean would be exactly 4.2.",
      "The margin of error would decrease if the researcher had only surveyed 100 households."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. A confidence interval is constructed as $\\text{estimate} \\pm \\text{margin of error}$, here $4.2 \\pm 0.5 = [3.7, 4.7]$. This interval provides an estimate of the true population parameter, meaning the true mean for all households is plausibly between $3.7$ and $4.7$."
  },
  {
    "id": 79,
    "code": "H6-M79",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 3,
    "topic": "Similar Figures & Area Ratios",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>Triangle $XYZ$ is similar to triangle $PQR$, where angles $X, Y,$ and $Z$ correspond to angles $P, Q,$ and $R$, respectively. If the length of side $XY$ is $3$ times the length of side $PQ$, and the area of triangle $PQR$ is $15$ square units, what is the area of triangle $XYZ$?</p>",
    "options": [
      "15",
      "45",
      "75",
      "135"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. When two figures are similar with linear scale factor $k$, their areas scale by $k^2$. Here $k = 3$, so the area ratio is $3^2 = 9$. The area of $\\triangle XYZ = 15 \\times 9 = 135$ square units."
  },
  {
    "id": 80,
    "code": "H6-M80",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 4,
    "topic": "3D Geometry",
    "difficulty": "Medium",
    "isFillIn": true,
    "text": "<p>A right circular cylinder has a volume of $144\\pi$ cubic inches. If the height of the cylinder is $4$ inches, what is the diameter of the base of the cylinder, in inches?</p>",
    "answer": "12",
    "acceptedAnswers": [
      "12",
      "12.0"
    ],
    "explanation": "The volume formula for a right circular cylinder is $V = \\pi r^2 h$. Substituting $V = 144\\pi$ and $h = 4$: $$144\\pi = \\pi r^2 (4) \\implies 4r^2 = 144 \\implies r^2 = 36 \\implies r = 6$$ The diameter is $2r = 2 \\times 6 = 12$ inches."
  },
  {
    "id": 81,
    "code": "H6-M81",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 5,
    "topic": "Trigonometric Identities",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>In a right triangle, angle $A$ and angle $B$ are acute angles. If $\\sin(A) = \\frac{4}{5}$, what is the value of $\\cos(B) - \\sin(A)$?</p>",
    "options": [
      "-4/5",
      "0",
      "3/5",
      "1"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In any right triangle, the acute angles $A$ and $B$ are complementary ($A + B = 90^\\circ$). By the cofunction identity, $\\cos(B) = \\sin(90^\\circ - B) = \\sin(A)$. Therefore, $\\cos(B) - \\sin(A) = \\sin(A) - \\sin(A) = 0$."
  },
  {
    "id": 82,
    "code": "H6-M82",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 6,
    "topic": "Non-linear Systems of Equations",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>$$y = -3x^2 + 12x - 5$$<br>$$y = 2x + k$$<br>In the system of equations above, $k$ is a constant. For which of the following values of $k$ does the system have exactly one real solution?</p>",
    "options": [
      "2",
      "3",
      "10/3",
      "10/4"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Equate the two expressions for $y$: $$-3x^2 + 12x - 5 = 2x + k \\implies 3x^2 - 10x + (k + 5) = 0$$ For this quadratic to have exactly one real solution, its discriminant must be zero: $$b^2 - 4ac = (-10)^2 - 4(3)(k + 5) = 0 \\implies 100 - 12(k + 5) = 0 \\implies 12(k + 5) = 100 \\implies k + 5 = \\frac{100}{12} = \\frac{25}{3} \\implies k = \\frac{25}{3} - 5 = \\frac{10}{3}$$."
  },
  {
    "id": 83,
    "code": "H6-M83",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 7,
    "topic": "Radical Expressions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>If $x > 0$ and $\\sqrt{9x^2 + 16x^2} = ax$, what is the value of $a$?</p>",
    "options": [
      "5",
      "7",
      "12",
      "25"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Combine like terms inside the radical: $$9x^2 + 16x^2 = 25x^2$$ Then $\\sqrt{25x^2} = \\sqrt{25}\\sqrt{x^2} = 5|x|$. Since $x > 0$, this simplifies to $5x$. Thus, $ax = 5x \\implies a = 5$."
  },
  {
    "id": 84,
    "code": "H6-M84",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 8,
    "topic": "Algebraic Modeling",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>For a specific brand of smartphone, the function $V(t) = 800(0.8)^t$ models the value of the phone, in dollars, $t$ years after it was purchased. The function $C(t) = 20t + 50$ models the total cost, in dollars, of screen repairs and maintenance over $t$ years. A user wants to sell the phone when its value is exactly equal to the total cost of maintenance. Which equation must be solved to find the number of years $t$ until the user sells the phone?</p>",
    "options": [
      "800(0.8)^t + 20t + 50 = 0",
      "800(0.8)^t = 20t + 50",
      "0.8^t = 20t + 850",
      "800(0.8)^t - (20t + 50) = 800"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Setting the phone's value equal to the cumulative maintenance cost means setting $V(t) = C(t)$, which yields $800(0.8)^t = 20t + 50$."
  },
  {
    "id": 85,
    "code": "H6-M85",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 9,
    "topic": "Exponential Functions",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>In the $xy$-plane, the exponential function $f(x) = c \\cdot (a)^x$ passes through the points $(0,5)$ and $(2,45)$, where $a > 0$. Which of the following is equivalent to $f(3)$?</p>",
    "options": [
      "90",
      "135",
      "405",
      "1215"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute $(0, 5)$: $f(0) = c \\cdot a^0 = c = 5$. Substitute $(2, 45)$: $5 \\cdot a^2 = 45 \\implies a^2 = 9 \\implies a = 3$ (since $a > 0$). Thus, $f(x) = 5 \\cdot 3^x$. For $x = 3$: $$f(3) = 5 \\cdot 3^3 = 5 \\cdot 27 = 135$$."
  },
  {
    "id": 86,
    "code": "H6-M86",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 10,
    "topic": "Circles in the Coordinate Plane",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>The equation $x^2 + y^2 - 12x + 8y = 12$ represents a circle in the $xy$-plane. Which of the following points lies on the circle?</p>",
    "options": [
      "(6, -4)",
      "(6, 4)",
      "(14, 0)",
      "(14, 4)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Complete the square: $$(x - 6)^2 + (y + 4)^2 = 12 + 36 + 16 = 64$$ The center is $(6, -4)$ and the radius squared is $64$. Test $(6, 4)$: $$(6 - 6)^2 + (4 + 4)^2 = 0^2 + 8^2 = 64$$, which satisfies the equation."
  },
  {
    "id": 87,
    "code": "H6-M87",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 11,
    "topic": "Circles & Distance",
    "difficulty": "Medium",
    "isFillIn": true,
    "text": "<p>A circle in the $xy$-plane has a center at $(3,-2)$ and passes through the point $(7,1)$. What is the area of the circle divided by $\\pi$?</p>",
    "answer": "25",
    "acceptedAnswers": [
      "25",
      "25.0"
    ],
    "explanation": "The radius squared is the square of the Euclidean distance between center $(3, -2)$ and point $(7, 1)$: $$r^2 = (7 - 3)^2 + (1 - (-2))^2 = 4^2 + 3^2 = 16 + 9 = 25$$. The area of the circle is $A = \\pi r^2 = 25\\pi$. The area divided by $\\pi$ is $\\frac{25\\pi}{\\pi} = 25$."
  },
  {
    "id": 88,
    "code": "H6-M88",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 12,
    "topic": "Exponential Decay",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>A radioactive isotope decays according to the formula $N(t) = N_0(0.5)^{t/14}$, where $N(t)$ is the amount remaining after $t$ days, and $N_0$ is the initial amount. Which of the following best describes the decay rate of the isotope?</p>",
    "options": [
      "It decays by 50% every 1 day.",
      "It decays by 50% every 14 days.",
      "It decays by 14% every 0.5 days.",
      "It decays by 5% every 14 days."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The base is $0.5$, which represents multiplying the remaining quantity by $0.5$ (reducing it by $50\\%$). The exponent is $\\frac{t}{14}$, indicating that this halving occurs every $14$ days."
  },
  {
    "id": 89,
    "code": "H6-M89",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 13,
    "topic": "Polynomial Factor Theorem",
    "difficulty": "Hard",
    "isFillIn": true,
    "text": "<p>The polynomial $P(x) = x^3 - 7x^2 + kx - 12$ is completely divisible by $(x-3)$. What is the value of the constant $k$?</p>",
    "answer": "16",
    "acceptedAnswers": [
      "16",
      "16.0"
    ],
    "explanation": "By the Factor Theorem, if $(x - 3)$ divides $P(x)$, then $P(3) = 0$: $$P(3) = 3^3 - 7(3^2) + k(3) - 12 = 0 \\implies 27 - 63 + 3k - 12 = 0 \\implies 3k - 48 = 0 \\implies 3k = 48 \\implies k = 16$$."
  },
  {
    "id": 90,
    "code": "H6-M90",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 14,
    "topic": "Polynomial Functions & Zeroes",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>In the $xy$-plane, the graph of the polynomial function $f$ crosses the $x$-axis at exactly three points: $x = -5$, $x = 1$, and $x = 3$. Which of the following could define $f(x)$?</p>",
    "options": [
      "f(x) = (x - 5)(x + 1)(x + 3)",
      "f(x) = (x + 5)(x - 1)(x - 3)",
      "f(x) = (x + 5)^2(x - 1)(x - 3)",
      "f(x) = (x - 5)^2(x + 1)(x + 3)"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Roots at $x = -5, 1, 3$ correspond to factors $(x - (-5)) = (x + 5)$, $(x - 1)$, and $(x - 3)$. Since the graph crosses at each point, each root has an odd multiplicity (such as $1$), giving $f(x) = (x + 5)(x - 1)(x - 3)$."
  },
  {
    "id": 91,
    "code": "H6-M91",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 15,
    "topic": "Rational Exponents",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>If $a^{2/3} = 16$, what is the positive value of $a$?</p>",
    "options": [
      "4",
      "8",
      "32",
      "64"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Raise both sides to the power of $\\frac{3}{2}$: $$a = 16^{3/2} = (\\sqrt{16})^3 = 4^3 = 64$$."
  },
  {
    "id": 92,
    "code": "H6-M92",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 16,
    "topic": "Quadratic Functions",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The graph of $y = 3x^2 + cx + 5$ in the $xy$-plane has its vertex at an $x$-coordinate of $2$. What is the value of $c$?</p>",
    "options": [
      "-12",
      "-6",
      "6",
      "12"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The $x$-coordinate of the vertex of $y = ax^2 + bx + c$ is given by $x = -\\frac{b}{2a}$. Here $a = 3$, $b = c$, so: $$x = -\\frac{c}{2(3)} = -\\frac{c}{6} = 2 \\implies c = -12$$."
  },
  {
    "id": 93,
    "code": "H6-M93",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 17,
    "topic": "Rational Equations & Vieta's Formulas",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>If $\\frac{x-3}{x} = \\frac{x+1}{2x+1}$, what is the sum of all possible values of $x$?</p>",
    "options": [
      "2",
      "5",
      "6",
      "8"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Cross-multiply: $$(x - 3)(2x + 1) = x(x + 1) \\implies 2x^2 - 5x - 3 = x^2 + x$$ Bringing all terms to one side: $$x^2 - 6x - 3 = 0$$ The discriminant is $(-6)^2 - 4(1)(-3) = 36 + 12 = 48 > 0$, so two real roots exist. By Vieta's formulas, the sum of the roots is $-\\frac{b}{a} = -\\frac{-6}{1} = 6$."
  },
  {
    "id": 94,
    "code": "H6-M94",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 18,
    "topic": "Conditional Probability & Tables",
    "difficulty": "Medium",
    "isFillIn": false,
    "diagram": "images/m2_q18_table.png",
    "text": "<p>A local bookstore collected data on their customers' favorite book genres, as shown in the table above. If a customer is selected at random from those who prefer Fantasy, what is the probability that the customer is under 25 years old?</p>",
    "options": [
      "\\frac{60}{250}",
      "\\frac{60}{120}",
      "\\frac{60}{100}",
      "\\frac{100}{250}"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In the conditional probability $P(\\text{Under 25} \\mid \\text{Fantasy})$, the condition restricts the total sample space to customers who prefer Fantasy, which is $100$. Among these $100$ customers, $60$ are under 25. Therefore, the probability is $\\frac{60}{100}$."
  },
  {
    "id": 95,
    "code": "H6-M95",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 19,
    "topic": "Function Transformations",
    "difficulty": "Medium",
    "isFillIn": false,
    "text": "<p>The graph of $y = f(x)$ in the $xy$-plane is a parabola with a vertex at $(4,-2)$. If $g(x) = f(x+3) + 5$, what are the coordinates of the vertex of the graph of $g$?</p>",
    "options": [
      "(1, 3)",
      "(7, -7)",
      "(7, 3)",
      "(1, -7)"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The transformation $g(x) = f(x + 3) + 5$ shifts the graph $3$ units to the left and $5$ units upward. Applying this shift to the vertex $(4, -2)$: $$(4 - 3, -2 + 5) = (1, 3)$$."
  },
  {
    "id": 96,
    "code": "H6-M96",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 20,
    "topic": "Systems of Equations",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>$$ax + by = 12$$<br>$$2x + 5y = c$$<br>In the system of linear equations above, $a, b,$ and $c$ are constants. If the system has infinitely many solutions and $a = 6$, what is the value of $c$?</p>",
    "options": [
      "4",
      "10",
      "15",
      "30"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A system of two linear equations has infinitely many solutions when the two lines are identical, meaning their coefficients are proportional: $$\\frac{a}{2} = \\frac{b}{5} = \\frac{12}{c}$$ Since $a = 6$: $$\\frac{6}{2} = 3 \\implies \\frac{12}{c} = 3 \\implies c = 4$$."
  },
  {
    "id": 97,
    "code": "H6-M97",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 21,
    "topic": "Complex Numbers",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Which of the following complex numbers is equivalent to $\\frac{2+3i}{1-2i}$? (Note: $i = \\sqrt{-1}$)</p>",
    "options": [
      "-4+7i",
      "\\frac{-4+7i}{5}",
      "\\frac{-4+7i}{3}",
      "\\frac{-4-7i}{5}"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Multiply the numerator and denominator by the complex conjugate of the denominator, which is $1 + 2i$: $$\\frac{2 + 3i}{1 - 2i} \\cdot \\frac{1 + 2i}{1 + 2i} = \\frac{2 + 4i + 3i + 6i^2}{1 - 4i^2}$$ Since $i^2 = -1$: $$\\frac{2 + 7i - 6}{1 - (-4)} = \\frac{-4 + 7i}{5}$$."
  },
  {
    "id": 98,
    "code": "H6-M98",
    "prefix": "H6",
    "section": "math",
    "module": 2,
    "qnum": 22,
    "topic": "Absolute Value Equations",
    "difficulty": "Medium",
    "isFillIn": true,
    "text": "<p>If $3|x - 4| + 5 = 17$, what is the greatest possible value of $x$?</p>",
    "answer": "8",
    "acceptedAnswers": [
      "8",
      "8.0"
    ],
    "explanation": "Isolate the absolute value term: $$3|x - 4| = 17 - 5 = 12 \\implies |x - 4| = 4$$ This yields two linear equations: $$x - 4 = 4 \\implies x = 8$$ $$x - 4 = -4 \\implies x = 0$$ The greatest possible value of $x$ is $8$."
  }
];

// Topic Map
const TOPIC_MAP = {};
QUESTIONS.forEach(q => {
  const t = q.topic || 'General';
  if (!TOPIC_MAP[t]) {
    TOPIC_MAP[t] = { name: t, questions: [] };
  }
  TOPIC_MAP[t].questions.push(q.id);
});

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
