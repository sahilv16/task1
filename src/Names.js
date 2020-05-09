import React from "react";

import ItemForm from "./ItemForm";

const Names = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  return (
    <div className="form">

      <h1>Multi-Step Form <img src="https://img.icons8.com/cute-clipart/64/000000/form.png" /> </h1>
      <ItemForm
        label="First Name"
        name="firstName"
        placeholder = "First Name"
        value={firstName}
        onChange={setForm}
      />
      <ItemForm
        label="Last Name"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={setForm}
      />
      <ItemForm
        label="Nick Name"
        name="nickName"
        placeholder="Nick Name"
        value={nickName}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Names;
