import React from "react";
import styled from "styled-components";
import { ItemDetailPercentage } from "./CardMovieDetail";

const Container = styled.div``;
const DisplayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d5d5d5;
  border-radius: 1rem;
  margin-top: 5px;
  margin-bottom: 5px;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 0px;
  @media (min-width: 768px) {
    width: 200px;
    border-top-right-radius: 0px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  color: black;
  margin: 0;
`;

const ItemDetail = styled.p`
  color: black;
  margin: 0;
  margin-top: 10px;
  gap: 5px;
`;

const CardFavoriteMovie = ({ movie }) => {
  return (
    <Container>
      <DisplayBox>
        <Img src={movie?.img} alt={movie?.title} />
        <Box>
          <div style={{ padding: "0 10px 10px 10px" }}>
            <Title>{movie?.title}</Title>
            <ItemDetail>{movie?.releaseDate}</ItemDetail>
            <h3
              style={{
                color: "black",
                fontSize: "24px",
                fontWeight: "500",
                marginTop: "10px",
                margin: "0",
              }}
            >
              Calification
            </h3>
            <div style={{ width: "4.4rem", marginTop: "7px" }}>
              <ItemDetailPercentage>{movie?.voteAverage}</ItemDetailPercentage>
            </div>
            <p
              style={{
                color: "black",
                fontSize: "24px",
                fontWeight: "500",
                marginTop: "10px",
                margin: "0",
              }}
            >
              Description
            </p>
            <ItemDetail>{movie?.tagline}</ItemDetail>
            <ItemDetail>{movie?.overview}</ItemDetail>
            {/*Poner calificacion por estrellas y desp hacer un filtro del mismo*/}
          </div>
        </Box>
      </DisplayBox>
    </Container>
  );
};

export default CardFavoriteMovie;
