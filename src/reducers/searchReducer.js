import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    handleSearch(state, action) {
      return action.payload;
    },
  },
});

export const { handleSearch } = searchSlice.actions;
export default searchSlice.reducer;
