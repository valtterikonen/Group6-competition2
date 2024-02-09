import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  return (
    <div>
      <button 
        style={{ backgroundColor: colors[currentColorIndex], color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
        onClick={incrementLikes}
      >
        {likes} Likes
      </button>
    </div>
  );
};

export default LikeButton;
