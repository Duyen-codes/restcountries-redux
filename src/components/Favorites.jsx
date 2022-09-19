import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Favorites.module.css";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

import { addFavorite, removeFavorite } from "../reducers/favoritesReducer";

const Favorites = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const countries = useSelector((state) => state.countries);

  return (
    <div className={classes.favorites}>
      <h2 style={{ textAlign: "center" }}>Favorite Countries</h2>
      <div className="cards">
        {favorites.map((country, index) => (
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

              <Button variant="contained" size="large" mt={2}>
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

export default Favorites;
