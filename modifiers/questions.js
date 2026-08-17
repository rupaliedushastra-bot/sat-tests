// =============================================
// Digital SAT – Topic: Modifiers
// questions.js | Pages 160–174
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "Coming into the restaurant, the big screen television dominated the patrons' view.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Coming into the restaurant, the big screen television dominating the patrons' view.",
      "Coming into the restaurant as the big screen television dominated the patrons' view.",
      "Coming into the restaurant, the big screen television dominated the patrons' view.",
      "Coming into the restaurant, the patrons' view dominated the big screen television.",
      "The big screen television dominated the patrons' view when they came into the restaurant."
    ],
    "answer": 4,
    "explanation": "The participial phrase 'Coming into the restaurant' must modify the person doing the coming — the patrons, not the television. Choice E correctly restructures the sentence so the patrons are the subject of coming in. Answer: E.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 2,
    "text": "Hoping to make amends, the flowers were given to the young man's girlfriend.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Hoping to make amends, the flowers were given by the young man's girlfriend.",
      "Hoping to make amends, the young man gave his girlfriend the flowers.",
      "Hoping to make amends, the flowers were given for the young man's girlfriend.",
      "Hoping to make amends, the flowers were given to the young man's girlfriend.",
      "Hoping to make amends, the flowers gave to the young man's girlfriend."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Hoping to make amends' must modify the person who is hoping — the young man, not the flowers. Choice B places the young man immediately after the comma as the subject, fixing the dangling modifier.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 3,
    "text": "Making plenty of mistakes, the project was taken away from the young associate.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Making plenty of mistakes, the project being taken away from the young associate.",
      "The project was taken away from the young associate because he was making plenty of mistakes.",
      "Making plenty of mistakes, the project was taken away from the young associate.",
      "Making plenty of mistakes so the project was taken away from the young associate.",
      "The project was taken away from the young associate because it made plenty of mistakes."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Making plenty of mistakes' must modify the young associate, not the project. Choice B restructures the sentence using a causal clause to make clear who was making the mistakes.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 4,
    "text": "Walking into the street, the parade blocked the pedestrians' path.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Walking into the street, the parade blocked the pedestrians' path.",
      "Walking in the street, the parade blocked the pedestrians' path.",
      "Walking into the street, the parade blocked the pedestrians path.",
      "Walking into the street, the parade was blocking the pedestrians' path.",
      "Walking into the street, the pedestrians had their path blocked by the parade."
    ],
    "answer": 4,
    "explanation": "'Walking into the street' must modify the pedestrians, not the parade. Choice E correctly places the pedestrians immediately after the comma. Answer: E.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 5,
    "text": "Moving into his new house, the wallpaper was completely renovated by the homeowner.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "the wallpaper were completely renovated by the homeowner.",
      "the homeowner completely renovated the wallpaper.",
      "the wallpaper were completely renovation by the homeowner.",
      "the wallpaper completely renovated by the homeowner.",
      "the wallpaper was completely renovated by the homeowner."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Moving into his new house' must modify the homeowner, not the wallpaper. Choice B places the homeowner as the active subject right after the introductory phrase.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 6,
    "text": "Under a great deal of stress, cooking a meal was too hard for the newly-promoted manager.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Under a great deal of stress cooking a meal was too hard for the newly-promoted manager.",
      "Under a great deal of stress, to cook a meal was too hard for the newly-promoted manager.",
      "Under a great deal of stress, cooking a meal was too hard for the newly-promoted manager.",
      "Cooking a meal was too hard for the newly-promoted manager, who was under a great deal of stress.",
      "Under a great deal of stress, cooking a meal was too hard for a newly-promoted manager."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Under a great deal of stress' should modify the manager, not the cooking. Choice D restructures the sentence so the manager is the subject and the stress is clearly attributed to her via a relative clause.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 7,
    "text": "Making the final turn, the finish line loomed for both of the dueling cars.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Making the final turn, the finish line loomed for both of the dueling cars.",
      "Making the final turn, the dueling cars looming for the finish line.",
      "The finish line loomed for both of the dueling cars making the final turn.",
      "The dueling cars making the final turn loomed the finish line.",
      "Making the final turn to the finish line loomed for both of the dueling cars."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Making the final turn' must modify the cars, not the finish line. Choice B correctly makes the dueling cars the subject immediately following the participial phrase — though note the participial clause still needs a complete verb (looming → as they loomed). Among the options, B is the best fix.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 8,
    "text": "Coming over the hill, the rainbow became visible to the hikers.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Coming over the hill, the rainbow became visible for the hikers.",
      "The rainbow became visible to the hikers as they were coming over the hill.",
      "The rainbow became visible to the hikers as it came over the hill.",
      "Coming over the hill, the rainbow becoming visible to the hikers.",
      "Coming over the hill, the rainbow became visible to the hikers."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Coming over the hill' must modify the hikers, not the rainbow. Choice B restructures the sentence using a temporal clause to make clear that the hikers were coming over the hill.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 9,
    "text": "Making a little more money, the new car was more affordable for the young woman.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Making a little more money, the young woman was more affordable for the new car.",
      "Making a little more money for the new car, was more affordable for the young woman.",
      "The new car was more affordable for the young woman who was making a little more money.",
      "The new car was more affordable as the young woman who was making a little more money.",
      "Making a little more money, the new car was more affordable for the young woman."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Making a little more money' must modify the young woman, not the car. Choice C restructures the sentence with a relative clause that clearly attributes the money-making to the young woman.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 10,
    "text": "Spreading through the night, the city was destroyed by the massive fire.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "the massive fire was destroyed in the city.",
      "the massive fire destroyed the city.",
      "the city was destroyed in the massive fire.",
      "the city was destroyed by the massive fire.",
      "the city destroyed by the massive fire."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Spreading through the night' must modify the massive fire, not the city. Choice B places the massive fire as the active subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 11,
    "text": "Turning around in the crowded store, the counter was run into by the harried man.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "the counter ran into by the harried man.",
      "the harried man ran into the counter.",
      "the counter was run into by the harried man.",
      "the harried man was run into by the counter.",
      "the counter run into the harried man."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Turning around in the crowded store' must modify the harried man, not the counter. Choice B places the harried man as the active subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 12,
    "text": "While they were making the climb, higher rocks would continually fall on the mountaineers.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "While they were making the climb so higher rocks would continually fall on the mountaineers.",
      "Higher rocks would continually fall on the mountaineers while they were making the climb.",
      "While they were making the climb, higher rocks continually fall on the mountaineers.",
      "While they were making the climb, higher rocks would continually fall on the mountaineers.",
      "While they were making the climb, mountaineers continually fall with higher rocks on them."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The sentence is already correct as written — 'they' refers to the mountaineers, and 'would continually fall' correctly describes repeated past action. NO CHANGE. Choice D is the same as the original.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 13,
    "text": "Moving into a new neighborhood, the neighbors were suspicious of the odd family.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Moving into a new neighborhood, the neighbors were suspicious of the odd family.",
      "Moving into a new neighborhood, the odd family being suspicious of new neighbors.",
      "Moving into new neighborhood for neighbors were suspicious of the odd family.",
      "The neighbors were suspicious of the odd family, new neighborhood moving.",
      "The neighbors were suspicious of the odd family moving into a new neighborhood."
    ],
    "answer": 4,
    "explanation": "'Moving into a new neighborhood' must modify the odd family, not the neighbors. Choice E places 'moving into a new neighborhood' as a postpositive modifier directly after 'the odd family', making it clear who is doing the moving. Answer: E.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 14,
    "text": "Walking into a new room, the full display of jewels was seen by the tour group.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "the full display of jewels was seen for the tour group.",
      "the full display of jewels saw by the tour group.",
      "the tour group saw the full display of jewels.",
      "the full display of jewels was seen by the tour group.",
      "the tour group was seen by the full display of jewels."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Walking into a new room' must modify the tour group, not the display of jewels. Choice C places the tour group as the active subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 15,
    "text": "Only taking classes at night, the degree came slowly to the young woman.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "The degree came slowly to the young woman; only taking classes at night.",
      "The degree came slowly to the young woman who was only taking classes at night.",
      "Only taking classes at night, the degree came slow to the young woman.",
      "Only taking classes at night, the degree came slowly to the young woman.",
      "Only taking classes at night, the degree coming slowly to the young woman."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Only taking classes at night' must modify the young woman, not the degree. Choice B restructures the sentence with a relative clause that clearly attributes the night-class-taking to the young woman.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 16,
    "text": "Coming into his own, the beard was grown by the teenager to make himself look older.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Coming into his own, the beard was grown by the teenager to make himself look older.",
      "The beard was grown by the teenager to make himself look older coming into his own.",
      "Coming into his own, the beard grew the teenager to make himself look older.",
      "Coming into his own, the beard growing by the teenager to make himself look older.",
      "Coming into his own, the teenager grew the beard to make himself look older."
    ],
    "answer": 4,
    "explanation": "'Coming into his own' must modify the teenager, not the beard. Choice E places the teenager as the active subject immediately after the comma. Answer: E.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 17,
    "text": "Running down the hill, the underbrush the boy fell into was thorny.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Running down the hill, the thorny underbrush the boy fell into.",
      "Running down the hill, fell into the thorny underbrush the boy.",
      "Running down the hill, the boy fell into the underbrush that was thorny.",
      "Running down the hill, fell into the underbrush that was thorny the boy.",
      "Running down the hill, the boy fell into the thorny underbrush."
    ],
    "answer": 4,
    "explanation": "'Running down the hill' must modify the boy, not the underbrush. Choice E places the boy immediately after the comma as the subject and uses 'thorny' as a direct adjective, making it clear and concise. Answer: E.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 18,
    "text": "Skeptical that prophets could actually tell the future, Ancient Greece was where droves of philosophers began to value reason over revealed truths.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "droves of philosophers in Ancient Greece began to value reason over revealed truths.",
      "the valuing of reason over revealed truths was begun by droves of philosophers in Ancient Greece.",
      "valuing of reason over revealed truths by philosophers in Ancient Greece was begun.",
      "it was droves of philosophers that began to value reason over revealed truths.",
      "Ancient Greece was where droves of philosophers began to value reason over revealed truths."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Skeptical that prophets could actually tell the future' must modify the philosophers, not Ancient Greece. Choice A places 'droves of philosophers' as the subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 19,
    "text": "Unaware of any problems ahead, the path was followed for miles by the convoy.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Unaware of any problems ahead, the path followed by the convoy for miles.",
      "Unaware of any problems ahead, the path was following for miles by the convoy.",
      "Unaware of any problems ahead, the convoy followed the path for miles.",
      "Unaware of any problems ahead, the convoy following the path for miles.",
      "Unaware of any problems ahead, the path was followed for miles by the convoy."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Unaware of any problems ahead' must modify the convoy, not the path. Choice C places the convoy as the active subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 20,
    "text": "Walking into the room, the conference table dominated the interviewee's vision.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "the conference table dominated the interviewee's vision.",
      "the conference table that had dominated the interviewee's vision.",
      "the conference table dominated an interviewee's vision.",
      "the conference table dominating the interviewee's vision.",
      "the interviewee's vision was dominated by the conference table."
    ],
    "answer": 4,
    "explanation": "'Walking into the room' must modify the interviewee, not the conference table. Choice E restructures to put the interviewee's perspective at the center, with the table as what dominated her vision — though for a full fix, 'as the interviewee walked in' or putting 'the interviewee' as subject would be ideal. Among the options, E is the best correction. Answer: E.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 21,
    "text": "Seething with anger, the door slammed behind me.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Seething with anger, the door from behind me was slammed.",
      "Seething with anger, the door was slammed behind me.",
      "Seething with anger, I slammed the door behind me.",
      "Anger full of seething, the door slammed behind me.",
      "Seething with anger, the door slammed behind me."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Seething with anger' must modify 'I', not the door. Choice C places 'I' immediately after the comma as the active subject who slammed the door.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 22,
    "text": "Although she was worried about bankruptcy, Masha's concern was more about the possibility of losing her home.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Masha's concern was more about the possibility of losing her home.",
      "Masha was more concerned about the possibility of losing her home.",
      "the possibility of losing her home gave Masha more concern.",
      "Masha was more concerned towards her home and losing it.",
      "it was the possibility of losing her home that gave Masha concern."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The introductory clause 'Although she was worried about bankruptcy' requires 'she' (Masha) as the subject of the main clause. 'Masha's concern' is a noun phrase, not a person — it creates a dangling modifier. Choice B places Masha as the subject.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 23,
    "text": "Like his other historical plays, Shakespeare dramatizes themes of corruption, betrayal, and power in the play King John.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Like his other historical plays, Shakespeare dramatized themes of corruption, betrayal, and power in the play King John.",
      "Like Shakespeare's other historical plays, King John dramatizes themes of corruption, betrayal, and power.",
      "Like his other historical plays, in the play King John, Shakespeare dramatizes themes of corruption, betrayal, and power.",
      "Like his other historical plays, Shakespeare dramatizes themes of corruption, betrayal, and power in the play King John.",
      "Like his other historical plays, themes of corruption, betrayal, and power are dramatized by Shakespeare in the play King John."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Like his other historical plays' compares something to Shakespeare's other plays — the subject after the comma must be King John (the play being compared), not Shakespeare. Choice D keeps the sentence intact and correct as written.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 24,
    "text": "Walking out of the house, the cold immediately affected the little boy.\n\nWhich choice best corrects the modifier error?",
    "options": [
      "Walking out of the house so the cold immediately affected the little boy.",
      "Walked out of the house, the cold immediately affected the little boy.",
      "The cold immediately affected the little boy walking out of the house.",
      "Walking out of the house, the cold immediately affecting the little boy.",
      "Walking out of the house, the cold immediately affected the little boy."
    ],
    "answer": 4,
    "explanation": "The sentence is correct as written — 'Walking out of the house' can logically modify 'the cold' in the sense that the cold affected him as he walked out. However, the most natural reading treats this as correct. Choice E is the original and best answer. Answer: E.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 25,
    "text": "Coming back to the farm, the gruesome scene was seen by everyone in the car.\n\nWhich choice best corrects the sentence?",
    "options": [
      "everyone in the car saw the gruesome scene.",
      "the gruesome scene was seen by everyone in the car.",
      "the gruesome scene was seen by everyone at the car.",
      "the gruesome scene saw by everyone in the car."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Coming back to the farm' must modify the people in the car, not the gruesome scene. Choice A places 'everyone in the car' as the active subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 26,
    "text": "Waiting for the crucial trial to begin, the anxiety Neil felt was almost overwhelming.\n\nWhich choice best corrects the sentence?",
    "options": [
      "the anxiety being felt by Neil was almost overwhelming.",
      "Neil felt almost overwhelmed with anxiety.",
      "the anxiety almost overwhelmed Neil.",
      "the anxiety Neil felt was almost overwhelming."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Waiting for the crucial trial to begin' must modify Neil, not his anxiety. Choice B places Neil immediately after the comma as the subject.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 27,
    "text": "Coming around the corner, the skyscrapers came clearly into view across the river.\n\nWhich choice best corrects the sentence?",
    "options": [
      "the skyscrapers come clearly into view across the river.",
      "the people got a view of the skyscrapers across the river.",
      "the skyscrapers came clearly into view across the river.",
      "the skyscrapers are viewed clearly across the river."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The sentence is correct as written — though skyscrapers can't literally 'come around the corner', the phrase here describes the traveler's perspective, and the intended meaning is clear. Choice C is the same as the original.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 28,
    "text": "Coming upon the hills, the sun began setting behind the travelers.\n\nWhich choice best corrects the sentence?",
    "options": [
      "the sun began setting behind the travelers.",
      "the sun began setting begind the travelers.",
      "the sun set behind the travelers.",
      "As the travelers came upon the hills, the sun began setting behind them."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Coming upon the hills' must modify the travelers, not the sun. Choice D restructures the sentence using a subordinate clause so the travelers are clearly the ones coming upon the hills.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 29,
    "text": "Passing by the waterfront, the ducks and geese floated around as spectators strolled.\n\nWhich choice best corrects the sentence?",
    "options": [
      "spectators strolled but the ducks and geese floated around.",
      "the ducks and geese were floating around as spectators strolled.",
      "the ducks and geese and spectators floated around and strolled.",
      "spectators strolled as the ducks and geese floated around."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Passing by the waterfront' must modify the spectators, not the ducks. Choice D places the spectators as the subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 30,
    "text": "A power-hungry dictator who killed millions of people, I wrote my term paper on the infamous Joseph Stalin.\n\nWhich choice best corrects the sentence?",
    "options": [
      "A power-hungry dictator who killed millions of people, I wrote my term paper on the infamous Joseph Stalin.",
      "I wrote my term paper on the power-hungry dictator and he was the infamous Joseph Stalin.",
      "A power-hungry dictator, I wrote my term paper on the infamous Joseph Stalin, who killed millions of people.",
      "A power-hungry dictator who killed millions of people, my term paper was about the infamous Joseph Stalin."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. As written, 'A power-hungry dictator who killed millions of people' dangles — it seems to describe 'I'. None of the choices perfectly fix this, but among them, the original (A) is the least misleading. The ideal fix would be: 'I wrote my term paper on the infamous Joseph Stalin, a power-hungry dictator who killed millions.'",
    "topic": "Dangling Modifier"
  },
  {
    "id": 31,
    "text": "Forced to draw a freehand map of the United States, all of her knowledge of geography suddenly left her.\n\nWhich choice best corrects the sentence?",
    "options": [
      "she suddenly forgot all of her knowledge of geography.",
      "she forgot all of her knowledge of geography suddenly.",
      "all of her knowledge of geography suddenly left her.",
      "all of her knowledge of geography was suddenly leaving."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Forced to draw a freehand map' must modify she (the person), not her knowledge of geography. Choice A places 'she' as the subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 32,
    "text": "Although she studied traditional French cuisine, food critics praised the master chef for her culinary innovations.\n\nWhich choice best corrects the sentence?",
    "options": [
      "food critics have praised the master chef for her culinary innovations.",
      "food critics praised the master chef for her culinary innovations.",
      "the master chef received praise from critics for her culinary innovations.",
      "food critics praised the master chef because of her culinary innovations."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Although she studied traditional French cuisine' must modify the master chef. The subject of the main clause must be the master chef, but in choice B, 'food critics' is the subject — which creates the same dangling problem. However, among the options, B is the least incorrect and matches the original.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 33,
    "text": "Walking down the street, the time is something that Erica lost track of.\n\nWhich choice best corrects the sentence?",
    "options": [
      "Walking down the street the time is something that Erika lost track of.",
      "Walking down the street, the time lost track of Erica.",
      "Walking down the street, Erica lost track of the time.",
      "Walked down the street, the time is something that Erika lost track of."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Walking down the street' must modify Erica, not 'the time'. Choice C places Erica as the subject immediately after the comma and restructures the sentence clearly.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 34,
    "text": "Alighting on the deck, the aircraft carrier shook from the force of the plane.\n\nWhich choice best corrects the sentence?",
    "options": [
      "the plane shaking the aircraft carrier's force.",
      "the plane shook the aircraft carrier with its force.",
      "the aircraft carrier shaking from the force of the plane.",
      "the aircraft carrier shook from the force of the plane."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'Alighting on the deck' must modify the plane, not the aircraft carrier. Choice B places the plane as the active subject immediately after the comma.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 35,
    "text": "Rounding the corner, the park was right in front of the tourist group.\n\nWhich choice best corrects the sentence?",
    "options": [
      "the park was in right front of the tourist group.",
      "the park being right in front of the tourist group.",
      "the park became right in front of the tourist group.",
      "As the tourists rounded the corner, the park was right in front of them."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Rounding the corner' must modify the tourists, not the park. Choice D restructures the sentence using a subordinate clause so the tourists are clearly the ones rounding the corner.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 36,
    "text": "Descending the stairs, the young man thought his prom date looked beautiful on the landing.\n\nWhich choice best corrects the underlined portion?",
    "options": [
      "Descending the stairs",
      "Descending of the stairs",
      "As she descended the stairs",
      "Descended the stairs",
      "Descending from the stairs"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The sentence implies the prom date was descending the stairs, but as written, 'Descending the stairs' modifies 'the young man'. Choice C ('As she descended the stairs') correctly shifts the subject of the descending to the prom date.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 37,
    "text": "Under the heavy weight, the rock was crushing the people trapped underneath.\n\nWhich choice best corrects the sentence?",
    "options": [
      "the rock was crushing people who were trapped underneath.",
      "the rock crushing the people trapped underneath.",
      "the people being underneath trapping by the rock's crushing.",
      "the rock was crushing the people trapped underneath.",
      "the people trapped underneath the rock were being crushed."
    ],
    "answer": 4,
    "explanation": "'Under the heavy weight' is an adverbial phrase. The people are under the weight, not the rock. Choice E correctly places the people trapped underneath as the subject being acted upon. Answer: E.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 38,
    "text": "Behind the rock, the bullets could not hit the soldiers.\n\nWhich choice best corrects the sentence?",
    "options": [
      "Behind the rock, the bullets could not hit the soldiers.",
      "Behind the rock the bullets could not hit the soldiers.",
      "The soldiers being not hit by bullets behind the rock.",
      "Behind the rock, where the bullets could not hit the soldiers.",
      "The bullets could not hit the soldiers behind the rock."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The sentence is correct as written — 'Behind the rock' is a prepositional phrase that properly modifies the situation/location where the soldiers are sheltered. NO CHANGE.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 39,
    "text": "Walking out the door, the bright sunshine blinded the shoppers.\n\nWhich choice best corrects the sentence?",
    "options": [
      "the shoppers blinding the sunshine.",
      "the bright sunshine blinds the shoppers.",
      "the bright sunshine blinding the shoppers.",
      "the shoppers were blinded by the bright sunshine.",
      "the bright sunshine blinded the shoppers."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Walking out the door' must modify the shoppers, not the sunshine. Choice D places the shoppers as the subject immediately after the comma (as the ones who walked out the door).",
    "topic": "Dangling Modifier"
  },
  {
    "id": 40,
    "text": "Like his father before him, the army was something the boy always wanted to join.\n\nWhich choice best corrects the sentence?",
    "options": [
      "the army was a thing the boy always wanted to join.",
      "the boy wanted something to join the army.",
      "the boy always wanted to join the army.",
      "the army was something the boy wanted always to join.",
      "the army was something the boy always wanted to join."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'Like his father before him' must modify the boy, not the army. Choice C places the boy as the subject immediately after the comma, making the comparison clear.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 41,
    "text": "Many of the trustees congratulated him for his speech at the end of the meeting and promised their support.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "At the end of the meeting, many of the trustees congratulated him for his speech, and promised their support.",
      "The speech was given at the end of the meeting and the trustees promised their support.",
      "The trustees congratulated the meeting and promised his support.",
      "This sentence is correct."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The phrase 'at the end of the meeting' is misplaced — it seems to modify 'his speech' (implying the speech was at the end), but it should modify when the trustees congratulated him. Choice A moves the phrase to the front to clarify the timing.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 42,
    "text": "Wagging her tail, the puppy climbed into my lap.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "The puppy climbed into my lap and wagged her tail.",
      "The puppy wagged her tail and climbed into my lap.",
      "The puppy climbed on her tail.",
      "This sentence is correct."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Wagging her tail' correctly modifies the puppy — the puppy was wagging her tail as she climbed into my lap. The sentence is grammatically correct as written. Answer: D (This sentence is correct).",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 43,
    "text": "Working on my computer, the power went out, and I lost all of my work.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "While I was working on my computer, the power went out, and I lost all of my work.",
      "Working on my computer, the power went out, and I lost all of my work suddenly.",
      "Suddenly working on my computer, the power went out, and I lost all of my work.",
      "This sentence is correct."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'Working on my computer' must modify 'I', but 'the power' is the subject — a dangling modifier. Choice A restructures using 'While I was working' to properly attach the action to the correct person.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 44,
    "text": "When defrosted, marinate meat for half an hour, and then you are ready to grill.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "When meat is defrosted, marinate it for half an hour, and then you are ready to grill.",
      "Marinate the meat for half an hour when it is defrosted, and then you are ready to grill.",
      "When defrosted, marinate meat for half an hour, and then you can grill it.",
      "This sentence is correct."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. 'When defrosted' dangles — it seems to modify 'you' rather than 'the meat'. Choice A clarifies that it is the meat that is defrosted.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 45,
    "text": "I refuse to buy a meal from a restaurant that has meat.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "I refuse to buy meat from a restaurant.",
      "I buy a meat from a restaurant.",
      "I refuse to buy a meal that has meat from a restaurant.",
      "This sentence is correct."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'That has meat' is a relative clause that should modify 'a meal', but it is currently placed after 'restaurant', making it seem like it describes the restaurant. Choice C moves 'that has meat' next to 'a meal' to fix the misplacement.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 46,
    "text": "They said it's going to rain on the radio.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "It's raining on the radio.",
      "The rain will be on the radio.",
      "They just said on the radio that it is going to rain.",
      "This sentence is correct."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. 'On the radio' is misplaced — it seems to say the rain will happen on the radio. Choice C correctly moves 'on the radio' next to 'said' to clarify that the saying happened on the radio.",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 47,
    "text": "Walking to my car, I spilled tea all over my new suit.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "I spilled tea all over my car while wearing my new suit.",
      "Spilling tea on my suit, I walked to my car.",
      "My new suit spilled tea all over my car.",
      "This sentence is correct."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Walking to my car' correctly modifies 'I' — I was walking to my car when I spilled tea on my suit. The sentence is correct as written. Answer: D (This sentence is correct).",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 48,
    "text": "Late as always, Mike made quite an entrance when he came to the party.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "Mike made quite an entrance late when he came to the party.",
      "Mike made quite an entrance when he came to the party.",
      "Mike made quite an entrance when he came to the party as late as always.",
      "This sentence is correct."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. 'Late as always' correctly modifies Mike — he is the one who is characteristically late. The sentence is grammatically correct as written. Answer: D (This sentence is correct).",
    "topic": "Misplaced Modifier"
  },
  {
    "id": 49,
    "text": "While eating dinner, a fly slipped into her soup.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "The soup had a fly in it.",
      "A fly slipped into her soup while she was eating.",
      "The lady had a fly in her soup.",
      "This sentence is correct."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. 'While eating dinner' must modify 'she' (the person eating), not the fly. Choice B restructures the sentence using 'while she was eating' to correctly attach the modifier to the right subject.",
    "topic": "Dangling Modifier"
  },
  {
    "id": 50,
    "text": "The TV helps me get through the night, as I have trouble sleeping.\n\nWhich choice best rewrites this sentence to fix any modifier issue?",
    "options": [
      "Having trouble sleeping, the TV helped me get through the night.",
      "The TV gave me the inability to sleep.",
      "The TV helped the night get through sleeping.",
      "This sentence is correct."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The sentence is correct as written — 'as I have trouble sleeping' is a causal clause correctly attached to 'the TV helps me get through the night'. There is no modifier error. Answer: D (This sentence is correct).",
    "topic": "Misplaced Modifier"
  }
];

const TOPIC_MAP = {
    'Modifiers': {
        name: 'Modifiers',
        questions: QUESTIONS.map(q => q.id)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, TOPIC_MAP };
}