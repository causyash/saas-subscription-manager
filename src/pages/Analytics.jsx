import { useState, useEffect } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ScatterChart, Scatter } from "recharts";
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
  const [adjustPct, setAdjustPct] = useState(0);
  const [resolution, setResolution] = useState("monthly");

  // Real data from user context
  const { user } = useAuth();
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/subscriptions/user');
        const subscriptions = Array.isArray(response.data?.data) ? response.data.data : [];
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

  const isActive = (s) => String(s?.status || "").toLowerCase() === "active";

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
      value: Array.isArray(userSubscriptions) ? userSubscriptions.filter(isActive).length.toString() : "0",
      change: Array.isArray(userSubscriptions) && userSubscriptions.length > 0
        ? `${userSubscriptions.filter(isActive).length} active services`
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

  // Generate monthly data based on user subscriptions (default to zeros if none)
  const paymentsData = (() => {
    const subs = Array.isArray(userSubscriptions) ? userSubscriptions : [];
    const today = new Date();
    let start, end;
    if (resolution === "daily") {
      start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29);
      end = today;
    } else if (resolution === "weekly") {
      start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7 * 11);
      end = today;
    } else if (resolution === "yearly") {
      start = new Date(today.getFullYear() - 4, 0, 1);
      end = new Date(today.getFullYear(), 11, 31);
    } else {
      start = new Date(today.getFullYear(), today.getMonth() - 5, 1);
      end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    }
    const events = [];
    subs.forEach((s) => {
      if (!isActive(s)) return;
      const cycle = String(s.billingCycle || "");
      const cost = parseFloat(s.cost || 0);
      let pay = new Date(s.startDate);
      if (Number.isNaN(pay.getTime())) return;
      if (cycle === "Monthly") {
        if (pay < start) {
          const monthsDiff = (start.getFullYear() - pay.getFullYear()) * 12 + (start.getMonth() - pay.getMonth());
          pay = new Date(pay.getFullYear(), pay.getMonth() + Math.max(0, monthsDiff), pay.getDate());
        }
        while (pay <= end) {
          events.push({ date: new Date(pay), amount: cost });
          pay = new Date(pay.getFullYear(), pay.getMonth() + 1, pay.getDate());
        }
      } else if (cycle === "Yearly") {
        while (pay <= end) {
          if (pay >= start) events.push({ date: new Date(pay), amount: cost });
          pay = new Date(pay.getFullYear() + 1, pay.getMonth(), pay.getDate());
        }
      } else if (cycle === "Custom Days" && s.customDays) {
        const stepDays = Math.max(1, parseInt(s.customDays));
        while (pay <= end) {
          if (pay >= start) events.push({ date: new Date(pay), amount: cost });
          pay = new Date(pay.getTime() + stepDays * 24 * 60 * 60 * 1000);
        }
      } else {
        if (pay >= start && pay <= end) events.push({ date: new Date(pay), amount: cost });
      }
    });
    events.sort((a, b) => a.date - b.date);
    if (resolution === "daily") {
      const byDay = {};
      events.forEach((e) => {
        const key = e.date.toISOString().slice(0, 10);
        if (!byDay[key]) byDay[key] = [];
        byDay[key].push(e);
      });
      const jittered = [];
      Object.keys(byDay).forEach((key) => {
        byDay[key].forEach((e, idx) => {
          const base = new Date(key + "T00:00:00").getTime();
          const ts = base + idx * 15 * 60 * 1000;
          jittered.push({ ts, amount: e.amount, label: key });
        });
      });
      const rangeDays = [];
      for (let d = new Date(start); d <= end; d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)) {
        rangeDays.push(d.toISOString().slice(0, 10));
      }
      return { type: "daily", points: jittered, domain: [new Date(start).getTime(), new Date(end).getTime()], labels: rangeDays };
    } else if (resolution === "weekly") {
      const weekSum = {};
      const weekLabel = {};
      const weekStart = (d) => {
        const date = new Date(d);
        const day = date.getDay();
        const diff = (day + 6) % 7;
        date.setDate(date.getDate() - diff);
        date.setHours(0, 0, 0, 0);
        return date;
      };
      events.forEach((e) => {
        const ws = weekStart(e.date);
        const key = ws.toISOString().slice(0, 10);
        weekSum[key] = (weekSum[key] || 0) + e.amount;
        const weekNumber = Math.floor((ws.getDate() - 1) / 7) + 1;
        weekLabel[key] = `W${weekNumber} ${ws.toLocaleString('default', { month: 'short' })}`;
      });
      const weeks = [];
      for (let i = 11; i >= 0; i--) {
        const w = weekStart(new Date(end.getFullYear(), end.getMonth(), end.getDate() - i * 7));
        const key = w.toISOString().slice(0, 10);
        weeks.push({ name: weekLabel[key] || `W${Math.floor((w.getDate() - 1) / 7) + 1} ${w.toLocaleString('default', { month: 'short' })}`, amount: Math.round(weekSum[key] || 0) });
      }
      return { type: "weekly", series: weeks };
    } else if (resolution === "yearly") {
      const yearSum = {};
      events.forEach((e) => {
        const y = e.date.getFullYear();
        yearSum[y] = (yearSum[y] || 0) + e.amount;
      });
      const years = [];
      for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
        years.push({ name: String(y), amount: Math.round(yearSum[y] || 0) });
      }
      return { type: "yearly", series: years };
    } else {
      const monthSum = {};
      events.forEach((e) => {
        const key = `${e.date.getFullYear()}-${e.date.getMonth()}`;
        monthSum[key] = (monthSum[key] || 0) + e.amount;
      });
      const months = [];
      for (let i = 5; i >= 0; i--) {
        const d = new Date(end.getFullYear(), end.getMonth() - i, 1);
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        months.push({ month: d.toLocaleString('default', { month: 'short' }), amount: Math.round(monthSum[key] || 0) });
      }
      return { type: "monthly", series: months };
    }
  })();

  const projectedSeries = paymentsData.type === "daily"
    ? paymentsData.points.map(p => ({ ts: p.ts, amount: Math.round(p.amount * (1 + (parseFloat(adjustPct) || 0) / 100)), label: p.label }))
    : paymentsData.type === "monthly"
      ? paymentsData.series.map(d => ({ ...d, amount: Math.round(d.amount * (1 + (parseFloat(adjustPct) || 0) / 100)) }))
      : paymentsData.series.map(d => ({ ...d, amount: Math.round(d.amount * (1 + (parseFloat(adjustPct) || 0) / 100)) }));

  const maxAxis = paymentsData.type === "daily"
    ? Math.max(300, ...paymentsData.points.map(p => p.amount), ...projectedSeries.map(p => p.amount))
    : Math.max(300, ...paymentsData.series.map(d => d.amount), ...projectedSeries.map(d => d.amount));

  const totalMonthlyCost = Array.isArray(userSubscriptions) ? userSubscriptions.reduce((sum, sub) => {
    if (!isActive(sub)) return sum;
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
            <select
              className="form-input"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              style={{ width: 'auto' }}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <input
              className="form-input"
              type="number"
              placeholder="What-if % (e.g., -10 for savings)"
              value={adjustPct}
              onChange={(e) => setAdjustPct(e.target.value)}
              style={{ width: '220px' }}
            />
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
            <div className="chart-content" style={{ height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                {paymentsData.type === "daily" ? (
                  <ScatterChart>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                    <XAxis type="number" dataKey="ts" domain={[paymentsData.domain[0], paymentsData.domain[1]]} tickFormatter={(ts) => new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <YAxis type="number" dataKey="amount" domain={[0, maxAxis]} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(v) => `₹${v}`} />
                    <Tooltip formatter={(val) => [`₹${val}`, 'Payment']} labelFormatter={(ts) => new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} contentStyle={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(255,255,255,0.08)' }} />
                    <Scatter name="Actual" data={paymentsData.points} fill="#3b82f6" />
                    <Scatter name="Projected" data={projectedSeries} fill="#8b5cf6" />
                  </ScatterChart>
                ) : (
                  <LineChart data={paymentsData.series}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey={paymentsData.type === "monthly" ? "month" : "name"} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <YAxis domain={[0, maxAxis]} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(v) => `₹${v}`} />
                    <Tooltip formatter={(val) => [`₹${val}`, 'Spend']} labelFormatter={(label) => label} contentStyle={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(255,255,255,0.08)' }} />
                    <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, stroke: '#8b5cf6', strokeWidth: 1 }} activeDot={{ r: 5 }} />
                    <Line type="monotone" data={projectedSeries} dataKey="amount" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 0 }} name="Projected" />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="chart-card">
            <div className="chart-header">
              <h3 className="chart-title">Spending by Category</h3>
            </div>
            <div className="chart-content">
              <div style={{ width: '100%', height: 220 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="amount"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      stroke="none"
                    >
                      {categoryData.map((cat, i) => (
                        <Cell key={`cell-${i}`} fill={cat.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(val, name) => [`₹${Math.round(val)}`, name]} contentStyle={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(255,255,255,0.08)' }} />
                  </PieChart>
                </ResponsiveContainer>
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
