import React from "react";

const countryFullDetails = (props) => {
  //   console.log(props.country[0].name);
  if (props.country.length === 0) return null;

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <button onClick={props.returnFunction}>BACK</button>
      <div
        style={{ width: "400px", margin: "auto" }}
        className="countryElement"
      >
        <img src={props.country[0].flag} alt={props.country[0].name} />
        <h2>{props.country[0].name}</h2>
        <p>Native Name: {props.country[0].nativeName}</p>
        <p>Population: {props.country[0].population}</p>
        <p>Region: {props.country[0].region}</p>
        <p>Sub Region: {props.country[0].subregion}</p>
        <p>Capital: {props.country[0].capital}</p>
        <p>Top Level Domain: {props.country[0].topLevelDomain}</p>
        <p>Currencies: {props.country[0].currencies[0].name}</p>
        <p>
          Languages:{" "}
          {props.country[0].languages.map((item) => item.name).join(", ")}
        </p>
        <span>
          Border Countries:
          {props.country[0].borders.map((item) => (
            <button
              onClick={(e) => props.selectNeighbours(e, item)}
              style={{ margin: "10px" }}
            >
              {item}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default countryFullDetails;
