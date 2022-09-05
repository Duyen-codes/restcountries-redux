import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../reducers/searchReducer";
import classes from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const handleChange = (event) => {
    dispatch(handleSearch(event.target.value));
  };

  const handleCancelSearch = async (event) => {
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
      />
      {search && <ClearIcon onClick={handleCancelSearch} fontSize="large" />}
    </div>
  );
};

export default Search;
