import { createContext, useEffect, useState } from "react";

export const URL = process.env.REACT_APP_API_ROUTE;
export const KEY = process.env.REACT_APP_API_KEY;

console.log(process.env.REACT_APP_API_KEY);
console.log(URL);

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    requestMovies();
  }, []);

  const requestMovies = () => {
    try {
      fetch(`${URL}/movie/popular?api_key=${KEY}&language=en-US&page=1`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setPopularMovies(data);
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
