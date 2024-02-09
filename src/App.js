// App.js
import React from 'react';
import Rating from './components/Rating';
import LikeButton from './components/Likebutton';
import './App.css';

function App() {
  return (
    <div className="Iterations">
      <div className="Ratings">
        <Rating stars={0} />
        <Rating stars={1} />
        <Rating stars={2} />
        <Rating stars={3} />
        <Rating stars={4} />
        <Rating stars={5} />
     </div>
      <div className="LikeButtons">
        <LikeButton />
        <LikeButton />
      </div>
    </div>
  );
}

export default App;