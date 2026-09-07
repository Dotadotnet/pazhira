import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMegaMenuOpen: false,
};

const megaMenuSlice = createSlice({
  name: "megaMenu",
  initialState,
  reducers: {
    openMegaMenu(state) {
      state.isMegaMenuOpen = true;
    },
    closeMegaMenu(state) {
      state.isMegaMenuOpen = false;
    },
  },
});

export const megaMenuActions = megaMenuSlice.actions;

export default megaMenuSlice.reducer;