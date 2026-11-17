// UPSC Optional Subjects & General Studies Authoritative Master Data
// Maps standard authoritative textbooks, NCERTs, and official Government/Institutional links

export const OPTIONAL_SUBJECTS = {
  'History': {
    name: 'History Optional',
    paper1: 'History Paper I (Ancient & Medieval India)',
    paper2: 'History Paper II (Modern India & World History)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: 'History Optional: Ancient Indian Historiography & Harappan Civilization',
      paper: 'History Paper I',
      focus: 'Archaeological sources, dating of IVC sites, urban planning & decline theories',
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "A History of Ancient and Early Medieval India (Upinder Singh)",
        "India's Ancient Past (R.S. Sharma)",
        "NCERT Class 12: Themes in Indian History (Part I)"
      ],
      officialSource: "Archaeological Survey of India (ASI)",
      officialUrl: "https://asi.nic.in/"
    },
    syllabus: [
      {
        id: 'HIST-OPT-01',
        paper: 'History Paper I',
        subject: 'Ancient Indian History',
        topic: 'Sources of Early Indian History & Harappan Urban Morphology',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "A History of Ancient and Early Medieval India (Upinder Singh)",
          "India's Ancient Past (R.S. Sharma)",
          "NCERT Class 11 & 12 Themes in Indian History"
        ],
        officialSource: "Archaeological Survey of India (ASI)",
        officialUrl: "https://asi.nic.in/"
      },
      {
        id: 'HIST-OPT-02',
        paper: 'History Paper I',
        subject: 'Medieval Indian History',
        topic: 'Delhi Sultanate: Agrarian Measures & Market Control of Alauddin Khilji',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "History of Medieval India (Satish Chandra)",
          "The Agrarian System of Mughal India (Irfan Habib)",
          "NCERT Class 12: Themes in Indian History (Part II)"
        ],
        officialSource: "National Archives of India",
        officialUrl: "http://nationalarchives.nic.in/"
      },
      {
        id: 'HIST-OPT-03',
        paper: 'History Paper II',
        subject: 'Modern Indian History',
        topic: 'Economic Impact of British Rule: De-industrialization & Drain of Wealth',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "From Plassey to Partition and After (Sekhar Bandyopadhyay)",
          "India's Struggle for Independence (Bipan Chandra)",
          "Poverty and Un-British Rule in India (Dadabhai Naoroji)"
        ],
        officialSource: "National Archives of India",
        officialUrl: "http://nationalarchives.nic.in/"
      },
      {
        id: 'HIST-OPT-04',
        paper: 'History Paper II',
        subject: 'World History',
        topic: 'Enlightenment and Modern ideas: French Revolution & Industrial Revolution',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Mastering Modern World History (Norman Lowe)",
          "Contemporary World History (NCERT Arjun Dev)",
          "History of the Modern World (Jain & Mathur)"
        ],
        officialSource: "UNESCO World Heritage Centre & Archives",
        officialUrl: "https://whc.unesco.org/"
      },
    ],
    sampleMCQTopic: 'Harappan Civilization & Ancient Indian Historiography',
  },

  'PSIR (Political Science & International Relations)': {
    name: 'PSIR Optional',
    paper1: 'PSIR Paper I (Political Theory & Indian Politics)',
    paper2: 'PSIR Paper II (Comparative Politics & International Relations)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: "PSIR Optional: Western Political Thought (Plato's Theory of Justice)",
      paper: 'PSIR Paper I',
      focus: 'Concept of Philosopher King, Allegory of Cave, Aristotle\'s critique of Plato',
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "Western Political Thought: From Socrates to the Age of Ideology (Brian Nelson)",
        "A History of Political Thought: Plato to Marx (Subrata Mukherjee & Sushila Ramaswamy)",
        "An Introduction to Political Theory (O.P. Gauba)"
      ],
      officialSource: "Stanford Encyclopedia of Philosophy (Classical Political Thought)",
      officialUrl: "https://plato.stanford.edu/entries/plato-justice/"
    },
    syllabus: [
      {
        id: 'PSIR-OPT-01',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: "Western Political Thought: Plato's Justice & Aristotle's Citizenship",
        difficulty: 'High',
        estimatedHours: 3,
        status: 'In Progress',
        standardBooks: [
          "Western Political Thought (Brian Nelson)",
          "An Introduction to Political Theory (O.P. Gauba)",
          "Political Theory: An Introduction (Rajeev Bhargava & Ashok Acharya)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy",
        officialUrl: "https://plato.stanford.edu/entries/plato-justice/"
      },
      {
        id: 'PSIR-OPT-02',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Making of the Constitution & Ideological Perspectives of National Movement',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "The Indian Constitution: Cornerstone of a Nation (Granville Austin)",
          "Working a Democratic Constitution (Granville Austin)",
          "Indian Government and Politics (B.L. Fadia)"
        ],
        officialSource: "Legislative Department (Ministry of Law and Justice) - Constitution of India",
        officialUrl: "https://legislative.gov.in/constitution-of-india/"
      },
      {
        id: 'PSIR-OPT-03',
        paper: 'PSIR Paper II',
        subject: 'International Relations Theory',
        topic: 'Realist vs Liberal Traditions in IR & Security Dilemma Dynamics',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "The Globalization of World Politics (John Baylis, Steve Smith & Patricia Owens)",
          "International Relations (Pavneet Singh)",
          "Theories of International Relations (Scott Burchill et al.)"
        ],
        officialSource: "Ministry of External Affairs (MEA Library & Research)",
        officialUrl: "https://www.mea.gov.in/"
      },
      {
        id: 'PSIR-OPT-04',
        paper: 'PSIR Paper II',
        subject: "India's Foreign Policy",
        topic: "Evolution of Strategic Autonomy & India's Act East / Indo-Pacific Policy",
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Does the Elephant Dance? Contemporary Indian Foreign Policy (David M. Malone)",
          "Challenge and Strategy: Rethinking India's Foreign Policy (Rajiv Sikri)",
          "The India Way: Strategies for an Uncertain World (S. Jaishankar)"
        ],
        officialSource: "Ministry of External Affairs (MEA Bilateral/Multilateral Documents)",
        officialUrl: "https://www.mea.gov.in/"
      },
    ],
    sampleMCQTopic: "Plato & Aristotle's Political Philosophy",
  },

  'Geography': {
    name: 'Geography Optional',
    paper1: 'Geography Paper I (Physical & Human Geography)',
    paper2: 'Geography Paper II (Geography of India)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: 'Geography Optional: Geomorphology & Plate Tectonics',
      paper: 'Geography Paper I',
      focus: "Wegener's continental drift, seafloor spreading, Davisian cycle of erosion",
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "Physical Geography (Savindra Singh)",
        "Geomorphology (Savindra Singh)",
        "NCERT Class 11: Fundamentals of Physical Geography"
      ],
      officialSource: "Geological Survey of India (GSI)",
      officialUrl: "https://www.gsi.gov.in/"
    },
    syllabus: [
      {
        id: 'GEOG-OPT-01',
        paper: 'Geography Paper I',
        subject: 'Physical Geography (Geomorphology)',
        topic: 'Plate Tectonics, Seafloor Spreading & Endogenetic Forces',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "Physical Geography (Savindra Singh)",
          "Physical Geography: Science and Systems (Alan Strahler)",
          "Certificate Physical and Human Geography (G.C. Leong)"
        ],
        officialSource: "Geological Survey of India (GSI)",
        officialUrl: "https://www.gsi.gov.in/"
      },
      {
        id: 'GEOG-OPT-02',
        paper: 'Geography Paper I',
        subject: 'Climatology',
        topic: 'Atmospheric Circulation, Jet Streams, Monsoons & ENSO Phenomena',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Climatology (D.S. Lal)",
          "General Climatology (Howard J. Critchfield)",
          "NCERT Class 11: Physical Environment"
        ],
        officialSource: "India Meteorological Department (IMD Mausam)",
        officialUrl: "https://mausam.imd.gov.in/"
      },
      {
        id: 'GEOG-OPT-03',
        paper: 'Geography Paper II',
        subject: 'Physical Setting of India',
        topic: 'Physiographic Divisions of India & Himalayan vs Peninsular Drainage',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Geography of India (Majid Husain)",
          "India: A Comprehensive Geography (D.R. Khullar)",
          "Oxford Student Atlas for India"
        ],
        officialSource: "Survey of India & ISRO Bhuvan Geo-Portal",
        officialUrl: "https://bhuvan.nrsc.gov.in/"
      },
    ],
    sampleMCQTopic: 'Geomorphology & Plate Tectonics',
  },

  'Public Administration': {
    name: 'Public Administration',
    paper1: 'Public Administration Paper I (Administrative Theory)',
    paper2: 'Public Administration Paper II (Indian Administration)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: 'Pub Ad Optional: Classical Administrative Thought (Taylor & Weber)',
      paper: 'Pub Ad Paper I',
      focus: 'Scientific Management principles, Weberian ideal-type bureaucracy critique',
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "Administrative Thinkers (D. Ravindra Prasad, V.S. Prasad et al.)",
        "New Horizons of Public Administration (Mohit Bhattacharya)",
        "Public Administration and Public Affairs (Nicholas Henry)"
      ],
      officialSource: "Indian Institute of Public Administration (IIPA)",
      officialUrl: "https://www.iipa.org.in/"
    },
    syllabus: [
      {
        id: 'PUBAD-OPT-01',
        paper: 'Pub Ad Paper I',
        subject: 'Administrative Theory',
        topic: 'Scientific Management, Classical Theory & Weberian Bureaucracy',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'In Progress',
        standardBooks: [
          "Administrative Thinkers (Prasad & Prasad)",
          "Public Administration: Concepts and Theories (Rumki Basu)",
          "New Horizons of Public Administration (Mohit Bhattacharya)"
        ],
        officialSource: "Indian Institute of Public Administration (IIPA)",
        officialUrl: "https://www.iipa.org.in/"
      },
      {
        id: 'PUBAD-OPT-02',
        paper: 'Pub Ad Paper I',
        subject: 'Behavioral School',
        topic: "Herbert Simon's Decision-Making Model & Satisficing Concept",
        difficulty: 'High',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Administrative Behavior (Herbert A. Simon)",
          "Administrative Thinkers (Prasad & Prasad)"
        ],
        officialSource: "Indian Institute of Public Administration (IIPA)",
        officialUrl: "https://www.iipa.org.in/"
      },
      {
        id: 'PUBAD-OPT-03',
        paper: 'Pub Ad Paper II',
        subject: 'Indian Administration',
        topic: 'Evolution of Indian Administration from Kautilya to Mughal & British Systems',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Indian Public Administration: Institutions and Issues (Ramesh K. Arora & Rajni Goyal)",
          "2nd Administrative Reforms Commission (ARC) Reports",
          "Public Administration in India (B.L. Fadia)"
        ],
        officialSource: "Department of Administrative Reforms and Public Grievances (DARPG)",
        officialUrl: "https://darpg.gov.in/arc-reports"
      },
    ],
    sampleMCQTopic: 'Classical Administrative Theories (Taylor & Weber)',
  },

  'Sociology': {
    name: 'Sociology Optional',
    paper1: 'Sociology Paper I (Fundamentals of Sociology)',
    paper2: 'Sociology Paper II (Indian Society: Structure and Change)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: 'Sociology Optional: Classical Sociological Thinkers (Marx & Durkheim)',
      paper: 'Sociology Paper I',
      focus: 'Historical materialism, theory of alienation, division of labour, suicide typology',
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "Sociological Theory (George Ritzer)",
        "Sociology: Themes and Perspectives (Michael Haralambos & Martin Holborn)",
        "Classical Sociological Theory (Ian Craib)"
      ],
      officialSource: "National Digital Library of India (NDLI Sociology)",
      officialUrl: "https://ndl.iitkgp.ac.in/"
    },
    syllabus: [
      {
        id: 'SOC-OPT-01',
        paper: 'Sociology Paper I',
        subject: 'Sociological Thinkers',
        topic: 'Karl Marx: Historical Materialism, Alienation and Class Struggle',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'In Progress',
        standardBooks: [
          "Sociological Theory (George Ritzer)",
          "Sociology: Themes and Perspectives (Haralambos & Holborn)",
          "Capital (Karl Marx, Vol. 1 Reader)"
        ],
        officialSource: "National Digital Library of India (NDLI)",
        officialUrl: "https://ndl.iitkgp.ac.in/"
      },
      {
        id: 'SOC-OPT-02',
        paper: 'Sociology Paper I',
        subject: 'Sociological Thinkers',
        topic: 'Emile Durkheim: Division of Labour, Social Facts, Suicide and Religion',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "The Rules of Sociological Method (Emile Durkheim)",
          "Suicide: A Study in Sociology (Emile Durkheim)",
          "Sociological Theory (George Ritzer)"
        ],
        officialSource: "National Digital Library of India (NDLI)",
        officialUrl: "https://ndl.iitkgp.ac.in/"
      },
      {
        id: 'SOC-OPT-03',
        paper: 'Sociology Paper II',
        subject: 'Indian Social Structure',
        topic: 'Perspectives on the Study of Indian Society: Indology vs Structural Functionalism',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Social Change in Modern India (M.N. Srinivas)",
          "Caste in Modern India and Other Essays (M.N. Srinivas)",
          "Society in India (Ram Ahuja)"
        ],
        officialSource: "Ministry of Social Justice and Empowerment",
        officialUrl: "https://socialjustice.gov.in/"
      },
    ],
    sampleMCQTopic: 'Marx and Durkheim Sociological Theories',
  },

  'Anthropology': {
    name: 'Anthropology Optional',
    paper1: 'Anthropology Paper I (Physical & Socio-Cultural Anthropology)',
    paper2: 'Anthropology Paper II (Indian Anthropology & Tribal Studies)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: 'Anthropology Optional: Theories of Culture & Human Evolution',
      paper: 'Anthropology Paper I',
      focus: 'Fossil evidence of hominization (Australopithecus, Homo erectus, Neanderthals)',
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "Physical Anthropology (P. Nath)",
        "Outlines of Physical Anthropology (B.M. Das)",
        "An Introduction to Social Anthropology (D.N. Majumdar & T.N. Madan)"
      ],
      officialSource: "Anthropological Survey of India (AnSI)",
      officialUrl: "https://ansi.gov.in/"
    },
    syllabus: [
      {
        id: 'ANTH-OPT-01',
        paper: 'Anthropology Paper I',
        subject: 'Physical Anthropology',
        topic: 'Human Evolution: Biological and Cultural Dimensions of Hominization',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "Physical Anthropology (P. Nath)",
          "Outlines of Physical Anthropology (B.M. Das)",
          "Understanding Human Evolution (Jeffrey K. McKee)"
        ],
        officialSource: "Anthropological Survey of India (AnSI)",
        officialUrl: "https://ansi.gov.in/"
      },
      {
        id: 'ANTH-OPT-02',
        paper: 'Anthropology Paper I',
        subject: 'Socio-Cultural Anthropology',
        topic: 'Theories of Culture: Evolutionism, Historical Particularism & Functionalism',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "An Introduction to Anthropological Thought (Makhan Jha)",
          "Cultural Anthropology (William A. Haviland)",
          "Anthropology (E.A. Hoebel)"
        ],
        officialSource: "Anthropological Survey of India (AnSI)",
        officialUrl: "https://ansi.gov.in/"
      },
      {
        id: 'ANTH-OPT-03',
        paper: 'Anthropology Paper II',
        subject: 'Indian Anthropology',
        topic: 'Tribal Situation in India: Problems of Integration, Land Alienation & Indebtedness',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Indian Anthropology (Nadeem Hasnain)",
          "Tribal India (Nadeem Hasnain)",
          "The Tribal World of Verrier Elwin (Verrier Elwin)"
        ],
        officialSource: "Ministry of Tribal Affairs (TRIFED & Tribal Research)",
        officialUrl: "https://tribal.nic.in/"
      },
    ],
    sampleMCQTopic: 'Human Evolution & Culture Theories',
  },

  'Economics': {
    name: 'Economics Optional',
    paper1: 'Economics Paper I (Advanced Economic Theory & International Trade)',
    paper2: 'Economics Paper II (Indian Economy: Post-Independence Planning & Reforms)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: 'Economics Optional: Advanced Micro & Macro Equilibrium Models',
      paper: 'Economics Paper I',
      focus: 'Consumer behavior, general equilibrium, IS-LM framework, Mundell-Fleming model',
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "Advanced Economic Theory: Microeconomic Analysis (H.L. Ahuja)",
        "Macroeconomics: Theories and Policies (Richard T. Froyen)",
        "International Economics (Dominick Salvatore)"
      ],
      officialSource: "Reserve Bank of India (Research & Bulletins)",
      officialUrl: "https://www.rbi.org.in/"
    },
    syllabus: [
      {
        id: 'ECO-OPT-01',
        paper: 'Economics Paper I',
        subject: 'Macroeconomic Theory',
        topic: 'IS-LM Model, Aggregate Demand and Supply, Inflation and Unemployment Trade-offs',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "Macroeconomics (Richard T. Froyen)",
          "Macroeconomic Theory and Policy (H.L. Ahuja)",
          "Macroeconomics (N. Gregory Mankiw)"
        ],
        officialSource: "Reserve Bank of India (Monetary Policy Framework)",
        officialUrl: "https://www.rbi.org.in/scripts/FS_Overview.aspx?fn=2752"
      },
      {
        id: 'ECO-OPT-02',
        paper: 'Economics Paper I',
        subject: 'International Economics',
        topic: 'Heckscher-Ohlin Model, Terms of Trade and Tariff Protection Theories',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "International Economics: Trade and Finance (Dominick Salvatore)",
          "International Trade: Theory and Policy (Paul R. Krugman & Maurice Obstfeld)"
        ],
        officialSource: "Ministry of Commerce and Industry / DGFT",
        officialUrl: "https://www.dgft.gov.in/"
      },
      {
        id: 'ECO-OPT-03',
        paper: 'Economics Paper II',
        subject: 'Indian Economy',
        topic: 'Planning Era to NITI Aayog: Structural Reforms, Fiscal Federalism & Growth Dynamics',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Indian Economy: Performance and Policies (Uma Kapila)",
          "Indian Economy (S.K. Misra & V.K. Puri)",
          "Economic Survey 2024-25 & Union Budget Documents"
        ],
        officialSource: "NITI Aayog & Ministry of Finance",
        officialUrl: "https://www.niti.gov.in/"
      },
    ],
    sampleMCQTopic: 'Macroeconomic Equilibrium & Trade Models',
  },

  'Philosophy': {
    name: 'Philosophy Optional',
    paper1: 'Philosophy Paper I (History & Problems of Philosophy)',
    paper2: 'Philosophy Paper II (Socio-Political Philosophy & Philosophy of Religion)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: 'Philosophy Optional: Indian Epistemology & Western Rationalism',
      paper: 'Philosophy Paper I',
      focus: "Pramanas in Nyaya, Samkhya Purusha-Prakriti, Descartes' Cogito Ergo Sum",
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "A Critical Survey of Indian Philosophy (C.D. Sharma)",
        "Outlines of Indian Philosophy (M. Hiriyanna)",
        "A Critical History of Western Philosophy (Y. Masih)"
      ],
      officialSource: "Indian Council of Philosophical Research (ICPR)",
      officialUrl: "https://www.icpr.in/"
    },
    syllabus: [
      {
        id: 'PHIL-OPT-01',
        paper: 'Philosophy Paper I',
        subject: 'Indian Philosophy',
        topic: 'Carvaka, Jainism, Buddhism, and Nyaya Epistemology (Pramanas)',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'In Progress',
        standardBooks: [
          "A Critical Survey of Indian Philosophy (C.D. Sharma)",
          "Outlines of Indian Philosophy (M. Hiriyanna)",
          "An Introduction to Indian Philosophy (Satischandra Chatterjee & Dhirendramohan Datta)"
        ],
        officialSource: "Indian Council of Philosophical Research (ICPR)",
        officialUrl: "https://www.icpr.in/"
      },
      {
        id: 'PHIL-OPT-02',
        paper: 'Philosophy Paper I',
        subject: 'Western Philosophy',
        topic: 'Rationalism (Descartes, Spinoza, Leibniz) vs Empiricism (Locke, Berkeley, Hume)',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "A Critical History of Western Philosophy: Greek, Medieval and Modern (Y. Masih)",
          "A History of Philosophy (Frank Thilly)",
          "Western Philosophy (Bertrand Russell)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy",
        officialUrl: "https://plato.stanford.edu/"
      },
      {
        id: 'PHIL-OPT-03',
        paper: 'Philosophy Paper II',
        subject: 'Socio-Political Philosophy',
        topic: 'Sovereignty, Justice, Equality, Liberty and Democratic Governance',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "An Introduction to Political Philosophy (Jonathan Wolff)",
          "Social and Political Philosophy (O.P. Gauba)",
          "Philosophy: Key Texts (Julian Baggini)"
        ],
        officialSource: "Indian Council of Philosophical Research (ICPR)",
        officialUrl: "https://www.icpr.in/"
      },
    ],
    sampleMCQTopic: 'Indian Epistemology & Western Rationalism',
  },
};

