import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../lib/api.js";

// Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
  </svg>
);

const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
  </svg>
);

const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" />
  </svg>
);

const RupeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12M6 8h12M6 13h8.5M21 21l-8-8M12 3v18" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export default function AddSubscription() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [form, setForm] = useState({
    softwareName: "",
    category: "",
    cost: "",
    billingCycle: "Monthly",
    customDays: "",
    startDate: "",
    renewalDate: "",
    paymentMethod: "",
    notes: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Communication",
    "Meetings",
    "Productivity",
    "Design",
    "Development",
    "Marketing",
    "Finance",
    "CRM",
    "Analytics",
    "Security",
    "Cloud Storage",
    "Project Management",
    "HR & Payroll",
    "Accounting",
    "E-commerce",
    "Other"
  ];

  const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "PayPal",
    "Bank Transfer",
    "Direct Debit",
    "Digital Wallet",
    "Corporate Account",
    "Invoice/Purchase Order",
    "Other"
  ];

  function update(key, val) {
    setForm({ ...form, [key]: val });

    // Auto-calculate renewal date with proper business logic
    if ((key === "startDate" || key === "billingCycle" || key === "customDays") && form.startDate) {
      const activeStartDate = key === "startDate" ? new Date(val) : new Date(form.startDate);
      const activeBillingCycle = key === "billingCycle" ? val : form.billingCycle;
      const activeCustomDays = key === "customDays" ? parseInt(val) : parseInt(form.customDays);

      let renewal = new Date(activeStartDate);

      if (activeBillingCycle === "Monthly") {
        renewal.setMonth(renewal.getMonth() + 1);
        if (activeStartDate.getDate() > 28 && renewal.getDate() < activeStartDate.getDate()) {
          renewal.setDate(0);
        }
      } else if (activeBillingCycle === "Yearly") {
        renewal.setFullYear(renewal.getFullYear() + 1);
        if (activeStartDate.getMonth() === 1 && activeStartDate.getDate() === 29) {
          if (!isLeapYear(renewal.getFullYear())) {
            renewal.setDate(28);
          }
        }
      } else if (activeBillingCycle === "Custom Days" && activeCustomDays) {
        renewal.setDate(renewal.getDate() + activeCustomDays);
      }

      setForm(prev => ({ ...prev, [key]: val, renewalDate: renewal.toISOString().split('T')[0] }));
    } else {
      setForm(prev => ({ ...prev, [key]: val }));
    }
  }

  // Helper function to check leap year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Required field validation
    if (!form.softwareName || !form.category || !form.cost || !form.startDate || !form.renewalDate) {
      setError("Please fill in all required fields");
      return;
    }

    // Cost validation
    const cost = Number(form.cost);
    if (cost < 0) {
      setError("Cost must be non-negative");
      return;
    }

    // Date validation
    const startDate = new Date(form.startDate);
    const renewalDate = new Date(form.renewalDate);
    const today = new Date();

    if (renewalDate <= startDate) {
      setError("Renewal date must be after start date");
      return;
    }
    if (startDate > today) {
      setError("Start date cannot be in the future");
      return;
    }
    if (renewalDate < today) {
      setError("Renewal date should be in the future");
      return;
    }

    // Business logic validation
    const timeDiff = renewalDate - startDate;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    if (form.billingCycle === "Monthly" && daysDiff > 35) {
      setError("For monthly billing, renewal should be approximately 30 days after start date");
      return;
    }
    if (form.billingCycle === "Yearly" && daysDiff < 330) {
      setError("For yearly billing, renewal should be approximately 365 days after start date");
      return;
    }
    if (form.billingCycle === "Custom Days" && !form.customDays) {
      setError("Please specify the number of days for the custom billing cycle");
      return;
    }

    setIsSubmitting(true);

    try {
      // Ensure auth token exists; backend will derive user from token
      if (!token) {
        setError("Authentication required. Please log in.");
        return;
      }

      const payload = {
        softwareName: form.softwareName,
        category: form.category,
        cost: Number(form.cost),
        billingCycle: form.billingCycle,
        startDate: form.startDate,
        renewalDate: form.renewalDate,
        paymentMethod: form.paymentMethod || undefined,
        notes: form.notes || undefined
      };

      if (form.billingCycle === "Custom Days") {
        payload.customDays = Number(form.customDays);
      }

      await api.post('/subscriptions', payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess("Subscription added successfully!");

      setTimeout(() => navigate("/manage"), 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to add subscription");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page add-page">
      <div className="container">
        {/* Back Link */}
        <Link to="/dashboard" className="back-link">
          <ArrowLeftIcon />
          Back to Dashboard
        </Link>

        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Add Subscription</h1>
            <p className="page-subtitle">
              Track a new SaaS subscription and never miss a renewal
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="form-card">
          {error && (
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
              </svg>
              {success}
            </div>
          )}

          <form onSubmit={onSubmit} className="subscription-form">
            <div className="form-grid">
              {/* Basic Info Section */}
              <div className="form-section">
                <h3 className="section-title">
                  <PackageIcon />
                  Basic Information
                </h3>

                <div className="form-group">
                  <label className="form-label">
                    Software Name <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <PackageIcon />
                    <input
                      type="text"
                      placeholder="e.g., Slack, Zoom, Notion"
                      value={form.softwareName}
                      onChange={(e) => update("softwareName", e.target.value)}
                      className="form-input with-icon"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Category <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <TagIcon />
                    <select
                      value={form.category}
                      onChange={(e) => update("category", e.target.value)}
                      className="form-input with-icon"
                    >
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="form-section">
                <h3 className="section-title">
                  <RupeeIcon />
                  Pricing Details
                </h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Cost (INR) <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <RupeeIcon />
                      <input
                        type="number"
                        placeholder="0"
                        min="0"
                        step="1"
                        value={form.cost}
                        onChange={(e) => update("cost", e.target.value)}
                        className="form-input with-icon"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Billing Cycle <span className="required">*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <select
                        value={form.billingCycle}
                        onChange={(e) => update("billingCycle", e.target.value)}
                        className="form-input"
                        style={{ flex: form.billingCycle === 'Custom Days' ? '1' : '100%' }}
                      >
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                        <option value="Custom Days">Custom Days</option>
                      </select>

                      {form.billingCycle === "Custom Days" && (
                        <input
                          type="number"
                          placeholder="Days (e.g. 84)"
                          min="1"
                          value={form.customDays}
                          onChange={(e) => update("customDays", e.target.value)}
                          className="form-input"
                          style={{ flex: '1', minWidth: '80px' }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dates Section */}
              <div className="form-section">
                <h3 className="section-title">
                  <CalendarIcon />
                  Important Dates
                </h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Start Date <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <CalendarIcon />
                      <input
                        type="date"
                        value={form.startDate}
                        onChange={(e) => update("startDate", e.target.value)}
                        className="form-input with-icon"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Renewal Date <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <CalendarIcon />
                      <input
                        type="date"
                        value={form.renewalDate}
                        onChange={(e) => update("renewalDate", e.target.value)}
                        className="form-input with-icon"
                      />
                    </div>
                    <p className="form-hint">Auto-calculated based on billing cycle</p>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="form-section">
                <h3 className="section-title">
                  <CreditCardIcon />
                  Payment Information
                </h3>

                <div className="form-group">
                  <label className="form-label">Payment Method</label>
                  <div className="input-wrapper">
                    <CreditCardIcon />
                    <select
                      value={form.paymentMethod}
                      onChange={(e) => update("paymentMethod", e.target.value)}
                      className="form-input with-icon"
                    >
                      <option value="">Select payment method</option>
                      {paymentMethods.map(method => (
                        <option key={method} value={method}>{method}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="form-section full-width">
                <h3 className="section-title">
                  <FileTextIcon />
                  Additional Notes
                </h3>

                <div className="form-group">
                  <label className="form-label">Notes</label>
                  <textarea
                    placeholder="Add any additional information about this subscription..."
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    className="form-input"
                    rows="4"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <Link to="/manage" className="btn btn-secondary">
                Cancel
              </Link>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    <SparklesIcon />
                    Add Subscription
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Tips Card */}
        <div className="tips-card">
          <h4 className="tips-title">
            <SparklesIcon />
            Pro Tips
          </h4>
          <ul className="tips-list">
            <li>Set the correct renewal date to get timely reminders</li>
            <li>Add notes about cancellation policies or special terms</li>
            <li>Categorize subscriptions for better expense tracking</li>
          </ul>
        </div>
      </div>

      <style>{`
        .add-page {
          padding-top: 1.5rem;
          padding-bottom: 3rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: #ffffff;
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

        /* Form Card */
        .form-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2rem;
          margin-bottom: 1.5rem;
        }

        .subscription-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-section.full-width {
          grid-column: 1 / -1;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .section-title svg {
          color: #3b82f6;
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

        .required {
          color: #f43f5e;
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
          pointer-events: none;
        }

        .form-input.with-icon {
          padding-left: 2.75rem;
        }

        .form-hint {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* Form Actions */
        .form-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Tips Card */
        .tips-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.05));
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .tips-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 1rem;
        }

        .tips-title svg {
          color: #f59e0b;
        }

        .tips-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tips-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.625rem;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .tips-list li::before {
          content: '•';
          color: #3b82f6;
          font-weight: bold;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-section.full-width {
            grid-column: 1;
          }
        }

        @media (max-width: 640px) {
          .form-card {
            padding: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column-reverse;
          }

          .form-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
