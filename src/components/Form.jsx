import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", surname: "" });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>
        {form.name} {form.surname}
      </h2>

      <label htmlFor="name">
        {" "}
        Name:
        <input name="name" type="text" onChange={handleInput} />
      </label>
      <br />
      <label htmlFor="surname">
        {" "}
        Surname:
        <input name="surname" type="text" onChange={handleInput} />
      </label>
    </div>
  );
};

export default Form;
