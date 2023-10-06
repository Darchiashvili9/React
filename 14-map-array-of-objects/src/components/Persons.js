import Person from "./Person";
import persons from "../data/persons";

function Persons() {
  return (
    <div>
      {persons.map((person, index) => {
        return <Person key={index} {...person} />;
      })}
    </div>
  );
}
export default Persons;
