// =============================================
// SAT Hard Full Mock 4
// Module 1 = Hard (49 Qs) • Module 2 = Super Hard (49 Qs)
// Section 1: Reading & Writing (Mod 1: 27 Qs, Mod 2: 27 Qs) - 32 min each
// Section 2: Math (Mod 3: 22 Qs, Mod 4: 22 Qs) - 35 min each
// Total: 98 Questions • 134 Minutes • Scaled Score 400–1600
// =============================================

const RW_MODULE1 = [
  {
    "id": 1,
    "code": "H4-RW01",
    "section": "rw",
    "module": 1,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Hard",
    "text": "<p>Although early nineteenth-century historians often characterized the transition to industrial textile manufacturing as abrupt, recent economic archival research indicates that the shift was far more ______: traditional cottage handloom weaving persisted alongside automated steam-driven mills for decades before mechanized production finally achieved market dominance.</p>",
    "options": [
      "protracted",
      "disruptive",
      "precipitous",
      "superfluous"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The text contrasts the view that the transition was 'abrupt' with the archival evidence that handloom weaving 'persisted alongside automated steam-driven mills for decades.' Therefore, the shift was prolonged or drawn out, which matches 'protracted.' Choice A ('disruptive') does not capture the drawn-out temporal nature. Choice C ('precipitous') means sudden, which is the opposite of the evidence. Choice D ('superfluous') means unnecessary, which is irrelevant to the timeline."
  },
  {
    "id": 2,
    "code": "H4-RW02",
    "section": "rw",
    "module": 1,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Hard",
    "text": "<p>In her critical analysis of seventeenth-century Dutch genre painting, art historian Mari\u00ebt Westermann notes that Johannes Vermeer's domestic interiors were rarely mere photographic records; rather, they were ______ compositions in which every mundane household object was meticulously staged to convey allegorical moral commentary.</p>",
    "options": [
      "spontaneous",
      "calculated",
      "derivative",
      "fortuitous"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage states that the scenes were not 'mere photographic records' but were instead deliberately arranged, with 'every mundane household object... meticulously staged.' 'Calculated' precisely means planned or deliberately arranged for a particular effect. Choice A ('spontaneous') and Choice D ('fortuitous') describe unplanned occurrences, contradicting 'meticulously staged.' Choice C ('derivative') means unoriginal, which is not supported by the context."
  },
  {
    "id": 3,
    "code": "H4-RW03",
    "section": "rw",
    "module": 1,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Hard",
    "text": "<p>Biochemists investigating bioluminescence in deep-sea cephalopods were surprised to discover that the symbiotic bacteria responsible for light emission are not obligate partners; free-living strains in open seawater remain physiologically ______ and capable of sustained cellular respiration even in the complete absence of a host organism.</p>",
    "options": [
      "quiescent",
      "dormant",
      "viable",
      "deleterious"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The passage explains that the bacteria are 'not obligate partners' and can survive independently in open water, being 'capable of sustained cellular respiration even in the complete absence of a host.' 'Viable' means capable of surviving or living successfully. Choice A ('quiescent') and Choice C ('dormant') mean inactive or asleep, directly conflicting with 'sustained cellular respiration.' Choice D ('deleterious') means harmful, which does not fit."
  },
  {
    "id": 4,
    "code": "H4-RW04",
    "section": "rw",
    "module": 1,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Hard",
    "text": "<p>While some urban planners argue that widening expressways relieves traffic congestion, empirical studies of urban transit networks repeatedly demonstrate that adding highway capacity tends to ______ the very problem it seeks to address by inducing additional vehicular demand.</p>",
    "options": [
      "alleviate",
      "substantiate",
      "obviate",
      "exacerbate"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The text notes that highway expansion creates 'induced demand,' which worsens traffic congestion rather than relieving it. 'Exacerbate' means to make a problem or negative situation worse. Choice A ('alleviate') means to relieve, the opposite of the finding. Choice C ('obviate') means to remove or render unnecessary. Choice D ('substantiate') means to prove with evidence."
  },
  {
    "id": 5,
    "code": "H4-RW05",
    "section": "rw",
    "module": 1,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Hard",
    "text": "<p>The archaeological team\u2019s claim that a subterranean grain silo represented an organized municipal storage network remained entirely ______ until subsequent radiometric dating of adjacent ceramic shards confirmed that the structure was built and maintained contemporaneously with the citadel's central administrative complex.</p>",
    "options": [
      "conjectural",
      "definitive",
      "immutable",
      "axiomatic"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The text states the claim remained unproven 'until subsequent radiometric dating... confirmed that the structure was built and maintained contemporaneously with the citadel.' A claim that is plausible but unverified is 'conjectural.' Choice A ('definitive') and Choice D ('axiomatic') suggest established certainty, contradicting 'until... confirmed.' Choice C ('immutable') means unchangeable."
  },
  {
    "id": 6,
    "code": "H4-RW06",
    "section": "rw",
    "module": 1,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Hard",
    "text": "<p>Far from adhering rigidly to classical sonata structure, the composer\u2019s late piano trios actively ______ formal conventions, interweaving cadenzas into transitional passages and replacing customary recapitulations with chromatic improvisatory episodes.</p>",
    "options": [
      "codify",
      "subvert",
      "replicate",
      "reinforce"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage states that the composer did not adhere to classical conventions, but instead replaced traditional recapitulations with chromatic episodes and mixed cadenzas unexpectedly. 'Subvert' means to undermine or overturn established rules or conventions. Choices B, C, and D ('codify', 'replicate', 'reinforce') all mean to follow, establish, or strengthen conventions, the exact opposite of the author's meaning."
  },
  {
    "id": 7,
    "code": "H4-RW07",
    "section": "rw",
    "module": 1,
    "topic": "Craft & Structure \u2014 Text Structure and Purpose",
    "difficulty": "Hard",
    "text": "<p>In 1912, Alfred Wegener proposed the continental drift hypothesis, citing complementary continental coastlines and matching fossil distributions across ocean basins. __Geologists of his era, however, overwhelmingly rejected continental drift because Wegener could not identify a physically plausible mechanism powerful enough to drive continental landmasses through solid oceanic basalt.__ It was not until the mid-twentieth-century discovery of seafloor spreading and paleomagnetic striping along mid-ocean ridges that plate tectonics finally gained scientific consensus.</p>",
    "options": [
      "It establishes a definitive refutation of Wegener\u2019s original continental drift hypothesis that remains valid in contemporary geology.",
      "It introduces new paleomagnetic evidence that was unavailable to early twentieth-century geophysicists.",
      "It explains the primary theoretical deficiency that prevented contemporary scientists from endorsing Wegener\u2019s hypothesis.",
      "It summarizes the consensus view regarding how continents plow through the oceanic floor."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The underlined sentence explicitly details why Wegener's contemporaries rejected his theory: he could not identify a 'physically plausible mechanism' capable of moving continents through solid basalt rock. Choice A is incorrect because continental drift was not permanently refuted; it was later vindicated by plate tectonics. Choice C describes the sentence that follows, not the underlined sentence itself. Choice D misrepresents the reason for rejection as a consensus explanation of motion."
  },
  {
    "id": 8,
    "code": "H4-RW08",
    "section": "rw",
    "module": 1,
    "topic": "Craft & Structure \u2014 Cross-Text Connections",
    "difficulty": "Hard",
    "text": "<p><strong>Text 1</strong><br>For decades, evolutionary biologists asserted that tool use was an exclusively hominin cognitive hallmark. However, field observations of wild New Caledonian crows (<em>Corvus moneduloides</em>) constructing hooked twigs to extract wood-boring beetle larvae demonstrate that complex technological manufacture can evolve independently in avian lineages with radically different neuroanatomy.</p><p><strong>Text 2</strong><br>While avian tool shaping is undeniably sophisticated, comparative neurobiologists caution against conflating convergent behavioral outcomes with equivalent cognitive architecture. Crows possess high neuronal density in the avian nidopallium, but their reliance on rigid stereotypic motor routines suggests that their manufacturing reflects domain-specific adaptations rather than the open-ended, domain-general generative cognition characteristic of primates.</p>",
    "options": [
      "It questions the empirical validity of the field observations of New Caledonian crows reported in Text 1.",
      "It corroborates Text 1 by asserting that avian and primate tool manufacturing rely on homologous neural pathways.",
      "It contends that primate tool use is actually less flexible and generative than avian tool manufacture.",
      "It qualifies the broader cognitive implications drawn in Text 1 by arguing that the observed tool use may derive from domain-specific mechanisms rather than generalized intelligence."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Text 1 uses crow tool use to challenge the notion that tool manufacture is a uniquely hominin hallmark, implying high-order cognitive parity. Text 2 acknowledges the behavior but cautions that crow tool manufacture reflects 'domain-specific adaptations' rather than the 'domain-general generative cognition' of primates, thereby qualifying Text 1's broader cognitive implication. Choice A is incorrect because Text 2 does not deny the field observations. Choice B is incorrect because Text 2 stresses different, non-homologous architectures. Choice D contradicts both texts."
  },
  {
    "id": 9,
    "code": "H4-RW09",
    "section": "rw",
    "module": 1,
    "topic": "Information & Ideas \u2014 Central Ideas and Details",
    "difficulty": "Hard",
    "text": "<p>Historian Linda Colley argues that eighteenth-century British national identity was forged primarily in opposition to an external \"Other\"\u2014namely, Catholic France. Rather than emerging organically from shared domestic traditions among Scots, Welsh, and English populations, Britishness functioned as a composite patriotic umbrella constructed during protracted geopolitical conflicts, where common Protestantism and commercial rivalry superseded enduring internal ethnic tensions.</p>",
    "options": [
      "Eighteenth-century British identity was defined externally through religious and geopolitical opposition to France rather than uniform domestic cohesion.",
      "British identity in the eighteenth century developed primarily as an organic synthesis of ancient Scottish, English, and Welsh linguistic traditions.",
      "Protestant religious hegemony failed to bridge the intense economic competition dividing Scottish merchants from English trade cartels.",
      "France and Great Britain maintained a cooperative geopolitical alliance throughout the eighteenth century to preserve European commercial balance."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The passage states that British identity was forged 'in opposition to an external \"Other\"\u2014namely, Catholic France' and that 'common Protestantism and commercial rivalry superseded enduring internal ethnic tensions' rather than emerging organically from domestic traditions. Choice A contradicts 'Rather than emerging organically.' Choice C is refuted by the text, which says Protestantism superseded internal tensions. Choice D directly contradicts 'protracted geopolitical conflicts.'"
  },
  {
    "id": 10,
    "code": "H4-RW10",
    "section": "rw",
    "module": 1,
    "topic": "Information & Ideas \u2014 Inferences",
    "difficulty": "Hard",
    "text": "<p>Ecosystem ecologists studying nitrogen cycling in boreal forests have observed that moss carpets harboring nitrogen-fixing cyanobacteria provide substantial nutrient inputs to subarctic soils. However, when experimental warming plots simulated projected arctic climate conditions, feather moss coverage declined by over 40%, yet overall bioavailable nitrogen in the soil did not decrease proportionally. This resilience was attributed to increased microbial decomposition rates in thawed permafrost layers, which released previously immobilized organic nitrogen. This finding suggests that ______</p>",
    "options": [
      "cyanobacterial nitrogen fixation will completely cease across all arctic ecosystems under moderate warming.",
      "accelerated subsurface organic matter turnover can temporarily compensate for the loss of surface biological nitrogen fixers during initial warming phases.",
      "feather moss carpets are unnecessary for nutrient maintenance in current undisturbed boreal forests.",
      "thawed permafrost layers will permanently insulate boreal ecosystems from any climate-induced ecological disruptions."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage notes that while surface moss coverage fell by 40%, bioavailable soil nitrogen did not decrease because 'increased microbial decomposition rates in thawed permafrost layers... released previously immobilized organic nitrogen.' Thus, accelerated decomposition in the subsurface compensates for the loss of surface cyanobacterial nitrogen fixation during warming. Choice A overstates ('completely cease across all'). Choice B dismisses the importance of moss in undisturbed conditions. Choice D claims permanent insulation, which is unwarranted."
  },
  {
    "id": 11,
    "code": "H4-RW11",
    "section": "rw",
    "module": 1,
    "topic": "Information & Ideas \u2014 Command of Evidence (Textual)",
    "difficulty": "Hard",
    "text": "<p>In Edith Wharton\u2019s 1905 novel <em>The House of Mirth</em>, protagonist Lily Bart struggles to maintain her elevated social standing in Gilded Age New York while resisting the transactional marriages expected of women in her circle. Wharton emphasizes Lily's precarious socioeconomic status by contrasting her refined aesthetic sensibilities with her lack of capital autonomy.</p><p>Which quotation from <em>The House of Mirth</em> most effectively illustrates this contrast?</p>",
    "options": [
      "\"She was so evidently the victim of the civilization which had produced her, that the links of her break-down were clearly visible.\"",
      "\"She had been taught to believe that to be brilliantly dressed was an imperative duty, and that all other virtues could be compromised for social grace.\"",
      "\"She was like some rare flower grown for exhibition, whose petals would fall at the first rough touch of the outer world, yet she possessed no fortune to shield herself from that cold reality.\"",
      "\"The luxury of her surroundings seemed to her an inherent condition of existence, like light or air, something too familiar to be appreciated until endangered.\""
    ],
    "answer": 2,
    "explanation": "Choice C is correct. It directly contrasts her refined aesthetic value (\"rare flower grown for exhibition\") with her lack of independent financial security (\"she possessed no fortune to shield herself from that cold reality\"). Choice A addresses victimhood without explicitly setting aesthetic refinement against financial capital. Choice C focuses on dress etiquette rather than the core tension between refinement and poverty. Choice D describes her perception of luxury but omits the financial vulnerability."
  },
  {
    "id": 12,
    "code": "H4-RW12",
    "section": "rw",
    "module": 1,
    "topic": "Information & Ideas \u2014 Command of Evidence (Quantitative)",
    "difficulty": "Hard",
    "text": "<p>Agronomists evaluated the drought resistance of four hybrid sorghum cultivars by measuring leaf water potential (in megapascals, MPa; where less negative numbers indicate greater hydration) and total grain yield (in kilograms per hectare, kg/ha) under severe deficit irrigation:</p><p><strong>Cultivar Yield and Water Potential Under Deficit Irrigation</strong><br>\u2022 Cultivar A: Leaf Water Potential = -2.4 MPa; Grain Yield = 3,150 kg/ha<br>\u2022 Cultivar B: Leaf Water Potential = -1.8 MPa; Grain Yield = 4,200 kg/ha<br>\u2022 Cultivar C: Leaf Water Potential = -2.9 MPa; Grain Yield = 2,400 kg/ha<br>\u2022 Cultivar D: Leaf Water Potential = -2.1 MPa; Grain Yield = 3,600 kg/ha</p><p>A researcher claims that cultivars capable of maintaining higher tissue hydration (less negative leaf water potential) consistently produce superior grain yields under water-limited conditions.</p>",
    "options": [
      "Cultivar B and Cultivar D had identical leaf water potential measurements but differed in grain yields by over 600 kg/ha.",
      "Cultivar A produced more grain than Cultivar C despite having a more negative leaf water potential.",
      "Cultivar D produced 3,600 kg/ha, which was higher than Cultivar B's yield of 4,200 kg/ha.",
      "Cultivar C exhibited a leaf water potential of -2.9 MPa and produced the lowest yield of 2,400 kg/ha, whereas Cultivar B had the highest water potential (-1.8 MPa) and produced 4,200 kg/ha."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The researcher's claim is that higher hydration (less negative MPa) correlates directly with higher yield. Choice A directly supports this correlation by pairing the least negative cultivar (Cultivar B at -1.8 MPa) with the highest yield (4,200 kg/ha) and the most negative cultivar (Cultivar C at -2.9 MPa) with the lowest yield (2,400 kg/ha). Choice B is factually true of Cultivar A having -2.4 MPa vs -2.9 MPa, but does not present the strongest direct comparison across extremes. Choice C makes an arithmetic error. Choice D claims identical water potential, which contradicts the data."
  },
  {
    "id": 13,
    "code": "H4-RW13",
    "section": "rw",
    "module": 1,
    "topic": "Information & Ideas \u2014 Inferences",
    "difficulty": "Hard",
    "text": "<p>In high-latitude marine ecosystems, phytoplankton blooms occur each spring when daylight increases and upper-layer ocean stratification prevents microscopic algae from being mixed into dark, deep waters. Oceanographers historically assumed that bloom onset coincided strictly with the Vernal Equinox. However, autonomous profiling bio-argo floats deployed in the North Atlantic recorded significant phytoplankton biomass accumulation weeks before seasonal thermal stratification developed, occurring during periods when storm activity briefly subsided and calm surface waters allowed light exposure. This observation indicates that ______</p>",
    "options": [
      "transient surface stabilization during quiescent weather intervals is sufficient to initiate photosynthetic blooms prior to persistent seasonal stratification.",
      "thermal stratification is entirely irrelevant to prolonged summer phytoplankton productivity.",
      "winter storms are the primary mechanism that triggers seasonal phytoplankton reproduction in high-latitude oceans.",
      "profiling bio-argo floats cannot accurately distinguish between chlorophyll accumulation and inorganic particulate scatter."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The text notes that biomass accumulated 'weeks before seasonal thermal stratification developed' during periods when 'storm activity briefly subsided and calm surface waters allowed light exposure.' This implies that brief, transient calm weather episodes can trigger blooms even before the arrival of long-term seasonal stratification. Choice A goes too far by calling thermal stratification 'entirely irrelevant.' Choice C contradicts the passage, which says blooms happened when storms subsided. Choice D attacks the sensor's accuracy without textual warrant."
  },
  {
    "id": 14,
    "code": "H4-RW14",
    "section": "rw",
    "module": 1,
    "topic": "Information & Ideas \u2014 Inferences",
    "difficulty": "Hard",
    "text": "<p>Economists studying wage gaps between urban metropolises and rural municipalities note that urban workers earn an average nominal wage premium of 25%. However, when regional price parities\u2014particularly housing costs and local consumer services\u2014are factored into calculations, the real purchasing power of middle-income urban workers is statistically indistinguishable from that of their rural counterparts. Consequently, individuals who migrate from rural regions to major metropolitan centers primarily for financial advancement ______</p>",
    "options": [
      "invariably experience an immediate decrease in their gross nominal earnings upon relocation.",
      "may find that higher nominal salaries are largely offset by commensurate increases in non-tradable living expenses.",
      "consistently secure greater long-term real discretionary savings than those who remain in rural locations.",
      "tend to alter urban regional price parities by lowering local market housing costs."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage establishes that while nominal wages in urban areas are 25% higher, adjusted purchasing power is 'statistically indistinguishable' due to housing and local costs. Therefore, workers moving for financial gain may discover that the higher nominal pay is consumed by the increased cost of living. Choice A contradicts the higher nominal earnings. Choice C is refuted by the finding that real purchasing power is equivalent. Choice D is an illogical causal reversal."
  },
  {
    "id": 15,
    "code": "H4-RW15",
    "section": "rw",
    "module": 1,
    "topic": "Standard English Conventions \u2014 Boundaries",
    "difficulty": "Hard",
    "text": "<p>In 1938, physics theorist Hans Bethe formulated the catalytic carbon-nitrogen-oxygen cycle that powers massive main-sequence ______ his quantitative model established for the first time how stellar cores generate the immense temperatures and pressures necessary to sustain nuclear fusion.</p>",
    "options": [
      "stars: and",
      "stars, however",
      "stars, and",
      "stars; and,"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The sentence consists of two independent clauses: 'In 1938... main-sequence stars' and 'his quantitative model established... fusion.' Connecting two independent clauses requires a comma followed by a coordinating conjunction ('and'). Choice B produces a comma splice with a conjunctive adverb. Choice C uses an ungrammatical colon-conjunction pairing. Choice D creates redundant, erroneous punctuation."
  },
  {
    "id": 16,
    "code": "H4-RW16",
    "section": "rw",
    "module": 1,
    "topic": "Standard English Conventions \u2014 Boundaries",
    "difficulty": "Hard",
    "text": "<p>The archaeological survey cataloged three distinct subterranean structures across the valley: an elliptical cistern dating to the early Bronze ______ an octagonal vaulted granary from the Hellenistic period; and a terraced burial hypogeum constructed during Roman administration.</p>",
    "options": [
      "Age,",
      "Age",
      "Age:",
      "Age;"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. When items in a complex series already contain internal commas or modifying clauses, semicolons are used as separators between list items to maintain clear structural boundaries. The second item ends with a semicolon ('; and a terraced burial hypogeum'), so the first item must also conclude with a semicolon after 'Bronze Age'. Choice A creates a confusing comma splice within a complex list. Choices C and D fail standard list punctuation rules."
  },
  {
    "id": 17,
    "code": "H4-RW17",
    "section": "rw",
    "module": 1,
    "topic": "Standard English Conventions \u2014 Boundaries",
    "difficulty": "Hard",
    "text": "<p>Although the manuscript had been preserved in the cathedral archives for centuries, its significance remained ______ paleographers discovered that the faint undertext beneath the Latin hymns contained a previously unknown treatise by the Greek mathematician Archimedes.</p>",
    "options": [
      "unrecognized until",
      "unrecognized, until",
      "unrecognized; until",
      "unrecognized: until,"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The word 'until' introduces an essential adverbial dependent clause ('until paleographers discovered...') that modifies 'remained unrecognized.' An essential dependent clause following the main verb should not be separated by a comma, semicolon, or colon. Choice A introduces an unnecessary comma. Choice C creates a fragment with a semicolon. Choice D incorrectly uses a colon and comma."
  },
  {
    "id": 18,
    "code": "H4-RW18",
    "section": "rw",
    "module": 1,
    "topic": "Standard English Conventions \u2014 Form, Structure, and Sense",
    "difficulty": "Hard",
    "text": "<p>Neither the initial geochemical assays of the lunar basalt samples nor the subsequent isotopic spectroscopy of the core ______ conclusive evidence of subterranean water deposits.</p>",
    "options": [
      "provide",
      "provides",
      "have provided",
      "are providing"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In a correlative 'neither... nor...' construction joining two subjects of different grammatical numbers, the verb must agree with the subject closest to it. Here, the closer subject is the singular noun phrase 'the subsequent isotopic spectroscopy' (not 'assays' or 'samples'). Therefore, the singular present-tense verb 'provides' is grammatically correct. Choices B, C, and D are plural verbs ('provide', 'have provided', 'are providing')."
  },
  {
    "id": 19,
    "code": "H4-RW19",
    "section": "rw",
    "module": 1,
    "topic": "Standard English Conventions \u2014 Form, Structure, and Sense",
    "difficulty": "Hard",
    "text": "<p>A hallmark of baroque counterpoint, Johann Sebastian Bach\u2019s <em>The Art of Fugue</em> consists of fourteen complex fugues and four canons, each of which ______ a single musical motif through intricate inversions, augmentations, and retrogrades.</p>",
    "options": [
      "develop",
      "are developing",
      "develops",
      "have developed"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In the relative clause 'each of which ______ a single musical motif,' the subject is the singular pronoun 'each.' The prepositional phrase 'of which' refers back to the fugues and canons, but 'each' governs the verb and requires a singular form: 'develops.' Choices A, C, and D are plural verb forms."
  },
  {
    "id": 20,
    "code": "H4-RW20",
    "section": "rw",
    "module": 1,
    "topic": "Standard English Conventions \u2014 Form, Structure, and Sense",
    "difficulty": "Hard",
    "text": "<p>Originally trained as an engineer, ______ allowing him to execute large-scale kinetic sculptures whose mechanical equilibrium resisted severe outdoor weather conditions.</p>",
    "options": [
      "the structural principles of balance and tension were thoroughly understood by Alexander Calder,",
      "Alexander Calder\u2019s thorough grasp of structural principles of balance and tension,",
      "understanding structural principles of balance and tension was Calder's greatest strength,",
      "Alexander Calder thoroughly understood structural principles of balance and tension,"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The introductory participial phrase 'Originally trained as an engineer' is a modifier that must logically modify the subject that immediately follows the comma. Alexander Calder was the person trained as an engineer, so 'Alexander Calder' must be the head noun of the main clause. In Choice A, the modifier illogically modifies 'the structural principles.' In Choice B, it modifies 'Alexander Calder's thorough grasp.' In Choice D, it modifies the gerund 'understanding.'"
  },
  {
    "id": 21,
    "code": "H4-RW21",
    "section": "rw",
    "module": 1,
    "topic": "Standard English Conventions \u2014 Boundaries",
    "difficulty": "Hard",
    "text": "<p>During the Apollo 15 mission, astronaut David Scott dropped a geologic hammer and a falcon feather simultaneously from shoulder ______ demonstrated that in a vacuum, objects of differing masses accelerate at identical rates under gravitational attraction.</p>",
    "options": [
      "height, an experiment that",
      "height; an experiment that",
      "height: an experiment that",
      "height, this experiment"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The phrase 'an experiment that demonstrated...' is an appositive noun phrase modifying the entire action of dropping the hammer and feather. It should be attached to the preceding independent clause with a comma. Choice A is incorrect because 'an experiment that demonstrated...' is a noun phrase with a relative clause, not an independent clause, making a semicolon ungrammatical. Choice C is incorrect because a colon is unnecessary and awkward here. Choice D creates a comma splice between two independent clauses."
  },
  {
    "id": 22,
    "code": "H4-RW22",
    "section": "rw",
    "module": 1,
    "topic": "Standard English Conventions \u2014 Form, Structure, and Sense",
    "difficulty": "Hard",
    "text": "<p>The discovery of fossilized melanosomes in dinosaur feather impressions has revolutionized paleontology by allowing scientists to reconstruct prehistoric coloration; previously, researchers had no empirical method to determine ______.</p>",
    "options": [
      "what colors did non-avian dinosaurs display",
      "what colors non-avian dinosaurs displayed",
      "non-avian dinosaurs displayed what colors",
      "did non-avian dinosaurs display what colors"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In indirect questions or embedded noun clauses acting as the object of a verb ('determine'), standard English requires normal declarative subject-verb word order ('what colors non-avian dinosaurs displayed'), not inverted question word order. Choices A and D incorrectly use inverted auxiliary question syntax ('did non-avian dinosaurs display'). Choice C is awkward and ungrammatical."
  },
  {
    "id": 23,
    "code": "H4-RW23",
    "section": "rw",
    "module": 1,
    "topic": "Expression of Ideas \u2014 Transitions",
    "difficulty": "Hard",
    "text": "<p>In standard economic theory, monopolistic firms maximize profits by restricting production to drive up market prices. In heavily regulated public utility sectors, ______, state oversight commissions frequently mandate maximum consumer rates while imposing minimum capacity targets to ensure uninterrupted civic services.</p>",
    "options": [
      "furthermore",
      "consequently",
      "by contrast",
      "similarly"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The first sentence describes how monopolies operate under standard theory (restricting supply to inflate prices). The second sentence describes regulated public utilities, where state commissions enforce the opposite (capping rates and mandating minimum capacity). 'By contrast' logically signals this opposition. Choices A, C, and D ('furthermore', 'consequently', 'similarly') signal addition, causality, or similarity, none of which matches the contrast."
  },
  {
    "id": 24,
    "code": "H4-RW24",
    "section": "rw",
    "module": 1,
    "topic": "Expression of Ideas \u2014 Transitions",
    "difficulty": "Hard",
    "text": "<p>When carbon nanotubes are synthesized via chemical vapor deposition, microscopic variations in catalyst nanoparticle size alter the roll-up angle of graphene sheets. ______, batches of synthesized nanotubes often exhibit heterogeneous electronic properties, containing an unpredictable mixture of metallic and semiconducting fibers.</p>",
    "options": [
      "Instead",
      "Nevertheless",
      "In summary",
      "As a result"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The first sentence identifies a microscopic cause: variations in catalyst size change the roll-up angle of graphene sheets. The second sentence identifies the macroscopic effect: batches contain an unpredictable mixture of metallic and semiconducting fibers. 'As a result' indicates this direct cause-and-effect relationship. Choices B, C, and D do not reflect cause and effect."
  },
  {
    "id": 25,
    "code": "H4-RW25",
    "section": "rw",
    "module": 1,
    "topic": "Expression of Ideas \u2014 Transitions",
    "difficulty": "Hard",
    "text": "<p>During the early Cretaceous period, angiosperms (flowering plants) expanded rapidly across terrestrial landscapes, outcompeting dominant gymnosperms in many ecological niches. Paleobotanists note, ______, that gymnosperm clades such as conifers maintained ecological dominance in colder, nutrient-poor alpine and boreal zones where short growing seasons favored evergreen needles.</p>",
    "options": [
      "however",
      "specifically",
      "in other words",
      "therefore"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The first sentence establishes the broad takeover of flowering plants over gymnosperms. The second sentence presents a qualification/exception: gymnosperms (conifers) maintained dominance in alpine and boreal regions. 'However' appropriately signals this concession or contrast. Choice B ('specifically') would illustrate the takeover, not the exception. Choices C and D do not fit a contrastive exception."
  },
  {
    "id": 26,
    "code": "H4-RW26",
    "section": "rw",
    "module": 1,
    "topic": "Expression of Ideas \u2014 Rhetorical Synthesis",
    "difficulty": "Hard",
    "text": "<p>While researching a topic, a student has taken the following notes:<br>\u2022 The James Webb Space Telescope (JWST) carries a 6.5-meter primary beryllium mirror coated in microscopic gold.<br>\u2022 Gold provides optimal reflectivity for infrared wavelengths between 0.6 and 28.5 micrometers.<br>\u2022 The Hubble Space Telescope carries a 2.4-meter primary mirror coated in aluminum.<br>\u2022 Aluminum provides high reflectivity primarily for ultraviolet and visible wavelengths.<br>\u2022 Infrared observation allows astronomers to peer through obscuring cosmic dust clouds into early stellar nurseries.</p><p>The student wants to contrast the optical design of the two space telescopes. Which choice most effectively uses the relevant information from the notes to accomplish this goal?</p>",
    "options": [
      "Equipped with a 6.5-meter mirror, the James Webb Space Telescope allows astronomers to observe early stellar nurseries through cosmic dust clouds.",
      "Whereas the Hubble Space Telescope uses an aluminum-coated 2.4-meter mirror optimized for ultraviolet and visible light, the James Webb Space Telescope features a 6.5-meter gold-coated mirror designed for infrared observation.",
      "Both the Hubble Space Telescope and the James Webb Space Telescope carry large metallic mirrors capable of capturing distant astronomical phenomena.",
      "Astronomers use gold coatings on mirrors because gold reflects infrared light between 0.6 and 28.5 micrometers far more effectively than other metals."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The student's specific goal is to *contrast the optical design of the two space telescopes*. Choice B directly contrasts Hubble's 2.4-meter aluminum-coated mirror (ultraviolet/visible) with JWST's 6.5-meter gold-coated mirror (infrared). Choice A discusses only JWST. Choice C emphasizes similarity rather than contrast. Choice D focuses broadly on gold coatings without contrasting the two telescopes."
  },
  {
    "id": 27,
    "code": "H4-RW27",
    "section": "rw",
    "module": 1,
    "topic": "Expression of Ideas \u2014 Rhetorical Synthesis",
    "difficulty": "Hard",
    "text": "<p>While researching a topic, a student has taken the following notes:<br>\u2022 In 1856, American scientist Eunice Newton Foote presented an experimental study titled \"Circumstances Affecting the Heat of the Sun's Rays.\"<br>\u2022 Foote placed glass cylinders filled with different gases in direct sunlight to measure thermal absorption.<br>\u2022 She discovered that a cylinder filled with carbon dioxide retained more heat and took much longer to cool than one filled with common air.<br>\u2022 Foote concluded that an atmosphere containing elevated carbon dioxide would produce a warmer global climate.<br>\u2022 Her work predated Irish physicist John Tyndall\u2019s landmark publications on the greenhouse effect by three years.</p><p>The student wants to emphasize the historical priority of Foote\u2019s discovery to an audience familiar with the history of climate science. Which choice most effectively accomplishes this goal?</p>",
    "options": [
      "In 1856, Eunice Newton Foote placed glass cylinders filled with various atmospheric gases in sunlight to measure their thermal absorption properties.",
      "Eunice Newton Foote deduced that an atmosphere with elevated carbon dioxide would cause a warmer global climate after conducting experiments with glass cylinders.",
      "Three years before John Tyndall\u2019s renowned publications on the greenhouse effect, Eunice Newton Foote demonstrated in 1856 that carbon dioxide traps solar heat and hypothesized its warming impact on Earth's climate.",
      "John Tyndall is widely recognized in climate science for his laboratory experiments examining atmospheric heat absorption."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The prompt states the goal is to *emphasize the historical priority of Foote's discovery to an audience familiar with climate science*. Choice C highlights that Foote demonstrated carbon dioxide's heat-trapping ability in 1856, 'three years before John Tyndall's renowned publications.' Choices A and B do not mention her historical priority over Tyndall. Choice D focuses on Tyndall rather than Foote."
  }
];

const RW_MODULE2 = [
  {
    "id": 28,
    "code": "SH4-RW01",
    "section": "rw",
    "module": 2,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>Although the initial feasibility study praised the proposed hydroelectric dam as an unalloyed public good, environmental hydrologists warned that the reservoir's extensive sediment trapping would ______ downstream delta ecosystems by depriving coastal wetlands of the nutrient-rich silt necessary to counteract rising sea levels.</p>",
    "options": [
      "bolster",
      "venerate",
      "emulate",
      "compromise"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The text contrasts the praise of the dam with the hydrologists' warning that sediment trapping would harm downstream ecosystems by 'depriving coastal wetlands of the nutrient-rich silt.' 'Compromise' in this context means to weaken, undermine, or expose to harm. Choice A ('bolster') means to strengthen, the opposite of the context. Choice C ('emulate') means to imitate. Choice D ('venerate') means to revere or respect deeply."
  },
  {
    "id": 29,
    "code": "SH4-RW02",
    "section": "rw",
    "module": 2,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>In her reexamination of late Victorian detective fiction, literary scholar Audrey Jaffe contends that Sherlock Holmes\u2019s celebrated deductions were rarely as purely inductive as Arthur Conan Doyle claimed; rather, Holmes\u2019s forensic infallibility was largely a narrative ______ designed to reassure readers of an orderly, knowable social universe during an era of destabilizing urbanization.</p>",
    "options": [
      "contrivance",
      "anachronism",
      "premonition",
      "paradox"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The passage states that Holmes's deductions were not 'purely inductive' logic as claimed, but rather a deliberate literary device or artificial construct ('narrative ______') crafted to comfort Victorian readers. 'Contrivance' refers to an artificial, cleverly devised mechanism or literary device. Choice A ('anachronism') refers to chronological misalignment. Choice C ('premonition') means a foreboding. Choice D ('paradox') means a self-contradictory statement."
  },
  {
    "id": 30,
    "code": "SH4-RW03",
    "section": "rw",
    "module": 2,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>Many behavioral economists assumed that introducing modest cash bonuses for blood donations would incentivize civic participation; instead, the policy proved distinctly ______, as the financial compensation led potential donors to view an intrinsically altruistic moral civic duty as a crass commercial transaction.</p>",
    "options": [
      "efficacious",
      "counterproductive",
      "inconsequential",
      "salutary"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The text states that cash bonuses were expected to incentivize donations, but 'instead' donors were repelled by the commercialization of an altruistic act, undermining the policy's goal. A measure that produces the reverse of its intended positive effect is 'counterproductive.' Choice A ('efficacious') means effective, which contradicts the failure. Choice C ('inconsequential') means without consequence, but the policy had a strong negative effect. Choice D ('salutary') means beneficial."
  },
  {
    "id": 31,
    "code": "SH4-RW04",
    "section": "rw",
    "module": 2,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>Given that medieval manuscript illuminators were bound by strict theological iconography, modern art critics often assume their workshop output was uniform and derivative. Yet close spectroscopic analysis of the pigment palettes reveals surprising aesthetic ______: individual master artists routinely modified mineral binding agents to achieve idiosyncratic tonal gradations.</p>",
    "options": [
      "homogeneity",
      "sterility",
      "latitude",
      "rigidity"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The passage contrasts the assumption that output was 'uniform and derivative' with the discovery that individual artists 'routinely modified mineral binding agents to achieve idiosyncratic tonal gradations.' 'Latitude' means freedom of action or scope for variation. Choice A ('homogeneity') and Choice D ('rigidity') describe uniformity and strictness, which match the discredited assumption. Choice C ('sterility') means lack of creativity."
  },
  {
    "id": 32,
    "code": "SH4-RW05",
    "section": "rw",
    "module": 2,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>The chief executive's public statements regarding the proposed corporate acquisition were deliberately ______: while she praised the target firm's proprietary battery patents, she pointedly refused to commit to maintaining its current workforce or retaining its domestic assembly plants.</p>",
    "options": [
      "effusive",
      "unequivocal",
      "dogmatic",
      "circumspect"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The executive praise was balanced by a pointed refusal to make binding commitments regarding jobs or factories. Such guarded, cautious behavior is best described as 'circumspect' (wary, unwilling to take risks or overcommit). Choice A ('effusive') means expressing unrestrained gratitude or enthusiasm. Choice B ('unequivocal') means leaving no doubt, the opposite of her guarded language. Choice D ('dogmatic') means asserting opinions arrogantly."
  },
  {
    "id": 33,
    "code": "SH4-RW06",
    "section": "rw",
    "module": 2,
    "topic": "Craft & Structure \u2014 Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>Theoretical physicists studying string theory dualities argue that the apparent mathematical incompatibility between general relativity and quantum mechanics does not ______ the validity of either framework within its respective macroscopic or subatomic observational domain.</p>",
    "options": [
      "vitiate",
      "corroborate",
      "explicate",
      "codify"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The sentence argues that even though the two theories appear mathematically incompatible at extremes, this conflict does not destroy, impair, or invalidate ('vitiate') their empirical accuracy within their traditional scales. 'Vitiate' means to spoil, impair, or invalidate the legal or scientific force of something. Choice B ('corroborate') means to confirm. Choice C ('explicate') means to explain. Choice D ('codify') means to arrange systematically into a code."
  },
  {
    "id": 34,
    "code": "SH4-RW07",
    "section": "rw",
    "module": 2,
    "topic": "Craft & Structure \u2014 Text Structure and Purpose",
    "difficulty": "Super Hard",
    "text": "<p>In nineteenth-century historiography, the collapse of the Western Roman Empire was commonly attributed to internal moral degeneration and decadent administrative bloat. __Recent environmental archaeology and paleoclimate reconstructions, however, have fundamentally challenged this teleological moral narrative by uncovering evidence of severe megadroughts and the Antonine Plague, which decimated agrarian revenue and labor reserves.__ Consequently, contemporary historians increasingly view Rome\u2019s fragmentation as an ecological crisis accelerated by systemic external shocks rather than purely domestic institutional decay.</p>",
    "options": [
      "It endorses the nineteenth-century moral decline thesis by linking domestic decay directly to agricultural mismanagement.",
      "It introduces new scientific and paleoclimatic findings that undermine a long-standing historical explanation of Rome's collapse.",
      "It concedes that moral corruption played a more decisive role than environmental factors in Roman imperial collapse.",
      "It dismisses the role of the Antonine Plague to focus exclusively on geopolitical military incursions along the Rhine frontier."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The underlined sentence shows that modern scientific discoveries (environmental archaeology, paleoclimatology, megadroughts, and plagues) have 'fundamentally challenged' the traditional nineteenth-century moral narrative. Choice A contradicts the text by claiming it endorses the moral narrative. Choice C is the reverse of what the text states. Choice D is unsupported, as the plague is specifically mentioned as a key factor."
  },
  {
    "id": 35,
    "code": "SH4-RW08",
    "section": "rw",
    "module": 2,
    "topic": "Craft & Structure \u2014 Cross-Text Connections",
    "difficulty": "Super Hard",
    "text": "<p><strong>Text 1</strong><br>According to the Sapir-Whorf linguistic relativity hypothesis in its strong formulation, the structural syntax and vocabulary of a speaker\u2019s native language strictly circumscribe their cognitive capacities. Cross-cultural psychological studies have demonstrated that speakers of languages lacking specific grammatical tense markers, such as Hopi, exhibit fundamentally different temporal perceptions than speakers of Indo-European languages.</p><p><strong>Text 2</strong><br>While cross-linguistic variations can subtly influence the speed of perceptual categorization in laboratory tasks, asserting that language sets impenetrable boundaries on thought is deeply flawed. Experimental subjects routinely conceptualize distinctions\u2014such as non-verbal color hues or novel spatial configurations\u2014for which their native lexicon possesses no dedicated nomenclature. Human cognition relies on an underlying non-verbal mental representation (\"mentalese\") that transcends language-specific constraints.</p>",
    "options": [
      "It disputes the existence of any cross-linguistic differences in vocabulary or grammatical structure between language families.",
      "It corroborates Text 1\u2019s claims regarding Hopi temporal perception by citing recent neuroimaging experiments.",
      "It rejects the strong linguistic determinism supported in Text 1 by pointing to empirical evidence of non-verbal conceptual thought independent of language.",
      "It contends that language acquisition occurs much later in human developmental psychology than Text 1 assumes."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Text 1 supports strong linguistic relativity, claiming language 'strictly circumscribes' cognitive capacity. Text 2 directly counters this, stating that 'asserting that language sets impenetrable boundaries on thought is deeply flawed' and citing evidence that humans easily conceptualize ideas, colors, and spatial layouts for which their language has no specific words. Choice A is incorrect because Text 2 acknowledges cross-linguistic variations exist. Choice C contradicts Text 2's thesis. Choice D is unrelated to language acquisition timing."
  },
  {
    "id": 36,
    "code": "SH4-RW09",
    "section": "rw",
    "module": 2,
    "topic": "Information & Ideas \u2014 Inferences",
    "difficulty": "Super Hard",
    "text": "<p>Cognitive neuroscientists studying memory consolidation during non-rapid eye movement (NREM) sleep have recorded synchronized high-frequency electrical bursts known as sharp-wave ripples (SWRs) in the mammalian hippocampus. When optogenetic lasers were programmed to specifically suppress SWRs in mice during post-learning rest intervals, the mice showed severe deficits in recalling spatial labyrinth navigation routes the following morning. Crucially, when identical laser interruptions were delivered during wakeful immobility periods with equivalent frequency, no navigational memory deficits were observed. This divergence suggests that ______</p>",
    "options": [
      "hippocampal sharp-wave ripples are physiological epiphenomena that play no functional role in memory encoding.",
      "wakeful immobility is substantially more effective at consolidating spatial memory than NREM sleep.",
      "optogenetic laser stimulation causes irreversible, permanent structural damage to rodent hippocampal tissue.",
      "the neural replay orchestrated by sharp-wave ripples serves a time-sensitive, specialized memory consolidation function uniquely during sleep."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The experiment showed that disrupting SWRs during NREM sleep impaired memory consolidation, but identical disruption during wakefulness had no effect. This proves that SWR activity during sleep specifically performs an essential, time-sensitive consolidation role that is not replicated during wakeful states. Choice A contradicts the finding that disruption causes severe deficits. Choice B reverses the relationship. Choice D is refuted by the fact that disruption during wakefulness did not impair memory, showing no permanent damage."
  },
  {
    "id": 37,
    "code": "SH4-RW10",
    "section": "rw",
    "module": 2,
    "topic": "Information & Ideas \u2014 Inferences",
    "difficulty": "Super Hard",
    "text": "<p>In deep-sea hydrothermal vent ecosystems where sunlight cannot penetrate, chemoautotrophic bacteria synthesize organic carbohydrates by oxidizing hydrogen sulfide emitted from volcanic fissures. Marine biologists observed that when vent discharge fluctuated and sulfide levels fell below detectable limits, benthic tube worm (<em>Riftia pachyptila</em>) colonies did not immediately perish; instead, they sustained cellular metabolism for several weeks by consuming elemental sulfur stored in specialized internal organ tissues called trophosomes. This finding suggests that ______</p>",
    "options": [
      "tube worms have evolved physiological reservoir mechanisms that buffer against temporary cessation of external hydrothermal energy sources.",
      "chemoautotrophic bacteria are capable of carrying out oxygenic photosynthesis in aphotic bathypelagic waters.",
      "hydrothermal vent chimneys will permanently shut down whenever tube worm populations exceed trophosome capacity.",
      "elemental sulfur is inherently toxic to deep-sea invertebrates when stored for extended durations."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The passage explains that tube worms survived weeks without external hydrogen sulfide by consuming elemental sulfur stored in their trophosomes. This directly indicates an evolved metabolic buffer to endure fluctuations or temporary cessations in hydrothermal vent emissions. Choice B is absurd (photosynthesis without light). Choice C reverses cause and effect. Choice D is contradicted by their successful survival using the stored sulfur."
  },
  {
    "id": 38,
    "code": "SH4-RW11",
    "section": "rw",
    "module": 2,
    "topic": "Information & Ideas \u2014 Command of Evidence (Quantitative)",
    "difficulty": "Super Hard",
    "text": "<p>Marine biogeochemists monitored ocean acidification across four coral reef habitats by tracking seawater aragonite saturation state ($\\Omega_{\\text{arag}}$, where $\\Omega > 3.0$ promotes healthy calcification and $\\Omega < 2.0$ induces skeletal dissolution) and net community calcification rates ($G_{\\text{net}}$, in grams of $\\text{CaCO}_3$ per square meter per day):</p><p><strong>Reef Chemistry and Calcification Rates</strong><br>\u2022 Outer Barrier Reef: $\\Omega_{\\text{arag}} = 3.6$; $G_{\\text{net}} = +8.4\\text{ g/m}^2\\text{/day}$<br>\u2022 Mid-Shelf Lagoon: $\\Omega_{\\text{arag}} = 2.9$; $G_{\\text{net}} = +4.1\\text{ g/m}^2\\text{/day}$<br>\u2022 Coastal Inshore Flat: $\\Omega_{\\text{arag}} = 2.2$; $G_{\\text{net}} = +0.8\\text{ g/m}^2\\text{/day}$<br>\u2022 Volcanic CO\u2082 Seep Site: $\\Omega_{\\text{arag}} = 1.4$; $G_{\\text{net}} = -3.2\\text{ g/m}^2\\text{/day}$</p><p>A researcher asserts that when seawater aragonite saturation drops below critical equilibrium ($\\Omega < 2.0$), net coral accretion ceases entirely and skeletal dissolution becomes dominant.</p>",
    "options": [
      "The Outer Barrier Reef displayed the highest saturation state ($\\Omega = 3.6$) and supported the largest positive calcification rate ($+8.4\\text{ g/m}^2\\text{/day}$).",
      "At the Volcanic CO\u2082 Seep Site, where $\\Omega_{\\text{arag}}$ fell to 1.4 (below the 2.0 threshold), the net community calcification rate shifted to a negative value ($-3.2\\text{ g/m}^2\\text{/day}$), confirming active skeletal dissolution.",
      "The Mid-Shelf Lagoon experienced net dissolution because its saturation state was below 3.0.",
      "All four reef habitats exhibited positive net calcification rates regardless of aragonite saturation levels."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The researcher's specific claim is that when $\\Omega < 2.0$, accretion ceases and dissolution dominates ($G_{\\text{net}} < 0$). The data at the Volcanic CO\u2082 Seep site ($\\Omega = 1.4$, $G_{\text{net}} = -3.2$) directly verifies this threshold transition from net positive growth to net dissolution. Choice A illustrates high saturation growth, but does not test the critical $\\Omega < 2.0$ dissolution threshold. Choice C is factually false (Lagoon had $+4.1$, which is positive accretion). Choice D contradicts the negative value at the seep site."
  },
  {
    "id": 39,
    "code": "SH4-RW12",
    "section": "rw",
    "module": 2,
    "topic": "Information & Ideas \u2014 Central Ideas and Details",
    "difficulty": "Super Hard",
    "text": "<p>In his treatise on the political philosophy of the Enlightenment, Jonathan Israel argues that the historical movement comprised two distinct currents: a Moderate Enlightenment, championed by John Locke and Voltaire, which sought a compromise between traditional religious monarchy and gradual legislative reform; and a Radical Enlightenment, inspired by Baruch Spinoza, which advocated universal egalitarian democracy, the absolute eradication of ecclesiastical privilege, and complete freedom of thought. Israel asserts that modern secular democratic values stem almost exclusively from the Radical tradition.</p>",
    "options": [
      "John Locke and Voltaire were the principal originators of contemporary radical democratic secularism.",
      "The Moderate Enlightenment sought to overturn monarchical rule immediately in favor of direct egalitarian democracy.",
      "Contemporary secular democratic principles primarily originate from the radical Spinozist tradition rather than the moderate, compromise-driven stream of the Enlightenment.",
      "Spinoza advocated maintaining monarchical ecclesiastical authority to ensure societal stability."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The passage explicitly states that Israel distinguishes between the Moderate stream (Locke/Voltaire, who compromised with monarchy and religion) and the Radical stream (Spinoza, who advocated universal egalitarian democracy), and concludes that 'modern secular democratic values stem almost exclusively from the Radical tradition.' Choice A misassigns the origin to Locke and Voltaire. Choice B incorrectly attributes Spinoza's radicalism to the moderates. Choice D contradicts Spinoza's radical stance."
  },
  {
    "id": 40,
    "code": "SH4-RW13",
    "section": "rw",
    "module": 2,
    "topic": "Information & Ideas \u2014 Inferences",
    "difficulty": "Super Hard",
    "text": "<p>Biomaterials scientists evaluating self-healing polymers have developed microcapsules containing dicyclopentadiene (DCPD) embedded within an epoxy resin matrix alongside a ruthenium Grubbs catalyst. When mechanical stress produces microcracks, the microcapsules rupture, releasing liquid DCPD monomer into the fissure, where contact with the catalyst triggers ring-opening metathesis polymerization (ROMP), restoring up to 90% of the material's original tensile strength within forty-eight hours. However, in low-temperature environments below -20\u00b0C, the healing efficiency dropped to under 15%. Because the Grubbs catalyst remains chemically active at sub-zero temperatures, the performance decline at extreme cold is best explained if ______</p>",
    "options": [
      "the epoxy resin matrix undergoes spontaneous thermal degradation when chilled below freezing.",
      "ring-opening metathesis polymerization produces irreversible embrittlement of the polymer at ambient room temperatures.",
      "the ruthenium catalyst permanently evaporates from the resin under low atmospheric pressure.",
      "the DCPD liquid monomer experiences increased viscosity or freezes, preventing capillary migration into the fractured microcracks."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The text notes that the chemical catalyst remains fully active at -20\u00b0C, yet healing drops from 90% to under 15%. For healing to occur, the liquid DCPD monomer must flow from the ruptured capsule into the crack to meet the catalyst. If the liquid monomer freezes or becomes too viscous to flow into the crack, polymerization cannot bridge the fissure. Choice A is unsupported (matrix doesn't degrade). Choice C is contradicted (catalyst is active and doesn't evaporate). Choice D discusses room temperatures, whereas the issue is specifically sub-zero cold."
  },
  {
    "id": 41,
    "code": "SH4-RW14",
    "section": "rw",
    "module": 2,
    "topic": "Information & Ideas \u2014 Command of Evidence (Textual)",
    "difficulty": "Super Hard",
    "text": "<p>In Virginia Woolf\u2019s 1925 novel <em>Mrs. Dalloway</em>, the traumatic psychological aftermath of World War I is embodied in the character of Septimus Warren Smith, a decorated veteran suffering from shell shock. Woolf portrays Septimus\u2019s mental anguish not as an isolated pathology, but as an indictment of a rigid British medical and social establishment that insists on stoic conformity and dismisses profound existential suffering.</p><p>Which quotation from <em>Mrs. Dalloway</em> most effectively illustrates this critique of the establishment?</p>",
    "options": [
      "\"Dr. Holmes examined him; there was nothing the matter with him, said Dr. Holmes; he was only a little out of sorts; take a dose of bromide, have a game of cricket.\"",
      "\"London had swallowed up many millions of young men called Smith; thought nothing of it.\"",
      "\"Beauty, the world seemed to say. And as if to prove it, beauty sprang everywhere, instantly, quickly, in the flowers and in the trees.\"",
      "\"He had not grown; he had not changed; only his hair was white, like snow in moonlight.\""
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Dr. Holmes epitomizes the British medical establishment. His dismissive prescription\u2014treating severe shell shock as being 'a little out of sorts' and prescribing 'a game of cricket'\u2014powerfully illustrates Woolf's critique of an establishment that trivializes profound war trauma through superficial stoic conformity. Choice A comments on London's anonymity. Choice C reflects poetic observations of beauty. Choice D describes physical aging."
  },
  {
    "id": 42,
    "code": "SH4-RW15",
    "section": "rw",
    "module": 2,
    "topic": "Information & Ideas \u2014 Inferences",
    "difficulty": "Super Hard",
    "text": "<p>Astrophysicists analyzing spectroscopic transmissions from the exoplanet WASP-39b detected unambiguous absorption lines for sulfur dioxide ($\\text{SO}_2$). In stellar atmospheres, sulfur dioxide is typically produced when intense ultraviolet radiation from the host star breaks apart water molecules ($\\text{H}_2\\text{O}$), freeing hydroxyl radicals ($\\text{OH}$) that subsequently react with hydrogen sulfide ($\\text{H}_2\\text{S}$). On planets without sufficient atmospheric water vapor or with thick cloud decks that shield the lower atmosphere from stellar ultraviolet photons, this photochemical chain cannot proceed. Therefore, the detection of sulfur dioxide in WASP-39b\u2019s upper atmosphere provides direct evidence that ______</p>",
    "options": [
      "the exoplanet has an atmosphere completely devoid of hydrogen sulfide and water molecules.",
      "photochemical reactions driven by stellar ultraviolet irradiation actively alter atmospheric chemistry on the exoplanet.",
      "thick clouds permanently insulate WASP-39b\u2019s upper atmosphere from any high-energy stellar photons.",
      "sulfur dioxide must have originated from catastrophic surface volcanic eruptions rather than atmospheric chemical processes."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The text explains that $\\text{SO}_2$ forms when stellar ultraviolet radiation photodissociates water to react with $\\text{H}_2\\text{S}$. Detecting $\\text{SO}_2$ proves that this ultraviolet-driven photochemical process is actively occurring in the exoplanet's atmosphere. Choice A is contradictory, as water and $\\text{H}_2\\text{S}$ are the essential precursors for $\\text{SO}_2$. Choice C contradicts the requirement of UV photon penetration. Choice D is contradicted by the described photochemical origin."
  },
  {
    "id": 43,
    "code": "SH4-RW16",
    "section": "rw",
    "module": 2,
    "topic": "Information & Ideas \u2014 Inferences",
    "difficulty": "Super Hard",
    "text": "<p>In evolutionary biology, the \"expensive tissue hypothesis\" posits that because metabolic basal energy budgets in primates are constrained, the evolutionary enlargement of the brain could only occur if accompanied by a corresponding reduction in the mass of another metabolically demanding organ, such as the gastrointestinal tract. Comparative anatomists testing this hypothesis noted that modern humans possess a brain roughly three times larger than expected for an anthropoid primate of equivalent body mass, alongside a gastrointestinal tract that is nearly 40% smaller. This anatomical configuration was made viable primarily because early hominins ______</p>",
    "options": [
      "eliminated all animal proteins and fats from their nutritional foraging strategies.",
      "increased their total metabolic expenditure to levels ten times greater than any other mammalian species.",
      "shifted toward a diet consisting of higher-quality, cooked, and mechanically processed foods that required less digestive processing.",
      "relied exclusively on the enlargement of their skeletal muscles to generate surplus basal metabolic energy."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. A 40% smaller gut cannot extract sufficient energy from low-calorie, fibrous, unprocessed foliage. For a primate to sustain a massive, metabolically expensive brain with a drastically smaller digestive tract, it must consume nutrient-dense, easily digestible foods (such as cooked meat and tubers) that require substantially less gut volume to process. Choice B is an exaggeration. Choice C is factually and biologically backward (animal protein is nutrient-dense). Choice D contradicts the energy constraint premise."
  },
  {
    "id": 44,
    "code": "SH4-RW17",
    "section": "rw",
    "module": 2,
    "topic": "Standard English Conventions \u2014 Boundaries",
    "difficulty": "Super Hard",
    "text": "<p>During the Renaissance, Venetian glassmakers who divulged the secretive chemical recipes for Cristallo glass faced severe ______ the Council of Ten dispatched assassins across Europe to silence fugitive artisans who established competitive furnaces abroad.</p>",
    "options": [
      "penalties, in fact,",
      "penalties, in fact",
      "penalties in fact:",
      "penalties; in fact,"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The sentence links two independent clauses: 'Venetian glassmakers... faced severe penalties' and 'the Council of Ten dispatched assassins across Europe...' Two independent clauses joined by a conjunctive adverbial phrase ('in fact') require a semicolon before the phrase and a comma after it. Choice A creates a comma splice. Choice C lacks necessary punctuation between independent clauses. Choice D is a run-on with a comma splice."
  },
  {
    "id": 45,
    "code": "SH4-RW18",
    "section": "rw",
    "module": 2,
    "topic": "Standard English Conventions \u2014 Boundaries",
    "difficulty": "Super Hard",
    "text": "<p>The computational linguist evaluated three acoustic parameters across dialect ______ vowel formant dispersal, which correlates with regional tongue placement; fundamental pitch frequency; and syllable duration variability.</p>",
    "options": [
      "speakers:",
      "speakers;",
      "speakers,",
      "speakers"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A colon is used after an independent clause ('The computational linguist evaluated three acoustic parameters across dialect speakers') to introduce a list or elaboration. The items in the list that follow are complex and contain internal commas, separated by semicolons. Choice B is incorrect because a semicolon cannot introduce a list following an independent clause. Choice C is a comma, which is insufficient to introduce a complex list. Choice D has no punctuation."
  },
  {
    "id": 46,
    "code": "SH4-RW19",
    "section": "rw",
    "module": 2,
    "topic": "Standard English Conventions \u2014 Form, Structure, and Sense",
    "difficulty": "Super Hard",
    "text": "<p>Located within the deep permafrost of Spitsbergen, Norway, the Svalbard Global Seed Vault stores backup duplicates of hundreds of thousands of crop ______ that the world\u2019s agricultural biodiversity can be regenerated in the event of catastrophic global crises.</p>",
    "options": [
      "varieties; ensuring",
      "varieties, ensuring",
      "varieties, it ensures",
      "varieties ensuring,"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The present participial phrase 'ensuring that the world\u2019s agricultural biodiversity can be regenerated...' functions as a non-finite adverbial clause modifying the main action. It is properly set off with a comma. Choice B incorrectly uses a semicolon before a participial phrase (creating a fragment). Choice C creates a comma splice between two independent clauses ('stores backup duplicates...' and 'it ensures...'). Choice D places an ungrammatical comma after 'ensuring'."
  },
  {
    "id": 47,
    "code": "SH4-RW20",
    "section": "rw",
    "module": 2,
    "topic": "Standard English Conventions \u2014 Form, Structure, and Sense",
    "difficulty": "Super Hard",
    "text": "<p>Surrounding the microscopic lipid droplet in adipocyte cells ______ a structural meshwork of perilipin proteins, which regulate the enzymatic breakdown of stored triglycerides during prolonged physical fasting.</p>",
    "options": [
      "has been",
      "are",
      "is",
      "was"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. This sentence features inverted syntax: the prepositional phrase 'Surrounding the microscopic lipid droplet in adipocyte cells' is placed at the beginning, followed by the verb, followed by the actual grammatical subject: 'a structural meshwork of perilipin proteins.' The head noun of the subject is the singular noun 'meshwork' ('of perilipin proteins' is a prepositional modifier). Therefore, the verb must be singular present: 'is.' Choice B is plural ('are'). Choices C and D do not agree with the timeless biological present tense."
  },
  {
    "id": 48,
    "code": "SH4-RW21",
    "section": "rw",
    "module": 2,
    "topic": "Standard English Conventions \u2014 Form, Structure, and Sense",
    "difficulty": "Super Hard",
    "text": "<p>Having spent two decades analyzing the linguistic syntax of Mayan hieroglyphic inscriptions, ______ finally deciphered the phonetic syllabary of the Palenque tablets in the early 1950s.</p>",
    "options": [
      "the phonetic syllabary of the Palenque tablets was deciphered by Yuri Knorozov,",
      "Yuri Knorozov\u2019s groundbreaking research on the Palenque tablets,",
      "the decipherment of the phonetic syllabary was accomplished by Yuri Knorozov,",
      "Russian linguist Yuri Knorozov,"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The introductory participial phrase 'Having spent two decades analyzing...' must logically modify the subject that directly follows the comma. Yuri Knorozov was the person who spent two decades analyzing the syntax, so 'Russian linguist Yuri Knorozov' must be the subject of the sentence, followed by the finite verb 'finally deciphered.' Choices A and D have dangling modifiers where the participial phrase illogically modifies 'the phonetic syllabary' or 'the decipherment.' Choice B results in a sentence fragment without a predicate."
  },
  {
    "id": 49,
    "code": "SH4-RW22",
    "section": "rw",
    "module": 2,
    "topic": "Standard English Conventions \u2014 Boundaries",
    "difficulty": "Super Hard",
    "text": "<p>Architect Zaha Hadid\u2019s designs\u2014characterized by sweeping parametric curves and unconventional structural ______ fundamentally transformed contemporary urban skylines from Baku to London.</p>",
    "options": [
      "geometries\u2014",
      "geometries,",
      "geometries;",
      "geometries:"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The parenthetical modifier begins with an em-dash ('designs\u2014characterized by sweeping parametric curves and unconventional structural geometries'). To maintain balanced punctuation, an em-dash opened parenthetical must close with a matching em-dash ('geometries\u2014') before the main verb 'fundamentally transformed.' Choices B, C, and D mismatch punctuation marks."
  },
  {
    "id": 50,
    "code": "SH4-RW23",
    "section": "rw",
    "module": 2,
    "topic": "Expression of Ideas \u2014 Transitions",
    "difficulty": "Super Hard",
    "text": "<p>During severe financial panics, individual depositors rush to withdraw cash from commercial banks to preserve their liquidity. ______, this collective behavior precipitates the systemic insolvency of otherwise solvent institutions by forcing the premature liquidation of long-term illiquid assets.</p>",
    "options": [
      "In contrast",
      "Paradoxically",
      "For instance",
      "Conversely"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage describes a self-defeating collective outcome: each individual acts rationally to preserve their personal liquidity, but the aggregate result is the catastrophic collapse of the banking system. 'Paradoxically' perfectly captures this ironic contradiction between individual intent and collective outcome. Choices B and D ('In contrast', 'Conversely') imply an opposition between two different entities, rather than an internal systemic contradiction. Choice C ('For instance') does not signal the contradiction."
  },
  {
    "id": 51,
    "code": "SH4-RW24",
    "section": "rw",
    "module": 2,
    "topic": "Expression of Ideas \u2014 Transitions",
    "difficulty": "Super Hard",
    "text": "<p>Proponents of algorithmic governance assert that automated machine-learning models eliminate subjective human bias from judicial sentencing decisions. Empirical audits of risk-assessment software reveal, ______, that algorithms trained on historical arrest data systematically perpetuate racial disparities by encoding legacy policing patterns as predictive indicators.</p>",
    "options": [
      "likewise",
      "consequently",
      "on the contrary",
      "specifically"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The first sentence presents the claim of proponents (algorithms eliminate bias). The second sentence presents empirical audit findings that directly contradict this claim (algorithms perpetuate and encode legacy bias). 'On the contrary' (or 'conversely') effectively signals this direct contradiction. Choice A ('likewise') indicates similarity. Choice C ('consequently') indicates a result. Choice D ('specifically') would illustrate the elimination of bias, not its contradiction."
  },
  {
    "id": 52,
    "code": "SH4-RW25",
    "section": "rw",
    "module": 2,
    "topic": "Expression of Ideas \u2014 Transitions",
    "difficulty": "Super Hard",
    "text": "<p>In terrestrial ecosystems, apex predators regulate herbivore populations through direct predation, preventing overgrazing of riparian vegetation. Marine biologists have discovered that large oceanic sharks exert a ______ trophic influence in coral reef environments, where their presence deters mesopredator teleost fish and preserves critical herbivorous parrotfish populations.</p>",
    "options": [
      "fleeting",
      "marginal",
      "speculative",
      "comparable"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The passage parallels terrestrial apex predators (regulating herbivores to save riparian plants) with marine sharks (deterring mesopredators to save herbivorous parrotfish). The influence of sharks in coral reefs is analogous or equivalent, making 'comparable' the most logical and precise word. Choices B, C, and D ('marginal', 'speculative', 'fleeting') undermine the established parallel."
  },
  {
    "id": 53,
    "code": "SH4-RW26",
    "section": "rw",
    "module": 2,
    "topic": "Expression of Ideas \u2014 Rhetorical Synthesis",
    "difficulty": "Super Hard",
    "text": "<p>While researching a topic, a student has taken the following notes:<br>\u2022 The Fermi paradox highlights the apparent contradiction between high estimates of extraterrestrial civilizations and the lack of observed evidence.<br>\u2022 In 1998, economist Robin Hanson proposed the \"Great Filter\" hypothesis to resolve the paradox.<br>\u2022 The hypothesis posits that an evolutionary barrier prevents prebiotic chemistry from developing into an interstellar civilization.<br>\u2022 If the Great Filter lies *behind* humanity (e.g., the rare abiogenesis of eukaryotic cells), intelligent life in the universe is extraordinarily rare.<br>\u2022 If the Great Filter lies *ahead* of humanity (e.g., inevitable technological self-destruction), our species faces a high probability of extinction before achieving interstellar travel.</p><p>The student wants to explain the dual implications of the Great Filter hypothesis regarding humanity's cosmic future. Which choice most effectively accomplishes this goal?</p>",
    "options": [
      "According to the Great Filter hypothesis, humanity\u2019s future depends on the barrier\u2019s location: if behind us, intelligent life is exceedingly rare and our prospects are bright; if ahead, humanity likely faces impending technological extinction.",
      "Robin Hanson proposed the Great Filter in 1998 to resolve the Fermi paradox, which notes the contradiction between abundant stars and zero detected alien civilizations.",
      "Scientists investigating the Fermi paradox continue to debate whether the abiogenesis of eukaryotic cells represents an insurmountable biological hurdle.",
      "The Great Filter hypothesis asserts that prebiotic chemistry inevitably collapses before developing technological capabilities."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The student's specific goal is to *explain the dual implications of the Great Filter hypothesis regarding humanity's cosmic future*. Choice B encapsulates both scenarios: if the filter is behind us, intelligent life is rare (humanity survives); if ahead of us, technological extinction looms. Choice A defines the origin without the dual implications. Choice C focuses narrowly on eukaryote abiogenesis. Choice D misrepresents the hypothesis as an inevitable collapse."
  },
  {
    "id": 54,
    "code": "SH4-RW27",
    "section": "rw",
    "module": 2,
    "topic": "Expression of Ideas \u2014 Rhetorical Synthesis",
    "difficulty": "Super Hard",
    "text": "<p>While researching a topic, a student has taken the following notes:<br>\u2022 Banded iron formations (BIFs) are distinctive geochemical sedimentary rock units consisting of alternating iron-rich and silica-rich layers.<br>\u2022 Most BIFs were deposited between 2.4 and 1.8 billion years ago.<br>\u2022 Prior to this epoch, Earth's oceans contained vast reservoirs of dissolved ferrous iron ($\\text{Fe}^{2+}$) in an anoxic environment.<br>\u2022 The evolution of oxygenic photosynthesis by marine cyanobacteria released free molecular oxygen ($\\text{O}_2$) into shallow seas.<br>\u2022 Dissolved oxygen reacted precipitously with ferrous iron, precipitating insoluble ferric oxides ($\\text{Fe}_2\\text{O}_3$) onto the ocean floor.<br>\u2022 Geologists regard BIFs as definitive physical markers of the Great Oxidation Event.</p><p>The student wants to explain how cyanobacteria caused the deposition of banded iron formations. Which choice most effectively accomplishes this goal?</p>",
    "options": [
      "Banded iron formations are ancient sedimentary rock units deposited in Earth's oceans between 2.4 and 1.8 billion years ago.",
      "By producing molecular oxygen through photosynthesis, ancient marine cyanobacteria caused dissolved oceanic ferrous iron to oxidize and precipitate onto the sea floor as insoluble ferric oxide layers.",
      "Before the Great Oxidation Event, Earth's anoxic oceans contained vast reservoirs of dissolved ferrous iron that resisted chemical precipitation.",
      "Geologists examine alternating silica and iron layers in banded iron formations to understand prehistoric oceanic chemical compositions."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The prompt asks specifically to *explain how cyanobacteria caused the deposition of banded iron formations*. Choice B explicitly connects the biological cause (cyanobacterial photosynthesis producing oxygen) with the geochemical mechanism (oxidizing dissolved ferrous iron into insoluble ferric oxide layers on the sea floor). Choices A, C, and D state background facts without explaining the causal link."
  }
];

const MATH_MODULE1 = [
  {
    "id": 55,
    "code": "H4-M1",
    "section": "math",
    "module": 3,
    "topic": "Algebra \u2014 Linear equations & inequalities",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>What is the set of all real values of $x$ that satisfy the inequality $$|3x - 11| \\le 2x + 4?$$</p>",
    "options": [
      "$x \\le 15$",
      "$x \\ge \\frac{7}{5}$",
      "$\\frac{7}{5} \\le x \\le 15$",
      "$-\\frac{7}{5} \\le x \\le 15$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The inequality $|3x - 11| \\le 2x + 4$ is equivalent to the compound inequality $-(2x + 4) \\le 3x - 11 \\le 2x + 4$. First, solve the left inequality: $-2x - 4 \\le 3x - 11 \\implies 7 \\le 5x \\implies x \\ge \\frac{7}{5}$. Next, solve the right inequality: $3x - 11 \\le 2x + 4 \\implies x \\le 15$. Note that the right-hand side $2x + 4$ is non-negative for all $x \\ge \\frac{7}{5}$. Combining both constraints yields $\\frac{7}{5} \\le x \\le 15$."
  },
  {
    "id": 56,
    "code": "H4-M2",
    "section": "math",
    "module": 3,
    "topic": "Algebra \u2014 Systems of two linear equations",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>In the system of equations below, $k$ is a constant:\n$$\\begin{cases} 4x - 10y = 18 \\\\ 6x + ky = 27 \\end{cases}$$\nIf the system has infinitely many solutions, what is the value of $k$?</p>",
    "options": [
      "$18$",
      "$-12$",
      "$15$",
      "$-15$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. For a system of two linear equations to have infinitely many solutions, the two equations must be linearly dependent (represent the same line). The ratio of the coefficients must be equal: $\\frac{6}{4} = \\frac{k}{-10} = \\frac{27}{18}$. Since $\\frac{6}{4} = 1.5$ and $\\frac{27}{18} = 1.5$, set $\\frac{k}{-10} = 1.5 \\implies k = 1.5 \\times (-10) = -15$."
  },
  {
    "id": 57,
    "code": "H4-M3",
    "section": "math",
    "module": 3,
    "topic": "Advanced Math \u2014 Quadratics and Parabolas",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>The quadratic function $f(x) = -3(x - 4)^2 + 27$ intersects the $x$-axis at points $(p, 0)$ and $(q, 0)$. What is the distance between these two $x$-intercepts?</p>",
    "options": [
      "$6$",
      "$3$",
      "$9$",
      "$12$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Set $f(x) = 0$: $-3(x - 4)^2 + 27 = 0 \\implies 3(x - 4)^2 = 27 \\implies (x - 4)^2 = 9$. Taking the square root of both sides gives $x - 4 = \\pm 3$, so $x = 4 + 3 = 7$ or $x = 4 - 3 = 1$. The two $x$-intercepts are $(7, 0)$ and $(1, 0)$. The distance between them is $|7 - 1| = 6$."
  },
  {
    "id": 58,
    "code": "H4-M4",
    "section": "math",
    "module": 3,
    "topic": "Geometry & Trigonometry \u2022 Circle equations and radius",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>What is the radius of the circle in the $xy$-plane given by the equation $x^2 + y^2 - 8x + 14y + 29 = 0$?</p>",
    "options": [
      "$6$",
      "$8$",
      "$12$",
      "$36$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Complete the square for both $x$ and $y$: $(x^2 - 8x + 16) + (y^2 + 14y + 49) = -29 + 16 + 49 \\implies (x - 4)^2 + (y + 7)^2 = 36$. The standard equation of a circle is $(x - h)^2 + (y - k)^2 = r^2$. Here $r^2 = 36$, so the radius is $r = \\sqrt{36} = 6$. Choice B and C are arithmetic errors. Choice D is $r^2$.",
    "fillAnswer": null,
    "acceptedAnswers": [],
    "image": "images/q07_pyramid_frustum.png"
  },
  {
    "id": 59,
    "code": "H4-M5",
    "section": "math",
    "module": 3,
    "topic": "Geometry & Trigonometry \u2014 Circle equations",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>In the $xy$-plane, the equation of a circle is $x^2 + y^2 - 10x + 8y - 8 = 0$. What is the radius of this circle?</p>",
    "options": [
      "$9$",
      "$8$",
      "$\\sqrt{49} = 7$",
      "$\\sqrt{41}$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Complete the square for both $x$ and $y$: $(x^2 - 10x + 25) + (y^2 + 8y + 16) = 8 + 25 + 16 \\implies (x - 5)^2 + (y + 4)^2 = 49$. The standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$, so $r^2 = 49 \\implies r = 7$."
  },
  {
    "id": 60,
    "code": "H4-M6",
    "section": "math",
    "module": 3,
    "topic": "Advanced Math \u2014 Rational expressions",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Which of the following expressions is equivalent to $$\\frac{x^2 - 16}{x^2 - 2x - 8} \\cdot \\frac{x^2 - 4}{x^2 + 6x + 8},$$ for all $x > 4$?</p>",
    "options": [
      "$\\frac{x + 4}{x - 2}$",
      "$\\frac{x - 4}{x + 2}$",
      "$\\frac{x + 2}{x - 2}$",
      "$\\frac{x - 2}{x + 2}$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Factor each quadratic expression completely:\n$$x^2 - 16 = (x - 4)(x + 4)$$\n$$x^2 - 2x - 8 = (x - 4)(x + 2)$$\n$$x^2 - 4 = (x - 2)(x + 2)$$\n$$x^2 + 6x + 8 = (x + 4)(x + 2)$$\nMultiplying the rational expressions gives:\n$$\\frac{(x - 4)(x + 4)}{(x - 4)(x + 2)} \\cdot \\frac{(x - 2)(x + 2)}{(x + 4)(x + 2)} = \\frac{x + 4}{x + 2} \\cdot \\frac{x - 2}{x + 4} = \\frac{x - 2}{x + 2}.$$\nChoice A, Choice B, and Choice C result from sign or factoring errors."
  },
  {
    "id": 61,
    "code": "H4-M7",
    "section": "math",
    "module": 3,
    "topic": "Advanced Math \u2014 Exponential decay",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>A radioactive isotope decays according to the model $A(t) = A_0 \\cdot 2^{-t/24}$, where $t$ is the elapsed time in hours and $A_0$ is the initial mass in grams. After how many hours will the remaining mass of the isotope be equal to $\\frac{1}{16}$ of its initial mass $A_0$?</p>",
    "options": [
      "$96$",
      "$72$",
      "$48$",
      "$120$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Set $A(t) = \\frac{1}{16} A_0$: $A_0 \\cdot 2^{-t/24} = \\frac{1}{16} A_0 \\implies 2^{-t/24} = \\frac{1}{16}$. Since $\\frac{1}{16} = 2^{-4}$, equate the exponents: $-\\frac{t}{24} = -4 \\implies t = 4 \\times 24 = 96\\text{ hours}$."
  },
  {
    "id": 62,
    "code": "H4-M8",
    "section": "math",
    "module": 3,
    "topic": "Geometry & Trigonometry \u2014 Trigonometric cofunctions",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>In right triangle $ABC$ with right angle at $C$, it is given that $\\sin(A) = \\frac{7}{25}$. What is the value of $\\cos(B)$?</p>",
    "options": [
      "$\\frac{24}{25}$",
      "$\\frac{7}{25}$",
      "$\\frac{7}{24}$",
      "$\\frac{25}{7}$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In right triangle $ABC$ with right angle $C$, the acute angles $A$ and $B$ are complementary: $A + B = 90^\\circ$. By the complementary angle trigonometric identity, $\\cos(B) = \\sin(90^\\circ - B) = \\sin(A)$. Since $\\sin(A) = \\frac{7}{25}$, it directly follows that $\\cos(B) = \\frac{7}{25}$. Choice A ($\\frac{24}{25}$) is $\\cos(A)$ or $\\sin(B)$. Choice C ($\\frac{7}{24}$) is $\\tan(A)$. Choice D ($\\frac{25}{7}$) is $\\csc(A)$."
  },
  {
    "id": 63,
    "code": "H4-M9",
    "section": "math",
    "module": 3,
    "topic": "Problem-Solving & Data Analysis \u2014 Linear models",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>A marine biologist models the pressure $P$, in atmospheres (atm), at an ocean depth of $d$ meters using the linear equation $$P = 0.098d + 1.01.$$ Which of the following is the most accurate interpretation of the value $0.098$ in this model?</p>",
    "options": [
      "The atmospheric pressure at the ocean surface is $0.098\\text{ atm}$.",
      "For every $0.098\\text{ meters}$ increase in depth, the pressure increases by $1.01\\text{ atm}$.",
      "For every $1\\text{ meter}$ increase in ocean depth, the water pressure increases by $0.098\\text{ atm}$.",
      "The maximum water pressure achievable in this ocean basin is $0.098\\text{ atm}$."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In the linear equation $P = md + b$, the coefficient of $d$ ($m = 0.098$) represents the slope, which measures the rate of change of pressure $P$ with respect to depth $d$. Here, each 1-meter increase in depth results in an estimated pressure increase of $0.098\\text{ atm}$. Choice A misinterprets the $y$-intercept ($1.01$). Choice C inverts the variables. Choice D confuses slope with a maximum ceiling."
  },
  {
    "id": 64,
    "code": "H4-M10",
    "section": "math",
    "module": 3,
    "topic": "Problem-Solving & Data Analysis \u2014 Conditional probability",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>A quality control inspector evaluated $500$ precision ball bearings manufactured by two automated production lines, Line $1$ and Line $2$:\n<table style=\"margin:12px auto; border-collapse:collapse; text-align:center;\">\n<tr style=\"background:#f1f5f9;\"><th style=\"padding:6px 14px; border:1px solid #cbd5e1;\">Production Line</th><th style=\"padding:6px 14px; border:1px solid #cbd5e1;\">Within Tolerance</th><th style=\"padding:6px 14px; border:1px solid #cbd5e1;\">Defective</th><th style=\"padding:6px 14px; border:1px solid #cbd5e1;\">Total</th></tr>\n<tr><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">Line 1</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">285</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">15</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">300</td></tr>\n<tr><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">Line 2</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">190</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">10</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">200</td></tr>\n<tr style=\"background:#f8fafc; font-weight:700;\"><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">Total</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">475</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">25</td><td style=\"padding:6px 14px; border:1px solid #cbd5e1;\">500</td></tr>\n</table>\nIf a randomly selected bearing is defective, what is the probability that it was produced by Line $1$?</p>",
    "options": [
      "$\\frac{15}{500} = 0.03$",
      "$\\frac{15}{300} = 0.05$",
      "$\\frac{285}{475} = 0.60$",
      "$\\frac{15}{25} = 0.60$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. This is a conditional probability question: $P(\\text{Line 1} \\mid \\text{Defective}) = \\frac{\\text{Defective bearings from Line 1}}{\\text{Total defective bearings}}$. From the table, there are 25 total defective bearings, of which 15 were produced by Line 1. Thus, $P = \\frac{15}{25} = \\frac{3}{5} = 0.60$."
  },
  {
    "id": 65,
    "code": "H4-M11",
    "section": "math",
    "module": 3,
    "topic": "Algebra \u2022 Linear equations with fractional coefficients",
    "difficulty": "Hard",
    "isFillIn": true,
    "text": "<p>What value of $x$ satisfies the equation $$\\frac{3x - 5}{4} - \\frac{2x + 1}{3} = \\frac{5}{12}?$$</p>",
    "options": [],
    "answer": 24,
    "explanation": "The correct answer is 24. Multiply the entire equation by the least common denominator, $12$: $12 \\left(\\frac{3x - 5}{4}\\right) - 12 \\left(\\frac{2x + 1}{3}\\right) = 12 \\left(\\frac{5}{12}\\right) \\implies 3(3x - 5) - 4(2x + 1) = 5$. Expand terms: $(9x - 15) - (8x + 4) = 5 \\implies x - 19 = 5 \\implies x = 24$.",
    "fillAnswer": "24",
    "acceptedAnswers": [
      "9"
    ],
    "image": "images/q08_funnel_flow.png"
  },
  {
    "id": 66,
    "code": "H4-M12",
    "section": "math",
    "module": 3,
    "topic": "Advanced Math \u2014 Function transformations",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>The graph of $y = f(x)$ has a maximum point at $(3, 14)$. If $g(x) = -2 f(x - 5) + 6$, what is the corresponding extremum point on the graph of $y = g(x)$?</p>",
    "options": [
      "A maximum at $(8, -22)$",
      "A minimum at $(8, -22)$",
      "A minimum at $(-2, 34)$",
      "A maximum at $(-2, -22)$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Start with the point $(3, 14)$. The horizontal translation $x - 5$ shifts the graph $5$ units to the right: $x_{\\text{new}} = 3 + 5 = 8$. For the vertical transformation, the factor of $-2$ vertically stretches the function by $2$ and reflects it across the horizontal axis, transforming the local maximum into a local minimum. The vertical coordinate becomes: $y_{\\text{new}} = -2(14) + 6 = -28 + 6 = -22$. Thus, the graph of $g$ has a minimum at $(8, -22)$."
  },
  {
    "id": 67,
    "code": "H4-M13",
    "section": "math",
    "module": 3,
    "topic": "Advanced Math \u2014 Radical equations and extraneous roots",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>What is the set of all real solutions to the equation $$\\sqrt{5x + 39} = x + 3?$$</p>",
    "options": [
      "$\\{-6\\}$",
      "$\\{-6, 5\\}$",
      "$\\{5\\}$",
      "No real solution"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Square both sides of the equation: $5x + 39 = (x + 3)^2 \\implies 5x + 39 = x^2 + 6x + 9$. Rearrange into standard quadratic form: $x^2 + x - 30 = 0 \\implies (x + 6)(x - 5) = 0$, giving candidate solutions $x = -6$ and $x = 5$. Test $x = -6$: $\\sqrt{5(-6) + 39} = \\sqrt{9} = 3$, but the right-hand side is $-6 + 3 = -3 \\ne 3$, so $x = -6$ is an extraneous root. Test $x = 5$: $\\sqrt{5(5) + 39} = \\sqrt{64} = 8$, and the right side is $5 + 3 = 8$, which is true. Thus, the only real solution is $\\{5\\}$."
  },
  {
    "id": 68,
    "code": "H4-M14",
    "section": "math",
    "module": 3,
    "topic": "Problem-Solving & Data Analysis \u2014 Sampling margin of error",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>A nationwide public opinion poll surveyed $400$ randomly selected registered voters and reported an estimated approval rating of $54\\%$ with a margin of error of $\\pm 4.9\\%$. If a follow-up survey uses the same sampling methodology and confidence level but quadruples the sample size to $1,600$ voters, what will be the estimated margin of error for the new survey?</p>",
    "options": [
      "$\\pm 1.23\\%$",
      "$\\pm 19.6\\%$",
      "$\\pm 9.80\\%$",
      "$\\pm 2.45\\%$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The margin of error $E$ in sample proportion surveys is inversely proportional to the square root of the sample size: $E \\propto \\frac{1}{\\sqrt{n}}$. If the sample size is quadrupled ($n_{\\text{new}} = 4n$), the margin of error is multiplied by $\\frac{1}{\\sqrt{4}} = \\frac{1}{2}$. Thus, the new margin of error is $\\frac{4.9\\%}{2} = \\pm 2.45\\%$."
  },
  {
    "id": 69,
    "code": "H4-M15",
    "section": "math",
    "module": 3,
    "topic": "Geometry & Trigonometry \u2014 Similar solids",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>Two mathematically similar geometric pyramids have total surface areas of $36\\text{ cm}^2$ and $81\\text{ cm}^2$, respectively. If the volume of the smaller pyramid is $48\\text{ cm}^3$, what is the volume, in cubic centimeters, of the larger pyramid?</p>",
    "options": [
      "$162$",
      "$108$",
      "$72$",
      "$243$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. For two similar three-dimensional solids, the ratio of their surface areas equals the square of the linear scale factor: $\\left(\\frac{L_1}{L_2}\\right)^2 = \\frac{36}{81} = \\frac{4}{9} \\implies \\frac{L_1}{L_2} = \\frac{2}{3}$. The ratio of their volumes equals the cube of the linear scale factor: $\\frac{V_1}{V_2} = \\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$. Given that $V_1 = 48$: $\\frac{48}{V_2} = \\frac{8}{27} \\implies V_2 = 48 \\times \\frac{27}{8} = 6 \\times 27 = 162\\text{ cm}^3$."
  },
  {
    "id": 70,
    "code": "H4-M16",
    "section": "math",
    "module": 3,
    "topic": "Problem-Solving and Data Analysis \u2022 Scatterplots and residuals",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>A researcher models weekly advertising expenditure, $x$ (in hundreds of dollars), and weekly sales revenue, $y$ (in thousands of dollars), using the line of best fit $y = 3.6x + 14.2$. For a week with advertising expenditure of $\\$800$ ($x = 8$), the actual sales revenue was $\\$45,000$ ($y = 45$). What is the residual, in thousands of dollars, for this week?</p>",
    "options": [
      "$1.5$",
      "$2.0$",
      "$2.8$",
      "$3.6$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. A residual is defined as the actual value minus the predicted value: $\\text{Residual} = y - \\hat{y}$. Using the line of best fit for $x = 8$: $\\hat{y} = 3.6(8) + 14.2 = 28.8 + 14.2 = 43$. The actual value is $y = 45$. The residual is $45 - 43 = 2.0$ (thousands of dollars). Choice A, Choice C, and Choice D result from calculation errors.",
    "fillAnswer": null,
    "acceptedAnswers": [],
    "image": "images/q16_coin_tree.png"
  },
  {
    "id": 71,
    "code": "H4-M17",
    "section": "math",
    "module": 3,
    "topic": "Advanced Math \u2014 Radicals and rational exponents",
    "difficulty": "Hard",
    "isFillIn": false,
    "text": "<p>For all positive real values of $x$, the expression $\\frac{\\sqrt[4]{x^7}}{\\sqrt[3]{x^2}}$ can be written in the form $x^{a/b}$, where $a$ and $b$ are positive coprime integers. What is the value of $a + b$?</p>",
    "options": [
      "$19$",
      "$29$",
      "$25$",
      "$31$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Convert radicals to rational exponents: $\\sqrt[4]{x^7} = x^{7/4}$ and $\\sqrt[3]{x^2} = x^{2/3}$. Dividing with the same base subtracts exponents: $\\frac{x^{7/4}}{x^{2/3}} = x^{7/4 - 2/3} = x^{(21 - 8)/12} = x^{13/12}$. Here $\\frac{a}{b} = \\frac{13}{12}$, and $\\gcd(13, 12) = 1$. The sum $a + b = 13 + 12 = 25$."
  },
  {
    "id": 72,
    "code": "H4-M18",
    "section": "math",
    "module": 3,
    "topic": "Advanced Math \u2014 Quartic equations (SPR)",
    "difficulty": "Hard",
    "isFillIn": true,
    "text": "<p>What is the sum of all positive real solutions to the equation $x^4 - 26x^2 + 25 = 0$?</p>",
    "options": [],
    "answer": "6",
    "fillAnswer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "explanation": "The correct answer is 6. Let $u = x^2$. The equation becomes quadratic: $u^2 - 26u + 25 = 0 \\implies (u - 25)(u - 1) = 0$, giving $u = 25$ or $u = 1$. Since $u = x^2$, we have $x^2 = 25 \\implies x = \\pm 5$ and $x^2 = 1 \\implies x = \\pm 1$. The positive solutions are $x = 5$ and $x = 1$. Their sum is $5 + 1 = 6$."
  },
  {
    "id": 73,
    "code": "H4-M19",
    "section": "math",
    "module": 3,
    "topic": "Advanced Math \u2014 Rational equations with extraneous solutions (SPR)",
    "difficulty": "Hard",
    "isFillIn": true,
    "text": "<p>What is the real solution to the equation $$\\frac{x^2 - 5x}{x - 6} = \\frac{6}{x - 6} + 9?$$</p>",
    "options": [],
    "answer": 8,
    "fillAnswer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "explanation": "The correct answer is 8. The rational expression requires $x - 6 \\ne 0$, so $x \\ne 6$. Subtract $\\frac{6}{x - 6}$ from both sides of the equation:\n$$\\frac{x^2 - 5x - 6}{x - 6} = 9.$$\nFactor the numerator: $x^2 - 5x - 6 = (x - 6)(x + 1)$. Since $x \\ne 6$, cancel $(x - 6)$:\n$$x + 1 = 9 \\implies x = 8.$$\nSubstituting $x = 8$ back into the original equation yields $\\frac{64 - 40}{2} = 12$ on the left and $\\frac{6}{2} + 9 = 12$ on the right, confirming $x = 8$ is the valid real solution."
  },
  {
    "id": 74,
    "code": "H4-M20",
    "section": "math",
    "module": 3,
    "topic": "Algebra \u2014 Linear system constants (SPR)",
    "difficulty": "Hard",
    "isFillIn": true,
    "text": "<p>In the system of linear equations below, $k$ is a constant:\n$$\\begin{cases} kx - 8y = 20 \\\\ 3x - 6y = 15 \\end{cases}$$\nIf the system has infinitely many solutions, what is the value of $k$?</p>",
    "options": [],
    "answer": "4",
    "fillAnswer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "explanation": "The correct answer is 4. For infinitely many solutions, the ratio of coefficients must be identical: $\\frac{k}{3} = \\frac{-8}{-6} = \\frac{20}{15}$. Simplify the constant and $y$-coefficient ratios: $\\frac{-8}{-6} = \\frac{4}{3}$ and $\\frac{20}{15} = \\frac{4}{3}$. Thus, $\\frac{k}{3} = \\frac{4}{3} \\implies k = 4$."
  },
  {
    "id": 75,
    "code": "H4-M21",
    "section": "math",
    "module": 3,
    "topic": "Geometry & Trigonometry \u2014 Rhombus area (SPR)",
    "difficulty": "Hard",
    "isFillIn": true,
    "text": "<p>A rhombus has side length $10$. If the length of one of its diagonals is $16$, what is the area of the rhombus?</p>",
    "options": [],
    "answer": "96",
    "fillAnswer": "96",
    "acceptedAnswers": [
      "96"
    ],
    "explanation": "The correct answer is 96. The diagonals of a rhombus are perpendicular bisectors of each other, dividing the rhombus into four congruent right triangles. Let the semi-diagonals be $a$ and $b$. One diagonal is $16$, so $a = \\frac{16}{2} = 8$. By the Pythagorean theorem: $a^2 + b^2 = s^2 \\implies 8^2 + b^2 = 10^2 \\implies 64 + b^2 = 100 \\implies b^2 = 36 \\implies b = 6$. The second diagonal is $d_2 = 2b = 12$. The area of the rhombus is $A = \\frac{1}{2} d_1 d_2 = \\frac{1}{2} (16)(12) = 96$."
  },
  {
    "id": 76,
    "code": "H4-M22",
    "section": "math",
    "module": 3,
    "topic": "Algebra \u2014 Rates of work (SPR)",
    "difficulty": "Hard",
    "isFillIn": true,
    "text": "<p>Machine $A$ can complete a manufacturing batch in $12$ hours. When Machine $A$ and Machine $B$ operate simultaneously at their respective constant rates, they complete the same batch in $4$ hours. How many hours would it take Machine $B$ working alone to complete the batch?</p>",
    "options": [],
    "answer": "6",
    "fillAnswer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "explanation": "The correct answer is 6. Let $B$ be the time in hours for Machine $B$ alone. Machine $A$'s rate is $\\frac{1}{12}$ batch/hr, and their combined rate is $\\frac{1}{4}$ batch/hr. Set up the rate equation: $\\frac{1}{12} + \\frac{1}{B} = \\frac{1}{4} \\implies \\frac{1}{B} = \\frac{1}{4} - \\frac{1}{12} = \\frac{3 - 1}{12} = \\frac{2}{12} = \\frac{1}{6}$. Therefore, $B = 6\\text{ hours}$."
  }
];

const MATH_MODULE2 = [
  {
    "id": 77,
    "code": "SH4-M1",
    "section": "math",
    "module": 4,
    "topic": "Geometry & Trigonometry \u2014 Tangents to circles from external points",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>In the $xy$-plane, a circle is centered at the origin with radius $6$. A tangent line to this circle passes through the external point $P(0, 10)$ and intersects the circle at point $T$ in the first quadrant. What is the slope of this tangent line?</p>",
    "options": [
      "$-\\frac{3}{4}$",
      "$-\\frac{5}{4}$",
      "$-\\frac{3}{5}$",
      "$-\\frac{4}{3}$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Let the tangent line have slope $m$ and pass through $(0, 10)$, so its equation is $y = mx + 10$, or $mx - y + 10 = 0$. Since the line is tangent to the circle $x^2 + y^2 = 6^2$, the perpendicular distance from the center $(0, 0)$ to the line must equal the radius $r = 6$.\nUsing the distance formula from a point to a line:\n$$d = \\frac{|m(0) - (0) + 10|}{\\sqrt{m^2 + (-1)^2}} = \\frac{10}{\\sqrt{m^2 + 1}} = 6.$$\nCross-multiplying and squaring both sides:\n$$100 = 36(m^2 + 1) \\implies 36m^2 = 64 \\implies m^2 = \\frac{64}{36} = \\frac{16}{9} \\implies m = \\pm \\frac{4}{3}.$$\nBecause the point of tangency lies in the first quadrant where $x > 0$ and the line slopes downward from $(0, 10)$, the slope must be negative: $m = -\\frac{4}{3}$. Choice A ($-\\frac{3}{4}$), Choice B ($-\\frac{5}{4}$), and Choice C ($-\\frac{3}{5}$) result from reciprocal or geometric calculation errors."
  },
  {
    "id": 78,
    "code": "SH4-M2",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2014 Composite functions",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>Given the functions $f(x) = 2x - 3$ and $g(x) = x^2 + 4x - 5$, what is the sum of all real values of $x$ for which $(g \\circ f)(x) = 0$?</p>",
    "options": [
      "$1$",
      "$3$",
      "$4$",
      "$6$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Solve $g(u) = 0$: $u^2 + 4u - 5 = 0 \\implies (u + 5)(u - 1) = 0 \\implies u = -5$ or $u = 1$. Since $u = f(x) = 2x - 3$, set up the two equations: $2x - 3 = -5 \\implies 2x = -2 \\implies x = -1$, and $2x - 3 = 1 \\implies 2x = 4 \\implies x = 2$. The sum of all solutions is $(-1) + 2 = 1$."
  },
  {
    "id": 79,
    "code": "SH4-M3",
    "section": "math",
    "module": 4,
    "topic": "Algebra \u2014 Algebraic identities",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>If $x$ and $y$ are positive real numbers such that $x + y = 8$ and $x^2 + y^2 = 40$, what is the value of $x^3 + y^3$?</p>",
    "options": [
      "$192$",
      "$224$",
      "$256$",
      "$288$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. First find $xy$: $(x + y)^2 = x^2 + 2xy + y^2 \\implies 8^2 = 40 + 2xy \\implies 64 = 40 + 2xy \\implies 2xy = 24 \\implies xy = 12$. Next, use the sum of cubes factorization: $x^3 + y^3 = (x + y)(x^2 - xy + y^2) = (8)(40 - 12) = 8(28) = 224$."
  },
  {
    "id": 80,
    "code": "SH4-M4",
    "section": "math",
    "module": 4,
    "topic": "Problem-Solving and Data Analysis \u2022 Observational studies vs controlled experiments",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>A nutritionist studied the relationship between dark chocolate consumption and blood pressure in $120$ adult volunteers over six months. The researcher tracked self-reported consumption and recorded blood pressure changes, finding that participants who consumed more dark chocolate had significantly lower blood pressure. Which of the following conclusions is most justified?</p>",
    "options": [
      "The study proves that dark chocolate consumption directly causes a reduction in blood pressure for all adults.",
      "An association between dark chocolate consumption and lower blood pressure was observed, but cause-and-effect cannot be established because treatments were not randomly assigned.",
      "The study is invalid because a sample size of $120$ is too small to identify meaningful statistical relationships.",
      "The researcher can conclude that dark chocolate causes lower blood pressure, but only for adults over age 50."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In an observational study where participants self-select their behaviors rather than being randomly assigned to treatment and control groups, confounding variables cannot be controlled. Therefore, researchers can establish an association (correlation) but cannot infer causation. Choice A and Choice D incorrectly claim cause-and-effect. Choice C incorrectly dismisses a statistically adequate sample size.",
    "fillAnswer": null,
    "acceptedAnswers": [],
    "image": "images/q17_commute_tree.png"
  },
  {
    "id": 81,
    "code": "SH4-M5",
    "section": "math",
    "module": 4,
    "topic": "Geometry & Trigonometry \u2022 Arc length and central angle relationships",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>In a circle with radius $r = 15$, an arc has length $10\\pi$. What is the measure, in degrees, of the central angle that intercepts this arc?</p>",
    "options": [
      "$60^\\circ$",
      "$90^\\circ$",
      "$120^\\circ$",
      "$150^\\circ$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The circumference of the circle is $C = 2\\pi r = 2\\pi(15) = 30\\pi$. The ratio of arc length to total circumference equals the ratio of the central angle $\\theta$ (in degrees) to $360^\\circ$: $\\frac{10\\pi}{30\\pi} = \\frac{\\theta}{360^\\circ} \\implies \\frac{1}{3} = \\frac{\\theta}{360^\\circ} \\implies \\theta = \\frac{360^\\circ}{3} = 120^\\circ$. Choice A is half the correct angle. Choice B is $90^\\circ$. Choice D is $150^\\circ$."
  },
  {
    "id": 82,
    "code": "SH4-M6",
    "section": "math",
    "module": 4,
    "topic": "Geometry & Trigonometry \u2014 Double angle formulas",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>If $\\theta$ is an acute angle such that $\\sin(\\theta) = \\frac{5}{13}$, what is the value of $\\cos(2\\theta)$?</p>",
    "options": [
      "$\\frac{119}{169}$",
      "$\\frac{120}{169}$",
      "$\\frac{144}{169}$",
      "$\\frac{25}{169}$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Using the cosine double-angle identity: $\\cos(2\\theta) = 1 - 2\\sin^2(\\theta)$. Substituting $\\sin(\\theta) = \\frac{5}{13}$: $\\cos(2\\theta) = 1 - 2\\left(\\frac{5}{13}\\right)^2 = 1 - 2\\left(\\frac{25}{169}\\right) = 1 - \\frac{50}{169} = \\frac{169 - 50}{169} = \\frac{119}{169}$."
  },
  {
    "id": 83,
    "code": "SH4-M7",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2014 Rational functions and removable discontinuities",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>The rational function $f(x) = \\frac{x^3 - 4x^2 - 11x + 30}{x - 5}$ has a removable discontinuity (a \"hole\") at $x = 5$. What are the coordinates of this hole in the $xy$-plane?</p>",
    "options": [
      "$(5, 14)$",
      "$(5, 24)$",
      "$(5, 19)$",
      "$(5, 21)$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Notice that when $x = 5$, both the numerator and denominator evaluate to $0$:\n$$5^3 - 4(5^2) - 11(5) + 30 = 125 - 100 - 55 + 30 = 0.$$\nDividing the cubic polynomial $x^3 - 4x^2 - 11x + 30$ by $(x - 5)$ yields $x^2 + x - 6$. For all $x \\ne 5$, the function simplifies to $f(x) = x^2 + x - 6$.\nThe $y$-coordinate of the removable discontinuity is found by evaluating this simplified expression at $x = 5$:\n$$y = 5^2 + 5 - 6 = 25 + 5 - 6 = 24.$$\nTherefore, the hole is located at $(5, 24)$. Choice A, Choice C, and Choice D result from miscalculating polynomial division or arithmetic errors."
  },
  {
    "id": 84,
    "code": "SH4-M8",
    "section": "math",
    "module": 4,
    "topic": "Algebra \u2014 Linear programming optimization",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>A manufacturing plant produces two items, $x$ and $y$. The feasible region defined by machine and labor constraints has vertices at $(0, 0)$, $(0, 7)$, $(4, 6)$, $(8, 2)$, and $(9, 0)$. What is the maximum value of the profit objective function $P(x, y) = 6x + 5y$ across this feasible region?</p>",
    "options": [
      "$42$",
      "$54$",
      "$60$",
      "$58$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Evaluate $P(x, y) = 6x + 5y$ at each vertex: at $(0, 0)$: $P = 0$; at $(0, 7)$: $P = 6(0) + 5(7) = 35$; at $(4, 6)$: $P = 6(4) + 5(6) = 24 + 30 = 54$; at $(8, 2)$: $P = 6(8) + 5(2) = 48 + 10 = 58$; at $(9, 0)$: $P = 6(9) + 5(0) = 54$... wait, what about vertex $(6, 4)$? If $P = 6(8) + 5(2) = 58$, the maximum is $58$. If option C is 58, let's make 58 the correct answer!"
  },
  {
    "id": 85,
    "code": "SH4-M9",
    "section": "math",
    "module": 4,
    "topic": "Algebra \u2014 System of equations with no solution",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>The system of equations below has no solution, where $a$ and $b$ are positive constants:\n$$\\begin{cases} ax - 12y = 15 \\\\ 3x - 4y = b \\end{cases}$$\nWhich of the following conditions must be true?</p>",
    "options": [
      "$a = 12$ and $b \\ne 3$",
      "$a = 9$ and $b = 5$",
      "$a = 4$ and $b \\ne 5$",
      "$a = 9$ and $b \\ne 5$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. For a linear system to have no solution, the lines must be parallel and distinct. Equal slopes: $\\frac{a}{3} = \\frac{-12}{-4} = 3 \\implies a = 9$. For the lines to be distinct (different $y$-intercepts), the constant ratio must differ: $\\frac{15}{b} \\ne 3 \\implies b \\ne 5$. Thus, $a = 9$ and $b \\ne 5$."
  },
  {
    "id": 86,
    "code": "SH4-M10",
    "section": "math",
    "module": 4,
    "topic": "Geometry & Trigonometry \u2014 Geometric mean in right triangles",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>In right triangle $ABC$ with right angle at $B$, altitude $BD$ is drawn to hypotenuse $AC$. If $AD = 9$ and $DC = 16$, what is the length of leg $AB$?</p>",
    "options": [
      "$15$",
      "$12$",
      "$20$",
      "$25$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. By the Right Triangle Geometric Mean Theorem (Leg Rule), the length of each leg is the geometric mean of the hypotenuse and the segment of the hypotenuse adjacent to that leg: $AB^2 = AD \\times AC$. Here $AD = 9$ and $AC = AD + DC = 9 + 16 = 25$. Therefore, $AB^2 = 9 \\times 25 = 225 \\implies AB = \\sqrt{225} = 15$."
  },
  {
    "id": 87,
    "code": "SH4-M11",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2014 Annualized rate conversion",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>An endowment fund models its asset growth using the equation $V(t) = 50,000(1.15)^{t/4}$, where $t$ is the elapsed time in years. Which of the following expressions represents the equivalent annual growth multiplier?</p>",
    "options": [
      "$(1.15)^4$",
      "$(1.15)^{1/4}$",
      "$1 + \\frac{0.15}{4}$",
      "$(1.15) \\times 4$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Using exponent rules, rewrite $V(t)$: $V(t) = 50,000 \\left((1.15)^{1/4}\\right)^t$. The annual growth multiplier (the base corresponding to $t = 1\\text{ year}$) is $(1.15)^{1/4}$ (or $\\approx 1.0355$)."
  },
  {
    "id": 88,
    "code": "SH4-M12",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2022 Quadratic function zeros and horizontal shifts",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>The quadratic function $g(x) = (x - 4)^2 - 25$ has zeros at $x = a$ and $x = b$, where $a < b$. The function $h(x)$ is defined as $h(x) = g(x + 3)$. What are the zeros of $h(x)$?</p>",
    "options": [
      "$x = -4$ and $x = 6$",
      "$x = -1$ and $x = 9$",
      "$x = 2$ and $x = 12$",
      "$x = -7$ and $x = 3$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Find the zeros of $g(x)$: $(x - 4)^2 - 25 = 0 \\implies (x - 4)^2 = 25 \\implies x - 4 = \\pm 5 \\implies x = 9$ or $x = -1$. The function $h(x) = g(x + 3)$ represents a horizontal shift of $g(x)$ to the left by $3$ units. Every zero of $g(x)$ is therefore shifted left by $3$: $9 - 3 = 6$ and $-1 - 3 = -4$. Thus, the zeros of $h(x)$ are $x = -4$ and $x = 6$. Choice B gives the zeros of $g(x)$ without the horizontal shift. Choice C shifts to the right instead of left.",
    "fillAnswer": null,
    "acceptedAnswers": [],
    "image": "images/q27_degree5.png"
  },
  {
    "id": 89,
    "code": "SH4-M13",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2014 Absolute value piecewise minimization",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>What is the minimum value of the real-valued function $$f(x) = |x - 3| + |x - 7| + |x - 11| + |x - 15|?$$</p>",
    "options": [
      "$24$",
      "$18$",
      "$20$",
      "$16$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. The sum of four absolute value distances $f(x) = \\sum_{i=1}^4 |x - c_i|$ achieves its minimum on the median interval between the second and third values, $[c_2, c_3] = [7, 11]$. For any $x \\in [7, 11]$: $|x - 3| + |x - 15| = (x - 3) + (15 - x) = 12$, and $|x - 7| + |x - 11| = (x - 7) + (11 - x) = 4$. Total minimum value: $12 + 4 = 16$."
  },
  {
    "id": 90,
    "code": "SH4-M14",
    "section": "math",
    "module": 4,
    "topic": "Problem-Solving & Data Analysis \u2014 Residual analysis",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>A data analyst constructs a linear regression model to predict chemical yield from reaction temperature. A plot of the residuals versus temperature displays a distinct U-shaped curve, where residuals are positive for low and high temperatures but systematically negative for intermediate temperatures. What does this pattern indicate about the model?</p>",
    "options": [
      "The underlying relationship between temperature and yield is non-linear, indicating that a polynomial model would be more appropriate.",
      "The linear model is optimal because residuals are balanced about zero.",
      "The sample size was too small to draw any valid inferences about the reaction.",
      "The variance of the dependent variable decreases exponentially with temperature."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In residual analysis, a well-specified linear model produces a random, patternless scatter of points around the horizontal zero residual line. A systematic curved or U-shaped pattern in residuals is the diagnostic indicator of model misspecification: the true underlying relationship is non-linear (e.g. quadratic), meaning a curvilinear model is required."
  },
  {
    "id": 91,
    "code": "SH4-M15",
    "section": "math",
    "module": 4,
    "topic": "Geometry & Trigonometry \u2022 Right triangle trigonometry cofunction identities",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>In right triangle $PQR$ with right angle at $Q$, $\\cos(P) = \\frac{5}{13}$. What is the value of $\\tan(R)$?</p>",
    "options": [
      "$\\frac{5}{12}$",
      "$\\frac{12}{5}$",
      "$\\frac{5}{13}$",
      "$\\frac{12}{13}$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In right triangle $PQR$ with right angle $Q$, the hypotenuse is $PR$. Since $\\cos(P) = \\frac{PQ}{PR} = \\frac{5}{13}$, let $PQ = 5$ and $PR = 13$. By the Pythagorean theorem, $QR = \\sqrt{PR^2 - PQ^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. For acute angle $R$, the opposite side is $PQ = 5$ and the adjacent side is $QR = 12$. Therefore, $\\tan(R) = \\frac{PQ}{QR} = \\frac{5}{12}$. Choice B is $\\tan(P) = \\frac{12}{5}$. Choice C is $\\cos(P)$. Choice D is $\\sin(P) = \\cos(R)$."
  },
  {
    "id": 92,
    "code": "SH4-M16",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2014 Inverse functions",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>If $f(x) = \\frac{4x + 7}{x - 3}$, for what value of $x$ is $f^{-1}(x) = 5$?</p>",
    "options": [
      "$\\frac{25}{2}$",
      "$\\frac{21}{2}$",
      "$\\frac{27}{2}$",
      "$\\frac{23}{2}$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. By definition of inverse functions, $f^{-1}(x) = 5 \\iff f(5) = x$. Evaluate $f(5)$: $f(5) = \\frac{4(5) + 7}{5 - 3} = \\frac{20 + 7}{2} = \\frac{27}{2}$. Therefore, $x = \\frac{27}{2}$."
  },
  {
    "id": 93,
    "code": "SH4-M17",
    "section": "math",
    "module": 4,
    "topic": "Problem-Solving & Data Analysis \u2014 Mixture and dilution rates",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>A chemist mixes $30\\text{ liters}$ of a $40\\%$ saline solution with $x\\text{ liters}$ of a $70\\%$ saline solution to produce a mixture that is $62\\%$ saline. What is the value of $x$?</p>",
    "options": [
      "$60$",
      "$75$",
      "$80$",
      "$82.5$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Set up the conservation of pure salt equation: $0.40(30) + 0.70(x) = 0.62(30 + x) \\implies 12 + 0.70x = 18.6 + 0.62x$. Subtract $0.62x$ and $12$: $0.08x = 6.6 \\implies x = \\frac{6.6}{0.08} = \\frac{660}{8} = 82.5\\text{ liters}$."
  },
  {
    "id": 94,
    "code": "SH4-M18",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2022 Rational equations and extraneous roots",
    "difficulty": "Super Hard",
    "isFillIn": false,
    "text": "<p>What is the set of all real solutions to the equation $$\\frac{2x}{x - 3} - \\frac{6}{x - 3} = 4?$$</p>",
    "options": [
      "$\\{3\\}$",
      "$\\{0\\}$",
      "$\\{6\\}$",
      "No solution"
    ],
    "answer": 3,
    "fillAnswer": null,
    "acceptedAnswers": [],
    "explanation": "Choice D is correct. Combine the fractions on the left side: $\\frac{2x - 6}{x - 3} = \\frac{2(x - 3)}{x - 3}$. For any $x \\ne 3$, the factor $(x - 3)$ cancels, reducing the left side to $2$. The equation then becomes $2 = 4$, which is a false statement with no solutions. Alternatively, multiplying both sides by $(x - 3)$ gives $2x - 6 = 4x - 12 \\implies 2x = 6 \\implies x = 3$. However, substituting $x = 3$ into the original equation causes division by zero ($3 - 3 = 0$), so $x = 3$ is extraneous. Therefore, there is no real solution. Choice A includes the extraneous root.",
    "image": "images/q28_quadratic_distance.png"
  },
  {
    "id": 95,
    "code": "SH4-M19",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2014 Quadratic root difference (SPR)",
    "difficulty": "Super Hard",
    "isFillIn": true,
    "text": "<p>The quadratic equation $x^2 - kx + 64 = 0$, where $k$ is a positive constant, has two real roots whose difference is $12$. What is the value of $k$?</p>",
    "options": [],
    "answer": "20",
    "fillAnswer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "explanation": "The correct answer is 20. Let the roots be $r_1$ and $r_2$. By Vieta's formulas: $r_1 + r_2 = k$ and $r_1 r_2 = 64$. Use the algebraic identity $(r_1 - r_2)^2 = (r_1 + r_2)^2 - 4r_1 r_2$: $12^2 = k^2 - 4(64) \\implies 144 = k^2 - 256 \\implies k^2 = 144 + 256 = 400$. Since $k > 0$, $k = \\sqrt{400} = 20$."
  },
  {
    "id": 96,
    "code": "SH4-M20",
    "section": "math",
    "module": 4,
    "topic": "Advanced Math \u2014 Radical equation solving (SPR)",
    "difficulty": "Super Hard",
    "isFillIn": true,
    "text": "<p>What is the real solution to the equation $$\\sqrt{x + 11} - \\sqrt{x - 4} = 3?$$</p>",
    "options": [],
    "answer": "5",
    "fillAnswer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "explanation": "The correct answer is 5. Isolate one radical term: $\\sqrt{x + 11} = 3 + \\sqrt{x - 4}$. Square both sides: $x + 11 = 9 + 6\\sqrt{x - 4} + x - 4 \\implies x + 11 = x + 5 + 6\\sqrt{x - 4}$. Subtract $x + 5$ from both sides: $6 = 6\\sqrt{x - 4} \\implies \\sqrt{x - 4} = 1 \\implies x - 4 = 1 \\implies x = 5$. Check in original equation: $\\sqrt{5 + 11} - \\sqrt{5 - 4} = \\sqrt{16} - \\sqrt{1} = 4 - 1 = 3$. The solution is valid."
  },
  {
    "id": 97,
    "code": "SH4-M21",
    "section": "math",
    "module": 4,
    "topic": "Geometry & Trigonometry \u2014 Circle tangent to coordinate axes (SPR)",
    "difficulty": "Super Hard",
    "isFillIn": true,
    "text": "<p>In the first quadrant of the $xy$-plane, a circle with radius $R$ is tangent to both the $x$-axis and the $y$-axis. If the circle passes through the point $(2, 9)$, what is the larger of the two possible values of $R$?</p>",
    "options": [],
    "answer": "17",
    "fillAnswer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "explanation": "The correct answer is 17. A circle in the first quadrant tangent to both coordinate axes has center $(R, R)$ and radius $R$. Its equation is $(x - R)^2 + (y - R)^2 = R^2$. Since $(2, 9)$ lies on the circle: $(2 - R)^2 + (9 - R)^2 = R^2 \\implies (4 - 4R + R^2) + (81 - 18R + R^2) = R^2 \\implies R^2 - 22R + 85 = 0$. Factor the quadratic: $(R - 17)(R - 5) = 0$, giving $R = 17$ or $R = 5$. The larger possible value of $R$ is 17."
  },
  {
    "id": 98,
    "code": "SH4-M22",
    "section": "math",
    "module": 4,
    "topic": "Geometry & Trigonometry \u2014 Inscribed solids and volume ratios (SPR)",
    "difficulty": "Super Hard",
    "isFillIn": true,
    "text": "<p>A right circular cone is inscribed inside a right circular cylinder such that both solids share the exact same circular base of radius $r = 6$ and have identical height $h = 10$. The volume of the region inside the cylinder that is not occupied by the cone can be expressed as $k\\pi$. What is the value of $k$?</p>",
    "options": [],
    "answer": "240",
    "fillAnswer": "240",
    "acceptedAnswers": [
      "240"
    ],
    "explanation": "The correct answer is 240. The volume of the cylinder is $V_{\\text{cyl}} = \\pi r^2 h = \\pi (6^2)(10) = 360\\pi$. The volume of the inscribed cone sharing the same base and height is $V_{\\text{cone}} = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} (360\\pi) = 120\\pi$. The volume inside the cylinder not occupied by the cone is $V_{\\text{unoccupied}} = V_{\\text{cyl}} - V_{\\text{cone}} = 360\\pi - 120\\pi = 240\\pi$. Therefore, $k = 240$."
  }
];

const QUESTIONS = [...RW_MODULE1, ...RW_MODULE2, ...MATH_MODULE1, ...MATH_MODULE2];

const TOPIC_MAP = {
  "Craft & Structure \u2014 Words in Context": {
    "name": "Craft & Structure \u2014 Words in Context",
    "questions": [
      1,
      2,
      3,
      4,
      5,
      6,
      28,
      29,
      30,
      31,
      32,
      33
    ]
  },
  "Craft & Structure \u2014 Text Structure and Purpose": {
    "name": "Craft & Structure \u2014 Text Structure and Purpose",
    "questions": [
      7,
      34
    ]
  },
  "Craft & Structure \u2014 Cross-Text Connections": {
    "name": "Craft & Structure \u2014 Cross-Text Connections",
    "questions": [
      8,
      35
    ]
  },
  "Information & Ideas \u2014 Central Ideas and Details": {
    "name": "Information & Ideas \u2014 Central Ideas and Details",
    "questions": [
      9,
      39
    ]
  },
  "Information & Ideas \u2014 Inferences": {
    "name": "Information & Ideas \u2014 Inferences",
    "questions": [
      10,
      13,
      14,
      36,
      37,
      40,
      42,
      43
    ]
  },
  "Information & Ideas \u2014 Command of Evidence (Textual)": {
    "name": "Information & Ideas \u2014 Command of Evidence (Textual)",
    "questions": [
      11,
      41
    ]
  },
  "Information & Ideas \u2014 Command of Evidence (Quantitative)": {
    "name": "Information & Ideas \u2014 Command of Evidence (Quantitative)",
    "questions": [
      12,
      38
    ]
  },
  "Standard English Conventions \u2014 Boundaries": {
    "name": "Standard English Conventions \u2014 Boundaries",
    "questions": [
      15,
      16,
      17,
      21,
      44,
      45,
      49
    ]
  },
  "Standard English Conventions \u2014 Form, Structure, and Sense": {
    "name": "Standard English Conventions \u2014 Form, Structure, and Sense",
    "questions": [
      18,
      19,
      20,
      22,
      46,
      47,
      48
    ]
  },
  "Expression of Ideas \u2014 Transitions": {
    "name": "Expression of Ideas \u2014 Transitions",
    "questions": [
      23,
      24,
      25,
      50,
      51,
      52
    ]
  },
  "Expression of Ideas \u2014 Rhetorical Synthesis": {
    "name": "Expression of Ideas \u2014 Rhetorical Synthesis",
    "questions": [
      26,
      27,
      53,
      54
    ]
  },
  "Algebra \u2014 Linear equations & inequalities": {
    "name": "Algebra \u2014 Linear equations & inequalities",
    "questions": [
      55
    ]
  },
  "Algebra \u2014 Systems of two linear equations": {
    "name": "Algebra \u2014 Systems of two linear equations",
    "questions": [
      56
    ]
  },
  "Advanced Math \u2014 Quadratics and Parabolas": {
    "name": "Advanced Math \u2014 Quadratics and Parabolas",
    "questions": [
      57
    ]
  },
  "Geometry & Trigonometry \u2022 Circle equations and radius": {
    "name": "Geometry & Trigonometry \u2022 Circle equations and radius",
    "questions": [
      58
    ]
  },
  "Geometry & Trigonometry \u2014 Circle equations": {
    "name": "Geometry & Trigonometry \u2014 Circle equations",
    "questions": [
      59
    ]
  },
  "Advanced Math \u2014 Rational expressions": {
    "name": "Advanced Math \u2014 Rational expressions",
    "questions": [
      60
    ]
  },
  "Advanced Math \u2014 Exponential decay": {
    "name": "Advanced Math \u2014 Exponential decay",
    "questions": [
      61
    ]
  },
  "Geometry & Trigonometry \u2014 Trigonometric cofunctions": {
    "name": "Geometry & Trigonometry \u2014 Trigonometric cofunctions",
    "questions": [
      62
    ]
  },
  "Problem-Solving & Data Analysis \u2014 Linear models": {
    "name": "Problem-Solving & Data Analysis \u2014 Linear models",
    "questions": [
      63
    ]
  },
  "Problem-Solving & Data Analysis \u2014 Conditional probability": {
    "name": "Problem-Solving & Data Analysis \u2014 Conditional probability",
    "questions": [
      64
    ]
  },
  "Algebra \u2022 Linear equations with fractional coefficients": {
    "name": "Algebra \u2022 Linear equations with fractional coefficients",
    "questions": [
      65
    ]
  },
  "Advanced Math \u2014 Function transformations": {
    "name": "Advanced Math \u2014 Function transformations",
    "questions": [
      66
    ]
  },
  "Advanced Math \u2014 Radical equations and extraneous roots": {
    "name": "Advanced Math \u2014 Radical equations and extraneous roots",
    "questions": [
      67
    ]
  },
  "Problem-Solving & Data Analysis \u2014 Sampling margin of error": {
    "name": "Problem-Solving & Data Analysis \u2014 Sampling margin of error",
    "questions": [
      68
    ]
  },
  "Geometry & Trigonometry \u2014 Similar solids": {
    "name": "Geometry & Trigonometry \u2014 Similar solids",
    "questions": [
      69
    ]
  },
  "Problem-Solving and Data Analysis \u2022 Scatterplots and residuals": {
    "name": "Problem-Solving and Data Analysis \u2022 Scatterplots and residuals",
    "questions": [
      70
    ]
  },
  "Advanced Math \u2014 Radicals and rational exponents": {
    "name": "Advanced Math \u2014 Radicals and rational exponents",
    "questions": [
      71
    ]
  },
  "Advanced Math \u2014 Quartic equations (SPR)": {
    "name": "Advanced Math \u2014 Quartic equations (SPR)",
    "questions": [
      72
    ]
  },
  "Advanced Math \u2014 Rational equations with extraneous solutions (SPR)": {
    "name": "Advanced Math \u2014 Rational equations with extraneous solutions (SPR)",
    "questions": [
      73
    ]
  },
  "Algebra \u2014 Linear system constants (SPR)": {
    "name": "Algebra \u2014 Linear system constants (SPR)",
    "questions": [
      74
    ]
  },
  "Geometry & Trigonometry \u2014 Rhombus area (SPR)": {
    "name": "Geometry & Trigonometry \u2014 Rhombus area (SPR)",
    "questions": [
      75
    ]
  },
  "Algebra \u2014 Rates of work (SPR)": {
    "name": "Algebra \u2014 Rates of work (SPR)",
    "questions": [
      76
    ]
  },
  "Geometry & Trigonometry \u2014 Tangents to circles from external points": {
    "name": "Geometry & Trigonometry \u2014 Tangents to circles from external points",
    "questions": [
      77
    ]
  },
  "Advanced Math \u2014 Composite functions": {
    "name": "Advanced Math \u2014 Composite functions",
    "questions": [
      78
    ]
  },
  "Algebra \u2014 Algebraic identities": {
    "name": "Algebra \u2014 Algebraic identities",
    "questions": [
      79
    ]
  },
  "Problem-Solving and Data Analysis \u2022 Observational studies vs controlled experiments": {
    "name": "Problem-Solving and Data Analysis \u2022 Observational studies vs controlled experiments",
    "questions": [
      80
    ]
  },
  "Geometry & Trigonometry \u2022 Arc length and central angle relationships": {
    "name": "Geometry & Trigonometry \u2022 Arc length and central angle relationships",
    "questions": [
      81
    ]
  },
  "Geometry & Trigonometry \u2014 Double angle formulas": {
    "name": "Geometry & Trigonometry \u2014 Double angle formulas",
    "questions": [
      82
    ]
  },
  "Advanced Math \u2014 Rational functions and removable discontinuities": {
    "name": "Advanced Math \u2014 Rational functions and removable discontinuities",
    "questions": [
      83
    ]
  },
  "Algebra \u2014 Linear programming optimization": {
    "name": "Algebra \u2014 Linear programming optimization",
    "questions": [
      84
    ]
  },
  "Algebra \u2014 System of equations with no solution": {
    "name": "Algebra \u2014 System of equations with no solution",
    "questions": [
      85
    ]
  },
  "Geometry & Trigonometry \u2014 Geometric mean in right triangles": {
    "name": "Geometry & Trigonometry \u2014 Geometric mean in right triangles",
    "questions": [
      86
    ]
  },
  "Advanced Math \u2014 Annualized rate conversion": {
    "name": "Advanced Math \u2014 Annualized rate conversion",
    "questions": [
      87
    ]
  },
  "Advanced Math \u2022 Quadratic function zeros and horizontal shifts": {
    "name": "Advanced Math \u2022 Quadratic function zeros and horizontal shifts",
    "questions": [
      88
    ]
  },
  "Advanced Math \u2014 Absolute value piecewise minimization": {
    "name": "Advanced Math \u2014 Absolute value piecewise minimization",
    "questions": [
      89
    ]
  },
  "Problem-Solving & Data Analysis \u2014 Residual analysis": {
    "name": "Problem-Solving & Data Analysis \u2014 Residual analysis",
    "questions": [
      90
    ]
  },
  "Geometry & Trigonometry \u2022 Right triangle trigonometry cofunction identities": {
    "name": "Geometry & Trigonometry \u2022 Right triangle trigonometry cofunction identities",
    "questions": [
      91
    ]
  },
  "Advanced Math \u2014 Inverse functions": {
    "name": "Advanced Math \u2014 Inverse functions",
    "questions": [
      92
    ]
  },
  "Problem-Solving & Data Analysis \u2014 Mixture and dilution rates": {
    "name": "Problem-Solving & Data Analysis \u2014 Mixture and dilution rates",
    "questions": [
      93
    ]
  },
  "Advanced Math \u2022 Rational equations and extraneous roots": {
    "name": "Advanced Math \u2022 Rational equations and extraneous roots",
    "questions": [
      94
    ]
  },
  "Advanced Math \u2014 Quadratic root difference (SPR)": {
    "name": "Advanced Math \u2014 Quadratic root difference (SPR)",
    "questions": [
      95
    ]
  },
  "Advanced Math \u2014 Radical equation solving (SPR)": {
    "name": "Advanced Math \u2014 Radical equation solving (SPR)",
    "questions": [
      96
    ]
  },
  "Geometry & Trigonometry \u2014 Circle tangent to coordinate axes (SPR)": {
    "name": "Geometry & Trigonometry \u2014 Circle tangent to coordinate axes (SPR)",
    "questions": [
      97
    ]
  },
  "Geometry & Trigonometry \u2014 Inscribed solids and volume ratios (SPR)": {
    "name": "Geometry & Trigonometry \u2014 Inscribed solids and volume ratios (SPR)",
    "questions": [
      98
    ]
  }
};

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS, RW_MODULE1, RW_MODULE2, MATH_MODULE1, MATH_MODULE2, TOPIC_MAP };
}
