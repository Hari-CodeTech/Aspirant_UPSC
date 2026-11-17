// UPSC AI Engine Service - Integrates Gemini API & Dynamic Topic Generation
import { getFallbackQuizForSubject } from '../data/upscCuratedQuizBank.js';

const getEnvKey = () => (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_GEMINI_API_KEY) || '';
const getStoredKey = () => (typeof localStorage !== 'undefined' ? localStorage.getItem('upsc_gemini_api_key') : '') || '';

export const aiService = {
  // Get active Gemini API Key
  getApiKey() {
    return getStoredKey() || getEnvKey();
  },

  // Check if API Key exists
  hasValidApiKey() {
    const key = this.getApiKey();
    return Boolean(key && key.trim().length > 10);
  },

  // Save user API Key
  setApiKey(key) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('upsc_gemini_api_key', key.trim());
    }
  },

  // Remove API Key
  removeApiKey() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('upsc_gemini_api_key');
    }
  },

  // Verify Gemini API key by making a live validation call
  async verifyApiKey(key) {
    const cleanKey = (key || '').trim();
    if (!cleanKey) {
      return { success: false, error: 'Please enter a Gemini API key.' };
    }

    try {
      // Test 1: Check models list endpoint (lightweight check)
      const listRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${cleanKey}`
      );

      if (listRes.ok) {
        this.setApiKey(cleanKey);
        return { success: true, message: 'Google Gemini API key verified and connected successfully!' };
      }

      // Test 2: Try a lightweight generation test with gemini-1.5-flash
      const genRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${cleanKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'Respond with OK' }] }]
          })
        }
      );

      if (genRes.ok) {
        this.setApiKey(cleanKey);
        return { success: true, message: 'Google Gemini API key verified and connected successfully!' };
      }

      const errData = await genRes.json().catch(() => null);
      const errMsg = errData?.error?.message || `API Verification failed (HTTP ${genRes.status}: ${genRes.statusText})`;
      return { success: false, error: errMsg };
    } catch (err) {
      return { success: false, error: err.message || 'Network connection failed while verifying API key.' };
    }
  },

  // Interactive UPSC AI Study Assistant Query
  async askUPSCStudyAssistant({ topic, subjectCategory, difficulty = 'Intermediate', userPrompt, conversationHistory = [] }) {
    const apiKey = this.getApiKey();

    if (!apiKey) {
      throw new Error('No Google Gemini API key connected. Please connect your API key to interact with the AI assistant.');
    }

    const systemInstruction = `You are the UPSC CSE Senior Mentor & AI Study Assistant for Aspirant_upsc.
Target: UPSC Civil Services Examination (IAS / IPS / IFS).
Subject Focus: "${subjectCategory || 'General Studies'}"
Current Topic: "${topic}"
Aspirant Difficulty Level: "${difficulty}"

Core Directives for Response:
1. EXTREME FACTUAL RIGOUR: Emphasize constitutional provisions (Articles, Schedules, Amendments), landmark Supreme Court judgments (e.g., Kesavananda, Puttaswamy, Minerva Mills, SR Bommai), statutory acts, official committee reports (Sarkaria, Punchhi, 2nd ARC), and NCERT/standard textbook formulations.
2. STRUCTURED FORMAT:
   - For Concept Explanations: Key Concept Summary -> Constitutional / Factual Basis -> Key Features / Provisions -> Critical Landmark Cases / Data -> Prelims Takeaways.
   - For Mains Questions: Introduction (Definitional or Contemporary Context) -> Multi-dimensional Body (Social, Economic, Political, Environmental, Ethical, International) -> Bottlenecks / Challenges -> Way Forward / Visionary Conclusion.
   - For Prelims MCQs: Multi-statement UPSC format (Statements 1, 2, 3...) with detailed elimination breakdown of why each is correct/incorrect.
3. ADAPT TO DIFFICULTY:
   - Beginner: Emphasize foundational clarity, intuitive analogies, and basic constitutional architecture.
   - Intermediate: Balance standard syllabus core with analytical depth and previous year question linkages.
   - Advanced: High-density legal-constitutional precision, cross-paper linkages (GS1-4), economic indicators, and critique of policies.
4. ZERO FLUFF: Avoid AI filler phrases like "Certainly!", "Here is a detailed answer", or generic generalities. Go directly to high-yield, exam-worthy content.`;

    // Construct request contents
    const contents = [];

    // Append history
    if (Array.isArray(conversationHistory)) {
      conversationHistory.slice(-8).forEach((msg) => {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      });
    }

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: userPrompt }]
    });

    const payload = {
      contents,
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 2500,
      }
    };

    // Try Gemini models in priority order
    const candidateModels = ['gemini-2.5-flash', 'gemini-1.5-flash', 'gemini-2.0-flash'];
    let lastError = null;

    for (const model of candidateModels) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }
        );

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text;
        } else {
          const errData = await response.json().catch(() => null);
          lastError = errData?.error?.message || response.statusText;
        }
      } catch (err) {
        lastError = err.message;
      }
    }

    throw new Error(lastError || 'Failed to generate response from Gemini API.');
  },

  // Generate 10 UPSC Prelims Standard MCQs using Gemini AI
  async generateMCQsForTopic(topicName, paperName, difficulty = 'UPSC Prelims Standard') {
    const apiKey = this.getApiKey();

    if (!apiKey) {
      console.info('No Gemini API key detected, using curated UPSC question bank generator.');
      return this.getCuratedFallbackMCQs(topicName);
    }

    const prompt = `You are a strict UPSC Civil Services Examination (CSE) Senior Paper Setter for Prelims.
Generate exactly 10 high-standard, analytical, multi-statement UPSC Prelims style multiple-choice questions for the following topic:
Topic: "${topicName}"
Paper: "${paperName}"
Difficulty: "${difficulty}"

Strict Requirements:
1. UPSC CSE Pattern: Use statements format (e.g. "Consider the following statements... 1, 2, 3... Which of the statements given above is/are correct?").
2. No trivial or direct trivia questions. Must test conceptual depth, constitutional articles, exceptions, or economic principles.
3. 4 Options for each: A, B, C, D (e.g., "1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3").
4. Clear correct answer index (0 for A, 1 for B, 2 for C, 3 for D).
5. Comprehensive UPSC-standard explanation explaining why each statement is correct or incorrect.

Return ONLY a valid JSON array of 10 question objects matching this exact JSON schema:
[
  {
    "id": "ai-mcq-1",
    "topic": "${topicName}",
    "difficulty": "${difficulty}",
    "question": "Full question text with statements...",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 0,
    "explanation": "Detailed explanation citing constitutional provisions, landmark judgments, or economic concepts..."
  }
]
Do not wrap in markdown quotes or extra conversational text. Return only the raw JSON.`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.3,
              responseMimeType: 'application/json',
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const data = await response.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      const parsed = JSON.parse(rawText);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
      throw new Error('Parsed response was not a valid array');
    } catch (err) {
      console.warn('AI Generation failed, falling back to curated UPSC bank:', err);
      return this.getCuratedFallbackMCQs(topicName);
    }
  },

  // Generate Real-Time Current Affairs using AI based on today's trends
  async generateDailyCurrentAffairs(dateStr = new Date().toISOString().split('T')[0]) {
    const apiKey = this.getApiKey();

    if (!apiKey) {
      return null;
    }

    const prompt = `You are a strict UPSC Civil Services Examination (CSE) Senior Research Editor.
CRITICAL DATA INTEGRITY AND ACCURACY MANDATES:
1. Every headline MUST match an actual, officially published Press Information Bureau (PIB) press release verbatim.
2. Every summary MUST accurately represent the actual government decision, financial outlay, implementing ministry, and statutory provisions. Never exaggerate or hallucinate.
3. Every sourceUrl MUST be an authentic, verifiable link (e.g., https://www.pib.gov.in/PressReleasePage.aspx?PRID=XXXXXXX with the genuine numeric PRID).
4. GS Paper classification must match the actual news topic (GS-1: Culture/Heritage/Geography; GS-2: Polity/Governance/Social Justice; GS-3: Economy/Environment/Sci-Tech/Agriculture).
5. NEVER invent imaginary government schemes or attach mismatched PIB links.

Return strictly a JSON array of verified items with this schema:
[
  {
    "id": "ca-pib-${Date.now()}-1",
    "prid": "Actual 7-digit numeric PIB PRID",
    "title": "Verbatim Official PIB Headline",
    "source": "Press Information Bureau (PIB Delhi)",
    "sourceUrl": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=XXXXXXX",
    "sourceName": "Cabinet / Ministry Name",
    "date": "${dateStr}",
    "gsCategory": "GS Paper II (Polity, Constitution & Governance)",
    "summary": "Factual 2-sentence summary representing the exact decision, outlay, and scope.",
    "prelimsPointers": [
      "Key Factual Pointer 1 from release",
      "Statutory / Constitutional provision 2",
      "Target benchmark 3"
    ],
    "mainsRelevance": "Precise analytical linkage to UPSC Mains syllabus topics."
  }
]`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.4,
              responseMimeType: 'application/json',
            },
          }),
        }
      );

      if (!response.ok) return null;
      const data = await response.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      return JSON.parse(rawText);
    } catch (err) {
      console.warn('Live CA generation fallback:', err);
      return null;
    }
  },

  // Fallback question generator with authentic UPSC-standard questions
  getCuratedFallbackMCQs(topicName) {
    const questions = getFallbackQuizForSubject(topicName);
    if (questions && questions.length > 0) {
      return questions;
    }
    return [
      {
        id: `curated-${Date.now()}-1`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "With reference to the 'Right to Equality' in the Indian Constitution, consider the following statements:\n1. Article 14 applies to both citizens and foreigners.\n2. The concept of 'Equality before Law' means the absence of any special privileges in favour of any person.\n3. The concept of 'Equal Protection of Laws' permits reasonable classification of persons by legislation.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All statements are correct. Article 14 guarantees equality before the law or the equal protection of the laws within the territory of India to both citizens and foreigners (legal persons like corporations too). Equality before law is negative British concept (no special privileges). Equal protection of laws is positive American concept (equal laws for equals, permitting reasonable classification)."
      },
      {
        id: `curated-${Date.now()}-2`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "Which of the following Fundamental Rights is/are available ONLY to citizens of India and not to foreigners?\n1. Article 15 (Prohibition of discrimination)\n2. Article 19 (Six democratic freedoms)\n3. Article 20 (Protection against conviction for offences)\n4. Article 21 (Protection of life and personal liberty)\nSelect the correct answer using the code given below:",
        options: ["1 and 2 only", "2, 3 and 4 only", "1, 2 and 4 only", "1, 3 and 4 only"],
        correctAnswer: 0,
        explanation: "Articles 15, 16, 19, 29, and 30 are available ONLY to Indian citizens. Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28 are available to both citizens and foreigners (except enemy aliens)."
      },
      {
        id: `curated-${Date.now()}-3`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "Consider the following statements regarding Article 21 of the Indian Constitution:\n1. In A.K. Gopalan case (1950), the Supreme Court took a narrow interpretation of Article 21.\n2. In Maneka Gandhi case (1978), the Supreme Court held that the procedure established by law must be just, fair and reasonable.\n3. The Right to Clean Environment and the Right to Privacy are recognized as Fundamental Rights under Article 21.\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All three statements are correct. In Gopalan case (1950), protection was limited to arbitrary executive action only. In Maneka Gandhi case (1978), the Court introduced the American concept of 'Due Process of Law' ensuring the procedure must be just, fair and reasonable. Subhana cases and Puttaswamy (2017) explicitly recognized Privacy and Clean Environment under Article 21."
      },
      {
        id: `curated-${Date.now()}-4`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "With reference to the writ jurisdiction of the Supreme Court and High Courts under Article 32 and Article 226, consider the following:\n1. The Supreme Court cannot refuse to exercise its writ jurisdiction under Article 32.\n2. The writ jurisdiction of High Courts under Article 226 is wider than that of the Supreme Court.\n3. The writ of Quo-Warranto can be sought by any interested person, even if not an aggrieved party.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All three statements are correct. Article 32 is itself a Fundamental Right, so the Supreme Court cannot refuse to grant remedy. Article 226 is discretionary and covers both Fundamental Rights and other legal rights, making High Court jurisdiction wider. Quo-Warranto does not require locus standi—any citizen can petition against illegal usurpation of public office."
      },
      {
        id: `curated-${Date.now()}-5`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "Under Article 19(2) of the Indian Constitution, reasonable restrictions on the Freedom of Speech and Expression can be imposed on which of the following grounds?\n1. Sovereignty and integrity of India\n2. Public order\n3. Friendly relations with foreign States\n4. Public interest\nSelect the correct answer using the code given below:",
        options: ["1, 2 and 3 only", "2, 3 and 4 only", "1, 2 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 0,
        explanation: "'Public interest' is NOT a ground for restriction under Article 19(2) for speech and expression (it is a ground under 19(6) for trade/profession). The 8 grounds under 19(2) are: Sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation, and incitement to an offence."
      },
      {
        id: `curated-${Date.now()}-6`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "With reference to Article 20 of the Indian Constitution (Protection in respect of conviction for offences), consider the following:\n1. Ex-post facto law prohibition applies to both criminal and civil laws.\n2. Double jeopardy immunity applies only to proceedings before a court of law or judicial tribunal.\n3. The protection against self-incrimination extends to both oral and compulsory production of material objects.\nWhich of the statements given above is/are correct?",
        options: ["2 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Statement 2 is correct. Statement 1 is incorrect because ex-post facto protection applies ONLY to criminal laws, not civil laws or tax laws. Statement 3 is incorrect because protection against self-incrimination extends only to oral testimony and written statements, NOT compulsory thumb impressions, specimen signatures, or blood tests (Kathi Kalu Oghad case)."
      },
      {
        id: `curated-${Date.now()}-7`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "Consider the following statements regarding the Right to Education under Article 21A:\n1. It was inserted by the 86th Constitutional Amendment Act, 2002.\n2. It makes free and compulsory education a Fundamental Right for all children between 6 and 14 years of age.\n3. It requires the State to provide free education for children below the age of 6 years.\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect because education for children below 6 years is placed under Article 45 (Directive Principles of State Policy), not under Article 21A."
      },
      {
        id: `curated-${Date.now()}-8`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "Which of the following constitutional provisions guarantees protection against arrest and detention in certain cases?\n1. Article 22(1) confers the right to be informed of the grounds of arrest.\n2. The rights under Article 22 clauses (1) and (2) are not available to preventive detention detainees.\n3. Preventive detention cannot exceed 3 months unless an Advisory Board reports sufficient cause.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All three statements are correct under Article 22 of the Constitution. Persons detained under preventive detention laws do not enjoy standard punitive arrest safeguards under 22(1) and 22(2), but are protected by Article 22(4)-(7) requiring an Advisory Board for detentions beyond 3 months."
      },
      {
        id: `curated-${Date.now()}-9`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "Consider the following statements about the Right to Freedom of Religion (Articles 25-28):\n1. Article 25 protects individual religious freedom, whereas Article 26 protects collective religious denomination rights.\n2. The rights under Article 25 are subject to public order, morality, and health.\n3. State-aided educational institutions can impart compulsory religious instruction with parent's consent.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect: in institutions wholly maintained out of State funds, religious instruction is completely prohibited (Article 28(1)). In State-recognized or aided institutions, no person can be compelled without consent (Article 28(3)), but it cannot be made compulsory."
      },
      {
        id: `curated-${Date.now()}-10`,
        topic: topicName || 'Fundamental Rights',
        difficulty: 'UPSC Standard',
        question: "According to Dr. B.R. Ambedkar, which Article was described as the 'Heart and Soul of the Constitution' without which the Constitution would be a nullity?",
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        correctAnswer: 3,
        explanation: "Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the very soul of the Constitution and the very heart of it, because a declaration of fundamental rights is meaningless without an effective machinery for their enforcement."
      }
    ];
  }
};
