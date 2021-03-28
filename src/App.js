import "./App.css";

import React, { useEffect, useState } from "react";
import CountryElement from "./countryElement";

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
  });

  return (
    <div className="App">
      <div className="countryContainer">
        {searchResults.map((item, index) => (
          <CountryElement key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
