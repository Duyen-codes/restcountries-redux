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

const Countries = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.isLoading);
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(initializeCountries()).then(() => dispatch(setIsLoading(false)));
  }, [dispatch]);

  //   const countries = useSelector((state) =>
  //     state.search === ""
  //       ? state.countries
  //       : state.countries.filter((country) => {
  //           return country.name.common
  //             .toLowerCase()
  //             .includes(state.search.toLowerCase());
  //         })
  //   );

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
          <Link
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
