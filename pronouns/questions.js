// =============================================
// Digital SAT – Topic: Pronouns
// questions.js | Pages 132–153
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "The tree branch banged and rattled against the window all night, and in the morning, it was in pieces.\n\nWhich choice is correct?",
    "options": [
      "it was in pieces (NO CHANGE)",
      "it is",
      "it will be",
      "the window was"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'It' is ambiguous — it could refer to the tree branch or the window. Replacing 'it' with 'the window was' clarifies which was in pieces.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 2,
    "text": "Today in our class of thirty students, two policemen burst in the door and arrested her in the middle of the classroom.\n\nWhich choice is correct?",
    "options": [
      "arrested her in (NO CHANGE)",
      "arrested him in",
      "arrested a female student in",
      "arrested a female student on"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Her' has no clear antecedent in the sentence — no female has been introduced. Replacing with 'a female student' eliminates the ambiguous pronoun.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 3,
    "text": "The Russian ambassador spoke to the President of France and the delegate from Spain, promising him that their governments could work together in the future.\n\nWhich choice is correct?",
    "options": [
      "Spain, promising him (NO CHANGE)",
      "Spain promising",
      "Spain, promising it",
      "Spain, promising both"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Him' is ambiguous — it could refer to the President of France or the delegate from Spain. 'Promising both' clarifies that the promise was made to both parties.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 4,
    "text": "Strawberry jam from the chefs at my local French restaurant is my favorite treat; they make it fresh each day in their kitchen.\n\nWhich choice is correct?",
    "options": [
      "they make it fresh (NO CHANGE)",
      "it makes it",
      "they make them",
      "the chefs make them"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'They' clearly refers to 'the chefs' introduced earlier, and 'it' refers to 'strawberry jam' (singular). The pronoun references are clear and correct. NO CHANGE.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 5,
    "text": "Cats, mice, and dogs don't always get along together - the dogs tend to chase the cats, and they tend to chase the mice.\n\nWhich choice is correct?",
    "options": [
      "they tend to chase the mice (NO CHANGE)",
      "they",
      "it tends to",
      "the cats tend to"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'They' is ambiguous — it could refer to the dogs or the cats. 'The cats tend to chase the mice' eliminates the ambiguity and makes the sentence clear.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 6,
    "text": "You may want to take an extra science, math, or language arts class, but it is technically the only official requirement for graduation.\n\nWhich choice is correct?",
    "options": [
      "but it is technically (NO CHANGE)",
      "but math is",
      "but they are",
      "and they are"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'It' is vague — referring to one of three subjects listed. Since the context implies a single subject is required, and 'math' is a common graduation requirement, 'but math is' clarifies the antecedent.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 7,
    "text": "Today I saw two calico cats, a monarch butterfly, and three fluffy dogs on the way to work, but they were my favorite animals of the morning.\n\nWhich choice is correct?",
    "options": [
      "but they were my favorite animals of the morning (NO CHANGE)",
      "but it was",
      "but the eagle I saw was",
      "but the turtles I saw were"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'They' refers back to a list of animals, which is confusing. The sentence implies a different animal was the favorite — since the original list didn't include an eagle, 'the eagle I saw was' introduces a clear new subject.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 8,
    "text": "The small group of soldiers could see the prince well-protected on one side of the battlefield and King Richard under vicious attack on the other, so they rallied to him.\n\nWhich choice is correct?",
    "options": [
      "so they rallied to him (NO CHANGE)",
      "so he rallied to them",
      "so they rallied to their king",
      "so the soldiers rallied to them."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Him' is ambiguous — it could mean the prince or King Richard. 'So they rallied to their king' makes it clear that the soldiers rushed to defend King Richard.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 9,
    "text": "My friends want to go to the party, but they are not comfortable going to it without getting their parents' permission.\n\nWhich choice is correct?",
    "options": [
      "but they are not comfortable going to it (NO CHANGE)",
      "these friends are not comfortable going to it",
      "my friends are not comfortable going to this party",
      "these friends of mine are not comfortable going to this party"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'They' clearly refers to 'my friends' and 'it' refers to 'the party'. Both pronoun references are unambiguous. NO CHANGE is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 10,
    "text": "In China and Korea, the chefs are known for their spicy food in certain regions and for more delicate fare in other parts of it.\n\nWhich choice is correct?",
    "options": [
      "of it. (NO CHANGE)",
      "of them.",
      "of the countries.",
      "of China and Korea."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'It' is ambiguous — it could refer to China, Korea, or some unspecified place. 'Of the countries' clearly refers to both China and Korea without repeating their names unnecessarily.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 11,
    "text": "The ocean can be easily distinguished from a lake by two things: the presence of kelp and its distinctive smell.\n\nWhich choice is correct?",
    "options": [
      "and its distinctive smell (NO CHANGE)",
      "and their smell",
      "and smelling distinct",
      "and a distinctive smell"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Its' is ambiguous — it could refer to the ocean, the lake, or the kelp. 'A distinctive smell' removes the ambiguous pronoun entirely and makes the sentence clearer.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 12,
    "text": "The piano is known for its lovely and expressive sound; naturally, a trained pianist will find it especially beautiful.\n\nWhich choice is correct?",
    "options": [
      "a trained pianist will find it especially beautiful (NO CHANGE)",
      "these will find it",
      "a trained pianist will find this",
      "a trained pianist will find the sound"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'It' is ambiguous — it could refer to the piano or the sound. 'A trained pianist will find the sound especially beautiful' eliminates ambiguity by naming the specific referent.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 13,
    "text": "In a shocking turn of events, these illegal downloads are from protected government sources; it cannot be accurately traced.\n\nWhich choice is correct?",
    "options": [
      "it cannot be accurately traced. (NO CHANGE)",
      "they cannot be accurately traced.",
      "tracing them is not possible.",
      "as a result, the downloads cannot be traced."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'It' does not agree with the plural antecedent 'downloads'. 'They cannot be accurately traced' correctly uses the plural pronoun to match the plural antecedent.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 14,
    "text": "No one, including the professors, were ready for the probing questions asked by the members of the peer-reviewed scientific journal.\n\nWhich choice is correct?",
    "options": [
      "were ready for (NO CHANGE)",
      "was ready for",
      "are ready for",
      "was ready for the answering of"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'No one' is an indefinite pronoun that is always singular and takes a singular verb. 'Was ready for' is correct.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 15,
    "text": "The company is about to run out of funding for research, so they are going to turn to investors in hopes of securing a loan.\n\nWhich choice is correct?",
    "options": [
      "so they are going to turn (NO CHANGE)",
      "they will turn",
      "it is going",
      "they have gone"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In American English, 'the company' is a singular collective noun and takes the singular pronoun 'it'. 'It is going to turn to investors' is correct.",
    "topic": "Collective Nouns & Pronouns"
  },
  {
    "id": 16,
    "text": "One style of teacher prefers to lecture, rather than interact with students; they can often be found at the front of the classroom.\n\nWhich choice is correct?",
    "options": [
      "they can often be found (NO CHANGE)",
      "find them",
      "it can often be found",
      "such an instructor can often be found"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'They' is ambiguous — it could refer to teachers or students. 'Such an instructor can often be found' clearly refers to the type of teacher described, eliminating the ambiguity.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 17,
    "text": "Someone can be both brilliant in one field and far below average in many others; they are called \"savants.\"\n\nWhich choice is correct?",
    "options": [
      "they are called \"savants.\" (NO CHANGE)",
      "they can be called \"savants.\"",
      "the term for these is \"savants.\"",
      "he or she can be called a \"savant.\""
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Someone' is a singular indefinite pronoun. The correct singular pronoun is 'he or she'. Also, 'savant' (singular) agrees with the singular 'someone'. 'He or she can be called a savant' is correct.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 18,
    "text": "Everyone I know, including all my friends and relatives, are going to be celebrating the holidays with good cheer.\n\nWhich choice is correct?",
    "options": [
      "relatives, are going (NO CHANGE)",
      "relatives, is going",
      "my relatives, are going",
      "relatives is going"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Everyone' is an indefinite pronoun that is always singular. The parenthetical 'including all my friends and relatives' does not change the subject. The singular verb 'is going' is required, with the comma after the parenthetical retained.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 19,
    "text": "As it ran from the poachers, the pack of wolves raced across the barren tundra.\n\nWhich choice is correct?",
    "options": [
      "As it ran (NO CHANGE)",
      "As they ran",
      "As they run",
      "As it will run"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The antecedent of the pronoun is 'the pack of wolves'. Since wolves are multiple animals fleeing, and the context treats them as individual animals running, the plural 'they' is more logical and natural.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 20,
    "text": "My young nephew reports that he knows some well-educated people who think he or she deserves a scholarship or grant.\n\nWhich choice is correct?",
    "options": [
      "who think he or she deserves (NO CHANGE)",
      "it deserves",
      "one deserves",
      "they deserve"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The antecedent is 'some well-educated people' (plural). The pronoun must agree: 'they deserve' is correct. 'He or she' is singular and does not match 'people'.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 21,
    "text": "Until it can be exchanged for a more durable and inexpensive material, these alloys will continue to be used in bridge-building.\n\nWhich choice is correct?",
    "options": [
      "Until it can be exchanged (NO CHANGE)",
      "Until it is",
      "Until they can be",
      "Once they can be"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The antecedent is 'these alloys' (plural). The pronoun must be plural: 'they'. Also, the meaning is that the alloys will be used UNTIL they can be replaced, so 'Until they can be' is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 22,
    "text": "Carlos predicted that anyone who attends the Bach and Mozart performances are open-minded about the idea of listening to classical music.\n\nWhich choice is correct?",
    "options": [
      "performances are open-minded (NO CHANGE)",
      "performances is",
      "performance are",
      "performances were"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Anyone' is a singular indefinite pronoun and requires a singular verb. 'Performances is open-minded' correctly uses the singular verb to agree with 'anyone'.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 23,
    "text": "Only the gifted few with unique talents are likely to be remembered favorably by history in two hundred years.\n\nWhich choice is correct?",
    "options": [
      "talents are likely to be (NO CHANGE)",
      "talent is",
      "talents is",
      "talent was"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The subject is 'the gifted few' (plural). 'Talents' is part of the prepositional phrase modifying 'few'. The plural verb 'are' is correct. NO CHANGE.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 24,
    "text": "\"Is,\" he asked with curiosity, \"both of your sisters attending the dance?\"\n\nWhich choice is correct?",
    "options": [
      "Is, he asked (NO CHANGE)",
      "Are, he asked",
      "Was, he asked",
      "Will, he asked"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject of the question is 'both of your sisters' (plural). The plural verb 'Are' is required. 'Are both of your sisters attending the dance?' is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 25,
    "text": "As I have taught my little sister more and more about soccer, she and me spend more time kicking the ball around outside.\n\nWhich choice is correct?",
    "options": [
      "she and me spend more time (NO CHANGE)",
      "she and I have spent more time",
      "she and I will spend more time",
      "her and me have spent more time"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'She and I' are the subjects of the clause, so subject pronouns are needed. 'Me' and 'her' are object pronouns and cannot be subjects. Also, the present perfect 'have spent' is more consistent with the ongoing action described.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 26,
    "text": "On our travels through Germany, Raphael, Bill, and me met both weary travelers and excited explorers.\n\nWhich choice is correct?",
    "options": [
      "me met both weary (NO CHANGE)",
      "me met both wearily",
      "I met both weary",
      "I met both wearily"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Raphael, Bill, and I' is the subject of the sentence. 'I' (subject pronoun) is needed, not 'me' (object pronoun). Also, 'weary' (adjective) correctly modifies 'travelers', not 'wearily' (adverb).",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 27,
    "text": "Us students are leading a solidarity march in order to protest the unfair treatment of migrant farm workers.\n\nWhich choice is correct?",
    "options": [
      "Us students are (NO CHANGE)",
      "Ourselves are",
      "Us students were",
      "We students are"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Students' is the subject of the sentence. The pronoun modifying a subject noun must be in the subject case: 'We students' (not 'Us students').",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 28,
    "text": "When I saw Kate jumping on the trampoline, I asked my friends and she to be careful, for the springs were old and worn-out.\n\nWhich choice is correct?",
    "options": [
      "my friends and she to be careful (NO CHANGE)",
      "them",
      "she and my friends to be careful",
      "my friends and her to be careful"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'My friends and her' are the objects of the verb 'asked'. Object pronouns are required in this position. 'Her' (object) is correct; 'she' (subject) is not.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 29,
    "text": "My puppy and I go to the dog park as often as possible; I love to watch his rambunctious antics as he chases other friendly dogs and plays in the river.\n\nWhich choice is correct?",
    "options": [
      "My puppy and I go (NO CHANGE)",
      "I go",
      "Me and my puppy go",
      "My puppy and me go"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'My puppy and I' is the subject of the sentence. 'I' (subject pronoun) is correct. The conventional order also places the other person/noun first ('My puppy and I', not 'Me and my puppy'). NO CHANGE.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 30,
    "text": "Annabelle is an old acquaintance of our family; my brother and her may even get married someday.\n\nWhich choice is correct?",
    "options": [
      "my brother and her (NO CHANGE)",
      "she and he",
      "her and my brother",
      "she and my brother"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'My brother and she' are the subjects of 'may get married'. Subject pronouns are needed. 'She' (subject) is correct, not 'her' (object). Convention places the other noun before the pronoun: 'she and my brother' or 'my brother and she'.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 31,
    "text": "When Debbie answers the phone, she always responds \"this is her.\"\n\nWhich choice is correct?",
    "options": [
      "she always responds \"this is her.\" (NO CHANGE)",
      "she always responds \"this is she.\"",
      "her always responds \"this is she.\"",
      "she always responding \"this is she.\""
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In formal English, after the linking verb 'is', a subject pronoun (predicate nominative) is used: 'This is she.' The object pronoun 'her' is incorrect here. 'She always responds this is she' is correct.",
    "topic": "Predicate Nominatives"
  },
  {
    "id": 32,
    "text": "To a great artist such as he, both oil painting and charcoal sketching come quite naturally.\n\nWhich choice is correct?",
    "options": [
      "To a great artist such as he (NO CHANGE)",
      "as his, both",
      "as him, both",
      "like him, both"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Such as he' uses an implied verb: 'such as he [is]'. After 'as' in this comparative structure, a subject pronoun is required. 'He' is correct. NO CHANGE.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 33,
    "text": "He throws the ball accurately; she catches it consistently; together, he and she make a remarkably well-rounded team.\n\nWhich choice is correct?",
    "options": [
      "he and she make (NO CHANGE)",
      "he and her make",
      "he and she makes",
      "he and her makes"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'He and she' are the compound subject requiring subject pronouns (both 'he' and 'she') and the plural verb 'make'. NO CHANGE is correct.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 34,
    "text": "The bear chased Xander and me while Martha's climbing skills allowed her to perch safely in a tree.\n\nWhich choice is correct?",
    "options": [
      "Xander and me while Martha's climbing skills allowed her (NO CHANGE)",
      "me to allow Martha's climbing skills to perch her",
      "I allowing Martha's climbing skills to perch her",
      "I while Martha's climbing skills allowed her to perch"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Xander and me' are objects of the verb 'chased', so 'me' (object pronoun) is correct, not 'I'. 'Her' clearly refers to Martha. NO CHANGE is correct.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 35,
    "text": "Playing the way us Wildcats do is sure to guarantee victory in the tournament.\n\nWhich choice is correct?",
    "options": [
      "the way us Wildcats do (NO CHANGE)",
      "our way, us Wildcats",
      "in our own way, we Wildcats",
      "the way we Wildcats do"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Wildcats' is a noun used in apposition to a pronoun that acts as the subject within a clause. The subject pronoun 'we' is needed: 'the way we Wildcats do'.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 36,
    "text": "Concert audiences in the 1800s did not have access to recording technology and might only hear a song once in their entire life; for they, an encore was their only chance to hear a piece of music for a second time.\n\nWhich choice is correct?",
    "options": [
      "for they, an encore (NO CHANGE)",
      "for these, an encore",
      "for them, an encore",
      "an encore, for these,"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'For' is a preposition and requires an object pronoun. 'They' is a subject pronoun and cannot be the object of a preposition. 'For them, an encore' uses the correct object pronoun.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 37,
    "text": "The three Supreme Court Justices appointed by the current President were judged on their trial records as an attorney and as an elected judge.\n\nWhich choice is correct?",
    "options": [
      "were judged on their trial records as an attorney and as an elected judge",
      "were judged, as attorneys and as elected judges, on their trial records",
      "were judged, as an attorney and as an elected judge, on their trial records",
      "were judged on their trial record as an attorney and as an elected judge",
      "were judged on their trial records as attorneys and as elected judges"
    ],
    "answer": 4,
    "explanation": "Since the subject is 'three Supreme Court Justices' (plural), the nouns describing their roles must also be plural: 'attorneys' and 'elected judges'. 'Trial records' (plural) is also correct for multiple justices. Answer: E.",
    "topic": "Noun Agreement"
  },
  {
    "id": 38,
    "text": "When War of the Worlds was read on air by Orson Welles in 1938, many radio listeners believed that the play was an actual broadcast, creating a panic in an already-tense America.\n\nWhich choice is correct?",
    "options": [
      "many radio listeners believed that the play was an actual broadcast",
      "many radio listeners believed that the play was actual broadcasts",
      "many radio listeners believed that the plays were an actual broadcast",
      "a radio listener believed that the play was an actual broadcast",
      "many radio listeners believed that the plays were actual broadcasts"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. War of the Worlds is a single play (singular). 'Many radio listeners' (plural) believed that 'the play' (singular) was 'an actual broadcast' (singular). NO CHANGE is correct.",
    "topic": "Noun Agreement"
  },
  {
    "id": 39,
    "text": "Despite their cute and cuddly image, hippopotamuses—Africa's most feared animal— account for more human deaths than any other African creature.\n\nWhich choice is correct?",
    "options": [
      "hippopotamuses—Africa's most feared animal—account",
      "hippopotamus—Africa's most feared animal— account",
      "hippopotamus—Africa's most feared animal— accounts",
      "hippopotamuses—Africa's most feared animals—account",
      "hippopotamuses—Africa's most feared animals—accounts"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Hippopotamuses' (plural) requires the plural appositive 'Africa's most feared animals' and the plural verb 'account'.",
    "topic": "Noun Agreement"
  },
  {
    "id": 40,
    "text": "For Romanian farmers, rain dances called paparudas are an important ritual, used to invoke rain and guarantee a successful harvest.\n\nWhich choice is correct?",
    "options": [
      "rain dances called paparudas are an important ritual",
      "a rain dance called paparudas are an important ritual",
      "rain dances called paparudas are an important ritual (for a Romanian farmer)",
      "a rain dance called paparudas are important rituals",
      "rain dances called paparudas are important rituals"
    ],
    "answer": 4,
    "explanation": "'Rain dances' (plural) requires the plural noun 'important rituals'. The subject 'rain dances' is plural and must agree with the predicate noun. Answer: E.",
    "topic": "Noun Agreement"
  },
  {
    "id": 41,
    "text": "Counting each of the nine planets and their many moons, there is 162 known and accepted celestial bodies in our solar system.\n\nWhich choice is correct?",
    "options": [
      "planets and their many moons, there is",
      "planets and their many moons, there are",
      "planets and its many moons, there is",
      "planets and its many moons, there are",
      "everyone of the nine planets and their many moons, there are"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Each of the nine planets' takes 'their' because the planets are multiple. The true subject of 'there is/are' is '162 celestial bodies' (plural), so 'there are' is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 42,
    "text": "The bank has offered so many convenient services, such as checking by phone and online banking, that many of their customers no longer visit the bank itself.\n\nWhich choice is correct?",
    "options": [
      "that many of their customers no longer visit the bank itself",
      "that each of its customers no longer visit the bank itself",
      "that many of their customers no longer visit the bank themselves",
      "that many of its customers no longer visit the bank itself",
      "that many of its customers no longer visit the bank him or herself."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'The bank' is singular, so the pronoun must be singular 'its'. 'Many of its customers no longer visit the bank itself' is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 43,
    "text": "After Ben Franklin returned from his visit to the Iroquois Nation, the founding fathers created a constitution that resembled those of the Native Americans.\n\nWhich choice is correct?",
    "options": [
      "the founding fathers created a constitution that resembled those of the Native Americans",
      "the founding fathers created a constitution resembling the Native Americans'",
      "the founding fathers created a constitution that resembled these of the Native Americans",
      "the founding fathers created a constitution that those of the Native Americans resembled",
      "the founding fathers, resembling the Native Americans, created a constitution"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Those' is a pronoun referring to 'constitutions' (the constitutions of the Native Americans). The sentence is clear and grammatically correct as written. NO CHANGE.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 44,
    "text": "Upon hearing of the chairman's illness, the committee motioned to postpone their next meeting until after he was released from the hospital.\n\nWhich choice is correct?",
    "options": [
      "to postpone their next meeting until after he was released",
      "to postpone its next meeting until after he was released",
      "to postpone their next meeting until after he or she was released",
      "to postpone their next meeting until after they were released",
      "to postpone its next meeting until after each was released"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'The committee' is a singular collective noun in American English and takes the singular pronoun 'its'. 'He' correctly refers to the chairman (singular).",
    "topic": "Collective Nouns & Pronouns"
  },
  {
    "id": 45,
    "text": "I don't remember whom has the most stock.\n\nWhich choice is correct?",
    "options": [
      "whom has the most stock",
      "who have the most stock",
      "whom have the more stock",
      "who has the most stock",
      "whose the most stock"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The pronoun is the subject of the clause 'who has the most stock' — subject pronouns use 'who', not 'whom'. Also, the verb must be singular 'has' to agree with the singular 'who'.",
    "topic": "Who vs. Whom"
  },
  {
    "id": 46,
    "text": "Anyone who chooses to be part of our coalition to defend homeless people are required to sign several documents.\n\nWhich choice is correct?",
    "options": [
      "people are required to sign",
      "people is required to sign",
      "person is required to sign",
      "people are required, signing",
      "people is required, signing"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The subject is 'Anyone' (singular indefinite pronoun). The singular verb 'is required to sign' is correct.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 47,
    "text": "It is likely that you and I will not irritate she and John as they are very tolerant people.\n\nWhich choice is correct?",
    "options": [
      "you and I will not irritate she and John",
      "you and me will not irritate she and John",
      "you and I will not irritate John and her",
      "you and me will not irritate John and her",
      "you and myself will not irritate John and she"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'You and I' are the subjects (correct). 'She and John' are the objects of 'irritate', so the object pronoun 'her' is needed, not 'she'. 'You and I will not irritate John and her' is correct.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 48,
    "text": "The choir sang passionately, as they moved through elaborate and challenging four-part harmonies.\n\nWhich choice is correct?",
    "options": [
      "as they moved through elaborate and challenging four-part harmonies",
      "as they were moving through elaborate and challenging four-part harmonies",
      "moving themselves through elaborate and challenging four-part harmonies",
      "as it moved through elaborate and challenging four-part harmonies",
      "as it moved through challenging four-part harmonies elaborately"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. In American English, 'the choir' is a singular collective noun. The singular pronoun 'it' is correct. 'As it moved through elaborate and challenging four-part harmonies' is correct.",
    "topic": "Collective Nouns & Pronouns"
  },
  {
    "id": 49,
    "text": "Marston was an early seventeenth-century dramatist, and it is likely that him and Shakespeare borrowed ideas from each other.\n\nWhich choice is correct?",
    "options": [
      "it is likely that him and Shakespeare borrowed ideas from each other",
      "they likely borrowed ideas from each other",
      "him and Shakespeare likely borrowed ideas from each other",
      "it is likely that himself and Shakespeare borrowed ideas from each other",
      "it is likely that he and Shakespeare borrowed ideas from each other"
    ],
    "answer": 4,
    "explanation": "'Him and Shakespeare' are the subjects of 'borrowed'. Subject pronouns are needed: 'He and Shakespeare borrowed ideas'. Answer: E.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 50,
    "text": "This is a very difficult decision that will not be taken lightly, either by him or myself.\n\nWhich choice is correct?",
    "options": [
      "either by him or me.",
      "either for him or myself.",
      "neither by him nor myself.",
      "either by him or myself.",
      "either by him or by myself."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Reflexive pronouns like 'myself' should only be used when the subject and object refer to the same person, or for emphasis. Here, the object of 'by' should be 'me' (object pronoun), not 'myself'. 'Either by him or me' is correct.",
    "topic": "Reflexive Pronouns"
  },
  {
    "id": 51,
    "text": "\"Working towards a peaceful solution is the most important thing,\" said the Secretary of State, \"for both the President and I.\"\n\nWhich choice is correct?",
    "options": [
      "says the Secretary of State, \"for both the President and I.\"",
      "said the Secretary of State, \"for both me and the President.\"",
      "said the Secretary of State, \"for both the President and I.\"",
      "said the Secretary of State: \"for both the President and I.\"",
      "said the Secretary of the State \"for both the President and I.\""
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'For' is a preposition requiring an object pronoun. 'I' is a subject pronoun and cannot follow 'for'. 'For both me and the President' uses the correct object pronoun 'me'. The past tense 'said' is also correct.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 52,
    "text": "The speech was viewed curiously by his fellow candidates, all of who were interested in what political positions the governor would outline for his presidential run.\n\nWhich choice is correct?",
    "options": [
      "all who were interesting in what political positions",
      "all who were interested in which political positions",
      "all who were interested in what political positions",
      "all of whom were interested in what political positions",
      "all who were interested for what political positions"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Of whom' — 'whom' is the object of the preposition 'of', so the object pronoun 'whom' is required (not 'who'). 'All of whom were interested in what political positions' is correct.",
    "topic": "Who vs. Whom"
  },
  {
    "id": 53,
    "text": "The newspaper was delivered every morning to him and I.\n\nWhich choice is correct?",
    "options": [
      "from him and I.",
      "to me and him.",
      "for him and I.",
      "to he and I.",
      "to he and me."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'To' is a preposition requiring object pronouns. Both 'him' and 'me' are object pronouns. Convention places the other person first: 'to me and him' or 'to him and me'.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 54,
    "text": "Me and you have never seen eye to eye on any issue.\n\nWhich choice is correct?",
    "options": [
      "Me and you",
      "I and You",
      "You and I",
      "You, me",
      "You and me"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Me and you' are the subjects of the sentence, so subject pronouns are required. 'You and I' is correct (convention: put the other person first).",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 55,
    "text": "I know that Trudy is generally a kind girl, but I and her have never enjoyed spending time together.\n\nWhich choice is correct?",
    "options": [
      "but her and I have never enjoyed spending time together.",
      "but she and I have never enjoyed spending time together.",
      "but she and me have never enjoyed spending time together.",
      "but I and her have never enjoyed spending time together.",
      "but her and me have never enjoyed spending time together."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'She and I' are the subjects. Subject pronouns required: 'she' (not 'her') and 'I' (not 'me'). Convention: other person first — 'she and I'.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 56,
    "text": "Us and them are going to join together for the greater good.\n\nWhich choice is correct?",
    "options": [
      "Us and them",
      "Them and we",
      "Us and they",
      "Them and us",
      "They and we"
    ],
    "answer": 4,
    "explanation": "Both pronouns are subjects of the sentence. Subject pronouns are required: 'They' (not 'Them') and 'we' (not 'us'). 'They and we' is correct. Answer: E.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 57,
    "text": "Me and you have to go to the store.\n\nWhich choice is correct?",
    "options": [
      "Me and you have",
      "You and me have",
      "You and I has",
      "You and I have",
      "Me and you has"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'You and I' are the compound subjects. Subject pronouns needed: 'I' (not 'me'). The plural verb 'have' agrees with the compound subject.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 58,
    "text": "Him and I are going to make the case in the morning for tougher standards.\n\nWhich choice is correct?",
    "options": [
      "Him and I going",
      "Him and I are gone",
      "Him and I are going",
      "I and him are going",
      "He and I are going"
    ],
    "answer": 4,
    "explanation": "Both pronouns are subjects. 'He' (subject) is needed, not 'Him' (object). Convention places the other person first: 'He and I are going'. Answer: E.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 59,
    "text": "She and him have been bitter enemies since they were children in Little League.\n\nWhich choice is correct?",
    "options": [
      "She and he having been",
      "She and him having been",
      "She and he have been",
      "She and him has been",
      "She and him have been"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Both pronouns are subjects. 'He' (subject) is needed, not 'him' (object). The plural verb 'have been' agrees with the compound subject 'she and he'.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 60,
    "text": "In the nineteenth century, poets were considered national treasures by readers, while today they are fringe cultural figures.\n\nWhich choice is correct?",
    "options": [
      "while today they are fringe cultural figures.",
      "while today they are fringier cultural figures.",
      "while these days they are fringe cultural figures.",
      "while today these are fringe cultural figures.",
      "while today poets are fringe cultural figures."
    ],
    "answer": 4,
    "explanation": "'They' is ambiguous — it could refer to poets or readers. Replacing 'they' with 'poets' eliminates the ambiguity and makes the contrast between past and present clear. Answer: E.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 61,
    "text": "The publicist made it clear that he was speaking for both the organization and him, inviting even more criticism from the press.\n\nWhich choice is correct?",
    "options": [
      "for both the organization and himself",
      "for both the organization and he",
      "to both the organization and him",
      "for both the organization's and him",
      "for both the organization and him"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The publicist is speaking for himself — the subject ('he') and the object refer to the same person, making the reflexive 'himself' correct here. 'For both the organization and himself' is correct.",
    "topic": "Reflexive Pronouns"
  },
  {
    "id": 62,
    "text": "The server went to check on her last customer; she was frustrated by her impatience.\n\nWhich choice is correct?",
    "options": [
      "The server went to check on her last customer, and she was frustrated by her impatience.",
      "The server went to check on her last customer; she was frustrated by her impatience.",
      "The server checked on her last customer; she was frustrated by her impatience.",
      "The server went to check on her last customer and found that she was frustrated by her impatience.",
      "The server went to check on her last customer, who was frustrated by the server's impatience."
    ],
    "answer": 4,
    "explanation": "The original sentence is ambiguous — it's unclear whether 'she' refers to the server or the customer, and 'her impatience' is also unclear. Choice E clarifies that the customer was frustrated by the server's impatience, resolving both ambiguities. Answer: E.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 63,
    "text": "After hours of negotiation and bargaining, the CEO and the technology expert had reached a bargain in which he received most of his demands.\n\nWhich choice is correct?",
    "options": [
      "the CEO and the technology expert had reached a bargain in which he received most of his demands.",
      "the CEO and the technology expert received most of his demands.",
      "the CEO and the technology expert had reached a bargain in which they received most of their demands.",
      "the CEO, and the technology expert, had reached a bargain in which he received most of his demands.",
      "the CEO and the technology expert had reached a bargain in which the technology expert received most of his demands."
    ],
    "answer": 4,
    "explanation": "'He' is ambiguous when two males (the CEO and the technology expert) are the antecedents. Replacing 'he' with 'the technology expert' specifies clearly who received most of his demands. Answer: E.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 64,
    "text": "There were few employees willing to stand up to the executive when he was in one of his rages, as they often led to many people being fired.\n\nWhich choice is correct?",
    "options": [
      "as they often led to more people being fired.",
      "as they often led to many people being fired.",
      "as they often led to many peoples being fired.",
      "as they often would lead to many people being fired.",
      "as these rages often led to many people being fired."
    ],
    "answer": 4,
    "explanation": "'They' is ambiguous — it could refer to the employees or the rages. Replacing 'they' with 'these rages' clarifies the antecedent. Answer: E.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 65,
    "text": "The old man was extremely reclusive, never allowing them to see him.\n\nWhich choice is correct?",
    "options": [
      "not allowing them to see him.",
      "never allowed them to see him.",
      "never allowing people to see him.",
      "never allowing them to see him.",
      "never allowing them to be seeing him."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Them' has no clear antecedent in the sentence — no specific group of people has been introduced. Replacing 'them' with 'people' (general) eliminates the vague pronoun.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 66,
    "text": "John and Michael both made good points, but in the end, I had to side with him.\n\nWhich choice is correct?",
    "options": [
      "John and Michael both made good points, but in the end, the one I had to side with.",
      "John and Michael both made good points, but in the end, the one with whom I had to side.",
      "John and Michael both made good points, but in the end, I had to side with John.",
      "(No changes to original.)",
      "John and Michael both made good points, but in the end, I had to side with he."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Him' is ambiguous — both John and Michael are male. Replacing 'him' with 'John' (or 'Michael') clarifies who was sided with.",
    "topic": "Ambiguous Pronoun Reference"
  },
  {
    "id": 67,
    "text": "He always tried to send a copy of each newsletter to him for his records before he sent it to the rest of his colleagues.\n\nWhich choice is correct?",
    "options": [
      "He always tried to send a copy of each newsletter to him for his records, before he sent it to his rest of the colleagues.",
      "He always tried to send a copy of each newsletter to him for his records before sending it to the rest of his colleagues.",
      "He always tried to send a copy of each newsletter with him for his records before he sent it to the rest of his colleagues.",
      "He always tried to send a copy of each newsletter to him for his records before he sent it to the rest of his colleagues.",
      "He always tried to send a copy of each newsletter to himself for his records before he sent it to the rest of his colleagues."
    ],
    "answer": 4,
    "explanation": "The subject is 'he' and he is sending a copy to himself — the reflexive pronoun 'himself' is correct when the subject and object are the same person. Answer: E.",
    "topic": "Reflexive Pronouns"
  },
  {
    "id": 68,
    "text": "Under the influence of the guru, the man began to improve him.\n\nWhich choice is correct?",
    "options": [
      "began to improve him.",
      "began making improvements to him.",
      "began to make improvements for him.",
      "began to be improved by him.",
      "began to improve himself."
    ],
    "answer": 4,
    "explanation": "The man is improving himself — subject and object are the same person, requiring the reflexive pronoun 'himself'. 'The man began to improve himself' is correct. Answer: E.",
    "topic": "Reflexive Pronouns"
  },
  {
    "id": 69,
    "text": "He was always generous to others, to the point of ignoring him.\n\nWhich choice is correct?",
    "options": [
      "to the point of ignore of him.",
      "to a point of ignoring him.",
      "to the point of ignoring him.",
      "to the point of ignoring himself.",
      "to the point to ignore him."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. He was so generous to others that he ignored himself — the subject and the ignored person are the same, so the reflexive 'himself' is correct.",
    "topic": "Reflexive Pronouns"
  },
  {
    "id": 70,
    "text": "What is unique about these category is their relation to these things that are taken on to add to a being's natural capacities.\n\nWhich choice is correct?",
    "options": [
      "What is unique about this category is its relation to those things that are taken on",
      "What is unique about this category is its relation to them things which are taken on",
      "What is unique about those category is it's relation to those things which are taken on",
      "What is unique about these category is their relation to these things that are taken on",
      "What is unique about this category is it's relation to those things that are taken on"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Category' is singular, so 'this category' and 'its relation' (singular possessive) are correct. 'Those things' is more appropriate than 'these things' for things being referred to in the abstract. 'It's' (contraction for 'it is') is incorrect — 'its' (possessive) is needed.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 71,
    "text": "After reviewing all of the relevant legal information, the court decided that the original agreement had been strictly between she and the family trust, legally a technicality that significantly reduced the amount she expected to receive.\n\nWhich choice is correct?",
    "options": [
      "the court decided that the original agreement had been strictly between her and the family trust, a legal technicality that significantly reduced the amount she expected to receive",
      "a technicality that the original agreement had been strictly between she and the family, decided by the court, significantly reduced the amount she expected to receive",
      "the decision of the court significantly reduced the amount that she expected to receive, being based as it was on the legal technicality that the original agreement had been strictly between her and the family trust",
      "the court decided that the original agreement had been strictly between she and the family trust, a legal technicality that significantly reduced the amount she expected to receive",
      "she expected to receive a significantly reduced amount because the court decided, based on a legal technicality, that the original agreement had been strictly between her and the family trust."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Between' is a preposition requiring object pronouns. 'She' is a subject pronoun and incorrect after 'between'. 'Between her and the family trust' is correct. Choice A also correctly restructures the appositive.",
    "topic": "Pronoun Case (Subject vs. Object)"
  },
  {
    "id": 72,
    "text": "Like supermarkets across the country, the grocery chain was seeking to offer their clientele more local and organic products to meet new consumer demands.\n\nWhich choice is correct?",
    "options": [
      "the grocery chain was seeking to offer their clientele more local or organic products to meet new consumer demands.",
      "the grocery chain was seeking to offer its clientele more local and organic products to meet new consumer demands.",
      "the grocery chain was seeking to offer their clientele more local and organic products, to meet new consumer demands.",
      "the grocery chain was seeking to offer their clientele more local and organic products to meet new consumer demands.",
      "the grocery chain was seeking to offer their clients more local and organic products to meet new consumer demands."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'The grocery chain' is singular, requiring the singular pronoun 'its'. 'The grocery chain was seeking to offer its clientele' is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 73,
    "text": "It is explicitly stated in the employee handbook that all workers must supply his or her own steel-toed shoes.\n\nWhich choice is correct?",
    "options": [
      "that all workers must supply one's own steel-toed shoes.",
      "that each worker must supply their own steel-toed shoes.",
      "that any worker must supply their own steel-toed shoes.",
      "that all workers must supply their own steel-toed shoes.",
      "that each worker must supply they're own steel-toed shoes."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'All workers' is plural. The plural pronoun 'their' correctly agrees with the plural antecedent 'all workers'.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 74,
    "text": "Neither the supervisor nor the employees expressed his objections to the schedule at the time it was posted.\n\nWhich choice is correct?",
    "options": [
      "expressed their objections to the schedule at the time it was posted.",
      "expressed one's objections to the schedule at the time it was posted.",
      "expressed whatever objections he had at the time it was posted.",
      "expressed his or her objections to the schedule at the time it was posted.",
      "had expressed his objections to the schedule at the time it was posted."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. With 'neither...nor', the verb and pronoun agree with the closer subject: 'the employees' (plural). 'Their objections' correctly uses the plural pronoun to agree with 'employees'.",
    "topic": "Neither...Nor / Pronoun Agreement"
  },
  {
    "id": 75,
    "text": "The new guidelines clearly stated that if a supervisor or an employee had a workplace issue, they were supposed to take the problem to the Human Resources department.\n\nWhich choice is correct?",
    "options": [
      "had a workplace issue, they were supposed to take",
      "had a workplace issue, they are supposed to take",
      "had a workplace issue, they were supposing to take",
      "have a workplace issue, they were supposed to take",
      "had a workplace issue, he or she was supposed to take"
    ],
    "answer": 4,
    "explanation": "With 'a supervisor or an employee' (both singular), the pronoun should be singular 'he or she' and the verb 'was'. Past tense 'had' and 'was supposed to take' maintain consistency. Answer: E.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 76,
    "text": "The new strategy was a remarkable departure from those laid by the general's predecessor.\n\nWhich choice is correct?",
    "options": [
      "a remarkably departure from those laid",
      "a remarkable departure from the ones laid",
      "a remarkable departure from those laid",
      "a remarkable departure for those laid",
      "a remarkable departure from the one laid"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Remarkable' (adjective) correctly modifies 'departure'. 'Those' refers to 'strategies' (plural), which is appropriate since a predecessor would have laid multiple strategies. 'From those laid' is correct. NO CHANGE.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 77,
    "text": "In addition to helping the environment, renewable resources—such as solar power and hydroelectricity—may also provide an economic benefit, as it may reduce our dependence on foreign oil.\n\nWhich choice is correct?",
    "options": [
      "as they depend on the reduction of foreign oil.",
      "as it reduces our dependence on foreign oil.",
      "as they may reduce our dependence on foreign oil.",
      "this being the reduction in our dependence on foreign oil.",
      "as it may reduce our dependence on foreign oil."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The antecedent is 'renewable resources' (plural). The plural pronoun 'they' is required. 'As they may reduce our dependence on foreign oil' is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 78,
    "text": "Most men who go to sporting events find it an enjoyable diversion.\n\nWhich choice is correct?",
    "options": [
      "Most men who go to sporting events find it an enjoyable diversion.",
      "Most of the men who go to sporting events find it an enjoyable diversion.",
      "Many men who go to sporting events find it an enjoyable diversion.",
      "Most men who go to sporting events find it to be an enjoyable diversion.",
      "Most men who go to sporting events find them an enjoyable diversion."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'It' refers to 'going to sporting events' (the activity), treated as a singular concept. 'Most men' is the appropriate quantifier. NO CHANGE is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 79,
    "text": "While it can seem like a daunting task to train for a marathon, anyone who has completed the challenge knows that preparing a plan that they stick to is the key to success.\n\nWhich choice is correct?",
    "options": [
      "sticking to a plan",
      "preparing a plan that they stick to",
      "preparing a plan that he sticks to",
      "preparing a plan and sticking to it",
      "preparing, and having that be a plan that they stick to"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Anyone' is singular, so 'they' doesn't agree. 'Preparing a plan and sticking to it' avoids the pronoun–antecedent issue entirely and is also cleaner and more parallel.",
    "topic": "Indefinite Pronouns"
  },
  {
    "id": 80,
    "text": "Just as they finished work for the day, the worker found his lost green helmet and made his way home happily.\n\nWhich choice is correct?",
    "options": [
      "Just as he finished work for the day, the worker found his lost green helmet and made his way home happily.",
      "Just as he finished work for the day, his lost green helmet was found by the worker, who made his way home happily.",
      "Just as he finished work for the day, the worker found his lost green helmet and made his way home happy.",
      "Just as they finished work for the day, the worker finds his lost green helmet and made his way home happily.",
      "Just as they finished work for the day, the worker found his lost green helmet and made his way home happily."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'They' is a dangling modifier — the subject of 'finished' must match 'the worker' (singular). 'Just as he finished work for the day, the worker found his lost green helmet and made his way home happily' correctly uses 'he' to refer to the worker.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 81,
    "text": "Although the basketball team used their star players, the match was lost.\n\nWhich choice is correct?",
    "options": [
      "Although the basketball team used their star players",
      "Although the star players were used by the basketball team",
      "Although the basketball team used its star players",
      "The basketball team used its star players, although",
      "The basketball team used their star players"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'The basketball team' is a singular collective noun in American English, requiring the singular pronoun 'its'. 'Although the basketball team used its star players' is correct.",
    "topic": "Collective Nouns & Pronouns"
  },
  {
    "id": 82,
    "text": "Most books printed before the nineteenth century, even ones that have been carefully preserved, contain materials that cause it to decay.\n\nWhich choice is correct?",
    "options": [
      "that causes it to decay",
      "that cause it to decay",
      "that cause them to decay",
      "that causes them to decay",
      "that can cause it to decay"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The antecedent of the pronoun is 'Most books' (plural). The plural pronoun 'them' is required. Also, 'materials' (plural) takes the plural verb 'cause'. 'That cause them to decay' is correct.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 83,
    "text": "The community is currently accepting nominations for the award, which will be given to the person who has most significantly transformed the world through their charitable actions or scientific discoveries.\n\nWhich choice is correct?",
    "options": [
      "the person that significantly transformed the world through his or her charitable actions or scientific discoveries.",
      "the person who has most significantly transformed the world through their charitable actions or scientific discoveries.",
      "the person who most significantly transformed the world through their charitable actions or scientific discoveries.",
      "the person who has most significantly transformed the world through his or her charitable actions or scientific discoveries.",
      "the person that has most significantly transformed the world through his or her charitable actions or scientific discoveries."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'The person' is singular. The singular pronoun 'his or her' is required (not 'their'). 'Who' (not 'that') is used for people. 'Has most significantly transformed' uses the present perfect correctly for an ongoing relevance.",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 84,
    "text": "Mitchell was one of the first members of corporate to realize that employees are most productive when he or she feels to be part of a team.\n\nWhich choice is correct?",
    "options": [
      "they feel as if they are part of a team",
      "he or she feels to be part of a team",
      "feeling part of a team is made possible",
      "he or she feels part of a team",
      "it's more like a team for them"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The antecedent is 'employees' (plural). The plural pronoun 'they' is required. Also, 'feel as if they are part of a team' is the idiomatically correct construction (not 'feels to be').",
    "topic": "Pronoun–Antecedent Agreement"
  },
  {
    "id": 85,
    "text": "The loss of a parent at a young age can traumatize a person for the rest of your life.\n\nWhich choice is correct?",
    "options": [
      "for the rest of your life.",
      "for the rest of yourself's life.",
      "on the rest of your life.",
      "for the rest of his or her life.",
      "for the rest of your living."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The subject is 'a person' (third person singular), but 'your' is second person. The pronoun must match: 'his or her life' agrees with the singular 'a person'.",
    "topic": "Pronoun–Antecedent Agreement"
  }
];

const TOPIC_MAP = {
    'Pronouns': {
        name: 'Pronouns',
        questions: QUESTIONS.map(q => q.id)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, TOPIC_MAP };
}