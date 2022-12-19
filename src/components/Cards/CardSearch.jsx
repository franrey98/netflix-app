import React from "react";
import styled from "styled-components";
import { URL_IMG } from "../../context/MoviesContext";
import { Link, useNavigate } from "react-router-dom";

const CardSearch = ({ movie }) => {
  let lengthOverview = movie?.overview.substring(0, 140);
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/login");
      }}
    >
      <Img src={`${URL_IMG + movie?.poster_path}`} alt={movie?.title} />
      <Box>
        <StyleBox>
          <Title>{movie?.title}</Title>
          <p>{movie?.release_date}</p>
          <Text>
            {movie?.overview.length >= 140
              ? lengthOverview + "..."
              : movie?.overview}
          </Text>
        </StyleBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 7rem;
  gap: 1rem;
  border: 1px solid #d5d5d5;
  border-radius: 1rem;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;
`;
const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0%;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: 16px;
  margin: 0%;
`;

const Img = styled.img`
  object-fit: contain;
  height: 110px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export default CardSearch;
