import React from 'react';

export default function Privacy() {
    return (
        <div className="policy-page">
            <div className="policy-container">
                <h1 className="policy-title gradient-text">Privacy Policy</h1>
                <div className="policy-content">
                    <p className="last-updated">Last Updated: October 2026</p>

                    <section>
                        <h2>1. Information We Collect</h2>
                        <p>We collect information you provide directly to us when you create an account, such as your name, email address, and subscription tracking details. We may also collect usage data to improve our services.</p>
                    </section>

                    <section>
                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to operate, maintain, and provide the features of the RenewSense platform. We may also use your information to send you technical notices, updates, and administrative messages.</p>
                    </section>

                    <section>
                        <h2>3. Data Security</h2>
                        <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
                    </section>

                    <section>
                        <h2>4. Sharing of Information</h2>
                        <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>
                    </section>

                    <section>
                        <h2>5. Your Rights</h2>
                        <p>You have the right to access, update, or entirely delete the personal information we have on you. You can do this from within your account settings or by contacting our support team.</p>
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
