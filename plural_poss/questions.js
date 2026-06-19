// =============================================
// Digital SAT – Topic: Plural Possessives
// questions.js | Pages 176–183
// =============================================

const QUESTIONS = [
    // ── Section 1: Fill in the Possessive ────────
    {
        id: 1,
        text: `"I have one brother and my ___ birthday is next week."

Which possessive noun best fills the gap?`,
        options: ["Brother's", "Brother", "Brothers", "Brothers'"],
        answer: 0,
        explanation: "There is one brother — singular possessive. 'Brother's' (apostrophe + s) shows the birthday belongs to one brother. 'Brothers'' would mean multiple brothers. Answer: A.",
        topic: "Singular Possessives"
    },
    {
        id: 2,
        text: `"I have two brothers and my ___ birthdays are in November and December."

Which possessive noun best fills the gap?`,
        options: ["Brothers", "Brother's", "Brothers's", "Brothers'"],
        answer: 3,
        explanation: "Two brothers = plural. For regular plurals ending in 's', add only an apostrophe after the 's': 'Brothers''. 'Brother's' = singular. 'Brothers's' is not a valid form. Answer: D.",
        topic: "Plural Possessives"
    },
    {
        id: 3,
        text: `"Both the ___ studs came off."

Which possessive noun best fills the gap?`,
        options: ["Boots", "Boots'", "Boot's", "Boots's"],
        answer: 1,
        explanation: "'Both' implies more than one boot (plural). For a regular plural ending in 's', add only an apostrophe: 'Boots''. 'Boot's' = one boot's studs. Answer: B.",
        topic: "Plural Possessives"
    },
    {
        id: 4,
        text: `"The colour of the ___ tie is red." (referring to one man)

Which possessive noun best fills the gap?`,
        options: ["Men", "Men's'", "Man's", "Mans"],
        answer: 2,
        explanation: "One man — singular possessive. 'Man' is an irregular noun whose plural is 'men'. The singular possessive is 'Man's' (apostrophe + s). Answer: C.",
        topic: "Irregular Plural Possessives"
    },
    {
        id: 5,
        text: `"The ___ ties are red." (referring to multiple men)

Which possessive noun best fills the gap?`,
        options: ["Men's", "Men'", "Man", "Man's"],
        answer: 0,
        explanation: "'Men' is an irregular plural that does not end in 's'. For such plurals, add apostrophe + s: 'Men's'. 'Man's' is singular. Answer: A.",
        topic: "Irregular Plural Possessives"
    },
    {
        id: 6,
        text: `Which of the following is correct?`,
        options: [
            "He is very fond of chocolates and biscuits.",
            "He is very fond of chocolate's and biscuits.",
            "He is very fond of chocolates and biscuit's.",
            "He is very fond of chocolates' and biscuits'."
        ],
        answer: 0,
        explanation: "'Chocolates' and 'biscuits' are simple plural nouns — no possession is involved. Apostrophes are not needed for simple plurals. Answer: A.",
        topic: "Plurals vs. Possessives"
    },
    {
        id: 7,
        text: `Which of the following is correct?`,
        options: [
            "Unlike my mom's pancakes, your sisters pancake's are thinner.",
            "Unlike my moms pancake's, your sister's pancakes are thinner.",
            "Unlike my moms' pancake's, your sister's pancakes' are thinner.",
            "Unlike my mom's pancakes, your sister's pancakes are thinner."
        ],
        answer: 3,
        explanation: "'Mom's' = singular possessive ✓. 'Sister's' = singular possessive ✓. 'Pancakes' = simple plural (no possession) ✓. Only option D uses apostrophes correctly throughout. Answer: D.",
        topic: "Plurals vs. Possessives"
    },
    {
        id: 8,
        text: `Which of the following is correct?`,
        options: [
            "My sisters pancake's thickness is less than 0.5 centimetres.",
            "My sister's pancakes thickness' is less than 0.5 centimetres.",
            "My sister's pancake's thickness is less than 0.5 centimetres.",
            "My sisters pancakes thickness is less than 0.5 centimetres."
        ],
        answer: 2,
        explanation: "'Sister's' = singular possessive (the pancake belongs to the sister) ✓. 'Pancake's thickness' = singular possessive (the thickness belongs to the pancake) ✓. Option C is correct. Answer: C.",
        topic: "Plurals vs. Possessives"
    },
    {
        id: 9,
        text: `Which of the following is correct?`,
        options: [
            "While I like a roses colour he loves a roses smell.",
            "While I like a rose's colour he loves' a rose's smell.",
            "While I like a rose's colour he loves a roses smell.",
            "While I like a rose's colour he loves a rose's smell."
        ],
        answer: 3,
        explanation: "Both 'rose's colour' and 'rose's smell' are singular possessives. 'Loves'' in option B is wrong — 'loves' is a verb, not a possessive. Only option D has correct apostrophe use in both places. Answer: D.",
        topic: "Singular Possessives"
    },
    {
        id: 10,
        text: `Which of the following is correct?`,
        options: [
            "The book was damaged with its cover page ripped off, while the inner pages were intact.",
            "The book was damaged with it's cover page ripped off, while the inner pages were intact.",
            "The book was damaged with its cover page ripped off, while the inner page's were intact.",
            "The book was damaged with its cover page ripped off, while the inner pages' were intact."
        ],
        answer: 0,
        explanation: "'Its' = possessive pronoun (no apostrophe) ✓. 'It's' = 'it is' (wrong). 'Pages' = simple plural subject (no apostrophe needed) ✓. Option A is entirely correct. Answer: A.",
        topic: "Its vs. It's"
    },
    // ── Section 2: Choose the Correct Noun ───────
    {
        id: 11,
        text: `Choose the correct noun to complete the sentence:
"The other _________ shouts made them nervous as they tried to find more clues."`,
        options: ["Students", "Student's", "Students'"],
        answer: 2,
        explanation: "The shouts belong to multiple students — plural possessive. For a regular plural ending in 's', add only an apostrophe: 'Students''. Answer: C.",
        topic: "Plural Possessives"
    },
    {
        id: 12,
        text: `What is the plural possessive form of "immigrant"?`,
        options: ["immigrants", "immigrant's", "immigrants'", "immigrants's"],
        answer: 2,
        explanation: "Plural = 'immigrants'. Plural possessive = 'immigrants'' (apostrophe after the final 's'). Answer: C.",
        topic: "Plural Possessives"
    },
    {
        id: 13,
        text: `What is the plural possessive form of "meadow"?`,
        options: ["meadows", "meadow's", "meadows'", "meadows's"],
        answer: 2,
        explanation: "Plural = 'meadows'. Plural possessive = 'meadows'' (apostrophe after the final 's'). Answer: C.",
        topic: "Plural Possessives"
    },
    {
        id: 14,
        text: `What is the plural possessive form of "child"?`,
        options: ["childs'", "children's", "childrens'", "child's"],
        answer: 1,
        explanation: "'Child' has the irregular plural 'children' (does not end in 's'). For irregular plurals not ending in 's', add apostrophe + s: 'children's'. Answer: B.",
        topic: "Irregular Plural Possessives"
    },
    {
        id: 15,
        text: `What is the plural possessive form of "tooth"?`,
        options: ["tooths'", "tooth's", "teeth's", "teeths'"],
        answer: 2,
        explanation: "'Tooth' has the irregular plural 'teeth' (does not end in 's'). Plural possessive = 'teeth's' (apostrophe + s). Answer: C.",
        topic: "Irregular Plural Possessives"
    },
    {
        id: 16,
        text: `What is the plural possessive form of "pie"?`,
        options: ["pie's", "pies", "pies'", "pies's"],
        answer: 2,
        explanation: "Plural = 'pies'. Plural possessive = 'pies'' (apostrophe after the final 's'). Answer: C.",
        topic: "Plural Possessives"
    },
    {
        id: 17,
        text: `What is the plural possessive form of "bat"?`,
        options: ["bat's", "bats", "bats'", "bats's"],
        answer: 2,
        explanation: "Plural = 'bats'. Plural possessive = 'bats'' (apostrophe after the final 's'). Answer: C.",
        topic: "Plural Possessives"
    },
    {
        id: 18,
        text: `What is the plural possessive form of "deer"?`,
        options: ["deers'", "deer's", "deers's", "deers"],
        answer: 1,
        explanation: "'Deer' is an irregular noun — its plural is also 'deer' (unchanged). Since 'deer' does not end in 's', add apostrophe + s: 'deer's'. Answer: B.",
        topic: "Irregular Plural Possessives"
    },
    {
        id: 19,
        text: `Choose the correct noun to complete the sentence:
"The _______ shore is stony." (referring to one lake)
Options: lakes, lake's, lakes'`,
        options: ["lakes", "lake's", "lakes'"],
        answer: 1,
        explanation: "One lake — singular possessive: 'lake's' (apostrophe + s). 'Lakes'' = multiple lakes' shore. Answer: B.",
        topic: "Singular Possessives"
    },
    {
        id: 20,
        text: `Choose the correct noun to complete the sentence:
"Many people are interested in ancient _______."`  ,
        options: ["Pyramids", "Pyramid's", "Pyramids'"],
        answer: 0,
        explanation: "No possession is expressed — 'ancient pyramids' is simply a plural noun phrase. No apostrophe is needed. Answer: A.",
        topic: "Plurals vs. Possessives"
    },
    // ── Section 3: Singular vs. Plural Possessive ─
    {
        id: 21,
        text: `___ favorite sport is softball. (one person named Bailey)`,
        options: ["Bailies", "Baileys'", "Bailey's", "Baileys"],
        answer: 2,
        explanation: "One person named Bailey — singular possessive: 'Bailey's'. 'Baileys'' = multiple people named Bailey. Answer: C.",
        topic: "Singular Possessives"
    },
    {
        id: 22,
        text: `The ___ eggs were tucked safely under her tail. (one crawdad)`,
        options: ["crawdads'", "crawdads", "crawdades", "crawdad's"],
        answer: 3,
        explanation: "One crawdad — singular possessive: 'crawdad's'. 'Crawdads'' = multiple crawdads. Answer: D.",
        topic: "Singular Possessives"
    },
    {
        id: 23,
        text: `___ finger was almost pinched by Killer. (one person named Mitchell)`,
        options: ["Mitchell's", "Mitchell", "Mitchells", "Mitchells'"],
        answer: 0,
        explanation: "One person named Mitchell — singular possessive: 'Mitchell's'. Answer: A.",
        topic: "Singular Possessives"
    },
    {
        id: 24,
        text: `___ mascot is the tiger. (the Kellogg brand/school)`,
        options: ["Kelloggs", "Kellogg's", "Kelloggs'", "Kellogges"],
        answer: 1,
        explanation: "One entity (Kellogg) — singular possessive: 'Kellogg's'. Answer: B.",
        topic: "Singular Possessives"
    },
    {
        id: 25,
        text: `___ amazing book was a bestseller! (one person named Beth)`,
        options: ["Bethes", "Beths'", "Beths", "Beth's"],
        answer: 3,
        explanation: "One person named Beth — singular possessive: 'Beth's'. Answer: D.",
        topic: "Singular Possessives"
    },
    {
        id: 26,
        text: `Is this ___ artwork? (one person named Lexi)`,
        options: ["Lexi's", "Lexis'", "Lexies", "Lexis"],
        answer: 0,
        explanation: "One person named Lexi — singular possessive: 'Lexi's'. Answer: A.",
        topic: "Singular Possessives"
    },
    {
        id: 27,
        text: `The ___ body felt fuzzy. (one caterpillar)`,
        options: ["caterpillares", "caterpillars", "caterpillar's", "caterpillars'"],
        answer: 2,
        explanation: "One caterpillar — singular possessive: 'caterpillar's'. 'Caterpillars'' = the body belonging to multiple caterpillars. Answer: C.",
        topic: "Singular Possessives"
    },
    {
        id: 28,
        text: `Many people signed ___ petition to save the caterpillars. (one person named Rachel)`,
        options: ["Racheles", "Rachel's", "Rachels", "Rachels'"],
        answer: 1,
        explanation: "One person named Rachel — singular possessive: 'Rachel's'. Answer: B.",
        topic: "Singular Possessives"
    },
    {
        id: 29,
        text: `___ photo showed the huge fish he caught! (one person named Braxton)`,
        options: ["Braxtones", "Braxtons'", "Braxtons", "Braxton's"],
        answer: 3,
        explanation: "One person named Braxton — singular possessive: 'Braxton's'. Answer: D.",
        topic: "Singular Possessives"
    },
    {
        id: 30,
        text: `___ bunny hopped all around her room. (one person named Lily)`,
        options: ["Lilys", "Lily's", "Lilies", "Lilys'"],
        answer: 1,
        explanation: "One person named Lily — singular possessive: 'Lily's'. 'Lilies' is the plural of the flower, not a possessive. Answer: B.",
        topic: "Singular Possessives"
    },
    // ── Section 4: Sentence Correction ───────────
    {
        id: 31,
        text: `The judge critiqued the womens' fashion choice's during the beauty pageant.

Which choice is correct?`,
        options: [
            "womens' fashion choices (NO CHANGE)",
            "womens's fashion choices",
            "womens fashion choices'",
            "women's fashion choices"
        ],
        answer: 3,
        explanation: "'Women' is an irregular plural (not ending in 's'). Irregular plural possessive = 'women's' (apostrophe + s). 'Choices' is a simple plural — no apostrophe needed. Answer: D.",
        topic: "Irregular Plural Possessives"
    },
    {
        id: 32,
        text: `Because she was late to work, Joanne had to report to the factorys' director.

Which choice is correct?`,
        options: [
            "factorys' (NO CHANGE)",
            "factory's",
            "factories'",
            "factories"
        ],
        answer: 1,
        explanation: "One factory — singular possessive: 'factory's'. 'Factorys'' and 'factorys' are not valid spellings. 'Factories'' = multiple factories (not the case here). Answer: B.",
        topic: "Singular Possessives"
    },
    {
        id: 33,
        text: `The novel's protagonist, who's telekinetic powers are capable of mass destruction, is a seemingly quiet and shy girl.

Which choice is correct?`,
        options: [
            "who's (NO CHANGE)",
            "whose",
            "who has",
            "with her"
        ],
        answer: 1,
        explanation: "'Who's' = 'who is' (contraction). 'Whose' = possessive pronoun. The sentence needs the possessive 'whose' to show the powers belong to the protagonist. Answer: B.",
        topic: "Whose vs. Who's"
    },
    {
        id: 34,
        text: `Taylor took the frame down, added a fresh coat of paint on each of it's sides, and inserted a new picture.

Which choice is correct?`,
        options: [
            "it's (NO CHANGE)",
            "they're",
            "its",
            "their"
        ],
        answer: 2,
        explanation: "'It's' = 'it is' — incorrect here. The possessive pronoun 'its' (no apostrophe) shows the sides belong to the frame. Answer: C.",
        topic: "Its vs. It's"
    },
    {
        id: 35,
        text: `The teacher told us that the semester's grades will be released a week from now.

Which choice is correct?`,
        options: [
            "semester's grades (NO CHANGE)",
            "semesters grades",
            "semesters' grades",
            "grade's for the semester"
        ],
        answer: 0,
        explanation: "One semester — singular possessive: 'semester's grades'. This is correct as written. NO CHANGE. Answer: A.",
        topic: "Singular Possessives"
    },
    // ── Section 5: Advanced Apostrophe Correction ─
    {
        id: 36,
        text: `The carefully prepared plan eventually came to nothing after it's leaders were discovered.

Which choice is correct?`,
        options: [
            "it's leader's",
            "its leaders'",
            "its leaders",
            "its leader's",
            "it's leaders"
        ],
        answer: 2,
        explanation: "'Its' (possessive pronoun, no apostrophe) ✓. 'Leaders' is a simple plural subject — no possession expressed by the leaders, so no apostrophe. 'Its leaders' is correct. Answer: C.",
        topic: "Its vs. It's"
    },
    {
        id: 37,
        text: `Monarch's in the Middle Ages had virtually unlimited power over their subjects.

Which choice is correct?`,
        options: [
            "Monarchs in the Middle Ages",
            "Monarchs, the Middle Ages,",
            "Monarch in the Middle Ages",
            "Monarch's in the Middle Ages",
            "Monarch's Middle Ages"
        ],
        answer: 0,
        explanation: "'Monarchs' is simply the plural subject of the sentence — no possession involved. No apostrophe needed for a simple plural. Answer: A.",
        topic: "Plurals vs. Possessives"
    },
    {
        id: 38,
        text: `Many people questioned the mans motives, as he never explained his actions in public.

Which choice is correct?`,
        options: [
            "the mans motives,",
            "the men motives",
            "the man motives",
            "the man's motives',",
            "the man's motives,"
        ],
        answer: 4,
        explanation: "One man — singular possessive: 'man's'. 'Motives' is a simple plural — no apostrophe needed. 'The man's motives,' is correct. Answer: E.",
        topic: "Singular Possessives"
    },
    {
        id: 39,
        text: `Certain people have quite a bit of difficulty in distinguishing color's from each other.

Which choice is correct?`,
        options: [
            "in distinguishing colors' from each other.",
            "in distinguishing color's from each other.",
            "in distinguishing colors from another.",
            "in distinguishing colors, from each other.",
            "in distinguishing colors from each other."
        ],
        answer: 4,
        explanation: "'Colors' is a simple plural — no possession, no apostrophe. 'Each other' (not 'another') is idiomatically correct for two or more things. Answer: E.",
        topic: "Plurals vs. Possessives"
    },
    {
        id: 40,
        text: `Athlete's popularity in high school is a profound feature of the American educational system.

Which choice is correct?`,
        options: [
            "Athlete's popularities",
            "Athletes' popularities",
            "Athlete's popularity",
            "Athletes' popularity",
            "Athletes popularity"
        ],
        answer: 3,
        explanation: "The sentence discusses athletes as a group — plural possessive: 'Athletes''. 'Popularity' is singular (the general phenomenon). 'Athletes' popularity' is correct. Answer: D.",
        topic: "Plural Possessives"
    },
    {
        id: 41,
        text: `Hardly any of the senators had even heard of the issue before the committee held it's meeting.

Which choice is correct?`,
        options: [
            "before a committee held it's meeting.",
            "before the committee holds it's meeting.",
            "before the committee held its meeting.",
            "before the committee held it's meeting.",
            "before that committee held it's meeting."
        ],
        answer: 2,
        explanation: "'It's' = 'it is' — incorrect here. The possessive pronoun 'its' (no apostrophe) is needed. 'Before the committee held its meeting' is correct. Answer: C.",
        topic: "Its vs. It's"
    },
    {
        id: 42,
        text: `The unrealistic assumptions caused the teams fans to expect more than the team could actually achieve.

Which choice is correct?`,
        options: [
            "caused the team's fans",
            "caused the teams fans",
            "causing the teams fans'",
            "causing the teams fans",
            "caused the teams fans'"
        ],
        answer: 0,
        explanation: "One team — singular possessive: 'team's'. The fans belong to the team. 'Caused the team's fans' is correct. Answer: A.",
        topic: "Singular Possessives"
    },
    {
        id: 43,
        text: `Under the terms of the contract, the company had to pay the fired employee six months salary.

Which choice is correct?`,
        options: [
            "six months salary.",
            "six months salaries.",
            "six month of salary.",
            "six months' salary.",
            "six month's salary."
        ],
        answer: 3,
        explanation: "'Six months' salary' — this is a plural possessive of time/measure. The salary belongs to a period of six months. Apostrophe goes after 'months': 'six months' salary'. Answer: D.",
        topic: "Possessives of Time/Measure"
    },
    {
        id: 44,
        text: `The last thing a teacher wants is to see one of her student's fail.

Which choice is correct?`,
        options: [
            "The last thing a teacher wants is to see one of her students fail.",
            "The last thing a teacher wants to see is one of her student's fail.",
            "The last thing a teacher wants, is to see one of her student's fail.",
            "The last thing a teacher wants is to see one of her student's fail.",
            "The last thing that a teacher wants is to see one of her student's fail."
        ],
        answer: 0,
        explanation: "'Students' is a simple plural here — 'one of her students' means one from the group. No possession is expressed, so no apostrophe needed. Answer: A.",
        topic: "Plurals vs. Possessives"
    },
    {
        id: 45,
        text: `The girl was thoroughly embarrassed by her parents actions and comments in front of her friends.

Which choice is correct?`,
        options: [
            "by her parents, actions and comments",
            "by her parents of actions and comments",
            "by her parents actions, and comments",
            "by her parents actions and comments",
            "by her parents' actions and comments"
        ],
        answer: 4,
        explanation: "The actions and comments belong to her parents (plural). Plural possessive: 'parents'' (apostrophe after the 's' of 'parents'). 'By her parents' actions and comments' is correct. Answer: E.",
        topic: "Plural Possessives"
    }
];

const TOPIC_MAP = {
    'Plural Possessives': {
        name: 'Plural Possessives',
        questions: QUESTIONS.map(q => q.id)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, TOPIC_MAP };
}