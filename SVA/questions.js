// =============================================
// Digital SAT – Topic: Subject-Verb Agreement
// questions.js
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "The number of new bands from my hometown of Austin are astonishing when you consider that the city used to be much smaller than it is today.\n\nWhich choice is correct?",
    "options": [
      "are astonishing (NO CHANGE)",
      "were astonishing",
      "is astonishing",
      "astonish"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The subject is 'The number' (singular), not 'bands'. 'The number of...' always takes a singular verb. So the correct verb is 'is astonishing'.",
    "topic": "The number of / A number of"
  },
  {
    "id": 2,
    "text": "Both the egg and the eggplant, which have little in common with one another, is very versatile when it comes to preparing a home-cooked meal for your family.\n\nWhich choice is correct?",
    "options": [
      "is very (NO CHANGE)",
      "are very",
      "they are very",
      "was very"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is 'Both the egg and the eggplant' — a compound subject joined by 'and', which requires a plural verb. 'Are very' is correct. The relative clause 'which have little in common' does not affect the subject.",
    "topic": "Compound Subjects"
  },
  {
    "id": 3,
    "text": "Sitting on the couch and watching TV was the best ways that Eric knew how to pass the time; unfortunately, he couldn't pass 11th grade.\n\nWhich choice is correct?",
    "options": [
      "Sitting on the couch and watching TV was (NO CHANGE)",
      "Sitting on the couch, watching TV, were",
      "Sitting on the couch and watching TV were",
      "To sit on the couch and watching TV were"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The subject is 'Sitting on the couch and watching TV' — two gerund phrases joined by 'and', making a compound subject that requires a plural verb 'were'. Also, the complement 'the best ways' (plural) confirms plurality.",
    "topic": "Gerund Phrases as Subjects"
  },
  {
    "id": 4,
    "text": "Arching their backs and hissing is a behavior common to many felines when they feel that their safety is threatened.\n\nWhich choice is correct?",
    "options": [
      "Arching their backs and hissing is a behavior (NO CHANGE)",
      "hissing are a behavior",
      "hissing, behaviors",
      "hissing are behaviors"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Arching their backs and hissing' describes a single combined behavior, so it takes the singular verb 'is'. The complement 'a behavior' (singular) also supports this. NO CHANGE is correct.",
    "topic": "Gerund Phrases as Subjects"
  },
  {
    "id": 5,
    "text": "According to my friend, a coin collector, a number of people are seeking Liberty Head nickels minted in 1883.\n\nWhich choice is correct?",
    "options": [
      "a number of people are seeking Liberty Head nickels (NO CHANGE)",
      "a number of people is seeking Liberty Head nickels",
      "Liberty Head nickels are being sought by a number of people, they were",
      "Liberty Head nickels are sought by a number of people"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'A number of' (as opposed to 'the number of') means 'several' and takes a plural verb. 'A number of people are seeking' is correct. NO CHANGE is the right answer.",
    "topic": "The number of / A number of"
  },
  {
    "id": 6,
    "text": "There is more than two decades left until the next major earthquake is expected to shake California.\n\nWhich choice is correct?",
    "options": [
      "There is (NO CHANGE)",
      "There have been",
      "There are",
      "It has"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In sentences beginning with 'There', the verb must agree with the true subject that follows. The true subject is 'more than two decades' (plural), so the verb must be plural: 'There are'.",
    "topic": "Inverted Sentences (There is/are)"
  },
  {
    "id": 7,
    "text": "Two writers in the USA, with unbelievable audacity, were claiming to write a thousand books a year by working as a team and barely sleeping.\n\nWhich choice is correct?",
    "options": [
      "were claiming (NO CHANGE)",
      "is claiming",
      "was claiming",
      "has been claiming"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The subject is 'Two writers' (plural). The prepositional phrase 'with unbelievable audacity' is a modifier and does not change the subject. 'Were claiming' correctly agrees with the plural subject. NO CHANGE is correct.",
    "topic": "Intervening Phrases"
  },
  {
    "id": 8,
    "text": "Since news of the bankruptcy came suddenly, the entire company are clearing out their desks immediately.\n\nWhich choice is correct?",
    "options": [
      "the entire company are clearing out their desks (NO CHANGE)",
      "everyone in the company are clearing out their desks",
      "everyone in the company is clearing out his or her desk",
      "the entire company is clearing out their desk"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Everyone' is an indefinite pronoun that always takes a singular verb ('is'). The pronoun reference should also be singular ('his or her desk'). 'Everyone in the company is clearing out his or her desk' is correct.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 9,
    "text": "The school of fish, hiding among the jagged coral, were easily seen by the hammerhead shark, despite the gloomy camouflage of the surroundings.\n\nWhich choice is correct?",
    "options": [
      "were easily seen (NO CHANGE)",
      "seen",
      "are easily seen",
      "was easily seen"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The subject is 'The school' (singular collective noun). A school of fish acts as a single unit, so the singular verb 'was' is required. 'Was easily seen' is correct.",
    "topic": "Collective Nouns"
  },
  {
    "id": 10,
    "text": "Philip Ferdinand's debt, which grew rapidly as he spent frivolously on extravagant luxuries, were what ruined him in the end.\n\nWhich choice is correct?",
    "options": [
      "were what ruined him in the end. (NO CHANGE)",
      "was what ruined him in the end.",
      "and ruined him in the end.",
      "ruining him in the end."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is 'debt' (singular). The relative clause 'which grew rapidly...' is a modifier. The main verb must agree with the singular subject 'debt'. 'Was what ruined him' is correct.",
    "topic": "Intervening Clauses"
  },
  {
    "id": 11,
    "text": "The vote of the American people, who turned out in record numbers, demonstrate that our nation longs for more honest politicians to take office.\n\nWhich choice is correct?",
    "options": [
      "numbers, demonstrate (NO CHANGE)",
      "numbers, demonstrates",
      "numbers demonstrates",
      "numbers which demonstrate"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is 'The vote' (singular). The modifying clause 'of the American people, who turned out in record numbers' does not change the subject. The singular verb 'demonstrates' is required. A comma before 'demonstrates' correctly follows the modifying clause.",
    "topic": "Intervening Clauses"
  },
  {
    "id": 12,
    "text": "Pham Tuyen's compositions, many of which praise Vietnamese Communism, is proof that music can simultaneously be art and propaganda.\n\nWhich choice is correct?",
    "options": [
      "Communism, is proof that music can simultaneously be (NO CHANGE)",
      "Communism, are proof that music can at the same time simultaneously be",
      "Communism, and music can simultaneously be",
      "Communism, are proof that music can be both"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The subject is 'compositions' (plural). The verb must be plural: 'are proof'. Also, 'simultaneously' already means 'at the same time', so 'at the same time simultaneously' (B) is redundant. 'Are proof that music can be both' is concise and correct.",
    "topic": "Intervening Clauses"
  },
  {
    "id": 13,
    "text": "The field of ceramics, which some laypeople simply call \"pottery,\" are wide and varied in application.\n\nWhich choice is correct?",
    "options": [
      "are wide and varied (NO CHANGE)",
      "is wide and varied",
      "were wide and varied",
      "and is wide and varied"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is 'The field' (singular). The clause 'which some laypeople simply call pottery' is a non-restrictive modifier and does not affect agreement. The singular verb 'is' is required.",
    "topic": "Intervening Clauses"
  },
  {
    "id": 14,
    "text": "The use of various drinking vessels for different dining situations are a commonly accepted practice across many world cultures.\n\nWhich choice is correct?",
    "options": [
      "dining situations are (NO CHANGE)",
      "dining situations were",
      "dining situations is",
      "dining situations being"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The subject is 'The use' (singular). The prepositional phrase 'of various drinking vessels for different dining situations' is a modifier. The singular verb 'is' is required.",
    "topic": "Intervening Phrases"
  },
  {
    "id": 15,
    "text": "My parents always told me that going to the horse races are something to experience at least once in your life.\n\nWhich choice is correct?",
    "options": [
      "are something to experience at least once in your life. (NO CHANGE)",
      "are something that one should experience at least once in your life.",
      "is something to experience at least once in your life.",
      "is something one's life should experience at least once."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The subject is the gerund phrase 'going to the horse races', which is singular and takes the singular verb 'is'. Choice C is correct and maintains consistent pronoun use with 'your'.",
    "topic": "Gerund Phrases as Subjects"
  },
  {
    "id": 16,
    "text": "Neither smoking nor drinking alcoholic beverages are good for your long-term health.\n\nWhich choice is correct?",
    "options": [
      "Neither smoking nor drinking alcoholic beverages are (NO CHANGE)",
      "to smoke nor drinking alcoholic beverages is",
      "smoking nor to drink alcoholic beverages are",
      "smoking nor drinking alcoholic beverages is"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. With 'neither...nor', the verb agrees with the subject closest to the verb. 'Drinking alcoholic beverages' is closest and is singular (a gerund phrase), so the verb must be singular: 'is'. Also, parallel structure requires both to be gerunds: 'smoking' and 'drinking'.",
    "topic": "Neither...Nor / Either...Or"
  },
  {
    "id": 17,
    "text": "Down the wildflower-covered mountain runs the trickle of snowmelt and the roaring river that ends in a foaming waterfall.\n\nWhich choice is correct?",
    "options": [
      "mountain runs the trickle (NO CHANGE)",
      "mountain run the trickle",
      "mountain, the trickle",
      "mountain, runs the trickle"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. This is an inverted sentence. The true subject comes after the verb: 'the trickle of snowmelt and the roaring river' — a compound subject (plural). The verb must be plural: 'run'.",
    "topic": "Inverted Sentences (There is/are)"
  },
  {
    "id": 18,
    "text": "The condensation that forms on cold glasses has long been of interest to young scientists.\n\nWhich choice is correct?",
    "options": [
      "glasses has (NO CHANGE)",
      "glasses have",
      "glasses having",
      "glasses are"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The subject is 'The condensation' (singular). The relative clause 'that forms on cold glasses' modifies 'condensation' but does not change the subject. The singular verb 'has' is correct. NO CHANGE.",
    "topic": "Intervening Clauses"
  },
  {
    "id": 19,
    "text": "Although both of the campers saw the mountain lion, neither are going to report the sighting to their counselors, since leaving the main trail is against camp rules.\n\nWhich choice is correct?",
    "options": [
      "lion, neither are going (NO CHANGE)",
      "lion but neither is going",
      "lion but neither are going",
      "lion, neither is going"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Neither' as a pronoun is always singular and takes a singular verb. 'Neither is going' is correct. The original clause is separated from the preceding clause by a comma (not 'but'), so the comma should be retained.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 20,
    "text": "Only one in five doctors agrees that health is more a matter of good genetics than of a balanced approach to eating and exercise.\n\nWhich choice is correct?",
    "options": [
      "five doctors agrees (NO CHANGE)",
      "five doctors agree",
      "five doctors have agreed",
      "five doctors are in agreement"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The subject is 'one' (singular), not 'doctors'. 'One in five doctors' means one person out of five, so the singular verb 'agrees' is correct. NO CHANGE.",
    "topic": "Fractional Expressions"
  },
  {
    "id": 21,
    "text": "The collection of note shapes in written music from the 1400s are significantly different in appearance from the collection of note shapes in modern notation.\n\nWhich choice is correct?",
    "options": [
      "The collection of note shapes in written music from the 1400s are significantly different in appearance from the collection of note shapes in modern notation. (NO CHANGE)",
      "The collection of note shapes in written music from the 1400s are, in appearance, significantly different from modern notation.",
      "The collection from the 1400s of note shapes in written music appearing significantly different from modern notation.",
      "Significantly different in appearance from the collection of note shapes in modern notation is the collection of note shapes in written music from the 1400s."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The subject is 'The collection' (singular), which requires a singular verb 'is'. Choice D inverts the sentence but correctly uses the singular 'is' to agree with the singular subject 'the collection'. It is also the most grammatically complete and clear.",
    "topic": "Intervening Phrases"
  },
  {
    "id": 22,
    "text": "Without proper funding and a better campaign strategy, there is no chances that our candidate will be elected to office.\n\nWhich choice is correct?",
    "options": [
      "there is no chances that",
      "there can be no chance for",
      "there is no chance that",
      "there are no chances for"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Chance' (singular) takes the singular verb 'is'. 'No chances' is also grammatically awkward here since 'chance' is used in the abstract singular sense. 'There is no chance that' is correct.",
    "topic": "Inverted Sentences (There is/are)"
  },
  {
    "id": 23,
    "text": "Following intense debate, the faculty has approved the measure to increase class size by 15% over the next four years.\n\nWhich choice is correct?",
    "options": [
      "the faculty has approved the measure to increase",
      "the faculty has approved the measure and increased",
      "the faculty have approved the measure to increase",
      "the faculty have given their approval to the measure to increase"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Faculty' is a collective noun that, in American English, is treated as singular and takes a singular verb 'has'. 'The faculty has approved the measure to increase' is correct. NO CHANGE.",
    "topic": "Collective Nouns"
  },
  {
    "id": 24,
    "text": "The number of students chosen for the prestigious medical internship have more than doubled in the past fifteen years.\n\nWhich choice is correct?",
    "options": [
      "have more than doubled",
      "have been more than doubling",
      "has more than doubled",
      "has been more than doubling"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'The number of' always takes a singular verb. The subject is 'The number' (singular), so 'has more than doubled' is correct.",
    "topic": "The number of / A number of"
  },
  {
    "id": 25,
    "text": "Recently, hopes that the European Central Bank will reach a deal to help Spain and Italy borrow at cheaper rates has nudged financial markets higher.\n\nWhich choice is correct?",
    "options": [
      "Spain and Italy borrow at cheaper rates has nudged financial markets higher",
      "Spain and Italy borrow at cheaper rates have nudged financial markets to higher levels",
      "Spain and Italy borrow at cheaper rates has nudged financial markets to higher levels",
      "Spain and Italy borrow at cheaper rates nudged financial markets to higher levels"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is 'hopes' (plural). The long relative clause 'that the European Central Bank will reach a deal to help Spain and Italy borrow at cheaper rates' modifies 'hopes' but does not change its plurality. The plural verb 'have nudged' is required.",
    "topic": "Intervening Clauses"
  },
  {
    "id": 26,
    "text": "The three friends, Max included, was supposed to meet for dinner later that night.\n\nWhich choice is correct?",
    "options": [
      "was supposed to meet",
      "was supposed to have met",
      "were suppose to be meeting",
      "were supposed to meet"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The subject is 'The three friends' (plural). 'Max included' is a parenthetical that doesn't affect the subject. The plural verb 'were supposed to meet' is correct.",
    "topic": "Intervening Phrases"
  },
  {
    "id": 27,
    "text": "A higher interest rate is only one of the factors, albeit an important one, that keeps the housing market from spiraling out of control, like it did earlier in the decade.\n\nWhich choice is correct?",
    "options": [
      "keeps the housing market from spiraling out of control, like it did",
      "keep the housing market from spiraling out of control, as it did",
      "keeps the housing market from spiraling out of control, as it did",
      "keep the housing market from spiraling out of control, like"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The relative clause 'that keep...' refers to 'the factors' (plural), so the plural verb 'keep' is needed. Also, 'like' is used as a preposition, not a conjunction — 'as it did' is grammatically correct when comparing clauses.",
    "topic": "Intervening Clauses"
  },
  {
    "id": 28,
    "text": "The Daughters of the American Revolution, a volunteer service organization, admits as members only women who can prove lineal descent from a patriot of the American Revolution.\n\nWhich choice is correct?",
    "options": [
      "admits as members only women who can prove lineal descent",
      "admit as members only women who can prove lineal descent",
      "admits as members women who can prove lineal descent",
      "only admit as members women who can prove lineal descent"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'The Daughters of the American Revolution' is the name of a single organization (collective), treated as singular in this context. 'Admits' is the correct singular verb. The phrase 'only women' must come before 'who can prove' for clarity. NO CHANGE is correct.",
    "topic": "Collective Nouns"
  },
  {
    "id": 29,
    "text": "Some members of the tribe has been protesting the recent passage of hunting laws applying to indigenous populations.\n\nWhich choice is correct?",
    "options": [
      "members of the tribe has been protesting",
      "members of the tribe have been protesting",
      "tribe members has been protesting",
      "tribe members will have been protesting"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is 'Some members' (plural). 'Of the tribe' is a prepositional phrase that does not change the subject. The plural verb 'have been protesting' is required.",
    "topic": "Intervening Phrases"
  },
  {
    "id": 30,
    "text": "After she attended the career fair, many more resources were at Philippa's disposal, including job boards, new contacts, and numerous books and pamphlets to help her improve her resume and cover letter.\n\nWhich choice is correct?",
    "options": [
      "many more resources were at Philippa's disposal",
      "at Philippa's disposal were many more resources",
      "there were many more resources at Philippa's disposal",
      "Philippa had many more resources at her disposal"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The introductory clause 'After she attended the career fair' has 'she' as its subject referring to Philippa. To avoid a dangling modifier, the main clause must also have Philippa (or a pronoun referring to her) as the subject. 'Philippa had many more resources at her disposal' correctly makes Philippa the subject.",
    "topic": "Subject Agreement and Modifiers"
  },
  {
    "id": 31,
    "text": "The results of the study clearly indicates a reduction in the number of useable pounds that can be salvaged from an average ton of recyclable goods.\n\nWhich choice is correct?",
    "options": [
      "indicates a reduction",
      "indicates that a reduction",
      "indicating a reducing",
      "indicate a reduction"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The subject is 'The results' (plural). 'Of the study' is a prepositional phrase that doesn't change the subject. The plural verb 'indicate' is required. Also, 'reduction' (noun) is correct, not 'reducing' (gerund/participle). Answer: D (indicate a reduction).",
    "topic": "Intervening Phrases"
  },
  {
    "id": 32,
    "text": "The president of Costa Rica, along with two vice presidents, are elected for a four-year term by the people.\n\nWhich choice is correct?",
    "options": [
      "are elected for a four-year term by the people",
      "are elected, by the people, for a four-year term",
      "is elected for a four-year term by the people",
      "are elected for four-year terms by the people"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The subject is 'The president' (singular). 'Along with two vice presidents' is a parenthetical phrase (not a compound subject with 'and'), so it does not make the subject plural. The singular verb 'is elected' is correct.",
    "topic": "Intervening Phrases"
  },
  {
    "id": 33,
    "text": "The Egyptian Museum in Cairo, which contains 120,000 objects from prehistoric times through the Greco-Roman period, are home to one of the most impressive collections of ancient Egyptian artifacts.\n\nWhich choice is correct?",
    "options": [
      "which contains 120,000 objects from prehistoric times through the Greco-Roman period, are home to",
      "which contain 120,000 objects from prehistoric times through the Greco-Roman period, are home to",
      "containing 120,000 objects from prehistoric times through the Greco-Roman period, are home to",
      "which is containing 120,000 objects from prehistoric times through the Greco-Roman period, are home to",
      "which contains 120,000 objects from prehistoric times through the Greco-Roman period, is home to"
    ],
    "answer": 4,
    "explanation": "The subject is 'The Egyptian Museum' (singular). The relative clause 'which contains 120,000 objects...' correctly uses singular 'contains' to agree with 'Museum'. The main verb must also be singular: 'is home to'. Answer: E.",
    "topic": "Intervening Clauses"
  },
  {
    "id": 34,
    "text": "A number of colorful glass vases were displayed in the store window.\n\nWhich choice is correct?",
    "options": [
      "were displayed in the store window",
      "was displaying in the store window",
      "was displayed in the store window",
      "displayed in the store window"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'A number of' means 'several' and takes a plural verb. 'A number of colorful glass vases were displayed' is correct. NO CHANGE.",
    "topic": "The number of / A number of"
  },
  {
    "id": 35,
    "text": "Neither of our school's students nominated for the national spelling bee were able to win the competition.\n\nWhich choice is correct?",
    "options": [
      "Neither of our school's students nominated for the national spelling bee were",
      "Neither of our school's students nominated for the national spelling bee was",
      "Neither of the students from our school nominated for the national spelling bee were",
      "Neither of the students nominated for the national spelling bee from our school were",
      "Neither one of our school's students who was nominated for the national spelling bee was"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Neither' is an indefinite pronoun that is always singular and requires the singular verb 'was'. 'Neither of our school's students nominated for the national spelling bee was able to win' is correct.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 36,
    "text": "Everybody at the party love the chocolate cake Shelley made.\n\nWhich choice is correct?",
    "options": [
      "Everybody at the party love the chocolate cake Shelley made.",
      "Everybody at the party loving the chocolate cake Shelley made.",
      "Everybody at the party loves the chocolate cake Shelley made.",
      "Everybody love the chocolate cake Shelley made at the party.",
      "Everybody loves the chocolate cake Shelley made at the party."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Everybody' is an indefinite pronoun that always takes a singular verb. 'Everybody loves' is correct. The modifier 'at the party' should stay close to 'Everybody'.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 37,
    "text": "Next to me on the bench sits two older women.\n\nWhich choice is correct?",
    "options": [
      "on the bench sits two older women",
      "on the bench sit two older women",
      "two older women sitting on the bench",
      "sit on the bench two older women"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. This is an inverted sentence. The true subject is 'two older women' (plural). In inverted sentences, the verb must agree with the true subject. 'On the bench sit two older women' uses the correct plural verb 'sit'.",
    "topic": "Inverted Sentences (There is/are)"
  },
  {
    "id": 38,
    "text": "The public are receiving the new mayor well though she was mostly unheard of prior to the election.\n\nWhich choice is correct?",
    "options": [
      "The public are receiving the new mayor well though she was",
      "The public receive the new mayor well though she was",
      "The public is receiving the new mayor well though she was",
      "The public is receiving the new mayor well though she is",
      "The public are receiving the new mayor well though she is"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In American English, 'the public' is a collective noun treated as singular, requiring 'is'. Since the mayor being unheard of is a past condition (prior to the election), the past tense 'was' is correct. 'The public is receiving the new mayor well though she was' is correct.",
    "topic": "Collective Nouns"
  },
  {
    "id": 39,
    "text": "We don't yet know whom it will be, but eventually either my brother or I are going to take over the family business.\n\nWhich choice is correct?",
    "options": [
      "either my brother or I are going to take over the family business",
      "either my brother nor I are going to take over the family business",
      "either my brother or I will be going to take over the family business",
      "either my brother or I taking over the family business",
      "either my brother or I am going to take over the family business"
    ],
    "answer": 4,
    "explanation": "With 'either...or', the verb agrees with the subject closest to it. The subject closest to the verb is 'I', which takes the verb 'am'. 'Either my brother or I am going to take over the family business' is correct. Answer: E.",
    "topic": "Neither...Nor / Either...Or"
  }
];

const TOPIC_MAP = {
    'Subject-Verb Agreement': {
        name: 'Subject-Verb Agreement',
        questions: QUESTIONS.map(q => q.id)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, TOPIC_MAP };
}