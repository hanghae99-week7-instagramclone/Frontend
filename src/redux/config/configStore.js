import { configureStore } from "@reduxjs/toolkit";
import postListSlice from "../modules/postListSlice";

export default configureStore({
  reducer: {
		postList: postListSlice
	},
});
