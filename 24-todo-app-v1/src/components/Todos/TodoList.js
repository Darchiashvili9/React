import { useState } from "react";
import Todo from "./Todo";

const todos = [null];

function TodoList(data) {
  const { todo } = data;
  todos.push(todo);

  return (
    <>
      <hr />
      {todos.length == 0 ? (
        <h1>todos is empty</h1>
      ) : (
        todos.map((todo, index) => {
          return <Todo key={index} Todo={todo} />;
        })
      )}
    </>
  );
}

export default TodoList;
