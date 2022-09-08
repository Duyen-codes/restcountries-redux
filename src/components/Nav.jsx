import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <img src="../assets/shared/logo.svg" alt="" />

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
