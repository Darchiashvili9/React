import { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <>
      <hr />
      {todos.length == 0 ? (
        <h3>todos is empty</h3>
      ) : (
        todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })
      )}
    </>
  );
}

export default TodoList;
