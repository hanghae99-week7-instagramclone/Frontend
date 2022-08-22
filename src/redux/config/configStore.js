import { configureStore } from "@reduxjs/toolkit";

import postListSlice from "../modules/postListSlice";
import memberSlice from "../modules/memberSlice";
import mypage from "../modules/mypageSlice";

export default configureStore({
  reducer: {
    postList: postListSlice,
    member: memberSlice,
    mypage: mypage,
  },
});
