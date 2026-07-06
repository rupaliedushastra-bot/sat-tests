// SAT Prep Test 1 — Reading and Writing
// Source: Princeton Review Digital SAT Premium Prep, 2025
// Module 1: 27 Questions | Module 2: 27 Questions
// Answers verified against official answer key (pp. 128-130)

const E7_RW_M1 = [
  { id:1, section:"rw", module:1, topic:"Vocabulary",
    text:"Despite initial skepticism regarding the feasibility of growing crops on the tops of buildings, Dr. Dickson Despommier has remained _________ in his promotion of vertical farming. In no small part due to his persistence and dedication, the concept has gained traction and credibility over the years.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["menacing","subdued","resolute","misunderstood"], answer:2,
    explanation:"The passage stresses Despommier's persistence and dedication, so the blank needs a word meaning 'steadfast' or 'determined.' (A) menacing, (B) subdued, and (D) misunderstood are wrong in tone. (C) resolute (firm/determined) is correct." },

  { id:2, section:"rw", module:1, topic:"Vocabulary",
    text:"Traditional fishing communities in the Philippines have found ways to _________ age-old knowledge of tides, weather patterns, and fish migratory patterns with modern technology such as motorized boats and GPS tracking.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["belittle","contemplate","integrate","replace"], answer:2,
    explanation:"The passage describes using both traditional methods AND modern technology together. 'Integrate' (combine) matches. (A) belittle = put down. (B) contemplate = think about. (D) replace is the opposite of using both." },

  { id:3, section:"rw", module:1, topic:"Vocabulary",
    text:"The stories in Jhumpa Lahiri's debut collection revolve around Indian immigrants and Indian Americans, each character's story containing truncated yet rich and _________ life experiences and histories.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["meaningless","dynamic","benign","shattered"], answer:1,
    explanation:"The stories are described as 'rich,' so the blank needs a similarly positive word. (A) meaningless and (D) shattered are negative. (C) benign (harmless) doesn't match. (B) dynamic (active/vibrant) is correct." },

  { id:4, section:"rw", module:1, topic:"Vocabulary",
    text:"A study by Monica Gagliano found that plants exposed to stressors were more likely to survive future stressors. This evidence of plant memory challenges the common perception of plants as _________ organisms that simply respond to their environment.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["courageous","assertive","passive","adaptable"], answer:2,
    explanation:"The common perception is that plants 'simply respond,' implying they are inactive. (A) courageous, (B) assertive, and (D) adaptable don't mean 'inactive.' (C) passive is correct." },

  { id:5, section:"rw", module:1, topic:"Vocabulary",
    text:"In a 2020 study, Stanford professor Nicholas Bloom demonstrated that working from home can increase productivity and work satisfaction. Based on this research, many economists _________ the commonly held belief that remote work leads to decreased productivity.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["reinforced","challenged","anticipated","confirmed"], answer:1,
    explanation:"The study contradicts the belief that remote work decreases productivity, so economists 'challenged' that belief. (A) reinforced = supported. (C) anticipated and (D) confirmed both support the belief." },

  { id:6, section:"rw", module:1, topic:"Vocabulary",
    text:"After years of public advocacy, climate scientist Katharine Hayhoe has become one of the most _________ voices in communicating climate science to non-scientific audiences, having authored books, given TED talks, and hosted a video series.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["obscure","recognized","controversial","restrained"], answer:1,
    explanation:"The passage describes extensive public work, indicating she is widely known. (B) recognized fits. (A) obscure is the opposite. (C) controversial and (D) restrained are not supported." },

  { id:7, section:"rw", module:1, topic:"Purpose Questions",
    text:"Researchers at UC San Diego developed neural dust that can be implanted to wirelessly monitor nerve and muscle activity. Unlike traditional probes, neural dust is powered by ultrasound, making it safe and long-lasting. Additionally, neural dust can be placed in more challenging locations than other probes, allowing for more comprehensive monitoring.\n\nWhat is the main purpose of mentioning neural dust's placement advantage?",
    options:["To show that neural dust uses a unique electrical current","To explain that neural dust can be placed more advantageously than other probes","To argue that neural dust reduces monitoring time for brain tissue scans","To demonstrate that neural dust carries less electrical current than other probes"], answer:1,
    explanation:"The passage explicitly states neural dust can be placed in more challenging locations, allowing comprehensive monitoring. This placement advantage is directly mentioned. Options A and D misidentify the power source as electrical current (it's ultrasound). Option C is not mentioned." },

  { id:8, section:"rw", module:1, topic:"Purpose Questions",
    text:"In Maori culture, the Tohunga are revered figures who hold knowledge about history and traditions. They act as healers, navigators, and spiritual leaders, responsible for passing on knowledge to future generations. While modernization has impacted their role, they remain a crucial source of guidance and guardians of cultural heritage.\n\nWhat choice best states the main idea of the text?",
    options:["Contemporary society has less need for the Tohunga than in the past","The Tohunga are important cultural figures in Maori society who continue to hold significance today","Modernization has fundamentally changed the role of the Tohunga","The Tohunga's primary role is to preserve the history of the Maori people"], answer:1,
    explanation:"The text describes the Tohunga's many roles and notes that despite modernization they 'remain a crucial source of guidance.' Option B captures both their importance and continued relevance. Option A is contradicted. Option C overstates impact. Option D is too narrow." },

  { id:9, section:"rw", module:1, topic:"Dual Texts Questions",
    text:"Text 1: Researchers have found that exposure to nature can reduce stress and improve mental well-being. Studies suggest that even brief encounters with green spaces can lower cortisol levels and improve mood.\n\nText 2: Dr. Sarah Williams argues that the stress-reduction benefits attributed to nature exposure may be overstated. Her research suggests that many studies fail to control for pre-existing stress levels or prior nature exposure habits among participants.\n\nHow would Dr. Williams most likely respond to the claims in Text 1?",
    options:["She would agree that nature reduces stress but question whether images of landscapes are as effective as outdoor visits","She would argue that the studies cited have methodological flaws that call their conclusions into question","She would support the findings by providing additional evidence for the stress-reducing properties of green spaces","She would claim that benefits of nature exposure are only relevant to individuals with chronically high stress levels"], answer:1,
    explanation:"Dr. Williams (Text 2) explicitly criticizes study methodology, noting failures to control for pre-existing conditions. She would therefore argue the studies have methodological flaws. Options C and D misrepresent her position." },

  { id:10, section:"rw", module:1, topic:"Claims Questions",
    text:"A 2019 study examined the effects of social media use on adolescent mental health. Researchers analyzed data from over 12,000 teenagers and found that those spending more than three hours per day on social media reported significantly higher levels of anxiety and depression compared to those spending less than one hour per day.\n\nWhich finding, if true, would most directly support the researchers' conclusions?",
    options:["Teenagers who used social media primarily for academic purposes reported lower anxiety levels","A reduction in social media use among participants led to measurable improvements in self-reported mental health","Social media platforms with more visual content were associated with higher rates of anxiety","The majority of teenagers in the study had at least one social media account"], answer:1,
    explanation:"If reducing social media use led to improved mental health, this directly supports that heavy use is linked to anxiety and depression. Option A introduces a confounding variable. Option C is too narrow. Option D is irrelevant." },

  { id:11, section:"rw", module:1, topic:"Claims Questions",
    text:"The Inter-Parliamentary Union monitors the percentage of women elected to national parliaments worldwide. In Africa, the top countries for female representation include Rwanda, South Africa, Namibia, and Ethiopia. In some cases, the percentage of women serving was found to be especially prominent; for instance, _________.\n\nWhich choice most effectively completes the example with relevant data?",
    options:["Rwanda has the highest percentage of women in parliament among African countries","in Rwanda, women make up over 60% of parliament, the highest percentage of female representation in Africa","the percentage of women in Africa's parliaments has increased over the past decade","many African countries still have low numbers of women in parliament"], answer:1,
    explanation:"The sentence needs a specific, concrete example of 'especially prominent' representation. Option B provides the specific statistic (Rwanda, 60%+) that illustrates the claim. Options A and C are too vague. Option D is a generalization, not a specific example." },

  { id:12, section:"rw", module:1, topic:"Claims Questions",
    text:"Researchers studying wolf behavior found that dominant wolves typically lead group hunting, territory marking, and pack movement. However, a follow-up study showed that when dominant wolves were temporarily removed, junior members were still able to coordinate hunting activities effectively, suggesting that _________.\n\nWhich choice most logically completes the text?",
    options:["dominant wolves play a necessary and irreplaceable role in pack coordination","junior wolves are incapable of independent coordination without guidance","pack leadership is not solely dependent on a dominant individual for successful coordination","dominant wolves are less essential to hunting than to territory marking"], answer:2,
    explanation:"The follow-up study shows junior wolves can coordinate without dominant wolves, meaning leadership is not entirely dependent on one individual. Option C correctly captures this. Options A and B contradict the study. Option D makes a claim the study doesn't support." },

  { id:13, section:"rw", module:1, topic:"Conclusions",
    text:"Stonehenge has been altered numerous times over its long history, suggesting shifting scientific, religious, ceremonial, and social functions depending on the era. Our understanding of the true purpose of Stonehenge remains an enigmatic puzzle, suggesting that _________.\n\nWhich choice most logically completes the text?",
    options:["Stonehenge likely would not have been used for such diverse purposes had it existed in a less central location","alterations to structural design affect different types of monuments in different ways","the development of Stonehenge over multiple eras makes its original function a point of contention for archaeologists","the design of Stonehenge made it more useful for religious purposes than for astronomy"], answer:2,
    explanation:"The passage says Stonehenge's purpose 'remains an enigmatic puzzle' and alterations suggest different functions over time. Option C correctly concludes this makes its original function contested. Options A, B, and D introduce ideas not supported by the text." },

  { id:14, section:"rw", module:1, topic:"Conclusions",
    text:"Lisa Fenk and her team at The Rockefeller University discovered that certain neurons in the mushroom body—a brain structure involved in learning—are active both when a memory is formed and when it is later recalled. This suggests the mushroom body plays a dual role in memory formation and retrieval, which may have implications for understanding memory processes in other animals.\n\nWhich choice best states the main conclusion?",
    options:["Fruit flies have more complex brains than previously thought","The mushroom body is essential for all cognitive functions in fruit flies","Certain neurons are involved in both forming and recalling memories in fruit flies","Lisa Fenk's research has definitively explained how all animals store memories"], answer:2,
    explanation:"The passage's main finding is that specific neurons in the mushroom body are active during both memory formation and recall. Option C directly captures this. Option A is too broad. Option B overstates the claim. Option D is not supported." },

  { id:15, section:"rw", module:1, topic:"Conclusions",
    text:"A research team found that fish exposed to high concentrations of microplastics showed alterations in feeding behavior and reduced reproductive success. Some scientists argue microplastics pose a significant threat to marine ecosystems. However, other researchers caution that controlled lab conditions may not accurately reflect the open ocean.\n\nWhich inference is best supported by the passage?",
    options:["Microplastics definitively threaten all forms of marine life","Evidence regarding microplastics' impact requires further field research to be conclusive","Microplastics have no measurable effect on fish in natural ocean environments","Scientists unanimously agree that microplastic pollution is the greatest threat to ocean health"], answer:1,
    explanation:"The passage presents lab evidence of harm but notes researchers caution about lab vs. open ocean conditions. This supports the inference that more field research is needed. Options A, C, and D are too extreme or contradicted by the passage." },

  { id:16, section:"rw", module:1, topic:"Verb Forms",
    text:"The International Dark-Sky Association _________ light pollution since the 1980s, arguing that excessive artificial light disrupts ecosystems, wastes energy, and prevents millions of people from seeing the night sky clearly.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["combats","has been combating","will combat","combat"], answer:1,
    explanation:"'Since the 1980s' signals an action that began in the past and continues to the present, requiring present perfect progressive: 'has been combating.' (A) and (D) are simple present. (C) is future tense." },

  { id:17, section:"rw", module:1, topic:"Punctuation",
    text:"In 1839, English artist Frederick Catherwood joined an expedition to Central America, where he saw over forty sites full of _________ creating detailed drawings and paintings of the ruins, Catherwood helped to reintroduce the Mayan civilization to the Western world.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["ruins by","ruins, by","ruins. By","ruins and by"], answer:2,
    explanation:"The two clauses are independent and must be separated by a period. 'ruins. By' correctly makes each clause its own sentence. Options A and D create run-ons. Option B creates a comma splice." },

  { id:18, section:"rw", module:1, topic:"Verb Forms",
    text:"Paleontologist Keyron Hickman-Lewis's analysis of 3.48-billion-year-old rocks from the Dresser Formation in Western Australia _________ scientists analyze rocks that the Perseverance rover is collecting on Mars.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["will help","helping","helps","have helped"], answer:2,
    explanation:"The subject 'analysis' is singular, requiring singular present tense. 'Helps' agrees with the singular subject. 'Have helped' is plural. 'Will help' is future. 'Helping' is not a finite verb." },

  { id:19, section:"rw", module:1, topic:"Verb Forms",
    text:"American physicists determined that neutrinos—subatomic particles that have no electric charge, very small mass, and a spin of one-half—_________ in three distinct varieties, which they called flavors.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["exist","existing","are existing","existed"], answer:0,
    explanation:"This reports an ongoing scientific fact, requiring simple present tense. 'Exist' is correct. 'Existing' is a participle, not a finite verb. 'Are existing' is non-standard for stative verbs. 'Existed' is past tense and would imply this is no longer true." },

  { id:20, section:"rw", module:1, topic:"Punctuation",
    text:"The National Day of Listening, founded by StoryCorps, is a day encouraging Americans to record the stories of their loved ones _________ the interviews are then submitted to the Library of Congress as part of an ongoing effort to create an oral history of the United States.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["ones and","ones,","ones; and","ones;"], answer:3,
    explanation:"Two independent clauses must be joined with a semicolon alone (without a conjunction). Option D correctly uses a semicolon. Option C incorrectly pairs a semicolon with 'and.' Options A and B create run-ons or comma splices." },

  { id:21, section:"rw", module:1, topic:"Transition Questions",
    text:"The Supreme Court case Afroyim v. Rusk ruled that Americans cannot be involuntarily stripped of citizenship. This ruling overruled Perez v. Brownell, which mandated loss of citizenship after voting in another country's election. _________ Perez v. Brownell prompted a discussion about voluntary versus involuntary choices; according to the ruling, citizenship could not be removed for unintentional actions.\n\nWhich choice completes the text with the most logical transition?",
    options:["Actually,","Nevertheless,","Additionally,","For instance,"], answer:3,
    explanation:"The following sentence gives a specific example of how Perez v. Brownell sparked a particular type of discussion. 'For instance' introduces examples. 'Actually' implies correction. 'Nevertheless' implies contrast. 'Additionally' adds a new, unrelated point." },

  { id:22, section:"rw", module:1, topic:"Rhetorical Synthesis",
    text:"While researching a topic, a student has taken the following notes:\n- Megalodons were ancient sharks that lived between 23 million and 2.6 million years ago.\n- In a 2022 study, paleobiologist Catalina Pimiento and colleagues analyzed fossil evidence of the megalodon.\n- They used rare megalodon fossils and scans of modern great white sharks to create a 3D model, revealing the shark to be around 50 feet long.\n- They found the megalodon could swim faster than a great white shark, travel across multiple oceans, and could consume an orca in five bites.\n\nThe student wants to present the study and its findings. Which choice most effectively uses relevant information?",
    options:["In a 2022 study, Catalina Pimiento and colleagues used fossil records and scans of modern sharks to determine the megalodon was around 50 feet long, could travel across multiple oceans, and could consume an orca.","In 2022, Catalina Pimiento and colleagues studied rare megalodon fossils and scans of great white sharks to learn more about the megalodon's life.","Megalodon fossils and scans of modern great white sharks were the focus of a 2022 study.","In a 2022 study, Catalina Pimiento and colleagues analyzed fossils of the megalodon, an ancient shark that lived up to 23 million years ago."], answer:0,
    explanation:"The task is to present the study AND its findings. Option A presents the method and three key findings (size, range, diet). Option B mentions only the goal, not the findings. Options C and D omit key findings." },

  { id:23, section:"rw", module:1, topic:"Rhetorical Synthesis",
    text:"While researching a topic, a student has taken the following notes:\n- Franz Joseph Haydn was an Austrian-born classical composer of symphonies and concertos.\n- In 1798, he completed The Creation, which depicts biblical stories from the Book of Genesis.\n- A prominent feature is that different choral soloists represent Adam and Eve.\n- Another prominent feature is tone painting, a technique by which music depicts narrative elements.\n\nThe student wants to introduce The Creation to an audience already familiar with Franz Joseph Haydn. Which choice most effectively uses relevant information?",
    options:["The Creation was not the only piece written by Austrian-born composer Franz Joseph Haydn.","Franz Joseph Haydn employed both soloists and tone painting in his work.","In addition to his composition The Creation, Franz Joseph Haydn produced other symphonies and concertos.","Franz Joseph Haydn's The Creation retells biblical stories from the Book of Genesis with choral soloists and tone painting to convey the story."], answer:3,
    explanation:"Since the audience already knows Haydn, the introduction must focus on The Creation itself. Option D describes the composition's content (biblical stories, soloists, tone painting) without re-explaining who Haydn is. Options A, B, and C focus on Haydn rather than the composition." },

  { id:24, section:"rw", module:1, topic:"Rhetorical Synthesis",
    text:"While researching a topic, a student has taken the following notes:\n- There are 118 elements on the periodic table.\n- Six elements are classified as alkaline earth metals.\n- One of those elements is beryllium (chemical symbol: Be).\n- Another of those elements is strontium (chemical symbol: Sr).\n\nThe student wants to emphasize a similarity between beryllium and strontium. Which choice most effectively uses relevant information?",
    options:["Beryllium (Be) and strontium (Sr) are different elements.","Among the 118 elements on the periodic table is strontium, which is an alkaline earth metal.","Beryllium's chemical symbol is Be, while strontium's chemical symbol is Sr.","Both beryllium and strontium are classified as alkaline earth metals."], answer:3,
    explanation:"The task is to 'emphasize a similarity.' Option D directly states the shared classification (both are alkaline earth metals). Option A highlights a difference. Option B mentions only strontium. Option C highlights different symbols—a difference." },

  { id:25, section:"rw", module:1, topic:"Rhetorical Synthesis",
    text:"While researching a topic, a student has taken the following notes:\n- Maya Deren was a Ukrainian-born American filmmaker.\n- Her 1943 experimental short film Meshes of the Afternoon was one of her most acclaimed works.\n- The film was completely silent until 1959, when a score was added.\n- The film repeatedly features shots of the same objects (a knife, a key, a flower, a spinning record).\n- The film depicts the same events several times from different points of view.\n\nThe student wants to introduce Maya Deren and Meshes of the Afternoon to a new audience. Which choice most effectively uses relevant information?",
    options:["Meshes of the Afternoon was a highly acclaimed experimental short directed by a Ukrainian-born American filmmaker.","In 1943, American filmmaker Maya Deren released one of her most acclaimed films, Meshes of the Afternoon, an experimental silent film featuring repeated shots of the same objects and repeated events from different points of view.","Maya Deren directed Meshes of the Afternoon in 1943.","Meshes of the Afternoon, an acclaimed experimental film, was completely silent and featured repeated shots of a knife, a key, a flower, and a spinning record."], answer:1,
    explanation:"For a new audience, the introduction must include both the filmmaker and the film's key features. Option B names Maya Deren, gives the film title and year, and describes two distinctive features. Options A and D omit the filmmaker's name. Option C is too brief." },

  { id:26, section:"rw", module:1, topic:"Rhetorical Synthesis",
    text:"While researching a topic, a student has taken the following notes:\n- Agnes Varda was a Belgian-born French director.\n- In 2015, she was the first woman to receive an honorary Palme d'Or at the Cannes Film Festival.\n- Her film Cleo from 5 to 7 shows two hours in the life of a pop singer.\n- The film mixes documentary and fiction elements, depicted in real time.\n\nThe student wants to introduce Cleo from 5 to 7 to an audience unfamiliar with the film and its director. Which choice most effectively uses relevant information?",
    options:["Cleo from 5 to 7 is a film that mixes documentary with fiction elements and depicts two hours in the life of a pop singer.","Agnes Varda, who directed Cleo from 5 to 7 and received an honorary Palme d'Or at Cannes, was born in Belgium and moved to France.","Agnes Varda's film Cleo from 5 to 7 is highly acclaimed for its portrayal of two hours in the life of a pop singer.","A highly acclaimed film mixing documentary and fiction, Cleo from 5 to 7 was directed by Agnes Varda, the first woman to receive an honorary Palme d'Or at the Cannes Film Festival."], answer:3,
    explanation:"Since the audience is unfamiliar with both the film AND the director, the best answer introduces both. Option D describes the film and identifies Varda with her notable achievement. Option A omits the director. Option B focuses on Varda without describing the film. Option C omits Varda's distinction." },

  { id:27, section:"rw", module:1, topic:"Rhetorical Synthesis",
    text:"While researching a topic, a student has taken the following notes:\n- In 2022, Ruth Peters and colleagues studied the relationship between blood pressure and risk of dementia in older adults.\n- They found that a decrease in blood pressure was correlated with a decrease in dementia risk.\n- When systolic blood pressure was 100 mmHg, the risk of dementia was 0.02.\n- When systolic blood pressure was 140 mmHg, the risk was 0.03.\n- When systolic blood pressure was 180 mmHg, the risk was 0.04.\n\nThe student wants to summarize the study. Which choice most effectively uses relevant information?",
    options:["Ruth Peters's 2022 study found that as blood pressure increased, the risk of dementia increased.","For a 2022 study, researchers from Australia and the UK gathered data on blood pressure and risk of dementia in older-age subjects.","Ruth Peters and her colleagues sought to understand the relationship between blood pressure and dementia risk, so they conducted a study.","Knowing that there was a link between blood pressure and dementia risk, Ruth Peters measured people's risk of dementia, which was as high as 0.04 in some cases."], answer:0,
    explanation:"A summary should capture the study's topic and key finding. Option A names the researcher, states the topic, and presents the main finding (higher BP = higher dementia risk). Option B only describes data collection. Option C only describes the intent. Option D misrepresents the study." }
];

