import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "../reducers/countryReducer";
import { setIsLoading } from "../reducers/loadingReducer";
import { Link } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";
import LoadingSpinner from "./LoadingSpinner";
import classes from "./Countries.module.css";

import { addFavorite, removeFavorite } from "../reducers/favoritesReducer";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

const Countries = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.isLoading);
  const countries = useSelector((state) => state.countries);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(initializeCountries()).then(() => dispatch(setIsLoading(false)));
  }, [dispatch]);

  const countriesToShow = useSelector((state) => {
    if (state.search.length > 0) {
      return state.countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(state.search.toLowerCase());
      });
    } else if (state.filter === "" || state.filter === "all") {
      return state.countries;
    }
    return state.countries.filter((country) =>
      country.continents[0].toLowerCase().includes(state.filter.toLowerCase())
    );
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className={classes.countries}>
      <Search />
      <Filter />
      <div className="cards">
        {countriesToShow.map((country, index) => (
          <div
            className="card"
            key={index}
            to={`/countries/:${country.cca3}`}
            state={{ countries: countries, country: country }}
          >
            <img src={country.flags.svg} />
            <div className="content">
              <h3 className="name">{country.name.common}</h3>
              <span>
                {favorites.some(
                  (fav) => fav.name.common === country.name.common
                ) ? (
                  <Checkbox
                    onChange={() => dispatch(removeFavorite(country))}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    checked
                  />
                ) : (
                  <Checkbox
                    onChange={() => dispatch(addFavorite(favorites, country))}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                    size="big"
                    checked={false}
                  />
                )}
              </span>
              <div>
                <span className="country-info">Population: </span>
                <span className="population">{country.population}</span>
              </div>
              <div>
                <span className="country-info">Region: </span>
                <span className="region">{country.region}</span>
              </div>

              <div>
                <span className="country-info">Capital: </span>
                <span className="capital">{country.capital}</span>
              </div>
              <Button
                variant="contained"
                size="large"
                sx={{ marginTop: "1rem" }}
              >
                <Link
                  to={`/countries/:${country.cca3}`}
                  state={{ countries: countries, country: country }}
                >
                  See more
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
