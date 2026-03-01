import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";

// Icons
const RupeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12" /><path d="M6 8h12" /><path d="M12 3v13" /><path d="M12 13a2.5 2.5 0 0 0 2.5 2.5H18" /><path d="M12 16a2.5 2.5 0 0 1-2.5 2.5H6" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
  </svg>
);

const TrendingDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="M12 5v14" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function Dashboard() {
  const { user } = useAuth();
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tabTransition, setTabTransition] = useState(false);

  // Fetch user subscriptions on component mount
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        setLoading(true);
        // In a real app, this would fetch from your API
        // For now, we'll simulate with empty array for new users
        setUserSubscriptions([]);
      } catch (err) {
        setError("Failed to load subscriptions");
        console.error("Error fetching subscriptions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  // Calculate real stats based on user data

  // Calculate real stats based on user data
  const stats = [
    {
      title: "Monthly Spend",
      value: userSubscriptions.length > 0
        ? `₹${userSubscriptions.reduce((sum, sub) => {
          const cost = parseFloat(sub.cost || 0);
          const monthlyCost = sub.billingCycle === "Yearly" ? cost / 12 : cost;
          return sum + monthlyCost;
        }, 0).toFixed(0)}`
        : "₹0",
      change: userSubscriptions.length > 0 ? "Your actual spending" : "No subscriptions yet",
      trend: userSubscriptions.length > 0 ? "neutral" : "neutral",
      icon: <RupeeIcon />,
      color: "blue"
    },
    {
      title: "Active Subscriptions",
      value: userSubscriptions.length.toString(),
      change: userSubscriptions.length > 0 ? `${userSubscriptions.length} active services` : "Get started by adding your first subscription",
      trend: userSubscriptions.length > 0 ? "neutral" : "neutral",
      icon: <CreditCardIcon />,
      color: userSubscriptions.length > 0 ? "green" : "gray"
    },
    {
      title: "Upcoming Renewals",
      value: userSubscriptions.filter(s => {
        const renewalDate = new Date(s.renewalDate);
        const today = new Date();
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        return renewalDate >= today && renewalDate <= nextWeek;
      }).length.toString(),
      change: userSubscriptions.length > 0 ? "This week" : "No upcoming renewals",
      trend: "neutral",
      icon: <CalendarIcon />,
      color: "amber"
    },
    {
      title: "Annual Savings Potential",
      value: userSubscriptions.length > 0
        ? `₹${userSubscriptions.filter(s => s.billingCycle === "Monthly").reduce((sum, sub) => sum + (parseFloat(sub.cost || 0) * 2), 0).toFixed(0)}`
        : "₹0",
      change: userSubscriptions.length > 0
        ? "Switch monthly to annual billing"
        : "Add subscriptions to see savings potential",
      trend: "up",
      icon: <TrendingDownIcon />,
      color: userSubscriptions.length > 0 ? "success" : "gray"
    }
  ];

  // Get upcoming renewals from user data
  const upcomingRenewals = userSubscriptions
    .filter(s => {
      const renewalDate = new Date(s.renewalDate);
      const today = new Date();
      const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      return renewalDate >= today && renewalDate <= nextWeek;
    })
    .slice(0, 3)
    .map(sub => ({
      name: sub.softwareName,
      date: formatDate(sub.renewalDate),
      amount: `₹${sub.cost}`,
      urgent: isUrgentRenewal(sub.renewalDate)
    }));

  // Get recent activity from user data
  const recentActivity = userSubscriptions
    .slice(0, 3)
    .map(sub => ({
      action: "Added",
      item: `${sub.softwareName} (${sub.category})`,
      time: getTimeAgo(sub.startDate)
    }));

  // Helper functions
  function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";

    const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    if (diffDays <= 7) return `In ${diffDays} days`;
    return date.toLocaleDateString();
  }

  function isUrgentRenewal(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const diffDays = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    return diffDays <= 3;
  }

  function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  }

  return (
    <div className="page dashboard-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div className="welcome-section">
            <h1 className="page-title">
              Welcome back, {user?.name?.split(' ')[0] || 'User'}! 👋
            </h1>
            <p className="page-subtitle">
              Here's what's happening with your subscriptions today.
            </p>
          </div>
          <div className="header-actions">
            <Link to="/add" className="btn btn-primary">
              <PlusIcon />
              Add Subscription
            </Link>
            <Link to="/analytics" className="btn btn-secondary">
              <ChartIcon />
              View Analytics
            </Link>
          </div>
        </div>

        {/* Welcome Message for New Users */}
        {userSubscriptions.length === 0 && (
          <div className="card mb-2" style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>
            <div className="card-content text-center py-3">
              <div className="mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-white mb-1">Welcome to Your Subscription Dashboard!</h2>
                <p className="text-gray-400 text-xs max-w-xl mx-auto">
                  Get started by adding your first subscription to track your software expenses and manage renewals.
                </p>
              </div>
              <Link to="/add" className="btn btn-primary inline-flex items-center text-sm py-1.5 px-3">
                <PlusIcon />
                Add Your First Subscription
              </Link>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className={`stat-icon ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.title}</div>
                <div className={`stat-trend ${stat.trend}`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Content Grid */}
        <div className="dashboard-grid tab-transition-enter-active">
          {/* Upcoming Renewals */}
          <div className="dashboard-card card-fade-in">
            <div className="card-header">
              <h3 className="card-title">
                <BellIcon />
                Upcoming Renewals
              </h3>
              {userSubscriptions.length > 0 && (
                <Link to="/manage" className="card-link">
                  View all
                  <ArrowRightIcon />
                </Link>
              )}
            </div>
            <div className="renewals-list">
              {upcomingRenewals.length > 0 ? (
                upcomingRenewals.map((renewal, index) => (
                  <div key={index} className={`renewal-item ${renewal.urgent ? 'urgent' : ''}`}>
                    <div className="renewal-info">
                      <div className="renewal-name">{renewal.name}</div>
                      <div className="renewal-date">
                        <ClockIcon />
                        {renewal.date}
                      </div>
                    </div>
                    <div className="renewal-amount">{renewal.amount}</div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-2">
                    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">
                    {userSubscriptions.length === 0
                      ? "Add subscriptions to see upcoming renewals"
                      : "No upcoming renewals this week"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Financial Insights */}
          <div className="dashboard-card card-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="card-header">
              <h3 className="card-title">
                <ChartIcon />
                Financial Insights
              </h3>
            </div>
            <div className="activity-list">
              {userSubscriptions.length > 0 ? (
                <>
                  <div className="activity-item">
                    <div className="activity-badge bg-blue-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="activity-info">
                      <div className="activity-text">
                        <span className="action">Savings Opportunity</span>{" "}
                        <span className="item">Switch {userSubscriptions.filter(s => s.billingCycle === "Monthly").length} monthly subscriptions to annual billing</span>
                      </div>
                      <div className="activity-time text-green-400">Potential savings: ₹{userSubscriptions.filter(s => s.billingCycle === "Monthly").length * 100}/year</div>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-badge bg-green-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="activity-info">
                      <div className="activity-text">
                        <span className="action">Healthy Portfolio</span>{" "}
                        <span className="item">{[...new Set(userSubscriptions.map(s => s.category))].length} categories of essential tools</span>
                      </div>
                      <div className="activity-time text-green-400">Good diversification achieved</div>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-badge bg-amber-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="activity-info">
                      <div className="activity-text">
                        <span className="action">Renewal Alert</span>{" "}
                        <span className="item">{upcomingRenewals.length} subscriptions renew this week</span>
                      </div>
                      <div className="activity-time text-amber-400">Review before renewal</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-2">
                    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">Add subscriptions to see personalized financial insights</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-card card-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="card-header">
              <h3 className="card-title">
                <ChartIcon />
                Recent Activity
              </h3>
            </div>
            <div className="activity-list">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className={`activity-badge ${activity.action.toLowerCase()}`}>
                      {activity.action[0]}
                    </div>
                    <div className="activity-info">
                      <div className="activity-text">
                        <span className="action">{activity.action}</span>{" "}
                        <span className="item">{activity.item}</span>
                      </div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-2">
                    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">
                    {userSubscriptions.length === 0
                      ? "Add subscriptions to see activity history"
                      : "No recent activity to display"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="dashboard-card tips-card card-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="card-header">
              <h3 className="card-title">💡 Quick Tips</h3>
            </div>
            <div className="tips-list">
              <div className="tip-item">
                <div className="tip-icon">1</div>
                <p>Set up renewal reminders to avoid unexpected charges</p>
              </div>
              <div className="tip-item">
                <div className="tip-icon">2</div>
                <p>Review your subscriptions monthly to identify unused services</p>
              </div>
              <div className="tip-item">
                <div className="tip-icon">3</div>
                <p>Consider annual billing for discounts up to 20%</p>
              </div>
            </div>
          </div>

          {/* Spending Overview */}
          <div className="dashboard-card chart-card graph-pop-in">
            <div className="card-header">
              <h3 className="card-title">
                <ChartIcon />
                Spending Overview
              </h3>
              <select className="form-input form-input-sm">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="chart-placeholder">
              <div className="chart-bars">
                {[65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 40, 95].map((height, i) => (
                  <div
                    key={i}
                    className="chart-bar"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="chart-labels">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Smooth Transitions */
        .dashboard-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }
        
        .tab-transition-enter {
          opacity: 0;
          transform: translateY(10px);
        }
        
        .tab-transition-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.4s ease-out;
        }
        
        .card-fade-in {
          animation: cardFadeIn 0.6s ease-out forwards;
        }
        
        .graph-pop-in {
          animation: graphPopIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .text-appear {
          animation: textAppear 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        @keyframes cardFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        
        @keyframes graphPopIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          70% {
            opacity: 1;
            transform: scale(1.02) translateY(-2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes textAppear {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .welcome-section {
          flex: 1;
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

        .header-actions {
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          font-size: 0.8125rem;
          white-space: nowrap;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
        }

        .stat-icon.blue {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .stat-icon.green {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .stat-icon.amber {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .stat-icon.rose {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        .stat-content {
          flex: 1;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .stat-trend {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          display: inline-block;
        }

        .stat-trend.up {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .stat-trend.down {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        .stat-trend.neutral {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        /* Dashboard Grid */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .dashboard-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ffffff;
        }

        .card-title svg {
          color: #64748b;
          width: 18px;
          height: 18px;
        }

        .card-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #3b82f6;
          font-weight: 500;
        }

        .card-link:hover {
          color: #60a5fa;
        }

        /* Renewals List */
        .renewals-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .renewal-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 0.75rem;
          transition: all 0.2s;
        }

        .renewal-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
        }

        .renewal-item.urgent {
          border-color: rgba(244, 63, 94, 0.3);
          background: rgba(244, 63, 94, 0.05);
        }

        .renewal-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .renewal-name {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .renewal-date {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .renewal-date svg {
          width: 14px;
          height: 14px;
        }

        .renewal-amount {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.95rem;
        }

        /* Activity List */
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .activity-badge {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .activity-badge.added {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .activity-badge.renewed {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .activity-badge.cancelled {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        .activity-info {
          flex: 1;
        }

        .activity-text {
          font-size: 0.9rem;
          color: #e2e8f0;
        }

        .activity-text .action {
          font-weight: 600;
        }

        .activity-time {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.125rem;
        }

        /* Tips Card */
        .tips-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.05));
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tip-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
        }

        .tip-icon {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .tip-item p {
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.5;
          margin: 0;
        }

        /* Chart Card */
        .chart-card .card-header {
          margin-bottom: 1.5rem;
        }

        .form-input-sm {
          padding: 0.375rem 0.75rem;
          font-size: 0.8rem;
          width: auto;
        }

        .chart-placeholder {
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 0.5rem;
          height: 140px;
          padding-bottom: 0.5rem;
        }

        .chart-bar {
          flex: 1;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 4px 4px 0 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .chart-bar:hover {
          opacity: 1;
        }

        .chart-bar:nth-child(4n) {
          opacity: 1;
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .page-header {
            flex-direction: column;
            gap: 1rem;
          }

          .header-actions {
            width: 100%;
          }

          .header-actions .btn {
            flex: 1;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
