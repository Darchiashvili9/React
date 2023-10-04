import { useState } from "react";

function generateRandomNumb() {
  return Math.floor(Math.random() * 100);
}

function RandomNumber() {
  const [randomNumb, setRandomNumb] = useState(generateRandomNumb());

  const changeRandomNumb = () => {
    setRandomNumb(generateRandomNumb());
  };

  return (
    <div>
      <h1>{randomNumb}</h1>
      <button onClick={changeRandomNumb}>Generate random number</button>
    </div>
  );
}

export default RandomNumber;
