import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Countries from "./components/Countries";
import Country from "./components/Country";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { useState } from "react";

import { Container, AppBar, Toolbar, Button } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <Router>
      {/* <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to="/home">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/countries">Countries</Link>
          </Button>
        </Toolbar>
      </AppBar> */}
      <Nav />
      <Routes>
        <Route path="/countries" element={<Countries />} darkMode={darkMode} />
        <Route path="/" element={<Home />} />
        <Route
          path="/countries/:id"
          element={<Country />}
          darkMode={darkMode}
        />
      </Routes>
    </Router>
  );
}
export default App;
