import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenuItemIndex: 0,
  activeMenuItemText: "",
};

const activeMenuItemSlice = createSlice({
  name: "activeMenuItem",
  initialState,
  reducers: {
    setActiveMenuItemIndex(state, action) {
      state.activeMenuItemIndex = action.payload;
    },
    setActiveMenuItemText(state, action) {
      state.activeMenuItemText = action.payload;
    },
  },
});

export const activeMenuItemActions = activeMenuItemSlice.actions;

export default activeMenuItemSlice.reducer;