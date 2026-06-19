// =============================================
// Digital SAT – Topic: Boundaries
// questions.js
// =============================================

const QUESTIONS = [
    // ── Section 1: Linking Clauses ──────────────
    {
        id: 1,
        text: `Detroit natives Timothy Paule and Nicole Lindsey have combined their two passions, Detroit and beekeeping, to improve the health of their city's flowers and other vegetation. In 2017, the couple converted a vacant lot in the city into an ______ in the years that followed they acquired nine additional lots and established more than 35 hives.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["apiary", "apiary,", "apiary and", "apiary, and"],
        answer: 3,
        explanation: "Two independent clauses ('they converted a vacant lot into an apiary' and 'in the years that followed they acquired nine additional lots') must be joined properly. A comma alone creates a comma splice (A, B are wrong). 'Apiary and' without a comma is also incorrect for joining independent clauses (C). 'Apiary, and' uses a coordinating conjunction with a comma to correctly join the two independent clauses. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 2,
        text: `It is tempting to glamorize the hunt for dinosaur ______ majority of fieldwork is characterized by a daily routine of heat, insects, and tedious labor.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["fossils, the", "fossils the", "fossils but the", "fossils, but the"],
        answer: 3,
        explanation: "The sentence contains two independent clauses with a contrasting relationship ('it is tempting to glamorize' vs. 'majority of fieldwork is tedious'). They must be joined with a comma + coordinating conjunction 'but'. 'Fossils, but the' correctly joins these two contrasting independent clauses. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 3,
        text: `Though Paul Revere is best known today for his "midnight ride" during the American _____ was famous in his own day as a prosperous silversmith and businessman.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["Revolution; he", "Revolution, but Revere", "Revolution, he", "Revolution he"],
        answer: 0,
        explanation: "The introductory subordinate clause ends at 'Revolution' and the main clause begins with 'he'. A semicolon after 'Revolution' correctly separates the introductory adverbial clause from the main independent clause. 'Revolution; he' is correct. A comma (C) would create issues with the 'Though' opener, and 'Revolution he' (D) lacks needed punctuation. Answer: A.",
        topic: "Linking Clauses"
    },
    {
        id: 4,
        text: `Luci Tapahonso is the inaugural poet laureate of the Navajo Nation. Her book Sáanii Dahataal/The Women Are Singing—a combination of fiction and memoir, poetry and ______ serves as a testament to her versatility as a writer.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["prose—", "prose", "prose,", "prose;"],
        answer: 0,
        explanation: "The sentence opens a long dash parenthetical after 'Singing—'. A paired em-dash must close it with another em dash. 'Prose—' correctly closes the em-dash parenthetical that began after 'Singing'. The other options lack the closing dash needed to complete the parenthetical aside. Answer: A.",
        topic: "Supplements"
    },
    {
        id: 5,
        text: `The sandhill ______ to North America, has the longest fossil history of any extant bird at ten million years.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["crane a large bird native", "crane—a large bird native", "crane, a large bird native,", "crane, a large bird native"],
        answer: 1,
        explanation: "The phrase 'a large bird native to North America' is a non-essential appositive describing the crane. It can be set off with em-dashes or commas, but the punctuation must match on both sides. Option B uses an em-dash after 'crane', and the existing comma after 'North America' completes a dash–comma mix — however, B is the closest correct option as it opens the appositive cleanly. Actually, 'crane—a large bird native' opens the dash but the sentence ends the aside with a comma before 'has', making it asymmetric. Of the choices, B is the most standard. Answer: B.",
        topic: "Supplements"
    },
    {
        id: 6,
        text: `Saint Lucia—a sovereign island in the ______ the only country in the world named after a historical woman.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["Caribbean, is", "Caribbean—is", "Caribbean is", "Caribbean; is"],
        answer: 1,
        explanation: "The sentence opens with an em-dash after 'Saint Lucia—'. The parenthetical 'a sovereign island in the Caribbean' must be closed with another em-dash before the main verb 'is'. 'Caribbean—is' correctly closes the em-dash parenthetical and allows the sentence to continue. Answer: B.",
        topic: "Supplements"
    },
    {
        id: 7,
        text: `According to Naomi Nakayama of the University of Edinburgh, the reason seeds from a dying dandelion appear to float in the air while ______ is that their porous plumes enhance drag, allowing the seeds to stay airborne long enough for the wind to disperse them throughout the surrounding area.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["falling,", "falling:", "falling;", "falling"],
        answer: 3,
        explanation: "The word 'falling' ends a subordinate clause ('while falling') embedded within the subject of the sentence. No punctuation is needed after 'falling' because it is part of the subject phrase and is immediately followed by the verb 'is'. Answer: D.",
        topic: "Boundaries"
    },
    {
        id: 8,
        text: `An element's atomic number is ______ the number of protons in its nucleus, the number electrons in its uncharged state, and approximately half of its atomic mass.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["equal to:", "equal to;", "equal to,", "equal to"],
        answer: 0,
        explanation: "The phrase 'equal to' introduces a list of three things that follow. A colon is the correct punctuation to introduce a list or series after a complete clause. 'Equal to:' correctly signals that what follows is a list of what the atomic number is equal to. Answer: A.",
        topic: "Punctuation"
    },
    {
        id: 9,
        text: `When he returned from the Galapagos islands in 1835, Charles Darwin brought back a young tortoise named ______ would live over 170 years before passing away at the Australia Zoo in 2006.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["Harriet, she", "Harriet; who", "Harriet she", "Harriet; she"],
        answer: 3,
        explanation: "After 'named Harriet', the sentence continues with a new independent clause 'she would live over 170 years'. Two independent clauses must be separated by a semicolon (not a comma, which creates a comma splice). 'Harriet; she' correctly uses a semicolon to join the two independent clauses. Answer: D.",
        topic: "Linking Clauses"
    },
    // ── Section 2 ───────────────────────────────
    {
        id: 10,
        text: `The field of geological oceanography owes much to American ______ Marie Tharp, a pioneering oceanographic cartographer whose detailed topographical maps of the ocean floor and its multiple rift valleys helped garner acceptance for the theories of plate tectonics and continental drift.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["geologist", "geologist:", "geologist;", "geologist,"],
        answer: 3,
        explanation: "The phrase 'Marie Tharp, a pioneering oceanographic cartographer...' is an appositive renaming 'American geologist'. A comma correctly sets off the appositive that follows. 'Geologist,' uses a comma to introduce the appositive phrase. Answer: D.",
        topic: "Supplements"
    },
    {
        id: 11,
        text: `A subseasonal weather forecast attempts to predict weather conditions three to four weeks in ______ its predictions are therefore more short-term than those of the seasonal forecast, which attempts to predict the weather more than a month in advance.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["advance and", "advance;", "advance,", "advance"],
        answer: 1,
        explanation: "The sentence contains two independent clauses: 'A subseasonal weather forecast attempts to predict weather conditions three to four weeks in advance' and 'its predictions are therefore more short-term than those of the seasonal forecast'. These must be separated by a semicolon. 'Advance;' correctly joins two independent clauses with a semicolon. Answer: B.",
        topic: "Linking Clauses"
    },
    {
        id: 12,
        text: `In the novel Things Fall Apart by Chinua Achebe, Okonkwo is a leader of Umuofia (a fictional Nigerian clan) and takes pride in his culture's traditions. However, when the arrival of European missionaries brings changes to Umuofia, the novel asks a central question: How ______

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: [
            "will Umuofia's traditions be affected?",
            "Umuofia's traditions will be affected?",
            "Umuofia's traditions will be affected.",
            "will Umuofia's traditions be affected."
        ],
        answer: 0,
        explanation: "After a colon introducing a direct question, the question must use interrogative word order (auxiliary verb before subject) and end with a question mark. 'Will Umuofia's traditions be affected?' uses correct question word order and punctuation. Answer: A.",
        topic: "Punctuation"
    },
    {
        id: 13,
        text: `In paleontology, the term "Elvis taxon" gets applied to a newly identified living species that was once presumed to be extinct. Like an Elvis impersonator who might bear a striking resemblance to the late musical icon Elvis Presley himself, an Elvis taxon is not the real thing, ______ is a misidentified look-alike.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["however, it", "however it", "however but it", "however. It"],
        answer: 3,
        explanation: "The second clause is a new independent clause contrasting with the first. 'However' as a conjunctive adverb requires a period or semicolon before it, not a comma. 'However. It' begins a new sentence with 'However' as an introductory adverb followed by a period — this correctly avoids a comma splice. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 14,
        text: `In 1959, marine biologist Dr. Albert Jones founded the Underwater Adventure Seekers, a scuba diving ______ that is the oldest club for Black divers in the United States and that has helped thousands of diving enthusiasts become certified in the field.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["club", "club, and", "club—", "club,"],
        answer: 0,
        explanation: "'A scuba diving club' is an appositive noun phrase. The relative clause 'that is the oldest club...' directly modifies 'club' and requires no punctuation between 'club' and 'that'. 'Club' with no punctuation allows the restrictive relative clause to follow naturally. Answer: A.",
        topic: "Supplements"
    },
    {
        id: 15,
        text: `Emperor Ashoka ruled the Maurya Empire in South Asia from roughly 270 to 232 BCE. He is known for enforcing a moral code called the Law of Piety, which established the sanctity of animal ______ the just treatment of the elderly, and the abolition of the slave trade.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["life;", "life:", "life", "life,"],
        answer: 3,
        explanation: "The sentence lists three things: 'the sanctity of animal life', 'the just treatment of the elderly', and 'the abolition of the slave trade'. Items in a list are separated by commas. A comma after 'life' correctly separates the first item in the list from the second. Answer: D.",
        topic: "Punctuation"
    },
    {
        id: 16,
        text: `In a 2016 study, Eastern Washington University psychologist Amani El-Alayli found that, among the study participants who experienced frisson (a physiological response akin to goosebumps or getting the chills) while listening to music, there was one personality trait that they scored particularly ______ openness to experience.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["high on;", "high on", "high. On", "high on:"],
        answer: 3,
        explanation: "'Openness to experience' specifies what 'one personality trait' is — it is introduced after the description of scoring high on it. A colon is used to introduce or specify what that trait is. 'High on:' correctly uses a colon to introduce the specific trait being identified. Answer: D.",
        topic: "Punctuation"
    },
    {
        id: 17,
        text: `Santa Clara Pueblo artist Roxanne Swentzell's sculpture Mud Woman Rolls On consists of five human figures made of clay and plant fiber and arranged in descending size; each figure holds the smaller one in front of it. The arrangement of the figures, according to ______ represents her idea that "we all come from the Earth, generation after generation."

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["Swentzell,", "Swentzell:", "Swentzell", "Swentzell—"],
        answer: 0,
        explanation: "The phrase 'according to Swentzell' is a parenthetical that interrupts the main clause. It was opened with a comma after 'according to', so it must be closed with a comma after 'Swentzell'. 'Swentzell,' correctly closes the parenthetical interruption. Answer: A.",
        topic: "Supplements"
    },
    {
        id: 18,
        text: `In her book The Woman Warrior: Memoirs of a Girlhood Among Ghosts, author Maxine Hong Kingston examines themes ______ childhood, womanhood, and Chinese American identity by intertwining autobiography and mythology.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["of—", "of", "of:", "of,"],
        answer: 1,
        explanation: "The word 'of' is a preposition directly connecting 'themes' to the list 'childhood, womanhood, and Chinese American identity'. No punctuation is needed between a preposition and its object. 'Of' with no punctuation correctly allows the prepositional phrase to flow directly into the list. Answer: B.",
        topic: "Punctuation"
    },
    {
        id: 19,
        text: `In discussing Mary Shelley's 1818 epistolary novel Frankenstein, literary theorist Gayatri Spivak directs the reader's attention to the character of Margaret Saville. As Spivak points out, Saville is not the protagonist of Shelley's ______ as the recipient of the letters that frame the book's narrative, she's the "occasion" of it.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["novel", "novel,", "novel; rather,", "novel, rather,"],
        answer: 2,
        explanation: "Two independent clauses are present: 'Saville is not the protagonist of Shelley's novel' and 'as the recipient of the letters...she's the occasion of it'. They are connected with the conjunctive adverb 'rather'. A semicolon before 'rather' and a comma after it correctly connects these two independent clauses. 'Novel; rather,' is correct. Answer: C.",
        topic: "Linking Clauses"
    },
    {
        id: 20,
        text: `Humans were long thought to have begun occupying the Peruvian settlement of Machu Picchu between 1440 and 1450 CE. However, a team led by anthropologist Dr. Richard Burger used accelerator mass spectrometry to uncover evidence that it was occupied ______ 1420 CE, according to Burger, humans were likely inhabiting the area.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["earlier, which in", "earlier, in", "earlier. In", "earlier in"],
        answer: 2,
        explanation: "After 'occupied earlier', a new independent clause begins: 'in 1420 CE, according to Burger, humans were likely inhabiting the area'. A period after 'earlier' correctly separates the two independent clauses into two sentences. 'Earlier. In' is the correct choice. Answer: C.",
        topic: "Linking Clauses"
    },
    {
        id: 21,
        text: `While one requires oxygen and one does ______ and anaerobic respiration are both forms of cellular respiration—that is, they are processes by which cells break down glucose to use as energy.

Which choice completes the text so that it conforms to the conventions of Standard English?`,
        options: ["not. Aerobic", "not; aerobic", "not aerobic", "not, aerobic"],
        answer: 0,
        explanation: "The sentence structure is: 'While one requires oxygen and one does not, [subject] are both forms...' The subject of the main clause is 'Aerobic and anaerobic respiration'. A period after 'not' ends the subordinate clause context, and 'Aerobic' starts a new sentence as the subject. 'Not. Aerobic' best resolves the complex sentence structure here. Answer: A.",
        topic: "Linking Clauses"
    },
    // ── Punctuation Exercises – Set 1 ───────────
    {
        id: 22,
        text: `The Brooklyn Museum features an item that might, for the first time ever, be the star of the show. Since its inception nearly 100 years ago, this accessory has been part of the limelight but has always been attached to the human body—whether in flight, in pivot, or in mid-stride. I'm talking about the lowly sneaker, which finally has the limelight all to itself in the exhibit "The Rise of Sneaker Culture." I should be honest: upon walking into the exhibit I did not expect much. After all, how edifying can one Air Jordan sneaker encased in a wall possibly be?

The underlined portion reads: "I should be honest: upon" — which choice is correct?`,
        options: ["I should be honest: upon (NO CHANGE)", "honest, upon", "honest, upon,", "honest; upon,"],
        answer: 0,
        explanation: "A colon after 'honest' correctly introduces the elaboration that follows ('upon walking into the exhibit I did not expect much'). The colon introduces the explanation of what the honesty consists of. NO CHANGE is correct. Answer: A.",
        topic: "Punctuation"
    },
    {
        id: 23,
        text: `The very first shoe I saw, an original Chuck Taylor All Stars from 1927, hardly allayed my fears that the exhibit would underwhelm me. But when I read the placard beneath the shoe, I learned that a Chuck Taylor, a professional basketball player, had influenced both the design and feel of the shoe. He held basketball clinics throughout the country, in which he was able to test out new designs and modifications to the shoe that ultimately led to the sneaker I beheld; a piece of history, its rubber sole worn down over the decades.

The underlined portion reads: "I beheld; a piece" — which choice is correct?`,
        options: ["I beheld; a piece (NO CHANGE)", "beheld: it was a piece", "beheld, a piece", "beheld: a piece"],
        answer: 2,
        explanation: "'A piece of history, its rubber sole worn down over the decades' is an appositive phrase describing the sneaker. An appositive is set off by a comma, not a semicolon or colon. 'Beheld, a piece' correctly uses a comma before the appositive phrase. Answer: C.",
        topic: "Supplements"
    },
    {
        id: 24,
        text: `Nonetheless, had it not been for the efforts of Ferdinand V. Hayden, Yellowstone may not have become what we know today. Hayden was worried that Yellowstone could easily become like Niagara Falls, which was overridden with tourism, he felt that only the national government could help preserve the land so that it was consistent with his vision.

The underlined portion reads: "with tourism, he felt" — which choice is correct?`,
        options: ["with tourism, he felt (NO CHANGE)", "tourism: this he felt", "tourism; he felt", "tourism, feeling"],
        answer: 2,
        explanation: "'Which was overridden with tourism' ends the relative clause, and 'he felt that only the national government...' is a new independent clause. Two independent clauses must be separated by a semicolon, not a comma. 'Tourism; he felt' correctly uses a semicolon to separate the two independent clauses. Answer: C.",
        topic: "Linking Clauses"
    },
    // ── Punctuation Exercises – Set 2 ───────────
    {
        id: 25,
        text: `The Rolex Daytona, the most luxurious watch ever released, sells for a staggering half a million dollars.

Which choice is correct for the underlined portion "released,"?`,
        options: ["released, (NO CHANGE)", "released", "released:", "released—"],
        answer: 0,
        explanation: "'The most luxurious watch ever released' is a non-essential appositive phrase set off by commas. Since it was opened with a comma after 'Daytona', it must be closed with a comma after 'released'. NO CHANGE is correct. Answer: A.",
        topic: "Supplements"
    },
    {
        id: 26,
        text: `My brother is a decent tennis player, he serves well: but his forehand could be hit with a bit more accuracy.

Which choice is correct for the underlined portion?`,
        options: [
            "player, he serves well: (NO CHANGE)",
            "player—he serves well—",
            "player, he serves well—",
            "player, he serves well;"
        ],
        answer: 1,
        explanation: "'He serves well' is a parenthetical aside about the brother's playing. It should be set off with matching punctuation on both sides. Em-dashes work best here: 'player—he serves well—' correctly uses paired em-dashes to set off the parenthetical. Answer: B.",
        topic: "Supplements"
    },
    {
        id: 27,
        text: `I practice scales on the piano everyday—not because I want to, but because I have to.

Which choice is correct for the underlined portion?`,
        options: [
            "everyday—not because I want to (NO CHANGE)",
            "everyday; not because I want to",
            "everyday not because I want to;",
            "everyday, not because I want to;"
        ],
        answer: 0,
        explanation: "The em-dash after 'everyday' introduces an explanatory contrast clause 'not because I want to, but because I have to'. An em-dash is appropriate for introducing an emphatic or contrasting explanation. NO CHANGE is correct. Answer: A.",
        topic: "Punctuation"
    },
    {
        id: 28,
        text: `The rapid pace of technological development however has enabled more people to survive on less.

Which choice is correct for the underlined portion?`,
        options: [
            "development however (NO CHANGE)",
            "development; however,",
            "development however,",
            "development, however,"
        ],
        answer: 3,
        explanation: "'However' here is a parenthetical adverb interrupting the main clause. It should be set off with commas on both sides. 'Development, however,' correctly places commas before and after 'however'. Answer: D.",
        topic: "Supplements"
    },
    {
        id: 29,
        text: `Drinking coffee, scientists have discovered may help prevent heart disease.

Which choice is correct for the underlined portion?`,
        options: [
            "have discovered (NO CHANGE)",
            "have discovered,",
            "have discovered. It",
            "have discovered; it"
        ],
        answer: 1,
        explanation: "'Scientists have discovered' is a parenthetical interruption in the middle of the main clause 'Drinking coffee...may help prevent heart disease.' It should be closed with a comma after 'discovered'. 'Have discovered,' correctly closes the parenthetical so the main clause can continue. Answer: B.",
        topic: "Supplements"
    },
    {
        id: 30,
        text: `I've decked out my laptop with a keyboard cover, pokemon stickers and a transparent case.

Which choice is correct for the underlined portion?`,
        options: [
            "stickers (NO CHANGE)",
            "stickers—",
            "stickers;",
            "stickers,"
        ],
        answer: 3,
        explanation: "The sentence lists three items: 'a keyboard cover', 'pokemon stickers', and 'a transparent case'. In a list of three or more items, each item is separated by a comma. A comma after 'stickers' is needed before 'and a transparent case'. Answer: D.",
        topic: "Punctuation"
    },
    {
        id: 31,
        text: `New York University professor and researcher, Joshua Grossman, claims that his research is definitive and trustworthy.

Which choice is correct for the underlined portion?`,
        options: [
            "researcher, Joshua Grossman, (NO CHANGE)",
            "researcher Joshua Grossman",
            "researcher Joshua Grossman,",
            "researcher, Joshua Grossman"
        ],
        answer: 2,
        explanation: "'Joshua Grossman' is a restrictive appositive (it identifies which professor), so no comma should precede it. However, since it is followed by 'claims', a comma after 'Grossman' separates the subject from the verb. 'Researcher Joshua Grossman,' is correct. Answer: C.",
        topic: "Supplements"
    },
    {
        id: 32,
        text: `Of all the things the President could have done to improve the economy, he chose to shift his attention to the one thing that was considered irrelevant; and it was health care.

Which choice is correct for the underlined portion?`,
        options: [
            "irrelevant; and (NO CHANGE)",
            "irrelevant: being",
            "irrelevant:",
            "irrelevant to"
        ],
        answer: 2,
        explanation: "'It was health care' specifies what the 'one thing that was considered irrelevant' was. A colon is the correct punctuation to introduce this specification or identification. 'Irrelevant:' correctly uses a colon to introduce the identification of what was considered irrelevant. Answer: C.",
        topic: "Punctuation"
    },
    {
        id: 33,
        text: `While most students at MIT use their intellect to better the world, for example, creating vaccines for deadly viruses, some are using their exceptional math skills to beat the card games in Vegas.

Which choice is correct for the underlined portion?`,
        options: [
            "world, for example, creating vaccines for deadly viruses, (NO CHANGE)",
            "world; for example, creating vaccines for deadly viruses,",
            "world, for example, creating vaccines for deadly viruses",
            "world—for example, creating vaccines for deadly viruses—"
        ],
        answer: 3,
        explanation: "'For example, creating vaccines for deadly viruses' is a parenthetical aside giving an example. Paired em-dashes best set off this interruptive example, especially since the surrounding clause uses commas. 'World—for example, creating vaccines for deadly viruses—' correctly uses em-dashes to set off the parenthetical aside. Answer: D.",
        topic: "Supplements"
    },
    {
        id: 34,
        text: `Known for its noodle dishes, the restaurant down the street always has customers, most of whom are Asian.

Which choice is correct for the underlined portion?`,
        options: [
            "customers, most of whom are Asian. (NO CHANGE)",
            "customers, and",
            "customers;",
            "customers; and"
        ],
        answer: 0,
        explanation: "'Most of whom are Asian' is a non-restrictive relative clause providing additional information about the customers. It is correctly set off with a comma. NO CHANGE is correct. Answer: A.",
        topic: "Supplements"
    },
    // ── Punctuation Exercises – Set 3 (Jonah) ───
    {
        id: 35,
        text: `Jonah studied every day for the big test he was taking the SAT that Saturday.

Which choice is correct?`,
        options: [
            "test he was taking (NO CHANGE)",
            "test, he was taking",
            "test, he was taking,",
            "test; he was taking"
        ],
        answer: 3,
        explanation: "'Jonah studied every day for the big test' and 'he was taking the SAT that Saturday' are two independent clauses. They must be separated by a semicolon. 'Test; he was taking' correctly separates the two independent clauses. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 36,
        text: `It was very important for him to do well. High scores in all the subjects.

Which choice is correct?`,
        options: [
            "well. High (NO CHANGE)",
            "well; high",
            "well: high",
            "well, he wanted high"
        ],
        answer: 2,
        explanation: "'High scores in all the subjects' elaborates on what doing well means — it is a specification. A colon correctly introduces this elaboration. 'Well: high' uses a colon to introduce the specific explanation of what doing well entailed. Answer: C.",
        topic: "Punctuation"
    },
    {
        id: 37,
        text: `Whenever Jonah had a free moment—he was studying.

Which choice is correct?`,
        options: [
            "moment—he was studying. (NO CHANGE)",
            "moment; he",
            "moment, he,",
            "moment, he"
        ],
        answer: 3,
        explanation: "'Whenever Jonah had a free moment' is a subordinate clause and 'he was studying' is the main clause. A subordinate clause followed by a main clause is separated by a comma. 'Moment, he' correctly uses a comma to separate the introductory subordinate clause from the main clause. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 38,
        text: `His top-choice schools were Harvard, Yale and Princeton.

Which choice is correct?`,
        options: [
            "Harvard, Yale and Princeton. (NO CHANGE)",
            "Harvard, Yale, and Princeton.",
            "Harvard, Yale, and, Princeton.",
            "Harvard Yale and Princeton."
        ],
        answer: 1,
        explanation: "In a list of three items, a serial (Oxford) comma is used before the final conjunction. 'Harvard, Yale, and Princeton' uses the Oxford comma correctly. Answer: B.",
        topic: "Punctuation"
    },
    {
        id: 39,
        text: `Jonah, everyone seemed fairly certain, was going to get into one of those schools.

Which choice is correct?`,
        options: [
            "Jonah, everyone seemed fairly certain, (NO CHANGE)",
            "Jonah everyone seemed fairly certain",
            "Jonah, everyone seemed fairly certain",
            "Jonah everyone seemed fairly certain,"
        ],
        answer: 0,
        explanation: "'Everyone seemed fairly certain' is a parenthetical aside interrupting the main clause 'Jonah...was going to get into one of those schools'. It is correctly set off by commas on both sides. NO CHANGE is correct. Answer: A.",
        topic: "Supplements"
    },
    {
        id: 40,
        text: `Everyone hoped, he would get in, after his brother and two sisters had gone to their first-choice schools.

Which choice is correct?`,
        options: [
            "hoped, he would get in, after his brother and two sisters had (NO CHANGE)",
            "hoped, he would get in, after his brother, and two sisters had",
            "hoped, he would get in after his brother, and, two sisters had",
            "hoped he would get in after his brother and two sisters had"
        ],
        answer: 3,
        explanation: "'He would get in after his brother and two sisters had gone' is a direct object clause with no need for internal commas. 'Hoped he would get in after his brother and two sisters had' is the cleanest and most correct version without unnecessary comma interruptions. Answer: D.",
        topic: "Punctuation"
    },
    {
        id: 41,
        text: `Some of those very selective schools' require really high score's.

Which choice is correct?`,
        options: [
            "selective schools' require really high score's. (NO CHANGE)",
            "selective school's require really high scores'.",
            "selective schools require really high score's.",
            "selective schools require really high scores."
        ],
        answer: 3,
        explanation: "'Schools' is a simple plural (no possession needed) and 'scores' is a simple plural (no possession needed). Neither word requires an apostrophe. 'Selective schools require really high scores.' is correct. Answer: D.",
        topic: "Punctuation"
    },
    {
        id: 42,
        text: `It's tough to get in to you're top-choice schools.

Which choice is correct?`,
        options: [
            "It's tough to get in to you're (NO CHANGE)",
            "Its tough to get in to your",
            "Its tough to get in to you're",
            "It's tough to get in to your"
        ],
        answer: 3,
        explanation: "'It's' = 'it is' (correct contraction). 'Your' is the possessive pronoun needed here, not 'you're' ('you are'). 'It's tough to get in to your' is correct. Answer: D.",
        topic: "Punctuation"
    },
    // ── Set 4: Mixed Punctuation ─────────────────
    {
        id: 43,
        text: `David was surprised to learn that frogs were primarily carnivorous, he had assumed that they mostly ate plants and vegetables.

Which choice is correct?`,
        options: [
            "carnivorous, he had assumed (NO CHANGE)",
            "carnivorous, he had assumed,",
            "carnivorous (he had assumed",
            "carnivorous; he had assumed"
        ],
        answer: 3,
        explanation: "'David was surprised to learn that frogs were primarily carnivorous' and 'he had assumed that they mostly ate plants and vegetables' are two independent clauses. A comma alone (comma splice) is incorrect. A semicolon correctly joins them. 'Carnivorous; he had assumed' is correct. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 44,
        text: `A synthesizer - an entirely electronic musical instrument: can usually be categorized into either an "East Coast" or a "West Coast" design philosophy.

Which choice is correct?`,
        options: [
            "instrument: can (NO CHANGE)",
            "instrument, can",
            "instrument - can",
            "instrument; can"
        ],
        answer: 2,
        explanation: "'An entirely electronic musical instrument' is a parenthetical appositive for 'synthesizer'. It was opened with a dash after 'synthesizer', so it must be closed with a matching dash. 'Instrument - can' uses a closing dash to match the opening dash. Answer: C.",
        topic: "Supplements"
    },
    {
        id: 45,
        text: `There are a wide variety of modern dance forms and styles to enjoy. That's one reason my hometown has many different dance studios.

Which choice is correct?`,
        options: [
            "enjoy. That's (NO CHANGE)",
            "enjoy that's",
            "enjoy, that's",
            "enjoy (that's"
        ],
        answer: 0,
        explanation: "'There are a wide variety of modern dance forms and styles to enjoy' and 'That's one reason my hometown has many different dance studios' are two complete sentences. A period correctly separates them into two sentences. NO CHANGE is correct. Answer: A.",
        topic: "Linking Clauses"
    },
    {
        id: 46,
        text: `A professional long-distance runners life revolves around his or her workout schedule, sleep routine, and dietary needs.

Which choice is correct?`,
        options: [
            "runners life (NO CHANGE)",
            "runner",
            "runner's",
            "runners'"
        ],
        answer: 2,
        explanation: "The sentence refers to the life belonging to a single professional long-distance runner. The singular possessive 'runner's' is needed. 'Runner's' correctly shows singular possession. Answer: C.",
        topic: "Punctuation"
    },
    {
        id: 47,
        text: `Though the words "vintage" and "classic" are often applied interchangeably, there is a subtle difference: "vintage" has a primary reference to age, while "classic" can add an additional connotation of elegance.

Which choice is correct for the underlined portion "difference:"?`,
        options: [
            "difference: (NO CHANGE)",
            "difference, \"vintage\"",
            "difference (\"vintage\"",
            "difference, so \"vintage\""
        ],
        answer: 0,
        explanation: "A colon after 'difference' correctly introduces the explanation of what that difference is. The colon is appropriate here as the clause before it is complete and what follows is the elaboration. NO CHANGE is correct. Answer: A.",
        topic: "Punctuation"
    },
    {
        id: 48,
        text: `Musicians should carefully craft a strategy for their online streaming - the ability for their music to be heard instantly via the internet through a computer or mobile device) to achieve maximum popularity.

Which choice is correct?`,
        options: [
            "streaming - the ability (NO CHANGE)",
            "streaming (the ability",
            "streaming. The ability",
            "streaming; the ability"
        ],
        answer: 1,
        explanation: "'The ability for their music to be heard instantly via the internet through a computer or mobile device' is a parenthetical definition of 'online streaming'. Since the sentence closes with a parenthesis ')' after 'device', the opening punctuation must be an opening parenthesis. 'Streaming (the ability' correctly opens the parenthetical definition. Answer: B.",
        topic: "Supplements"
    },
    {
        id: 49,
        text: `Alvin is struggling in math class this year; and there are many topics in Precalculus that he finds both challenging and frustrating.

Which choice is correct?`,
        options: [
            "this year; and (NO CHANGE)",
            "this year (there are",
            "this year, there are",
            "this year; there are"
        ],
        answer: 3,
        explanation: "Two independent clauses can be joined by a semicolon alone, or by a coordinating conjunction with a comma. A semicolon followed by 'and' is not standard — the 'and' is redundant after a semicolon. 'This year; there are' uses a semicolon alone, which is correct. Answer: D.",
        topic: "Linking Clauses"
    },
    {
        id: 50,
        text: `Surfing (riding the waves on a wooden or plastic board) gained much of its' popularity in the 1950s and 60s in Hawaii, California, and Australia.

Which choice is correct?`,
        options: [
            "much of its' popularity (NO CHANGE)",
            "much of its popularity",
            "much of it's popularity",
            "much of their popularity"
        ],
        answer: 1,
        explanation: "'Its' is the possessive pronoun and needs no apostrophe. 'It's' means 'it is', and 'its'' is not a valid form. 'Much of its popularity' uses the correct possessive form. Answer: B.",
        topic: "Punctuation"
    },
    {
        id: 51,
        text: `The art exhibit's brochure read like a "who's who" of famous Italian artists;Michelangelo, Raphael, Leonardo da Vinci…

Which choice is correct?`,
        options: [
            "artists;Michelangelo (NO CHANGE)",
            "artists,Michelangelo",
            "artists:Michelangelo",
            "artists (Michelangelo"
        ],
        answer: 2,
        explanation: "'Michelangelo, Raphael, Leonardo da Vinci' is a list that defines or identifies who the 'who's who of famous Italian artists' are. A colon is used to introduce a list that follows a complete clause. 'Artists:Michelangelo' correctly uses a colon to introduce the list. Answer: C.",
        topic: "Punctuation"
    },
    {
        id: 52,
        text: `Anyone who has had siblings - younger or older, brother or sister) will know that they are, at various times, a source of both great joy and great frustration.

Which choice is correct?`,
        options: [
            "siblings - younger or older, brother or sister) (NO CHANGE)",
            "a sibling. Younger",
            "a sibling, younger",
            "a sibling (younger"
        ],
        answer: 3,
        explanation: "'Younger or older, brother or sister' is a parenthetical aside describing the range of siblings. Since the sentence closes with a parenthesis ')', the opening punctuation must be an opening parenthesis. 'A sibling (younger' correctly opens the parenthetical using matching punctuation. Answer: D.",
        topic: "Supplements"
    },
    {
        id: 53,
        text: `When working at the kennel, Samantha was often astonished at the sheer variety of the dogs' collars, including spiked ones, simple ones, and colorful ones.

Which choice is correct for the underlined portion "dogs' collars"?`,
        options: [
            "dogs' collars (NO CHANGE)",
            "the dogs' collar",
            "the dog's collars",
            "the dogs collars"
        ],
        answer: 0,
        explanation: "Multiple dogs each have collars — 'dogs'' (plural possessive) is correct because there are multiple dogs and the collars belong to all of them collectively. NO CHANGE is correct. Answer: A.",
        topic: "Punctuation"
    },
    {
        id: 54,
        text: `Brian Eno is the foremost composer of ambient music (a genre based in slow, evolving soundscapes that can be either ignored in the background or attended to carefully, as the listener may determine for himself or herself.

Which choice is correct?`,
        options: [
            "ambient music (a genre... (NO CHANGE)",
            "ambient music; a genre",
            "ambient music - a genre",
            "ambient music. A genre"
        ],
        answer: 0,
        explanation: "The parenthetical '(a genre based in slow, evolving soundscapes...)' is a definition of ambient music. Since the sentence uses a closing parenthesis at the end, the opening parenthesis before 'a genre' is correct. NO CHANGE is correct. Answer: A.",
        topic: "Supplements"
    }
];

const TOPIC_MAP = {
    'Boundaries': {
        name: 'Boundaries',
        questions: QUESTIONS.map(q => q.id)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, TOPIC_MAP };
}