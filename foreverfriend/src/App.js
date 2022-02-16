import './App.css';
import CatData from './CatData'
import DogData from './DogData'

console.log(CatData)

function App() {
  return (
    <div>
      <h1>Forever Friend</h1>
      <h2>Cat Data Test: {CatData[0].name}</h2>
      <h2>Dog Data Test: {DogData[0].name}</h2>
    </div>
  );
}

export default App;
