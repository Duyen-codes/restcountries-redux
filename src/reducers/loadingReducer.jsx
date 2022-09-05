import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "isLoading",
  initialState: true,
  reducers: {
    setIsLoading: (state, action) => {
      const isLoading = action.payload;
      return isLoading;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
