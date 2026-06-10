const QUESTIONS = [
  {
    id: 1,
    text: `The following passage is adapted from a 2022 essay on scientific communication.

The researcher's findings were initially met with skepticism, as her methodology deviated sharply from established protocols. Yet over time, as her results proved consistently reproducible, the scientific community began to regard her approach not as aberrant but as pioneering — a necessary disruption to a field grown too rigid in its thinking.

As used in this passage, "aberrant" most nearly means:`,
    options: [
      'innovative and bold',
      'deviating from what is normal or expected',
      'poorly documented and unclear',
      'widely accepted and conventional'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 2,
    text: `The following passage is adapted from a biography of composer Ludwig van Beethoven.

By the time Beethoven completed his Ninth Symphony, he was almost entirely deaf. Yet rather than subduing his creative ambitions, this affliction seemed to amplify them. He composed with a ferocity that his contemporaries found almost incomprehensible, producing music of extraordinary complexity from a silence they could not imagine.

As used in this passage, "subduing" most nearly means:`,
    options: [
      'inspiring',
      'redirecting',
      'suppressing or diminishing',
      'documenting'
    ],
    answer: 2,
    topic: 'Vocabulary in Context'
  },
  {
    id: 3,
    text: `The following passage is adapted from a 2023 article on urban planning.

Cities that invest in mixed-use development — neighborhoods where residential, commercial, and recreational spaces coexist — tend to generate more vibrant street life than those characterized by rigid zoning. The intermingling of functions produces an organic energy that no single-purpose district can replicate, regardless of how meticulously it is designed.

As used in this passage, "meticulously" most nearly means:`,
    options: [
      'with great expense',
      'with excessive speed',
      'with careful attention to detail',
      'with public input'
    ],
    answer: 2,
    topic: 'Vocabulary in Context'
  },
  {
    id: 4,
    text: `The following passage is adapted from a 2021 essay on the philosophy of language.

Words, Wittgenstein argued, do not derive their meaning from objects they represent but from the ways they are used in particular forms of life. Meaning, on this view, is not fixed or intrinsic but fluid — perpetually renegotiated by the communities that employ language as a tool for living and acting in the world.

As used in this passage, "intrinsic" most nearly means:`,
    options: [
      'superficial and changeable',
      'inherent and belonging to something by its nature',
      'culturally constructed and agreed upon',
      'formally defined by a governing body'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 5,
    text: `The following passage is adapted from a historical account of the Industrial Revolution.

Factory owners of the early nineteenth century were largely indifferent to the welfare of their workers — not out of cruelty, necessarily, but out of a prevailing economic philosophy that treated labor as a commodity subject to market forces rather than as human effort deserving of moral consideration.

As used in this passage, "indifferent" most nearly means:`,
    options: [
      'unaware of',
      'hostile toward',
      'lacking concern for',
      'supportive of'
    ],
    answer: 2,
    topic: 'Vocabulary in Context'
  },
  {
    id: 6,
    text: `The following passage is adapted from a 2022 article on ecological restoration.

The wetlands reclamation project faced considerable opposition from local agricultural interests, who feared it would encroach on productive farmland. Scientists countered that the ecological services provided by restored wetlands — flood mitigation, water filtration, carbon sequestration — far outweighed the economic losses from reduced cultivation.

As used in this passage, "encroach" most nearly means:`,
    options: [
      'improve',
      'gradually intrude upon',
      'permanently destroy',
      'be adjacent to'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 7,
    text: `The following passage is adapted from a 2023 profile of a novelist.

Her prose style is deceptively spare — at first glance almost austere in its economy of language. But careful readers discover that each spare sentence is charged with implication, and what goes unsaid is as carefully constructed as what appears on the page.

As used in this passage, "austere" most nearly means:`,
    options: [
      'warm and approachable',
      'severely plain and simple',
      'technically complex',
      'emotionally expressive'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 8,
    text: `The following passage is adapted from a 2021 article on behavioral economics.

Traditional economic models assume that individuals make rational decisions in their financial self-interest. Behavioral economists, however, have documented a range of cognitive biases that systematically distort decision-making — tendencies so pervasive that they cannot be dismissed as occasional deviations from rationality.

As used in this passage, "pervasive" most nearly means:`,
    options: [
      'dangerous and harmful',
      'widely and consistently present',
      'occasionally observed',
      'scientifically controversial'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 9,
    text: `The following passage is adapted from a literary review published in 2022.

The novel's narrative structure is deliberately labyrinthine — the reader is led down one corridor of interpretation only to find it doubling back on itself, forcing a reconsideration of everything that came before. This disorientation is not a flaw but a feature: the confusion mirrors the protagonist's own fractured perception of reality.

As used in this passage, "labyrinthine" most nearly means:`,
    options: [
      'poetic and lyrical',
      'intentionally deceptive',
      'complex and full of twists',
      'traditional and predictable'
    ],
    answer: 2,
    topic: 'Vocabulary in Context'
  },
  {
    id: 10,
    text: `The following passage is adapted from a 2023 article on public health policy.

Critics of mandatory vaccination programs argue that such policies infringe upon individual autonomy — the right of each person to make decisions about their own body without government coercion. Proponents counter that individual choices carry collective consequences, and that community welfare may sometimes supersede personal preference.

As used in this passage, "supersede" most nearly means:`,
    options: [
      'complement and enhance',
      'take precedence over',
      'contradict and undermine',
      'be balanced against'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 11,
    text: `The following passage is adapted from a biography of artist Frida Kahlo.

Kahlo's self-portraits are simultaneously intimate and enigmatic. They invite viewers into a deeply personal visual world — yet the more closely one looks, the more the paintings seem to withhold, layering symbol upon symbol in a way that resists definitive interpretation.

As used in this passage, "enigmatic" most nearly means:`,
    options: [
      'beautiful and carefully composed',
      'difficult to understand; mysterious',
      'emotionally expressive and raw',
      'culturally specific and untranslatable'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 12,
    text: `The following passage is adapted from a 2022 essay on the history of cartography.

Early mapmakers faced a fundamental epistemological problem: how to represent a spherical earth on a flat surface without distorting either shape or area. Every projection they devised was a compromise — a decision about which distortions were most tolerable given the map's intended use.

As used in this passage, "epistemological" most nearly means:`,
    options: [
      'related to practical engineering',
      'related to the nature and limits of knowledge',
      'related to artistic representation',
      'related to mathematical computation'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 13,
    text: `The following passage is adapted from a 2023 article on climate science communication.

Scientists often find themselves caught between the imperative to convey uncertainty honestly and the risk that doing so will be exploited by those who wish to cast doubt on well-established findings. This tension is not easily resolved; it requires a nuanced calibration between transparency and the potential for misrepresentation.

As used in this passage, "calibration" most nearly means:`,
    options: [
      'correction of errors',
      'careful adjustment to achieve a desired result',
      'public presentation of data',
      'systematic research methodology'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 14,
    text: `The following passage is adapted from a 2021 novel excerpt.

The village elder spoke in proverbs, as though direct statement were somehow indecorous — as though truth required oblique packaging to be properly received. The younger villagers, educated in cities, sometimes found this habit maddening; others recognized in it a kind of wisdom they had been too hasty to discard.

As used in this passage, "indecorous" most nearly means:`,
    options: [
      'difficult to understand',
      'socially inappropriate or improper',
      'unnecessarily confrontational',
      'intellectually dishonest'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 15,
    text: `The following passage is adapted from a 2022 article on technological ethics.

The rapid proliferation of facial recognition technology has outpaced the development of legal frameworks capable of governing its use. Regulators find themselves in a reactive posture — scrambling to address abuses after they occur rather than establishing prophylactic measures before deployment.

As used in this passage, "proliferation" most nearly means:`,
    options: [
      'rapid spread or increase in number',
      'public criticism and opposition',
      'commercial development and sale',
      'technical improvement and refinement'
    ],
    answer: 0,
    topic: 'Vocabulary in Context'
  },
  {
    id: 16,
    text: `The following passage is adapted from a 2023 essay on leadership.

The most effective leaders, research consistently shows, are neither autocratic nor entirely permissive. They occupy a middle ground — one that is firm on core principles while remaining genuinely receptive to input, flexible in approach while maintaining consistent vision. This balance is deceptively difficult to sustain.

As used in this passage, "autocratic" most nearly means:`,
    options: [
      'indecisive and inconsistent',
      'favoring total personal control without input from others',
      'technically skilled but socially awkward',
      'responsive to collective decision-making'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 17,
    text: `The following passage is adapted from a historical account of the Renaissance.

The Renaissance humanists placed unprecedented emphasis on the dignity and potential of individual human beings — a philosophical orientation that represented a marked departure from the medieval view of humanity as fundamentally fallen and in need of divine redemption.

As used in this passage, "unprecedented" most nearly means:`,
    options: [
      'extreme and uncompromising',
      'never having occurred or existed before',
      'widely recognized and influential',
      'controversial and short-lived'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 18,
    text: `The following passage is adapted from a 2022 article on neuroscience and emotion.

Contrary to older models that portrayed emotion and reason as oppositional faculties, contemporary neuroscience suggests they are deeply intertwined. Damage to emotional processing regions of the brain does not produce clearer thinking — it produces profoundly impaired decision-making, suggesting that affect is not an impediment to rationality but a component of it.

As used in this passage, "impediment" most nearly means:`,
    options: [
      'obstacle or hindrance',
      'essential building block',
      'detectable symptom',
      'misunderstood concept'
    ],
    answer: 0,
    topic: 'Vocabulary in Context'
  },
  {
    id: 19,
    text: `The following passage is adapted from a 2023 profile of an environmental activist.

She was not an idealist in the pejorative sense — she harbored no illusions about the complexity of the systems she sought to change. Her optimism was strategic rather than naive: a deliberate choice to act as though change were possible because the alternative, despair, was simply not a productive orientation.

As used in this passage, "pejorative" most nearly means:`,
    options: [
      'technical and precise',
      'widely debated and contested',
      'expressing disapproval or contempt',
      'admiring and complimentary'
    ],
    answer: 2,
    topic: 'Vocabulary in Context'
  },
  {
    id: 20,
    text: `The following passage is adapted from a 2021 essay on the philosophy of science.

Thomas Kuhn's concept of the paradigm shift challenged the prevailing view that science progresses through the gradual, linear accumulation of knowledge. Instead, Kuhn argued, science advances through periodic revolutions — moments of rupture when an existing framework collapses and is replaced by one that reorders the entire field.

As used in this passage, "rupture" most nearly means:`,
    options: [
      'gradual evolution',
      'sudden and decisive break',
      'period of stagnation',
      'public disagreement among researchers'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 21,
    text: `The following passage is adapted from a 2022 article on education reform.

Proponents of project-based learning argue that conventional curricula are overly fragmented — that dividing knowledge into isolated subjects produces students who can perform well on discrete assessments but struggle to synthesize information across domains or apply it to novel situations.

As used in this passage, "discrete" most nearly means:`,
    options: [
      'carefully considered',
      'individually separate and distinct',
      'increasingly difficult',
      'standardized and measurable'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 22,
    text: `The following passage is adapted from a 2023 article on social media and democracy.

Political scientists have become increasingly concerned about the role of algorithmic amplification in reinforcing partisan divisions. When platforms systematically surface content that provokes strong emotional reactions — content that is disproportionately extreme — the result is a media landscape that distorts public perception of where political consensus actually lies.

As used in this passage, "distorts" most nearly means:`,
    options: [
      'accurately reflects',
      'draws attention to',
      'misrepresents by twisting or altering',
      'amplifies and exaggerates'
    ],
    answer: 2,
    topic: 'Vocabulary in Context'
  },
  {
    id: 23,
    text: `The following two passages present contrasting views on artistic originality.

Passage 1: All creative work is, to some degree, derivative. Artists absorb the work of predecessors, internalize its principles, and recombine its elements in new configurations. What we call originality is rarely the invention of something entirely new but rather the synthesis of influences so personal and thorough that the result appears unprecedented.

Passage 2: While influence is inevitable, it does not preclude genuine originality. The artist who transforms borrowed materials through a distinctive sensibility — who imposes on them a vision sufficiently idiosyncratic — produces work that cannot fairly be called merely derivative.

As used in Passage 2, "idiosyncratic" most nearly means:`,
    options: [
      'widely imitated and influential',
      'peculiar to a particular individual',
      'technically accomplished and precise',
      'indebted to earlier traditions'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 24,
    text: `The following passage is adapted from a 2023 article on urban sociology.

The process by which affluent residents move into lower-income neighborhoods, driving up property values and displacing long-term inhabitants, has been studied extensively. What is less understood is how the cultural character of these neighborhoods — their vernacular architecture, informal economies, and communal practices — is simultaneously appropriated and erased by the very development that displaces their originators.

As used in this passage, "vernacular" most nearly means:`,
    options: [
      'historically significant',
      'characteristic of ordinary people of a particular region',
      'deliberately designed for public use',
      'economically efficient and practical'
    ],
    answer: 1,
    topic: 'Vocabulary in Context'
  },
  {
    id: 25,
    text: `The following passage is adapted from a 2022 article on cognitive psychology.

Sleep, researchers now understand, is not a passive state of rest but an active process of cognitive consolidation. During sleep, the brain replays and reorganizes experiences from waking life, strengthening important memories while pruning those judged less relevant. This selectivity is not random; it appears to be influenced by emotional salience, prior knowledge, and the brain's predictions about future usefulness.

As used in this passage, "salience" most nearly means:`,
    options: [
      'the degree to which something is noticeable or important',
      'the emotional pain associated with a memory',
      'the accuracy with which an event is remembered',
      'the frequency with which something is recalled'
    ],
    answer: 0,
    topic: 'Vocabulary in Context'
  }
];

// ── Topic Map ─────────────────────────────────
const TOPIC_MAP = {
  'Vocabulary in Context': {
    name: 'Vocabulary in Context',
    questions: QUESTIONS.map(q => q.id)
  }
};
