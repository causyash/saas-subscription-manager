import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"
});

// Request interceptor to add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const cfg = error.config || {};
      const url = (cfg.url || "").toString();
      const method = (cfg.method || "").toLowerCase();
      // Do NOT redirect for subscription creation failures; let UI handle gracefully
      const isSubscriptionCreate = url.endsWith("/subscriptions") && method === "post";
      if (!isSubscriptionCreate) {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
