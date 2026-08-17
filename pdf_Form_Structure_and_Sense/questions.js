// =============================================
// Digital SAT Topic Practice: Form, Structure, and Sense
// 25 Questions | Standard Digital SAT Format
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Yangchen, which means \"salt city,\" is a city in China that ______ salt flats which historically have produced much of the salt used for trade in the region and now are stopping places during migrations of rare bird species.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "had",
      "has",
      "has had",
      "is having"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The simple present tense \"has\" is required because the sentence states an ongoing, permanent geographical characteristic of the city of Yangchen. Choices A, C, and D are incorrect because the past tense (\"had\"), present perfect (\"has had\"), and present progressive (\"is having\") do not appropriately express a timeless factual state.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 2,
    "text": "Meat alternatives form a multi-billion-dollar market that continues to grow. For all the pleasant flavors and ______, many consumers feel that meat cannot be adequately simulated.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "nutritional benefits",
      "they have nutritional benefits",
      "the benefits are in the nutrition",
      "also nutritional benefits as well"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The coordinating conjunction \"and\" connects parallel noun phrases (\"the pleasant flavors\" and \"nutritional benefits\"). Choices B and C are incorrect because inserting clauses violates parallelism with the preceding noun phrase. Choice D is incorrect because \"also\" and \"as well\" are redundant when paired with \"and.\"",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 3,
    "text": "Scientists are now debunking many theories about the superiority of humans over other species in the animal kingdom. For example, once considered an emotion exclusive to humans, ______\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "pilot whales and orcas have demonstrated grief over a dead calf.",
      "a dead calf has caused demonstrations of grief in pilot whales and orcas.",
      "grief has been demonstrated by pilot whales and orcas over a dead calf.",
      "pilot whales and orcas which have a dead calf will demonstrate grief."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The introductory modifying phrase \"once considered an emotion exclusive to humans\" must immediately precede the noun it modifies, which is \"grief.\" Choices A, B, and D create dangling modifiers by placing \"pilot whales and orcas\" or \"a dead calf\" directly after the modifier.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 4,
    "text": "Jane Goodall is best known for her groundbreaking research on chimpanzees in the 1960s. She demonstrated that primates not only used found objects ______ tools to complete specific tasks.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "and were making",
      "but they make",
      "but also made",
      "and also made"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The correlative conjunction \"not only\" pairs with \"but also,\" and parallel past-tense verbs (\"used... made\") are required. Choices A and D incorrectly use \"and.\" Choice B incorrectly repeats the subject and shifts to the present tense.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 5,
    "text": "In 1922, archaeologist Howard Carter discovered the tomb of the ruler known ______ Tut. Scientists still debate whether he was active and able-bodied or an invalid, since he was buried with items associated with either lifestyle, including walking sticks and chariot whips.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "familiar as",
      "familiarly as",
      "familiarity as",
      "familial as"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The adverb \"familiarly\" correctly modifies the participle \"known,\" and \"as\" correctly introduces the nickname \"Tut.\" Choices A, C, and D are incorrect because the adjective \"familiar,\" noun \"familiarity,\" and adjective \"familial\" cannot modify the verb form \"known.\"",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 6,
    "text": "Among all the grim news about coral reef bleaching, Kiribati's Line Islands have provided data stating that protecting herbivorous fish that remove algae can help damaged reefs ______\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "rebound",
      "have rebounded",
      "rebounded",
      "they rebound"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The verb \"help\" is followed by a direct object and a bare infinitive (\"help damaged reefs rebound\"). Choices B, C, and D are incorrect because conjugated past forms or clauses with unnecessary pronouns do not follow standard idiom with \"help.\"",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 7,
    "text": "Researchers at the Max Planck Institute showed videos to chimpanzees in an effort to determine the capacity for emotions such as empathy and determined that when chimpanzees are stressed, their noses, just like ______ get colder.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "humans",
      "that of humans",
      "those human's",
      "those of humans"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The sentence compares the noses of chimpanzees to the noses of humans; \"those of humans\" uses the plural pronoun \"those\" to correctly refer to \"noses.\" Choice A illogically compares noses to humans. Choice B uses singular \"that\" for plural \"noses.\" Choice C contains an erroneous apostrophe.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 8,
    "text": "Blue cheese is a general term that describes a wide variety of cheeses that have been aged with Penicillium cultures to give ______ distinct, greenish-blue spots or veins and complex flavors.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "it",
      "it's",
      "them",
      "their"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The plural objective pronoun \"them\" acts as the indirect object of the verb \"give,\" referring to the plural antecedent \"cheeses\" (\"give them distinct... spots\"). Choices A and B are singular. Choice D (\"their\") is a possessive adjective, which is ungrammatical as the indirect object of \"give.\"",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 9,
    "text": "The wood frog of North America resides north of the Arctic Circle. To survive the cold winters in hibernation, it allows its cells to freeze rather than ______ into the ground to stay warm.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "buries itself",
      "burying itself",
      "it buries itself",
      "to bury itself"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Rather than\" is followed by a gerund-participle (\"burying itself\") to express the rejected alternative action in parallel with the winter survival behavior. Choices A, C, and D do not follow standard idiom after \"rather than.\"",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 10,
    "text": "Air plants are epiphytes, which means that they live on other plants in the wild, so they ______ adequate moisture, warm temperatures, and indirect sunlight, but have no need for soil.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "require",
      "are requiring",
      "required",
      "have been requiring"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A general biological fact about air plants is expressed using the simple present tense \"require,\" which is parallel with \"have no need.\" Choices B, C, and D are incorrect because progressive or past tenses are inappropriate for permanent scientific facts.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 11,
    "text": "Tyrian purple, ______ is named after Tyre in Lebanon where it was produced, was a dye used in ancient times that was so expensive to produce that it was often referred to as imperial purple or royal purple.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "it",
      "that",
      "where",
      "which"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The nonrestrictive relative clause set off by commas requires the relative pronoun \"which\" to refer to the thing (\"Tyrian purple\"). Choice A creates a comma splice. Choice B (\"that\") cannot be used in a nonrestrictive clause set off by commas. Choice C (\"where\") incorrectly refers to a color instead of a place.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 12,
    "text": "At its height in the second century, ______ and it contained about a fourth of the world's population.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "the Roman Empire spread across three continents",
      "three continents were occupied by the Roman Empire",
      "there were three continents where the Roman Empire ruled",
      "continents under the Roman Empire numbered three"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The introductory modifier \"At its height in the second century\" must modify \"the Roman Empire,\" so the subject must immediately follow the comma. Choices B, C, and D place \"three continents\" or \"there\" after the modifier, creating a dangling modifier.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 13,
    "text": "The thorny devil lizard of Australia has copious spines to protect ______ from predators, but these hard structures also catch moisture that condenses during the hot, dry weather.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "it",
      "itself",
      "them",
      "one"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The reflexive pronoun \"itself\" is used because the subject (\"lizard\") and the object being protected are the same entity. Choice A (\"it\") would imply protecting something else. Choice C (\"them\") is plural. Choice D (\"one\") is an indefinite pronoun.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 14,
    "text": "Clap When You Land is a powerful novel for young adults by Elizabeth Acevedo. The tragic story of loss and love is based on an ______ event: the crash of an airplane that was headed from New York City to the Dominican Republic.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "actual",
      "actualize",
      "actually",
      "actuality"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The adjective \"actual\" correctly modifies the noun \"event.\" Choice B (\"actualize\") is a verb, Choice C (\"actually\") is an adverb, and Choice D (\"actuality\") is a noun, none of which can modify \"event.\"",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 15,
    "text": "Born in Okinawa in 1868, ______ though various forms of unarmed combat techniques were used for hundreds of years prior to his birth.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "credit for modern karate was given to its founder, Funakoshi Gichin,",
      "modern karate has the credit of being founded by Funakoshi Gichin,",
      "the founding of modern karate is credited to Funakoshi Gichin,",
      "Funakoshi Gichin is credited with being the founder of modern karate,"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The introductory modifier \"Born in Okinawa in 1868\" describes the person Funakoshi Gichin, who must be the subject immediately following the comma. Choices A, B, and C place \"credit,\" \"modern karate,\" or \"the founding\" after the comma, resulting in dangling modifiers.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 16,
    "text": "Called the \"King of Country,\" musician George ______ have sold over 120 million copies worldwide, making him one of the top-selling recording artists of all time.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "Straits records",
      "Strait's records",
      "records'",
      "Straits record's"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The singular possessive \"Strait's\" correctly indicates that the records belong to George Strait. Choices A and D lack proper singular possessive apostrophe placement. Choice C omits the artist's surname entirely.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 17,
    "text": "In Greenland, Inughuit Inuits ______ birds called \"little auks\" every summer for centuries to supplement their diets in a land covered much of the year by snow and ice.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "are harvesting",
      "have harvested",
      "will harvest",
      "harvest"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The present perfect tense \"have harvested\" is required to show an action that began in the past and continues into the present, as signaled by the duration phrase \"for centuries.\" Choices A, C, and D fail to indicate this ongoing historical timeframe.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 18,
    "text": "Black rhinoceros and white rhinoceros are basically the same color. The head helps in identifying the species: black rhinoceros heads are ______ white rhinoceros heads are.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "short as",
      "short than",
      "shorter as",
      "shorter than"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The comparative adjective \"shorter\" followed by the conjunction \"than\" correctly forms the comparison between black and white rhinoceros heads. Choices A, B, and C use incorrect comparative forms and conjunctions.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 19,
    "text": "Born on Navajo land in Arizona, Quannah Rose Chasinghorse is a Lakota Native American ______ uses her fame as a model to support activism that empowers indigenous peoples.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "who",
      "whom",
      "which",
      "she"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The relative pronoun \"who\" serves as the subject of the clause \"uses her fame...\" referring to the person Quannah Rose Chasinghorse. Choice B (\"whom\") is an objective pronoun. Choice C (\"which\") is used for non-humans. Choice D (\"she\") creates a run-on/comma splice.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 20,
    "text": "The complex mosaic patterns on the shell of a wood turtle ______ it to effectively blend in with the leaf debris scattered on the forest floor and hide from creatures that might consider it to be a good meal.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "allow",
      "allows",
      "is allowing",
      "has allowed"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The plural subject \"patterns\" requires the plural verb \"allow.\" The prepositional phrase \"on the shell of a wood turtle\" intervenes but does not change the subject's plural number. Choices B, C, and D use singular verb forms.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 21,
    "text": "Although most paleontologists agree that there was likely a massive meteorite impact in the distant past, very few attribute mass extinctions of dinosaurs to such an event. If it were true, then the extinctions ______ place over millions of years, which is what most likely happened.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "would not have taken",
      "did not take",
      "had not taken",
      "would not be taking"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In a past hypothetical/conditional structure (\"If it were true... then...\"), the past conditional \"would not have taken\" correctly expresses the hypothetical past consequence. Choices B, C, and D do not form the standard conditional construction.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 22,
    "text": "New York manufacturer Corning has developed flexible ceramics that can be made thinner than a sheet of paper, yet can withstand intense heat. Currently they ______ for use in sensors and batteries.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "had been developed",
      "have developed",
      "were developed",
      "are being developed"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The keyword \"Currently\" calls for a present progressive tense, and the passive voice \"are being developed\" is required because the ceramics are the receiver of the action. Choices A, B, and C use past or active tenses that contradict \"Currently.\"",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 23,
    "text": "Actor Bob McGrath was a long-time character on the ______ Sesame Street, but he actually started his career as a singer on a program called Sing Along with Mitch between 1960 and 1964.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "children's television series",
      "childrens' television series",
      "childrens television series'",
      "children's television series'"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The possessive noun \"children's\" correctly modifies \"television series,\" and no apostrophe is needed after \"series\" since it does not show possession. Choices B, C, and D have improper apostrophe usage.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 24,
    "text": "Although chocolate has been around in various forms for centuries, the company called J.S. Fry & Sons ______ with inventing the first chocolate candy bar in 1846.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "credits",
      "is credited",
      "are credited",
      "were credited"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The singular subject \"the company\" requires the singular passive verb \"is credited.\" Choice A is active voice (the company was credited by historians, not doing the crediting). Choices C and D use plural verbs.",
    "topic": "Form, Structure, and Sense"
  },
  {
    "id": 25,
    "text": "The okapi is an animal that has stripes similar to ______ but it is actually more closely related to a giraffe.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "a zebra",
      "that of a zebra",
      "those of a zebra",
      "zebras"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The comparison is between the okapi's \"stripes\" (plural) and the stripes of a zebra. The plural pronoun \"those\" correctly substitutes for \"stripes\" (\"those of a zebra\"). Choice A compares stripes to an animal. Choice B uses singular \"that\" for plural \"stripes.\" Choice D compares stripes to zebras.",
    "topic": "Form, Structure, and Sense"
  }
];

const TOPIC_MAP = {
  'Form, Structure, and Sense': {
    name: 'Form, Structure, and Sense',
    questions: QUESTIONS.map(q => q.id)
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
