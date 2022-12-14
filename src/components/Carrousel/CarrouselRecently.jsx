import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import CardRecently from "../Cards/CardRecently";
import { useMovies } from "../../hooks/useMovies";
import { SlickArrowLeft, SlickArrowRight } from "../../utils/arrows";

const CarrouselRecently = () => {
  const { recentlyAdd } = useMovies();

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <Box>
      <Slider {...settings}>
        {recentlyAdd?.map((item) => (
          <CardRecently item={item} key={item.id} />
        ))}
      </Slider>
    </Box>
  );
};

const Box = styled.div``;

export default CarrouselRecently;
