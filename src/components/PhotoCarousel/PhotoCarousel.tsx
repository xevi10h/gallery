import React, { Component, useContext } from "react";
import Slider from "react-slick";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import "./PhotoCarousel.css";
import useWindowSize from "../../utils/UseWindowSize";

export default function SimpleSlider() {
  const { photos } = useContext(PhotoContext) as PhotoContextType;
  const { width } = useWindowSize();
  let slidesToShow;
  if (width > 1200) {
    slidesToShow = 5;
  } else if (width > 768) {
    slidesToShow = 3;
  } else {
    slidesToShow = 1;
  }
  return (
    <div className="photoCarouselContainer">
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        className="slider"
      >
        {photos.map((photo, index) => (
          <div className="photoCarouselBox">
            <img
              className="photoCarouselImage"
              src={photo.image}
              alt={`carousel-img-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
