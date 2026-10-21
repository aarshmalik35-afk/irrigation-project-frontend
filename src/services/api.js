import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://irrigation-project-vipu.onrender.com",
});

export default api;
