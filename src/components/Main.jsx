import React, { useEffect } from "react";
import ContainerPopularMovies from "./ContainerPopularMovies";
import styled from "styled-components";

const Main = () => {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <StyleMain>
          <Title>* Popular Movies</Title>
          <ViewAll>View All </ViewAll>
        </StyleMain>
        <ContainerPopularMovies />
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
`;

const StyleMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
