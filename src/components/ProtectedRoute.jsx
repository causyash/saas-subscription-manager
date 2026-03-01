import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children, roles }) {
  const { token, role } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  if (roles && roles.length && !roles.includes(role)) return <Navigate to="/" replace />;
  return children;
}

