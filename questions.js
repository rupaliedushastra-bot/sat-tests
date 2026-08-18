// =============================================
// Digital SAT – Topic Test 1: Reading Comprehension
// 25 Questions | Single Timed Module (32 min)
// answers: 0=A, 1=B, 2=C, 3=D
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "The following passage is adapted from \"The Ocean's Memory\" by marine biologist Dr. Sarah Chen (2023).\n\nCoral reefs, often called the \"rainforests of the sea,\" cover less than one percent of the ocean floor yet support approximately twenty-five percent of all marine species. Despite their ecological importance, these ecosystems face unprecedented threats from rising ocean temperatures, acidification, and human activity. Scientists estimate that if current trends continue, seventy to ninety percent of coral reefs could be lost by 2050. Yet some researchers remain cautiously optimistic, pointing to newly discovered \"super corals\" that demonstrate unusual resilience to thermal stress.\n\nBased on the passage, which statement best captures the overall situation facing coral reefs?",
    "options": [
      "Coral reefs are thriving due to recent scientific discoveries about heat-resistant species.",
      "Coral reefs face serious threats but may have some capacity for resilience.",
      "Scientists have determined that coral reefs will definitely be lost by 2050.",
      "Human activity is the only significant threat to coral reef survival."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The passage highlights both the grave dangers facing coral reefs (rising temperatures, acidification, potential 70–90% loss by 2050) and a counterbalancing element of hope (\"cautiously optimistic, pointing to newly discovered 'super corals' that demonstrate unusual resilience\"). Thus, choice B accurately captures this dual reality.\n\n• Choice A is incorrect because the passage emphasizes that reefs face \"unprecedented threats\" and are not thriving overall.\n• Choice C is incorrect because the loss is described as a conditional projection (\"if current trends continue\"), not a definitive certainty.\n• Choice D is incorrect because the text lists rising ocean temperatures and acidification alongside human activity, not human activity alone."
  },
  {
    "id": 2,
    "text": "The following passage is adapted from a 2022 study on urban green spaces.\n\nA decade-long study conducted across twelve major cities found a consistent pattern: neighborhoods with abundant green spaces — parks, tree-lined streets, community gardens — showed measurably lower rates of stress-related illness and higher reported life satisfaction among residents. Interestingly, the benefits were not limited to those who actively used the green spaces. Even residents who merely lived near parks but rarely visited them showed health improvements compared to those in neighborhoods lacking greenery entirely.\n\nWhat does the study's finding about residents who \"rarely visited\" green spaces suggest about how green spaces benefit people?",
    "options": [
      "Active physical exercise in green spaces is the primary driver of health benefits.",
      "Visual or passive exposure to greenery may be sufficient to produce health benefits.",
      "Residents who live near parks receive no benefit unless they regularly use them.",
      "The health benefits of green spaces are limited to stress reduction."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. Because residents who \"rarely visited\" green spaces still experienced measurable health improvements compared to those in areas without greenery, active physical use is not strictly required. This indicates that passive, ambient, or visual proximity to green environments can confer meaningful health benefits.\n\n• Choice A is incorrect because the finding regarding non-active visitors directly shows that active exercise is not the sole requirement for experiencing benefits.\n• Choice C is incorrect because it directly contradicts the text, which notes health improvements in residents who rarely visited.\n• Choice D is incorrect because the passage also explicitly mentions \"higher reported life satisfaction,\" showing benefits extend beyond mere stress reduction."
  },
  {
    "id": 3,
    "text": "The following passage is adapted from a historical account of the printing press.\n\nBefore Gutenberg's printing press, a single Bible required a monk approximately three years to copy by hand. The press could produce hundreds of identical copies in the same time. Critics at the time feared this democratization of text would render the careful, meditative work of scribes obsolete and would flood society with unchecked, potentially heretical ideas. Supporters, however, believed widespread literacy would elevate the common person and strengthen religious understanding through broader access to scripture.\n\nThe passage indicates that supporters and critics of the printing press disagreed primarily about:",
    "options": [
      "Whether the printing press could produce accurate copies of religious texts.",
      "The speed at which the printing press could operate compared to human scribes.",
      "Whether broader access to written materials would have positive or negative social effects.",
      "The religious authority of monks who had previously copied texts by hand."
    ],
    "answer": 2,
    "topic": "Reading Comprehension",
    "explanation": "Choice C is correct. The text contrasts the perspective of critics (who feared flooding society with unchecked, heretical ideas and rendering scribal work obsolete) with that of supporters (who believed widespread access would elevate the common person and deepen religious understanding). The core debate centered on the societal consequences of widespread text dissemination.\n\n• Choice A is incorrect because neither group's arguments in the passage turn on typographical or textual accuracy.\n• Choice B is incorrect because both sides acknowledged the dramatic increase in speed and volume; the dispute was over the social impact.\n• Choice D is incorrect because the passage does not discuss challenging or debating the spiritual authority of monks."
  },
  {
    "id": 4,
    "text": "The following is an excerpt from a speech delivered at a 2019 environmental conference.\n\n\"We stand at a crossroads. The decisions made by this generation will echo across centuries. I am not here to predict disaster — I am here to insist on possibility. Every solar panel installed, every forest preserved, every child taught to value the natural world is a vote for the future we want to inhabit. The tools exist. The science is clear. What remains is will — collective, sustained, and courageous will.\"\n\nThe primary purpose of this excerpt is to:",
    "options": [
      "Present statistical evidence about renewable energy adoption rates.",
      "Warn audiences about the inevitable consequences of climate inaction.",
      "Inspire action by emphasizing human agency and available solutions.",
      "Criticize previous generations for their environmental failures."
    ],
    "answer": 2,
    "topic": "Reading Comprehension",
    "explanation": "Choice C is correct. The speaker explicitly rejects predicting doom (\"I am not here to predict disaster — I am here to insist on possibility\") and focuses on actionable steps, existing tools, and human determination (\"The tools exist. The science is clear. What remains is will\"). The rhetorical purpose is inspirational and motivational.\n\n• Choice A is incorrect because no data or numerical statistics are presented.\n• Choice B is incorrect because the speaker purposefully disclaims predicting disaster, focusing instead on positive potential.\n• Choice D is incorrect because the speech focuses on the current generation's choices and responsibility rather than laying blame on past generations."
  },
  {
    "id": 5,
    "text": "The following passage is adapted from \"The Psychology of Habit\" by Dr. James Weller (2021).\n\nHabits are not merely repeated actions — they are deeply encoded neural pathways that operate largely outside conscious awareness. When a behavior is performed repeatedly in a consistent context, the brain begins to automate it, freeing up cognitive resources for other tasks. This is why experienced drivers can hold a conversation while navigating familiar roads; the driving itself has become habitual. The danger, of course, is that this same efficiency can entrench harmful behaviors just as readily as beneficial ones.\n\nAccording to the passage, the \"danger\" the author mentions refers to:",
    "options": [
      "The risk that drivers will become too distracted to respond to emergencies.",
      "The possibility that the brain's automation of behavior can reinforce bad habits as easily as good ones.",
      "The cognitive resources wasted when people try to break entrenched behaviors.",
      "The fact that habits are impossible to change once they become neural pathways."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The final sentence connects the brain's automatic efficiency to its peril: \"The danger, of course, is that this same efficiency can entrench harmful behaviors just as readily as beneficial ones.\" This directly points to the indiscriminate reinforcement of negative habits.\n\n• Choice A is incorrect because driving while conversing is cited only as an illustrative example of cognitive automation, not the primary danger of habits.\n• Choice C is incorrect because the passage discusses freeing up cognitive resources, not wasting resources on breaking habits.\n• Choice D is incorrect because the passage does not claim neural pathways make change impossible."
  },
  {
    "id": 6,
    "text": "The following excerpt is from a fictional short story, \"The Cartographer's Daughter\" (2020).\n\nMy father mapped everything — rivers, mountain passes, trade routes through forgotten valleys. But he never mapped the one thing I needed most: the distance between us. His eyes would light up over parchment and ink, his fingers tracing paths he had walked, but when I sat across from him at dinner, he seemed to study me like unfamiliar terrain, uncertain of the scale, unsure where the borders lay.\n\nThe narrator uses the metaphor of mapping primarily to convey:",
    "options": [
      "Her father's professional success as a cartographer.",
      "Her admiration for her father's dedication to his craft.",
      "The emotional distance between her and her father despite physical proximity.",
      "Her own desire to become a cartographer like her father."
    ],
    "answer": 2,
    "topic": "Reading Comprehension",
    "explanation": "Choice C is correct. The narrator contrasts her father's mastery in charting the physical world with his inability to connect with her personally (\"he never mapped the one thing I needed most: the distance between us\"). Studying her \"like unfamiliar terrain\" underscores their emotional detachment despite sitting across from each other.\n\n• Choice A is incorrect because the focus is on their strained personal relationship rather than praising his career.\n• Choice B is incorrect because the tone reflects longing and emotional alienation rather than pure professional admiration.\n• Choice D is incorrect because the passage does not mention any ambition of the narrator to enter cartography."
  },
  {
    "id": 7,
    "text": "The following passage is adapted from a 2023 article on ancient Roman engineering.\n\nRoman concrete, known as opus caementicium, has puzzled engineers and chemists for decades. Modern concrete typically degrades significantly within fifty years, yet Roman maritime structures built over two thousand years ago remain largely intact. Recent analysis revealed the secret: seawater actually strengthens Roman concrete over time by encouraging the growth of rare minerals within the structure. Roman builders, who added volcanic ash and seawater to their mixture, inadvertently created a self-reinforcing material.\n\nThe passage implies that Roman builders' use of volcanic ash and seawater was:",
    "options": [
      "A deliberate scientific decision based on advanced knowledge of chemistry.",
      "A practice that turned out to have beneficial effects the builders likely did not fully understand.",
      "The primary reason Roman civilization outlasted all other ancient cultures.",
      "A technique that modern engineers have successfully replicated in contemporary construction."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The passage explicitly states that Roman builders \"inadvertently created a self-reinforcing material.\" The word \"inadvertently\" means done without deliberate knowledge of that specific long-term chemical reaction, proving the long-term benefits were serendipitous rather than scientifically engineered.\n\n• Choice A is incorrect because \"inadvertently\" indicates they did not possess the modern chemical understanding of mineral growth.\n• Choice C is incorrect because the text makes no claim about Roman civilization's overall duration relative to other ancient cultures.\n• Choice D is incorrect because the text states modern engineers were puzzled by it and does not claim full contemporary industrial replication."
  },
  {
    "id": 8,
    "text": "The following passage is adapted from \"Learning to Listen\" by educator Maria Santos (2022).\n\nIn most classrooms, silence is treated as a problem to be solved — a gap to be filled with teacher talk or student response. Yet research in contemplative education suggests that structured silence, when introduced thoughtfully, improves retention, deepens reflection, and paradoxically increases student willingness to contribute to discussion afterward. Students who are given time to think before speaking tend to offer more substantive, considered responses than those who feel pressure to answer immediately.\n\nWhat is the central claim of this passage?",
    "options": [
      "Teachers talk too much and should allow students to lead classroom discussions.",
      "Silence in classrooms, when used intentionally, can improve learning outcomes and participation.",
      "Students who take longer to respond are generally more intelligent than their peers.",
      "Research has conclusively proven that traditional classroom methods are ineffective."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The core thesis of the paragraph is that \"structured silence, when introduced thoughtfully, improves retention, deepens reflection, and paradoxically increases student willingness to contribute to discussion afterward.\" Choice B concise and accurately summarizes this central argument.\n\n• Choice A is incorrect because the passage does not simply advocate for student-led discussions, but specifically for structured pauses and reflection.\n• Choice C is incorrect because the passage discusses response quality resulting from thinking time, not intrinsic general intelligence.\n• Choice D is incorrect because the passage does not make an extreme blanket claim that all traditional pedagogical methods are ineffective."
  },
  {
    "id": 9,
    "text": "The following passage is adapted from a biography of Marie Curie.\n\nMarie Curie was the first woman to win a Nobel Prize, the only person to win Nobel Prizes in two different sciences (Physics and Chemistry), and the first woman to serve as a professor at the University of Paris. Yet despite these achievements, the French Academy of Sciences refused to admit her as a member — a decision made by a single vote in 1911. Many historians argue this rejection was motivated primarily by gender rather than any lack of scientific qualification, given that her discoveries had already earned her international recognition.\n\nThe passage uses the French Academy's decision primarily to illustrate:",
    "options": [
      "The high standards that scientific organizations maintained in early twentieth-century France.",
      "The contrast between Curie's extraordinary accomplishments and the institutional barriers she still faced.",
      "The reason Curie ultimately left France to pursue her research elsewhere.",
      "The limited understanding of radioactivity among French scientists at the time."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The passage establishes Curie's unprecedented achievements (two Nobels in two sciences, professorship at University of Paris) and juxtaposes them with the Academy's narrow rejection (\"Yet despite these achievements...\"). This stark contrast demonstrates how entrenched gender-based institutional barriers persisted despite monumental merit.\n\n• Choice A is incorrect because the passage attributes the rejection to gender bias rather than rigorous academic standards.\n• Choice C is incorrect because the passage does not mention Curie leaving France as a result of the vote.\n• Choice D is incorrect because the rejection was motivated by social/gender prejudices, not ignorance of radiation science."
  },
  {
    "id": 10,
    "text": "The following passage is from a review of a 2022 novel.\n\n\"The Glass Archive\" is, at its surface, a mystery novel — but to read it only as such would be to miss the point. Beneath its plot of stolen documents and shadowy informants lies a meditation on how institutions preserve some histories while burying others. The archives of the title are not repositories of truth but of power: what gets kept, what gets classified, and what gets destroyed tells us more about who controlled the past than about what actually happened.\n\nThe reviewer suggests that readers who approach \"The Glass Archive\" purely as a mystery novel will:",
    "options": [
      "Find the plot implausible and unsatisfying.",
      "Overlook the novel's deeper thematic concerns about history and institutional power.",
      "Misunderstand the author's intended audience.",
      "Miss important clues necessary to solve the central mystery."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The reviewer explains that reading the novel merely as a mystery causes one to \"miss the point,\" as the book functions fundamentally as a \"meditation on how institutions preserve some histories while burying others\" and an inquiry into power dynamics.\n\n• Choice A is incorrect because the reviewer does not criticize the plot as poorly constructed or implausible.\n• Choice C is incorrect because the focus is on thematic interpretation, not the demographic identity of the readership.\n• Choice D is incorrect because the issue is missing the philosophical theme, not overlooking plot clues to solve the in-book mystery."
  },
  {
    "id": 11,
    "text": "The following passage is adapted from \"Why Languages Die\" by linguist Dr. Peter Okafor (2021).\n\nOf the approximately seven thousand languages spoken in the world today, nearly half are considered endangered — spoken by fewer than a thousand people, often only by elders. When a language disappears, it takes with it not just words but ways of categorizing experience, ecological knowledge embedded in place names, and oral traditions that may hold unique historical records. Some linguists argue that each language death represents an irreplaceable cognitive loss for humanity, comparable to the destruction of a library.\n\nThe metaphor of \"the destruction of a library\" is used to suggest that:",
    "options": [
      "Endangered languages should be preserved in physical archives before they disappear.",
      "Language death results in a permanent and significant loss of human knowledge and perspective.",
      "Written languages are inherently more valuable than spoken ones.",
      "Libraries are the best institutions for preserving endangered languages."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. A library is an accumulated repository of knowledge, culture, and recorded wisdom. Comparing language extinction to the destruction of a library emphasizes that irreplaceable stores of ecological knowledge, cognitive frameworks, and oral history are permanently erased.\n\n• Choice A is incorrect because the metaphor illustrates the gravity of the loss, not a policy directive about physical archiving.\n• Choice C is incorrect because the passage emphasizes the deep value of spoken/oral traditions and never claims written languages are superior.\n• Choice D is incorrect because the library is used purely as an analogy for lost knowledge, not a literal recommendation for library management."
  },
  {
    "id": 12,
    "text": "The following passage is adapted from an essay on scientific consensus.\n\nScientific consensus is often misunderstood as a matter of unanimous agreement. In practice, consensus means that the overwhelming weight of evidence, evaluated by the relevant scientific community, points in one direction — not that every expert agrees. Dissent exists in virtually every field. What distinguishes productive scientific dissent from contrarianism is whether the dissenting view offers evidence-based alternative explanations or merely challenges findings without providing a competing framework.\n\nAccording to the passage, what makes scientific dissent \"productive\" rather than merely contrarian?",
    "options": [
      "Productive dissent is supported by a majority of scientists in the relevant field.",
      "Productive dissent provides evidence-based alternative explanations rather than simply rejecting existing findings.",
      "Productive dissent is published in peer-reviewed journals with wide circulation.",
      "Productive dissent challenges the consensus within a short time frame after it is established."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The text explicitly answers this in the final sentence: productive dissent is distinguished by \"whether the dissenting view offers evidence-based alternative explanations or merely challenges findings without providing a competing framework.\"\n\n• Choice A is incorrect because dissent, by definition, represents a minority viewpoint rather than majority consensus.\n• Choice C is incorrect because journal circulation and specific publication metrics are not mentioned in the passage.\n• Choice D is incorrect because timeframe or speed of objection is not cited as the distinguishing factor."
  },
  {
    "id": 13,
    "text": "The following passage is from a 2023 article on the economics of attention.\n\nEvery second you spend looking at a social media feed is a second a company is earning advertising revenue. The attention economy, as scholars now call it, operates on a simple principle: platforms compete for your time, then sell that time to advertisers. What is rarely discussed, however, is that this economy does not merely capture existing attention — it actively engineers desire for more engagement through variable reward mechanisms, notification systems, and algorithmic content curation, each designed to keep users returning.\n\nThe author's tone toward the attention economy could best be described as:",
    "options": [
      "Nostalgic and regretful about how technology has changed social interaction.",
      "Critical and analytical, exposing mechanisms designed to exploit users.",
      "Neutral and informative, presenting both benefits and drawbacks.",
      "Enthusiastic about the economic opportunities created by digital platforms."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The author analyzes the underlying economic model and uses pointed analytical language (\"actively engineers desire\", \"variable reward mechanisms\", \"designed to keep users returning\") to reveal how digital platforms deliberately capture user time for profit. This tone is both analytical and critically revealing.\n\n• Choice A is incorrect because the passage does not express sentimental longing for a pre-digital past.\n• Choice C is incorrect because the author presents no positive benefits of the attention economy to maintain a balanced neutrality.\n• Choice D is incorrect because the author exposes engagement engineering rather than celebrating business opportunities."
  },
  {
    "id": 14,
    "text": "The following excerpt is from the novel \"Meridian\" by a contemporary author.\n\nThe town had not changed. That was the problem. Everywhere else — cities, careers, relationships — had shifted and realigned, but Harlow Creek remained stubbornly, defiantly itself: the same diner with its vinyl stools, the same water tower bearing a faded class year, the same gravel road that ended, as it always had, at the edge of the lake. Standing at that edge now, she understood that she had come home not to find herself but to finally confront what she had been running from.\n\nWhat does the town's unchanging nature represent in relation to the narrator?",
    "options": [
      "A safe and comforting refuge from the instability of adult life.",
      "A reminder of her failed ambitions and unrealized potential.",
      "The persistence of something she has been avoiding rather than resolving.",
      "Evidence that small towns lack the opportunities available in cities."
    ],
    "answer": 2,
    "topic": "Reading Comprehension",
    "explanation": "Choice C is correct. The narrator notes that while everything else in her life changed, Harlow Creek remained static, which served as \"the problem.\" The unchanging environment directly forces her to \"finally confront what she had been running from,\" meaning the town embodies the unresolved past she had avoided.\n\n• Choice A is incorrect because the town's stasis is described as \"the problem\" and a confrontation, not a soothing sanctuary.\n• Choice B is incorrect because the narrative focuses on emotional avoidance rather than career or ambition failure.\n• Choice D is incorrect because the focus is internal and psychological, not a sociological critique of small-town economies."
  },
  {
    "id": 15,
    "text": "The following passage is adapted from a 2022 article on childhood literacy.\n\nStudies consistently show that children who are read to daily from infancy develop stronger vocabularies, better listening comprehension, and a more positive orientation toward learning. Less well-known is a related finding: the quality of reading interaction matters as much as frequency. Children who experience interactive reading — where adults ask questions, invite predictions, and discuss ideas in the text — show significantly greater gains than those who listen passively. Mere exposure to books, in other words, is not enough.\n\nWhich statement best summarizes the passage's main insight about reading to children?",
    "options": [
      "Reading to children every day is more important than any other factor in their literacy development.",
      "Both how often and how interactively adults read with children influence literacy outcomes.",
      "Children who are read to passively show no literacy benefits compared to non-readers.",
      "Listening comprehension is the most important literacy skill children can develop in early childhood."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The passage establishes that daily reading is beneficial, but adds the crucial qualification that \"the quality of reading interaction matters as much as frequency.\" Thus, both frequency and interactive engagement determine optimal literacy outcomes.\n\n• Choice A is incorrect because the text explicitly states interaction quality matters as much as frequency, so daily frequency alone is not paramount.\n• Choice C is incorrect because passive listeners still develop skills; they simply show less significant gains than active participants (\"significantly greater gains\" for interactive).\n• Choice D is incorrect because the passage does not rank listening comprehension above all other literacy competencies."
  },
  {
    "id": 16,
    "text": "The following passage is adapted from a historical analysis of the Great Depression.\n\nThe Great Depression of the 1930s is often characterized as a purely economic catastrophe, yet its social and psychological dimensions were equally profound. Unemployment rates exceeding twenty-five percent did not merely create financial hardship — they dismantled the identity of a generation raised to equate work with dignity and self-worth. Men who had defined themselves through their ability to provide became, in their own eyes, failures. Letters written to President Roosevelt during this period reveal less anger than one might expect and more bewilderment — a nation unable to reconcile its self-image with its circumstances.\n\nThe reference to letters written to Roosevelt is used to support the claim that:",
    "options": [
      "President Roosevelt was the most popular American president during the twentieth century.",
      "The emotional impact of the Depression was characterized more by confusion than by rage.",
      "Financial hardship during the Depression was less severe than historical records suggest.",
      "Americans blamed their government for the economic conditions of the 1930s."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The author mentions the letters specifically to demonstrate the psychological state of citizens: they revealed \"less anger than one might expect and more bewilderment — a nation unable to reconcile its self-image with its circumstances.\" This directly supports the idea that confusion/bewilderment outweighed outward rage.\n\n• Choice A is incorrect because the passage does not discuss Roosevelt's general historical popularity ratings.\n• Choice C is incorrect because the passage affirms that the economic hardship was catastrophic (over 25% unemployment).\n• Choice D is incorrect because the text points to self-perceived failure and bewilderment rather than direct political blame."
  },
  {
    "id": 17,
    "text": "The following passage is adapted from \"Rewilding Europe\" by conservation journalist Helena Brandt (2022).\n\nRewilding — the large-scale restoration of ecosystems to a more natural, self-regulating state — has gained significant momentum across Europe. Proponents argue that reintroducing apex predators such as wolves and lynx to areas from which they were historically eliminated creates cascading benefits: overpopulated deer herds thin, riverbanks stabilize as vegetation recovers, and biodiversity increases. Critics, however, argue that rewilding projects impose ecological ideologies onto landscapes that have been shaped by centuries of human land use and represent a form of romantic primitivism that ignores economic realities for local communities.\n\nBased on the passage, critics of rewilding would most likely agree with which of the following?",
    "options": [
      "Apex predators play no meaningful role in regulating ecosystem health.",
      "Rewilding projects should be led by local communities rather than conservation organizations.",
      "The landscapes rewilding seeks to restore never existed in the form its proponents imagine.",
      "Human land use and its economic dimensions deserve significant consideration in conservation planning."
    ],
    "answer": 3,
    "topic": "Reading Comprehension",
    "explanation": "Choice D is correct. The text notes that critics accuse rewilding of imposing ideologies onto \"landscapes that have been shaped by centuries of human land use\" and practicing a primitivism that \"ignores economic realities for local communities.\" Therefore, critics hold that human history and local economic realities must be integral to conservation plans.\n\n• Choice A is incorrect because critics object to human and economic displacement, not necessarily the ecological theory of predator trophic cascades.\n• Choice B is incorrect because critics question the concept itself, not merely who manages the projects.\n• Choice C is incorrect because the passage does not state that critics deny the historical existence of wild habitats, but rather emphasize subsequent centuries of human shaping."
  },
  {
    "id": 18,
    "text": "The following passage is adapted from a 2021 essay on memory and identity.\n\nPsychologists have long recognized that human memory is reconstructive rather than reproductive. We do not play back events like a recording; instead, we reassemble them each time from fragments, filling in gaps with inference, expectation, and subsequent knowledge. This means that highly confident memories can be deeply inaccurate, and that the act of remembering actually changes the memory itself. Identity built on autobiographical memory is, therefore, more like an ongoing story we tell about ourselves than an objective historical record.\n\nThe author's comparison of memory to \"an ongoing story\" implies that:",
    "options": [
      "Memory is inherently fictional and cannot be trusted for any practical purpose.",
      "Personal identity is shaped by a dynamic, evolving narrative rather than fixed past facts.",
      "People are conscious of revising their memories as they recount them.",
      "Scientists have proven that all autobiographical memories are fundamentally inaccurate."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. Describing memory-based identity as an \"ongoing story we tell about ourselves\" rather than an \"objective historical record\" suggests that self-concept is fluid, continually reassembled, and revised through the reconstructive process of memory over time.\n\n• Choice A is incorrect because the passage does not dismiss all memory as entirely useless fiction.\n• Choice C is incorrect because the text notes that reconstructive filling-in occurs largely without deliberate conscious fabrication (people remain \"highly confident\").\n• Choice D is incorrect because stating memories can be inaccurate is not equivalent to claiming every single autobiographical memory is 100% false."
  },
  {
    "id": 19,
    "text": "The following passage is adapted from a 2023 profile of architect Diébédo Francis Kéré.\n\nKéré, the first African architect to win the Pritzker Prize, grew up in Gando, Burkina Faso, a village without electricity or running water. He won a scholarship to study architecture in Berlin but always intended to return. His primary school in Gando, completed in 2001, became his manifesto: designed with local materials, built by community members, and shaped by the specific demands of the Sahelian climate. The building's raised roof creates air circulation that reduces interior temperature dramatically. \"Architecture,\" he has said, \"should serve the people who live in it, not the people who photograph it.\"\n\nKéré's quote at the end of the passage most directly challenges:",
    "options": [
      "The assumption that architectural awards recognize only Western designers.",
      "A tendency in the field to prioritize visual impressiveness over practical community benefit.",
      "The belief that local materials are inferior to imported building supplies.",
      "The idea that architecture in developing nations requires outside funding."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. Kéré contrasts serving \"the people who live in it\" (inhabitants receiving functional, climatic comfort) with serving \"the people who photograph it\" (critics or outsiders focused solely on aesthetic or superficial spectacle). This directly challenges prioritizing visual display over human utility.\n\n• Choice A is incorrect because although Kéré won the Pritzker, his quote speaks to architectural philosophy and purpose rather than award demographics.\n• Choice C is incorrect because while he uses local materials, the specific quote targets the obsession with photo-oriented aesthetics over living occupants.\n• Choice D is incorrect because the quote does not address financing or international funding."
  },
  {
    "id": 20,
    "text": "The following two passages present different views on artificial intelligence in the arts.\n\nPassage 1: AI-generated art represents a fundamental threat to human creative expression. When algorithms can produce technically accomplished images, music, or prose in seconds, the economic and cultural value of human artistic labor is undermined. Art is not merely a product but a process — one rooted in struggle, experience, and intention. An AI has no intention; it has only pattern recognition applied to vast datasets of human creative output.\n\nPassage 2: Tools have always shaped art. Photography did not kill painting; it liberated it from documentation and pushed it toward abstraction. The printing press did not kill literature; it democratized it. AI offers artists new instruments — and as with all instruments, what matters is what human hands make of them. The question is not whether AI makes art but whether humans will use AI thoughtfully.\n\nThe authors of Passage 1 and Passage 2 would most likely disagree about:",
    "options": [
      "Whether AI systems have access to human creative works as training data.",
      "Whether the introduction of new technology has historically helped or harmed artistic practice.",
      "Whether art created by humans has more cultural value than art created by machines.",
      "Whether the printing press was a significant development in the history of human communication."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. Passage 1 views technological automation via AI as an existential threat that degrades artistic labor and removes human intention. Conversely, Passage 2 cites historical technological disruptions (photography, printing press) as positive liberators and democratizers of art, arguing technological tools enrich rather than destroy creative tradition.\n\n• Choice A is incorrect because both passages acknowledge AI operates using human datasets/tools.\n• Choice C is incorrect because Passage 2 does not argue machines have superior cultural value, but that human artists will use AI as an instrument.\n• Choice D is incorrect because neither author contests the major historical impact of the printing press."
  },
  {
    "id": 21,
    "text": "The following passage continues from Passage 1 and Passage 2 in the previous question about AI and art.\n\nPassage 1 (continued): Furthermore, AI art raises serious questions about consent. The systems trained on billions of images, songs, and texts did so without explicit permission from the artists whose work formed the training data. To use a human analogy: if a student learned to write by reading every published novel without ever crediting or compensating the authors, we would recognize that as ethically problematic.\n\nPassage 2 (continued): The consent argument, while emotionally compelling, conflates inspiration with reproduction. Every artist is influenced by works they have encountered — sometimes without conscious awareness. The law already distinguishes between inspiration (permissible) and copying (not permissible). The question of AI training data is ultimately a legal and regulatory question, not an ethical one that undermines AI art wholesale.\n\nThe author of Passage 2 responds to the consent argument in Passage 1 primarily by:",
    "options": [
      "Arguing that artists whose work was used in training data have already been adequately compensated.",
      "Reframing the consent issue as a legal matter rather than an ethical one that invalidates all AI art.",
      "Providing statistical evidence that AI training processes differ meaningfully from human learning.",
      "Agreeing that consent is important but arguing that it has been obtained in most cases."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. Passage 2 directly addresses the consent debate by stating that training resembles human inspiration and concluding: \"The question of AI training data is ultimately a legal and regulatory question, not an ethical one that undermines AI art wholesale.\" This reframes the issue into existing legal distinctions of copying vs. inspiration.\n\n• Choice A is incorrect because Passage 2 does not claim artists have already received financial compensation.\n• Choice C is incorrect because Passage 2 offers an analytical comparison rather than empirical statistical data.\n• Choice D is incorrect because Passage 2 does not claim that permission was actually obtained from artists."
  },
  {
    "id": 22,
    "text": "The following passage is adapted from a scientific article on deep-sea exploration.\n\nThe deep ocean — defined as waters below two hundred meters — remains, in many ways, more mysterious than the surface of Mars. Less than twenty percent of the ocean floor has been mapped in detail, and new species are discovered on virtually every deep-sea expedition. The challenges are considerable: pressures hundreds of times greater than at the surface, complete darkness, and temperatures near freezing make unmanned exploration difficult and manned exploration extremely dangerous. Yet the deep sea may hold answers to fundamental biological questions, including how life first emerged on Earth and whether it might persist in similarly extreme environments elsewhere in the solar system.\n\nThe author mentions Mars primarily to:",
    "options": [
      "Argue that space exploration receives disproportionate funding compared to ocean research.",
      "Emphasize just how little is known about Earth's own deep ocean by comparison to an already-distant world.",
      "Suggest that life discovered on Mars would resemble deep-sea organisms on Earth.",
      "Provide context for why deep-sea exploration technology was originally developed for space missions."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. By stating that the deep ocean \"remains, in many ways, more mysterious than the surface of Mars,\" the author creates a vivid comparison: despite Mars being tens of millions of miles away, we know less about the floor of our own planet's oceans, highlighting our profound terrestrial ignorance.\n\n• Choice A is incorrect because funding disparities between NASA/space agencies and oceanography are never mentioned.\n• Choice C is incorrect because the text suggests deep-sea extremophiles might inform searches elsewhere in the solar system, but Mars is mentioned specifically to contrast mapping/knowledge levels.\n• Choice D is incorrect because there is no mention of deep-sea tools being spun off from space programs."
  },
  {
    "id": 23,
    "text": "The following passage is adapted from \"The Psychology of Multitasking\" by cognitive scientist Dr. Priya Nair (2022).\n\nThe term \"multitasking\" suggests simultaneous task management, but neuroscience tells a different story. The human brain cannot truly perform two cognitively demanding tasks at the same time; what appears to be multitasking is actually rapid task-switching — the brain moving back and forth between activities in quick succession. Each switch carries a cognitive cost: a brief period of disorientation as the brain reorients. Frequent task-switching has been linked to increased error rates, slower completion times, and — counterintuitively — lower overall productivity compared to focused, sequential work.\n\nThe word \"counterintuitively\" in the final sentence suggests that:",
    "options": [
      "The findings about task-switching are surprising because people typically assume multitasking improves efficiency.",
      "Scientists had previously believed that task-switching had no effect on productivity.",
      "The study's methodology produced unexpected complications that affected its conclusions.",
      "Most people are already aware that multitasking reduces productivity but continue the behavior anyway."
    ],
    "answer": 0,
    "topic": "Reading Comprehension",
    "explanation": "Choice A is correct. \"Counterintuitively\" means contrary to what common sense or intuition would expect. Because people engage in multitasking with the expectation of getting more done faster, discovering that it actually reduces overall productivity contradicts common intuition.\n\n• Choice B is incorrect because the word refers to general human perception and expectation, not a surprise exclusive to researchers.\n• Choice C is incorrect because \"counterintuitively\" describes the nature of the finding itself, not flaws or complications in scientific methodology.\n• Choice D is incorrect because if people were already widely aware that it lowers productivity, the outcome would not be labeled counterintuitive."
  },
  {
    "id": 24,
    "text": "The following passage is adapted from a memoir by a first-generation college student.\n\nThe library was the first room I had ever entered where no one expected anything of me. At home, there were chores; at school, there were grades. In the library, I could sit for hours and no one would ask where I had been or where I was going. The books did not demand credentials. They simply waited, patient and indifferent, until I picked them up — and then they became anything but indifferent.\n\nThe narrator's description of books as first \"indifferent\" and then not indifferent conveys:",
    "options": [
      "Her initial disappointment with books that failed to engage her imagination.",
      "The transformation she experienced as passive access to books became active, absorbing engagement.",
      "Her recognition that books in a library cannot replace books purchased and owned personally.",
      "The librarian's changing attitude toward her as she became a regular visitor."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. While resting on the shelves, the books are inert and \"indifferent\" (asking for no credentials and demanding nothing). However, once opened (\"until I picked them up\"), they come alive and create an active, deeply personal, and absorbing world for the reader.\n\n• Choice A is incorrect because \"indifferent\" refers to the books' impartial accessibility, not personal disappointment or boredom.\n• Choice C is incorrect because the memoir celebrates public library access without suggesting private ownership is superior.\n• Choice D is incorrect because the passage describes the books themselves, not the staff or librarians."
  },
  {
    "id": 25,
    "text": "The following passage is adapted from a 2023 analysis of urban food deserts.\n\nFood deserts — urban and rural areas with limited access to affordable fresh food — are often framed as problems of geography: people live too far from grocery stores. But research increasingly suggests this framing is incomplete. Even when grocery stores are located within technically accessible distances, barriers such as irregular work schedules, lack of transportation, food preparation time, and cost make fresh produce practically inaccessible for many low-income residents. Addressing food deserts, therefore, requires solutions that go beyond simply placing stores in underserved areas.\n\nThe passage suggests that current approaches to solving food deserts are insufficient because they:",
    "options": [
      "Focus only on increasing the number of grocery stores without considering the quality of food offered.",
      "Address geographic access without accounting for practical, economic, and time-based barriers.",
      "Rely on government funding that is inconsistently distributed across urban and rural areas.",
      "Treat food deserts as a recent problem when in fact they have existed for many decades."
    ],
    "answer": 1,
    "topic": "Reading Comprehension",
    "explanation": "Choice B is correct. The author notes that simply placing grocery stores geographically closer fails to solve the crisis because non-geographic obstacles—such as irregular work hours, transport availability, cooking time, and grocery prices—still prevent access to healthy food.\n\n• Choice A is incorrect because the issue is not the quality of the groceries inside the stores, but the practical and financial barriers preventing people from buying and cooking them.\n• Choice C is incorrect because government funding distribution formulas are not discussed in the passage.\n• Choice D is incorrect because the passage does not focus on historical duration or temporal origin."
  }
];

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP = {
  'Reading Comprehension': {
    name: 'Reading Comprehension',
    questions: QUESTIONS.map(q => q.id)
  }
};
