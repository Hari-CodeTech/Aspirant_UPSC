// UPSC Civil Services Examination (CSE) Master Syllabus & Optional Subjects Data
// Strictly transcribed from The Gazette of India: Extraordinary (Section III: Syllabi for the Examination)
// and Official UPSC Optional Subject Blueprints (PSIR, History, Geography, Pub Ad, Sociology, etc.)

export const OPTIONAL_SUBJECTS = {
  'PSIR (Political Science & International Relations)': {
    name: 'PSIR Optional',
    paper1: 'PSIR Paper I (Political Theory & Indian Politics)',
    paper2: 'PSIR Paper II (Comparative Politics & International Relations)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: "PSIR Optional: Western Political Thought (Plato's Theory of Justice)",
      paper: 'PSIR Paper I',
      focus: "Concept of Philosopher King, Allegory of Cave, Aristotle's critique of Plato",
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
      // ==================== PSIR PAPER 1: SECTION A (POLITICAL THEORY) ====================
      {
        id: 'PSIR-P1-01',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: 'Political Theory: Meaning and Approaches (Normative, Empirical, Behavioral & Post-Behavioral)',
        difficulty: 'Medium',
        estimatedHours: 3,
        status: 'In Progress',
        standardBooks: [
          "An Introduction to Political Theory (O.P. Gauba)",
          "Political Theory: An Introduction (Rajeev Bhargava & Ashok Acharya)",
          "Political Theory (Andrew Heywood)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy",
        officialUrl: "https://plato.stanford.edu/entries/political-theory/"
      },
      {
        id: 'PSIR-P1-02',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: 'Theories of State: Liberal, Neo-liberal, Marxist, Pluralist, Post-colonial, and Feminist',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "The State in Capitalist Society (Ralph Miliband)",
          "Political Theory (O.P. Gauba)",
          "The Post-Colonial State in Asia (Hamza Alavi)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy (Sovereignty & State)",
        officialUrl: "https://plato.stanford.edu/entries/sovereignty/"
      },
      {
        id: 'PSIR-P1-03',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: "Justice: Conceptions of justice with special reference to Rawls's theory of justice and its communitarian critiques (Nozick, Walzer, Sandel)",
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "A Theory of Justice (John Rawls)",
          "Liberalism and the Limits of Justice (Michael Sandel)",
          "Anarchy, State, and Utopia (Robert Nozick)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy (Distributive Justice)",
        officialUrl: "https://plato.stanford.edu/entries/justice-distributive/"
      },
      {
        id: 'PSIR-P1-04',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: 'Equality: Social, political, and economic; relationship between equality and freedom; Affirmative action',
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Inequality Reexamined (Amartya Sen)",
          "Spheres of Justice (Michael Walzer)",
          "Political Theory (Rajeev Bhargava)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy (Equality)",
        officialUrl: "https://plato.stanford.edu/entries/equality/"
      },
      {
        id: 'PSIR-P1-05',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: 'Rights: Meaning and theories; different kinds of rights; Concept of Human Rights',
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Taking Rights Seriously (Ronald Dworkin)",
          "Human Rights: An Agenda for the 21st Century",
          "Political Theory (O.P. Gauba)"
        ],
        officialSource: "United Nations Office of the High Commissioner for Human Rights (OHCHR)",
        officialUrl: "https://www.ohchr.org/"
      },
      {
        id: 'PSIR-P1-06',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: 'Democracy: Classical and contemporary theories; different models of democracy—representative, participatory and deliberative',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Models of Democracy (David Held)",
          "Democracy and Its Critics (Robert A. Dahl)",
          "Deliberative Democracy (Amy Gutmann & Dennis Thompson)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy (Democracy)",
        officialUrl: "https://plato.stanford.edu/entries/democracy/"
      },
      {
        id: 'PSIR-P1-07',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: 'Concept of Power: Hegemony, ideology, and legitimacy (Gramsci, Foucault, Weber, Lukes)',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Power: A Radical View (Steven Lukes)",
          "Prison Notebooks (Antonio Gramsci)",
          "Power/Knowledge (Michel Foucault)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy (Feminist Perspectives on Power)",
        officialUrl: "https://plato.stanford.edu/entries/feminist-power/"
      },
      {
        id: 'PSIR-P1-08',
        paper: 'PSIR Paper I',
        subject: 'Political Theory',
        topic: 'Political Ideologies: Liberalism, Socialism, Marxism, Fascism, Gandhism, and Feminism',
        difficulty: 'Medium',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Political Ideologies: An Introduction (Andrew Heywood)",
          "Marxism and Politics (Ralph Miliband)",
          "Hind Swaraj (M.K. Gandhi)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy (Liberalism / Socialism)",
        officialUrl: "https://plato.stanford.edu/entries/liberalism/"
      },
      {
        id: 'PSIR-P1-09',
        paper: 'PSIR Paper I',
        subject: 'Indian Political Thought',
        topic: 'Indian Political Thought: Dharmashastra, Arthashastra, Buddhist Traditions; Sir Syed Ahmed Khan, Sri Aurobindo, M.K. Gandhi, B.R. Ambedkar, M.N. Roy',
        difficulty: 'High',
        estimatedHours: 4,
        status: 'Pending',
        standardBooks: [
          "Foundations of Indian Political Thought (V.R. Mehta)",
          "Indian Political Thought: Themes and Thinkers (M.P. Singh & Himanshu Roy)",
          "Annihilation of Caste (B.R. Ambedkar)"
        ],
        officialSource: "National Archives of India (Foundational Thinkers)",
        officialUrl: "http://nationalarchives.nic.in/"
      },
      {
        id: 'PSIR-P1-10',
        paper: 'PSIR Paper I',
        subject: 'Western Political Thought',
        topic: 'Western Political Thought: Plato, Aristotle, Machiavelli, Hobbes, Locke, John S. Mill, Marx, Gramsci, Hannah Arendt',
        difficulty: 'High',
        estimatedHours: 4.5,
        status: 'In Progress',
        standardBooks: [
          "Western Political Thought (Brian Nelson)",
          "A History of Political Thought: Plato to Marx (Mukherjee & Ramaswamy)",
          "The Human Condition (Hannah Arendt)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy (Western Political Thought)",
        officialUrl: "https://plato.stanford.edu/"
      },

      // ==================== PSIR PAPER 1: SECTION B (INDIAN GOVERNMENT & POLITICS) ====================
      {
        id: 'PSIR-P1-11',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: "Indian Nationalism: Political strategies of Freedom Struggle; Perspectives (Liberal, Socialist, Marxist, Radical Humanist & Dalit)",
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "India's Struggle for Independence (Bipan Chandra)",
          "Nationalism and Colonialism in Modern India (Bipan Chandra)",
          "Social Background of Indian Nationalism (A.R. Desai)"
        ],
        officialSource: "National Archives of India",
        officialUrl: "http://nationalarchives.nic.in/"
      },
      {
        id: 'PSIR-P1-12',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Making of the Indian Constitution: Legacies of British rule; different social and political perspectives',
        difficulty: 'Medium',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "The Indian Constitution: Cornerstone of a Nation (Granville Austin)",
          "Constituent Assembly Debates (Official CAD Repositories)",
          "Making of India's Constitution (H.R. Khanna)"
        ],
        officialSource: "Lok Sabha Secretariat - Constituent Assembly Debates",
        officialUrl: "https://eparlib.nic.in/"
      },
      {
        id: 'PSIR-P1-13',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Salient Features: Preamble, Fundamental Rights & Duties, DPSP, Parliamentary System, Judicial Review & Basic Structure',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Indian Polity (M. Laxmikanth)",
          "Working a Democratic Constitution: A History of the Indian Experience (Granville Austin)",
          "Introduction to Constitution of India (D.D. Basu)"
        ],
        officialSource: "Legislative Department (Ministry of Law and Justice)",
        officialUrl: "https://legislative.gov.in/constitution-of-india/"
      },
      {
        id: 'PSIR-P1-14',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Principal Organs of Union & State Government: Envisaged role and actual working of Executive, Legislature, Supreme Court & High Courts',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "The Oxford Companion to Politics in India (Niraja Gopal Jayal & Pratap Bhanu Mehta)",
          "Indian Polity (M. Laxmikanth)",
          "Courts of the Commoner (Gautam Bhatia)"
        ],
        officialSource: "Supreme Court of India (Official Portal)",
        officialUrl: "https://main.sci.gov.in/"
      },
      {
        id: 'PSIR-P1-15',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Grassroots Democracy: Panchayati Raj and Municipal Government; Significance of 73rd and 74th Amendments; Grassroot movements',
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Indian Polity (M. Laxmikanth - Local Governance)",
          "Decentralisation and Local Governance (L.C. Jain)",
          "Ministry of Panchayati Raj Annual Reports"
        ],
        officialSource: "Ministry of Panchayati Raj (Government of India)",
        officialUrl: "https://panchayat.gov.in/"
      },
      {
        id: 'PSIR-P1-16',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Statutory Institutions & Commissions: Election Commission, CAG, Finance Commission, UPSC, NCSC, NCST, NCW, NHRC, NCM, NCBC',
        difficulty: 'Medium',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Indian Polity (M. Laxmikanth)",
          "Constitutional and Administrative Law of India",
          "Reports of National Commissions (NHRC, NCW, NCSC)"
        ],
        officialSource: "Election Commission of India & CAG",
        officialUrl: "https://eci.gov.in/"
      },
      {
        id: 'PSIR-P1-17',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Federalism: Constitutional provisions; changing nature of center-state relations; integrationist tendencies, regional aspirations & inter-state disputes',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Federalism in India (M.P. Singh)",
          "Sarkaria Commission & Punchhi Commission Recommendations",
          "Indian Polity (M. Laxmikanth)"
        ],
        officialSource: "Inter-State Council Secretariat (Ministry of Home Affairs)",
        officialUrl: "https://interstatecouncil.gov.in/"
      },
      {
        id: 'PSIR-P1-18',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Planning and Economic Development: Nehruvian and Gandhian perspectives; Public sector, Green Revolution, Land reforms, Liberalization & economic reforms',
        difficulty: 'Medium',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "India's Political Economy (Francine R. Frankel)",
          "Indian Economy: Performance and Policies (Uma Kapila)",
          "Politics of Development in India (Atul Kohli)"
        ],
        officialSource: "NITI Aayog (Development Policy)",
        officialUrl: "https://www.niti.gov.in/"
      },
      {
        id: 'PSIR-P1-19',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Caste, Religion, and Ethnicity in Indian Politics (Politicization of identity, Mandal politics, Communalism)',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Caste in Indian Politics (Rajni Kothari)",
          "Politics in India (Rajni Kothari)",
          "Ethnic Conflict and Civic Life (Ashutosh Varshney)"
        ],
        officialSource: "Ministry of Social Justice and Empowerment",
        officialUrl: "https://socialjustice.gov.in/"
      },
      {
        id: 'PSIR-P1-20',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: 'Party System: National and regional political parties, coalition politics, pressure groups, electoral behavior & changing MP/MLA profiles',
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Party System in India (Zoya Hasan)",
          "Coalition Politics in India (Bidyut Chakrabarty)",
          "ADR (Association for Democratic Reforms) Electoral Reports"
        ],
        officialSource: "Election Commission of India (Political Parties Division)",
        officialUrl: "https://eci.gov.in/"
      },
      {
        id: 'PSIR-P1-21',
        paper: 'PSIR Paper I',
        subject: 'Indian Government & Politics',
        topic: "Social Movements: Civil liberties & human rights movements; women's movements; environmentalist movements",
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Social Movements in India (Ghanshyam Shah)",
          "Environmentalism: A Global History (Ramachandra Guha)",
          "Women's Movement in India (Maitrayee Chaudhuri)"
        ],
        officialSource: "National Human Rights Commission (NHRC)",
        officialUrl: "https://nhrc.nic.in/"
      },

      // ==================== PSIR PAPER 2: SECTION A (COMPARATIVE POLITICS & IR) ====================
      {
        id: 'PSIR-P2-01',
        paper: 'PSIR Paper II',
        subject: 'Comparative Politics',
        topic: 'Comparative Politics: Nature and major approaches; Political economy and political sociology perspectives; Limitations of comparative method',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Comparative Politics Today: A World View (Gabriel A. Almond et al.)",
          "Comparative Politics (J.C. Johari)",
          "Theoretical Foundations of Comparative Politics (Dinesh Sen)"
        ],
        officialSource: "International Political Science Association (IPSA)",
        officialUrl: "https://www.ipsa.org/"
      },
      {
        id: 'PSIR-P2-02',
        paper: 'PSIR Paper II',
        subject: 'Comparative Politics',
        topic: 'State in Comparative Perspective: Characteristics and changing nature in capitalist, socialist, advanced industrial and developing societies',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "States and Social Revolutions (Theda Skocpol)",
          "State and Society (Hamza Alavi & Teodor Shanin)",
          "Bringing the State Back In (Peter B. Evans)"
        ],
        officialSource: "Comparative Political Studies Archive",
        officialUrl: "https://journals.sagepub.com/home/cps"
      },
      {
        id: 'PSIR-P2-03',
        paper: 'PSIR Paper II',
        subject: 'Comparative Politics',
        topic: 'Politics of Representation & Participation: Political parties, pressure groups and social movements in advanced and developing nations',
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Parties and Party Systems (Giovanni Sartori)",
          "Comparative Politics (Rod Hague & Martin Harrop)"
        ],
        officialSource: "International IDEA (Electoral Data)",
        officialUrl: "https://www.idea.int/"
      },
      {
        id: 'PSIR-P2-04',
        paper: 'PSIR Paper II',
        subject: 'Comparative Politics',
        topic: 'Globalisation: Responses and political impact in developed and developing societies',
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Globalization and Its Discontents (Joseph E. Stiglitz)",
          "The Consequences of Modernity (Anthony Giddens)"
        ],
        officialSource: "World Bank Policy Research",
        officialUrl: "https://www.worldbank.org/"
      },
      {
        id: 'PSIR-P2-05',
        paper: 'PSIR Paper II',
        subject: 'International Relations Theory',
        topic: 'Approaches to Study of IR: Idealist, Realist (Morgenthau, Waltz), Marxist, Functionalist and Systems theory',
        difficulty: 'High',
        estimatedHours: 4,
        status: 'Pending',
        standardBooks: [
          "Politics Among Nations (Hans J. Morgenthau)",
          "Theory of International Politics (Kenneth N. Waltz)",
          "The Globalization of World Politics (John Baylis, Steve Smith & Patricia Owens)"
        ],
        officialSource: "Oxford University Press Academic IR Collections",
        officialUrl: "https://academic.oup.com/isr"
      },
      {
        id: 'PSIR-P2-06',
        paper: 'PSIR Paper II',
        subject: 'International Relations Theory',
        topic: 'Key Concepts in IR: National interest, security & power; Balance of power & deterrence; Transnational actors & collective security; World capitalist economy',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "International Relations (Pavneet Singh)",
          "Theories of International Relations (Scott Burchill et al.)",
          "Understanding International Relations (Chris Brown)"
        ],
        officialSource: "Stockholm International Peace Research Institute (SIPRI)",
        officialUrl: "https://www.sipri.org/"
      },
      {
        id: 'PSIR-P2-07',
        paper: 'PSIR Paper II',
        subject: 'International Order',
        topic: 'Changing International Political Order: Rise of superpowers, Cold War & arms race, NAM aims, Soviet collapse, Unipolarity and relevance of NAM',
        difficulty: 'Medium',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "The Cold War: A World History (Odd Arne Westad)",
          "Non-Alignment in Contemporary International Relations (A.P. Rana)",
          "The Globalization of World Politics (Baylis & Smith)"
        ],
        officialSource: "Wilson Center Cold War International History Project",
        officialUrl: "https://www.wilsoncenter.org/program/cold-war-international-history-project"
      },
      {
        id: 'PSIR-P2-08',
        paper: 'PSIR Paper II',
        subject: 'International Economic System',
        topic: 'Evolution of International Economic System: From Bretton Woods to WTO; Socialist economies & CMEA; NIEO demand; Globalisation of economy',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Global Political Economy (Robert O'Brien & Marc Williams)",
          "The Political Economy of International Relations (Robert Gilpin)"
        ],
        officialSource: "World Trade Organization (WTO Official)",
        officialUrl: "https://www.wto.org/"
      },
      {
        id: 'PSIR-P2-09',
        paper: 'PSIR Paper II',
        subject: 'United Nations System',
        topic: 'United Nations: Envisaged role and actual record; Specialized UN agencies (aims & functioning); The urgent need for UN Security Council reforms',
        difficulty: 'Medium',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "The United Nations and Changing World Politics (Thomas G. Weiss et al.)",
          "India in the United Nations (C.S.R. Murthy)"
        ],
        officialSource: "United Nations (UN Official Portal)",
        officialUrl: "https://www.un.org/"
      },
      {
        id: 'PSIR-P2-10',
        paper: 'PSIR Paper II',
        subject: 'Regionalisation',
        topic: 'Regionalisation of World Politics: EU, ASEAN, APEC, SAARC, NAFTA (USMCA), SCO & BRICS dynamics',
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "Regionalism in World Politics (Louise Fawcett & Andrew Hurrell)",
          "ASEAN at 50 (Institute of Southeast Asian Studies)"
        ],
        officialSource: "ASEAN Secretariat & European Union",
        officialUrl: "https://asean.org/"
      },
      {
        id: 'PSIR-P2-11',
        paper: 'PSIR Paper II',
        subject: 'Global Concerns',
        topic: 'Contemporary Global Concerns: Democracy, human rights, environment & climate diplomacy, gender justice, cross-border terrorism, nuclear proliferation',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Global Governance and the UN (Thomas G. Weiss)",
          "SIPRI Yearbooks on Armaments, Disarmament and International Security",
          "IPCC Climate Assessment Reports"
        ],
        officialSource: "UNFCCC Climate Portal & IAEA",
        officialUrl: "https://unfccc.int/"
      },

      // ==================== PSIR PAPER 2: SECTION B (INDIA AND THE WORLD) ====================
      {
        id: 'PSIR-P2-12',
        paper: 'PSIR Paper II',
        subject: "India's Foreign Policy",
        topic: 'Indian Foreign Policy: Determinants of foreign policy; Institutions of policy-making; Continuity and change across eras',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "The India Way: Strategies for an Uncertain World (S. Jaishankar)",
          "Does the Elephant Dance? Contemporary Indian Foreign Policy (David M. Malone)",
          "Challenge and Strategy: Rethinking India's Foreign Policy (Rajiv Sikri)"
        ],
        officialSource: "Ministry of External Affairs (MEA India)",
        officialUrl: "https://www.mea.gov.in/"
      },
      {
        id: 'PSIR-P2-13',
        paper: 'PSIR Paper II',
        subject: "India's Foreign Policy",
        topic: "India's Contribution to Non-Alignment Movement: Different historical phases and current strategic autonomy doctrine",
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "India's Foreign Policy in a Changing World (V.P. Dutt)",
          "Makers of Modern Indian Foreign Policy (Kanti Bajpai)"
        ],
        officialSource: "Ministry of External Affairs (NAM Historical Documents)",
        officialUrl: "https://www.mea.gov.in/"
      },
      {
        id: 'PSIR-P2-14',
        paper: 'PSIR Paper II',
        subject: 'India and South Asia',
        topic: "India and South Asia: Regional co-operation (SAARC past & prospects); South Asia Free Trade Area; 'Look East / Act East' policy",
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "India and Asian Geopolitics: The Past, Present (Shivshankar Menon)",
          "Neighbourhood Policy (SD Muni)",
          "India's Act East Policy (P.V. Rao)"
        ],
        officialSource: "Ministry of External Affairs (Bilateral - South Asia Division)",
        officialUrl: "https://www.mea.gov.in/"
      },
      {
        id: 'PSIR-P2-15',
        paper: 'PSIR Paper II',
        subject: 'India and South Asia',
        topic: 'Impediments to Regional Co-operation: River water disputes, illegal cross-border migration, ethnic conflicts, insurgencies & border disputes',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Borders and Borderlands: The Case of South Asia",
          "Internal Security & Trans-border Challenges (Ashok Kumar IPS)"
        ],
        officialSource: "Ministry of Home Affairs (Border Management)",
        officialUrl: "https://www.mha.gov.in/"
      },
      {
        id: 'PSIR-P2-16',
        paper: 'PSIR Paper II',
        subject: 'India and Global South',
        topic: 'India and Global South: Relations with Africa and Latin America; Leadership role in demand for NIEO and WTO negotiations',
        difficulty: 'Medium',
        estimatedHours: 2.5,
        status: 'Pending',
        standardBooks: [
          "India-Africa Relations (Ajay Dubey)",
          "India and Latin America in the 21st Century (R. Vishwanathan)"
        ],
        officialSource: "Ministry of External Affairs (Africa & LAC Divisions)",
        officialUrl: "https://www.mea.gov.in/"
      },
      {
        id: 'PSIR-P2-17',
        paper: 'PSIR Paper II',
        subject: 'Global Centres of Power',
        topic: 'India and Global Centres of Power: Relations with USA, European Union, Japan, China and Russia (Major Power Rivalries)',
        difficulty: 'High',
        estimatedHours: 4,
        status: 'Pending',
        standardBooks: [
          "The India Way (S. Jaishankar)",
          "Engaging India: Diplomacy, Democracy, and the Bomb (Strobe Talbott)",
          "Choices: Inside the Making of India's Foreign Policy (Shivshankar Menon)"
        ],
        officialSource: "Ministry of External Affairs (Major Powers Summits & Joint Statements)",
        officialUrl: "https://www.mea.gov.in/"
      },
      {
        id: 'PSIR-P2-18',
        paper: 'PSIR Paper II',
        subject: 'UN System & Nuclear Policy',
        topic: 'India & UN System: Role in UN Peace-keeping; Demand for Permanent Seat in Security Council; Nuclear Question & changing doctrine',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "India's Nuclear Bomb (George Perkovich)",
          "The Long View from Delhi (Raja Mohan)",
          "India's Foreign Policy (Rajiv Sikri)"
        ],
        officialSource: "Permanent Mission of India to the UN, New York",
        officialUrl: "https://pminewyork.gov.in/"
      },
      {
        id: 'PSIR-P2-19',
        paper: 'PSIR Paper II',
        subject: 'Recent Geopolitical Developments',
        topic: 'Recent Developments in Indian Foreign Policy: Crises in Afghanistan, West Asia (I2U2, IMEC), Indo-Pacific Quad, growing US/Israel ties & Vision of Multipolar World Order',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Why Bharat Matters (S. Jaishankar)",
          "Manohar Parrikar Institute for Defence Studies and Analyses (IDSA Strategic Bulletins)"
        ],
        officialSource: "Manohar Parrikar IDSA (MP-IDSA)",
        officialUrl: "https://www.idsa.in/"
      }
    ],
    sampleMCQTopic: "Plato & Aristotle's Political Philosophy",
  },

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
        topic: 'Sources of Early Indian History & Harappan Urban Morphology and Trade',
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
        subject: 'Ancient Indian History',
        topic: 'Vedic Society, Mahajanapadas, Mauryan Empire & Ashoka’s Dhamma',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Ashoka and the Decline of the Mauryas (Romila Thapar)",
          "From the Lineage to State (Romila Thapar)"
        ],
        officialSource: "Archaeological Survey of India (ASI)",
        officialUrl: "https://asi.nic.in/"
      },
      {
        id: 'HIST-OPT-03',
        paper: 'History Paper I',
        subject: 'Medieval Indian History',
        topic: 'Delhi Sultanate: Agrarian Measures & Market Control of Alauddin Khilji and Muhammad Tughlaq Experiments',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "History of Medieval India (Satish Chandra)",
          "The Agrarian System of Mughal India (Irfan Habib)",
          "NCERT Class 12 Themes in Indian History II"
        ],
        officialSource: "National Archives of India",
        officialUrl: "http://nationalarchives.nic.in/"
      },
      {
        id: 'HIST-OPT-04',
        paper: 'History Paper II',
        subject: 'Modern Indian History',
        topic: 'British Colonialism: Land Revenue Systems (Permanent, Ryotwari, Mahalwari) & Drain of Wealth',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "From Plassey to Partition and After (Sekhar Bandyopadhyay)",
          "India's Struggle for Independence (Bipan Chandra)"
        ],
        officialSource: "National Archives of India",
        officialUrl: "http://nationalarchives.nic.in/"
      },
      {
        id: 'HIST-OPT-05',
        paper: 'History Paper II',
        subject: 'World History',
        topic: 'Enlightenment, French Revolution, Industrial Revolution & World Wars I and II',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Mastering Modern World History (Norman Lowe)",
          "Contemporary World History (NCERT Arjun Dev)"
        ],
        officialSource: "UNESCO World Heritage Centre & Archives",
        officialUrl: "https://whc.unesco.org/"
      }
    ],
    sampleMCQTopic: 'Harappan Civilization & Ancient Indian Historiography',
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
        topic: 'Plate Tectonics, Seafloor Spreading, Orogeny & Davisian/Penckian Cycles of Erosion',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "Physical Geography (Savindra Singh)",
          "Certificate Physical and Human Geography (G.C. Leong)"
        ],
        officialSource: "Geological Survey of India (GSI)",
        officialUrl: "https://www.gsi.gov.in/"
      },
      {
        id: 'GEOG-OPT-02',
        paper: 'Geography Paper I',
        subject: 'Climatology & Oceanography',
        topic: 'Planetary Winds, Jet Streams, Monsoons, ENSO & Ocean Bottom Topography',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Climatology (D.S. Lal)",
          "Oceanography (Sharma & Vatal)"
        ],
        officialSource: "India Meteorological Department (IMD Mausam)",
        officialUrl: "https://mausam.imd.gov.in/"
      },
      {
        id: 'GEOG-OPT-03',
        paper: 'Geography Paper II',
        subject: 'Geography of India',
        topic: 'Physiography, Drainage, Agro-ecological Zones & Location Factors of Primary/Secondary Industries',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Geography of India (Majid Husain)",
          "India: A Comprehensive Geography (D.R. Khullar)"
        ],
        officialSource: "Survey of India & ISRO Bhuvan Geo-Portal",
        officialUrl: "https://bhuvan.nrsc.gov.in/"
      }
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
        topic: 'Scientific Management, Classical Theory, Weberian Bureaucracy & Human Relations Movement',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "Administrative Thinkers (Prasad & Prasad)",
          "New Horizons of Public Administration (Mohit Bhattacharya)"
        ],
        officialSource: "Indian Institute of Public Administration (IIPA)",
        officialUrl: "https://www.iipa.org.in/"
      },
      {
        id: 'PUBAD-OPT-02',
        paper: 'Pub Ad Paper I',
        subject: 'Behavioral School',
        topic: "Herbert Simon's Decision-Making Model, Satisficing & Public Policy Formulation",
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Administrative Behavior (Herbert A. Simon)",
          "Public Administration (Rumki Basu)"
        ],
        officialSource: "IIPA Journal Archives",
        officialUrl: "https://www.iipa.org.in/"
      },
      {
        id: 'PUBAD-OPT-03',
        paper: 'Pub Ad Paper II',
        subject: 'Indian Administration',
        topic: 'Evolution of Indian Administration: Kautilya, Mughal, British Legacies, Prime Minister’s Office & Cabinet Secretariat',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Indian Administration (Ramesh K. Arora & Rajni Goyal)",
          "2nd ARC Reports (Governance & Personnel Administration)"
        ],
        officialSource: "DARPG (2nd ARC Reports)",
        officialUrl: "https://darpg.gov.in/arc-reports"
      }
    ],
    sampleMCQTopic: 'Classical Administrative Thought (Taylor & Weber)',
  },

  'Sociology': {
    name: 'Sociology Optional',
    paper1: 'Sociology Paper I (Fundamentals of Sociology)',
    paper2: 'Sociology Paper II (Indian Society: Structure and Change)',
    activeSession: {
      slot: '14:00 - 16:30',
      subject: 'Sociology Optional: Classical Sociological Thinkers (Marx, Weber, Durkheim)',
      paper: 'Sociology Paper I',
      focus: 'Historical materialism, Protestant Ethic and Spirit of Capitalism, Social facts',
      difficulty: 'High',
      completed: false,
      standardBooks: [
        "Sociology: Themes and Perspectives (Michael Haralambos & Martin Holborn)",
        "Sociological Thought (Francis Abraham & John Henry Morgan)",
        "Sociological Theory (George Ritzer)"
      ],
      officialSource: "Indian Sociological Society (ISS)",
      officialUrl: "https://www.insoso.org/"
    },
    syllabus: [
      {
        id: 'SOC-OPT-01',
        paper: 'Sociology Paper I',
        subject: 'Sociological Thinkers',
        topic: 'Karl Marx, Max Weber, Emile Durkheim, Talcott Parsons & Robert K. Merton',
        difficulty: 'High',
        estimatedHours: 4,
        status: 'In Progress',
        standardBooks: [
          "Sociology: Themes and Perspectives (Haralambos & Holborn)",
          "Sociological Theory (George Ritzer)"
        ],
        officialSource: "Indian Sociological Society",
        officialUrl: "https://www.insoso.org/"
      },
      {
        id: 'SOC-OPT-02',
        paper: 'Sociology Paper I',
        subject: 'Stratification and Mobility',
        topic: 'Concepts: Equality, Inequality, Hierarchy, Social Exclusion & Poverty',
        difficulty: 'Medium',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "Social Stratification (Dipankar Gupta)",
          "Inequality and Social Change (Amartya Sen)"
        ],
        officialSource: "Ministry of Social Justice and Empowerment",
        officialUrl: "https://socialjustice.gov.in/"
      },
      {
        id: 'SOC-OPT-03',
        paper: 'Sociology Paper II',
        subject: 'Indian Society',
        topic: 'Perspectives on Indian Society: Indology (G.S. Ghurye), Structural Functionalism (M.N. Srinivas), Marxist (A.R. Desai)',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Indian Society: Themes and Social Issues (B.K. Nagla)",
          "Caste in Modern India (M.N. Srinivas)"
        ],
        officialSource: "Indian Council of Social Science Research (ICSSR)",
        officialUrl: "https://icssr.org/"
      }
    ],
    sampleMCQTopic: 'Marx, Weber & Durkheimian Theories',
  },

  'Anthropology': {
    name: 'Anthropology Optional',
    paper1: 'Anthropology Paper I (General Anthropology)',
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
        topic: 'Human Evolution: Biological and Cultural Dimensions of Hominization (Australopithecus, Neanderthal, Homo Sapiens)',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "Physical Anthropology (P. Nath)",
          "Outlines of Physical Anthropology (B.M. Das)"
        ],
        officialSource: "Anthropological Survey of India (AnSI)",
        officialUrl: "https://ansi.gov.in/"
      },
      {
        id: 'ANTH-OPT-02',
        paper: 'Anthropology Paper I',
        subject: 'Socio-Cultural Anthropology',
        topic: 'Theories of Culture: Evolutionism, Historical Particularism, Functionalism & Structuralism',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "An Introduction to Anthropological Thought (Makhan Jha)",
          "Cultural Anthropology (William A. Haviland)"
        ],
        officialSource: "Anthropological Survey of India (AnSI)",
        officialUrl: "https://ansi.gov.in/"
      },
      {
        id: 'ANTH-OPT-03',
        paper: 'Anthropology Paper II',
        subject: 'Indian & Tribal Anthropology',
        topic: 'Tribal Situation in India: Problems of Integration, Land Alienation, Indebtedness & Constitutional Safeguards',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Indian Anthropology (Nadeem Hasnain)",
          "Tribal India (Nadeem Hasnain)"
        ],
        officialSource: "Ministry of Tribal Affairs (TRIFED)",
        officialUrl: "https://tribal.nic.in/"
      }
    ],
    sampleMCQTopic: 'Human Evolution & Culture Theories',
  },

  'Economics': {
    name: 'Economics Optional',
    paper1: 'Economics Paper I (Advanced Economic Theory & International Trade)',
    paper2: 'Economics Paper II (Indian Economy: Planning & Reforms)',
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
        topic: 'IS-LM Model, Aggregate Demand and Supply, Inflation and Unemployment Trade-offs (Phillips Curve)',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "Macroeconomics (Richard T. Froyen)",
          "Macroeconomics (N. Gregory Mankiw)"
        ],
        officialSource: "Reserve Bank of India (Monetary Policy Framework)",
        officialUrl: "https://www.rbi.org.in/"
      },
      {
        id: 'ECO-OPT-02',
        paper: 'Economics Paper I',
        subject: 'International Trade',
        topic: 'Heckscher-Ohlin Model, Terms of Trade, Balance of Payments & Tariff Protection Theories',
        difficulty: 'High',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "International Economics: Trade and Finance (Dominick Salvatore)",
          "International Trade (Paul R. Krugman)"
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
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "Indian Economy: Performance and Policies (Uma Kapila)",
          "Economic Survey 2024-25 & Union Budget Documents"
        ],
        officialSource: "NITI Aayog & Ministry of Finance",
        officialUrl: "https://www.niti.gov.in/"
      }
    ],
    sampleMCQTopic: 'Macroeconomic Equilibrium & Trade Models',
  },

  'Philosophy': {
    name: 'Philosophy Optional',
    paper1: 'Philosophy Paper I (History & Problems of Philosophy)',
    paper2: 'Philosophy Paper II (Socio-Political & Religion)',
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
        topic: 'Carvaka, Jainism, Buddhism, Nyaya Epistemology (Pramanas) & Advaita Vedanta (Shankara vs Ramanuja)',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'In Progress',
        standardBooks: [
          "A Critical Survey of Indian Philosophy (C.D. Sharma)",
          "Outlines of Indian Philosophy (M. Hiriyanna)"
        ],
        officialSource: "Indian Council of Philosophical Research (ICPR)",
        officialUrl: "https://www.icpr.in/"
      },
      {
        id: 'PHIL-OPT-02',
        paper: 'Philosophy Paper I',
        subject: 'Western Philosophy',
        topic: 'Rationalism (Descartes, Spinoza, Leibniz), Empiricism (Locke, Berkeley, Hume) & Kantian Critique',
        difficulty: 'High',
        estimatedHours: 3.5,
        status: 'Pending',
        standardBooks: [
          "A Critical History of Western Philosophy (Y. Masih)",
          "Western Philosophy (Bertrand Russell)"
        ],
        officialSource: "Stanford Encyclopedia of Philosophy",
        officialUrl: "https://plato.stanford.edu/"
      },
      {
        id: 'PHIL-OPT-03',
        paper: 'Philosophy Paper II',
        subject: 'Socio-Political Philosophy',
        topic: 'Sovereignty, Justice, Equality, Liberty, Democracy, Human Rights & Secularism',
        difficulty: 'Medium',
        estimatedHours: 3,
        status: 'Pending',
        standardBooks: [
          "An Introduction to Political Philosophy (Jonathan Wolff)",
          "Social and Political Philosophy (O.P. Gauba)"
        ],
        officialSource: "ICPR Research Collections",
        officialUrl: "https://www.icpr.in/"
      }
    ],
    sampleMCQTopic: 'Indian Epistemology & Western Rationalism',
  },
};

