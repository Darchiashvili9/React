function PetInfo(props) {
  console.log(props);

  //destruqturizacia
  const { animal, age } = props;

  return (
    <h1>
      Pentosa {animal} run away from natakhtari,age {age}
    </h1>
  );
}

export default PetInfo;
 