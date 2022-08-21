import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// Thunk 미들웨어 함수
export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://43.200.178.245/api/profile/1");
      return console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

// 리듀서
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
