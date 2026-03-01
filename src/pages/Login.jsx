import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

// Icons
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email");
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.data?.notVerified) {
        navigate("/register", { state: { email, requireOtp: true } });
        return;
      }
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Background Effects */}
      <div className="auth-bg-effects">
        <div className="auth-orb orb-1"></div>
        <div className="auth-orb orb-2"></div>
      </div>

      <div className="auth-container">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="branding-content">
            <Link to="/" className="branding-logo">
              <span className="gradient-text">RenewSense</span>
            </Link>
            <h1 className="branding-title">Welcome back</h1>
            <p className="branding-subtitle">
              Sign in to continue managing your subscriptions and never miss a renewal again.
            </p>
            <div className="branding-features">
              <div className="branding-feature">
                <div className="feature-dot"></div>
                <span>Track unlimited subscriptions</span>
              </div>
              <div className="branding-feature">
                <div className="feature-dot"></div>
                <span>Smart renewal reminders</span>
              </div>
              <div className="branding-feature">
                <div className="feature-dot"></div>
                <span>Detailed cost analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-wrapper">
          <div className="auth-card">
            <div className="auth-card-header">
              <h2 className="auth-card-title">Sign In</h2>
              <p className="auth-card-subtitle">
                Enter your credentials to access your account
              </p>
            </div>

            {error && (
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="auth-form">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon"><MailIcon /></span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input with-icon"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <span className="input-icon"><LockIcon /></span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input with-icon"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    Sign In
                    <ArrowRightIcon />
                  </>
                )}
              </button>
            </form>

            <div className="auth-divider">
              <span>or continue with</span>
            </div>

            <div className="social-login">
              <button className="social-btn google">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="social-btn github">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            </div>

            <p className="auth-footer-text">
              Don't have an account?{" "}
              <Link to="/register" className="auth-link">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          position: relative;
          overflow: hidden;
        }

        .auth-bg-effects {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .auth-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          top: -200px;
          right: -200px;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          bottom: -200px;
          left: -200px;
        }

        .auth-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Branding Side */
        .auth-branding {
          display: flex;
          align-items: center;
          padding: 3rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05));
        }

        .branding-content {
          max-width: 480px;
        }

        .branding-logo {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 3rem;
          display: inline-block;
        }

        .branding-logo span {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .branding-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .branding-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .branding-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .branding-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e2e8f0;
          font-size: 0.95rem;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
        }

        /* Form Side */
        .auth-form-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }

        .auth-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2.5rem;
        }

        .auth-card-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-card-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .auth-card-subtitle {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 3rem;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .password-toggle:hover {
          color: #94a3b8;
        }

        .form-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .checkbox-wrapper input {
          display: none;
        }

        .checkbox-custom {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .checkbox-wrapper input:checked + .checkbox-custom {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
        }

        .checkbox-wrapper input:checked + .checkbox-custom::after {
          content: '';
          width: 5px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-label {
          color: #94a3b8;
        }

        .forgot-link {
          color: #3b82f6;
          font-weight: 500;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1.5rem 0;
          color: #64748b;
          font-size: 0.875rem;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          color: #e2e8f0;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .auth-footer-text {
          text-align: center;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .auth-link {
          color: #3b82f6;
          font-weight: 600;
        }

        .auth-link:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .auth-container {
            grid-template-columns: 1fr;
          }

          .auth-branding {
            display: none;
          }

          .auth-form-wrapper {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .auth-card {
            padding: 1.5rem;
          }

          .social-login {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
