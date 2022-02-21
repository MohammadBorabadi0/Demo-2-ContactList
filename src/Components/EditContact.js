import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

import { useContact } from "../Provider/ContactProvider";

const EditContact = ({ match }) => {
  const history = useHistory();
  const contactList = useContact();
  const contactId = Number(match.params.id);
  const findItem = contactList.find((i) => i.id === contactId);

  const [editValues, setEditValues] = useState({
    name: findItem.name,
    email: findItem.email,
  });

  const changeHandler = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const editHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/posts/${findItem.id}`, {
      name: editValues.name,
      email: editValues.email,
    });
    history.push("/");
  };

  return (
    <div className="add-contact">
      <form onSubmit={(e) => editHandler(e)}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={editValues.name}
          onChange={changeHandler}
        />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="email"
          value={editValues.email}
          onChange={changeHandler}
        />
        <div className="buttons">
          <button className="btn btn-primary" type="submit">
            Edit Contact
          </button>
          <Link className="btn btn-danger" to="/">
            Back To Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
