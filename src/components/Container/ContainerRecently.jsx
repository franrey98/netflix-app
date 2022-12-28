import React from "react";
import styled from "styled-components";
import { useMovies } from "../../hooks/useMovies";
import CarrouselRecently from "../Carrousel/CarrouselRecently";

const Box = styled.div``;

const ContainerRecently = () => {
  const { isLoading } = useMovies();

  if (isLoading)
    return (
      <div>
        <h1>El usuario se esta logueando, aguarde unos segundos</h1>
      </div>
    );

  return (
    <Box>
      <CarrouselRecently />
    </Box>
  );
};

export default ContainerRecently;
