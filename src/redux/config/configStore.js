import { configureStore } from "@reduxjs/toolkit";

import postListSlice from "../modules/postListSlice";
import memberSlice from "../modules/memberSlice";
import mypage from "../modules/mypageSlice";
import commentSlice from "../modules/commentSlice";
import postSlice from "../modules/postSlice";
import commentListSlice from "../modules/commentListSlice";
import reviseMypageSlice from "../modules/reviseMypageSlice";

export default configureStore({
  reducer: {
    post: postSlice,
    postList: postListSlice,
    comment: commentSlice,
    commentList: commentListSlice,
    member: memberSlice,
    mypage: mypage,
    reviseMypage: reviseMypageSlice,
  },
});
