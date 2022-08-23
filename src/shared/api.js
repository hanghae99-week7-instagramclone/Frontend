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

  getAllMembers: () => api.get("/members"),

	getOneMemberProfile: (memberId) => api.get(`/api/profile/${memberId}`),

  getAllPosts: () => api.get("/api/posts"),

	getOnePost: (postId) => api.get(`/api/posts/${postId}`),

	getCommentsByPost: (postId) => api.get(`/api/posts/${postId}/comments`),

  writeComment: (data, postId) =>
    api.post(`/api/posts/${postId}/comments`, data, {
      "Content-type": "application/json",
    }),

	removeComment: (postId, commentId) => api.delete(`/api/posts/${postId}/comments/${commentId}`),
};
