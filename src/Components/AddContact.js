import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const AddContact = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addContactHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/posts", {
      name: formValues.name,
      email: formValues.email,
    });
    history.push("/");
  };

  return (
    <div className="add-contact">
      <form onSubmit={(e) => addContactHandler(e)}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onChange={changeHandler}
        />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={changeHandler}
        />
        <div className="buttons">
          <button className="btn btn-primary" type="submit">
            Add Contact
          </button>
          <Link className="btn btn-danger" to="/">
            Back To Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
