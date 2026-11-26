import React, { useState, useEffect, useRef } from 'react';
import { aiService } from '../services/aiService';
import { 
  UPSC_SUBJECT_CATEGORIES, 
  UPSC_TOPIC_SUGGESTIONS, 
  UPSC_SUBJECT_CARDS 
} from '../data/upscStudyTopicsData';
import {
  Key,
  Eye,
  EyeOff,
  ExternalLink,
  ShieldCheck,
  Search,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Globe,
  TrendingUp,
  Trees,
  Cpu,
  Calculator,
  FileText,
  Users,
  GraduationCap,
  Landmark,
  Send,
  RotateCcw,
  HelpCircle,
  Compass,
  Brain,
  Copy,
  Check,
  ArrowLeft,
  Settings,
  LayoutGrid,
  Clock,
  Lightbulb,
  FileDown,
  Download,
  Loader2,
  X,
  Award,
  ChevronRight,
  ChevronLeft,
  Trash2
} from 'lucide-react';

// Icon Map for dynamic rendering
const ICON_MAP = {
  Landmark,
  BookOpen,
  Globe,
  TrendingUp,
  Trees,
  ShieldCheck,
  Compass,
  Cpu,
  Calculator,
  FileText,
  Users,
  GraduationCap
};

export default function UPSCStudyAssistant({ onBackToDashboard }) {
  // Key & View States: 'connect' | 'catalog' | 'quiz' | 'study'
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [hasKey, setHasKey] = useState(aiService.hasValidApiKey());
  const [activeScreen, setActiveScreen] = useState(aiService.hasValidApiKey() ? 'catalog' : 'connect');
  
  // Connect Key UI States
  const [showKeyText, setShowKeyText] = useState(false);
  const [showHowToGet, setShowHowToGet] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState('');
  const [verifySuccess, setVerifySuccess] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteNotice, setDeleteNotice] = useState('');

  // Catalog Exploration States
  const [difficulty, setDifficulty] = useState('Intermediate'); // 'Beginner' | 'Intermediate' | 'Advanced'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // AI Quiz Engine States (Matching Images 1 & 2)
  const [activeSubject, setActiveSubject] = useState(null);
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qIdx]: { selected: number, isCorrect: boolean } }
  const [showHint, setShowHint] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [isCopiedMd, setIsCopiedMd] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // Interactive Study / Mentor Chat States
  const [activeTopic, setActiveTopic] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [userQuery, setUserQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const chatBottomRef = useRef(null);

  // Initialize key input if one exists
  useEffect(() => {
    const existingKey = aiService.getApiKey();
    if (existingKey) {
      setApiKeyInput(existingKey);
      setHasKey(true);
    }
  }, []);

  // Live Timer for Quiz
  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // Format MM:SS
  const formatTimer = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (activeScreen === 'study') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isGenerating, activeScreen]);

  // Handle Verify & Save Key
  const handleVerifyKey = async (e) => {
    e?.preventDefault();
    setVerifyError('');
    setVerifySuccess(false);

    if (!apiKeyInput.trim()) {
      setVerifyError('Please enter a valid Google Gemini API key.');
      return;
    }

    setIsVerifying(true);
    const result = await aiService.verifyApiKey(apiKeyInput);
    setIsVerifying(false);

    if (result.success) {
      setHasKey(true);
      setVerifySuccess(true);
      setTimeout(() => {
        setVerifySuccess(false);
        setActiveScreen('catalog');
      }, 700);
    } else {
      setVerifyError(result.error || 'Failed to verify key. Please verify your key in Google AI Studio.');
    }
  };

  // Handle Delete API Key with Confirmation
  const handleConfirmDeleteKey = () => {
    aiService.removeApiKey();
    setApiKeyInput('');
    setHasKey(false);
    setShowDeleteConfirm(false);
    setVerifySuccess(false);
    setVerifyError('');
    setDeleteNotice('Saved Gemini API key has been removed from your browser.');
    setTimeout(() => {
      setDeleteNotice('');
    }, 4500);
  };

  // Launch AI Quiz for Selected Subject (Core Feature Requested by User)
  const handleStartSubjectQuiz = async (subjectObj) => {
    const subjData = typeof subjectObj === 'string'
      ? { title: subjectObj, category: 'General Studies', badge: 'UPSC PRELIMS' }
      : subjectObj;

    setActiveSubject(subjData);
    setActiveScreen('quiz');
    setIsQuizLoading(true);
    setQuizQuestions([]);
    setCurrentQIdx(0);
    setUserAnswers({});
    setShowHint(false);
    setElapsedSeconds(0);
    setTimerActive(true);
    setShowScoreModal(false);

    try {
      // Call AI to generate 10 tailored UPSC MCQs
      const questions = await aiService.generateMCQsForTopic(
        subjData.title,
        subjData.category || 'General Studies',
        difficulty
      );

      // Add a slight minimum buffer (400ms) to show the sleek loading state as in Screenshot 1
      setTimeout(() => {
        setQuizQuestions(questions || []);
        setIsQuizLoading(false);
      }, 500);
    } catch (err) {
      console.warn('AI Quiz generation error, loading curated bank:', err);
      const fallback = aiService.getCuratedFallbackMCQs(subjData.title);
      setQuizQuestions(fallback);
      setIsQuizLoading(false);
    }
  };

  // Handle Answer Selection
  const handleSelectOption = (optIdx) => {
    if (userAnswers[currentQIdx] !== undefined) {
      // Already answered
      return;
    }

    const curQ = quizQuestions[currentQIdx];
    if (!curQ) return;

    const isCorrect = optIdx === curQ.correctAnswer;
    setUserAnswers((prev) => {
      const updated = {
        ...prev,
        [currentQIdx]: {
          selected: optIdx,
          isCorrect
        }
      };

      // Check if all 10 are answered
      if (Object.keys(updated).length === quizQuestions.length && quizQuestions.length > 0) {
        setTimerActive(false);
        setTimeout(() => setShowScoreModal(true), 900);
      }

      return updated;
    });
  };

  // Copy Markdown of the Quiz
  const handleCopyMarkdown = () => {
    if (!quizQuestions.length) return;
    
    let md = `# UPSC CSE AI Quiz: ${activeSubject?.title || 'General Studies'}\n`;
    md += `**Difficulty Level:** ${difficulty} | **Date:** ${new Date().toLocaleDateString()}\n\n`;

    quizQuestions.forEach((q, idx) => {
      md += `### Q${idx + 1}. ${q.question}\n\n`;
      q.options.forEach((opt, oIdx) => {
        const letter = ['A', 'B', 'C', 'D'][oIdx];
        const isAnswer = oIdx === q.correctAnswer ? ' *(Correct Answer)*' : '';
        md += `- **(${letter})** ${opt}${isAnswer}\n`;
      });
      md += `\n**Constitutional & Analytical Reasoning:**\n${q.explanation}\n\n---\n\n`;
    });

    navigator.clipboard.writeText(md);
    setIsCopiedMd(true);
    setTimeout(() => setIsCopiedMd(false), 2000);
  };

  // Download printable PDF/Paper
  const handleDownloadPDF = () => {
    window.print();
  };

  // Calculate score
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.values(userAnswers).filter((a) => a.isCorrect).length;
  const incorrectCount = answeredCount - correctCount;
  const netScore = Math.max(0, correctCount * 2 - incorrectCount * 0.66).toFixed(2);
  const currentQ = quizQuestions[currentQIdx];

  // Send message to Gemini in Mentor Chat mode
  const handleSendMessage = async (textToSend) => {
    const prompt = (textToSend || userQuery).trim();
    if (!prompt || isGenerating) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setUserQuery('');
    setIsGenerating(true);

    try {
      const responseText = await aiService.askUPSCStudyAssistant({
        topic: activeTopic?.title || 'UPSC Syllabus',
        subjectCategory: activeTopic?.category || 'General Studies',
        difficulty,
        userPrompt: prompt,
        conversationHistory: chatMessages
      });

      const aiMsg = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        text: `⚠️ **API Error:** ${err.message || 'Unable to fetch response from Gemini.'}\n\nPlease check your internet connection or verify your API key in settings.`,
        isError: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsGenerating(false);
    }
  };

  // Switch to Mentor Chat with current question context
  const handleAskMentorAboutQuestion = () => {
    if (!currentQ) return;
    setActiveTopic(activeSubject);
    setActiveScreen('study');
    setChatMessages([
      {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        text: `### 🏛️ UPSC Mentor Doubt Clearance: ${activeSubject?.title}\n\n**Discussing Question ${currentQIdx + 1}:**\n> ${currentQ.question}\n\n**Correct Answer:** Option ${['A', 'B', 'C', 'D'][currentQ.correctAnswer]}: *${currentQ.options[currentQ.correctAnswer]}*\n\n**Official Explanation:**\n${currentQ.explanation}\n\nWhat specific doubt or conceptual dilemma do you have regarding this question, Aspirant?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Filter Subject Cards
  const filteredCards = UPSC_SUBJECT_CARDS.filter((card) => {
    const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
    const matchesSearch = !searchQuery.trim() || 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.popularTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // =========================================================================
  // SCREEN 1: CONNECT GOOGLE GEMINI API KEY (Screenshots 1 & 2)
  // =========================================================================
  if (activeScreen === 'connect') {
    return (
      <div className="gemini-module-container">
        {/* Browser Alert/Confirm Popup matching user screenshot */}
        {showDeleteConfirm && (
          <div className="browser-popup-backdrop" onClick={() => setShowDeleteConfirm(false)}>
            <div className="browser-popup-card" onClick={(e) => e.stopPropagation()}>
              <div className="browser-popup-header">
                <span className="browser-domain-title">jobvastadhi.vercel.app says</span>
              </div>
              <p className="browser-popup-message">Remove saved Gemini API key from your browser?</p>
              <div className="browser-popup-actions">
                <button
                  type="button"
                  className="btn-browser-popup-ok"
                  onClick={handleConfirmDeleteKey}
                  autoFocus
                >
                  OK
                </button>
                <button
                  type="button"
                  className="btn-browser-popup-cancel"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="gemini-connect-card">
          <div className="gemini-card-header">
            <div className="gemini-key-icon-box">
              <Key size={22} className="text-amber-400" />
            </div>
            <div className="gemini-header-text">
              <h2>{hasKey ? 'API Key Settings' : 'Connect Google Gemini API Key'}</h2>
              <p>jobVastadhi runs 100% in your browser • Free • Direct from Google AI Studio</p>
            </div>
            {hasKey && (
              <button
                type="button"
                className="btn-close-connect-modal"
                onClick={() => setActiveScreen('catalog')}
                title="Close settings"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <form onSubmit={handleVerifyKey} className="gemini-key-form">
            <div className="gemini-input-group">
              <div className="gemini-label-row">
                <label htmlFor="geminiApiKey">Paste your API Key</label>
                <button
                  type="button"
                  className="btn-toggle-instructions"
                  onClick={() => setShowHowToGet(!showHowToGet)}
                >
                  <HelpCircle size={14} />
                  <span>How to get a key?</span>
                  {showHowToGet ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>

              <div className="gemini-input-wrapper">
                <input
                  id="geminiApiKey"
                  type={showKeyText ? 'text' : 'password'}
                  placeholder="AIzaSy..."
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  className="gemini-api-input"
                  autoComplete="off"
                  spellCheck="false"
                />
                <button
                  type="button"
                  className="btn-toggle-eye"
                  onClick={() => setShowKeyText(!showKeyText)}
                  title={showKeyText ? 'Hide API Key' : 'Show API Key'}
                >
                  {showKeyText ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {verifyError && (
              <div className="gemini-error-banner">
                <AlertCircle size={16} />
                <span>{verifyError}</span>
              </div>
            )}

            {verifySuccess && (
              <div className="gemini-success-banner">
                <CheckCircle2 size={16} />
                <span>Key verified successfully! Redirecting to UPSC Subjects...</span>
              </div>
            )}

            {deleteNotice && (
              <div className="gemini-success-banner">
                <CheckCircle2 size={16} />
                <span>{deleteNotice}</span>
              </div>
            )}

            {showHowToGet && (
              <div className="gemini-guide-box">
                <div className="guide-header">
                  <div className="guide-title">
                    <span className="guide-info-badge">ℹ</span>
                    <strong>How to get your free key (3 easy steps):</strong>
                  </div>
                  <span className="badge-free-green">100% Free</span>
                </div>

                <ol className="guide-steps-list">
                  <li>
                    Open{' '}
                    <a
                      href="https://aistudio.google.com/app/apikey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-highlight"
                    >
                      Google AI Studio <ExternalLink size={12} className="inline-icon" />
                    </a>{' '}
                    and sign in with your regular Google account.
                  </li>
                  <li>
                    Click the blue <strong>"Create API key"</strong> button (select any project or "Create key in new project").
                  </li>
                  <li>
                    Copy the generated key (starts with <code className="code-pill">AIzaSy...</code>) and paste it into the box above.
                  </li>
                </ol>

                <div className="guide-footer-badges">
                  <span>💳 No credit card needed</span>
                  <span>⚡ Instant activation</span>
                </div>
              </div>
            )}

            <div className="gemini-security-notice">
              <ShieldCheck size={20} className="icon-emerald-shield" />
              <p>
                Your key is saved only in your browser's <code className="code-pill">localStorage</code>. It is sent directly to Google's official endpoint and never stored on any server.
              </p>
            </div>

            <div className="gemini-actions-row">
              <div className="gemini-primary-actions-flex">
                <button
                  type="submit"
                  disabled={isVerifying || !apiKeyInput.trim()}
                  className="btn-save-verify-key"
                >
                  {isVerifying ? (
                    <>
                      <span className="btn-spinner" />
                      <span>Verifying with Google Gemini API...</span>
                    </>
                  ) : (
                    <span>Save and verify key</span>
                  )}
                </button>

                {(hasKey || apiKeyInput.trim()) && (
                  <div className="delete-key-wrapper">
                    <button
                      type="button"
                      className="btn-delete-gemini-key"
                      onClick={() => setShowDeleteConfirm(true)}
                      title="Remove saved key"
                      aria-label="Remove saved key"
                    >
                      <Trash2 size={18} />
                    </button>
                    <span className="delete-key-tooltip">Remove saved key</span>
                  </div>
                )}
              </div>

              {hasKey && (
                <button
                  type="button"
                  className="btn-cancel-to-catalog"
                  onClick={() => setActiveScreen('catalog')}
                >
                  Cancel & Return to Subjects
                </button>
              )}
            </div>

            <div className="gemini-footer-studio-row">
              <span>Get your key from Google AI Studio:</span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-studio"
              >
                <span>Open Google AI Studio</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SCREEN 2: UPSC SUBJECT SELECTION & TOPIC CATALOG (Screenshot 3)
  // =========================================================================
  if (activeScreen === 'catalog') {
    return (
      <div className="upsc-assistant-catalog-view">
        {/* Top Control Bar: Difficulty & Key Status */}
        <div className="catalog-top-controller">
          <div className="catalog-branding">
            <GraduationCap size={20} className="text-blue-500" />
            <h3>UPSC Study Assistant</h3>
          </div>

          <div className="difficulty-segmented-box">
            <span className="diff-label">Difficulty:</span>
            <div className="diff-pills-group">
              {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  className={`diff-pill-btn ${difficulty === lvl ? 'diff-pill-active' : ''}`}
                  onClick={() => setDifficulty(lvl)}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-top-right">
            <button
              type="button"
              className={`btn-key-status-pill ${!hasKey ? 'btn-key-disconnected' : ''}`}
              onClick={() => setActiveScreen('connect')}
              title={hasKey ? "API Key connected (click to manage or delete)" : "Click to connect Gemini API Key"}
            >
              <Key size={13} />
              <span>{hasKey ? 'Gemini Connected ✅' : 'Connect Gemini Key ⚡'}</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Custom Topic Starter */}
        <div className="catalog-search-section">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                handleStartSubjectQuiz({
                  title: searchQuery.trim(),
                  category: selectedCategory === 'All' ? 'General Studies' : selectedCategory,
                  badge: 'CUSTOM TOPIC',
                  description: 'Aspirant Custom Inquiry'
                });
              }
            }}
            className="search-input-pill-box"
          >
            <Search size={18} className="search-icon-left" />
            <input
              type="text"
              placeholder="Type any custom topic (e.g. Directive Principles, Fiscal Deficit, Indus Valley)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="custom-topic-search-input"
            />
            <button
              type="submit"
              disabled={!searchQuery.trim()}
              className="btn-start-custom-topic"
            >
              <span>Start</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Suggestions Row */}
          <div className="suggestions-pill-row">
            <span className="suggestions-title">Suggestions:</span>
            <div className="suggestions-scroll">
              {UPSC_TOPIC_SUGGESTIONS.map((topicStr, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  className="suggestion-tag-pill"
                  onClick={() => {
                    setSearchQuery(topicStr);
                    handleStartSubjectQuiz({
                      title: topicStr,
                      category: 'General Studies',
                      badge: 'UPSC PRELIMS',
                      description: 'High-Yield UPSC Prelims & Mains Theme'
                    });
                  }}
                >
                  {topicStr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="categories-filter-strip">
          {UPSC_SUBJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-tab-btn ${selectedCategory === cat ? 'cat-tab-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* UPSC Subjects Cards Grid */}
        <div className="upsc-subjects-grid">
          {filteredCards.map((card) => {
            const IconComponent = ICON_MAP[card.iconName] || BookOpen;

            return (
              <div
                key={card.id}
                className="upsc-subject-card"
                onClick={() => handleStartSubjectQuiz(card)}
              >
                <div className="subj-card-top-row">
                  <div className="subj-icon-squircle">
                    <IconComponent size={20} />
                  </div>
                  <span className="subj-badge-tag">{card.badge}</span>
                </div>

                <h4 className="subj-card-title">{card.title}</h4>
                <p className="subj-card-desc">{card.description}</p>

                <div className="subj-card-footer">
                  <span className="start-prompt-txt">
                    🎯 Take AI Quiz (10 MCQs) <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // SCREEN 3: UPSC AI QUIZ ENGINE (Matches Uploaded Images 1 & 2)
  // =========================================================================
  if (activeScreen === 'quiz') {
    return (
      <div className="upsc-quiz-engine-view">
        {/* Main Left Section: Question Card or Loading Skeletons */}
        <div className="quiz-main-card">
          {isQuizLoading ? (
            /* ================= LOADING SKELETON STATE (Image 1) ================= */
            <div className="quiz-loading-container">
              <div className="quiz-top-status-bar">
                <span className="quiz-loading-tag">
                  <span className="quiz-spinner-blue" />
                  <span>LOADING...</span>
                </span>
                <div className="q-badge-box">
                  <span className="q-badge-label">QUESTION NO.</span>
                  <span className="q-num-pill">01</span>
                </div>
              </div>

              <div className="loading-subtitle-row">
                <span className="loading-sub-text">Preparing questions for instant practice...</span>
                <span className="loading-topic-pill">{activeSubject?.badge || activeSubject?.title}</span>
              </div>

              {/* Skeleton Question and 4 Options */}
              <div className="skeleton-question-block">
                <div className="skeleton-q-title">
                  <span className="q-num-bold">Q1.</span>
                  <div className="skeleton-bar bar-long shimmer" />
                </div>
                <div className="skeleton-bar bar-medium shimmer" />

                <div className="skeleton-options-stack">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="skeleton-option-card shimmer">
                      <div className="skeleton-opt-square" />
                      <div className="skeleton-bar bar-opt" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="quiz-cancel-row">
                <button
                  type="button"
                  className="btn-cancel-return-topics"
                  onClick={() => {
                    setTimerActive(false);
                    setActiveScreen('catalog');
                  }}
                >
                  ← Cancel and return to topics
                </button>
              </div>
            </div>
          ) : (
            /* ================= ACTIVE QUIZ STATE (Image 2) ================= */
            <div className="quiz-active-container">
              {/* Top Control Bar */}
              <div className="quiz-question-top-bar">
                <div className="bar-left-tags">
                  <span className="pill-diff-active">{difficulty.toUpperCase()}</span>
                  <span className="pill-type-active">SINGLE CHOICE</span>
                  <button
                    type="button"
                    className={`btn-hint-pill ${showHint ? 'btn-hint-open' : ''}`}
                    onClick={() => setShowHint(!showHint)}
                  >
                    <Lightbulb size={13} />
                    <span>Hint</span>
                  </button>
                  <span className="pill-marks-active">+2.00 / -0.66</span>
                </div>

                <div className="q-badge-box">
                  <span className="q-badge-label">QUESTION NO.</span>
                  <span className="q-num-pill">{String(currentQIdx + 1).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Hint Box (when toggled) */}
              {showHint && currentQ?.hint && (
                <div className="quiz-hint-drawer">
                  <Lightbulb size={16} className="text-amber-400 flex-shrink-0" />
                  <div>
                    <strong>Exam Hint:</strong> {currentQ.hint}
                  </div>
                </div>
              )}

              {/* Question Text */}
              <div className="active-question-content">
                <h3 className="active-q-text">
                  <span className="q-prefix">Q{currentQIdx + 1}.</span> {currentQ?.question}
                </h3>
              </div>

              {/* 4 Option Cards (A, B, C, D) */}
              <div className="quiz-options-grid">
                {currentQ?.options?.map((optionText, oIdx) => {
                  const letter = ['A', 'B', 'C', 'D'][oIdx];
                  const userAns = userAnswers[currentQIdx];
                  const isAnswered = userAns !== undefined;
                  const isSelected = isAnswered && userAns.selected === oIdx;
                  const isCorrectAnswer = isAnswered && oIdx === currentQ.correctAnswer;

                  let optCardClass = 'option-choice-card';
                  if (isAnswered) {
                    if (isSelected && userAns.isCorrect) {
                      optCardClass += ' opt-card-correct';
                    } else if (isSelected && !userAns.isCorrect) {
                      optCardClass += ' opt-card-wrong';
                    } else if (isCorrectAnswer) {
                      optCardClass += ' opt-card-highlight-correct';
                    } else {
                      optCardClass += ' opt-card-dimmed';
                    }
                  }

                  return (
                    <div
                      key={oIdx}
                      className={optCardClass}
                      onClick={() => handleSelectOption(oIdx)}
                    >
                      <div className="opt-letter-tag">{letter}</div>
                      <div className="opt-text-col">
                        <span>{optionText}</span>
                      </div>
                      <div className="opt-index-hint">[{oIdx + 1}]</div>
                    </div>
                  );
                })}
              </div>

              {/* Constitutional Reasoning / Explanation Drawer (shows after answering) */}
              {userAnswers[currentQIdx] !== undefined && (
                <div className="quiz-explanation-drawer">
                  <div className="explanation-drawer-header">
                    <div className="exp-title-row">
                      {userAnswers[currentQIdx].isCorrect ? (
                        <span className="verdict-tag verdict-pass">
                          <CheckCircle2 size={16} /> Correct (+2.00 Marks)
                        </span>
                      ) : (
                        <span className="verdict-tag verdict-fail">
                          <AlertCircle size={16} /> Incorrect (-0.66 Deduction)
                        </span>
                      )}
                      <h4>🏛️ Constitutional Analysis & UPSC Exam Reasoning:</h4>
                    </div>

                    <button
                      type="button"
                      className="btn-ask-mentor-link"
                      onClick={handleAskMentorAboutQuestion}
                      title="Ask AI mentor follow-up question on this topic"
                    >
                      <Brain size={14} />
                      <span>Ask AI Mentor</span>
                    </button>
                  </div>

                  <p className="explanation-text">{currentQ?.explanation}</p>
                </div>
              )}

              {/* Bottom Navigation Strip */}
              <div className="quiz-bottom-nav-bar">
                <button
                  type="button"
                  className="btn-cancel-return-topics"
                  onClick={() => {
                    setTimerActive(false);
                    setActiveScreen('catalog');
                  }}
                >
                  ← Cancel and return to topics
                </button>

                <div className="nav-buttons-right">
                  <button
                    type="button"
                    disabled={currentQIdx === 0}
                    onClick={() => {
                      setShowHint(false);
                      setCurrentQIdx((prev) => Math.max(0, prev - 1));
                    }}
                    className="btn-q-nav"
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  {currentQIdx < quizQuestions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setShowHint(false);
                        setCurrentQIdx((prev) => prev + 1);
                      }}
                      className="btn-q-nav btn-q-next"
                    >
                      <span>Next Question</span>
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowScoreModal(true)}
                      className="btn-q-nav btn-q-finish"
                    >
                      <Award size={16} />
                      <span>Review Score</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Section: QUESTION PALETTE (Matches Images 1 & 2) */}
        <aside className="quiz-palette-sidebar">
          {/* Header */}
          <div className="palette-header-row">
            <div className="palette-title-group">
              <div className="palette-icon-box">
                <LayoutGrid size={16} />
              </div>
              <div className="palette-title-text">
                <h3>QUESTION PALETTE</h3>
                <span>{activeSubject?.title} • {difficulty.toLowerCase()}</span>
              </div>
            </div>

            <div className="palette-timer-box">
              <Clock size={14} />
              <span>{formatTimer(elapsedSeconds)}</span>
            </div>
          </div>

          {/* Position & Status Sub-Card */}
          <div className="palette-status-card">
            <div className="pos-line-row">
              <span className="pos-label">
                Position: <strong>Q. {String(currentQIdx + 1).padStart(2, '0')}</strong> / 10
              </span>
              <span className="status-indicator-tag">
                <span className={`status-dot ${isQuizLoading ? 'dot-pulsing' : 'dot-active'}`} />
                <span>{isQuizLoading ? 'Loading question' : (userAnswers[currentQIdx] ? 'Answered' : 'Active question')}</span>
              </span>
            </div>

            <div className="stats-metric-row">
              <div className="metric-item">
                <span className="metric-lbl">Answered:</span>
                <strong className="metric-val val-green">{answeredCount}</strong>
              </div>
              <div className="metric-item">
                <span className="metric-lbl">Ready:</span>
                <strong className="metric-val">{quizQuestions.length}</strong>
              </div>
              <div className="metric-item">
                <span className="metric-lbl">Loading:</span>
                <strong className="metric-val">{isQuizLoading ? 10 : 0}</strong>
              </div>
            </div>
          </div>

          {/* 10-Question Number Buttons Grid */}
          <div className="palette-numbers-grid">
            {Array.from({ length: 10 }).map((_, qIdx) => {
              const qNumStr = String(qIdx + 1).padStart(2, '0');
              const isCurrent = currentQIdx === qIdx && !isQuizLoading;
              const ansRecord = userAnswers[qIdx];
              const isAnswered = ansRecord !== undefined;

              let btnClass = 'palette-q-btn';
              if (isQuizLoading) {
                btnClass += ' q-btn-skeleton';
              } else if (isCurrent) {
                btnClass += ' q-btn-current';
              } else if (isAnswered && ansRecord.isCorrect) {
                btnClass += ' q-btn-correct';
              } else if (isAnswered && !ansRecord.isCorrect) {
                btnClass += ' q-btn-incorrect';
              } else {
                btnClass += ' q-btn-unanswered';
              }

              return (
                <button
                  key={qIdx}
                  type="button"
                  disabled={isQuizLoading || qIdx >= quizQuestions.length}
                  className={btnClass}
                  onClick={() => {
                    setShowHint(false);
                    setCurrentQIdx(qIdx);
                  }}
                  title={`Jump to Question ${qIdx + 1}`}
                >
                  {isAnswered && ansRecord.isCorrect && '✓ '}
                  {isAnswered && !ansRecord.isCorrect && '✕ '}
                  {qNumStr}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="palette-legend-strip">
            <div className="legend-item">
              <span className="legend-square sq-current" />
              <span>Current</span>
            </div>
            <div className="legend-item">
              <span className="legend-square sq-skeleton" />
              <span>Buffering (Skeleton)</span>
            </div>
            <div className="legend-item">
              <span className="legend-square sq-correct" />
              <span>Correct</span>
            </div>
            <div className="legend-item">
              <span className="legend-square sq-incorrect" />
              <span>Incorrect</span>
            </div>
          </div>

          {/* Action Row & Exports */}
          <div className="palette-bottom-actions">
            <div className="answered-summary-line">
              <span>Answered Questions: <strong>{answeredCount} of 10</strong></span>
              <span className="save-ready-tag">Ready to Save</span>
            </div>

            <div className="palette-export-buttons">
              <button
                type="button"
                className="btn-palette-action"
                onClick={handleDownloadPDF}
                title="Print / Save Question Paper as PDF"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </button>

              <button
                type="button"
                className="btn-palette-action"
                onClick={handleCopyMarkdown}
                title="Copy full questions and explanations in Markdown format"
              >
                {isCopiedMd ? <Check size={14} className="text-emerald-400" /> : <FileText size={14} />}
                <span>{isCopiedMd ? 'Copied!' : 'Markdown'}</span>
              </button>
            </div>

            <span className="palette-helper-txt">Click any answered number to review</span>
          </div>
        </aside>

        {/* Score Evaluation Modal */}
        {showScoreModal && (
          <div className="score-modal-backdrop" onClick={() => setShowScoreModal(false)}>
            <div className="score-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-top-bar">
                <div className="score-modal-icon">
                  <Award size={28} className="text-amber-400" />
                </div>
                <button
                  type="button"
                  className="btn-close-modal"
                  onClick={() => setShowScoreModal(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <h3>UPSC AI Prelims Diagnostic Report</h3>
              <p className="score-sub-title">Subject: {activeSubject?.title} ({difficulty})</p>

              <div className="score-stats-grid">
                <div className="score-stat-box stat-correct">
                  <span className="stat-big-val">{correctCount}</span>
                  <span className="stat-sub-label">Correct (+{correctCount * 2} M)</span>
                </div>
                <div className="score-stat-box stat-wrong">
                  <span className="stat-big-val">{incorrectCount}</span>
                  <span className="stat-sub-label">Incorrect (-{(incorrectCount * 0.66).toFixed(2)} M)</span>
                </div>
                <div className="score-stat-box stat-total">
                  <span className="stat-big-val">{netScore}</span>
                  <span className="stat-sub-label">Net Score / 20.00</span>
                </div>
              </div>

              <div className="mastery-verdict-box">
                {correctCount >= 9 ? (
                  <div className="verdict-passed">
                    <strong>🏆 9/10 Mastery Gate Cleared!</strong>
                    <p>Outstanding conceptual command on {activeSubject?.title}. You have demonstrated top-tier Prelims elimination capability.</p>
                  </div>
                ) : (
                  <div className="verdict-review">
                    <strong>📈 Progress Recorded ({correctCount}/10)</strong>
                    <p>Review the constitutional analysis for your incorrect questions using the question palette, or ask the AI mentor for clarification.</p>
                  </div>
                )}
              </div>

              <div className="score-modal-buttons">
                <button
                  type="button"
                  className="btn-modal-retake"
                  onClick={() => handleStartSubjectQuiz(activeSubject)}
                >
                  <RotateCcw size={16} />
                  <span>Retake with New Questions</span>
                </button>

                <button
                  type="button"
                  className="btn-modal-return"
                  onClick={() => {
                    setTimerActive(false);
                    setShowScoreModal(false);
                    setActiveScreen('catalog');
                  }}
                >
                  <span>Return to Subjects Catalog</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // SCREEN 4: INTERACTIVE UPSC AI MENTOR STUDY & DOUBT CLEARANCE
  // =========================================================================
  return (
    <div className="upsc-assistant-study-view">
      <div className="study-session-header">
        <div className="header-left-col">
          <button
            type="button"
            className="btn-back-to-catalog"
            onClick={() => setActiveScreen('catalog')}
          >
            <ArrowLeft size={16} />
            <span>Back to Subjects Catalog</span>
          </button>

          <div className="active-topic-title-row">
            <h2>{activeTopic?.title}</h2>
            <span className="study-category-badge">{activeTopic?.category || 'General Studies'}</span>
            <span className="study-diff-badge">Level: {difficulty}</span>
          </div>
        </div>

        <div className="header-right-col">
          <button
            type="button"
            className="btn-quick-quiz-trigger"
            onClick={() => handleStartSubjectQuiz(activeTopic)}
          >
            <Award size={15} />
            <span>Launch 10 MCQs Quiz</span>
          </button>

          <div className="diff-pills-group">
            {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
              <button
                key={lvl}
                type="button"
                className={`diff-pill-btn ${difficulty === lvl ? 'diff-pill-active' : ''}`}
                onClick={() => setDifficulty(lvl)}
              >
                {lvl}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="btn-settings-small"
            onClick={() => setActiveScreen('connect')}
            title="Manage Gemini API Key"
          >
            <Settings size={15} />
          </button>
        </div>
      </div>

      <div className="quick-study-prompts-bar">
        <span className="quick-prompts-label">Instant Exam Triggers:</span>
        <button
          type="button"
          className="btn-quick-prompt"
          onClick={() => handleSendMessage(`Provide a comprehensive, high-yield explanation of "${activeTopic?.title}" covering: 1. Core Concept Definition, 2. Constitutional/Statutory basis, 3. Key provisions, 4. Landmark Supreme Court judgments, 5. Crucial Prelims takeaways.`)}
          disabled={isGenerating}
        >
          📚 Explain Core Concepts & Constitutional Basis
        </button>
        <button
          type="button"
          className="btn-quick-prompt"
          onClick={() => handleSendMessage(`Frame a standard UPSC Mains 15-mark question on "${activeTopic?.title}" and provide a model answer framework structured with: 1. Catchy Introduction, 2. Multi-dimensional Body (Social, Economic, Political, Administrative), 3. Key Challenges/Gaps, 4. Concrete Way Forward & Conclusion.`)}
          disabled={isGenerating}
        >
          ✍️ Mains Answer Framework (15 Marks)
        </button>
        <button
          type="button"
          className="btn-quick-prompt"
          onClick={() => handleSendMessage(`Highlight the most critical Supreme Court rulings, official committee recommendations (Sarkaria, Punchhi, 2nd ARC), and recent government policy decisions relevant to "${activeTopic?.title}".`)}
          disabled={isGenerating}
        >
          ⚖️ SC Landmark Cases & Committee Reports
        </button>
      </div>

      <div className="study-chat-stream">
        {chatMessages.map((msg, idx) => (
          <div
            key={msg.id}
            className={`chat-message-bubble ${msg.role === 'user' ? 'bubble-user' : 'bubble-assistant'} ${msg.isError ? 'bubble-error' : ''}`}
          >
            <div className="bubble-sender-row">
              <span className="sender-name">
                {msg.role === 'user' ? '👤 Aspirant' : '🏛️ UPSC Senior Mentor (Gemini)'}
              </span>
              <div className="bubble-actions">
                <span className="message-time">{msg.timestamp}</span>
                {msg.role === 'assistant' && (
                  <button
                    type="button"
                    className="btn-copy-bubble"
                    onClick={() => {
                      navigator.clipboard.writeText(msg.text);
                      setCopiedIdx(idx);
                      setTimeout(() => setCopiedIdx(null), 2000);
                    }}
                    title="Copy response"
                  >
                    {copiedIdx === idx ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  </button>
                )}
              </div>
            </div>

            <div className="bubble-content-markdown">
              {msg.text.split('\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('### ')) {
                  return <h3 key={pIdx} className="md-h3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('#### ')) {
                  return <h4 key={pIdx} className="md-h4">{paragraph.replace('#### ', '')}</h4>;
                }
                if (paragraph.trim().startsWith('- ') || paragraph.trim().startsWith('* ')) {
                  return (
                    <li key={pIdx} className="md-bullet">
                      {paragraph.replace(/^[-*]\s+/, '')}
                    </li>
                  );
                }
                if (!paragraph.trim()) {
                  return <div key={pIdx} className="md-spacing" />;
                }
                return <p key={pIdx} className="md-paragraph">{paragraph}</p>;
              })}
            </div>
          </div>
        ))}

        {isGenerating && (
          <div className="chat-message-bubble bubble-assistant bubble-loading">
            <div className="bubble-sender-row">
              <span className="sender-name">🏛️ UPSC Senior Mentor (Gemini)</span>
            </div>
            <div className="ai-typing-indicator">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-text">Analyzing UPSC syllabus, constitutional articles & synthesizing exam answer...</span>
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      <div className="study-chat-input-bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="study-form-flex"
        >
          <input
            type="text"
            placeholder={`Ask any UPSC doubt about ${activeTopic?.title || 'this topic'}, request simplification, or ask for MCQs...`}
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            disabled={isGenerating}
            className="study-text-input"
          />

          <button
            type="submit"
            disabled={isGenerating || !userQuery.trim()}
            className="btn-send-study"
          >
            <Send size={16} />
            <span>Send</span>
          </button>

          <button
            type="button"
            className="btn-clear-chat"
            onClick={() => handleStartSubjectQuiz(activeTopic)}
            title="Switch to AI Quiz"
          >
            <Award size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
