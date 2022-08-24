import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  username: "",
  nickname: "",
  url: "",
  bio: "",
  isLoading: false,
  error: null,
};

// Thunk 미들웨어 함수
export const putReviseThunk = createAsyncThunk(
  "revise/putRevise",
  async (payload, thunkAPI) => {
    try {
      console.log("put 시도중^^^");
      const data = await axios.put(
        `http://43.200.178.245/api/profile/${payload}`,
        payload
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
    }
  }
);

export const reviseMypageSlice = createSlice({
  name: "reviseMypage",
  initialState,
  reducers: {
    setReviseUsername(state, action) {
      console.log("dddddddddddddddddddd");
      console.log(state);
      console.log(action);
      state.username = action.payload;
    },
    setReviseNickname(state, action) {
      state.nickname = action;
    },
    setReviseUrl(state, action) {
      state.url = action;
    },
    setReviseBio(state, action) {
      state.bio = action;
    },
  },

  extraReducers: {
    // 아래는 마이페이지 유저네임, 닉네임 가져오는 thunk
    [putReviseThunk.pending]: (state) => {
      // 데이터를 가져오는 중
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [putReviseThunk.fulfilled]: (state, action) => {
      // console.log(state);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.mypage = action.payload; // Store에 있는 mypage에 서버에서 가져온 mypage를 넣습니다.
      // console.log(state.isLoading);
    },
    [putReviseThunk.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      // console.log("this is error");
    },
  },
});

export default reviseMypageSlice.reducer;
