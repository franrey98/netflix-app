import React from "react";
import styled from "styled-components";
import CardMovieDetail from "../components/Cards/CardMovieDetail";
import Nav from "../components/Nav";
import Footer from "../layout/Footer";
import { BoxNav } from "./ResultsSearch";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const BoxFooter = styled.div`
  background-color: #150c22;
`;

const MovieDetail = () => {
  const colorResult = true;

  return (
    <Box>
      <BoxNav>
        <Nav />
      </BoxNav>
      <CardMovieDetail />
      <BoxFooter>
        <Footer color={colorResult} />
      </BoxFooter>
    </Box>
  );
};

export default MovieDetail;
