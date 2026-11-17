import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiService } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Initialize session on mount
  useEffect(() => {
    async function initSession() {
      try {
        const storedUser = localStorage.getItem('upsc_current_user');
        const users = await apiService.getUsers();

        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          const matched = users.find((u) => u.id === parsed.id || u.email === parsed.email);
          if (matched) {
            setUser(matched);
          } else {
            localStorage.removeItem('upsc_current_user');
            localStorage.removeItem('upsc_session');
            setUser(null);
          }
        } else {
          const session = await apiService.getActiveSession();
          if (session && session.userId) {
            const matched = users.find((u) => u.id === session.userId);
            if (matched) {
              setUser(matched);
              localStorage.setItem('upsc_current_user', JSON.stringify(matched));
            } else {
              localStorage.removeItem('upsc_session');
              setUser(null);
            }
          } else {
            setUser(null);
          }
        }
      } catch (err) {
        console.warn('Session init check error:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    initSession();
  }, []);

  // Register new aspirant
  const register = async ({ name, email, password, optionalSubject, targetExam }) => {
    setAuthError(null);
    try {
      const newUser = await apiService.registerUser({ 
        name, 
        email, 
        password, 
        optionalSubject,
        targetExam 
      });
      await apiService.saveSession(newUser.id, 'email');
      setUser(newUser);
      localStorage.setItem('upsc_current_user', JSON.stringify(newUser));
      return newUser;
    } catch (err) {
      setAuthError(err.message || 'Registration failed.');
      throw err;
    }
  };

  // Sign In with Email & Password
  const login = async (email, password) => {
    setAuthError(null);
    try {
      const loggedUser = await apiService.loginUser(email, password);
      await apiService.saveSession(loggedUser.id, 'email');
      setUser(loggedUser);
      localStorage.setItem('upsc_current_user', JSON.stringify(loggedUser));
      return loggedUser;
    } catch (err) {
      setAuthError(err.message || 'Login failed.');
      throw err;
    }
  };

  // Logout
  const logout = async () => {
    await apiService.clearSession();
    setUser(null);
    setAuthError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authError,
        register,
        login,
        logout,
        setAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
