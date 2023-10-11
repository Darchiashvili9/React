import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h1>first wrapper</h1>
        <button>Click me</button>
      </Wrapper>

      <Wrapper color="lightgreen">
        <h1>second wrapper</h1>
        <p>desc</p>
        <input type="text" placeholder="enter value" />
      </Wrapper>
    </div>
  );
}

export default App;
