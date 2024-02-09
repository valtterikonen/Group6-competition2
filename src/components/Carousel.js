import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='carousel'>
      <button onClick={prevImage}>Left</button>
      <img src={images[currentImageIndex]} alt="Carousel"/>
      <button onClick={nextImage}>Right</button>
    </div>
  );
};

export default Carousel;
