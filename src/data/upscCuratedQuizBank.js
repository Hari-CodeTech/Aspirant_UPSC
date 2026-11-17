// Authoritative UPSC Prelims Standard Fallback Question Bank
// Provides 10 multi-statement Prelims questions with detailed explanations for each subject.

export const UPSC_CURATED_QUIZ_BANK = {
  'Indian Polity & Constitution': [
    {
      id: 'polity-q1',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "With reference to the 'Right to Equality' in the Indian Constitution, consider the following statements:\n1. Article 14 applies to both citizens and foreigners as well as legal persons.\n2. The concept of 'Equality before Law' is of British origin and signifies the absence of special privileges.\n3. The concept of 'Equal Protection of Laws' is of American origin and permits reasonable classification.\nWhich of the statements given above are correct?",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 3,
      hint: "Recall whether equality before law is a negative British concept and equal protection is a positive American concept.",
      explanation: "All statements are correct. Article 14 guarantees equality before the law (British concept, absence of special privilege) and equal protection of the laws (American concept, equal treatment under equal circumstances, allowing reasonable classification) to citizens, non-citizens, and legal corporations alike."
    },
    {
      id: 'polity-q2',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "Which of the following Fundamental Rights are available ONLY to citizens of India and NOT to foreigners?\n1. Article 15 (Prohibition of discrimination on specific grounds)\n2. Article 19 (Protection of six democratic freedoms)\n3. Article 20 (Protection in respect of conviction for offences)\n4. Article 29 (Protection of interests of minorities)\nSelect the correct answer using the code given below:",
      options: [
        "1, 2 and 4 only",
        "1 and 2 only",
        "2, 3 and 4 only",
        "1, 2, 3 and 4"
      ],
      correctAnswer: 0,
      hint: "Remember the 5 exclusively citizen rights: Articles 15, 16, 19, 29, and 30.",
      explanation: "Articles 15, 16, 19, 29, and 30 are exclusively available to Indian citizens. Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28 are available to both citizens and foreigners (except enemy aliens)."
    },
    {
      id: 'polity-q3',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the Basic Structure Doctrine:\n1. It was propounded by the Supreme Court in the landmark Kesavananda Bharati case (1973).\n2. The term 'Basic Structure' is explicitly defined in Article 368 of the Constitution.\n3. Judicial review and federalism are recognized components of the basic structure.\nWhich of the statements given above is/are correct?",
      options: [
        "1 and 2 only",
        "1 and 3 only",
        "2 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 1,
      hint: "Check whether the Constitution itself defines the basic structure or if it is purely judge-made jurisprudence.",
      explanation: "Statements 1 and 3 are correct. The Basic Structure Doctrine was formulated in Kesavananda Bharati (1973) by a 7:6 majority. Statement 2 is incorrect because 'Basic Structure' is not defined anywhere in the Constitution; it is an organic judicial doctrine."
    },
    {
      id: 'polity-q4',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "With reference to the writ jurisdiction under the Indian Constitution, consider the following statements:\n1. The Supreme Court cannot refuse to exercise its writ jurisdiction under Article 32.\n2. The writ jurisdiction of High Courts under Article 226 is broader in scope than that of the Supreme Court.\n3. The writ of Quo-Warranto cannot be sought by a person unless they are personally aggrieved.\nWhich of the statements given above are correct?",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 0,
      hint: "Does Quo-Warranto require personal locus standi or can any interested citizen challenge unauthorized public office?",
      explanation: "Statements 1 and 2 are correct. Under Article 32, remedy is itself a Fundamental Right, so the SC cannot refuse. High Court writ jurisdiction under 226 covers both Fundamental Rights and common legal rights. Statement 3 is incorrect: Quo-Warranto can be moved by any citizen; personal grievance is not required."
    },
    {
      id: 'polity-q5',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding Directive Principles of State Policy (DPSP):\n1. They are non-justiciable in nature and cannot be enforced directly by courts.\n2. In Minerva Mills case (1980), the Supreme Court held that the Constitution is founded on the bedrock of balance between Fundamental Rights and DPSPs.\n3. Article 44 mandates the State to secure a Uniform Civil Code for all citizens throughout India.\nWhich of the statements given above are correct?",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 3,
      hint: "Review the famous Minerva Mills balance quote and Article 44 text.",
      explanation: "All three statements are correct. DPSPs are non-justiciable (Article 37). In Minerva Mills (1980), Justice Chandrachud observed that to give absolute primacy to one over the other is to disturb the harmony of the Constitution. Article 44 aims for a Uniform Civil Code."
    },
    {
      id: 'polity-q6',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "With reference to the President of India's Ordinance-making power under Article 123, consider the following:\n1. An ordinance can be promulgated only when both Houses of Parliament are not in session.\n2. The President's satisfaction to issue an ordinance is immune from judicial review.\n3. An ordinance has the same force and effect as an Act of Parliament.\nWhich of the statements given above is/are correct?",
      options: [
        "3 only",
        "1 and 3 only",
        "2 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 0,
      hint: "Can an ordinance be promulgated if only ONE House is in session? (Remember a bill requires both houses to pass).",
      explanation: "Statement 3 is correct. Statement 1 is incorrect: an ordinance can be promulgated when EITHER House is not in session, because an ordinary bill requires both houses. Statement 2 is incorrect: in Cooper (1970) and DC Wadhwa (1987), the Supreme Court ruled that Presidential satisfaction can be questioned on grounds of mala fides."
    },
    {
      id: 'polity-q7',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding Parliamentary Committees in India:\n1. The Public Accounts Committee (PAC) examines the appropriation accounts and the CAG audit report.\n2. A Minister is not eligible to be elected as a member of the Committee on Estimates or PAC.\n3. The Chairman of the Estimates Committee is always appointed from the Opposition party.\nWhich of the statements given above are correct?",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 0,
      hint: "The Chairman of PAC is conventionally from Opposition, but what about Estimates Committee?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: the Chairman of the Estimates Committee is appointed by the Speaker from amongst the members of the RULING PARTY (not the Opposition). The PAC Chairman is conventionally from the Opposition since 1967."
    },
    {
      id: 'polity-q8',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "Under the Indian federal scheme, in which of the following circumstances can Parliament legislate on a matter in the State List?\n1. When Rajya Sabha passes a resolution supported by two-thirds of members present and voting (Article 249).\n2. During a National Emergency declared under Article 352.\n3. When two or more States request Parliament by passing resolutions (Article 252).\n4. For implementing international treaties and agreements (Article 253).\nSelect the correct answer using the code given below:",
      options: [
        "1, 2 and 3 only",
        "2, 3 and 4 only",
        "1, 3 and 4 only",
        "1, 2, 3 and 4"
      ],
      correctAnswer: 3,
      hint: "Check Articles 249, 250, 252, and 253.",
      explanation: "All four circumstances are constitutionally valid exceptions empowering Parliament to make laws on subjects enumerated in the State List: Art 249 (National Interest), Art 250 (Emergency), Art 252 (State consent), and Art 253 (International agreements)."
    },
    {
      id: 'polity-q9',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the Election Commission of India (ECI):\n1. The Chief Election Commissioner (CEC) can be removed from office only in like manner and on like grounds as a Judge of the Supreme Court.\n2. Election Commissioners cannot be removed from office except on the recommendation of the CEC.\n3. The Constitution specifies the qualifications (legal, educational, judicial) of members of the Election Commission.\nWhich of the statements given above is/are correct?",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 0,
      hint: "Does the Constitution lay down specific degrees or educational qualifications for ECI members?",
      explanation: "Statements 1 and 2 are correct under Article 324(5). Statement 3 is incorrect: the Constitution has not prescribed qualifications (legal, educational, administrative) of ECI members, nor debarred retiring election commissioners from further government appointment."
    },
    {
      id: 'polity-q10',
      topic: 'Indian Polity & Constitution',
      difficulty: 'Intermediate',
      question: "With reference to the 73rd Constitutional Amendment Act, 1992, which of the following provisions are MANDATORY (compulsory) for all States?\n1. Creation of a State Finance Commission every 5 years to review the financial position of Panchayats.\n2. Reservation of one-third of all seats and chairperson offices for women.\n3. Granting financial powers to Panchayats to levy, collect and appropriate local taxes.\nSelect the correct answer using the code given below:",
      options: [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      correctAnswer: 0,
      hint: "Is devolving tax-levying power compulsory or voluntary at state legislative discretion?",
      explanation: "Statements 1 and 2 are mandatory provisions. Statement 3 is voluntary: determining tax-levying powers, granting financial autonomy, and reservations for backward classes (OBCs) are left to the discretion of respective State Legislatures."
    }
  ],

  'Modern Indian History': [
    {
      id: 'hist-q1',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "With reference to the 1857 Revolt, consider the following statements:\n1. The introduction of the Enfield rifle with greased cartridges was the immediate trigger for the revolt.\n2. Lord Canning was the Governor-General of India during the 1857 Revolt.\n3. The revolt was equally widespread across South India, Bengal, and Punjab as in North-Central India.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Did the revolt affect South India and Punjab equally, or was it localized primarily to Awadh, Rohilkhand, and Bihar?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: South India, Punjab, Bengal, and Rajasthan remained largely unaffected or quiet during the revolt; the rebellion was concentrated mainly in the Ganga plain, Awadh, Bundelkhand, and parts of Central India."
    },
    {
      id: 'hist-q2',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "Consider the following pairs of 19th-century socio-religious reform organizations and their founders:\n1. Brahmo Samaj — Raja Ram Mohan Roy\n2. Arya Samaj — Swami Dayananda Saraswati\n3. Satyashodhak Samaj — Jyotirao Phule\n4. Prarthana Samaj — Swami Vivekananda\nWhich of the pairs given above are correctly matched?",
      options: ["1, 2 and 3 only", "2, 3 and 4 only", "1 and 3 only", "1, 2, 3 and 4"],
      correctAnswer: 0,
      hint: "Who founded Prarthana Samaj in Bombay in 1867? (Atmaram Pandurang with Keshab Chandra Sen's guidance).",
      explanation: "Pairs 1, 2, and 3 are correctly matched. Pair 4 is incorrectly matched: Prarthana Samaj was founded in 1867 in Bombay by Dr. Atmaram Pandurang (joined later by M.G. Ranade and R.G. Bhandarkar). Swami Vivekananda founded the Ramakrishna Mission in 1897."
    },
    {
      id: 'hist-q3',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "With reference to the Swadeshi Movement (1905), consider the following:\n1. It was sparked directly by Lord Curzon's partition of Bengal in 1905.\n2. The formal proclamation of the Swadeshi Movement was made at the Calcutta Town Hall.\n3. Amar Sonar Bangla, composed by Rabindranath Tagore, became the anthem of the movement.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Remember Tagore's Raksha Bandhan initiative and the Boycott resolution passed on August 7, 1905.",
      explanation: "All three statements are correct. The movement was launched to protest Lord Curzon's partition of Bengal. The Boycott resolution was passed on August 7, 1905, at Calcutta Town Hall. Tagore composed 'Amar Sonar Bangla', and popular participation included students, women, and urban middle class."
    },
    {
      id: 'hist-q4',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "Which of the following events occurred during the Viceroyalty of Lord Chelmsford?\n1. Montagu-Chelmsford Reforms (Government of India Act 1919)\n2. Jallianwala Bagh Massacre (1919)\n3. Launch of the Non-Cooperation Movement (1920)\nSelect the correct answer using the code given below:",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Lord Chelmsford was Viceroy from 1916 to 1921.",
      explanation: "All three events occurred during Lord Chelmsford's tenure (1916–1921), including the Rowlatt Act (1919), Jallianwala Bagh Massacre (April 1919), GoI Act 1919, and the launch of the Non-Cooperation and Khilafat Movements in 1920."
    },
    {
      id: 'hist-q5',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the Gandhi-Irwin Pact (1931):\n1. It led to the suspension of the Civil Disobedience Movement by the Indian National Congress.\n2. The Congress agreed to participate in the Second Round Table Conference.\n3. The British government conceded the demand for commutation of Bhagat Singh's death sentence.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Did Viceroy Irwin agree to commute the sentences of Bhagat Singh, Sukhdev, and Rajguru?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: Lord Irwin refused to commute the death sentence of Bhagat Singh and his comrades, despite Mahatma Gandhi's personal appeals, leading to dissatisfaction among left-wing nationalists at the Karachi Congress."
    },
    {
      id: 'hist-q6',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "The famous 'Drain of Wealth' theory, exposing the unilateral transfer of resources from India to Britain, was systematically articulated by whom?\n1. Dadabhai Naoroji in 'Poverty and Un-British Rule in India'\n2. Romesh Chunder Dutt in 'The Economic History of India'\n3. Gopal Krishna Gokhale during Imperial Legislative Council speeches\nSelect the correct answer using the code given below:",
      options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "All three were pioneering moderate nationalist economists.",
      explanation: "All three nationalist leaders systematically analyzed and exposed the economic drain: Dadabhai Naoroji coined and formulated the thesis in 1867, R.C. Dutt made it the central theme of his monumental 1901 work, and Gokhale demonstrated it statistically in council budgets."
    },
    {
      id: 'hist-q7',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the Government of India Act, 1935:\n1. It provided for the establishment of an All-India Federation consisting of provinces and princely states.\n2. It abolished dyarchy in the provinces and introduced 'Provincial Autonomy'.\n3. It introduced dyarchy at the Centre in federal subjects.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Remember the shift of dyarchy from provincial level (1919) to the federal center (1935).",
      explanation: "All three statements are correct under the GoI Act 1935: it abolished dyarchy in provinces (replacing it with provincial autonomy), introduced dyarchy at the Centre (reserved and transferred subjects), and proposed an All-India Federation (which never materialized due to princely states' reluctance)."
    },
    {
      id: 'hist-q8',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "With reference to the Quit India Movement (1942), consider the following:\n1. The 'Quit India' resolution was passed at the Gowalia Tank maidan in Bombay.\n2. Mahatma Gandhi gave the mantra 'Do or Die' (Karo ya Maro).\n3. Underground radio transmitters were operated by leaders like Usha Mehta.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Recall August Kranti 1942 and the emergence of underground networks.",
      explanation: "All three statements are correct. The AICC met at Gowalia Tank on August 8, 1942, Gandhi gave the 'Do or Die' call, top leadership was arrested immediately under Operation Zero Hour, and leaders like Aruna Asaf Ali, Jayaprakash Narayan, and Usha Mehta led underground radio and sabotage networks."
    },
    {
      id: 'hist-q9',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "Which of the following was/were recommendations of the Cabinet Mission Plan (1946)?\n1. Complete rejection of the demand for a sovereign Pakistan.\n2. A three-tier federal structure with a weak Centre.\n3. Grouping of provincial assemblies into three sections (A, B, and C).\nSelect the correct answer using the code given below:",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Did the Cabinet Mission concede Jinnah's two-state solution or propose a united Indian federation?",
      explanation: "All three statements are correct. The Cabinet Mission (Pethick-Lawrence, Stafford Cripps, A.V. Alexander) rejected a separate sovereign Pakistan, proposed an Indian Union with only Defence, External Affairs, and Communications at the Centre, and categorized provinces into Groups A, B, and C."
    },
    {
      id: 'hist-q10',
      topic: 'Modern Indian History',
      difficulty: 'Intermediate',
      question: "The Ryotwari settlement was primarily introduced in which of the following regions of British India?\n1. Madras Presidency\n2. Bombay Presidency\n3. Bengal Presidency\nSelect the correct answer using the code given below:",
      options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
      correctAnswer: 1,
      hint: "Remember Thomas Munro in Madras and Elphinstone in Bombay, while Bengal had the Permanent Settlement.",
      explanation: "Statements 1 and 2 are correct. The Ryotwari settlement (direct revenue settlement with cultivators) was initiated by Alexander Read and Thomas Munro in Madras, and extended to Bombay and parts of Assam. Bengal, Bihar, and Odisha were under Cornwallis's Permanent Settlement (Zamindari)."
    }
  ],

  'Physical & Human Geography': [
    {
      id: 'geog-q1',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "With reference to Plate Tectonics theory, consider the following statements:\n1. The lithosphere is broken into several rigid plates that float on the ductile asthenosphere.\n2. Mid-Atlantic Ridge is a classic example of a convergent plate boundary.\n3. The Ring of Fire in the Pacific Ocean is characterized by deep oceanic trenches and active volcanism.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
      correctAnswer: 1,
      hint: "Is the Mid-Atlantic Ridge divergent (spreading) or convergent (colliding)?",
      explanation: "Statements 1 and 3 are correct. Statement 2 is incorrect: the Mid-Atlantic Ridge is a DIVERGENT (constructive) boundary where seafloor spreading creates new oceanic basalt crust. The Pacific Ring of Fire is convergent with subduction zones and deep trenches."
    },
    {
      id: 'geog-q2',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the Indian Monsoon mechanism:\n1. The differential heating and cooling of land and water creates thermal pressure contrasts.\n2. The presence of the Tibetan Plateau, which gets intensely heated during summer, strengthens tropical easterly jet streams.\n3. El Niño generally has an inverse relationship with the Indian Southwest Monsoon rainfall.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Does positive IOD and La Niña help Indian monsoon, while El Niño tends to suppress it?",
      explanation: "All three statements are correct. Thermal contrast drives monsoon winds, the elevated Tibetan Plateau acts as a thermal heat pump sustaining the Tropical Easterly Jet (TEJ), and El Niño in the central/eastern Pacific typically weakens the Walker Circulation and suppresses Indian summer monsoon rains."
    },
    {
      id: 'geog-q3',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "Which of the following ocean currents is/are COLD currents?\n1. Kuroshio Current\n2. Benguela Current\n3. Canaries Current\n4. Gulf Stream\nSelect the correct answer using the code given below:",
      options: ["2 and 3 only", "1 and 4 only", "1, 2 and 3 only", "2, 3 and 4 only"],
      correctAnswer: 0,
      hint: "Kuroshio (Pacific) and Gulf Stream (Atlantic) are warm currents flowing from the equator toward the poles.",
      explanation: "Benguela (south-west coast of Africa) and Canaries (north-west coast of Africa) are cold currents flowing toward the equator. Kuroshio and Gulf Stream are major warm currents flowing poleward on the western margins of oceans."
    },
    {
      id: 'geog-q4',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding Earthquake waves:\n1. P-waves are longitudinal compressional waves and can travel through solids, liquids, and gases.\n2. S-waves are transverse shear waves and can travel only through solid materials.\n3. The shadow zone of S-waves is smaller than that of P-waves.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Because S-waves cannot travel through the liquid outer core, their shadow zone covers over 40% of Earth's surface (much larger than P-wave).",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: the shadow zone of S-waves is MUCH LARGER (covers the entire region beyond 105° from epicenter), because S-waves cannot penetrate the liquid outer core."
    },
    {
      id: 'geog-q5',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "With reference to the Himalayan river systems versus Peninsular river systems, consider the following:\n1. Himalayan rivers are perennial, deriving water from both snowmelt and rainfall.\n2. Peninsular rivers have reached their base level of erosion with graded, mature shallow valleys.\n3. Himalayan rivers exhibit antecedent drainage patterns, cutting deep gorges through rising mountains.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Compare Indus/Ganga/Brahmaputra (young, youthful, antecedent) with Godavari/Krishna/Cauvery (old, senile).",
      explanation: "All three statements are correct. Himalayan rivers are perennial, antecedent (older than the mountains they traverse), and youthful with steep V-shaped gorges. Peninsular rivers are relict, mature, seasonal (monsoon-dependent), and flow through broad shallow valleys."
    },
    {
      id: 'geog-q6',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "In the context of atmospheric layers, in which layer does almost all weather phenomena (clouds, storms, precipitation) occur?\n1. Troposphere\n2. Stratosphere\n3. Mesosphere\n4. Thermosphere",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      correctAnswer: 0,
      hint: "This lowest layer contains about 75-80% of the atmosphere's total mass.",
      explanation: "The troposphere contains ~80% of atmospheric mass and almost all water vapor and aerosols, making it the exclusive venue for clouds, weather systems, storms, and conventional precipitation."
    },
    {
      id: 'geog-q7',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the Coriolis force:\n1. It is zero at the Equator and maximum at the Poles.\n2. It deflects winds to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.\n3. Tropical cyclones do not form near the equator due to negligible Coriolis force.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Remember Ferrel's Law and the cyclone vortex requirement.",
      explanation: "All three statements are correct under Ferrel's Law. Coriolis force is proportional to latitude (2*omega*sin(phi)), vanishing at the Equator. Without sufficient Coriolis force (below 5° latitude), air rushes directly into low pressure centers without spinning into a cyclonic vortex."
    },
    {
      id: 'geog-q8',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "Which of the following factors contributes to the formation of hot coastal deserts (like Atacama, Namib, and Thar) along the western coasts in trade wind belts?\n1. Offshore trade winds blowing from land to sea\n2. Presence of cold ocean currents along the western margins causing atmospheric stabilization\n3. Subtropical high-pressure descending air currents\nSelect the correct answer using the code given below:",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Deserts form where moisture-bearing winds cannot reach and cold currents prevent condensation.",
      explanation: "All three factors cause subtropical coastal deserts: offshore trade winds have shed their moisture over land, cold currents (e.g. Benguela, Peru/Humboldt) chill the air creating stable thermal inversions with no rain, and Hadley cell downdrafts inhibit convection."
    },
    {
      id: 'geog-q9',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "Consider the following pairs of mountain passes and the Indian States/UTs in which they are located:\n1. Nathu La — Sikkim\n2. Zoji La — Ladakh\n3. Lipulekh — Uttarakhand\n4. Rohtang Pass — Himachal Pradesh\nWhich of the pairs given above are correctly matched?",
      options: ["1, 2 and 3 only", "2, 3 and 4 only", "1 and 4 only", "1, 2, 3 and 4"],
      correctAnswer: 3,
      hint: "All 4 are high-altitude strategic Himalayan border passes.",
      explanation: "All pairs are correctly matched. Nathu La links Sikkim with Tibet, Zoji La connects Srinagar with Leh (Ladakh), Lipulekh is at the trijunction in Uttarakhand (Mansarovar route), and Rohtang Pass links Kullu Valley with Lahaul and Spiti in Himachal Pradesh."
    },
    {
      id: 'geog-q10',
      topic: 'Physical & Human Geography',
      difficulty: 'Intermediate',
      question: "Which of the following soil types in India is formed by the weathering of basaltic lava rocks and is predominantly known for its self-ploughing moisture-retentive capacity?\n1. Red Soil\n2. Black Soil (Regur)\n3. Laterite Soil\n4. Alluvial Soil",
      options: ["Red Soil", "Black Soil (Regur)", "Laterite Soil", "Alluvial Soil"],
      correctAnswer: 1,
      hint: "It covers the Deccan Traps and is historically ideal for cotton cultivation.",
      explanation: "Black soil (Regur), derived from basaltic Deccan lava, is rich in clay minerals (montmorillonite). During wet seasons it swells, and in dry seasons it develops deep cracks, causing 'self-ploughing' and high moisture retention ideal for cotton and sugarcane."
    }
  ]
};

// Generic fallback question generator if a custom subject is queried without an API key
export function getFallbackQuizForSubject(subjectName) {
  if (UPSC_CURATED_QUIZ_BANK[subjectName]) {
    return UPSC_CURATED_QUIZ_BANK[subjectName];
  }

  const lower = (subjectName || '').toLowerCase();
  if (lower.includes('history')) return UPSC_CURATED_QUIZ_BANK['Modern Indian History'];
  if (lower.includes('geography')) return UPSC_CURATED_QUIZ_BANK['Physical & Human Geography'];
  
  // Default to Indian Polity & Constitution
  return UPSC_CURATED_QUIZ_BANK['Indian Polity & Constitution'];
}
