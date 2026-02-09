// src/config/config.js

// Base API URL from environment variables
// Local: http://localhost:3001
// Prod : https://your-backend.onrender.com
export const API_BASE_URL = process.env.REACT_APP_API_URL;

// Individual API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REFRESH: `${API_BASE_URL}/api/auth/refresh`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`
  },
  QUESTIONS: `${API_BASE_URL}/questions`,
  USERS: `${API_BASE_URL}/api/users`,
  PROGRESS: `${API_BASE_URL}/api/progress`,
  LEADERBOARD: `${API_BASE_URL}/api/leaderboard`
};

// Dev-only safety log
if (!API_BASE_URL) {
  console.error("❌ REACT_APP_API_URL is not defined");
} else {
  console.log("🌐 API BASE URL:", API_BASE_URL);
}

export default API_BASE_URL;