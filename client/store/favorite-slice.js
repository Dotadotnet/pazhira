import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      state.items.push({
        ...action.payload,
      });
    },
    removeFromFavorite(state, action) {
      const productSlug = action.payload;
      state.items = state.items.filter(
        (item) => item.slug.current !== productSlug
      );
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;