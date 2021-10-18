import React, { useState } from "react";
import "./carousel.css";
import { images } from "../../helpers/CarouselData";
import arrow from "../../assets/images/icon-next.svg";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className='carousel'>
      <div
        className='carousel-inner'
        style={{ backgroundImage: `url(${images[currentImage].img})` }}
      >
        <div
          className='left-side'
          onClick={() => currentImage > 0 && setCurrentImage(currentImage - 1)}
        >
          <img src={arrow} />
        </div>
        <div
          className='right-side'
          onClick={() =>
            currentImage < images.length - 1 &&
            setCurrentImage(currentImage + 1)
          }
        >
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
