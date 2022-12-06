import React from "react";
import { useMovies } from "../hooks/useMovies.jsx";
import CardPopularMovies from "./CardPopularMovies.jsx";

const ContainerPopularMovies = () => {
  const { popularMovies } = useMovies();
  return (
    <div>
      {popularMovies?.map((item) => (
        <CardPopularMovies item={item} />
      ))}
    </div>
  );
};

export default ContainerPopularMovies;
