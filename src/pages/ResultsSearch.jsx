import React from "react";
import CardSearch from "../components/Cards/CardSearch";
import { useMovies } from "../hooks/useMovies";
import Footer from "../layout/Footer";
import styled from "styled-components";
import Nav from "../components/Nav";
import Spinner from "../utils/Spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
  padding: 4rem 2rem 2rem 2rem;
  @media (min-width: 1000px) {
    padding: 4rem 18rem 2rem 18rem;
  }
`;

const Box = styled.div`
  background-color: #150c22;
  border-radius: 10px;
  max-height: 250px;
  width: 100%;
  @media (min-width: 768px) {
    width: 20rem;
    margin: 0 auto;
  }
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

const BoxFooter = styled.div`
  width: 100%;
  background-color: #150c22;
`;

export const BoxNav = styled.div`
  width: 100%;
  background-color: #150c22;
  padding-bottom: 1rem;
`;
export const BoxError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const ResultsSearch = () => {
  const { moviesSearch, isLoading } = useMovies();
  const colorResult = true;

  // Filtrar por estrellas, hacer funcionabilidad.Ejemplo =>
  // console.log(
  //   moviesSearch?.results?.filter((items) => items?.vote_average > 6)
  // );

  if (isLoading) {
    return (
      <BoxError>
        <BoxNav>
          <Nav />
        </BoxNav>
        <Spinner />
        <BoxFooter>
          <Footer color={colorResult} />
        </BoxFooter>
      </BoxError>
    );
  }

  if (moviesSearch?.length === 0) {
    return (
      <BoxError>
        <BoxNav>
          <Nav />
        </BoxNav>
        <p>Error on the page, please go back to the beginning</p>
        <BoxFooter>
          <Footer color={colorResult} />
        </BoxFooter>
      </BoxError>
    );
  }

  return (
    <>
      <BoxNav>
        <Nav />
      </BoxNav>
      <Container>
        <Box>
          <Text>Search results</Text>
          <TextLength>{moviesSearch?.results?.length}</TextLength>
        </Box>
        {moviesSearch?.results?.length === 0 && (
          <TextError>La busqueda es incorrecta</TextError>
        )}
        <BoxCard>
          {moviesSearch?.results?.slice(0, 10).map((movie) => (
            <CardSearch movie={movie} key={movie.id} />
          ))}
        </BoxCard>
      </Container>
    </>
  );
};

export default ResultsSearch;
