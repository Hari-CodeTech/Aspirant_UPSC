const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiService = {
  // Fetch all registered users
  async getUsers() {
    try {
      const res = await fetch(`${API_BASE_URL}/users`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API error, falling back to localStorage:', err);
      const localUsers = localStorage.getItem('upsc_users');
      return localUsers ? JSON.parse(localUsers) : [];
    }
  },

  // Register a new user
  async registerUser({ name, email, password, optionalSubject }) {
    const cleanEmail = email.trim().toLowerCase();
    
    // 1. Check if user already exists in json-server
    try {
      const checkRes = await fetch(`${API_BASE_URL}/users?email=${encodeURIComponent(cleanEmail)}`);
      if (checkRes.ok) {
        const existing = await checkRes.json();
        if (existing.length > 0) {
          throw new Error('An account with this email address already exists. Please Sign In.');
        }
      }
    } catch (err) {
      if (err.message.includes('already exists')) throw err;
      console.warn('Could not check json-server, checking local:', err);
    }

    const newUser = {
      id: `aspirant-${Date.now()}`,
      name: name.trim(),
      email: cleanEmail,
      password: password, // Stored for credential verification
      picture: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name.trim())}&backgroundColor=0f172a&textColor=f59e0b`,
      targetExam: 'UPSC CSE 2027',
      prelimsTargetDate: '2027-05-30',
      mainsTargetDate: '2027-09-17',
      optionalSubject: optionalSubject || 'PSIR (Political Science & International Relations)',
      dailyTargetHours: 9,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      status: 'Active Aspirant',
    };

    // Save to json-server
    try {
      const res = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      if (res.ok) {
        const saved = await res.json();
        return saved;
      }
    } catch (err) {
      console.warn('json-server save failed, falling back to local storage:', err);
    }

    // Local storage fallback
    const localUsers = JSON.parse(localStorage.getItem('upsc_users') || '[]');
    const existingLocal = localUsers.find((u) => u.email === cleanEmail);
    if (existingLocal) {
      throw new Error('An account with this email address already exists. Please Sign In.');
    }
    localUsers.push(newUser);
    localStorage.setItem('upsc_users', JSON.stringify(localUsers));
    return newUser;
  },

  // Authenticate user with Email & Password
  async loginUser(email, password) {
    const cleanEmail = email.trim().toLowerCase();

    try {
      const res = await fetch(`${API_BASE_URL}/users?email=${encodeURIComponent(cleanEmail)}`);
      if (res.ok) {
        const matches = await res.json();
        if (matches.length === 0) {
          throw new Error('No account found with this email. Please register first.');
        }
        const user = matches[0];
        if (user.password && user.password !== password) {
          throw new Error('Incorrect password. Please verify your credentials and try again.');
        }

        // Update last login timestamp
        const updated = { ...user, lastLogin: new Date().toISOString() };
        await fetch(`${API_BASE_URL}/users/${user.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updated),
        }).catch(() => {});

        return updated;
      }
    } catch (err) {
      if (err.message.includes('No account found') || err.message.includes('Incorrect password')) {
        throw err;
      }
      console.warn('json-server login check error:', err);
    }

    // Local storage check
    const localUsers = JSON.parse(localStorage.getItem('upsc_users') || '[]');
    const matched = localUsers.find((u) => u.email === cleanEmail);
    if (!matched) {
      throw new Error('No account found with this email. Please register first.');
    }
    if (matched.password && matched.password !== password) {
      throw new Error('Incorrect password. Please verify your credentials and try again.');
    }
    return matched;
  },

  // Authenticate with Google
  async loginOrRegisterWithGoogle(googleProfile) {
    const cleanEmail = googleProfile.email.trim().toLowerCase();

    try {
      const res = await fetch(`${API_BASE_URL}/users?email=${encodeURIComponent(cleanEmail)}`);
      if (res.ok) {
        const matches = await res.json();
        if (matches.length > 0) {
          const user = { ...matches[0], lastLogin: new Date().toISOString() };
          await fetch(`${API_BASE_URL}/users/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
          }).catch(() => {});
          return user;
        }
      }

      // New Google User
      const newUser = {
        id: `google-${googleProfile.sub || Date.now()}`,
        name: googleProfile.name || 'UPSC Aspirant',
        email: cleanEmail,
        picture: googleProfile.picture || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(googleProfile.name || 'Aspirant')}&backgroundColor=0f172a&textColor=f59e0b`,
        authProvider: 'google',
        targetExam: 'UPSC CSE 2027',
        prelimsTargetDate: '2027-05-30',
        mainsTargetDate: '2027-09-17',
        optionalSubject: 'PSIR (Political Science & International Relations)',
        dailyTargetHours: 9,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        status: 'Active Aspirant',
      };

      const createRes = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (createRes.ok) return await createRes.json();
      return newUser;
    } catch (err) {
      console.warn('Google sync with json-server error:', err);
      return {
        id: `google-${Date.now()}`,
        name: googleProfile.name || 'UPSC Aspirant',
        email: cleanEmail,
        picture: googleProfile.picture,
        authProvider: 'google',
        targetExam: 'UPSC CSE 2027',
        prelimsTargetDate: '2027-05-30',
        mainsTargetDate: '2027-09-17',
        optionalSubject: 'PSIR (Political Science & International Relations)',
        dailyTargetHours: 9,
        lastLogin: new Date().toISOString()
      };
    }
  },

  // Save session
  async saveSession(userId, authProvider = 'email') {
    const sessionData = {
      id: 'session-active',
      userId,
      loginTime: new Date().toISOString(),
      authProvider,
    };
    try {
      await fetch(`${API_BASE_URL}/sessions/session-active`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sessionData),
      });
    } catch {
      localStorage.setItem('upsc_session', JSON.stringify(sessionData));
    }
  },

  // Clear session
  async clearSession() {
    try {
      await fetch(`${API_BASE_URL}/sessions/session-active`, {
        method: 'DELETE',
      });
    } catch {
      // Ignored
    }
    localStorage.removeItem('upsc_session');
    localStorage.removeItem('upsc_current_user');
  },

  // Get active session
  async getActiveSession() {
    try {
      const res = await fetch(`${API_BASE_URL}/sessions/session-active`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      const local = localStorage.getItem('upsc_session');
      return local ? JSON.parse(local) : null;
    }
    return null;
  },

  // Fetch Syllabus
  async getSyllabus() {
    const res = await fetch(`${API_BASE_URL}/syllabus`);
    return await res.json();
  },

  // Fetch Schedule
  async getSchedule() {
    const res = await fetch(`${API_BASE_URL}/schedule`);
    return await res.json();
  },

  // Fetch Current Affairs
  async getCurrentAffairs() {
    const res = await fetch(`${API_BASE_URL}/current_affairs`);
    return await res.json();
  },

  // Fetch MCQs
  async getMCQs() {
    const res = await fetch(`${API_BASE_URL}/mcqs`);
    return await res.json();
  }
};
