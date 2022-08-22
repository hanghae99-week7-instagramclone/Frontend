import axios from "axios";

const tokencheck = document.cookie;
const token = tokencheck.split("=")[1];
const api = axios.create({
  // 실제 베이스 유알엘
  baseURL: process.env.REACT_APP_URL,

  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // accept: "application/json,",
    token: token,
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["authorization"] = `${accessToken}`;
  return config;
});

const apiMultipart = axios.create({
  //   baseURL: "http://13.125.107.22:8080",
  headers: {
    "content-type": "multipart/form-data",
    token: token,
  },
});

export const apis = {
  getPosts: () => api.get("/api/posts"),

  getMembers: () => api.get("/members"),
};
