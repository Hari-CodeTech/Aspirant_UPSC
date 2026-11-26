import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getTailoredSyllabus, getNormalizedOptionalKey } from '../data/optionalSubjectsData';
import ScheduleTimetable from './ScheduleTimetable';
import CompleteTimeTable from './CompleteTimeTable';
import CurrentAffairsHub from './CurrentAffairsHub';
import MCQMasteryEngine from './MCQMasteryEngine';
import UPSCStudyAssistant from './UPSCStudyAssistant';
import ThemeToggle from './ThemeToggle';
import { 
  ClipboardList, 
  Clock, 
  Newspaper,
  Plus, 
  TrendingUp, 
  Award, 
  Layers, 
  LogOut, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar,
  X,
  BookOpen,
  GraduationCap,
  ExternalLink,
  Search
} from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  
  // Active Primary View: 'todayTask' | 'completeSchedule' | 'mcqs' | 'currentAffairs' | 'syllabus'
  const [activeView, setActiveView] = useState('todayTask');
  
  // Custom boxes added via "+ New Box"
  const [customBoxes, setCustomBoxes] = useState([]);
  const [showNewBoxModal, setShowNewBoxModal] = useState(false);
  const [newBoxTitle, setNewBoxTitle] = useState('');
  const [newBoxType, setNewBoxType] = useState('mcqs');

  const [masteredTopics, setMasteredTopics] = useState([]);
  const [syllabusList, setSyllabusList] = useState([]);
  const [syllabusFilter, setSyllabusFilter] = useState('All');
  const [syllabusSearch, setSyllabusSearch] = useState('');

  // Active topic for MCQ mastery
  const [currentActiveTopic, setCurrentActiveTopic] = useState({
    id: 'GS2-POL-CONST',
    name: 'Fundamental Rights (Articles 14-21)',
    paper: 'GS Paper II (Polity & Constitution)',
    nextTopic: 'Directive Principles of State Policy & Fundamental Duties (Articles 36-51A)'
  });

  // Calculate days to exam
  const prelimsTarget = new Date('2027-05-30T09:30:00+05:30');
  const daysToPrelims = Math.ceil((prelimsTarget - new Date()) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    if (user?.optionalSubject) {
      setSyllabusList(getTailoredSyllabus(user.optionalSubject));
    } else {
      setSyllabusList(getTailoredSyllabus('PSIR'));
    }
  }, [user]);

  const handleTopicMastered = (topic) => {
    if (!masteredTopics.includes(topic.id)) {
      setMasteredTopics((prev) => [...prev, topic.id]);
    }
  };

  const handleCreateNewBox = (e) => {
    e.preventDefault();
    if (!newBoxTitle.trim()) return;

    const newBox = {
      id: `box-${Date.now()}`,
      title: newBoxTitle.trim(),
      targetView: newBoxType,
      color: 'emerald',
    };

    setCustomBoxes((prev) => [...prev, newBox]);
    setNewBoxTitle('');
    setShowNewBoxModal(false);
    setActiveView(newBoxType);
  };

  return (
    <div className="dashboard-light-container">
      {/* Top Navbar */}
      <header className="dash-header-bar">
        <div className="header-brand">
          <div className="brand-emblem-badge">सत्यमेव जयते</div>
          <div>
            <h1 className="brand-title">Aspirant_upsc</h1>
            <span className="brand-sub">UPSC CSE 2027 Master Planner</span>
          </div>
        </div>

        <div className="header-profile-group">
          <ThemeToggle />

          <div className="profile-pill">
            <img 
              src={user?.picture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80'} 
              alt={user?.name} 
              className="profile-avatar" 
            />
            <div className="profile-text">
              <span className="profile-name">{user?.name || 'Aspirant'}</span>
              <span className="profile-opt">{user?.optionalSubject || 'PSIR Optional'}</span>
            </div>
          </div>

          <button type="button" onClick={logout} className="btn-dash-logout" title="Sign Out">
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Dashboard Canvas */}
      <main className="dash-content-body">
        {/* Top Control Bar with '+ New Box' button (Matches Uploaded Image) */}
        <div className="top-search-action-bar">
          <div className="bar-info-text">
            <span className="countdown-pill">
              <Calendar size={14} className="text-blue-600" />
              <span>Target: May 30, 2027 Prelims ({daysToPrelims} Days Left)</span>
            </span>
            <span className="target-hours-pill">Daily Target: 8.5 – 9 Hours</span>
            <span className="optional-tag-pill">Optional: {user?.optionalSubject}</span>
          </div>

          <button
            type="button"
            className="btn-new-box-blue"
            onClick={() => setShowNewBoxModal(true)}
          >
            <Plus size={18} />
            <span>New Box</span>
          </button>
        </div>

        {/* Primary Action Navigation Cards Row (Matches Uploaded Image) */}
        <div className="boxes-cards-grid">
          {/* Card 1: Today Task */}
          <button
            type="button"
            className={`action-card card-today-task ${activeView === 'todayTask' ? 'card-selected' : ''}`}
            onClick={() => setActiveView('todayTask')}
          >
            <div className="card-icon-wrapper icon-blue">
              <ClipboardList size={34} strokeWidth={2.2} />
            </div>
            <span className="card-action-title">Today Task</span>
          </button>

          {/* Card 2: Complete Time Table */}
          <button
            type="button"
            className={`action-card card-complete-timetable ${activeView === 'completeSchedule' ? 'card-selected' : ''}`}
            onClick={() => setActiveView('completeSchedule')}
          >
            <div className="card-icon-wrapper icon-purple">
              <Clock size={34} strokeWidth={2.2} />
            </div>
            <span className="card-action-title">Complete Time Table</span>
          </button>

          {/* Card 3: Current Affairs (Separate Card Same as Today Task & Complete Plan) */}
          <button
            type="button"
            className={`action-card card-current-affairs ${activeView === 'currentAffairs' ? 'card-selected' : ''}`}
            onClick={() => setActiveView('currentAffairs')}
          >
            <div className="card-icon-wrapper icon-emerald">
              <Newspaper size={34} strokeWidth={2.2} />
            </div>
            <span className="card-action-title">Current Affairs</span>
          </button>

          {/* Card 4: UPSC Study Assistant */}
          <button
            type="button"
            className={`action-card card-ai-assistant ${activeView === 'aiAssistant' ? 'card-selected' : ''}`}
            onClick={() => setActiveView('aiAssistant')}
          >
            <div className="card-icon-wrapper icon-amber">
              <GraduationCap size={34} strokeWidth={2.2} />
            </div>
            <span className="card-action-title">UPSC Study Assistant</span>
          </button>

          {/* Render any Custom Boxes added by User */}
          {customBoxes.map((box) => (
            <button
              key={box.id}
              type="button"
              className={`action-card card-custom-box ${activeView === box.targetView ? 'card-selected' : ''}`}
              onClick={() => setActiveView(box.targetView)}
            >
              <div className="card-icon-wrapper icon-emerald">
                <BookOpen size={32} />
              </div>
              <span className="card-action-title">{box.title}</span>
            </button>
          ))}
        </div>

        {/* Secondary Navigation Pills for Additional Features */}
        <div className="sub-features-pills-row">
          <button
            type="button"
            className={`sub-nav-pill ${activeView === 'aiAssistant' ? 'sub-pill-active' : ''}`}
            onClick={() => setActiveView('aiAssistant')}
          >
            <GraduationCap size={15} className="text-amber-600" />
            <span>UPSC Study Assistant</span>
          </button>

          <button
            type="button"
            className={`sub-nav-pill ${activeView === 'currentAffairs' ? 'sub-pill-active' : ''}`}
            onClick={() => setActiveView('currentAffairs')}
          >
            <TrendingUp size={15} />
            <span>Real-Time Current Affairs</span>
          </button>

          <button
            type="button"
            className={`sub-nav-pill ${activeView === 'mcqs' ? 'sub-pill-active' : ''}`}
            onClick={() => setActiveView('mcqs')}
          >
            <Award size={15} />
            <span>Day-wise 9/10 MCQ Mastery Test</span>
          </button>

          <button
            type="button"
            className={`sub-nav-pill ${activeView === 'syllabus' ? 'sub-pill-active' : ''}`}
            onClick={() => setActiveView('syllabus')}
          >
            <Layers size={15} />
            <span>Syllabus Tracking ({masteredTopics.length} Mastered)</span>
          </button>
        </div>

        {/* Active Content Display Area */}
        <div className="active-view-container">
          {/* VIEW 1: Today Task Plan */}
          {activeView === 'todayTask' && (
            <div className="today-plan-section">
              <div className="section-intro-bar">
                <div>
                  <h3 className="section-heading">Today's Scheduled Study Plan (8.5 - 9 Hours)</h3>
                  <p className="section-subtext">
                    Non-overlapping difficulty distribution across GS Core, <strong>{user?.optionalSubject}</strong>, and CSAT.
                  </p>
                </div>
                <span className="live-status-badge">Today's Active Blueprint</span>
              </div>

              <ScheduleTimetable 
                onStartDailyMcq={() => setActiveView('mcqs')} 
                onOpenCurrentAffairs={() => setActiveView('currentAffairs')}
              />
            </div>
          )}

          {/* VIEW 2: Complete Time Table (Overall Daywise Plan Based on Month) */}
          {activeView === 'completeSchedule' && (
            <div className="complete-schedule-section">
              <CompleteTimeTable />
            </div>
          )}

          {/* VIEW 3: Real-Time Current Affairs */}
          {activeView === 'currentAffairs' && (
            <div className="current-affairs-section">
              <CurrentAffairsHub />
            </div>
          )}

          {/* VIEW 4: Topic MCQ Mastery Test */}
          {activeView === 'mcqs' && (
            <div className="mcq-section">
              <MCQMasteryEngine 
                currentTopic={currentActiveTopic} 
                onTopicMastered={handleTopicMastered} 
              />
            </div>
          )}

          {/* VIEW 5: Syllabus Matrix */}
          {activeView === 'syllabus' && (() => {
            const filteredSyllabus = syllabusList.filter((item) => {
              let matchesPaper = true;
              if (syllabusFilter === 'GS Paper I') matchesPaper = item.paper === 'GS Paper I';
              else if (syllabusFilter === 'GS Paper II') matchesPaper = item.paper === 'GS Paper II';
              else if (syllabusFilter === 'GS Paper III') matchesPaper = item.paper === 'GS Paper III';
              else if (syllabusFilter === 'GS Paper IV') matchesPaper = item.paper === 'GS Paper IV';
              else if (syllabusFilter === 'CSAT') matchesPaper = item.paper.includes('CSAT');
              else if (syllabusFilter === 'Optional') {
                matchesPaper = !item.paper.startsWith('GS ') && !item.paper.includes('CSAT');
              }

              const q = syllabusSearch.toLowerCase().trim();
              const matchesSearch = !q || 
                item.subject.toLowerCase().includes(q) || 
                item.topic.toLowerCase().includes(q) || 
                item.paper.toLowerCase().includes(q) ||
                (item.standardBooks && item.standardBooks.some((b) => b.toLowerCase().includes(q)));

              return matchesPaper && matchesSearch;
            });

            const counts = {
              all: syllabusList.length,
              gs1: syllabusList.filter((i) => i.paper === 'GS Paper I').length,
              gs2: syllabusList.filter((i) => i.paper === 'GS Paper II').length,
              gs3: syllabusList.filter((i) => i.paper === 'GS Paper III').length,
              gs4: syllabusList.filter((i) => i.paper === 'GS Paper IV').length,
              csat: syllabusList.filter((i) => i.paper.includes('CSAT')).length,
              optional: syllabusList.filter((i) => !i.paper.startsWith('GS ') && !i.paper.includes('CSAT')).length,
            };

            return (
              <div className="syllabus-section">
                <div className="section-intro-bar">
                  <div>
                    <h3 className="section-heading">Official UPSC Gazette Syllabus Matrix</h3>
                    <p className="section-subtext">
                      Complete, line-by-line official UPSC syllabus from The Gazette of India (GS 1-4 & CSAT) tailored with your registered Optional: <strong>{user?.optionalSubject || 'PSIR'}</strong>.
                    </p>
                  </div>
                </div>

                {/* Filter Tabs & Search Controls */}
                <div className="syllabus-controls-bar">
                  <div className="syllabus-filter-tabs">
                    {[
                      { key: 'All', label: `All (${counts.all})` },
                      { key: 'GS Paper I', label: `GS I (${counts.gs1})` },
                      { key: 'GS Paper II', label: `GS II (${counts.gs2})` },
                      { key: 'GS Paper III', label: `GS III (${counts.gs3})` },
                      { key: 'GS Paper IV', label: `GS IV (${counts.gs4})` },
                      { key: 'CSAT', label: `CSAT (${counts.csat})` },
                      { key: 'Optional', label: `Optional (${counts.optional})` },
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        type="button"
                        className={`syl-filter-btn ${syllabusFilter === tab.key ? 'syl-filter-active' : ''}`}
                        onClick={() => setSyllabusFilter(tab.key)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="syllabus-search-box">
                    <Search size={16} className="syl-search-icon" />
                    <input
                      type="text"
                      placeholder="Search topics, keywords, standard books..."
                      value={syllabusSearch}
                      onChange={(e) => setSyllabusSearch(e.target.value)}
                      className="syl-search-input"
                    />
                    {syllabusSearch && (
                      <button
                        type="button"
                        className="btn-clear-search"
                        onClick={() => setSyllabusSearch('')}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {filteredSyllabus.length === 0 ? (
                  <div className="syllabus-empty-state">
                    <BookOpen size={36} className="empty-icon" />
                    <h4>No Syllabus Topics Found</h4>
                    <p>No topics matching "{syllabusSearch}" in the selected paper filter.</p>
                    <button
                      type="button"
                      className="btn-reset-filters"
                      onClick={() => {
                        setSyllabusFilter('All');
                        setSyllabusSearch('');
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <div className="syllabus-grid">
                    {filteredSyllabus.map((item) => {
                      const isMastered = masteredTopics.includes(item.id);
                      return (
                        <div key={item.id} className={`syllabus-item-card ${isMastered ? 'card-mastered' : ''}`}>
                          <div className="syllabus-card-top">
                            <span className="paper-tag">{item.paper}</span>
                            <span className={`diff-tag diff-${item.difficulty.toLowerCase()}`}>
                              {item.difficulty}
                            </span>
                          </div>
                          <h4 className="syllabus-subject-title">{item.subject}</h4>
                          <p className="syllabus-topic-desc">{item.topic}</p>

                          {/* Standard Recommended Textbooks */}
                          {item.standardBooks && item.standardBooks.length > 0 && (
                            <div className="syllabus-resources-box">
                              <span className="res-title">
                                <BookOpen size={12} /> Standard Sources:
                              </span>
                              <ul className="res-books-list">
                                {item.standardBooks.map((bk, idx) => (
                                  <li key={idx}>{bk}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Official Institutional / Government Link */}
                          {item.officialUrl && (
                            <div className="syllabus-official-link-row">
                              <a
                                href={item.officialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-topic-official-link"
                                title={`Open official portal: ${item.officialSource}`}
                              >
                                <ExternalLink size={12} />
                                <span>{item.officialSource} ↗</span>
                              </a>
                            </div>
                          )}

                          <div className="syllabus-bottom-meta">
                            <span>Est: {item.estimatedHours} hrs</span>
                            <span className={`status-pill ${isMastered ? 'status-mastered' : 'status-pending'}`}>
                              {isMastered ? '✓ Mastered' : item.status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })()}

          {/* VIEW 6: UPSC Study Assistant */}
          {activeView === 'aiAssistant' && (
            <div className="ai-assistant-section">
              <UPSCStudyAssistant onBackToDashboard={() => setActiveView('todayTask')} />
            </div>
          )}
        </div>
      </main>

      {/* Modal: '+ New Box' */}
      {showNewBoxModal && (
        <div className="simple-modal-backdrop" onClick={() => setShowNewBoxModal(false)}>
          <div className="new-box-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-line">
              <h3>Create New Custom Preparation Box</h3>
              <button 
                type="button" 
                className="btn-modal-close-icon"
                onClick={() => setShowNewBoxModal(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateNewBox} className="new-box-form">
              <div className="form-field-group">
                <label className="field-label">Box Title</label>
                <input
                  type="text"
                  placeholder="e.g. Answer Writing Practice, Map Work, Ethics Cases"
                  value={newBoxTitle}
                  onChange={(e) => setNewBoxTitle(e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="field-label">Target Module / Action</label>
                <select
                  value={newBoxType}
                  onChange={(e) => setNewBoxType(e.target.value)}
                  className="input-field select-field"
                >
                  <option value="todayTask">Link to Today's Tasks</option>
                  <option value="completeSchedule">Link to Complete Time Table</option>
                  <option value="aiAssistant">Link to UPSC Study Assistant</option>
                  <option value="currentAffairs">Link to Real-Time Current Affairs</option>
                  <option value="mcqs">Link to 9/10 MCQ Mastery Test</option>
                  <option value="syllabus">Link to Syllabus Tracker</option>
                </select>
              </div>

              <div className="modal-actions-row">
                <button
                  type="button"
                  className="btn-modal-cancel"
                  onClick={() => setShowNewBoxModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-modal-save"
                >
                  Add Box
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
