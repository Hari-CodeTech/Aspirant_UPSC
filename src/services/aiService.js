// UPSC AI Engine Service - Integrates Gemini API & Dynamic Topic Generation
import { getFallbackQuizForSubject } from '../data/upscCuratedQuizBank.js';
import { VERIFIED_PIB_CURRENT_AFFAIRS } from '../data/pibCurrentAffairsData.js';

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

  // Return 100% Fact-Checked PIB Current Affairs Dossier (Zero Hallucinated PRIDs)
  async generateDailyCurrentAffairs() {
    return VERIFIED_PIB_CURRENT_AFFAIRS;
  },

  // Fallback question generator with authentic UPSC-standard questions
  getCuratedFallbackMCQs(topicName) {
    return getFallbackQuizForSubject(topicName);
  }
};
