import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

//멤버조회
export const asyncGetAllMembers = createAsyncThunk(
  "postList/getAllMembers",
  async (payload, thunkAPI) => {
    const response = await apis.getAllMembers();

    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  }
);

export const asyncGetOneMemberProfile = createAsyncThunk(
  "postList/getOneMemberProfile",
  async (payload, thunkAPI) => {
    const response = await apis.getOneMemberProfile(payload);

    if (response.status === 200 && response.data.success === true) {
      return response.data.data;
    } else {
      return null;
    }
  }
);

//회원가입
export const createMemberDB = (data) => {
  return async function () {
    await apis
      .createMember(data)
      .then((response) => {
        console.log(response);
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            window.alert(
              `${response.data.data.nickname}님 회원가입을 축하드립니다!`
            ),
            window.location.replace("/home")
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          window.alert(error.response.data.message);
        }
      });
  };
};

//로그인
export const loginMemberDB = (data) => {
  return async function () {
    await apis
      .loginMember(data)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.message);
        } else {
          return (
            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("id", response.data.data.id),
            alert(`환영합니다.`),
            window.location.replace("/")
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          window.alert(error.response.data.message);
        }
      });
  };
};

export const putReviseThunk = createAsyncThunk(
  "member/putRevise",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.editMyPage(payload.memberId, payload.formData);
      //   const data = await axios.put(
      //     `http://43.200.178.245/api/profile/${payload}`,
      //     payload
      //   );
      console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data); // 엑스트라 리듀서로 넘겨줌
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // 엑스트라 리듀서로 넘겨줌
    }
  }
);

const initialState = {
  memberlist: [],
  member: {},
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [asyncGetAllMembers.fulfilled]: (state, action) => {
      // action.payload -> member list
      state.memberlist = action.payload;
    },

    [asyncGetOneMemberProfile.fulfilled]: (state, action) => {
      // action.payload -> member
      state.member = action.payload;
    },

    [putReviseThunk.fulfilled]: (state, action) => {
      // action.payload -> member
      state.mypage = action.payload;
    },
  },
});

// export const { } = memberSlice.actions;
export default memberSlice.reducer;
