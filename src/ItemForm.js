import React from "react";

const ItemForm = ({ label, children, type = "text", placeholder,...otherProps }) => (
  <div>
    {type === "text" ? (
      <>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...otherProps} />
      </>
    ) : (
      <>
        <label />
        <input type={type} placeholder={placeholder} {...otherProps} />
        {label}
      </>
    )}
  </div>
);

export default ItemForm;
