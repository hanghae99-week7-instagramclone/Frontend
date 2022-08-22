import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

//멤버조회
export const asyncGetMembers = createAsyncThunk(
  "postList/getMembers",
  async (payload, thunkAPI) => {
    const response = await apis.getMembers();

    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  }
);

//회원가입
export const createMemberDB = (data) => {
  return async function () {
    await apis
      .createMember(data)
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
    await apis
      .loginMember(data)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("nickname", response.data.data.id),
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
  extraReducers: {
    [asyncGetMembers.fulfilled]: (state, action) => {
      // action.payload -> member list
      state.memberlist = action.payload;
    },
  },
});

// export const { } = memberSlice.actions;
export default memberSlice.reducer;
