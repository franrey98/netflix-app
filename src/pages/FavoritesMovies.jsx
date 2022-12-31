import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardFavoriteMovie from "../components/Cards/CardFavoriteMovie";
import Nav from "../components/Nav";
import { useMovies } from "../hooks/useMovies";
import Spinner from "../utils/Spinner";

const BoxNav = styled.div`
  background-color: black;
`;
const Container = styled.div`
  padding: 2rem 6rem 1rem 6rem;
`;

const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const FavoritesMovies = () => {
  const { isLoading } = useMovies();
  const [favMovieList, setFavMovieList] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("favmovie"));
    setFavMovieList(storage);
  }, []);

  if (isLoading) {
    return (
      <div>
        <BoxNav>
          <Nav />
        </BoxNav>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "10rem",
          }}
        >
          <Spinner />
        </div>
      </div>
    );
  }

  if (favMovieList === null) {
    return <p>No hay peliculas favoritas</p>;
  }

  return (
    <div>
      <BoxNav>
        <Nav />
      </BoxNav>
      <h1 style={{ textAlign: "center" }}>My Favorites Movies</h1>

      <Container>
        <BoxCard>
          {favMovieList.map((items) => (
            <div key={items?.id}>
              <CardFavoriteMovie movie={items} />
            </div>
          ))}
        </BoxCard>
      </Container>
    </div>
  );
};

export default FavoritesMovies;
