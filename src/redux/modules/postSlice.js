import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  post: [],
};

export const asyncGetOnePost = createAsyncThunk(
  "post/getOnePost",
  async (payload, thunkAPI) => {
    const response = await apis.getOnePost(payload);

    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  },
);

export const asyncPressLike = createAsyncThunk(
  "post/pressLike",
  async (payload, thunkAPI) => {
    // const response = await apis.pressLike(payload);
    // console.log(response);

    // if (response.status === 200 && response.data.success === true) {
    //   return response.data.data;
    //   // const res = await apis.getOnePost(payload);
    //   // console.log(res);
    //   // if (res.status === 200 && res.data.success === true) {
    //   // 	return res.data.data;
    //   // }
    // } else {
    //   return null;
    // }

		const response = await apis.pressLike(payload);
		return response.data.data;
		

    // const response = await apis.getOnePost(payload);
    // console.log(response);
    // if (response.status === 200 && response.data.success === true) {
    // 	return response.data.data;
    // } else {
    // 	return null;
    // }
  },
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [asyncGetOnePost.fulfilled]: (state, action) => {
      // action.payload -> post list
      state.post = action.payload;
    },
    [asyncPressLike.fulfilled]: (state, action) => {
      console.log(action);
      // state.post = action.payload;

      // const nickname = localStorage.getItem("nickname");
      // const post = state.postList.findIndex((item) => item.id === action.payload);
      // console.log(post, nickname);
      // if (post >= 0) {
      // 	state.postList[post].likeResponseDto.map((item) => {
      // 		if (item.nickname === nickname) {
      // 			return null;
      // 		} else {
      // 			return item;
      // 		}
      // 	});
      // }

      // if (state.postList.likeResponseDto.find((item) => item.nickname === nickname)) {
      // 	const idx = state.postList.likeResponseDto.findIndex((item) => item.nickname === nickname);
      //   state.postList.likeResponseDto[idx] = {
      //     postId: action.payload,
      //     nickname: nickname,
      //   };
      // } else {
      //   state.postList.likeResponseDto.push({
      //     postId: action.payload,
      //     nickname: nickname,
      //   });
      // }
    },
  },
});

export default postSlice.reducer;
