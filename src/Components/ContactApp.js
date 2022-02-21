import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact";

const ContactApp = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/add" component={AddContact} />
        <Route path="/" exact component={ContactList} />
      </Switch>
    </div>
  );
};

export default ContactApp;
