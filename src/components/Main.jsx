import React, { useEffect } from "react";
import styled from "styled-components";
import { useMovies } from "../hooks/useMovies";

const Main = () => {
  const { popularMovies } = useMovies();

  console.log(popularMovies);

  return (
    <div style={{ width: "100%" }}>
      <StyleMain>
        <Title>* Popular Movies</Title>
        <ViewAll>View All testbranch</ViewAll>
      </StyleMain>
    </div>
  );
};

const StyleMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 10rem;
  padding-right: 10rem;
`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #000000;
`;

const ViewAll = styled.p`
  font-size: 1em;
  text-align: center;
  color: #000000;
`;

export default Main;
