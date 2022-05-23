import React from "react";

//Components and pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/GlobalStyles";
// Dom Router
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route key="Home" path={"/"} element={<Home />} />
        <Route key="Home" path={"/game/:id"} element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
