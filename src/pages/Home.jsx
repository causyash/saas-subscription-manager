import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

// SVG Icons as Components
const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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

export default function Home() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  const features = [
    {
      icon: <BellIcon />,
      title: "Smart Reminders",
      description: "Never miss a renewal with intelligent notifications delivered at the perfect time."
    },
    {
      icon: <ChartIcon />,
      title: "Cost Analytics",
      description: "Visualize your spending patterns and identify opportunities to save money."
    },
    {
      icon: <UsersIcon />,
      title: "Team Collaboration",
      description: "Share subscription management with your team and assign roles easily."
    },
    {
      icon: <ShieldIcon />,
      title: "Secure Payments",
      description: "Enterprise-grade security for all your payment information and data."
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "₹2M+", label: "Money Saved" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9", label: "User Rating" }
  ];

  const steps = [
    {
      number: "01",
      icon: <ZapIcon />,
      title: "Connect",
      description: "Link your subscriptions in seconds with our easy import tools."
    },
    {
      number: "02",
      icon: <CalendarIcon />,
      title: "Track",
      description: "Monitor renewal dates and costs in one beautiful dashboard."
    },
    {
      number: "03",
      icon: <CreditCardIcon />,
      title: "Save",
      description: "Get alerts before renewals and optimize your spending."
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      features: ["Up to 5 subscriptions", "Basic reminders", "Email notifications", "Mobile app access"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "₹699",
      period: "per month",
      description: "Best for professionals",
      features: ["Unlimited subscriptions", "Advanced analytics", "SMS reminders", "Team collaboration", "API access", "Priority support"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹3999",
      period: "per month",
      description: "For large organizations",
      features: ["Everything in Pro", "SSO & SAML", "Custom integrations", "Dedicated support", "SLA guarantee", "Audit logs"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-effects">
          <div className="hero-orb orb-1"></div>
          <div className="hero-orb orb-2"></div>
          <div className="hero-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">✨</span>
              <span>Trusted by 10,000+ teams worldwide</span>
            </div>
            <h1 className="hero-title">
              Never Miss a{" "}
              <span className="gradient-text">Renewal</span>{" "}
              Again
            </h1>
            <p className="hero-subtitle">
              Track all your SaaS subscriptions, get smart renewal reminders, and save money
              with intelligent analytics. The subscription management platform that pays for itself.
            </p>
            <div className="hero-cta">
              <button onClick={handleGetStarted} className="btn btn-primary btn-lg">
                Get Started Free
                <ArrowRightIcon />
              </button>
              <Link to="/login" className="btn btn-secondary btn-lg">
                Try Demo
              </Link>
            </div>
            <div className="hero-trust">
              <p>No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-subtitle">
              Powerful features to help you take control of your subscriptions
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Get started in minutes, not hours
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your needs
            </p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-header">
                  <h3 className="pricing-name">{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                  <p className="pricing-description">{plan.description}</p>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-lg`}
                  style={{ width: '100%' }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Take Control?</h2>
            <p className="cta-subtitle">
              Join thousands of users who have saved money and reduced subscription headaches.
            </p>
            <button onClick={handleGetStarted} className="btn btn-primary btn-lg">
              Start Managing Today
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="nav-brand gradient-text">RenewSense</span>
              <p>Smart subscription management for modern teams.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#">Integrations</a>
                <a href="#">API</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Security</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 RenewSense. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .home-page {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 6rem 0;
        }

        .hero-bg-effects {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          top: -200px;
          right: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          bottom: -100px;
          left: -100px;
          animation-delay: -4s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          top: 50%;
          left: 30%;
          animation-delay: -2s;
          opacity: 0.2;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .badge-icon {
          font-size: 1rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .hero-trust {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        /* Features Section */
        .features-section {
          padding: 6rem 0;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 1rem;
          color: #3b82f6;
          margin-bottom: 1.5rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Stats Section */
        .stats-section {
          padding: 4rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .stat-item .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-item .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* How It Works Section */
        .how-it-works-section {
          padding: 6rem 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
        }

        .steps-grid::before {
          content: '';
          position: absolute;
          top: 60px;
          left: 20%;
          right: 20%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          z-index: 0;
        }

        .step-card {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .step-number {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .step-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          color: #3b82f6;
          margin: 0 auto 1.5rem;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .step-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Pricing Section */
        .pricing-section {
          padding: 6rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .pricing-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
        }

        .pricing-card.popular {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.05);
          transform: scale(1.05);
        }

        .pricing-card.popular:hover {
          border-color: rgba(59, 130, 246, 0.7);
          transform: scale(1.05) translateY(-4px);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 1rem;
          border-radius: 9999px;
        }

        .pricing-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .pricing-price {
          margin-bottom: 0.5rem;
        }

        .pricing-price .price {
          font-size: 3rem;
          font-weight: 800;
        }

        .pricing-price .period {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .pricing-description {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
        }

        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .pricing-features li svg {
          color: var(--success);
          flex-shrink: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 4rem 0;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 2rem;
          padding: 4rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-subtitle {
          color: var(--text-secondary);
          font-size: 1.125rem;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Footer */
        .footer {
          padding: 4rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-brand p {
          color: var(--text-secondary);
          margin-top: 1rem;
          max-width: 300px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .footer-column h4 {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .footer-column a {
          display: block;
          color: var(--text-secondary);
          padding: 0.35rem 0;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .footer-column a:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .steps-grid {
            grid-template-columns: 1fr;
          }
          
          .steps-grid::before {
            display: none;
          }
          
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          
          .pricing-card.popular {
            transform: none;
          }
          
          .pricing-card.popular:hover {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .cta-card {
            padding: 2rem;
          }
          
          .cta-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
