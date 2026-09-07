import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  userInformation: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.userInformation = action.payload;
    },
    userLogout(state) {
      state.userInformation = null;
    },
  },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;