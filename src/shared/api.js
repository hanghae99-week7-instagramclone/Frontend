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

  checkEmail: async (email) =>
    await api.get("/members/email-check", { params: { email: email } }),

  checkNickname: async (nickname) =>
    await api.get("/members/nickname-check", {
      params: { nickname: nickname },
    }),

  loginMember: (data) =>
    api.post("/members/login", data, {
      "Content-Type": "application/json",
    }),

  getPosts: () => api.get("/api/posts"),

  getMembers: () => api.get("/members"),
};
