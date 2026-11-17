import { OPTIONAL_SUBJECTS, getNormalizedOptionalKey } from './optionalSubjectsData.js';

// Authoritative Master General Studies & CSAT Blueprint
// Rescheduled strictly starting from TODAY (November 17, 2026) towards Prelims May 30, 2027.
// Non-overlapping difficulty pacing (8.5 - 9 Hours daily).
// Every Sunday is strictly reserved for Buffer, Revision, and 100-MCQ Mock Practice.

// November 2026 Day-by-Day Master Curriculum (Nov 17 is TODAY)
const NOVEMBER_ROADMAP_TOPICS = {
  17: {
    theme: 'Indian Polity: Fundamental Rights (Articles 14-21)',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Indian Polity: Fundamental Rights (Articles 14-21)',
      paper: 'GS Paper II',
      focus: 'Landmark judgments (Kesavananda, Puttaswamy) & Constitutional limits',
      difficulty: 'High',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Indian Polity (M. Laxmikanth)',
        'NCERT Class 11: Indian Constitution at Work'
      ],
      officialSource: 'Legislative Department (Constitution of India)',
      officialUrl: 'https://legislative.gov.in/constitution-of-india/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Number Systems & Divisibility Rules',
      paper: 'CSAT Paper II',
      focus: 'Previous 10-year UPSC question patterns & speed practice',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Quantitative Aptitude (R.S. Aggarwal)',
        'UPSC CSAT Past 10 Years Question Papers'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/examinations/previous-question-papers'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (GS Polity / Optional Mastery)',
      paper: 'Practice Evaluation',
      focus: 'Score 9/10 to unlock the next module (Articles 14-21 jurisprudence)',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  18: {
    theme: 'Indian Polity: Directive Principles & Fundamental Duties (Articles 36-51A)',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Indian Polity: Directive Principles & Fundamental Duties (Articles 36-51A)',
      paper: 'GS Paper II',
      focus: 'Minerva Mills doctrine, Uniform Civil Code debate (Art 44), Fundamental Duties enforceability',
      difficulty: 'High',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Indian Polity (M. Laxmikanth - Ch 8 & 9)',
        'NCERT Class 11: Indian Constitution at Work'
      ],
      officialSource: 'Legislative Department (Constitution of India)',
      officialUrl: 'https://legislative.gov.in/constitution-of-india/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: LCM, HCF, Remainders & Cyclicity of Numbers',
      paper: 'CSAT Paper II',
      focus: 'Remainder theorem, cyclicity of unit digits, greatest common divisor problem patterns',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Quantitative Aptitude (R.S. Aggarwal)',
        'CSAT Paper II Solved Papers (Arihant)'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (DPSP, Fundamental Duties & Optional Slot)',
      paper: 'Practice Evaluation',
      focus: 'Solve 10 high-yield analytical MCQs with negative marking deduction',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  19: {
    theme: 'Modern History: Socio-Religious Reform Movements & 1857 Uprising',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Modern Indian History: Socio-Religious Reform Movements & 1857 Uprising',
      paper: 'GS Paper I',
      focus: 'Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar, Jyotirao Phule, administrative impact of 1857',
      difficulty: 'Medium',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'A Brief History of Modern India (Spectrum)',
        'NCERT Class 12: Themes in Indian History (Part III)'
      ],
      officialSource: 'National Archives of India & Ministry of Culture',
      officialUrl: 'http://nationalarchives.nic.in/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Percentages, Profit, Loss & Discount',
      paper: 'CSAT Paper II',
      focus: 'Successive percentage changes, markup price calculation, speed formulas',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Quantitative Aptitude (R.S. Aggarwal)',
        'UPSC CSAT Past 10 Years Question Papers'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Modern Indian History & Reformers)',
      paper: 'Practice Evaluation',
      focus: 'Score 9/10 to unlock next module (Spectrum 1857 & Reform Movements)',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  20: {
    theme: 'Modern History: Freedom Struggle - Moderate to Extremist Phase (1885-1919)',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Modern Indian History: Freedom Struggle - Moderate to Extremist Phase (1885-1919)',
      paper: 'GS Paper I',
      focus: 'Drain of wealth theory, Swadeshi Movement 1905, Surat split 1907, Lucknow Pact 1916',
      difficulty: 'High',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        "India's Struggle for Independence (Bipan Chandra)",
        'Spectrum Modern India (Rajiv Ahir)'
      ],
      officialSource: 'National Archives of India',
      officialUrl: 'http://nationalarchives.nic.in/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Ratio, Proportion, Mixtures & Alligations',
      paper: 'CSAT Paper II',
      focus: 'Direct and inverse proportion, rule of alligation, replacement problem sets',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Quantitative Aptitude (R.S. Aggarwal)',
        'CSAT Manual (Tata McGraw Hill)'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Indian National Movement 1885-1919)',
      paper: 'Practice Evaluation',
      focus: 'Multi-statement questions on Swadeshi Movement & Early Congress sessions',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  21: {
    theme: 'Indian Economy: Fiscal Policy, Monetary Framework & Inflation Dynamics',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Indian Economy: Fiscal Policy, Monetary Framework & Inflation Dynamics',
      paper: 'GS Paper III',
      focus: 'FRBM Act targets, CPI vs WPI baskets, RBI Monetary Policy Committee (MPC) transmission',
      difficulty: 'High',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Indian Economy (Nitin Singhania / Ramesh Singh)',
        'NCERT Class 12: Introductory Macroeconomics'
      ],
      officialSource: 'Reserve Bank of India (Monetary Policy) & Ministry of Finance',
      officialUrl: 'https://www.rbi.org.in/scripts/FS_Overview.aspx?fn=2752'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Reading Comprehension & Implicit Assumptions',
      paper: 'CSAT Paper II',
      focus: 'Eliminating extreme statements, identifying author stance, drawing valid corollaries',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Analytical Reasoning (M.K. Pandey)',
        'CSAT Reading Comprehension (Arihant)'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Macroeconomics & RBI Monetary Policy)',
      paper: 'Practice Evaluation',
      focus: 'Score 9/10 to unlock next module (MPC, Repo Rate transmission, FRBM Act)',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  23: {
    theme: 'Physical Geography: Geomorphology (Plate Tectonics & Earthquake Belts)',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Physical Geography: Geomorphology (Plate Tectonics & Earthquake Belts)',
      paper: 'GS Paper I',
      focus: 'Continental drift, plate boundaries, Benioff zone, volcanic landforms & Indian seismic zones',
      difficulty: 'Medium',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Certificate Physical and Human Geography (G.C. Leong)',
        'NCERT Class 11: Fundamentals of Physical Geography'
      ],
      officialSource: 'Geological Survey of India (GSI)',
      officialUrl: 'https://www.gsi.gov.in/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Time, Speed, Distance & Relative Motion',
      paper: 'CSAT Paper II',
      focus: 'Trains passing platforms/poles, circular tracks, boats and streams speed logic',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Quantitative Aptitude (R.S. Aggarwal)',
        'CSAT Paper II Solved Papers (Arihant)'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Geomorphology & CSAT TSD)',
      paper: 'Practice Evaluation',
      focus: 'High-yield plate tectonics, trenches, island arcs, and speed math MCQs',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  24: {
    theme: 'Physical Geography: Climatology (Atmospheric Circulation & Monsoons)',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Physical Geography: Climatology (Atmospheric Circulation & Monsoons)',
      paper: 'GS Paper I',
      focus: 'Tri-cellular model (Hadley, Ferrel, Polar), Jet streams, El Niño/La Niña/IOD, monsoon mechanism',
      difficulty: 'High',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Physical Geography (Savindra Singh)',
        'NCERT Class 11: Physical Environment'
      ],
      officialSource: 'India Meteorological Department (IMD Mausam)',
      officialUrl: 'https://mausam.imd.gov.in/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Permutations, Combinations & Probability',
      paper: 'CSAT Paper II',
      focus: 'Arrangements with constraints, circular arrangements, probability theorem',
      difficulty: 'High',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Quantitative Aptitude (R.S. Aggarwal)',
        'UPSC CSAT Past 10 Years Question Papers'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Climatology & Indian Monsoon)',
      paper: 'Practice Evaluation',
      focus: 'Tropical cyclones, Coriolis force, Madden-Julian Oscillation (MJO) statements',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  25: {
    theme: 'Indian Economy: Agriculture, Cropping Patterns & Irrigation Reforms',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Indian Economy: Agriculture, Cropping Patterns & Irrigation Reforms',
      paper: 'GS Paper III',
      focus: 'MSP formula (A2+FL vs C2), PM Krishi Sinchayee Yojana, micro-irrigation, supply chain reforms',
      difficulty: 'Medium',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Indian Economy (Ramesh Singh)',
        'Economic Survey 2024-25 (Agriculture Chapter)'
      ],
      officialSource: 'Ministry of Agriculture & Farmers Welfare (e-NAM)',
      officialUrl: 'https://agricoop.nic.in/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Syllogisms, Blood Relations & Direction Sense',
      paper: 'CSAT Paper II',
      focus: 'Venn diagrams for Venn syllogism, coded blood relations, shortest path vectors',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'A Modern Approach to Verbal Reasoning (R.S. Aggarwal)',
        'Analytical Reasoning (M.K. Pandey)'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Agricultural Economics & CSAT Reasoning)',
      paper: 'Practice Evaluation',
      focus: 'CACP recommendations, buffer stock norms, FCI procurement practices',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  26: {
    theme: 'Constitution Day Special: Preamble, Basic Structure & Constitutionalism',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Indian Polity: Constitution Day Special - Preamble, Basic Structure & Constitutionalism',
      paper: 'GS Paper II',
      focus: 'Kesavananda Bharati, Minerva Mills, Judicial Review, Parliamentary vs Constitutional Supremacy',
      difficulty: 'High',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Indian Polity (M. Laxmikanth)',
        'Introduction to the Constitution of India (D.D. Basu)'
      ],
      officialSource: 'Legislative Department (Constitution of India)',
      officialUrl: 'https://legislative.gov.in/constitution-of-india/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Data Interpretation (Tables, Bar Charts & Pie Graphs)',
      paper: 'CSAT Paper II',
      focus: 'Fast calculation tricks for multi-variable tables, percentage growth vs absolute change',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Quantitative Aptitude (R.S. Aggarwal)',
        'UPSC CSAT Past 10 Years Question Papers'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Constitution Day Special & Basic Structure)',
      paper: 'Practice Evaluation',
      focus: 'Score 9/10 to unlock next module (Doctrine of Severability, Eclipse, Basic Structure)',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  27: {
    theme: 'Environment & Ecology: Biodiversity Conservation & Wildlife Protection Act 1972',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Environment & Ecology: Biodiversity Conservation & Wildlife Protection Act 1972',
      paper: 'GS Paper III',
      focus: 'WPA 1972 schedules (amended 2022), CITES, National Parks vs Biosphere Reserves, Ramsar sites',
      difficulty: 'Medium',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Environment (Shankar IAS)',
        'NCERT Class 12: Biology (Ecology & Environment Unit)'
      ],
      officialSource: 'Ministry of Environment, Forest and Climate Change (MoEFCC)',
      officialUrl: 'https://moef.gov.in/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Seating Arrangements, Coding-Decoding & Puzzles',
      paper: 'CSAT Paper II',
      focus: 'Linear and circular seating with bidirectional facing directions, matrix puzzles',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'A Modern Approach to Verbal Reasoning (R.S. Aggarwal)',
        'CSAT Manual (Tata McGraw Hill)'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Biodiversity & Wildlife Protection Act)',
      paper: 'Practice Evaluation',
      focus: 'Species distribution, IUCN Red List categories of Indian megafauna, Ramsar criteria',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  28: {
    theme: 'Ethics, Integrity & Aptitude: Foundational Values of Civil Services & Public Probity',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Ethics, Integrity & Aptitude: Foundational Values of Civil Services & Public Probity',
      paper: 'GS Paper IV',
      focus: 'Integrity, impartiality, objectivity, empathy towards weaker sections, Nolan committee principles',
      difficulty: 'Medium',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Ethics, Integrity & Aptitude (Subba Rao & P.N. Roy Chowdhury)',
        '2nd ARC: 4th Report on Ethics in Governance'
      ],
      officialSource: 'Department of Administrative Reforms and Public Grievances (DARPG)',
      officialUrl: 'https://darpg.gov.in/arc-reports'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Critical Reasoning, Assumption & Flaw in Passage',
      paper: 'CSAT Paper II',
      focus: 'Dissecting author arguments, identifying logical fallacies and necessary assumptions',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Analytical Reasoning (M.K. Pandey)',
        'UPSC CSAT Past 10 Years Question Papers'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Ethics Dilemmas & Foundational Values)',
      paper: 'Practice Evaluation',
      focus: 'Conflict of interest, whistleblowing, administrative discretion case MCQs',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  },

  30: {
    theme: 'Indian Polity: Union Executive (President, PM) & Parliamentary Committees',
    gs: {
      slot: '09:30 - 12:30',
      title: 'Indian Polity: Union Executive (President, PM) & Parliamentary Committees',
      paper: 'GS Paper II',
      focus: 'Ordinance-making power (Art 123), Pardoning power (Art 72), PAC, Estimates Committee, parliamentary privileges',
      difficulty: 'High',
      hours: 3,
      type: 'GS Core',
      standardBooks: [
        'Indian Polity (M. Laxmikanth - Chapters 17, 18, 22)',
        'NCERT Class 11: Indian Constitution at Work'
      ],
      officialSource: 'Parliament of India / Sansad Portal',
      officialUrl: 'https://sansad.in/'
    },
    csat: {
      slot: '17:30 - 19:00',
      title: 'CSAT: Sequence, Series & Number Patterns',
      paper: 'CSAT Paper II',
      focus: 'Arithmetic progressions, geometric progressions, alternating sequence patterns',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      standardBooks: [
        'Quantitative Aptitude (R.S. Aggarwal)',
        'CSAT Paper II Solved Papers (Arihant)'
      ],
      officialSource: 'Union Public Service Commission (UPSC Official)',
      officialUrl: 'https://upsc.gov.in/'
    },
    mcq: {
      slot: '20:30 - 21:30',
      title: 'Daily Topic MCQ Test (Union Executive & Parliamentary Committees)',
      paper: 'Practice Evaluation',
      focus: 'Score 9/10 to unlock next module (Presidential discretion, Committee reports)',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      standardBooks: [
        'UPSC Prelims 25-Year Solved Papers',
        'Subject-wise Objective Question Bank'
      ],
      officialSource: 'UPSC Official Examination Portal',
      officialUrl: 'https://upsc.gov.in/'
    }
  }
};

