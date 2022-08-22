import { configureStore } from "@reduxjs/toolkit";
import mypage from "../modules/mypageSlice";

const configStore = configureStore({
  reducer: { mypage: mypage },
});

export default configStore;
