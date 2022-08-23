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

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {
    [asyncGetOnePost.fulfilled]: (state, action) => {
      // action.payload -> post list
      state.post = action.payload;
    }
  },
});

export default postSlice.reducer;
