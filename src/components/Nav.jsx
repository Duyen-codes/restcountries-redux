import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import logoIcon from "../assets/shared/logo.svg";

const Nav = (props) => {
  return (
    <nav className={classes.nav}>
      <img src={logoIcon} alt="" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/countries">Countries</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            Favorites{" "}
            <span>
              {props.favorites.length > 0 ? props.favorites.length : ""}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
