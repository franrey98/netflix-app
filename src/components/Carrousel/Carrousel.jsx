import React from "react";
import Slider from "react-slick";
import { SlickArrowLeft, SlickArrowRight } from "../../utils/arrows";
import CardMovies from "../Cards/CardMovies";

const Carrousel = ({ items }) => {
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
    <>
      <Slider {...settings}>
        {items?.map((item) => (
          <CardMovies item={item} key={item.id} />
        ))}
      </Slider>
    </>
  );
};

export default Carrousel;
