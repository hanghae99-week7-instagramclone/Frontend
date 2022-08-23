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
	}
)

export const asyncRemovePost = createAsyncThunk(
	"post/removePost",
	async (payload, thunkAPI) => {
		console.log('remove post', payload);
		const response = await apis.removePost(payload);

    if (response.status === 200 && response.data.success === true) {
      return payload;
    } else {
      return null;
    }
	}
)

const postListSlice = createSlice({
  name: "postList",
  initialState,
  extraReducers: {
    [asyncGetAllPosts.fulfilled]: (state, action) => {
      // action.payload -> post list
      state.postList = action.payload;
    },
		[asyncWritePost.fulfilled]: (state, action) => {
			console.log('reducer', state, action);
			state.postList.push(action.payload);
		},
		[asyncRemovePost]: (state, action) => {
			console.log('reducer', state, action);
			state.postList = state.postList.filter((item) => item.id === action.payload);
		}
  },
});

export default postListSlice.reducer;
