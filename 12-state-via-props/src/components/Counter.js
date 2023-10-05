function Counter(props) {
  const { cter } = props;

  console.log(cter);

  return <h1>Total clicks: {cter}</h1>;
}

export default Counter;
