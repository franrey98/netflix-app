import React from "react";
import { URL_IMG } from "../../context/MoviesContext";

const CardMovies = ({ item }) => {
  return (
    <>
      <img
        style={{
          width: "90%",
          height: "400px",
          objectFit: "cover",
          marginBottom: "10px",
          borderRadius: "1rem",
        }}
        src={`${URL_IMG + item?.poster_path}`}
        alt="poster img"
      />
    </>
  );
};

export default CardMovies;
