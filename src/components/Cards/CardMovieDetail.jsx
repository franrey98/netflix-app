import React from "react";
import styled from "styled-components";
import { URL_IMG } from "../../context/MoviesContext";
import { useMovies } from "../../hooks/useMovies";
import { formatTime } from "../../utils/arrows.js";
import Spinner from "../../utils/Spinner";

const Img = styled.img`
  object-fit: contain;
  height: 450px;
  width: 18rem;
  padding-left: 0;
  @media (min-width: 1180px) {
    padding-left: 10rem;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid wheat;
  color: white;
  background-color: #bbb80e;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

const BoxButton = styled.div`
  grid-column: 2/3;
  width: 20rem;
  padding-right: 1rem;
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
  align-items: flex-start;
  width: 100%;
`;

const DisplayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
  padding-right: 2rem;
  padding-left: 2rem;
  @media (min-width: 1180px) {
    display: grid;
    justify-items: center;
    flex-direction: row;
    padding-right: 4rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const BoxDetails = styled.div`
  display: flex;
  width: 100%;
`;
const ItemDetail = styled.div`
  color: white;
  display: flex;
  gap: 5px;
  font-size: 18px;
`;

const TitleProduction = styled.p`
  font-size: 20px;
  color: white;
`;

const ImgBack = styled.div`
  object-fit: contain;
  height: 1400px;
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
  const { movieDetail, isLoading, addFavMovie } = useMovies();

  const formatedGens = (gens) => {
    const sliceGens = gens?.map((item) => item.name);

    const newGens = sliceGens
      ?.slice(1, sliceGens.length - 1)
      .join(",")
      .replace(",", "-")
      .concat("-");
    const firstGen = sliceGens?.slice(0, 1);
    const lastGen = sliceGens?.slice(sliceGens.length - 1, sliceGens.length);

    if (gens.length <= 1) {
      return firstGen;
    } else {
      return `${firstGen}-${newGens}${lastGen}`;
    }
  };

  const handleSubmit = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement.parentElement;

    const img = parent.querySelector("#img").getAttribute("src");
    const title = parent.querySelector("#title").innerText;
    const releaseDate = parent.querySelector("#release-date").innerText;
    const popularity = parent.querySelector("#popularity").innerText;
    const voteAverage = parent.querySelector("#vote-average").innerText;
    const tagline = parent.querySelector("#tagline").innerText;
    const overview = parent.querySelector("#overview").innerText;
    const status = parent.querySelector("#status").innerText;
    const objFavMovie = {
      img,
      title,
      releaseDate,
      popularity,
      voteAverage,
      tagline,
      overview,
      status,
      id: movieDetail.id,
    };

    addFavMovie(objFavMovie);
  };
  const dateRelease = movieDetail?.release_date?.split("-").slice(0, 1).join();

  if (isLoading) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Spinner />
      </div>
    );
  } else if (Object.keys(movieDetail).length === 0) {
    return (
      <p style={{ textAlign: "center" }}>
        Error on the page, please go back to the beginning
      </p>
    );
  }

  return (
    <Box>
      <ImgBack urlImg={`${URL_IMG + movieDetail?.backdrop_path}`}>
        <DisplayBox>
          <Img
            id="img"
            src={`${URL_IMG + movieDetail?.poster_path}`}
            alt={movieDetail?.title}
          />
          <DisplayDetails>
            <Title id="title">
              {movieDetail?.original_title} ({dateRelease})
            </Title>
            <BoxDetails>
              <ItemDetail id="release-date">
                <ItemDetail>{movieDetail?.release_date}</ItemDetail>
                {formatedGens(movieDetail?.genres)} °
                <ItemDetail id="runtime">
                  {formatTime(movieDetail?.runtime)}hs
                </ItemDetail>
              </ItemDetail>
            </BoxDetails>
            <BoxDetails>
              <ItemDetail id="popularity">{movieDetail?.popularity}</ItemDetail>
              {"----"}
              <ItemDetail id="vote-average">
                {movieDetail?.vote_average}
              </ItemDetail>
            </BoxDetails>
            <ItemDetail id="tagline">{movieDetail?.tagline}</ItemDetail>
            <p style={{ color: "white", fontSize: "24px" }}>Description</p>
            <ItemDetail id="overview">{movieDetail?.overview}</ItemDetail>
            <ItemDetail id="status">{movieDetail?.status}</ItemDetail>
            <h3 style={{ color: "white", fontSize: "24px" }}>Producers</h3>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              {movieDetail?.production_companies?.length === 0 && (
                <p style={{ color: "white", fontSize: "18px" }}>
                  Not producers found
                </p>
              )}
              {movieDetail?.production_companies?.map((item) => (
                <div key={item.id}>
                  <TitleProduction id="production-companies">
                    {item.name}
                  </TitleProduction>
                </div>
              ))}
            </div>
          </DisplayDetails>
          <BoxButton>
            <Button onClick={handleSubmit}>Add to favorites</Button>
          </BoxButton>
        </DisplayBox>
      </ImgBack>
    </Box>
  );
};

export default CardMovieDetail;
