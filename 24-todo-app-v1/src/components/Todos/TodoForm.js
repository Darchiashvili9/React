import { useState } from "react";
import styles from "./TodoForm.module.css";

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
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new Todo"
          type="text"
          value={text}
          onChange={(e) => onChangeHandler(e)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
