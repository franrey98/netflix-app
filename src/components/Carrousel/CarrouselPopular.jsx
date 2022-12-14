import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useMovies } from "../../hooks/useMovies";
import CardPopularMovies from "../Cards/CardPopularMovies";
import { SlickArrowLeft, SlickArrowRight } from "../../utils/arrows";

const CarrouselPopular = () => {
  const { popularMovies } = useMovies();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    dots: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <Box>
      <Slider {...settings}>
        {popularMovies?.map((item) => (
          <CardPopularMovies item={item} key={item.id} />
        ))}
      </Slider>
    </Box>
  );
};

const Box = styled.div``;

export default CarrouselPopular;
