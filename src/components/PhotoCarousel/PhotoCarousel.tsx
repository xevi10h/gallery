import { useContext } from "react";
import Slider from "react-slick";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import "./PhotoCarousel.css";
import useWindowSize from "../../utils/UseWindowSize";

export default function SimpleSlider() {
  const { photos } = useContext(PhotoContext) as PhotoContextType;
  const { width } = useWindowSize();
  let slidesToShow = 1;
  let slidesToScroll = 1;
  if (width > 1200 && photos.length > 5) {
    slidesToShow = 5;
    slidesToScroll = 2;
  } else if (width > 768 && photos.length > 3) {
    slidesToShow = 3;
  } else {
    slidesToShow = 1;
  }
  return (
    <div className="carouselContainer">
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
      >
        {photos.map((photo, index) => (
          <div key={index} className="carouselPhotoContainer">
            <img
              className="carouselPhotoImage"
              src={photo.imageSmall}
              alt={photo.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
