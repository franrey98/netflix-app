import { createContext, useEffect, useState } from "react";

export const URL = process.env.REACT_APP_API_ROUTE;
export const KEY = process.env.REACT_APP_API_KEY;
export const URL_IMG = process.env.REACT_APP_IMAGE_ROUTE;

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  console.log(popularMovies);

  useEffect(() => {
    requestMovies();
  }, []);

  const requestMovies = async () => {
    try {
      await fetch(`${URL}/3/movie/popular?api_key=${KEY}&language=en-US&page=1`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setPopularMovies(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MoviesContext.Provider value={{ popularMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};