import React from "react";
import styled from "styled-components";
import { URL_IMG } from "../../context/MoviesContext";
import { useAuth } from "../../hooks/useAuth";
import { useMovies } from "../../hooks/useMovies";

const Img = styled.img`
  object-fit: contain;
  height: 450px;
  width: 18rem;
  @media (min-width: 800px) {
    padding-left: 10rem;
  }
`;

const Box = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 28px;
  color: white;
`;

const DisplayDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1180px) {
    padding-right: 15rem;
  }
`;

const DisplayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 4rem;
  padding-top: 7rem;
  @media (min-width: 1180px) {
    flex-direction: row;
  }
`;

const BoxDetails = styled.div`
  display: flex;
  width: 100%;
`;
const ItemDetail = styled.div`
  color: white;
  display: flex;
  gap: 1rem;
  margin: 0 6px 0 6px;
`;

const TitleProduction = styled.p`
  font-size: 20px;
  color: white;
`;

const ImgBack = styled.div`
  object-fit: contain;
  height: 1100px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.65)),
    url(${(props) => props.urlImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1180px) {
    height: 690px;
  }
`;

const CardMovieDetail = () => {
  const { movieDetail } = useMovies();

  if (Object.keys(movieDetail).length === 0) {
    return <p style={{ textAlign: "center" }}>La pagina esta vacia</p>;
  }
  return (
    <Box>
      <ImgBack urlImg={`${URL_IMG + movieDetail?.poster_path}`}>
        <DisplayBox>
          <Img
            src={`${URL_IMG + movieDetail?.poster_path}`}
            alt={movieDetail?.title}
          />
          <DisplayDetails>
            <Title>{movieDetail?.original_title}</Title>
            <BoxDetails>
              <ItemDetail>{movieDetail?.release_date}</ItemDetail>
              <ItemDetail>{movieDetail?.runtime}</ItemDetail>
              <ItemDetail>
                {movieDetail?.genres?.map((item) => (
                  <p
                    key={item.id}
                    style={{ display: "flex", gap: "2rem", margin: "0" }}
                  >
                    {item.name}
                  </p>
                ))}
              </ItemDetail>
            </BoxDetails>
            <BoxDetails>
              <ItemDetail>{movieDetail?.popularity}</ItemDetail>
              <button>Añadir a favoritos</button>
            </BoxDetails>
            <ItemDetail>{movieDetail?.overview}</ItemDetail>
            <ItemDetail>{movieDetail?.status}</ItemDetail>
            <h3 style={{ color: "white" }}>Productoras</h3>
            <div style={{ display: "flex", gap: "2rem" }}>
              {movieDetail?.production_companies?.map((item) => (
                <div key={item.id}>
                  <TitleProduction>{item.name}</TitleProduction>
                </div>
              ))}
            </div>
          </DisplayDetails>
        </DisplayBox>
      </ImgBack>
    </Box>
  );
};

export default CardMovieDetail;
