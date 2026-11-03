/* ------------------------------------------------------------------
   ALL YOUR CONTENT LIVES HERE.
   Add a new object to an array, save, push to GitHub – Vercel redeploys.
   Stats at the top of the page are calculated from this file.
------------------------------------------------------------------- */

window.PORTFOLIO = {
  owner: {
    name: "Sreeja",
    title: "NLP Learning Portfolio",
    tagline:
      "A running record of the questions I answered, the practice I did, and the stars I earned while learning Natural Language Processing.",
    github: "https://github.com/Sreeju6",
  },

  /* ---------- SECTION 1: Questions, answers, stars ---------- */
  questions: [
    {
      id: "Q1",
      topic: "NLP Challenges",
      question: "What are the challenges faced in NLP?",
      answer: "Idioms.",
      stars: 1,
    },
    {
      id: "Q2",
      topic: "NLP Techniques",
      question: "What technique is used in NLP?",
      answer: "Hashing.",
      stars: 1,
    },
    {
      id: "Q3",
      topic: "Telugu Morphology",
      question: "Give an example of a Telugu prefix pair.",
      answer: [
        { te: "సంతృప్తి", roman: "Santrupti", en: "Satisfaction" },
        { te: "అసంతృప్తి", roman: "Asantrupti", en: "Dissatisfaction" },
      ],
      stars: 1,
    },
    {
      id: "Q4",
      topic: "Rule-based Morphology",
      question: "CAT-2: Rule-based morphology",
      answer: "Answered in CAT-2. The handwritten answer sheet is attached as proof.",
      stars: 1,
      proof: {
        src: "assets/cat2-proof.jpg",
        caption: "CAT-2 handwritten answer – rule-based morphology",
      },
    },
  ],

  /* ---------- SECTION 2: NLP practice ---------- */
  practice: [
    {
      id: "P1",
      type: "coding",
      topic: "Hands-on Coding",
      title: "Coding Sessions",
      summary: "Two hands-on NLP coding sessions. Open the repository to see the work.",
      stars: null, // no marks added yet – put a number here when you have it
      link: {
        label: "View repository on GitHub",
        url: "https://github.com/Sreeju6/NLP-HANDS-ON-SESSION",
      },
      badge: "2 sessions",
    },
    {
      id: "P2",
      type: "translation",
      topic: "Literary Translation",
      title: "Translation Differences in Indian-Language Literature",
      stars: 4,
      original: {
        lines: [
          "దేశమును ప్రేమించుమన్నా",
          "మంచి అన్నది పెంచుమన్నా",
          "వట్టి మాటలు కట్టిపెట్టోయ్",
          "గట్టి మేల్ తలపెట్టవోయ్",
        ],
        meaning:
          "The poem encourages people to love their country through meaningful actions rather than merely expressing patriotic feelings through words. It emphasizes developing goodness, contributing to society and working towards the welfare and progress of the nation. The poet conveys that true patriotism is demonstrated through responsibility, hard work and positive contributions to society.",
        source: [
          ["Author", "Gurajada Apparao (గురజాడ అప్పారావు)"],
          ["Literary work", "Desamunu Preminchumanna (దేశమును ప్రేమించుమన్నా)"],
          ["Collection", "Mutyala Saralu (ముత్యాల సరాలు)"],
          ["Language", "Telugu"],
        ],
      },
      translations: [
        {
          key: "llm",
          label: "LLM English translation",
          lines: [
            "Love your country with all your heart,",
            "Let goodness grow and play its part.",
            "Stop speaking empty words in vain,",
            "Work towards progress and achieve real gain.",
          ],
        },
        {
          key: "human",
          label: "Translation from another source",
          note: "An alternative human-style translation created for comparison. It is not taken from a verified published translation.",
          lines: [
            "Show your love for the nation through what you do,",
            "Encourage goodness in everything you pursue.",
            "Do not waste your time with words alone,",
            "Work hard to build a better world of your own.",
          ],
        },
      ],
      similarity: [
        ["Cosine similarity score", "Not calculated"],
        ["Lexical similarity", "Medium"],
        ["Semantic similarity", "High"],
        ["Cultural similarity", "High"],
      ],
      difference: [
        "Both translations communicate the central message of the poem: genuine love for one's country must be expressed through actions rather than words alone.",
        "The LLM translation follows the original poem's direct message and preserves its emphasis on patriotism, goodness and productive action. It uses a more poetic structure with rhyming lines.",
        "The alternative human-style translation uses simpler and more conversational English. It focuses on making the message accessible to modern readers while retaining the original meaning.",
        "There are also cultural aspects worth considering. The Telugu expression “Desamunu Preminchumanna” does not simply mean loving a geographical country. It conveys a sense of social responsibility, commitment to fellow citizens and contribution to national development.",
        "Similarly, “Gatti Mel Talapettavoy” encourages people to undertake meaningful and constructive work rather than remaining satisfied with empty promises.",
      ],
      rubricNote:
        "These scores are illustrative assessments and have not been validated through a formal evaluation.",
      rubrics: {
        llm: {
          label: "LLM translation",
          scores: [
            ["Translation accuracy", 4.5],
            ["Lexical faithfulness", 4],
            ["Semantic similarity", 4.5],
            ["Cultural preservation", 4],
            ["Grammatical correctness", 5],
            ["Fluency and readability", 4.5],
            ["Poetic quality", 4.5],
          ],
        },
        human: {
          label: "Human-style translation",
          scores: [
            ["Translation accuracy", 4],
            ["Lexical faithfulness", 3.5],
            ["Semantic similarity", 4.5],
            ["Cultural preservation", 4],
            ["Grammatical correctness", 5],
            ["Fluency and readability", 5],
            ["Poetic quality", 4],
          ],
        },
      },
    },
  ],

  /* ---------- SECTION 3: Projects (coming next) ---------- */
  projects: [],
};
