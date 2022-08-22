import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  postList: [],
};

export const asyncGetPosts = createAsyncThunk(
  "postList/getPosts",
  async (payload, thunkAPI) => {
    const response = await apis.getPosts();
    
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
      // action.payload -> post list
      state.postList = action.payload;
    },
  },
});

export default postListSlice.reducer;
