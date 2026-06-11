// =============================================
// Digital SAT – Topic Test 7: Paired Passages
// 25 Questions | Single Timed Module (32 min)
// answers: 0=A, 1=B, 2=C, 3=D
// Source: Comprehensive Digital SAT Study Guide (Bitwise Books)
// =============================================

const QUESTIONS = [

  // ── SET 1: Technology & Communication (Q1–5) ──────────────
  {
    id: 1,
    text: `Passage 1:
Recent technological advancements have revolutionized the way we communicate. Social media platforms, instant messaging, and video calls have made it easier to stay connected with people around the world. These tools have broken geographical barriers and fostered global relationships in ways previously unimaginable.

Passage 2:
While digital communication tools offer undeniable convenience, they also raise serious concerns about privacy and the spread of misinformation. Algorithms designed to maximize engagement often amplify sensational or false content, and personal data is routinely collected without users' full awareness.

Which statement best describes how the two passages relate to each other?`,
    options: [
      'Passage 2 directly contradicts the claims made in Passage 1.',
      'Passage 1 presents benefits of digital communication; Passage 2 raises concerns about the same technologies.',
      'Both passages argue that social media should be regulated by governments.',
      'Passage 2 extends Passage 1 by explaining how the technologies described work.'
    ],
    answer: 1,
    explanation: 'Passage 1 focuses on benefits (connectivity, breaking barriers) while Passage 2 acknowledges convenience but highlights risks (privacy, misinformation). They present two sides of the same issue without fully contradicting each other.',
    topic: 'Relationship Between Passages'
  },
  {
    id: 2,
    text: `Passage 1:
Recent technological advancements have revolutionized the way we communicate. Social media platforms, instant messaging, and video calls have made it easier to stay connected with people around the world. These tools have broken geographical barriers and fostered global relationships in ways previously unimaginable.

Passage 2:
While digital communication tools offer undeniable convenience, they also raise serious concerns about privacy and the spread of misinformation. Algorithms designed to maximize engagement often amplify sensational or false content, and personal data is routinely collected without users' full awareness.

Which concern does the author of Passage 2 specifically identify as a problem with engagement-driven algorithms?`,
    options: [
      'They make communication slower and less reliable.',
      'They prevent users from forming international friendships.',
      'They tend to amplify sensational or false content.',
      'They replace face-to-face interaction with digital substitutes.'
    ],
    answer: 2,
    explanation: 'Passage 2 explicitly states that "algorithms designed to maximize engagement often amplify sensational or false content." This is the specific concern identified.',
    topic: 'Explicit Detail'
  },
  {
    id: 3,
    text: `Passage 1:
Recent technological advancements have revolutionized the way we communicate. Social media platforms, instant messaging, and video calls have made it easier to stay connected with people around the world. These tools have broken geographical barriers and fostered global relationships in ways previously unimaginable.

Passage 2:
While digital communication tools offer undeniable convenience, they also raise serious concerns about privacy and the spread of misinformation. Algorithms designed to maximize engagement often amplify sensational or false content, and personal data is routinely collected without users' full awareness.

The author of Passage 2 would most likely respond to the claim in Passage 1 that these tools "fostered global relationships" by arguing that:`,
    options: [
      'Global relationships are impossible without digital technology.',
      'Such relationships are valuable but come at a significant cost to privacy and truth.',
      'Video calls are more effective than social media for building relationships.',
      'The convenience of these tools outweighs any privacy concerns.'
    ],
    answer: 1,
    explanation: 'Passage 2 acknowledges "undeniable convenience" (which includes relationship-building) but argues that these benefits come with privacy and misinformation costs. Option B best reflects this concession-but-caution structure.',
    topic: 'Cross-Passage Reasoning'
  },
  {
    id: 4,
    text: `Passage 1:
Recent technological advancements have revolutionized the way we communicate. Social media platforms, instant messaging, and video calls have made it easier to stay connected with people around the world. These tools have broken geographical barriers and fostered global relationships in ways previously unimaginable.

Passage 2:
While digital communication tools offer undeniable convenience, they also raise serious concerns about privacy and the spread of misinformation. Algorithms designed to maximize engagement often amplify sensational or false content, and personal data is routinely collected without users' full awareness.

Both authors would most likely agree with which of the following statements?`,
    options: [
      'Digital communication tools have had no meaningful impact on how people interact.',
      'Social media platforms should be banned to protect user privacy.',
      'Digital communication tools have become a significant part of modern life.',
      'Misinformation is not a serious threat to democratic societies.'
    ],
    answer: 2,
    explanation: 'Passage 1 says these tools "revolutionized" communication; Passage 2 acknowledges their "undeniable convenience." Both agree that these tools are significant and widely used.',
    topic: 'Point of Agreement'
  },
  {
    id: 5,
    text: `Passage 1:
Recent technological advancements have revolutionized the way we communicate. Social media platforms, instant messaging, and video calls have made it easier to stay connected with people around the world. These tools have broken geographical barriers and fostered global relationships in ways previously unimaginable.

Passage 2:
While digital communication tools offer undeniable convenience, they also raise serious concerns about privacy and the spread of misinformation. Algorithms designed to maximize engagement often amplify sensational or false content, and personal data is routinely collected without users' full awareness.

As used in Passage 2, "routinely" most nearly means:`,
    options: [
      'occasionally and unpredictably',
      'illegally and without permission',
      'as a regular and standard practice',
      'carelessly and without attention'
    ],
    answer: 2,
    explanation: '"Routinely" means as a matter of regular course or standard practice. The passage describes data collection happening predictably and habitually, not occasionally or illegally.',
    topic: 'Vocabulary in Context'
  },

  // ── SET 2: Renewable Energy (Q6–10) ──────────────
  {
    id: 6,
    text: `Passage 1:
Despite advancements in renewable energy, many countries continue to rely heavily on fossil fuels for electricity generation. This reliance contributes to environmental pollution and climate change, necessitating urgent action to transition to cleaner energy sources.

Passage 2:
The transition to renewable energy, while necessary, must be managed carefully. Abrupt shifts away from fossil fuels can cause economic disruption, particularly in communities whose livelihoods depend on coal and oil industries. A phased and inclusive approach is more sustainable in the long term.

What is the central point of disagreement between the two passages?`,
    options: [
      'Whether climate change is caused by human activity.',
      'Whether fossil fuels are still necessary for electricity generation.',
      'Whether the transition to renewable energy should be urgent or gradual.',
      'Whether renewable energy technologies are effective.'
    ],
    answer: 2,
    explanation: 'Passage 1 calls for "urgent action" while Passage 2 warns against "abrupt shifts" and advocates a "phased" approach. This is the key tension between the two positions.',
    topic: 'Point of Disagreement'
  },
  {
    id: 7,
    text: `Passage 1:
Despite advancements in renewable energy, many countries continue to rely heavily on fossil fuels for electricity generation. This reliance contributes to environmental pollution and climate change, necessitating urgent action to transition to cleaner energy sources.

Passage 2:
The transition to renewable energy, while necessary, must be managed carefully. Abrupt shifts away from fossil fuels can cause economic disruption, particularly in communities whose livelihoods depend on coal and oil industries. A phased and inclusive approach is more sustainable in the long term.

Both passages agree on which of the following?`,
    options: [
      'The fossil fuel industry should be immediately shut down.',
      'Transitioning to renewable energy is a necessary goal.',
      'Economic concerns are more important than environmental ones.',
      'Renewable energy cannot fully replace fossil fuels.'
    ],
    answer: 1,
    explanation: 'Passage 1 calls for a transition urgently; Passage 2 says the transition is "necessary" but warns against abruptness. Both agree a transition should happen.',
    topic: 'Point of Agreement'
  },
  {
    id: 8,
    text: `Passage 1:
Despite advancements in renewable energy, many countries continue to rely heavily on fossil fuels for electricity generation. This reliance contributes to environmental pollution and climate change, necessitating urgent action to transition to cleaner energy sources.

Passage 2:
The transition to renewable energy, while necessary, must be managed carefully. Abrupt shifts away from fossil fuels can cause economic disruption, particularly in communities whose livelihoods depend on coal and oil industries. A phased and inclusive approach is more sustainable in the long term.

The author of Passage 2 would most likely characterize the approach recommended in Passage 1 as:`,
    options: [
      'environmentally irresponsible',
      'well-researched and carefully planned',
      'potentially harmful to workers in fossil fuel industries',
      'too cautious and unlikely to make an impact'
    ],
    answer: 2,
    explanation: 'Passage 2 explicitly warns that "abrupt shifts" harm "communities whose livelihoods depend on coal and oil." The urgency of Passage 1 would be seen as risking exactly this harm.',
    topic: 'Cross-Passage Reasoning'
  },
  {
    id: 9,
    text: `Passage 1:
Despite advancements in renewable energy, many countries continue to rely heavily on fossil fuels for electricity generation. This reliance contributes to environmental pollution and climate change, necessitating urgent action to transition to cleaner energy sources.

Passage 2:
The transition to renewable energy, while necessary, must be managed carefully. Abrupt shifts away from fossil fuels can cause economic disruption, particularly in communities whose livelihoods depend on coal and oil industries. A phased and inclusive approach is more sustainable in the long term.

Which of the following, if true, would most strengthen the argument in Passage 2?`,
    options: [
      'Studies show that solar energy costs have dropped by 80% in the past decade.',
      'Countries that rapidly eliminated coal production saw significant rises in unemployment in affected regions.',
      'Climate scientists predict more severe weather events without immediate action.',
      'Most voters support transitioning to renewable energy within five years.'
    ],
    answer: 1,
    explanation: 'Passage 2 argues that abrupt transitions cause economic disruption. Evidence that rapid coal elimination caused unemployment directly supports this claim.',
    topic: 'Strengthen the Argument'
  },
  {
    id: 10,
    text: `Passage 1:
Despite advancements in renewable energy, many countries continue to rely heavily on fossil fuels for electricity generation. This reliance contributes to environmental pollution and climate change, necessitating urgent action to transition to cleaner energy sources.

Passage 2:
The transition to renewable energy, while necessary, must be managed carefully. Abrupt shifts away from fossil fuels can cause economic disruption, particularly in communities whose livelihoods depend on coal and oil industries. A phased and inclusive approach is more sustainable in the long term.

As used in Passage 2, "phased" most nearly means:`,
    options: [
      'delayed indefinitely',
      'carried out in planned stages over time',
      'led by the private sector rather than government',
      'focused on a single region at a time'
    ],
    answer: 1,
    explanation: '"Phased" means implemented in distinct, planned stages rather than all at once. This is contrasted with the "abrupt shifts" Passage 2 warns against.',
    topic: 'Vocabulary in Context'
  },

  // ── SET 3: Sleep & Cognitive Function (Q11–15) ──────────────
  {
    id: 11,
    text: `Passage 1:
A recent study on sleep patterns found that individuals who get between seven to eight hours of sleep per night have the highest levels of cognitive functioning. The study analyzed data from over 1,000 participants aged 18 to 65 and found that both sleeping too little and sleeping too much were associated with lower cognitive performance.

Passage 2:
While the seven-to-eight-hour sleep recommendation is well-established, emerging research suggests that sleep quality matters as much as quantity. An individual who sleeps nine hours with frequent interruptions may perform worse cognitively than one who sleeps six and a half hours of uninterrupted deep sleep.

What is the main relationship between the two passages?`,
    options: [
      'Passage 2 refutes the conclusion of Passage 1 entirely.',
      'Passage 2 complicates Passage 1 by introducing sleep quality as an additional variable.',
      'Both passages recommend the same amount of sleep for optimal health.',
      'Passage 1 focuses on adults; Passage 2 focuses on children.'
    ],
    answer: 1,
    explanation: 'Passage 1 focuses on sleep duration (7–8 hours). Passage 2 does not reject this but adds that quality matters too, complicating the picture with a new variable.',
    topic: 'Relationship Between Passages'
  },
  {
    id: 12,
    text: `Passage 1:
A recent study on sleep patterns found that individuals who get between seven to eight hours of sleep per night have the highest levels of cognitive functioning. The study analyzed data from over 1,000 participants aged 18 to 65 and found that both sleeping too little and sleeping too much were associated with lower cognitive performance.

Passage 2:
While the seven-to-eight-hour sleep recommendation is well-established, emerging research suggests that sleep quality matters as much as quantity. An individual who sleeps nine hours with frequent interruptions may perform worse cognitively than one who sleeps six and a half hours of uninterrupted deep sleep.

According to Passage 1, which sleep pattern is associated with the highest cognitive functioning?`,
    options: [
      'Less than six hours of deep sleep',
      'More than nine hours of uninterrupted sleep',
      'Between seven and eight hours per night',
      'Any amount as long as it is uninterrupted'
    ],
    answer: 2,
    explanation: 'Passage 1 directly states that "individuals who get between seven to eight hours of sleep per night have the highest levels of cognitive functioning."',
    topic: 'Explicit Detail'
  },
  {
    id: 13,
    text: `Passage 1:
A recent study on sleep patterns found that individuals who get between seven to eight hours of sleep per night have the highest levels of cognitive functioning. The study analyzed data from over 1,000 participants aged 18 to 65 and found that both sleeping too little and sleeping too much were associated with lower cognitive performance.

Passage 2:
While the seven-to-eight-hour sleep recommendation is well-established, emerging research suggests that sleep quality matters as much as quantity. An individual who sleeps nine hours with frequent interruptions may perform worse cognitively than one who sleeps six and a half hours of uninterrupted deep sleep.

The example in Passage 2 comparing nine interrupted hours to six-and-a-half uninterrupted hours is intended to:`,
    options: [
      'Prove that sleeping less is always better.',
      'Show that sleep duration studies are fundamentally flawed.',
      'Demonstrate that quality of sleep can outweigh quantity.',
      'Argue that eight hours of sleep is unnecessary for most people.'
    ],
    answer: 2,
    explanation: 'The example is a concrete illustration of the passage\'s main claim that quality can matter as much as quantity — sometimes even overriding a longer but fragmented sleep.',
    topic: 'Function of Evidence'
  },
  {
    id: 14,
    text: `Passage 1:
A recent study on sleep patterns found that individuals who get between seven to eight hours of sleep per night have the highest levels of cognitive functioning. The study analyzed data from over 1,000 participants aged 18 to 65 and found that both sleeping too little and sleeping too much were associated with lower cognitive performance.

Passage 2:
While the seven-to-eight-hour sleep recommendation is well-established, emerging research suggests that sleep quality matters as much as quantity. An individual who sleeps nine hours with frequent interruptions may perform worse cognitively than one who sleeps six and a half hours of uninterrupted deep sleep.

Both passages would support which of the following conclusions?`,
    options: [
      'Sleep has little effect on daily cognitive performance.',
      'The ideal amount of sleep is the same for everyone.',
      'Sleep is a meaningful factor in cognitive performance.',
      'Quantity of sleep is more important than quality of sleep.'
    ],
    answer: 2,
    explanation: 'Both passages link sleep patterns to cognitive performance — Passage 1 through duration, Passage 2 through quality. Both agree sleep is meaningfully connected to cognitive functioning.',
    topic: 'Point of Agreement'
  },
  {
    id: 15,
    text: `Passage 1:
A recent study on sleep patterns found that individuals who get between seven to eight hours of sleep per night have the highest levels of cognitive functioning. The study analyzed data from over 1,000 participants aged 18 to 65 and found that both sleeping too little and sleeping too much were associated with lower cognitive performance.

Passage 2:
While the seven-to-eight-hour sleep recommendation is well-established, emerging research suggests that sleep quality matters as much as quantity. An individual who sleeps nine hours with frequent interruptions may perform worse cognitively than one who sleeps six and a half hours of uninterrupted deep sleep.

As used in Passage 2, "emerging" most nearly means:`,
    options: [
      'fully established and widely accepted',
      'newly developing and not yet mainstream',
      'controversial and widely disputed',
      'limited to a single study'
    ],
    answer: 1,
    explanation: '"Emerging research" refers to newer findings that are still developing in the field, contrasted with the "well-established" seven-to-eight-hour recommendation mentioned earlier in the same sentence.',
    topic: 'Vocabulary in Context'
  },

  // ── SET 4: Electric Cars (Q16–20) ──────────────
  {
    id: 16,
    text: `Passage 1:
With the advent of electric cars, the automotive industry is undergoing significant changes. These vehicles are powered by electricity instead of gasoline, reducing emissions and dependence on fossil fuels. Governments around the world are encouraging the adoption of electric cars through subsidies and incentives.

Passage 2:
Electric vehicles offer a promising path toward lower emissions, but their environmental benefits are overstated if the electricity powering them comes from coal plants. Until the electrical grid is primarily powered by renewable energy, widespread EV adoption may produce only marginal environmental gains.

What is the primary point of difference between the two passages?`,
    options: [
      'Whether electric vehicles are more expensive than gasoline cars.',
      'Whether government subsidies are an effective way to promote EV adoption.',
      'Whether electric vehicles deliver meaningful environmental benefits given current energy sources.',
      'Whether the automotive industry can produce enough EVs to meet demand.'
    ],
    answer: 2,
    explanation: 'Passage 1 presents EVs as clearly reducing emissions; Passage 2 argues that the environmental gains depend on the energy source and may be marginal if the grid still relies on coal.',
    topic: 'Point of Disagreement'
  },
  {
    id: 17,
    text: `Passage 1:
With the advent of electric cars, the automotive industry is undergoing significant changes. These vehicles are powered by electricity instead of gasoline, reducing emissions and dependence on fossil fuels. Governments around the world are encouraging the adoption of electric cars through subsidies and incentives.

Passage 2:
Electric vehicles offer a promising path toward lower emissions, but their environmental benefits are overstated if the electricity powering them comes from coal plants. Until the electrical grid is primarily powered by renewable energy, widespread EV adoption may produce only marginal environmental gains.

The author of Passage 2 would most likely respond to the claim in Passage 1 that EVs reduce "dependence on fossil fuels" by pointing out that:`,
    options: [
      'EVs are too expensive for most consumers to afford.',
      'Government subsidies distort the free market for automobiles.',
      'If the electricity comes from coal, EVs still depend indirectly on fossil fuels.',
      'Gasoline vehicles have been improving their fuel efficiency steadily.'
    ],
    answer: 2,
    explanation: 'Passage 2\'s core argument is that EVs powered by coal-generated electricity remain indirectly dependent on fossil fuels — directly challenging the claim of reduced fossil fuel dependence.',
    topic: 'Cross-Passage Reasoning'
  },
  {
    id: 18,
    text: `Passage 1:
With the advent of electric cars, the automotive industry is undergoing significant changes. These vehicles are powered by electricity instead of gasoline, reducing emissions and dependence on fossil fuels. Governments around the world are encouraging the adoption of electric cars through subsidies and incentives.

Passage 2:
Electric vehicles offer a promising path toward lower emissions, but their environmental benefits are overstated if the electricity powering them comes from coal plants. Until the electrical grid is primarily powered by renewable energy, widespread EV adoption may produce only marginal environmental gains.

Both authors would most likely agree with which statement?`,
    options: [
      'Electric vehicles have no role to play in addressing climate change.',
      'Transitioning to renewable electricity is unnecessary for EVs to succeed.',
      'Electric vehicles are a step toward reduced emissions, even if not a complete solution.',
      'Government subsidies for EVs should be eliminated immediately.'
    ],
    answer: 2,
    explanation: 'Passage 1 supports EVs as emission-reducers; Passage 2 calls them "a promising path" — both see potential, even if Passage 2 adds conditions. Both would accept EVs as a partial step forward.',
    topic: 'Point of Agreement'
  },
  {
    id: 19,
    text: `Passage 1:
With the advent of electric cars, the automotive industry is undergoing significant changes. These vehicles are powered by electricity instead of gasoline, reducing emissions and dependence on fossil fuels. Governments around the world are encouraging the adoption of electric cars through subsidies and incentives.

Passage 2:
Electric vehicles offer a promising path toward lower emissions, but their environmental benefits are overstated if the electricity powering them comes from coal plants. Until the electrical grid is primarily powered by renewable energy, widespread EV adoption may produce only marginal environmental gains.

Which evidence would most weaken the argument of Passage 2?`,
    options: [
      'A study showing that electric vehicles cost more to manufacture than gasoline cars.',
      'Data showing that even coal-powered EVs produce 40% fewer lifecycle emissions than gasoline cars.',
      'A report finding that government EV subsidies primarily benefit wealthy consumers.',
      'Statistics showing that EV sales have tripled in the past five years.'
    ],
    answer: 1,
    explanation: 'Passage 2 claims EV benefits are "marginal" when powered by coal. Evidence that coal-powered EVs still produce significantly fewer emissions than gasoline cars would undermine this claim.',
    topic: 'Weaken the Argument'
  },
  {
    id: 20,
    text: `Passage 1:
With the advent of electric cars, the automotive industry is undergoing significant changes. These vehicles are powered by electricity instead of gasoline, reducing emissions and dependence on fossil fuels. Governments around the world are encouraging the adoption of electric cars through subsidies and incentives.

Passage 2:
Electric vehicles offer a promising path toward lower emissions, but their environmental benefits are overstated if the electricity powering them comes from coal plants. Until the electrical grid is primarily powered by renewable energy, widespread EV adoption may produce only marginal environmental gains.

As used in Passage 2, "marginal" most nearly means:`,
    options: [
      'significant and transformative',
      'small and barely worth noting',
      'uncertain and debated by experts',
      'limited to certain geographic regions'
    ],
    answer: 1,
    explanation: '"Marginal" means minimal or barely significant. Passage 2 argues that the environmental gains from coal-powered EVs would be small — not transformative as Passage 1 implies.',
    topic: 'Vocabulary in Context'
  },

  // ── SET 5: Scientific Discovery & Communication (Q21–25) ──
  {
    id: 21,
    text: `Passage 1:
Marie Curie's pioneering research on radioactivity laid the foundation for modern physics and chemistry. Her discoveries of radium and polonium significantly advanced medical research, and she remains the only person to have won Nobel Prizes in two different sciences. Her work demonstrated that individual determination can overcome systemic barriers.

Passage 2:
While Marie Curie's achievements are remarkable, historians have increasingly noted that her contributions were facilitated by a network of collaborators, including her husband Pierre. Crediting scientific discovery solely to individuals obscures the collaborative nature of science and may discourage those who do not see themselves as lone geniuses.

The two passages present different perspectives on which issue?`,
    options: [
      'Whether Marie Curie was a competent scientist.',
      'Whether Nobel Prizes should be awarded to individuals or teams.',
      'How scientific achievement and credit should be understood.',
      'Whether radioactivity research is beneficial to medicine.'
    ],
    answer: 2,
    explanation: 'Passage 1 frames Curie as an individual triumph; Passage 2 argues that framing discovery as individual achievement misrepresents how science works. The core debate is about how we credit and understand scientific achievement.',
    topic: 'Point of Disagreement'
  },
  {
    id: 22,
    text: `Passage 1:
Marie Curie's pioneering research on radioactivity laid the foundation for modern physics and chemistry. Her discoveries of radium and polonium significantly advanced medical research, and she remains the only person to have won Nobel Prizes in two different sciences. Her work demonstrated that individual determination can overcome systemic barriers.

Passage 2:
While Marie Curie's achievements are remarkable, historians have increasingly noted that her contributions were facilitated by a network of collaborators, including her husband Pierre. Crediting scientific discovery solely to individuals obscures the collaborative nature of science and may discourage those who do not see themselves as lone geniuses.

Both passages would agree with which of the following?`,
    options: [
      'Marie Curie\'s work in radioactivity was not scientifically significant.',
      'Scientific prizes should not be awarded to women.',
      'Marie Curie made remarkable contributions to science.',
      'All scientific discoveries are the result of teamwork.'
    ],
    answer: 2,
    explanation: 'Passage 1 explicitly praises Curie\'s achievements; Passage 2 opens by calling them "remarkable." Both authors acknowledge the significance of her contributions — they disagree only on how to frame credit.',
    topic: 'Point of Agreement'
  },
  {
    id: 23,
    text: `Passage 1:
Marie Curie's pioneering research on radioactivity laid the foundation for modern physics and chemistry. Her discoveries of radium and polonium significantly advanced medical research, and she remains the only person to have won Nobel Prizes in two different sciences. Her work demonstrated that individual determination can overcome systemic barriers.

Passage 2:
While Marie Curie's achievements are remarkable, historians have increasingly noted that her contributions were facilitated by a network of collaborators, including her husband Pierre. Crediting scientific discovery solely to individuals obscures the collaborative nature of science and may discourage those who do not see themselves as lone geniuses.

The author of Passage 2 argues that the "lone genius" narrative is problematic primarily because it:`,
    options: [
      'Exaggerates the role of luck in scientific discovery.',
      'Gives too much credit to Pierre Curie at Marie\'s expense.',
      'May discourage people who do not identify with that model.',
      'Reduces funding for team-based scientific research.'
    ],
    answer: 2,
    explanation: 'Passage 2 explicitly states that the individual-genius framing "may discourage those who do not see themselves as lone geniuses." This is the stated harmful consequence the author identifies.',
    topic: 'Author\'s Purpose'
  },
  {
    id: 24,
    text: `Passage 1:
Marie Curie's pioneering research on radioactivity laid the foundation for modern physics and chemistry. Her discoveries of radium and polonium significantly advanced medical research, and she remains the only person to have won Nobel Prizes in two different sciences. Her work demonstrated that individual determination can overcome systemic barriers.

Passage 2:
While Marie Curie's achievements are remarkable, historians have increasingly noted that her contributions were facilitated by a network of collaborators, including her husband Pierre. Crediting scientific discovery solely to individuals obscures the collaborative nature of science and may discourage those who do not see themselves as lone geniuses.

Which word best describes the tone of Passage 2 toward the subject of Marie Curie?`,
    options: [
      'Dismissive and critical',
      'Admiring but revisionist',
      'Neutral and purely factual',
      'Hostile and skeptical'
    ],
    answer: 1,
    explanation: 'Passage 2 admires Curie ("achievements are remarkable") but revises the standard narrative by emphasizing collaboration. "Admiring but revisionist" captures both the respect for Curie and the reframing of how credit is assigned.',
    topic: 'Tone & Attitude'
  },
  {
    id: 25,
    text: `Passage 1:
Marie Curie's pioneering research on radioactivity laid the foundation for modern physics and chemistry. Her discoveries of radium and polonium significantly advanced medical research, and she remains the only person to have won Nobel Prizes in two different sciences. Her work demonstrated that individual determination can overcome systemic barriers.

Passage 2:
While Marie Curie's achievements are remarkable, historians have increasingly noted that her contributions were facilitated by a network of collaborators, including her husband Pierre. Crediting scientific discovery solely to individuals obscures the collaborative nature of science and may discourage those who do not see themselves as lone geniuses.

As used in Passage 2, "obscures" most nearly means:`,
    options: [
      'Highlights and draws attention to',
      'Hides or makes less clear',
      'Exaggerates and distorts',
      'Permanently erases from the record'
    ],
    answer: 1,
    explanation: '"Obscures" means to make something less visible or clear. Passage 2 argues that individual-credit narratives hide (obscure) the collaborative reality of how science actually works.',
    topic: 'Vocabulary in Context'
  }

];

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP = {
  'Relationship Between Passages': { name: 'Relationship Between Passages', questions: [1,11,21] },
  'Point of Agreement':            { name: 'Point of Agreement',            questions: [4,7,14,18,22] },
  'Point of Disagreement':         { name: 'Point of Disagreement',         questions: [6,16] },
  'Cross-Passage Reasoning':       { name: 'Cross-Passage Reasoning',       questions: [3,8,17] },
  'Explicit Detail':               { name: 'Explicit Detail',               questions: [2,12] },
  'Vocabulary in Context':         { name: 'Vocabulary in Context',         questions: [5,10,15,20,25] },
  'Function of Evidence':          { name: 'Function of Evidence',          questions: [13] },
  'Strengthen/Weaken Argument':    { name: 'Strengthen/Weaken Argument',    questions: [9,19] },
  'Author\'s Purpose':             { name: 'Author\'s Purpose',             questions: [23] },
  'Tone & Attitude':               { name: 'Tone & Attitude',               questions: [24] }
};
