import React from "react";
import styled from "styled-components";
import { useMovies } from "../../hooks/useMovies.jsx";
import Spinner from "../../utils/Spinner.jsx";
import CarrouselPopular from "../Carrousel/CarrouselPopular.jsx";

const Box = styled.div``;

const ContainerPopularMovies = () => {
  const { isLoading } = useMovies();

  if (isLoading)
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Spinner />
      </div>
    );
  return (
    <Box>
      <CarrouselPopular />
    </Box>
  );
};

export default ContainerPopularMovies;
