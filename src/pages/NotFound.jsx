import { Link } from "react-router-dom";

// Icons
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

export default function NotFound() {
  return (
    <div className="not-found-page">
      {/* Background Effects */}
      <div className="bg-effects">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>

      <div className="not-found-content">
        {/* 404 Illustration */}
        <div className="error-illustration">
          <div className="error-code">
            <span className="digit">4</span>
            <div className="planet">
              <div className="planet-ring"></div>
              <div className="planet-body"></div>
            </div>
            <span className="digit">4</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          Oops! The page you're looking for seems to have drifted off into space. 
          It might have been moved, deleted, or never existed.
        </p>

        {/* Action Buttons */}
        <div className="error-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            <HomeIcon />
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary btn-lg">
            <ArrowLeftIcon />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="helpful-links">
          <p className="links-title">Or try these:</p>
          <div className="links-grid">
            <Link to="/dashboard" className="link-item">
              <span className="link-icon">📊</span>
              <span>Dashboard</span>
            </Link>
            <Link to="/manage" className="link-item">
              <span className="link-icon">📋</span>
              <span>Subscriptions</span>
            </Link>
            <Link to="/analytics" className="link-item">
              <span className="link-icon">📈</span>
              <span>Analytics</span>
            </Link>
            <Link to="/profile" className="link-item">
              <span className="link-icon">👤</span>
              <span>Profile</span>
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="search-suggestion">
          <p>Looking for something specific?</p>
          <div className="search-box">
            <SearchIcon />
            <input type="text" placeholder="Search pages..." />
          </div>
        </div>
      </div>

      <style>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        /* Background Effects */
        .bg-effects {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          top: -200px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          bottom: -150px;
          left: -100px;
          animation: float 8s ease-in-out infinite;
          animation-delay: -4s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 6s ease-in-out infinite;
          opacity: 0.15;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }

        /* Content */
        .not-found-content {
          text-align: center;
          max-width: 600px;
          position: relative;
          z-index: 1;
        }

        /* Error Illustration */
        .error-illustration {
          margin-bottom: 2rem;
        }

        .error-code {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          font-size: 8rem;
          font-weight: 800;
          line-height: 1;
        }

        .digit {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.5)); }
        }

        .planet {
          position: relative;
          width: 100px;
          height: 100px;
          animation: rotate 20s linear infinite;
        }

        .planet-body {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f59e0b, #f97316);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 40px rgba(245, 158, 11, 0.4);
        }

        .planet-ring {
          width: 100px;
          height: 30px;
          border: 4px solid rgba(245, 158, 11, 0.5);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-20deg);
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Error Message */
        .error-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .error-description {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Actions */
        .error-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        /* Helpful Links */
        .helpful-links {
          margin-bottom: 2rem;
        }

        .links-title {
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 1rem;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .link-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          color: #e2e8f0;
          font-size: 0.875rem;
          transition: all 0.2s;
        }

        .link-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        .link-icon {
          font-size: 1.5rem;
        }

        /* Search Suggestion */
        .search-suggestion {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .search-suggestion p {
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          max-width: 300px;
          margin: 0 auto;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
        }

        .search-box svg {
          color: #64748b;
          flex-shrink: 0;
        }

        .search-box input {
          flex: 1;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
        }

        .search-box input::placeholder {
          color: #64748b;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .error-code {
            font-size: 5rem;
          }

          .planet {
            width: 70px;
            height: 70px;
          }

          .planet-body {
            width: 40px;
            height: 40px;
          }

          .planet-ring {
            width: 70px;
            height: 20px;
            border-width: 3px;
          }

          .error-title {
            font-size: 1.875rem;
          }

          .error-description {
            font-size: 1rem;
          }

          .error-actions {
            flex-direction: column;
          }

          .error-actions .btn {
            width: 100%;
            justify-content: center;
          }

          .links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
