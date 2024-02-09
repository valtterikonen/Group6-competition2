import Rating from './components/Rating';
import Drivercard from './components/Drivercard';
import ClickablePicture from './components/ClickablePicture';
import './App.css';

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
      <div className="ClickablePicture">
        <h1>Iteration 4: ClickablePicture</h1>
        <ClickablePicture
        img="./images/maxence.png"
        imgClicked="./images/maxence-glasses.png"
        />
      </div>
    </div>
  );
}

export default App;