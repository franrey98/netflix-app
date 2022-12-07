import React from "react";
import styled from "styled-components";
import { useMovies } from "../hooks/useMovies.jsx";
import CardPopularMovies from "./CardPopularMovies.jsx";

const ContainerPopularMovies = () => {
  const { popularMovies } = useMovies();
  return (
    <Grid>
      {popularMovies?.slice(0, 9).map((item) => (
        <CardPopularMovies item={item} />
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
