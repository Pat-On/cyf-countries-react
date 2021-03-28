import React from "react";

const countryElement = (props) => {
  return (
    <div
      onClick={(e) => props.functionToDisplayDetails(e, props.item.alpha3Code)}
      className="countryElement"
    >
      <img src={props.item.flag} alt={props.item.name} />
      <h2>{props.item.name}</h2>
      <p>Population: {props.item.population}</p>
      <p>Region: {props.item.region}</p>
      <p>Capital: {props.item.capital}</p>
    </div>
  );
};

export default countryElement;
