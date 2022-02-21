import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

// Context
import { useContact } from "../Provider/ContactProvider";

const ContactList = () => {
  const contactList = useContact();

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`);
  };

  return (
    <div className="contact-form">
      <div>
        <Link to="/add">
          <button className="btn btn-primary">Add Contact</button>
        </Link>
      </div>
      {contactList.length ? (
        <div>
          {contactList.map((item) => (
            <div key={item.id} className="contact-item">
              <h4>{item.name}</h4>
              <p>{item.email}</p>
              <div>
                <Link to={`/edit/${item.id}`}>
                  <button className="btn btn-edit">Edit</button>
                </Link>
                <button
                  onClick={() => deleteHandler(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
};

export default ContactList;
