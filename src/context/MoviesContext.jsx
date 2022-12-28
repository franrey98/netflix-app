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
  let tempMoviesFav;

  useEffect(() => {
    requestMovies();
    recentlyAdded();
  }, []);

  const storage = localStorage.getItem("favmovie");

  if (storage === null) {
    tempMoviesFav = [];
  } else {
    tempMoviesFav = JSON.parse(storage);
  }

  const requestMovies = async () => {
    setIsLoading(true);
    try {
      await fetch(`${URL}/3/movie/popular?api_key=${KEY}&language=en-US&page=1`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setPopularMovies(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const recentlyAdded = async () => {
    setIsLoading(true);
    try {
      await fetch(
        `${URL}/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setRecentlyAdd(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async (movie) => {
    setIsLoading(true);
    try {
      await fetch(`${URL}/3/search/movie?api_key=${KEY}&query=${movie}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setMoviesSearch(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailMovie = async (id) => {
    setIsLoading(true);
    try {
      await fetch(`${URL}/3/movie/${id}?api_key=${KEY}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setMovieDetail(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavMovie = (movies) => {
    tempMoviesFav.push(movies);
    localStorage.setItem("favmovie", JSON.stringify(tempMoviesFav));
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
        addFavMovie,
        tempMoviesFav,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
