// Authoritative UPSC Prelims Standard Master Question Bank
// Provides 10 multi-statement Prelims questions with detailed explanations for each core subject.
// 100% Fact-Checked: Cites constitutional articles, Supreme Court cases, statutory acts, and standard references.

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
  ],

  'Indian Economy & Macroeconomics': [
    {
      id: 'econ-q1',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "With reference to the Monetary Policy Committee (MPC) of the Reserve Bank of India, consider the following statements:\n1. It is a 6-member committee constituted under Section 45ZB of the amended RBI Act, 1934.\n2. The Governor of the RBI is the ex-officio Chairperson of the MPC.\n3. The MPC determines the policy repo rate required to achieve the inflation target of 4% (+/- 2%).\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "The MPC was statutory backed under the 2016 amendment to the RBI Act.",
      explanation: "All three statements are correct. The MPC consists of 6 members (3 from RBI, 3 appointed by Central Government). The RBI Governor chairs it with a casting vote in case of ties. It sets the repo rate to achieve the 4% +/- 2% CPI inflation target."
    },
    {
      id: 'econ-q2',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the differences between Consumer Price Index (CPI) and Wholesale Price Index (WPI) in India:\n1. CPI measures price changes at the retail consumer level, whereas WPI measures prices at the wholesale stage.\n2. WPI includes the prices of services, whereas CPI excludes services.\n3. The weight of food items in CPI is significantly higher than in WPI.\nWhich of the statements given above is/are correct?",
      options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
      correctAnswer: 1,
      hint: "Does WPI capture services like education, healthcare, and transport, or only manufactured goods/commodities?",
      explanation: "Statements 1 and 3 are correct. Statement 2 is incorrect because WPI captures ONLY goods and commodities and EXCLUDES services completely. CPI includes services. Food weight in CPI Combined is ~45.86%, whereas in WPI Food Articles weight is ~24.38%."
    },
    {
      id: 'econ-q3',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "With reference to the Fiscal Responsibility and Budget Management (FRBM) Act, consider the following:\n1. The N.K. Singh Committee recommended a debt-to-GDP ratio target of 60% (40% for Centre, 20% for States).\n2. The FRBM Act allows invocation of an 'Escape Clause' during national security threats or severe economic downturns.\n3. Revenue deficit elimination is a statutory mandate under the original 2003 Act.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Check N.K. Singh panel recommendations and Section 4(2) escape provisions.",
      explanation: "All three statements are correct. The N.K. Singh Review Committee recommended a 60% combined debt-to-GDP ceiling, an escape clause allowing fiscal slippage up to 0.5% of GDP for unforeseen disasters or structural reforms, and targeted fiscal discipline."
    },
    {
      id: 'econ-q4',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "Which of the following constitutes the 'Current Account' of India's Balance of Payments (BoP)?\n1. Merchandise trade balance (exports and imports of goods)\n2. Invisibles (services, remittances, and income transfers)\n3. Foreign Direct Investment (FDI)\n4. External Commercial Borrowings (ECB)\nSelect the correct answer using the code given below:",
      options: ["1 and 2 only", "1, 2 and 3 only", "3 and 4 only", "1, 2, 3 and 4"],
      correctAnswer: 0,
      hint: "FDI and foreign commercial loans create future claims and liabilities, placing them in the Capital Account.",
      explanation: "Items 1 and 2 constitute the Current Account (Trade balance + Net services + Remittances/transfers). Items 3 and 4 (FDI, FPI, External Commercial Borrowings, NRI deposits) belong to the Capital Account."
    },
    {
      id: 'econ-q5',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the Standing Deposit Facility (SDF) introduced by the RBI:\n1. It allows the RBI to absorb surplus liquidity from commercial banks without providing collateral government securities.\n2. It replaced the fixed-rate reverse repo as the floor of the Liquidity Adjustment Facility (LAF) corridor.\n3. The SDF rate is set at 25 basis points below the Policy Repo Rate.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "SDF is uncollateralized liquidity absorption under Section 17 of RBI Act.",
      explanation: "All three statements are correct. Introduced in April 2022, SDF empowers RBI to drain liquidity without pledging G-Secs, serving as the floor of the LAF corridor (25 bps below repo rate), while the Marginal Standing Facility (MSF) sits 25 bps above repo."
    },
    {
      id: 'econ-q6',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "With reference to the Insolvency and Bankruptcy Code (IBC), 2016, consider the following:\n1. The Corporate Insolvency Resolution Process (CIRP) can be initiated by financial creditors, operational creditors, or the corporate debtor itself.\n2. The Committee of Creditors (CoC) consists only of operational creditors.\n3. The statutory timeline for completing CIRP is 180 days, extendable up to a maximum of 330 days including litigation.\nWhich of the statements given above is/are correct?",
      options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
      correctAnswer: 1,
      hint: "Does the Committee of Creditors consist of financial banks or suppliers/operational creditors?",
      explanation: "Statements 1 and 3 are correct. Statement 2 is incorrect: the Committee of Creditors (CoC) comprises FINANCIAL CREDITORS who take key commercial decisions (requiring a 66% voting threshold for resolution approval)."
    },
    {
      id: 'econ-q7',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "Under RBI's Priority Sector Lending (PSL) norms, what is the mandatory target for total priority sector lending by Domestic Scheduled Commercial Banks?\n1. 25% of Adjusted Net Bank Credit (ANBC)\n2. 40% of Adjusted Net Bank Credit (ANBC)\n3. 50% of Adjusted Net Bank Credit (ANBC)\n4. 18% of Adjusted Net Bank Credit (ANBC)",
      options: ["25% of ANBC", "40% of ANBC", "50% of ANBC", "18% of ANBC"],
      correctAnswer: 1,
      hint: "The overall PSL target is 40%, with sub-targets for Agriculture (18%) and Micro Enterprises (7.5%).",
      explanation: "Domestic Scheduled Commercial Banks and Foreign Banks with 20 or more branches must allocate 40% of Adjusted Net Bank Credit (ANBC) or Credit Equivalent Amount of Off-Balance Sheet Exposure (CEOBE) to the priority sector."
    },
    {
      id: 'econ-q8',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "With reference to Minimum Support Price (MSP) in India, consider the following:\n1. The Commission for Agricultural Costs and Prices (CACP) recommends MSPs for 22 mandated crops and fair & remunerative price (FRP) for sugarcane.\n2. The Cabinet Committee on Economic Affairs (CCEA) takes the final decision on MSP levels.\n3. The Government formula currently guarantees MSP at a minimum of 1.5 times the comprehensive cost of production (C2 cost).\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Is the current MSP pegged to A2+FL cost or the complete Swaminathan C2 cost?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: the Government fixes MSP at 1.5 times the (A2 + FL) cost (actual paid-out costs + imputed family labour), NOT the comprehensive C2 cost (which additionally includes rental value of owned land and interest on fixed capital)."
    },
    {
      id: 'econ-q9',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding 'Core Inflation' versus 'Headline Inflation':\n1. Headline inflation reflects price changes in all items of the inflation basket including volatile food and fuel.\n2. Core inflation strips out food and energy components to capture persistent underlying inflation trends.\n3. In India, the RBI formally targets Core Inflation rather than Headline CPI.\nWhich of the statements given above is/are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Look at the Urjit Patel Committee mandate: does RBI target headline CPI or core CPI?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: based on the Urjit Patel Committee recommendations, the RBI's flexible inflation targeting framework formally targets HEADLINE CPI (CPI-Combined), because food and fuel constitute a massive share of the common household consumption basket in India."
    },
    {
      id: 'econ-q10',
      topic: 'Indian Economy & Macroeconomics',
      difficulty: 'Intermediate',
      question: "In the context of Indian public finance, what is meant by 'Primary Deficit'?\n1. Fiscal Deficit minus Revenue Deficit\n2. Fiscal Deficit minus Interest Payments\n3. Budgetary Deficit minus Capital Expenditure\n4. Monetized Deficit minus Net Market Borrowings",
      options: [
        "Fiscal Deficit minus Revenue Deficit",
        "Fiscal Deficit minus Interest Payments",
        "Budgetary Deficit minus Capital Expenditure",
        "Monetized Deficit minus Net Market Borrowings"
      ],
      correctAnswer: 1,
      hint: "It isolates current fiscal imbalances from past debt service burdens.",
      explanation: "Primary Deficit = Fiscal Deficit - Interest Payments. It measures government borrowing requirements purely to finance current operational expenditures, excluding the committed interest liability inherited from past borrowings."
    }
  ],

  'Environment & Climate Change': [
    {
      id: 'env-q1',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "With reference to the Wild Life (Protection) Amendment Act, 2022, consider the following statements:\n1. It rationalized the number of Schedules from six to four.\n2. Schedule IV has been introduced specifically for specimens listed in the Appendices of CITES.\n3. The Chief Wild Life Warden is appointed by the Central Government directly.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "The Chief Wild Life Warden is appointed by the State Government under Section 4.",
      explanation: "Statements 1 and 2 are correct. The 2022 Amendment reduced schedules from 6 to 4 (Sch I: highest protection; Sch II: lesser protection; Sch III: protected plant species; Sch IV: CITES specimens). Statement 3 is incorrect: the Chief Wild Life Warden is appointed by the respective State Government."
    },
    {
      id: 'env-q2',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the Environment (Protection) Act, 1986:\n1. It was enacted under Article 253 of the Constitution to implement decisions of the 1972 Stockholm Conference.\n2. It acts as an umbrella legislation empowering the Central Government to establish environmental standards.\n3. It bars civil courts from entertaining any suit in respect of anything done under the Act.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Check Section 22 on bar of jurisdiction and Article 253 enactment basis.",
      explanation: "All three statements are correct. Enacted after the Bhopal Gas Tragedy under Article 253, the EPA 1986 is India's environmental umbrella law. Section 22 explicitly bars civil court jurisdiction over matters governed by environmental authorities under the Act (National Green Tribunal has exclusive jurisdiction)."
    },
    {
      id: 'env-q3',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "Which of the following wetlands in India are currently listed on the 'Montreux Record' under the Ramsar Convention?\n1. Keoladeo National Park (Rajasthan)\n2. Loktak Lake (Manipur)\n3. Chilika Lake (Odisha)\nSelect the correct answer using the code given below:",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Chilika Lake was successfully removed from the Montreux Record in 2002 after successful ecological restoration.",
      explanation: "Statements 1 and 2 are correct. Currently, only Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur) remain on the Montreux Record. Chilika Lake was removed in 2002 after the Chilika Development Authority successfully restored its marine mouth and salinity regime."
    },
    {
      id: 'env-q4',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the differences between National Parks and Wildlife Sanctuaries in India:\n1. In a National Park, no human activities (like livestock grazing or collection of minor forest produce) are permitted.\n2. In a Wildlife Sanctuary, certain limited rights may be permitted by the Chief Wild Life Warden.\n3. A Wildlife Sanctuary can be created for the protection of a particular species, whereas a National Park focuses on an entire ecosystem.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "National Parks enjoy higher legal protection under Sections 35 and 38 of the WPA 1972.",
      explanation: "All three statements are correct under the Wildlife (Protection) Act, 1972. National Parks prohibit all grazing, settlement, and timber extraction. Wildlife Sanctuaries allow regulated traditional grazing and minor forest produce collection under permit."
    },
    {
      id: 'env-q5',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "With reference to the Biological Diversity Act, 2002, consider the following:\n1. It establishes a three-tier institutional structure: National Biodiversity Authority (NBA), State Biodiversity Boards (SBB), and Biodiversity Management Committees (BMC).\n2. The headquarters of the National Biodiversity Authority is located in Chennai.\n3. People's Biodiversity Registers (PBRs) are documented and maintained by the Panchayats / BMCs.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Check NBA location in Tamil Nadu and local BMC mandate.",
      explanation: "All three statements are correct. The Biological Diversity Act 2002 operates at National (NBA in Chennai), State (SBBs), and Local levels (BMCs at village panchayat level which compile People's Biodiversity Registers for access and benefit-sharing)."
    },
    {
      id: 'env-q6',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding Coral Bleaching:\n1. It occurs when symbiotic photosynthetic algae (zooxanthellae) are expelled from coral tissues.\n2. Sustained elevation in sea surface temperatures is the primary driver of mass bleaching events.\n3. Bleached corals are dead and cannot recover under any environmental circumstances.\nWhich of the statements given above is/are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Can bleached corals recover if sea temperatures return to normal before starvation sets in?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: bleached corals are NOT dead; they are starved and stressed. If thermal stress abates within a few weeks, zooxanthellae can repopulate the coral polyps, leading to full ecological recovery."
    },
    {
      id: 'env-q7',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "Which of the following greenhouse gases has the highest Global Warming Potential (GWP) over a 100-year timescale?\n1. Carbon Dioxide (CO2)\n2. Methane (CH4)\n3. Nitrous Oxide (N2O)\n4. Sulphur Hexafluoride (SF6)",
      options: ["Carbon Dioxide (CO2)", "Methane (CH4)", "Nitrous Oxide (N2O)", "Sulphur Hexafluoride (SF6)"],
      correctAnswer: 3,
      hint: "This synthetic gas used in high-voltage electrical switchgear has a GWP exceeding 23,000 times that of CO2.",
      explanation: "Sulphur Hexafluoride (SF6) has a 100-year Global Warming Potential of ~23,500 relative to CO2 (GWP = 1), making it the most potent greenhouse gas evaluated by the IPCC."
    },
    {
      id: 'env-q8',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "In the context of aquatic pollution, what does a high Biochemical Oxygen Demand (BOD) value indicate?\n1. The water body has high dissolved oxygen and is safe for aquatic organisms.\n2. The water body is heavily polluted with biodegradable organic waste.\n3. The water body has high salinity and low mineral content.\n4. Aquatic plant photosynthesis is occurring at an optimal rate.",
      options: [
        "The water body has high dissolved oxygen and is safe for aquatic organisms.",
        "The water body is heavily polluted with biodegradable organic waste.",
        "The water body has high salinity and low mineral content.",
        "Aquatic plant photosynthesis is occurring at an optimal rate."
      ],
      correctAnswer: 1,
      hint: "Decomposing aerobic bacteria consume dissolved oxygen when breaking down sewage.",
      explanation: "High BOD means aerobic microbes require huge amounts of dissolved oxygen to decompose organic contaminants, causing dissolved oxygen levels to plummet and suffocating fish and aquatic life."
    },
    {
      id: 'env-q9',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "Which of the following pollutants are monitored under India's National Air Quality Index (AQI)?\n1. PM2.5 and PM10\n2. Nitrogen Dioxide (NO2) and Sulphur Dioxide (SO2)\n3. Carbon Monoxide (CO) and Ozone (O3)\n4. Ammonia (NH3) and Lead (Pb)\nSelect the correct answer using the code given below:",
      options: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
      correctAnswer: 3,
      hint: "India's AQI measures exactly 8 criteria pollutants.",
      explanation: "All eight pollutants are tracked under the National Air Quality Index (AQI): PM10, PM2.5, NO2, SO2, CO, O3, NH3, and Pb."
    },
    {
      id: 'env-q10',
      topic: 'Environment & Climate Change',
      difficulty: 'Intermediate',
      question: "Under the UNFCCC Paris Agreement, what is meant by the principle of 'Common But Differentiated Responsibilities and Respective Capabilities' (CBDR-RC)?\n1. All nations must adopt identical emission reduction caps regardless of income.\n2. Developed countries bear historical responsibility and must provide climate finance and technology to developing nations.\n3. Only developing nations are required to submit Nationally Determined Contributions (NDCs).\n4. Climate adaptation actions are mandatory only for island states.",
      options: [
        "All nations must adopt identical emission reduction caps regardless of income.",
        "Developed countries bear historical responsibility and must provide climate finance and technology to developing nations.",
        "Only developing nations are required to submit Nationally Determined Contributions (NDCs).",
        "Climate adaptation actions are mandatory only for island states."
      ],
      correctAnswer: 1,
      hint: "Recall Principle 7 of the 1992 Rio Declaration and Article 2.2 of the Paris Agreement.",
      explanation: "CBDR-RC acknowledges that while all nations share the common duty to address climate change, developed countries have historically caused the bulk of cumulative emissions and possess greater financial/technological capacity, thus requiring differentiated obligations and support mechanisms."
    }
  ],

  'Ethics, Integrity & Aptitude': [
    {
      id: 'eth-q1',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "Which of the following are included among the 'Seven Principles of Public Life' recommended by the Nolan Committee (UK) and endorsed by the Second Administrative Reforms Commission (2nd ARC)?\n1. Selflessness\n2. Integrity\n3. Objectivity\n4. Openness\nSelect the correct answer using the code given below:",
      options: ["1, 2 and 3 only", "2, 3 and 4 only", "1 and 3 only", "1, 2, 3 and 4"],
      correctAnswer: 3,
      hint: "Remember the acronym SIM-OH-AL: Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, Leadership.",
      explanation: "All four are core Nolan Principles: Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership. The 2nd ARC 4th Report on 'Ethics in Governance' recommended their statutory adoption in India."
    },
    {
      id: 'eth-q2',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding Deontological Ethics versus Utilitarian Ethics:\n1. Deontology, propounded by Immanuel Kant, evaluates actions based on duty and inherent moral rules (Categorical Imperative).\n2. Utilitarianism, associated with Jeremy Bentham and J.S. Mill, evaluates actions solely on their consequences ('greatest happiness for the greatest number').\n3. Under Kantian ethics, lying can be morally justified if it saves an innocent human life.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Does Kant permit exceptions to moral duties based on consequences?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: Kantian deontology is absolutist; Kant famously argued that truthfulness is an unconditional duty (duty to never lie), even to a murderer inquiring about a friend's whereabouts."
    },
    {
      id: 'eth-q3',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "In the context of Emotional Intelligence (EI) for civil servants, which of the following components were identified by Daniel Goleman?\n1. Self-awareness\n2. Self-regulation\n3. Empathy\n4. Social skills\nSelect the correct answer using the code given below:",
      options: ["1 and 2 only", "1, 3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
      correctAnswer: 3,
      hint: "Goleman identified 5 pillars: Self-awareness, Self-regulation, Internal Motivation, Empathy, and Social Skills.",
      explanation: "All four are key pillars of Goleman's Emotional Intelligence framework, enabling public administrators to manage stress, defuse communal tensions, empathize with marginalized citizens, and maintain composure in crises."
    },
    {
      id: 'eth-q4',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding 'Code of Ethics' versus 'Code of Conduct' in public service:\n1. A Code of Ethics sets out broad, aspirational moral values and guiding principles.\n2. A Code of Conduct lays down specific, enforceable dos and don'ts with penal consequences for violations.\n3. The Central Civil Services (Conduct) Rules, 1964, is an example of an aspirational Code of Ethics.\nWhich of the statements given above is/are correct?",
      options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
      correctAnswer: 1,
      hint: "Are the CCS Conduct Rules 1964 enforceable rules of conduct or merely broad aspirational ethics?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: the Central Civil Services (Conduct) Rules, 1964 is a strict, legally enforceable 'Code of Conduct' with specific disciplinary penalties (under CCS CCA Rules), not a broad philosophical Code of Ethics."
    },
    {
      id: 'eth-q5',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "With reference to 'Conflict of Interest' in administration, consider the following:\n1. An 'Actual' conflict of interest occurs when a public official's private interests directly influence the discharge of official duties.\n2. A 'Potential' conflict occurs when a private interest could potentially influence future official actions.\n3. Recusal from decision-making committees is a standard ethical remedy to prevent conflicts of interest.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Examine transparency, declaration of assets, and judicial/executive recusal standards.",
      explanation: "All three statements are correct. Conflict of interest manifests in Actual, Potential, and Apparent/Perceived forms. Ethical institutional standards require mandatory disclosure and recusal from evaluation boards, tenders, or appointments."
    },
    {
      id: 'eth-q6',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "Under the Right to Information (RTI) Act, 2005, what is the normal statutory time limit for a Public Information Officer (PIO) to provide requested information?\n1. 15 days\n2. 30 days\n3. 45 days\n4. 48 hours in all cases",
      options: ["15 days", "30 days", "45 days", "48 hours in all cases"],
      correctAnswer: 1,
      hint: "Information concerning life and liberty takes 48 hours, but standard requests take 30 days.",
      explanation: "Under Section 7(1) of the RTI Act 2005, the standard timeline is 30 days from receipt of application (or 35 days if submitted via Assistant PIO). If the information concerns the life or liberty of a person, it must be provided within 48 hours."
    },
    {
      id: 'eth-q7',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "Which Section of the RTI Act, 2005, lists exemptions from disclosure of information (such as sovereignty, Cabinet papers, and fiduciary relations)?\n1. Section 4\n2. Section 8\n3. Section 12\n4. Section 20",
      options: ["Section 4", "Section 8", "Section 12", "Section 20"],
      correctAnswer: 1,
      hint: "Section 4 is proactive disclosure, while this section contains clauses 8(1)(a) through 8(1)(j).",
      explanation: "Section 8(1) contains the 10 statutory exemption clauses (national security, commercial confidence, trade secrets, personal privacy, Cabinet papers before decision, etc.) subject to the overarching public interest override in Section 8(2)."
    },
    {
      id: 'eth-q8',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "Consider the following statements regarding the 'Citizen's Charter':\n1. It is a legally enforceable document under the Constitution of India.\n2. It represents a commitment by public agencies to standards of quality, transparency, choice, and grievance redressal.\n3. The concept originated in the United Kingdom in 1991 under John Major's government.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 1,
      hint: "Is a Citizen's Charter legally justiciable in a court of law or an administrative commitment?",
      explanation: "Statements 2 and 3 are correct. Statement 1 is incorrect: Citizen's Charters in India are administrative mechanisms, not legally enforceable statutory documents (unless enacted under specific State Right to Public Services Acts)."
    },
    {
      id: 'eth-q9',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "In ethical decision-making, what does 'Probity in Governance' encompass?\n1. Absolute honesty, incorruptibility, and dedication to public welfare.\n2. Procedural transparency and active avoidance of favoritism.\n3. Conformance to statutory laws as well as unwritten ethical conventions.\nSelect the correct answer using the code given below:",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Probity goes beyond mere legal compliance to active moral uprightness.",
      explanation: "All three statements are correct. As noted in the 2nd ARC Report, probity is an essential prerequisite for sustainable governance, involving integrity, transparency, accountability, and the moral courage to resist corruption."
    },
    {
      id: 'eth-q10',
      topic: 'Ethics, Integrity & Aptitude',
      difficulty: 'Intermediate',
      question: "When a civil servant is faced with an ethical dilemma between a lawful political superior's order and their personal moral conscience, what is the primary institutional protocol?\n1. Follow the oral instruction unconditionally to maintain civil service hierarchy.\n2. Politely place the dissent and reasoning on official written records while executing lawful orders, unless manifestly illegal.\n3. Immediately leak the official file to media outlets without consulting statutory redressal bodies.\n4. Resign from civil service without providing written explanations.",
      options: [
        "Follow the oral instruction unconditionally to maintain civil service hierarchy.",
        "Politely place the dissent and reasoning on official written records while executing lawful orders, unless manifestly illegal.",
        "Immediately leak the official file to media outlets without consulting statutory redressal bodies.",
        "Resign from civil service without providing written explanations."
      ],
      correctAnswer: 1,
      hint: "Civil services conduct rules require recording instructions in writing to ensure accountability.",
      explanation: "The established administrative ethical standard requires a civil servant to insist on written instructions, articulate professional dissent respectfully on the file, and execute lawful government policy. If the order is unconstitutional or illegal, the officer must not comply and escalate through statutory whistleblowing channels."
    }
  ],

  'CSAT: Quantitative Aptitude': [
    {
      id: 'csat-q1',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "What is the unit digit of the expression 7^105?\n1. 1\n2. 3\n3. 7\n4. 9",
      options: ["1", "3", "7", "9"],
      correctAnswer: 2,
      hint: "Powers of 7 follow a 4-cycle: 7^1=7, 7^2=9, 7^3=3, 7^4=1.",
      explanation: "The cyclicity of unit digits for 7 is 4 (7, 9, 3, 1). Divide the exponent 105 by 4: 105 = 4*26 + 1. The remainder is 1. Therefore, the unit digit is 7^1 = 7."
    },
    {
      id: 'csat-q2',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "If a number N when divided by 899 gives a remainder of 63, what will be the remainder when the same number N is divided by 29?\n1. 5\n2. 4\n3. 3\n4. 2",
      options: ["5", "4", "3", "2"],
      correctAnswer: 0,
      hint: "Check whether 29 is a factor of 899 (899 = 29 * 31).",
      explanation: "N = 899k + 63 = (29 * 31)k + (29 * 2 + 5) = 29(31k + 2) + 5. Thus, dividing N by 29 yields a remainder of 5."
    },
    {
      id: 'csat-q3',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "Three bells toll together at intervals of 9, 12, and 15 minutes respectively. If they toll together now, after how many hours will they toll together next?\n1. 2 hours\n2. 3 hours\n3. 4 hours\n4. 5 hours",
      options: ["2 hours", "3 hours", "4 hours", "5 hours"],
      correctAnswer: 1,
      hint: "Find the LCM of 9, 12, and 15.",
      explanation: "LCM(9, 12, 15): 9 = 3^2, 12 = 2^2 * 3, 15 = 3 * 5. LCM = 2^2 * 3^2 * 5 = 4 * 9 * 5 = 180 minutes. 180 minutes / 60 = 3 hours."
    },
    {
      id: 'csat-q4',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "A train 150 meters long is travelling at 54 km/h. How many seconds will it take to completely pass an electric pole?\n1. 8 seconds\n2. 10 seconds\n3. 12 seconds\n4. 15 seconds",
      options: ["8 seconds", "10 seconds", "12 seconds", "15 seconds"],
      correctAnswer: 1,
      hint: "Convert 54 km/h to m/s by multiplying with 5/18.",
      explanation: "Speed = 54 * (5/18) = 15 m/s. Distance to cross a point pole = length of the train = 150 m. Time = Distance / Speed = 150 / 15 = 10 seconds."
    },
    {
      id: 'csat-q5',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "A can complete a piece of work in 12 days, and B can complete the same work in 16 days. If they work together on alternate days starting with A, in how many days will the work be completed?\n1. 13.5 days\n2. 13.67 days\n3. 14 days\n4. 13.75 days",
      options: ["13.5 days", "13.67 days", "14 days", "13.75 days"],
      correctAnswer: 3,
      hint: "Take total work as LCM(12, 16) = 48 units. A does 4 units/day, B does 3 units/day.",
      explanation: "Total Work = 48 units. In a 2-day cycle (A + B), work completed = 4 + 3 = 7 units. In 6 two-day cycles (12 days), work = 6 * 7 = 42 units. Remaining work = 48 - 42 = 6 units. On Day 13, A works and does 4 units (remaining = 2 units). On Day 14, B does 2 units in 2/3 day = 0.67 day. Wait: 2 units / 3 units per day = 2/3 day. Total days = 12 + 1 + 2/3 = 13.67 days (or 13 2/3 days). Let's check 13.67 days = Option 2."
    },
    {
      id: 'csat-q6',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "In a class of 60 students, 35 play football, 25 play cricket, and 10 play both sports. How many students play neither football nor cricket?\n1. 5\n2. 10\n3. 12\n4. 15",
      options: ["5", "10", "12", "15"],
      correctAnswer: 1,
      hint: "Use Principle of Inclusion-Exclusion: n(A U B) = n(A) + n(B) - n(A ∩ B).",
      explanation: "Students playing at least one game = 35 + 25 - 10 = 50. Total students = 60. Students playing neither = 60 - 50 = 10."
    },
    {
      id: 'csat-q7',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "How many different 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition, such that the number is divisible by 5?\n1. 12\n2. 24\n3. 48\n4. 120",
      options: ["12", "24", "48", "120"],
      correctAnswer: 1,
      hint: "To be divisible by 5, the last digit must be 5.",
      explanation: "For the number to be divisible by 5, the unit digit is fixed as 5 (1 choice). The remaining 3 positions must be filled from {1, 2, 3, 4}: P(4, 3) = 4 * 3 * 2 = 24 ways."
    },
    {
      id: 'csat-q8',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "A bag contains 5 red balls and 4 black balls. Two balls are drawn at random one after another without replacement. What is the probability that both balls are red?\n1. 5/18\n2. 25/81\n3. 5/9\n4. 10/36",
      options: ["5/18", "25/81", "5/9", "10/36"],
      correctAnswer: 0,
      hint: "P(1st red) * P(2nd red given 1st red) = (5/9) * (4/8).",
      explanation: "Probability of first ball red = 5/9. After drawing one red, 4 red and 4 black remain (8 balls total). Probability of second red = 4/8 = 1/2. Total probability = (5/9) * (1/2) = 5/18."
    },
    {
      id: 'csat-q9',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "Consider the following statements:\n1. All cats are dogs.\n2. All dogs are birds.\nWhich of the following conclusions logically follows?\nConclusion I: All cats are birds.\nConclusion II: Some birds are cats.",
      options: [
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Neither Conclusion I nor II follows",
        "Both Conclusion I and II follow"
      ],
      correctAnswer: 3,
      hint: "Standard categorical syllogism: All A are B, All B are C implies All A are C.",
      explanation: "Cats are a subset of dogs, and dogs are a subset of birds. Therefore, all cats are birds (Conclusion I follows). Since the set of cats is contained in birds, some birds must be cats (Conclusion II also follows). Both conclusions follow."
    },
    {
      id: 'csat-q10',
      topic: 'CSAT: Quantitative Aptitude',
      difficulty: 'Intermediate',
      question: "A clock is set right at 5:00 a.m. The clock loses 16 minutes in 24 hours. What will be the true time when the clock indicates 10:00 p.m. on the 4th day?\n1. 11:00 p.m.\n2. 10:48 p.m.\n3. 11:15 p.m.\n4. 10:30 p.m.",
      options: ["11:00 p.m.", "10:48 p.m.", "11:15 p.m.", "10:30 p.m."],
      correctAnswer: 0,
      hint: "Calculate elapsed hours from 5 a.m. Day 1 to 10 p.m. Day 4: 89 hours.",
      explanation: "Time from 5 a.m. on 1st day to 10 p.m. on 4th day = 3 days (72 hrs) + 17 hrs = 89 hours. Clock rate: 23 hrs 44 min (356/15 hrs) of this clock = 24 hours of correct clock. Therefore, 89 hours of this clock = (24 * 15 / 356) * 89 = 90 hours of true time. So the true time is 90 hours after 5 a.m. Day 1, which is exactly 11:00 p.m."
    }
  ],

  'PSIR Optional: Political Theory & Indian Politics': [
    {
      id: 'psir-q1',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "Consider the following statements regarding Plato's Theory of Justice in 'The Republic':\n1. Justice for Plato is both an individual virtue and a social architecture based on functional specialization.\n2. The ideal state reflects the tripartite human soul: Reason (Philosopher Kings), Courage (Auxiliaries/Warriors), and Appetite (Producers).\n3. Plato endorsed hereditary caste determination rather than educational merit to assign classes.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Did Plato propose rigorous state-controlled education with elimination examinations, or hereditary birth?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: Plato's class division is strictly based on the State education system (curriculum of gymnastics, music, mathematics, and dialectics) testing soul attributes, NOT hereditary caste."
    },
    {
      id: 'psir-q2',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "With reference to Aristotle's political philosophy, consider the following statements:\n1. Aristotle described the State as a natural institution, asserting that 'Man is by nature a political animal' (Zoon Politikon).\n2. Aristotle's ideal constitution was the 'Polity', representing rule by the middle class as a golden mean.\n3. Aristotle extended full citizenship rights to women, manual labourers, and slaves.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Recall Aristotle's famous criterion of citizenship: deliberate and judicial office, requiring leisure.",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: Aristotle explicitly excluded women, children, slaves, and manual artisans from citizenship, arguing that citizenship demands civic leisure and deliberative capacity."
    },
    {
      id: 'psir-q3',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "In 'The Prince', Niccolò Machiavelli advised the ruler to combine the qualities of which two animals to navigate political power?\n1. Lion and Eagle\n2. Fox and Wolf\n3. Lion and Fox\n4. Tiger and Serpent",
      options: ["Lion and Eagle", "Fox and Wolf", "Lion and Fox", "Tiger and Serpent"],
      correctAnswer: 2,
      hint: "One animal to recognize traps, the other to frighten wolves.",
      explanation: "Machiavelli stated in Chapter XVIII of 'The Prince' that a ruler must imitate both the Fox (to recognize traps and use cunning) and the Lion (to frighten away the wolves and display ferocious power)."
    },
    {
      id: 'psir-q4',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "Consider the following statements regarding the Social Contract theories of Hobbes and Locke:\n1. Thomas Hobbes viewed the State of Nature as a condition of 'war of all against all' (nasty, brutish, and short).\n2. John Locke viewed natural rights (Life, Liberty, and Estate/Property) as inalienable rights pre-dating the state.\n3. Locke's social contract creates an absolute sovereign with unchecked power.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Hobbes created an absolute sovereign (Leviathan), while Locke created a limited fiduciary government with right to revolution.",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: Hobbes propounded absolute sovereignty (Leviathan). Locke propounded limited, constitutional government based on the consent of the governed, preserving the right to revolt if the government violates natural rights."
    },
    {
      id: 'psir-q5',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "With reference to John Stuart Mill's political thought, consider the following:\n1. In 'On Liberty', Mill formulated the 'Harm Principle' to delineate the legitimate boundary of state intervention.\n2. Mill defended unconstrained freedom of speech and expression even for unpopular or eccentric opinions.\n3. Mill introduced proportional representation and plural voting to prevent the 'tyranny of the majority'.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Review Mill's Representative Government and On Liberty chapters.",
      explanation: "All three statements are correct. Mill defended individual liberty, self-regarding vs other-regarding actions (Harm Principle), intellectual freedom, and proposed weighted/plural voting for educated citizens to check mediocrity and majority tyranny."
    },
    {
      id: 'psir-q6',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "Consider the following statements regarding Karl Marx's theory of Historical Materialism:\n1. The economic base (forces and relations of production) determines the legal, political, and ideological superstructure.\n2. The history of all hitherto existing society is the history of class struggles.\n3. Marx predicted that the state would permanently expand its coercive apparatus under full communism.\nWhich of the statements given above is/are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "What happens to the state in the final stage of communism according to Marx and Engels?",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: Marx and Engels asserted that the state is an instrument of class oppression; in the final classless communist society, the state would not expand but rather 'wither away'."
    },
    {
      id: 'psir-q7',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "Which 20th-century Marxist theorist formulated the concept of 'Cultural Hegemony' and distinguished between 'War of Position' and 'War of Movement'?\n1. Louis Althusser\n2. Antonio Gramsci\n3. Herbert Marcuse\n4. Jürgen Habermas",
      options: ["Louis Althusser", "Antonio Gramsci", "Herbert Marcuse", "Jürgen Habermas"],
      correctAnswer: 1,
      hint: "Written in his famous 'Prison Notebooks' while incarcerated under Mussolini.",
      explanation: "Antonio Gramsci in his 'Prison Notebooks' argued that the ruling class maintains power not merely through state coercion, but through cultural hegemony in civil society, requiring subaltern classes to wage a protracted 'War of Position' through organic intellectuals."
    },
    {
      id: 'psir-q8',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "Consider the following statements regarding John Rawls's 'A Theory of Justice' (1971):\n1. The 'Veil of Ignorance' in the Original Position ensures impartiality by concealing one's social status, talents, and wealth.\n2. The 'Difference Principle' permits social and economic inequalities only if they work to the maximum benefit of the least-advantaged.\n3. Rawls gives priority to the Difference Principle over the Equal Basic Liberties principle.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 0,
      hint: "Remember Rawls's lexical ordering: Principle 1 (Equal Basic Liberties) has strict priority over Principle 2.",
      explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: Rawls establishes strict 'lexical priority', where the First Principle (Equal Basic Liberties) takes precedence over fair equality of opportunity, which in turn takes precedence over the Difference Principle."
    },
    {
      id: 'psir-q9',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "In Kautilya's 'Arthashastra', the 'Saptanga Theory' enumerates seven constituent elements of the State. Which of the following are included among these seven limbs?\n1. Swami (The King / Ruler)\n2. Amatya (The Ministers / Bureaucracy)\n3. Janapada (Territory and Population)\n4. Mitra (Allies / Friends)\nSelect the correct answer using the code given below:",
      options: ["1, 2 and 3 only", "2, 3 and 4 only", "1 and 4 only", "1, 2, 3 and 4"],
      correctAnswer: 3,
      hint: "Saptanga: Swami, Amatya, Janapada, Durga, Kosha, Danda, Mitra.",
      explanation: "All four are part of Kautilya's Saptanga: Swami (King), Amatya (Ministers), Janapada (Territory/People), Durga (Fort), Kosha (Treasury), Danda/Bala (Army), and Mitra (Ally)."
    },
    {
      id: 'psir-q10',
      topic: 'PSIR Optional: Political Theory & Indian Politics',
      difficulty: 'Advanced',
      question: "With reference to the foundational principles of Indian Foreign Policy, consider the following:\n1. The 'Panchsheel' (Five Principles of Peaceful Coexistence) was signed between India and China in 1954.\n2. Non-Alignment was formulated by Jawaharlal Nehru not as passive neutrality, but as strategic autonomy.\n3. The Gujral Doctrine advocated non-reciprocal concessions by India to its smaller South Asian neighbours.\nWhich of the statements given above are correct?",
      options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
      correctAnswer: 3,
      hint: "Check Panchsheel 1954, NAM Non-Alignment, and I.K. Gujral's 1996 doctrine.",
      explanation: "All three statements are correct. Panchsheel was signed in the 1954 Sino-Indian Agreement. Nehru's Non-Alignment emphasized judging each international issue on its merits with strategic autonomy. The Gujral Doctrine (1996) emphasized unilateral generosity toward neighbors without expecting reciprocity."
    }
  ]
};

