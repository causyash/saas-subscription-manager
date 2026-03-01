import { createContext, useContext, useEffect, useMemo, useState } from "react";
import api from "../lib/api.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const t = localStorage.getItem("token");
      if (t) {
        setToken(t);
        
        // Immediately set cached user data if available
        const cachedUserData = localStorage.getItem("userData");
        if (cachedUserData) {
          try {
            const userData = JSON.parse(cachedUserData);
            setUser(userData);
            setLoading(false); // Show UI immediately with cached data
          } catch (e) {
            console.error("Error parsing cached user data:", e);
            localStorage.removeItem("userData");
          }
        }
        
        try {
          const payload = JSON.parse(atob(t.split(".")[1]));
          setRole(payload.role || null);
          
          // Fetch fresh user data
          api.defaults.headers.common.Authorization = `Bearer ${t}`;
          const userResponse = await api.get("/auth/profile");
          setUser(userResponse.data);
          
          // Update cached data
          localStorage.setItem("userData", JSON.stringify(userResponse.data));
        } catch (error) {
          console.error("Error fetching user data:", error);
          setRole(null);
          setUser(null);
          localStorage.removeItem("token");
          localStorage.removeItem("userData");
          setToken(null);
        }
      }
      setLoading(false);
    };
    
    initializeAuth();
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    const t = res.data.token;
    localStorage.setItem("token", t);
    setToken(t);
    
    try {
      const payload = JSON.parse(atob(t.split(".")[1]));
      setRole(payload.role || null);
      
      // Fetch user profile immediately after login
      api.defaults.headers.common.Authorization = `Bearer ${t}`;
      const userResponse = await api.get("/auth/profile");
      setUser(userResponse.data);
      
      // Store user data in localStorage for immediate access
      localStorage.setItem("userData", JSON.stringify(userResponse.data));
    } catch (error) {
      console.error("Error during login:", error);
      setRole(null);
      setUser(null);
      localStorage.removeItem("userData");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setToken(null);
    setRole(null);
    setUser(null);
    delete api.defaults.headers.common.Authorization;
  };

  const updateUser = async (userData) => {
    try {
      const response = await api.put("/auth/profile", userData);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  const value = useMemo(() => ({ token, role, user, loading, login, logout, updateUser }), [token, role, user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

