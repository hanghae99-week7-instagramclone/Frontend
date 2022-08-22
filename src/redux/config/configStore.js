import { configureStore } from "@reduxjs/toolkit";
import postListSlice from "../modules/postListSlice";
import memberSlice from "../modules/memberSlice";

export default configureStore({
  reducer: {
		postList: postListSlice,
		member: memberSlice,
	},
});
