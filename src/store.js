import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./reducers/countryReducer";

import loadingReducer from "./reducers/loadingReducer";
import searchReducer from "./reducers/searchReducer";
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    isLoading: loadingReducer,
    search: searchReducer,
    filter: filterReducer,
  },
});

export default store;
