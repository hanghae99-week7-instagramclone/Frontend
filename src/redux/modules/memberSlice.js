import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  memberList: [],
};

export const asyncGetMembers = createAsyncThunk(
  "postList/getMembers",
  async (payload, thunkAPI) => {
    const response = await apis.getMembers();
    
    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  },
);

const memberSlice = createSlice({
  name: "memberList",
  initialState,
  extraReducers: {
    [asyncGetMembers.fulfilled]: (state, action) => {
      // action.payload -> member list
      state.memberList = action.payload;
    },
  },
});

export default memberSlice.reducer;
