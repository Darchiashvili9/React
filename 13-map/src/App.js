import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = [333, 777, 999, "click me"];

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter cter={count} />

      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}
    </div>
  );
}

export default App;
