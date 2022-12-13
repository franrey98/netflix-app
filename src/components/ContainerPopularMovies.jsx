import React from "react";
import styled from "styled-components";
import { useMovies } from "../hooks/useMovies.jsx";
import BrowseMore from "../pages/BrowseMore.jsx";
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
    <Box>
      <BrowseMore />
      {/* {popularMovies?.slice(0, 10).map((item) => (
        <CardPopularMovies item={item} key={item.id} />
      ))} */}
    </Box>
  );
};

const Box = styled.div``;

export default ContainerPopularMovies;
