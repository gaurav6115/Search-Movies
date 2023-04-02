import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./Component/LandingPage";
import Movies from "./Component/Movies";

const App = () => {
  return (
    <div>
      <h1 className="header main">Movies App</h1>
      <div className="appContainer">
        <h1 className="header">Search For Movies By Their Title</h1>

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/movies/:IMDBID" element={<Movies />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
