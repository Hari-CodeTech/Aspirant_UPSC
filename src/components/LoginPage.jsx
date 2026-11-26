import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const { login, register, authError, setAuthError } = useAuth();
  
  // Toggle between Sign In and Register
  const [isRegister, setIsRegister] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [optionalSubject, setOptionalSubject] = useState('PSIR (Political Science & International Relations)');

  // Modals & local state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [localError, setLocalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    setAuthError(null);

    // Common validation
    if (!email.trim() || !email.includes('@')) {
      setLocalError('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 4) {
      setLocalError('Password must be at least 4 characters.');
      return;
    }

    if (isRegister) {
      // Registration validation
      if (!name.trim()) {
        setLocalError('Please enter your full name.');
        return;
      }
      if (password !== confirmPassword) {
        setLocalError('Passwords do not match. Please re-enter.');
        return;
      }

      setIsSubmitting(true);
      try {
        await register({
          name: name.trim(),
          email: email.trim(),
          password,
          optionalSubject,
          targetExam: 'UPSC CSE 2027',
        });
      } catch (err) {
        setLocalError(err.message || 'Registration failed.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Sign In validation
      setIsSubmitting(true);
      try {
        await login(email.trim(), password);
      } catch (err) {
        setLocalError(err.message || 'Invalid email or password.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setLocalError('Please enter your Email Address first to receive reset instructions.');
      return;
    }
    setShowForgotModal(true);
  };

  return (
    <div className="login-screen-bg">
      <div className="login-top-tray">
        <ThemeToggle />
      </div>

      <div className="login-box-card">
        {/* Top-Left Graduation App Logo Badge */}
        <div className="logo-badge-container">
          <div className="app-logo-box">
            <svg
              className="logo-icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
            </svg>
          </div>
        </div>

        {/* Header Title & Subtitle */}
        <div className="login-card-header">
          <h2 className="login-main-title">{isRegister ? 'Register' : 'Login'}</h2>
          <p className="login-main-subtitle">
            {isRegister ? 'Create your UPSC aspirant account' : 'Sign in to your account'}
          </p>
        </div>

        {/* Error notification */}
        {(localError || authError) && (
          <div className="login-error-msg">
            <AlertCircle size={16} />
            <span>{localError || authError}</span>
          </div>
        )}

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="login-form">
          {isRegister && (
            <div className="form-field-group">
              <input
                type="text"
                placeholder="Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                required
              />
            </div>
          )}

          <div className="form-field-group">
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="form-field-group">
            <input
              type="password"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>

          {isRegister && (
            <>
              <div className="form-field-group">
                <input
                  type="password"
                  placeholder="Confirm Password *"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </div>

              <div className="form-field-group">
                <select
                  value={optionalSubject}
                  onChange={(e) => setOptionalSubject(e.target.value)}
                  className="input-field select-field"
                >
                  <option value="PSIR (Political Science & International Relations)">
                    Optional: PSIR (Political Science & IR)
                  </option>
                  <option value="Geography">Optional: Geography</option>
                  <option value="History">Optional: History</option>
                  <option value="Public Administration">Optional: Public Administration</option>
                  <option value="Sociology">Optional: Sociology</option>
                  <option value="Anthropology">Optional: Anthropology</option>
                  <option value="Economics">Optional: Economics</option>
                  <option value="Philosophy">Optional: Philosophy</option>
                </select>
              </div>
            </>
          )}

          {!isRegister && (
            <div className="forgot-password-row">
              <button
                type="button"
                className="forgot-password-link"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Primary Action Button */}
          <button 
            type="submit" 
            className="btn-signin-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : isRegister ? (
              'Create Account'
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Footer Switch */}
        <div className="login-card-footer">
          {isRegister ? (
            <span>
              Already have an account?{' '}
              <button
                type="button"
                className="link-switch-auth"
                onClick={() => {
                  setIsRegister(false);
                  setLocalError('');
                  setAuthError(null);
                }}
              >
                Sign In
              </button>
            </span>
          ) : (
            <span>
              Don't have an account?{' '}
              <button
                type="button"
                className="link-switch-auth"
                onClick={() => {
                  setIsRegister(true);
                  setLocalError('');
                  setAuthError(null);
                }}
              >
                Register
              </button>
            </span>
          )}
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="simple-modal-backdrop" onClick={() => setShowForgotModal(false)}>
          <div className="simple-modal-card" onClick={(e) => e.stopPropagation()}>
            <CheckCircle2 size={36} className="text-success" color="var(--success)" />
            <h3>Reset Instructions Sent</h3>
            <p>
              We have dispatched password recovery instructions to <strong>{email || 'your email'}</strong>. Please check your inbox.
            </p>
            <button
              type="button"
              className="btn-modal-close"
              onClick={() => setShowForgotModal(false)}
            >
              Back to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
