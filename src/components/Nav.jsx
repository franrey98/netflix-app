import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkSmoth } from "react-scroll";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 0rem;
  padding-top: 2rem;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 2rem;
  }
`;

const Title = styled(Link)`
  text-decoration: none;
  font-size: 26px;
  text-align: center;
  color: #ffffff;
`;

const Button = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  border: none;
  background: none;
  cursor: pointer;
`;

const FlexItems = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2rem;
`;

const ButtonSignUp = styled(LinkSmoth)`
  font-size: 1.5em;
  text-align: center;
  background: none;
  color: #c85a14;
  border: 2px solid;
  border-radius: 2rem;
  cursor: pointer;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: 600;
  :hover {
    transition: all 0.3s;
    background-color: #c85a14;
    color: white;
    border-color: #c85a14;
  }
`;

const Nav = () => {
  return (
    <Container>
      <FlexItems>
        <Title to="/">Netflix App</Title>
        <Button to="/BrowseMore">Browse +</Button>
        <Button to="/favoriteMovies">My Favorites Movies</Button>
      </FlexItems>
      <FlexItems>
        <Title to="/login">Login</Title>
        <ButtonSignUp
          smooth={true}
          offset={50}
          duration={500}
          to="createAccount"
        >
          Sign Up
        </ButtonSignUp>
      </FlexItems>
    </Container>
  );
};

export default Nav;
