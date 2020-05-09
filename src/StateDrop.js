import React from "react";

const states = [
  ["DIH","Delhi"],
  ["MUM", "Mumbai"],
  ["CHD", "Chandigarh"]
];

const StateDrop = ({ label, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others}>
      {states.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

export default StateDrop;
