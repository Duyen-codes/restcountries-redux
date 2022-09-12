import React from "react";
import { useSelector } from "react-redux";
import classes from "./Favorites.module.css";
import { Link } from "react-router-dom";

const Favorites = () => {
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

              <Link
                to={`/countries/:${country.cca3}`}
                state={{ countries: countries, country: country }}
              >
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
