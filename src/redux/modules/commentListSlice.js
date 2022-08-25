import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

export const asyncGetCommentsByPost = createAsyncThunk(
  "comment/getCommentsByPost",
  async (payload, thunkAPI) => {
		
    const response = await apis.getCommentsByPost(payload);
    return response.data.data;
  },
)

const initialState = {
	commentlist: []
}

const commentSlice = createSlice({
	name: "commentlist",
	initialState,
	extraReducers: {
		[asyncGetCommentsByPost.fulfilled]: (state, action) => {
			state.commentlist = action.payload;
			console.log('reducer', state.commentlist);
		}
	}
})

export default commentSlice.reducer;