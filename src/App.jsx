import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import './App.css';

function MainRouter() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="app-loader">
        <div className="spinner"></div>
        <p>Loading Aspirant Master Planner...</p>
      </div>
    );
  }

  return user ? <Dashboard /> : <LoginPage />;
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}
