import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import React from "react";
import {
  Movie,
  MovieAddFavorite,
  MovieDBNowPlaying,
  MoviesSearch,
} from "../interfaces/interfaceMovieDetail";

export const URL = process.env.REACT_APP_API_ROUTE;
export const KEY = process.env.REACT_APP_API_KEY;
export const URL_IMG = process.env.REACT_APP_IMAGE_ROUTE;

export const MoviesContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const MoviesProvider: React.FC<Props> = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [recentlyAdd, setRecentlyAdd] = useState<Movie[]>([]);
  const [moviesSearch, setMoviesSearch] = useState<MoviesSearch[]>([]);
  const [movieDetail, setMovieDetail] = useState<MovieDBNowPlaying | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  let tempMoviesFav;
  console.log(tempMoviesFav);
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
          }, 2000);
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
          }, 2000);
          setRecentlyAdd(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = async (movie: string) => {
    setIsLoading(true);
    try {
      await fetch(`${URL}/3/search/movie?api_key=${KEY}&query=${movie}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          setMoviesSearch(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailMovie = async (id: number) => {
    console.log(id);
    setIsLoading(true);
    try {
      await fetch(`${URL}/3/movie/${id}?api_key=${KEY}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          setMovieDetail(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavMovie = (movies: MovieAddFavorite) => {
    let findMovie = tempMoviesFav.find((movie: MovieAddFavorite) => {
      return movies.id === movie.id;
    });

    if (!findMovie) {
      tempMoviesFav.push(movies);
      localStorage.setItem("favmovie", JSON.stringify(tempMoviesFav));
      Swal.fire({
        title: "This movie was added to favorites",
      });
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
        addFavMovie,
        tempMoviesFav,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
