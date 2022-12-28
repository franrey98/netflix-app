import React from "react";
import CardSearch from "../components/Cards/CardSearch";
import { useMovies } from "../hooks/useMovies";
import Footer from "../layout/Footer";
import styled from "styled-components";
import Nav from "../components/Nav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
  padding: 4rem 6rem 0rem 6rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div`
  background-color: #150c22;
  border-radius: 10px;
  max-height: 250px;
  width: 100%;
  @media (min-width: 768px) {
    width: 25rem;
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
  margin-top: 2rem;
  padding-top: 1px;
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
    return <p>Cargando</p>;
  }

  // if (moviesSearch?.length === 0) {
  //   return (
  //     <BoxError>
  //       <BoxNav>
  //         <Nav />
  //       </BoxNav>
  //       <p>Error en el intento de busqueda</p>
  //       <BoxFooter>
  //         <Footer color={colorResult} />
  //       </BoxFooter>
  //     </BoxError>
  //   );
  // }

  return (
    <>
      <BoxNav>
        <Nav />
      </BoxNav>
      <Container>
        <Box>
          <Text>Result of the search</Text>
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
      <BoxFooter>
        <Footer color={colorResult} />
      </BoxFooter>
    </>
  );
};

export default ResultsSearch;
