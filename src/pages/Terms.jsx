import React from 'react';

export default function Terms() {
    return (
        <div className="policy-page">
            <div className="policy-container">
                <h1 className="policy-title gradient-text">Terms and Conditions</h1>
                <div className="policy-content">
                    <p className="last-updated">Last Updated: October 2026</p>

                    <section>
                        <h2>1. Introduction</h2>
                        <p>Welcome to RenewSense. By accessing and using our website and services, you agree to be bound by the following Terms and Conditions. Please read them carefully.</p>
                    </section>

                    <section>
                        <h2>2. Use of Service</h2>
                        <p>Our service allows you to manage and track your SaaS subscriptions. You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
                    </section>

                    <section>
                        <h2>3. User Accounts</h2>
                        <p>To use our services, you must create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account.</p>
                    </section>

                    <section>
                        <h2>4. Subscriptions and Payments</h2>
                        <p>While RenewSense helps you track subscriptions, we do not process payments for third-party services. Any payment features on our site relate only to RenewSense premium services, if applicable.</p>
                    </section>

                    <section>
                        <h2>5. Disclaimer of Warranties</h2>
                        <p>Our services are provided "as is" and "as available". We do not warrant that the service will be uninterrupted, error-free, or completely secure.</p>
                    </section>
                </div>
            </div>
            <style>{`
        .policy-page {
          min-height: calc(100vh - 80px);
          padding: 4rem 1.5rem;
          display: flex;
          justify-content: center;
        }
        .policy-container {
          max-width: 800px;
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 3rem;
          backdrop-filter: blur(20px);
        }
        .policy-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .policy-content {
          color: #94a3b8;
          line-height: 1.7;
        }
        .last-updated {
          font-style: italic;
          margin-bottom: 2rem;
          color: #64748b;
        }
        .policy-content section {
          margin-bottom: 2rem;
        }
        .policy-content h2 {
          color: #e2e8f0;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .policy-content p {
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .policy-container {
            padding: 2rem;
          }
          .policy-title {
            font-size: 2rem;
          }
        }
      `}</style>
        </div>
    );
}
