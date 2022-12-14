import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apis } from "../../shared/api";

const initialState = {
  mypage: {},
  //stateOfFollow: false,
  postImageList: [],
  isLoading: false,
  error: null,
};

// Thunk 미들웨어 함수
export const getMypageThunk = createAsyncThunk(
  "mypage/getMypage",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `http://43.200.178.245/api/profile/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data.data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
    }
  }
);

export const changeFollowerThunk = createAsyncThunk(
  "follower/getfollowerThunk",
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.post(
      //   process.env.REACT_APP_URL + `/api/follow/${payload}`, //toMemberId
			// 	{
			// 		headers: {
			// 			Authorization: localStorage.getItem('token')
			// 		}
			// 	}
      // );
			const data = await apis.pressFollow(payload);
			console.log(data);
      return thunkAPI.fulfillWithValue(data.data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
    }
  }
);

export const getPostImageListThunk = createAsyncThunk(
  "postImageList/getPostImageList",
  async (payload, thunkAPI) => {
    try {
      // console.log("잘 들어오나");
      const data = await axios.get(
        `http://43.200.178.245/api/posts/member/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data.data); // 엑스트라 리듀서로 넘겨줌
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
    // 아래는 마이페이지 유저네임, 닉네임 가져오는 thunk
    [getMypageThunk.pending]: (state) => {
      // 데이터를 가져오는 중
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getMypageThunk.fulfilled]: (state, action) => {
      // console.log(state);
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.mypage = action.payload; // Store에 있는 mypage에 서버에서 가져온 mypage를 넣습니다.
      // console.log(state.isLoading);
    },
    [getMypageThunk.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      // console.log("this is error");
    },

    // 아래는 마이페이지 이미지 가져오는 thunk
    [getPostImageListThunk.pending]: (state) => {
      // 데이터를 가져오는 중
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getPostImageListThunk.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.postImageList = action.payload; // Store에 있는 mypage에 서버에서 가져온 mypage를 넣습니다.
    },
    [getPostImageListThunk.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      console.log("this is error");
    },

    //아래는 follow 추가하는 thunk
    [changeFollowerThunk.pending]: (state) => {
      // 데이터를 가져오는 중
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [changeFollowerThunk.fulfilled]: (state, action) => {
			console.log(action.payload);
      // state.mypage.followers = action.payload; // followers 자리에 api바뀐 값 기재하기
      // isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      console.log("팔로우 성공");
    },
    [changeFollowerThunk.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      console.log("this is error");
			console.log(action.payload);
    },
  },
});

// export const postImageListSlice = createSlice({
//   name: "postImageList",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [getPostImageListThunk.pending]: (state) => {
//       // 데이터를 가져오는 중
//       state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
//     },
//     [getPostImageListThunk.fulfilled]: (state, action) => {
//       console.log(state);
//       state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
//       state.postImageList = action.payload; // Store에 있는 mypage에 서버에서 가져온 mypage를 넣습니다.
//       console.log(state.isLoading);
//     },
//     [getPostImageListThunk.rejected]: (state, action) => {
//       state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
//       state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
//       console.log("this is error");
//     },
//   },
// });

// export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
// export const {} = postImageListSlice.actions;
// export default postImageListSlice.reducer; //한 페이지에 하나의 모듈만 내보낼 수 있음.
