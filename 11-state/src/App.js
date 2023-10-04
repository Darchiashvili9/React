import "./App.css";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber maxNumb={999} />
    </div>
  );
}

export default App;
