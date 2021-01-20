import React from "react";
import styles from "./Routes.module.scss";
import { Router } from "@reach/router";
import Home from "../../Components/Home";

const Routes = () => {
  return (
    <>
      <Router>
        <Home path = "/"/>
      </Router>
    </>
  );
};

export default Routes;