// Common General Studies (GS 1-4) & CSAT Syllabus (Mandatory for ALL aspirants)
export const COMMON_GS_SYLLABUS = [
  {
    id: 'GS1-MOD-HIST',
    paper: 'GS Paper I',
    subject: 'Modern Indian History',
    topic: 'Socio-Religious Reform Movements & Early Nationalist Awakening',
    difficulty: 'Medium',
    estimatedHours: 3,
    status: 'In Progress',
    standardBooks: [
      "NCERT Class 12: Themes in Indian History (Part III)",
      "A Brief History of Modern India (Rajiv Ahir / Spectrum)",
      "India's Struggle for Independence (Bipan Chandra)"
    ],
    officialSource: "National Archives of India & Ministry of Culture",
    officialUrl: "http://nationalarchives.nic.in/"
  },
  {
    id: 'GS2-POL-CONST',
    paper: 'GS Paper II',
    subject: 'Indian Polity & Constitution',
    topic: 'Preamble, Fundamental Rights (Articles 14-21) and Judicial Review',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'In Progress',
    standardBooks: [
      "Indian Polity (M. Laxmikanth - Chapters 3, 7, 8)",
      "NCERT Class 11: Indian Constitution at Work",
      "Introduction to the Constitution of India (D.D. Basu)"
    ],
    officialSource: "Legislative Dept (Ministry of Law & Justice) - Constitution of India",
    officialUrl: "https://legislative.gov.in/constitution-of-india/"
  },
  {
    id: 'GS3-ECO-GROWTH',
    paper: 'GS Paper III',
    subject: 'Indian Economy',
    topic: 'Fiscal Policy, Inflation Dynamics & RBI Monetary Framework',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Indian Economy (Nitin Singhania / Ramesh Singh)",
      "NCERT Class 12: Introductory Macroeconomics",
      "Economic Survey 2024-25 & Union Budget Documents"
    ],
    officialSource: "Reserve Bank of India (Monetary Policy) & Ministry of Finance",
    officialUrl: "https://www.rbi.org.in/scripts/FS_Overview.aspx?fn=2752"
  },
  {
    id: 'GS4-ETH-INTEG',
    paper: 'GS Paper IV',
    subject: 'Ethics, Integrity & Aptitude',
    topic: 'Ethics in Public Administration, Probity in Governance & Case Studies',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Ethics, Integrity & Aptitude (Subba Rao & P.N. Roy Chowdhury)",
      "2nd Administrative Reforms Commission (ARC): 4th Report on Ethics in Governance",
      "Central Vigilance Commission (CVC) Citizen Guidance"
    ],
    officialSource: "DARPG (2nd ARC Reports) & Central Vigilance Commission (CVC)",
    officialUrl: "https://darpg.gov.in/arc-reports"
  },
  {
    id: 'CSAT-P2-QUANT',
    paper: 'CSAT Paper II',
    subject: 'Quantitative Aptitude',
    topic: 'Number Systems, Permutations & Combinations, Data Sufficiency',
    difficulty: 'Medium',
    estimatedHours: 1.5,
    status: 'Pending',
    standardBooks: [
      "Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)",
      "Analytical Reasoning (M.K. Pandey)",
      "Previous 10-Year UPSC CSAT Official Question Papers"
    ],
    officialSource: "Union Public Service Commission (Official Previous Papers)",
    officialUrl: "https://upsc.gov.in/examinations/previous-question-papers"
  },
];

