import React from "react";
import { URL_IMG } from "../context/MoviesContext";

const CardPopularMovies = ({ item }) => {
  return (
    <div>
      <img
        style={{
          width: "90%",
          height: "350px",
          objectFit: "cover",
          marginBottom: "10px",
          borderRadius: "1rem",
        }}
        src={`${URL_IMG + item.poster_path}`}
        alt="poster img"
      />
    </div>
  );
};

export default CardPopularMovies;
