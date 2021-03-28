import React from "react";

const SelectMenu = (props) => {
  return (
    <div className="selectMenuContainer">
      <select onChange={props.selectFunction}>
        <option value="ALL">SHOW ALL</option>
        {props.regionsOptions.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectMenu;
