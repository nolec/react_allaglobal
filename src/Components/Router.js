import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Footer from "./Footer";
import Mfooter from "./Mfooter";
import { isMobile } from "react-device-detect";

export default () => (
  <Router>
    {!isMobile ? <Header /> : null}
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
    {!isMobile ? <Footer /> : <Mfooter />}
  </Router>
);
