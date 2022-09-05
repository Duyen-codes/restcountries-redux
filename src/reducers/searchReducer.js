import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    handleSearch(state, action) {
      const search = action.payload;
      return search;
    },
  },
});

export const { handleSearch } = searchSlice.actions;
export default searchSlice.reducer;
