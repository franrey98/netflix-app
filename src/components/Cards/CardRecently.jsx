import React from "react";
import { URL_IMG } from "../../context/MoviesContext";

const CardRecently = ({ item }) => {
  return (
    <div>
      {" "}
      <img
        style={{
          width: "90%",
          height: "400px",
          objectFit: "contain",
          borderRadius: "1rem",
        }}
        src={`${URL_IMG + item?.poster_path}`}
        alt="poster img"
      />
    </div>
  );
};

export default CardRecently;
