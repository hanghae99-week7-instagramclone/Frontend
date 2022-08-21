import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/followSlice";

const configStore = configureStore({
  reducer: { todos: todos },
});

export default configStore;
