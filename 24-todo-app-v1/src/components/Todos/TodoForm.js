import { useState } from "react";
import TodoList from "./TodoList";

function TodoForm() {
  const [todo, setTodo] = useState({ todo: "" });

  const [todoSubmit, setTodoSubmit] = useState("");

  function handleTodoSubmit(event) {
    event.preventDefault();
    setTodoSubmit(todo.todo);
    setTodo({ todo: "" });
  }

  function handleTodoChange(todo) {
    setTodo({ ...todo, todo: todo.target.value });
    setTodoSubmit("");
  }

  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={handleTodoSubmit}>
        <input
          placeholder="Enter new Todo"
          type="text"
          value={todo.todo}
          onChange={(t) => handleTodoChange(t)}
        />

        <button type="submit">submit</button>
        <TodoList todo={todoSubmit} />
      </form>
    </>
  );
}

export default TodoForm;
