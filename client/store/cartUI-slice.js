import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartBoxIsVisible: false,
};

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggleCartBox(state, action) {
      state.cartBoxIsVisible = action.payload;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;