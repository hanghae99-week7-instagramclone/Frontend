import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  postList: [],
};

export const asyncGetAllPosts = createAsyncThunk(
  "postList/getAllPosts",
  async (payload, thunkAPI) => {
    const response = await apis.getAllPosts();

    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  },
);

export const asyncWritePost = createAsyncThunk(
  "post/writePost",
  async (payload, thunkAPI) => {
    console.log(payload);
    for (const keyValue of payload) console.log(keyValue);
    const response = await apis.writePost(payload);

    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  },
);

export const asyncEditPost = createAsyncThunk(
  "post/updatePost",
  async (payload, thunkAPI) => {
    // console.log(payload);
    const response = await apis.editPost(payload.data, payload.postId);

    // console.log(response);
    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  },
);

export const asyncRemovePost = createAsyncThunk(
  "post/removePost",
  async (payload, thunkAPI) => {
    console.log("remove post", payload);
    const response = await apis.removePost(payload);
    console.log(response);

    if (response.status === 200 && response.data.success === true) {
      console.log(payload);
      return payload;
    } else {
      return null;
    }
  },
);

const postListSlice = createSlice({
  name: "postList",
  initialState,
  extraReducers: {
    [asyncGetAllPosts.fulfilled]: (state, action) => {
      // action.payload -> post list
      state.postList = action.payload;
    },
    [asyncWritePost.fulfilled]: (state, action) => {
      state.postList.push(action.payload);
    },
    [asyncRemovePost.fulfilled]: (state, action) => {
      console.log("reducer", action);
      state.postList = state.postList.filter(
        (item) => item.id === action.payload,
      );
    },
    [asyncEditPost.fulfilled]: (state, action) => {
      console.log("reducer", state, action);
      state.postList = state.postList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
  },
});

export default postListSlice.reducer;
