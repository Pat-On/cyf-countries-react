import "./App.css";

import React, { useEffect, useState } from "react";

import CountryElement from "./countryElement";
import SearchBar from "./SearchBar";

function App() {
  const [allCountries, allCountriesHandler] = useState([]);
  const [searchResults, searchResultsHandler] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        allCountriesHandler(data);
        searchResultsHandler(data);
      });
  }, []);

  const searchCountryFunction = (e) => {
    e.preventDefault();
    // let arr = [];
    // switch (girlsBoysEverybody) {
    //   case 1:
    //     arr = jsonData.filter((item) => item.sex === "f");
    //     break;
    //   case 2:
    //     arr = jsonData.filter((item) => item.sex === "m");
    //     break;
    //   case 3:
    //     arr = [...jsonData];
    //     break;
    //   default:
    //     break;
    // }
    const query = e.target.value;
    const filteredCountries = allCountries.filter((item) => {
      return (
        item.name.toUpperCase().includes(query.toUpperCase()) ||
        item.capital.toUpperCase().includes(query.toUpperCase())
      );
    });
    searchResultsHandler(filteredCountries);
  };

  return (
    <div className="App">
      <SearchBar searchFunction={searchCountryFunction} />
      <div className="countryContainer">
        {searchResults.map((item, index) => (
          <CountryElement key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