// Fallback pool for other months / general days
const ROTATING_GS_SYLLABUS = [
  {
    paper: 'GS Paper II',
    subject: 'Indian Polity',
    topic: 'Judiciary: Supreme Court, High Courts, Judicial Review & Collegium System',
    focus: 'Articles 124-147, 214-231, NJAC judgment, Special Leave Petitions (Art 136)',
    diff: 'High',
    books: ['Indian Polity (M. Laxmikanth)', 'Introduction to Constitution of India (D.D. Basu)'],
    source: 'Supreme Court of India Official Portal',
    url: 'https://main.sci.gov.in/'
  },
  {
    paper: 'GS Paper I',
    subject: 'Modern History',
    topic: 'Gandhian Mass Movements: Non-Cooperation, Civil Disobedience & Quit India',
    focus: 'Khilafat alliance, salt satyagraha, Gandhi-Irwin pact, Poona pact, August Kranti',
    diff: 'High',
    books: ["India's Struggle for Independence (Bipan Chandra)", 'Spectrum Modern India (Rajiv Ahir)'],
    source: 'National Archives of India',
    url: 'http://nationalarchives.nic.in/'
  },
  {
    paper: 'GS Paper III',
    subject: 'Indian Economy',
    topic: 'Banking Sector Reforms, NPA Resolution, IBC 2016 & Capital Markets',
    focus: 'Insolvency and Bankruptcy Code (IBC), Prompt Corrective Action (PCA), SEBI regulations',
    diff: 'High',
    books: ['Indian Economy (Nitin Singhania)', 'Economic Survey 2024-25'],
    source: 'Insolvency and Bankruptcy Board of India (IBBI)',
    url: 'https://www.ibbi.gov.in/'
  },
  {
    paper: 'GS Paper I',
    subject: 'Physical Geography',
    topic: 'Oceanography: Ocean Relief, Currents, Tides & Marine Resources',
    focus: 'Thermohaline circulation, Kuroshio & Gulf Stream, UNCLOS marine zones, polymetallic nodules',
    diff: 'Medium',
    books: ['Physical Geography (Savindra Singh)', 'Certificate Physical & Human Geography (G.C. Leong)'],
    source: 'National Institute of Oceanography (CSIR-NIO)',
    url: 'https://www.nio.org/'
  },
  {
    paper: 'GS Paper II',
    subject: 'Governance',
    topic: 'Statutory, Regulatory & Quasi-Judicial Bodies (CAG, Election Commission, NHRC)',
    focus: 'Constitutional status, appointment criteria, autonomy challenges & 2nd ARC recommendations',
    diff: 'Medium',
    books: ['Indian Polity (M. Laxmikanth)', 'Governance in India (Laxmikanth)'],
    source: 'Comptroller and Auditor General of India (CAG)',
    url: 'https://cag.gov.in/'
  },
  {
    paper: 'GS Paper III',
    subject: 'Environment & Climate Change',
    topic: 'UNFCCC, COP Summits, Carbon Markets & Renewable Energy Targets',
    focus: 'Paris Agreement Article 6, India Panchamrit targets, National Green Hydrogen Mission',
    diff: 'High',
    books: ['Environment (Shankar IAS)', 'Ministry of New & Renewable Energy Reports'],
    source: 'Ministry of New and Renewable Energy (MNRE)',
    url: 'https://mnre.gov.in/'
  },
  {
    paper: 'GS Paper IV',
    subject: 'Ethics',
    topic: 'Probity in Governance: RTI Act 2005, Citizen Charters & Code of Conduct',
    focus: 'Central Information Commission, section 4 proactive disclosures, Sevottam model',
    diff: 'Medium',
    books: ['Ethics, Integrity & Aptitude (Subba Rao)', '2nd ARC: Right to Information Report'],
    source: 'Central Information Commission (CIC)',
    url: 'https://cic.gov.in/'
  },
  {
    paper: 'CSAT Paper II',
    subject: 'Quantitative Aptitude',
    topic: 'Work, Pipes, Cisterns & Compound Interest Dynamics',
    focus: 'Efficiency ratios, negative work (leakage), CI vs SI differences for 2 and 3 years',
    diff: 'Medium',
    books: ['Quantitative Aptitude (R.S. Aggarwal)', 'UPSC CSAT Past 10 Years Question Papers'],
    source: 'Union Public Service Commission (UPSC Official)',
    url: 'https://upsc.gov.in/'
  }
];

