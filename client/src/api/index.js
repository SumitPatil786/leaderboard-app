import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",  
});

export const fetchUsers = () => api.get("/users").then(r => r.data);
export const addUser = (name) => api.post("/users", { name }).then(r => r.data);
export const claim = (userId) => api.post("/claims", { userId }).then(r => r.data);
export const fetchLeaderboard = () => api.get("/claims/leaderboard").then(r => r.data);

