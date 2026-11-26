import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { generateMonthSchedule, PREPARATION_MONTHS } from '../data/calendarScheduleData';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Coffee, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  BookOpen, 
  AlertCircle,
  ShieldCheck,
  Award,
  ExternalLink
} from 'lucide-react';

export default function CompleteTimeTable() {
  const { user } = useAuth();
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0); // Default to Nov 2026
  // Default expanded day to 17 for Nov 2026 so aspirants instantly see Today's plan
  const [expandedDay, setExpandedDay] = useState(17);

  const currentMonthConfig = PREPARATION_MONTHS[selectedMonthIndex];
  const scheduleData = generateMonthSchedule(
    currentMonthConfig.year,
    currentMonthConfig.monthIndex,
    user?.optionalSubject
  );

  const toggleDay = (dayNum) => {
    setExpandedDay((prev) => (prev === dayNum ? null : dayNum));
  };

  return (
    <div className="complete-timetable-view">
      {/* Month Navigation Strip */}
      <div className="month-selector-bar">
        <div className="selector-label">
          <CalendarIcon size={16} className="text-blue-600" />
          <span>Preparation Roadmap Months:</span>
        </div>
        <div className="month-pill-scroll">
          {PREPARATION_MONTHS.map((m, idx) => (
            <button
              key={idx}
              type="button"
              className={`month-tab-pill ${selectedMonthIndex === idx ? 'month-active' : ''}`}
              onClick={() => {
                setSelectedMonthIndex(idx);
                // Expand day 17 if Nov 2026, otherwise day 1
                setExpandedDay(idx === 0 ? 17 : 1);
              }}
            >
              <span>{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Month Strategic Banner */}
      <div className="month-summary-card">
        <div className="summary-left">
          <div className="phase-badge">
            <ShieldCheck size={14} />
            <span>Calibrated for Exam Target: Prelims May 30, 2027</span>
          </div>
          <h3>{scheduleData.monthName} {scheduleData.year} Comprehensive Plan</h3>
          <p className="summary-desc">
            Syllabus paced strictly at <strong>8.5 - 9 Hours daily</strong>. Non-overlapping difficulty distribution across GS Core, CSAT, and your registered optional: <strong>{user?.optionalSubject || 'Optional Subject'}</strong>.
          </p>
        </div>

        <div className="summary-stats-box">
          <div className="mini-stat">
            <span className="stat-num">{scheduleData.days.length}</span>
            <span className="stat-txt">Planned Days</span>
          </div>
          <div className="mini-stat">
            <span className="stat-num">{scheduleData.totalPlannedHours}h</span>
            <span className="stat-txt">Target Hours</span>
          </div>
          <div className="mini-stat stat-buffer">
            <span className="stat-num">{scheduleData.bufferSundaysCount}</span>
            <span className="stat-txt">Buffer Sundays</span>
          </div>
        </div>
      </div>

      {/* Sundays Revision Rule Notice */}
      <div className="sunday-rule-alert">
        <Coffee size={20} className="icon-amber" />
        <div>
          <strong>Every Sunday is a Designated Buffer & Full Practice Day:</strong>
          <span> Zero new heavy syllabus is scheduled on Sundays. These 8 hours are dedicated to weekly revision, full-length 100-MCQ mock tests, and backlog clearance.</span>
        </div>
      </div>

      {/* Day-Wise Schedule Grid / List */}
      <div className="daywise-list-container">
        {scheduleData.days.map((day) => {
          const isExpanded = expandedDay === day.dayNumber;

          return (
            <div 
              key={day.dayNumber} 
              className={`day-card ${day.isSunday ? 'day-sunday' : ''} ${day.isToday ? 'day-today-card' : ''} ${isExpanded ? 'day-expanded' : ''}`}
            >
              {/* Day Header Row */}
              <div className="day-card-header" onClick={() => toggleDay(day.dayNumber)}>
                <div className={`day-date-col ${day.isToday ? 'day-date-today' : ''}`}>
                  <span className="day-num">{day.dayNumber}</span>
                  <span className="day-week">{day.dayName}</span>
                </div>

                <div className="day-theme-col">
                  <div className="theme-title-row">
                    {day.isToday && (
                      <span className="badge-today-active">TODAY</span>
                    )}
                    <h4>{day.theme}</h4>
                    {day.isSunday && (
                      <span className="badge-buffer-day">Buffer Day</span>
                    )}
                  </div>
                  <div className="day-meta-row">
                    <span className="hours-pill">
                      <Clock size={12} />
                      <span>{day.totalHours} Hours</span>
                    </span>
                    <span className="sessions-count">{day.sessions.length} Study Blocks</span>
                    {day.isToday && (
                      <span className="today-sync-indicator">Synchronized with Today Task</span>
                    )}
                  </div>
                </div>

                <button type="button" className="day-expand-toggle">
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {/* Expanded Hourly Schedule */}
              {isExpanded && (
                <div className="day-sessions-drawer">
                  <div className="drawer-title">
                    <span>Hourly Schedule Breakdown for {day.dayOfWeek}, {scheduleData.monthName} {day.dayNumber}:</span>
                  </div>

                  <div className="drawer-sessions-stack">
                    {day.sessions.map((sess, sIdx) => (
                      <div key={sIdx} className="drawer-session-card">
                        <div className="drawer-session-header-row">
                          <div className="session-time-col">
                            <Clock size={13} className="text-blue-500" />
                            <span>{sess.slot}</span>
                          </div>
                          <span className={`diff-pill diff-${sess.difficulty?.toLowerCase() || 'med'}`}>
                            {sess.difficulty || 'Essential'}
                          </span>
                          <span className="paper-tag-pill">{sess.paper || sess.type}</span>
                        </div>

                        <h4 className="drawer-session-title">{sess.title || sess.subject}</h4>
                        
                        {sess.focus && (
                          <p className="drawer-session-focus">
                            <strong>Focus:</strong> {sess.focus}
                          </p>
                        )}

                        {sess.standardBooks && sess.standardBooks.length > 0 && (
                          <div className="slot-resources-row">
                            <div className="slot-books-line">
                              <BookOpen size={12} />
                              <span><strong>Standard Sources:</strong> {sess.standardBooks.join(' • ')}</span>
                            </div>
                            {sess.officialUrl && (
                              <a
                                href={sess.officialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="slot-official-link"
                                onClick={(e) => e.stopPropagation()}
                                title={`Official Portal: ${sess.officialSource}`}
                              >
                                <ExternalLink size={12} />
                                <span>{sess.officialSource} ↗</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
