import React from "react";
import styled from "styled-components";
import { useMovies } from "../../hooks/useMovies.jsx";
import CarrouselPopular from "../Carrousel/CarrouselPopular.jsx";

const Box = styled.div``;

const ContainerPopularMovies = () => {
  const { isLoading } = useMovies();

  if (isLoading)
    return (
      <div>
        <h1>El usuario se esta logueando, aguarde unos segundos</h1>
      </div>
    );
  return (
    <Box>
      <CarrouselPopular />
    </Box>
  );
};

export default ContainerPopularMovies;
