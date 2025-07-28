import axios from "axios";

const api = axios.create({
    baseURL: "https://leaderboard-app-agol.onrender.com",  
});

export const fetchUsers = () => api.get("/users").then(r => r.data);
export const addUser = (name) => api.post("/users", { name }).then(r => r.data);
export const claim = (userId) => api.post("/claims", { userId }).then(r => r.data);
export const fetchLeaderboard = () => api.get("/claims/leaderboard").then(r => r.data);
