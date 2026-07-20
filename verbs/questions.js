// =============================================
// Digital SAT – Topic: Verb Tense and Forms
// questions.js | Pages 154–159
// =============================================

const QUESTIONS = [
    // ── Section 1: Verb Tense (A/B/C/D format) ──
    {
        id: 1,
        text: `While you were at the hotel eating lunch, I will be at the gym for my daily workout.

Which choice best corrects the underlined portion?`,
        options: ["you were (NO CHANGE)", "you are", "you were being", "you have been"],
        answer: 1,
        explanation: "'While you were' clashes with the future tense 'I will be'. The subordinate clause describing an action happening simultaneously with a future action should use the present tense 'are'. Therefore, 'you are' is correct. Answer: B.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 2,
        text: `It's a bad idea to go to an international airport without having your passport ready!

Which choice best corrects the underlined portion?`,
        options: ["idea to go to (NO CHANGE)", "idea going to", "idea will go to", "idea went to"],
        answer: 0,
        explanation: "'Idea to go to' uses the infinitive correctly after the noun 'idea'. This is standard English: 'a bad idea to do something'. NO CHANGE. Answer: A.",
        topic: "Verb Forms (Infinitive)"
    },
    {
        id: 3,
        text: `When your grandfather came to America two generations ago, he runs a small factory in New York.

Which choice best corrects the underlined portion?`,
        options: ["ago, he runs a (NO CHANGE)", "ago, running a", "ago, he will run a", "ago, he ran a"],
        answer: 3,
        explanation: "The sentence is set in the past ('came', 'two generations ago'). The verb must be in simple past tense: 'he ran a small factory'. 'Runs' (present) is incorrect. Answer: D.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 4,
        text: `This mountain began as a resort that will attract famous international visitors to its spa and hotel.

Which choice best corrects the underlined portion?`,
        options: ["will attract (NO CHANGE)", "attracts", "is attracting", "once attracted"],
        answer: 3,
        explanation: "Since the sentence uses 'began' (simple past), the relative clause describing what the resort did must also be in the past tense. 'Once attracted' correctly places the attraction in the past. Answer: D.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 5,
        text: `This wolf has not only learned to howl on cue, but also will jump over fences.

Which choice best corrects the underlined portion?`,
        options: ["will jump (NO CHANGE)", "jumping", "has jumped", "to jump"],
        answer: 2,
        explanation: "Parallel structure with 'has not only learned' requires the same present perfect tense: 'has also jumped'. 'Has jumped' maintains parallelism. Answer: C.",
        topic: "Parallel Structure / Verb Forms"
    },
    {
        id: 6,
        text: `Lizards rustled through the grass as we hiked up the hills of the wild island.

Which choice best corrects the underlined portion?`,
        options: ["Lizards rustled (NO CHANGE)", "Lizards rustling", "Lizards are rustling", "Lizards will rustle"],
        answer: 0,
        explanation: "'Rustled' (simple past) correctly matches 'hiked' (simple past). Both actions happened simultaneously in the past. NO CHANGE. Answer: A.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 7,
        text: `Someday we went to the North Pole to be like our favorite adventurers of olden days.

Which choice best corrects the underlined portion?`,
        options: ["we went to the (NO CHANGE)", "we will go to", "we had gone to", "we have gone"],
        answer: 1,
        explanation: "'Someday' signals a future intention, not a past action. 'We will go to the North Pole someday' is the correct future tense. Answer: B.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 8,
        text: `Having a computer allowed you to view more free entertainment than even a king and queen of a hundred years ago.

Which choice best corrects the underlined portion?`,
        options: ["allowed you (NO CHANGE)", "allows you", "allowing you", "is allowing you"],
        answer: 0,
        explanation: "The sentence compares the modern experience ('having a computer') to the past ('a hundred years ago'), using the simple past 'allowed'. This is correct and consistent. NO CHANGE. Answer: A.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 9,
        text: `Since I've studied hard for medical school for years, I believed I would become a doctor.

Which choice best corrects the underlined portion?`,
        options: ["believed I would become (NO CHANGE)", "believed I will become", "believe I can become", "would become"],
        answer: 2,
        explanation: "The present perfect 'I've studied' establishes an ongoing, present-relevant action. The main clause should match with present tense: 'I believe I can become a doctor'. Answer: C.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 10,
        text: `The oceans will have rose from their ancient levels to their present-day levels because of powerful natural forces.

Which choice best corrects the underlined portion?`,
        options: ["will have rose from (NO CHANGE)", "will be rising", "rose from", "will rise"],
        answer: 2,
        explanation: "The sentence describes a completed change from 'ancient levels to their present-day levels'. Therefore, the simple past tense 'rose from' is the only logical and grammatically correct choice. Answer: C.",
        topic: "Irregular Verb Forms"
    },
    // ── Section 2: Verb Tense (5-option format, Set A) ──
    {
        id: 11,
        text: `While online tutorials make learning convenient and accessible, teachers hold students accountable in a way that promotes action and retention.

Which choice best corrects the underlined portion?`,
        options: ["hold (NO CHANGE)", "held", "had held", "holding"],
        answer: 0,
        explanation: "The sentence uses the present tense 'make' in the first clause. The second clause must maintain present tense consistency: 'teachers hold'. NO CHANGE. Answer: A.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 12,
        text: `Before he was finally caught and condemned as a blood doping cheater during his Tour de France victories, Lance Armstrong has been at the top of the cycling world for over ten years.

Which choice best corrects the underlined portion?`,
        options: ["has been (NO CHANGE)", "will have been", "had been", "is"],
        answer: 2,
        explanation: "The action of being at the top of the cycling world happened before he was caught (also a past event). The past perfect 'had been' is required to show an action that was completed before another past action. Answer: C.",
        topic: "Past Perfect Tense"
    },
    {
        id: 13,
        text: `Until internet browsers were standardized across all computing platforms, each programmer had to refer to different guidelines, each presenting the requirements according to a specific browser.

Which choice best corrects the underlined portion?`,
        options: ["had (NO CHANGE)", "has", "will have", "having"],
        answer: 0,
        explanation: "The sentence describes a past condition ('until browsers were standardized'). The past tense 'had to refer' correctly describes what programmers did in the past. NO CHANGE. Answer: A.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 14,
        text: `Ronny Stravinsky did not amass his fortune quietly; he had been suing competitors for over twenty years before he will finally close his legal office.

Which choice best corrects the underlined portion?`,
        options: ["will finally close (NO CHANGE)", "finally closed", "finally closes", "had closed finally"],
        answer: 1,
        explanation: "The sequence is entirely in the past: 'did not amass', 'had been suing'. The closing of the office is a past event that followed the suing, so 'finally closed' (simple past) is correct. Answer: B.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 15,
        text: `Performing on the streets, I sing popular pop songs at the same time my partner can play the guitar in the back.

Which choice best corrects the underlined portion?`,
        options: ["can play (NO CHANGE)", "played", "had played", "plays"],
        answer: 3,
        explanation: "The main clause uses the simple present 'sing'. The parallel clause describing the partner's simultaneous action should also use simple present: 'plays'. 'Can play' adds unnecessary modal nuance. Answer: D.",
        topic: "Verb Tense Consistency"
    },
    // ── Section 3: Verb Tense (5-option format, Set B) ──
    {
        id: 16,
        text: `If the books have been cataloged last week, why haven't they been placed on the shelf?

Which choice best corrects the underlined portion?`,
        options: ["have been cataloged (NO CHANGE)", "would have been cataloged", "was cataloged", "were cataloged", "had been cataloged"],
        answer: 3,
        explanation: "'Last week' specifies a definite past time. The present perfect ('have been') cannot be used with a specific past time marker. The simple past 'were cataloged' is correct with 'last week'. Answer: D.",
        topic: "Present Perfect vs. Simple Past"
    },
    {
        id: 17,
        text: `Jessica Mitford wrote The American Way of Death, a best-selling book that led eventually to an official investigation of the funeral industry.

Which choice best corrects the underlined portion?`,
        options: ["that led eventually (NO CHANGE)", "that had led eventually", "that eventually led", "which eventually led", "who eventually led"],
        answer: 2,
        explanation: "Adverbs like 'eventually' should be placed close to the verb they modify. 'That eventually led' places 'eventually' correctly before the verb. 'Which' vs 'that' — restrictive clauses use 'that'. Answer: C.",
        topic: "Verb Forms / Word Order"
    },
    {
        id: 18,
        text: `Sabotage came from the French saboter, which means "to clatter with wooden shoes (sabots)."

Which choice best corrects the underlined portion?`,
        options: ["which means \"to (NO CHANGE)", "which means, \"to", "that means \"to", "that means-\"to", "that means, \"to"],
        answer: 0,
        explanation: "'Which means' correctly introduces a non-restrictive relative clause explaining the French word. The quotation mark immediately follows 'to' without a comma. NO CHANGE. Answer: A.",
        topic: "Verb Forms / Relative Clauses"
    },
    {
        id: 19,
        text: `When studying an assignment, it is wise to read it over quickly at first, than see the major points, and finally outline the material.

Which choice best corrects the underlined portion?`,
        options: ["first, than (NO CHANGE)", "first: then", "first-then", "first, then", "first-than"],
        answer: 3,
        explanation: "'Than' is used for comparisons; 'then' is used to show sequence ('first... then... finally'). 'First, then' with a comma correctly sequences the steps. Answer: D.",
        topic: "Verb Forms / Word Choice"
    },
    {
        id: 20,
        text: `To judge the Tidy City contest, we picked an uninterested party.

Which choice best corrects the underlined portion?`,
        options: ["picked an uninterested party. (NO CHANGE)", "picked an interested party!", "picked a disinterested party.", "are in the process of picking an uninterested party.", "picked an disinterested party."],
        answer: 2,
        explanation: "'Uninterested' means lacking interest or bored. 'Disinterested' means impartial or unbiased — which is what you want in a judge. 'Picked a disinterested party' is the correct word choice. Answer: C.",
        topic: "Verb Forms / Word Choice"
    },
    {
        id: 21,
        text: `Linda decides they had better scram before the killers find them.

Which choice best corrects the underlined portion?`,
        options: ["had better scram (NO CHANGE)", "had better leave", "should hurry and scram", "could hurry and leave", "had better get out"],
        answer: 0,
        explanation: "'Had better scram' is an idiomatic expression using 'had better' + base verb to express urgency. It is grammatically correct in this context. NO CHANGE. Answer: A.",
        topic: "Verb Forms (Modal / Idiomatic)"
    },
    {
        id: 22,
        text: `I really dug the character of Brutus.

Which choice best corrects the underlined portion?`,
        options: ["dug (NO CHANGE)", "thought about", "thought of", "admired", "gazed at"],
        answer: 0,
        explanation: "'Dug' is informal slang for 'liked' or 'appreciated'. In context, it is an acceptable informal verb expressing admiration. NO CHANGE. Answer: A.",
        topic: "Verb Forms / Register"
    },
    {
        id: 23,
        text: `Once upon a time, a small person named Little Red Riding Hood initiated plans for the preparation, delivery and transportation of foodstuffs to her Grandmother.

Which choice best corrects the underlined portion?`,
        options: ["and transportation of foodstuffs to her Grandmother. (NO CHANGE)", "and transportation of food stuffs to her Grandmother.", "and transportation of food supplies to her Grandmother.", "and transportation of foodstuffs to her grandmother.", "and, transportation of food supplies to her grand mother."],
        answer: 3,
        explanation: "'Grandmother' when used as a title without a name is typically not capitalized (unless it substitutes for a proper name). 'Her grandmother' with a lowercase 'g' is the standard convention here. Answer: D.",
        topic: "Verb Forms / Conventions"
    },
    {
        id: 24,
        text: `The setting of a story effects the story's plot.

Which choice best corrects the underlined portion?`,
        options: ["effects the story's plot. (NO CHANGE)", "effects the stories plot.", "affect the story's plot.", "affects the story's plot.", "affects the story's plots."],
        answer: 3,
        explanation: "'Effect' is typically a noun; 'affect' is the verb meaning to influence. Since we need a verb here, 'affects' (third person singular present) is correct. Answer: D.",
        topic: "Verb Forms / Word Choice (Affect vs Effect)"
    },
    {
        id: 25,
        text: `Arctic trees are scrubbiest than trees in milder climates.

Which choice best corrects the underlined portion?`,
        options: ["scrubbiest than trees (NO CHANGE)", "scrubbier then trees", "scrubbiest than are trees", "scrubbier than are trees", "scrubbier than trees"],
        answer: 4,
        explanation: "When comparing two things (Arctic trees vs. trees in milder climates), the comparative form '-er' is used, not the superlative '-est'. Also, 'than' (not 'then') is used in comparisons. 'Scrubbier than trees' is correct. Answer: E.",
        topic: "Adjective/Verb Forms (Comparative)"
    },
    // ── Section 4: Verb Tense (5-option format, Set C) ──
    {
        id: 26,
        text: `Quebec rises in a magnificent way above the St. Lawrence River.

Which choice best corrects the underlined portion?`,
        options: ["rises in a magnificent way above (NO CHANGE)", "rises in a magnificent way, way above", "rises magnificently above", "rises magnificently way above", "is raised in a magnificent way above"],
        answer: 2,
        explanation: "'Rises in a magnificent way above' is wordy. The adverb 'magnificently' replaces 'in a magnificent way' more concisely. 'Rises magnificently above' is clear, concise, and correct. Answer: C.",
        topic: "Verb Forms / Conciseness"
    },
    {
        id: 27,
        text: `Someone gives the school gerbils every year.

Which choice best corrects the underlined portion?`,
        options: ["Someone gives the school gerbils (NO CHANGE)", "Some one gives the school gerbils", "Some one gives the School gerbils", "There is a person that gives the school gerbils", "An individual gave gerbils"],
        answer: 0,
        explanation: "'Someone gives the school gerbils every year' is grammatically correct. 'Someone' is one word, the verb 'gives' agrees with the singular subject, and the meaning is clear. NO CHANGE. Answer: A.",
        topic: "Verb Agreement"
    },
    {
        id: 28,
        text: `During colonial days, a school room looked rather empty.

Which choice best corrects the underlined portion?`,
        options: ["colonial days, a school room looked (NO CHANGE)", "colonial days, a schoolroom looked", "colonial days; a schoolroom looked", "colonial days; a school room looked", "colonial days-a schoolroom looked"],
        answer: 1,
        explanation: "'Schoolroom' is a single compound word, not two separate words. 'A schoolroom looked' with the correct compound noun is the proper form. Answer: B.",
        topic: "Verb Forms / Compound Words"
    },
    {
        id: 29,
        text: `The helium-filled balloon rose in the air.

Which choice best corrects the underlined portion?`,
        options: ["rose in the air. (NO CHANGE)", "was rising in the air.", "was in the air.", "rose into the air.", "would rise in the air."],
        answer: 3,
        explanation: "'Rose in the air' is slightly imprecise — 'in' implies the balloon was already in the air. 'Rose into the air' correctly shows movement from ground to air using the directional preposition 'into'. Answer: D.",
        topic: "Verb Forms / Preposition"
    },
    {
        id: 30,
        text: `If I had the address, I would have delivered the package myself.

Which choice best corrects the underlined portion?`,
        options: ["had the address, (NO CHANGE)", "had the address;", "had the address-", "had had the address;", "had had the address,"],
        answer: 4,
        explanation: "In a third conditional sentence (unreal past), the 'if' clause requires the past perfect: 'If I had had the address, I would have delivered...' The comma correctly follows the if-clause. Answer: E.",
        topic: "Conditional / Past Perfect"
    },
    {
        id: 31,
        text: `Do you know that these gloves have lay on the bureau all week?

Which choice best corrects the underlined portion?`,
        options: ["have lay on (NO CHANGE)", "have laid on", "would lie on", "had laid on", "have lain on"],
        answer: 4,
        explanation: "'Lie' (to recline) has the past participle 'lain'. The present perfect of 'lie' is 'have lain'. 'Lay' is the simple past of 'lie' or the base form of 'lay' (to place), which is incorrect here. Answer: E.",
        topic: "Irregular Verb Forms (Lie/Lay)"
    },
    {
        id: 32,
        text: `If I would have known about the team tryouts, I would have signed up for them.

Which choice best corrects the underlined portion?`,
        options: ["would have known (NO CHANGE)", "had known", "could of known", "had been told", "could have been told"],
        answer: 1,
        explanation: "In a third conditional ('if' clause + 'would have'), the 'if' clause must use past perfect ('had known'), not 'would have known'. 'If I had known' is the grammatically correct form. Answer: B.",
        topic: "Conditional / Past Perfect"
    },
    {
        id: 33,
        text: `If he would have revised his first draft, he would have received a better grade.

Which choice best corrects the underlined portion?`,
        options: ["would have revised (NO CHANGE)", "had revised", "could of revised", "had of revised", "would revise"],
        answer: 1,
        explanation: "Same rule as above: in a third conditional, the 'if' clause requires past perfect ('had revised'), not 'would have revised'. Answer: B.",
        topic: "Conditional / Past Perfect"
    },
    {
        id: 34,
        text: `Valarie claims that cats made the best pets.

Which choice best corrects the underlined portion?`,
        options: ["made the best pets. (NO CHANGE)", "could be the best pets.", "are the best pets.", "make of the best pets.", "make the best pets."],
        answer: 4,
        explanation: "Valarie 'claims' (present tense) is reporting a current belief. The present tense 'make' is consistent with the present tense reporting verb 'claims'. Answer: E.",
        topic: "Verb Tense Consistency"
    },
    {
        id: 35,
        text: `By next month, Ms. Jones will be Mayor of Tallahassee for two years.

Which choice best corrects the underlined portion?`,
        options: ["will be Mayor of Tallahassee (NO CHANGE)", "will have been Mayor of Tallahassee", "will be mayor of Tallahassee", "will have been mayor of Tallahassee", "could have been mayor of Tallahassee"],
        answer: 3,
        explanation: "'By next month' signals a future deadline, requiring the future perfect tense to show completion of an action by that future point: 'will have been'. Also, 'mayor' used as a title without the person's name is typically lowercase. Answer: D.",
        topic: "Future Perfect Tense"
    }
];

const TOPIC_MAP = {
    'Verbs': {
        name: 'Verbs',
        questions: QUESTIONS.map(q => q.id)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, TOPIC_MAP };
}