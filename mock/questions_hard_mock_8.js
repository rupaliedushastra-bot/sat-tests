// =============================================
// SAT Hard Full Mock 8
// Full 98 Questions (RW M1: 27, RW M2: 27, Math M1: 22, Math M2: 22)
// Complete with LaTeX, Official Explanations, Options and SPR Accepted Answers
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "code": "H8-RW1",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 1,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Hard",
    "text": "<p>Although the composer’s early symphonies were characterized by a buoyant, melodic clarity that delighted conservative critics, his post-war chamber compositions adopted a dissonant, brooding aesthetic that many long-time patrons found entirely _______.</p>",
    "options": [
      "pellucid",
      "unpalatable",
      "didactic",
      "serendipitous"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The sentence sets up a clear contrast between the composer's early work ('buoyant, melodic clarity that delighted conservative critics') and his post-war chamber compositions ('dissonant, brooding aesthetic'). The missing word describes how patrons responded to this dissonant, brooding music; 'unpalatable' means unpleasant, distasteful, or difficult to accept, which logically captures their negative reaction. Choice A ('pellucid') means translucent or clear, contradicting the brooding dissonance. Choice C ('didactic') means intended to teach or instruct, which is unsupported. Choice D ('serendipitous') means occurring by pleasant chance, which also contradicts the negative reaction."
  },
  {
    "id": 2,
    "code": "H8-RW2",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 2,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Hard",
    "text": "<p>Archival historians investigating seventeenth-century Venetian diplomacy caution that official state despatches were rarely neutral accounts; ambassadors deliberately employed ambiguous phrasing to _______ their personal misgivings regarding senate mandates without openly courting treason charges.</p>",
    "options": [
      "dissemble",
      "exacerbate",
      "vindicate",
      "promulgate"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The context explains that ambassadors used ambiguous phrasing to disguise or conceal their personal disagreements with senate mandates so that they would not be charged with treason. 'Dissemble' means to disguise or conceal one's true motives, feelings, or beliefs, which fits the context precisely. Choice B ('exacerbate') means to make a problem or bad situation worse. Choice C ('vindicate') means to clear someone of blame or suspicion. Choice D ('promulgate') means to promote or make widely known, which is the exact opposite of hiding misgivings."
  },
  {
    "id": 3,
    "code": "H8-RW3",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 3,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Hard",
    "text": "<p>For decades, evolutionary biologists regarded the subterranean rodent’s enlarged olfactory bulb as a vestigial curiosity. However, recent neuroimaging reveals that underground foraging requires an extraordinarily _______ sensory apparatus capable of distinguishing minute volatile chemical gradients in oxygen-depleted soil.</p>",
    "options": [
      "cursory",
      "lethargic",
      "acute",
      "capricious"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The text contrasts the previous assumption that the olfactory bulb was merely a 'vestigial curiosity' with new findings that it can distinguish 'minute volatile chemical gradients.' Distinguishing such tiny differences requires a highly keen, sharp, or sensitive sensory apparatus. 'Acute' means sharp, keen, or perceptive. Choice A ('cursory') means hasty and superficial. Choice B ('lethargic') means sluggish or inactive. Choice D ('capricious') means erratic or whimsical."
  },
  {
    "id": 4,
    "code": "H8-RW4",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 4,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Hard",
    "text": "<p>The literary theorist argued that contemporary autofiction does not merely reflect biographical fact; rather, by interrogating the instability of memory, it functions as a provocative _______ against the conventional expectation of autobiographical authenticity.</p>",
    "options": [
      "polemic",
      "panegyric",
      "concordat",
      "platitude"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The text states that autofiction 'interrogat[es] the instability of memory' and challenges or argues against the 'conventional expectation of autobiographical authenticity.' A 'polemic' is a passionate verbal or written attack or aggressive argument against an established stance. Choice B ('panegyric') means a published text in praise of someone/something, the opposite of challenging an expectation. Choice C ('concordat') means an official treaty or agreement. Choice D ('platitude') means a trite or banal remark."
  },
  {
    "id": 5,
    "code": "H8-RW5",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 5,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Hard",
    "text": "<p>In extreme alpine environments, where subzero gale-force winds strip away moisture and desiccate foliage, cushion plants exhibit a remarkably _______ morphology, hugging the bedrock in tightly packed, dome-shaped clusters that trap metabolic heat.</p>",
    "options": [
      "recondite",
      "refractory",
      "resilient",
      "diffuse"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The passage describes harsh alpine conditions ('subzero gale-force winds strip away moisture and desiccate foliage') and explains how cushion plants survive by adapting their growth habit to trap metabolic heat. Their morphology is able to withstand or recover quickly from difficult conditions, meaning it is 'resilient.' Choice A ('recondite') means obscure or little known. Choice B ('refractory') means stubborn or resistant to authority/treatment. Choice D ('diffuse') means spread out or scattered, which directly contradicts 'tightly packed, dome-shaped clusters.'"
  },
  {
    "id": 6,
    "code": "H8-RW6",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 6,
    "isFillIn": false,
    "topic": "Craft & Structure — Text Structure and Purpose",
    "difficulty": "Hard",
    "text": "<p>The following text is adapted from an essay on urban architecture.</p><p>Twentieth-century modernist architecture championed functionalism under the dictum that 'form follows function,' eliminating ornamentation to construct streamlined concrete-and-glass towers. Proponents maintained that this geometric austerity would democratize civil space by eradicating class-signifying architectural motifs. Yet post-occupancy sociologists have observed that many such austere public structures foster alienation rather than civic camaraderie, as residents frequently report finding the monolithic surfaces depersonalizing.</p><p>Which choice best describes the overall structure of the text?</p>",
    "options": [
      "It outlines the foundational principles and optimistic goals of an artistic movement, then introduces empirical counterevidence that questions its success.",
      "It critiques the aesthetic shortcomings of modern architecture, proposes an alternative philosophy, and presents survey data validating that alternative.",
      "It compares two opposing architectural traditions, details historical arguments for both, and reconciles their differences through sociologic analysis.",
      "It presents an empirical study of urban spaces, identifies methodological flaws in that study, and calls for a complete return to ornamental architecture."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The passage first describes modernism's foundational principle ('form follows function') and its democratic aspirations ('eradicating class-signifying architectural motifs'). Then, starting with 'Yet post-occupancy sociologists...', it presents empirical observations showing that these structures often foster alienation and depersonalization, thereby challenging the movement's success. Choice B is incorrect because no alternative philosophy is proposed. Choice C is incorrect because it does not compare two traditions or reconcile them. Choice D is incorrect because it does not critique the sociologists' study methodology."
  },
  {
    "id": 7,
    "code": "H8-RW7",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 7,
    "isFillIn": false,
    "topic": "Craft & Structure — Text Structure and Purpose",
    "difficulty": "Hard",
    "text": "<p>In a 2024 study, marine ecologist Elena Rostova and colleagues evaluated nitrogen fixation rates in benthic microbial mats located in hypersaline coastal lagoons. Standard geochemical models predicted that elevated salinity would suppress microbial nitrogenase enzymes, leading to diminished nutrient output. Rostova's team, however, identified a novel strain of cyanobacteria possessing specialized protective polysaccharide sheaths that maintain enzyme structural integrity even under extreme osmotic pressure, allowing nitrogen fixation to proceed at rates comparable to those observed in brackish habitats.</p><p>Which choice best states the primary purpose of the text?</p>",
    "options": [
      "To describe an empirical discovery that challenges a prevailing assumption about microbial biochemical activity in harsh environments.",
      "To dispute the accuracy of standard laboratory tools used to measure nitrogenase activity in marine cyanobacteria.",
      "To argue that hypersaline lagoons are more ecologically productive than brackish aquatic habitats.",
      "To propose that polysaccharide sheaths can be synthetically replicated to enhance agricultural soil fertility."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The text notes the standard model's assumption ('elevated salinity would suppress microbial nitrogenase enzymes') and explains how Rostova's team discovered a cyanobacterial strain that maintains high nitrogen fixation via polysaccharide sheaths, thereby challenging that prevailing assumption. Choice B is incorrect because the passage does not criticize measurement tools. Choice C is incorrect because it claims nitrogen fixation rates were comparable, not that hypersaline lagoons are more productive. Choice D is incorrect because synthetic agricultural replication is never mentioned."
  },
  {
    "id": 8,
    "code": "H8-RW8",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 8,
    "isFillIn": false,
    "topic": "Craft & Structure — Cross-Text Connections",
    "difficulty": "Hard",
    "text": "<p>Text 1\nEconomic historian Joel Mokyr contends that Britain’s leadership during the First Industrial Revolution was driven primarily by an 'industrial enlightenment'—a widespread cultural diffusion of useful scientific knowledge and practical mechanical literacy fostered by informal public lectures, mechanics' institutes, and artisanal networks.</p><p>Text 2\nEconomist Robert Allen argues that focusing on intellectual culture overstates its causal primacy. Allen demonstrates that throughout the eighteenth century, British wages were uniquely high relative to the cost of capital and energy (coal). This specific factor-price configuration created an acute economic incentive that existed nowhere else in Europe: mechanization was uniquely profitable in Britain, regardless of whether British artisans possessed superior philosophical understanding.</p><p>Based on the texts, how would Allen (Text 2) most likely respond to Mokyr's claim in Text 1?</p>",
    "options": [
      "By conceding that intellectual culture was the decisive factor in countries where labor costs were substantially lower than in Britain.",
      "By asserting that scientific lectures and mechanical institutes were directly funded and organized by coal mine proprietors seeking cheaper machinery.",
      "By maintaining that technological innovation occurred in Britain because the country's economic incentives made capital investment advantageous, rather than because of cultural attitudes toward science.",
      "By demonstrating that British artisans actually possessed lower rates of formal mechanical literacy than their counterparts in continental Europe."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Text 1 attributes Britain's industrialization to cultural and scientific diffusion ('industrial enlightenment'). In Text 2, Allen directly counters that intellectual culture is overstated, providing evidence that high wages relative to cheap energy made mechanization uniquely profitable in Britain ('economic incentive... mechanization was uniquely profitable'). Thus, Allen would argue that favorable economic incentives, rather than cultural enthusiasm for science, drove the innovation. Choice A is incorrect because Allen does not concede Mokyr's point for low-wage regions. Choice B is incorrect because Allen does not discuss who funded the institutes. Choice D is incorrect because Allen does not claim British artisans were less literate than continental artisans."
  },
  {
    "id": 9,
    "code": "H8-RW9",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 9,
    "isFillIn": false,
    "topic": "Craft & Structure — Cross-Text Connections",
    "difficulty": "Hard",
    "text": "<p>Text 1\nMany conservation biologists assert that creating uninterrupted ecological corridors between fragmented forest preserves is universally beneficial. Corridors facilitate gene flow among isolated populations of large carnivores, mitigating inbreeding depression and bolstering species resilience against catastrophic local disruptions.</p><p>Text 2\nEcologist Daniel Simberloff and others caution that ecological corridors can also function as efficient conduits for negative ecological phenomena. Corridors can accelerate the transmission of virulent wildlife pathogens, facilitate the rapid expansion of invasive plant species, and expose vulnerable migrating prey animals to edge predators that routinely hunt along corridor perimeters.</p><p>Which choice best characterizes the relationship between the two texts?</p>",
    "options": [
      "Text 2 identifies significant ecological risks associated with an intervention that Text 1 characterizes in purely favorable terms.",
      "Text 2 presents mathematical simulation data that refute the empirical genetic claims established in Text 1.",
      "Text 2 proposes an alternative engineering design to eliminate the predatory risks highlighted in Text 1.",
      "Text 2 endorses the conservation priorities of Text 1 while expanding their application to marine protected zones."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Text 1 describes wildlife corridors as 'universally beneficial' for gene flow and resilience. Text 2 introduces major hazards and unintended consequences (pathogen transmission, invasive species spread, edge predation), thereby illustrating ecological risks of the very intervention Text 1 depicts favorably. Choice B is incorrect because Text 2 presents qualitative concerns, not mathematical simulations refuting genetic claims. Choice C is incorrect because Text 2 does not offer an alternative engineering design. Choice D is incorrect because marine protected zones are never discussed."
  },
  {
    "id": 10,
    "code": "H8-RW10",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 10,
    "isFillIn": false,
    "topic": "Information & Ideas — Central Ideas and Details",
    "difficulty": "Hard",
    "text": "<p>In the study of Late Bronze Age Eastern Mediterranean societies, historians frequently grapple with the 'Bronze Age Collapse' (circa 1200 BCE), during which major palace-centered civilizations—including the Mycenaeans of Greece and the Hittites of Anatolia—abruptly disintegrated. Early 20th-century scholars attributed this simultaneous downfall to a single cataclysmic shock, typically invasions by maritime raiders known as the 'Sea Peoples.' Recent archaeological evidence, however, reveals a complex matrix of compounding systemic vulnerabilities: paleoclimatological data indicate widespread, multi-decade megadroughts that precipitated agrarian shortfalls, while sediment core analyses demonstrate soil exhaustion. Consequently, contemporary historians increasingly view the Sea Peoples' raids not as the prime catalyst of collapse, but as an opportunistic symptom of systems that were already undergoing acute ecological and administrative disintegration.</p><p>Which choice best summarizes the central idea of the text?</p>",
    "options": [
      "The Bronze Age Collapse was driven primarily by internal palace revolts that left coastal centers undefended against naval raids.",
      "Recent findings suggest that external invasions exacerbated, rather than initiated, the collapse of civilizations already destabilized by compounding ecological and systemic stresses.",
      "Agricultural exhaustion in Anatolia was largely caused by trade embargoes imposed by the Sea Peoples prior to their territorial invasions.",
      "Mycenaean administrators successfully averted climate-induced famines until military invasions permanently severed international trade routes."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The text directly contrasts the older view (invasion by Sea Peoples as the sole cause) with modern archaeological and paleoclimatic data showing megadroughts, crop shortfalls, and soil exhaustion. It concludes that the raids were an opportunistic symptom or exacerbating factor rather than the prime cause. Choice A is incorrect because internal palace revolts are not cited as the primary driver. Choice C is incorrect because trade embargoes are not mentioned. Choice D is incorrect because the passage explicitly states that Mycenaean and Hittite civilizations disintegrated due to these systemic vulnerabilities."
  },
  {
    "id": 11,
    "code": "H8-RW11",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 11,
    "isFillIn": false,
    "topic": "Information & Ideas — Command of Evidence (Textual)",
    "difficulty": "Hard",
    "text": "<p>In an investigation into avian cognitive flexibility, cognitive ethologist Dr. Maya Vance tested whether New Caledonian crows could modify wire tools to retrieve food placed in a narrow glass cylinder. Vance hypothesized that crows do not merely stumble upon solutions through trial and error, but instead formulate an internal mental model of physical causality before executing mechanical tasks.</p><p>Which finding from Vance's experiments, if true, would most directly support her hypothesis?</p>",
    "options": [
      "Crows spent equal amounts of time attempting to insert straight wires into the cylinder as they spent bending the wire tips into functional hooks.",
      "When presented with pliable straight wires, the crows consistently bent the distal end into a functional hook on their very first attempt before ever making contact with the cylinder.",
      "Crows that were given pre-bent plastic hooks successfully retrieved the food reward significantly faster than crows provided with straight wire.",
      "Crows demonstrated a marked preference for brightly colored wire segments over unpainted galvanized steel segments regardless of malleability."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. If the crows spontaneously fashioned the hook on their very first attempt prior to touching the cylinder, this demonstrates foresight and internal causal planning rather than trial-and-error experimentation through repeated failed attempts. Choice A suggests trial and error or random behavior, weakening the hypothesis. Choice C shows that hooks work better than straight wires, which is an obvious mechanical fact that says nothing about whether the crows planned the modification themselves. Choice D relates to color preference, which is irrelevant to cognitive problem solving."
  },
  {
    "id": 12,
    "code": "H8-RW12",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 12,
    "isFillIn": false,
    "topic": "Information & Ideas — Command of Evidence (Quantitative)",
    "difficulty": "Hard",
    "text": "<p>A team of behavioral ecologists studied the foraging efficiency of four distinct honeybee subspecies across varying ambient temperatures. The researchers measured mean caloric intake per foraging hour (in kilojoules) under three controlled temperature conditions: 15°C, 25°C, and 35°C.</p><p>Subspecies Foraging Efficiency Data (kJ/hour):\n• Subspecies W: 15°C = 42 kJ; 25°C = 88 kJ; 35°C = 74 kJ\n• Subspecies X: 15°C = 65 kJ; 25°C = 91 kJ; 35°C = 95 kJ\n• Subspecies Y: 15°C = 28 kJ; 25°C = 82 kJ; 35°C = 51 kJ\n• Subspecies Z: 15°C = 35 kJ; 25°C = 79 kJ; 35°C = 60 kJ</p><p>The researchers claim that while moderate temperatures generally optimize foraging yields across most subspecies, certain lineages display physiological adaptations that allow foraging efficiency to continue increasing even in hot thermal regimes.</p><p>Which choice best uses data from the study to support the researchers' claim?</p>",
    "options": [
      "Subspecies W achieved its highest caloric intake at 25°C, whereas its yield dropped to 74 kJ/hour at 35°C.",
      "At 15°C, Subspecies X exhibited higher caloric intake than any of the other three subspecies.",
      "Unlike Subspecies W, Y, and Z, whose caloric intake declined between 25°C and 35°C, Subspecies X increased its intake from 91 kJ/hour at 25°C to 95 kJ/hour at 35°C.",
      "Subspecies Y recorded the lowest intake at 15°C (28 kJ/hour) and also suffered the steepest proportional drop at 35°C."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The researchers claim two things: (1) moderate temperatures (25°C) optimize yields for most subspecies, but (2) certain lineages continue to increase efficiency in hot regimes (35°C). Choice C directly demonstrates this contrast using the data: Subspecies W, Y, and Z all peaked at 25°C and fell at 35°C, whereas Subspecies X uniquely rose from 91 kJ/hour at 25°C to 95 kJ/hour at 35°C. Choices A, B, and D each state true data points but fail to substantiate the dual claim regarding ongoing efficiency gains in high heat compared to typical drops."
  },
  {
    "id": 13,
    "code": "H8-RW13",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 13,
    "isFillIn": false,
    "topic": "Information & Ideas — Command of Evidence (Textual)",
    "difficulty": "Hard",
    "text": "<p>In literary criticism, the 'Intentional Fallacy' is the principle that an author's stated intentions regarding a text should not be used as the ultimate standard for interpreting that text. Critic W.K. Wimsatt argued that once a work of art is published, it exists independently of its creator's mind, and its meaning must be derived exclusively from the internal evidence of the text itself.</p><p>Which quotation from an analysis of Mary Shelley's Frankenstein would most directly adhere to Wimsatt's interpretive principle?</p>",
    "options": [
      "'Shelley recorded in her personal journals from the summer of 1816 that her primary objective was to evoke a visceral terror distinct from traditional Gothic romance.'",
      "'Percy Bysshe Shelley's preface to the 1818 edition explicitly instructs the reader to interpret Victor's obsession as an allegory for industrial hubris.'",
      "'The structural repetition of frame narratives—moving from Walton's letters to Victor's confessions and finally to the Creature's monologue—creates an inescapable acoustic resonance of isolation that operates independently of Shelley's personal musings.'",
      "'A letter written by Shelley to her publisher reveals that she altered the dialogue in Chapter 10 specifically to appease conservative reviewers.'"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Wimsatt's principle demands that meaning be drawn exclusively from internal textual evidence (narrative structure, syntax, imagery) without relying on external authorial statements or intentions. Choice C focuses entirely on internal narrative structure ('structural repetition of frame narratives') and explicitly states that this effect operates 'independently of Shelley's personal musings.' Choices A, B, and D all rely on authorial journals, external prefaces, and private letters, violating Wimsatt's anti-intentionalist principle."
  },
  {
    "id": 14,
    "code": "H8-RW14",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 14,
    "isFillIn": false,
    "topic": "Information & Ideas — Inferences",
    "difficulty": "Hard",
    "text": "<p>Paleobiologists analyzing tooth enamel stable oxygen isotope ratios ($^{18}\\text{O}/^{16}\\text{O}$) in fossilized mammals can reconstruct prehistoric hydrology because animals incorporate local surface water into their skeletal tissues. In arid regions, evaporation preferentially removes lighter $^{16}\\text{O}$ isotopes into the atmosphere, causing surface water and consequently mammal tissue to become enriched in heavier $^{18}\\text{O}$. When researchers examined enamel samples from late Miocene equids across the Great Plains, they discovered a marked, abrupt increase in $^{18}\\text{O}$ concentrations coinciding with the expansion of C4 grassland ecosystems. Because C4 grasses are uniquely adapted to withstand seasonal drought and high temperatures, this isotopic shift suggests that _______</p>",
    "options": [
      "equids actively altered their migratory routes to seek out higher-elevation glacial runoff that had lower evaporation rates.",
      "the expansion of C4 grasslands was driven primarily by sudden drops in continental temperatures that preserved ground moisture.",
      "equids in the late Miocene experienced a dramatic intensification of regional aridification and evaporative water stress.",
      "soil microbes selectively decomposed C4 vegetation, releasing high volumes of $^{18}\\text{O}$ directly into the regional groundwater."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The text sets up two facts: (1) higher $^{18}\\text{O}/^{16}\\text{O}$ ratios in mammal enamel reflect higher evaporation and arid conditions, and (2) late Miocene equids experienced an abrupt increase in $^{18}\\text{O}$ concurrent with the spread of drought-adapted C4 grasses. Combining these premises logically leads to the conclusion that equids experienced an intensification of regional aridification and evaporative water stress. Choice A is contradicted because seeking low-evaporation glacial runoff would decrease $^{18}\\text{O}$ ratios. Choice B contradicts the premise that C4 grasses thrive in drought and heat. Choice D introduces an unsupported and physically implausible biological mechanism."
  },
  {
    "id": 15,
    "code": "H8-RW15",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 15,
    "isFillIn": false,
    "topic": "Information & Ideas — Inferences",
    "difficulty": "Hard",
    "text": "<p>In eukaryotic cells, telomeres protect chromosome ends from being recognized as double-stranded DNA breaks. Telomerase, an enzyme that synthesizes telomeric repeats, is active in embryonic stem cells but largely suppressed in differentiated adult somatic tissues, causing telomeres to progressively shorten with each mitotic cycle. Oncologists note that over 85% of human malignant tumors exhibit reactivated telomerase expression. If telomerase activity were artificially inhibited in rapidly proliferating cancer cells, one logical consequence would be that _______</p>",
    "options": [
      "cancer cells would differentiate into healthy adult somatic cells without experiencing mitotic division.",
      "cancer cell telomeres would shorten with successive cell divisions, eventually triggering replicative senescence or apoptosis.",
      "cancer cells would dramatically accelerate their rate of DNA replication to compensate for enzymatic inhibition.",
      "stem cells in other tissues would immediately lose their ability to synthesize nuclear ribosomal RNA."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage establishes that without active telomerase, telomeres progressively shorten with each division, leading to normal limits on cell lifespan. Tumors evade this by reactivating telomerase. If telomerase is artificially inhibited in cancer cells, their telomeres would resume shortening with each division, ultimately reaching the critical threshold where cells can no longer divide (replicative senescence or programmed cell death/apoptosis). Choice A is incorrect because inhibiting telomerase does not turn cancer cells into healthy cells. Choice C is incorrect because cells cannot accelerate replication without telomeric maintenance. Choice D is irrelevant and unsupported."
  },
  {
    "id": 16,
    "code": "H8-RW16",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 16,
    "isFillIn": false,
    "topic": "Information & Ideas — Inferences",
    "difficulty": "Hard",
    "text": "<p>Cognitive psychologists investigating 'framing effects' in financial decision-making found that participants presented with a lottery gamble described as offering an '80% chance of retaining capital' chose to participate significantly more often than participants offered an objectively identical gamble framed as entailing a '20% risk of losing capital.' Follow-up functional MRI scans demonstrated that the loss-framed scenario elicited heightened activation in the amygdala, a brain structure implicated in emotional threat processing. This neural response implies that the disparity in participation rates _______</p>",
    "options": [
      "is caused by mathematical miscalculations regarding the underlying probability distributions of risk.",
      "stems from an automatic, emotionally mediated aversion to perceived threats rather than purely rational utility optimization.",
      "can be entirely eliminated by increasing the financial stakes of the experimental gamble.",
      "reflects a learned cultural bias that is absent in populations unaccustomed to modern banking institutions."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The experiment shows that identical objective odds yield different decisions when framed as losses, and fMRI scans confirm this framing activates the amygdala (emotional threat processing). Thus, the difference in choices is driven by an automatic emotional aversion to threat/loss rather than rational calculation of utility. Choice A is incorrect because the two scenarios are mathematically identical and the fMRI implicates emotional, not computational, regions. Choice C is unsupported because stakes were not varied. Choice D introduces an unfounded cross-cultural assumption."
  },
  {
    "id": 17,
    "code": "H8-RW17",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 17,
    "isFillIn": false,
    "topic": "Information & Ideas — Inferences",
    "difficulty": "Hard",
    "text": "<p>Superconductors expel interior magnetic fields when cooled below a critical transition temperature ($T_c$), a phenomenon known as the Meissner effect. Conventional superconductors, such as lead and niobium, are accurately described by Bardeen-Cooper-Schrieffer (BCS) theory, which posits that electrons form paired states ('Cooper pairs') mediated by lattice vibrations (phonons). However, copper-oxide cuprate superconductors exhibit transition temperatures exceeding 130 K, well above the theoretical maximum temperature at which phonon-mediated coupling can withstand thermal disruption. Consequently, physicists conclude that _______</p>",
    "options": [
      "cuprate materials must possess an alternative, non-phonon pairing mechanism that binds electrons at elevated temperatures.",
      "cuprate materials do not actually exhibit the Meissner effect when subjected to external magnetic fields.",
      "conventional metals like lead will become high-temperature superconductors if subjected to higher lattice frequencies.",
      "the laws of thermodynamics cease to govern electron behavior at temperatures below 130 K."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The text states that cuprates superconduct at temperatures (>130 K) where the standard phonon-mediated mechanism cannot survive thermal disruption. Since cuprates nonetheless superconduct, their electron pairing must be mediated by some mechanism other than lattice phonons. Choice B is incorrect because cuprates are explicitly identified as superconductors (which exhibit the Meissner effect). Choice C is unsupported speculation. Choice D is an extreme, scientifically unwarranted claim."
  },
  {
    "id": 18,
    "code": "H8-RW18",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 18,
    "isFillIn": false,
    "topic": "Standard English Conventions — Boundaries",
    "difficulty": "Hard",
    "text": "<p>During the excavation of the Bronze Age settlement at Akrotiri on the volcanic island of Thera, archaeologists uncovered complex multi-story domestic dwellings with elaborate interior wall _______ stunning maritime frescoes depict fleet processions, foreign trading ports, and indigenous marine fauna in vibrant mineral pigments.</p>",
    "options": [
      "paintings, these",
      "paintings; where",
      "paintings; these",
      "paintings, while"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The sentence consists of two independent clauses: 'archaeologists uncovered complex multi-story domestic dwellings with elaborate interior wall paintings' and 'these stunning maritime frescoes depict fleet processions...' Choice C properly separates two independent clauses using a semicolon followed by the subject pronoun 'these.' Choice A creates a comma splice. Choice B creates a sentence fragment because 'where' turns the second clause into a subordinate clause lacking an independent predicate. Choice D makes the second clause an incomplete subordinate clause or creates awkward subordination."
  },
  {
    "id": 19,
    "code": "H8-RW19",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 19,
    "isFillIn": false,
    "topic": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "Hard",
    "text": "<p>Neither the lead climatologist, who had spent decades cataloging retreating glaciers across the Patagonian ice field, nor her junior field _______ surprised when the latest satellite telemetry revealed an accelerated rate of basal ice melt.</p>",
    "options": [
      "assistants was",
      "assistants were",
      "assistant were",
      "assistants being"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In a correlative conjunction construction using 'neither... nor...', the verb agrees in number with the closer subject. The closer subject is 'her junior field assistants' (plural noun). Therefore, the verb must be plural: 'were.' Choice A pairs plural 'assistants' with singular 'was.' Choice C has singular 'assistant' with plural 'were.' Choice D lacks a finite verb, creating a fragment."
  },
  {
    "id": 20,
    "code": "H8-RW20",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 20,
    "isFillIn": false,
    "topic": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "Hard",
    "text": "<p>Having spent years cataloging the obscure dialectical variations of archaic provincial French, _______</p>",
    "options": [
      "the newly discovered seventeenth-century notary manuscripts were easily deciphered by Dr. Laurent.",
      "Dr. Laurent was able to easily decipher the newly discovered seventeenth-century notary manuscripts.",
      "it was easy for the seventeenth-century notary manuscripts to be deciphered by Dr. Laurent.",
      "deciphering the seventeenth-century notary manuscripts posed little difficulty for Dr. Laurent."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The introductory participial phrase 'Having spent years cataloging the obscure dialectical variations...' describes a person who did the cataloging. The subject following the comma must therefore be 'Dr. Laurent.' In Choices A, C, and D, the modifying phrase incorrectly modifies 'the manuscripts,' 'it,' or 'deciphering,' creating a classic dangling modifier error."
  },
  {
    "id": 21,
    "code": "H8-RW21",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 21,
    "isFillIn": false,
    "topic": "Standard English Conventions — Boundaries",
    "difficulty": "Hard",
    "text": "<p>The restoration of Venice's historic stone foundations faces an intractable engineering _______ every high-tide surge injects corrosive saltwater into the porous bricks, yet constructing rigid impermeable barriers risks trapping toxic urban sewage within the lagoon.</p>",
    "options": [
      "dilemma, which",
      "dilemma:",
      "dilemma, every",
      "dilemma"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. A colon is used after an independent clause to introduce an explanation, elaboration, or specification of what was just mentioned ('an intractable engineering dilemma'). The following clause ('every high-tide surge injects...') directly defines and details that dilemma. Choice A is incorrect because 'which' turns the clause into an ungrammatical relative clause (a surge does not 'inject' the dilemma). Choice C creates a comma splice, joining two independent clauses with only a comma. Choice D creates a run-on sentence with no punctuation."
  },
  {
    "id": 22,
    "code": "H8-RW22",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 22,
    "isFillIn": false,
    "topic": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "Hard",
    "text": "<p>The committee commended the architect not only for her innovative structural use of recycled mass timber _______ for her uncompromising commitment to carbon-neutral construction standards.</p>",
    "options": [
      "and also",
      "but also",
      "as well as",
      "in addition"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The standard correlative conjunction pair is 'not only... but also...'. When 'not only' is used, it must be paired with 'but also' to maintain parallel idiom. Choices A, C, and D violate this standard idiomatic structure."
  },
  {
    "id": 23,
    "code": "H8-RW23",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 23,
    "isFillIn": false,
    "topic": "Standard English Conventions — Boundaries",
    "difficulty": "Hard",
    "text": "<p>Renowned biochemist Jennifer Doudna—whose pioneering research on CRISPR-Cas9 bacterial immune pathways revolutionized genetic _______ shared the 2020 Nobel Prize in Chemistry with colleague Emmanuelle Charpentier.</p>",
    "options": [
      "engineering—",
      "engineering,",
      "engineering;",
      "engineering"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The sentence introduces a non-restrictive parenthetical clause beginning with an em-dash ('—whose pioneering research...'). Parenthetical elements set off by an opening dash must be closed by a matching closing dash before the main verb 'shared.' Choice B incorrectly pairs a dash with a comma. Choice C incorrectly uses a semicolon. Choice D omits the required closing punctuation entirely."
  },
  {
    "id": 24,
    "code": "H8-RW24",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 24,
    "isFillIn": false,
    "topic": "Expression of Ideas — Transitions",
    "difficulty": "Hard",
    "text": "<p>Nineteenth-century astronomer Percival Lowell claimed to observe an elaborate network of linear 'canals' on the Martian surface, which he posited were irrigation works constructed by an advanced civilization. _______ modern space probes equipped with high-resolution multispectral cameras have revealed that these supposed canals were merely optical illusions caused by low-contrast crater chains and the human brain’s tendency to impose order on random topographic variations.</p>",
    "options": [
      "Furthermore,",
      "Conversely,",
      "Similarly,",
      "Accordingly,"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The first sentence describes Lowell's sensational claim of Martian canals built by an alien civilization. The second sentence presents modern scientific evidence completely contradicting that claim, explaining that they were optical illusions. 'Conversely' signals a contrast between Lowell's claim and modern reality. Choice A ('Furthermore') adds similar supporting information. Choice C ('Similarly') signals a comparison. Choice D ('Accordingly') signals a causal result."
  },
  {
    "id": 25,
    "code": "H8-RW25",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 25,
    "isFillIn": false,
    "topic": "Expression of Ideas — Transitions",
    "difficulty": "Hard",
    "text": "<p>Deep-sea hydrothermal vents emit superheated water rich in hydrogen sulfide and methane, creating an environment utterly devoid of solar radiation. _______ organisms inhabiting these abyssal ecosystems cannot rely on photosynthetic primary producers; instead, they depend on chemotrophic bacteria that oxidize inorganic sulfur compounds to synthesize organic carbohydrates.</p>",
    "options": [
      "Consequently,",
      "Nevertheless,",
      "In contrast,",
      "For example,"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The first sentence establishes that the environment lacks solar radiation. The second sentence states the direct result of this absence: organisms cannot rely on photosynthesis. 'Consequently' properly indicates that the second statement is an effect or logical outcome of the first. Choice B ('Nevertheless') signals a concession. Choice C ('In contrast') introduces an opposing entity. Choice D ('For example') introduces an illustrative instance rather than a cause-and-effect conclusion."
  },
  {
    "id": 26,
    "code": "H8-RW26",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 26,
    "isFillIn": false,
    "topic": "Expression of Ideas — Rhetorical Synthesis",
    "difficulty": "Hard",
    "text": "<p>While researching a paper on biomimetic materials, a student took the following notes:\n• Shinkansen bullet trains in Japan initially produced a loud acoustic sonic boom when exiting mountain tunnels at high speeds.\n• The sonic boom was caused by sudden atmospheric pressure differentials in the narrow tunnel.\n• Japanese engineer Eiji Nakatsu noticed that kingfisher birds dive smoothly from air into dense water with virtually no splashing.\n• Kingfishers have long, streamlined, aerodynamically tapered beaks that minimize shockwaves.\n• Nakatsu redesigned the train’s locomotive nose to mimic the geometric profile of a kingfisher’s beak.\n• The redesigned nose eliminated the sonic boom, reduced energy consumption by 15%, and increased travel speeds.</p><p>The student wants to emphasize how an observation of avian biology solved a specific engineering challenge. Which choice best accomplishes this goal?</p>",
    "options": [
      "Japanese bullet trains produced disruptive sonic booms due to atmospheric pressure differences until their travel speeds were increased.",
      "By redesigning the locomotive's front nose to mimic the streamlined geometry of a kingfisher's beak, engineer Eiji Nakatsu eliminated the train's loud tunnel sonic booms.",
      "Kingfisher birds dive cleanly into water without splashing because of their long, tapered beaks, an anatomical trait that has inspired various train designs.",
      "Engineers in Japan observed that high-speed trains consumed substantial electrical energy when passing through mountainous tunnels."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The prompt asks to emphasize how an observation of avian biology (the kingfisher's beak) solved a specific engineering challenge (the train's loud tunnel sonic boom). Choice B connects both elements directly: the biomimetic redesign modeled on the beak and the elimination of the sonic boom. Choice A omits the bird biology entirely. Choice C focuses on the bird rather than the engineering solution. Choice D mentions neither the bird nor the solution."
  },
  {
    "id": 27,
    "code": "H8-RW27",
    "prefix": "H8",
    "section": "rw",
    "module": 1,
    "qnum": 27,
    "isFillIn": false,
    "topic": "Expression of Ideas — Rhetorical Synthesis",
    "difficulty": "Hard",
    "text": "<p>While researching the Antikythera mechanism, a student took the following notes:\n• The Antikythera mechanism is an ancient Greek analog computer recovered from a shipwreck off the coast of Greece in 1901.\n• It dates to approximately the second century BCE.\n• X-ray microfocus computed tomography revealed a system of at least 30 interlocking bronze gearwheels.\n• The gearwork accurately predicted astronomical positions of the Sun, Moon, and five known planets.\n• It also modeled the four-year cycle of the ancient Olympic Games and lunar eclipse trajectories.\n• Before this discovery, historians assumed mechanical gear systems of comparable complexity did not emerge until fourteenth-century medieval Europe.</p><p>The student wants to emphasize the revolutionary historical significance of the mechanism's technical sophistication. Which choice best accomplishes this goal?</p>",
    "options": [
      "Recovered from a Greek shipwreck in 1901, the Antikythera mechanism dates to the second century BCE and tracked the Olympic Games.",
      "Historians have long known that ancient civilizations held a deep fascination with tracking solar and lunar eclipses.",
      "Containing at least 30 intricate bronze gears that accurately predicted planetary motions, the second-century BCE Antikythera mechanism proved that complex mechanical engineering existed over a millennium earlier than previously believed.",
      "Modern researchers used X-ray computed tomography to analyze the bronze gearwheels inside the Antikythera mechanism."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The goal is to highlight the revolutionary historical significance of the mechanism's technical sophistication. Choice C details the sophisticated technology (30 intricate gears predicting planetary motions) and its profound historical impact (pushing back the dawn of complex mechanical engineering by more than a thousand years). Choices A and D present factual details without emphasizing the revolutionary historical significance. Choice B makes a generic claim about ancient fascination with eclipses."
  },
  {
    "id": 28,
    "code": "H8-RW28",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 1,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>In his critique of early utilitarian social policy, political philosopher Thomas Nagel observed that schemes designed to maximize aggregate welfare often ignore individual rights; such programs reduce autonomous moral agents to mere _______ units in an impersonal calculus.</p>",
    "options": [
      "fungible",
      "inviolable",
      "heterogeneous",
      "scrupulous"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The context describes an impersonal system where individuals are treated as interchangeable and replaceable in calculations of total welfare. 'Fungible' means mutually interchangeable or replaceable by another identical item, perfectly fitting how utilitarianism reduces individuals to uniform units. Choice B ('inviolable') means secure from violation or destruction, the opposite of ignoring individual rights. Choice C ('heterogeneous') means diverse in character, whereas the passage emphasizes uniform treatment. Choice D ('scrupulous') means meticulous or principled."
  },
  {
    "id": 29,
    "code": "H8-RW29",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 2,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>While the speculative venture capitalist publicly touted the proprietary cryptocurrency protocol as an immutable technological breakthrough, forensic blockchain audits revealed it to be largely _______: several prominent transactions cited in the original white paper had been fabricated to simulate artificial network liquidity.</p>",
    "options": [
      "unimpeachable",
      "apocryphal",
      "efficacious",
      "lucid"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The sentence contrasts public claims of an 'immutable technological breakthrough' with forensic audits revealing that prominent cited transactions 'had been fabricated.' Thus, the protocol's purported achievements were of doubtful authenticity or fabricated. 'Apocryphal' means of dubious authenticity, spurious, or fictitious. Choice A ('unimpeachable') means entirely trustworthy, the opposite of fabricated. Choice C ('efficacious') means successful in producing a desired result. Choice D ('lucid') means clear or easily understood."
  },
  {
    "id": 30,
    "code": "H8-RW30",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 3,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>Far from presenting a dogmatic, unified manifesto, the post-structuralist anthology embraced internal contradictions; the contributors regarded ideological dissonance not as a methodological flaw to be reconciled, but as a vital catalyst for _______ intellectual complacency.</p>",
    "options": [
      "buttressing",
      "disrupting",
      "sanctifying",
      "codifying"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The text notes that the anthology celebrated 'internal contradictions' and viewed 'ideological dissonance' as a positive 'catalyst.' A catalyst against 'intellectual complacency' would shake up, challenge, or break apart comfortable orthodoxies. 'Disrupting' means disturbing, interrupting, or destabilizing, which fits the passage's celebration of dissonance. Choice A ('buttressing') means strengthening or reinforcing. Choice C ('sanctifying') means making holy or declaring sacred. Choice D ('codifying') means systematizing or establishing into rules."
  },
  {
    "id": 31,
    "code": "H8-RW31",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 4,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>Despite the archival curator’s reputation for rigorous pedantry, her latest monograph on Carolingian illumination scripts was marred by an uncharacteristic _______: key dates of monastic copyists were conflated, and several primary charter citations were omitted entirely.</p>",
    "options": [
      "perspicacity",
      "circumspection",
      "laxity",
      "magnanimity"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The sentence contrasts the curator's usual 'rigorous pedantry' (extreme attention to detail and rules) with an 'uncharacteristic' shortcoming that caused dates to be conflated and citations omitted. This denotes carelessness, looseness, or a lack of strict precision. 'Laxity' means lack of strictness or care, negligence. Choice A ('perspicacity') means keen insight. Choice B ('circumspection') means caution or prudence. Choice D ('magnanimity') means generosity or nobility of spirit."
  },
  {
    "id": 32,
    "code": "H8-RW32",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 5,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>The legal scholar’s treatise on constitutional originalism is notably _______; rather than dismissing progressive jurisprudence with partisan invective, she systematically deconstructs its philosophical underpinnings with incisive textual analysis and dispassionate logic.</p>",
    "options": [
      "trenchant",
      "vacuous",
      "derivative",
      "meretricious"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The sentence describes the scholar's analysis as avoiding partisan bluster in favor of 'incisive textual analysis and dispassionate logic.' 'Trenchant' means vigorous, incisive, and keenly effective in expression or style, perfectly fitting an argument characterized by sharp, penetrating rigor. Choice B ('vacuous') means empty or lacking intelligence. Choice C ('derivative') means unoriginal. Choice D ('meretricious') means superficially attractive but lacking real value."
  },
  {
    "id": 33,
    "code": "H8-RW33",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 6,
    "isFillIn": false,
    "topic": "Craft & Structure — Text Structure and Purpose",
    "difficulty": "Super Hard",
    "text": "<p>Many theoretical physicists posited that dark matter particles must be Weakly Interacting Massive Particles (WIMPs), non-baryonic entities that interact solely via gravity and the weak nuclear force. For two decades, experimentalists constructed ultra-sensitive underground liquid xenon detectors to record hypothetical WIMP-nucleus elastic scatterings. However, successively lower detection thresholds at facilities like LUX-ZEPLIN have excluded virtually the entire favored parameter space for WIMPs without yielding a single verifiable signal. In response, astrophysicists are increasingly pivoting their theoretical models toward ultra-light scalar bosons, such as axions, which operate at mass scales twenty orders of magnitude below that of WIMPs.</p><p>Which choice best describes the primary function of the third sentence?</p>",
    "options": [
      "It highlights an experimental null result that has compelled researchers to reevaluate a long-standing physical paradigm.",
      "It critiques the engineering reliability of liquid xenon detection instruments used in modern astrophysics.",
      "It proves that dark matter cannot be composed of non-baryonic elementary particles.",
      "It presents conclusive empirical verification of axion existence in terrestrial laboratories."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The third sentence explains that despite ultra-sensitive detectors, decades of tests have excluded the favored parameter space without detecting WIMPs ('excluded virtually the entire favored parameter space... without yielding a single verifiable signal'). The subsequent sentence shows how this null result forced researchers to pivot toward alternative candidates (axions). Thus, sentence three highlights an experimental null result that prompted a reevaluation of the dominant WIMP paradigm. Choice B is incorrect because it does not critique engineering reliability, only the absence of physical signal. Choice C is incorrect because null results for WIMPs do not prove dark matter cannot be non-baryonic (axions are also non-baryonic). Choice D is incorrect because axions have not been conclusively verified."
  },
  {
    "id": 34,
    "code": "H8-RW34",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 7,
    "isFillIn": false,
    "topic": "Craft & Structure — Cross-Text Connections",
    "difficulty": "Super Hard",
    "text": "<p>Text 1\nEcological niche modeling often relies on the competitive exclusion principle, which holds that two sympatric species competing for identical limiting resources cannot stably coexist. According to this model, when two species occupy the same trophic level in a closed habitat, one will inevitably outcompete the other, driving the less efficient competitor to local extinction or ecological divergence.</p><p>Text 2\nG. Evelyn Hutchinson famously proposed the 'paradox of the plankton' after observing that hundreds of phytoplankton species stably coexist in uniform aquatic environments where all compete for the same dissolved mineral nutrients and solar irradiance. Hutchinson explained that natural ecosystems are rarely in steady-state equilibrium; seasonal turbulence, unpredictable predation, and chaotic micro-current fluctuations prevent competitive exclusion from ever reaching its theoretical conclusion.</p><p>Based on the texts, how would Hutchinson (Text 2) most likely interpret a laboratory study that observed one phytoplankton species rapidly displacing another in a static, unperturbed beaker?</p>",
    "options": [
      "As proof that the competitive exclusion principle is invalid even under artificial conditions.",
      "As an expected outcome of an artificial setting that eliminates the environmental perturbations that maintain coexistence in nature.",
      "As evidence that phytoplankton species do not actually compete for identical mineral nutrients in marine environments.",
      "As an indication that micro-current fluctuations operate identically in laboratory beakers and open ocean water."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In Text 2, Hutchinson argues that natural coexistence persists because environmental fluctuations (turbulence, seasonal shifts) interrupt competition before exclusion finishes. If a laboratory beaker is static and unperturbed, those natural disruptions are absent, allowing competitive exclusion (described in Text 1) to proceed to its theoretical conclusion. Hutchinson would therefore view rapid displacement in a static beaker as the natural, expected outcome of removing environmental perturbations. Choice A is incorrect because Hutchinson does not deny that competitive exclusion occurs in static systems. Choice C is incorrect because both texts affirm that phytoplankton compete for identical nutrients. Choice D contradicts the premise that the beaker is static."
  },
  {
    "id": 35,
    "code": "H8-RW35",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 8,
    "isFillIn": false,
    "topic": "Craft & Structure — Cross-Text Connections",
    "difficulty": "Super Hard",
    "text": "<p>Text 1\nSociologist Pierre Bourdieu theorized that 'cultural capital'—the familiarity with legitimate cultural codes, artistic tastes, and linguistic mannerisms transmitted within privileged families—operates as an invisible mechanism of social reproduction. Educational institutions, while presenting themselves as meritocratic, tacitly reward this inherited cultural familiarity, thereby transforming social privilege into apparent academic excellence.</p><p>Text 2\nSociologist Paul DiMaggio argued that Bourdieu’s cultural capital model overstates social reproduction. DiMaggio showed that cultural capital operates through 'cultural mobility': disadvantaged students who acquire cultural literacy (such as knowledge of fine arts and literature) through public schooling or personal initiative experience the highest marginal returns in academic performance and upward mobility, using culture as an instrument of advancement rather than merely an instrument of exclusion.</p><p>Which choice best summarizes the core disagreement between Bourdieu (Text 1) and DiMaggio (Text 2)?</p>",
    "options": [
      "Whether artistic familiarity and cultural literacy can be accurately measured through standardized sociological surveys.",
      "Whether cultural capital functions primarily as a mechanism for reproducing class advantages or as an accessible pathway for social mobility.",
      "Whether educational institutions are intentionally biased against students from working-class backgrounds.",
      "Whether students from privileged backgrounds possess higher innate intellectual abilities than disadvantaged peers."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Text 1 presents Bourdieu's view that cultural capital perpetuates inequality by converting inherited privilege into academic credentials ('invisible mechanism of social reproduction'). Text 2 presents DiMaggio's counter-view that cultural capital can be acquired by disadvantaged students and serves as an instrument of upward mobility ('cultural mobility'). Thus, their core disagreement centers on whether cultural capital functions primarily to reproduce class boundaries or to facilitate social mobility. Choice A is incorrect because neither discusses survey methodology. Choice C is incorrect because Bourdieu says the bias is tacit, not necessarily intentional. Choice D is incorrect because neither author attributes differences to innate ability."
  },
  {
    "id": 36,
    "code": "H8-RW36",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 9,
    "isFillIn": false,
    "topic": "Information & Ideas — Central Ideas and Details",
    "difficulty": "Super Hard",
    "text": "<p>In evolutionary immunology, the 'hygiene hypothesis' posits that the dramatic rise in autoimmune and allergic disorders in industrialized societies is an unintended consequence of sanitized living conditions. Specifically, the eradication of chronic childhood infections and parasitic helminth exposures has deprived the developing mammalian immune system of critical regulatory stimuli. Without regular calibration by benign or symbiotic microbes with which mammals co-evolved over millennia, regulatory T-cells fail to mature properly, resulting in a hyper-reactive immune response to harmless environmental antigens, such as pollen or dietary proteins.</p><p>Which choice best states a detail mentioned in the text regarding regulatory T-cells?</p>",
    "options": [
      "They completely cease functioning if a mammal is exposed to parasitic helminth infections.",
      "Their proper maturation depends on developmental calibration by microbial exposures that have become less prevalent in industrialized societies.",
      "They are genetically absent in individuals who develop severe allergic responses to dietary proteins.",
      "They stimulate hyper-reactive antibody production when exposed to benign environmental antigens."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The text explicitly states: 'Without regular calibration by benign or symbiotic microbes with which mammals co-evolved over millennia, regulatory T-cells fail to mature properly...' and attributes this lack of calibration to sanitized conditions in industrialized nations. Choice A is incorrect because helminths provide calibration, not cessation. Choice C is incorrect because regulatory T-cells are not stated to be genetically absent. Choice D is incorrect because regulatory T-cells regulate and dampen the immune response; their failure to mature results in hyper-reactivity."
  },
  {
    "id": 37,
    "code": "H8-RW37",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 10,
    "isFillIn": false,
    "topic": "Information & Ideas — Command of Evidence (Textual)",
    "difficulty": "Super Hard",
    "text": "<p>In behavioral linguistics, the Sapir-Whorf hypothesis proposes that the grammatical categories and lexicon of a speaker's native language shape their cognitive perception of the external world. Researcher Linnea Sundqvist tested this hypothesis by examining how native speakers of Swedish and Spanish perceive event duration. Unlike Swedish, which predominantly relies on physical spatial distance metaphors to describe time (e.g., 'a long time' or 'a short wait'), Spanish frequently uses physical volume and fullness metaphors (e.g., 'much time' or 'a full hour'). Sundqvist hypothesized that when watching digital animations, native Swedish speakers’ time estimation would be selectively biased by length cues, whereas native Spanish speakers’ time estimation would be selectively biased by volume cues.</p><p>Which finding from Sundqvist's experiment, if true, would most strongly corroborate her hypothesis?</p>",
    "options": [
      "Both Spanish and Swedish speakers estimated elapsed time more accurately when observing stationary geometric cubes than when observing moving horizontal lines.",
      "Swedish speakers judged an event to have lasted longer when viewing a line growing in horizontal length, regardless of line thickness, while Spanish speakers judged an event to have lasted longer when viewing a container filling with liquid, regardless of container height.",
      "Spanish speakers completed numerical duration estimation tasks significantly faster than Swedish speakers across all visual conditions.",
      "When visual animations were presented without audio cues, both Swedish and Spanish speakers underestimated event duration by an average of 15%."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Sundqvist's hypothesis predicts that linguistic metaphors directly bias non-linguistic duration estimation: distance/length metaphors in Swedish will bias Swedish speakers based on line length, while volume/fullness metaphors in Spanish will bias Spanish speakers based on container fullness/volume. Choice B presents exact empirical confirmation of this specific divergence. Choice A shows no difference between the groups. Choice C measures task speed, not perceptual bias. Choice D shows an identical bias across both groups."
  },
  {
    "id": 38,
    "code": "H8-RW38",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 11,
    "isFillIn": false,
    "topic": "Information & Ideas — Command of Evidence (Quantitative)",
    "difficulty": "Super Hard",
    "text": "<p>An atmospheric chemistry team deployed LIDAR and airborne mass spectrometers to measure tropospheric methane ($CH_4$) emissions across four distinct land-use sectors over two seasonal periods: Wet Season and Dry Season.</p><p>Methane Flux Measurements (Metric Tons / $km^2$ / Day):\n• Sector 1 (Paddy Rice Agriculture): Wet Season = 14.8; Dry Season = 3.2\n• Sector 2 (Managed Cattle Pasture): Wet Season = 9.4; Dry Season = 8.9\n• Sector 3 (Pristine Peatland Bog): Wet Season = 11.2; Dry Season = 2.1\n• Sector 4 (Fugitive Natural Gas Drilling): Wet Season = 18.5; Dry Season = 18.1</p><p>The lead researcher claims that while biogenic anaerobic methanogenesis is highly sensitive to seasonal precipitation fluctuations, anthropogenic fossil fuel infrastructure emissions remain largely invariant across hydrologic regimes.</p><p>Which choice best utilizes the quantitative data to support the researcher's claim?</p>",
    "options": [
      "Sector 4 emitted higher methane fluxes in both seasons than Sector 2.",
      "Sector 1 and Sector 3, which involve anaerobic soil and wetland environments, saw emissions drop by over 78% during the Dry Season, whereas Sector 4 showed a negligible change of less than 3% between Wet and Dry seasons.",
      "Managed cattle pasture in Sector 2 maintained a relatively constant emission flux of approximately 9 metric tons per square kilometer per day.",
      "Paddy rice agriculture in Sector 1 produced the highest single biogenic flux measurement recorded in the study during the Wet Season."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The claim has two parts: (1) biogenic emissions fluctuate dramatically between seasons, and (2) fossil fuel infrastructure emissions remain invariant across seasons. Choice B directly supports both components by calculating the massive drop in biogenic sectors (Sector 1: 14.8 to 3.2, a 78.4% drop; Sector 3: 11.2 to 2.1, an 81.3% drop) and contrasting it with the tiny difference in fossil fuel extraction (Sector 4: 18.5 vs 18.1, a 2.2% change). Choice A only compares absolute amounts between sectors. Choice C only notes pasture stability. Choice D highlights a single data point without evaluating seasonal variation or the contrast with fossil fuels."
  },
  {
    "id": 39,
    "code": "H8-RW39",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 12,
    "isFillIn": false,
    "topic": "Information & Ideas — Command of Evidence (Textual)",
    "difficulty": "Super Hard",
    "text": "<p>In archaeological anthropology, the 'Secondary Products Revolution' model posits that early agrarian communities in Eurasia originally domesticated cattle and sheep solely for 'primary products' (meat and hides) obtained at slaughter. Only centuries later did societies develop technological innovations to exploit living animals continuously for 'secondary products'—namely traction power (plowing), wool fibers, and dairy milk.</p><p>Which finding, if authenticated by zooarchaeologists, would present the strongest challenge to the Secondary Products Revolution model?</p>",
    "options": [
      "Cattle bone assemblages from 6000 BCE exhibiting high rates of osteological articular lesions consistent with heavy pulling and cart traction, dating to the very earliest phases of livestock domestication.",
      "The discovery of spindle whorls and loom weights dating to 3000 BCE in settlements that maintained large domesticated sheep herds.",
      "Pottery shards from 2500 BCE containing lipid residues of adipose fatty acids derived from pig carcasses.",
      "Bronze Age wall reliefs depicting oxen pulling four-wheeled ceremonial chariots in Mesopotamian city-states."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The model asserts that animals were initially used only for primary products (meat/hides after slaughter) and that secondary products (like traction/plowing) emerged only centuries later. Finding severe articular lesions caused by heavy traction on bones from the very earliest phase of domestication (6000 BCE) directly refutes the idea that secondary products were a delayed innovation, proving traction occurred simultaneously with early domestication. Choice B supports the model's timeline of later wool exploitation. Choice C involves primary products (pig adipose fat). Choice D dates to the Bronze Age, long after initial domestication."
  },
  {
    "id": 40,
    "code": "H8-RW40",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 13,
    "isFillIn": false,
    "topic": "Information & Ideas — Inferences",
    "difficulty": "Super Hard",
    "text": "<p>Ecosystem ecologists studying trophic cascades observed that the reintroduction of gray wolves to Yellowstone National Park led to a precipitous decline in elk browsing intensity along riverbanks. Consequently, riparian willow and aspen saplings, which had been stunted by decades of unchecked ungulate herbivory, recovered rapidly. The rejuvenated riverbank vegetation stabilized riverbanks against erosion, deepened water channels, and provided building materials that enabled beaver colonies to expand twelvefold. Because beaver dams create complex wetland networks that attenuate flood pulses and maintain base streamflow during summer droughts, the wolves' predation on elk ultimately _______</p>",
    "options": [
      "diminished the availability of aquatic habitats for native cold-water trout species.",
      "demonstrated that apex carnivores can fundamentally alter abiotic geomorphological and hydrological regimes.",
      "eliminated all seasonal variability in precipitation across the northern Rocky Mountains.",
      "forced surviving elk populations to switch exclusively to a predatory, carnivorous diet."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage traces a multi-step causal chain starting with an apex carnivore (wolves), which alters herbivore behavior (elk), enabling vegetation regrowth (willow/aspen), which in turn alters physical landscape structures (stabilizes riverbanks, deepens channels, builds beaver dams, controls streamflow). Thus, this biological interaction fundamentally transformed abiotic (non-living) geomorphological and hydrological systems. Choice A is contradicted by the creation of stable wetlands. Choice C is absurd because predators cannot eliminate atmospheric weather variability. Choice D is biologically absurd for elk."
  },
  {
    "id": 41,
    "code": "H8-RW41",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 14,
    "isFillIn": false,
    "topic": "Information & Ideas — Inferences",
    "difficulty": "Super Hard",
    "text": "<p>When astronomers study exoplanetary atmospheres using transmission spectroscopy, starlight passing through an exoplanet's atmosphere is absorbed at wavelengths characteristic of specific gaseous molecules. However, the presence of high-altitude clouds composed of microscopic refractory mineral condensates (such as enstatite or silicate dust) can scatter incoming starlight uniformly across all optical wavelengths. When researchers attempted to detect water vapor absorption bands on the hot Jupiter WASP-31b, their spectra were completely featureless and flat. Given the physics of atmospheric scattering, this lack of spectral variation implies that _______</p>",
    "options": [
      "the exoplanet must possess a solid metallic core that prevents any volatile gases from outgassing into its atmosphere.",
      "an opaque, high-altitude haze or mineral cloud deck obscured the molecular absorption signatures in the lower atmosphere.",
      "water molecules in the exoplanet's atmosphere were broken down into hydrogen and oxygen by intense ultraviolet radiation.",
      "the exoplanet was moving away from Earth at a velocity exceeding the speed of light."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The text explicitly links flat, featureless transmission spectra to high-altitude refractory clouds/hazes that scatter light uniformly across wavelengths, concealing deeper molecular absorption lines. Thus, observing a completely flat spectrum on WASP-31b implies the presence of an obscuring high-altitude haze or cloud deck. Choice A is unsupported speculation. Choice C is a possible alternative in theory, but the passage specifically establishes cloud scattering as the mechanism causing flat spectra. Choice D violates special relativity."
  },
  {
    "id": 42,
    "code": "H8-RW42",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 15,
    "isFillIn": false,
    "topic": "Information & Ideas — Inferences",
    "difficulty": "Super Hard",
    "text": "<p>In economics, the Coase Theorem asserts that when property rights are clearly defined and transaction costs are negligible, private parties can bargain to resolve externalities (such as industrial pollution) efficiently, without the need for government regulatory intervention. However, in cases of atmospheric carbon emissions, billions of individuals worldwide are both dispersed polluters and victims of future climate harms. Identifying, negotiating with, and enforcing contracts among billions of actors dispersed globally across generations entails prohibitive expenses. Therefore, applying the Coase Theorem to global climate change indicates that _______</p>",
    "options": [
      "private negotiations will naturally establish the optimal global carbon price without any international legal agreements.",
      "the fundamental precondition of negligible transaction costs fails, making unassisted private bargaining incapable of achieving an efficient environmental outcome.",
      "atmospheric carbon emissions should be legally classified as beneficial economic goods rather than negative externalities.",
      "governments should abolish property rights to eliminate transaction costs among multinational corporations."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The Coase Theorem holds *if* transaction costs are negligible. The passage explains that with global carbon emissions involving billions of global actors across generations, the transaction costs are 'prohibitive' (extremely high). Therefore, because the core precondition is violated, private bargaining cannot solve the problem efficiently on its own. Choice A contradicts this deduction. Choice C is absurd. Choice D is contrary to legal and economic principles."
  },
  {
    "id": 43,
    "code": "H8-RW43",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 16,
    "isFillIn": false,
    "topic": "Information & Ideas — Inferences",
    "difficulty": "Super Hard",
    "text": "<p>Epigeneticists investigating transgenerational inheritance subjected pregnant mice to severe caloric restriction during organogenesis. The offspring ($F_1$ generation) exhibited impaired insulin sensitivity and altered hepatic DNA methylation patterns throughout adulthood, despite receiving an optimal diet after birth. When the researchers bred these $F_1$ mice with unexposed control mice, the second-generation offspring ($F_2$ generation)—which were never directly exposed to nutrient deprivation in utero or as gametes—still demonstrated abnormal glucose homeostasis. This observation provides strong evidence that _______</p>",
    "options": [
      "maternal dietary stress can induce stable, heritable epigenetic alterations that persist across generations without direct embryonic exposure.",
      "caloric restriction permanently mutates the primary nucleotide sequence of the insulin receptor gene.",
      "all metabolic disorders in mammalian populations are caused exclusively by maternal nutritional deficits.",
      "the $F_2$ generation mice possessed higher insulin sensitivity than both their parents and grandparents."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The study demonstrated that altered DNA methylation and metabolic dysfunction persisted into the $F_2$ generation, even though $F_2$ animals never experienced nutrient deprivation directly. Because DNA methylation is an epigenetic mark rather than a genetic mutation, this demonstrates transgenerational epigenetic inheritance. Choice B is incorrect because epigenetic alterations involve DNA methylation, not primary nucleotide sequence mutations. Choice C is an overgeneralized absolute claim ('all metabolic disorders... exclusively'). Choice D contradicts the text, which states $F_2$ mice had abnormal glucose homeostasis."
  },
  {
    "id": 44,
    "code": "H8-RW44",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 17,
    "isFillIn": false,
    "topic": "Standard English Conventions — Boundaries",
    "difficulty": "Super Hard",
    "text": "<p>The discovery of subglacial liquid water beneath Antarctica’s Mercer Ice Stream confounded glaciologists _______ despite freezing surface temperatures and thousands of meters of insulating ice, geothermal heat from the Earth’s mantle and frictional shear combine to melt the ice sheet’s basal underbelly.</p>",
    "options": [
      "glaciologists, because:",
      "glaciologists:",
      "glaciologists; where,",
      "glaciologists"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The first independent clause ends with 'glaciologists.' The subsequent clause ('despite freezing surface temperatures... frictional shear combine to melt...') provides the direct explanation of how and why this phenomenon occurs. A colon correctly introduces this explanatory independent clause. Choice A combines a comma, 'because', and a colon, which is grammatically defective. Choice C uses 'where,' creating an ungrammatical subordinate structure. Choice D results in a run-on sentence."
  },
  {
    "id": 45,
    "code": "H8-RW45",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 18,
    "isFillIn": false,
    "topic": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "Super Hard",
    "text": "<p>Deep beneath the ocean floor in the Mariana Trench _______ bizarre microbial communities that derive metabolic energy not from sunlight or surface runoff, but from serpentinization reactions between seawater and mantle peridotite.</p>",
    "options": [
      "thrives",
      "thrive",
      "has thrived",
      "is thriving"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. This sentence features inverted syntax: the prepositional phrase 'Deep beneath the ocean floor...' begins the sentence, and the grammatical subject follows the verb. The subject is 'bizarre microbial communities' (plural noun). Therefore, the verb must be plural: 'thrive.' Choices A, C, and D are all singular verbs ('thrives', 'has thrived', 'is thriving'), which produce subject-verb disagreement."
  },
  {
    "id": 46,
    "code": "H8-RW46",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 19,
    "isFillIn": false,
    "topic": "Standard English Conventions — Boundaries",
    "difficulty": "Super Hard",
    "text": "<p>Unlike traditional silicon photovoltaic cells, which require energy-intensive high-temperature smelting _______ perovskite solar cells can be synthesized from solution at ambient room temperatures, drastically lowering production emissions.</p>",
    "options": [
      "processes;",
      "processes,",
      "processes",
      "processes:"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The sentence opens with a long dependent introductory phrase ('Unlike traditional silicon photovoltaic cells, which require energy-intensive high-temperature smelting processes'). An introductory modifier must be set off from the main independent clause ('perovskite solar cells can be synthesized...') with a comma. Choices A and D incorrectly place a semicolon or colon after an introductory dependent phrase. Choice C omits the necessary punctuation, running the modifier directly into the subject."
  },
  {
    "id": 47,
    "code": "H8-RW47",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 20,
    "isFillIn": false,
    "topic": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "Super Hard",
    "text": "<p>The manuscript department requires that every conservator handling eighth-century vellum folios _______ nitrile gloves and minimize direct exposure to ambient humidity.</p>",
    "options": [
      "wears",
      "wear",
      "wore",
      "wearing"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The verb 'requires' takes a 'that' clause expressing a demand or mandate, which triggers the subjunctive mood. The subjunctive mood uses the base form of the verb ('wear'), regardless of whether the subject ('every conservator') is singular. Notice also the parallel base form 'minimize' later in the clause ('...wear nitrile gloves and minimize...'). Choice A ('wears') is the indicative singular, which violates the subjunctive rule. Choice C is past tense. Choice D is a participle lacking a finite verb."
  },
  {
    "id": 48,
    "code": "H8-RW48",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 21,
    "isFillIn": false,
    "topic": "Standard English Conventions — Boundaries",
    "difficulty": "Super Hard",
    "text": "<p>Astrophysicist Jocelyn Bell Burnell discovered pulsars in 1967 while analyzing radio telescope chart _______ nevertheless, the 1974 Nobel Prize in Physics for the discovery was awarded to her thesis supervisor Antony Hewish and colleague Martin Ryle.</p>",
    "options": [
      "records,",
      "records;",
      "records",
      "records: where"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The sentence connects two independent clauses ('Astrophysicist Jocelyn Bell Burnell discovered pulsars...' and 'the 1974 Nobel Prize... was awarded to her thesis supervisor...'). When joining two independent clauses with a conjunctive adverb like 'nevertheless,' the first clause must terminate with a semicolon, followed by the conjunctive adverb and a comma. Choice A creates a comma splice. Choice C creates a run-on. Choice D is ungrammatical."
  },
  {
    "id": 49,
    "code": "H8-RW49",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 22,
    "isFillIn": false,
    "topic": "Expression of Ideas — Transitions",
    "difficulty": "Super Hard",
    "text": "<p>Classical economic theory assumes that consumers act as perfectly rational agents who consistently maximize expected utility based on complete information. _______ empirical behavioral experiments demonstrated by Daniel Kahneman and Amos Tversky revealed systematic cognitive heuristics—such as loss aversion and anchoring—that cause individuals to deviate predictably from rational choice models.</p>",
    "options": [
      "Notwithstanding,",
      "In fact,",
      "In practice, however,",
      "Furthermore,"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The first sentence presents the theoretical ideal ('Classical economic theory assumes... perfectly rational agents'). The second sentence introduces empirical real-world evidence showing people deviate systematically from rationality. 'In practice, however,' signals both the shift from theory to real-world observation and the contrast with classical assumptions. Choice A ('Notwithstanding,') is awkward and improperly used as a standalone transitional adverb here. Choice B ('In fact,') suggests an intensification or confirmation of the previous claim. Choice D ('Furthermore,') introduces additional similar support, failing to signal the contrast."
  },
  {
    "id": 50,
    "code": "H8-RW50",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 23,
    "isFillIn": false,
    "topic": "Expression of Ideas — Transitions",
    "difficulty": "Super Hard",
    "text": "<p>When exposed to elevated atmospheric carbon dioxide levels, some C3 agricultural crops exhibit increased photosynthetic rates and rapid biomass accumulation. _______ this accelerated growth often correlates with a marked reduction in the concentration of essential micronutrients, such as zinc and iron, in the edible grains.</p>",
    "options": [
      "Consequently,",
      "Crucially, however,",
      "In other words,",
      "For instance,"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The first sentence notes a beneficial effect of elevated CO2 (increased photosynthetic rates and biomass). The second sentence introduces a serious drawback (decline in vital micronutrients). 'Crucially, however,' effectively highlights this critical negative counterpoint. Choice A ('Consequently,') implies the nutritional decline is a desired or direct natural extension rather than an opposing qualification. Choice C ('In other words,') signals restatement. Choice D ('For instance,') signals an example rather than a contrast."
  },
  {
    "id": 51,
    "code": "H8-RW51",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 24,
    "isFillIn": false,
    "topic": "Expression of Ideas — Rhetorical Synthesis",
    "difficulty": "Super Hard",
    "text": "<p>While researching the James Webb Space Telescope (JWST), a student took the following notes:\n• The JWST was launched in December 2021 and orbits the Sun at the second Lagrange point (L2), approximately 1.5 million kilometers from Earth.\n• Its primary mirror measures 6.5 meters in diameter, compared to Hubble's 2.4-meter mirror.\n• JWST observes predominantly in the infrared spectrum (0.6 to 28 micrometers).\n• Infrared capability allows the telescope to peer through dense interstellar dust clouds that scatter visible light.\n• In 2023, JWST detected atmospheric carbon dioxide on the gas giant exoplanet WASP-39b, marking the first unequivocal detection of $CO_2$ on a planet outside our solar system.\n• The detection was made using JWST’s Near-Infrared Spectrograph (NIRSpec).</p><p>The student wants to highlight a groundbreaking scientific achievement enabled by JWST's specialized instrumentation. Which choice best accomplishes this goal?</p>",
    "options": [
      "Launched in 2021 to the L2 point 1.5 million kilometers from Earth, the JWST features a 6.5-meter primary mirror that is significantly larger than Hubble's.",
      "Using its specialized Near-Infrared Spectrograph, the JWST achieved the first unequivocal detection of atmospheric carbon dioxide on an exoplanet, WASP-39b.",
      "The JWST detects infrared wavelengths between 0.6 and 28 micrometers because interstellar dust clouds scatter visible light.",
      "Exoplanet WASP-39b is a distant gas giant whose atmosphere contains carbon dioxide as well as other volatile gases."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The prompt specifies two criteria: (1) highlight a groundbreaking scientific achievement (first detection of CO2 on an exoplanet) and (2) mention the specialized instrumentation enabling it (Near-Infrared Spectrograph, NIRSpec). Choice B combines both requirements succinctly. Choice A focuses on launch coordinates and mirror size. Choice C explains why infrared is used. Choice D describes WASP-39b without emphasizing JWST's instrumentation or breakthrough."
  },
  {
    "id": 52,
    "code": "H8-RW52",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 25,
    "isFillIn": false,
    "topic": "Expression of Ideas — Rhetorical Synthesis",
    "difficulty": "Super Hard",
    "text": "<p>While researching paleolithic cave art, a student took the following notes:\n• Chauvet Cave in southeastern France contains some of the oldest preserved figurative rock paintings in the world.\n• Radiocarbon dating of charcoal pigments indicates two distinct phases of human activity: 37,000–33,500 years ago and 31,000–28,000 years ago.\n• Unlike later cave art sites that predominantly depict hunted herbivores (bison, horses, stags), Chauvet features predatory megafauna (cave lions, woolly mammoths, cave bears, rhinoceroses).\n• Predatory animals constitute more than 60% of all identifiable animal figures at Chauvet.\n• Art historians hypothesize that the Chauvet painters regarded predatory animals not as quarry, but as spiritual embodiments of primeval potency and respect.</p><p>The student wants to emphasize how Chauvet Cave's artistic subject matter departs from typical prehistoric rock art traditions. Which choice best accomplishes this goal?</p>",
    "options": [
      "Located in southeastern France, Chauvet Cave features two distinct chronological phases of human occupation separated by several millennia.",
      "Radiocarbon dating of charcoal pigment samples proves that figurative rock art was created at Chauvet as early as 37,000 years ago.",
      "While typical prehistoric cave paintings predominantly depict hunted herbivores like bison and stags, Chauvet Cave uniquely features dangerous predatory megafauna—such as cave lions and mammoths—for over 60% of its identifiable figures.",
      "Prehistoric artists at Chauvet Cave may have viewed powerful predators as spiritual embodiments of strength and shamanistic potency."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The goal is to emphasize how Chauvet's subject matter departs from typical prehistoric traditions. Choice C explicitly draws this contrast: while typical sites depict hunted herbivores (bison, stags), Chauvet's paintings are dominated (over 60%) by predatory beasts like cave lions and mammoths. Choices A and B address dating and chronology rather than artistic subject matter. Choice D discusses the spiritual hypothesis without establishing the comparative contrast with typical prehistoric rock art."
  },
  {
    "id": 53,
    "code": "H8-RW53",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 26,
    "isFillIn": false,
    "topic": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "Super Hard",
    "text": "<p>During the late Roman Republic, the tribune Tiberius Gracchus proposed radical agrarian land distribution reforms, _______ the entrenched senatorial aristocracy vehemently opposed as an existential threat to their generational estates.</p>",
    "options": [
      "which",
      "which that",
      "whom",
      "they"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The non-restrictive relative pronoun 'which' correctly refers back to 'radical agrarian land distribution reforms' and functions as the direct object of the relative clause ('which the entrenched senatorial aristocracy vehemently opposed...'). Choice B ('which that') is redundant and ungrammatical. Choice C ('whom') is used for people, not inanimate legislative reforms. Choice D ('they') creates a comma splice."
  },
  {
    "id": 54,
    "code": "H8-RW54",
    "prefix": "H8",
    "section": "rw",
    "module": 2,
    "qnum": 27,
    "isFillIn": false,
    "topic": "Craft & Structure — Words in Context",
    "difficulty": "Super Hard",
    "text": "<p>The mathematical physicist warned that while quantum computational algorithms exhibit dazzling theoretical speedups, real-world implementations remain severely _______ by quantum decoherence, in which ambient thermal noise corrupts fragile qubit states within microseconds.</p>",
    "options": [
      "circumscribed",
      "exonerated",
      "amplified",
      "consecrated"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The sentence contrasts 'dazzling theoretical speedups' with real-world limitations caused by quantum decoherence ('ambient thermal noise corrupts fragile qubit states within microseconds'). Thus, real-world implementations are restricted, limited, or constrained. 'Circumscribed' means restricted or confined within narrow limits. Choice B ('exonerated') means cleared of wrongdoing. Choice C ('amplified') means expanded or made louder. Choice D ('consecrated') means made sacred."
  },
  {
    "id": 55,
    "code": "H8-M1",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 1,
    "isFillIn": false,
    "topic": "Algebra — Linear Systems with Infinite Solutions",
    "difficulty": "Hard",
    "text": "<p>In the system of equations below, $k$ and $c$ are constants:\n$$\\begin{cases} 3x - 5y = 14 \\\\ kx + 15y = c \\end{cases}$$\nIf the system has infinitely many solutions $(x, y)$, what is the value of $k + c$?</p>",
    "options": [
      "-51",
      "-33",
      "33",
      "51"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. A system of two linear equations in two variables has infinitely many solutions if and only if the equations are scalar multiples of each other (representing the identical line). Multiplying the first equation by $-3$ gives:\n$$-3(3x - 5y) = -3(14) \\implies -9x + 15y = -42$$\nComparing this directly to $kx + 15y = c$, we see that the coefficients of $y$ match ($15 = 15$). Therefore, we must have $k = -9$ and $c = -42$. The value of $k + c$ is $(-9) + (-42) = -51$."
  },
  {
    "id": 56,
    "code": "H8-M2",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 2,
    "isFillIn": false,
    "topic": "Algebra — Linear Inequalities in Two Variables",
    "difficulty": "Hard",
    "text": "<p>A system of inequalities consists of:\n$$4x - 3y \\le 12$$\n$$y - 2x < -4$$\nIf the point $(a, -2)$ satisfies both inequalities, which of the following could be the value of $a$?</p>",
    "options": [
      "0.8",
      "1.25",
      "1.75",
      "2.1"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Substitute $y = -2$ into both inequalities:\n1) From $4x - 3y \\le 12$: $4a - 3(-2) \\le 12 \\implies 4a + 6 \\le 12 \\implies 4a \\le 6 \\implies a \\le 1.5$.\n2) From $y - 2x < -4$: $-2 - 2a < -4 \\implies -2a < -2 \\implies a > 1$ (dividing by $-2$ reverses the inequality).\nCombining the two conditions yields $1 < a \\le 1.5$. Among the choices, only 1.25 lies within this open-closed interval $(1, 1.5]$."
  },
  {
    "id": 57,
    "code": "H8-M3",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 3,
    "isFillIn": false,
    "topic": "Advanced Math — Quadratic Discriminant",
    "difficulty": "Hard",
    "text": "<p>The quadratic equation $2x^2 - kx + 18 = 0$, where $k$ is a positive constant, has exactly one distinct real solution. What is the value of $k$?</p>",
    "options": [
      "6",
      "12",
      "24",
      "36"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. A quadratic equation $ax^2 + bx + c = 0$ has exactly one real solution if and only if its discriminant equals zero: $\\Delta = b^2 - 4ac = 0$. Here, $a = 2$, $b = -k$, and $c = 18$. Setting the discriminant to zero:\n$$(-k)^2 - 4(2)(18) = 0 \\implies k^2 - 144 = 0 \\implies k^2 = 144$$\nSince $k$ is given as a positive constant, $k = \\sqrt{144} = 12$."
  },
  {
    "id": 58,
    "code": "H8-M4",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 4,
    "isFillIn": false,
    "topic": "Advanced Math — Polynomial Factor Theorem",
    "difficulty": "Hard",
    "text": "<p>The polynomial function $P(x)$ is defined by $P(x) = 2x^3 - 5x^2 + ax - 12$, where $a$ is a constant. If $(x - 3)$ is a factor of $P(x)$, what is the value of $a$?</p>",
    "options": [
      "-3",
      "1",
      "4",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. By the Polynomial Factor Theorem, $(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$. Since $(x - 3)$ is a factor, $P(3) = 0$:\n$$P(3) = 2(3)^3 - 5(3)^2 + a(3) - 12 = 0$$\n$$2(27) - 5(9) + 3a - 12 = 0$$\n$$54 - 45 + 3a - 12 = 0$$\n$$-3 + 3a = 0 \\implies 3a = 3 \\implies a = 1$$"
  },
  {
    "id": 59,
    "code": "H8-M5",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 5,
    "isFillIn": false,
    "topic": "Advanced Math — Rational Functions and Asymptotes",
    "difficulty": "Hard",
    "text": "<p>A rational function is given by $f(x) = \\frac{4x^2 - 9}{2x^2 + 5x - 12}$. Which of the following is an equation of the vertical asymptote of the graph of $y = f(x)$ in the $xy$-plane?</p>",
    "options": [
      "$x = 1.5$",
      "$x = -4$",
      "$x = 2$",
      "$y = 2$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Factor both the numerator and denominator:\nNumerator: $4x^2 - 9 = (2x - 3)(2x + 3)$\nDenominator: $2x^2 + 5x - 12 = (2x - 3)(x + 4)$\nThus, $f(x) = \\frac{(2x - 3)(2x + 3)}{(2x - 3)(x + 4)}$. For all $x \\ne 1.5$, the common factor $(2x - 3)$ cancels, indicating a removable discontinuity (a hole) at $x = 1.5$. The non-canceling factor in the denominator is $(x + 4)$, which produces a true vertical asymptote at $x = -4$. (Note that $y = 2$ is the horizontal asymptote, not a vertical one)."
  },
  {
    "id": 60,
    "code": "H8-M6",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 6,
    "isFillIn": false,
    "topic": "Advanced Math — Exponential Decay Modeling",
    "difficulty": "Hard",
    "text": "<p>A radioactive medical isotope decays according to the model $M(t) = M_0 \\cdot 2^{-t / 24}$, where $M(t)$ is the remaining mass in milligrams after $t$ hours and $M_0$ is the initial mass. If a freshly prepared sample has an initial mass of 320 milligrams, what will be its mass after 72 hours?</p>",
    "options": [
      "10 mg",
      "20 mg",
      "40 mg",
      "80 mg"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The half-life of the isotope is 24 hours. After $t = 72$ hours, the exponent is $-\\frac{72}{24} = -3$. Evaluating the mass remaining:\n$$M(72) = 320 \\cdot 2^{-3} = 320 \\cdot \\frac{1}{2^3} = \\frac{320}{8} = 40\\text{ mg}$$"
  },
  {
    "id": 61,
    "code": "H8-M7",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 7,
    "isFillIn": false,
    "topic": "Algebra — Linear Cost and Profit Modeling",
    "difficulty": "Hard",
    "text": "<p>An artisan ceramic studio incurs fixed monthly operating costs of $\\$2{,}400$ plus $\\$15$ in materials for each decorative vase produced. If the studio sells each vase for $\\$55$, what is the minimum number of vases the studio must produce and sell in a month to achieve a monthly net profit of at least $\\$3{,}200$?</p>",
    "options": [
      "115",
      "128",
      "140",
      "160"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Net profit equals total revenue minus total cost. Let $n$ be the number of vases sold:\n$$\\text{Revenue} = 55n$$\n$$\\text{Cost} = 2,400 + 15n$$\n$$\\text{Profit} = 55n - (2,400 + 15n) = 40n - 2,400$$\nWe require profit $\\ge 3,200$:\n$$40n - 2,400 \\ge 3,200 \\implies 40n \\ge 5,600 \\implies n \\ge \\frac{5,600}{40} = 140$$\nThus, the studio must sell at least 140 vases."
  },
  {
    "id": 62,
    "code": "H8-M8",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 8,
    "isFillIn": false,
    "topic": "Advanced Math — Function Transformations",
    "difficulty": "Hard",
    "text": "<p>The parabola $y = f(x)$ has its vertex at the point $(-3, 5)$ in the $xy$-plane. A new function $g$ is defined by $g(x) = f(x - 4) - 7$. What are the coordinates of the vertex of the graph of $y = g(x)$?</p>",
    "options": [
      "$(-7, 12)$",
      "$(-7, -2)$",
      "$(1, -2)$",
      "$(1, 12)$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. In function transformation notation $g(x) = f(x - h) + k$, replacing $x$ with $x - 4$ translates the graph horizontally to the right by 4 units: $x_{\\text{new}} = -3 + 4 = 1$. Subtracting 7 from the function translates the graph vertically downward by 7 units: $y_{\\text{new}} = 5 - 7 = -2$. Therefore, the transformed vertex is $(1, -2)$."
  },
  {
    "id": 63,
    "code": "H8-M9",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 9,
    "isFillIn": false,
    "topic": "Problem-Solving & Data Analysis — Conditional Probability",
    "difficulty": "Hard",
    "text": "<p>A medical diagnostic screening for an autoimmune condition was evaluated in a cohort of 500 patients. Among the 80 patients who genuinely had the condition, 72 tested positive. Among the 420 patients who did not have the condition, 21 tested positive (false positives). If a patient is selected at random from all those who received a positive test result, what is the probability that this patient actually has the condition?</p>",
    "options": [
      "72 / 500",
      "80 / 500",
      "72 / 93",
      "72 / 80"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The condition restricts the sample space to only those patients who received a positive test result. Total positive test results = (True Positives) + (False Positives) = $72 + 21 = 93$. Of these 93 patients, 72 actually have the condition. Therefore, the conditional probability is $\\frac{72}{93}$ (which reduces to $\\frac{24}{31}$)."
  },
  {
    "id": 64,
    "code": "H8-M10",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 10,
    "isFillIn": false,
    "topic": "Problem-Solving & Data Analysis — Margin of Error Interpretation",
    "difficulty": "Hard",
    "text": "<p>A nonpartisan polling organization surveyed a representative random sample of 1,200 registered voters in a state. The survey found that 54% of respondents favored a proposed municipal bond, with a margin of error of $\\pm 2.8\\%$ at a 95% confidence level. Which of the following is the most accurate conclusion that can be drawn from this result?</p>",
    "options": [
      "Exactly 54% of all registered voters in the entire state favor the bond.",
      "It is plausible that between 51.2% and 56.8% of all registered voters in the state favor the bond.",
      "If the survey sample size were doubled, the margin of error would double to $\\pm 5.6\\%$.",
      "There is a 95% chance that any randomly chosen voter will vote in favor of 54% of the bond's provisions."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. A margin of error of $\\pm 2.8\\%$ around a point estimate of 54% establishes a 95% confidence interval of $[54\\% - 2.8\\%, 54\\% + 2.8\\%] = [51.2\\%, 56.8\\%]$. This means it is plausible that the true population proportion of registered voters who favor the bond falls within this range. Choice A is incorrect because sample statistics estimate population parameters with uncertainty. Choice C is incorrect because increasing sample size reduces the margin of error (inversely proportional to $\\sqrt{n}$). Choice D misinterprets the definition of confidence intervals."
  },
  {
    "id": 65,
    "code": "H8-M11",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 11,
    "isFillIn": false,
    "topic": "Geometry & Trigonometry — Circle Equations in Standard Form",
    "difficulty": "Hard",
    "text": "<p>In the $xy$-plane, the equation of a circle is $x^2 + y^2 - 8x + 6y - 11 = 0$. What is the radius of the circle?</p>",
    "options": [
      "$\\sqrt{11}$",
      "6",
      "12",
      "36"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Complete the square for both $x$ and $y$:\n$$(x^2 - 8x) + (y^2 + 6y) = 11$$\n$$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 11 + 16 + 9$$\n$$(x - 4)^2 + (y + 3)^2 = 36$$\nThe standard equation of a circle is $(x - h)^2 + (y - k)^2 = r^2$. Here, $r^2 = 36$, so the radius $r = \\sqrt{36} = 6$."
  },
  {
    "id": 66,
    "code": "H8-M12",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 12,
    "isFillIn": false,
    "topic": "Geometry & Trigonometry — Trigonometric Co-Function Identities",
    "difficulty": "Hard",
    "text": "<p>In right triangle $ABC$, the measure of angle $C$ is $90^\\circ$. If $\\sin(A) = \\frac{5}{13}$, what is the value of $\\cos(B)$?</p>",
    "options": [
      "5 / 13",
      "12 / 13",
      "5 / 12",
      "13 / 5"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In any right triangle where angle $C = 90^\\circ$, the two acute angles $A$ and $B$ are complementary, meaning $A + B = 90^\\circ$, or $B = 90^\\circ - A$. By the fundamental trigonometric co-function identity, $\\cos(B) = \\cos(90^\\circ - A) = \\sin(A)$. Alternatively, $\\sin(A) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{BC}{AB}$, and for angle $B$, $\\cos(B) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{BC}{AB}$. Since both ratios describe the exact same side length over the hypotenuse, $\\cos(B) = \\sin(A) = \\frac{5}{13}$."
  },
  {
    "id": 67,
    "code": "H8-M13",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 13,
    "isFillIn": false,
    "topic": "Algebra — Absolute Value Equations and Extraneous Roots",
    "difficulty": "Hard",
    "text": "<p>How many distinct real solutions exist for the equation $|2x - 7| = 3x - 1$?</p>",
    "options": [
      "Zero",
      "Exactly one",
      "Exactly two",
      "Infinitely many"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Since the absolute value must be non-negative, any valid solution requires $3x - 1 \\ge 0 \\implies x \\ge 1/3$.\nCase 1: $2x - 7 = 3x - 1 \\implies -x = 6 \\implies x = -6$. However, $x = -6 < 1/3$; substituting into the right side gives $3(-6) - 1 = -19$, but $|2(-6) - 7| = |-19| = 19 \\ne -19$. Thus $x = -6$ is extraneous.\nCase 2: $-(2x - 7) = 3x - 1 \\implies -2x + 7 = 3x - 1 \\implies 5x = 8 \\implies x = 1.6$.\nChecking $x = 1.6$: Left side $= |2(1.6) - 7| = |3.2 - 7| = |-3.8| = 3.8$. Right side $= 3(1.6) - 1 = 4.8 - 1 = 3.8$. Both sides match! Therefore, there is exactly one valid real solution ($x = 1.6$)."
  },
  {
    "id": 68,
    "code": "H8-M14",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 14,
    "isFillIn": false,
    "topic": "Geometry & Trigonometry — Circle Sector Area",
    "difficulty": "Hard",
    "text": "<p>A circle with center $O$ has a radius of 12 cm. Points $A$ and $B$ lie on the circumference such that the central angle $\\angle AOB$ measures $75^\\circ$. What is the area of the sector formed by central angle $\\angle AOB$, in square centimeters?</p>",
    "options": [
      "$15\\pi$",
      "$25\\pi$",
      "$30\\pi$",
      "$60\\pi$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The area of a circular sector with central angle $\\theta$ (in degrees) and radius $r$ is given by $A = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2$. Substituting $\\theta = 75^\\circ$ and $r = 12$:\n$$A = \\frac{75}{360} \\cdot \\pi (12)^2 = \\frac{5}{24} \\cdot 144\\pi = 5 \\cdot 6\\pi = 30\\pi\\text{ cm}^2$$"
  },
  {
    "id": 69,
    "code": "H8-M15",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 15,
    "isFillIn": false,
    "topic": "Problem-Solving & Data Analysis — Rates and Unit Conversions",
    "difficulty": "Hard",
    "text": "<p>An autonomous underwater research vehicle descends into an oceanic trench at a constant rate of 4.5 meters per second. At this rate, how many kilometers does the vehicle descend in 40 minutes? ($1\\text{ kilometer} = 1,000\\text{ meters}$)</p>",
    "options": [
      "5.4 km",
      "7.2 km",
      "10.8 km",
      "18.0 km"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. First, convert the descent duration into seconds: $40\\text{ minutes} \\times 60\\text{ seconds/minute} = 2,400\\text{ seconds}$. Next, compute the total descent distance in meters: $2,400\\text{ seconds} \\times 4.5\\text{ meters/second} = 10,800\\text{ meters}$. Finally, convert meters to kilometers: $\\frac{10,800\\text{ meters}}{1,000\\text{ meters/kilometer}} = 10.8\\text{ kilometers}$."
  },
  {
    "id": 70,
    "code": "H8-M16",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 16,
    "isFillIn": false,
    "topic": "Advanced Math — Radical Equations and Extraneous Roots",
    "difficulty": "Hard",
    "text": "<p>What is the sum of all real solutions to the equation $\\sqrt{3x + 16} - x = 2$?</p>",
    "options": [
      "-1",
      "3",
      "4",
      "7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Isolate the radical: $\\sqrt{3x + 16} = x + 2$. Square both sides:\n$$3x + 16 = (x + 2)^2 = x^2 + 4x + 4$$\nRearranging into standard quadratic form:\n$$x^2 + x - 12 = 0 \\implies (x + 4)(x - 3) = 0$$\nThis yields candidate roots $x = -4$ and $x = 3$. We must check for extraneous roots in the original equation:\nFor $x = -4$: $\\sqrt{3(-4) + 16} - (-4) = \\sqrt{4} + 4 = 2 + 4 = 6 \\ne 2$. (Extraneous!)\nFor $x = 3$: $\\sqrt{3(3) + 16} - 3 = \\sqrt{25} - 3 = 5 - 3 = 2$. (Valid!)\nSince $x = 3$ is the only real solution, the sum of all real solutions is simply 3."
  },
  {
    "id": 71,
    "code": "H8-M17",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 17,
    "isFillIn": true,
    "topic": "Algebra — Multi-Step Linear Equations",
    "difficulty": "Hard",
    "text": "<p>If $5(2x - 3) - 3(x + 4) = 43$, what is the value of $x$?</p>",
    "options": [],
    "answer": "10",
    "explanation": "Correct Answer: 10. Expand and simplify the expression:\n$$5(2x - 3) - 3(x + 4) = 43$$\n$$10x - 15 - 3x - 12 = 43$$\n$$7x - 27 = 43$$\n$$7x = 70 \\implies x = 10$$",
    "fillAnswer": "10",
    "acceptedAnswers": [
      "10"
    ]
  },
  {
    "id": 72,
    "code": "H8-M18",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 18,
    "isFillIn": true,
    "topic": "Advanced Math — Difference of Squares System",
    "difficulty": "Hard",
    "text": "<p>If $x^2 - y^2 = 84$ and $x - y = 6$, what is the value of $x$?</p>",
    "options": [],
    "answer": "10",
    "explanation": "Correct Answer: 10. Factor the difference of squares: $x^2 - y^2 = (x - y)(x + y) = 84$. Substitute $x - y = 6$:\n$$6(x + y) = 84 \\implies x + y = 14$$\nWe now have a simple linear system:\n$$\\begin{cases} x - y = 6 \\\\ x + y = 14 \\end{cases}$$\nAdd the two equations together: $2x = 20 \\implies x = 10$.",
    "fillAnswer": "10",
    "acceptedAnswers": [
      "10"
    ]
  },
  {
    "id": 73,
    "code": "H8-M19",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 19,
    "isFillIn": true,
    "topic": "Geometry & Trigonometry — Inscribed Circle Radius in Right Triangle",
    "difficulty": "Hard",
    "text": "<p>In right triangle $DEF$, the lengths of the two perpendicular legs are $DE = 9$ and $EF = 12$. A circle is inscribed inside triangle $DEF$ such that it is tangent to all three sides. What is the radius of this inscribed circle?</p>",
    "options": [],
    "answer": "3",
    "explanation": "Correct Answer: 3. By the Pythagorean theorem, the hypotenuse is $DF = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$.\nFor any triangle, the area is $A = r \\cdot s$, where $r$ is the inradius and $s$ is the semi-perimeter. The area of right triangle $DEF$ is $A = \\frac{1}{2} \\cdot 9 \\cdot 12 = 54$. The semi-perimeter is $s = \\frac{9 + 12 + 15}{2} = \\frac{36}{2} = 18$. Therefore, $r = \\frac{A}{s} = \\frac{54}{18} = 3$.\n(Alternatively, for any right triangle with legs $a, b$ and hypotenuse $c$, the inradius formula is $r = \\frac{a + b - c}{2} = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3$).",
    "fillAnswer": "3",
    "acceptedAnswers": [
      "3"
    ]
  },
  {
    "id": 74,
    "code": "H8-M20",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 20,
    "isFillIn": true,
    "topic": "Advanced Math — Exponential Equations with Common Bases",
    "difficulty": "Hard",
    "text": "<p>If $27^{2x - 1} = 9^{x + 4}$, what is the value of $x$? (Express as an integer or decimal).</p>",
    "options": [],
    "answer": "2.75",
    "explanation": "Correct Answer: 2.75 (or 11/4). Express both sides with base 3: $27 = 3^3$ and $9 = 3^2$:\n$$(3^3)^{2x - 1} = (3^2)^{x + 4}$$\n$$3^{3(2x - 1)} = 3^{2(x + 4)}$$\n$$3^{6x - 3} = 3^{2x + 8}$$\nEquating exponents:\n$$6x - 3 = 2x + 8 \\implies 4x = 11 \\implies x = \\frac{11}{4} = 2.75$$",
    "fillAnswer": "2.75",
    "acceptedAnswers": [
      "2.75",
      "11/4"
    ]
  },
  {
    "id": 75,
    "code": "H8-M21",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 21,
    "isFillIn": true,
    "topic": "Problem-Solving & Data Analysis — Successive Percent Changes",
    "difficulty": "Hard",
    "text": "<p>A retailer increased the original price of a down coat by 25% at the beginning of the winter season. At the end of the season, the retailer discounted this increased price by 20%. If the final discounted sale price was $\\$120$, what was the original price of the coat, in dollars?</p>",
    "options": [],
    "answer": "120",
    "explanation": "Correct Answer: 120. Let $P$ be the original price in dollars. A 25% increase corresponds to multiplying by $(1 + 0.25) = 1.25 = \\frac{5}{4}$. A subsequent 20% discount corresponds to multiplying by $(1 - 0.20) = 0.80 = \\frac{4}{5}$.\nThe net multiplier is $\\frac{5}{4} \\times \\frac{4}{5} = 1.00$. Therefore, the final price equals the original price:\n$$\\text{Final Price} = P \\times 1.25 \\times 0.80 = P = 120$$\nThe original price was $120.",
    "fillAnswer": "120",
    "acceptedAnswers": [
      "120"
    ]
  },
  {
    "id": 76,
    "code": "H8-M22",
    "prefix": "H8",
    "section": "math",
    "module": 1,
    "qnum": 22,
    "isFillIn": true,
    "topic": "Algebra — Perpendicular Lines and Y-Intercept",
    "difficulty": "Hard",
    "text": "<p>Line $L_1$ passes through the points $(2, 5)$ and $(6, 13)$ in the $xy$-plane. Line $L_2$ is perpendicular to line $L_1$ and passes through the point $(4, 10)$. If the equation of line $L_2$ is written in slope-intercept form as $y = mx + b$, what is the value of $b$?</p>",
    "options": [],
    "answer": "12",
    "explanation": "Correct Answer: 12. First, find the slope of line $L_1$: $m_1 = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$. Since line $L_2$ is perpendicular to line $L_1$, its slope is the negative reciprocal of $m_1$: $m_2 = -\\frac{1}{2} = -0.5$. Line $L_2$ passes through $(4, 10)$, so its point-slope equation is:\n$$y - 10 = -0.5(x - 4)$$\n$$y - 10 = -0.5x + 2 \\implies y = -0.5x + 12$$\nThus, the $y$-intercept $b$ is 12.",
    "fillAnswer": "12",
    "acceptedAnswers": [
      "12"
    ]
  },
  {
    "id": 77,
    "code": "H8-M23",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 1,
    "isFillIn": false,
    "topic": "Algebra — Non-Linear Systems and Line-Parabola Tangency",
    "difficulty": "Super Hard",
    "text": "<p>The line $y = 2x + k$, where $k$ is a constant, intersects the parabola $y = x^2 - 4x + 7$ at exactly one point in the $xy$-plane. What is the value of $k$?</p>",
    "options": [
      "-4",
      "-2",
      "2",
      "8"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Equate the two expressions for $y$:\n$$x^2 - 4x + 7 = 2x + k$$\n$$x^2 - 6x + (7 - k) = 0$$\nThe line is tangent to the parabola (intersecting at exactly one point) if and only if the discriminant of this quadratic equation equals zero: $\\Delta = b^2 - 4ac = 0$. Here, $a = 1$, $b = -6$, and $c = 7 - k$:\n$$(-6)^2 - 4(1)(7 - k) = 0$$\n$$36 - 28 + 4k = 0$$\n$$8 + 4k = 0 \\implies 4k = -8 \\implies k = -2$$"
  },
  {
    "id": 78,
    "code": "H8-M24",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 2,
    "isFillIn": false,
    "topic": "Advanced Math — Quadratic Maximum and Vertex Optimization",
    "difficulty": "Super Hard",
    "text": "<p>The altitude $h(t)$, in meters, of a meteorological research rocket $t$ seconds after launch is modeled by the function $h(t) = -4.9t^2 + 29.4t + 15$. What is the maximum altitude, in meters, achieved by the rocket?</p>",
    "options": [
      "29.4 m",
      "44.1 m",
      "59.1 m",
      "73.5 m"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The function $h(t) = at^2 + bt + c$ is a downward-opening parabola ($a = -4.9 < 0$). Its maximum occurs at the vertex time:\n$$t_{\\text{vertex}} = -\\frac{b}{2a} = -\\frac{29.4}{2(-4.9)} = \\frac{29.4}{9.8} = 3\\text{ seconds}$$\nSubstitute $t = 3$ into the height function to find the maximum altitude:\n$$h(3) = -4.9(3)^2 + 29.4(3) + 15 = -4.9(9) + 88.2 + 15 = -44.1 + 88.2 + 15 = 44.1 + 15 = 59.1\\text{ meters}$$"
  },
  {
    "id": 79,
    "code": "H8-M25",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 3,
    "isFillIn": false,
    "topic": "Advanced Math — Vieta's Formulas for Cubic Polynomials",
    "difficulty": "Super Hard",
    "text": "<p>The polynomial $f(x) = x^3 - 7x^2 + 14x - 8$ has three distinct real roots: $r_1$, $r_2$, and $r_3$. What is the value of $\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3}$?</p>",
    "options": [
      "7 / 8",
      "7 / 4",
      "8 / 7",
      "14 / 7"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Express the sum with a common denominator:\n$$\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{r_2 r_3 + r_1 r_3 + r_1 r_2}{r_1 r_2 r_3}$$\nFor any cubic polynomial $x^3 + ax^2 + bx + c = 0$, Vieta's formulas give:\nSum of pairwise products: $r_1 r_2 + r_2 r_3 + r_3 r_1 = b = 14$\nProduct of roots: $r_1 r_2 r_3 = -c = -(-8) = 8$\nTherefore:\n$$\\frac{1}{r_1} + \\frac{1}{r_2} + \\frac{1}{r_3} = \\frac{14}{8} = \\frac{7}{4} = 1.75$$\n(Alternatively, factoring $f(x) = (x - 1)(x - 2)(x - 4)$ gives roots 1, 2, 4. Then $1/1 + 1/2 + 1/4 = 1 + 0.5 + 0.25 = 1.75 = 7/4$)."
  },
  {
    "id": 80,
    "code": "H8-M26",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 4,
    "isFillIn": false,
    "topic": "Geometry & Trigonometry — Circles Tangent to Both Coordinate Axes",
    "difficulty": "Super Hard",
    "text": "<p>In the first quadrant of the $xy$-plane, a circle with radius $R$ is tangent to both the positive $x$-axis and the positive $y$-axis. If the circle passes through the point $(2, 9)$, what is the sum of all possible values of $R$?</p>",
    "options": [
      "11",
      "17",
      "22",
      "85"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. A circle in the first quadrant tangent to both coordinate axes has its center at $(R, R)$ and equation $(x - R)^2 + (y - R)^2 = R^2$. Since the point $(2, 9)$ lies on the circle:\n$$(2 - R)^2 + (9 - R)^2 = R^2$$\n$$(4 - 4R + R^2) + (81 - 18R + R^2) = R^2$$\n$$R^2 - 22R + 85 = 0$$\nFactoring: $(R - 5)(R - 17) = 0$, giving $R = 5$ or $R = 17$. Both are positive radii. The sum of all possible values of $R$ is $5 + 17 = 22$. (By Vieta's formulas, the sum of the roots is simply $-(-22)/1 = 22$)."
  },
  {
    "id": 81,
    "code": "H8-M27",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 5,
    "isFillIn": false,
    "topic": "Advanced Math — Fractional Exponents and Radicals",
    "difficulty": "Super Hard",
    "text": "<p>For all positive real numbers $x$, the algebraic expression $\\frac{\\sqrt{x^5} \\cdot \\sqrt[3]{x^2}}{\\sqrt[6]{x}}$ can be written in the form $x^k$, where $k$ is a constant. What is the value of $k$?</p>",
    "options": [
      "2",
      "5 / 2",
      "3",
      "19 / 6"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Convert all radical expressions into fractional exponents:\n$$\\sqrt{x^5} = x^{5/2}$$\n$$\\sqrt[3]{x^2} = x^{2/3}$$\n$$\\sqrt[6]{x} = x^{1/6}$$\nUsing exponent addition and subtraction rules:\n$$\\frac{x^{5/2} \\cdot x^{2/3}}{x^{1/6}} = x^{5/2 + 2/3 - 1/6}$$\nFind a common denominator of 6:\n$$\\frac{5}{2} = \\frac{15}{6}, \\quad \\frac{2}{3} = \\frac{4}{6}$$\n$$k = \\frac{15}{6} + \\frac{4}{6} - \\frac{1}{6} = \\frac{18}{6} = 3$$"
  },
  {
    "id": 82,
    "code": "H8-M28",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 6,
    "isFillIn": false,
    "topic": "Algebra — Parallel Lines and Inconsistent Systems",
    "difficulty": "Super Hard",
    "text": "<p>In the system of equations below, $k$ is a constant:\n$$\\begin{cases} 6x - 9y = 15 \\\\ 4x - ky = 8 \\end{cases}$$\nIf the system has no solution $(x, y)$, what is the value of $k$?</p>",
    "options": [
      "-6",
      "4",
      "6",
      "9"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. A system of linear equations has no solution if and only if the lines are distinct and parallel (equal slopes, distinct $y$-intercepts). In standard form $Ax + By = C$, the slope is $-A/B$:\nSlope of Line 1: $m_1 = -\\frac{6}{-9} = \\frac{2}{3}$\nSlope of Line 2: $m_2 = -\\frac{4}{-k} = \\frac{4}{k}$\nEquating slopes:\n$$\\frac{2}{3} = \\frac{4}{k} \\implies 2k = 12 \\implies k = 6$$\nFor $k = 6$, Line 2 is $4x - 6y = 8$, which is equivalent to $6x - 9y = 12$ (multiplying by $1.5$). Since $12 \\ne 15$, the lines are parallel and never intersect."
  },
  {
    "id": 83,
    "code": "H8-M29",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 7,
    "isFillIn": false,
    "topic": "Problem-Solving & Data Analysis — Weighted Means",
    "difficulty": "Super Hard",
    "text": "<p>A university chemistry syllabus establishes that the overall course grade is calculated as a weighted average: Laboratory Reports account for 20%, the Midterm Examination accounts for 30%, and the Final Comprehensive Examination accounts for 50%. A student earned a 90 on Laboratory Reports and a 78 on the Midterm Examination. What is the minimum score the student must achieve on the Final Comprehensive Examination to finish with an overall course grade of at least 85?</p>",
    "options": [
      "85.0",
      "86.4",
      "87.2",
      "89.0"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Let $F$ be the score on the Final Examination. Write the weighted average inequality:\n$$0.20(90) + 0.30(78) + 0.50(F) \\ge 85$$\n$$18 + 23.4 + 0.50F \\ge 85$$\n$$41.4 + 0.50F \\ge 85$$\n$$0.50F \\ge 85 - 41.4 = 43.6$$\n$$F \\ge \\frac{43.6}{0.50} = 87.2$$\nThe student must earn at least an 87.2."
  },
  {
    "id": 84,
    "code": "H8-M30",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 8,
    "isFillIn": false,
    "topic": "Geometry & Trigonometry — Volume Ratios of Similar 3D Solids",
    "difficulty": "Super Hard",
    "text": "<p>Two geometrically similar solid right circular cones, Cone $A$ and Cone $B$, have total surface areas in the ratio of $16 : 49$. If the volume of Cone $A$ is $128\\pi$ cubic inches, what is the volume of Cone $B$, in cubic inches?</p>",
    "options": [
      "$256\\pi$",
      "$392\\pi$",
      "$512\\pi$",
      "$686\\pi$"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. For any two similar solids, if the ratio of their surface areas is $\\frac{A_1}{A_2} = k^2$, then the linear scale factor is $k$, and the ratio of their volumes is $k^3$. Here:\n$$k^2 = \\frac{16}{49} \\implies k = \\sqrt{\\frac{16}{49}} = \\frac{4}{7}$$\nThe ratio of volumes is:\n$$\\frac{V_A}{V_B} = k^3 = \\left(\\frac{4}{7}\\right)^3 = \\frac{64}{343}$$\nSubstitute $V_A = 128\\pi$:\n$$\\frac{128\\pi}{V_B} = \\frac{64}{343} \\implies V_B = 128\\pi \\cdot \\frac{343}{64} = 2\\pi \\cdot 343 = 686\\pi\\text{ in}^3$$"
  },
  {
    "id": 85,
    "code": "H8-M31",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 9,
    "isFillIn": false,
    "topic": "Advanced Math — Algebraic Manipulation of Quadratic Roots",
    "difficulty": "Super Hard",
    "text": "<p>If $x$ satisfies the equation $x^2 - 6x + 2 = 0$, what is the value of $(x - 3)^2$?</p>",
    "options": [
      "4",
      "7",
      "9",
      "11"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Expand the target expression: $(x - 3)^2 = x^2 - 6x + 9$. From the given equation, $x^2 - 6x + 2 = 0$, isolate the linear and quadratic terms: $x^2 - 6x = -2$. Substitute this directly into the expanded target expression:\n$$(x - 3)^2 = (x^2 - 6x) + 9 = -2 + 9 = 7$$"
  },
  {
    "id": 86,
    "code": "H8-M32",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 10,
    "isFillIn": false,
    "topic": "Problem-Solving & Data Analysis — Standard Deviation Comparisons",
    "difficulty": "Super Hard",
    "text": "<p>Consider three distinct numerical datasets, each consisting of five data points:\nDataset $X$: $\\{10, 20, 30, 40, 50\\}$\nDataset $Y$: $\\{25, 28, 30, 32, 35\\}$\nDataset $Z$: $\\{10, 10, 30, 50, 50\\}$\nAll three datasets have an identical arithmetic mean of 30. If $s_X$, $s_Y$, and $s_Z$ denote the standard deviations of datasets $X$, $Y$, and $Z$ respectively, which of the following correctly orders these values?</p>",
    "options": [
      "$s_Y < s_X < s_Z$",
      "$s_Z < s_X < s_Y$",
      "$s_X < s_Y < s_Z$",
      "$s_Y < s_Z < s_X$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Standard deviation quantifies the dispersion or spread of data values around their arithmetic mean (30):\n• In Dataset $Y$, all five values are clustered very tightly within 5 units of the mean ($25$ to $35$), resulting in the smallest spread ($s_Y \\approx 3.81$).\n• In Dataset $X$, values are evenly spaced across the range from 10 to 50 ($s_X \\approx 15.81$).\n• In Dataset $Z$, four of the five values lie at the extreme minimum (10, 10) and maximum (50, 50), 20 units away from the mean, creating the greatest dispersion ($s_Z \\approx 20.00$).\nTherefore, the correct ordering is $s_Y < s_X < s_Z$."
  },
  {
    "id": 87,
    "code": "H8-M33",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 11,
    "isFillIn": false,
    "topic": "Geometry & Trigonometry — Radian Angles and Coordinate Trigonometry",
    "difficulty": "Super Hard",
    "text": "<p>In the $xy$-plane, point $P$ lies on the terminal ray of an angle $\\theta$ in standard position. If $\\theta = \\frac{7\\pi}{6}$ radians and the distance from the origin $(0, 0)$ to point $P$ is 8, what are the coordinates of point $P$?</p>",
    "options": [
      "$(-4, -4\\sqrt{3})$",
      "$(-4\\sqrt{3}, -4)$",
      "$(4\\sqrt{3}, -4)$",
      "$(-4\\sqrt{2}, -4\\sqrt{2})$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In polar coordinates, $x = r \\cos(\\theta)$ and $y = r \\sin(\\theta)$. Here $r = 8$ and $\\theta = \\frac{7\\pi}{6}$ (which lies in Quadrant III, where both $x$ and $y$ are negative):\n$$\\cos\\left(\\frac{7\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2} \\implies x = 8 \\cdot \\left(-\\frac{\\sqrt{3}}{2}\\right) = -4\\sqrt{3}$$\n$$\\sin\\left(\\frac{7\\pi}{6}\\right) = -\\frac{1}{2} \\implies y = 8 \\cdot \\left(-\\frac{1}{2}\\right) = -4$$\nThus, the coordinates of $P$ are $(-4\\sqrt{3}, -4)$."
  },
  {
    "id": 88,
    "code": "H8-M34",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 12,
    "isFillIn": false,
    "topic": "Advanced Math — Continuous Compounding and Natural Logarithms",
    "difficulty": "Super Hard",
    "text": "<p>An endowment fund of $P$ dollars grows according to the continuous compounding model $A(t) = P e^{rt}$, where $r$ is the constant annual nominal growth rate and $t$ is time in years. If an initial deposit of $\\$5{,}000$ doubles in value in exactly 10 years, which expression represents the exact value of $r$?</p>",
    "options": [
      "$\\frac{\\ln(2)}{5}$",
      "$\\frac{\\ln(2)}{10}$",
      "$\\frac{10}{\\ln(2)}$",
      "$\\ln(0.2)$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. When the balance doubles, $A(10) = 2P$. Substituting into the formula:\n$$2P = P e^{10r} \\implies e^{10r} = 2$$\nTake the natural logarithm ($\\ln$) of both sides:\n$$\\ln(e^{10r}) = \\ln(2) \\implies 10r = \\ln(2) \\implies r = \\frac{\\ln(2)}{10}$$"
  },
  {
    "id": 89,
    "code": "H8-M35",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 13,
    "isFillIn": false,
    "topic": "Algebra — Work-Rate Problems with Sequential Workers",
    "difficulty": "Super Hard",
    "text": "<p>Working alone at a constant rate, Drainage Pump $A$ can empty an emergency storm basin in 6 hours. Drainage Pump $B$, working alone at its constant rate, can empty the same basin in 9 hours. Both pumps begin operating simultaneously. After 2 hours of joint operation, Pump $A$ experiences an electrical failure and ceases functioning. How many additional hours will it take Pump $B$ operating alone to finish emptying the basin?</p>",
    "options": [
      "2.5 hours",
      "3.0 hours",
      "3.6 hours",
      "4.0 hours"
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Determine the hourly rates of each pump:\nRate of Pump $A = \\frac{1}{6}$ basin/hour; Rate of Pump $B = \\frac{1}{9}$ basin/hour.\nCombined rate $= \\frac{1}{6} + \\frac{1}{9} = \\frac{3}{18} + \\frac{2}{18} = \\frac{5}{18}$ basin/hour.\nIn the initial 2 hours working together, they empty: $2 \\times \\frac{5}{18} = \\frac{10}{18} = \\frac{5}{9}$ of the basin.\nThe remaining fraction of the basin to be drained is $1 - \\frac{5}{9} = \\frac{4}{9}$.\nPump $B$ drains at a rate of $\\frac{1}{9}$ basin/hour. The time required for Pump $B$ to complete the task alone is:\n$$\\text{Time} = \\frac{\\text{Remaining Work}}{\\text{Rate of } B} = \\frac{4/9}{1/9} = 4\\text{ hours}$$"
  },
  {
    "id": 90,
    "code": "H8-M36",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 14,
    "isFillIn": false,
    "topic": "Advanced Math — Parabola Symmetry and Vertex Form",
    "difficulty": "Super Hard",
    "text": "<p>The graph of the quadratic function $f(x) = a(x - h)^2 + k$ has its vertex at $(3, -8)$ in the $xy$-plane and passes through the point $(5, 0)$. What is the value of $f(1)$?</p>",
    "options": [
      "-6",
      "0",
      "4",
      "8"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Every vertical parabola $y = f(x)$ is symmetric with respect to its vertical axis of symmetry, $x = h$. Here the vertex is $(3, -8)$, so the axis of symmetry is the line $x = 3$. The input $x = 5$ is at a horizontal distance of $|5 - 3| = 2$ units from the axis of symmetry. The input $x = 1$ is also at a horizontal distance of $|1 - 3| = 2$ units from the axis of symmetry. By symmetry, $f(1) = f(5) = 0$.\n(Algebraic check: $f(x) = a(x - 3)^2 - 8$. Since $f(5) = 0 \\implies a(5 - 3)^2 - 8 = 0 \\implies 4a = 8 \\implies a = 2$. Then $f(1) = 2(1 - 3)^2 - 8 = 2(-2)^2 - 8 = 8 - 8 = 0$)."
  },
  {
    "id": 91,
    "code": "H8-M37",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 15,
    "isFillIn": false,
    "topic": "Problem-Solving & Data Analysis — Net Percent Change of Product Dimensions",
    "difficulty": "Super Hard",
    "text": "<p>The length of a rectangular solar collector panel is increased by 30%, while its width is decreased by 20%. By what net percentage does the surface area of the panel change?</p>",
    "options": [
      "Decreases by 10%",
      "Increases by 4%",
      "Increases by 10%",
      "Remains unchanged"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let the initial length be $L$, initial width be $W$, and initial area be $A = L \\cdot W$. An increase of 30% means $L_{\\text{new}} = 1.30L$. A decrease of 20% means $W_{\\text{new}} = 0.80W$. The new area is:\n$$A_{\\text{new}} = (1.30L) \\cdot (0.80W) = (1.30 \\cdot 0.80) \\cdot (L \\cdot W) = 1.04 \\cdot A$$\nSince $1.04 = 1 + 0.04$, the area increases by 4%."
  },
  {
    "id": 92,
    "code": "H8-M38",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 16,
    "isFillIn": false,
    "topic": "Geometry & Trigonometry — Geometric Mean Altitude Theorem",
    "difficulty": "Super Hard",
    "text": "<p>In right triangle $ABC$ with right angle at vertex $B$, altitude $BD$ is drawn perpendicular to hypotenuse $AC$. If the altitude divides the hypotenuse into segments of length $AD = 4$ and $DC = 9$, what is the length of altitude $BD$?</p>",
    "options": [
      "5",
      "6",
      "6.5",
      "7.2"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In a right triangle, the altitude drawn to the hypotenuse creates two smaller triangles that are both similar to the original triangle and to each other ($\\triangle ABD \\sim \\triangle BCD$). Setting up the ratio of corresponding legs:\n$$\\frac{AD}{BD} = \\frac{BD}{DC} \\implies BD^2 = AD \\cdot DC$$\nThis is the Geometric Mean (Altitude) Theorem. Substituting the given values:\n$$BD^2 = 4 \\cdot 9 = 36 \\implies BD = \\sqrt{36} = 6$$"
  },
  {
    "id": 93,
    "code": "H8-M39",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 17,
    "isFillIn": true,
    "topic": "Algebra — Linear System Elimination",
    "difficulty": "Super Hard",
    "text": "<p>In the system of equations below:\n$$\\begin{cases} 3x + 4y = 29 \\\\ 5x - 2y = 5 \\end{cases}$$\nWhat is the value of $x + y$?</p>",
    "options": [],
    "answer": "8",
    "explanation": "Correct Answer: 8. Multiply the second equation by 2 to align coefficients of $y$:\n$$2(5x - 2y) = 2(5) \\implies 10x - 4y = 10$$\nAdd this to the first equation:\n$$(3x + 4y) + (10x - 4y) = 29 + 10$$\n$$13x = 39 \\implies x = 3$$\nSubstitute $x = 3$ into the first equation to solve for $y$:\n$$3(3) + 4y = 29 \\implies 9 + 4y = 29 \\implies 4y = 20 \\implies y = 5$$\nThe value of $x + y$ is $3 + 5 = 8$.",
    "fillAnswer": "8",
    "acceptedAnswers": [
      "8"
    ]
  },
  {
    "id": 94,
    "code": "H8-M40",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 18,
    "isFillIn": true,
    "topic": "Advanced Math — Quadratic Root Difference and Constant Determination",
    "difficulty": "Super Hard",
    "text": "<p>The quadratic equation $x^2 - 16x + c = 0$, where $c$ is a constant, has two real roots whose difference is 6. What is the value of $c$?</p>",
    "options": [],
    "answer": "55",
    "explanation": "Correct Answer: 55. Let the two roots be $r_1$ and $r_2$ with $r_1 > r_2$. By Vieta's formulas:\nSum of roots: $r_1 + r_2 = 16$\nDifference of roots: $r_1 - r_2 = 6$\nAdding the two equations: $2r_1 = 22 \\implies r_1 = 11$.\nSubtracting: $r_2 = 16 - 11 = 5$.\nBy Vieta's formulas, the constant term $c$ is the product of the roots:\n$$c = r_1 \\cdot r_2 = 11 \\cdot 5 = 55$$\n(Check: $x^2 - 16x + 55 = (x - 11)(x - 5) = 0$, roots are 11 and 5, difference is $11 - 5 = 6$).",
    "fillAnswer": "55",
    "acceptedAnswers": [
      "55"
    ]
  },
  {
    "id": 95,
    "code": "H8-M41",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 19,
    "isFillIn": true,
    "topic": "Advanced Math — Polynomial Remainder Theorem",
    "difficulty": "Super Hard",
    "text": "<p>When the polynomial $P(x) = x^4 - 3x^3 + kx^2 - 5x + 12$ is divided by $(x - 2)$, the remainder is 18. What is the value of the constant $k$?</p>",
    "options": [],
    "answer": "6",
    "explanation": "Correct Answer: 6. According to the Polynomial Remainder Theorem, the remainder of a polynomial $P(x)$ divided by $(x - c)$ is equal to $P(c)$. Here, the divisor is $(x - 2)$, so $P(2) = 18$:\n$$P(2) = 2^4 - 3(2^3) + k(2^2) - 5(2) + 12 = 18$$\n$$16 - 3(8) + 4k - 10 + 12 = 18$$\n$$16 - 24 + 4k - 10 + 12 = 18$$\n$$4k - 6 = 18 \\implies 4k = 24 \\implies k = 6$$",
    "fillAnswer": "6",
    "acceptedAnswers": [
      "6"
    ]
  },
  {
    "id": 96,
    "code": "H8-M42",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 20,
    "isFillIn": true,
    "topic": "Geometry & Trigonometry — Right Triangle Sine from Tangent",
    "difficulty": "Super Hard",
    "text": "<p>In right triangle $PQR$, the measure of angle $Q$ is $90^\\circ$ and $\\tan(P) = \\frac{7}{24}$. What is the value of $\\sin(P)$? (Express your answer as a simplified fraction or decimal).</p>",
    "options": [],
    "answer": "7/25",
    "explanation": "Correct Answer: 7/25 (or 0.28). In right triangle $PQR$, $\\tan(P) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{7}{24}$. By the Pythagorean theorem, the hypotenuse is:\n$$\\text{Hypotenuse} = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$$\nTherefore, the sine of angle $P$ is:\n$$\\sin(P) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{7}{25} = 0.28$$",
    "fillAnswer": "7/25",
    "acceptedAnswers": [
      "7/25",
      "0.28"
    ]
  },
  {
    "id": 97,
    "code": "H8-M43",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 21,
    "isFillIn": true,
    "topic": "Geometry & Trigonometry — Truncated Cone and Volume of Similar Solids",
    "difficulty": "Super Hard",
    "text": "<p>A solid right circular cone has a base radius of 9 cm and a height of 12 cm. A cutting plane parallel to the base slices through the cone at a distance of 4 cm from the vertex, creating a smaller cone at the top. The volume of this smaller cone can be expressed as $k\\pi$ cubic centimeters. What is the value of $k$?</p>",
    "options": [],
    "answer": "12",
    "explanation": "Correct Answer: 12. The smaller cone at the top is geometrically similar to the original full cone. The ratio of their heights is $k_{\\text{linear}} = \\frac{4}{12} = \\frac{1}{3}$.\nTherefore, the radius of the smaller cone is $r_1 = \\frac{1}{3} \\cdot 9 = 3\\text{ cm}$.\nThe volume of a right circular cone is given by $V = \\frac{1}{3}\\pi r^2 h$. Substituting $r_1 = 3$ and $h_1 = 4$:\n$$V_{\\text{small}} = \\frac{1}{3}\\pi (3)^2 (4) = \\frac{1}{3}\\pi (9)(4) = 12\\pi\\text{ cm}^3$$\nSince the volume is expressed as $k\\pi$, the value of $k$ is 12.",
    "fillAnswer": "12",
    "acceptedAnswers": [
      "12"
    ]
  },
  {
    "id": 98,
    "code": "H8-M44",
    "prefix": "H8",
    "section": "math",
    "module": 2,
    "qnum": 22,
    "isFillIn": true,
    "topic": "Geometry & Trigonometry — Tangent Segment Length from an External Point",
    "difficulty": "Super Hard",
    "text": "<p>In the $xy$-plane, a circle with center $C(4, 7)$ has a radius of 5. A point $P(16, 12)$ lies in the exterior of the circle. A line through point $P$ is tangent to the circle at point $T$. What is the length of tangent segment $PT$?</p>",
    "options": [],
    "answer": "12",
    "explanation": "Correct Answer: 12. A radius drawn to a point of tangency is perpendicular to the tangent line: $CT \\perp PT$. Thus, $\\triangle CTP$ is a right triangle with right angle at $T$, hypotenuse $CP$, and legs $CT$ and $PT$.\n1) Find the length of hypotenuse $CP$ using the distance formula:\n$$CP = \\sqrt{(16 - 4)^2 + (12 - 7)^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$$\n2) Radius $CT = 5$.\n3) By the Pythagorean theorem in right triangle $\\triangle CTP$:\n$$PT = \\sqrt{CP^2 - CT^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$$",
    "fillAnswer": "12",
    "acceptedAnswers": [
      "12"
    ]
  }
];

// Topic Map
const TOPIC_MAP = {};
QUESTIONS.forEach(q => {
  const t = q.topic || 'General';
  if (!TOPIC_MAP[t]) {
    TOPIC_MAP[t] = { name: t, questions: [] };
  }
  TOPIC_MAP[t].questions.push(q.id);
});

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS, TOPIC_MAP };
}
