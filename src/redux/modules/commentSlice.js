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

export const asyncGetCommentsByPost = createAsyncThunk(
  "comment/getCommentsByPost",
  async (payload, thunkAPI) => {
    const response = await apis.getCommentsByPost(payload);
    return { data: response.data.data, postId: payload };
  },
);

export const asyncPostComment = createAsyncThunk(
  "comment/postComment",
  async (payload, thunkAPI) => {
    await apis.writeComment({ content: payload.comment }, payload.postId);
    const response = await apis.getCommentsByPost(payload.postId);
    return { data: response.data.data, postId: payload.postId };
  },
);

export const asyncRemoveComment = createAsyncThunk(
  "comment/removeComment",
  async (payload, thunkAPI) => {
    console.log("actions", payload);

    const response = await apis.removeComment(
      payload.postId,
      payload.commentId,
    );

    console.log(response);

    if (response.status === 200 && response.data.data === true) {
      return { postId: payload.postId, commentId: payload.commentId };
    } else {
      return null;
    }
  },
);

const initialState = {
  comment: [],
  commentlist: [
    // {
    //   postId: 0,
    //   data: {},
    // },
  ],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: {
    [asyncGetCommentsByPost.fulfilled]: (state, action) => {
      if (
        state.commentlist.findIndex(
          (item) => item.postId === action.payload.postId,
        ) >= 0
      ) {
        const idx = state.commentlist.findIndex(
          (item) => item.postId === action.payload.postId,
        );
        state.commentlist[idx] = action.payload;
      } else {
        state.commentlist.push(action.payload);
      }
    },

    [asyncPostComment.fulfilled]: (state, action) => {
      // action.paylaod -> comment list by post, post id
      // state.comment = action.payload;
      // console.log('2222222222222 post comment', state.comment);

      if (
        state.commentlist.findIndex(
          (item) => item.postId === action.payload.postId,
        ) >= 0
      ) {
        const idx = state.commentlist.findIndex(
          (item) => item.postId === action.payload.postId,
        );
        state.commentlist[idx] = action.payload;
      } else {
        state.commentlist.push(action.payload);
      }
    },

    [asyncRemoveComment.fulfilled]: (state, action) => {
      console.log("reducer");
      console.log(action.payload);
      // console.log(state.commentlist[0], typeof state.commentlist[0]);
      // console.log(
      //   state.commentlist.find(
      //     (item) => item.postId === action.payload.postId,
      //   ),
      // );
      // console.log(
      //   state.commentlist.filter((item) => +item.id !== +action.payload),
      // );
			const idx = state.commentlist.findIndex((item) => item.postId === action.payload.postId)
			console.log(idx);
      state.commentlist[idx] = state.commentlist[idx].data.filter((item) => item.id !== action.payload.commentId);
    },
  },
});

export default commentSlice.reducer;
