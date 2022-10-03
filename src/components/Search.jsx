import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../reducers/searchReducer";
import { initializeCountries } from "../reducers/countryReducer";
import classes from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const countries = useSelector((state) => state.countries);
  const handleChange = (event) => {
    dispatch(handleSearch(event.target.value));
  };

  const handleCancelSearch = async (event) => {
    dispatch(initializeCountries(countries));
    dispatch(handleSearch(""));
  };

  return (
    <div className={classes.search}>
      <SearchIcon fontSize="large" />
      <input
        type="text"
        onChange={handleChange}
        name="search"
        placeholder="search..."
        value={search}
      />
      {search.length > 0 && (
        <Tooltip title="cancel search">
          <IconButton onClick={handleCancelSearch} sx={{ color: "white" }}>
            <ClearIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default Search;
