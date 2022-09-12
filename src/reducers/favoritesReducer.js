import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "favorites",
  initialState: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
  reducers: {
    appendFavorite(state, action) {
      state.push(action.payload);
    },

    setFavorites(state, action) {
      return action.payload;
    },

    removeFavorite(state, action) {
      const countryToRemove = action.payload;
      const newFavorites = state.filter(
        (country) => country.name.common !== countryToRemove.name.common
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    },
  },
});

export const { appendFavorite, setFavorites, removeFavorite } =
  cartSlice.actions;
export default cartSlice.reducer;
