import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M12 6h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /><path d="M8 6h.01" /><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    <rect width="16" height="20" x="4" y="2" rx="2" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export default function Payment() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: <CreditCardIcon />, description: "Pay with Visa, Mastercard, etc." },
    { id: "upi", name: "UPI", icon: <SmartphoneIcon />, description: "Google Pay, PhonePe, Paytm" },
    { id: "wallet", name: "Wallet", icon: <WalletIcon />, description: "Paytm, Amazon Pay, etc." },
    { id: "netbanking", name: "Net Banking", icon: <BuildingIcon />, description: "All major banks supported" }
  ];

  const onPay = async (e) => {
    e.preventDefault();
    if (!amount) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 2000);
  };

  const txnId = "TXN-" + Date.now();

  return (
    <div className="page payment-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center">
          <h1 className="page-title">Make a Payment</h1>
          <p className="page-subtitle">
            Secure payment processing for your subscriptions
          </p>
        </div>

        {/* Payment Card */}
        <div className="payment-card">
          {step === 1 && (
            <>
              {/* Progress Steps */}
              <div className="payment-steps">
                <div className="step active">
                  <div className="step-number">1</div>
                  <span>Amount</span>
                </div>
                <div className="step-line"></div>
                <div className="step">
                  <div className="step-number">2</div>
                  <span>Confirm</span>
                </div>
              </div>

              <form onSubmit={onPay} className="payment-form">
                {/* Amount Section */}
                <div className="amount-section">
                  <label className="section-label">Payment Amount</label>
                  <div className="amount-input-wrapper">
                    <span className="currency">₹</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      min="1"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="amount-input"
                      required
                    />
                  </div>
                  <p className="amount-hint">Enter the amount you want to pay</p>
                </div>

                {/* Payment Method Section */}
                <div className="method-section">
                  <label className="section-label">Select Payment Method</label>
                  <div className="methods-grid">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <div className="method-icon">{method.icon}</div>
                        <div className="method-info">
                          <span className="method-name">{method.name}</span>
                          <span className="method-desc">{method.description}</span>
                        </div>
                        <div className="method-check">
                          {selectedMethod === method.id && (
                            <div className="check-icon">
                              <CheckCircleIcon />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Badge */}
                <div className="security-badge">
                  <LockIcon />
                  <span>Secure 256-bit SSL encrypted payment</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg pay-btn"
                  disabled={!amount || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <span className="spinner"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay ₹{amount || "0.00"}
                      <ArrowRightIcon />
                    </>
                  )}
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <div className="success-section">
              <div className="success-icon">
                <CheckCircleIcon />
              </div>
              <h2 className="success-title">Payment Successful!</h2>
              <p className="success-message">
                Your payment of <strong>₹{amount}</strong> has been processed successfully.
              </p>

              <div className="transaction-details">
                <div className="detail-row">
                  <span>Transaction ID</span>
                  <span className="detail-value">{txnId}</span>
                </div>
                <div className="detail-row">
                  <span>Payment Method</span>
                  <span className="detail-value">
                    {paymentMethods.find(m => m.id === selectedMethod)?.name}
                  </span>
                </div>
                <div className="detail-row">
                  <span>Date & Time</span>
                  <span className="detail-value">
                    {new Date().toLocaleString()}
                  </span>
                </div>
                <div className="detail-row total">
                  <span>Amount Paid</span>
                  <span className="detail-value">₹{amount}</span>
                </div>
              </div>

              <div className="success-actions">
                <button className="btn btn-secondary">
                  <DownloadIcon />
                  Download Receipt
                </button>
                <Link to="/manage" className="btn btn-primary">
                  View Subscriptions
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="trust-badge">
            <ShieldCheckIcon />
            <span>PCI DSS Compliant</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <LockIcon />
            <span>256-bit Encryption</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <CheckCircleIcon />
            <span>Instant Confirmation</span>
          </div>
        </div>
      </div>

      <style>{`
        .payment-page {
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

        .text-center {
          text-align: center;
        }

        /* Payment Card */
        .payment-card {
          max-width: 600px;
          margin: 0 auto 2rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2rem;
        }

        /* Payment Steps */
        .payment-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.875rem;
        }

        .step.active {
          color: #3b82f6;
        }

        .step-number {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .step.active .step-number {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
          color: white;
        }

        .step-line {
          width: 60px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Payment Form */
        .payment-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 0.75rem;
        }

        /* Amount Section */
        .amount-section {
          text-align: center;
        }

        .amount-input-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .currency {
          font-size: 2rem;
          font-weight: 700;
          color: #64748b;
        }

        .amount-input {
          width: 200px;
          background: none;
          border: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          outline: none;
          transition: border-color 0.2s;
        }

        .amount-input:focus {
          border-color: #3b82f6;
        }

        .amount-input::placeholder {
          color: #334155;
        }

        .amount-hint {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }

        /* Methods Grid */
        .methods-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .method-card {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .method-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .method-card.selected {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .method-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.625rem;
          color: #64748b;
        }

        .method-card.selected .method-icon {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .method-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .method-name {
          font-weight: 600;
          color: #e2e8f0;
          font-size: 0.9rem;
        }

        .method-desc {
          font-size: 0.75rem;
          color: #64748b;
        }

        .method-check {
          width: 24px;
          height: 24px;
        }

        .method-check svg {
          width: 100%;
          height: 100%;
          color: #3b82f6;
        }

        /* Security Badge */
        .security-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 0.5rem;
          font-size: 0.8rem;
          color: #10b981;
        }

        .security-badge svg {
          width: 14px;
          height: 14px;
        }

        /* Pay Button */
        .pay-btn {
          width: 100%;
          justify-content: center;
        }

        /* Success Section */
        .success-section {
          text-align: center;
          padding: 1rem 0;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: rgba(16, 185, 129, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
        }

        .success-icon svg {
          width: 48px;
          height: 48px;
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .success-message {
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }

        .success-message strong {
          color: #ffffff;
        }

        /* Transaction Details */
        .transaction-details {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 0.75rem;
          padding: 1.25rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 0.625rem 0;
          font-size: 0.875rem;
          color: #94a3b8;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .detail-row:last-child {
          border-bottom: none;
        }

        .detail-row.total {
          margin-top: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-weight: 600;
          color: #ffffff;
        }

        .detail-value {
          color: #e2e8f0;
          font-weight: 500;
        }

        .detail-row.total .detail-value {
          color: #10b981;
          font-size: 1.125rem;
        }

        /* Success Actions */
        .success-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        /* Trust Badges */
        .trust-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #64748b;
        }

        .trust-badge svg {
          width: 18px;
          height: 18px;
          color: #10b981;
        }

        .trust-divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .payment-card {
            padding: 1.5rem;
          }

          .methods-grid {
            grid-template-columns: 1fr;
          }

          .amount-input {
            font-size: 2rem;
            width: 150px;
          }

          .currency {
            font-size: 1.5rem;
          }

          .success-actions {
            flex-direction: column;
          }

          .success-actions .btn {
            width: 100%;
            justify-content: center;
          }

          .trust-badges {
            flex-direction: column;
            gap: 1rem;
          }

          .trust-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
