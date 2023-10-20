import { useState } from "react";
import Todo from "./Todo";

const todos = [null];

function TodoList(data) {
  const { todo } = data;

  if (todo != "") todos.push(todo);

  console.log(todos);

  return (
    <>
      <hr />
      {todo == "" && todos.length == 1 ? (
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
