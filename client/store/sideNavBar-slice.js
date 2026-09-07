import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isNavbarOpen: false,
  dropDownList: [],
};

const sideNavBarSlice = createSlice({
  name: "sideNavBar",
  initialState,
  reducers: {
    openSidebar(state) {
      state.isSidebarOpen = true;
    },

    openNavbar(state) {
      state.isNavbarOpen = true;
    },

    closeSidebar(state) {
      state.isSidebarOpen = false;
    },

    closeNavbar(state) {
      state.isSidebarOpen = false;
      state.isNavbarOpen = false;
    },

    setSidebarEntries(state, action) {
      state.dropDownList = action.payload;
    },
  },
});

export const sideNavBarActions = sideNavBarSlice.actions;

export default sideNavBarSlice.reducer;