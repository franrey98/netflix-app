import arrowRight from "../img/arrow-right.svg";
import arrowLeft from "../img/arrow-left.svg";

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={arrowLeft} alt="prevArrow" {...props} />
);

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={arrowRight} alt="nextArrow" {...props} />
);
