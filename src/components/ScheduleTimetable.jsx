import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getTodaySchedule, getSundayBufferSchedule } from '../data/calendarScheduleData';
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  AlertCircle, 
  ShieldAlert, 
  Sparkles, 
  Coffee, 
  Brain,
  BookOpen,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function ScheduleTimetable({ onStartDailyMcq, onOpenCurrentAffairs }) {
  const { user } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [isSundayBuffer, setIsSundayBuffer] = useState(false);

  // Initialize schedule based on logged-in user's optional subject
  useEffect(() => {
    if (!isSundayBuffer) {
      setSessions(getTodaySchedule(user?.optionalSubject));
    } else {
      setSessions(getSundayBufferSchedule(user?.optionalSubject));
    }
  }, [user, isSundayBuffer]);

  const toggleSessionCompletion = (idx) => {
    setSessions((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], completed: !updated[idx].completed };
      return updated;
    });
  };

  // Switch between Standard Weekday (8.5h - 9h) and Sunday Buffer Day
  const handleToggleDayMode = (isSunday) => {
    setIsSundayBuffer(isSunday);
    if (isSunday) {
      setSessions(getSundayBufferSchedule(user?.optionalSubject));
    } else {
      setSessions(getTodaySchedule(user?.optionalSubject));
    }
  };

  const completedCount = sessions.filter((s) => s.completed).length;
  const progressPercent = sessions.length > 0 ? Math.round((completedCount / sessions.length) * 100) : 0;

  return (
    <div className="schedule-timetable-container">
      {/* Top Controller */}
      <div className="timetable-top-bar">
        <div>
          <div className="pacing-badge">
            <Brain size={14} />
            <span>Difficulty-Calibrated Pacing • Tailored for {user?.optionalSubject || 'Your Optional'}</span>
          </div>
          <h2>Daily Preparation Blueprint (8.5 - 9 Hours)</h2>
          <p className="timetable-sub">
            Balanced distribution across GS Core, <strong>{user?.optionalSubject || 'Optional Subject'}</strong>, and CSAT. Sundays are strictly reserved for Buffer & Revision.
          </p>
        </div>

        <div className="day-mode-switch">
          <button
            type="button"
            className={`btn-mode ${!isSundayBuffer ? 'mode-active' : ''}`}
            onClick={() => handleToggleDayMode(false)}
          >
            <span>Standard Weekday (8.5h)</span>
          </button>
          <button
            type="button"
            className={`btn-mode ${isSundayBuffer ? 'mode-active-sunday' : ''}`}
            onClick={() => handleToggleDayMode(true)}
          >
            <Coffee size={14} />
            <span>Sunday Buffer Mode</span>
          </button>
        </div>
      </div>

      {/* Buffer Day Alert if active */}
      {isSundayBuffer && (
        <div className="sunday-buffer-notice">
          <Coffee size={24} className="icon-gold" />
          <div>
            <h4>Sunday Buffer & Revision Protocol Active</h4>
            <p>
              Per PRD rules: <strong>No new heavy syllabus is scheduled today.</strong> Use these 8 hours exclusively for weekly revision, mock test post-mortem, and backlog clearance.
            </p>
          </div>
        </div>
      )}

      {/* Progress tracker bar */}
      <div className="schedule-progress-card">
        <div className="progress-info">
          <span>Today's Daily Target Progress:</span>
          <strong>{completedCount} of {sessions.length} Slots Completed ({progressPercent}%)</strong>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Sessions Timeline */}
      <div className="timeline-stack">
        {sessions.map((session, idx) => (
          <div 
            key={idx} 
            className={`timeline-slot-card ${session.completed ? 'slot-done' : ''}`}
          >
            <div className="slot-check-side" onClick={() => toggleSessionCompletion(idx)}>
              {session.completed ? (
                <CheckCircle2 size={24} className="icon-check-done" />
              ) : (
                <Circle size={24} className="icon-check-pending" />
              )}
            </div>

            <div className="slot-content-side">
              <div className="slot-header-row">
                <div className="time-badge">
                  <Clock size={13} />
                  <span>{session.slot}</span>
                </div>
                <span className={`diff-pill diff-${session.difficulty?.toLowerCase() || 'med'}`}>
                  {session.difficulty || 'Essential'}
                </span>
                <span className="paper-tag-pill">{session.paper}</span>
              </div>

              <h4 className="slot-title">{session.subject}</h4>
              <p className="slot-focus-text">
                <strong>Focus:</strong> {session.focus}
              </p>

              {session.standardBooks && session.standardBooks.length > 0 && (
                <div className="slot-resources-row">
                  <div className="slot-books-line">
                    <BookOpen size={12} />
                    <span><strong>Standard Sources:</strong> {session.standardBooks.join(' • ')}</span>
                  </div>
                  {session.officialUrl && (
                    <a
                      href={session.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="slot-official-link"
                      onClick={(e) => e.stopPropagation()}
                      title={`Official Portal: ${session.officialSource}`}
                    >
                      <ExternalLink size={12} />
                      <span>{session.officialSource} ↗</span>
                    </a>
                  )}
                </div>
              )}

              {session.subject.includes('Daily Topic MCQ Test') && (
                <button
                  type="button"
                  className="btn-launch-slot-mcq"
                  onClick={onStartDailyMcq}
                >
                  <Sparkles size={14} />
                  <span>Launch 10 MCQs Mastery Test</span>
                  <ArrowRight size={14} />
                </button>
              )}

              {session.paper === 'Current Affairs' && onOpenCurrentAffairs && (
                <button
                  type="button"
                  className="btn-launch-slot-ca"
                  onClick={onOpenCurrentAffairs}
                >
                  <ExternalLink size={14} />
                  <span>Open Daily Current Affairs & Real Sources</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
