import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  postList: [],
};

export const asyncGetPosts = createAsyncThunk(
  "postList/getPosts",
  async (payload, thunkAPI) => {
    const response = await apis.getPosts();
    console.log(response);
    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  },
);

const postListSlice = createSlice({
  name: "postList",
  initialState,
  extraReducers: {
    [asyncGetPosts.fulfilled]: (state, action) => {
      console.log("reducer", action.payload);
      state.postList = action.payload;
    },
  },
});

export default postListSlice.reducer;
