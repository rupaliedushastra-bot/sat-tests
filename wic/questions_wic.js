// =============================================
// Digital SAT – Topic Test: Words in Context
// 49 Questions | Single Timed Module (60 min)
// answers: 0=A, 1=B, 2=C, 3=D
// =============================================

const QUESTIONS = [
  // ── SET 1: Official SAT-Style (7 Qs) ──────────────────────────
  {
    id: 1,
    text: `In recommending Bao Phi's collection Sông I Sing, a librarian noted that pieces by the spoken-word poet don't lose their ______ nature when printed: the language has the same pleasant musical quality on the page as it does when performed by Phi.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['jarring', 'scholarly', 'melodic', 'personal'],
    answer: 2,
    explanation: '"Melodic" matches "pleasant musical quality." The clue is that the language sounds like music even on the page. Jarring = harsh; scholarly = academic; personal = subjective — none fit the musical context.',
    topic: 'Set 1 – Fill in the Blank'
  },
  {
    id: 2,
    text: `The following text is from F. Scott Fitzgerald's 1925 novel The Great Gatsby.\n\n[Jay Gatsby] was balancing himself on the dashboard of his car with that resourcefulness of movement that is so peculiarly American — that comes, I suppose, with the absence of lifting work in youth and, even more, with the formless grace of our nervous, sporadic games. This quality was continually breaking through his punctilious manner in the shape of restlessness.\n\nAs used in the text, what does the word "quality" most nearly mean?`,
    options: ['Characteristic', 'Standard', 'Prestige', 'Accomplishment'],
    answer: 0,
    explanation: '"Quality" here refers to the trait or characteristic (resourcefulness of movement) described in the previous sentence. Standard = a benchmark; Prestige = high status; Accomplishment = an achievement — none carry the same meaning as an inherent trait.',
    topic: 'Set 1 – Meaning in Context'
  },
  {
    id: 3,
    text: `Some foraging models predict that the distance bees travel when foraging will decline as floral density increases, but biologists Shalene Jha and Claire Kremen showed that bees' behavior is inconsistent with this prediction if flowers in dense patches are ______: bees will forage beyond patches of low species richness to acquire multiple resource types.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['depleted', 'homogeneous', 'immature', 'dispersed'],
    answer: 1,
    explanation: '"Homogeneous" (all the same species) creates the condition that bees will leave — "low species richness" is the restatement of homogeneous. Depleted = used up; immature = not grown; dispersed = spread out — none explain why variety would be lacking.',
    topic: 'Set 1 – Fill in the Blank'
  },
  {
    id: 4,
    text: `Osage Nation citizen Randy Tinker-Smith produced and directed the ballet Wahzhazhe, which vividly chronicles Osage history and culture. Telling Osage stories through ballet is ______ choice because two of the foremost ballet dancers of the twentieth century were Osage: sisters Maria and Marjorie Tallchief.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['an unpredictable', 'an arbitrary', 'a determined', 'a suitable'],
    answer: 3,
    explanation: '"Suitable" = fitting, appropriate. The passage explains WHY ballet is a fitting choice — two of the greatest ballet dancers were Osage. Unpredictable and arbitrary both mean random/surprising, contradicting the justification given. Determined = resolved, not relevant here.',
    topic: 'Set 1 – Fill in the Blank'
  },
  {
    id: 5,
    text: `The following text is from Booth Tarkington's 1921 novel Alice Adams.\n\nMrs. Adams had always been fond of vases, she said, and every year her husband's Christmas present to her was a vase of one sort or another—whatever the clerk showed him, marked at about twelve or fourteen dollars.\n\nAs used in the text, what does the word "marked" most nearly mean?`,
    options: ['Stained', 'Staged', 'Watched', 'Priced'],
    answer: 3,
    explanation: '"Marked at about twelve or fourteen dollars" uses the retail sense of "marked" — to label with a price. Stained = discolored; staged = arranged; watched = observed — none fit a shopping context.',
    topic: 'Set 1 – Meaning in Context'
  },
  {
    id: 6,
    text: `The following text is adapted from Zora Neale Hurston's 1921 short story "John Redding Goes to Sea." John wants to travel far beyond the village where he lives near his mother, Matty.\n\n[John] had on several occasions attempted to reconcile his mother to the notion, but found it a difficult task. Matty always took refuge in self-pity and tears. Her son's desires were incomprehensible to her, that was all.\n\nAs used in the text, what does the phrase "reconcile his mother to" most nearly mean?`,
    options: ['Get his mother to accept', 'Get his mother to apologize for', 'Get his mother to match', 'Get his mother to reunite with'],
    answer: 0,
    explanation: '"Reconcile someone to" means to get them to accept or make peace with a situation. Since Matty refuses and takes refuge in tears, she cannot accept the idea. Apologize, match, and reunite are different meanings of reconcile that don\'t fit this context.',
    topic: 'Set 1 – Meaning in Context'
  },
  {
    id: 7,
    text: `Mineralogical differences are detectable in samples collected from two locations on the near-Earth asteroid Ryugu, but such differences may not indicate substantial compositional variations in the asteroid. Cosmochemist Kazuhide Nagashima and colleagues note that at the small scale of the samples, the distribution of minerals is unlikely to be ______.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['redundant', 'neglected', 'uniform', 'ongoing'],
    answer: 2,
    explanation: '"Uniform" (the same throughout) is the word needed: if the samples are small, the mineral distribution won\'t be consistent/uniform across the whole asteroid. This explains why differences found at two small locations don\'t necessarily reflect the whole asteroid.',
    topic: 'Set 1 – Fill in the Blank'
  },

  // ── SET 2: Official SAT-Style (7 Qs) ──────────────────────────
  {
    id: 8,
    text: `Visual artist Gabriela Alemán states that the bold colors of comics, pop art, and Latinx culture have always fascinated her. This passion for the rich history and colors of her Latinx community translates into the ______ artworks she produces.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['unknown', 'reserved', 'definite', 'vivid'],
    answer: 3,
    explanation: '"Vivid" = intensely bright/colorful, directly echoing "bold colors" and "rich history and colors." Unknown = unrecognized; reserved = restrained (opposite of bold colors); definite = certain — none connect to bold, rich color.',
    topic: 'Set 2 – Fill in the Blank'
  },
  {
    id: 9,
    text: `Economist Marco Castillo and colleagues showed that nuisance costs — the time and effort people must spend to make donations — reduce charitable giving. Charities can mitigate this effect by compensating donors for nuisance costs, but those costs, though variable, are largely ______ donation size, so charities that compensate donors will likely favor attracting a few large donors over many small donors.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['predictive of', 'subsumed in', 'independent of', 'supplemental to'],
    answer: 2,
    explanation: '"Independent of" donation size means the nuisance cost is the same whether you donate $5 or $500. This explains why charities prefer large donors — compensating the fixed nuisance cost is only worthwhile for big donations.',
    topic: 'Set 2 – Fill in the Blank'
  },
  {
    id: 10,
    text: `Business researcher Melanie Brucks and colleagues found that remote video conference meetings may be less conducive to brainstorming than in-person meetings are. The researchers suspect that video meeting participants are focused on staring at the speaker on the screen and don't allow their eyes or mind to wander as much, which may ultimately ______ creativity.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['recommend', 'criticize', 'construct', 'impede'],
    answer: 3,
    explanation: '"Impede" = block or hinder. If mind-wandering is necessary for creativity, and video calls prevent it, then video calls hinder creativity. Recommend = suggest (opposite); criticize = judge negatively; construct = build — none fit.',
    topic: 'Set 2 – Fill in the Blank'
  },
  {
    id: 11,
    text: `Biologist Jane Edgeloe and colleagues have located what is believed to be the largest individual plant in the world in the Shark Bay area of Australia. The plant is a type of seagrass called Posidonia australis, and it ______ approximately 200 square kilometers.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['acknowledges', 'produces', 'spans', 'advances'],
    answer: 2,
    explanation: '"Spans" = extends across an area. A plant covering 200 square kilometers "spans" that distance. Acknowledges = recognizes; produces = creates; advances = moves forward — none describe physical area coverage.',
    topic: 'Set 2 – Fill in the Blank'
  },
  {
    id: 12,
    text: `Stephen Hannock's luminous landscape paintings are appealing to viewers but have elicited little commentary from contemporary critics, a phenomenon that may be due to the very fact that the paintings seem so ______. Many critics focus their attention on art that is cryptic or overtly challenging.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['innovative', 'accessible', 'profound', 'subversive'],
    answer: 1,
    explanation: '"Accessible" = easy to appreciate and understand. Critics ignore work that isn\'t cryptic or challenging, so Hannock\'s paintings are too accessible — the opposite of cryptic. Innovative, profound, and subversive would attract critical attention, not reduce it.',
    topic: 'Set 2 – Fill in the Blank'
  },
  {
    id: 13,
    text: `The following text is adapted from Nathaniel Hawthorne's 1837 story "Dr. Heidegger's Experiment." The main character, a physician, is experimenting with rehydrating a dried flower.\n\nAt first [the rose] lay lightly on the surface of the fluid, appearing to imbibe none of its moisture. Soon, however, a singular change began to be visible. The crushed and dried petals stirred and assumed a deepening tinge of crimson, as if the flower were reviving from a deathlike slumber.\n\nAs used in the text, what does the phrase "a singular" most nearly mean?`,
    options: ['A lonely', 'A disagreeable', 'An acceptable', 'An extraordinary'],
    answer: 3,
    explanation: '"Singular" in literary usage = remarkable, extraordinary, one-of-a-kind. The change described (a dead flower reviving) is indeed extraordinary. Lonely = solitary; disagreeable = unpleasant; acceptable = adequate — none capture the sense of marvel.',
    topic: 'Set 2 – Meaning in Context'
  },
  {
    id: 14,
    text: `US traffic signals didn't always contain the familiar three lights (red, yellow, and green). Traffic lights only ______ red and green lights until the three-light traffic signal was developed in 1923.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['avoided', 'featured', 'appreciated', 'disregarded'],
    answer: 1,
    explanation: '"Featured" = had as a component or included. Traffic lights "featured" (included/had) only red and green until 1923. Avoided = stayed away from; appreciated = valued; disregarded = ignored — all illogical for describing physical features of a device.',
    topic: 'Set 2 – Fill in the Blank'
  },

  // ── VOCABULARY IN CONTEXT (25 Qs) ─────────────────────────────
  {
    id: 15,
    text: `To celebrate getting a new job at a law office, Mike decided to spend time with his family. They all went to the park and had a cookout. Mike had a youthful nature and loved playing with his nieces and nephews on the jungle gym.\n\nAs used in the text, what does the word "nature" most nearly mean?`,
    options: ['environment', 'humor', 'personality', 'structure'],
    answer: 2,
    explanation: '"Nature" here refers to Mike\'s innate personality or character — he is playful like a child. Environment = surroundings; humor = comedy; structure = framework — none describe a personal character trait.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 16,
    text: `Spencer was very interested in who all of her friends had a crush on. The prying girl asked them so many personal questions to try to figure it out.\n\nAs used in the text, what does the word "prying" most nearly mean?`,
    options: ['nosy', 'interference', 'curious', 'lifting'],
    answer: 0,
    explanation: '"Prying" = intrusively inquisitive, nosy. She asks personal questions to uncover others\' private information. Curious is close but lacks the intrusive/inappropriate quality. Interference and lifting are unrelated.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 17,
    text: `Will's parents knew he was a very smart child. He mastered concepts in school much more quickly than other students. However, his grades did not reflect his intelligence. His lackadaisical nature was his downfall as he never completed his homework assignments on time.\n\nAs used in the text, what does the word "lackadaisical" most nearly mean?`,
    options: ['lazy', 'drowsy', 'moronic', 'passionate'],
    answer: 0,
    explanation: '"Lackadaisical" = lacking enthusiasm and care, lazy. The clue is he never completed homework despite being smart. Drowsy = sleepy (too narrow); moronic = stupid (contradicts "very smart"); passionate = opposite of the meaning.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 18,
    text: `Johnny was afraid to jump off the diving board, so his sister called him a chicken. He knew he wouldn't get hurt but he was still scared, so he turned around and climbed back down the ladder.\n\nAs used in the text, what does the word "chicken" most nearly mean?`,
    options: ['weakling', 'fowl', 'petrified', 'coward'],
    answer: 3,
    explanation: '"Chicken" as a taunt = coward (someone afraid to act). Weakling refers to physical strength, not bravery; fowl is the literal bird; petrified = extremely scared (that\'s his state, not what the sister called him).',
    topic: 'Vocabulary in Context'
  },
  {
    id: 19,
    text: `The proud boy talked about his accomplishments only when asked; he never boasted.\n\nAs used in the text, what does the word "proud" most nearly mean?`,
    options: ['haughty', 'glorified', 'conceited', 'confident'],
    answer: 3,
    explanation: 'Since he does NOT boast, "proud" here means having self-confidence rather than arrogance. Haughty and conceited both mean arrogantly proud (boastful) — which contradicts the sentence. Glorified = celebrated by others.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 20,
    text: `The discounted dress fell apart the first time Emily tried to put it on. She couldn't believe the stitching was done so poorly. Next time, Emily thought, I will go to a boutique.\n\nAs used in the text, what does the word "discounted" most nearly mean?`,
    options: ['rebated', 'overlooked', 'shabby', 'cheap'],
    answer: 3,
    explanation: '"Discounted" in retail = sold at a reduced/cheap price. The poor quality confirms it was low-cost merchandise. Rebated = money returned after purchase (specific financial term); overlooked = ignored; shabby = worn out (describes quality, not price).',
    topic: 'Vocabulary in Context'
  },
  {
    id: 21,
    text: `Juan was surprised by what he heard, but discounted the information as lies. He knew many of his peers were jealous of his success, but he doubted they would stoop so low.\n\nAs used in the text, what does the word "discounted" most nearly mean?`,
    options: ['reduced', 'forgot', 'concession', 'dismissed'],
    answer: 3,
    explanation: '"Discounted" here = dismissed, rejected as unworthy of belief. This is a different meaning from Q20\'s "discounted" — context is key. Reduced = lowered in price; forgot = failed to remember; concession = a compromise.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 22,
    text: `In chemistry class, we started a unit learning about pH. Acids often have a corrosive component to them. We had to mix some chemicals together and ended up with an acid that was so strong it burned a hole through the container!\n\nAs used in the text, what does the word "corrosive" most nearly mean?`,
    options: ['weighty', 'potent', 'tenacious', 'athletic'],
    answer: 1,
    explanation: '"Corrosive" = capable of destroying or eating away material, i.e., potent/powerful. The acid was so potent it burned through the container. Weighty = heavy; tenacious = persistent; athletic = physically fit — none fit a chemistry context.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 23,
    text: `When the reporter called the actress for a statement, her assistant said she was not readily available. The reporter doubted this as he later found out the actress had spent the day lounging around the pool.\n\nAs used in the text, what does "not readily available" most nearly mean?`,
    options: ['could not be reached', 'was out of the country', 'was indisposed', 'would be cognizant'],
    answer: 0,
    explanation: '"was not readily available" = could not be easily contacted/reached. The reporter discovered she was home but simply not taking calls — she could not be reached. Was out of the country = false (she was home); was indisposed = unwell (implies illness); cognizant = aware.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 24,
    text: `After she put a whoopee cushion under his seat at dinner, Joey set up a prank to exact his revenge on his older sister. It was time for her to feel embarrassed.\n\nAs used in the text, what does the phrase "exact his revenge" most nearly mean?`,
    options: ['avenge', 'impose his retribution', 'enact his cruelty', 'tit for tat'],
    answer: 0,
    explanation: '"Exact his revenge" = avenge (get payback). Avenge is the most concise and precise match. Impose his retribution is wordy and formal; enact his cruelty implies malice beyond a prank; tit for tat is informal slang, not a precise paraphrase.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 25,
    text: `In considering the prosecutor, the judge decided to give leeway on some mistakes as it was his first case. She could remember fumbling through her opening argument the first time she was in court.\n\nAs used in the text, what does the phrase "give leeway" most nearly mean?`,
    options: ['provide room to grow', 'evoke carte blanche', 'tolerate a margin of freedom', 'grant amnesty'],
    answer: 2,
    explanation: '"Give leeway" = allow some flexibility or tolerance for error. "Tolerate a margin of freedom" captures this best. Provide room to grow implies mentorship; carte blanche = unlimited permission (too broad); grant amnesty = formal legal pardon (far too serious for courtroom errors).',
    topic: 'Vocabulary in Context'
  },
  {
    id: 26,
    text: `The audience waited with bated breath for the climax of the movie. The entire story had led up to the final battle between the villain and the hero. It was nerve-wracking to see who would come out triumphant.\n\nAs used in the text, what does the phrase "bated breath" most nearly mean?`,
    options: ['apprehension', 'impatiently', 'stagnant inhalation', 'cessation'],
    answer: 0,
    explanation: '"Bated breath" = anxious anticipation, apprehension. The audience is nervously awaiting the outcome. Impatiently = an adverb (grammatically wrong); stagnant inhalation = literal misreading; cessation = stopping completely.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 27,
    text: `Bennie and Jane liked to boat on the river on hot summer days. The current was powerful; it pulled the boat downstream incredibly quickly.\n\nAs used in the text, what does the word "current" most nearly mean?`,
    options: ['contemporary', 'waterway', 'flowing water', 'cutting-edge tide'],
    answer: 2,
    explanation: '"Current" in a river context = the flow or movement of water. "Flowing water" is the most direct synonym. Contemporary = modern; waterway = the river itself (not the flow); cutting-edge tide = incorrect technical usage.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 28,
    text: `Emily had reservations about being invited to Kayla's house. The last time they hung out it hadn't gone very well. In fact, Emily had stormed out angrily after Kayla made some rude comments.\n\nAs used in the text, what does the word "reservations" most nearly mean?`,
    options: ['detainments', 'territories', 'doubts', 'skeptical'],
    answer: 2,
    explanation: '"Reservations" = doubts or hesitations. Emily is hesitant due to past experience. Detainments = being held back (legal sense); territories = areas of land; skeptical = an adjective, not a noun (grammatically wrong as a replacement).',
    topic: 'Vocabulary in Context'
  },
  {
    id: 29,
    text: `While Mr. Davis, the art teacher, approved of creativity, he couldn't sanction the students expressing themselves in the form of graffiti. Stylistically, he could appreciate the pieces, but they were still vandalism.\n\nAs used in the text, what does the word "sanction" most nearly mean?`,
    options: ['endorse', 'consent with', 'confirm that', 'boycott'],
    answer: 0,
    explanation: '"Sanction" here = officially approve or endorse. He could not endorse graffiti even if he liked the style. Consent with is awkward grammatically; confirm that changes the meaning; boycott = actively refuse to participate (different from failing to approve).',
    topic: 'Vocabulary in Context'
  },
  {
    id: 30,
    text: `Andrew couldn't help it. He was still harboring bad feelings about his ex-girlfriend long after their breakup. There was simply no excuse for how she had treated him.\n\nAs used in the text, what does the word "harboring" most nearly mean?`,
    options: ['disregarding', 'camouflaging', 'entertaining', 'cherishing'],
    answer: 2,
    explanation: '"Harboring" feelings = holding onto or entertaining them in one\'s mind. "Entertaining" in this sense means keeping in mind, not having fun. Disregarding = ignoring (opposite); camouflaging = hiding; cherishing = treasuring positively.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 31,
    text: `Since Liz was trying to lose weight, she picked out lean turkey at the grocery store. She wrinkled her nose at the thought of how tasteless the meat would be compared to the beef she usually bought.\n\nAs used in the text, what does the word "lean" most nearly mean?`,
    options: ['sinewy', 'slant', 'low-calorie', 'nutritious'],
    answer: 2,
    explanation: '"Lean" meat = low in fat, and therefore low-calorie — chosen specifically because she is dieting. Sinewy = tough/muscular (different quality); slant = at an angle (unrelated); nutritious = healthful generally (lean specifically means low-fat, not just healthy).',
    topic: 'Vocabulary in Context'
  },
  {
    id: 32,
    text: `Eloise was so excited about her birthday. She kept asking her parents about the party, but they carefully skirted her questions.\n\nAs used in the text, what does the word "skirted" most nearly mean?`,
    options: ['bordered', 'detoured about', 'evaded', 'avoidance of'],
    answer: 2,
    explanation: '"Skirted" questions = evaded them, avoided answering directly. Evaded is the cleanest synonym. Bordered = touched the edge; detoured about is informal and clunky; avoidance of is a noun phrase, grammatically wrong.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 33,
    text: `Even though the homework was difficult, Maria didn't mind working on it. She knew in the long run it would help her be more prepared for college.\n\nAs used in the text, what does the phrase "didn't mind" most nearly mean?`,
    options: ['was willingly', 'took offense', 'couldn\'t heed', 'adhered'],
    answer: 0,
    explanation: '"Didn\'t mind" = was willing to do it without complaint. "Was willingly" captures that attitude best, though it is slightly awkward grammatically. Took offense = was offended; couldn\'t heed = couldn\'t pay attention; adhered = stuck to a rule.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 34,
    text: `The pawn shop owner carefully inspected the ring. While the patron was convinced it was real silver, the owner determined it to be made of base metals.\n\nAs used in the text, what does the word "base" most nearly mean?`,
    options: ['menial', 'metallic', 'artificial', 'groundwork'],
    answer: 2,
    explanation: '"Base metals" = common, non-precious metals (not gold, silver, or platinum). In this context, artificial/imitation captures the sense of being counterfeit or non-genuine. Menial = lowly in work; metallic = made of metal (too broad); groundwork = foundation.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 35,
    text: `The shining sun was a welcome break from the miserable weeks of winter. It had been gloomy and cloudy since September!\n\nAs used in the text, what does the word "break" most nearly mean?`,
    options: ['dormancy', 'obstruction', 'fracture', 'hiatus'],
    answer: 3,
    explanation: '"Break" = a pause or temporary interruption. "Hiatus" is the best match — a pause from the ongoing winter gloom. Dormancy = a state of inactivity; obstruction = a blockage; fracture = a crack or break in an object.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 36,
    text: `Wren sleepily opened one eye and put a pillow over his ears. The birds were making such a racket it was impossible to stay asleep. He needed his sleep before the big tennis match.\n\nAs used in the text, what does the word "racket" most nearly mean?`,
    options: ['turmoil', 'clamor', 'roaring', 'swindle'],
    answer: 1,
    explanation: '"Racket" = loud, disturbing noise — clamor is the closest synonym. Turmoil = chaos/disorder (more emotional); roaring = a specific loud sound (like an engine or lion); swindle = a fraud (completely different meaning of "racket").',
    topic: 'Vocabulary in Context'
  },
  {
    id: 37,
    text: `Melinda was on the left in respect to the stage. She gave a great performance and everyone was impressed with her talent.\n\nAs used in the text, what does the phrase "in respect to" most nearly mean?`,
    options: ['deference', 'regard', 'point', 'admiration'],
    answer: 2,
    explanation: '"In respect to the stage" = in relation to / from the perspective of. "Point" in this context means viewpoint or reference point. Deference and admiration both mean showing honor — they describe an attitude, not a spatial relationship.',
    topic: 'Vocabulary in Context'
  },
  {
    id: 38,
    text: `Mel's track record was fraught with both awards and honors, but also countless references saying she was constantly late. When she showed up, her work was impeccable. However, her spacey nature generally made her distracted and she sometimes wouldn't even come into the office.\n\nAs used in the text, what does "track record" most nearly mean?`,
    options: ['indicator', 'updated resume', 'past performance', 'achievement'],
    answer: 2,
    explanation: '"Track record" = history of past performance. The passage reviews both positive and negative aspects of her history. Indicator = a sign; updated resume = a specific document; achievement = only the positive accomplishments (track record includes both good and bad).',
    topic: 'Vocabulary in Context'
  },
  {
    id: 39,
    text: `Edwin's admission to the movie was free because he was still under the age of five. Once he was six or older, it would cost $5 for him to see movies.\n\nAs used in the text, what does the word "free" most nearly mean?`,
    options: ['without cost', 'comped', 'footloose', 'emancipated'],
    answer: 0,
    explanation: '"Free" = no charge required — without cost. Comped = given a complimentary pass (implies a gesture by staff, not a policy for all children); footloose = unrestricted in movement; emancipated = legally freed from control (legal term, unrelated to ticket price).',
    topic: 'Vocabulary in Context'
  },

  // ── GRE-STYLE ADVANCED (10 Qs) ────────────────────────────────
  {
    id: 40,
    text: `With his sub-four minute mile Bannister broke a psychological barrier, and inspired thousands of others to attempt to overcome seemingly ______ hurdles.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['insurmountable', 'inane', 'trivial', 'traumatic'],
    answer: 0,
    explanation: '"Insurmountable" = impossible to overcome. Bannister\'s feat showed that barriers once thought impossible could be broken. Inane = silly/pointless; trivial = unimportant; traumatic = emotionally devastating — none describe barriers that seem impossible.',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 41,
    text: `Ricks has written extensively not only on the poetry of such (i)______ figures in English poetry as Milton and Housman, but also on the less obviously (ii)______ lyrics of Bob Dylan.\n\nBlank (i): obscurantist / arcane / established\nBlank (ii): canonical / popular / judicious\n\nChoose the best combination for both blanks.`,
    options: [
      'Blank (i): obscurantist — Blank (ii): canonical',
      'Blank (i): established — Blank (ii): canonical',
      'Blank (i): arcane — Blank (ii): popular',
      'Blank (i): established — Blank (ii): popular'
    ],
    answer: 1,
    explanation: 'Milton and Housman are "established" (recognized, canonical) poets. Bob Dylan\'s lyrics are "less obviously canonical" — not typically seen as literary classics despite their merit. Obscurantist = deliberately unclear; arcane = obscure (Milton is neither).',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 42,
    text: `People who seek advice from (i)______ often find that what they are told can seem true, because these seekers attribute significance to some predictions and ignore others. The mind seeks to make sense of predictions that, in themselves, have no (ii)______ value.\n\nBlank (i): experts / philosophers / clairvoyants\nBlank (ii): special / general / legal\n\nChoose the best combination for both blanks.`,
    options: [
      'Blank (i): experts — Blank (ii): special',
      'Blank (i): philosophers — Blank (ii): general',
      'Blank (i): clairvoyants — Blank (ii): special',
      'Blank (i): clairvoyants — Blank (ii): legal'
    ],
    answer: 2,
    explanation: 'The passage describes fortune-telling/psychic behavior — people seek "clairvoyants." The predictions have no "special" (predictive/meaningful) value on their own, yet the mind finds patterns. Experts give evidence-based advice; philosophers don\'t make predictions.',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 43,
    text: `Stress-induced amnesia is a rare and (i)______ phenomenon; it strikes the patient apparently without warning and the memory loss can be as (ii)______ as that induced by (iii)______ trauma.\n\nBlank (i): devastating / venial / pervasive\nBlank (ii): generic / limited / complete\nBlank (iii): unexpected / mental / physical\n\nChoose the best combination for all three blanks.`,
    options: [
      'Blank (i): devastating — Blank (ii): complete — Blank (iii): physical',
      'Blank (i): venial — Blank (ii): generic — Blank (iii): unexpected',
      'Blank (i): pervasive — Blank (ii): limited — Blank (iii): mental',
      'Blank (i): devastating — Blank (ii): limited — Blank (iii): unexpected'
    ],
    answer: 0,
    explanation: 'Stress-induced amnesia is "devastating" (serious, not minor/venial). The memory loss is as "complete" as that from physical trauma (head injury) — this comparison makes physical trauma the reference point. Pervasive = widespread; venial = minor/forgivable.',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 44,
    text: `The publishers, unwilling to (i)______ the entire risk, insisted that the author pay half the cost of the initial print run of his (ii)______ new book.\n\nBlank (i): hedge / shoulder / mitigate\nBlank (ii): unexceptionable / controversial / jaundiced\n\nChoose the best combination for both blanks.`,
    options: [
      'Blank (i): hedge — Blank (ii): unexceptionable',
      'Blank (i): shoulder — Blank (ii): controversial',
      'Blank (i): mitigate — Blank (ii): jaundiced',
      'Blank (i): hedge — Blank (ii): controversial'
    ],
    answer: 1,
    explanation: '"Shoulder" = bear/carry (as in shoulder the burden/risk). The publishers refused to shoulder all the financial risk. The book must be "controversial" — a risky book explains why publishers hesitated. Hedge = reduce risk partially; mitigate = lessen; jaundiced = biased.',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 45,
    text: `Science advances (i)______ as (ii)______ change abruptly and we are forced to stop and reorient ourselves to view old information in new ways.\n\nBlank (i): exponentially / inexorably / jerkily\nBlank (ii): paradigms / axioms / continuities\n\nChoose the best combination for both blanks.`,
    options: [
      'Blank (i): exponentially — Blank (ii): paradigms',
      'Blank (i): inexorably — Blank (ii): axioms',
      'Blank (i): jerkily — Blank (ii): paradigms',
      'Blank (i): jerkily — Blank (ii): continuities'
    ],
    answer: 2,
    explanation: 'Science advances "jerkily" — in sudden stops and starts, not smoothly. "Paradigms" (frameworks of understanding) change abruptly, forcing scientists to reorient. Exponentially = constantly growing; inexorably = unstoppably (both imply continuous progress, not jerky).',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 46,
    text: `The game of chess is an example of a ______ information system: the pieces sit inertly on the board until the players move them according to known rules.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['interactive', 'passive', 'cybernetic', 'disruptive'],
    answer: 1,
    explanation: '"Passive" = inactive without external action. Chess pieces sit inertly (passively) until a player acts. Interactive = requires back-and-forth (the chess pieces themselves don\'t interact, people do); cybernetic = self-regulating; disruptive = causing disruption.',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 47,
    text: `A highly intelligent person often thinks (i)______; a few snippets of information can trigger a (ii)______ conclusion that might not stand up to closer, and (iii)______, scrutiny.\n\nBlank (i): too deeply / too warily / too quickly\nBlank (ii): firm / labored / hasty\nBlank (iii): slower / precipitous / overt\n\nChoose the best combination for all three blanks.`,
    options: [
      'Blank (i): too deeply — Blank (ii): firm — Blank (iii): slower',
      'Blank (i): too warily — Blank (ii): labored — Blank (iii): precipitous',
      'Blank (i): too quickly — Blank (ii): hasty — Blank (iii): slower',
      'Blank (i): too quickly — Blank (ii): firm — Blank (iii): overt'
    ],
    answer: 2,
    explanation: 'Intelligent people sometimes think "too quickly" — jumping to a "hasty" conclusion from minimal information. Under "slower" scrutiny, the conclusion fails. This is the classic trap of intelligence: fast pattern recognition leading to hasty judgments.',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 48,
    text: `Major philosophical (i)______ about morality, identity and rationality can often be (ii)______ by thought experiments: short expositions that pose an abstract problem in a concrete manner with all the (iii)______ factors removed.\n\nBlank (i): certitudes / dilemmas / dogmas\nBlank (ii): mimicked / illuminated / evoked\nBlank (iii): extraneous / inherent / pivotal\n\nChoose the best combination for all three blanks.`,
    options: [
      'Blank (i): certitudes — Blank (ii): mimicked — Blank (iii): inherent',
      'Blank (i): dilemmas — Blank (ii): illuminated — Blank (iii): extraneous',
      'Blank (i): dogmas — Blank (ii): evoked — Blank (iii): pivotal',
      'Blank (i): dilemmas — Blank (ii): mimicked — Blank (iii): extraneous'
    ],
    answer: 1,
    explanation: 'Thought experiments address philosophical "dilemmas" (problems with no easy answer). They "illuminate" (clarify) these dilemmas by removing "extraneous" (irrelevant) factors to focus on the core problem. Certitudes = certainties (not what thought experiments address); dogmas = fixed beliefs.',
    topic: 'Advanced Vocabulary'
  },
  {
    id: 49,
    text: `All good comic writers use humor to ______, not to side-step the problems of human behavior.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
    options: ['amuse', 'avert', 'juxtapose', 'confront'],
    answer: 3,
    explanation: '"Confront" = face directly. The contrast is between using humor to confront problems vs. using it to avoid ("side-step") them. Good comic writing uses humor to tackle difficult truths head-on. Amuse = entertain (too mild); avert = prevent; juxtapose = place side by side (doesn\'t address engagement with problems).',
    topic: 'Advanced Vocabulary'
  }
];

const TOPIC_MAP = {
  'Words in Context': {
    name: 'Words in Context',
    questions: QUESTIONS.map(q => q.id)
  }
};