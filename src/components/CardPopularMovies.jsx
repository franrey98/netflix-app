import React from "react";
import { URL_IMG } from "../context/MoviesContext";
import { useMovies } from "../hooks/useMovies";

const CardPopularMovies = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.title}
      <img
        style={{ width: "50px", height: "50px" }}
        src={`${URL_IMG + item.poster_path}`}
        alt="poster img"
      />
    </div>
  );
};

export default CardPopularMovies;
