import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context
const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const loadData = () => {
      axios
        .get("http://localhost:3001/posts")
        .then((res) => setContactList(res.data));
    };
    loadData();
  }, [contactList]);

  return (
    <ContactContext.Provider value={contactList}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;

// custom Hook
export const useContact = () => useContext(ContactContext);
