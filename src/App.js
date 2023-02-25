import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./Component/Home";
import Movies from "./Component/Movies";

const App = () => {
  return (
    <div>
      <h1 className="header main">Movies App</h1>
      <div className="appContainer">
        <h1 className="header">Search For Movies By Their Title</h1>

        <Link to="/"></Link>
        <Link to="/movies/${ID}"></Link>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/${ID}" element={<Movies />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
