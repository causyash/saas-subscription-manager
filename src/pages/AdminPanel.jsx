import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../lib/api.js";

// Icons
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z" />
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);

export default function AdminPanel() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "user" });
  const [stats, setStats] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/admin/users');
      setUsers(response.data.data);
    } catch (err) {
      setError("Failed to load users");
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch system stats
  const fetchStats = async () => {
    try {
      const response = await api.get('/admin/stats');
      setStats(response.data.data);
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  // Handle user deletion
  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.delete(`/admin/users/${userId}`);
        fetchUsers(); // Refresh the user list
      } catch (err) {
        setError("Failed to delete user");
        console.error("Error deleting user:", err);
      }
    }
  };

  // Handle user role update
  const updateUserRole = async (userId, newRole) => {
    try {
      await api.put(`/admin/users/${userId}/role`, { role: newRole });
      fetchUsers(); // Refresh the user list
    } catch (err) {
      setError("Failed to update user role");
      console.error("Error updating user role:", err);
    }
  };

  // Handle user status update
  const updateUserStatus = async (userId, newStatus) => {
    try {
      await api.put(`/admin/users/${userId}/status`, { status: newStatus });
      fetchUsers(); // Refresh the user list
    } catch (err) {
      setError("Failed to update user status");
      console.error("Error updating user status:", err);
    }
  };

  // Handle adding a new user
  const addUser = async () => {
    try {
      await api.post('/auth/register', newUser);
      setShowAddUserModal(false);
      setNewUser({ name: "", email: "", password: "", role: "user" });
      fetchUsers(); // Refresh the user list
    } catch (err) {
      setError("Failed to add user");
      console.error("Error adding user:", err);
    }
  };

  // Reset all collections (except users)
  const resetCollections = async () => {
    if (window.confirm("Are you sure you want to reset all collections (except users)? This will delete all subscriptions, payments, and activity logs.")) {
      try {
        await api.delete('/admin/reset-collections');
        alert("All collections reset successfully (except users)");
      } catch (err) {
        setError("Failed to reset collections");
        console.error("Error resetting collections:", err);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchStats();
  }, []);

  return (
    <div className="page admin-panel-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Admin Dashboard</h1>
            <p className="page-subtitle">Manage users and system data</p>
          </div>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="stats-grid mb-2">
            <div className="stat-card">
              <div className="stat-icon blue">
                <UserIcon />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.totalUsers}</div>
                <div className="stat-label">Total Users</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.totalSubscriptions}</div>
                <div className="stat-label">Subscriptions</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon amber">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.totalPayments}</div>
                <div className="stat-label">Payments</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.todaySubscriptions}</div>
                <div className="stat-label">Today's Subscriptions</div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="admin-actions mb-2">
          <button 
            className="btn btn-primary"
            onClick={() => setShowAddUserModal(true)}
          >
            <UserIcon />
            Add User
          </button>
          <button 
            className="btn btn-warning"
            onClick={resetCollections}
          >
            <RefreshIcon />
            Reset Collections
          </button>
        </div>

        {/* Users Table */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">User Management</h3>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      Loading users...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((currentUser) => (
                    <tr key={currentUser._id}>
                      <td>{currentUser.name}</td>
                      <td>{currentUser.email}</td>
                      <td>
                        <select
                          value={currentUser.role}
                          onChange={(e) => updateUserRole(currentUser._id, e.target.value)}
                          className="form-input form-input-sm"
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td>
                        <select
                          value={currentUser.status}
                          onChange={(e) => updateUserStatus(currentUser._id, e.target.value)}
                          className="form-input form-input-sm"
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="suspended">Suspended</option>
                        </select>
                      </td>
                      <td>{new Date(currentUser.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteUser(currentUser._id)}
                        >
                          <TrashIcon />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="modal-overlay" onClick={() => setShowAddUserModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Add New User</h3>
              <button className="modal-close" onClick={() => setShowAddUserModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  value={newUser.password}
                  onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Role</label>
                <select
                  className="form-input"
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowAddUserModal(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={addUser}>
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .admin-panel-page {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .admin-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .admin-actions .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .table-responsive {
          overflow-x: auto;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .table th {
          background: rgba(255, 255, 255, 0.03);
          font-weight: 600;
          color: #94a3b8;
        }

        .table tr:last-child td {
          border-bottom: none;
        }

        .table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        .form-input-sm {
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
          border-radius: 0.375rem;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 0;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .modal-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .modal-close {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          color: #ffffff;
        }

        .modal-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-footer {
          padding: 1.5rem;
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mb-2 {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}
