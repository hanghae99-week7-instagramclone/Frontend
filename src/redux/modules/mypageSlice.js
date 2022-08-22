import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  mypage: [],
  //stateOfFollow: false,
  isLoading: false,
  error: null,
};

// Thunk 미들웨어 함수
export const getMypageThunk = createAsyncThunk(
  "mypage/getMypage",
  async (payload, thunkAPI) => {
    try {
      console.log("hell world");
      const data = await axios.get("http://43.200.178.245/api/profile/1");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
    }
  }
);

// 리듀서
export const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {
    // FollowToggle: (state, action) => {
    //   console.log(state.stateOfFollow);
    //   if (state.stateOfFollow === true) state.stateOfFollow = false;
    //   else state.stateOfFollow = true;
    // 맨 마지막으로, 여기서 axios post로 서버에 넘겨준다.
    // },
    // unFollow: (state, action) => {
    //   state.number = state.number + action.payload;
    // }, 아직 기능 구현 안함
  },
  extraReducers: {
    [getMypageThunk.pending]: (state) => {
      // 데이터를 가져오는 중
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getMypageThunk.fulfilled]: (state, action) => {
      console.log(state);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.mypage = action.payload; // Store에 있는 mypage에 서버에서 가져온 mypage를 넣습니다.
      console.log(state.isLoading);
    },
    [getMypageThunk.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      console.log("this is error");
    },
  },
});

export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
