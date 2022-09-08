import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import logoIcon from "../assets/shared/logo.svg";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <img src={logoIcon} alt="" />
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
