import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../lib/api.js";

// Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="M12 5v14"/>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
  </svg>
);

const MoreHorizontalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
  </svg>
);

const RupeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12"/><path d="M6 8h12"/><path d="M12 3v13"/><path d="M12 13a2.5 2.5 0 0 0 2.5 2.5H18"/><path d="M12 16a2.5 2.5 0 0 1-2.5 2.5H6"/>
  </svg>
);

const ArrowUpDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>
  </svg>
);

const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
  </svg>
);

export default function ManageSubscriptions() {
  const { user } = useAuth();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("renewalDate");
  const [sortOrder, setSortOrder] = useState("asc");
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/subscriptions');
        setUserSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
        setUserSubscriptions([]);
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

  const categories = ["All", ...new Set(userSubscriptions.map(s => s.category))];

  const filtered = useMemo(() => {
    let result = userSubscriptions.filter((s) => {
      const matchesQuery = s.softwareName.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category && category !== "All" ? s.category === category : true;
      return matchesQuery && matchesCategory;
    });

    // Sort
    result.sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      
      if (sortBy === "renewalDate") {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      
      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    return result;
  }, [query, category, sortBy, sortOrder]);

  const colorForRenewal = (dateStr) => {
    const d = new Date(dateStr);
    const days = Math.ceil((d - new Date()) / (1000 * 60 * 60 * 24));
    if (days <= 1) return { color: "#f43f5e", bg: "rgba(244, 63, 94, 0.15)", label: "Critical" };
    if (days <= 3) return { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)", label: "Soon" };
    if (days <= 7) return { color: "#3b82f6", bg: "rgba(59, 130, 246, 0.15)", label: "Upcoming" };
    return { color: "#10b981", bg: "rgba(16, 185, 129, 0.15)", label: "Active" };
  };

  const onDelete = (id) => {
    const ok = confirm("Are you sure you want to delete this subscription?");
    if (ok) {
      alert("Deleted subscription " + id);
    }
  };

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const totalMonthly = filtered
    .filter(s => s.status === "Active")
    .reduce((sum, s) => {
      const cost = parseFloat(s.cost || 0);
      const monthlyCost = s.billingCycle === "Yearly" ? cost / 12 : cost;
      return sum + monthlyCost;
    }, 0);

  return (
    <div className="page manage-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Subscriptions</h1>
            <p className="page-subtitle">
              Manage and track all your SaaS subscriptions in one place
            </p>
          </div>
          <Link to="/add" className="btn btn-primary">
            <PlusIcon />
            Add Subscription
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-value">{filtered.length}</span>
            <span className="stat-label">Total Subscriptions</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">₹{totalMonthly.toFixed(0)}</span>
            <span className="stat-label">Monthly Cost</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">₹{(totalMonthly * 12).toFixed(0)}</span>
            <span className="stat-label">Yearly Cost</span>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="filters-bar">
          <div className="search-box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search subscriptions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-group">
            <div className="filter-select-wrapper">
              <FilterIcon />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="filter-select"
              >
                <option value="">All Categories</option>
                {categories.filter(c => c !== "All").map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <button 
              className="sort-btn"
              onClick={() => toggleSort("renewalDate")}
            >
              <ArrowUpDownIcon />
              Sort by Date
            </button>
          </div>
        </div>

        {/* Subscriptions Table */}
        {filtered.length > 0 ? (
          <div className="table-container">
            <table className="subscriptions-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Category</th>
                  <th>Cost</th>
                  <th>Renewal Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => {
                  const renewalStatus = colorForRenewal(s.renewalDate);
                  return (
                    <tr key={s.id}>
                      <td>
                        <div className="service-cell">
                          <div className="service-icon">
                            {s.softwareName.charAt(0)}
                          </div>
                          <div className="service-info">
                            <div className="service-name">{s.softwareName}</div>
                            <div className="service-cycle">{s.billingCycle}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="category-badge">{s.category}</span>
                      </td>
                      <td>
                        <div className="cost-cell">
                          <RupeeIcon />
                          <span>₹{s.cost}</span>
                          <span className="cycle">/{s.billingCycle.toLowerCase().slice(0, -2)}</span>
                        </div>
                      </td>
                      <td>
                        <div className="renewal-cell">
                          <CalendarIcon />
                          <span>{new Date(s.renewalDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          <span 
                            className="renewal-badge"
                            style={{ 
                              color: renewalStatus.color, 
                              backgroundColor: renewalStatus.bg 
                            }}
                          >
                            {renewalStatus.label}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className={`status-badge ${s.status.toLowerCase()}`}>
                          {s.status}
                        </span>
                      </td>
                      <td>
                        <div className="actions-cell">
                          <button className="action-btn edit" title="Edit">
                            <EditIcon />
                          </button>
                          <button 
                            className="action-btn delete" 
                            title="Delete"
                            onClick={() => onDelete(s.id)}
                          >
                            <TrashIcon />
                          </button>
                          <button className="action-btn more" title="More">
                            <MoreHorizontalIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <PackageIcon />
            </div>
            <h3 className="empty-state-title">No subscriptions found</h3>
            <p className="empty-state-text">
              {query || category 
                ? "Try adjusting your search or filters" 
                : "Start by adding your first subscription to track"}
            </p>
            {!query && !category && (
              <Link to="/add" className="btn btn-primary">
                <PlusIcon />
                Add Your First Subscription
              </Link>
            )}
          </div>
        )}

        {/* Legend */}
        <div className="legend-bar">
          <span className="legend-title">Renewal Status:</span>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: '#f43f5e' }}></span>
            <span>Critical (1 day)</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: '#f59e0b' }}></span>
            <span>Soon (3 days)</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: '#3b82f6' }}></span>
            <span>Upcoming (7 days)</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: '#10b981' }}></span>
            <span>Active</span>
          </div>
        </div>
      </div>

      <style>{`
        .manage-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
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

        /* Stats Bar */
        .stats-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-item .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }

        .stat-item .stat-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* Filters Bar */
        .filters-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 280px;
          padding: 0.625rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
        }

        .search-box svg {
          color: #64748b;
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
        }

        .search-input::placeholder {
          color: #64748b;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .filter-select-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 0.875rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
        }

        .filter-select-wrapper svg {
          color: #64748b;
          width: 16px;
          height: 16px;
        }

        .filter-select {
          background: none;
          border: none;
          color: #e2e8f0;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
        }

        .filter-select option {
          background: #0f172a;
        }

        .sort-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 0.875rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          color: #e2e8f0;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sort-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .sort-btn svg {
          width: 16px;
          height: 16px;
        }

        /* Table */
        .table-container {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .subscriptions-table {
          width: 100%;
          border-collapse: collapse;
        }

        .subscriptions-table thead {
          background: rgba(0, 0, 0, 0.2);
        }

        .subscriptions-table th {
          padding: 1rem 1.25rem;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
        }

        .subscriptions-table td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.9rem;
        }

        .subscriptions-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        .subscriptions-table tr:last-child td {
          border-bottom: none;
        }

        /* Service Cell */
        .service-cell {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .service-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 0.625rem;
          font-weight: 700;
          font-size: 1rem;
          color: white;
        }

        .service-info {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .service-name {
          font-weight: 600;
          color: #ffffff;
        }

        .service-cycle {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Category Badge */
        .category-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        /* Cost Cell */
        .cost-cell {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #ffffff;
          font-weight: 600;
        }

        .cost-cell svg {
          color: #10b981;
          width: 14px;
          height: 14px;
        }

        .cost-cell .cycle {
          color: #64748b;
          font-weight: 400;
          font-size: 0.8rem;
        }

        /* Renewal Cell */
        .renewal-cell {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .renewal-cell svg {
          color: #64748b;
          width: 14px;
          height: 14px;
        }

        .renewal-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        /* Status Badge */
        .status-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.active {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .status-badge.cancelled {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        /* Actions Cell */
        .actions-cell {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          border-radius: 0.5rem;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .action-btn.edit:hover {
          color: #3b82f6;
        }

        .action-btn.delete:hover {
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.1);
        }

        .action-btn.more:hover {
          color: #94a3b8;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
        }

        .empty-state-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
        }

        .empty-state-icon svg {
          width: 40px;
          height: 40px;
        }

        .empty-state-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .empty-state-text {
          color: #64748b;
          margin-bottom: 1.5rem;
        }

        /* Legend Bar */
        .legend-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 0.75rem;
        }

        .legend-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #94a3b8;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #64748b;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-bar {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .stat-divider {
            display: none;
          }

          .subscriptions-table {
            font-size: 0.85rem;
          }

          .subscriptions-table th,
          .subscriptions-table td {
            padding: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            gap: 1rem;
          }

          .page-header .btn {
            width: 100%;
            justify-content: center;
          }

          .filters-bar {
            flex-direction: column;
          }

          .search-box {
            width: 100%;
            min-width: auto;
          }

          .filter-group {
            width: 100%;
          }

          .filter-select-wrapper,
          .sort-btn {
            flex: 1;
            justify-content: center;
          }

          .table-container {
            overflow-x: auto;
          }

          .subscriptions-table {
            min-width: 700px;
          }

          .legend-bar {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
