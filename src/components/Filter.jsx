import React from "react";
import { useDispatch } from "react-redux";
import { handleFilter } from "../reducers/filterReducer";
import classes from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(handleFilter(event.target.value));
  };

  return (
    <select
      className={classes.select}
      name="regions"
      id="regions"
      aria-label="regions"
      onChange={handleChange}
    >
      <option value="" hidden>
        Filter by Region
      </option>
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Filter;