const E7_RW_M2 = [
  { id:28, section:"rw", module:2, topic:"Vocabulary",
    text:"Conservationists working to protect the Amur leopard have employed a _________ approach, combining wildlife corridor creation, anti-poaching patrols, and community education programs to address the multiple threats facing the species.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["multifaceted","leisurely","redundant","theoretical"], answer:0,
    explanation:"The passage describes several different types of conservation strategies used together. 'Multifaceted' (having many aspects) best describes this comprehensive approach. Options B, C, and D are not supported." },

  { id:29, section:"rw", module:2, topic:"Vocabulary",
    text:"In a 2021 study, experts observed that sales of electric vehicles had grown substantially each year and _________ that sales would reach 10 million by the end of the decade, given that no dramatic market shifts occurred.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["projected","guaranteed","rejected","denied"], answer:0,
    explanation:"The passage describes experts making a forward-looking estimate based on observed trends. 'Projected' means to forecast, which fits. (B) guaranteed is Extreme Language. (C) and (D) are opposite in meaning." },

  { id:30, section:"rw", module:2, topic:"Vocabulary",
    text:"Physicist Kip Thorne's theoretical work on gravitational waves, which earned him a share of the 2017 Nobel Prize in Physics, _________ our understanding of how gravitational waves travel through space when scientists later confirmed their actual detection.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["confused","clarified","revolutionized","belittled"], answer:1,
    explanation:"Thorne's theoretical work was later confirmed by actual detection, meaning it improved and 'clarified' our understanding. (A) confused and (D) belittled are opposite in tone. (C) revolutionized is Extreme Language—his work confirmed something already predicted." },

  { id:31, section:"rw", module:2, topic:"Vocabulary",
    text:"The Navajo Nation Council voted to _________ established principles of sovereignty when crafting their governance framework, incorporating traditional law alongside the structure provided by their 1938 Tribal Council resolution.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    options:["dismiss","uphold","challenge","ignore"], answer:1,
    explanation:"The passage describes the Council incorporating established principles into their governance framework, meaning they respected and maintained those principles. 'Uphold' (to maintain/support) fits. Options A, C, and D imply rejection." },

  { id:32, section:"rw", module:2, topic:"Purpose Questions",
    text:"The narwhal is a medium-sized toothed whale found primarily in Arctic waters. Its most distinctive feature is its long spiral tusk—actually an elongated tooth that can grow up to 10 feet. Researchers have found that the tusk contains millions of nerve endings and may be used by males to sense environmental conditions.\n\nWhat is the primary purpose of the passage?",
    options:["To argue that narwhals are the most fascinating marine mammals","To describe the narwhal and provide information about its distinctive tusk","To compare narwhals with other toothed whales in Arctic waters","To explain why narwhal tusks have been misunderstood by scientists"], answer:1,
    explanation:"The passage provides a description of the narwhal, its habitat, and detailed information about its tusk including size and sensory function. Option B accurately captures this purpose. The other options describe purposes not present in the passage." },

  { id:33, section:"rw", module:2, topic:"Purpose Questions",
    text:"Text 1: Proponents of universal basic income (UBI) argue that providing every citizen a guaranteed income would reduce poverty, simplify the welfare system, and enable people to pursue education or entrepreneurship without financial risk.\n\nText 2: Critics of UBI contend that such programs would be prohibitively expensive, could reduce work incentives, and might lead to inflation as more money circulates without a corresponding increase in productivity.\n\nWhich of the following best describes the relationship between the two texts?",
    options:["Text 2 provides evidence supporting the claims in Text 1","Text 2 presents counterarguments to the position outlined in Text 1","Text 2 elaborates on a specific example mentioned in Text 1","Text 2 reaches the same conclusion as Text 1 through different reasoning"], answer:1,
    explanation:"Text 1 argues for UBI, while Text 2 argues against it (cost, work incentives, inflation). Text 2 therefore presents counterarguments to the position in Text 1." },

  { id:34, section:"rw", module:2, topic:"Purpose Questions",
    text:"During the Renaissance, Florence became a major center for art, science, and philosophy, largely due to the patronage of the Medici family. By financially supporting artists, architects, and scholars, the Medici enabled works by Botticelli, Michelangelo, and Leonardo da Vinci.\n\nThe author mentions the Medici family primarily in order to:",
    options:["argue that the Medici were more important than the artists they supported","explain how financial patronage contributed to the cultural flourishing of Renaissance Florence","suggest that art can only flourish under wealthy patrons","compare Florentine art with art produced in other Italian cities"], answer:1,
    explanation:"The author mentions the Medici to explain that their financial support enabled the artistic and intellectual achievements of Renaissance Florence. Option B captures this correctly." },

  { id:35, section:"rw", module:2, topic:"Purpose Questions",
    text:"Text 1: Linguist Daniel Everett claimed that the Piraha language lacks recursion—the ability to embed clauses within clauses—challenging Chomsky's theory that recursion is universal to all human languages.\n\nText 2: Chomsky and other linguists dispute Everett's findings, arguing that his analyses of Piraha grammar are flawed and that the apparent lack of recursion can be explained by cultural, rather than linguistic, factors.\n\nHow would the author of Text 2 most likely respond to Text 1?",
    options:["By arguing that Everett's research methods were insufficient to support his conclusions","By suggesting that Piraha is fundamentally different from all other languages studied","By accepting that Piraha is an exception to Chomsky's universal grammar theory","By proposing that recursion is not a necessary feature of language"], answer:0,
    explanation:"Text 2 explicitly says Everett's 'analyses are flawed,' meaning his methodology is disputed. Option A best captures this response. Options C and D would support Everett, which Text 2 opposes." },

  { id:36, section:"rw", module:2, topic:"Charts Questions",
    text:"A researcher studying urban tree cover found that neighborhoods with higher median incomes tended to have greater tree canopy coverage and concluded that economic inequality is mirrored in access to urban green spaces.\n\nWhich finding, if true, would most directly weaken the researcher's conclusion?",
    options:["Neighborhoods with older housing stock tend to have more mature trees regardless of income level","Higher income residents are more likely to advocate for tree planting programs","Urban trees provide the greatest cooling benefits in the warmest months of the year","Lower income neighborhoods tend to have higher rates of tree removal due to storm damage"], answer:0,
    explanation:"If older housing stock (not income) explains tree cover, then income inequality would not be the cause of the disparity, weakening the conclusion. Option A introduces an alternative explanation. Options B and D support the conclusion. Option C is irrelevant." },

  { id:37, section:"rw", module:2, topic:"Claims Questions",
    text:"Scholars debate whether Shakespeare authored all the plays attributed to him. Some argue that the plays show intimate knowledge of law, medicine, and foreign courts unlikely for someone of Shakespeare's limited formal education to possess.\n\nWhich statement, if true, would most effectively counter this argument?",
    options:["Shakespeare collaborated with other playwrights on some of his later works","Many people in Elizabethan England acquired specialized knowledge through self-study and social connections","Several of Shakespeare's contemporaries also wrote plays dealing with similar themes","The plays attributed to Shakespeare were performed during his lifetime without dispute"], answer:1,
    explanation:"The skeptics' argument assumes Shakespeare couldn't have acquired specialized knowledge given his background. Option B directly counters this by showing that self-study and social connections could provide such knowledge in Elizabethan England." },

  { id:38, section:"rw", module:2, topic:"Claims Questions",
    text:"Ecologists found that controlled burns significantly reduced the intensity of subsequent wildfires and concluded that regular prescribed burning is an effective long-term strategy for wildfire prevention.\n\nWhich additional finding would most strengthen this conclusion?",
    options:["Areas that received controlled burns showed less damage during subsequent wildfires than adjacent unburned areas","Controlled burns can occasionally escape their perimeters and become uncontrollable","Some communities near wildfire-prone areas have opposed controlled burn programs","The cost of conducting controlled burns has increased significantly in recent years"], answer:0,
    explanation:"Option A directly supports the conclusion that controlled burns reduce wildfire damage by showing burned areas fared better during subsequent fires. Options B, C, and D undermine or are irrelevant to the conclusion." },

  { id:39, section:"rw", module:2, topic:"Charts Questions",
    text:"Researchers tracking sea turtle nesting found that nests per mile increased by 15% over ten years in areas with beach lighting ordinances, compared to 3% without ordinances. They argued that reducing artificial light is an effective conservation strategy.\n\nWhich of the following, if true, would most strengthen this conclusion?",
    options:["Sea turtles are known to be disoriented by artificial light, which can deter them from nesting","Beach lighting ordinances are difficult to enforce consistently","Several other environmental factors such as water temperature also affect nesting rates","Some beaches with lighting ordinances saw no change in nesting rates"], answer:0,
    explanation:"If sea turtles are biologically disoriented by artificial light (Option A), this provides a mechanism explaining why reduced lighting increases nesting, directly strengthening the conclusion. Options B and D weaken it. Option C introduces a confounding factor." },

  { id:40, section:"rw", module:2, topic:"Claims Questions",
    text:"Epidemiologists found that neighborhoods with higher rates of green space access had significantly lower rates of respiratory illnesses and concluded that green space may play a protective role against respiratory disease.\n\nWhich best describes a potential flaw in the researchers' reasoning?",
    options:["The researchers did not consider that higher income neighborhoods may have both more green space and better access to healthcare","The study focused only on respiratory illnesses and did not examine other types of disease","The researchers collected data over only a single year","Green spaces in urban areas are often poorly maintained"], answer:0,
    explanation:"A key flaw is that higher income neighborhoods tend to have both more green space AND better healthcare access—meaning healthcare (not green space) could explain lower illness rates. This confounding variable was not accounted for." },

  { id:41, section:"rw", module:2, topic:"Conclusions",
    text:"In a study of ancient trade routes, archaeologists discovered artifacts from Central Asian civilizations in burial sites across Northern Europe, dating back over two thousand years. These findings suggest that _________.\n\nWhich choice most logically completes the text?",
    options:["Central Asian civilizations were more advanced than Northern European ones during this period","long-distance trade and cultural exchange between Central Asia and Northern Europe occurred far earlier than previously documented","Northern European burial practices were heavily influenced by Central Asian religious traditions","the trade routes connecting these regions were established primarily for military purposes"], answer:1,
    explanation:"The presence of Central Asian artifacts in Northern European burial sites suggests trade between these regions more than two thousand years ago. Option B correctly concludes this trade occurred earlier than previously documented." },

  { id:42, section:"rw", module:2, topic:"Conclusions",
    text:"Scientists found that many alpine plant species are shifting their ranges to higher elevations as temperatures rise. However, some species appear to be thriving at their current elevations despite warming, possibly due to their ability to tolerate a wider range of conditions. These findings suggest that _________.\n\nWhich choice most logically completes the text?",
    options:["all alpine plant species will eventually go extinct due to climate change","the response of plant species to climate change may vary depending on their individual tolerances","shifting ranges is the most effective adaptation strategy for alpine plants","warmer temperatures will ultimately benefit all alpine plant ecosystems"], answer:1,
    explanation:"The passage shows two different responses: some plants shift ranges, others thrive in place. This variation suggests species respond differently based on individual characteristics. Option B correctly captures this nuanced conclusion." },

  { id:43, section:"rw", module:2, topic:"Conclusions",
    text:"The ruins of ancient Pompeii, preserved by volcanic ash from the 79 CE eruption of Vesuvius, have provided historians with an extraordinarily detailed view of Roman daily life. Artifacts, murals, and preserved remains have offered insights that written historical records alone could not. Scholars have argued that Pompeii is one of the most valuable archaeological sites in the world, suggesting that _________.\n\nWhich choice most logically completes the text?",
    options:["volcanic eruptions have more often than not preserved rather than destroyed ancient cities","physical remains can provide historical insights unavailable through written records alone","the Roman Empire's influence on architecture was primarily visible in its cities","ancient ruins are only valuable when preserved by natural disasters"], answer:1,
    explanation:"The passage explicitly states preserved remains offered 'insights that written historical records alone could not.' Option B directly reflects this conclusion. Option A is an overgeneralization. Option C is too narrow. Option D incorrectly uses 'only.'" },

  { id:44, section:"rw", module:2, topic:"Verb Forms",
    text:"City street artists _________ contrasting views on graffiti, including those of the artists themselves, who explain their motivations for creating art that is technically illegal.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["present","have presented","presenting","presents"], answer:0,
    explanation:"The subject 'City street artists' is plural, requiring plural present tense. 'Present' correctly agrees with the plural subject. 'Presents' is singular. 'Have presented' implies completed past action. 'Presenting' is not a finite verb." },

  { id:45, section:"rw", module:2, topic:"Punctuation",
    text:"Unlike all other waterfowl, the black-headed duck does not build a _________ it deposits its eggs into other birds' nests, where they are incubated along with the parents' own eggs.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["nest; instead,","nest, instead;","nest instead,","nest, instead,"], answer:0,
    explanation:"'nest; instead,' correctly uses a semicolon to join two independent clauses and a comma after the transition word 'instead.' Option B places the semicolon incorrectly. Options C and D create comma splices." },

  { id:46, section:"rw", module:2, topic:"Verb Forms",
    text:"Chemist Stephanie Kwolek _________ tire materials for DuPont when she unexpectedly found a new polymer with fibers that aligned parallel to each other; later trademarked as Kevlar, her discovery is now used in products from phones to body armor.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["will research","was researching","has been researching","researches"], answer:1,
    explanation:"'Was researching' (past progressive) is correct because it describes an ongoing past action interrupted by another event (finding the polymer). The 'was doing X when Y happened' structure requires past progressive." },

  { id:47, section:"rw", module:2, topic:"Verb Forms",
    text:"Herpetologist Teresa Camacho Badani led an expedition into Bolivia's Yungas cloud forests to collect specimens of an endangered species of _________ known only from a single individual found in 2009, the Sehuencas water frog is now being bred in captivity to restore the population.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["amphibian previously","amphibian but previously","amphibian. Previously","amphibian, previously"], answer:2,
    explanation:"'amphibian. Previously' creates a new sentence starting with 'Previously,' which correctly introduces background information before explaining current conservation efforts. Options A and D create run-on sentences. Option B uses 'but' incorrectly." },

  { id:48, section:"rw", module:2, topic:"Punctuation",
    text:"In 2022, a helicopter landed in Palm Springs after completing a pioneering 24-mile _________ by a rechargeable battery and carrying a 50-pound weight to simulate a transport care system, the fully electric helicopter was copiloted by Martine Rothblatt and Ric Webb.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["flight, powered","flight and powered","flight powered","flight. Powered"], answer:0,
    explanation:"'flight, powered' correctly uses a comma before the participial phrase 'powered by a rechargeable battery,' which modifies 'flight.' Option D creates a fragment. Options B and C are grammatically awkward." },

  { id:49, section:"rw", module:2, topic:"Punctuation",
    text:"The Voyager 2 spacecraft was launched by NASA in 1977 to take close-up pictures of Uranus and _________ find the furthest extent of the Solar System; and collect data about interstellar space beyond the Solar System.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["Neptune, the previously unexplored outer planets;","Neptune the previously unexplored outer planets,","Neptune, the previously unexplored outer planets,","Neptune; the previously unexplored outer planets,"], answer:2,
    explanation:"'Neptune, the previously unexplored outer planets,' correctly uses commas to set off the appositive phrase. A semicolon before an appositive (options A and D) would be incorrect. Option B omits necessary punctuation." },

  { id:50, section:"rw", module:2, topic:"Punctuation",
    text:"Ethiopian American artist Julie Mehretu converts projected blueprints and photographs into abstract forms on canvas, working in a style that art _________ 'a complex dance between abstraction and representation.'\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    options:["journalist Maximilliano Duron, calls,","journalist Maximilliano Duron calls","journalist, Maximilliano Duron, calls","journalist, Maximilliano Duron, calls,"], answer:1,
    explanation:"'journalist Maximilliano Duron calls' is correct. 'Maximilliano Duron' is essential information identifying which journalist, so no commas should set it off. Options C and D incorrectly treat the name as non-essential. Option A adds an unnecessary comma after 'calls.'" },

  { id:51, section:"rw", module:2, topic:"Transition Questions",
    text:"While local legend credits French cheesemaker Marie Harel with inventing Camembert, she likely learned the technique from a priest who passed along the recipe during the French Revolution. _________ Harel will likely continue to receive recognition for the cheese, as her descendants created a large-scale factory to mass-produce it.\n\nWhich choice completes the text with the most logical transition?",
    options:["Nevertheless,","Furthermore,","Indeed,","Consequently,"], answer:0,
    explanation:"The first sentence casts doubt on Harel's sole credit. 'Nevertheless' (despite this) correctly signals that, in spite of this doubt, she will continue to receive recognition. 'Furthermore' adds a supporting point. 'Indeed' agrees with the prior statement. 'Consequently' implies a direct result." },

  { id:52, section:"rw", module:2, topic:"Transition Questions",
    text:"The Chicxulub crater is believed to be the result of an asteroid impact. Many researchers have found evidence supporting the hypothesis that the impact caused the Cretaceous-Paleogene extinction event. _________ the surrounding areas contain shocked quartz that is only formed through high pressure and tektites often ejected from meteorites.\n\nWhich choice completes the text with the most logical transition?",
    options:["As a result,","However,","In other words,","Specifically,"], answer:3,
    explanation:"'Specifically' introduces specific examples or details supporting the general claim (researchers found evidence). The shocked quartz and tektites are specific pieces of evidence. 'As a result' implies causation. 'However' implies contrast. 'In other words' implies restatement." },

  { id:53, section:"rw", module:2, topic:"Transition Questions",
    text:"Fingerprinting is used to settle fraud cases, but suspects could claim they handled a document before fraudulent material was printed on it. By placing a layer of gelatin over a fingerprint and reacting it in a vacuum chamber, the fingerprint will appear 'masked' if placed before printing. _________ using this new technique, court cases will have more reliable evidence regarding a suspect's knowledge of committed fraud.\n\nWhich choice completes the text with the most logical transition?",
    options:["Nevertheless,","Thus,","Similarly,","However,"], answer:1,
    explanation:"'Thus' signals a logical result. Since the technique can determine when a fingerprint was placed, the logical result is that courts will have more reliable evidence. 'Nevertheless' and 'However' imply contrast. 'Similarly' implies comparison." },

  { id:54, section:"rw", module:2, topic:"Rhetorical Synthesis",
    text:"While researching a topic, a student has taken the following notes:\n- Researchers have been investigating the effects of sports-related concussions on the brain.\n- Biomarkers in the blood indicative of tissue injury were found in participants two weeks following their last injuries.\n- Extensive white matter damage deeper in the brain was found in participants six months following their last injuries.\n- Many participants had more than one sports-related concussion.\n\nThe student wants to make and support a generalization about sports-related concussions. Which choice most effectively uses relevant information?",
    options:["There are short- and long-term consequences of a sports-related concussion on the brain: two weeks following injury there are biomarkers in the blood indicative of tissue injury, while six months following injury there is damage to the white matter deeper in the brain.","There are many effects of sports-related concussions on the brain, especially in participants with more than one sports-related concussion.","One example of a long-term consequence is damage to white matter deeper in the brain found in participants six months following their last injury.","Many participants had more than one sports-related concussion, and blood biomarkers showed signs of tissue injury two weeks following their concussions."], answer:0,
    explanation:"The task is to 'make and support a generalization.' Option A makes a clear generalization (short- and long-term consequences exist) and supports it with two specific pieces of evidence. Option B is vague. Option C only addresses long-term. Option D doesn't make a generalization." }
];

