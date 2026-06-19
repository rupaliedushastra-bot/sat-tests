// =============================================
// Digital SAT – Topic: Transitions & Rhetorics
// questions.js | Pages 183–197
// =============================================

const QUESTIONS = [
    // ── Set 1: Digital SAT Transitions ───────────
    {
        id: 1,
        text: `Iraqi artist Nazik Al-Malaika, celebrated as the first Arabic poet to write in free verse, didn't reject traditional forms entirely; her poem "Elegy for a Woman of No Importance" consists of two ten-line stanzas and a standard number of syllables. Even in this superficially traditional work, ______ Al-Malaika was breaking new ground by memorializing an anonymous woman rather than a famous man.

Which choice completes the text with the most logical transition?`,
        options: ["in fact,", "though,", "therefore,", "moreover,"],
        answer: 0,
        explanation: "The sentence adds an emphatic clarification — even within a traditional form, she was still doing something radical. 'In fact' introduces a surprising or emphatic detail that reinforces the previous idea. 'Though' implies contrast, 'therefore' implies result, and 'moreover' adds information rather than emphasising. Answer: A.",
        topic: "Emphasis / Clarification"
    },
    {
        id: 2,
        text: `Reforestation efforts, while undeniably valuable, often result in forests with limited biodiversity. ______ care should be taken to plant a wide variety of native flora in depleted woodlands.

Which choice completes the text with the most logical transition?`,
        options: ["However,", "Accordingly,", "Nevertheless,", "Furthermore,"],
        answer: 1,
        explanation: "The first sentence states a problem (limited biodiversity). The second sentence gives a logical recommendation that follows from that problem. 'Accordingly' means 'therefore / as a result', fitting a cause-and-effect relationship. 'However' and 'Nevertheless' signal contrast; 'Furthermore' adds a new point. Answer: B.",
        topic: "Cause and Effect"
    },
    {
        id: 3,
        text: `The "Gordie Howe hat trick", an unofficial statistic in which a hockey player scores a goal, records an assist, and gets in a fight all in the same game, is named after hockey great Gordie Howe. ______ Howe only achieved this feat twice in his professional career, far fewer times than many other players.

Which choice completes the text with the most logical transition?`,
        options: ["However,", "Therefore,", "Afterwards,", "As a result,"],
        answer: 0,
        explanation: "The first sentence says the feat is named after Howe. The second sentence reveals the surprising fact that Howe rarely achieved it. This is a contrast — the expectation is that it's named after him because he did it often, but 'however' signals the opposite is true. Answer: A.",
        topic: "Contrast"
    },
    {
        id: 4,
        text: `Seismologists Kaiqing Yuan and Barbara Romanowicz have proposed that the magma fueling Iceland's more than 30 active volcano systems emerges from deep within Earth. The great depths involved—nearly 3,000 km—mark Iceland's volcanoes as extreme outliers; ______ many of Earth's volcanoes are fed by shallow pockets of magma found less than 15 km below the surface.

Which choice completes the text with the most logical transition?`,
        options: ["consequently,", "in addition,", "indeed,", "nevertheless,"],
        answer: 3,
        explanation: "The first part establishes that Iceland's volcanoes are extreme outliers because of their deep magma source. The second part contrasts this with most other volcanoes having shallow magma. 'Nevertheless' or 'by contrast' fits a contrast after the semicolon. 'Nevertheless' is the only contrast word available. Answer: D.",
        topic: "Contrast"
    },
    {
        id: 5,
        text: `For years, biologists have experimented with using grime-eating bacteria rather than harsh chemicals to clean artworks, and results have been impressive overall. ______ these bacterial strains—which can metabolize centuries' worth of oil, glue, dirt, and other surface impurities without creating harmful byproducts—have proven more effective than traditional chemical cleaning methods.

Which choice completes the text with the most logical transition?`,
        options: ["Additionally,", "In many cases,", "As a result,", "However,"],
        answer: 1,
        explanation: "The first sentence says results have been impressive overall. The second sentence then provides a specific instance of that success. 'In many cases' introduces a specific supporting example without overstating. 'Additionally' adds new info, 'As a result' implies causation (not fitting here), 'However' implies contrast. Answer: B.",
        topic: "Example / Specification"
    },
    {
        id: 6,
        text: `Researchers believe that pieces of hull found off Oregon's coast are from a Spanish cargo ship that was lost in 1697. Stories passed down among the area's Confederated Tribes of Siletz Indians support this belief. ______ Siletz stories describe how blocks of beeswax, an item the ship had been carrying, began washing ashore after the ship was lost.

Which choice completes the text with the most logical transition?`,
        options: ["For this reason,", "For example,", "However,", "Likewise,"],
        answer: 1,
        explanation: "The previous sentence says Siletz stories support the belief. The next sentence gives a specific example of one such story. 'For example' is the correct transition to introduce a specific illustrative instance. Answer: B.",
        topic: "Example / Specification"
    },
    {
        id: 7,
        text: `In a heated debate in biogeography, the field is divided between dispersalists and vicariancists. ______ there are those who argue that dispersal is the most crucial determining factor in a species' distribution, and those who insist that vicariance (separation due to geographic barriers) is. Biogeographer Isabel Sanmartín counts herself among neither.

Which choice completes the text with the most logical transition?`,
        options: ["Furthermore,", "By contrast,", "Similarly,", "That is,"],
        answer: 3,
        explanation: "The first sentence introduces the idea of two opposing camps. The second sentence then defines/explains what those two camps are. 'That is' introduces a clarification or restatement of the previous idea — it defines what 'divided between dispersalists and vicariancists' means. Answer: D.",
        topic: "Clarification / Restatement"
    },
    {
        id: 8,
        text: `Wishcycling—putting nonrecyclable items into recycling bins under the mistaken belief that those items can be recycled—ultimately does more harm than good. Nonrecyclable items, such as greasy pizza boxes, can contaminate recyclable materials, rendering entire batches unusable. ______ nonrecyclable products can damage recycling plants' machinery.

Which choice completes the text with the most logical transition?`,
        options: ["Moreover,", "Fittingly,", "Nevertheless,", "On the contrary,"],
        answer: 0,
        explanation: "The passage lists two harms of wishcycling: contaminating batches and damaging machinery. The second harm is being added to the first. 'Moreover' correctly signals an additional supporting point. Answer: A.",
        topic: "Addition"
    },
    // ── Set 2 ─────────────────────────────────────
    {
        id: 9,
        text: `It has long been thought that humans first crossed a land bridge into the Americas approximately 13,000 years ago. ______ based on radiocarbon dating of samples uncovered in Mexico, a research team recently suggested that humans may have arrived more than 30,000 years ago—much earlier than previously thought.

Which choice completes the text with the most logical transition?`,
        options: ["As a result,", "Similarly,", "However,", "In conclusion,"],
        answer: 2,
        explanation: "The first sentence gives the long-held belief (13,000 years ago). The second gives contradicting new evidence (30,000+ years ago). 'However' signals a contrast between what was believed and new evidence. Answer: C.",
        topic: "Contrast"
    },
    {
        id: 10,
        text: `A 2017 study of sign language learners tested the role of iconicity—the similarity of a sign to the thing it represents—in language acquisition. The study found that the greater the iconicity of a sign, the more likely it was to have been learned. ______ the correlation between acquisition and iconicity was lower than that between acquisition and another factor studied: sign frequency.

Which choice completes the text with the most logical transition?`,
        options: ["In fact,", "In other words,", "Granted,", "As a result,"],
        answer: 2,
        explanation: "The first two sentences establish that iconicity matters. The third sentence concedes a limitation — iconicity is less important than sign frequency. 'Granted' introduces a concession (acknowledging a counterpoint while continuing the argument). Answer: C.",
        topic: "Concession"
    },
    {
        id: 11,
        text: `Alexander Lawrence Posey (1873–1908) varied his focus and tone depending on the genre in which he was writing. In his poetry, he used heartfelt language to evoke the beauty and peacefulness of his natural surroundings; in his journalism, ______ he employed humor and satire to comment on political issues affecting his Muskogee Creek community.

Which choice completes the text with the most logical transition?`,
        options: ["by contrast,", "granted,", "that is,", "similarly,"],
        answer: 0,
        explanation: "Poetry = heartfelt and personal; journalism = humor and satire on politics. These are contrasting approaches. 'By contrast' signals the shift between the two styles being described. Answer: A.",
        topic: "Contrast"
    },
    {
        id: 12,
        text: `O2 Arena, an award-winning science fiction story by Nigerian author Oghenechovwe Donald Ekpeki, takes place in an alternate version of Nigeria where breathable air is a rare commodity that is owned and sold by companies. ______ people must purchase it with currency called O2 credits.

Which choice completes the text with the most logical transition?`,
        options: ["Nevertheless,", "In any case,", "As a result,", "Earlier,"],
        answer: 2,
        explanation: "Air is owned by companies (cause) → people must purchase it with O2 credits (effect). 'As a result' correctly signals a cause-and-effect relationship. Answer: C.",
        topic: "Cause and Effect"
    },
    {
        id: 13,
        text: `When one looks at the dark craggy vistas in Hitoshi Fugo's evocative photo series, one's mind might wander off to the cratered surfaces of faraway planets. ______ it's the series' title, Flying Frying Pan, that brings one back to Earth, reminding the viewer that each photo is actually a close-up view of a familiar household object: a frying pan.

Which choice completes the text with the most logical transition?`,
        options: ["Alternatively,", "Consequently,", "Ultimately,", "Additionally,"],
        answer: 2,
        explanation: "The first sentence describes the initial reaction (thinking of faraway planets). The second describes the final realisation (it's a frying pan). 'Ultimately' signals what the final or overall effect/conclusion is — that in the end, the title brings you back to reality. Answer: C.",
        topic: "Sequence / Culmination"
    },
    {
        id: 14,
        text: `Before the 1847 introduction of the US postage stamp, the cost of postage was usually paid by the recipient of a letter rather than the sender, and recipients were not always able or willing to pay promptly. ______ collecting this fee could be slow and arduous, and heaps of unpaid-for, undeliverable mail piled up in post offices.

Which choice completes the text with the most logical transition?`,
        options: ["Regardless,", "On the contrary,", "Consequently,", "For example,"],
        answer: 2,
        explanation: "Recipients were unwilling or unable to pay (cause) → collecting fees was slow and mail piled up (effect). 'Consequently' correctly introduces the result of the problem described in the previous sentence. Answer: C.",
        topic: "Cause and Effect"
    },
    {
        id: 15,
        text: `The number of dark spots that appear on the Sun, known as sunspots, can vary greatly. For example, there were about 180 sunspots in November 2001. ______ there were only about 2 sunspots in December 2008.

Which choice completes the text with the most logical transition?`,
        options: ["In other words,", "Similarly,", "Therefore,", "By comparison,"],
        answer: 3,
        explanation: "The passage presents two contrasting data points to illustrate variation: 180 sunspots vs. 2 sunspots. 'By comparison' signals that the second data point is being compared to the first to show the contrast. Answer: D.",
        topic: "Contrast / Comparison"
    },
    // ── Set 3: Error Correction ────────────────────
    {
        id: 16,
        text: `The process of donating an organ can get quite complicated. Blood types and other characteristics must match before organs can be transferred. In spite of that, unexpected incompatibilities may exist, resulting in further medical problems.

Which is the best replacement for "In spite of that"?`,
        options: [
            "In spite of that (NO CHANGE)",
            "Similarly,",
            "According to some people,",
            "Even then,"
        ],
        answer: 3,
        explanation: "Even after matching blood types (the precaution), unexpected incompatibilities can still occur. 'Even then' signals that despite taking all precautions, problems can still arise. 'In spite of that' could work but 'Even then' is more precise for this context. Answer: D.",
        topic: "Concession / Condition"
    },
    {
        id: 17,
        text: `Although women in cities from New York to Boston demanded equality in academic opportunities, most East Coast universities did not yield to such demands. In fact, coeducational balance did not become a prominent issue for East Coast admissions officers until the 1960s.

Which is the best replacement for "In fact"?`,
        options: [
            "In fact (NO CHANGE)",
            "In addition,",
            "For example,",
            "Be that as it may,"
        ],
        answer: 0,
        explanation: "'In fact' reinforces and adds emphasis to the previous claim — universities not yielding is underscored by the fact that the issue wasn't prominent until the 1960s. NO CHANGE is correct. Answer: A.",
        topic: "Emphasis / Clarification"
    },
    {
        id: 18,
        text: `As it turned out, Senator Aldrich did not plan his Jekyll Island trip for relaxation purposes. Therefore, he confidentially planned the weeklong affair to confer with Wall Street executives for a specific purpose—to draft a banking reform bill that would create a centralized American banking system.

Which is the best replacement for "Therefore"?`,
        options: [
            "Therefore (NO CHANGE)",
            "Nevertheless,",
            "Instead,",
            "Afterwards,"
        ],
        answer: 2,
        explanation: "The first sentence says the trip was NOT for relaxation. The second sentence reveals what it WAS for — a contrast of purpose. 'Instead' correctly signals that the actual purpose was different from what was expected. Answer: C.",
        topic: "Contrast"
    },
    {
        id: 19,
        text: `Some conservatives claim that America was founded as a Christian nation by devout men who sought to establish a system of law and governance based on the Bible. More secular voices, in summary, have argued that the "Christian nation" concept is a misnomer.

Which is the best replacement for "in summary"?`,
        options: [
            "in summary (NO CHANGE)",
            "likewise,",
            "for instance,",
            "on the other hand,"
        ],
        answer: 3,
        explanation: "The passage presents two opposing viewpoints: conservatives vs. secular voices. 'On the other hand' correctly signals the contrasting perspective. 'In summary' implies a conclusion, 'likewise' implies similarity, and 'for instance' introduces an example. Answer: D.",
        topic: "Contrast"
    },
    {
        id: 20,
        text: `The general knew that the price of victory was enormous. Moreover, there would be over a hundred battles and thousands of deaths by the time the war was over.

Which is the best replacement for "Moreover"?`,
        options: [
            "Moreover (NO CHANGE)",
            "Yet,",
            "Eventually,",
            "Indeed,"
        ],
        answer: 3,
        explanation: "The second sentence provides specific evidence that confirms the first sentence ('the price was enormous'). 'Indeed' is used to confirm, strengthen, or provide proof of the previous statement. 'Moreover' adds new information; 'Indeed' emphasises and confirms. Answer: D.",
        topic: "Emphasis / Clarification"
    },
    // ── Set 4: Sentence Addition / Deletion ────────
    {
        id: 21,
        text: `One way of beating the casinos is to learn the art of card counting. It's actually not illegal, but most casinos won't allow it at their tables. Memorizing all the possible card combinations and how to play them can take up to a year.

Which sentence most logically follows and fits the paragraph?`,
        options: [
            "Memorizing all the possible card combinations and how to play them can take up to a year. (NO CHANGE)",
            "The challenge with this tactic is that it looks much easier to do than it really is.",
            "By betting only small stakes, you have a greater chance of winning in the long-term.",
            "Roulette wheels are a game of pure chance, and no amount of practice will help you get an edge on the house."
        ],
        answer: 1,
        explanation: "The paragraph is about card counting as a strategy. The current sentence (NO CHANGE) abruptly introduces the difficulty of memorization. Option B introduces the idea that the tactic seems easier than it is, which better bridges the idea that it's not illegal (suggesting it seems accessible) with the difficulty involved. Answer: B.",
        topic: "Sentence Addition / Logical Flow"
    },
    {
        id: 22,
        text: `This husband-and-wife team turned a dingy off-road café into one of London's most chic eateries in less than two years. The location has a lot of foot traffic and is frequented by tourists and locals alike. The danger, of course, is that a move somewhere else might kill its unique vibe.

Which sentence most logically precedes the final sentence about the danger of moving?`,
        options: [
            "The location has a lot of foot traffic and is frequented by tourists and locals alike. (NO CHANGE)",
            "Finding the best ingredients is so much easier being close to some of the best fish markets in Smithfield.",
            "Prices in London are now so high that renting premises in the capital can be off-putting to new businesses.",
            "Due to their success, they're now thinking of moving locations to accommodate their rapidly increasing number of customers."
        ],
        answer: 3,
        explanation: "The final sentence warns about the danger of moving. For this to make sense, we need to know that they are considering moving. Option D establishes they're thinking of moving, making the final sentence's warning logical. Answer: D.",
        topic: "Sentence Addition / Logical Flow"
    },
    {
        id: 23,
        text: `Philosophers have long speculated that the machines we build today could tomorrow evolve an intelligence that threatens our dominance in the world. Their musings have been the basis for many science fiction novels and movies. [BLANK] Everywhere we look, we already see evidence of our dependence on technology. Digital maps direct us from one place to another, social networks keep us connected to our friends, and 3-D printers allow anyone to make almost anything.

Which sentence best fills the blank to connect the ideas?`,
        options: [
            "Everywhere we look, we already see evidence of our dependence on technology. (NO CHANGE)",
            "Robotic control systems still rely on human input to function correctly.",
            "They might not be as crazy as we think.",
            "Computers thus far have failed to demonstrate physical self-replication."
        ],
        answer: 2,
        explanation: "The paragraph moves from philosophical speculation to real-world evidence of technology dependence. 'They might not be as crazy as we think' bridges the two ideas — suggesting the philosophers' speculations aren't far-fetched, leading into examples of our current tech dependence. Answer: C.",
        topic: "Sentence Addition / Logical Flow"
    },
    {
        id: 24,
        text: `The Adventures of Huckleberry Finn is one of Mark Twain's most famous literary creations. The story of a young boy and his adventures along the Mississippi with a runaway slave has long been a part of the great pantheon of American literature. [BLANK] In his defense, Twain is simply satirizing the views that would be found objectionable today, and he does so by using language that sometimes seems unsavory to our modern ears.

Which sentence best fills the blank?`,
        options: [
            "In his defense, Twain is simply satirizing the views that would be found objectionable today. (NO CHANGE)",
            "However, it is preferable to have first read The Adventures of Tom Sawyer before tackling this weighty tome.",
            "Still, readers often criticize its allegedly racist use of the local dialect.",
            "The book brings up issues of race, family, and friendship that should be confronted in every high school curriculum."
        ],
        answer: 2,
        explanation: "The final sentence begins 'In his defense' — implying a criticism has been raised. Option C introduces that criticism ('readers often criticize its allegedly racist use of the local dialect'), making the defence logical. Answer: C.",
        topic: "Sentence Addition / Logical Flow"
    },
    {
        id: 25,
        text: `The body has many defenses. Without the conscious brain knowing, several internal mechanisms come into play: T cells raise the alarm, B cells produce antibodies to stop the virus from replicating, and other white blood cells destroy contaminated cells directly.

Which choice most effectively sets up the examples given at the end of the sentence?`,
        options: [
            "Without the conscious brain knowing, several internal mechanisms come into play (NO CHANGE)",
            "When human beings become unhealthy,",
            "A part of the immune system,",
            "At the start of an infection,"
        ],
        answer: 3,
        explanation: "The examples (T cells, B cells, white blood cells) describe what happens during an infection. 'At the start of an infection' accurately sets up the context for these specific immune responses, making it clearer when and why these mechanisms activate. Answer: D.",
        topic: "Introduction / Setup"
    },
    {
        id: 26,
        text: `Though it depends on the school, most students do not buy all the textbooks they need. [BLANK] it is not always necessary to purchase a book at full price. Used books are often available online at a fraction of their original cost. Similarly, renting textbooks, which allows for semester-long access to relevant information, is becoming much more common.

Which choice provides the most appropriate introduction to the paragraph?`,
        options: [
            "However, it is not always necessary to purchase a book at full price. (NO CHANGE)",
            "Because they can't afford it,",
            "Despite some professors' requirements,",
            "Regardless of their major,"
        ],
        answer: 0,
        explanation: "The paragraph discusses that students don't buy all their textbooks and then provides alternatives (used books, renting, buyback). The opening 'However, it is not always necessary to purchase at full price' correctly introduces the solutions to the cost problem. NO CHANGE is correct. Answer: A.",
        topic: "Introduction / Setup"
    },
    // ── Set 5: Underlined Transition Correction ────
    {
        id: 27,
        text: `Despite their iconic look and their important role in Dutch history, wooden clogs are now mostly made for tourists rather than for everyday wear. The 300,000 pair of shoes made every year are, however, sold mostly to foreign buyers.

Which is the best replacement for "however"?`,
        options: [
            "however (NO CHANGE)",
            "ironically",
            "in fact",
            "meanwhile"
        ],
        answer: 1,
        explanation: "The situation is ironic — clogs are iconic Dutch items, yet the ones made are sold mostly to foreigners (tourists), not Dutch people for everyday use. 'Ironically' best captures this paradox. 'However' is acceptable but 'ironically' is more precise. Answer: B.",
        topic: "Contrast / Irony"
    },
    {
        id: 28,
        text: `This year, my New Year's resolution was to not buy any more books until I had read all of the books I already had. But, after getting fifty dollars for my birthday, I couldn't resist stopping by the library's used book sale.

Which is the best replacement for "But"?`,
        options: [
            "Moreover,",
            "That is,",
            "For instance,",
            "Additionally,",
            "NO CHANGE"
        ],
        answer: 4,
        explanation: "The resolution was to stop buying books, but the person couldn't resist after getting money. 'But' correctly signals the contrast between the intention and the action. NO CHANGE is correct. Answer: E.",
        topic: "Contrast"
    },
    {
        id: 29,
        text: `My mother was born in China. Additionally, she emigrated to the US when she was twenty-seven, but she was never able to get used to this country. She was used to haggling in loud, bustling street markets—not walking through the silent, orderly rows of American grocery stores.

Which is the best replacement for "Additionally"?`,
        options: [
            "For example,",
            "OMIT the underlined portion and begin the sentence with 'She'",
            "Accordingly,",
            "NO CHANGE",
            "However,"
        ],
        answer: 1,
        explanation: "The second sentence continues the story about the mother — it's not an addition to a separate point but simply the next part of the narrative. 'Additionally' is awkward here; omitting it and starting with 'She emigrated...' makes the paragraph flow naturally. Answer: B.",
        topic: "Transition Removal / Flow"
    },
    {
        id: 30,
        text: `The truth is, I kinda hate my brother. Can you blame me? We're always fighting. Today, he "borrowed" my favorite book and now its ripped in two. Likewise, my brother and I like to play sports together. We both bond over games like volleyball, and basketball.

Which is the best alternative for "Likewise"?`,
        options: [
            "Nevertheless,",
            "For instance,",
            "NO CHANGE",
            "Hence,",
            "Furthermore,"
        ],
        answer: 0,
        explanation: "The paragraph shifts from talking about hating the brother / fighting to describing something positive (playing sports together). This is a contrast — despite fighting, they also bond over sports. 'Nevertheless' correctly signals this concessive contrast. Answer: A.",
        topic: "Contrast / Concession"
    },
    {
        id: 31,
        text: `Many people believe that the current admissions process for colleges is detrimental for high school students. They claim current admissions standards place a lot of emphasis on things that do not actually measure a child's success in college.

On the other hand, some believe that there is nothing wrong with the admissions process: any insincerity is a result of active choices on the part of the student.

Which is the best alternative for "On the other hand"?`,
        options: [
            "Indeed",
            "NO CHANGE",
            "Likewise",
            "Instead",
            "In fact"
        ],
        answer: 1,
        explanation: "The paragraph presents two opposing viewpoints: those who think admissions is harmful vs. those who think it's fine. 'On the other hand' is the perfect transition to introduce the contrasting viewpoint. NO CHANGE is correct. Answer: B.",
        topic: "Contrast"
    },
    {
        id: 32,
        text: `Growing up, I used to find math very tedious. I abhorred algebra, couldn't stand geometry, and was just hating trigonometry. I was sure calculus would be no different. [Sentence 5] Ms. Sweed was very educated, having two master's and a PhD.

Which sentence best fills the blank at position 5?`,
        options: [
            "NO CHANGE",
            "I never saw myself being into math.",
            "I had never saw myself being into math.",
            "It was Mrs. Sweed's dedication to my learning that completely changed my approach to math.",
            "Math is a subject that every high school student should master."
        ],
        answer: 3,
        explanation: "The paragraph transitions from disliking math to meeting Ms. Sweed. Sentence 5 should bridge this shift. Option D — 'It was Mrs. Sweed's dedication to my learning that completely changed my approach to math' — introduces Ms. Sweed as the turning point, connecting the prior negativity to the later positivity. Answer: D.",
        topic: "Sentence Addition / Logical Flow"
    },
    {
        id: 33,
        text: `She showed how math could be used to explain many natural phenomena. However, she showed how math can be used to analyze patterns from studies.

Which is the best replacement for "However" in sentence 8?`,
        options: [
            "Contrastingly,",
            "Also,",
            "And,",
            "NO CHANGE",
            "Hence,"
        ],
        answer: 1,
        explanation: "The two sentences both describe additional things Ms. Sweed showed — explaining natural phenomena AND analyzing patterns. These are additional, parallel points, not contrasting ones. 'Also' correctly signals an additional example. Answer: B.",
        topic: "Addition"
    },
    {
        id: 34,
        text: `[Bach passage] The passage ends: "This great diffusion of one mans' work is a testament to his prodigious talent. It also stands as a testament to the fact that Bach's work came at a pivotal time when the Protestant hymnody was crystallizing, as well as when Western harmonies were coming into a particular expression that is known as the Baroque. [45]"

Which sentence would be a good addition at location [45] to conclude the passage?`,
        options: [
            "The broad appeal of Bach's music is regularly recognized in concerts, ceremonies, and recitals.",
            "This development of Western harmony structure would remain an important aspect in all of Western music for years to come.",
            "For this reason, the beauty of Bach's music remains a testimony to the greatness of his soul and the talents of all Western musicians who perform it.",
            "This rupture in musical styles would set the stage for many new advances in years to come."
        ],
        answer: 1,
        explanation: "The passage concludes by noting Bach's work came at a pivotal moment in the development of Western harmonies (Baroque). The best concluding sentence should explain the lasting significance of that development. Option B — 'This development of Western harmony structure would remain an important aspect in all of Western music for years to come' — provides this forward-looking conclusion. Answer: B.",
        topic: "Conclusion / Closing Sentence"
    },
    {
        id: 35,
        text: `[Wolf story passage] The next day, the boy bored again decided to amuse himself again. He bellowed, "Wolf! Wolf!" Again, the townspeople came running. Once they arrived and witnessed the laughing boy, they realized they'd been tricked a second time. Nonetheless, they returned home and irritated resolved to never fall for the trick again for a third time.

Which is the best alternative for "Nonetheless"?`,
        options: [
            "NO CHANGE",
            "Instead",
            "On the other hand",
            "Therefore",
            "Likewise"
        ],
        answer: 3,
        explanation: "The townspeople were tricked and irritated (cause) → they resolved to never fall for it again (effect/result). 'Therefore' correctly signals a logical consequence of being irritated and tricked. 'Nonetheless' implies doing something despite a difficulty, which doesn't fit here. Answer: D.",
        topic: "Cause and Effect"
    },
    {
        id: 36,
        text: `[Josh and Mary passage] Josh and Mary, who have been married for several years, told us the story of the early years of their relationship. They first met on a cold day in December of 1993. They were very different — Josh was an artist who spent his days painting murals, and his nights bartending. Mary was on the fast track to a partnership at a law firm. At first, Josh was not sure he was interested. Mary felt it was love at first sight. Over time, as their relationship developed, Josh could not imagine his life without Mary anymore, so he suggested that they get married. They have been living happily in the country ever since.

Which of the following sentences would provide the strongest conclusion?`,
        options: [
            "I don't know why they moved out of the city.",
            "Josh is no longer a bartender.",
            "I also know another married couple that lives on their street.",
            "Josh is a better cook than Mary.",
            "Josh and Mary are proof that sometimes people can surprise you."
        ],
        answer: 4,
        explanation: "The story describes how Josh and Mary, two very different people, ended up happily married — a surprising outcome. 'Josh and Mary are proof that sometimes people can surprise you' ties together the theme of their differences and their unexpected happiness, providing a meaningful and thematic conclusion. Answer: E.",
        topic: "Conclusion / Closing Sentence"
    }
];

const TOPIC_MAP = {
    'Transitions': {
        name: 'Transitions',
        questions: QUESTIONS.map(q => q.id)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, TOPIC_MAP };
}