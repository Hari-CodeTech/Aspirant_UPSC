# 🏛️ Aspirant_UPSC: UPSC CSE Master Study Planner & AI Assistant

[![React](https://img.shields.io/badge/React-19.x-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Google%20Gemini-API%20Enabled-orange.svg)](https://aistudio.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-performance, distraction-free **UPSC Civil Services Examination (CSE) Master Preparation Platform** designed for serious aspirants targeting **UPSC CSE Prelims & Mains**. Built with React 19, Vite, and integrated with **Google Gemini AI**, the application manages your entire preparation lifecycle: daily dynamic schedules, authentic PIB current affairs, syllabus matrices, and Prelims MCQ test engines with real-time constitutional reasoning.

---

## 🌟 Key Features

### 1. 📅 Dynamic 8-9 Hour Daily Timetable & Today Task
- **Intelligent Non-Overlapping Scheduling**: Balances high-difficulty topics across distinct cognitive slots (Current Affairs $\rightarrow$ GS $\rightarrow$ Optional $\rightarrow$ CSAT $\rightarrow$ Daily Topic Assessment).
- **Sunday Revision & Buffer System**: Dedicated revision phases, high-yield backlog clearance, and full 100-MCQ mock practice windows every Sunday.
- **Prelims 2027 Countdown Timer**: Real-time tracking of days remaining until Prelims (May 30, 2027) and Mains (September 17, 2027).
- **Official Portal & Textbook Linking**: Each study block links directly to standard reference texts (*M. Laxmikanth*, *NCERTs*, *Bipin Chandra*, *Ramesh Singh*, *GC Leong*, *O.P. Gauba*) and official government repositories (*Legislative Department*, *PIB*, *RBI*, *ISRO*).

### 2. 📆 Complete Month-Wise Time Table Matrix
- **Overall Day-wise Schedule**: Comprehensive month-by-month roadmap with hourly breakdown slots, topic objectives, difficulty tags, and syllabus linkages.
- **Interactive Day Selector**: Easily inspect past, current, and upcoming daily targets across months.

### 3. 📰 Verified PIB & Real-Time Current Affairs Hub
- **100% Factual Integrity**: Curated articles linked directly to real Press Information Bureau releases (`pib.gov.in`), *The Hindu*, and *Indian Express*.
- **GS Paper Classification**: Accurate tagging by GS Paper (GS I: Culture/Geo, GS II: Governance/IR, GS III: Economy/Env/Tech, GS IV: Ethics).
- **Direct Source Verification**: Inspect official government releases with one click.

### 4. 🎓 UPSC Study Assistant & Quiz Engine (Powered by Gemini)
- **100% In-Browser Privacy**: Your Google Gemini API key is stored strictly inside browser `localStorage`, communicating directly with Google AI Studio endpoints.
- **Subject & Topic Catalog**: Authentic UPSC Prelims subject cards (Polity, Modern History, Physical/Human Geography, Economy, Environment, Internal Security, Ethics, CSAT, PSIR Optional, etc.) with Difficulty selector (`Beginner | Intermediate | Advanced`).
- **Custom Topic Inquiry**: Enter any syllabus topic (e.g., *Directive Principles*, *Fiscal Deficit*, *Indus Valley Civilization*) to generate targeted MCQs.
- **Dual-Column AI Quiz Engine**:
  - **Loading Skeleton State**: Shimmer animations, pulsing indicators, and real-time palette buffering.
  - **Active Quiz Interface**: Single-choice questions, negative marking calculation ($+2.00 / -0.66$), exam hints, and multi-statement UPSC Prelims options ($[A], [B], [C], [D]$).
  - **Constitutional Analysis Drawer**: Instant explanations citing landmark Supreme Court judgments (*Kesavananda Bharati*, *Puttaswamy*, *Minerva Mills*), constitutional articles, and legal reasoning.
  - **Doubt Clearance AI Mentor**: One-click transition to chat with Gemini on the specific question.
- **Right-Hand Sticky Question Palette**:
  - Live running stopwatch (`⏱ mm:ss`).
  - Active position indicator (`Q. 02 / 10`), question counters, and a 10-grid navigation layout (Current: Blue, Correct: Green `✓`, Incorrect: Red `✕`, Buffering: Skeleton).
  - **Export Capabilities**: One-click **Download PDF** for printable question papers and **Markdown Copy** with full explanations.
  - **Diagnostic Score Report**: Automatically calculates net scores and tracks the **9/10 Mastery Gate**.
- **API Key Management & Removal**: Masked API key input, visibility toggles, and a dedicated **Delete Symbol** with native-styled confirmation popup (*"Remove saved Gemini API key from your browser?"*).

### 5. 🎯 Day-Wise 9/10 MCQ Mastery Test Engine
- Rigorous elimination practice with authentic multi-statement questions.
- Built-in timer, strike-through elimination mode, and instant performance metrics.

### 6. 📚 Syllabus Coverage & Tailored Optional Modules
- Complete General Studies Paper I-IV and CSAT coverage matrix.
- Dynamically tailored modules for Optional subjects: **PSIR**, **Sociology**, **Public Administration**, **Geography**, **History**, and more.

### 7. 🌓 Dark & Light Mode Themes
- Instant toggle between dark and light themes with persistent settings.

---

## 🏗️ Project Architecture

```
Aspirant_UPSC/
├── public/                 # Static assets & emblems
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── AuthModal.jsx             # User login, registration & optional subject selection
│   │   ├── CompleteTimeTable.jsx     # Month-wise day-by-day overall schedule breakdown
│   │   ├── CurrentAffairsHub.jsx     # PIB-verified daily news and GS paper categorization
│   │   ├── Dashboard.jsx             # Primary hub: Today Task, Complete Schedule, Assistant
│   │   ├── MCQMasteryEngine.jsx      # Daily 9/10 mastery prelims testing engine
│   │   ├── ScheduleTimetable.jsx     # Dynamic 8-9 hr daily timetable with non-overlapping slots
│   │   ├── ThemeToggle.jsx           # Dark / Light theme switch
│   │   └── UPSCStudyAssistant.jsx    # Gemini AI Assistant, Subject Catalog, & AI Quiz Engine
│   ├── context/
│   │   └── AuthContext.jsx           # User authentication state & persistent profile
│   ├── data/
│   │   ├── calendarScheduleData.js   # 2026-2027 day-wise timetable data with official sources
│   │   ├── optionalSubjectsData.js   # Syllabus matrices for Optional subjects (PSIR, etc.)
│   │   ├── upscCuratedQuizBank.js    # Curated UPSC Prelims MCQs with constitutional analysis
│   │   └── upscStudyTopicsData.js    # Catalog subjects, syllabus categories, and topic suggestions
│   ├── services/
│   │   ├── aiService.js              # Google Gemini API integration, key validation & fallback
│   │   └── api.js                    # REST API client connecting to backend/json-server
│   ├── App.jsx                       # Root application component & routing
│   ├── App.css                       # Modern responsive styling & UI theme system
│   └── main.jsx                      # Vite entry point
├── db.json                 # JSON mock database (users, profiles, progress)
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite build configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** / **pnpm**
- *(Optional)* **Google Gemini API Key**: Obtain a free key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 1. Clone the Repository
```bash
git clone https://github.com/Hari-CodeTech/Aspirant_UPSC.git
cd Aspirant_UPSC
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Default contents:
```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id
```

### 4. Start the Application
Run both the mock backend database and the Vite frontend:

**Terminal 1 (Mock API Server):**
```bash
npx json-server --watch db.json --port 5000
```

**Terminal 2 (Vite Frontend):**
```bash
npm run dev
```

Open your browser at **`http://localhost:5173`**.

---

## 🧪 Production Build & Preview

To generate an optimized production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment Guide

### Deploying on Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import `Aspirant_UPSC`.
4. Set Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Deploying on Netlify
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Set Build Command to `npm run build` and Publish Directory to `dist`.
3. Add a `_redirects` file with `/*  /index.html  200` to support client-side routing.
4. Click **Deploy Site**.

---

## 🔒 Security & Privacy Notice
- The **UPSC AI Study Assistant** does **not** transmit your Gemini API key to any third-party backend.
- Keys are kept exclusively within your local browser storage (`localStorage`) and communicated directly to Google's official Gemini endpoint.
- You can permanently remove your saved key at any time using the delete trash icon inside the API Key Settings modal.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <strong>Dedicated to every UPSC CSE Aspirant striving for excellence.</strong><br>
  <em>"Satyameva Jayate" — Truth Alone Triumphs</em>
</p>
