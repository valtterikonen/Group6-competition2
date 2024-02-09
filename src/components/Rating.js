// Rating.js
import React from 'react';

const Rating = ({ stars }) => {
  const rating = Math.round(stars);

  const starIcons = Array.from({ length: 5 }, (_, index) => {
    if (index < rating) {
      return '★'; // Filled star
    } else {
      return '☆'; // Empty star
    }
  });

  return (
    <div>
      {starIcons}
    </div>
  );
};

export default Rating;