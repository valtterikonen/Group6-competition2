import Rating from './components/Rating';
import Drivercard from './components/Drivercard';
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
    </div>
  );
}

export default App;