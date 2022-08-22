import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
const token = localStorage.getItem("token");
api.defaults.headers.common["authorization"] = token ? `${token}` : null;

export const apis = {
  createMember: (data) =>
    api.post("/members/signup", data, {
      "Content-Type": "application/json",
    }),

  loginMember: (data) =>
    api.post("/members/login", data, {
      "Content-Type": "application/json",
    }),

  getPosts: () => api.get("/api/posts"),

  getMembers: () => api.get("/members"),
};
