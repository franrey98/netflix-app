import React from "react";
import ContainerPopularMovies from "./ContainerPopularMovies";
import styled from "styled-components";
import ContainerRecently from "./ContainerRecently";
import { SlFire } from "react-icons/sl";
import { RiStackLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Main = () => {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <StyleMain>
          <FlexIcon>
            <SlFire className="icon-main" />
            <Title>Popular Movies</Title>
          </FlexIcon>
          <FlexIcon>
            <ViewAll>View All </ViewAll>
            <BsArrowRight />
          </FlexIcon>
        </StyleMain>
        <ContainerPopularMovies />
        <StyleMain>
          <FlexIcon>
            <RiStackLine className="icon-main" />
            <Title>Recently Added</Title>
          </FlexIcon>
          <FlexIcon>
            <ViewAll>View All</ViewAll>
            <BsArrowRight />
          </FlexIcon>
        </StyleMain>
        <ContainerRecently />
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

const FlexIcon = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const Title = styled.h2`
  margin-top: 5rem;
  margin-bottom: 3rem;
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
