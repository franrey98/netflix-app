import React from "react";
import styled from "styled-components";
import { useMovies } from "../../hooks/useMovies";
import Spinner from "../../utils/Spinner";
import CarrouselRecently from "../Carrousel/CarrouselRecently";

const Box = styled.div``;

const ContainerRecently = () => {
  const { isLoading } = useMovies();

  if (isLoading)
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Spinner />
      </div>
    );

  return (
    <Box>
      <CarrouselRecently />
    </Box>
  );
};

export default ContainerRecently;
