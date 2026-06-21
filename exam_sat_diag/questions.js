// =============================================
// Digital SAT – Diagnostic Test
// questions.js | Pages 209–221
// Mixed: SVA, Pronouns, Tense, Modifiers,
//         Possessives, Boundaries, Punctuation
// =============================================

const QUESTIONS = [
    // ── Section 1: Subject-Verb Agreement & Pronouns ──
    {
        id: 1,
        text: `When a fire burns red or green or blue, the color of its flames ______ the chemical composition of the combustible material.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["indicate", "indicates", "have indicated", "are indicating"],
        answer: 1,
        explanation: "The subject is 'the color' (singular). The prepositional phrase 'of its flames' is a modifier and does not change the subject. The singular simple present verb 'indicates' is correct. Answer: B.",
        topic: "Subject-Verb Agreement"
    },
    {
        id: 2,
        text: `A Neapolitan pizza made with San Marzano tomatoes ______ considered more traditional than one made with any other type of tomatoes.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["are", "have been", "is", "were"],
        answer: 2,
        explanation: "The subject is 'A Neapolitan pizza' (singular). Past participle phrase 'made with San Marzano tomatoes' modifies the subject but doesn't change it. Simple present singular 'is' is correct. Answer: C.",
        topic: "Subject-Verb Agreement"
    },
    {
        id: 3,
        text: `The sum of money one donates to registered nonprofit organizations ______ a deduction that can be made from one's taxable income.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["represent", "represents", "are representing", "have represented"],
        answer: 1,
        explanation: "The subject is 'The sum' (singular). 'Of money one donates to registered nonprofit organizations' is a prepositional modifier. The singular verb 'represents' is correct. Answer: B.",
        topic: "Subject-Verb Agreement"
    },
    {
        id: 4,
        text: `Called embouchure, the shape of a skilled trumpet player's lips ______ for playing a wide range of notes with clear tone and without muscle strain.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["allows", "are allowing", "allow", "have allowed"],
        answer: 0,
        explanation: "The subject is 'the shape' (singular). 'Of a skilled trumpet player's lips' is a prepositional phrase. Simple present singular 'allows' is correct. Answer: A.",
        topic: "Subject-Verb Agreement"
    },
    {
        id: 5,
        text: `It is hard to live in Antarctica. The cold, dry environment provides the continent's soil-dwelling microbes few nutrients, little water, and almost no sunlight. In a 2017 study of these organisms, microbiologist Belinda Ferrari reported that ______ able to survive on a diet of atmospheric gases found in the soil.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["it is", "this is", "either is", "they are"],
        answer: 3,
        explanation: "The pronoun must refer to 'these organisms' / 'microbes' (plural). The plural pronoun 'they' and plural verb 'are' correctly agree with the plural antecedent. Answer: D.",
        topic: "Pronoun-Antecedent Agreement"
    },
    {
        id: 6,
        text: `Before a jury trial begins, lawyers for each side interview potential jurors closely, ______ questions intended to reveal any biases.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["asking him or her", "asking them", "asking it", "to ask him or her"],
        answer: 1,
        explanation: "The pronoun refers to 'potential jurors' (plural). The plural pronoun 'them' correctly agrees with the plural antecedent. 'Asking them' also functions as a participial phrase modifying the subject. Answer: B.",
        topic: "Pronoun-Antecedent Agreement"
    },
    {
        id: 7,
        text: `Thanks to ______ long legs, giraffes are very fast, running as quickly as 35 miles per hour in short bursts.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["its", "one's", "their", "his or her"],
        answer: 2,
        explanation: "'Giraffes' is the antecedent — a plural noun referring to the animals as a group. The plural possessive pronoun 'their' correctly agrees with 'giraffes'. Answer: C.",
        topic: "Pronoun-Antecedent Agreement"
    },
    {
        id: 8,
        text: `While many spiders use webs to catch their food, others capture prey using hunting or burrowing techniques. Spiders from the family Ctenizidae, often called trapdoor spiders, ______ their burrows with doors, using their silk for hinges.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["cover", "are covering", "will have covered", "had covered"],
        answer: 0,
        explanation: "The sentence describes a habitual behavior of trapdoor spiders. The simple present tense 'cover' is correct for general/habitual actions. The subject 'Spiders' (plural) agrees with 'cover' (plural). Answer: A.",
        topic: "Verb Tense"
    },
    // ── Section 2: Verb Form & Modifiers ───────────
    {
        id: 9,
        text: `Botanists recognize over fifty different species of sunflower, and variance exists even in those species. One species, the silverleaf sunflower, ______ both an early-flowering ecotype that tends to grow in coastal areas and a late-flowering ecotype that grows inland.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["encompassing", "to encompass", "encompasses", "having encompassed"],
        answer: 2,
        explanation: "The sentence needs a finite main verb for the subject 'One species'. 'Encompasses' is the correct simple present finite verb. 'Encompassing' and 'having encompassed' are non-finite forms that cannot serve as the main verb. Answer: C.",
        topic: "Verb Form"
    },
    {
        id: 10,
        text: `Antarctic pearlwort, a low-growing shrub with characteristic yellow flowers, is one of only two native flowering plants which ______ in Antarctica.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["were occurring", "occur", "are occurring", "will have occurred"],
        answer: 1,
        explanation: "The relative clause 'which ______ in Antarctica' describes a general, ongoing fact about the plants. Simple present 'occur' is correct for a general/habitual fact. The subject of the clause is 'which' referring to 'plants' (plural), so plural 'occur' is needed. Answer: B.",
        topic: "Verb Tense"
    },
    {
        id: 11,
        text: `Before the museum closed permanently, it faced financial challenges that ______ a large deficit and declining ticket sale revenues.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["include", "will include", "would include", "included"],
        answer: 3,
        explanation: "The sentence is set in the past ('Before the museum closed'). The relative clause describing the past challenges also needs past tense: 'included'. Answer: D.",
        topic: "Verb Tense"
    },
    {
        id: 12,
        text: `Rabinal Achí is a precolonial Maya dance drama performed annually in Rabinal, a town in the Guatemalan highlands. Based on events that occurred when Rabinal was a city-state ruled by a king, ______ had once been an ally of the king but was later captured while leading an invading force against him.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: [
            "Rabinal Achí tells the story of K'iche' Achí, a military leader who",
            "K'iche' Achí, the military leader in the story of Rabinal Achí,",
            "there was a military leader, K'iche' Achí, who in Rabinal Achí",
            "the military leader whose story is told in Rabinal Achí, K'iche' Achí,"
        ],
        answer: 0,
        explanation: "The opening participial phrase 'Based on events that occurred when Rabinal was a city-state ruled by a king' must be followed by the subject it logically modifies — the drama Rabinal Achí, not K'iche' Achí (who is a character, not a drama). Option A correctly places 'Rabinal Achí' as the subject immediately after the modifier. Answer: A.",
        topic: "Dangling Modifiers"
    },
    {
        id: 13,
        text: `Having returned from the ocean to the stream where it was born, ______ after which its offspring start the cycle anew.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: [
            "an adult salmon's life cycle ends when it spawns and dies,",
            "an adult salmon spawns and dies, completing its life cycle,",
            "the spawning and death of an adult salmon complete its life cycle,",
            "the life cycle of an adult salmon is complete when it spawns and die,"
        ],
        answer: 1,
        explanation: "The participial phrase 'Having returned from the ocean...' must be followed by a subject that can logically 'return from the ocean' — an actual salmon, not its 'life cycle' or 'spawning and death'. Option B uses 'an adult salmon' as the subject, which correctly matches the modifier. Answer: B.",
        topic: "Dangling Modifiers"
    },
    {
        id: 14,
        text: `While popular depiction might characterize surfing as a summer sport, the reality is that winter conditions are considered better for surfing. Generated by seasonal storms far off the coast, ______

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: [
            "surfers highly prize the large, predictable sets of waves that are created by winter swells.",
            "winter swells reach the shore as large, predictable sets of waves that are highly prized by surfers.",
            "the shore causes large winter swells to break in predictable sets of waves highly prized by surfers.",
            "winter is highly prized by surfers for large swells that break in large, predictable sets of waves."
        ],
        answer: 1,
        explanation: "The participial phrase 'Generated by seasonal storms far off the coast' modifies the thing that is generated — 'winter swells', not surfers, the shore, or winter itself. Option B correctly places 'winter swells' immediately after the modifier. Answer: B.",
        topic: "Dangling Modifiers"
    },
    {
        id: 15,
        text: `Slam poet Elizabeth Acevedo's debut novel The Poet X, winner of the 2018 National Book Award for Young People's Literature, is composed of ______ protagonist, fifteen-year-old Xiomara Batista.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: [
            "poem's putatively written by the novel's",
            "poem's putatively written by the novels'",
            "poems putatively written by the novels'",
            "poems putatively written by the novel's"
        ],
        answer: 3,
        explanation: "'Poems' is a simple plural (no apostrophe needed). 'Novel's' is a singular possessive (the protagonist belongs to one novel). 'Poems putatively written by the novel's protagonist' is correct. Answer: D.",
        topic: "Plural & Possessives"
    },
    {
        id: 16,
        text: `Labor unions are formed in order to protect ______ through collective bargaining, which gives employees greater leverage while ensuring they are treated equally by management.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["workers' rights", "worker's rights", "workers rights'", "workers' rights'"],
        answer: 0,
        explanation: "Labor unions protect the rights belonging to multiple workers — plural possessive: 'workers' rights'. 'Worker's' = one worker. 'Workers rights'' = misplaced apostrophe. 'Workers' rights'' = double apostrophe (wrong). Answer: A.",
        topic: "Plural & Possessives"
    },
    {
        id: 17,
        text: `The striated ______ walls are the result of erosion and frost weathering having exposed layers of multicolored sedimentary rock.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: [
            "patterns' of a canyons",
            "patterns of a canyons'",
            "pattern's of a canyon's",
            "patterns of a canyon's"
        ],
        answer: 3,
        explanation: "'Patterns' is a simple plural (no apostrophe). 'Canyon's' is a singular possessive (the walls of one canyon). 'Patterns of a canyon's walls' is correct. Answer: D.",
        topic: "Plural & Possessives"
    },
    // ── Section 3: Boundaries / Punctuation ────────
    {
        id: 18,
        text: `Detroit natives Timothy Paule and Nicole Lindsey have combined their two passions, Detroit and beekeeping, to improve the health of their city's flowers and other vegetation. In 2017, the couple converted a vacant lot in the city into an ______ in the years that followed they acquired nine additional lots and established more than 35 hives.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["apiary", "apiary,", "apiary and", "apiary, and"],
        answer: 3,
        explanation: "Two independent clauses must be joined with a comma + coordinating conjunction. 'Apiary, and' correctly joins 'they converted a lot into an apiary' with 'in the years that followed they acquired nine additional lots'. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 19,
        text: `It is tempting to glamorize the hunt for dinosaur ______ majority of fieldwork is characterized by a daily routine of heat, insects, and tedious labor.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["fossils, the", "fossils the", "fossils but the", "fossils, but the"],
        answer: 3,
        explanation: "Two contrasting independent clauses must be joined with comma + 'but'. 'Fossils, but the' correctly joins the contrasting clauses with a coordinating conjunction preceded by a comma. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 20,
        text: `Though Paul Revere is best known today for his "midnight ride" during the American _____ was famous in his own day as a prosperous silversmith and businessman.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["Revolution; he", "Revolution, but Revere", "Revolution, he", "Revolution he"],
        answer: 0,
        explanation: "The introductory subordinate clause ('Though Paul Revere...Revolution') is followed by the main clause ('he was famous...'). A semicolon after 'Revolution' correctly separates these two clauses. 'Revolution, he' would be a comma splice. Answer: A.",
        topic: "Linking Clauses"
    },
    {
        id: 21,
        text: `Luci Tapahonso is the inaugural poet laureate of the Navajo Nation. Her book Sáanii Dahataal/The Women Are Singing—a combination of fiction and memoir, poetry and ______ serves as a testament to her versatility as a writer.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["prose—", "prose", "prose,", "prose;"],
        answer: 0,
        explanation: "An em-dash parenthetical opened after 'Singing—' must be closed with a matching em-dash. 'Prose—' closes the parenthetical, allowing the main clause to continue. Answer: A.",
        topic: "Supplements (Em-Dashes)"
    },
    {
        id: 22,
        text: `The sandhill ______ to North America, has the longest fossil history of any extant bird at ten million years.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: [
            "crane a large bird native",
            "crane—a large bird native",
            "crane, a large bird native,",
            "crane, a large bird native"
        ],
        answer: 1,
        explanation: "'A large bird native to North America' is a non-essential appositive. Opening it with an em-dash after 'crane' is correct when the sentence already has a comma ('has the longest...'). 'Crane—a large bird native' opens the appositive clearly. Answer: B.",
        topic: "Supplements (Em-Dashes)"
    },
    {
        id: 23,
        text: `Saint Lucia—a sovereign island in the ______ the only country in the world named after a historical woman.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["Caribbean, is", "Caribbean—is", "Caribbean is", "Caribbean; is"],
        answer: 1,
        explanation: "The sentence opens with 'Saint Lucia—' starting an em-dash parenthetical ('a sovereign island in the Caribbean'). The closing em-dash after 'Caribbean' is needed before the main verb 'is'. 'Caribbean—is' correctly closes the parenthetical. Answer: B.",
        topic: "Supplements (Em-Dashes)"
    },
    {
        id: 24,
        text: `According to Naomi Nakayama of the University of Edinburgh, the reason seeds from a dying dandelion appear to float in the air while ______ is that their porous plumes enhance drag, allowing the seeds to stay airborne long enough for the wind to disperse them throughout the surrounding area.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["falling,", "falling:", "falling;", "falling"],
        answer: 3,
        explanation: "'While falling' is a subordinate clause embedded in the subject. No punctuation is needed after 'falling' because it is immediately followed by the main verb 'is'. Answer: D.",
        topic: "Punctuation"
    },
    {
        id: 25,
        text: `An element's atomic number is ______ the number of protons in its nucleus, the number electrons in its uncharged state, and approximately half of its atomic mass.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["equal to:", "equal to;", "equal to,", "equal to"],
        answer: 0,
        explanation: "'Equal to' introduces a list of three items. A colon after a complete clause correctly introduces a list or series that follows. 'Equal to:' is correct. Answer: A.",
        topic: "Punctuation"
    },
    {
        id: 26,
        text: `When he returned from the Galapagos islands in 1835, Charles Darwin brought back a young tortoise named ______ would live over 170 years before passing away at the Australia Zoo in 2006.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["Harriet, she", "Harriet; who", "Harriet she", "Harriet; she"],
        answer: 3,
        explanation: "After 'named Harriet', a new independent clause 'she would live over 170 years' begins. Two independent clauses must be separated by a semicolon. 'Harriet; she' correctly uses a semicolon. Answer: D.",
        topic: "Linking Clauses"
    },
    // ── Section 4: More Boundaries / Punctuation ───
    {
        id: 27,
        text: `The field of geological oceanography owes much to American ______ Marie Tharp, a pioneering oceanographic cartographer whose detailed topographical maps of the ocean floor and its multiple rift valleys helped garner acceptance for the theories of plate tectonics and continental drift.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["geologist", "geologist:", "geologist;", "geologist,"],
        answer: 3,
        explanation: "'Marie Tharp, a pioneering oceanographic cartographer...' is an appositive renaming 'American geologist'. A comma correctly introduces the appositive that follows. Answer: D.",
        topic: "Supplements (Appositives)"
    },
    {
        id: 28,
        text: `A subseasonal weather forecast attempts to predict weather conditions three to four weeks in ______ its predictions are therefore more short-term than those of the seasonal forecast, which attempts to predict the weather more than a month in advance.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["advance and", "advance;", "advance,", "advance"],
        answer: 1,
        explanation: "Two independent clauses are present. A semicolon correctly joins them without a coordinating conjunction. 'Advance;' is the correct choice. Answer: B.",
        topic: "Linking Clauses"
    },
    {
        id: 29,
        text: `In the novel Things Fall Apart by Chinua Achebe, Okonkwo is a leader of Umuofia (a fictional Nigerian clan) and takes pride in his culture's traditions. However, when the arrival of European missionaries brings changes to Umuofia, the novel asks a central question: How ______

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: [
            "will Umuofia's traditions be affected?",
            "Umuofia's traditions will be affected?",
            "Umuofia's traditions will be affected.",
            "will Umuofia's traditions be affected."
        ],
        answer: 0,
        explanation: "After a colon introducing a direct question, inverted word order (auxiliary + subject) is required and the sentence ends with a question mark. 'Will Umuofia's traditions be affected?' is correct. Answer: A.",
        topic: "Punctuation"
    },
    {
        id: 30,
        text: `In paleontology, the term "Elvis taxon" gets applied to a newly identified living species that was once presumed to be extinct. Like an Elvis impersonator who might bear a striking resemblance to the late musical icon Elvis Presley himself, an Elvis taxon is not the real thing, ______ is a misidentified look-alike.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["however, it", "however it", "however but it", "however. It"],
        answer: 3,
        explanation: "The second clause is a new independent statement contrasting with the first. 'However' as a conjunctive adverb requires a period or semicolon before it. 'However. It' begins a new sentence correctly. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 31,
        text: `In 1959, marine biologist Dr. Albert Jones founded the Underwater Adventure Seekers, a scuba diving ______ that is the oldest club for Black divers in the United States and that has helped thousands of diving enthusiasts become certified in the field.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["club", "club, and", "club—", "club,"],
        answer: 0,
        explanation: "'A scuba diving club' is an appositive. 'Club' is directly followed by the restrictive relative clause 'that is the oldest club...', which requires no punctuation between the noun and the relative clause. Answer: A.",
        topic: "Supplements (Appositives)"
    },
    {
        id: 32,
        text: `Emperor Ashoka ruled the Maurya Empire in South Asia from roughly 270 to 232 BCE. He is known for enforcing a moral code called the Law of Piety, which established the sanctity of animal ______ the just treatment of the elderly, and the abolition of the slave trade.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["life;", "life:", "life", "life,"],
        answer: 3,
        explanation: "Items in a list are separated by commas. 'The sanctity of animal life' is the first item in a three-item list. A comma after 'life' correctly separates it from the second item. Answer: D.",
        topic: "Punctuation"
    },
    {
        id: 33,
        text: `In a 2016 study, Eastern Washington University psychologist Amani El-Alayli found that, among the study participants who experienced frisson (a physiological response akin to goosebumps or getting the chills) while listening to music, there was one personality trait that they scored particularly ______ openness to experience.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["high on;", "high on", "high. On", "high on:"],
        answer: 3,
        explanation: "'Openness to experience' specifies what the personality trait is. A colon after 'high on' introduces the identification of that trait. 'High on:' is correct. Answer: D.",
        topic: "Punctuation"
    },
    {
        id: 34,
        text: `Santa Clara Pueblo artist Roxanne Swentzell's sculpture Mud Woman Rolls On consists of five human figures made of clay and plant fiber and arranged in descending size; each figure holds the smaller one in front of it. The arrangement of the figures, according to ______ represents her idea that "we all come from the Earth, generation after generation."

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["Swentzell,", "Swentzell:", "Swentzell", "Swentzell—"],
        answer: 0,
        explanation: "'According to Swentzell' is a parenthetical that interrupts the main clause. It was opened with a comma before 'according', so it must be closed with a comma after 'Swentzell'. Answer: A.",
        topic: "Supplements (Parentheticals)"
    },
    {
        id: 35,
        text: `In her book The Woman Warrior: Memoirs of a Girlhood Among Ghosts, author Maxine Hong Kingston examines themes ______ childhood, womanhood, and Chinese American identity by intertwining autobiography and mythology.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["of—", "of", "of:", "of,"],
        answer: 1,
        explanation: "'Of' is a preposition directly connecting 'themes' to the list. No punctuation is needed between a preposition and its object. 'Of' with no punctuation is correct. Answer: B.",
        topic: "Punctuation"
    },
    {
        id: 36,
        text: `In discussing Mary Shelley's 1818 epistolary novel Frankenstein, literary theorist Gayatri Spivak directs the reader's attention to the character of Margaret Saville. As Spivak points out, Saville is not the protagonist of Shelley's ______ as the recipient of the letters that frame the book's narrative, she's the "occasion" of it.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["novel", "novel,", "novel; rather,", "novel, rather,"],
        answer: 2,
        explanation: "Two independent clauses are joined by the conjunctive adverb 'rather'. A semicolon before 'rather' and a comma after it correctly connects two independent clauses. 'Novel; rather,' is correct. Answer: C.",
        topic: "Linking Clauses"
    },
    {
        id: 37,
        text: `Humans were long thought to have begun occupying the Peruvian settlement of Machu Picchu between 1440 and 1450 CE. However, a team led by anthropologist Dr. Richard Burger used accelerator mass spectrometry to uncover evidence that it was occupied ______ 1420 CE, according to Burger, humans were likely inhabiting the area.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["earlier, which in", "earlier, in", "earlier. In", "earlier in"],
        answer: 2,
        explanation: "After 'occupied earlier', a new independent clause begins ('In 1420 CE, according to Burger, humans were likely inhabiting the area'). A period correctly separates the two sentences. 'Earlier. In' is correct. Answer: C.",
        topic: "Linking Clauses"
    },
    {
        id: 38,
        text: `While one requires oxygen and one does ______ and anaerobic respiration are both forms of cellular respiration—that is, they are processes by which cells break down glucose to use as energy.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["not. Aerobic", "not; aerobic", "not aerobic", "not, aerobic"],
        answer: 0,
        explanation: "The subordinate clause 'While one requires oxygen and one does not' needs to be separated from the new subject 'Aerobic and anaerobic respiration'. A period after 'not' ends the subordinate clause and 'Aerobic' starts a new independent sentence. 'Not. Aerobic' is correct. Answer: A.",
        topic: "Linking Clauses"
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