// Helper to get tailored timetable for user's optional subject
export function getTailoredSchedule(userOptional) {
  const normalizedKey = getNormalizedOptionalKey(userOptional);
  const optionalConfig = OPTIONAL_SUBJECTS[normalizedKey] || OPTIONAL_SUBJECTS['PSIR (Political Science & International Relations)'];

  return [
    {
      slot: '06:30 - 08:30',
      title: 'Daily Current Affairs & Editorial Analysis (The Hindu / PIB)',
      subject: 'Daily Current Affairs & Editorial Analysis (The Hindu / PIB)',
      paper: 'Current Affairs',
      focus: 'Prelims micro-notes + GS2/GS3 Mains linkage',
      difficulty: 'Essential',
      hours: 2,
      type: 'Current Affairs',
      completed: false,
      standardBooks: [
        "The Hindu Daily National Edition",
        "Press Information Bureau (PIB) Daily Releases",
        "Indian Express (Explained Section)"
      ],
      officialSource: "Press Information Bureau (Government of India)",
      officialUrl: "https://pib.gov.in/"
    },
    {
      slot: '09:30 - 12:30',
      title: 'Indian Polity: Fundamental Rights (Articles 14-21)',
      subject: 'Indian Polity: Fundamental Rights (Articles 14-21)',
      paper: 'GS Paper II',
      focus: 'Landmark judgments (Kesavananda, Puttaswamy) & Constitutional limits',
      difficulty: 'High',
      hours: 3,
      type: 'GS Core',
      completed: false,
      standardBooks: [
        "Indian Polity (M. Laxmikanth)",
        "NCERT Class 11: Indian Constitution at Work"
      ],
      officialSource: "Legislative Department (Constitution of India)",
      officialUrl: "https://legislative.gov.in/constitution-of-india/"
    },
    // Tailored Slot based on User's Optional Subject!
    {
      ...optionalConfig.activeSession,
      title: optionalConfig.activeSession.subject,
      hours: 2.5,
      type: 'Optional',
    },
    {
      slot: '17:30 - 19:00',
      title: 'CSAT: Number Systems & Divisibility Rules',
      subject: 'CSAT: Number Systems & Divisibility Rules',
      paper: 'CSAT Paper II',
      focus: 'Previous 10-year UPSC question patterns & speed practice',
      difficulty: 'Medium',
      hours: 1.5,
      type: 'CSAT',
      completed: false,
      standardBooks: [
        "Quantitative Aptitude (R.S. Aggarwal)",
        "UPSC CSAT Past 10 Years Question Papers"
      ],
      officialSource: "Union Public Service Commission (UPSC Official)",
      officialUrl: "https://upsc.gov.in/examinations/previous-question-papers"
    },
    {
      slot: '20:30 - 21:30',
      title: `Daily Topic MCQ Test (GS Polity / ${optionalConfig.name} Mastery)`,
      subject: `Daily Topic MCQ Test (GS Polity / ${optionalConfig.name} Mastery)`,
      paper: 'Practice Evaluation',
      focus: 'Score 9/10 to unlock the next module',
      difficulty: 'High',
      hours: 1,
      type: 'Assessment',
      completed: false,
      standardBooks: [
        "UPSC Prelims 25-Year Solved Papers",
        "Subject-wise Objective Question Bank"
      ],
      officialSource: "UPSC Official Examination Portal",
      officialUrl: "https://upsc.gov.in/"
    },
  ];
}

// Helper to get tailored syllabus for user's optional subject
export function getTailoredSyllabus(userOptional) {
  const normalizedKey = getNormalizedOptionalKey(userOptional);
  const optionalConfig = OPTIONAL_SUBJECTS[normalizedKey] || OPTIONAL_SUBJECTS['PSIR (Political Science & International Relations)'];
  return [...COMMON_GS_SYLLABUS, ...optionalConfig.syllabus];
}

// Helper to normalize user's optional subject string
export function getNormalizedOptionalKey(userOptional) {
  if (!userOptional) return 'PSIR (Political Science & International Relations)';
  const lower = userOptional.toLowerCase();
  if (lower.includes('history')) return 'History';
  if (lower.includes('geography')) return 'Geography';
  if (lower.includes('public') || lower.includes('pub ad')) return 'Public Administration';
  if (lower.includes('sociology')) return 'Sociology';
  if (lower.includes('anthropology')) return 'Anthropology';
  if (lower.includes('economics')) return 'Economics';
  if (lower.includes('philosophy')) return 'Philosophy';
  return 'PSIR (Political Science & International Relations)';
}
