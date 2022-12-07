import React from "react";
import { URL_IMG } from "../context/MoviesContext";

const CardRecently = ({ card }) => {
  console.log(card);
  return (
    <div>
      {" "}
      <img
        style={{ width: "100%", height: "400px" }}
        src={`${URL_IMG + card.poster_path}`}
        alt="poster img"
      />
    </div>
  );
};

export default CardRecently;
