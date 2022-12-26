import arrowRight from "../img/arrow-right.svg";
import arrowLeft from "../img/arrow-left.svg";

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={arrowLeft} alt="prevArrow" {...props} />
);

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={arrowRight} alt="nextArrow" {...props} />
);

export const formatTime = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  return (
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0")
  );
};
