import React, { useState, useEffect } from 'react';
import { aiService } from '../services/aiService';
import { apiService } from '../services/api';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  BookOpen, 
  AlertTriangle,
  RotateCcw,
  Check,
  ChevronRight
} from 'lucide-react';

export default function MCQMasteryEngine({ currentTopic, onTopicMastered }) {
  const [topic, setTopic] = useState(
    currentTopic || {
      id: 'GS2-POL-CONST',
      name: 'Fundamental Rights (Articles 14-21)',
      paper: 'GS Paper II (Polity & Constitution)',
      nextTopic: 'Directive Principles of State Policy & Fundamental Duties (Articles 36-51A)'
    }
  );

  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptCount, setAttemptCount] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [showAiConfig, setShowAiConfig] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(Boolean(aiService.getApiKey()));

  // Load questions on topic change
  useEffect(() => {
    loadQuestionsForTopic(topic.name);
  }, [topic]);

  const loadQuestionsForTopic = async (topicName) => {
    setIsGenerating(true);
    try {
      const generated = await aiService.generateMCQsForTopic(topicName, topic.paper);
      setQuestions(generated);
      setUserAnswers({});
      setSubmitted(false);
      setScore(0);
    } catch (err) {
      console.error('Failed to load questions:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectOption = (qIndex, optionIndex) => {
    if (submitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [qIndex]: optionIndex,
    }));
  };

  const handleSubmitTest = async () => {
    let calculatedScore = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setSubmitted(true);

    const isPassed = calculatedScore >= 9;

    // Save attempt to json-server
    try {
      const progressRecord = {
        id: `prog-${topic.id}-${Date.now()}`,
        topicId: topic.id,
        topicName: topic.name,
        score: calculatedScore,
        totalQuestions: questions.length,
        isMastered: isPassed,
        attempt: attemptCount,
        completedAt: new Date().toISOString()
      };
      // Record progress locally & remotely
      await apiService.saveProgress(progressRecord);

      if (isPassed && onTopicMastered) {
        onTopicMastered(topic);
      }
    } catch (e) {
      console.warn('Progress save error:', e);
    }
  };

  const handleRetrySameTopic = async () => {
    setAttemptCount((prev) => prev + 1);
    await loadQuestionsForTopic(topic.name);
  };

  const handleAdvanceNextTopic = () => {
    const next = {
      id: 'GS2-POL-DPSP',
      name: 'Directive Principles of State Policy & Fundamental Duties (Articles 36-51A)',
      paper: 'GS Paper II (Polity & Constitution)',
      nextTopic: 'Union Executive: President, Prime Minister and Council of Ministers'
    };
    setTopic(next);
    setAttemptCount(1);
  };

  const handleSaveApiKey = () => {
    aiService.setApiKey(apiKeyInput);
    setHasApiKey(Boolean(apiKeyInput.trim()));
    setShowAiConfig(false);
    loadQuestionsForTopic(topic.name);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const isPassed = score >= 9;

  return (
    <div className="mcq-engine-container">
      {/* Engine Header */}
      <div className="mcq-header-bar">
        <div>
          <div className="topic-meta-badge">
            <BookOpen size={14} />
            <span>{topic.paper}</span>
          </div>
          <h2 className="active-topic-title">{topic.name}</h2>
          <p className="mastery-rule-desc">
            <strong>Passing Threshold:</strong> You must score at least <strong>9 out of 10</strong> correct to prove mastery and unlock the next syllabus module.
          </p>
        </div>

        <div className="engine-actions">
          <button
            type="button"
            className="btn-ai-toggle"
            onClick={() => setShowAiConfig((v) => !v)}
            title="Configure Gemini AI for unlimited question generation"
          >
            <Sparkles size={16} />
            <span>{hasApiKey ? 'Gemini AI Active' : 'Add Gemini API Key'}</span>
          </button>
        </div>
      </div>

      {/* API Key Modal / Inline Tray */}
      {showAiConfig && (
        <div className="ai-key-tray">
          <div className="tray-info">
            <Sparkles size={16} className="icon-gold" />
            <span>Connect Google Gemini API for Infinite UPSC Question Generation</span>
          </div>
          <div className="tray-input-row">
            <input
              type="password"
              placeholder="Paste Google Gemini API Key (starts with AIza...)"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              className="ai-key-input"
            />
            <button type="button" onClick={handleSaveApiKey} className="btn-save-key">
              Apply Key
            </button>
            <button type="button" onClick={() => setShowAiConfig(false)} className="btn-cancel-key">
              Close
            </button>
          </div>
          <p className="tray-hint">
            Free keys available at Google AI Studio. Without a key, the curated UPSC high-yield question bank is used automatically.
          </p>
        </div>
      )}

      {/* Test Status Banner when submitted */}
      {submitted && (
        <div className={`result-evaluation-banner ${isPassed ? 'banner-pass' : 'banner-fail'}`}>
          <div className="result-header">
            {isPassed ? (
              <div className="badge-pass-icon">
                <CheckCircle2 size={36} />
              </div>
            ) : (
              <div className="badge-fail-icon">
                <AlertTriangle size={36} />
              </div>
            )}
            <div className="result-text">
              <h3>
                {isPassed
                  ? `PASS! MASTERY ACHIEVED (${score}/10 - ${score * 10}%)`
                  : `SCORE: ${score}/10 (${score * 10}%) - RETEST REQUIRED`}
              </h3>
              <p>
                {isPassed
                  ? 'Congratulations! You demonstrated conceptual mastery (>90%). You are cleared to proceed to the next syllabus module.'
                  : `UPSC standard requires 9/10 (90%) to unlock the next syllabus topic. Review the detailed explanations below and take a new 10-question set on ${topic.name}.`}
              </p>
            </div>
          </div>

          <div className="result-actions">
            {isPassed ? (
              <button type="button" className="btn-next-topic" onClick={handleAdvanceNextTopic}>
                <span>Advance to Next Topic: {topic.nextTopic}</span>
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                className="btn-retry-topic"
                onClick={handleRetrySameTopic}
                disabled={isGenerating}
              >
                <RefreshCw size={18} className={isGenerating ? 'spin' : ''} />
                <span>Generate Another 10 Different MCQs on this Topic</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Loading State */}
      {isGenerating ? (
        <div className="questions-loading">
          <div className="spinner"></div>
          <p>Generating 10 UPSC Prelims Standard MCQs for <strong>"{topic.name}"</strong>...</p>
          <span className="loading-sub">Crafting multi-statement questions with constitutional and analytical rigor...</span>
        </div>
      ) : (
        <div className="mcq-question-stack">
          {questions.map((q, qIndex) => {
            const selectedOpt = userAnswers[qIndex];
            const isCorrect = selectedOpt === q.correctAnswer;

            return (
              <div 
                key={q.id || qIndex} 
                className={`question-card ${
                  submitted ? (isCorrect ? 'card-correct' : 'card-incorrect') : ''
                }`}
              >
                <div className="q-card-top">
                  <span className="q-num-pill">Question {qIndex + 1} of 10</span>
                  <span className="q-diff-badge">{q.difficulty || 'UPSC Prelims Standard'}</span>
                  {submitted && (
                    <span className={`eval-pill ${isCorrect ? 'pill-pass' : 'pill-fail'}`}>
                      {isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
                    </span>
                  )}
                </div>

                <div className="q-prompt-box">
                  <p className="q-statement-text">{q.question}</p>
                </div>

                <div className="options-container">
                  {q.options?.map((opt, optIndex) => {
                    const isSelected = selectedOpt === optIndex;
                    let optClass = 'opt-btn';

                    if (isSelected) optClass += ' opt-selected';

                    if (submitted) {
                      if (optIndex === q.correctAnswer) {
                        optClass += ' opt-is-correct';
                      } else if (isSelected && !isCorrect) {
                        optClass += ' opt-is-wrong';
                      }
                    }

                    return (
                      <button
                        key={optIndex}
                        type="button"
                        className={optClass}
                        onClick={() => handleSelectOption(qIndex, optIndex)}
                        disabled={submitted}
                      >
                        <span className="opt-letter-tag">{String.fromCharCode(65 + optIndex)}</span>
                        <span className="opt-text-val">{opt}</span>
                        {submitted && optIndex === q.correctAnswer && (
                          <Check size={16} className="opt-check-icon" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* In-depth explanation on submission */}
                {submitted && (
                  <div className="solution-drawer">
                    <div className="drawer-header">
                      <HelpCircle size={16} />
                      <span>UPSC Official Reasoning & Constitutional Reference:</span>
                    </div>
                    <div className="drawer-body">
                      <p>{q.explanation}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Floating Sticky Bottom Bar for Submission */}
      {!submitted && !isGenerating && (
        <div className="submit-action-bar">
          <div className="progress-indicator">
            <span className="progress-count">{answeredCount} of 10 Answered</span>
            <div className="progress-bar-track">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${(answeredCount / 10) * 100}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            className="btn-submit-test"
            onClick={handleSubmitTest}
            disabled={answeredCount === 0}
          >
            <CheckCircle2 size={18} />
            <span>Submit Assessment ({answeredCount}/10)</span>
          </button>
        </div>
      )}
    </div>
  );
}
