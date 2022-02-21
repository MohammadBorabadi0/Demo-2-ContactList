import React, { Fragment } from "react";

// Components
import ContactApp from "./Components/ContactApp";
import ContactProvider from "./Provider/ContactProvider";

function App() {
  return (
    <Fragment>
      <ContactProvider>
        <ContactApp />
      </ContactProvider>
    </Fragment>
  );
}

export default App;
