import React, { useState } from "react";
import styled from "styled-components";
import img from "../img/pulpfiction.jpg";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Link as LinkSmoth } from "react-scroll";
import { useMovies } from "../hooks/useMovies";

const Navbar = () => {
  const { searchMovie } = useMovies();

  const navigate = useNavigate();

  const [movie, setMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie === "") {
      console.log("La busqueda esta vacia");
      return;
    }
    searchMovie(movie);
    navigate("resultSearch");
  };

  return (
    <ImgBg>
      <Container>
        <FlexItems>
          <Title to="/">Netflix App</Title>
          <Button to="/BrowseMore">Browse +</Button>
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
      <ContainerMain onSubmit={handleSubmit}>
        <TextMain>Your favourite movies.Explained.</TextMain>
        <Text>Figure out what happened. Then find out why.</Text>
        <div style={{ position: "relative" }}>
          <BsSearch className="icon-search" />
          <InputSearch
            onChange={(e) => setMovie(e.target.value)}
            placeholder="  Search for a movie..."
          />
          <ButtonSearch type="submit">Search</ButtonSearch>
        </div>
      </ContainerMain>
    </ImgBg>
  );
};

// Uno lleva a pagina de inicio, el otro al login.
const Title = styled(Link)`
  text-decoration: none;
  font-size: 26px;
  text-align: center;
  color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
`;

const FlexItems = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2rem;
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
const ButtonSearch = styled.button`
  text-decoration: none;
  font-size: 23px;
  font-weight: 500;
  text-align: center;
  color: #fafafa;
  border: none;
  background: #1ea2d6;
  cursor: pointer;
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 2rem;
  margin-left: 10px;
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

const ContainerMain = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15rem;
  padding-left: 7rem;
  padding-right: 7rem;
`;

const TextMain = styled.h1`
  font-size: 2.8rem;
  margin-top: 5rem;
  margin-bottom: 0;
  text-align: center;
  color: #ffffff;
`;
const Text = styled.p`
  font-size: 28px;
  text-align: center;
  color: #ffffff;
`;
const InputSearch = styled.input`
  border: 1px solid;
  margin-top: 1rem;
  padding-left: 4rem;
  padding-right: 9rem;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 3rem;
  font-size: 20px;
  color: #532434;
`;

const ImgBg = styled.div`
  width: 100%;
  height: 40rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${img});
`;
export default Navbar;
