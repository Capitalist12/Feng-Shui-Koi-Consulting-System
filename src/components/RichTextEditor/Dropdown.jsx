import React from "react";

export const Dropdown = ({ list, className }) => {
  return (
    <select className={className}>
      {Array.isArray(list) &&
        list.map((item, index) => <option key={index} value={item}></option>)}
    </select>
  );
};

export default Dropdown;
