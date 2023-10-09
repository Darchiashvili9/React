function ResetButton({ cter, onClick }) {
  return (
    !!cter && ( //cter>0
      <div>
        <button style={{ backgroundColor: "lightgreen" }} onClick={onClick}>
          Reset
        </button>
      </div>
    )
  );
}

export default ResetButton;
