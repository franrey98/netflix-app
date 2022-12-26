import React, { useState } from "react";
import styled from "styled-components";
import img from "../img/pulpfiction.jpg";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import Nav from "../components/Nav";

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
  font-size: 1.8rem;
  margin-top: 5rem;
  margin-bottom: 0;
  text-align: center;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
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
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 3rem;
  font-size: 20px;
  color: #532434;

  @media (min-width: 768px) {
    padding-right: 9rem;
  }
`;
const BoxSearch = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImgBg = styled.div`
  width: 100%;
  height: 45rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${img});
`;

const Navbar = () => {
  const { searchMovie } = useMovies();

  const navigate = useNavigate();

  const [movie, setMovie] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie === "") {
      setError(true);
      return;
    }
    searchMovie(movie);
    navigate("resultSearch");
  };

  return (
    <ImgBg>
      <Nav />
      <ContainerMain onSubmit={handleSubmit}>
        <TextMain>Your favourite movies.Explained.</TextMain>
        <Text>Figure out what happened. Then find out why.</Text>
        <BoxSearch>
          <BsSearch className="icon-search" />
          <InputSearch
            onChange={(e) => setMovie(e.target.value)}
            placeholder={
              error ? "The search is invalid" : " Search for a movie..."
            }
          />
          <ButtonSearch type="submit">Search</ButtonSearch>
          <br />
        </BoxSearch>
      </ContainerMain>
    </ImgBg>
  );
};

export default Navbar;
