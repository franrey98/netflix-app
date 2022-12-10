import React from "react";
import styled from "styled-components";
import { useMovies } from "../hooks/useMovies.jsx";
import CardPopularMovies from "./CardPopularMovies.jsx";

const ContainerPopularMovies = () => {
  const { popularMovies, isLoading } = useMovies();

  if (isLoading)
    return (
      <div>
        <h1>El usuario se esta logueando, aguarde unos segundos</h1>
      </div>
    );
  return (
    <Grid>
      {popularMovies?.slice(0, 10).map((item) => (
        <CardPopularMovies item={item} key={item.id} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export default ContainerPopularMovies;
