// =============================================
// SAT Hard Full Mock 7
// Full 98 Questions (RW M1: 27, RW M2: 27, Math M1: 22, Math M2: 22)
// Complete with LaTeX, Diagrams, Official Explanations and Options
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "code": "H7-RW1",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 1,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "text": "<p>The critic's review of the playwright's new drama was far from a balanced, objective assessment; rather, it was a _______ attack, filled with vitriol and highly personal insults against the director.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "polemical",
      "dispassionate",
      "clandestine",
      "sycophantic"
    ],
    "answer": 0,
    "explanation": "“Polemical” means aggressively argumentative; the passage describes a vitriolic attack, the opposite of balanced."
  },
  {
    "id": 2,
    "code": "H7-RW2",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 2,
    "isFillIn": false,
    "topic": "Central Ideas & Details",
    "difficulty": "Medium",
    "text": "<p>The concept of neuroplasticity—the brain's ability to reorganize itself by forming new neural connections—shattered the long-held scientific dogma that the adult brain is an immutable, static organ. While early research focused on neuroplasticity strictly as a mechanism for recovery after severe trauma, such as strokes, current studies emphasize its role in everyday learning. Even mastering a simple chord on a guitar physically alters the microscopic synaptic architecture of the brain, proving that our anatomical wiring is perpetually in flux.</p><p><strong>Which choice best states the main idea of the text?</strong></p>",
    "options": [
      "The human brain is only capable of rewiring its neural connections in response to severe physical trauma.",
      "Neuroplasticity is a continuous process that occurs throughout a person's life as a result of both injury recovery and routine learning.",
      "Playing a musical instrument is scientifically proven to be the most effective way to stimulate neural regeneration.",
      "Modern science has completely disproved the idea that the brain forms any permanent neural connections during childhood."
    ],
    "answer": 1,
    "explanation": "The text covers both trauma recovery and everyday learning and says wiring is “perpetually in flux.”"
  },
  {
    "id": 3,
    "code": "H7-RW3",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 3,
    "isFillIn": false,
    "topic": "Text Structure & Purpose",
    "difficulty": "Medium",
    "text": "<p>Recent analyses of Martian meteorites have revealed the presence of complex carbon-based molecules. Initially, some astrobiologists heralded this as definitive proof of ancient Martian life. However, geochemists subsequently demonstrated that these specific organic compounds can form via abiotic (non-living) processes, such as the high-pressure interaction of water and volcanic rock. Thus, while the meteorites confirm Mars possessed a complex chemistry, they do not guarantee biology.</p><p><strong>Which choice best describes the overall structure of the text?</strong></p>",
    "options": [
      "It presents a finding, outlines a bold interpretation of that finding, provides evidence that undermines that interpretation, and offers a more measured conclusion.",
      "It describes a methodology for studying meteorites, critiques the accuracy of that methodology, and proposes a new scientific framework.",
      "It outlines a historical debate between two scientific disciplines and concludes that both sides were fundamentally flawed in their approach.",
      "It introduces a widely accepted scientific law and then presents an anomaly that forces the abandonment of that law."
    ],
    "answer": 0,
    "explanation": "Finding (molecules) → bold claim (life) → counter-evidence (abiotic formation) → measured conclusion."
  },
  {
    "id": 4,
    "code": "H7-RW4",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 4,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "text": "<p>Exhausted from the relentless, grueling pace of the year-long political campaign, _______</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "a long vacation was just what the candidate needed to recover.",
      "the campaign trail seemed increasingly insurmountable to the candidate.",
      "the candidate’s staff strongly advised him to take a brief hiatus.",
      "the candidate decided to suspend his national tour for three days."
    ],
    "answer": 3,
    "explanation": "The opening modifier “Exhausted…” must modify the candidate, so the candidate must be the subject. Only D does this."
  },
  {
    "id": 5,
    "code": "H7-RW5",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 5,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "text": "<p>Given the severe, rapidly expanding structural damage to the suspension bridge, the city's lead structural engineer demanded that the mayor _______ the highway immediately.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "closes",
      "close",
      "closed",
      "will close"
    ],
    "answer": 1,
    "explanation": "After “demanded that,” the subjunctive uses the base verb form: “close.”"
  },
  {
    "id": 6,
    "code": "H7-RW6",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 6,
    "isFillIn": false,
    "topic": "Cross-Text Connections",
    "difficulty": "Medium",
    "text": "<p>Text 1<br>Literary critic Harold Bloom argues that Shakespeare’s Hamlet represents the birth of modern human consciousness in literature. Bloom asserts that Hamlet is the first character to seemingly \"overhear himself think,\" actively revising his own perspectives in real-time and thus demonstrating an unprecedented psychological interiority.</p><p>Text 2<br>While Hamlet is undeniably a psychological masterpiece, literary historians point out that the introspection Bloom praises was not a sudden, isolated Shakespearean invention. It was a reflection of broader Renaissance humanist trends. Writers like Michel de Montaigne were already popularizing the essay—a deeply personal, reflective form of self-exploration—years before Hamlet was staged.</p><p><strong>Based on the texts, how would the authors of Text 2 most likely respond to Bloom’s assertion in Text 1?</strong></p>",
    "options": [
      "By agreeing that Shakespeare invented psychological introspection, but arguing he did so in his sonnets rather than in Hamlet.",
      "By contextualizing Hamlet's interiority as part of a wider, existing cultural movement rather than a completely unprecedented literary breakthrough.",
      "By dismissing the idea that Hamlet possesses any true psychological depth, viewing him instead as a traditional, one-dimensional revenge tragedy hero.",
      "By suggesting that Montaigne's essays were actually heavily influenced by early performances of Hamlet."
    ],
    "answer": 1,
    "explanation": "Text 2 calls Hamlet a masterpiece but places its introspection within a broader existing trend."
  },
  {
    "id": 7,
    "code": "H7-RW7",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 7,
    "isFillIn": false,
    "topic": "Reading & Writing",
    "difficulty": "Medium",
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Rafflesia arnoldii is a rare parasitic plant native to the rainforests of Sumatra and Borneo.</li><li>It produces the largest individual flower on Earth, which can grow up to three feet in diameter.</li><li>The plant lacks visible leaves, roots, or stems.</li><li>To attract its primary pollinators, carrion flies, the flower emits a pungent odor resembling rotting meat.</li><li>Because of this smell, it is commonly referred to as the \"corpse flower.\"</li></ul><p><strong>The student wants to explain how the Rafflesia arnoldii ensures its reproduction. Which choice most effectively uses relevant information from the notes to accomplish this goal?</strong></p>",
    "options": [
      "The Rafflesia arnoldii, which produces the largest flower on Earth, is a rootless parasitic plant found in the rainforests of Sumatra and Borneo.",
      "Commonly known as the \"corpse flower,\" the Rafflesia arnoldii can grow up to three feet in diameter despite having no visible leaves or stems.",
      "To ensure its reproduction, the Rafflesia arnoldii emits a scent similar to rotting meat, which successfully attracts the carrion flies that pollinate it.",
      "Because it smells remarkably like rotting meat, the massive Rafflesia arnoldii flower is often called the \"corpse flower\" by locals."
    ],
    "answer": 2,
    "explanation": "Only C explains the reproduction mechanism (scent attracts pollinators)."
  },
  {
    "id": 8,
    "code": "H7-RW8",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 8,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "text": "<p>During the rapid industrialization of the late 19th century, the _______ demands for safer working conditions, fair wages, and reasonable hours eventually led to the formation of early labor unions.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "workers",
      "worker's",
      "workers'",
      "workers's"
    ],
    "answer": 2,
    "explanation": "Plural possessive: workers’ demands."
  },
  {
    "id": 9,
    "code": "H7-RW9",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 9,
    "isFillIn": false,
    "topic": "Command of Evidence",
    "difficulty": "Medium",
    "text": "<p>Sociologist Robert Putnam theorized that the decline of \"social capital\"—the networks of relationships among people who live and work in a particular society—is closely tied to the rise of individualized, on-demand entertainment. To test this, a research team tracked the community involvement of two demographic groups over five years: Group A consisted of heavy, daily consumers of on-demand streaming media, while Group B rarely consumed such media.</p><p><strong>Which finding, if true, would most directly support Putnam's theory?</strong></p>",
    "options": [
      "Group A reported a 40% decrease in attendance at neighborhood meetings and civic clubs, whereas Group B's attendance remained highly stable.",
      "Both Group A and Group B demonstrated a significant increase in the number of online-only, international friendships they maintained.",
      "Group B reported feeling more isolated and disconnected from their peers than Group A did over the five-year period.",
      "Members of Group A frequently watched documentaries specifically about civic engagement and community organizing."
    ],
    "answer": 0,
    "explanation": "Heavy media users losing community involvement while light users stay stable directly supports the theory."
  },
  {
    "id": 10,
    "code": "H7-RW10",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 10,
    "isFillIn": false,
    "topic": "Inferences",
    "difficulty": "Medium",
    "text": "<p>In quantum physics, the principle of entanglement states that two particles can become inextricably linked, such that the physical state of one particle instantly influences the state of the other, regardless of the physical distance separating them. This phenomenon appears to violate the theory of relativity, which dictates that no information can travel faster than the speed of light. However, theoretical physicists have resolved this paradox by mathematically demonstrating that quantum entanglement cannot be used to transmit usable, conscious information. Therefore, if a scientist were to measure the spin of an entangled particle on Earth, _______</p><p><strong>Which choice most logically completes the text?</strong></p>",
    "options": [
      "the corresponding particle on Mars would remain entirely unaffected by the measurement.",
      "the scientist could use that measurement to instantly send a complex message to a colony on Mars.",
      "the scientist would instantly know the state of its entangled pair on Mars, but could not use this instantaneous link to send a faster-than-light message.",
      "the theory of relativity would be definitively disproved by the scientific community."
    ],
    "answer": 2,
    "explanation": "The state is correlated instantly, but no usable information can be transmitted faster than light."
  },
  {
    "id": 11,
    "code": "H7-RW11",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 11,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "text": "<p>Quantum computing relies on qubits, which can exist in multiple states simultaneously _______ classical computing, by contrast, relies on binary bits that are strictly either zero or one.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      ";",
      ",",
      "and",
      "however,"
    ],
    "answer": 0,
    "explanation": "Two independent clauses need a semicolon."
  },
  {
    "id": 12,
    "code": "H7-RW12",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 12,
    "isFillIn": false,
    "topic": "Text Structure & Purpose",
    "difficulty": "Medium",
    "text": "<p>The following excerpt is from Henry James's 1881 novel The Portrait of a Lady.<br>\"Isabel Archer was a young person of many theories; her imagination was remarkably active. It had been her fortune to possess a finer mind than most of the persons among whom her lot was cast; to have a larger perception of surrounding facts and to care for knowledge that was tinged with the unfamiliar.\"</p><p><strong>What is the main purpose of this text?</strong></p>",
    "options": [
      "To criticize the inadequate educational systems available to women in the 19th century.",
      "To introduce the protagonist by emphasizing her intellectual curiosity and sense of mental superiority.",
      "To contrast Isabel Archer's theoretical knowledge with her lack of practical, real-world experience.",
      "To argue that an active imagination is ultimately a dangerous trait for a young person."
    ],
    "answer": 1,
    "explanation": "The excerpt introduces Isabel through her active imagination and “finer mind.”"
  },
  {
    "id": 13,
    "code": "H7-RW13",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 13,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "text": "<p>Despite the _______ nature of the research—which focused entirely on the microscopic mating habits of a rare, deep-sea tubeworm—the findings eventually had widespread, practical applications in biomedical engineering.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "ubiquitous",
      "esoteric",
      "pragmatic",
      "ephemeral"
    ],
    "answer": 1,
    "explanation": "“Esoteric” = obscure, understood by few, contrasting with practical applications."
  },
  {
    "id": 14,
    "code": "H7-RW14",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 14,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "text": "<p>The arctic research expedition team included Dr. Aris Thorne, a leading climatologist _______ Dr. Elena Rostova, an expert in glacial geology _______ and Marcus Vance, a seasoned mountaineer.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "; / ;",
      ", / ,",
      "; / ,",
      ": / :"
    ],
    "answer": 0,
    "explanation": "Each list item already contains a comma (appositive), so items are separated by semicolons."
  },
  {
    "id": 15,
    "code": "H7-RW15",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 15,
    "isFillIn": false,
    "topic": "Reading & Writing",
    "difficulty": "Medium",
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>Tardigrades, also known as water bears, are microscopic animals famous for their extreme physical resilience.</li><li>They can survive extreme temperatures, high levels of radiation, and even the vacuum of outer space.</li><li>They achieve this by entering a biological state of suspended animation called cryptobiosis.</li><li>In cryptobiosis, a tardigrade expels almost all the water from its body and curtails its metabolism to less than 0.01% of normal.</li><li>They can remain in this desiccated state for decades before safely reanimating when exposed to water.</li></ul><p><strong>The student wants to explain the specific biological mechanism that allows tardigrades to survive extreme conditions. Which choice most effectively uses relevant information from the notes to accomplish this goal?</strong></p>",
    "options": [
      "Tardigrades are highly resilient microscopic animals that can survive extreme temperatures, radiation, and the vacuum of space for decades.",
      "To survive extreme conditions, tardigrades enter cryptobiosis, a state of suspended animation in which they expel their body water and halt their metabolism.",
      "The tardigrade is uniquely capable of surviving the vacuum of space, a feat it accomplishes by remaining in a desiccated state until it is exposed to water.",
      "Cryptobiosis is a fascinating biological state that allows microscopic animals like the tardigrade to live for decades without water or food."
    ],
    "answer": 1,
    "explanation": "B names the mechanism (cryptobiosis) and what happens in it."
  },
  {
    "id": 16,
    "code": "H7-RW16",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 16,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "text": "<p>The renowned composer was known for her _______ temperament; one moment she would be elated, furiously writing symphonies, and the next she would be entirely despondent, refusing to leave her room for days.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "mercurial",
      "stoic",
      "obdurate",
      "fastidious"
    ],
    "answer": 0,
    "explanation": "“Mercurial” = prone to sudden mood changes."
  },
  {
    "id": 17,
    "code": "H7-RW17",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 17,
    "isFillIn": false,
    "topic": "Reading & Writing",
    "difficulty": "Medium",
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Julian calendar was introduced by Julius Caesar in 45 BCE.</li><li>It calculated a solar year as exactly 365.25 days.</li><li>This slight miscalculation caused the calendar to drift out of sync with the true solar year by about 11 minutes annually.</li><li>The Gregorian calendar was introduced by Pope Gregory XIII in 1582.</li><li>It corrected this drift by skipping leap years on century years not divisible by 400 (e.g., 1700, 1800).</li><li>The Gregorian calendar is the internationally accepted civil calendar used today.</li></ul><p><strong>The student wants to contrast the structural accuracy of the two calendars. Which choice most effectively uses relevant information from the notes to accomplish this goal?</strong></p>",
    "options": [
      "Pope Gregory XIII introduced the internationally accepted Gregorian calendar in 1582 to replace the Julian calendar created by Julius Caesar.",
      "While the Julian calendar slightly miscalculated the solar year by 11 minutes annually, the Gregorian calendar corrected this drift by modifying the leap year rules.",
      "Because the Julian calendar calculated the year as 365.25 days, it drifted out of sync with the solar year, leading to the creation of the Gregorian calendar.",
      "The Gregorian calendar corrected the inaccuracies of the earlier Julian system by skipping leap years in century years like 1700 and 1800."
    ],
    "answer": 1,
    "explanation": "B directly contrasts the two calendars’ accuracy (error vs. correction)."
  },
  {
    "id": 18,
    "code": "H7-RW18",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 18,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "text": "<p>Hidden deep within the Amazon rainforest, beneath layers of dense canopy and centuries of accumulated soil, _______ the ruins of a massive pre-Columbian civilization that once housed tens of thousands of people.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "lie",
      "lies",
      "has lain",
      "is lying"
    ],
    "answer": 0,
    "explanation": "Inverted sentence: the subject “the ruins” is plural, so the verb is “lie.”"
  },
  {
    "id": 19,
    "code": "H7-RW19",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 19,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "text": "<p>The committee's decision to suddenly reallocate funds away from the university's art department drew intense, immediate criticism from the student body. In response, the board of directors released a lengthy statement defending _______ choice as a necessary, albeit painful, austerity measure.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "its",
      "their",
      "there",
      "it's"
    ],
    "answer": 0,
    "explanation": "“Board” is a singular collective noun here, so the possessive is “its.”"
  },
  {
    "id": 20,
    "code": "H7-RW20",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 20,
    "isFillIn": false,
    "topic": "Transitions",
    "difficulty": "Medium",
    "text": "<p>Early art critics of impressionist painting argued that the visible brushstrokes and unblended colors made the artworks look childish and unfinished. _______, modern art historians view these exact qualities as the defining brilliance of the movement, effectively capturing the fleeting nature of light.</p><p><strong>Which choice completes the text with the most logical transition?</strong></p>",
    "options": [
      "Furthermore",
      "Conversely",
      "Subsequently",
      "In other words"
    ],
    "answer": 1,
    "explanation": "Early critics disliked the qualities; modern historians praise them: contrast."
  },
  {
    "id": 21,
    "code": "H7-RW21",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 21,
    "isFillIn": false,
    "topic": "Transitions",
    "difficulty": "Medium",
    "text": "<p>Implementing a universal basic income (UBI) would require a massive, highly disruptive restructuring of the nation's current tax system. _______, many progressive economists argue that the long-term societal benefits of eradicating extreme poverty would far offset the initial bureaucratic chaos.</p><p><strong>Which choice completes the text with the most logical transition?</strong></p>",
    "options": [
      "Therefore",
      "Be that as it may",
      "In addition",
      "To illustrate"
    ],
    "answer": 1,
    "explanation": "The second sentence concedes the disruption but argues the benefits outweigh it."
  },
  {
    "id": 22,
    "code": "H7-RW22",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 22,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Medium",
    "text": "<p>The Enlightenment philosopher Immanuel Kant _______ that human understanding is the source of the general laws of nature that structure all of our experience.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      ", who was born in Prussia, argued",
      "who was born in Prussia, argued",
      ", who was born in Prussia argued",
      "who was born in Prussia argued"
    ],
    "answer": 0,
    "explanation": "The “who” clause is nonessential, so it is set off by a pair of commas."
  },
  {
    "id": 23,
    "code": "H7-RW23",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 23,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "text": "<p>Early cartographers often relied on the _______ accounts of sailors, meaning that world maps from the 16th century were frequently redrawn as new, sometimes contradictory, and highly exaggerated tales returned from the sea.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "meticulous",
      "empirical",
      "apocryphal",
      "sacrosanct"
    ],
    "answer": 2,
    "explanation": "“Apocryphal” = of doubtful authenticity."
  },
  {
    "id": 24,
    "code": "H7-RW24",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 24,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Medium",
    "text": "<p>The senator’s tendency to _______ when asked direct questions by the press made her seem untrustworthy; she rarely gave a straight answer, preferring instead to speak in confusing circles to avoid committing to a stance.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "pontificate",
      "prevaricate",
      "capitulate",
      "extemporize"
    ],
    "answer": 1,
    "explanation": "“Prevaricate” = speak evasively."
  },
  {
    "id": 25,
    "code": "H7-RW25",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 25,
    "isFillIn": false,
    "topic": "Transitions",
    "difficulty": "Medium",
    "text": "<p>The novel's protagonist is deeply flawed and highly manipulative, frequently lying to her closest friends to protect her own social reputation. _______, the author writes her with such profound psychological vulnerability and tragic backstory that the reader cannot help but sympathize with her.</p><p><strong>Which choice completes the text with the most logical transition?</strong></p>",
    "options": [
      "Consequently",
      "For instance",
      "Similarly",
      "Nevertheless"
    ],
    "answer": 3,
    "explanation": "Flawed character, yet sympathetic: contrast."
  },
  {
    "id": 26,
    "code": "H7-RW26",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 26,
    "isFillIn": false,
    "topic": "Command of Evidence",
    "difficulty": "Medium",
    "diagram": "images/rw_m1_q26_energy_table.png",
    "text": "<p>An environmental policy analyst claims that Country X has completely eliminated its reliance on fossil fuels over the last decade, transitioning entirely to green energy.</p><p><strong>Which of the following statements best uses data from the table to refute this claim?</strong></p>",
    "options": [
      "In 2020, Wind & Solar energy accounted for 30% of total energy generation, a significant and positive increase from 2010.",
      "Natural gas usage increased from 25% to 40% between 2010 and 2020, meaning fossil fuels still constituted the vast majority (70%) of the energy mix.",
      "Coal usage plummeted drastically from 65% in 2010 to 30% in 2020, showing a rapid transition away from carbon-heavy fuels.",
      "The total amount of energy generated by Country X likely increased exponentially between 2010 and 2020."
    ],
    "answer": 1,
    "explanation": "In 2020, coal (30%) + natural gas (40%) = 70% fossil fuels, which refutes “completely eliminated.”"
  },
  {
    "id": 27,
    "code": "H7-RW27",
    "prefix": "H7",
    "section": "rw",
    "module": 1,
    "qnum": 27,
    "isFillIn": false,
    "topic": "Inferences",
    "difficulty": "Medium",
    "text": "<p>During the decipherment of Egyptian hieroglyphs, linguist Jean-François Champollion made a crucial breakthrough when studying the Rosetta Stone. He noticed that certain phonetic signs used to spell out the names of foreign Greek rulers, like Ptolemy, were also present in much older, purely Egyptian names. This directly contradicted the prevailing European assumption that hieroglyphs were purely ideographic (representing broad concepts rather than specific phonetic sounds). From this, Champollion logically deduced that _______</p><p><strong>Which choice most logically completes the text?</strong></p>",
    "options": [
      "the Rosetta Stone was actually a highly sophisticated forgery created by Greek scholars.",
      "the Egyptian hieroglyphic writing system utilized a complex structure that was at least partially phonetic, rather than purely symbolic.",
      "foreign rulers were entirely responsible for inventing the Egyptian writing system.",
      "all ancient writing systems across the globe are entirely phonetic"
    ],
    "answer": 1,
    "explanation": "Phonetic signs in older Egyptian names show the system was at least partly phonetic."
  },
  {
    "id": 28,
    "code": "H7-RW28",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 1,
    "isFillIn": false,
    "topic": "Reading & Writing",
    "difficulty": "Hard",
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Great Emu War of 1932 was a military operation in Western Australia.</li><li>Emus, a large flightless bird, were destroying the wheat crops of local farmers.</li><li>The Australian government deployed soldiers armed with Lewis machine guns to cull the emu population.</li><li>The emus proved incredibly fast and highly evasive, scattering in small groups when fired upon.</li><li>The military ultimately withdrew after expending 10,000 rounds of ammunition to cull fewer than 1,000 birds; the operation was considered a failure.</li></ul><p><strong>The student wants to emphasize the specific reason the military operation failed. Which choice most effectively uses relevant information from the notes to accomplish this goal?</strong></p>",
    "options": [
      "In 1932, the Australian military was deployed to cull wheat-destroying emus using Lewis machine guns, an event known as the Great Emu War.",
      "The Great Emu War of 1932 ended in failure because the Australian military expended 10,000 rounds of ammunition to cull fewer than 1,000 birds.",
      "The military's attempt to cull the emu population failed largely because the birds' speed and evasive scattering tactics rendered the soldiers' machine guns ineffective.",
      "Despite being armed with machine guns, the Australian soldiers were ultimately withdrawn from Western Australia, allowing the emus to continue destroying wheat crops."
    ],
    "answer": 2,
    "explanation": "C gives the cause of failure (speed and evasion), not just the outcome."
  },
  {
    "id": 29,
    "code": "H7-RW29",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 2,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Hard",
    "text": "<p>For centuries, alchemists searched in vain for a _______—a mythical elixir or universal remedy that they believed could cure all human diseases and grant biological immortality.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "paradox",
      "panacea",
      "paradigm",
      "precursor"
    ],
    "answer": 1,
    "explanation": "A panacea is a universal remedy."
  },
  {
    "id": 30,
    "code": "H7-RW30",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 3,
    "isFillIn": false,
    "topic": "Inferences",
    "difficulty": "Hard",
    "text": "<p>Mycorrhizal networks are vast, underground webs of fungal threads that connect the root systems of various plants in a forest ecosystem. Through these networks, trees can exchange nutrients, water, and even chemical warning signals about pest infestations. Forest ecologist Dr. Suzanne Simard hypothesizes that older \"hub trees\" actively use these fungal pathways to funnel carbon subsidies to younger, shaded saplings that cannot photosynthesize enough energy on their own. If Dr. Simard's hypothesis is correct, one would expect that _______</p><p><strong>Which choice most logically completes the text?</strong></p>",
    "options": [
      "saplings grown in isolation without access to the fungal network would struggle to survive in heavily shaded areas compared to connected saplings.",
      "older trees would eventually be drained of all their carbon by the fungal network and die prematurely.",
      "the fungal threads would only connect trees of the exact same species, aggressively attacking foreign roots.",
      "saplings would eventually sever their connection to the fungal network once they reach maturity."
    ],
    "answer": 0,
    "explanation": "If shaded saplings depend on carbon from the network, disconnected ones should fare worse."
  },
  {
    "id": 31,
    "code": "H7-RW31",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 4,
    "isFillIn": false,
    "topic": "Reading & Writing",
    "difficulty": "Hard",
    "text": "<p>The following text is adapted from Edith Wharton's 1920 novel, The Age of Innocence.<br>\"In reality they all lived in a kind of hieroglyphic world, where the real thing was never said or done or even thought, but only represented by a set of arbitrary signs; as when Mrs. Manson Mingott, who had long since become fleshly and immovable, was universally described as being 'in a decline' instead of having merely grown too fat to walk.\"</p><p><strong>What does the text most strongly suggest about the society the characters inhabit?</strong></p>",
    "options": [
      "It values directness and honesty above all other social virtues.",
      "It relies heavily on euphemism and strict social codes to obscure unpleasant realities.",
      "It is highly superstitious, placing great importance on ancient spiritual signs and omens.",
      "It is a society focused primarily on medical advancements and physical fitness."
    ],
    "answer": 1,
    "explanation": "“In a decline” is a euphemism for being too fat to walk; the society avoids stating real things."
  },
  {
    "id": 32,
    "code": "H7-RW32",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 5,
    "isFillIn": false,
    "topic": "Command of Evidence",
    "difficulty": "Hard",
    "text": "<p>A biochemist is investigating Enzyme X, which facilitates a crucial metabolic reaction in mammalian cells. She hypothesizes that the enzyme requires a slightly alkaline environment to achieve peak efficiency, but that pushing the alkalinity too high will destroy the enzyme's structural integrity.</p>\n<table style=\"margin: 12px auto; border-collapse: collapse; text-align: center; font-size: 0.95rem; width: 95%; max-width: 520px;\">\n  <caption style=\"font-weight: 700; margin-bottom: 8px; color: #1e293b;\">Reaction Rate and Structural State of Enzyme X at Varying pH Levels</caption>\n  <thead>\n    <tr style=\"background: #f1f5f9; border-bottom: 2px solid #cbd5e1;\">\n      <th style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">pH Level</th>\n      <th style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">Reaction Rate (units/sec)</th>\n      <th style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">Protein Structural State</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">4.0</td><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">14</td><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">Intact (Low Activity)</td></tr>\n    <tr><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">6.0</td><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">45</td><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">Intact (Moderate Activity)</td></tr>\n    <tr><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">7.5</td><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">88</td><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">Optimal Active State</td></tr>\n    <tr><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">11.0</td><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">0</td><td style=\"padding: 6px 12px; border: 1px solid #cbd5e1;\">Fully Denatured</td></tr>\n  </tbody>\n</table>\n<p><strong>Which statement best uses the data in the table to support her hypothesis?</strong></p>",
    "options": [
      "Enzyme X achieves its maximum reaction rate of 88 units/sec at a slightly alkaline pH of 7.5, but at a highly alkaline pH of 11.0, the protein fully denatures and activity drops to zero.",
      "The reaction rate is lowest at an acidic pH of 4.0, proving that mammalian cells cannot survive in acidic environments.",
      "At a neutral pH of 6.0, the enzyme achieves a moderate reaction rate of 45 units/sec without any structural denaturation.",
      "Enzyme X begins to partially denature at a pH of 7.5, causing the reaction rate to slow dramatically."
    ],
    "answer": 0,
    "explanation": "A matches both parts of the hypothesis: peak at slightly alkaline pH, destruction at very high alkalinity."
  },
  {
    "id": 33,
    "code": "H7-RW33",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 6,
    "isFillIn": false,
    "topic": "Transitions",
    "difficulty": "Hard",
    "text": "<p>Many literary critics interpret Herman Melville's Moby-Dick primarily as an allegorical novel about the destructive nature of human obsession and vengeance. _______, other scholars argue that it is fundamentally a socioeconomic critique of the brutally exploitative 19th-century American whaling industry.</p><p><strong>Which choice completes the text with the most logical transition?</strong></p>",
    "options": [
      "By contrast",
      "In particular",
      "Accordingly",
      "Therefore"
    ],
    "answer": 0,
    "explanation": "Two different interpretations are being contrasted."
  },
  {
    "id": 34,
    "code": "H7-RW34",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 7,
    "isFillIn": false,
    "topic": "Inferences",
    "difficulty": "Hard",
    "text": "<p>In the 1950s, architect Michael Ventris successfully deciphered Linear B, an ancient script found on clay tablets in Crete. Prior to his work, the dominant theory among archaeologists was that Linear B represented a lost, isolated Minoan language unrelated to anything else. Ventris, however, applied cryptographic grid techniques to the symbols and proved that Linear B was actually a syllabic script used to write an archaic form of ancient Greek. This revelation radically altered the historical timeline of the Aegean basin, because it _______</p><p><strong>Which choice most logically completes the text?</strong></p>",
    "options": [
      "suggested that the Minoan civilization had never actually existed on the island of Crete.",
      "proved that the ancient Greeks had established a prominent administrative presence in Crete much earlier than previously believed.",
      "demonstrated that the ancient Greeks had stolen their writing system from the Egyptians.",
      "indicated that clay tablets were an inefficient medium for recording complex historical events."
    ],
    "answer": 1,
    "explanation": "Greek-language tablets in Crete imply an earlier Greek presence there."
  },
  {
    "id": 35,
    "code": "H7-RW35",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 8,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Hard",
    "text": "<p>Fascinated by the intricate geometric patterns found in Islamic architecture, _______</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "the Alhambra palace was meticulously photographed by the graduate student.",
      "the graduate student spent three months meticulously photographing the Alhambra palace.",
      "months of meticulous photography at the Alhambra palace were required by the graduate student.",
      "meticulous photographs of the Alhambra palace were taken by the graduate student."
    ],
    "answer": 1,
    "explanation": "The modifier “Fascinated…” must describe the graduate student, who must be the subject."
  },
  {
    "id": 36,
    "code": "H7-RW36",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 9,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Hard",
    "text": "<p>In her latest botanical study, Dr. Vance analyzed the parasitic mechanisms of the dodder plant. Because the dodder lacks sufficient chlorophyll to undergo _______ it must extract all its necessary carbohydrates directly from the vascular tissue of a host plant.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "photosynthesis,",
      "photosynthesis;",
      "photosynthesis",
      "photosynthesis:"
    ],
    "answer": 0,
    "explanation": "A comma separates the introductory “Because…” clause from the main clause."
  },
  {
    "id": 37,
    "code": "H7-RW37",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 10,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Hard",
    "text": "<p>During the labor negotiations, the management team proved completely _______; despite the union offering several major concessions, the executives refused to compromise on a single demand.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "conciliatory",
      "capricious",
      "intransigent",
      "magnanimous"
    ],
    "answer": 2,
    "explanation": "“Intransigent” = refusing to compromise."
  },
  {
    "id": 38,
    "code": "H7-RW38",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 11,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Hard",
    "text": "<p>When confronted by journalists about the missing campaign funds, the politician attempted to _______ the issue, giving long, tangential speeches about his childhood rather than addressing the missing money.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "elucidate",
      "obfuscate",
      "corroborate",
      "mitigate"
    ],
    "answer": 1,
    "explanation": "“Obfuscate” = make unclear."
  },
  {
    "id": 39,
    "code": "H7-RW39",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 12,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Hard",
    "text": "<p>The board of directors is preparing to vote on the controversial merger. Neither the CEO nor the senior vice presidents _______ fully satisfied with the terms of the acquisition, fearing it will dilute the company's brand identity.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "answer": 1,
    "explanation": "With “neither…nor,” the verb agrees with the nearer subject, “vice presidents” (plural)."
  },
  {
    "id": 40,
    "code": "H7-RW40",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 13,
    "isFillIn": false,
    "topic": "Reading & Writing",
    "difficulty": "Hard",
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>The Hawthorne Effect is a psychological phenomenon identified during studies at the Hawthorne Works factory in the 1920s.</li><li>Researchers were initially testing if changing factory lighting would increase worker productivity.</li><li>They found that productivity improved when lighting was increased, but also improved when lighting was decreased.</li><li>The researchers concluded that the workers were not responding to the lighting levels at all.</li><li>Instead, productivity increased simply because the workers knew they were being observed by the researchers.</li></ul><p><strong>The student wants to explain the paradox encountered by the original researchers. Which choice most effectively uses relevant information from the notes to accomplish this goal?</strong></p>",
    "options": [
      "The Hawthorne Effect, named after a factory in the 1920s, occurs when workers increase their productivity because they know they are being observed.",
      "Researchers at the Hawthorne Works factory encountered a paradox when worker productivity inexplicably improved whether the factory lighting was increased or decreased.",
      "To test the effects of factory lighting, researchers at the Hawthorne Works conducted a series of productivity experiments in the 1920s.",
      "Concluding that lighting levels were irrelevant, researchers determined that factory workers only improved their productivity because they were part of a psychological study."
    ],
    "answer": 1,
    "explanation": "B states the paradox itself (improvement under both increased and decreased lighting)."
  },
  {
    "id": 41,
    "code": "H7-RW41",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 14,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Hard",
    "text": "<p>The artist’s approach to classical sculpture was highly _______; rather than adhering to traditional proportions and reverence for her subjects, she deliberately distorted their features to critique historical hierarchies.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "iconoclastic",
      "derivative",
      "deferential",
      "orthodox"
    ],
    "answer": 0,
    "explanation": "“Iconoclastic” = attacking established conventions."
  },
  {
    "id": 42,
    "code": "H7-RW42",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 15,
    "isFillIn": false,
    "topic": "Cross-Text Connections",
    "difficulty": "Hard",
    "text": "<p>Text 1<br>Philosopher Jean-Jacques Rousseau argued that human beings are inherently good by nature, but are eventually corrupted by the artificial structures, inequalities, and competitive pressures of modern civilization. In Rousseau's view, society is a degenerative force that strips humans of their natural compassion.</p><p>Text 2<br>Thomas Hobbes held a radically different view of the \"state of nature.\" Without the strict laws and governing authorities provided by civilization, Hobbes asserted, human existence would be characterized by a \"war of all against all.\" For Hobbes, society is not a corrupting force, but rather the essential mechanism that saves humanity from its own innate, violent selfishness.</p><p><strong>Based on the texts, how would Hobbes (Text 2) most likely respond to Rousseau's claim regarding modern civilization (Text 1)?</strong></p>",
    "options": [
      "By agreeing that civilization creates inequality, but arguing that inequality is a necessary economic driver.",
      "By asserting that civilization, rather than corrupting humans, actually suppresses the inherent brutality of their natural state.",
      "By arguing that humans are neither inherently good nor inherently evil, but are blank slates shaped by education.",
      "By suggesting that humans in a state of nature were completely benevolent and formed societies purely to pool agricultural surplus."
    ],
    "answer": 1,
    "explanation": "Hobbes sees society as restraining innate violence, not corrupting goodness."
  },
  {
    "id": 43,
    "code": "H7-RW43",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 16,
    "isFillIn": false,
    "topic": "Text Structure & Purpose",
    "difficulty": "Hard",
    "text": "<p>For decades, scholars of the Cold War analyzed the era primarily through the lens of political summits and nuclear arms races. Recently, however, cultural historians have begun to examine the geopolitical role of abstract expressionist art. The US government quietly sponsored international exhibitions of artists like Jackson Pollock, reasoning that their wildly free, unstructured paintings would serve as a stark ideological contrast to the rigid, state-mandated aesthetic of Soviet realism, thereby promoting American ideals of individual liberty abroad.</p><p><strong>Which choice best describes the overall structure of the text?</strong></p>",
    "options": [
      "It outlines a traditional scholarly approach, introduces a newer analytical perspective, and provides an example illustrating the mechanics of that newer perspective.",
      "It presents a historical conflict, critiques the leadership of both sides, and offers a retrospective solution.",
      "It defines an artistic movement, details the biographical history of a famous artist, and explains why that artist was ultimately rejected by the public.",
      "It states a controversial theory about government surveillance, provides anecdotal evidence, and calls for further historical investigation."
    ],
    "answer": 0,
    "explanation": "Traditional lens → new cultural lens → Pollock exhibitions as the example."
  },
  {
    "id": 44,
    "code": "H7-RW44",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 17,
    "isFillIn": false,
    "topic": "Central Ideas & Details",
    "difficulty": "Hard",
    "text": "<p>Historically, the field of genetics operated on the dogma that our DNA sequence is a rigid blueprint, strictly dictating our biological destiny. However, the emerging field of epigenetics has upended this notion. Epigenetics studies how external factors—such as diet, stress, and environmental toxins—can cause chemical modifications that turn certain genes \"on\" or \"off\" without altering the underlying DNA sequence. This means that while our genetic code may be inherited and fixed, the actual expression of those genes is highly dynamic and responsive to how we live.</p><p><strong>Which choice best states the main idea of the text?</strong></p>",
    "options": [
      "Diet and stress are the only factors that determine whether an individual will develop genetic diseases.",
      "Epigenetics has proven that it is possible to rewrite our inherited DNA sequences through lifestyle changes.",
      "While our underlying DNA sequence remains fixed, epigenetic research shows that external factors can dynamically alter how those genes are expressed.",
      "The scientific community has entirely abandoned traditional genetics in favor of studying chemical modifications."
    ],
    "answer": 2,
    "explanation": "DNA stays fixed; gene expression changes with external factors."
  },
  {
    "id": 45,
    "code": "H7-RW45",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 18,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Hard",
    "text": "<p>Although classical economists assume that consumers are perfectly rational actors who always maximize their own utility, behavioral economist Richard Thaler has proven that human decision-making is heavily influenced by _______ cognitive biases.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "irrational, and deeply ingrained",
      "irrational and deeply ingrained,",
      "irrational and deeply ingrained",
      "irrational; and deeply ingrained"
    ],
    "answer": 2,
    "explanation": "Two adjectives joined by “and” modify “biases” and need no punctuation."
  },
  {
    "id": 46,
    "code": "H7-RW46",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 19,
    "isFillIn": false,
    "topic": "Transitions",
    "difficulty": "Hard",
    "text": "<p>Geothermal energy is considered one of the most reliable renewable resources because, unlike solar or wind power, it can generate electricity 24 hours a day regardless of weather conditions. _______, the astronomical upfront costs of drilling deep into the Earth's crust have prevented widespread global adoption of the technology.</p><p><strong>Which choice completes the text with the most logical transition?</strong></p>",
    "options": [
      "Consequently",
      "Furthermore",
      "Notwithstanding",
      "That being said"
    ],
    "answer": 3,
    "explanation": "The second sentence introduces a drawback after praise: “That being said,” works. “Notwithstanding” cannot start a clause like this."
  },
  {
    "id": 47,
    "code": "H7-RW47",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 20,
    "isFillIn": false,
    "topic": "Words in Context",
    "difficulty": "Hard",
    "text": "<p>The documentary was criticized by historians for relying heavily on _______ documents—forged diaries and unverified letters that artificially sensationalized the political climate of the era.</p><p><strong>Which choice completes the text with the most logical and precise word or phrase?</strong></p>",
    "options": [
      "empirical",
      "exhaustive",
      "incontrovertible",
      "spurious"
    ],
    "answer": 3,
    "explanation": "“Spurious” = fake or false."
  },
  {
    "id": 48,
    "code": "H7-RW48",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 21,
    "isFillIn": false,
    "topic": "Reading & Writing",
    "difficulty": "Hard",
    "text": "<p>While researching a topic, a student has taken the following notes:</p><ul><li>In architecture, \"brutalism\" is a style that emerged in the 1950s.</li><li>It is characterized by massive, monolithic block-like structures.</li><li>Brutalist buildings prominently feature exposed, unpainted concrete (from the French béton brut, meaning \"raw concrete\").</li><li>Critics often describe brutalist buildings as cold, imposing, and aggressively totalitarian.</li><li>Proponents argue the style is honest, utilitarian, and democratically accessible, rejecting bourgeois ornamentation.</li></ul><p><strong>The student wants to contrast the opposing aesthetic interpretations of brutalist architecture. Which choice most effectively uses relevant information from the notes to accomplish this goal?</strong></p>",
    "options": [
      "Emerging in the 1950s, brutalism is an architectural style characterized by massive, monolithic structures made of raw, unpainted concrete.",
      "Brutalism, characterized by exposed concrete, is often described by critics as cold and aggressively totalitarian.",
      "While critics view brutalist architecture's raw concrete structures as cold and totalitarian, proponents celebrate the style as honest, utilitarian, and democratic.",
      "Proponents of brutalist architecture argue that the style's massive, unpainted concrete blocks are a necessary rejection of bourgeois ornamentation."
    ],
    "answer": 2,
    "explanation": "Only C presents both opposing views."
  },
  {
    "id": 49,
    "code": "H7-RW49",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 22,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Hard",
    "text": "<p>By the time the new high-speed rail line finally opens to the public next spring, civil engineering crews _______ continuously on the project for nearly eight years.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "will work",
      "work",
      "will have been working",
      "worked"
    ],
    "answer": 2,
    "explanation": "“By the time…” + a duration calls for the future perfect progressive."
  },
  {
    "id": 50,
    "code": "H7-RW50",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 23,
    "isFillIn": false,
    "topic": "Inferences",
    "difficulty": "Hard",
    "text": "<p>Astronomers tracking the trajectory of the interstellar object 'Oumuamua noticed an anomaly: the object was accelerating away from the sun faster than could be explained by gravitational forces alone. Typically, such non-gravitational acceleration in comets is caused by \"outgassing\"—the expulsion of gas and dust as solar heat melts the comet's ice. However, deep-space telescopes detected no visible coma or gas tail trailing 'Oumuamua. Therefore, researchers concluded that _______</p><p><strong>Which choice most logically completes the text?</strong></p>",
    "options": [
      "the sun's gravitational pull on interstellar objects is significantly weaker than its pull on local solar system objects.",
      "'Oumuamua must be composed entirely of heavy metals that are immune to solar heat.",
      "whatever mechanism caused the object's acceleration must be fundamentally different from the outgassing typically observed in comets.",
      "deep-space telescopes are incapable of detecting gas and dust in the outer reaches of the solar system."
    ],
    "answer": 2,
    "explanation": "Acceleration is present but no outgassing is visible, so the cause must differ."
  },
  {
    "id": 51,
    "code": "H7-RW51",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 24,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Hard",
    "text": "<p>The sudden proliferation of deep-sea drones has allowed marine biologists to map the ocean floor with unprecedented accuracy. Among the most startling discoveries _______ a massive chain of dormant underwater volcanoes stretching across the Pacific plate.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "answer": 0,
    "explanation": "Inverted order: the subject is “a massive chain” (singular); present tense matches the passage."
  },
  {
    "id": 52,
    "code": "H7-RW52",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 25,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Hard",
    "text": "<p>Renowned astrophysicist Dr. Neil deGrasse Tyson frequently emphasizes a humbling reality about our _______ we are biologically composed of the exact same heavy elements forged in the cores of dying stars.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "existence,",
      "existence;",
      "existence",
      "existence:"
    ],
    "answer": 3,
    "explanation": "A colon introduces the explanation of the “humbling reality” after a complete clause."
  },
  {
    "id": 53,
    "code": "H7-RW53",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 26,
    "isFillIn": false,
    "topic": "Standard English Conventions",
    "difficulty": "Hard",
    "text": "<p>The city council passed a zoning ordinance limiting the height of new commercial _______ a decision that angered developers.</p><p><strong>Which choice completes the text so that it conforms to the conventions of Standard English?</strong></p>",
    "options": [
      "buildings,",
      "buildings;",
      "buildings.",
      "buildings"
    ],
    "answer": 0,
    "explanation": "A comma sets off the appositive phrase “a decision that angered developers.”"
  },
  {
    "id": 54,
    "code": "H7-RW54",
    "prefix": "H7",
    "section": "rw",
    "module": 2,
    "qnum": 27,
    "isFillIn": false,
    "topic": "Transitions",
    "difficulty": "Hard",
    "text": "<p>In the 19th century, the miasma theory of disease posited that illnesses like cholera were spread through \"bad air\" emanating from decaying organic matter. _______, the discovery of microscopic pathogens by Louis Pasteur proved that diseases are actually caused by specific, living microorganisms, rendering the miasma theory obsolete.</p><p><strong>Which choice completes the text with the most logical transition?</strong></p>",
    "options": [
      "Subsequently",
      "For example",
      "In other words",
      "Likewise"
    ],
    "answer": 0,
    "explanation": "Pasteur’s discovery came later in time."
  },
  {
    "id": 55,
    "code": "H7-M55",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 1,
    "isFillIn": false,
    "topic": "Conditional Probability & Data Tables",
    "difficulty": "Medium",
    "text": "<p>A researcher is conducting a study on handedness and gender, yielding the data in the table. If a male participant is selected at random from the study, what is the probability that he is left-handed?</p>",
    "diagram": "images/math_m1_q01_handedness_table.png",
    "options": [
      "\\frac{12}{120}",
      "\\frac{12}{100}",
      "\\frac{12}{52}",
      "\\frac{12}{20}"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The condition restricts the selection to male participants, of which there are $52$ in total. Among these $52$ males, $12$ are left-handed. Therefore, the probability is $\\frac{12}{52} = \\frac{3}{13}$."
  },
  {
    "id": 56,
    "code": "H7-M56",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 2,
    "isFillIn": true,
    "topic": "Rates & Work Word Problems",
    "difficulty": "Medium",
    "text": "<p>In a factory, Machine A can produce $40$ widgets in $3$ minutes. Machine B, operating simultaneously, can produce $50$ widgets in $2$ minutes. If both machines are turned on at the same time and run continuously at these rates, what is the total number of widgets they will produce together in exactly $12$ minutes?</p>",
    "options": [],
    "answer": "460",
    "acceptedAnswers": [
      "460",
      "460.0"
    ],
    "explanation": "In $12$ minutes, Machine A runs for $\\frac{12}{3} = 4$ cycles of $40$ widgets, producing $4 \\times 40 = 160$ widgets. Machine B runs for $\\frac{12}{2} = 6$ cycles of $50$ widgets, producing $6 \\times 50 = 300$ widgets. Together, they produce $160 + 300 = 460$ widgets."
  },
  {
    "id": 57,
    "code": "H7-M57",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 3,
    "isFillIn": false,
    "topic": "Exponential Growth Models",
    "difficulty": "Easy",
    "text": "<p>The population of a town, $P(t)$, $t$ years after the year 2010 can be modeled by the function $P(t) = 12{,}000(1.04)^t$. Which of the following statements is the best interpretation of the number $1.04$ in this context?</p>",
    "options": [
      "The population of the town increases by 1.04% each year.",
      "The population of the town increases by 4% each year.",
      "The population of the town is 104% larger than it was in 2010.",
      "The town's population grows by 1,040 residents annually."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In the exponential model $P(t) = P_0(1 + r)^t$, the growth factor is $1 + r = 1.04$, which implies an annual growth rate $r = 0.04 = 4\\%$."
  },
  {
    "id": 58,
    "code": "H7-M58",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 4,
    "isFillIn": true,
    "topic": "3D Geometry (Cube Volume & Surface Area)",
    "difficulty": "Medium",
    "text": "<p>A solid cube has a total surface area of $150$ square centimeters. What is the volume of the cube, in cubic centimeters?</p>",
    "options": [],
    "answer": "125",
    "acceptedAnswers": [
      "125",
      "125.0"
    ],
    "explanation": "A cube has $6$ identical square faces, so its total surface area is $6s^2 = 150 \\implies s^2 = 25 \\implies s = 5$ cm. The volume is $V = s^3 = 5^3 = 125$ cubic centimeters."
  },
  {
    "id": 59,
    "code": "H7-M59",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 5,
    "isFillIn": false,
    "topic": "Polynomial Operations",
    "difficulty": "Easy",
    "text": "<p>Which of the following polynomials is equivalent to the expression $(2x^2 - 3x + 4) - (x^2 + 5x - 2)$?</p>",
    "options": [
      "x^2 - 8x + 6",
      "x^2 + 2x + 2",
      "3x^2 - 8x + 2",
      "x^2 - 8x + 2"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Distribute the negative sign and combine like terms: $$(2x^2 - 3x + 4) - (x^2 + 5x - 2) = 2x^2 - 3x + 4 - x^2 - 5x + 2 = (2x^2 - x^2) + (-3x - 5x) + (4 + 2) = x^2 - 8x + 6$$."
  },
  {
    "id": 60,
    "code": "H7-M60",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 6,
    "isFillIn": false,
    "topic": "Systems of Linear Equations",
    "difficulty": "Medium",
    "text": "<p>$$3x - 4y = 7$$<br>$$2x + 3y = 16$$<br>If $(x, y)$ is the solution to the system of equations, what is the value of $x$?</p>",
    "options": [
      "3",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Multiply the first equation by $3$ and the second equation by $4$ to eliminate $y$: $$9x - 12y = 21$$ $$8x + 12y = 64$$ Adding the two equations: $17x = 85 \\implies x = 5$."
  },
  {
    "id": 61,
    "code": "H7-M61",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 7,
    "isFillIn": false,
    "topic": "Quadratic Functions (Vertex & Minimum)",
    "difficulty": "Medium",
    "text": "<p>What is the minimum value of $y$ for the quadratic function $y = x^2 - 8x + 15$?</p>",
    "options": [
      "-1",
      "4",
      "15",
      "31"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. For a parabola opening upward ($a = 1 > 0$), the minimum occurs at the vertex: $$x = -\\frac{b}{2a} = -\\frac{-8}{2(1)} = 4$$ Substituting $x = 4$: $$y = (4)^2 - 8(4) + 15 = 16 - 32 + 15 = -1$$."
  },
  {
    "id": 62,
    "code": "H7-M62",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 8,
    "isFillIn": false,
    "topic": "Right Triangle Trigonometry",
    "difficulty": "Hard",
    "text": "<p>In right triangle $DEF$, the measure of angle $E$ is $90^\\circ$. If $\\sin(D) = \\frac{5}{13}$, what is the value of $\\tan(F)$?</p>",
    "options": [
      "\\frac{5}{12}",
      "\\frac{12}{13}",
      "\\frac{12}{5}",
      "\\frac{13}{5}"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In $\\triangle DEF$ with right angle at $E$, the hypotenuse is $DF = 13$, and the side opposite angle $D$ is $EF = 5$. By the Pythagorean theorem, the adjacent side is $DE = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = 12$. For angle $F$, the opposite side is $DE = 12$ and adjacent side is $EF = 5$. Therefore, $\\tan(F) = \\frac{\\text{opp}}{\\text{adj}} = \\frac{12}{5}$."
  },
  {
    "id": 63,
    "code": "H7-M63",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 9,
    "isFillIn": false,
    "topic": "Circles in Coordinate Geometry",
    "difficulty": "Hard",
    "text": "<p>The equation $x^2 + y^2 - 10x + 6y = 2$ represents a circle in the $xy$-plane. What is the radius of the circle?</p>",
    "options": [
      "\\sqrt{2}",
      "2",
      "6",
      "36"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Complete the square for both $x$ and $y$: $$(x^2 - 10x + 25) + (y^2 + 6y + 9) = 2 + 25 + 9 \\implies (x - 5)^2 + (y + 3)^2 = 36$$ Since $r^2 = 36$, the radius is $r = \\sqrt{36} = 6$."
  },
  {
    "id": 64,
    "code": "H7-M64",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 10,
    "isFillIn": true,
    "topic": "Quadratic Equations (Vieta's Formulas)",
    "difficulty": "Medium",
    "text": "<p>The quadratic equation $2x^2 - 11x + 12 = 0$ has two real solutions. What is the product of these two solutions?</p>",
    "options": [],
    "answer": "6",
    "acceptedAnswers": [
      "6",
      "6.0"
    ],
    "explanation": "By Vieta's formulas, for any quadratic equation $ax^2 + bx + c = 0$, the product of the solutions is $\\frac{c}{a}$. Here $a = 2$ and $c = 12$, so the product is $\\frac{12}{2} = 6$."
  },
  {
    "id": 65,
    "code": "H7-M65",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 11,
    "isFillIn": false,
    "topic": "Circles (Arc Length & Central Angles)",
    "difficulty": "Medium",
    "text": "<p>In a circle, a central angle intercepts an arc with a length of $6\\pi$. If the radius of the circle is $9$, what is the measure of the central angle, in degrees?</p>",
    "options": [
      "60^\\circ",
      "90^\\circ",
      "120^\\circ",
      "150^\\circ"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The central angle in radians is $\\theta = \\frac{s}{r} = \\frac{6\\pi}{9} = \\frac{2\\pi}{3}$ radians. Converting to degrees: $$\\frac{2\\pi}{3} \\times \\frac{180^\\circ}{\\pi} = 120^\\circ$$."
  },
  {
    "id": 66,
    "code": "H7-M66",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 12,
    "isFillIn": false,
    "topic": "Radical Equations & Extraneous Solutions",
    "difficulty": "Hard",
    "text": "<p>What is the solution set to the equation $\\sqrt{3x + 1} = x - 1$?</p>",
    "options": [
      "\\{0\\}",
      "\\{5\\}",
      "\\{0, 5\\}",
      "The equation has no real solutions."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Square both sides: $$3x + 1 = (x - 1)^2 = x^2 - 2x + 1 \\implies x^2 - 5x = 0 \\implies x(x - 5) = 0$$. Testing $x = 0$: $\\sqrt{3(0) + 1} = \\sqrt{1} = 1 \\ne -1$ (extraneous). Testing $x = 5$: $\\sqrt{3(5) + 1} = \\sqrt{16} = 4 = 5 - 1$ (valid). Therefore, the only real solution is $\\{5\\}$."
  },
  {
    "id": 67,
    "code": "H7-M67",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 13,
    "isFillIn": true,
    "topic": "Linear Equations in One Variable",
    "difficulty": "Easy",
    "text": "<p>If $5(x - 2) + 3 = 2x + 14$, what is the value of $x$?</p>",
    "options": [],
    "answer": "7",
    "acceptedAnswers": [
      "7",
      "7.0"
    ],
    "explanation": "Expand and simplify: $$5x - 10 + 3 = 2x + 14 \\implies 5x - 7 = 2x + 14 \\implies 3x = 21 \\implies x = 7$$."
  },
  {
    "id": 68,
    "code": "H7-M68",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 14,
    "isFillIn": false,
    "topic": "Statistics (Mean & Median)",
    "difficulty": "Medium",
    "text": "<p>A set of five positive integers has a mean (average) of $12$. If four of the numbers in the set are $8, 10, 14,$ and $18$, what is the median of the five numbers?</p>",
    "options": [
      "10",
      "12",
      "14",
      "18"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The sum of all five integers is $5 \\times 12 = 60$. The sum of the four given numbers is $8 + 10 + 14 + 18 = 50$. The fifth number is $60 - 50 = 10$. Arranging the five numbers in ascending order: $8, 10, 10, 14, 18$. The middle value (median) is $10$."
  },
  {
    "id": 69,
    "code": "H7-M69",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 15,
    "isFillIn": false,
    "topic": "Triangles (Isosceles Angle Properties)",
    "difficulty": "Easy",
    "text": "<p>In isosceles triangle $ABC$, the length of side $AB$ is equal to the length of side $AC$. If the measure of angle $A$ is $40^\\circ$, what is the measure of angle $B$?</p>",
    "options": [
      "40^\\circ",
      "70^\\circ",
      "100^\\circ",
      "140^\\circ"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In an isosceles triangle with $AB = AC$, the base angles opposite these sides are equal: $\\angle B = \\angle C$. The sum of angles is $180^\\circ$: $$40^\\circ + 2\\angle B = 180^\\circ \\implies 2\\angle B = 140^\\circ \\implies \\angle B = 70^\\circ$$."
  },
  {
    "id": 70,
    "code": "H7-M70",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 16,
    "isFillIn": false,
    "topic": "Rational Functions",
    "difficulty": "Easy",
    "text": "<p>The function $g$ is defined by $g(x) = \\frac{x^2 - 9}{x + 3}$. What is the value of $g(5)$?</p>",
    "options": [
      "1",
      "2",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Factoring the numerator gives $g(x) = \\frac{(x - 3)(x + 3)}{x + 3} = x - 3$ for $x \\ne -3$. For $x = 5$, $g(5) = 5 - 3 = 2$. Alternatively, $g(5) = \\frac{5^2 - 9}{5 + 3} = \\frac{16}{8} = 2$."
  },
  {
    "id": 71,
    "code": "H7-M71",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 17,
    "isFillIn": false,
    "topic": "Linear Function Modeling",
    "difficulty": "Easy",
    "text": "<p>A landscaper charges a flat base fee of $\\$50$ for a site visit, plus an hourly rate of $\\$35$ for yard maintenance. If a customer is billed a total of $\\$260$ for a single visit, how many hours of maintenance did the landscaper perform?</p>",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The total cost is modeled by $C = 50 + 35h$. Setting $C = 260$: $$50 + 35h = 260 \\implies 35h = 210 \\implies h = \\frac{210}{35} = 6$$ hours."
  },
  {
    "id": 72,
    "code": "H7-M72",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 18,
    "isFillIn": false,
    "topic": "Linear Inequalities & Word Problems",
    "difficulty": "Medium",
    "text": "<p>A community center rents out its banquet hall for a flat fee of $\\$500$, plus an additional $\\$15$ per guest for catering. A local club wants to host a dinner at the hall but must keep their total spending strictly at or below their $\\$1{,}000$ budget. What is the maximum number of guests they can invite?</p>",
    "options": [
      "32",
      "33",
      "34",
      "66"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The total cost with $g$ guests is $500 + 15g \\le 1000 \\implies 15g \\le 500 \\implies g \\le \\frac{500}{15} \\approx 33.33$. Since the number of guests must be a whole integer, the maximum number is $33$."
  },
  {
    "id": 73,
    "code": "H7-M73",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 19,
    "isFillIn": false,
    "topic": "Systems of Equations (Infinitely Many Solutions)",
    "difficulty": "Medium",
    "text": "<p>$$cx + 2y = 10$$<br>$$15x + 5y = 25$$<br>In the system of equations, $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?</p>",
    "options": [
      "3",
      "6",
      "10",
      "15"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. For infinitely many solutions, the ratio of coefficients must be equal: $$\\frac{c}{15} = \\frac{2}{5} = \\frac{10}{25}$$ Solving $\\frac{c}{15} = \\frac{2}{5}$ gives $c = 15 \\times \\frac{2}{5} = 6$."
  },
  {
    "id": 74,
    "code": "H7-M74",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 20,
    "isFillIn": true,
    "topic": "Nonlinear Systems & Intersections",
    "difficulty": "Hard",
    "text": "<p>The graphs of the equations $y = x^2 + 2x + 1$ and $y = 2x + 5$ intersect at two points in the $xy$-plane. If $(x, y)$ is the intersection point with a positive $x$-coordinate, what is the value of $y$?</p>",
    "options": [],
    "answer": "9",
    "acceptedAnswers": [
      "9",
      "9.0"
    ],
    "explanation": "Set the two equations equal: $$x^2 + 2x + 1 = 2x + 5 \\implies x^2 = 4 \\implies x = 2 \\text{ or } x = -2$$. For the positive $x$-coordinate $x = 2$: $$y = 2(2) + 5 = 9$$."
  },
  {
    "id": 75,
    "code": "H7-M75",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 21,
    "isFillIn": false,
    "topic": "Linear Function Interpretation",
    "difficulty": "Easy",
    "text": "<p>The linear function $W(t) = -3.5t + 150$ models the amount of water $W$, in gallons, remaining in a large storage tank $t$ minutes after a drainage valve is opened. What is the best interpretation of the $y$-intercept of the graph of $W(t)$ in the $ty$-plane?</p>",
    "options": [
      "The tank drains at a rate of 150 gallons per minute.",
      "The tank is completely empty after 150 minutes.",
      "The tank contained 150 gallons of water exactly when the valve was opened.",
      "The tank drains exactly 3.5 gallons every 150 minutes."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The $y$-intercept occurs when $t = 0$: $W(0) = 150$. This represents the initial quantity of water in the tank at the moment the valve was opened."
  },
  {
    "id": 76,
    "code": "H7-M76",
    "prefix": "H7",
    "section": "math",
    "module": 1,
    "qnum": 22,
    "isFillIn": false,
    "topic": "Percentages & Sequential Markups/Discounts",
    "difficulty": "Medium",
    "text": "<p>An electronics store purchases a laptop at a wholesale price of $\\$400$ and marks it up by $40\\%$ to determine the regular retail price. During a weekend clearance sale, the store applies a $15\\%$ discount off the regular retail price. What is the final sale price of the laptop?</p>",
    "options": [
      "\\$460",
      "\\$476",
      "\\$500",
      "\\$560"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Regular retail price after $40\\%$ markup $= 400 \\times 1.40 = \\$560$. Sale price after $15\\%$ discount $= 560 \\times (1 - 0.15) = 560 \\times 0.85 = \\$476$."
  },
  {
    "id": 77,
    "code": "H7-M77",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 1,
    "isFillIn": true,
    "topic": "3D Geometry (Cylinder & Cone Volume)",
    "difficulty": "Medium",
    "text": "<p>A right circular cylinder and a right circular cone share the exact same radius and the exact same height. If the volume of the cylinder is $84$ cubic centimeters, what is the volume of the cone in cubic centimeters?</p>",
    "options": [],
    "answer": "28",
    "acceptedAnswers": [
      "28",
      "28.0"
    ],
    "explanation": "The volume of a cylinder is $V_{\\text{cyl}} = \\pi r^2 h = 84$, while the volume of a cone with the same radius and height is $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} V_{\\text{cyl}} = \\frac{84}{3} = 28$ cubic centimeters."
  },
  {
    "id": 78,
    "code": "H7-M78",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 2,
    "isFillIn": true,
    "topic": "Quadratic Equations (Sum of Roots)",
    "difficulty": "Medium",
    "text": "<p>The quadratic equation $4x^2 - 18x + 11 = 0$ has two real solutions. What is the sum of these two solutions?</p>",
    "options": [],
    "answer": "4.5",
    "acceptedAnswers": [
      "4.5",
      "9/2",
      "4.50"
    ],
    "explanation": "By Vieta's formulas, the sum of the roots of a quadratic equation $ax^2 + bx + c = 0$ is $-\\frac{b}{a}$. Here $a = 4$ and $b = -18$: $$\\text{Sum} = -\\frac{-18}{4} = \\frac{18}{4} = \\frac{9}{2} = 4.5$$."
  },
  {
    "id": 79,
    "code": "H7-M79",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 3,
    "isFillIn": false,
    "topic": "Circles in Coordinate Plane (Distance to Origin)",
    "difficulty": "Hard",
    "text": "<p>The equation of a circle in the $xy$-plane is $x^2 + y^2 - 12x + 16y = -80$. What is the distance from the center of the circle to the origin $(0, 0)$?</p>",
    "options": [
      "8",
      "10",
      "14",
      "20"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Complete the square: $$(x - 6)^2 + (y + 8)^2 = -80 + 36 + 64 = 20$$ The center of the circle is $(h, k) = (6, -8)$. The distance from $(6, -8)$ to $(0, 0)$ is $$\\sqrt{(6 - 0)^2 + (-8 - 0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$."
  },
  {
    "id": 80,
    "code": "H7-M80",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 4,
    "isFillIn": false,
    "topic": "Statistics (Standard Deviation & Spread)",
    "difficulty": "Hard",
    "text": "<p>Two separate data sets, Set X and Set Y, each contain exactly $1{,}000$ integers. The mean of Set X is $50$, and the standard deviation is $4$. The mean of Set Y is $50$, and the standard deviation is $12$. Which of the following statements must be true?</p>",
    "options": [
      "Set Y contains more integers greater than 50 than Set X does.",
      "The median of Set Y is greater than the median of Set X.",
      "The values in Set Y are generally spread further away from the mean than the values in Set X.",
      "The range of Set Y is exactly three times the range of Set X."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Standard deviation measures the dispersion or spread of data values around their arithmetic mean. A larger standard deviation ($12$ vs. $4$) indicates that the values in Set Y are generally spread further away from the mean than those in Set X."
  },
  {
    "id": 81,
    "code": "H7-M81",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 5,
    "isFillIn": false,
    "topic": "Exponential Equations",
    "difficulty": "Medium",
    "text": "<p>The function $f$ is defined by $f(x) = 4^{x-1} + 3$. If $f(a) = 67$, what is the value of $a$?</p>",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Set $f(a) = 67$: $$4^{a-1} + 3 = 67 \\implies 4^{a-1} = 64$$ Since $64 = 4^3$: $$a - 1 = 3 \\implies a = 4$$."
  },
  {
    "id": 82,
    "code": "H7-M82",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 6,
    "isFillIn": false,
    "topic": "Rational Expressions & Equating Coefficients",
    "difficulty": "Hard",
    "text": "<p>If $\\frac{cx + d}{3x - 2} = 4 + \\frac{7}{3x - 2}$ for all values of $x$ where $x \\ne \\frac{2}{3}$, what is the value of $c + d$?</p>",
    "options": [
      "11",
      "15",
      "19",
      "21"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Multiply both sides by $(3x - 2)$: $$cx + d = 4(3x - 2) + 7 = 12x - 8 + 7 = 12x - 1$$ Equating corresponding coefficients: $c = 12$ and $d = -1$. Therefore, $c + d = 12 + (-1) = 11$."
  },
  {
    "id": 83,
    "code": "H7-M83",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 7,
    "isFillIn": true,
    "topic": "Quadratic Functions (Maximum Value)",
    "difficulty": "Medium",
    "text": "<p>What is the maximum value of the function $f(x) = -3x^2 + 24x - 19$?</p>",
    "options": [],
    "answer": "29",
    "acceptedAnswers": [
      "29",
      "29.0"
    ],
    "explanation": "Since $a = -3 < 0$, the parabola opens downward and reaches its maximum value at the vertex: $$x = -\\frac{b}{2a} = -\\frac{24}{2(-3)} = 4$$ Evaluating $f(4)$: $$f(4) = -3(4)^2 + 24(4) - 19 = -3(16) + 96 - 19 = -48 + 96 - 19 = 29$$."
  },
  {
    "id": 84,
    "code": "H7-M84",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 8,
    "isFillIn": false,
    "topic": "Absolute Value Equations",
    "difficulty": "Hard",
    "text": "<p>What is the sum of all distinct solutions to the absolute value equation $|2x - 7| = |x + 5|$?</p>",
    "options": [
      "12",
      "12.67",
      "14",
      "14.33"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Case 1: $2x - 7 = x + 5 \\implies x = 12$. Case 2: $2x - 7 = -(x + 5) = -x - 5 \\implies 3x = 2 \\implies x = \\frac{2}{3}$. The sum of the distinct solutions is $$12 + \\frac{2}{3} = \\frac{38}{3} \\approx 12.67$$."
  },
  {
    "id": 85,
    "code": "H7-M85",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 9,
    "isFillIn": false,
    "topic": "Rational Exponents",
    "difficulty": "Medium",
    "text": "<p>If $x^{3/4} = 27$, what is the value of $x$?</p>",
    "options": [
      "9",
      "18",
      "81",
      "243"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Raise both sides to the power of $\\frac{4}{3}$: $$x = 27^{4/3} = (\\sqrt[3]{27})^4 = 3^4 = 81$$."
  },
  {
    "id": 86,
    "code": "H7-M86",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 10,
    "isFillIn": false,
    "topic": "Scatterplots & Line of Best Fit Slope",
    "difficulty": "Easy",
    "text": "<p>A scatterplot displays the relationship between the daily temperature in degrees Fahrenheit ($x$) and the number of ice cream cones sold ($y$) at a local shop. The line of best fit for the data is $y = 8.5x - 120$. Which of the following is the best interpretation of the slope of this line?</p>",
    "options": [
      "For every 1 degree Fahrenheit increase in temperature, the shop sells approximately 8.5 more ice cream cones.",
      "For every 1 degree Fahrenheit increase in temperature, the shop sells approximately 120 more ice cream cones.",
      "If the temperature is 0 degrees, the shop will sell exactly 8.5 ice cream cones.",
      "The shop must reach 8.5 degrees Fahrenheit before it begins selling ice cream cones."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In a linear model $y = mx + b$, the slope $m = 8.5$ represents the estimated change in the dependent variable ($y$, ice cream cones sold) per 1-unit increase in the independent variable ($x$, temperature in degrees Fahrenheit)."
  },
  {
    "id": 87,
    "code": "H7-M87",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 11,
    "isFillIn": false,
    "topic": "Rational Equation Modeling",
    "difficulty": "Hard",
    "text": "<p>A commuter train travels a distance of $120$ miles at a constant speed of $x$ miles per hour. If the train had traveled $20$ miles per hour faster, the trip would have taken exactly $1$ hour less. Which of the following equations can be used to find the original speed $x$ of the train?</p>",
    "options": [
      "\\frac{120}{x} - \\frac{120}{x+20} = 1",
      "\\frac{120}{x+20} - \\frac{120}{x} = 1",
      "\\frac{x}{120} - \\frac{x+20}{120} = 1",
      "\\frac{x}{120} - \\frac{x}{120} + 20 = 1"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Time is given by $\\text{Distance} / \\text{Speed}$. The original time is $\\frac{120}{x}$ hours, and the faster time is $\\frac{120}{x+20}$ hours. Since the faster trip took $1$ hour less: $$\\frac{120}{x} - \\frac{120}{x+20} = 1$$."
  },
  {
    "id": 88,
    "code": "H7-M88",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 12,
    "isFillIn": false,
    "topic": "Rational Functions & Discontinuities",
    "difficulty": "Hard",
    "text": "<p>The rational function $h(x) = \\frac{x^2 - 3x - 10}{x^2 - 25}$ has a vertical asymptote at $x = -5$ and a \"hole\" (removable discontinuity) at another $x$-value. At what $x$-value does the hole occur?</p>",
    "options": [
      "x = -2",
      "x = 2",
      "x = 5",
      "x = 10"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Factor numerator and denominator: $$h(x) = \\frac{(x - 5)(x + 2)}{(x - 5)(x + 5)}$$ The common linear factor $(x - 5)$ cancels out, creating a removable discontinuity (hole) at $x = 5$."
  },
  {
    "id": 89,
    "code": "H7-M89",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 13,
    "isFillIn": true,
    "topic": "Rational Equations",
    "difficulty": "Medium",
    "text": "<p>What is the solution to the equation $\\frac{1}{x} + \\frac{3}{2x} = 5$?</p>",
    "options": [],
    "answer": "1/2",
    "acceptedAnswers": [
      "1/2",
      "0.5",
      ".5"
    ],
    "explanation": "Find a common denominator of $2x$: $$\\frac{2}{2x} + \\frac{3}{2x} = \\frac{5}{2x} = 5 \\implies 5 = 10x \\implies x = \\frac{5}{10} = \\frac{1}{2} = 0.5$$."
  },
  {
    "id": 90,
    "code": "H7-M90",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 14,
    "isFillIn": false,
    "topic": "Similar Triangles & Area Ratios",
    "difficulty": "Medium",
    "text": "<p>Triangles $\\triangle ABC$ and $\\triangle DEF$ are similar, with side lengths of $\\triangle DEF$ being exactly $4$ times the corresponding side lengths of $\\triangle ABC$. If the area of $\\triangle ABC$ is $12$ square units, what is the area of $\\triangle DEF$?</p>",
    "options": [
      "48",
      "144",
      "192",
      "256"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. When two geometric figures are similar with linear ratio $k = 4$, their areas scale by $k^2 = 4^2 = 16$. Thus, $\\text{Area}(\\triangle DEF) = 12 \\times 16 = 192$ square units."
  },
  {
    "id": 91,
    "code": "H7-M91",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 15,
    "isFillIn": true,
    "topic": "Circles (Arc Length & Radians)",
    "difficulty": "Hard",
    "text": "<p>In a circle with a radius of $12$ units, a central angle intercepts an arc with a length of $15\\pi$ units. If the measure of the central angle is $a\\pi$ radians, what is the value of $a$?</p>",
    "options": [],
    "answer": "1.25",
    "acceptedAnswers": [
      "1.25",
      "5/4"
    ],
    "explanation": "The central angle in radians is $\\theta = \\frac{s}{r} = \\frac{15\\pi}{12} = \\frac{5\\pi}{4}$ radians. Since $\\theta = a\\pi$, we have $a = \\frac{5}{4} = 1.25$."
  },
  {
    "id": 92,
    "code": "H7-M92",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 16,
    "isFillIn": false,
    "topic": "Percentages & Variables",
    "difficulty": "Medium",
    "text": "<p>Variable $A$ is $150\\%$ of variable $B$. Variable $B$ is $40\\%$ of variable $C$. Variable $A$ is what percent of variable $C$?</p>",
    "options": [
      "60%",
      "90%",
      "110%",
      "190%"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. $A = 1.50B$ and $B = 0.40C$. Substituting $B$: $$A = 1.50(0.40C) = 0.60C = 60\\% \\text{ of } C$$."
  },
  {
    "id": 93,
    "code": "H7-M93",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 17,
    "isFillIn": false,
    "topic": "Complex Numbers (Multiplication)",
    "difficulty": "Hard",
    "text": "<p>Which of the following is equivalent to the complex number expression $(3 - 4i)(2 + 5i)$? (Note: $i = \\sqrt{-1}$)</p>",
    "options": [
      "6 - 20i",
      "14 + 7i",
      "26 + 7i",
      "26 - 23i"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Expand using FOIL: $$(3 - 4i)(2 + 5i) = 6 + 15i - 8i - 20i^2$$ Since $i^2 = -1$: $$6 + 7i - 20(-1) = 6 + 7i + 20 = 26 + 7i$$."
  },
  {
    "id": 94,
    "code": "H7-M94",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 18,
    "isFillIn": false,
    "topic": "Quadratic Functions (Factored Form)",
    "difficulty": "Medium",
    "text": "<p>The graph of the quadratic function $y = a(x - 4)(x + 2)$ passes through the point $(0, -16)$. What is the value of the constant $a$?</p>",
    "options": [
      "-2",
      "2",
      "4",
      "8"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute $(0, -16)$ into the function: $$-16 = a(0 - 4)(0 + 2) = a(-4)(2) = -8a \\implies a = \\frac{-16}{-8} = 2$$."
  },
  {
    "id": 95,
    "code": "H7-M95",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 19,
    "isFillIn": false,
    "topic": "Exponential Functions (Equivalent Forms)",
    "difficulty": "Hard",
    "text": "<p>A population of algae in a tank is modeled by the function $P(t) = 400(1.6)^{t/12}$, where $t$ is the number of days after the observation began. Which of the following equivalent forms of the function best highlights the approximate daily growth rate of the algae?</p>",
    "options": [
      "P(t) = 400(0.133)^t",
      "P(t) = 400(1.04)^t",
      "P(t) = 400(1.6)^{12t}",
      "P(t) = 400(19.2)^t"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Rewrite the exponent using power of a power: $P(t) = 400((1.6)^{1/12})^t$. Calculating $(1.6)^{1/12} \\approx 1.04$, this gives $P(t) = 400(1.04)^t$, highlighting an approximate $4\\%$ daily growth rate."
  },
  {
    "id": 96,
    "code": "H7-M96",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 20,
    "isFillIn": false,
    "topic": "Right Triangle Trigonometry",
    "difficulty": "Hard",
    "text": "<p>In right triangle $PQR$, the measure of angle $Q$ is $90^\\circ$. If $\\sin(P) = \\frac{7}{25}$, what is the value of $\\tan(R)$?</p>",
    "options": [
      "\\frac{7}{24}",
      "\\frac{24}{25}",
      "\\frac{24}{7}",
      "\\frac{25}{7}"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In right triangle $PQR$ with right angle at $Q$, $\\sin(P) = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{QR}{PR} = \\frac{7}{25}$. The adjacent side is $PQ = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$. For angle $R$, the opposite side is $PQ = 24$ and adjacent side is $QR = 7$. Therefore, $\\tan(R) = \\frac{\\text{opp}}{\\text{adj}} = \\frac{24}{7}$."
  },
  {
    "id": 97,
    "code": "H7-M97",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 21,
    "isFillIn": false,
    "topic": "Systems of Equations (Infinitely Many Solutions)",
    "difficulty": "Hard",
    "text": "<p>$$5x + py = 15$$<br>$$cx - 6y = -45$$<br>In the system of linear equations, $c$ and $p$ are constants. If the system has infinitely many solutions, what is the value of $c + p$?</p>",
    "options": [
      "-13",
      "-7",
      "3",
      "17"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. For infinitely many solutions, the ratio of coefficients must be equal: $$\\frac{c}{5} = \\frac{-6}{p} = \\frac{-45}{15} = -3$$ From $\\frac{c}{5} = -3 \\implies c = -15$. From $\\frac{-6}{p} = -3 \\implies p = 2$. Therefore, $c + p = -15 + 2 = -13$."
  },
  {
    "id": 98,
    "code": "H7-M98",
    "prefix": "H7",
    "section": "math",
    "module": 2,
    "qnum": 22,
    "isFillIn": false,
    "topic": "Nonlinear Systems & Tangency (Discriminant)",
    "difficulty": "Hard",
    "text": "<p>$$y = 2x^2 - 6x + 8$$<br>$$y = mx + 6$$<br>In the system of equations, $m$ is a constant. For which of the following values of $m$ does the system have exactly one real solution?</p>",
    "options": [
      "-4",
      "-2",
      "0",
      "2"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Equate the two expressions: $$2x^2 - 6x + 8 = mx + 6 \\implies 2x^2 - (6 + m)x + 2 = 0$$ Exactly one solution requires discriminant $\\Delta = 0$: $$(-(6 + m))^2 - 4(2)(2) = 0 \\implies (6 + m)^2 - 16 = 0 \\implies (6 + m)^2 = 16 \\implies 6 + m = \\pm 4$$. Either $6 + m = 4 \\implies m = -2$, or $6 + m = -4 \\implies m = -10$. Among the given options, $m = -2$ is listed."
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
