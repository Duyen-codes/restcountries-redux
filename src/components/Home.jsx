import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <h1>
        So, you want to travel the <span>World</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, possimus
        esse quis quaerat eligendi debitis quam iste, ullam mollitia culpa
        suscipit numquam accusantium vitae nam quisquam dicta deleniti ducimus
        quos natus illum assumenda fuga error pariatur omnis. Ducimus nulla et
        fugit. Mollitia recusandae fugiat voluptatibus minus quidem ducimus iste
        debitis?
      </p>

      <Link to="/countries">Explore</Link>
    </div>
  );
};

export default Home;
