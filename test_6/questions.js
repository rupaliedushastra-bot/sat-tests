// =============================================
// Digital SAT – Topic Test 6: Critical Thinking & Data
// 25 Questions | Single Timed Module (32 min)
// answers: 0=A, 1=B, 2=C, 3=D
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "text": "A recent study on sleep patterns found that individuals who get between seven to eight hours of sleep per night have the highest levels of cognitive functioning. The study, conducted by researchers at a leading university, analyzed data from over 1,000 participants aged 18 to 65. Those who slept less than seven hours or more than eight hours exhibited lower cognitive performance.\n\nWhat is the main finding of this study?",
    "options": [
      "Individuals who sleep more than eight hours have the highest cognitive functioning.",
      "Individuals who sleep between seven to eight hours per night have the highest levels of cognitive functioning.",
      "Sleep duration does not affect cognitive performance.",
      "Cognitive performance improves with less than seven hours of sleep."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage directly states seven to eight hours is linked to highest cognitive functioning. Options A and D directly contradict the finding. Option C contradicts the study's entire premise.",
    "topic": "Data Interpretation"
  },
  {
    "id": 2,
    "text": "Despite advancements in renewable energy, many countries continue to rely heavily on fossil fuels for electricity generation. This reliance contributes to environmental pollution and climate change, necessitating urgent action to transition to cleaner energy sources.\n\nWhat is the main environmental concern associated with reliance on fossil fuels?",
    "options": [
      "The depletion of natural gas reserves.",
      "Increased levels of air pollution and climate change.",
      "The rise in global population.",
      "The reduction of renewable energy sources."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage explicitly states fossil fuel reliance \"contributes to environmental pollution and climate change.\" Options A, C, and D introduce topics not mentioned as the main concern.",
    "topic": "Evidence-Based Claim"
  },
  {
    "id": 3,
    "text": "Climate change is causing more frequent and severe weather events, such as hurricanes, floods, and wildfires. These events have devastating impacts on communities, economies, and ecosystems, highlighting the urgent need for effective climate policies.\n\nWhich of the following is best supported by the passage?",
    "options": [
      "Increased agricultural productivity is a consequence of climate change.",
      "Decreased biodiversity is the only concern of climate policies.",
      "Global temperatures have stabilized due to recent policies.",
      "Climate change leads to more frequent and severe weather events that harm communities and ecosystems."
    ],
    "answer": 3,
    "explanation": "Choice D is correct. Option D directly summarizes both core claims: more frequent weather events AND devastating impacts. Options A and C contradict the passage. Option B narrows to biodiversity, which the passage does not emphasize.",
    "topic": "Evidence-Based Claim"
  },
  {
    "id": 4,
    "text": "Scientists have discovered a new species of orchid in the rainforests of South America. This unique plant has petals that resemble the wings of a butterfly, which helps it attract specific pollinators. The discovery highlights the biodiversity of the region and the importance of conservation efforts.\n\nWhat is one reason the new orchid species is considered unique?",
    "options": [
      "It grows in deserts.",
      "It has petals that resemble butterfly wings.",
      "It requires no sunlight to grow.",
      "It can survive extreme cold temperatures."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage explicitly states the orchid \"has petals that resemble the wings of a butterfly.\" Options A, C, and D introduce details — desert growth, no sunlight, cold survival — none of which appear in the passage.",
    "topic": "Detail Identification"
  },
  {
    "id": 5,
    "text": "The ancient city of Pompeii was buried under volcanic ash after the eruption of Mount Vesuvius in 79 AD. The ash preserved the city remarkably well, providing historians and archaeologists with a detailed snapshot of life in the Roman Empire.\n\nWhat allowed historians and archaeologists to get a detailed snapshot of life in Pompeii?",
    "options": [
      "The volcanic ash that buried and preserved the city.",
      "The city's ancient trade routes.",
      "Its location near the Mediterranean Sea.",
      "The written accounts of Roman historians."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The passage directly states: \"The ash preserved the city remarkably well, providing historians and archaeologists with a detailed snapshot.\" Options B, C, and D introduce factors not mentioned in the passage.",
    "topic": "Detail Identification"
  },
  {
    "id": 6,
    "text": "Artificial intelligence (AI) is transforming various industries by automating tasks, analyzing large datasets, and improving decision-making processes. AI technologies are being used in healthcare, finance, and transportation, among other sectors, to enhance efficiency and productivity.\n\nHow is artificial intelligence (AI) benefiting industries according to the passage?",
    "options": [
      "By increasing the need for manual labor.",
      "By automating tasks and improving decision-making.",
      "By reducing the need for data analysis.",
      "By lowering the cost of raw materials."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The passage lists automation, data analysis, and improved decision-making as AI's benefits. Option B captures two of these directly. Option A contradicts (AI reduces manual labor). Option C contradicts (AI uses large datasets). Option D is not mentioned.",
    "topic": "Evidence-Based Claim"
  },
  {
    "id": 7,
    "text": "The Internet of Things (IoT) refers to the network of physical devices connected to the internet, enabling them to collect and share data. From smart home appliances to wearable fitness trackers, IoT devices are becoming increasingly integrated into our daily lives, offering convenience and efficiency.\n\nWhich inference is best supported by the passage?",
    "options": [
      "IoT devices improve data security.",
      "IoT devices are decreasing internet connectivity.",
      "IoT devices offer convenience and efficiency in daily life.",
      "IoT devices decrease our reliance on technology."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The passage explicitly states IoT devices offer \"convenience and efficiency.\" Option A is unsupported — security is not mentioned. Options B and D directly contradict the passage.",
    "topic": "Inference"
  },
  {
    "id": 8,
    "text": "A city survey on preferred transport modes showed:\n\n• Car: 45%\n• Public Transit: 30%\n• Bicycle: 15%\n• Walking: 10%\n\nA city planner argues that investment in public transit is justified. Which statement from the survey data BEST supports this argument?",
    "options": [
      "Cars are the most preferred mode of transport at 45%.",
      "Combined, non-car modes account for 55% of respondents, suggesting majority interest beyond car travel.",
      "Only 10% of respondents prefer walking, indicating low pedestrian demand.",
      "Bicycle infrastructure serves just 15% of commuters — a small share."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. To support public transit investment, the planner needs to show demand beyond cars. Option B combines all non-car modes: 30%+15%+10% = 55% — a majority favoring alternatives to car travel. Options A, C, and D either support cars or undermine alternative transit investment.",
    "topic": "Data Interpretation"
  },
  {
    "id": 9,
    "text": "A 5-year study on urban tree cover and summer temperatures found:\n\n• Greenville: 35% tree cover → 82°F average\n• Riverside: 18% tree cover → 89°F average\n• Maplewood: 42% tree cover → 79°F average\n• Stonehaven: 10% tree cover → 93°F average\n• Clearwater: 28% tree cover → 85°F average\n\nWhich conclusion is best supported by this data?",
    "options": [
      "Cities with higher tree cover tend to have higher summer temperatures.",
      "Tree cover has no consistent relationship with summer temperatures.",
      "Cities with higher tree cover tend to have lower summer temperatures.",
      "Summer temperatures are determined solely by geographic location."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. All five cities show the same pattern: more tree cover = lower temperature. Stonehaven (10%/93°F) vs Maplewood (42%/79°F) clearly illustrates this. Option A is the opposite. Option B ignores the consistent pattern. Option D introduces geography, which the table does not address.",
    "topic": "Data Trends"
  },
  {
    "id": 10,
    "text": "Researchers tracked reading habits and academic performance in 500 middle school students over two years. Students who read for at least 20 minutes per day outside of school showed an average GPA increase of 0.4 points. Students who did not read outside school showed no significant GPA change.\n\nWhich conclusion is most directly supported by this data?",
    "options": [
      "Reading outside school is the only factor that affects GPA.",
      "Students who do not read outside school will fail academically.",
      "Daily outside-school reading of at least 20 minutes is associated with improved GPA.",
      "Reading for more than 20 minutes per day guarantees academic success."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Option C accurately reflects the correlation found — 20+ minutes of daily reading is associated with a 0.4 GPA increase — without overstating it. Options A and D make absolute claims (\"only factor,\" \"guarantees\") that go beyond what a correlation study can prove. Option B makes a negative prediction unsupported by the data.",
    "topic": "Interpreting Research Findings"
  },
  {
    "id": 11,
    "text": "A researcher claims: \"Urbanization is the leading cause of habitat loss for migratory birds.\"\n\nEvidence cited: A 10-year study showed that bird populations declined most sharply in regions where urban expansion increased by 40% or more.\n\nWhich choice best evaluates the strength of this evidence?",
    "options": [
      "The evidence strongly supports the claim because it shows urban expansion correlates with bird population decline.",
      "The evidence weakens the claim because birds can adapt to urban environments.",
      "The evidence is irrelevant because migratory birds travel across many regions.",
      "The evidence proves urbanization is the sole cause of all habitat loss."
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The study provides direct correlational evidence: 40%+ urban expansion → sharpest bird population declines. This supports the researcher's claim. Option B introduces adaptation as a counterpoint not stated in the evidence. Option C dismisses relevant evidence without justification. Option D overstates — correlation studies cannot prove sole causation.",
    "topic": "Evaluate Evidence for a Claim"
  },
  {
    "id": 12,
    "text": "A student argues: \"Schools should eliminate letter grades and replace them with written evaluations, because letter grades cause anxiety and don't reflect true learning.\"\n\nWhich evidence would MOST effectively support this argument?",
    "options": [
      "A survey showing 60% of students feel stressed before exams.",
      "A longitudinal study showing students in grade-free schools demonstrate deeper subject mastery and report lower anxiety than peers in graded schools.",
      "An anecdote from one teacher who prefers written feedback.",
      "A statistic showing that top-ranked universities use letter grades."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The argument has two claims: grades cause anxiety AND don't reflect true learning. Option B addresses both — it compares graded vs. grade-free schools on mastery (learning) and anxiety directly. Option A only touches exam stress, not grades. Option C is a single anecdote — too weak. Option D contradicts the argument.",
    "topic": "Evaluate Evidence for a Claim"
  },
  {
    "id": 13,
    "text": "Smartphone ownership by age group (2023):\n\n• Ages 18–29: 96%\n• Ages 30–49: 92%\n• Ages 50–64: 76%\n• Ages 65+: 61%\n\nA journalist writes: \"Smartphone adoption is now universal across all age groups.\" Which statement best evaluates this claim?",
    "options": [
      "The claim is accurate because all groups show ownership above 50%.",
      "The claim is an overstatement — while adoption is high, significant gaps exist, particularly for those 65 and older.",
      "The claim is false because only the 18–29 age group has near-universal adoption.",
      "The data fully supports the claim because it shows increasing smartphone adoption."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. \"Universal\" means applying equally to all — but there's a 35-point gap between 18–29 (96%) and 65+ (61%). Option B correctly identifies this as an overstatement. Option A sets too low a bar. Option C overcorrects. Option D misreads the data (one-year snapshot, not a trend).",
    "topic": "Data Interpretation"
  },
  {
    "id": 14,
    "text": "A scientist recorded Amazon forest cover data:\n\n• 2000: 5.40 million sq km\n• 2005: 5.21 million sq km\n• 2010: 5.06 million sq km\n• 2015: 4.92 million sq km\n• 2020: 4.76 million sq km\n\nWhich of the following best describes the trend shown?",
    "options": [
      "Amazon forest cover increased steadily from 2000 to 2020.",
      "Amazon forest cover fluctuated without a clear direction.",
      "Amazon forest cover decreased consistently across every five-year period.",
      "Amazon forest cover declined sharply in 2010 but recovered by 2020."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Every period shows a decrease: 5.40 → 5.21 → 5.06 → 4.92 → 4.76. There is no increase, fluctuation, sharp drop, or recovery — it is a steady, consistent decline across all five periods. Options A, B, and D misrepresent the data.",
    "topic": "Data Trends"
  },
  {
    "id": 15,
    "text": "Two researchers debate rising obesity rates:\n\nResearcher A: \"The rise in obesity is caused by increased fast food restaurant density in low-income neighborhoods.\"\n\nResearcher B: \"Correlation does not imply causation. Other factors such as income level, food education, and access to exercise facilities must be controlled before concluding causation.\"\n\nWhich best describes Researcher B's argument?",
    "options": [
      "Researcher B is dismissing the data without providing an alternative explanation.",
      "Researcher B correctly identifies that the study needs to control for confounding variables before claiming causation.",
      "Researcher B agrees with Researcher A but wants more restaurants studied.",
      "Researcher B's argument is invalid because correlation always implies causation in medical research."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Researcher B applies proper scientific reasoning — income, food education, and exercise access could all independently cause both more fast food restaurants AND higher obesity. Controlling for these confounds is necessary before claiming causation. Option A misrepresents B — a methodological critique is not a dismissal. Options C and D are factually incorrect.",
    "topic": "Evaluating Scientific Claims"
  },
  {
    "id": 16,
    "text": "A public health report states: \"In a study of 2,400 adults, those who consumed more than 3 servings of ultra-processed foods per day had a 58% higher incidence of Type 2 diabetes over 10 years compared to those who consumed fewer than 1 serving per day.\"\n\nWhich statement is the most accurate interpretation of this data?",
    "options": [
      "Ultra-processed foods directly cause Type 2 diabetes.",
      "Consuming fewer than 1 serving per day eliminates the risk of Type 2 diabetes.",
      "High ultra-processed food consumption is associated with a significantly higher rate of Type 2 diabetes.",
      "The study proves all adults will develop diabetes if they eat ultra-processed food."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The study shows a 58% higher incidence — a statistical association. Option C uses accurate language (\"associated with\") without claiming causation. Option A claims direct causation, which a correlational study cannot prove. Option B claims complete risk elimination, which the data does not show. Option D makes an absolute prediction the data cannot support.",
    "topic": "Interpreting Research Findings"
  },
  {
    "id": 17,
    "text": "A school survey shows time spent on extracurriculars:\n\n• Sports: 38%\n• Music/Arts: 24%\n• Academic Clubs: 19%\n• Community Service: 11%\n• Other: 8%\n\nThe principal wants to cut Community Service funding, citing low participation. Which argument BEST challenges this decision?",
    "options": [
      "Sports has the highest participation, so it deserves more funding.",
      "The 11% participation figure reflects time spent — not the program's value, community impact, or outcomes for participants.",
      "Academic Clubs have lower participation than Music/Arts, so they should be cut first.",
      "The data is accurate and Community Service should be cut."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Option B challenges the principal's reasoning by exposing a key limitation: time-spent data measures quantity, not quality, impact, or outcomes. A program serving fewer students can still produce significant community benefit. Options A and C shift focus to other programs. Option D supports the decision instead of challenging it.",
    "topic": "Evaluate Evidence for a Claim"
  },
  {
    "id": 18,
    "text": "A passage states: \"Urban areas with higher concentrations of green spaces report lower rates of depression and anxiety among residents.\"\n\nA researcher wants to strengthen the claim that green spaces DIRECTLY improve mental health. Which evidence would MOST strengthen this claim?",
    "options": [
      "A survey showing city residents prefer parks over concrete plazas.",
      "A controlled experiment where half of participants were randomly assigned to live near a new park for one year; those near the park showed significantly lower depression scores.",
      "A statistic showing cities with more parks also have higher real estate values.",
      "An anecdote from a therapist who recommends walks in nature to patients."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. To show direct causation (not just correlation), a controlled experiment with random assignment is the gold standard. Option B describes exactly this — randomization, a one-year timeframe, and measured mental health outcomes. Option A shows preference, not mental health impact. Option C shows an economic correlation. Option D is a single anecdote, too limited for a causal claim.",
    "topic": "Evaluate Evidence for a Claim"
  },
  {
    "id": 19,
    "text": "National test scores and teacher salaries:\n\n• Finland: Score 527 | Salary $45,000\n• Singapore: Score 562 | Salary $52,000\n• USA: Score 489 | Salary $61,000\n• Brazil: Score 413 | Salary $18,000\n• Germany: Score 515 | Salary $68,000\n\nA policy maker argues: \"Paying teachers more leads to better student test scores.\" Which response BEST evaluates this argument?",
    "options": [
      "The argument is supported — Singapore has both high salaries and high scores.",
      "The argument is flawed — Germany has the highest salary but does not have the highest scores, showing no consistent pattern.",
      "The argument is correct because teacher salary is the only factor in education quality.",
      "The argument is invalid because test scores are not a reliable measure of learning."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. If salary caused higher scores, Germany ($68K) should rank first — but Singapore ($52K) outscores it. The USA ($61K) scores below Finland ($45K). No consistent pattern supports the claim. Option A cherry-picks one supporting data point. Options C and D make absolute claims unsupported by the table.",
    "topic": "Data Interpretation"
  },
  {
    "id": 20,
    "text": "An environmental organization claims: \"Single-use plastic bags are the primary driver of ocean plastic pollution.\"\n\nA critic cites data: 46% of ocean plastic comes from discarded fishing nets and equipment, while single-use bags account for approximately 0.8% of ocean plastics.\n\nWhich of the following best describes the effect of the critic's data on the original claim?",
    "options": [
      "It strengthens the claim by confirming plastic bags are a significant pollution source.",
      "It is irrelevant because fishing nets are a separate issue from consumer plastic.",
      "It significantly weakens the claim — the data suggests fishing gear, not single-use bags, is the primary driver.",
      "It supports the claim because 0.8% is still a meaningful percentage."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The original claim calls bags the \"primary driver\" — but fishing nets account for 46% vs. bags' 0.8%. The data directly contradicts \"primary.\" Option A misreads the data. Option B incorrectly dismisses directly relevant evidence. Option D uses a tiny percentage to support a \"primary driver\" claim — logically unjustified.",
    "topic": "Strengthen / Weaken"
  },
  {
    "id": 21,
    "text": "A nutrition researcher concludes: \"Drinking two cups of green tea daily reduces the risk of cardiovascular disease by 20%.\"\n\nWhich of the following, if true, would MOST weaken this conclusion?",
    "options": [
      "Green tea contains antioxidants that are beneficial to cell health.",
      "The study participants who drank green tea also exercised more, had lower BMI, and reported less stress than the control group.",
      "The study followed participants for 5 years across multiple countries.",
      "Green tea has been consumed in Asian cultures for over 2,000 years."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Option B introduces confounding variables — exercise, BMI, and stress. If green tea drinkers were healthier in other ways, the 20% reduction may be due to those factors, not tea. This is a classic confound that weakens the causal conclusion. Options A and D support the claim. Option C (long duration, multiple countries) strengthens, not weakens, the study.",
    "topic": "Strengthen / Weaken"
  },
  {
    "id": 22,
    "text": "A report on public library usage states:\n\n\"Annual library visits declined from 1.4 billion in 2009 to 1.2 billion in 2019. However, digital resource checkouts — e-books, audiobooks, and online databases — increased by 240% in the same period.\"\n\nWhich conclusion is BEST supported by BOTH data points together?",
    "options": [
      "Libraries are becoming obsolete and should be defunded.",
      "People are reading less overall due to digital entertainment.",
      "While physical library visits have decreased, the expansion of digital services has allowed libraries to reach users in new ways.",
      "E-books are inferior to physical books and have reduced overall engagement."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Option C uses both data points together — physical visits declined (negative) BUT digital checkouts rose 240% (strongly positive) — to conclude that libraries are shifting, not disappearing. Option A ignores digital growth. Option B introduces \"reading less overall,\" which the data does not show. Option D makes a quality judgment unsupported by the data.",
    "topic": "Data Interpretation"
  },
  {
    "id": 23,
    "text": "A city is deciding whether to invest in a new subway line. A government report shows:\n\n• Current average commute: 48 minutes\n• Projected commute with subway: 31 minutes\n• Project cost: $4.2 billion\n• Projected annual economic productivity gain: $680 million\n\nWhich argument is BEST supported by this data?",
    "options": [
      "The project is not worth funding because $4.2 billion is too expensive.",
      "The project is financially unjustifiable because productivity gains are uncertain.",
      "The investment may be justified — the 17-minute commute reduction and $680M annual gain suggest significant long-term returns.",
      "The subway will eliminate all traffic congestion within five years."
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Option C is a balanced, evidence-based argument using both data points: 17-minute commute reduction and $680M/year economic gain. At $680M/year, the $4.2B cost recoups in ~6 years. Option A makes an absolute cost judgment without considering returns. Option B dismisses projections as uncertain without evidence. Option D goes far beyond what the data shows.",
    "topic": "Data-Based Reasoning"
  },
  {
    "id": 24,
    "text": "A scientist writes: \"In regions where neonicotinoid pesticides were banned, bee colony collapse disorder (CCD) rates dropped by 47% within three years. In comparable regions where pesticides remained in use, CCD rates remained stable or increased slightly.\"\n\nWhich of the following is the most logical conclusion from this evidence?",
    "options": [
      "Neonicotinoid pesticides are the sole cause of all bee population decline worldwide.",
      "Banning neonicotinoids in some regions may significantly reduce colony collapse disorder rates.",
      "Bees in pesticide-free regions are immune to all diseases.",
      "The results would be the same regardless of pesticide use."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Option B draws a careful, evidence-supported conclusion: 47% CCD drop in ban regions vs. stable/increasing in non-ban regions supports the inference that banning neonicotinoids may reduce CCD. \"May significantly reduce\" is appropriately cautious. Option A claims sole causation — beyond what one study proves. Options C and D either overstate or contradict the findings.",
    "topic": "Evaluating Scientific Claims"
  },
  {
    "id": 25,
    "text": "A researcher presents: \"In a nationally representative survey of 9,000 teens aged 13–17, teens who spent more than 5 hours per day on social media were 3 times more likely to report feeling persistently sad or hopeless compared to teens who spent less than 1 hour per day.\"\n\nA critic argues: \"This is only a survey; it cannot prove that social media causes sadness.\"\n\nWhich response BEST evaluates the critic's argument?",
    "options": [
      "The critic is wrong — all surveys prove causation.",
      "The critic is correct — while the data reveals a strong correlation, a survey cannot establish causation without experimental controls.",
      "The critic's argument is irrelevant because the sample size is large enough to prove causation.",
      "The data proves causation because the relationship is three times stronger in heavy users."
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Option B is methodologically accurate: surveys identify correlations, not causation. The correlation could reflect reverse causation (sad teens use more social media) or a third variable causing both. Options A, C, and D all incorrectly suggest that correlation or large sample size establishes causation — a fundamental error in data interpretation.",
    "topic": "Evaluating Scientific Claims"
  }
];

const TOPIC_MAP = {
    'Critical Thinking & Data': {
        name: 'Critical Thinking & Data',
        questions: QUESTIONS.map(q => q.id)
    }
};
