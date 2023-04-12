import React, { useState } from "react";

const images = [
  "https://picsum.photos/500/300?random=1",
  "https://picsum.photos/500/300?random=2",
  "https://picsum.photos/500/300?random=3",
  "https://picsum.photos/500/300?random=4",
  "https://picsum.photos/500/300?random=5",
  "https://picsum.photos/500/300?random=6",
  "https://picsum.photos/500/300?random=7",
  "https://picsum.photos/500/300?random=8",
  "https://picsum.photos/500/300?random=9",
  "https://picsum.photos/500/300?random=10"
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleKeyDown = e => {
    if (e.keyCode === 37) { // left arrow on keyboard
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    } else if (e.keyCode === 39) { // right arrow on keyboard
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
  };

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown}>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};
export default ImageCarousel;
