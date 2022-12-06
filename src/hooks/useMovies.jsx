import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export const useMovies = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("useMovies must be used within an MoviesProvider");
  }

  return context;
};
