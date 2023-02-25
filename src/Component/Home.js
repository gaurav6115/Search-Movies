import React, { useState } from "react";

// import {SearchIcon} from "@mui/icons-material";
import Movies from "./Movies";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [moviesDetail, setMoviesDetail] = useState([]);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const searchValue = e.target.value;
    searchValue.replaceAll(" ", "+")
    setSearch(searchValue);
  };

  const fetchApi = () => {
    console.log(search);
    try {
      fetch(`https://www.omdbapi.com/?apikey=2bd1a366&s=${search}`)
        .then((resp) => resp.json())
        .then((data) => {
          setMoviesDetail(data.Search);
          setError(data.Error);
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = () => {
    fetchApi();
  };

  return (
    <div>
      <div className="searchContainer">
        {/* <SearchIcon /> */}
        <input
          type="text"
          value={search}
          onChange={handleInput}
          placeholder="Search..."
          className="inputBox"
        />
      </div>
      <button className="searchBtn" onClick={searchMovie}>
        Search Now!
      </button>
      <Movies moviesDetail={[...moviesDetail]} error={error} />
    </div>
  );
};

export default Home;
