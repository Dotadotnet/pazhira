import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  specialOfferProducts: [],
};

const specialOfferProductsSlice = createSlice({
  name: "specialOfferProducts",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.specialOfferProducts = action.payload;
    },
  },
});

export const specialOfferProductsActions = specialOfferProductsSlice.actions;

export default specialOfferProductsSlice.reducer;