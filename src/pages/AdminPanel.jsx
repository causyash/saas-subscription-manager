import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../lib/api.js";

// Icons
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
  </svg>
);

const RupeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12"/><path d="M6 8h12"/><path d="M12 3v13"/><path d="M12 13a2.5 2.5 0 0 0 2.5 2.5H18"/><path d="M12 16a2.5 2.5 0 0 1-2.5 2.5H6"/>
  </svg>
);

const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const MoreHorizontalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
  </svg>
);

const XCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
  </svg>
);

export default function AdminPanel() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // State for real data
  const [adminStats, setAdminStats] = useState({
    totalUsers: 0,
    activeSubscriptions: 0,
    revenue: 0,
    systemHealth: "0%"
  });
  const [adminUsers, setAdminUsers] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', color: '#3b82f6', icon: 'package' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch admin statistics
        const statsResponse = await api.get('/admin/stats');
        setAdminStats(statsResponse.data);
        
        // Fetch users
        const usersResponse = await api.get('/admin/users');
        setAdminUsers(usersResponse.data.users || []);
        
        // Fetch recent activity
        const activityResponse = await api.get('/admin/activity');
        setRecentActivity(activityResponse.data.activities || []);
        
        // Fetch categories
        const categoriesResponse = await api.get('/admin/categories');
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
        // Initialize with empty data for new admin experience
        setAdminStats({
          totalUsers: 0,
          activeSubscriptions: 0,
          revenue: 0,
          systemHealth: "0%"
        });
        setAdminUsers([]);
        setRecentActivity([]);
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

  // Functions to update user role and status
  const updateUserRole = async (userId, newRole) => {
    try {
      const response = await api.put(`/admin/users/${userId}/role`, { role: newRole });
      
      // Update local state
      setAdminUsers(prev => prev.map(user => 
        user._id === userId ? { ...user, role: response.data.role } : user
      ));
      
      // Show success notification
      alert(`User role updated to ${newRole}`);
    } catch (error) {
      console.error('Error updating user role:', error);
      alert('Error updating user role');
    }
  };

  const updateUserStatus = async (userId, newStatus) => {
    try {
      const response = await api.put(`/admin/users/${userId}/status`, { status: newStatus });
      
      // Update local state
      setAdminUsers(prev => prev.map(user => 
        user._id === userId ? { ...user, status: response.data.status } : user
      ));
      
      // Show success notification
      alert(`User status updated to ${newStatus}`);
    } catch (error) {
      console.error('Error updating user status:', error);
      alert('Error updating user status');
    }
  };

  // Functions to manage categories
  const fetchCategories = async () => {
    try {
      const response = await api.get('/admin/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const createCategory = async (categoryData) => {
    try {
      const response = await api.post('/admin/categories', categoryData);
      setCategories(prev => [...prev, response.data]);
      setNewCategory({ name: '', color: '#3b82f6', icon: 'package' });
      alert('Category created successfully');
    } catch (error) {
      console.error('Error creating category:', error);
      alert('Error creating category');
    }
  };

  const updateCategory = async (categoryId, categoryData) => {
    try {
      const response = await api.put(`/admin/categories/${categoryId}`, categoryData);
      setCategories(prev => prev.map(cat => 
        cat._id === categoryId ? response.data : cat
      ));
      alert('Category updated successfully');
    } catch (error) {
      console.error('Error updating category:', error);
      alert('Error updating category');
    }
  };

  const deleteCategory = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await api.delete(`/admin/categories/${categoryId}`);
        setCategories(prev => prev.filter(cat => cat._id !== categoryId));
        alert('Category deleted successfully');
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('Error deleting category');
      }
    }
  };

  // Initialize with empty data for new admin experience
  const stats = [
    { 
      title: "Total Users", 
      value: adminStats.totalUsers.toString(), 
      change: adminStats.totalUsers > 0 ? `+${Math.floor(Math.random() * 10)}` : "Get started", 
      icon: <UsersIcon />, 
      color: "blue" 
    },
    { 
      title: "Active Subscriptions", 
      value: adminStats.activeSubscriptions.toString(), 
      change: adminStats.activeSubscriptions > 0 ? `+${Math.floor(Math.random() * 5)}` : "No subscriptions yet", 
      icon: <CreditCardIcon />, 
      color: adminStats.activeSubscriptions > 0 ? "green" : "gray" 
    },
    { 
      title: "Revenue", 
      value: `₹${adminStats.revenue.toFixed(0)}K`, 
      change: adminStats.revenue > 0 ? `+${Math.floor(Math.random() * 30)}%` : "No revenue yet", 
      icon: <RupeeIcon />, 
      color: adminStats.revenue > 0 ? "purple" : "gray" 
    },
    { 
      title: "System Health", 
      value: adminStats.systemHealth, 
      change: "Monitoring", 
      icon: <ActivityIcon />, 
      color: "amber" 
    }
  ];

  const filteredUsers = adminUsers?.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="page admin-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Admin Panel</h1>
            <p className="page-subtitle">
              Manage users, monitor system health, and view analytics
            </p>
          </div>
          <div className="admin-badge">
            <ShieldIcon />
            <span>Administrator</span>
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
                <div className="stat-change">{stat.change}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Admin Tabs */}
        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === "overview" ? 'active' : ''}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === "users" ? 'active' : ''}`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
          <button 
            className={`tab-btn ${activeTab === "settings" ? 'active' : ''}`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "overview" && (
            <div className="overview-grid">
              {/* Recent Activity */}
              <div className="admin-card">
                <div className="card-header">
                  <h3 className="card-title">Recent Activity</h3>
                </div>
                <div className="activity-list">
                  {recentActivity.length > 0 ? (
                    recentActivity.map((activity, i) => (
                      <div key={i} className="activity-item">
                        <div className={`activity-icon ${activity.type}`}>
                          {(activity.type === "user_login" || activity.type === "user_register") && <UserIcon />}
                          {(activity.type === "subscription_add" || activity.type === "subscription_update" || activity.type === "subscription_delete") && <CreditCardIcon />}
                          {activity.type === "payment_process" && <RupeeIcon />}
                          {(activity.type === "admin_action" || activity.type === "system_event") && <ShieldIcon />}
                        </div>
                        <div className="activity-details">
                          <div className="activity-action">{activity.description}</div>
                          <div className="activity-meta">
                            by {activity.userId?.name || 'Unknown'} • {new Date(activity.createdAt || activity.timestamp).toLocaleString()}
                          </div>
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
                      <p className="text-gray-400">No recent activity to display</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="admin-card">
                <div className="card-header">
                  <h3 className="card-title">Today's Overview</h3>
                </div>
                <div className="quick-stats">
                  <div className="quick-stat">
                    <span className="quick-value">{adminStats.newUsers || 0}</span>
                    <span className="quick-label">New Users</span>
                  </div>
                  <div className="quick-stat">
                    <span className="quick-value">₹{adminStats.todayRevenue || 0}</span>
                    <span className="quick-label">Revenue</span>
                  </div>
                  <div className="quick-stat">
                    <span className="quick-value">{adminStats.newSubscriptions || 0}</span>
                    <span className="quick-label">New Subs</span>
                  </div>
                  <div className="quick-stat">
                    <span className="quick-value">{adminStats.supportTickets || 0}</span>
                    <span className="quick-label">Support Tickets</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="admin-card">
              <div className="card-header">
                <h3 className="card-title">User Management</h3>
                <div className="search-box">
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="table-container">
                <table className="users-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Joined</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user._id}>
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar">
                              {user.name.charAt(0)}
                            </div>
                            <div className="user-info">
                              <div className="user-name">{user.name}</div>
                              <div className="user-email">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <select 
                            className="role-select"
                            value={user.role}
                            onChange={(e) => updateUserRole(user._id, e.target.value)}
                            style={{ border: 'none', background: 'transparent', fontWeight: 'bold', textTransform: 'capitalize' }}
                          >
                            <option value="admin">Admin</option>
                            <option value="member">Member</option>
                            <option value="viewer">Viewer</option>
                          </select>
                        </td>
                        <td>
                          <select 
                            className="status-select"
                            value={user.status}
                            onChange={(e) => updateUserStatus(user._id, e.target.value)}
                            style={{ border: 'none', background: 'transparent', textTransform: 'capitalize' }}
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="suspended">Suspended</option>
                          </select>
                        </td>
                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                        <td>
                          <button className="action-btn">
                            <MoreHorizontalIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="admin-card settings-card">
              <div className="card-header">
                <h3 className="card-title">System Settings</h3>
              </div>
              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Maintenance Mode</h4>
                    <p>Temporarily disable user access for maintenance</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>User Registration</h4>
                    <p>Allow new users to register</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Email Notifications</h4>
                    <p>Send system emails to users</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>API Access</h4>
                    <p>Enable API endpoints for external integrations</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                
                {/* Category Management Section */}
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Subscription Categories</h4>
                    <p>Manage subscription categories for organization</p>
                  </div>
                  <div className="category-management">
                    <div className="category-form">
                      <input
                        type="text"
                        placeholder="Category name"
                        value={newCategory.name}
                        onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                        className="category-input"
                      />
                      <input
                        type="color"
                        value={newCategory.color}
                        onChange={(e) => setNewCategory({...newCategory, color: e.target.value})}
                        className="color-picker"
                      />
                      <button 
                        onClick={() => createCategory(newCategory)}
                        className="btn btn-primary"
                        disabled={!newCategory.name.trim()}
                      >
                        Add
                      </button>
                    </div>
                    
                    <div className="categories-list">
                      {categories.map(category => (
                        <div key={category._id} className="category-item">
                          <div className="category-info">
                            <div 
                              className="category-color-preview" 
                              style={{ backgroundColor: category.color }}
                            ></div>
                            <span className="category-name">{category.name}</span>
                          </div>
                          <div className="category-actions">
                            <button 
                              onClick={() => deleteCategory(category._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .admin-page {
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

        .admin-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.05));
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 9999px;
          color: #f59e0b;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .admin-badge svg {
          width: 16px;
          height: 16px;
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
          margin-bottom: 0.25rem;
        }

        .stat-change {
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 600;
        }

        /* Tabs */
        .admin-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 1rem;
        }

        .tab-btn {
          padding: 0.625rem 1.25rem;
          background: none;
          border: none;
          border-radius: 0.5rem;
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.03);
          color: #e2e8f0;
        }

        .tab-btn.active {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        /* Tab Content */
        .tab-content {
          min-height: 400px;
        }

        /* Overview Grid */
        .overview-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1.5rem;
        }

        .admin-card {
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
          color: #e2e8f0;
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
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 0.625rem;
        }

        .activity-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
        }

        .activity-icon.user {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .activity-icon.subscription {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .activity-icon.payment {
          background: rgba(139, 92, 246, 0.15);
          color: #8b5cf6;
        }

        .activity-icon.system {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .activity-details {
          flex: 1;
        }

        .activity-action {
          font-weight: 500;
          color: #e2e8f0;
          font-size: 0.9rem;
        }

        .activity-meta {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Quick Stats */
        .quick-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .quick-stat {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 0.625rem;
        }

        .quick-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }

        .quick-label {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* Search Box */
        .search-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.5rem;
        }

        .search-box svg {
          color: #64748b;
          width: 16px;
          height: 16px;
        }

        .search-box input {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 0.875rem;
          outline: none;
          width: 200px;
        }

        .search-box input::placeholder {
          color: #64748b;
        }

        /* Users Table */
        .table-container {
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
        }

        .users-table th {
          padding: 0.875rem 1rem;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .users-table td {
          padding: 0.875rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.9rem;
        }

        .users-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        .user-cell {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 500;
          color: #e2e8f0;
        }

        .user-email {
          font-size: 0.75rem;
          color: #64748b;
        }

        .role-badge {
          display: inline-block;
          padding: 0.25rem 0.625rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .role-badge.admin {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
        }

        .role-badge.user {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.25rem 0.625rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .status-badge.active {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .status-badge.suspended {
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
        }

        .status-badge svg {
          width: 12px;
          height: 12px;
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
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #e2e8f0;
        }

        /* Settings */
        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .setting-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 0.75rem;
        }

        .setting-info h4 {
          font-size: 0.95rem;
          font-weight: 500;
          color: #e2e8f0;
          margin-bottom: 0.25rem;
        }

        .setting-info p {
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

        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .overview-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .admin-tabs {
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .tab-btn {
            white-space: nowrap;
          }

          .search-box input {
            width: 150px;
          }

          .users-table {
            font-size: 0.85rem;
          }

          .users-table th,
          .users-table td {
            padding: 0.625rem;
          }
        }
        
        /* Custom select styles */
        .role-select, .status-select {
          background: transparent;
          border: none;
          outline: none;
          font-weight: bold;
          text-transform: capitalize;
          cursor: pointer;
          padding: 0;
          margin: 0;
          color: inherit;
        }
        
        .role-select:focus, .status-select:focus {
          outline: 2px solid #3b82f6;
          border-radius: 4px;
        }
        
        /* Category Management Styles */
        .category-management {
          width: 100%;
          max-width: 500px;
        }
        
        .category-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        
        .category-input {
          flex: 1;
          min-width: 150px;
          padding: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }
        
        .color-picker {
          width: 40px;
          height: 40px;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          padding: 0.25rem;
          cursor: pointer;
        }
        
        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .category-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
        }
        
        .category-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .category-color-preview {
          width: 20px;
          height: 20px;
          border-radius: 0.25rem;
          border: 1px solid #cbd5e1;
        }
        
        .category-name {
          font-weight: 500;
          color: #1e293b;
        }
        
        .category-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .btn-danger {
          background: #ef4444;
          color: white;
          border: none;
          padding: 0.375rem 0.75rem;
          border-radius: 0.375rem;
          cursor: pointer;
          font-size: 0.875rem;
        }
        
        .btn-danger:hover {
          background: #dc2626;
        }
      `}</style>
    </div>
  );
}
