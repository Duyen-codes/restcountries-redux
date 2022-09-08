import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { handleSearch } from "../reducers/searchReducer";

const api_key = process.env.REACT_APP_API_KEY;

const Country = () => {
  let location = useLocation();
  const { countries } = location.state;
  const [country, setCountry] = useState(location.state.country);
  const [weather, setWeather] = useState("");

  const languages = country?.languages;
  const currencies = country?.currencies;

  const lat = country?.latlng[0];
  const lon = country?.latlng[1];

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [lat, lon]);

  const navigate = useNavigate();

  const backToPrevious = () => {
    navigate("/countries");
  };

  const handleCountryChange = (borderCountryClicked) => {
    const borderCountry = countries.find(
      (country) => country.cca3.toLowerCase() === borderCountryClicked
    );
    setCountry(borderCountry);
  };
  return (
    <div className="country">
      <button onClick={backToPrevious} className="btn back-btn">
        <i className="fa-solid fa-arrow-left"></i>Back
      </button>

      <div className="country-details">
        <img src={country?.flags?.svg} alt="" />

        <div className="country-content">
          <div className="country-content-middle">
            <div className="content-middle-left">
              <div>
                <span className="native-name country-info">Native Name: </span>
                <span>
                  {country?.name?.nativeName?.eng?.official ||
                    country?.name?.nativeName?.ara?.official}
                </span>
              </div>
              <div>
                <span className="population country-info">Population: </span>
                <span>{country?.population}</span>
              </div>
              <div>
                <span className="region country-info">Region: </span>
                <span>{country?.region}</span>
              </div>
              <div>
                <span className="sub-region country-info">Sub Region: </span>
                <span>{country?.subregion}</span>
              </div>
              <div>
                <span className="capital country-info">Capital: </span>
                <span>{country?.capital[0]}</span>
              </div>
              <a href={country?.maps.googleMaps}>{country?.maps.googleMaps}</a>
            </div>

            <div className="content-middle-right">
              <div>
                <span className="domain country-info">Top Level Domain: </span>
                <span></span>
              </div>
              <div>
                <span className="currency country-info">Currencies:</span>
                <span>
                  {Object.values(currencies || {}).map((val, index) => {
                    return (
                      <span key={index}>
                        {val.name} {val.symbol}
                      </span>
                    );
                  })}
                </span>
              </div>

              <div>
                <span className="language country-info">Languages: </span>
                {/* {languages &&
                  Object.values(languages).map((val, index) => {
                    return <span key={index}>{val}</span>;
                  })} */}
                {languages &&
                  Object.values(languages)
                    .map((val) => val)
                    .join(", ")}
              </div>
            </div>
          </div>

          <div className="border-country-container">
            <span>Border Countries:</span>
            <div className="country-buttons">
              {country?.borders?.map((border, index) => {
                return (
                  <Link
                    key={index}
                    to={`/countries/${border}`}
                    onClick={() => handleCountryChange(border.toLowerCase())}
                    className="border-country-btn"
                    state={{ country: country, countries: countries }}
                  >
                    {border}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/************  Weather  *************/}
        <div>
          <h2>Weather in {country?.capital[0]}</h2>
          <p>Temperature: {weather?.main?.temp} °C</p>
          <p>Weather description: {weather?.weather?.[0]?.description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
            alt=""
          />
          <p>Wind: {weather?.wind?.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