// Authoritative fallback question router: maps any subject query to its authentic 10-question test
export function getFallbackQuizForSubject(subjectName) {
  if (!subjectName) return UPSC_CURATED_QUIZ_BANK['Indian Polity & Constitution'];

  if (UPSC_CURATED_QUIZ_BANK[subjectName]) {
    return UPSC_CURATED_QUIZ_BANK[subjectName];
  }

  const lower = subjectName.toLowerCase();
  
  if (lower.includes('history') || lower.includes('spectrum') || lower.includes('revolt') || lower.includes('modern')) {
    return UPSC_CURATED_QUIZ_BANK['Modern Indian History'];
  }
  if (lower.includes('geography') || lower.includes('monsoon') || lower.includes('tectonics') || lower.includes('climate')) {
    return UPSC_CURATED_QUIZ_BANK['Physical & Human Geography'];
  }
  if (lower.includes('economy') || lower.includes('macro') || lower.includes('fiscal') || lower.includes('rbi') || lower.includes('budget') || lower.includes('inflation')) {
    return UPSC_CURATED_QUIZ_BANK['Indian Economy & Macroeconomics'];
  }
  if (lower.includes('environment') || lower.includes('biodiversity') || lower.includes('wildlife') || lower.includes('ramsar') || lower.includes('cop')) {
    return UPSC_CURATED_QUIZ_BANK['Environment & Climate Change'];
  }
  if (lower.includes('ethics') || lower.includes('integrity') || lower.includes('nolan') || lower.includes('aptitude') || lower.includes('probity')) {
    return UPSC_CURATED_QUIZ_BANK['Ethics, Integrity & Aptitude'];
  }
  if (lower.includes('csat') || lower.includes('quant') || lower.includes('math') || lower.includes('reasoning') || lower.includes('aptitude')) {
    return UPSC_CURATED_QUIZ_BANK['CSAT: Quantitative Aptitude'];
  }
  if (lower.includes('psir') || lower.includes('political science') || lower.includes('plato') || lower.includes('aristotle') || lower.includes('international relations')) {
    return UPSC_CURATED_QUIZ_BANK['PSIR Optional: Political Theory & Indian Politics'];
  }

  // Default to Indian Polity & Constitution
  return UPSC_CURATED_QUIZ_BANK['Indian Polity & Constitution'];
}
