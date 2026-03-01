import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddSubscription from "./pages/AddSubscription.jsx";
import ManageSubscriptions from "./pages/ManageSubscriptions.jsx";
import Analytics from "./pages/Analytics.jsx";
import Payment from "./pages/Payment.jsx";
import Profile from "./pages/Profile.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import NotFound from "./pages/NotFound.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";

// SVG Icons
const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="M12 5v14" />
  </svg>
);

const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);

function NavBar() {
  const { role, token, logout, user } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = token
    ? [
      { to: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
      { to: "/add", label: "Add", icon: <PlusIcon /> },
      { to: "/manage", label: "Subscriptions", icon: <ListIcon /> },
      { to: "/analytics", label: "Analytics", icon: <ChartIcon /> },
      { to: "/payment", label: "Payment", icon: <CreditCardIcon /> },
      { to: "/profile", label: "Profile", icon: <UserIcon /> },
      ...(role === "admin" ? [{ to: "/admin", label: "Admin", icon: <ShieldIcon /> }] : []),
    ]
    : [
      { to: "/login", label: "Login" },
      { to: "/register", label: "Get Started" },
    ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-brand">
          <span className="gradient-text">RenewSense</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop">
          {token ? (
            <>
              {navItems.filter(item => item.to !== "/profile" && item.to !== "/admin").map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </>
          )}
        </div>

        {/* User Section */}
        {token && (
          <div className="nav-user desktop">
            <div className="user-menu">
              <button className="user-menu-trigger">
                <div className="user-avatar">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <span className="user-name">{user?.name || 'User'}</span>
              </button>
              <div className="user-dropdown">
                <Link to="/profile" className="dropdown-item">
                  <UserIcon />
                  Profile
                </Link>
                {role === "admin" && (
                  <Link to="/admin" className="dropdown-item">
                    <ShieldIcon />
                    Admin Panel
                  </Link>
                )}
                <div className="dropdown-divider"></div>
                <button onClick={logout} className="dropdown-item danger">
                  <LogOutIcon />
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`mobile-nav-link ${isActive(item.to) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            {token && (
              <button onClick={logout} className="mobile-nav-link danger">
                <LogOutIcon />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10, 15, 28, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          flex-shrink: 0;
        }

        .nav-brand span {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: #94a3b8;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link.active {
          color: #ffffff;
          background: rgba(59, 130, 246, 0.15);
        }

        .nav-user {
          flex-shrink: 0;
        }

        .user-menu {
          position: relative;
        }

        .user-menu-trigger {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.4rem 0.75rem 0.4rem 0.4rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .user-menu-trigger:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: #e2e8f0;
        }

        .user-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          min-width: 200px;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          padding: 0.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s ease;
        }

        .user-menu:hover .user-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.625rem 0.75rem;
          font-size: 0.9rem;
          color: #94a3b8;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .dropdown-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .dropdown-item.danger:hover {
          background: rgba(244, 63, 94, 0.1);
          color: #f43f5e;
        }

        .dropdown-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 0.5rem 0;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 15, 28, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          font-size: 1rem;
          color: #94a3b8;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: rgba(59, 130, 246, 0.15);
          color: #ffffff;
        }

        .mobile-nav-link.danger:hover {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        @media (max-width: 1024px) {
          .nav-links.desktop,
          .nav-user.desktop {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}

import { useState } from "react";

export default function App() {
  return (
    <AuthProvider>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <AddSubscription />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage"
              element={
                <ProtectedRoute>
                  <ManageSubscriptions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <style>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
        }
      `}</style>
    </AuthProvider>
  );
}
