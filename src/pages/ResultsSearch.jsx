import React from "react";
import { URL_IMG } from "../context/MoviesContext";
import { useMovies } from "../hooks/useMovies";

const ResultsSearch = () => {
  const { moviesSearch } = useMovies();

  console.log(moviesSearch.results);
  const movies = moviesSearch.results;
  return (
    <div>
      {movies?.slice(0, 6).map((movie) => (
        <div>
          <h1>{movie?.title}</h1>
          <img
            style={{ width: "200px", height: "200px" }}
            src={`${URL_IMG + movie?.poster_path}`}
            alt={movie?.title}
          />
          <p>{movie?.overview}</p>
          <p>{movie?.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsSearch;
