function PetInfo(props) {
  console.log(props);

  //destruqturizacia
  const { animal, age, hasPet } = props;

  return hasPet ? (
    <h1>
      Pentosa {animal} run away from natakhtari,age {age}
    </h1>
  ) : (
    <h2>no pet to show</h2>
  );
}

export default PetInfo;
