import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useMovies } from "../hooks/useMovies";

const BoxNav = styled.div`
  background-color: black;
`;
const Container = styled.div`
  background-color: red;
`;

const FavoritesMovies = () => {
  const [favMovieList, setFavMovieList] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("favmovie"));
    setFavMovieList(storage);
  }, []);

  if (favMovieList === null) {
    return <p>No hay peliculas favoritas</p>;
  }

  return (
    <div>
      <BoxNav>
        <Nav />
      </BoxNav>
      <h1 style={{ textAlign: "center" }}>Movies Favorites</h1>

      <Container>{/*Mapeo con las peliculas favoritas */}</Container>
      {favMovieList.map((items) => (
        <div key={items?.id}>
          <img
            style={{ height: "250px", width: "250" }}
            src={items?.img}
            alt={items?.title}
          />
          <h3>{items?.title}</h3>
          <p>{items?.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesMovies;
