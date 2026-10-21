
import axios from "axios";

const api = axios.create({
    baseURL: "https://irrigation-project-vipu.onrender.com",
});

export default api;
