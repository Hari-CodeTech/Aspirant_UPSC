import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${className}`}
      onClick={toggleTheme}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={18} className="theme-icon sun-icon" />
      ) : (
        <Moon size={18} className="theme-icon moon-icon" />
      )}
      <span className="theme-toggle-label">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
}
