import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import CardPopularMovies from "../components/CardPopularMovies";
import { useMovies } from "../hooks/useMovies";
import arrowRight from "../img/arrow-right.svg";
import arrowLeft from "../img/arrow-left.svg";

const BrowseMore = () => {
  const { popularMovies } = useMovies();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={arrowLeft} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={arrowRight} alt="nextArrow" {...props} />
  );

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

export default BrowseMore;