// =========================================================================================
// OFFICIAL COMMON GENERAL STUDIES (GS 1-4) & CSAT MASTER SYLLABUS
// Transcribed line-by-line from The Gazette of India (Section III: Syllabi for Examination)
// =========================================================================================
export const COMMON_GS_SYLLABUS = [
  // ---------------------------------------------------------------------------------------
  // GENERAL STUDIES - I (Paper II of Main Examination)
  // Indian Heritage and Culture, History and Geography of the World and Society (12 Points)
  // ---------------------------------------------------------------------------------------
  {
    id: 'GS1-01-CULTURE',
    paper: 'GS Paper I',
    subject: 'Indian Heritage & Culture',
    topic: 'Salient aspects of Art Forms, Literature and Architecture from ancient to modern times',
    difficulty: 'Medium',
    estimatedHours: 3,
    status: 'In Progress',
    standardBooks: [
      "Indian Art and Culture (Nitin Singhania)",
      "NCERT Class 11: An Introduction to Indian Art (Part I)",
      "CCRT Official Heritage Archives"
    ],
    officialSource: "Ministry of Culture & Archaeological Survey of India (ASI)",
    officialUrl: "https://indiaculture.gov.in/"
  },
  {
    id: 'GS1-02-MOD-HIST',
    paper: 'GS Paper I',
    subject: 'Modern Indian History',
    topic: 'Modern Indian history from about the middle of the eighteenth century until the present— significant events, personalities, issues',
    difficulty: 'Medium',
    estimatedHours: 3,
    status: 'In Progress',
    standardBooks: [
      "A Brief History of Modern India (Rajiv Ahir / Spectrum)",
      "From Plassey to Partition and After (Sekhar Bandyopadhyay)",
      "NCERT Class 12: Themes in Indian History (Part III)"
    ],
    officialSource: "National Archives of India (NAI)",
    officialUrl: "http://nationalarchives.nic.in/"
  },
  {
    id: 'GS1-03-FREEDOM',
    paper: 'GS Paper I',
    subject: 'The Freedom Struggle',
    topic: 'The Freedom Struggle — its various stages and important contributors/contributions from different parts of the country',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "India's Struggle for Independence (Bipan Chandra)",
      "A Brief History of Modern India (Spectrum)",
      "NCERT Class 12 Themes in Indian History (Part III)"
    ],
    officialSource: "Ministry of Culture (Amrit Mahotsav Digital Archives)",
    officialUrl: "https://amritmahotsav.nic.in/"
  },
  {
    id: 'GS1-04-POST-INDEP',
    paper: 'GS Paper I',
    subject: 'Post-Independence India',
    topic: 'Post-independence consolidation and reorganization within the country (States reorganization, integration of princely states, tribal consolidation)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "India Since Independence (Bipan Chandra)",
      "NCERT Class 12: Politics in India Since Independence",
      "India After Gandhi (Ramachandra Guha)"
    ],
    officialSource: "Pradhanmantri Sangrahalaya Official Portal",
    officialUrl: "https://www.pmsangrahalaya.gov.in/"
  },
  {
    id: 'GS1-05-WORLD-HIST',
    paper: 'GS Paper I',
    subject: 'World History',
    topic: 'History of the world: Events from 18th century such as Industrial Revolution, World Wars, redrawal of national boundaries, colonization, decolonization, political philosophies (Communism, Capitalism, Socialism)',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Mastering Modern World History (Norman Lowe)",
      "Contemporary World History (NCERT Class 12 Arjun Dev)",
      "History of the Modern World (Jain & Mathur)"
    ],
    officialSource: "UNESCO World Heritage Centre & Archives",
    officialUrl: "https://whc.unesco.org/"
  },
  {
    id: 'GS1-06-IND-SOC',
    paper: 'GS Paper I',
    subject: 'Indian Society',
    topic: 'Salient features of Indian Society, Diversity of India (Linguistic, religious, ethnic unity in diversity)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "NCERT Class 12: Indian Society",
      "Social Change and Development in India (NCERT Class 12)",
      "Society in India (Ram Ahuja)"
    ],
    officialSource: "Ministry of Social Justice and Empowerment",
    officialUrl: "https://socialjustice.gov.in/"
  },
  {
    id: 'GS1-07-WOMEN-POP',
    paper: 'GS Paper I',
    subject: 'Demography & Urbanization',
    topic: "Role of women and women's organization, population and associated issues, poverty and developmental issues, urbanization, their problems and their remedies",
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Indian Social System (Ram Ahuja)",
      "Ministry of Housing & Urban Affairs (MoHUA) Smart Cities Mission Reports",
      "Census of India Socio-Economic & Demographic Data"
    ],
    officialSource: "Ministry of Women and Child Development (MoWCD) & MoHUA",
    officialUrl: "https://wcd.nic.in/"
  },
  {
    id: 'GS1-08-GLOBAL-SOC',
    paper: 'GS Paper I',
    subject: 'Indian Society',
    topic: 'Effects of globalization on Indian society (Cultural, economic, familial and lifestyle transitions)',
    difficulty: 'Medium',
    estimatedHours: 2,
    status: 'Pending',
    standardBooks: [
      "Social Change in Modern India (M.N. Srinivas)",
      "NCERT Class 12: Social Change and Development in India"
    ],
    officialSource: "NITI Aayog Socio-Economic Transition Studies",
    officialUrl: "https://www.niti.gov.in/"
  },
  {
    id: 'GS1-09-SOC-EMPOW',
    paper: 'GS Paper I',
    subject: 'Social Empowerment',
    topic: 'Social empowerment, communalism, regionalism & secularism in the Indian context',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Caste in Modern India (M.N. Srinivas)",
      "Indian Society (Ram Ahuja)",
      "Communalism in Modern India (Bipan Chandra)"
    ],
    officialSource: "Ministry of Social Justice and Empowerment",
    officialUrl: "https://socialjustice.gov.in/"
  },
  {
    id: 'GS1-10-PHYS-GEOG',
    paper: 'GS Paper I',
    subject: 'Physical Geography',
    topic: "Salient features of world's physical geography (Geomorphology, Climatology, Oceanography, Soil & Biogeography)",
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "NCERT Class 11: Fundamentals of Physical Geography",
      "Physical Geography (Savindra Singh)",
      "Certificate Physical and Human Geography (G.C. Leong)"
    ],
    officialSource: "Geological Survey of India (GSI)",
    officialUrl: "https://www.gsi.gov.in/"
  },
  {
    id: 'GS1-11-INDUS-RES',
    paper: 'GS Paper I',
    subject: 'Economic Geography',
    topic: 'Distribution of key natural resources across the world (including South Asia and Indian sub-continent); Factors responsible for location of primary, secondary, and tertiary sector industries (including India)',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "India: A Comprehensive Geography (D.R. Khullar)",
      "NCERT Class 12: India People and Economy",
      "Oxford Student Atlas for India"
    ],
    officialSource: "Ministry of Mines & Ministry of Commerce and Industry",
    officialUrl: "https://mines.gov.in/"
  },
  {
    id: 'GS1-12-GEOPHYS-PHEN',
    paper: 'GS Paper I',
    subject: 'Geophysical Phenomena',
    topic: 'Important Geophysical phenomena: Earthquakes, Tsunami, Volcanic activity, cyclones; Geographical features & changes in water-bodies, ice-caps, flora and fauna, and their effects',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Physical Geography (Savindra Singh)",
      "NDMA Standard Operating Procedures for Natural Hazards",
      "IMD Weather & Cyclone Technical Manuals"
    ],
    officialSource: "India Meteorological Department (IMD) & INCOIS",
    officialUrl: "https://mausam.imd.gov.in/"
  },

  // ---------------------------------------------------------------------------------------
  // GENERAL STUDIES - II (Paper III of Main Examination)
  // Governance, Constitution, Polity, Social Justice and International Relations (20 Points)
  // ---------------------------------------------------------------------------------------
  {
    id: 'GS2-01-CONST-HIST',
    paper: 'GS Paper II',
    subject: 'Indian Constitution',
    topic: 'Indian Constitution: Historical underpinnings, evolution, features, amendments, significant provisions and basic structure doctrine',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'In Progress',
    standardBooks: [
      "Indian Polity (M. Laxmikanth - Chapters 1 to 11)",
      "Introduction to the Constitution of India (D.D. Basu)",
      "NCERT Class 11: Indian Constitution at Work"
    ],
    officialSource: "Legislative Department (Ministry of Law and Justice)",
    officialUrl: "https://legislative.gov.in/constitution-of-india/"
  },
  {
    id: 'GS2-02-FED-STRUCT',
    paper: 'GS Paper II',
    subject: 'Federal Structure',
    topic: 'Functions and responsibilities of the Union and States, issues and challenges pertaining to federal structure, devolution of powers and finances up to local levels and challenges therein',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "The Indian Constitution: Cornerstone of a Nation (Granville Austin)",
      "Indian Polity (M. Laxmikanth - Federal System, Center-State & Inter-State Relations)",
      "Punchhi Commission on Centre-State Relations"
    ],
    officialSource: "Inter-State Council Secretariat (Ministry of Home Affairs)",
    officialUrl: "https://interstatecouncil.gov.in/"
  },
  {
    id: 'GS2-03-SEP-POWERS',
    paper: 'GS Paper II',
    subject: 'Separation of Powers',
    topic: 'Separation of powers between various organs dispute redressal mechanisms and institutions',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Introduction to the Constitution of India (D.D. Basu)",
      "Supreme Court Landmark Judgments on Separation of Powers",
      "Indian Polity (M. Laxmikanth)"
    ],
    officialSource: "Supreme Court of India Official Portal",
    officialUrl: "https://main.sci.gov.in/"
  },
  {
    id: 'GS2-04-CONST-COMP',
    paper: 'GS Paper II',
    subject: 'Constitutional Comparison',
    topic: 'Comparison of the Indian constitutional scheme with that of other countries (USA, UK, France, Germany, Canada, South Africa)',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Comparative Constitutional Law (D.D. Basu)",
      "Constitutional Schemes of Major World Democracies",
      "International IDEA Comparative Tables"
    ],
    officialSource: "International IDEA Constitution Building Resources",
    officialUrl: "https://www.idea.int/"
  },
  {
    id: 'GS2-05-PARLIAMENT',
    paper: 'GS Paper II',
    subject: 'Parliament & Legislatures',
    topic: 'Parliament and State legislatures: Structure, functioning, conduct of business, powers & privileges and issues arising out of these',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Practice and Procedure of Parliament (M.N. Kaul & S.L. Shakdher)",
      "Indian Polity (M. Laxmikanth - Parliament & State Legislature Chapters)",
      "PRS Legislative Research Parliamentary Monitoring Reports"
    ],
    officialSource: "Parliament of India (Sansad Official Portal)",
    officialUrl: "https://sansad.in/"
  },
  {
    id: 'GS2-06-EXEC-JUDIC',
    paper: 'GS Paper II',
    subject: 'Executive & Judiciary',
    topic: 'Structure, organization and functioning of Executive and Judiciary: Ministries, Departments, pressure groups, formal/informal associations and role in Polity',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Indian Polity (M. Laxmikanth)",
      "2nd ARC Report on Ethics in Governance & Judicial Accountability",
      "Cabinet Secretariat Manual of Office Procedure"
    ],
    officialSource: "Cabinet Secretariat (Government of India)",
    officialUrl: "https://cabsec.gov.in/"
  },
  {
    id: 'GS2-07-RPA-ACT',
    paper: 'GS Paper II',
    subject: 'Electoral Law',
    topic: "Salient features of the Representation of People's Act (RPA 1950 & 1951, disqualification, electoral reforms, Model Code of Conduct)",
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Manual of Election Law (Ministry of Law and Justice)",
      "Law Commission Reports on Electoral Reforms (Report No. 255)",
      "Indian Polity (M. Laxmikanth - Election Laws)"
    ],
    officialSource: "Election Commission of India (ECI)",
    officialUrl: "https://eci.gov.in/"
  },
  {
    id: 'GS2-08-CONST-BODIES',
    paper: 'GS Paper II',
    subject: 'Constitutional Bodies',
    topic: 'Appointment to various Constitutional posts, powers, functions and responsibilities of various Constitutional Bodies (ECI, CAG, UPSC, Finance Commission, NCSC, NCST)',
    difficulty: 'Medium',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Indian Polity (M. Laxmikanth - Part VII Constitutional Bodies)",
      "Comptroller and Auditor General of India Auditing Standards"
    ],
    officialSource: "Comptroller & Auditor General of India (CAG) & UPSC",
    officialUrl: "https://cag.gov.in/"
  },
  {
    id: 'GS2-09-STAT-BODIES',
    paper: 'GS Paper II',
    subject: 'Statutory & Quasi-Judicial',
    topic: 'Statutory, regulatory and various quasi-judicial bodies (NHRC, NGT, CCI, SEBI, TRAI, CERC, Lokpal, Central Vigilance Commission)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Indian Polity (M. Laxmikanth - Non-Constitutional Bodies)",
      "National Green Tribunal (NGT) Act 2010 Overview",
      "Lokpal and Lokayuktas Act 2013"
    ],
    officialSource: "National Human Rights Commission (NHRC) & NGT",
    officialUrl: "https://nhrc.nic.in/"
  },
  {
    id: 'GS2-10-GOV-POLICIES',
    paper: 'GS Paper II',
    subject: 'Government Interventions',
    topic: 'Government policies and interventions for development in various sectors and issues arising out of their design and implementation',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "NITI Aayog Strategy for New India @ 75",
      "Kurukshetra & Yojana Monthly Government Journals",
      "India Year Book (Publications Division)"
    ],
    officialSource: "NITI Aayog Official Research Publications",
    officialUrl: "https://www.niti.gov.in/"
  },
  {
    id: 'GS2-11-DEV-INDUSTRY',
    paper: 'GS Paper II',
    subject: 'Development Industry',
    topic: 'Development processes and development industry: The role of NGOs, SHGs, various groups and associations, donors, charities, institutional and other stakeholders',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Governance in India (M. Laxmikanth)",
      "NABARD Microfinance and SHG Bank Linkage Reports",
      "NGO Darpan Guidelines"
    ],
    officialSource: "NGO Darpan (NITI Aayog)",
    officialUrl: "https://ngodarpan.gov.in/"
  },
  {
    id: 'GS2-12-WELFARE-SCH',
    paper: 'GS Paper II',
    subject: 'Welfare Mechanisms',
    topic: 'Welfare schemes for vulnerable sections of the population by Centre and States and performance of these schemes; Mechanisms, laws, institutions and Bodies constituted for protection and betterment of vulnerable sections',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Social Problems in India (Ram Ahuja)",
      "Ministry of Social Justice and Empowerment Annual Reports",
      "Rights of Persons with Disabilities Act 2016"
    ],
    officialSource: "Ministry of Social Justice & Empowerment",
    officialUrl: "https://socialjustice.gov.in/"
  },
  {
    id: 'GS2-13-SOC-HEALTH',
    paper: 'GS Paper II',
    subject: 'Social Sector: Health & Education',
    topic: 'Issues relating to development and management of Social Sector/Services relating to Health, Education, Human Resources',
    difficulty: 'Medium',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "National Health Policy 2017 & Ayushman Bharat Scheme Documents",
      "National Education Policy (NEP 2020) Blueprint",
      "Economic Survey: Social Infrastructure Chapter"
    ],
    officialSource: "Ministry of Health and Family Welfare & Ministry of Education",
    officialUrl: "https://mohfw.gov.in/"
  },
  {
    id: 'GS2-14-POV-HUNGER',
    paper: 'GS Paper II',
    subject: 'Poverty & Hunger',
    topic: 'Issues relating to poverty and hunger (National Multidimensional Poverty Index, Global Hunger Index metrics, POSHAN Abhiyaan, NFSA 2013)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "National Multidimensional Poverty Index (NITI Aayog & UNDP)",
      "State of Food Security and Nutrition in the World (FAO)",
      "National Food Security Act (NFSA 2013) Guidelines"
    ],
    officialSource: "NITI Aayog National MPI Portal",
    officialUrl: "https://www.niti.gov.in/"
  },
  {
    id: 'GS2-15-E-GOVERNANCE',
    paper: 'GS Paper II',
    subject: 'Governance & Accountability',
    topic: 'Important aspects of governance, transparency and accountability, e-governance: Applications, models, successes, limitations, potential; Citizens charters, transparency & accountability and institutional measures',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "2nd ARC 1st Report (Right to Information) & 11th Report (Promoting e-Governance)",
      "Digital India Initiative Mission Documents",
      "Citizen Charters in Public Service Delivery"
    ],
    officialSource: "Department of Administrative Reforms & Public Grievances (DARPG)",
    officialUrl: "https://darpg.gov.in/"
  },
  {
    id: 'GS2-16-CIVIL-SERVICES',
    paper: 'GS Paper II',
    subject: 'Civil Services Role',
    topic: 'Role of civil services in a democracy (Evolution, bureaucratic neutrality, commitment vs politicization, Mission Karmayogi)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "2nd ARC 10th Report on Refurbishing of Personnel Administration",
      "Mission Karmayogi (National Programme for Civil Services Capacity Building)",
      "Public Administration in India"
    ],
    officialSource: "Department of Personnel and Training (DoPT)",
    officialUrl: "https://dopt.gov.in/"
  },
  {
    id: 'GS2-17-IR-NEIGHBOR',
    paper: 'GS Paper II',
    subject: 'International Relations',
    topic: "India and its neighborhood— relations (Neighbourhood First policy, boundary treaties, connectivity corridors, maritime neighbors)",
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "The India Way: Strategies for an Uncertain World (S. Jaishankar)",
      "India's Foreign Policy (Rajiv Sikri)",
      "MEA Bilateral Briefs on Nepal, Bhutan, Bangladesh, Sri Lanka, Maldives, Myanmar"
    ],
    officialSource: "Ministry of External Affairs (Bilateral Relations)",
    officialUrl: "https://www.mea.gov.in/"
  },
  {
    id: 'GS2-18-IR-GROUPINGS',
    paper: 'GS Paper II',
    subject: 'International Groupings',
    topic: "Bilateral, regional and global groupings and agreements involving India and/or affecting India's interests (Quad, BRICS, SCO, G20, I2U2, BIMSTEC, ASEAN)",
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "The Globalization of World Politics (Baylis, Smith & Owens)",
      "MEA Official Summit Declarations (G20 New Delhi Declaration, BRICS, Quad)",
      "IDSA Strategic Studies"
    ],
    officialSource: "Ministry of External Affairs (Multilateral Treaties)",
    officialUrl: "https://www.mea.gov.in/"
  },
  {
    id: 'GS2-19-IR-DIASPORA',
    paper: 'GS Paper II',
    subject: 'Global Politics & Diaspora',
    topic: "Effect of policies and politics of developed and developing countries on India's interests, Indian diaspora",
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Does the Elephant Dance? (David M. Malone)",
      "High Level Committee on Indian Diaspora (L.M. Singhvi Report)",
      "MEA Overseas Indian Affairs Reports"
    ],
    officialSource: "Ministry of External Affairs (Diaspora Division)",
    officialUrl: "https://www.mea.gov.in/"
  },
  {
    id: 'GS2-20-IR-INSTITUTIONS',
    paper: 'GS Paper II',
    subject: 'International Institutions',
    topic: 'Important International institutions, agencies and fora— their structure, mandate (UN, UNSC, WTO, IMF, World Bank, WHO, FATF, International Criminal Court)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "International Organizations (K.P. Saxena)",
      "United Nations Handbook",
      "WTO Agreements and Dispute Settlement Mechanisms"
    ],
    officialSource: "United Nations Official Portal & WTO",
    officialUrl: "https://www.un.org/"
  },

  // ---------------------------------------------------------------------------------------
  // GENERAL STUDIES - III (Paper IV of Main Examination)
  // Technology, Economic Development, Bio diversity, Environment, Security & Disaster (20 Points)
  // ---------------------------------------------------------------------------------------
  {
    id: 'GS3-01-ECO-PLAN',
    paper: 'GS Paper III',
    subject: 'Indian Economy & Planning',
    topic: 'Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'In Progress',
    standardBooks: [
      "Indian Economy (Ramesh Singh / Nitin Singhania)",
      "Economic Survey 2024-25 (Ministry of Finance)",
      "NCERT Class 12: Introductory Macroeconomics"
    ],
    officialSource: "Ministry of Finance & Department of Economic Affairs",
    officialUrl: "https://finmin.nic.in/"
  },
  {
    id: 'GS3-02-INCLUSIVE-GROWTH',
    paper: 'GS Paper III',
    subject: 'Inclusive Growth',
    topic: 'Inclusive growth and issues arising from it (Financial inclusion, rural-urban disparities, labor-force participation, PM Jan Dhan Yojana, UPI transformation)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Indian Economy: Performance and Policies (Uma Kapila)",
      "NITI Aayog Strategy Documents on Inclusive Development",
      "Reserve Bank of India National Strategy for Financial Inclusion"
    ],
    officialSource: "Reserve Bank of India & NITI Aayog",
    officialUrl: "https://www.rbi.org.in/"
  },
  {
    id: 'GS3-03-GOV-BUDGET',
    paper: 'GS Paper III',
    subject: 'Government Budgeting',
    topic: 'Government Budgeting: Revenue/Capital accounts, fiscal deficit, FRBM Act, GST compensation, Gender budgeting, Zero-based budgeting',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Union Budget Manual (Ministry of Finance)",
      "FRBM Act 2003 & NK Singh Committee Recommendations",
      "Indian Economy (Ramesh Singh - Public Finance)"
    ],
    officialSource: "Union Budget Portal (Government of India)",
    officialUrl: "https://www.indiabudget.gov.in/"
  },
  {
    id: 'GS3-04-AGRIC-CROPS',
    paper: 'GS Paper III',
    subject: 'Agriculture & Irrigation',
    topic: 'Major crops-cropping patterns in various parts of the country; Different types of irrigation and irrigation systems; Storage, transport and marketing of agricultural produce and issues and related constraints; E-technology in aid of farmers',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Agricultural Economics (S.S. Acharya & N.L. Agarwal)",
      "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) Guidelines",
      "e-NAM (National Agriculture Market) Portal Overview"
    ],
    officialSource: "Ministry of Agriculture & Farmers Welfare",
    officialUrl: "https://agricoop.nic.in/"
  },
  {
    id: 'GS3-05-FARM-SUBSIDIES',
    paper: 'GS Paper III',
    subject: 'Subsidies & Food Security',
    topic: 'Issues related to direct and indirect farm subsidies and minimum support prices (MSP); Public Distribution System (PDS) objectives, functioning, limitations, revamping; Issues of buffer stocks and food security; Technology missions; Economics of animal-rearing',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Commission for Agricultural Costs and Prices (CACP) Price Policy Reports",
      "Shanta Kumar High Level Committee on FCI Restructuring",
      "National Food Security Act (NFSA 2013)"
    ],
    officialSource: "Commission for Agricultural Costs and Prices (CACP) & Food Corporation of India",
    officialUrl: "https://cacp.dacnet.nic.in/"
  },
  {
    id: 'GS3-06-FOOD-PROCESSING',
    paper: 'GS Paper III',
    subject: 'Food Processing Industry',
    topic: "Food processing and related industries in India: Scope and significance, location, upstream and downstream requirements, supply chain management, Mega Food Parks scheme",
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Ministry of Food Processing Industries (MoFPI) Annual Reports",
      "PM Kisan SAMPADA Yojana Guidelines",
      "Indian Food Industry Overview (IBEF)"
    ],
    officialSource: "Ministry of Food Processing Industries (MoFPI)",
    officialUrl: "https://mofpi.gov.in/"
  },
  {
    id: 'GS3-07-LAND-REFORMS',
    paper: 'GS Paper III',
    subject: 'Land Reforms',
    topic: 'Land reforms in India: Abolition of intermediaries, tenancy reforms, ceiling on land holdings, land consolidation, digitization of land records (DILRMP)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "India Since Independence (Bipan Chandra - Agrarian chapter)",
      "Digital India Land Records Modernization Programme (DILRMP)",
      "Land Reforms in India (B.B. Mohanty)"
    ],
    officialSource: "Department of Land Resources (Ministry of Rural Development)",
    officialUrl: "https://dolr.gov.in/"
  },
  {
    id: 'GS3-08-LIBERALIZATION',
    paper: 'GS Paper III',
    subject: 'Industrial Policy',
    topic: 'Effects of liberalization on the economy, changes in industrial policy and their effects on industrial growth (1991 reforms, Make in India, PLI schemes)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Indian Economy Since Independence (Uma Kapila)",
      "DPIIT Industrial Policy White Paper",
      "Production Linked Incentive (PLI) Scheme Reports"
    ],
    officialSource: "DPIIT (Ministry of Commerce and Industry)",
    officialUrl: "https://dpiit.gov.in/"
  },
  {
    id: 'GS3-09-INFRASTRUCTURE',
    paper: 'GS Paper III',
    subject: 'Infrastructure',
    topic: 'Infrastructure: Energy, Ports, Roads, Airports, Railways etc. (PM Gati Shakti, Bharatmala, Sagarmala, National Green Hydrogen Mission)',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "PM Gati Shakti National Master Plan Framework",
      "National Infrastructure Pipeline (NIP) Reports",
      "Ministry of Power & MNRE Renewable Energy Roadmaps"
    ],
    officialSource: "PM Gati Shakti National Master Plan Portal",
    officialUrl: "https://gatishakti.mohua.gov.in/"
  },
  {
    id: 'GS3-10-INVEST-MODELS',
    paper: 'GS Paper III',
    subject: 'Investment Models',
    topic: 'Investment models: PPP models (BOT, BOOT, HAM, EPC, Swiss Challenge), Kelkar Committee recommendations, National Monetisation Pipeline',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Report of Committee on Revisiting & Revitalising PPP Model of Infrastructure (Vijay Kelkar Committee)",
      "Department of Economic Affairs Public-Private Partnerships Manual"
    ],
    officialSource: "Department of Economic Affairs (DEA PPP Cell)",
    officialUrl: "https://www.pppinindia.gov.in/"
  },
  {
    id: 'GS3-11-SCI-TECH-DEV',
    paper: 'GS Paper III',
    subject: 'Science & Technology',
    topic: 'Science and Technology: Developments and their applications and effects in everyday life',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Science & Technology (Ravi P. Agrahari)",
      "Department of Science and Technology (DST) Annual Reports",
      "NCERT General Science Class 9 & 10"
    ],
    officialSource: "Department of Science and Technology (DST)",
    officialUrl: "https://dst.gov.in/"
  },
  {
    id: 'GS3-12-INDIGEN-TECH',
    paper: 'GS Paper III',
    subject: 'Indigenization of Technology',
    topic: 'Achievements of Indians in science & technology; Indigenization of technology and developing new technology (Atmanirbhar Bharat in Defence, Pharma, Semiconductors)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "DRDO Technology Focus & Innovations",
      "India Semiconductor Mission (ISM) Guidelines",
      "CSIR Technology Transfer Bulletins"
    ],
    officialSource: "Council of Scientific and Industrial Research (CSIR) & DRDO",
    officialUrl: "https://www.csir.res.in/"
  },
  {
    id: 'GS3-13-SPACE-AI-IPR',
    paper: 'GS Paper III',
    subject: 'IT, Space & Emerging Tech',
    topic: 'Awareness in the fields of IT, Space, Computers, robotics, nano-technology, bio-technology and issues relating to intellectual property rights (IPR)',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "ISRO Missions Overview (Gaganyaan, Chandrayaan, Aditya-L1)",
      "National Quantum Mission & IndiaAI Mission Documents",
      "Indian Patent Act 1970 & TRIPS Agreement Provisions"
    ],
    officialSource: "Indian Space Research Organisation (ISRO) & Office of Controller General of Patents",
    officialUrl: "https://www.isro.gov.in/"
  },
  {
    id: 'GS3-14-ENV-CONSERV',
    paper: 'GS Paper III',
    subject: 'Environment & Biodiversity',
    topic: 'Conservation, environmental pollution and degradation, environmental impact assessment (EIA 2020), Biodiversity Act 2002, Wildlife Protection Act (2022 Amendment)',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Environment (Shankar IAS Academy)",
      "Environmental Ecology, Biodiversity & Climate Change (P.D. Sharma)",
      "UNFCCC Conference of Parties (COP) Official Treaties"
    ],
    officialSource: "Ministry of Environment, Forest and Climate Change (MoEFCC)",
    officialUrl: "https://moef.gov.in/"
  },
  {
    id: 'GS3-15-DISASTER-MGMT',
    paper: 'GS Paper III',
    subject: 'Disaster Management',
    topic: 'Disaster and disaster management: Disaster Management Act 2005, Sendai Framework for Disaster Risk Reduction 2015-2030, National Disaster Management Plan',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "National Disaster Management Guidelines (NDMA)",
      "2nd ARC 3rd Report: Crisis Management",
      "Sendai Framework for Disaster Risk Reduction"
    ],
    officialSource: "National Disaster Management Authority (NDMA)",
    officialUrl: "https://ndma.gov.in/"
  },
  {
    id: 'GS3-16-EXTREMISM',
    paper: 'GS Paper III',
    subject: 'Internal Security',
    topic: 'Linkages between development and spread of extremism (Left Wing Extremism, Red Corridor dynamics, SAMADHAN doctrine)',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Challenges to Internal Security of India (Ashok Kumar IPS & Vipul Anekant)",
      "Ministry of Home Affairs Left Wing Extremism Division Annual Review"
    ],
    officialSource: "Ministry of Home Affairs (LWE Division)",
    officialUrl: "https://www.mha.gov.in/"
  },
  {
    id: 'GS3-17-STATE-ACTORS',
    paper: 'GS Paper III',
    subject: 'Internal Security Challenges',
    topic: 'Role of external state and non-state actors in creating challenges to internal security (Cross-border proxy wars, state-sponsored terrorism)',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "India's National Security: A Reader (Kanti P. Bajpai & Harsh V. Pant)",
      "Manohar Parrikar Institute for Defence Studies and Analyses (IDSA Reports)"
    ],
    officialSource: "MP-IDSA (Institute for Defence Studies and Analyses)",
    officialUrl: "https://www.idsa.in/"
  },
  {
    id: 'GS3-18-CYBER-SECURITY',
    paper: 'GS Paper III',
    subject: 'Cyber Security & Money Laundering',
    topic: 'Challenges to internal security through communication networks, role of media and social networking sites, basics of cyber security; money-laundering and its prevention',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Cyber Security in India: Frameworks and Protocols (CERT-In)",
      "Prevention of Money Laundering Act 2002 (PMLA Rules)",
      "Information Technology Act 2000 (Section 69A)"
    ],
    officialSource: "Indian Computer Emergency Response Team (CERT-In) & Financial Intelligence Unit (FIU-IND)",
    officialUrl: "https://www.cert-in.org.in/"
  },
  {
    id: 'GS3-19-BORDER-MGMT',
    paper: 'GS Paper III',
    subject: 'Border Management',
    topic: 'Security challenges and their management in border areas — linkages of organized crime with terrorism (Golden Crescent, Golden Triangle, CIBMS smart borders)',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "India's Border Management: Challenges and Way Forward (IDSA)",
      "Comprehensive Integrated Border Management System (CIBMS) Guidelines"
    ],
    officialSource: "Ministry of Home Affairs (Border Management Division)",
    officialUrl: "https://www.mha.gov.in/"
  },
  {
    id: 'GS3-20-SECURITY-FORCES',
    paper: 'GS Paper III',
    subject: 'Security Forces Mandate',
    topic: 'Various Security forces and agencies and their mandate (Indian Armed Forces, CAPFs - BSF, CRPF, CISF, ITBP, SSB, Assam Rifles; Intelligence agencies - IB, R&AW, NIA)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Ministry of Home Affairs Police Division Manual",
      "National Investigation Agency (NIA) Act 2008 & 2019 Amendment",
      "Challenges to Internal Security (Ashok Kumar IPS)"
    ],
    officialSource: "National Investigation Agency (NIA) & MHA Police Division",
    officialUrl: "https://www.nia.gov.in/"
  },

  // ---------------------------------------------------------------------------------------
  // GENERAL STUDIES - IV (Paper V of Main Examination)
  // Ethics, Integrity and Aptitude (8 Points)
  // ---------------------------------------------------------------------------------------
  {
    id: 'GS4-01-ETH-INTERFACE',
    paper: 'GS Paper IV',
    subject: 'Ethics & Human Interface',
    topic: 'Ethics and Human Interface: Essence, determinants and consequences of Ethics in-human actions; Dimensions of ethics; Ethics in private and public relationships. Human Values: Lessons from lives and teachings of great leaders, reformers and administrators; Role of family, society and educational institutions in inculcating values',
    difficulty: 'Medium',
    estimatedHours: 3,
    status: 'In Progress',
    standardBooks: [
      "Lexicon for Ethics, Integrity & Aptitude (Chronicle Publications)",
      "Ethics, Integrity & Aptitude (Subba Rao & P.N. Roy Chowdhury)"
    ],
    officialSource: "Indian Council of Philosophical Research (ICPR)",
    officialUrl: "https://www.icpr.in/"
  },
  {
    id: 'GS4-02-ATTITUDE',
    paper: 'GS Paper IV',
    subject: 'Attitude & Behaviour',
    topic: 'Attitude: Content, structure, function; its influence and relation with thought and behaviour; Moral and political attitudes; Social influence and persuasion',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Social Psychology (Robert A. Baron)",
      "Ethics, Integrity & Aptitude (Subba Rao & P.N. Roy Chowdhury)"
    ],
    officialSource: "Harvard Project Implicit (Behavioral Ethics Resources)",
    officialUrl: "https://implicit.harvard.edu/"
  },
  {
    id: 'GS4-03-CIVIL-VALUES',
    paper: 'GS Paper IV',
    subject: 'Civil Service Values',
    topic: 'Aptitude and foundational values for Civil Service: Integrity, impartiality and non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker-sections',
    difficulty: 'High',
    estimatedHours: 3,
    status: 'Pending',
    standardBooks: [
      "Nolan Committee Seven Principles of Public Life",
      "2nd ARC 4th Report: Ethics in Governance",
      "Central Civil Services (Conduct) Rules 1964"
    ],
    officialSource: "Committee on Standards in Public Life (Nolan Principles) & DoPT",
    officialUrl: "https://dopt.gov.in/"
  },
  {
    id: 'GS4-04-EMOT-INTELL',
    paper: 'GS Paper IV',
    subject: 'Emotional Intelligence',
    topic: 'Emotional intelligence: Concepts, and their utilities and application in administration and governance (Self-awareness, self-regulation, motivation, empathy, social skills)',
    difficulty: 'Medium',
    estimatedHours: 2.5,
    status: 'Pending',
    standardBooks: [
      "Emotional Intelligence: Why It Can Matter More Than IQ (Daniel Goleman)",
      "Working with Emotional Intelligence (Daniel Goleman)"
    ],
    officialSource: "Consortium for Research on Emotional Intelligence in Organizations",
    officialUrl: "https://www.eiconsortium.org/"
  },
  {
    id: 'GS4-05-MORAL-THINKERS',
    paper: 'GS Paper IV',
    subject: 'Moral Philosophers',
    topic: 'Contributions of moral thinkers and philosophers from India and world (Western: Socrates, Plato, Aristotle, Kant, Bentham, Mill, Rawls; Indian: Kautilya, Buddha, Mahavira, Kabir, Vivekananda, Gandhi, Tagore, Amartya Sen)',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Justice: What's the Right Thing to Do? (Michael J. Sandel)",
      "Foundations of Indian Political Thought (V.R. Mehta)",
      "Moral Thinkers and Philosophers (Subba Rao)"
    ],
    officialSource: "Stanford Encyclopedia of Philosophy (Ethics Section)",
    officialUrl: "https://plato.stanford.edu/"
  },
  {
    id: 'GS4-06-PUBLIC-ETHICS',
    paper: 'GS Paper IV',
    subject: 'Public Administration Ethics',
    topic: 'Public/Civil service values and Ethics in Public administration: Status and problems; Ethical concerns and dilemmas in government and private institutions; Laws, rules, regulations and conscience as sources of ethical guidance; Accountability and ethical governance; Corporate governance',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "2nd ARC 4th Report: Ethics in Governance",
      "OECD Guidelines for Managing Conflict of Interest in the Public Service",
      "Ethics in Governance (P.R. Dubhashi)"
    ],
    officialSource: "Department of Administrative Reforms & Public Grievances (DARPG)",
    officialUrl: "https://darpg.gov.in/arc-reports"
  },
  {
    id: 'GS4-07-PROBITY-GOV',
    paper: 'GS Paper IV',
    subject: 'Probity in Governance',
    topic: 'Probity in Governance: Concept of public service; Philosophical basis of governance and probity; Information sharing and transparency in government, Right to Information (RTI Act 2005), Codes of Ethics, Codes of Conduct, Citizen’s Charters, Work culture, Quality of service delivery, Utilization of public funds, challenges of corruption',
    difficulty: 'High',
    estimatedHours: 3.5,
    status: 'Pending',
    standardBooks: [
      "Right to Information Act 2005 Official Manual",
      "CVC Manual on Vigilance Administration",
      "Prevention of Corruption Act 1988 (2018 Amendment)"
    ],
    officialSource: "Central Vigilance Commission (CVC) & Central Information Commission (CIC)",
    officialUrl: "https://cvc.gov.in/"
  },
  {
    id: 'GS4-08-CASE-STUDIES',
    paper: 'GS Paper IV',
    subject: 'Applied Ethics Case Studies',
    topic: 'Case Studies on above issues: Ethical dilemmas in public policy, administrative discretion, conflict of interest, crisis management, political pressure, procurement transparency, and whistleblowing',
    difficulty: 'High',
    estimatedHours: 4,
    status: 'Pending',
    standardBooks: [
      "Ethics, Integrity & Aptitude: 100+ Solved Case Studies (DK Balaji IAS)",
      "Ethics in Governance Case Study Repository (LBSNAA Mussoorie)",
      "Lexicon Case Studies Compendium"
    ],
    officialSource: "Lal Bahadur Shastri National Academy of Administration (LBSNAA)",
    officialUrl: "https://www.lbsnaa.gov.in/"
  },

  // ---------------------------------------------------------------------------------------
  // CSAT PAPER - II (Civil Services Preliminary Examination Paper II - Qualifying at 33%)
  // Comprehension, Reasoning, General Mental Ability & Basic Numeracy (6 Points)
  // ---------------------------------------------------------------------------------------
  {
    id: 'CSAT-01-COMPREHENSION',
    paper: 'CSAT Paper II',
    subject: 'Reading Comprehension',
    topic: 'Comprehension: Unseen passages on environment, economics, philosophy, governance; deriving critical assumptions, central ideas, and logical corollaries',
    difficulty: 'Medium',
    estimatedHours: 2,
    status: 'In Progress',
    standardBooks: [
      "UPSC CSAT Past 10 Years Official Solved Question Papers",
      "The Pearson CSAT Manual (Reading Comprehension)",
      "GKP UPSC CSAT Comprehension"
    ],
    officialSource: "Union Public Service Commission (Official Question Papers)",
    officialUrl: "https://upsc.gov.in/examinations/previous-question-papers"
  },
  {
    id: 'CSAT-02-COMM-SKILLS',
    paper: 'CSAT Paper II',
    subject: 'Interpersonal & Communication',
    topic: 'Interpersonal skills including communication skills in public administration and team decision-making',
    difficulty: 'Medium',
    estimatedHours: 1.5,
    status: 'Pending',
    standardBooks: [
      "Communication Skills in Administration (IIPA Guides)",
      "UPSC CSAT Past Years Papers"
    ],
    officialSource: "DoPT Training Resources",
    officialUrl: "https://dopt.gov.in/"
  },
  {
    id: 'CSAT-03-LOGIC-REASON',
    paper: 'CSAT Paper II',
    subject: 'Logical & Analytical Reasoning',
    topic: 'Logical reasoning and analytical ability: Syllogisms, statement-arguments, statement-assumptions, critical deduction, and seating arrangements',
    difficulty: 'Medium',
    estimatedHours: 2,
    status: 'Pending',
    standardBooks: [
      "Analytical Reasoning (M.K. Pandey)",
      "A Modern Approach to Verbal Reasoning (R.S. Aggarwal)"
    ],
    officialSource: "UPSC Official Examination Portal",
    officialUrl: "https://upsc.gov.in/"
  },
  {
    id: 'CSAT-04-DECISION-MAKING',
    paper: 'CSAT Paper II',
    subject: 'Decision Making',
    topic: 'Decision making and problem solving: Administrative scenarios, disaster response dilemmas, and public grievance resolution',
    difficulty: 'Medium',
    estimatedHours: 1.5,
    status: 'Pending',
    standardBooks: [
      "CSAT Decision Making & Problem Solving (Arihant)",
      "Case Scenarios for Civil Services Aptitude"
    ],
    officialSource: "LBSNAA Training Case Studies",
    officialUrl: "https://www.lbsnaa.gov.in/"
  },
  {
    id: 'CSAT-05-MENTAL-ABILITY',
    paper: 'CSAT Paper II',
    subject: 'General Mental Ability',
    topic: 'General mental ability: Coding-decoding, blood relations, direction sense test, clocks and calendars, cubes and dice, series completion',
    difficulty: 'Medium',
    estimatedHours: 2,
    status: 'Pending',
    standardBooks: [
      "A Modern Approach to Verbal & Non-Verbal Reasoning (R.S. Aggarwal)",
      "UPSC CSAT Past 10 Years Question Papers"
    ],
    officialSource: "Union Public Service Commission",
    officialUrl: "https://upsc.gov.in/examinations/previous-question-papers"
  },
  {
    id: 'CSAT-06-BASIC-NUMERACY',
    paper: 'CSAT Paper II',
    subject: 'Basic Numeracy & DI',
    topic: 'Basic numeracy (numbers and their relations, orders of magnitude, LCM/HCF, percentages, ratio-proportion, permutations & combinations) (Class X level), Data interpretation (charts, graphs, tables, data sufficiency - Class X level)',
    difficulty: 'High',
    estimatedHours: 2.5,
    status: 'In Progress',
    standardBooks: [
      "Quantitative Aptitude for Competitive Examinations (R.S. Aggarwal)",
      "NCERT Mathematics Class 9 and 10",
      "UPSC CSAT Past 10-Year Solved Papers"
    ],
    officialSource: "NCERT Official Textbooks & UPSC",
    officialUrl: "https://ncert.nic.in/"
  }
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