const QUESTIONS7 = [...E7_RW_M1, ...E7_RW_M2];

const MODULE_MAP7 = {
  1: { id: 1, label: 'Module 1 \u2013 Reading & Writing', timeMin: 32, startIdx: 0, count: 27 },
  2: { id: 2, label: 'Module 2 \u2013 Reading & Writing', timeMin: 32, startIdx: 27, count: 27 }
};

const TOPIC_MAP7 = {
  'Vocabulary':           { name: 'Vocabulary',           questions: QUESTIONS7.filter(q => q.topic === 'Vocabulary').map(q => q.id) },
  'Purpose Questions':    { name: 'Purpose Questions',    questions: QUESTIONS7.filter(q => q.topic === 'Purpose Questions').map(q => q.id) },
  'Claims Questions':     { name: 'Claims Questions',     questions: QUESTIONS7.filter(q => q.topic === 'Claims Questions').map(q => q.id) },
  'Conclusions':          { name: 'Conclusions',          questions: QUESTIONS7.filter(q => q.topic === 'Conclusions').map(q => q.id) },
  'Verb Forms':           { name: 'Verb Forms',           questions: QUESTIONS7.filter(q => q.topic === 'Verb Forms').map(q => q.id) },
  'Punctuation':          { name: 'Punctuation',          questions: QUESTIONS7.filter(q => q.topic === 'Punctuation').map(q => q.id) },
  'Transition Questions': { name: 'Transition Questions', questions: QUESTIONS7.filter(q => q.topic === 'Transition Questions').map(q => q.id) },
  'Rhetorical Synthesis': { name: 'Rhetorical Synthesis', questions: QUESTIONS7.filter(q => q.topic === 'Rhetorical Synthesis').map(q => q.id) },
  'Dual Texts Questions': { name: 'Dual Texts Questions', questions: QUESTIONS7.filter(q => q.topic === 'Dual Texts Questions').map(q => q.id) },
  'Charts Questions':     { name: 'Charts Questions',     questions: QUESTIONS7.filter(q => q.topic === 'Charts Questions').map(q => q.id) }
};
