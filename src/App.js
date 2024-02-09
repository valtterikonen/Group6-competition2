import Rating from './components/Rating';
import Drivercard from './components/Drivercard';
import ClickablePicture from './components/ClickablePicture';
import './App.css';
import LikeButton from './components/Likebutton';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="Iterations">
      <div className="Ratings">
        <h1>Iteration 1: Ratings</h1>
        <Rating stars={0} />
        <Rating stars={1} />
        <Rating stars={2} />
        <Rating stars={3} />
        <Rating stars={4} />
        <Rating stars={5} />
      </div>
      <>
      <h1>Iteration 2: Driver Cards</h1>
        <Drivercard /> 
      </>
      <h1>Iteration 3: Like Button</h1>
      <div className="LikeButton">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="ClickablePicture">
        <h1>Iteration 4: ClickablePicture</h1>
        <ClickablePicture
        img="./images/maxence.png"
        imgClicked="./images/maxence-glasses.png"
        />
      </div>
      <h1>Iteration 5: Dice</h1>
      <div>
        <Dice/>
      </div>
      <h1>Iteration 6: Carousel</h1>
      <div>
      <Carousel
      images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
        ]}/>
      </div>
    </div>
  );
}

export default App;