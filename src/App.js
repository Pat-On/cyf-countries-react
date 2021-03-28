import "./App.css";

import React, { useEffect, useState } from "react";

import CountryElement from "./countryElement";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountryFullDetails from "./CountryFullDetails";

function App() {
  const [allCountries, allCountriesHandler] = useState([]);
  const [searchResults, searchResultsHandler] = useState([]);
  const [arrOfRegions, arrOfRegionsHandler] = useState([]);
  const [arrayNeededToSearch, arrayNeededToSearchHandler] = useState([]);

  const [tooglerHiddenBoolean, tooglerHiddenBooleanHandler] = useState(true);
  const [countryToMoreDetail, countryToMoreDetailHandler] = useState([]);

  const returnFunction = () => {
    tooglerHiddenBooleanHandler(!tooglerHiddenBoolean);
  };

  const displayDetailsOfCountry = (e, code) => {
    e.preventDefault();

    const query = code;
    fetch(`https://restcountries.eu/rest/v2/alpha?codes=${query}`)
      .then((res) => res.json())
      .then((data) => {
        countryToMoreDetailHandler(data);
        tooglerHiddenBooleanHandler(false);
      });
  };

  const regionFunctionSelector = (e) => {
    const query = e.target.value;
    let arr = [];
    switch (query) {
      case "ALL":
        searchResultsHandler([...allCountries]);
        break;
      case "Asia":
        arr = allCountries.filter(
          (item) => item.region.toUpperCase() === query.toUpperCase()
        );
        searchResultsHandler([...arr]);
        arrayNeededToSearchHandler([...arr]);
        break;
      case "Europe":
        arr = allCountries.filter(
          (item) => item.region.toUpperCase() === query.toUpperCase()
        );
        searchResultsHandler([...arr]);
        arrayNeededToSearchHandler([...arr]);
        break;
      case "Africa":
        arr = allCountries.filter(
          (item) => item.region.toUpperCase() === query.toUpperCase()
        );
        searchResultsHandler([...arr]);
        arrayNeededToSearchHandler([...arr]);
        break;
      case "Oceania":
        arr = allCountries.filter(
          (item) => item.region.toUpperCase() === query.toUpperCase()
        );
        searchResultsHandler([...arr]);
        arrayNeededToSearchHandler([...arr]);
        break;
      case "Americas":
        arr = allCountries.filter(
          (item) => item.region.toUpperCase() === query.toUpperCase()
        );
        searchResultsHandler([...arr]);
        arrayNeededToSearchHandler([...arr]);
        break;
      case "Polar":
        arr = allCountries.filter(
          (item) => item.region.toUpperCase() === query.toUpperCase()
        );
        searchResultsHandler([...arr]);
        arrayNeededToSearchHandler([...arr]);
        break;
      case "":
        arr = allCountries.filter(
          (item) => item.region.toUpperCase() === query.toUpperCase()
        );
        searchResultsHandler([...arr]);
        arrayNeededToSearchHandler([...arr]);
        break;
      default:
        break;
    }
  };

  //region checker - helper function
  const regionsOfTheWorld = (array) => {
    const objectOfRegions = {};
    array.forEach((item) => {
      if (objectOfRegions[item.region]) {
        objectOfRegions[item.region] = objectOfRegions[item.region] + 1;
      } else {
        objectOfRegions[item.region] = 1;
      }
    });
    const arr = [];
    Object.keys(objectOfRegions).forEach((item) => arr.push(item));
    arrOfRegionsHandler(arr);
  };

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        allCountriesHandler(data);
        searchResultsHandler(data);
        arrayNeededToSearchHandler(data);
        regionsOfTheWorld(data); //helper function -> regions of the world
      });
  }, []);

  const searchCountryFunction = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    const query = e.target.value;
    const filteredCountries = arrayNeededToSearch.filter((item) => {
      return (
        item.name.toUpperCase().includes(query.toUpperCase()) ||
        item.capital.toUpperCase().includes(query.toUpperCase())
      );
    });
    searchResultsHandler(filteredCountries);
  };

  return (
    <div>
      {!tooglerHiddenBoolean ? (
        <CountryFullDetails
          selectNeighbours={displayDetailsOfCountry}
          returnFunction={returnFunction}
          country={countryToMoreDetail}
        />
      ) : null}

      <div className={tooglerHiddenBoolean ? "App" : "App hiddenClass"}>
        <SelectMenu
          selectFunction={regionFunctionSelector}
          regionsOptions={arrOfRegions}
        />
        <SearchBar searchFunction={searchCountryFunction} />
        <div className="countryContainer">
          {searchResults.map((item, index) => (
            <CountryElement
              functionToDisplayDetails={displayDetailsOfCountry}
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
