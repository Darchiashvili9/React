import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new Todo"
          type="text"
          value={text}
          onChange={(e) => onChangeHandler(e)}
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default TodoForm;
