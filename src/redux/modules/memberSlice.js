import { createSlice } from "@reduxjs/toolkit";
import api from "./api";

//회원가입
export const createMemberDB = (data) => {
  return async function () {
    await api
      .post("/members/signup", data, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            window.alert(
              `${response.data.data.nickname}님 회원가입을 축하드립니다!`
            ),
            window.location.replace("/home")
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          window.alert(error.response.data.message);
        }
      });
  };
};

//로그인
export const loginMemberDB = (data) => {
  return async function () {
    await api
      .post("/members/login", data, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("nickname", response.data.data.nickname),
            alert(`${localStorage.nickname}님 환영합니다.`),
            window.location.replace("/")
          );
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

const initialState = {
  memberlist: [],
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const { } = memberSlice.actions;
export default memberSlice.reducer;
