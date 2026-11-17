const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_API_URL) || 'http://localhost:5000';

// Default initial users if localStorage is fresh
const SEED_USERS = [
  {
    id: "aspirant-1794905135726",
    name: "Hari",
    email: "haripuvvala7924@gmail.com",
    password: "123456",
    picture: "https://api.dicebear.com/7.x/initials/svg?seed=Hari&backgroundColor=0f172a&textColor=f59e0b",
    targetExam: "UPSC CSE 2027",
    prelimsTargetDate: "2027-05-30",
    mainsTargetDate: "2027-09-17",
    optionalSubject: "PSIR (Political Science & International Relations)",
    dailyTargetHours: 9,
    createdAt: "2026-11-17T08:45:35.726Z",
    lastLogin: "2026-11-17T17:16:28.263Z",
    status: "Active Aspirant"
  }
];

// Determine if we should attempt network calls or use instant local storage
const isServerConfigured = () => {
  if (typeof window !== 'undefined') {
    const isHttps = window.location.protocol === 'https:';
    const isLocalhostUrl = !API_BASE_URL || API_BASE_URL.includes('localhost') || API_BASE_URL.includes('127.0.0.1');
    // If running on HTTPS in production, and VITE_API_URL is HTTP or localhost, don't attempt mixed-content calls
    if (isHttps && isLocalhostUrl) {
      return false;
    }
  }
  return Boolean(API_BASE_URL);
};

// Helper to get local users with seed fallback
const getLocalUsers = () => {
  try {
    const stored = localStorage.getItem('upsc_users');
    if (!stored) {
      localStorage.setItem('upsc_users', JSON.stringify(SEED_USERS));
      return SEED_USERS;
    }
    return JSON.parse(stored);
  } catch {
    return SEED_USERS;
  }
};

export const apiService = {
  // Fetch all registered users
  async getUsers() {
    if (isServerConfigured()) {
      try {
        const res = await fetch(`${API_BASE_URL}/users`);
        if (res.ok) {
          const remoteUsers = await res.json();
          if (Array.isArray(remoteUsers) && remoteUsers.length > 0) {
            localStorage.setItem('upsc_users', JSON.stringify(remoteUsers));
            return remoteUsers;
          }
        }
      } catch (err) {
        console.warn('API error, using local storage:', err.message);
      }
    }
    return getLocalUsers();
  },

  // Register a new user
  async registerUser({ name, email, password, optionalSubject, targetExam }) {
    const cleanEmail = email.trim().toLowerCase();
    const localUsers = getLocalUsers();

    if (localUsers.some((u) => u.email === cleanEmail)) {
      throw new Error('An account with this email address already exists. Please Sign In.');
    }

    const newUser = {
      id: `aspirant-${Date.now()}`,
      name: name.trim(),
      email: cleanEmail,
      password: password,
      picture: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name.trim())}&backgroundColor=0f172a&textColor=f59e0b`,
      targetExam: targetExam || 'UPSC CSE 2027',
      prelimsTargetDate: '2027-05-30',
      mainsTargetDate: '2027-09-17',
      optionalSubject: optionalSubject || 'PSIR (Political Science & International Relations)',
      dailyTargetHours: 9,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      status: 'Active Aspirant',
    };

    // Attempt remote save if server is configured
    if (isServerConfigured()) {
      try {
        await fetch(`${API_BASE_URL}/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });
      } catch (err) {
        console.warn('Remote save failed, user saved locally:', err.message);
      }
    }

    // Always persist to localStorage
    const updatedUsers = [...localUsers, newUser];
    localStorage.setItem('upsc_users', JSON.stringify(updatedUsers));
    return newUser;
  },

  // Authenticate user with Email & Password
  async loginUser(email, password) {
    const cleanEmail = email.trim().toLowerCase();

    if (isServerConfigured()) {
      try {
        const res = await fetch(`${API_BASE_URL}/users?email=${encodeURIComponent(cleanEmail)}`);
        if (res.ok) {
          const matches = await res.json();
          if (matches.length > 0) {
            const user = matches[0];
            if (user.password && user.password !== password) {
              throw new Error('Incorrect password. Please verify your credentials and try again.');
            }
            const updated = { ...user, lastLogin: new Date().toISOString() };
            fetch(`${API_BASE_URL}/users/${user.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(updated),
            }).catch(() => {});
            return updated;
          }
        }
      } catch (err) {
        if (err.message.includes('Incorrect password')) throw err;
        console.warn('Remote login failed, checking local credentials:', err.message);
      }
    }

    // Local authentication fallback
    const localUsers = getLocalUsers();
    const matched = localUsers.find((u) => u.email === cleanEmail);
    if (!matched) {
      throw new Error('No account found with this email. Please register first.');
    }
    if (matched.password && matched.password !== password) {
      throw new Error('Incorrect password. Please verify your credentials and try again.');
    }

    const updated = { ...matched, lastLogin: new Date().toISOString() };
    const updatedUsers = localUsers.map((u) => (u.id === matched.id ? updated : u));
    localStorage.setItem('upsc_users', JSON.stringify(updatedUsers));
    return updated;
  },

  // Save session
  async saveSession(userId, authProvider = 'email') {
    const sessionData = {
      id: 'session-active',
      userId,
      loginTime: new Date().toISOString(),
      authProvider,
    };
    if (isServerConfigured()) {
      try {
        await fetch(`${API_BASE_URL}/sessions/session-active`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sessionData),
        });
      } catch {
        // Fallback to local
      }
    }
    localStorage.setItem('upsc_session', JSON.stringify(sessionData));
  },

  // Clear session
  async clearSession() {
    if (isServerConfigured()) {
      try {
        await fetch(`${API_BASE_URL}/sessions/session-active`, {
          method: 'DELETE',
        });
      } catch {
        // Ignored
      }
    }
    localStorage.removeItem('upsc_session');
    localStorage.removeItem('upsc_current_user');
  },

  // Get active session
  async getActiveSession() {
    if (isServerConfigured()) {
      try {
        const res = await fetch(`${API_BASE_URL}/sessions/session-active`);
        if (res.ok) {
          return await res.json();
        }
      } catch {
        // Fallback to local
      }
    }
    const local = localStorage.getItem('upsc_session');
    return local ? JSON.parse(local) : null;
  },

  // Save MCQ Progress
  async saveProgress(progressRecord) {
    if (isServerConfigured()) {
      try {
        await fetch(`${API_BASE_URL}/user_progress`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(progressRecord),
        });
      } catch (e) {
        console.warn('Could not persist progress to remote server:', e.message);
      }
    }

    try {
      const existing = JSON.parse(localStorage.getItem('upsc_progress') || '[]');
      existing.push(progressRecord);
      localStorage.setItem('upsc_progress', JSON.stringify(existing));
    } catch {
      // Ignored
    }
  }
};
