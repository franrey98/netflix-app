import React from "react";
import styled from "styled-components";
import { URL_IMG } from "../../context/MoviesContext";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #d5d5d5;
  border-radius: 1rem;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;
`;
const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: normal;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0%;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: 16px;
  margin: 0%;
  padding: 0 8px 10px 8px;
  @media (min-width: 768px) {
    padding: 0 8px 5px 0px;
  }
`;

const Img = styled.img`
  object-fit: contain;
  height: 110px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const CardSearch = ({ movie }) => {
  const navigate = useNavigate();

  const { getDetailMovie } = useMovies();

  let lengthOverview = movie?.overview.substring(0, 220);

  const handleSubmit = (id) => {
    getDetailMovie(id);
    navigate(`/resultSearch/${id}`);
  };

  return (
    <Container
      onClick={() => {
        handleSubmit(movie.id);
      }}
    >
      <Img src={`${URL_IMG + movie?.poster_path}`} alt={movie?.title} />
      <Box>
        <StyleBox>
          <Title>{movie?.title}</Title>
          <p>{movie?.release_date}</p>
          <Text>
            {movie?.overview.length >= 220
              ? lengthOverview + "..."
              : movie?.overview}
          </Text>
        </StyleBox>
      </Box>
    </Container>
  );
};

export default CardSearch;
