import React from "react";
import GlobalStyles from "./Globalstyles";
import Router from "./Router";
import { hot } from "react-hot-loader";
import "materialize-css/dist/css/materialize.min.css";
function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default hot(module)(App);
