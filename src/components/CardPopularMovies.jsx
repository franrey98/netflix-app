import React from "react";
import { URL_IMG } from "../context/MoviesContext";

const CardPopularMovies = ({ item }) => {
  console.log(item);
  return (
    <div>
      <img
        style={{ width: "100%", height: "350px" }}
        src={`${URL_IMG + item.poster_path}`}
        alt="poster img"
      />
    </div>
  );
};

export default CardPopularMovies;
