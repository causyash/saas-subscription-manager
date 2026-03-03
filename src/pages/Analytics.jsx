import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../lib/api.js";

// Icons
const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);

const RupeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12M6 8h12M6 13h8.5M21 21l-8-8M12 3v18" />
  </svg>
);

const PieChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
  </svg>
);

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("6months");

  // Real data from user context
  const { user } = useAuth();
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/subscriptions/user');
        // Ensure response.data is an array
        const subscriptions = Array.isArray(response.data) ? response.data : [];
        setUserSubscriptions(subscriptions);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [user]);

  // Calculate real stats based on user data
  const stats = [
    {
      title: "Total Spent",
      value: Array.isArray(userSubscriptions) && userSubscriptions.length > 0
        ? `₹${userSubscriptions.reduce((sum, sub) => sum + parseFloat(sub.cost || 0), 0)}`
        : "₹0",
      change: Array.isArray(userSubscriptions) && userSubscriptions.length > 0 ? "Your actual spending" : "No subscriptions yet",
      trend: Array.isArray(userSubscriptions) && userSubscriptions.length > 0 ? "neutral" : "neutral",
      icon: <RupeeIcon />,
      color: "blue"
    },
    {
      title: "Monthly Average",
      value: Array.isArray(userSubscriptions) && userSubscriptions.length > 0
        ? `₹${(userSubscriptions.reduce((sum, sub) => {
          const cost = parseFloat(sub.cost || 0);
          const monthlyCost = sub.billingCycle === "Yearly" ? cost / 12 : cost;
          return sum + monthlyCost;
        }, 0)).toFixed(0)}`
        : "₹0",
      change: Array.isArray(userSubscriptions) && userSubscriptions.length > 0 ? "Based on your subscriptions" : "Add subscriptions to see average",
      trend: Array.isArray(userSubscriptions) && userSubscriptions.length > 0 ? "neutral" : "neutral",
      icon: <TrendingUpIcon />,
      color: "green"
    },
    {
      title: "Active Subscriptions",
      value: Array.isArray(userSubscriptions) ? userSubscriptions.filter(s => s.status === "Active").length.toString() : "0",
      change: Array.isArray(userSubscriptions) && userSubscriptions.length > 0
        ? `${userSubscriptions.filter(s => s.status === "Active").length} active services`
        : "Get started by adding subscriptions",
      trend: Array.isArray(userSubscriptions) && userSubscriptions.length > 0 ? "neutral" : "neutral",
      icon: <PieChartIcon />,
      color: Array.isArray(userSubscriptions) && userSubscriptions.length > 0 ? "purple" : "gray"
    },
    {
      title: "Upcoming Renewals",
      value: Array.isArray(userSubscriptions) ? userSubscriptions.filter(s => {
        const renewalDate = new Date(s.renewalDate);
        const today = new Date();
        const nextMonth = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
        return renewalDate >= today && renewalDate <= nextMonth;
      }).length.toString() : "0",
      change: "Next 30 days",
      trend: "neutral",
      icon: <CalendarIcon />,
      color: "amber"
    }
  ];

  // Calculate real category data
  const categoryData = Array.isArray(userSubscriptions) && userSubscriptions.length > 0
    ? Object.entries(
      userSubscriptions.reduce((acc, sub) => {
        acc[sub.category] = (acc[sub.category] || 0) + parseFloat(sub.cost || 0);
        return acc;
      }, {})
    ).map(([name, amount], index) => {
      const colors = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#64748b", "#ec4899"];
      const total = userSubscriptions.reduce((sum, sub) => sum + parseFloat(sub.cost || 0), 0);
      const percent = total > 0 ? Math.round((amount / total) * 100) : 0;
      return { name, amount, color: colors[index % colors.length], percent };
    })
    : [];

  // Real top subscriptions based on user data
  const topSubscriptions = Array.isArray(userSubscriptions) 
    ? userSubscriptions
      .sort((a, b) => parseFloat(b.cost || 0) - parseFloat(a.cost || 0))
      .slice(0, 5)
      .map(sub => ({
        name: sub.softwareName,
        cost: parseFloat(sub.cost || 0),
        change: "+0%" // Placeholder for actual change data
      }))
    : [];

  // Generate monthly data based on user subscriptions
  const monthlyData = Array.isArray(userSubscriptions) && userSubscriptions.length > 0
    ? (() => {
      const data = [];
      const today = new Date();
      for (let i = 5; i >= 0; i--) {
        const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const monthName = month.toLocaleString('default', { month: 'short' });

        // Calculate spending for this month
        const monthSpending = userSubscriptions
          .filter(sub => {
            const subDate = new Date(sub.renewalDate);
            return subDate.getMonth() === month.getMonth() &&
              subDate.getFullYear() === month.getFullYear() &&
              sub.status === "Active";
          })
          .reduce((sum, sub) => {
            const cost = parseFloat(sub.cost || 0);
            return sum + (sub.billingCycle === "Yearly" ? cost / 12 : cost);
          }, 0);

        data.push({ month: monthName, amount: Math.round(monthSpending) });
      }
      return data;
    })()
    : [];

  const totalMonthlyCost = Array.isArray(userSubscriptions) ? userSubscriptions.reduce((sum, sub) => {
    if (sub.status !== "Active") return sum;
    const cost = parseFloat(sub.cost || 0);
    if (sub.billingCycle === "Yearly") return sum + cost / 12;
    if (sub.billingCycle === "Custom Days" && sub.customDays) return sum + (cost / sub.customDays) * 30;
    return sum + cost;
  }, 0) : 0;

  return (
    <div className="page analytics-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Analytics</h1>
            <p className="page-subtitle">
              Track your subscription spending and identify savings opportunities
            </p>
          </div>
          <div className="header-actions">
            <select
              className="form-input"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              style={{ width: 'auto' }}
            >
              <option value="30days">Last 30 Days</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
            <button className="btn btn-secondary">
              <DownloadIcon />
              Export
            </button>
          </div>
        </div>

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
                  {stat.trend === "up" && <ArrowUpIcon />}
                  {stat.trend === "down" && <ArrowDownIcon />}
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          {/* Spending Trend Chart */}
          <div className="chart-card large">
            <div className="chart-header">
              <h3 className="chart-title">Spending Trend</h3>
              <div className="chart-legend">
                <span className="legend-item">
                  <span className="legend-dot" style={{ background: '#3b82f6' }}></span>
                  Monthly Spend
                </span>
              </div>
            </div>
            <div className="chart-content">
              <div className="trend-chart">
                <div className="chart-y-axis">
                  <span>₹300</span>
                  <span>₹200</span>
                  <span>₹100</span>
                  <span>₹0</span>
                </div>
                <div className="chart-bars-area">
                  <div className="chart-grid-lines">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="trend-bars">
                    {monthlyData.map((data, i) => (
                      <div key={i} className="trend-bar-wrapper">
                        <div
                          className="trend-bar"
                          style={{ height: `${(data.amount / 300) * 100}%` }}
                        >
                          <span className="bar-value">₹{data.amount}</span>
                        </div>
                        <span className="bar-label">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="chart-card">
            <div className="chart-header">
              <h3 className="chart-title">Spending by Category</h3>
            </div>
            <div className="chart-content">
              <div className="donut-chart">
                <svg viewBox="0 0 100 100" className="donut-svg">
                  {categoryData.reduce((acc, cat, i) => {
                    const prevPercent = categoryData.slice(0, i).reduce((sum, c) => sum + c.percent, 0);
                    const circumference = 2 * Math.PI * 40;
                    const offset = circumference - (cat.percent / 100) * circumference;
                    const rotation = (prevPercent / 100) * 360 - 90;

                    acc.push(
                      <circle
                        key={i}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={cat.color}
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform={`rotate(${rotation} 50 50)`}
                        style={{ transition: 'all 0.3s ease' }}
                      />
                    );
                    return acc;
                  }, [])}
                  <text x="50" y="45" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">
                    ₹{Math.round(totalMonthlyCost)}
                  </text>
                  <text x="50" y="58" textAnchor="middle" fill="#64748b" fontSize="8">
                    /month
                  </text>
                </svg>
              </div>
              <div className="category-legend">
                {categoryData.map((cat, i) => (
                  <div key={i} className="category-item">
                    <span className="category-dot" style={{ background: cat.color }}></span>
                    <span className="category-name">{cat.name}</span>
                    <span className="category-percent">{cat.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Subscriptions */}
          <div className="chart-card">
            <div className="chart-header">
              <h3 className="chart-title">Top Expenses</h3>
            </div>
            <div className="chart-content">
              <div className="top-subscriptions">
                {topSubscriptions.map((sub, i) => (
                  <div key={i} className="subscription-row">
                    <div className="sub-rank">{i + 1}</div>
                    <div className="sub-info">
                      <span className="sub-name">{sub.name}</span>
                    </div>
                    <div className="sub-cost">
                      <span className="cost-value">₹{sub.cost}</span>
                      <span className="cost-change">{sub.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights Card */}
          <div className="chart-card insights-card">
            <div className="chart-header">
              <h3 className="chart-title">💡 Insights</h3>
            </div>
            <div className="chart-content">
              {userSubscriptions.length > 0 ? (
                <div className="insights-list">
                  <div className="insight-item">
                    <div className="insight-icon">💡</div>
                    <div className="insight-text">
                      <strong>You have {userSubscriptions.filter(s => s.status === "Active").length} active subscriptions</strong>
                      <p>Costing you approximately ₹{Math.round(totalMonthlyCost)} per month</p>
                    </div>
                  </div>
                  <div className="insight-item">
                    <div className="insight-icon">🔍</div>
                    <div className="insight-text">
                      <strong>Check for duplicates</strong>
                      <p>You have {userSubscriptions.length} entries tracked on your account.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "1rem" }}>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>No data available to generate insights yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .analytics-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
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

        .stat-icon.purple {
          background: rgba(139, 92, 246, 0.15);
          color: #8b5cf6;
        }

        .stat-icon.amber {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
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
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .stat-trend.up {
          color: #10b981;
        }

        .stat-trend.down {
          color: #f43f5e;
        }

        .stat-trend.neutral {
          color: #94a3b8;
        }

        /* Charts Grid */
        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }

        .chart-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
        }

        .chart-card.large {
          grid-row: span 2;
        }

        .chart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .chart-legend {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* Trend Chart */
        .trend-chart {
          display: flex;
          height: 280px;
        }

        .chart-y-axis {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-right: 1rem;
          font-size: 0.75rem;
          color: #64748b;
          text-align: right;
        }

        .chart-bars-area {
          flex: 1;
          position: relative;
        }

        .chart-grid-lines {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .chart-grid-lines div {
          height: 1px;
          background: rgba(255, 255, 255, 0.05);
        }

        .trend-bars {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          padding: 0 0.5rem;
        }

        .trend-bar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .trend-bar {
          width: 40px;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 4px 4px 0 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .trend-bar:hover {
          opacity: 0.8;
        }

        .bar-value {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.7rem;
          color: #94a3b8;
          white-space: nowrap;
        }

        .bar-label {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Donut Chart */
        .donut-chart {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .donut-svg {
          width: 180px;
          height: 180px;
          /* Remove the rotation so chart renders normally */
        }

        .category-legend {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .category-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.875rem;
        }

        .category-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .category-name {
          flex: 1;
          color: #e2e8f0;
        }

        .category-percent {
          color: #64748b;
          font-weight: 500;
        }

        /* Top Subscriptions */
        .top-subscriptions {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .subscription-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 0.625rem;
        }

        .sub-rank {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
        }

        .sub-info {
          flex: 1;
        }

        .sub-name {
          font-weight: 500;
          color: #e2e8f0;
          font-size: 0.9rem;
        }

        .sub-cost {
          text-align: right;
        }

        .cost-value {
          display: block;
          font-weight: 600;
          color: #ffffff;
        }

        .cost-change {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Insights Card */
        .insights-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.05));
        }

        .insights-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .insight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
        }

        .insight-icon {
          font-size: 1.25rem;
          line-height: 1;
        }

        .insight-text strong {
          display: block;
          color: #e2e8f0;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .insight-text p {
          color: #94a3b8;
          font-size: 0.8rem;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .charts-grid {
            grid-template-columns: 1fr;
          }

          .chart-card.large {
            grid-row: span 1;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .page-header {
            flex-direction: column;
          }

          .header-actions {
            width: 100%;
          }

          .header-actions .btn,
          .header-actions select {
            flex: 1;
          }

          .trend-chart {
            height: 200px;
          }

          .trend-bar {
            width: 24px;
          }
        }
      `}</style>
    </div>
  );
}
