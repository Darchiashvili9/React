function Wrapper(props) {
  console.log(props.children.props);

  const style = {
    backgroundColor: props.color,
    width: "250px",
    padding: "20px",
    margin: "20px auto",
  };

  return (
    <div>
      <div style={style}>{props.children}</div>
    </div>
  );
}

export default Wrapper;
