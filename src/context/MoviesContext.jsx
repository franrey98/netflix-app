import { createContext, useEffect, useState } from "react";

export const URL = process.env.REACT_APP_API_ROUTE;
export const KEY = process.env.REACT_APP_API_KEY;
export const URL_IMG = process.env.REACT_APP_IMAGE_ROUTE;

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [recentlyAdd, setRecentlyAdd] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestMovies();
    recentlyAdded();
  }, []);

  const requestMovies = async () => {
    try {
      await fetch(`${URL}/3/movie/popular?api_key=${KEY}&language=en-US&page=1`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setIsLoading(false);
          setPopularMovies(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const recentlyAdded = async () => {
    try {
      await fetch(
        `${URL}/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setRecentlyAdd(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async (movie) => {
    try {
      await fetch(`${URL}/3/search/movie?api_key=${KEY}&query=${movie}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setMoviesSearch(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailMovie = async (id) => {
    try {
      await fetch(`${URL}/3/movie/${id}?api_key=${KEY}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setMovieDetail(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        popularMovies,
        recentlyAdd,
        isLoading,
        searchMovie,
        moviesSearch,
        getDetailMovie,
        movieDetail,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
