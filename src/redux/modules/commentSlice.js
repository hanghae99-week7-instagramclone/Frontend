import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

// export const asyncPostComment = createAsyncThunk(
//   "comment/postComment",
//   async (payload, thunkAPI) => {
		
//     const response = await apis.writeComment(
//       { content: payload.comment },
//       payload.postId,
//     );

//     return response.data.data;
//   },
// );

export const asyncPostComment = createAsyncThunk(
  "comment/postComment",
  async (payload, thunkAPI) => {
		
    await apis.writeComment(
      { content: payload.comment },
      payload.postId,
    );
		const response = await apis.getCommentsByPost(payload.postId)
    return {data: response.data.data, postId: payload.postId};
  },
);

const initialState = {
	comment: [],
	commentlist: []
}

const commentSlice = createSlice({
	name: "comment",
	initialState,
	extraReducers: {
		[asyncPostComment.fulfilled]: (state, action) => {
			// action.paylaod -> comment list by post, post id
			// state.comment = action.payload;
			// console.log('2222222222222 post comment', state.comment);

			if (state.commentlist.findIndex((item) => item.postId === action.payload.postId) >= 0) {
				const idx = state.commentlist.findIndex((item) => item.postId === action.payload.postId);
				state.commentlist[idx] = action.payload;
			} else {
				state.commentlist.push(action.payload);
			}
			
			console.log('2222222222222 post comment', state.commentlist);
		}
	}
})

export default commentSlice.reducer;