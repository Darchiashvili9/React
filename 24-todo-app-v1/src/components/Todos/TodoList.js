import { useState } from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      <hr />
      {!todos.length ? (
        <h3>list is empty, add something</h3>
      ) : (
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              index={index}
            />
          );
        })
      )}
    </div>
  );
}

export default TodoList;
