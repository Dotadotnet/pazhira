import { createSlice } from "@reduxjs/toolkit";

import { newestProductsFn } from "../utilities/sortByTimeStamp";

const initialState = {
  productsList: [],
};

const SortedProductsListSlice = createSlice({
  name: "sortedProductsList",
  initialState,
  reducers: {
    sortProductsList(state, action) {
      switch (action.payload.sortBasedOn) {
        case "all":
          state.productsList = action.payload.productsList;
          break;
        case "newestProducts": {
          state.productsList = newestProductsFn(state.productsList);
          break;
        }
        case "popular": {
          state.productsList = state.productsList.sort((a, b) => b.popularity - a.popularity);
          break;
        }
        case "cheapest": {
          state.productsList = state.productsList.sort((a, b) => {
            const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
            const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
            return priceA - priceB;
          });
          break;
        }
        case "expensive": {
          state.productsList = state.productsList.sort((a, b) => {
            const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
            const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
            return priceB - priceA;
          });
          break;
        }
      }
    },
  },
});

export const SortedProductsListActions = SortedProductsListSlice.actions;

export default SortedProductsListSlice.reducer;