// Generates authentic month-wise day-by-day plan calibrated to Prelims Exam Date: May 30, 2027
export function generateMonthSchedule(year, monthIndex, userOptional) {
  const optKey = getNormalizedOptionalKey(userOptional);
  const optionalConfig = OPTIONAL_SUBJECTS[optKey] || OPTIONAL_SUBJECTS['PSIR (Political Science & International Relations)'];

  const date = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const monthName = date.toLocaleString('default', { month: 'long' });

  const days = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const curDate = new Date(year, monthIndex, day);
    const dayOfWeek = curDate.getDay(); // 0 = Sunday
    const dateString = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayName = curDate.toLocaleString('default', { weekday: 'short' });
    const isToday = (year === 2026 && monthIndex === 10 && day === 17);
    const isPast = (year === 2026 && monthIndex === 10 && day < 17);

    if (dayOfWeek === 0) {
      // SUNDAY: Strictly Buffer & Revision Day (PRD Requirement: Zero new cognitive syllabus)
      days.push({
        dayNumber: day,
        date: dateString,
        dayOfWeek: 'Sunday',
        dayName,
        isSunday: true,
        isToday,
        isPast,
        totalHours: 8,
        theme: 'Buffer Day: Weekly Revision, Backlog Clearance & Full Mock Test',
        sessions: [
          {
            slot: '07:30 - 09:30',
            title: 'Weekly Current Affairs Consolidation (PIB + The Hindu Editorials)',
            subject: 'Weekly Current Affairs Consolidation (PIB + The Hindu Editorials)',
            paper: 'Revision Slot 1',
            type: 'Revision',
            focus: "Revise week's PIB summaries, Hindu notes & create mind-maps",
            hours: 2,
            difficulty: 'Medium',
            completed: isPast,
            standardBooks: [
              'The Hindu Weekly Compilation',
              'PIB Weekly Special Releases',
              'Sansad TV Perspective Notes'
            ],
            officialSource: 'Press Information Bureau (Government of India)',
            officialUrl: 'https://pib.gov.in/'
          },
          {
            slot: '10:30 - 12:30',
            title: 'Full-Length UPSC Prelims Simulated Mock Test (100 MCQs)',
            subject: 'Full-Length UPSC Prelims Simulated Mock Test (100 MCQs)',
            paper: 'Evaluation',
            type: 'Practice',
            focus: 'Simulated exam conditions (100 questions, negative marking 0.66)',
            hours: 2,
            difficulty: 'High',
            completed: isPast,
            standardBooks: [
              'UPSC Prelims 25-Year Solved Papers',
              'All-India Prelims Test Series Mock Paper'
            ],
            officialSource: 'UPSC Official Examination Portal',
            officialUrl: 'https://upsc.gov.in/'
          },
          {
            slot: '14:00 - 16:30',
            title: 'Diagnostic Error Post-Mortem & Weak Area Revision',
            subject: 'Diagnostic Error Post-Mortem & Weak Area Revision',
            paper: 'Revision Slot 2',
            type: 'Analysis',
            focus: 'Analyze silly mistakes vs conceptual gaps; log mistakes in Error Notebook',
            hours: 2.5,
            difficulty: 'High',
            completed: isPast,
            standardBooks: [
              'Personal UPSC Error Register & Diagnostic Logbook'
            ],
            officialSource: 'Union Public Service Commission (UPSC Official)',
            officialUrl: 'https://upsc.gov.in/'
          },
          {
            slot: '17:30 - 19:00',
            title: `Weekly Optional Backlog Clearance & Consolidation (${optionalConfig.name})`,
            subject: `Weekly Optional Backlog Clearance & Consolidation (${optionalConfig.name})`,
            paper: 'Buffer Time',
            type: 'Buffer',
            focus: `Cover any unfinished topics from Monday-Saturday without cognitive rushing (${optionalConfig.name})`,
            hours: 1.5,
            difficulty: 'Medium',
            completed: isPast,
            standardBooks: optionalConfig.activeSession.standardBooks,
            officialSource: optionalConfig.activeSession.officialSource,
            officialUrl: optionalConfig.activeSession.officialUrl
          }
        ]
      });
    } else {
      // WEEKDAY (Mon-Sat): 8.5 to 9 Hours Paced Study
      // If in November 2026, use the curated day-by-day roadmap
      if (year === 2026 && monthIndex === 10 && NOVEMBER_ROADMAP_TOPICS[day]) {
        const curated = NOVEMBER_ROADMAP_TOPICS[day];

        // Pick matching optional syllabus topic
        let optSessionData;
        if (day === 17) {
          // Exactly matches Today Task active session!
          optSessionData = {
            slot: '14:00 - 16:30',
            title: optionalConfig.activeSession.subject,
            subject: optionalConfig.activeSession.subject,
            paper: optionalConfig.activeSession.paper,
            focus: optionalConfig.activeSession.focus,
            difficulty: optionalConfig.activeSession.difficulty,
            hours: 2.5,
            type: 'Optional',
            completed: false,
            standardBooks: optionalConfig.activeSession.standardBooks,
            officialSource: optionalConfig.activeSession.officialSource,
            officialUrl: optionalConfig.activeSession.officialUrl
          };
        } else {
          // Sequential optional syllabus progression
          const optIdx = (day - 17) % optionalConfig.syllabus.length;
          const sylItem = optionalConfig.syllabus[optIdx >= 0 ? optIdx : 0];
          optSessionData = {
            slot: '14:00 - 16:30',
            title: `${optionalConfig.name}: ${sylItem.subject} - ${sylItem.topic}`,
            subject: `${optionalConfig.name}: ${sylItem.subject} - ${sylItem.topic}`,
            paper: sylItem.paper,
            focus: `Comprehensive syllabus mastery, answer formulation & PYQ linkage`,
            difficulty: sylItem.difficulty || 'High',
            hours: 2.5,
            type: 'Optional',
            completed: isPast,
            standardBooks: sylItem.standardBooks || optionalConfig.activeSession.standardBooks,
            officialSource: sylItem.officialSource || optionalConfig.activeSession.officialSource,
            officialUrl: sylItem.officialUrl || optionalConfig.activeSession.officialUrl
          };
        }

        days.push({
          dayNumber: day,
          date: dateString,
          dayOfWeek: curDate.toLocaleString('default', { weekday: 'long' }),
          dayName,
          isSunday: false,
          isToday,
          isPast,
          totalHours: 9,
          theme: `${curated.theme} • ${optionalConfig.name}`,
          sessions: [
            {
              slot: '06:30 - 08:30',
              title: 'Daily Current Affairs & Editorial Analysis (The Hindu / PIB)',
              subject: 'Daily Current Affairs & Editorial Analysis (The Hindu / PIB)',
              paper: 'Current Affairs',
              focus: 'Prelims micro-notes + GS2/GS3 Mains linkage',
              difficulty: 'Essential',
              hours: 2,
              type: 'Current Affairs',
              completed: isPast,
              standardBooks: [
                'The Hindu Daily National Edition',
                'Press Information Bureau (PIB) Daily Releases',
                'Indian Express (Explained Section)'
              ],
              officialSource: 'Press Information Bureau (Government of India)',
              officialUrl: 'https://pib.gov.in/'
            },
            {
              ...curated.gs,
              subject: curated.gs.title,
              completed: isPast
            },
            optSessionData,
            {
              ...curated.csat,
              subject: curated.csat.title,
              completed: isPast
            },
            {
              ...curated.mcq,
              title: `Daily Topic MCQ Test (GS Polity / ${optionalConfig.name} Mastery)`,
              subject: `Daily Topic MCQ Test (GS Polity / ${optionalConfig.name} Mastery)`,
              completed: isPast
            }
          ]
        });
      } else {
        // Dynamic generation for past November days or subsequent months (Dec 2026 - May 2027)
        const rotIdx = (day + monthIndex) % ROTATING_GS_SYLLABUS.length;
        const gsTopic = ROTATING_GS_SYLLABUS[rotIdx];
        const optSylIdx = (day - 1) % optionalConfig.syllabus.length;
        const optItem = optionalConfig.syllabus[optSylIdx];

        days.push({
          dayNumber: day,
          date: dateString,
          dayOfWeek: curDate.toLocaleString('default', { weekday: 'long' }),
          dayName,
          isSunday: false,
          isToday,
          isPast,
          totalHours: 9,
          theme: `${gsTopic.subject}: ${gsTopic.topic} • ${optionalConfig.name}`,
          sessions: [
            {
              slot: '06:30 - 08:30',
              title: 'Daily Current Affairs & Editorial Analysis (The Hindu / PIB)',
              subject: 'Daily Current Affairs & Editorial Analysis (The Hindu / PIB)',
              paper: 'Current Affairs',
              focus: 'Prelims micro-notes + GS2/GS3 Mains linkage',
              difficulty: 'Essential',
              hours: 2,
              type: 'Current Affairs',
              completed: isPast,
              standardBooks: [
                'The Hindu Daily National Edition',
                'Press Information Bureau (PIB) Daily Releases',
                'Indian Express (Explained Section)'
              ],
              officialSource: 'Press Information Bureau (Government of India)',
              officialUrl: 'https://pib.gov.in/'
            },
            {
              slot: '09:30 - 12:30',
              title: `${gsTopic.paper}: ${gsTopic.subject} - ${gsTopic.topic}`,
              subject: `${gsTopic.paper}: ${gsTopic.subject} - ${gsTopic.topic}`,
              paper: gsTopic.paper,
              focus: gsTopic.focus,
              difficulty: gsTopic.diff,
              hours: 3,
              type: 'GS Core',
              completed: isPast,
              standardBooks: gsTopic.books,
              officialSource: gsTopic.source,
              officialUrl: gsTopic.url
            },
            {
              slot: '14:00 - 16:30',
              title: `${optionalConfig.name}: ${optItem.subject} - ${optItem.topic}`,
              subject: `${optionalConfig.name}: ${optItem.subject} - ${optItem.topic}`,
              paper: optItem.paper,
              focus: 'Core theoretical foundations and UPSC Mains answer structures',
              difficulty: optItem.difficulty || 'High',
              hours: 2.5,
              type: 'Optional',
              completed: isPast,
              standardBooks: optItem.standardBooks || optionalConfig.activeSession.standardBooks,
              officialSource: optItem.officialSource || optionalConfig.activeSession.officialSource,
              officialUrl: optItem.officialUrl || optionalConfig.activeSession.officialUrl
            },
            {
              slot: '17:30 - 19:00',
              title: 'CSAT Paper II: Speed Math, Analytical Reasoning & RC',
              subject: 'CSAT Paper II: Speed Math, Analytical Reasoning & RC',
              paper: 'CSAT Paper II',
              focus: 'Speed drills, percentage short-cuts and reading comprehension accuracy',
              difficulty: 'Medium',
              hours: 1.5,
              type: 'CSAT',
              completed: isPast,
              standardBooks: [
                'Quantitative Aptitude (R.S. Aggarwal)',
                'CSAT Paper II Solved Papers (Arihant)'
              ],
              officialSource: 'Union Public Service Commission (UPSC Official)',
              officialUrl: 'https://upsc.gov.in/'
            },
            {
              slot: '20:30 - 21:30',
              title: `Daily Topic MCQ Assessment (10 MCQs - 9/10 Mastery Gate)`,
              subject: `Daily Topic MCQ Assessment (10 MCQs - 9/10 Mastery Gate)`,
              paper: 'Practice Evaluation',
              focus: 'Score 9/10 to unlock next module',
              difficulty: 'High',
              hours: 1,
              type: 'Assessment',
              completed: isPast,
              standardBooks: [
                'UPSC Prelims 25-Year Solved Papers',
                'Subject-wise Objective Question Bank'
              ],
              officialSource: 'UPSC Official Examination Portal',
              officialUrl: 'https://upsc.gov.in/'
            }
          ]
        });
      }
    }
  }

  return {
    year,
    monthIndex,
    monthName,
    days,
    totalPlannedHours: days.reduce((sum, d) => sum + d.totalHours, 0),
    bufferSundaysCount: days.filter((d) => d.isSunday).length,
  };
}

// Single Source of Truth for Today's Schedule (Nov 17, 2026)
export function getTodaySchedule(userOptional) {
  const novSchedule = generateMonthSchedule(2026, 10, userOptional);
  const todayDay = novSchedule.days.find((d) => d.dayNumber === 17);
  return todayDay ? todayDay.sessions : [];
}

// Single Source of Truth for Sunday Buffer Day
export function getSundayBufferSchedule(userOptional) {
  const novSchedule = generateMonthSchedule(2026, 10, userOptional);
  const sundayDay = novSchedule.days.find((d) => d.isSunday);
  return sundayDay ? sundayDay.sessions : [];
}

// Available Months leading to Prelims May 30, 2027
export const PREPARATION_MONTHS = [
  { year: 2026, monthIndex: 10, label: 'November 2026' },
  { year: 2026, monthIndex: 11, label: 'December 2026' },
  { year: 2027, monthIndex: 0, label: 'January 2027' },
  { year: 2027, monthIndex: 1, label: 'February 2027' },
  { year: 2027, monthIndex: 2, label: 'March 2027' },
  { year: 2027, monthIndex: 3, label: 'April 2027' },
  { year: 2027, monthIndex: 4, label: 'May 2027 (Prelims Sprint)' },
];
