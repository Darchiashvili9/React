import { useState } from "react";
import generateRandomNumb from "../utils/generateRandomNumb";

function RandomNumber(props) {
  const { maxNumb } = props;
  const [randomNumb, setRandomNumb] = useState(generateRandomNumb(maxNumb));

  const changeRandomNumb = () => {
    setRandomNumb(generateRandomNumb(maxNumb));
  };

  return (
    <div>
      <h1>{randomNumb}</h1>
      <button onClick={changeRandomNumb}>Generate random number</button>
    </div>
  );
}

export default RandomNumber;
