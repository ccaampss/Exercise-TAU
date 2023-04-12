import React, { useRef, useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`
        }}
      >
        {/* {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`Carousel Image ${index}`} />
          </div> */}
        ))}
      </div>
      <button onClick={handlePrevClick}>Next</button>
      <button onClick={handleNextClick}>Prev</button>
    </div>
  );
};

export default Carousel;