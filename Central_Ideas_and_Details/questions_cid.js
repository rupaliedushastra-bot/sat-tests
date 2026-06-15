// =============================================
// Digital SAT – Topic Test: Central Ideas and Details
// 34 Questions | Single Timed Module (45 min)
// answers: 0=A, 1=B, 2=C, 3=D, 4=E (where applicable)
// Set 3: Passage repeats before each group of 3 questions
// =============================================

const QUESTIONS = [

  // ── SET 1: Official SAT Questions (7 Qs) ──────────────────────────
  {
    id: 1,
    text: `Many intellectual histories of the Black Power movement of the 1960s and 1970s rely heavily on essays and other explicitly ideological works as primary sources, a tendency that can overrepresent the perspectives of a small number of thinkers, most of whom were male. Historian Ashley D. Farmer has shown that expanding the array of primary sources to encompass more types of print material—including political cartoons, advertisements, and artwork—leads to a much better understanding of the movement and the crucial and diverse roles that Black women played in shaping it.\n\nWhich choice best describes the main idea of the text?`,
    options: [
      "Before Farmer's research, historians had largely ignored the intellectual dimensions of the Black Power movement.",
      "Farmer's methods and research have enriched the historical understanding of the Black Power movement and Black women's contributions to it.",
      "Other historians of the Black Power movement have criticized Farmer's use of unconventional primary sources.",
      "The figures in the Black Power movement whom historians tend to cite would have agreed with Farmer's conclusions about women's roles in the movement."
    ],
    answer: 1,
    explanation: 'The text states that traditional sources "overrepresent the perspectives of a small number of thinkers, most of whom were male," and that Farmer\'s expanded approach "leads to a much better understanding of the movement and the crucial and diverse roles that Black women played in shaping it." This directly supports B. A overstates the claim — the issue is overrepresentation, not total neglect; C and D introduce reactions and hypothetical agreements never mentioned in the text.',
    topic: 'Set 1 – Central Idea'
  },
  {
    id: 2,
    text: `The following text is adapted from Robert Louis Stevenson's 1883 novel Treasure Island. Bill is a sailor staying at the Admiral Benbow, an inn run by the narrator's parents.\n\nEvery day when [Bill] came back from his stroll he would ask if any seafaring men had gone by along the road. At first we thought it was the want of company of his own kind that made him ask this question, but at last we began to see he was desirous to avoid them. When a seaman did [stay] at the Admiral Benbow (as now and then some did) he would look in at him through the curtained door before he entered the parlour; and he was always sure to be as silent as a mouse when any such was present.\n\nAccording to the text, why does Bill regularly ask about "seafaring men"?`,
    options: [
      "He isn't sure that other guests at the inn will be welcoming of sailors.",
      "He's trying to secure a job as part of the crew on a new ship.",
      "He's hoping to find an old friend and fellow sailor.",
      "He doesn't want to encounter any other sailor unexpectedly."
    ],
    answer: 3,
    explanation: 'The text explicitly states that "we began to see he was desirous to avoid them," and describes how Bill peers cautiously through the curtained door and stays silent when other sailors are present — behavior consistent with not wanting to run into another sailor unexpectedly. A, B, and C introduce explanations that contradict the described avoidance behavior.',
    topic: 'Set 1 – Detail'
  },
  {
    id: 3,
    text: `In a paper about p-i-n planar perovskite solar cells (one of several perovskite cell architectures designed to collect and store solar power), Lyndsey McMillon-Brown et al. describe a method for fabricating the cell's electronic transport layer (ETL) using a spray coating. Conventional ETL fabrication is accomplished using a solution of nanoparticles. The process can result in a loss of up to 80% of the solution, increasing the cost of manufacturing at scale—an issue that may be obviated by spray coating fabrication, which the researchers describe as "highly reproducible, concise, and practical."\n\nWhat does the text most strongly suggest about conventional ETL fabrication?`,
    options: [
      "It typically entails a greater loss of nanoparticle solution than do other established approaches for ETL fabrication.",
      "It is less suitable for manufacturing large volumes of planar p-i-n perovskite solar cells than an alternative fabrication method may be.",
      "It is somewhat imprecise and therefore limits the potential effectiveness of p-i-n planar perovskite solar cells at capturing and storing solar power.",
      "It is more expensive when manufacturing at scale than are processes for fabricating ETLs used in other perovskite solar cell architectures."
    ],
    answer: 1,
    explanation: 'The text describes conventional fabrication as resulting in a loss of "up to 80% of the solution, increasing the cost of manufacturing at scale," and notes spray coating "may obviate" this issue. Together, this suggests conventional fabrication is less suitable for large-scale manufacturing than the spray coating alternative. A is incorrect because no "other established approaches" are compared; C introduces a claim about effectiveness at capturing solar power that the text doesn\'t make; D compares costs across architectures, which the text doesn\'t address.',
    topic: 'Set 1 – Inference'
  },
  {
    id: 4,
    text: `In many of his sculptures, artist Richard Hunt uses broad forms rather than extreme accuracy to hint at specific people or ideas. In his first major work, Arachne (1956), Hunt constructed the mythical character Arachne, a weaver who was changed into a spider, by welding bits of steel together into something that, although vaguely human, is strange and machine-like. And his large bronze sculpture The Light of Truth (2021) commemorates activist and journalist Ida B. Wells using mainly flowing, curved pieces of metal that create stylized flame.\n\nWhich choice best states the text's main idea about Hunt?`,
    options: [
      "He often depicts the subjects of his sculptures using an unrealistic style.",
      "He uses different kinds of materials depending on what kind of sculpture he plans to create.",
      "He tends to base his art on important historical figures rather than on fictional characters.",
      "He has altered his approach to sculpture over time, and his works have become increasingly abstract."
    ],
    answer: 0,
    explanation: 'The text opens by stating Hunt "uses broad forms rather than extreme accuracy to hint at specific people or ideas," then gives two examples: a "vaguely human" steel sculpture of a mythical figure, and a bronze sculpture using "stylized flame." Both examples illustrate an unrealistic, suggestive style. B is not supported, since both examples use metal; C is contradicted, since one example (Arachne) is based on a mythical, not historical, figure; D suggests a change over time that the text doesn\'t establish.',
    topic: 'Set 1 – Central Idea'
  },
  {
    id: 5,
    text: `The following text is from Edith Nesbit's 1902 novel Five Children and It. Five young siblings have just moved with their parents from London to a house in the countryside that they call the White House.\n\nIt was not really a pretty house at all; it was quite ordinary, and mother thought it was rather inconvenient, and was quite annoyed at there being no shelves, to speak of, and hardly a cupboard in the place. Father used to say that the ironwork on the roof and coping was like an architect's nightmare. But the house was deep in the country, with no other house in sight, and the children had been in London for two years, without so much as once going to the seaside even for a day by an excursion train, and so the White House seemed to them a sort of Fairy Palace set down in an Earthly Paradise.\n\nWhich choice best states the main idea of the text?`,
    options: [
      "The house is beautiful and well built, but the children miss their old home in London.",
      "The children don't like the house nearly as much as their parents do.",
      "Each member of the family admires a different characteristic of the house.",
      "Although their parents believe the house has several drawbacks, the children are enchanted by it."
    ],
    answer: 3,
    explanation: 'The text contrasts the parents\' practical complaints (no shelves, "hardly a cupboard," ironwork like "an architect\'s nightmare") with the children\'s perception of the house as "a sort of Fairy Palace set down in an Earthly Paradise." This contrast directly supports D. A is contradicted, since the house is described as "not really a pretty house at all"; B reverses the relationship — it\'s the parents who dislike the house; C mischaracterizes the text as showing varied individual admiration.',
    topic: 'Set 1 – Central Idea'
  },
  {
    id: 6,
    text: `The following text is adapted from María Cristina Mena's 1914 short story "The Vine-Leaf."\n\nIt is a saying in the capital of Mexico that Dr. Malsufrido carries more family secrets under his hat than any archbishop. The doctor's hat is, appropriately enough, uncommonly capacious, rising very high, and sinking so low that it seems to be supported by his ears and eyebrows, and it has a furry look, as if it had been brushed the wrong way, which is perhaps what happens to it if it is ever brushed at all. When the doctor takes it off, the family secrets do not fly out like a flock of parrots, but remain nicely bottled up beneath a dome of old and highly polished ivory.\n\nBased on the text, how do people in the capital of Mexico most likely regard Dr. Malsufrido?`,
    options: [
      "Few feel concerned that he will divulge their confidences.",
      "Many have come to tolerate him despite his disheveled appearance.",
      "Most would be unimpressed by him were it not for his professional expertise.",
      "Some dislike how freely he discusses his own family."
    ],
    answer: 0,
    explanation: 'The text describes Dr. Malsufrido as someone who "carries more family secrets under his hat than any archbishop" and notes that when he removes his hat, "the family secrets do not fly out... but remain nicely bottled up" — meaning he is trustworthy with confidential information. This suggests people don\'t worry about him revealing their secrets, supporting A. B and C focus on his appearance; D misreads "family secrets" as Malsufrido\'s own family.',
    topic: 'Set 1 – Inference'
  },
  {
    id: 7,
    text: `To protect themselves when being attacked, hagfish—jawless marine animals that resemble eels—will release large quantities of slimy, mucus-like threads. Because these threads are unusually strong and elastic, scientist Atsuko Negishi and her colleagues have been trying to recreate them in a lab as an eco-friendly alternative to petroleum-based fibers that are often used in fabrics. The researchers want to reproduce the threads in the lab because farming hagfish for their slime would be expensive and potentially harmful to the hagfish.\n\nWhich choice best states the text's main idea?`,
    options: [
      "Hagfish are not well suited to being raised in captivity.",
      "The ability of hagfish to slime their attackers compensates for their being jawless.",
      "Hagfish have inspired researchers to develop a new petroleum-based fabric.",
      "The slimy threads that hagfish release might help researchers create a new kind of fabric."
    ],
    answer: 3,
    explanation: 'The text describes hagfish slime threads as "unusually strong and elastic" and explains that researchers are trying to recreate them "as an eco-friendly alternative to petroleum-based fibers that are often used in fabrics" — this is the central idea, captured by D. A focuses on a side detail; B introduces a claim about jawlessness as "compensation," which the text doesn\'t state; C contradicts the text, since the goal is an "alternative to petroleum-based fibers," not a new petroleum-based fabric.',
    topic: 'Set 1 – Central Idea'
  },

  // ── SET 2: Official SAT Questions (7 Qs) ──────────────────────────
  {
    id: 8,
    text: `Artist Justin Favela explained that he wanted to reclaim the importance of the piñata as a symbol in Latinx culture. To do so, he created numerous sculptures from strips of tissue paper, which is similar to the material used to create piñatas. In 2017, Favela created an impressive life-size piñata-like sculpture of the Gypsy Rose lowrider car, which was displayed at the Petersen Automotive Museum in Los Angeles, California. The Gypsy Rose lowrider was famously driven by Jesse Valadez, an early president of the Los Angeles Imperials Car Club.\n\nAccording to the text, which piece of Favela's art was on display in the Petersen Automotive Museum in 2017?`,
    options: [
      "A painting of Los Angeles",
      "A painting of a piñata",
      "A sculpture of Jesse Valadez",
      "A sculpture of a lowrider car"
    ],
    answer: 3,
    explanation: 'The text states directly that in 2017 "Favela created an impressive life-size piñata-like sculpture of the Gypsy Rose lowrider car, which was displayed at the Petersen Automotive Museum in Los Angeles, California" — matching D exactly. A and B incorrectly describe the work as a painting; C confuses the subject of the sculpture (the car, not Valadez).',
    topic: 'Set 2 – Detail'
  },
  {
    id: 9,
    text: `In a study of new technology adoption, Davit Marikyan et al. examined negative disconfirmation (which occurs when experiences fall short of one's expectations) to determine whether it could lead to positive outcomes for users. The team focused on established users of "smart home" technology, which presents inherent utilization challenges but tends to attract users with high expectations, often leading to feelings of dissonance. The researchers found that many users employed cognitive mechanisms to mitigate those feelings, ultimately reversing their initial sense of disappointment.\n\nWhich choice best states the main idea of the text?`,
    options: [
      "Research suggests that users with high expectations for a new technology can feel content with that technology even after experiencing negative disconfirmation.",
      "Research suggests that most users of smart home technology will not achieve a feeling of satisfaction given the utilization challenges of such technology.",
      "Although most smart home technology is aimed at meeting or exceeding users' high expectations, those expectations in general remain poorly understood.",
      "Although negative disconfirmation has often been studied, little is known about the cognitive mechanisms shaping users' reactions to it in the context of new technology adoption."
    ],
    answer: 0,
    explanation: 'The text describes users with "high expectations" experiencing "negative disconfirmation" (dissonance), but states that "many users employed cognitive mechanisms to mitigate those feelings, ultimately reversing their initial sense of disappointment" — meaning they ended up content despite the initial letdown. This matches A directly. B contradicts the finding; C and D introduce claims that contradict the text\'s description of the researchers\' actual findings.',
    topic: 'Set 2 – Central Idea'
  },
  {
    id: 10,
    text: `The ice melted on a Norwegian mountain during a particularly warm summer in 2019, revealing a 1,700-year-old sandal to a mountaineer looking for artifacts. The sandal would normally have degraded quickly, but it was instead well preserved for centuries by the surrounding ice. According to archaeologist Espen Finstad and his team, the sandal, like those worn by imperial Romans, wouldn't have offered any protection from the cold in the mountains, so some kind of insulation, like fabric or animal skin, would have needed to be worn on the feet with the sandal.\n\nWhat does the text indicate about the discovery of the sandal?`,
    options: [
      "The discovery revealed that the Roman Empire had more influence on Norway than archaeologists previously assumed.",
      "The sandal would have degraded if it hadn't been removed from the ice.",
      "Temperatures contributed to both protecting and revealing the sandal.",
      "Archaeologists would have found the sandal eventually without help from the general public."
    ],
    answer: 2,
    explanation: 'The text states the sandal "would normally have degraded quickly, but it was instead well preserved for centuries by the surrounding ice" (cold temperatures protected it), and that "the ice melted... during a particularly warm summer in 2019, revealing" the sandal (warm temperatures revealed it). Together, this shows temperatures playing both a protective and a revealing role, supporting C. A introduces a claim about Roman influence that the text doesn\'t make; B reverses the actual situation; D speculates about a hypothetical scenario the text doesn\'t address.',
    topic: 'Set 2 – Inference'
  },
  {
    id: 11,
    text: `NASA's Cassini probe has detected an unusual wobble in the rotation of Mimas, Saturn's smallest moon. Using a computer model to study Mimas's gravitational interactions with Saturn and tidal forces, geophysicist Alyssa Rhoden and colleagues have proposed that this wobble could be due to a liquid ocean moving beneath the moon's icy surface. The researchers believe other moons should be examined to see if they too might have oceans hidden beneath their surfaces.\n\nWhich choice best states the main idea of the text?`,
    options: [
      "Rhoden and colleagues were the first to confirm that several of Saturn's moons contain hidden oceans.",
      "Research has failed to identify signs that there is an ocean hidden beneath the surface of Mimas.",
      "Rhoden and colleagues created a new computer model that identifies moons with hidden oceans without needing to analyze the moons' rotation.",
      "Research has revealed that an oddity in the rotation of Mimas could be explained by an ocean hidden beneath its surface."
    ],
    answer: 3,
    explanation: 'The text describes an "unusual wobble" in Mimas\'s rotation and explains that researchers "have proposed that this wobble could be due to a liquid ocean moving beneath the moon\'s icy surface" — directly matching D. A overstates the finding as confirmed and across "several" moons; B contradicts the text; C mischaracterizes the computer model\'s purpose.',
    topic: 'Set 2 – Central Idea'
  },
  {
    id: 12,
    text: `Disco remains one of the most ridiculed popular music genres of the late twentieth century. But as scholars have argued, the genre is far less superficial than many people believe. Take the case of disco icon Donna Summer: she may have been associated with popular songs about love and heartbreak (subjects hardly unique to disco, by the way), but like many Black women singers before her, much of her music also reflects concerns about community and identity. These concerns are present in many of the genre's greatest songs, and they generally don't require much digging to reveal.\n\nWhat does the text most strongly suggest about the disco genre?`,
    options: [
      "It gave rise to a Black women's musical tradition that has endured even though the genre itself faded in the late twentieth century.",
      "It has been unjustly ignored by most scholars despite the importance of the themes addressed by many of the genre's songs.",
      "It has been unfairly dismissed for the inclusion of subject matter that is also found in other musical genres.",
      "It evolved over time from a superficial genre focused on romance to a genre focused on more serious concerns."
    ],
    answer: 2,
    explanation: 'The text notes disco is "ridiculed" and considered "superficial" largely because of its association with "popular songs about love and heartbreak (subjects hardly unique to disco, by the way)" — implying the genre is unfairly judged for content shared with other genres, while it also contains deeper themes. This supports C. A introduces a claim about the genre "fading" that the text doesn\'t establish; B contradicts the text, which says scholars HAVE argued the genre is "far less superficial"; D mischaracterizes the relationship as evolution over time.',
    topic: 'Set 2 – Inference'
  },
  {
    id: 13,
    text: `The following text is adapted from Edgar Allan Poe's 1849 story "Landor's Cottage."\n\nDuring a pedestrian trip last summer, through one or two of the river counties of New York, I found myself, as the day declined, somewhat embarrassed about the road I was pursuing. The land undulated very remarkably; and my path, for the last hour, had wound about and about so confusedly, in its effort to keep in the valleys, that I no longer knew in what direction lay the sweet village of B——, where I had determined to stop for the night.\n\nWhich choice best states the main idea of the text?`,
    options: [
      "The narrator explains the difficulties he encountered on a trip and how he overcame them.",
      "The narrator describes what he saw during a long trip through a frequently visited location.",
      "The narrator recalls fond memories of a journey that he took through some beautiful river counties.",
      "The narrator remembers a trip he took and admits to getting lost."
    ],
    answer: 3,
    explanation: 'The narrator describes feeling "somewhat embarrassed about the road I was pursuing" and states that the winding path meant "I no longer knew in what direction lay the sweet village of B——" — a clear admission of being lost. This matches D. A is incorrect because the text doesn\'t describe how the narrator overcame the difficulty; B mischaracterizes the location as "frequently visited"; C focuses on "fond memories" when the passage\'s focus is on confusion and disorientation.',
    topic: 'Set 2 – Central Idea'
  },
  {
    id: 14,
    text: `In 2022, researchers rediscovered ancient indigenous glyphs, or drawings, on the walls of a cave in Alabama. The cave's ceiling was only a few feet high, affording no position from which the glyphs, being as wide as ten feet, could be viewed or photographed in their entirety. However, the researchers used a technique called photogrammetry to assemble numerous photos of the walls into a 3D model. They then worked with representatives of tribes originally from the region, including the Chickasaw Nation, to understand the significance of the animal and humanoid figures adorning the cave.\n\nAccording to the text, what challenge did the researchers have to overcome to examine the glyphs?`,
    options: [
      "The cave was so remote that the researchers couldn't easily reach it.",
      "Some of the glyphs were so faint that they couldn't be photographed.",
      "The cave's dimensions prevented the researchers from fully viewing the glyphs.",
      "The researchers were unable to create a 3D model of the cave."
    ],
    answer: 2,
    explanation: 'The text states the cave\'s "ceiling was only a few feet high, affording no position from which the glyphs, being as wide as ten feet, could be viewed or photographed in their entirety" — directly describing how the cave\'s dimensions prevented full viewing, matching C. A introduces remoteness as the issue, which isn\'t mentioned; B incorrectly attributes the problem to faintness; D contradicts the text, which states the researchers successfully created a 3D model.',
    topic: 'Set 2 – Detail'
  },

  // ── SET 3: GRE-Style Passage-Based Questions ──────────────────────
  // ── PASSAGE A: Carbon Sequestration (Fossil Fuels) ────────────────
  // Q15
  {
    id: 15,
    passageLabel: 'Passage A – Carbon Sequestration',
    passage: `Policymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy even though burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change. Currently, technology that would capture carbon dioxide emitted by power plants and sequester it harmlessly underground or undersea instead of releasing it into the atmosphere might double the cost of generating electricity. But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent. Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.`,
    text: `Passage A – Carbon Sequestration\n\nPolicymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy even though burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change. Currently, technology that would capture carbon dioxide emitted by power plants and sequester it harmlessly underground or undersea instead of releasing it into the atmosphere might double the cost of generating electricity. But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent. Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.\n\nQ15: The passage implies which of the following about the current cost of generating electricity?`,
    options: [
      "It is higher than it would be if better technologies for capturing carbon dioxide were available.",
      "It is somewhat less than the cost of electricity transmission and distribution.",
      "It constitutes at most half of the delivered price of electricity.",
      "It is dwelt on by policymakers to the exclusion of other costs associated with electricity delivery.",
      "It is not fully recovered by the prices charged directly to electricity consumers."
    ],
    answer: 2,
    explanation: 'The passage states that capturing and sequestering carbon dioxide "might double the cost of generating electricity," but because sequestration "does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent." If doubling the generation cost only raises the total delivered price by at most 50%, then generation cost must currently make up at most half of the delivered price — otherwise doubling it would raise the total by more than 50%. This supports C.',
    topic: 'Set 3 – Passage A: Carbon Sequestration'
  },
  // Q16
  {
    id: 16,
    passageLabel: 'Passage A – Carbon Sequestration',
    passage: `Policymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy even though burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change. Currently, technology that would capture carbon dioxide emitted by power plants and sequester it harmlessly underground or undersea instead of releasing it into the atmosphere might double the cost of generating electricity. But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent. Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.`,
    text: `Passage A – Carbon Sequestration\n\nPolicymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy even though burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change. Currently, technology that would capture carbon dioxide emitted by power plants and sequester it harmlessly underground or undersea instead of releasing it into the atmosphere might double the cost of generating electricity. But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent. Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.\n\nQ16: The passage suggests that extensive use of sequestration would, over time, have which of the following consequences?`,
    options: [
      "The burning of fossil fuels would eventually cease to produce atmospheric accumulations of carbon dioxide.",
      "The proportion of the delivered price of electricity due to generation would rise and then decline.",
      "Power plants would consume progressively lower quantities of fossil fuels.",
      "The overall cost of electricity delivery would eventually return to its current level.",
      "Policymakers would no longer need to address the environmental risks of burning fossil fuels."
    ],
    answer: 1,
    explanation: 'The passage states that sequestration would "double the cost of generating electricity," raising the generation\'s share of the total delivered price. But it also states that "research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs," meaning the generation proportion would first rise (as sequestration is adopted) and then decline (as technology improves). This supports B. The other options introduce consequences — ceasing carbon production, reducing fuel consumption, or eliminating policymaker concerns — that the passage does not support.',
    topic: 'Set 3 – Passage A: Carbon Sequestration'
  },
  // Q17
  {
    id: 17,
    passageLabel: 'Passage A – Carbon Sequestration',
    passage: `Policymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy even though burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change. Currently, technology that would capture carbon dioxide emitted by power plants and sequester it harmlessly underground or undersea instead of releasing it into the atmosphere might double the cost of generating electricity. But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent. Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.`,
    text: `Passage A – Carbon Sequestration\n\nPolicymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy even though burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change. Currently, technology that would capture carbon dioxide emitted by power plants and sequester it harmlessly underground or undersea instead of releasing it into the atmosphere might double the cost of generating electricity. But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent. Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.\n\nQ17: Which sentence in the passage explains why an expected cost increase from sequestration would not be as large as one might anticipate?`,
    options: [
      "\"Policymakers must confront the dilemma that fossil fuels continue to be an indispensable source of energy...\"",
      "\"Currently, technology that would capture carbon dioxide emitted by power plants... might double the cost of generating electricity.\"",
      "\"But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent.\"",
      "\"Research into better technologies for capturing carbon dioxide will undoubtedly lead to lowered costs.\"",
      "\"...burning them produces atmospheric accumulations of carbon dioxide that increase the likelihood of potentially disastrous global climate change.\""
    ],
    answer: 2,
    explanation: 'The sentence "But because sequestration does not affect the cost of electricity transmission and distribution, delivered prices will rise less, by no more than 50 percent" directly explains why the expected doubling of generation cost would not translate into a doubling of the total delivered price — transmission and distribution costs remain unchanged, buffering the overall increase. This matches C. The other sentences either state the problem (A, E), state the raw cost increase (B), or mention future improvements (D).',
    topic: 'Set 3 – Passage A: Carbon Sequestration'
  },

  // ── PASSAGE B: Philip Glass ───────────────────────────────────────
  // Q18
  {
    id: 18,
    passageLabel: 'Passage B – Philip Glass',
    passage: `Reviving the practice of using elements of popular music in classical composition, an approach that had been in hibernation in the United States during the 1960s, composer Philip Glass (born 1937) embraced the ethos of popular music in his compositions. Glass based two symphonies on music by rock musicians David Bowie and Brian Eno, but the symphonies' sound is distinctively his. Popular elements do not appear out of place in Glass's classical music, which from its early days has shared certain harmonies and rhythms with rock music. Yet this use of popular elements has not made Glass a composer of popular music. His music is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics.`,
    text: `Passage B – Philip Glass\n\nReviving the practice of using elements of popular music in classical composition, an approach that had been in hibernation in the United States during the 1960s, composer Philip Glass (born 1937) embraced the ethos of popular music in his compositions. Glass based two symphonies on music by rock musicians David Bowie and Brian Eno, but the symphonies' sound is distinctively his. Popular elements do not appear out of place in Glass's classical music, which from its early days has shared certain harmonies and rhythms with rock music. Yet this use of popular elements has not made Glass a composer of popular music. His music is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics.\n\nQ18: The passage addresses which of the following issues related to Glass's use of popular elements in his classical compositions?`,
    options: [
      "How it is regarded by listeners who prefer rock to the classics",
      "How it has affected the commercial success of Glass's music",
      "Whether it has contributed to a revival of interest among other composers in using popular elements in their compositions",
      "Whether it has had a detrimental effect on Glass's reputation as a composer of classical music",
      "Whether it has caused certain of Glass's works to be derivative in quality"
    ],
    answer: 0,
    explanation: 'The passage concludes by stating that Glass\'s music "is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics" — directly addressing how listeners who prefer rock would regard or relate to Glass\'s work, supporting A. B introduces "commercial success," which is never discussed; C is too broad — the passage focuses only on Glass; D and E introduce questions about reputation and derivativeness that the passage doesn\'t raise.',
    topic: 'Set 3 – Passage B: Philip Glass'
  },
  // Q19
  {
    id: 19,
    passageLabel: 'Passage B – Philip Glass',
    passage: `Reviving the practice of using elements of popular music in classical composition, an approach that had been in hibernation in the United States during the 1960s, composer Philip Glass (born 1937) embraced the ethos of popular music in his compositions. Glass based two symphonies on music by rock musicians David Bowie and Brian Eno, but the symphonies' sound is distinctively his. Popular elements do not appear out of place in Glass's classical music, which from its early days has shared certain harmonies and rhythms with rock music. Yet this use of popular elements has not made Glass a composer of popular music. His music is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics.`,
    text: `Passage B – Philip Glass\n\nReviving the practice of using elements of popular music in classical composition, an approach that had been in hibernation in the United States during the 1960s, composer Philip Glass (born 1937) embraced the ethos of popular music in his compositions. Glass based two symphonies on music by rock musicians David Bowie and Brian Eno, but the symphonies' sound is distinctively his. Popular elements do not appear out of place in Glass's classical music, which from its early days has shared certain harmonies and rhythms with rock music. Yet this use of popular elements has not made Glass a composer of popular music. His music is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics.\n\nQ19: The passage suggests that Glass's work displays which of the following qualities?`,
    options: [
      "A return to the use of popular music in classical compositions",
      "An attempt to elevate rock music to an artistic status more closely approximating that of classical music",
      "A long-standing tendency to incorporate elements from two apparently disparate musical styles",
      "A deliberate effort to package classical music for mainstream popular audiences",
      "A rejection of the harmonic conventions traditionally associated with classical music"
    ],
    answer: 2,
    explanation: 'The passage notes that Glass revived "the practice of using elements of popular music in classical composition" and that his music "from its early days has shared certain harmonies and rhythms with rock music" — indicating a long-standing incorporation of two styles (rock and classical). This supports C. A overstates the claim as a "return" from only one direction; B mischaracterizes the intent as elevating rock to classical status; D contradicts the passage, which explicitly says the music is NOT "packaged to attract classical listeners"; E introduces a claim about rejecting harmonic conventions that the passage doesn\'t make.',
    topic: 'Set 3 – Passage B: Philip Glass'
  },
  // Q20
  {
    id: 20,
    passageLabel: 'Passage B – Philip Glass',
    passage: `Reviving the practice of using elements of popular music in classical composition, an approach that had been in hibernation in the United States during the 1960s, composer Philip Glass (born 1937) embraced the ethos of popular music in his compositions. Glass based two symphonies on music by rock musicians David Bowie and Brian Eno, but the symphonies' sound is distinctively his. Popular elements do not appear out of place in Glass's classical music, which from its early days has shared certain harmonies and rhythms with rock music. Yet this use of popular elements has not made Glass a composer of popular music. His music is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics.`,
    text: `Passage B – Philip Glass\n\nReviving the practice of using elements of popular music in classical composition, an approach that had been in hibernation in the United States during the 1960s, composer Philip Glass (born 1937) embraced the ethos of popular music in his compositions. Glass based two symphonies on music by rock musicians David Bowie and Brian Eno, but the symphonies' sound is distinctively his. Popular elements do not appear out of place in Glass's classical music, which from its early days has shared certain harmonies and rhythms with rock music. Yet this use of popular elements has not made Glass a composer of popular music. His music is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics.\n\nQ20: Which sentence in the passage best distinguishes two ways of integrating rock and classical music?`,
    options: [
      "\"Reviving the practice of using elements of popular music in classical composition... composer Philip Glass embraced the ethos of popular music in his compositions.\"",
      "\"Glass based two symphonies on music by rock musicians David Bowie and Brian Eno, but the symphonies' sound is distinctively his.\"",
      "\"Popular elements do not appear out of place in Glass's classical music, which from its early days has shared certain harmonies and rhythms with rock music.\"",
      "\"His music is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics.\"",
      "\"Yet this use of popular elements has not made Glass a composer of popular music.\""
    ],
    answer: 3,
    explanation: 'The sentence "His music is not a version of popular music packaged to attract classical listeners; it is high art for listeners steeped in rock rather than the classics" draws a direct contrast between two approaches: packaging popular music for classical audiences versus creating high art intended for rock listeners. This distinguishes two distinct ways of integrating the two traditions, matching D. The other sentences describe Glass\'s background (A), his specific compositions (B, E), or the organic coexistence of elements (C) — none distinguish two contrasting modes of integration as clearly.',
    topic: 'Set 3 – Passage B: Philip Glass'
  },

  // ── PASSAGE C: David Foster Wallace ──────────────────────────────
  // Q21
  {
    id: 21,
    passageLabel: 'Passage C – David Foster Wallace',
    passage: `In this excerpt from his editor's introduction to The Best American Essays 2007, David Foster Wallace explains the basic criterion upon which he selected the essays to include in the collection.\n\nI tend, as a reader, to prize and admire clarity, precision, plainness, lucidity, and the sort of magical compression that enriches instead of vitiates. Someone's ability to write this way, especially in nonfiction, fills me with envy, and awe. That might help explain why a fair number of Best American Essay pieces tend to be short, terse, and informal in usage/syntax. Readers who enjoy noodling about genre might welcome the news that several of this year's Best Essays are arguably more like causeries or propos than like essays per se, although one could counterargue that these pieces tend, in their essential pithiness, to be closer to what's historically been meant by 'essay.' Personally, I find taxonomic arguments like this dull and irrelevant. What does seem relevant is to assure you that none of the shorter essays in the collection were included merely because they were short. Limpidity, compactness, and an absence of verbal methane were simply part of what made these pieces valuable; and I think I tried, as the Decider, to use overall value as the prime triage and filtering mechanism in selecting this year's top essays.`,
    text: `Passage C – David Foster Wallace\n\nIn this excerpt from his editor's introduction to The Best American Essays 2007, David Foster Wallace explains the basic criterion upon which he selected the essays to include in the collection.\n\nI tend, as a reader, to prize and admire clarity, precision, plainness, lucidity, and the sort of magical compression that enriches instead of vitiates. Someone's ability to write this way, especially in nonfiction, fills me with envy, and awe. That might help explain why a fair number of Best American Essay pieces tend to be short, terse, and informal in usage/syntax. Readers who enjoy noodling about genre might welcome the news that several of this year's Best Essays are arguably more like causeries or propos than like essays per se, although one could counterargue that these pieces tend, in their essential pithiness, to be closer to what's historically been meant by 'essay.' Personally, I find taxonomic arguments like this dull and irrelevant. What does seem relevant is to assure you that none of the shorter essays in the collection were included merely because they were short. Limpidity, compactness, and an absence of verbal methane were simply part of what made these pieces valuable; and I think I tried, as the Decider, to use overall value as the prime triage and filtering mechanism in selecting this year's top essays.\n\nQ21: The author of the passage is primarily concerned with`,
    options: [
      "Cataloguing the formal qualities of writing that coincide with traditional essays.",
      "Educating readers about literary genres.",
      "Explaining what characteristics of writing interest him most.",
      "Defending the criteria by which he chose the essays that appear in the collection.",
      "Criticizing essays that do not conform to a prescribed format."
    ],
    answer: 2,
    explanation: 'The passage opens with the author stating "I tend, as a reader, to prize and admire clarity, precision, plainness, lucidity, and the sort of magical compression that enriches instead of vitiates," and continues to elaborate on these qualities as what made selected essays valuable. The overall focus is on explaining what qualities of writing he personally values, supporting C. A is too narrow; B mischaracterizes the tone as instructional about genres; D overstates the passage as a "defense"; E is contradicted since the author finds genre-based criticism "dull and irrelevant."',
    topic: 'Set 3 – Passage C: David Foster Wallace'
  },
  // Q22
  {
    id: 22,
    passageLabel: 'Passage C – David Foster Wallace',
    passage: `In this excerpt from his editor's introduction to The Best American Essays 2007, David Foster Wallace explains the basic criterion upon which he selected the essays to include in the collection.\n\nI tend, as a reader, to prize and admire clarity, precision, plainness, lucidity, and the sort of magical compression that enriches instead of vitiates. Someone's ability to write this way, especially in nonfiction, fills me with envy, and awe. That might help explain why a fair number of Best American Essay pieces tend to be short, terse, and informal in usage/syntax. Readers who enjoy noodling about genre might welcome the news that several of this year's Best Essays are arguably more like causeries or propos than like essays per se, although one could counterargue that these pieces tend, in their essential pithiness, to be closer to what's historically been meant by 'essay.' Personally, I find taxonomic arguments like this dull and irrelevant. What does seem relevant is to assure you that none of the shorter essays in the collection were included merely because they were short. Limpidity, compactness, and an absence of verbal methane were simply part of what made these pieces valuable; and I think I tried, as the Decider, to use overall value as the prime triage and filtering mechanism in selecting this year's top essays.`,
    text: `Passage C – David Foster Wallace\n\nIn this excerpt from his editor's introduction to The Best American Essays 2007, David Foster Wallace explains the basic criterion upon which he selected the essays to include in the collection.\n\nI tend, as a reader, to prize and admire clarity, precision, plainness, lucidity, and the sort of magical compression that enriches instead of vitiates. Someone's ability to write this way, especially in nonfiction, fills me with envy, and awe. That might help explain why a fair number of Best American Essay pieces tend to be short, terse, and informal in usage/syntax. Readers who enjoy noodling about genre might welcome the news that several of this year's Best Essays are arguably more like causeries or propos than like essays per se, although one could counterargue that these pieces tend, in their essential pithiness, to be closer to what's historically been meant by 'essay.' Personally, I find taxonomic arguments like this dull and irrelevant. What does seem relevant is to assure you that none of the shorter essays in the collection were included merely because they were short. Limpidity, compactness, and an absence of verbal methane were simply part of what made these pieces valuable; and I think I tried, as the Decider, to use overall value as the prime triage and filtering mechanism in selecting this year's top essays.\n\nQ22: The passage supports all of the following EXCEPT:`,
    options: [
      "Conciseness and language use are only one aspect of what gives an essay worth.",
      "Essays that vary in length, style, and formality are inferior to those that follow strict rules.",
      "Taxonomy cannot always apply to writing in the same way it does to scientific concepts.",
      "The length of a piece cannot be considered in evaluating the merit of its ideas.",
      "Economy of language can give life to an essay rather than destroy it."
    ],
    answer: 1,
    explanation: 'The passage explicitly embraces variety — essays that are "short, terse, and informal," as well as ones resembling "causeries or propos" — and treats genre-based ("taxonomic") judgments as "dull and irrelevant," using "overall value" as the criterion. This directly contradicts B, which claims essays following "strict rules" are superior. A, C, D, and E are all supported by the passage.',
    topic: 'Set 3 – Passage C: David Foster Wallace'
  },
  // Q23
  {
    id: 23,
    passageLabel: 'Passage C – David Foster Wallace',
    passage: `In this excerpt from his editor's introduction to The Best American Essays 2007, David Foster Wallace explains the basic criterion upon which he selected the essays to include in the collection.\n\nI tend, as a reader, to prize and admire clarity, precision, plainness, lucidity, and the sort of magical compression that enriches instead of vitiates. Someone's ability to write this way, especially in nonfiction, fills me with envy, and awe. That might help explain why a fair number of Best American Essay pieces tend to be short, terse, and informal in usage/syntax. Readers who enjoy noodling about genre might welcome the news that several of this year's Best Essays are arguably more like causeries or propos than like essays per se, although one could counterargue that these pieces tend, in their essential pithiness, to be closer to what's historically been meant by 'essay.' Personally, I find taxonomic arguments like this dull and irrelevant. What does seem relevant is to assure you that none of the shorter essays in the collection were included merely because they were short. Limpidity, compactness, and an absence of verbal methane were simply part of what made these pieces valuable; and I think I tried, as the Decider, to use overall value as the prime triage and filtering mechanism in selecting this year's top essays.`,
    text: `Passage C – David Foster Wallace\n\nIn this excerpt from his editor's introduction to The Best American Essays 2007, David Foster Wallace explains the basic criterion upon which he selected the essays to include in the collection.\n\nI tend, as a reader, to prize and admire clarity, precision, plainness, lucidity, and the sort of magical compression that enriches instead of vitiates. Someone's ability to write this way, especially in nonfiction, fills me with envy, and awe. That might help explain why a fair number of Best American Essay pieces tend to be short, terse, and informal in usage/syntax. Readers who enjoy noodling about genre might welcome the news that several of this year's Best Essays are arguably more like causeries or propos than like essays per se, although one could counterargue that these pieces tend, in their essential pithiness, to be closer to what's historically been meant by 'essay.' Personally, I find taxonomic arguments like this dull and irrelevant. What does seem relevant is to assure you that none of the shorter essays in the collection were included merely because they were short. Limpidity, compactness, and an absence of verbal methane were simply part of what made these pieces valuable; and I think I tried, as the Decider, to use overall value as the prime triage and filtering mechanism in selecting this year's top essays.\n\nQ23: In context, the author refers to causeries (informal writing or conversation) and propos (exchange of spoken words) primarily in order to`,
    options: [
      "Demonstrate that all nonfiction essays are informal in their very nature.",
      "Argue that spoken language is superior to written language.",
      "Prove that essays, like conversation, are best when pithy and exact.",
      "Suggest that essays must differ considerably from speech in order to fit the nonfiction essay genre.",
      "Explain that an effective essay can have casual elements and need not always follow strict guidelines exactly."
    ],
    answer: 4,
    explanation: 'The author mentions that some essays are "arguably more like causeries or propos than like essays per se," while dismissing the importance of this genre distinction ("taxonomic arguments like this dull and irrelevant") and affirming that these informal pieces still have value. This illustrates that essays can have casual, conversational qualities and still be valuable without conforming strictly to traditional conventions, supporting E. A overgeneralizes; B introduces a superiority claim about spoken vs. written language not made in the text; C and D are inconsistent with the author\'s point about flexibility.',
    topic: 'Set 3 – Passage C: David Foster Wallace'
  },

  // ── PASSAGE D: Jo Ann Beard – Werner ─────────────────────────────
  // Q24
  {
    id: 24,
    passageLabel: 'Passage D – Werner (Jo Ann Beard)',
    passage: `From Jo Ann Beard's essay, "Werner"\n\nWerner Hoeflich spent the evening at his catering job, making white-wine spritzers and mixing vodka with Tab in a spacious apartment overlooking Central Park. There were orchids, thick rugs, a dog with long blond hair. He walked home late from the subway afterward, along the gated and padlocked streets of the Upper East Side. The trees on his block were scrawny and impervious, like invalid aunts.\n\nOnce he had seen a parakeet in one of those trees, staring down at him, shifting from foot to foot. The bird had sharpened both sides of its beak on the branch and then made a veering, panicky flight to a windowsill far above. Most of Werner's metaphorical moments were painterly—the juxtaposing of the wild bird and the tame tree, the shimmer of the periwinkle, the splurt of titanium white that fell from it onto the pavement. He loved New York for its simple surprises, although in truth, Oregon and Iowa and Arizona and everywhere else had simple surprises as well. Cantaloupe-colored sunrises, banded cows, Dairy Queens, all kinds of things that didn't include black plastic mountains of trash and the smell of dog urine.`,
    text: `Passage D – Werner (Jo Ann Beard)\n\nFrom Jo Ann Beard's essay, "Werner"\n\nWerner Hoeflich spent the evening at his catering job, making white-wine spritzers and mixing vodka with Tab in a spacious apartment overlooking Central Park. There were orchids, thick rugs, a dog with long blond hair. He walked home late from the subway afterward, along the gated and padlocked streets of the Upper East Side. The trees on his block were scrawny and impervious, like invalid aunts.\n\nOnce he had seen a parakeet in one of those trees, staring down at him, shifting from foot to foot. The bird had sharpened both sides of its beak on the branch and then made a veering, panicky flight to a windowsill far above. Most of Werner's metaphorical moments were painterly—the juxtaposing of the wild bird and the tame tree, the shimmer of the periwinkle, the splurt of titanium white that fell from it onto the pavement. He loved New York for its simple surprises, although in truth, Oregon and Iowa and Arizona and everywhere else had simple surprises as well. Cantaloupe-colored sunrises, banded cows, Dairy Queens, all kinds of things that didn't include black plastic mountains of trash and the smell of dog urine.\n\nQ24: The author takes multiple perspectives when describing New York. What two tones are primarily utilized?`,
    options: [
      "Impressed and critical",
      "Sardonic and optimistic",
      "Detached and jovial",
      "Ominous and fanciful",
      "Pompous and loving"
    ],
    answer: 0,
    explanation: 'The passage describes New York with admiration—"orchids, thick rugs," "simple surprises," painterly "metaphorical moments"—reflecting an impressed tone, while also noting the gritty, unpleasant aspects: "gated and padlocked streets," trees "like invalid aunts," "black plastic mountains of trash and the smell of dog urine"—reflecting a critical tone. This dual perspective matches A. B\'s "sardonic" doesn\'t capture the genuine appreciation; C\'s "detached" contradicts the vivid emotional engagement; D and E don\'t capture both positive and negative aspects.',
    topic: 'Set 3 – Passage D: Werner'
  },
  // Q25
  {
    id: 25,
    passageLabel: 'Passage D – Werner (Jo Ann Beard)',
    passage: `From Jo Ann Beard's essay, "Werner"\n\nWerner Hoeflich spent the evening at his catering job, making white-wine spritzers and mixing vodka with Tab in a spacious apartment overlooking Central Park. There were orchids, thick rugs, a dog with long blond hair. He walked home late from the subway afterward, along the gated and padlocked streets of the Upper East Side. The trees on his block were scrawny and impervious, like invalid aunts.\n\nOnce he had seen a parakeet in one of those trees, staring down at him, shifting from foot to foot. The bird had sharpened both sides of its beak on the branch and then made a veering, panicky flight to a windowsill far above. Most of Werner's metaphorical moments were painterly—the juxtaposing of the wild bird and the tame tree, the shimmer of the periwinkle, the splurt of titanium white that fell from it onto the pavement. He loved New York for its simple surprises, although in truth, Oregon and Iowa and Arizona and everywhere else had simple surprises as well. Cantaloupe-colored sunrises, banded cows, Dairy Queens, all kinds of things that didn't include black plastic mountains of trash and the smell of dog urine.`,
    text: `Passage D – Werner (Jo Ann Beard)\n\nFrom Jo Ann Beard's essay, "Werner"\n\nWerner Hoeflich spent the evening at his catering job, making white-wine spritzers and mixing vodka with Tab in a spacious apartment overlooking Central Park. There were orchids, thick rugs, a dog with long blond hair. He walked home late from the subway afterward, along the gated and padlocked streets of the Upper East Side. The trees on his block were scrawny and impervious, like invalid aunts.\n\nOnce he had seen a parakeet in one of those trees, staring down at him, shifting from foot to foot. The bird had sharpened both sides of its beak on the branch and then made a veering, panicky flight to a windowsill far above. Most of Werner's metaphorical moments were painterly—the juxtaposing of the wild bird and the tame tree, the shimmer of the periwinkle, the splurt of titanium white that fell from it onto the pavement. He loved New York for its simple surprises, although in truth, Oregon and Iowa and Arizona and everywhere else had simple surprises as well. Cantaloupe-colored sunrises, banded cows, Dairy Queens, all kinds of things that didn't include black plastic mountains of trash and the smell of dog urine.\n\nQ25: With which of the following statements would the author of the passage most likely agree?`,
    options: [
      "Every aspect of New York is unique and admirable.",
      "Oregon, Iowa, and Arizona do not have any geographical merit.",
      "A single location can have many facets, both positive and negative.",
      "Large cities tend to lack whimsical and artistic sights.",
      "Smaller, Midwest locations are superior to large, urban spaces."
    ],
    answer: 2,
    explanation: 'The passage juxtaposes beautiful and surprising elements of New York (orchids, painterly moments, "simple surprises") with unpleasant ones ("black plastic mountains of trash"), and notes other places had their own positive qualities too. This even-handed presentation supports C. A is contradicted by the negative details; B is directly contradicted, since the passage lists positive features of those states; D is contradicted by the artistic imagery found in New York; E introduces a value judgment the passage\'s balanced tone doesn\'t support.',
    topic: 'Set 3 – Passage D: Werner'
  },
  // Q26
  {
    id: 26,
    passageLabel: 'Passage D – Werner (Jo Ann Beard)',
    passage: `From Jo Ann Beard's essay, "Werner"\n\nWerner Hoeflich spent the evening at his catering job, making white-wine spritzers and mixing vodka with Tab in a spacious apartment overlooking Central Park. There were orchids, thick rugs, a dog with long blond hair. He walked home late from the subway afterward, along the gated and padlocked streets of the Upper East Side. The trees on his block were scrawny and impervious, like invalid aunts.\n\nOnce he had seen a parakeet in one of those trees, staring down at him, shifting from foot to foot. The bird had sharpened both sides of its beak on the branch and then made a veering, panicky flight to a windowsill far above. Most of Werner's metaphorical moments were painterly—the juxtaposing of the wild bird and the tame tree, the shimmer of the periwinkle, the splurt of titanium white that fell from it onto the pavement. He loved New York for its simple surprises, although in truth, Oregon and Iowa and Arizona and everywhere else had simple surprises as well. Cantaloupe-colored sunrises, banded cows, Dairy Queens, all kinds of things that didn't include black plastic mountains of trash and the smell of dog urine.`,
    text: `Passage D – Werner (Jo Ann Beard)\n\nFrom Jo Ann Beard's essay, "Werner"\n\nWerner Hoeflich spent the evening at his catering job, making white-wine spritzers and mixing vodka with Tab in a spacious apartment overlooking Central Park. There were orchids, thick rugs, a dog with long blond hair. He walked home late from the subway afterward, along the gated and padlocked streets of the Upper East Side. The trees on his block were scrawny and impervious, like invalid aunts.\n\nOnce he had seen a parakeet in one of those trees, staring down at him, shifting from foot to foot. The bird had sharpened both sides of its beak on the branch and then made a veering, panicky flight to a windowsill far above. Most of Werner's metaphorical moments were painterly—the juxtaposing of the wild bird and the tame tree, the shimmer of the periwinkle, the splurt of titanium white that fell from it onto the pavement. He loved New York for its simple surprises, although in truth, Oregon and Iowa and Arizona and everywhere else had simple surprises as well. Cantaloupe-colored sunrises, banded cows, Dairy Queens, all kinds of things that didn't include black plastic mountains of trash and the smell of dog urine.\n\nQ26: Which of the following CANNOT be inferred about Werner from the passage?`,
    options: [
      "He is a creative and imagistic thinker.",
      "He is very biased in favor of the Upper East Side of New York.",
      "He does not live at the same level of luxury as those he works for.",
      "He is observant, noticing both the affluent aspects of the city as well as its grimier ones.",
      "He is fascinated and intrigued by colors."
    ],
    answer: 1,
    explanation: 'The passage describes the Upper East Side streets where Werner lives as "gated and padlocked" with trees that are "scrawny and impervious, like invalid aunts" — hardly a flattering portrayal. There is no indication Werner is especially partial to this neighborhood. This makes B the statement that cannot be inferred. A is supported by his "painterly" metaphorical moments; C is supported by the contrast between the luxury apartment and his walk home; D is supported by his noticing both luxury and trash; E is supported by his attention to colors ("shimmer of the periwinkle," "titanium white").',
    topic: 'Set 3 – Passage D: Werner'
  },

  // ── PASSAGE E: Malcolm Gladwell – Dog Behavior ───────────────────
  // Q27
  {
    id: 27,
    passageLabel: 'Passage E – What the Dog Saw (Gladwell)',
    passage: `From an article by Malcolm Gladwell entitled "What the Dog Saw," discussing canine behavior.\n\nA dog cares, deeply, which way your body is leaning. Forward or backward? Forward can be seen as aggressive; backward—even a quarter of an inch—means nonthreatening. It means you've relinquished what ethologists call an "intention movement" to proceed forward. Cock your head, even slightly, to the side, and a dog is disarmed. Look at him straight on and he'll read it like a red flag. Standing straight, with your shoulders squared rather than slumped, can mean the difference between whether your dog obeys a command or ignores it. Breathing evenly and deeply, rather than holding your breath, can mean the difference between diffusing a tense situation and igniting it. "I think they are looking at our eyes and where our eyes are looking, and what our eyes look like," the ethologist Patricia McConnell, who teaches at the University of Wisconsin, Madison, says. "A rounded eye with a dilated pupil is a sign of high arousal and aggression in a dog. I believe they pay a tremendous amount of attention to how relaxed our face is and how relaxed our facial muscles are, because that's a big cue for them with each other. Is the jaw relaxed? Is the mouth slightly open? And then the arms. They pay a tremendous amount of attention to where our arms go."`,
    text: `Passage E – What the Dog Saw (Gladwell)\n\nFrom an article by Malcolm Gladwell entitled "What the Dog Saw," discussing canine behavior.\n\nA dog cares, deeply, which way your body is leaning. Forward or backward? Forward can be seen as aggressive; backward—even a quarter of an inch—means nonthreatening. It means you've relinquished what ethologists call an "intention movement" to proceed forward. Cock your head, even slightly, to the side, and a dog is disarmed. Look at him straight on and he'll read it like a red flag. Standing straight, with your shoulders squared rather than slumped, can mean the difference between whether your dog obeys a command or ignores it. Breathing evenly and deeply, rather than holding your breath, can mean the difference between diffusing a tense situation and igniting it. "I think they are looking at our eyes and where our eyes are looking, and what our eyes look like," the ethologist Patricia McConnell, who teaches at the University of Wisconsin, Madison, says. "A rounded eye with a dilated pupil is a sign of high arousal and aggression in a dog. I believe they pay a tremendous amount of attention to how relaxed our face is and how relaxed our facial muscles are, because that's a big cue for them with each other. Is the jaw relaxed? Is the mouth slightly open? And then the arms. They pay a tremendous amount of attention to where our arms go."\n\nQ27: Based on the context of the passage, which best describes what an "ethologist" studies?`,
    options: [
      "Muscle and nerve reflexes of humans and animals",
      "Nonverbal forms of communication between species",
      "Animal behavior, particularly as it occurs in interactions between species in different environments",
      "Canine anatomy",
      "Character traits among different animal breeds"
    ],
    answer: 1,
    explanation: 'The passage describes ethologist Patricia McConnell explaining how dogs read human body posture, eye shape, facial relaxation, and arm position — all forms of nonverbal communication between species — to interpret intention and emotional state. This directly supports B. A is too narrow, focusing only on "muscle and nerve reflexes"; C introduces "different environments," which the passage doesn\'t address; D is too narrow (anatomy, not behavior); E introduces "breeds," which the passage doesn\'t discuss.',
    topic: 'Set 3 – Passage E: What the Dog Saw'
  },
  // Q28
  {
    id: 28,
    passageLabel: 'Passage E – What the Dog Saw (Gladwell)',
    passage: `From an article by Malcolm Gladwell entitled "What the Dog Saw," discussing canine behavior.\n\nA dog cares, deeply, which way your body is leaning. Forward or backward? Forward can be seen as aggressive; backward—even a quarter of an inch—means nonthreatening. It means you've relinquished what ethologists call an "intention movement" to proceed forward. Cock your head, even slightly, to the side, and a dog is disarmed. Look at him straight on and he'll read it like a red flag. Standing straight, with your shoulders squared rather than slumped, can mean the difference between whether your dog obeys a command or ignores it. Breathing evenly and deeply, rather than holding your breath, can mean the difference between diffusing a tense situation and igniting it. "I think they are looking at our eyes and where our eyes are looking, and what our eyes look like," the ethologist Patricia McConnell, who teaches at the University of Wisconsin, Madison, says. "A rounded eye with a dilated pupil is a sign of high arousal and aggression in a dog. I believe they pay a tremendous amount of attention to how relaxed our face is and how relaxed our facial muscles are, because that's a big cue for them with each other. Is the jaw relaxed? Is the mouth slightly open? And then the arms. They pay a tremendous amount of attention to where our arms go."`,
    text: `Passage E – What the Dog Saw (Gladwell)\n\nFrom an article by Malcolm Gladwell entitled "What the Dog Saw," discussing canine behavior.\n\nA dog cares, deeply, which way your body is leaning. Forward or backward? Forward can be seen as aggressive; backward—even a quarter of an inch—means nonthreatening. It means you've relinquished what ethologists call an "intention movement" to proceed forward. Cock your head, even slightly, to the side, and a dog is disarmed. Look at him straight on and he'll read it like a red flag. Standing straight, with your shoulders squared rather than slumped, can mean the difference between whether your dog obeys a command or ignores it. Breathing evenly and deeply, rather than holding your breath, can mean the difference between diffusing a tense situation and igniting it. "I think they are looking at our eyes and where our eyes are looking, and what our eyes look like," the ethologist Patricia McConnell, who teaches at the University of Wisconsin, Madison, says. "A rounded eye with a dilated pupil is a sign of high arousal and aggression in a dog. I believe they pay a tremendous amount of attention to how relaxed our face is and how relaxed our facial muscles are, because that's a big cue for them with each other. Is the jaw relaxed? Is the mouth slightly open? And then the arms. They pay a tremendous amount of attention to where our arms go."\n\nQ28: It can be inferred from the passage that`,
    options: [
      "Dogs are generally indifferent to minor movement shifts in humans.",
      "Dogs are more sensitive to physical cues from arms and legs than from eyes and mouths.",
      "Dogs are highly sensitive to nuances in human movement.",
      "\"Intention movements\" cannot be retracted once they have been initiated.",
      "Minor movements or changes in posture and expression have no impact on a tense situation between human and dog once it has begun."
    ],
    answer: 2,
    explanation: 'The passage repeatedly emphasizes that "even a quarter of an inch" of backward movement, "cock[ing]" one\'s head "even slightly," and minor changes in breathing, posture, and facial relaxation can all significantly affect how a dog responds — demonstrating that dogs are highly sensitive to small nuances in human movement, supporting C. A directly contradicts this; B is contradicted since the passage gives equal attention to eyes, face, and jaw; D is contradicted since the passage implies intention movements CAN be retracted; E is directly contradicted by the breathing example.',
    topic: 'Set 3 – Passage E: What the Dog Saw'
  },
  // Q29
  {
    id: 29,
    passageLabel: 'Passage E – What the Dog Saw (Gladwell)',
    passage: `From an article by Malcolm Gladwell entitled "What the Dog Saw," discussing canine behavior.\n\nA dog cares, deeply, which way your body is leaning. Forward or backward? Forward can be seen as aggressive; backward—even a quarter of an inch—means nonthreatening. It means you've relinquished what ethologists call an "intention movement" to proceed forward. Cock your head, even slightly, to the side, and a dog is disarmed. Look at him straight on and he'll read it like a red flag. Standing straight, with your shoulders squared rather than slumped, can mean the difference between whether your dog obeys a command or ignores it. Breathing evenly and deeply, rather than holding your breath, can mean the difference between diffusing a tense situation and igniting it. "I think they are looking at our eyes and where our eyes are looking, and what our eyes look like," the ethologist Patricia McConnell, who teaches at the University of Wisconsin, Madison, says. "A rounded eye with a dilated pupil is a sign of high arousal and aggression in a dog. I believe they pay a tremendous amount of attention to how relaxed our face is and how relaxed our facial muscles are, because that's a big cue for them with each other. Is the jaw relaxed? Is the mouth slightly open? And then the arms. They pay a tremendous amount of attention to where our arms go."`,
    text: `Passage E – What the Dog Saw (Gladwell)\n\nFrom an article by Malcolm Gladwell entitled "What the Dog Saw," discussing canine behavior.\n\nA dog cares, deeply, which way your body is leaning. Forward or backward? Forward can be seen as aggressive; backward—even a quarter of an inch—means nonthreatening. It means you've relinquished what ethologists call an "intention movement" to proceed forward. Cock your head, even slightly, to the side, and a dog is disarmed. Look at him straight on and he'll read it like a red flag. Standing straight, with your shoulders squared rather than slumped, can mean the difference between whether your dog obeys a command or ignores it. Breathing evenly and deeply, rather than holding your breath, can mean the difference between diffusing a tense situation and igniting it. "I think they are looking at our eyes and where our eyes are looking, and what our eyes look like," the ethologist Patricia McConnell, who teaches at the University of Wisconsin, Madison, says. "A rounded eye with a dilated pupil is a sign of high arousal and aggression in a dog. I believe they pay a tremendous amount of attention to how relaxed our face is and how relaxed our facial muscles are, because that's a big cue for them with each other. Is the jaw relaxed? Is the mouth slightly open? And then the arms. They pay a tremendous amount of attention to where our arms go."\n\nQ29: According to the passage, the following human behaviors could all be perceived by a dog as potentially aggressive or dominant EXCEPT:`,
    options: [
      "Leaning forward",
      "Even breathing pattern",
      "Unrelaxed facial muscles",
      "Direct eye contact",
      "Standing straight with unrounded shoulders"
    ],
    answer: 1,
    explanation: 'The passage states that "breathing evenly and deeply, rather than holding your breath, can mean the difference between diffusing a tense situation and igniting it" — meaning even, deep breathing is associated with diffusing tension, the opposite of being perceived as aggressive. This makes B the exception. A is supported ("forward can be seen as aggressive"); C is supported (relaxed facial muscles are a positive cue, so unrelaxed muscles signal tension); D is supported ("look at him straight on and he\'ll read it like a red flag"); E is supported (standing with "shoulders squared" is associated with dominant posture).',
    topic: 'Set 3 – Passage E: What the Dog Saw'
  },

  // ── PASSAGE F: Mark Greif – Liberation ───────────────────────────
  // Q30
  {
    id: 30,
    passageLabel: 'Passage F – Afternoon of the Sex Children (Greif)',
    passage: `From Mark Greif's essay, "Afternoon of the Sex Children"\n\nLiberation implies freedom to do what you have already been doing or have meant to do. It unbars what is native to you, free in cost and freely your possession, and removes the iron weight of social interaction. Even in the great phase of full human liberation that extended from the 1960s to the present day, however, what has passed as liberation has often been liberalization (Marcuse used this distinction). Liberalization makes for a free traffic in goods formerly regulated and interdicted, creating markets in what you already possess for free. It has a way of making your possessions no longer native to you at the very moment that they're freed from your enjoyment. Ultimately you no longer know how to possess them, correctly, unless you are following new rules that emerge to dominate the traffic in these goods.`,
    text: `Passage F – Afternoon of the Sex Children (Greif)\n\nFrom Mark Greif's essay, "Afternoon of the Sex Children"\n\nLiberation implies freedom to do what you have already been doing or have meant to do. It unbars what is native to you, free in cost and freely your possession, and removes the iron weight of social interaction. Even in the great phase of full human liberation that extended from the 1960s to the present day, however, what has passed as liberation has often been liberalization (Marcuse used this distinction). Liberalization makes for a free traffic in goods formerly regulated and interdicted, creating markets in what you already possess for free. It has a way of making your possessions no longer native to you at the very moment that they're freed from your enjoyment. Ultimately you no longer know how to possess them, correctly, unless you are following new rules that emerge to dominate the traffic in these goods.\n\nQ30: According to the author, what is the essential distinction between liberation and liberalization?`,
    options: [
      "Liberation allows freedom from persecution whereas liberalization puts stipulations and penalties on certain words and actions.",
      "Liberation is the ability to do things without constraint whereas liberalization takes natural freedoms and transfers them into alternative markets.",
      "Liberation is the process of releasing inhibitions whereas liberalization insists they remain hidden.",
      "Liberation provides protection from unfair laws whereas liberalization forces a population into a particular set of beliefs.",
      "Liberation allows you to interact with whomever you choose whereas liberalization stipulates that you must only interact with those of similar morals and ethics."
    ],
    answer: 1,
    explanation: 'The author defines liberation as "freedom to do what you have already been doing... It unbars what is native to you, free in cost and freely your possession" — essentially, unconstrained natural freedom. Liberalization, by contrast, "makes for a free traffic in goods formerly regulated and interdicted, creating markets in what you already possess for free" — turning natural freedoms into market commodities. This matches B precisely. A introduces "persecution" and "penalties," not discussed; C introduces "inhibitions," not the author\'s framing; D and E introduce concepts not in the passage.',
    topic: 'Set 3 – Passage F: Liberation'
  },
  // Q31
  {
    id: 31,
    passageLabel: 'Passage F – Afternoon of the Sex Children (Greif)',
    passage: `From Mark Greif's essay, "Afternoon of the Sex Children"\n\nLiberation implies freedom to do what you have already been doing or have meant to do. It unbars what is native to you, free in cost and freely your possession, and removes the iron weight of social interaction. Even in the great phase of full human liberation that extended from the 1960s to the present day, however, what has passed as liberation has often been liberalization (Marcuse used this distinction). Liberalization makes for a free traffic in goods formerly regulated and interdicted, creating markets in what you already possess for free. It has a way of making your possessions no longer native to you at the very moment that they're freed from your enjoyment. Ultimately you no longer know how to possess them, correctly, unless you are following new rules that emerge to dominate the traffic in these goods.`,
    text: `Passage F – Afternoon of the Sex Children (Greif)\n\nFrom Mark Greif's essay, "Afternoon of the Sex Children"\n\nLiberation implies freedom to do what you have already been doing or have meant to do. It unbars what is native to you, free in cost and freely your possession, and removes the iron weight of social interaction. Even in the great phase of full human liberation that extended from the 1960s to the present day, however, what has passed as liberation has often been liberalization (Marcuse used this distinction). Liberalization makes for a free traffic in goods formerly regulated and interdicted, creating markets in what you already possess for free. It has a way of making your possessions no longer native to you at the very moment that they're freed from your enjoyment. Ultimately you no longer know how to possess them, correctly, unless you are following new rules that emerge to dominate the traffic in these goods.\n\nQ31: In presenting the argument, the author does all of the following EXCEPT:`,
    options: [
      "Make an ironic observation",
      "Draw a conclusion",
      "Give a specific example",
      "Present a paradox",
      "Make a comparison"
    ],
    answer: 2,
    explanation: 'The passage discusses liberation and liberalization at a conceptual level throughout, citing Marcuse\'s distinction, but never provides a concrete, specific example (such as a named event, product, or scenario) to illustrate the abstract argument. This makes C the exception. A is present (what "has passed as liberation" is often its opposite); B is present in the final sentence\'s conclusion; D is present in the paradoxical idea that freeing possessions makes them "no longer native to you"; E is present in the comparison drawn between liberation and liberalization.',
    topic: 'Set 3 – Passage F: Liberation'
  },
  // Q32
  {
    id: 32,
    passageLabel: 'Passage F – Afternoon of the Sex Children (Greif)',
    passage: `From Mark Greif's essay, "Afternoon of the Sex Children"\n\nLiberation implies freedom to do what you have already been doing or have meant to do. It unbars what is native to you, free in cost and freely your possession, and removes the iron weight of social interaction. Even in the great phase of full human liberation that extended from the 1960s to the present day, however, what has passed as liberation has often been liberalization (Marcuse used this distinction). Liberalization makes for a free traffic in goods formerly regulated and interdicted, creating markets in what you already possess for free. It has a way of making your possessions no longer native to you at the very moment that they're freed from your enjoyment. Ultimately you no longer know how to possess them, correctly, unless you are following new rules that emerge to dominate the traffic in these goods.`,
    text: `Passage F – Afternoon of the Sex Children (Greif)\n\nFrom Mark Greif's essay, "Afternoon of the Sex Children"\n\nLiberation implies freedom to do what you have already been doing or have meant to do. It unbars what is native to you, free in cost and freely your possession, and removes the iron weight of social interaction. Even in the great phase of full human liberation that extended from the 1960s to the present day, however, what has passed as liberation has often been liberalization (Marcuse used this distinction). Liberalization makes for a free traffic in goods formerly regulated and interdicted, creating markets in what you already possess for free. It has a way of making your possessions no longer native to you at the very moment that they're freed from your enjoyment. Ultimately you no longer know how to possess them, correctly, unless you are following new rules that emerge to dominate the traffic in these goods.\n\nQ32: Which of the following best describes the function of the concluding sentence of the passage?`,
    options: [
      "To encourage people to learn the new set of rules that will govern the traffic of goods.",
      "To suggest that a person will be more successful if they accept the changes in various markets.",
      "To deter proponents of liberation from speaking out against liberalization.",
      "To insist that personal freedoms are less important than the overarching need to achieve flow in the traffic of goods and services.",
      "To illustrate the shift in power that occurs when liberalization overtakes liberation."
    ],
    answer: 4,
    explanation: 'The concluding sentence — "Ultimately you no longer know how to possess them, correctly, unless you are following new rules that emerge to dominate the traffic in these goods" — describes a shift: what was once freely and "natively" possessed now requires conforming to externally imposed "new rules." This illustrates how liberalization creates new structures of control that supplant the original freedom — a shift in power, supporting E. A and B mischaracterize the sentence as practical encouragement; C introduces "deterring proponents," which the tone doesn\'t support; D overstates the claim into a normative argument.',
    topic: 'Set 3 – Passage F: Liberation'
  },

  // ── PASSAGE G: Annie Dillard – Total Eclipse ──────────────────────
  // Q33
  {
    id: 33,
    passageLabel: 'Passage G – Total Eclipse (Annie Dillard)',
    passage: `From Annie Dillard's essay "Total Eclipse"\n\nA college student, a boy in a blue parka who carried a Hasselblad, said to us, "Did you see that little white ring? It looked like a Life Saver. It looked like a Life Saver up in the sky." And so it did. The boy spoke well. He was a walking alarm clock. I myself had at that time no access to such a word. He could write a sentence, and I could not. I grabbed that Life Saver and rode it to the surface. And I had to laugh. I had been dumbstruck on the Euphrates River, I had been dead and gone and grieving, all over the sight of something which, if you could claw your way up to that level, you would grant looked very much like a Life Saver. It was good to be back among people so clever; it was good to have all the world's words at the mind's disposal, so the mind could begin its task. All those things for which we have no words are lost. The mind—the culture—has two little tools, grammar and lexicon: a decorated sand bucket and a matching shovel. With these we bluster about the continents and do all the world's work. With these we try to save our very lives.`,
    text: `Passage G – Total Eclipse (Annie Dillard)\n\nFrom Annie Dillard's essay "Total Eclipse"\n\nA college student, a boy in a blue parka who carried a Hasselblad, said to us, "Did you see that little white ring? It looked like a Life Saver. It looked like a Life Saver up in the sky." And so it did. The boy spoke well. He was a walking alarm clock. I myself had at that time no access to such a word. He could write a sentence, and I could not. I grabbed that Life Saver and rode it to the surface. And I had to laugh. I had been dumbstruck on the Euphrates River, I had been dead and gone and grieving, all over the sight of something which, if you could claw your way up to that level, you would grant looked very much like a Life Saver. It was good to be back among people so clever; it was good to have all the world's words at the mind's disposal, so the mind could begin its task. All those things for which we have no words are lost. The mind—the culture—has two little tools, grammar and lexicon: a decorated sand bucket and a matching shovel. With these we bluster about the continents and do all the world's work. With these we try to save our very lives.\n\nQ33: What are the primary literary devices that the author uses in this passage?`,
    options: [
      "Metaphor and analogy",
      "Irony and simile",
      "Humor and pathos",
      "Personal anecdote and allegory",
      "Allusion and inverted syntax"
    ],
    answer: 0,
    explanation: 'The passage is built around extended metaphors and analogies: the boy is described as "a walking alarm clock," language tools are likened to "a decorated sand bucket and a matching shovel," and the "Life Saver" image is used as a means of climbing back to ordinary perception. These figurative comparisons — both direct metaphors and extended analogies — are the dominant devices, supporting A. B\'s "simile" is present in places but "irony" is not a major device; C\'s "humor and pathos" are present as tones but not as primary structural devices; D and E introduce devices not prominently used.',
    topic: 'Set 3 – Passage G: Total Eclipse'
  },
  // Q34
  {
    id: 34,
    passageLabel: 'Passage G – Total Eclipse (Annie Dillard)',
    passage: `From Annie Dillard's essay "Total Eclipse"\n\nA college student, a boy in a blue parka who carried a Hasselblad, said to us, "Did you see that little white ring? It looked like a Life Saver. It looked like a Life Saver up in the sky." And so it did. The boy spoke well. He was a walking alarm clock. I myself had at that time no access to such a word. He could write a sentence, and I could not. I grabbed that Life Saver and rode it to the surface. And I had to laugh. I had been dumbstruck on the Euphrates River, I had been dead and gone and grieving, all over the sight of something which, if you could claw your way up to that level, you would grant looked very much like a Life Saver. It was good to be back among people so clever; it was good to have all the world's words at the mind's disposal, so the mind could begin its task. All those things for which we have no words are lost. The mind—the culture—has two little tools, grammar and lexicon: a decorated sand bucket and a matching shovel. With these we bluster about the continents and do all the world's work. With these we try to save our very lives.`,
    text: `Passage G – Total Eclipse (Annie Dillard)\n\nFrom Annie Dillard's essay "Total Eclipse"\n\nA college student, a boy in a blue parka who carried a Hasselblad, said to us, "Did you see that little white ring? It looked like a Life Saver. It looked like a Life Saver up in the sky." And so it did. The boy spoke well. He was a walking alarm clock. I myself had at that time no access to such a word. He could write a sentence, and I could not. I grabbed that Life Saver and rode it to the surface. And I had to laugh. I had been dumbstruck on the Euphrates River, I had been dead and gone and grieving, all over the sight of something which, if you could claw your way up to that level, you would grant looked very much like a Life Saver. It was good to be back among people so clever; it was good to have all the world's words at the mind's disposal, so the mind could begin its task. All those things for which we have no words are lost. The mind—the culture—has two little tools, grammar and lexicon: a decorated sand bucket and a matching shovel. With these we bluster about the continents and do all the world's work. With these we try to save our very lives.\n\nQ34: What is the author's purpose in describing the boy as an "alarm clock"?`,
    options: [
      "To explain metaphorically how he awakened her from her lack of speech.",
      "To suggest that time is fleeting, and we must observe natural wonders while we can.",
      "To provide an image that coincides with his shrill interruption of her thoughts.",
      "To parallel the idea of the eclipse as it cycles through its course in the sky.",
      "To demonstrate how much time she spent staring at the sky once the eclipse ended."
    ],
    answer: 0,
    explanation: 'Immediately after calling the boy "a walking alarm clock," the narrator explains: "I myself had at that time no access to such a word. He could write a sentence, and I could not. I grabbed that Life Saver and rode it to the surface." This shows the boy\'s simple, clear words "woke" the narrator out of her speechless, overwhelmed ("dumbstruck," "dead and gone and grieving") state — like an alarm clock waking someone from sleep — and gave her access to language again. This matches A. B introduces "time is fleeting," not the point of the comparison; C mischaracterizes the boy\'s words as a "shrill interruption," when the narrator describes them positively; D and E introduce ideas not connected to the "alarm clock" comparison.',
    topic: 'Set 3 – Passage G: Total Eclipse'
  }

];

const TOPIC_MAP = {
  'Central Ideas and Details': {
    name: 'Central Ideas and Details',
    questions: QUESTIONS.map(q => q.id)
  }
};