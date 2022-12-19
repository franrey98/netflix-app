import React from "react";
import CardSearch from "../components/Cards/CardSearch";
import { useMovies } from "../hooks/useMovies";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ResultsSearch = () => {
  const { moviesSearch } = useMovies();

  console.log(moviesSearch);
  const movies = moviesSearch.results;

  return (
    <>
      <Logo>
        <Link
          style={{
            color: "#eeeeee",
            textDecoration: "none",
          }}
          to="/"
        >
          Netflix App
        </Link>
      </Logo>
      <Container>
        <Box>
          <Text>Result of the search</Text>
          <TextLength>{moviesSearch?.results?.length}</TextLength>
        </Box>
        {moviesSearch?.results?.length === 0 && (
          <TextError>La busqueda es incorrecta</TextError>
        )}
        <BoxCard>
          {movies?.slice(0, 6).map((movie) => (
            <CardSearch movie={movie} key={movie.id} />
          ))}
        </BoxCard>
      </Container>
      <BoxFooter>
        <Footer />
      </BoxFooter>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  padding: 8rem 6rem 0rem 6rem;
`;

const Box = styled.div`
  background-color: #0a9ea3;
  border-radius: 10px;
  max-height: 250px;
  width: 25rem;
`;
const BoxCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.h3`
  text-align: center;
  font-size: 24px;
  color: white;
`;
const TextLength = styled.h3`
  text-align: center;
  font-size: 24px;
  color: white;
`;
const TextError = styled.h3`
  text-align: center;
  font-size: 24px;
  color: #df0101;
`;

const Logo = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem;
  padding-top: 2rem;
  padding-left: 6rem;
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  background-color: #2daf9e;
  margin: 0;
`;

const BoxFooter = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-top: 1px;
  background-color: #2daf9e;
`;

export default ResultsSearch;
