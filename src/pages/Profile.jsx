import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";

// Icons
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /><rect width="16" height="20" x="4" y="2" rx="2" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Profile() {
  const { user, updateUser, loading } = useAuth();
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notifications: {
      email: true,
      sms: false,
      push: true,
      marketing: false
    },
    preferences: {
      darkMode: true,
      language: "en",
      currency: "INR"
    }
  });

  // Sync form data with user data when it loads
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        company: user.company || "",
        notifications: {
          email: user.notifications?.email ?? true,
          sms: user.notifications?.sms ?? false,
          push: user.notifications?.push ?? true,
          marketing: user.notifications?.marketing ?? false
        },
        preferences: {
          darkMode: user.preferences?.darkMode ?? true,
          language: user.preferences?.language || "en",
          currency: user.preferences?.currency || "INR"
        }
      });
    }
  }, [user]); // Remove loading dependency to update immediately when user data arrives

  const handleSave = async () => {
    setIsSaving(true);
    setError("");

    try {
      await updateUser({
        name: formData.name,
        phone: formData.phone,
        company: formData.company,
        notifications: formData.notifications,
        preferences: formData.preferences
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      setError("Failed to update profile. Please try again.");
      console.error("Profile update error:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    { id: "general", label: "General", icon: <UserIcon /> },
    { id: "notifications", label: "Notifications", icon: <BellIcon /> },
    { id: "preferences", label: "Preferences", icon: <GlobeIcon /> },
    { id: "security", label: "Security", icon: <ShieldIcon /> }
  ];

  return (
    <div className="page profile-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Profile Settings</h1>
            <p className="page-subtitle">
              Manage your account settings and preferences
            </p>
          </div>
        </div>

        <div className="profile-layout">
          {/* Sidebar */}
          <div className="profile-sidebar">
            <div className="profile-card user-card">
              <div className="user-avatar-large">
                {formData.name.charAt(0).toUpperCase()}
              </div>
              <h3 className="user-name">{formData.name}</h3>
              <p className="user-email">{formData.email}</p>
              <span className="user-role">Pro Member</span>
            </div>

            <nav className="profile-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="profile-content">
            {loading && !user && (
              <div className="alert alert-info">
                <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading your profile...
              </div>
            )}

            {!loading && !user && (
              <div className="alert alert-error">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Unable to load profile data
              </div>
            )}

            {error && (
              <div className="alert alert-error">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {showSuccess && (
              <div className="alert alert-success">
                <CheckIcon />
                Changes saved successfully!
              </div>
            )}

            {/* General Tab */}
            {activeTab === "general" && (
              <div className="profile-card">
                <h3 className="card-title">General Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <div className="input-wrapper">
                      <UserIcon />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input with-icon"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <div className="input-wrapper">
                      <MailIcon />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input with-icon"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <div className="input-wrapper">
                      <PhoneIcon />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input with-icon"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <div className="input-wrapper">
                      <BuildingIcon />
                      <input
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="form-input with-icon"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="btn btn-primary"
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? <span className="spinner"></span> : "Save Changes"}
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="profile-card">
                <h3 className="card-title">Notification Preferences</h3>
                <p className="card-description">Choose how you want to be notified about your subscriptions</p>

                <div className="toggles-list">
                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>Email Notifications</h4>
                      <p>Receive renewal reminders and updates via email</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.email}
                        onChange={(e) => setFormData({
                          ...formData,
                          notifications: { ...formData.notifications, email: e.target.checked }
                        })}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>SMS Notifications</h4>
                      <p>Get text messages for critical renewal alerts</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.sms}
                        onChange={(e) => setFormData({
                          ...formData,
                          notifications: { ...formData.notifications, sms: e.target.checked }
                        })}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>Push Notifications</h4>
                      <p>Browser push notifications for real-time alerts</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.push}
                        onChange={(e) => setFormData({
                          ...formData,
                          notifications: { ...formData.notifications, push: e.target.checked }
                        })}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="toggle-item">
                    <div className="toggle-info">
                      <h4>Marketing Emails</h4>
                      <p>Receive tips, offers, and product updates</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={formData.notifications.marketing}
                        onChange={(e) => setFormData({
                          ...formData,
                          notifications: { ...formData.notifications, marketing: e.target.checked }
                        })}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="btn btn-primary"
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? <span className="spinner"></span> : "Save Preferences"}
                  </button>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <div className="profile-card">
                <h3 className="card-title">Preferences</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Language</label>
                    <select
                      value={formData.preferences.language}
                      onChange={(e) => setFormData({
                        ...formData,
                        preferences: { ...formData.preferences, language: e.target.value }
                      })}
                      className="form-input"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Currency</label>
                    <select
                      value={formData.preferences.currency}
                      onChange={(e) => setFormData({
                        ...formData,
                        preferences: { ...formData.preferences, currency: e.target.value }
                      })}
                      className="form-input"
                    >
                      <option value="INR">INR (₹) - Indian Rupee</option>
                      <option value="USD">USD ($) - US Dollar</option>
                      <option value="EUR">EUR (€) - Euro</option>
                      <option value="GBP">GBP (£) - British Pound</option>
                    </select>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="btn btn-primary"
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? <span className="spinner"></span> : "Save Preferences"}
                  </button>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <>
                <div className="profile-card">
                  <h3 className="card-title">Change Password</h3>
                  <div className="form-stack">
                    <div className="form-group">
                      <label className="form-label">Current Password</label>
                      <input type="password" className="form-input" placeholder="Enter current password" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">New Password</label>
                      <input type="password" className="form-input" placeholder="Enter new password" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Confirm New Password</label>
                      <input type="password" className="form-input" placeholder="Confirm new password" />
                    </div>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary">Update Password</button>
                  </div>
                </div>

                <div className="profile-card danger-zone">
                  <h3 className="card-title danger">Danger Zone</h3>
                  <p className="card-description">Once you delete your account, there is no going back. Please be certain.</p>
                  <button className="btn btn-danger">
                    <TrashIcon />
                    Delete Account
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        /* Alert Styles */
        .alert {
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        /* Animation */
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .alert-success {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
        }
        
        .alert-error {
          background: rgba(244, 63, 94, 0.15);
          border: 1px solid rgba(244, 63, 94, 0.3);
          color: #f43f5e;
        }
        
        .alert-info {
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
        }
        
        .profile-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #94a3b8;
          font-size: 1rem;
        }

        /* Layout */
        .profile-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 1.5rem;
        }

        /* Sidebar */
        .profile-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .profile-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .user-card {
          text-align: center;
        }

        .user-avatar-large {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: white;
        }

        .user-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .user-email {
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 0.75rem;
        }

        .user-role {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 9999px;
        }

        /* Profile Nav */
        .profile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          border-radius: 0.625rem;
          color: #94a3b8;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.03);
          color: #e2e8f0;
        }

        .nav-item.active {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .nav-item svg {
          width: 18px;
          height: 18px;
        }

        /* Profile Content */
        .profile-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .profile-content .profile-card {
          margin-bottom: 0;
        }

        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-title.danger {
          color: #f43f5e;
        }

        .card-description {
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        /* Form Grid */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .form-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #e2e8f0;
        }

        .input-wrapper {
          position: relative;
        }

        .input-wrapper > svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 18px;
          height: 18px;
        }

        .form-input.with-icon {
          padding-left: 2.75rem;
        }

        .card-actions {
          display: flex;
          justify-content: flex-end;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* Toggle Items */
        .toggles-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .toggle-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 0.75rem;
        }

        .toggle-info h4 {
          font-size: 0.95rem;
          font-weight: 500;
          color: #e2e8f0;
          margin-bottom: 0.25rem;
        }

        .toggle-info p {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          width: 48px;
          height: 26px;
          cursor: pointer;
        }

        .toggle-switch input {
          display: none;
        }

        .toggle-slider {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          transition: all 0.2s;
        }

        .toggle-slider::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .toggle-switch input:checked + .toggle-slider {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }

        .toggle-switch input:checked + .toggle-slider::after {
          transform: translateX(22px);
        }

        /* Danger Zone */
        .danger-zone {
          border-color: rgba(244, 63, 94, 0.3);
          background: rgba(244, 63, 94, 0.05);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .profile-layout {
            grid-template-columns: 1fr;
          }

          .profile-sidebar {
            flex-direction: row;
            overflow-x: auto;
          }

          .user-card {
            min-width: 200px;
          }

          .profile-nav {
            flex-direction: row;
            min-width: max-content;
          }

          .nav-item span {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .toggle-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
