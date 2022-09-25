import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Countries from "./components/Countries";
import Country from "./components/Country";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Favorites from "./components/Favorites";
import { useSelector } from "react-redux";

function App() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Router>
      <Nav favorites={favorites} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<Country />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}
export default App;
