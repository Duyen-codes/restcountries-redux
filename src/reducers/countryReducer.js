import { createSlice } from "@reduxjs/toolkit";
import countryService from "../services/countries";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    setCountries(state, action) {
      return action.payload;
    },
  },
});

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();

    const sortedCountries = await countries.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    dispatch(setCountries(sortedCountries));
  };
};

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
