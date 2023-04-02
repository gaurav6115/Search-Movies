import React from "react";

import "./Movies.css";

// import KnowMoreBtn from "./KnowMoreBtn";

const Movies = ({ moviesDetail }) => {
  // const [imdbID, setimdbID] = useState();

  const handleKnowMore = () => {};

  return (
    <div className="movieContainer">
      {moviesDetail.map((data) => {
        return (
          <div key={data.imdbID} className="movieBox">
            <img src={data.Poster} className="img" />
            <div className="detail">
              <div className="title">Title : {data.Title}</div>
              <div className="title"> Type : {data.Type}</div>
              <div className="title"> Year : {data.Year}</div>
              {/* <button onClick={handleKnowMore} className="knomMoreBtn">
                Know More
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
